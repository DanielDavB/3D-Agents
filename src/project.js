// Configuración del MVP: oficina digital de Treve (propuesta de AI Lab School).
import { demoDocumentos, demoHallazgos } from './demo-docs.js';
// Todo lo financiero aquí es DATO DE EJEMPLO: no proviene de Treve.

export const PROJECT = {
  client: 'Treve',
  title: 'Oficina digital',
  by: 'AI Lab School',
  period: 'Septiembre 2026',
  context:
    'Proyecto: oficina digital para Treve. Problema: la información está repartida entre Compaq (contabilidad y facturación), ' +
    'Esfera (nómina y empleados), Monday (comercial: prospectos y ventas), estados de cuenta bancarios y archivos Excel que ' +
    'hacen de "traductor" manual entre sistemas, con riesgo de errores, duplicados y fórmulas rotas. Solución en tres capas: ' +
    '(1) extracción y mapeo de fuentes, (2) datos consolidados y curados con una capa de revisión y validación humana en ' +
    'decisiones relevantes, (3) dashboard ejecutivo con salud financiera, eficiencia comercial y de marketing por canal, ' +
    'rentabilidad por cliente, pagos y riesgo de pérdida. Todo con trazabilidad de documentos y control de consumo de tokens.',
};

// ---------- organización (oficinas = capas de la arquitectura) ----------
export function seedState() {
  const offices = [
    { id: 'off_hq', name: 'Centro de mando', parentId: null, color: '#ffffff' },
    { id: 'off_c1', name: 'Capa 1 · Fuentes', parentId: 'off_hq', color: '#e8600c' },
    { id: 'off_c2', name: 'Capa 2 · Datos consolidados', parentId: 'off_hq', color: '#e8600c' },
    { id: 'off_qa', name: 'Revisión y control', parentId: 'off_c2', color: '#b8b8b8' },
    { id: 'off_c3', name: 'Capa 3 · Dashboard ejecutivo', parentId: 'off_hq', color: '#e8600c' },
  ];
  const a = (id, name, role, officeId, provider, config = {}) => ({ id, name, role, officeId, provider, config });
  const agents = [
    a('ag_orq', 'Orquestador', 'Coordina recolección, procesamiento y presentación de la información', 'off_hq', 'claude'),
    a('ag_log', 'Bitácora', 'Registra documentos, resultados, decisiones y consumo de tokens', 'off_hq', 'webhook'),

    a('ag_compaq', 'Agente Compaq', 'Extrae facturación, cuentas por cobrar y contabilidad de Compaq', 'off_c1', 'n8n'),
    a('ag_esfera', 'Agente Esfera', 'Extrae nómina y plantilla de empleados de Esfera', 'off_c1', 'n8n'),
    a('ag_monday', 'Agente Monday', 'Extrae prospectos, oportunidades y ventas de Monday', 'off_c1', 'n8n'),
    a('ag_bancos', 'Agente Bancos', 'Descarga y clasifica estados de cuenta sin captura manual', 'off_c1', 'claude'),
    a('ag_excel', 'Agente Excel', 'Llena el Reporte de ventas en Excel con el formato de Treve', 'off_c1', 'claude'),
    a('ag_ext', 'Agente de mercado', 'Consulta APIs públicas: tipo de cambio USD/MXN y días festivos', 'off_c1', 'webhook'),

    a('ag_norm', 'Normalizador', 'Unifica catálogos de clientes, conceptos y fechas', 'off_c2', 'claude'),
    a('ag_conc', 'Conciliador', 'Cruza ventas ↔ facturas ↔ pagos ↔ bancos', 'off_c2', 'claude'),
    a('ag_db', 'Almacén central', 'Base de datos en la nube con información curada', 'off_c2', 'webhook'),

    a('ag_qa', 'Auditor de calidad', 'Detecta discrepancias, duplicados y fórmulas rotas antes de publicar', 'off_qa', 'claude'),
    a('ag_cambios', 'Control de cambios', 'Permisos, versiones y bitácora de correcciones', 'off_qa', 'webhook'),
    a('ag_alertas', 'Agente de alertas', 'Envía el resumen y las alertas del ciclo por n8n', 'off_qa', 'n8n'),

    a('ag_fin', 'Analista financiero', 'Salud financiera, flujo de efectivo y cuentas por cobrar', 'off_c3', 'claude'),
    a('ag_com', 'Analista comercial', 'Eficiencia comercial y retorno de marketing por canal', 'off_c3', 'claude'),
    a('ag_cli', 'Analista de clientes', 'Rentabilidad por cliente y riesgo de pérdida', 'off_c3', 'claude'),
  ];
  return { project: 'treve-mvp', offices, agents };
}

// ---------- fuentes de datos (se dibujan en 3D junto a su agente) ----------
export const SOURCES = [
  { id: 'compaq', name: 'Compaq', desc: 'Contabilidad y facturación', agentId: 'ag_compaq' },
  { id: 'esfera', name: 'Esfera', desc: 'Nómina y empleados', agentId: 'ag_esfera' },
  { id: 'monday', name: 'Monday', desc: 'Prospectos y ventas', agentId: 'ag_monday' },
  { id: 'bancos', name: 'Bancos', desc: 'Estados de cuenta', agentId: 'ag_bancos' },
  { id: 'excel', name: 'Excel', desc: 'Reporte de ventas generado', agentId: 'ag_excel' },
  { id: 'apis', name: 'APIs públicas', desc: 'Frankfurter (tipo de cambio) y Nager.Date (festivos)', agentId: 'ag_ext' },
];

// Documentos y hallazgos de la demo: generados con el mismo simulador y la misma conciliación
// que el orquestador real (src/demo-docs.js), así cada documento se puede consultar y descargar.
export const DOCUMENTS = demoDocumentos();
export const FINDINGS = demoHallazgos();

// ---------- datos del dashboard (ficticios, MXN) ----------
export const DATA = {
  months: ['Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep'],
  ingresos: [4.2, 4.6, 4.1, 4.9, 5.3, 5.0], // millones
  egresos: [3.6, 3.9, 3.8, 4.1, 4.2, 4.4],
  cxcTotal: 6.8,
  cxcVencida: 1.4, // > 60 días
  channels: [
    { name: 'Referidos', inversion: 120_000, facturacion: 2_100_000 },
    { name: 'LinkedIn', inversion: 260_000, facturacion: 1_300_000 },
    { name: 'Google Ads', inversion: 340_000, facturacion: 900_000 },
    { name: 'Eventos', inversion: 410_000, facturacion: 800_000 },
    { name: 'Meta Ads', inversion: 180_000, facturacion: 300_000 },
  ],
  clients: [
    { name: 'Cliente Alfa', ventas: 1_800_000, margen: 38, dias: 32, riesgo: 'bajo' },
    { name: 'Cliente Beta', ventas: 1_200_000, margen: 22, dias: 58, riesgo: 'medio' },
    { name: 'Cliente Gamma', ventas: 900_000, margen: 41, dias: 30, riesgo: 'bajo' },
    { name: 'Cliente Delta', ventas: 700_000, margen: 12, dias: 87, riesgo: 'alto' },
    { name: 'Cliente Épsilon', ventas: 500_000, margen: 29, dias: 45, riesgo: 'bajo' },
    { name: 'Cliente Zeta', ventas: 400_000, margen: 9, dias: 95, riesgo: 'alto' },
  ],
};

// Conclusiones que entregan los analistas al terminar el ciclo (ficticias)
export const CONCLUSIONS = {
  ag_fin: 'Flujo neto de septiembre: +$0.6M, el más bajo del semestre: los egresos crecieron 4.8% mientras los ingresos cayeron 5.7%. Cuentas por cobrar vencidas a más de 60 días: $1.4M (21% del total).',
  ag_com: 'Referidos factura $17.5 por cada peso invertido y Meta Ads solo $1.7. Recomendación: mover 30% del presupuesto de Meta Ads a LinkedIn y a un programa de referidos.',
  ag_cli: 'Dos clientes en riesgo alto (Delta y Zeta): margen menor a 15% y más de 85 días de pago. Juntos suman $1.1M en ventas: conviene renegociar condiciones antes de ampliar crédito.',
};

// Tareas para el tráfico de ambiente (modo Auto), por palabra clave de la oficina
export const AMBIENT_TASKS = {
  fuentes: ['Revisa si hay archivos nuevos', 'Valida el formato de la plantilla', 'Sincroniza los cambios del día'],
  consolidados: ['Actualiza el catálogo de clientes', 'Recalcula saldos conciliados', 'Respaldo incremental del almacén'],
  revisión: ['Revisa duplicados del día', 'Verifica permisos de edición', 'Compara totales contra Compaq'],
  dashboard: ['Refresca indicadores', 'Prepara alerta de cobranza', 'Actualiza ROI por canal'],
  mando: ['Verifica el estado de los agentes', 'Registra consumo de tokens', 'Programa el siguiente ciclo'],
};
