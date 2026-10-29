// Flujo "Treve · Agente de alertas" (n8n Workflow SDK). Recibe POST /treve-alertas del orquestador
// y guarda una fila por alerta en la Data Table `treve_alertas` (id en dataTableId).
import { workflow, node, trigger, expr } from '@n8n/workflow-sdk';

const webhook = trigger({
  type: 'n8n-nodes-base.webhook',
  version: 2.1,
  config: { name: 'POST /treve-alertas', parameters: { httpMethod: 'POST', path: 'treve-alertas', authentication: 'none', responseMode: 'responseNode', options: {} } },
});

const filas = node({
  type: 'n8n-nodes-base.code',
  version: 2,
  config: {
    name: 'Una fila por alerta',
    parameters: {
      mode: 'runOnceForAllItems',
      jsCode: `const b = $input.first().json.body || {};
const ahora = new Date().toISOString();
const alertas = Array.isArray(b.alertas) && b.alertas.length ? b.alertas : [{ tipo: 'resumen', estado: 'sin alertas', monto: 0, descripcion: 'Ciclo sin alertas' }];
return alertas.slice(0, 50).map((a) => ({ json: {
  corrida: String(b.corrida || ''), periodo: String(b.periodo || ''), escenario: String(b.escenario || 'normal'),
  tipo: String(a.tipo || ''), estado: String(a.estado || ''), monto: Number(a.monto || 0),
  descripcion: String(a.descripcion || '').slice(0, 500), recibida: ahora,
} }));`,
    },
  },
});

const col = (id, type = 'string') => ({ id, displayName: id, required: false, defaultMatch: false, display: true, type, canBeUsedToMatch: true });
const guardar = node({
  type: 'n8n-nodes-base.dataTable',
  version: 1.1,
  config: {
    name: 'Guardar en treve_alertas',
    parameters: {
      resource: 'row',
      operation: 'insert',
      dataTableId: { __rl: true, mode: 'id', value: 'KRR2rAnttZtNwKAi', cachedResultName: 'treve_alertas' },
      columns: { mappingMode: 'autoMapInputData', value: {}, schema: [col('corrida'), col('periodo'), col('escenario'), col('tipo'), col('estado'), col('monto', 'number'), col('descripcion'), col('recibida', 'dateTime')] },
      options: {},
    },
  },
});

const contar = node({
  type: 'n8n-nodes-base.code',
  version: 2,
  config: { name: 'Contar registradas', parameters: { mode: 'runOnceForAllItems', jsCode: 'return [{ json: { ok: true, registradas: $input.all().length } }];' } },
});

const responder = node({
  type: 'n8n-nodes-base.respondToWebhook',
  version: 1.5,
  config: { name: 'Responder OK', parameters: { respondWith: 'json', responseBody: expr('{{ JSON.stringify($json) }}'), options: { responseCode: 200 } } },
});

export default workflow('treve-agente-alertas', 'Treve · Agente de alertas').add(webhook).to(filas).to(guardar).to(contar).to(responder);
