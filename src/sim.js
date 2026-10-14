// Tráfico de ambiente (modo Auto): mensajes simulados entre agentes para que la oficina
// se vea viva. El trabajo de demostración lo hace src/pipeline.js y el real src/brain.js.
import { provider } from './connectors.js';
import { AMBIENT_TASKS } from './project.js';

const REPLIES = ['Listo ✔', 'Sin cambios desde el último corte', 'Hecho, registrado en bitácora', 'OK, datos sincronizados', 'Completado sin errores'];

// Paquetes: tareas en naranja de marca, respuestas en blanco.
const TASK_COLOR = '#e8600c';
const REPLY_COLOR = '#ffffff';

const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

function tasksFor(office) {
  const n = (office?.name || '').toLowerCase();
  const key = Object.keys(AMBIENT_TASKS).find((k) => n.includes(k));
  return AMBIENT_TASKS[key] || AMBIENT_TASKS.mando;
}

export function createSim({ store, world, log }) {
  let running = true;
  let speed = 1;
  let acc = 0;
  let nextIn = 1.5;
  const stats = new Map(); // agentId -> { sent, received }

  const stat = (id) => {
    if (!stats.has(id)) stats.set(id, { sent: 0, received: 0 });
    return stats.get(id);
  };

  const nameOf = (id) => (id === 'user' ? 'Tú' : store.agent(id)?.name || '?');
  const colorOf = (id) => (id === 'user' ? '#ffffff' : provider(store.agent(id)?.provider).color);
  const wait = (ms) => new Promise((r) => setTimeout(r, ms / Math.max(speed, 0.1)));

  // Envía una tarea simulada de A a B; devuelve una promesa con la respuesta.
  function sendTask(fromId, toId, text) {
    return new Promise((resolve) => {
      const target = store.agent(toId);
      if (!target || (fromId !== 'user' && !store.agent(fromId))) return resolve(null);
      stat(fromId).sent++;
      log({ kind: 'task', from: nameOf(fromId), to: nameOf(toId), text, color: colorOf(fromId) });
      world.sendPacket(fromId, toId, {
        color: TASK_COLOR,
        onArrive: async () => {
          stat(toId).received++;
          await wait(400 + Math.random() * 900);
          if (!running) return resolve(null);
          const answer = pick(REPLIES);
          stat(toId).sent++;
          log({ kind: 'reply', from: target.name, to: nameOf(fromId), text: answer, color: colorOf(toId) });
          world.sendPacket(toId, fromId, { color: REPLY_COLOR, size: 0.28, onArrive: () => resolve(answer) });
        },
      });
    });
  }

  // Conversación aleatoria: jefe → equipo, entre compañeros o reporte hacia arriba.
  function randomChatter() {
    const { agents } = store.get();
    if (agents.length < 2) return;
    const from = pick(agents);
    const office = store.office(from.officeId);
    const r = Math.random();
    let candidates;
    if (r < 0.45) candidates = agents.filter((a) => store.office(a.officeId)?.parentId === from.officeId);
    else if (r < 0.75) candidates = agents.filter((a) => a.officeId === from.officeId);
    else candidates = agents.filter((a) => a.officeId === office?.parentId);
    candidates = candidates.filter((a) => a.id !== from.id);
    if (!candidates.length) candidates = agents.filter((a) => a.id !== from.id);
    const to = pick(candidates);
    sendTask(from.id, to.id, pick(tasksFor(store.office(to.officeId))));
  }

  return {
    sendTask,
    stats: (id) => stat(id),
    bump: (id, key) => store.agent(id) && stat(id)[key]++,
    isRunning: () => running,
    setRunning: (v) => (running = v),
    setSpeed(s) {
      speed = s;
      world.setTimeScale(s);
    },
    tick(dt) {
      if (!running) return;
      acc += dt * speed;
      if (acc >= nextIn) {
        acc = 0;
        nextIn = 1 + Math.random() * 2.2;
        randomChatter();
      }
    },
  };
}
