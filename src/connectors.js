// Catálogo de conectores. Cada proveedor define:
//  - label / color: cómo se ve en la escena y en la UI
//  - fields: campos de configuración que pide el formulario del agente
//  - send(agent, message): llamada real (solo se usa si el agente tiene "live" activado)
//
// En modo demo nunca se llama a send(); la simulación genera respuestas falsas.

async function postJson(url, body, headers = {}) {
  if (!url) throw new Error('Falta la URL del endpoint');
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'content-type': 'application/json', ...headers },
    body: JSON.stringify(body),
  });
  const text = await res.text();
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${text.slice(0, 200)}`);
  try {
    const json = JSON.parse(text);
    return typeof json === 'string' ? json : JSON.stringify(json);
  } catch {
    return text;
  }
}

function webhookPayload(agent, message) {
  return {
    agent: { id: agent.id, name: agent.name, role: agent.role },
    from: message.from,
    text: message.text,
    sentAt: new Date().toISOString(),
  };
}

export const PROVIDERS = {
  claude: {
    label: 'Claude API',
    short: 'Claude',
    color: '#d97757',
    fields: [
      { key: 'apiKey', label: 'API key de Anthropic', type: 'password', placeholder: 'sk-ant-...' },
      { key: 'model', label: 'Modelo', type: 'text', placeholder: 'claude-sonnet-5', default: 'claude-sonnet-5' },
      { key: 'system', label: 'System prompt', type: 'textarea', placeholder: 'Eres el agente de marketing...' },
    ],
    async send(agent, message) {
      const { apiKey, model, system } = agent.config;
      if (!apiKey) throw new Error('Falta la API key');
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01',
          'anthropic-dangerous-direct-browser-access': 'true',
        },
        body: JSON.stringify({
          model: model || 'claude-sonnet-5',
          max_tokens: 512,
          system: system || `Eres "${agent.name}", ${agent.role}. Responde breve.`,
          messages: [{ role: 'user', content: message.text }],
        }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json?.error?.message || `HTTP ${res.status}`);
      return json.content.filter((b) => b.type === 'text').map((b) => b.text).join('\n');
    },
  },
  n8n: {
    label: 'n8n (webhook)',
    short: 'n8n',
    color: '#ea4b71',
    fields: [
      { key: 'url', label: 'URL del Webhook', type: 'text', placeholder: 'https://tu-n8n.com/webhook/...' },
      { key: 'token', label: 'Header Authorization (opcional)', type: 'password', placeholder: 'Bearer ...' },
    ],
    send(agent, message) {
      const { url, token } = agent.config;
      return postJson(url, webhookPayload(agent, message), token ? { authorization: token } : {});
    },
  },
  make: {
    label: 'Make (webhook)',
    short: 'Make',
    color: '#a259ff',
    fields: [{ key: 'url', label: 'URL del Webhook', type: 'text', placeholder: 'https://hook.make.com/...' }],
    send(agent, message) {
      return postJson(agent.config.url, webhookPayload(agent, message));
    },
  },
  zapier: {
    label: 'Zapier (webhook)',
    short: 'Zapier',
    color: '#ff6a1f',
    fields: [{ key: 'url', label: 'URL del Catch Hook', type: 'text', placeholder: 'https://hooks.zapier.com/...' }],
    send(agent, message) {
      return postJson(agent.config.url, webhookPayload(agent, message));
    },
  },
  openai: {
    label: 'OpenAI API',
    short: 'OpenAI',
    color: '#10a37f',
    fields: [
      { key: 'apiKey', label: 'API key', type: 'password', placeholder: 'sk-...' },
      { key: 'model', label: 'Modelo', type: 'text', placeholder: 'gpt-4o-mini' },
    ],
    async send(agent, message) {
      const { apiKey, model } = agent.config;
      if (!apiKey) throw new Error('Falta la API key');
      const out = await postJson(
        'https://api.openai.com/v1/chat/completions',
        { model: model || 'gpt-4o-mini', messages: [{ role: 'user', content: message.text }] },
        { authorization: `Bearer ${apiKey}` },
      );
      try {
        return JSON.parse(out).choices[0].message.content;
      } catch {
        return out;
      }
    },
  },
  webhook: {
    label: 'HTTP / API genérica',
    short: 'API',
    color: '#3fa9f5',
    fields: [
      { key: 'url', label: 'Endpoint (POST)', type: 'text', placeholder: 'https://api.midominio.com/agent' },
      { key: 'token', label: 'Header Authorization (opcional)', type: 'password', placeholder: 'Bearer ...' },
    ],
    send(agent, message) {
      const { url, token } = agent.config;
      return postJson(url, webhookPayload(agent, message), token ? { authorization: token } : {});
    },
  },
};

export function provider(id) {
  return PROVIDERS[id] || PROVIDERS.webhook;
}

export function canCallLive(agent) {
  const p = provider(agent.provider);
  const c = agent.config || {};
  if (agent.provider === 'claude' || agent.provider === 'openai') return !!c.apiKey;
  return !!c.url && !!p;
}
