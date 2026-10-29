// Dashboard con los datos REALES del orquestador (indicadores calculados en código,
// hallazgos con su decisión, archivos generados y consumo de IA).
// Series: --s1 (naranja de marca) y --s2 (azul), validadas para cada tema.
import { showTip, hideTip } from './dashboard.js';

const esc = (s = '') => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const money = (v) => (v == null ? 's/d' : Math.abs(v) >= 1e6 ? `$${(v / 1e6).toFixed(2)}M` : `$${Math.round(v / 1000).toLocaleString('es-MX')}K`);
const full = (v) => (v == null ? 's/d' : '$' + Number(v).toLocaleString('es-MX', { maximumFractionDigits: 0 }));
const TIPOS = {
  venta_sin_factura: 'Venta sin factura', oportunidad_duplicada: 'Oportunidad duplicada', monto_distinto: 'Monto distinto',
  pago_no_registrado: 'Pago no registrado', deposito_sin_identificar: 'Depósito sin identificar', nomina_no_cuadra: 'Nómina no cuadra',
  factura_sin_venta: 'Factura sin venta', cobro_no_encontrado: 'Cobro no encontrado', fuente_no_disponible: 'Fuente no disponible',
};
const ESTADO = {
  en_revision: ['warn', '! En revisión'], confirmado: ['ok', '✓ Confirmado'], descartado: ['', '✕ Descartado'], abierto: ['', 'i Aviso al área'],
};
const ACCION = { corregir_automatico: 'Corrección automática', validacion_humana: 'Validación humana', solo_informar: 'Aviso al área' };

const ind = (st) => Object.fromEntries((st.indicadores || []).map((i) => [i.clave, i.valor]));
const det = (st, k) => (st.indicadores || []).find((i) => i.clave === k)?.detalle || {};

// ---------- barras horizontales (1 o 2 series apiladas) ----------
function hbars({ id, title, sub, rows, series, fmtVal = money }) {
  if (!rows.length) return '';
  const W = 560, rowH = 32, L = 150, R = 70, T = 4;
  const H = T + rows.length * rowH;
  const max = Math.max(...rows.map((r) => r.values.reduce((a, b) => a + b, 0)), 1);
  const bw = (v) => ((W - L - R) * v) / max;
  const bars = rows
    .map((r, i) => {
      const y = T + i * rowH + (rowH - 18) / 2;
      let x = L;
      const segs = r.values
        .map((v, k) => {
          if (v <= 0) return '';
          const w = Math.max(3, bw(v) - (k < r.values.length - 1 ? 2 : 0)); // 2px de separación entre segmentos
          const last = r.values.slice(k + 1).every((n) => n <= 0);
          const d = last ? `M${x},${y}h${w - 4}a4,4 0 0 1 4,4v10a4,4 0 0 1 -4,4h${-(w - 4)}z` : `M${x},${y}h${w}v18h${-w}z`;
          x += bw(v);
          return `<path d="${d}" fill="${series[k].color}"/>`;
        })
        .join('');
      const total = r.values.reduce((a, b) => a + b, 0);
      return `<text x="${L - 10}" y="${y + 13}" class="cat" text-anchor="end">${esc(r.label.length > 22 ? r.label.slice(0, 21) + '…' : r.label)}</text>${segs}
        <text x="${L + bw(total) + 8}" y="${y + 13}" class="val">${fmtVal(total)}</text>
        <rect class="hit" data-i="${i}" x="0" y="${T + i * rowH}" width="${W}" height="${rowH}"/>`;
    })
    .join('');
  const legend = series.length > 1 ? `<div class="legend">${series.map((s) => `<span><i style="background:${s.color}"></i>${s.name}</span>`).join('')}</div>` : '';
  return `<figure class="chart" data-chart="${id}" data-rows='${esc(JSON.stringify(rows))}' data-series='${esc(JSON.stringify(series.map((s) => s.name)))}'>
    <figcaption><b>${title}</b><span>${sub}</span></figcaption>${legend}
    <svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(title)}"><line x1="${L}" x2="${L}" y1="0" y2="${H}" class="axis"/>${bars}</svg>
    <details><summary>Ver tabla</summary><table><tr><th></th>${series.map((s) => `<th>${s.name}</th>`).join('')}</tr>
      ${rows.map((r) => `<tr><td>${esc(r.label)}</td>${r.values.map((v) => `<td>${full(v)}</td>`).join('')}</tr>`).join('')}</table></details>
  </figure>`;
}

function wire(root) {
  root.querySelectorAll('figure.chart[data-rows]').forEach((fig) => {
    const rows = JSON.parse(fig.dataset.rows);
    const names = JSON.parse(fig.dataset.series);
    fig.querySelectorAll('.hit').forEach((h) => {
      h.addEventListener('pointermove', (e) => {
        const r = rows[Number(h.dataset.i)];
        showTip(`<b>${esc(r.label)}</b>${r.values.map((v, k) => `<div>${names[k]} <span>${full(v)}</span></div>`).join('')}`, e.clientX, e.clientY);
      });
      h.addEventListener('pointerleave', hideTip);
    });
  });
}

const css = (v) => getComputedStyle(document.documentElement).getPropertyValue(v).trim();

export function renderLiveSummary(el, st, { store }) {
  const i = ind(st);
  if (!st.indicadores?.length) {
    el.innerHTML = `<div class="empty"><h3>Los agentes están trabajando</h3><p>Los indicadores aparecen cuando el Almacén publica los datos conciliados.</p></div>`;
    return;
  }
  const c = st.corrida;
  const ev = c.resumen?.evaluacion;
  const pend = (st.hallazgos || []).filter((h) => h.estado === 'en_revision').length;
  const tile = (label, value, foot) => `<div class="kpi"><span class="kpi-label">${label}</span><b>${value}</b>${foot}</div>`;
  const s1 = css('--s1') || '#e8600c';
  const s2 = css('--s2') || '#3987e5';
  const canal = (det(st, 'ventas_ganadas').por_canal || []).map((r) => ({ label: r.canal, values: [r.monto] }));
  const clientes = (det(st, 'por_cobrar').por_cliente || []).map((r) => ({ label: r.cliente.replace(/ S\.?A\.? de C\.?V\.?| SC$/i, ''), values: [r.cobrado, r.por_cobrar] }));
  const gastos = (det(st, 'egresos_banco').por_categoria || []).map((r) => ({ label: r.categoria, values: [r.monto] }));
  const concl = c.resumen?.conclusiones;
  el.innerHTML = `
    ${pend ? `<div class="banner warn"><b>! Preliminar</b><span>${pend} hallazgo${pend > 1 ? 's' : ''} esperan validación humana antes de publicar la versión final.</span><button class="btn accent" data-act="open-validation">Revisar ahora</button></div>` : c.estado === 'terminada' ? `<div class="banner ok"><b>✓ Versión final</b><span>Todas las decisiones están validadas.</span></div>` : ''}
    <div class="kpis">
      ${tile('Ventas ganadas', money(i.ventas_ganadas), `<span class="delta">${i.oportunidades_ganadas} oportunidades · cierre ${i.tasa_cierre ?? 's/d'} %</span>`)}
      ${tile('Flujo neto del mes', i.flujo_neto == null ? 's/d' : `${i.flujo_neto >= 0 ? '+' : ''}${money(i.flujo_neto)}`, `<span class="delta">Ingresos ${money(i.ingresos_banco)} · egresos ${money(i.egresos_banco)}</span>`)}
      ${tile('Por cobrar real', money(i.por_cobrar), `<span class="delta ${i.por_cobrar_segun_compaq !== i.por_cobrar ? 'warn' : ''}">Compaq dice ${money(i.por_cobrar_segun_compaq)}</span>`)}
      ${tile('Calidad de datos', `${i.calidad_datos ?? 's/d'}%`, `<span class="delta ${ev && ev.aciertos === ev.esperadas ? 'up' : 'warn'}">${ev ? `${ev.aciertos === ev.esperadas ? '✓' : '!'} ${ev.aciertos}/${ev.esperadas} discrepancias detectadas` : `${i.hallazgos} hallazgos`}</span>`)}
    </div>
    <div class="kpis small">
      ${tile('Saldo final', money(i.saldo_final), `<span class="delta">${i.saldo_final_usd ? `≈ US$${Math.round(i.saldo_final_usd).toLocaleString('es-MX')}` : 'sin tipo de cambio'}</span>`)}
      ${tile('Tipo de cambio', i.tipo_cambio_usd ? `$${i.tipo_cambio_usd.toFixed(2)}` : 's/d', `<span class="delta">USD/MXN · ${esc(det(st, 'tipo_cambio_usd').fuente || 'Frankfurter')}</span>`)}
      ${tile('Días hábiles', i.dias_habiles ?? 's/d', `<span class="delta">${(det(st, 'dias_habiles').feriados || []).map((f) => esc(f.nombre)).join(', ') || 'sin festivos'}</span>`)}
      ${tile('Ventas sin facturar', money(i.ventas_sin_facturar), `<span class="delta ${i.ventas_sin_facturar ? 'down' : 'up'}">${i.ventas_sin_facturar ? '✕ por facturar' : '✓ todo facturado'}</span>`)}
    </div>
    <div class="charts one">
      ${hbars({ id: 'clientes', title: 'Cobranza por cliente', sub: 'MXN · cobrado confirmado en banco vs pendiente', rows: clientes, series: [{ name: 'Cobrado', color: s1 }, { name: 'Por cobrar', color: s2 }] })}
      ${hbars({ id: 'canal', title: 'Ventas ganadas por canal', sub: `MXN · ${esc(c.periodo)}`, rows: canal, series: [{ name: 'Ventas', color: s1 }] })}
    </div>
    ${gastos.length ? `<div class="charts one">${hbars({ id: 'gastos', title: 'Egresos por categoría', sub: 'MXN · según el estado de cuenta', rows: gastos, series: [{ name: 'Egresos', color: s1 }] })}</div>` : ''}
    ${concl ? `<section class="card"><header class="card-head"><b>Conclusiones de los analistas</b><span>Redactadas por ${esc(c.resumen.motor === 'plantillas' ? 'plantillas (sin IA)' : c.resumen.motor)} con cifras calculadas en código</span></header>
      <div class="conclusions">${[['ag_fin', concl.financiero], ['ag_com', concl.comercial], ['ag_cli', concl.clientes]].map(([id, t]) => `<article><span class="pill">${esc(store.agent(id)?.name || id)}</span><p>${esc(t)}</p></article>`).join('')}</div></section>` : ''}`;
  wire(el);
}

export function renderLiveFindings(el, st) {
  const hs = st.hallazgos || [];
  if (!hs.length) {
    el.innerHTML = '<div class="empty"><p>El Conciliador aún no reporta hallazgos.</p></div>';
    return;
  }
  el.innerHTML = `<section class="card">
    <header class="card-head"><b>Hallazgos de la conciliación</b><span><button class="mini" data-export="hallazgos">Descargar CSV</button> · El código los detecta; ${hs.some((h) => h.decision?.fuente === 'jev') ? 'JEV' : 'las reglas fijas'} deciden qué hacer; tú validas los dudosos</span></header>
    <table class="data"><tr><th>Tipo</th><th>Descripción</th><th class="num">Monto</th><th>Decisión</th><th>Estado</th><th></th></tr>
    ${hs
      .map((h) => {
        const [cls, label] = ESTADO[h.estado] || ['', h.estado];
        return `<tr><td><b>${esc(TIPOS[h.tipo] || h.tipo)}</b></td><td>${esc(h.descripcion)}${h.nota ? `<br><small class="muted">Nota: ${esc(h.nota)}</small>` : ''}</td>
        <td class="num">${h.monto == null ? '—' : full(h.monto)}</td>
        <td>${h.decision ? `${esc(ACCION[h.decision.choice] || h.decision.choice)}<br><small class="muted">${Math.round((h.decision.confidence || 0) * 100)} % · ${h.decision.fuente === 'jev' ? 'JEV' : 'reglas'}</small>` : '—'}</td>
        <td><span class="state ${cls}">${label}</span></td>
        <td>${h.estado === 'en_revision' ? `<div class="row tight"><button class="mini accent" data-resolver="${h.id}" data-decision="confirmado">Aprobar</button><button class="mini" data-resolver="${h.id}" data-decision="descartado">Descartar</button></div>` : ''}</td></tr>`;
      })
      .join('')}
    </table></section>`;
}

const PASOS = {
  extraer: 'Extracción', mercado: 'APIs públicas', normalizar: 'Normalización', conciliar: 'Conciliación', juzgar: 'Juicio (JEV)',
  almacenar: 'Almacén', indicadores: 'Indicadores', llenar_excel: 'Reporte Excel', conclusiones: 'Conclusiones', notificar: 'Alertas n8n', cierre: 'Cierre',
};
export function renderLiveFiles(el, st, { store }) {
  const files = st.archivos || [];
  el.innerHTML = `<section class="card">
      <header class="card-head"><b>Archivos del ciclo</b><span>Fuentes crudas tal como llegaron y reportes generados · guardados en Supabase Storage</span></header>
      ${files.length ? `<table class="data"><tr><th>Archivo</th><th>Fuente</th><th>Formato</th><th class="num">Filas</th><th></th></tr>
        ${files.map((a) => `<tr><td class="mono">${esc(a.nombre)}</td><td>${esc(a.fuente)}</td><td>${esc(a.formato.toUpperCase())}</td><td class="num">${a.filas ?? ''}</td>
          <td><div class="row tight"><button class="mini" data-ver-archivo="${esc(a.nombre)}">Ver</button>${a.url ? `<a class="mini accent" href="${esc(a.url)}" download="${esc(a.nombre)}" target="_blank" rel="noopener">Descargar</a>` : '<span class="muted">…</span>'}</div></td></tr>`).join('')}</table>` : '<p class="muted">Aún no hay archivos.</p>'}
    </section>
    <section class="card">
      <header class="card-head"><b>Resultados del ciclo</b><span>Consulta o descarga en CSV (abre en Excel) lo que calcularon los agentes</span></header>
      <table class="data">
        ${[
          ['hallazgos', 'Hallazgos de la conciliación', `${(st.hallazgos || []).length} hallazgos con su decisión y estado`],
          ['indicadores', 'Indicadores del dashboard', `${(st.indicadores || []).length} indicadores y sus desgloses`],
          ['bitacora', 'Bitácora del orquestador', 'Cada mensaje entre agentes, con hora'],
          ['tareas', 'Cola de tareas', `${(st.tareas || []).length} pasos con su estado e intentos`],
        ].map(([k, t, d]) => `<tr><td><b>${t}</b><br><small class="muted">${d}</small></td><td><div class="row tight"><button class="mini" data-ver-export="${k}">Ver</button><button class="mini accent" data-export="${k}">Descargar CSV</button></div></td></tr>`).join('')}
      </table>
    </section>
    <section class="card">
      <header class="card-head"><b>Cola del orquestador</b><span>Cada paso es una tarea de un agente en treve.tareas</span></header>
      <table class="data"><tr><th>#</th><th>Paso</th><th>Agente</th><th>Estado</th><th>Intentos</th></tr>
      ${(st.tareas || []).map((t, k) => `<tr><td class="num">${k + 1}</td><td>${esc(PASOS[t.paso] || t.paso)}</td><td>${esc(store.agent(t.agente)?.name || t.agente)}</td>
        <td><span class="state ${t.estado === 'hecha' ? 'ok' : t.estado === 'error' ? 'warn' : ''}">${esc(t.estado)}</span>${t.error ? `<br><small class="muted">${esc(t.error)}</small>` : ''}</td><td class="num">${t.intentos}</td></tr>`).join('')}
      </table>
    </section>`;
}

export function renderLiveUsage(el, st, { salud }) {
  const c = st.corrida;
  const k = c.costo_ia || {};
  const ev = c.resumen?.evaluacion;
  const it = salud?.integraciones || {};
  const on = (v, txt) => `<span class="state ${v ? 'ok' : ''}">${v ? '✓ ' + txt : 'Sin configurar'}</span>`;
  el.innerHTML = `<div class="kpis">
      <div class="kpi"><span class="kpi-label">Costo de IA del ciclo</span><b>$${Number(k.openai_usd || 0).toFixed(4)}</b><span class="delta">USD · ${esc(k.modelo || 'plantillas')}</span></div>
      <div class="kpi"><span class="kpi-label">Tokens</span><b>${Number(k.tokens || 0).toLocaleString('es-MX')}</b><span class="delta">conclusiones y mapeos</span></div>
      <div class="kpi"><span class="kpi-label">Decisiones de JEV</span><b>${k.jev_llamadas || 0}</b><span class="delta">${k.jev_llamadas ? 'llamadas' : 'se usaron reglas fijas'}</span></div>
      <div class="kpi"><span class="kpi-label">Autoevaluación</span><b>${ev ? `${ev.aciertos}/${ev.esperadas}` : '—'}</b><span class="delta ${ev && !ev.falsasAlarmas.length ? 'up' : 'warn'}">${ev ? `${ev.falsasAlarmas.length} falsas alarmas` : 'al cerrar el ciclo'}</span></div>
    </div>
    <section class="card"><header class="card-head"><b>Integraciones del orquestador</b><span>Las keys viven en los secrets de Supabase, nunca en el navegador</span></header>
      <table class="data">
        <tr><td>Cerebro (redacción y mapeo de columnas)</td><td>${on(it.openai, it.openai || '')}</td></tr>
        <tr><td>JEV (decisiones con confianza)</td><td>${on(it.jev, 'conectado')}</td></tr>
        <tr><td>Simulador de fuentes (n8n)</td><td class="mono">${esc(it.simulador || '—')}</td></tr>
        <tr><td>Agente de alertas (n8n)</td><td class="mono">${esc(it.alertas || '—')}</td></tr>
        <tr><td>APIs públicas</td><td>${esc((it.apis_publicas || []).join(' · '))}</td></tr>
      </table></section>
    ${ev && (ev.faltantes.length || ev.falsasAlarmas.length) ? `<section class="card"><header class="card-head"><b>Detalle de la autoevaluación</b><span>Contra la hoja de respuestas del simulador</span></header>
      <p class="muted">${ev.faltantes.length ? `No detectadas: ${ev.faltantes.map(esc).join(', ')}. ` : ''}${ev.falsasAlarmas.length ? `Falsas alarmas: ${ev.falsasAlarmas.map(esc).join(', ')}` : ''}</p></section>` : ''}`;
}
