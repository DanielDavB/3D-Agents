// Visor de documentos: muestra cualquier archivo del ciclo como tabla (con pestañas por hoja y
// buscador) y permite descargar el original o la hoja en CSV.

const esc = (s = '') => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const VISIBLES = 400; // filas pintadas a la vez (el resto se alcanza con el buscador)

export function toCsv(filas, columnas = Object.keys(filas[0] || {})) {
  const cell = (v) => {
    const s = v == null ? '' : String(v);
    return /[",\n\r]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
  };
  return '﻿' + [columnas.map(cell).join(','), ...filas.map((r) => columnas.map((c) => cell(r[c])).join(','))].join('\r\n');
}

export function descargar(nombre, contenido, tipo = 'text/csv;charset=utf-8') {
  const url = URL.createObjectURL(contenido instanceof Blob ? contenido : new Blob([contenido], { type: tipo }));
  Object.assign(document.createElement('a'), { href: url, download: nombre }).click();
  setTimeout(() => URL.revokeObjectURL(url), 2000);
}

export const descargarCsv = (nombre, filas, columnas) => descargar(nombre.replace(/\.[a-z]+$/i, '') + '.csv', toCsv(filas, columnas));

const fmt = (v) => (typeof v === 'number' ? v.toLocaleString('es-MX', { maximumFractionDigits: 2 }) : v);

let dlg;
function dialog() {
  if (dlg) return dlg;
  dlg = document.createElement('dialog');
  dlg.id = 'viewerDialog';
  dlg.className = 'viewer';
  dlg.innerHTML = `<div class="viewer-head">
      <div><span class="pill" id="vwKind">Documento</span><h3 id="vwTitle"></h3><small id="vwSub" class="muted"></small></div>
      <button class="icon-btn close" data-vw="close" title="Cerrar">✕</button>
    </div>
    <div class="viewer-tools">
      <nav class="tabs" id="vwTabs"></nav>
      <input id="vwSearch" type="search" placeholder="Buscar en la hoja…" autocomplete="off" />
    </div>
    <div class="viewer-body" id="vwBody"></div>
    <div class="viewer-foot">
      <span id="vwCount" class="muted"></span>
      <div class="row tight"><a id="vwOriginal" class="mini" target="_blank" rel="noopener" hidden>Descargar original</a><button class="mini accent" data-vw="csv">Descargar hoja en CSV</button></div>
    </div>`;
  document.body.appendChild(dlg);
  dlg.addEventListener('click', (e) => {
    if (e.target === dlg || e.target.closest('[data-vw="close"]')) dlg.close();
  });
  return dlg;
}

// cargar: async () => ({ hojas: [{ nombre, columnas, filas, total }], url?, nombre? })
export async function abrirDocumento({ titulo, subtitulo = '', tipo = 'Documento', cargar, nombreArchivo, alDescargar }) {
  const d = dialog();
  const $ = (id) => d.querySelector(id);
  $('#vwKind').textContent = tipo;
  $('#vwTitle').textContent = titulo;
  $('#vwSub').textContent = subtitulo;
  $('#vwTabs').innerHTML = '';
  $('#vwSearch').value = '';
  $('#vwCount').textContent = '';
  $('#vwOriginal').hidden = true;
  $('#vwBody').innerHTML = '<div class="empty"><p>Cargando documento…</p></div>';
  if (!d.open) d.showModal();

  let data;
  try {
    data = await cargar();
  } catch (err) {
    $('#vwBody').innerHTML = `<div class="empty"><p>No se pudo abrir: ${esc(err.message)}</p></div>`;
    return;
  }
  const orig = $('#vwOriginal');
  orig.onclick = null;
  if (data.url) Object.assign(orig, { href: data.url, hidden: false, download: data.nombre || titulo });
  else if (alDescargar) {
    Object.assign(orig, { href: '#', hidden: false });
    orig.removeAttribute('download');
    orig.onclick = (e) => (e.preventDefault(), alDescargar());
  }
  let activa = 0;
  const pintar = () => {
    const h = data.hojas[activa];
    const q = $('#vwSearch').value.trim().toLowerCase();
    const filas = q ? h.filas.filter((r) => h.columnas.some((c) => String(r[c] ?? '').toLowerCase().includes(q))) : h.filas;
    const num = (c) => filas.slice(0, 30).some((r) => typeof r[c] === 'number');
    $('#vwBody').innerHTML = h.filas.length
      ? `<table class="data sheet"><thead><tr><th class="num">#</th>${h.columnas.map((c) => `<th class="${num(c) ? 'num' : ''}">${esc(c)}</th>`).join('')}</tr></thead>
        <tbody>${filas
          .slice(0, VISIBLES)
          .map((r, i) => `<tr><td class="num muted">${i + 1}</td>${h.columnas.map((c) => `<td class="${typeof r[c] === 'number' ? 'num' : ''}">${esc(fmt(r[c] ?? ''))}</td>`).join('')}</tr>`)
          .join('')}</tbody></table>`
      : '<div class="empty"><p>Hoja vacía.</p></div>';
    const total = h.total ?? h.filas.length;
    $('#vwCount').textContent = `${filas.length.toLocaleString('es-MX')} de ${total.toLocaleString('es-MX')} filas${filas.length > VISIBLES ? ` · se muestran ${VISIBLES}, usa el buscador` : ''}${total > h.filas.length ? ' · vista limitada' : ''}`;
  };
  $('#vwTabs').innerHTML = data.hojas.length > 1 ? data.hojas.map((h, i) => `<button data-hoja="${i}" class="${i ? '' : 'on'}">${esc(h.nombre)}</button>`).join('') : '';
  $('#vwTabs').onclick = (e) => {
    const b = e.target.closest('[data-hoja]');
    if (!b) return;
    activa = Number(b.dataset.hoja);
    $('#vwTabs').querySelectorAll('button').forEach((x) => x.classList.toggle('on', x === b));
    pintar();
  };
  $('#vwSearch').oninput = pintar;
  d.querySelector('[data-vw="csv"]').onclick = () => {
    const h = data.hojas[activa];
    const base = (nombreArchivo || titulo).replace(/\.[a-z]+$/i, '');
    descargarCsv(data.hojas.length > 1 ? `${base}_${h.nombre}` : base, h.filas, h.columnas);
  };
  pintar();
}

// Atajo para tablas que ya están en memoria (hallazgos, indicadores, bitácora…)
export const abrirTabla = ({ titulo, subtitulo, tipo = 'Tabla', hojas }) =>
  abrirDocumento({ titulo, subtitulo, tipo, nombreArchivo: titulo, cargar: async () => ({ hojas: hojas.map((h) => ({ ...h, columnas: h.columnas || Object.keys(h.filas[0] || {}) })) }) });
