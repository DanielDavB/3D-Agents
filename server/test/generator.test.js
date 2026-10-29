import { test } from 'node:test';
import assert from 'node:assert/strict';
import { generateSimData } from '../../supabase/functions/treve/lib/sim-generator.js';

const parseMx = (s) => {
  const [d, m, y] = s.split('/');
  return `${y}-${m}-${d}`;
};

test('es determinista: mismo periodo y versión dan los mismos datos', () => {
  assert.deepEqual(generateSimData('2026-09'), generateSimData('2026-09'));
  assert.notDeepEqual(generateSimData('2026-09').compaq, generateSimData('2026-08').compaq);
});

test('valida periodo y versión', () => {
  assert.throws(() => generateSimData('2026-13'));
  assert.throws(() => generateSimData('sept'));
  assert.throws(() => generateSimData('2026-09', { version: 3 }));
});

for (const periodo of ['2026-07', '2026-08', '2026-09', '2026-10', '2027-02']) {
  test(`siembra las 6 discrepancias y son coherentes (${periodo})`, () => {
    const d = generateSimData(periodo);
    const r = d.respuestas;
    assert.deepEqual(r.discrepancias.map((x) => x.id), ['D1', 'D2', 'D3', 'D4', 'D5', 'D6']);
    const items = d.monday.data.boards[0].items_page.items;
    const col = (it, id) => it.column_values.find((c) => c.id === id).text;
    const byId = Object.fromEntries(items.map((it) => [it.id, it]));

    // D1: venta ganada sin factura
    const d1 = r.discrepancias[0].referencia.dealId;
    assert.equal(col(byId[d1], 'etapa'), 'Ganado');
    assert.equal(d.compaq.length, r.totales.facturas);

    // D2: duplicado con mismos datos e id distinto
    const { dealId, duplicadoId } = r.discrepancias[1].referencia;
    assert.notEqual(dealId, duplicadoId);
    for (const c of ['cliente', 'monto', 'fecha_cierre']) assert.equal(col(byId[dealId], c), col(byId[duplicadoId], c));

    // D3: factura con monto distinto al de Monday
    const f3 = d.compaq.find((f) => f.Folio === r.discrepancias[2].referencia.folio);
    assert.ok(f3);
    assert.notEqual(f3.Subtotal, Number(col(byId[r.discrepancias[2].referencia.dealId], 'monto')));

    // D4: factura pendiente pero cobrada en banco
    const f4 = d.compaq.find((f) => f.Folio === r.discrepancias[3].referencia.folio);
    assert.equal(f4.Estatus, 'Pendiente');
    assert.ok(d.bancos.some((m) => m.Abono === f4.Total));

    // D5: depósito sin identificar
    assert.ok(d.bancos.some((m) => m.Abono === r.discrepancias[4].monto && m.Concepto.startsWith('DEPOSITO EFECTIVO')));

    // D6: nómina Q2 no cuadra con el banco por el monto sembrado
    const pagoQ2 = d.bancos.find((m) => m.Concepto === 'PAGO NOMINA Q2').Cargo;
    assert.equal(Math.round((pagoQ2 - r.totales.nominaQ2) * 100) / 100, r.discrepancias[5].monto);
    const pagoQ1 = d.bancos.find((m) => m.Concepto === 'PAGO NOMINA Q1').Cargo;
    assert.equal(pagoQ1, r.totales.nominaQ1);

    // Las discrepancias D1–D4 caen en ventas distintas
    const deals = [d1, dealId, r.discrepancias[2].referencia.dealId];
    assert.equal(new Set(deals).size, 3);
  });
}

test('facturas: total = subtotal + IVA (16 %) y fechas dentro del periodo', () => {
  const d = generateSimData('2026-09');
  for (const f of d.compaq) {
    assert.equal(f.IVA, Math.round(f.Subtotal * 16) / 100);
    assert.equal(f.Total, Math.round((f.Subtotal + f.IVA) * 100) / 100);
    assert.ok(parseMx(f.Fecha).startsWith('2026-09'));
    if (f.Estatus === 'Pagada') assert.ok(parseMx(f['Fecha de pago']) >= parseMx(f.Fecha));
  }
});

test('banco: el saldo es continuo y termina en el total reportado', () => {
  const d = generateSimData('2026-09');
  let saldo = 1250000;
  for (const m of d.bancos) {
    saldo = Math.round((saldo + (m.Abono || 0) - (m.Cargo || 0)) * 100) / 100;
    assert.equal(m.Saldo, saldo);
  }
  assert.equal(saldo, d.respuestas.totales.saldoFinal);
});

test('versión 2 de Compaq cambia nombres y orden de columnas, con los mismos datos', () => {
  const v1 = generateSimData('2026-09', { version: 1 }).compaq;
  const v2 = generateSimData('2026-09', { version: 2 }).compaq;
  assert.equal(v1.length, v2.length);
  assert.deepEqual(Object.keys(v2[0]), ['Fecha emisión', 'No. Documento', 'Cliente', 'R.F.C.', 'Importe total', 'Importe', 'Impuestos', 'Situación', 'Pagado el']);
  assert.equal(v2[0]['No. Documento'], v1[0].Folio);
  assert.equal(v2[0]['Importe total'], v1[0].Total);
});

test('emparejamientos: cada cliente tiene nombres distintos por sistema', () => {
  const { emparejamientos } = generateSimData('2026-09').respuestas;
  assert.equal(emparejamientos.length, 8);
  for (const e of emparejamientos) assert.notEqual(e.monday, e.compaq);
});
