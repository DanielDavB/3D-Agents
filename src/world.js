// Escena 3D: oficinas, agentes, corredores de datos y paquetes de mensajes.
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { provider } from './connectors.js';

const RING = 30; // distancia entre niveles del árbol de oficinas
const WALL_H = 2.6;
const HUB_Y = 7;
const USER_POS = new THREE.Vector3(0, 22, 0);
const EXTERNAL_POS = new THREE.Vector3(0, 12, -62); // nodo "APIs externas"

function label(html, className) {
  const el = document.createElement('div');
  el.className = className;
  el.innerHTML = html;
  return new CSS2DObject(el);
}

// Distribución radial del árbol: cada oficina recibe un sector proporcional a sus hojas.
function layoutOffices(offices) {
  const root = offices.find((o) => !o.parentId) || offices[0];
  const kids = (id) => offices.filter((o) => o.parentId === id || (id === root.id && o !== root && !offices.some((p) => p.id === o.parentId)));
  const leaves = (o) => {
    const c = kids(o.id);
    return c.length ? c.reduce((n, k) => n + leaves(k), 0) : 1;
  };
  const pos = new Map();
  const place = (o, depth, a0, a1) => {
    const ang = (a0 + a1) / 2;
    const r = depth * RING;
    pos.set(o.id, { x: Math.cos(ang) * r, z: Math.sin(ang) * r, depth, angle: ang });
    const c = kids(o.id);
    const total = c.reduce((n, k) => n + leaves(k), 0);
    let a = a0;
    for (const k of c) {
      const span = ((a1 - a0) * leaves(k)) / total;
      place(k, depth + 1, a, a + span);
      a += span;
    }
  };
  place(root, 0, -Math.PI / 2, Math.PI * 1.5);
  return { root, pos };
}

export function createWorld(container, { onSelect } = {}) {
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  container.appendChild(renderer.domElement);

  const labels = new CSS2DRenderer();
  labels.domElement.className = 'labels-layer';
  container.appendChild(labels.domElement);

  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#0d0d0d');
  scene.fog = new THREE.Fog('#0d0d0d', 90, 220);

  const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 500);
  camera.position.set(0, 85, 105);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.maxPolarAngle = Math.PI * 0.47;
  controls.minDistance = 8;
  controls.maxDistance = 180;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 0.35;

  const composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));
  const bloom = new UnrealBloomPass(new THREE.Vector2(1, 1), 0.7, 0.45, 0.78);
  composer.addPass(bloom);
  composer.addPass(new OutputPass());

  // Luces y suelo
  scene.add(new THREE.HemisphereLight('#ffffff', '#0d0d0d', 1.0));
  const sun = new THREE.DirectionalLight('#ffffff', 1.4);
  sun.position.set(40, 80, 30);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  Object.assign(sun.shadow.camera, { left: -90, right: 90, top: 90, bottom: -90, far: 200 });
  scene.add(sun);

  const floor = new THREE.Mesh(
    new THREE.CircleGeometry(260, 64),
    new THREE.MeshStandardMaterial({ color: '#111111', roughness: 0.95 }),
  );
  floor.rotation.x = -Math.PI / 2;
  floor.receiveShadow = true;
  scene.add(floor);
  const grid = new THREE.GridHelper(400, 100, '#2a2a2a', '#1a1a1a');
  grid.position.y = 0.01;
  scene.add(grid);

  // Nodo "Tú" (el usuario que da instrucciones)
  const userNode = new THREE.Group();
  userNode.position.copy(USER_POS);
  const userOrb = new THREE.Mesh(new THREE.IcosahedronGeometry(1.1, 1), new THREE.MeshBasicMaterial({ color: '#ffffff', wireframe: true }));
  userNode.add(userOrb);
  const userLabel = label('Tú', 'label user-label');
  userLabel.position.set(0, 2, 0);
  userNode.add(userLabel);
  scene.add(userNode);

  // Nodo "APIs externas": destino de las peticiones HTTP reales
  const extNode = new THREE.Group();
  extNode.position.copy(EXTERNAL_POS);
  const extOrb = new THREE.Mesh(new THREE.SphereGeometry(3, 18, 12), new THREE.MeshBasicMaterial({ color: '#e8600c', wireframe: true }));
  extNode.add(extOrb);
  const extRing = new THREE.Mesh(new THREE.TorusGeometry(4.4, 0.05, 8, 64), new THREE.MeshBasicMaterial({ color: '#ffffff' }));
  extRing.rotation.x = Math.PI / 2.4;
  extNode.add(extRing);
  const extLabel = label('APIs externas', 'label user-label ext-label');
  extLabel.position.set(0, 5, 0);
  extNode.add(extLabel);
  scene.add(extNode);
  const working = new Set();

  let world = new THREE.Group();
  scene.add(world);

  // Registros de la escena actual
  let agentViews = new Map(); // agentId -> { group, halo, body, screen, anchor, officeId, pulse }
  let officeViews = new Map(); // officeId -> { group, hub, floor, color, parentId }
  let corridors = []; // { curve, color }
  let pickables = [];
  const packets = [];
  const ambient = [];
  let timeScale = 1;
  let selectedId = null;

  // ---------- construcción ----------
  function buildOffice(office, p, agents, isRoot) {
    const g = new THREE.Group();
    g.position.set(p.x, 0, p.z);
    const n = agents.length;
    const cols = Math.max(1, Math.ceil(Math.sqrt(n)));
    const rows = Math.max(1, Math.ceil(n / cols));
    const size = Math.max(isRoot ? 18 : 12, cols * 6 + 5);
    const depthSize = Math.max(isRoot ? 18 : 12, rows * 5.5 + 5);
    const color = new THREE.Color(office.color || '#e8600c');

    // Mira hacia el centro del mapa para que la pared trasera quede afuera
    if (!isRoot) g.rotation.y = -p.angle - Math.PI / 2;

    const base = new THREE.Mesh(
      new THREE.BoxGeometry(size, 0.4, depthSize),
      new THREE.MeshStandardMaterial({ color: '#161616', roughness: 0.6, metalness: 0.2 }),
    );
    base.position.y = 0.2;
    base.receiveShadow = true;
    base.userData.officeId = office.id;
    g.add(base);
    pickables.push(base);

    const trim = new THREE.Mesh(
      new THREE.BoxGeometry(size + 0.4, 0.12, depthSize + 0.4),
      new THREE.MeshBasicMaterial({ color }),
    );
    trim.position.y = 0.06;
    g.add(trim);

    const glass = new THREE.MeshPhysicalMaterial({
      color, transparent: true, opacity: 0.16, roughness: 0.1, metalness: 0, side: THREE.DoubleSide, depthWrite: false,
    });
    const wall = (w, x, z, ry) => {
      const m = new THREE.Mesh(new THREE.PlaneGeometry(w, WALL_H), glass);
      m.position.set(x, 0.4 + WALL_H / 2, z);
      m.rotation.y = ry;
      g.add(m);
      const edge = new THREE.Mesh(new THREE.BoxGeometry(w, 0.08, 0.08), new THREE.MeshBasicMaterial({ color }));
      edge.position.set(x, 0.4 + WALL_H, z);
      edge.rotation.y = ry;
      g.add(edge);
    };
    wall(size, 0, -depthSize / 2, 0);
    wall(depthSize, -size / 2, 0, Math.PI / 2);
    wall(depthSize, size / 2, 0, Math.PI / 2);

    // Hub: punto por donde pasan los mensajes de la oficina
    const hub = new THREE.Mesh(
      new THREE.OctahedronGeometry(isRoot ? 1.4 : 0.8),
      new THREE.MeshBasicMaterial({ color, wireframe: true }),
    );
    hub.position.set(0, HUB_Y, 0);
    g.add(hub);
    const beam = new THREE.Mesh(
      new THREE.CylinderGeometry(0.05, 0.05, HUB_Y - 0.4, 6),
      new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.35 }),
    );
    beam.position.y = 0.4 + (HUB_Y - 0.4) / 2;
    g.add(beam);

    if (isRoot) {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(4.5, 0.06, 8, 64), new THREE.MeshBasicMaterial({ color: '#e8600c' }));
      ring.rotation.x = Math.PI / 2;
      ring.position.y = HUB_Y;
      ring.userData.spin = 0.4;
      g.add(ring);
      const ring2 = ring.clone();
      ring2.scale.setScalar(0.7);
      ring2.userData.spin = -0.7;
      g.add(ring2);
    }

    const tag = label(`<span class="dot" style="background:${office.color}"></span>${office.name}`, 'label office-label');
    tag.position.set(0, 0.4 + WALL_H + 1.2, -depthSize / 2);
    tag.element.dataset.officeId = office.id;
    tag.element.addEventListener('click', () => onSelect?.({ type: 'office', id: office.id }));
    g.add(tag);

    // Agentes en cuadrícula
    agents.forEach((agent, i) => {
      const c = i % cols;
      const r = Math.floor(i / cols);
      const x = (c - (cols - 1) / 2) * 6;
      const z = (r - (rows - 1) / 2) * 5.5 + 0.5;
      g.add(buildAgent(agent, office, x, z));
    });

    world.add(g);
    g.updateMatrixWorld(true);
    officeViews.set(office.id, {
      group: g, hub, hubWorld: hub.getWorldPosition(new THREE.Vector3()), color, parentId: office.parentId, base,
    });
  }

  function buildAgent(agent, office, x, z) {
    const prov = provider(agent.provider);
    const pColor = new THREE.Color(prov.color);
    const g = new THREE.Group();
    g.position.set(x, 0.4, z);

    const desk = new THREE.Mesh(
      new THREE.BoxGeometry(2.4, 0.9, 1.2),
      new THREE.MeshStandardMaterial({ color: '#2a2a2a', roughness: 0.5 }),
    );
    desk.position.set(0, 0.45, -0.9);
    desk.castShadow = true;
    g.add(desk);

    const screen = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.8, 0.06), new THREE.MeshBasicMaterial({ color: pColor }));
    screen.position.set(0, 1.35, -1.25);
    g.add(screen);

    const body = new THREE.Mesh(
      new THREE.CapsuleGeometry(0.42, 0.7, 6, 14),
      new THREE.MeshStandardMaterial({ color: pColor, roughness: 0.35, metalness: 0.1, emissive: pColor, emissiveIntensity: 0.15 }),
    );
    body.position.set(0, 0.95, 0.35);
    body.castShadow = true;
    g.add(body);

    const head = new THREE.Mesh(
      new THREE.SphereGeometry(0.36, 20, 16),
      new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 0.3 }),
    );
    head.position.set(0, 1.85, 0.35);
    head.castShadow = true;
    g.add(head);

    const visor = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.12, 0.1), new THREE.MeshBasicMaterial({ color: '#0d0d0d' }));
    visor.position.set(0, 1.88, 0.05);
    g.add(visor);

    const halo = new THREE.Mesh(new THREE.RingGeometry(0.75, 0.95, 40), new THREE.MeshBasicMaterial({ color: pColor, side: THREE.DoubleSide, transparent: true, opacity: 0.7 }));
    halo.rotation.x = -Math.PI / 2;
    halo.position.set(0, 0.03, 0.35);
    g.add(halo);

    const select = new THREE.Mesh(new THREE.RingGeometry(1.1, 1.25, 40), new THREE.MeshBasicMaterial({ color: '#ffffff', side: THREE.DoubleSide }));
    select.rotation.x = -Math.PI / 2;
    select.position.set(0, 0.04, 0.35);
    select.visible = false;
    g.add(select);

    const anchor = new THREE.Object3D();
    anchor.position.set(0, 2.5, 0.35);
    g.add(anchor);

    const tag = label(
      `<b>${agent.name}</b><span class="prov" style="--c:${prov.color}">${prov.short}${agent.live ? ' · live' : ''}</span>`,
      'label agent-label',
    );
    tag.position.set(0, 2.9, 0.35);
    tag.element.addEventListener('click', () => onSelect?.({ type: 'agent', id: agent.id }));
    g.add(tag);

    [desk, body, head, screen].forEach((m) => {
      m.userData.agentId = agent.id;
      pickables.push(m);
    });

    agentViews.set(agent.id, {
      id: agent.id,
      group: g, halo, body, head, screen, select, anchor, officeId: office.id, pulse: 0, phase: Math.random() * 6, tag,
    });
    return g;
  }

  function arc(a, b, lift) {
    const mid = a.clone().lerp(b, 0.5);
    mid.y += lift;
    return new THREE.QuadraticBezierCurve3(a.clone(), mid, b.clone());
  }

  function buildCorridors() {
    corridors = [];
    for (const [id, v] of officeViews) {
      const parent = officeViews.get(v.parentId);
      if (!parent) continue;
      const curve = arc(parent.hubWorld, v.hubWorld, 6);
      const tube = new THREE.Mesh(
        new THREE.TubeGeometry(curve, 48, 0.07, 6, false),
        new THREE.MeshBasicMaterial({ color: v.color, transparent: true, opacity: 0.35 }),
      );
      world.add(tube);
      // Camino en el suelo
      const a = parent.hubWorld.clone().setY(0.05);
      const b = v.hubWorld.clone().setY(0.05);
      const path = new THREE.Line(
        new THREE.BufferGeometry().setFromPoints([a, b]),
        new THREE.LineDashedMaterial({ color: v.color, dashSize: 1, gapSize: 1, transparent: true, opacity: 0.4 }),
      );
      path.computeLineDistances();
      world.add(path);
      corridors.push({ curve, color: v.color, id });
    }
  }

  function clear() {
    scene.remove(world);
    world.traverse((o) => {
      o.geometry?.dispose?.();
      if (o.material && !Array.isArray(o.material)) o.material.dispose();
    });
    world = new THREE.Group();
    scene.add(world);
    agentViews = new Map();
    officeViews = new Map();
    pickables = [];
    for (const p of packets.splice(0)) disposePacket(p);
    for (const d of ambient.splice(0)) scene.remove(d.mesh);
  }

  function rebuild(state) {
    clear();
    const { root, pos } = layoutOffices(state.offices);
    for (const office of state.offices) {
      const p = pos.get(office.id);
      if (!p) continue;
      buildOffice(office, p, state.agents.filter((a) => a.officeId === office.id), office.id === root.id);
    }
    buildCorridors();
    if (selectedId) setSelected(selectedId);
  }

  // ---------- mensajes ----------
  function anchorOf(id) {
    if (id === 'user') return USER_POS.clone();
    if (id === 'external') return EXTERNAL_POS.clone();
    const v = agentViews.get(id);
    return v ? v.anchor.getWorldPosition(new THREE.Vector3()) : null;
  }

  function officeChain(officeId) {
    const chain = [];
    let cur = officeId;
    const seen = new Set();
    while (cur && officeViews.has(cur) && !seen.has(cur)) {
      seen.add(cur);
      chain.push(cur);
      cur = officeViews.get(cur).parentId;
    }
    return chain;
  }

  // Ruta: agente → hub de su oficina → (hubs intermedios del árbol) → hub destino → agente
  function routePoints(fromId, toId) {
    const a = anchorOf(fromId);
    const b = anchorOf(toId);
    if (!a || !b) return null;
    const pts = [a];
    const fo = agentViews.get(fromId)?.officeId || null;
    const to = agentViews.get(toId)?.officeId || null;
    if (fo && to) {
      const up = officeChain(fo);
      const down = officeChain(to);
      const common = up.find((o) => down.includes(o));
      const path = [...up.slice(0, up.indexOf(common) + 1), ...down.slice(0, down.indexOf(common)).reverse()];
      if (path.length === 1) {
        const mid = a.clone().lerp(b, 0.5);
        mid.y += 2 + a.distanceTo(b) * 0.25;
        pts.push(mid);
      } else {
        path.forEach((o) => pts.push(officeViews.get(o).hubWorld.clone()));
      }
    } else {
      // Mensajes desde/hacia "Tú": pasan por el hub de la oficina del agente
      const o = fo || to;
      if (o) pts.push(officeViews.get(o).hubWorld.clone());
    }
    pts.push(b);
    return dedupe(pts);
  }
  function dedupe(pts) {
    return pts.filter((p, i) => i === 0 || p.distanceTo(pts[i - 1]) > 0.1);
  }

  // Suaviza una polilínea añadiendo arcos entre puntos consecutivos
  function buildCurve(pts) {
    const out = [pts[0]];
    for (let i = 1; i < pts.length; i++) {
      const a = pts[i - 1];
      const b = pts[i];
      const d = a.distanceTo(b);
      const mid = a.clone().lerp(b, 0.5);
      mid.y += Math.min(10, d * 0.18);
      out.push(mid, b);
    }
    return new THREE.CatmullRomCurve3(out, false, 'centripetal');
  }

  function sendPacket(fromId, toId, { color = '#ffffff', onArrive, size = 0.38 } = {}) {
    const pts = routePoints(fromId, toId);
    if (!pts || pts.length < 2) {
      onArrive?.();
      return false;
    }
    const curve = buildCurve(pts);
    const c = new THREE.Color(color);
    const head = new THREE.Mesh(new THREE.SphereGeometry(size, 16, 12), new THREE.MeshBasicMaterial({ color: c.clone().multiplyScalar(2.2) }));
    const trail = [];
    for (let i = 1; i <= 8; i++) {
      const m = new THREE.Mesh(
        new THREE.SphereGeometry(size * (1 - i / 10), 10, 8),
        new THREE.MeshBasicMaterial({ color: c, transparent: true, opacity: 0.6 * (1 - i / 9) }),
      );
      trail.push(m);
      scene.add(m);
    }
    const line = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(curve.getPoints(120)),
      new THREE.LineBasicMaterial({ color: c, transparent: true, opacity: 0.5 }),
    );
    scene.add(head, line);
    const length = curve.getLength();
    packets.push({ curve, head, trail, line, t: 0, duration: 1.2 + length / 28, onArrive, toId, fromId, fade: -1 });
    pulse(fromId, 0.6);
    return true;
  }

  function disposePacket(p) {
    [p.head, p.line, ...p.trail].forEach((m) => {
      scene.remove(m);
      m.geometry.dispose();
      m.material.dispose();
    });
  }

  function pulse(id, amount = 1) {
    const v = agentViews.get(id);
    if (v) v.pulse = Math.max(v.pulse, amount);
    if (id === 'user') userOrb.userData.pulse = 1;
    if (id === 'external') extOrb.userData.pulse = 1;
  }

  function spawnAmbient() {
    if (!corridors.length) return;
    const c = corridors[Math.floor(Math.random() * corridors.length)];
    const mesh = new THREE.Mesh(new THREE.SphereGeometry(0.14, 8, 6), new THREE.MeshBasicMaterial({ color: c.color }));
    scene.add(mesh);
    ambient.push({ mesh, curve: c.curve, t: 0, dir: Math.random() < 0.5 ? 1 : -1, speed: 0.25 + Math.random() * 0.25 });
  }

  // ---------- selección y cámara ----------
  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();
  let downAt = null;
  renderer.domElement.addEventListener('pointerdown', (e) => {
    downAt = { x: e.clientX, y: e.clientY };
  });
  renderer.domElement.addEventListener('pointerup', (e) => {
    if (!downAt || Math.hypot(e.clientX - downAt.x, e.clientY - downAt.y) > 5) return;
    const rect = renderer.domElement.getBoundingClientRect();
    pointer.set(((e.clientX - rect.left) / rect.width) * 2 - 1, -((e.clientY - rect.top) / rect.height) * 2 + 1);
    raycaster.setFromCamera(pointer, camera);
    const hit = raycaster.intersectObjects(pickables, false)[0];
    if (!hit) return onSelect?.(null);
    const { agentId, officeId } = hit.object.userData;
    if (agentId) onSelect?.({ type: 'agent', id: agentId });
    else if (officeId) onSelect?.({ type: 'office', id: officeId });
  });
  renderer.domElement.addEventListener('pointerdown', () => (controls.autoRotate = false), { once: true });

  let camTween = null;
  function flyTo(target, distance) {
    const dir = camera.position.clone().sub(controls.target).normalize();
    if (dir.y < 0.35) dir.y = 0.35;
    dir.normalize();
    camTween = {
      fromT: controls.target.clone(), toT: target.clone(),
      fromP: camera.position.clone(), toP: target.clone().add(dir.multiplyScalar(distance)),
      t: 0,
    };
    controls.autoRotate = false;
  }

  function focus(sel) {
    if (!sel) return flyTo(new THREE.Vector3(0, 0, 0), 130);
    if (sel.type === 'agent') {
      const v = agentViews.get(sel.id);
      if (v) flyTo(v.group.getWorldPosition(new THREE.Vector3()), 16);
    } else {
      const v = officeViews.get(sel.id);
      if (v) flyTo(v.group.position.clone(), 34);
    }
  }

  function setSelected(id) {
    selectedId = id;
    for (const [aid, v] of agentViews) v.select.visible = aid === id;
  }

  // ---------- bucle ----------
  const clock = new THREE.Clock();
  const tmp = new THREE.Vector3();
  let ambientAcc = 0;
  function resize() {
    const w = container.clientWidth;
    const h = container.clientHeight;
    renderer.setSize(w, h);
    labels.setSize(w, h);
    composer.setSize(w, h);
    bloom.resolution.set(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  window.addEventListener('resize', resize);
  resize();

  function tick() {
    const rawDt = Math.min(clock.getDelta(), 0.05);
    const dt = rawDt * timeScale;
    const time = clock.elapsedTime;

    if (camTween) {
      camTween.t = Math.min(1, camTween.t + rawDt * 1.4);
      const k = 1 - Math.pow(1 - camTween.t, 3);
      controls.target.lerpVectors(camTween.fromT, camTween.toT, k);
      camera.position.lerpVectors(camTween.fromP, camTween.toP, k);
      if (camTween.t >= 1) camTween = null;
    }
    controls.update();

    // Agentes: flotan suavemente y brillan al recibir mensajes
    for (const v of agentViews.values()) {
      v.pulse = Math.max(0, v.pulse - rawDt * 0.9);
      if (working.has(v.id)) v.pulse = Math.max(v.pulse, 0.45 + Math.sin(time * 6) * 0.25);
      const bob = Math.sin(time * 2 + v.phase) * 0.05;
      v.body.position.y = 0.95 + bob;
      v.head.position.y = 1.85 + bob;
      v.body.material.emissiveIntensity = 0.15 + v.pulse * 1.6;
      v.halo.scale.setScalar(1 + v.pulse * 0.8);
      v.halo.material.opacity = 0.5 + v.pulse * 0.5;
      v.tag.element.classList.toggle('active', v.pulse > 0.2);
      // Oculta nombres de agentes lejanos para no saturar la vista general
      v.group.getWorldPosition(tmp);
      v.tag.element.classList.toggle('far', tmp.distanceTo(camera.position) > 95 && v.pulse < 0.2);
    }
    for (const v of officeViews.values()) {
      v.hub.rotation.y += rawDt * 0.8;
    }
    world.traverse((o) => {
      if (o.userData.spin) o.rotation.z += rawDt * o.userData.spin;
    });
    extOrb.rotation.y += rawDt * 0.3;
    extRing.rotation.z += rawDt * 0.5;
    extOrb.userData.pulse = Math.max(0, (extOrb.userData.pulse || 0) - rawDt);
    extOrb.scale.setScalar(1 + extOrb.userData.pulse * 0.3);
    userOrb.rotation.y += rawDt * 0.6;
    userOrb.userData.pulse = Math.max(0, (userOrb.userData.pulse || 0) - rawDt);
    userOrb.scale.setScalar(1 + userOrb.userData.pulse * 0.5);

    // Paquetes de mensajes
    for (let i = packets.length - 1; i >= 0; i--) {
      const p = packets[i];
      if (p.fade >= 0) {
        p.fade += rawDt * 1.5;
        p.line.material.opacity = Math.max(0, 0.5 * (1 - p.fade));
        if (p.fade >= 1) {
          disposePacket(p);
          packets.splice(i, 1);
        }
        continue;
      }
      p.t = Math.min(1, p.t + dt / p.duration);
      const e = p.t < 0.5 ? 2 * p.t * p.t : 1 - Math.pow(-2 * p.t + 2, 2) / 2;
      p.head.position.copy(p.curve.getPointAt(e));
      p.trail.forEach((m, k) => m.position.copy(p.curve.getPointAt(Math.max(0, e - (k + 1) * 0.012))));
      if (p.t >= 1) {
        p.fade = 0;
        p.head.visible = false;
        p.trail.forEach((m) => (m.visible = false));
        pulse(p.toId, 1);
        p.onArrive?.();
      }
    }

    // Tráfico ambiental por los corredores
    ambientAcc += dt;
    if (ambientAcc > 0.35) {
      ambientAcc = 0;
      spawnAmbient();
    }
    for (let i = ambient.length - 1; i >= 0; i--) {
      const d = ambient[i];
      d.t += dt * d.speed;
      if (d.t >= 1) {
        scene.remove(d.mesh);
        d.mesh.geometry.dispose();
        d.mesh.material.dispose();
        ambient.splice(i, 1);
        continue;
      }
      d.mesh.position.copy(d.curve.getPointAt(d.dir > 0 ? d.t : 1 - d.t));
    }

    composer.render();
    labels.render(scene, camera);
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);

  return {
    rebuild,
    sendPacket,
    focus,
    setSelected,
    pulse,
    setTimeScale: (s) => (timeScale = s),
    setAutoRotate: (on) => (controls.autoRotate = on),
    hasAgent: (id) => agentViews.has(id),
    setWorking: (id, on) => (on ? working.add(id) : working.delete(id)),
  };
}
