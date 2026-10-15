# Bandeja inteligente · Plan del caso de uso

> Estado: **planeación** · Versión objetivo: **v1** · Uso: personal (una sola cuenta)

## 1. Objetivo

Convertir cada correo que llega a tu Gmail en una **acción lista para aprobar**: un borrador de respuesta,
un evento en el calendario, un gasto registrado o simplemente una etiqueta. Tú solo revisas y apruebas.

- **JEV decide** (categoría, acción, urgencia y si necesita tu aprobación), con su confianza y probabilidades.
- **OpenAI genera y extrae** solo cuando hace falta (redactar, leer fechas, leer montos).
- **El backend propio ejecuta** en Google (Gmail, Calendar, Sheets) y registra todo.
- **El visualizador 3D** muestra cada correo viajando por la oficina, la cola de aprobación y las métricas.
- **n8n queda fuera del motor**: se conecta después como un agente más (por ejemplo, avisos por WhatsApp).

### Alcance de la v1

| Sí entra | No entra (después) |
|---|---|
| Leer correos nuevos del inbox | Enviar correos (solo borradores) |
| Clasificar con JEV y etiquetar | Borrar correos o eventos |
| Borradores de respuesta con OpenAI | Leer adjuntos (PDF, XML de facturas) |
| Proponer eventos en Calendar | Tareas en ClickUp / notas en Supabase |
| Registrar gastos en tu hoja "Registro de gastos" | Varias cuentas de Gmail |
| Cola de aprobación en el 3D | Resumen diario por WhatsApp (vía n8n, v1.1) |
| Dashboard: volumen, decisiones, precisión, costo | |

## 2. Escenarios de ejemplo

| Correo que llega | JEV decide | Qué pasa | ¿Aprobación? |
|---|---|---|---|
| Carlos pide la propuesta para el jueves | cliente · responder · alta | OpenAI redacta borrador formal en el mismo hilo | Sí, siempre |
| "¿Nos vemos el martes a las 4?" | reunión · agendar · media | OpenAI extrae fecha, hora e invitados → evento propuesto | Sí, siempre |
| Recibo de Uber por $186 | factura_recibo · registrar_gasto · baja | OpenAI extrae monto y comercio → fila en Registro de gastos (Transporte) | No, si la confianza es alta y el monto es válido |
| Newsletter de herramientas de IA | newsletter · archivar · baja | Etiqueta `IA/Newsletter` | No (solo etiqueta, no lo saca del inbox en v1) |
| Correo ambiguo de un desconocido | confianza < 0.5 | Etiqueta `IA/Revisar` y va a revisión manual | Sí |

## 3. Flujo de procesamiento

```
Gmail (no leídos, inbox) ──► Ingesta ──► JEV decide ──► Reglas de seguridad ──► OpenAI (si aplica)
                                                                │                       │
                                                                ▼                       ▼
                                                     Cola de aprobación ◄──── Acción preparada
                                                                │ (tú apruebas / rechazas / editas)
                                                                ▼
                                       Ejecuta en Google: borrador · evento · fila · etiqueta
                                                                │
                                                                ▼
                                       Bitácora + métricas + eventos al visualizador 3D
```

**Estados de un correo:** `nuevo → clasificado → preparado → en_aprobacion → ejecutado | rechazado | revision_manual | error`

- **Idempotencia:** cada correo se procesa una sola vez (se guarda su `messageId` y se etiqueta `IA/Procesado`).
- **Frecuencia:** cada 10 minutos (configurable) + botón "Procesar ahora".
- **Filtro de entrada:** `in:inbox is:unread newer_than:2d -category:promotions -category:social` (configurable).
- **Lista de exclusión:** remitentes o dominios que nunca se envían a JEV ni a OpenAI (por ejemplo, bancos o temas legales).

## 4. Decisiones de JEV

Una sola petición por correo, con cuatro preguntas tipo `choice`. El `state` es el correo resumido:

```
De: <remitente> · Asunto: <asunto> · Fecha: <fecha>
Cuerpo (sin firmas ni hilos citados, máx. ~2,000 caracteres)
```

```json
{
  "model": "jev-latest",
  "state": "De: ... · Asunto: ... · Cuerpo: ...",
  "questions": {
    "category": {
      "type": "choice",
      "instructions": "What kind of email is this for a solo AI consultant and educator",
      "criteria": {
        "client": "An existing client writes about an ongoing project, deliverable, proposal or payment",
        "prospect": "A potential client asks about services, prices or a first meeting",
        "receipt": "A receipt, invoice, bill or purchase confirmation",
        "meeting": "An invitation, scheduling request or change to a meeting or appointment",
        "admin": "Account notices, security alerts, platform notifications or paperwork",
        "newsletter": "Newsletters, marketing, digests or automated content",
        "personal": "Personal messages from friends or family"
      }
    },
    "action": {
      "type": "choice",
      "instructions": "What should the assistant do with this email",
      "criteria": {
        "reply": "The sender expects an answer from me",
        "schedule": "It proposes or confirms a date and time to meet",
        "log_expense": "It documents money I spent or received",
        "read_only": "It is useful information but needs no action",
        "archive": "It is low-value content that can be filed away"
      }
    },
    "urgency": {
      "type": "choice",
      "instructions": "How urgent is this email for me",
      "criteria": {
        "high": "Needs attention today: deadlines, clients waiting, money or security issues",
        "medium": "Should be handled this week",
        "low": "Can wait or needs no attention"
      }
    },
    "needs_approval": {
      "type": "choice",
      "instructions": "Should a human approve the action before it is executed",
      "criteria": {
        "yes": "The action affects other people, money above a small amount, or the email is ambiguous",
        "no": "The action is internal, low risk and clearly defined"
      }
    }
  }
}
```

Respuesta esperada (como en tu JEV Router): `answers.<pregunta>.{ choice, confidence, probabilities }`.

**Umbrales (iguales al router que ya usas):**
- `confidence < 0.5` en `category` o `action` → **revisión manual** (no se ejecuta nada).
- `0.5 – 0.8` → la acción se prepara pero **siempre** pasa por aprobación.
- `≥ 0.8` → se respeta lo que diga `needs_approval`, salvo las reglas fijas de abajo.

### Reglas fijas (las decisiones de la IA no pueden saltárselas)
1. **Nunca se envía un correo**: solo se crean borradores en el mismo hilo.
2. **Nunca se borra nada** (correos, eventos ni filas).
3. `reply` y `schedule` **siempre** requieren aprobación en la v1.
4. `log_expense` se ejecuta solo si el monto se extrajo con éxito y es menor a un tope configurable (p. ej. $2,000 MXN); si no, pide aprobación.
5. `archive` en la v1 solo pone etiqueta; no saca el correo del inbox.
6. Si JEV u OpenAI fallan, el correo queda en `error` con reintento; nunca se ejecuta una acción a medias.

## 5. Tareas del cerebro (OpenAI)

Modelo inicial: **gpt-5-mini** (el que ya usas en n8n). Proveedor intercambiable: OpenAI, Claude o Kimi
(Kimi expone una API compatible con OpenAI). Todas las salidas son **JSON validado con esquema**; si no valida, la acción va a revisión.

| Tarea | Entrada | Salida |
|---|---|---|
| `draft_reply` | Correo + hilo + categoría | `{ subject, body, tone }`. Clientes y prospectos: tono formal de AI Lab School con cierre "Saludos cordiales, Dan Davila". Personal: tono casual |
| `extract_event` | Correo + fecha actual + zona horaria | `{ title, start, end, attendees[], location, confidence }` |
| `extract_expense` | Correo (recibo) | `{ fecha, tipo, categoria, descripcion, metodo, monto }` con las categorías de tu hoja |
| `summarize` (v1.1) | Correos del día | Resumen diario para el dashboard / WhatsApp |

**Registro de gastos** (respeta la estructura de tu hoja): `Fecha (DD/MM/YYYY) · Tipo (Gasto/Ingreso) · Categoría · Descripción · Método (Efectivo/Tarjeta/Transferencia) · Entrada · Salida`. El Saldo lo sigue calculando la hoja.
Categorías: Alimentación, Transporte, Servicios, Vivienda, Entretenimiento, Salud, Educación (+ Otros).

## 6. Integraciones con Google

| Servicio | Uso | Permiso (scope) |
|---|---|---|
| Gmail | Leer, etiquetar, crear borradores | `gmail.modify`, `gmail.compose` |
| Calendar | Crear eventos aprobados | `calendar.events` |
| Sheets | Agregar filas a "Registro de gastos" | `spreadsheets` |
| Login del panel | Identificar que eres tú | `openid email` |

- **Proyecto de Google Cloud** con un OAuth Client tipo "Web", redirección a `https://<subdominio>/auth/google/callback`.
- **Ojo con el modo de la app:** en modo *Testing* los permisos de Google **caducan cada 7 días**. Opciones:
  publicarla como *In production* sin verificar (Google muestra una advertencia al autorizar, válido para uso personal),
  o, si usas una cuenta de Google Workspace (dominio propio), marcarla como *Internal* y evitar ambas cosas.
- El refresh token se guarda **cifrado** en la base de datos del servidor.

## 7. Arquitectura

```
Droplet (DigitalOcean, 1 GB) ─ Docker Compose
├─ Caddy ─ HTTPS automático (Let's Encrypt) para agentes.<tu-dominio>
└─ app (Node 22)
   ├─ API + panel (sirve el visualizador 3D: el asistente NO queda público en GitHub Pages)
   ├─ Login con Google (solo tu cuenta autorizada)
   ├─ Motor: programador cada N min → ingesta → JEV → reglas → OpenAI → cola → ejecución
   ├─ Eventos en tiempo real (SSE) para animar el 3D
   └─ SQLite (archivo en volumen) + respaldo diario
```

- **Stack:** Node 22, Fastify, `googleapis`, SDK de OpenAI, Zod (validación), better-sqlite3.
- **Secretos** (`.env` en el servidor, nunca en el repo): `OPENAI_API_KEY`, `JEV_API_KEY`, `GOOGLE_CLIENT_ID/SECRET`, `ENCRYPTION_KEY`, `ALLOWED_EMAIL`.
- **El demo de Treve** sigue en GitHub Pages sin cambios. El asistente personal vive solo en tu droplet.
- **n8n (después):** el backend expone un webhook de salida (correo urgente, resumen diario) para que n8n mande WhatsApp; y n8n puede pedir "procesa ahora" con un token.

### Datos (SQLite)
| Tabla | Contenido |
|---|---|
| `emails` | id de Gmail, hilo, remitente, asunto, fecha, extracto, estado |
| `decisions` | por correo: respuesta completa de JEV (elección, confianza, probabilidades por pregunta) |
| `actions` | tipo, payload (borrador/evento/gasto), estado, resultado en Google (ids, enlaces) |
| `approvals` | decisión, editado o no, quién y cuándo |
| `usage` | llamadas a JEV y OpenAI: tokens, costo, latencia |
| `runs` | cada ciclo: inicio, fin, correos procesados, errores |
| `settings` | umbrales, filtros, exclusiones, frecuencia, modelo |

### API mínima
`GET /api/inbox` · `GET /api/approvals` · `POST /api/approvals/:id` (aprobar / rechazar / editar) · `POST /api/run` ·
`GET /api/metrics` · `GET /api/settings` · `PUT /api/settings` · `GET /api/events` (SSE)

## 8. Visualizador 3D (proyecto "Bandeja inteligente")

| Oficina | Agentes | Conecta con |
|---|---|---|
| Centro de mando | Orquestador (motor), Bitácora | — |
| Recepción | Clasificador **JEV** | Fuente: Gmail |
| Redacción | Redactor (OpenAI) | Gmail (borradores) |
| Agenda | Agente de calendario | Fuente: Google Calendar |
| Finanzas | Registrador de gastos | Fuente: Registro de gastos (Sheets) |
| Archivo | Etiquetador | Gmail (etiquetas) |
| Revisión | **Tú** (cola de aprobación) | — |

- Cada correo es un documento que viaja: Gmail → Recepción → oficina de la acción → Revisión → servicio de Google.
- En Recepción se ven las **barras de probabilidad de JEV** del correo en curso.
- **Dashboard:**
  - correos procesados por día y por categoría;
  - acciones aprobadas, rechazadas y editadas (sirve para medir la **precisión de JEV**);
  - confianza promedio;
  - tiempo estimado ahorrado;
  - costo de JEV y OpenAI.

## 9. Seguridad y privacidad
- El contenido de tus correos se envía a **JEV (TypeSafe)** y a **OpenAI**: revisar sus políticas de retención antes de activar el modo real.
- Se recorta el cuerpo (sin firmas, hilos citados ni adjuntos) y se respeta la lista de exclusión.
- Panel accesible solo con tu cuenta de Google; cookies seguras; CORS cerrado.
- Logs sin cuerpos de correo; los cuerpos se borran de la base tras N días (configurable).
- **Pendiente previo:** regenerar la API key de JEV que quedó en texto plano en el flujo "JEV Router" de n8n.

## 10. Costos estimados (uso personal)
| Concepto | Estimado |
|---|---|
| Droplet 1 GB | ~$6 USD/mes |
| Dominio | El que ya tengas (solo se crea un subdominio) |
| OpenAI (gpt-5-mini) | Bajo: solo ~1 de cada 3 correos necesita redactar o extraer. Se medirá en el dashboard desde el día 1 |
| JEV | Una llamada por correo (con 4 preguntas). Confirmar precio y límites con TypeSafe |

## 11. Fases y criterios de aceptación

| Fase | Entregable | Listo cuando… |
|---|---|---|
| **0. Planeación** | Este documento + decisiones abiertas resueltas | Apruebas el alcance |
| **1. Motor local** | Backend con Gmail, JEV y OpenAI **simulados**, base de datos, reglas, API y pruebas | 30 correos de ejemplo pasan de punta a punta con los resultados esperados |
| **2. Integraciones reales en "modo sombra"** | OAuth de Google, JEV y OpenAI reales; **decide pero no ejecuta nada** | 2–3 días de tu correo real clasificado; revisamos aciertos y ajustamos criterios y umbrales |
| **3. Visualizador** | Proyecto "Bandeja inteligente" en el 3D, eventos en vivo, cola de aprobación, dashboard | Apruebas un borrador y un evento desde el 3D y aparecen en Gmail y Calendar |
| **4. Droplet** | Docker Compose, Caddy, dominio, respaldos, guía de instalación | Corre 24/7 en `agentes.<tu-dominio>` |
| **5. v1.1** | Resumen diario, n8n como agente (WhatsApp), adjuntos PDF/XML, ClickUp | Según prioridad |

El **modo sombra** (fase 2) es clave: antes de dejar que el asistente toque tu Gmail, comparamos qué decidió JEV contra lo que tú habrías hecho.

## 12. Decisiones abiertas
1. **Dominio:** ¿qué dominio usamos para `agentes.<dominio>`?
2. **Cuenta:** ¿solo tu Gmail personal, o también una cuenta de Google Workspace (AI Lab School)? Con Workspace la app puede ser *Internal*.
3. **Zona horaria y calendario destino:** ¿America/Tijuana? ¿Tu calendario principal?
4. **Gastos:** ¿registro automático bajo un tope (¿cuál?) o siempre con aprobación?
5. **Exclusiones:** remitentes o dominios que nunca deben salir a la IA.
6. **Estilo de borradores:** ¿formal AI Lab School para clientes y casual para personal? ¿Firma?
7. **JEV:** ¿qué tipos de pregunta soporta además de `choice`? ¿Precio, límites y retención de datos?
8. **Frecuencia:** ¿cada 10 minutos está bien?
