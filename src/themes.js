// Tres estilos de interfaz: cambian la escena 3D (luces, materiales, posprocesado) y la UI (CSS).
//  - inmersivo: 3D oscuro con brillo, vidrio y sombras profundas (identidad negro/naranja/blanco)
//  - juego:     videojuego retro: píxeles grandes, sombreado tipo caricatura, HUD con barra de XP
//  - claro:     ejecutivo claro: papel cálido, sin brillo, pensado para presentar a dirección
const KEY = '3d-agents:tema';

export const THEMES = {
  inmersivo: {
    label: '3D inmersivo',
    hint: 'Oscuro, con brillo y vidrio',
    scene: {
      background: '#08080a', fog: [110, 250], ground: '#0c0c0e', dots: '#4a4a4a',
      hemi: ['#ffffff', '#101010', 1.25], sun: 1.3, bloom: [0.85, 0.7, 0.78], pixel: 1, toon: false, colors: {},
    },
  },
  juego: {
    label: 'Videojuego',
    hint: 'Píxeles, caricatura y HUD',
    scene: {
      background: '#140f2d', fog: [130, 280], ground: '#0f0b24', dots: '#5c4dd6',
      hemi: ['#c9bcff', '#2a1f5c', 1.5], sun: 1.15, bloom: [0.45, 0.2, 0.85], pixel: 0.42, toon: true,
      // colores de la oficina (props.js) → paleta arcade
      colors: {
        '#1c1c1c': '#2a1f5c', '#29231f': '#3b2a7a', '#262626': '#5a45b8', '#d2d2d2': '#ffcf5c', '#8c8c8c': '#ff8a3d',
        '#2b2b2b': '#ff5c8a', '#2f2f2f': '#ff8a3d', '#5d7558': '#4cd964', '#dedede': '#5ce1e6', '#121212': '#101026',
      },
      packets: { '#ffffff': '#5ce1e6' },
    },
  },
  claro: {
    label: 'Claro ejecutivo',
    hint: 'Papel cálido, sin brillo',
    scene: {
      background: '#efece6', fog: [150, 320], ground: '#e6e1d8', dots: '#c9c1b4',
      hemi: ['#ffffff', '#d8d2c8', 1.7], sun: 1.35, bloom: [0, 0, 1], pixel: 1, toon: false,
      colors: {
        '#1c1c1c': '#dcd6cc', '#29231f': '#f2e8dc', '#262626': '#fbfaf7', '#d2d2d2': '#d9c4a3', '#2b2b2b': '#5b5b5b',
        '#2f2f2f': '#c9b29a', '#dedede': '#ffffff', '#121212': '#2a2a2a', '#4a4a4a': '#8a8a8a',
        // remates y líneas blancas de las salas: oscuros para que se vean sobre fondo claro
        '#b3b3b3': '#3a3a3a', '#ffffff': '#2b2b2b',
      },
      basicOnly: ['#b3b3b3', '#ffffff'],
      packets: { '#ffffff': '#2b2b2b' },
    },
  },
};

export function currentTheme() {
  try {
    const q = new URLSearchParams(location.search).get('tema');
    if (q && THEMES[q]) return q;
    const s = localStorage.getItem(KEY);
    return THEMES[s] ? s : 'inmersivo';
  } catch {
    return 'inmersivo';
  }
}

export function setupThemes({ world, onChange }) {
  const list = document.querySelector('#themeList');
  const apply = (id) => {
    document.documentElement.dataset.tema = id;
    world.setTheme(id, THEMES[id].scene);
    try {
      localStorage.setItem(KEY, id);
    } catch {
      /* sin almacenamiento */
    }
    list.querySelectorAll('[data-theme]').forEach((b) => b.classList.toggle('on', b.dataset.theme === id));
    onChange?.(id);
  };
  list.innerHTML =
    '<div class="menu-title">Estilo de la interfaz</div>' +
    Object.entries(THEMES)
      .map(([id, t]) => `<button data-theme="${id}"><i class="swatch ${id}"></i><span><b>${t.label}</b><small>${t.hint}</small></span></button>`)
      .join('');
  list.addEventListener('click', (e) => {
    const b = e.target.closest('[data-theme]');
    if (!b) return;
    apply(b.dataset.theme);
    b.closest('details').removeAttribute('open');
  });
  apply(currentTheme());
}
