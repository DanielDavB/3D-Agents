// Agente Conciliador: cruza ventas (Monday) ↔ facturas (Compaq) ↔ cobros (Bancos) ↔ nómina (Esfera).
// Solo código: mismas entradas, mismos hallazgos. Ningún monto lo calcula una IA.
import { catalogoClientes, emparejar, clienteEnConcepto } from './normalizar.js';

const round2 = (n) => Math.round(n * 100) / 100;
const eq = (a, b) => Math.abs(a - b) < 0.01;
const dias = (a, b) => (Date.parse(b) - Date.parse(a)) / 86400000;
const $ = (n) => '$' + Number(n).toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

// Asigna el cliente canónico (RFC de Compaq) a ventas y movimientos bancarios.
export function asignarClientes({ ventas, facturas, movimientos }) {
  const clientes = catalogoClientes(facturas);
  const alias = [];
  const memo = new Map();
  const resolver = (sistema, nombre) => {
    const key = `${sistema}|${nombre}`;
    if (!memo.has(key)) {
      const m = emparejar(nombre, clientes);
      memo.set(key, m);
      alias.push({ sistema, alias: nombre, cliente_id: m?.cliente_id || null, confianza: m?.confianza || 0 });
    }
    return memo.get(key);
  };
  for (const f of facturas) {
    f.cliente_id = f.rfc || clientes.find((c) => c.nombre === f.cliente_alias)?.id;
    resolver('compaq', f.cliente_alias);
  }
  for (const v of ventas) v.cliente_id = resolver('monday', v.cliente_alias)?.cliente_id || null;
  for (const m of movimientos || []) {
    const nombre = m.abono ? clienteEnConcepto(m.concepto) : null;
    m.cliente_id = nombre ? resolver('bancos', nombre)?.cliente_id || null : null;
  }
  return { clientes, alias };
}


export function conciliar({ periodo, ventas, facturas, nomina, movimientos, clientes }) {
  const hallazgos = [];
  const add = (h) => hallazgos.push({ severidad: 'media', evidencia: {}, ...h, monto: h.monto == null ? null : round2(h.monto) });

  // ---- 1. Duplicados en Monday: mismo cliente, nombre, monto y fecha con distinto id ----
  const duplicados = new Set();
  const vistos = new Map();
  for (const v of [...ventas].sort((a, b) => Number(a.deal_id) - Number(b.deal_id))) {
    const key = [v.cliente_id || v.cliente_alias, v.nombre, v.monto, v.fecha_cierre].join('|');
    if (vistos.has(key)) {
      const orig = vistos.get(key);
      duplicados.add(v.deal_id);
      add({
        tipo: 'oportunidad_duplicada', severidad: 'baja', fuentes: ['monday'], monto: v.monto,
        descripcion: `La oportunidad ${orig.deal_id} (${v.cliente_alias}, ${$(v.monto)}) está capturada dos veces en Monday: ${v.deal_id} es un duplicado`,
        referencia: { dealId: orig.deal_id, duplicadoId: v.deal_id },
      });
    } else vistos.set(key, v);
  }

  // ---- 2. Ventas ganadas ↔ facturas ----
  const ganadas = ventas.filter((v) => v.etapa === 'Ganado' && !duplicados.has(v.deal_id));
  const libres = new Set(facturas.map((f) => f.folio));
  const ventaFactura = new Map(); // deal_id -> folio
  const enVentana = (v, f, max) => v.fecha_cierre && f.fecha && dias(v.fecha_cierre, f.fecha) >= 0 && dias(v.fecha_cierre, f.fecha) <= max;
  // 2a. coincidencia exacta: mismo cliente y subtotal = monto, factura 0–5 días después del cierre
  for (const v of ganadas) {
    const f = facturas.find((x) => libres.has(x.folio) && x.cliente_id === v.cliente_id && eq(x.subtotal, v.monto) && enVentana(v, x, 5));
    if (f) ventaFactura.set(v.deal_id, f.folio), libres.delete(f.folio);
  }
  // 2b. mismo cliente y fecha cercana, pero monto distinto (±20 %)
  for (const v of ganadas.filter((x) => !ventaFactura.has(x.deal_id))) {
    const f = facturas
      .filter((x) => libres.has(x.folio) && x.cliente_id === v.cliente_id && enVentana(v, x, 7) && Math.abs(x.subtotal - v.monto) / v.monto <= 0.2)
      .sort((a, b) => Math.abs(a.subtotal - v.monto) - Math.abs(b.subtotal - v.monto))[0];
    if (!f) continue;
    ventaFactura.set(v.deal_id, f.folio);
    libres.delete(f.folio);
    add({
      tipo: 'monto_distinto', fuentes: ['monday', 'compaq'], monto: v.monto - f.subtotal,
      descripcion: `La venta ${v.deal_id} de ${v.cliente_alias} es de ${$(v.monto)} en Monday, pero la factura ${f.folio} tiene subtotal de ${$(f.subtotal)} (diferencia ${$(v.monto - f.subtotal)})`,
      referencia: { dealId: v.deal_id, folio: f.folio },
      evidencia: { montoMonday: v.monto, subtotalCompaq: f.subtotal },
    });
  }
  // 2c. ventas ganadas sin factura
  for (const v of ganadas.filter((x) => !ventaFactura.has(x.deal_id))) {
    add({
      tipo: 'venta_sin_factura', severidad: 'alta', fuentes: ['monday', 'compaq'], monto: v.monto,
      descripcion: `La venta ganada ${v.deal_id} de ${v.cliente_alias} (${$(v.monto)}, cerrada el ${v.fecha_cierre}) no tiene factura en Compaq`,
      referencia: { dealId: v.deal_id },
    });
  }
  // 2d. facturas que no corresponden a ninguna venta
  for (const f of facturas.filter((x) => libres.has(x.folio) && x.estatus !== 'Cancelada')) {
    add({
      tipo: 'factura_sin_venta', fuentes: ['compaq', 'monday'], monto: f.total,
      descripcion: `La factura ${f.folio} de ${f.cliente_alias} (${$(f.total)}) no corresponde a ninguna venta ganada en Monday`,
      referencia: { folio: f.folio },
    });
  }

  // ---- 3. Cobros: banco ↔ facturas ----
  const facturaCobro = new Map(); // folio -> linea
  if (movimientos) {
    const abonos = movimientos.filter((m) => m.abono > 0);
    const porFolio = new Map(facturas.map((f) => [f.folio, f]));
    // primero los que traen el folio en la referencia
    for (const m of abonos) {
      const f = m.referencia && porFolio.get(m.referencia.trim());
      if (f && !facturaCobro.has(f.folio) && eq(f.total, m.abono)) facturaCobro.set(f.folio, m.linea), (m.folio = f.folio);
    }
    // luego por cliente + monto (prefiere la factura con la misma fecha de pago)
    for (const m of abonos.filter((x) => !x.folio)) {
      const f = facturas
        .filter((x) => !facturaCobro.has(x.folio) && m.cliente_id && x.cliente_id === m.cliente_id && eq(x.total, m.abono) && x.fecha <= m.fecha)
        .sort((a, b) => (b.fecha_pago === m.fecha) - (a.fecha_pago === m.fecha) || (a.estatus === 'Pendiente') - (b.estatus === 'Pendiente') || b.fecha.localeCompare(a.fecha))[0];
      if (f) facturaCobro.set(f.folio, m.linea), (m.folio = f.folio);
    }
    for (const m of abonos.filter((x) => !x.folio)) {
      add({
        tipo: 'deposito_sin_identificar', fuentes: ['bancos'], monto: m.abono,
        descripcion: `Depósito de ${$(m.abono)} del ${m.fecha} ("${m.concepto}") sin cliente ni factura asociada`,
        referencia: { linea: m.linea, abono: m.abono },
      });
    }
    for (const f of facturas) {
      const cobrada = facturaCobro.has(f.folio);
      if (cobrada && f.estatus === 'Pendiente') {
        add({
          tipo: 'pago_no_registrado', severidad: 'alta', fuentes: ['compaq', 'bancos'], monto: f.total,
          descripcion: `La factura ${f.folio} de ${f.cliente_alias} sigue Pendiente en Compaq, pero el banco ya recibió ${$(f.total)}`,
          referencia: { folio: f.folio, linea: facturaCobro.get(f.folio) },
        });
      }
      if (!cobrada && f.estatus === 'Pagada') {
        add({
          tipo: 'cobro_no_encontrado', severidad: 'alta', fuentes: ['compaq', 'bancos'], monto: f.total,
          descripcion: `La factura ${f.folio} está Pagada en Compaq, pero no aparece el cobro de ${$(f.total)} en el banco`,
          referencia: { folio: f.folio },
        });
      }
    }
  }

  // ---- 4. Nómina: Esfera ↔ banco por quincena ----
  if (movimientos && nomina) {
    for (const q of ['Q1', 'Q2']) {
      const esfera = round2(nomina.filter((r) => r.quincena.startsWith(q)).reduce((a, r) => a + r.neto, 0));
      const pago = movimientos.find((m) => m.cargo > 0 && /NOMINA/i.test(m.concepto) && new RegExp(`\\b${q}\\b`, 'i').test(`${m.concepto} ${m.referencia || ''}`));
      if (!esfera && !pago) continue;
      const banco = pago?.cargo || 0;
      if (!eq(esfera, banco)) {
        add({
          tipo: 'nomina_no_cuadra', severidad: 'alta', fuentes: ['esfera', 'bancos'], monto: banco - esfera,
          descripcion: `La nómina ${q} suma ${$(esfera)} en Esfera, pero el banco pagó ${$(banco)} (diferencia ${$(banco - esfera)}; posible finiquito o pago no capturado)`,
          referencia: { periodo: `${q} ${periodo}` },
          evidencia: { esfera, banco },
        });
      }
    }
  }
  if (!movimientos) {
    add({
      tipo: 'fuente_no_disponible', severidad: 'alta', fuentes: ['bancos'], monto: null,
      descripcion: 'No se pudo obtener el estado de cuenta: los cruces de cobros y nómina quedan pendientes',
      referencia: { fuente: 'bancos' },
    });
  }

  const enlaces = {
    ventaFactura: Object.fromEntries(ventaFactura),
    facturaCobro: Object.fromEntries(facturaCobro),
    duplicados: [...duplicados],
  };
  return { hallazgos, enlaces };
}

// Compara contra la hoja de respuestas del simulador: aciertos, faltantes y falsas alarmas.
export function evaluar(hallazgos, respuestas) {
  const claves = {
    venta_sin_factura: (r) => r.dealId,
    oportunidad_duplicada: (r) => `${r.dealId}/${r.duplicadoId}`,
    monto_distinto: (r) => r.dealId,
    pago_no_registrado: (r) => r.folio,
    deposito_sin_identificar: (r) => String(r.abono),
    nomina_no_cuadra: (r) => r.periodo,
  };
  const key = (h) => `${h.tipo}:${(claves[h.tipo] || (() => JSON.stringify(h.referencia)))(h.referencia)}`;
  const esperadas = new Map(respuestas.discrepancias.map((d) => [key(d), d]));
  const encontradas = new Set(hallazgos.map(key));
  const aciertos = [...esperadas.keys()].filter((k) => encontradas.has(k));
  return {
    esperadas: esperadas.size,
    aciertos: aciertos.length,
    faltantes: [...esperadas.keys()].filter((k) => !encontradas.has(k)),
    falsasAlarmas: [...encontradas].filter((k) => !esperadas.has(k)),
  };
}
