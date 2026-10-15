// Escribe archivos de muestra del simulador en server/sample/<periodo>/ para revisarlos a mano.
// Uso: node scripts/sample.js [periodo] [version]
import { mkdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { generateSimData } from '../src/sim/generator.js';

const periodo = process.argv[2] || '2026-09';
const version = Number(process.argv[3] || 1);
const d = generateSimData(periodo, { version });
const out = join(dirname(fileURLToPath(import.meta.url)), '../sample', periodo);
mkdirSync(out, { recursive: true });

const toCsv = (rows) => {
  const cols = Object.keys(rows[0] || {});
  const cell = (v) => {
    const s = v === null || v === undefined ? '' : String(v);
    return /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
  };
  return '﻿' + [cols.join(','), ...rows.map((r) => cols.map((c) => cell(r[c])).join(','))].join('\r\n');
};

const files = {
  [`monday_${periodo}.json`]: JSON.stringify(d.monday, null, 2),
  [`compaq_facturas_${periodo}_v${version}.csv`]: toCsv(d.compaq),
  [`esfera_nomina_${periodo}.csv`]: toCsv(d.esfera),
  [`banco_estado_cuenta_${periodo}.csv`]: toCsv(d.bancos),
  [`respuestas_${periodo}.json`]: JSON.stringify(d.respuestas, null, 2),
};
for (const [name, content] of Object.entries(files)) writeFileSync(join(out, name), content);
console.log(`Muestras en ${out}:\n` + Object.keys(files).map((f) => '  ' + f).join('\n'));
