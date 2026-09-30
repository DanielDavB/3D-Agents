// Catálogo de conectores. Cada proveedor define:
//  - label / short / color: cómo se ve en la escena y en la UI (paleta de marca)
//  - fields: campos de configuración que pide el formulario del agente
// La ejecución real está en src/brain.js (execAgent).

const HTTP_FIELDS = (urlLabel, placeholder) => [
  { key: 'url', label: urlLabel, type: 'text', placeholder },
  { key: 'method', label: 'Método', type: 'select', options: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'], default: 'POST' },
  { key: 'headers', label: 'Cabeceras (JSON, opcional)', type: 'textarea', placeholder: '{"Authorization": "Bearer ..."}' },
  {
    key: 'body',
    label: 'Cuerpo (opcional). Usa {{input}}, {{from}}, {{agent}}',
    type: 'textarea',
    placeholder: '{"mensaje": "{{input}}"}  — vacío = JSON estándar con agent/from/text',
  },
];

export const PROVIDERS = {
  claude: {
    label: 'Claude API',
    short: 'Claude',
    color: '#e8600c',
    fields: [
      { key: 'model', label: 'Modelo', type: 'select', options: ['claude-haiku-4-5', 'claude-sonnet-5-5'], default: 'claude-haiku-4-5' },
      { key: 'system', label: 'Instrucciones del agente (system prompt)', type: 'textarea', placeholder: 'Eres el agente de marketing. Escribes copies cortos y directos…' },
      { key: 'apiKey', label: 'API key propia (opcional: si no, usa la del cerebro)', type: 'password', placeholder: 'sk-ant-...' },
    ],
  },
  n8n: {
    label: 'n8n (webhook)',
    short: 'n8n',
    color: '#ffffff',
    fields: HTTP_FIELDS('URL del Webhook de n8n', 'https://tu-n8n.com/webhook/...'),
  },
  make: {
    label: 'Make (webhook)',
    short: 'Make',
    color: '#b8b8b8',
    fields: HTTP_FIELDS('URL del Webhook', 'https://hook.make.com/...'),
  },
  zapier: {
    label: 'Zapier (webhook)',
    short: 'Zapier',
    color: '#fde8dc',
    fields: HTTP_FIELDS('URL del Catch Hook', 'https://hooks.zapier.com/...'),
  },
  openai: {
    label: 'OpenAI API',
    short: 'OpenAI',
    color: '#757575',
    fields: [
      { key: 'apiKey', label: 'API key', type: 'password', placeholder: 'sk-...' },
      { key: 'model', label: 'Modelo', type: 'text', placeholder: 'gpt-4o-mini' },
      { key: 'system', label: 'Instrucciones del agente', type: 'textarea', placeholder: '' },
    ],
  },
  webhook: {
    label: 'HTTP / API genérica',
    short: 'API',
    color: '#ff9a52',
    fields: HTTP_FIELDS('Endpoint', 'https://api.midominio.com/agent  (en GET puedes usar ?q={{input}})'),
  },
};

export function provider(id) {
  return PROVIDERS[id] || PROVIDERS.webhook;
}

// ¿Tiene una conexión real propia? (si no, la IA simula su rol)
export function isConnected(agent) {
  const c = agent.config || {};
  if (agent.provider === 'claude') return true;
  if (agent.provider === 'openai') return !!c.apiKey;
  return !!c.url;
}
