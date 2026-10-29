// Escena 3D: oficinas, agentes, corredores de datos y paquetes de mensajes.
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { buildRoom, buildWorkstation, FLOOR_Y, WALL_H } from './props.js';
import { provider } from './connectors.js';

const RING = 30; // distancia entre niveles del árbol de oficinas
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
  // Gira todo para que la primera oficina (Capa 1 · Fuentes) quede al frente de la cámara
  const first = kids(root.id)[0];
  if (first) {
    const delta = Math.PI / 2 - pos.get(first.id).angle;
    for (const p of pos.values()) {
      if (!p.depth) continue;
      const ang = p.angle + delta;
      const r = p.depth * RING;
      Object.assign(p, { angle: ang, x: Math.cos(ang) * r, z: Math.sin(ang) * r });
    }
  }
  return { root, pos };
}

// Sin WebGL (aceleración apagada, navegadores restringidos) la app sigue funcionando sin la escena 3D
function hasWebGL() {
  try {
    const c = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && (c.getContext('webgl2') || c.getContext('webgl')));
  } catch {
    return false;
  }
}
function createFallbackWorld(container) {
  container.classList.add('no-3d');
  container.innerHTML = `<div class="no-3d-note" role="status"><b>La oficina 3D no está disponible en este navegador</b>
    <span>No encontramos WebGL. El ciclo de datos, la organización, la actividad, el dashboard y los documentos funcionan igual.</span></div>`;
  const noop = () => {};
  return {
    rebuild: noop, focus: noop, setSelected: noop, pulse: noop, setTimeScale: noop, setAutoRotate: noop, setWorking: noop, setTheme: noop, setLowPower: noop,
    hasAgent: () => false,
    sendPacket: (_a, _b, { onArrive } = {}) => (setTimeout(() => onArrive?.(), 250), true),
  };
}

export function createWorld(container, { onSelect } = {}) {
  if (!hasWebGL()) return createFallbackWorld(container);
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ antialias: true });
  } catch {
    return createFallbackWorld(container);
  }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  container.appendChild(renderer.domElement);

  const labels = new CSS2DRenderer();
  labels.domElement.className = 'labels-layer';
  container.appendChild(labels.domElement);

  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#0b0b0b');
  scene.fog = new THREE.Fog('#0b0b0b', 120, 260);

  // Lente larga: perspectiva casi isométrica, más limpia
  const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 800);
  camera.position.set(0, 86, 110);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.maxPolarAngle = Math.PI * 0.47;
  controls.minDistance = 8;
  controls.maxDistance = 260;
  // Movimiento reducido: sin giro automático ni tráfico de ambiente; los mensajes del ciclo sí se ven
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  controls.autoRotate = !reduceMotion.matches;
  reduceMotion.addEventListener?.('change', (e) => e.matches && (controls.autoRotate = false));
  controls.autoRotateSpeed = 0.35;

  const composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));
  const bloom = new UnrealBloomPass(new THREE.Vector2(1, 1), 0.55, 0.6, 0.82);
  composer.addPass(bloom);
  composer.addPass(new OutputPass());

  // Luces y suelo
  const hemi = new THREE.HemisphereLight('#ffffff', '#101010', 1.25);
  scene.add(hemi);
  const sun = new THREE.DirectionalLight('#ffffff', 1.2);
  sun.position.set(-40, 90, 50);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  sun.shadow.radius = 6;
  Object.assign(sun.shadow.camera, { left: -90, right: 90, top: 90, bottom: -90, far: 200 });
  scene.add(sun);

  const floor = new THREE.Mesh(
    new THREE.CircleGeometry(300, 64),
    new THREE.MeshStandardMaterial({ color: '#0e0e0e', roughness: 1 }),
  );
  floor.rotation.x = -Math.PI / 2;
  floor.receiveShadow = true;
  scene.add(floor);
  // Retícula de puntos que se desvanece hacia los bordes
  const dots = new THREE.Mesh(
    new THREE.PlaneGeometry(400, 400),
    new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      uniforms: { uColor: { value: new THREE.Color('#4a4a4a') } },
      vertexShader: 'varying vec2 vXZ; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vXZ = w.xz; gl_Position = projectionMatrix * viewMatrix * w; }',
      fragmentShader:
        'uniform vec3 uColor; varying vec2 vXZ; void main(){ vec2 g = abs(fract(vXZ / 3.0) - 0.5) * 3.0; float d = length(g);' +
        ' float dotMask = 1.0 - smoothstep(0.05, 0.09, d); float fade = 1.0 - smoothstep(45.0, 150.0, length(vXZ));' +
        ' gl_FragColor = vec4(uColor, dotMask * fade * 0.85); }',
    }),
  );
  dots.rotation.x = -Math.PI / 2;
  dots.position.y = 0.02;
  scene.add(dots);

  // Nodo "Tú" (el usuario que da instrucciones)
  const userNode = new THREE.Group();
  userNode.position.copy(USER_POS);
  const userOrb = new THREE.Mesh(new THREE.SphereGeometry(0.8, 24, 16), new THREE.MeshBasicMaterial({ color: '#ffffff' }));
  userOrb.userData.themeSkip = true;
  userNode.add(userOrb);
  const userLabel = label('Tú', 'label user-label');
  userLabel.position.set(0, 1.9, 0);
  userNode.add(userLabel);
  scene.add(userNode);

  // Nodo "APIs externas": destino de las peticiones HTTP reales
  const extNode = new THREE.Group();
  extNode.position.copy(EXTERNAL_POS);
  const extOrb = new THREE.Mesh(new THREE.SphereGeometry(1.4, 24, 16), new THREE.MeshStandardMaterial({ color: '#efefef', roughness: 0.5, emissive: '#e8600c', emissiveIntensity: 0.25 }));
  extNode.add(extOrb);
  const extRing = new THREE.Mesh(new THREE.TorusGeometry(2.6, 0.04, 8, 72), new THREE.MeshBasicMaterial({ color: '#e8600c' }));
  extRing.rotation.x = Math.PI / 2.4;
  extNode.add(extRing);
  const extLabel = label('APIs externas', 'label user-label ext-label');
  extLabel.position.set(0, 3.4, 0);
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
  let sourceViews = new Map(); // sourceId -> { group, top, pulse, ring }
  const packets = [];
  const ambient = [];
  let timeScale = 1;
  let selectedId = null;

  // ---------- construcción ----------
  function buildOffice(office, p, agents, isRoot) {
    const g = new THREE.Group();
    g.position.set(p.x, 0, p.z);
    const n = agents.length;
    const cols = Math.max(1, n <= 2 ? n : Math.ceil(Math.sqrt(n)));
    const rows = Math.max(1, Math.ceil(n / cols));
    const cellW = 5.2;
    const cellD = 4.4;
    const width = Math.max(isRoot ? 15 : 11, cols * cellW + 3.5);
    const depth = Math.max(isRoot ? 13 : 10, rows * cellD + 4);
    const color = new THREE.Color(office.color || '#e8600c');

    // Sala del departamento: piso, alfombra, paredes en L, ventanas, planta
    const room = buildRoom({ width, depth, color: office.color || '#e8600c', isRoot });
    room.base.userData.officeId = office.id;
    pickables.push(room.base);
    g.add(room.group);

    // Hub: punto discreto sobre la sala por donde pasan los mensajes
    const hub = new THREE.Mesh(new THREE.SphereGeometry(isRoot ? 0.4 : 0.26, 16, 12), new THREE.MeshBasicMaterial({ color }));
    hub.position.set(0, HUB_Y, 0);
    g.add(hub);

    const tag = label(`<span class="dot" style="background:${office.color}"></span>${office.name}`, 'label office-label');
    tag.position.set(0, FLOOR_Y + WALL_H + 0.9, -depth / 2);
    tag.element.dataset.officeId = office.id;
    tag.element.setAttribute('aria-hidden', 'true');
    tag.element.addEventListener('click', () => onSelect?.({ type: 'office', id: office.id }));
    g.add(tag);

    // Puestos de trabajo en cuadrícula; los escritorios de cada lado se miran entre sí
    agents.forEach((agent, i) => {
      const c = i % cols;
      const r = Math.floor(i / cols);
      const x = (c - (cols - 1) / 2) * cellW + 0.4;
      const z = (r - (rows - 1) / 2) * cellD + 0.9;
      const faceDir = cols === 1 ? 1 : x < 0.5 ? 1 : -1;
      g.add(buildAgent(agent, office, x, z, faceDir));
    });

    world.add(g);
    g.updateMatrixWorld(true);
    officeViews.set(office.id, {
      group: g, hub, hubWorld: hub.getWorldPosition(new THREE.Vector3()), color, parentId: office.parentId, base: room.base,
      size: Math.max(width, depth),
    });
  }

  // Oficinista en su escritorio
  function buildAgent(agent, office, x, z, faceDir = 1) {
    const prov = provider(agent.provider);
    const ws = buildWorkstation(agent.id, prov.color);
    const g = ws.group;
    g.position.set(x, FLOOR_Y, z);
    g.rotation.y = (faceDir * Math.PI) / 2;

    const anchor = new THREE.Object3D();
    anchor.position.set(0, 2.9, 0);
    g.add(anchor);

    const tag = label(`<b>${agent.name}</b><span class="prov">${prov.short}</span>`, 'label agent-label');
    tag.position.set(0, 3.25, 0);
    tag.element.addEventListener('click', () => onSelect?.({ type: 'agent', id: agent.id }));
    tag.element.setAttribute('aria-hidden', 'true');
    g.add(tag);

    ws.pickables.forEach((m) => {
      m.userData.agentId = agent.id;
      pickables.push(m);
    });

    agentViews.set(agent.id, {
      id: agent.id,
      group: g, ...ws, anchor, officeId: office.id, pulse: 0, phase: Math.random() * 6, tag,
      baseScreen: ws.screenMat.color.clone(),
    });
    return g;
  }

  function arc(a, b, lift) {
    const mid = a.clone().lerp(b, 0.5);
    mid.y += lift;
    return new THREE.QuadraticBezierCurve3(a.clone(), mid, b.clone());
  }

  // Conexiones entre oficinas: arcos finos
  function buildCorridors() {
    corridors = [];
    for (const [id, v] of officeViews) {
      const parent = officeViews.get(v.parentId);
      if (!parent) continue;
      const curve = arc(parent.hubWorld, v.hubWorld, 5);
      const line = new THREE.Line(
        new THREE.BufferGeometry().setFromPoints(curve.getPoints(64)),
        new THREE.LineBasicMaterial({ color: v.color, transparent: true, opacity: 0.3 }),
      );
      world.add(line);
      corridors.push({ curve, color: v.color, id });
    }
  }

  function clear() {
    scene.remove(world);
    world.traverse((o) => {
      // Las geometrías y materiales compartidos (userData.keep) se reutilizan entre reconstrucciones
      if (o.geometry && !o.geometry.userData.keep) o.geometry.dispose();
      if (o.material && !Array.isArray(o.material) && !o.material.userData.keep) o.material.dispose();
    });
    world = new THREE.Group();
    scene.add(world);
    agentViews = new Map();
    officeViews = new Map();
    sourceViews = new Map();
    pickables = [];
    for (const p of packets.splice(0)) disposePacket(p);
    for (const d of ambient.splice(0)) scene.remove(d.mesh);
  }

  function rebuild(state, sources = []) {
    clear();
    const { root, pos } = layoutOffices(state.offices);
    for (const office of state.offices) {
      const p = pos.get(office.id);
      if (!p) continue;
      buildOffice(office, p, state.agents.filter((a) => a.officeId === office.id), office.id === root.id);
    }
    buildCorridors();
    buildSources(sources);
    applyTheme(world);
    if (selectedId) setSelected(selectedId);
  }

  // ---------- temas (src/themes.js) ----------
  let theme = { id: 'inmersivo', scene: { colors: {}, packets: {} } };
  const toonGradient = (() => {
    const t = new THREE.DataTexture(new Uint8Array([70, 70, 70, 255, 160, 160, 160, 255, 255, 255, 255, 255]), 3, 1);
    t.minFilter = t.magFilter = THREE.NearestFilter;
    t.needsUpdate = true;
    return t;
  })();
  const themed = new WeakMap(); // material original -> { id, mat }
  const mapColor = (hex, basic) => {
    const sc = theme.scene;
    const m = sc.colors?.[hex];
    return m && (!sc.basicOnly?.includes(hex) || basic) ? m : null;
  };
  function themeMaterial(orig) {
    if (!orig.color) return orig;
    const basic = orig.isMeshBasicMaterial || orig.isLineBasicMaterial;
    if (orig.userData.live) {
      // Materiales animados: se recolorean en su lugar (el bucle de animación los sigue usando)
      orig.userData.baseHex ||= '#' + orig.color.getHexString();
      orig.color.set(mapColor(orig.userData.baseHex, basic) || orig.userData.baseHex);
      return orig;
    }
    const mapped = mapColor('#' + orig.color.getHexString(), basic);
    const toon = theme.scene.toon && orig.isMeshStandardMaterial;
    if (!mapped && !toon) return orig;
    const prev = themed.get(orig);
    if (prev?.id === theme.id) return prev.mat;
    const mat = toon
      ? new THREE.MeshToonMaterial({
          color: mapped || orig.color, gradientMap: toonGradient, transparent: orig.transparent, opacity: orig.opacity,
          emissive: orig.emissive, emissiveIntensity: orig.emissiveIntensity,
        })
      : orig.clone();
    if (!toon) mat.color.set(mapped);
    mat.userData.keep = !!orig.userData.keep;
    themed.set(orig, { id: theme.id, mat });
    return mat;
  }
  function applyTheme(root) {
    root.traverse((o) => {
      if (!(o.isMesh || o.isLine) || !o.material || Array.isArray(o.material) || o.userData.themeSkip) return;
      const orig = o.userData.origMat || (o.userData.origMat = o.material);
      o.material = themeMaterial(orig);
    });
  }
  function setTheme(id, sc) {
    theme = { id, scene: sc };
    scene.background = new THREE.Color(sc.background);
    scene.fog = new THREE.Fog(sc.background, sc.fog[0], sc.fog[1]);
    floor.material.color.set(sc.ground);
    dots.material.uniforms.uColor.value.set(sc.dots);
    hemi.color.set(sc.hemi[0]);
    hemi.groundColor.set(sc.hemi[1]);
    hemi.intensity = sc.hemi[2];
    sun.intensity = sc.sun;
    [bloom.strength, bloom.radius, bloom.threshold] = sc.bloom;
    bloom.enabled = sc.bloom[0] > 0;
    userOrb.material.color.set(sc.packets?.['#ffffff'] || '#ffffff');
    const ratio = Math.min(window.devicePixelRatio, 2) * sc.pixel;
    renderer.setPixelRatio(ratio);
    composer.setPixelRatio(ratio);
    resize();
    applyTheme(world);
  }

  // ---------- fuentes de datos (Compaq, Esfera, Monday…) ----------
  // Se dibujan como bases de datos fuera de la oficina de su agente, unidas por una línea.
  function buildSources(sources) {
    const byOffice = new Map();
    for (const src of sources) {
      const av = agentViews.get(src.agentId);
      if (!av) continue;
      if (!byOffice.has(av.officeId)) byOffice.set(av.officeId, []);
      byOffice.get(av.officeId).push({ src, av });
    }
    for (const [officeId, list] of byOffice) {
      const ov = officeViews.get(officeId);
      const center = ov.group.position.clone();
      const out = center.clone().setY(0);
      if (out.lengthSq() < 1) out.set(0, 0, 1);
      out.normalize();
      const perp = new THREE.Vector3(-out.z, 0, out.x);
      const agentPos = (av) => av.group.getWorldPosition(new THREE.Vector3());
      // Ordenadas según la posición lateral de su agente para que las líneas no se crucen
      list.sort((a, b) => agentPos(a.av).sub(center).dot(perp) - agentPos(b.av).sub(center).dot(perp));
      list.forEach(({ src, av }, i) => {
        const p = center.clone().addScaledVector(out, ov.size / 2 + 7).addScaledVector(perp, (i - (list.length - 1) / 2) * 10.5);
        p.y = 0;
        const g = new THREE.Group();
        g.position.copy(p);
        const mat = new THREE.MeshStandardMaterial({ color: '#dedede', roughness: 0.55, metalness: 0, emissive: '#e8600c', emissiveIntensity: 0 });
        mat.userData.live = true; // se anima: el tema la recolorea en su lugar
        for (let k = 0; k < 3; k++) {
          const disc = new THREE.Mesh(new THREE.CylinderGeometry(1.3, 1.3, 0.55, 40), mat);
          disc.position.y = 0.4 + k * 0.72;
          disc.castShadow = true;
          disc.userData.sourceId = src.id;
          pickables.push(disc);
          g.add(disc);
        }
        const ring = new THREE.Mesh(new THREE.RingGeometry(1.75, 1.85, 48), new THREE.MeshBasicMaterial({ color: '#e8600c', side: THREE.DoubleSide, transparent: true, opacity: 0.6 }));
        ring.rotation.x = -Math.PI / 2;
        ring.position.y = 0.03;
        g.add(ring);
        const tag = label(`<b>${src.name}</b>`, 'label source-label');
        tag.element.title = src.desc;
        tag.position.set(0, 3.3, 0);
        tag.element.addEventListener('click', () => onSelect?.({ type: 'source', id: src.id }));
        g.add(tag);
        world.add(g);
        // Línea punteada fuente → agente
        const a = p.clone().setY(0.06);
        const b = agentPos(av).setY(0.06);
        const line = new THREE.Line(
          new THREE.BufferGeometry().setFromPoints([a, b]),
          new THREE.LineDashedMaterial({ color: '#e8600c', dashSize: 0.4, gapSize: 0.6, transparent: true, opacity: 0.35 }),
        );
        line.computeLineDistances();
        world.add(line);
        sourceViews.set(src.id, { group: g, top: p.clone().setY(2.6), pulse: 0, mat, ring });
      });
    }
  }

  // ---------- mensajes ----------
  function anchorOf(id) {
    if (id === 'user') return USER_POS.clone();
    if (id === 'external') return EXTERNAL_POS.clone();
    if (id.startsWith?.('src:')) return sourceViews.get(id.slice(4))?.top.clone() || null;
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
    // Fuente ↔ agente: arco directo, sin pasar por hubs
    if (fromId.startsWith('src:') || toId.startsWith('src:')) return [a, b];
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
    color = theme.scene.packets?.[String(color).toLowerCase()] || color;
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
      new THREE.LineBasicMaterial({ color: c, transparent: true, opacity: 0.35 }),
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
    if (id.startsWith?.('src:') && sourceViews.has(id.slice(4))) sourceViews.get(id.slice(4)).pulse = 1;
  }

  function spawnAmbient() {
    if (!corridors.length) return;
    const c = corridors[Math.floor(Math.random() * corridors.length)];
    const mesh = new THREE.Mesh(new THREE.SphereGeometry(0.1, 8, 6), new THREE.MeshBasicMaterial({ color: c.color, transparent: true, opacity: 0.7 }));
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
    const { agentId, officeId, sourceId } = hit.object.userData;
    if (sourceId) onSelect?.({ type: 'source', id: sourceId });
    else if (agentId) onSelect?.({ type: 'agent', id: agentId });
    else if (officeId) onSelect?.({ type: 'office', id: officeId });
  });
  renderer.domElement.addEventListener('pointerdown', () => (controls.autoRotate = false), { once: true });

  // Hover: muestra el nombre del agente bajo el cursor
  let hoveredId = null;
  let hoverQueued = false;
  renderer.domElement.addEventListener('pointermove', (e) => {
    if (hoverQueued) return;
    hoverQueued = true;
    requestAnimationFrame(() => {
      hoverQueued = false;
      const rect = renderer.domElement.getBoundingClientRect();
      pointer.set(((e.clientX - rect.left) / rect.width) * 2 - 1, -((e.clientY - rect.top) / rect.height) * 2 + 1);
      raycaster.setFromCamera(pointer, camera);
      const hit = raycaster.intersectObjects(pickables, false)[0];
      hoveredId = hit?.object.userData.agentId || null;
      renderer.domElement.style.cursor = hit ? 'pointer' : '';
    });
  });

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
    if (!sel) return flyTo(new THREE.Vector3(0, 0, camera.aspect < 1 ? 22 : 12), 142 * portraitZoom());
    if (sel.type === 'agent') {
      const v = agentViews.get(sel.id);
      if (v) flyTo(v.group.getWorldPosition(new THREE.Vector3()), 28);
    } else if (sel.type === 'source') {
      const v = sourceViews.get(sel.id);
      if (v) flyTo(v.group.position.clone(), 34);
    } else {
      const v = officeViews.get(sel.id);
      if (v) flyTo(v.group.position.clone(), 52);
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
  // En pantallas verticales la escena (ancha) necesita más distancia para caber
  const portraitZoom = () => (camera.aspect < 1 ? Math.min(2.2, 1 / camera.aspect) * 0.95 : 1);
  let firstResize = true;
  function resize() {
    const w = container.clientWidth;
    const h = container.clientHeight;
    renderer.setSize(w, h);
    labels.setSize(w, h);
    composer.setSize(w, h);
    bloom.resolution.set(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    if (firstResize) {
      firstResize = false;
      camera.position.multiplyScalar(portraitZoom());
      // Sube la escena en pantalla para que las fuentes no queden detrás de la barra inferior
      const shift = camera.aspect < 1 ? 22 : 12;
      controls.target.set(0, 0, shift);
      camera.position.z += shift;
    }
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
      // Respiración en reposo; al trabajar teclea y mueve la cabeza
      const busy = working.has(v.id);
      v.torso.scale.y = 1 + Math.sin(time * 2 + v.phase) * 0.015;
      v.arms.forEach((a, k) => (a.rotation.x = -1.0 + (busy ? Math.sin(time * 18 + k * Math.PI) * 0.08 : 0)));
      v.headGroup.rotation.x = busy ? Math.sin(time * 3) * 0.06 : Math.sin(time * 0.7 + v.phase) * 0.03;
      v.headGroup.rotation.y = busy ? 0 : Math.sin(time * 0.4 + v.phase) * 0.25;
      v.torso.material.emissiveIntensity = v.pulse * 0.35;
      v.screenMat.color.copy(v.baseScreen).multiplyScalar(1 + v.pulse * 2.4);
      v.halo.scale.setScalar(1 + v.pulse * 0.9);
      v.halo.material.opacity = 0.35 + v.pulse * 0.6;
      // Nombres solo al acercarte, al pasar el cursor, al seleccionar o mientras trabaja
      v.group.getWorldPosition(tmp);
      const show = v.pulse > 0.2 || v.id === hoveredId || v.id === selectedId || tmp.distanceTo(camera.position) < 48;
      v.tag.element.classList.toggle('active', v.pulse > 0.2);
      v.tag.element.classList.toggle('far', !show);
    }
    for (const v of sourceViews.values()) {
      v.pulse = Math.max(0, v.pulse - rawDt * 0.8);
      v.mat.emissiveIntensity = v.pulse * 0.9;
      v.ring.scale.setScalar(1 + v.pulse * 0.6);
    }
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
        p.line.material.opacity = Math.max(0, 0.35 * (1 - p.fade));
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
    if (ambientAcc > 0.7 && !reduceMotion.matches) {
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

    // Con el dashboard abierto la escena casi no se ve: se dibuja a ~15 cuadros por segundo
    frameSkip = (frameSkip + 1) % (lowPower && !packets.length ? 4 : 1);
    if (!frameSkip) {
      composer.render();
      labels.render(scene, camera);
    }
    requestAnimationFrame(tick);
  }
  let frameSkip = 0;
  let lowPower = false;
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
    setTheme,
    setLowPower: (on) => (lowPower = on),
  };
}
