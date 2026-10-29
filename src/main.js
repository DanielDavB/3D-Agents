import { createStore, loadState, uid, OFFICE_COLORS } from './state.js';
import { createWorld } from './world.js';
import { createSim } from './sim.js';
import { PROVIDERS, provider, isConnected } from './connectors.js';
import { createBrain, BRAIN_MODELS } from './brain.js';
import { createPipeline } from './pipeline.js';
import { renderSummary, renderTrace, renderUsage } from './dashboard.js';
import { PROJECT, SOURCES, DOCUMENTS } from './project.js';
import { backend } from './backend.js';
import { createLive } from './live.js';
import { renderLiveSummary, renderLiveFindings, renderLiveFiles, renderLiveUsage } from './dashboard-live.js';
import { setupThemes } from './themes.js';

const $ = (s) => document.querySelector(s);
const esc = (s = '') => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

const store = createStore(loadState());
let selection = null; // { type: 'agent'|'office'|'source', id }

// Registro compartido del MVP: consumo de tokens, trazabilidad y últimos resultados por agente
const usage = new Map(); // agentId -> { input, output, usd, calls, modes:Set }
const results = new Map(); // agentId -> { text, time }
const clock = () => new Date().toLocaleTimeString('es', { hour12: false });
function addUsage(agentId, u, usd, mode) {
  if (!agentId) return;
  const cur = usage.get(agentId) || { input: 0, output: 0, usd: 0, calls: 0, modes: new Set() };
  cur.input += u.input_tokens || 0;
  cur.output += u.output_tokens || 0;
  cur.usd += usd;
  cur.calls += 1;
  cur.modes.add(mode);
  usage.set(agentId, cur);
  refreshPanels();
}
function setResult(agentId, text) {
  results.set(agentId, { text, time: clock() });
  if (selection?.id === agentId) renderDetails();
}
const trace = {
  rows: [],
  decisions: [],
  reset() {
    this.rows = [];
    this.decisions = [];
    refreshPanels();
  },
  add(r) {
    this.rows.push({ ...r, time: clock() });
    refreshPanels();
  },
  setAll(status, onlyFrom) {
    this.rows.forEach((r) => (!onlyFrom || onlyFrom.includes(r.status)) && Object.assign(r, { status, time: clock() }));
    refreshPanels();
  },
  setDoc(doc, status) {
    this.rows.filter((r) => r.doc === doc).forEach((r) => Object.assign(r, { status, time: clock() }));
    refreshPanels();
  },
  decide(f, ok) {
    this.decisions.push({ ...f, ok, time: clock() });
  },
};

const world = createWorld($('#scene'), { onSelect: (sel) => select(sel, true) });
const sim = createSim({ store, world, log });
let spent = 0;
const brain = createBrain({
  store,
  world,
  log,
  bump: (id, key) => sim.bump(id, key),
  onUsage: (usd, u, agentId) => {
    spent += usd;
    addUsage(agentId, u, usd, 'real');
    renderBrainStatus();
  },
  onResult: setResult,
});

// ---------- feed ----------
const feed = $('#feed');
function log(entry) {
  const li = document.createElement('li');
  li.className = entry.kind;
  if (entry.color) li.style.setProperty('--c', entry.color);
  const time = new Date().toLocaleTimeString('es', { hour12: false });
  if (entry.kind === 'info') {
    li.innerHTML = `<div class="meta"><span>sistema</span><span>${time}</span></div><div class="txt">${esc(entry.text)}</div>`;
  } else {
    const arrow = ['task', 'http'].includes(entry.kind) ? '→' : entry.kind === 'brain' ? '·' : '↩';
    const tag =
      { live: ' · resultado', error: ' · error', brain: ' · razonando', final: ' · respuesta final', http: ' · HTTP', 'http-reply': ' · HTTP', doc: ' · documentos', alert: ' · requiere validación' }[entry.kind] || '';
    li.innerHTML = `<div class="meta"><span><span class="who">${esc(entry.from)}</span> ${arrow} ${esc(entry.to)}${tag}</span><span>${time}</span></div><div class="txt">${esc(entry.text)}</div>`;
  }
  feed.prepend(li);
  while (feed.children.length > 80) feed.lastChild.remove();
}

// ---------- árbol de organización ----------
function renderTree() {
  const root = store.rootOffice();
  const officeNode = (o) => {
    const agents = store.agentsIn(o.id);
    const kids = store.children(o.id);
    const sel = (t, id) => (selection?.type === t && selection.id === id ? ' selected' : '');
    return `<div class="tree-office">
      <div class="tree-row office${sel('office', o.id)}" data-office="${o.id}">
        <span class="dot" style="background:${o.color}"></span>${esc(o.name)}<span class="count">${agents.length}</span>
      </div>
      <div class="tree-children">
        ${agents
          .map((a) => {
            const p = provider(a.provider);
            return `<div class="tree-row agent${sel('agent', a.id)}" data-agent="${a.id}"><span class="dot" style="background:${p.color}"></span>${esc(a.name)}<small>${p.short}</small></div>`;
          })
          .join('')}
        ${kids.map(officeNode).join('')}
      </div>
    </div>`;
  };
  $('#tree').innerHTML = root ? officeNode(root) : '';
}
$('#tree').addEventListener('click', (e) => {
  const row = e.target.closest('.tree-row');
  if (!row) return;
  select(row.dataset.agent ? { type: 'agent', id: row.dataset.agent } : { type: 'office', id: row.dataset.office }, true);
});


// ---------- selección y panel de detalles ----------
function select(sel, fly) {
  if (sel && sel.type === 'agent' && !store.agent(sel.id)) sel = null;
  if (sel && sel.type === 'office' && !store.office(sel.id)) sel = null;
  if (sel && sel.type === 'source' && !SOURCES.some((s) => s.id === sel.id)) sel = null;
  selection = sel;
  world.setSelected(sel?.type === 'agent' ? sel.id : null);
  if (fly) world.focus(sel);
  renderTree();
  renderDetails();
}

function renderDetails() {
  const box = $('#details');
  if (!selection) {
    box.hidden = true;
    return;
  }
  box.hidden = false;
  box.style.position = 'relative';
  if (selection.type === 'source') {
    const src = SOURCES.find((s) => s.id === selection.id);
    const agent = store.agent(src.agentId);
    const docs = trace.rows.filter((r) => r.source === src.name);
    box.innerHTML = `
      <button class="icon-btn close" data-act="close">✕</button>
      <span class="pill">Fuente de datos</span>
      <h3>${esc(src.name)}</h3>
      <div class="sub">${esc(src.desc)} · la lee ${agent ? `<a href="#" data-agent="${agent.id}">${esc(agent.name)}</a>` : 'ningún agente'}</div>
      <div class="stats">
        <div class="stat"><b>${(DOCUMENTS[src.id] || []).length}</b><span>Documentos por ciclo</span></div>
        <div class="stat"><b>${docs.reduce((n, d) => n + d.records, 0)}</b><span>Registros este ciclo</span></div>
      </div>
      <dl class="kv">${(docs.length ? docs : (DOCUMENTS[src.id] || []).map((d) => ({ doc: d.name, status: 'Pendiente' })))
        .map((d) => `<dt>${esc(d.status)}</dt><dd>${esc(d.doc)}</dd>`)
        .join('')}</dl>
      <p class="hint">En el MVP la conexión es simulada. En producción, este agente extrae la información de ${esc(src.name)} de forma automática y programada.</p>`;
    return;
  }
  if (selection.type === 'agent') {
    const a = store.agent(selection.id);
    const p = provider(a.provider);
    const office = store.office(a.officeId);
    const st = sim.stats(a.id);
    const conf = p.fields
      .filter((f) => a.config?.[f.key])
      .map((f) => `<dt>${esc(f.label)}</dt><dd>${f.type === 'password' ? '••••••' + esc(String(a.config[f.key]).slice(-4)) : esc(String(a.config[f.key]).slice(0, 80))}</dd>`)
      .join('');
    const connected = isConnected(a);
    const hint = !brain.isReady()
      ? 'Modo demo: respuesta simulada. Configura el ⚙ Cerebro para que trabaje de verdad.'
      : connected
        ? `Envío real: ${a.provider === 'claude' ? 'Claude responde con su rol y puede llamar APIs' : 'se llama a su endpoint'}.`
        : 'Sin endpoint propio: la IA simula su rol (edítalo para conectarlo de verdad).';
    box.innerHTML = `
      <button class="icon-btn close" data-act="close">✕</button>
      <span class="pill"><i style="width:7px;height:7px;border-radius:50%;background:${p.color}"></i>${p.label}</span>
      <span class="pill light">${connected ? 'Conectado' : 'Simulado por IA'}</span>
      <h3>${esc(a.name)}</h3>
      <div class="sub">${esc(a.role || 'Sin descripción')}</div>
      <div class="stats">
        <div class="stat"><b>${st.sent}</b><span>Enviados</span></div>
        <div class="stat"><b>${st.received}</b><span>Recibidos</span></div>
      </div>
      ${results.has(a.id) ? `<div class="result"><span>Último resultado · ${results.get(a.id).time}</span><p>${esc(results.get(a.id).text.slice(0, 400))}</p></div>` : ''}
      <dl class="kv">
        <dt>Oficina</dt><dd>${esc(office?.name || '-')}</dd>
        ${usage.has(a.id) ? `<dt>Tokens</dt><dd>${(usage.get(a.id).input + usage.get(a.id).output).toLocaleString('es-MX')} · $${usage.get(a.id).usd.toFixed(4)}</dd>` : ''}
        ${conf || '<dt>Config</dt><dd>— (sin configurar)</dd>'}
      </dl>
      <textarea id="msgText" placeholder="Escribe una instrucción para ${esc(a.name)}…"></textarea>
      <div class="row">
        <button class="btn accent" data-act="send">Enviar como “Tú”</button>
        <button class="btn" data-act="edit">Editar</button>
        <button class="btn danger" data-act="delete">Eliminar</button>
      </div>
      <p class="hint">${hint}</p>`;
  } else {
    const o = store.office(selection.id);
    const agents = store.agentsIn(o.id);
    const parent = store.office(o.parentId);
    const isRoot = !o.parentId;
    box.innerHTML = `
      <button class="icon-btn close" data-act="close">✕</button>
      <span class="pill"><i style="width:7px;height:7px;border-radius:50%;background:${o.color}"></i>${isRoot ? 'Oficina principal' : 'Oficina'}</span>
      <h3>${esc(o.name)}</h3>
      <div class="sub">${isRoot ? 'Centro de mando' : `Depende de ${esc(parent?.name || '-')}`}</div>
      <div class="stats">
        <div class="stat"><b>${agents.length}</b><span>Agentes</span></div>
        <div class="stat"><b>${store.children(o.id).length}</b><span>Sub-oficinas</span></div>
      </div>
      <div class="agents-mini">
        ${agents.map((a) => `<button class="btn" data-agent="${a.id}"><span style="color:${provider(a.provider).color}">●</span> ${esc(a.name)} <small style="color:var(--muted)">· ${provider(a.provider).short}</small></button>`).join('') || '<small style="color:var(--muted)">Sin agentes todavía</small>'}
      </div>
      <div class="row">
        <button class="btn accent" data-act="add-agent">+ Agente aquí</button>
        <button class="btn" data-act="add-sub">+ Sub-oficina</button>
        <button class="btn" data-act="edit">Editar</button>
        ${isRoot ? '' : '<button class="btn danger" data-act="delete">Eliminar</button>'}
      </div>`;
  }
}

$('#details').addEventListener('click', (e) => {
  const agentBtn = e.target.closest('[data-agent]');
  if (agentBtn) {
    e.preventDefault();
    return select({ type: 'agent', id: agentBtn.dataset.agent }, true);
  }
  const act = e.target.closest('[data-act]')?.dataset.act;
  if (!act || !selection) return;
  const { type, id } = selection;
  if (act === 'close') return select(null, false);
  if (type === 'agent') {
    const a = store.agent(id);
    if (act === 'send') {
      const text = $('#msgText').value.trim() || 'Dame un estado rápido de tu trabajo';
      $('#msgText').value = '';
      const done = () => selection?.id === a.id && renderDetails();
      if (brain.isReady()) {
        try {
          brain.direct(a, text).catch(() => {}).finally(done);
        } catch (err) {
          log({ kind: 'error', from: 'Sistema', to: a.name, text: err.message });
        }
      } else sim.sendTask('user', a.id, text).then(done);
    }
    if (act === 'edit') openAgentDialog(a);
    if (act === 'delete' && confirm(`¿Eliminar el agente "${a.name}"?`)) {
      store.removeAgent(id);
      select(null, false);
    }
  } else {
    const o = store.office(id);
    if (act === 'add-agent') openAgentDialog(null, o.id);
    if (act === 'add-sub') openOfficeDialog(null, o.id);
    if (act === 'edit') openOfficeDialog(o);
    if (act === 'delete' && confirm(`¿Eliminar "${o.name}"? Sus agentes pasan a la oficina superior.`)) {
      store.removeOffice(id);
      select(null, false);
    }
  }
});

// ---------- diálogo de oficina ----------
const officeDialog = $('#officeDialog');
const officeForm = $('#officeForm');
let editingOffice = null;

function setSwatch(color) {
  officeForm.elements.color.value = color;
  $('#swatches').innerHTML = OFFICE_COLORS.map(
    (c) => `<button type="button" data-c="${c}" style="background:${c}" class="${c.toLowerCase() === color.toLowerCase() ? 'on' : ''}" title="${c}"></button>`,
  ).join('');
}
$('#swatches').addEventListener('click', (e) => {
  const b = e.target.closest('[data-c]');
  if (b) setSwatch(b.dataset.c);
});

function openOfficeDialog(office, parentId) {
  editingOffice = office;
  const { offices } = store.get();
  const descendants = new Set();
  if (office) {
    const walk = (id) => offices.filter((o) => o.parentId === id).forEach((o) => (descendants.add(o.id), walk(o.id)));
    walk(office.id);
  }
  $('#officeTitle').textContent = office ? 'Editar oficina' : 'Nueva oficina';
  const isRoot = office && !office.parentId;
  officeForm.elements.parentId.innerHTML = isRoot
    ? '<option value="">— (es la oficina principal)</option>'
    : offices.filter((o) => o.id !== office?.id && !descendants.has(o.id)).map((o) => `<option value="${o.id}">${esc(o.name)}</option>`).join('');
  officeForm.elements.parentId.disabled = !!isRoot;
  officeForm.elements.name.value = office?.name || '';
  officeForm.elements.parentId.value = office?.parentId || parentId || store.rootOffice().id;
  setSwatch(office?.color || OFFICE_COLORS[offices.length % OFFICE_COLORS.length]);
  officeDialog.returnValue = '';
  officeDialog.showModal();
}
officeDialog.addEventListener('close', () => {
  if (officeDialog.returnValue !== 'ok') return;
  const o = {
    ...(editingOffice || { id: uid('off') }),
    name: officeForm.elements.name.value.trim() || 'Oficina',
    color: officeForm.elements.color.value,
    parentId: editingOffice && !editingOffice.parentId ? null : officeForm.elements.parentId.value,
  };
  store.upsertOffice(o);
  log({ kind: 'info', text: `${editingOffice ? 'Oficina actualizada' : 'Nueva oficina'}: ${o.name}` });
  select({ type: 'office', id: o.id }, true);
});

// ---------- diálogo de agente ----------
const agentDialog = $('#agentDialog');
const agentForm = $('#agentForm');
let editingAgent = null;
let chosenProvider = 'claude';

function renderProviderPicker() {
  $('#providerPicker').innerHTML = Object.entries(PROVIDERS)
    .map(([id, p]) => `<button type="button" data-p="${id}" class="${id === chosenProvider ? 'on' : ''}" style="--c:${p.color}"><i style="background:${p.color}"></i>${p.short}</button>`)
    .join('');
  const cfg = editingAgent?.provider === chosenProvider ? editingAgent.config || {} : {};
  $('#providerFields').innerHTML = provider(chosenProvider)
    .fields.map((f) => {
      const v = esc(cfg[f.key] ?? f.default ?? '');
      const input =
        f.type === 'textarea'
          ? `<textarea name="cfg_${f.key}" rows="2" placeholder="${esc(f.placeholder)}">${v}</textarea>`
          : f.type === 'select'
            ? `<select name="cfg_${f.key}">${f.options.map((o) => `<option ${o === (cfg[f.key] ?? f.default) ? 'selected' : ''}>${o}</option>`).join('')}</select>`
            : `<input name="cfg_${f.key}" type="${f.type}" placeholder="${esc(f.placeholder)}" value="${v}" autocomplete="off" />`;
      return `<label>${esc(f.label)} ${input}</label>`;
    })
    .join('');
}
$('#providerPicker').addEventListener('click', (e) => {
  const b = e.target.closest('[data-p]');
  if (!b) return;
  chosenProvider = b.dataset.p;
  renderProviderPicker();
});

function openAgentDialog(agent, officeId) {
  editingAgent = agent;
  chosenProvider = agent?.provider || 'claude';
  $('#agentTitle').textContent = agent ? 'Editar agente' : 'Nuevo agente';
  agentForm.elements.officeId.innerHTML = store.get().offices.map((o) => `<option value="${o.id}">${esc(o.name)}</option>`).join('');
  agentForm.elements.name.value = agent?.name || '';
  agentForm.elements.role.value = agent?.role || '';
  agentForm.elements.officeId.value = agent?.officeId || officeId || (selection?.type === 'office' ? selection.id : store.rootOffice().id);
  renderProviderPicker();
  agentDialog.returnValue = '';
  agentDialog.showModal();
}
agentDialog.addEventListener('close', () => {
  if (agentDialog.returnValue !== 'ok') return;
  const config = {};
  for (const f of provider(chosenProvider).fields) {
    const v = agentForm.elements[`cfg_${f.key}`]?.value.trim();
    if (v) config[f.key] = v;
  }
  const a = {
    ...(editingAgent || { id: uid('ag') }),
    name: agentForm.elements.name.value.trim() || 'Agente',
    role: agentForm.elements.role.value.trim(),
    officeId: agentForm.elements.officeId.value,
    provider: chosenProvider,
    config,
  };
  store.upsertAgent(a);
  log({ kind: 'info', text: `${editingAgent ? 'Agente actualizado' : 'Nuevo agente'}: ${a.name} (${provider(a.provider).label})` });
  select({ type: 'agent', id: a.id }, true);
  if (!editingAgent) {
    // Saludo de bienvenida: el orquestador le da la bienvenida
    const boss = store.agentsIn(store.rootOffice().id)[0];
    if (boss && boss.id !== a.id) setTimeout(() => sim.sendTask(boss.id, a.id, `Bienvenido al equipo, ${a.name} 👋`), 600);
  }
});

// ---------- barra superior ----------
const btnPlay = $('#btnPlay');
btnPlay.onclick = () => {
  sim.setRunning(!sim.isRunning());
  btnPlay.textContent = sim.isRunning() ? '⏸ Auto' : '▶ Auto';
};
$('#speed').onchange = (e) => sim.setSpeed(Number(e.target.value));
$('#btnAddOffice').onclick = () => openOfficeDialog(null, selection?.type === 'office' ? selection.id : undefined);
$('#btnAddAgent').onclick = () => openAgentDialog(null);
$('#btnClearFeed').onclick = () => (feed.innerHTML = '');
$('#btnToggleSidebar').onclick = () => {
  const sb = $('#sidebar');
  if (window.matchMedia('(max-width: 900px)').matches) sb.classList.toggle('expanded');
  else sb.classList.toggle('collapsed');
};

const closeMenu = () => $('.menu').removeAttribute('open');
$('#btnOverview').onclick = () => (closeMenu(), select(null, true), world.setAutoRotate(true));
$('#btnExport').onclick = () => {
  closeMenu();
  const blob = new Blob([JSON.stringify(store.get(), null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  Object.assign(document.createElement('a'), { href: url, download: '3d-agents.json' }).click();
  URL.revokeObjectURL(url);
};
$('#btnImport').onclick = () => (closeMenu(), $('#importFile').click());
$('#importFile').onchange = async (e) => {
  const file = e.target.files[0];
  if (!file) return;
  try {
    const data = JSON.parse(await file.text());
    if (!Array.isArray(data.offices) || !Array.isArray(data.agents)) throw new Error('Formato inválido');
    store.set(data);
    select(null, true);
    log({ kind: 'info', text: `Importado: ${data.offices.length} oficinas, ${data.agents.length} agentes` });
  } catch (err) {
    alert(`No se pudo importar: ${err.message}`);
  }
  e.target.value = '';
};
$('#btnReset').onclick = () => {
  closeMenu();
  if (!confirm('¿Restablecer la organización de ejemplo? Se perderán tus cambios.')) return;
  store.reset();
  select(null, true);
};

// ---------- cerebro ----------
const cmdForm = $('#cmdForm');
const cmdInput = $('#cmdInput');
function renderBrainStatus() {
  const st = brain.settings();
  const ready = brain.isReady();
  $('#brainStatus').innerHTML = ready
    ? `<span class="dot on"></span>${esc((BRAIN_MODELS[st.model]?.label || st.model).split(' · ')[0])} · $${spent.toFixed(4)}`
    : '<span class="dot"></span>Sin configurar';
  cmdInput.placeholder = ready
    ? 'Dale un objetivo a tu equipo… ej. "Investiga el clima en CDMX y que Marketing escriba un post"'
    : 'Configura el ⚙ Cerebro para dar órdenes reales a tu equipo';
}
cmdForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const goal = cmdInput.value.trim();
  if (!goal) return;
  if (!brain.isReady()) return openBrainDialog();
  if (brain.isBusy()) return log({ kind: 'info', text: 'El cerebro sigue trabajando, espera a que termine.' });
  cmdInput.value = '';
  sim.setRunning(false);
  btnPlay.textContent = '▶ Auto';
  cmdForm.classList.add('busy');
  world.focus(null);
  try {
    await brain.run(goal);
  } catch (err) {
    log({ kind: 'error', from: 'Cerebro', to: 'Tú', text: err.message });
  } finally {
    cmdForm.classList.remove('busy');
    renderDetails();
  }
});

const brainDialog = $('#brainDialog');
const brainForm = $('#brainForm');
brainForm.elements.model.innerHTML = Object.entries(BRAIN_MODELS)
  .map(([id, m]) => `<option value="${id}">${esc(m.label)} ($${m.input}/$${m.output} por millón de tokens)</option>`)
  .join('');
function openBrainDialog() {
  const st = brain.settings();
  for (const k of ['apiKey', 'model', 'proxyUrl', 'proxyToken', 'maxSteps']) brainForm.elements[k].value = st[k] ?? '';
  brainDialog.returnValue = '';
  brainDialog.showModal();
}
brainDialog.addEventListener('close', () => {
  if (brainDialog.returnValue !== 'ok') return;
  const f = brainForm.elements;
  brain.setSettings({
    apiKey: f.apiKey.value.trim(),
    model: f.model.value,
    proxyUrl: f.proxyUrl.value.trim(),
    proxyToken: f.proxyToken.value.trim(),
    maxSteps: Math.min(20, Math.max(1, Number(f.maxSteps.value) || 8)),
  });
  renderBrainStatus();
  renderDetails();
  if (brain.isReady()) {
    sim.setRunning(false);
      btnPlay.textContent = '▶ Auto';
    log({ kind: 'info', text: 'Cerebro configurado ✔ Escribe un objetivo en la barra inferior.' });
  }
});
$('#btnBrain').onclick = openBrainDialog;
$('#brainStatus').onclick = openBrainDialog;
renderBrainStatus();

// ---------- MVP: ciclo de datos, dashboard y validación humana ----------
let dashData = { ready: false, quality: { score: 0, approved: 0, total: 0 } };
let tab = 'summary';
const dash = $('#dash');
$('#dashTitle').textContent = `${PROJECT.client} · ${PROJECT.period}`;
function refreshPanels() {
  if (dash.hidden) return;
  const body = $('#dashBody');
  dash.querySelector('[data-tab="findings"]').hidden = !liveState;
  if (liveState) {
    if (tab === 'summary') renderLiveSummary(body, liveState, { store });
    if (tab === 'findings') renderLiveFindings(body, liveState);
    if (tab === 'trace') renderLiveFiles(body, { ...liveState, archivos: liveFiles || liveState.archivos }, { store });
    if (tab === 'usage') renderLiveUsage(body, liveState, { salud });
    return;
  }
  if (tab === 'findings') tab = 'summary';
  if (tab === 'summary') renderSummary(body, { store, ...dashData });
  if (tab === 'trace') renderTrace(body, { rows: trace.rows, decisions: trace.decisions, store });
  if (tab === 'usage') renderUsage(body, { usage, store });
}
function openDash(which = tab) {
  tab = which;
  dash.hidden = false;
  dash.querySelectorAll('[data-tab]').forEach((b) => b.classList.toggle('on', b.dataset.tab === tab));
  refreshPanels();
  if (liveState && tab === 'trace') loadFiles();
}
dash.querySelector('.tabs').addEventListener('click', (e) => {
  const b = e.target.closest('[data-tab]');
  if (b) openDash(b.dataset.tab);
});
$('#btnDash').onclick = () => (dash.hidden ? openDash() : (dash.hidden = true));

// Validación humana: el auditor espera tu decisión antes de publicar
const validationDialog = $('#validationDialog');
function askValidation(findings) {
  $('#findings').innerHTML = findings
    .map(
      (f) => `<label class="finding"><input type="checkbox" name="${f.id}" checked />
        <div><b>${esc(f.title)}</b><span>${esc(f.detail)}</span><em>Corrección: ${esc(f.fix)}</em></div></label>`,
    )
    .join('');
  return new Promise((resolve) => {
    validationDialog.addEventListener(
      'close',
      () => resolve(Object.fromEntries(findings.map((f) => [f.id, $('#validationForm').elements[f.id].checked]))),
      { once: true },
    );
    validationDialog.showModal();
  });
}

const pipeline = createPipeline({
  store,
  world,
  log,
  bump: (id, key) => sim.bump(id, key),
  usage: addUsage,
  trace,
  setResult,
  askValidation,
  onDone: ({ approved, total }) => {
    dashData = { ready: true, quality: { score: 99.8 - (total - approved) * 0.6, approved, total } };
    log({ kind: 'info', text: `✔ Ciclo completado: ${approved}/${total} correcciones validadas. Dashboard actualizado.` });
    openDash('summary');
  },
});
async function runDemo() {
  if (pipeline.isRunning()) return log({ kind: 'info', text: 'El ciclo ya está en curso.' });
  liveState = null;
  live.stop();
  $('#dashFoot').textContent = 'Datos de ejemplo para el MVP · no corresponden a información real de Treve.';
  $('#intro').hidden = true;
  dash.hidden = true;
  sim.setRunning(false);
  btnPlay.textContent = '▶ Auto';
  select(null, false);
  world.focus(null);
  $('#btnCycle').disabled = true;
  try {
    await pipeline.run();
  } finally {
    $('#btnCycle').disabled = false;
  }
}
$('#btnCycle').onclick = runCycle;

// ---------- motor real (Supabase) ----------
let liveState = null; // último estado de la corrida real
let liveFiles = null; // archivos con enlaces firmados
let salud = null; // integraciones del orquestador
const nameOf = (id) => {
  if (!id) return '';
  if (id === 'user') return 'Tú';
  if (id === 'external') return 'APIs externas';
  if (id.startsWith('src:')) return SOURCES.find((s) => `src:${s.id}` === id)?.name || id.slice(4);
  return store.agent(id)?.name || id;
};
const live = createLive({
  store, world, log, setResult,
  bump: (id, key) => sim.bump(id, key),
  nameOf,
  onUpdate: (st) => {
    liveState = st;
    updateProgress(st);
    refreshPanels();
  },
});

// Barra de progreso del ciclo (en el tema Videojuego es la barra de XP)
const PASO = {
  extraer: 'Extracción', mercado: 'APIs públicas', normalizar: 'Normalización', conciliar: 'Conciliación', juzgar: 'Juicio',
  almacenar: 'Almacén', indicadores: 'Indicadores', llenar_excel: 'Reporte Excel', conclusiones: 'Conclusiones', notificar: 'Alertas', cierre: 'Cierre',
};
let progressTimer = null;
function updateProgress(st) {
  const box = $('#progress');
  const ts = st.tareas || [];
  if (!ts.length) return;
  const done = ts.filter((t) => ['hecha', 'error', 'cancelada'].includes(t.estado)).length;
  const now = ts.find((t) => t.estado === 'en_curso') || ts.find((t) => t.estado === 'pendiente');
  const estado = st.corrida.estado;
  clearTimeout(progressTimer);
  box.hidden = false;
  $('#progressFill').style.width = `${Math.round((done / ts.length) * 100)}%`;
  $('#progressCount').textContent = `${done}/${ts.length}`;
  $('#progressLabel').textContent =
    estado === 'en_revision' ? 'Esperando tu validación' : estado === 'terminada' ? 'Ciclo completado' : estado === 'error' ? 'Ciclo detenido' : `Paso: ${PASO[now?.paso] || 'preparando'}`;
  if (estado !== 'en_curso') progressTimer = setTimeout(() => (box.hidden = true), 9000);
}

async function checkEngine() {
  try {
    salud = await backend.salud();
    const it = salud.integraciones;
    $('#engineStatus').innerHTML = `<span class="state ok">✓ Orquestador en línea</span> Cerebro: ${it.openai ? esc(it.openai) : 'plantillas'} · JEV: ${it.jev ? 'conectado' : 'reglas fijas'} · APIs públicas: tipo de cambio y festivos`;
    return true;
  } catch (err) {
    salud = null;
    $('#engineStatus').innerHTML = `<span class="state warn">! Orquestador no disponible</span> ${esc(err.message)}. Puedes usar el modo Demo.`;
    $('#runForm').elements.modo.value = 'demo';
    return false;
  }
}

const runDialog = $('#runDialog');
async function runCycle() {
  if (pipeline.isRunning() || live.current()?.state?.corrida?.estado === 'en_curso') return log({ kind: 'info', text: 'El ciclo ya está en curso.' });
  runDialog.returnValue = '';
  runDialog.showModal();
  checkEngine();
}
runDialog.addEventListener('close', () => {
  if (runDialog.returnValue !== 'ok') return;
  const f = $('#runForm').elements;
  if (f.modo.value === 'demo') return runDemo();
  runLive({ periodo: f.periodo.value || '2026-09', version: Number(f.version.value), escenario: f.escenario.value });
});

async function runLive(opciones) {
  $('#intro').hidden = true;
  dash.hidden = true;
  sim.setRunning(false);
  btnPlay.textContent = '▶ Auto';
  select(null, false);
  world.focus(null);
  trace.reset();
  results.clear();
  liveFiles = null;
  $('#btnCycle').disabled = true;
  $('#dashTitle').textContent = `${PROJECT.client} · ${opciones.periodo}`;
  $('#dashFoot').textContent = 'Datos ficticios del simulador · procesados por el orquestador real en Supabase.';
  log({ kind: 'info', text: `▶ Ciclo real · ${opciones.periodo} · Compaq v${opciones.version} · escenario ${opciones.escenario}` });
  try {
    const { done } = await live.start(opciones);
    await afterLive(await done);
  } catch (err) {
    log({ kind: 'error', from: 'Sistema', to: 'Tú', text: `No se pudo completar el ciclo real: ${err.message}` });
  } finally {
    $('#btnCycle').disabled = false;
  }
}

async function afterLive(st) {
  if (!st) return;
  liveState = st;
  // No cambia la pestaña si ya estás viendo el dashboard
  const show = (t) => (dash.hidden ? openDash(t) : refreshPanels());
  if (st.corrida.estado === 'en_revision') {
    show('summary');
    openLiveValidation();
  } else if (st.corrida.estado === 'terminada') {
    log({ kind: 'info', text: '✔ Versión final publicada. Dashboard actualizado con datos validados.' });
    show('summary');
  } else show('trace');
}

async function loadFiles() {
  if (!liveState) return;
  try {
    const st = await backend.estado(liveState.corrida.id, Number.MAX_SAFE_INTEGER, true);
    liveFiles = st.archivos;
    liveState = { ...liveState, ...st, eventos: [] };
    if (tab === 'trace') refreshPanels();
  } catch {
    /* sin enlaces por ahora */
  }
}

// Validación humana sobre los hallazgos reales
function openLiveValidation() {
  const pend = (liveState?.hallazgos || []).filter((h) => h.estado === 'en_revision');
  if (!pend.length) return;
  $('#findings').innerHTML = pend
    .map(
      (h) => `<label class="finding"><input type="checkbox" name="${h.id}" checked />
        <div><b>${esc(h.tipo.replace(/_/g, ' '))}${h.monto != null ? ` · $${Number(h.monto).toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` : ''}</b><span>${esc(h.descripcion)}</span>
        <em>Decisión: ${h.decision?.fuente === 'jev' ? 'JEV' : 'reglas'} pide validación humana (${Math.round((h.decision?.confidence || 0) * 100)} %). Marcado = confirmar · sin marcar = descartar</em></div></label>`,
    )
    .join('');
  validationDialog.addEventListener(
    'close',
    async () => {
      const form = $('#validationForm').elements;
      await resolveMany(pend.map((h) => [h.id, form[h.id].checked ? 'confirmado' : 'descartado']));
    },
    { once: true },
  );
  validationDialog.showModal();
}

async function resolveMany(list) {
  let pendientes = null;
  for (const [id, decision] of list) {
    try {
      ({ pendientes } = await backend.resolver(id, decision, 'Validado desde el visualizador'));
    } catch (err) {
      log({ kind: 'error', from: 'Sistema', to: 'Auditor de calidad', text: err.message });
    }
  }
  if (pendientes === 0) {
    $('#btnCycle').disabled = true;
    try {
      await afterLive(await live.resume());
    } finally {
      $('#btnCycle').disabled = false;
    }
  } else if (liveState) {
    const st = await backend.estado(liveState.corrida.id, Number.MAX_SAFE_INTEGER).catch(() => null);
    if (st) liveState = { ...liveState, ...st, eventos: [] };
    refreshPanels();
  }
}

$('#dashBody').addEventListener('click', (e) => {
  const b = e.target.closest('[data-resolver]');
  if (b) {
    b.disabled = true;
    resolveMany([[b.dataset.resolver, b.dataset.decision]]);
  }
  if (e.target.closest('[data-act="open-validation"]')) openLiveValidation();
});
document.addEventListener('click', (e) => {
  const act = e.target.closest('[data-act]')?.dataset.act;
  if (act === 'run-cycle') runCycle();
  if (act === 'close-intro') $('#intro').hidden = true;
  if (act === 'close-dash') dash.hidden = true;
});

// ---------- arranque ----------
setupThemes({ world, onChange: () => refreshPanels() });
// Si alguien ya lanzó un ciclo real hace poco, únete para verlo en vivo
checkEngine().then((ok) => {
  const u = salud?.ultima;
  if (ok && u?.estado === 'en_curso' && Date.now() - Date.parse(u.created_at) < 5 * 60e3) {
    log({ kind: 'info', text: `Hay un ciclo real en curso (${u.periodo}): te unes en vivo.` });
    $('#intro').hidden = true;
    live.follow(u.id).then(afterLive).catch(() => {});
  }
});
store.subscribe((state) => {
  world.rebuild(state, SOURCES);
  renderTree();
  renderDetails();
});
world.rebuild(store.get(), SOURCES);
renderTree();
log({
  kind: 'info',
  text: brain.isReady()
    ? 'Cerebro listo 🧠 Ejecuta el ciclo de datos o pregúntale a la oficina en la barra inferior.'
    : 'Bienvenido al MVP 👋 Ejecuta el ciclo de datos para ver a los agentes consolidar la información.',
});

let last = performance.now();
(function loop(now) {
  sim.tick(Math.min((now - last) / 1000, 0.1));
  last = now;
  requestAnimationFrame(loop);
})(last);
