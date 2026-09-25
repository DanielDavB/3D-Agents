# 3D Agents · Oficina de automatizaciones

Demo de un visualizador 3D de agentes de automatización. Hay una **Oficina Principal** de la que salen
otras oficinas (Project Manager, Marketing, Ventas, Soporte, Desarrollo…). Cada oficina tiene agentes
conectados a distintos proveedores (Claude API, n8n, Make, Zapier, OpenAI o una API HTTP genérica), y
sus mensajes se ven como paquetes de luz que viajan entre ellos.

> Es una **demo**: por defecto todas las conversaciones son simuladas. Hay una base preparada
> para hacer llamadas reales (ver "Modo real").

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

## Modo real (opcional)

Al editar un agente, activa **Modo real**. Cuando le envíes un mensaje desde su panel, la app llama a su conector:

| Conector | Qué hace |
|---|---|
| Claude API | `POST https://api.anthropic.com/v1/messages` directamente desde el navegador (header `anthropic-dangerous-direct-browser-access`). |
| OpenAI | `POST /v1/chat/completions`. |
| n8n / Make / Zapier / API | `POST` a la URL del webhook con `{ agent, from, text, sentAt }` y muestra la respuesta. |

Notas:
- Las credenciales se guardan en `localStorage`: úsalo solo para demos. Para producción conviene un
  backend (proxy) que guarde las keys y reciba los eventos.
- El webhook de n8n debe permitir CORS desde el origen donde sirvas la app (en n8n: *Webhook → Options → Allowed Origins*),
  y conviene usar el nodo **Respond to Webhook** para devolver el texto de la respuesta.

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
src/sim.js          Simulación de conversaciones y escenarios
src/connectors.js   Catálogo de proveedores y sus llamadas reales
src/style.css       Estilos
```

Para añadir un proveedor nuevo, agrega una entrada en `PROVIDERS` (`src/connectors.js`) con `label`, `color`,
`fields` y `send()`; aparece automáticamente en el formulario y en la escena.

## Siguientes pasos posibles

- Backend (Node/Supabase) que reciba eventos reales de n8n/Claude por webhook y los emita a la escena por WebSocket.
- Flujos definidos por el usuario (quién delega a quién) en lugar de escenarios fijos.
- Métricas por agente (latencia, costo, errores) y avatares/modelos 3D personalizados.
