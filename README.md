# Treve · Oficina digital (MVP)

MVP de AI Lab School para la propuesta de automatización y consolidación de información de Treve.
Muestra en 3D una **oficina digital de agentes**: cada fuente de datos (Compaq, Esfera, Monday, estados
bancarios y Excel) tiene un agente que la extrae; la información se consolida y revisa, una persona valida
las correcciones relevantes y un dashboard ejecutivo presenta los indicadores con trazabilidad y consumo de tokens.

> **Datos de ejemplo.** Todas las cifras, documentos y clientes del MVP son ficticios: no contiene
> información real de Treve.

## Arquitectura que muestra el MVP

| Capa | Oficina en 3D | Agentes |
|---|---|---|
| Centro de mando | Centro de mando | Orquestador (coordina todo), Bitácora (trazabilidad) |
| 1 · Fuentes | Capa 1 · Fuentes | Agente Compaq, Esfera, Monday, Bancos y Excel, conectados a sus fuentes |
| 2 · Datos consolidados | Capa 2 · Datos consolidados | Normalizador, Conciliador, Almacén central |
| Revisión | Revisión y control (dentro de la capa 2) | Auditor de calidad, Control de cambios + **validación humana** |
| 3 · Dashboard ejecutivo | Capa 3 · Dashboard ejecutivo | Analista financiero, comercial y de clientes |

### Ciclo de datos (botón **▶ Ejecutar ciclo de datos**)

1. El Orquestador pide a cada agente de la capa 1 que extraiga su fuente; los documentos viajan de la fuente al agente.
2. El Normalizador unifica catálogos y el Conciliador cruza ventas ↔ facturas ↔ pagos ↔ bancos.
3. El Auditor detecta 3 discrepancias (factura duplicada, depósito sin factura, fórmula rota) y **te pide validarlas**.
4. Las correcciones aprobadas se registran en Control de cambios y se publican en el Almacén central.
5. Los analistas calculan indicadores y entregan conclusiones; el dashboard se abre con los resultados.

### Dashboard ejecutivo

- **Resumen:** ingresos, flujo neto, cartera vencida y calidad de datos; ingresos vs egresos; retorno de marketing
  por canal; rentabilidad y riesgo de pérdida por cliente; conclusiones de los agentes.
- **Trazabilidad:** cada documento con su fuente, agente, registros y estado, y las decisiones de validación humana.
- **Consumo de IA:** tokens y costo por agente (estimados en el ciclo de ejemplo; reales cuando se usa el cerebro).

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

- **Explorar la oficina en 3D**: arrastra para rotar, rueda para hacer zoom; clic en una oficina, agente o fuente para ver su detalle y su último resultado.
- **Ejecutar el ciclo de datos** y validar las correcciones del auditor.
- **Abrir el dashboard** (📊) con sus pestañas de resumen, trazabilidad y consumo.
- **Editar la organización**: crear oficinas y agentes, cambiar conectores; exportar / importar como JSON (menú `⋯`).
- **Auto**: tráfico de ambiente entre agentes para que la oficina se vea viva.
- **Preguntarle a la oficina** con IA real (barra inferior, requiere configurar el cerebro).

## Cerebro con IA (funcionamiento real)

El agente **Orquestador** del Centro de mando es el cerebro. Usa Claude con *tool use*:
cada agente de la organización es una herramienta a la que puede delegar, y además tiene
`http_request` para llamar a **cualquier API**. Todo lo que hace se ve en 3D: paquetes naranjas
(tareas) hacia los agentes, blancos (respuestas) de vuelta, y viajes al globo **APIs externas**
en cada petición HTTP.

1. Pulsa **⚙ Cerebro** y pega tu API key de Anthropic ([console.anthropic.com](https://console.anthropic.com)).
2. Elige el modelo: **Claude Haiku 4.5** (por defecto, el más barato: $1 / $5 por millón de tokens
   de entrada / salida) o Claude Sonnet 5.5 si necesitas más capacidad.
3. Escribe una petición en la barra inferior, p. ej. *"Pide al Analista de clientes y al financiero
   un plan de cobranza para los clientes en riesgo alto"*. El cerebro conoce el contexto del proyecto.

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
src/main.js         Conecta estado, escena, ciclo, dashboard y UI
src/project.js      Configuración del MVP: organización, fuentes, documentos, hallazgos y datos de ejemplo
src/pipeline.js     Ciclo de datos de demostración con validación humana
src/dashboard.js    Dashboard ejecutivo, trazabilidad y consumo de IA (gráficas SVG)
src/state.js        Estado y persistencia en el navegador
src/world.js        Escena Three.js: oficinas, agentes, corredores, paquetes, cámara
src/brain.js        Cerebro: bucle de tool use con Claude, delegación, http_request y costo
src/sim.js          Tráfico de ambiente (modo Auto)
src/connectors.js   Catálogo de proveedores y sus campos
proxy/              Proxy CORS (Cloudflare Worker + versión Node)
src/style.css       Estilos
```

Para añadir un proveedor nuevo, agrega una entrada en `PROVIDERS` (`src/connectors.js`) con `label`, `color`
y `fields`, y su ejecución en `execAgent` (`src/brain.js`).

## Del MVP a producción

- Levantamiento de fuentes: mapear de dónde viene cada dato, cómo se transforma y quién interviene.
- Conectar los agentes de la capa 1 a Compaq, Esfera, Monday, bancos y Excel (n8n o API) y programar el ciclo.
- Almacén central en la nube (por ejemplo, Supabase) con permisos, versiones y bitácora de cambios.
- Backend que guarde las keys y emita los eventos reales a la escena por WebSocket.
- Indicadores definitivos acordados con dirección; información sensible bajo NDA.
