// Cerebro real: el Orquestador usa Claude (por defecto Haiku 4.5, el modelo más barato)
// con tool use. Cada agente de la organización es una herramienta a la que puede delegar,
// y además puede llamar a cualquier API con la herramienta http_request.
import Anthropic from '@anthropic-ai/sdk';

const SETTINGS_KEY = '3d-agents:brain';

export const BRAIN_MODELS = {
  'claude-haiku-4-5': { label: 'Claude Haiku 4.5 · el más barato', input: 1, output: 5 },
  'claude-sonnet-5-5': { label: 'Claude Sonnet 5.5 · más capaz', input: 2, output: 10 },
};
export const DEFAULT_MODEL = 'claude-haiku-4-5';

export function loadSettings() {
  try {
    return { model: DEFAULT_MODEL, maxSteps: 8, ...JSON.parse(localStorage.getItem(SETTINGS_KEY) || '{}') };
  } catch {
    return { model: DEFAULT_MODEL, maxSteps: 8 };
  }
}
export function saveSettings(s) {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(s));
  } catch {
    /* ignorado */
  }
}

export function cost(model, usage) {
  const p = BRAIN_MODELS[model] || BRAIN_MODELS[DEFAULT_MODEL];
  return ((usage.input_tokens || 0) * p.input + (usage.output_tokens || 0) * p.output) / 1e6;
}

const clip = (s, n = 6000) => (s.length > n ? `${s.slice(0, n)}\n…[recortado, ${s.length} caracteres]` : s);

// ---------- HTTP (directo o vía proxy CORS) ----------
// Muchas APIs no permiten llamadas desde el navegador (CORS). Si configuras un proxy
// (ver carpeta proxy/), la petición se reenvía a través de él.
export async function httpRequest(settings, { method = 'GET', url, headers = {}, body }) {
  if (!/^https?:\/\//i.test(url || '')) throw new Error('URL inválida (debe empezar con http:// o https://)');
  const payload = body == null || typeof body === 'string' ? body : JSON.stringify(body);
  if (payload && !Object.keys(headers).some((h) => h.toLowerCase() === 'content-type')) headers['content-type'] = 'application/json';
  let status;
  let text;
  if (settings.proxyUrl) {
    const res = await fetch(settings.proxyUrl, {
      method: 'POST',
      headers: { 'content-type': 'application/json', ...(settings.proxyToken ? { 'x-proxy-token': settings.proxyToken } : {}) },
      body: JSON.stringify({ method, url, headers, body: payload }),
    });
    if (!res.ok) throw new Error(`Proxy HTTP ${res.status}: ${(await res.text()).slice(0, 200)}`);
    ({ status, body: text } = await res.json());
  } else {
    let res;
    try {
      res = await fetch(url, { method, headers, body: ['GET', 'HEAD'].includes(method.toUpperCase()) ? undefined : payload });
    } catch (err) {
      throw new Error(`${err.message}. Si es un bloqueo CORS, configura el proxy en ⚙ Cerebro.`);
    }
    status = res.status;
    text = await res.text();
  }
  return { status, body: text };
}

const HTTP_TOOL = {
  name: 'http_request',
  description:
    'Hace una petición HTTP a cualquier API pública o privada y devuelve el código de estado y el cuerpo de la respuesta. ' +
    'Úsala para consultar datos reales (clima, precios, CRMs, webhooks, etc.). Para POST/PUT envía body como texto JSON.',
  input_schema: {
    type: 'object',
    properties: {
      method: { type: 'string', enum: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'] },
      url: { type: 'string', description: 'URL completa, con parámetros de consulta si hacen falta' },
      headers: { type: 'object', description: 'Cabeceras opcionales', additionalProperties: { type: 'string' } },
      body: { type: 'string', description: 'Cuerpo opcional (normalmente JSON serializado)' },
    },
    required: ['method', 'url'],
  },
};

const agentToolName = (agent) => `delegar_${agent.id}`.replace(/[^a-zA-Z0-9_-]/g, '_').slice(0, 64);

function fillTemplate(tpl, vars) {
  return tpl.replace(/\{\{\s*(\w+)\s*\}\}/g, (_, k) => {
    const v = vars[k] ?? '';
    return JSON.stringify(String(v)).slice(1, -1); // escapado seguro dentro de un JSON
  });
}

function parseJson(text, fallback = {}) {
  if (!text) return fallback;
  try {
    return JSON.parse(text);
  } catch {
    throw new Error('Las cabeceras deben ser JSON válido, p. ej. {"Authorization": "Bearer ..."}');
  }
}

export function createBrain({ store, world, log, bump, onUsage }) {
  let settings = loadSettings();
  let busy = false;
  const history = []; // pares objetivo/respuesta (solo texto) para dar contexto entre peticiones

  const client = (apiKey) => new Anthropic({ apiKey, dangerouslyAllowBrowser: true });

  // Un pedido a Claude + contabilidad de costo
  async function callClaude(apiKey, params) {
    const res = await client(apiKey).messages.create(params);
    onUsage?.(cost(params.model, res.usage), res.usage);
    if (res.stop_reason === 'refusal') throw new Error('El modelo rechazó la petición.');
    return res;
  }

  // Bucle de herramientas genérico (lo usan el cerebro y los agentes tipo Claude)
  async function toolLoop({ apiKey, model, system, messages, tools, runTool, maxSteps, onText }) {
    for (let step = 0; step < maxSteps; step++) {
      const res = await callClaude(apiKey, { model, max_tokens: 4096, system, tools, messages });
      const text = res.content.filter((b) => b.type === 'text').map((b) => b.text).join('\n').trim();
      if (text) onText?.(text, res.stop_reason);
      if (res.stop_reason !== 'tool_use') return text || '(sin respuesta)';
      messages.push({ role: 'assistant', content: res.content });
      const calls = res.content.filter((b) => b.type === 'tool_use');
      // Las llamadas en paralelo se ejecutan juntas y se devuelven en un solo mensaje
      const results = await Promise.all(
        calls.map(async (c) => {
          try {
            return { type: 'tool_result', tool_use_id: c.id, content: clip(String(await runTool(c.name, c.input))) };
          } catch (err) {
            return { type: 'tool_result', tool_use_id: c.id, content: `Error: ${err.message}`, is_error: true };
          }
        }),
      );
      messages.push({ role: 'user', content: results });
    }
    return 'Me detuve: alcancé el máximo de pasos permitido.';
  }

  // Petición HTTP animada: el paquete viaja del agente al nodo "APIs externas" y vuelve
  function animatedHttp(fromId, input) {
    const who = store.agent(fromId)?.name || 'Tú';
    log({ kind: 'http', from: who, to: 'API', text: `${input.method || 'GET'} ${input.url}` });
    return new Promise((resolve, reject) => {
      world.sendPacket(fromId, 'external', {
        color: '#e8600c',
        onArrive: async () => {
          try {
            const headers = typeof input.headers === 'object' && input.headers ? { ...input.headers } : {};
            const r = await httpRequest(settings, { method: input.method, url: input.url, headers, body: input.body });
            log({ kind: 'http-reply', from: 'API', to: who, text: `HTTP ${r.status} · ${r.body.slice(0, 160)}` });
            world.sendPacket('external', fromId, { color: '#ffffff', size: 0.28 });
            resolve(`HTTP ${r.status}\n${r.body}`);
          } catch (err) {
            log({ kind: 'error', from: 'API', to: who, text: err.message });
            world.sendPacket('external', fromId, { color: '#ff5c5c', size: 0.28 });
            reject(err);
          }
        },
      });
    });
  }

  // Ejecuta el trabajo real de un agente según su conector
  async function execAgent(agent, instruction, fromName) {
    const c = agent.config || {};
    const office = store.office(agent.officeId)?.name || '';
    const llmSystem =
      (c.system || `Eres "${agent.name}", ${agent.role || 'un agente'} en el departamento ${office}.`) +
      ' Responde en español, breve y concreto. Si necesitas datos reales usa http_request.';

    if (agent.provider === 'claude') {
      return toolLoop({
        apiKey: c.apiKey || settings.apiKey,
        model: c.model || settings.model,
        system: llmSystem,
        messages: [{ role: 'user', content: `${fromName} te pide: ${instruction}` }],
        tools: [HTTP_TOOL],
        runTool: (name, input) => animatedHttp(agent.id, input),
        maxSteps: 4,
      });
    }

    const endpoint = c.url || (agent.provider === 'openai' && c.apiKey);
    if (!endpoint) {
      // Sin endpoint configurado: la IA interpreta el rol del agente (marcado como simulado)
      const text = await toolLoop({
        apiKey: settings.apiKey,
        model: settings.model,
        system: `${llmSystem} No tienes conexión real configurada: simula de forma realista lo que haría esta automatización (${agent.provider}) y termina con una línea "Resultado:".`,
        messages: [{ role: 'user', content: `${fromName} te pide: ${instruction}` }],
        tools: [HTTP_TOOL],
        runTool: (name, input) => animatedHttp(agent.id, input),
        maxSteps: 3,
      });
      return `[simulado por IA: el agente no tiene endpoint configurado]\n${text}`;
    }

    if (agent.provider === 'openai') {
      const r = await httpRequest(settings, {
        method: 'POST',
        url: 'https://api.openai.com/v1/chat/completions',
        headers: { authorization: `Bearer ${c.apiKey}` },
        body: { model: c.model || 'gpt-4o-mini', messages: [{ role: 'system', content: llmSystem }, { role: 'user', content: instruction }] },
      });
      try {
        return JSON.parse(r.body).choices[0].message.content;
      } catch {
        return `HTTP ${r.status}\n${r.body}`;
      }
    }

    // n8n / Make / Zapier / API genérica
    const vars = { input: instruction, from: fromName, agent: agent.name };
    const headers = parseJson(c.headers);
    if (c.token) headers.authorization = c.token;
    const method = (c.method || 'POST').toUpperCase();
    let url = c.url;
    let body;
    if (method === 'GET') {
      url = fillTemplate(url, Object.fromEntries(Object.entries(vars).map(([k, v]) => [k, encodeURIComponent(v)])));
    } else {
      body = c.body
        ? fillTemplate(c.body, vars)
        : { agent: { id: agent.id, name: agent.name, role: agent.role }, from: fromName, text: instruction, sentAt: new Date().toISOString() };
    }
    const r = await httpRequest(settings, { method, url, headers, body });
    if (r.status >= 400) throw new Error(`HTTP ${r.status}: ${r.body.slice(0, 300)}`);
    return r.body || `HTTP ${r.status} (sin contenido)`;
  }

  // Delegación animada de from → agente, con respuesta de vuelta
  function delegate(fromId, agent, instruction) {
    const fromName = store.agent(fromId)?.name || 'Tú';
    log({ kind: 'task', from: fromName, to: agent.name, text: instruction });
    bump(fromId, 'sent');
    return new Promise((resolve, reject) => {
      world.sendPacket(fromId, agent.id, {
        color: '#e8600c',
        onArrive: async () => {
          bump(agent.id, 'received');
          world.setWorking(agent.id, true);
          try {
            const out = await execAgent(agent, instruction, fromName);
            bump(agent.id, 'sent');
            log({ kind: 'live', from: agent.name, to: fromName, text: out.slice(0, 600) });
            world.sendPacket(agent.id, fromId, { color: '#ffffff', size: 0.28 });
            resolve(out);
          } catch (err) {
            log({ kind: 'error', from: agent.name, to: fromName, text: err.message });
            world.sendPacket(agent.id, fromId, { color: '#ff5c5c', size: 0.28 });
            reject(err);
          } finally {
            world.setWorking(agent.id, false);
          }
        },
      });
    });
  }

  function orgChart() {
    const lines = [];
    const walk = (o, depth) => {
      lines.push(`${'  '.repeat(depth)}- Oficina "${o.name}"`);
      for (const a of store.agentsIn(o.id)) lines.push(`${'  '.repeat(depth + 1)}· ${a.name} (${a.provider}): ${a.role || 'sin rol'}`);
      store.children(o.id).forEach((k) => walk(k, depth + 1));
    };
    walk(store.rootOffice(), 0);
    return lines.join('\n');
  }

  function brainAgent() {
    return store.agentsIn(store.rootOffice().id)[0] || null;
  }

  // Punto de entrada: el usuario le da un objetivo al cerebro
  async function run(goal) {
    if (!settings.apiKey) throw new Error('Configura tu API key de Anthropic en ⚙ Cerebro.');
    if (busy) throw new Error('El cerebro ya está trabajando en otra tarea.');
    busy = true;
    const boss = brainAgent();
    const bossId = boss?.id || 'user';
    const team = store.get().agents.filter((a) => a.id !== boss?.id);
    const byTool = new Map(team.map((a) => [agentToolName(a), a]));
    const tools = [
      ...team.map((a) => ({
        name: agentToolName(a),
        description: `Delegar a ${a.name} (${store.office(a.officeId)?.name}, conector ${a.provider}): ${a.role || 'agente'}. Devuelve su respuesta.`,
        input_schema: {
          type: 'object',
          properties: { instruccion: { type: 'string', description: 'Qué debe hacer, con todo el contexto necesario' } },
          required: ['instruccion'],
        },
      })),
      HTTP_TOOL,
    ];
    const system =
      `Eres ${boss?.name || 'el Orquestador'}, el cerebro de una organización de agentes de automatización. ` +
      'Tu trabajo es cumplir el objetivo del usuario delegando en los agentes adecuados (puedes llamar a varios en paralelo) ' +
      'y usando http_request cuando necesites datos de una API. Delegar cuesta dinero: usa solo los agentes necesarios. ' +
      'Cuando termines, responde al usuario en español con un resumen claro del resultado.\n\nOrganigrama:\n' +
      orgChart();

    log({ kind: 'task', from: 'Tú', to: boss?.name || 'Cerebro', text: goal });
    if (boss) await new Promise((r) => world.sendPacket('user', boss.id, { color: '#ffffff', onArrive: r }));
    world.setWorking(bossId, true);
    try {
      const messages = [...history.slice(-6), { role: 'user', content: goal }];
      const answer = await toolLoop({
        apiKey: settings.apiKey,
        model: settings.model,
        system,
        messages,
        tools,
        maxSteps: settings.maxSteps || 8,
        onText: (text, stop) => stop === 'tool_use' && log({ kind: 'brain', from: boss?.name || 'Cerebro', to: 'plan', text }),
        runTool: (name, input) => {
          if (name === 'http_request') return animatedHttp(bossId, input);
          const agent = byTool.get(name);
          if (!agent) throw new Error(`Agente desconocido: ${name}`);
          return delegate(bossId, agent, input.instruccion);
        },
      });
      history.push({ role: 'user', content: goal }, { role: 'assistant', content: answer });
      log({ kind: 'final', from: boss?.name || 'Cerebro', to: 'Tú', text: answer });
      if (boss) world.sendPacket(boss.id, 'user', { color: '#ffffff' });
      return answer;
    } finally {
      world.setWorking(bossId, false);
      busy = false;
    }
  }

  // Envío directo a un agente desde su panel (sin pasar por el cerebro)
  function direct(agent, instruction) {
    if (!settings.apiKey && !agent.config?.url && !agent.config?.apiKey) {
      throw new Error('Configura tu API key en ⚙ Cerebro o un endpoint en el agente.');
    }
    return delegate('user', agent, instruction);
  }

  return {
    run,
    direct,
    isBusy: () => busy,
    isReady: () => !!settings.apiKey,
    settings: () => settings,
    setSettings(s) {
      settings = { ...settings, ...s };
      saveSettings(settings);
    },
    clearHistory: () => history.splice(0),
  };
}
