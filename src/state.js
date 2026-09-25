// Estado de la aplicación: oficinas (árbol) + agentes. Se persiste en localStorage.

const STORAGE_KEY = '3d-agents:v1';

export const uid = (p) => `${p}_${Math.random().toString(36).slice(2, 9)}`;

// Paleta de marca: naranja, blanco y grises/tinte.
export const OFFICE_COLORS = ['#e8600c', '#ffffff', '#b8b8b8', '#fde8dc', '#757575'];

export function seedState() {
  const hq = { id: 'off_hq', name: 'Oficina Principal', parentId: null, color: '#ffffff' };
  const offices = [
    hq,
    { id: 'off_pm', name: 'Project Manager', parentId: hq.id, color: '#e8600c' },
    { id: 'off_mkt', name: 'Marketing', parentId: hq.id, color: '#e8600c' },
    { id: 'off_sales', name: 'Ventas', parentId: hq.id, color: '#e8600c' },
    { id: 'off_support', name: 'Soporte', parentId: hq.id, color: '#e8600c' },
    { id: 'off_dev', name: 'Desarrollo', parentId: hq.id, color: '#e8600c' },
    { id: 'off_social', name: 'Redes Sociales', parentId: 'off_mkt', color: '#b8b8b8' },
  ];
  const a = (id, name, role, officeId, provider, config = {}) => ({ id, name, role, officeId, provider, config, live: false });
  const agents = [
    a('ag_ceo', 'Orquestador', 'Director general: reparte tareas', hq.id, 'claude', { model: 'claude-opus-5-5' }),
    a('ag_router', 'Router', 'Enruta eventos entrantes', hq.id, 'n8n'),
    a('ag_pm', 'PM Bot', 'Planifica sprints y entregables', 'off_pm', 'claude'),
    a('ag_tracker', 'Tracker', 'Sincroniza tareas con Jira/Notion', 'off_pm', 'n8n'),
    a('ag_copy', 'Copywriter', 'Redacta copies y campañas', 'off_mkt', 'claude'),
    a('ag_analytics', 'Analytics', 'Mide campañas y KPIs', 'off_mkt', 'webhook'),
    a('ag_sched', 'Scheduler', 'Programa publicaciones', 'off_social', 'n8n'),
    a('ag_community', 'Community', 'Responde comentarios', 'off_social', 'make'),
    a('ag_sdr', 'SDR', 'Califica leads y agenda demos', 'off_sales', 'claude'),
    a('ag_crm', 'CRM Sync', 'Actualiza el CRM', 'off_sales', 'zapier'),
    a('ag_help', 'Helpdesk', 'Contesta tickets de clientes', 'off_support', 'claude'),
    a('ag_triage', 'Triage', 'Clasifica y prioriza tickets', 'off_support', 'openai'),
    a('ag_review', 'Code Reviewer', 'Revisa pull requests', 'off_dev', 'claude'),
    a('ag_ci', 'CI Bot', 'Lanza builds y despliegues', 'off_dev', 'webhook'),
  ];
  return { theme: 'naranja', offices, agents };
}

// Organizaciones guardadas con la paleta anterior: se recolorean por nivel
// (principal blanca, departamentos naranja, sub-oficinas gris) sin tocar agentes.
function migrateTheme(s) {
  if (s.theme === 'naranja') return s;
  const byId = new Map(s.offices.map((o) => [o.id, o]));
  const depth = (o, n = 0) => (o.parentId && byId.has(o.parentId) && n < 20 ? depth(byId.get(o.parentId), n + 1) : n);
  const colors = ['#ffffff', '#e8600c', '#b8b8b8'];
  return { ...s, theme: 'naranja', offices: s.offices.map((o) => ({ ...o, color: colors[Math.min(depth(o), 2)] })) };
}

export function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const s = JSON.parse(raw);
      if (Array.isArray(s.offices) && Array.isArray(s.agents) && s.offices.length) return migrateTheme(s);
    }
  } catch {
    /* almacenamiento no disponible: seguimos con el estado inicial */
  }
  return seedState();
}

export function saveState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    /* ignorado */
  }
}

// Store mínimo con suscriptores.
export function createStore(initial) {
  let state = initial;
  const subs = new Set();
  const store = {
    get: () => state,
    set(next) {
      state = next;
      saveState(state);
      subs.forEach((fn) => fn(state));
    },
    subscribe(fn) {
      subs.add(fn);
      return () => subs.delete(fn);
    },

    rootOffice: () => state.offices.find((o) => !o.parentId) || state.offices[0],
    office: (id) => state.offices.find((o) => o.id === id),
    agent: (id) => state.agents.find((a) => a.id === id),
    agentsIn: (officeId) => state.agents.filter((a) => a.officeId === officeId),
    children: (officeId) => state.offices.filter((o) => o.parentId === officeId),

    upsertOffice(office) {
      const exists = state.offices.some((o) => o.id === office.id);
      store.set({
        ...state,
        offices: exists ? state.offices.map((o) => (o.id === office.id ? office : o)) : [...state.offices, office],
      });
    },
    removeOffice(id) {
      const root = store.rootOffice();
      if (id === root.id) return;
      const target = store.office(id);
      // Los hijos y agentes pasan a la oficina padre.
      store.set({
        ...state,
        offices: state.offices.filter((o) => o.id !== id).map((o) => (o.parentId === id ? { ...o, parentId: target.parentId } : o)),
        agents: state.agents.map((a) => (a.officeId === id ? { ...a, officeId: target.parentId } : a)),
      });
    },
    upsertAgent(agent) {
      const exists = state.agents.some((a) => a.id === agent.id);
      store.set({
        ...state,
        agents: exists ? state.agents.map((a) => (a.id === agent.id ? agent : a)) : [...state.agents, agent],
      });
    },
    removeAgent(id) {
      store.set({ ...state, agents: state.agents.filter((a) => a.id !== id) });
    },
    reset() {
      store.set(seedState());
    },
  };
  return store;
}
