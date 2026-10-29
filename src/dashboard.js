// Dashboard ejecutivo del MVP: resumen (KPIs + gráficas), trazabilidad y consumo de IA.
// Gráficas en SVG propio. Paleta validada para superficie oscura (#161616):
// serie 1 naranja de marca #e8600c, serie 2 azul #3987e5. Estados con ícono + texto.
import { DATA, PROJECT, CONCLUSIONS } from './project.js';

const esc = (s = '') => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const M = (v) => `$${v.toFixed(1)}M`;
const money = (v) => (v >= 1e6 ? `$${(v / 1e6).toFixed(1)}M` : `$${Math.round(v / 1000)}K`);
const pct = (v) => `${v > 0 ? '+' : ''}${v.toFixed(1)}%`;
const usd = (v) => `$${v.toFixed(v < 1 ? 4 : 2)}`;
const SERIES = { ingresos: '#e8600c', egresos: '#3987e5' };
const STATUS = {
  bajo: { color: '#0ca30c', icon: '✓', label: 'Bajo' },
  medio: { color: '#fab219', icon: '!', label: 'Medio' },
  alto: { color: '#d03b3b', icon: '✕', label: 'Alto' },
};

// ---------- tooltip compartido ----------
let tip;
function tooltip() {
  if (!tip) {
    tip = document.createElement('div');
    tip.className = 'viz-tip';
    tip.hidden = true;
    document.body.appendChild(tip);
  }
  return tip;
}
export function showTip(html, x, y) {
  const t = tooltip();
  t.innerHTML = html;
  t.hidden = false;
  const r = t.getBoundingClientRect();
  t.style.left = `${Math.min(window.innerWidth - r.width - 8, x + 14)}px`;
  t.style.top = `${Math.max(8, y - r.height - 10)}px`;
}
export const hideTip = () => tip && (tip.hidden = true);

// ---------- KPIs ----------
function kpis(quality) {
  const n = DATA.months.length;
  const ing = DATA.ingresos[n - 1];
  const ingPrev = DATA.ingresos[n - 2];
  const flujo = ing - DATA.egresos[n - 1];
  const flujoPrev = ingPrev - DATA.egresos[n - 2];
  const delta = (cur, prev) => ((cur - prev) / prev) * 100;
  const trend = (d) =>
    `<span class="delta ${d >= 0 ? 'up' : 'down'}">${d >= 0 ? '▲' : '▼'} ${pct(d)} vs ${DATA.months[n - 2].toLowerCase()}</span>`;
  const tile = (label, value, foot) => `<div class="kpi"><span class="kpi-label">${label}</span><b>${value}</b>${foot}</div>`;
  return `<div class="kpis">
    ${tile(`Ingresos ${DATA.months[n - 1].toLowerCase()}`, M(ing), trend(delta(ing, ingPrev)))}
    ${tile('Flujo neto del mes', `${flujo >= 0 ? '+' : ''}${M(flujo)}`, trend(delta(flujo, flujoPrev)))}
    ${tile('Por cobrar vencido +60 días', M(DATA.cxcVencida), `<span class="delta down">✕ ${Math.round((DATA.cxcVencida / DATA.cxcTotal) * 100)}% de ${M(DATA.cxcTotal)} por cobrar</span>`)}
    ${tile('Calidad de datos', `${quality.score.toFixed(1)}%`, `<span class="delta ${quality.approved === quality.total ? 'up' : 'warn'}">${quality.approved === quality.total ? '✓' : '!'} ${quality.approved}/${quality.total} correcciones validadas</span>`)}
  </div>`;
}

// ---------- gráfica de líneas: ingresos vs egresos ----------
function lineChart() {
  const W = 560, H = 220, L = 40, R = 92, T = 14, B = 28;
  const max = 6;
  const x = (i) => L + (i * (W - L - R)) / (DATA.months.length - 1);
  const y = (v) => T + (1 - v / max) * (H - T - B);
  const path = (arr) => arr.map((v, i) => `${i ? 'L' : 'M'}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join('');
  const grid = [0, 2, 4, 6]
    .map((v) => `<line x1="${L}" x2="${W - R}" y1="${y(v)}" y2="${y(v)}" class="grid"/><text x="${L - 8}" y="${y(v) + 4}" class="tick" text-anchor="end">${v}M</text>`)
    .join('');
  const xs = DATA.months.map((m, i) => `<text x="${x(i)}" y="${H - 8}" class="tick" text-anchor="middle">${m}</text>`).join('');
  const last = DATA.months.length - 1;
  const series = Object.entries(SERIES)
    .map(([k, c]) => {
      const v = DATA[k][last];
      const label = k === 'ingresos' ? 'Ingresos' : 'Egresos';
      return `<path d="${path(DATA[k])}" fill="none" stroke="${c}" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>
        <circle cx="${x(last)}" cy="${y(v)}" r="4.5" fill="${c}" stroke="#161616" stroke-width="2"/>
        <text x="${x(last) + 10}" y="${y(v) + (k === 'ingresos' ? -2 : 12)}" class="end-label">${label} ${M(v)}</text>`;
    })
    .join('');
  const hits = DATA.months
    .map((m, i) => {
      const w = (W - L - R) / (DATA.months.length - 1);
      return `<rect class="hit" data-i="${i}" x="${x(i) - w / 2}" y="${T}" width="${w}" height="${H - T - B}"/>`;
    })
    .join('');
  return `<figure class="chart" data-chart="line">
    <figcaption><b>Ingresos vs egresos</b><span>MXN, millones · ${DATA.months[0]}–${DATA.months[last]}</span></figcaption>
    <div class="legend"><span><i style="background:${SERIES.ingresos}"></i>Ingresos</span><span><i style="background:${SERIES.egresos}"></i>Egresos</span></div>
    <svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Ingresos y egresos mensuales">
      ${grid}${xs}<line class="cross" x1="0" x2="0" y1="${T}" y2="${H - B}" visibility="hidden"/>${series}${hits}
    </svg>
    <details><summary>Ver tabla</summary><table><tr><th>Mes</th><th>Ingresos</th><th>Egresos</th><th>Flujo</th></tr>
      ${DATA.months.map((m, i) => `<tr><td>${m}</td><td>${M(DATA.ingresos[i])}</td><td>${M(DATA.egresos[i])}</td><td>${M(DATA.ingresos[i] - DATA.egresos[i])}</td></tr>`).join('')}
    </table></details>
  </figure>`;
}

// ---------- barras: facturación por peso invertido en marketing ----------
function roiChart() {
  const rows = DATA.channels.map((c) => ({ ...c, roi: c.facturacion / c.inversion })).sort((a, b) => b.roi - a.roi);
  const W = 560, rowH = 34, L = 96, R = 56, T = 6;
  const H = T + rows.length * rowH;
  const max = Math.ceil(rows[0].roi / 5) * 5;
  const bw = (v) => ((W - L - R) * v) / max;
  const bars = rows
    .map((r, i) => {
      const yy = T + i * rowH + (rowH - 18) / 2;
      const w = Math.max(6, bw(r.roi));
      // extremo redondeado (4px) en la punta, recto en la base
      const d = `M${L},${yy}h${w - 4}a4,4 0 0 1 4,4v10a4,4 0 0 1 -4,4h${-(w - 4)}z`;
      return `<text x="${L - 10}" y="${yy + 13}" class="cat" text-anchor="end">${r.name}</text>
        <path d="${d}" fill="${SERIES.ingresos}"/>
        <text x="${L + w + 8}" y="${yy + 13}" class="val">${r.roi.toFixed(1)}×</text>
        <rect class="hit" data-i="${i}" x="0" y="${T + i * rowH}" width="${W}" height="${rowH}"/>`;
    })
    .join('');
  return `<figure class="chart" data-chart="roi" data-rows='${esc(JSON.stringify(rows))}'>
    <figcaption><b>Retorno de marketing por canal</b><span>Facturación por cada $1 invertido · ${PROJECT.period}</span></figcaption>
    <svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Facturación por peso invertido, por canal">
      <line x1="${L}" x2="${L}" y1="0" y2="${H}" class="axis"/>${bars}
    </svg>
    <details><summary>Ver tabla</summary><table><tr><th>Canal</th><th>Inversión</th><th>Facturación</th><th>Retorno</th></tr>
      ${rows.map((r) => `<tr><td>${r.name}</td><td>${money(r.inversion)}</td><td>${money(r.facturacion)}</td><td>${r.roi.toFixed(1)}×</td></tr>`).join('')}
    </table></details>
  </figure>`;
}

// ---------- tabla de clientes ----------
function clientsTable() {
  return `<section class="card">
    <header class="card-head"><b>Rentabilidad y riesgo por cliente</b><span>Riesgo = margen bajo + días de pago altos</span></header>
    <table class="data">
      <tr><th>Cliente</th><th class="num">Ventas</th><th class="num">Margen</th><th class="num">Días de pago</th><th>Riesgo de pérdida</th></tr>
      ${DATA.clients
        .map((c) => {
          const s = STATUS[c.riesgo];
          return `<tr><td>${c.name}</td><td class="num">${money(c.ventas)}</td><td class="num">${c.margen}%</td><td class="num">${c.dias}</td>
            <td><span class="status" style="--s:${s.color}"><i>${s.icon}</i>${s.label}</span></td></tr>`;
        })
        .join('')}
    </table>
  </section>`;
}

function conclusionsBlock(store) {
  return `<section class="card">
    <header class="card-head"><b>Conclusiones de los agentes</b><span>Generadas en la Capa 3</span></header>
    <div class="conclusions">
      ${Object.entries(CONCLUSIONS)
        .map(([id, text]) => `<article><span class="pill">${esc(store.agent(id)?.name || id)}</span><p>${esc(text)}</p></article>`)
        .join('')}
    </div>
  </section>`;
}

// ---------- interacción de las gráficas ----------
function wire(root) {
  const line = root.querySelector('[data-chart="line"] svg');
  if (line) {
    const cross = line.querySelector('.cross');
    line.querySelectorAll('.hit').forEach((h) => {
      h.addEventListener('pointermove', (e) => {
        const i = Number(h.dataset.i);
        const cx = Number(h.getAttribute('x')) + Number(h.getAttribute('width')) / 2;
        cross.setAttribute('x1', cx);
        cross.setAttribute('x2', cx);
        cross.setAttribute('visibility', 'visible');
        showTip(
          `<b>${DATA.months[i]} 2026</b>
           <div><i style="background:${SERIES.ingresos}"></i>Ingresos <span>${M(DATA.ingresos[i])}</span></div>
           <div><i style="background:${SERIES.egresos}"></i>Egresos <span>${M(DATA.egresos[i])}</span></div>
           <div class="sep">Flujo neto <span>${M(DATA.ingresos[i] - DATA.egresos[i])}</span></div>`,
          e.clientX,
          e.clientY,
        );
      });
      h.addEventListener('pointerleave', () => {
        cross.setAttribute('visibility', 'hidden');
        hideTip();
      });
    });
  }
  const roi = root.querySelector('[data-chart="roi"]');
  if (roi) {
    const rows = JSON.parse(roi.dataset.rows);
    roi.querySelectorAll('.hit').forEach((h) => {
      h.addEventListener('pointermove', (e) => {
        const r = rows[Number(h.dataset.i)];
        showTip(
          `<b>${r.name}</b><div>Inversión <span>${money(r.inversion)}</span></div><div>Facturación <span>${money(r.facturacion)}</span></div><div class="sep">Retorno <span>${r.roi.toFixed(1)}×</span></div>`,
          e.clientX,
          e.clientY,
        );
      });
      h.addEventListener('pointerleave', hideTip);
    });
  }
}

// ---------- vistas ----------
export function renderSummary(el, { store, ready, quality }) {
  if (!ready) {
    el.innerHTML = `<div class="empty">
      <span class="pill">Sin datos consolidados</span>
      <h3>Ejecuta el ciclo de datos</h3>
      <p>Los agentes extraerán la información de Compaq, Esfera, Monday, bancos y Excel; la consolidarán, te pedirán validar las discrepancias y publicarán aquí los indicadores.</p>
      <button class="btn accent" data-act="run-cycle">▶ Ejecutar ciclo de datos</button>
    </div>`;
    return;
  }
  el.innerHTML = `${kpis(quality)}<div class="charts">${lineChart()}${roiChart()}</div>${clientsTable()}${conclusionsBlock(store)}`;
  wire(el);
}

export function renderTrace(el, { rows, decisions, store }) {
  if (!rows.length) {
    el.innerHTML = '<div class="empty"><p>Aún no hay documentos procesados. Ejecuta el ciclo de datos.</p></div>';
    return;
  }
  const statusClass = (s) => (s.startsWith('Corregido') || s === 'Publicado' ? 'ok' : s === 'Observado' ? 'warn' : '');
  el.innerHTML = `<section class="card">
      <header class="card-head"><b>Documentos procesados</b><span>${rows.length} documentos · ${rows.reduce((s, r) => s + r.records, 0).toLocaleString('es-MX')} registros</span></header>
      <table class="data">
        <tr><th>Documento</th><th>Fuente</th><th>Agente</th><th class="num">Registros</th><th>Estado</th><th>Hora</th></tr>
        ${rows
          .map(
            (r) => `<tr><td class="mono">${esc(r.doc)}</td><td>${esc(r.source)}</td><td>${esc(store.agent(r.agentId)?.name || '-')}</td>
          <td class="num">${r.records}</td><td><span class="state ${statusClass(r.status)}">${esc(r.status)}</span></td><td class="num">${r.time}</td></tr>`,
          )
          .join('')}
      </table>
    </section>
    <section class="card">
      <header class="card-head"><b>Decisiones de validación humana</b><span>Control de cambios</span></header>
      ${
        decisions.length
          ? `<table class="data"><tr><th>Hallazgo</th><th>Corrección propuesta</th><th>Decisión</th><th>Hora</th></tr>
        ${decisions
          .map(
            (d) => `<tr><td>${esc(d.title)}</td><td>${esc(d.fix)}</td>
          <td><span class="status" style="--s:${d.ok ? STATUS.bajo.color : STATUS.medio.color}"><i>${d.ok ? '✓' : '!'}</i>${d.ok ? 'Aprobada por Tú' : 'Rechazada · queda observada'}</span></td><td class="num">${d.time}</td></tr>`,
          )
          .join('')}</table>`
          : '<p class="muted">Pendiente: el auditor aún no envía hallazgos.</p>'
      }
    </section>`;
}

export function renderUsage(el, { usage, store }) {
  const rows = [...usage.entries()].map(([id, u]) => ({ id, ...u })).sort((a, b) => b.usd - a.usd);
  const tot = rows.reduce((s, r) => ({ input: s.input + r.input, output: s.output + r.output, usd: s.usd + r.usd, calls: s.calls + r.calls }), { input: 0, output: 0, usd: 0, calls: 0 });
  const max = Math.max(...rows.map((r) => r.usd), 1e-9);
  el.innerHTML = `<div class="kpis">
      <div class="kpi"><span class="kpi-label">Costo acumulado</span><b>${usd(tot.usd)}</b><span class="delta">USD · sesión actual</span></div>
      <div class="kpi"><span class="kpi-label">Tokens de entrada</span><b>${tot.input.toLocaleString('es-MX')}</b><span class="delta">$1 por millón (Haiku 4.5)</span></div>
      <div class="kpi"><span class="kpi-label">Tokens de salida</span><b>${tot.output.toLocaleString('es-MX')}</b><span class="delta">$5 por millón (Haiku 4.5)</span></div>
      <div class="kpi"><span class="kpi-label">Llamadas al modelo</span><b>${tot.calls}</b><span class="delta">${rows.length} agentes con IA</span></div>
    </div>
    <section class="card">
      <header class="card-head"><b>Consumo por agente</b><span>“Demo” = estimado del ciclo de ejemplo · “Real” = llamadas reales del cerebro</span></header>
      ${
        rows.length
          ? `<table class="data"><tr><th>Agente</th><th class="num">Llamadas</th><th class="num">Entrada</th><th class="num">Salida</th><th>Costo</th><th>Origen</th></tr>
        ${rows
          .map(
            (r) => `<tr><td>${esc(store.agent(r.id)?.name || r.id)}</td><td class="num">${r.calls}</td><td class="num">${r.input.toLocaleString('es-MX')}</td><td class="num">${r.output.toLocaleString('es-MX')}</td>
          <td><span class="meter"><i style="width:${Math.max(3, (r.usd / max) * 100)}%"></i></span><span class="num">${usd(r.usd)}</span></td><td>${[...r.modes].map((m) => `<span class="state ${m === 'real' ? 'ok' : ''}">${m === 'real' ? 'Real' : 'Demo'}</span>`).join(' ')}</td></tr>`,
          )
          .join('')}</table>`
          : '<p class="muted">Sin consumo todavía.</p>'
      }
    </section>`;
}
