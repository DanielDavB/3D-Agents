// Cliente del orquestador real (Supabase Edge Function `treve`).
// La URL se puede cambiar con ?backend=<url> (se recuerda en este navegador).

const DEFAULT_URL = 'https://lpwohzbminesrjjnjdqi.supabase.co/functions/v1/treve';
const KEY = '3d-agents:backend-url';

function resolveUrl() {
  try {
    const q = new URLSearchParams(location.search).get('backend');
    if (q) localStorage.setItem(KEY, q);
    return q || localStorage.getItem(KEY) || DEFAULT_URL;
  } catch {
    return DEFAULT_URL;
  }
}

export const BACKEND_URL = resolveUrl();

async function call(params, body, timeoutMs = 20000) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    const url = `${BACKEND_URL}?${new URLSearchParams(params)}`;
    const res = await fetch(url, body ? { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body), signal: ctrl.signal } : { signal: ctrl.signal });
    const json = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(json.error || `el orquestador respondió ${res.status}`);
    return json;
  } finally {
    clearTimeout(t);
  }
}

export const backend = {
  url: BACKEND_URL,
  salud: () => call({ accion: 'salud' }, null, 8000),
  iniciar: (opciones) => call({}, { accion: 'iniciar', ...opciones }),
  estado: (corrida, desde = 0, archivos = false) => call({ accion: 'estado', corrida, desde, archivos: archivos ? 1 : 0 }),
  resolver: (hallazgo, decision, nota = '') => call({}, { accion: 'resolver', hallazgo, decision, nota }),
  corridas: () => call({ accion: 'corridas' }),
};
