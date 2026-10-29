import { workflow, node, trigger, switchCase, expr } from '@n8n/workflow-sdk';

const webhook = trigger({
  type: 'n8n-nodes-base.webhook',
  version: 2.1,
  config: {
    name: 'GET /treve-sim',
    // Datos 100 % ficticios y deterministas (el generador es público en el repo): sin credencial
    parameters: { httpMethod: 'GET', path: 'treve-sim', authentication: 'none', responseMode: 'responseNode', options: {} },
  },
});

const generar = node({
  type: 'n8n-nodes-base.code',
  version: 2,
  config: { name: 'Generar fuente', parameters: { mode: 'runOnceForAllItems', jsCode: "// Generador determinista de datos FICTICIOS para simular las fuentes de Treve:\n// Monday (comercial), Compaq/CONTPAQi (facturación), Esfera (nómina) y Bancos (estado de cuenta).\n//\n// - Mismo periodo + versión = exactamente los mismos datos (semilla derivada del periodo).\n// - Siembra discrepancias conocidas y las devuelve en `respuestas` para medir aciertos.\n// - Es autocontenido (sin imports): el mismo código se usa dentro del nodo Code de n8n\n//   y como respaldo local del orquestador si el simulador no responde.\n\nfunction generateSimData(periodo = '2026-09', options = {}) {\n  const version = Number(options.version || 1);\n  const escenario = String(options.escenario || 'normal');\n  if (!/^\\d{4}-(0[1-9]|1[0-2])$/.test(periodo)) throw new Error('periodo inválido, usa AAAA-MM');\n  if (![1, 2].includes(version)) throw new Error('version inválida, usa 1 o 2');\n  if (!ESCENARIOS.includes(escenario)) throw new Error(`escenario inválido, usa ${ESCENARIOS.join(', ')}`);\n\n  // ---------- utilidades deterministas ----------\n  let h = 2166136261;\n  for (const ch of `treve-sim:${periodo}`) h = Math.imul(h ^ ch.charCodeAt(0), 16777619);\n  let s = h >>> 0;\n  const rnd = () => {\n    s = (s + 0x6d2b79f5) >>> 0;\n    let t = s;\n    t = Math.imul(t ^ (t >>> 15), t | 1);\n    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);\n    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;\n  };\n  const int = (a, b) => a + Math.floor(rnd() * (b - a + 1));\n  const pick = (arr) => arr[Math.floor(rnd() * arr.length)];\n  const round2 = (n) => Math.round(n * 100) / 100;\n  const pad = (n) => String(n).padStart(2, '0');\n  const [Y, M] = periodo.split('-').map(Number);\n  const lastDay = new Date(Date.UTC(Y, M, 0)).getUTCDate();\n  const iso = (d) => `${Y}-${pad(M)}-${pad(Math.min(Math.max(d, 1), lastDay))}`;\n  const mx = (isoDate) => isoDate.split('-').reverse().join('/'); // DD/MM/AAAA\n  const dayOf = (isoDate) => Number(isoDate.slice(8, 10));\n\n  // ---------- catálogos ficticios ----------\n  // Cada cliente aparece con un nombre distinto en cada sistema (reto de emparejamiento).\n  const CLIENTES = [\n    { id: 'C01', razon: 'Constructora Alfa SA de CV', rfc: 'CAL180312AB1', monday: 'Constructora Alfa', banco: 'CONSTRUCTORA ALFA' },\n    { id: 'C02', razon: 'Cliente Beta SA de CV', rfc: 'CBE150707KJ2', monday: 'BETA', banco: 'CLIENTE BETA SA' },\n    { id: 'C03', razon: 'Grupo Gamma Logística SA de CV', rfc: 'GGL170221QW3', monday: 'Gamma Logística', banco: 'GPO GAMMA LOG' },\n    { id: 'C04', razon: 'Delta Servicios Industriales SA de CV', rfc: 'DSI160930ER4', monday: 'Delta Servicios', banco: 'DELTA SERV IND' },\n    { id: 'C05', razon: 'Épsilon Comercializadora SA de CV', rfc: 'ECO190415TY5', monday: 'Epsilon', banco: 'EPSILON COMERC' },\n    { id: 'C06', razon: 'Zeta Desarrollos Inmobiliarios SA de CV', rfc: 'ZDI200102UI6', monday: 'Zeta Desarrollos', banco: 'ZETA DESARROLLOS' },\n    { id: 'C07', razon: 'Eta Manufacturas SA de CV', rfc: 'EMA140818OP7', monday: 'Eta Manufacturas', banco: 'ETA MANUF' },\n    { id: 'C08', razon: 'Theta Consultores SC', rfc: 'TCO210525AS8', monday: 'Theta', banco: 'THETA CONSULTORES' },\n  ];\n  const CANALES = ['Referidos', 'LinkedIn', 'Google Ads', 'Eventos', 'Meta Ads'];\n  const VENDEDORES = ['Ana R.', 'Luis M.', 'Sofía T.'];\n  const EMPLEADOS = [\n    ['E001', 'Laura Méndez', 'Dirección', 62000], ['E002', 'Jorge Salinas', 'Ventas', 34000],\n    ['E003', 'Paola Ríos', 'Ventas', 31000], ['E004', 'Héctor Aguilar', 'Ventas', 29500],\n    ['E005', 'Mariana Cruz', 'Operaciones', 27000], ['E006', 'Ricardo Pineda', 'Operaciones', 26500],\n    ['E007', 'Daniela Ortiz', 'Operaciones', 25000], ['E008', 'Fernando Vega', 'Operaciones', 24000],\n    ['E009', 'Claudia Núñez', 'Administración', 30000], ['E010', 'Andrés Lozano', 'Administración', 22000],\n    ['E011', 'Gabriela Soto', 'Administración', 21000], ['E012', 'Óscar Medina', 'Operaciones', 23500],\n  ];\n\n  // ---------- Monday: oportunidades ----------\n  const deals = [];\n  let dealSeq = 9100;\n  for (const c of CLIENTES) {\n    const n = int(2, 4);\n    for (let k = 0; k < n; k++) {\n      const r = rnd();\n      const etapa = r < 0.58 ? 'Ganado' : r < 0.78 ? 'Negociación' : r < 0.9 ? 'Propuesta' : 'Perdido';\n      deals.push({\n        id: String(dealSeq++),\n        nombre: `${pick(['Implementación', 'Consultoría', 'Licencias', 'Soporte anual', 'Capacitación'])} ${c.monday}`,\n        clienteId: c.id,\n        cliente: c.monday,\n        etapa,\n        monto: int(80, 760) * 500,\n        fecha: iso(int(1, lastDay - 4)),\n        canal: pick(CANALES),\n        vendedor: pick(VENDEDORES),\n      });\n    }\n  }\n  const ganados = deals.filter((d) => d.etapa === 'Ganado');\n  // Asegura suficientes ventas ganadas para sembrar las discrepancias\n  for (const d of deals) {\n    if (ganados.length >= 10) break;\n    if (d.etapa !== 'Ganado') {\n      d.etapa = 'Ganado';\n      ganados.push(d);\n    }\n  }\n  ganados.sort((a, b) => a.fecha.localeCompare(b.fecha) || a.id.localeCompare(b.id));\n\n  // Elecciones de discrepancias (distintas entre sí)\n  const used = new Set();\n  const choose = (list) => {\n    const options = list.filter((x) => !used.has(x.id));\n    const x = options[Math.floor(rnd() * options.length)];\n    used.add(x.id);\n    return x;\n  };\n  const dSinFactura = choose(ganados);\n  const dDuplicada = choose(ganados);\n  const dMontoDistinto = choose(ganados);\n\n  // ---------- Compaq: facturas ----------\n  const facturas = [];\n  let folio = 2280;\n  for (const d of ganados) {\n    if (d.id === dSinFactura.id) continue;\n    const c = CLIENTES.find((x) => x.id === d.clienteId);\n    const fecha = iso(dayOf(d.fecha) + int(0, 3));\n    const subtotal = d.id === dMontoDistinto.id ? round2(d.monto * 0.95) : d.monto;\n    const iva = round2(subtotal * 0.16);\n    const pagoDia = dayOf(fecha) + int(4, 18);\n    const pagada = rnd() < 0.62 && pagoDia <= lastDay;\n    facturas.push({\n      folio: `F-${folio++}`,\n      fecha,\n      rfc: c.rfc,\n      razon: c.razon,\n      clienteId: c.id,\n      dealId: d.id,\n      subtotal,\n      iva,\n      total: round2(subtotal + iva),\n      estatus: pagada ? 'Pagada' : 'Pendiente',\n      fechaPago: pagada ? iso(pagoDia) : '',\n    });\n  }\n  // (sin repetir una venta que ya tiene otra discrepancia sembrada)\n  const pendientes = facturas.filter((f) => f.estatus === 'Pendiente' && !used.has(f.dealId));\n  const fPagoNoRegistrado = pendientes[Math.floor(rnd() * pendientes.length)] || facturas[0];\n\n  // Duplicado capturado dos veces en Monday\n  const dup = { ...dDuplicada, id: String(dealSeq++) };\n  const dealsMonday = [...deals, dup];\n\n  // ---------- Esfera: nómina ----------\n  const nomina = [];\n  for (const q of [1, 2]) {\n    for (const [num, nombre, depto, mensual] of EMPLEADOS) {\n      const percepciones = round2(mensual / 2 + (q === 2 && depto === 'Ventas' ? int(2, 9) * 500 : 0));\n      const deducciones = round2(percepciones * (0.17 + int(0, 6) / 100));\n      nomina.push({\n        num, nombre, depto,\n        periodo: `Q${q} ${periodo}`,\n        percepciones,\n        deducciones,\n        neto: round2(percepciones - deducciones),\n      });\n    }\n  }\n  const netoQ = (q) => round2(nomina.filter((r) => r.periodo.startsWith(`Q${q}`)).reduce((a, r) => a + r.neto, 0));\n  const finiquito = int(12, 30) * 500; // pagado por banco pero no capturado en Esfera\n\n  // ---------- Bancos: estado de cuenta ----------\n  const movs = [];\n  for (const f of facturas.filter((x) => x.estatus === 'Pagada')) {\n    const c = CLIENTES.find((x) => x.id === f.clienteId);\n    const conRef = rnd() < 0.7;\n    movs.push({ fecha: f.fechaPago, concepto: `SPEI RECIBIDO ${c.banco}`, referencia: conRef ? f.folio : '', cargo: 0, abono: f.total });\n  }\n  {\n    const c = CLIENTES.find((x) => x.id === fPagoNoRegistrado.clienteId);\n    movs.push({ fecha: iso(Math.min(lastDay, dayOf(fPagoNoRegistrado.fecha) + 7)), concepto: `SPEI RECIBIDO ${c.banco}`, referencia: '', cargo: 0, abono: fPagoNoRegistrado.total });\n  }\n  const depositoMisterioso = int(18, 90) * 500 + 0.5 * int(0, 1);\n  movs.push({ fecha: iso(int(5, lastDay - 2)), concepto: `DEPOSITO EFECTIVO SUC ${int(100, 999)}`, referencia: '', cargo: 0, abono: depositoMisterioso });\n  movs.push({ fecha: iso(15), concepto: 'PAGO NOMINA Q1', referencia: `NOM-Q1-${periodo}`, cargo: netoQ(1), abono: 0 });\n  movs.push({ fecha: iso(lastDay), concepto: 'PAGO NOMINA Q2', referencia: `NOM-Q2-${periodo}`, cargo: round2(netoQ(2) + finiquito), abono: 0 });\n  for (const [concepto, a, b] of [['RENTA OFICINA', 900, 900], ['SERVICIOS NUBE Y SOFTWARE', 40, 90], ['PUBLICIDAD DIGITAL', 120, 260], ['HONORARIOS CONTABLES', 60, 60], ['ENERGIA ELECTRICA', 10, 28]]) {\n    movs.push({ fecha: iso(int(2, lastDay - 1)), concepto, referencia: '', cargo: int(a, b) * 100, abono: 0 });\n  }\n  movs.sort((a, b) => a.fecha.localeCompare(b.fecha) || b.abono - a.abono);\n  let saldo = 1250000;\n  for (const m of movs) {\n    saldo = round2(saldo + m.abono - m.cargo);\n    m.saldo = saldo;\n  }\n\n  // ---------- salidas con el formato de cada sistema ----------\n  const monday = {\n    data: {\n      boards: [\n        {\n          id: '4821337',\n          name: 'Pipeline comercial',\n          items_page: {\n            items: dealsMonday.map((d) => ({\n              id: d.id,\n              name: d.nombre,\n              column_values: [\n                { id: 'cliente', text: d.cliente },\n                { id: 'etapa', text: d.etapa },\n                { id: 'monto', text: String(d.monto) },\n                { id: 'fecha_cierre', text: d.fecha },\n                { id: 'canal', text: d.canal },\n                { id: 'vendedor', text: d.vendedor },\n              ],\n            })),\n          },\n        },\n      ],\n    },\n  };\n\n  let compaq = facturas.map((f) =>\n    version === 1\n      ? { Folio: f.folio, Fecha: mx(f.fecha), RFC: f.rfc, 'Razón social': f.razon, Subtotal: f.subtotal, IVA: f.iva, Total: f.total, Estatus: f.estatus, 'Fecha de pago': f.fechaPago ? mx(f.fechaPago) : '' }\n      : { 'Fecha emisión': mx(f.fecha), 'No. Documento': f.folio, Cliente: f.razon, 'R.F.C.': f.rfc, 'Importe total': f.total, Importe: f.subtotal, Impuestos: f.iva, 'Situación': f.estatus === 'Pagada' ? 'PAGADO' : 'POR COBRAR', 'Pagado el': f.fechaPago ? mx(f.fechaPago) : '' },\n  );\n\n  let esfera = nomina.map((r) => ({ 'No. Empleado': r.num, Nombre: r.nombre, Departamento: r.depto, Periodo: r.periodo, Percepciones: r.percepciones, Deducciones: r.deducciones, Neto: r.neto }));\n\n  let bancos = movs.map((m) => ({ Fecha: mx(m.fecha), Concepto: m.concepto, Referencia: m.referencia, Cargo: m.cargo || '', Abono: m.abono || '', Saldo: m.saldo }));\n\n  // Escenario \"sucio\": como un Excel capturado a mano (montos con $ y comas, espacios de más,\n  // estatus en mayúsculas y una fila vacía). Los datos de fondo y las respuestas no cambian.\n  if (escenario === 'sucio') {\n    const money = (n) => '$' + Number(n).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });\n    const ensuciar = (rows) => {\n      const out = rows.map((r) => {\n        const o = {};\n        for (const [k, v] of Object.entries(r)) {\n          if (typeof v === 'number' && rnd() < 0.5) o[k] = money(v);\n          else if (/^(Estatus|Situación)$/.test(k) && rnd() < 0.5) o[k] = String(v).toUpperCase();\n          else if (typeof v === 'string' && v && rnd() < 0.35) o[k] = `  ${v} `;\n          else o[k] = v;\n        }\n        return o;\n      });\n      out.splice(1 + Math.floor(rnd() * (out.length - 1)), 0, Object.fromEntries(Object.keys(rows[0]).map((k) => [k, ''])));\n      return out;\n    };\n    compaq = ensuciar(compaq);\n    esfera = ensuciar(esfera);\n    bancos = ensuciar(bancos);\n  }\n\n  // ---------- hoja de respuestas ----------\n  const nameOf = (id) => CLIENTES.find((c) => c.id === id);\n  const respuestas = {\n    periodo,\n    version,\n    escenario,\n    discrepancias: [\n      { id: 'D1', tipo: 'venta_sin_factura', fuentes: ['monday', 'compaq'], descripcion: `La venta ganada ${dSinFactura.id} de ${dSinFactura.cliente} ($${dSinFactura.monto}) no tiene factura en Compaq`, referencia: { dealId: dSinFactura.id }, monto: dSinFactura.monto },\n      { id: 'D2', tipo: 'oportunidad_duplicada', fuentes: ['monday'], descripcion: `La oportunidad ${dDuplicada.id} está capturada dos veces en Monday (duplicado ${dup.id})`, referencia: { dealId: dDuplicada.id, duplicadoId: dup.id }, monto: dDuplicada.monto },\n      { id: 'D3', tipo: 'monto_distinto', fuentes: ['monday', 'compaq'], descripcion: `La venta ${dMontoDistinto.id} es de $${dMontoDistinto.monto} en Monday pero se facturó con 5% de descuento no registrado`, referencia: { dealId: dMontoDistinto.id, folio: facturas.find((f) => f.dealId === dMontoDistinto.id)?.folio }, monto: round2(dMontoDistinto.monto * 0.05) },\n      { id: 'D4', tipo: 'pago_no_registrado', fuentes: ['compaq', 'bancos'], descripcion: `La factura ${fPagoNoRegistrado.folio} de ${nameOf(fPagoNoRegistrado.clienteId).razon} sigue Pendiente en Compaq, pero el banco recibió $${fPagoNoRegistrado.total}`, referencia: { folio: fPagoNoRegistrado.folio }, monto: fPagoNoRegistrado.total },\n      { id: 'D5', tipo: 'deposito_sin_identificar', fuentes: ['bancos'], descripcion: `Depósito en efectivo de $${depositoMisterioso} sin cliente ni factura asociada`, referencia: { abono: depositoMisterioso }, monto: depositoMisterioso },\n      { id: 'D6', tipo: 'nomina_no_cuadra', fuentes: ['esfera', 'bancos'], descripcion: `La nómina Q2 en Esfera suma $${netoQ(2)}, pero el banco pagó $${round2(netoQ(2) + finiquito)} (diferencia $${finiquito}, posible finiquito no capturado)`, referencia: { periodo: `Q2 ${periodo}` }, monto: finiquito },\n    ],\n    emparejamientos: CLIENTES.map((c) => ({ clienteId: c.id, monday: c.monday, compaq: c.razon, banco: c.banco, rfc: c.rfc })),\n    totales: {\n      oportunidades: dealsMonday.length,\n      ventasGanadas: ganados.length,\n      facturas: facturas.length,\n      facturado: round2(facturas.reduce((a, f) => a + f.total, 0)),\n      cobradoSegunCompaq: round2(facturas.filter((f) => f.estatus === 'Pagada').reduce((a, f) => a + f.total, 0)),\n      nominaQ1: netoQ(1),\n      nominaQ2: netoQ(2),\n      movimientosBanco: movs.length,\n      saldoFinal: saldo,\n    },\n  };\n\n  return { periodo, version, escenario, monday, compaq, esfera, bancos, respuestas };\n}\n\n// normal: datos limpios · sucio: captura manual desordenada · caida: el banco no responde (lo aplica el webhook)\nconst ESCENARIOS = ['normal', 'sucio', 'caida'];\n\n\n// ---- Selección de la fuente pedida (?fuente=&periodo=&version=) ----\nconst q = $input.first().json.query || {};\nconst fuente = String(q.fuente || '').toLowerCase();\nconst periodo = String(q.periodo || '2026-09');\nconst version = Number(q.version || 1);\nconst escenario = String(q.escenario || 'normal').toLowerCase();\nconst FUENTES = ['monday', 'compaq', 'esfera', 'bancos', 'respuestas'];\n\nlet d;\ntry {\n  d = generateSimData(periodo, { version, escenario });\n} catch (e) {\n  return [{ json: { route: 'error', status: 400, payload: { error: e.message } } }];\n}\n\nconst toCsv = (rows) => {\n  const cols = Object.keys(rows[0] || {});\n  const cell = (v) => {\n    const s = v === null || v === undefined ? '' : String(v);\n    return /[\",\\n]/.test(s) ? '\"' + s.replace(/\"/g, '\"\"') + '\"' : s;\n  };\n  return '\\ufeff' + [cols.join(','), ...rows.map((r) => cols.map((c) => cell(r[c])).join(','))].join('\\r\\n');\n};\n\n// Escenario \"caida\": el banco no responde, para probar la resiliencia del orquestador\nif (escenario === 'caida' && fuente === 'bancos') {\n  return [{ json: { route: 'error', status: 503, payload: { error: 'servicio del banco no disponible (escenario caida)' } } }];\n}\n\nswitch (fuente) {\n  case 'monday':\n    return [{ json: { route: 'json', fileName: 'monday_' + periodo + '.json', payload: d.monday } }];\n  case 'respuestas':\n    return [{ json: { route: 'json', fileName: 'respuestas_' + periodo + '.json', payload: d.respuestas } }];\n  case 'compaq':\n    return [{ json: { route: 'xlsx', fileName: 'compaq_facturas_' + periodo + '_v' + version + '.xlsx', rows: d.compaq } }];\n  case 'esfera':\n    return [{ json: { route: 'csv', fileName: 'esfera_nomina_' + periodo + '.csv', csv: toCsv(d.esfera) } }];\n  case 'bancos':\n    return [{ json: { route: 'csv', fileName: 'banco_estado_cuenta_' + periodo + '.csv', csv: toCsv(d.bancos) } }];\n  default:\n    return [{ json: { route: 'error', status: 400, payload: { error: 'fuente inválida', fuentes: FUENTES, escenarios: ['normal', 'sucio', 'caida'] } } }];\n}\n" } },
});

const ruta = switchCase({
  version: 3.4,
  config: {
    name: 'Ruta por formato',
    parameters: {
      mode: 'rules',
      rules: { values: [{"outputKey":"json","renameOutput":true,"conditions":{"options":{"caseSensitive":false,"leftValue":"","typeValidation":"strict"},"conditions":[{"leftValue":expr('{{ $json.route }}'),"operator":{"type":"string","operation":"equals"},"rightValue":"json"}],"combinator":"and"}},{"outputKey":"csv","renameOutput":true,"conditions":{"options":{"caseSensitive":false,"leftValue":"","typeValidation":"strict"},"conditions":[{"leftValue":expr('{{ $json.route }}'),"operator":{"type":"string","operation":"equals"},"rightValue":"csv"}],"combinator":"and"}},{"outputKey":"xlsx","renameOutput":true,"conditions":{"options":{"caseSensitive":false,"leftValue":"","typeValidation":"strict"},"conditions":[{"leftValue":expr('{{ $json.route }}'),"operator":{"type":"string","operation":"equals"},"rightValue":"xlsx"}],"combinator":"and"}}] },
      options: { fallbackOutput: 'extra', renameFallbackOutput: 'error' },
    },
  },
});

const responderJson = node({
  type: 'n8n-nodes-base.respondToWebhook',
  version: 1.5,
  config: {
    name: 'Responder JSON',
    parameters: {
      respondWith: 'json',
      responseBody: expr('{{ JSON.stringify($json.payload) }}'),
      options: { responseCode: 200, responseHeaders: { entries: [{ name: 'X-Sim-Archivo', value: expr('{{ $json.fileName }}') }] } },
    },
  },
});

const responderCsv = node({
  type: 'n8n-nodes-base.respondToWebhook',
  version: 1.5,
  config: {
    name: 'Responder CSV',
    parameters: {
      respondWith: 'text',
      responseBody: expr('{{ $json.csv }}'),
      options: {
        responseCode: 200,
        responseHeaders: {
          entries: [
            { name: 'Content-Type', value: 'text/csv; charset=utf-8' },
            { name: 'Content-Disposition', value: expr('attachment; filename="{{ $json.fileName }}"') },
          ],
        },
      },
    },
  },
});

const filas = node({
  type: 'n8n-nodes-base.splitOut',
  version: 1,
  config: { name: 'Filas de facturas', parameters: { fieldToSplitOut: 'rows', include: 'noOtherFields', options: {} } },
});

const excel = node({
  type: 'n8n-nodes-base.convertToFile',
  version: 1.1,
  config: {
    name: 'Crear Excel Compaq',
    parameters: {
      operation: 'xlsx',
      binaryPropertyName: 'data',
      options: { fileName: expr("{{ $('Generar fuente').first().json.fileName }}"), sheetName: 'Facturas', headerRow: true },
    },
  },
});

const responderExcel = node({
  type: 'n8n-nodes-base.respondToWebhook',
  version: 1.5,
  config: {
    name: 'Responder Excel',
    parameters: {
      respondWith: 'binary',
      responseDataSource: 'automatically',
      options: {
        responseCode: 200,
        responseHeaders: {
          entries: [{ name: 'Content-Disposition', value: expr("attachment; filename=\"{{ $('Generar fuente').first().json.fileName }}\"") }],
        },
      },
    },
  },
});

const responderError = node({
  type: 'n8n-nodes-base.respondToWebhook',
  version: 1.5,
  config: {
    name: 'Responder error',
    parameters: { respondWith: 'json', responseBody: expr('{{ JSON.stringify($json.payload) }}'), options: { responseCode: expr('{{ $json.status }}') } },
  },
});

export default workflow('treve-simulador-fuentes', 'Treve · Simulador de fuentes')
  .add(webhook)
  .to(generar)
  .to(
    ruta
      .onCase(0, responderJson)
      .onCase(1, responderCsv)
      .onCase(2, filas.to(excel.to(responderExcel)))
      .onCase(3, responderError),
  );
