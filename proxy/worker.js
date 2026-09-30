// Proxy CORS para 3D Agents (Cloudflare Workers, plan gratuito).
// Recibe POST { method, url, headers, body } y devuelve { status, headers, body }.
//
// Despliegue:
//   npx wrangler deploy proxy/worker.js --name agents-proxy --compatibility-date 2026-09-01
//   npx wrangler secret put PROXY_TOKEN --name agents-proxy   (recomendado)
// Luego pega la URL *.workers.dev en ⚙ Cerebro → Proxy CORS, con el mismo token.

const CORS = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'POST, OPTIONS',
  'access-control-allow-headers': 'content-type, x-proxy-token',
};

const json = (data, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { 'content-type': 'application/json', ...CORS } });

export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') return new Response(null, { headers: CORS });
    if (request.method !== 'POST') return json({ error: 'Usa POST' }, 405);
    if (env.PROXY_TOKEN && request.headers.get('x-proxy-token') !== env.PROXY_TOKEN) {
      return json({ error: 'Token de proxy inválido' }, 401);
    }
    let req;
    try {
      req = await request.json();
    } catch {
      return json({ error: 'JSON inválido' }, 400);
    }
    let target;
    try {
      target = new URL(req.url);
    } catch {
      return json({ error: 'URL inválida' }, 400);
    }
    if (!['http:', 'https:'].includes(target.protocol)) return json({ error: 'Solo http/https' }, 400);

    const method = (req.method || 'GET').toUpperCase();
    const res = await fetch(target, {
      method,
      headers: req.headers || {},
      body: ['GET', 'HEAD'].includes(method) ? undefined : req.body,
      redirect: 'follow',
    });
    const text = await res.text();
    return json({ status: res.status, headers: Object.fromEntries(res.headers), body: text.slice(0, 200_000) });
  },
};
