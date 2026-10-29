// Estado de la aplicación: oficinas (árbol) + agentes. Se persiste en localStorage.

import { seedState } from './project.js';

const STORAGE_KEY = '3d-agents:treve-mvp-v3';

export const uid = (p) => `${p}_${Math.random().toString(36).slice(2, 9)}`;

// Paleta de marca: naranja, blanco y grises/tinte.
export const OFFICE_COLORS = ['#e8600c', '#ffffff', '#b8b8b8', '#fde8dc', '#757575'];

export { seedState };

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
