var e=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var t={client:`Treve`,title:`Oficina digital`,by:`AI Lab School`,period:`Septiembre 2026`,context:`Proyecto: oficina digital para Treve. Problema: la información está repartida entre Compaq (contabilidad y facturación), Esfera (nómina y empleados), Monday (comercial: prospectos y ventas), estados de cuenta bancarios y archivos Excel que hacen de "traductor" manual entre sistemas, con riesgo de errores, duplicados y fórmulas rotas. Solución en tres capas: (1) extracción y mapeo de fuentes, (2) datos consolidados y curados con una capa de revisión y validación humana en decisiones relevantes, (3) dashboard ejecutivo con salud financiera, eficiencia comercial y de marketing por canal, rentabilidad por cliente, pagos y riesgo de pérdida. Todo con trazabilidad de documentos y control de consumo de tokens.`};function n(){let e=[{id:`off_hq`,name:`Centro de mando`,parentId:null,color:`#ffffff`},{id:`off_c1`,name:`Capa 1 · Fuentes`,parentId:`off_hq`,color:`#e8600c`},{id:`off_c2`,name:`Capa 2 · Datos consolidados`,parentId:`off_hq`,color:`#e8600c`},{id:`off_qa`,name:`Revisión y control`,parentId:`off_c2`,color:`#b8b8b8`},{id:`off_c3`,name:`Capa 3 · Dashboard ejecutivo`,parentId:`off_hq`,color:`#e8600c`}],t=(e,t,n,r,i,a={})=>({id:e,name:t,role:n,officeId:r,provider:i,config:a});return{project:`treve-mvp`,offices:e,agents:[t(`ag_orq`,`Orquestador`,`Coordina recolección, procesamiento y presentación de la información`,`off_hq`,`claude`),t(`ag_log`,`Bitácora`,`Registra documentos, resultados, decisiones y consumo de tokens`,`off_hq`,`webhook`),t(`ag_compaq`,`Agente Compaq`,`Extrae facturación, cuentas por cobrar y contabilidad de Compaq`,`off_c1`,`n8n`),t(`ag_esfera`,`Agente Esfera`,`Extrae nómina y plantilla de empleados de Esfera`,`off_c1`,`n8n`),t(`ag_monday`,`Agente Monday`,`Extrae prospectos, oportunidades y ventas de Monday`,`off_c1`,`n8n`),t(`ag_bancos`,`Agente Bancos`,`Descarga y clasifica estados de cuenta sin captura manual`,`off_c1`,`claude`),t(`ag_excel`,`Agente Excel`,`Llena el Reporte de ventas en Excel con el formato de Treve`,`off_c1`,`claude`),t(`ag_ext`,`Agente de mercado`,`Consulta APIs públicas: tipo de cambio USD/MXN y días festivos`,`off_c1`,`webhook`),t(`ag_norm`,`Normalizador`,`Unifica catálogos de clientes, conceptos y fechas`,`off_c2`,`claude`),t(`ag_conc`,`Conciliador`,`Cruza ventas ↔ facturas ↔ pagos ↔ bancos`,`off_c2`,`claude`),t(`ag_db`,`Almacén central`,`Base de datos en la nube con información curada`,`off_c2`,`webhook`),t(`ag_qa`,`Auditor de calidad`,`Detecta discrepancias, duplicados y fórmulas rotas antes de publicar`,`off_qa`,`claude`),t(`ag_cambios`,`Control de cambios`,`Permisos, versiones y bitácora de correcciones`,`off_qa`,`webhook`),t(`ag_alertas`,`Agente de alertas`,`Envía el resumen y las alertas del ciclo por n8n`,`off_qa`,`n8n`),t(`ag_fin`,`Analista financiero`,`Salud financiera, flujo de efectivo y cuentas por cobrar`,`off_c3`,`claude`),t(`ag_com`,`Analista comercial`,`Eficiencia comercial y retorno de marketing por canal`,`off_c3`,`claude`),t(`ag_cli`,`Analista de clientes`,`Rentabilidad por cliente y riesgo de pérdida`,`off_c3`,`claude`)]}}var r=[{id:`compaq`,name:`Compaq`,desc:`Contabilidad y facturación`,agentId:`ag_compaq`},{id:`esfera`,name:`Esfera`,desc:`Nómina y empleados`,agentId:`ag_esfera`},{id:`monday`,name:`Monday`,desc:`Prospectos y ventas`,agentId:`ag_monday`},{id:`bancos`,name:`Bancos`,desc:`Estados de cuenta`,agentId:`ag_bancos`},{id:`excel`,name:`Excel`,desc:`Reporte de ventas generado`,agentId:`ag_excel`},{id:`apis`,name:`APIs públicas`,desc:`Frankfurter (tipo de cambio) y Nager.Date (festivos)`,agentId:`ag_ext`}],i={compaq:[{name:`facturas_sep_2026.xml`,records:148},{name:`cxc_antiguedad_sep.xlsx`,records:61}],esfera:[{name:`nomina_quincenas_sep.csv`,records:84}],monday:[{name:`pipeline_comercial.json`,records:63}],bancos:[{name:`estado_cuenta_banco_A_sep.pdf`,records:412},{name:`estado_cuenta_banco_B_sep.pdf`,records:236}],apis:[{name:`usd_mxn_y_festivos.json`,records:2}],excel:[{name:`reporte_ventas_sep.xlsx`,records:152},{name:`gastos_marketing_sep.xlsx`,records:128}]},a=[{id:`f1`,title:`Factura duplicada`,detail:`F-2291 aparece dos veces en reporte_ventas_sep.xlsx ($48,500). En Compaq existe una sola vez.`,fix:`Eliminar el registro duplicado del reporte de ventas`,doc:`reporte_ventas_sep.xlsx`},{id:`f2`,title:`Depósito sin factura`,detail:`Depósito de $112,300 en banco A (14-sep) sin factura asociada. Coincide en monto con la factura F-2307 de Cliente Beta.`,fix:`Asociar el depósito a F-2307 y marcarla como pagada`,doc:`estado_cuenta_banco_A_sep.pdf`},{id:`f3`,title:`Fórmula rota`,detail:`gastos_marketing_sep.xlsx, fila 37: #REF! en el total de Eventos. El subtotal real por partidas es $410,000.`,fix:`Usar el subtotal recalculado por partidas`,doc:`gastos_marketing_sep.xlsx`}],o={months:[`Abr`,`May`,`Jun`,`Jul`,`Ago`,`Sep`],ingresos:[4.2,4.6,4.1,4.9,5.3,5],egresos:[3.6,3.9,3.8,4.1,4.2,4.4],cxcTotal:6.8,cxcVencida:1.4,channels:[{name:`Referidos`,inversion:12e4,facturacion:21e5},{name:`LinkedIn`,inversion:26e4,facturacion:13e5},{name:`Google Ads`,inversion:34e4,facturacion:9e5},{name:`Eventos`,inversion:41e4,facturacion:8e5},{name:`Meta Ads`,inversion:18e4,facturacion:3e5}],clients:[{name:`Cliente Alfa`,ventas:18e5,margen:38,dias:32,riesgo:`bajo`},{name:`Cliente Beta`,ventas:12e5,margen:22,dias:58,riesgo:`medio`},{name:`Cliente Gamma`,ventas:9e5,margen:41,dias:30,riesgo:`bajo`},{name:`Cliente Delta`,ventas:7e5,margen:12,dias:87,riesgo:`alto`},{name:`Cliente Épsilon`,ventas:5e5,margen:29,dias:45,riesgo:`bajo`},{name:`Cliente Zeta`,ventas:4e5,margen:9,dias:95,riesgo:`alto`}]},s={ag_fin:`Flujo neto de septiembre: +$0.6M, el más bajo del semestre: los egresos crecieron 4.8% mientras los ingresos cayeron 5.7%. Cuentas por cobrar vencidas a más de 60 días: $1.4M (21% del total).`,ag_com:`Referidos factura $17.5 por cada peso invertido y Meta Ads solo $1.7. Recomendación: mover 30% del presupuesto de Meta Ads a LinkedIn y a un programa de referidos.`,ag_cli:`Dos clientes en riesgo alto (Delta y Zeta): margen menor a 15% y más de 85 días de pago. Juntos suman $1.1M en ventas: conviene renegociar condiciones antes de ampliar crédito.`},c={fuentes:[`Revisa si hay archivos nuevos`,`Valida el formato de la plantilla`,`Sincroniza los cambios del día`],consolidados:[`Actualiza el catálogo de clientes`,`Recalcula saldos conciliados`,`Respaldo incremental del almacén`],revisión:[`Revisa duplicados del día`,`Verifica permisos de edición`,`Compara totales contra Compaq`],dashboard:[`Refresca indicadores`,`Prepara alerta de cobranza`,`Actualiza ROI por canal`],mando:[`Verifica el estado de los agentes`,`Registra consumo de tokens`,`Programa el siguiente ciclo`]},l=`3d-agents:treve-mvp-v3`,u=e=>`${e}_${Math.random().toString(36).slice(2,9)}`,d=[`#e8600c`,`#ffffff`,`#b8b8b8`,`#fde8dc`,`#757575`];function f(){try{let e=localStorage.getItem(l);if(e){let t=JSON.parse(e);if(Array.isArray(t.offices)&&Array.isArray(t.agents)&&t.offices.length)return t}}catch{}return n()}function p(e){try{localStorage.setItem(l,JSON.stringify(e))}catch{}}function m(e){let t=e,r=new Set,i={get:()=>t,set(e){t=e,p(t),r.forEach(e=>e(t))},subscribe(e){return r.add(e),()=>r.delete(e)},rootOffice:()=>t.offices.find(e=>!e.parentId)||t.offices[0],office:e=>t.offices.find(t=>t.id===e),agent:e=>t.agents.find(t=>t.id===e),agentsIn:e=>t.agents.filter(t=>t.officeId===e),children:e=>t.offices.filter(t=>t.parentId===e),upsertOffice(e){let n=t.offices.some(t=>t.id===e.id);i.set({...t,offices:n?t.offices.map(t=>t.id===e.id?e:t):[...t.offices,e]})},removeOffice(e){if(e===i.rootOffice().id)return;let n=i.office(e);i.set({...t,offices:t.offices.filter(t=>t.id!==e).map(t=>t.parentId===e?{...t,parentId:n.parentId}:t),agents:t.agents.map(t=>t.officeId===e?{...t,officeId:n.parentId}:t)})},upsertAgent(e){let n=t.agents.some(t=>t.id===e.id);i.set({...t,agents:n?t.agents.map(t=>t.id===e.id?e:t):[...t.agents,e]})},removeAgent(e){i.set({...t,agents:t.agents.filter(t=>t.id!==e)})},reset(){i.set(n())}};return i}var h={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},g={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},_=1e3,v=1001,y=1002,b=1003,x=1004,S=1005,C=1006,w=1007,T=1008,E=1009,D=1010,O=1011,k=1012,A=1013,ee=1014,te=1015,j=1016,ne=1017,re=1018,ie=1020,ae=35902,oe=35899,se=1021,ce=1022,M=1023,le=1026,ue=1027,de=1028,fe=1029,pe=1030,me=1031,he=1033,ge=33776,_e=33777,ve=33778,ye=33779,be=35840,xe=35841,Se=35842,Ce=35843,we=36196,Te=37492,Ee=37496,De=37488,Oe=37489,ke=37490,Ae=37491,je=37808,Me=37809,Ne=37810,Pe=37811,Fe=37812,N=37813,Ie=37814,Le=37815,Re=37816,P=37817,ze=37818,F=37819,Be=37820,Ve=37821,He=36492,Ue=36494,We=36495,Ge=36283,Ke=36284,qe=36285,Je=36286,Ye=2300,Xe=2301,Ze=2302,Qe=2303,$e=2400,et=2401,tt=2402,nt=3200,rt=`srgb`,it=`srgb-linear`,at=`linear`,ot=`srgb`,st=7680,ct=35044,lt=2e3;function ut(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function dt(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function ft(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function pt(){let e=ft(`canvas`);return e.style.display=`block`,e}var mt={};function ht(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function gt(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function I(...e){e=gt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function L(...e){e=gt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function _t(...e){let t=e.join(` `);t in mt||(mt[t]=!0,I(...e))}function vt(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var yt={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},bt=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},xt=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),St=1234567,Ct=Math.PI/180,wt=180/Math.PI;function Tt(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(xt[e&255]+xt[e>>8&255]+xt[e>>16&255]+xt[e>>24&255]+`-`+xt[t&255]+xt[t>>8&255]+`-`+xt[t>>16&15|64]+xt[t>>24&255]+`-`+xt[n&63|128]+xt[n>>8&255]+`-`+xt[n>>16&255]+xt[n>>24&255]+xt[r&255]+xt[r>>8&255]+xt[r>>16&255]+xt[r>>24&255]).toLowerCase()}function R(e,t,n){return Math.max(t,Math.min(n,e))}function Et(e,t){return(e%t+t)%t}function Dt(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function Ot(e,t,n){return e===t?0:(n-e)/(t-e)}function kt(e,t,n){return(1-n)*e+n*t}function At(e,t,n,r){return kt(e,t,1-Math.exp(-n*r))}function jt(e,t=1){return t-Math.abs(Et(e,t*2)-t)}function Mt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function Nt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function Pt(e,t){return e+Math.floor(Math.random()*(t-e+1))}function Ft(e,t){return e+Math.random()*(t-e)}function It(e){return e*(.5-Math.random())}function Lt(e){e!==void 0&&(St=e);let t=St+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Rt(e){return e*Ct}function zt(e){return e*wt}function Bt(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function Vt(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function Ht(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Ut(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:I(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function Wt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function Gt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var Kt={DEG2RAD:Ct,RAD2DEG:wt,generateUUID:Tt,clamp:R,euclideanModulo:Et,mapLinear:Dt,inverseLerp:Ot,lerp:kt,damp:At,pingpong:jt,smoothstep:Mt,smootherstep:Nt,randInt:Pt,randFloat:Ft,randFloatSpread:It,seededRandom:Lt,degToRad:Rt,radToDeg:zt,isPowerOfTwo:Bt,ceilPowerOfTwo:Vt,floorPowerOfTwo:Ht,setQuaternionFromProperEuler:Ut,normalize:Gt,denormalize:Wt},z=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=R(this.x,e.x,t.x),this.y=R(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=R(this.x,e,t),this.y=R(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(R(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(R(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},qt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:I(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(R(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},B=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Yt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Yt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=R(this.x,e.x,t.x),this.y=R(this.y,e.y,t.y),this.z=R(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=R(this.x,e,t),this.y=R(this.y,e,t),this.z=R(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(R(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Jt.copy(this).projectOnVector(e),this.sub(Jt)}reflect(e){return this.sub(Jt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(R(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Jt=new B,Yt=new qt,V=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return _t(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(Xt.makeScale(e,t)),this}rotate(e){return _t(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(Xt.makeRotation(-e)),this}translate(e,t){return _t(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(Xt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Xt=new V,Zt=new V().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qt=new V().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $t(){let e={enabled:!0,workingColorSpace:it,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=tn(e.r),e.g=tn(e.g),e.b=tn(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=nn(e.r),e.g=nn(e.g),e.b=nn(e.b)),e)},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?at:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return _t(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return _t(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[it]:{primaries:t,whitePoint:r,transfer:at,toXYZ:Zt,fromXYZ:Qt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:rt},outputColorSpaceConfig:{drawingBufferColorSpace:rt}},[rt]:{primaries:t,whitePoint:r,transfer:ot,toXYZ:Zt,fromXYZ:Qt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:rt}}}),e}var en=$t();function tn(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function nn(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var rn,an=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{rn===void 0&&(rn=ft(`canvas`)),rn.width=e.width,rn.height=e.height;let t=rn.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=rn}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=ft(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=tn(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(tn(t[e]/255)*255):t[e]=tn(t[e]);return{data:t,width:e.width,height:e.height}}return I(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},on=0,sn=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:on++}),this.uuid=Tt(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(cn(r[t].image)):e.push(cn(r[t]))}else e=cn(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function cn(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?an.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(I(`Texture: Unable to serialize Texture.`),{})}var ln=0,un=new B,dn=class e extends bt{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=v,i=v,a=C,o=T,s=M,c=E,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ln++}),this.uuid=Tt(),this.name=``,this.source=new sn(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new z(0,0),this.repeat=new z(1,1),this.center=new z(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new V,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(un).x}get height(){return this.source.getSize(un).y}get depth(){return this.source.getSize(un).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){I(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){I(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _:e.x-=Math.floor(e.x);break;case v:e.x=e.x<0?0:1;break;case y:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case _:e.y-=Math.floor(e.y);break;case v:e.y=e.y<0?0:1;break;case y:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};dn.DEFAULT_IMAGE=null,dn.DEFAULT_MAPPING=300,dn.DEFAULT_ANISOTROPY=1;var fn=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=R(this.x,e.x,t.x),this.y=R(this.y,e.y,t.y),this.z=R(this.z,e.z,t.z),this.w=R(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=R(this.x,e,t),this.y=R(this.y,e,t),this.z=R(this.z,e,t),this.w=R(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(R(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},pn=class extends bt{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:C,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new fn(0,0,e,t),this.scissorTest=!1,this.viewport=new fn(0,0,e,t),this.textures=[];let r=new dn({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:C,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new sn(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},mn=class extends pn{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},hn=class extends dn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=b,this.minFilter=b,this.wrapR=v,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},gn=class extends dn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=b,this.minFilter=b,this.wrapR=v,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},_n=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/vn.setFromMatrixColumn(e,0).length(),i=1/vn.setFromMatrixColumn(e,1).length(),a=1/vn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bn,e,xn)}lookAt(e,t,n){let r=this.elements;return wn.subVectors(e,t),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),Sn.crossVectors(n,wn),Sn.lengthSq()===0&&(Math.abs(n.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),Sn.crossVectors(n,wn)),Sn.normalize(),Cn.crossVectors(wn,Sn),r[0]=Sn.x,r[4]=Cn.x,r[8]=wn.x,r[1]=Sn.y,r[5]=Cn.y,r[9]=wn.y,r[2]=Sn.z,r[6]=Cn.z,r[10]=wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],ee=r[10],te=r[14],j=r[3],ne=r[7],re=r[11],ie=r[15];return i[0]=a*x+o*T+s*k+c*j,i[4]=a*S+o*E+s*A+c*ne,i[8]=a*C+o*D+s*ee+c*re,i[12]=a*w+o*O+s*te+c*ie,i[1]=l*x+u*T+d*k+f*j,i[5]=l*S+u*E+d*A+f*ne,i[9]=l*C+u*D+d*ee+f*re,i[13]=l*w+u*O+d*te+f*ie,i[2]=p*x+m*T+h*k+g*j,i[6]=p*S+m*E+h*A+g*ne,i[10]=p*C+m*D+h*ee+g*re,i[14]=p*w+m*O+h*te+g*ie,i[3]=_*x+v*T+y*k+b*j,i[7]=_*S+v*E+y*A+b*ne,i[11]=_*C+v*D+y*ee+b*re,i[15]=_*w+v*O+y*te+b*ie,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=vn.set(r[0],r[1],r[2]).length(),o=vn.set(r[4],r[5],r[6]).length(),s=vn.set(r[8],r[9],r[10]).length();i<0&&(a=-a),yn.copy(this);let c=1/a,l=1/o,u=1/s;return yn.elements[0]*=c,yn.elements[1]*=c,yn.elements[2]*=c,yn.elements[4]*=l,yn.elements[5]*=l,yn.elements[6]*=l,yn.elements[8]*=u,yn.elements[9]*=u,yn.elements[10]*=u,t.setFromRotationMatrix(yn),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=lt,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=lt,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},vn=new B,yn=new _n,bn=new B(0,0,0),xn=new B(1,1,1),Sn=new B,Cn=new B,wn=new B,Tn=new _n,En=new qt,Dn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(R(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-R(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(R(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-R(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(R(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-R(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:I(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Tn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Tn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return En.setFromEuler(this),this.setFromQuaternion(En,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Dn.DEFAULT_ORDER=`XYZ`;var On=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&(1<<e|0))}},kn=0,An=new B,jn=new qt,Mn=new _n,Nn=new B,Pn=new B,Fn=new B,In=new qt,Ln=new B(1,0,0),Rn=new B(0,1,0),zn=new B(0,0,1),Bn={type:`added`},Vn={type:`removed`},Hn={type:`childadded`,child:null},Un={type:`childremoved`,child:null},Wn=class e extends bt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kn++}),this.uuid=Tt(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new B,n=new Dn,r=new qt,i=new B(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new _n},normalMatrix:{value:new V}}),this.matrix=new _n,this.matrixWorld=new _n,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new On,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return jn.setFromAxisAngle(e,t),this.quaternion.multiply(jn),this}rotateOnWorldAxis(e,t){return jn.setFromAxisAngle(e,t),this.quaternion.premultiply(jn),this}rotateX(e){return this.rotateOnAxis(Ln,e)}rotateY(e){return this.rotateOnAxis(Rn,e)}rotateZ(e){return this.rotateOnAxis(zn,e)}translateOnAxis(e,t){return An.copy(e).applyQuaternion(this.quaternion),this.position.add(An.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ln,e)}translateY(e){return this.translateOnAxis(Rn,e)}translateZ(e){return this.translateOnAxis(zn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Nn.copy(e):Nn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Pn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mn.lookAt(Pn,Nn,this.up):Mn.lookAt(Nn,Pn,this.up),this.quaternion.setFromRotationMatrix(Mn),r&&(Mn.extractRotation(r.matrixWorld),jn.setFromRotationMatrix(Mn),this.quaternion.premultiply(jn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(L(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Bn),Hn.child=e,this.dispatchEvent(Hn),Hn.child=null):L(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Vn),Un.child=e,this.dispatchEvent(Un),Un.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Bn),Hn.child=e,this.dispatchEvent(Hn),Hn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pn,e,Fn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pn,In,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};Wn.DEFAULT_UP=new B(0,1,0),Wn.DEFAULT_MATRIX_AUTO_UPDATE=!0,Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Gn=class extends Wn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},Kn={type:`move`},qn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Kn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Gn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Jn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yn={h:0,s:0,l:0},Xn={h:0,s:0,l:0};function Zn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var H=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,en.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=en.workingColorSpace){return this.r=e,this.g=t,this.b=n,en.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=en.workingColorSpace){if(e=Et(e,1),t=R(t,0,1),n=R(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Zn(i,r,e+1/3),this.g=Zn(i,r,e),this.b=Zn(i,r,e-1/3)}return en.colorSpaceToWorking(this,r),this}setStyle(e,t=rt){function n(t){t!==void 0&&parseFloat(t)<1&&I(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:I(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);I(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=rt){let n=Jn[e.toLowerCase()];return n===void 0?I(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=tn(e.r),this.g=tn(e.g),this.b=tn(e.b),this}copyLinearToSRGB(e){return this.r=nn(e.r),this.g=nn(e.g),this.b=nn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=rt){return en.workingToColorSpace(Qn.copy(this),e),Math.round(R(Qn.r*255,0,255))*65536+Math.round(R(Qn.g*255,0,255))*256+Math.round(R(Qn.b*255,0,255))}getHexString(e=rt){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=en.workingColorSpace){en.workingToColorSpace(Qn.copy(this),t);let n=Qn.r,r=Qn.g,i=Qn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=en.workingColorSpace){return en.workingToColorSpace(Qn.copy(this),t),e.r=Qn.r,e.g=Qn.g,e.b=Qn.b,e}getStyle(e=rt){en.workingToColorSpace(Qn.copy(this),e);let t=Qn.r,n=Qn.g,r=Qn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Yn),this.setHSL(Yn.h+e,Yn.s+t,Yn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Yn),e.getHSL(Xn);let n=kt(Yn.h,Xn.h,t),r=kt(Yn.s,Xn.s,t),i=kt(Yn.l,Xn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Qn=new H;H.NAMES=Jn;var $n=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new H(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},er=class extends Wn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Dn,this.environmentIntensity=1,this.environmentRotation=new Dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},tr=new B,nr=new B,rr=new B,ir=new B,ar=new B,or=new B,sr=new B,cr=new B,lr=new B,ur=new B,dr=new fn,fr=new fn,pr=new fn,mr=class e{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),tr.subVectors(e,t),r.cross(tr);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){tr.subVectors(r,t),nr.subVectors(n,t),rr.subVectors(e,t);let a=tr.dot(tr),o=tr.dot(nr),s=tr.dot(rr),c=nr.dot(nr),l=nr.dot(rr),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,ir)!==null&&ir.x>=0&&ir.y>=0&&ir.x+ir.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,ir)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,ir.x),s.addScaledVector(a,ir.y),s.addScaledVector(o,ir.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return dr.setScalar(0),fr.setScalar(0),pr.setScalar(0),dr.fromBufferAttribute(e,t),fr.fromBufferAttribute(e,n),pr.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(dr,i.x),a.addScaledVector(fr,i.y),a.addScaledVector(pr,i.z),a}static isFrontFacing(e,t,n,r){return tr.subVectors(n,t),nr.subVectors(e,t),tr.cross(nr).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return tr.subVectors(this.c,this.b),nr.subVectors(this.a,this.b),tr.cross(nr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;ar.subVectors(r,n),or.subVectors(i,n),cr.subVectors(e,n);let s=ar.dot(cr),c=or.dot(cr);if(s<=0&&c<=0)return t.copy(n);lr.subVectors(e,r);let l=ar.dot(lr),u=or.dot(lr);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(ar,a);ur.subVectors(e,i);let f=ar.dot(ur),p=or.dot(ur);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(or,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return sr.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(sr,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(ar,a).addScaledVector(or,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},hr=class{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(_r.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(_r.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=_r.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,_r):_r.fromBufferAttribute(r,t),_r.applyMatrix4(e.matrixWorld),this.expandByPoint(_r);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),vr.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),vr.copy(e.boundingBox)),vr.applyMatrix4(e.matrixWorld),this.union(vr)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_r),_r.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Tr),Er.subVectors(this.max,Tr),yr.subVectors(e.a,Tr),br.subVectors(e.b,Tr),xr.subVectors(e.c,Tr),Sr.subVectors(br,yr),Cr.subVectors(xr,br),wr.subVectors(yr,xr);let t=[0,-Sr.z,Sr.y,0,-Cr.z,Cr.y,0,-wr.z,wr.y,Sr.z,0,-Sr.x,Cr.z,0,-Cr.x,wr.z,0,-wr.x,-Sr.y,Sr.x,0,-Cr.y,Cr.x,0,-wr.y,wr.x,0];return!kr(t,yr,br,xr,Er)||(t=[1,0,0,0,1,0,0,0,1],!kr(t,yr,br,xr,Er))?!1:(Dr.crossVectors(Sr,Cr),t=[Dr.x,Dr.y,Dr.z],kr(t,yr,br,xr,Er))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_r).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_r).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},gr=[new B,new B,new B,new B,new B,new B,new B,new B],_r=new B,vr=new hr,yr=new B,br=new B,xr=new B,Sr=new B,Cr=new B,wr=new B,Tr=new B,Er=new B,Dr=new B,Or=new B;function kr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){Or.fromArray(e,a);let o=i.x*Math.abs(Or.x)+i.y*Math.abs(Or.y)+i.z*Math.abs(Or.z),s=t.dot(Or),c=n.dot(Or),l=r.dot(Or);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Ar=new B,jr=new z,Mr=0,Nr=class extends bt{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Mr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=ct,this.updateRanges=[],this.gpuType=te,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)jr.fromBufferAttribute(this,t),jr.applyMatrix3(e),this.setXY(t,jr.x,jr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ar.fromBufferAttribute(this,t),Ar.applyMatrix3(e),this.setXYZ(t,Ar.x,Ar.y,Ar.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ar.fromBufferAttribute(this,t),Ar.applyMatrix4(e),this.setXYZ(t,Ar.x,Ar.y,Ar.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ar.fromBufferAttribute(this,t),Ar.applyNormalMatrix(e),this.setXYZ(t,Ar.x,Ar.y,Ar.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ar.fromBufferAttribute(this,t),Ar.transformDirection(e),this.setXYZ(t,Ar.x,Ar.y,Ar.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Wt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Gt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Wt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Wt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Wt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Wt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array),r=Gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array),r=Gt(r,this.array),i=Gt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},Pr=class extends Nr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Fr=class extends Nr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Ir=class extends Nr{constructor(e,t,n){super(new Float32Array(e),t,n)}},Lr=new hr,Rr=new B,zr=new B,Br=class{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Lr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Rr.subVectors(e,this.center);let t=Rr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Rr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Rr.copy(e.center).add(zr)),this.expandByPoint(Rr.copy(e.center).sub(zr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Vr=0,Hr=new _n,Ur=new Wn,Wr=new B,Gr=new hr,Kr=new hr,qr=new B,Jr=class e extends bt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vr++}),this.uuid=Tt(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(ut(e)?Fr:Pr)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new V().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Hr.makeRotationFromQuaternion(e),this.applyMatrix4(Hr),this}rotateX(e){return Hr.makeRotationX(e),this.applyMatrix4(Hr),this}rotateY(e){return Hr.makeRotationY(e),this.applyMatrix4(Hr),this}rotateZ(e){return Hr.makeRotationZ(e),this.applyMatrix4(Hr),this}translate(e,t,n){return Hr.makeTranslation(e,t,n),this.applyMatrix4(Hr),this}scale(e,t,n){return Hr.makeScale(e,t,n),this.applyMatrix4(Hr),this}lookAt(e){return Ur.lookAt(e),Ur.updateMatrix(),this.applyMatrix4(Ur.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wr).negate(),this.translate(Wr.x,Wr.y,Wr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new Ir(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&I(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){L(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Gr.setFromBufferAttribute(n),this.morphTargetsRelative?(qr.addVectors(this.boundingBox.min,Gr.min),this.boundingBox.expandByPoint(qr),qr.addVectors(this.boundingBox.max,Gr.max),this.boundingBox.expandByPoint(qr)):(this.boundingBox.expandByPoint(Gr.min),this.boundingBox.expandByPoint(Gr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&L(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Br);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){L(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new B,1/0);return}if(e){let n=this.boundingSphere.center;if(Gr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Kr.setFromBufferAttribute(n),this.morphTargetsRelative?(qr.addVectors(Gr.min,Kr.min),Gr.expandByPoint(qr),qr.addVectors(Gr.max,Kr.max),Gr.expandByPoint(qr)):(Gr.expandByPoint(Kr.min),Gr.expandByPoint(Kr.max))}Gr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)qr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(qr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)qr.fromBufferAttribute(a,t),o&&(Wr.fromBufferAttribute(e,t),qr.add(Wr)),r=Math.max(r,n.distanceToSquared(qr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&L(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){L(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new Nr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new B,s[e]=new B;let c=new B,l=new B,u=new B,d=new z,f=new z,p=new z,m=new B,h=new B;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new B,y=new B,b=new B,x=new B;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new Nr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new B,i=new B,a=new B,o=new B,s=new B,c=new B,l=new B,u=new B;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)qr.fromBufferAttribute(e,t),qr.normalize(),e.setXYZ(t,qr.x,qr.y,qr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new Nr(a,r,i)}if(this.index===null)return I(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Yr=new B,Xr=new B,Zr=new V,Qr=class{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Yr.subVectors(n,t).cross(Xr.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Yr),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Zr.getNormalMatrix(e),r=this.coplanarPoint(Yr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},$r=0,ei=class extends bt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$r++}),this.uuid=Tt(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new H(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=st,this.stencilZFail=st,this.stencilZPass=st,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){I(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){I(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new H().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Qr().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new z().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new z().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},ti=new B,ni=new B,ri=new B,ii=new B,ai=class{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ti)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ti.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ti.copy(this.origin).addScaledVector(this.direction,t),ti.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ni.copy(e).add(t).multiplyScalar(.5),ri.copy(t).sub(e).normalize(),ii.copy(this.origin).sub(ni);let i=e.distanceTo(t)*.5,a=-this.direction.dot(ri),o=ii.dot(this.direction),s=-ii.dot(ri),c=ii.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(ni).addScaledVector(ri,d),f}intersectSphere(e,t){if(e.radius<0)return null;ti.subVectors(e.center,this.origin);let n=ti.dot(this.direction),r=ti.dot(ti)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ti)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,ee,te,j;if(y>=b&&y>=x?(w=s,D=u,A=p,j=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,ee=_,te=v):(S=l,C=c,T=f,E=d,O=h,k=m,ee=v,te=_)):b>=x?(w=c,D=d,A=m,j=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,ee=v,te=g):(S=s,C=l,T=u,E=f,O=p,k=h,ee=g,te=v)):(w=l,D=f,A=h,j=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,ee=g,te=_):(S=c,C=s,T=d,E=u,O=m,k=p,ee=_,te=g)),w===0)return null;let ne=S/w,re=C/w,ie=1/w,ae=T-ne*D,oe=E-re*D,se=O-ne*A,ce=k-re*A,M=ee-ne*j,le=te-re*j,ue=M*ce-le*se,de=ae*le-oe*M,fe=se*oe-ce*ae;if(r){if(ue<0||de<0||fe<0)return null}else if((ue<0||de<0||fe<0)&&(ue>0||de>0||fe>0))return null;let pe=ue+de+fe;if(pe===0)return null;let me=ie*(ue*D+de*A+fe*j);return(pe>0?me<0:me>0)?null:this.at(me/pe,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},oi=class extends ei{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new H(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},si=new _n,ci=new ai,li=new Br,ui=new B,di=new B,fi=new B,pi=new B,mi=new B,hi=new B,gi=new B,_i=new B,vi=class extends Wn{constructor(e=new Jr,t=new oi){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){hi.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(mi.fromBufferAttribute(s,e),a?hi.addScaledVector(mi,r):hi.addScaledVector(mi.sub(t),r))}t.add(hi)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),li.copy(n.boundingSphere),li.applyMatrix4(i),ci.copy(e.ray).recast(e.near),!(li.containsPoint(ci.origin)===!1&&(ci.intersectSphere(li,ui)===null||ci.origin.distanceToSquared(ui)>(e.far-e.near)**2))&&(si.copy(i).invert(),ci.copy(e.ray).applyMatrix4(si),(n.boundingBox===null||ci.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,ci)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=bi(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=bi(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=bi(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=bi(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function yi(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;_i.copy(s),_i.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(_i);return l<n.near||l>n.far?null:{distance:l,point:_i.clone(),object:e}}function bi(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,di),e.getVertexPosition(c,fi),e.getVertexPosition(l,pi);let u=yi(e,t,n,r,di,fi,pi,gi);if(u){let e=new B;mr.getBarycoord(gi,di,fi,pi,e),i&&(u.uv=mr.getInterpolatedAttribute(i,s,c,l,e,new z)),a&&(u.uv1=mr.getInterpolatedAttribute(a,s,c,l,e,new z)),o&&(u.normal=mr.getInterpolatedAttribute(o,s,c,l,e,new B),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new B,materialIndex:0};mr.getNormal(di,fi,pi,t.normal),u.face=t,u.barycoord=e}return u}var xi=class extends dn{constructor(e=null,t=1,n=1,r,i,a,o,s,c=b,l=b,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Si=new Br,Ci=new z(.5,.5),wi=new B,Ti=class{constructor(e=new Qr,t=new Qr,n=new Qr,r=new Qr,i=new Qr,a=new Qr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=lt,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Si.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Si.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Si)}intersectsSprite(e){return Si.center.set(0,0,0),Si.radius=.7071067811865476+Ci.distanceTo(e.center),Si.applyMatrix4(e.matrixWorld),this.intersectsSphere(Si)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(wi.x=r.normal.x>0?e.max.x:e.min.x,wi.y=r.normal.y>0?e.max.y:e.min.y,wi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(wi)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Ei=class extends ei{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new H(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Di=new B,Oi=new B,ki=new _n,Ai=new ai,ji=new Br,Mi=new B,Ni=new B,Pi=class extends Wn{constructor(e=new Jr,t=new Ei){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)Di.fromBufferAttribute(t,e-1),Oi.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=Di.distanceTo(Oi);e.setAttribute(`lineDistance`,new Ir(n,1))}else I(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ji.copy(n.boundingSphere),ji.applyMatrix4(r),ji.radius+=i,e.ray.intersectsSphere(ji)===!1)return;ki.copy(r).invert(),Ai.copy(e.ray).applyMatrix4(ki);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=Fi(this,e,Ai,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=Fi(this,e,Ai,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=Fi(this,e,Ai,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=Fi(this,e,Ai,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Fi(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(Di.fromBufferAttribute(s,i),Oi.fromBufferAttribute(s,a),n.distanceSqToSegment(Di,Oi,Mi,Ni)>r)return;Mi.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(Mi);if(!(c<t.near||c>t.far))return{distance:c,point:Ni.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var Ii=class extends dn{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Li=class extends dn{constructor(e,t,n=ee,r,i,a,o=b,s=b,c,l=le,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new sn(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Ri=class extends Li{constructor(e,t=ee,n=301,r,i,a=b,o=b,s,c=le){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},zi=class extends dn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Bi=class e extends Jr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Ir(c,3)),this.setAttribute(`normal`,new Ir(l,3)),this.setAttribute(`uv`,new Ir(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new B;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Vi=class e extends Jr{constructor(e=1,t=1,n=4,r=8,i=1){super(),this.type=`CapsuleGeometry`,this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:i},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),i=Math.max(1,Math.floor(i));let a=[],o=[],s=[],c=[],l=t/2,u=Math.PI/2*e,d=t,f=2*u+d,p=n*2+i,m=r+1,h=new B,g=new B;for(let _=0;_<=p;_++){let v=0,y=0,b=0,x=0;if(_<=n){let t=_/n,r=t*Math.PI/2;y=-l-e*Math.cos(r),b=e*Math.sin(r),x=-e*Math.cos(r),v=t*u}else if(_<=n+i){let r=(_-n)/i;y=-l+r*t,b=e,x=0,v=u+r*d}else{let t=(_-n-i)/n,r=t*Math.PI/2;y=l+e*Math.sin(r),b=e*Math.cos(r),x=e*Math.sin(r),v=u+d+t*u}let S=Math.max(0,Math.min(1,v/f)),C=0;_===0?C=.5/r:_===p&&(C=-.5/r);for(let e=0;e<=r;e++){let t=e/r,n=t*Math.PI*2,i=Math.sin(n),a=Math.cos(n);g.x=-b*a,g.y=y,g.z=b*i,o.push(g.x,g.y,g.z),h.set(-b*a,x,b*i),h.normalize(),s.push(h.x,h.y,h.z),c.push(t+C,S)}if(_>0){let e=(_-1)*m;for(let t=0;t<r;t++){let n=e+t,r=e+t+1,i=_*m+t,o=_*m+t+1;a.push(n,r,i),a.push(r,o,i)}}}this.setIndex(a),this.setAttribute(`position`,new Ir(o,3)),this.setAttribute(`normal`,new Ir(s,3)),this.setAttribute(`uv`,new Ir(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Hi=class e extends Jr{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new B,l=new z;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new Ir(a,3)),this.setAttribute(`normal`,new Ir(o,3)),this.setAttribute(`uv`,new Ir(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ui=class e extends Jr{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new Ir(u,3)),this.setAttribute(`normal`,new Ir(d,3)),this.setAttribute(`uv`,new Ir(f,2));function _(){let a=new B,_=new B,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new z,m=new B,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Wi=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){I(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new z:new B);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new B,r=[],i=[],a=[],o=new B,s=new _n;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new B)}i[0]=new B,a[0]=new B;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(R(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(R(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}};function Gi(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var Ki=new B,qi=new B,Ji=new Gi,Yi=new Gi,Xi=new Gi,Zi=class extends Wi{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new B){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(qi.subVectors(r[0],r[1]).add(r[0]),c=qi);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(Ki.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=Ki),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),Ji.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),Yi.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),Xi.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(Ji.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),Yi.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),Xi.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(Ji.calc(s),Yi.calc(s),Xi.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new B().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Qi(e,t){let n=1-e;return n*n*t}function $i(e,t){return 2*(1-e)*e*t}function ea(e,t){return e*e*t}function ta(e,t,n,r){return Qi(e,t)+$i(e,n)+ea(e,r)}var na=class extends Wi{constructor(e=new B,t=new B,n=new B){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new B){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(ta(e,r.x,i.x,a.x),ta(e,r.y,i.y,a.y),ta(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ra=class e extends Jr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Ir(p,3)),this.setAttribute(`normal`,new Ir(m,3)),this.setAttribute(`uv`,new Ir(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},ia=class e extends Jr{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new B,p=new z;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new Ir(s,3)),this.setAttribute(`normal`,new Ir(c,3)),this.setAttribute(`uv`,new Ir(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},aa=class e extends Jr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new B,d=new B,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new Ir(p,3)),this.setAttribute(`normal`,new Ir(m,3)),this.setAttribute(`uv`,new Ir(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},oa=class e extends Jr{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new B,f=new B,p=new B;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new Ir(c,3)),this.setAttribute(`normal`,new Ir(l,3)),this.setAttribute(`uv`,new Ir(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function sa(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(la(i))i.isRenderTargetTexture?(I(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(la(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function ca(e){let t={};for(let n=0;n<e.length;n++){let r=sa(e[n]);for(let e in r)t[e]=r[e]}return t}function la(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function ua(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function da(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:en.workingColorSpace}var fa={clone:sa,merge:ca},pa=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ma=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ha=class extends ei{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pa,this.fragmentShader=ma,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=sa(e.uniforms),this.uniformsGroups=ua(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new H().setHex(r.value);break;case`v2`:this.uniforms[n].value=new z().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new B().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new fn().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new V().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new _n().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ga=class extends ha{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},_a=class extends ei{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new H(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new H(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},va=class extends ei{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:``},this.type=`MeshToonMaterial`,this.color=new H(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new H(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ya=class extends ei{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=nt,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ba=class extends ei{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},xa=class extends Ei{constructor(e){super(),this.isLineDashedMaterial=!0,this.type=`LineDashedMaterial`,this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function Sa(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Ca(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var wa=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Ta=class extends wa{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:$e,endingEnd:$e}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case et:i=e,o=2*t-n;break;case tt:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case et:a=e,s=2*n-t;break;case tt:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Ea=class extends wa{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Da=class extends wa{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Oa=class extends wa{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=ja(n,t,g,y,r);i[p]=ka(x,o,_,b,m)}return i}};function ka(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function Aa(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function ja(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=ka(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=Aa(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var Ma=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Sa(t,this.TimeBufferType),this.values=Sa(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Sa(e.times,Array),values:Sa(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),Ca(e.settings)&&(n.settings={inTangents:Sa(e.settings.inTangents,Array),outTangents:Sa(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Da(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ea(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ta(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Oa(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ye:t=this.InterpolantFactoryMethodDiscrete;break;case Xe:t=this.InterpolantFactoryMethodLinear;break;case Ze:t=this.InterpolantFactoryMethodSmooth;break;case Qe:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return I(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ye;case this.InterpolantFactoryMethodLinear:return Xe;case this.InterpolantFactoryMethodSmooth:return Ze;case this.InterpolantFactoryMethodBezier:return Qe}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Ca(this.settings)&&(Na(this.settings.inTangents,e),Na(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(L(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(L(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){L(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){L(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&dt(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){L(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Ze,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Ca(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Na(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}Ma.prototype.ValueTypeName=``,Ma.prototype.TimeBufferType=Float32Array,Ma.prototype.ValueBufferType=Float32Array,Ma.prototype.DefaultInterpolation=Xe;var Pa=class extends Ma{constructor(e,t,n){super(e,t,n)}};Pa.prototype.ValueTypeName=`bool`,Pa.prototype.ValueBufferType=Array,Pa.prototype.DefaultInterpolation=Ye,Pa.prototype.InterpolantFactoryMethodLinear=void 0,Pa.prototype.InterpolantFactoryMethodSmooth=void 0;var Fa=class extends Ma{constructor(e,t,n,r){super(e,t,n,r)}};Fa.prototype.ValueTypeName=`color`;var Ia=class extends Ma{constructor(e,t,n,r){super(e,t,n,r)}};Ia.prototype.ValueTypeName=`number`;var La=class extends wa{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)qt.slerpFlat(i,0,a,c-o,a,c,s);return i}},Ra=class extends Ma{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new La(this.times,this.values,this.getValueSize(),e)}};Ra.prototype.ValueTypeName=`quaternion`,Ra.prototype.InterpolantFactoryMethodSmooth=void 0;var za=class extends Ma{constructor(e,t,n){super(e,t,n)}};za.prototype.ValueTypeName=`string`,za.prototype.ValueBufferType=Array,za.prototype.DefaultInterpolation=Ye,za.prototype.InterpolantFactoryMethodLinear=void 0,za.prototype.InterpolantFactoryMethodSmooth=void 0;var Ba=class extends Ma{constructor(e,t,n,r){super(e,t,n,r)}};Ba.prototype.ValueTypeName=`vector`;var Va=class extends Wn{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new H(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ha=class extends Va{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(Wn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new H(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Ua=new _n,Wa=new B,Ga=new B,Ka=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new z(512,512),this.mapType=E,this.map=null,this.mapPass=null,this.matrix=new _n,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ti,this._frameExtents=new z(1,1),this._viewportCount=1,this._viewports=[new fn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Wa.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wa),Ga.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ga),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Ua.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Ua,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Ua)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},qa=new B,Ja=new qt,Ya=new B,Xa=class extends Wn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new _n,this.projectionMatrix=new _n,this.projectionMatrixInverse=new _n,this.coordinateSystem=lt,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(qa,Ja,Ya),Ya.x===1&&Ya.y===1&&Ya.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qa,Ja,Ya.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(qa,Ja,Ya),Ya.x===1&&Ya.y===1&&Ya.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qa,Ja,Ya.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Za=new B,Qa=new z,$a=new z,eo=class extends Xa{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=wt*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ct*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wt*2*Math.atan(Math.tan(Ct*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Za.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Za.x,Za.y).multiplyScalar(-e/Za.z),Za.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Za.x,Za.y).multiplyScalar(-e/Za.z)}getViewSize(e,t){return this.getViewBounds(e,Qa,$a),t.subVectors($a,Qa)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ct*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},to=class extends Xa{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},no=class extends Ka{constructor(){super(new to(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ro=class extends Va{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(Wn.DEFAULT_UP),this.updateMatrix(),this.target=new Wn,this.shadow=new no}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},io=-90,ao=1,oo=class extends Wn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new eo(io,ao,e,t);r.layers=this.layers,this.add(r);let i=new eo(io,ao,e,t);i.layers=this.layers,this.add(i);let a=new eo(io,ao,e,t);a.layers=this.layers,this.add(a);let o=new eo(io,ao,e,t);o.layers=this.layers,this.add(o);let s=new eo(io,ao,e,t);s.layers=this.layers,this.add(s);let c=new eo(io,ao,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},so=class extends eo{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},co=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=lo.bind(this),e.addEventListener(`visibilitychange`,this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener(`visibilitychange`,this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e===void 0?performance.now():e)-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function lo(){this._document.hidden===!1&&this.reset()}var uo=`\\[\\]\\.:\\/`,fo=RegExp(`[\\[\\]\\.:\\/]`,`g`),po=`[^\\[\\]\\.:\\/]`,mo=`[^`+uo.replace(`\\.`,``)+`]`,ho=`((?:WC+[\\/:])*)`.replace(`WC`,po),go=`(WCOD+)?`.replace(`WCOD`,mo),_o=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,po),vo=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,po),yo=RegExp(`^`+ho+go+_o+vo+`$`),bo=[`material`,`materials`,`bones`,`map`],xo=class{constructor(e,t,n){let r=n||So.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},So=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(fo,``)}static parseTrackName(e){let t=yo.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);bo.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){I(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){L(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){L(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){L(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){L(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){L(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){L(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){L(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;L(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){L(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){L(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};So.Composite=xo,So.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},So.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},So.prototype.GetterByBindingType=[So.prototype._getValue_direct,So.prototype._getValue_array,So.prototype._getValue_arrayElement,So.prototype._getValue_toArray],So.prototype.SetterByBindingTypeAndVersioning=[[So.prototype._setValue_direct,So.prototype._setValue_direct_setNeedsUpdate,So.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[So.prototype._setValue_array,So.prototype._setValue_array_setNeedsUpdate,So.prototype._setValue_array_setMatrixWorldNeedsUpdate],[So.prototype._setValue_arrayElement,So.prototype._setValue_arrayElement_setNeedsUpdate,So.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[So.prototype._setValue_fromArray,So.prototype._setValue_fromArray_setNeedsUpdate,So.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Co=new _n,wo=class{constructor(e,t,n=0,r=1/0){this.ray=new ai(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new On,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):L(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return Co.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Co),this}intersectObject(e,t=!0,n=[]){return Eo(e,this,n,t),n.sort(To),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)Eo(e[r],this,n,t);return n.sort(To),n}};function To(e,t){return e.distance-t.distance}function Eo(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)Eo(r[e],t,n,!0)}}var Do=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,I(`Clock: This module has been deprecated. Please use THREE.Timer instead.`)}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}},Oo=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){let e=1e-6;return this.phi=R(this.phi,e,Math.PI-e),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(R(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};(class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});var ko=class extends bt{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Ao(e,t,n,r){let i=jo(r);switch(n){case se:return e*t;case de:return e*t/i.components*i.byteLength;case fe:return e*t/i.components*i.byteLength;case pe:return e*t*2/i.components*i.byteLength;case me:return e*t*2/i.components*i.byteLength;case ce:return e*t*3/i.components*i.byteLength;case M:return e*t*4/i.components*i.byteLength;case he:return e*t*4/i.components*i.byteLength;case ge:case _e:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ve:case ye:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case xe:case Ce:return Math.max(e,16)*Math.max(t,8)/4;case be:case Se:return Math.max(e,8)*Math.max(t,8)/2;case we:case Te:case De:case Oe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Ee:case ke:case Ae:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case je:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Me:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Ne:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Pe:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Fe:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case N:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Ie:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Le:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Re:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case P:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case ze:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case F:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Be:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Ve:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case He:case Ue:case We:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Ge:case Ke:return Math.ceil(e/4)*Math.ceil(t/4)*8;case qe:case Je:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function jo(e){switch(e){case E:case D:return{byteLength:1,components:1};case k:case O:case j:return{byteLength:2,components:1};case ne:case re:return{byteLength:2,components:4};case ee:case A:case te:return{byteLength:4,components:1};case ae:case oe:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?I(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function Mo(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function No(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var U={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},W={common:{diffuse:{value:new H(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new V},alphaMap:{value:null},alphaMapTransform:{value:new V},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new V}},envmap:{envMap:{value:null},envMapRotation:{value:new V},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new V}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new V}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new V},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new V},normalScale:{value:new z(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new V},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new V}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new V}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new V}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new H(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new B},probesMax:{value:new B},probesResolution:{value:new B}},points:{diffuse:{value:new H(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new V},alphaTest:{value:0},uvTransform:{value:new V}},sprite:{diffuse:{value:new H(16777215)},opacity:{value:1},center:{value:new z(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new V},alphaMap:{value:null},alphaMapTransform:{value:new V},alphaTest:{value:0}}},Po={basic:{uniforms:ca([W.common,W.specularmap,W.envmap,W.aomap,W.lightmap,W.fog]),vertexShader:U.meshbasic_vert,fragmentShader:U.meshbasic_frag},lambert:{uniforms:ca([W.common,W.specularmap,W.envmap,W.aomap,W.lightmap,W.emissivemap,W.bumpmap,W.normalmap,W.displacementmap,W.fog,W.lights,{emissive:{value:new H(0)},envMapIntensity:{value:1}}]),vertexShader:U.meshlambert_vert,fragmentShader:U.meshlambert_frag},phong:{uniforms:ca([W.common,W.specularmap,W.envmap,W.aomap,W.lightmap,W.emissivemap,W.bumpmap,W.normalmap,W.displacementmap,W.fog,W.lights,{emissive:{value:new H(0)},specular:{value:new H(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:U.meshphong_vert,fragmentShader:U.meshphong_frag},standard:{uniforms:ca([W.common,W.envmap,W.aomap,W.lightmap,W.emissivemap,W.bumpmap,W.normalmap,W.displacementmap,W.roughnessmap,W.metalnessmap,W.fog,W.lights,{emissive:{value:new H(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:U.meshphysical_vert,fragmentShader:U.meshphysical_frag},toon:{uniforms:ca([W.common,W.aomap,W.lightmap,W.emissivemap,W.bumpmap,W.normalmap,W.displacementmap,W.gradientmap,W.fog,W.lights,{emissive:{value:new H(0)}}]),vertexShader:U.meshtoon_vert,fragmentShader:U.meshtoon_frag},matcap:{uniforms:ca([W.common,W.bumpmap,W.normalmap,W.displacementmap,W.fog,{matcap:{value:null}}]),vertexShader:U.meshmatcap_vert,fragmentShader:U.meshmatcap_frag},points:{uniforms:ca([W.points,W.fog]),vertexShader:U.points_vert,fragmentShader:U.points_frag},dashed:{uniforms:ca([W.common,W.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:U.linedashed_vert,fragmentShader:U.linedashed_frag},depth:{uniforms:ca([W.common,W.displacementmap]),vertexShader:U.depth_vert,fragmentShader:U.depth_frag},normal:{uniforms:ca([W.common,W.bumpmap,W.normalmap,W.displacementmap,{opacity:{value:1}}]),vertexShader:U.meshnormal_vert,fragmentShader:U.meshnormal_frag},sprite:{uniforms:ca([W.sprite,W.fog]),vertexShader:U.sprite_vert,fragmentShader:U.sprite_frag},background:{uniforms:{uvTransform:{value:new V},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:U.background_vert,fragmentShader:U.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new V}},vertexShader:U.backgroundCube_vert,fragmentShader:U.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:U.cube_vert,fragmentShader:U.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:U.equirect_vert,fragmentShader:U.equirect_frag},distance:{uniforms:ca([W.common,W.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:U.distance_vert,fragmentShader:U.distance_frag},shadow:{uniforms:ca([W.lights,W.fog,{color:{value:new H(0)},opacity:{value:1}}]),vertexShader:U.shadow_vert,fragmentShader:U.shadow_frag}};Po.physical={uniforms:ca([Po.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new V},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new V},clearcoatNormalScale:{value:new z(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new V},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new V},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new V},sheen:{value:0},sheenColor:{value:new H(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new V},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new V},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new V},transmissionSamplerSize:{value:new z},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new V},attenuationDistance:{value:0},attenuationColor:{value:new H(0)},specularColor:{value:new H(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new V},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new V},anisotropyVector:{value:new z},anisotropyMap:{value:null},anisotropyMapTransform:{value:new V}}]),vertexShader:U.meshphysical_vert,fragmentShader:U.meshphysical_frag};var Fo={r:0,b:0,g:0},Io=new _n,Lo=new V;Lo.set(-1,0,0,0,1,0,0,0,1);function Ro(e,t,n,r,i,a){let o=new H(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new vi(new Bi(1,1,1),new ha({name:`BackgroundCubeMaterial`,uniforms:sa(Po.backgroundCube.uniforms),vertexShader:Po.backgroundCube.vertexShader,fragmentShader:Po.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Io.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Lo),l.material.toneMapped=en.getTransfer(i.colorSpace)!==ot,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new vi(new ra(2,2),new ha({name:`BackgroundMaterial`,uniforms:sa(Po.background.uniforms),vertexShader:Po.background.vertexShader,fragmentShader:Po.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=en.getTransfer(i.colorSpace)!==ot,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Fo,da(e)),n.buffers.color.setClear(Fo.r,Fo.g,Fo.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function zo(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Bo(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Vo(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(I(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&I(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Ho(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Qr,s=new V,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Uo=4,Wo=6,Go=20,Ko=256,qo=new to,Jo=new H,Yo=null,Xo=0,Zo=0,Qo=!1,$o=new B,es=new B,ts=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=$o}=i;Yo=this._renderer.getRenderTarget(),Xo=this._renderer.getActiveCubeFace(),Zo=this._renderer.getActiveMipmapLevel(),Qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cs(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ss(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Yo,Xo,Zo),this._renderer.xr.enabled=Qo,e.scissorTest=!1,is(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yo=this._renderer.getRenderTarget(),Xo=this._renderer.getActiveCubeFace(),Zo=this._renderer.getActiveMipmapLevel(),Qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:C,minFilter:C,generateMipmaps:!1,type:j,format:M,colorSpace:it,depthBuffer:!1},r=rs(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rs(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=ns(r)),this._blurMaterial=os(r,e,t),this._ggxMaterial=as(r,e,t)}return r}_compileMaterial(e){let t=new vi(new Jr,e);this._renderer.compile(t,qo)}_sceneToCubeUV(e,t,n,r,i){let a=new eo(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(Jo),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new vi(new Bi,new oi({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(Jo),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;is(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=cs()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ss());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;is(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,qo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-Uo?n-d+Uo:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,is(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,qo),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,is(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,qo)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];is(t,3*l*(r>this._lodMax-Uo?r-this._lodMax+Uo:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,qo)}};function ns(e){let t=[],n=[],r=e,i=e-Uo+1+Wo;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?es.set(1,r,n):e===1?es.set(-n,1,-r):e===2?es.set(-n,r,1):e===3?es.set(-1,r,-n):e===4?es.set(-n,-1,r):es.set(n,r,-1),es.toArray(l,(e*6+t)*3)}}let u=new Jr;u.setAttribute(`position`,new Nr(c,3)),u.setAttribute(`outputDirection`,new Nr(l,3)),n.push(new vi(u,null)),r>Uo&&r--}return{lodMeshes:n,sizeLods:t}}function rs(e,t,n){let r=new mn(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function is(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function as(e,t,n){return new ha({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:Ko,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ls(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function os(e,t,n){return new ha({name:`SphericalGaussianBlur`,defines:{SAMPLES:Go,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ls(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ss(){return new ha({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:ls(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function cs(){return new ha({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ls(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ls(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var us=class extends mn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ii(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Bi(5,5,5),i=new ha({name:`CubemapFromEquirect`,uniforms:sa(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new vi(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=C),new oo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function ds(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new us(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new ts(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new ts(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function fs(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&_t(`WebGLRenderer: `+e+` extension not supported.`),t}}}function ps(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?Fr:Pr)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function ms(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function hs(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:L(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function gs(e,t,n){let r=new WeakMap,i=new fn;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new hn(h,p,m,u);g.type=te,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new z(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function _s(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var vs={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function ys(e,t,n,r,i,a){let o=new mn(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new Jr;l.setAttribute(`position`,new Ir([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new Ir([0,2,0,0,2,0],2));let u=new ga({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new vi(l,u),f=new to(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,_=null,v=[],y=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<v.length;n++){let r=v[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){v=e,y=v.length>0&&v[0].isRenderPass===!0;let t=o.width,n=o.height;v.length>0&&s===null&&(s=new mn(t,n,{type:j,depthBuffer:!1,stencilBuffer:!1}),c=new mn(t,n,{type:j,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<v.length;e++){let r=v[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&v.length===0)return!1;if(_=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return y===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<v.length;i++){let a=v[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},en.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=vs[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(_),e.render(d,f),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var bs=new dn,xs=new Li(1,1),Ss=new hn,Cs=new gn,ws=new Ii,Ts=[],Es=[],Ds=new Float32Array(16),Os=new Float32Array(9),ks=new Float32Array(4);function As(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Ts[i];if(a===void 0&&(a=new Float32Array(i),Ts[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function js(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Ms(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Ns(e,t){let n=Es[t];n===void 0&&(n=new Int32Array(t),Es[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Ps(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Fs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(js(n,t))return;e.uniform2fv(this.addr,t),Ms(n,t)}}function Is(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(js(n,t))return;e.uniform3fv(this.addr,t),Ms(n,t)}}function Ls(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(js(n,t))return;e.uniform4fv(this.addr,t),Ms(n,t)}}function Rs(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(js(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Ms(n,t)}else{if(js(n,r))return;ks.set(r),e.uniformMatrix2fv(this.addr,!1,ks),Ms(n,r)}}function zs(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(js(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Ms(n,t)}else{if(js(n,r))return;Os.set(r),e.uniformMatrix3fv(this.addr,!1,Os),Ms(n,r)}}function Bs(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(js(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Ms(n,t)}else{if(js(n,r))return;Ds.set(r),e.uniformMatrix4fv(this.addr,!1,Ds),Ms(n,r)}}function Vs(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Hs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(js(n,t))return;e.uniform2iv(this.addr,t),Ms(n,t)}}function Us(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(js(n,t))return;e.uniform3iv(this.addr,t),Ms(n,t)}}function Ws(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(js(n,t))return;e.uniform4iv(this.addr,t),Ms(n,t)}}function Gs(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Ks(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(js(n,t))return;e.uniform2uiv(this.addr,t),Ms(n,t)}}function qs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(js(n,t))return;e.uniform3uiv(this.addr,t),Ms(n,t)}}function Js(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(js(n,t))return;e.uniform4uiv(this.addr,t),Ms(n,t)}}function Ys(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(xs.compareFunction=n.isReversedDepthBuffer()?518:515,a=xs):a=bs,n.setTexture2D(t||a,i)}function Xs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Cs,i)}function Zs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||ws,i)}function Qs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Ss,i)}function $s(e){switch(e){case 5126:return Ps;case 35664:return Fs;case 35665:return Is;case 35666:return Ls;case 35674:return Rs;case 35675:return zs;case 35676:return Bs;case 5124:case 35670:return Vs;case 35667:case 35671:return Hs;case 35668:case 35672:return Us;case 35669:case 35673:return Ws;case 5125:return Gs;case 36294:return Ks;case 36295:return qs;case 36296:return Js;case 35678:case 36198:case 36298:case 36306:case 35682:return Ys;case 35679:case 36299:case 36307:return Xs;case 35680:case 36300:case 36308:case 36293:return Zs;case 36289:case 36303:case 36311:case 36292:return Qs}}function ec(e,t){e.uniform1fv(this.addr,t)}function tc(e,t){let n=As(t,this.size,2);e.uniform2fv(this.addr,n)}function nc(e,t){let n=As(t,this.size,3);e.uniform3fv(this.addr,n)}function rc(e,t){let n=As(t,this.size,4);e.uniform4fv(this.addr,n)}function ic(e,t){let n=As(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function ac(e,t){let n=As(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function oc(e,t){let n=As(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function sc(e,t){e.uniform1iv(this.addr,t)}function cc(e,t){e.uniform2iv(this.addr,t)}function lc(e,t){e.uniform3iv(this.addr,t)}function uc(e,t){e.uniform4iv(this.addr,t)}function dc(e,t){e.uniform1uiv(this.addr,t)}function fc(e,t){e.uniform2uiv(this.addr,t)}function pc(e,t){e.uniform3uiv(this.addr,t)}function mc(e,t){e.uniform4uiv(this.addr,t)}function hc(e,t,n){let r=this.cache,i=t.length,a=Ns(n,i);js(r,a)||(e.uniform1iv(this.addr,a),Ms(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?xs:bs;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function gc(e,t,n){let r=this.cache,i=t.length,a=Ns(n,i);js(r,a)||(e.uniform1iv(this.addr,a),Ms(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Cs,a[e])}function _c(e,t,n){let r=this.cache,i=t.length,a=Ns(n,i);js(r,a)||(e.uniform1iv(this.addr,a),Ms(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||ws,a[e])}function vc(e,t,n){let r=this.cache,i=t.length,a=Ns(n,i);js(r,a)||(e.uniform1iv(this.addr,a),Ms(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Ss,a[e])}function yc(e){switch(e){case 5126:return ec;case 35664:return tc;case 35665:return nc;case 35666:return rc;case 35674:return ic;case 35675:return ac;case 35676:return oc;case 5124:case 35670:return sc;case 35667:case 35671:return cc;case 35668:case 35672:return lc;case 35669:case 35673:return uc;case 5125:return dc;case 36294:return fc;case 36295:return pc;case 36296:return mc;case 35678:case 36198:case 36298:case 36306:case 35682:return hc;case 35679:case 36299:case 36307:return gc;case 35680:case 36300:case 36308:case 36293:return _c;case 36289:case 36303:case 36311:case 36292:return vc}}var bc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=$s(t.type)}},xc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=yc(t.type)}},Sc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Cc=/(\w+)(\])?(\[|\.)?/g;function wc(e,t){e.seq.push(t),e.map[t.id]=t}function Tc(e,t,n){let r=e.name,i=r.length;for(Cc.lastIndex=0;;){let a=Cc.exec(r),o=Cc.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){wc(n,l===void 0?new bc(s,e,t):new xc(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Sc(s),wc(n,e)),n=e}}}var Ec=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Tc(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Dc(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Oc=37297,kc=0;function Ac(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var jc=new V;function Mc(e){en._getMatrix(jc,en.workingColorSpace,e);let t=`mat3( ${jc.elements.map(e=>e.toFixed(4))} )`;switch(en.getTransfer(e)){case at:return[t,`LinearTransferOETF`];case ot:return[t,`sRGBTransferOETF`];default:return I(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Nc(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Ac(e.getShaderSource(t),r)}return i}function Pc(e,t){let n=Mc(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var Fc={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Ic(e,t){let n=Fc[t];return n===void 0?(I(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Lc=new B;function Rc(){return en.getLuminanceCoefficients(Lc),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Lc.x.toFixed(4)}, ${Lc.y.toFixed(4)}, ${Lc.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function zc(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Hc).join(`
`)}function Bc(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Vc(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Hc(e){return e!==``}function Uc(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Wc(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Gc=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kc(e){return e.replace(Gc,Jc)}var qc=new Map;function Jc(e,t){let n=U[t];if(n===void 0){let e=qc.get(t);if(e!==void 0)n=U[e],I(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return Kc(n)}var Yc=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xc(e){return e.replace(Yc,Zc)}function Zc(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Qc(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var $c={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function el(e){return $c[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var tl={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function nl(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:tl[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var rl={302:`ENVMAP_MODE_REFRACTION`};function il(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:rl[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var al={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function ol(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:al[e.combine]||`ENVMAP_BLENDING_NONE`}function sl(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function cl(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=el(n),l=nl(n),u=il(n),d=ol(n),f=sl(n),p=zc(n),m=Bc(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Hc).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Hc).join(`
`),_.length>0&&(_+=`
`)):(g=[Qc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Hc).join(`
`),_=[Qc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:U.tonemapping_pars_fragment,n.toneMapping===0?``:Ic(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,U.colorspace_pars_fragment,Pc(`linearToOutputTexel`,n.outputColorSpace),Rc(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Hc).join(`
`)),o=Kc(o),o=Uc(o,n),o=Wc(o,n),s=Kc(s),s=Uc(s,n),s=Wc(s,n),o=Xc(o),s=Xc(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=Dc(i,i.VERTEX_SHADER,y),S=Dc(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Nc(i,x,`vertex`),n=Nc(i,S,`fragment`);L(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):I(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Ec(i,h),T=Vc(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,Oc)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=kc++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var ll=0,ul=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new dl(e),t.set(e,n)),n}},dl=class{constructor(e){this.id=ll++,this.code=e,this.usedTimes=0}};function fl(e){return e===1030||e===37490||e===36285}function pl(e,t,n,r,i,a){let o=new On,s=new ul,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&I(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=Po[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,A=t.id}let ee=e.getRenderTarget(),te=e.state.buffers.depth.getReversed(),j=h.isInstancedMesh===!0,ne=h.isBatchedMesh===!0,re=!!i.map,ie=!!i.matcap,ae=!!x,oe=!!i.aoMap,se=!!i.lightMap,ce=!!i.bumpMap&&i.wireframe===!1,M=!!i.normalMap,le=!!i.displacementMap,ue=!!i.emissiveMap,de=!!i.metalnessMap,fe=!!i.roughnessMap,pe=i.anisotropy>0,me=i.clearcoat>0,he=i.dispersion>0,ge=i.retroreflectivity>0,_e=i.iridescence>0,ve=i.sheen>0,ye=i.transmission>0,be=pe&&!!i.anisotropyMap,xe=me&&!!i.clearcoatMap,Se=me&&!!i.clearcoatNormalMap,Ce=me&&!!i.clearcoatRoughnessMap,we=_e&&!!i.iridescenceMap,Te=_e&&!!i.iridescenceThicknessMap,Ee=ve&&!!i.sheenColorMap,De=ve&&!!i.sheenRoughnessMap,Oe=!!i.specularMap,ke=!!i.specularColorMap,Ae=!!i.specularIntensityMap,je=ye&&!!i.transmissionMap,Me=ye&&!!i.thicknessMap,Ne=!!i.gradientMap,Pe=!!i.alphaMap,Fe=i.alphaTest>0,N=!!i.alphaHash,Ie=!!i.extensions,Le=0;i.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Le=e.toneMapping);let Re={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:ne,batchingColor:ne&&h._colorsTexture!==null,instancing:j,instancingColor:j&&h.instanceColor!==null,instancingMorph:j&&h.morphTexture!==null,outputColorSpace:ee===null?e.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:en.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:re,matcap:ie,envMap:ae,envMapMode:ae&&x.mapping,envMapCubeUVHeight:S,aoMap:oe,lightMap:se,bumpMap:ce,normalMap:M,displacementMap:le,emissiveMap:ue,normalMapObjectSpace:M&&i.normalMapType===1,normalMapTangentSpace:M&&i.normalMapType===0,packedNormalMap:M&&i.normalMapType===0&&fl(i.normalMap.format),metalnessMap:de,roughnessMap:fe,anisotropy:pe,anisotropyMap:be,clearcoat:me,clearcoatMap:xe,clearcoatNormalMap:Se,clearcoatRoughnessMap:Ce,dispersion:he,retroreflection:ge,iridescence:_e,iridescenceMap:we,iridescenceThicknessMap:Te,sheen:ve,sheenColorMap:Ee,sheenRoughnessMap:De,specularMap:Oe,specularColorMap:ke,specularIntensityMap:Ae,transmission:ye,transmissionMap:je,thicknessMap:Me,gradientMap:Ne,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Pe,alphaTest:Fe,alphaHash:N,combine:i.combine,mapUv:re&&m(i.map.channel),aoMapUv:oe&&m(i.aoMap.channel),lightMapUv:se&&m(i.lightMap.channel),bumpMapUv:ce&&m(i.bumpMap.channel),normalMapUv:M&&m(i.normalMap.channel),displacementMapUv:le&&m(i.displacementMap.channel),emissiveMapUv:ue&&m(i.emissiveMap.channel),metalnessMapUv:de&&m(i.metalnessMap.channel),roughnessMapUv:fe&&m(i.roughnessMap.channel),anisotropyMapUv:be&&m(i.anisotropyMap.channel),clearcoatMapUv:xe&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:Se&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:De&&m(i.sheenRoughnessMap.channel),specularMapUv:Oe&&m(i.specularMap.channel),specularColorMapUv:ke&&m(i.specularColorMap.channel),specularIntensityMapUv:Ae&&m(i.specularIntensityMap.channel),transmissionMapUv:je&&m(i.transmissionMap.channel),thicknessMapUv:Me&&m(i.thicknessMap.channel),alphaMapUv:Pe&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(M||pe),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(re||Pe),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&M===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:te,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Le,decodeVideoTexture:re&&i.map.isVideoTexture===!0&&en.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:ue&&i.emissiveMap.isVideoTexture===!0&&en.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Ie&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Ie&&i.extensions.multiDraw===!0||ne)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Re.vertexUv1s=c.has(1),Re.vertexUv2s=c.has(2),Re.vertexUv3s=c.has(3),c.clear(),Re}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=Po[t];n=fa.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new cl(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function ml(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function hl(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function gl(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function _l(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||hl),r.length>1&&r.sort(t||gl),i.length>1&&i.sort(t||gl)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function vl(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new _l,e.set(t,[i])):n>=r.length?(i=new _l,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function yl(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new B,color:new H};break;case`SpotLight`:n={position:new B,direction:new B,color:new H,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new B,color:new H,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new B,skyColor:new H,groundColor:new H};break;case`RectAreaLight`:n={color:new H,position:new B,halfWidth:new B,halfHeight:new B}}return e[t.id]=n,n}}}function bl(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new z};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new z};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new z,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var xl=0;function Sl(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Cl(e){let t=new yl,n=bl(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new B);let i=new B,a=new _n,o=new _n;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Sl);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=W.LTC_FLOAT_1,r.rectAreaLTC2=W.LTC_FLOAT_2):(r.rectAreaLTC1=W.LTC_HALF_1,r.rectAreaLTC2=W.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=xl++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function wl(e){let t=new Cl(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function Tl(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new wl(e),t.set(n,[a])):r>=i.length?(a=new wl(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var El=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Dl=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Ol=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],kl=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],Al=new _n,jl=new B,Ml=new B;function Nl(e,t,n){let r=new Ti,i=new z,a=new z,o=new fn,s=new ya,c=new ba,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new ha({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new z},radius:{value:4}},vertexShader:El,fragmentShader:Dl}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new Jr;m.setAttribute(`position`,new Nr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new vi(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;this.type===2&&(I(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){I(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let m=d.getFrameExtents();i.multiply(m),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/m.x),i.x=a.x*m.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/m.y),i.y=a.y*m.y,d.mapSize.y=a.y));let h=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=h,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){I(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new mn(i.x,i.y,{format:pe,type:j,minFilter:C,magFilter:C,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new Li(i.x,i.y,te),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=le,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=b,d.map.depthTexture.magFilter=b}else l.isPointLight?(d.map=new us(i.x),d.map.depthTexture=new Ri(i.x,ee)):(d.map=new mn(i.x,i.y),d.map.depthTexture=new Li(i.x,i.y,ee)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=le,this.type===1?(d.map.depthTexture.compareFunction=h?518:515,d.map.depthTexture.minFilter=C,d.map.depthTexture.magFilter=C):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=b,d.map.depthTexture.magFilter=b);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let g=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);for(let t=0;t<g;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),jl.setFromMatrixPosition(l.matrixWorld),e.position.copy(jl),Ml.copy(e.position),Ml.add(Ol[t]),e.up.copy(kl[t]),e.lookAt(Ml),e.updateMatrixWorld(),n.makeTranslation(-jl.x,-jl.y,-jl.z),Al.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(Al,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}r=d.getFrustum(t),x(n,s,i,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null?n.mapPass=new mn(i.x,i.y,{format:pe,type:j}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value.set(n.map.width,n.map.height),f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,S)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function x(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=y(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)x(c[e],i,a,o,s)}function S(e){e.target.removeEventListener(`dispose`,S);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Pl(e,t){function n(){let t=!1,n=new fn,r=null,i=new fn(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?de(e.DEPTH_TEST):fe(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=yt[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?de(e.STENCIL_TEST):fe(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new H(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,ee=null,te=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,ne=0,re=e.getParameter(e.VERSION);re.indexOf(`WebGL`)===-1?re.indexOf(`OpenGL ES`)!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),j=ne>=2):(ne=parseFloat(/^WebGL (\d)/.exec(re)[1]),j=ne>=1);let ie=null,ae={},oe=e.getParameter(e.SCISSOR_BOX),se=e.getParameter(e.VIEWPORT),ce=new fn().fromArray(oe),M=new fn().fromArray(se);function le(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ue={};ue[e.TEXTURE_2D]=le(e.TEXTURE_2D,e.TEXTURE_2D,1),ue[e.TEXTURE_CUBE_MAP]=le(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[e.TEXTURE_2D_ARRAY]=le(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ue[e.TEXTURE_3D]=le(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),de(e.DEPTH_TEST),o.setFunc(3),be(!1),xe(1),de(e.CULL_FACE),ve(0);function de(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function fe(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function pe(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function me(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function he(t){return h!==t&&(e.useProgram(t),h=t,!0)}let ge={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};ge[103]=e.MIN,ge[104]=e.MAX;let _e={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ve(t,n,r,i,a,o,s,c,l,u){if(t===0){g===!0&&(fe(e.BLEND),g=!1);return}if(g===!1&&(de(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:L(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:L(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:L(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:L(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}return}a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(ge[n],ge[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(_e[r],_e[i],_e[o],_e[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function ye(t,n){t.side===2?fe(e.CULL_FACE):de(e.CULL_FACE);let r=t.side===1;n&&(r=!r),be(r),t.blending===1&&t.transparent===!1?ve(0):ve(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),Ce(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?de(e.SAMPLE_ALPHA_TO_COVERAGE):fe(e.SAMPLE_ALPHA_TO_COVERAGE)}function be(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function xe(t){t===0?fe(e.CULL_FACE):(de(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function Se(t){t!==k&&(j&&e.lineWidth(t),k=t)}function Ce(t,n,r){t?(de(e.POLYGON_OFFSET_FILL),(A!==n||ee!==r)&&(A=n,ee=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):fe(e.POLYGON_OFFSET_FILL)}function we(t){t?de(e.SCISSOR_TEST):fe(e.SCISSOR_TEST)}function Te(t){t===void 0&&(t=e.TEXTURE0+te-1),ie!==t&&(e.activeTexture(t),ie=t)}function Ee(t,n,r){r===void 0&&(r=ie===null?e.TEXTURE0+te-1:ie);let i=ae[r];i===void 0&&(i={type:void 0,texture:void 0},ae[r]=i),(i.type!==t||i.texture!==n)&&(ie!==r&&(e.activeTexture(r),ie=r),e.bindTexture(t,n||ue[t]),i.type=t,i.texture=n)}function De(){let t=ae[ie];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Oe(){try{e.compressedTexImage2D(...arguments)}catch(e){L(`WebGLState:`,e)}}function ke(){try{e.compressedTexImage3D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Ae(){try{e.texSubImage2D(...arguments)}catch(e){L(`WebGLState:`,e)}}function je(){try{e.texSubImage3D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Me(){try{e.compressedTexSubImage2D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Ne(){try{e.compressedTexSubImage3D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Pe(){try{e.texStorage2D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Fe(){try{e.texStorage3D(...arguments)}catch(e){L(`WebGLState:`,e)}}function N(){try{e.texImage2D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Ie(){try{e.texImage3D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Le(t){return d[t]===void 0?e.getParameter(t):d[t]}function Re(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function P(t){ce.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ce.copy(t))}function ze(t){M.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),M.copy(t))}function F(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Be(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Ve(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},ie=null,ae={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new H(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,ee=null,ce.set(0,0,e.canvas.width,e.canvas.height),M.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:de,disable:fe,bindFramebuffer:pe,drawBuffers:me,useProgram:he,setBlending:ve,setMaterial:ye,setFlipSided:be,setCullFace:xe,setLineWidth:Se,setPolygonOffset:Ce,setScissorTest:we,activeTexture:Te,bindTexture:Ee,unbindTexture:De,compressedTexImage2D:Oe,compressedTexImage3D:ke,texImage2D:N,texImage3D:Ie,pixelStorei:Re,getParameter:Le,updateUBOMapping:F,uniformBlockBinding:Be,texStorage2D:Pe,texStorage3D:Fe,texSubImage2D:Ae,texSubImage3D:je,compressedTexSubImage2D:Me,compressedTexSubImage3D:Ne,scissor:P,viewport:ze,reset:Ve}}function Fl(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new z,u=new WeakMap,d=new Set,f,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function h(e,t){return m?new OffscreenCanvas(e,t):ft(`canvas`)}function g(e,t,n){let r=1,i=Le(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=h(n,a));let o=t?h(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),I(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&I(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function E(e){return e.generateMipmaps}function D(t){e.generateMipmap(t)}function O(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function k(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];I(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||I(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?at:en.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function A(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,I(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function ee(e,t){return E(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function te(e){let t=e.target;t.removeEventListener(`dispose`,te),ne(t),t.isVideoTexture&&u.delete(t),t.isHTMLTexture&&d.delete(t)}function j(e){let t=e.target;t.removeEventListener(`dispose`,j),ie(t)}function ne(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&re(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}function re(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=p.get(i);delete a[n.__cacheKey],o.memory.textures--}function ie(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let ae=0;function oe(){ae=0}function se(){return ae}function ce(e){ae=e}function M(){let e=ae;return e>=i.maxTextures&&I(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),ae+=1,e}function le(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function de(t,i){let a=r.get(t);if(t.isVideoTexture&&N(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)I(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)I(`WebGLRenderer: Texture marked for update but image is incomplete`);else{Se(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function fe(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){Se(a,t,i);return}t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i)}function pe(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){Se(a,t,i);return}n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function me(t,i){let a=r.get(t);if(t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version){Ce(a,t,i);return}n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let he={[_]:e.REPEAT,[v]:e.CLAMP_TO_EDGE,[y]:e.MIRRORED_REPEAT},ge={[b]:e.NEAREST,[x]:e.NEAREST_MIPMAP_NEAREST,[S]:e.NEAREST_MIPMAP_LINEAR,[C]:e.LINEAR,[w]:e.LINEAR_MIPMAP_NEAREST,[T]:e.LINEAR_MIPMAP_LINEAR},_e={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function ve(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&I(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,he[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,he[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,he[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,ge[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,ge[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,_e[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function ye(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,te));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let s=le(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&re(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function be(e,t,n){return Math.floor(Math.floor(e/n)/t)}function xe(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=be(n.start,r.width,4),c=be(t.start,r.width,4);n.start<=i+1&&a===c&&be(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function Se(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=ye(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=en.getPrimaries(en.workingColorSpace),r=o.colorSpace===``?null:en.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=g(o.image,!1,i.maxTextureSize);t=Ie(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=k(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);ve(c,o);let h,_=o.mipmaps,v=o.isVideoTexture!==!0,y=f.__version===void 0||l===!0,b=u.dataReady,x=ee(o,t);if(o.isDepthTexture)m=A(o.format===ue,o.type),y&&(v?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(_.length>0){v&&y&&n.texStorage2D(e.TEXTURE_2D,x,m,_[0].width,_[0].height);for(let t=0,i=_.length;t<i;t++)h=_[t],v?b&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else v?(y&&n.texStorage2D(e.TEXTURE_2D,x,m,t.width,t.height),b&&xe(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){v&&y&&n.texStorage3D(e.TEXTURE_2D_ARRAY,x,m,_[0].width,_[0].height,t.depth);for(let i=0,a=_.length;i<a;i++)if(h=_[i],o.format!==1023){if(r!==null){if(v){if(b){if(o.layerUpdates.size>0){let t=Ao(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0)}else I(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else v?b&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{v&&y&&n.texStorage2D(e.TEXTURE_2D,x,m,_[0].width,_[0].height);for(let t=0,i=_.length;t<i;t++)h=_[t],o.format===1023?v?b&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?I(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):v?b&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(o.isDataArrayTexture){if(v){if(y&&n.texStorage3D(e.TEXTURE_2D_ARRAY,x,m,t.width,t.height,t.depth),b){if(o.layerUpdates.size>0){let i=Ao(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)v?(y&&n.texStorage3D(e.TEXTURE_3D,x,m,t.width,t.height,t.depth),b&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(y){if(v)n.texStorage2D(e.TEXTURE_2D,x,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<x;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),d.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of d)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(_.length>0){if(v&&y){let t=Le(_[0]);n.texStorage2D(e.TEXTURE_2D,x,m,t.width,t.height)}for(let t=0,i=_.length;t<i;t++)h=_[t],v?b&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(v){if(y){let r=Le(t);n.texStorage2D(e.TEXTURE_2D,x,m,r.width,r.height)}b&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);E(o)&&D(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function Ce(t,o,s){if(o.image.length!==6)return;let c=ye(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=en.getPrimaries(en.workingColorSpace),r=o.colorSpace===``?null:en.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=g(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=Ie(o,m[e]);let h=m[0],_=a.convert(o.format,o.colorSpace),v=a.convert(o.type),y=k(o.internalFormat,_,v,o.normalized,o.colorSpace),b=o.isVideoTexture!==!0,x=u.__version===void 0||c===!0,S=l.dataReady,C=ee(o,h);ve(e.TEXTURE_CUBE_MAP,o);let w;if(f){b&&x&&n.texStorage2D(e.TEXTURE_CUBE_MAP,C,y,h.width,h.height);for(let t=0;t<6;t++){w=m[t].mipmaps;for(let r=0;r<w.length;r++){let i=w[r];o.format===1023?b?S&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,_,v,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,y,i.width,i.height,0,_,v,i.data):_===null?I(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):b?S&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,_,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,y,i.width,i.height,0,i.data)}}}else{if(w=o.mipmaps,b&&x){w.length>0&&C++;let t=Le(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,C,y,t.width,t.height)}for(let t=0;t<6;t++)if(p){b?S&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,_,v,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,y,m[t].width,m[t].height,0,_,v,m[t].data);for(let r=0;r<w.length;r++){let i=w[r].image[t].image;b?S&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,_,v,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,y,i.width,i.height,0,_,v,i.data)}}else{b?S&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,_,v,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,y,_,v,m[t]);for(let r=0;r<w.length;r++){let i=w[r];b?S&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,_,v,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,y,_,v,i.image[t])}}}E(o)&&D(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function we(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=k(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),Fe(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,Pe(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Te(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=A(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Fe(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Pe(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Pe(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=k(o.internalFormat,c,l,o.normalized,o.colorSpace);Fe(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Pe(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Pe(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Ee(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,(!l.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,te)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),ve(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else de(i.depthTexture,0);let u=l.__webglTexture,d=Pe(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)Fe(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)Fe(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function De(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)Ee(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?Ee(i.__webglFramebuffer[0],t,0):Ee(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),Te(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),Te(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Oe(t,n,i){let a=r.get(t);n!==void 0&&we(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&De(t)}function ke(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,j);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&Fe(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=k(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=Pe(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),Te(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),ve(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)we(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else we(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);E(i)&&D(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),ve(c,a),we(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),E(a)&&D(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),ve(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)we(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else we(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);E(i)&&D(r),n.unbindTexture()}t.depthBuffer&&De(t)}function Ae(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(E(a)){let t=O(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),D(t),n.unbindTexture()}}}let je=[],Me=[];function Ne(t){if(t.samples>0){if(Fe(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(je.length=0,Me.length=0,je.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(je.push(l),Me.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Me)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,je))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Pe(e){return Math.min(i.maxSamples,e.samples)}function Fe(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function N(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function Ie(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(en.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&I(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):L(`WebGLTextures: Unsupported texture color space:`,n)),t}function Le(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=M,this.resetTextureUnits=oe,this.getTextureUnits=se,this.setTextureUnits=ce,this.setTexture2D=de,this.setTexture2DArray=fe,this.setTexture3D=pe,this.setTextureCube=me,this.rebindTextures=Oe,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=Ae,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=we,this.useMultisampledRTT=Fe,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Il(e,t){function n(n,r=``){let i,a=en.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Ll=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Rl=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,zl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new zi(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ha({vertexShader:Ll,fragmentShader:Rl,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new vi(new ra(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Bl=class extends bt{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new zl,g={},_=t.getContextAttributes(),v=null,y=null,b=[],x=[],S=new z,C=null,w=null,T=new eo;T.viewport=new fn;let D=new eo;D.viewport=new fn;let O=[T,D],k=new so,A=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new qn,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new qn,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new qn,b[e]=t),t.getHandSpace()};function j(e){let t=x.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ne(){r.removeEventListener(`select`,j),r.removeEventListener(`selectstart`,j),r.removeEventListener(`selectend`,j),r.removeEventListener(`squeeze`,j),r.removeEventListener(`squeezestart`,j),r.removeEventListener(`squeezeend`,j),r.removeEventListener(`end`,ne),r.removeEventListener(`inputsourceschange`,re);for(let e=0;e<b.length;e++){let t=x[e];t!==null&&(x[e]=null,b[e].disconnect(t))}A=null,te=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,me.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),w!==null){let e=w.camera;e.fov=w.fov,e.zoom=w.zoom,e.updateProjectionMatrix(),w=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&I(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&I(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,j),r.addEventListener(`selectstart`,j),r.addEventListener(`selectend`,j),r.addEventListener(`squeeze`,j),r.addEventListener(`squeezestart`,j),r.addEventListener(`squeezeend`,j),r.addEventListener(`end`,ne),r.addEventListener(`inputsourceschange`,re),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?ue:le,a=_.stencil?ie:ee);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new mn(d.textureWidth,d.textureHeight,{format:M,type:E,depthTexture:new Li(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new mn(f.framebufferWidth,f.framebufferHeight,{format:M,type:E,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),me.setContext(r),me.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function re(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=x.indexOf(n);r>=0&&(x[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=x.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++)if(e>=x.length){x.push(n),r=e;break}else if(x[e]===null){x[e]=n,r=e;break}if(r===-1)break}let i=b[r];i&&i.connect(n)}}let ae=new B,oe=new B;function se(e,t,n){ae.setFromMatrixPosition(t.matrixWorld),oe.setFromMatrixPosition(n.matrixWorld);let r=ae.distanceTo(oe),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function ce(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),k.near=D.near=T.near=t,k.far=D.far=T.far=n,(A!==k.near||te!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),A=k.near,te=k.far),k.layers.mask=e.layers.mask|6,T.layers.mask=k.layers.mask&-5,D.layers.mask=k.layers.mask&-3;let i=e.parent,a=k.cameras;ce(k,i);for(let e=0;e<a.length;e++)ce(a[e],i);a.length===2?se(k,T,D):k.projectionMatrix.copy(T.projectionMatrix),w===null&&e.isPerspectiveCamera&&(w={camera:e,fov:e.fov,zoom:e.zoom}),de(e,k,i)};function de(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=wt*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(k)},this.getCameraTexture=function(e){return g[e]};let fe=null;function pe(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==k.cameras.length&&(k.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=O[n];o===void 0&&(o=new eo,o.layers.enable(n),o.viewport=new fn,O[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(k.matrix.copy(o.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),i===!0&&k.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new zi,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<b.length;e++){let t=x[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}fe&&fe(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let me=new Mo;me.setAnimationLoop(pe),this.setAnimationLoop=function(e){fe=e},this.dispose=function(){}}},Vl=new _n,Hl=new V;Hl.set(-1,0,0,0,1,0,0,0,1);function Ul(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,da(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Vl.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Hl),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Wl(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return L(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?I(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):I(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var Gl=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Kl=null;function ql(){return Kl===null&&(Kl=new xi(Gl,16,16,pe,j),Kl.name=`DFG_LUT`,Kl.minFilter=C,Kl.magFilter=C,Kl.wrapS=v,Kl.wrapT=v,Kl.generateMipmaps=!1,Kl.needsUpdate=!0),Kl}var Jl=class{constructor(e={}){let{canvas:t=pt(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=E}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([he,me,fe]),g=new Set([E,ee,k,ie,ne,re]),_=new Uint32Array(4),v=new Int32Array(4),y=new B,b=null,x=null,S=[],C=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let D=this,O=!1,A=null,te=null,ae=null,oe=null;this._outputColorSpace=rt;let se=0,ce=0,M=null,le=-1,ue=null,de=new fn,pe=new fn,ge=null,_e=new H(0),ve=0,ye=t.width,be=t.height,xe=1,Se=null,Ce=null,we=new fn(0,0,ye,be),Te=new fn(0,0,ye,be),Ee=!1,De=new Ti,Oe=!1,ke=!1,Ae=new _n,je=new B,Me=new fn,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Pe=!1;function Fe(){return M===null?xe:1}let N=n;function Ie(e,n){return t.getContext(e,n)}let Le,Re,P,ze,F,Be,Ve,He,Ue,We,Ge,Ke,qe,Je,Ye,Xe,Ze,Qe,$e,et,tt,nt,it;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,st,!1),t.addEventListener(`webglcontextrestored`,ct,!1),t.addEventListener(`webglcontextcreationerror`,ut,!1),N===null){let t=`webgl2`;if(N=Ie(t,e),N===null)throw Ie(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}at()}catch(e){throw t.removeEventListener(`webglcontextlost`,st,!1),t.removeEventListener(`webglcontextrestored`,ct,!1),t.removeEventListener(`webglcontextcreationerror`,ut,!1),L(`WebGLRenderer: `+e.message),e}function at(){Le=new fs(N),Le.init(),tt=new Il(N,Le),Re=new Vo(N,Le,e,tt),P=new Pl(N,Le),Re.reversedDepthBuffer&&d&&P.buffers.depth.setReversed(!0),te=N.createFramebuffer(),ae=N.createFramebuffer(),oe=N.createFramebuffer(),ze=new hs(N),F=new ml,Be=new Fl(N,Le,P,F,Re,tt,ze),Ve=new ds(D),He=new No(N),nt=new zo(N,He),Ue=new ps(N,He,ze,nt),We=new _s(N,Ue,He,nt,ze),Qe=new gs(N,Re,Be),Ye=new Ho(F),Ge=new pl(D,Ve,Le,Re,nt,Ye),Ke=new Ul(D,F),qe=new vl,Je=new Tl(Le),Ze=new Ro(D,Ve,P,We,p,s),Xe=new Nl(D,We,Re),it=new Wl(N,ze,Re,P),$e=new Bo(N,Le,ze),et=new ms(N,Le,ze),ze.programs=Ge.programs,D.capabilities=Re,D.extensions=Le,D.properties=F,D.renderLists=qe,D.shadowMap=Xe,D.state=P,D.info=ze}m!==1009&&(w=new ys(m,t.width,t.height,o,r,i));let ot=new Bl(D,N);this.xr=ot,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let e=Le.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Le.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return xe},this.setPixelRatio=function(e){e!==void 0&&(xe=e,this.setSize(ye,be,!1))},this.getSize=function(e){return e.set(ye,be)},this.setSize=function(e,n,r=!0){if(ot.isPresenting){I(`WebGLRenderer: Can't change size while VR device is presenting.`);return}ye=e,be=n,t.width=Math.floor(e*xe),t.height=Math.floor(n*xe),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(ye*xe,be*xe).floor()},this.setDrawingBufferSize=function(e,n,r){ye=e,be=n,xe=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009){L(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){I(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}w.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(de)},this.getViewport=function(e){return e.copy(we)},this.setViewport=function(e,t,n,r){e.isVector4?we.set(e.x,e.y,e.z,e.w):we.set(e,t,n,r),P.viewport(de.copy(we).multiplyScalar(xe).round())},this.getScissor=function(e){return e.copy(Te)},this.setScissor=function(e,t,n,r){e.isVector4?Te.set(e.x,e.y,e.z,e.w):Te.set(e,t,n,r),P.scissor(pe.copy(Te).multiplyScalar(xe).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(e){P.setScissorTest(Ee=e)},this.setOpaqueSort=function(e){Se=e},this.setTransparentSort=function(e){Ce=e},this.getClearColor=function(e){return e.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor(...arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(M!==null){let t=M.texture.format;e=h.has(t)}if(e){let e=M.texture.type,t=g.has(e),n=Ze.getClearColor(),r=Ze.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,N.clearBufferuiv(N.COLOR,0,_)):(v[0]=i,v[1]=a,v[2]=o,v[3]=r,N.clearBufferiv(N.COLOR,0,v))}else r|=N.COLOR_BUFFER_BIT}t&&(r|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&N.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),A=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,st,!1),t.removeEventListener(`webglcontextrestored`,ct,!1),t.removeEventListener(`webglcontextcreationerror`,ut,!1),Ze.dispose(),qe.dispose(),Je.dispose(),F.dispose(),Ve.dispose(),We.dispose(),nt.dispose(),it.dispose(),Ge.dispose(),ot.dispose(),ot.removeEventListener(`sessionstart`,bt),ot.removeEventListener(`sessionend`,xt),St.stop()};function st(e){e.preventDefault(),ht(`WebGLRenderer: Context Lost.`),O=!0}function ct(){ht(`WebGLRenderer: Context Restored.`),O=!1;let e=ze.autoReset,t=Xe.enabled,n=Xe.autoUpdate,r=Xe.needsUpdate,i=Xe.type;at(),ze.autoReset=e,Xe.enabled=t,Xe.autoUpdate=n,Xe.needsUpdate=r,Xe.type=i}function ut(e){L(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function dt(e){let t=e.target;t.removeEventListener(`dispose`,dt),ft(t)}function ft(e){mt(e),F.remove(e)}function mt(e){let t=F.get(e).programs;t!==void 0&&(t.forEach(function(e){Ge.releaseProgram(e)}),e.isShaderMaterial&&Ge.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Ne);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=jt(e,t,n,r,i);P.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ue.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;nt.setup(i,r,s,n,c);let h,g=$e;if(c!==null&&(h=He.get(c),g=et,g.setIndex(h)),i.isMesh)r.wireframe===!0?(P.setLineWidth(r.wireframeLinewidth*Fe()),g.setMode(N.LINES)):g.setMode(N.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),P.setLineWidth(e*Fe()),i.isLineSegments?g.setMode(N.LINES):i.isLineLoop?g.setMode(N.LINE_LOOP):g.setMode(N.LINE_STRIP)}else i.isPoints?g.setMode(N.POINTS):i.isSprite&&g.setMode(N.TRIANGLES);if(i.isBatchedMesh){if(Le.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?He.get(c).bytesPerElement:1,o=F.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(N,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function gt(e,t,n,r){A!==null&&e.isNodeMaterial&&A.setObject(r,e),Oe===!0&&Ye.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Dt(e,t,r),e.side=0,e.needsUpdate=!0,Dt(e,t,r),e.side=2):Dt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),A!==null&&A.renderStart(e,t,n),x=Je.get(n),x.init(t),C.push(x),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),x.setupLights(),A!==null&&A.updateLights(x.state.lightsArray),ke=this.localClippingEnabled,Oe=Ye.init(this.clippingPlanes,ke),Oe===!0&&Ye.setGlobalState(this.clippingPlanes,t),A!==null&&Xe.render(x.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];gt(o,n,t,e),r.add(o)}else gt(i,n,t,e),r.add(i)}}),x=C.pop(),A!==null&&A.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){let t=F.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}Le.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let _t=null;function yt(e){_t&&_t(e)}function bt(){St.stop()}function xt(){St.start()}let St=new Mo;St.setAnimationLoop(yt),typeof self<`u`&&St.setContext(self),this.setAnimationLoop=function(e){_t=e,ot.setAnimationLoop(e),e===null?St.stop():St.start()},ot.addEventListener(`sessionstart`,bt),ot.addEventListener(`sessionend`,xt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){L(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(O===!0)return;A!==null&&A.renderStart(e,t);let n=ot.enabled===!0&&ot.isPresenting===!0,r=w!==null&&(M===null||n)&&w.begin(D,M);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(t),t=ot.getCamera()),e.isScene===!0&&e.onBeforeRender(D,e,t,M),x=Je.get(e,C.length),x.init(t),x.state.textureUnits=Be.getTextureUnits(),C.push(x),Ae.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),De.setFromProjectionMatrix(Ae,lt,t.reversedDepth),ke=this.localClippingEnabled,Oe=Ye.init(this.clippingPlanes,ke),b=qe.get(e,S.length),b.init(),S.push(b),ot.enabled===!0&&ot.isPresenting===!0){let e=D.xr.getDepthSensingMesh();e!==null&&Ct(e,t,-1/0,D.sortObjects)}Ct(e,t,0,D.sortObjects),b.finish(),A!==null&&A.updateLights(x.state.lightsArray),D.sortObjects===!0&&b.sort(Se,Ce),Pe=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,Pe&&Ze.addToRenderList(b,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Oe===!0&&Ye.beginShadows();let i=x.state.shadowsArray;if(Xe.render(i,e,t),Oe===!0&&Ye.endShadows(),(r&&w.hasRenderPass())===!1){let n=b.opaque,r=b.transmissive;if(x.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];Tt(n,r,e,a)}Pe&&Ze.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];wt(b,e,n,n.viewport)}}else r.length>0&&Tt(n,r,e,t),Pe&&Ze.render(e),wt(b,e,t)}M!==null&&ce===0&&(Be.updateMultisampleRenderTarget(M),Be.updateRenderTargetMipmap(M)),r&&w.end(D),e.isScene===!0&&e.onAfterRender(D,e,t),nt.resetDefaultState(),le=-1,ue=null,C.pop(),C.length>0?(x=C[C.length-1],Be.setTextureUnits(x.state.textureUnits),Oe===!0&&Ye.setGlobalState(D.clippingPlanes,x.state.camera)):x=null,S.pop(),b=S.length>0?S[S.length-1]:null,A!==null&&A.renderEnd()};function Ct(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)x.pushLightProbeGrid(e);else if(e.isLight)x.pushLight(e),e.castShadow&&x.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(De)){r&&Me.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Ae);let i=We.update(e),a=e.material;a.visible&&b.push(e,i,a,n,Me.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(De))){let i=We.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Me.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Me.copy(e.boundingSphere.center)),Me.applyMatrix4(e.matrixWorld).applyMatrix4(Ae)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&b.push(e,i,c,n,Me.z,s,t)}}else a.visible&&b.push(e,i,a,n,Me.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)Ct(i[e],t,n,r)}function wt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;x.setupLightsView(n),Oe===!0&&Ye.setGlobalState(D.clippingPlanes,n),r&&P.viewport(de.copy(r)),i.length>0&&R(i,t,n),a.length>0&&R(a,t,n),o.length>0&&R(o,t,n),P.buffers.depth.setTest(!0),P.buffers.depth.setMask(!0),P.buffers.color.setMask(!0),P.setPolygonOffset(!1)}function Tt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[r.id]===void 0){let e=Le.has(`EXT_color_buffer_half_float`)||Le.has(`EXT_color_buffer_float`);x.state.transmissionRenderTarget[r.id]=new mn(1,1,{generateMipmaps:!0,type:e?j:E,minFilter:T,samples:Math.max(4,Re.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:en.workingColorSpace})}let a=x.state.transmissionRenderTarget[r.id],o=r.viewport||de;a.setSize(o.z*D.transmissionResolutionScale,o.w*D.transmissionResolutionScale);let s=D.getRenderTarget(),c=D.getActiveCubeFace(),l=D.getActiveMipmapLevel();D.setRenderTarget(a),D.getClearColor(_e),ve=D.getClearAlpha(),ve<1&&D.setClearColor(16777215,.5),D.clear(),Pe&&Ze.render(n);let u=D.toneMapping;D.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),x.setupLightsView(r),Oe===!0&&Ye.setGlobalState(D.clippingPlanes,r),R(e,n,r),Be.updateMultisampleRenderTarget(a),Be.updateRenderTargetMipmap(a),Le.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,Et(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Be.updateMultisampleRenderTarget(a),Be.updateRenderTargetMipmap(a))}D.setRenderTarget(s,c,l),D.setClearColor(_e,ve),d!==void 0&&(r.viewport=d),D.toneMapping=u}function R(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&Et(o,t,n,s,l,c)}}function Et(e,t,n,r,i,a){A!==null&&i.isNodeMaterial&&A.setObject(e,i),e.onBeforeRender(D,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(D,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,D.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,D.renderBufferDirect(n,t,r,i,e,a),i.side=2):D.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(D,t,n,r,i,a)}function Dt(e,t,n){t.isScene!==!0&&(t=Ne);let r=F.get(e),i=x.state.lights,a=x.state.shadowsArray,o=i.state.version,s=Ge.getParameters(e,i.state,a,t,n,x.state.lightProbeGridArray),c=Ge.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Ve.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,dt),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return kt(e,s),d}else s.uniforms=Ge.getUniforms(e),A!==null&&e.isNodeMaterial&&A.build(e,n,s),e.onBeforeCompile(s,D),d=Ge.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Ye.uniform),kt(e,s),r.needsLights=Nt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=x.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function Ot(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Ec.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function kt(e,t){let n=F.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function At(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];y.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(y))return n}return null}function jt(e,t,n,r,i){t.isScene!==!0&&(t=Ne),Be.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=M===null?D.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:en.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Ve.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(h=D.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=F.get(r),y=x.state.lights;if(Oe===!0&&(ke===!0||e!==ue)){let t=e===ue&&r.id===le;Ye.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Ye.numPlanes||v.numIntersection!==Ye.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=x.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;b===!0&&(S=Dt(r,t,i),A&&r.isNodeMaterial&&A.onUpdateProgram(r,S,v));let C=!1,w=!1,T=!1,E=S.getUniforms(),O=v.uniforms;if(P.useProgram(S.program)&&(C=!0,w=!0,T=!0),r.id!==le&&(le=r.id,w=!0),v.needsLights){let e=At(x.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,w=!0)}if(C||ue!==e){P.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),E.setValue(N,`projectionMatrix`,e.projectionMatrix),E.setValue(N,`viewMatrix`,e.matrixWorldInverse);let t=E.map.cameraPosition;t!==void 0&&t.setValue(N,je.setFromMatrixPosition(e.matrixWorld)),Re.logarithmicDepthBuffer&&E.setValue(N,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&E.setValue(N,`isOrthographic`,e.isOrthographicCamera===!0),ue!==e&&(ue=e,w=!0,T=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&E.setValue(N,`sunShadowMap`,y.state.sunShadowMap,Be),y.state.directionalShadowMap.length>0&&E.setValue(N,`directionalShadowMap`,y.state.directionalShadowMap,Be),y.state.spotShadowMap.length>0&&E.setValue(N,`spotShadowMap`,y.state.spotShadowMap,Be),y.state.pointShadowMap.length>0&&E.setValue(N,`pointShadowMap`,y.state.pointShadowMap,Be)),i.isSkinnedMesh){E.setOptional(N,i,`bindMatrix`),E.setOptional(N,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),E.setValue(N,`boneTexture`,e.boneTexture,Be))}i.isBatchedMesh&&(E.setOptional(N,i,`batchingTexture`),E.setValue(N,`batchingTexture`,i._matricesTexture,Be),E.setOptional(N,i,`batchingIdTexture`),E.setValue(N,`batchingIdTexture`,i._indirectTexture,Be),E.setOptional(N,i,`batchingColorTexture`),i._colorsTexture!==null&&E.setValue(N,`batchingColorTexture`,i._colorsTexture,Be));let k=n.morphAttributes;if((k.position!==void 0||k.normal!==void 0||k.color!==void 0)&&Qe.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,E.setValue(N,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(O.envMapIntensity.value=t.environmentIntensity),O.dfgLUT!==void 0&&(O.dfgLUT.value=ql()),w){if(E.setValue(N,`toneMappingExposure`,D.toneMappingExposure),v.needsLights&&Mt(O,T),a&&r.fog===!0&&Ke.refreshFogUniforms(O,a),Ke.refreshMaterialUniforms(O,r,xe,be,x.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;O.probesSH.value=e.texture,O.probesMin.value.copy(e.boundingBox.min),O.probesMax.value.copy(e.boundingBox.max),O.probesResolution.value.copy(e.resolution)}Ec.upload(N,Ot(v),O,Be)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Ec.upload(N,Ot(v),O,Be),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&E.setValue(N,`center`,i.center),E.setValue(N,`modelViewMatrix`,i.modelViewMatrix),E.setValue(N,`normalMatrix`,i.normalMatrix),E.setValue(N,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];it.update(n,S),it.bind(n,S)}}return S}function Mt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Nt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return se},this.getActiveMipmapLevel=function(){return ce},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(e,t,n){let r=F.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),F.get(e.texture).__webglTexture=t,F.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=F.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){M=e,se=t,ce=n;let r=null,i=!1,a=!1;if(e){let o=F.get(e);if(o.__useDefaultFramebuffer!==void 0){P.bindFramebuffer(N.FRAMEBUFFER,o.__webglFramebuffer),de.copy(e.viewport),pe.copy(e.scissor),ge=e.scissorTest,P.viewport(de),P.scissor(pe),P.setScissorTest(ge),le=-1;return}if(o.__webglFramebuffer===void 0)Be.setupRenderTarget(e);else if(o.__hasExternalTextures)Be.rebindTextures(e,F.get(e.texture).__webglTexture,F.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&F.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);Be.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=F.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Be.useMultisampledRTT(e)===!1?F.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,de.copy(e.viewport),pe.copy(e.scissor),ge=e.scissorTest}else de.copy(we).multiplyScalar(xe).floor(),pe.copy(Te).multiplyScalar(xe).floor(),ge=Ee;if(n!==0&&(r=te),P.bindFramebuffer(N.FRAMEBUFFER,r)&&P.drawBuffers(e,r),P.viewport(de),P.scissor(pe),P.setScissorTest(ge),i){let r=F.get(e.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=F.get(e.textures[t]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=F.get(e.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,t.__webglTexture,n)}le=-1};function Pt(e){let t=F.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Re.textureFormatReadable(e.format),t.__typeReadable=Re.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){L(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=F.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){P.bindFramebuffer(N.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+s);let u=Pt(o);if(u.__formatReadable===!1){L(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){L(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&N.readPixels(t,n,r,i,tt.convert(c),tt.convert(l),a)}finally{let e=M===null?null:F.get(M).__webglFramebuffer;P.bindFramebuffer(N.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=F.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){P.bindFramebuffer(N.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+s);let d=Pt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,f),N.bufferData(N.PIXEL_PACK_BUFFER,a.byteLength,N.STREAM_READ),N.readPixels(t,n,r,i,tt.convert(l),tt.convert(u),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let p=M===null?null:F.get(M).__webglFramebuffer;P.bindFramebuffer(N.FRAMEBUFFER,p);let m=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await vt(N,m,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,f),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,a),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(f),N.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Be.setTexture2D(e,0),N.copyTexSubImage2D(N.TEXTURE_2D,n,0,0,o,s,i,a),P.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=tt.convert(t.format),_=tt.convert(t.type),v;t.isData3DTexture?(Be.setTexture3D(t,0),v=N.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Be.setTexture2DArray(t,0),v=N.TEXTURE_2D_ARRAY):(Be.setTexture2D(t,0),v=N.TEXTURE_2D),P.activeTexture(N.TEXTURE0),P.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,t.flipY),P.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),P.pixelStorei(N.UNPACK_ALIGNMENT,t.unpackAlignment);let y=P.getParameter(N.UNPACK_ROW_LENGTH),b=P.getParameter(N.UNPACK_IMAGE_HEIGHT),x=P.getParameter(N.UNPACK_SKIP_PIXELS),S=P.getParameter(N.UNPACK_SKIP_ROWS),C=P.getParameter(N.UNPACK_SKIP_IMAGES);P.pixelStorei(N.UNPACK_ROW_LENGTH,h.width),P.pixelStorei(N.UNPACK_IMAGE_HEIGHT,h.height),P.pixelStorei(N.UNPACK_SKIP_PIXELS,l),P.pixelStorei(N.UNPACK_SKIP_ROWS,u),P.pixelStorei(N.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=F.get(e),r=F.get(t),h=F.get(n.__renderTarget),g=F.get(r.__renderTarget);P.bindFramebuffer(N.READ_FRAMEBUFFER,h.__webglFramebuffer),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,F.get(e).__webglTexture,i,d+n),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,F.get(t).__webglTexture,a,m+n)),N.blitFramebuffer(l,u,o,s,f,p,o,s,N.DEPTH_BUFFER_BIT,N.NEAREST);P.bindFramebuffer(N.READ_FRAMEBUFFER,null),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||F.has(e)){let n=F.get(e),r=F.get(t);P.bindFramebuffer(N.READ_FRAMEBUFFER,ae),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,oe);for(let e=0;e<c;e++)w?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,n.__webglTexture,i),T?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,r.__webglTexture,a),i===0?T?N.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):N.copyTexSubImage2D(v,a,f,p,l,u,o,s):N.blitFramebuffer(l,u,o,s,f,p,o,s,N.COLOR_BUFFER_BIT,N.NEAREST);P.bindFramebuffer(N.READ_FRAMEBUFFER,null),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?N.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?N.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):N.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):N.texSubImage2D(N.TEXTURE_2D,a,f,p,o,s,g,_,h);P.pixelStorei(N.UNPACK_ROW_LENGTH,y),P.pixelStorei(N.UNPACK_IMAGE_HEIGHT,b),P.pixelStorei(N.UNPACK_SKIP_PIXELS,x),P.pixelStorei(N.UNPACK_SKIP_ROWS,S),P.pixelStorei(N.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&N.generateMipmap(v),P.unbindTexture()},this.initRenderTarget=function(e){F.get(e).__webglFramebuffer===void 0&&Be.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Be.setTextureCube(e,0):e.isData3DTexture?Be.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Be.setTexture2DArray(e,0):Be.setTexture2D(e,0),P.unbindTexture()},this.resetState=function(){se=0,ce=0,M=null,P.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return lt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=en._getDrawingBufferColorSpace(e),t.unpackColorSpace=en._getUnpackColorSpace()}},Yl={type:`change`},Xl={type:`start`},Zl={type:`end`},Ql=new ai,$l=new Qr,eu=Math.cos(70*Kt.DEG2RAD),tu=new B,nu=2*Math.PI,ru={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},iu=1e-6,au=class extends ko{constructor(e,t=null){super(e,t),this.state=ru.NONE,this.target=new B,this.cursor=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:`ArrowLeft`,UP:`ArrowUp`,RIGHT:`ArrowRight`,BOTTOM:`ArrowDown`},this.mouseButtons={LEFT:h.ROTATE,MIDDLE:h.DOLLY,RIGHT:h.PAN},this.touches={ONE:g.ROTATE,TWO:g.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle=`auto`,this._domElementKeyEvents=null,this._lastPosition=new B,this._lastQuaternion=new qt,this._lastTargetPosition=new B,this._quat=new qt().setFromUnitVectors(e.up,new B(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Oo,this._sphericalDelta=new Oo,this._scale=1,this._panOffset=new B,this._rotateStart=new z,this._rotateEnd=new z,this._rotateDelta=new z,this._panStart=new z,this._panEnd=new z,this._panDelta=new z,this._dollyStart=new z,this._dollyEnd=new z,this._dollyDelta=new z,this._dollyDirection=new B,this._mouse=new z,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=su.bind(this),this._onPointerDown=ou.bind(this),this._onPointerUp=cu.bind(this),this._onContextMenu=hu.bind(this),this._onMouseWheel=du.bind(this),this._onKeyDown=fu.bind(this),this._onTouchStart=pu.bind(this),this._onTouchMove=mu.bind(this),this._onMouseDown=lu.bind(this),this._onMouseMove=uu.bind(this),this._interceptControlDown=gu.bind(this),this._interceptControlUp=_u.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e===`grab`?this.domElement.style.cursor=`grab`:this.domElement.style.cursor=`auto`}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener(`pointerdown`,this._onPointerDown),this.domElement.addEventListener(`pointercancel`,this._onPointerUp),this.domElement.addEventListener(`contextmenu`,this._onContextMenu),this.domElement.addEventListener(`wheel`,this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener(`keydown`,this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction=`none`}disconnect(){this.state=ru.NONE,this.domElement.removeEventListener(`pointerdown`,this._onPointerDown),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.domElement.removeEventListener(`pointercancel`,this._onPointerUp),this.domElement.removeEventListener(`wheel`,this._onMouseWheel),this.domElement.removeEventListener(`contextmenu`,this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener(`keydown`,this._interceptControlDown,{capture:!0}),e.removeEventListener(`keyup`,this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction=``,this.domElement.style.cursor=`auto`}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Yl),this.update(),this.state=ru.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;tu.copy(t).sub(this.target),tu.applyQuaternion(this._quat),this._spherical.setFromVector3(tu),this.autoRotate&&this.state===ru.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=nu:n>Math.PI&&(n-=nu),r<-Math.PI?r+=nu:r>Math.PI&&(r-=nu),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let i=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let e=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),i=e!=this._spherical.radius}if(tu.setFromSpherical(this._spherical),tu.applyQuaternion(this._quatInverse),t.copy(this.target).add(tu),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let e=null;if(this.object.isPerspectiveCamera){let t=tu.length();e=this._clampDistance(t*this._scale);let n=t-e;this.object.position.addScaledVector(this._dollyDirection,n),this.object.updateMatrixWorld(),i=!!n}else if(this.object.isOrthographicCamera){let t=new B(this._mouse.x,this._mouse.y,0);t.unproject(this.object);let n=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),i=n!==this.object.zoom;let r=new B(this._mouse.x,this._mouse.y,0);r.unproject(this.object),this.object.position.sub(r).add(t),this.object.updateMatrixWorld(),e=tu.length()}else console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.`),this.zoomToCursor=!1;e!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(e).add(this.object.position):(Ql.origin.copy(this.object.position),Ql.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ql.direction))<eu?this.object.lookAt(this.target):($l.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ql.intersectPlane($l,this.target))))}else if(this.object.isOrthographicCamera){let e=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),e!==this.object.zoom&&(this.object.updateProjectionMatrix(),i=!0)}return this._scale=1,this._performCursorZoom=!1,i||this._lastPosition.distanceToSquared(this.object.position)>iu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>iu||this._lastTargetPosition.distanceToSquared(this.target)>iu?(this.dispatchEvent(Yl),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e===null?nu/60/60*this.autoRotateSpeed:nu/60*this.autoRotateSpeed*e}_getZoomScale(e){let t=Math.abs(e*.01);return .95**(this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){tu.setFromMatrixColumn(t,0),tu.multiplyScalar(-e),this._panOffset.add(tu)}_panUp(e,t){this.screenSpacePanning===!0?tu.setFromMatrixColumn(t,1):(tu.setFromMatrixColumn(t,0),tu.crossVectors(this.object.up,tu)),tu.multiplyScalar(e),this._panOffset.add(tu)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;tu.copy(r).sub(this.target);let i=tu.length();i*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*i/n.clientHeight,this.object.matrix),this._panUp(2*t*i/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.`),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),r=e-n.left,i=t-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(i/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(nu*this._rotateDelta.x/t.clientHeight),this._rotateUp(nu*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(nu*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-nu*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(nu*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-nu*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyStart.set(0,i)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateEnd.set(n,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(nu*this._rotateDelta.x/t.clientHeight),this._rotateUp(nu*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,i),this._dollyDelta.set(0,(this._dollyEnd.y/this._dollyStart.y)**+this.zoomSpeed),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new z,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function ou(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.ownerDocument.addEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.addEventListener(`pointerup`,this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType===`touch`?this._onTouchStart(e):this._onMouseDown(e),this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grabbing`)))}function su(e){this.enabled!==!1&&(e.pointerType===`touch`?this._onTouchMove(e):this._onMouseMove(e))}function cu(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.dispatchEvent(Zl),this.state=ru.NONE,this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grab`);break;case 1:let t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y})}}function lu(e){let t;switch(e.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case h.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=ru.DOLLY;break;case h.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=ru.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=ru.ROTATE}break;case h.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=ru.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=ru.PAN}break;default:this.state=ru.NONE}this.state!==ru.NONE&&this.dispatchEvent(Xl)}function uu(e){switch(this.state){case ru.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case ru.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case ru.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e)}}function du(e){this.enabled!==!1&&this.enableZoom!==!1&&this.state===ru.NONE&&(e.preventDefault(),this.dispatchEvent(Xl),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(Zl))}function fu(e){this.enabled!==!1&&this._handleKeyDown(e)}function pu(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case g.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=ru.TOUCH_ROTATE;break;case g.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=ru.TOUCH_PAN;break;default:this.state=ru.NONE}break;case 2:switch(this.touches.TWO){case g.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=ru.TOUCH_DOLLY_PAN;break;case g.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=ru.TOUCH_DOLLY_ROTATE;break;default:this.state=ru.NONE}break;default:this.state=ru.NONE}this.state!==ru.NONE&&this.dispatchEvent(Xl)}function mu(e){switch(this._trackPointer(e),this.state){case ru.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case ru.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case ru.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case ru.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=ru.NONE}}function hu(e){this.enabled!==!1&&e.preventDefault()}function gu(e){e.key===`Control`&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}function _u(e){e.key===`Control`&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}var vu=class extends Wn{constructor(e=document.createElement(`div`)){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position=`absolute`,this.element.style.userSelect=`none`,this.element.setAttribute(`draggable`,!1),this.center=new z(.5,.5),this.rotation2D=0,this.addEventListener(`removed`,function(){this.traverse(function(e){e.element&&e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this.rotation2D=e.rotation2D,this}},yu=new B,bu=new _n,xu=new _n,Su=new B,Cu=new B,wu=class{constructor(e={}){let t=this,n,r,i,a,o={objects:new WeakMap},s=e.element===void 0?document.createElement(`div`):e.element;s.style.overflow=`hidden`,this.domElement=s,this.sortObjects=!0,this.getSize=function(){return{width:n,height:r}},this.render=function(e,t){e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),bu.copy(t.matrixWorldInverse),xu.multiplyMatrices(t.projectionMatrix,bu),l(e,e,t),this.sortObjects&&f(e)},this.setSize=function(e,t){n=e,r=t,i=n/2,a=r/2,s.style.width=e+`px`,s.style.height=t+`px`};function c(e){e.isCSS2DObject&&(e.element.style.display=`none`);for(let t=0,n=e.children.length;t<n;t++)c(e.children[t])}function l(e,n,r){if(e.visible===!1){c(e);return}if(e.isCSS2DObject){yu.setFromMatrixPosition(e.matrixWorld),yu.applyMatrix4(xu);let c=yu.z>=-1&&yu.z<=1&&e.layers.test(r.layers)===!0,l=e.element;if(l.style.display=c===!0?``:`none`,c===!0){e.onBeforeRender(t,n,r);let o=100*e.center.x,c=100*e.center.y;l.style.transformOrigin=`${o}% ${c}%`;let u=-e.rotation2D,d=yu.x*i+i,f=-yu.y*a+a;l.style.transform=`translate(${-o}%, ${-c}%) translate(${d}px, ${f}px) rotate(${u}rad)`,l.parentNode!==s&&s.appendChild(l),e.onAfterRender(t,n,r)}let d={distanceToCameraSquared:u(r,e)};o.objects.set(e,d)}for(let t=0,i=e.children.length;t<i;t++)l(e.children[t],n,r)}function u(e,t){return Su.setFromMatrixPosition(e.matrixWorld),Cu.setFromMatrixPosition(t.matrixWorld),Su.distanceToSquared(Cu)}function d(e){let t=[];return e.traverseVisible(function(e){e.isCSS2DObject&&t.push(e)}),t}function f(e){let t=d(e).sort(function(e,t){return e.renderOrder===t.renderOrder?o.objects.get(e).distanceToCameraSquared-o.objects.get(t).distanceToCameraSquared:t.renderOrder-e.renderOrder}),n=t.length;for(let e=0,r=t.length;e<r;e++)t[e].element.style.zIndex=n-e}}},Tu={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`},Eu=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},Du=new to(-1,1,1,-1,0,1),Ou=new class extends Jr{constructor(){super(),this.setAttribute(`position`,new Ir([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new Ir([0,2,0,0,2,0],2))}},ku=class{constructor(e){this._mesh=new vi(Ou,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Du)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},Au=class extends Eu{constructor(e,t=`tDiffuse`){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof ha?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=fa.clone(e.uniforms),this.material=new ha({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new ku(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},ju=class extends Eu{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},Mu=class extends Eu{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},Nu=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new z);this._width=n.width,this._height=n.height,t=new mn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:j}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Au(Tu),this.copyPass.material.blending=0,this.timer=new co}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}ju!==void 0&&(r instanceof ju?n=!0:r instanceof Mu&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new z);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},Pu=class extends Eu{constructor(e,t,n=null,r=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new H}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},Fu={name:`LuminosityHighPassShader`,uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new H(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`},Iu=class e extends Eu{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e===void 0?new z(256,256):new z(e.x,e.y),this.clearColor=new H(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new mn(i,a,{type:j,depthBuffer:!1}),this.renderTargetBright.texture.name=`UnrealBloomPass.bright`,this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new mn(i,a,{type:j,depthBuffer:!1});t.texture.name=`UnrealBloomPass.h`+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let n=new mn(i,a,{type:j,depthBuffer:!1});n.texture.name=`UnrealBloomPass.v`+e,n.texture.generateMipmaps=!1,this.renderTargetsVertical.push(n),i=Math.round(i/2),a=Math.round(a/2)}let o=Fu;this.highPassUniforms=fa.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ha({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let s=[6,10,14,18,22];i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(s[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new z(1/i,1/a),i=Math.round(i/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=fa.clone(Tu.uniforms),this.blendMaterial=new ha({uniforms:this.copyUniforms,vertexShader:Tu.vertexShader,fragmentShader:Tu.fragmentShader,premultipliedAlpha:!0,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new H,this._oldClearAlpha=1,this._basic=new oi,this._fsQuad=new ku(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(n,r),this.renderTargetsVertical[e].setSize(n,r),this.separableBlurMaterials[e].uniforms.invSize.value=new z(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,n,r,i,a){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let s=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this._fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[n]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[n]),t.clear(),this._fsQuad.render(t),s=this.renderTargetsVertical[n];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(r),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(n*n))/n);let r=[],i=[];for(let n=1;n<e;n+=2){let a=t[n],o=n+1<e?t[n+1]:0,s=a+o;r.push((n*a+(n+1)*o)/s),i.push(s)}return new ha({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new z(.5,.5)},direction:{value:new z(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:r},gaussianWeights:{value:i}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new ha({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};Iu.BlurDirectionX=new z(1,0),Iu.BlurDirectionY=new z(0,1);var Lu={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`},Ru=class extends Eu{constructor(){super(),this.isOutputPass=!0,this.uniforms=fa.clone(Lu.uniforms),this.material=new ga({name:Lu.name,uniforms:this.uniforms,vertexShader:Lu.vertexShader,fragmentShader:Lu.fragmentShader}),this._fsQuad=new ku(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},en.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING=``:this._toneMapping===7?this.material.defines.NEUTRAL_TONE_MAPPING=``:this._toneMapping===5&&(this.material.defines.CUSTOM_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},zu=new B;function Bu(e,t,n,r,i,a){let o=2*Math.PI*i/4,s=Math.max(a-2*i,0),c=Math.PI/4;zu.copy(t),zu[r]=0,zu.normalize();let l=.5*o/(o+s),u=1-zu.angleTo(e)/c;return Math.sign(zu[n])===1?u*l:s/(o+s)+l+l*(1-u)}var Vu=class e extends Bi{constructor(e=1,t=1,n=1,r=2,i=.1){let a=r*2+1;if(i=Math.min(e/2,t/2,n/2,i),super(1,1,1,a,a,a),this.type=`RoundedBoxGeometry`,this.parameters={width:e,height:t,depth:n,segments:r,radius:i},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let s=new B,c=new B,l=new B(e,t,n).divideScalar(2).subScalar(i),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,p=u.length/6,m=new B,h=.5/a;for(let r=0,a=0;r<u.length;r+=3,a+=2)switch(s.fromArray(u,r),c.copy(s),c.x-=Math.sign(c.x)*h,c.y-=Math.sign(c.y)*h,c.z-=Math.sign(c.z)*h,c.normalize(),u[r+0]=l.x*Math.sign(s.x)+c.x*i,u[r+1]=l.y*Math.sign(s.y)+c.y*i,u[r+2]=l.z*Math.sign(s.z)+c.z*i,d[r+0]=c.x,d[r+1]=c.y,d[r+2]=c.z,Math.floor(r/p)){case 0:m.set(1,0,0),f[a+0]=Bu(m,c,`z`,`y`,i,n),f[a+1]=1-Bu(m,c,`y`,`z`,i,t);break;case 1:m.set(-1,0,0),f[a+0]=1-Bu(m,c,`z`,`y`,i,n),f[a+1]=1-Bu(m,c,`y`,`z`,i,t);break;case 2:m.set(0,1,0),f[a+0]=1-Bu(m,c,`x`,`z`,i,e),f[a+1]=Bu(m,c,`z`,`x`,i,n);break;case 3:m.set(0,-1,0),f[a+0]=1-Bu(m,c,`x`,`z`,i,e),f[a+1]=1-Bu(m,c,`z`,`x`,i,n);break;case 4:m.set(0,0,1),f[a+0]=1-Bu(m,c,`x`,`y`,i,e),f[a+1]=1-Bu(m,c,`y`,`x`,i,t);break;case 5:m.set(0,0,-1),f[a+0]=Bu(m,c,`x`,`y`,i,e),f[a+1]=1-Bu(m,c,`y`,`x`,i,t)}}static fromJSON(t){return new e(t.width,t.height,t.depth,t.segments,t.radius)}},Hu=.5,Uu=2.4,Wu=new Map,Gu=new Map;function Ku(e,t){if(!Wu.has(e)){let n=t();n.userData.keep=!0,Wu.set(e,n)}return Wu.get(e)}function qu(e,{rough:t=.7,metal:n=0,basic:r=!1,opacity:i=1}={}){let a=`${e}|${t}|${n}|${r}|${i}`;if(!Gu.has(a)){let o={color:e,transparent:i<1,opacity:i},s=r?new oi(o):new _a({...o,roughness:t,metalness:n});s.userData.keep=!0,Gu.set(a,s)}return Gu.get(a)}var Ju=(e,t,n)=>Ku(`box${e}|${t}|${n}`,()=>new Bi(e,t,n)),Yu=(e,t,n,r=20)=>Ku(`cyl${e}|${t}|${n}|${r}`,()=>new Ui(e,t,n,r)),Xu=(e,t)=>Ku(`cap${e}|${t}`,()=>new Vi(e,t,6,14)),Zu=(e,t=20,n=14)=>Ku(`sph${e}|${t}`,()=>new aa(e,t,n));function G(e,t,n=0,r=0,i=0,{shadow:a=!0}={}){let o=new vi(e,t);return o.position.set(n,r,i),a&&(o.castShadow=!0,o.receiveShadow=!0),o}var Qu={floor:`#1c1c1c`,carpet:`#29231f`,wall:`#262626`,deskTop:`#d2d2d2`,deskLeg:`#8c8c8c`,dark:`#2b2b2b`,monitor:`#121212`,pot:`#2f2f2f`,leaf:`#5d7558`},$u=[`#f1c9a9`,`#e0ac85`,`#c48a64`,`#9a6646`,`#6e4430`],ed=[`#1d1b19`,`#3b2a20`,`#6b4a32`,`#b9b4ab`,`#2a2a2a`,`#8c5a3c`],td=[`#f2f2f2`,`#d4d4d4`,`#3a3a3a`,`#e8600c`,`#5a5a5a`,`#fde8dc`],nd=[`#262626`,`#3a3a3a`,`#1e2228`];function rd(e){let t=2166136261;for(let n=0;n<e.length;n++)t=Math.imul(t^e.charCodeAt(n),16777619);return t>>>0}var id=(e,t,n)=>e[(t>>>n)%e.length];function ad({width:e,depth:t,color:n,isRoot:r}){let i=new Gn,a=new H(n),o=G(Ku(`room${e}|${t}`,()=>new Vu(e,Hu,t,3,.25)),qu(Qu.floor,{rough:.9}),0,Hu/2,0);i.add(o);let s=G(Ju(e-1.4,.02,t-1.6),qu(Qu.carpet,{rough:1}),.2,.51,.3);s.castShadow=!1,i.add(s);let c=qu(Qu.wall,{rough:.85}),l=G(Ju(e,Uu,.22),c,0,1.7,-t/2+.11),u=G(Ju(.22,Uu,t),c,-e/2+.11,1.7,0);i.add(l,u);let d=new oi({color:a.clone().multiplyScalar(.7)});i.add(G(Ju(e,.06,.24),d,0,2.9+.03,-t/2+.11,{shadow:!1})),i.add(G(Ju(.24,.06,t),d,-e/2+.11,2.9+.03,0,{shadow:!1}));let f=new oi({color:a,transparent:!0,opacity:.55});i.add(G(Ju(e,.03,.05),f,0,.52,t/2-.03,{shadow:!1})),i.add(G(Ju(.05,.03,t),f,e/2-.03,.52,0,{shadow:!1}));let p=qu(`#ffffff`,{basic:!0,opacity:.05}),m=Math.max(1,Math.floor((e-2)/3.2));for(let e=0;e<m;e++){let n=(e-(m-1)/2)*3.2;i.add(G(Ju(2.4,1.1,.02),p,n,2.05,-t/2+.235,{shadow:!1}))}if(r){let t=new Gn;t.position.set(-e/2+.24,2,-.3),t.rotation.y=Math.PI/2,t.add(G(Ju(3.6,1.6,.06),qu(Qu.monitor,{rough:.4}),0,0,0)),[.5,.8,.35,.95,.65].forEach((e,n)=>{t.add(G(Ju(.38,e,.02),qu(`#e8600c`,{basic:!0}),-1.2+n*.6,-.65+e/2,.045,{shadow:!1}))}),i.add(t)}let h=new Gn;return h.position.set(e/2-.8,Hu,t/2-.8),h.add(G(Yu(.32,.24,.55),qu(Qu.pot),0,.28,0)),h.add(G(Zu(.42,12,10),qu(Qu.leaf,{rough:.9}),0,.85,0)),h.add(G(Zu(.3,12,10),qu(Qu.leaf,{rough:.9}),.18,1.2,.05)),h.add(G(Zu(.26,12,10),qu(Qu.leaf,{rough:.9}),-.16,1.12,-.1)),i.add(h),{group:i,base:o}}function od(e,t){let n=rd(e),r=id($u,n,0),i=id(ed,n,4),a=id(td,n,8),o=id(nd,n,12),s=(n>>>16)%3,c=new H(t),l=new Gn;l.add(G(Ju(2.2,.08,1),qu(Qu.deskTop,{rough:.5}),0,1.05,1)),l.add(G(Ju(.06,1,.9),qu(Qu.deskLeg,{rough:.6}),-1.05,.52,1)),l.add(G(Ju(.06,1,.9),qu(Qu.deskLeg,{rough:.6}),1.05,.52,1)),l.add(G(Ju(.55,.03,.18),qu(Qu.dark),0,1.105,.8)),l.add(G(Yu(.07,.06,.14,12),qu(`#e8600c`,{rough:.5}),.75,1.16,.75)),l.add(G(Ju(.08,.32,.08),qu(Qu.dark),0,1.25,1.3)),l.add(G(Ju(1.05,.64,.05),qu(Qu.monitor,{rough:.4}),0,1.68,1.33));let u=new oi({color:c.clone().multiplyScalar(.35)}),d=G(Ju(.95,.54,.01),u,0,1.68,1.3,{shadow:!1});l.add(d),l.add(G(Yu(.34,.34,.05,16),qu(Qu.dark),0,.05,-.1)),l.add(G(Yu(.05,.05,.6,8),qu(`#4a4a4a`,{metal:.4}),0,.4,-.1)),l.add(G(Ju(.72,.12,.68),qu(Qu.dark),0,.74,-.1)),l.add(G(Ju(.72,.85,.1),qu(Qu.dark),0,1.25,-.5));let f=new Gn,p=qu(o),m=qu(r,{rough:.6});for(let e of[-.15,.15]){let t=G(Xu(.12,.42),p,e,.92,.15);t.rotation.x=Math.PI/2,f.add(t),f.add(G(Xu(.11,.42),p,e,.56,.4)),f.add(G(Ju(.17,.1,.3),qu(`#161616`),e,.14,.48))}let h=new _a({color:a,roughness:.75,emissive:c,emissiveIntensity:0});h.userData.live=!0;let g=G(Xu(.27,.42),h,0,1.42,-.08);g.scale.set(1.18,1,.8),f.add(g);let _=G(Ju(.11,.15,.02),new oi({color:c}),.11,1.5,.15,{shadow:!1});f.add(_);let v=[];for(let e of[-.36,.36]){let t=new Gn;t.position.set(e,1.68,-.05),t.rotation.x=-1,t.rotation.z=e>0?.12:-.12,t.add(G(Xu(.085,.55),h,0,-.36,0)),t.add(G(Zu(.08,10,8),m,0,-.72,0)),f.add(t),v.push(t)}let y=new Gn;y.position.set(0,2.02,-.04),y.add(G(Yu(.08,.09,.14,10),m,0,-.2,0)),y.add(G(Zu(.26),m,0,0,0));let b=qu(i,{rough:.9}),x=G(Zu(.28),b,0,.06,-.04);x.scale.set(1,.75,1),y.add(x),s===1&&y.add(G(Zu(.13,12,10),b,0,.18,-.26)),s===2&&y.add(G(Ju(.46,.42,.14),b,0,-.14,-.2));let S=qu(`#111111`,{basic:!0});y.add(G(Zu(.03,8,6),S,-.09,.02,.24,{shadow:!1})),y.add(G(Zu(.03,8,6),S,.09,.02,.24,{shadow:!1})),f.add(y),l.add(f);let C=new vi(new ia(1,1.08,48),new oi({color:c,transparent:!0,opacity:.35,depthWrite:!1,side:2}));C.rotation.x=-Math.PI/2,C.position.set(0,.02,.1),l.add(C);let w=new vi(new ia(1.25,1.36,56),new oi({color:`#ffffff`,side:2}));return w.rotation.x=-Math.PI/2,w.position.set(0,.03,.1),w.visible=!1,l.add(w),{group:l,torso:g,badge:_,screen:d,screenMat:u,arms:v,headGroup:y,halo:C,select:w,pickables:[g,y.children[1],d]}}var sd=(e,t)=>[{key:`url`,label:e,type:`text`,placeholder:t},{key:`method`,label:`Método`,type:`select`,options:[`POST`,`GET`,`PUT`,`PATCH`,`DELETE`],default:`POST`},{key:`headers`,label:`Cabeceras (JSON, opcional)`,type:`textarea`,placeholder:`{"Authorization": "Bearer ..."}`},{key:`body`,label:`Cuerpo (opcional). Usa {{input}}, {{from}}, {{agent}}`,type:`textarea`,placeholder:`{"mensaje": "{{input}}"}  — vacío = JSON estándar con agent/from/text`}],cd={claude:{label:`Claude API`,short:`Claude`,color:`#e8600c`,fields:[{key:`model`,label:`Modelo`,type:`select`,options:[`claude-haiku-4-5`,`claude-sonnet-5-5`],default:`claude-haiku-4-5`},{key:`system`,label:`Instrucciones del agente (system prompt)`,type:`textarea`,placeholder:`Eres el agente de marketing. Escribes copies cortos y directos…`},{key:`apiKey`,label:`API key propia (opcional: si no, usa la del cerebro)`,type:`password`,placeholder:`sk-ant-...`}]},n8n:{label:`n8n (webhook)`,short:`n8n`,color:`#ffffff`,fields:sd(`URL del Webhook de n8n`,`https://tu-n8n.com/webhook/...`)},make:{label:`Make (webhook)`,short:`Make`,color:`#b8b8b8`,fields:sd(`URL del Webhook`,`https://hook.make.com/...`)},zapier:{label:`Zapier (webhook)`,short:`Zapier`,color:`#fde8dc`,fields:sd(`URL del Catch Hook`,`https://hooks.zapier.com/...`)},openai:{label:`OpenAI API`,short:`OpenAI`,color:`#757575`,fields:[{key:`apiKey`,label:`API key`,type:`password`,placeholder:`sk-...`},{key:`model`,label:`Modelo`,type:`text`,placeholder:`gpt-4o-mini`},{key:`system`,label:`Instrucciones del agente`,type:`textarea`,placeholder:``}]},webhook:{label:`HTTP / API genérica`,short:`API`,color:`#ff9a52`,fields:sd(`Endpoint`,`https://api.midominio.com/agent  (en GET puedes usar ?q={{input}})`)}};function ld(e){return cd[e]||cd.webhook}function ud(e){let t=e.config||{};return e.provider===`claude`?!0:e.provider===`openai`?!!t.apiKey:!!t.url}var dd=30,fd=7,pd=new B(0,22,0),md=new B(0,12,-62);function hd(e,t){let n=document.createElement(`div`);return n.className=t,n.innerHTML=e,new vu(n)}function gd(e){let t=e.find(e=>!e.parentId)||e[0],n=n=>e.filter(r=>r.parentId===n||n===t.id&&r!==t&&!e.some(e=>e.id===r.parentId)),r=e=>{let t=n(e.id);return t.length?t.reduce((e,t)=>e+r(t),0):1},i=new Map,a=(e,t,o,s)=>{let c=(o+s)/2,l=t*dd;i.set(e.id,{x:Math.cos(c)*l,z:Math.sin(c)*l,depth:t,angle:c});let u=n(e.id),d=u.reduce((e,t)=>e+r(t),0),f=o;for(let e of u){let n=(s-o)*r(e)/d;a(e,t+1,f,f+n),f+=n}};a(t,0,-Math.PI/2,Math.PI*1.5);let o=n(t.id)[0];if(o){let e=Math.PI/2-i.get(o.id).angle;for(let t of i.values()){if(!t.depth)continue;let n=t.angle+e,r=t.depth*dd;Object.assign(t,{angle:n,x:Math.cos(n)*r,z:Math.sin(n)*r})}}return{root:t,pos:i}}function _d(e,{onSelect:t}={}){let n=new Jl({antialias:!0});n.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.shadowMap.enabled=!0,n.shadowMap.type=2,e.appendChild(n.domElement);let r=new wu;r.domElement.className=`labels-layer`,e.appendChild(r.domElement);let i=new er;i.background=new H(`#0b0b0b`),i.fog=new $n(`#0b0b0b`,120,260);let a=new eo(34,1,.1,800);a.position.set(0,86,110);let o=new au(a,n.domElement);o.enableDamping=!0,o.maxPolarAngle=Math.PI*.47,o.minDistance=8,o.maxDistance=260,o.autoRotate=!0,o.autoRotateSpeed=.35;let s=new Nu(n);s.addPass(new Pu(i,a));let c=new Iu(new z(1,1),.55,.6,.82);s.addPass(c),s.addPass(new Ru);let l=new Ha(`#ffffff`,`#101010`,1.25);i.add(l);let u=new ro(`#ffffff`,1.2);u.position.set(-40,90,50),u.castShadow=!0,u.shadow.mapSize.set(2048,2048),u.shadow.radius=6,Object.assign(u.shadow.camera,{left:-90,right:90,top:90,bottom:-90,far:200}),i.add(u);let d=new vi(new Hi(300,64),new _a({color:`#0e0e0e`,roughness:1}));d.rotation.x=-Math.PI/2,d.receiveShadow=!0,i.add(d);let f=new vi(new ra(400,400),new ha({transparent:!0,depthWrite:!1,uniforms:{uColor:{value:new H(`#4a4a4a`)}},vertexShader:`varying vec2 vXZ; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vXZ = w.xz; gl_Position = projectionMatrix * viewMatrix * w; }`,fragmentShader:`uniform vec3 uColor; varying vec2 vXZ; void main(){ vec2 g = abs(fract(vXZ / 3.0) - 0.5) * 3.0; float d = length(g); float dotMask = 1.0 - smoothstep(0.05, 0.09, d); float fade = 1.0 - smoothstep(45.0, 150.0, length(vXZ)); gl_FragColor = vec4(uColor, dotMask * fade * 0.85); }`}));f.rotation.x=-Math.PI/2,f.position.y=.02,i.add(f);let p=new Gn;p.position.copy(pd);let m=new vi(new aa(.8,24,16),new oi({color:`#ffffff`}));m.userData.themeSkip=!0,p.add(m);let h=hd(`Tú`,`label user-label`);h.position.set(0,1.9,0),p.add(h),i.add(p);let g=new Gn;g.position.copy(md);let _=new vi(new aa(1.4,24,16),new _a({color:`#efefef`,roughness:.5,emissive:`#e8600c`,emissiveIntensity:.25}));g.add(_);let v=new vi(new oa(2.6,.04,8,72),new oi({color:`#e8600c`}));v.rotation.x=Math.PI/2.4,g.add(v);let y=hd(`APIs externas`,`label user-label ext-label`);y.position.set(0,3.4,0),g.add(y),i.add(g);let x=new Set,S=new Gn;i.add(S);let C=new Map,w=new Map,T=[],E=[],D=new Map,O=[],k=[],A=1,ee=null;function te(e,n,r,i){let a=new Gn;a.position.set(n.x,0,n.z);let o=r.length,s=Math.max(1,o<=2?o:Math.ceil(Math.sqrt(o))),c=Math.max(1,Math.ceil(o/s)),l=5.2,u=4.4,d=Math.max(i?15:11,s*l+3.5),f=Math.max(i?13:10,c*u+4),p=new H(e.color||`#e8600c`),m=ad({width:d,depth:f,color:e.color||`#e8600c`,isRoot:i});m.base.userData.officeId=e.id,E.push(m.base),a.add(m.group);let h=new vi(new aa(i?.4:.26,16,12),new oi({color:p}));h.position.set(0,fd,0),a.add(h);let g=hd(`<span class="dot" style="background:${e.color}"></span>${e.name}`,`label office-label`);g.position.set(0,Hu+Uu+.9,-f/2),g.element.dataset.officeId=e.id,g.element.addEventListener(`click`,()=>t?.({type:`office`,id:e.id})),a.add(g),r.forEach((t,n)=>{let r=n%s,i=Math.floor(n/s),o=(r-(s-1)/2)*l+.4,d=(i-(c-1)/2)*u+.9,f=s===1||o<.5?1:-1;a.add(j(t,e,o,d,f))}),S.add(a),a.updateMatrixWorld(!0),w.set(e.id,{group:a,hub:h,hubWorld:h.getWorldPosition(new B),color:p,parentId:e.parentId,base:m.base,size:Math.max(d,f)})}function j(e,n,r,i,a=1){let o=ld(e.provider),s=od(e.id,o.color),c=s.group;c.position.set(r,Hu,i),c.rotation.y=a*Math.PI/2;let l=new Wn;l.position.set(0,2.9,0),c.add(l);let u=hd(`<b>${e.name}</b><span class="prov">${o.short}</span>`,`label agent-label`);return u.position.set(0,3.25,0),u.element.addEventListener(`click`,()=>t?.({type:`agent`,id:e.id})),c.add(u),s.pickables.forEach(t=>{t.userData.agentId=e.id,E.push(t)}),C.set(e.id,{id:e.id,group:c,...s,anchor:l,officeId:n.id,pulse:0,phase:Math.random()*6,tag:u,baseScreen:s.screenMat.color.clone()}),c}function ne(e,t,n){let r=e.clone().lerp(t,.5);return r.y+=n,new na(e.clone(),r,t.clone())}function re(){T=[];for(let[e,t]of w){let n=w.get(t.parentId);if(!n)continue;let r=ne(n.hubWorld,t.hubWorld,5),i=new Pi(new Jr().setFromPoints(r.getPoints(64)),new Ei({color:t.color,transparent:!0,opacity:.3}));S.add(i),T.push({curve:r,color:t.color,id:e})}}function ie(){i.remove(S),S.traverse(e=>{e.geometry&&!e.geometry.userData.keep&&e.geometry.dispose(),e.material&&!Array.isArray(e.material)&&!e.material.userData.keep&&e.material.dispose()}),S=new Gn,i.add(S),C=new Map,w=new Map,D=new Map,E=[];for(let e of O.splice(0))ye(e);for(let e of k.splice(0))i.remove(e.mesh)}function ae(e,t=[]){ie();let{root:n,pos:r}=gd(e.offices);for(let t of e.offices){let i=r.get(t.id);i&&te(t,i,e.agents.filter(e=>e.officeId===t.id),t.id===n.id)}re(),fe(t),ue(S),ee&&Ae(ee)}let oe={id:`inmersivo`,scene:{colors:{},packets:{}}},se=(()=>{let e=new xi(new Uint8Array([70,70,70,255,160,160,160,255,255,255,255,255]),3,1);return e.minFilter=e.magFilter=b,e.needsUpdate=!0,e})(),ce=new WeakMap,M=(e,t)=>{let n=oe.scene,r=n.colors?.[e];return r&&(!n.basicOnly?.includes(e)||t)?r:null};function le(e){if(!e.color)return e;let t=e.isMeshBasicMaterial||e.isLineBasicMaterial;if(e.userData.live)return e.userData.baseHex||=`#`+e.color.getHexString(),e.color.set(M(e.userData.baseHex,t)||e.userData.baseHex),e;let n=M(`#`+e.color.getHexString(),t),r=oe.scene.toon&&e.isMeshStandardMaterial;if(!n&&!r)return e;let i=ce.get(e);if(i?.id===oe.id)return i.mat;let a=r?new va({color:n||e.color,gradientMap:se,transparent:e.transparent,opacity:e.opacity,emissive:e.emissive,emissiveIntensity:e.emissiveIntensity}):e.clone();return r||a.color.set(n),a.userData.keep=!!e.userData.keep,ce.set(e,{id:oe.id,mat:a}),a}function ue(e){e.traverse(e=>{(e.isMesh||e.isLine)&&e.material&&!Array.isArray(e.material)&&!e.userData.themeSkip&&(e.material=le(e.userData.origMat||(e.userData.origMat=e.material)))})}function de(e,t){oe={id:e,scene:t},i.background=new H(t.background),i.fog=new $n(t.background,t.fog[0],t.fog[1]),d.material.color.set(t.ground),f.material.uniforms.uColor.value.set(t.dots),l.color.set(t.hemi[0]),l.groundColor.set(t.hemi[1]),l.intensity=t.hemi[2],u.intensity=t.sun,[c.strength,c.radius,c.threshold]=t.bloom,c.enabled=t.bloom[0]>0,m.material.color.set(t.packets?.[`#ffffff`]||`#ffffff`);let r=Math.min(window.devicePixelRatio,2)*t.pixel;n.setPixelRatio(r),s.setPixelRatio(r),N(),ue(S)}function fe(e){let n=new Map;for(let t of e){let e=C.get(t.agentId);e&&(n.has(e.officeId)||n.set(e.officeId,[]),n.get(e.officeId).push({src:t,av:e}))}for(let[e,r]of n){let n=w.get(e),i=n.group.position.clone(),a=i.clone().setY(0);a.lengthSq()<1&&a.set(0,0,1),a.normalize();let o=new B(-a.z,0,a.x),s=e=>e.group.getWorldPosition(new B);r.sort((e,t)=>s(e.av).sub(i).dot(o)-s(t.av).sub(i).dot(o)),r.forEach(({src:e,av:c},l)=>{let u=i.clone().addScaledVector(a,n.size/2+7).addScaledVector(o,(l-(r.length-1)/2)*10.5);u.y=0;let d=new Gn;d.position.copy(u);let f=new _a({color:`#dedede`,roughness:.55,metalness:0,emissive:`#e8600c`,emissiveIntensity:0});f.userData.live=!0;for(let t=0;t<3;t++){let n=new vi(new Ui(1.3,1.3,.55,40),f);n.position.y=.4+t*.72,n.castShadow=!0,n.userData.sourceId=e.id,E.push(n),d.add(n)}let p=new vi(new ia(1.75,1.85,48),new oi({color:`#e8600c`,side:2,transparent:!0,opacity:.6}));p.rotation.x=-Math.PI/2,p.position.y=.03,d.add(p);let m=hd(`<b>${e.name}</b>`,`label source-label`);m.element.title=e.desc,m.position.set(0,3.3,0),m.element.addEventListener(`click`,()=>t?.({type:`source`,id:e.id})),d.add(m),S.add(d);let h=u.clone().setY(.06),g=s(c).setY(.06),_=new Pi(new Jr().setFromPoints([h,g]),new xa({color:`#e8600c`,dashSize:.4,gapSize:.6,transparent:!0,opacity:.35}));_.computeLineDistances(),S.add(_),D.set(e.id,{group:d,top:u.clone().setY(2.6),pulse:0,mat:f,ring:p})})}}function pe(e){if(e===`user`)return pd.clone();if(e===`external`)return md.clone();if(e.startsWith?.(`src:`))return D.get(e.slice(4))?.top.clone()||null;let t=C.get(e);return t?t.anchor.getWorldPosition(new B):null}function me(e){let t=[],n=e,r=new Set;for(;n&&w.has(n)&&!r.has(n);)r.add(n),t.push(n),n=w.get(n).parentId;return t}function he(e,t){let n=pe(e),r=pe(t);if(!n||!r)return null;let i=[n];if(e.startsWith(`src:`)||t.startsWith(`src:`))return[n,r];let a=C.get(e)?.officeId||null,o=C.get(t)?.officeId||null;if(a&&o){let e=me(a),t=me(o),s=e.find(e=>t.includes(e)),c=[...e.slice(0,e.indexOf(s)+1),...t.slice(0,t.indexOf(s)).reverse()];if(c.length===1){let e=n.clone().lerp(r,.5);e.y+=2+n.distanceTo(r)*.25,i.push(e)}else c.forEach(e=>i.push(w.get(e).hubWorld.clone()))}else{let e=a||o;e&&i.push(w.get(e).hubWorld.clone())}return i.push(r),ge(i)}function ge(e){return e.filter((t,n)=>n===0||t.distanceTo(e[n-1])>.1)}function _e(e){let t=[e[0]];for(let n=1;n<e.length;n++){let r=e[n-1],i=e[n],a=r.distanceTo(i),o=r.clone().lerp(i,.5);o.y+=Math.min(10,a*.18),t.push(o,i)}return new Zi(t,!1,`centripetal`)}function ve(e,t,{color:n=`#ffffff`,onArrive:r,size:a=.38}={}){n=oe.scene.packets?.[String(n).toLowerCase()]||n;let o=he(e,t);if(!o||o.length<2)return r?.(),!1;let s=_e(o),c=new H(n),l=new vi(new aa(a,16,12),new oi({color:c.clone().multiplyScalar(2.2)})),u=[];for(let e=1;e<=8;e++){let t=new vi(new aa(a*(1-e/10),10,8),new oi({color:c,transparent:!0,opacity:.6*(1-e/9)}));u.push(t),i.add(t)}let d=new Pi(new Jr().setFromPoints(s.getPoints(120)),new Ei({color:c,transparent:!0,opacity:.35}));i.add(l,d);let f=s.getLength();return O.push({curve:s,head:l,trail:u,line:d,t:0,duration:1.2+f/28,onArrive:r,toId:t,fromId:e,fade:-1}),be(e,.6),!0}function ye(e){[e.head,e.line,...e.trail].forEach(e=>{i.remove(e),e.geometry.dispose(),e.material.dispose()})}function be(e,t=1){let n=C.get(e);n&&(n.pulse=Math.max(n.pulse,t)),e===`user`&&(m.userData.pulse=1),e===`external`&&(_.userData.pulse=1),e.startsWith?.(`src:`)&&D.has(e.slice(4))&&(D.get(e.slice(4)).pulse=1)}function xe(){if(!T.length)return;let e=T[Math.floor(Math.random()*T.length)],t=new vi(new aa(.1,8,6),new oi({color:e.color,transparent:!0,opacity:.7}));i.add(t),k.push({mesh:t,curve:e.curve,t:0,dir:Math.random()<.5?1:-1,speed:.25+Math.random()*.25})}let Se=new wo,Ce=new z,we=null;n.domElement.addEventListener(`pointerdown`,e=>{we={x:e.clientX,y:e.clientY}}),n.domElement.addEventListener(`pointerup`,e=>{if(!we||Math.hypot(e.clientX-we.x,e.clientY-we.y)>5)return;let r=n.domElement.getBoundingClientRect();Ce.set((e.clientX-r.left)/r.width*2-1,-((e.clientY-r.top)/r.height)*2+1),Se.setFromCamera(Ce,a);let i=Se.intersectObjects(E,!1)[0];if(!i)return t?.(null);let{agentId:o,officeId:s,sourceId:c}=i.object.userData;c?t?.({type:`source`,id:c}):o?t?.({type:`agent`,id:o}):s&&t?.({type:`office`,id:s})}),n.domElement.addEventListener(`pointerdown`,()=>o.autoRotate=!1,{once:!0});let Te=null,Ee=!1;n.domElement.addEventListener(`pointermove`,e=>{Ee||(Ee=!0,requestAnimationFrame(()=>{Ee=!1;let t=n.domElement.getBoundingClientRect();Ce.set((e.clientX-t.left)/t.width*2-1,-((e.clientY-t.top)/t.height)*2+1),Se.setFromCamera(Ce,a);let r=Se.intersectObjects(E,!1)[0];Te=r?.object.userData.agentId||null,n.domElement.style.cursor=r?`pointer`:``}))});let De=null;function Oe(e,t){let n=a.position.clone().sub(o.target).normalize();n.y<.35&&(n.y=.35),n.normalize(),De={fromT:o.target.clone(),toT:e.clone(),fromP:a.position.clone(),toP:e.clone().add(n.multiplyScalar(t)),t:0},o.autoRotate=!1}function ke(e){if(!e)return Oe(new B(0,0,a.aspect<1?22:12),142*Pe());if(e.type===`agent`){let t=C.get(e.id);t&&Oe(t.group.getWorldPosition(new B),28)}else if(e.type===`source`){let t=D.get(e.id);t&&Oe(t.group.position.clone(),34)}else{let t=w.get(e.id);t&&Oe(t.group.position.clone(),52)}}function Ae(e){ee=e;for(let[t,n]of C)n.select.visible=t===e}let je=new Do,Me=new B,Ne=0,Pe=()=>a.aspect<1?Math.min(2.2,1/a.aspect)*.95:1,Fe=!0;function N(){let t=e.clientWidth,i=e.clientHeight;if(n.setSize(t,i),r.setSize(t,i),s.setSize(t,i),c.resolution.set(t,i),a.aspect=t/i,a.updateProjectionMatrix(),Fe){Fe=!1,a.position.multiplyScalar(Pe());let e=a.aspect<1?22:12;o.target.set(0,0,e),a.position.z+=e}}window.addEventListener(`resize`,N),N();function Ie(){let e=Math.min(je.getDelta(),.05),t=e*A,n=je.elapsedTime;if(De){De.t=Math.min(1,De.t+e*1.4);let t=1-(1-De.t)**3;o.target.lerpVectors(De.fromT,De.toT,t),a.position.lerpVectors(De.fromP,De.toP,t),De.t>=1&&(De=null)}o.update();for(let t of C.values()){t.pulse=Math.max(0,t.pulse-e*.9),x.has(t.id)&&(t.pulse=Math.max(t.pulse,.45+Math.sin(n*6)*.25));let r=x.has(t.id);t.torso.scale.y=1+Math.sin(n*2+t.phase)*.015,t.arms.forEach((e,t)=>e.rotation.x=-1+(r?Math.sin(n*18+t*Math.PI)*.08:0)),t.headGroup.rotation.x=r?Math.sin(n*3)*.06:Math.sin(n*.7+t.phase)*.03,t.headGroup.rotation.y=r?0:Math.sin(n*.4+t.phase)*.25,t.torso.material.emissiveIntensity=t.pulse*.35,t.screenMat.color.copy(t.baseScreen).multiplyScalar(1+t.pulse*2.4),t.halo.scale.setScalar(1+t.pulse*.9),t.halo.material.opacity=.35+t.pulse*.6,t.group.getWorldPosition(Me);let i=t.pulse>.2||t.id===Te||t.id===ee||Me.distanceTo(a.position)<48;t.tag.element.classList.toggle(`active`,t.pulse>.2),t.tag.element.classList.toggle(`far`,!i)}for(let t of D.values())t.pulse=Math.max(0,t.pulse-e*.8),t.mat.emissiveIntensity=t.pulse*.9,t.ring.scale.setScalar(1+t.pulse*.6);S.traverse(t=>{t.userData.spin&&(t.rotation.z+=e*t.userData.spin)}),_.rotation.y+=e*.3,v.rotation.z+=e*.5,_.userData.pulse=Math.max(0,(_.userData.pulse||0)-e),_.scale.setScalar(1+_.userData.pulse*.3),m.rotation.y+=e*.6,m.userData.pulse=Math.max(0,(m.userData.pulse||0)-e),m.scale.setScalar(1+m.userData.pulse*.5);for(let n=O.length-1;n>=0;n--){let r=O[n];if(r.fade>=0){r.fade+=e*1.5,r.line.material.opacity=Math.max(0,.35*(1-r.fade)),r.fade>=1&&(ye(r),O.splice(n,1));continue}r.t=Math.min(1,r.t+t/r.duration);let i=r.t<.5?2*r.t*r.t:1-(-2*r.t+2)**2/2;r.head.position.copy(r.curve.getPointAt(i)),r.trail.forEach((e,t)=>e.position.copy(r.curve.getPointAt(Math.max(0,i-(t+1)*.012)))),r.t>=1&&(r.fade=0,r.head.visible=!1,r.trail.forEach(e=>e.visible=!1),be(r.toId,1),r.onArrive?.())}Ne+=t,Ne>.7&&(Ne=0,xe());for(let e=k.length-1;e>=0;e--){let n=k[e];if(n.t+=t*n.speed,n.t>=1){i.remove(n.mesh),n.mesh.geometry.dispose(),n.mesh.material.dispose(),k.splice(e,1);continue}n.mesh.position.copy(n.curve.getPointAt(n.dir>0?n.t:1-n.t))}s.render(),r.render(i,a),requestAnimationFrame(Ie)}return requestAnimationFrame(Ie),{rebuild:ae,sendPacket:ve,focus:ke,setSelected:Ae,pulse:be,setTimeScale:e=>A=e,setAutoRotate:e=>o.autoRotate=e,hasAgent:e=>C.has(e),setWorking:(e,t)=>t?x.add(e):x.delete(e),setTheme:de}}var vd=[`Listo ✔`,`Sin cambios desde el último corte`,`Hecho, registrado en bitácora`,`OK, datos sincronizados`,`Completado sin errores`],yd=`#e8600c`,bd=`#ffffff`,xd=e=>e[Math.floor(Math.random()*e.length)];function Sd(e){let t=(e?.name||``).toLowerCase();return c[Object.keys(c).find(e=>t.includes(e))]||c.mando}function Cd({store:e,world:t,log:n}){let r=!0,i=1,a=0,o=1.5,s=new Map,c=e=>(s.has(e)||s.set(e,{sent:0,received:0}),s.get(e)),l=t=>t===`user`?`Tú`:e.agent(t)?.name||`?`,u=t=>t===`user`?`#ffffff`:ld(e.agent(t)?.provider).color,d=e=>new Promise(t=>setTimeout(t,e/Math.max(i,.1)));function f(i,a,o){return new Promise(s=>{let f=e.agent(a);if(!f||i!==`user`&&!e.agent(i))return s(null);c(i).sent++,n({kind:`task`,from:l(i),to:l(a),text:o,color:u(i)}),t.sendPacket(i,a,{color:yd,onArrive:async()=>{if(c(a).received++,await d(400+Math.random()*900),!r)return s(null);let e=xd(vd);c(a).sent++,n({kind:`reply`,from:f.name,to:l(i),text:e,color:u(a)}),t.sendPacket(a,i,{color:bd,size:.28,onArrive:()=>s(e)})}})})}function p(){let{agents:t}=e.get();if(t.length<2)return;let n=xd(t),r=e.office(n.officeId),i=Math.random(),a;a=i<.45?t.filter(t=>e.office(t.officeId)?.parentId===n.officeId):i<.75?t.filter(e=>e.officeId===n.officeId):t.filter(e=>e.officeId===r?.parentId),a=a.filter(e=>e.id!==n.id),a.length||(a=t.filter(e=>e.id!==n.id));let o=xd(a);f(n.id,o.id,xd(Sd(e.office(o.officeId))))}return{sendTask:f,stats:e=>c(e),bump:(t,n)=>e.agent(t)&&c(t)[n]++,isRunning:()=>r,setRunning:e=>r=e,setSpeed(e){i=e,t.setTimeScale(e)},tick(e){r&&(a+=e*i,a>=o&&(a=0,o=1+Math.random()*2.2,p()))}}}function K(e,t,n,r,i){if(r===`m`)throw TypeError(`Private method is not writable`);if(r===`a`&&!i)throw TypeError(`Private accessor was defined without a setter`);if(typeof t==`function`?e!==t||!i:!t.has(e))throw TypeError(`Cannot write private member to an object whose class did not declare it`);return r===`a`?i.call(e,n):i?i.value=n:t.set(e,n),n}function q(e,t,n,r){if(n===`a`&&!r)throw TypeError(`Private accessor was defined without a getter`);if(typeof t==`function`?e!==t||!r:!t.has(e))throw TypeError(`Cannot read private member from an object whose class did not declare it`);return n===`m`?r:n===`a`?r.call(e):r?r.value:t.get(e)}function wd(e){return typeof e==`object`&&!!e&&(`name`in e&&e.name===`AbortError`||`message`in e&&String(e.message).includes(`FetchRequestCanceledException`))}var Td=e=>{if(e instanceof Error)return e;if(typeof e==`object`&&e){try{let t=Object.prototype.toString.call(e);if(t===`[object Error]`||t===`[object DOMException]`){let t=Error(e.message,e.cause?{cause:e.cause}:{});return e.stack&&(t.stack=e.stack),e.cause&&!t.cause&&(t.cause=e.cause),e.name&&(t.name=e.name),t}}catch{}try{return Error(JSON.stringify(e))}catch{}}return Error(e)},J=(()=>{class e extends Error{}return e})(),Ed=class e extends J{constructor(t,n,r,i,a){super(`${e.makeMessage(t,n,r)}`),this.status=t,this.headers=i,this.requestID=i?.get(`request-id`),this.workspaceID=i?.get(`anthropic-workspace-id`),this.error=n,this.type=a??null}static makeMessage(e,t,n){let r=t?.message?typeof t.message==`string`?t.message:JSON.stringify(t.message):t?JSON.stringify(t):n;return e&&r?`${e} ${r}`:e?`${e} status code (no body)`:r||`(no status code or body)`}static generate(t,n,r,i){if(!t||!i)return new Od({message:r,cause:Td(n)});let a=n,o=a?.error?.type;return t===400?new jd(t,a,r,i,o):t===401?new Md(t,a,r,i,o):t===403?new Nd(t,a,r,i,o):t===404?new Pd(t,a,r,i,o):t===409?new Fd(t,a,r,i,o):t===422?new Id(t,a,r,i,o):t===429?new Ld(t,a,r,i,o):t>=500?new Rd(t,a,r,i,o):new e(t,a,r,i,o)}},Dd=class extends Ed{constructor({message:e}={}){super(void 0,void 0,e||`Request was aborted.`,void 0)}},Od=class extends Ed{constructor({message:e,cause:t}){super(void 0,void 0,e||`Connection error.`,void 0),t&&(this.cause=t)}},kd=class extends Od{constructor({message:e}={}){super({message:e??`Request timed out.`})}},Ad=class extends J{constructor(e,{cause:t}={}){super(e??`Retryable error.`),t!==void 0&&(this.cause=t)}},jd=class extends Ed{},Md=class extends Ed{},Nd=class extends Ed{},Pd=class extends Ed{},Fd=class extends Ed{},Id=class extends Ed{},Ld=class extends Ed{},Rd=class extends Ed{},zd=/^[a-z][a-z0-9+.-]*:/i,Bd=e=>zd.test(e),Vd=e=>(Vd=Array.isArray,Vd(e)),Hd=Vd;function Ud(e){return typeof e==`object`?e??{}:{}}function Wd(e){if(!e)return!0;for(let t in e)return!1;return!0}function Gd(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Kd(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}var qd=(e,t)=>{if(typeof t!=`number`||!Number.isInteger(t))throw new J(`${e} must be an integer`);if(t<0)throw new J(`${e} must be a positive integer`);return t},Jd=e=>{try{return JSON.parse(e)}catch{return}},Yd=(e,t)=>new Promise(n=>{if(t?.aborted)return n();let r=()=>{clearTimeout(i),n()},i=setTimeout(()=>{t?.removeEventListener(`abort`,r),n()},e);t?.addEventListener(`abort`,r,{once:!0})}),Xd=`0.129.0`,Zd=()=>typeof window<`u`&&window.document!==void 0&&typeof navigator<`u`;function Qd(){return typeof Deno<`u`&&Deno.build!=null?`deno`:typeof EdgeRuntime<`u`?`edge`:Object.prototype.toString.call(globalThis.process===void 0?0:globalThis.process)===`[object process]`?`node`:`unknown`}var $d=()=>{let e=Qd();if(e===`deno`)return{"X-Stainless-Lang":`js`,"X-Stainless-Package-Version":Xd,"X-Stainless-OS":nf(Deno.build.os),"X-Stainless-Arch":tf(Deno.build.arch),"X-Stainless-Runtime":`deno`,"X-Stainless-Runtime-Version":typeof Deno.version==`string`?Deno.version:Deno.version?.deno??`unknown`};if(typeof EdgeRuntime<`u`)return{"X-Stainless-Lang":`js`,"X-Stainless-Package-Version":Xd,"X-Stainless-OS":`Unknown`,"X-Stainless-Arch":`other:${EdgeRuntime}`,"X-Stainless-Runtime":`edge`,"X-Stainless-Runtime-Version":globalThis.process?.version??`unknown`};if(e===`node`)return{"X-Stainless-Lang":`js`,"X-Stainless-Package-Version":Xd,"X-Stainless-OS":nf(globalThis.process.platform??`unknown`),"X-Stainless-Arch":tf(globalThis.process.arch??`unknown`),"X-Stainless-Runtime":`node`,"X-Stainless-Runtime-Version":globalThis.process.version??`unknown`};let t=ef();return t?{"X-Stainless-Lang":`js`,"X-Stainless-Package-Version":Xd,"X-Stainless-OS":`Unknown`,"X-Stainless-Arch":`unknown`,"X-Stainless-Runtime":`browser:${t.browser}`,"X-Stainless-Runtime-Version":t.version}:{"X-Stainless-Lang":`js`,"X-Stainless-Package-Version":Xd,"X-Stainless-OS":`Unknown`,"X-Stainless-Arch":`unknown`,"X-Stainless-Runtime":`unknown`,"X-Stainless-Runtime-Version":`unknown`}};function ef(){if(typeof navigator>`u`||!navigator)return null;for(let{key:e,pattern:t}of[{key:`edge`,pattern:/Edge(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:`ie`,pattern:/MSIE(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:`ie`,pattern:/Trident(?:.*rv\:(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:`chrome`,pattern:/Chrome(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:`firefox`,pattern:/Firefox(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:`safari`,pattern:/(?:Version\W+(\d+)\.(\d+)(?:\.(\d+))?)?(?:\W+Mobile\S*)?\W+Safari/}]){let n=t.exec(navigator.userAgent);if(n)return{browser:e,version:`${n[1]||0}.${n[2]||0}.${n[3]||0}`}}return null}var tf=e=>e===`x32`?`x32`:e===`x86_64`||e===`x64`?`x64`:e===`arm`?`arm`:e===`aarch64`||e===`arm64`?`arm64`:e?`other:${e}`:`unknown`,nf=e=>(e=e.toLowerCase(),e.includes(`ios`)?`iOS`:e===`android`?`Android`:e===`darwin`?`MacOS`:e===`win32`?`Windows`:e===`freebsd`?`FreeBSD`:e===`openbsd`?`OpenBSD`:e===`linux`?`Linux`:e?`Other:${e}`:`Unknown`),rf,af=()=>rf??=$d(),of=new WeakMap,sf=typeof globalThis.FinalizationRegistry==`function`?new globalThis.FinalizationRegistry(e=>df(e)):null;function cf(e,t){return()=>e.removeEventListener(`abort`,t)}function lf(e,t,n){of.set(e,cf(t,n))}function uf(e,t){of.has(t)&&sf?.register(e,t,t)}function df(e){let t=of.get(e);t&&(of.delete(e),sf?.unregister(e),t())}function ff(){if(typeof fetch<`u`)return fetch;throw Error("`fetch` is not defined as a global; Either pass `fetch` to the client, `new Anthropic({ fetch })` or polyfill the global, `globalThis.fetch = fetch`")}function pf(...e){let t=globalThis.ReadableStream;if(t===void 0)throw Error("`ReadableStream` is not defined as a global; You will need to polyfill it, `globalThis.ReadableStream = ReadableStream`");return new t(...e)}function mf(e){let t=Symbol.asyncIterator in e?e[Symbol.asyncIterator]():e[Symbol.iterator]();return pf({start(){},async pull(e){let{done:n,value:r}=await t.next();n?e.close():e.enqueue(r)},async cancel(){await t.return?.()}})}function hf(e){if(e[Symbol.asyncIterator])return e;let t=e.getReader();return{async next(){try{let e=await t.read();return e?.done&&t.releaseLock(),e}catch(e){throw t.releaseLock(),e}},async return(){let e=t.cancel();return t.releaseLock(),await e,{done:!0,value:void 0}},[Symbol.asyncIterator](){return this}}}async function gf(e){if(typeof e!=`object`||!e)return;if(e[Symbol.asyncIterator]){await e[Symbol.asyncIterator]().return?.();return}let t=e.getReader(),n=t.cancel();t.releaseLock(),await n}var _f=({headers:e,body:t})=>({bodyHeaders:{"content-type":`application/json`},body:JSON.stringify(t)}),vf=`RFC3986`,yf=e=>String(e),bf={RFC1738:e=>String(e).replace(/%20/g,`+`),RFC3986:yf},xf=(e,t)=>(xf=Object.hasOwn??Function.prototype.call.bind(Object.prototype.hasOwnProperty),xf(e,t)),Sf=(()=>{let e=[];for(let t=0;t<256;++t)e.push(`%`+((t<16?`0`:``)+t.toString(16)).toUpperCase());return e})(),Cf=1024,wf=(e,t,n,r,i)=>{if(e.length===0)return e;let a=e;if(typeof e==`symbol`?a=Symbol.prototype.toString.call(e):typeof e!=`string`&&(a=String(e)),n===`iso-8859-1`)return escape(a).replace(/%u[0-9a-f]{4}/gi,function(e){return`%26%23`+parseInt(e.slice(2),16)+`%3B`});let o=``;for(let e=0;e<a.length;e+=Cf){let t=a.length>=Cf?a.slice(e,e+Cf):a,n=[];for(let e=0;e<t.length;++e){let r=t.charCodeAt(e);if(r===45||r===46||r===95||r===126||r>=48&&r<=57||r>=65&&r<=90||r>=97&&r<=122||i===`RFC1738`&&(r===40||r===41)){n[n.length]=t.charAt(e);continue}if(r<128){n[n.length]=Sf[r];continue}if(r<2048){n[n.length]=Sf[192|r>>6]+Sf[128|r&63];continue}if(r<55296||r>=57344){n[n.length]=Sf[224|r>>12]+Sf[128|r>>6&63]+Sf[128|r&63];continue}e+=1,r=65536+((r&1023)<<10|t.charCodeAt(e)&1023),n[n.length]=Sf[240|r>>18]+Sf[128|r>>12&63]+Sf[128|r>>6&63]+Sf[128|r&63]}o+=n.join(``)}return o};function Tf(e){return!e||typeof e!=`object`?!1:!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))}function Ef(e,t){if(Vd(e)){let n=[];for(let r=0;r<e.length;r+=1)n.push(t(e[r]));return n}return t(e)}var Df={brackets(e){return String(e)+`[]`},comma:`comma`,indices(e,t){return String(e)+`[`+t+`]`},repeat(e){return String(e)}},Of=function(e,t){Array.prototype.push.apply(e,Vd(t)?t:[t])},kf,Af={addQueryPrefix:!1,allowDots:!1,allowEmptyArrays:!1,arrayFormat:`indices`,charset:`utf-8`,charsetSentinel:!1,delimiter:`&`,encode:!0,encodeDotInKeys:!1,encoder:wf,encodeValuesOnly:!1,format:vf,formatter:yf,indices:!1,serializeDate(e){return(kf??=Function.prototype.call.bind(Date.prototype.toISOString))(e)},skipNulls:!1,strictNullHandling:!1};function jf(e){return typeof e==`string`||typeof e==`number`||typeof e==`boolean`||typeof e==`symbol`||typeof e==`bigint`}var Mf={};function Nf(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_){let v=e,y=_,b=0,x=!1;for(;(y=y.get(Mf))!==void 0&&!x;){let t=y.get(e);if(b+=1,t!==void 0){if(t===b)throw RangeError(`Cyclic object value`);x=!0}y.get(Mf)===void 0&&(b=0)}if(typeof l==`function`?v=l(t,v):v instanceof Date?v=f?.(v):n===`comma`&&Vd(v)&&(v=Ef(v,function(e){return e instanceof Date?f?.(e):e})),v===null){if(a)return c&&!h?c(t,Af.encoder,g,`key`,p):t;v=``}if(jf(v)||Tf(v)){if(c){let e=h?t:c(t,Af.encoder,g,`key`,p);return[m?.(e)+`=`+m?.(c(v,Af.encoder,g,`value`,p))]}return[m?.(t)+`=`+m?.(String(v))]}let S=[];if(v===void 0)return S;let C;if(n===`comma`&&Vd(v))h&&c&&(v=Ef(v,c)),C=[{value:v.length>0?v.join(`,`)||null:void 0}];else if(Vd(l))C=l;else{let e=Object.keys(v);C=u?e.sort(u):e}let w=s?String(t).replace(/\./g,`%2E`):String(t),T=r&&Vd(v)&&v.length===1?w+`[]`:w;if(i&&Vd(v)&&v.length===0)return T+`[]`;for(let t=0;t<C.length;++t){let y=C[t],x=typeof y==`object`&&y.value!==void 0?y.value:v[y];if(o&&x===null)continue;let w=d&&s?y.replace(/\./g,`%2E`):y,E=Vd(v)?typeof n==`function`?n(T,w):T:T+(d?`.`+w:`[`+w+`]`);_.set(e,b);let D=new WeakMap;D.set(Mf,_),Of(S,Nf(x,E,n,r,i,a,o,s,n===`comma`&&h&&Vd(v)?null:c,l,u,d,f,p,m,h,g,D))}return S}function Pf(e=Af){if(e.allowEmptyArrays!==void 0&&typeof e.allowEmptyArrays!=`boolean`)throw TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");if(e.encodeDotInKeys!==void 0&&typeof e.encodeDotInKeys!=`boolean`)throw TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");if(e.encoder!==null&&e.encoder!==void 0&&typeof e.encoder!=`function`)throw TypeError(`Encoder has to be a function.`);let t=e.charset||Af.charset;if(e.charset!==void 0&&e.charset!==`utf-8`&&e.charset!==`iso-8859-1`)throw TypeError(`The charset option must be either utf-8, iso-8859-1, or undefined`);let n=vf;if(e.format!==void 0){if(!xf(bf,e.format))throw TypeError(`Unknown format option provided.`);n=e.format}let r=bf[n],i=Af.filter;(typeof e.filter==`function`||Vd(e.filter))&&(i=e.filter);let a;if(a=e.arrayFormat&&e.arrayFormat in Df?e.arrayFormat:`indices`in e?e.indices?`indices`:`repeat`:Af.arrayFormat,`commaRoundTrip`in e&&typeof e.commaRoundTrip!=`boolean`)throw TypeError("`commaRoundTrip` must be a boolean, or absent");let o=e.allowDots===void 0?e.encodeDotInKeys?!0:Af.allowDots:!!e.allowDots;return{addQueryPrefix:typeof e.addQueryPrefix==`boolean`?e.addQueryPrefix:Af.addQueryPrefix,allowDots:o,allowEmptyArrays:typeof e.allowEmptyArrays==`boolean`?!!e.allowEmptyArrays:Af.allowEmptyArrays,arrayFormat:a,charset:t,charsetSentinel:typeof e.charsetSentinel==`boolean`?e.charsetSentinel:Af.charsetSentinel,commaRoundTrip:!!e.commaRoundTrip,delimiter:e.delimiter===void 0?Af.delimiter:e.delimiter,encode:typeof e.encode==`boolean`?e.encode:Af.encode,encodeDotInKeys:typeof e.encodeDotInKeys==`boolean`?e.encodeDotInKeys:Af.encodeDotInKeys,encoder:typeof e.encoder==`function`?e.encoder:Af.encoder,encodeValuesOnly:typeof e.encodeValuesOnly==`boolean`?e.encodeValuesOnly:Af.encodeValuesOnly,filter:i,format:n,formatter:r,serializeDate:typeof e.serializeDate==`function`?e.serializeDate:Af.serializeDate,skipNulls:typeof e.skipNulls==`boolean`?e.skipNulls:Af.skipNulls,sort:typeof e.sort==`function`?e.sort:null,strictNullHandling:typeof e.strictNullHandling==`boolean`?e.strictNullHandling:Af.strictNullHandling}}function Ff(e,t={}){let n=e,r=Pf(t),i,a;typeof r.filter==`function`?(a=r.filter,n=a(``,n)):Vd(r.filter)&&(a=r.filter,i=a);let o=[];if(typeof n!=`object`||!n)return``;let s=Df[r.arrayFormat],c=s===`comma`&&r.commaRoundTrip;i||=Object.keys(n),r.sort&&i.sort(r.sort);let l=new WeakMap;for(let e=0;e<i.length;++e){let t=i[e];r.skipNulls&&n[t]===null||Of(o,Nf(n[t],t,s,c,r.allowEmptyArrays,r.strictNullHandling,r.skipNulls,r.encodeDotInKeys,r.encode?r.encoder:null,r.filter,r.sort,r.allowDots,r.serializeDate,r.format,r.formatter,r.encodeValuesOnly,r.charset,l))}let u=o.join(r.delimiter),d=r.addQueryPrefix===!0?`?`:``;return r.charsetSentinel&&(r.charset===`iso-8859-1`?d+=`utf8=%26%2310003%3B&`:d+=`utf8=%E2%9C%93&`),u.length>0?d+u:``}function If(e){return Ff(e,{arrayFormat:`brackets`})}var Lf=`modulepreload`,Rf=function(e,t){return new URL(e,t).href},zf={},Bf=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=Rf(t,n),t=s(t),t in zf)return;zf[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:Lf,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},Vf=`urn:ietf:params:oauth:grant-type:jwt-bearer`,Hf=`refresh_token`,Uf=`/v1/oauth/token`,Wf=`oauth-2025-04-20`,Gf=`oidc-federation-2026-04-01`,Kf=1<<20;function qf(e){if(!e)return;let t;try{t=new URL(e)}catch(t){throw new tp(`Invalid token endpoint base URL "${e}": ${t}`)}if(t.protocol===`https:`)return;let n=t.hostname.toLowerCase().replace(/^\[|\]$/g,``);if(t.protocol!==`http:`||n!==`localhost`&&n!==`127.0.0.1`&&n!==`::1`)throw new tp(`Refusing to send credential over non-https token endpoint "${e}"`)}async function Jf(e,t){let n=await ep(e),r;try{r=JSON.parse(n)}catch{throw new tp(`Token endpoint returned non-JSON response (status ${e.status})`,e.status,Zf(n),t)}if(!r.access_token)throw new tp(`Token endpoint response missing access_token: ${JSON.stringify(Zf(r))}`,e.status,Zf(r),t);if(r.token_type&&r.token_type.toLowerCase()!==`bearer`)throw new tp(`Token endpoint response: unsupported token_type "${r.token_type}" (want Bearer)`,e.status,Zf(r),t);return r}var Yf=2e3,Xf=new Set([`error`,`error_description`,`error_uri`]);function Zf(e){if(e==null)return e;if(typeof e==`string`){let t;try{t=JSON.parse(e)}catch{return e.length<=Yf?e:e.slice(0,Yf)+`... <${e.length-Yf} more chars>`}return JSON.stringify(Zf(t))}if(typeof e==`object`&&!Array.isArray(e)){let t={};for(let[n,r]of Object.entries(e))Xf.has(n)&&(t[n]=r);return t}return null}async function Qf(e,t=e=>console.warn(`anthropic-sdk: ${e}`)){if(typeof process>`u`||process.platform===`win32`)return;let{fs:n}=await Bf(async()=>{let{fs:e}=await import(`./node.browser-C46MKRAS.js`);return{fs:e}},[],import.meta.url),r=e,i;try{r=await n.promises.realpath(e),i=await n.promises.stat(r)}catch{return}let a=i.mode&511;if(a&18)throw new tp(`Credentials file at ${r} is group/world-writable (mode 0o${a.toString(8)}); this allows other local users to plant tokens. Run \`chmod 600 ${r}\`.`);if(a&36)throw new tp(`Credentials file at ${r} is group/world-readable (mode 0o${a.toString(8)}); run \`chmod 600 ${r}\` before retrying.`);typeof process.getuid==`function`&&i.uid!==process.getuid()&&t(`credentials file at ${r} is owned by uid ${i.uid} (current process uid ${process.getuid()}); verify this is intentional.`)}async function $f(e,t){let{fs:n,path:r}=await Bf(async()=>{let{fs:e,path:t}=await import(`./node.browser-C46MKRAS.js`);return{fs:e,path:t}},[],import.meta.url),i=r.dirname(e);await n.promises.mkdir(i,{recursive:!0,mode:448});let a=`${e}.${process.pid}.${Math.random().toString(36).slice(2)}.tmp`;try{let r=await n.promises.open(a,`w`,384);try{await r.writeFile(JSON.stringify(t,null,2)),await r.sync()}finally{await r.close()}await n.promises.rename(a,e)}catch(e){throw await n.promises.unlink(a).catch(()=>{}),e}try{let e=await n.promises.open(i,`r`);try{await e.sync()}finally{await e.close()}}catch{}}async function ep(e){if(!e.body)return``;let t=e.body.getReader(),n=[],r=0;for(;;){let{done:e,value:i}=await t.read();if(e)break;if(r+i.length>Kf){let e=Kf-r;e>0&&n.push(i.subarray(0,e)),await t.cancel();break}n.push(i),r+=i.length}let i;if(n.length===1)i=n[0];else{i=new Uint8Array(n.reduce((e,t)=>e+t.length,0));let e=0;for(let t of n)i.set(t,e),e+=t.length}return new TextDecoder(`utf-8`).decode(i)}var tp=class extends J{constructor(e,t=null,n=null,r=null){super(e),this.statusCode=t,this.body=n,this.requestId=r}};function np(){return Math.floor(Date.now()/1e3)}var rp=class{constructor(e,t){this.cached=null,this.pendingRefresh=null,this.nextForce=!1,this.lastAdvisoryError=0,this.provider=e,this.onAdvisoryRefreshError=t}async getToken(){let e=this.nextForce;this.nextForce=!1;let t=this.cached;if(e||t==null)return(await this.refresh(e)).token;if(t.expiresAt==null)return t.token;let n=t.expiresAt-np();return n>120?t.token:n>30?(this.backgroundRefresh(),t.token):(await this.refresh()).token}invalidate(){this.cached=null,this.nextForce=!0}refresh(e=!1){return this.pendingRefresh&&!e?this.pendingRefresh:this.doRefresh(e)}backgroundRefresh(){this.pendingRefresh||np()-this.lastAdvisoryError<5||this.doRefresh().catch(e=>{this.lastAdvisoryError=np(),this.onAdvisoryRefreshError?.(e)})}doRefresh(e=!1){return this.pendingRefresh=this.provider(e?{forceRefresh:!0}:void 0).then(e=>(this.cached=e,this.pendingRefresh=null,e),e=>{throw this.pendingRefresh=null,e}),this.pendingRefresh}},ip=e=>{if(globalThis.process!==void 0)return{}[e]?.trim()||void 0;if(globalThis.Deno!==void 0)return globalThis.Deno.env?.get?.(e)?.trim()||void 0};function ap(e){let t=0;for(let n of e)t+=n.length;let n=new Uint8Array(t),r=0;for(let t of e)n.set(t,r),r+=t.length;return n}var op;function sp(e){let t;return(op??=(t=new globalThis.TextEncoder,t.encode.bind(t)))(e)}var cp;function lp(e){let t;return(cp??=(t=new globalThis.TextDecoder,t.decode.bind(t)))(e)}var up=e=>{if(globalThis.Buffer!==void 0){let t=globalThis.Buffer.from(e,`base64`);return new Uint8Array(t.buffer,t.byteOffset,t.byteLength)}if(typeof atob<`u`){let t=atob(e),n=new Uint8Array(t.length);for(let e=0;e<t.length;e++)n[e]=t.charCodeAt(e);return n}throw new J("Cannot decode base64 string; Expected `Buffer` or `atob` to be defined")},dp=`warn`,fp={off:0,error:200,warn:300,info:400,debug:500},pp=(e,t,n)=>{if(e){if(Gd(fp,e))return e;n.warn(`${t} was set to ${JSON.stringify(e)}, expected one of ${JSON.stringify(Object.keys(fp))}`)}};function mp(){}function hp(e,t,n){return!t||fp[e]>fp[n]?mp:t[e].bind(t)}var gp={error:mp,warn:mp,info:mp,debug:mp},_p=new WeakMap;function vp(e,t){let n=_p.get(e);if(n&&n[0]===t)return n[1];let r={error:hp(`error`,e,t),warn:hp(`warn`,e,t),info:hp(`info`,e,t),debug:hp(`debug`,e,t)};return _p.set(e,[t,r]),r}function yp(e){let t=e.logger,n=e.logLevel??`off`;return t?vp(t,n):gp}var bp,xp;function Sp(){let e=ip(`ANTHROPIC_LOG`);return(!xp||e!==bp)&&(bp=e,xp=vp(console,pp(e,`process.env['ANTHROPIC_LOG']`,vp(console,`warn`))??`warn`)),xp}function Cp(e,t,n){e.debug!==mp&&e.debug(t,wp(n))}var wp=e=>(e.options&&(e.options={...e.options},delete e.options.headers),e.headers&&=Object.fromEntries((e.headers instanceof Headers?[...e.headers]:Object.entries(e.headers)).map(([e,t])=>[e,e.toLowerCase()===`authorization`||e.toLowerCase()===`api-key`||e.toLowerCase()===`x-api-key`||e.toLowerCase()===`cookie`||e.toLowerCase()===`set-cookie`?`***`:t])),`retryOfRequestLogID`in e&&(e.retryOfRequestLogID&&(e.retryOf=e.retryOfRequestLogID),delete e.retryOfRequestLogID),e),Tp=function(){let{crypto:e}=globalThis;if(e?.randomUUID)return Tp=e.randomUUID.bind(e),e.randomUUID();let t=new Uint8Array(1),n=e?()=>e.getRandomValues(t)[0]:()=>Math.random()*255&255;return`10000000-1000-4000-8000-100000000000`.replace(/[018]/g,e=>(+e^n()&15>>e/4).toString(16))},Ep=/^[A-Za-z0-9_.-]+$/;function Dp(e){if(!e)throw Error(`profile name is empty`);if(e===`.`||e===`..`)throw Error(`profile name "${e}" is not allowed`);if(e.includes(`/`)||e.includes(`\\`))throw Error(`profile name "${e}" must not contain path separators`);if(!Ep.test(e))throw Error(`profile name "${e}" contains disallowed characters (allowed: letters, digits, '_', '.', '-')`)}var Op=async e=>{var t,n;let r=await Ap();if(r===null)return null;let i=e??await Mp();if(i===null)return null;Dp(i);let{fs:a,path:o}=await Bf(async()=>{let{fs:e,path:t}=await import(`./node.browser-C46MKRAS.js`);return{fs:e,path:t}},[],import.meta.url),s=o.join(r,`configs`,`${i}.json`),c;try{c=await a.promises.readFile(s,`utf-8`)}catch(e){if(e?.code!==`ENOENT`)throw Error(`failed to read config file ${s}: ${e}`);c=null}if(c===null){let e=ip(`ANTHROPIC_ORGANIZATION_ID`),t=ip(`ANTHROPIC_IDENTITY_TOKEN_FILE`),n=ip(`ANTHROPIC_FEDERATION_RULE_ID`);return n&&e?{fromFile:!1,config:{organization_id:e,workspace_id:ip(`ANTHROPIC_WORKSPACE_ID`),base_url:ip(`ANTHROPIC_BASE_URL`),authentication:{type:`oidc_federation`,federation_rule_id:n,service_account_id:ip(`ANTHROPIC_SERVICE_ACCOUNT_ID`),identity_token:t?{source:`file`,path:t}:void 0,scope:ip(`ANTHROPIC_SCOPE`)}}}:null}let l;try{l=JSON.parse(c)}catch(e){throw Error(`failed to parse config file ${s}: ${e}`)}if(!l.authentication)throw Error(`config file ${s} is missing "authentication"`);let u=l.authentication.type;if(u!==`oidc_federation`&&u!==`user_oauth`)throw Error(`authentication.type "${u}" is not a known authentication type`);if(l.organization_id??(l.organization_id=ip(`ANTHROPIC_ORGANIZATION_ID`)),l.workspace_id??(l.workspace_id=ip(`ANTHROPIC_WORKSPACE_ID`)),l.base_url??(l.base_url=ip(`ANTHROPIC_BASE_URL`)),(t=l.authentication).scope??(t.scope=ip(`ANTHROPIC_SCOPE`)),l.authentication.type===`oidc_federation`){if(!l.authentication.identity_token){let e=ip(`ANTHROPIC_IDENTITY_TOKEN_FILE`);e&&(l.authentication.identity_token={source:`file`,path:e})}l.authentication.federation_rule_id||(l.authentication.federation_rule_id=ip(`ANTHROPIC_FEDERATION_RULE_ID`)??``),(n=l.authentication).service_account_id??(n.service_account_id=ip(`ANTHROPIC_SERVICE_ACCOUNT_ID`))}return{config:l,fromFile:!0}},kp=async(e,t)=>{if(e?.authentication.credentials_path)return e.authentication.credentials_path;let n=await Ap();if(!n)return null;let r=t??await Mp();if(!r)return null;Dp(r);let{path:i}=await Bf(async()=>{let{path:e}=await import(`./node.browser-C46MKRAS.js`);return{path:e}},[],import.meta.url);return i.join(n,`credentials`,`${r}.json`)},Ap=async()=>{if(!jp())return null;let{path:e}=await Bf(async()=>{let{path:e}=await import(`./node.browser-C46MKRAS.js`);return{path:e}},[],import.meta.url),t=ip(`ANTHROPIC_CONFIG_DIR`);if(t)return t;if(af()[`X-Stainless-OS`]===`Windows`){let t=ip(`APPDATA`);if(t)return e.join(t,`Anthropic`);let n=ip(`USERPROFILE`);return n?e.join(n,`AppData`,`Roaming`,`Anthropic`):null}let n=ip(`XDG_CONFIG_HOME`);if(n)return e.join(n,`anthropic`);let r=ip(`HOME`);return r?e.join(r,`.config`,`anthropic`):null},jp=()=>{let e=af()[`X-Stainless-Runtime`];return e===`node`||e===`deno`},Mp=async()=>{let e=await Ap();if(!e)return null;let t=ip(`ANTHROPIC_PROFILE`);if(t)return t;let{fs:n,path:r}=await Bf(async()=>{let{fs:e,path:t}=await import(`./node.browser-C46MKRAS.js`);return{fs:e,path:t}},[],import.meta.url),i=r.join(e,`active_config`);try{return(await n.promises.readFile(i,`utf-8`)).trim()||`default`}catch(e){if(e?.code!==`ENOENT`)throw Error(`failed to read ${i}: ${e}`);return`default`}};function Np(e){if(!e)throw new J(`Identity token file path is empty`);return async()=>{let{fs:t}=await Bf(async()=>{let{fs:e}=await import(`./node.browser-C46MKRAS.js`);return{fs:e}},[],import.meta.url),n;try{n=await t.promises.readFile(e,`utf-8`)}catch(t){throw new J(`Failed to read identity token file at ${e}: ${t}`)}let r=n.trim();if(!r)throw new J(`Identity token file at ${e} is empty`);return r}}function Pp(e){if(!e)throw new J(`Identity token value is empty`);return()=>e}function Fp(e){return async()=>{qf(e.baseURL);let t=await e.identityTokenProvider();if(t.length>16384)throw new tp(`Identity token is ${Math.ceil(t.length/1024)} KiB, exceeds the 16 KiB assertion limit`);let n={grant_type:Vf,assertion:t,federation_rule_id:e.federationRuleId,organization_id:e.organizationId};e.serviceAccountId&&(n.service_account_id=e.serviceAccountId),e.workspaceId&&(n.workspace_id=e.workspaceId);let r=`${e.baseURL}${Uf}`,i;try{i=await e.fetch(r,{method:`POST`,headers:{"Content-Type":`application/json`,"anthropic-beta":`${Wf},${Gf}`,"User-Agent":e.userAgent||`anthropic-sdk-typescript/0.129.0 oidcFederationProvider`},body:JSON.stringify(n)})}catch(e){throw new tp(`Failed to reach token endpoint ${r}: ${e}`)}let a=i.headers.get(`Request-Id`);if(!i.ok){let t=Zf(await i.text().catch(()=>``)),n=``;throw i.status===401&&(n=` Ensure your federation rule matches your identity token. ${e.workspaceId?``:"If your federation rule is scoped to multiple workspaces, set the ANTHROPIC_WORKSPACE_ID environment variable, the 'workspace_id' config key, or the `workspaceId` option. "}View your authentication events in the Workload identity page of Claude Console for more details.`),new tp(`Token exchange failed with status ${i.status}${a?` (request-id ${a})`:``}: ${t}${n}`,i.status,t,a)}let o=await Jf(i,a),s=Number(o.expires_in);if(!Number.isFinite(s))throw new tp(`Token endpoint response missing required fields: ${JSON.stringify(Zf(o))}`,i.status,Zf(o),a);return{token:o.access_token,expiresAt:np()+s}}}function Ip(e){return async t=>{let{fs:n}=await Bf(async()=>{let{fs:e}=await import(`./node.browser-C46MKRAS.js`);return{fs:e}},[],import.meta.url);await Qf(e.credentialsPath,e.onSafetyWarning);let r;try{r=await n.promises.readFile(e.credentialsPath,`utf-8`)}catch(t){throw new tp(`Credentials file not found at ${e.credentialsPath}: ${t}`)}let i;try{i=JSON.parse(r)}catch(t){throw new tp(`Credentials file at ${e.credentialsPath} is not valid JSON: ${t}`)}let a=i.access_token;if(!a)throw new tp(`Credentials file at ${e.credentialsPath} must include 'access_token'`);let o=i.expires_at;if(!t?.forceRefresh&&(o==null||np()<o-30))return{token:a,expiresAt:o??null};let s=i.refresh_token;if(!e.clientId||!s)throw new tp(`Access token at ${e.credentialsPath} has expired and no refresh is available (client_id ${e.clientId?`set`:`empty`}, refresh_token ${s?`set`:`empty`})`);qf(e.baseURL);let c={grant_type:Hf,refresh_token:s,client_id:e.clientId},l=`${e.baseURL}${Uf}`,u;try{u=await e.fetch(l,{method:`POST`,headers:{"Content-Type":`application/json`,"anthropic-beta":Wf,"User-Agent":e.userAgent||`anthropic-sdk-typescript/0.129.0 userOAuthProvider`},body:JSON.stringify(c)})}catch(e){throw new tp(`User OAuth refresh failed to reach token endpoint: ${e}`)}let d=u.headers.get(`Request-Id`);if(!u.ok){let e=await u.text().catch(()=>``);throw new tp(`User OAuth refresh failed (HTTP ${u.status}): ${Zf(e)}`,u.status,Zf(e),d)}let f=await Jf(u,d),p=Number(f.expires_in);if(!Number.isFinite(p))throw new tp(`User OAuth refresh response missing or invalid expires_in: ${JSON.stringify(Zf(f))}`,u.status,Zf(f),d);let m=np()+p,h=f.refresh_token||s;return await $f(e.credentialsPath,{...i,version:`1.0`,type:`oauth_token`,access_token:f.access_token,expires_at:m,refresh_token:h}),{token:f.access_token,expiresAt:m}}}function Lp(e,t){let n=zp(e,e.authentication.credentials_path??null,(e.base_url||t.baseURL).replace(/\/+$/,``),t),r={};return e.workspace_id&&e.authentication.type===`user_oauth`&&(r[`anthropic-workspace-id`]=e.workspace_id),{provider:n,extraHeaders:r,baseURL:e.base_url||void 0}}async function Rp(e,t){let n=await Op(t);if(!n)return null;let{config:r,fromFile:i}=n;return Lp(r.authentication.credentials_path||!i?r:{...r,authentication:{...r.authentication,credentials_path:await kp(r,t)??void 0}},e)}function zp(e,t,n,r){switch(e.authentication.type){case`oidc_federation`:{let i=e.authentication,a=Bp(i);if(!a)throw new tp(`oidc_federation config requires an identity token (set authentication.identity_token, ANTHROPIC_IDENTITY_TOKEN_FILE, or ANTHROPIC_IDENTITY_TOKEN)`);if(!i.federation_rule_id)throw new tp(`oidc_federation config requires 'federation_rule_id'. Set it in authentication.federation_rule_id in your profile, or via ANTHROPIC_FEDERATION_RULE_ID (profile takes precedence).`);if(!e.organization_id)throw new tp(`oidc_federation config requires organization_id (set ANTHROPIC_ORGANIZATION_ID or config.organization_id)`);let o=Fp({identityTokenProvider:a,federationRuleId:i.federation_rule_id,organizationId:e.organization_id,serviceAccountId:i.service_account_id,workspaceId:e.workspace_id,baseURL:n,fetch:r.fetch,userAgent:r.userAgent});return t?Vp(o,t,r.onCacheWriteError,r.onSafetyWarning):o}case`user_oauth`:if(!t)throw new tp(`user_oauth config requires authentication.credentials_path (or load via a profile so it defaults to <config_dir>/credentials/<profile>.json)`);return Ip({credentialsPath:t,clientId:e.authentication.client_id,baseURL:n,fetch:r.fetch,userAgent:r.userAgent,onSafetyWarning:r.onSafetyWarning});default:{let t=e.authentication.type;throw new tp(`authentication.type "${t}" is not a known authentication type`)}}}function Bp(e){if(e.identity_token){let t=e.identity_token.source;if(t!==`file`)throw new tp(`identity_token.source "${t}" is not supported by this SDK version (only "file")`);if(!e.identity_token.path)throw new tp(`identity_token.source "file" requires a non-empty path`);return Np(e.identity_token.path)}let t=ip(`ANTHROPIC_IDENTITY_TOKEN_FILE`);if(t)return Np(t);let n=ip(`ANTHROPIC_IDENTITY_TOKEN`);return n?Pp(n):null}function Vp(e,t,n,r){return async i=>{let{fs:a}=await Bf(async()=>{let{fs:e}=await import(`./node.browser-C46MKRAS.js`);return{fs:e}},[],import.meta.url);await Qf(t,r);let o;try{let e=await a.promises.readFile(t,`utf-8`);o=JSON.parse(e);let n=o?.access_token;if(n&&!i?.forceRefresh){let e=o?.expires_at;if(e==null||np()<e-30)return{token:n,expiresAt:e??null}}}catch(e){e?.code!==`ENOENT`&&!(e instanceof SyntaxError)&&n?.(e)}let s=await e(i);try{await $f(t,{...o??{},version:`1.0`,type:`oauth_token`,access_token:s.token,expires_at:s.expiresAt})}catch(e){n?.(e)}return s}}var Hp,Up,Wp=(()=>{class e{constructor(){Hp.set(this,void 0),Up.set(this,void 0),K(this,Hp,new Uint8Array,`f`),K(this,Up,null,`f`)}decode(e){if(e==null)return[];let t=e instanceof ArrayBuffer?new Uint8Array(e):typeof e==`string`?sp(e):e;K(this,Hp,ap([q(this,Hp,`f`),t]),`f`);let n=[],r;for(;(r=Gp(q(this,Hp,`f`),q(this,Up,`f`)))!=null;){if(r.carriage&&q(this,Up,`f`)==null){K(this,Up,r.index,`f`);continue}if(q(this,Up,`f`)!=null&&(r.index!==q(this,Up,`f`)+1||r.carriage)){n.push(lp(q(this,Hp,`f`).subarray(0,q(this,Up,`f`)-1))),K(this,Hp,q(this,Hp,`f`).subarray(q(this,Up,`f`)),`f`),K(this,Up,null,`f`);continue}let e=q(this,Up,`f`)===null?r.preceding:r.preceding-1,t=lp(q(this,Hp,`f`).subarray(0,e));n.push(t),K(this,Hp,q(this,Hp,`f`).subarray(r.index),`f`),K(this,Up,null,`f`)}return n}flush(){return q(this,Hp,`f`).length?this.decode(`
`):[]}}return Hp=new WeakMap,Up=new WeakMap,e.NEWLINE_CHARS=new Set([`
`,`\r`]),e.NEWLINE_REGEXP=/\r\n|[\n\r]/g,e})();function Gp(e,t){for(let n=t??0;n<e.length;n++){if(e[n]===10)return{preceding:n,index:n+1,carriage:!1};if(e[n]===13)return{preceding:n,index:n+1,carriage:!0}}return null}var Kp,qp=(()=>{class e{constructor(e,t,n){this.iterator=e,Kp.set(this,void 0),this.controller=t,K(this,Kp,n,`f`)}static rawEvents(e,t=new AbortController){return Jp(e,t)}static fromSSEResponse(t,n,r){let i=!1,a=r?yp(r):console;async function*o(){if(i)throw new J("Cannot iterate over a consumed stream, use `.tee()` to split the stream.");i=!0;let e=!1;try{for await(let e of Jp(t,n)){if(e.event===`completion`)try{yield JSON.parse(e.data)}catch(t){throw a.error(`Could not parse message into JSON:`,e.data),a.error(`From chunk:`,e.raw),t}if(e.event===`message_start`||e.event===`message_delta`||e.event===`message_stop`||e.event===`content_block_start`||e.event===`content_block_delta`||e.event===`content_block_stop`||e.event===`message`||e.event===`user.message`||e.event===`user.interrupt`||e.event===`user.tool_confirmation`||e.event===`user.custom_tool_result`||e.event===`user.tool_result`||e.event===`agent.message`||e.event===`agent.thinking`||e.event===`agent.tool_use`||e.event===`agent.tool_result`||e.event===`agent.mcp_tool_use`||e.event===`agent.mcp_tool_result`||e.event===`agent.custom_tool_use`||e.event===`agent.thread_context_compacted`||e.event===`session.status_running`||e.event===`session.status_idle`||e.event===`session.status_rescheduled`||e.event===`session.status_terminated`||e.event===`session.error`||e.event===`session.deleted`||e.event===`session.updated`||e.event===`span.model_request_start`||e.event===`span.model_request_end`||e.event===`span.outcome_evaluation_start`||e.event===`span.outcome_evaluation_ongoing`||e.event===`span.outcome_evaluation_end`||e.event===`user.define_outcome`||e.event===`agent.thread_message_received`||e.event===`agent.thread_message_sent`||e.event===`agent.session_thread_message_received`||e.event===`agent.session_thread_message_sent`||e.event===`session.thread_created`||e.event===`session.thread_status_created`||e.event===`session.thread_status_running`||e.event===`session.thread_status_idle`||e.event===`session.thread_status_rescheduled`||e.event===`session.thread_status_terminated`||e.event===`event_start`||e.event===`event_delta`||e.event===`system.message`)try{yield JSON.parse(e.data)}catch(t){throw a.error(`Could not parse message into JSON:`,e.data),a.error(`From chunk:`,e.raw),t}if(e.event!==`ping`&&e.event===`error`){let n=Jd(e.data)??e.data,r=n?.error?.type;throw new Ed(void 0,n,void 0,t.headers,r)}}e=!0}catch(e){if(wd(e))return;throw e}finally{e||n.abort(),df(n)}}return new e(o,n,r)}static fromReadableStream(t,n,r){let i=!1;async function*a(){let e=new Wp,n=hf(t);for await(let t of n)for(let n of e.decode(t))yield n;for(let t of e.flush())yield t}async function*o(){if(i)throw new J("Cannot iterate over a consumed stream, use `.tee()` to split the stream.");i=!0;let e=!1;try{for await(let t of a())e||t&&(yield JSON.parse(t));e=!0}catch(e){if(wd(e))return;throw e}finally{e||n.abort(),df(n)}}return new e(o,n,r)}[(Kp=new WeakMap,Symbol.asyncIterator)](){return this.iterator()}tee(){let t=[],n=[],r=this.iterator(),i=e=>({next:()=>{if(e.length===0){let e=r.next();t.push(e),n.push(e)}return e.shift()}});return[new e(()=>i(t),this.controller,q(this,Kp,`f`)),new e(()=>i(n),this.controller,q(this,Kp,`f`))]}toReadableStream(){let e=this,t;return pf({async start(){t=e[Symbol.asyncIterator]()},async pull(e){try{let{value:n,done:r}=await t.next();if(r)return e.close();let i=sp(JSON.stringify(n)+`
`);e.enqueue(i)}catch(t){e.error(t)}},async cancel(){await t.return?.()}})}}return e})();async function*Jp(e,t){if(!e.body)throw t.abort(),globalThis.navigator!==void 0&&globalThis.navigator.product===`ReactNative`?new J(`The default react-native fetch implementation does not support streaming. Please use expo/fetch: https://docs.expo.dev/versions/latest/sdk/expo/#expofetch-api`):new J(`Attempted to iterate over a response with no body`);let n=new Yp,r=new Wp,i=hf(e.body);for await(let e of i)for(let t of r.decode(e)){let e=n.decode(t);e&&(yield e)}for(let e of r.flush()){let t=n.decode(e);t&&(yield t)}}var Yp=class{constructor(){this.event=null,this.data=[],this.chunks=[]}decode(e){if(e.endsWith(`\r`)&&(e=e.substring(0,e.length-1)),!e){if(!this.event&&!this.data.length)return null;let e={event:this.event,data:this.data.join(`
`),raw:this.chunks};return this.event=null,this.data=[],this.chunks=[],e}if(this.chunks.push(e),e.startsWith(`:`))return null;let[t,n,r]=Xp(e,`:`);return r.startsWith(` `)&&(r=r.substring(1)),t===`event`?this.event=r:t===`data`&&this.data.push(r),null}};function Xp(e,t){let n=e.indexOf(t);return n===-1?[e,``,``]:[e.substring(0,n),t,e.substring(n+t.length)]}async function Zp(e,t){let{response:n,requestLogID:r,retryOfRequestLogID:i,startTime:a}=t,o=await(async()=>{if(t.options.stream)return yp(e).debug(`response`,n.status,n.url,n.headers,n.body),qp.fromSSEResponse(n,t.controller,e);if(n.status===204)return null;if(t.options.__binaryResponse)return n;let r=n.headers.get(`content-type`)?.split(`;`)[0]?.trim();return r?.includes(`application/json`)||r?.endsWith(`+json`)?n.headers.get(`content-length`)===`0`?void 0:Qp(await n.json(),n):await n.text()})().finally(()=>{!t.options.stream&&!t.options.__binaryResponse&&df(t.controller)});return Cp(yp(e),`[${r}] response parsed`,{retryOfRequestLogID:i,url:n.url,status:n.status,body:o,durationMs:Date.now()-a}),o}function Qp(e,t){return!e||typeof e!=`object`||Array.isArray(e)?e:Object.defineProperties(e,{_request_id:{value:t.headers.get(`request-id`),enumerable:!1},_workspace_id:{value:t.headers.get(`anthropic-workspace-id`),enumerable:!1}})}var $p=new WeakSet;function em(e){return typeof e==`object`&&!!e&&$p.has(e)}function tm(e){let t=new Set;for(;typeof e==`object`&&e&&!t.has(e);){if(t.add(e),em(e)||wd(e)||e instanceof Od||e instanceof Ad)return!0;e=e.cause}return!1}function nm(e,t,n,r){return async(i,a={})=>{if(t.length===0)return e.call(void 0,i,a);let o=a.headers instanceof Headers?a.headers:new Headers(a.headers),s=await am(e,t,n,r)({...a,headers:o,url:typeof i==`string`?i:i instanceof URL?i.href:i.url});if(s.bodyUsed||s.body?.locked)throw new J(`middleware consumed the response body; use response.clone() to inspect it, or return new Response(body, response) to consume and replace it`);return s}}function rm(e,t){let n=new WeakMap;return{options:e,logger:t?yp(t):Sp(),parse(r){if(e?.stream&&r.ok)return im(r,e,t);let i=n.get(r);return i||(i=im(r,e,t),n.set(r,i)),i}}}async function im(e,t,n){if(e.bodyUsed||e.body?.locked)throw new J(`cannot ctx.parse() a response whose body was already consumed; call ctx.parse() instead of reading the body, or read via response.clone()`);if(t?.stream&&e.ok)return qp.fromSSEResponse(e.clone(),new AbortController,n);if(e.status===204)return null;if(t?.__binaryResponse)return e;let r=e.headers.get(`content-type`)?.split(`;`)[0]?.trim();return r?.includes(`application/json`)||r?.endsWith(`+json`)?e.headers.get(`content-length`)===`0`?void 0:Qp(await e.clone().json(),e):await e.clone().text()}function am(e,t,n,r){let i=async({url:t,...n})=>{try{return await e.call(void 0,t,n)}catch(e){let t=Td(e);throw $p.add(t),t}},a=rm(n,r);for(let e=t.length-1;e>=0;e--){let n=t[e],r=i;i=async e=>n(e,r,a)}return i}var om,sm=(()=>{class e extends Promise{constructor(e,t,n=Zp){super(e=>{e(null)}),this.responsePromise=t,this.parseResponse=n,om.set(this,void 0),K(this,om,e,`f`)}_thenUnwrap(t){return new e(q(this,om,`f`),this.responsePromise,async(e,n)=>Qp(t(await this.parseResponse(e,n),n),n.response))}asResponse(){return this.responsePromise.then(e=>e.response)}async withResponse(){let[e,t]=await Promise.all([this.parse(),this.asResponse()]);return{data:e,response:t,request_id:t.headers.get(`request-id`),workspace_id:t.headers.get(`anthropic-workspace-id`)}}parse(){return this.parsedPromise||=this.responsePromise.then(e=>this.parseResponse(q(this,om,`f`),e)),this.parsedPromise}then(e,t){return this.parse().then(e,t)}catch(e){return this.parse().catch(e)}finally(e){return this.parse().finally(e)}}return om=new WeakMap,e})(),cm,lm=(()=>{class e{constructor(e,t,n,r){cm.set(this,void 0),K(this,cm,e,`f`),this.options=r,this.response=t,this.body=n}hasNextPage(){return this.getPaginatedItems().length?this.nextPageRequestOptions()!=null:!1}async getNextPage(){let e=this.nextPageRequestOptions();if(!e)throw new J("No next page expected; please check `.hasNextPage()` before calling `.getNextPage()`.");return await q(this,cm,`f`).requestAPIList(this.constructor,e)}async*iterPages(){let e=this;for(yield e;e.hasNextPage();)e=await e.getNextPage(),yield e}async*[(cm=new WeakMap,Symbol.asyncIterator)](){for await(let e of this.iterPages())for(let t of e.getPaginatedItems())yield t}}return e})(),um=(()=>{class e extends sm{constructor(e,t,n){super(e,t,async(e,t)=>new n(e,t.response,await Zp(e,t),t.options))}async*[Symbol.asyncIterator](){let e=await this;for await(let t of e)yield t}}return e})(),dm=class extends lm{constructor(e,t,n,r){super(e,t,n,r),this.data=n.data||[],this.has_more=n.has_more||!1,this.first_id=n.first_id||null,this.last_id=n.last_id||null}getPaginatedItems(){return this.data??[]}hasNextPage(){return this.has_more!==!1&&super.hasNextPage()}nextPageRequestOptions(){if(this.options.query?.before_id){let e=this.first_id;return e?{...this.options,query:{...Ud(this.options.query),before_id:e}}:null}let e=this.last_id;return e?{...this.options,query:{...Ud(this.options.query),after_id:e}}:null}},fm=class extends lm{constructor(e,t,n,r){super(e,t,n,r),this.data=n.data||[],this.next_page=n.next_page||null}getPaginatedItems(){return this.data??[]}nextPageRequestOptions(){let e=this.next_page;return e?{...this.options,query:{...Ud(this.options.query),page:e}}:null}},pm=class extends lm{constructor(e,t,n,r){super(e,t,n,r),this.data=n.data||[],this.next_page=n.next_page||null,this.prev_page=n.prev_page||null}getPaginatedItems(){return this.data??[]}nextPageRequestOptions(){let e=this.next_page;return e?{...this.options,query:{...Ud(this.options.query),page:e}}:null}},mm=()=>{if(typeof File>`u`){let{process:e}=globalThis,t=typeof e?.versions?.node==`string`&&parseInt(e.versions.node.split(`.`))<20;throw Error("`File` is not defined as a global, which is required for file uploads."+(t?" Update to Node 20 LTS or newer, or set `globalThis.File` to `import('node:buffer').File`.":``))}};function hm(e,t,n){return mm(),new File(e,t??``,n)}function gm(e,t){let n=typeof e==`object`&&!!e&&(`name`in e&&e.name&&String(e.name)||`url`in e&&e.url&&String(e.url)||`filename`in e&&e.filename&&String(e.filename)||`path`in e&&e.path&&String(e.path))||``;return t?n.split(/[\\/]/).pop()||void 0:n}var _m=e=>typeof e==`object`&&!!e&&typeof e[Symbol.asyncIterator]==`function`,vm=async(e,t,n=!0)=>({...e,body:await xm(e.body,t,n)}),ym=new WeakMap;function bm(e){let t=typeof e==`function`?e:e.fetch,n=ym.get(t);if(n)return n;let r=(async()=>{try{let e=`Response`in t?t.Response:(await t(`data:,`)).constructor,n=new FormData;return n.toString()!==await new e(n).text()}catch{return!0}})();return ym.set(t,r),r}var xm=async(e,t,n=!0)=>{if(!await bm(t))throw TypeError(`The provided fetch function does not support file uploads with the current global FormData class.`);let r=new FormData;return await Promise.all(Object.entries(e||{}).map(([e,t])=>Sm(r,e,t,n))),r},Sm=async(e,t,n,r)=>{if(n!==void 0){if(n==null)throw TypeError(`Received null for "${t}"; to pass null in FormData, you must use the string 'null'`);if(typeof n==`string`||typeof n==`number`||typeof n==`boolean`)e.append(t,String(n));else if(n instanceof Response){let i={},a=n.headers.get(`Content-Type`);a&&(i={type:a}),e.append(t,hm([await n.blob()],gm(n,r),i))}else if(_m(n))e.append(t,hm([await new Response(mf(n)).blob()],gm(n,r)));else if(n instanceof Blob){let i=typeof File<`u`&&n instanceof File?n.name:gm(n,r);e.append(t,hm([n],i,{type:n.type}))}else if(Array.isArray(n))await Promise.all(n.map(n=>Sm(e,t+`[]`,n,r)));else if(typeof n.then==`function`)throw TypeError(`Received a Promise for "${t}"; await it first, e.g. \`await toFile(...)\``);else if(n instanceof ArrayBuffer||ArrayBuffer.isView(n))throw TypeError(`Received ${n.constructor.name} for "${t}"; to upload raw bytes, wrap them with \`await toFile(bytes, 'filename')\``);else if(typeof n==`object`)await Promise.all(Object.entries(n).map(([n,i])=>Sm(e,`${t}[${n}]`,i,r)));else throw TypeError(`Invalid value given to form, expected a string, number, boolean, object, Array, File or Blob but got ${n} instead`)}},Cm=e=>typeof e==`object`&&!!e&&typeof e.size==`number`&&typeof e.type==`string`&&typeof e.text==`function`&&typeof e.slice==`function`&&typeof e.arrayBuffer==`function`,wm=e=>typeof e==`object`&&!!e&&typeof e.name==`string`&&typeof e.lastModified==`number`&&Cm(e),Tm=e=>typeof e==`object`&&!!e&&typeof e.url==`string`&&typeof e.blob==`function`;async function Em(e,t,n){if(mm(),e=await e,t||=e instanceof File?e.name:gm(e,!0),wm(e))return e instanceof File&&t==null&&n==null?e:hm([await e.arrayBuffer()],t??e.name,{type:e.type,lastModified:e.lastModified,...n});if(Tm(e)){let r=await e.blob();return t||=new URL(e.url).pathname.split(/[\\/]/).pop(),hm(await Dm(r),t,n)}let r=await Dm(e);if(!n?.type){let e=r.find(e=>typeof e==`object`&&`type`in e&&e.type);typeof e==`string`&&(n={...n,type:e})}return hm(r,t,n)}async function Dm(e){let t=[];if(typeof e==`string`||ArrayBuffer.isView(e)||e instanceof ArrayBuffer)t.push(e);else if(Cm(e))t.push(e instanceof Blob?e:await e.arrayBuffer());else if(_m(e))for await(let n of e)t.push(...await Dm(n));else{let t=e?.constructor?.name;throw Error(`Unexpected data type: ${typeof e}${t?`; constructor: ${t}`:``}${Om(e)}`)}return t}function Om(e){return typeof e!=`object`||!e?``:`; props: [${Object.getOwnPropertyNames(e).map(e=>`"${e}"`).join(`, `)}]`}var Y=class{constructor(e){this._client=e}},km=Symbol.for(`brand.privateNullableHeaders`);function*Am(e){if(!e)return;if(km in e){let{values:t,nulls:n}=e;yield*t.entries();for(let e of n)yield[e,null];return}let t=!1,n;e instanceof Headers?n=e.entries():Hd(e)?n=e:(t=!0,n=Object.entries(e??{}));for(let e of n){let n=e[0];if(typeof n!=`string`)throw TypeError(`expected header name to be a string`);let r=Hd(e[1])?e[1]:[e[1]],i=!1;for(let e of r)e!==void 0&&(t&&!i&&(i=!0,yield[n,jm]),yield[n,e])}}var jm=Symbol(`clear`),Mm=new Set([`x-stainless-helper`]),Nm=(e,t)=>{let n=e?e.split(`,`).map(e=>e.trim()).filter(Boolean):[];for(let e of t.split(`,`).map(e=>e.trim()))e&&!n.includes(e)&&n.push(e);return n.join(`, `)},X=e=>{let t=new Headers,n=new Set;for(let r of e){let e=new Set;for(let[i,a]of Am(r)){let r=i.toLowerCase();if(Mm.has(r)){if(a===jm)continue;a===null?(t.delete(i),n.add(r)):(t.set(i,Nm(t.get(i),a)),n.delete(r));continue}(a===jm||!e.has(r))&&(t.delete(i),e.add(r),a===jm)||(a===null?(t.delete(i),n.add(r)):(t.append(i,a),n.delete(r)))}}return{[km]:!0,values:t,nulls:n}};function Pm(e){return e.replace(/[^A-Za-z0-9\-._~!$&'()*+,;=:@]+/g,encodeURIComponent)}var Fm=Object.freeze(Object.create(null)),Z=((e=Pm)=>function(t,...n){if(t.length===1)return t[0];let r=!1,i=[],a=t.reduce((t,a,o)=>{/[?#]/.test(a)&&(r=!0);let s=n[o],c=(r?encodeURIComponent:e)(``+s);return o!==n.length&&(s==null||typeof s==`object`&&s.toString===Object.getPrototypeOf(Object.getPrototypeOf(s.hasOwnProperty??Fm)??Fm)?.toString)&&(c=s+``,i.push({start:t.length+a.length,length:c.length,error:`Value of type ${Object.prototype.toString.call(s).slice(8,-1)} is not a valid path parameter`})),t+a+(o===n.length?``:c)},``),o=a.split(/[?#]/,1)[0],s=/(?<=^|\/)(?:\.|%2e){1,2}(?=\/|$)/gi,c;for(;(c=s.exec(o))!==null;)i.push({start:c.index,length:c[0].length,error:`Value "${c[0]}" can\'t be safely passed as a path parameter`});if(i.sort((e,t)=>e.start-t.start),i.length>0){let e=0,t=i.reduce((t,n)=>{let r=` `.repeat(n.start-e),i=`^`.repeat(n.length);return e=n.start+n.length,t+r+i},``);throw new J(`Path parameters result in path with invalid segments:\n${i.map(e=>e.error).join(`
`)}\n${a}\n${t}`)}return a})(Pm),Im=class extends Y{retrieve(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.get(Z`/v1/deployment_runs/${e}?beta=true`,{...n,headers:X([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}list(e={},t){let{betas:n,workspace_id:r,...i}=e??{};return this._client.getAPIList(`/v1/deployment_runs?beta=true`,fm,{query:i,...t,headers:X([{"anthropic-beta":[...n??[],`managed-agents-2026-04-01`].toString(),...r==null?void 0:{"anthropic-workspace-id":r}},t?.headers])})}},Lm=class extends Y{create(e,t){let{betas:n,workspace_id:r,...i}=e;return this._client.post(`/v1/deployments?beta=true`,{body:i,...t,headers:X([{"anthropic-beta":[...n??[],`managed-agents-2026-04-01`].toString(),...r==null?void 0:{"anthropic-workspace-id":r}},t?.headers])})}retrieve(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.get(Z`/v1/deployments/${e}?beta=true`,{...n,headers:X([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}update(e,t,n){let{betas:r,workspace_id:i,...a}=t;return this._client.post(Z`/v1/deployments/${e}?beta=true`,{body:a,...n,headers:X([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}list(e={},t){let{betas:n,workspace_id:r,...i}=e??{};return this._client.getAPIList(`/v1/deployments?beta=true`,fm,{query:i,...t,headers:X([{"anthropic-beta":[...n??[],`managed-agents-2026-04-01`].toString(),...r==null?void 0:{"anthropic-workspace-id":r}},t?.headers])})}archive(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.post(Z`/v1/deployments/${e}/archive?beta=true`,{...n,headers:X([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}pause(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.post(Z`/v1/deployments/${e}/pause?beta=true`,{...n,headers:X([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}run(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.post(Z`/v1/deployments/${e}/run?beta=true`,{...n,headers:X([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}unpause(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.post(Z`/v1/deployments/${e}/unpause?beta=true`,{...n,headers:X([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}},Rm=class extends Y{create(e,t){let{betas:n,workspace_id:r,...i}=e;return this._client.post(`/v1/dreams?beta=true`,{body:i,...t,headers:X([{"anthropic-beta":[...n??[],`dreaming-2026-04-21`].toString(),...r==null?void 0:{"anthropic-workspace-id":r}},t?.headers])})}retrieve(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.get(Z`/v1/dreams/${e}?beta=true`,{...n,headers:X([{"anthropic-beta":[...r??[],`dreaming-2026-04-21`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}list(e={},t){let{betas:n,workspace_id:r,...i}=e??{};return this._client.getAPIList(`/v1/dreams?beta=true`,fm,{query:i,...t,headers:X([{"anthropic-beta":[...n??[],`dreaming-2026-04-21`].toString(),...r==null?void 0:{"anthropic-workspace-id":r}},t?.headers])})}archive(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.post(Z`/v1/dreams/${e}/archive?beta=true`,{...n,headers:X([{"anthropic-beta":[...r??[],`dreaming-2026-04-21`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}cancel(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.post(Z`/v1/dreams/${e}/cancel?beta=true`,{...n,headers:X([{"anthropic-beta":[...r??[],`dreaming-2026-04-21`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}},zm=`x-stainless-helper`,Bm=`x-stainless-helper-method`;function Vm(e){return{[zm]:e}}var Hm=Symbol(`anthropic.sdk.stainlessHelper`);function Um(e){return typeof e==`object`&&!!e&&Hm in e}function Wm(e,t){let n=new Set;if(e)for(let t of e)Um(t)&&n.add(t[Hm]);if(t)for(let e of t){Um(e)&&n.add(e[Hm]);let t=e.content;if(Array.isArray(t))for(let e of t){Um(e)&&n.add(e[Hm]);let t=e?.tool?.definition;Um(t)&&n.add(t[Hm])}}return Array.from(n)}function Gm(e,t){let n=Wm(e,t);return n.length===0?{}:{[zm]:n.join(`, `)}}function Km(e){return Um(e)?{[zm]:e[Hm]}:{}}var qm=class extends Y{list(e={},t){let{betas:n,workspace_id:r,...i}=e??{};return this._client.getAPIList(`/v1/files?beta=true`,fm,{query:i,...t,headers:X([{...n?.toString()==null?void 0:{"anthropic-beta":n?.toString()},...r==null?void 0:{"anthropic-workspace-id":r}},t?.headers])})}delete(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.delete(Z`/v1/files/${e}?beta=true`,{...n,headers:X([{...r?.toString()==null?void 0:{"anthropic-beta":r?.toString()},...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}download(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.get(Z`/v1/files/${e}/content?beta=true`,{...n,headers:X([{Accept:`application/binary`,...r?.toString()==null?void 0:{"anthropic-beta":r?.toString()},...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers]),__binaryResponse:!0})}retrieveMetadata(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.get(Z`/v1/files/${e}?beta=true`,{...n,headers:X([{...r?.toString()==null?void 0:{"anthropic-beta":r?.toString()},...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}upload(e,t){let{betas:n,workspace_id:r,...i}=e;return this._client.post(`/v1/files?beta=true`,vm({body:i,...t,headers:X([{...n?.toString()==null?void 0:{"anthropic-beta":n?.toString()},...r==null?void 0:{"anthropic-workspace-id":r}},Km(i.file),t?.headers])},this._client))}},Jm=class extends Y{retrieve(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.get(Z`/v1/models/${e}?beta=true`,{...n,headers:X([{...r?.toString()==null?void 0:{"anthropic-beta":r?.toString()},...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}list(e={},t){let{betas:n,workspace_id:r,...i}=e??{};return this._client.getAPIList(`/v1/models?beta=true`,dm,{query:i,...t,headers:X([{...n?.toString()==null?void 0:{"anthropic-beta":n?.toString()},...r==null?void 0:{"anthropic-workspace-id":r}},t?.headers])})}},Ym=class extends Y{create(e,t){let{betas:n,workspace_id:r,...i}=e;return this._client.post(`/v1/user_profiles?beta=true`,{body:i,...t,headers:X([{"anthropic-beta":[...n??[],`user-profiles-2026-08-18`].toString(),...r==null?void 0:{"anthropic-workspace-id":r}},t?.headers])})}retrieve(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.get(Z`/v1/user_profiles/${e}?beta=true`,{...n,headers:X([{"anthropic-beta":[...r??[],`user-profiles-2026-08-18`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}update(e,t,n){let{betas:r,workspace_id:i,...a}=t;return this._client.post(Z`/v1/user_profiles/${e}?beta=true`,{body:a,...n,headers:X([{"anthropic-beta":[...r??[],`user-profiles-2026-08-18`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}list(e={},t){let{betas:n,workspace_id:r,...i}=e??{};return this._client.getAPIList(`/v1/user_profiles?beta=true`,fm,{query:i,...t,headers:X([{"anthropic-beta":[...n??[],`user-profiles-2026-08-18`].toString(),...r==null?void 0:{"anthropic-workspace-id":r}},t?.headers])})}createEnrollmentURL(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.post(Z`/v1/user_profiles/${e}/enrollment_url?beta=true`,{...n,headers:X([{"anthropic-beta":[...r??[],`user-profiles-2026-08-18`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}},Xm=e((e=>{var t=e&&e.__extends||(function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},e(t,n)};return function(t,n){e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}})();Object.defineProperty(e,"__esModule",{value:!0});var n=256,r=function(){function e(e){e===void 0&&(e=`=`),this._paddingCharacter=e}return e.prototype.encodedLength=function(e){return this._paddingCharacter?(e+2)/3*4|0:(e*8+5)/6|0},e.prototype.encode=function(e){for(var t=``,n=0;n<e.length-2;n+=3){var r=e[n]<<16|e[n+1]<<8|e[n+2];t+=this._encodeByte(r>>>18&63),t+=this._encodeByte(r>>>12&63),t+=this._encodeByte(r>>>6&63),t+=this._encodeByte(r>>>0&63)}var i=e.length-n;if(i>0){var r=e[n]<<16|(i===2?e[n+1]<<8:0);t+=this._encodeByte(r>>>18&63),t+=this._encodeByte(r>>>12&63),t+=i===2?this._encodeByte(r>>>6&63):this._paddingCharacter||``,t+=this._paddingCharacter||``}return t},e.prototype.maxDecodedLength=function(e){return this._paddingCharacter?e/4*3|0:(e*6+7)/8|0},e.prototype.decodedLength=function(e){return this.maxDecodedLength(e.length-this._getPaddingLength(e))},e.prototype.decode=function(e){if(e.length===0)return new Uint8Array;for(var t=this._getPaddingLength(e),r=e.length-t,i=new Uint8Array(this.maxDecodedLength(r)),a=0,o=0,s=0,c=0,l=0,u=0,d=0;o<r-4;o+=4)c=this._decodeChar(e.charCodeAt(o+0)),l=this._decodeChar(e.charCodeAt(o+1)),u=this._decodeChar(e.charCodeAt(o+2)),d=this._decodeChar(e.charCodeAt(o+3)),i[a++]=c<<2|l>>>4,i[a++]=l<<4|u>>>2,i[a++]=u<<6|d,s|=c&n,s|=l&n,s|=u&n,s|=d&n;if(o<r-1&&(c=this._decodeChar(e.charCodeAt(o)),l=this._decodeChar(e.charCodeAt(o+1)),i[a++]=c<<2|l>>>4,s|=c&n,s|=l&n),o<r-2&&(u=this._decodeChar(e.charCodeAt(o+2)),i[a++]=l<<4|u>>>2,s|=u&n),o<r-3&&(d=this._decodeChar(e.charCodeAt(o+3)),i[a++]=u<<6|d,s|=d&n),s!==0)throw Error(`Base64Coder: incorrect characters for decoding`);return i},e.prototype._encodeByte=function(e){var t=e;return t+=65,t+=25-e>>>8&6,t+=51-e>>>8&-75,t+=61-e>>>8&-15,t+=62-e>>>8&3,String.fromCharCode(t)},e.prototype._decodeChar=function(e){var t=n;return t+=(42-e&e-44)>>>8&-n+e-43+62,t+=(46-e&e-48)>>>8&-n+e-47+63,t+=(47-e&e-58)>>>8&-n+e-48+52,t+=(64-e&e-91)>>>8&-n+e-65+0,t+=(96-e&e-123)>>>8&-n+e-97+26,t},e.prototype._getPaddingLength=function(e){var t=0;if(this._paddingCharacter){for(var n=e.length-1;n>=0&&e[n]===this._paddingCharacter;n--)t++;if(e.length<4||t>2)throw Error(`Base64Coder: incorrect padding`)}return t},e}();e.Coder=r;var i=new r;function a(e){return i.encode(e)}e.encode=a;function o(e){return i.decode(e)}e.decode=o;var s=function(e){t(r,e);function r(){return e!==null&&e.apply(this,arguments)||this}return r.prototype._encodeByte=function(e){var t=e;return t+=65,t+=25-e>>>8&6,t+=51-e>>>8&-75,t+=61-e>>>8&-13,t+=62-e>>>8&49,String.fromCharCode(t)},r.prototype._decodeChar=function(e){var t=n;return t+=(44-e&e-46)>>>8&-n+e-45+62,t+=(94-e&e-96)>>>8&-n+e-95+63,t+=(47-e&e-58)>>>8&-n+e-48+52,t+=(64-e&e-91)>>>8&-n+e-65+0,t+=(96-e&e-123)>>>8&-n+e-97+26,t},r}(r);e.URLSafeCoder=s;var c=new s;function l(e){return c.encode(e)}e.encodeURLSafe=l;function u(e){return c.decode(e)}e.decodeURLSafe=u,e.encodedLength=function(e){return i.encodedLength(e)},e.maxDecodedLength=function(e){return i.maxDecodedLength(e)},e.decodedLength=function(e){return i.decodedLength(e)}})),Zm=e(((e,t)=>{(function(e,n){var r={};n(r);var i=r.default;for(var a in r)i[a]=r[a];typeof t==`object`&&typeof t.exports==`object`?t.exports=i:typeof define==`function`&&define.amd?define(function(){return i}):e.sha256=i})(e,function(e){e.__esModule=!0,e.digestLength=32,e.blockSize=64;var t=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]);function n(e,n,r,i,a){for(var o,s,c,l,u,d,f,p,m,h,g,_,v;a>=64;){for(o=n[0],s=n[1],c=n[2],l=n[3],u=n[4],d=n[5],f=n[6],p=n[7],h=0;h<16;h++)g=i+h*4,e[h]=(r[g]&255)<<24|(r[g+1]&255)<<16|(r[g+2]&255)<<8|r[g+3]&255;for(h=16;h<64;h++)m=e[h-2],_=(m>>>17|m<<15)^(m>>>19|m<<13)^m>>>10,m=e[h-15],v=(m>>>7|m<<25)^(m>>>18|m<<14)^m>>>3,e[h]=(_+e[h-7]|0)+(v+e[h-16]|0);for(h=0;h<64;h++)_=(((u>>>6|u<<26)^(u>>>11|u<<21)^(u>>>25|u<<7))+(u&d^~u&f)|0)+(p+(t[h]+e[h]|0)|0)|0,v=((o>>>2|o<<30)^(o>>>13|o<<19)^(o>>>22|o<<10))+(o&s^o&c^s&c)|0,p=f,f=d,d=u,u=l+_|0,l=c,c=s,s=o,o=_+v|0;n[0]+=o,n[1]+=s,n[2]+=c,n[3]+=l,n[4]+=u,n[5]+=d,n[6]+=f,n[7]+=p,i+=64,a-=64}return i}var r=function(){function t(){this.digestLength=e.digestLength,this.blockSize=e.blockSize,this.state=new Int32Array(8),this.temp=new Int32Array(64),this.buffer=new Uint8Array(128),this.bufferLength=0,this.bytesHashed=0,this.finished=!1,this.reset()}return t.prototype.reset=function(){return this.state[0]=1779033703,this.state[1]=3144134277,this.state[2]=1013904242,this.state[3]=2773480762,this.state[4]=1359893119,this.state[5]=2600822924,this.state[6]=528734635,this.state[7]=1541459225,this.bufferLength=0,this.bytesHashed=0,this.finished=!1,this},t.prototype.clean=function(){for(var e=0;e<this.buffer.length;e++)this.buffer[e]=0;for(var e=0;e<this.temp.length;e++)this.temp[e]=0;this.reset()},t.prototype.update=function(e,t){if(t===void 0&&(t=e.length),this.finished)throw Error(`SHA256: can't update because hash was finished.`);var r=0;if(this.bytesHashed+=t,this.bufferLength>0){for(;this.bufferLength<64&&t>0;)this.buffer[this.bufferLength++]=e[r++],t--;this.bufferLength===64&&(n(this.temp,this.state,this.buffer,0,64),this.bufferLength=0)}for(t>=64&&(r=n(this.temp,this.state,e,r,t),t%=64);t>0;)this.buffer[this.bufferLength++]=e[r++],t--;return this},t.prototype.finish=function(e){if(!this.finished){var t=this.bytesHashed,r=this.bufferLength,i=t/536870912|0,a=t<<3,o=t%64<56?64:128;this.buffer[r]=128;for(var s=r+1;s<o-8;s++)this.buffer[s]=0;this.buffer[o-8]=i>>>24&255,this.buffer[o-7]=i>>>16&255,this.buffer[o-6]=i>>>8&255,this.buffer[o-5]=i>>>0&255,this.buffer[o-4]=a>>>24&255,this.buffer[o-3]=a>>>16&255,this.buffer[o-2]=a>>>8&255,this.buffer[o-1]=a>>>0&255,n(this.temp,this.state,this.buffer,0,o),this.finished=!0}for(var s=0;s<8;s++)e[s*4+0]=this.state[s]>>>24&255,e[s*4+1]=this.state[s]>>>16&255,e[s*4+2]=this.state[s]>>>8&255,e[s*4+3]=this.state[s]>>>0&255;return this},t.prototype.digest=function(){var e=new Uint8Array(this.digestLength);return this.finish(e),e},t.prototype._saveState=function(e){for(var t=0;t<this.state.length;t++)e[t]=this.state[t]},t.prototype._restoreState=function(e,t){for(var n=0;n<this.state.length;n++)this.state[n]=e[n];this.bytesHashed=t,this.finished=!1,this.bufferLength=0},t}();e.Hash=r;var i=function(){function e(e){this.inner=new r,this.outer=new r,this.blockSize=this.inner.blockSize,this.digestLength=this.inner.digestLength;var t=new Uint8Array(this.blockSize);if(e.length>this.blockSize)new r().update(e).finish(t).clean();else for(var n=0;n<e.length;n++)t[n]=e[n];for(var n=0;n<t.length;n++)t[n]^=54;this.inner.update(t);for(var n=0;n<t.length;n++)t[n]^=106;this.outer.update(t),this.istate=new Uint32Array(8),this.ostate=new Uint32Array(8),this.inner._saveState(this.istate),this.outer._saveState(this.ostate);for(var n=0;n<t.length;n++)t[n]=0}return e.prototype.reset=function(){return this.inner._restoreState(this.istate,this.inner.blockSize),this.outer._restoreState(this.ostate,this.outer.blockSize),this},e.prototype.clean=function(){for(var e=0;e<this.istate.length;e++)this.ostate[e]=this.istate[e]=0;this.inner.clean(),this.outer.clean()},e.prototype.update=function(e){return this.inner.update(e),this},e.prototype.finish=function(e){return this.outer.finished?this.outer.finish(e):(this.inner.finish(e),this.outer.update(e,this.digestLength).finish(e)),this},e.prototype.digest=function(){var e=new Uint8Array(this.digestLength);return this.finish(e),e},e}();e.HMAC=i;function a(e){var t=new r().update(e),n=t.digest();return t.clean(),n}e.hash=a,e.default=a;function o(e,t){var n=new i(e).update(t),r=n.digest();return n.clean(),r}e.hmac=o;function s(e,t,n,r){var i=r[0];if(i===0)throw Error(`hkdf: cannot expand more`);t.reset(),i>1&&t.update(e),n&&t.update(n),t.update(r),t.finish(e),r[0]++}var c=new Uint8Array(e.digestLength);function l(e,t,n,r){t===void 0&&(t=c),r===void 0&&(r=32);for(var a=new Uint8Array([1]),l=new i(o(t,e)),u=new Uint8Array(l.digestLength),d=u.length,f=new Uint8Array(r),p=0;p<r;p++)d===u.length&&(s(u,l,n,a),d=0),f[p]=u[d++];return l.clean(),u.fill(0),a.fill(0),f}e.hkdf=l;function u(e,t,n,r){for(var a=new i(e),o=a.digestLength,s=new Uint8Array(4),c=new Uint8Array(o),l=new Uint8Array(o),u=new Uint8Array(r),d=0;d*o<r;d++){var f=d+1;s[0]=f>>>24&255,s[1]=f>>>16&255,s[2]=f>>>8&255,s[3]=f>>>0&255,a.reset(),a.update(t),a.update(s),a.finish(l);for(var p=0;p<o;p++)c[p]=l[p];for(var p=2;p<=n;p++){a.reset(),a.update(l).finish(l);for(var m=0;m<o;m++)c[m]^=l[m]}for(var p=0;p<o&&d*o+p<r;p++)u[d*o+p]=c[p]}for(var d=0;d<o;d++)c[d]=l[d]=0;for(var d=0;d<4;d++)s[d]=0;return a.clean(),u}e.pbkdf2=u})})),Qm=e((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.timingSafeEqual=n;function t(e,t=``){if(!e)throw Error(t)}function n(e,n){if(e.byteLength!==n.byteLength)return!1;e instanceof DataView||(e=new DataView(ArrayBuffer.isView(e)?e.buffer:e)),n instanceof DataView||(n=new DataView(ArrayBuffer.isView(n)?n.buffer:n)),t(e instanceof DataView),t(n instanceof DataView);let r=e.byteLength,i=0,a=-1;for(;++a<r;)i|=e.getUint8(a)^n.getUint8(a);return i===0}})),$m=e((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Webhook=e.WebhookVerificationError=void 0;var t=Xm(),n=Zm(),r=Qm(),i=300,a=class e extends Error{constructor(t){super(t),Object.setPrototypeOf(this,e.prototype),this.name=`ExtendableError`,this.stack=Error(t).stack}},o=class e extends a{constructor(t){super(t),Object.setPrototypeOf(this,e.prototype),this.name=`WebhookVerificationError`}};e.WebhookVerificationError=o;var s=class e{constructor(n,r){if(r?.format===`raw`)this.key=n instanceof Uint8Array?n:Uint8Array.from(n,e=>e.charCodeAt(0));else{if(typeof n!=`string`)throw Error(`Expected secret to be of type string`);n.startsWith(e.prefix)&&(n=n.substring(e.prefix.length)),this.key=t.decode(n)}if(this.key.length===0)throw Error(`Secret can't be empty.`)}verify(e,t,n){let i=n?.jsonParse??!0,a={};for(let e of Object.keys(t))a[e.toLowerCase()]=t[e];let s=a[`webhook-id`],c=a[`webhook-signature`],l=a[`webhook-timestamp`];if(!c||!s||!l)throw new o(`Missing required headers`);let u=this.verifyTimestamp(l),d=this.sign(s,u,e).split(`,`)[1],f=c.split(` `),p=new globalThis.TextEncoder;for(let t of f){let[n,a]=t.split(`,`);if(n===`v1`&&(0,r.timingSafeEqual)(p.encode(a),p.encode(d))){let t=e.toString();return t===``?void 0:i?JSON.parse(t):void 0}}throw new o(`No matching signature found`)}sign(e,r,i){if(typeof i!=`string`){if(i.constructor.name===`Buffer`)i=i.toString();else throw Error(`Expected payload to be of type string or Buffer.`)}let a=new TextEncoder,o=Math.floor(r.getTime()/1e3),s=a.encode(`${e}.${o}.${i}`);return`v1,${t.encode(n.hmac(this.key,s))}`}verifyTimestamp(e){let t=Math.floor(Date.now()/1e3),n=parseInt(e,10);if(Number.isNaN(n))throw new o(`Invalid Signature Headers`);if(t-n>i)throw new o(`Message timestamp too old`);if(n>t+i)throw new o(`Message timestamp too new`);return new Date(n*1e3)}};e.Webhook=s,s.prefix=`whsec_`}))(),eh=class extends Y{parseUnverified(e){return JSON.parse(e)}unwrap(e,t){let n=t?.headers;if(n==null)throw Error(`Webhook headers are required in order to verify the signature`);let r=t.key===void 0?this._client.webhookKey:t.key;if(!r)throw Error(`Webhook key must not be null or empty in order to unwrap`);return new $m.Webhook(r).verify(e,n),JSON.parse(e)}},th=class extends Y{list(e,t={},n){let{betas:r,workspace_id:i,...a}=t??{};return this._client.getAPIList(Z`/v1/agents/${e}/versions?beta=true`,fm,{query:a,...n,headers:X([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}},nh=(()=>{class e extends Y{constructor(){super(...arguments),this.versions=new th(this._client)}create(e,t){let{betas:n,workspace_id:r,...i}=e;return this._client.post(`/v1/agents?beta=true`,{body:i,...t,headers:X([{"anthropic-beta":[...n??[],`managed-agents-2026-04-01`].toString(),...r==null?void 0:{"anthropic-workspace-id":r}},t?.headers])})}retrieve(e,t={},n){let{betas:r,workspace_id:i,...a}=t??{};return this._client.get(Z`/v1/agents/${e}?beta=true`,{query:a,...n,headers:X([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}update(e,t,n){let{betas:r,workspace_id:i,...a}=t;return this._client.post(Z`/v1/agents/${e}?beta=true`,{body:a,...n,headers:X([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}list(e={},t){let{betas:n,workspace_id:r,...i}=e??{};return this._client.getAPIList(`/v1/agents?beta=true`,fm,{query:i,...t,headers:X([{"anthropic-beta":[...n??[],`managed-agents-2026-04-01`].toString(),...r==null?void 0:{"anthropic-workspace-id":r}},t?.headers])})}archive(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.post(Z`/v1/agents/${e}/archive?beta=true`,{...n,headers:X([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}}return e.Versions=th,e})();function rh(e,t){if(!e)return()=>{};if(e.aborted)return t.abort(),()=>{};let n=()=>t.abort();return e.addEventListener(`abort`,n),()=>e.removeEventListener(`abort`,n)}function ih(e,t){return e instanceof Ed&&e.status===t}function ah(e){return e instanceof Ed&&typeof e.status==`number`&&e.status>=400&&e.status<500}function oh(e){return ah(e)&&!ih(e,408)&&!ih(e,409)&&!ih(e,429)}function sh(e,t,n){return Math.min(t*2**e,n)}function ch(e,t){return e+Math.random()*(t-e)}function lh(e){return e*(1-Math.random()*.25)}function uh(e,{authToken:t,helper:n}){if(!t)throw new J(`copyClientForHelper: expected a non-empty authToken but received ${JSON.stringify(t)}`);let r=e,i=r._options.defaultHeaders,a=r._authState?.extraHeaders,o=X([a?Object.fromEntries(Object.entries(a).filter(([e])=>{let t=e.toLowerCase();return t!==`authorization`&&t!==`x-api-key`})):void 0,i,{[zm]:n}]);return e.withOptions({apiKey:null,authToken:t,baseURL:e.baseURL,credentials:void 0,defaultHeaders:o})}var dh,fh,ph,mh,hh,gh,_h,vh,yh,bh,xh,Sh,Ch,wh=1e3,Th=6e4,Eh=3e5,Dh=(()=>{class e{constructor(e){dh.set(this,void 0),fh.set(this,!1),ph.set(this,void 0),mh.set(this,void 0),hh.set(this,void 0),gh.set(this,void 0),_h.set(this,void 0),vh.set(this,void 0),yh.set(this,void 0),this.client=e.client,this.environmentId=e.environmentId,this.environmentKey=e.environmentKey,this.workerId=e.workerId??Ah(),K(this,dh,uh(e.client,{authToken:e.environmentKey,helper:`environments-work-poller`}),`f`),K(this,hh,e.autoStop??!0,`f`),K(this,gh,e.drain??!1,`f`),K(this,_h,e.blockMs===void 0?999:e.blockMs,`f`),K(this,vh,e.reclaimOlderThanMs??null,`f`),K(this,yh,e.requestOptions,`f`),K(this,ph,new AbortController,`f`),K(this,mh,rh(e.signal,q(this,ph,`f`)),`f`)}get signal(){return q(this,ph,`f`).signal}abort(){q(this,ph,`f`).abort()}async*[(dh=new WeakMap,fh=new WeakMap,ph=new WeakMap,mh=new WeakMap,hh=new WeakMap,gh=new WeakMap,_h=new WeakMap,vh=new WeakMap,yh=new WeakMap,Symbol.asyncIterator)](){if(q(this,fh,`f`))throw new J(`Cannot iterate over a consumed WorkPoller`);K(this,fh,!0,`f`);let e=yp(this.client);e.info(`poller starting`,{component:`work-poller`,environment_id:this.environmentId});let t=new kh(e,this.environmentId);try{let n=0;for(;!q(this,ph,`f`).signal.aborted;){let r;try{r=await q(this,dh,`f`).beta.environments.work.poll(this.environmentId,{"Anthropic-Worker-ID":this.workerId,...q(this,_h,`f`)===null?{}:{block_ms:q(this,_h,`f`)},...q(this,vh,`f`)===null?{}:{reclaim_older_than_ms:q(this,vh,`f`)}},{headers:X([q(this,yh,`f`)?.headers]),signal:q(this,ph,`f`).signal})}catch(t){if(q(this,ph,`f`).signal.aborted)return;if(oh(t))throw e.error(`poll failed permanently, stopping poller`,{error:String(t)}),t;let r=lh(Oh(n));e.warn(`poll failed, backing off`,{error:String(t),backoff_ms:r}),n++,await Yd(r,q(this,ph,`f`).signal);continue}if(n=0,r==null){if(q(this,gh,`f`))return;t.onEmptyPoll(),await Yd(ch(1e3,3e3),q(this,ph,`f`).signal);continue}t.onClaim(),e.info(`claimed work`,{component:`work-poller`,environment_id:this.environmentId,work_id:r.id,work_type:r.data.type});try{await q(this,dh,`f`).beta.environments.work.ack(r.id,{environment_id:r.environment_id},{headers:X([q(this,yh,`f`)?.headers]),signal:q(this,ph,`f`).signal})}catch(t){e.error(`ack failed`,{work_id:r.id,error:String(t)});continue}try{yield r}finally{if(q(this,hh,`f`))try{await q(this,dh,`f`).beta.environments.work.stop(r.id,{environment_id:r.environment_id},{headers:X([q(this,yh,`f`)?.headers])})}catch(t){ih(t,409)||e.warn(`stop failed`,{work_id:r.id,error:String(t)})}}}}finally{q(this,mh,`f`).call(this)}}}return e})();function Oh(e){return sh(e,wh,Th)}var kh=(()=>{class e{constructor(e,t){bh.set(this,void 0),xh.set(this,void 0),Sh.set(this,void 0),Ch.set(this,0),K(this,bh,e,`f`),K(this,xh,t,`f`)}onEmptyPoll(){let e=Date.now(),t={component:`work-poller`,environment_id:q(this,xh,`f`)};q(this,Sh,`f`)===void 0?(K(this,Sh,K(this,Ch,e,`f`),`f`),q(this,bh,`f`).info(`idle; polling for work`,t)):e-q(this,Ch,`f`)>=Eh?(K(this,Ch,e,`f`),q(this,bh,`f`).info(`still polling; idle for ${Math.round((e-q(this,Sh,`f`))/1e3)}s`,t)):q(this,bh,`f`).debug(`poll returned no work`,t)}onClaim(){K(this,Sh,void 0,`f`)}}return bh=new WeakMap,xh=new WeakMap,Sh=new WeakMap,Ch=new WeakMap,e})();function Ah(){let e={}.HOSTNAME;return e?`${e}-${Tp()}`:Tp()}var jh,Mh,Nh,Ph=(()=>{class e{constructor(){jh.set(this,[]),Mh.set(this,[]),Nh.set(this,!1)}push(e){if(q(this,Nh,`f`))return!1;let t=q(this,Mh,`f`).shift();return t?t({done:!1,value:e}):q(this,jh,`f`).push(e),!0}close(){if(!q(this,Nh,`f`))for(K(this,Nh,!0,`f`);q(this,Mh,`f`).length>0;)q(this,Mh,`f`).shift()({done:!0,value:void 0})}next(e){return q(this,jh,`f`).length>0?Promise.resolve({done:!1,value:q(this,jh,`f`).shift()}):q(this,Nh,`f`)||e?.aborted?Promise.resolve({done:!0,value:void 0}):new Promise(t=>{let n=n=>{e?.removeEventListener(`abort`,r),t(n)},r=()=>{let e=q(this,Mh,`f`).indexOf(n);e>=0&&q(this,Mh,`f`).splice(e,1),t({done:!0,value:void 0})};q(this,Mh,`f`).push(n),e?.addEventListener(`abort`,r,{once:!0})})}tryShift(){return q(this,jh,`f`).shift()}}return jh=new WeakMap,Mh=new WeakMap,Nh=new WeakMap,e})(),Fh=(()=>{class e extends Error{constructor(e){let t=typeof e==`string`?e:e.map(e=>e.type===`text`?e.text:`[${e.type}]`).join(` `);super(t),this.name=`ToolError`,this.content=e}}return e})();function Ih(e){return`name`in e?e.name:`mcp_server_name`in e?e.mcp_server_name:e.type}function Lh(e){return e instanceof Fh?e.content:`Error: ${e instanceof Error?e.message:String(e)}`}async function Rh(e,t,n){try{let r=e.parse?e.parse(t):t;return{content:await e.run(r,n),isError:!1}}catch(e){return{content:Lh(e),isError:!0}}}var zh,Bh,Vh,Hh,Uh,Wh,Gh,Kh,qh,Jh,Yh,Xh,Zh,Qh,$h,eg,tg,ng,rg,ig,ag,og,sg,cg,lg,ug,dg,fg,pg,mg,hg,gg,_g,vg=500,yg=1e4,bg=12e4,xg=3e4,Sg=1e3,Cg=3e4,wg=3e5;function Tg(e){return e.type===`session.status_idle`&&e.stop_reason?.type===`end_turn`}var Eg=(()=>{class e{constructor(e,t){zh.set(this,void 0),Bh.set(this,void 0),Vh.set(this,new Set),Hh.set(this,!1),Uh.set(this,void 0),K(this,zh,e,`f`),K(this,Bh,t,`f`)}noteEvent(e){e.type!==`user.tool_confirmation`&&(Tg(e)?this.arm():this.disarm())}block(e){q(this,Vh,`f`).add(e),q(this,Uh,`f`)!==void 0&&(K(this,Hh,!0,`f`),clearTimeout(q(this,Uh,`f`)),K(this,Uh,void 0,`f`))}unblock(e){q(this,Vh,`f`).delete(e),q(this,Vh,`f`).size===0&&q(this,Hh,`f`)&&this.arm()}arm(){if(!(q(this,zh,`f`)<=0)){if(q(this,Vh,`f`).size>0){K(this,Hh,!0,`f`);return}K(this,Hh,!1,`f`),q(this,Uh,`f`)!==void 0&&clearTimeout(q(this,Uh,`f`)),K(this,Uh,setTimeout(q(this,Bh,`f`),q(this,zh,`f`)),`f`)}}disarm(){K(this,Hh,!1,`f`),q(this,Uh,`f`)!==void 0&&(clearTimeout(q(this,Uh,`f`)),K(this,Uh,void 0,`f`))}}return zh=new WeakMap,Bh=new WeakMap,Vh=new WeakMap,Hh=new WeakMap,Uh=new WeakMap,e})(),Dg=(()=>{class e{constructor(e,t){Wh.add(this),Gh.set(this,!1),Kh.set(this,void 0),qh.set(this,void 0),Jh.set(this,void 0),Yh.set(this,void 0),Xh.set(this,void 0),Zh.set(this,new Set),Qh.set(this,new Set),$h.set(this,new Map),eg.set(this,new Map),tg.set(this,new Ph),ng.set(this,0),rg.set(this,wg),ig.set(this,null),ag.set(this,void 0),this.client=t.client,this.sessionId=e,this.tools=t.tools,this.maxIdleMs=t.maxIdleMs??6e4,K(this,Xh,yp(t.client),`f`),K(this,Yh,new Map(t.tools.map(e=>[Ih(e),e])),`f`),K(this,Kh,new AbortController,`f`),K(this,qh,rh(t.signal,q(this,Kh,`f`)),`f`),K(this,Jh,t.requestOptions,`f`),K(this,ag,new Eg(this.maxIdleMs,()=>{q(this,Xh,`f`).info(`session idle after end_turn; stopping`,{component:`session-tool-runner`,session_id:this.sessionId,max_idle_ms:this.maxIdleMs}),q(this,Kh,`f`).abort()}),`f`)}get signal(){return q(this,Kh,`f`).signal}abort(){q(this,Kh,`f`).abort()}_setSendRetryWindow(e){K(this,rg,e,`f`)}async*[(Gh=new WeakMap,Kh=new WeakMap,qh=new WeakMap,Jh=new WeakMap,Yh=new WeakMap,Xh=new WeakMap,Zh=new WeakMap,Qh=new WeakMap,$h=new WeakMap,eg=new WeakMap,tg=new WeakMap,ng=new WeakMap,rg=new WeakMap,ig=new WeakMap,ag=new WeakMap,Wh=new WeakSet,Symbol.asyncIterator)](){if(q(this,Gh,`f`))throw new J(`Cannot iterate over a consumed SessionToolRunner`);K(this,Gh,!0,`f`),q(this,Xh,`f`).info(`session tool runner starting`,{component:`session-tool-runner`,session_id:this.sessionId});let e=q(this,Wh,`m`,sg).call(this).catch(e=>{q(this,Kh,`f`).signal.aborted||q(this,Xh,`f`).error(`stream loop failed`,{error:String(e)}),q(this,Kh,`f`).abort()});try{for(;;){let e=await q(this,tg,`f`).next(q(this,Kh,`f`).signal);if(e.done)break;yield e.value}await e;let t;for(;(t=q(this,tg,`f`).tryShift())!==void 0;)yield t}finally{q(this,Kh,`f`).abort(),q(this,ag,`f`).disarm(),await e;try{await q(this,Wh,`m`,_g).call(this)}catch(e){q(this,Xh,`f`).warn(`drain failed`,{error:String(e)})}q(this,tg,`f`).close();for(let e of this.tools)try{await e.close?.()}catch(t){q(this,Xh,`f`).warn(`tool.close failed`,{tool:Ih(e),error:String(t)})}q(this,qh,`f`).call(this)}}}return og=function(){return{...q(this,Jh,`f`),headers:X([Vm(`session-tool-runner`),q(this,Jh,`f`)?.headers]),signal:q(this,Kh,`f`).signal}},sg=async function(){let e=q(this,Kh,`f`),t=vg;for(;!e.signal.aborted;){try{let e=await this.client.beta.sessions.events.stream(this.sessionId,{},q(this,Wh,`m`,og).call(this));await q(this,Wh,`m`,cg).call(this);for await(let n of e)if(t=vg,await q(this,Wh,`m`,ug).call(this,n))return}catch(n){if(e.signal.throwIfAborted(),oh(n))throw q(this,Xh,`f`).error(`permanent stream failure, shutting down`,{error:String(n)}),e.abort(),n;q(this,Xh,`f`).warn(`stream disconnected, reconnecting`,{error:String(n),backoff_ms:t})}e.signal.throwIfAborted(),await Yd(t,e.signal),t=Math.min(t*2,yg)}},cg=async function(){let e=q(this,Kh,`f`),t=[],n=!1;try{for await(let e of this.client.beta.sessions.events.list(this.sessionId,{limit:1e3},q(this,Wh,`m`,og).call(this)))q(this,Wh,`m`,lg).call(this,e,t),n=Tg(e)}catch(n){e.signal.throwIfAborted(),q(this,Xh,`f`).warn(`reconcile list failed`,{error:String(n)});for(let e of t)q(this,Zh,`f`).delete(e.id);return}let r=t.filter(e=>!q(this,Qh,`f`).has(e.id));q(this,ag,`f`).disarm();for(let e of r)await q(this,Wh,`m`,dg).call(this,e);for(let e of[...q(this,eg,`f`).values()]){let t=q(this,$h,`f`).get(e.id);t!==void 0&&await q(this,Wh,`m`,pg).call(this,e,t)}let i=r.filter(e=>!q(this,Qh,`f`).has(e.id)&&!q(this,eg,`f`).has(e.id));n&&i.length===0?q(this,ag,`f`).arm():q(this,ag,`f`).disarm()},lg=function(e,t){e.type===`agent.tool_use`||e.type===`agent.custom_tool_use`?(q(this,Zh,`f`).add(e.id),q(this,Qh,`f`).has(e.id)||t.push(e)):e.type===`user.tool_result`?q(this,Qh,`f`).add(e.tool_use_id):e.type===`user.custom_tool_result`?q(this,Qh,`f`).add(e.custom_tool_use_id):e.type===`user.tool_confirmation`&&(q(this,Qh,`f`).has(e.tool_use_id)||q(this,$h,`f`).set(e.tool_use_id,e.result))},ug=async function(e){switch(q(this,ag,`f`).noteEvent(e),e.type){case`agent.tool_use`:case`agent.custom_tool_use`:return q(this,Zh,`f`).has(e.id)||(q(this,Zh,`f`).add(e.id),await q(this,Wh,`m`,dg).call(this,e)),!1;case`user.tool_confirmation`:return await q(this,Wh,`m`,fg).call(this,e),!1;case`user.tool_result`:return q(this,Qh,`f`).add(e.tool_use_id),!1;case`user.custom_tool_result`:return q(this,Qh,`f`).add(e.custom_tool_use_id),!1;case`session.status_terminated`:case`session.deleted`:return q(this,Xh,`f`).info(`session terminated`,{component:`session-tool-runner`,session_id:this.sessionId}),q(this,Kh,`f`).abort(),!0;default:return!1}},dg=async function(e){let t=e.evaluated_permission,n=t===`deny`?`deny`:q(this,$h,`f`).get(e.id);if(n===void 0){t===void 0||t===`allow`?await q(this,Wh,`m`,hg).call(this,e,void 0):q(this,eg,`f`).has(e.id)||(q(this,Xh,`f`).info(`tool call awaiting confirmation; holding`,{component:`session-tool-runner`,session_id:this.sessionId,tool:e.name,tool_use_id:e.id}),q(this,eg,`f`).set(e.id,e),q(this,ag,`f`).block(e.id));return}await q(this,Wh,`m`,pg).call(this,e,n)},fg=async function(e){q(this,$h,`f`).set(e.tool_use_id,e.result);let t=q(this,eg,`f`).get(e.tool_use_id);t!==void 0&&await q(this,Wh,`m`,pg).call(this,t,e.result)},pg=async function(e,t){let n=q(this,eg,`f`).delete(e.id);if(t===`allow`){q(this,Xh,`f`).info(`tool call confirmed`,{component:`session-tool-runner`,session_id:this.sessionId,tool:e.name,tool_use_id:e.id}),n||q(this,ag,`f`).block(e.id);try{await q(this,Wh,`m`,hg).call(this,e,`allow`)}finally{q(this,ag,`f`).unblock(e.id)}return}n&&q(this,ag,`f`).unblock(e.id),q(this,Qh,`f`).add(e.id),q(this,Xh,`f`).info(`tool call denied; not executing`,{component:`session-tool-runner`,session_id:this.sessionId,tool:e.name,tool_use_id:e.id}),q(this,Wh,`m`,mg).call(this,{event:e,toolUseId:e.id,name:e.name,isError:!1,posted:!1,confirmation:`deny`})},mg=function(e){q(this,tg,`f`).push(e)},hg=async function(e,t){var n,r;if(!q(this,Qh,`f`).has(e.id)){q(this,Xh,`f`).info(`executing tool`,{component:`session-tool-runner`,session_id:this.sessionId,tool:e.name,tool_use_id:e.id}),K(this,ng,(n=q(this,ng,`f`),n++,n),`f`);try{let n=q(this,Yh,`f`).get(e.name);if(!n){q(this,Xh,`f`).info(`tool not owned by this runner; leaving the tool_use_id pending for its owner`,{component:`session-tool-runner`,session_id:this.sessionId,tool:e.name,tool_use_id:e.id}),q(this,Wh,`m`,mg).call(this,{event:e,toolUseId:e.id,name:e.name,isError:!1,posted:!1,confirmation:t});return}let r,i,a=new AbortController,o=rh(q(this,Kh,`f`).signal,a),s=setTimeout(()=>a.abort(),bg);try{let t=await Rh(n,e.input,{toolUse:e,toolUseBlock:e,signal:a.signal});r=t.content,i=t.isError}finally{clearTimeout(s),o()}let c=Og(e,i,kg(r)),l=await q(this,Wh,`m`,gg).call(this,c,e.id);q(this,Wh,`m`,mg).call(this,{event:e,result:c,toolUseId:e.id,name:e.name,isError:i,posted:l,confirmation:t})}finally{K(this,ng,(r=q(this,ng,`f`),r--,r),`f`),q(this,ng,`f`)===0&&q(this,ig,`f`)?.call(this)}}},gg=async function(e,t){let n=q(this,Kh,`f`),r=Date.now(),i,a=0;for(;;){a++,n.signal.throwIfAborted();try{return await this.client.beta.sessions.events.send(this.sessionId,{events:[e]},q(this,Wh,`m`,og).call(this)),q(this,Qh,`f`).add(t),!0}catch(e){if(i=e,oh(e))break;let o=q(this,rg,`f`)-(Date.now()-r);if(o<=0)break;let s=Math.min(lh(sh(a-1,Sg,Cg)),o);q(this,Xh,`f`).warn(`tool result send failed; retrying`,{tool_use_id:t,attempt:a,backoff_ms:s,error:String(e)}),await Yd(s,n.signal)}}return q(this,Xh,`f`).error(`failed to send tool result`,{tool_use_id:t,attempts:a,error:String(i)}),!1},_g=async function(){q(this,ng,`f`)!==0&&(await Promise.race([new Promise(e=>K(this,ig,e,`f`)),Yd(xg)]),K(this,ig,null,`f`),q(this,ng,`f`)>0&&q(this,Xh,`f`).warn(`drain timeout exceeded`))},e})();function Og(e,t,n){return e.type===`agent.custom_tool_use`?{type:`user.custom_tool_result`,custom_tool_use_id:e.id,is_error:t,content:n}:{type:`user.tool_result`,tool_use_id:e.id,is_error:t,content:n}}function kg(e){if(typeof e==`string`)return[{type:`text`,text:e||`(no output)`}];let t=e.map(e=>e.type===`text`?{type:`text`,text:e.text||`(no output)`}:e.type===`image`||e.type===`document`?e:e.type===`search_result`?{type:`search_result`,source:e.source,title:e.title,content:e.content.map(e=>({type:`text`,text:e.text})),citations:{enabled:e.citations?.enabled??!1}}:{type:`text`,text:JSON.stringify(e)});return t.length>0?t:[{type:`text`,text:`(no output)`}]}var Ag=15e3,jg=5e3;function Mg(e,t){if(!(e>=5e3))throw new J(`${t} must be at least ${jg}ms (got ${e}); to run without memory sync, pass \`memorySyncIntervalMs: null\` to the worker instead`)}var Ng,Pg,Fg,Ig,Lg,Rg=3e4,zg=9e4,Bg=`NO_HEARTBEAT`;function Vg(e){return e.resources.some(e=>e.type===`memory_store`)}function Hg(e){if(!e)return null;let t;try{let n=e.replace(/-/g,`+`).replace(/_/g,`/`),r=n.padEnd(Math.ceil(n.length/4)*4,`=`);t=JSON.parse(lp(up(r)))}catch{return null}if(typeof t!=`object`||!t||Array.isArray(t))return null;let n=t.sessions_token;return typeof n==`string`&&n!==``?n:null}var Ug=(()=>{class e{constructor(e){if(Ng.add(this),Pg.set(this,void 0),e.unrestrictedPaths!==void 0)throw new J("The `unrestrictedPaths` option you passed to EnvironmentWorker (or client.beta.environments.work.worker()) is no longer supported. The worker's file tools (read, write, edit, glob, grep) are now always confined to `workdir` plus the session's memory folders. Remove `unrestrictedPaths` from your options; to let the file tools reach any other directory, add it to `AgentToolContext.allowedRoots` from a `tools` factory.");this.client=e.client,this.environmentId=e.environmentId,this.environmentKey=e.environmentKey,this.tools=e.tools,this.workdir=e.workdir??process.cwd(),this.maxFileBytes=e.maxFileBytes,this.maxIdleMs=e.maxIdleMs,e.memorySyncIntervalMs!=null&&Mg(e.memorySyncIntervalMs,`memorySyncIntervalMs`),this.memorySyncIntervalMs=e.memorySyncIntervalMs,this.memorySyncDeletions=e.memorySyncDeletions??`enabled`,this.workerId=e.workerId,this.requestOptions=e.requestOptions,K(this,Pg,e.signal,`f`)}async run(e){let{environmentId:t,environmentKey:n}=this;if(t===void 0||n===void 0)throw new J(`EnvironmentWorker.run: environmentId and environmentKey are required to poll for work`);let r=e??q(this,Pg,`f`),i=new Dh({client:this.client,environmentId:t,environmentKey:n,...this.workerId===void 0?{}:{workerId:this.workerId},...r?{signal:r}:{},...this.requestOptions===void 0?{}:{requestOptions:this.requestOptions},autoStop:!1});for await(let e of i)try{await q(this,Ng,`m`,Fg).call(this,e,n,i.signal)}catch(t){if(i.signal?.aborted)throw t;yp(this.client).error(`work item failed`,{work_id:e.id,error:String(t)})}}async handleItem(e){let t=e?.workId??ip(`ANTHROPIC_WORK_ID`),n=e?.environmentId??ip(`ANTHROPIC_ENVIRONMENT_ID`),r=e?.sessionId??ip(`ANTHROPIC_SESSION_ID`),i=(e?.environmentKey??this.environmentKey??ip(`ANTHROPIC_ENVIRONMENT_KEY`))||void 0,a=e?.workSecret||ip(`ANTHROPIC_WORK_SECRET`)||null;if(!t)throw new J(`handleItem: workId is required — pass it or set ANTHROPIC_WORK_ID`);if(!n)throw new J(`handleItem: environmentId is required — pass it or set ANTHROPIC_ENVIRONMENT_ID`);if(!r)throw new J(`handleItem: sessionId is required — pass it or set ANTHROPIC_SESSION_ID`);if(!i&&!a)throw new J(`handleItem: environmentKey is required when there is no work secret — pass it, construct the worker with it, or set ANTHROPIC_ENVIRONMENT_KEY`);let o={id:t,environment_id:n,secret:a,data:{type:`session`,id:r}};await q(this,Ng,`m`,Fg).call(this,o,i,e?.signal??q(this,Pg,`f`))}}return Pg=new WeakMap,Ng=new WeakSet,Fg=async function(e,t,n){let r=yp(this.client),i=Hg(e.secret),a=i??t;if(a===void 0)throw new J("handleItem: the work item carried a secret payload but no sessions token could be extracted, and there is no environment key to fall back to; the poller must issue a secret whose payload carries `sessions_token`, or provide the environment key (pass it, construct the worker with it, or set ANTHROPIC_ENVIRONMENT_KEY)");e.secret&&i===null&&r.warn(`work item carried a secret payload but no sessions token could be extracted; falling back to the environment key`,{work_id:e.id});let o=uh(this.client,{authToken:a,helper:`environments-worker`}),s=e.data.id,c=new AbortController,l=rh(n,c),u=new Kg(c),d=await Bf(()=>import(`./node.browser-fH0qDtW_.js`),[],import.meta.url),f,p,m=Jg(o,e,u,r,this.requestOptions,e=>{f=e,p?._setSendRetryWindow(e)}).catch(t=>{c.signal.aborted||r.error(`heartbeat loop failed`,{work_id:e.id,error:String(t)}),c.abort()}),h=async()=>{},g,_=!1;try{if(e.data.type!==`session`){r.debug(`skipping non-session work item`,{work_id:e.id,type:e.data.type});return}let t=await o.beta.sessions.retrieve(s);if(i===null&&this.memorySyncIntervalMs!==null&&Vg(t))throw new d.SessionMemoryError(`cannot mount the session's memories: the work item carried no sessions token (work_id=${e.id}, session_id=${s}); the memory endpoints reject the environment key, so the poller must issue a per-item \`secret\` carrying \`sessions_token\`, or set \`memorySyncIntervalMs: null\` to run without memory`);let n={workdir:this.workdir,client:o,session:t,...this.maxFileBytes===void 0?{}:{maxFileBytes:this.maxFileBytes}};try{h=await d.setupSkills(n)}catch(t){r.warn(`skill setup failed`,{session_id:s,work_id:e.id,error:String(t)})}i!==null&&this.memorySyncIntervalMs!==null?(g=new d.SessionMemoryStores(o,{workdir:this.workdir,...this.memorySyncIntervalMs===void 0?{}:{syncIntervalMs:this.memorySyncIntervalMs},syncDeletions:this.memorySyncDeletions}),await g.download(t),n.allowedRoots=g.roots,n.readOnlyRoots=g.readOnlyRoots):r.debug(`memory stores disabled for this item`,{work_id:e.id}),p=new Dg(s,{client:o,tools:typeof this.tools==`function`?this.tools(n):this.tools??d.betaAgentToolset20260401(n),...this.maxIdleMs===void 0?{}:{maxIdleMs:this.maxIdleMs},...this.requestOptions===void 0?{}:{requestOptions:this.requestOptions},signal:c.signal}),f!==void 0&&p._setSendRetryWindow(f);for await(let e of p)g&&await g.syncIfDue();_=!c.signal.aborted}finally{try{await h().catch(t=>{r.warn(`skill cleanup failed`,{session_id:s,work_id:e.id,error:String(t)})})}finally{if(g){let t=d.MEMORY_FLUSH_TIMEOUT_MS;_&&await Wg(g.finish(),t)&&r.warn(`final memory sync cut off after ${t}ms; the flush that follows still uploads changed files`,{session_id:s,work_id:e.id});let n=new AbortController;await Wg(g.flushWrites(n.signal),t)&&(n.abort(),r.warn(`memory flush cut off after ${t}ms; changed files it had not uploaded yet are not saved`,{session_id:s,work_id:e.id})),await g.dispose().catch(t=>{r.warn(`memory store cleanup failed`,{session_id:s,work_id:e.id,error:String(t)})})}}u.finish(`runner_done`),l(),await m,u.lost?r.info(`lease lost; released without stopping it`,{session_id:s,work_id:e.id}):await Gg(o,e,r,this.requestOptions)}},e})();async function Wg(e,t){let n;try{return await Promise.race([e.then(()=>!1,()=>!1),new Promise(e=>{n=setTimeout(()=>e(!0),t)})])}finally{n!==void 0&&clearTimeout(n)}}async function Gg(e,t,n,r){try{await e.beta.environments.work.stop(t.id,{environment_id:t.environment_id,force:!0},{...r,headers:X([r?.headers])})}catch(e){ih(e,409)||n.error(`force-stop on exit failed`,{work_id:t.id,error:String(e)})}}var Kg=(()=>{class e{constructor(e){Ig.set(this,void 0),Lg.set(this,void 0),K(this,Ig,e,`f`)}get signal(){return q(this,Ig,`f`).signal}finish(e){K(this,Lg,q(this,Lg,`f`)??e,`f`),q(this,Ig,`f`).abort()}get lost(){return q(this,Lg,`f`)===`lease_lost`||q(this,Lg,`f`)===`assumed_lost`}}return Ig=new WeakMap,Lg=new WeakMap,e})();function qg(e){let t=e instanceof Ed?e.error:void 0;for(let e of[`error`,`details`,`current_state`]){if(!Kd(t))return{};t=t[e]}return Kd(t)?t:{}}async function Jg(e,t,n,r,i,a){let o=Rg,s=zg,c=Date.now(),l=Bg,u=async()=>{let u=new AbortController,d=rh(n.signal,u),f=setTimeout(()=>u.abort(),o);try{let d=await e.beta.environments.work.heartbeat(t.id,{environment_id:t.environment_id,expected_last_heartbeat:l},{...i,headers:X([i?.headers]),signal:u.signal});c=Date.now(),l=d.last_heartbeat,d.ttl_seconds>0&&(s=d.ttl_seconds*1e3,o=Math.max(1e3,Math.min(s/2,Rg)),a?.(s)),(d.state===`stopping`||d.state===`stopped`)&&(r.info(`heartbeat signals shutdown`,{work_id:t.id,state:d.state}),n.finish(`control_plane_stop`)),d.lease_extended||(r.warn(`lease not extended, shutting down`,{work_id:t.id}),n.finish(`control_plane_stop`))}catch(e){if(n.signal.throwIfAborted(),ih(e,412)){let i=qg(e);r.error(`lease lost: heartbeat precondition failed`,{work_id:t.id,server_state:i.state,server_ttl_seconds:i.ttl_seconds,server_last_heartbeat:i.last_heartbeat}),n.finish(`lease_lost`);return}if(oh(e))throw r.error(`permanent heartbeat failure`,{work_id:t.id,error:String(e)}),n.finish(`heartbeat_rejected`),e;if(Date.now()-c>s){r.error(`lease assumed lost: no successful heartbeat in ttl`,{work_id:t.id,ttl_ms:s,error:String(e)}),n.finish(`assumed_lost`);return}r.warn(`transient heartbeat failure`,{work_id:t.id,error:String(e)})}finally{clearTimeout(f),d()}};for(await u();!n.signal.aborted;)await Yd(o,n.signal),n.signal.throwIfAborted(),await u()}var Yg=(()=>{class e extends Y{retrieve(e,t,n){let{environment_id:r,betas:i,workspace_id:a}=t;return this._client.get(Z`/v1/environments/${r}/work/${e}?beta=true`,{...n,headers:X([{"anthropic-beta":[...i??[],`managed-agents-2026-04-01`].toString(),...a==null?void 0:{"anthropic-workspace-id":a}},n?.headers])})}update(e,t,n){let{environment_id:r,betas:i,workspace_id:a,...o}=t;return this._client.post(Z`/v1/environments/${r}/work/${e}?beta=true`,{body:o,...n,headers:X([{"anthropic-beta":[...i??[],`managed-agents-2026-04-01`].toString(),...a==null?void 0:{"anthropic-workspace-id":a}},n?.headers])})}list(e,t={},n){let{betas:r,...i}=t??{};return this._client.getAPIList(Z`/v1/environments/${e}/work?beta=true`,fm,{query:i,...n,headers:X([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString()},n?.headers])})}ack(e,t,n){let{environment_id:r,betas:i}=t;return this._client.post(Z`/v1/environments/${r}/work/${e}/ack?beta=true`,{...n,headers:X([{"anthropic-beta":[...i??[],`managed-agents-2026-04-01`].toString()},n?.headers])})}heartbeat(e,t,n){let{environment_id:r,desired_ttl_seconds:i,expected_last_heartbeat:a,betas:o}=t;return this._client.post(Z`/v1/environments/${r}/work/${e}/heartbeat?beta=true`,{query:{desired_ttl_seconds:i,expected_last_heartbeat:a},...n,headers:X([{"anthropic-beta":[...o??[],`managed-agents-2026-04-01`].toString()},n?.headers])})}poll(e,t={},n){let{betas:r,"Anthropic-Worker-ID":i,...a}=t??{};return this._client.get(Z`/v1/environments/${e}/work/poll?beta=true`,{query:a,...n,headers:X([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"Anthropic-Worker-ID":i}},n?.headers])})}stats(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.get(Z`/v1/environments/${e}/work/stats?beta=true`,{...n,headers:X([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}stop(e,t,n){let{environment_id:r,betas:i,workspace_id:a,...o}=t;return this._client.post(Z`/v1/environments/${r}/work/${e}/stop?beta=true`,{body:o,...n,headers:X([{"anthropic-beta":[...i??[],`managed-agents-2026-04-01`].toString(),...a==null?void 0:{"anthropic-workspace-id":a}},n?.headers])})}poller(e){return new Dh({...e,client:this._client})}worker(e){return new Ug({...e,client:this._client})}}return e.WorkPoller=Dh,e.EnvironmentWorker=Ug,e})(),Xg=(()=>{class e extends Y{constructor(){super(...arguments),this.work=new Yg(this._client)}create(e,t){let{betas:n,workspace_id:r,...i}=e;return this._client.post(`/v1/environments?beta=true`,{body:i,...t,headers:X([{"anthropic-beta":[...n??[],`managed-agents-2026-04-01`].toString(),...r==null?void 0:{"anthropic-workspace-id":r}},t?.headers])})}retrieve(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.get(Z`/v1/environments/${e}?beta=true`,{...n,headers:X([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}update(e,t,n){let{betas:r,workspace_id:i,...a}=t;return this._client.post(Z`/v1/environments/${e}?beta=true`,{body:a,...n,headers:X([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}list(e={},t){let{betas:n,workspace_id:r,...i}=e??{};return this._client.getAPIList(`/v1/environments?beta=true`,fm,{query:i,...t,headers:X([{"anthropic-beta":[...n??[],`managed-agents-2026-04-01`].toString(),...r==null?void 0:{"anthropic-workspace-id":r}},t?.headers])})}delete(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.delete(Z`/v1/environments/${e}?beta=true`,{...n,headers:X([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}archive(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.post(Z`/v1/environments/${e}/archive?beta=true`,{...n,headers:X([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}}return e.Work=Yg,e})(),Zg=class extends Y{create(e,t,n){let{view:r,betas:i,workspace_id:a,...o}=t;return this._client.post(Z`/v1/memory_stores/${e}/memories?beta=true`,{query:{view:r},body:o,...n,headers:X([{"anthropic-beta":[...i??[],`agent-memory-2026-07-22`].toString(),...a==null?void 0:{"anthropic-workspace-id":a}},n?.headers])})}retrieve(e,t,n){let{memory_store_id:r,betas:i,workspace_id:a,...o}=t;return this._client.get(Z`/v1/memory_stores/${r}/memories/${e}?beta=true`,{query:o,...n,headers:X([{"anthropic-beta":[...i??[],`agent-memory-2026-07-22`].toString(),...a==null?void 0:{"anthropic-workspace-id":a}},n?.headers])})}update(e,t,n){let{memory_store_id:r,view:i,betas:a,workspace_id:o,...s}=t;return this._client.post(Z`/v1/memory_stores/${r}/memories/${e}?beta=true`,{query:{view:i},body:s,...n,headers:X([{"anthropic-beta":[...a??[],`agent-memory-2026-07-22`].toString(),...o==null?void 0:{"anthropic-workspace-id":o}},n?.headers])})}list(e,t={},n){let{betas:r,workspace_id:i,...a}=t??{};return this._client.getAPIList(Z`/v1/memory_stores/${e}/memories?beta=true`,fm,{query:a,...n,headers:X([{"anthropic-beta":[...r??[],`agent-memory-2026-07-22`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}delete(e,t,n){let{memory_store_id:r,expected_content_sha256:i,betas:a,workspace_id:o}=t;return this._client.delete(Z`/v1/memory_stores/${r}/memories/${e}?beta=true`,{query:{expected_content_sha256:i},...n,headers:X([{"anthropic-beta":[...a??[],`agent-memory-2026-07-22`].toString(),...o==null?void 0:{"anthropic-workspace-id":o}},n?.headers])})}},Qg=class extends Y{retrieve(e,t,n){let{memory_store_id:r,betas:i,workspace_id:a,...o}=t;return this._client.get(Z`/v1/memory_stores/${r}/memory_versions/${e}?beta=true`,{query:o,...n,headers:X([{"anthropic-beta":[...i??[],`agent-memory-2026-07-22`].toString(),...a==null?void 0:{"anthropic-workspace-id":a}},n?.headers])})}list(e,t={},n){let{betas:r,workspace_id:i,...a}=t??{};return this._client.getAPIList(Z`/v1/memory_stores/${e}/memory_versions?beta=true`,fm,{query:a,...n,headers:X([{"anthropic-beta":[...r??[],`agent-memory-2026-07-22`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}redact(e,t,n){let{memory_store_id:r,betas:i,workspace_id:a}=t;return this._client.post(Z`/v1/memory_stores/${r}/memory_versions/${e}/redact?beta=true`,{...n,headers:X([{"anthropic-beta":[...i??[],`agent-memory-2026-07-22`].toString(),...a==null?void 0:{"anthropic-workspace-id":a}},n?.headers])})}},$g=(()=>{class e extends Y{constructor(){super(...arguments),this.memories=new Zg(this._client),this.memoryVersions=new Qg(this._client)}create(e,t){let{betas:n,workspace_id:r,...i}=e;return this._client.post(`/v1/memory_stores?beta=true`,{body:i,...t,headers:X([{"anthropic-beta":[...n??[],`agent-memory-2026-07-22`].toString(),...r==null?void 0:{"anthropic-workspace-id":r}},t?.headers])})}retrieve(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.get(Z`/v1/memory_stores/${e}?beta=true`,{...n,headers:X([{"anthropic-beta":[...r??[],`agent-memory-2026-07-22`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}update(e,t,n){let{betas:r,workspace_id:i,...a}=t;return this._client.post(Z`/v1/memory_stores/${e}?beta=true`,{body:a,...n,headers:X([{"anthropic-beta":[...r??[],`agent-memory-2026-07-22`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}list(e={},t){let{betas:n,workspace_id:r,...i}=e??{};return this._client.getAPIList(`/v1/memory_stores?beta=true`,fm,{query:i,...t,headers:X([{"anthropic-beta":[...n??[],`agent-memory-2026-07-22`].toString(),...r==null?void 0:{"anthropic-workspace-id":r}},t?.headers])})}delete(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.delete(Z`/v1/memory_stores/${e}?beta=true`,{...n,headers:X([{"anthropic-beta":[...r??[],`agent-memory-2026-07-22`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}archive(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.post(Z`/v1/memory_stores/${e}/archive?beta=true`,{...n,headers:X([{"anthropic-beta":[...r??[],`agent-memory-2026-07-22`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}}return e.Memories=Zg,e.MemoryVersions=Qg,e})(),e_=(()=>{class e{constructor(e,t){this.iterator=e,this.controller=t}async*decoder(){let e=new Wp;for await(let t of this.iterator)for(let n of e.decode(t))yield JSON.parse(n);for(let t of e.flush())yield JSON.parse(t)}[Symbol.asyncIterator](){return this.decoder()}static fromResponse(t,n){if(!t.body)throw n.abort(),globalThis.navigator!==void 0&&globalThis.navigator.product===`ReactNative`?new J(`The default react-native fetch implementation does not support streaming. Please use expo/fetch: https://docs.expo.dev/versions/latest/sdk/expo/#expofetch-api`):new J(`Attempted to iterate over a response with no body`);return new e(hf(t.body),n)}}return e})(),t_=class extends Y{create(e,t){let{betas:n,user_profile_id:r,workspace_id:i,...a}=e;return this._client.post(`/v1/messages/batches?beta=true`,{body:a,...t,headers:X([{"anthropic-beta":[...n??[],`message-batches-2024-09-24`].toString(),...r==null?void 0:{"anthropic-user-profile-id":r},...i==null?void 0:{"anthropic-workspace-id":i}},t?.headers])})}retrieve(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.get(Z`/v1/messages/batches/${e}?beta=true`,{...n,headers:X([{"anthropic-beta":[...r??[],`message-batches-2024-09-24`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}list(e={},t){let{betas:n,workspace_id:r,...i}=e??{};return this._client.getAPIList(`/v1/messages/batches?beta=true`,dm,{query:i,...t,headers:X([{"anthropic-beta":[...n??[],`message-batches-2024-09-24`].toString(),...r==null?void 0:{"anthropic-workspace-id":r}},t?.headers])})}delete(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.delete(Z`/v1/messages/batches/${e}?beta=true`,{...n,headers:X([{"anthropic-beta":[...r??[],`message-batches-2024-09-24`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}cancel(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.post(Z`/v1/messages/batches/${e}/cancel?beta=true`,{...n,headers:X([{"anthropic-beta":[...r??[],`message-batches-2024-09-24`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}async results(e,t={},n){let r=await this.retrieve(e,t,n);if(!r.results_url)throw new J(`No batch \`results_url\`; Has it finished processing? ${r.processing_status} - ${r.id}`);let{betas:i,workspace_id:a}=t??{};return this._client.get(r.results_url,{...n,headers:X([{"anthropic-beta":[...i??[],`message-batches-2024-09-24`].toString(),Accept:`application/binary`,...a==null?void 0:{"anthropic-workspace-id":a}},n?.headers]),stream:!0,__binaryResponse:!0})._thenUnwrap((e,t)=>e_.fromResponse(t.response,t.controller))}},n_={"claude-opus-4@20250514":8192,"anthropic.claude-opus-4-1-20250805-v1:0":8192,"claude-opus-4-1@20250805":8192};function r_(e){return e?.output_format??e?.output_config?.format}function i_(e,t,n){let r=r_(t);return!t||!(`parse`in(r??{}))?{...e,content:e.content.map(e=>{if(e.type===`text`){let t=Object.defineProperty({...e},"parsed_output",{value:null,enumerable:!1});return Object.defineProperty(t,"parsed",{get(){return n.logger.warn("The `parsed` property on `text` blocks is deprecated, please use `parsed_output` instead."),null},enumerable:!1})}return e}),parsed_output:null}:a_(e,t,n)}function a_(e,t,n){let r=null,i=e.content.map(e=>{if(e.type===`text`){let i=o_(t,e.text);r===null&&(r=i);let a=Object.defineProperty({...e},"parsed_output",{value:i,enumerable:!1});return Object.defineProperty(a,"parsed",{get(){return n.logger.warn("The `parsed` property on `text` blocks is deprecated, please use `parsed_output` instead."),i},enumerable:!1})}return e});return{...e,content:i,parsed_output:r}}function o_(e,t){let n=r_(e);if(n?.type!==`json_schema`)return null;try{return`parse`in n?n.parse(t):JSON.parse(t)}catch(e){throw new J(`Failed to parse structured output: ${e}`)}}var s_=e=>{let t=0,n=[];for(;t<e.length;){let r=e[t];if(r===`\\`){t++;continue}if(r===`{`){n.push({type:`brace`,value:`{`}),t++;continue}if(r===`}`){n.push({type:`brace`,value:`}`}),t++;continue}if(r===`[`){n.push({type:`paren`,value:`[`}),t++;continue}if(r===`]`){n.push({type:`paren`,value:`]`}),t++;continue}if(r===`:`){n.push({type:`separator`,value:`:`}),t++;continue}if(r===`,`){n.push({type:`delimiter`,value:`,`}),t++;continue}if(r===`"`){let r=t+1,i=r,a=!1;for(;;){if(i=e.indexOf(`"`,i),i===-1){a=!0;break}let t=0,n=i-1;for(;n>=r&&e[n]===`\\`;)t++,n--;if(t%2==0)break;i++}a?t=e.length:(n.push({type:`string`,value:e.slice(r,i)}),t=i+1);continue}if(r&&/\s/.test(r)){t++;continue}let i=/[0-9]/;if(r&&i.test(r)||r===`-`||r===`.`){let a=``;for(r===`-`&&(a+=r,r=e[++t]);r&&(i.test(r)||r===`.`||r===`e`||r===`E`||(r===`-`||r===`+`)&&(a[a.length-1]===`e`||a[a.length-1]===`E`));)a+=r,r=e[++t];n.push({type:`number`,value:a,unterminated:t===e.length});continue}let a=/[a-z]/i;if(r&&a.test(r)){let i=``;for(;r&&a.test(r)&&t!==e.length;)i+=r,r=e[++t];if(i==`true`||i==`false`||i===`null`)n.push({type:`name`,value:i});else{t++;continue}continue}t++}return n},c_=e=>{let t=[];for(let n of e)(n.type===`brace`||n.type===`paren`)&&(n.value===`{`||n.value===`[`?t.push(n.value):t.pop());let n=t[t.length-1],r=e.length,i=/^-?(0|[1-9][0-9]*)(\.[0-9]+)?([eE][-+]?[0-9]+)?$/;for(;r>0;){let t=e[r-1];switch(t.type){case`separator`:r--;continue;case`number`:if(t.unterminated||!i.test(t.value)){r--;continue}break;case`string`:let a=e[r-2];if(n===`{`&&(a?.type===`delimiter`||a?.type===`brace`&&a.value===`{`)){r--;continue}break;case`delimiter`:r--}break}return e.slice(0,r)},l_=e=>{let t=[];return e.map(e=>{e.type===`brace`&&(e.value===`{`?t.push(`}`):t.splice(t.lastIndexOf(`}`),1)),e.type===`paren`&&(e.value===`[`?t.push(`]`):t.splice(t.lastIndexOf(`]`),1))}),t.length>0&&t.reverse().map(t=>{t===`}`?e.push({type:`brace`,value:`}`}):t===`]`&&e.push({type:`paren`,value:`]`})}),e},u_=e=>{let t=``;return e.map(e=>{switch(e.type){case`string`:t+=`"`+e.value+`"`;break;default:t+=e.value}}),t},d_=e=>JSON.parse(u_(l_(c_(s_(e))))),f_=`__json_buf`;function p_(e,t){let n={};for(let t of Object.keys(e))t!==`input`&&(n[t]=e[t]);Object.defineProperty(n,f_,{value:t,enumerable:!1,writable:!0});let r,i=!1;return Object.defineProperty(n,"input",{enumerable:!0,configurable:!0,get(){return i||=(r=t?d_(t):{},!0),r}}),n}var m_,h_,g_,__,v_,y_,b_,x_,S_,C_,w_,T_,E_,D_,O_,k_,A_,j_,M_,N_,P_,F_,I_,L_,R_,z_;function B_(e){return e.type===`tool_use`||e.type===`server_tool_use`||e.type===`mcp_tool_use`}var V_=(()=>{class e{constructor(e,t){m_.add(this),this.messages=[],this.receivedMessages=[],h_.set(this,void 0),g_.set(this,null),this.controller=new AbortController,__.set(this,void 0),v_.set(this,()=>{}),y_.set(this,()=>{}),b_.set(this,void 0),x_.set(this,()=>{}),S_.set(this,()=>{}),C_.set(this,{}),w_.set(this,!1),T_.set(this,!1),E_.set(this,!1),D_.set(this,!1),O_.set(this,void 0),k_.set(this,void 0),A_.set(this,void 0),j_.set(this,void 0),P_.set(this,e=>{if(K(this,T_,!0,`f`),wd(e)&&(e=new Dd),e instanceof Dd)return K(this,E_,!0,`f`),this._emit(`abort`,e);if(e instanceof J)return this._emit(`error`,e);if(e instanceof Error){let t=new J(e.message);return t.cause=e,this._emit(`error`,t)}return this._emit(`error`,new J(String(e)))}),K(this,__,new Promise((e,t)=>{K(this,v_,e,`f`),K(this,y_,t,`f`)}),`f`),K(this,b_,new Promise((e,t)=>{K(this,x_,e,`f`),K(this,S_,t,`f`)}),`f`),q(this,__,`f`).catch(()=>{}),q(this,b_,`f`).catch(()=>{}),K(this,g_,e,`f`),K(this,j_,t?.logger??console,`f`)}get response(){return q(this,O_,`f`)}get request_id(){return q(this,k_,`f`)}get workspace_id(){return q(this,A_,`f`)}async withResponse(){K(this,D_,!0,`f`);let e=await q(this,__,`f`);if(!e)throw Error("Could not resolve a `Response` object");return{data:this,response:e,request_id:e.headers.get(`request-id`),workspace_id:e.headers.get(`anthropic-workspace-id`)}}static fromReadableStream(t){let n=new e(null);return n._run(()=>n._fromReadableStream(t)),n}static createMessage(t,n,r,{logger:i}={}){let a=new e(n,{logger:i});for(let e of n.messages)a._addMessageParam(e);return K(a,g_,{...n,stream:!0},`f`),a._run(()=>a._createMessage(t,{...n,stream:!0},{...r,headers:{...r?.headers,[Bm]:`stream`}})),a}_run(e){e().then(()=>{this._emitFinal(),this._emit(`end`)},q(this,P_,`f`))}_addMessageParam(e){this.messages.push(e)}_addMessage(e,t=!0){this.receivedMessages.push(e),t&&this._emit(`message`,e)}async _createMessage(e,t,n){let r=n?.signal,i;r&&(r.aborted&&this.controller.abort(),i=this.controller.abort.bind(this.controller),r.addEventListener(`abort`,i));try{q(this,m_,`m`,F_).call(this);let{response:r,data:i}=await e.create({...t,stream:!0},{...n,signal:this.controller.signal}).withResponse();this._connected(r);for await(let e of i)q(this,m_,`m`,I_).call(this,e);if(i.controller.signal?.aborted)throw new Dd;q(this,m_,`m`,L_).call(this)}finally{r&&i&&r.removeEventListener(`abort`,i)}}_connected(e){this.ended||(K(this,O_,e,`f`),K(this,k_,e?.headers.get(`request-id`),`f`),K(this,A_,e?.headers.get(`anthropic-workspace-id`),`f`),q(this,v_,`f`).call(this,e),this._emit(`connect`))}get ended(){return q(this,w_,`f`)}get errored(){return q(this,T_,`f`)}get aborted(){return q(this,E_,`f`)}abort(){this.controller.abort()}on(e,t){return(q(this,C_,`f`)[e]||(q(this,C_,`f`)[e]=[])).push({listener:t}),this}off(e,t){let n=q(this,C_,`f`)[e];if(!n)return this;let r=n.findIndex(e=>e.listener===t);return r>=0&&n.splice(r,1),this}once(e,t){return(q(this,C_,`f`)[e]||(q(this,C_,`f`)[e]=[])).push({listener:t,once:!0}),this}emitted(e){return new Promise((t,n)=>{K(this,D_,!0,`f`),e!==`error`&&this.once(`error`,n),this.once(e,t)})}async done(){K(this,D_,!0,`f`),await q(this,b_,`f`)}get currentMessage(){return q(this,h_,`f`)}async finalMessage(){return await this.done(),q(this,m_,`m`,M_).call(this)}async finalText(){return await this.done(),q(this,m_,`m`,N_).call(this)}_emit(e,...t){if(q(this,w_,`f`))return;e===`end`&&(K(this,w_,!0,`f`),q(this,x_,`f`).call(this));let n=q(this,C_,`f`)[e];if(n&&(q(this,C_,`f`)[e]=n.filter(e=>!e.once),n.forEach(({listener:e})=>e(...t))),e===`abort`){let e=t[0];!q(this,D_,`f`)&&!n?.length&&Promise.reject(e),q(this,y_,`f`).call(this,e),q(this,S_,`f`).call(this,e),this._emit(`end`);return}if(e===`error`){let e=t[0];!q(this,D_,`f`)&&!n?.length&&Promise.reject(e),q(this,y_,`f`).call(this,e),q(this,S_,`f`).call(this,e),this._emit(`end`)}}_emitFinal(){this.receivedMessages.at(-1)&&this._emit(`finalMessage`,q(this,m_,`m`,M_).call(this))}async _fromReadableStream(e,t){let n=t?.signal,r;n&&(n.aborted&&this.controller.abort(),r=this.controller.abort.bind(this.controller),n.addEventListener(`abort`,r));try{q(this,m_,`m`,F_).call(this),this._connected(null);let t=qp.fromReadableStream(e,this.controller);for await(let e of t)q(this,m_,`m`,I_).call(this,e);if(t.controller.signal?.aborted)throw new Dd;q(this,m_,`m`,L_).call(this)}finally{n&&r&&n.removeEventListener(`abort`,r)}}[(h_=new WeakMap,g_=new WeakMap,__=new WeakMap,v_=new WeakMap,y_=new WeakMap,b_=new WeakMap,x_=new WeakMap,S_=new WeakMap,C_=new WeakMap,w_=new WeakMap,T_=new WeakMap,E_=new WeakMap,D_=new WeakMap,O_=new WeakMap,k_=new WeakMap,A_=new WeakMap,j_=new WeakMap,P_=new WeakMap,m_=new WeakSet,M_=function(){if(this.receivedMessages.length===0)throw new J(`stream ended without producing a Message with role=assistant`);return this.receivedMessages.at(-1)},N_=function(){if(this.receivedMessages.length===0)throw new J(`stream ended without producing a Message with role=assistant`);let e=this.receivedMessages.at(-1).content.filter(e=>e.type===`text`).map(e=>e.text);if(e.length===0)throw new J(`stream ended without producing a content block with type=text`);return e.join(` `)},F_=function(){this.ended||K(this,h_,void 0,`f`)},I_=function(e){if(this.ended)return;let t=q(this,m_,`m`,R_).call(this,e);switch(this._emit(`streamEvent`,e,t),e.type){case`content_block_delta`:{let n=t.content.at(-1);switch(e.delta.type){case`text_delta`:n.type===`text`&&this._emit(`text`,e.delta.text,n.text||``);break;case`citations_delta`:n.type===`text`&&this._emit(`citation`,e.delta.citation,n.citations??[]);break;case`input_json_delta`:if(B_(n)&&q(this,C_,`f`).inputJson?.length){let t;try{t=n.input}catch(e){q(this,P_,`f`).call(this,q(this,m_,`m`,z_).call(this,n,e));break}this._emit(`inputJson`,e.delta.partial_json,t)}break;case`thinking_delta`:n.type===`thinking`&&this._emit(`thinking`,e.delta.thinking,n.thinking);break;case`signature_delta`:n.type===`thinking`&&this._emit(`signature`,n.signature);break;case`compaction_delta`:n.type===`compaction`&&n.content&&this._emit(`compaction`,n.content);break;default:e.delta}break}case`message_stop`:this._addMessageParam(t),this._addMessage(i_(t,q(this,g_,`f`),{logger:q(this,j_,`f`)}),!0);break;case`content_block_stop`:this._emit(`contentBlock`,t.content.at(-1));break;case`message_start`:K(this,h_,t,`f`)}},L_=function(){if(this.ended)throw new J(`stream has ended, this shouldn't happen`);let e=q(this,h_,`f`);if(!e)throw new J(`request ended without sending any chunks`);return K(this,h_,void 0,`f`),i_(e,q(this,g_,`f`),{logger:q(this,j_,`f`)})},R_=function(e){let t=q(this,h_,`f`);if(e.type===`message_start`){if(t)throw new J(`Unexpected event order, got ${e.type} before receiving "message_stop"`);return e.message}if(!t)throw new J(`Unexpected event order, got ${e.type} before "message_start"`);switch(e.type){case`message_stop`:return t;case`message_delta`:return t.stop_reason=e.delta.stop_reason,t.stop_sequence=e.delta.stop_sequence,t.stop_details=e.delta.stop_details,t.usage.output_tokens=e.usage.output_tokens,e.delta.container!=null&&(t.container=e.delta.container),e.context_management!=null&&(t.context_management=e.context_management),e.input_transformations!=null&&(t.input_transformations=e.input_transformations),e.usage.input_tokens!=null&&(t.usage.input_tokens=e.usage.input_tokens),e.usage.cache_creation_input_tokens!=null&&(t.usage.cache_creation_input_tokens=e.usage.cache_creation_input_tokens),e.usage.cache_read_input_tokens!=null&&(t.usage.cache_read_input_tokens=e.usage.cache_read_input_tokens),e.usage.server_tool_use!=null&&(t.usage.server_tool_use=e.usage.server_tool_use),e.usage.iterations!=null&&(t.usage.iterations=e.usage.iterations),e.usage.fallback_credit!=null&&(t.usage.fallback_credit=e.usage.fallback_credit),e.usage.output_tokens_details!=null&&(t.usage.output_tokens_details=e.usage.output_tokens_details),t;case`content_block_start`:return t.content.push(e.content_block),e.content_block.type===`fallback`&&(t.model=e.content_block.to.model),t;case`content_block_delta`:{let n=t.content.at(e.index);switch(e.delta.type){case`text_delta`:n?.type===`text`&&(t.content[e.index]={...n,text:(n.text||``)+e.delta.text});break;case`citations_delta`:n?.type===`text`&&(t.content[e.index]={...n,citations:[...n.citations??[],e.delta.citation]});break;case`input_json_delta`:if(n&&B_(n)){let r=(n.__json_buf||``)+e.delta.partial_json;t.content[e.index]=p_(n,r)}break;case`thinking_delta`:n?.type===`thinking`&&(t.content[e.index]={...n,thinking:n.thinking+e.delta.thinking});break;case`signature_delta`:n?.type===`thinking`&&(t.content[e.index]={...n,signature:e.delta.signature});break;case`compaction_delta`:if(n?.type===`compaction`){let r={...n,content:e.delta.content};`encrypted_content`in e.delta&&(r.encrypted_content=e.delta.encrypted_content),t.content[e.index]=r}break;default:e.delta}return t}case`content_block_stop`:{let n=t.content.at(e.index);if(n&&B_(n)&&`__json_buf`in n){let e;try{e=n.input}catch(t){e={},q(this,P_,`f`).call(this,q(this,m_,`m`,z_).call(this,n,t))}Object.defineProperty(n,"input",{value:e,enumerable:!0,configurable:!0,writable:!0})}return t}}},z_=function(e,t){let n=e[f_];return new J(`Unable to parse tool parameter JSON from model. Please retry your request or adjust your prompt. Error: ${t}. JSON: ${n}`)},Symbol.asyncIterator)](){let e=[],t=[],n=!1;return this.on(`streamEvent`,n=>{let r=t.shift();r?r.resolve(n):e.push(n)}),this.on(`end`,()=>{n=!0;for(let e of t)e.resolve(void 0);t.length=0}),this.on(`abort`,e=>{n=!0;for(let n of t)n.reject(e);t.length=0}),this.on(`error`,e=>{n=!0;for(let n of t)n.reject(e);t.length=0}),{next:async()=>e.length?{value:e.shift(),done:!1}:n?{value:void 0,done:!0}:new Promise((e,n)=>t.push({resolve:e,reject:n})).then(e=>e?{value:e,done:!1}:{value:void 0,done:!0}),return:async()=>(this.abort(),{value:void 0,done:!0})}}toReadableStream(){return new qp(this[Symbol.asyncIterator].bind(this),this.controller).toReadableStream()}}return e})(),H_,U_,W_,G_,K_,q_,J_,Y_,X_,Z_,Q_,$_=(()=>{class e extends V_{constructor(e,t){super(e),H_.add(this),U_.set(this,void 0),W_.set(this,0),G_.set(this,[]),K_.set(this,[]),q_.set(this,void 0),J_.set(this,[]),Y_.set(this,!1),K(this,U_,t,`f`)}get toolCalls(){return q(this,K_,`f`)}static start(t,n,r,i){let a=new e({...n,stream:!0},i);for(let e of n.messages)a._addMessageParam(e);return a._run(()=>a._createMessage(t,{...n,stream:!0},{...r,headers:{...r?.headers,[Bm]:`stream`}})),a}_emit(e,...t){var n;if(e!==`streamEvent`||this.ended){super._emit(e,...t);return}K(this,W_,(n=q(this,W_,`f`),n++,n),`f`);let[r,i]=t,a=r.type===`content_block_stop`?i.content[r.index]:void 0,o=a?.type===`tool_use`?a:void 0;o&&q(this,K_,`f`).push(o),super._emit(e,...t),q(this,H_,`m`,X_).call(this,r,o),q(this,H_,`m`,Z_).call(this)}[(U_=new WeakMap,W_=new WeakMap,G_=new WeakMap,K_=new WeakMap,q_=new WeakMap,J_=new WeakMap,Y_=new WeakMap,H_=new WeakSet,Symbol.asyncIterator)](){let e=super[Symbol.asyncIterator](),t={handled:q(this,W_,`f`)};q(this,G_,`f`).push(t);let n=!1;return{next:async()=>{n&&(n=!1,t.handled++,q(this,H_,`m`,Z_).call(this));try{let r=await e.next();return n=!r.done,r.done&&q(this,H_,`m`,Q_).call(this,t),r}catch(e){throw q(this,H_,`m`,Q_).call(this,t),e}},return:async()=>{let n=e.return?.();return q(this,H_,`m`,Q_).call(this,t),await n??{value:void 0,done:!0}}}}}return X_=function(e,t){if(q(this,Y_,`f`))return;if(e.type===`content_block_start`&&e.content_block.type===`fallback`){K(this,Y_,!0,`f`),K(this,q_,void 0,`f`);return}let n=e.type===`content_block_start`||e.type===`message_delta`&&e.delta.stop_reason===`tool_use`;q(this,q_,`f`)&&n&&(q(this,J_,`f`).push({toolUse:q(this,q_,`f`),event:q(this,W_,`f`)}),K(this,q_,void 0,`f`)),t&&K(this,q_,t,`f`)},Z_=function(){if(this.errored||this.controller.signal.aborted)return;let e=Math.min(q(this,W_,`f`),...q(this,G_,`f`).map(e=>e.handled));for(;q(this,J_,`f`)[0]&&q(this,J_,`f`)[0].event<=e;)q(this,U_,`f`).call(this,q(this,J_,`f`).shift().toolUse)},Q_=function(e){let t=q(this,G_,`f`).indexOf(e);t>=0&&(q(this,G_,`f`).splice(t,1),q(this,H_,`m`,Z_).call(this))},e})();function ev(){let e,t;return{promise:new Promise((n,r)=>{e=n,t=r}),resolve:e,reject:t}}var tv,nv,rv,iv,av,ov,sv,cv,lv,uv,dv,fv,pv,mv,hv,gv,_v,vv,yv,bv,xv,Sv,Cv,wv,Tv,Ev,Dv=(()=>{class e{constructor(e,t,n){tv.add(this),this.client=e,nv.set(this,!1),rv.set(this,!1),iv.set(this,void 0),av.set(this,void 0),ov.set(this,void 0),sv.set(this,void 0),cv.set(this,void 0),lv.set(this,void 0),uv.set(this,0),dv.set(this,{status:`idle`}),fv.set(this,void 0),pv.set(this,null),mv.set(this,new Map),hv.set(this,[]),Ov(t),kv(t),Av(t),K(this,iv,{params:{...t,messages:JSON.parse(JSON.stringify(t.messages))}},`f`);let r=Wm(t.tools,t.messages);K(this,av,{...n,headers:X([Vm(`BetaToolRunner`),r.length?{[zm]:r.join(`, `)}:void 0,n?.headers])},`f`),K(this,lv,ev(),`f`)}async*[(nv=new WeakMap,rv=new WeakMap,iv=new WeakMap,av=new WeakMap,ov=new WeakMap,sv=new WeakMap,cv=new WeakMap,lv=new WeakMap,uv=new WeakMap,dv=new WeakMap,fv=new WeakMap,pv=new WeakMap,mv=new WeakMap,hv=new WeakMap,tv=new WeakSet,Symbol.asyncIterator)](){var e;if(q(this,nv,`f`))throw new J(`Cannot iterate over a consumed stream`);K(this,nv,!0,`f`),K(this,rv,!0,`f`),K(this,cv,void 0,`f`);try{for(;;)try{if(q(this,iv,`f`).params.max_iterations&&q(this,uv,`f`)>=q(this,iv,`f`).params.max_iterations)break;if(q(this,tv,`m`,Tv).call(this),q(this,dv,`f`).status===`scheduled`&&Bv(q(this,pv,`f`))!==`resume`){yield*q(this,tv,`m`,yv).call(this,q(this,dv,`f`).config);continue}K(this,rv,!1,`f`),K(this,cv,void 0,`f`),K(this,uv,(e=q(this,uv,`f`),e++,e),`f`),K(this,ov,void 0,`f`);let{max_iterations:t,runToolsEagerly:n,...r}=q(this,iv,`f`).params;if(yield*q(this,tv,`m`,gv).call(this,r),q(this,rv,`f`))K(this,pv,null,`f`);else{let e=await q(this,ov,`f`),t=Bv(e.stop_reason);K(this,pv,e.stop_reason,`f`),q(this,iv,`f`).params.messages.push({role:e.role,content:Fv(e.content)});let{container:n}=q(this,iv,`f`).params;if(e.container&&(n==null?q(this,iv,`f`).params.container=e.container.id:typeof n==`object`&&n.id==null&&(q(this,iv,`f`).params.container={...n,id:e.container.id})),t===`stop`){yield*q(this,tv,`m`,Cv).call(this);break}if(t===`resume`)continue}let i=await q(this,tv,`m`,wv).call(this,q(this,iv,`f`).params.messages.at(-1));if(i)q(this,iv,`f`).params.messages.push(i);else if(!q(this,rv,`f`)){yield*q(this,tv,`m`,Cv).call(this);break}}finally{q(this,sv,`f`)?.abort(),K(this,sv,void 0,`f`)}if(await q(this,tv,`m`,vv).call(this),!q(this,ov,`f`))throw new J(`ToolRunner concluded without a message from the server`);q(this,lv,`f`).resolve(await q(this,ov,`f`))}catch(e){throw K(this,nv,!1,`f`),q(this,lv,`f`).promise.catch(()=>{}),q(this,lv,`f`).reject(e),K(this,lv,ev(),`f`),e}}setMessagesParams(e){let t=typeof e==`function`?e(q(this,iv,`f`).params):e;if(Ov(t),Av(t),q(this,dv,`f`).status!==`idle`&&jv(t),q(this,dv,`f`).status===`in_flight`&&t.messages!==q(this,iv,`f`).params.messages)throw new J(`Message params can't be changed while the conversation is being compacted, because the compaction response is about to replace them. Change them after this iteration instead.`);q(this,iv,`f`).params=t,K(this,rv,!0,`f`),K(this,cv,void 0,`f`)}setRequestOptions(e){typeof e==`function`?K(this,av,e(q(this,av,`f`)),`f`):K(this,av,{...q(this,av,`f`),...e},`f`)}async generateToolResponse(e=q(this,av,`f`).signal){let t=await q(this,ov,`f`)??this.params.messages.at(-1);return t?q(this,tv,`m`,wv).call(this,t,e):null}deferToolCall(e){let t=typeof e==`string`?e:e.id;q(this,fv,`f`)&&!q(this,fv,`f`).has(t)&&q(this,fv,`f`).set(t,{status:`held`})}get deferredToolCalls(){let e=q(this,sv,`f`),t=q(this,fv,`f`);return!(e instanceof $_)||!t?[]:e.toolCalls.filter(e=>t.get(e.id)?.status===`held`)}done(){return q(this,lv,`f`).promise}async runUntilDone(){if(!q(this,nv,`f`))for await(let e of this);return this.done()}get params(){return q(this,iv,`f`).params}pushMessages(...e){this.setMessagesParams(t=>({...t,messages:[...t.messages,...e]}))}compactBeforeNextTurn(e){q(this,dv,`f`).status!==`in_flight`&&(jv(q(this,iv,`f`).params),K(this,dv,{status:`scheduled`,config:e??{type:`summarize`}},`f`))}addTools(...e){for(let t of e)`name`in t&&q(this,mv,`f`).set(t.name,`run`in t?t:null),q(this,hv,`f`).push({type:`addition`,tool:t})}removeTools(...e){for(let t of e){let e=typeof t==`string`?t:t.name;q(this,mv,`f`).set(e,null),q(this,hv,`f`).push({type:`removal`,name:e})}}then(e,t){return this.runUntilDone().then(e,t)}}return gv=async function*(e){await q(this,tv,`m`,vv).call(this),K(this,fv,void 0,`f`),e.stream?(K(this,sv,q(this,iv,`f`).params.runToolsEagerly?q(this,tv,`m`,_v).call(this,e):this.client.beta.messages.stream({...e},q(this,av,`f`)),`f`),K(this,ov,q(this,sv,`f`).finalMessage(),`f`),q(this,ov,`f`).catch(()=>{}),yield q(this,sv,`f`)):(K(this,ov,this.client.beta.messages.create({...e,stream:!1},q(this,av,`f`)),`f`),yield q(this,ov,`f`))},_v=function(e){let t=new Map;return K(this,fv,t,`f`),$_.start(this.client.beta.messages,e,q(this,av,`f`),e=>{if(t.has(e.id))return;let n=Pv(q(this,tv,`m`,bv).call(this),q(this,tv,`m`,xv).call(this),e,q(this,av,`f`));n.catch(()=>{}),t.set(e.id,{status:`started`,result:n})})},vv=async function(){let e=[...q(this,fv,`f`)?.values()??[]].filter(e=>e.status===`started`);await Promise.allSettled(e.map(e=>e.result))},yv=async function*(e){jv(q(this,iv,`f`).params);let{max_iterations:t,runToolsEagerly:n,...r}=q(this,iv,`f`).params,i=Mv(r);K(this,dv,{status:`in_flight`},`f`),K(this,cv,void 0,`f`);let a=q(this,ov,`f`);try{yield*q(this,tv,`m`,gv).call(this,{...i,compaction:e});let t=await q(this,ov,`f`);t.content.some(e=>e.type===`compaction`&&e.content)?(q(this,tv,`m`,Sv).call(this),q(this,iv,`f`).params.messages=[{role:t.role,content:t.content}]):(yp(this.client).warn(`Compaction produced no summary; keeping the conversation as it is.`),K(this,ov,a,`f`))}finally{K(this,dv,{status:`idle`},`f`)}},bv=function(){let e=new Map;for(let t of q(this,iv,`f`).params.tools)`run`in t&&e.set(t.name,t);for(let[t,n]of q(this,mv,`f`))n?e.set(t,n):e.delete(t);return e},xv=function(){let e=new Set(q(this,tv,`m`,bv).call(this).keys());for(let t of[...q(this,iv,`f`).params.messages,q(this,tv,`m`,Ev).call(this)])if(typeof t.content!=`string`){for(let n of t.content)if(t.role===`system`)Lv(n,e);else if(t.role===`assistant`&&n.type===`compaction`)for(let t of n.tool_changes??[])Lv(t,e)}return e},Sv=function(){let e=q(this,tv,`m`,xv).call(this);for(let t of q(this,tv,`m`,bv).call(this).keys())e.has(t)||q(this,mv,`f`).set(t,null)},Cv=async function*(){if(q(this,dv,`f`).status!==`scheduled`)return;let e=q(this,iv,`f`).params.messages.at(-1)?.content;if(Array.isArray(e)&&e.some(e=>e.type===`tool_use`)){yp(this.client).warn("The pending compaction was skipped because the last turn ended with tool calls that were not run. Call `compactBeforeNextTurn()` again if you continue the conversation."),K(this,dv,{status:`idle`},`f`);return}yield*q(this,tv,`m`,yv).call(this,q(this,dv,`f`).config)},wv=async function(e,t=q(this,av,`f`).signal){return q(this,cv,`f`)===void 0&&K(this,cv,Nv(q(this,tv,`m`,bv).call(this),q(this,tv,`m`,xv).call(this),e,{...q(this,av,`f`),signal:t},q(this,fv,`f`)),`f`),q(this,cv,`f`)},Tv=function(){q(this,pv,`f`)!==`pause_turn`&&q(this,hv,`f`).length!==0&&(q(this,iv,`f`).params.messages.push(q(this,tv,`m`,Ev).call(this)),K(this,hv,[],`f`))},Ev=function(){let e=[];for(let t of q(this,hv,`f`)){if(t.type===`removal`){e.push({type:`tool_removal`,tool:{type:`tool_reference`,name:t.name}});continue}let n=t.tool;if(`run`in t.tool){let{run:e,parse:r,close:i,...a}=t.tool;n=a}e.push({type:`tool_addition`,tool:{type:`tool_definition`,definition:n}})}return{role:`system`,content:e}},e})();function Ov(e){if(`compaction`in e&&e.compaction!=null)throw new J("`compaction` cannot be set on a tool runner: every request in the loop would compact again. Call `runner.compactBeforeNextTurn()` when the conversation should be compacted instead.")}function kv(e){if(`compactionControl`in e&&e.compactionControl!=null)throw new J("`compactionControl` has been removed from the tool runner. Use server-side compaction instead: call `runner.compactBeforeNextTurn()` when the conversation should be compacted.")}function Av(e){if(e.runToolsEagerly&&!e.stream)throw TypeError("`runToolsEagerly: true` needs `stream: true` in the tool runner's params, because a reply that isn't streamed arrives whole.")}function jv(e){if(e.context_management?.edits?.some(e=>e.type.startsWith(`compact_`)))throw new J("`compactBeforeNextTurn()` can't be used while `context_management` has a compaction edit, because the API doesn't accept a compaction block together with one. Remove the edit first.")}function Mv(e){let{context_management:t,stop_sequences:n,output_format:r,...i}=e,a=({format:e,...t})=>t;return(i.tool_choice?.type===`any`||i.tool_choice?.type===`tool`)&&delete i.tool_choice,i.output_config&&=a(i.output_config),Array.isArray(i.fallbacks)&&(i.fallbacks=i.fallbacks.map(e=>e.output_config?{...e,output_config:a(e.output_config)}:e)),i}async function Nv(e,t,n,r,i){if(!n||n.role!==`assistant`||!n.content||typeof n.content==`string`)return null;let a=n.content.filter(e=>e.type===`tool_use`);return a.length===0?null:{role:`user`,content:await Promise.all(a.map(n=>{let a=i?.get(n.id);if(a?.status===`started`)return a.result;let o=Pv(e,t,n,r);return i?.set(n.id,{status:`started`,result:o}),o}))}}async function Pv(e,t,n,r){let i=t.has(n.name)?e.get(n.name):void 0;if(!i)return Iv(n);try{let e=n.input;`parse`in i&&i.parse&&(e=i.parse(e));let t=await i.run(e,{toolUse:n,toolUseBlock:n,signal:r?.signal});return{type:`tool_result`,tool_use_id:n.id,content:t}}catch(e){return{type:`tool_result`,tool_use_id:n.id,content:e instanceof Fh?e.content:`Error: ${e instanceof Error?e.message:String(e)}`,is_error:!0}}}function Fv(e){return e}function Iv(e){return{type:`tool_result`,tool_use_id:e.id,content:`Error: Tool '${e.name}' not found`,is_error:!0}}function Lv(e,t){switch(e.type){case`tool_removal`:case`tool_addition`:Rv(e,t)}}function Rv(e,t){let n=zv(e.tool);n!==void 0&&(e.type===`tool_removal`?t.delete(n):t.add(n))}function zv(e){switch(e.type){case`tool_reference`:return e.name;case`tool_definition`:return`name`in e.definition?e.definition.name:void 0;default:return}}function Bv(e){if(e===null)return`stop`;switch(e){case`tool_use`:return`run_tools`;case`pause_turn`:case`compaction`:return`resume`;case`end_turn`:case`stop_sequence`:case`max_tokens`:case`model_context_window_exceeded`:case`refusal`:return`stop`;default:return`stop`}}var Vv={},Hv=[`claude-mythos-preview`,`claude-opus-4-6`],Uv=(()=>{class e extends Y{constructor(){super(...arguments),this.batches=new t_(this._client)}create(e,t){let n=Wv(e),{betas:r,user_profile_id:i,workspace_id:a,...o}=n;o.model in Vv&&console.warn(`The model '${o.model}' is deprecated and will reach end-of-life on ${Vv[o.model]}\nPlease migrate to a newer model. Visit https://docs.anthropic.com/en/docs/resources/model-deprecations for more information.`),Hv.includes(o.model)&&o.thinking&&o.thinking.type===`enabled`&&console.warn(`Using Claude with ${o.model} and 'thinking.type=enabled' is deprecated. Use 'thinking.type=adaptive' instead which results in better model performance in our testing: https://platform.claude.com/docs/en/build-with-claude/adaptive-thinking`);let s=t?.timeout??this._client._options.timeout;if(!o.stream&&s==null){let e=n_[o.model]??void 0;s=this._client.calculateNonstreamingTimeout(o.max_tokens,e)}let c=Gm(o.tools,o.messages);return this._client.post(`/v1/messages?beta=true`,{body:o,timeout:s??6e5,...t,headers:X([{...r?.toString()==null?void 0:{"anthropic-beta":r?.toString()},...i==null?void 0:{"anthropic-user-profile-id":i},...a==null?void 0:{"anthropic-workspace-id":a}},c,t?.headers]),stream:n.stream??!1})}parse(e,t){return t={...t,headers:X([{"anthropic-beta":[...e.betas??[],`structured-outputs-2025-12-15`].toString()},t?.headers])},this.create(e,t).then(t=>a_(t,e,{logger:this._client.logger??console}))}stream(e,t){return V_.createMessage(this,e,t)}countTokens(e,t){let{betas:n,user_profile_id:r,workspace_id:i,...a}=Wv(e);return this._client.post(`/v1/messages/count_tokens?beta=true`,{body:a,...t,headers:X([{"anthropic-beta":[...n??[],`token-counting-2024-11-01`].toString(),...r==null?void 0:{"anthropic-user-profile-id":r},...i==null?void 0:{"anthropic-workspace-id":i}},t?.headers])})}toolRunner(e,t){return new Dv(this._client,e,t)}}return e.Batches=t_,e.BetaToolRunner=Dv,e.ToolError=Fh,e})();function Wv(e){if(!e.output_format)return e;if(e.output_config?.format)throw new J(`Both output_format and output_config.format were provided. Please use only output_config.format (output_format is deprecated).`);let{output_format:t,...n}=e;return{...n,output_config:{...e.output_config,format:t}}}var Gv=class extends Y{retrieve(e,t){return this._client.get(Z`/v1/organizations/api_keys/${e}?beta=true`,t)}update(e,t,n){return this._client.post(Z`/v1/organizations/api_keys/${e}?beta=true`,{body:t,...n})}list(e={},t){return this._client.getAPIList(`/v1/organizations/api_keys?beta=true`,dm,{query:e,...t})}},Kv=class extends Y{retrieve(e){return this._client.get(`/v1/organizations/compliance_settings?beta=true`,e)}update(e,t){return this._client.post(`/v1/organizations/compliance_settings?beta=true`,{body:e,...t})}},qv=class extends Y{create(e,t){return this._client.post(`/v1/organizations/external_keys?beta=true`,{body:e,...t})}retrieve(e,t){return this._client.get(Z`/v1/organizations/external_keys/${e}?beta=true`,t)}update(e,t,n){return this._client.post(Z`/v1/organizations/external_keys/${e}?beta=true`,{body:t,...n})}list(e={},t){return this._client.getAPIList(`/v1/organizations/external_keys?beta=true`,fm,{query:e,...t})}delete(e,t){return this._client.delete(Z`/v1/organizations/external_keys/${e}?beta=true`,t)}validate(e,t){return this._client.post(Z`/v1/organizations/external_keys/${e}/validate?beta=true`,t)}},Jv=class extends Y{create(e,t){return this._client.post(`/v1/organizations/invites?beta=true`,{body:e,...t})}retrieve(e,t){return this._client.get(Z`/v1/organizations/invites/${e}?beta=true`,t)}list(e={},t){return this._client.getAPIList(`/v1/organizations/invites?beta=true`,dm,{query:e,...t})}delete(e,t){return this._client.delete(Z`/v1/organizations/invites/${e}?beta=true`,t)}},Yv=class extends Y{list(e={},t){return this._client.getAPIList(`/v1/organizations/rate_limits?beta=true`,fm,{query:e,...t})}},Xv=class extends Y{retrieve(e,t){return this._client.get(Z`/v1/organizations/users/${e}?beta=true`,t)}update(e,t,n){return this._client.post(Z`/v1/organizations/users/${e}?beta=true`,{body:t,...n})}list(e={},t){return this._client.getAPIList(`/v1/organizations/users?beta=true`,dm,{query:e,...t})}remove(e,t){return this._client.delete(Z`/v1/organizations/users/${e}?beta=true`,t)}},Zv=class extends Y{create(e,t){let{betas:n,...r}=e;return this._client.post(`/v1/organizations/federation_issuers?beta=true`,{body:r,...t,headers:X([{...n?.toString()==null?void 0:{"anthropic-beta":n?.toString()}},t?.headers])})}retrieve(e,t={},n){let{betas:r}=t??{};return this._client.get(Z`/v1/organizations/federation_issuers/${e}?beta=true`,{...n,headers:X([{...r?.toString()==null?void 0:{"anthropic-beta":r?.toString()}},n?.headers])})}update(e,t,n){let{betas:r,...i}=t;return this._client.post(Z`/v1/organizations/federation_issuers/${e}?beta=true`,{body:i,...n,headers:X([{...r?.toString()==null?void 0:{"anthropic-beta":r?.toString()}},n?.headers])})}list(e={},t){let{betas:n,...r}=e??{};return this._client.getAPIList(`/v1/organizations/federation_issuers?beta=true`,fm,{query:r,...t,headers:X([{...n?.toString()==null?void 0:{"anthropic-beta":n?.toString()}},t?.headers])})}archive(e,t={},n){let{betas:r}=t??{};return this._client.post(Z`/v1/organizations/federation_issuers/${e}/archive?beta=true`,{...n,headers:X([{...r?.toString()==null?void 0:{"anthropic-beta":r?.toString()}},n?.headers])})}},Qv=class extends Y{list(e,t={},n){let{betas:r,...i}=t??{};return this._client.getAPIList(Z`/v1/organizations/federation_rules/${e}/workspaces?beta=true`,fm,{query:i,...n,headers:X([{...r?.toString()==null?void 0:{"anthropic-beta":r?.toString()}},n?.headers])})}add(e,t,n){let{betas:r,...i}=t;return this._client.post(Z`/v1/organizations/federation_rules/${e}/workspaces?beta=true`,{body:i,...n,headers:X([{...r?.toString()==null?void 0:{"anthropic-beta":r?.toString()}},n?.headers])})}remove(e,t,n){let{federation_rule_id:r,betas:i}=t;return this._client.delete(Z`/v1/organizations/federation_rules/${r}/workspaces/${e}?beta=true`,{...n,headers:X([{...i?.toString()==null?void 0:{"anthropic-beta":i?.toString()}},n?.headers])})}},$v=(()=>{class e extends Y{constructor(){super(...arguments),this.workspaces=new Qv(this._client)}create(e,t){let{betas:n,...r}=e;return this._client.post(`/v1/organizations/federation_rules?beta=true`,{body:r,...t,headers:X([{...n?.toString()==null?void 0:{"anthropic-beta":n?.toString()}},t?.headers])})}retrieve(e,t={},n){let{betas:r}=t??{};return this._client.get(Z`/v1/organizations/federation_rules/${e}?beta=true`,{...n,headers:X([{...r?.toString()==null?void 0:{"anthropic-beta":r?.toString()}},n?.headers])})}update(e,t,n){let{betas:r,...i}=t;return this._client.post(Z`/v1/organizations/federation_rules/${e}?beta=true`,{body:i,...n,headers:X([{...r?.toString()==null?void 0:{"anthropic-beta":r?.toString()}},n?.headers])})}list(e={},t){let{betas:n,...r}=e??{};return this._client.getAPIList(`/v1/organizations/federation_rules?beta=true`,fm,{query:r,...t,headers:X([{...n?.toString()==null?void 0:{"anthropic-beta":n?.toString()}},t?.headers])})}archive(e,t={},n){let{betas:r}=t??{};return this._client.post(Z`/v1/organizations/federation_rules/${e}/archive?beta=true`,{...n,headers:X([{...r?.toString()==null?void 0:{"anthropic-beta":r?.toString()}},n?.headers])})}}return e.Workspaces=Qv,e})(),ey=(()=>{class e extends Y{constructor(){super(...arguments),this.issuers=new Zv(this._client),this.rules=new $v(this._client)}}return e.Issuers=Zv,e.Rules=$v,e})(),ty=class extends Y{list(e,t={},n){let{betas:r,...i}=t??{};return this._client.getAPIList(Z`/v1/organizations/service_accounts/${e}/workspaces?beta=true`,fm,{query:i,...n,headers:X([{...r?.toString()==null?void 0:{"anthropic-beta":r?.toString()}},n?.headers])})}add(e,t,n){let{betas:r,...i}=t;return this._client.post(Z`/v1/organizations/service_accounts/${e}/workspaces?beta=true`,{body:i,...n,headers:X([{...r?.toString()==null?void 0:{"anthropic-beta":r?.toString()}},n?.headers])})}remove(e,t,n){let{service_account_id:r,betas:i}=t;return this._client.delete(Z`/v1/organizations/service_accounts/${r}/workspaces/${e}?beta=true`,{...n,headers:X([{...i?.toString()==null?void 0:{"anthropic-beta":i?.toString()}},n?.headers])})}},ny=(()=>{class e extends Y{constructor(){super(...arguments),this.workspaces=new ty(this._client)}create(e,t){let{betas:n,...r}=e;return this._client.post(`/v1/organizations/service_accounts?beta=true`,{body:r,...t,headers:X([{...n?.toString()==null?void 0:{"anthropic-beta":n?.toString()}},t?.headers])})}retrieve(e,t={},n){let{betas:r}=t??{};return this._client.get(Z`/v1/organizations/service_accounts/${e}?beta=true`,{...n,headers:X([{...r?.toString()==null?void 0:{"anthropic-beta":r?.toString()}},n?.headers])})}update(e,t,n){let{betas:r,...i}=t;return this._client.post(Z`/v1/organizations/service_accounts/${e}?beta=true`,{body:i,...n,headers:X([{...r?.toString()==null?void 0:{"anthropic-beta":r?.toString()}},n?.headers])})}list(e={},t){let{betas:n,...r}=e??{};return this._client.getAPIList(`/v1/organizations/service_accounts?beta=true`,fm,{query:r,...t,headers:X([{...n?.toString()==null?void 0:{"anthropic-beta":n?.toString()}},t?.headers])})}archive(e,t={},n){let{betas:r}=t??{};return this._client.post(Z`/v1/organizations/service_accounts/${e}/archive?beta=true`,{...n,headers:X([{...r?.toString()==null?void 0:{"anthropic-beta":r?.toString()}},n?.headers])})}}return e.Workspaces=ty,e})(),ry=class extends Y{retrieve(e,t,n){let{workspace_id:r}=t;return this._client.get(Z`/v1/organizations/workspaces/${r}/members/${e}?beta=true`,n)}update(e,t,n){let{workspace_id:r,...i}=t;return this._client.post(Z`/v1/organizations/workspaces/${r}/members/${e}?beta=true`,{body:i,...n})}list(e,t={},n){return this._client.getAPIList(Z`/v1/organizations/workspaces/${e}/members?beta=true`,dm,{query:t,...n})}add(e,t,n){return this._client.post(Z`/v1/organizations/workspaces/${e}/members?beta=true`,{body:t,...n})}remove(e,t,n){let{workspace_id:r}=t;return this._client.delete(Z`/v1/organizations/workspaces/${r}/members/${e}?beta=true`,n)}},iy=class extends Y{list(e,t={},n){return this._client.getAPIList(Z`/v1/organizations/workspaces/${e}/rate_limits?beta=true`,fm,{query:t,...n})}},ay=class extends Y{retrieve(e,t,n){let{workspace_id:r,betas:i}=t;return this._client.get(Z`/v1/organizations/workspaces/${r}/service_accounts/${e}?beta=true`,{...n,headers:X([{...i?.toString()==null?void 0:{"anthropic-beta":i?.toString()}},n?.headers])})}update(e,t,n){let{workspace_id:r,betas:i,...a}=t;return this._client.post(Z`/v1/organizations/workspaces/${r}/service_accounts/${e}?beta=true`,{body:a,...n,headers:X([{...i?.toString()==null?void 0:{"anthropic-beta":i?.toString()}},n?.headers])})}list(e,t={},n){let{betas:r,...i}=t??{};return this._client.getAPIList(Z`/v1/organizations/workspaces/${e}/service_accounts?beta=true`,fm,{query:i,...n,headers:X([{...r?.toString()==null?void 0:{"anthropic-beta":r?.toString()}},n?.headers])})}add(e,t,n){let{betas:r,...i}=t;return this._client.post(Z`/v1/organizations/workspaces/${e}/service_accounts?beta=true`,{body:i,...n,headers:X([{...r?.toString()==null?void 0:{"anthropic-beta":r?.toString()}},n?.headers])})}remove(e,t,n){let{workspace_id:r,betas:i}=t;return this._client.delete(Z`/v1/organizations/workspaces/${r}/service_accounts/${e}?beta=true`,{...n,headers:X([{...i?.toString()==null?void 0:{"anthropic-beta":i?.toString()}},n?.headers])})}},oy=(()=>{class e extends Y{constructor(){super(...arguments),this.rateLimits=new iy(this._client),this.members=new ry(this._client),this.serviceAccounts=new ay(this._client)}create(e,t){let{betas:n,...r}=e;return this._client.post(`/v1/organizations/workspaces?beta=true`,{body:r,...t,headers:X([{...n?.toString()==null?void 0:{"anthropic-beta":n?.toString()}},t?.headers])})}retrieve(e,t){return this._client.get(Z`/v1/organizations/workspaces/${e}?beta=true`,t)}update(e,t,n){return this._client.post(Z`/v1/organizations/workspaces/${e}?beta=true`,{body:t,...n})}list(e={},t){return this._client.getAPIList(`/v1/organizations/workspaces?beta=true`,dm,{query:e,...t})}archive(e,t){return this._client.post(Z`/v1/organizations/workspaces/${e}/archive?beta=true`,t)}}return e.RateLimits=iy,e.Members=ry,e.ServiceAccounts=ay,e})(),sy=(()=>{class e extends Y{constructor(){super(...arguments),this.apiKeys=new Gv(this._client),this.externalKeys=new qv(this._client),this.federation=new ey(this._client),this.invites=new Jv(this._client),this.serviceAccounts=new ny(this._client),this.users=new Xv(this._client),this.workspaces=new oy(this._client),this.rateLimits=new Yv(this._client),this.complianceSettings=new Kv(this._client)}retrieve(e){return this._client.get(`/v1/organizations/me?beta=true`,e)}}return e.APIKeys=Gv,e.ExternalKeys=qv,e.Federation=ey,e.Invites=Jv,e.ServiceAccounts=ny,e.Users=Xv,e.Workspaces=oy,e.RateLimits=Yv,e.ComplianceSettings=Kv,e})(),cy=(()=>{class e extends Y{list(e,t={},n){let{betas:r,workspace_id:i,...a}=t??{};return this._client.getAPIList(Z`/v1/sessions/${e}/events?beta=true`,fm,{query:a,...n,headers:X([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}send(e,t,n){let{betas:r,workspace_id:i,...a}=t;return this._client.post(Z`/v1/sessions/${e}/events?beta=true`,{body:a,...n,headers:X([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}stream(e,t={},n){let{betas:r,workspace_id:i,...a}=t??{};return this._client.get(Z`/v1/sessions/${e}/events/stream?beta=true`,{query:a,...n,headers:X([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers]),stream:!0})}toolRunner(e,t){return new Dg(e,{...t,client:this._client})}}return e.SessionToolRunner=Dg,e})(),ly=class extends Y{retrieve(e,t,n){let{session_id:r,betas:i,workspace_id:a}=t;return this._client.get(Z`/v1/sessions/${r}/resources/${e}?beta=true`,{...n,headers:X([{"anthropic-beta":[...i??[],`managed-agents-2026-04-01`].toString(),...a==null?void 0:{"anthropic-workspace-id":a}},n?.headers])})}update(e,t,n){let{session_id:r,betas:i,workspace_id:a,...o}=t;return this._client.post(Z`/v1/sessions/${r}/resources/${e}?beta=true`,{body:o,...n,headers:X([{"anthropic-beta":[...i??[],`managed-agents-2026-04-01`].toString(),...a==null?void 0:{"anthropic-workspace-id":a}},n?.headers])})}list(e,t={},n){let{betas:r,workspace_id:i,...a}=t??{};return this._client.getAPIList(Z`/v1/sessions/${e}/resources?beta=true`,fm,{query:a,...n,headers:X([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}delete(e,t,n){let{session_id:r,betas:i,workspace_id:a}=t;return this._client.delete(Z`/v1/sessions/${r}/resources/${e}?beta=true`,{...n,headers:X([{"anthropic-beta":[...i??[],`managed-agents-2026-04-01`].toString(),...a==null?void 0:{"anthropic-workspace-id":a}},n?.headers])})}add(e,t,n){let{betas:r,workspace_id:i,...a}=t;return this._client.post(Z`/v1/sessions/${e}/resources?beta=true`,{body:a,...n,headers:X([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}},uy=class extends Y{list(e,t,n){let{session_id:r,betas:i,workspace_id:a,...o}=t;return this._client.getAPIList(Z`/v1/sessions/${r}/threads/${e}/events?beta=true`,fm,{query:o,...n,headers:X([{"anthropic-beta":[...i??[],`managed-agents-2026-04-01`].toString(),...a==null?void 0:{"anthropic-workspace-id":a}},n?.headers])})}stream(e,t,n){let{session_id:r,betas:i,workspace_id:a,...o}=t;return this._client.get(Z`/v1/sessions/${r}/threads/${e}/stream?beta=true`,{query:o,...n,headers:X([{"anthropic-beta":[...i??[],`managed-agents-2026-04-01`].toString(),...a==null?void 0:{"anthropic-workspace-id":a}},n?.headers]),stream:!0})}},dy=(()=>{class e extends Y{constructor(){super(...arguments),this.events=new uy(this._client)}retrieve(e,t,n){let{session_id:r,betas:i,workspace_id:a}=t;return this._client.get(Z`/v1/sessions/${r}/threads/${e}?beta=true`,{...n,headers:X([{"anthropic-beta":[...i??[],`managed-agents-2026-04-01`].toString(),...a==null?void 0:{"anthropic-workspace-id":a}},n?.headers])})}list(e,t={},n){let{betas:r,workspace_id:i,...a}=t??{};return this._client.getAPIList(Z`/v1/sessions/${e}/threads?beta=true`,fm,{query:a,...n,headers:X([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}archive(e,t,n){let{session_id:r,betas:i,workspace_id:a}=t;return this._client.post(Z`/v1/sessions/${r}/threads/${e}/archive?beta=true`,{...n,headers:X([{"anthropic-beta":[...i??[],`managed-agents-2026-04-01`].toString(),...a==null?void 0:{"anthropic-workspace-id":a}},n?.headers])})}}return e.Events=uy,e})(),fy=(()=>{class e extends Y{constructor(){super(...arguments),this.events=new cy(this._client),this.resources=new ly(this._client),this.threads=new dy(this._client)}create(e,t){let{betas:n,workspace_id:r,...i}=e;return this._client.post(`/v1/sessions?beta=true`,{body:i,...t,headers:X([{"anthropic-beta":[...n??[],`managed-agents-2026-04-01`].toString(),...r==null?void 0:{"anthropic-workspace-id":r}},t?.headers])})}retrieve(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.get(Z`/v1/sessions/${e}?beta=true`,{...n,headers:X([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}update(e,t,n){let{betas:r,workspace_id:i,...a}=t;return this._client.post(Z`/v1/sessions/${e}?beta=true`,{body:a,...n,headers:X([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}list(e={},t){let{betas:n,workspace_id:r,...i}=e??{};return this._client.getAPIList(`/v1/sessions?beta=true`,pm,{query:i,...t,headers:X([{"anthropic-beta":[...n??[],`managed-agents-2026-04-01`].toString(),...r==null?void 0:{"anthropic-workspace-id":r}},t?.headers])})}delete(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.delete(Z`/v1/sessions/${e}?beta=true`,{...n,headers:X([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}archive(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.post(Z`/v1/sessions/${e}/archive?beta=true`,{...n,headers:X([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}}return e.Events=cy,e.Resources=ly,e.Threads=dy,e})(),py=class extends Y{create(e,t,n){let{betas:r,workspace_id:i,...a}=t;return this._client.post(Z`/v1/skills/${e}/versions?beta=true`,vm({body:a,...n,headers:X([{...r?.toString()==null?void 0:{"anthropic-beta":r?.toString()},...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])},this._client,!1))}retrieve(e,t,n){let{skill_id:r,betas:i,workspace_id:a}=t;return this._client.get(Z`/v1/skills/${r}/versions/${e}?beta=true`,{...n,headers:X([{...i?.toString()==null?void 0:{"anthropic-beta":i?.toString()},...a==null?void 0:{"anthropic-workspace-id":a}},n?.headers])})}list(e,t={},n){let{betas:r,workspace_id:i,...a}=t??{};return this._client.getAPIList(Z`/v1/skills/${e}/versions?beta=true`,fm,{query:a,...n,headers:X([{...r?.toString()==null?void 0:{"anthropic-beta":r?.toString()},...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}delete(e,t,n){let{skill_id:r,betas:i,workspace_id:a}=t;return this._client.delete(Z`/v1/skills/${r}/versions/${e}?beta=true`,{...n,headers:X([{...i?.toString()==null?void 0:{"anthropic-beta":i?.toString()},...a==null?void 0:{"anthropic-workspace-id":a}},n?.headers])})}download(e,t,n){let{skill_id:r,betas:i,workspace_id:a}=t;return this._client.get(Z`/v1/skills/${r}/versions/${e}/content?beta=true`,{...n,headers:X([{Accept:`application/binary`,...i?.toString()==null?void 0:{"anthropic-beta":i?.toString()},...a==null?void 0:{"anthropic-workspace-id":a}},n?.headers]),__binaryResponse:!0})}},my=(()=>{class e extends Y{constructor(){super(...arguments),this.versions=new py(this._client)}create(e,t){let{betas:n,workspace_id:r,...i}=e;return this._client.post(`/v1/skills?beta=true`,vm({body:i,...t,headers:X([{...n?.toString()==null?void 0:{"anthropic-beta":n?.toString()},...r==null?void 0:{"anthropic-workspace-id":r}},t?.headers])},this._client,!1))}retrieve(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.get(Z`/v1/skills/${e}?beta=true`,{...n,headers:X([{...r?.toString()==null?void 0:{"anthropic-beta":r?.toString()},...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}list(e={},t){let{betas:n,workspace_id:r,...i}=e??{};return this._client.getAPIList(`/v1/skills?beta=true`,fm,{query:i,...t,headers:X([{...n?.toString()==null?void 0:{"anthropic-beta":n?.toString()},...r==null?void 0:{"anthropic-workspace-id":r}},t?.headers])})}delete(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.delete(Z`/v1/skills/${e}?beta=true`,{...n,headers:X([{...r?.toString()==null?void 0:{"anthropic-beta":r?.toString()},...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}}return e.Versions=py,e})(),hy=class extends Y{create(e,t,n){let{betas:r,workspace_id:i,...a}=t;return this._client.post(Z`/v1/tunnels/${e}/certificates?beta=true`,{body:a,...n,headers:X([{"anthropic-beta":[...r??[],`mcp-tunnels-2026-06-22`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}retrieve(e,t,n){let{tunnel_id:r,betas:i,workspace_id:a}=t;return this._client.get(Z`/v1/tunnels/${r}/certificates/${e}?beta=true`,{...n,headers:X([{"anthropic-beta":[...i??[],`mcp-tunnels-2026-06-22`].toString(),...a==null?void 0:{"anthropic-workspace-id":a}},n?.headers])})}list(e,t={},n){let{betas:r,workspace_id:i,...a}=t??{};return this._client.getAPIList(Z`/v1/tunnels/${e}/certificates?beta=true`,fm,{query:a,...n,headers:X([{"anthropic-beta":[...r??[],`mcp-tunnels-2026-06-22`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}archive(e,t,n){let{tunnel_id:r,betas:i,workspace_id:a}=t;return this._client.post(Z`/v1/tunnels/${r}/certificates/${e}/archive?beta=true`,{...n,headers:X([{"anthropic-beta":[...i??[],`mcp-tunnels-2026-06-22`].toString(),...a==null?void 0:{"anthropic-workspace-id":a}},n?.headers])})}},gy=(()=>{class e extends Y{constructor(){super(...arguments),this.certificates=new hy(this._client)}create(e,t){let{betas:n,workspace_id:r,...i}=e;return this._client.post(`/v1/tunnels?beta=true`,{body:i,...t,headers:X([{"anthropic-beta":[...n??[],`mcp-tunnels-2026-06-22`].toString(),...r==null?void 0:{"anthropic-workspace-id":r}},t?.headers])})}retrieve(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.get(Z`/v1/tunnels/${e}?beta=true`,{...n,headers:X([{"anthropic-beta":[...r??[],`mcp-tunnels-2026-06-22`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}list(e={},t){let{betas:n,workspace_id:r,...i}=e??{};return this._client.getAPIList(`/v1/tunnels?beta=true`,fm,{query:i,...t,headers:X([{"anthropic-beta":[...n??[],`mcp-tunnels-2026-06-22`].toString(),...r==null?void 0:{"anthropic-workspace-id":r}},t?.headers])})}archive(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.post(Z`/v1/tunnels/${e}/archive?beta=true`,{...n,headers:X([{"anthropic-beta":[...r??[],`mcp-tunnels-2026-06-22`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}revealToken(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.post(Z`/v1/tunnels/${e}/reveal_token?beta=true`,{...n,headers:X([{"anthropic-beta":[...r??[],`mcp-tunnels-2026-06-22`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}rotateToken(e,t,n){let{betas:r,workspace_id:i,...a}=t;return this._client.post(Z`/v1/tunnels/${e}/rotate_token?beta=true`,{body:a,...n,headers:X([{"anthropic-beta":[...r??[],`mcp-tunnels-2026-06-22`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}}return e.Certificates=hy,e})(),_y=class extends Y{create(e,t,n){let{betas:r,workspace_id:i,...a}=t;return this._client.post(Z`/v1/vaults/${e}/credentials?beta=true`,{body:a,...n,headers:X([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}retrieve(e,t,n){let{vault_id:r,betas:i,workspace_id:a}=t;return this._client.get(Z`/v1/vaults/${r}/credentials/${e}?beta=true`,{...n,headers:X([{"anthropic-beta":[...i??[],`managed-agents-2026-04-01`].toString(),...a==null?void 0:{"anthropic-workspace-id":a}},n?.headers])})}update(e,t,n){let{vault_id:r,betas:i,workspace_id:a,...o}=t;return this._client.post(Z`/v1/vaults/${r}/credentials/${e}?beta=true`,{body:o,...n,headers:X([{"anthropic-beta":[...i??[],`managed-agents-2026-04-01`].toString(),...a==null?void 0:{"anthropic-workspace-id":a}},n?.headers])})}list(e,t={},n){let{betas:r,workspace_id:i,...a}=t??{};return this._client.getAPIList(Z`/v1/vaults/${e}/credentials?beta=true`,fm,{query:a,...n,headers:X([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}delete(e,t,n){let{vault_id:r,betas:i,workspace_id:a}=t;return this._client.delete(Z`/v1/vaults/${r}/credentials/${e}?beta=true`,{...n,headers:X([{"anthropic-beta":[...i??[],`managed-agents-2026-04-01`].toString(),...a==null?void 0:{"anthropic-workspace-id":a}},n?.headers])})}archive(e,t,n){let{vault_id:r,betas:i,workspace_id:a}=t;return this._client.post(Z`/v1/vaults/${r}/credentials/${e}/archive?beta=true`,{...n,headers:X([{"anthropic-beta":[...i??[],`managed-agents-2026-04-01`].toString(),...a==null?void 0:{"anthropic-workspace-id":a}},n?.headers])})}mcpOAuthValidate(e,t,n){let{vault_id:r,betas:i,workspace_id:a}=t;return this._client.post(Z`/v1/vaults/${r}/credentials/${e}/mcp_oauth_validate?beta=true`,{...n,headers:X([{"anthropic-beta":[...i??[],`managed-agents-2026-04-01`].toString(),...a==null?void 0:{"anthropic-workspace-id":a}},n?.headers])})}},vy=(()=>{class e extends Y{constructor(){super(...arguments),this.credentials=new _y(this._client)}create(e,t){let{betas:n,workspace_id:r,...i}=e;return this._client.post(`/v1/vaults?beta=true`,{body:i,...t,headers:X([{"anthropic-beta":[...n??[],`managed-agents-2026-04-01`].toString(),...r==null?void 0:{"anthropic-workspace-id":r}},t?.headers])})}retrieve(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.get(Z`/v1/vaults/${e}?beta=true`,{...n,headers:X([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}update(e,t,n){let{betas:r,workspace_id:i,...a}=t;return this._client.post(Z`/v1/vaults/${e}?beta=true`,{body:a,...n,headers:X([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}list(e={},t){let{betas:n,workspace_id:r,...i}=e??{};return this._client.getAPIList(`/v1/vaults?beta=true`,fm,{query:i,...t,headers:X([{"anthropic-beta":[...n??[],`managed-agents-2026-04-01`].toString(),...r==null?void 0:{"anthropic-workspace-id":r}},t?.headers])})}delete(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.delete(Z`/v1/vaults/${e}?beta=true`,{...n,headers:X([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}archive(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.post(Z`/v1/vaults/${e}/archive?beta=true`,{...n,headers:X([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}}return e.Credentials=_y,e})(),yy=(()=>{class e extends Y{constructor(){super(...arguments),this.models=new Jm(this._client),this.messages=new Uv(this._client),this.agents=new nh(this._client),this.environments=new Xg(this._client),this.sessions=new fy(this._client),this.deployments=new Lm(this._client),this.deploymentRuns=new Im(this._client),this.vaults=new vy(this._client),this.memoryStores=new $g(this._client),this.files=new qm(this._client),this.skills=new my(this._client),this.webhooks=new eh(this._client),this.userProfiles=new Ym(this._client),this.dreams=new Rm(this._client),this.tunnels=new gy(this._client),this.organization=new sy(this._client)}}return e.Models=Jm,e.Messages=Uv,e.Agents=nh,e.Environments=Xg,e.Sessions=fy,e.Deployments=Lm,e.DeploymentRuns=Im,e.Vaults=vy,e.MemoryStores=$g,e.Files=qm,e.Skills=my,e.Webhooks=eh,e.UserProfiles=Ym,e.Dreams=Rm,e.Tunnels=gy,e.Organization=sy,e})(),by=class extends Y{create(e,t){let{betas:n,workspace_id:r,...i}=e;return this._client.post(`/v1/complete`,{body:i,timeout:this._client._options.timeout??6e5,...t,headers:X([{...n?.toString()==null?void 0:{"anthropic-beta":n?.toString()},...r==null?void 0:{"anthropic-workspace-id":r}},t?.headers]),stream:e.stream??!1})}},xy=class extends Y{list(e={},t){let{workspace_id:n,...r}=e??{};return this._client.getAPIList(`/v1/files`,fm,{query:r,...t,headers:X([{...n==null?void 0:{"anthropic-workspace-id":n}},t?.headers])})}delete(e,t={},n){let{workspace_id:r}=t??{};return this._client.delete(Z`/v1/files/${e}`,{...n,headers:X([{...r==null?void 0:{"anthropic-workspace-id":r}},n?.headers])})}download(e,t={},n){let{workspace_id:r}=t??{};return this._client.get(Z`/v1/files/${e}/content`,{...n,headers:X([{Accept:`application/binary`,...r==null?void 0:{"anthropic-workspace-id":r}},n?.headers]),__binaryResponse:!0})}retrieveMetadata(e,t={},n){let{workspace_id:r}=t??{};return this._client.get(Z`/v1/files/${e}`,{...n,headers:X([{...r==null?void 0:{"anthropic-workspace-id":r}},n?.headers])})}upload(e,t){let{workspace_id:n,...r}=e;return this._client.post(`/v1/files`,vm({body:r,...t,headers:X([{...n==null?void 0:{"anthropic-workspace-id":n}},Km(r.file),t?.headers])},this._client))}};function Sy(e){return e?.output_config?.format}function Cy(e,t,n){let r=Sy(t);return!t||!(`parse`in(r??{}))?{...e,content:e.content.map(e=>e.type===`text`?Object.defineProperty({...e},"parsed_output",{value:null,enumerable:!1}):e),parsed_output:null}:wy(e,t,n)}function wy(e,t,n){let r=null,i=e.content.map(e=>{if(e.type===`text`){let n=Ty(t,e.text);return r===null&&(r=n),Object.defineProperty({...e},"parsed_output",{value:n,enumerable:!1})}return e});return{...e,content:i,parsed_output:r}}function Ty(e,t){let n=Sy(e);if(n?.type!==`json_schema`)return null;try{return`parse`in n?n.parse(t):JSON.parse(t)}catch(e){throw new J(`Failed to parse structured output: ${e}`)}}var Ey,Dy,Oy,ky,Ay,jy,My,Ny,Py,Fy,Iy,Ly,Ry,zy,By,Vy,Hy,Uy,Wy,Gy,Ky,qy,Jy,Yy,Xy;function Zy(e){return e.type===`tool_use`||e.type===`server_tool_use`}var Qy=(()=>{class e{constructor(e,t){Ey.add(this),this.messages=[],this.receivedMessages=[],Dy.set(this,void 0),Oy.set(this,null),this.controller=new AbortController,ky.set(this,void 0),Ay.set(this,()=>{}),jy.set(this,()=>{}),My.set(this,void 0),Ny.set(this,()=>{}),Py.set(this,()=>{}),Fy.set(this,{}),Iy.set(this,!1),Ly.set(this,!1),Ry.set(this,!1),zy.set(this,!1),By.set(this,void 0),Vy.set(this,void 0),Hy.set(this,void 0),Uy.set(this,void 0),Ky.set(this,e=>{if(K(this,Ly,!0,`f`),wd(e)&&(e=new Dd),e instanceof Dd)return K(this,Ry,!0,`f`),this._emit(`abort`,e);if(e instanceof J)return this._emit(`error`,e);if(e instanceof Error){let t=new J(e.message);return t.cause=e,this._emit(`error`,t)}return this._emit(`error`,new J(String(e)))}),K(this,ky,new Promise((e,t)=>{K(this,Ay,e,`f`),K(this,jy,t,`f`)}),`f`),K(this,My,new Promise((e,t)=>{K(this,Ny,e,`f`),K(this,Py,t,`f`)}),`f`),q(this,ky,`f`).catch(()=>{}),q(this,My,`f`).catch(()=>{}),K(this,Oy,e,`f`),K(this,Uy,t?.logger??console,`f`)}get response(){return q(this,By,`f`)}get request_id(){return q(this,Vy,`f`)}get workspace_id(){return q(this,Hy,`f`)}async withResponse(){K(this,zy,!0,`f`);let e=await q(this,ky,`f`);if(!e)throw Error("Could not resolve a `Response` object");return{data:this,response:e,request_id:e.headers.get(`request-id`),workspace_id:e.headers.get(`anthropic-workspace-id`)}}static fromReadableStream(t){let n=new e(null);return n._run(()=>n._fromReadableStream(t)),n}static createMessage(t,n,r,{logger:i}={}){let a=new e(n,{logger:i});for(let e of n.messages)a._addMessageParam(e);return K(a,Oy,{...n,stream:!0},`f`),a._run(()=>a._createMessage(t,{...n,stream:!0},{...r,headers:{...r?.headers,[Bm]:`stream`}})),a}_run(e){e().then(()=>{this._emitFinal(),this._emit(`end`)},q(this,Ky,`f`))}_addMessageParam(e){this.messages.push(e)}_addMessage(e,t=!0){this.receivedMessages.push(e),t&&this._emit(`message`,e)}async _createMessage(e,t,n){let r=n?.signal,i;r&&(r.aborted&&this.controller.abort(),i=this.controller.abort.bind(this.controller),r.addEventListener(`abort`,i));try{q(this,Ey,`m`,qy).call(this);let{response:r,data:i}=await e.create({...t,stream:!0},{...n,signal:this.controller.signal}).withResponse();this._connected(r);for await(let e of i)q(this,Ey,`m`,Jy).call(this,e);if(i.controller.signal?.aborted)throw new Dd;q(this,Ey,`m`,Yy).call(this)}finally{r&&i&&r.removeEventListener(`abort`,i)}}_connected(e){this.ended||(K(this,By,e,`f`),K(this,Vy,e?.headers.get(`request-id`),`f`),K(this,Hy,e?.headers.get(`anthropic-workspace-id`),`f`),q(this,Ay,`f`).call(this,e),this._emit(`connect`))}get ended(){return q(this,Iy,`f`)}get errored(){return q(this,Ly,`f`)}get aborted(){return q(this,Ry,`f`)}abort(){this.controller.abort()}on(e,t){return(q(this,Fy,`f`)[e]||(q(this,Fy,`f`)[e]=[])).push({listener:t}),this}off(e,t){let n=q(this,Fy,`f`)[e];if(!n)return this;let r=n.findIndex(e=>e.listener===t);return r>=0&&n.splice(r,1),this}once(e,t){return(q(this,Fy,`f`)[e]||(q(this,Fy,`f`)[e]=[])).push({listener:t,once:!0}),this}emitted(e){return new Promise((t,n)=>{K(this,zy,!0,`f`),e!==`error`&&this.once(`error`,n),this.once(e,t)})}async done(){K(this,zy,!0,`f`),await q(this,My,`f`)}get currentMessage(){return q(this,Dy,`f`)}async finalMessage(){return await this.done(),q(this,Ey,`m`,Wy).call(this)}async finalText(){return await this.done(),q(this,Ey,`m`,Gy).call(this)}_emit(e,...t){if(q(this,Iy,`f`))return;e===`end`&&(K(this,Iy,!0,`f`),q(this,Ny,`f`).call(this));let n=q(this,Fy,`f`)[e];if(n&&(q(this,Fy,`f`)[e]=n.filter(e=>!e.once),n.forEach(({listener:e})=>e(...t))),e===`abort`){let e=t[0];!q(this,zy,`f`)&&!n?.length&&Promise.reject(e),q(this,jy,`f`).call(this,e),q(this,Py,`f`).call(this,e),this._emit(`end`);return}if(e===`error`){let e=t[0];!q(this,zy,`f`)&&!n?.length&&Promise.reject(e),q(this,jy,`f`).call(this,e),q(this,Py,`f`).call(this,e),this._emit(`end`)}}_emitFinal(){this.receivedMessages.at(-1)&&this._emit(`finalMessage`,q(this,Ey,`m`,Wy).call(this))}async _fromReadableStream(e,t){let n=t?.signal,r;n&&(n.aborted&&this.controller.abort(),r=this.controller.abort.bind(this.controller),n.addEventListener(`abort`,r));try{q(this,Ey,`m`,qy).call(this),this._connected(null);let t=qp.fromReadableStream(e,this.controller);for await(let e of t)q(this,Ey,`m`,Jy).call(this,e);if(t.controller.signal?.aborted)throw new Dd;q(this,Ey,`m`,Yy).call(this)}finally{n&&r&&n.removeEventListener(`abort`,r)}}[(Dy=new WeakMap,Oy=new WeakMap,ky=new WeakMap,Ay=new WeakMap,jy=new WeakMap,My=new WeakMap,Ny=new WeakMap,Py=new WeakMap,Fy=new WeakMap,Iy=new WeakMap,Ly=new WeakMap,Ry=new WeakMap,zy=new WeakMap,By=new WeakMap,Vy=new WeakMap,Hy=new WeakMap,Uy=new WeakMap,Ky=new WeakMap,Ey=new WeakSet,Wy=function(){if(this.receivedMessages.length===0)throw new J(`stream ended without producing a Message with role=assistant`);return this.receivedMessages.at(-1)},Gy=function(){if(this.receivedMessages.length===0)throw new J(`stream ended without producing a Message with role=assistant`);let e=this.receivedMessages.at(-1).content.filter(e=>e.type===`text`).map(e=>e.text);if(e.length===0)throw new J(`stream ended without producing a content block with type=text`);return e.join(` `)},qy=function(){this.ended||K(this,Dy,void 0,`f`)},Jy=function(e){if(this.ended)return;let t=q(this,Ey,`m`,Xy).call(this,e);switch(this._emit(`streamEvent`,e,t),e.type){case`content_block_delta`:{let n=t.content.at(-1);switch(e.delta.type){case`text_delta`:n.type===`text`&&this._emit(`text`,e.delta.text,n.text||``);break;case`citations_delta`:n.type===`text`&&this._emit(`citation`,e.delta.citation,n.citations??[]);break;case`input_json_delta`:Zy(n)&&q(this,Fy,`f`).inputJson?.length&&this._emit(`inputJson`,e.delta.partial_json,n.input);break;case`thinking_delta`:n.type===`thinking`&&this._emit(`thinking`,e.delta.thinking,n.thinking);break;case`signature_delta`:n.type===`thinking`&&this._emit(`signature`,n.signature);break;default:e.delta}break}case`message_stop`:this._addMessageParam(t),this._addMessage(Cy(t,q(this,Oy,`f`),{logger:q(this,Uy,`f`)}),!0);break;case`content_block_stop`:this._emit(`contentBlock`,t.content.at(-1));break;case`message_start`:K(this,Dy,t,`f`)}},Yy=function(){if(this.ended)throw new J(`stream has ended, this shouldn't happen`);let e=q(this,Dy,`f`);if(!e)throw new J(`request ended without sending any chunks`);return K(this,Dy,void 0,`f`),Cy(e,q(this,Oy,`f`),{logger:q(this,Uy,`f`)})},Xy=function(e){let t=q(this,Dy,`f`);if(e.type===`message_start`){if(t)throw new J(`Unexpected event order, got ${e.type} before receiving "message_stop"`);return e.message}if(!t)throw new J(`Unexpected event order, got ${e.type} before "message_start"`);switch(e.type){case`message_stop`:return t;case`message_delta`:return t.stop_reason=e.delta.stop_reason,t.stop_sequence=e.delta.stop_sequence,t.stop_details=e.delta.stop_details,t.usage.output_tokens=e.usage.output_tokens,e.delta.container!=null&&(t.container=e.delta.container),e.usage.input_tokens!=null&&(t.usage.input_tokens=e.usage.input_tokens),e.usage.cache_creation_input_tokens!=null&&(t.usage.cache_creation_input_tokens=e.usage.cache_creation_input_tokens),e.usage.cache_read_input_tokens!=null&&(t.usage.cache_read_input_tokens=e.usage.cache_read_input_tokens),e.usage.server_tool_use!=null&&(t.usage.server_tool_use=e.usage.server_tool_use),e.usage.output_tokens_details!=null&&(t.usage.output_tokens_details=e.usage.output_tokens_details),t;case`content_block_start`:return t.content.push({...e.content_block}),t;case`content_block_delta`:{let n=t.content.at(e.index);switch(e.delta.type){case`text_delta`:n?.type===`text`&&(t.content[e.index]={...n,text:(n.text||``)+e.delta.text});break;case`citations_delta`:n?.type===`text`&&(t.content[e.index]={...n,citations:[...n.citations??[],e.delta.citation]});break;case`input_json_delta`:if(n&&Zy(n)){let r=(n.__json_buf||``)+e.delta.partial_json;t.content[e.index]=p_(n,r)}break;case`thinking_delta`:n?.type===`thinking`&&(t.content[e.index]={...n,thinking:n.thinking+e.delta.thinking});break;case`signature_delta`:n?.type===`thinking`&&(t.content[e.index]={...n,signature:e.delta.signature});break;default:e.delta}return t}case`content_block_stop`:{let n=t.content.at(e.index);return n&&Zy(n)&&`__json_buf`in n&&Object.defineProperty(n,"input",{value:n.input,enumerable:!0,configurable:!0,writable:!0}),t}}},Symbol.asyncIterator)](){let e=[],t=[],n=!1;return this.on(`streamEvent`,n=>{let r=t.shift();r?r.resolve(n):e.push(n)}),this.on(`end`,()=>{n=!0;for(let e of t)e.resolve(void 0);t.length=0}),this.on(`abort`,e=>{n=!0;for(let n of t)n.reject(e);t.length=0}),this.on(`error`,e=>{n=!0;for(let n of t)n.reject(e);t.length=0}),{next:async()=>e.length?{value:e.shift(),done:!1}:n?{value:void 0,done:!0}:new Promise((e,n)=>t.push({resolve:e,reject:n})).then(e=>e?{value:e,done:!1}:{value:void 0,done:!0}),return:async()=>(this.abort(),{value:void 0,done:!0})}}toReadableStream(){return new qp(this[Symbol.asyncIterator].bind(this),this.controller).toReadableStream()}}return e})(),$y=class extends Y{create(e,t){let{user_profile_id:n,workspace_id:r,...i}=e;return this._client.post(`/v1/messages/batches`,{body:i,...t,headers:X([{...n==null?void 0:{"anthropic-user-profile-id":n},...r==null?void 0:{"anthropic-workspace-id":r}},t?.headers])})}retrieve(e,t={},n){let{workspace_id:r}=t??{};return this._client.get(Z`/v1/messages/batches/${e}`,{...n,headers:X([{...r==null?void 0:{"anthropic-workspace-id":r}},n?.headers])})}list(e={},t){let{workspace_id:n,...r}=e??{};return this._client.getAPIList(`/v1/messages/batches`,dm,{query:r,...t,headers:X([{...n==null?void 0:{"anthropic-workspace-id":n}},t?.headers])})}delete(e,t={},n){let{workspace_id:r}=t??{};return this._client.delete(Z`/v1/messages/batches/${e}`,{...n,headers:X([{...r==null?void 0:{"anthropic-workspace-id":r}},n?.headers])})}cancel(e,t={},n){let{workspace_id:r}=t??{};return this._client.post(Z`/v1/messages/batches/${e}/cancel`,{...n,headers:X([{...r==null?void 0:{"anthropic-workspace-id":r}},n?.headers])})}async results(e,t={},n){let r=await this.retrieve(e,t,n);if(!r.results_url)throw new J(`No batch \`results_url\`; Has it finished processing? ${r.processing_status} - ${r.id}`);let{workspace_id:i}=t??{};return this._client.get(r.results_url,{...n,headers:X([{Accept:`application/binary`,...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers]),stream:!0,__binaryResponse:!0})._thenUnwrap((e,t)=>e_.fromResponse(t.response,t.controller))}},eb=(()=>{class e extends Y{constructor(){super(...arguments),this.batches=new $y(this._client)}create(e,t){let{user_profile_id:n,workspace_id:r,...i}=e;i.model in tb&&console.warn(`The model '${i.model}' is deprecated and will reach end-of-life on ${tb[i.model]}\nPlease migrate to a newer model. Visit https://docs.anthropic.com/en/docs/resources/model-deprecations for more information.`),nb.includes(i.model)&&i.thinking&&i.thinking.type===`enabled`&&console.warn(`Using Claude with ${i.model} and 'thinking.type=enabled' is deprecated. Use 'thinking.type=adaptive' instead which results in better model performance in our testing: https://platform.claude.com/docs/en/build-with-claude/adaptive-thinking`);let a=t?.timeout??this._client._options.timeout;if(!i.stream&&a==null){let e=n_[i.model]??void 0;a=this._client.calculateNonstreamingTimeout(i.max_tokens,e)}let o=Gm(i.tools,i.messages);return this._client.post(`/v1/messages`,{body:i,timeout:a??6e5,...t,headers:X([{...n==null?void 0:{"anthropic-user-profile-id":n},...r==null?void 0:{"anthropic-workspace-id":r}},o,t?.headers]),stream:e.stream??!1})}parse(e,t){return this.create(e,t).then(t=>wy(t,e,{logger:this._client.logger??console}))}stream(e,t){return Qy.createMessage(this,e,t,{logger:this._client.logger??console})}countTokens(e,t){let{user_profile_id:n,workspace_id:r,...i}=e;return this._client.post(`/v1/messages/count_tokens`,{body:i,...t,headers:X([{...n==null?void 0:{"anthropic-user-profile-id":n},...r==null?void 0:{"anthropic-workspace-id":r}},t?.headers])})}}return e.Batches=$y,e})(),tb={},nb=[`claude-mythos-preview`,`claude-opus-4-6`],rb=class extends Y{retrieve(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.get(Z`/v1/models/${e}`,{...n,headers:X([{...r?.toString()==null?void 0:{"anthropic-beta":r?.toString()},...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}list(e={},t){let{betas:n,workspace_id:r,...i}=e??{};return this._client.getAPIList(`/v1/models`,dm,{query:i,...t,headers:X([{...n?.toString()==null?void 0:{"anthropic-beta":n?.toString()},...r==null?void 0:{"anthropic-workspace-id":r}},t?.headers])})}},ib=class extends Y{create(e,t,n){let{workspace_id:r,...i}=t;return this._client.post(Z`/v1/skills/${e}/versions`,vm({body:i,...n,headers:X([{...r==null?void 0:{"anthropic-workspace-id":r}},n?.headers])},this._client,!1))}retrieve(e,t,n){let{skill_id:r,workspace_id:i}=t;return this._client.get(Z`/v1/skills/${r}/versions/${e}`,{...n,headers:X([{...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}list(e,t={},n){let{workspace_id:r,...i}=t??{};return this._client.getAPIList(Z`/v1/skills/${e}/versions`,fm,{query:i,...n,headers:X([{...r==null?void 0:{"anthropic-workspace-id":r}},n?.headers])})}delete(e,t,n){let{skill_id:r,workspace_id:i}=t;return this._client.delete(Z`/v1/skills/${r}/versions/${e}`,{...n,headers:X([{...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}},ab=(()=>{class e extends Y{constructor(){super(...arguments),this.versions=new ib(this._client)}create(e,t){let{workspace_id:n,...r}=e;return this._client.post(`/v1/skills`,vm({body:r,...t,headers:X([{...n==null?void 0:{"anthropic-workspace-id":n}},t?.headers])},this._client,!1))}retrieve(e,t={},n){let{workspace_id:r}=t??{};return this._client.get(Z`/v1/skills/${e}`,{...n,headers:X([{...r==null?void 0:{"anthropic-workspace-id":r}},n?.headers])})}list(e={},t){let{workspace_id:n,...r}=e??{};return this._client.getAPIList(`/v1/skills`,fm,{query:r,...t,headers:X([{...n==null?void 0:{"anthropic-workspace-id":n}},t?.headers])})}delete(e,t={},n){let{workspace_id:r}=t??{};return this._client.delete(Z`/v1/skills/${e}`,{...n,headers:X([{...r==null?void 0:{"anthropic-workspace-id":r}},n?.headers])})}}return e.Versions=ib,e})(),ob,sb,cb,lb,ub=`\\n\\nHuman:`,db=`\\n\\nAssistant:`,fb=(()=>{class e{get credentials(){return this._authState.provider}constructor({baseURL:e=ip(`ANTHROPIC_BASE_URL`),apiKey:t,authToken:n,webhookKey:r=ip(`ANTHROPIC_WEBHOOK_SIGNING_KEY`)??null,...i}={}){if(ob.add(this),this._requestAuthFlags=new WeakMap,cb.set(this,void 0),t===void 0&&(t=i.profile==null?ip(`ANTHROPIC_API_KEY`)??null:null),n===void 0&&(n=i.profile==null?ip(`ANTHROPIC_AUTH_TOKEN`)??null:null),i.profile!=null&&(i.credentials!=null||i.config!=null))throw TypeError("Pass at most one of `profile`, `credentials`, or `config`.");let a={apiKey:t,authToken:n,webhookKey:r,...i,baseURL:e||`https://api.anthropic.com`};if(!a.dangerouslyAllowBrowser&&Zd())throw new J(`It looks like you're running in a browser-like environment.

This is disabled by default, as it risks exposing your secret API credentials to attackers.
If you understand the risks and have appropriate mitigations in place,
you can set the \`dangerouslyAllowBrowser\` option to \`true\`, e.g.,

new Anthropic({ apiKey, dangerouslyAllowBrowser: true });
`);this.baseURL=a.baseURL,this._baseURLIsExplicit=i.__baseURLIsExplicit??!!e,this.timeout=a.timeout??sb.DEFAULT_TIMEOUT,this.logger=a.logger??console,this.logLevel=dp,this.logLevel=pp(a.logLevel,`ClientOptions.logLevel`,yp(this))??pp(ip(`ANTHROPIC_LOG`),`process.env['ANTHROPIC_LOG']`,yp(this))??`warn`,this.fetchOptions=a.fetchOptions,this.maxRetries=qd(`maxRetries`,a.maxRetries??2),this.fetch=a.fetch??ff(),K(this,cb,_f,`f`),this.middleware=[...a.middleware??[]];let o=ip(`ANTHROPIC_CUSTOM_HEADERS`);if(o){let e={};for(let t of o.split(`
`)){let n=t.indexOf(`:`);n>=0&&(e[t.substring(0,n).trim()]=t.substring(n+1).trim())}a.defaultHeaders={...e,...a.defaultHeaders}}let s=i.__auth;if(delete a.__auth,delete a.__baseURLIsExplicit,this._options=a,this.apiKey=typeof t==`string`?t:null,this.authToken=n,this.webhookKey=r,s)this._authState=s,!this._baseURLIsExplicit&&s.baseURL&&(this.baseURL=s.baseURL);else if(this._authState={provider:null,tokenCache:null,resolution:null,error:null,extraHeaders:{}},this.apiKey==null&&this.authToken==null){let e=a.credentials??null;if(e)this._authState.provider=e,this._authState.tokenCache=this._makeTokenCache(e);else if(a.config!=null){let e=Lp(a.config,this._credentialResolverOptions());this._authState.provider=e.provider,this._authState.tokenCache=this._makeTokenCache(e.provider),this._authState.extraHeaders=e.extraHeaders,this._applyCredentialBaseURL(e.baseURL)}else a.profile==null?this._shouldResolveDefaultCredentials()&&(this._authState.resolution=this._resolveDefaultCredentials()):this._authState.resolution=this._resolveDefaultCredentials(a.profile)}}_shouldResolveDefaultCredentials(){return!0}_applyCredentialBaseURL(e){if(!e)return;let t=e.replace(/\/+$/,``);this._authState.baseURL=t,this._baseURLIsExplicit||(this.baseURL=t)}_credentialResolverOptions(){return{baseURL:this.baseURL,fetch:this._credentialsFetch(),userAgent:this.getUserAgent(),onCacheWriteError:e=>{yp(this).debug(`credential cache write failed (best-effort)`,e)},onSafetyWarning:e=>{yp(this).warn(e)}}}_credentialsFetch(){return nm(this.fetch,this.middleware,void 0,this)}_makeTokenCache(e){return new rp(e,e=>{yp(this).debug(`advisory token refresh failed; serving cached token`,e)})}withOptions(e){let t=`credentials`in e||`config`in e||`profile`in e,n=`apiKey`in e||`authToken`in e||t,r={...this._options,...this._baseURLIsExplicit?{baseURL:this.baseURL}:{},maxRetries:this.maxRetries,timeout:this.timeout,logger:this.logger,logLevel:this.logLevel,fetch:this.fetch,fetchOptions:this.fetchOptions,middleware:this.middleware,apiKey:this.apiKey,authToken:this.authToken,webhookKey:this.webhookKey,credentials:this.credentials,...t?{credentials:void 0,config:void 0,profile:void 0}:{},...e,__auth:n?void 0:this._authState,__baseURLIsExplicit:`baseURL`in e||this._baseURLIsExplicit};return new this.constructor(r)}async _resolveDefaultCredentials(e){try{let t=await Rp(this._credentialResolverOptions(),e);if(t)this._authState.provider=t.provider,this._authState.tokenCache=this._makeTokenCache(t.provider),this._authState.extraHeaders=t.extraHeaders,this._applyCredentialBaseURL(t.baseURL);else if(e!=null)throw new J(`Profile "${e}" could not be resolved (no <config_dir>/configs/${e}.json found).`)}catch(e){this._authState.error=e}finally{this._authState.resolution=null}}defaultQuery(){return this._options.defaultQuery}validateHeaders({values:e,nulls:t}){if(!(e.get(`x-api-key`)||e.get(`authorization`))){if(this._authState.error)throw this._authState.error;if(!(this._authState.tokenCache||this._authState.resolution)&&!(this.apiKey&&e.get(`x-api-key`))&&!t.has(`x-api-key`)&&!(this.authToken&&e.get(`authorization`))&&!t.has(`authorization`))throw Error(`Could not resolve authentication method. Expected one of apiKey, authToken, credentials, config, or profile to be set. Or for one of the "X-Api-Key" or "Authorization" headers to be explicitly omitted`)}}_authFlags(e){let t=this._requestAuthFlags.get(e);return t||(t={usedTokenCache:!1,didRefreshFor401:!1},this._requestAuthFlags.set(e,t)),t}async authHeaders(e){if(this._authState.resolution&&await this._authState.resolution,!this._authState.error){if(this._authState.tokenCache&&this.apiKey==null){let t=await this._authState.tokenCache.getToken();return this._authFlags(e).usedTokenCache=!0,X([{Authorization:`Bearer ${t}`}])}return X([await this.apiKeyAuth(e),await this.bearerAuth(e)])}}async apiKeyAuth(e){if(this.apiKey!=null)return X([{"X-Api-Key":this.apiKey}])}async bearerAuth(e){if(this.authToken!=null)return X([{Authorization:`Bearer ${this.authToken}`}])}stringifyQuery(e){return If(e)}getUserAgent(){return`Anthropic/JS ${Xd}`}makeStatusError(e,t,n,r){return Ed.generate(e,t,n,r)}buildURL(e,t,n){let r=!q(this,ob,`m`,lb).call(this)&&n||this.baseURL,i=Bd(e)?new URL(e):new URL(r+(r.endsWith(`/`)&&e.startsWith(`/`)?e.slice(1):e)),a=this.defaultQuery(),o=Object.fromEntries(i.searchParams);return(!Wd(a)||!Wd(o))&&(t={...o,...a,...t}),typeof t==`object`&&t&&!Array.isArray(t)&&(i.search=this.stringifyQuery(t)),i.toString()}_calculateNonstreamingTimeout(e){if(3600*e/128e3>600)throw new J(`Streaming is required for operations that may take longer than 10 minutes. See https://github.com/anthropics/anthropic-sdk-typescript#streaming-responses for more details`);return 6e5}async prepareOptions(e){}async prepareRequest(e,{url:t,options:n}){if(this._authState.tokenCache&&this.apiKey==null){let t=e.headers instanceof Headers?e.headers:new Headers(e.headers);for(let[e,n]of Object.entries(this._authState.extraHeaders))t.has(e)||t.set(e,n);let n=t.get(`anthropic-beta`)?.split(`,`).map(e=>e.trim());n?.includes(`oauth-2025-04-20`)||t.set(`anthropic-beta`,[...n??[],Wf].join(`,`)),e.headers=t}}backendMiddleware(){return[]}get(e,t){return this.methodRequest(`get`,e,t)}post(e,t){return this.methodRequest(`post`,e,t)}patch(e,t){return this.methodRequest(`patch`,e,t)}put(e,t){return this.methodRequest(`put`,e,t)}delete(e,t){return this.methodRequest(`delete`,e,t)}methodRequest(e,t,n){return this.request(Promise.resolve(n).then(n=>({method:e,path:t,...n})))}request(e,t=null){return new sm(this,this.makeRequest(e,t,void 0))}async makeRequest(e,t,n){let r=await e,i=qd(`maxRetries`,r.maxRetries??this.maxRetries);this.isStreamBody(r.body)&&(i=0),t??(t=i,this._requestAuthFlags.delete(r)),await this.prepareOptions(r);let{req:a,url:o,timeout:s}=await this.buildRequest(r,{retryCount:i-t}),c=`log_`+(Math.random()*(1<<24)|0).toString(16).padStart(6,`0`),l=n===void 0?``:`, retryOf: ${n}`,u=Date.now();if(r.signal?.aborted)throw new Dd;let d=new AbortController,f=await this.fetchWithTimeout(o,a,s,d,r,{requestLogID:c,retryOfRequestLogID:n}).catch(Td),p=Date.now();if(f instanceof globalThis.Error){df(d);let e=`retrying, ${t} attempts remaining`;if(r.signal?.aborted)throw new Dd;let i=wd(f)||/timed? ?out/i.test(String(f)+(`cause`in f?String(f.cause):``)),a=this.middleware.length>0||!!r.middleware?.length||this.backendMiddleware().length>0;if(a&&!i&&!tm(f))throw yp(this).info(`[${c}] middleware error (not retryable)`),Cp(yp(this),`[${c}] middleware error (not retryable)`,{retryOfRequestLogID:n,url:o,durationMs:p-u,message:f.message}),f;if(t)return yp(this).info(`[${c}] connection ${i?`timed out`:`failed`} - ${e}`),Cp(yp(this),`[${c}] connection ${i?`timed out`:`failed`} (${e})`,{retryOfRequestLogID:n,url:o,durationMs:p-u,message:f.message}),this.retryRequest(r,t,n??c);throw yp(this).info(`[${c}] connection ${i?`timed out`:`failed`} - error; no more retries left`),Cp(yp(this),`[${c}] connection ${i?`timed out`:`failed`} (error; no more retries left)`,{retryOfRequestLogID:n,url:o,durationMs:p-u,message:f.message}),i?new kd:a&&!em(f)?f:new Od({cause:f})}let m=`[${c}${l}${[...f.headers.entries()].filter(([e])=>e===`request-id`||e===`anthropic-workspace-id`).map(([e,t])=>`, `+e+`: `+JSON.stringify(t)).join(``)}] ${a.method} ${o} ${f.ok?`succeeded`:`failed`} with status ${f.status} in ${p-u}ms`;if(!f.ok){let e=await this.shouldRetry(f,r);if(t&&e){let e=`retrying, ${t} attempts remaining`;return await gf(f.body),df(d),yp(this).info(`${m} - ${e}`),Cp(yp(this),`[${c}] response error (${e})`,{retryOfRequestLogID:n,url:f.url,status:f.status,headers:f.headers,durationMs:p-u}),this.retryRequest(r,t,n??c,f.headers)}let i=e?`error; no more retries left`:`error; not retryable`;yp(this).info(`${m} - ${i}`);let a=await f.text().catch(e=>Td(e).message),o=Jd(a),s=o?void 0:a;throw Cp(yp(this),`[${c}] response error (${i})`,{retryOfRequestLogID:n,url:f.url,status:f.status,headers:f.headers,message:s,durationMs:Date.now()-u}),df(d),this.makeStatusError(f.status,o,s,f.headers)}return yp(this).info(m),Cp(yp(this),`[${c}] response start`,{retryOfRequestLogID:n,url:f.url,status:f.status,headers:f.headers,durationMs:p-u}),uf(f.body??f,d),{response:f,options:r,controller:d,requestLogID:c,retryOfRequestLogID:n,startTime:u}}getAPIList(e,t,n){return this.requestAPIList(t,n&&`then`in n?n.then(t=>({method:`get`,path:e,...t})):{method:`get`,path:e,...n})}requestAPIList(e,t){let n=this.makeRequest(t,null,void 0);return new um(this,n,e)}async fetchWithTimeout(e,t,n,r,i,a){let{signal:o,method:s,...c}=t||{},l=this._makeAbort(r);o&&(o.addEventListener(`abort`,l,{once:!0}),lf(r,o,l));let u=globalThis.ReadableStream&&c.body instanceof globalThis.ReadableStream||typeof c.body==`object`&&c.body!==null&&Symbol.asyncIterator in c.body,d={signal:r.signal,...u?{duplex:`half`}:{},method:`GET`,...c};s&&(d.method=s.toUpperCase());let f=this.fetch,p=async(e,t)=>{let r=setTimeout(l,n);try{return await f.call(void 0,e,t)}finally{clearTimeout(r)}},m=i===void 0?p:(async(e,t={})=>{let n=typeof e==`string`?e:e instanceof URL?e.href:e.url;return t.headers=t.headers instanceof Headers?t.headers:new Headers(t.headers),await this.prepareRequest(t,{url:n,options:i}),a&&Cp(yp(this),`[${a.requestLogID}] sending request`,{retryOfRequestLogID:a.retryOfRequestLogID,method:t.method,url:n,options:i,headers:t.headers}),p(e,t)}),h=i?.middleware,g=this.backendMiddleware();return await nm(m,h?.length||g.length?[...this.middleware,...h??[],...g]:this.middleware,i,this)(e,d)}async shouldRetry(e,t){let n=this._authFlags(t);if(e.status===401&&this._authState.tokenCache&&n.usedTokenCache&&!n.didRefreshFor401)return n.didRefreshFor401=!0,this._authState.tokenCache.invalidate(),!0;let r=e.headers.get(`x-should-retry`);return r===`true`?!0:r===`false`?!1:e.status===408||e.status===409||e.status===429||e.status>=500}async retryRequest(e,t,n,r){let i,a=r?.get(`retry-after-ms`);if(a){let e=parseFloat(a);Number.isNaN(e)||(i=e)}let o=r?.get(`retry-after`);if(o&&!i){let e=parseFloat(o);i=Number.isNaN(e)?Date.parse(o)-Date.now():e*1e3}if(i===void 0||!(i>0&&i<=2**31-1)){let n=e.maxRetries??this.maxRetries;i=this.calculateDefaultRetryTimeoutMillis(t,n)}return await Yd(i,e.signal??void 0),this.makeRequest(e,t-1,n)}calculateDefaultRetryTimeoutMillis(e,t){let n=t-e;return Math.min(.5*2**n,8)*(1-Math.random()*.25)*1e3}calculateNonstreamingTimeout(e,t){let n=6e5;if(36e5*e/128e3>n||t!=null&&e>t)throw new J(`Streaming is required for operations that may take longer than 10 minutes. See https://github.com/anthropics/anthropic-sdk-typescript#long-requests for more details`);return n}async buildRequest(e,{retryCount:t=0}={}){let n={...e},{method:r,path:i,query:a,defaultBaseURL:o}=n;this._authState.resolution&&await this._authState.resolution,!this._baseURLIsExplicit&&this._authState.baseURL&&this.baseURL!==this._authState.baseURL&&(this.baseURL=this._authState.baseURL);let s=this.buildURL(i,a,o);`timeout`in n&&qd(`timeout`,n.timeout),n.timeout=n.timeout??this.timeout;let{bodyHeaders:c,body:l}=this.buildBody({options:n});return{req:{method:r,headers:await this.buildHeaders({options:e,method:r,bodyHeaders:c,retryCount:t,timeout:n.timeout}),...n.signal&&{signal:n.signal},...globalThis.ReadableStream&&l instanceof globalThis.ReadableStream&&{duplex:`half`},...l&&{body:l},...this.fetchOptions??{},...n.fetchOptions??{}},url:s,timeout:n.timeout}}async buildHeaders({options:e,method:t,bodyHeaders:n,retryCount:r,timeout:i}){let a=X([{Accept:`application/json`,"User-Agent":this.getUserAgent(),"X-Stainless-Retry-Count":String(r),"X-Stainless-Timeout":String(Math.trunc(i/1e3)),...af(),...this._options.dangerouslyAllowBrowser?{"anthropic-dangerous-direct-browser-access":`true`}:void 0,"anthropic-version":`2023-06-01`},await this.authHeaders(e),this._options.defaultHeaders,n,e.headers]);return this.validateHeaders(a),a.values}_makeAbort(e){return()=>e.abort()}buildBody({options:{body:e,headers:t}}){if(!e)return{bodyHeaders:void 0,body:void 0};let n=X([t]);return ArrayBuffer.isView(e)||e instanceof ArrayBuffer||e instanceof DataView||typeof e==`string`&&n.values.has(`content-type`)||globalThis.Blob&&e instanceof globalThis.Blob||e instanceof FormData||e instanceof URLSearchParams||globalThis.ReadableStream&&e instanceof globalThis.ReadableStream?{bodyHeaders:void 0,body:e}:this.isStreamBody(e)?{bodyHeaders:void 0,body:mf(e)}:typeof e==`object`&&n.values.get(`content-type`)===`application/x-www-form-urlencoded`?{bodyHeaders:{"content-type":`application/x-www-form-urlencoded`},body:this.stringifyQuery(e)}:q(this,cb,`f`).call(this,{body:e,headers:n})}isStreamBody(e){return globalThis.ReadableStream&&e instanceof globalThis.ReadableStream?!0:typeof e==`object`&&!!e&&(Symbol.asyncIterator in e||Symbol.iterator in e&&`next`in e&&typeof e.next==`function`)}}return sb=e,cb=new WeakMap,ob=new WeakSet,lb=function(){return this.baseURL!==`https://api.anthropic.com`},e.Anthropic=sb,e.DEFAULT_TIMEOUT=6e5,e.AnthropicError=J,e.APIError=Ed,e.APIConnectionError=Od,e.APIConnectionTimeoutError=kd,e.APIUserAbortError=Dd,e.NotFoundError=Pd,e.ConflictError=Fd,e.RateLimitError=Ld,e.BadRequestError=jd,e.AuthenticationError=Md,e.InternalServerError=Rd,e.PermissionDeniedError=Nd,e.UnprocessableEntityError=Id,e.toFile=Em,e.HUMAN_PROMPT=ub,e.AI_PROMPT=db,e})(),pb=(()=>{class e extends fb{constructor(){super(...arguments),this.completions=new by(this),this.messages=new eb(this),this.models=new rb(this),this.files=new xy(this),this.skills=new ab(this),this.beta=new yy(this)}}return e.Completions=by,e.Messages=eb,e.Models=rb,e.Files=xy,e.Skills=ab,e.Beta=yy,e})(),mb=`3d-agents:brain`,hb={"claude-haiku-4-5":{label:`Claude Haiku 4.5 · el más barato`,input:1,output:5},"claude-sonnet-5-5":{label:`Claude Sonnet 5.5 · más capaz`,input:2,output:10}},gb=`claude-haiku-4-5`;function _b(){try{return{model:gb,maxSteps:8,...JSON.parse(localStorage.getItem(mb)||`{}`)}}catch{return{model:gb,maxSteps:8}}}function vb(e){try{localStorage.setItem(mb,JSON.stringify(e))}catch{}}function yb(e,t){let n=hb[e]||hb[`claude-haiku-4-5`];return((t.input_tokens||0)*n.input+(t.output_tokens||0)*n.output)/1e6}var bb=(e,t=6e3)=>e.length>t?`${e.slice(0,t)}\n…[recortado, ${e.length} caracteres]`:e;async function xb(e,{method:t=`GET`,url:n,headers:r={},body:i}){if(!/^https?:\/\//i.test(n||``))throw Error(`URL inválida (debe empezar con http:// o https://)`);let a=i==null||typeof i==`string`?i:JSON.stringify(i);a&&!Object.keys(r).some(e=>e.toLowerCase()===`content-type`)&&(r[`content-type`]=`application/json`);let o,s;if(e.proxyUrl){let i=await fetch(e.proxyUrl,{method:`POST`,headers:{"content-type":`application/json`,...e.proxyToken?{"x-proxy-token":e.proxyToken}:{}},body:JSON.stringify({method:t,url:n,headers:r,body:a})});if(!i.ok)throw Error(`Proxy HTTP ${i.status}: ${(await i.text()).slice(0,200)}`);({status:o,body:s}=await i.json())}else{let e;try{e=await fetch(n,{method:t,headers:r,body:[`GET`,`HEAD`].includes(t.toUpperCase())?void 0:a})}catch(e){throw Error(`${e.message}. Si es un bloqueo CORS, configura el proxy en ⚙ Cerebro.`)}o=e.status,s=await e.text()}return{status:o,body:s}}var Sb={name:`http_request`,description:`Hace una petición HTTP a cualquier API pública o privada y devuelve el código de estado y el cuerpo de la respuesta. Úsala para consultar datos reales (clima, precios, CRMs, webhooks, etc.). Para POST/PUT envía body como texto JSON.`,input_schema:{type:`object`,properties:{method:{type:`string`,enum:[`GET`,`POST`,`PUT`,`PATCH`,`DELETE`]},url:{type:`string`,description:`URL completa, con parámetros de consulta si hacen falta`},headers:{type:`object`,description:`Cabeceras opcionales`,additionalProperties:{type:`string`}},body:{type:`string`,description:`Cuerpo opcional (normalmente JSON serializado)`}},required:[`method`,`url`]}},Cb=e=>`delegar_${e.id}`.replace(/[^a-zA-Z0-9_-]/g,`_`).slice(0,64);function wb(e,t){return e.replace(/\{\{\s*(\w+)\s*\}\}/g,(e,n)=>{let r=t[n]??``;return JSON.stringify(String(r)).slice(1,-1)})}function Tb(e,t={}){if(!e)return t;try{return JSON.parse(e)}catch{throw Error(`Las cabeceras deben ser JSON válido, p. ej. {"Authorization": "Bearer ..."}`)}}function Eb({store:e,world:n,log:r,bump:i,onUsage:a,onResult:o}){let s=_b(),c=!1,l=[],u=e=>new pb({apiKey:e,dangerouslyAllowBrowser:!0});async function d(e,t,n){let r=await u(e).messages.create(t);if(a?.(yb(t.model,r.usage),r.usage,n),r.stop_reason===`refusal`)throw Error(`El modelo rechazó la petición.`);return r}async function f({apiKey:e,model:t,system:n,messages:r,tools:i,runTool:a,maxSteps:o,onText:s,agentId:c}){for(let l=0;l<o;l++){let o=await d(e,{model:t,max_tokens:4096,system:n,tools:i,messages:r},c),l=o.content.filter(e=>e.type===`text`).map(e=>e.text).join(`
`).trim();if(l&&s?.(l,o.stop_reason),o.stop_reason!==`tool_use`)return l||`(sin respuesta)`;r.push({role:`assistant`,content:o.content});let u=o.content.filter(e=>e.type===`tool_use`),f=await Promise.all(u.map(async e=>{try{return{type:`tool_result`,tool_use_id:e.id,content:bb(String(await a(e.name,e.input)))}}catch(t){return{type:`tool_result`,tool_use_id:e.id,content:`Error: ${t.message}`,is_error:!0}}}));r.push({role:`user`,content:f})}return`Me detuve: alcancé el máximo de pasos permitido.`}function p(t,i){let a=e.agent(t)?.name||`Tú`;return r({kind:`http`,from:a,to:`API`,text:`${i.method||`GET`} ${i.url}`}),new Promise((e,o)=>{n.sendPacket(t,`external`,{color:`#e8600c`,onArrive:async()=>{try{let o=typeof i.headers==`object`&&i.headers?{...i.headers}:{},c=await xb(s,{method:i.method,url:i.url,headers:o,body:i.body});r({kind:`http-reply`,from:`API`,to:a,text:`HTTP ${c.status} · ${c.body.slice(0,160)}`}),n.sendPacket(`external`,t,{color:`#ffffff`,size:.28}),e(`HTTP ${c.status}\n${c.body}`)}catch(e){r({kind:`error`,from:`API`,to:a,text:e.message}),n.sendPacket(`external`,t,{color:`#ff5c5c`,size:.28}),o(e)}}})})}async function m(n,r,i){let a=n.config||{},o=e.office(n.officeId)?.name||``,c=(a.system||`Eres "${n.name}", ${n.role||`un agente`}, en "${o}" de la oficina digital de ${t.client}.`)+` Responde en español, breve y concreto. Si necesitas datos reales usa http_request.`;if(n.provider===`claude`)return f({apiKey:a.apiKey||s.apiKey,model:a.model||s.model,system:c,messages:[{role:`user`,content:`${i} te pide: ${r}`}],tools:[Sb],runTool:(e,t)=>p(n.id,t),maxSteps:4,agentId:n.id});if(!(a.url||n.provider===`openai`&&a.apiKey))return`[simulado por IA: el agente no tiene endpoint configurado]\n${await f({apiKey:s.apiKey,model:s.model,system:`${c} No tienes conexión real configurada: simula de forma realista lo que haría esta automatización (${n.provider}) y termina con una línea "Resultado:".`,messages:[{role:`user`,content:`${i} te pide: ${r}`}],tools:[Sb],runTool:(e,t)=>p(n.id,t),maxSteps:3,agentId:n.id})}`;if(n.provider===`openai`){let e=await xb(s,{method:`POST`,url:`https://api.openai.com/v1/chat/completions`,headers:{authorization:`Bearer ${a.apiKey}`},body:{model:a.model||`gpt-4o-mini`,messages:[{role:`system`,content:c},{role:`user`,content:r}]}});try{return JSON.parse(e.body).choices[0].message.content}catch{return`HTTP ${e.status}\n${e.body}`}}let l={input:r,from:i,agent:n.name},u=Tb(a.headers);a.token&&(u.authorization=a.token);let d=(a.method||`POST`).toUpperCase(),m=a.url,h;d===`GET`?m=wb(m,Object.fromEntries(Object.entries(l).map(([e,t])=>[e,encodeURIComponent(t)]))):h=a.body?wb(a.body,l):{agent:{id:n.id,name:n.name,role:n.role},from:i,text:r,sentAt:new Date().toISOString()};let g=await xb(s,{method:d,url:m,headers:u,body:h});if(g.status>=400)throw Error(`HTTP ${g.status}: ${g.body.slice(0,300)}`);return g.body||`HTTP ${g.status} (sin contenido)`}function h(t,a,s){let c=e.agent(t)?.name||`Tú`;return r({kind:`task`,from:c,to:a.name,text:s}),i(t,`sent`),new Promise((e,l)=>{n.sendPacket(t,a.id,{color:`#e8600c`,onArrive:async()=>{i(a.id,`received`),n.setWorking(a.id,!0);try{let l=await m(a,s,c);i(a.id,`sent`),r({kind:`live`,from:a.name,to:c,text:l.slice(0,600)}),o?.(a.id,l),n.sendPacket(a.id,t,{color:`#ffffff`,size:.28}),e(l)}catch(e){r({kind:`error`,from:a.name,to:c,text:e.message}),n.sendPacket(a.id,t,{color:`#ff5c5c`,size:.28}),l(e)}finally{n.setWorking(a.id,!1)}}})})}function g(){let t=[],n=(r,i)=>{t.push(`${`  `.repeat(i)}- Oficina "${r.name}"`);for(let n of e.agentsIn(r.id))t.push(`${`  `.repeat(i+1)}· ${n.name} (${n.provider}): ${n.role||`sin rol`}`);e.children(r.id).forEach(e=>n(e,i+1))};return n(e.rootOffice(),0),t.join(`
`)}function _(){return e.agentsIn(e.rootOffice().id)[0]||null}async function v(i){if(!s.apiKey)throw Error(`Configura tu API key de Anthropic en ⚙ Cerebro.`);if(c)throw Error(`El cerebro ya está trabajando en otra tarea.`);c=!0;let a=_(),u=a?.id||`user`,d=e.get().agents.filter(e=>e.id!==a?.id),m=new Map(d.map(e=>[Cb(e),e])),v=[...d.map(t=>({name:Cb(t),description:`Delegar a ${t.name} (${e.office(t.officeId)?.name}, conector ${t.provider}): ${t.role||`agente`}. Devuelve su respuesta.`,input_schema:{type:`object`,properties:{instruccion:{type:`string`,description:`Qué debe hacer, con todo el contexto necesario`}},required:[`instruccion`]}})),Sb],y=`Eres ${a?.name||`el Orquestador`}, el cerebro de una organización de agentes de automatización. Tu trabajo es cumplir el objetivo del usuario delegando en los agentes adecuados (puedes llamar a varios en paralelo) y usando http_request cuando necesites datos de una API. Delegar cuesta dinero: usa solo los agentes necesarios. Cuando termines, responde al usuario en español con un resumen claro del resultado.

Contexto: ${t.context}\n\nOrganigrama:\n`+g();r({kind:`task`,from:`Tú`,to:a?.name||`Cerebro`,text:i}),a&&await new Promise(e=>n.sendPacket(`user`,a.id,{color:`#ffffff`,onArrive:e})),n.setWorking(u,!0);try{let e=[...l.slice(-6),{role:`user`,content:i}],t=await f({apiKey:s.apiKey,model:s.model,system:y,messages:e,tools:v,maxSteps:s.maxSteps||8,agentId:u,onText:(e,t)=>t===`tool_use`&&r({kind:`brain`,from:a?.name||`Cerebro`,to:`plan`,text:e}),runTool:(e,t)=>{if(e===`http_request`)return p(u,t);let n=m.get(e);if(!n)throw Error(`Agente desconocido: ${e}`);return h(u,n,t.instruccion)}});return l.push({role:`user`,content:i},{role:`assistant`,content:t}),r({kind:`final`,from:a?.name||`Cerebro`,to:`Tú`,text:t}),a&&o?.(a.id,t),a&&n.sendPacket(a.id,`user`,{color:`#ffffff`}),t}finally{n.setWorking(u,!1),c=!1}}function y(e,t){if(!s.apiKey&&!e.config?.url&&!e.config?.apiKey)throw Error(`Configura tu API key en ⚙ Cerebro o un endpoint en el agente.`);return h(`user`,e,t)}return{run:v,direct:y,isBusy:()=>c,isReady:()=>!!s.apiKey,settings:()=>s,setSettings(e){s={...s,...e},vb(s)},clearHistory:()=>l.splice(0)}}var Db=`#e8600c`,Ob=`#ffffff`,kb=e=>new Promise(t=>setTimeout(t,e)),Ab=(e,t)=>Math.round(e+Math.random()*(t-e)),jb=e=>e.toLocaleString(`es-MX`);function Mb({store:e,world:n,log:o,bump:c,usage:l,trace:u,setResult:d,askValidation:f,onDone:p}){let m=!1,h=t=>t===`user`||t.startsWith(`src:`)||!!e.agent(t),g=t=>t===`user`?`Tú`:t.startsWith(`src:`)?r.find(e=>`src:${e.id}`===t)?.name:e.agent(t)?.name;function _(e,t,r,{color:i=Db,kind:a=`task`,quiet:s=!1}={}){return!h(e)||!h(t)?Promise.resolve():(s||o({kind:a,from:g(e),to:g(t),text:r}),c(e,`sent`),new Promise(r=>{n.sendPacket(e,t,{color:i,onArrive:()=>{c(t,`received`),r()}})||r()}))}async function v(t,r=700,i=[1800,4200]){let a=e.agent(t);if(a&&(n.setWorking(t,!0),await kb(r),n.setWorking(t,!1),a.provider===`claude`)){let e={input_tokens:Ab(...i),output_tokens:Ab(250,700)};l(t,e,yb(gb,e),`demo`)}}async function y(){if(!m){m=!0,u.reset();try{o({kind:`info`,text:`▶ Ciclo de datos · corte ${t.period} (datos de ejemplo)`}),await _(`user`,`ag_orq`,`Inicia el ciclo de consolidación de ${t.period.toLowerCase()}`,{color:Ob}),await v(`ag_orq`,600,[2500,5e3]);let n=0;await Promise.all(r.map(async(t,r)=>{await kb(r*350);let a=t.agentId;if(!e.agent(a))return;await _(`ag_orq`,a,`Extrae los datos de ${t.name} del periodo`),await _(a,`src:${t.id}`,`Solicita exportación a ${t.name}`,{quiet:!0});let o=i[t.id]||[];await _(`src:${t.id}`,a,o.map(e=>e.name).join(`, `),{color:Ob,kind:`doc`}),o.forEach(e=>u.add({doc:e.name,source:t.name,agentId:a,records:e.records,status:`Extraído`})),await v(a,600,[2200,6e3]);let s=o.reduce((e,t)=>e+t.records,0);n+=s,d(a,`Extrajo ${o.length} documento(s) con ${jb(s)} registros de ${t.name}.`)})),await Promise.all(r.map((e,t)=>kb(t*150).then(()=>_(e.agentId,`ag_norm`,`Entrega ${(i[e.id]||[]).length} documento(s) para normalizar`,{quiet:t>0})))),await v(`ag_norm`,900,[5e3,9e3]),u.setAll(`Normalizado`),d(`ag_norm`,`Unificó catálogos de clientes y conceptos: ${jb(n)} registros en un solo formato.`),await _(`ag_norm`,`ag_conc`,`${jb(n)} registros normalizados`),await v(`ag_conc`,1e3,[6e3,11e3]),u.setAll(`Conciliado`),d(`ag_conc`,`Cruzó ventas, facturas, pagos y bancos. Encontró ${a.length} discrepancias.`),await _(`ag_conc`,`ag_qa`,`Revisa ${a.length} discrepancias antes de publicar`),await v(`ag_qa`,900,[3e3,6e3]),a.forEach(e=>o({kind:`alert`,from:`Auditor de calidad`,to:`hallazgo`,text:`${e.title}: ${e.detail}`})),d(`ag_qa`,`${a.length} hallazgos enviados a validación humana.`),await _(`ag_qa`,`user`,`Validación humana requerida: ${a.length} hallazgos`);let c=await f(a),l=a.filter(e=>c[e.id]);a.forEach(e=>{u.decide(e,c[e.id]),u.setDoc(e.doc,c[e.id]?`Corregido · validado`:`Observado`)}),await _(`user`,`ag_qa`,`${l.length} correcciones aprobadas, ${a.length-l.length} rechazadas`,{color:Ob}),await _(`ag_qa`,`ag_cambios`,`Registra las correcciones y crea una nueva versión`),await _(`ag_qa`,`ag_db`,`Publica los datos curados y validados`),u.setAll(`Publicado`,[`Extraído`,`Normalizado`,`Conciliado`]),d(`ag_db`,`Datos del periodo publicados: ${jb(n)} registros curados.`),await Promise.all([`ag_fin`,`ag_com`,`ag_cli`].map(async(e,t)=>{await kb(t*300),await _(`ag_db`,e,`Calcula los indicadores del periodo`),await v(e,900,[4e3,8e3]),d(e,s[e]),await _(e,`ag_orq`,s[e],{color:Ob,kind:`live`})})),await v(`ag_orq`,700,[6e3,9e3]),await _(`ag_orq`,`ag_log`,`Guarda la trazabilidad del ciclo`),await _(`ag_orq`,`user`,`Dashboard ejecutivo actualizado con las conclusiones de los analistas`,{color:Ob,kind:`final`}),p({decisions:c,approved:l.length,total:a.length,records:n})}finally{m=!1}}}return{run:y,isRunning:()=>m}}var Nb=(e=``)=>String(e).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]),Pb=e=>`$${e.toFixed(1)}M`,Fb=e=>e>=1e6?`$${(e/1e6).toFixed(1)}M`:`$${Math.round(e/1e3)}K`,Ib=e=>`${e>0?`+`:``}${e.toFixed(1)}%`,Lb=e=>`$${e.toFixed(e<1?4:2)}`,Rb={ingresos:`#e8600c`,egresos:`#3987e5`},zb={bajo:{color:`#0ca30c`,icon:`✓`,label:`Bajo`},medio:{color:`#fab219`,icon:`!`,label:`Medio`},alto:{color:`#d03b3b`,icon:`✕`,label:`Alto`}},Bb;function Vb(){return Bb||(Bb=document.createElement(`div`),Bb.className=`viz-tip`,Bb.hidden=!0,document.body.appendChild(Bb)),Bb}function Hb(e,t,n){let r=Vb();r.innerHTML=e,r.hidden=!1;let i=r.getBoundingClientRect();r.style.left=`${Math.min(window.innerWidth-i.width-8,t+14)}px`,r.style.top=`${Math.max(8,n-i.height-10)}px`}var Ub=()=>Bb&&(Bb.hidden=!0);function Wb(e){let t=o.months.length,n=o.ingresos[t-1],r=o.ingresos[t-2],i=n-o.egresos[t-1],a=r-o.egresos[t-2],s=(e,t)=>(e-t)/t*100,c=e=>`<span class="delta ${e>=0?`up`:`down`}">${e>=0?`▲`:`▼`} ${Ib(e)} vs ${o.months[t-2].toLowerCase()}</span>`,l=(e,t,n)=>`<div class="kpi"><span class="kpi-label">${e}</span><b>${t}</b>${n}</div>`;return`<div class="kpis">
    ${l(`Ingresos ${o.months[t-1].toLowerCase()}`,Pb(n),c(s(n,r)))}
    ${l(`Flujo neto del mes`,`${i>=0?`+`:``}${Pb(i)}`,c(s(i,a)))}
    ${l(`Por cobrar vencido +60 días`,Pb(o.cxcVencida),`<span class="delta down">✕ ${Math.round(o.cxcVencida/o.cxcTotal*100)}% de ${Pb(o.cxcTotal)} por cobrar</span>`)}
    ${l(`Calidad de datos`,`${e.score.toFixed(1)}%`,`<span class="delta ${e.approved===e.total?`up`:`warn`}">${e.approved===e.total?`✓`:`!`} ${e.approved}/${e.total} correcciones validadas</span>`)}
  </div>`}function Gb(){let e=e=>40+e*428/(o.months.length-1),t=e=>14+(1-e/6)*178,n=n=>n.map((n,r)=>`${r?`L`:`M`}${e(r).toFixed(1)},${t(n).toFixed(1)}`).join(``),r=[0,2,4,6].map(e=>`<line x1="40" x2="468" y1="${t(e)}" y2="${t(e)}" class="grid"/><text x="32" y="${t(e)+4}" class="tick" text-anchor="end">${e}M</text>`).join(``),i=o.months.map((t,n)=>`<text x="${e(n)}" y="212" class="tick" text-anchor="middle">${t}</text>`).join(``),a=o.months.length-1,s=Object.entries(Rb).map(([r,i])=>{let s=o[r][a],c=r===`ingresos`?`Ingresos`:`Egresos`;return`<path d="${n(o[r])}" fill="none" stroke="${i}" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>
        <circle cx="${e(a)}" cy="${t(s)}" r="4.5" fill="${i}" stroke="#161616" stroke-width="2"/>
        <text x="${e(a)+10}" y="${t(s)+(r===`ingresos`?-2:12)}" class="end-label">${c} ${Pb(s)}</text>`}).join(``),c=o.months.map((t,n)=>{let r=428/(o.months.length-1);return`<rect class="hit" data-i="${n}" x="${e(n)-r/2}" y="14" width="${r}" height="178"/>`}).join(``);return`<figure class="chart" data-chart="line">
    <figcaption><b>Ingresos vs egresos</b><span>MXN, millones · ${o.months[0]}–${o.months[a]}</span></figcaption>
    <div class="legend"><span><i style="background:${Rb.ingresos}"></i>Ingresos</span><span><i style="background:${Rb.egresos}"></i>Egresos</span></div>
    <svg viewBox="0 0 560 220" role="img" aria-label="Ingresos y egresos mensuales">
      ${r}${i}<line class="cross" x1="0" x2="0" y1="14" y2="192" visibility="hidden"/>${s}${c}
    </svg>
    <details><summary>Ver tabla</summary><table><tr><th>Mes</th><th>Ingresos</th><th>Egresos</th><th>Flujo</th></tr>
      ${o.months.map((e,t)=>`<tr><td>${e}</td><td>${Pb(o.ingresos[t])}</td><td>${Pb(o.egresos[t])}</td><td>${Pb(o.ingresos[t]-o.egresos[t])}</td></tr>`).join(``)}
    </table></details>
  </figure>`}function Kb(){let e=o.channels.map(e=>({...e,roi:e.facturacion/e.inversion})).sort((e,t)=>t.roi-e.roi),n=6+e.length*34,r=Math.ceil(e[0].roi/5)*5,i=e=>408*e/r,a=e.map((e,t)=>{let n=6+t*34+8,r=Math.max(6,i(e.roi)),a=`M96,${n}h${r-4}a4,4 0 0 1 4,4v10a4,4 0 0 1 -4,4h${-(r-4)}z`;return`<text x="86" y="${n+13}" class="cat" text-anchor="end">${e.name}</text>
        <path d="${a}" fill="${Rb.ingresos}"/>
        <text x="${96+r+8}" y="${n+13}" class="val">${e.roi.toFixed(1)}×</text>
        <rect class="hit" data-i="${t}" x="0" y="${6+t*34}" width="560" height="34"/>`}).join(``);return`<figure class="chart" data-chart="roi" data-rows='${Nb(JSON.stringify(e))}'>
    <figcaption><b>Retorno de marketing por canal</b><span>Facturación por cada $1 invertido · ${t.period}</span></figcaption>
    <svg viewBox="0 0 560 ${n}" role="img" aria-label="Facturación por peso invertido, por canal">
      <line x1="96" x2="96" y1="0" y2="${n}" class="axis"/>${a}
    </svg>
    <details><summary>Ver tabla</summary><table><tr><th>Canal</th><th>Inversión</th><th>Facturación</th><th>Retorno</th></tr>
      ${e.map(e=>`<tr><td>${e.name}</td><td>${Fb(e.inversion)}</td><td>${Fb(e.facturacion)}</td><td>${e.roi.toFixed(1)}×</td></tr>`).join(``)}
    </table></details>
  </figure>`}function qb(){return`<section class="card">
    <header class="card-head"><b>Rentabilidad y riesgo por cliente</b><span>Riesgo = margen bajo + días de pago altos</span></header>
    <table class="data">
      <tr><th>Cliente</th><th class="num">Ventas</th><th class="num">Margen</th><th class="num">Días de pago</th><th>Riesgo de pérdida</th></tr>
      ${o.clients.map(e=>{let t=zb[e.riesgo];return`<tr><td>${e.name}</td><td class="num">${Fb(e.ventas)}</td><td class="num">${e.margen}%</td><td class="num">${e.dias}</td>
            <td><span class="status" style="--s:${t.color}"><i>${t.icon}</i>${t.label}</span></td></tr>`}).join(``)}
    </table>
  </section>`}function Jb(e){return`<section class="card">
    <header class="card-head"><b>Conclusiones de los agentes</b><span>Generadas en la Capa 3</span></header>
    <div class="conclusions">
      ${Object.entries(s).map(([t,n])=>`<article><span class="pill">${Nb(e.agent(t)?.name||t)}</span><p>${Nb(n)}</p></article>`).join(``)}
    </div>
  </section>`}function Yb(e){let t=e.querySelector(`[data-chart="line"] svg`);if(t){let e=t.querySelector(`.cross`);t.querySelectorAll(`.hit`).forEach(t=>{t.addEventListener(`pointermove`,n=>{let r=Number(t.dataset.i),i=Number(t.getAttribute(`x`))+Number(t.getAttribute(`width`))/2;e.setAttribute(`x1`,i),e.setAttribute(`x2`,i),e.setAttribute(`visibility`,`visible`),Hb(`<b>${o.months[r]} 2026</b>
           <div><i style="background:${Rb.ingresos}"></i>Ingresos <span>${Pb(o.ingresos[r])}</span></div>
           <div><i style="background:${Rb.egresos}"></i>Egresos <span>${Pb(o.egresos[r])}</span></div>
           <div class="sep">Flujo neto <span>${Pb(o.ingresos[r]-o.egresos[r])}</span></div>`,n.clientX,n.clientY)}),t.addEventListener(`pointerleave`,()=>{e.setAttribute(`visibility`,`hidden`),Ub()})})}let n=e.querySelector(`[data-chart="roi"]`);if(n){let e=JSON.parse(n.dataset.rows);n.querySelectorAll(`.hit`).forEach(t=>{t.addEventListener(`pointermove`,n=>{let r=e[Number(t.dataset.i)];Hb(`<b>${r.name}</b><div>Inversión <span>${Fb(r.inversion)}</span></div><div>Facturación <span>${Fb(r.facturacion)}</span></div><div class="sep">Retorno <span>${r.roi.toFixed(1)}×</span></div>`,n.clientX,n.clientY)}),t.addEventListener(`pointerleave`,Ub)})}}function Xb(e,{store:t,ready:n,quality:r}){if(!n){e.innerHTML=`<div class="empty">
      <span class="pill">Sin datos consolidados</span>
      <h3>Ejecuta el ciclo de datos</h3>
      <p>Los agentes extraerán la información de Compaq, Esfera, Monday, bancos y Excel; la consolidarán, te pedirán validar las discrepancias y publicarán aquí los indicadores.</p>
      <button class="btn accent" data-act="run-cycle">▶ Ejecutar ciclo de datos</button>
    </div>`;return}e.innerHTML=`${Wb(r)}<div class="charts">${Gb()}${Kb()}</div>${qb()}${Jb(t)}`,Yb(e)}function Zb(e,{rows:t,decisions:n,store:r}){if(!t.length){e.innerHTML=`<div class="empty"><p>Aún no hay documentos procesados. Ejecuta el ciclo de datos.</p></div>`;return}let i=e=>e.startsWith(`Corregido`)||e===`Publicado`?`ok`:e===`Observado`?`warn`:``;e.innerHTML=`<section class="card">
      <header class="card-head"><b>Documentos procesados</b><span>${t.length} documentos · ${t.reduce((e,t)=>e+t.records,0).toLocaleString(`es-MX`)} registros</span></header>
      <table class="data">
        <tr><th>Documento</th><th>Fuente</th><th>Agente</th><th class="num">Registros</th><th>Estado</th><th>Hora</th></tr>
        ${t.map(e=>`<tr><td class="mono">${Nb(e.doc)}</td><td>${Nb(e.source)}</td><td>${Nb(r.agent(e.agentId)?.name||`-`)}</td>
          <td class="num">${e.records}</td><td><span class="state ${i(e.status)}">${Nb(e.status)}</span></td><td class="num">${e.time}</td></tr>`).join(``)}
      </table>
    </section>
    <section class="card">
      <header class="card-head"><b>Decisiones de validación humana</b><span>Control de cambios</span></header>
      ${n.length?`<table class="data"><tr><th>Hallazgo</th><th>Corrección propuesta</th><th>Decisión</th><th>Hora</th></tr>
        ${n.map(e=>`<tr><td>${Nb(e.title)}</td><td>${Nb(e.fix)}</td>
          <td><span class="status" style="--s:${e.ok?zb.bajo.color:zb.medio.color}"><i>${e.ok?`✓`:`!`}</i>${e.ok?`Aprobada por Tú`:`Rechazada · queda observada`}</span></td><td class="num">${e.time}</td></tr>`).join(``)}</table>`:`<p class="muted">Pendiente: el auditor aún no envía hallazgos.</p>`}
    </section>`}function Qb(e,{usage:t,store:n}){let r=[...t.entries()].map(([e,t])=>({id:e,...t})).sort((e,t)=>t.usd-e.usd),i=r.reduce((e,t)=>({input:e.input+t.input,output:e.output+t.output,usd:e.usd+t.usd,calls:e.calls+t.calls}),{input:0,output:0,usd:0,calls:0}),a=Math.max(...r.map(e=>e.usd),1e-9);e.innerHTML=`<div class="kpis">
      <div class="kpi"><span class="kpi-label">Costo acumulado</span><b>${Lb(i.usd)}</b><span class="delta">USD · sesión actual</span></div>
      <div class="kpi"><span class="kpi-label">Tokens de entrada</span><b>${i.input.toLocaleString(`es-MX`)}</b><span class="delta">$1 por millón (Haiku 4.5)</span></div>
      <div class="kpi"><span class="kpi-label">Tokens de salida</span><b>${i.output.toLocaleString(`es-MX`)}</b><span class="delta">$5 por millón (Haiku 4.5)</span></div>
      <div class="kpi"><span class="kpi-label">Llamadas al modelo</span><b>${i.calls}</b><span class="delta">${r.length} agentes con IA</span></div>
    </div>
    <section class="card">
      <header class="card-head"><b>Consumo por agente</b><span>“Demo” = estimado del ciclo de ejemplo · “Real” = llamadas reales del cerebro</span></header>
      ${r.length?`<table class="data"><tr><th>Agente</th><th class="num">Llamadas</th><th class="num">Entrada</th><th class="num">Salida</th><th>Costo</th><th>Origen</th></tr>
        ${r.map(e=>`<tr><td>${Nb(n.agent(e.id)?.name||e.id)}</td><td class="num">${e.calls}</td><td class="num">${e.input.toLocaleString(`es-MX`)}</td><td class="num">${e.output.toLocaleString(`es-MX`)}</td>
          <td><span class="meter"><i style="width:${Math.max(3,e.usd/a*100)}%"></i></span><span class="num">${Lb(e.usd)}</span></td><td>${[...e.modes].map(e=>`<span class="state ${e===`real`?`ok`:``}">${e===`real`?`Real`:`Demo`}</span>`).join(` `)}</td></tr>`).join(``)}</table>`:`<p class="muted">Sin consumo todavía.</p>`}
    </section>`}var $b=`https://lpwohzbminesrjjnjdqi.supabase.co/functions/v1/treve`,ex=`3d-agents:backend-url`;function tx(){try{let e=new URLSearchParams(location.search).get(`backend`);return e&&localStorage.setItem(ex,e),e||localStorage.getItem(ex)||$b}catch{return $b}}var nx=tx();async function rx(e,t,n=2e4){let r=new AbortController,i=setTimeout(()=>r.abort(),n);try{let n=`${nx}?${new URLSearchParams(e)}`,i=await fetch(n,t?{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(t),signal:r.signal}:{signal:r.signal}),a=await i.json().catch(()=>({}));if(!i.ok)throw Error(a.error||`el orquestador respondió ${i.status}`);return a}finally{clearTimeout(i)}}var ix={url:nx,salud:()=>rx({accion:`salud`},null,8e3),iniciar:e=>rx({},{accion:`iniciar`,...e}),estado:(e,t=0,n=!1)=>rx({accion:`estado`,corrida:e,desde:t,archivos:+!!n}),resolver:(e,t,n=``)=>rx({},{accion:`resolver`,hallazgo:e,decision:t,nota:n}),corridas:()=>rx({accion:`corridas`})},ax={tarea:`#e8600c`,documento:`#ffffff`,resultado:`#ffffff`,alerta:`#ff9a52`,decision:`#ffffff`,validacion:`#fab219`,error:`#ff5c5c`,info:`#b8b8b8`,fin:`#ffffff`},ox={tarea:`task`,documento:`doc`,resultado:`live`,alerta:`alert`,decision:`live`,validacion:`alert`,error:`error`,info:`info`,fin:`final`},sx=e=>new Promise(t=>setTimeout(t,e));function cx({store:e,world:t,log:n,bump:r,setResult:i,nameOf:a,onUpdate:o}){let s=null,c=t=>t&&(t===`user`||t===`external`||t.startsWith(`src:`)||!!e.agent(t));async function l(o){if(o.tipo===`trabajando`)return e.agent(o.de)&&t.setWorking(o.de,!!o.datos?.on),0;o.tipo===`resultado`&&e.agent(o.de)&&i(o.de,o.mensaje);let s=ox[o.tipo]||`info`;return s===`info`||!o.para?n({kind:s===`info`?`info`:s,from:a(o.de),to:a(o.para||o.de),text:o.mensaje}):n({kind:s,from:a(o.de),to:a(o.para),text:o.mensaje}),c(o.de)&&c(o.para)&&o.de!==o.para?(r(o.de,`sent`),t.sendPacket(o.de,o.para,{color:ax[o.tipo]||`#e8600c`,onArrive:()=>r(o.para,`received`)}),o.tipo===`tarea`?380:520):(c(o.de)&&t.pulse(o.de,1),260)}async function u(e){for(e.playing=!0;!e.stopped;){let t=e.queue.shift();if(!t){if(e.final)break;await sx(200);continue}await sx(await l(t)/(e.queue.length>25?3:e.queue.length>10?1.6:1))}e.playing=!1}async function d(e){let t=0;for(;!e.stopped;){try{let n=await ix.estado(e.id,e.desde,!1);t=0;for(let t of n.eventos)e.queue.push(t);if(n.eventos.length&&(e.desde=n.eventos[n.eventos.length-1].id),e.state=n,o?.(n,{playing:e.queue.length>0}),[`terminada`,`error`,`en_revision`].includes(n.corrida.estado)&&!n.eventos.length){for(e.final=!0;e.playing&&!e.stopped;)await sx(250);e.stopped||e.resolveDone(n);return}}catch(n){if(++t>8){e.final=!0,e.rejectDone(n);return}}await sx(1100)}}function f(e,t=0){p();let n={id:e,desde:t,queue:[],stopped:!1,final:!1,playing:!1};return n.done=new Promise((e,t)=>(n.resolveDone=e,n.rejectDone=t)),s=n,u(n),d(n),n.done}function p(){s&&(s.stopped=!0),s=null}return{follow:f,stop:p,current:()=>s,async start(e){let{corrida:t,unida:r}=await ix.iniciar(e);return r&&n({kind:`info`,text:`Ya había un ciclo en curso: te uniste para verlo en vivo.`}),{corrida:t,done:f(t,0)}},resume:()=>s?f(s.id,s.desde):Promise.resolve(null)}}var lx=(e=``)=>String(e).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]),ux=e=>e==null?`s/d`:Math.abs(e)>=1e6?`$${(e/1e6).toFixed(2)}M`:`$${Math.round(e/1e3).toLocaleString(`es-MX`)}K`,dx=e=>e==null?`s/d`:`$`+Number(e).toLocaleString(`es-MX`,{maximumFractionDigits:0}),fx={venta_sin_factura:`Venta sin factura`,oportunidad_duplicada:`Oportunidad duplicada`,monto_distinto:`Monto distinto`,pago_no_registrado:`Pago no registrado`,deposito_sin_identificar:`Depósito sin identificar`,nomina_no_cuadra:`Nómina no cuadra`,factura_sin_venta:`Factura sin venta`,cobro_no_encontrado:`Cobro no encontrado`,fuente_no_disponible:`Fuente no disponible`},px={en_revision:[`warn`,`! En revisión`],confirmado:[`ok`,`✓ Confirmado`],descartado:[``,`✕ Descartado`],abierto:[``,`i Aviso al área`]},mx={corregir_automatico:`Corrección automática`,validacion_humana:`Validación humana`,solo_informar:`Aviso al área`},hx=e=>Object.fromEntries((e.indicadores||[]).map(e=>[e.clave,e.valor])),gx=(e,t)=>(e.indicadores||[]).find(e=>e.clave===t)?.detalle||{};function _x({id:e,title:t,sub:n,rows:r,series:i,fmtVal:a=ux}){if(!r.length)return``;let o=4+r.length*32,s=Math.max(...r.map(e=>e.values.reduce((e,t)=>e+t,0)),1),c=e=>340*e/s,l=r.map((e,t)=>{let n=4+t*32+7,r=150,o=e.values.map((t,a)=>{if(t<=0)return``;let o=Math.max(3,c(t)-(a<e.values.length-1?2:0)),s=e.values.slice(a+1).every(e=>e<=0)?`M${r},${n}h${o-4}a4,4 0 0 1 4,4v10a4,4 0 0 1 -4,4h${-(o-4)}z`:`M${r},${n}h${o}v18h${-o}z`;return r+=c(t),`<path d="${s}" fill="${i[a].color}"/>`}).join(``),s=e.values.reduce((e,t)=>e+t,0);return`<text x="140" y="${n+13}" class="cat" text-anchor="end">${lx(e.label.length>22?e.label.slice(0,21)+`…`:e.label)}</text>${o}
        <text x="${150+c(s)+8}" y="${n+13}" class="val">${a(s)}</text>
        <rect class="hit" data-i="${t}" x="0" y="${4+t*32}" width="560" height="32"/>`}).join(``),u=i.length>1?`<div class="legend">${i.map(e=>`<span><i style="background:${e.color}"></i>${e.name}</span>`).join(``)}</div>`:``;return`<figure class="chart" data-chart="${e}" data-rows='${lx(JSON.stringify(r))}' data-series='${lx(JSON.stringify(i.map(e=>e.name)))}'>
    <figcaption><b>${t}</b><span>${n}</span></figcaption>${u}
    <svg viewBox="0 0 560 ${o}" role="img" aria-label="${lx(t)}"><line x1="150" x2="150" y1="0" y2="${o}" class="axis"/>${l}</svg>
    <details><summary>Ver tabla</summary><table><tr><th></th>${i.map(e=>`<th>${e.name}</th>`).join(``)}</tr>
      ${r.map(e=>`<tr><td>${lx(e.label)}</td>${e.values.map(e=>`<td>${dx(e)}</td>`).join(``)}</tr>`).join(``)}</table></details>
  </figure>`}function vx(e){e.querySelectorAll(`figure.chart[data-rows]`).forEach(e=>{let t=JSON.parse(e.dataset.rows),n=JSON.parse(e.dataset.series);e.querySelectorAll(`.hit`).forEach(e=>{e.addEventListener(`pointermove`,r=>{let i=t[Number(e.dataset.i)];Hb(`<b>${lx(i.label)}</b>${i.values.map((e,t)=>`<div>${n[t]} <span>${dx(e)}</span></div>`).join(``)}`,r.clientX,r.clientY)}),e.addEventListener(`pointerleave`,Ub)})})}var yx=e=>getComputedStyle(document.documentElement).getPropertyValue(e).trim();function bx(e,t,{store:n}){let r=hx(t);if(!t.indicadores?.length){e.innerHTML=`<div class="empty"><span class="pill">Ciclo en curso</span><h3>Los agentes están trabajando</h3><p>Los indicadores aparecen cuando el Almacén publica los datos conciliados.</p></div>`;return}let i=t.corrida,a=i.resumen?.evaluacion,o=(t.hallazgos||[]).filter(e=>e.estado===`en_revision`).length,s=(e,t,n)=>`<div class="kpi"><span class="kpi-label">${e}</span><b>${t}</b>${n}</div>`,c=yx(`--s1`)||`#e8600c`,l=yx(`--s2`)||`#3987e5`,u=(gx(t,`ventas_ganadas`).por_canal||[]).map(e=>({label:e.canal,values:[e.monto]})),d=(gx(t,`por_cobrar`).por_cliente||[]).map(e=>({label:e.cliente.replace(/ S\.?A\.? de C\.?V\.?| SC$/i,``),values:[e.cobrado,e.por_cobrar]})),f=(gx(t,`egresos_banco`).por_categoria||[]).map(e=>({label:e.categoria,values:[e.monto]})),p=i.resumen?.conclusiones;e.innerHTML=`
    ${o?`<div class="banner warn"><b>! Preliminar</b><span>${o} hallazgo${o>1?`s`:``} esperan validación humana antes de publicar la versión final.</span><button class="btn accent" data-act="open-validation">Revisar ahora</button></div>`:i.estado===`terminada`?`<div class="banner ok"><b>✓ Versión final</b><span>Todas las decisiones están validadas.</span></div>`:``}
    <div class="kpis">
      ${s(`Ventas ganadas`,ux(r.ventas_ganadas),`<span class="delta">${r.oportunidades_ganadas} oportunidades · cierre ${r.tasa_cierre??`s/d`} %</span>`)}
      ${s(`Flujo neto del mes`,r.flujo_neto==null?`s/d`:`${r.flujo_neto>=0?`+`:``}${ux(r.flujo_neto)}`,`<span class="delta">Ingresos ${ux(r.ingresos_banco)} · egresos ${ux(r.egresos_banco)}</span>`)}
      ${s(`Por cobrar real`,ux(r.por_cobrar),`<span class="delta ${r.por_cobrar_segun_compaq===r.por_cobrar?``:`warn`}">Compaq dice ${ux(r.por_cobrar_segun_compaq)}</span>`)}
      ${s(`Calidad de datos`,`${r.calidad_datos??`s/d`}%`,`<span class="delta ${a&&a.aciertos===a.esperadas?`up`:`warn`}">${a?`${a.aciertos===a.esperadas?`✓`:`!`} ${a.aciertos}/${a.esperadas} discrepancias detectadas`:`${r.hallazgos} hallazgos`}</span>`)}
    </div>
    <div class="kpis small">
      ${s(`Saldo final`,ux(r.saldo_final),`<span class="delta">${r.saldo_final_usd?`≈ US$${Math.round(r.saldo_final_usd).toLocaleString(`es-MX`)}`:`sin tipo de cambio`}</span>`)}
      ${s(`Tipo de cambio`,r.tipo_cambio_usd?`$${r.tipo_cambio_usd.toFixed(2)}`:`s/d`,`<span class="delta">USD/MXN · ${lx(gx(t,`tipo_cambio_usd`).fuente||`Frankfurter`)}</span>`)}
      ${s(`Días hábiles`,r.dias_habiles??`s/d`,`<span class="delta">${(gx(t,`dias_habiles`).feriados||[]).map(e=>lx(e.nombre)).join(`, `)||`sin festivos`}</span>`)}
      ${s(`Ventas sin facturar`,ux(r.ventas_sin_facturar),`<span class="delta ${r.ventas_sin_facturar?`down`:`up`}">${r.ventas_sin_facturar?`✕ por facturar`:`✓ todo facturado`}</span>`)}
    </div>
    <div class="charts one">
      ${_x({id:`clientes`,title:`Cobranza por cliente`,sub:`MXN · cobrado confirmado en banco vs pendiente`,rows:d,series:[{name:`Cobrado`,color:c},{name:`Por cobrar`,color:l}]})}
      ${_x({id:`canal`,title:`Ventas ganadas por canal`,sub:`MXN · ${lx(i.periodo)}`,rows:u,series:[{name:`Ventas`,color:c}]})}
    </div>
    ${f.length?`<div class="charts one">${_x({id:`gastos`,title:`Egresos por categoría`,sub:`MXN · según el estado de cuenta`,rows:f,series:[{name:`Egresos`,color:c}]})}</div>`:``}
    ${p?`<section class="card"><header class="card-head"><b>Conclusiones de los analistas</b><span>Redactadas por ${lx(i.resumen.motor===`plantillas`?`plantillas (sin IA)`:i.resumen.motor)} con cifras calculadas en código</span></header>
      <div class="conclusions">${[[`ag_fin`,p.financiero],[`ag_com`,p.comercial],[`ag_cli`,p.clientes]].map(([e,t])=>`<article><span class="pill">${lx(n.agent(e)?.name||e)}</span><p>${lx(t)}</p></article>`).join(``)}</div></section>`:``}`,vx(e)}function xx(e,t){let n=t.hallazgos||[];if(!n.length){e.innerHTML=`<div class="empty"><p>El Conciliador aún no reporta hallazgos.</p></div>`;return}e.innerHTML=`<section class="card">
    <header class="card-head"><b>Hallazgos de la conciliación</b><span>El código los detecta; ${n.some(e=>e.decision?.fuente===`jev`)?`JEV`:`las reglas fijas`} deciden qué hacer; tú validas los dudosos</span></header>
    <table class="data"><tr><th>Tipo</th><th>Descripción</th><th class="num">Monto</th><th>Decisión</th><th>Estado</th><th></th></tr>
    ${n.map(e=>{let[t,n]=px[e.estado]||[``,e.estado];return`<tr><td><b>${lx(fx[e.tipo]||e.tipo)}</b></td><td>${lx(e.descripcion)}${e.nota?`<br><small class="muted">Nota: ${lx(e.nota)}</small>`:``}</td>
        <td class="num">${e.monto==null?`—`:dx(e.monto)}</td>
        <td>${e.decision?`${lx(mx[e.decision.choice]||e.decision.choice)}<br><small class="muted">${Math.round((e.decision.confidence||0)*100)} % · ${e.decision.fuente===`jev`?`JEV`:`reglas`}</small>`:`—`}</td>
        <td><span class="state ${t}">${n}</span></td>
        <td>${e.estado===`en_revision`?`<div class="row tight"><button class="mini accent" data-resolver="${e.id}" data-decision="confirmado">Aprobar</button><button class="mini" data-resolver="${e.id}" data-decision="descartado">Descartar</button></div>`:``}</td></tr>`}).join(``)}
    </table></section>`}var Sx={extraer:`Extracción`,mercado:`APIs públicas`,normalizar:`Normalización`,conciliar:`Conciliación`,juzgar:`Juicio (JEV)`,almacenar:`Almacén`,indicadores:`Indicadores`,llenar_excel:`Reporte Excel`,conclusiones:`Conclusiones`,notificar:`Alertas n8n`,cierre:`Cierre`};function Cx(e,t,{store:n}){let r=t.archivos||[];e.innerHTML=`<section class="card">
      <header class="card-head"><b>Archivos del ciclo</b><span>Fuentes crudas tal como llegaron y reportes generados · guardados en Supabase Storage</span></header>
      ${r.length?`<table class="data"><tr><th>Archivo</th><th>Fuente</th><th>Formato</th><th class="num">Filas</th><th></th></tr>
        ${r.map(e=>`<tr><td class="mono">${lx(e.nombre)}</td><td>${lx(e.fuente)}</td><td>${lx(e.formato.toUpperCase())}</td><td class="num">${e.filas??``}</td>
          <td>${e.url?`<a class="mini accent" href="${lx(e.url)}" target="_blank" rel="noopener">Descargar</a>`:`<span class="muted">…</span>`}</td></tr>`).join(``)}</table>`:`<p class="muted">Aún no hay archivos.</p>`}
    </section>
    <section class="card">
      <header class="card-head"><b>Cola del orquestador</b><span>Cada paso es una tarea de un agente en treve.tareas</span></header>
      <table class="data"><tr><th>#</th><th>Paso</th><th>Agente</th><th>Estado</th><th>Intentos</th></tr>
      ${(t.tareas||[]).map((e,t)=>`<tr><td class="num">${t+1}</td><td>${lx(Sx[e.paso]||e.paso)}</td><td>${lx(n.agent(e.agente)?.name||e.agente)}</td>
        <td><span class="state ${e.estado===`hecha`?`ok`:e.estado===`error`?`warn`:``}">${lx(e.estado)}</span>${e.error?`<br><small class="muted">${lx(e.error)}</small>`:``}</td><td class="num">${e.intentos}</td></tr>`).join(``)}
      </table>
    </section>`}function wx(e,t,{salud:n}){let r=t.corrida,i=r.costo_ia||{},a=r.resumen?.evaluacion,o=n?.integraciones||{},s=(e,t)=>`<span class="state ${e?`ok`:``}">${e?`✓ `+t:`Sin configurar`}</span>`;e.innerHTML=`<div class="kpis">
      <div class="kpi"><span class="kpi-label">Costo de IA del ciclo</span><b>$${Number(i.openai_usd||0).toFixed(4)}</b><span class="delta">USD · ${lx(i.modelo||`plantillas`)}</span></div>
      <div class="kpi"><span class="kpi-label">Tokens</span><b>${Number(i.tokens||0).toLocaleString(`es-MX`)}</b><span class="delta">conclusiones y mapeos</span></div>
      <div class="kpi"><span class="kpi-label">Decisiones de JEV</span><b>${i.jev_llamadas||0}</b><span class="delta">${i.jev_llamadas?`llamadas`:`se usaron reglas fijas`}</span></div>
      <div class="kpi"><span class="kpi-label">Autoevaluación</span><b>${a?`${a.aciertos}/${a.esperadas}`:`—`}</b><span class="delta ${a&&!a.falsasAlarmas.length?`up`:`warn`}">${a?`${a.falsasAlarmas.length} falsas alarmas`:`al cerrar el ciclo`}</span></div>
    </div>
    <section class="card"><header class="card-head"><b>Integraciones del orquestador</b><span>Las keys viven en los secrets de Supabase, nunca en el navegador</span></header>
      <table class="data">
        <tr><td>Cerebro (redacción y mapeo de columnas)</td><td>${s(o.openai,o.openai||``)}</td></tr>
        <tr><td>JEV (decisiones con confianza)</td><td>${s(o.jev,`conectado`)}</td></tr>
        <tr><td>Simulador de fuentes (n8n)</td><td class="mono">${lx(o.simulador||`—`)}</td></tr>
        <tr><td>Agente de alertas (n8n)</td><td class="mono">${lx(o.alertas||`—`)}</td></tr>
        <tr><td>APIs públicas</td><td>${lx((o.apis_publicas||[]).join(` · `))}</td></tr>
      </table></section>
    ${a&&(a.faltantes.length||a.falsasAlarmas.length)?`<section class="card"><header class="card-head"><b>Detalle de la autoevaluación</b><span>Contra la hoja de respuestas del simulador</span></header>
      <p class="muted">${a.faltantes.length?`No detectadas: ${a.faltantes.map(lx).join(`, `)}. `:``}${a.falsasAlarmas.length?`Falsas alarmas: ${a.falsasAlarmas.map(lx).join(`, `)}`:``}</p></section>`:``}`}var Tx=`3d-agents:tema`,Ex={inmersivo:{label:`3D inmersivo`,hint:`Oscuro, con brillo y vidrio`,scene:{background:`#08080a`,fog:[110,250],ground:`#0c0c0e`,dots:`#4a4a4a`,hemi:[`#ffffff`,`#101010`,1.25],sun:1.3,bloom:[.85,.7,.78],pixel:1,toon:!1,colors:{}}},juego:{label:`Videojuego`,hint:`Píxeles, caricatura y HUD`,scene:{background:`#140f2d`,fog:[130,280],ground:`#0f0b24`,dots:`#5c4dd6`,hemi:[`#c9bcff`,`#2a1f5c`,1.5],sun:1.15,bloom:[.45,.2,.85],pixel:.42,toon:!0,colors:{"#1c1c1c":`#2a1f5c`,"#29231f":`#3b2a7a`,"#262626":`#5a45b8`,"#d2d2d2":`#ffcf5c`,"#8c8c8c":`#ff8a3d`,"#2b2b2b":`#ff5c8a`,"#2f2f2f":`#ff8a3d`,"#5d7558":`#4cd964`,"#dedede":`#5ce1e6`,"#121212":`#101026`},packets:{"#ffffff":`#5ce1e6`}}},claro:{label:`Claro ejecutivo`,hint:`Papel cálido, sin brillo`,scene:{background:`#efece6`,fog:[150,320],ground:`#e6e1d8`,dots:`#c9c1b4`,hemi:[`#ffffff`,`#d8d2c8`,1.7],sun:1.35,bloom:[0,0,1],pixel:1,toon:!1,colors:{"#1c1c1c":`#dcd6cc`,"#29231f":`#f2e8dc`,"#262626":`#fbfaf7`,"#d2d2d2":`#d9c4a3`,"#2b2b2b":`#5b5b5b`,"#2f2f2f":`#c9b29a`,"#dedede":`#ffffff`,"#121212":`#2a2a2a`,"#4a4a4a":`#8a8a8a`,"#b3b3b3":`#3a3a3a`,"#ffffff":`#2b2b2b`},basicOnly:[`#b3b3b3`,`#ffffff`],packets:{"#ffffff":`#2b2b2b`}}}};function Dx(){try{let e=new URLSearchParams(location.search).get(`tema`);if(e&&Ex[e])return e;let t=localStorage.getItem(Tx);return Ex[t]?t:`inmersivo`}catch{return`inmersivo`}}function Ox({world:e,onChange:t}){let n=document.querySelector(`#themeList`),r=r=>{document.documentElement.dataset.tema=r,e.setTheme(r,Ex[r].scene);try{localStorage.setItem(Tx,r)}catch{}n.querySelectorAll(`[data-theme]`).forEach(e=>e.classList.toggle(`on`,e.dataset.theme===r)),t?.(r)};n.innerHTML=`<div class="menu-title">Estilo de la interfaz</div>`+Object.entries(Ex).map(([e,t])=>`<button data-theme="${e}"><i class="swatch ${e}"></i><span><b>${t.label}</b><small>${t.hint}</small></span></button>`).join(``),n.addEventListener(`click`,e=>{let t=e.target.closest(`[data-theme]`);t&&(r(t.dataset.theme),t.closest(`details`).removeAttribute(`open`))}),r(Dx())}var Q=e=>document.querySelector(e),kx=(e=``)=>String(e).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]),$=m(f()),Ax=null,jx=new Map,Mx=new Map,Nx=()=>new Date().toLocaleTimeString(`es`,{hour12:!1});function Px(e,t,n,r){if(!e)return;let i=jx.get(e)||{input:0,output:0,usd:0,calls:0,modes:new Set};i.input+=t.input_tokens||0,i.output+=t.output_tokens||0,i.usd+=n,i.calls+=1,i.modes.add(r),jx.set(e,i),mS()}function Fx(e,t){Mx.set(e,{text:t,time:Nx()}),Ax?.id===e&&Gx()}var Ix={rows:[],decisions:[],reset(){this.rows=[],this.decisions=[],mS()},add(e){this.rows.push({...e,time:Nx()}),mS()},setAll(e,t){this.rows.forEach(n=>(!t||t.includes(n.status))&&Object.assign(n,{status:e,time:Nx()})),mS()},setDoc(e,t){this.rows.filter(t=>t.doc===e).forEach(e=>Object.assign(e,{status:t,time:Nx()})),mS()},decide(e,t){this.decisions.push({...e,ok:t,time:Nx()})}},Lx=_d(Q(`#scene`),{onSelect:e=>Wx(e,!0)}),Rx=Cd({store:$,world:Lx,log:Hx}),zx=0,Bx=Eb({store:$,world:Lx,log:Hx,bump:(e,t)=>Rx.bump(e,t),onUsage:(e,t,n)=>{zx+=e,Px(n,t,e,`real`),sS()},onResult:Fx}),Vx=Q(`#feed`);function Hx(e){let t=document.createElement(`li`);t.className=e.kind,e.color&&t.style.setProperty(`--c`,e.color);let n=new Date().toLocaleTimeString(`es`,{hour12:!1});if(e.kind===`info`)t.innerHTML=`<div class="meta"><span>sistema</span><span>${n}</span></div><div class="txt">${kx(e.text)}</div>`;else{let r=[`task`,`http`].includes(e.kind)?`→`:e.kind===`brain`?`·`:`↩`,i={live:` · resultado`,error:` · error`,brain:` · razonando`,final:` · respuesta final`,http:` · HTTP`,"http-reply":` · HTTP`,doc:` · documentos`,alert:` · requiere validación`}[e.kind]||``;t.innerHTML=`<div class="meta"><span><span class="who">${kx(e.from)}</span> ${r} ${kx(e.to)}${i}</span><span>${n}</span></div><div class="txt">${kx(e.text)}</div>`}for(Vx.prepend(t);Vx.children.length>80;)Vx.lastChild.remove()}function Ux(){let e=$.rootOffice(),t=e=>{let n=$.agentsIn(e.id),r=$.children(e.id),i=(e,t)=>Ax?.type===e&&Ax.id===t?` selected`:``;return`<div class="tree-office">
      <div class="tree-row office${i(`office`,e.id)}" data-office="${e.id}">
        <span class="dot" style="background:${e.color}"></span>${kx(e.name)}<span class="count">${n.length}</span>
      </div>
      <div class="tree-children">
        ${n.map(e=>{let t=ld(e.provider);return`<div class="tree-row agent${i(`agent`,e.id)}" data-agent="${e.id}"><span class="dot" style="background:${t.color}"></span>${kx(e.name)}<small>${t.short}</small></div>`}).join(``)}
        ${r.map(t).join(``)}
      </div>
    </div>`};Q(`#tree`).innerHTML=e?t(e):``}Q(`#tree`).addEventListener(`click`,e=>{let t=e.target.closest(`.tree-row`);t&&Wx(t.dataset.agent?{type:`agent`,id:t.dataset.agent}:{type:`office`,id:t.dataset.office},!0)});function Wx(e,t){e&&e.type===`agent`&&!$.agent(e.id)&&(e=null),e&&e.type===`office`&&!$.office(e.id)&&(e=null),e&&e.type===`source`&&!r.some(t=>t.id===e.id)&&(e=null),Ax=e,Lx.setSelected(e?.type===`agent`?e.id:null),t&&Lx.focus(e),Ux(),Gx()}function Gx(){let e=Q(`#details`);if(!Ax){e.hidden=!0;return}if(e.hidden=!1,e.style.position=`relative`,Ax.type===`source`){let t=r.find(e=>e.id===Ax.id),n=$.agent(t.agentId),a=Ix.rows.filter(e=>e.source===t.name);e.innerHTML=`
      <button class="icon-btn close" data-act="close">✕</button>
      <span class="pill">Fuente de datos</span>
      <h3>${kx(t.name)}</h3>
      <div class="sub">${kx(t.desc)} · la lee ${n?`<a href="#" data-agent="${n.id}">${kx(n.name)}</a>`:`ningún agente`}</div>
      <div class="stats">
        <div class="stat"><b>${(i[t.id]||[]).length}</b><span>Documentos por ciclo</span></div>
        <div class="stat"><b>${a.reduce((e,t)=>e+t.records,0)}</b><span>Registros este ciclo</span></div>
      </div>
      <dl class="kv">${(a.length?a:(i[t.id]||[]).map(e=>({doc:e.name,status:`Pendiente`}))).map(e=>`<dt>${kx(e.status)}</dt><dd>${kx(e.doc)}</dd>`).join(``)}</dl>
      <p class="hint">En el MVP la conexión es simulada. En producción, este agente extrae la información de ${kx(t.name)} de forma automática y programada.</p>`;return}if(Ax.type===`agent`){let t=$.agent(Ax.id),n=ld(t.provider),r=$.office(t.officeId),i=Rx.stats(t.id),a=n.fields.filter(e=>t.config?.[e.key]).map(e=>`<dt>${kx(e.label)}</dt><dd>${e.type===`password`?`••••••`+kx(String(t.config[e.key]).slice(-4)):kx(String(t.config[e.key]).slice(0,80))}</dd>`).join(``),o=ud(t),s=Bx.isReady()?o?`Envío real: ${t.provider===`claude`?`Claude responde con su rol y puede llamar APIs`:`se llama a su endpoint`}.`:`Sin endpoint propio: la IA simula su rol (edítalo para conectarlo de verdad).`:`Modo demo: respuesta simulada. Configura el ⚙ Cerebro para que trabaje de verdad.`;e.innerHTML=`
      <button class="icon-btn close" data-act="close">✕</button>
      <span class="pill"><i style="width:7px;height:7px;border-radius:50%;background:${n.color}"></i>${n.label}</span>
      <span class="pill light">${o?`Conectado`:`Simulado por IA`}</span>
      <h3>${kx(t.name)}</h3>
      <div class="sub">${kx(t.role||`Sin descripción`)}</div>
      <div class="stats">
        <div class="stat"><b>${i.sent}</b><span>Enviados</span></div>
        <div class="stat"><b>${i.received}</b><span>Recibidos</span></div>
      </div>
      ${Mx.has(t.id)?`<div class="result"><span>Último resultado · ${Mx.get(t.id).time}</span><p>${kx(Mx.get(t.id).text.slice(0,400))}</p></div>`:``}
      <dl class="kv">
        <dt>Oficina</dt><dd>${kx(r?.name||`-`)}</dd>
        ${jx.has(t.id)?`<dt>Tokens</dt><dd>${(jx.get(t.id).input+jx.get(t.id).output).toLocaleString(`es-MX`)} · $${jx.get(t.id).usd.toFixed(4)}</dd>`:``}
        ${a||`<dt>Config</dt><dd>— (sin configurar)</dd>`}
      </dl>
      <textarea id="msgText" placeholder="Escribe una instrucción para ${kx(t.name)}…"></textarea>
      <div class="row">
        <button class="btn accent" data-act="send">Enviar como “Tú”</button>
        <button class="btn" data-act="edit">Editar</button>
        <button class="btn danger" data-act="delete">Eliminar</button>
      </div>
      <p class="hint">${s}</p>`}else{let t=$.office(Ax.id),n=$.agentsIn(t.id),r=$.office(t.parentId),i=!t.parentId;e.innerHTML=`
      <button class="icon-btn close" data-act="close">✕</button>
      <span class="pill"><i style="width:7px;height:7px;border-radius:50%;background:${t.color}"></i>${i?`Oficina principal`:`Oficina`}</span>
      <h3>${kx(t.name)}</h3>
      <div class="sub">${i?`Centro de mando`:`Depende de ${kx(r?.name||`-`)}`}</div>
      <div class="stats">
        <div class="stat"><b>${n.length}</b><span>Agentes</span></div>
        <div class="stat"><b>${$.children(t.id).length}</b><span>Sub-oficinas</span></div>
      </div>
      <div class="agents-mini">
        ${n.map(e=>`<button class="btn" data-agent="${e.id}"><span style="color:${ld(e.provider).color}">●</span> ${kx(e.name)} <small style="color:var(--muted)">· ${ld(e.provider).short}</small></button>`).join(``)||`<small style="color:var(--muted)">Sin agentes todavía</small>`}
      </div>
      <div class="row">
        <button class="btn accent" data-act="add-agent">+ Agente aquí</button>
        <button class="btn" data-act="add-sub">+ Sub-oficina</button>
        <button class="btn" data-act="edit">Editar</button>
        ${i?``:`<button class="btn danger" data-act="delete">Eliminar</button>`}
      </div>`}}Q(`#details`).addEventListener(`click`,e=>{let t=e.target.closest(`[data-agent]`);if(t)return e.preventDefault(),Wx({type:`agent`,id:t.dataset.agent},!0);let n=e.target.closest(`[data-act]`)?.dataset.act;if(!n||!Ax)return;let{type:r,id:i}=Ax;if(n===`close`)return Wx(null,!1);if(r===`agent`){let e=$.agent(i);if(n===`send`){let t=Q(`#msgText`).value.trim()||`Dame un estado rápido de tu trabajo`;Q(`#msgText`).value=``;let n=()=>Ax?.id===e.id&&Gx();if(Bx.isReady())try{Bx.direct(e,t).catch(()=>{}).finally(n)}catch(t){Hx({kind:`error`,from:`Sistema`,to:e.name,text:t.message})}else Rx.sendTask(`user`,e.id,t).then(n)}n===`edit`&&nS(e),n===`delete`&&confirm(`¿Eliminar el agente "${e.name}"?`)&&($.removeAgent(i),Wx(null,!1))}else{let e=$.office(i);n===`add-agent`&&nS(null,e.id),n===`add-sub`&&Xx(null,e.id),n===`edit`&&Xx(e),n===`delete`&&confirm(`¿Eliminar "${e.name}"? Sus agentes pasan a la oficina superior.`)&&($.removeOffice(i),Wx(null,!1))}});var Kx=Q(`#officeDialog`),qx=Q(`#officeForm`),Jx=null;function Yx(e){qx.elements.color.value=e,Q(`#swatches`).innerHTML=d.map(t=>`<button type="button" data-c="${t}" style="background:${t}" class="${t.toLowerCase()===e.toLowerCase()?`on`:``}" title="${t}"></button>`).join(``)}Q(`#swatches`).addEventListener(`click`,e=>{let t=e.target.closest(`[data-c]`);t&&Yx(t.dataset.c)});function Xx(e,t){Jx=e;let{offices:n}=$.get(),r=new Set;if(e){let t=e=>n.filter(t=>t.parentId===e).forEach(e=>(r.add(e.id),t(e.id)));t(e.id)}Q(`#officeTitle`).textContent=e?`Editar oficina`:`Nueva oficina`;let i=e&&!e.parentId;qx.elements.parentId.innerHTML=i?`<option value="">— (es la oficina principal)</option>`:n.filter(t=>t.id!==e?.id&&!r.has(t.id)).map(e=>`<option value="${e.id}">${kx(e.name)}</option>`).join(``),qx.elements.parentId.disabled=!!i,qx.elements.name.value=e?.name||``,qx.elements.parentId.value=e?.parentId||t||$.rootOffice().id,Yx(e?.color||d[n.length%d.length]),Kx.returnValue=``,Kx.showModal()}Kx.addEventListener(`close`,()=>{if(Kx.returnValue!==`ok`)return;let e={...Jx||{id:u(`off`)},name:qx.elements.name.value.trim()||`Oficina`,color:qx.elements.color.value,parentId:Jx&&!Jx.parentId?null:qx.elements.parentId.value};$.upsertOffice(e),Hx({kind:`info`,text:`${Jx?`Oficina actualizada`:`Nueva oficina`}: ${e.name}`}),Wx({type:`office`,id:e.id},!0)});var Zx=Q(`#agentDialog`),Qx=Q(`#agentForm`),$x=null,eS=`claude`;function tS(){Q(`#providerPicker`).innerHTML=Object.entries(cd).map(([e,t])=>`<button type="button" data-p="${e}" class="${e===eS?`on`:``}" style="--c:${t.color}"><i style="background:${t.color}"></i>${t.short}</button>`).join(``);let e=$x?.provider===eS&&$x.config||{};Q(`#providerFields`).innerHTML=ld(eS).fields.map(t=>{let n=kx(e[t.key]??t.default??``),r=t.type===`textarea`?`<textarea name="cfg_${t.key}" rows="2" placeholder="${kx(t.placeholder)}">${n}</textarea>`:t.type===`select`?`<select name="cfg_${t.key}">${t.options.map(n=>`<option ${n===(e[t.key]??t.default)?`selected`:``}>${n}</option>`).join(``)}</select>`:`<input name="cfg_${t.key}" type="${t.type}" placeholder="${kx(t.placeholder)}" value="${n}" autocomplete="off" />`;return`<label>${kx(t.label)} ${r}</label>`}).join(``)}Q(`#providerPicker`).addEventListener(`click`,e=>{let t=e.target.closest(`[data-p]`);t&&(eS=t.dataset.p,tS())});function nS(e,t){$x=e,eS=e?.provider||`claude`,Q(`#agentTitle`).textContent=e?`Editar agente`:`Nuevo agente`,Qx.elements.officeId.innerHTML=$.get().offices.map(e=>`<option value="${e.id}">${kx(e.name)}</option>`).join(``),Qx.elements.name.value=e?.name||``,Qx.elements.role.value=e?.role||``,Qx.elements.officeId.value=e?.officeId||t||(Ax?.type===`office`?Ax.id:$.rootOffice().id),tS(),Zx.returnValue=``,Zx.showModal()}Zx.addEventListener(`close`,()=>{if(Zx.returnValue!==`ok`)return;let e={};for(let t of ld(eS).fields){let n=Qx.elements[`cfg_${t.key}`]?.value.trim();n&&(e[t.key]=n)}let t={...$x||{id:u(`ag`)},name:Qx.elements.name.value.trim()||`Agente`,role:Qx.elements.role.value.trim(),officeId:Qx.elements.officeId.value,provider:eS,config:e};if($.upsertAgent(t),Hx({kind:`info`,text:`${$x?`Agente actualizado`:`Nuevo agente`}: ${t.name} (${ld(t.provider).label})`}),Wx({type:`agent`,id:t.id},!0),!$x){let e=$.agentsIn($.rootOffice().id)[0];e&&e.id!==t.id&&setTimeout(()=>Rx.sendTask(e.id,t.id,`Bienvenido al equipo, ${t.name} 👋`),600)}});var rS=Q(`#btnPlay`);rS.onclick=()=>{Rx.setRunning(!Rx.isRunning()),rS.textContent=Rx.isRunning()?`⏸ Auto`:`▶ Auto`},Q(`#speed`).onchange=e=>Rx.setSpeed(Number(e.target.value)),Q(`#btnAddOffice`).onclick=()=>Xx(null,Ax?.type===`office`?Ax.id:void 0),Q(`#btnAddAgent`).onclick=()=>nS(null),Q(`#btnClearFeed`).onclick=()=>Vx.innerHTML=``,Q(`#btnToggleSidebar`).onclick=()=>{let e=Q(`#sidebar`);window.matchMedia(`(max-width: 900px)`).matches?e.classList.toggle(`expanded`):e.classList.toggle(`collapsed`)};var iS=()=>Q(`.menu`).removeAttribute(`open`);Q(`#btnOverview`).onclick=()=>(iS(),Wx(null,!0),Lx.setAutoRotate(!0)),Q(`#btnExport`).onclick=()=>{iS();let e=new Blob([JSON.stringify($.get(),null,2)],{type:`application/json`}),t=URL.createObjectURL(e);Object.assign(document.createElement(`a`),{href:t,download:`3d-agents.json`}).click(),URL.revokeObjectURL(t)},Q(`#btnImport`).onclick=()=>(iS(),Q(`#importFile`).click()),Q(`#importFile`).onchange=async e=>{let t=e.target.files[0];if(t){try{let e=JSON.parse(await t.text());if(!Array.isArray(e.offices)||!Array.isArray(e.agents))throw Error(`Formato inválido`);$.set(e),Wx(null,!0),Hx({kind:`info`,text:`Importado: ${e.offices.length} oficinas, ${e.agents.length} agentes`})}catch(e){alert(`No se pudo importar: ${e.message}`)}e.target.value=``}},Q(`#btnReset`).onclick=()=>{iS(),confirm(`¿Restablecer la organización de ejemplo? Se perderán tus cambios.`)&&($.reset(),Wx(null,!0))};var aS=Q(`#cmdForm`),oS=Q(`#cmdInput`);function sS(){let e=Bx.settings(),t=Bx.isReady();Q(`#brainStatus`).innerHTML=t?`<span class="dot on"></span>${kx((hb[e.model]?.label||e.model).split(` · `)[0])} · $${zx.toFixed(4)}`:`<span class="dot"></span>Sin configurar`,oS.placeholder=t?`Dale un objetivo a tu equipo… ej. "Investiga el clima en CDMX y que Marketing escriba un post"`:`Configura el ⚙ Cerebro para dar órdenes reales a tu equipo`}aS.addEventListener(`submit`,async e=>{e.preventDefault();let t=oS.value.trim();if(t){if(!Bx.isReady())return uS();if(Bx.isBusy())return Hx({kind:`info`,text:`El cerebro sigue trabajando, espera a que termine.`});oS.value=``,Rx.setRunning(!1),rS.textContent=`▶ Auto`,aS.classList.add(`busy`),Lx.focus(null);try{await Bx.run(t)}catch(e){Hx({kind:`error`,from:`Cerebro`,to:`Tú`,text:e.message})}finally{aS.classList.remove(`busy`),Gx()}}});var cS=Q(`#brainDialog`),lS=Q(`#brainForm`);lS.elements.model.innerHTML=Object.entries(hb).map(([e,t])=>`<option value="${e}">${kx(t.label)} ($${t.input}/$${t.output} por millón de tokens)</option>`).join(``);function uS(){let e=Bx.settings();for(let t of[`apiKey`,`model`,`proxyUrl`,`proxyToken`,`maxSteps`])lS.elements[t].value=e[t]??``;cS.returnValue=``,cS.showModal()}cS.addEventListener(`close`,()=>{if(cS.returnValue!==`ok`)return;let e=lS.elements;Bx.setSettings({apiKey:e.apiKey.value.trim(),model:e.model.value,proxyUrl:e.proxyUrl.value.trim(),proxyToken:e.proxyToken.value.trim(),maxSteps:Math.min(20,Math.max(1,Number(e.maxSteps.value)||8))}),sS(),Gx(),Bx.isReady()&&(Rx.setRunning(!1),rS.textContent=`▶ Auto`,Hx({kind:`info`,text:`Cerebro configurado ✔ Escribe un objetivo en la barra inferior.`}))}),Q(`#btnBrain`).onclick=uS,Q(`#brainStatus`).onclick=uS,sS();var dS={ready:!1,quality:{score:0,approved:0,total:0}},fS=`summary`,pS=Q(`#dash`);Q(`#dashTitle`).textContent=`${t.client} · ${t.period}`;function mS(){if(pS.hidden)return;let e=Q(`#dashBody`);if(pS.querySelector(`[data-tab="findings"]`).hidden=!bS,bS){fS===`summary`&&bx(e,bS,{store:$}),fS===`findings`&&xx(e,bS),fS===`trace`&&Cx(e,{...bS,archivos:xS||bS.archivos},{store:$}),fS===`usage`&&wx(e,bS,{salud:SS});return}fS===`findings`&&(fS=`summary`),fS===`summary`&&Xb(e,{store:$,...dS}),fS===`trace`&&Zb(e,{rows:Ix.rows,decisions:Ix.decisions,store:$}),fS===`usage`&&Qb(e,{usage:jx,store:$})}function hS(e=fS){fS=e,pS.hidden=!1,pS.querySelectorAll(`[data-tab]`).forEach(e=>e.classList.toggle(`on`,e.dataset.tab===fS)),mS(),bS&&fS===`trace`&&MS()}pS.querySelector(`.tabs`).addEventListener(`click`,e=>{let t=e.target.closest(`[data-tab]`);t&&hS(t.dataset.tab)}),Q(`#btnDash`).onclick=()=>pS.hidden?hS():pS.hidden=!0;var gS=Q(`#validationDialog`);function _S(e){return Q(`#findings`).innerHTML=e.map(e=>`<label class="finding"><input type="checkbox" name="${e.id}" checked />
        <div><b>${kx(e.title)}</b><span>${kx(e.detail)}</span><em>Corrección: ${kx(e.fix)}</em></div></label>`).join(``),new Promise(t=>{gS.addEventListener(`close`,()=>t(Object.fromEntries(e.map(e=>[e.id,Q(`#validationForm`).elements[e.id].checked]))),{once:!0}),gS.showModal()})}var vS=Mb({store:$,world:Lx,log:Hx,bump:(e,t)=>Rx.bump(e,t),usage:Px,trace:Ix,setResult:Fx,askValidation:_S,onDone:({approved:e,total:t})=>{dS={ready:!0,quality:{score:99.8-(t-e)*.6,approved:e,total:t}},Hx({kind:`info`,text:`✔ Ciclo completado: ${e}/${t} correcciones validadas. Dashboard actualizado.`}),hS(`summary`)}});async function yS(){if(vS.isRunning())return Hx({kind:`info`,text:`El ciclo ya está en curso.`});bS=null,CS.stop(),Q(`#dashFoot`).textContent=`Datos de ejemplo para el MVP · no corresponden a información real de Treve.`,Q(`#intro`).hidden=!0,pS.hidden=!0,Rx.setRunning(!1),rS.textContent=`▶ Auto`,Wx(null,!1),Lx.focus(null),Q(`#btnCycle`).disabled=!0;try{await vS.run()}finally{Q(`#btnCycle`).disabled=!1}}Q(`#btnCycle`).onclick=kS;var bS=null,xS=null,SS=null,CS=cx({store:$,world:Lx,log:Hx,setResult:Fx,bump:(e,t)=>Rx.bump(e,t),nameOf:e=>e?e===`user`?`Tú`:e===`external`?`APIs externas`:e.startsWith(`src:`)?r.find(t=>`src:${t.id}`===e)?.name||e.slice(4):$.agent(e)?.name||e:``,onUpdate:e=>{bS=e,ES(e),mS()}}),wS={extraer:`Extracción`,mercado:`APIs públicas`,normalizar:`Normalización`,conciliar:`Conciliación`,juzgar:`Juicio`,almacenar:`Almacén`,indicadores:`Indicadores`,llenar_excel:`Reporte Excel`,conclusiones:`Conclusiones`,notificar:`Alertas`,cierre:`Cierre`},TS=null;function ES(e){let t=Q(`#progress`),n=e.tareas||[];if(!n.length)return;let r=n.filter(e=>[`hecha`,`error`,`cancelada`].includes(e.estado)).length,i=n.find(e=>e.estado===`en_curso`)||n.find(e=>e.estado===`pendiente`),a=e.corrida.estado;clearTimeout(TS),t.hidden=!1,Q(`#progressFill`).style.width=`${Math.round(r/n.length*100)}%`,Q(`#progressCount`).textContent=`${r}/${n.length}`,Q(`#progressLabel`).textContent=a===`en_revision`?`Esperando tu validación`:a===`terminada`?`Ciclo completado`:a===`error`?`Ciclo detenido`:`Paso: ${wS[i?.paso]||`preparando`}`,a!==`en_curso`&&(TS=setTimeout(()=>t.hidden=!0,9e3))}async function DS(){try{SS=await ix.salud();let e=SS.integraciones;return Q(`#engineStatus`).innerHTML=`<span class="state ok">✓ Orquestador en línea</span> Cerebro: ${e.openai?kx(e.openai):`plantillas`} · JEV: ${e.jev?`conectado`:`reglas fijas`} · APIs públicas: tipo de cambio y festivos`,!0}catch(e){return SS=null,Q(`#engineStatus`).innerHTML=`<span class="state warn">! Orquestador no disponible</span> ${kx(e.message)}. Puedes usar el modo Demo.`,Q(`#runForm`).elements.modo.value=`demo`,!1}}var OS=Q(`#runDialog`);async function kS(){if(vS.isRunning()||CS.current()?.state?.corrida?.estado===`en_curso`)return Hx({kind:`info`,text:`El ciclo ya está en curso.`});OS.returnValue=``,OS.showModal(),DS()}OS.addEventListener(`close`,()=>{if(OS.returnValue!==`ok`)return;let e=Q(`#runForm`).elements;if(e.modo.value===`demo`)return yS();AS({periodo:e.periodo.value||`2026-09`,version:Number(e.version.value),escenario:e.escenario.value})});async function AS(e){Q(`#intro`).hidden=!0,pS.hidden=!0,Rx.setRunning(!1),rS.textContent=`▶ Auto`,Wx(null,!1),Lx.focus(null),Ix.reset(),Mx.clear(),xS=null,Q(`#btnCycle`).disabled=!0,Q(`#dashTitle`).textContent=`${t.client} · ${e.periodo}`,Q(`#dashFoot`).textContent=`Datos ficticios del simulador · procesados por el orquestador real en Supabase.`,Hx({kind:`info`,text:`▶ Ciclo real · ${e.periodo} · Compaq v${e.version} · escenario ${e.escenario}`});try{let{done:t}=await CS.start(e);await jS(await t)}catch(e){Hx({kind:`error`,from:`Sistema`,to:`Tú`,text:`No se pudo completar el ciclo real: ${e.message}`})}finally{Q(`#btnCycle`).disabled=!1}}async function jS(e){if(!e)return;bS=e;let t=e=>pS.hidden?hS(e):mS();e.corrida.estado===`en_revision`?(t(`summary`),NS()):e.corrida.estado===`terminada`?(Hx({kind:`info`,text:`✔ Versión final publicada. Dashboard actualizado con datos validados.`}),t(`summary`)):t(`trace`)}async function MS(){if(bS)try{let e=await ix.estado(bS.corrida.id,2**53-1,!0);xS=e.archivos,bS={...bS,...e,eventos:[]},fS===`trace`&&mS()}catch{}}function NS(){let e=(bS?.hallazgos||[]).filter(e=>e.estado===`en_revision`);e.length&&(Q(`#findings`).innerHTML=e.map(e=>`<label class="finding"><input type="checkbox" name="${e.id}" checked />
        <div><b>${kx(e.tipo.replace(/_/g,` `))}${e.monto==null?``:` · $${Number(e.monto).toLocaleString(`es-MX`,{minimumFractionDigits:2,maximumFractionDigits:2})}`}</b><span>${kx(e.descripcion)}</span>
        <em>Decisión: ${e.decision?.fuente===`jev`?`JEV`:`reglas`} pide validación humana (${Math.round((e.decision?.confidence||0)*100)} %). Marcado = confirmar · sin marcar = descartar</em></div></label>`).join(``),gS.addEventListener(`close`,async()=>{let t=Q(`#validationForm`).elements;await PS(e.map(e=>[e.id,t[e.id].checked?`confirmado`:`descartado`]))},{once:!0}),gS.showModal())}async function PS(e){let t=null;for(let[n,r]of e)try{({pendientes:t}=await ix.resolver(n,r,`Validado desde el visualizador`))}catch(e){Hx({kind:`error`,from:`Sistema`,to:`Auditor de calidad`,text:e.message})}if(t===0){Q(`#btnCycle`).disabled=!0;try{await jS(await CS.resume())}finally{Q(`#btnCycle`).disabled=!1}}else if(bS){let e=await ix.estado(bS.corrida.id,2**53-1).catch(()=>null);e&&(bS={...bS,...e,eventos:[]}),mS()}}Q(`#dashBody`).addEventListener(`click`,e=>{let t=e.target.closest(`[data-resolver]`);t&&(t.disabled=!0,PS([[t.dataset.resolver,t.dataset.decision]])),e.target.closest(`[data-act="open-validation"]`)&&NS()}),document.addEventListener(`click`,e=>{let t=e.target.closest(`[data-act]`)?.dataset.act;t===`run-cycle`&&kS(),t===`close-intro`&&(Q(`#intro`).hidden=!0),t===`close-dash`&&(pS.hidden=!0)}),Ox({world:Lx,onChange:()=>mS()}),DS().then(e=>{let t=SS?.ultima;e&&t?.estado===`en_curso`&&Date.now()-Date.parse(t.created_at)<3e5&&(Hx({kind:`info`,text:`Hay un ciclo real en curso (${t.periodo}): te unes en vivo.`}),Q(`#intro`).hidden=!0,CS.follow(t.id).then(jS).catch(()=>{}))}),$.subscribe(e=>{Lx.rebuild(e,r),Ux(),Gx()}),Lx.rebuild($.get(),r),Ux(),Hx({kind:`info`,text:Bx.isReady()?`Cerebro listo 🧠 Ejecuta el ciclo de datos o pregúntale a la oficina en la barra inferior.`:`Bienvenido al MVP 👋 Ejecuta el ciclo de datos para ver a los agentes consolidar la información.`});var FS=performance.now();(function e(t){Rx.tick(Math.min((t-FS)/1e3,.1)),FS=t,requestAnimationFrame(e)})(FS);export{jg as n,J as r,Ag as t};