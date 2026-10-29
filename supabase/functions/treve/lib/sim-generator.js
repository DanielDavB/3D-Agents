// Generador determinista de datos FICTICIOS para simular las fuentes de Treve:
// Monday (comercial), Compaq/CONTPAQi (facturación), Esfera (nómina) y Bancos (estado de cuenta).
//
// - Mismo periodo + versión = exactamente los mismos datos (semilla derivada del periodo).
// - Siembra discrepancias conocidas y las devuelve en `respuestas` para medir aciertos.
// - Es autocontenido (sin imports): el mismo código se usa dentro del nodo Code de n8n
//   y como respaldo local del orquestador si el simulador no responde.

export function generateSimData(periodo = '2026-09', options = {}) {
  const version = Number(options.version || 1);
  const escenario = String(options.escenario || 'normal');
  if (!/^\d{4}-(0[1-9]|1[0-2])$/.test(periodo)) throw new Error('periodo inválido, usa AAAA-MM');
  if (![1, 2].includes(version)) throw new Error('version inválida, usa 1 o 2');
  if (!ESCENARIOS.includes(escenario)) throw new Error(`escenario inválido, usa ${ESCENARIOS.join(', ')}`);

  // ---------- utilidades deterministas ----------
  let h = 2166136261;
  for (const ch of `treve-sim:${periodo}`) h = Math.imul(h ^ ch.charCodeAt(0), 16777619);
  let s = h >>> 0;
  const rnd = () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  const int = (a, b) => a + Math.floor(rnd() * (b - a + 1));
  const pick = (arr) => arr[Math.floor(rnd() * arr.length)];
  const round2 = (n) => Math.round(n * 100) / 100;
  const pad = (n) => String(n).padStart(2, '0');
  const [Y, M] = periodo.split('-').map(Number);
  const lastDay = new Date(Date.UTC(Y, M, 0)).getUTCDate();
  const iso = (d) => `${Y}-${pad(M)}-${pad(Math.min(Math.max(d, 1), lastDay))}`;
  const mx = (isoDate) => isoDate.split('-').reverse().join('/'); // DD/MM/AAAA
  const dayOf = (isoDate) => Number(isoDate.slice(8, 10));

  // ---------- catálogos ficticios ----------
  // Cada cliente aparece con un nombre distinto en cada sistema (reto de emparejamiento).
  const CLIENTES = [
    { id: 'C01', razon: 'Constructora Alfa SA de CV', rfc: 'CAL180312AB1', monday: 'Constructora Alfa', banco: 'CONSTRUCTORA ALFA' },
    { id: 'C02', razon: 'Cliente Beta SA de CV', rfc: 'CBE150707KJ2', monday: 'BETA', banco: 'CLIENTE BETA SA' },
    { id: 'C03', razon: 'Grupo Gamma Logística SA de CV', rfc: 'GGL170221QW3', monday: 'Gamma Logística', banco: 'GPO GAMMA LOG' },
    { id: 'C04', razon: 'Delta Servicios Industriales SA de CV', rfc: 'DSI160930ER4', monday: 'Delta Servicios', banco: 'DELTA SERV IND' },
    { id: 'C05', razon: 'Épsilon Comercializadora SA de CV', rfc: 'ECO190415TY5', monday: 'Epsilon', banco: 'EPSILON COMERC' },
    { id: 'C06', razon: 'Zeta Desarrollos Inmobiliarios SA de CV', rfc: 'ZDI200102UI6', monday: 'Zeta Desarrollos', banco: 'ZETA DESARROLLOS' },
    { id: 'C07', razon: 'Eta Manufacturas SA de CV', rfc: 'EMA140818OP7', monday: 'Eta Manufacturas', banco: 'ETA MANUF' },
    { id: 'C08', razon: 'Theta Consultores SC', rfc: 'TCO210525AS8', monday: 'Theta', banco: 'THETA CONSULTORES' },
  ];
  const CANALES = ['Referidos', 'LinkedIn', 'Google Ads', 'Eventos', 'Meta Ads'];
  const VENDEDORES = ['Ana R.', 'Luis M.', 'Sofía T.'];
  const EMPLEADOS = [
    ['E001', 'Laura Méndez', 'Dirección', 62000], ['E002', 'Jorge Salinas', 'Ventas', 34000],
    ['E003', 'Paola Ríos', 'Ventas', 31000], ['E004', 'Héctor Aguilar', 'Ventas', 29500],
    ['E005', 'Mariana Cruz', 'Operaciones', 27000], ['E006', 'Ricardo Pineda', 'Operaciones', 26500],
    ['E007', 'Daniela Ortiz', 'Operaciones', 25000], ['E008', 'Fernando Vega', 'Operaciones', 24000],
    ['E009', 'Claudia Núñez', 'Administración', 30000], ['E010', 'Andrés Lozano', 'Administración', 22000],
    ['E011', 'Gabriela Soto', 'Administración', 21000], ['E012', 'Óscar Medina', 'Operaciones', 23500],
  ];

  // ---------- Monday: oportunidades ----------
  const deals = [];
  let dealSeq = 9100;
  for (const c of CLIENTES) {
    const n = int(2, 4);
    for (let k = 0; k < n; k++) {
      const r = rnd();
      const etapa = r < 0.58 ? 'Ganado' : r < 0.78 ? 'Negociación' : r < 0.9 ? 'Propuesta' : 'Perdido';
      deals.push({
        id: String(dealSeq++),
        nombre: `${pick(['Implementación', 'Consultoría', 'Licencias', 'Soporte anual', 'Capacitación'])} ${c.monday}`,
        clienteId: c.id,
        cliente: c.monday,
        etapa,
        monto: int(80, 760) * 500,
        fecha: iso(int(1, lastDay - 4)),
        canal: pick(CANALES),
        vendedor: pick(VENDEDORES),
      });
    }
  }
  const ganados = deals.filter((d) => d.etapa === 'Ganado');
  // Asegura suficientes ventas ganadas para sembrar las discrepancias
  for (const d of deals) {
    if (ganados.length >= 10) break;
    if (d.etapa !== 'Ganado') {
      d.etapa = 'Ganado';
      ganados.push(d);
    }
  }
  ganados.sort((a, b) => a.fecha.localeCompare(b.fecha) || a.id.localeCompare(b.id));

  // Elecciones de discrepancias (distintas entre sí)
  const used = new Set();
  const choose = (list) => {
    const options = list.filter((x) => !used.has(x.id));
    const x = options[Math.floor(rnd() * options.length)];
    used.add(x.id);
    return x;
  };
  const dSinFactura = choose(ganados);
  const dDuplicada = choose(ganados);
  const dMontoDistinto = choose(ganados);

  // ---------- Compaq: facturas ----------
  const facturas = [];
  let folio = 2280;
  for (const d of ganados) {
    if (d.id === dSinFactura.id) continue;
    const c = CLIENTES.find((x) => x.id === d.clienteId);
    const fecha = iso(dayOf(d.fecha) + int(0, 3));
    const subtotal = d.id === dMontoDistinto.id ? round2(d.monto * 0.95) : d.monto;
    const iva = round2(subtotal * 0.16);
    const pagoDia = dayOf(fecha) + int(4, 18);
    const pagada = rnd() < 0.62 && pagoDia <= lastDay;
    facturas.push({
      folio: `F-${folio++}`,
      fecha,
      rfc: c.rfc,
      razon: c.razon,
      clienteId: c.id,
      dealId: d.id,
      subtotal,
      iva,
      total: round2(subtotal + iva),
      estatus: pagada ? 'Pagada' : 'Pendiente',
      fechaPago: pagada ? iso(pagoDia) : '',
    });
  }
  // (sin repetir una venta que ya tiene otra discrepancia sembrada)
  const pendientes = facturas.filter((f) => f.estatus === 'Pendiente' && !used.has(f.dealId));
  const fPagoNoRegistrado = pendientes[Math.floor(rnd() * pendientes.length)] || facturas[0];

  // Duplicado capturado dos veces en Monday
  const dup = { ...dDuplicada, id: String(dealSeq++) };
  const dealsMonday = [...deals, dup];

  // ---------- Esfera: nómina ----------
  const nomina = [];
  for (const q of [1, 2]) {
    for (const [num, nombre, depto, mensual] of EMPLEADOS) {
      const percepciones = round2(mensual / 2 + (q === 2 && depto === 'Ventas' ? int(2, 9) * 500 : 0));
      const deducciones = round2(percepciones * (0.17 + int(0, 6) / 100));
      nomina.push({
        num, nombre, depto,
        periodo: `Q${q} ${periodo}`,
        percepciones,
        deducciones,
        neto: round2(percepciones - deducciones),
      });
    }
  }
  const netoQ = (q) => round2(nomina.filter((r) => r.periodo.startsWith(`Q${q}`)).reduce((a, r) => a + r.neto, 0));
  const finiquito = int(12, 30) * 500; // pagado por banco pero no capturado en Esfera

  // ---------- Bancos: estado de cuenta ----------
  const movs = [];
  for (const f of facturas.filter((x) => x.estatus === 'Pagada')) {
    const c = CLIENTES.find((x) => x.id === f.clienteId);
    const conRef = rnd() < 0.7;
    movs.push({ fecha: f.fechaPago, concepto: `SPEI RECIBIDO ${c.banco}`, referencia: conRef ? f.folio : '', cargo: 0, abono: f.total });
  }
  {
    const c = CLIENTES.find((x) => x.id === fPagoNoRegistrado.clienteId);
    movs.push({ fecha: iso(Math.min(lastDay, dayOf(fPagoNoRegistrado.fecha) + 7)), concepto: `SPEI RECIBIDO ${c.banco}`, referencia: '', cargo: 0, abono: fPagoNoRegistrado.total });
  }
  const depositoMisterioso = int(18, 90) * 500 + 0.5 * int(0, 1);
  movs.push({ fecha: iso(int(5, lastDay - 2)), concepto: `DEPOSITO EFECTIVO SUC ${int(100, 999)}`, referencia: '', cargo: 0, abono: depositoMisterioso });
  movs.push({ fecha: iso(15), concepto: 'PAGO NOMINA Q1', referencia: `NOM-Q1-${periodo}`, cargo: netoQ(1), abono: 0 });
  movs.push({ fecha: iso(lastDay), concepto: 'PAGO NOMINA Q2', referencia: `NOM-Q2-${periodo}`, cargo: round2(netoQ(2) + finiquito), abono: 0 });
  for (const [concepto, a, b] of [['RENTA OFICINA', 900, 900], ['SERVICIOS NUBE Y SOFTWARE', 40, 90], ['PUBLICIDAD DIGITAL', 120, 260], ['HONORARIOS CONTABLES', 60, 60], ['ENERGIA ELECTRICA', 10, 28]]) {
    movs.push({ fecha: iso(int(2, lastDay - 1)), concepto, referencia: '', cargo: int(a, b) * 100, abono: 0 });
  }
  movs.sort((a, b) => a.fecha.localeCompare(b.fecha) || b.abono - a.abono);
  let saldo = 1250000;
  for (const m of movs) {
    saldo = round2(saldo + m.abono - m.cargo);
    m.saldo = saldo;
  }

  // ---------- salidas con el formato de cada sistema ----------
  const monday = {
    data: {
      boards: [
        {
          id: '4821337',
          name: 'Pipeline comercial',
          items_page: {
            items: dealsMonday.map((d) => ({
              id: d.id,
              name: d.nombre,
              column_values: [
                { id: 'cliente', text: d.cliente },
                { id: 'etapa', text: d.etapa },
                { id: 'monto', text: String(d.monto) },
                { id: 'fecha_cierre', text: d.fecha },
                { id: 'canal', text: d.canal },
                { id: 'vendedor', text: d.vendedor },
              ],
            })),
          },
        },
      ],
    },
  };

  let compaq = facturas.map((f) =>
    version === 1
      ? { Folio: f.folio, Fecha: mx(f.fecha), RFC: f.rfc, 'Razón social': f.razon, Subtotal: f.subtotal, IVA: f.iva, Total: f.total, Estatus: f.estatus, 'Fecha de pago': f.fechaPago ? mx(f.fechaPago) : '' }
      : { 'Fecha emisión': mx(f.fecha), 'No. Documento': f.folio, Cliente: f.razon, 'R.F.C.': f.rfc, 'Importe total': f.total, Importe: f.subtotal, Impuestos: f.iva, 'Situación': f.estatus === 'Pagada' ? 'PAGADO' : 'POR COBRAR', 'Pagado el': f.fechaPago ? mx(f.fechaPago) : '' },
  );

  let esfera = nomina.map((r) => ({ 'No. Empleado': r.num, Nombre: r.nombre, Departamento: r.depto, Periodo: r.periodo, Percepciones: r.percepciones, Deducciones: r.deducciones, Neto: r.neto }));

  let bancos = movs.map((m) => ({ Fecha: mx(m.fecha), Concepto: m.concepto, Referencia: m.referencia, Cargo: m.cargo || '', Abono: m.abono || '', Saldo: m.saldo }));

  // Escenario "sucio": como un Excel capturado a mano (montos con $ y comas, espacios de más,
  // estatus en mayúsculas y una fila vacía). Los datos de fondo y las respuestas no cambian.
  if (escenario === 'sucio') {
    const money = (n) => '$' + Number(n).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    const ensuciar = (rows) => {
      const out = rows.map((r) => {
        const o = {};
        for (const [k, v] of Object.entries(r)) {
          if (typeof v === 'number' && rnd() < 0.5) o[k] = money(v);
          else if (/^(Estatus|Situación)$/.test(k) && rnd() < 0.5) o[k] = String(v).toUpperCase();
          else if (typeof v === 'string' && v && rnd() < 0.35) o[k] = `  ${v} `;
          else o[k] = v;
        }
        return o;
      });
      out.splice(1 + Math.floor(rnd() * (out.length - 1)), 0, Object.fromEntries(Object.keys(rows[0]).map((k) => [k, ''])));
      return out;
    };
    compaq = ensuciar(compaq);
    esfera = ensuciar(esfera);
    bancos = ensuciar(bancos);
  }

  // ---------- hoja de respuestas ----------
  const nameOf = (id) => CLIENTES.find((c) => c.id === id);
  const respuestas = {
    periodo,
    version,
    escenario,
    discrepancias: [
      { id: 'D1', tipo: 'venta_sin_factura', fuentes: ['monday', 'compaq'], descripcion: `La venta ganada ${dSinFactura.id} de ${dSinFactura.cliente} ($${dSinFactura.monto}) no tiene factura en Compaq`, referencia: { dealId: dSinFactura.id }, monto: dSinFactura.monto },
      { id: 'D2', tipo: 'oportunidad_duplicada', fuentes: ['monday'], descripcion: `La oportunidad ${dDuplicada.id} está capturada dos veces en Monday (duplicado ${dup.id})`, referencia: { dealId: dDuplicada.id, duplicadoId: dup.id }, monto: dDuplicada.monto },
      { id: 'D3', tipo: 'monto_distinto', fuentes: ['monday', 'compaq'], descripcion: `La venta ${dMontoDistinto.id} es de $${dMontoDistinto.monto} en Monday pero se facturó con 5% de descuento no registrado`, referencia: { dealId: dMontoDistinto.id, folio: facturas.find((f) => f.dealId === dMontoDistinto.id)?.folio }, monto: round2(dMontoDistinto.monto * 0.05) },
      { id: 'D4', tipo: 'pago_no_registrado', fuentes: ['compaq', 'bancos'], descripcion: `La factura ${fPagoNoRegistrado.folio} de ${nameOf(fPagoNoRegistrado.clienteId).razon} sigue Pendiente en Compaq, pero el banco recibió $${fPagoNoRegistrado.total}`, referencia: { folio: fPagoNoRegistrado.folio }, monto: fPagoNoRegistrado.total },
      { id: 'D5', tipo: 'deposito_sin_identificar', fuentes: ['bancos'], descripcion: `Depósito en efectivo de $${depositoMisterioso} sin cliente ni factura asociada`, referencia: { abono: depositoMisterioso }, monto: depositoMisterioso },
      { id: 'D6', tipo: 'nomina_no_cuadra', fuentes: ['esfera', 'bancos'], descripcion: `La nómina Q2 en Esfera suma $${netoQ(2)}, pero el banco pagó $${round2(netoQ(2) + finiquito)} (diferencia $${finiquito}, posible finiquito no capturado)`, referencia: { periodo: `Q2 ${periodo}` }, monto: finiquito },
    ],
    emparejamientos: CLIENTES.map((c) => ({ clienteId: c.id, monday: c.monday, compaq: c.razon, banco: c.banco, rfc: c.rfc })),
    totales: {
      oportunidades: dealsMonday.length,
      ventasGanadas: ganados.length,
      facturas: facturas.length,
      facturado: round2(facturas.reduce((a, f) => a + f.total, 0)),
      cobradoSegunCompaq: round2(facturas.filter((f) => f.estatus === 'Pagada').reduce((a, f) => a + f.total, 0)),
      nominaQ1: netoQ(1),
      nominaQ2: netoQ(2),
      movimientosBanco: movs.length,
      saldoFinal: saldo,
    },
  };

  return { periodo, version, escenario, monday, compaq, esfera, bancos, respuestas };
}

// normal: datos limpios · sucio: captura manual desordenada · caida: el banco no responde (lo aplica el webhook)
const ESCENARIOS = ['normal', 'sucio', 'caida'];
