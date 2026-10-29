import { test } from 'node:test';
import assert from 'node:assert/strict';
import { correr, toCsv } from './helpers/pipeline.js';
import { evaluar } from '../../supabase/functions/treve/lib/conciliar.js';
import { parseCsv, mapearColumnas, parseNumero, parseFecha, similitud } from '../../supabase/functions/treve/lib/normalizar.js';
import { calcularIndicadores, comoObjeto, diasHabiles } from '../../supabase/functions/treve/lib/indicadores.js';
import { hojasReporte } from '../../supabase/functions/treve/lib/reporte.js';
import { decidirPorReglas, interpretarJev, estadoPorAccion } from '../../supabase/functions/treve/lib/juicio.js';
import { conclusionesPlantilla, normalizarConclusiones } from '../../supabase/functions/treve/lib/cerebro.js';

const periodos = [];
for (let y = 2025; y <= 2027; y++) for (let m = 1; m <= 12; m++) periodos.push(`${y}-${String(m).padStart(2, '0')}`);

test('concilia 36 periodos × 2 formatos × datos limpios y sucios: 6/6 sin falsas alarmas', () => {
  for (const p of periodos)
    for (const version of [1, 2])
      for (const escenario of ['normal', 'sucio']) {
        const r = correr(p, { version, escenario });
        const e = evaluar(r.hallazgos, r.d.respuestas);
        assert.equal(e.aciertos, 6, `${p} v${version} ${escenario}: faltan ${e.faltantes}`);
        assert.deepEqual(e.falsasAlarmas, [], `${p} v${version} ${escenario}`);
      }
});

test('empareja los nombres distintos de cada cliente con su RFC', () => {
  for (const p of periodos.slice(0, 12)) {
    const r = correr(p);
    const rfcs = new Set(r.clientes.map((c) => c.id));
    for (const e of r.d.respuestas.emparejamientos.filter((x) => rfcs.has(x.rfc))) {
      for (const [sistema, alias] of [['monday', e.monday], ['bancos', e.banco]]) {
        const a = r.alias.find((x) => x.sistema === sistema && x.alias === alias);
        if (a) assert.equal(a.cliente_id, e.rfc, `${p} ${sistema} ${alias}`);
      }
    }
  }
  assert.ok(similitud('GPO GAMMA LOG', 'Grupo Gamma Logística SA de CV') > 0.8);
  assert.ok(similitud('Theta', 'Eta Manufacturas SA de CV') < 0.5);
});

test('sin estado de cuenta: concilia lo posible y avisa la fuente faltante', () => {
  const r = correr('2026-09', { sinBanco: true });
  const tipos = r.hallazgos.map((h) => h.tipo).sort();
  assert.deepEqual(tipos, ['fuente_no_disponible', 'monto_distinto', 'oportunidad_duplicada', 'venta_sin_factura']);
});

test('el formato v2 de Compaq se reconoce por sinónimos', () => {
  const r = correr('2026-09', { version: 2 });
  const { mapeo, faltantes } = mapearColumnas('compaq', Object.keys(r.d.compaq[0]));
  assert.deepEqual(faltantes, []);
  assert.equal(mapeo['Importe total'], 'total');
  assert.equal(mapeo['Importe'], 'subtotal');
  assert.equal(mapeo['Situación'], 'estatus');
  assert.deepEqual(mapearColumnas('compaq', ['Doc', 'Monto', 'Cliente']).faltantes, ['folio', 'fecha', 'total', 'estatus']);
});

test('parsers: CSV con comillas, montos con $ y fechas', () => {
  const rows = parseCsv('﻿A,B\r\n"Hola, mundo","dijo ""sí"""\r\n,\r\n');
  assert.deepEqual(rows, [{ A: 'Hola, mundo', B: 'dijo "sí"' }]);
  assert.equal(parseNumero('$1,234.50'), 1234.5);
  assert.equal(parseNumero(''), 0);
  assert.equal(parseFecha('03/09/2026'), '2026-09-03');
  assert.throws(() => parseNumero('abc'));
  assert.equal(toCsv([{ a: 1 }]).startsWith('﻿'), true);
});

test('indicadores cuadran con la hoja de respuestas y reaccionan a las decisiones', () => {
  const r = correr('2026-09');
  const t = r.d.respuestas.totales;
  const hallazgos = r.hallazgos.map((h) => ({ ...h, estado: 'en_revision' }));
  const base = { ...r.datos, enlaces: r.enlaces, clientes: r.clientes, externos: { tipoCambio: { valor: 18.5 }, calendario: { diasHabiles: 21, feriados: [] } } };
  const ind = comoObjeto(calcularIndicadores({ ...base, hallazgos }));
  const d4 = r.d.respuestas.discrepancias.find((d) => d.id === 'D4');
  assert.equal(ind.facturado, t.facturado);
  assert.equal(ind.cobrado, Math.round((t.cobradoSegunCompaq + d4.monto) * 100) / 100);
  assert.equal(ind.saldo_final, t.saldoFinal);
  assert.equal(ind.nomina_esfera, Math.round((t.nominaQ1 + t.nominaQ2) * 100) / 100);
  assert.equal(ind.oportunidades_ganadas, t.ventasGanadas);
  assert.equal(ind.saldo_final_usd, Math.round((t.saldoFinal / 18.5) * 100) / 100);
  // Si una persona descarta el duplicado, la oportunidad vuelve a contar
  const sinDup = hallazgos.map((h) => (h.tipo === 'oportunidad_duplicada' ? { ...h, estado: 'descartado' } : h));
  const ind2 = comoObjeto(calcularIndicadores({ ...base, hallazgos: sinDup }));
  assert.equal(ind2.oportunidades_ganadas, t.ventasGanadas + 1);
});

test('reporte de ventas: una fila por venta ganada con sus observaciones', () => {
  const r = correr('2026-09');
  const hallazgos = r.hallazgos.map((h) => ({ ...h, estado: 'en_revision' }));
  const [ventas, hoja2, resumen] = hojasReporte({ periodo: '2026-09', ...r.datos, enlaces: r.enlaces, hallazgos, clientes: r.clientes, indicadores: [] });
  assert.equal(ventas.filas.length, r.d.respuestas.totales.ventasGanadas);
  assert.equal(ventas.filas.filter((f) => f['Estatus Compaq'] === 'Sin factura').length, 1);
  assert.ok(ventas.filas.some((f) => /Cobrado en banco, pendiente en Compaq/.test(f.Observaciones)));
  assert.equal(hoja2.filas.length, 6);
  assert.equal(resumen.filas[0].Valor, '2026-09');
});

test('juicio: reglas, umbral de JEV y estado resultante', () => {
  assert.equal(decidirPorReglas({ tipo: 'oportunidad_duplicada' }).choice, 'corregir_automatico');
  assert.equal(decidirPorReglas({ tipo: 'desconocido' }).choice, 'validacion_humana');
  assert.equal(interpretarJev({ answers: { accion: { choice: 'solo_informar', confidence: 0.3 } } }).choice, 'validacion_humana');
  assert.equal(interpretarJev({ answers: { accion: { choice: 'solo_informar', confidence: 0.8 } } }).choice, 'solo_informar');
  assert.throws(() => interpretarJev({ answers: {} }));
  assert.equal(estadoPorAccion('validacion_humana'), 'en_revision');
});

test('conclusiones de respaldo usan solo cifras calculadas', () => {
  const r = correr('2026-09');
  const lista = calcularIndicadores({ ...r.datos, enlaces: r.enlaces, clientes: r.clientes, hallazgos: r.hallazgos });
  const detalle = Object.fromEntries(lista.map((i) => [i.clave, i.detalle]));
  const c = conclusionesPlantilla(comoObjeto(lista), detalle);
  assert.ok(c.financiero.includes('Flujo neto'));
  assert.ok(c.comercial.length > 20 && c.clientes.length > 20);
});

test('conclusiones de OpenAI: acepta texto u objetos anidados', () => {
  const anidado = { financiero: { conclusion: 'A.', recomendacion: 'B.' }, comercial: 'C.', clientes: { conclusion: 'D.' } };
  assert.deepEqual(normalizarConclusiones(anidado), { financiero: 'A. B.', comercial: 'C.', clientes: 'D.' });
  assert.equal(normalizarConclusiones({ financiero: 'x' }), null);
});

test('días hábiles descuentan fines de semana y feriados', () => {
  assert.equal(diasHabiles('2026-09'), 22);
  assert.equal(diasHabiles('2026-09', [{ fecha: '2026-09-16' }]), 21);
});
