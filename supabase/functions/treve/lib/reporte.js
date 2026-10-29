// Agente Excel: llena el "Reporte de ventas" que hoy Treve arma a mano, con las columnas
// de Monday, Compaq y Bancos lado a lado y las observaciones del auditor.

const OBS = {
  venta_sin_factura: 'Venta ganada sin factura',
  monto_distinto: 'Monto facturado distinto',
  pago_no_registrado: 'Cobrado en banco, pendiente en Compaq',
  cobro_no_encontrado: 'Pagada en Compaq sin cobro en banco',
};
const ESTADO = { en_revision: 'en revisión', confirmado: 'confirmado', descartado: 'descartado', abierto: 'aviso' };

export function hojasReporte({ periodo, ventas, facturas, movimientos, enlaces, hallazgos = [], clientes = [], indicadores = [], final = false }) {
  const nombre = (id) => clientes.find((c) => c.id === id)?.nombre || '';
  const porFolio = new Map(facturas.map((f) => [f.folio, f]));
  const porLinea = new Map((movimientos || []).map((m) => [m.linea, m]));
  const obsDe = (dealId, folio) =>
    hallazgos
      .filter((h) => OBS[h.tipo] && ((dealId && h.referencia.dealId === dealId) || (folio && h.referencia.folio === folio)))
      .map((h) => `${OBS[h.tipo]} (${ESTADO[h.estado] || h.estado})`)
      .join('; ');
  const dups = new Set(enlaces.duplicados || []);
  const ganadas = ventas.filter((v) => v.etapa === 'Ganado' && !dups.has(v.deal_id));

  const ventasSheet = ganadas
    .sort((a, b) => a.fecha_cierre.localeCompare(b.fecha_cierre))
    .map((v) => {
      const f = porFolio.get(enlaces.ventaFactura[v.deal_id]);
      const cobro = f && porLinea.get(enlaces.facturaCobro[f.folio]);
      return {
        Cliente: nombre(v.cliente_id) || v.cliente_alias,
        'RFC': f?.rfc || '',
        'Oportunidad (Monday)': `${v.deal_id} · ${v.nombre}`,
        Canal: v.canal || '',
        Vendedor: v.vendedor || '',
        'Fecha de cierre': v.fecha_cierre,
        'Monto Monday': v.monto,
        'Folio Compaq': f?.folio || '',
        'Fecha factura': f?.fecha || '',
        Subtotal: f?.subtotal ?? '',
        IVA: f?.iva ?? '',
        Total: f?.total ?? '',
        'Estatus Compaq': f?.estatus || 'Sin factura',
        'Cobrado en banco': cobro ? 'Sí' : 'No',
        'Fecha de cobro': cobro?.fecha || '',
        Observaciones: obsDe(v.deal_id, f?.folio),
      };
    });

  const hallazgosSheet = hallazgos.map((h, i) => ({
    '#': i + 1,
    Tipo: h.tipo.replace(/_/g, ' '),
    Severidad: h.severidad,
    Descripción: h.descripcion,
    Monto: h.monto ?? '',
    Decisión: h.decision ? `${h.decision.choice.replace(/_/g, ' ')} (${Math.round((h.decision.confidence || 0) * 100)} % · ${h.decision.fuente})` : '',
    Estado: ESTADO[h.estado] || h.estado,
    Nota: h.nota || '',
  }));

  const ETIQUETAS = {
    ventas_ganadas: 'Ventas ganadas (MXN)', facturado: 'Facturado (MXN)', cobrado: 'Cobrado confirmado en banco (MXN)',
    por_cobrar: 'Por cobrar real (MXN)', por_cobrar_segun_compaq: 'Por cobrar según Compaq (MXN)', ventas_sin_facturar: 'Ventas sin facturar (MXN)',
    ingresos_banco: 'Ingresos en banco (MXN)', egresos_banco: 'Egresos en banco (MXN)', flujo_neto: 'Flujo neto (MXN)',
    saldo_final: 'Saldo final (MXN)', saldo_final_usd: 'Saldo final (USD)', tipo_cambio_usd: 'Tipo de cambio USD/MXN',
    nomina_esfera: 'Nómina según Esfera (MXN)', nomina_banco: 'Nómina pagada en banco (MXN)', tasa_cierre: 'Tasa de cierre (%)',
    calidad_datos: 'Calidad de datos (%)', dias_habiles: 'Días hábiles del periodo', en_revision: 'Hallazgos en revisión',
  };
  const resumenSheet = [
    { Indicador: 'Periodo', Valor: periodo },
    { Indicador: 'Versión', Valor: final ? 'Final (validada)' : 'Preliminar (con hallazgos en revisión)' },
    ...indicadores.filter((i) => ETIQUETAS[i.clave] && i.valor != null).map((i) => ({ Indicador: ETIQUETAS[i.clave], Valor: i.valor })),
  ];

  return [
    { nombre: 'Reporte de ventas', filas: ventasSheet },
    { nombre: 'Hallazgos', filas: hallazgosSheet.length ? hallazgosSheet : [{ Descripción: 'Sin hallazgos' }] },
    { nombre: 'Resumen', filas: resumenSheet },
  ];
}
