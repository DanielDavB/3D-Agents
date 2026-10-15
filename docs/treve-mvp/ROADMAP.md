# Treve · Oficina de agentes · Roadmap del MVP funcional

> Objetivo: demostrar con un piloto **funcional** (no simulado en la interfaz) que una oficina de agentes,
> coordinada por un **Orquestador central**, puede reemplazar la cadena manual
> *app → Excel → comparación → reporte* y entregar un **dashboard financiero consolidado**.

## Idea del MVP

```
n8n (simula Monday, Compaq, Esfera y Bancos)
        │  archivos: JSON · Excel · CSV
        ▼
ORQUESTADOR CENTRAL (droplet)
  ├─ Extracción   → descarga y lee cada fuente
  ├─ Llenado      → genera el Excel "Reporte de ventas" con el formato de Treve
  ├─ Conciliación → ventas ↔ facturas ↔ pagos ↔ banco (código + JEV + OpenAI)
  ├─ Revisión     → validación humana de discrepancias dudosas
  ├─ Almacén      → datos consolidados con historial
  ├─ Dashboard    → indicadores calculados en código
  └─ Alertas      → discrepancias, fuentes atrasadas, indicadores fuera de rango
        │
        ▼
Visualizador 3D + dashboard (anima lo que el orquestador hace de verdad)
```

**Reparto de responsabilidades**
- **Código:** extrae, suma, cruza y calcula indicadores. Mismo dato de entrada, mismo resultado.
- **JEV:** toma decisiones con confianza (¿coincide?, ¿qué tipo de discrepancia?, ¿validación humana?, ¿alerta?).
- **OpenAI** (intercambiable por Claude o Kimi): razona, mapea columnas, empareja nombres distintos y redacta conclusiones.
- **La IA nunca inventa ni recalcula una cifra.** Cada decisión queda en la bitácora del orquestador.

---

## Fase 0 · Preparación (Daniel, ~1 día)
| # | Paso | Listo cuando… |
|---|---|---|
| 0.1 | Regenerar la API key de JEV y guardarla en una credencial de n8n (hoy está en texto plano en "JEV Router") | La key vieja ya no funciona |
| 0.2 | API key de OpenAI con límite de gasto | Guardada fuera del chat y del repo |
| 0.3 | Droplet en DigitalOcean (1 GB, Ubuntu) con acceso por SSH | Puedes entrar por SSH |
| 0.4 | Subdominio (p. ej. `agentes.tudominio.com`) apuntando a la IP del droplet | El subdominio resuelve a la IP |
| 0.5 | Confirmar con JEV/TypeSafe precio, límites y política de datos | Costo por llamada conocido |

## Fase 1 · Simulador de fuentes en n8n (~1–2 días)
| # | Paso | Listo cuando… |
|---|---|---|
| 1.1 | Generador determinista de datos ficticios del periodo (`server/src/sim/`), con pruebas | Mismo periodo = mismos datos |
| 1.2 | Flujo "Treve · Simulador de fuentes" en n8n: Monday (JSON), Compaq (Excel), Esfera (CSV), Bancos (CSV) | Cada URL devuelve su archivo |
| 1.3 | Discrepancias sembradas y endpoint de "respuestas" | La hoja de respuestas lista lo sembrado |
| 1.4 | Variante `version=2` de Compaq con columnas cambiadas | Compaq v2 devuelve otro formato |
| 1.5 | Token en la cabecera `x-sim-token` | Sin token responde 401 |

**Daniel:** revisar los archivos de ejemplo y confirmar que "se parecen" a lo que usa Treve.

## Fase 2 · Orquestador y pipeline en local (~4–6 días)
| # | Paso | Listo cuando… |
|---|---|---|
| 2.1 | Backend en `server/` (Node, SQLite, `.env`) | Arranca en local |
| 2.2 | Orquestador central: eventos → memoria → decisión → delegación → bitácora | Cada paso queda en la bitácora |
| 2.3 | Módulo JEV y módulo cerebro intercambiable (OpenAI por defecto) | Ambos responden JSON validado |
| 2.4 | Extracción: conectores a los 4 webhooks del simulador | Descarga y lee los 4 archivos |
| 2.5 | Llenado: Excel "Reporte de ventas" con formato tipo Treve | El .xlsx abre bien en Excel |
| 2.6 | Conciliación: cruces exactos en código, JEV para clasificar y OpenAI para emparejar nombres | Encuentra las discrepancias sembradas |
| 2.7 | Validación humana con reglas fijas | Las discrepancias dudosas esperan decisión |
| 2.8 | Almacén con versiones e indicadores calculados en código | Indicadores idénticos entre corridas |
| 2.9 | Detección de cambio de formato y remapeo de columnas | Compaq v2 se procesa sin romperse |
| 2.10 | Pruebas automáticas contra la hoja de respuestas | Reporta aciertos y falsas alarmas |

**Criterio de la fase:** una corrida completa del periodo encuentra **todas las discrepancias sembradas sin falsas alarmas**, con costo de IA medido.

## Fase 3 · Visualizador conectado al motor real (~2–3 días)
| # | Paso | Listo cuando… |
|---|---|---|
| 3.1 | Eventos en tiempo real del orquestador hacia el 3D | Cada paso real se anima |
| 3.2 | Oficinas, agentes y fuentes del pipeline real | El 3D refleja lo que de verdad pasa |
| 3.3 | Validación humana desde el 3D | La decisión cambia el resultado |
| 3.4 | Dashboard con datos del almacén, trazabilidad y consumo real | Cifras iguales al Excel consolidado |
| 3.5 | Login con Google (solo cuentas autorizadas) | Nadie más entra |

## Fase 4 · Despliegue en el droplet (~1 día)
| # | Paso | Listo cuando… |
|---|---|---|
| 4.1 | Docker Compose + Caddy (HTTPS automático) + script de instalación | Instalación con un comando |
| 4.2 | Instalar y cargar las keys en el `.env` del servidor (Daniel, con guía) | `https://agentes.<dominio>` abre el panel |
| 4.3 | Ciclo programado y respaldo diario | Corre y se respalda solo |
| 4.4 | Alertas por correo (WhatsApp opcional vía n8n como agente) | Llega el resumen del ciclo |

## Fase 5 · Demo y propuesta (Daniel + Max, ~1–2 días)
| # | Paso | Listo cuando… |
|---|---|---|
| 5.1 | Guion de demo de 10 minutos | Ensayado de punta a punta |
| 5.2 | Métricas: horas manuales eliminadas, aciertos de conciliación, costo mensual | Listas para la propuesta económica |
| 5.3 | Lista para el levantamiento real: accesos a Monday, Compaq, Esfera y bancos; NDA | Documento para Carlos |
| 5.4 | Presentación a Carlos | — |

## Después del MVP (con NDA)
1. Levantamiento: formatos reales, accesos y responsables.
2. Sustituir cada conector simulado por el real (sin tocar el orquestador).
3. Modo sombra con datos reales, ajuste de criterios y producción.

**Estimado total:** 2 a 3 semanas. Las fases 1 y 2 no dependen de la preparación de la fase 0.

## Estado
| Fase | Estado |
|---|---|
| 0 · Preparación | Pendiente (Daniel) |
| 1 · Simulador de fuentes | En curso |
| 2 · Orquestador | Pendiente |
| 3 · Visualizador | Pendiente |
| 4 · Droplet | Pendiente |
| 5 · Demo | Pendiente |
