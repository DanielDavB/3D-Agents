// Modelos 3D low-poly de la oficina: salas (departamentos) y puestos de trabajo con oficinistas.
// Geometrías y materiales estáticos se comparten (userData.keep evita que se liberen al reconstruir).
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';

export const FLOOR_Y = 0.5; // altura del piso de cada oficina
export const WALL_H = 2.4;

const geoCache = new Map();
const matCache = new Map();
function G(key, make) {
  if (!geoCache.has(key)) {
    const g = make();
    g.userData.keep = true;
    geoCache.set(key, g);
  }
  return geoCache.get(key);
}
function M(color, { rough = 0.7, metal = 0, basic = false, opacity = 1 } = {}) {
  const key = `${color}|${rough}|${metal}|${basic}|${opacity}`;
  if (!matCache.has(key)) {
    const opts = { color, transparent: opacity < 1, opacity };
    const m = basic ? new THREE.MeshBasicMaterial(opts) : new THREE.MeshStandardMaterial({ ...opts, roughness: rough, metalness: metal });
    m.userData.keep = true;
    matCache.set(key, m);
  }
  return matCache.get(key);
}
const box = (w, h, d) => G(`box${w}|${h}|${d}`, () => new THREE.BoxGeometry(w, h, d));
const cyl = (rt, rb, h, s = 20) => G(`cyl${rt}|${rb}|${h}|${s}`, () => new THREE.CylinderGeometry(rt, rb, h, s));
const cap = (r, l) => G(`cap${r}|${l}`, () => new THREE.CapsuleGeometry(r, l, 6, 14));
const sph = (r, ws = 20, hs = 14) => G(`sph${r}|${ws}`, () => new THREE.SphereGeometry(r, ws, hs));

function mesh(geo, mat, x = 0, y = 0, z = 0, { shadow = true } = {}) {
  const m = new THREE.Mesh(geo, mat);
  m.position.set(x, y, z);
  if (shadow) {
    m.castShadow = true;
    m.receiveShadow = true;
  }
  return m;
}

// Paleta de la oficina (dentro de la identidad negro/naranja/blanco)
const C = {
  floor: '#1c1c1c',
  carpet: '#29231f',
  wall: '#262626',
  deskTop: '#d2d2d2',
  deskLeg: '#8c8c8c',
  dark: '#2b2b2b',
  monitor: '#121212',
  pot: '#2f2f2f',
  leaf: '#5d7558',
};
const SKIN = ['#f1c9a9', '#e0ac85', '#c48a64', '#9a6646', '#6e4430'];
const HAIR = ['#1d1b19', '#3b2a20', '#6b4a32', '#b9b4ab', '#2a2a2a', '#8c5a3c'];
const SHIRT = ['#f2f2f2', '#d4d4d4', '#3a3a3a', '#e8600c', '#5a5a5a', '#fde8dc'];
const PANTS = ['#262626', '#3a3a3a', '#1e2228'];

// Variaciones deterministas por agente (siempre el mismo aspecto)
function hash(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) h = Math.imul(h ^ str.charCodeAt(i), 16777619);
  return h >>> 0;
}
const pickBy = (arr, h, shift) => arr[(h >>> shift) % arr.length];

// ---------- sala / departamento ----------
export function buildRoom({ width, depth, color, isRoot }) {
  const g = new THREE.Group();
  const edgeColor = new THREE.Color(color);

  const base = mesh(G(`room${width}|${depth}`, () => new RoundedBoxGeometry(width, FLOOR_Y, depth, 3, 0.25)), M(C.floor, { rough: 0.9 }), 0, FLOOR_Y / 2, 0);
  g.add(base);

  const carpet = mesh(box(width - 1.4, 0.02, depth - 1.6), M(C.carpet, { rough: 1 }), 0.2, FLOOR_Y + 0.01, 0.3);
  carpet.castShadow = false;
  g.add(carpet);

  // Paredes en L (fondo e izquierda): vista de "casa de muñecas" abierta hacia la cámara
  const wallMat = M(C.wall, { rough: 0.85 });
  const back = mesh(box(width, WALL_H, 0.22), wallMat, 0, FLOOR_Y + WALL_H / 2, -depth / 2 + 0.11);
  const left = mesh(box(0.22, WALL_H, depth), wallMat, -width / 2 + 0.11, FLOOR_Y + WALL_H / 2, 0);
  g.add(back, left);
  // Remate luminoso en el borde superior de las paredes (color del departamento)
  // Atenuado para que el blanco no deslumbre con el bloom
  const capMat = new THREE.MeshBasicMaterial({ color: edgeColor.clone().multiplyScalar(0.7) });
  g.add(mesh(box(width, 0.06, 0.24), capMat, 0, FLOOR_Y + WALL_H + 0.03, -depth / 2 + 0.11, { shadow: false }));
  g.add(mesh(box(0.24, 0.06, depth), capMat, -width / 2 + 0.11, FLOOR_Y + WALL_H + 0.03, 0, { shadow: false }));
  // Línea de piso en los lados abiertos
  const sill = new THREE.MeshBasicMaterial({ color: edgeColor, transparent: true, opacity: 0.55 });
  g.add(mesh(box(width, 0.03, 0.05), sill, 0, FLOOR_Y + 0.02, depth / 2 - 0.03, { shadow: false }));
  g.add(mesh(box(0.05, 0.03, depth), sill, width / 2 - 0.03, FLOOR_Y + 0.02, 0, { shadow: false }));

  // Ventanas en la pared del fondo
  const winMat = M('#ffffff', { basic: true, opacity: 0.05 });
  const nWin = Math.max(1, Math.floor((width - 2) / 3.2));
  for (let i = 0; i < nWin; i++) {
    const x = (i - (nWin - 1) / 2) * 3.2;
    g.add(mesh(box(2.4, 1.1, 0.02), winMat, x, FLOOR_Y + 1.55, -depth / 2 + 0.235, { shadow: false }));
  }

  if (isRoot) {
    // Pantalla de mando con barras naranjas
    const screen = new THREE.Group();
    screen.position.set(-width / 2 + 0.24, FLOOR_Y + 1.5, -0.3);
    screen.rotation.y = Math.PI / 2;
    screen.add(mesh(box(3.6, 1.6, 0.06), M(C.monitor, { rough: 0.4 }), 0, 0, 0));
    [0.5, 0.8, 0.35, 0.95, 0.65].forEach((h, i) => {
      screen.add(mesh(box(0.38, h, 0.02), M('#e8600c', { basic: true }), -1.2 + i * 0.6, -0.65 + h / 2, 0.045, { shadow: false }));
    });
    g.add(screen);
  }

  // Planta en la esquina abierta
  const plant = new THREE.Group();
  plant.position.set(width / 2 - 0.8, FLOOR_Y, depth / 2 - 0.8);
  plant.add(mesh(cyl(0.32, 0.24, 0.55), M(C.pot), 0, 0.28, 0));
  plant.add(mesh(sph(0.42, 12, 10), M(C.leaf, { rough: 0.9 }), 0, 0.85, 0));
  plant.add(mesh(sph(0.3, 12, 10), M(C.leaf, { rough: 0.9 }), 0.18, 1.2, 0.05));
  plant.add(mesh(sph(0.26, 12, 10), M(C.leaf, { rough: 0.9 }), -0.16, 1.12, -0.1));
  g.add(plant);

  return { group: g, base };
}

// ---------- puesto de trabajo con oficinista sentado ----------
// El oficinista mira hacia +z local; el escritorio queda enfrente.
export function buildWorkstation(agentId, providerColor) {
  const h = hash(agentId);
  const skin = pickBy(SKIN, h, 0);
  const hair = pickBy(HAIR, h, 4);
  const shirt = pickBy(SHIRT, h, 8);
  const pants = pickBy(PANTS, h, 12);
  const style = (h >>> 16) % 3; // 0 corto, 1 chongo, 2 largo
  const pColor = new THREE.Color(providerColor);

  const g = new THREE.Group();

  // Escritorio
  g.add(mesh(box(2.2, 0.08, 1.0), M(C.deskTop, { rough: 0.5 }), 0, 1.05, 1.0));
  g.add(mesh(box(0.06, 1.0, 0.9), M(C.deskLeg, { rough: 0.6 }), -1.05, 0.52, 1.0));
  g.add(mesh(box(0.06, 1.0, 0.9), M(C.deskLeg, { rough: 0.6 }), 1.05, 0.52, 1.0));
  g.add(mesh(box(0.55, 0.03, 0.18), M(C.dark), 0, 1.105, 0.8));
  g.add(mesh(cyl(0.07, 0.06, 0.14, 12), M('#e8600c', { rough: 0.5 }), 0.75, 1.16, 0.75)); // taza

  // Monitor (la pantalla brilla con el color del conector)
  g.add(mesh(box(0.08, 0.32, 0.08), M(C.dark), 0, 1.25, 1.3));
  g.add(mesh(box(1.05, 0.64, 0.05), M(C.monitor, { rough: 0.4 }), 0, 1.68, 1.33));
  const screenMat = new THREE.MeshBasicMaterial({ color: pColor.clone().multiplyScalar(0.35) });
  const screen = mesh(box(0.95, 0.54, 0.01), screenMat, 0, 1.68, 1.3, { shadow: false });
  g.add(screen);

  // Silla
  g.add(mesh(cyl(0.34, 0.34, 0.05, 16), M(C.dark), 0, 0.05, -0.1));
  g.add(mesh(cyl(0.05, 0.05, 0.6, 8), M('#4a4a4a', { metal: 0.4 }), 0, 0.4, -0.1));
  g.add(mesh(box(0.72, 0.12, 0.68), M(C.dark), 0, 0.74, -0.1));
  g.add(mesh(box(0.72, 0.85, 0.1), M(C.dark), 0, 1.25, -0.5));

  // Oficinista
  const person = new THREE.Group();
  const pantsMat = M(pants);
  const skinMat = M(skin, { rough: 0.6 });
  // piernas sentadas: muslos hacia adelante, espinillas hacia abajo
  for (const sx of [-0.15, 0.15]) {
    const thigh = mesh(cap(0.12, 0.42), pantsMat, sx, 0.92, 0.15);
    thigh.rotation.x = Math.PI / 2;
    person.add(thigh);
    person.add(mesh(cap(0.11, 0.42), pantsMat, sx, 0.56, 0.4));
    person.add(mesh(box(0.17, 0.1, 0.3), M('#161616'), sx, 0.14, 0.48));
  }
  // torso con ropa y gafete del color del conector
  const shirtMat = new THREE.MeshStandardMaterial({ color: shirt, roughness: 0.75, emissive: pColor, emissiveIntensity: 0 });
  shirtMat.userData.live = true; // brilla al recibir mensajes: el tema la recolorea en su lugar
  const torso = mesh(cap(0.27, 0.42), shirtMat, 0, 1.42, -0.08);
  torso.scale.set(1.18, 1, 0.8);
  person.add(torso);
  const badge = mesh(box(0.11, 0.15, 0.02), new THREE.MeshBasicMaterial({ color: pColor }), 0.11, 1.5, 0.15, { shadow: false });
  person.add(badge);
  // brazos hacia el teclado (pivote en el hombro)
  const arms = [];
  for (const sx of [-0.36, 0.36]) {
    const pivot = new THREE.Group();
    pivot.position.set(sx, 1.68, -0.05);
    pivot.rotation.x = -1.0;
    pivot.rotation.z = sx > 0 ? 0.12 : -0.12;
    pivot.add(mesh(cap(0.085, 0.55), shirtMat, 0, -0.36, 0));
    pivot.add(mesh(sph(0.08, 10, 8), skinMat, 0, -0.72, 0));
    person.add(pivot);
    arms.push(pivot);
  }
  // cabeza, pelo y ojos
  const headGroup = new THREE.Group();
  headGroup.position.set(0, 2.02, -0.04);
  headGroup.add(mesh(cyl(0.08, 0.09, 0.14, 10), skinMat, 0, -0.2, 0));
  headGroup.add(mesh(sph(0.26), skinMat, 0, 0, 0));
  const hairMat = M(hair, { rough: 0.9 });
  const cut = mesh(sph(0.28), hairMat, 0, 0.06, -0.04);
  cut.scale.set(1, 0.75, 1);
  headGroup.add(cut);
  if (style === 1) headGroup.add(mesh(sph(0.13, 12, 10), hairMat, 0, 0.18, -0.26));
  if (style === 2) headGroup.add(mesh(box(0.46, 0.42, 0.14), hairMat, 0, -0.14, -0.2));
  const eyeMat = M('#111111', { basic: true });
  headGroup.add(mesh(sph(0.03, 8, 6), eyeMat, -0.09, 0.02, 0.24, { shadow: false }));
  headGroup.add(mesh(sph(0.03, 8, 6), eyeMat, 0.09, 0.02, 0.24, { shadow: false }));
  person.add(headGroup);
  g.add(person);

  // Anillo en el piso (color del conector) y anillo de selección
  const halo = new THREE.Mesh(
    new THREE.RingGeometry(1.0, 1.08, 48),
    new THREE.MeshBasicMaterial({ color: pColor, transparent: true, opacity: 0.35, depthWrite: false, side: THREE.DoubleSide }),
  );
  halo.rotation.x = -Math.PI / 2;
  halo.position.set(0, 0.02, 0.1);
  g.add(halo);
  const select = new THREE.Mesh(new THREE.RingGeometry(1.25, 1.36, 56), new THREE.MeshBasicMaterial({ color: '#ffffff', side: THREE.DoubleSide }));
  select.rotation.x = -Math.PI / 2;
  select.position.set(0, 0.03, 0.1);
  select.visible = false;
  g.add(select);

  return { group: g, torso, badge, screen, screenMat, arms, headGroup, halo, select, pickables: [torso, headGroup.children[1], screen] };
}
