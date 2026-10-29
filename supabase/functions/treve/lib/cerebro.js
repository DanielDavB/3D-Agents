// Cerebro (razonamiento): OpenAI por defecto; intercambiable. Si no hay key, plantillas.
// Regla: la IA redacta y propone, pero solo con las cifras que le pasa el código.

const $ = (n) => (n == null ? 's/d' : '$' + Number(n).toLocaleString('es-MX', { maximumFractionDigits: 0 }));
const pct = (n) => (n == null ? 's/d' : `${n.toFixed(1)} %`);

export const PROMPT_CONCLUSIONES =
  'Eres el equipo de analistas de una oficina digital de finanzas. Recibes indicadores YA CALCULADOS por código y los hallazgos ' +
  'de conciliación. Escribe en español de México, tono ejecutivo y concreto. Usa SOLO las cifras del JSON (puedes redondearlas), ' +
  'nunca inventes ni recalcules montos; escribe los montos en pesos con signo $ y separador de miles. ' +
  'Devuelve JSON con las claves "financiero", "comercial" y "clientes"; el valor de cada una es UN SOLO TEXTO (string, no objeto) ' +
  'de 2 frases (máx. 320 caracteres): la conclusión principal y una recomendación accionable.';

// Acepta texto o un objeto {conclusion, recomendacion} (algunos modelos lo anidan) y devuelve texto
export function normalizarConclusiones(data) {
  const texto = (v) => (typeof v === 'string' ? v : v && typeof v === 'object' ? Object.values(v).filter((x) => typeof x === 'string').join(' ') : '');
  const out = { financiero: texto(data?.financiero).trim(), comercial: texto(data?.comercial).trim(), clientes: texto(data?.clientes).trim() };
  return out.financiero && out.comercial && out.clientes ? out : null;
}

export function datosParaConclusiones(ind, detalle, hallazgos) {
  return {
    indicadores: ind,
    ventas_por_canal: detalle.ventas_ganadas?.por_canal?.slice(0, 5),
    por_cobrar_por_cliente: detalle.por_cobrar?.por_cliente?.slice(0, 5),
    egresos_por_categoria: detalle.egresos_banco?.por_categoria,
    hallazgos: hallazgos.map((h) => ({ tipo: h.tipo, monto: h.monto, estado: h.estado, descripcion: h.descripcion })),
  };
}

// Conclusiones sin IA: mismas cifras, redacción fija
export function conclusionesPlantilla(ind, detalle) {
  const canal = detalle.ventas_ganadas?.por_canal?.[0];
  const cliente = detalle.por_cobrar?.por_cliente?.[0];
  return {
    financiero:
      ind.flujo_neto == null
        ? `Sin estado de cuenta no se pudo medir el flujo. Facturado: ${$(ind.facturado)}; por cobrar según Compaq: ${$(ind.por_cobrar_segun_compaq)}.`
        : `Flujo neto del periodo: ${$(ind.flujo_neto)} (ingresos ${$(ind.ingresos_banco)}, egresos ${$(ind.egresos_banco)}). ` +
          `Por cobrar real: ${$(ind.por_cobrar)} frente a ${$(ind.por_cobrar_segun_compaq)} que reporta Compaq; conviene actualizar los cobros ya recibidos.`,
    comercial:
      `Ventas ganadas: ${$(ind.ventas_ganadas)} en ${ind.oportunidades_ganadas} oportunidades, tasa de cierre ${pct(ind.tasa_cierre)}. ` +
      (canal ? `${canal.canal} es el canal líder con ${$(canal.monto)}; ` : '') +
      `${$(ind.ventas_sin_facturar)} en ventas ganadas siguen sin factura.`,
    clientes: cliente
      ? `${cliente.cliente} concentra el mayor saldo por cobrar: ${$(cliente.por_cobrar)} de ${$(cliente.facturado)} facturado. Prioriza su cobranza esta semana.`
      : 'No hay saldos por cobrar relevantes por cliente.',
  };
}

export const PROMPT_MAPEO =
  'Eres el Normalizador de una oficina de datos. Te doy los encabezados de un archivo y los campos canónicos esperados. ' +
  'Devuelve JSON {"mapeo": {"<encabezado original>": "<campo canónico>"}} solo con las equivalencias seguras; omite las dudosas.';

// Llamada genérica a OpenAI Chat Completions con salida JSON
export async function openaiJson({ apiKey, model = 'gpt-4o-mini', system, user, fetchImpl = fetch, timeoutMs = 45000 }) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    const res = await fetchImpl('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      signal: ctrl.signal,
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model,
        temperature: 0.2,
        response_format: { type: 'json_object' },
        messages: [
          { role: 'system', content: system },
          { role: 'user', content: typeof user === 'string' ? user : JSON.stringify(user) },
        ],
      }),
    });
    const json = await res.json();
    if (!res.ok) throw new Error(json?.error?.message || `OpenAI respondió ${res.status}`);
    return { data: JSON.parse(json.choices[0].message.content), usage: json.usage || {}, model: json.model || model };
  } finally {
    clearTimeout(timer);
  }
}

// Precio aproximado por millón de tokens (USD) para estimar el consumo
const PRECIOS = { 'gpt-4o-mini': [0.15, 0.6], 'gpt-4.1-mini': [0.4, 1.6], 'gpt-4.1-nano': [0.1, 0.4] };
export function costoUsd(model, usage) {
  const key = Object.keys(PRECIOS).find((k) => String(model).startsWith(k));
  const [i, o] = PRECIOS[key] || [0.15, 0.6];
  return ((usage.prompt_tokens || 0) * i + (usage.completion_tokens || 0) * o) / 1e6;
}
