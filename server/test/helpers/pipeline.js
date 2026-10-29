// Ejecuta en Node el mismo camino que el orquestador: archivo crudo → normalización → conciliación.
import { generateSimData } from '../../../supabase/functions/treve/lib/sim-generator.js';
import * as N from '../../../supabase/functions/treve/lib/normalizar.js';
import { asignarClientes, conciliar } from '../../../supabase/functions/treve/lib/conciliar.js';

export const toCsv = (rows) => {
  const cols = Object.keys(rows[0] || {});
  const cell = (v) => {
    const s = v === null || v === undefined ? '' : String(v);
    return /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
  };
  return '﻿' + [cols.join(','), ...rows.map((r) => cols.map((c) => cell(r[c])).join(','))].join('\r\n');
};

export function correr(periodo, opciones = {}) {
  const d = generateSimData(periodo, opciones);
  const tabla = (fuente, rows) => {
    const { mapeo, faltantes } = N.mapearColumnas(fuente, Object.keys(rows[0]));
    if (faltantes.length) throw new Error(`${fuente}: faltan ${faltantes}`);
    return mapeo;
  };
  // Compaq llega como Excel (filas con tipos), Esfera y Bancos como CSV (texto)
  const esferaRows = N.parseCsv(toCsv(d.esfera));
  const bancosRows = N.parseCsv(toCsv(d.bancos));
  const datos = {
    periodo,
    ventas: N.normalizarMonday(d.monday),
    facturas: N.normalizarCompaq(d.compaq, tabla('compaq', d.compaq)),
    nomina: N.normalizarEsfera(esferaRows, tabla('esfera', esferaRows)),
    movimientos: opciones.sinBanco ? null : N.normalizarBancos(bancosRows, tabla('bancos', bancosRows)),
  };
  const { clientes, alias } = asignarClientes(datos);
  const resultado = conciliar({ ...datos, clientes });
  return { d, datos, clientes, alias, ...resultado };
}
