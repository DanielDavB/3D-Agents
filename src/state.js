// Estado de la aplicación: oficinas (árbol) + agentes. Se persiste en localStorage.

const STORAGE_KEY = '3d-agents:v1';

export const uid = (p) => `${p}_${Math.random().toString(36).slice(2, 9)}`;

export const OFFICE_COLORS = ['#7c9cff', '#ff7ab6', '#4fd1c5', '#f6c453', '#9f7aea', '#68d391', '#fc8181', '#63b3ed'];

export function seedState() {
  const hq = { id: 'off_hq', name: 'Oficina Principal', parentId: null, color: '#c9d4ff' };
  const offices = [
    hq,
    { id: 'off_pm', name: 'Project Manager', parentId: hq.id, color: '#7c9cff' },
    { id: 'off_mkt', name: 'Marketing', parentId: hq.id, color: '#ff7ab6' },
    { id: 'off_sales', name: 'Ventas', parentId: hq.id, color: '#f6c453' },
    { id: 'off_support', name: 'Soporte', parentId: hq.id, color: '#4fd1c5' },
    { id: 'off_dev', name: 'Desarrollo', parentId: hq.id, color: '#9f7aea' },
    { id: 'off_social', name: 'Redes Sociales', parentId: 'off_mkt', color: '#fc8181' },
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
  return { offices, agents };
}

export function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const s = JSON.parse(raw);
      if (Array.isArray(s.offices) && Array.isArray(s.agents) && s.offices.length) return s;
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
