// Orquestador central de la oficina de agentes (MVP Treve) en Supabase Edge Functions.
//
// POST {accion:'iniciar', periodo, version, escenario} → crea una corrida y su cola de tareas
// GET  ?accion=estado&corrida=<id>&desde=<eventoId>    → estado, bitácora, hallazgos, indicadores
// POST {accion:'resolver', hallazgo, decision, nota}    → validación humana de un hallazgo
// GET  ?accion=corridas | ?accion=salud                 → últimas corridas | integraciones activas
// POST {accion:'tick'}                                  → procesa la cola (lo llama pg_cron cada minuto)
//
// Cada paso es un agente: toma su tarea de treve.tareas, deja eventos en treve.eventos (el 3D los anima)
// y su salida para el siguiente. Los montos los calcula código; JEV decide; OpenAI redacta.
import postgres from 'npm:postgres@3.4.5';
import * as XLSXns from 'npm:xlsx@0.18.5';
import { generateSimData } from './lib/sim-generator.js';
import * as N from './lib/normalizar.js';
import { asignarClientes, conciliar, evaluar } from './lib/conciliar.js';
import { calcularIndicadores, comoObjeto, diasHabiles } from './lib/indicadores.js';
import { hojasReporte } from './lib/reporte.js';
import { decidirPorReglas, peticionJev, interpretarJev, estadoPorAccion } from './lib/juicio.js';
import { PROMPT_CONCLUSIONES, PROMPT_MAPEO, datosParaConclusiones, conclusionesPlantilla, openaiJson, costoUsd } from './lib/cerebro.js';

declare const EdgeRuntime: { waitUntil(p: Promise<unknown>): void };
type Row = Record<string, any>;
// SheetJS es CommonJS: según el runtime sus funciones llegan en el namespace o en default
const XLSX: any = (XLSXns as any).utils ? XLSXns : (XLSXns as any).default;

const env = (k: string, d = '') => Deno.env.get(k) || d;
const sql = postgres(env('SUPABASE_DB_URL'), { prepare: false, max: 6, idle_timeout: 20 });
const SUPABASE_URL = env('SUPABASE_URL');
const SERVICE_KEY = env('SUPABASE_SERVICE_ROLE_KEY') || (() => {
  try { return JSON.parse(env('SUPABASE_SECRET_KEYS', '{}')).default || ''; } catch { return ''; }
})();
const SIM_URL = env('SIM_URL', 'https://n8n-gj7s.onrender.com/webhook/treve-sim');
const SIM_TOKEN = env('SIM_TOKEN');
const ALERTAS_URL = env('N8N_ALERTAS_URL', 'https://n8n-gj7s.onrender.com/webhook/treve-alertas');
const OPENAI_KEY = env('OPENAI_API_KEY');
const OPENAI_MODEL = env('OPENAI_MODEL', 'gpt-4o-mini');
const JEV_KEY = env('JEV_API_KEY');
const JEV_URL = env('JEV_URL', 'https://api.typesafe.ai/v1/systemone');
const JEV_HEADER = env('JEV_AUTH_HEADER', 'Authorization');
const JEV_PREFIX = env('JEV_AUTH_PREFIX', 'Bearer ');
const PUBLICO = env('TREVE_PUBLICO', '1') !== '0'; // demo pública con datos ficticios
const BUCKET = 'treve-archivos';
const ESCENARIOS = ['normal', 'sucio', 'caida'];
const FUENTES: Record<string, string> = { monday: 'Monday', compaq: 'Compaq', esfera: 'Esfera', bancos: 'Bancos' };

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
};
const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data, (_k, v) => (typeof v === 'bigint' ? Number(v) : v)), { status, headers: { ...CORS, 'Content-Type': 'application/json' } });
const fallo = (msg: string, status = 400) => Object.assign(new Error(msg), { status });
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
const $ = (n: number) => '$' + Number(n).toLocaleString('es-MX', { maximumFractionDigits: 0 });

async function fetchT(url: string, init: RequestInit = {}, ms = 30000) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), ms);
  try {
    return await fetch(url, { ...init, signal: ctrl.signal });
  } finally {
    clearTimeout(t);
  }
}

// ---------- bitácora, salidas y costos ----------
async function evento(corrida: string, tarea: number | null, de: string, para: string | null, tipo: string, mensaje: string, datos: Row = {}) {
  await sql`insert into treve.eventos (corrida_id, tarea_id, de, para, tipo, mensaje, datos)
            values (${corrida}, ${tarea}, ${de}, ${para}, ${tipo}, ${mensaje}, ${sql.json(datos)})`;
}
async function salida(corrida: string, paso: string, fuente?: string) {
  const [t] = fuente
    ? await sql`select salida from treve.tareas where corrida_id = ${corrida} and paso = ${paso} and entrada->>'fuente' = ${fuente} and estado = 'hecha' order by id desc limit 1`
    : await sql`select salida from treve.tareas where corrida_id = ${corrida} and paso = ${paso} and estado = 'hecha' order by id desc limit 1`;
  if (!t) throw new Error(`falta la salida de ${paso}${fuente ? ` (${fuente})` : ''}`);
  return t.salida as Row;
}
async function sumarCosto(corrida: string, { usd = 0, tokens = 0, jev = 0 }) {
  await sql`update treve.corridas set costo_ia = jsonb_build_object(
      'openai_usd', coalesce((costo_ia->>'openai_usd')::numeric, 0) + ${usd},
      'tokens', coalesce((costo_ia->>'tokens')::int, 0) + ${tokens},
      'jev_llamadas', coalesce((costo_ia->>'jev_llamadas')::int, 0) + ${jev},
      'modelo', ${OPENAI_KEY ? OPENAI_MODEL : 'plantillas'}::text)
    where id = ${corrida}`;
}
async function hallazgosDe(corrida: string) {
  return await sql`select id, tipo, severidad, descripcion, monto::float as monto, referencia, evidencia, decision, estado, nota
                   from treve.hallazgos where corrida_id = ${corrida} order by created_at, id`;
}

// ---------- Storage (REST) ----------
const storageHeaders = () => ({ apikey: SERVICE_KEY, ...(SERVICE_KEY.startsWith('eyJ') ? { Authorization: `Bearer ${SERVICE_KEY}` } : {}) });
async function subir(path: string, body: Uint8Array | string, contentType: string) {
  const res = await fetch(`${SUPABASE_URL}/storage/v1/object/${BUCKET}/${path}`, {
    method: 'POST',
    headers: { ...storageHeaders(), 'Content-Type': contentType, 'x-upsert': 'true' },
    body,
  });
  if (!res.ok) throw new Error(`Storage: ${res.status} ${await res.text()}`);
}
async function firmar(path: string) {
  const res = await fetch(`${SUPABASE_URL}/storage/v1/object/sign/${BUCKET}/${path}`, {
    method: 'POST',
    headers: { ...storageHeaders(), 'Content-Type': 'application/json' },
    body: JSON.stringify({ expiresIn: 3600 }),
  });
  if (!res.ok) return null;
  const j = await res.json();
  return j.signedURL ? `${SUPABASE_URL}/storage/v1${j.signedURL}` : null;
}
async function sha256(data: Uint8Array) {
  const h = await crypto.subtle.digest('SHA-256', data);
  return [...new Uint8Array(h)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

// ---------- archivos ----------
const csvDe = (rows: Row[]) => {
  const cols = Object.keys(rows[0] || {});
  const cell = (v: unknown) => {
    const s = v == null ? '' : String(v);
    return /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
  };
  return '﻿' + [cols.join(','), ...rows.map((r) => cols.map((c) => cell(r[c])).join(','))].join('\r\n');
};
function libro(hojas: { nombre: string; filas: Row[] }[]) {
  const wb = XLSX.utils.book_new();
  for (const h of hojas) {
    const ws = XLSX.utils.json_to_sheet(h.filas);
    const cols = Object.keys(h.filas[0] || {});
    ws['!cols'] = cols.map((c) => ({ wch: Math.min(60, Math.max(c.length, ...h.filas.map((f) => String(f[c] ?? '').length)) + 2) }));
    XLSX.utils.book_append_sheet(wb, ws, h.nombre.slice(0, 31));
  }
  return new Uint8Array(XLSX.write(wb, { type: 'array', bookType: 'xlsx' }));
}
const leerXlsx = (bytes: Uint8Array) => {
  const wb = XLSX.read(bytes, { type: 'array' });
  return XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]], { defval: '', raw: true }) as Row[];
};

// Descarga una fuente del simulador (n8n). Si n8n no contesta, usa el generador local de respaldo.
async function descargar(fuente: string, o: Row) {
  const url = `${SIM_URL}?fuente=${fuente}&periodo=${o.periodo}&version=${o.version}&escenario=${o.escenario}`;
  let ultimo = '';
  for (let i = 1; i <= 3; i++) {
    try {
      const res = await fetchT(url, { headers: SIM_TOKEN ? { 'x-sim-token': SIM_TOKEN } : {} }, i === 1 ? 70000 : 25000);
      if (res.status === 503) {
        await res.body?.cancel();
        if (i < 2) {
          await sleep(1500);
          continue;
        }
        return { caida: true, intentos: i };
      }
      if (!res.ok) throw new Error(`el simulador respondió ${res.status}`);
      const disp = res.headers.get('content-disposition') || '';
      const nombre = res.headers.get('x-sim-archivo') || disp.match(/filename="?([^";]+)/)?.[1] || `${fuente}_${o.periodo}`;
      const ct = res.headers.get('content-type') || '';
      if (fuente === 'compaq') {
        if (ct.includes('json')) throw new Error(`Compaq devolvió JSON en lugar de Excel: ${(await res.text()).slice(0, 120)}`);
        return { formato: 'xlsx', bytes: new Uint8Array(await res.arrayBuffer()), nombre, origen: 'n8n' };
      }
      if (fuente === 'monday') return { formato: 'json', json: await res.json(), nombre, origen: 'n8n' };
      return { formato: 'csv', text: await res.text(), nombre, origen: 'n8n' };
    } catch (e) {
      ultimo = (e as Error).name === 'AbortError' ? 'tiempo de espera agotado' : (e as Error).message;
    }
  }
  if (o.escenario === 'caida' && fuente === 'bancos') return { caida: true, intentos: 3 };
  const d = generateSimData(o.periodo, { version: o.version, escenario: o.escenario }) as Row;
  const base = { origen: 'local', aviso: ultimo };
  if (fuente === 'monday') return { ...base, formato: 'json', json: d.monday, nombre: `monday_${o.periodo}.json` };
  if (fuente === 'compaq') return { ...base, formato: 'xlsx', bytes: libro([{ nombre: 'Facturas', filas: d.compaq }]), nombre: `compaq_facturas_${o.periodo}_v${o.version}.xlsx` };
  const nombre = fuente === 'esfera' ? `esfera_nomina_${o.periodo}.csv` : `banco_estado_cuenta_${o.periodo}.csv`;
  return { ...base, formato: 'csv', text: csvDe(d[fuente]), nombre };
}

// ---------- agentes (un manejador por paso) ----------
type Ctx = { t: Row; corrida: string; op: Row; ev: (de: string, para: string | null, tipo: string, mensaje: string, datos?: Row) => Promise<void> };

const AGENTES: Record<string, (c: Ctx) => Promise<Row>> = {
  async extraer({ t, corrida, op, ev }) {
    const fuente = t.entrada.fuente as string;
    const nom = FUENTES[fuente];
    await ev('ag_orq', t.agente, 'tarea', `Extrae ${nom} del periodo ${op.periodo}`);
    await ev(t.agente, `src:${fuente}`, 'tarea', `Solicita la exportación a ${nom}`, { url: SIM_URL.replace(/\?.*/, '') });
    const r: Row = await descargar(fuente, op);
    if (r.caida) {
      await ev(`src:${fuente}`, t.agente, 'error', `${nom} no responde (503) después de ${r.intentos} intentos: el ciclo sigue sin esta fuente`);
      return { fuente, faltante: true };
    }
    if (r.origen === 'local') await ev(t.agente, 'ag_orq', 'info', `El simulador de n8n no respondió (${String(r.aviso).replace(/^error sending request for url \([^)]*\):?\s*/, '').slice(0, 80)}); uso el simulador local de respaldo`);
    let rows: Row[] | null = null;
    let bytes: Uint8Array;
    let ct: string;
    if (r.formato === 'json') {
      bytes = new TextEncoder().encode(JSON.stringify(r.json));
      ct = 'application/json';
    } else if (r.formato === 'xlsx') {
      bytes = r.bytes;
      ct = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
      rows = leerXlsx(bytes);
    } else {
      bytes = new TextEncoder().encode(r.text);
      ct = 'text/csv; charset=utf-8';
      rows = N.parseCsv(r.text);
    }
    const path = `${corrida}/${r.nombre}`;
    await subir(path, bytes, ct);
    const filas = rows ? rows.length : N.normalizarMonday(r.json).length;
    const columnas = rows ? Object.keys(rows[0] || {}) : null;
    await sql`insert into treve.archivos (corrida_id, fuente, nombre, storage_path, formato, filas, columnas, sha256)
              values (${corrida}, ${fuente}, ${r.nombre}, ${path}, ${r.formato}, ${filas}, ${columnas}::text[], ${await sha256(bytes)})
              on conflict (storage_path) do nothing`;
    await ev(`src:${fuente}`, t.agente, 'documento', `${r.nombre} · ${filas} registros`, { archivo: r.nombre, filas, origen: r.origen });
    await ev(t.agente, 'ag_norm', 'resultado', `Extrajo ${filas} registros de ${nom} (${r.formato.toUpperCase()}${r.origen === 'local' ? ', respaldo local' : ' vía n8n'})`);
    return { fuente, formato: r.formato, nombre: r.nombre, origen: r.origen, filas, columnas, rows, json: r.formato === 'json' ? r.json : undefined };
  },

  async mercado({ op, ev }) {
    await ev('ag_orq', 'ag_ext', 'tarea', 'Consulta tipo de cambio y días festivos del periodo');
    await ev('ag_ext', 'src:apis', 'tarea', 'GET Frankfurter (tipo de cambio) y Nager.Date (festivos)');
    const [Y, M] = op.periodo.split('-').map(Number);
    const ultimo = new Date(Date.UTC(Y, M, 0)).toISOString().slice(0, 10);
    const fecha = ultimo > new Date().toISOString().slice(0, 10) ? 'latest' : ultimo;
    let tipoCambio: Row | null = null;
    let calendario: Row | null = null;
    for (const base of ['https://api.frankfurter.dev/v1', 'https://api.frankfurter.app']) {
      try {
        const r = await fetchT(`${base}/${fecha}?from=USD&to=MXN`, {}, 12000);
        if (!r.ok) throw new Error(String(r.status));
        const j = await r.json();
        tipoCambio = { valor: j.rates.MXN, fecha: j.date, fuente: 'Frankfurter (Banco Central Europeo)' };
        break;
      } catch (_) { /* intenta el siguiente dominio */ }
    }
    try {
      const r = await fetchT(`https://date.nager.at/api/v3/PublicHolidays/${Y}/MX`, {}, 12000);
      if (!r.ok) throw new Error(String(r.status));
      const feriados = (await r.json()).filter((f: Row) => f.date.startsWith(op.periodo) && f.global !== false).map((f: Row) => ({ fecha: f.date, nombre: f.localName }));
      calendario = { feriados, diasHabiles: diasHabiles(op.periodo, feriados), fuente: 'Nager.Date' };
    } catch (_) {
      calendario = { feriados: [], diasHabiles: diasHabiles(op.periodo, []), fuente: 'calendario sin festivos (Nager.Date no respondió)' };
    }
    const txt = [
      tipoCambio ? `USD/MXN ${tipoCambio.valor} (${tipoCambio.fecha})` : 'tipo de cambio no disponible',
      `${calendario.diasHabiles} días hábiles${calendario.feriados.length ? `, festivos: ${calendario.feriados.map((f: Row) => f.nombre).join(', ')}` : ''}`,
    ].join(' · ');
    await ev('src:apis', 'ag_ext', 'documento', txt);
    await ev('ag_ext', 'ag_fin', 'resultado', txt);
    return { tipoCambio, calendario };
  },

  async normalizar({ t, corrida, ev }) {
    await ev('ag_orq', 'ag_norm', 'tarea', 'Unifica columnas, fechas, montos y nombres de clientes');
    const ext: Row = {};
    for (const f of Object.keys(FUENTES)) ext[f] = await salida(corrida, 'extraer', f);
    if (ext.monday.faltante || ext.compaq.faltante) throw Object.assign(new Error('sin Monday o Compaq no se puede conciliar'), { fatal: true });
    const tablas: Row = {};
    for (const fuente of ['compaq', 'esfera', 'bancos']) {
      const x = ext[fuente];
      if (x.faltante) continue;
      const firma = N.firmaColumnas(x.columnas);
      const [conocido] = await sql`select mapeo, origen from treve.mapeos where fuente = ${fuente} and firma = ${firma}`;
      let mapeo: Row;
      if (conocido) mapeo = conocido.mapeo;
      else {
        const m = N.mapearColumnas(fuente, x.columnas);
        mapeo = m.mapeo;
        let origen = 'regla';
        const [otro] = await sql`select 1 from treve.mapeos where fuente = ${fuente} limit 1`;
        if (otro) await ev('ag_norm', 'ag_orq', 'alerta', `${FUENTES[fuente]} cambió su formato (columnas: ${x.columnas.join(', ')}). Remapeo automático`, { tipo: 'cambio_formato', fuente });
        if (m.faltantes.length && OPENAI_KEY) {
          const r = await openaiJson({ apiKey: OPENAI_KEY, model: OPENAI_MODEL, system: PROMPT_MAPEO, user: { encabezados: m.desconocidas, campos: m.faltantes, ejemplo: x.rows.slice(0, 3) } });
          await sumarCosto(corrida, { usd: costoUsd(r.model, r.usage), tokens: r.usage.total_tokens || 0 });
          for (const [col, campo] of Object.entries(r.data.mapeo || {})) if (m.desconocidas.includes(col) && m.faltantes.includes(campo as string)) mapeo[col] = campo;
          origen = 'ia';
        }
        const faltan = (N.ESQUEMAS as Row)[fuente].requeridos.filter((k: string) => !Object.values(mapeo).includes(k));
        if (faltan.length) throw Object.assign(new Error(`no reconozco las columnas de ${FUENTES[fuente]}: faltan ${faltan.join(', ')}`), { fatal: true });
        await sql`insert into treve.mapeos (fuente, firma, mapeo, origen, aprobado) values (${fuente}, ${firma}, ${sql.json(mapeo)}, ${origen}, ${origen === 'regla'})
                  on conflict (fuente, firma) do nothing`;
      }
      tablas[fuente] = mapeo;
    }
    const datos = {
      ventas: N.normalizarMonday(ext.monday.json),
      facturas: N.normalizarCompaq(ext.compaq.rows, tablas.compaq),
      nomina: ext.esfera.faltante ? null : N.normalizarEsfera(ext.esfera.rows, tablas.esfera),
      movimientos: ext.bancos.faltante ? null : N.normalizarBancos(ext.bancos.rows, tablas.bancos),
    };
    const { clientes, alias } = asignarClientes(datos);
    for (const c of clientes) await sql`insert into treve.clientes (id, nombre, rfc) values (${c.id}, ${c.nombre}, ${c.rfc}) on conflict (id) do update set nombre = excluded.nombre`;
    for (const a of alias.filter((x: Row) => x.cliente_id))
      await sql`insert into treve.clientes_alias (sistema, alias, cliente_id, origen, confianza) values (${a.sistema}, ${a.alias}, ${a.cliente_id}, 'regla', ${a.confianza})
                on conflict (sistema, alias) do update set cliente_id = excluded.cliente_id, confianza = excluded.confianza`;
    const registros = datos.ventas.length + datos.facturas.length + (datos.nomina?.length || 0) + (datos.movimientos?.length || 0);
    const emparejados = alias.filter((a: Row) => a.sistema !== 'compaq' && a.cliente_id).length;
    await ev('ag_norm', 'ag_conc', 'resultado', `${registros} registros en formato único · ${clientes.length} clientes; ${emparejados} nombres de Monday y bancos emparejados con su RFC`);
    return { datos, clientes, alias };
  },

  async conciliar({ corrida, op, ev }) {
    const n = await salida(corrida, 'normalizar');
    const r = conciliar({ periodo: op.periodo, ...n.datos, clientes: n.clientes });
    for (const h of r.hallazgos) await ev('ag_conc', 'ag_qa', 'alerta', h.descripcion, { tipo: h.tipo, monto: h.monto });
    await ev('ag_conc', 'ag_qa', 'resultado', `Cruzó ventas ↔ facturas ↔ cobros ↔ nómina: ${r.hallazgos.length} hallazgos`);
    return r;
  },

  async juzgar({ corrida, ev }) {
    const { hallazgos } = await salida(corrida, 'conciliar');
    if (JEV_KEY && hallazgos.length) await ev('ag_qa', 'external', 'tarea', `Consulta a JEV qué hacer con ${hallazgos.length} hallazgos`);
    let llamadas = 0;
    const decisiones = await Promise.all(
      hallazgos.map(async (h: Row) => {
        if (!JEV_KEY) return decidirPorReglas(h);
        try {
          llamadas++;
          const r = await fetchT(JEV_URL, { method: 'POST', headers: { [JEV_HEADER]: `${JEV_PREFIX}${JEV_KEY}`, 'Content-Type': 'application/json' }, body: JSON.stringify(peticionJev(h)) }, 30000);
          if (!r.ok) throw new Error(`JEV respondió ${r.status}`);
          return interpretarJev(await r.json());
        } catch (e) {
          return { ...decidirPorReglas(h), aviso: (e as Error).message };
        }
      }),
    );
    if (llamadas) await sumarCosto(corrida, { jev: llamadas });
    const avisos = decisiones.filter((d: Row) => d.aviso);
    if (avisos.length) await ev('external', 'ag_qa', 'error', `JEV no respondió en ${avisos.length} casos (${avisos[0].aviso}); uso reglas fijas`);
    await sql`delete from treve.hallazgos where corrida_id = ${corrida}`;
    const ETIQ: Row = { corregir_automatico: 'corrección automática', validacion_humana: 'validación humana', solo_informar: 'aviso al área' };
    let revision = 0;
    for (const [i, h] of hallazgos.entries()) {
      const d = decisiones[i];
      const estado = estadoPorAccion(d.choice);
      if (estado === 'en_revision') revision++;
      const nota = estado === 'confirmado' ? 'Corregido automáticamente: el duplicado se excluye de los totales' : null;
      const [row] = await sql`insert into treve.hallazgos (corrida_id, tipo, severidad, descripcion, monto, referencia, evidencia, decision, estado, nota)
        values (${corrida}, ${h.tipo}, ${h.severidad}, ${h.descripcion}, ${h.monto}, ${sql.json(h.referencia)}, ${sql.json(h.evidencia || {})}, ${sql.json(d)}, ${estado}, ${nota}) returning id`;
      await ev(d.fuente === 'jev' ? 'external' : 'ag_qa', 'ag_qa', 'decision', `${h.tipo.replace(/_/g, ' ')} → ${ETIQ[d.choice]} (${Math.round(d.confidence * 100)} % · ${d.fuente === 'jev' ? 'JEV' : 'reglas'})`, { hallazgo_id: row.id, ...d });
      if (estado === 'en_revision') await ev('ag_qa', 'user', 'validacion', `Requiere tu aprobación: ${h.descripcion}`, { hallazgo_id: row.id });
    }
    await ev('ag_qa', 'ag_cambios', 'resultado', `${hallazgos.length} hallazgos registrados: ${revision} esperan validación humana`);
    return { decisiones: decisiones.length, en_revision: revision, motor: JEV_KEY ? 'jev' : 'reglas' };
  },

  async almacenar({ corrida, ev }) {
    const n = await salida(corrida, 'normalizar');
    const { enlaces } = await salida(corrida, 'conciliar');
    await ev('ag_qa', 'ag_db', 'tarea', 'Publica los datos conciliados del periodo');
    const folioDeVenta = Object.fromEntries(Object.entries(enlaces.ventaFactura).map(([d, f]) => [f, d]));
    const folioDeLinea = Object.fromEntries(Object.entries(enlaces.facturaCobro).map(([f, l]) => [String(l), f]));
    await sql.begin(async (tx: any) => {
      await tx`delete from treve.ventas where corrida_id = ${corrida}`;
      await tx`delete from treve.facturas where corrida_id = ${corrida}`;
      await tx`delete from treve.nomina where corrida_id = ${corrida}`;
      await tx`delete from treve.movimientos where corrida_id = ${corrida}`;
      const ins = async (tabla: string, rows: Row[]) => {
        if (!rows.length) return;
        if (tabla === 'ventas') await tx`insert into treve.ventas ${tx(rows)}`;
        if (tabla === 'facturas') await tx`insert into treve.facturas ${tx(rows)}`;
        if (tabla === 'nomina') await tx`insert into treve.nomina ${tx(rows)}`;
        if (tabla === 'movimientos') await tx`insert into treve.movimientos ${tx(rows)}`;
      };
      await ins('ventas', n.datos.ventas.map((v: Row) => ({ corrida_id: corrida, deal_id: v.deal_id, nombre: v.nombre, cliente_alias: v.cliente_alias, cliente_id: v.cliente_id, etapa: v.etapa, monto: v.monto, fecha_cierre: v.fecha_cierre, vendedor: v.vendedor, canal: v.canal })));
      await ins('facturas', n.datos.facturas.map((f: Row) => ({ corrida_id: corrida, folio: f.folio, fecha: f.fecha, rfc: f.rfc, cliente_alias: f.cliente_alias, cliente_id: f.cliente_id, subtotal: f.subtotal, iva: f.iva, total: f.total, estatus: f.estatus, fecha_pago: f.fecha_pago, deal_id: folioDeVenta[f.folio] || null })));
      if (n.datos.nomina) await ins('nomina', n.datos.nomina.map((r: Row) => ({ corrida_id: corrida, ...r })));
      if (n.datos.movimientos) await ins('movimientos', n.datos.movimientos.map((m: Row) => ({ corrida_id: corrida, linea: m.linea, fecha: m.fecha, concepto: m.concepto, referencia: m.referencia, cargo: m.cargo, abono: m.abono, saldo: m.saldo, folio: folioDeLinea[String(m.linea)] || null })));
    });
    const total = n.datos.ventas.length + n.datos.facturas.length + (n.datos.nomina?.length || 0) + (n.datos.movimientos?.length || 0);
    await ev('ag_db', 'ag_cambios', 'resultado', `Almacén actualizado: ${total} registros con su versión e historial`);
    return { registros: total };
  },

  async indicadores({ t, corrida, ev }) {
    const n = await salida(corrida, 'normalizar');
    const { enlaces } = await salida(corrida, 'conciliar');
    const externos = await salida(corrida, 'mercado').catch(() => ({}));
    const hallazgos = await hallazgosDe(corrida);
    for (const a of ['ag_fin', 'ag_com', 'ag_cli']) await ev('ag_db', a, 'tarea', t.entrada.final ? 'Recalcula con las decisiones validadas' : 'Calcula los indicadores del periodo');
    const lista = calcularIndicadores({ ...n.datos, enlaces, hallazgos, clientes: n.clientes, externos });
    await sql.begin(async (tx: any) => {
      await tx`delete from treve.indicadores where corrida_id = ${corrida}`;
      await tx`insert into treve.indicadores ${tx(lista.map((i: Row) => ({ corrida_id: corrida, clave: i.clave, valor: i.valor, detalle: tx.json(i.detalle) })))}`;
    });
    const ind = comoObjeto(lista);
    await ev('ag_fin', 'ag_excel', 'resultado', `Flujo neto ${ind.flujo_neto == null ? 's/d' : $(ind.flujo_neto)} · por cobrar real ${$(ind.por_cobrar)} · calidad de datos ${ind.calidad_datos} %`);
    await ev('ag_com', 'ag_orq', 'resultado', `Ventas ganadas ${$(ind.ventas_ganadas)} en ${ind.oportunidades_ganadas} oportunidades · tasa de cierre ${ind.tasa_cierre ?? 's/d'} %`);
    await ev('ag_cli', 'ag_orq', 'resultado', `${(lista.find((i: Row) => i.clave === 'por_cobrar')?.detalle.por_cliente || []).filter((c: Row) => c.por_cobrar > 0).length} clientes con saldo; ventas sin facturar ${$(ind.ventas_sin_facturar)}`);
    return { indicadores: ind };
  },

  async llenar_excel({ t, corrida, op, ev }) {
    const final = !!t.entrada.final;
    const n = await salida(corrida, 'normalizar');
    const { enlaces } = await salida(corrida, 'conciliar');
    const hallazgos = await hallazgosDe(corrida);
    const indicadores = await sql`select clave, valor::float as valor from treve.indicadores where corrida_id = ${corrida}`;
    const hojas = hojasReporte({ periodo: op.periodo, ...n.datos, enlaces, hallazgos, clientes: n.clientes, indicadores, final });
    const nombre = `reporte_ventas_${op.periodo}_${final ? 'final' : 'preliminar'}.xlsx`;
    const bytes = libro(hojas);
    const path = `${corrida}/${nombre}`;
    await subir(path, bytes, 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    await sql`insert into treve.archivos (corrida_id, fuente, nombre, storage_path, formato, filas, columnas, sha256)
              values (${corrida}, 'reporte', ${nombre}, ${path}, 'xlsx', ${hojas[0].filas.length}, ${Object.keys(hojas[0].filas[0] || {})}::text[], ${await sha256(bytes)})
              on conflict (storage_path) do update set sha256 = excluded.sha256, filas = excluded.filas`;
    await ev('ag_excel', 'src:excel', 'documento', `${nombre} · ${hojas[0].filas.length} ventas, ${hallazgos.length} hallazgos y resumen`, { archivo: nombre });
    return { archivo: nombre, filas: hojas[0].filas.length };
  },

  async conclusiones({ corrida, ev }) {
    const lista = await sql`select clave, valor::float as valor, detalle from treve.indicadores where corrida_id = ${corrida}`;
    const ind = Object.fromEntries(lista.map((i: Row) => [i.clave, i.valor]));
    const detalle = Object.fromEntries(lista.map((i: Row) => [i.clave, i.detalle]));
    const hallazgos = await hallazgosDe(corrida);
    let c = conclusionesPlantilla(ind, detalle);
    let motor = 'plantillas';
    if (OPENAI_KEY) {
      await ev('ag_orq', 'external', 'tarea', `Pide a ${OPENAI_MODEL} redactar las conclusiones (solo con cifras calculadas)`);
      try {
        const r = await openaiJson({ apiKey: OPENAI_KEY, model: OPENAI_MODEL, system: PROMPT_CONCLUSIONES, user: datosParaConclusiones(ind, detalle, hallazgos) });
        await sumarCosto(corrida, { usd: costoUsd(r.model, r.usage), tokens: r.usage.total_tokens || 0 });
        if (r.data.financiero && r.data.comercial && r.data.clientes) (c = r.data), (motor = r.model);
        await ev('external', 'ag_orq', 'resultado', `Conclusiones redactadas (${r.usage.total_tokens || 0} tokens)`);
      } catch (e) {
        await ev('external', 'ag_orq', 'error', `OpenAI no respondió (${(e as Error).message}); uso plantillas`);
      }
    }
    await ev('ag_fin', 'ag_orq', 'resultado', c.financiero, { conclusion: 'financiero' });
    await ev('ag_com', 'ag_orq', 'resultado', c.comercial, { conclusion: 'comercial' });
    await ev('ag_cli', 'ag_orq', 'resultado', c.clientes, { conclusion: 'clientes' });
    await sql`update treve.corridas set resumen = coalesce(resumen, '{}'::jsonb) || ${sql.json({ conclusiones: c, motor })} where id = ${corrida}`;
    return { motor };
  },

  async notificar({ corrida, op, ev }) {
    const ind = Object.fromEntries((await sql`select clave, valor::float as valor from treve.indicadores where corrida_id = ${corrida}`).map((i: Row) => [i.clave, i.valor]));
    const hallazgos = await hallazgosDe(corrida);
    const [c] = await sql`select resumen from treve.corridas where id = ${corrida}`;
    await ev('ag_orq', 'ag_alertas', 'tarea', 'Envía el resumen y las alertas del ciclo');
    const payload = {
      corrida, periodo: op.periodo, escenario: op.escenario,
      indicadores: { ventas_ganadas: ind.ventas_ganadas, flujo_neto: ind.flujo_neto, por_cobrar: ind.por_cobrar, calidad_datos: ind.calidad_datos, saldo_final_usd: ind.saldo_final_usd },
      alertas: hallazgos.filter((h: Row) => h.severidad === 'alta' || h.estado === 'en_revision').map((h: Row) => ({ tipo: h.tipo, estado: h.estado, monto: h.monto, descripcion: h.descripcion })),
      conclusiones: c?.resumen?.conclusiones || null,
    };
    try {
      const r = await fetchT(ALERTAS_URL, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) }, 60000);
      if (!r.ok) throw new Error(`n8n respondió ${r.status}`);
      const j = await r.json().catch(() => ({}));
      await ev('ag_alertas', 'user', 'resultado', `n8n registró ${payload.alertas.length} alertas${j.registradas != null ? ` (bitácora n8n: ${j.registradas})` : ''}`);
      return { enviado: true, alertas: payload.alertas.length };
    } catch (e) {
      await ev('ag_alertas', 'ag_orq', 'error', `n8n no recibió las alertas (${(e as Error).message}); quedan en la bitácora`);
      return { enviado: false };
    }
  },

  async cierre({ corrida, op, ev }) {
    const hallazgos = await hallazgosDe(corrida);
    const pendientes = hallazgos.filter((h: Row) => h.estado === 'en_revision').length;
    const evaluacion = evaluar(hallazgos, (generateSimData(op.periodo, { version: op.version }) as Row).respuestas);
    await sql`update treve.corridas set estado = ${pendientes ? 'en_revision' : 'terminada'}, terminada_at = ${pendientes ? null : sql`now()`},
              resumen = coalesce(resumen, '{}'::jsonb) || ${sql.json({ evaluacion, pendientes })} where id = ${corrida}`;
    await ev('ag_orq', 'ag_log', 'tarea', `Autoevaluación: ${evaluacion.aciertos}/${evaluacion.esperadas} discrepancias sembradas encontradas, ${evaluacion.falsasAlarmas.length} falsas alarmas`);
    await ev('ag_orq', 'user', 'fin', pendientes ? `Dashboard preliminar listo: ${pendientes} hallazgos esperan tu validación` : 'Dashboard final publicado con los datos validados', { pendientes });
    return { pendientes, evaluacion };
  },
};

// ---------- cola ----------
const PLAN: Row[] = [
  { k: 'monday', agente: 'ag_monday', paso: 'extraer', entrada: { fuente: 'monday' } },
  { k: 'compaq', agente: 'ag_compaq', paso: 'extraer', entrada: { fuente: 'compaq' } },
  { k: 'esfera', agente: 'ag_esfera', paso: 'extraer', entrada: { fuente: 'esfera' } },
  { k: 'bancos', agente: 'ag_bancos', paso: 'extraer', entrada: { fuente: 'bancos' } },
  { k: 'mercado', agente: 'ag_ext', paso: 'mercado' },
  { k: 'normalizar', agente: 'ag_norm', paso: 'normalizar', deps: ['monday', 'compaq', 'esfera', 'bancos'] },
  { k: 'conciliar', agente: 'ag_conc', paso: 'conciliar', deps: ['normalizar'] },
  { k: 'juzgar', agente: 'ag_qa', paso: 'juzgar', deps: ['conciliar'] },
  { k: 'almacenar', agente: 'ag_db', paso: 'almacenar', deps: ['juzgar'] },
  { k: 'indicadores', agente: 'ag_fin', paso: 'indicadores', deps: ['almacenar', 'mercado'] },
  { k: 'excel', agente: 'ag_excel', paso: 'llenar_excel', deps: ['indicadores'] },
  { k: 'conclusiones', agente: 'ag_orq', paso: 'conclusiones', deps: ['excel'] },
  { k: 'notificar', agente: 'ag_alertas', paso: 'notificar', deps: ['conclusiones'] },
  { k: 'cierre', agente: 'ag_orq', paso: 'cierre', deps: ['notificar'] },
];
const PLAN_FINAL: Row[] = [
  { k: 'indicadores', agente: 'ag_fin', paso: 'indicadores', entrada: { final: true } },
  { k: 'excel', agente: 'ag_excel', paso: 'llenar_excel', entrada: { final: true }, deps: ['indicadores'] },
  { k: 'cierre', agente: 'ag_orq', paso: 'cierre', deps: ['excel'] },
];

async function encolar(corrida: string, plan: Row[]) {
  const ids: Record<string, number> = {};
  for (const p of plan) {
    const deps = (p.deps || []).map((d: string) => ids[d]);
    const [t] = await sql`insert into treve.tareas (corrida_id, agente, paso, entrada, depende_de)
                          values (${corrida}, ${p.agente}, ${p.paso}, ${sql.json(p.entrada || {})}, ${'{' + deps.join(',') + '}'}::bigint[]) returning id`;
    ids[p.k] = Number(t.id);
  }
}

async function ejecutar(t: Row) {
  const [c] = await sql`select opciones, estado from treve.corridas where id = ${t.corrida_id}`;
  const ctx: Ctx = {
    t, corrida: t.corrida_id, op: c.opciones,
    ev: (de, para, tipo, mensaje, datos = {}) => evento(t.corrida_id, Number(t.id), de, para, tipo, mensaje, datos),
  };
  try {
    await ctx.ev(t.agente, null, 'trabajando', t.paso, { on: true });
    const out = await AGENTES[t.paso](ctx);
    await sql`update treve.tareas set estado = 'hecha', salida = ${sql.json(out ?? {})}, error = null, terminada_at = now() where id = ${t.id}`;
  } catch (e) {
    const err = e as Error & { fatal?: boolean };
    const reintentar = !err.fatal && t.intentos < t.max_intentos;
    console.error(t.paso, err);
    await sql`update treve.tareas set estado = ${reintentar ? 'pendiente' : 'error'}, error = ${err.message},
              disponible_at = now() + make_interval(secs => ${5 * t.intentos}) where id = ${t.id}`;
    await ctx.ev(t.agente, 'ag_orq', 'error', `${t.paso}: ${err.message}${reintentar ? ' · reintento en unos segundos' : ''}`);
    if (!reintentar) {
      await sql`update treve.tareas set estado = 'cancelada' where corrida_id = ${t.corrida_id} and estado = 'pendiente'`;
      await sql`update treve.corridas set estado = 'error', terminada_at = now() where id = ${t.corrida_id}`;
      await ctx.ev('ag_orq', 'user', 'fin', `El ciclo se detuvo: ${err.message}`, { error: true });
    }
  } finally {
    await ctx.ev(t.agente, null, 'trabajando', t.paso, { on: false }).catch(() => {});
  }
}

// Un worker por isolate; si llega otra petición mientras trabaja, da otra vuelta al terminar.
let procesando = false;
let otraVuelta = false;
async function procesar() {
  if (procesando) {
    otraVuelta = true;
    return;
  }
  procesando = true;
  try {
    do {
      otraVuelta = false;
      await bucle();
    } while (otraVuelta);
  } finally {
    procesando = false;
  }
}
async function bucle() {
  const inicio = Date.now();
  {
    while (Date.now() - inicio < 110_000) {
      const lote: Row[] = [];
      for (let i = 0; i < 6; i++) {
        const [t] = await sql`select * from treve.tomar_tarea()`;
        if (!t?.id) break;
        lote.push(t);
      }
      if (lote.length) {
        await Promise.all(lote.map(ejecutar));
        continue;
      }
      // Nada listo: espera un reintento próximo o termina
      const [p] = await sql`select extract(epoch from (min(disponible_at) - now())) as s from treve.tareas where estado = 'pendiente'`;
      if (p?.s == null || Number(p.s) > 25) return;
      const [enCurso] = await sql`select count(*)::int as n from treve.tareas where estado = 'en_curso'`;
      await sleep(Math.max(500, Number(p.s) * 1000 || (enCurso.n ? 1500 : 0)));
    }
    // Se acabó el tiempo de este worker: despierta a otro
    await fetchT(`${SUPABASE_URL}/functions/v1/treve`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: '{"accion":"tick"}' }, 10000).catch(() => {});
  }
}

// ---------- acciones ----------
async function salud() {
  const [ultima] = await sql`select id, periodo, estado, created_at from treve.corridas order by created_at desc limit 1`;
  return {
    ok: true,
    publico: PUBLICO,
    integraciones: {
      simulador: SIM_URL.replace(/\?.*/, ''),
      alertas: ALERTAS_URL,
      openai: OPENAI_KEY ? OPENAI_MODEL : null,
      jev: !!JEV_KEY,
      apis_publicas: ['Frankfurter (tipo de cambio)', 'Nager.Date (días festivos)'],
    },
    escenarios: ESCENARIOS,
    ultima: ultima || null,
  };
}

async function iniciar(b: Row) {
  const periodo = String(b.periodo || '2026-09');
  const version = Number(b.version || 1);
  const escenario = String(b.escenario || 'normal');
  if (!/^\d{4}-(0[1-9]|1[0-2])$/.test(periodo)) throw fallo('periodo inválido, usa AAAA-MM');
  if (![1, 2].includes(version)) throw fallo('version inválida');
  if (!ESCENARIOS.includes(escenario)) throw fallo(`escenario inválido: ${ESCENARIOS.join(', ')}`);
  // Si ya hay un ciclo corriendo, todos los visitantes lo ven en vivo en lugar de lanzar otro
  const [activa] = await sql`select id from treve.corridas where estado in ('pendiente', 'en_curso') and created_at > now() - interval '5 minutes' order by created_at desc limit 1`;
  if (activa) return { corrida: activa.id, unida: true };
  const [{ n }] = await sql`select count(*)::int as n from treve.corridas where created_at > now() - interval '1 hour'`;
  if (n >= 30) throw fallo('límite de 30 ciclos por hora alcanzado; intenta más tarde', 429);
  const [c] = await sql`insert into treve.corridas (periodo, estado, opciones) values (${periodo}, 'en_curso', ${sql.json({ periodo, version, escenario })}) returning id`;
  await encolar(c.id, PLAN);
  const ESC: Row = { normal: 'datos limpios', sucio: 'captura manual desordenada', caida: 'banco sin servicio' };
  await evento(c.id, null, 'user', 'ag_orq', 'tarea', `Inicia el ciclo de ${periodo} · Compaq formato v${version} · ${ESC[escenario]}`);
  EdgeRuntime.waitUntil(procesar());
  return { corrida: c.id, unida: false };
}

async function estado(corrida: string, desde: number, conArchivos: boolean) {
  if (!corrida) throw fallo('falta corrida');
  const [c] = await sql`select id, periodo, estado, opciones, resumen, costo_ia, created_at, terminada_at from treve.corridas where id = ${corrida}`;
  if (!c) throw fallo('corrida no encontrada', 404);
  const [tareas, eventos, hallazgos, indicadores, archivos] = await Promise.all([
    sql`select id, agente, paso, estado, intentos, error from treve.tareas where corrida_id = ${corrida} order by id`,
    sql`select id, de, para, tipo, mensaje, datos, created_at from treve.eventos where corrida_id = ${corrida} and id > ${desde} order by id limit 400`,
    hallazgosDe(corrida),
    sql`select clave, valor::float as valor, detalle from treve.indicadores where corrida_id = ${corrida}`,
    sql`select fuente, nombre, storage_path, formato, filas, created_at from treve.archivos where corrida_id = ${corrida} order by created_at`,
  ]);
  const files = conArchivos ? await Promise.all(archivos.map(async (a: Row) => ({ ...a, url: await firmar(a.storage_path) }))) : archivos;
  return { corrida: c, tareas, eventos, hallazgos, indicadores, archivos: files };
}

async function resolver(b: Row) {
  if (!['confirmado', 'descartado'].includes(b.decision)) throw fallo('decision debe ser confirmado o descartado');
  const [h] = await sql`update treve.hallazgos set estado = ${b.decision}, nota = ${String(b.nota || '').slice(0, 500) || null}, resuelto_at = now()
                        where id = ${b.hallazgo} and estado in ('abierto', 'en_revision') returning corrida_id, descripcion`;
  if (!h) throw fallo('hallazgo no encontrado o ya resuelto', 409);
  await evento(h.corrida_id, null, 'user', 'ag_qa', 'validacion', `${b.decision === 'confirmado' ? 'Aprobado' : 'Descartado'}: ${h.descripcion}`, { hallazgo_id: b.hallazgo, decision: b.decision });
  const [{ n }] = await sql`select count(*)::int as n from treve.hallazgos where corrida_id = ${h.corrida_id} and estado = 'en_revision'`;
  const [c] = await sql`select estado from treve.corridas where id = ${h.corrida_id}`;
  if (n === 0 && c.estado === 'en_revision') {
    await sql`update treve.corridas set estado = 'en_curso' where id = ${h.corrida_id}`;
    await evento(h.corrida_id, null, 'ag_qa', 'ag_orq', 'tarea', 'Todas las decisiones están validadas: genera la versión final');
    await encolar(h.corrida_id, PLAN_FINAL);
    EdgeRuntime.waitUntil(procesar());
  }
  return { ok: true, pendientes: n };
}

async function listar() {
  return await sql`select id, periodo, estado, opciones, created_at, terminada_at, resumen->'evaluacion' as evaluacion, costo_ia
                   from treve.corridas order by created_at desc limit 12`;
}

// Fuera del modo demo, solo miembros de treve.miembros (sesión de Supabase Auth)
async function autorizar(req: Request) {
  if (PUBLICO) return;
  const token = req.headers.get('Authorization')?.replace(/^Bearer /, '');
  if (!token) throw fallo('inicia sesión', 401);
  const r = await fetch(`${SUPABASE_URL}/auth/v1/user`, { headers: { apikey: SERVICE_KEY, Authorization: `Bearer ${token}` } });
  if (!r.ok) throw fallo('sesión inválida', 401);
  const u = await r.json();
  const [m] = await sql`select rol from treve.miembros where user_id = ${u.id}`;
  if (!m) throw fallo('tu cuenta no está autorizada', 403);
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: CORS });
  try {
    const url = new URL(req.url);
    const body: Row = req.method === 'POST' ? await req.json().catch(() => ({})) : {};
    const q = (k: string) => body[k] ?? url.searchParams.get(k);
    const accion = String(q('accion') || 'salud');
    if (accion === 'tick') {
      EdgeRuntime.waitUntil(procesar());
      return json({ ok: true }, 202);
    }
    await autorizar(req);
    if (accion === 'salud') return json(await salud());
    if (accion === 'iniciar' && req.method === 'POST') return json(await iniciar(body), 202);
    if (accion === 'estado') return json(await estado(q('corrida'), Number(q('desde') || 0), String(q('archivos')) === '1' || q('archivos') === true));
    if (accion === 'corridas') return json(await listar());
    if (accion === 'resolver' && req.method === 'POST') return json(await resolver(body));
    return json({ error: 'acción desconocida' }, 400);
  } catch (e) {
    const err = e as Error & { status?: number };
    if (!err.status) console.error(err);
    return json({ error: err.message }, err.status || 500);
  }
});
