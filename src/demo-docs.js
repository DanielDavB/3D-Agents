// Documentos del modo Demo: se generan en el navegador con el MISMO simulador y la MISMA lógica
// de conciliación que usa el orquestador real, así todo lo que aparece en la demo es consultable.
import { generateSimData } from '../supabase/functions/treve/lib/sim-generator.js';
import * as N from '../supabase/functions/treve/lib/normalizar.js';
import { asignarClientes, conciliar } from '../supabase/functions/treve/lib/conciliar.js';
import { calcularIndicadores } from '../supabase/functions/treve/lib/indicadores.js';
import { hojasReporte } from '../supabase/functions/treve/lib/reporte.js';
import { decidirPorReglas, estadoPorAccion } from '../supabase/functions/treve/lib/juicio.js';

export const DEMO_PERIODO = '2026-09';

const hoja = (nombre, filas) => ({ nombre, columnas: Object.keys(filas[0] || {}), filas, total: filas.length });

function construir() {
  const d = generateSimData(DEMO_PERIODO);
  const p = DEMO_PERIODO;
  const mapa = (fuente, rows) => N.mapearColumnas(fuente, Object.keys(rows[0])).mapeo;
  const datos = {
    periodo: p,
    ventas: N.normalizarMonday(d.monday),
    facturas: N.normalizarCompaq(d.compaq, mapa('compaq', d.compaq)),
    nomina: N.normalizarEsfera(d.esfera, mapa('esfera', d.esfera)),
    movimientos: N.normalizarBancos(d.bancos, mapa('bancos', d.bancos)),
  };
  const { clientes } = asignarClientes(datos);
  const { hallazgos, enlaces } = conciliar({ ...datos, clientes });
  const conEstado = hallazgos.map((h) => {
    const decision = decidirPorReglas(h);
    return { ...h, decision, estado: estadoPorAccion(decision.choice) };
  });
  const externos = {
    tipoCambio: { valor: 18.1259, fecha: `${p}-30`, fuente: 'Frankfurter (ejemplo)' },
    calendario: { diasHabiles: 21, feriados: [{ fecha: `${p}-16`, nombre: 'Día de la Independencia' }], fuente: 'Nager.Date (ejemplo)' },
  };
  const indicadores = calcularIndicadores({ ...datos, enlaces, hallazgos: conEstado, clientes, externos });
  const reporte = hojasReporte({ ...datos, enlaces, hallazgos: conEstado, clientes, indicadores });
  const monday = d.monday.data.boards[0].items_page.items.map((it) => ({ id: it.id, nombre: it.name, ...Object.fromEntries(it.column_values.map((c) => [c.id, c.text])) }));

  const docs = [
    { fuente: 'monday', nombre: `monday_${p}.json`, hojas: [hoja('Oportunidades', monday)], original: { contenido: JSON.stringify(d.monday, null, 2), tipo: 'application/json' } },
    { fuente: 'compaq', nombre: `compaq_facturas_${p}.csv`, hojas: [hoja('Facturas', d.compaq)] },
    { fuente: 'esfera', nombre: `esfera_nomina_${p}.csv`, hojas: [hoja('Nómina', d.esfera)] },
    { fuente: 'bancos', nombre: `banco_estado_cuenta_${p}.csv`, hojas: [hoja('Movimientos', d.bancos)] },
    {
      fuente: 'apis', nombre: 'usd_mxn_y_festivos.json',
      hojas: [hoja('Mercado', [
        { dato: 'Tipo de cambio USD/MXN', valor: externos.tipoCambio.valor, fecha: externos.tipoCambio.fecha, fuente: externos.tipoCambio.fuente },
        { dato: 'Día festivo', valor: 'Día de la Independencia', fecha: `${p}-16`, fuente: externos.calendario.fuente },
        { dato: 'Días hábiles del mes', valor: 21, fecha: p, fuente: 'Calculado' },
      ])],
    },
    { fuente: 'excel', nombre: `reporte_ventas_${p}.xlsx`, hojas: reporte.map((h) => hoja(h.nombre, h.filas)) },
  ];
  return { docs, hallazgos: conEstado };
}

let cache;
export const demo = () => (cache ||= construir());

// Registros por fuente (para la animación y la trazabilidad del modo Demo)
export const demoDocumentos = () =>
  demo().docs.reduce((m, doc) => ((m[doc.fuente] ||= []).push({ name: doc.nombre, records: doc.hojas[0].total }), m), {});

export const demoDoc = (nombre) => demo().docs.find((d) => d.nombre === nombre);

// Hallazgos de la demo que requieren validación humana, con el formato del diálogo
const ARREGLO = {
  monto_distinto: 'Registrar el descuento en Monday para que coincida con la factura',
  pago_no_registrado: 'Marcar la factura como Pagada en Compaq',
  deposito_sin_identificar: 'Asignar el depósito a un cliente o registrarlo como ingreso por identificar',
  nomina_no_cuadra: 'Capturar en Esfera el pago adicional (posible finiquito)',
};
const DOC_DE = { monday: 'monday', compaq: 'compaq', bancos: 'bancos', esfera: 'esfera' };
export const demoHallazgos = () =>
  demo()
    .hallazgos.filter((h) => h.estado === 'en_revision')
    .map((h, i) => ({
      id: `f${i + 1}`,
      title: h.tipo.replace(/_/g, ' ').replace(/^./, (c) => c.toUpperCase()),
      detail: h.descripcion,
      fix: ARREGLO[h.tipo] || 'Revisar con el área responsable',
      doc: demo().docs.find((d) => d.fuente === DOC_DE[h.fuentes.at(-1)])?.nombre || `reporte_ventas_${DEMO_PERIODO}.xlsx`,
    }));
