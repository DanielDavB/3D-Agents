// Simulación de conversaciones entre agentes. En modo demo todo es ficticio;
// si un agente tiene "live" activado y está configurado, se llama a su conector real.
import { provider, canCallLive } from './connectors.js';

const TASKS = {
  marketing: ['Redacta 3 variantes de copy para la campaña Q4', 'Genera ideas de contenido para la semana', 'Analiza el CTR del último email'],
  redes: ['Programa 5 posts para Instagram y LinkedIn', 'Responde los comentarios pendientes', 'Prepara el calendario editorial'],
  ventas: ['Califica los 12 leads nuevos', 'Agenda demo con el lead de ACME', 'Actualiza el pipeline en el CRM'],
  soporte: ['Resuelve el ticket #4821 (facturación)', 'Clasifica los tickets entrantes', 'Resume las quejas de la semana'],
  desarrollo: ['Revisa el PR #212 (checkout)', 'Despliega la versión 2.4 a staging', 'Corre los tests de regresión'],
  project: ['Planifica el sprint 18', 'Actualiza el estado del roadmap', 'Detecta tareas bloqueadas'],
  principal: ['Envía el reporte semanal', 'Prioriza los objetivos del mes', 'Coordina el lanzamiento del producto'],
  default: ['Procesa la nueva solicitud', 'Genera un resumen del estado', 'Valida los datos recibidos'],
};

const REPLIES = [
  'Listo ✅ tarea completada',
  'Hecho, te dejo el resumen en el canal',
  'Completado en 2.3s · 0 errores',
  'Recibido, en proceso… ✔ terminado',
  'OK, datos sincronizados',
  'Entregado. ¿Algo más?',
];

const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

function tasksFor(office) {
  const n = (office?.name || '').toLowerCase();
  const key = Object.keys(TASKS).find((k) => n.includes(k)) || (n.includes('pm') ? 'project' : n.includes('social') ? 'redes' : 'default');
  return TASKS[key];
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

  // Envía una tarea de A a B, devuelve una promesa con la respuesta.
  function sendTask(fromId, toId, text, { reply = true, live = true } = {}) {
    return new Promise((resolve) => {
      const target = store.agent(toId);
      if (!target || (fromId !== 'user' && !store.agent(fromId))) return resolve(null);
      stat(fromId).sent++;
      log({ kind: 'task', from: nameOf(fromId), to: nameOf(toId), text, color: colorOf(fromId) });
      world.sendPacket(fromId, toId, {
        color: colorOf(fromId),
        onArrive: async () => {
          stat(toId).received++;
          if (!reply) return resolve(null);
          let answer;
          let kind = 'reply';
          if (live && target.live && canCallLive(target)) {
            log({ kind: 'info', text: `${target.name} llamando a ${provider(target.provider).label}…` });
            try {
              answer = await provider(target.provider).send(target, { from: nameOf(fromId), text });
              kind = 'live';
            } catch (err) {
              answer = `Error: ${err.message}`;
              kind = 'error';
            }
          } else {
            await wait(400 + Math.random() * 900);
            answer = pick(REPLIES);
          }
          stat(toId).sent++;
          log({ kind, from: target.name, to: nameOf(fromId), text: answer, color: colorOf(toId) });
          world.sendPacket(toId, fromId, {
            color: kind === 'error' ? '#ff4d4d' : colorOf(toId),
            size: 0.28,
            onArrive: () => resolve(answer),
          });
        },
      });
    });
  }

  const wait = (ms) => new Promise((r) => setTimeout(r, ms / Math.max(speed, 0.1)));

  // Conversación aleatoria: normalmente jefe → subordinado o entre compañeros.
  function randomChatter() {
    const { agents, offices } = store.get();
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
    const toOffice = offices.find((o) => o.id === to.officeId);
    sendTask(from.id, to.id, pick(tasksFor(toOffice)), { live: false });
  }

  // Escenario: el orquestador delega a cada departamento y éstos a su equipo.
  async function cascade() {
    const root = store.rootOffice();
    const boss = store.agentsIn(root.id)[0];
    if (!boss) return log({ kind: 'info', text: 'Añade un agente a la Oficina Principal para ejecutar el flujo.' });
    log({ kind: 'info', text: '▶ Flujo "Lanzamiento de producto" iniciado' });
    await sendTask('user', boss.id, 'Lancemos el nuevo producto este viernes', { live: false });
    const depts = store.children(root.id);
    await Promise.all(
      depts.map(async (d, i) => {
        await wait(i * 350);
        const lead = store.agentsIn(d.id)[0];
        if (!lead) return;
        await sendTask(boss.id, lead.id, pick(tasksFor(d)), { live: false });
        const team = [...store.agentsIn(d.id).slice(1), ...store.children(d.id).flatMap((c) => store.agentsIn(c.id))];
        await Promise.all(team.map((m) => sendTask(lead.id, m.id, pick(tasksFor(store.office(m.officeId))), { live: false })));
      }),
    );
    log({ kind: 'info', text: '✔ Flujo completado: todos los departamentos reportaron' });
  }

  // Escenario: todos reportan a la oficina principal.
  async function report() {
    const root = store.rootOffice();
    const boss = store.agentsIn(root.id)[0];
    if (!boss) return;
    log({ kind: 'info', text: '▶ Reporte semanal: todos los agentes reportan al orquestador' });
    const others = store.get().agents.filter((a) => a.id !== boss.id);
    await Promise.all(
      others.map(async (a, i) => {
        await wait(i * 180);
        await sendTask(a.id, boss.id, `Reporte semanal de ${a.name}`, { reply: false, live: false });
      }),
    );
    await sendTask(boss.id, 'user', 'Resumen ejecutivo listo 📊', { reply: false, live: false });
  }

  return {
    sendTask,
    cascade,
    report,
    stats: (id) => stat(id),
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
