import { createStore, loadState, uid, OFFICE_COLORS } from './state.js';
import { createWorld } from './world.js';
import { createSim } from './sim.js';
import { PROVIDERS, provider, isConnected } from './connectors.js';
import { createBrain, BRAIN_MODELS } from './brain.js';

const $ = (s) => document.querySelector(s);
const esc = (s = '') => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

const store = createStore(loadState());
let selection = null; // { type: 'agent'|'office', id }

const world = createWorld($('#scene'), { onSelect: (sel) => select(sel, true) });
const sim = createSim({ store, world, log });
let spent = 0;
const brain = createBrain({
  store,
  world,
  log,
  bump: (id, key) => sim.bump(id, key),
  onUsage: (usd) => {
    spent += usd;
    renderBrainStatus();
  },
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
      { live: ' · real', error: ' · error', brain: ' · razonando', final: ' · respuesta final', http: ' · HTTP', 'http-reply': ' · HTTP' }[entry.kind] || '';
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
            return `<div class="tree-row agent${sel('agent', a.id)}" data-agent="${a.id}"><span class="dot" style="background:${p.color}"></span>${esc(a.name)}<small>${p.short}${a.provider !== 'claude' && isConnected(a) ? ' ●' : ''}</small></div>`;
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

$('#legend').innerHTML = Object.values(PROVIDERS)
  .map((p) => `<span><i style="background:${p.color}"></i>${p.short}</span>`)
  .join('');

// ---------- selección y panel de detalles ----------
function select(sel, fly) {
  if (sel && sel.type === 'agent' && !store.agent(sel.id)) sel = null;
  if (sel && sel.type === 'office' && !store.office(sel.id)) sel = null;
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
      <dl class="kv">
        <dt>Oficina</dt><dd>${esc(office?.name || '-')}</dd>
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
  if (agentBtn) return select({ type: 'agent', id: agentBtn.dataset.agent }, true);
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
$('#btnCascade').onclick = () => {
  world.focus(null);
  sim.cascade();
};
$('#btnReport').onclick = () => {
  world.focus(null);
  sim.report();
};
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
    store.set({ theme: 'naranja', ...data });
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
  sim.cancel();
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
    sim.cancel();
    btnPlay.textContent = '▶ Auto';
    log({ kind: 'info', text: 'Cerebro configurado ✔ Escribe un objetivo en la barra inferior.' });
  }
});
$('#btnBrain').onclick = openBrainDialog;
$('#brainStatus').onclick = openBrainDialog;
renderBrainStatus();

// ---------- arranque ----------
store.subscribe((state) => {
  world.rebuild(state);
  renderTree();
  renderDetails();
});
world.rebuild(store.get());
renderTree();
if (brain.isReady()) {
  // Con el cerebro activo no mezclamos tráfico simulado con el real
  sim.setRunning(false);
  btnPlay.textContent = '▶ Auto';
  log({ kind: 'info', text: 'Cerebro listo 🧠 Escribe un objetivo abajo y mira cómo tu equipo lo resuelve.' });
} else {
  log({ kind: 'info', text: 'Modo demo 👋 Configura el ⚙ Cerebro (API key de Anthropic) para que los agentes trabajen de verdad.' });
  setTimeout(() => sim.cascade(), 1500);
}

let last = performance.now();
(function loop(now) {
  sim.tick(Math.min((now - last) / 1000, 0.1));
  last = now;
  requestAnimationFrame(loop);
})(last);
