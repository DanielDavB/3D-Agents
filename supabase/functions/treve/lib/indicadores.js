// Analistas: indicadores del dashboard calculados en código a partir de los datos conciliados
// y de las decisiones sobre los hallazgos. La IA solo redacta conclusiones con estas cifras.

const round2 = (n) => Math.round(n * 100) / 100;
const sum = (arr, f) => round2(arr.reduce((a, x) => a + (f(x) || 0), 0));

const CATEGORIAS = [
  [/NOMINA/i, 'Nómina'],
  [/RENTA/i, 'Renta'],
  [/PUBLICIDAD|MARKETING|ADS/i, 'Publicidad'],
  [/NUBE|SOFTWARE|LICENCIA/i, 'Software'],
  [/HONORARIOS/i, 'Honorarios'],
  [/ENERGIA|LUZ|AGUA|TELEFON/i, 'Servicios'],
];
const categoria = (concepto) => CATEGORIAS.find(([re]) => re.test(concepto))?.[1] || 'Otros';

export function calcularIndicadores({ ventas, facturas, nomina, movimientos, enlaces, hallazgos = [], clientes = [], externos = {} }) {
  const vigente = (h) => h.estado !== 'descartado';
  const dupVigentes = new Set(hallazgos.filter((h) => h.tipo === 'oportunidad_duplicada' && vigente(h)).map((h) => h.referencia.duplicadoId));
  const ventasLimpias = ventas.filter((v) => !dupVigentes.has(v.deal_id));
  const ganadas = ventasLimpias.filter((v) => v.etapa === 'Ganado');
  const perdidas = ventasLimpias.filter((v) => v.etapa === 'Perdido');
  const abiertas = ventasLimpias.filter((v) => ['Negociación', 'Propuesta'].includes(v.etapa));
  const cobradas = new Set(Object.keys(enlaces?.facturaCobro || {}));
  const nombre = (id) => clientes.find((c) => c.id === id)?.nombre || id || 'Sin identificar';

  const facturado = sum(facturas, (f) => f.total);
  const cobrado = sum(facturas.filter((f) => cobradas.has(f.folio)), (f) => f.total);
  const ingresos = movimientos ? sum(movimientos, (m) => m.abono) : null;
  const egresos = movimientos ? sum(movimientos, (m) => m.cargo) : null;
  const nominaBanco = movimientos ? sum(movimientos.filter((m) => /NOMINA/i.test(m.concepto)), (m) => m.cargo) : null;
  const primero = movimientos?.find((m) => m.saldo != null);
  const ultimo = movimientos && [...movimientos].reverse().find((m) => m.saldo != null);
  const saldoFinal = ultimo ? ultimo.saldo : null;
  const saldoInicial = primero ? round2(primero.saldo - primero.abono + primero.cargo) : null;

  const registros = ventas.length + facturas.length + (nomina?.length || 0) + (movimientos?.length || 0);
  const conHallazgo = hallazgos.filter((h) => h.tipo !== 'fuente_no_disponible' && vigente(h)).length;

  const fx = externos.tipoCambio?.valor || null;
  const valores = {
    ventas_ganadas: sum(ganadas, (v) => v.monto),
    oportunidades_ganadas: ganadas.length,
    pipeline_abierto: sum(abiertas, (v) => v.monto),
    tasa_cierre: ganadas.length + perdidas.length ? round2((ganadas.length / (ganadas.length + perdidas.length)) * 100) : null,
    ticket_promedio: ganadas.length ? round2(sum(ganadas, (v) => v.monto) / ganadas.length) : null,
    facturado,
    facturas: facturas.length,
    cobrado,
    por_cobrar: round2(facturado - cobrado),
    por_cobrar_segun_compaq: sum(facturas.filter((f) => f.estatus === 'Pendiente'), (f) => f.total),
    ventas_sin_facturar: sum(hallazgos.filter((h) => h.tipo === 'venta_sin_factura' && vigente(h)), (h) => h.monto),
    ingresos_banco: ingresos,
    egresos_banco: egresos,
    flujo_neto: ingresos == null ? null : round2(ingresos - egresos),
    saldo_inicial: saldoInicial,
    saldo_final: saldoFinal,
    nomina_esfera: nomina ? sum(nomina, (r) => r.neto) : null,
    nomina_banco: nominaBanco,
    depositos_sin_identificar: sum(hallazgos.filter((h) => h.tipo === 'deposito_sin_identificar' && vigente(h)), (h) => h.monto),
    calidad_datos: registros ? round2((1 - conHallazgo / registros) * 100) : null,
    hallazgos: hallazgos.length,
    en_revision: hallazgos.filter((h) => h.estado === 'en_revision').length,
    tipo_cambio_usd: fx,
    saldo_final_usd: fx && saldoFinal != null ? round2(saldoFinal / fx) : null,
    dias_habiles: externos.calendario?.diasHabiles ?? null,
  };

  // ---- desgloses ----
  const agrupar = (rows, key, val) => {
    const m = new Map();
    for (const r of rows) m.set(key(r), round2((m.get(key(r)) || 0) + val(r)));
    return [...m.entries()].map(([k, v]) => ({ k, v })).sort((a, b) => b.v - a.v);
  };
  const porCliente = new Map();
  for (const f of facturas) {
    const c = porCliente.get(f.cliente_id) || { cliente: nombre(f.cliente_id), facturado: 0, cobrado: 0, por_cobrar: 0, facturas: 0 };
    c.facturado = round2(c.facturado + f.total);
    c.facturas += 1;
    if (cobradas.has(f.folio)) c.cobrado = round2(c.cobrado + f.total);
    c.por_cobrar = round2(c.facturado - c.cobrado);
    porCliente.set(f.cliente_id, c);
  }
  const detalle = {
    ventas_ganadas: { por_canal: agrupar(ganadas, (v) => v.canal || 'Sin canal', (v) => v.monto).map(({ k, v }) => ({ canal: k, monto: v, n: ganadas.filter((g) => (g.canal || 'Sin canal') === k).length })) },
    oportunidades_ganadas: { por_vendedor: agrupar(ganadas, (v) => v.vendedor || 'Sin asignar', (v) => v.monto).map(({ k, v }) => ({ vendedor: k, monto: v })) },
    por_cobrar: { por_cliente: [...porCliente.values()].sort((a, b) => b.por_cobrar - a.por_cobrar || b.facturado - a.facturado) },
    egresos_banco: movimientos ? { por_categoria: agrupar(movimientos.filter((m) => m.cargo > 0), (m) => categoria(m.concepto), (m) => m.cargo).map(({ k, v }) => ({ categoria: k, monto: v })) } : {},
    tipo_cambio_usd: externos.tipoCambio ? { fecha: externos.tipoCambio.fecha, fuente: externos.tipoCambio.fuente } : {},
    dias_habiles: externos.calendario ? { feriados: externos.calendario.feriados, fuente: externos.calendario.fuente } : {},
  };
  return Object.entries(valores).map(([clave, valor]) => ({ clave, valor, detalle: detalle[clave] || {} }));
}

export const comoObjeto = (lista) => Object.fromEntries(lista.map((i) => [i.clave, i.valor]));

// Días hábiles del periodo (lunes a viernes menos feriados oficiales)
export function diasHabiles(periodo, feriados = []) {
  const [Y, M] = periodo.split('-').map(Number);
  const last = new Date(Date.UTC(Y, M, 0)).getUTCDate();
  const fest = new Set(feriados.map((f) => f.fecha));
  let n = 0;
  for (let d = 1; d <= last; d++) {
    const iso = `${periodo}-${String(d).padStart(2, '0')}`;
    const wd = new Date(`${iso}T12:00:00Z`).getUTCDay();
    if (wd !== 0 && wd !== 6 && !fest.has(iso)) n++;
  }
  return n;
}
