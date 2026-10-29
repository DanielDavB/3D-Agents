// Auditor de calidad: decide qué hacer con cada hallazgo.
// Con JEV (TypeSafe) si hay key; si no, con reglas fijas. La decisión nunca cambia un monto.

export const ACCIONES = {
  corregir_automatico: 'El hallazgo es inequívoco y la corrección no altera saldos contables (p. ej. un duplicado idéntico en el CRM).',
  validacion_humana: 'La corrección cambia el estatus contable, un saldo o la nómina, o falta información para asegurarla: una persona debe aprobarla.',
  solo_informar: 'Es un aviso operativo para el área responsable (p. ej. facturar una venta pendiente); no se corrige ningún dato.',
};

// Reglas fijas (respaldo y referencia): confianza alta solo cuando la regla es clara.
const REGLAS = {
  oportunidad_duplicada: ['corregir_automatico', 0.9],
  venta_sin_factura: ['solo_informar', 0.8],
  factura_sin_venta: ['validacion_humana', 0.7],
  monto_distinto: ['validacion_humana', 0.85],
  pago_no_registrado: ['validacion_humana', 0.9],
  cobro_no_encontrado: ['validacion_humana', 0.9],
  deposito_sin_identificar: ['validacion_humana', 0.85],
  nomina_no_cuadra: ['validacion_humana', 0.9],
  fuente_no_disponible: ['solo_informar', 0.95],
};

export const UMBRAL = 0.5;

export function decidirPorReglas(h) {
  const [choice, confidence] = REGLAS[h.tipo] || ['validacion_humana', 0.4];
  return { choice: confidence < UMBRAL ? 'validacion_humana' : choice, confidence, fuente: 'reglas' };
}

export function peticionJev(h) {
  return {
    model: 'jev-latest',
    state: `Hallazgo de conciliación financiera (${h.tipo}, severidad ${h.severidad}): ${h.descripcion}. Fuentes: ${(h.fuentes || []).join(', ')}.`,
    questions: {
      accion: {
        type: 'choice',
        instructions: '¿Qué debe hacer la oficina con este hallazgo antes de publicar el dashboard financiero?',
        criteria: ACCIONES,
      },
    },
  };
}

// Interpreta la respuesta de JEV con el umbral: si duda, pasa a validación humana.
export function interpretarJev(json) {
  const a = json?.answers?.accion;
  if (!a?.choice || !(a.choice in ACCIONES)) throw new Error('respuesta de JEV sin una acción válida');
  const confidence = Number(a.confidence ?? 0);
  return {
    choice: confidence < UMBRAL ? 'validacion_humana' : a.choice,
    confidence,
    probabilities: a.probabilities || null,
    fuente: 'jev',
  };
}

export const estadoPorAccion = (choice) => ({ corregir_automatico: 'confirmado', validacion_humana: 'en_revision', solo_informar: 'abierto' })[choice];
