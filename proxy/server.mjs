// Proxy CORS local (Node 18+), mismo contrato que proxy/worker.js.
//   PROXY_TOKEN=secreto node proxy/server.mjs      → http://localhost:8787
// En ⚙ Cerebro pon Proxy CORS = http://localhost:8787 y el token.
import http from 'node:http';
import worker from './worker.js';

const port = Number(process.env.PORT || 8787);
const env = { PROXY_TOKEN: process.env.PROXY_TOKEN };

http
  .createServer(async (req, res) => {
    const chunks = [];
    for await (const c of req) chunks.push(c);
    const request = new Request(`http://localhost${req.url}`, {
      method: req.method,
      headers: req.headers,
      body: ['GET', 'HEAD'].includes(req.method) ? undefined : Buffer.concat(chunks),
    });
    const out = await worker.fetch(request, env).catch((err) => new Response(JSON.stringify({ error: err.message }), { status: 502 }));
    res.writeHead(out.status, Object.fromEntries(out.headers));
    res.end(Buffer.from(await out.arrayBuffer()));
  })
  .listen(port, () => console.log(`Proxy CORS escuchando en http://localhost:${port}`));
