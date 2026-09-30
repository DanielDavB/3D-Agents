var e=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var t=`3d-agents:v1`,n=e=>`${e}_${Math.random().toString(36).slice(2,9)}`,r=[`#e8600c`,`#ffffff`,`#b8b8b8`,`#fde8dc`,`#757575`];function i(){let e={id:`off_hq`,name:`Oficina Principal`,parentId:null,color:`#ffffff`},t=[e,{id:`off_pm`,name:`Project Manager`,parentId:e.id,color:`#e8600c`},{id:`off_mkt`,name:`Marketing`,parentId:e.id,color:`#e8600c`},{id:`off_sales`,name:`Ventas`,parentId:e.id,color:`#e8600c`},{id:`off_support`,name:`Soporte`,parentId:e.id,color:`#e8600c`},{id:`off_dev`,name:`Desarrollo`,parentId:e.id,color:`#e8600c`},{id:`off_social`,name:`Redes Sociales`,parentId:`off_mkt`,color:`#b8b8b8`}],n=(e,t,n,r,i,a={})=>({id:e,name:t,role:n,officeId:r,provider:i,config:a,live:!1});return{theme:`naranja`,offices:t,agents:[n(`ag_ceo`,`Orquestador`,`Cerebro: entiende tu objetivo y reparte tareas`,e.id,`claude`),n(`ag_router`,`Router`,`Enruta eventos entrantes`,e.id,`n8n`),n(`ag_pm`,`PM Bot`,`Planifica sprints y entregables`,`off_pm`,`claude`),n(`ag_tracker`,`Tracker`,`Sincroniza tareas con Jira/Notion`,`off_pm`,`n8n`),n(`ag_copy`,`Copywriter`,`Redacta copies y campañas`,`off_mkt`,`claude`),n(`ag_analytics`,`Analytics`,`Mide campañas y KPIs`,`off_mkt`,`webhook`),n(`ag_sched`,`Scheduler`,`Programa publicaciones`,`off_social`,`n8n`),n(`ag_community`,`Community`,`Responde comentarios`,`off_social`,`make`),n(`ag_sdr`,`SDR`,`Califica leads y agenda demos`,`off_sales`,`claude`),n(`ag_crm`,`CRM Sync`,`Actualiza el CRM`,`off_sales`,`zapier`),n(`ag_help`,`Helpdesk`,`Contesta tickets de clientes`,`off_support`,`claude`),n(`ag_triage`,`Triage`,`Clasifica y prioriza tickets`,`off_support`,`openai`),n(`ag_review`,`Code Reviewer`,`Revisa pull requests`,`off_dev`,`claude`),n(`ag_ci`,`CI Bot`,`Lanza builds y despliegues`,`off_dev`,`webhook`)]}}function a(e){if(e={...e,agents:e.agents.map(e=>e.provider===`claude`&&e.config?.model&&![`claude-haiku-4-5`,`claude-sonnet-5-5`].includes(e.config.model)?{...e,config:{...e.config,model:void 0}}:e)},e.theme===`naranja`)return e;let t=new Map(e.offices.map(e=>[e.id,e])),n=(e,r=0)=>e.parentId&&t.has(e.parentId)&&r<20?n(t.get(e.parentId),r+1):r,r=[`#ffffff`,`#e8600c`,`#b8b8b8`];return{...e,theme:`naranja`,offices:e.offices.map(e=>({...e,color:r[Math.min(n(e),2)]}))}}function o(){try{let e=localStorage.getItem(t);if(e){let t=JSON.parse(e);if(Array.isArray(t.offices)&&Array.isArray(t.agents)&&t.offices.length)return a(t)}}catch{}return i()}function s(e){try{localStorage.setItem(t,JSON.stringify(e))}catch{}}function c(e){let t=e,n=new Set,r={get:()=>t,set(e){t=e,s(t),n.forEach(e=>e(t))},subscribe(e){return n.add(e),()=>n.delete(e)},rootOffice:()=>t.offices.find(e=>!e.parentId)||t.offices[0],office:e=>t.offices.find(t=>t.id===e),agent:e=>t.agents.find(t=>t.id===e),agentsIn:e=>t.agents.filter(t=>t.officeId===e),children:e=>t.offices.filter(t=>t.parentId===e),upsertOffice(e){let n=t.offices.some(t=>t.id===e.id);r.set({...t,offices:n?t.offices.map(t=>t.id===e.id?e:t):[...t.offices,e]})},removeOffice(e){if(e===r.rootOffice().id)return;let n=r.office(e);r.set({...t,offices:t.offices.filter(t=>t.id!==e).map(t=>t.parentId===e?{...t,parentId:n.parentId}:t),agents:t.agents.map(t=>t.officeId===e?{...t,officeId:n.parentId}:t)})},upsertAgent(e){let n=t.agents.some(t=>t.id===e.id);r.set({...t,agents:n?t.agents.map(t=>t.id===e.id?e:t):[...t.agents,e]})},removeAgent(e){r.set({...t,agents:t.agents.filter(t=>t.id!==e)})},reset(){r.set(i())}};return r}var l={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},u={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},d=1e3,f=1001,p=1002,m=1003,h=1004,g=1005,_=1006,v=1007,y=1008,b=1009,x=1010,S=1011,C=1012,w=1013,T=1014,E=1015,D=1016,O=1017,ee=1018,te=1020,k=35902,ne=35899,A=1021,re=1022,j=1023,ie=1026,ae=1027,oe=1028,se=1029,ce=1030,le=1031,ue=1033,de=33776,M=33777,fe=33778,pe=33779,me=35840,he=35841,ge=35842,_e=35843,ve=36196,ye=37492,be=37496,xe=37488,Se=37489,Ce=37490,we=37491,Te=37808,Ee=37809,De=37810,Oe=37811,ke=37812,Ae=37813,je=37814,Me=37815,Ne=37816,Pe=37817,Fe=37818,N=37819,Ie=37820,Le=37821,Re=36492,P=36494,ze=36495,F=36283,I=36284,Be=36285,Ve=36286,He=2300,Ue=2301,We=2302,Ge=2303,Ke=2400,qe=2401,Je=2402,Ye=3200,Xe=`srgb`,Ze=`srgb-linear`,Qe=`linear`,$e=`srgb`,et=7680,tt=35044,nt=2e3;function rt(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function it(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function at(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function ot(){let e=at(`canvas`);return e.style.display=`block`,e}var st={};function ct(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function lt(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function L(...e){e=lt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function R(...e){e=lt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function ut(...e){let t=e.join(` `);t in st||(st[t]=!0,L(...e))}function dt(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var ft={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},pt=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},mt=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),ht=1234567,gt=Math.PI/180,_t=180/Math.PI;function vt(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(mt[e&255]+mt[e>>8&255]+mt[e>>16&255]+mt[e>>24&255]+`-`+mt[t&255]+mt[t>>8&255]+`-`+mt[t>>16&15|64]+mt[t>>24&255]+`-`+mt[n&63|128]+mt[n>>8&255]+`-`+mt[n>>16&255]+mt[n>>24&255]+mt[r&255]+mt[r>>8&255]+mt[r>>16&255]+mt[r>>24&255]).toLowerCase()}function z(e,t,n){return Math.max(t,Math.min(n,e))}function yt(e,t){return(e%t+t)%t}function bt(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function xt(e,t,n){return e===t?0:(n-e)/(t-e)}function St(e,t,n){return(1-n)*e+n*t}function Ct(e,t,n,r){return St(e,t,1-Math.exp(-n*r))}function wt(e,t=1){return t-Math.abs(yt(e,t*2)-t)}function Tt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function Et(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function Dt(e,t){return e+Math.floor(Math.random()*(t-e+1))}function Ot(e,t){return e+Math.random()*(t-e)}function kt(e){return e*(.5-Math.random())}function At(e){e!==void 0&&(ht=e);let t=ht+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function jt(e){return e*gt}function Mt(e){return e*_t}function Nt(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function Pt(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function Ft(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function It(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:L(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function Lt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function Rt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var zt={DEG2RAD:gt,RAD2DEG:_t,generateUUID:vt,clamp:z,euclideanModulo:yt,mapLinear:bt,inverseLerp:xt,lerp:St,damp:Ct,pingpong:wt,smoothstep:Tt,smootherstep:Et,randInt:Dt,randFloat:Ot,randFloatSpread:kt,seededRandom:At,degToRad:jt,radToDeg:Mt,isPowerOfTwo:Nt,ceilPowerOfTwo:Pt,floorPowerOfTwo:Ft,setQuaternionFromProperEuler:It,normalize:Rt,denormalize:Lt},B=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=z(this.x,e.x,t.x),this.y=z(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=z(this.x,e,t),this.y=z(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(z(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(z(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Bt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:L(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(z(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},V=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ht.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ht.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=z(this.x,e.x,t.x),this.y=z(this.y,e.y,t.y),this.z=z(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=z(this.x,e,t),this.y=z(this.y,e,t),this.z=z(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(z(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Vt.copy(this).projectOnVector(e),this.sub(Vt)}reflect(e){return this.sub(Vt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(z(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Vt=new V,Ht=new Bt,H=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return ut(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(Ut.makeScale(e,t)),this}rotate(e){return ut(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(Ut.makeRotation(-e)),this}translate(e,t){return ut(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(Ut.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ut=new H,Wt=new H().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gt=new H().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Kt(){let e={enabled:!0,workingColorSpace:Ze,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=Jt(e.r),e.g=Jt(e.g),e.b=Jt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Yt(e.r),e.g=Yt(e.g),e.b=Yt(e.b)),e)},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Qe:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return ut(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return ut(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Ze]:{primaries:t,whitePoint:r,transfer:Qe,toXYZ:Wt,fromXYZ:Gt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Xe},outputColorSpaceConfig:{drawingBufferColorSpace:Xe}},[Xe]:{primaries:t,whitePoint:r,transfer:$e,toXYZ:Wt,fromXYZ:Gt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Xe}}}),e}var qt=Kt();function Jt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Yt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Xt,Zt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Xt===void 0&&(Xt=at(`canvas`)),Xt.width=e.width,Xt.height=e.height;let t=Xt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Xt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=at(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Jt(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Jt(t[e]/255)*255):t[e]=Jt(t[e]);return{data:t,width:e.width,height:e.height}}return L(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Qt=0,$t=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Qt++}),this.uuid=vt(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(en(r[t].image)):e.push(en(r[t]))}else e=en(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function en(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Zt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(L(`Texture: Unable to serialize Texture.`),{})}var tn=0,nn=new V,rn=class e extends pt{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=f,i=f,a=_,o=y,s=j,c=b,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tn++}),this.uuid=vt(),this.name=``,this.source=new $t(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new B(0,0),this.repeat=new B(1,1),this.center=new B(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new H,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(nn).x}get height(){return this.source.getSize(nn).y}get depth(){return this.source.getSize(nn).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){L(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){L(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case d:e.x-=Math.floor(e.x);break;case f:e.x=e.x<0?0:1;break;case p:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case d:e.y-=Math.floor(e.y);break;case f:e.y=e.y<0?0:1;break;case p:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};rn.DEFAULT_IMAGE=null,rn.DEFAULT_MAPPING=300,rn.DEFAULT_ANISOTROPY=1;var an=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=z(this.x,e.x,t.x),this.y=z(this.y,e.y,t.y),this.z=z(this.z,e.z,t.z),this.w=z(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=z(this.x,e,t),this.y=z(this.y,e,t),this.z=z(this.z,e,t),this.w=z(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(z(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},on=class extends pt{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new an(0,0,e,t),this.scissorTest=!1,this.viewport=new an(0,0,e,t),this.textures=[];let r=new rn({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:_,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new $t(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},sn=class extends on{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},cn=class extends rn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=m,this.minFilter=m,this.wrapR=f,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},ln=class extends rn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=m,this.minFilter=m,this.wrapR=f,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},un=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/dn.setFromMatrixColumn(e,0).length(),i=1/dn.setFromMatrixColumn(e,1).length(),a=1/dn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pn,e,mn)}lookAt(e,t,n){let r=this.elements;return _n.subVectors(e,t),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),hn.crossVectors(n,_n),hn.lengthSq()===0&&(Math.abs(n.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),hn.crossVectors(n,_n)),hn.normalize(),gn.crossVectors(_n,hn),r[0]=hn.x,r[4]=gn.x,r[8]=_n.x,r[1]=hn.y,r[5]=gn.y,r[9]=_n.y,r[2]=hn.z,r[6]=gn.z,r[10]=_n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],ee=r[2],te=r[6],k=r[10],ne=r[14],A=r[3],re=r[7],j=r[11],ie=r[15];return i[0]=a*x+o*T+s*ee+c*A,i[4]=a*S+o*E+s*te+c*re,i[8]=a*C+o*D+s*k+c*j,i[12]=a*w+o*O+s*ne+c*ie,i[1]=l*x+u*T+d*ee+f*A,i[5]=l*S+u*E+d*te+f*re,i[9]=l*C+u*D+d*k+f*j,i[13]=l*w+u*O+d*ne+f*ie,i[2]=p*x+m*T+h*ee+g*A,i[6]=p*S+m*E+h*te+g*re,i[10]=p*C+m*D+h*k+g*j,i[14]=p*w+m*O+h*ne+g*ie,i[3]=_*x+v*T+y*ee+b*A,i[7]=_*S+v*E+y*te+b*re,i[11]=_*C+v*D+y*k+b*j,i[15]=_*w+v*O+y*ne+b*ie,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,ee=_*O-v*D+y*E+b*T-x*w+S*C;if(ee===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let te=1/ee;return e[0]=(o*O-s*D+c*E)*te,e[1]=(r*D-n*O-i*E)*te,e[2]=(m*S-h*x+g*b)*te,e[3]=(d*x-u*S-f*b)*te,e[4]=(s*T-a*O-c*w)*te,e[5]=(t*O-r*T+i*w)*te,e[6]=(h*y-p*S-g*v)*te,e[7]=(l*S-d*y+f*v)*te,e[8]=(a*D-o*T+c*C)*te,e[9]=(n*T-t*D-i*C)*te,e[10]=(p*x-m*y+g*_)*te,e[11]=(u*y-l*x-f*_)*te,e[12]=(o*w-a*E-s*C)*te,e[13]=(t*E-n*w+r*C)*te,e[14]=(m*v-p*b-h*_)*te,e[15]=(l*b-u*v+d*_)*te,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=dn.set(r[0],r[1],r[2]).length(),o=dn.set(r[4],r[5],r[6]).length(),s=dn.set(r[8],r[9],r[10]).length();i<0&&(a=-a),fn.copy(this);let c=1/a,l=1/o,u=1/s;return fn.elements[0]*=c,fn.elements[1]*=c,fn.elements[2]*=c,fn.elements[4]*=l,fn.elements[5]*=l,fn.elements[6]*=l,fn.elements[8]*=u,fn.elements[9]*=u,fn.elements[10]*=u,t.setFromRotationMatrix(fn),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=nt,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=nt,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},dn=new V,fn=new un,pn=new V(0,0,0),mn=new V(1,1,1),hn=new V,gn=new V,_n=new V,vn=new un,yn=new Bt,bn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(z(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-z(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(z(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-z(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(z(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-z(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:L(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return vn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return yn.setFromEuler(this),this.setFromQuaternion(yn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};bn.DEFAULT_ORDER=`XYZ`;var xn=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&(1<<e|0))}},Sn=0,Cn=new V,wn=new Bt,Tn=new un,En=new V,Dn=new V,On=new V,kn=new Bt,An=new V(1,0,0),jn=new V(0,1,0),Mn=new V(0,0,1),Nn={type:`added`},Pn={type:`removed`},Fn={type:`childadded`,child:null},In={type:`childremoved`,child:null},Ln=class e extends pt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sn++}),this.uuid=vt(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new V,n=new bn,r=new Bt,i=new V(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new un},normalMatrix:{value:new H}}),this.matrix=new un,this.matrixWorld=new un,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wn.setFromAxisAngle(e,t),this.quaternion.multiply(wn),this}rotateOnWorldAxis(e,t){return wn.setFromAxisAngle(e,t),this.quaternion.premultiply(wn),this}rotateX(e){return this.rotateOnAxis(An,e)}rotateY(e){return this.rotateOnAxis(jn,e)}rotateZ(e){return this.rotateOnAxis(Mn,e)}translateOnAxis(e,t){return Cn.copy(e).applyQuaternion(this.quaternion),this.position.add(Cn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(An,e)}translateY(e){return this.translateOnAxis(jn,e)}translateZ(e){return this.translateOnAxis(Mn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Tn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?En.copy(e):En.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Dn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tn.lookAt(Dn,En,this.up):Tn.lookAt(En,Dn,this.up),this.quaternion.setFromRotationMatrix(Tn),r&&(Tn.extractRotation(r.matrixWorld),wn.setFromRotationMatrix(Tn),this.quaternion.premultiply(wn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(R(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Nn),Fn.child=e,this.dispatchEvent(Fn),Fn.child=null):R(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Pn),In.child=e,this.dispatchEvent(In),In.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Tn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Tn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Tn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Nn),Fn.child=e,this.dispatchEvent(Fn),Fn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dn,e,On),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dn,kn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};Ln.DEFAULT_UP=new V(0,1,0),Ln.DEFAULT_MATRIX_AUTO_UPDATE=!0,Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Rn=class extends Ln{constructor(){super(),this.isGroup=!0,this.type=`Group`}},zn={type:`move`},Bn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(zn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Rn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Vn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hn={h:0,s:0,l:0},Un={h:0,s:0,l:0};function Wn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var U=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xe){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=qt.workingColorSpace){return this.r=e,this.g=t,this.b=n,qt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=qt.workingColorSpace){if(e=yt(e,1),t=z(t,0,1),n=z(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Wn(i,r,e+1/3),this.g=Wn(i,r,e),this.b=Wn(i,r,e-1/3)}return qt.colorSpaceToWorking(this,r),this}setStyle(e,t=Xe){function n(t){t!==void 0&&parseFloat(t)<1&&L(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:L(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);L(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xe){let n=Vn[e.toLowerCase()];return n===void 0?L(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Jt(e.r),this.g=Jt(e.g),this.b=Jt(e.b),this}copyLinearToSRGB(e){return this.r=Yt(e.r),this.g=Yt(e.g),this.b=Yt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xe){return qt.workingToColorSpace(Gn.copy(this),e),Math.round(z(Gn.r*255,0,255))*65536+Math.round(z(Gn.g*255,0,255))*256+Math.round(z(Gn.b*255,0,255))}getHexString(e=Xe){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qt.workingColorSpace){qt.workingToColorSpace(Gn.copy(this),t);let n=Gn.r,r=Gn.g,i=Gn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=qt.workingColorSpace){return qt.workingToColorSpace(Gn.copy(this),t),e.r=Gn.r,e.g=Gn.g,e.b=Gn.b,e}getStyle(e=Xe){qt.workingToColorSpace(Gn.copy(this),e);let t=Gn.r,n=Gn.g,r=Gn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Hn),this.setHSL(Hn.h+e,Hn.s+t,Hn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Hn),e.getHSL(Un);let n=St(Hn.h,Un.h,t),r=St(Hn.s,Un.s,t),i=St(Hn.l,Un.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Gn=new U;U.NAMES=Vn;var Kn=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new U(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},qn=class extends Ln{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bn,this.environmentIntensity=1,this.environmentRotation=new bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Jn=new V,Yn=new V,Xn=new V,Zn=new V,Qn=new V,$n=new V,er=new V,tr=new V,nr=new V,rr=new V,ir=new an,ar=new an,or=new an,sr=class e{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Jn.subVectors(e,t),r.cross(Jn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Jn.subVectors(r,t),Yn.subVectors(n,t),Xn.subVectors(e,t);let a=Jn.dot(Jn),o=Jn.dot(Yn),s=Jn.dot(Xn),c=Yn.dot(Yn),l=Yn.dot(Xn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Zn)!==null&&Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Zn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Zn.x),s.addScaledVector(a,Zn.y),s.addScaledVector(o,Zn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return ir.setScalar(0),ar.setScalar(0),or.setScalar(0),ir.fromBufferAttribute(e,t),ar.fromBufferAttribute(e,n),or.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(ir,i.x),a.addScaledVector(ar,i.y),a.addScaledVector(or,i.z),a}static isFrontFacing(e,t,n,r){return Jn.subVectors(n,t),Yn.subVectors(e,t),Jn.cross(Yn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jn.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),Jn.cross(Yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Qn.subVectors(r,n),$n.subVectors(i,n),tr.subVectors(e,n);let s=Qn.dot(tr),c=$n.dot(tr);if(s<=0&&c<=0)return t.copy(n);nr.subVectors(e,r);let l=Qn.dot(nr),u=$n.dot(nr);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Qn,a);rr.subVectors(e,i);let f=Qn.dot(rr),p=$n.dot(rr);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector($n,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return er.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(er,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Qn,a).addScaledVector($n,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},cr=class{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ur.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ur.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ur.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,ur):ur.fromBufferAttribute(r,t),ur.applyMatrix4(e.matrixWorld),this.expandByPoint(ur);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),dr.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),dr.copy(e.boundingBox)),dr.applyMatrix4(e.matrixWorld),this.union(dr)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ur),ur.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vr),yr.subVectors(this.max,vr),fr.subVectors(e.a,vr),pr.subVectors(e.b,vr),mr.subVectors(e.c,vr),hr.subVectors(pr,fr),gr.subVectors(mr,pr),_r.subVectors(fr,mr);let t=[0,-hr.z,hr.y,0,-gr.z,gr.y,0,-_r.z,_r.y,hr.z,0,-hr.x,gr.z,0,-gr.x,_r.z,0,-_r.x,-hr.y,hr.x,0,-gr.y,gr.x,0,-_r.y,_r.x,0];return!Sr(t,fr,pr,mr,yr)||(t=[1,0,0,0,1,0,0,0,1],!Sr(t,fr,pr,mr,yr))?!1:(br.crossVectors(hr,gr),t=[br.x,br.y,br.z],Sr(t,fr,pr,mr,yr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ur).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ur).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(lr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),lr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),lr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),lr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),lr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),lr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),lr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),lr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(lr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},lr=[new V,new V,new V,new V,new V,new V,new V,new V],ur=new V,dr=new cr,fr=new V,pr=new V,mr=new V,hr=new V,gr=new V,_r=new V,vr=new V,yr=new V,br=new V,xr=new V;function Sr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){xr.fromArray(e,a);let o=i.x*Math.abs(xr.x)+i.y*Math.abs(xr.y)+i.z*Math.abs(xr.z),s=t.dot(xr),c=n.dot(xr),l=r.dot(xr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Cr=new V,wr=new B,Tr=0,Er=class extends pt{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Tr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=tt,this.updateRanges=[],this.gpuType=E,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)wr.fromBufferAttribute(this,t),wr.applyMatrix3(e),this.setXY(t,wr.x,wr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Cr.fromBufferAttribute(this,t),Cr.applyMatrix3(e),this.setXYZ(t,Cr.x,Cr.y,Cr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Cr.fromBufferAttribute(this,t),Cr.applyMatrix4(e),this.setXYZ(t,Cr.x,Cr.y,Cr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Cr.fromBufferAttribute(this,t),Cr.applyNormalMatrix(e),this.setXYZ(t,Cr.x,Cr.y,Cr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Cr.fromBufferAttribute(this,t),Cr.transformDirection(e),this.setXYZ(t,Cr.x,Cr.y,Cr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Lt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Rt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Lt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Lt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Lt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Lt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),r=Rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),r=Rt(r,this.array),i=Rt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},Dr=class extends Er{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Or=class extends Er{constructor(e,t,n){super(new Uint32Array(e),t,n)}},W=class extends Er{constructor(e,t,n){super(new Float32Array(e),t,n)}},kr=new cr,Ar=new V,jr=new V,Mr=class{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?kr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ar.subVectors(e,this.center);let t=Ar.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Ar,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ar.copy(e.center).add(jr)),this.expandByPoint(Ar.copy(e.center).sub(jr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Nr=0,Pr=new un,Fr=new Ln,Ir=new V,Lr=new cr,Rr=new cr,zr=new V,Br=class e extends pt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nr++}),this.uuid=vt(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(rt(e)?Or:Dr)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new H().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Pr.makeRotationFromQuaternion(e),this.applyMatrix4(Pr),this}rotateX(e){return Pr.makeRotationX(e),this.applyMatrix4(Pr),this}rotateY(e){return Pr.makeRotationY(e),this.applyMatrix4(Pr),this}rotateZ(e){return Pr.makeRotationZ(e),this.applyMatrix4(Pr),this}translate(e,t,n){return Pr.makeTranslation(e,t,n),this.applyMatrix4(Pr),this}scale(e,t,n){return Pr.makeScale(e,t,n),this.applyMatrix4(Pr),this}lookAt(e){return Fr.lookAt(e),Fr.updateMatrix(),this.applyMatrix4(Fr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ir).negate(),this.translate(Ir.x,Ir.y,Ir.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new W(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&L(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){R(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Lr.setFromBufferAttribute(n),this.morphTargetsRelative?(zr.addVectors(this.boundingBox.min,Lr.min),this.boundingBox.expandByPoint(zr),zr.addVectors(this.boundingBox.max,Lr.max),this.boundingBox.expandByPoint(zr)):(this.boundingBox.expandByPoint(Lr.min),this.boundingBox.expandByPoint(Lr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&R(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){R(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new V,1/0);return}if(e){let n=this.boundingSphere.center;if(Lr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Rr.setFromBufferAttribute(n),this.morphTargetsRelative?(zr.addVectors(Lr.min,Rr.min),Lr.expandByPoint(zr),zr.addVectors(Lr.max,Rr.max),Lr.expandByPoint(zr)):(Lr.expandByPoint(Rr.min),Lr.expandByPoint(Rr.max))}Lr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)zr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(zr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)zr.fromBufferAttribute(a,t),o&&(Ir.fromBufferAttribute(e,t),zr.add(Ir)),r=Math.max(r,n.distanceToSquared(zr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&R(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){R(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new Er(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new V,s[e]=new V;let c=new V,l=new V,u=new V,d=new B,f=new B,p=new B,m=new V,h=new V;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new V,y=new V,b=new V,x=new V;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new Er(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new V,i=new V,a=new V,o=new V,s=new V,c=new V,l=new V,u=new V;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)zr.fromBufferAttribute(e,t),zr.normalize(),e.setXYZ(t,zr.x,zr.y,zr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new Er(a,r,i)}if(this.index===null)return L(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Vr=new V,Hr=new V,Ur=new H,Wr=class{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Vr.subVectors(n,t).cross(Hr.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Vr),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Ur.getNormalMatrix(e),r=this.coplanarPoint(Vr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Gr=0,Kr=class extends pt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gr++}),this.uuid=vt(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new U(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=et,this.stencilZFail=et,this.stencilZPass=et,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){L(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){L(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new U().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Wr().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new B().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new B().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},qr=new V,Jr=new V,Yr=new V,Xr=new V,Zr=class{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=qr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qr.copy(this.origin).addScaledVector(this.direction,t),qr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Jr.copy(e).add(t).multiplyScalar(.5),Yr.copy(t).sub(e).normalize(),Xr.copy(this.origin).sub(Jr);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Yr),o=Xr.dot(this.direction),s=-Xr.dot(Yr),c=Xr.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Jr).addScaledVector(Yr,d),f}intersectSphere(e,t){if(e.radius<0)return null;qr.subVectors(e.center,this.origin);let n=qr.dot(this.direction),r=qr.dot(qr)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,qr)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,ee,te,k,ne,A;if(y>=b&&y>=x?(w=s,D=u,te=p,A=g,s>=0?(S=c,C=l,T=d,E=f,O=m,ee=h,k=_,ne=v):(S=l,C=c,T=f,E=d,O=h,ee=m,k=v,ne=_)):b>=x?(w=c,D=d,te=m,A=_,c>=0?(S=l,C=s,T=f,E=u,O=h,ee=p,k=v,ne=g):(S=s,C=l,T=u,E=f,O=p,ee=h,k=g,ne=v)):(w=l,D=f,te=h,A=v,l>=0?(S=s,C=c,T=u,E=d,O=p,ee=m,k=g,ne=_):(S=c,C=s,T=d,E=u,O=m,ee=p,k=_,ne=g)),w===0)return null;let re=S/w,j=C/w,ie=1/w,ae=T-re*D,oe=E-j*D,se=O-re*te,ce=ee-j*te,le=k-re*A,ue=ne-j*A,de=le*ce-ue*se,M=ae*ue-oe*le,fe=se*oe-ce*ae;if(r){if(de<0||M<0||fe<0)return null}else if((de<0||M<0||fe<0)&&(de>0||M>0||fe>0))return null;let pe=de+M+fe;if(pe===0)return null;let me=ie*(de*D+M*te+fe*A);return(pe>0?me<0:me>0)?null:this.at(me/pe,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Qr=class extends Kr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new U(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},$r=new un,ei=new Zr,ti=new Mr,ni=new V,ri=new V,ii=new V,ai=new V,oi=new V,si=new V,ci=new V,li=new V,ui=class extends Ln{constructor(e=new Br,t=new Qr){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){si.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(oi.fromBufferAttribute(s,e),a?si.addScaledVector(oi,r):si.addScaledVector(oi.sub(t),r))}t.add(si)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ti.copy(n.boundingSphere),ti.applyMatrix4(i),ei.copy(e.ray).recast(e.near),!(ti.containsPoint(ei.origin)===!1&&(ei.intersectSphere(ti,ni)===null||ei.origin.distanceToSquared(ni)>(e.far-e.near)**2))&&($r.copy(i).invert(),ei.copy(e.ray).applyMatrix4($r),(n.boundingBox===null||ei.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,ei)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=fi(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=fi(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=fi(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=fi(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function di(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;li.copy(s),li.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(li);return l<n.near||l>n.far?null:{distance:l,point:li.clone(),object:e}}function fi(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,ri),e.getVertexPosition(c,ii),e.getVertexPosition(l,ai);let u=di(e,t,n,r,ri,ii,ai,ci);if(u){let e=new V;sr.getBarycoord(ci,ri,ii,ai,e),i&&(u.uv=sr.getInterpolatedAttribute(i,s,c,l,e,new B)),a&&(u.uv1=sr.getInterpolatedAttribute(a,s,c,l,e,new B)),o&&(u.normal=sr.getInterpolatedAttribute(o,s,c,l,e,new V),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new V,materialIndex:0};sr.getNormal(ri,ii,ai,t.normal),u.face=t,u.barycoord=e}return u}var pi=class extends rn{constructor(e=null,t=1,n=1,r,i,a,o,s,c=m,l=m,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},mi=new Mr,hi=new B(.5,.5),gi=new V,_i=class{constructor(e=new Wr,t=new Wr,n=new Wr,r=new Wr,i=new Wr,a=new Wr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=nt,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),mi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),mi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(mi)}intersectsSprite(e){return mi.center.set(0,0,0),mi.radius=.7071067811865476+hi.distanceTo(e.center),mi.applyMatrix4(e.matrixWorld),this.intersectsSphere(mi)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(gi.x=r.normal.x>0?e.max.x:e.min.x,gi.y=r.normal.y>0?e.max.y:e.min.y,gi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(gi)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},vi=class extends Kr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new U(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},yi=new V,bi=new V,xi=new un,Si=new Zr,Ci=new Mr,wi=new V,Ti=new V,Ei=class extends Ln{constructor(e=new Br,t=new vi){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)yi.fromBufferAttribute(t,e-1),bi.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=yi.distanceTo(bi);e.setAttribute(`lineDistance`,new W(n,1))}else L(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ci.copy(n.boundingSphere),Ci.applyMatrix4(r),Ci.radius+=i,e.ray.intersectsSphere(Ci)===!1)return;xi.copy(r).invert(),Si.copy(e.ray).applyMatrix4(xi);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=Di(this,e,Si,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=Di(this,e,Si,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=Di(this,e,Si,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=Di(this,e,Si,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Di(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(yi.fromBufferAttribute(s,i),bi.fromBufferAttribute(s,a),n.distanceSqToSegment(yi,bi,wi,Ti)>r)return;wi.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(wi);if(!(c<t.near||c>t.far))return{distance:c,point:Ti.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var Oi=new V,ki=new V,Ai=class extends Ei{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)Oi.fromBufferAttribute(t,e),ki.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+Oi.distanceTo(ki);e.setAttribute(`lineDistance`,new W(n,1))}else L(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},ji=class extends rn{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Mi=class extends rn{constructor(e,t,n=T,r,i,a,o=m,s=m,c,l=ie,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new $t(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Ni=class extends Mi{constructor(e,t=T,n=301,r,i,a=m,o=m,s,c=ie){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Pi=class extends rn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Fi=class e extends Br{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new W(c,3)),this.setAttribute(`normal`,new W(l,3)),this.setAttribute(`uv`,new W(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new V;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Ii=class e extends Br{constructor(e=1,t=1,n=4,r=8,i=1){super(),this.type=`CapsuleGeometry`,this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:i},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),i=Math.max(1,Math.floor(i));let a=[],o=[],s=[],c=[],l=t/2,u=Math.PI/2*e,d=t,f=2*u+d,p=n*2+i,m=r+1,h=new V,g=new V;for(let _=0;_<=p;_++){let v=0,y=0,b=0,x=0;if(_<=n){let t=_/n,r=t*Math.PI/2;y=-l-e*Math.cos(r),b=e*Math.sin(r),x=-e*Math.cos(r),v=t*u}else if(_<=n+i){let r=(_-n)/i;y=-l+r*t,b=e,x=0,v=u+r*d}else{let t=(_-n-i)/n,r=t*Math.PI/2;y=l+e*Math.sin(r),b=e*Math.cos(r),x=e*Math.sin(r),v=u+d+t*u}let S=Math.max(0,Math.min(1,v/f)),C=0;_===0?C=.5/r:_===p&&(C=-.5/r);for(let e=0;e<=r;e++){let t=e/r,n=t*Math.PI*2,i=Math.sin(n),a=Math.cos(n);g.x=-b*a,g.y=y,g.z=b*i,o.push(g.x,g.y,g.z),h.set(-b*a,x,b*i),h.normalize(),s.push(h.x,h.y,h.z),c.push(t+C,S)}if(_>0){let e=(_-1)*m;for(let t=0;t<r;t++){let n=e+t,r=e+t+1,i=_*m+t,o=_*m+t+1;a.push(n,r,i),a.push(r,o,i)}}}this.setIndex(a),this.setAttribute(`position`,new W(o,3)),this.setAttribute(`normal`,new W(s,3)),this.setAttribute(`uv`,new W(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Li=class e extends Br{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new V,l=new B;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new W(a,3)),this.setAttribute(`normal`,new W(o,3)),this.setAttribute(`uv`,new W(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ri=class e extends Br{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new W(u,3)),this.setAttribute(`normal`,new W(d,3)),this.setAttribute(`uv`,new W(f,2));function _(){let a=new V,_=new V,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new B,m=new V,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},zi=class e extends Br{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new W(i,3)),this.setAttribute(`normal`,new W(i.slice(),3)),this.setAttribute(`uv`,new W(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new V,r=new V,i=new V;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new V;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new V;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new V,t=new V,n=new V,r=new V,o=new B,s=new B,c=new B;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},Bi=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){L(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new B:new V);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new V,r=[],i=[],a=[],o=new V,s=new un;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new V)}i[0]=new V,a[0]=new V;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(z(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(z(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Vi=class extends Bi{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new B){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Hi=class extends Vi{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function Ui(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var Wi=new V,Gi=new V,Ki=new Ui,qi=new Ui,Ji=new Ui,Yi=class extends Bi{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new V){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(Gi.subVectors(r[0],r[1]).add(r[0]),c=Gi);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(Wi.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=Wi),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),Ki.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),qi.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),Ji.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(Ki.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),qi.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),Ji.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(Ki.calc(s),qi.calc(s),Ji.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new V().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Xi(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function Zi(e,t){let n=1-e;return n*n*t}function Qi(e,t){return 2*(1-e)*e*t}function $i(e,t){return e*e*t}function ea(e,t,n,r){return Zi(e,t)+Qi(e,n)+$i(e,r)}function ta(e,t){let n=1-e;return n*n*n*t}function na(e,t){let n=1-e;return 3*n*n*e*t}function ra(e,t){return 3*(1-e)*e*e*t}function ia(e,t){return e*e*e*t}function aa(e,t,n,r,i){return ta(e,t)+na(e,n)+ra(e,r)+ia(e,i)}var oa=class extends Bi{constructor(e=new B,t=new B,n=new B,r=new B){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new B){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(aa(e,r.x,i.x,a.x,o.x),aa(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},sa=class extends Bi{constructor(e=new V,t=new V,n=new V,r=new V){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new V){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(aa(e,r.x,i.x,a.x,o.x),aa(e,r.y,i.y,a.y,o.y),aa(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ca=class extends Bi{constructor(e=new B,t=new B){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new B){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new B){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},la=class extends Bi{constructor(e=new V,t=new V){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new V){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new V){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ua=class extends Bi{constructor(e=new B,t=new B,n=new B){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new B){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(ea(e,r.x,i.x,a.x),ea(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},da=class extends Bi{constructor(e=new V,t=new V,n=new V){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new V){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(ea(e,r.x,i.x,a.x),ea(e,r.y,i.y,a.y),ea(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},fa=Object.freeze({__proto__:null,ArcCurve:Hi,CatmullRomCurve3:Yi,CubicBezierCurve:oa,CubicBezierCurve3:sa,EllipseCurve:Vi,LineCurve:ca,LineCurve3:la,QuadraticBezierCurve:ua,QuadraticBezierCurve3:da,SplineCurve:class extends Bi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new B){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(Xi(o,s.x,c.x,l.x,u.x),Xi(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new B().fromArray(n))}return this}}}),pa=class e extends zi{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},ma=class e extends zi{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type=`OctahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},ha=class e extends Br{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new W(p,3)),this.setAttribute(`normal`,new W(m,3)),this.setAttribute(`uv`,new W(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},ga=class e extends Br{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new V,p=new B;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new W(s,3)),this.setAttribute(`normal`,new W(c,3)),this.setAttribute(`uv`,new W(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},_a=class e extends Br{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new V,d=new V,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new W(p,3)),this.setAttribute(`normal`,new W(m,3)),this.setAttribute(`uv`,new W(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},va=class e extends Br{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new V,f=new V,p=new V;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new W(c,3)),this.setAttribute(`normal`,new W(l,3)),this.setAttribute(`uv`,new W(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}},ya=class e extends Br{constructor(e=new da(new V(-1,-1,0),new V(-1,1,0),new V(1,1,0)),t=64,n=1,r=8,i=!1){super(),this.type=`TubeGeometry`,this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:i};let a=e.computeFrenetFrames(t,i);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new V,s=new V,c=new B,l=new V,u=[],d=[],f=[],p=[];m(),this.setIndex(p),this.setAttribute(`position`,new W(u,3)),this.setAttribute(`normal`,new W(d,3)),this.setAttribute(`uv`,new W(f,2));function m(){for(let e=0;e<t;e++)h(e);h(i===!1?t:0),_(),g()}function h(i){l=e.getPointAt(i/t,l);let c=a.normals[i],f=a.binormals[i];for(let e=0;e<=r;e++){let t=e/r*Math.PI*2,i=Math.sin(t),a=-Math.cos(t);s.x=a*c.x+i*f.x,s.y=a*c.y+i*f.y,s.z=a*c.z+i*f.z,s.normalize(),d.push(s.x,s.y,s.z),o.x=l.x+n*s.x,o.y=l.y+n*s.y,o.z=l.z+n*s.z,u.push(o.x,o.y,o.z)}}function g(){for(let e=1;e<=t;e++)for(let t=1;t<=r;t++){let n=(r+1)*(e-1)+(t-1),i=(r+1)*e+(t-1),a=(r+1)*e+t,o=(r+1)*(e-1)+t;p.push(n,i,o),p.push(i,a,o)}}function _(){for(let e=0;e<=t;e++)for(let n=0;n<=r;n++)c.x=e/t,c.y=n/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(t){return new e(new fa[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function ba(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Sa(i))i.isRenderTargetTexture?(L(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(Sa(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function xa(e){let t={};for(let n=0;n<e.length;n++){let r=ba(e[n]);for(let e in r)t[e]=r[e]}return t}function Sa(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Ca(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function wa(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}var Ta={clone:ba,merge:xa},Ea=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Da=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Oa=class extends Kr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ea,this.fragmentShader=Da,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ba(e.uniforms),this.uniformsGroups=Ca(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new U().setHex(r.value);break;case`v2`:this.uniforms[n].value=new B().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new V().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new an().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new H().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new un().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ka=class extends Oa{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Aa=class extends Kr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new U(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new U(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new B(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ja=class extends Aa{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:``,PHYSICAL:``},this.type=`MeshPhysicalMaterial`,this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new B(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return z(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new U(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new U(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new U(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:``,PHYSICAL:``},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},Ma=class extends Kr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Ye,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Na=class extends Kr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Pa=class extends vi{constructor(e){super(),this.isLineDashedMaterial=!0,this.type=`LineDashedMaterial`,this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function Fa(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Ia(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var La=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Ra=class extends La{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ke,endingEnd:Ke}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case qe:i=e,o=2*t-n;break;case Je:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case qe:a=e,s=2*n-t;break;case Je:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},za=class extends La{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Ba=class extends La{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Va=class extends La{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=Wa(n,t,g,y,r);i[p]=Ha(x,o,_,b,m)}return i}};function Ha(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function Ua(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function Wa(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=Ha(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=Ua(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var Ga=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Fa(t,this.TimeBufferType),this.values=Fa(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Fa(e.times,Array),values:Fa(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),Ia(e.settings)&&(n.settings={inTangents:Fa(e.settings.inTangents,Array),outTangents:Fa(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ba(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new za(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ra(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Va(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case He:t=this.InterpolantFactoryMethodDiscrete;break;case Ue:t=this.InterpolantFactoryMethodLinear;break;case We:t=this.InterpolantFactoryMethodSmooth;break;case Ge:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return L(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return He;case this.InterpolantFactoryMethodLinear:return Ue;case this.InterpolantFactoryMethodSmooth:return We;case this.InterpolantFactoryMethodBezier:return Ge}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Ia(this.settings)&&(Ka(this.settings.inTangents,e),Ka(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(R(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(R(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){R(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){R(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&it(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){R(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===We,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Ia(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Ka(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}Ga.prototype.ValueTypeName=``,Ga.prototype.TimeBufferType=Float32Array,Ga.prototype.ValueBufferType=Float32Array,Ga.prototype.DefaultInterpolation=Ue;var qa=class extends Ga{constructor(e,t,n){super(e,t,n)}};qa.prototype.ValueTypeName=`bool`,qa.prototype.ValueBufferType=Array,qa.prototype.DefaultInterpolation=He,qa.prototype.InterpolantFactoryMethodLinear=void 0,qa.prototype.InterpolantFactoryMethodSmooth=void 0;var Ja=class extends Ga{constructor(e,t,n,r){super(e,t,n,r)}};Ja.prototype.ValueTypeName=`color`;var Ya=class extends Ga{constructor(e,t,n,r){super(e,t,n,r)}};Ya.prototype.ValueTypeName=`number`;var Xa=class extends La{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Bt.slerpFlat(i,0,a,c-o,a,c,s);return i}},Za=class extends Ga{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Xa(this.times,this.values,this.getValueSize(),e)}};Za.prototype.ValueTypeName=`quaternion`,Za.prototype.InterpolantFactoryMethodSmooth=void 0;var Qa=class extends Ga{constructor(e,t,n){super(e,t,n)}};Qa.prototype.ValueTypeName=`string`,Qa.prototype.ValueBufferType=Array,Qa.prototype.DefaultInterpolation=He,Qa.prototype.InterpolantFactoryMethodLinear=void 0,Qa.prototype.InterpolantFactoryMethodSmooth=void 0;var $a=class extends Ga{constructor(e,t,n,r){super(e,t,n,r)}};$a.prototype.ValueTypeName=`vector`;var eo=class extends Ln{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new U(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},to=class extends eo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(Ln.DEFAULT_UP),this.updateMatrix(),this.groundColor=new U(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},no=new un,ro=new V,io=new V,ao=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new B(512,512),this.mapType=b,this.map=null,this.mapPass=null,this.matrix=new un,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _i,this._frameExtents=new B(1,1),this._viewportCount=1,this._viewports=[new an(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;ro.setFromMatrixPosition(e.matrixWorld),t.position.copy(ro),io.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(io),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){no.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(no,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(no)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},oo=new V,so=new Bt,co=new V,lo=class extends Ln{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new un,this.projectionMatrix=new un,this.projectionMatrixInverse=new un,this.coordinateSystem=nt,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(oo,so,co),co.x===1&&co.y===1&&co.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oo,so,co.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(oo,so,co),co.x===1&&co.y===1&&co.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oo,so,co.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},uo=new V,fo=new B,po=new B,mo=class extends lo{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=_t*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(gt*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _t*2*Math.atan(Math.tan(gt*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){uo.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(uo.x,uo.y).multiplyScalar(-e/uo.z),uo.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(uo.x,uo.y).multiplyScalar(-e/uo.z)}getViewSize(e,t){return this.getViewBounds(e,fo,po),t.subVectors(po,fo)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(gt*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ho=class extends lo{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},go=class extends ao{constructor(){super(new ho(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},_o=class extends eo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(Ln.DEFAULT_UP),this.updateMatrix(),this.target=new Ln,this.shadow=new go}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},vo=-90,yo=1,bo=class extends Ln{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new mo(vo,yo,e,t);r.layers=this.layers,this.add(r);let i=new mo(vo,yo,e,t);i.layers=this.layers,this.add(i);let a=new mo(vo,yo,e,t);a.layers=this.layers,this.add(a);let o=new mo(vo,yo,e,t);o.layers=this.layers,this.add(o);let s=new mo(vo,yo,e,t);s.layers=this.layers,this.add(s);let c=new mo(vo,yo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},xo=class extends mo{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},So=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Co.bind(this),e.addEventListener(`visibilitychange`,this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener(`visibilitychange`,this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e===void 0?performance.now():e)-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Co(){this._document.hidden===!1&&this.reset()}var wo=`\\[\\]\\.:\\/`,To=RegExp(`[\\[\\]\\.:\\/]`,`g`),Eo=`[^\\[\\]\\.:\\/]`,Do=`[^`+wo.replace(`\\.`,``)+`]`,Oo=`((?:WC+[\\/:])*)`.replace(`WC`,Eo),ko=`(WCOD+)?`.replace(`WCOD`,Do),Ao=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Eo),jo=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Eo),Mo=RegExp(`^`+Oo+ko+Ao+jo+`$`),No=[`material`,`materials`,`bones`,`map`],Po=class{constructor(e,t,n){let r=n||Fo.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Fo=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(To,``)}static parseTrackName(e){let t=Mo.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);No.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){L(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){R(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){R(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){R(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){R(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){R(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){R(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){R(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;R(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){R(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){R(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Fo.Composite=Po,Fo.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Fo.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Fo.prototype.GetterByBindingType=[Fo.prototype._getValue_direct,Fo.prototype._getValue_array,Fo.prototype._getValue_arrayElement,Fo.prototype._getValue_toArray],Fo.prototype.SetterByBindingTypeAndVersioning=[[Fo.prototype._setValue_direct,Fo.prototype._setValue_direct_setNeedsUpdate,Fo.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Fo.prototype._setValue_array,Fo.prototype._setValue_array_setNeedsUpdate,Fo.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Fo.prototype._setValue_arrayElement,Fo.prototype._setValue_arrayElement_setNeedsUpdate,Fo.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Fo.prototype._setValue_fromArray,Fo.prototype._setValue_fromArray_setNeedsUpdate,Fo.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Io=new un,Lo=class{constructor(e,t,n=0,r=1/0){this.ray=new Zr(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new xn,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):R(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return Io.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Io),this}intersectObject(e,t=!0,n=[]){return zo(e,this,n,t),n.sort(Ro),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)zo(e[r],this,n,t);return n.sort(Ro),n}};function Ro(e,t){return e.distance-t.distance}function zo(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)zo(r[e],t,n,!0)}}var Bo=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,L(`Clock: This module has been deprecated. Please use THREE.Timer instead.`)}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}},Vo=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){let e=1e-6;return this.phi=z(this.phi,e,Math.PI-e),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(z(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};(class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});var Ho=class extends Ai{constructor(e=10,t=10,n=4473924,r=8947848){n=new U(n),r=new U(r);let i=t/2,a=e/t,o=e/2,s=[],c=[];for(let e=0,l=0,u=-o;e<=t;e++,u+=a){s.push(-o,0,u,o,0,u),s.push(u,0,-o,u,0,o);let t=e===i?n:r;t.toArray(c,l),l+=3,t.toArray(c,l),l+=3,t.toArray(c,l),l+=3,t.toArray(c,l),l+=3}let l=new Br;l.setAttribute(`position`,new W(s,3)),l.setAttribute(`color`,new W(c,3));let u=new vi({vertexColors:!0,toneMapped:!1});super(l,u),this.type=`GridHelper`}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},Uo=class extends pt{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Wo(e,t,n,r){let i=Go(r);switch(n){case A:return e*t;case oe:return e*t/i.components*i.byteLength;case se:return e*t/i.components*i.byteLength;case ce:return e*t*2/i.components*i.byteLength;case le:return e*t*2/i.components*i.byteLength;case re:return e*t*3/i.components*i.byteLength;case j:return e*t*4/i.components*i.byteLength;case ue:return e*t*4/i.components*i.byteLength;case de:case M:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case fe:case pe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case he:case _e:return Math.max(e,16)*Math.max(t,8)/4;case me:case ge:return Math.max(e,8)*Math.max(t,8)/2;case ve:case ye:case xe:case Se:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case be:case Ce:case we:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Te:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ee:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case De:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Oe:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case ke:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Ae:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case je:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Me:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Ne:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Pe:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Fe:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case N:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Ie:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Le:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Re:case P:case ze:return Math.ceil(e/4)*Math.ceil(t/4)*16;case F:case I:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Be:case Ve:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Go(e){switch(e){case b:case x:return{byteLength:1,components:1};case C:case S:case D:return{byteLength:2,components:1};case O:case ee:return{byteLength:2,components:4};case T:case w:case E:return{byteLength:4,components:1};case k:case ne:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?L(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function Ko(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function qo(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var G={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},K={common:{diffuse:{value:new U(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new H},alphaMap:{value:null},alphaMapTransform:{value:new H},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new H}},envmap:{envMap:{value:null},envMapRotation:{value:new H},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new H}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new H}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new H},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new H},normalScale:{value:new B(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new H},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new H}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new H}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new H}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new U(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new V},probesMax:{value:new V},probesResolution:{value:new V}},points:{diffuse:{value:new U(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new H},alphaTest:{value:0},uvTransform:{value:new H}},sprite:{diffuse:{value:new U(16777215)},opacity:{value:1},center:{value:new B(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new H},alphaMap:{value:null},alphaMapTransform:{value:new H},alphaTest:{value:0}}},Jo={basic:{uniforms:xa([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.fog]),vertexShader:G.meshbasic_vert,fragmentShader:G.meshbasic_frag},lambert:{uniforms:xa([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.fog,K.lights,{emissive:{value:new U(0)},envMapIntensity:{value:1}}]),vertexShader:G.meshlambert_vert,fragmentShader:G.meshlambert_frag},phong:{uniforms:xa([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.fog,K.lights,{emissive:{value:new U(0)},specular:{value:new U(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:G.meshphong_vert,fragmentShader:G.meshphong_frag},standard:{uniforms:xa([K.common,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.roughnessmap,K.metalnessmap,K.fog,K.lights,{emissive:{value:new U(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:G.meshphysical_vert,fragmentShader:G.meshphysical_frag},toon:{uniforms:xa([K.common,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.gradientmap,K.fog,K.lights,{emissive:{value:new U(0)}}]),vertexShader:G.meshtoon_vert,fragmentShader:G.meshtoon_frag},matcap:{uniforms:xa([K.common,K.bumpmap,K.normalmap,K.displacementmap,K.fog,{matcap:{value:null}}]),vertexShader:G.meshmatcap_vert,fragmentShader:G.meshmatcap_frag},points:{uniforms:xa([K.points,K.fog]),vertexShader:G.points_vert,fragmentShader:G.points_frag},dashed:{uniforms:xa([K.common,K.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:G.linedashed_vert,fragmentShader:G.linedashed_frag},depth:{uniforms:xa([K.common,K.displacementmap]),vertexShader:G.depth_vert,fragmentShader:G.depth_frag},normal:{uniforms:xa([K.common,K.bumpmap,K.normalmap,K.displacementmap,{opacity:{value:1}}]),vertexShader:G.meshnormal_vert,fragmentShader:G.meshnormal_frag},sprite:{uniforms:xa([K.sprite,K.fog]),vertexShader:G.sprite_vert,fragmentShader:G.sprite_frag},background:{uniforms:{uvTransform:{value:new H},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:G.background_vert,fragmentShader:G.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new H}},vertexShader:G.backgroundCube_vert,fragmentShader:G.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:G.cube_vert,fragmentShader:G.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:G.equirect_vert,fragmentShader:G.equirect_frag},distance:{uniforms:xa([K.common,K.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:G.distance_vert,fragmentShader:G.distance_frag},shadow:{uniforms:xa([K.lights,K.fog,{color:{value:new U(0)},opacity:{value:1}}]),vertexShader:G.shadow_vert,fragmentShader:G.shadow_frag}};Jo.physical={uniforms:xa([Jo.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new H},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new H},clearcoatNormalScale:{value:new B(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new H},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new H},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new H},sheen:{value:0},sheenColor:{value:new U(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new H},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new H},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new H},transmissionSamplerSize:{value:new B},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new H},attenuationDistance:{value:0},attenuationColor:{value:new U(0)},specularColor:{value:new U(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new H},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new H},anisotropyVector:{value:new B},anisotropyMap:{value:null},anisotropyMapTransform:{value:new H}}]),vertexShader:G.meshphysical_vert,fragmentShader:G.meshphysical_frag};var Yo={r:0,b:0,g:0},Xo=new un,Zo=new H;Zo.set(-1,0,0,0,1,0,0,0,1);function Qo(e,t,n,r,i,a){let o=new U(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new ui(new Fi(1,1,1),new Oa({name:`BackgroundCubeMaterial`,uniforms:ba(Jo.backgroundCube.uniforms),vertexShader:Jo.backgroundCube.vertexShader,fragmentShader:Jo.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Xo.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Zo),l.material.toneMapped=qt.getTransfer(i.colorSpace)!==$e,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new ui(new ha(2,2),new Oa({name:`BackgroundMaterial`,uniforms:ba(Jo.background.uniforms),vertexShader:Jo.background.vertexShader,fragmentShader:Jo.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=qt.getTransfer(i.colorSpace)!==$e,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Yo,wa(e)),n.buffers.color.setClear(Yo.r,Yo.g,Yo.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function $o(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function es(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function ts(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(L(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&L(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function ns(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Wr,s=new H,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var rs=4,is=6,as=20,os=256,ss=new ho,cs=new U,ls=null,us=0,ds=0,fs=!1,ps=new V,ms=new V,hs=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=ps}=i;ls=this._renderer.getRenderTarget(),us=this._renderer.getActiveCubeFace(),ds=this._renderer.getActiveMipmapLevel(),fs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ss(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xs(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ls,us,ds),this._renderer.xr.enabled=fs,e.scissorTest=!1,vs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ls=this._renderer.getRenderTarget(),us=this._renderer.getActiveCubeFace(),ds=this._renderer.getActiveMipmapLevel(),fs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:_,minFilter:_,generateMipmaps:!1,type:D,format:j,colorSpace:Ze,depthBuffer:!1},r=_s(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_s(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=gs(r)),this._blurMaterial=bs(r,e,t),this._ggxMaterial=ys(r,e,t)}return r}_compileMaterial(e){let t=new ui(new Br,e);this._renderer.compile(t,ss)}_sceneToCubeUV(e,t,n,r,i){let a=new mo(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(cs),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ui(new Fi,new Qr({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(cs),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;vs(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ss()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xs());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;vs(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,ss)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-rs?n-d+rs:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,vs(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,ss),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,vs(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,ss)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];vs(t,3*l*(r>this._lodMax-rs?r-this._lodMax+rs:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,ss)}};function gs(e){let t=[],n=[],r=e,i=e-rs+1+is;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?ms.set(1,r,n):e===1?ms.set(-n,1,-r):e===2?ms.set(-n,r,1):e===3?ms.set(-1,r,-n):e===4?ms.set(-n,-1,r):ms.set(n,r,-1),ms.toArray(l,(e*6+t)*3)}}let u=new Br;u.setAttribute(`position`,new Er(c,3)),u.setAttribute(`outputDirection`,new Er(l,3)),n.push(new ui(u,null)),r>rs&&r--}return{lodMeshes:n,sizeLods:t}}function _s(e,t,n){let r=new sn(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function vs(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function ys(e,t,n){return new Oa({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:os,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Cs(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function bs(e,t,n){return new Oa({name:`SphericalGaussianBlur`,defines:{SAMPLES:as,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Cs(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function xs(){return new Oa({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Cs(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ss(){return new Oa({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Cs(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var ws=class extends sn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new ji(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Fi(5,5,5),i=new Oa({name:`CubemapFromEquirect`,uniforms:ba(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new ui(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=_),new bo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function Ts(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new ws(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new hs(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new hs(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Es(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&ut(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Ds(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?Or:Dr)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function Os(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function ks(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:R(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function As(e,t,n){let r=new WeakMap,i=new an;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new cn(h,p,m,u);g.type=E,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new B(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function js(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Ms={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Ns(e,t,n,r,i,a){let o=new sn(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new Br;l.setAttribute(`position`,new W([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new W([0,2,0,0,2,0],2));let u=new ka({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new ui(l,u),f=new ho(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,_=null,v=[],y=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<v.length;n++){let r=v[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){v=e,y=v.length>0&&v[0].isRenderPass===!0;let t=o.width,n=o.height;v.length>0&&s===null&&(s=new sn(t,n,{type:D,depthBuffer:!1,stencilBuffer:!1}),c=new sn(t,n,{type:D,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<v.length;e++){let r=v[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&v.length===0)return!1;if(_=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return y===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<v.length;i++){let a=v[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},qt.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=Ms[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(_),e.render(d,f),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var Ps=new rn,Fs=new Mi(1,1),Is=new cn,Ls=new ln,Rs=new ji,zs=[],Bs=[],Vs=new Float32Array(16),Hs=new Float32Array(9),Us=new Float32Array(4);function Ws(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=zs[i];if(a===void 0&&(a=new Float32Array(i),zs[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Gs(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Ks(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function qs(e,t){let n=Bs[t];n===void 0&&(n=new Int32Array(t),Bs[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Js(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Ys(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Gs(n,t))return;e.uniform2fv(this.addr,t),Ks(n,t)}}function Xs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Gs(n,t))return;e.uniform3fv(this.addr,t),Ks(n,t)}}function Zs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Gs(n,t))return;e.uniform4fv(this.addr,t),Ks(n,t)}}function Qs(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Gs(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Ks(n,t)}else{if(Gs(n,r))return;Us.set(r),e.uniformMatrix2fv(this.addr,!1,Us),Ks(n,r)}}function $s(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Gs(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Ks(n,t)}else{if(Gs(n,r))return;Hs.set(r),e.uniformMatrix3fv(this.addr,!1,Hs),Ks(n,r)}}function ec(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Gs(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Ks(n,t)}else{if(Gs(n,r))return;Vs.set(r),e.uniformMatrix4fv(this.addr,!1,Vs),Ks(n,r)}}function tc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function nc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Gs(n,t))return;e.uniform2iv(this.addr,t),Ks(n,t)}}function rc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Gs(n,t))return;e.uniform3iv(this.addr,t),Ks(n,t)}}function ic(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Gs(n,t))return;e.uniform4iv(this.addr,t),Ks(n,t)}}function ac(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function oc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Gs(n,t))return;e.uniform2uiv(this.addr,t),Ks(n,t)}}function sc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Gs(n,t))return;e.uniform3uiv(this.addr,t),Ks(n,t)}}function cc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Gs(n,t))return;e.uniform4uiv(this.addr,t),Ks(n,t)}}function lc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Fs.compareFunction=n.isReversedDepthBuffer()?518:515,a=Fs):a=Ps,n.setTexture2D(t||a,i)}function uc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Ls,i)}function dc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||Rs,i)}function fc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Is,i)}function pc(e){switch(e){case 5126:return Js;case 35664:return Ys;case 35665:return Xs;case 35666:return Zs;case 35674:return Qs;case 35675:return $s;case 35676:return ec;case 5124:case 35670:return tc;case 35667:case 35671:return nc;case 35668:case 35672:return rc;case 35669:case 35673:return ic;case 5125:return ac;case 36294:return oc;case 36295:return sc;case 36296:return cc;case 35678:case 36198:case 36298:case 36306:case 35682:return lc;case 35679:case 36299:case 36307:return uc;case 35680:case 36300:case 36308:case 36293:return dc;case 36289:case 36303:case 36311:case 36292:return fc}}function mc(e,t){e.uniform1fv(this.addr,t)}function hc(e,t){let n=Ws(t,this.size,2);e.uniform2fv(this.addr,n)}function gc(e,t){let n=Ws(t,this.size,3);e.uniform3fv(this.addr,n)}function _c(e,t){let n=Ws(t,this.size,4);e.uniform4fv(this.addr,n)}function vc(e,t){let n=Ws(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function yc(e,t){let n=Ws(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function bc(e,t){let n=Ws(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function xc(e,t){e.uniform1iv(this.addr,t)}function Sc(e,t){e.uniform2iv(this.addr,t)}function Cc(e,t){e.uniform3iv(this.addr,t)}function wc(e,t){e.uniform4iv(this.addr,t)}function Tc(e,t){e.uniform1uiv(this.addr,t)}function Ec(e,t){e.uniform2uiv(this.addr,t)}function Dc(e,t){e.uniform3uiv(this.addr,t)}function Oc(e,t){e.uniform4uiv(this.addr,t)}function kc(e,t,n){let r=this.cache,i=t.length,a=qs(n,i);Gs(r,a)||(e.uniform1iv(this.addr,a),Ks(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Fs:Ps;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Ac(e,t,n){let r=this.cache,i=t.length,a=qs(n,i);Gs(r,a)||(e.uniform1iv(this.addr,a),Ks(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Ls,a[e])}function jc(e,t,n){let r=this.cache,i=t.length,a=qs(n,i);Gs(r,a)||(e.uniform1iv(this.addr,a),Ks(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Rs,a[e])}function Mc(e,t,n){let r=this.cache,i=t.length,a=qs(n,i);Gs(r,a)||(e.uniform1iv(this.addr,a),Ks(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Is,a[e])}function Nc(e){switch(e){case 5126:return mc;case 35664:return hc;case 35665:return gc;case 35666:return _c;case 35674:return vc;case 35675:return yc;case 35676:return bc;case 5124:case 35670:return xc;case 35667:case 35671:return Sc;case 35668:case 35672:return Cc;case 35669:case 35673:return wc;case 5125:return Tc;case 36294:return Ec;case 36295:return Dc;case 36296:return Oc;case 35678:case 36198:case 36298:case 36306:case 35682:return kc;case 35679:case 36299:case 36307:return Ac;case 35680:case 36300:case 36308:case 36293:return jc;case 36289:case 36303:case 36311:case 36292:return Mc}}var Pc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=pc(t.type)}},Fc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Nc(t.type)}},Ic=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Lc=/(\w+)(\])?(\[|\.)?/g;function Rc(e,t){e.seq.push(t),e.map[t.id]=t}function zc(e,t,n){let r=e.name,i=r.length;for(Lc.lastIndex=0;;){let a=Lc.exec(r),o=Lc.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Rc(n,l===void 0?new Pc(s,e,t):new Fc(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Ic(s),Rc(n,e)),n=e}}}var Bc=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);zc(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Vc(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Hc=37297,Uc=0;function Wc(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Gc=new H;function Kc(e){qt._getMatrix(Gc,qt.workingColorSpace,e);let t=`mat3( ${Gc.elements.map(e=>e.toFixed(4))} )`;switch(qt.getTransfer(e)){case Qe:return[t,`LinearTransferOETF`];case $e:return[t,`sRGBTransferOETF`];default:return L(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function qc(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Wc(e.getShaderSource(t),r)}return i}function Jc(e,t){let n=Kc(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var Yc={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Xc(e,t){let n=Yc[t];return n===void 0?(L(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Zc=new V;function Qc(){return qt.getLuminanceCoefficients(Zc),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Zc.x.toFixed(4)}, ${Zc.y.toFixed(4)}, ${Zc.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function $c(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(nl).join(`
`)}function el(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function tl(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function nl(e){return e!==``}function rl(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function il(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var al=/^[ \t]*#include +<([\w\d./]+)>/gm;function ol(e){return e.replace(al,cl)}var sl=new Map;function cl(e,t){let n=G[t];if(n===void 0){let e=sl.get(t);if(e!==void 0)n=G[e],L(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return ol(n)}var ll=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ul(e){return e.replace(ll,dl)}function dl(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function fl(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}var pl={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function ml(e){return pl[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var hl={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function gl(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:hl[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var _l={302:`ENVMAP_MODE_REFRACTION`};function vl(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:_l[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var yl={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function bl(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:yl[e.combine]||`ENVMAP_BLENDING_NONE`}function xl(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Sl(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=ml(n),l=gl(n),u=vl(n),d=bl(n),f=xl(n),p=$c(n),m=el(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(nl).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(nl).join(`
`),_.length>0&&(_+=`
`)):(g=[fl(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(nl).join(`
`),_=[fl(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:G.tonemapping_pars_fragment,n.toneMapping===0?``:Xc(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,G.colorspace_pars_fragment,Jc(`linearToOutputTexel`,n.outputColorSpace),Qc(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(nl).join(`
`)),o=ol(o),o=rl(o,n),o=il(o,n),s=ol(s),s=rl(s,n),s=il(s,n),o=ul(o),s=ul(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=Vc(i,i.VERTEX_SHADER,y),S=Vc(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=qc(i,x,`vertex`),n=qc(i,S,`fragment`);R(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):L(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Bc(i,h),T=tl(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,Hc)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Uc++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var Cl=0,wl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Tl(e),t.set(e,n)),n}},Tl=class{constructor(e){this.id=Cl++,this.code=e,this.usedTimes=0}};function El(e){return e===1030||e===37490||e===36285}function Dl(e,t,n,r,i,a){let o=new xn,s=new wl,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&L(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,ee,te;if(C){let e=Jo[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),ee=e.id,te=t.id}let k=e.getRenderTarget(),ne=e.state.buffers.depth.getReversed(),A=h.isInstancedMesh===!0,re=h.isBatchedMesh===!0,j=!!i.map,ie=!!i.matcap,ae=!!x,oe=!!i.aoMap,se=!!i.lightMap,ce=!!i.bumpMap&&i.wireframe===!1,le=!!i.normalMap,ue=!!i.displacementMap,de=!!i.emissiveMap,M=!!i.metalnessMap,fe=!!i.roughnessMap,pe=i.anisotropy>0,me=i.clearcoat>0,he=i.dispersion>0,ge=i.retroreflectivity>0,_e=i.iridescence>0,ve=i.sheen>0,ye=i.transmission>0,be=pe&&!!i.anisotropyMap,xe=me&&!!i.clearcoatMap,Se=me&&!!i.clearcoatNormalMap,Ce=me&&!!i.clearcoatRoughnessMap,we=_e&&!!i.iridescenceMap,Te=_e&&!!i.iridescenceThicknessMap,Ee=ve&&!!i.sheenColorMap,De=ve&&!!i.sheenRoughnessMap,Oe=!!i.specularMap,ke=!!i.specularColorMap,Ae=!!i.specularIntensityMap,je=ye&&!!i.transmissionMap,Me=ye&&!!i.thicknessMap,Ne=!!i.gradientMap,Pe=!!i.alphaMap,Fe=i.alphaTest>0,N=!!i.alphaHash,Ie=!!i.extensions,Le=0;i.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Le=e.toneMapping);let Re={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:ee,customFragmentShaderID:te,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:re,batchingColor:re&&h._colorsTexture!==null,instancing:A,instancingColor:A&&h.instanceColor!==null,instancingMorph:A&&h.morphTexture!==null,outputColorSpace:k===null?e.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:qt.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:j,matcap:ie,envMap:ae,envMapMode:ae&&x.mapping,envMapCubeUVHeight:S,aoMap:oe,lightMap:se,bumpMap:ce,normalMap:le,displacementMap:ue,emissiveMap:de,normalMapObjectSpace:le&&i.normalMapType===1,normalMapTangentSpace:le&&i.normalMapType===0,packedNormalMap:le&&i.normalMapType===0&&El(i.normalMap.format),metalnessMap:M,roughnessMap:fe,anisotropy:pe,anisotropyMap:be,clearcoat:me,clearcoatMap:xe,clearcoatNormalMap:Se,clearcoatRoughnessMap:Ce,dispersion:he,retroreflection:ge,iridescence:_e,iridescenceMap:we,iridescenceThicknessMap:Te,sheen:ve,sheenColorMap:Ee,sheenRoughnessMap:De,specularMap:Oe,specularColorMap:ke,specularIntensityMap:Ae,transmission:ye,transmissionMap:je,thicknessMap:Me,gradientMap:Ne,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Pe,alphaTest:Fe,alphaHash:N,combine:i.combine,mapUv:j&&m(i.map.channel),aoMapUv:oe&&m(i.aoMap.channel),lightMapUv:se&&m(i.lightMap.channel),bumpMapUv:ce&&m(i.bumpMap.channel),normalMapUv:le&&m(i.normalMap.channel),displacementMapUv:ue&&m(i.displacementMap.channel),emissiveMapUv:de&&m(i.emissiveMap.channel),metalnessMapUv:M&&m(i.metalnessMap.channel),roughnessMapUv:fe&&m(i.roughnessMap.channel),anisotropyMapUv:be&&m(i.anisotropyMap.channel),clearcoatMapUv:xe&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:Se&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:De&&m(i.sheenRoughnessMap.channel),specularMapUv:Oe&&m(i.specularMap.channel),specularColorMapUv:ke&&m(i.specularColorMap.channel),specularIntensityMapUv:Ae&&m(i.specularIntensityMap.channel),transmissionMapUv:je&&m(i.transmissionMap.channel),thicknessMapUv:Me&&m(i.thicknessMap.channel),alphaMapUv:Pe&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(le||pe),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(j||Pe),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&le===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ne,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Le,decodeVideoTexture:j&&i.map.isVideoTexture===!0&&qt.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:de&&i.emissiveMap.isVideoTexture===!0&&qt.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Ie&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Ie&&i.extensions.multiDraw===!0||re)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Re.vertexUv1s=c.has(1),Re.vertexUv2s=c.has(2),Re.vertexUv3s=c.has(3),c.clear(),Re}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=Jo[t];n=Ta.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new Sl(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function Ol(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function kl(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Al(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function jl(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||kl),r.length>1&&r.sort(t||Al),i.length>1&&i.sort(t||Al)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Ml(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new jl,e.set(t,[i])):n>=r.length?(i=new jl,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Nl(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new V,color:new U};break;case`SpotLight`:n={position:new V,direction:new V,color:new U,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new V,color:new U,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new V,skyColor:new U,groundColor:new U};break;case`RectAreaLight`:n={color:new U,position:new V,halfWidth:new V,halfHeight:new V}}return e[t.id]=n,n}}}function Pl(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new B};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new B};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new B,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Fl=0;function Il(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Ll(e){let t=new Nl,n=Pl(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new V);let i=new V,a=new un,o=new un;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Il);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=K.LTC_FLOAT_1,r.rectAreaLTC2=K.LTC_FLOAT_2):(r.rectAreaLTC1=K.LTC_HALF_1,r.rectAreaLTC2=K.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=Fl++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Rl(e){let t=new Ll(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function zl(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Rl(e),t.set(n,[a])):r>=i.length?(a=new Rl(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Bl=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Vl=`uniform sampler2D shadow_pass;
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
}`,Hl=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],Ul=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],Wl=new un,Gl=new V,Kl=new V;function ql(e,t,n){let r=new _i,i=new B,a=new B,o=new an,s=new Ma,c=new Na,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new Oa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new B},radius:{value:4}},vertexShader:Bl,fragmentShader:Vl}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let h=new Br;h.setAttribute(`position`,new Er(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new ui(h,f),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let y=this.type;this.render=function(t,n,s){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||t.length===0)return;this.type===2&&(L(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=y!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){L(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let h=d.getFrameExtents();i.multiply(h),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/h.x),i.x=a.x*h.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/h.y),i.y=a.y*h.y,d.mapSize.y=a.y));let g=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=g,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){L(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new sn(i.x,i.y,{format:ce,type:D,minFilter:_,magFilter:_,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new Mi(i.x,i.y,E),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=ie,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=m,d.map.depthTexture.magFilter=m}else l.isPointLight?(d.map=new ws(i.x),d.map.depthTexture=new Ni(i.x,T)):(d.map=new sn(i.x,i.y),d.map.depthTexture=new Mi(i.x,i.y,T)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=ie,this.type===1?(d.map.depthTexture.compareFunction=g?518:515,d.map.depthTexture.minFilter=_,d.map.depthTexture.magFilter=_):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=m,d.map.depthTexture.magFilter=m);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let v=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);for(let t=0;t<v;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Gl.setFromMatrixPosition(l.matrixWorld),e.position.copy(Gl),Kl.copy(e.position),Kl.add(Hl[t]),e.up.copy(Ul[t]),e.lookAt(Kl),e.updateMatrixWorld(),n.makeTranslation(-Gl.x,-Gl.y,-Gl.z),Wl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(Wl,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}r=d.getFrustum(t),S(n,s,i,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&b(d,s),d.needsUpdate=!1}y=this.type,v.needsUpdate=!1,e.setRenderTarget(c,l,d)};function b(n,r){let a=t.update(g);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null?n.mapPass=new sn(i.x,i.y,{format:ce,type:D}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value.set(n.map.width,n.map.height),f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,g,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,g,null)}function x(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,C)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function S(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=x(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=x(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)S(c[e],i,a,o,s)}function C(e){e.target.removeEventListener(`dispose`,C);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Jl(e,t){function n(){let t=!1,n=new an,r=null,i=new an(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?M(e.DEPTH_TEST):fe(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=ft[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?M(e.STENCIL_TEST):fe(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new U(0,0,0),T=0,E=!1,D=null,O=null,ee=null,te=null,k=null,ne=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),A=!1,re=0,j=e.getParameter(e.VERSION);j.indexOf(`WebGL`)===-1?j.indexOf(`OpenGL ES`)!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),A=re>=2):(re=parseFloat(/^WebGL (\d)/.exec(j)[1]),A=re>=1);let ie=null,ae={},oe=e.getParameter(e.SCISSOR_BOX),se=e.getParameter(e.VIEWPORT),ce=new an().fromArray(oe),le=new an().fromArray(se);function ue(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let de={};de[e.TEXTURE_2D]=ue(e.TEXTURE_2D,e.TEXTURE_2D,1),de[e.TEXTURE_CUBE_MAP]=ue(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[e.TEXTURE_2D_ARRAY]=ue(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),de[e.TEXTURE_3D]=ue(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),M(e.DEPTH_TEST),o.setFunc(3),be(!1),xe(1),M(e.CULL_FACE),ve(0);function M(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function fe(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function pe(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function me(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function he(t){return h!==t&&(e.useProgram(t),h=t,!0)}let ge={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};ge[103]=e.MIN,ge[104]=e.MAX;let _e={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ve(t,n,r,i,a,o,s,c,l,u){if(t===0){g===!0&&(fe(e.BLEND),g=!1);return}if(g===!1&&(M(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:R(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:R(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:R(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:R(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}return}a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(ge[n],ge[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(_e[r],_e[i],_e[o],_e[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function ye(t,n){t.side===2?fe(e.CULL_FACE):M(e.CULL_FACE);let r=t.side===1;n&&(r=!r),be(r),t.blending===1&&t.transparent===!1?ve(0):ve(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),Ce(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?M(e.SAMPLE_ALPHA_TO_COVERAGE):fe(e.SAMPLE_ALPHA_TO_COVERAGE)}function be(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function xe(t){t===0?fe(e.CULL_FACE):(M(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function Se(t){t!==ee&&(A&&e.lineWidth(t),ee=t)}function Ce(t,n,r){t?(M(e.POLYGON_OFFSET_FILL),(te!==n||k!==r)&&(te=n,k=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):fe(e.POLYGON_OFFSET_FILL)}function we(t){t?M(e.SCISSOR_TEST):fe(e.SCISSOR_TEST)}function Te(t){t===void 0&&(t=e.TEXTURE0+ne-1),ie!==t&&(e.activeTexture(t),ie=t)}function Ee(t,n,r){r===void 0&&(r=ie===null?e.TEXTURE0+ne-1:ie);let i=ae[r];i===void 0&&(i={type:void 0,texture:void 0},ae[r]=i),(i.type!==t||i.texture!==n)&&(ie!==r&&(e.activeTexture(r),ie=r),e.bindTexture(t,n||de[t]),i.type=t,i.texture=n)}function De(){let t=ae[ie];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Oe(){try{e.compressedTexImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function ke(){try{e.compressedTexImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Ae(){try{e.texSubImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function je(){try{e.texSubImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Me(){try{e.compressedTexSubImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Ne(){try{e.compressedTexSubImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Pe(){try{e.texStorage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Fe(){try{e.texStorage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function N(){try{e.texImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Ie(){try{e.texImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Le(t){return d[t]===void 0?e.getParameter(t):d[t]}function Re(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function P(t){ce.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ce.copy(t))}function ze(t){le.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),le.copy(t))}function F(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function I(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Be(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},ie=null,ae={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new U(0,0,0),T=0,E=!1,D=null,O=null,ee=null,te=null,k=null,ce.set(0,0,e.canvas.width,e.canvas.height),le.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:M,disable:fe,bindFramebuffer:pe,drawBuffers:me,useProgram:he,setBlending:ve,setMaterial:ye,setFlipSided:be,setCullFace:xe,setLineWidth:Se,setPolygonOffset:Ce,setScissorTest:we,activeTexture:Te,bindTexture:Ee,unbindTexture:De,compressedTexImage2D:Oe,compressedTexImage3D:ke,texImage2D:N,texImage3D:Ie,pixelStorei:Re,getParameter:Le,updateUBOMapping:F,uniformBlockBinding:I,texStorage2D:Pe,texStorage3D:Fe,texSubImage2D:Ae,texSubImage3D:je,compressedTexSubImage2D:Me,compressedTexSubImage3D:Ne,scissor:P,viewport:ze,reset:Be}}function Yl(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new B,u=new WeakMap,b=new Set,x,S=new WeakMap,C=!1;try{C=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function w(e,t){return C?new OffscreenCanvas(e,t):at(`canvas`)}function T(e,t,n){let r=1,i=Le(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=w(n,a));let o=t?w(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),L(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&L(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function E(e){return e.generateMipmaps}function D(t){e.generateMipmap(t)}function O(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function ee(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];L(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||L(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?Qe:qt.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function te(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,L(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function k(e,t){return E(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function ne(e){let t=e.target;t.removeEventListener(`dispose`,ne),re(t),t.isVideoTexture&&u.delete(t),t.isHTMLTexture&&b.delete(t)}function A(e){let t=e.target;t.removeEventListener(`dispose`,A),ie(t)}function re(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=S.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&j(e),Object.keys(i).length===0&&S.delete(n)}r.remove(e)}function j(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=S.get(i);delete a[n.__cacheKey],o.memory.textures--}function ie(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let oe=0;function se(){oe=0}function ce(){return oe}function le(e){oe=e}function ue(){let e=oe;return e>=i.maxTextures&&L(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),oe+=1,e}function de(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function M(t,i){let a=r.get(t);if(t.isVideoTexture&&N(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)L(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)L(`WebGLRenderer: Texture marked for update but image is incomplete`);else{Se(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function fe(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){Se(a,t,i);return}t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i)}function pe(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){Se(a,t,i);return}n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function me(t,i){let a=r.get(t);if(t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version){Ce(a,t,i);return}n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let he={[d]:e.REPEAT,[f]:e.CLAMP_TO_EDGE,[p]:e.MIRRORED_REPEAT},ge={[m]:e.NEAREST,[h]:e.NEAREST_MIPMAP_NEAREST,[g]:e.NEAREST_MIPMAP_LINEAR,[_]:e.LINEAR,[v]:e.LINEAR_MIPMAP_NEAREST,[y]:e.LINEAR_MIPMAP_LINEAR},_e={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function ve(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&L(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,he[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,he[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,he[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,ge[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,ge[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,_e[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function ye(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,ne));let i=n.source,a=S.get(i);a===void 0&&(a={},S.set(i,a));let s=de(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&j(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function be(e,t,n){return Math.floor(Math.floor(e/n)/t)}function xe(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=be(n.start,r.width,4),c=be(t.start,r.width,4);n.start<=i+1&&a===c&&be(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function Se(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=ye(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let d=r.get(u);if(u.version!==d.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=qt.getPrimaries(qt.workingColorSpace),r=o.colorSpace===``?null:qt.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=T(o.image,!1,i.maxTextureSize);t=Ie(o,t);let r=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=ee(o.internalFormat,r,f,o.normalized,o.colorSpace,o.isVideoTexture);ve(c,o);let m,h=o.mipmaps,g=o.isVideoTexture!==!0,_=d.__version===void 0||l===!0,v=u.dataReady,y=k(o,t);if(o.isDepthTexture)p=te(o.format===ae,o.type),_&&(g?n.texStorage2D(e.TEXTURE_2D,1,p,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,p,t.width,t.height,0,r,f,null));else if(o.isDataTexture){if(h.length>0){g&&_&&n.texStorage2D(e.TEXTURE_2D,y,p,h[0].width,h[0].height);for(let t=0,i=h.length;t<i;t++)m=h[t],g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,m.width,m.height,r,f,m.data):n.texImage2D(e.TEXTURE_2D,t,p,m.width,m.height,0,r,f,m.data);o.generateMipmaps=!1}else g?(_&&n.texStorage2D(e.TEXTURE_2D,y,p,t.width,t.height),v&&xe(o,t,r,f)):n.texImage2D(e.TEXTURE_2D,0,p,t.width,t.height,0,r,f,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){g&&_&&n.texStorage3D(e.TEXTURE_2D_ARRAY,y,p,h[0].width,h[0].height,t.depth);for(let i=0,a=h.length;i<a;i++)if(m=h[i],o.format!==1023){if(r!==null){if(g){if(v){if(o.layerUpdates.size>0){let t=Wo(m.width,m.height,o.format,o.type);for(let a of o.layerUpdates){let o=m.data.subarray(a*t/m.data.BYTES_PER_ELEMENT,(a+1)*t/m.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,m.width,m.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,m.width,m.height,t.depth,r,m.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,p,m.width,m.height,t.depth,0,m.data,0,0)}else L(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,m.width,m.height,t.depth,r,f,m.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,p,m.width,m.height,t.depth,0,r,f,m.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{g&&_&&n.texStorage2D(e.TEXTURE_2D,y,p,h[0].width,h[0].height);for(let t=0,i=h.length;t<i;t++)m=h[t],o.format===1023?g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,m.width,m.height,r,f,m.data):n.texImage2D(e.TEXTURE_2D,t,p,m.width,m.height,0,r,f,m.data):r===null?L(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,m.width,m.height,r,m.data):n.compressedTexImage2D(e.TEXTURE_2D,t,p,m.width,m.height,0,m.data)}}else if(o.isDataArrayTexture){if(g){if(_&&n.texStorage3D(e.TEXTURE_2D_ARRAY,y,p,t.width,t.height,t.depth),v){if(o.layerUpdates.size>0){let i=Wo(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,f,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,f,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,p,t.width,t.height,t.depth,0,r,f,t.data)}else if(o.isData3DTexture)g?(_&&n.texStorage3D(e.TEXTURE_3D,y,p,t.width,t.height,t.depth),v&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,f,t.data)):n.texImage3D(e.TEXTURE_3D,0,p,t.width,t.height,t.depth,0,r,f,t.data);else if(o.isFramebufferTexture){if(_){if(g)n.texStorage2D(e.TEXTURE_2D,y,p,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<y;t++)n.texImage2D(e.TEXTURE_2D,t,p,i,a,0,r,f,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),b.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let t=Le(h[0]);n.texStorage2D(e.TEXTURE_2D,y,p,t.width,t.height)}for(let t=0,i=h.length;t<i;t++)m=h[t],g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,f,m):n.texImage2D(e.TEXTURE_2D,t,p,r,f,m);o.generateMipmaps=!1}else if(g){if(_){let r=Le(t);n.texStorage2D(e.TEXTURE_2D,y,p,r.width,r.height)}v&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,f,t)}else n.texImage2D(e.TEXTURE_2D,0,p,r,f,t);E(o)&&D(c),d.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function Ce(t,o,s){if(o.image.length!==6)return;let c=ye(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=qt.getPrimaries(qt.workingColorSpace),r=o.colorSpace===``?null:qt.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=T(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=Ie(o,m[e]);let h=m[0],g=a.convert(o.format,o.colorSpace),_=a.convert(o.type),v=ee(o.internalFormat,g,_,o.normalized,o.colorSpace),y=o.isVideoTexture!==!0,b=u.__version===void 0||c===!0,x=l.dataReady,S=k(o,h);ve(e.TEXTURE_CUBE_MAP,o);let C;if(f){y&&b&&n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let t=0;t<6;t++){C=m[t].mipmaps;for(let r=0;r<C.length;r++){let i=C[r];o.format===1023?y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,g,_,i.data):g===null?L(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,i.data)}}}else{if(C=o.mipmaps,y&&b){C.length>0&&S++;let t=Le(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,t.width,t.height)}for(let t=0;t<6;t++)if(p){y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,g,_,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,m[t].width,m[t].height,0,g,_,m[t].data);for(let r=0;r<C.length;r++){let i=C[r].image[t].image;y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,i.width,i.height,0,g,_,i.data)}}else{y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,m[t]);for(let r=0;r<C.length;r++){let i=C[r];y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,_,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,g,_,i.image[t])}}}E(o)&&D(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function we(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=ee(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),Fe(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,Pe(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Te(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=te(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Fe(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Pe(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Pe(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=ee(o.internalFormat,c,l,o.normalized,o.colorSpace);Fe(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Pe(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Pe(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Ee(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,(!l.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,ne)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),ve(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else M(i.depthTexture,0);let u=l.__webglTexture,d=Pe(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)Fe(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)Fe(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function De(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)Ee(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?Ee(i.__webglFramebuffer[0],t,0):Ee(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),Te(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),Te(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Oe(t,n,i){let a=r.get(t);n!==void 0&&we(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&De(t)}function ke(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,A);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&Fe(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=ee(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=Pe(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),Te(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),ve(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)we(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else we(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);E(i)&&D(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),ve(c,a),we(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),E(a)&&D(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),ve(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)we(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else we(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);E(i)&&D(r),n.unbindTexture()}t.depthBuffer&&De(t)}function Ae(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(E(a)){let t=O(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),D(t),n.unbindTexture()}}}let je=[],Me=[];function Ne(t){if(t.samples>0){if(Fe(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(je.length=0,Me.length=0,je.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(je.push(l),Me.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Me)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,je))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Pe(e){return Math.min(i.maxSamples,e.samples)}function Fe(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function N(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function Ie(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(qt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&L(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):R(`WebGLTextures: Unsupported texture color space:`,n)),t}function Le(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=ue,this.resetTextureUnits=se,this.getTextureUnits=ce,this.setTextureUnits=le,this.setTexture2D=M,this.setTexture2DArray=fe,this.setTexture3D=pe,this.setTextureCube=me,this.rebindTextures=Oe,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=Ae,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=we,this.useMultisampledRTT=Fe,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Xl(e,t){function n(n,r=``){let i,a=qt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Zl=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ql=`
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

}`,$l=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Pi(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Oa({vertexShader:Zl,fragmentShader:Ql,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ui(new ha(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},eu=class extends pt{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new $l,g={},_=t.getContextAttributes(),v=null,y=null,x=[],S=[],C=new B,w=null,E=null,D=new mo;D.viewport=new an;let O=new mo;O.viewport=new an;let ee=[D,O],k=new xo,ne=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=x[e];return t===void 0&&(t=new Bn,x[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=x[e];return t===void 0&&(t=new Bn,x[e]=t),t.getGripSpace()},this.getHand=function(e){let t=x[e];return t===void 0&&(t=new Bn,x[e]=t),t.getHandSpace()};function re(e){let t=S.indexOf(e.inputSource);if(t===-1)return;let n=x[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function oe(){r.removeEventListener(`select`,re),r.removeEventListener(`selectstart`,re),r.removeEventListener(`selectend`,re),r.removeEventListener(`squeeze`,re),r.removeEventListener(`squeezestart`,re),r.removeEventListener(`squeezeend`,re),r.removeEventListener(`end`,oe),r.removeEventListener(`inputsourceschange`,se);for(let e=0;e<x.length;e++){let t=S[e];t!==null&&(S[e]=null,x[e].disconnect(t))}ne=null,A=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,me.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(C.width,C.height,!1),E!==null){let e=E.camera;e.fov=E.fov,e.zoom=E.zoom,e.updateProjectionMatrix(),E=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&L(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&L(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,re),r.addEventListener(`selectstart`,re),r.addEventListener(`selectend`,re),r.addEventListener(`squeeze`,re),r.addEventListener(`squeezestart`,re),r.addEventListener(`squeezeend`,re),r.addEventListener(`end`,oe),r.addEventListener(`inputsourceschange`,se),_.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(C),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?ae:ie,a=_.stencil?te:T);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new sn(d.textureWidth,d.textureHeight,{format:j,type:b,depthTexture:new Mi(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new sn(f.framebufferWidth,f.framebufferHeight,{format:j,type:b,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),me.setContext(r),me.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function se(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=S.indexOf(n);r>=0&&(S[r]=null,x[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=S.indexOf(n);if(r===-1){for(let e=0;e<x.length;e++)if(e>=S.length){S.push(n),r=e;break}else if(S[e]===null){S[e]=n,r=e;break}if(r===-1)break}let i=x[r];i&&i.connect(n)}}let ce=new V,le=new V;function ue(e,t,n){ce.setFromMatrixPosition(t.matrixWorld),le.setFromMatrixPosition(n.matrixWorld);let r=ce.distanceTo(le),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function de(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),k.near=O.near=D.near=t,k.far=O.far=D.far=n,(ne!==k.near||A!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),ne=k.near,A=k.far),k.layers.mask=e.layers.mask|6,D.layers.mask=k.layers.mask&-5,O.layers.mask=k.layers.mask&-3;let i=e.parent,a=k.cameras;de(k,i);for(let e=0;e<a.length;e++)de(a[e],i);a.length===2?ue(k,D,O):k.projectionMatrix.copy(D.projectionMatrix),E===null&&e.isPerspectiveCamera&&(E={camera:e,fov:e.fov,zoom:e.zoom}),M(e,k,i)};function M(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=_t*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(k)},this.getCameraTexture=function(e){return g[e]};let fe=null;function pe(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==k.cameras.length&&(k.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=ee[n];o===void 0&&(o=new mo,o.layers.enable(n),o.viewport=new an,ee[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(k.matrix.copy(o.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),i===!0&&k.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new Pi,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<x.length;e++){let t=S[e],n=x[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}fe&&fe(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let me=new Ko;me.setAnimationLoop(pe),this.setAnimationLoop=function(e){fe=e},this.dispose=function(){}}},tu=new un,nu=new H;nu.set(-1,0,0,0,1,0,0,0,1);function ru(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,wa(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(tu.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(nu),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function iu(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return R(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?L(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):L(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var au=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ou=null;function su(){return ou===null&&(ou=new pi(au,16,16,ce,D),ou.name=`DFG_LUT`,ou.minFilter=_,ou.magFilter=_,ou.wrapS=f,ou.wrapT=f,ou.generateMipmaps=!1,ou.needsUpdate=!0),ou}var cu=class{constructor(e={}){let{canvas:t=ot(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=b}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([ue,le,se]),g=new Set([b,T,C,te,O,ee]),_=new Uint32Array(4),v=new Int32Array(4),x=new V,S=null,w=null,E=[],k=[],ne=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,re=!1,j=null,ie=null,ae=null,oe=null;this._outputColorSpace=Xe;let ce=0,de=0,M=null,fe=-1,pe=null,me=new an,he=new an,ge=null,_e=new U(0),ve=0,ye=t.width,be=t.height,xe=1,Se=null,Ce=null,we=new an(0,0,ye,be),Te=new an(0,0,ye,be),Ee=!1,De=new _i,Oe=!1,ke=!1,Ae=new un,je=new V,Me=new an,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Pe=!1;function Fe(){return M===null?xe:1}let N=n;function Ie(e,n){return t.getContext(e,n)}let Le,Re,P,ze,F,I,Be,Ve,He,Ue,We,Ge,Ke,qe,Je,Ye,Ze,Qe,$e,et,tt,rt,it;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,lt,!1),t.addEventListener(`webglcontextrestored`,ut,!1),t.addEventListener(`webglcontextcreationerror`,ft,!1),N===null){let t=`webgl2`;if(N=Ie(t,e),N===null)throw Ie(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}at()}catch(e){throw t.removeEventListener(`webglcontextlost`,lt,!1),t.removeEventListener(`webglcontextrestored`,ut,!1),t.removeEventListener(`webglcontextcreationerror`,ft,!1),R(`WebGLRenderer: `+e.message),e}function at(){Le=new Es(N),Le.init(),tt=new Xl(N,Le),Re=new ts(N,Le,e,tt),P=new Jl(N,Le),Re.reversedDepthBuffer&&d&&P.buffers.depth.setReversed(!0),ie=N.createFramebuffer(),ae=N.createFramebuffer(),oe=N.createFramebuffer(),ze=new ks(N),F=new Ol,I=new Yl(N,Le,P,F,Re,tt,ze),Be=new Ts(A),Ve=new qo(N),rt=new $o(N,Ve),He=new Ds(N,Ve,ze,rt),Ue=new js(N,He,Ve,rt,ze),Qe=new As(N,Re,I),Je=new ns(F),We=new Dl(A,Be,Le,Re,rt,Je),Ge=new ru(A,F),Ke=new Ml,qe=new zl(Le),Ze=new Qo(A,Be,P,Ue,p,s),Ye=new ql(A,Ue,Re),it=new iu(N,ze,Re,P),$e=new es(N,Le,ze),et=new Os(N,Le,ze),ze.programs=We.programs,A.capabilities=Re,A.extensions=Le,A.properties=F,A.renderLists=Ke,A.shadowMap=Ye,A.state=P,A.info=ze}m!==1009&&(ne=new Ns(m,t.width,t.height,o,r,i));let st=new eu(A,N);this.xr=st,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let e=Le.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Le.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return xe},this.setPixelRatio=function(e){e!==void 0&&(xe=e,this.setSize(ye,be,!1))},this.getSize=function(e){return e.set(ye,be)},this.setSize=function(e,n,r=!0){if(st.isPresenting){L(`WebGLRenderer: Can't change size while VR device is presenting.`);return}ye=e,be=n,t.width=Math.floor(e*xe),t.height=Math.floor(n*xe),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),ne!==null&&ne.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(ye*xe,be*xe).floor()},this.setDrawingBufferSize=function(e,n,r){ye=e,be=n,xe=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009){R(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){L(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}ne.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(me)},this.getViewport=function(e){return e.copy(we)},this.setViewport=function(e,t,n,r){e.isVector4?we.set(e.x,e.y,e.z,e.w):we.set(e,t,n,r),P.viewport(me.copy(we).multiplyScalar(xe).round())},this.getScissor=function(e){return e.copy(Te)},this.setScissor=function(e,t,n,r){e.isVector4?Te.set(e.x,e.y,e.z,e.w):Te.set(e,t,n,r),P.scissor(he.copy(Te).multiplyScalar(xe).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(e){P.setScissorTest(Ee=e)},this.setOpaqueSort=function(e){Se=e},this.setTransparentSort=function(e){Ce=e},this.getClearColor=function(e){return e.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor(...arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(M!==null){let t=M.texture.format;e=h.has(t)}if(e){let e=M.texture.type,t=g.has(e),n=Ze.getClearColor(),r=Ze.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,N.clearBufferuiv(N.COLOR,0,_)):(v[0]=i,v[1]=a,v[2]=o,v[3]=r,N.clearBufferiv(N.COLOR,0,v))}else r|=N.COLOR_BUFFER_BIT}t&&(r|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&N.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),j=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,lt,!1),t.removeEventListener(`webglcontextrestored`,ut,!1),t.removeEventListener(`webglcontextcreationerror`,ft,!1),Ze.dispose(),Ke.dispose(),qe.dispose(),F.dispose(),Be.dispose(),Ue.dispose(),rt.dispose(),it.dispose(),We.dispose(),st.dispose(),st.removeEventListener(`sessionstart`,z),st.removeEventListener(`sessionend`,yt),bt.stop()};function lt(e){e.preventDefault(),ct(`WebGLRenderer: Context Lost.`),re=!0}function ut(){ct(`WebGLRenderer: Context Restored.`),re=!1;let e=ze.autoReset,t=Ye.enabled,n=Ye.autoUpdate,r=Ye.needsUpdate,i=Ye.type;at(),ze.autoReset=e,Ye.enabled=t,Ye.autoUpdate=n,Ye.needsUpdate=r,Ye.type=i}function ft(e){R(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function pt(e){let t=e.target;t.removeEventListener(`dispose`,pt),mt(t)}function mt(e){ht(e),F.remove(e)}function ht(e){let t=F.get(e).programs;t!==void 0&&(t.forEach(function(e){We.releaseProgram(e)}),e.isShaderMaterial&&We.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Ne);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=At(e,t,n,r,i);P.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=He.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;rt.setup(i,r,s,n,c);let h,g=$e;if(c!==null&&(h=Ve.get(c),g=et,g.setIndex(h)),i.isMesh)r.wireframe===!0?(P.setLineWidth(r.wireframeLinewidth*Fe()),g.setMode(N.LINES)):g.setMode(N.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),P.setLineWidth(e*Fe()),i.isLineSegments?g.setMode(N.LINES):i.isLineLoop?g.setMode(N.LINE_LOOP):g.setMode(N.LINE_STRIP)}else i.isPoints?g.setMode(N.POINTS):i.isSprite&&g.setMode(N.TRIANGLES);if(i.isBatchedMesh){if(Le.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Ve.get(c).bytesPerElement:1,o=F.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(N,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function gt(e,t,n,r){j!==null&&e.isNodeMaterial&&j.setObject(r,e),Oe===!0&&Je.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Et(e,t,r),e.side=0,e.needsUpdate=!0,Et(e,t,r),e.side=2):Et(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),j!==null&&j.renderStart(e,t,n),w=qe.get(n),w.init(t),k.push(w),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(w.pushLight(e),e.castShadow&&w.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(w.pushLight(e),e.castShadow&&w.pushShadow(e))}),w.setupLights(),j!==null&&j.updateLights(w.state.lightsArray),ke=this.localClippingEnabled,Oe=Je.init(this.clippingPlanes,ke),Oe===!0&&Je.setGlobalState(this.clippingPlanes,t),j!==null&&Ye.render(w.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];gt(o,n,t,e),r.add(o)}else gt(i,n,t,e),r.add(i)}}),w=k.pop(),j!==null&&j.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){let t=F.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}Le.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let _t=null;function vt(e){_t&&_t(e)}function z(){bt.stop()}function yt(){bt.start()}let bt=new Ko;bt.setAnimationLoop(vt),typeof self<`u`&&bt.setContext(self),this.setAnimationLoop=function(e){_t=e,st.setAnimationLoop(e),e===null?bt.stop():bt.start()},st.addEventListener(`sessionstart`,z),st.addEventListener(`sessionend`,yt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){R(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(re===!0)return;j!==null&&j.renderStart(e,t);let n=st.enabled===!0&&st.isPresenting===!0,r=ne!==null&&(M===null||n)&&ne.begin(A,M);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(ne===null||ne.isCompositing()===!1)&&(st.cameraAutoUpdate===!0&&st.updateCamera(t),t=st.getCamera()),e.isScene===!0&&e.onBeforeRender(A,e,t,M),w=qe.get(e,k.length),w.init(t),w.state.textureUnits=I.getTextureUnits(),k.push(w),Ae.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),De.setFromProjectionMatrix(Ae,nt,t.reversedDepth),ke=this.localClippingEnabled,Oe=Je.init(this.clippingPlanes,ke),S=Ke.get(e,E.length),S.init(),E.push(S),st.enabled===!0&&st.isPresenting===!0){let e=A.xr.getDepthSensingMesh();e!==null&&xt(e,t,-1/0,A.sortObjects)}xt(e,t,0,A.sortObjects),S.finish(),j!==null&&j.updateLights(w.state.lightsArray),A.sortObjects===!0&&S.sort(Se,Ce),Pe=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,Pe&&Ze.addToRenderList(S,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Oe===!0&&Je.beginShadows();let i=w.state.shadowsArray;if(Ye.render(i,e,t),Oe===!0&&Je.endShadows(),(r&&ne.hasRenderPass())===!1){let n=S.opaque,r=S.transmissive;if(w.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];Ct(n,r,e,a)}Pe&&Ze.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];St(S,e,n,n.viewport)}}else r.length>0&&Ct(n,r,e,t),Pe&&Ze.render(e),St(S,e,t)}M!==null&&de===0&&(I.updateMultisampleRenderTarget(M),I.updateRenderTargetMipmap(M)),r&&ne.end(A),e.isScene===!0&&e.onAfterRender(A,e,t),rt.resetDefaultState(),fe=-1,pe=null,k.pop(),k.length>0?(w=k[k.length-1],I.setTextureUnits(w.state.textureUnits),Oe===!0&&Je.setGlobalState(A.clippingPlanes,w.state.camera)):w=null,E.pop(),S=E.length>0?E[E.length-1]:null,j!==null&&j.renderEnd()};function xt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)w.pushLightProbeGrid(e);else if(e.isLight)w.pushLight(e),e.castShadow&&w.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(De)){r&&Me.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Ae);let i=Ue.update(e),a=e.material;a.visible&&S.push(e,i,a,n,Me.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(De))){let i=Ue.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Me.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Me.copy(e.boundingSphere.center)),Me.applyMatrix4(e.matrixWorld).applyMatrix4(Ae)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&S.push(e,i,c,n,Me.z,s,t)}}else a.visible&&S.push(e,i,a,n,Me.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)xt(i[e],t,n,r)}function St(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;w.setupLightsView(n),Oe===!0&&Je.setGlobalState(A.clippingPlanes,n),r&&P.viewport(me.copy(r)),i.length>0&&wt(i,t,n),a.length>0&&wt(a,t,n),o.length>0&&wt(o,t,n),P.buffers.depth.setTest(!0),P.buffers.depth.setMask(!0),P.buffers.color.setMask(!0),P.setPolygonOffset(!1)}function Ct(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[r.id]===void 0){let e=Le.has(`EXT_color_buffer_half_float`)||Le.has(`EXT_color_buffer_float`);w.state.transmissionRenderTarget[r.id]=new sn(1,1,{generateMipmaps:!0,type:e?D:b,minFilter:y,samples:Math.max(4,Re.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:qt.workingColorSpace})}let a=w.state.transmissionRenderTarget[r.id],o=r.viewport||me;a.setSize(o.z*A.transmissionResolutionScale,o.w*A.transmissionResolutionScale);let s=A.getRenderTarget(),c=A.getActiveCubeFace(),l=A.getActiveMipmapLevel();A.setRenderTarget(a),A.getClearColor(_e),ve=A.getClearAlpha(),ve<1&&A.setClearColor(16777215,.5),A.clear(),Pe&&Ze.render(n);let u=A.toneMapping;A.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),w.setupLightsView(r),Oe===!0&&Je.setGlobalState(A.clippingPlanes,r),wt(e,n,r),I.updateMultisampleRenderTarget(a),I.updateRenderTargetMipmap(a),Le.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,Tt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(I.updateMultisampleRenderTarget(a),I.updateRenderTargetMipmap(a))}A.setRenderTarget(s,c,l),A.setClearColor(_e,ve),d!==void 0&&(r.viewport=d),A.toneMapping=u}function wt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&Tt(o,t,n,s,l,c)}}function Tt(e,t,n,r,i,a){j!==null&&i.isNodeMaterial&&j.setObject(e,i),e.onBeforeRender(A,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(A,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,A.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,A.renderBufferDirect(n,t,r,i,e,a),i.side=2):A.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(A,t,n,r,i,a)}function Et(e,t,n){t.isScene!==!0&&(t=Ne);let r=F.get(e),i=w.state.lights,a=w.state.shadowsArray,o=i.state.version,s=We.getParameters(e,i.state,a,t,n,w.state.lightProbeGridArray),c=We.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Be.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,pt),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Ot(e,s),d}else s.uniforms=We.getUniforms(e),j!==null&&e.isNodeMaterial&&j.build(e,n,s),e.onBeforeCompile(s,A),d=We.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Je.uniform),Ot(e,s),r.needsLights=Mt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=w.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function Dt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Bc.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Ot(e,t){let n=F.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function kt(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];x.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(x))return n}return null}function At(e,t,n,r,i){t.isScene!==!0&&(t=Ne),I.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=M===null?A.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:qt.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Be.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(h=A.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=F.get(r),y=w.state.lights;if(Oe===!0&&(ke===!0||e!==pe)){let t=e===pe&&r.id===fe;Je.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Je.numPlanes||v.numIntersection!==Je.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=w.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=Et(r,t,i),j&&r.isNodeMaterial&&j.onUpdateProgram(r,x,v));let S=!1,C=!1,T=!1,E=x.getUniforms(),D=v.uniforms;if(P.useProgram(x.program)&&(S=!0,C=!0,T=!0),r.id!==fe&&(fe=r.id,C=!0),v.needsLights){let e=kt(w.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||pe!==e){P.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),E.setValue(N,`projectionMatrix`,e.projectionMatrix),E.setValue(N,`viewMatrix`,e.matrixWorldInverse);let t=E.map.cameraPosition;t!==void 0&&t.setValue(N,je.setFromMatrixPosition(e.matrixWorld)),Re.logarithmicDepthBuffer&&E.setValue(N,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&E.setValue(N,`isOrthographic`,e.isOrthographicCamera===!0),pe!==e&&(pe=e,C=!0,T=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&E.setValue(N,`sunShadowMap`,y.state.sunShadowMap,I),y.state.directionalShadowMap.length>0&&E.setValue(N,`directionalShadowMap`,y.state.directionalShadowMap,I),y.state.spotShadowMap.length>0&&E.setValue(N,`spotShadowMap`,y.state.spotShadowMap,I),y.state.pointShadowMap.length>0&&E.setValue(N,`pointShadowMap`,y.state.pointShadowMap,I)),i.isSkinnedMesh){E.setOptional(N,i,`bindMatrix`),E.setOptional(N,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),E.setValue(N,`boneTexture`,e.boneTexture,I))}i.isBatchedMesh&&(E.setOptional(N,i,`batchingTexture`),E.setValue(N,`batchingTexture`,i._matricesTexture,I),E.setOptional(N,i,`batchingIdTexture`),E.setValue(N,`batchingIdTexture`,i._indirectTexture,I),E.setOptional(N,i,`batchingColorTexture`),i._colorsTexture!==null&&E.setValue(N,`batchingColorTexture`,i._colorsTexture,I));let O=n.morphAttributes;if((O.position!==void 0||O.normal!==void 0||O.color!==void 0)&&Qe.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,E.setValue(N,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(D.envMapIntensity.value=t.environmentIntensity),D.dfgLUT!==void 0&&(D.dfgLUT.value=su()),C){if(E.setValue(N,`toneMappingExposure`,A.toneMappingExposure),v.needsLights&&jt(D,T),a&&r.fog===!0&&Ge.refreshFogUniforms(D,a),Ge.refreshMaterialUniforms(D,r,xe,be,w.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;D.probesSH.value=e.texture,D.probesMin.value.copy(e.boundingBox.min),D.probesMax.value.copy(e.boundingBox.max),D.probesResolution.value.copy(e.resolution)}Bc.upload(N,Dt(v),D,I)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Bc.upload(N,Dt(v),D,I),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&E.setValue(N,`center`,i.center),E.setValue(N,`modelViewMatrix`,i.modelViewMatrix),E.setValue(N,`normalMatrix`,i.normalMatrix),E.setValue(N,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];it.update(n,x),it.bind(n,x)}}return x}function jt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Mt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ce},this.getActiveMipmapLevel=function(){return de},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(e,t,n){let r=F.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),F.get(e.texture).__webglTexture=t,F.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=F.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){M=e,ce=t,de=n;let r=null,i=!1,a=!1;if(e){let o=F.get(e);if(o.__useDefaultFramebuffer!==void 0){P.bindFramebuffer(N.FRAMEBUFFER,o.__webglFramebuffer),me.copy(e.viewport),he.copy(e.scissor),ge=e.scissorTest,P.viewport(me),P.scissor(he),P.setScissorTest(ge),fe=-1;return}if(o.__webglFramebuffer===void 0)I.setupRenderTarget(e);else if(o.__hasExternalTextures)I.rebindTextures(e,F.get(e.texture).__webglTexture,F.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&F.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);I.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=F.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&I.useMultisampledRTT(e)===!1?F.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,me.copy(e.viewport),he.copy(e.scissor),ge=e.scissorTest}else me.copy(we).multiplyScalar(xe).floor(),he.copy(Te).multiplyScalar(xe).floor(),ge=Ee;if(n!==0&&(r=ie),P.bindFramebuffer(N.FRAMEBUFFER,r)&&P.drawBuffers(e,r),P.viewport(me),P.scissor(he),P.setScissorTest(ge),i){let r=F.get(e.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=F.get(e.textures[t]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=F.get(e.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,t.__webglTexture,n)}fe=-1};function Nt(e){let t=F.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Re.textureFormatReadable(e.format),t.__typeReadable=Re.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){R(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=F.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){P.bindFramebuffer(N.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+s);let u=Nt(o);if(u.__formatReadable===!1){R(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){R(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&N.readPixels(t,n,r,i,tt.convert(c),tt.convert(l),a)}finally{let e=M===null?null:F.get(M).__webglFramebuffer;P.bindFramebuffer(N.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=F.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){P.bindFramebuffer(N.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+s);let d=Nt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,f),N.bufferData(N.PIXEL_PACK_BUFFER,a.byteLength,N.STREAM_READ),N.readPixels(t,n,r,i,tt.convert(l),tt.convert(u),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let p=M===null?null:F.get(M).__webglFramebuffer;P.bindFramebuffer(N.FRAMEBUFFER,p);let m=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await dt(N,m,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,f),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,a),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(f),N.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;I.setTexture2D(e,0),N.copyTexSubImage2D(N.TEXTURE_2D,n,0,0,o,s,i,a),P.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=tt.convert(t.format),_=tt.convert(t.type),v;t.isData3DTexture?(I.setTexture3D(t,0),v=N.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(I.setTexture2DArray(t,0),v=N.TEXTURE_2D_ARRAY):(I.setTexture2D(t,0),v=N.TEXTURE_2D),P.activeTexture(N.TEXTURE0),P.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,t.flipY),P.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),P.pixelStorei(N.UNPACK_ALIGNMENT,t.unpackAlignment);let y=P.getParameter(N.UNPACK_ROW_LENGTH),b=P.getParameter(N.UNPACK_IMAGE_HEIGHT),x=P.getParameter(N.UNPACK_SKIP_PIXELS),S=P.getParameter(N.UNPACK_SKIP_ROWS),C=P.getParameter(N.UNPACK_SKIP_IMAGES);P.pixelStorei(N.UNPACK_ROW_LENGTH,h.width),P.pixelStorei(N.UNPACK_IMAGE_HEIGHT,h.height),P.pixelStorei(N.UNPACK_SKIP_PIXELS,l),P.pixelStorei(N.UNPACK_SKIP_ROWS,u),P.pixelStorei(N.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=F.get(e),r=F.get(t),h=F.get(n.__renderTarget),g=F.get(r.__renderTarget);P.bindFramebuffer(N.READ_FRAMEBUFFER,h.__webglFramebuffer),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,F.get(e).__webglTexture,i,d+n),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,F.get(t).__webglTexture,a,m+n)),N.blitFramebuffer(l,u,o,s,f,p,o,s,N.DEPTH_BUFFER_BIT,N.NEAREST);P.bindFramebuffer(N.READ_FRAMEBUFFER,null),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||F.has(e)){let n=F.get(e),r=F.get(t);P.bindFramebuffer(N.READ_FRAMEBUFFER,ae),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,oe);for(let e=0;e<c;e++)w?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,n.__webglTexture,i),T?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,r.__webglTexture,a),i===0?T?N.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):N.copyTexSubImage2D(v,a,f,p,l,u,o,s):N.blitFramebuffer(l,u,o,s,f,p,o,s,N.COLOR_BUFFER_BIT,N.NEAREST);P.bindFramebuffer(N.READ_FRAMEBUFFER,null),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?N.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?N.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):N.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):N.texSubImage2D(N.TEXTURE_2D,a,f,p,o,s,g,_,h);P.pixelStorei(N.UNPACK_ROW_LENGTH,y),P.pixelStorei(N.UNPACK_IMAGE_HEIGHT,b),P.pixelStorei(N.UNPACK_SKIP_PIXELS,x),P.pixelStorei(N.UNPACK_SKIP_ROWS,S),P.pixelStorei(N.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&N.generateMipmap(v),P.unbindTexture()},this.initRenderTarget=function(e){F.get(e).__webglFramebuffer===void 0&&I.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?I.setTextureCube(e,0):e.isData3DTexture?I.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?I.setTexture2DArray(e,0):I.setTexture2D(e,0),P.unbindTexture()},this.resetState=function(){ce=0,de=0,M=null,P.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return nt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=qt._getDrawingBufferColorSpace(e),t.unpackColorSpace=qt._getUnpackColorSpace()}},lu={type:`change`},uu={type:`start`},du={type:`end`},fu=new Zr,pu=new Wr,mu=Math.cos(70*zt.DEG2RAD),hu=new V,gu=2*Math.PI,_u={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},vu=1e-6,yu=class extends Uo{constructor(e,t=null){super(e,t),this.state=_u.NONE,this.target=new V,this.cursor=new V,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:`ArrowLeft`,UP:`ArrowUp`,RIGHT:`ArrowRight`,BOTTOM:`ArrowDown`},this.mouseButtons={LEFT:l.ROTATE,MIDDLE:l.DOLLY,RIGHT:l.PAN},this.touches={ONE:u.ROTATE,TWO:u.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle=`auto`,this._domElementKeyEvents=null,this._lastPosition=new V,this._lastQuaternion=new Bt,this._lastTargetPosition=new V,this._quat=new Bt().setFromUnitVectors(e.up,new V(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Vo,this._sphericalDelta=new Vo,this._scale=1,this._panOffset=new V,this._rotateStart=new B,this._rotateEnd=new B,this._rotateDelta=new B,this._panStart=new B,this._panEnd=new B,this._panDelta=new B,this._dollyStart=new B,this._dollyEnd=new B,this._dollyDelta=new B,this._dollyDirection=new V,this._mouse=new B,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=xu.bind(this),this._onPointerDown=bu.bind(this),this._onPointerUp=Su.bind(this),this._onContextMenu=ku.bind(this),this._onMouseWheel=Tu.bind(this),this._onKeyDown=Eu.bind(this),this._onTouchStart=Du.bind(this),this._onTouchMove=Ou.bind(this),this._onMouseDown=Cu.bind(this),this._onMouseMove=wu.bind(this),this._interceptControlDown=Au.bind(this),this._interceptControlUp=ju.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e===`grab`?this.domElement.style.cursor=`grab`:this.domElement.style.cursor=`auto`}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener(`pointerdown`,this._onPointerDown),this.domElement.addEventListener(`pointercancel`,this._onPointerUp),this.domElement.addEventListener(`contextmenu`,this._onContextMenu),this.domElement.addEventListener(`wheel`,this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener(`keydown`,this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction=`none`}disconnect(){this.state=_u.NONE,this.domElement.removeEventListener(`pointerdown`,this._onPointerDown),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.domElement.removeEventListener(`pointercancel`,this._onPointerUp),this.domElement.removeEventListener(`wheel`,this._onMouseWheel),this.domElement.removeEventListener(`contextmenu`,this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener(`keydown`,this._interceptControlDown,{capture:!0}),e.removeEventListener(`keyup`,this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction=``,this.domElement.style.cursor=`auto`}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(lu),this.update(),this.state=_u.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;hu.copy(t).sub(this.target),hu.applyQuaternion(this._quat),this._spherical.setFromVector3(hu),this.autoRotate&&this.state===_u.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=gu:n>Math.PI&&(n-=gu),r<-Math.PI?r+=gu:r>Math.PI&&(r-=gu),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let i=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let e=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),i=e!=this._spherical.radius}if(hu.setFromSpherical(this._spherical),hu.applyQuaternion(this._quatInverse),t.copy(this.target).add(hu),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let e=null;if(this.object.isPerspectiveCamera){let t=hu.length();e=this._clampDistance(t*this._scale);let n=t-e;this.object.position.addScaledVector(this._dollyDirection,n),this.object.updateMatrixWorld(),i=!!n}else if(this.object.isOrthographicCamera){let t=new V(this._mouse.x,this._mouse.y,0);t.unproject(this.object);let n=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),i=n!==this.object.zoom;let r=new V(this._mouse.x,this._mouse.y,0);r.unproject(this.object),this.object.position.sub(r).add(t),this.object.updateMatrixWorld(),e=hu.length()}else console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.`),this.zoomToCursor=!1;e!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(e).add(this.object.position):(fu.origin.copy(this.object.position),fu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(fu.direction))<mu?this.object.lookAt(this.target):(pu.setFromNormalAndCoplanarPoint(this.object.up,this.target),fu.intersectPlane(pu,this.target))))}else if(this.object.isOrthographicCamera){let e=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),e!==this.object.zoom&&(this.object.updateProjectionMatrix(),i=!0)}return this._scale=1,this._performCursorZoom=!1,i||this._lastPosition.distanceToSquared(this.object.position)>vu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>vu||this._lastTargetPosition.distanceToSquared(this.target)>vu?(this.dispatchEvent(lu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e===null?gu/60/60*this.autoRotateSpeed:gu/60*this.autoRotateSpeed*e}_getZoomScale(e){let t=Math.abs(e*.01);return .95**(this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){hu.setFromMatrixColumn(t,0),hu.multiplyScalar(-e),this._panOffset.add(hu)}_panUp(e,t){this.screenSpacePanning===!0?hu.setFromMatrixColumn(t,1):(hu.setFromMatrixColumn(t,0),hu.crossVectors(this.object.up,hu)),hu.multiplyScalar(e),this._panOffset.add(hu)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;hu.copy(r).sub(this.target);let i=hu.length();i*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*i/n.clientHeight,this.object.matrix),this._panUp(2*t*i/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.`),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),r=e-n.left,i=t-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(i/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(gu*this._rotateDelta.x/t.clientHeight),this._rotateUp(gu*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(gu*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-gu*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(gu*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-gu*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyStart.set(0,i)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateEnd.set(n,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(gu*this._rotateDelta.x/t.clientHeight),this._rotateUp(gu*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,i),this._dollyDelta.set(0,(this._dollyEnd.y/this._dollyStart.y)**+this.zoomSpeed),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new B,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function bu(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.ownerDocument.addEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.addEventListener(`pointerup`,this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType===`touch`?this._onTouchStart(e):this._onMouseDown(e),this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grabbing`)))}function xu(e){this.enabled!==!1&&(e.pointerType===`touch`?this._onTouchMove(e):this._onMouseMove(e))}function Su(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.dispatchEvent(du),this.state=_u.NONE,this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grab`);break;case 1:let t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y})}}function Cu(e){let t;switch(e.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case l.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=_u.DOLLY;break;case l.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=_u.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=_u.ROTATE}break;case l.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=_u.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=_u.PAN}break;default:this.state=_u.NONE}this.state!==_u.NONE&&this.dispatchEvent(uu)}function wu(e){switch(this.state){case _u.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case _u.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case _u.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e)}}function Tu(e){this.enabled!==!1&&this.enableZoom!==!1&&this.state===_u.NONE&&(e.preventDefault(),this.dispatchEvent(uu),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(du))}function Eu(e){this.enabled!==!1&&this._handleKeyDown(e)}function Du(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case u.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=_u.TOUCH_ROTATE;break;case u.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=_u.TOUCH_PAN;break;default:this.state=_u.NONE}break;case 2:switch(this.touches.TWO){case u.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=_u.TOUCH_DOLLY_PAN;break;case u.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=_u.TOUCH_DOLLY_ROTATE;break;default:this.state=_u.NONE}break;default:this.state=_u.NONE}this.state!==_u.NONE&&this.dispatchEvent(uu)}function Ou(e){switch(this._trackPointer(e),this.state){case _u.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case _u.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case _u.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case _u.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=_u.NONE}}function ku(e){this.enabled!==!1&&e.preventDefault()}function Au(e){e.key===`Control`&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}function ju(e){e.key===`Control`&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}var Mu=class extends Ln{constructor(e=document.createElement(`div`)){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position=`absolute`,this.element.style.userSelect=`none`,this.element.setAttribute(`draggable`,!1),this.center=new B(.5,.5),this.rotation2D=0,this.addEventListener(`removed`,function(){this.traverse(function(e){e.element&&e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this.rotation2D=e.rotation2D,this}},Nu=new V,Pu=new un,Fu=new un,Iu=new V,Lu=new V,Ru=class{constructor(e={}){let t=this,n,r,i,a,o={objects:new WeakMap},s=e.element===void 0?document.createElement(`div`):e.element;s.style.overflow=`hidden`,this.domElement=s,this.sortObjects=!0,this.getSize=function(){return{width:n,height:r}},this.render=function(e,t){e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),Pu.copy(t.matrixWorldInverse),Fu.multiplyMatrices(t.projectionMatrix,Pu),l(e,e,t),this.sortObjects&&f(e)},this.setSize=function(e,t){n=e,r=t,i=n/2,a=r/2,s.style.width=e+`px`,s.style.height=t+`px`};function c(e){e.isCSS2DObject&&(e.element.style.display=`none`);for(let t=0,n=e.children.length;t<n;t++)c(e.children[t])}function l(e,n,r){if(e.visible===!1){c(e);return}if(e.isCSS2DObject){Nu.setFromMatrixPosition(e.matrixWorld),Nu.applyMatrix4(Fu);let c=Nu.z>=-1&&Nu.z<=1&&e.layers.test(r.layers)===!0,l=e.element;if(l.style.display=c===!0?``:`none`,c===!0){e.onBeforeRender(t,n,r);let o=100*e.center.x,c=100*e.center.y;l.style.transformOrigin=`${o}% ${c}%`;let u=-e.rotation2D,d=Nu.x*i+i,f=-Nu.y*a+a;l.style.transform=`translate(${-o}%, ${-c}%) translate(${d}px, ${f}px) rotate(${u}rad)`,l.parentNode!==s&&s.appendChild(l),e.onAfterRender(t,n,r)}let d={distanceToCameraSquared:u(r,e)};o.objects.set(e,d)}for(let t=0,i=e.children.length;t<i;t++)l(e.children[t],n,r)}function u(e,t){return Iu.setFromMatrixPosition(e.matrixWorld),Lu.setFromMatrixPosition(t.matrixWorld),Iu.distanceToSquared(Lu)}function d(e){let t=[];return e.traverseVisible(function(e){e.isCSS2DObject&&t.push(e)}),t}function f(e){let t=d(e).sort(function(e,t){return e.renderOrder===t.renderOrder?o.objects.get(e).distanceToCameraSquared-o.objects.get(t).distanceToCameraSquared:t.renderOrder-e.renderOrder}),n=t.length;for(let e=0,r=t.length;e<r;e++)t[e].element.style.zIndex=n-e}}},zu={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`},Bu=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},Vu=new ho(-1,1,1,-1,0,1),Hu=new class extends Br{constructor(){super(),this.setAttribute(`position`,new W([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new W([0,2,0,0,2,0],2))}},Uu=class{constructor(e){this._mesh=new ui(Hu,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Vu)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},Wu=class extends Bu{constructor(e,t=`tDiffuse`){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Oa?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ta.clone(e.uniforms),this.material=new Oa({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Uu(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},Gu=class extends Bu{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},Ku=class extends Bu{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},qu=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new B);this._width=n.width,this._height=n.height,t=new sn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:D}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Wu(zu),this.copyPass.material.blending=0,this.timer=new So}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}Gu!==void 0&&(r instanceof Gu?n=!0:r instanceof Ku&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new B);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},Ju=class extends Bu{constructor(e,t,n=null,r=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new U}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},Yu={name:`LuminosityHighPassShader`,uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new U(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`},Xu=class e extends Bu{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e===void 0?new B(256,256):new B(e.x,e.y),this.clearColor=new U(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new sn(i,a,{type:D,depthBuffer:!1}),this.renderTargetBright.texture.name=`UnrealBloomPass.bright`,this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new sn(i,a,{type:D,depthBuffer:!1});t.texture.name=`UnrealBloomPass.h`+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let n=new sn(i,a,{type:D,depthBuffer:!1});n.texture.name=`UnrealBloomPass.v`+e,n.texture.generateMipmaps=!1,this.renderTargetsVertical.push(n),i=Math.round(i/2),a=Math.round(a/2)}let o=Yu;this.highPassUniforms=Ta.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Oa({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let s=[6,10,14,18,22];i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(s[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new B(1/i,1/a),i=Math.round(i/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Ta.clone(zu.uniforms),this.blendMaterial=new Oa({uniforms:this.copyUniforms,vertexShader:zu.vertexShader,fragmentShader:zu.fragmentShader,premultipliedAlpha:!0,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new U,this._oldClearAlpha=1,this._basic=new Qr,this._fsQuad=new Uu(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(n,r),this.renderTargetsVertical[e].setSize(n,r),this.separableBlurMaterials[e].uniforms.invSize.value=new B(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,n,r,i,a){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let s=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this._fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[n]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[n]),t.clear(),this._fsQuad.render(t),s=this.renderTargetsVertical[n];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(r),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(n*n))/n);let r=[],i=[];for(let n=1;n<e;n+=2){let a=t[n],o=n+1<e?t[n+1]:0,s=a+o;r.push((n*a+(n+1)*o)/s),i.push(s)}return new Oa({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new B(.5,.5)},direction:{value:new B(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:r},gaussianWeights:{value:i}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new Oa({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};Xu.BlurDirectionX=new B(1,0),Xu.BlurDirectionY=new B(0,1);var Zu={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`},Qu=class extends Bu{constructor(){super(),this.isOutputPass=!0,this.uniforms=Ta.clone(Zu.uniforms),this.material=new ka({name:Zu.name,uniforms:this.uniforms,vertexShader:Zu.vertexShader,fragmentShader:Zu.fragmentShader}),this._fsQuad=new Uu(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},qt.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING=``:this._toneMapping===7?this.material.defines.NEUTRAL_TONE_MAPPING=``:this._toneMapping===5&&(this.material.defines.CUSTOM_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},$u=(e,t)=>[{key:`url`,label:e,type:`text`,placeholder:t},{key:`method`,label:`Método`,type:`select`,options:[`POST`,`GET`,`PUT`,`PATCH`,`DELETE`],default:`POST`},{key:`headers`,label:`Cabeceras (JSON, opcional)`,type:`textarea`,placeholder:`{"Authorization": "Bearer ..."}`},{key:`body`,label:`Cuerpo (opcional). Usa {{input}}, {{from}}, {{agent}}`,type:`textarea`,placeholder:`{"mensaje": "{{input}}"}  — vacío = JSON estándar con agent/from/text`}],ed={claude:{label:`Claude API`,short:`Claude`,color:`#e8600c`,fields:[{key:`model`,label:`Modelo`,type:`select`,options:[`claude-haiku-4-5`,`claude-sonnet-5-5`],default:`claude-haiku-4-5`},{key:`system`,label:`Instrucciones del agente (system prompt)`,type:`textarea`,placeholder:`Eres el agente de marketing. Escribes copies cortos y directos…`},{key:`apiKey`,label:`API key propia (opcional: si no, usa la del cerebro)`,type:`password`,placeholder:`sk-ant-...`}]},n8n:{label:`n8n (webhook)`,short:`n8n`,color:`#ffffff`,fields:$u(`URL del Webhook de n8n`,`https://tu-n8n.com/webhook/...`)},make:{label:`Make (webhook)`,short:`Make`,color:`#b8b8b8`,fields:$u(`URL del Webhook`,`https://hook.make.com/...`)},zapier:{label:`Zapier (webhook)`,short:`Zapier`,color:`#fde8dc`,fields:$u(`URL del Catch Hook`,`https://hooks.zapier.com/...`)},openai:{label:`OpenAI API`,short:`OpenAI`,color:`#757575`,fields:[{key:`apiKey`,label:`API key`,type:`password`,placeholder:`sk-...`},{key:`model`,label:`Modelo`,type:`text`,placeholder:`gpt-4o-mini`},{key:`system`,label:`Instrucciones del agente`,type:`textarea`,placeholder:``}]},webhook:{label:`HTTP / API genérica`,short:`API`,color:`#ff9a52`,fields:$u(`Endpoint`,`https://api.midominio.com/agent  (en GET puedes usar ?q={{input}})`)}};function td(e){return ed[e]||ed.webhook}function nd(e){let t=e.config||{};return e.provider===`claude`?!0:e.provider===`openai`?!!t.apiKey:!!t.url}var rd=30,id=2.6,ad=7,od=new V(0,22,0),sd=new V(0,12,-62);function cd(e,t){let n=document.createElement(`div`);return n.className=t,n.innerHTML=e,new Mu(n)}function ld(e){let t=e.find(e=>!e.parentId)||e[0],n=n=>e.filter(r=>r.parentId===n||n===t.id&&r!==t&&!e.some(e=>e.id===r.parentId)),r=e=>{let t=n(e.id);return t.length?t.reduce((e,t)=>e+r(t),0):1},i=new Map,a=(e,t,o,s)=>{let c=(o+s)/2,l=t*rd;i.set(e.id,{x:Math.cos(c)*l,z:Math.sin(c)*l,depth:t,angle:c});let u=n(e.id),d=u.reduce((e,t)=>e+r(t),0),f=o;for(let e of u){let n=(s-o)*r(e)/d;a(e,t+1,f,f+n),f+=n}};return a(t,0,-Math.PI/2,Math.PI*1.5),{root:t,pos:i}}function ud(e,{onSelect:t}={}){let n=new cu({antialias:!0});n.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.shadowMap.enabled=!0,n.shadowMap.type=2,e.appendChild(n.domElement);let r=new Ru;r.domElement.className=`labels-layer`,e.appendChild(r.domElement);let i=new qn;i.background=new U(`#0d0d0d`),i.fog=new Kn(`#0d0d0d`,90,220);let a=new mo(50,1,.1,500);a.position.set(0,85,105);let o=new yu(a,n.domElement);o.enableDamping=!0,o.maxPolarAngle=Math.PI*.47,o.minDistance=8,o.maxDistance=180,o.autoRotate=!0,o.autoRotateSpeed=.35;let s=new qu(n);s.addPass(new Ju(i,a));let c=new Xu(new B(1,1),.7,.45,.78);s.addPass(c),s.addPass(new Qu),i.add(new to(`#ffffff`,`#0d0d0d`,1));let l=new _o(`#ffffff`,1.4);l.position.set(40,80,30),l.castShadow=!0,l.shadow.mapSize.set(2048,2048),Object.assign(l.shadow.camera,{left:-90,right:90,top:90,bottom:-90,far:200}),i.add(l);let u=new ui(new Li(260,64),new Aa({color:`#111111`,roughness:.95}));u.rotation.x=-Math.PI/2,u.receiveShadow=!0,i.add(u);let d=new Ho(400,100,`#2a2a2a`,`#1a1a1a`);d.position.y=.01,i.add(d);let f=new Rn;f.position.copy(od);let p=new ui(new pa(1.1,1),new Qr({color:`#ffffff`,wireframe:!0}));f.add(p);let m=cd(`Tú`,`label user-label`);m.position.set(0,2,0),f.add(m),i.add(f);let h=new Rn;h.position.copy(sd);let g=new ui(new _a(3,18,12),new Qr({color:`#e8600c`,wireframe:!0}));h.add(g);let _=new ui(new va(4.4,.05,8,64),new Qr({color:`#ffffff`}));_.rotation.x=Math.PI/2.4,h.add(_);let v=cd(`APIs externas`,`label user-label ext-label`);v.position.set(0,5,0),h.add(v),i.add(h);let y=new Set,b=new Rn;i.add(b);let x=new Map,S=new Map,C=[],w=[],T=[],E=[],D=1,O=null;function ee(e,n,r,i){let a=new Rn;a.position.set(n.x,0,n.z);let o=r.length,s=Math.max(1,Math.ceil(Math.sqrt(o))),c=Math.max(1,Math.ceil(o/s)),l=Math.max(i?18:12,s*6+5),u=Math.max(i?18:12,c*5.5+5),d=new U(e.color||`#e8600c`);i||(a.rotation.y=-n.angle-Math.PI/2);let f=new ui(new Fi(l,.4,u),new Aa({color:`#161616`,roughness:.6,metalness:.2}));f.position.y=.2,f.receiveShadow=!0,f.userData.officeId=e.id,a.add(f),w.push(f);let p=new ui(new Fi(l+.4,.12,u+.4),new Qr({color:d}));p.position.y=.06,a.add(p);let m=new ja({color:d,transparent:!0,opacity:.16,roughness:.1,metalness:0,side:2,depthWrite:!1}),h=(e,t,n,r)=>{let i=new ui(new ha(e,id),m);i.position.set(t,1.7000000000000002,n),i.rotation.y=r,a.add(i);let o=new ui(new Fi(e,.08,.08),new Qr({color:d}));o.position.set(t,3,n),o.rotation.y=r,a.add(o)};h(l,0,-u/2,0),h(u,-l/2,0,Math.PI/2),h(u,l/2,0,Math.PI/2);let g=new ui(new ma(i?1.4:.8),new Qr({color:d,wireframe:!0}));g.position.set(0,ad,0),a.add(g);let _=new ui(new Ri(.05,.05,6.6,6),new Qr({color:d,transparent:!0,opacity:.35}));if(_.position.y=.4+6.6/2,a.add(_),i){let e=new ui(new va(4.5,.06,8,64),new Qr({color:`#e8600c`}));e.rotation.x=Math.PI/2,e.position.y=ad,e.userData.spin=.4,a.add(e);let t=e.clone();t.scale.setScalar(.7),t.userData.spin=-.7,a.add(t)}let v=cd(`<span class="dot" style="background:${e.color}"></span>${e.name}`,`label office-label`);v.position.set(0,4.2,-u/2),v.element.dataset.officeId=e.id,v.element.addEventListener(`click`,()=>t?.({type:`office`,id:e.id})),a.add(v),r.forEach((t,n)=>{let r=n%s,i=Math.floor(n/s),o=(r-(s-1)/2)*6,l=(i-(c-1)/2)*5.5+.5;a.add(te(t,e,o,l))}),b.add(a),a.updateMatrixWorld(!0),S.set(e.id,{group:a,hub:g,hubWorld:g.getWorldPosition(new V),color:d,parentId:e.parentId,base:f})}function te(e,n,r,i){let a=td(e.provider),o=new U(a.color),s=new Rn;s.position.set(r,.4,i);let c=new ui(new Fi(2.4,.9,1.2),new Aa({color:`#2a2a2a`,roughness:.5}));c.position.set(0,.45,-.9),c.castShadow=!0,s.add(c);let l=new ui(new Fi(1.4,.8,.06),new Qr({color:o}));l.position.set(0,1.35,-1.25),s.add(l);let u=new ui(new Ii(.42,.7,6,14),new Aa({color:o,roughness:.35,metalness:.1,emissive:o,emissiveIntensity:.15}));u.position.set(0,.95,.35),u.castShadow=!0,s.add(u);let d=new ui(new _a(.36,20,16),new Aa({color:`#ffffff`,roughness:.3}));d.position.set(0,1.85,.35),d.castShadow=!0,s.add(d);let f=new ui(new Fi(.5,.12,.1),new Qr({color:`#0d0d0d`}));f.position.set(0,1.88,.05),s.add(f);let p=new ui(new ga(.75,.95,40),new Qr({color:o,side:2,transparent:!0,opacity:.7}));p.rotation.x=-Math.PI/2,p.position.set(0,.03,.35),s.add(p);let m=new ui(new ga(1.1,1.25,40),new Qr({color:`#ffffff`,side:2}));m.rotation.x=-Math.PI/2,m.position.set(0,.04,.35),m.visible=!1,s.add(m);let h=new Ln;h.position.set(0,2.5,.35),s.add(h);let g=cd(`<b>${e.name}</b><span class="prov" style="--c:${a.color}">${a.short}${e.live?` · live`:``}</span>`,`label agent-label`);return g.position.set(0,2.9,.35),g.element.addEventListener(`click`,()=>t?.({type:`agent`,id:e.id})),s.add(g),[c,u,d,l].forEach(t=>{t.userData.agentId=e.id,w.push(t)}),x.set(e.id,{id:e.id,group:s,halo:p,body:u,head:d,screen:l,select:m,anchor:h,officeId:n.id,pulse:0,phase:Math.random()*6,tag:g}),s}function k(e,t,n){let r=e.clone().lerp(t,.5);return r.y+=n,new da(e.clone(),r,t.clone())}function ne(){C=[];for(let[e,t]of S){let n=S.get(t.parentId);if(!n)continue;let r=k(n.hubWorld,t.hubWorld,6),i=new ui(new ya(r,48,.07,6,!1),new Qr({color:t.color,transparent:!0,opacity:.35}));b.add(i);let a=n.hubWorld.clone().setY(.05),o=t.hubWorld.clone().setY(.05),s=new Ei(new Br().setFromPoints([a,o]),new Pa({color:t.color,dashSize:1,gapSize:1,transparent:!0,opacity:.4}));s.computeLineDistances(),b.add(s),C.push({curve:r,color:t.color,id:e})}}function A(){i.remove(b),b.traverse(e=>{e.geometry?.dispose?.(),e.material&&!Array.isArray(e.material)&&e.material.dispose()}),b=new Rn,i.add(b),x=new Map,S=new Map,w=[];for(let e of T.splice(0))le(e);for(let e of E.splice(0))i.remove(e.mesh)}function re(e){A();let{root:t,pos:n}=ld(e.offices);for(let r of e.offices){let i=n.get(r.id);i&&ee(r,i,e.agents.filter(e=>e.officeId===r.id),r.id===t.id)}ne(),O&&_e(O)}function j(e){if(e===`user`)return od.clone();if(e===`external`)return sd.clone();let t=x.get(e);return t?t.anchor.getWorldPosition(new V):null}function ie(e){let t=[],n=e,r=new Set;for(;n&&S.has(n)&&!r.has(n);)r.add(n),t.push(n),n=S.get(n).parentId;return t}function ae(e,t){let n=j(e),r=j(t);if(!n||!r)return null;let i=[n],a=x.get(e)?.officeId||null,o=x.get(t)?.officeId||null;if(a&&o){let e=ie(a),t=ie(o),s=e.find(e=>t.includes(e)),c=[...e.slice(0,e.indexOf(s)+1),...t.slice(0,t.indexOf(s)).reverse()];if(c.length===1){let e=n.clone().lerp(r,.5);e.y+=2+n.distanceTo(r)*.25,i.push(e)}else c.forEach(e=>i.push(S.get(e).hubWorld.clone()))}else{let e=a||o;e&&i.push(S.get(e).hubWorld.clone())}return i.push(r),oe(i)}function oe(e){return e.filter((t,n)=>n===0||t.distanceTo(e[n-1])>.1)}function se(e){let t=[e[0]];for(let n=1;n<e.length;n++){let r=e[n-1],i=e[n],a=r.distanceTo(i),o=r.clone().lerp(i,.5);o.y+=Math.min(10,a*.18),t.push(o,i)}return new Yi(t,!1,`centripetal`)}function ce(e,t,{color:n=`#ffffff`,onArrive:r,size:a=.38}={}){let o=ae(e,t);if(!o||o.length<2)return r?.(),!1;let s=se(o),c=new U(n),l=new ui(new _a(a,16,12),new Qr({color:c.clone().multiplyScalar(2.2)})),u=[];for(let e=1;e<=8;e++){let t=new ui(new _a(a*(1-e/10),10,8),new Qr({color:c,transparent:!0,opacity:.6*(1-e/9)}));u.push(t),i.add(t)}let d=new Ei(new Br().setFromPoints(s.getPoints(120)),new vi({color:c,transparent:!0,opacity:.5}));i.add(l,d);let f=s.getLength();return T.push({curve:s,head:l,trail:u,line:d,t:0,duration:1.2+f/28,onArrive:r,toId:t,fromId:e,fade:-1}),ue(e,.6),!0}function le(e){[e.head,e.line,...e.trail].forEach(e=>{i.remove(e),e.geometry.dispose(),e.material.dispose()})}function ue(e,t=1){let n=x.get(e);n&&(n.pulse=Math.max(n.pulse,t)),e===`user`&&(p.userData.pulse=1),e===`external`&&(g.userData.pulse=1)}function de(){if(!C.length)return;let e=C[Math.floor(Math.random()*C.length)],t=new ui(new _a(.14,8,6),new Qr({color:e.color}));i.add(t),E.push({mesh:t,curve:e.curve,t:0,dir:Math.random()<.5?1:-1,speed:.25+Math.random()*.25})}let M=new Lo,fe=new B,pe=null;n.domElement.addEventListener(`pointerdown`,e=>{pe={x:e.clientX,y:e.clientY}}),n.domElement.addEventListener(`pointerup`,e=>{if(!pe||Math.hypot(e.clientX-pe.x,e.clientY-pe.y)>5)return;let r=n.domElement.getBoundingClientRect();fe.set((e.clientX-r.left)/r.width*2-1,-((e.clientY-r.top)/r.height)*2+1),M.setFromCamera(fe,a);let i=M.intersectObjects(w,!1)[0];if(!i)return t?.(null);let{agentId:o,officeId:s}=i.object.userData;o?t?.({type:`agent`,id:o}):s&&t?.({type:`office`,id:s})}),n.domElement.addEventListener(`pointerdown`,()=>o.autoRotate=!1,{once:!0});let me=null;function he(e,t){let n=a.position.clone().sub(o.target).normalize();n.y<.35&&(n.y=.35),n.normalize(),me={fromT:o.target.clone(),toT:e.clone(),fromP:a.position.clone(),toP:e.clone().add(n.multiplyScalar(t)),t:0},o.autoRotate=!1}function ge(e){if(!e)return he(new V(0,0,0),130);if(e.type===`agent`){let t=x.get(e.id);t&&he(t.group.getWorldPosition(new V),16)}else{let t=S.get(e.id);t&&he(t.group.position.clone(),34)}}function _e(e){O=e;for(let[t,n]of x)n.select.visible=t===e}let ve=new Bo,ye=new V,be=0;function xe(){let t=e.clientWidth,i=e.clientHeight;n.setSize(t,i),r.setSize(t,i),s.setSize(t,i),c.resolution.set(t,i),a.aspect=t/i,a.updateProjectionMatrix()}window.addEventListener(`resize`,xe),xe();function Se(){let e=Math.min(ve.getDelta(),.05),t=e*D,n=ve.elapsedTime;if(me){me.t=Math.min(1,me.t+e*1.4);let t=1-(1-me.t)**3;o.target.lerpVectors(me.fromT,me.toT,t),a.position.lerpVectors(me.fromP,me.toP,t),me.t>=1&&(me=null)}o.update();for(let t of x.values()){t.pulse=Math.max(0,t.pulse-e*.9),y.has(t.id)&&(t.pulse=Math.max(t.pulse,.45+Math.sin(n*6)*.25));let r=Math.sin(n*2+t.phase)*.05;t.body.position.y=.95+r,t.head.position.y=1.85+r,t.body.material.emissiveIntensity=.15+t.pulse*1.6,t.halo.scale.setScalar(1+t.pulse*.8),t.halo.material.opacity=.5+t.pulse*.5,t.tag.element.classList.toggle(`active`,t.pulse>.2),t.group.getWorldPosition(ye),t.tag.element.classList.toggle(`far`,ye.distanceTo(a.position)>95&&t.pulse<.2)}for(let t of S.values())t.hub.rotation.y+=e*.8;b.traverse(t=>{t.userData.spin&&(t.rotation.z+=e*t.userData.spin)}),g.rotation.y+=e*.3,_.rotation.z+=e*.5,g.userData.pulse=Math.max(0,(g.userData.pulse||0)-e),g.scale.setScalar(1+g.userData.pulse*.3),p.rotation.y+=e*.6,p.userData.pulse=Math.max(0,(p.userData.pulse||0)-e),p.scale.setScalar(1+p.userData.pulse*.5);for(let n=T.length-1;n>=0;n--){let r=T[n];if(r.fade>=0){r.fade+=e*1.5,r.line.material.opacity=Math.max(0,.5*(1-r.fade)),r.fade>=1&&(le(r),T.splice(n,1));continue}r.t=Math.min(1,r.t+t/r.duration);let i=r.t<.5?2*r.t*r.t:1-(-2*r.t+2)**2/2;r.head.position.copy(r.curve.getPointAt(i)),r.trail.forEach((e,t)=>e.position.copy(r.curve.getPointAt(Math.max(0,i-(t+1)*.012)))),r.t>=1&&(r.fade=0,r.head.visible=!1,r.trail.forEach(e=>e.visible=!1),ue(r.toId,1),r.onArrive?.())}be+=t,be>.35&&(be=0,de());for(let e=E.length-1;e>=0;e--){let n=E[e];if(n.t+=t*n.speed,n.t>=1){i.remove(n.mesh),n.mesh.geometry.dispose(),n.mesh.material.dispose(),E.splice(e,1);continue}n.mesh.position.copy(n.curve.getPointAt(n.dir>0?n.t:1-n.t))}s.render(),r.render(i,a),requestAnimationFrame(Se)}return requestAnimationFrame(Se),{rebuild:re,sendPacket:ce,focus:ge,setSelected:_e,pulse:ue,setTimeScale:e=>D=e,setAutoRotate:e=>o.autoRotate=e,hasAgent:e=>x.has(e),setWorking:(e,t)=>t?y.add(e):y.delete(e)}}var dd={marketing:[`Redacta 3 variantes de copy para la campaña Q4`,`Genera ideas de contenido para la semana`,`Analiza el CTR del último email`],redes:[`Programa 5 posts para Instagram y LinkedIn`,`Responde los comentarios pendientes`,`Prepara el calendario editorial`],ventas:[`Califica los 12 leads nuevos`,`Agenda demo con el lead de ACME`,`Actualiza el pipeline en el CRM`],soporte:[`Resuelve el ticket #4821 (facturación)`,`Clasifica los tickets entrantes`,`Resume las quejas de la semana`],desarrollo:[`Revisa el PR #212 (checkout)`,`Despliega la versión 2.4 a staging`,`Corre los tests de regresión`],project:[`Planifica el sprint 18`,`Actualiza el estado del roadmap`,`Detecta tareas bloqueadas`],principal:[`Envía el reporte semanal`,`Prioriza los objetivos del mes`,`Coordina el lanzamiento del producto`],default:[`Procesa la nueva solicitud`,`Genera un resumen del estado`,`Valida los datos recibidos`]},fd=[`Listo ✅ tarea completada`,`Hecho, te dejo el resumen en el canal`,`Completado en 2.3s · 0 errores`,`Recibido, en proceso… ✔ terminado`,`OK, datos sincronizados`,`Entregado. ¿Algo más?`],pd=`#e8600c`,md=`#ffffff`,hd=e=>e[Math.floor(Math.random()*e.length)];function gd(e){let t=(e?.name||``).toLowerCase();return dd[Object.keys(dd).find(e=>t.includes(e))||(t.includes(`pm`)?`project`:t.includes(`social`)?`redes`:`default`)]}function _d({store:e,world:t,log:n}){let r=!0,i=1,a=0,o=1.5,s=new Map,c=0,l=e=>(s.has(e)||s.set(e,{sent:0,received:0}),s.get(e)),u=t=>t===`user`?`Tú`:e.agent(t)?.name||`?`,d=t=>t===`user`?`#ffffff`:td(e.agent(t)?.provider).color;function f(r,i,a,{reply:o=!0}={}){let s=c;return new Promise(f=>{let m=e.agent(i);if(s!==c||!m||r!==`user`&&!e.agent(r))return f(null);l(r).sent++,n({kind:`task`,from:u(r),to:u(i),text:a,color:d(r)}),t.sendPacket(r,i,{color:pd,onArrive:async()=>{if(l(i).received++,!o||(await p(400+Math.random()*900),s!==c))return f(null);let e=hd(fd);l(i).sent++,n({kind:`reply`,from:m.name,to:u(r),text:e,color:d(i)}),t.sendPacket(i,r,{color:md,size:.28,onArrive:()=>f(e)})}})})}let p=e=>new Promise(t=>setTimeout(t,e/Math.max(i,.1)));function m(){let{agents:t,offices:n}=e.get();if(t.length<2)return;let r=hd(t),i=e.office(r.officeId),a=Math.random(),o;o=a<.45?t.filter(t=>e.office(t.officeId)?.parentId===r.officeId):a<.75?t.filter(e=>e.officeId===r.officeId):t.filter(e=>e.officeId===i?.parentId),o=o.filter(e=>e.id!==r.id),o.length||(o=t.filter(e=>e.id!==r.id));let s=hd(o),c=n.find(e=>e.id===s.officeId);f(r.id,s.id,hd(gd(c)))}async function h(){let t=c,r=(...e)=>t===c?f(...e):Promise.resolve(null),i=e.rootOffice(),a=e.agentsIn(i.id)[0];if(!a)return n({kind:`info`,text:`Añade un agente a la Oficina Principal para ejecutar el flujo.`});n({kind:`info`,text:`▶ Flujo "Lanzamiento de producto" iniciado`}),await r(`user`,a.id,`Lancemos el nuevo producto este viernes`);let o=e.children(i.id);await Promise.all(o.map(async(t,n)=>{await p(n*350);let i=e.agentsIn(t.id)[0];if(!i)return;await r(a.id,i.id,hd(gd(t)));let o=[...e.agentsIn(t.id).slice(1),...e.children(t.id).flatMap(t=>e.agentsIn(t.id))];await Promise.all(o.map(t=>r(i.id,t.id,hd(gd(e.office(t.officeId))))))})),t===c&&n({kind:`info`,text:`✔ Flujo completado: todos los departamentos reportaron`})}async function g(){let t=c,r=(...e)=>t===c?f(...e):Promise.resolve(null),i=e.rootOffice(),a=e.agentsIn(i.id)[0];if(!a)return;n({kind:`info`,text:`▶ Reporte semanal: todos los agentes reportan al orquestador`});let o=e.get().agents.filter(e=>e.id!==a.id);await Promise.all(o.map(async(e,t)=>{await p(t*180),await r(e.id,a.id,`Reporte semanal de ${e.name}`,{reply:!1})})),await r(a.id,`user`,`Resumen ejecutivo listo 📊`,{reply:!1})}return{sendTask:f,cascade:h,report:g,stats:e=>l(e),bump:(e,t)=>e!==`user`&&l(e)[t]++,cancel:()=>c++,isRunning:()=>r,setRunning:e=>r=e,setSpeed(e){i=e,t.setTimeScale(e)},tick(e){r&&(a+=e*i,a>=o&&(a=0,o=1+Math.random()*2.2,m()))}}}function q(e,t,n,r,i){if(r===`m`)throw TypeError(`Private method is not writable`);if(r===`a`&&!i)throw TypeError(`Private accessor was defined without a setter`);if(typeof t==`function`?e!==t||!i:!t.has(e))throw TypeError(`Cannot write private member to an object whose class did not declare it`);return r===`a`?i.call(e,n):i?i.value=n:t.set(e,n),n}function J(e,t,n,r){if(n===`a`&&!r)throw TypeError(`Private accessor was defined without a getter`);if(typeof t==`function`?e!==t||!r:!t.has(e))throw TypeError(`Cannot read private member from an object whose class did not declare it`);return n===`m`?r:n===`a`?r.call(e):r?r.value:t.get(e)}function vd(e){return typeof e==`object`&&!!e&&(`name`in e&&e.name===`AbortError`||`message`in e&&String(e.message).includes(`FetchRequestCanceledException`))}var yd=e=>{if(e instanceof Error)return e;if(typeof e==`object`&&e){try{let t=Object.prototype.toString.call(e);if(t===`[object Error]`||t===`[object DOMException]`){let t=Error(e.message,e.cause?{cause:e.cause}:{});return e.stack&&(t.stack=e.stack),e.cause&&!t.cause&&(t.cause=e.cause),e.name&&(t.name=e.name),t}}catch{}try{return Error(JSON.stringify(e))}catch{}}return Error(e)},Y=(()=>{class e extends Error{}return e})(),bd=class e extends Y{constructor(t,n,r,i,a){super(`${e.makeMessage(t,n,r)}`),this.status=t,this.headers=i,this.requestID=i?.get(`request-id`),this.workspaceID=i?.get(`anthropic-workspace-id`),this.error=n,this.type=a??null}static makeMessage(e,t,n){let r=t?.message?typeof t.message==`string`?t.message:JSON.stringify(t.message):t?JSON.stringify(t):n;return e&&r?`${e} ${r}`:e?`${e} status code (no body)`:r||`(no status code or body)`}static generate(t,n,r,i){if(!t||!i)return new Sd({message:r,cause:yd(n)});let a=n,o=a?.error?.type;return t===400?new Td(t,a,r,i,o):t===401?new Ed(t,a,r,i,o):t===403?new Dd(t,a,r,i,o):t===404?new Od(t,a,r,i,o):t===409?new kd(t,a,r,i,o):t===422?new Ad(t,a,r,i,o):t===429?new jd(t,a,r,i,o):t>=500?new Md(t,a,r,i,o):new e(t,a,r,i,o)}},xd=class extends bd{constructor({message:e}={}){super(void 0,void 0,e||`Request was aborted.`,void 0)}},Sd=class extends bd{constructor({message:e,cause:t}){super(void 0,void 0,e||`Connection error.`,void 0),t&&(this.cause=t)}},Cd=class extends Sd{constructor({message:e}={}){super({message:e??`Request timed out.`})}},wd=class extends Y{constructor(e,{cause:t}={}){super(e??`Retryable error.`),t!==void 0&&(this.cause=t)}},Td=class extends bd{},Ed=class extends bd{},Dd=class extends bd{},Od=class extends bd{},kd=class extends bd{},Ad=class extends bd{},jd=class extends bd{},Md=class extends bd{},Nd=/^[a-z][a-z0-9+.-]*:/i,Pd=e=>Nd.test(e),Fd=e=>(Fd=Array.isArray,Fd(e)),Id=Fd;function Ld(e){return typeof e==`object`?e??{}:{}}function Rd(e){if(!e)return!0;for(let t in e)return!1;return!0}function zd(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Bd(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}var Vd=(e,t)=>{if(typeof t!=`number`||!Number.isInteger(t))throw new Y(`${e} must be an integer`);if(t<0)throw new Y(`${e} must be a positive integer`);return t},Hd=e=>{try{return JSON.parse(e)}catch{return}},Ud=(e,t)=>new Promise(n=>{if(t?.aborted)return n();let r=()=>{clearTimeout(i),n()},i=setTimeout(()=>{t?.removeEventListener(`abort`,r),n()},e);t?.addEventListener(`abort`,r,{once:!0})}),Wd=`0.129.0`,Gd=()=>typeof window<`u`&&window.document!==void 0&&typeof navigator<`u`;function Kd(){return typeof Deno<`u`&&Deno.build!=null?`deno`:typeof EdgeRuntime<`u`?`edge`:Object.prototype.toString.call(globalThis.process===void 0?0:globalThis.process)===`[object process]`?`node`:`unknown`}var qd=()=>{let e=Kd();if(e===`deno`)return{"X-Stainless-Lang":`js`,"X-Stainless-Package-Version":Wd,"X-Stainless-OS":Xd(Deno.build.os),"X-Stainless-Arch":Yd(Deno.build.arch),"X-Stainless-Runtime":`deno`,"X-Stainless-Runtime-Version":typeof Deno.version==`string`?Deno.version:Deno.version?.deno??`unknown`};if(typeof EdgeRuntime<`u`)return{"X-Stainless-Lang":`js`,"X-Stainless-Package-Version":Wd,"X-Stainless-OS":`Unknown`,"X-Stainless-Arch":`other:${EdgeRuntime}`,"X-Stainless-Runtime":`edge`,"X-Stainless-Runtime-Version":globalThis.process?.version??`unknown`};if(e===`node`)return{"X-Stainless-Lang":`js`,"X-Stainless-Package-Version":Wd,"X-Stainless-OS":Xd(globalThis.process.platform??`unknown`),"X-Stainless-Arch":Yd(globalThis.process.arch??`unknown`),"X-Stainless-Runtime":`node`,"X-Stainless-Runtime-Version":globalThis.process.version??`unknown`};let t=Jd();return t?{"X-Stainless-Lang":`js`,"X-Stainless-Package-Version":Wd,"X-Stainless-OS":`Unknown`,"X-Stainless-Arch":`unknown`,"X-Stainless-Runtime":`browser:${t.browser}`,"X-Stainless-Runtime-Version":t.version}:{"X-Stainless-Lang":`js`,"X-Stainless-Package-Version":Wd,"X-Stainless-OS":`Unknown`,"X-Stainless-Arch":`unknown`,"X-Stainless-Runtime":`unknown`,"X-Stainless-Runtime-Version":`unknown`}};function Jd(){if(typeof navigator>`u`||!navigator)return null;for(let{key:e,pattern:t}of[{key:`edge`,pattern:/Edge(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:`ie`,pattern:/MSIE(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:`ie`,pattern:/Trident(?:.*rv\:(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:`chrome`,pattern:/Chrome(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:`firefox`,pattern:/Firefox(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:`safari`,pattern:/(?:Version\W+(\d+)\.(\d+)(?:\.(\d+))?)?(?:\W+Mobile\S*)?\W+Safari/}]){let n=t.exec(navigator.userAgent);if(n)return{browser:e,version:`${n[1]||0}.${n[2]||0}.${n[3]||0}`}}return null}var Yd=e=>e===`x32`?`x32`:e===`x86_64`||e===`x64`?`x64`:e===`arm`?`arm`:e===`aarch64`||e===`arm64`?`arm64`:e?`other:${e}`:`unknown`,Xd=e=>(e=e.toLowerCase(),e.includes(`ios`)?`iOS`:e===`android`?`Android`:e===`darwin`?`MacOS`:e===`win32`?`Windows`:e===`freebsd`?`FreeBSD`:e===`openbsd`?`OpenBSD`:e===`linux`?`Linux`:e?`Other:${e}`:`Unknown`),Zd,Qd=()=>Zd??=qd(),$d=new WeakMap,ef=typeof globalThis.FinalizationRegistry==`function`?new globalThis.FinalizationRegistry(e=>af(e)):null;function tf(e,t){return()=>e.removeEventListener(`abort`,t)}function nf(e,t,n){$d.set(e,tf(t,n))}function rf(e,t){$d.has(t)&&ef?.register(e,t,t)}function af(e){let t=$d.get(e);t&&($d.delete(e),ef?.unregister(e),t())}function of(){if(typeof fetch<`u`)return fetch;throw Error("`fetch` is not defined as a global; Either pass `fetch` to the client, `new Anthropic({ fetch })` or polyfill the global, `globalThis.fetch = fetch`")}function sf(...e){let t=globalThis.ReadableStream;if(t===void 0)throw Error("`ReadableStream` is not defined as a global; You will need to polyfill it, `globalThis.ReadableStream = ReadableStream`");return new t(...e)}function cf(e){let t=Symbol.asyncIterator in e?e[Symbol.asyncIterator]():e[Symbol.iterator]();return sf({start(){},async pull(e){let{done:n,value:r}=await t.next();n?e.close():e.enqueue(r)},async cancel(){await t.return?.()}})}function lf(e){if(e[Symbol.asyncIterator])return e;let t=e.getReader();return{async next(){try{let e=await t.read();return e?.done&&t.releaseLock(),e}catch(e){throw t.releaseLock(),e}},async return(){let e=t.cancel();return t.releaseLock(),await e,{done:!0,value:void 0}},[Symbol.asyncIterator](){return this}}}async function uf(e){if(typeof e!=`object`||!e)return;if(e[Symbol.asyncIterator]){await e[Symbol.asyncIterator]().return?.();return}let t=e.getReader(),n=t.cancel();t.releaseLock(),await n}var df=({headers:e,body:t})=>({bodyHeaders:{"content-type":`application/json`},body:JSON.stringify(t)}),ff=`RFC3986`,pf=e=>String(e),mf={RFC1738:e=>String(e).replace(/%20/g,`+`),RFC3986:pf},hf=(e,t)=>(hf=Object.hasOwn??Function.prototype.call.bind(Object.prototype.hasOwnProperty),hf(e,t)),gf=(()=>{let e=[];for(let t=0;t<256;++t)e.push(`%`+((t<16?`0`:``)+t.toString(16)).toUpperCase());return e})(),_f=1024,vf=(e,t,n,r,i)=>{if(e.length===0)return e;let a=e;if(typeof e==`symbol`?a=Symbol.prototype.toString.call(e):typeof e!=`string`&&(a=String(e)),n===`iso-8859-1`)return escape(a).replace(/%u[0-9a-f]{4}/gi,function(e){return`%26%23`+parseInt(e.slice(2),16)+`%3B`});let o=``;for(let e=0;e<a.length;e+=_f){let t=a.length>=_f?a.slice(e,e+_f):a,n=[];for(let e=0;e<t.length;++e){let r=t.charCodeAt(e);if(r===45||r===46||r===95||r===126||r>=48&&r<=57||r>=65&&r<=90||r>=97&&r<=122||i===`RFC1738`&&(r===40||r===41)){n[n.length]=t.charAt(e);continue}if(r<128){n[n.length]=gf[r];continue}if(r<2048){n[n.length]=gf[192|r>>6]+gf[128|r&63];continue}if(r<55296||r>=57344){n[n.length]=gf[224|r>>12]+gf[128|r>>6&63]+gf[128|r&63];continue}e+=1,r=65536+((r&1023)<<10|t.charCodeAt(e)&1023),n[n.length]=gf[240|r>>18]+gf[128|r>>12&63]+gf[128|r>>6&63]+gf[128|r&63]}o+=n.join(``)}return o};function yf(e){return!e||typeof e!=`object`?!1:!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))}function bf(e,t){if(Fd(e)){let n=[];for(let r=0;r<e.length;r+=1)n.push(t(e[r]));return n}return t(e)}var xf={brackets(e){return String(e)+`[]`},comma:`comma`,indices(e,t){return String(e)+`[`+t+`]`},repeat(e){return String(e)}},Sf=function(e,t){Array.prototype.push.apply(e,Fd(t)?t:[t])},Cf,wf={addQueryPrefix:!1,allowDots:!1,allowEmptyArrays:!1,arrayFormat:`indices`,charset:`utf-8`,charsetSentinel:!1,delimiter:`&`,encode:!0,encodeDotInKeys:!1,encoder:vf,encodeValuesOnly:!1,format:ff,formatter:pf,indices:!1,serializeDate(e){return(Cf??=Function.prototype.call.bind(Date.prototype.toISOString))(e)},skipNulls:!1,strictNullHandling:!1};function Tf(e){return typeof e==`string`||typeof e==`number`||typeof e==`boolean`||typeof e==`symbol`||typeof e==`bigint`}var Ef={};function Df(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_){let v=e,y=_,b=0,x=!1;for(;(y=y.get(Ef))!==void 0&&!x;){let t=y.get(e);if(b+=1,t!==void 0){if(t===b)throw RangeError(`Cyclic object value`);x=!0}y.get(Ef)===void 0&&(b=0)}if(typeof l==`function`?v=l(t,v):v instanceof Date?v=f?.(v):n===`comma`&&Fd(v)&&(v=bf(v,function(e){return e instanceof Date?f?.(e):e})),v===null){if(a)return c&&!h?c(t,wf.encoder,g,`key`,p):t;v=``}if(Tf(v)||yf(v)){if(c){let e=h?t:c(t,wf.encoder,g,`key`,p);return[m?.(e)+`=`+m?.(c(v,wf.encoder,g,`value`,p))]}return[m?.(t)+`=`+m?.(String(v))]}let S=[];if(v===void 0)return S;let C;if(n===`comma`&&Fd(v))h&&c&&(v=bf(v,c)),C=[{value:v.length>0?v.join(`,`)||null:void 0}];else if(Fd(l))C=l;else{let e=Object.keys(v);C=u?e.sort(u):e}let w=s?String(t).replace(/\./g,`%2E`):String(t),T=r&&Fd(v)&&v.length===1?w+`[]`:w;if(i&&Fd(v)&&v.length===0)return T+`[]`;for(let t=0;t<C.length;++t){let y=C[t],x=typeof y==`object`&&y.value!==void 0?y.value:v[y];if(o&&x===null)continue;let w=d&&s?y.replace(/\./g,`%2E`):y,E=Fd(v)?typeof n==`function`?n(T,w):T:T+(d?`.`+w:`[`+w+`]`);_.set(e,b);let D=new WeakMap;D.set(Ef,_),Sf(S,Df(x,E,n,r,i,a,o,s,n===`comma`&&h&&Fd(v)?null:c,l,u,d,f,p,m,h,g,D))}return S}function Of(e=wf){if(e.allowEmptyArrays!==void 0&&typeof e.allowEmptyArrays!=`boolean`)throw TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");if(e.encodeDotInKeys!==void 0&&typeof e.encodeDotInKeys!=`boolean`)throw TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");if(e.encoder!==null&&e.encoder!==void 0&&typeof e.encoder!=`function`)throw TypeError(`Encoder has to be a function.`);let t=e.charset||wf.charset;if(e.charset!==void 0&&e.charset!==`utf-8`&&e.charset!==`iso-8859-1`)throw TypeError(`The charset option must be either utf-8, iso-8859-1, or undefined`);let n=ff;if(e.format!==void 0){if(!hf(mf,e.format))throw TypeError(`Unknown format option provided.`);n=e.format}let r=mf[n],i=wf.filter;(typeof e.filter==`function`||Fd(e.filter))&&(i=e.filter);let a;if(a=e.arrayFormat&&e.arrayFormat in xf?e.arrayFormat:`indices`in e?e.indices?`indices`:`repeat`:wf.arrayFormat,`commaRoundTrip`in e&&typeof e.commaRoundTrip!=`boolean`)throw TypeError("`commaRoundTrip` must be a boolean, or absent");let o=e.allowDots===void 0?e.encodeDotInKeys?!0:wf.allowDots:!!e.allowDots;return{addQueryPrefix:typeof e.addQueryPrefix==`boolean`?e.addQueryPrefix:wf.addQueryPrefix,allowDots:o,allowEmptyArrays:typeof e.allowEmptyArrays==`boolean`?!!e.allowEmptyArrays:wf.allowEmptyArrays,arrayFormat:a,charset:t,charsetSentinel:typeof e.charsetSentinel==`boolean`?e.charsetSentinel:wf.charsetSentinel,commaRoundTrip:!!e.commaRoundTrip,delimiter:e.delimiter===void 0?wf.delimiter:e.delimiter,encode:typeof e.encode==`boolean`?e.encode:wf.encode,encodeDotInKeys:typeof e.encodeDotInKeys==`boolean`?e.encodeDotInKeys:wf.encodeDotInKeys,encoder:typeof e.encoder==`function`?e.encoder:wf.encoder,encodeValuesOnly:typeof e.encodeValuesOnly==`boolean`?e.encodeValuesOnly:wf.encodeValuesOnly,filter:i,format:n,formatter:r,serializeDate:typeof e.serializeDate==`function`?e.serializeDate:wf.serializeDate,skipNulls:typeof e.skipNulls==`boolean`?e.skipNulls:wf.skipNulls,sort:typeof e.sort==`function`?e.sort:null,strictNullHandling:typeof e.strictNullHandling==`boolean`?e.strictNullHandling:wf.strictNullHandling}}function kf(e,t={}){let n=e,r=Of(t),i,a;typeof r.filter==`function`?(a=r.filter,n=a(``,n)):Fd(r.filter)&&(a=r.filter,i=a);let o=[];if(typeof n!=`object`||!n)return``;let s=xf[r.arrayFormat],c=s===`comma`&&r.commaRoundTrip;i||=Object.keys(n),r.sort&&i.sort(r.sort);let l=new WeakMap;for(let e=0;e<i.length;++e){let t=i[e];r.skipNulls&&n[t]===null||Sf(o,Df(n[t],t,s,c,r.allowEmptyArrays,r.strictNullHandling,r.skipNulls,r.encodeDotInKeys,r.encode?r.encoder:null,r.filter,r.sort,r.allowDots,r.serializeDate,r.format,r.formatter,r.encodeValuesOnly,r.charset,l))}let u=o.join(r.delimiter),d=r.addQueryPrefix===!0?`?`:``;return r.charsetSentinel&&(r.charset===`iso-8859-1`?d+=`utf8=%26%2310003%3B&`:d+=`utf8=%E2%9C%93&`),u.length>0?d+u:``}function Af(e){return kf(e,{arrayFormat:`brackets`})}var jf=`modulepreload`,Mf=function(e,t){return new URL(e,t).href},Nf={},Pf=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=Mf(t,n),t=s(t),t in Nf)return;Nf[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:jf,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},Ff=`urn:ietf:params:oauth:grant-type:jwt-bearer`,If=`refresh_token`,Lf=`/v1/oauth/token`,Rf=`oauth-2025-04-20`,zf=`oidc-federation-2026-04-01`,Bf=1<<20;function Vf(e){if(!e)return;let t;try{t=new URL(e)}catch(t){throw new Yf(`Invalid token endpoint base URL "${e}": ${t}`)}if(t.protocol===`https:`)return;let n=t.hostname.toLowerCase().replace(/^\[|\]$/g,``);if(t.protocol!==`http:`||n!==`localhost`&&n!==`127.0.0.1`&&n!==`::1`)throw new Yf(`Refusing to send credential over non-https token endpoint "${e}"`)}async function Hf(e,t){let n=await Jf(e),r;try{r=JSON.parse(n)}catch{throw new Yf(`Token endpoint returned non-JSON response (status ${e.status})`,e.status,Gf(n),t)}if(!r.access_token)throw new Yf(`Token endpoint response missing access_token: ${JSON.stringify(Gf(r))}`,e.status,Gf(r),t);if(r.token_type&&r.token_type.toLowerCase()!==`bearer`)throw new Yf(`Token endpoint response: unsupported token_type "${r.token_type}" (want Bearer)`,e.status,Gf(r),t);return r}var Uf=2e3,Wf=new Set([`error`,`error_description`,`error_uri`]);function Gf(e){if(e==null)return e;if(typeof e==`string`){let t;try{t=JSON.parse(e)}catch{return e.length<=Uf?e:e.slice(0,Uf)+`... <${e.length-Uf} more chars>`}return JSON.stringify(Gf(t))}if(typeof e==`object`&&!Array.isArray(e)){let t={};for(let[n,r]of Object.entries(e))Wf.has(n)&&(t[n]=r);return t}return null}async function Kf(e,t=e=>console.warn(`anthropic-sdk: ${e}`)){if(typeof process>`u`||process.platform===`win32`)return;let{fs:n}=await Pf(async()=>{let{fs:e}=await import(`./node.browser-Bx_ik5Ir.js`);return{fs:e}},[],import.meta.url),r=e,i;try{r=await n.promises.realpath(e),i=await n.promises.stat(r)}catch{return}let a=i.mode&511;if(a&18)throw new Yf(`Credentials file at ${r} is group/world-writable (mode 0o${a.toString(8)}); this allows other local users to plant tokens. Run \`chmod 600 ${r}\`.`);if(a&36)throw new Yf(`Credentials file at ${r} is group/world-readable (mode 0o${a.toString(8)}); run \`chmod 600 ${r}\` before retrying.`);typeof process.getuid==`function`&&i.uid!==process.getuid()&&t(`credentials file at ${r} is owned by uid ${i.uid} (current process uid ${process.getuid()}); verify this is intentional.`)}async function qf(e,t){let{fs:n,path:r}=await Pf(async()=>{let{fs:e,path:t}=await import(`./node.browser-Bx_ik5Ir.js`);return{fs:e,path:t}},[],import.meta.url),i=r.dirname(e);await n.promises.mkdir(i,{recursive:!0,mode:448});let a=`${e}.${process.pid}.${Math.random().toString(36).slice(2)}.tmp`;try{let r=await n.promises.open(a,`w`,384);try{await r.writeFile(JSON.stringify(t,null,2)),await r.sync()}finally{await r.close()}await n.promises.rename(a,e)}catch(e){throw await n.promises.unlink(a).catch(()=>{}),e}try{let e=await n.promises.open(i,`r`);try{await e.sync()}finally{await e.close()}}catch{}}async function Jf(e){if(!e.body)return``;let t=e.body.getReader(),n=[],r=0;for(;;){let{done:e,value:i}=await t.read();if(e)break;if(r+i.length>Bf){let e=Bf-r;e>0&&n.push(i.subarray(0,e)),await t.cancel();break}n.push(i),r+=i.length}let i;if(n.length===1)i=n[0];else{i=new Uint8Array(n.reduce((e,t)=>e+t.length,0));let e=0;for(let t of n)i.set(t,e),e+=t.length}return new TextDecoder(`utf-8`).decode(i)}var Yf=class extends Y{constructor(e,t=null,n=null,r=null){super(e),this.statusCode=t,this.body=n,this.requestId=r}};function Xf(){return Math.floor(Date.now()/1e3)}var Zf=class{constructor(e,t){this.cached=null,this.pendingRefresh=null,this.nextForce=!1,this.lastAdvisoryError=0,this.provider=e,this.onAdvisoryRefreshError=t}async getToken(){let e=this.nextForce;this.nextForce=!1;let t=this.cached;if(e||t==null)return(await this.refresh(e)).token;if(t.expiresAt==null)return t.token;let n=t.expiresAt-Xf();return n>120?t.token:n>30?(this.backgroundRefresh(),t.token):(await this.refresh()).token}invalidate(){this.cached=null,this.nextForce=!0}refresh(e=!1){return this.pendingRefresh&&!e?this.pendingRefresh:this.doRefresh(e)}backgroundRefresh(){this.pendingRefresh||Xf()-this.lastAdvisoryError<5||this.doRefresh().catch(e=>{this.lastAdvisoryError=Xf(),this.onAdvisoryRefreshError?.(e)})}doRefresh(e=!1){return this.pendingRefresh=this.provider(e?{forceRefresh:!0}:void 0).then(e=>(this.cached=e,this.pendingRefresh=null,e),e=>{throw this.pendingRefresh=null,e}),this.pendingRefresh}},Qf=e=>{if(globalThis.process!==void 0)return{}[e]?.trim()||void 0;if(globalThis.Deno!==void 0)return globalThis.Deno.env?.get?.(e)?.trim()||void 0};function $f(e){let t=0;for(let n of e)t+=n.length;let n=new Uint8Array(t),r=0;for(let t of e)n.set(t,r),r+=t.length;return n}var ep;function tp(e){let t;return(ep??=(t=new globalThis.TextEncoder,t.encode.bind(t)))(e)}var np;function rp(e){let t;return(np??=(t=new globalThis.TextDecoder,t.decode.bind(t)))(e)}var ip=e=>{if(globalThis.Buffer!==void 0){let t=globalThis.Buffer.from(e,`base64`);return new Uint8Array(t.buffer,t.byteOffset,t.byteLength)}if(typeof atob<`u`){let t=atob(e),n=new Uint8Array(t.length);for(let e=0;e<t.length;e++)n[e]=t.charCodeAt(e);return n}throw new Y("Cannot decode base64 string; Expected `Buffer` or `atob` to be defined")},ap=`warn`,op={off:0,error:200,warn:300,info:400,debug:500},sp=(e,t,n)=>{if(e){if(zd(op,e))return e;n.warn(`${t} was set to ${JSON.stringify(e)}, expected one of ${JSON.stringify(Object.keys(op))}`)}};function cp(){}function lp(e,t,n){return!t||op[e]>op[n]?cp:t[e].bind(t)}var up={error:cp,warn:cp,info:cp,debug:cp},dp=new WeakMap;function fp(e,t){let n=dp.get(e);if(n&&n[0]===t)return n[1];let r={error:lp(`error`,e,t),warn:lp(`warn`,e,t),info:lp(`info`,e,t),debug:lp(`debug`,e,t)};return dp.set(e,[t,r]),r}function pp(e){let t=e.logger,n=e.logLevel??`off`;return t?fp(t,n):up}var mp,hp;function gp(){let e=Qf(`ANTHROPIC_LOG`);return(!hp||e!==mp)&&(mp=e,hp=fp(console,sp(e,`process.env['ANTHROPIC_LOG']`,fp(console,`warn`))??`warn`)),hp}function _p(e,t,n){e.debug!==cp&&e.debug(t,vp(n))}var vp=e=>(e.options&&(e.options={...e.options},delete e.options.headers),e.headers&&=Object.fromEntries((e.headers instanceof Headers?[...e.headers]:Object.entries(e.headers)).map(([e,t])=>[e,e.toLowerCase()===`authorization`||e.toLowerCase()===`api-key`||e.toLowerCase()===`x-api-key`||e.toLowerCase()===`cookie`||e.toLowerCase()===`set-cookie`?`***`:t])),`retryOfRequestLogID`in e&&(e.retryOfRequestLogID&&(e.retryOf=e.retryOfRequestLogID),delete e.retryOfRequestLogID),e),yp=function(){let{crypto:e}=globalThis;if(e?.randomUUID)return yp=e.randomUUID.bind(e),e.randomUUID();let t=new Uint8Array(1),n=e?()=>e.getRandomValues(t)[0]:()=>Math.random()*255&255;return`10000000-1000-4000-8000-100000000000`.replace(/[018]/g,e=>(+e^n()&15>>e/4).toString(16))},bp=/^[A-Za-z0-9_.-]+$/;function xp(e){if(!e)throw Error(`profile name is empty`);if(e===`.`||e===`..`)throw Error(`profile name "${e}" is not allowed`);if(e.includes(`/`)||e.includes(`\\`))throw Error(`profile name "${e}" must not contain path separators`);if(!bp.test(e))throw Error(`profile name "${e}" contains disallowed characters (allowed: letters, digits, '_', '.', '-')`)}var Sp=async e=>{var t,n;let r=await wp();if(r===null)return null;let i=e??await Ep();if(i===null)return null;xp(i);let{fs:a,path:o}=await Pf(async()=>{let{fs:e,path:t}=await import(`./node.browser-Bx_ik5Ir.js`);return{fs:e,path:t}},[],import.meta.url),s=o.join(r,`configs`,`${i}.json`),c;try{c=await a.promises.readFile(s,`utf-8`)}catch(e){if(e?.code!==`ENOENT`)throw Error(`failed to read config file ${s}: ${e}`);c=null}if(c===null){let e=Qf(`ANTHROPIC_ORGANIZATION_ID`),t=Qf(`ANTHROPIC_IDENTITY_TOKEN_FILE`),n=Qf(`ANTHROPIC_FEDERATION_RULE_ID`);return n&&e?{fromFile:!1,config:{organization_id:e,workspace_id:Qf(`ANTHROPIC_WORKSPACE_ID`),base_url:Qf(`ANTHROPIC_BASE_URL`),authentication:{type:`oidc_federation`,federation_rule_id:n,service_account_id:Qf(`ANTHROPIC_SERVICE_ACCOUNT_ID`),identity_token:t?{source:`file`,path:t}:void 0,scope:Qf(`ANTHROPIC_SCOPE`)}}}:null}let l;try{l=JSON.parse(c)}catch(e){throw Error(`failed to parse config file ${s}: ${e}`)}if(!l.authentication)throw Error(`config file ${s} is missing "authentication"`);let u=l.authentication.type;if(u!==`oidc_federation`&&u!==`user_oauth`)throw Error(`authentication.type "${u}" is not a known authentication type`);if(l.organization_id??(l.organization_id=Qf(`ANTHROPIC_ORGANIZATION_ID`)),l.workspace_id??(l.workspace_id=Qf(`ANTHROPIC_WORKSPACE_ID`)),l.base_url??(l.base_url=Qf(`ANTHROPIC_BASE_URL`)),(t=l.authentication).scope??(t.scope=Qf(`ANTHROPIC_SCOPE`)),l.authentication.type===`oidc_federation`){if(!l.authentication.identity_token){let e=Qf(`ANTHROPIC_IDENTITY_TOKEN_FILE`);e&&(l.authentication.identity_token={source:`file`,path:e})}l.authentication.federation_rule_id||(l.authentication.federation_rule_id=Qf(`ANTHROPIC_FEDERATION_RULE_ID`)??``),(n=l.authentication).service_account_id??(n.service_account_id=Qf(`ANTHROPIC_SERVICE_ACCOUNT_ID`))}return{config:l,fromFile:!0}},Cp=async(e,t)=>{if(e?.authentication.credentials_path)return e.authentication.credentials_path;let n=await wp();if(!n)return null;let r=t??await Ep();if(!r)return null;xp(r);let{path:i}=await Pf(async()=>{let{path:e}=await import(`./node.browser-Bx_ik5Ir.js`);return{path:e}},[],import.meta.url);return i.join(n,`credentials`,`${r}.json`)},wp=async()=>{if(!Tp())return null;let{path:e}=await Pf(async()=>{let{path:e}=await import(`./node.browser-Bx_ik5Ir.js`);return{path:e}},[],import.meta.url),t=Qf(`ANTHROPIC_CONFIG_DIR`);if(t)return t;if(Qd()[`X-Stainless-OS`]===`Windows`){let t=Qf(`APPDATA`);if(t)return e.join(t,`Anthropic`);let n=Qf(`USERPROFILE`);return n?e.join(n,`AppData`,`Roaming`,`Anthropic`):null}let n=Qf(`XDG_CONFIG_HOME`);if(n)return e.join(n,`anthropic`);let r=Qf(`HOME`);return r?e.join(r,`.config`,`anthropic`):null},Tp=()=>{let e=Qd()[`X-Stainless-Runtime`];return e===`node`||e===`deno`},Ep=async()=>{let e=await wp();if(!e)return null;let t=Qf(`ANTHROPIC_PROFILE`);if(t)return t;let{fs:n,path:r}=await Pf(async()=>{let{fs:e,path:t}=await import(`./node.browser-Bx_ik5Ir.js`);return{fs:e,path:t}},[],import.meta.url),i=r.join(e,`active_config`);try{return(await n.promises.readFile(i,`utf-8`)).trim()||`default`}catch(e){if(e?.code!==`ENOENT`)throw Error(`failed to read ${i}: ${e}`);return`default`}};function Dp(e){if(!e)throw new Y(`Identity token file path is empty`);return async()=>{let{fs:t}=await Pf(async()=>{let{fs:e}=await import(`./node.browser-Bx_ik5Ir.js`);return{fs:e}},[],import.meta.url),n;try{n=await t.promises.readFile(e,`utf-8`)}catch(t){throw new Y(`Failed to read identity token file at ${e}: ${t}`)}let r=n.trim();if(!r)throw new Y(`Identity token file at ${e} is empty`);return r}}function Op(e){if(!e)throw new Y(`Identity token value is empty`);return()=>e}function kp(e){return async()=>{Vf(e.baseURL);let t=await e.identityTokenProvider();if(t.length>16384)throw new Yf(`Identity token is ${Math.ceil(t.length/1024)} KiB, exceeds the 16 KiB assertion limit`);let n={grant_type:Ff,assertion:t,federation_rule_id:e.federationRuleId,organization_id:e.organizationId};e.serviceAccountId&&(n.service_account_id=e.serviceAccountId),e.workspaceId&&(n.workspace_id=e.workspaceId);let r=`${e.baseURL}${Lf}`,i;try{i=await e.fetch(r,{method:`POST`,headers:{"Content-Type":`application/json`,"anthropic-beta":`${Rf},${zf}`,"User-Agent":e.userAgent||`anthropic-sdk-typescript/0.129.0 oidcFederationProvider`},body:JSON.stringify(n)})}catch(e){throw new Yf(`Failed to reach token endpoint ${r}: ${e}`)}let a=i.headers.get(`Request-Id`);if(!i.ok){let t=Gf(await i.text().catch(()=>``)),n=``;throw i.status===401&&(n=` Ensure your federation rule matches your identity token. ${e.workspaceId?``:"If your federation rule is scoped to multiple workspaces, set the ANTHROPIC_WORKSPACE_ID environment variable, the 'workspace_id' config key, or the `workspaceId` option. "}View your authentication events in the Workload identity page of Claude Console for more details.`),new Yf(`Token exchange failed with status ${i.status}${a?` (request-id ${a})`:``}: ${t}${n}`,i.status,t,a)}let o=await Hf(i,a),s=Number(o.expires_in);if(!Number.isFinite(s))throw new Yf(`Token endpoint response missing required fields: ${JSON.stringify(Gf(o))}`,i.status,Gf(o),a);return{token:o.access_token,expiresAt:Xf()+s}}}function Ap(e){return async t=>{let{fs:n}=await Pf(async()=>{let{fs:e}=await import(`./node.browser-Bx_ik5Ir.js`);return{fs:e}},[],import.meta.url);await Kf(e.credentialsPath,e.onSafetyWarning);let r;try{r=await n.promises.readFile(e.credentialsPath,`utf-8`)}catch(t){throw new Yf(`Credentials file not found at ${e.credentialsPath}: ${t}`)}let i;try{i=JSON.parse(r)}catch(t){throw new Yf(`Credentials file at ${e.credentialsPath} is not valid JSON: ${t}`)}let a=i.access_token;if(!a)throw new Yf(`Credentials file at ${e.credentialsPath} must include 'access_token'`);let o=i.expires_at;if(!t?.forceRefresh&&(o==null||Xf()<o-30))return{token:a,expiresAt:o??null};let s=i.refresh_token;if(!e.clientId||!s)throw new Yf(`Access token at ${e.credentialsPath} has expired and no refresh is available (client_id ${e.clientId?`set`:`empty`}, refresh_token ${s?`set`:`empty`})`);Vf(e.baseURL);let c={grant_type:If,refresh_token:s,client_id:e.clientId},l=`${e.baseURL}${Lf}`,u;try{u=await e.fetch(l,{method:`POST`,headers:{"Content-Type":`application/json`,"anthropic-beta":Rf,"User-Agent":e.userAgent||`anthropic-sdk-typescript/0.129.0 userOAuthProvider`},body:JSON.stringify(c)})}catch(e){throw new Yf(`User OAuth refresh failed to reach token endpoint: ${e}`)}let d=u.headers.get(`Request-Id`);if(!u.ok){let e=await u.text().catch(()=>``);throw new Yf(`User OAuth refresh failed (HTTP ${u.status}): ${Gf(e)}`,u.status,Gf(e),d)}let f=await Hf(u,d),p=Number(f.expires_in);if(!Number.isFinite(p))throw new Yf(`User OAuth refresh response missing or invalid expires_in: ${JSON.stringify(Gf(f))}`,u.status,Gf(f),d);let m=Xf()+p,h=f.refresh_token||s;return await qf(e.credentialsPath,{...i,version:`1.0`,type:`oauth_token`,access_token:f.access_token,expires_at:m,refresh_token:h}),{token:f.access_token,expiresAt:m}}}function jp(e,t){let n=Np(e,e.authentication.credentials_path??null,(e.base_url||t.baseURL).replace(/\/+$/,``),t),r={};return e.workspace_id&&e.authentication.type===`user_oauth`&&(r[`anthropic-workspace-id`]=e.workspace_id),{provider:n,extraHeaders:r,baseURL:e.base_url||void 0}}async function Mp(e,t){let n=await Sp(t);if(!n)return null;let{config:r,fromFile:i}=n;return jp(r.authentication.credentials_path||!i?r:{...r,authentication:{...r.authentication,credentials_path:await Cp(r,t)??void 0}},e)}function Np(e,t,n,r){switch(e.authentication.type){case`oidc_federation`:{let i=e.authentication,a=Pp(i);if(!a)throw new Yf(`oidc_federation config requires an identity token (set authentication.identity_token, ANTHROPIC_IDENTITY_TOKEN_FILE, or ANTHROPIC_IDENTITY_TOKEN)`);if(!i.federation_rule_id)throw new Yf(`oidc_federation config requires 'federation_rule_id'. Set it in authentication.federation_rule_id in your profile, or via ANTHROPIC_FEDERATION_RULE_ID (profile takes precedence).`);if(!e.organization_id)throw new Yf(`oidc_federation config requires organization_id (set ANTHROPIC_ORGANIZATION_ID or config.organization_id)`);let o=kp({identityTokenProvider:a,federationRuleId:i.federation_rule_id,organizationId:e.organization_id,serviceAccountId:i.service_account_id,workspaceId:e.workspace_id,baseURL:n,fetch:r.fetch,userAgent:r.userAgent});return t?Fp(o,t,r.onCacheWriteError,r.onSafetyWarning):o}case`user_oauth`:if(!t)throw new Yf(`user_oauth config requires authentication.credentials_path (or load via a profile so it defaults to <config_dir>/credentials/<profile>.json)`);return Ap({credentialsPath:t,clientId:e.authentication.client_id,baseURL:n,fetch:r.fetch,userAgent:r.userAgent,onSafetyWarning:r.onSafetyWarning});default:{let t=e.authentication.type;throw new Yf(`authentication.type "${t}" is not a known authentication type`)}}}function Pp(e){if(e.identity_token){let t=e.identity_token.source;if(t!==`file`)throw new Yf(`identity_token.source "${t}" is not supported by this SDK version (only "file")`);if(!e.identity_token.path)throw new Yf(`identity_token.source "file" requires a non-empty path`);return Dp(e.identity_token.path)}let t=Qf(`ANTHROPIC_IDENTITY_TOKEN_FILE`);if(t)return Dp(t);let n=Qf(`ANTHROPIC_IDENTITY_TOKEN`);return n?Op(n):null}function Fp(e,t,n,r){return async i=>{let{fs:a}=await Pf(async()=>{let{fs:e}=await import(`./node.browser-Bx_ik5Ir.js`);return{fs:e}},[],import.meta.url);await Kf(t,r);let o;try{let e=await a.promises.readFile(t,`utf-8`);o=JSON.parse(e);let n=o?.access_token;if(n&&!i?.forceRefresh){let e=o?.expires_at;if(e==null||Xf()<e-30)return{token:n,expiresAt:e??null}}}catch(e){e?.code!==`ENOENT`&&!(e instanceof SyntaxError)&&n?.(e)}let s=await e(i);try{await qf(t,{...o??{},version:`1.0`,type:`oauth_token`,access_token:s.token,expires_at:s.expiresAt})}catch(e){n?.(e)}return s}}var Ip,Lp,Rp=(()=>{class e{constructor(){Ip.set(this,void 0),Lp.set(this,void 0),q(this,Ip,new Uint8Array,`f`),q(this,Lp,null,`f`)}decode(e){if(e==null)return[];let t=e instanceof ArrayBuffer?new Uint8Array(e):typeof e==`string`?tp(e):e;q(this,Ip,$f([J(this,Ip,`f`),t]),`f`);let n=[],r;for(;(r=zp(J(this,Ip,`f`),J(this,Lp,`f`)))!=null;){if(r.carriage&&J(this,Lp,`f`)==null){q(this,Lp,r.index,`f`);continue}if(J(this,Lp,`f`)!=null&&(r.index!==J(this,Lp,`f`)+1||r.carriage)){n.push(rp(J(this,Ip,`f`).subarray(0,J(this,Lp,`f`)-1))),q(this,Ip,J(this,Ip,`f`).subarray(J(this,Lp,`f`)),`f`),q(this,Lp,null,`f`);continue}let e=J(this,Lp,`f`)===null?r.preceding:r.preceding-1,t=rp(J(this,Ip,`f`).subarray(0,e));n.push(t),q(this,Ip,J(this,Ip,`f`).subarray(r.index),`f`),q(this,Lp,null,`f`)}return n}flush(){return J(this,Ip,`f`).length?this.decode(`
`):[]}}return Ip=new WeakMap,Lp=new WeakMap,e.NEWLINE_CHARS=new Set([`
`,`\r`]),e.NEWLINE_REGEXP=/\r\n|[\n\r]/g,e})();function zp(e,t){for(let n=t??0;n<e.length;n++){if(e[n]===10)return{preceding:n,index:n+1,carriage:!1};if(e[n]===13)return{preceding:n,index:n+1,carriage:!0}}return null}var Bp,Vp=(()=>{class e{constructor(e,t,n){this.iterator=e,Bp.set(this,void 0),this.controller=t,q(this,Bp,n,`f`)}static rawEvents(e,t=new AbortController){return Hp(e,t)}static fromSSEResponse(t,n,r){let i=!1,a=r?pp(r):console;async function*o(){if(i)throw new Y("Cannot iterate over a consumed stream, use `.tee()` to split the stream.");i=!0;let e=!1;try{for await(let e of Hp(t,n)){if(e.event===`completion`)try{yield JSON.parse(e.data)}catch(t){throw a.error(`Could not parse message into JSON:`,e.data),a.error(`From chunk:`,e.raw),t}if(e.event===`message_start`||e.event===`message_delta`||e.event===`message_stop`||e.event===`content_block_start`||e.event===`content_block_delta`||e.event===`content_block_stop`||e.event===`message`||e.event===`user.message`||e.event===`user.interrupt`||e.event===`user.tool_confirmation`||e.event===`user.custom_tool_result`||e.event===`user.tool_result`||e.event===`agent.message`||e.event===`agent.thinking`||e.event===`agent.tool_use`||e.event===`agent.tool_result`||e.event===`agent.mcp_tool_use`||e.event===`agent.mcp_tool_result`||e.event===`agent.custom_tool_use`||e.event===`agent.thread_context_compacted`||e.event===`session.status_running`||e.event===`session.status_idle`||e.event===`session.status_rescheduled`||e.event===`session.status_terminated`||e.event===`session.error`||e.event===`session.deleted`||e.event===`session.updated`||e.event===`span.model_request_start`||e.event===`span.model_request_end`||e.event===`span.outcome_evaluation_start`||e.event===`span.outcome_evaluation_ongoing`||e.event===`span.outcome_evaluation_end`||e.event===`user.define_outcome`||e.event===`agent.thread_message_received`||e.event===`agent.thread_message_sent`||e.event===`agent.session_thread_message_received`||e.event===`agent.session_thread_message_sent`||e.event===`session.thread_created`||e.event===`session.thread_status_created`||e.event===`session.thread_status_running`||e.event===`session.thread_status_idle`||e.event===`session.thread_status_rescheduled`||e.event===`session.thread_status_terminated`||e.event===`event_start`||e.event===`event_delta`||e.event===`system.message`)try{yield JSON.parse(e.data)}catch(t){throw a.error(`Could not parse message into JSON:`,e.data),a.error(`From chunk:`,e.raw),t}if(e.event!==`ping`&&e.event===`error`){let n=Hd(e.data)??e.data,r=n?.error?.type;throw new bd(void 0,n,void 0,t.headers,r)}}e=!0}catch(e){if(vd(e))return;throw e}finally{e||n.abort(),af(n)}}return new e(o,n,r)}static fromReadableStream(t,n,r){let i=!1;async function*a(){let e=new Rp,n=lf(t);for await(let t of n)for(let n of e.decode(t))yield n;for(let t of e.flush())yield t}async function*o(){if(i)throw new Y("Cannot iterate over a consumed stream, use `.tee()` to split the stream.");i=!0;let e=!1;try{for await(let t of a())e||t&&(yield JSON.parse(t));e=!0}catch(e){if(vd(e))return;throw e}finally{e||n.abort(),af(n)}}return new e(o,n,r)}[(Bp=new WeakMap,Symbol.asyncIterator)](){return this.iterator()}tee(){let t=[],n=[],r=this.iterator(),i=e=>({next:()=>{if(e.length===0){let e=r.next();t.push(e),n.push(e)}return e.shift()}});return[new e(()=>i(t),this.controller,J(this,Bp,`f`)),new e(()=>i(n),this.controller,J(this,Bp,`f`))]}toReadableStream(){let e=this,t;return sf({async start(){t=e[Symbol.asyncIterator]()},async pull(e){try{let{value:n,done:r}=await t.next();if(r)return e.close();let i=tp(JSON.stringify(n)+`
`);e.enqueue(i)}catch(t){e.error(t)}},async cancel(){await t.return?.()}})}}return e})();async function*Hp(e,t){if(!e.body)throw t.abort(),globalThis.navigator!==void 0&&globalThis.navigator.product===`ReactNative`?new Y(`The default react-native fetch implementation does not support streaming. Please use expo/fetch: https://docs.expo.dev/versions/latest/sdk/expo/#expofetch-api`):new Y(`Attempted to iterate over a response with no body`);let n=new Up,r=new Rp,i=lf(e.body);for await(let e of i)for(let t of r.decode(e)){let e=n.decode(t);e&&(yield e)}for(let e of r.flush()){let t=n.decode(e);t&&(yield t)}}var Up=class{constructor(){this.event=null,this.data=[],this.chunks=[]}decode(e){if(e.endsWith(`\r`)&&(e=e.substring(0,e.length-1)),!e){if(!this.event&&!this.data.length)return null;let e={event:this.event,data:this.data.join(`
`),raw:this.chunks};return this.event=null,this.data=[],this.chunks=[],e}if(this.chunks.push(e),e.startsWith(`:`))return null;let[t,n,r]=Wp(e,`:`);return r.startsWith(` `)&&(r=r.substring(1)),t===`event`?this.event=r:t===`data`&&this.data.push(r),null}};function Wp(e,t){let n=e.indexOf(t);return n===-1?[e,``,``]:[e.substring(0,n),t,e.substring(n+t.length)]}async function Gp(e,t){let{response:n,requestLogID:r,retryOfRequestLogID:i,startTime:a}=t,o=await(async()=>{if(t.options.stream)return pp(e).debug(`response`,n.status,n.url,n.headers,n.body),Vp.fromSSEResponse(n,t.controller,e);if(n.status===204)return null;if(t.options.__binaryResponse)return n;let r=n.headers.get(`content-type`)?.split(`;`)[0]?.trim();return r?.includes(`application/json`)||r?.endsWith(`+json`)?n.headers.get(`content-length`)===`0`?void 0:Kp(await n.json(),n):await n.text()})().finally(()=>{!t.options.stream&&!t.options.__binaryResponse&&af(t.controller)});return _p(pp(e),`[${r}] response parsed`,{retryOfRequestLogID:i,url:n.url,status:n.status,body:o,durationMs:Date.now()-a}),o}function Kp(e,t){return!e||typeof e!=`object`||Array.isArray(e)?e:Object.defineProperties(e,{_request_id:{value:t.headers.get(`request-id`),enumerable:!1},_workspace_id:{value:t.headers.get(`anthropic-workspace-id`),enumerable:!1}})}var qp=new WeakSet;function Jp(e){return typeof e==`object`&&!!e&&qp.has(e)}function Yp(e){let t=new Set;for(;typeof e==`object`&&e&&!t.has(e);){if(t.add(e),Jp(e)||vd(e)||e instanceof Sd||e instanceof wd)return!0;e=e.cause}return!1}function Xp(e,t,n,r){return async(i,a={})=>{if(t.length===0)return e.call(void 0,i,a);let o=a.headers instanceof Headers?a.headers:new Headers(a.headers),s=await $p(e,t,n,r)({...a,headers:o,url:typeof i==`string`?i:i instanceof URL?i.href:i.url});if(s.bodyUsed||s.body?.locked)throw new Y(`middleware consumed the response body; use response.clone() to inspect it, or return new Response(body, response) to consume and replace it`);return s}}function Zp(e,t){let n=new WeakMap;return{options:e,logger:t?pp(t):gp(),parse(r){if(e?.stream&&r.ok)return Qp(r,e,t);let i=n.get(r);return i||(i=Qp(r,e,t),n.set(r,i)),i}}}async function Qp(e,t,n){if(e.bodyUsed||e.body?.locked)throw new Y(`cannot ctx.parse() a response whose body was already consumed; call ctx.parse() instead of reading the body, or read via response.clone()`);if(t?.stream&&e.ok)return Vp.fromSSEResponse(e.clone(),new AbortController,n);if(e.status===204)return null;if(t?.__binaryResponse)return e;let r=e.headers.get(`content-type`)?.split(`;`)[0]?.trim();return r?.includes(`application/json`)||r?.endsWith(`+json`)?e.headers.get(`content-length`)===`0`?void 0:Kp(await e.clone().json(),e):await e.clone().text()}function $p(e,t,n,r){let i=async({url:t,...n})=>{try{return await e.call(void 0,t,n)}catch(e){let t=yd(e);throw qp.add(t),t}},a=Zp(n,r);for(let e=t.length-1;e>=0;e--){let n=t[e],r=i;i=async e=>n(e,r,a)}return i}var em,tm=(()=>{class e extends Promise{constructor(e,t,n=Gp){super(e=>{e(null)}),this.responsePromise=t,this.parseResponse=n,em.set(this,void 0),q(this,em,e,`f`)}_thenUnwrap(t){return new e(J(this,em,`f`),this.responsePromise,async(e,n)=>Kp(t(await this.parseResponse(e,n),n),n.response))}asResponse(){return this.responsePromise.then(e=>e.response)}async withResponse(){let[e,t]=await Promise.all([this.parse(),this.asResponse()]);return{data:e,response:t,request_id:t.headers.get(`request-id`),workspace_id:t.headers.get(`anthropic-workspace-id`)}}parse(){return this.parsedPromise||=this.responsePromise.then(e=>this.parseResponse(J(this,em,`f`),e)),this.parsedPromise}then(e,t){return this.parse().then(e,t)}catch(e){return this.parse().catch(e)}finally(e){return this.parse().finally(e)}}return em=new WeakMap,e})(),nm,rm=(()=>{class e{constructor(e,t,n,r){nm.set(this,void 0),q(this,nm,e,`f`),this.options=r,this.response=t,this.body=n}hasNextPage(){return this.getPaginatedItems().length?this.nextPageRequestOptions()!=null:!1}async getNextPage(){let e=this.nextPageRequestOptions();if(!e)throw new Y("No next page expected; please check `.hasNextPage()` before calling `.getNextPage()`.");return await J(this,nm,`f`).requestAPIList(this.constructor,e)}async*iterPages(){let e=this;for(yield e;e.hasNextPage();)e=await e.getNextPage(),yield e}async*[(nm=new WeakMap,Symbol.asyncIterator)](){for await(let e of this.iterPages())for(let t of e.getPaginatedItems())yield t}}return e})(),im=(()=>{class e extends tm{constructor(e,t,n){super(e,t,async(e,t)=>new n(e,t.response,await Gp(e,t),t.options))}async*[Symbol.asyncIterator](){let e=await this;for await(let t of e)yield t}}return e})(),am=class extends rm{constructor(e,t,n,r){super(e,t,n,r),this.data=n.data||[],this.has_more=n.has_more||!1,this.first_id=n.first_id||null,this.last_id=n.last_id||null}getPaginatedItems(){return this.data??[]}hasNextPage(){return this.has_more!==!1&&super.hasNextPage()}nextPageRequestOptions(){if(this.options.query?.before_id){let e=this.first_id;return e?{...this.options,query:{...Ld(this.options.query),before_id:e}}:null}let e=this.last_id;return e?{...this.options,query:{...Ld(this.options.query),after_id:e}}:null}},om=class extends rm{constructor(e,t,n,r){super(e,t,n,r),this.data=n.data||[],this.next_page=n.next_page||null}getPaginatedItems(){return this.data??[]}nextPageRequestOptions(){let e=this.next_page;return e?{...this.options,query:{...Ld(this.options.query),page:e}}:null}},sm=class extends rm{constructor(e,t,n,r){super(e,t,n,r),this.data=n.data||[],this.next_page=n.next_page||null,this.prev_page=n.prev_page||null}getPaginatedItems(){return this.data??[]}nextPageRequestOptions(){let e=this.next_page;return e?{...this.options,query:{...Ld(this.options.query),page:e}}:null}},cm=()=>{if(typeof File>`u`){let{process:e}=globalThis,t=typeof e?.versions?.node==`string`&&parseInt(e.versions.node.split(`.`))<20;throw Error("`File` is not defined as a global, which is required for file uploads."+(t?" Update to Node 20 LTS or newer, or set `globalThis.File` to `import('node:buffer').File`.":``))}};function lm(e,t,n){return cm(),new File(e,t??``,n)}function um(e,t){let n=typeof e==`object`&&!!e&&(`name`in e&&e.name&&String(e.name)||`url`in e&&e.url&&String(e.url)||`filename`in e&&e.filename&&String(e.filename)||`path`in e&&e.path&&String(e.path))||``;return t?n.split(/[\\/]/).pop()||void 0:n}var dm=e=>typeof e==`object`&&!!e&&typeof e[Symbol.asyncIterator]==`function`,fm=async(e,t,n=!0)=>({...e,body:await hm(e.body,t,n)}),pm=new WeakMap;function mm(e){let t=typeof e==`function`?e:e.fetch,n=pm.get(t);if(n)return n;let r=(async()=>{try{let e=`Response`in t?t.Response:(await t(`data:,`)).constructor,n=new FormData;return n.toString()!==await new e(n).text()}catch{return!0}})();return pm.set(t,r),r}var hm=async(e,t,n=!0)=>{if(!await mm(t))throw TypeError(`The provided fetch function does not support file uploads with the current global FormData class.`);let r=new FormData;return await Promise.all(Object.entries(e||{}).map(([e,t])=>gm(r,e,t,n))),r},gm=async(e,t,n,r)=>{if(n!==void 0){if(n==null)throw TypeError(`Received null for "${t}"; to pass null in FormData, you must use the string 'null'`);if(typeof n==`string`||typeof n==`number`||typeof n==`boolean`)e.append(t,String(n));else if(n instanceof Response){let i={},a=n.headers.get(`Content-Type`);a&&(i={type:a}),e.append(t,lm([await n.blob()],um(n,r),i))}else if(dm(n))e.append(t,lm([await new Response(cf(n)).blob()],um(n,r)));else if(n instanceof Blob){let i=typeof File<`u`&&n instanceof File?n.name:um(n,r);e.append(t,lm([n],i,{type:n.type}))}else if(Array.isArray(n))await Promise.all(n.map(n=>gm(e,t+`[]`,n,r)));else if(typeof n.then==`function`)throw TypeError(`Received a Promise for "${t}"; await it first, e.g. \`await toFile(...)\``);else if(n instanceof ArrayBuffer||ArrayBuffer.isView(n))throw TypeError(`Received ${n.constructor.name} for "${t}"; to upload raw bytes, wrap them with \`await toFile(bytes, 'filename')\``);else if(typeof n==`object`)await Promise.all(Object.entries(n).map(([n,i])=>gm(e,`${t}[${n}]`,i,r)));else throw TypeError(`Invalid value given to form, expected a string, number, boolean, object, Array, File or Blob but got ${n} instead`)}},_m=e=>typeof e==`object`&&!!e&&typeof e.size==`number`&&typeof e.type==`string`&&typeof e.text==`function`&&typeof e.slice==`function`&&typeof e.arrayBuffer==`function`,vm=e=>typeof e==`object`&&!!e&&typeof e.name==`string`&&typeof e.lastModified==`number`&&_m(e),ym=e=>typeof e==`object`&&!!e&&typeof e.url==`string`&&typeof e.blob==`function`;async function bm(e,t,n){if(cm(),e=await e,t||=e instanceof File?e.name:um(e,!0),vm(e))return e instanceof File&&t==null&&n==null?e:lm([await e.arrayBuffer()],t??e.name,{type:e.type,lastModified:e.lastModified,...n});if(ym(e)){let r=await e.blob();return t||=new URL(e.url).pathname.split(/[\\/]/).pop(),lm(await xm(r),t,n)}let r=await xm(e);if(!n?.type){let e=r.find(e=>typeof e==`object`&&`type`in e&&e.type);typeof e==`string`&&(n={...n,type:e})}return lm(r,t,n)}async function xm(e){let t=[];if(typeof e==`string`||ArrayBuffer.isView(e)||e instanceof ArrayBuffer)t.push(e);else if(_m(e))t.push(e instanceof Blob?e:await e.arrayBuffer());else if(dm(e))for await(let n of e)t.push(...await xm(n));else{let t=e?.constructor?.name;throw Error(`Unexpected data type: ${typeof e}${t?`; constructor: ${t}`:``}${Sm(e)}`)}return t}function Sm(e){return typeof e!=`object`||!e?``:`; props: [${Object.getOwnPropertyNames(e).map(e=>`"${e}"`).join(`, `)}]`}var X=class{constructor(e){this._client=e}},Cm=Symbol.for(`brand.privateNullableHeaders`);function*wm(e){if(!e)return;if(Cm in e){let{values:t,nulls:n}=e;yield*t.entries();for(let e of n)yield[e,null];return}let t=!1,n;e instanceof Headers?n=e.entries():Id(e)?n=e:(t=!0,n=Object.entries(e??{}));for(let e of n){let n=e[0];if(typeof n!=`string`)throw TypeError(`expected header name to be a string`);let r=Id(e[1])?e[1]:[e[1]],i=!1;for(let e of r)e!==void 0&&(t&&!i&&(i=!0,yield[n,Tm]),yield[n,e])}}var Tm=Symbol(`clear`),Em=new Set([`x-stainless-helper`]),Dm=(e,t)=>{let n=e?e.split(`,`).map(e=>e.trim()).filter(Boolean):[];for(let e of t.split(`,`).map(e=>e.trim()))e&&!n.includes(e)&&n.push(e);return n.join(`, `)},Z=e=>{let t=new Headers,n=new Set;for(let r of e){let e=new Set;for(let[i,a]of wm(r)){let r=i.toLowerCase();if(Em.has(r)){if(a===Tm)continue;a===null?(t.delete(i),n.add(r)):(t.set(i,Dm(t.get(i),a)),n.delete(r));continue}(a===Tm||!e.has(r))&&(t.delete(i),e.add(r),a===Tm)||(a===null?(t.delete(i),n.add(r)):(t.append(i,a),n.delete(r)))}}return{[Cm]:!0,values:t,nulls:n}};function Om(e){return e.replace(/[^A-Za-z0-9\-._~!$&'()*+,;=:@]+/g,encodeURIComponent)}var km=Object.freeze(Object.create(null)),Q=((e=Om)=>function(t,...n){if(t.length===1)return t[0];let r=!1,i=[],a=t.reduce((t,a,o)=>{/[?#]/.test(a)&&(r=!0);let s=n[o],c=(r?encodeURIComponent:e)(``+s);return o!==n.length&&(s==null||typeof s==`object`&&s.toString===Object.getPrototypeOf(Object.getPrototypeOf(s.hasOwnProperty??km)??km)?.toString)&&(c=s+``,i.push({start:t.length+a.length,length:c.length,error:`Value of type ${Object.prototype.toString.call(s).slice(8,-1)} is not a valid path parameter`})),t+a+(o===n.length?``:c)},``),o=a.split(/[?#]/,1)[0],s=/(?<=^|\/)(?:\.|%2e){1,2}(?=\/|$)/gi,c;for(;(c=s.exec(o))!==null;)i.push({start:c.index,length:c[0].length,error:`Value "${c[0]}" can\'t be safely passed as a path parameter`});if(i.sort((e,t)=>e.start-t.start),i.length>0){let e=0,t=i.reduce((t,n)=>{let r=` `.repeat(n.start-e),i=`^`.repeat(n.length);return e=n.start+n.length,t+r+i},``);throw new Y(`Path parameters result in path with invalid segments:\n${i.map(e=>e.error).join(`
`)}\n${a}\n${t}`)}return a})(Om),Am=class extends X{retrieve(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.get(Q`/v1/deployment_runs/${e}?beta=true`,{...n,headers:Z([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}list(e={},t){let{betas:n,workspace_id:r,...i}=e??{};return this._client.getAPIList(`/v1/deployment_runs?beta=true`,om,{query:i,...t,headers:Z([{"anthropic-beta":[...n??[],`managed-agents-2026-04-01`].toString(),...r==null?void 0:{"anthropic-workspace-id":r}},t?.headers])})}},jm=class extends X{create(e,t){let{betas:n,workspace_id:r,...i}=e;return this._client.post(`/v1/deployments?beta=true`,{body:i,...t,headers:Z([{"anthropic-beta":[...n??[],`managed-agents-2026-04-01`].toString(),...r==null?void 0:{"anthropic-workspace-id":r}},t?.headers])})}retrieve(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.get(Q`/v1/deployments/${e}?beta=true`,{...n,headers:Z([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}update(e,t,n){let{betas:r,workspace_id:i,...a}=t;return this._client.post(Q`/v1/deployments/${e}?beta=true`,{body:a,...n,headers:Z([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}list(e={},t){let{betas:n,workspace_id:r,...i}=e??{};return this._client.getAPIList(`/v1/deployments?beta=true`,om,{query:i,...t,headers:Z([{"anthropic-beta":[...n??[],`managed-agents-2026-04-01`].toString(),...r==null?void 0:{"anthropic-workspace-id":r}},t?.headers])})}archive(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.post(Q`/v1/deployments/${e}/archive?beta=true`,{...n,headers:Z([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}pause(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.post(Q`/v1/deployments/${e}/pause?beta=true`,{...n,headers:Z([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}run(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.post(Q`/v1/deployments/${e}/run?beta=true`,{...n,headers:Z([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}unpause(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.post(Q`/v1/deployments/${e}/unpause?beta=true`,{...n,headers:Z([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}},Mm=class extends X{create(e,t){let{betas:n,workspace_id:r,...i}=e;return this._client.post(`/v1/dreams?beta=true`,{body:i,...t,headers:Z([{"anthropic-beta":[...n??[],`dreaming-2026-04-21`].toString(),...r==null?void 0:{"anthropic-workspace-id":r}},t?.headers])})}retrieve(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.get(Q`/v1/dreams/${e}?beta=true`,{...n,headers:Z([{"anthropic-beta":[...r??[],`dreaming-2026-04-21`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}list(e={},t){let{betas:n,workspace_id:r,...i}=e??{};return this._client.getAPIList(`/v1/dreams?beta=true`,om,{query:i,...t,headers:Z([{"anthropic-beta":[...n??[],`dreaming-2026-04-21`].toString(),...r==null?void 0:{"anthropic-workspace-id":r}},t?.headers])})}archive(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.post(Q`/v1/dreams/${e}/archive?beta=true`,{...n,headers:Z([{"anthropic-beta":[...r??[],`dreaming-2026-04-21`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}cancel(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.post(Q`/v1/dreams/${e}/cancel?beta=true`,{...n,headers:Z([{"anthropic-beta":[...r??[],`dreaming-2026-04-21`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}},Nm=`x-stainless-helper`,Pm=`x-stainless-helper-method`;function Fm(e){return{[Nm]:e}}var Im=Symbol(`anthropic.sdk.stainlessHelper`);function Lm(e){return typeof e==`object`&&!!e&&Im in e}function Rm(e,t){let n=new Set;if(e)for(let t of e)Lm(t)&&n.add(t[Im]);if(t)for(let e of t){Lm(e)&&n.add(e[Im]);let t=e.content;if(Array.isArray(t))for(let e of t){Lm(e)&&n.add(e[Im]);let t=e?.tool?.definition;Lm(t)&&n.add(t[Im])}}return Array.from(n)}function zm(e,t){let n=Rm(e,t);return n.length===0?{}:{[Nm]:n.join(`, `)}}function Bm(e){return Lm(e)?{[Nm]:e[Im]}:{}}var Vm=class extends X{list(e={},t){let{betas:n,workspace_id:r,...i}=e??{};return this._client.getAPIList(`/v1/files?beta=true`,om,{query:i,...t,headers:Z([{...n?.toString()==null?void 0:{"anthropic-beta":n?.toString()},...r==null?void 0:{"anthropic-workspace-id":r}},t?.headers])})}delete(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.delete(Q`/v1/files/${e}?beta=true`,{...n,headers:Z([{...r?.toString()==null?void 0:{"anthropic-beta":r?.toString()},...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}download(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.get(Q`/v1/files/${e}/content?beta=true`,{...n,headers:Z([{Accept:`application/binary`,...r?.toString()==null?void 0:{"anthropic-beta":r?.toString()},...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers]),__binaryResponse:!0})}retrieveMetadata(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.get(Q`/v1/files/${e}?beta=true`,{...n,headers:Z([{...r?.toString()==null?void 0:{"anthropic-beta":r?.toString()},...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}upload(e,t){let{betas:n,workspace_id:r,...i}=e;return this._client.post(`/v1/files?beta=true`,fm({body:i,...t,headers:Z([{...n?.toString()==null?void 0:{"anthropic-beta":n?.toString()},...r==null?void 0:{"anthropic-workspace-id":r}},Bm(i.file),t?.headers])},this._client))}},Hm=class extends X{retrieve(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.get(Q`/v1/models/${e}?beta=true`,{...n,headers:Z([{...r?.toString()==null?void 0:{"anthropic-beta":r?.toString()},...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}list(e={},t){let{betas:n,workspace_id:r,...i}=e??{};return this._client.getAPIList(`/v1/models?beta=true`,am,{query:i,...t,headers:Z([{...n?.toString()==null?void 0:{"anthropic-beta":n?.toString()},...r==null?void 0:{"anthropic-workspace-id":r}},t?.headers])})}},Um=class extends X{create(e,t){let{betas:n,workspace_id:r,...i}=e;return this._client.post(`/v1/user_profiles?beta=true`,{body:i,...t,headers:Z([{"anthropic-beta":[...n??[],`user-profiles-2026-08-18`].toString(),...r==null?void 0:{"anthropic-workspace-id":r}},t?.headers])})}retrieve(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.get(Q`/v1/user_profiles/${e}?beta=true`,{...n,headers:Z([{"anthropic-beta":[...r??[],`user-profiles-2026-08-18`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}update(e,t,n){let{betas:r,workspace_id:i,...a}=t;return this._client.post(Q`/v1/user_profiles/${e}?beta=true`,{body:a,...n,headers:Z([{"anthropic-beta":[...r??[],`user-profiles-2026-08-18`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}list(e={},t){let{betas:n,workspace_id:r,...i}=e??{};return this._client.getAPIList(`/v1/user_profiles?beta=true`,om,{query:i,...t,headers:Z([{"anthropic-beta":[...n??[],`user-profiles-2026-08-18`].toString(),...r==null?void 0:{"anthropic-workspace-id":r}},t?.headers])})}createEnrollmentURL(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.post(Q`/v1/user_profiles/${e}/enrollment_url?beta=true`,{...n,headers:Z([{"anthropic-beta":[...r??[],`user-profiles-2026-08-18`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}},Wm=e((e=>{var t=e&&e.__extends||(function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},e(t,n)};return function(t,n){e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}})();Object.defineProperty(e,"__esModule",{value:!0});var n=256,r=function(){function e(e){e===void 0&&(e=`=`),this._paddingCharacter=e}return e.prototype.encodedLength=function(e){return this._paddingCharacter?(e+2)/3*4|0:(e*8+5)/6|0},e.prototype.encode=function(e){for(var t=``,n=0;n<e.length-2;n+=3){var r=e[n]<<16|e[n+1]<<8|e[n+2];t+=this._encodeByte(r>>>18&63),t+=this._encodeByte(r>>>12&63),t+=this._encodeByte(r>>>6&63),t+=this._encodeByte(r>>>0&63)}var i=e.length-n;if(i>0){var r=e[n]<<16|(i===2?e[n+1]<<8:0);t+=this._encodeByte(r>>>18&63),t+=this._encodeByte(r>>>12&63),t+=i===2?this._encodeByte(r>>>6&63):this._paddingCharacter||``,t+=this._paddingCharacter||``}return t},e.prototype.maxDecodedLength=function(e){return this._paddingCharacter?e/4*3|0:(e*6+7)/8|0},e.prototype.decodedLength=function(e){return this.maxDecodedLength(e.length-this._getPaddingLength(e))},e.prototype.decode=function(e){if(e.length===0)return new Uint8Array;for(var t=this._getPaddingLength(e),r=e.length-t,i=new Uint8Array(this.maxDecodedLength(r)),a=0,o=0,s=0,c=0,l=0,u=0,d=0;o<r-4;o+=4)c=this._decodeChar(e.charCodeAt(o+0)),l=this._decodeChar(e.charCodeAt(o+1)),u=this._decodeChar(e.charCodeAt(o+2)),d=this._decodeChar(e.charCodeAt(o+3)),i[a++]=c<<2|l>>>4,i[a++]=l<<4|u>>>2,i[a++]=u<<6|d,s|=c&n,s|=l&n,s|=u&n,s|=d&n;if(o<r-1&&(c=this._decodeChar(e.charCodeAt(o)),l=this._decodeChar(e.charCodeAt(o+1)),i[a++]=c<<2|l>>>4,s|=c&n,s|=l&n),o<r-2&&(u=this._decodeChar(e.charCodeAt(o+2)),i[a++]=l<<4|u>>>2,s|=u&n),o<r-3&&(d=this._decodeChar(e.charCodeAt(o+3)),i[a++]=u<<6|d,s|=d&n),s!==0)throw Error(`Base64Coder: incorrect characters for decoding`);return i},e.prototype._encodeByte=function(e){var t=e;return t+=65,t+=25-e>>>8&6,t+=51-e>>>8&-75,t+=61-e>>>8&-15,t+=62-e>>>8&3,String.fromCharCode(t)},e.prototype._decodeChar=function(e){var t=n;return t+=(42-e&e-44)>>>8&-n+e-43+62,t+=(46-e&e-48)>>>8&-n+e-47+63,t+=(47-e&e-58)>>>8&-n+e-48+52,t+=(64-e&e-91)>>>8&-n+e-65+0,t+=(96-e&e-123)>>>8&-n+e-97+26,t},e.prototype._getPaddingLength=function(e){var t=0;if(this._paddingCharacter){for(var n=e.length-1;n>=0&&e[n]===this._paddingCharacter;n--)t++;if(e.length<4||t>2)throw Error(`Base64Coder: incorrect padding`)}return t},e}();e.Coder=r;var i=new r;function a(e){return i.encode(e)}e.encode=a;function o(e){return i.decode(e)}e.decode=o;var s=function(e){t(r,e);function r(){return e!==null&&e.apply(this,arguments)||this}return r.prototype._encodeByte=function(e){var t=e;return t+=65,t+=25-e>>>8&6,t+=51-e>>>8&-75,t+=61-e>>>8&-13,t+=62-e>>>8&49,String.fromCharCode(t)},r.prototype._decodeChar=function(e){var t=n;return t+=(44-e&e-46)>>>8&-n+e-45+62,t+=(94-e&e-96)>>>8&-n+e-95+63,t+=(47-e&e-58)>>>8&-n+e-48+52,t+=(64-e&e-91)>>>8&-n+e-65+0,t+=(96-e&e-123)>>>8&-n+e-97+26,t},r}(r);e.URLSafeCoder=s;var c=new s;function l(e){return c.encode(e)}e.encodeURLSafe=l;function u(e){return c.decode(e)}e.decodeURLSafe=u,e.encodedLength=function(e){return i.encodedLength(e)},e.maxDecodedLength=function(e){return i.maxDecodedLength(e)},e.decodedLength=function(e){return i.decodedLength(e)}})),Gm=e(((e,t)=>{(function(e,n){var r={};n(r);var i=r.default;for(var a in r)i[a]=r[a];typeof t==`object`&&typeof t.exports==`object`?t.exports=i:typeof define==`function`&&define.amd?define(function(){return i}):e.sha256=i})(e,function(e){e.__esModule=!0,e.digestLength=32,e.blockSize=64;var t=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]);function n(e,n,r,i,a){for(var o,s,c,l,u,d,f,p,m,h,g,_,v;a>=64;){for(o=n[0],s=n[1],c=n[2],l=n[3],u=n[4],d=n[5],f=n[6],p=n[7],h=0;h<16;h++)g=i+h*4,e[h]=(r[g]&255)<<24|(r[g+1]&255)<<16|(r[g+2]&255)<<8|r[g+3]&255;for(h=16;h<64;h++)m=e[h-2],_=(m>>>17|m<<15)^(m>>>19|m<<13)^m>>>10,m=e[h-15],v=(m>>>7|m<<25)^(m>>>18|m<<14)^m>>>3,e[h]=(_+e[h-7]|0)+(v+e[h-16]|0);for(h=0;h<64;h++)_=(((u>>>6|u<<26)^(u>>>11|u<<21)^(u>>>25|u<<7))+(u&d^~u&f)|0)+(p+(t[h]+e[h]|0)|0)|0,v=((o>>>2|o<<30)^(o>>>13|o<<19)^(o>>>22|o<<10))+(o&s^o&c^s&c)|0,p=f,f=d,d=u,u=l+_|0,l=c,c=s,s=o,o=_+v|0;n[0]+=o,n[1]+=s,n[2]+=c,n[3]+=l,n[4]+=u,n[5]+=d,n[6]+=f,n[7]+=p,i+=64,a-=64}return i}var r=function(){function t(){this.digestLength=e.digestLength,this.blockSize=e.blockSize,this.state=new Int32Array(8),this.temp=new Int32Array(64),this.buffer=new Uint8Array(128),this.bufferLength=0,this.bytesHashed=0,this.finished=!1,this.reset()}return t.prototype.reset=function(){return this.state[0]=1779033703,this.state[1]=3144134277,this.state[2]=1013904242,this.state[3]=2773480762,this.state[4]=1359893119,this.state[5]=2600822924,this.state[6]=528734635,this.state[7]=1541459225,this.bufferLength=0,this.bytesHashed=0,this.finished=!1,this},t.prototype.clean=function(){for(var e=0;e<this.buffer.length;e++)this.buffer[e]=0;for(var e=0;e<this.temp.length;e++)this.temp[e]=0;this.reset()},t.prototype.update=function(e,t){if(t===void 0&&(t=e.length),this.finished)throw Error(`SHA256: can't update because hash was finished.`);var r=0;if(this.bytesHashed+=t,this.bufferLength>0){for(;this.bufferLength<64&&t>0;)this.buffer[this.bufferLength++]=e[r++],t--;this.bufferLength===64&&(n(this.temp,this.state,this.buffer,0,64),this.bufferLength=0)}for(t>=64&&(r=n(this.temp,this.state,e,r,t),t%=64);t>0;)this.buffer[this.bufferLength++]=e[r++],t--;return this},t.prototype.finish=function(e){if(!this.finished){var t=this.bytesHashed,r=this.bufferLength,i=t/536870912|0,a=t<<3,o=t%64<56?64:128;this.buffer[r]=128;for(var s=r+1;s<o-8;s++)this.buffer[s]=0;this.buffer[o-8]=i>>>24&255,this.buffer[o-7]=i>>>16&255,this.buffer[o-6]=i>>>8&255,this.buffer[o-5]=i>>>0&255,this.buffer[o-4]=a>>>24&255,this.buffer[o-3]=a>>>16&255,this.buffer[o-2]=a>>>8&255,this.buffer[o-1]=a>>>0&255,n(this.temp,this.state,this.buffer,0,o),this.finished=!0}for(var s=0;s<8;s++)e[s*4+0]=this.state[s]>>>24&255,e[s*4+1]=this.state[s]>>>16&255,e[s*4+2]=this.state[s]>>>8&255,e[s*4+3]=this.state[s]>>>0&255;return this},t.prototype.digest=function(){var e=new Uint8Array(this.digestLength);return this.finish(e),e},t.prototype._saveState=function(e){for(var t=0;t<this.state.length;t++)e[t]=this.state[t]},t.prototype._restoreState=function(e,t){for(var n=0;n<this.state.length;n++)this.state[n]=e[n];this.bytesHashed=t,this.finished=!1,this.bufferLength=0},t}();e.Hash=r;var i=function(){function e(e){this.inner=new r,this.outer=new r,this.blockSize=this.inner.blockSize,this.digestLength=this.inner.digestLength;var t=new Uint8Array(this.blockSize);if(e.length>this.blockSize)new r().update(e).finish(t).clean();else for(var n=0;n<e.length;n++)t[n]=e[n];for(var n=0;n<t.length;n++)t[n]^=54;this.inner.update(t);for(var n=0;n<t.length;n++)t[n]^=106;this.outer.update(t),this.istate=new Uint32Array(8),this.ostate=new Uint32Array(8),this.inner._saveState(this.istate),this.outer._saveState(this.ostate);for(var n=0;n<t.length;n++)t[n]=0}return e.prototype.reset=function(){return this.inner._restoreState(this.istate,this.inner.blockSize),this.outer._restoreState(this.ostate,this.outer.blockSize),this},e.prototype.clean=function(){for(var e=0;e<this.istate.length;e++)this.ostate[e]=this.istate[e]=0;this.inner.clean(),this.outer.clean()},e.prototype.update=function(e){return this.inner.update(e),this},e.prototype.finish=function(e){return this.outer.finished?this.outer.finish(e):(this.inner.finish(e),this.outer.update(e,this.digestLength).finish(e)),this},e.prototype.digest=function(){var e=new Uint8Array(this.digestLength);return this.finish(e),e},e}();e.HMAC=i;function a(e){var t=new r().update(e),n=t.digest();return t.clean(),n}e.hash=a,e.default=a;function o(e,t){var n=new i(e).update(t),r=n.digest();return n.clean(),r}e.hmac=o;function s(e,t,n,r){var i=r[0];if(i===0)throw Error(`hkdf: cannot expand more`);t.reset(),i>1&&t.update(e),n&&t.update(n),t.update(r),t.finish(e),r[0]++}var c=new Uint8Array(e.digestLength);function l(e,t,n,r){t===void 0&&(t=c),r===void 0&&(r=32);for(var a=new Uint8Array([1]),l=new i(o(t,e)),u=new Uint8Array(l.digestLength),d=u.length,f=new Uint8Array(r),p=0;p<r;p++)d===u.length&&(s(u,l,n,a),d=0),f[p]=u[d++];return l.clean(),u.fill(0),a.fill(0),f}e.hkdf=l;function u(e,t,n,r){for(var a=new i(e),o=a.digestLength,s=new Uint8Array(4),c=new Uint8Array(o),l=new Uint8Array(o),u=new Uint8Array(r),d=0;d*o<r;d++){var f=d+1;s[0]=f>>>24&255,s[1]=f>>>16&255,s[2]=f>>>8&255,s[3]=f>>>0&255,a.reset(),a.update(t),a.update(s),a.finish(l);for(var p=0;p<o;p++)c[p]=l[p];for(var p=2;p<=n;p++){a.reset(),a.update(l).finish(l);for(var m=0;m<o;m++)c[m]^=l[m]}for(var p=0;p<o&&d*o+p<r;p++)u[d*o+p]=c[p]}for(var d=0;d<o;d++)c[d]=l[d]=0;for(var d=0;d<4;d++)s[d]=0;return a.clean(),u}e.pbkdf2=u})})),Km=e((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.timingSafeEqual=n;function t(e,t=``){if(!e)throw Error(t)}function n(e,n){if(e.byteLength!==n.byteLength)return!1;e instanceof DataView||(e=new DataView(ArrayBuffer.isView(e)?e.buffer:e)),n instanceof DataView||(n=new DataView(ArrayBuffer.isView(n)?n.buffer:n)),t(e instanceof DataView),t(n instanceof DataView);let r=e.byteLength,i=0,a=-1;for(;++a<r;)i|=e.getUint8(a)^n.getUint8(a);return i===0}})),qm=e((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Webhook=e.WebhookVerificationError=void 0;var t=Wm(),n=Gm(),r=Km(),i=300,a=class e extends Error{constructor(t){super(t),Object.setPrototypeOf(this,e.prototype),this.name=`ExtendableError`,this.stack=Error(t).stack}},o=class e extends a{constructor(t){super(t),Object.setPrototypeOf(this,e.prototype),this.name=`WebhookVerificationError`}};e.WebhookVerificationError=o;var s=class e{constructor(n,r){if(r?.format===`raw`)this.key=n instanceof Uint8Array?n:Uint8Array.from(n,e=>e.charCodeAt(0));else{if(typeof n!=`string`)throw Error(`Expected secret to be of type string`);n.startsWith(e.prefix)&&(n=n.substring(e.prefix.length)),this.key=t.decode(n)}if(this.key.length===0)throw Error(`Secret can't be empty.`)}verify(e,t,n){let i=n?.jsonParse??!0,a={};for(let e of Object.keys(t))a[e.toLowerCase()]=t[e];let s=a[`webhook-id`],c=a[`webhook-signature`],l=a[`webhook-timestamp`];if(!c||!s||!l)throw new o(`Missing required headers`);let u=this.verifyTimestamp(l),d=this.sign(s,u,e).split(`,`)[1],f=c.split(` `),p=new globalThis.TextEncoder;for(let t of f){let[n,a]=t.split(`,`);if(n===`v1`&&(0,r.timingSafeEqual)(p.encode(a),p.encode(d))){let t=e.toString();return t===``?void 0:i?JSON.parse(t):void 0}}throw new o(`No matching signature found`)}sign(e,r,i){if(typeof i!=`string`){if(i.constructor.name===`Buffer`)i=i.toString();else throw Error(`Expected payload to be of type string or Buffer.`)}let a=new TextEncoder,o=Math.floor(r.getTime()/1e3),s=a.encode(`${e}.${o}.${i}`);return`v1,${t.encode(n.hmac(this.key,s))}`}verifyTimestamp(e){let t=Math.floor(Date.now()/1e3),n=parseInt(e,10);if(Number.isNaN(n))throw new o(`Invalid Signature Headers`);if(t-n>i)throw new o(`Message timestamp too old`);if(n>t+i)throw new o(`Message timestamp too new`);return new Date(n*1e3)}};e.Webhook=s,s.prefix=`whsec_`}))(),Jm=class extends X{parseUnverified(e){return JSON.parse(e)}unwrap(e,t){let n=t?.headers;if(n==null)throw Error(`Webhook headers are required in order to verify the signature`);let r=t.key===void 0?this._client.webhookKey:t.key;if(!r)throw Error(`Webhook key must not be null or empty in order to unwrap`);return new qm.Webhook(r).verify(e,n),JSON.parse(e)}},Ym=class extends X{list(e,t={},n){let{betas:r,workspace_id:i,...a}=t??{};return this._client.getAPIList(Q`/v1/agents/${e}/versions?beta=true`,om,{query:a,...n,headers:Z([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}},Xm=(()=>{class e extends X{constructor(){super(...arguments),this.versions=new Ym(this._client)}create(e,t){let{betas:n,workspace_id:r,...i}=e;return this._client.post(`/v1/agents?beta=true`,{body:i,...t,headers:Z([{"anthropic-beta":[...n??[],`managed-agents-2026-04-01`].toString(),...r==null?void 0:{"anthropic-workspace-id":r}},t?.headers])})}retrieve(e,t={},n){let{betas:r,workspace_id:i,...a}=t??{};return this._client.get(Q`/v1/agents/${e}?beta=true`,{query:a,...n,headers:Z([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}update(e,t,n){let{betas:r,workspace_id:i,...a}=t;return this._client.post(Q`/v1/agents/${e}?beta=true`,{body:a,...n,headers:Z([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}list(e={},t){let{betas:n,workspace_id:r,...i}=e??{};return this._client.getAPIList(`/v1/agents?beta=true`,om,{query:i,...t,headers:Z([{"anthropic-beta":[...n??[],`managed-agents-2026-04-01`].toString(),...r==null?void 0:{"anthropic-workspace-id":r}},t?.headers])})}archive(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.post(Q`/v1/agents/${e}/archive?beta=true`,{...n,headers:Z([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}}return e.Versions=Ym,e})();function Zm(e,t){if(!e)return()=>{};if(e.aborted)return t.abort(),()=>{};let n=()=>t.abort();return e.addEventListener(`abort`,n),()=>e.removeEventListener(`abort`,n)}function Qm(e,t){return e instanceof bd&&e.status===t}function $m(e){return e instanceof bd&&typeof e.status==`number`&&e.status>=400&&e.status<500}function eh(e){return $m(e)&&!Qm(e,408)&&!Qm(e,409)&&!Qm(e,429)}function th(e,t,n){return Math.min(t*2**e,n)}function nh(e,t){return e+Math.random()*(t-e)}function rh(e){return e*(1-Math.random()*.25)}function ih(e,{authToken:t,helper:n}){if(!t)throw new Y(`copyClientForHelper: expected a non-empty authToken but received ${JSON.stringify(t)}`);let r=e,i=r._options.defaultHeaders,a=r._authState?.extraHeaders,o=Z([a?Object.fromEntries(Object.entries(a).filter(([e])=>{let t=e.toLowerCase();return t!==`authorization`&&t!==`x-api-key`})):void 0,i,{[Nm]:n}]);return e.withOptions({apiKey:null,authToken:t,baseURL:e.baseURL,credentials:void 0,defaultHeaders:o})}var ah,oh,sh,ch,lh,uh,dh,fh,ph,mh,hh,gh,_h,vh=1e3,yh=6e4,bh=3e5,xh=(()=>{class e{constructor(e){ah.set(this,void 0),oh.set(this,!1),sh.set(this,void 0),ch.set(this,void 0),lh.set(this,void 0),uh.set(this,void 0),dh.set(this,void 0),fh.set(this,void 0),ph.set(this,void 0),this.client=e.client,this.environmentId=e.environmentId,this.environmentKey=e.environmentKey,this.workerId=e.workerId??wh(),q(this,ah,ih(e.client,{authToken:e.environmentKey,helper:`environments-work-poller`}),`f`),q(this,lh,e.autoStop??!0,`f`),q(this,uh,e.drain??!1,`f`),q(this,dh,e.blockMs===void 0?999:e.blockMs,`f`),q(this,fh,e.reclaimOlderThanMs??null,`f`),q(this,ph,e.requestOptions,`f`),q(this,sh,new AbortController,`f`),q(this,ch,Zm(e.signal,J(this,sh,`f`)),`f`)}get signal(){return J(this,sh,`f`).signal}abort(){J(this,sh,`f`).abort()}async*[(ah=new WeakMap,oh=new WeakMap,sh=new WeakMap,ch=new WeakMap,lh=new WeakMap,uh=new WeakMap,dh=new WeakMap,fh=new WeakMap,ph=new WeakMap,Symbol.asyncIterator)](){if(J(this,oh,`f`))throw new Y(`Cannot iterate over a consumed WorkPoller`);q(this,oh,!0,`f`);let e=pp(this.client);e.info(`poller starting`,{component:`work-poller`,environment_id:this.environmentId});let t=new Ch(e,this.environmentId);try{let n=0;for(;!J(this,sh,`f`).signal.aborted;){let r;try{r=await J(this,ah,`f`).beta.environments.work.poll(this.environmentId,{"Anthropic-Worker-ID":this.workerId,...J(this,dh,`f`)===null?{}:{block_ms:J(this,dh,`f`)},...J(this,fh,`f`)===null?{}:{reclaim_older_than_ms:J(this,fh,`f`)}},{headers:Z([J(this,ph,`f`)?.headers]),signal:J(this,sh,`f`).signal})}catch(t){if(J(this,sh,`f`).signal.aborted)return;if(eh(t))throw e.error(`poll failed permanently, stopping poller`,{error:String(t)}),t;let r=rh(Sh(n));e.warn(`poll failed, backing off`,{error:String(t),backoff_ms:r}),n++,await Ud(r,J(this,sh,`f`).signal);continue}if(n=0,r==null){if(J(this,uh,`f`))return;t.onEmptyPoll(),await Ud(nh(1e3,3e3),J(this,sh,`f`).signal);continue}t.onClaim(),e.info(`claimed work`,{component:`work-poller`,environment_id:this.environmentId,work_id:r.id,work_type:r.data.type});try{await J(this,ah,`f`).beta.environments.work.ack(r.id,{environment_id:r.environment_id},{headers:Z([J(this,ph,`f`)?.headers]),signal:J(this,sh,`f`).signal})}catch(t){e.error(`ack failed`,{work_id:r.id,error:String(t)});continue}try{yield r}finally{if(J(this,lh,`f`))try{await J(this,ah,`f`).beta.environments.work.stop(r.id,{environment_id:r.environment_id},{headers:Z([J(this,ph,`f`)?.headers])})}catch(t){Qm(t,409)||e.warn(`stop failed`,{work_id:r.id,error:String(t)})}}}}finally{J(this,ch,`f`).call(this)}}}return e})();function Sh(e){return th(e,vh,yh)}var Ch=(()=>{class e{constructor(e,t){mh.set(this,void 0),hh.set(this,void 0),gh.set(this,void 0),_h.set(this,0),q(this,mh,e,`f`),q(this,hh,t,`f`)}onEmptyPoll(){let e=Date.now(),t={component:`work-poller`,environment_id:J(this,hh,`f`)};J(this,gh,`f`)===void 0?(q(this,gh,q(this,_h,e,`f`),`f`),J(this,mh,`f`).info(`idle; polling for work`,t)):e-J(this,_h,`f`)>=bh?(q(this,_h,e,`f`),J(this,mh,`f`).info(`still polling; idle for ${Math.round((e-J(this,gh,`f`))/1e3)}s`,t)):J(this,mh,`f`).debug(`poll returned no work`,t)}onClaim(){q(this,gh,void 0,`f`)}}return mh=new WeakMap,hh=new WeakMap,gh=new WeakMap,_h=new WeakMap,e})();function wh(){let e={}.HOSTNAME;return e?`${e}-${yp()}`:yp()}var Th,Eh,Dh,Oh=(()=>{class e{constructor(){Th.set(this,[]),Eh.set(this,[]),Dh.set(this,!1)}push(e){if(J(this,Dh,`f`))return!1;let t=J(this,Eh,`f`).shift();return t?t({done:!1,value:e}):J(this,Th,`f`).push(e),!0}close(){if(!J(this,Dh,`f`))for(q(this,Dh,!0,`f`);J(this,Eh,`f`).length>0;)J(this,Eh,`f`).shift()({done:!0,value:void 0})}next(e){return J(this,Th,`f`).length>0?Promise.resolve({done:!1,value:J(this,Th,`f`).shift()}):J(this,Dh,`f`)||e?.aborted?Promise.resolve({done:!0,value:void 0}):new Promise(t=>{let n=n=>{e?.removeEventListener(`abort`,r),t(n)},r=()=>{let e=J(this,Eh,`f`).indexOf(n);e>=0&&J(this,Eh,`f`).splice(e,1),t({done:!0,value:void 0})};J(this,Eh,`f`).push(n),e?.addEventListener(`abort`,r,{once:!0})})}tryShift(){return J(this,Th,`f`).shift()}}return Th=new WeakMap,Eh=new WeakMap,Dh=new WeakMap,e})(),kh=(()=>{class e extends Error{constructor(e){let t=typeof e==`string`?e:e.map(e=>e.type===`text`?e.text:`[${e.type}]`).join(` `);super(t),this.name=`ToolError`,this.content=e}}return e})();function Ah(e){return`name`in e?e.name:`mcp_server_name`in e?e.mcp_server_name:e.type}function jh(e){return e instanceof kh?e.content:`Error: ${e instanceof Error?e.message:String(e)}`}async function Mh(e,t,n){try{let r=e.parse?e.parse(t):t;return{content:await e.run(r,n),isError:!1}}catch(e){return{content:jh(e),isError:!0}}}var Nh,Ph,Fh,Ih,Lh,Rh,zh,Bh,Vh,Hh,Uh,Wh,Gh,Kh,qh,Jh,Yh,Xh,Zh,Qh,$h,eg,tg,ng,rg,ig,ag,og,sg,cg,lg,ug,dg,fg=500,pg=1e4,mg=12e4,hg=3e4,gg=1e3,_g=3e4,vg=3e5;function yg(e){return e.type===`session.status_idle`&&e.stop_reason?.type===`end_turn`}var bg=(()=>{class e{constructor(e,t){Nh.set(this,void 0),Ph.set(this,void 0),Fh.set(this,new Set),Ih.set(this,!1),Lh.set(this,void 0),q(this,Nh,e,`f`),q(this,Ph,t,`f`)}noteEvent(e){e.type!==`user.tool_confirmation`&&(yg(e)?this.arm():this.disarm())}block(e){J(this,Fh,`f`).add(e),J(this,Lh,`f`)!==void 0&&(q(this,Ih,!0,`f`),clearTimeout(J(this,Lh,`f`)),q(this,Lh,void 0,`f`))}unblock(e){J(this,Fh,`f`).delete(e),J(this,Fh,`f`).size===0&&J(this,Ih,`f`)&&this.arm()}arm(){if(!(J(this,Nh,`f`)<=0)){if(J(this,Fh,`f`).size>0){q(this,Ih,!0,`f`);return}q(this,Ih,!1,`f`),J(this,Lh,`f`)!==void 0&&clearTimeout(J(this,Lh,`f`)),q(this,Lh,setTimeout(J(this,Ph,`f`),J(this,Nh,`f`)),`f`)}}disarm(){q(this,Ih,!1,`f`),J(this,Lh,`f`)!==void 0&&(clearTimeout(J(this,Lh,`f`)),q(this,Lh,void 0,`f`))}}return Nh=new WeakMap,Ph=new WeakMap,Fh=new WeakMap,Ih=new WeakMap,Lh=new WeakMap,e})(),xg=(()=>{class e{constructor(e,t){Rh.add(this),zh.set(this,!1),Bh.set(this,void 0),Vh.set(this,void 0),Hh.set(this,void 0),Uh.set(this,void 0),Wh.set(this,void 0),Gh.set(this,new Set),Kh.set(this,new Set),qh.set(this,new Map),Jh.set(this,new Map),Yh.set(this,new Oh),Xh.set(this,0),Zh.set(this,vg),Qh.set(this,null),$h.set(this,void 0),this.client=t.client,this.sessionId=e,this.tools=t.tools,this.maxIdleMs=t.maxIdleMs??6e4,q(this,Wh,pp(t.client),`f`),q(this,Uh,new Map(t.tools.map(e=>[Ah(e),e])),`f`),q(this,Bh,new AbortController,`f`),q(this,Vh,Zm(t.signal,J(this,Bh,`f`)),`f`),q(this,Hh,t.requestOptions,`f`),q(this,$h,new bg(this.maxIdleMs,()=>{J(this,Wh,`f`).info(`session idle after end_turn; stopping`,{component:`session-tool-runner`,session_id:this.sessionId,max_idle_ms:this.maxIdleMs}),J(this,Bh,`f`).abort()}),`f`)}get signal(){return J(this,Bh,`f`).signal}abort(){J(this,Bh,`f`).abort()}_setSendRetryWindow(e){q(this,Zh,e,`f`)}async*[(zh=new WeakMap,Bh=new WeakMap,Vh=new WeakMap,Hh=new WeakMap,Uh=new WeakMap,Wh=new WeakMap,Gh=new WeakMap,Kh=new WeakMap,qh=new WeakMap,Jh=new WeakMap,Yh=new WeakMap,Xh=new WeakMap,Zh=new WeakMap,Qh=new WeakMap,$h=new WeakMap,Rh=new WeakSet,Symbol.asyncIterator)](){if(J(this,zh,`f`))throw new Y(`Cannot iterate over a consumed SessionToolRunner`);q(this,zh,!0,`f`),J(this,Wh,`f`).info(`session tool runner starting`,{component:`session-tool-runner`,session_id:this.sessionId});let e=J(this,Rh,`m`,tg).call(this).catch(e=>{J(this,Bh,`f`).signal.aborted||J(this,Wh,`f`).error(`stream loop failed`,{error:String(e)}),J(this,Bh,`f`).abort()});try{for(;;){let e=await J(this,Yh,`f`).next(J(this,Bh,`f`).signal);if(e.done)break;yield e.value}await e;let t;for(;(t=J(this,Yh,`f`).tryShift())!==void 0;)yield t}finally{J(this,Bh,`f`).abort(),J(this,$h,`f`).disarm(),await e;try{await J(this,Rh,`m`,dg).call(this)}catch(e){J(this,Wh,`f`).warn(`drain failed`,{error:String(e)})}J(this,Yh,`f`).close();for(let e of this.tools)try{await e.close?.()}catch(t){J(this,Wh,`f`).warn(`tool.close failed`,{tool:Ah(e),error:String(t)})}J(this,Vh,`f`).call(this)}}}return eg=function(){return{...J(this,Hh,`f`),headers:Z([Fm(`session-tool-runner`),J(this,Hh,`f`)?.headers]),signal:J(this,Bh,`f`).signal}},tg=async function(){let e=J(this,Bh,`f`),t=fg;for(;!e.signal.aborted;){try{let e=await this.client.beta.sessions.events.stream(this.sessionId,{},J(this,Rh,`m`,eg).call(this));await J(this,Rh,`m`,ng).call(this);for await(let n of e)if(t=fg,await J(this,Rh,`m`,ig).call(this,n))return}catch(n){if(e.signal.throwIfAborted(),eh(n))throw J(this,Wh,`f`).error(`permanent stream failure, shutting down`,{error:String(n)}),e.abort(),n;J(this,Wh,`f`).warn(`stream disconnected, reconnecting`,{error:String(n),backoff_ms:t})}e.signal.throwIfAborted(),await Ud(t,e.signal),t=Math.min(t*2,pg)}},ng=async function(){let e=J(this,Bh,`f`),t=[],n=!1;try{for await(let e of this.client.beta.sessions.events.list(this.sessionId,{limit:1e3},J(this,Rh,`m`,eg).call(this)))J(this,Rh,`m`,rg).call(this,e,t),n=yg(e)}catch(n){e.signal.throwIfAborted(),J(this,Wh,`f`).warn(`reconcile list failed`,{error:String(n)});for(let e of t)J(this,Gh,`f`).delete(e.id);return}let r=t.filter(e=>!J(this,Kh,`f`).has(e.id));J(this,$h,`f`).disarm();for(let e of r)await J(this,Rh,`m`,ag).call(this,e);for(let e of[...J(this,Jh,`f`).values()]){let t=J(this,qh,`f`).get(e.id);t!==void 0&&await J(this,Rh,`m`,sg).call(this,e,t)}let i=r.filter(e=>!J(this,Kh,`f`).has(e.id)&&!J(this,Jh,`f`).has(e.id));n&&i.length===0?J(this,$h,`f`).arm():J(this,$h,`f`).disarm()},rg=function(e,t){e.type===`agent.tool_use`||e.type===`agent.custom_tool_use`?(J(this,Gh,`f`).add(e.id),J(this,Kh,`f`).has(e.id)||t.push(e)):e.type===`user.tool_result`?J(this,Kh,`f`).add(e.tool_use_id):e.type===`user.custom_tool_result`?J(this,Kh,`f`).add(e.custom_tool_use_id):e.type===`user.tool_confirmation`&&(J(this,Kh,`f`).has(e.tool_use_id)||J(this,qh,`f`).set(e.tool_use_id,e.result))},ig=async function(e){switch(J(this,$h,`f`).noteEvent(e),e.type){case`agent.tool_use`:case`agent.custom_tool_use`:return J(this,Gh,`f`).has(e.id)||(J(this,Gh,`f`).add(e.id),await J(this,Rh,`m`,ag).call(this,e)),!1;case`user.tool_confirmation`:return await J(this,Rh,`m`,og).call(this,e),!1;case`user.tool_result`:return J(this,Kh,`f`).add(e.tool_use_id),!1;case`user.custom_tool_result`:return J(this,Kh,`f`).add(e.custom_tool_use_id),!1;case`session.status_terminated`:case`session.deleted`:return J(this,Wh,`f`).info(`session terminated`,{component:`session-tool-runner`,session_id:this.sessionId}),J(this,Bh,`f`).abort(),!0;default:return!1}},ag=async function(e){let t=e.evaluated_permission,n=t===`deny`?`deny`:J(this,qh,`f`).get(e.id);if(n===void 0){t===void 0||t===`allow`?await J(this,Rh,`m`,lg).call(this,e,void 0):J(this,Jh,`f`).has(e.id)||(J(this,Wh,`f`).info(`tool call awaiting confirmation; holding`,{component:`session-tool-runner`,session_id:this.sessionId,tool:e.name,tool_use_id:e.id}),J(this,Jh,`f`).set(e.id,e),J(this,$h,`f`).block(e.id));return}await J(this,Rh,`m`,sg).call(this,e,n)},og=async function(e){J(this,qh,`f`).set(e.tool_use_id,e.result);let t=J(this,Jh,`f`).get(e.tool_use_id);t!==void 0&&await J(this,Rh,`m`,sg).call(this,t,e.result)},sg=async function(e,t){let n=J(this,Jh,`f`).delete(e.id);if(t===`allow`){J(this,Wh,`f`).info(`tool call confirmed`,{component:`session-tool-runner`,session_id:this.sessionId,tool:e.name,tool_use_id:e.id}),n||J(this,$h,`f`).block(e.id);try{await J(this,Rh,`m`,lg).call(this,e,`allow`)}finally{J(this,$h,`f`).unblock(e.id)}return}n&&J(this,$h,`f`).unblock(e.id),J(this,Kh,`f`).add(e.id),J(this,Wh,`f`).info(`tool call denied; not executing`,{component:`session-tool-runner`,session_id:this.sessionId,tool:e.name,tool_use_id:e.id}),J(this,Rh,`m`,cg).call(this,{event:e,toolUseId:e.id,name:e.name,isError:!1,posted:!1,confirmation:`deny`})},cg=function(e){J(this,Yh,`f`).push(e)},lg=async function(e,t){var n,r;if(!J(this,Kh,`f`).has(e.id)){J(this,Wh,`f`).info(`executing tool`,{component:`session-tool-runner`,session_id:this.sessionId,tool:e.name,tool_use_id:e.id}),q(this,Xh,(n=J(this,Xh,`f`),n++,n),`f`);try{let n=J(this,Uh,`f`).get(e.name);if(!n){J(this,Wh,`f`).info(`tool not owned by this runner; leaving the tool_use_id pending for its owner`,{component:`session-tool-runner`,session_id:this.sessionId,tool:e.name,tool_use_id:e.id}),J(this,Rh,`m`,cg).call(this,{event:e,toolUseId:e.id,name:e.name,isError:!1,posted:!1,confirmation:t});return}let r,i,a=new AbortController,o=Zm(J(this,Bh,`f`).signal,a),s=setTimeout(()=>a.abort(),mg);try{let t=await Mh(n,e.input,{toolUse:e,toolUseBlock:e,signal:a.signal});r=t.content,i=t.isError}finally{clearTimeout(s),o()}let c=Sg(e,i,Cg(r)),l=await J(this,Rh,`m`,ug).call(this,c,e.id);J(this,Rh,`m`,cg).call(this,{event:e,result:c,toolUseId:e.id,name:e.name,isError:i,posted:l,confirmation:t})}finally{q(this,Xh,(r=J(this,Xh,`f`),r--,r),`f`),J(this,Xh,`f`)===0&&J(this,Qh,`f`)?.call(this)}}},ug=async function(e,t){let n=J(this,Bh,`f`),r=Date.now(),i,a=0;for(;;){a++,n.signal.throwIfAborted();try{return await this.client.beta.sessions.events.send(this.sessionId,{events:[e]},J(this,Rh,`m`,eg).call(this)),J(this,Kh,`f`).add(t),!0}catch(e){if(i=e,eh(e))break;let o=J(this,Zh,`f`)-(Date.now()-r);if(o<=0)break;let s=Math.min(rh(th(a-1,gg,_g)),o);J(this,Wh,`f`).warn(`tool result send failed; retrying`,{tool_use_id:t,attempt:a,backoff_ms:s,error:String(e)}),await Ud(s,n.signal)}}return J(this,Wh,`f`).error(`failed to send tool result`,{tool_use_id:t,attempts:a,error:String(i)}),!1},dg=async function(){J(this,Xh,`f`)!==0&&(await Promise.race([new Promise(e=>q(this,Qh,e,`f`)),Ud(hg)]),q(this,Qh,null,`f`),J(this,Xh,`f`)>0&&J(this,Wh,`f`).warn(`drain timeout exceeded`))},e})();function Sg(e,t,n){return e.type===`agent.custom_tool_use`?{type:`user.custom_tool_result`,custom_tool_use_id:e.id,is_error:t,content:n}:{type:`user.tool_result`,tool_use_id:e.id,is_error:t,content:n}}function Cg(e){if(typeof e==`string`)return[{type:`text`,text:e||`(no output)`}];let t=e.map(e=>e.type===`text`?{type:`text`,text:e.text||`(no output)`}:e.type===`image`||e.type===`document`?e:e.type===`search_result`?{type:`search_result`,source:e.source,title:e.title,content:e.content.map(e=>({type:`text`,text:e.text})),citations:{enabled:e.citations?.enabled??!1}}:{type:`text`,text:JSON.stringify(e)});return t.length>0?t:[{type:`text`,text:`(no output)`}]}var wg=15e3,Tg=5e3;function Eg(e,t){if(!(e>=5e3))throw new Y(`${t} must be at least ${Tg}ms (got ${e}); to run without memory sync, pass \`memorySyncIntervalMs: null\` to the worker instead`)}var Dg,Og,kg,Ag,jg,Mg=3e4,Ng=9e4,Pg=`NO_HEARTBEAT`;function Fg(e){return e.resources.some(e=>e.type===`memory_store`)}function Ig(e){if(!e)return null;let t;try{let n=e.replace(/-/g,`+`).replace(/_/g,`/`),r=n.padEnd(Math.ceil(n.length/4)*4,`=`);t=JSON.parse(rp(ip(r)))}catch{return null}if(typeof t!=`object`||!t||Array.isArray(t))return null;let n=t.sessions_token;return typeof n==`string`&&n!==``?n:null}var Lg=(()=>{class e{constructor(e){if(Dg.add(this),Og.set(this,void 0),e.unrestrictedPaths!==void 0)throw new Y("The `unrestrictedPaths` option you passed to EnvironmentWorker (or client.beta.environments.work.worker()) is no longer supported. The worker's file tools (read, write, edit, glob, grep) are now always confined to `workdir` plus the session's memory folders. Remove `unrestrictedPaths` from your options; to let the file tools reach any other directory, add it to `AgentToolContext.allowedRoots` from a `tools` factory.");this.client=e.client,this.environmentId=e.environmentId,this.environmentKey=e.environmentKey,this.tools=e.tools,this.workdir=e.workdir??process.cwd(),this.maxFileBytes=e.maxFileBytes,this.maxIdleMs=e.maxIdleMs,e.memorySyncIntervalMs!=null&&Eg(e.memorySyncIntervalMs,`memorySyncIntervalMs`),this.memorySyncIntervalMs=e.memorySyncIntervalMs,this.memorySyncDeletions=e.memorySyncDeletions??`enabled`,this.workerId=e.workerId,this.requestOptions=e.requestOptions,q(this,Og,e.signal,`f`)}async run(e){let{environmentId:t,environmentKey:n}=this;if(t===void 0||n===void 0)throw new Y(`EnvironmentWorker.run: environmentId and environmentKey are required to poll for work`);let r=e??J(this,Og,`f`),i=new xh({client:this.client,environmentId:t,environmentKey:n,...this.workerId===void 0?{}:{workerId:this.workerId},...r?{signal:r}:{},...this.requestOptions===void 0?{}:{requestOptions:this.requestOptions},autoStop:!1});for await(let e of i)try{await J(this,Dg,`m`,kg).call(this,e,n,i.signal)}catch(t){if(i.signal?.aborted)throw t;pp(this.client).error(`work item failed`,{work_id:e.id,error:String(t)})}}async handleItem(e){let t=e?.workId??Qf(`ANTHROPIC_WORK_ID`),n=e?.environmentId??Qf(`ANTHROPIC_ENVIRONMENT_ID`),r=e?.sessionId??Qf(`ANTHROPIC_SESSION_ID`),i=(e?.environmentKey??this.environmentKey??Qf(`ANTHROPIC_ENVIRONMENT_KEY`))||void 0,a=e?.workSecret||Qf(`ANTHROPIC_WORK_SECRET`)||null;if(!t)throw new Y(`handleItem: workId is required — pass it or set ANTHROPIC_WORK_ID`);if(!n)throw new Y(`handleItem: environmentId is required — pass it or set ANTHROPIC_ENVIRONMENT_ID`);if(!r)throw new Y(`handleItem: sessionId is required — pass it or set ANTHROPIC_SESSION_ID`);if(!i&&!a)throw new Y(`handleItem: environmentKey is required when there is no work secret — pass it, construct the worker with it, or set ANTHROPIC_ENVIRONMENT_KEY`);let o={id:t,environment_id:n,secret:a,data:{type:`session`,id:r}};await J(this,Dg,`m`,kg).call(this,o,i,e?.signal??J(this,Og,`f`))}}return Og=new WeakMap,Dg=new WeakSet,kg=async function(e,t,n){let r=pp(this.client),i=Ig(e.secret),a=i??t;if(a===void 0)throw new Y("handleItem: the work item carried a secret payload but no sessions token could be extracted, and there is no environment key to fall back to; the poller must issue a secret whose payload carries `sessions_token`, or provide the environment key (pass it, construct the worker with it, or set ANTHROPIC_ENVIRONMENT_KEY)");e.secret&&i===null&&r.warn(`work item carried a secret payload but no sessions token could be extracted; falling back to the environment key`,{work_id:e.id});let o=ih(this.client,{authToken:a,helper:`environments-worker`}),s=e.data.id,c=new AbortController,l=Zm(n,c),u=new Bg(c),d=await Pf(()=>import(`./node.browser-BB8qhVcm.js`),[],import.meta.url),f,p,m=Hg(o,e,u,r,this.requestOptions,e=>{f=e,p?._setSendRetryWindow(e)}).catch(t=>{c.signal.aborted||r.error(`heartbeat loop failed`,{work_id:e.id,error:String(t)}),c.abort()}),h=async()=>{},g,_=!1;try{if(e.data.type!==`session`){r.debug(`skipping non-session work item`,{work_id:e.id,type:e.data.type});return}let t=await o.beta.sessions.retrieve(s);if(i===null&&this.memorySyncIntervalMs!==null&&Fg(t))throw new d.SessionMemoryError(`cannot mount the session's memories: the work item carried no sessions token (work_id=${e.id}, session_id=${s}); the memory endpoints reject the environment key, so the poller must issue a per-item \`secret\` carrying \`sessions_token\`, or set \`memorySyncIntervalMs: null\` to run without memory`);let n={workdir:this.workdir,client:o,session:t,...this.maxFileBytes===void 0?{}:{maxFileBytes:this.maxFileBytes}};try{h=await d.setupSkills(n)}catch(t){r.warn(`skill setup failed`,{session_id:s,work_id:e.id,error:String(t)})}i!==null&&this.memorySyncIntervalMs!==null?(g=new d.SessionMemoryStores(o,{workdir:this.workdir,...this.memorySyncIntervalMs===void 0?{}:{syncIntervalMs:this.memorySyncIntervalMs},syncDeletions:this.memorySyncDeletions}),await g.download(t),n.allowedRoots=g.roots,n.readOnlyRoots=g.readOnlyRoots):r.debug(`memory stores disabled for this item`,{work_id:e.id}),p=new xg(s,{client:o,tools:typeof this.tools==`function`?this.tools(n):this.tools??d.betaAgentToolset20260401(n),...this.maxIdleMs===void 0?{}:{maxIdleMs:this.maxIdleMs},...this.requestOptions===void 0?{}:{requestOptions:this.requestOptions},signal:c.signal}),f!==void 0&&p._setSendRetryWindow(f);for await(let e of p)g&&await g.syncIfDue();_=!c.signal.aborted}finally{try{await h().catch(t=>{r.warn(`skill cleanup failed`,{session_id:s,work_id:e.id,error:String(t)})})}finally{if(g){let t=d.MEMORY_FLUSH_TIMEOUT_MS;_&&await Rg(g.finish(),t)&&r.warn(`final memory sync cut off after ${t}ms; the flush that follows still uploads changed files`,{session_id:s,work_id:e.id});let n=new AbortController;await Rg(g.flushWrites(n.signal),t)&&(n.abort(),r.warn(`memory flush cut off after ${t}ms; changed files it had not uploaded yet are not saved`,{session_id:s,work_id:e.id})),await g.dispose().catch(t=>{r.warn(`memory store cleanup failed`,{session_id:s,work_id:e.id,error:String(t)})})}}u.finish(`runner_done`),l(),await m,u.lost?r.info(`lease lost; released without stopping it`,{session_id:s,work_id:e.id}):await zg(o,e,r,this.requestOptions)}},e})();async function Rg(e,t){let n;try{return await Promise.race([e.then(()=>!1,()=>!1),new Promise(e=>{n=setTimeout(()=>e(!0),t)})])}finally{n!==void 0&&clearTimeout(n)}}async function zg(e,t,n,r){try{await e.beta.environments.work.stop(t.id,{environment_id:t.environment_id,force:!0},{...r,headers:Z([r?.headers])})}catch(e){Qm(e,409)||n.error(`force-stop on exit failed`,{work_id:t.id,error:String(e)})}}var Bg=(()=>{class e{constructor(e){Ag.set(this,void 0),jg.set(this,void 0),q(this,Ag,e,`f`)}get signal(){return J(this,Ag,`f`).signal}finish(e){q(this,jg,J(this,jg,`f`)??e,`f`),J(this,Ag,`f`).abort()}get lost(){return J(this,jg,`f`)===`lease_lost`||J(this,jg,`f`)===`assumed_lost`}}return Ag=new WeakMap,jg=new WeakMap,e})();function Vg(e){let t=e instanceof bd?e.error:void 0;for(let e of[`error`,`details`,`current_state`]){if(!Bd(t))return{};t=t[e]}return Bd(t)?t:{}}async function Hg(e,t,n,r,i,a){let o=Mg,s=Ng,c=Date.now(),l=Pg,u=async()=>{let u=new AbortController,d=Zm(n.signal,u),f=setTimeout(()=>u.abort(),o);try{let d=await e.beta.environments.work.heartbeat(t.id,{environment_id:t.environment_id,expected_last_heartbeat:l},{...i,headers:Z([i?.headers]),signal:u.signal});c=Date.now(),l=d.last_heartbeat,d.ttl_seconds>0&&(s=d.ttl_seconds*1e3,o=Math.max(1e3,Math.min(s/2,Mg)),a?.(s)),(d.state===`stopping`||d.state===`stopped`)&&(r.info(`heartbeat signals shutdown`,{work_id:t.id,state:d.state}),n.finish(`control_plane_stop`)),d.lease_extended||(r.warn(`lease not extended, shutting down`,{work_id:t.id}),n.finish(`control_plane_stop`))}catch(e){if(n.signal.throwIfAborted(),Qm(e,412)){let i=Vg(e);r.error(`lease lost: heartbeat precondition failed`,{work_id:t.id,server_state:i.state,server_ttl_seconds:i.ttl_seconds,server_last_heartbeat:i.last_heartbeat}),n.finish(`lease_lost`);return}if(eh(e))throw r.error(`permanent heartbeat failure`,{work_id:t.id,error:String(e)}),n.finish(`heartbeat_rejected`),e;if(Date.now()-c>s){r.error(`lease assumed lost: no successful heartbeat in ttl`,{work_id:t.id,ttl_ms:s,error:String(e)}),n.finish(`assumed_lost`);return}r.warn(`transient heartbeat failure`,{work_id:t.id,error:String(e)})}finally{clearTimeout(f),d()}};for(await u();!n.signal.aborted;)await Ud(o,n.signal),n.signal.throwIfAborted(),await u()}var Ug=(()=>{class e extends X{retrieve(e,t,n){let{environment_id:r,betas:i,workspace_id:a}=t;return this._client.get(Q`/v1/environments/${r}/work/${e}?beta=true`,{...n,headers:Z([{"anthropic-beta":[...i??[],`managed-agents-2026-04-01`].toString(),...a==null?void 0:{"anthropic-workspace-id":a}},n?.headers])})}update(e,t,n){let{environment_id:r,betas:i,workspace_id:a,...o}=t;return this._client.post(Q`/v1/environments/${r}/work/${e}?beta=true`,{body:o,...n,headers:Z([{"anthropic-beta":[...i??[],`managed-agents-2026-04-01`].toString(),...a==null?void 0:{"anthropic-workspace-id":a}},n?.headers])})}list(e,t={},n){let{betas:r,...i}=t??{};return this._client.getAPIList(Q`/v1/environments/${e}/work?beta=true`,om,{query:i,...n,headers:Z([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString()},n?.headers])})}ack(e,t,n){let{environment_id:r,betas:i}=t;return this._client.post(Q`/v1/environments/${r}/work/${e}/ack?beta=true`,{...n,headers:Z([{"anthropic-beta":[...i??[],`managed-agents-2026-04-01`].toString()},n?.headers])})}heartbeat(e,t,n){let{environment_id:r,desired_ttl_seconds:i,expected_last_heartbeat:a,betas:o}=t;return this._client.post(Q`/v1/environments/${r}/work/${e}/heartbeat?beta=true`,{query:{desired_ttl_seconds:i,expected_last_heartbeat:a},...n,headers:Z([{"anthropic-beta":[...o??[],`managed-agents-2026-04-01`].toString()},n?.headers])})}poll(e,t={},n){let{betas:r,"Anthropic-Worker-ID":i,...a}=t??{};return this._client.get(Q`/v1/environments/${e}/work/poll?beta=true`,{query:a,...n,headers:Z([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"Anthropic-Worker-ID":i}},n?.headers])})}stats(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.get(Q`/v1/environments/${e}/work/stats?beta=true`,{...n,headers:Z([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}stop(e,t,n){let{environment_id:r,betas:i,workspace_id:a,...o}=t;return this._client.post(Q`/v1/environments/${r}/work/${e}/stop?beta=true`,{body:o,...n,headers:Z([{"anthropic-beta":[...i??[],`managed-agents-2026-04-01`].toString(),...a==null?void 0:{"anthropic-workspace-id":a}},n?.headers])})}poller(e){return new xh({...e,client:this._client})}worker(e){return new Lg({...e,client:this._client})}}return e.WorkPoller=xh,e.EnvironmentWorker=Lg,e})(),Wg=(()=>{class e extends X{constructor(){super(...arguments),this.work=new Ug(this._client)}create(e,t){let{betas:n,workspace_id:r,...i}=e;return this._client.post(`/v1/environments?beta=true`,{body:i,...t,headers:Z([{"anthropic-beta":[...n??[],`managed-agents-2026-04-01`].toString(),...r==null?void 0:{"anthropic-workspace-id":r}},t?.headers])})}retrieve(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.get(Q`/v1/environments/${e}?beta=true`,{...n,headers:Z([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}update(e,t,n){let{betas:r,workspace_id:i,...a}=t;return this._client.post(Q`/v1/environments/${e}?beta=true`,{body:a,...n,headers:Z([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}list(e={},t){let{betas:n,workspace_id:r,...i}=e??{};return this._client.getAPIList(`/v1/environments?beta=true`,om,{query:i,...t,headers:Z([{"anthropic-beta":[...n??[],`managed-agents-2026-04-01`].toString(),...r==null?void 0:{"anthropic-workspace-id":r}},t?.headers])})}delete(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.delete(Q`/v1/environments/${e}?beta=true`,{...n,headers:Z([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}archive(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.post(Q`/v1/environments/${e}/archive?beta=true`,{...n,headers:Z([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}}return e.Work=Ug,e})(),Gg=class extends X{create(e,t,n){let{view:r,betas:i,workspace_id:a,...o}=t;return this._client.post(Q`/v1/memory_stores/${e}/memories?beta=true`,{query:{view:r},body:o,...n,headers:Z([{"anthropic-beta":[...i??[],`agent-memory-2026-07-22`].toString(),...a==null?void 0:{"anthropic-workspace-id":a}},n?.headers])})}retrieve(e,t,n){let{memory_store_id:r,betas:i,workspace_id:a,...o}=t;return this._client.get(Q`/v1/memory_stores/${r}/memories/${e}?beta=true`,{query:o,...n,headers:Z([{"anthropic-beta":[...i??[],`agent-memory-2026-07-22`].toString(),...a==null?void 0:{"anthropic-workspace-id":a}},n?.headers])})}update(e,t,n){let{memory_store_id:r,view:i,betas:a,workspace_id:o,...s}=t;return this._client.post(Q`/v1/memory_stores/${r}/memories/${e}?beta=true`,{query:{view:i},body:s,...n,headers:Z([{"anthropic-beta":[...a??[],`agent-memory-2026-07-22`].toString(),...o==null?void 0:{"anthropic-workspace-id":o}},n?.headers])})}list(e,t={},n){let{betas:r,workspace_id:i,...a}=t??{};return this._client.getAPIList(Q`/v1/memory_stores/${e}/memories?beta=true`,om,{query:a,...n,headers:Z([{"anthropic-beta":[...r??[],`agent-memory-2026-07-22`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}delete(e,t,n){let{memory_store_id:r,expected_content_sha256:i,betas:a,workspace_id:o}=t;return this._client.delete(Q`/v1/memory_stores/${r}/memories/${e}?beta=true`,{query:{expected_content_sha256:i},...n,headers:Z([{"anthropic-beta":[...a??[],`agent-memory-2026-07-22`].toString(),...o==null?void 0:{"anthropic-workspace-id":o}},n?.headers])})}},Kg=class extends X{retrieve(e,t,n){let{memory_store_id:r,betas:i,workspace_id:a,...o}=t;return this._client.get(Q`/v1/memory_stores/${r}/memory_versions/${e}?beta=true`,{query:o,...n,headers:Z([{"anthropic-beta":[...i??[],`agent-memory-2026-07-22`].toString(),...a==null?void 0:{"anthropic-workspace-id":a}},n?.headers])})}list(e,t={},n){let{betas:r,workspace_id:i,...a}=t??{};return this._client.getAPIList(Q`/v1/memory_stores/${e}/memory_versions?beta=true`,om,{query:a,...n,headers:Z([{"anthropic-beta":[...r??[],`agent-memory-2026-07-22`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}redact(e,t,n){let{memory_store_id:r,betas:i,workspace_id:a}=t;return this._client.post(Q`/v1/memory_stores/${r}/memory_versions/${e}/redact?beta=true`,{...n,headers:Z([{"anthropic-beta":[...i??[],`agent-memory-2026-07-22`].toString(),...a==null?void 0:{"anthropic-workspace-id":a}},n?.headers])})}},qg=(()=>{class e extends X{constructor(){super(...arguments),this.memories=new Gg(this._client),this.memoryVersions=new Kg(this._client)}create(e,t){let{betas:n,workspace_id:r,...i}=e;return this._client.post(`/v1/memory_stores?beta=true`,{body:i,...t,headers:Z([{"anthropic-beta":[...n??[],`agent-memory-2026-07-22`].toString(),...r==null?void 0:{"anthropic-workspace-id":r}},t?.headers])})}retrieve(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.get(Q`/v1/memory_stores/${e}?beta=true`,{...n,headers:Z([{"anthropic-beta":[...r??[],`agent-memory-2026-07-22`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}update(e,t,n){let{betas:r,workspace_id:i,...a}=t;return this._client.post(Q`/v1/memory_stores/${e}?beta=true`,{body:a,...n,headers:Z([{"anthropic-beta":[...r??[],`agent-memory-2026-07-22`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}list(e={},t){let{betas:n,workspace_id:r,...i}=e??{};return this._client.getAPIList(`/v1/memory_stores?beta=true`,om,{query:i,...t,headers:Z([{"anthropic-beta":[...n??[],`agent-memory-2026-07-22`].toString(),...r==null?void 0:{"anthropic-workspace-id":r}},t?.headers])})}delete(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.delete(Q`/v1/memory_stores/${e}?beta=true`,{...n,headers:Z([{"anthropic-beta":[...r??[],`agent-memory-2026-07-22`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}archive(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.post(Q`/v1/memory_stores/${e}/archive?beta=true`,{...n,headers:Z([{"anthropic-beta":[...r??[],`agent-memory-2026-07-22`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}}return e.Memories=Gg,e.MemoryVersions=Kg,e})(),Jg=(()=>{class e{constructor(e,t){this.iterator=e,this.controller=t}async*decoder(){let e=new Rp;for await(let t of this.iterator)for(let n of e.decode(t))yield JSON.parse(n);for(let t of e.flush())yield JSON.parse(t)}[Symbol.asyncIterator](){return this.decoder()}static fromResponse(t,n){if(!t.body)throw n.abort(),globalThis.navigator!==void 0&&globalThis.navigator.product===`ReactNative`?new Y(`The default react-native fetch implementation does not support streaming. Please use expo/fetch: https://docs.expo.dev/versions/latest/sdk/expo/#expofetch-api`):new Y(`Attempted to iterate over a response with no body`);return new e(lf(t.body),n)}}return e})(),Yg=class extends X{create(e,t){let{betas:n,user_profile_id:r,workspace_id:i,...a}=e;return this._client.post(`/v1/messages/batches?beta=true`,{body:a,...t,headers:Z([{"anthropic-beta":[...n??[],`message-batches-2024-09-24`].toString(),...r==null?void 0:{"anthropic-user-profile-id":r},...i==null?void 0:{"anthropic-workspace-id":i}},t?.headers])})}retrieve(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.get(Q`/v1/messages/batches/${e}?beta=true`,{...n,headers:Z([{"anthropic-beta":[...r??[],`message-batches-2024-09-24`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}list(e={},t){let{betas:n,workspace_id:r,...i}=e??{};return this._client.getAPIList(`/v1/messages/batches?beta=true`,am,{query:i,...t,headers:Z([{"anthropic-beta":[...n??[],`message-batches-2024-09-24`].toString(),...r==null?void 0:{"anthropic-workspace-id":r}},t?.headers])})}delete(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.delete(Q`/v1/messages/batches/${e}?beta=true`,{...n,headers:Z([{"anthropic-beta":[...r??[],`message-batches-2024-09-24`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}cancel(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.post(Q`/v1/messages/batches/${e}/cancel?beta=true`,{...n,headers:Z([{"anthropic-beta":[...r??[],`message-batches-2024-09-24`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}async results(e,t={},n){let r=await this.retrieve(e,t,n);if(!r.results_url)throw new Y(`No batch \`results_url\`; Has it finished processing? ${r.processing_status} - ${r.id}`);let{betas:i,workspace_id:a}=t??{};return this._client.get(r.results_url,{...n,headers:Z([{"anthropic-beta":[...i??[],`message-batches-2024-09-24`].toString(),Accept:`application/binary`,...a==null?void 0:{"anthropic-workspace-id":a}},n?.headers]),stream:!0,__binaryResponse:!0})._thenUnwrap((e,t)=>Jg.fromResponse(t.response,t.controller))}},Xg={"claude-opus-4@20250514":8192,"anthropic.claude-opus-4-1-20250805-v1:0":8192,"claude-opus-4-1@20250805":8192};function Zg(e){return e?.output_format??e?.output_config?.format}function Qg(e,t,n){let r=Zg(t);return!t||!(`parse`in(r??{}))?{...e,content:e.content.map(e=>{if(e.type===`text`){let t=Object.defineProperty({...e},"parsed_output",{value:null,enumerable:!1});return Object.defineProperty(t,"parsed",{get(){return n.logger.warn("The `parsed` property on `text` blocks is deprecated, please use `parsed_output` instead."),null},enumerable:!1})}return e}),parsed_output:null}:$g(e,t,n)}function $g(e,t,n){let r=null,i=e.content.map(e=>{if(e.type===`text`){let i=e_(t,e.text);r===null&&(r=i);let a=Object.defineProperty({...e},"parsed_output",{value:i,enumerable:!1});return Object.defineProperty(a,"parsed",{get(){return n.logger.warn("The `parsed` property on `text` blocks is deprecated, please use `parsed_output` instead."),i},enumerable:!1})}return e});return{...e,content:i,parsed_output:r}}function e_(e,t){let n=Zg(e);if(n?.type!==`json_schema`)return null;try{return`parse`in n?n.parse(t):JSON.parse(t)}catch(e){throw new Y(`Failed to parse structured output: ${e}`)}}var t_=e=>{let t=0,n=[];for(;t<e.length;){let r=e[t];if(r===`\\`){t++;continue}if(r===`{`){n.push({type:`brace`,value:`{`}),t++;continue}if(r===`}`){n.push({type:`brace`,value:`}`}),t++;continue}if(r===`[`){n.push({type:`paren`,value:`[`}),t++;continue}if(r===`]`){n.push({type:`paren`,value:`]`}),t++;continue}if(r===`:`){n.push({type:`separator`,value:`:`}),t++;continue}if(r===`,`){n.push({type:`delimiter`,value:`,`}),t++;continue}if(r===`"`){let r=t+1,i=r,a=!1;for(;;){if(i=e.indexOf(`"`,i),i===-1){a=!0;break}let t=0,n=i-1;for(;n>=r&&e[n]===`\\`;)t++,n--;if(t%2==0)break;i++}a?t=e.length:(n.push({type:`string`,value:e.slice(r,i)}),t=i+1);continue}if(r&&/\s/.test(r)){t++;continue}let i=/[0-9]/;if(r&&i.test(r)||r===`-`||r===`.`){let a=``;for(r===`-`&&(a+=r,r=e[++t]);r&&(i.test(r)||r===`.`||r===`e`||r===`E`||(r===`-`||r===`+`)&&(a[a.length-1]===`e`||a[a.length-1]===`E`));)a+=r,r=e[++t];n.push({type:`number`,value:a,unterminated:t===e.length});continue}let a=/[a-z]/i;if(r&&a.test(r)){let i=``;for(;r&&a.test(r)&&t!==e.length;)i+=r,r=e[++t];if(i==`true`||i==`false`||i===`null`)n.push({type:`name`,value:i});else{t++;continue}continue}t++}return n},n_=e=>{let t=[];for(let n of e)(n.type===`brace`||n.type===`paren`)&&(n.value===`{`||n.value===`[`?t.push(n.value):t.pop());let n=t[t.length-1],r=e.length,i=/^-?(0|[1-9][0-9]*)(\.[0-9]+)?([eE][-+]?[0-9]+)?$/;for(;r>0;){let t=e[r-1];switch(t.type){case`separator`:r--;continue;case`number`:if(t.unterminated||!i.test(t.value)){r--;continue}break;case`string`:let a=e[r-2];if(n===`{`&&(a?.type===`delimiter`||a?.type===`brace`&&a.value===`{`)){r--;continue}break;case`delimiter`:r--}break}return e.slice(0,r)},r_=e=>{let t=[];return e.map(e=>{e.type===`brace`&&(e.value===`{`?t.push(`}`):t.splice(t.lastIndexOf(`}`),1)),e.type===`paren`&&(e.value===`[`?t.push(`]`):t.splice(t.lastIndexOf(`]`),1))}),t.length>0&&t.reverse().map(t=>{t===`}`?e.push({type:`brace`,value:`}`}):t===`]`&&e.push({type:`paren`,value:`]`})}),e},i_=e=>{let t=``;return e.map(e=>{switch(e.type){case`string`:t+=`"`+e.value+`"`;break;default:t+=e.value}}),t},a_=e=>JSON.parse(i_(r_(n_(t_(e))))),o_=`__json_buf`;function s_(e,t){let n={};for(let t of Object.keys(e))t!==`input`&&(n[t]=e[t]);Object.defineProperty(n,o_,{value:t,enumerable:!1,writable:!0});let r,i=!1;return Object.defineProperty(n,"input",{enumerable:!0,configurable:!0,get(){return i||=(r=t?a_(t):{},!0),r}}),n}var c_,l_,u_,d_,f_,p_,m_,h_,g_,__,v_,y_,b_,x_,S_,C_,w_,T_,E_,D_,O_,k_,A_,j_,M_,N_;function P_(e){return e.type===`tool_use`||e.type===`server_tool_use`||e.type===`mcp_tool_use`}var F_=(()=>{class e{constructor(e,t){c_.add(this),this.messages=[],this.receivedMessages=[],l_.set(this,void 0),u_.set(this,null),this.controller=new AbortController,d_.set(this,void 0),f_.set(this,()=>{}),p_.set(this,()=>{}),m_.set(this,void 0),h_.set(this,()=>{}),g_.set(this,()=>{}),__.set(this,{}),v_.set(this,!1),y_.set(this,!1),b_.set(this,!1),x_.set(this,!1),S_.set(this,void 0),C_.set(this,void 0),w_.set(this,void 0),T_.set(this,void 0),O_.set(this,e=>{if(q(this,y_,!0,`f`),vd(e)&&(e=new xd),e instanceof xd)return q(this,b_,!0,`f`),this._emit(`abort`,e);if(e instanceof Y)return this._emit(`error`,e);if(e instanceof Error){let t=new Y(e.message);return t.cause=e,this._emit(`error`,t)}return this._emit(`error`,new Y(String(e)))}),q(this,d_,new Promise((e,t)=>{q(this,f_,e,`f`),q(this,p_,t,`f`)}),`f`),q(this,m_,new Promise((e,t)=>{q(this,h_,e,`f`),q(this,g_,t,`f`)}),`f`),J(this,d_,`f`).catch(()=>{}),J(this,m_,`f`).catch(()=>{}),q(this,u_,e,`f`),q(this,T_,t?.logger??console,`f`)}get response(){return J(this,S_,`f`)}get request_id(){return J(this,C_,`f`)}get workspace_id(){return J(this,w_,`f`)}async withResponse(){q(this,x_,!0,`f`);let e=await J(this,d_,`f`);if(!e)throw Error("Could not resolve a `Response` object");return{data:this,response:e,request_id:e.headers.get(`request-id`),workspace_id:e.headers.get(`anthropic-workspace-id`)}}static fromReadableStream(t){let n=new e(null);return n._run(()=>n._fromReadableStream(t)),n}static createMessage(t,n,r,{logger:i}={}){let a=new e(n,{logger:i});for(let e of n.messages)a._addMessageParam(e);return q(a,u_,{...n,stream:!0},`f`),a._run(()=>a._createMessage(t,{...n,stream:!0},{...r,headers:{...r?.headers,[Pm]:`stream`}})),a}_run(e){e().then(()=>{this._emitFinal(),this._emit(`end`)},J(this,O_,`f`))}_addMessageParam(e){this.messages.push(e)}_addMessage(e,t=!0){this.receivedMessages.push(e),t&&this._emit(`message`,e)}async _createMessage(e,t,n){let r=n?.signal,i;r&&(r.aborted&&this.controller.abort(),i=this.controller.abort.bind(this.controller),r.addEventListener(`abort`,i));try{J(this,c_,`m`,k_).call(this);let{response:r,data:i}=await e.create({...t,stream:!0},{...n,signal:this.controller.signal}).withResponse();this._connected(r);for await(let e of i)J(this,c_,`m`,A_).call(this,e);if(i.controller.signal?.aborted)throw new xd;J(this,c_,`m`,j_).call(this)}finally{r&&i&&r.removeEventListener(`abort`,i)}}_connected(e){this.ended||(q(this,S_,e,`f`),q(this,C_,e?.headers.get(`request-id`),`f`),q(this,w_,e?.headers.get(`anthropic-workspace-id`),`f`),J(this,f_,`f`).call(this,e),this._emit(`connect`))}get ended(){return J(this,v_,`f`)}get errored(){return J(this,y_,`f`)}get aborted(){return J(this,b_,`f`)}abort(){this.controller.abort()}on(e,t){return(J(this,__,`f`)[e]||(J(this,__,`f`)[e]=[])).push({listener:t}),this}off(e,t){let n=J(this,__,`f`)[e];if(!n)return this;let r=n.findIndex(e=>e.listener===t);return r>=0&&n.splice(r,1),this}once(e,t){return(J(this,__,`f`)[e]||(J(this,__,`f`)[e]=[])).push({listener:t,once:!0}),this}emitted(e){return new Promise((t,n)=>{q(this,x_,!0,`f`),e!==`error`&&this.once(`error`,n),this.once(e,t)})}async done(){q(this,x_,!0,`f`),await J(this,m_,`f`)}get currentMessage(){return J(this,l_,`f`)}async finalMessage(){return await this.done(),J(this,c_,`m`,E_).call(this)}async finalText(){return await this.done(),J(this,c_,`m`,D_).call(this)}_emit(e,...t){if(J(this,v_,`f`))return;e===`end`&&(q(this,v_,!0,`f`),J(this,h_,`f`).call(this));let n=J(this,__,`f`)[e];if(n&&(J(this,__,`f`)[e]=n.filter(e=>!e.once),n.forEach(({listener:e})=>e(...t))),e===`abort`){let e=t[0];!J(this,x_,`f`)&&!n?.length&&Promise.reject(e),J(this,p_,`f`).call(this,e),J(this,g_,`f`).call(this,e),this._emit(`end`);return}if(e===`error`){let e=t[0];!J(this,x_,`f`)&&!n?.length&&Promise.reject(e),J(this,p_,`f`).call(this,e),J(this,g_,`f`).call(this,e),this._emit(`end`)}}_emitFinal(){this.receivedMessages.at(-1)&&this._emit(`finalMessage`,J(this,c_,`m`,E_).call(this))}async _fromReadableStream(e,t){let n=t?.signal,r;n&&(n.aborted&&this.controller.abort(),r=this.controller.abort.bind(this.controller),n.addEventListener(`abort`,r));try{J(this,c_,`m`,k_).call(this),this._connected(null);let t=Vp.fromReadableStream(e,this.controller);for await(let e of t)J(this,c_,`m`,A_).call(this,e);if(t.controller.signal?.aborted)throw new xd;J(this,c_,`m`,j_).call(this)}finally{n&&r&&n.removeEventListener(`abort`,r)}}[(l_=new WeakMap,u_=new WeakMap,d_=new WeakMap,f_=new WeakMap,p_=new WeakMap,m_=new WeakMap,h_=new WeakMap,g_=new WeakMap,__=new WeakMap,v_=new WeakMap,y_=new WeakMap,b_=new WeakMap,x_=new WeakMap,S_=new WeakMap,C_=new WeakMap,w_=new WeakMap,T_=new WeakMap,O_=new WeakMap,c_=new WeakSet,E_=function(){if(this.receivedMessages.length===0)throw new Y(`stream ended without producing a Message with role=assistant`);return this.receivedMessages.at(-1)},D_=function(){if(this.receivedMessages.length===0)throw new Y(`stream ended without producing a Message with role=assistant`);let e=this.receivedMessages.at(-1).content.filter(e=>e.type===`text`).map(e=>e.text);if(e.length===0)throw new Y(`stream ended without producing a content block with type=text`);return e.join(` `)},k_=function(){this.ended||q(this,l_,void 0,`f`)},A_=function(e){if(this.ended)return;let t=J(this,c_,`m`,M_).call(this,e);switch(this._emit(`streamEvent`,e,t),e.type){case`content_block_delta`:{let n=t.content.at(-1);switch(e.delta.type){case`text_delta`:n.type===`text`&&this._emit(`text`,e.delta.text,n.text||``);break;case`citations_delta`:n.type===`text`&&this._emit(`citation`,e.delta.citation,n.citations??[]);break;case`input_json_delta`:if(P_(n)&&J(this,__,`f`).inputJson?.length){let t;try{t=n.input}catch(e){J(this,O_,`f`).call(this,J(this,c_,`m`,N_).call(this,n,e));break}this._emit(`inputJson`,e.delta.partial_json,t)}break;case`thinking_delta`:n.type===`thinking`&&this._emit(`thinking`,e.delta.thinking,n.thinking);break;case`signature_delta`:n.type===`thinking`&&this._emit(`signature`,n.signature);break;case`compaction_delta`:n.type===`compaction`&&n.content&&this._emit(`compaction`,n.content);break;default:e.delta}break}case`message_stop`:this._addMessageParam(t),this._addMessage(Qg(t,J(this,u_,`f`),{logger:J(this,T_,`f`)}),!0);break;case`content_block_stop`:this._emit(`contentBlock`,t.content.at(-1));break;case`message_start`:q(this,l_,t,`f`)}},j_=function(){if(this.ended)throw new Y(`stream has ended, this shouldn't happen`);let e=J(this,l_,`f`);if(!e)throw new Y(`request ended without sending any chunks`);return q(this,l_,void 0,`f`),Qg(e,J(this,u_,`f`),{logger:J(this,T_,`f`)})},M_=function(e){let t=J(this,l_,`f`);if(e.type===`message_start`){if(t)throw new Y(`Unexpected event order, got ${e.type} before receiving "message_stop"`);return e.message}if(!t)throw new Y(`Unexpected event order, got ${e.type} before "message_start"`);switch(e.type){case`message_stop`:return t;case`message_delta`:return t.stop_reason=e.delta.stop_reason,t.stop_sequence=e.delta.stop_sequence,t.stop_details=e.delta.stop_details,t.usage.output_tokens=e.usage.output_tokens,e.delta.container!=null&&(t.container=e.delta.container),e.context_management!=null&&(t.context_management=e.context_management),e.input_transformations!=null&&(t.input_transformations=e.input_transformations),e.usage.input_tokens!=null&&(t.usage.input_tokens=e.usage.input_tokens),e.usage.cache_creation_input_tokens!=null&&(t.usage.cache_creation_input_tokens=e.usage.cache_creation_input_tokens),e.usage.cache_read_input_tokens!=null&&(t.usage.cache_read_input_tokens=e.usage.cache_read_input_tokens),e.usage.server_tool_use!=null&&(t.usage.server_tool_use=e.usage.server_tool_use),e.usage.iterations!=null&&(t.usage.iterations=e.usage.iterations),e.usage.fallback_credit!=null&&(t.usage.fallback_credit=e.usage.fallback_credit),e.usage.output_tokens_details!=null&&(t.usage.output_tokens_details=e.usage.output_tokens_details),t;case`content_block_start`:return t.content.push(e.content_block),e.content_block.type===`fallback`&&(t.model=e.content_block.to.model),t;case`content_block_delta`:{let n=t.content.at(e.index);switch(e.delta.type){case`text_delta`:n?.type===`text`&&(t.content[e.index]={...n,text:(n.text||``)+e.delta.text});break;case`citations_delta`:n?.type===`text`&&(t.content[e.index]={...n,citations:[...n.citations??[],e.delta.citation]});break;case`input_json_delta`:if(n&&P_(n)){let r=(n.__json_buf||``)+e.delta.partial_json;t.content[e.index]=s_(n,r)}break;case`thinking_delta`:n?.type===`thinking`&&(t.content[e.index]={...n,thinking:n.thinking+e.delta.thinking});break;case`signature_delta`:n?.type===`thinking`&&(t.content[e.index]={...n,signature:e.delta.signature});break;case`compaction_delta`:if(n?.type===`compaction`){let r={...n,content:e.delta.content};`encrypted_content`in e.delta&&(r.encrypted_content=e.delta.encrypted_content),t.content[e.index]=r}break;default:e.delta}return t}case`content_block_stop`:{let n=t.content.at(e.index);if(n&&P_(n)&&`__json_buf`in n){let e;try{e=n.input}catch(t){e={},J(this,O_,`f`).call(this,J(this,c_,`m`,N_).call(this,n,t))}Object.defineProperty(n,"input",{value:e,enumerable:!0,configurable:!0,writable:!0})}return t}}},N_=function(e,t){let n=e[o_];return new Y(`Unable to parse tool parameter JSON from model. Please retry your request or adjust your prompt. Error: ${t}. JSON: ${n}`)},Symbol.asyncIterator)](){let e=[],t=[],n=!1;return this.on(`streamEvent`,n=>{let r=t.shift();r?r.resolve(n):e.push(n)}),this.on(`end`,()=>{n=!0;for(let e of t)e.resolve(void 0);t.length=0}),this.on(`abort`,e=>{n=!0;for(let n of t)n.reject(e);t.length=0}),this.on(`error`,e=>{n=!0;for(let n of t)n.reject(e);t.length=0}),{next:async()=>e.length?{value:e.shift(),done:!1}:n?{value:void 0,done:!0}:new Promise((e,n)=>t.push({resolve:e,reject:n})).then(e=>e?{value:e,done:!1}:{value:void 0,done:!0}),return:async()=>(this.abort(),{value:void 0,done:!0})}}toReadableStream(){return new Vp(this[Symbol.asyncIterator].bind(this),this.controller).toReadableStream()}}return e})(),I_,L_,R_,z_,B_,V_,H_,U_,W_,G_,K_,q_=(()=>{class e extends F_{constructor(e,t){super(e),I_.add(this),L_.set(this,void 0),R_.set(this,0),z_.set(this,[]),B_.set(this,[]),V_.set(this,void 0),H_.set(this,[]),U_.set(this,!1),q(this,L_,t,`f`)}get toolCalls(){return J(this,B_,`f`)}static start(t,n,r,i){let a=new e({...n,stream:!0},i);for(let e of n.messages)a._addMessageParam(e);return a._run(()=>a._createMessage(t,{...n,stream:!0},{...r,headers:{...r?.headers,[Pm]:`stream`}})),a}_emit(e,...t){var n;if(e!==`streamEvent`||this.ended){super._emit(e,...t);return}q(this,R_,(n=J(this,R_,`f`),n++,n),`f`);let[r,i]=t,a=r.type===`content_block_stop`?i.content[r.index]:void 0,o=a?.type===`tool_use`?a:void 0;o&&J(this,B_,`f`).push(o),super._emit(e,...t),J(this,I_,`m`,W_).call(this,r,o),J(this,I_,`m`,G_).call(this)}[(L_=new WeakMap,R_=new WeakMap,z_=new WeakMap,B_=new WeakMap,V_=new WeakMap,H_=new WeakMap,U_=new WeakMap,I_=new WeakSet,Symbol.asyncIterator)](){let e=super[Symbol.asyncIterator](),t={handled:J(this,R_,`f`)};J(this,z_,`f`).push(t);let n=!1;return{next:async()=>{n&&(n=!1,t.handled++,J(this,I_,`m`,G_).call(this));try{let r=await e.next();return n=!r.done,r.done&&J(this,I_,`m`,K_).call(this,t),r}catch(e){throw J(this,I_,`m`,K_).call(this,t),e}},return:async()=>{let n=e.return?.();return J(this,I_,`m`,K_).call(this,t),await n??{value:void 0,done:!0}}}}}return W_=function(e,t){if(J(this,U_,`f`))return;if(e.type===`content_block_start`&&e.content_block.type===`fallback`){q(this,U_,!0,`f`),q(this,V_,void 0,`f`);return}let n=e.type===`content_block_start`||e.type===`message_delta`&&e.delta.stop_reason===`tool_use`;J(this,V_,`f`)&&n&&(J(this,H_,`f`).push({toolUse:J(this,V_,`f`),event:J(this,R_,`f`)}),q(this,V_,void 0,`f`)),t&&q(this,V_,t,`f`)},G_=function(){if(this.errored||this.controller.signal.aborted)return;let e=Math.min(J(this,R_,`f`),...J(this,z_,`f`).map(e=>e.handled));for(;J(this,H_,`f`)[0]&&J(this,H_,`f`)[0].event<=e;)J(this,L_,`f`).call(this,J(this,H_,`f`).shift().toolUse)},K_=function(e){let t=J(this,z_,`f`).indexOf(e);t>=0&&(J(this,z_,`f`).splice(t,1),J(this,I_,`m`,G_).call(this))},e})();function J_(){let e,t;return{promise:new Promise((n,r)=>{e=n,t=r}),resolve:e,reject:t}}var Y_,X_,Z_,Q_,$_,ev,tv,nv,rv,iv,av,ov,sv,cv,lv,uv,dv,fv,pv,mv,hv,gv,_v,vv,yv,bv,xv=(()=>{class e{constructor(e,t,n){Y_.add(this),this.client=e,X_.set(this,!1),Z_.set(this,!1),Q_.set(this,void 0),$_.set(this,void 0),ev.set(this,void 0),tv.set(this,void 0),nv.set(this,void 0),rv.set(this,void 0),iv.set(this,0),av.set(this,{status:`idle`}),ov.set(this,void 0),sv.set(this,null),cv.set(this,new Map),lv.set(this,[]),Sv(t),Cv(t),wv(t),q(this,Q_,{params:{...t,messages:JSON.parse(JSON.stringify(t.messages))}},`f`);let r=Rm(t.tools,t.messages);q(this,$_,{...n,headers:Z([Fm(`BetaToolRunner`),r.length?{[Nm]:r.join(`, `)}:void 0,n?.headers])},`f`),q(this,rv,J_(),`f`)}async*[(X_=new WeakMap,Z_=new WeakMap,Q_=new WeakMap,$_=new WeakMap,ev=new WeakMap,tv=new WeakMap,nv=new WeakMap,rv=new WeakMap,iv=new WeakMap,av=new WeakMap,ov=new WeakMap,sv=new WeakMap,cv=new WeakMap,lv=new WeakMap,Y_=new WeakSet,Symbol.asyncIterator)](){var e;if(J(this,X_,`f`))throw new Y(`Cannot iterate over a consumed stream`);q(this,X_,!0,`f`),q(this,Z_,!0,`f`),q(this,nv,void 0,`f`);try{for(;;)try{if(J(this,Q_,`f`).params.max_iterations&&J(this,iv,`f`)>=J(this,Q_,`f`).params.max_iterations)break;if(J(this,Y_,`m`,yv).call(this),J(this,av,`f`).status===`scheduled`&&Pv(J(this,sv,`f`))!==`resume`){yield*J(this,Y_,`m`,pv).call(this,J(this,av,`f`).config);continue}q(this,Z_,!1,`f`),q(this,nv,void 0,`f`),q(this,iv,(e=J(this,iv,`f`),e++,e),`f`),q(this,ev,void 0,`f`);let{max_iterations:t,runToolsEagerly:n,...r}=J(this,Q_,`f`).params;if(yield*J(this,Y_,`m`,uv).call(this,r),J(this,Z_,`f`))q(this,sv,null,`f`);else{let e=await J(this,ev,`f`),t=Pv(e.stop_reason);q(this,sv,e.stop_reason,`f`),J(this,Q_,`f`).params.messages.push({role:e.role,content:kv(e.content)});let{container:n}=J(this,Q_,`f`).params;if(e.container&&(n==null?J(this,Q_,`f`).params.container=e.container.id:typeof n==`object`&&n.id==null&&(J(this,Q_,`f`).params.container={...n,id:e.container.id})),t===`stop`){yield*J(this,Y_,`m`,_v).call(this);break}if(t===`resume`)continue}let i=await J(this,Y_,`m`,vv).call(this,J(this,Q_,`f`).params.messages.at(-1));if(i)J(this,Q_,`f`).params.messages.push(i);else if(!J(this,Z_,`f`)){yield*J(this,Y_,`m`,_v).call(this);break}}finally{J(this,tv,`f`)?.abort(),q(this,tv,void 0,`f`)}if(await J(this,Y_,`m`,fv).call(this),!J(this,ev,`f`))throw new Y(`ToolRunner concluded without a message from the server`);J(this,rv,`f`).resolve(await J(this,ev,`f`))}catch(e){throw q(this,X_,!1,`f`),J(this,rv,`f`).promise.catch(()=>{}),J(this,rv,`f`).reject(e),q(this,rv,J_(),`f`),e}}setMessagesParams(e){let t=typeof e==`function`?e(J(this,Q_,`f`).params):e;if(Sv(t),wv(t),J(this,av,`f`).status!==`idle`&&Tv(t),J(this,av,`f`).status===`in_flight`&&t.messages!==J(this,Q_,`f`).params.messages)throw new Y(`Message params can't be changed while the conversation is being compacted, because the compaction response is about to replace them. Change them after this iteration instead.`);J(this,Q_,`f`).params=t,q(this,Z_,!0,`f`),q(this,nv,void 0,`f`)}setRequestOptions(e){typeof e==`function`?q(this,$_,e(J(this,$_,`f`)),`f`):q(this,$_,{...J(this,$_,`f`),...e},`f`)}async generateToolResponse(e=J(this,$_,`f`).signal){let t=await J(this,ev,`f`)??this.params.messages.at(-1);return t?J(this,Y_,`m`,vv).call(this,t,e):null}deferToolCall(e){let t=typeof e==`string`?e:e.id;J(this,ov,`f`)&&!J(this,ov,`f`).has(t)&&J(this,ov,`f`).set(t,{status:`held`})}get deferredToolCalls(){let e=J(this,tv,`f`),t=J(this,ov,`f`);return!(e instanceof q_)||!t?[]:e.toolCalls.filter(e=>t.get(e.id)?.status===`held`)}done(){return J(this,rv,`f`).promise}async runUntilDone(){if(!J(this,X_,`f`))for await(let e of this);return this.done()}get params(){return J(this,Q_,`f`).params}pushMessages(...e){this.setMessagesParams(t=>({...t,messages:[...t.messages,...e]}))}compactBeforeNextTurn(e){J(this,av,`f`).status!==`in_flight`&&(Tv(J(this,Q_,`f`).params),q(this,av,{status:`scheduled`,config:e??{type:`summarize`}},`f`))}addTools(...e){for(let t of e)`name`in t&&J(this,cv,`f`).set(t.name,`run`in t?t:null),J(this,lv,`f`).push({type:`addition`,tool:t})}removeTools(...e){for(let t of e){let e=typeof t==`string`?t:t.name;J(this,cv,`f`).set(e,null),J(this,lv,`f`).push({type:`removal`,name:e})}}then(e,t){return this.runUntilDone().then(e,t)}}return uv=async function*(e){await J(this,Y_,`m`,fv).call(this),q(this,ov,void 0,`f`),e.stream?(q(this,tv,J(this,Q_,`f`).params.runToolsEagerly?J(this,Y_,`m`,dv).call(this,e):this.client.beta.messages.stream({...e},J(this,$_,`f`)),`f`),q(this,ev,J(this,tv,`f`).finalMessage(),`f`),J(this,ev,`f`).catch(()=>{}),yield J(this,tv,`f`)):(q(this,ev,this.client.beta.messages.create({...e,stream:!1},J(this,$_,`f`)),`f`),yield J(this,ev,`f`))},dv=function(e){let t=new Map;return q(this,ov,t,`f`),q_.start(this.client.beta.messages,e,J(this,$_,`f`),e=>{if(t.has(e.id))return;let n=Ov(J(this,Y_,`m`,mv).call(this),J(this,Y_,`m`,hv).call(this),e,J(this,$_,`f`));n.catch(()=>{}),t.set(e.id,{status:`started`,result:n})})},fv=async function(){let e=[...J(this,ov,`f`)?.values()??[]].filter(e=>e.status===`started`);await Promise.allSettled(e.map(e=>e.result))},pv=async function*(e){Tv(J(this,Q_,`f`).params);let{max_iterations:t,runToolsEagerly:n,...r}=J(this,Q_,`f`).params,i=Ev(r);q(this,av,{status:`in_flight`},`f`),q(this,nv,void 0,`f`);let a=J(this,ev,`f`);try{yield*J(this,Y_,`m`,uv).call(this,{...i,compaction:e});let t=await J(this,ev,`f`);t.content.some(e=>e.type===`compaction`&&e.content)?(J(this,Y_,`m`,gv).call(this),J(this,Q_,`f`).params.messages=[{role:t.role,content:t.content}]):(pp(this.client).warn(`Compaction produced no summary; keeping the conversation as it is.`),q(this,ev,a,`f`))}finally{q(this,av,{status:`idle`},`f`)}},mv=function(){let e=new Map;for(let t of J(this,Q_,`f`).params.tools)`run`in t&&e.set(t.name,t);for(let[t,n]of J(this,cv,`f`))n?e.set(t,n):e.delete(t);return e},hv=function(){let e=new Set(J(this,Y_,`m`,mv).call(this).keys());for(let t of[...J(this,Q_,`f`).params.messages,J(this,Y_,`m`,bv).call(this)])if(typeof t.content!=`string`){for(let n of t.content)if(t.role===`system`)jv(n,e);else if(t.role===`assistant`&&n.type===`compaction`)for(let t of n.tool_changes??[])jv(t,e)}return e},gv=function(){let e=J(this,Y_,`m`,hv).call(this);for(let t of J(this,Y_,`m`,mv).call(this).keys())e.has(t)||J(this,cv,`f`).set(t,null)},_v=async function*(){if(J(this,av,`f`).status!==`scheduled`)return;let e=J(this,Q_,`f`).params.messages.at(-1)?.content;if(Array.isArray(e)&&e.some(e=>e.type===`tool_use`)){pp(this.client).warn("The pending compaction was skipped because the last turn ended with tool calls that were not run. Call `compactBeforeNextTurn()` again if you continue the conversation."),q(this,av,{status:`idle`},`f`);return}yield*J(this,Y_,`m`,pv).call(this,J(this,av,`f`).config)},vv=async function(e,t=J(this,$_,`f`).signal){return J(this,nv,`f`)===void 0&&q(this,nv,Dv(J(this,Y_,`m`,mv).call(this),J(this,Y_,`m`,hv).call(this),e,{...J(this,$_,`f`),signal:t},J(this,ov,`f`)),`f`),J(this,nv,`f`)},yv=function(){J(this,sv,`f`)!==`pause_turn`&&J(this,lv,`f`).length!==0&&(J(this,Q_,`f`).params.messages.push(J(this,Y_,`m`,bv).call(this)),q(this,lv,[],`f`))},bv=function(){let e=[];for(let t of J(this,lv,`f`)){if(t.type===`removal`){e.push({type:`tool_removal`,tool:{type:`tool_reference`,name:t.name}});continue}let n=t.tool;if(`run`in t.tool){let{run:e,parse:r,close:i,...a}=t.tool;n=a}e.push({type:`tool_addition`,tool:{type:`tool_definition`,definition:n}})}return{role:`system`,content:e}},e})();function Sv(e){if(`compaction`in e&&e.compaction!=null)throw new Y("`compaction` cannot be set on a tool runner: every request in the loop would compact again. Call `runner.compactBeforeNextTurn()` when the conversation should be compacted instead.")}function Cv(e){if(`compactionControl`in e&&e.compactionControl!=null)throw new Y("`compactionControl` has been removed from the tool runner. Use server-side compaction instead: call `runner.compactBeforeNextTurn()` when the conversation should be compacted.")}function wv(e){if(e.runToolsEagerly&&!e.stream)throw TypeError("`runToolsEagerly: true` needs `stream: true` in the tool runner's params, because a reply that isn't streamed arrives whole.")}function Tv(e){if(e.context_management?.edits?.some(e=>e.type.startsWith(`compact_`)))throw new Y("`compactBeforeNextTurn()` can't be used while `context_management` has a compaction edit, because the API doesn't accept a compaction block together with one. Remove the edit first.")}function Ev(e){let{context_management:t,stop_sequences:n,output_format:r,...i}=e,a=({format:e,...t})=>t;return(i.tool_choice?.type===`any`||i.tool_choice?.type===`tool`)&&delete i.tool_choice,i.output_config&&=a(i.output_config),Array.isArray(i.fallbacks)&&(i.fallbacks=i.fallbacks.map(e=>e.output_config?{...e,output_config:a(e.output_config)}:e)),i}async function Dv(e,t,n,r,i){if(!n||n.role!==`assistant`||!n.content||typeof n.content==`string`)return null;let a=n.content.filter(e=>e.type===`tool_use`);return a.length===0?null:{role:`user`,content:await Promise.all(a.map(n=>{let a=i?.get(n.id);if(a?.status===`started`)return a.result;let o=Ov(e,t,n,r);return i?.set(n.id,{status:`started`,result:o}),o}))}}async function Ov(e,t,n,r){let i=t.has(n.name)?e.get(n.name):void 0;if(!i)return Av(n);try{let e=n.input;`parse`in i&&i.parse&&(e=i.parse(e));let t=await i.run(e,{toolUse:n,toolUseBlock:n,signal:r?.signal});return{type:`tool_result`,tool_use_id:n.id,content:t}}catch(e){return{type:`tool_result`,tool_use_id:n.id,content:e instanceof kh?e.content:`Error: ${e instanceof Error?e.message:String(e)}`,is_error:!0}}}function kv(e){return e}function Av(e){return{type:`tool_result`,tool_use_id:e.id,content:`Error: Tool '${e.name}' not found`,is_error:!0}}function jv(e,t){switch(e.type){case`tool_removal`:case`tool_addition`:Mv(e,t)}}function Mv(e,t){let n=Nv(e.tool);n!==void 0&&(e.type===`tool_removal`?t.delete(n):t.add(n))}function Nv(e){switch(e.type){case`tool_reference`:return e.name;case`tool_definition`:return`name`in e.definition?e.definition.name:void 0;default:return}}function Pv(e){if(e===null)return`stop`;switch(e){case`tool_use`:return`run_tools`;case`pause_turn`:case`compaction`:return`resume`;case`end_turn`:case`stop_sequence`:case`max_tokens`:case`model_context_window_exceeded`:case`refusal`:return`stop`;default:return`stop`}}var Fv={},Iv=[`claude-mythos-preview`,`claude-opus-4-6`],Lv=(()=>{class e extends X{constructor(){super(...arguments),this.batches=new Yg(this._client)}create(e,t){let n=Rv(e),{betas:r,user_profile_id:i,workspace_id:a,...o}=n;o.model in Fv&&console.warn(`The model '${o.model}' is deprecated and will reach end-of-life on ${Fv[o.model]}\nPlease migrate to a newer model. Visit https://docs.anthropic.com/en/docs/resources/model-deprecations for more information.`),Iv.includes(o.model)&&o.thinking&&o.thinking.type===`enabled`&&console.warn(`Using Claude with ${o.model} and 'thinking.type=enabled' is deprecated. Use 'thinking.type=adaptive' instead which results in better model performance in our testing: https://platform.claude.com/docs/en/build-with-claude/adaptive-thinking`);let s=t?.timeout??this._client._options.timeout;if(!o.stream&&s==null){let e=Xg[o.model]??void 0;s=this._client.calculateNonstreamingTimeout(o.max_tokens,e)}let c=zm(o.tools,o.messages);return this._client.post(`/v1/messages?beta=true`,{body:o,timeout:s??6e5,...t,headers:Z([{...r?.toString()==null?void 0:{"anthropic-beta":r?.toString()},...i==null?void 0:{"anthropic-user-profile-id":i},...a==null?void 0:{"anthropic-workspace-id":a}},c,t?.headers]),stream:n.stream??!1})}parse(e,t){return t={...t,headers:Z([{"anthropic-beta":[...e.betas??[],`structured-outputs-2025-12-15`].toString()},t?.headers])},this.create(e,t).then(t=>$g(t,e,{logger:this._client.logger??console}))}stream(e,t){return F_.createMessage(this,e,t)}countTokens(e,t){let{betas:n,user_profile_id:r,workspace_id:i,...a}=Rv(e);return this._client.post(`/v1/messages/count_tokens?beta=true`,{body:a,...t,headers:Z([{"anthropic-beta":[...n??[],`token-counting-2024-11-01`].toString(),...r==null?void 0:{"anthropic-user-profile-id":r},...i==null?void 0:{"anthropic-workspace-id":i}},t?.headers])})}toolRunner(e,t){return new xv(this._client,e,t)}}return e.Batches=Yg,e.BetaToolRunner=xv,e.ToolError=kh,e})();function Rv(e){if(!e.output_format)return e;if(e.output_config?.format)throw new Y(`Both output_format and output_config.format were provided. Please use only output_config.format (output_format is deprecated).`);let{output_format:t,...n}=e;return{...n,output_config:{...e.output_config,format:t}}}var zv=class extends X{retrieve(e,t){return this._client.get(Q`/v1/organizations/api_keys/${e}?beta=true`,t)}update(e,t,n){return this._client.post(Q`/v1/organizations/api_keys/${e}?beta=true`,{body:t,...n})}list(e={},t){return this._client.getAPIList(`/v1/organizations/api_keys?beta=true`,am,{query:e,...t})}},Bv=class extends X{retrieve(e){return this._client.get(`/v1/organizations/compliance_settings?beta=true`,e)}update(e,t){return this._client.post(`/v1/organizations/compliance_settings?beta=true`,{body:e,...t})}},Vv=class extends X{create(e,t){return this._client.post(`/v1/organizations/external_keys?beta=true`,{body:e,...t})}retrieve(e,t){return this._client.get(Q`/v1/organizations/external_keys/${e}?beta=true`,t)}update(e,t,n){return this._client.post(Q`/v1/organizations/external_keys/${e}?beta=true`,{body:t,...n})}list(e={},t){return this._client.getAPIList(`/v1/organizations/external_keys?beta=true`,om,{query:e,...t})}delete(e,t){return this._client.delete(Q`/v1/organizations/external_keys/${e}?beta=true`,t)}validate(e,t){return this._client.post(Q`/v1/organizations/external_keys/${e}/validate?beta=true`,t)}},Hv=class extends X{create(e,t){return this._client.post(`/v1/organizations/invites?beta=true`,{body:e,...t})}retrieve(e,t){return this._client.get(Q`/v1/organizations/invites/${e}?beta=true`,t)}list(e={},t){return this._client.getAPIList(`/v1/organizations/invites?beta=true`,am,{query:e,...t})}delete(e,t){return this._client.delete(Q`/v1/organizations/invites/${e}?beta=true`,t)}},Uv=class extends X{list(e={},t){return this._client.getAPIList(`/v1/organizations/rate_limits?beta=true`,om,{query:e,...t})}},Wv=class extends X{retrieve(e,t){return this._client.get(Q`/v1/organizations/users/${e}?beta=true`,t)}update(e,t,n){return this._client.post(Q`/v1/organizations/users/${e}?beta=true`,{body:t,...n})}list(e={},t){return this._client.getAPIList(`/v1/organizations/users?beta=true`,am,{query:e,...t})}remove(e,t){return this._client.delete(Q`/v1/organizations/users/${e}?beta=true`,t)}},Gv=class extends X{create(e,t){let{betas:n,...r}=e;return this._client.post(`/v1/organizations/federation_issuers?beta=true`,{body:r,...t,headers:Z([{...n?.toString()==null?void 0:{"anthropic-beta":n?.toString()}},t?.headers])})}retrieve(e,t={},n){let{betas:r}=t??{};return this._client.get(Q`/v1/organizations/federation_issuers/${e}?beta=true`,{...n,headers:Z([{...r?.toString()==null?void 0:{"anthropic-beta":r?.toString()}},n?.headers])})}update(e,t,n){let{betas:r,...i}=t;return this._client.post(Q`/v1/organizations/federation_issuers/${e}?beta=true`,{body:i,...n,headers:Z([{...r?.toString()==null?void 0:{"anthropic-beta":r?.toString()}},n?.headers])})}list(e={},t){let{betas:n,...r}=e??{};return this._client.getAPIList(`/v1/organizations/federation_issuers?beta=true`,om,{query:r,...t,headers:Z([{...n?.toString()==null?void 0:{"anthropic-beta":n?.toString()}},t?.headers])})}archive(e,t={},n){let{betas:r}=t??{};return this._client.post(Q`/v1/organizations/federation_issuers/${e}/archive?beta=true`,{...n,headers:Z([{...r?.toString()==null?void 0:{"anthropic-beta":r?.toString()}},n?.headers])})}},Kv=class extends X{list(e,t={},n){let{betas:r,...i}=t??{};return this._client.getAPIList(Q`/v1/organizations/federation_rules/${e}/workspaces?beta=true`,om,{query:i,...n,headers:Z([{...r?.toString()==null?void 0:{"anthropic-beta":r?.toString()}},n?.headers])})}add(e,t,n){let{betas:r,...i}=t;return this._client.post(Q`/v1/organizations/federation_rules/${e}/workspaces?beta=true`,{body:i,...n,headers:Z([{...r?.toString()==null?void 0:{"anthropic-beta":r?.toString()}},n?.headers])})}remove(e,t,n){let{federation_rule_id:r,betas:i}=t;return this._client.delete(Q`/v1/organizations/federation_rules/${r}/workspaces/${e}?beta=true`,{...n,headers:Z([{...i?.toString()==null?void 0:{"anthropic-beta":i?.toString()}},n?.headers])})}},qv=(()=>{class e extends X{constructor(){super(...arguments),this.workspaces=new Kv(this._client)}create(e,t){let{betas:n,...r}=e;return this._client.post(`/v1/organizations/federation_rules?beta=true`,{body:r,...t,headers:Z([{...n?.toString()==null?void 0:{"anthropic-beta":n?.toString()}},t?.headers])})}retrieve(e,t={},n){let{betas:r}=t??{};return this._client.get(Q`/v1/organizations/federation_rules/${e}?beta=true`,{...n,headers:Z([{...r?.toString()==null?void 0:{"anthropic-beta":r?.toString()}},n?.headers])})}update(e,t,n){let{betas:r,...i}=t;return this._client.post(Q`/v1/organizations/federation_rules/${e}?beta=true`,{body:i,...n,headers:Z([{...r?.toString()==null?void 0:{"anthropic-beta":r?.toString()}},n?.headers])})}list(e={},t){let{betas:n,...r}=e??{};return this._client.getAPIList(`/v1/organizations/federation_rules?beta=true`,om,{query:r,...t,headers:Z([{...n?.toString()==null?void 0:{"anthropic-beta":n?.toString()}},t?.headers])})}archive(e,t={},n){let{betas:r}=t??{};return this._client.post(Q`/v1/organizations/federation_rules/${e}/archive?beta=true`,{...n,headers:Z([{...r?.toString()==null?void 0:{"anthropic-beta":r?.toString()}},n?.headers])})}}return e.Workspaces=Kv,e})(),Jv=(()=>{class e extends X{constructor(){super(...arguments),this.issuers=new Gv(this._client),this.rules=new qv(this._client)}}return e.Issuers=Gv,e.Rules=qv,e})(),Yv=class extends X{list(e,t={},n){let{betas:r,...i}=t??{};return this._client.getAPIList(Q`/v1/organizations/service_accounts/${e}/workspaces?beta=true`,om,{query:i,...n,headers:Z([{...r?.toString()==null?void 0:{"anthropic-beta":r?.toString()}},n?.headers])})}add(e,t,n){let{betas:r,...i}=t;return this._client.post(Q`/v1/organizations/service_accounts/${e}/workspaces?beta=true`,{body:i,...n,headers:Z([{...r?.toString()==null?void 0:{"anthropic-beta":r?.toString()}},n?.headers])})}remove(e,t,n){let{service_account_id:r,betas:i}=t;return this._client.delete(Q`/v1/organizations/service_accounts/${r}/workspaces/${e}?beta=true`,{...n,headers:Z([{...i?.toString()==null?void 0:{"anthropic-beta":i?.toString()}},n?.headers])})}},Xv=(()=>{class e extends X{constructor(){super(...arguments),this.workspaces=new Yv(this._client)}create(e,t){let{betas:n,...r}=e;return this._client.post(`/v1/organizations/service_accounts?beta=true`,{body:r,...t,headers:Z([{...n?.toString()==null?void 0:{"anthropic-beta":n?.toString()}},t?.headers])})}retrieve(e,t={},n){let{betas:r}=t??{};return this._client.get(Q`/v1/organizations/service_accounts/${e}?beta=true`,{...n,headers:Z([{...r?.toString()==null?void 0:{"anthropic-beta":r?.toString()}},n?.headers])})}update(e,t,n){let{betas:r,...i}=t;return this._client.post(Q`/v1/organizations/service_accounts/${e}?beta=true`,{body:i,...n,headers:Z([{...r?.toString()==null?void 0:{"anthropic-beta":r?.toString()}},n?.headers])})}list(e={},t){let{betas:n,...r}=e??{};return this._client.getAPIList(`/v1/organizations/service_accounts?beta=true`,om,{query:r,...t,headers:Z([{...n?.toString()==null?void 0:{"anthropic-beta":n?.toString()}},t?.headers])})}archive(e,t={},n){let{betas:r}=t??{};return this._client.post(Q`/v1/organizations/service_accounts/${e}/archive?beta=true`,{...n,headers:Z([{...r?.toString()==null?void 0:{"anthropic-beta":r?.toString()}},n?.headers])})}}return e.Workspaces=Yv,e})(),Zv=class extends X{retrieve(e,t,n){let{workspace_id:r}=t;return this._client.get(Q`/v1/organizations/workspaces/${r}/members/${e}?beta=true`,n)}update(e,t,n){let{workspace_id:r,...i}=t;return this._client.post(Q`/v1/organizations/workspaces/${r}/members/${e}?beta=true`,{body:i,...n})}list(e,t={},n){return this._client.getAPIList(Q`/v1/organizations/workspaces/${e}/members?beta=true`,am,{query:t,...n})}add(e,t,n){return this._client.post(Q`/v1/organizations/workspaces/${e}/members?beta=true`,{body:t,...n})}remove(e,t,n){let{workspace_id:r}=t;return this._client.delete(Q`/v1/organizations/workspaces/${r}/members/${e}?beta=true`,n)}},Qv=class extends X{list(e,t={},n){return this._client.getAPIList(Q`/v1/organizations/workspaces/${e}/rate_limits?beta=true`,om,{query:t,...n})}},$v=class extends X{retrieve(e,t,n){let{workspace_id:r,betas:i}=t;return this._client.get(Q`/v1/organizations/workspaces/${r}/service_accounts/${e}?beta=true`,{...n,headers:Z([{...i?.toString()==null?void 0:{"anthropic-beta":i?.toString()}},n?.headers])})}update(e,t,n){let{workspace_id:r,betas:i,...a}=t;return this._client.post(Q`/v1/organizations/workspaces/${r}/service_accounts/${e}?beta=true`,{body:a,...n,headers:Z([{...i?.toString()==null?void 0:{"anthropic-beta":i?.toString()}},n?.headers])})}list(e,t={},n){let{betas:r,...i}=t??{};return this._client.getAPIList(Q`/v1/organizations/workspaces/${e}/service_accounts?beta=true`,om,{query:i,...n,headers:Z([{...r?.toString()==null?void 0:{"anthropic-beta":r?.toString()}},n?.headers])})}add(e,t,n){let{betas:r,...i}=t;return this._client.post(Q`/v1/organizations/workspaces/${e}/service_accounts?beta=true`,{body:i,...n,headers:Z([{...r?.toString()==null?void 0:{"anthropic-beta":r?.toString()}},n?.headers])})}remove(e,t,n){let{workspace_id:r,betas:i}=t;return this._client.delete(Q`/v1/organizations/workspaces/${r}/service_accounts/${e}?beta=true`,{...n,headers:Z([{...i?.toString()==null?void 0:{"anthropic-beta":i?.toString()}},n?.headers])})}},ey=(()=>{class e extends X{constructor(){super(...arguments),this.rateLimits=new Qv(this._client),this.members=new Zv(this._client),this.serviceAccounts=new $v(this._client)}create(e,t){let{betas:n,...r}=e;return this._client.post(`/v1/organizations/workspaces?beta=true`,{body:r,...t,headers:Z([{...n?.toString()==null?void 0:{"anthropic-beta":n?.toString()}},t?.headers])})}retrieve(e,t){return this._client.get(Q`/v1/organizations/workspaces/${e}?beta=true`,t)}update(e,t,n){return this._client.post(Q`/v1/organizations/workspaces/${e}?beta=true`,{body:t,...n})}list(e={},t){return this._client.getAPIList(`/v1/organizations/workspaces?beta=true`,am,{query:e,...t})}archive(e,t){return this._client.post(Q`/v1/organizations/workspaces/${e}/archive?beta=true`,t)}}return e.RateLimits=Qv,e.Members=Zv,e.ServiceAccounts=$v,e})(),ty=(()=>{class e extends X{constructor(){super(...arguments),this.apiKeys=new zv(this._client),this.externalKeys=new Vv(this._client),this.federation=new Jv(this._client),this.invites=new Hv(this._client),this.serviceAccounts=new Xv(this._client),this.users=new Wv(this._client),this.workspaces=new ey(this._client),this.rateLimits=new Uv(this._client),this.complianceSettings=new Bv(this._client)}retrieve(e){return this._client.get(`/v1/organizations/me?beta=true`,e)}}return e.APIKeys=zv,e.ExternalKeys=Vv,e.Federation=Jv,e.Invites=Hv,e.ServiceAccounts=Xv,e.Users=Wv,e.Workspaces=ey,e.RateLimits=Uv,e.ComplianceSettings=Bv,e})(),ny=(()=>{class e extends X{list(e,t={},n){let{betas:r,workspace_id:i,...a}=t??{};return this._client.getAPIList(Q`/v1/sessions/${e}/events?beta=true`,om,{query:a,...n,headers:Z([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}send(e,t,n){let{betas:r,workspace_id:i,...a}=t;return this._client.post(Q`/v1/sessions/${e}/events?beta=true`,{body:a,...n,headers:Z([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}stream(e,t={},n){let{betas:r,workspace_id:i,...a}=t??{};return this._client.get(Q`/v1/sessions/${e}/events/stream?beta=true`,{query:a,...n,headers:Z([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers]),stream:!0})}toolRunner(e,t){return new xg(e,{...t,client:this._client})}}return e.SessionToolRunner=xg,e})(),ry=class extends X{retrieve(e,t,n){let{session_id:r,betas:i,workspace_id:a}=t;return this._client.get(Q`/v1/sessions/${r}/resources/${e}?beta=true`,{...n,headers:Z([{"anthropic-beta":[...i??[],`managed-agents-2026-04-01`].toString(),...a==null?void 0:{"anthropic-workspace-id":a}},n?.headers])})}update(e,t,n){let{session_id:r,betas:i,workspace_id:a,...o}=t;return this._client.post(Q`/v1/sessions/${r}/resources/${e}?beta=true`,{body:o,...n,headers:Z([{"anthropic-beta":[...i??[],`managed-agents-2026-04-01`].toString(),...a==null?void 0:{"anthropic-workspace-id":a}},n?.headers])})}list(e,t={},n){let{betas:r,workspace_id:i,...a}=t??{};return this._client.getAPIList(Q`/v1/sessions/${e}/resources?beta=true`,om,{query:a,...n,headers:Z([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}delete(e,t,n){let{session_id:r,betas:i,workspace_id:a}=t;return this._client.delete(Q`/v1/sessions/${r}/resources/${e}?beta=true`,{...n,headers:Z([{"anthropic-beta":[...i??[],`managed-agents-2026-04-01`].toString(),...a==null?void 0:{"anthropic-workspace-id":a}},n?.headers])})}add(e,t,n){let{betas:r,workspace_id:i,...a}=t;return this._client.post(Q`/v1/sessions/${e}/resources?beta=true`,{body:a,...n,headers:Z([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}},iy=class extends X{list(e,t,n){let{session_id:r,betas:i,workspace_id:a,...o}=t;return this._client.getAPIList(Q`/v1/sessions/${r}/threads/${e}/events?beta=true`,om,{query:o,...n,headers:Z([{"anthropic-beta":[...i??[],`managed-agents-2026-04-01`].toString(),...a==null?void 0:{"anthropic-workspace-id":a}},n?.headers])})}stream(e,t,n){let{session_id:r,betas:i,workspace_id:a,...o}=t;return this._client.get(Q`/v1/sessions/${r}/threads/${e}/stream?beta=true`,{query:o,...n,headers:Z([{"anthropic-beta":[...i??[],`managed-agents-2026-04-01`].toString(),...a==null?void 0:{"anthropic-workspace-id":a}},n?.headers]),stream:!0})}},ay=(()=>{class e extends X{constructor(){super(...arguments),this.events=new iy(this._client)}retrieve(e,t,n){let{session_id:r,betas:i,workspace_id:a}=t;return this._client.get(Q`/v1/sessions/${r}/threads/${e}?beta=true`,{...n,headers:Z([{"anthropic-beta":[...i??[],`managed-agents-2026-04-01`].toString(),...a==null?void 0:{"anthropic-workspace-id":a}},n?.headers])})}list(e,t={},n){let{betas:r,workspace_id:i,...a}=t??{};return this._client.getAPIList(Q`/v1/sessions/${e}/threads?beta=true`,om,{query:a,...n,headers:Z([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}archive(e,t,n){let{session_id:r,betas:i,workspace_id:a}=t;return this._client.post(Q`/v1/sessions/${r}/threads/${e}/archive?beta=true`,{...n,headers:Z([{"anthropic-beta":[...i??[],`managed-agents-2026-04-01`].toString(),...a==null?void 0:{"anthropic-workspace-id":a}},n?.headers])})}}return e.Events=iy,e})(),oy=(()=>{class e extends X{constructor(){super(...arguments),this.events=new ny(this._client),this.resources=new ry(this._client),this.threads=new ay(this._client)}create(e,t){let{betas:n,workspace_id:r,...i}=e;return this._client.post(`/v1/sessions?beta=true`,{body:i,...t,headers:Z([{"anthropic-beta":[...n??[],`managed-agents-2026-04-01`].toString(),...r==null?void 0:{"anthropic-workspace-id":r}},t?.headers])})}retrieve(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.get(Q`/v1/sessions/${e}?beta=true`,{...n,headers:Z([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}update(e,t,n){let{betas:r,workspace_id:i,...a}=t;return this._client.post(Q`/v1/sessions/${e}?beta=true`,{body:a,...n,headers:Z([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}list(e={},t){let{betas:n,workspace_id:r,...i}=e??{};return this._client.getAPIList(`/v1/sessions?beta=true`,sm,{query:i,...t,headers:Z([{"anthropic-beta":[...n??[],`managed-agents-2026-04-01`].toString(),...r==null?void 0:{"anthropic-workspace-id":r}},t?.headers])})}delete(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.delete(Q`/v1/sessions/${e}?beta=true`,{...n,headers:Z([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}archive(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.post(Q`/v1/sessions/${e}/archive?beta=true`,{...n,headers:Z([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}}return e.Events=ny,e.Resources=ry,e.Threads=ay,e})(),sy=class extends X{create(e,t,n){let{betas:r,workspace_id:i,...a}=t;return this._client.post(Q`/v1/skills/${e}/versions?beta=true`,fm({body:a,...n,headers:Z([{...r?.toString()==null?void 0:{"anthropic-beta":r?.toString()},...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])},this._client,!1))}retrieve(e,t,n){let{skill_id:r,betas:i,workspace_id:a}=t;return this._client.get(Q`/v1/skills/${r}/versions/${e}?beta=true`,{...n,headers:Z([{...i?.toString()==null?void 0:{"anthropic-beta":i?.toString()},...a==null?void 0:{"anthropic-workspace-id":a}},n?.headers])})}list(e,t={},n){let{betas:r,workspace_id:i,...a}=t??{};return this._client.getAPIList(Q`/v1/skills/${e}/versions?beta=true`,om,{query:a,...n,headers:Z([{...r?.toString()==null?void 0:{"anthropic-beta":r?.toString()},...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}delete(e,t,n){let{skill_id:r,betas:i,workspace_id:a}=t;return this._client.delete(Q`/v1/skills/${r}/versions/${e}?beta=true`,{...n,headers:Z([{...i?.toString()==null?void 0:{"anthropic-beta":i?.toString()},...a==null?void 0:{"anthropic-workspace-id":a}},n?.headers])})}download(e,t,n){let{skill_id:r,betas:i,workspace_id:a}=t;return this._client.get(Q`/v1/skills/${r}/versions/${e}/content?beta=true`,{...n,headers:Z([{Accept:`application/binary`,...i?.toString()==null?void 0:{"anthropic-beta":i?.toString()},...a==null?void 0:{"anthropic-workspace-id":a}},n?.headers]),__binaryResponse:!0})}},cy=(()=>{class e extends X{constructor(){super(...arguments),this.versions=new sy(this._client)}create(e,t){let{betas:n,workspace_id:r,...i}=e;return this._client.post(`/v1/skills?beta=true`,fm({body:i,...t,headers:Z([{...n?.toString()==null?void 0:{"anthropic-beta":n?.toString()},...r==null?void 0:{"anthropic-workspace-id":r}},t?.headers])},this._client,!1))}retrieve(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.get(Q`/v1/skills/${e}?beta=true`,{...n,headers:Z([{...r?.toString()==null?void 0:{"anthropic-beta":r?.toString()},...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}list(e={},t){let{betas:n,workspace_id:r,...i}=e??{};return this._client.getAPIList(`/v1/skills?beta=true`,om,{query:i,...t,headers:Z([{...n?.toString()==null?void 0:{"anthropic-beta":n?.toString()},...r==null?void 0:{"anthropic-workspace-id":r}},t?.headers])})}delete(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.delete(Q`/v1/skills/${e}?beta=true`,{...n,headers:Z([{...r?.toString()==null?void 0:{"anthropic-beta":r?.toString()},...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}}return e.Versions=sy,e})(),ly=class extends X{create(e,t,n){let{betas:r,workspace_id:i,...a}=t;return this._client.post(Q`/v1/tunnels/${e}/certificates?beta=true`,{body:a,...n,headers:Z([{"anthropic-beta":[...r??[],`mcp-tunnels-2026-06-22`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}retrieve(e,t,n){let{tunnel_id:r,betas:i,workspace_id:a}=t;return this._client.get(Q`/v1/tunnels/${r}/certificates/${e}?beta=true`,{...n,headers:Z([{"anthropic-beta":[...i??[],`mcp-tunnels-2026-06-22`].toString(),...a==null?void 0:{"anthropic-workspace-id":a}},n?.headers])})}list(e,t={},n){let{betas:r,workspace_id:i,...a}=t??{};return this._client.getAPIList(Q`/v1/tunnels/${e}/certificates?beta=true`,om,{query:a,...n,headers:Z([{"anthropic-beta":[...r??[],`mcp-tunnels-2026-06-22`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}archive(e,t,n){let{tunnel_id:r,betas:i,workspace_id:a}=t;return this._client.post(Q`/v1/tunnels/${r}/certificates/${e}/archive?beta=true`,{...n,headers:Z([{"anthropic-beta":[...i??[],`mcp-tunnels-2026-06-22`].toString(),...a==null?void 0:{"anthropic-workspace-id":a}},n?.headers])})}},uy=(()=>{class e extends X{constructor(){super(...arguments),this.certificates=new ly(this._client)}create(e,t){let{betas:n,workspace_id:r,...i}=e;return this._client.post(`/v1/tunnels?beta=true`,{body:i,...t,headers:Z([{"anthropic-beta":[...n??[],`mcp-tunnels-2026-06-22`].toString(),...r==null?void 0:{"anthropic-workspace-id":r}},t?.headers])})}retrieve(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.get(Q`/v1/tunnels/${e}?beta=true`,{...n,headers:Z([{"anthropic-beta":[...r??[],`mcp-tunnels-2026-06-22`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}list(e={},t){let{betas:n,workspace_id:r,...i}=e??{};return this._client.getAPIList(`/v1/tunnels?beta=true`,om,{query:i,...t,headers:Z([{"anthropic-beta":[...n??[],`mcp-tunnels-2026-06-22`].toString(),...r==null?void 0:{"anthropic-workspace-id":r}},t?.headers])})}archive(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.post(Q`/v1/tunnels/${e}/archive?beta=true`,{...n,headers:Z([{"anthropic-beta":[...r??[],`mcp-tunnels-2026-06-22`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}revealToken(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.post(Q`/v1/tunnels/${e}/reveal_token?beta=true`,{...n,headers:Z([{"anthropic-beta":[...r??[],`mcp-tunnels-2026-06-22`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}rotateToken(e,t,n){let{betas:r,workspace_id:i,...a}=t;return this._client.post(Q`/v1/tunnels/${e}/rotate_token?beta=true`,{body:a,...n,headers:Z([{"anthropic-beta":[...r??[],`mcp-tunnels-2026-06-22`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}}return e.Certificates=ly,e})(),dy=class extends X{create(e,t,n){let{betas:r,workspace_id:i,...a}=t;return this._client.post(Q`/v1/vaults/${e}/credentials?beta=true`,{body:a,...n,headers:Z([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}retrieve(e,t,n){let{vault_id:r,betas:i,workspace_id:a}=t;return this._client.get(Q`/v1/vaults/${r}/credentials/${e}?beta=true`,{...n,headers:Z([{"anthropic-beta":[...i??[],`managed-agents-2026-04-01`].toString(),...a==null?void 0:{"anthropic-workspace-id":a}},n?.headers])})}update(e,t,n){let{vault_id:r,betas:i,workspace_id:a,...o}=t;return this._client.post(Q`/v1/vaults/${r}/credentials/${e}?beta=true`,{body:o,...n,headers:Z([{"anthropic-beta":[...i??[],`managed-agents-2026-04-01`].toString(),...a==null?void 0:{"anthropic-workspace-id":a}},n?.headers])})}list(e,t={},n){let{betas:r,workspace_id:i,...a}=t??{};return this._client.getAPIList(Q`/v1/vaults/${e}/credentials?beta=true`,om,{query:a,...n,headers:Z([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}delete(e,t,n){let{vault_id:r,betas:i,workspace_id:a}=t;return this._client.delete(Q`/v1/vaults/${r}/credentials/${e}?beta=true`,{...n,headers:Z([{"anthropic-beta":[...i??[],`managed-agents-2026-04-01`].toString(),...a==null?void 0:{"anthropic-workspace-id":a}},n?.headers])})}archive(e,t,n){let{vault_id:r,betas:i,workspace_id:a}=t;return this._client.post(Q`/v1/vaults/${r}/credentials/${e}/archive?beta=true`,{...n,headers:Z([{"anthropic-beta":[...i??[],`managed-agents-2026-04-01`].toString(),...a==null?void 0:{"anthropic-workspace-id":a}},n?.headers])})}mcpOAuthValidate(e,t,n){let{vault_id:r,betas:i,workspace_id:a}=t;return this._client.post(Q`/v1/vaults/${r}/credentials/${e}/mcp_oauth_validate?beta=true`,{...n,headers:Z([{"anthropic-beta":[...i??[],`managed-agents-2026-04-01`].toString(),...a==null?void 0:{"anthropic-workspace-id":a}},n?.headers])})}},fy=(()=>{class e extends X{constructor(){super(...arguments),this.credentials=new dy(this._client)}create(e,t){let{betas:n,workspace_id:r,...i}=e;return this._client.post(`/v1/vaults?beta=true`,{body:i,...t,headers:Z([{"anthropic-beta":[...n??[],`managed-agents-2026-04-01`].toString(),...r==null?void 0:{"anthropic-workspace-id":r}},t?.headers])})}retrieve(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.get(Q`/v1/vaults/${e}?beta=true`,{...n,headers:Z([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}update(e,t,n){let{betas:r,workspace_id:i,...a}=t;return this._client.post(Q`/v1/vaults/${e}?beta=true`,{body:a,...n,headers:Z([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}list(e={},t){let{betas:n,workspace_id:r,...i}=e??{};return this._client.getAPIList(`/v1/vaults?beta=true`,om,{query:i,...t,headers:Z([{"anthropic-beta":[...n??[],`managed-agents-2026-04-01`].toString(),...r==null?void 0:{"anthropic-workspace-id":r}},t?.headers])})}delete(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.delete(Q`/v1/vaults/${e}?beta=true`,{...n,headers:Z([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}archive(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.post(Q`/v1/vaults/${e}/archive?beta=true`,{...n,headers:Z([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}}return e.Credentials=dy,e})(),py=(()=>{class e extends X{constructor(){super(...arguments),this.models=new Hm(this._client),this.messages=new Lv(this._client),this.agents=new Xm(this._client),this.environments=new Wg(this._client),this.sessions=new oy(this._client),this.deployments=new jm(this._client),this.deploymentRuns=new Am(this._client),this.vaults=new fy(this._client),this.memoryStores=new qg(this._client),this.files=new Vm(this._client),this.skills=new cy(this._client),this.webhooks=new Jm(this._client),this.userProfiles=new Um(this._client),this.dreams=new Mm(this._client),this.tunnels=new uy(this._client),this.organization=new ty(this._client)}}return e.Models=Hm,e.Messages=Lv,e.Agents=Xm,e.Environments=Wg,e.Sessions=oy,e.Deployments=jm,e.DeploymentRuns=Am,e.Vaults=fy,e.MemoryStores=qg,e.Files=Vm,e.Skills=cy,e.Webhooks=Jm,e.UserProfiles=Um,e.Dreams=Mm,e.Tunnels=uy,e.Organization=ty,e})(),my=class extends X{create(e,t){let{betas:n,workspace_id:r,...i}=e;return this._client.post(`/v1/complete`,{body:i,timeout:this._client._options.timeout??6e5,...t,headers:Z([{...n?.toString()==null?void 0:{"anthropic-beta":n?.toString()},...r==null?void 0:{"anthropic-workspace-id":r}},t?.headers]),stream:e.stream??!1})}},hy=class extends X{list(e={},t){let{workspace_id:n,...r}=e??{};return this._client.getAPIList(`/v1/files`,om,{query:r,...t,headers:Z([{...n==null?void 0:{"anthropic-workspace-id":n}},t?.headers])})}delete(e,t={},n){let{workspace_id:r}=t??{};return this._client.delete(Q`/v1/files/${e}`,{...n,headers:Z([{...r==null?void 0:{"anthropic-workspace-id":r}},n?.headers])})}download(e,t={},n){let{workspace_id:r}=t??{};return this._client.get(Q`/v1/files/${e}/content`,{...n,headers:Z([{Accept:`application/binary`,...r==null?void 0:{"anthropic-workspace-id":r}},n?.headers]),__binaryResponse:!0})}retrieveMetadata(e,t={},n){let{workspace_id:r}=t??{};return this._client.get(Q`/v1/files/${e}`,{...n,headers:Z([{...r==null?void 0:{"anthropic-workspace-id":r}},n?.headers])})}upload(e,t){let{workspace_id:n,...r}=e;return this._client.post(`/v1/files`,fm({body:r,...t,headers:Z([{...n==null?void 0:{"anthropic-workspace-id":n}},Bm(r.file),t?.headers])},this._client))}};function gy(e){return e?.output_config?.format}function _y(e,t,n){let r=gy(t);return!t||!(`parse`in(r??{}))?{...e,content:e.content.map(e=>e.type===`text`?Object.defineProperty({...e},"parsed_output",{value:null,enumerable:!1}):e),parsed_output:null}:vy(e,t,n)}function vy(e,t,n){let r=null,i=e.content.map(e=>{if(e.type===`text`){let n=yy(t,e.text);return r===null&&(r=n),Object.defineProperty({...e},"parsed_output",{value:n,enumerable:!1})}return e});return{...e,content:i,parsed_output:r}}function yy(e,t){let n=gy(e);if(n?.type!==`json_schema`)return null;try{return`parse`in n?n.parse(t):JSON.parse(t)}catch(e){throw new Y(`Failed to parse structured output: ${e}`)}}var by,xy,Sy,Cy,wy,Ty,Ey,Dy,Oy,ky,Ay,jy,My,Ny,Py,Fy,Iy,Ly,Ry,zy,By,Vy,Hy,Uy,Wy;function Gy(e){return e.type===`tool_use`||e.type===`server_tool_use`}var Ky=(()=>{class e{constructor(e,t){by.add(this),this.messages=[],this.receivedMessages=[],xy.set(this,void 0),Sy.set(this,null),this.controller=new AbortController,Cy.set(this,void 0),wy.set(this,()=>{}),Ty.set(this,()=>{}),Ey.set(this,void 0),Dy.set(this,()=>{}),Oy.set(this,()=>{}),ky.set(this,{}),Ay.set(this,!1),jy.set(this,!1),My.set(this,!1),Ny.set(this,!1),Py.set(this,void 0),Fy.set(this,void 0),Iy.set(this,void 0),Ly.set(this,void 0),By.set(this,e=>{if(q(this,jy,!0,`f`),vd(e)&&(e=new xd),e instanceof xd)return q(this,My,!0,`f`),this._emit(`abort`,e);if(e instanceof Y)return this._emit(`error`,e);if(e instanceof Error){let t=new Y(e.message);return t.cause=e,this._emit(`error`,t)}return this._emit(`error`,new Y(String(e)))}),q(this,Cy,new Promise((e,t)=>{q(this,wy,e,`f`),q(this,Ty,t,`f`)}),`f`),q(this,Ey,new Promise((e,t)=>{q(this,Dy,e,`f`),q(this,Oy,t,`f`)}),`f`),J(this,Cy,`f`).catch(()=>{}),J(this,Ey,`f`).catch(()=>{}),q(this,Sy,e,`f`),q(this,Ly,t?.logger??console,`f`)}get response(){return J(this,Py,`f`)}get request_id(){return J(this,Fy,`f`)}get workspace_id(){return J(this,Iy,`f`)}async withResponse(){q(this,Ny,!0,`f`);let e=await J(this,Cy,`f`);if(!e)throw Error("Could not resolve a `Response` object");return{data:this,response:e,request_id:e.headers.get(`request-id`),workspace_id:e.headers.get(`anthropic-workspace-id`)}}static fromReadableStream(t){let n=new e(null);return n._run(()=>n._fromReadableStream(t)),n}static createMessage(t,n,r,{logger:i}={}){let a=new e(n,{logger:i});for(let e of n.messages)a._addMessageParam(e);return q(a,Sy,{...n,stream:!0},`f`),a._run(()=>a._createMessage(t,{...n,stream:!0},{...r,headers:{...r?.headers,[Pm]:`stream`}})),a}_run(e){e().then(()=>{this._emitFinal(),this._emit(`end`)},J(this,By,`f`))}_addMessageParam(e){this.messages.push(e)}_addMessage(e,t=!0){this.receivedMessages.push(e),t&&this._emit(`message`,e)}async _createMessage(e,t,n){let r=n?.signal,i;r&&(r.aborted&&this.controller.abort(),i=this.controller.abort.bind(this.controller),r.addEventListener(`abort`,i));try{J(this,by,`m`,Vy).call(this);let{response:r,data:i}=await e.create({...t,stream:!0},{...n,signal:this.controller.signal}).withResponse();this._connected(r);for await(let e of i)J(this,by,`m`,Hy).call(this,e);if(i.controller.signal?.aborted)throw new xd;J(this,by,`m`,Uy).call(this)}finally{r&&i&&r.removeEventListener(`abort`,i)}}_connected(e){this.ended||(q(this,Py,e,`f`),q(this,Fy,e?.headers.get(`request-id`),`f`),q(this,Iy,e?.headers.get(`anthropic-workspace-id`),`f`),J(this,wy,`f`).call(this,e),this._emit(`connect`))}get ended(){return J(this,Ay,`f`)}get errored(){return J(this,jy,`f`)}get aborted(){return J(this,My,`f`)}abort(){this.controller.abort()}on(e,t){return(J(this,ky,`f`)[e]||(J(this,ky,`f`)[e]=[])).push({listener:t}),this}off(e,t){let n=J(this,ky,`f`)[e];if(!n)return this;let r=n.findIndex(e=>e.listener===t);return r>=0&&n.splice(r,1),this}once(e,t){return(J(this,ky,`f`)[e]||(J(this,ky,`f`)[e]=[])).push({listener:t,once:!0}),this}emitted(e){return new Promise((t,n)=>{q(this,Ny,!0,`f`),e!==`error`&&this.once(`error`,n),this.once(e,t)})}async done(){q(this,Ny,!0,`f`),await J(this,Ey,`f`)}get currentMessage(){return J(this,xy,`f`)}async finalMessage(){return await this.done(),J(this,by,`m`,Ry).call(this)}async finalText(){return await this.done(),J(this,by,`m`,zy).call(this)}_emit(e,...t){if(J(this,Ay,`f`))return;e===`end`&&(q(this,Ay,!0,`f`),J(this,Dy,`f`).call(this));let n=J(this,ky,`f`)[e];if(n&&(J(this,ky,`f`)[e]=n.filter(e=>!e.once),n.forEach(({listener:e})=>e(...t))),e===`abort`){let e=t[0];!J(this,Ny,`f`)&&!n?.length&&Promise.reject(e),J(this,Ty,`f`).call(this,e),J(this,Oy,`f`).call(this,e),this._emit(`end`);return}if(e===`error`){let e=t[0];!J(this,Ny,`f`)&&!n?.length&&Promise.reject(e),J(this,Ty,`f`).call(this,e),J(this,Oy,`f`).call(this,e),this._emit(`end`)}}_emitFinal(){this.receivedMessages.at(-1)&&this._emit(`finalMessage`,J(this,by,`m`,Ry).call(this))}async _fromReadableStream(e,t){let n=t?.signal,r;n&&(n.aborted&&this.controller.abort(),r=this.controller.abort.bind(this.controller),n.addEventListener(`abort`,r));try{J(this,by,`m`,Vy).call(this),this._connected(null);let t=Vp.fromReadableStream(e,this.controller);for await(let e of t)J(this,by,`m`,Hy).call(this,e);if(t.controller.signal?.aborted)throw new xd;J(this,by,`m`,Uy).call(this)}finally{n&&r&&n.removeEventListener(`abort`,r)}}[(xy=new WeakMap,Sy=new WeakMap,Cy=new WeakMap,wy=new WeakMap,Ty=new WeakMap,Ey=new WeakMap,Dy=new WeakMap,Oy=new WeakMap,ky=new WeakMap,Ay=new WeakMap,jy=new WeakMap,My=new WeakMap,Ny=new WeakMap,Py=new WeakMap,Fy=new WeakMap,Iy=new WeakMap,Ly=new WeakMap,By=new WeakMap,by=new WeakSet,Ry=function(){if(this.receivedMessages.length===0)throw new Y(`stream ended without producing a Message with role=assistant`);return this.receivedMessages.at(-1)},zy=function(){if(this.receivedMessages.length===0)throw new Y(`stream ended without producing a Message with role=assistant`);let e=this.receivedMessages.at(-1).content.filter(e=>e.type===`text`).map(e=>e.text);if(e.length===0)throw new Y(`stream ended without producing a content block with type=text`);return e.join(` `)},Vy=function(){this.ended||q(this,xy,void 0,`f`)},Hy=function(e){if(this.ended)return;let t=J(this,by,`m`,Wy).call(this,e);switch(this._emit(`streamEvent`,e,t),e.type){case`content_block_delta`:{let n=t.content.at(-1);switch(e.delta.type){case`text_delta`:n.type===`text`&&this._emit(`text`,e.delta.text,n.text||``);break;case`citations_delta`:n.type===`text`&&this._emit(`citation`,e.delta.citation,n.citations??[]);break;case`input_json_delta`:Gy(n)&&J(this,ky,`f`).inputJson?.length&&this._emit(`inputJson`,e.delta.partial_json,n.input);break;case`thinking_delta`:n.type===`thinking`&&this._emit(`thinking`,e.delta.thinking,n.thinking);break;case`signature_delta`:n.type===`thinking`&&this._emit(`signature`,n.signature);break;default:e.delta}break}case`message_stop`:this._addMessageParam(t),this._addMessage(_y(t,J(this,Sy,`f`),{logger:J(this,Ly,`f`)}),!0);break;case`content_block_stop`:this._emit(`contentBlock`,t.content.at(-1));break;case`message_start`:q(this,xy,t,`f`)}},Uy=function(){if(this.ended)throw new Y(`stream has ended, this shouldn't happen`);let e=J(this,xy,`f`);if(!e)throw new Y(`request ended without sending any chunks`);return q(this,xy,void 0,`f`),_y(e,J(this,Sy,`f`),{logger:J(this,Ly,`f`)})},Wy=function(e){let t=J(this,xy,`f`);if(e.type===`message_start`){if(t)throw new Y(`Unexpected event order, got ${e.type} before receiving "message_stop"`);return e.message}if(!t)throw new Y(`Unexpected event order, got ${e.type} before "message_start"`);switch(e.type){case`message_stop`:return t;case`message_delta`:return t.stop_reason=e.delta.stop_reason,t.stop_sequence=e.delta.stop_sequence,t.stop_details=e.delta.stop_details,t.usage.output_tokens=e.usage.output_tokens,e.delta.container!=null&&(t.container=e.delta.container),e.usage.input_tokens!=null&&(t.usage.input_tokens=e.usage.input_tokens),e.usage.cache_creation_input_tokens!=null&&(t.usage.cache_creation_input_tokens=e.usage.cache_creation_input_tokens),e.usage.cache_read_input_tokens!=null&&(t.usage.cache_read_input_tokens=e.usage.cache_read_input_tokens),e.usage.server_tool_use!=null&&(t.usage.server_tool_use=e.usage.server_tool_use),e.usage.output_tokens_details!=null&&(t.usage.output_tokens_details=e.usage.output_tokens_details),t;case`content_block_start`:return t.content.push({...e.content_block}),t;case`content_block_delta`:{let n=t.content.at(e.index);switch(e.delta.type){case`text_delta`:n?.type===`text`&&(t.content[e.index]={...n,text:(n.text||``)+e.delta.text});break;case`citations_delta`:n?.type===`text`&&(t.content[e.index]={...n,citations:[...n.citations??[],e.delta.citation]});break;case`input_json_delta`:if(n&&Gy(n)){let r=(n.__json_buf||``)+e.delta.partial_json;t.content[e.index]=s_(n,r)}break;case`thinking_delta`:n?.type===`thinking`&&(t.content[e.index]={...n,thinking:n.thinking+e.delta.thinking});break;case`signature_delta`:n?.type===`thinking`&&(t.content[e.index]={...n,signature:e.delta.signature});break;default:e.delta}return t}case`content_block_stop`:{let n=t.content.at(e.index);return n&&Gy(n)&&`__json_buf`in n&&Object.defineProperty(n,"input",{value:n.input,enumerable:!0,configurable:!0,writable:!0}),t}}},Symbol.asyncIterator)](){let e=[],t=[],n=!1;return this.on(`streamEvent`,n=>{let r=t.shift();r?r.resolve(n):e.push(n)}),this.on(`end`,()=>{n=!0;for(let e of t)e.resolve(void 0);t.length=0}),this.on(`abort`,e=>{n=!0;for(let n of t)n.reject(e);t.length=0}),this.on(`error`,e=>{n=!0;for(let n of t)n.reject(e);t.length=0}),{next:async()=>e.length?{value:e.shift(),done:!1}:n?{value:void 0,done:!0}:new Promise((e,n)=>t.push({resolve:e,reject:n})).then(e=>e?{value:e,done:!1}:{value:void 0,done:!0}),return:async()=>(this.abort(),{value:void 0,done:!0})}}toReadableStream(){return new Vp(this[Symbol.asyncIterator].bind(this),this.controller).toReadableStream()}}return e})(),qy=class extends X{create(e,t){let{user_profile_id:n,workspace_id:r,...i}=e;return this._client.post(`/v1/messages/batches`,{body:i,...t,headers:Z([{...n==null?void 0:{"anthropic-user-profile-id":n},...r==null?void 0:{"anthropic-workspace-id":r}},t?.headers])})}retrieve(e,t={},n){let{workspace_id:r}=t??{};return this._client.get(Q`/v1/messages/batches/${e}`,{...n,headers:Z([{...r==null?void 0:{"anthropic-workspace-id":r}},n?.headers])})}list(e={},t){let{workspace_id:n,...r}=e??{};return this._client.getAPIList(`/v1/messages/batches`,am,{query:r,...t,headers:Z([{...n==null?void 0:{"anthropic-workspace-id":n}},t?.headers])})}delete(e,t={},n){let{workspace_id:r}=t??{};return this._client.delete(Q`/v1/messages/batches/${e}`,{...n,headers:Z([{...r==null?void 0:{"anthropic-workspace-id":r}},n?.headers])})}cancel(e,t={},n){let{workspace_id:r}=t??{};return this._client.post(Q`/v1/messages/batches/${e}/cancel`,{...n,headers:Z([{...r==null?void 0:{"anthropic-workspace-id":r}},n?.headers])})}async results(e,t={},n){let r=await this.retrieve(e,t,n);if(!r.results_url)throw new Y(`No batch \`results_url\`; Has it finished processing? ${r.processing_status} - ${r.id}`);let{workspace_id:i}=t??{};return this._client.get(r.results_url,{...n,headers:Z([{Accept:`application/binary`,...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers]),stream:!0,__binaryResponse:!0})._thenUnwrap((e,t)=>Jg.fromResponse(t.response,t.controller))}},Jy=(()=>{class e extends X{constructor(){super(...arguments),this.batches=new qy(this._client)}create(e,t){let{user_profile_id:n,workspace_id:r,...i}=e;i.model in Yy&&console.warn(`The model '${i.model}' is deprecated and will reach end-of-life on ${Yy[i.model]}\nPlease migrate to a newer model. Visit https://docs.anthropic.com/en/docs/resources/model-deprecations for more information.`),Xy.includes(i.model)&&i.thinking&&i.thinking.type===`enabled`&&console.warn(`Using Claude with ${i.model} and 'thinking.type=enabled' is deprecated. Use 'thinking.type=adaptive' instead which results in better model performance in our testing: https://platform.claude.com/docs/en/build-with-claude/adaptive-thinking`);let a=t?.timeout??this._client._options.timeout;if(!i.stream&&a==null){let e=Xg[i.model]??void 0;a=this._client.calculateNonstreamingTimeout(i.max_tokens,e)}let o=zm(i.tools,i.messages);return this._client.post(`/v1/messages`,{body:i,timeout:a??6e5,...t,headers:Z([{...n==null?void 0:{"anthropic-user-profile-id":n},...r==null?void 0:{"anthropic-workspace-id":r}},o,t?.headers]),stream:e.stream??!1})}parse(e,t){return this.create(e,t).then(t=>vy(t,e,{logger:this._client.logger??console}))}stream(e,t){return Ky.createMessage(this,e,t,{logger:this._client.logger??console})}countTokens(e,t){let{user_profile_id:n,workspace_id:r,...i}=e;return this._client.post(`/v1/messages/count_tokens`,{body:i,...t,headers:Z([{...n==null?void 0:{"anthropic-user-profile-id":n},...r==null?void 0:{"anthropic-workspace-id":r}},t?.headers])})}}return e.Batches=qy,e})(),Yy={},Xy=[`claude-mythos-preview`,`claude-opus-4-6`],Zy=class extends X{retrieve(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.get(Q`/v1/models/${e}`,{...n,headers:Z([{...r?.toString()==null?void 0:{"anthropic-beta":r?.toString()},...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}list(e={},t){let{betas:n,workspace_id:r,...i}=e??{};return this._client.getAPIList(`/v1/models`,am,{query:i,...t,headers:Z([{...n?.toString()==null?void 0:{"anthropic-beta":n?.toString()},...r==null?void 0:{"anthropic-workspace-id":r}},t?.headers])})}},Qy=class extends X{create(e,t,n){let{workspace_id:r,...i}=t;return this._client.post(Q`/v1/skills/${e}/versions`,fm({body:i,...n,headers:Z([{...r==null?void 0:{"anthropic-workspace-id":r}},n?.headers])},this._client,!1))}retrieve(e,t,n){let{skill_id:r,workspace_id:i}=t;return this._client.get(Q`/v1/skills/${r}/versions/${e}`,{...n,headers:Z([{...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}list(e,t={},n){let{workspace_id:r,...i}=t??{};return this._client.getAPIList(Q`/v1/skills/${e}/versions`,om,{query:i,...n,headers:Z([{...r==null?void 0:{"anthropic-workspace-id":r}},n?.headers])})}delete(e,t,n){let{skill_id:r,workspace_id:i}=t;return this._client.delete(Q`/v1/skills/${r}/versions/${e}`,{...n,headers:Z([{...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}},$y=(()=>{class e extends X{constructor(){super(...arguments),this.versions=new Qy(this._client)}create(e,t){let{workspace_id:n,...r}=e;return this._client.post(`/v1/skills`,fm({body:r,...t,headers:Z([{...n==null?void 0:{"anthropic-workspace-id":n}},t?.headers])},this._client,!1))}retrieve(e,t={},n){let{workspace_id:r}=t??{};return this._client.get(Q`/v1/skills/${e}`,{...n,headers:Z([{...r==null?void 0:{"anthropic-workspace-id":r}},n?.headers])})}list(e={},t){let{workspace_id:n,...r}=e??{};return this._client.getAPIList(`/v1/skills`,om,{query:r,...t,headers:Z([{...n==null?void 0:{"anthropic-workspace-id":n}},t?.headers])})}delete(e,t={},n){let{workspace_id:r}=t??{};return this._client.delete(Q`/v1/skills/${e}`,{...n,headers:Z([{...r==null?void 0:{"anthropic-workspace-id":r}},n?.headers])})}}return e.Versions=Qy,e})(),eb,tb,nb,rb,ib=`\\n\\nHuman:`,ab=`\\n\\nAssistant:`,ob=(()=>{class e{get credentials(){return this._authState.provider}constructor({baseURL:e=Qf(`ANTHROPIC_BASE_URL`),apiKey:t,authToken:n,webhookKey:r=Qf(`ANTHROPIC_WEBHOOK_SIGNING_KEY`)??null,...i}={}){if(eb.add(this),this._requestAuthFlags=new WeakMap,nb.set(this,void 0),t===void 0&&(t=i.profile==null?Qf(`ANTHROPIC_API_KEY`)??null:null),n===void 0&&(n=i.profile==null?Qf(`ANTHROPIC_AUTH_TOKEN`)??null:null),i.profile!=null&&(i.credentials!=null||i.config!=null))throw TypeError("Pass at most one of `profile`, `credentials`, or `config`.");let a={apiKey:t,authToken:n,webhookKey:r,...i,baseURL:e||`https://api.anthropic.com`};if(!a.dangerouslyAllowBrowser&&Gd())throw new Y(`It looks like you're running in a browser-like environment.

This is disabled by default, as it risks exposing your secret API credentials to attackers.
If you understand the risks and have appropriate mitigations in place,
you can set the \`dangerouslyAllowBrowser\` option to \`true\`, e.g.,

new Anthropic({ apiKey, dangerouslyAllowBrowser: true });
`);this.baseURL=a.baseURL,this._baseURLIsExplicit=i.__baseURLIsExplicit??!!e,this.timeout=a.timeout??tb.DEFAULT_TIMEOUT,this.logger=a.logger??console,this.logLevel=ap,this.logLevel=sp(a.logLevel,`ClientOptions.logLevel`,pp(this))??sp(Qf(`ANTHROPIC_LOG`),`process.env['ANTHROPIC_LOG']`,pp(this))??`warn`,this.fetchOptions=a.fetchOptions,this.maxRetries=Vd(`maxRetries`,a.maxRetries??2),this.fetch=a.fetch??of(),q(this,nb,df,`f`),this.middleware=[...a.middleware??[]];let o=Qf(`ANTHROPIC_CUSTOM_HEADERS`);if(o){let e={};for(let t of o.split(`
`)){let n=t.indexOf(`:`);n>=0&&(e[t.substring(0,n).trim()]=t.substring(n+1).trim())}a.defaultHeaders={...e,...a.defaultHeaders}}let s=i.__auth;if(delete a.__auth,delete a.__baseURLIsExplicit,this._options=a,this.apiKey=typeof t==`string`?t:null,this.authToken=n,this.webhookKey=r,s)this._authState=s,!this._baseURLIsExplicit&&s.baseURL&&(this.baseURL=s.baseURL);else if(this._authState={provider:null,tokenCache:null,resolution:null,error:null,extraHeaders:{}},this.apiKey==null&&this.authToken==null){let e=a.credentials??null;if(e)this._authState.provider=e,this._authState.tokenCache=this._makeTokenCache(e);else if(a.config!=null){let e=jp(a.config,this._credentialResolverOptions());this._authState.provider=e.provider,this._authState.tokenCache=this._makeTokenCache(e.provider),this._authState.extraHeaders=e.extraHeaders,this._applyCredentialBaseURL(e.baseURL)}else a.profile==null?this._shouldResolveDefaultCredentials()&&(this._authState.resolution=this._resolveDefaultCredentials()):this._authState.resolution=this._resolveDefaultCredentials(a.profile)}}_shouldResolveDefaultCredentials(){return!0}_applyCredentialBaseURL(e){if(!e)return;let t=e.replace(/\/+$/,``);this._authState.baseURL=t,this._baseURLIsExplicit||(this.baseURL=t)}_credentialResolverOptions(){return{baseURL:this.baseURL,fetch:this._credentialsFetch(),userAgent:this.getUserAgent(),onCacheWriteError:e=>{pp(this).debug(`credential cache write failed (best-effort)`,e)},onSafetyWarning:e=>{pp(this).warn(e)}}}_credentialsFetch(){return Xp(this.fetch,this.middleware,void 0,this)}_makeTokenCache(e){return new Zf(e,e=>{pp(this).debug(`advisory token refresh failed; serving cached token`,e)})}withOptions(e){let t=`credentials`in e||`config`in e||`profile`in e,n=`apiKey`in e||`authToken`in e||t,r={...this._options,...this._baseURLIsExplicit?{baseURL:this.baseURL}:{},maxRetries:this.maxRetries,timeout:this.timeout,logger:this.logger,logLevel:this.logLevel,fetch:this.fetch,fetchOptions:this.fetchOptions,middleware:this.middleware,apiKey:this.apiKey,authToken:this.authToken,webhookKey:this.webhookKey,credentials:this.credentials,...t?{credentials:void 0,config:void 0,profile:void 0}:{},...e,__auth:n?void 0:this._authState,__baseURLIsExplicit:`baseURL`in e||this._baseURLIsExplicit};return new this.constructor(r)}async _resolveDefaultCredentials(e){try{let t=await Mp(this._credentialResolverOptions(),e);if(t)this._authState.provider=t.provider,this._authState.tokenCache=this._makeTokenCache(t.provider),this._authState.extraHeaders=t.extraHeaders,this._applyCredentialBaseURL(t.baseURL);else if(e!=null)throw new Y(`Profile "${e}" could not be resolved (no <config_dir>/configs/${e}.json found).`)}catch(e){this._authState.error=e}finally{this._authState.resolution=null}}defaultQuery(){return this._options.defaultQuery}validateHeaders({values:e,nulls:t}){if(!(e.get(`x-api-key`)||e.get(`authorization`))){if(this._authState.error)throw this._authState.error;if(!(this._authState.tokenCache||this._authState.resolution)&&!(this.apiKey&&e.get(`x-api-key`))&&!t.has(`x-api-key`)&&!(this.authToken&&e.get(`authorization`))&&!t.has(`authorization`))throw Error(`Could not resolve authentication method. Expected one of apiKey, authToken, credentials, config, or profile to be set. Or for one of the "X-Api-Key" or "Authorization" headers to be explicitly omitted`)}}_authFlags(e){let t=this._requestAuthFlags.get(e);return t||(t={usedTokenCache:!1,didRefreshFor401:!1},this._requestAuthFlags.set(e,t)),t}async authHeaders(e){if(this._authState.resolution&&await this._authState.resolution,!this._authState.error){if(this._authState.tokenCache&&this.apiKey==null){let t=await this._authState.tokenCache.getToken();return this._authFlags(e).usedTokenCache=!0,Z([{Authorization:`Bearer ${t}`}])}return Z([await this.apiKeyAuth(e),await this.bearerAuth(e)])}}async apiKeyAuth(e){if(this.apiKey!=null)return Z([{"X-Api-Key":this.apiKey}])}async bearerAuth(e){if(this.authToken!=null)return Z([{Authorization:`Bearer ${this.authToken}`}])}stringifyQuery(e){return Af(e)}getUserAgent(){return`Anthropic/JS ${Wd}`}makeStatusError(e,t,n,r){return bd.generate(e,t,n,r)}buildURL(e,t,n){let r=!J(this,eb,`m`,rb).call(this)&&n||this.baseURL,i=Pd(e)?new URL(e):new URL(r+(r.endsWith(`/`)&&e.startsWith(`/`)?e.slice(1):e)),a=this.defaultQuery(),o=Object.fromEntries(i.searchParams);return(!Rd(a)||!Rd(o))&&(t={...o,...a,...t}),typeof t==`object`&&t&&!Array.isArray(t)&&(i.search=this.stringifyQuery(t)),i.toString()}_calculateNonstreamingTimeout(e){if(3600*e/128e3>600)throw new Y(`Streaming is required for operations that may take longer than 10 minutes. See https://github.com/anthropics/anthropic-sdk-typescript#streaming-responses for more details`);return 6e5}async prepareOptions(e){}async prepareRequest(e,{url:t,options:n}){if(this._authState.tokenCache&&this.apiKey==null){let t=e.headers instanceof Headers?e.headers:new Headers(e.headers);for(let[e,n]of Object.entries(this._authState.extraHeaders))t.has(e)||t.set(e,n);let n=t.get(`anthropic-beta`)?.split(`,`).map(e=>e.trim());n?.includes(`oauth-2025-04-20`)||t.set(`anthropic-beta`,[...n??[],Rf].join(`,`)),e.headers=t}}backendMiddleware(){return[]}get(e,t){return this.methodRequest(`get`,e,t)}post(e,t){return this.methodRequest(`post`,e,t)}patch(e,t){return this.methodRequest(`patch`,e,t)}put(e,t){return this.methodRequest(`put`,e,t)}delete(e,t){return this.methodRequest(`delete`,e,t)}methodRequest(e,t,n){return this.request(Promise.resolve(n).then(n=>({method:e,path:t,...n})))}request(e,t=null){return new tm(this,this.makeRequest(e,t,void 0))}async makeRequest(e,t,n){let r=await e,i=Vd(`maxRetries`,r.maxRetries??this.maxRetries);this.isStreamBody(r.body)&&(i=0),t??(t=i,this._requestAuthFlags.delete(r)),await this.prepareOptions(r);let{req:a,url:o,timeout:s}=await this.buildRequest(r,{retryCount:i-t}),c=`log_`+(Math.random()*(1<<24)|0).toString(16).padStart(6,`0`),l=n===void 0?``:`, retryOf: ${n}`,u=Date.now();if(r.signal?.aborted)throw new xd;let d=new AbortController,f=await this.fetchWithTimeout(o,a,s,d,r,{requestLogID:c,retryOfRequestLogID:n}).catch(yd),p=Date.now();if(f instanceof globalThis.Error){af(d);let e=`retrying, ${t} attempts remaining`;if(r.signal?.aborted)throw new xd;let i=vd(f)||/timed? ?out/i.test(String(f)+(`cause`in f?String(f.cause):``)),a=this.middleware.length>0||!!r.middleware?.length||this.backendMiddleware().length>0;if(a&&!i&&!Yp(f))throw pp(this).info(`[${c}] middleware error (not retryable)`),_p(pp(this),`[${c}] middleware error (not retryable)`,{retryOfRequestLogID:n,url:o,durationMs:p-u,message:f.message}),f;if(t)return pp(this).info(`[${c}] connection ${i?`timed out`:`failed`} - ${e}`),_p(pp(this),`[${c}] connection ${i?`timed out`:`failed`} (${e})`,{retryOfRequestLogID:n,url:o,durationMs:p-u,message:f.message}),this.retryRequest(r,t,n??c);throw pp(this).info(`[${c}] connection ${i?`timed out`:`failed`} - error; no more retries left`),_p(pp(this),`[${c}] connection ${i?`timed out`:`failed`} (error; no more retries left)`,{retryOfRequestLogID:n,url:o,durationMs:p-u,message:f.message}),i?new Cd:a&&!Jp(f)?f:new Sd({cause:f})}let m=`[${c}${l}${[...f.headers.entries()].filter(([e])=>e===`request-id`||e===`anthropic-workspace-id`).map(([e,t])=>`, `+e+`: `+JSON.stringify(t)).join(``)}] ${a.method} ${o} ${f.ok?`succeeded`:`failed`} with status ${f.status} in ${p-u}ms`;if(!f.ok){let e=await this.shouldRetry(f,r);if(t&&e){let e=`retrying, ${t} attempts remaining`;return await uf(f.body),af(d),pp(this).info(`${m} - ${e}`),_p(pp(this),`[${c}] response error (${e})`,{retryOfRequestLogID:n,url:f.url,status:f.status,headers:f.headers,durationMs:p-u}),this.retryRequest(r,t,n??c,f.headers)}let i=e?`error; no more retries left`:`error; not retryable`;pp(this).info(`${m} - ${i}`);let a=await f.text().catch(e=>yd(e).message),o=Hd(a),s=o?void 0:a;throw _p(pp(this),`[${c}] response error (${i})`,{retryOfRequestLogID:n,url:f.url,status:f.status,headers:f.headers,message:s,durationMs:Date.now()-u}),af(d),this.makeStatusError(f.status,o,s,f.headers)}return pp(this).info(m),_p(pp(this),`[${c}] response start`,{retryOfRequestLogID:n,url:f.url,status:f.status,headers:f.headers,durationMs:p-u}),rf(f.body??f,d),{response:f,options:r,controller:d,requestLogID:c,retryOfRequestLogID:n,startTime:u}}getAPIList(e,t,n){return this.requestAPIList(t,n&&`then`in n?n.then(t=>({method:`get`,path:e,...t})):{method:`get`,path:e,...n})}requestAPIList(e,t){let n=this.makeRequest(t,null,void 0);return new im(this,n,e)}async fetchWithTimeout(e,t,n,r,i,a){let{signal:o,method:s,...c}=t||{},l=this._makeAbort(r);o&&(o.addEventListener(`abort`,l,{once:!0}),nf(r,o,l));let u=globalThis.ReadableStream&&c.body instanceof globalThis.ReadableStream||typeof c.body==`object`&&c.body!==null&&Symbol.asyncIterator in c.body,d={signal:r.signal,...u?{duplex:`half`}:{},method:`GET`,...c};s&&(d.method=s.toUpperCase());let f=this.fetch,p=async(e,t)=>{let r=setTimeout(l,n);try{return await f.call(void 0,e,t)}finally{clearTimeout(r)}},m=i===void 0?p:(async(e,t={})=>{let n=typeof e==`string`?e:e instanceof URL?e.href:e.url;return t.headers=t.headers instanceof Headers?t.headers:new Headers(t.headers),await this.prepareRequest(t,{url:n,options:i}),a&&_p(pp(this),`[${a.requestLogID}] sending request`,{retryOfRequestLogID:a.retryOfRequestLogID,method:t.method,url:n,options:i,headers:t.headers}),p(e,t)}),h=i?.middleware,g=this.backendMiddleware();return await Xp(m,h?.length||g.length?[...this.middleware,...h??[],...g]:this.middleware,i,this)(e,d)}async shouldRetry(e,t){let n=this._authFlags(t);if(e.status===401&&this._authState.tokenCache&&n.usedTokenCache&&!n.didRefreshFor401)return n.didRefreshFor401=!0,this._authState.tokenCache.invalidate(),!0;let r=e.headers.get(`x-should-retry`);return r===`true`?!0:r===`false`?!1:e.status===408||e.status===409||e.status===429||e.status>=500}async retryRequest(e,t,n,r){let i,a=r?.get(`retry-after-ms`);if(a){let e=parseFloat(a);Number.isNaN(e)||(i=e)}let o=r?.get(`retry-after`);if(o&&!i){let e=parseFloat(o);i=Number.isNaN(e)?Date.parse(o)-Date.now():e*1e3}if(i===void 0||!(i>0&&i<=2**31-1)){let n=e.maxRetries??this.maxRetries;i=this.calculateDefaultRetryTimeoutMillis(t,n)}return await Ud(i,e.signal??void 0),this.makeRequest(e,t-1,n)}calculateDefaultRetryTimeoutMillis(e,t){let n=t-e;return Math.min(.5*2**n,8)*(1-Math.random()*.25)*1e3}calculateNonstreamingTimeout(e,t){let n=6e5;if(36e5*e/128e3>n||t!=null&&e>t)throw new Y(`Streaming is required for operations that may take longer than 10 minutes. See https://github.com/anthropics/anthropic-sdk-typescript#long-requests for more details`);return n}async buildRequest(e,{retryCount:t=0}={}){let n={...e},{method:r,path:i,query:a,defaultBaseURL:o}=n;this._authState.resolution&&await this._authState.resolution,!this._baseURLIsExplicit&&this._authState.baseURL&&this.baseURL!==this._authState.baseURL&&(this.baseURL=this._authState.baseURL);let s=this.buildURL(i,a,o);`timeout`in n&&Vd(`timeout`,n.timeout),n.timeout=n.timeout??this.timeout;let{bodyHeaders:c,body:l}=this.buildBody({options:n});return{req:{method:r,headers:await this.buildHeaders({options:e,method:r,bodyHeaders:c,retryCount:t,timeout:n.timeout}),...n.signal&&{signal:n.signal},...globalThis.ReadableStream&&l instanceof globalThis.ReadableStream&&{duplex:`half`},...l&&{body:l},...this.fetchOptions??{},...n.fetchOptions??{}},url:s,timeout:n.timeout}}async buildHeaders({options:e,method:t,bodyHeaders:n,retryCount:r,timeout:i}){let a=Z([{Accept:`application/json`,"User-Agent":this.getUserAgent(),"X-Stainless-Retry-Count":String(r),"X-Stainless-Timeout":String(Math.trunc(i/1e3)),...Qd(),...this._options.dangerouslyAllowBrowser?{"anthropic-dangerous-direct-browser-access":`true`}:void 0,"anthropic-version":`2023-06-01`},await this.authHeaders(e),this._options.defaultHeaders,n,e.headers]);return this.validateHeaders(a),a.values}_makeAbort(e){return()=>e.abort()}buildBody({options:{body:e,headers:t}}){if(!e)return{bodyHeaders:void 0,body:void 0};let n=Z([t]);return ArrayBuffer.isView(e)||e instanceof ArrayBuffer||e instanceof DataView||typeof e==`string`&&n.values.has(`content-type`)||globalThis.Blob&&e instanceof globalThis.Blob||e instanceof FormData||e instanceof URLSearchParams||globalThis.ReadableStream&&e instanceof globalThis.ReadableStream?{bodyHeaders:void 0,body:e}:this.isStreamBody(e)?{bodyHeaders:void 0,body:cf(e)}:typeof e==`object`&&n.values.get(`content-type`)===`application/x-www-form-urlencoded`?{bodyHeaders:{"content-type":`application/x-www-form-urlencoded`},body:this.stringifyQuery(e)}:J(this,nb,`f`).call(this,{body:e,headers:n})}isStreamBody(e){return globalThis.ReadableStream&&e instanceof globalThis.ReadableStream?!0:typeof e==`object`&&!!e&&(Symbol.asyncIterator in e||Symbol.iterator in e&&`next`in e&&typeof e.next==`function`)}}return tb=e,nb=new WeakMap,eb=new WeakSet,rb=function(){return this.baseURL!==`https://api.anthropic.com`},e.Anthropic=tb,e.DEFAULT_TIMEOUT=6e5,e.AnthropicError=Y,e.APIError=bd,e.APIConnectionError=Sd,e.APIConnectionTimeoutError=Cd,e.APIUserAbortError=xd,e.NotFoundError=Od,e.ConflictError=kd,e.RateLimitError=jd,e.BadRequestError=Td,e.AuthenticationError=Ed,e.InternalServerError=Md,e.PermissionDeniedError=Dd,e.UnprocessableEntityError=Ad,e.toFile=bm,e.HUMAN_PROMPT=ib,e.AI_PROMPT=ab,e})(),sb=(()=>{class e extends ob{constructor(){super(...arguments),this.completions=new my(this),this.messages=new Jy(this),this.models=new Zy(this),this.files=new hy(this),this.skills=new $y(this),this.beta=new py(this)}}return e.Completions=my,e.Messages=Jy,e.Models=Zy,e.Files=hy,e.Skills=$y,e.Beta=py,e})(),cb=`3d-agents:brain`,lb={"claude-haiku-4-5":{label:`Claude Haiku 4.5 · el más barato`,input:1,output:5},"claude-sonnet-5-5":{label:`Claude Sonnet 5.5 · más capaz`,input:2,output:10}},ub=`claude-haiku-4-5`;function db(){try{return{model:ub,maxSteps:8,...JSON.parse(localStorage.getItem(cb)||`{}`)}}catch{return{model:ub,maxSteps:8}}}function fb(e){try{localStorage.setItem(cb,JSON.stringify(e))}catch{}}function pb(e,t){let n=lb[e]||lb[`claude-haiku-4-5`];return((t.input_tokens||0)*n.input+(t.output_tokens||0)*n.output)/1e6}var mb=(e,t=6e3)=>e.length>t?`${e.slice(0,t)}\n…[recortado, ${e.length} caracteres]`:e;async function hb(e,{method:t=`GET`,url:n,headers:r={},body:i}){if(!/^https?:\/\//i.test(n||``))throw Error(`URL inválida (debe empezar con http:// o https://)`);let a=i==null||typeof i==`string`?i:JSON.stringify(i);a&&!Object.keys(r).some(e=>e.toLowerCase()===`content-type`)&&(r[`content-type`]=`application/json`);let o,s;if(e.proxyUrl){let i=await fetch(e.proxyUrl,{method:`POST`,headers:{"content-type":`application/json`,...e.proxyToken?{"x-proxy-token":e.proxyToken}:{}},body:JSON.stringify({method:t,url:n,headers:r,body:a})});if(!i.ok)throw Error(`Proxy HTTP ${i.status}: ${(await i.text()).slice(0,200)}`);({status:o,body:s}=await i.json())}else{let e;try{e=await fetch(n,{method:t,headers:r,body:[`GET`,`HEAD`].includes(t.toUpperCase())?void 0:a})}catch(e){throw Error(`${e.message}. Si es un bloqueo CORS, configura el proxy en ⚙ Cerebro.`)}o=e.status,s=await e.text()}return{status:o,body:s}}var gb={name:`http_request`,description:`Hace una petición HTTP a cualquier API pública o privada y devuelve el código de estado y el cuerpo de la respuesta. Úsala para consultar datos reales (clima, precios, CRMs, webhooks, etc.). Para POST/PUT envía body como texto JSON.`,input_schema:{type:`object`,properties:{method:{type:`string`,enum:[`GET`,`POST`,`PUT`,`PATCH`,`DELETE`]},url:{type:`string`,description:`URL completa, con parámetros de consulta si hacen falta`},headers:{type:`object`,description:`Cabeceras opcionales`,additionalProperties:{type:`string`}},body:{type:`string`,description:`Cuerpo opcional (normalmente JSON serializado)`}},required:[`method`,`url`]}},_b=e=>`delegar_${e.id}`.replace(/[^a-zA-Z0-9_-]/g,`_`).slice(0,64);function vb(e,t){return e.replace(/\{\{\s*(\w+)\s*\}\}/g,(e,n)=>{let r=t[n]??``;return JSON.stringify(String(r)).slice(1,-1)})}function yb(e,t={}){if(!e)return t;try{return JSON.parse(e)}catch{throw Error(`Las cabeceras deben ser JSON válido, p. ej. {"Authorization": "Bearer ..."}`)}}function bb({store:e,world:t,log:n,bump:r,onUsage:i}){let a=db(),o=!1,s=[],c=e=>new sb({apiKey:e,dangerouslyAllowBrowser:!0});async function l(e,t){let n=await c(e).messages.create(t);if(i?.(pb(t.model,n.usage),n.usage),n.stop_reason===`refusal`)throw Error(`El modelo rechazó la petición.`);return n}async function u({apiKey:e,model:t,system:n,messages:r,tools:i,runTool:a,maxSteps:o,onText:s}){for(let c=0;c<o;c++){let o=await l(e,{model:t,max_tokens:4096,system:n,tools:i,messages:r}),c=o.content.filter(e=>e.type===`text`).map(e=>e.text).join(`
`).trim();if(c&&s?.(c,o.stop_reason),o.stop_reason!==`tool_use`)return c||`(sin respuesta)`;r.push({role:`assistant`,content:o.content});let u=o.content.filter(e=>e.type===`tool_use`),d=await Promise.all(u.map(async e=>{try{return{type:`tool_result`,tool_use_id:e.id,content:mb(String(await a(e.name,e.input)))}}catch(t){return{type:`tool_result`,tool_use_id:e.id,content:`Error: ${t.message}`,is_error:!0}}}));r.push({role:`user`,content:d})}return`Me detuve: alcancé el máximo de pasos permitido.`}function d(r,i){let o=e.agent(r)?.name||`Tú`;return n({kind:`http`,from:o,to:`API`,text:`${i.method||`GET`} ${i.url}`}),new Promise((e,s)=>{t.sendPacket(r,`external`,{color:`#e8600c`,onArrive:async()=>{try{let s=typeof i.headers==`object`&&i.headers?{...i.headers}:{},c=await hb(a,{method:i.method,url:i.url,headers:s,body:i.body});n({kind:`http-reply`,from:`API`,to:o,text:`HTTP ${c.status} · ${c.body.slice(0,160)}`}),t.sendPacket(`external`,r,{color:`#ffffff`,size:.28}),e(`HTTP ${c.status}\n${c.body}`)}catch(e){n({kind:`error`,from:`API`,to:o,text:e.message}),t.sendPacket(`external`,r,{color:`#ff5c5c`,size:.28}),s(e)}}})})}async function f(t,n,r){let i=t.config||{},o=e.office(t.officeId)?.name||``,s=(i.system||`Eres "${t.name}", ${t.role||`un agente`} en el departamento ${o}.`)+` Responde en español, breve y concreto. Si necesitas datos reales usa http_request.`;if(t.provider===`claude`)return u({apiKey:i.apiKey||a.apiKey,model:i.model||a.model,system:s,messages:[{role:`user`,content:`${r} te pide: ${n}`}],tools:[gb],runTool:(e,n)=>d(t.id,n),maxSteps:4});if(!(i.url||t.provider===`openai`&&i.apiKey))return`[simulado por IA: el agente no tiene endpoint configurado]\n${await u({apiKey:a.apiKey,model:a.model,system:`${s} No tienes conexión real configurada: simula de forma realista lo que haría esta automatización (${t.provider}) y termina con una línea "Resultado:".`,messages:[{role:`user`,content:`${r} te pide: ${n}`}],tools:[gb],runTool:(e,n)=>d(t.id,n),maxSteps:3})}`;if(t.provider===`openai`){let e=await hb(a,{method:`POST`,url:`https://api.openai.com/v1/chat/completions`,headers:{authorization:`Bearer ${i.apiKey}`},body:{model:i.model||`gpt-4o-mini`,messages:[{role:`system`,content:s},{role:`user`,content:n}]}});try{return JSON.parse(e.body).choices[0].message.content}catch{return`HTTP ${e.status}\n${e.body}`}}let c={input:n,from:r,agent:t.name},l=yb(i.headers);i.token&&(l.authorization=i.token);let f=(i.method||`POST`).toUpperCase(),p=i.url,m;f===`GET`?p=vb(p,Object.fromEntries(Object.entries(c).map(([e,t])=>[e,encodeURIComponent(t)]))):m=i.body?vb(i.body,c):{agent:{id:t.id,name:t.name,role:t.role},from:r,text:n,sentAt:new Date().toISOString()};let h=await hb(a,{method:f,url:p,headers:l,body:m});if(h.status>=400)throw Error(`HTTP ${h.status}: ${h.body.slice(0,300)}`);return h.body||`HTTP ${h.status} (sin contenido)`}function p(i,a,o){let s=e.agent(i)?.name||`Tú`;return n({kind:`task`,from:s,to:a.name,text:o}),r(i,`sent`),new Promise((e,c)=>{t.sendPacket(i,a.id,{color:`#e8600c`,onArrive:async()=>{r(a.id,`received`),t.setWorking(a.id,!0);try{let c=await f(a,o,s);r(a.id,`sent`),n({kind:`live`,from:a.name,to:s,text:c.slice(0,600)}),t.sendPacket(a.id,i,{color:`#ffffff`,size:.28}),e(c)}catch(e){n({kind:`error`,from:a.name,to:s,text:e.message}),t.sendPacket(a.id,i,{color:`#ff5c5c`,size:.28}),c(e)}finally{t.setWorking(a.id,!1)}}})})}function m(){let t=[],n=(r,i)=>{t.push(`${`  `.repeat(i)}- Oficina "${r.name}"`);for(let n of e.agentsIn(r.id))t.push(`${`  `.repeat(i+1)}· ${n.name} (${n.provider}): ${n.role||`sin rol`}`);e.children(r.id).forEach(e=>n(e,i+1))};return n(e.rootOffice(),0),t.join(`
`)}function h(){return e.agentsIn(e.rootOffice().id)[0]||null}async function g(r){if(!a.apiKey)throw Error(`Configura tu API key de Anthropic en ⚙ Cerebro.`);if(o)throw Error(`El cerebro ya está trabajando en otra tarea.`);o=!0;let i=h(),c=i?.id||`user`,l=e.get().agents.filter(e=>e.id!==i?.id),f=new Map(l.map(e=>[_b(e),e])),g=[...l.map(t=>({name:_b(t),description:`Delegar a ${t.name} (${e.office(t.officeId)?.name}, conector ${t.provider}): ${t.role||`agente`}. Devuelve su respuesta.`,input_schema:{type:`object`,properties:{instruccion:{type:`string`,description:`Qué debe hacer, con todo el contexto necesario`}},required:[`instruccion`]}})),gb],_=`Eres ${i?.name||`el Orquestador`}, el cerebro de una organización de agentes de automatización. Tu trabajo es cumplir el objetivo del usuario delegando en los agentes adecuados (puedes llamar a varios en paralelo) y usando http_request cuando necesites datos de una API. Delegar cuesta dinero: usa solo los agentes necesarios. Cuando termines, responde al usuario en español con un resumen claro del resultado.

Organigrama:
`+m();n({kind:`task`,from:`Tú`,to:i?.name||`Cerebro`,text:r}),i&&await new Promise(e=>t.sendPacket(`user`,i.id,{color:`#ffffff`,onArrive:e})),t.setWorking(c,!0);try{let e=[...s.slice(-6),{role:`user`,content:r}],o=await u({apiKey:a.apiKey,model:a.model,system:_,messages:e,tools:g,maxSteps:a.maxSteps||8,onText:(e,t)=>t===`tool_use`&&n({kind:`brain`,from:i?.name||`Cerebro`,to:`plan`,text:e}),runTool:(e,t)=>{if(e===`http_request`)return d(c,t);let n=f.get(e);if(!n)throw Error(`Agente desconocido: ${e}`);return p(c,n,t.instruccion)}});return s.push({role:`user`,content:r},{role:`assistant`,content:o}),n({kind:`final`,from:i?.name||`Cerebro`,to:`Tú`,text:o}),i&&t.sendPacket(i.id,`user`,{color:`#ffffff`}),o}finally{t.setWorking(c,!1),o=!1}}function _(e,t){if(!a.apiKey&&!e.config?.url&&!e.config?.apiKey)throw Error(`Configura tu API key en ⚙ Cerebro o un endpoint en el agente.`);return p(`user`,e,t)}return{run:g,direct:_,isBusy:()=>o,isReady:()=>!!a.apiKey,settings:()=>a,setSettings(e){a={...a,...e},fb(a)},clearHistory:()=>s.splice(0)}}var $=e=>document.querySelector(e),xb=(e=``)=>String(e).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]),Sb=c(o()),Cb=null,wb=ud($(`#scene`),{onSelect:e=>jb(e,!0)}),Tb=_d({store:Sb,world:wb,log:kb}),Eb=0,Db=bb({store:Sb,world:wb,log:kb,bump:(e,t)=>Tb.bump(e,t),onUsage:e=>{Eb+=e,Jb()}}),Ob=$(`#feed`);function kb(e){let t=document.createElement(`li`);t.className=e.kind,e.color&&t.style.setProperty(`--c`,e.color);let n=new Date().toLocaleTimeString(`es`,{hour12:!1});if(e.kind===`info`)t.innerHTML=`<div class="meta"><span>sistema</span><span>${n}</span></div><div class="txt">${xb(e.text)}</div>`;else{let r=[`task`,`http`].includes(e.kind)?`→`:e.kind===`brain`?`·`:`↩`,i={live:` · real`,error:` · error`,brain:` · razonando`,final:` · respuesta final`,http:` · HTTP`,"http-reply":` · HTTP`}[e.kind]||``;t.innerHTML=`<div class="meta"><span><span class="who">${xb(e.from)}</span> ${r} ${xb(e.to)}${i}</span><span>${n}</span></div><div class="txt">${xb(e.text)}</div>`}for(Ob.prepend(t);Ob.children.length>80;)Ob.lastChild.remove()}function Ab(){let e=Sb.rootOffice(),t=e=>{let n=Sb.agentsIn(e.id),r=Sb.children(e.id),i=(e,t)=>Cb?.type===e&&Cb.id===t?` selected`:``;return`<div class="tree-office">
      <div class="tree-row office${i(`office`,e.id)}" data-office="${e.id}">
        <span class="dot" style="background:${e.color}"></span>${xb(e.name)}<span class="count">${n.length}</span>
      </div>
      <div class="tree-children">
        ${n.map(e=>{let t=td(e.provider);return`<div class="tree-row agent${i(`agent`,e.id)}" data-agent="${e.id}"><span class="dot" style="background:${t.color}"></span>${xb(e.name)}<small>${t.short}${e.provider!==`claude`&&nd(e)?` ●`:``}</small></div>`}).join(``)}
        ${r.map(t).join(``)}
      </div>
    </div>`};$(`#tree`).innerHTML=e?t(e):``}$(`#tree`).addEventListener(`click`,e=>{let t=e.target.closest(`.tree-row`);t&&jb(t.dataset.agent?{type:`agent`,id:t.dataset.agent}:{type:`office`,id:t.dataset.office},!0)}),$(`#legend`).innerHTML=Object.values(ed).map(e=>`<span><i style="background:${e.color}"></i>${e.short}</span>`).join(``);function jb(e,t){e&&e.type===`agent`&&!Sb.agent(e.id)&&(e=null),e&&e.type===`office`&&!Sb.office(e.id)&&(e=null),Cb=e,wb.setSelected(e?.type===`agent`?e.id:null),t&&wb.focus(e),Ab(),Mb()}function Mb(){let e=$(`#details`);if(!Cb){e.hidden=!0;return}if(e.hidden=!1,e.style.position=`relative`,Cb.type===`agent`){let t=Sb.agent(Cb.id),n=td(t.provider),r=Sb.office(t.officeId),i=Tb.stats(t.id),a=n.fields.filter(e=>t.config?.[e.key]).map(e=>`<dt>${xb(e.label)}</dt><dd>${e.type===`password`?`••••••`+xb(String(t.config[e.key]).slice(-4)):xb(String(t.config[e.key]).slice(0,80))}</dd>`).join(``),o=nd(t),s=Db.isReady()?o?`Envío real: ${t.provider===`claude`?`Claude responde con su rol y puede llamar APIs`:`se llama a su endpoint`}.`:`Sin endpoint propio: la IA simula su rol (edítalo para conectarlo de verdad).`:`Modo demo: respuesta simulada. Configura el ⚙ Cerebro para que trabaje de verdad.`;e.innerHTML=`
      <button class="icon-btn close" data-act="close">✕</button>
      <span class="pill"><i style="width:7px;height:7px;border-radius:50%;background:${n.color}"></i>${n.label}</span>
      <span class="pill light">${o?`Conectado`:`Simulado por IA`}</span>
      <h3>${xb(t.name)}</h3>
      <div class="sub">${xb(t.role||`Sin descripción`)}</div>
      <div class="stats">
        <div class="stat"><b>${i.sent}</b><span>Enviados</span></div>
        <div class="stat"><b>${i.received}</b><span>Recibidos</span></div>
      </div>
      <dl class="kv">
        <dt>Oficina</dt><dd>${xb(r?.name||`-`)}</dd>
        ${a||`<dt>Config</dt><dd>— (sin configurar)</dd>`}
      </dl>
      <textarea id="msgText" placeholder="Escribe una instrucción para ${xb(t.name)}…"></textarea>
      <div class="row">
        <button class="btn accent" data-act="send">Enviar como “Tú”</button>
        <button class="btn" data-act="edit">Editar</button>
        <button class="btn danger" data-act="delete">Eliminar</button>
      </div>
      <p class="hint">${s}</p>`}else{let t=Sb.office(Cb.id),n=Sb.agentsIn(t.id),r=Sb.office(t.parentId),i=!t.parentId;e.innerHTML=`
      <button class="icon-btn close" data-act="close">✕</button>
      <span class="pill"><i style="width:7px;height:7px;border-radius:50%;background:${t.color}"></i>${i?`Oficina principal`:`Oficina`}</span>
      <h3>${xb(t.name)}</h3>
      <div class="sub">${i?`Centro de mando`:`Depende de ${xb(r?.name||`-`)}`}</div>
      <div class="stats">
        <div class="stat"><b>${n.length}</b><span>Agentes</span></div>
        <div class="stat"><b>${Sb.children(t.id).length}</b><span>Sub-oficinas</span></div>
      </div>
      <div class="agents-mini">
        ${n.map(e=>`<button class="btn" data-agent="${e.id}"><span style="color:${td(e.provider).color}">●</span> ${xb(e.name)} <small style="color:var(--muted)">· ${td(e.provider).short}</small></button>`).join(``)||`<small style="color:var(--muted)">Sin agentes todavía</small>`}
      </div>
      <div class="row">
        <button class="btn accent" data-act="add-agent">+ Agente aquí</button>
        <button class="btn" data-act="add-sub">+ Sub-oficina</button>
        <button class="btn" data-act="edit">Editar</button>
        ${i?``:`<button class="btn danger" data-act="delete">Eliminar</button>`}
      </div>`}}$(`#details`).addEventListener(`click`,e=>{let t=e.target.closest(`[data-agent]`);if(t)return jb({type:`agent`,id:t.dataset.agent},!0);let n=e.target.closest(`[data-act]`)?.dataset.act;if(!n||!Cb)return;let{type:r,id:i}=Cb;if(n===`close`)return jb(null,!1);if(r===`agent`){let e=Sb.agent(i);if(n===`send`){let t=$(`#msgText`).value.trim()||`Dame un estado rápido de tu trabajo`;$(`#msgText`).value=``;let n=()=>Cb?.id===e.id&&Mb();if(Db.isReady())try{Db.direct(e,t).catch(()=>{}).finally(n)}catch(t){kb({kind:`error`,from:`Sistema`,to:e.name,text:t.message})}else Tb.sendTask(`user`,e.id,t).then(n)}n===`edit`&&Ub(e),n===`delete`&&confirm(`¿Eliminar el agente "${e.name}"?`)&&(Sb.removeAgent(i),jb(null,!1))}else{let e=Sb.office(i);n===`add-agent`&&Ub(null,e.id),n===`add-sub`&&Lb(null,e.id),n===`edit`&&Lb(e),n===`delete`&&confirm(`¿Eliminar "${e.name}"? Sus agentes pasan a la oficina superior.`)&&(Sb.removeOffice(i),jb(null,!1))}});var Nb=$(`#officeDialog`),Pb=$(`#officeForm`),Fb=null;function Ib(e){Pb.elements.color.value=e,$(`#swatches`).innerHTML=r.map(t=>`<button type="button" data-c="${t}" style="background:${t}" class="${t.toLowerCase()===e.toLowerCase()?`on`:``}" title="${t}"></button>`).join(``)}$(`#swatches`).addEventListener(`click`,e=>{let t=e.target.closest(`[data-c]`);t&&Ib(t.dataset.c)});function Lb(e,t){Fb=e;let{offices:n}=Sb.get(),i=new Set;if(e){let t=e=>n.filter(t=>t.parentId===e).forEach(e=>(i.add(e.id),t(e.id)));t(e.id)}$(`#officeTitle`).textContent=e?`Editar oficina`:`Nueva oficina`;let a=e&&!e.parentId;Pb.elements.parentId.innerHTML=a?`<option value="">— (es la oficina principal)</option>`:n.filter(t=>t.id!==e?.id&&!i.has(t.id)).map(e=>`<option value="${e.id}">${xb(e.name)}</option>`).join(``),Pb.elements.parentId.disabled=!!a,Pb.elements.name.value=e?.name||``,Pb.elements.parentId.value=e?.parentId||t||Sb.rootOffice().id,Ib(e?.color||r[n.length%r.length]),Nb.returnValue=``,Nb.showModal()}Nb.addEventListener(`close`,()=>{if(Nb.returnValue!==`ok`)return;let e={...Fb||{id:n(`off`)},name:Pb.elements.name.value.trim()||`Oficina`,color:Pb.elements.color.value,parentId:Fb&&!Fb.parentId?null:Pb.elements.parentId.value};Sb.upsertOffice(e),kb({kind:`info`,text:`${Fb?`Oficina actualizada`:`Nueva oficina`}: ${e.name}`}),jb({type:`office`,id:e.id},!0)});var Rb=$(`#agentDialog`),zb=$(`#agentForm`),Bb=null,Vb=`claude`;function Hb(){$(`#providerPicker`).innerHTML=Object.entries(ed).map(([e,t])=>`<button type="button" data-p="${e}" class="${e===Vb?`on`:``}" style="--c:${t.color}"><i style="background:${t.color}"></i>${t.short}</button>`).join(``);let e=Bb?.provider===Vb&&Bb.config||{};$(`#providerFields`).innerHTML=td(Vb).fields.map(t=>{let n=xb(e[t.key]??t.default??``),r=t.type===`textarea`?`<textarea name="cfg_${t.key}" rows="2" placeholder="${xb(t.placeholder)}">${n}</textarea>`:t.type===`select`?`<select name="cfg_${t.key}">${t.options.map(n=>`<option ${n===(e[t.key]??t.default)?`selected`:``}>${n}</option>`).join(``)}</select>`:`<input name="cfg_${t.key}" type="${t.type}" placeholder="${xb(t.placeholder)}" value="${n}" autocomplete="off" />`;return`<label>${xb(t.label)} ${r}</label>`}).join(``)}$(`#providerPicker`).addEventListener(`click`,e=>{let t=e.target.closest(`[data-p]`);t&&(Vb=t.dataset.p,Hb())});function Ub(e,t){Bb=e,Vb=e?.provider||`claude`,$(`#agentTitle`).textContent=e?`Editar agente`:`Nuevo agente`,zb.elements.officeId.innerHTML=Sb.get().offices.map(e=>`<option value="${e.id}">${xb(e.name)}</option>`).join(``),zb.elements.name.value=e?.name||``,zb.elements.role.value=e?.role||``,zb.elements.officeId.value=e?.officeId||t||(Cb?.type===`office`?Cb.id:Sb.rootOffice().id),Hb(),Rb.returnValue=``,Rb.showModal()}Rb.addEventListener(`close`,()=>{if(Rb.returnValue!==`ok`)return;let e={};for(let t of td(Vb).fields){let n=zb.elements[`cfg_${t.key}`]?.value.trim();n&&(e[t.key]=n)}let t={...Bb||{id:n(`ag`)},name:zb.elements.name.value.trim()||`Agente`,role:zb.elements.role.value.trim(),officeId:zb.elements.officeId.value,provider:Vb,config:e};if(Sb.upsertAgent(t),kb({kind:`info`,text:`${Bb?`Agente actualizado`:`Nuevo agente`}: ${t.name} (${td(t.provider).label})`}),jb({type:`agent`,id:t.id},!0),!Bb){let e=Sb.agentsIn(Sb.rootOffice().id)[0];e&&e.id!==t.id&&setTimeout(()=>Tb.sendTask(e.id,t.id,`Bienvenido al equipo, ${t.name} 👋`),600)}});var Wb=$(`#btnPlay`);Wb.onclick=()=>{Tb.setRunning(!Tb.isRunning()),Wb.textContent=Tb.isRunning()?`⏸ Auto`:`▶ Auto`},$(`#speed`).onchange=e=>Tb.setSpeed(Number(e.target.value)),$(`#btnCascade`).onclick=()=>{wb.focus(null),Tb.cascade()},$(`#btnReport`).onclick=()=>{wb.focus(null),Tb.report()},$(`#btnAddOffice`).onclick=()=>Lb(null,Cb?.type===`office`?Cb.id:void 0),$(`#btnAddAgent`).onclick=()=>Ub(null),$(`#btnClearFeed`).onclick=()=>Ob.innerHTML=``,$(`#btnToggleSidebar`).onclick=()=>{let e=$(`#sidebar`);window.matchMedia(`(max-width: 900px)`).matches?e.classList.toggle(`expanded`):e.classList.toggle(`collapsed`)};var Gb=()=>$(`.menu`).removeAttribute(`open`);$(`#btnOverview`).onclick=()=>(Gb(),jb(null,!0),wb.setAutoRotate(!0)),$(`#btnExport`).onclick=()=>{Gb();let e=new Blob([JSON.stringify(Sb.get(),null,2)],{type:`application/json`}),t=URL.createObjectURL(e);Object.assign(document.createElement(`a`),{href:t,download:`3d-agents.json`}).click(),URL.revokeObjectURL(t)},$(`#btnImport`).onclick=()=>(Gb(),$(`#importFile`).click()),$(`#importFile`).onchange=async e=>{let t=e.target.files[0];if(t){try{let e=JSON.parse(await t.text());if(!Array.isArray(e.offices)||!Array.isArray(e.agents))throw Error(`Formato inválido`);Sb.set({theme:`naranja`,...e}),jb(null,!0),kb({kind:`info`,text:`Importado: ${e.offices.length} oficinas, ${e.agents.length} agentes`})}catch(e){alert(`No se pudo importar: ${e.message}`)}e.target.value=``}},$(`#btnReset`).onclick=()=>{Gb(),confirm(`¿Restablecer la organización de ejemplo? Se perderán tus cambios.`)&&(Sb.reset(),jb(null,!0))};var Kb=$(`#cmdForm`),qb=$(`#cmdInput`);function Jb(){let e=Db.settings(),t=Db.isReady();$(`#brainStatus`).innerHTML=t?`<span class="dot on"></span>${xb((lb[e.model]?.label||e.model).split(` · `)[0])} · $${Eb.toFixed(4)}`:`<span class="dot"></span>Sin configurar`,qb.placeholder=t?`Dale un objetivo a tu equipo… ej. "Investiga el clima en CDMX y que Marketing escriba un post"`:`Configura el ⚙ Cerebro para dar órdenes reales a tu equipo`}Kb.addEventListener(`submit`,async e=>{e.preventDefault();let t=qb.value.trim();if(t){if(!Db.isReady())return Zb();if(Db.isBusy())return kb({kind:`info`,text:`El cerebro sigue trabajando, espera a que termine.`});qb.value=``,Tb.setRunning(!1),Tb.cancel(),Wb.textContent=`▶ Auto`,Kb.classList.add(`busy`),wb.focus(null);try{await Db.run(t)}catch(e){kb({kind:`error`,from:`Cerebro`,to:`Tú`,text:e.message})}finally{Kb.classList.remove(`busy`),Mb()}}});var Yb=$(`#brainDialog`),Xb=$(`#brainForm`);Xb.elements.model.innerHTML=Object.entries(lb).map(([e,t])=>`<option value="${e}">${xb(t.label)} ($${t.input}/$${t.output} por millón de tokens)</option>`).join(``);function Zb(){let e=Db.settings();for(let t of[`apiKey`,`model`,`proxyUrl`,`proxyToken`,`maxSteps`])Xb.elements[t].value=e[t]??``;Yb.returnValue=``,Yb.showModal()}Yb.addEventListener(`close`,()=>{if(Yb.returnValue!==`ok`)return;let e=Xb.elements;Db.setSettings({apiKey:e.apiKey.value.trim(),model:e.model.value,proxyUrl:e.proxyUrl.value.trim(),proxyToken:e.proxyToken.value.trim(),maxSteps:Math.min(20,Math.max(1,Number(e.maxSteps.value)||8))}),Jb(),Mb(),Db.isReady()&&(Tb.setRunning(!1),Tb.cancel(),Wb.textContent=`▶ Auto`,kb({kind:`info`,text:`Cerebro configurado ✔ Escribe un objetivo en la barra inferior.`}))}),$(`#btnBrain`).onclick=Zb,$(`#brainStatus`).onclick=Zb,Jb(),Sb.subscribe(e=>{wb.rebuild(e),Ab(),Mb()}),wb.rebuild(Sb.get()),Ab(),Db.isReady()?(Tb.setRunning(!1),Wb.textContent=`▶ Auto`,kb({kind:`info`,text:`Cerebro listo 🧠 Escribe un objetivo abajo y mira cómo tu equipo lo resuelve.`})):(kb({kind:`info`,text:`Modo demo 👋 Configura el ⚙ Cerebro (API key de Anthropic) para que los agentes trabajen de verdad.`}),setTimeout(()=>Tb.cascade(),1500));var Qb=performance.now();(function e(t){Tb.tick(Math.min((t-Qb)/1e3,.1)),Qb=t,requestAnimationFrame(e)})(Qb);export{Tg as n,Y as r,wg as t};