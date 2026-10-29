// Agente Normalizador: lee los archivos crudos de cada fuente y los lleva a un formato canónico.
// Todo es código determinista; la IA solo interviene si aparece una columna que no reconoce.

export const norm = (s) =>
  String(s ?? '')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();

const round2 = (n) => Math.round(n * 100) / 100;

export function parseNumero(v) {
  if (typeof v === 'number') return v;
  const s = String(v ?? '').replace(/[$\s,]/g, '');
  if (!s) return 0;
  const n = Number(s);
  if (Number.isNaN(n)) throw new Error(`número inválido: "${v}"`);
  return n;
}

export function parseFecha(v) {
  const s = String(v ?? '').trim();
  if (!s) return null;
  let m = s.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (m) return `${m[3]}-${m[2].padStart(2, '0')}-${m[1].padStart(2, '0')}`;
  m = s.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (m) return `${m[1]}-${m[2]}-${m[3]}`;
  throw new Error(`fecha inválida: "${v}"`);
}

export function parseCsv(text) {
  const src = String(text).replace(/^﻿/, '');
  const rows = [];
  let row = [];
  let cell = '';
  let q = false;
  for (let i = 0; i < src.length; i++) {
    const c = src[i];
    if (q) {
      if (c === '"' && src[i + 1] === '"') (cell += '"'), i++;
      else if (c === '"') q = false;
      else cell += c;
    } else if (c === '"') q = true;
    else if (c === ',') row.push(cell), (cell = '');
    else if (c === '\n' || c === '\r') {
      if (c === '\r' && src[i + 1] === '\n') i++;
      row.push(cell), rows.push(row), (row = []), (cell = '');
    } else cell += c;
  }
  if (cell || row.length) row.push(cell), rows.push(row);
  const [head = [], ...body] = rows;
  return body.filter((r) => r.some((x) => x.trim())).map((r) => Object.fromEntries(head.map((h, i) => [h.trim(), r[i] ?? ''])));
}

// ---------- mapeo de columnas ----------
// Sinónimos conocidos por campo canónico (encabezados normalizados).
export const ESQUEMAS = {
  compaq: {
    campos: {
      folio: ['folio', 'no documento', 'numero documento', 'documento', 'no factura', 'factura', 'serie folio'],
      fecha: ['fecha', 'fecha emision', 'fecha de emision', 'emision'],
      rfc: ['rfc', 'r f c'],
      cliente: ['razon social', 'cliente', 'nombre cliente', 'receptor'],
      subtotal: ['subtotal', 'importe', 'base'],
      iva: ['iva', 'impuestos', 'impuesto', 'iva trasladado'],
      total: ['total', 'importe total', 'monto total'],
      estatus: ['estatus', 'situacion', 'estado', 'status'],
      fecha_pago: ['fecha de pago', 'pagado el', 'fecha pago', 'cobrado el'],
    },
    requeridos: ['folio', 'fecha', 'cliente', 'total', 'estatus'],
  },
  esfera: {
    campos: {
      empleado: ['no empleado', 'numero empleado', 'empleado', 'id empleado'],
      nombre: ['nombre', 'nombre completo'],
      departamento: ['departamento', 'area'],
      quincena: ['periodo', 'quincena'],
      percepciones: ['percepciones', 'total percepciones'],
      deducciones: ['deducciones', 'total deducciones'],
      neto: ['neto', 'neto a pagar', 'neto pagado'],
    },
    requeridos: ['empleado', 'quincena', 'neto'],
  },
  bancos: {
    campos: {
      fecha: ['fecha', 'fecha operacion'],
      concepto: ['concepto', 'descripcion'],
      referencia: ['referencia', 'ref'],
      cargo: ['cargo', 'cargos', 'retiro'],
      abono: ['abono', 'abonos', 'deposito'],
      saldo: ['saldo'],
    },
    requeridos: ['fecha', 'concepto', 'cargo', 'abono'],
  },
};

export const firmaColumnas = (cols) => cols.map(norm).sort().join('|');

// Devuelve { mapeo: {columnaOriginal: campo}, faltantes, desconocidas }
export function mapearColumnas(fuente, columnas) {
  const { campos, requeridos } = ESQUEMAS[fuente];
  const mapeo = {};
  const desconocidas = [];
  for (const col of columnas) {
    const n = norm(col);
    const campo = Object.keys(campos).find((k) => campos[k].includes(n));
    if (campo && !Object.values(mapeo).includes(campo)) mapeo[col] = campo;
    else desconocidas.push(col);
  }
  const faltantes = requeridos.filter((r) => !Object.values(mapeo).includes(r));
  return { mapeo, faltantes, desconocidas };
}

const aplicar = (rows, mapeo) =>
  rows
    .filter((r) => Object.values(r).some((v) => String(v ?? '').trim()))
    .map((r) => {
      const o = {};
      for (const [col, campo] of Object.entries(mapeo)) o[campo] = typeof r[col] === 'string' ? r[col].trim() : r[col];
      return o;
    });

export function estatusCanonico(v) {
  const n = norm(v);
  if (['pagada', 'pagado', 'cobrada', 'cobrado', 'liquidada'].includes(n)) return 'Pagada';
  if (['pendiente', 'por cobrar', 'vigente', 'abierta'].includes(n)) return 'Pendiente';
  if (['cancelada', 'cancelado'].includes(n)) return 'Cancelada';
  throw new Error(`estatus desconocido: "${v}"`);
}

export function normalizarCompaq(rows, mapeo) {
  return aplicar(rows, mapeo).map((r) => {
    const total = parseNumero(r.total);
    const subtotal = r.subtotal !== undefined ? parseNumero(r.subtotal) : round2(total / 1.16);
    return {
      folio: String(r.folio),
      fecha: parseFecha(r.fecha),
      rfc: r.rfc || null,
      cliente_alias: r.cliente,
      subtotal,
      iva: r.iva !== undefined ? parseNumero(r.iva) : round2(total - subtotal),
      total,
      estatus: estatusCanonico(r.estatus),
      fecha_pago: parseFecha(r.fecha_pago),
    };
  });
}

export function normalizarEsfera(rows, mapeo) {
  return aplicar(rows, mapeo).map((r) => ({
    empleado: String(r.empleado),
    nombre: r.nombre || '',
    departamento: r.departamento || null,
    quincena: String(r.quincena),
    percepciones: parseNumero(r.percepciones),
    deducciones: parseNumero(r.deducciones),
    neto: parseNumero(r.neto),
  }));
}

export function normalizarBancos(rows, mapeo) {
  return aplicar(rows, mapeo).map((r, i) => ({
    linea: i + 1,
    fecha: parseFecha(r.fecha),
    concepto: r.concepto,
    referencia: r.referencia || null,
    cargo: parseNumero(r.cargo),
    abono: parseNumero(r.abono),
    saldo: r.saldo !== undefined && r.saldo !== '' ? parseNumero(r.saldo) : null,
  }));
}

// Monday entrega JSON (GraphQL): una fila por oportunidad
export function normalizarMonday(json) {
  const items = json?.data?.boards?.[0]?.items_page?.items;
  if (!Array.isArray(items)) throw new Error('respuesta de Monday sin items');
  return items.map((it) => {
    const col = (id) => it.column_values.find((c) => c.id === id)?.text ?? '';
    return {
      deal_id: String(it.id),
      nombre: it.name,
      cliente_alias: col('cliente').trim(),
      etapa: col('etapa').trim(),
      monto: parseNumero(col('monto')),
      fecha_cierre: parseFecha(col('fecha_cierre')),
      canal: col('canal') || null,
      vendedor: col('vendedor') || null,
    };
  });
}

// ---------- emparejamiento de clientes entre sistemas ----------
const VACIAS = new Set(['sa', 'de', 'cv', 'sc', 's', 'a', 'c', 'v', 'sapi', 'rl', 'srl', 'sab', 'cliente', 'grupo', 'gpo', 'spei', 'recibido']);
const tokens = (name) => norm(name).split(' ').filter((t) => t && !VACIAS.has(t));
const tokEq = (a, b) => a === b || (Math.min(a.length, b.length) >= 3 && (a.startsWith(b) || b.startsWith(a)));

export function similitud(a, b) {
  const ta = tokens(a);
  const tb = tokens(b);
  if (!ta.length || !tb.length) return 0;
  const [short, long] = ta.length <= tb.length ? [ta, tb] : [tb, ta];
  const hit = short.filter((t) => long.some((u) => tokEq(t, u))).length;
  if (!tokEq(ta[0], tb[0])) return (hit / short.length) * 0.6; // la primera palabra pesa
  return (hit / short.length) * 0.85 + (hit / long.length) * 0.15;
}

// clientes: [{ id, nombre }] (catálogo canónico, viene de Compaq). Devuelve { cliente_id, confianza } o null.
export function emparejar(alias, clientes) {
  const scored = clientes.map((c) => ({ c, s: similitud(alias, c.nombre) })).sort((x, y) => y.s - x.s);
  const [best, second] = scored;
  if (!best || best.s < 0.5) return null;
  const margen = best.s - (second?.s || 0);
  return { cliente_id: best.c.id, confianza: Math.round(Math.min(1, best.s * (margen > 0.2 ? 1 : 0.7)) * 100) / 100 };
}

export function catalogoClientes(facturas) {
  const map = new Map();
  for (const f of facturas) {
    const id = f.rfc || norm(f.cliente_alias);
    if (!map.has(id)) map.set(id, { id, nombre: f.cliente_alias, rfc: f.rfc });
  }
  return [...map.values()];
}

// Nombre del cliente en el concepto bancario ("SPEI RECIBIDO CLIENTE BETA SA")
export const clienteEnConcepto = (concepto) => (/^SPEI RECIBIDO /i.test(concepto.trim()) ? concepto.trim().replace(/^SPEI RECIBIDO /i, '') : null);
