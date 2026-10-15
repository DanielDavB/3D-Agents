// Genera el código (n8n Workflow SDK) del flujo "Treve · Simulador de fuentes".
// El nodo Code incluye el mismo generador de src/sim/generator.js, para que n8n y las
// pruebas locales produzcan exactamente los mismos datos.
//
// Uso: node scripts/build-n8n-code.js > ../n8n/simulador-fuentes.workflow.js
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const generator = readFileSync(join(here, '../src/sim/generator.js'), 'utf8').replace('export function generateSimData', 'function generateSimData');

const handler = `
// ---- Selección de la fuente pedida (?fuente=&periodo=&version=) ----
const q = $input.first().json.query || {};
const fuente = String(q.fuente || '').toLowerCase();
const periodo = String(q.periodo || '2026-09');
const version = Number(q.version || 1);
const FUENTES = ['monday', 'compaq', 'esfera', 'bancos', 'respuestas'];

let d;
try {
  d = generateSimData(periodo, { version });
} catch (e) {
  return [{ json: { route: 'error', status: 400, payload: { error: e.message } } }];
}

const toCsv = (rows) => {
  const cols = Object.keys(rows[0] || {});
  const cell = (v) => {
    const s = v === null || v === undefined ? '' : String(v);
    return /[",\\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
  };
  return '\\ufeff' + [cols.join(','), ...rows.map((r) => cols.map((c) => cell(r[c])).join(','))].join('\\r\\n');
};

switch (fuente) {
  case 'monday':
    return [{ json: { route: 'json', fileName: 'monday_' + periodo + '.json', payload: d.monday } }];
  case 'respuestas':
    return [{ json: { route: 'json', fileName: 'respuestas_' + periodo + '.json', payload: d.respuestas } }];
  case 'compaq':
    return [{ json: { route: 'xlsx', fileName: 'compaq_facturas_' + periodo + '_v' + version + '.xlsx', rows: d.compaq } }];
  case 'esfera':
    return [{ json: { route: 'csv', fileName: 'esfera_nomina_' + periodo + '.csv', csv: toCsv(d.esfera) } }];
  case 'bancos':
    return [{ json: { route: 'csv', fileName: 'banco_estado_cuenta_' + periodo + '.csv', csv: toCsv(d.bancos) } }];
  default:
    return [{ json: { route: 'error', status: 400, payload: { error: 'fuente inválida', fuentes: FUENTES } } }];
}
`;

const jsCode = `${generator}\n${handler}`;

const rule = (key) => ({
  outputKey: key,
  renameOutput: true,
  conditions: {
    options: { caseSensitive: false, leftValue: '', typeValidation: 'strict' },
    conditions: [{ leftValue: "={{ $json.route }}", operator: { type: 'string', operation: 'equals' }, rightValue: key }],
    combinator: 'and',
  },
});

const code = `import { workflow, node, trigger, switchCase, newCredential, expr } from '@n8n/workflow-sdk';

const webhook = trigger({
  type: 'n8n-nodes-base.webhook',
  version: 2.1,
  config: {
    name: 'GET /treve-sim',
    parameters: { httpMethod: 'GET', path: 'treve-sim', authentication: 'headerAuth', responseMode: 'responseNode', options: {} },
    credentials: { httpHeaderAuth: newCredential('Treve Simulador Token') },
  },
});

const generar = node({
  type: 'n8n-nodes-base.code',
  version: 2,
  config: { name: 'Generar fuente', parameters: { mode: 'runOnceForAllItems', jsCode: ${JSON.stringify(jsCode)} } },
});

const ruta = switchCase({
  version: 3.4,
  config: {
    name: 'Ruta por formato',
    parameters: {
      mode: 'rules',
      rules: { values: ${JSON.stringify([rule('json'), rule('csv'), rule('xlsx')]).replaceAll('"={{ $json.route }}"', "expr('{{ $json.route }}')")} },
      options: { fallbackOutput: 'extra', renameFallbackOutput: 'error' },
    },
  },
});

const responderJson = node({
  type: 'n8n-nodes-base.respondToWebhook',
  version: 1.5,
  config: {
    name: 'Responder JSON',
    parameters: {
      respondWith: 'json',
      responseBody: expr('{{ JSON.stringify($json.payload) }}'),
      options: { responseCode: 200, responseHeaders: { entries: [{ name: 'X-Sim-Archivo', value: expr('{{ $json.fileName }}') }] } },
    },
  },
});

const responderCsv = node({
  type: 'n8n-nodes-base.respondToWebhook',
  version: 1.5,
  config: {
    name: 'Responder CSV',
    parameters: {
      respondWith: 'text',
      responseBody: expr('{{ $json.csv }}'),
      options: {
        responseCode: 200,
        responseHeaders: {
          entries: [
            { name: 'Content-Type', value: 'text/csv; charset=utf-8' },
            { name: 'Content-Disposition', value: expr('attachment; filename="{{ $json.fileName }}"') },
          ],
        },
      },
    },
  },
});

const filas = node({
  type: 'n8n-nodes-base.splitOut',
  version: 1,
  config: { name: 'Filas de facturas', parameters: { fieldToSplitOut: 'rows', include: 'noOtherFields', options: {} } },
});

const excel = node({
  type: 'n8n-nodes-base.convertToFile',
  version: 1.1,
  config: {
    name: 'Crear Excel Compaq',
    parameters: {
      operation: 'xlsx',
      binaryPropertyName: 'data',
      options: { fileName: expr("{{ $('Generar fuente').first().json.fileName }}"), sheetName: 'Facturas', headerRow: true },
    },
  },
});

const responderExcel = node({
  type: 'n8n-nodes-base.respondToWebhook',
  version: 1.5,
  config: {
    name: 'Responder Excel',
    parameters: {
      respondWith: 'binary',
      responseDataSource: 'automatically',
      options: {
        responseCode: 200,
        responseHeaders: {
          entries: [{ name: 'Content-Disposition', value: expr("attachment; filename=\\"{{ $('Generar fuente').first().json.fileName }}\\"") }],
        },
      },
    },
  },
});

const responderError = node({
  type: 'n8n-nodes-base.respondToWebhook',
  version: 1.5,
  config: {
    name: 'Responder error',
    parameters: { respondWith: 'json', responseBody: expr('{{ JSON.stringify($json.payload) }}'), options: { responseCode: 400 } },
  },
});

export default workflow('treve-simulador-fuentes', 'Treve · Simulador de fuentes')
  .add(webhook)
  .to(generar)
  .to(
    ruta
      .onCase(0, responderJson)
      .onCase(1, responderCsv)
      .onCase(2, filas.to(excel.to(responderExcel)))
      .onCase(3, responderError),
  );
`;

process.stdout.write(code);
