// Reproduce en el 3D lo que el orquestador real hace: consulta la bitácora (treve.eventos)
// y anima cada evento como un mensaje entre agentes, a un ritmo legible.
import { backend } from './backend.js';

const COLORS = { tarea: '#e8600c', documento: '#ffffff', resultado: '#ffffff', alerta: '#ff9a52', decision: '#ffffff', validacion: '#fab219', error: '#ff5c5c', info: '#b8b8b8', fin: '#ffffff' };
const KIND = { tarea: 'task', documento: 'doc', resultado: 'live', alerta: 'alert', decision: 'live', validacion: 'alert', error: 'error', info: 'info', fin: 'final' };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export function createLive({ store, world, log, bump, setResult, nameOf, onUpdate }) {
  let run = null; // { id, desde, state, queue, playing, stop }

  const exists = (id) => id && (id === 'user' || id === 'external' || id.startsWith('src:') || !!store.agent(id));

  async function play(ev) {
    if (ev.tipo === 'trabajando') {
      if (store.agent(ev.de)) world.setWorking(ev.de, !!ev.datos?.on);
      return 0;
    }
    if (ev.tipo === 'resultado' && store.agent(ev.de)) setResult(ev.de, ev.mensaje);
    const kind = KIND[ev.tipo] || 'info';
    if (kind === 'info' || !ev.para) log({ kind: kind === 'info' ? 'info' : kind, from: nameOf(ev.de), to: nameOf(ev.para || ev.de), text: ev.mensaje });
    else log({ kind, from: nameOf(ev.de), to: nameOf(ev.para), text: ev.mensaje });
    if (exists(ev.de) && exists(ev.para) && ev.de !== ev.para) {
      bump(ev.de, 'sent');
      world.sendPacket(ev.de, ev.para, { color: COLORS[ev.tipo] || '#e8600c', onArrive: () => bump(ev.para, 'received') });
      return ev.tipo === 'tarea' ? 380 : 520;
    }
    if (exists(ev.de)) world.pulse(ev.de, 1);
    return 260;
  }

  async function player(r) {
    r.playing = true;
    while (!r.stopped) {
      const ev = r.queue.shift();
      if (!ev) {
        if (r.final) break;
        await sleep(200);
        continue;
      }
      const wait = await play(ev);
      // Si la cola crece mucho, acelera para no quedarse atrás del motor
      await sleep(wait / (r.queue.length > 25 ? 3 : r.queue.length > 10 ? 1.6 : 1));
    }
    r.playing = false;
  }

  async function poller(r) {
    let fails = 0;
    while (!r.stopped) {
      try {
        const st = await backend.estado(r.id, r.desde, false);
        fails = 0;
        for (const ev of st.eventos) r.queue.push(ev);
        if (st.eventos.length) r.desde = st.eventos[st.eventos.length - 1].id;
        r.state = st;
        onUpdate?.(st, { playing: r.queue.length > 0 });
        const done = ['terminada', 'error', 'en_revision'].includes(st.corrida.estado);
        if (done && !st.eventos.length) {
          r.final = true;
          // espera a que termine la animación antes de avisar
          while (r.playing && !r.stopped) await sleep(250);
          if (!r.stopped) r.resolveDone(st);
          return;
        }
      } catch (err) {
        if (++fails > 8) {
          r.final = true;
          r.rejectDone(err);
          return;
        }
      }
      await sleep(1100);
    }
  }

  // Sigue una corrida hasta que el motor se detenga (terminada, en revisión o error)
  function follow(id, desde = 0) {
    stop();
    const r = { id, desde, queue: [], stopped: false, final: false, playing: false };
    r.done = new Promise((res, rej) => ((r.resolveDone = res), (r.rejectDone = rej)));
    run = r;
    player(r);
    poller(r);
    return r.done;
  }

  function stop() {
    if (run) run.stopped = true;
    run = null;
  }

  return {
    follow,
    stop,
    current: () => run,
    async start(opciones) {
      const { corrida, unida } = await backend.iniciar(opciones);
      if (unida) log({ kind: 'info', text: 'Ya había un ciclo en curso: te uniste para verlo en vivo.' });
      return { corrida, done: follow(corrida, 0) };
    },
    // Retoma una corrida después de la validación humana (versión final)
    resume: () => (run ? follow(run.id, run.desde) : Promise.resolve(null)),
  };
}
