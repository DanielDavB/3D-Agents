# 3D Agents · Oficina de automatizaciones

Visualizador 3D de agentes de automatización que trabajan de verdad. Hay una **Oficina Principal** de la que salen
otras oficinas (Project Manager, Marketing, Ventas, Soporte, Desarrollo…). Cada oficina tiene agentes
conectados a distintos proveedores (Claude API, n8n, Make, Zapier, OpenAI o una API HTTP genérica), y
sus mensajes se ven como paquetes de luz que viajan entre ellos.

> Con una API key de Anthropic, el Orquestador funciona como **cerebro** (Claude Haiku 4.5 por defecto):
> entiende tu objetivo, delega en los agentes y llama a cualquier API. Sin key, funciona en modo demo
> con tráfico simulado. Ver "Cerebro con IA".

## Ejecutar

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # genera dist/ estático (se puede subir a Netlify, Vercel, GitHub Pages…)
```

**Demo en vivo:** https://danieldavb.github.io/3D-Agents/

Cada push a la rama principal vuelve a publicar el sitio (workflow `.github/workflows/pages.yml`, que
compila con Vite y sube `dist/` a la rama `gh-pages`).

## Qué puedes hacer

- **Ver la organización en 3D**: arrastra para rotar, rueda para hacer zoom, clic en una oficina o agente para enfocarlo.
- **Crear oficinas** (`+ Oficina`): nombre, color y de qué oficina dependen. Se pueden anidar (ej. *Redes Sociales* dentro de *Marketing*).
- **Crear agentes** (`+ Agente`): nombre, rol, oficina y conector, con sus campos (API key, modelo, URL de webhook…).
- **Ver cómo se comunican**:
  - `Auto`: tráfico aleatorio entre agentes (jefe → equipo, compañeros, reportes hacia arriba).
  - `Flujo: lanzamiento`: tú le das una orden al orquestador, él la reparte a cada departamento y cada líder a su equipo; las respuestas regresan.
  - `Reporte semanal`: todos los agentes reportan a la Oficina Principal y ésta te envía el resumen.
  - Desde el panel de un agente puedes enviarle una instrucción propia.
- **Exportar / importar** la organización como JSON (menú `⋯`). Todo se guarda automáticamente en el navegador.

Los mensajes entre oficinas viajan por la jerarquía: agente → hub de su oficina → hubs intermedios → hub destino → agente.

## Cerebro con IA (funcionamiento real)

El agente **Orquestador** de la Oficina Principal es el cerebro. Usa Claude con *tool use*:
cada agente de la organización es una herramienta a la que puede delegar, y además tiene
`http_request` para llamar a **cualquier API**. Todo lo que hace se ve en 3D: paquetes naranjas
(tareas) hacia los agentes, blancos (respuestas) de vuelta, y viajes al globo **APIs externas**
en cada petición HTTP.

1. Pulsa **⚙ Cerebro** y pega tu API key de Anthropic ([console.anthropic.com](https://console.anthropic.com)).
2. Elige el modelo: **Claude Haiku 4.5** (por defecto, el más barato: $1 / $5 por millón de tokens
   de entrada / salida) o Claude Sonnet 5.5 si necesitas más capacidad.
3. Escribe un objetivo en la barra inferior, p. ej. *"Consulta el clima de CDMX en
   https://wttr.in/CDMX?format=j1 y pide a Marketing un post con esos datos"*.

La barra muestra el gasto acumulado de la sesión. Una tarea típica con Haiku cuesta menos de un centavo de dólar.

### Qué hace cada tipo de agente

| Conector | Con configuración | Sin configuración |
|---|---|---|
| Claude API | Llama a Claude con su rol (system prompt) y puede usar `http_request`. Usa la key del cerebro si no tiene una propia. | — (siempre funciona con la key del cerebro) |
| n8n / Make / Zapier / API | Petición real a su URL: método, cabeceras JSON y cuerpo con plantillas `{{input}}`, `{{from}}`, `{{agent}}`. Si el cuerpo va vacío envía `{ agent, from, text, sentAt }`. | La IA simula su rol y la respuesta se marca `[simulado por IA]`. |
| OpenAI API | Llama a `chat/completions` con su key. | Igual: simulado por IA. |

También puedes escribirle directo a un agente desde su panel (**Enviar como "Tú"**).
Sin API key, la app sigue funcionando en modo demo con tráfico simulado.

### Proxy CORS (para APIs que bloquean el navegador)

La app corre 100 % en el navegador (GitHub Pages), así que las APIs sin CORS (y muchos webhooks)
fallan si se llaman directo. La carpeta `proxy/` trae un proxy mínimo:

```bash
# Cloudflare Workers (gratis)
npx wrangler deploy proxy/worker.js --name agents-proxy --compatibility-date 2026-09-01
npx wrangler secret put PROXY_TOKEN --name agents-proxy

# o en local
PROXY_TOKEN=secreto node proxy/server.mjs   # http://localhost:8787
```

Pega la URL y el token en **⚙ Cerebro → Proxy CORS**. Protege siempre el proxy con `PROXY_TOKEN`: sin él, cualquiera podría usarlo.
La API de Anthropic no necesita proxy.

### Seguridad

- Las keys se guardan en `localStorage` de tu navegador y viajan directo a Anthropic / a tus APIs. No se suben al repositorio.
- Usa una API key con **límite de gasto** configurado en la consola de Anthropic.
- El cerebro puede llamar cualquier URL que decida: no le des cabeceras con credenciales sensibles que no quieras que use.
- Si vas a compartir la app con otras personas, mueve las keys a un backend (por ejemplo, el mismo worker) en lugar del navegador.

## Identidad visual

Paleta "moderno naranja": negro `#0D0D0D` como base, naranja `#E8600C` como acento (tareas en vuelo,
oficinas departamentales, botones principales) y blanco `#FFFFFF` (Oficina Principal, respuestas).
Tipografía Calibri (con Carlito como alternativa web), badges tipo píldora y círculos naranjas translúcidos
en las esquinas. Los tokens están al inicio de `src/style.css`; los colores de oficinas en `OFFICE_COLORS`
(`src/state.js`) y los de cada conector en `src/connectors.js`.

## Estructura

```
index.html          UI (barra superior, paneles, diálogos)
src/main.js         Conecta estado, escena, simulación y UI
src/state.js        Oficinas + agentes, datos de ejemplo, persistencia
src/world.js        Escena Three.js: oficinas, agentes, corredores, paquetes, cámara
src/brain.js        Cerebro: bucle de tool use con Claude, delegación, http_request y costo
src/sim.js          Simulación de conversaciones (modo demo)
src/connectors.js   Catálogo de proveedores y sus campos
proxy/              Proxy CORS (Cloudflare Worker + versión Node)
src/style.css       Estilos
```

Para añadir un proveedor nuevo, agrega una entrada en `PROVIDERS` (`src/connectors.js`) con `label`, `color`
y `fields`, y su ejecución en `execAgent` (`src/brain.js`).

## Siguientes pasos posibles

- Backend (Node/Supabase) que reciba eventos reales de n8n/Claude por webhook y los emita a la escena por WebSocket.
- Flujos definidos por el usuario (quién delega a quién) en lugar de escenarios fijos.
- Métricas por agente (latencia, costo, errores) y avatares/modelos 3D personalizados.
