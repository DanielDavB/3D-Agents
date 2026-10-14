// Ciclo de datos de demostración: fuentes → capa 1 (extracción) → capa 2 (consolidación)
// → revisión con validación humana → capa 3 (indicadores) → dashboard.
// Usa datos de ejemplo (src/project.js) y simula el consumo de tokens con precios de Haiku 4.5.
import { SOURCES, DOCUMENTS, FINDINGS, CONCLUSIONS, PROJECT } from './project.js';
import { cost, DEFAULT_MODEL } from './brain.js';

const ORANGE = '#e8600c';
const WHITE = '#ffffff';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const rnd = (a, b) => Math.round(a + Math.random() * (b - a));
const fmt = (n) => n.toLocaleString('es-MX');

export function createPipeline({ store, world, log, bump, usage, trace, setResult, askValidation, onDone }) {
  let running = false;

  const exists = (id) => id === 'user' || id.startsWith('src:') || !!store.agent(id);
  const nameOf = (id) => (id === 'user' ? 'Tú' : id.startsWith('src:') ? SOURCES.find((s) => `src:${s.id}` === id)?.name : store.agent(id)?.name);

  // Un salto animado de A a B; resuelve al llegar
  function hop(from, to, text, { color = ORANGE, kind = 'task', quiet = false } = {}) {
    if (!exists(from) || !exists(to)) return Promise.resolve();
    if (!quiet) log({ kind, from: nameOf(from), to: nameOf(to), text });
    bump(from, 'sent');
    return new Promise((resolve) => {
      const ok = world.sendPacket(from, to, {
        color,
        onArrive: () => {
          bump(to, 'received');
          resolve();
        },
      });
      if (!ok) resolve();
    });
  }

  // El agente "piensa": se ilumina y, si es un agente de IA, registra tokens simulados
  async function think(id, ms = 700, tokens = [1800, 4200]) {
    const agent = store.agent(id);
    if (!agent) return;
    world.setWorking(id, true);
    await sleep(ms);
    world.setWorking(id, false);
    if (agent.provider === 'claude') {
      const u = { input_tokens: rnd(...tokens), output_tokens: rnd(250, 700) };
      usage(id, u, cost(DEFAULT_MODEL, u), 'demo');
    }
  }

  async function run() {
    if (running) return;
    running = true;
    trace.reset();
    try {
      log({ kind: 'info', text: `▶ Ciclo de datos · corte ${PROJECT.period} (datos de ejemplo)` });
      await hop('user', 'ag_orq', `Inicia el ciclo de consolidación de ${PROJECT.period.toLowerCase()}`, { color: WHITE });
      await think('ag_orq', 600, [2500, 5000]);

      // ---- Capa 1: extracción desde cada fuente ----
      let totalRecords = 0;
      await Promise.all(
        SOURCES.map(async (src, i) => {
          await sleep(i * 350);
          const ag = src.agentId;
          if (!store.agent(ag)) return;
          await hop('ag_orq', ag, `Extrae los datos de ${src.name} del periodo`);
          await hop(ag, `src:${src.id}`, `Solicita exportación a ${src.name}`, { quiet: true });
          const docs = DOCUMENTS[src.id] || [];
          await hop(`src:${src.id}`, ag, docs.map((d) => d.name).join(', '), { color: WHITE, kind: 'doc' });
          docs.forEach((d) => trace.add({ doc: d.name, source: src.name, agentId: ag, records: d.records, status: 'Extraído' }));
          await think(ag, 600, [2200, 6000]);
          const n = docs.reduce((s, d) => s + d.records, 0);
          totalRecords += n;
          setResult(ag, `Extrajo ${docs.length} documento(s) con ${fmt(n)} registros de ${src.name}.`);
        }),
      );

      // ---- Capa 2: normalización y conciliación ----
      await Promise.all(
        SOURCES.map((src, i) => sleep(i * 150).then(() => hop(src.agentId, 'ag_norm', `Entrega ${(DOCUMENTS[src.id] || []).length} documento(s) para normalizar`, { quiet: i > 0 }))),
      );
      await think('ag_norm', 900, [5000, 9000]);
      trace.setAll('Normalizado');
      setResult('ag_norm', `Unificó catálogos de clientes y conceptos: ${fmt(totalRecords)} registros en un solo formato.`);
      await hop('ag_norm', 'ag_conc', `${fmt(totalRecords)} registros normalizados`);
      await think('ag_conc', 1000, [6000, 11000]);
      trace.setAll('Conciliado');
      setResult('ag_conc', `Cruzó ventas, facturas, pagos y bancos. Encontró ${FINDINGS.length} discrepancias.`);
      await hop('ag_conc', 'ag_qa', `Revisa ${FINDINGS.length} discrepancias antes de publicar`);

      // ---- Revisión y validación humana ----
      await think('ag_qa', 900, [3000, 6000]);
      FINDINGS.forEach((f) => log({ kind: 'alert', from: 'Auditor de calidad', to: 'hallazgo', text: `${f.title}: ${f.detail}` }));
      setResult('ag_qa', `${FINDINGS.length} hallazgos enviados a validación humana.`);
      await hop('ag_qa', 'user', `Validación humana requerida: ${FINDINGS.length} hallazgos`);
      const decisions = await askValidation(FINDINGS);
      const approved = FINDINGS.filter((f) => decisions[f.id]);
      FINDINGS.forEach((f) => {
        trace.decide(f, decisions[f.id]);
        trace.setDoc(f.doc, decisions[f.id] ? 'Corregido · validado' : 'Observado');
      });
      await hop('user', 'ag_qa', `${approved.length} correcciones aprobadas, ${FINDINGS.length - approved.length} rechazadas`, { color: WHITE });
      await hop('ag_qa', 'ag_cambios', 'Registra las correcciones y crea una nueva versión');
      await hop('ag_qa', 'ag_db', 'Publica los datos curados y validados');
      trace.setAll('Publicado', ['Extraído', 'Normalizado', 'Conciliado']);
      setResult('ag_db', `Datos del periodo publicados: ${fmt(totalRecords)} registros curados.`);

      // ---- Capa 3: indicadores ----
      await Promise.all(
        ['ag_fin', 'ag_com', 'ag_cli'].map(async (id, i) => {
          await sleep(i * 300);
          await hop('ag_db', id, 'Calcula los indicadores del periodo');
          await think(id, 900, [4000, 8000]);
          setResult(id, CONCLUSIONS[id]);
          await hop(id, 'ag_orq', CONCLUSIONS[id], { color: WHITE, kind: 'live' });
        }),
      );
      await think('ag_orq', 700, [6000, 9000]);
      await hop('ag_orq', 'ag_log', 'Guarda la trazabilidad del ciclo');
      await hop('ag_orq', 'user', 'Dashboard ejecutivo actualizado con las conclusiones de los analistas', { color: WHITE, kind: 'final' });
      onDone({ decisions, approved: approved.length, total: FINDINGS.length, records: totalRecords });
    } finally {
      running = false;
    }
  }

  return { run, isRunning: () => running };
}
