(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Ti(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const re={},hn=[],Ze=()=>{},ku=()=>!1,rs=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Ri=t=>t.startsWith("onUpdate:"),_e=Object.assign,Ai=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Nu=Object.prototype.hasOwnProperty,X=(t,e)=>Nu.call(t,e),j=Array.isArray,pn=t=>ss(t)==="[object Map]",qa=t=>ss(t)==="[object Set]",V=t=>typeof t=="function",le=t=>typeof t=="string",Mt=t=>typeof t=="symbol",oe=t=>t!==null&&typeof t=="object",Ka=t=>(oe(t)||V(t))&&V(t.then)&&V(t.catch),za=Object.prototype.toString,ss=t=>za.call(t),xu=t=>ss(t).slice(8,-1),Ga=t=>ss(t)==="[object Object]",Ci=t=>le(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Vn=Ti(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),is=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Du=/-(\w)/g,Me=is(t=>t.replace(Du,(e,n)=>n?n.toUpperCase():"")),Lu=/\B([A-Z])/g,Ut=is(t=>t.replace(Lu,"-$1").toLowerCase()),os=is(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ts=is(t=>t?`on${os(t)}`:""),Nt=(t,e)=>!Object.is(t,e),Or=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Ja=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Js=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let lo;const as=()=>lo||(lo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Pi(t){if(j(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=le(r)?Bu(r):Pi(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(le(t)||oe(t))return t}const Mu=/;(?![^(]*\))/g,Uu=/:([^]+)/,Fu=/\/\*[^]*?\*\//g;function Bu(t){const e={};return t.replace(Fu,"").split(Mu).forEach(n=>{if(n){const r=n.split(Uu);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Oi(t){let e="";if(le(t))e=t;else if(j(t))for(let n=0;n<t.length;n++){const r=Oi(t[n]);r&&(e+=r+" ")}else if(oe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const $u="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Hu=Ti($u);function Ya(t){return!!t||t===""}const Xa=t=>!!(t&&t.__v_isRef===!0),dt=t=>le(t)?t:t==null?"":j(t)||oe(t)&&(t.toString===za||!V(t.toString))?Xa(t)?dt(t.value):JSON.stringify(t,Qa,2):String(t),Qa=(t,e)=>Xa(e)?Qa(t,e.value):pn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Rs(r,i)+" =>"]=s,n),{})}:qa(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Rs(n))}:Mt(e)?Rs(e):oe(e)&&!j(e)&&!Ga(e)?String(e):e,Rs=(t,e="")=>{var n;return Mt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Oe;class ju{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Oe,!e&&Oe&&(this.index=(Oe.scopes||(Oe.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Oe;try{return Oe=this,e()}finally{Oe=n}}}on(){Oe=this}off(){Oe=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Vu(){return Oe}let ie;const As=new WeakSet;class Za{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Oe&&Oe.active&&Oe.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,As.has(this)&&(As.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||tc(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,uo(this),nc(this);const e=ie,n=Be;ie=this,Be=!0;try{return this.fn()}finally{rc(this),ie=e,Be=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)xi(e);this.deps=this.depsTail=void 0,uo(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?As.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ys(this)&&this.run()}get dirty(){return Ys(this)}}let ec=0,Wn,qn;function tc(t,e=!1){if(t.flags|=8,e){t.next=qn,qn=t;return}t.next=Wn,Wn=t}function ki(){ec++}function Ni(){if(--ec>0)return;if(qn){let e=qn;for(qn=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Wn;){let e=Wn;for(Wn=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function nc(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function rc(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),xi(r),Wu(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Ys(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(sc(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function sc(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Zn))return;t.globalVersion=Zn;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Ys(t)){t.flags&=-3;return}const n=ie,r=Be;ie=t,Be=!0;try{nc(t);const s=t.fn(t._value);(e.version===0||Nt(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{ie=n,Be=r,rc(t),t.flags&=-3}}function xi(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)xi(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Wu(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Be=!0;const ic=[];function Ft(){ic.push(Be),Be=!1}function Bt(){const t=ic.pop();Be=t===void 0?!0:t}function uo(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ie;ie=void 0;try{e()}finally{ie=n}}}let Zn=0;class qu{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Di{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ie||!Be||ie===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ie)n=this.activeLink=new qu(ie,this),ie.deps?(n.prevDep=ie.depsTail,ie.depsTail.nextDep=n,ie.depsTail=n):ie.deps=ie.depsTail=n,oc(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=ie.depsTail,n.nextDep=void 0,ie.depsTail.nextDep=n,ie.depsTail=n,ie.deps===n&&(ie.deps=r)}return n}trigger(e){this.version++,Zn++,this.notify(e)}notify(e){ki();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Ni()}}}function oc(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)oc(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Xs=new WeakMap,Yt=Symbol(""),Qs=Symbol(""),er=Symbol("");function he(t,e,n){if(Be&&ie){let r=Xs.get(t);r||Xs.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Di),s.map=r,s.key=n),s.track()}}function ut(t,e,n,r,s,i){const o=Xs.get(t);if(!o){Zn++;return}const a=c=>{c&&c.trigger()};if(ki(),e==="clear")o.forEach(a);else{const c=j(t),l=c&&Ci(n);if(c&&n==="length"){const u=Number(r);o.forEach((f,p)=>{(p==="length"||p===er||!Mt(p)&&p>=u)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),l&&a(o.get(er)),e){case"add":c?l&&a(o.get("length")):(a(o.get(Yt)),pn(t)&&a(o.get(Qs)));break;case"delete":c||(a(o.get(Yt)),pn(t)&&a(o.get(Qs)));break;case"set":pn(t)&&a(o.get(Yt));break}}Ni()}function cn(t){const e=Y(t);return e===t?e:(he(e,"iterate",er),$e(t)?e:e.map(ve))}function Li(t){return he(t=Y(t),"iterate",er),t}const Ku={__proto__:null,[Symbol.iterator](){return Cs(this,Symbol.iterator,ve)},concat(...t){return cn(this).concat(...t.map(e=>j(e)?cn(e):e))},entries(){return Cs(this,"entries",t=>(t[1]=ve(t[1]),t))},every(t,e){return ot(this,"every",t,e,void 0,arguments)},filter(t,e){return ot(this,"filter",t,e,n=>n.map(ve),arguments)},find(t,e){return ot(this,"find",t,e,ve,arguments)},findIndex(t,e){return ot(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return ot(this,"findLast",t,e,ve,arguments)},findLastIndex(t,e){return ot(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return ot(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ps(this,"includes",t)},indexOf(...t){return Ps(this,"indexOf",t)},join(t){return cn(this).join(t)},lastIndexOf(...t){return Ps(this,"lastIndexOf",t)},map(t,e){return ot(this,"map",t,e,void 0,arguments)},pop(){return Mn(this,"pop")},push(...t){return Mn(this,"push",t)},reduce(t,...e){return fo(this,"reduce",t,e)},reduceRight(t,...e){return fo(this,"reduceRight",t,e)},shift(){return Mn(this,"shift")},some(t,e){return ot(this,"some",t,e,void 0,arguments)},splice(...t){return Mn(this,"splice",t)},toReversed(){return cn(this).toReversed()},toSorted(t){return cn(this).toSorted(t)},toSpliced(...t){return cn(this).toSpliced(...t)},unshift(...t){return Mn(this,"unshift",t)},values(){return Cs(this,"values",ve)}};function Cs(t,e,n){const r=Li(t),s=r[e]();return r!==t&&!$e(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const zu=Array.prototype;function ot(t,e,n,r,s,i){const o=Li(t),a=o!==t&&!$e(t),c=o[e];if(c!==zu[e]){const f=c.apply(t,i);return a?ve(f):f}let l=n;o!==t&&(a?l=function(f,p){return n.call(this,ve(f),p,t)}:n.length>2&&(l=function(f,p){return n.call(this,f,p,t)}));const u=c.call(o,l,r);return a&&s?s(u):u}function fo(t,e,n,r){const s=Li(t);let i=n;return s!==t&&($e(t)?n.length>3&&(i=function(o,a,c){return n.call(this,o,a,c,t)}):i=function(o,a,c){return n.call(this,o,ve(a),c,t)}),s[e](i,...r)}function Ps(t,e,n){const r=Y(t);he(r,"iterate",er);const s=r[e](...n);return(s===-1||s===!1)&&Fi(n[0])?(n[0]=Y(n[0]),r[e](...n)):s}function Mn(t,e,n=[]){Ft(),ki();const r=Y(t)[e].apply(t,n);return Ni(),Bt(),r}const Gu=Ti("__proto__,__v_isRef,__isVue"),ac=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Mt));function Ju(t){Mt(t)||(t=String(t));const e=Y(this);return he(e,"has",t),e.hasOwnProperty(t)}class cc{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?of:dc:i?fc:uc).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=j(e);if(!s){let c;if(o&&(c=Ku[n]))return c;if(n==="hasOwnProperty")return Ju}const a=Reflect.get(e,n,ge(e)?e:r);return(Mt(n)?ac.has(n):Gu(n))||(s||he(e,"get",n),i)?a:ge(a)?o&&Ci(n)?a:a.value:oe(a)?s?pc(a):cs(a):a}}class lc extends cc{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=Qt(i);if(!$e(r)&&!Qt(r)&&(i=Y(i),r=Y(r)),!j(e)&&ge(i)&&!ge(r))return c?!1:(i.value=r,!0)}const o=j(e)&&Ci(n)?Number(n)<e.length:X(e,n),a=Reflect.set(e,n,r,ge(e)?e:s);return e===Y(s)&&(o?Nt(r,i)&&ut(e,"set",n,r):ut(e,"add",n,r)),a}deleteProperty(e,n){const r=X(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&ut(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Mt(n)||!ac.has(n))&&he(e,"has",n),r}ownKeys(e){return he(e,"iterate",j(e)?"length":Yt),Reflect.ownKeys(e)}}class Yu extends cc{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Xu=new lc,Qu=new Yu,Zu=new lc(!0);const Zs=t=>t,Rr=t=>Reflect.getPrototypeOf(t);function ef(t,e,n){return function(...r){const s=this.__v_raw,i=Y(s),o=pn(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?Zs:e?ei:ve;return!e&&he(i,"iterate",c?Qs:Yt),{next(){const{value:f,done:p}=l.next();return p?{value:f,done:p}:{value:a?[u(f[0]),u(f[1])]:u(f),done:p}},[Symbol.iterator](){return this}}}}function Ar(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function tf(t,e){const n={get(s){const i=this.__v_raw,o=Y(i),a=Y(s);t||(Nt(s,a)&&he(o,"get",s),he(o,"get",a));const{has:c}=Rr(o),l=e?Zs:t?ei:ve;if(c.call(o,s))return l(i.get(s));if(c.call(o,a))return l(i.get(a));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&he(Y(s),"iterate",Yt),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Y(i),a=Y(s);return t||(Nt(s,a)&&he(o,"has",s),he(o,"has",a)),s===a?i.has(s):i.has(s)||i.has(a)},forEach(s,i){const o=this,a=o.__v_raw,c=Y(a),l=e?Zs:t?ei:ve;return!t&&he(c,"iterate",Yt),a.forEach((u,f)=>s.call(i,l(u),l(f),o))}};return _e(n,t?{add:Ar("add"),set:Ar("set"),delete:Ar("delete"),clear:Ar("clear")}:{add(s){!e&&!$e(s)&&!Qt(s)&&(s=Y(s));const i=Y(this);return Rr(i).has.call(i,s)||(i.add(s),ut(i,"add",s,s)),this},set(s,i){!e&&!$e(i)&&!Qt(i)&&(i=Y(i));const o=Y(this),{has:a,get:c}=Rr(o);let l=a.call(o,s);l||(s=Y(s),l=a.call(o,s));const u=c.call(o,s);return o.set(s,i),l?Nt(i,u)&&ut(o,"set",s,i):ut(o,"add",s,i),this},delete(s){const i=Y(this),{has:o,get:a}=Rr(i);let c=o.call(i,s);c||(s=Y(s),c=o.call(i,s)),a&&a.call(i,s);const l=i.delete(s);return c&&ut(i,"delete",s,void 0),l},clear(){const s=Y(this),i=s.size!==0,o=s.clear();return i&&ut(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=ef(s,t,e)}),n}function Mi(t,e){const n=tf(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(X(n,s)&&s in r?n:r,s,i)}const nf={get:Mi(!1,!1)},rf={get:Mi(!1,!0)},sf={get:Mi(!0,!1)};const uc=new WeakMap,fc=new WeakMap,dc=new WeakMap,of=new WeakMap;function af(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function cf(t){return t.__v_skip||!Object.isExtensible(t)?0:af(xu(t))}function cs(t){return Qt(t)?t:Ui(t,!1,Xu,nf,uc)}function hc(t){return Ui(t,!1,Zu,rf,fc)}function pc(t){return Ui(t,!0,Qu,sf,dc)}function Ui(t,e,n,r,s){if(!oe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=cf(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Kn(t){return Qt(t)?Kn(t.__v_raw):!!(t&&t.__v_isReactive)}function Qt(t){return!!(t&&t.__v_isReadonly)}function $e(t){return!!(t&&t.__v_isShallow)}function Fi(t){return t?!!t.__v_raw:!1}function Y(t){const e=t&&t.__v_raw;return e?Y(e):t}function lf(t){return!X(t,"__v_skip")&&Object.isExtensible(t)&&Ja(t,"__v_skip",!0),t}const ve=t=>oe(t)?cs(t):t,ei=t=>oe(t)?pc(t):t;function ge(t){return t?t.__v_isRef===!0:!1}function et(t){return mc(t,!1)}function uf(t){return mc(t,!0)}function mc(t,e){return ge(t)?t:new ff(t,e)}class ff{constructor(e,n){this.dep=new Di,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Y(e),this._value=n?e:ve(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||$e(e)||Qt(e);e=r?e:Y(e),Nt(e,n)&&(this._rawValue=e,this._value=r?e:ve(e),this.dep.trigger())}}function mn(t){return ge(t)?t.value:t}const df={get:(t,e,n)=>e==="__v_raw"?t:mn(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ge(s)&&!ge(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function gc(t){return Kn(t)?t:new Proxy(t,df)}class hf{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Di(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Zn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&ie!==this)return tc(this,!0),!0}get value(){const e=this.dep.track();return sc(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function pf(t,e,n=!1){let r,s;return V(t)?r=t:(r=t.get,s=t.set),new hf(r,s,n)}const Cr={},jr=new WeakMap;let zt;function mf(t,e=!1,n=zt){if(n){let r=jr.get(n);r||jr.set(n,r=[]),r.push(t)}}function gf(t,e,n=re){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:c}=n,l=x=>s?x:$e(x)||s===!1||s===0?ft(x,1):ft(x);let u,f,p,m,y=!1,E=!1;if(ge(t)?(f=()=>t.value,y=$e(t)):Kn(t)?(f=()=>l(t),y=!0):j(t)?(E=!0,y=t.some(x=>Kn(x)||$e(x)),f=()=>t.map(x=>{if(ge(x))return x.value;if(Kn(x))return l(x);if(V(x))return c?c(x,2):x()})):V(t)?e?f=c?()=>c(t,2):t:f=()=>{if(p){Ft();try{p()}finally{Bt()}}const x=zt;zt=u;try{return c?c(t,3,[m]):t(m)}finally{zt=x}}:f=Ze,e&&s){const x=f,$=s===!0?1/0:s;f=()=>ft(x(),$)}const I=Vu(),P=()=>{u.stop(),I&&I.active&&Ai(I.effects,u)};if(i&&e){const x=e;e=(...$)=>{x(...$),P()}}let A=E?new Array(t.length).fill(Cr):Cr;const O=x=>{if(!(!(u.flags&1)||!u.dirty&&!x))if(e){const $=u.run();if(s||y||(E?$.some((z,q)=>Nt(z,A[q])):Nt($,A))){p&&p();const z=zt;zt=u;try{const q=[$,A===Cr?void 0:E&&A[0]===Cr?[]:A,m];c?c(e,3,q):e(...q),A=$}finally{zt=z}}}else u.run()};return a&&a(O),u=new Za(f),u.scheduler=o?()=>o(O,!1):O,m=x=>mf(x,!1,u),p=u.onStop=()=>{const x=jr.get(u);if(x){if(c)c(x,4);else for(const $ of x)$();jr.delete(u)}},e?r?O(!0):A=u.run():o?o(O.bind(null,!0),!0):u.run(),P.pause=u.pause.bind(u),P.resume=u.resume.bind(u),P.stop=P,P}function ft(t,e=1/0,n){if(e<=0||!oe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,ge(t))ft(t.value,e,n);else if(j(t))for(let r=0;r<t.length;r++)ft(t[r],e,n);else if(qa(t)||pn(t))t.forEach(r=>{ft(r,e,n)});else if(Ga(t)){for(const r in t)ft(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&ft(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function pr(t,e,n,r){try{return r?t(...r):t()}catch(s){ls(s,e,n)}}function st(t,e,n,r){if(V(t)){const s=pr(t,e,n,r);return s&&Ka(s)&&s.catch(i=>{ls(i,e,n)}),s}if(j(t)){const s=[];for(let i=0;i<t.length;i++)s.push(st(t[i],e,n,r));return s}}function ls(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||re;if(e){let a=e.parent;const c=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,c,l)===!1)return}a=a.parent}if(i){Ft(),pr(i,null,10,[t,c,l]),Bt();return}}_f(t,n,s,r,o)}function _f(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const we=[];let Xe=-1;const gn=[];let Tt=null,ln=0;const _c=Promise.resolve();let Vr=null;function yc(t){const e=Vr||_c;return t?e.then(this?t.bind(this):t):e}function yf(t){let e=Xe+1,n=we.length;for(;e<n;){const r=e+n>>>1,s=we[r],i=tr(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Bi(t){if(!(t.flags&1)){const e=tr(t),n=we[we.length-1];!n||!(t.flags&2)&&e>=tr(n)?we.push(t):we.splice(yf(e),0,t),t.flags|=1,bc()}}function bc(){Vr||(Vr=_c.then(wc))}function bf(t){j(t)?gn.push(...t):Tt&&t.id===-1?Tt.splice(ln+1,0,t):t.flags&1||(gn.push(t),t.flags|=1),bc()}function ho(t,e,n=Xe+1){for(;n<we.length;n++){const r=we[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;we.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function vc(t){if(gn.length){const e=[...new Set(gn)].sort((n,r)=>tr(n)-tr(r));if(gn.length=0,Tt){Tt.push(...e);return}for(Tt=e,ln=0;ln<Tt.length;ln++){const n=Tt[ln];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Tt=null,ln=0}}const tr=t=>t.id==null?t.flags&2?-1:1/0:t.id;function wc(t){try{for(Xe=0;Xe<we.length;Xe++){const e=we[Xe];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),pr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Xe<we.length;Xe++){const e=we[Xe];e&&(e.flags&=-2)}Xe=-1,we.length=0,vc(),Vr=null,(we.length||gn.length)&&wc()}}let ke=null,Ec=null;function Wr(t){const e=ke;return ke=t,Ec=t&&t.type.__scopeId||null,e}function _n(t,e=ke,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&So(-1);const i=Wr(e);let o;try{o=t(...s)}finally{Wr(i),r._d&&So(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function nr(t,e){if(ke===null)return t;const n=hs(ke),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,c=re]=e[s];i&&(V(i)&&(i={mounted:i,updated:i}),i.deep&&ft(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function qt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Ft(),st(c,n,8,[t.el,a,t,e]),Bt())}}const vf=Symbol("_vte"),wf=t=>t.__isTeleport;function $i(t,e){t.shapeFlag&6&&t.component?(t.transition=e,$i(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Sc(t,e){return V(t)?_e({name:t.name},e,{setup:t}):t}function Ic(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function qr(t,e,n,r,s=!1){if(j(t)){t.forEach((y,E)=>qr(y,e&&(j(e)?e[E]:e),n,r,s));return}if(zn(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&qr(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?hs(r.component):r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===re?a.refs={}:a.refs,f=a.setupState,p=Y(f),m=f===re?()=>!1:y=>X(p,y);if(l!=null&&l!==c&&(le(l)?(u[l]=null,m(l)&&(f[l]=null)):ge(l)&&(l.value=null)),V(c))pr(c,a,12,[o,u]);else{const y=le(c),E=ge(c);if(y||E){const I=()=>{if(t.f){const P=y?m(c)?f[c]:u[c]:c.value;s?j(P)&&Ai(P,i):j(P)?P.includes(i)||P.push(i):y?(u[c]=[i],m(c)&&(f[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else y?(u[c]=o,m(c)&&(f[c]=o)):E&&(c.value=o,t.k&&(u[t.k]=o))};o?(I.id=-1,Pe(I,n)):I()}}}as().requestIdleCallback;as().cancelIdleCallback;const zn=t=>!!t.type.__asyncLoader,Tc=t=>t.type.__isKeepAlive;function Ef(t,e){Rc(t,"a",e)}function Sf(t,e){Rc(t,"da",e)}function Rc(t,e,n=pe){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(us(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Tc(s.parent.vnode)&&If(r,e,n,s),s=s.parent}}function If(t,e,n,r){const s=us(e,t,r,!0);Ac(()=>{Ai(r[e],s)},n)}function us(t,e,n=pe,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Ft();const a=mr(n),c=st(e,n,t,o);return a(),Bt(),c});return r?s.unshift(i):s.push(i),i}}const bt=t=>(e,n=pe)=>{(!sr||t==="sp")&&us(t,(...r)=>e(...r),n)},Tf=bt("bm"),Hi=bt("m"),Rf=bt("bu"),Af=bt("u"),Cf=bt("bum"),Ac=bt("um"),Pf=bt("sp"),Of=bt("rtg"),kf=bt("rtc");function Nf(t,e=pe){us("ec",t,e)}const xf="components";function Sn(t,e){return Lf(xf,t,!0,e)||t}const Df=Symbol.for("v-ndc");function Lf(t,e,n=!0,r=!1){const s=ke||pe;if(s){const i=s.type;{const a=wd(i,!1);if(a&&(a===e||a===Me(e)||a===os(Me(e))))return i}const o=po(s[t]||i[t],e)||po(s.appContext[t],e);return!o&&r?i:o}}function po(t,e){return t&&(t[e]||t[Me(e)]||t[os(Me(e))])}const ti=t=>t?Gc(t)?hs(t):ti(t.parent):null,Gn=_e(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ti(t.parent),$root:t=>ti(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Pc(t),$forceUpdate:t=>t.f||(t.f=()=>{Bi(t.update)}),$nextTick:t=>t.n||(t.n=yc.bind(t.proxy)),$watch:t=>nd.bind(t)}),Os=(t,e)=>t!==re&&!t.__isScriptSetup&&X(t,e),Mf={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Os(r,e))return o[e]=1,r[e];if(s!==re&&X(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&X(l,e))return o[e]=3,i[e];if(n!==re&&X(n,e))return o[e]=4,n[e];ni&&(o[e]=0)}}const u=Gn[e];let f,p;if(u)return e==="$attrs"&&he(t.attrs,"get",""),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==re&&X(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,X(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Os(s,e)?(s[e]=n,!0):r!==re&&X(r,e)?(r[e]=n,!0):X(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==re&&X(t,o)||Os(e,o)||(a=i[0])&&X(a,o)||X(r,o)||X(Gn,o)||X(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:X(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function mo(t){return j(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let ni=!0;function Uf(t){const e=Pc(t),n=t.proxy,r=t.ctx;ni=!1,e.beforeCreate&&go(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:p,beforeUpdate:m,updated:y,activated:E,deactivated:I,beforeDestroy:P,beforeUnmount:A,destroyed:O,unmounted:x,render:$,renderTracked:z,renderTriggered:q,errorCaptured:fe,serverPrefetch:ye,expose:De,inheritAttrs:wt,components:Wt,directives:We,filters:Dn}=e;if(l&&Ff(l,r,null),o)for(const ee in o){const G=o[ee];V(G)&&(r[ee]=G.bind(n))}if(s){const ee=s.call(n,n);oe(ee)&&(t.data=cs(ee))}if(ni=!0,i)for(const ee in i){const G=i[ee],it=V(G)?G.bind(n,n):V(G.get)?G.get.bind(n,n):Ze,Et=!V(G)&&V(G.set)?G.set.bind(n):Ze,qe=Ue({get:it,set:Et});Object.defineProperty(r,ee,{enumerable:!0,configurable:!0,get:()=>qe.value,set:Se=>qe.value=Se})}if(a)for(const ee in a)Cc(a[ee],r,n,ee);if(c){const ee=V(c)?c.call(n):c;Reflect.ownKeys(ee).forEach(G=>{kr(G,ee[G])})}u&&go(u,t,"c");function ue(ee,G){j(G)?G.forEach(it=>ee(it.bind(n))):G&&ee(G.bind(n))}if(ue(Tf,f),ue(Hi,p),ue(Rf,m),ue(Af,y),ue(Ef,E),ue(Sf,I),ue(Nf,fe),ue(kf,z),ue(Of,q),ue(Cf,A),ue(Ac,x),ue(Pf,ye),j(De))if(De.length){const ee=t.exposed||(t.exposed={});De.forEach(G=>{Object.defineProperty(ee,G,{get:()=>n[G],set:it=>n[G]=it})})}else t.exposed||(t.exposed={});$&&t.render===Ze&&(t.render=$),wt!=null&&(t.inheritAttrs=wt),Wt&&(t.components=Wt),We&&(t.directives=We),ye&&Ic(t)}function Ff(t,e,n=Ze){j(t)&&(t=ri(t));for(const r in t){const s=t[r];let i;oe(s)?"default"in s?i=tt(s.from||r,s.default,!0):i=tt(s.from||r):i=tt(s),ge(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function go(t,e,n){st(j(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Cc(t,e,n,r){let s=r.includes(".")?Vc(n,r):()=>n[r];if(le(t)){const i=e[t];V(i)&&Nr(s,i)}else if(V(t))Nr(s,t.bind(n));else if(oe(t))if(j(t))t.forEach(i=>Cc(i,e,n,r));else{const i=V(t.handler)?t.handler.bind(n):e[t.handler];V(i)&&Nr(s,i,t)}}function Pc(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>Kr(c,l,o,!0)),Kr(c,e,o)),oe(e)&&i.set(e,c),c}function Kr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Kr(t,i,n,!0),s&&s.forEach(o=>Kr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Bf[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Bf={data:_o,props:yo,emits:yo,methods:$n,computed:$n,beforeCreate:be,created:be,beforeMount:be,mounted:be,beforeUpdate:be,updated:be,beforeDestroy:be,beforeUnmount:be,destroyed:be,unmounted:be,activated:be,deactivated:be,errorCaptured:be,serverPrefetch:be,components:$n,directives:$n,watch:Hf,provide:_o,inject:$f};function _o(t,e){return e?t?function(){return _e(V(t)?t.call(this,this):t,V(e)?e.call(this,this):e)}:e:t}function $f(t,e){return $n(ri(t),ri(e))}function ri(t){if(j(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function be(t,e){return t?[...new Set([].concat(t,e))]:e}function $n(t,e){return t?_e(Object.create(null),t,e):e}function yo(t,e){return t?j(t)&&j(e)?[...new Set([...t,...e])]:_e(Object.create(null),mo(t),mo(e??{})):e}function Hf(t,e){if(!t)return e;if(!e)return t;const n=_e(Object.create(null),t);for(const r in e)n[r]=be(t[r],e[r]);return n}function Oc(){return{app:null,config:{isNativeTag:ku,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let jf=0;function Vf(t,e){return function(r,s=null){V(r)||(r=_e({},r)),s!=null&&!oe(s)&&(s=null);const i=Oc(),o=new WeakSet,a=[];let c=!1;const l=i.app={_uid:jf++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Sd,get config(){return i.config},set config(u){},use(u,...f){return o.has(u)||(u&&V(u.install)?(o.add(u),u.install(l,...f)):V(u)&&(o.add(u),u(l,...f))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,f){return f?(i.components[u]=f,l):i.components[u]},directive(u,f){return f?(i.directives[u]=f,l):i.directives[u]},mount(u,f,p){if(!c){const m=l._ceVNode||ce(r,s);return m.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),t(m,u,p),c=!0,l._container=u,u.__vue_app__=l,hs(m.component)}},onUnmount(u){a.push(u)},unmount(){c&&(st(a,l._instance,16),t(null,l._container),delete l._container.__vue_app__)},provide(u,f){return i.provides[u]=f,l},runWithContext(u){const f=yn;yn=l;try{return u()}finally{yn=f}}};return l}}let yn=null;function kr(t,e){if(pe){let n=pe.provides;const r=pe.parent&&pe.parent.provides;r===n&&(n=pe.provides=Object.create(r)),n[t]=e}}function tt(t,e,n=!1){const r=pe||ke;if(r||yn){const s=yn?yn._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&V(e)?e.call(r&&r.proxy):e}}const kc={},Nc=()=>Object.create(kc),xc=t=>Object.getPrototypeOf(t)===kc;function Wf(t,e,n,r=!1){const s={},i=Nc();t.propsDefaults=Object.create(null),Dc(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:hc(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function qf(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=Y(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let p=u[f];if(fs(t.emitsOptions,p))continue;const m=e[p];if(c)if(X(i,p))m!==i[p]&&(i[p]=m,l=!0);else{const y=Me(p);s[y]=si(c,a,y,m,t,!1)}else m!==i[p]&&(i[p]=m,l=!0)}}}else{Dc(t,e,s,i)&&(l=!0);let u;for(const f in a)(!e||!X(e,f)&&((u=Ut(f))===f||!X(e,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=si(c,a,f,void 0,t,!0)):delete s[f]);if(i!==a)for(const f in i)(!e||!X(e,f))&&(delete i[f],l=!0)}l&&ut(t.attrs,"set","")}function Dc(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Vn(c))continue;const l=e[c];let u;s&&X(s,u=Me(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:fs(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=Y(n),l=a||re;for(let u=0;u<i.length;u++){const f=i[u];n[f]=si(s,c,f,l[f],t,!X(l,f))}}return o}function si(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=X(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&V(c)){const{propsDefaults:l}=s;if(n in l)r=l[n];else{const u=mr(s);r=l[n]=c.call(null,e),u()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Ut(n))&&(r=!0))}return r}const Kf=new WeakMap;function Lc(t,e,n=!1){const r=n?Kf:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!V(t)){const u=f=>{c=!0;const[p,m]=Lc(f,e,!0);_e(o,p),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return oe(t)&&r.set(t,hn),hn;if(j(i))for(let u=0;u<i.length;u++){const f=Me(i[u]);bo(f)&&(o[f]=re)}else if(i)for(const u in i){const f=Me(u);if(bo(f)){const p=i[u],m=o[f]=j(p)||V(p)?{type:p}:_e({},p),y=m.type;let E=!1,I=!0;if(j(y))for(let P=0;P<y.length;++P){const A=y[P],O=V(A)&&A.name;if(O==="Boolean"){E=!0;break}else O==="String"&&(I=!1)}else E=V(y)&&y.name==="Boolean";m[0]=E,m[1]=I,(E||X(m,"default"))&&a.push(f)}}const l=[o,a];return oe(t)&&r.set(t,l),l}function bo(t){return t[0]!=="$"&&!Vn(t)}const Mc=t=>t[0]==="_"||t==="$stable",ji=t=>j(t)?t.map(Qe):[Qe(t)],zf=(t,e,n)=>{if(e._n)return e;const r=_n((...s)=>ji(e(...s)),n);return r._c=!1,r},Uc=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Mc(s))continue;const i=t[s];if(V(i))e[s]=zf(s,i,r);else if(i!=null){const o=ji(i);e[s]=()=>o}}},Fc=(t,e)=>{const n=ji(e);t.slots.default=()=>n},Bc=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},Gf=(t,e,n)=>{const r=t.slots=Nc();if(t.vnode.shapeFlag&32){const s=e._;s?(Bc(r,e,n),n&&Ja(r,"_",s,!0)):Uc(e,r)}else e&&Fc(t,e)},Jf=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=re;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:Bc(s,e,n):(i=!e.$stable,Uc(e,s)),o=e}else e&&(Fc(t,e),o={default:1});if(i)for(const a in s)!Mc(a)&&o[a]==null&&delete s[a]},Pe=ld;function Yf(t){return Xf(t)}function Xf(t,e){const n=as();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:p,setScopeId:m=Ze,insertStaticContent:y}=t,E=(d,h,g,b=null,S=null,w=null,k=void 0,C=null,R=!!h.dynamicChildren)=>{if(d===h)return;d&&!Un(d,h)&&(b=v(d),Se(d,S,w,!0),d=null),h.patchFlag===-2&&(R=!1,h.dynamicChildren=null);const{type:T,ref:F,shapeFlag:D}=h;switch(T){case ds:I(d,h,g,b);break;case Zt:P(d,h,g,b);break;case Ns:d==null&&A(h,g,b,k);break;case lt:Wt(d,h,g,b,S,w,k,C,R);break;default:D&1?$(d,h,g,b,S,w,k,C,R):D&6?We(d,h,g,b,S,w,k,C,R):(D&64||D&128)&&T.process(d,h,g,b,S,w,k,C,R,M)}F!=null&&S&&qr(F,d&&d.ref,w,h||d,!h)},I=(d,h,g,b)=>{if(d==null)r(h.el=a(h.children),g,b);else{const S=h.el=d.el;h.children!==d.children&&l(S,h.children)}},P=(d,h,g,b)=>{d==null?r(h.el=c(h.children||""),g,b):h.el=d.el},A=(d,h,g,b)=>{[d.el,d.anchor]=y(d.children,h,g,b,d.el,d.anchor)},O=({el:d,anchor:h},g,b)=>{let S;for(;d&&d!==h;)S=p(d),r(d,g,b),d=S;r(h,g,b)},x=({el:d,anchor:h})=>{let g;for(;d&&d!==h;)g=p(d),s(d),d=g;s(h)},$=(d,h,g,b,S,w,k,C,R)=>{h.type==="svg"?k="svg":h.type==="math"&&(k="mathml"),d==null?z(h,g,b,S,w,k,C,R):ye(d,h,S,w,k,C,R)},z=(d,h,g,b,S,w,k,C)=>{let R,T;const{props:F,shapeFlag:D,transition:U,dirs:H}=d;if(R=d.el=o(d.type,w,F&&F.is,F),D&8?u(R,d.children):D&16&&fe(d.children,R,null,b,S,ks(d,w),k,C),H&&qt(d,null,b,"created"),q(R,d,d.scopeId,k,b),F){for(const se in F)se!=="value"&&!Vn(se)&&i(R,se,null,F[se],w,b);"value"in F&&i(R,"value",null,F.value,w),(T=F.onVnodeBeforeMount)&&Je(T,b,d)}H&&qt(d,null,b,"beforeMount");const K=Qf(S,U);K&&U.beforeEnter(R),r(R,h,g),((T=F&&F.onVnodeMounted)||K||H)&&Pe(()=>{T&&Je(T,b,d),K&&U.enter(R),H&&qt(d,null,b,"mounted")},S)},q=(d,h,g,b,S)=>{if(g&&m(d,g),b)for(let w=0;w<b.length;w++)m(d,b[w]);if(S){let w=S.subTree;if(h===w||qc(w.type)&&(w.ssContent===h||w.ssFallback===h)){const k=S.vnode;q(d,k,k.scopeId,k.slotScopeIds,S.parent)}}},fe=(d,h,g,b,S,w,k,C,R=0)=>{for(let T=R;T<d.length;T++){const F=d[T]=C?Rt(d[T]):Qe(d[T]);E(null,F,h,g,b,S,w,k,C)}},ye=(d,h,g,b,S,w,k)=>{const C=h.el=d.el;let{patchFlag:R,dynamicChildren:T,dirs:F}=h;R|=d.patchFlag&16;const D=d.props||re,U=h.props||re;let H;if(g&&Kt(g,!1),(H=U.onVnodeBeforeUpdate)&&Je(H,g,h,d),F&&qt(h,d,g,"beforeUpdate"),g&&Kt(g,!0),(D.innerHTML&&U.innerHTML==null||D.textContent&&U.textContent==null)&&u(C,""),T?De(d.dynamicChildren,T,C,g,b,ks(h,S),w):k||G(d,h,C,null,g,b,ks(h,S),w,!1),R>0){if(R&16)wt(C,D,U,g,S);else if(R&2&&D.class!==U.class&&i(C,"class",null,U.class,S),R&4&&i(C,"style",D.style,U.style,S),R&8){const K=h.dynamicProps;for(let se=0;se<K.length;se++){const Q=K[se],Ae=D[Q],Ie=U[Q];(Ie!==Ae||Q==="value")&&i(C,Q,Ae,Ie,S,g)}}R&1&&d.children!==h.children&&u(C,h.children)}else!k&&T==null&&wt(C,D,U,g,S);((H=U.onVnodeUpdated)||F)&&Pe(()=>{H&&Je(H,g,h,d),F&&qt(h,d,g,"updated")},b)},De=(d,h,g,b,S,w,k)=>{for(let C=0;C<h.length;C++){const R=d[C],T=h[C],F=R.el&&(R.type===lt||!Un(R,T)||R.shapeFlag&70)?f(R.el):g;E(R,T,F,null,b,S,w,k,!0)}},wt=(d,h,g,b,S)=>{if(h!==g){if(h!==re)for(const w in h)!Vn(w)&&!(w in g)&&i(d,w,h[w],null,S,b);for(const w in g){if(Vn(w))continue;const k=g[w],C=h[w];k!==C&&w!=="value"&&i(d,w,C,k,S,b)}"value"in g&&i(d,"value",h.value,g.value,S)}},Wt=(d,h,g,b,S,w,k,C,R)=>{const T=h.el=d?d.el:a(""),F=h.anchor=d?d.anchor:a("");let{patchFlag:D,dynamicChildren:U,slotScopeIds:H}=h;H&&(C=C?C.concat(H):H),d==null?(r(T,g,b),r(F,g,b),fe(h.children||[],g,F,S,w,k,C,R)):D>0&&D&64&&U&&d.dynamicChildren?(De(d.dynamicChildren,U,g,S,w,k,C),(h.key!=null||S&&h===S.subTree)&&$c(d,h,!0)):G(d,h,g,F,S,w,k,C,R)},We=(d,h,g,b,S,w,k,C,R)=>{h.slotScopeIds=C,d==null?h.shapeFlag&512?S.ctx.activate(h,g,b,k,R):Dn(h,g,b,S,w,k,R):sn(d,h,R)},Dn=(d,h,g,b,S,w,k)=>{const C=d.component=gd(d,b,S);if(Tc(d)&&(C.ctx.renderer=M),_d(C,!1,k),C.asyncDep){if(S&&S.registerDep(C,ue,k),!d.el){const R=C.subTree=ce(Zt);P(null,R,h,g)}}else ue(C,d,h,g,S,w,k)},sn=(d,h,g)=>{const b=h.component=d.component;if(ad(d,h,g))if(b.asyncDep&&!b.asyncResolved){ee(b,h,g);return}else b.next=h,b.update();else h.el=d.el,b.vnode=h},ue=(d,h,g,b,S,w,k)=>{const C=()=>{if(d.isMounted){let{next:D,bu:U,u:H,parent:K,vnode:se}=d;{const ze=Hc(d);if(ze){D&&(D.el=se.el,ee(d,D,k)),ze.asyncDep.then(()=>{d.isUnmounted||C()});return}}let Q=D,Ae;Kt(d,!1),D?(D.el=se.el,ee(d,D,k)):D=se,U&&Or(U),(Ae=D.props&&D.props.onVnodeBeforeUpdate)&&Je(Ae,K,D,se),Kt(d,!0);const Ie=wo(d),Ke=d.subTree;d.subTree=Ie,E(Ke,Ie,f(Ke.el),v(Ke),d,S,w),D.el=Ie.el,Q===null&&cd(d,Ie.el),H&&Pe(H,S),(Ae=D.props&&D.props.onVnodeUpdated)&&Pe(()=>Je(Ae,K,D,se),S)}else{let D;const{el:U,props:H}=h,{bm:K,m:se,parent:Q,root:Ae,type:Ie}=d,Ke=zn(h);Kt(d,!1),K&&Or(K),!Ke&&(D=H&&H.onVnodeBeforeMount)&&Je(D,Q,h),Kt(d,!0);{Ae.ce&&Ae.ce._injectChildStyle(Ie);const ze=d.subTree=wo(d);E(null,ze,g,b,d,S,w),h.el=ze.el}if(se&&Pe(se,S),!Ke&&(D=H&&H.onVnodeMounted)){const ze=h;Pe(()=>Je(D,Q,ze),S)}(h.shapeFlag&256||Q&&zn(Q.vnode)&&Q.vnode.shapeFlag&256)&&d.a&&Pe(d.a,S),d.isMounted=!0,h=g=b=null}};d.scope.on();const R=d.effect=new Za(C);d.scope.off();const T=d.update=R.run.bind(R),F=d.job=R.runIfDirty.bind(R);F.i=d,F.id=d.uid,R.scheduler=()=>Bi(F),Kt(d,!0),T()},ee=(d,h,g)=>{h.component=d;const b=d.vnode.props;d.vnode=h,d.next=null,qf(d,h.props,b,g),Jf(d,h.children,g),Ft(),ho(d),Bt()},G=(d,h,g,b,S,w,k,C,R=!1)=>{const T=d&&d.children,F=d?d.shapeFlag:0,D=h.children,{patchFlag:U,shapeFlag:H}=h;if(U>0){if(U&128){Et(T,D,g,b,S,w,k,C,R);return}else if(U&256){it(T,D,g,b,S,w,k,C,R);return}}H&8?(F&16&&Le(T,S,w),D!==T&&u(g,D)):F&16?H&16?Et(T,D,g,b,S,w,k,C,R):Le(T,S,w,!0):(F&8&&u(g,""),H&16&&fe(D,g,b,S,w,k,C,R))},it=(d,h,g,b,S,w,k,C,R)=>{d=d||hn,h=h||hn;const T=d.length,F=h.length,D=Math.min(T,F);let U;for(U=0;U<D;U++){const H=h[U]=R?Rt(h[U]):Qe(h[U]);E(d[U],H,g,null,S,w,k,C,R)}T>F?Le(d,S,w,!0,!1,D):fe(h,g,b,S,w,k,C,R,D)},Et=(d,h,g,b,S,w,k,C,R)=>{let T=0;const F=h.length;let D=d.length-1,U=F-1;for(;T<=D&&T<=U;){const H=d[T],K=h[T]=R?Rt(h[T]):Qe(h[T]);if(Un(H,K))E(H,K,g,null,S,w,k,C,R);else break;T++}for(;T<=D&&T<=U;){const H=d[D],K=h[U]=R?Rt(h[U]):Qe(h[U]);if(Un(H,K))E(H,K,g,null,S,w,k,C,R);else break;D--,U--}if(T>D){if(T<=U){const H=U+1,K=H<F?h[H].el:b;for(;T<=U;)E(null,h[T]=R?Rt(h[T]):Qe(h[T]),g,K,S,w,k,C,R),T++}}else if(T>U)for(;T<=D;)Se(d[T],S,w,!0),T++;else{const H=T,K=T,se=new Map;for(T=K;T<=U;T++){const Ce=h[T]=R?Rt(h[T]):Qe(h[T]);Ce.key!=null&&se.set(Ce.key,T)}let Q,Ae=0;const Ie=U-K+1;let Ke=!1,ze=0;const Ln=new Array(Ie);for(T=0;T<Ie;T++)Ln[T]=0;for(T=H;T<=D;T++){const Ce=d[T];if(Ae>=Ie){Se(Ce,S,w,!0);continue}let Ge;if(Ce.key!=null)Ge=se.get(Ce.key);else for(Q=K;Q<=U;Q++)if(Ln[Q-K]===0&&Un(Ce,h[Q])){Ge=Q;break}Ge===void 0?Se(Ce,S,w,!0):(Ln[Ge-K]=T+1,Ge>=ze?ze=Ge:Ke=!0,E(Ce,h[Ge],g,null,S,w,k,C,R),Ae++)}const ao=Ke?Zf(Ln):hn;for(Q=ao.length-1,T=Ie-1;T>=0;T--){const Ce=K+T,Ge=h[Ce],co=Ce+1<F?h[Ce+1].el:b;Ln[T]===0?E(null,Ge,g,co,S,w,k,C,R):Ke&&(Q<0||T!==ao[Q]?qe(Ge,g,co,2):Q--)}}},qe=(d,h,g,b,S=null)=>{const{el:w,type:k,transition:C,children:R,shapeFlag:T}=d;if(T&6){qe(d.component.subTree,h,g,b);return}if(T&128){d.suspense.move(h,g,b);return}if(T&64){k.move(d,h,g,M);return}if(k===lt){r(w,h,g);for(let D=0;D<R.length;D++)qe(R[D],h,g,b);r(d.anchor,h,g);return}if(k===Ns){O(d,h,g);return}if(b!==2&&T&1&&C)if(b===0)C.beforeEnter(w),r(w,h,g),Pe(()=>C.enter(w),S);else{const{leave:D,delayLeave:U,afterLeave:H}=C,K=()=>r(w,h,g),se=()=>{D(w,()=>{K(),H&&H()})};U?U(w,K,se):se()}else r(w,h,g)},Se=(d,h,g,b=!1,S=!1)=>{const{type:w,props:k,ref:C,children:R,dynamicChildren:T,shapeFlag:F,patchFlag:D,dirs:U,cacheIndex:H}=d;if(D===-2&&(S=!1),C!=null&&qr(C,null,g,d,!0),H!=null&&(h.renderCache[H]=void 0),F&256){h.ctx.deactivate(d);return}const K=F&1&&U,se=!zn(d);let Q;if(se&&(Q=k&&k.onVnodeBeforeUnmount)&&Je(Q,h,d),F&6)Tr(d.component,g,b);else{if(F&128){d.suspense.unmount(g,b);return}K&&qt(d,null,h,"beforeUnmount"),F&64?d.type.remove(d,h,g,M,b):T&&!T.hasOnce&&(w!==lt||D>0&&D&64)?Le(T,h,g,!1,!0):(w===lt&&D&384||!S&&F&16)&&Le(R,h,g),b&&on(d)}(se&&(Q=k&&k.onVnodeUnmounted)||K)&&Pe(()=>{Q&&Je(Q,h,d),K&&qt(d,null,h,"unmounted")},g)},on=d=>{const{type:h,el:g,anchor:b,transition:S}=d;if(h===lt){an(g,b);return}if(h===Ns){x(d);return}const w=()=>{s(g),S&&!S.persisted&&S.afterLeave&&S.afterLeave()};if(d.shapeFlag&1&&S&&!S.persisted){const{leave:k,delayLeave:C}=S,R=()=>k(g,w);C?C(d.el,w,R):R()}else w()},an=(d,h)=>{let g;for(;d!==h;)g=p(d),s(d),d=g;s(h)},Tr=(d,h,g)=>{const{bum:b,scope:S,job:w,subTree:k,um:C,m:R,a:T}=d;vo(R),vo(T),b&&Or(b),S.stop(),w&&(w.flags|=8,Se(k,d,h,g)),C&&Pe(C,h),Pe(()=>{d.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},Le=(d,h,g,b=!1,S=!1,w=0)=>{for(let k=w;k<d.length;k++)Se(d[k],h,g,b,S)},v=d=>{if(d.shapeFlag&6)return v(d.component.subTree);if(d.shapeFlag&128)return d.suspense.next();const h=p(d.anchor||d.el),g=h&&h[vf];return g?p(g):h};let L=!1;const N=(d,h,g)=>{d==null?h._vnode&&Se(h._vnode,null,null,!0):E(h._vnode||null,d,h,null,null,null,g),h._vnode=d,L||(L=!0,ho(),vc(),L=!1)},M={p:E,um:Se,m:qe,r:on,mt:Dn,mc:fe,pc:G,pbc:De,n:v,o:t};return{render:N,hydrate:void 0,createApp:Vf(N)}}function ks({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Kt({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Qf(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function $c(t,e,n=!1){const r=t.children,s=e.children;if(j(r)&&j(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Rt(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&$c(o,a)),a.type===ds&&(a.el=o.el)}}function Zf(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Hc(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Hc(e)}function vo(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const ed=Symbol.for("v-scx"),td=()=>tt(ed);function Nr(t,e,n){return jc(t,e,n)}function jc(t,e,n=re){const{immediate:r,deep:s,flush:i,once:o}=n,a=_e({},n),c=e&&r||!e&&i!=="post";let l;if(sr){if(i==="sync"){const m=td();l=m.__watcherHandles||(m.__watcherHandles=[])}else if(!c){const m=()=>{};return m.stop=Ze,m.resume=Ze,m.pause=Ze,m}}const u=pe;a.call=(m,y,E)=>st(m,u,y,E);let f=!1;i==="post"?a.scheduler=m=>{Pe(m,u&&u.suspense)}:i!=="sync"&&(f=!0,a.scheduler=(m,y)=>{y?m():Bi(m)}),a.augmentJob=m=>{e&&(m.flags|=4),f&&(m.flags|=2,u&&(m.id=u.uid,m.i=u))};const p=gf(t,e,a);return sr&&(l?l.push(p):c&&p()),p}function nd(t,e,n){const r=this.proxy,s=le(t)?t.includes(".")?Vc(r,t):()=>r[t]:t.bind(r,r);let i;V(e)?i=e:(i=e.handler,n=e);const o=mr(this),a=jc(s,i.bind(r),n);return o(),a}function Vc(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const rd=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Me(e)}Modifiers`]||t[`${Ut(e)}Modifiers`];function sd(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||re;let s=n;const i=e.startsWith("update:"),o=i&&rd(r,e.slice(7));o&&(o.trim&&(s=n.map(u=>le(u)?u.trim():u)),o.number&&(s=n.map(Js)));let a,c=r[a=Ts(e)]||r[a=Ts(Me(e))];!c&&i&&(c=r[a=Ts(Ut(e))]),c&&st(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,st(l,t,6,s)}}function Wc(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!V(t)){const c=l=>{const u=Wc(l,e,!0);u&&(a=!0,_e(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(oe(t)&&r.set(t,null),null):(j(i)?i.forEach(c=>o[c]=null):_e(o,i),oe(t)&&r.set(t,o),o)}function fs(t,e){return!t||!rs(e)?!1:(e=e.slice(2).replace(/Once$/,""),X(t,e[0].toLowerCase()+e.slice(1))||X(t,Ut(e))||X(t,e))}function wo(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:c,render:l,renderCache:u,props:f,data:p,setupState:m,ctx:y,inheritAttrs:E}=t,I=Wr(t);let P,A;try{if(n.shapeFlag&4){const x=s||r,$=x;P=Qe(l.call($,x,u,f,m,p,y)),A=a}else{const x=e;P=Qe(x.length>1?x(f,{attrs:a,slots:o,emit:c}):x(f,null)),A=e.props?a:id(a)}}catch(x){Jn.length=0,ls(x,t,1),P=ce(Zt)}let O=P;if(A&&E!==!1){const x=Object.keys(A),{shapeFlag:$}=O;x.length&&$&7&&(i&&x.some(Ri)&&(A=od(A,i)),O=In(O,A,!1,!0))}return n.dirs&&(O=In(O,null,!1,!0),O.dirs=O.dirs?O.dirs.concat(n.dirs):n.dirs),n.transition&&$i(O,n.transition),P=O,Wr(I),P}const id=t=>{let e;for(const n in t)(n==="class"||n==="style"||rs(n))&&((e||(e={}))[n]=t[n]);return e},od=(t,e)=>{const n={};for(const r in t)(!Ri(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function ad(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Eo(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const p=u[f];if(o[p]!==r[p]&&!fs(l,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Eo(r,o,l):!0:!!o;return!1}function Eo(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!fs(n,i))return!0}return!1}function cd({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const qc=t=>t.__isSuspense;function ld(t,e){e&&e.pendingBranch?j(t)?e.effects.push(...t):e.effects.push(t):bf(t)}const lt=Symbol.for("v-fgt"),ds=Symbol.for("v-txt"),Zt=Symbol.for("v-cmt"),Ns=Symbol.for("v-stc"),Jn=[];let Ne=null;function de(t=!1){Jn.push(Ne=t?null:[])}function ud(){Jn.pop(),Ne=Jn[Jn.length-1]||null}let rr=1;function So(t,e=!1){rr+=t,t<0&&Ne&&e&&(Ne.hasOnce=!0)}function Kc(t){return t.dynamicChildren=rr>0?Ne||hn:null,ud(),rr>0&&Ne&&Ne.push(t),t}function Te(t,e,n,r,s,i){return Kc(Z(t,e,n,r,s,i,!0))}function Vi(t,e,n,r,s){return Kc(ce(t,e,n,r,s,!0))}function zr(t){return t?t.__v_isVNode===!0:!1}function Un(t,e){return t.type===e.type&&t.key===e.key}const zc=({key:t})=>t??null,xr=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?le(t)||ge(t)||V(t)?{i:ke,r:t,k:e,f:!!n}:t:null);function Z(t,e=null,n=null,r=0,s=null,i=t===lt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&zc(e),ref:e&&xr(e),scopeId:Ec,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:ke};return a?(Wi(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=le(n)?8:16),rr>0&&!o&&Ne&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ne.push(c),c}const ce=fd;function fd(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Df)&&(t=Zt),zr(t)){const a=In(t,e,!0);return n&&Wi(a,n),rr>0&&!i&&Ne&&(a.shapeFlag&6?Ne[Ne.indexOf(t)]=a:Ne.push(a)),a.patchFlag=-2,a}if(Ed(t)&&(t=t.__vccOpts),e){e=dd(e);let{class:a,style:c}=e;a&&!le(a)&&(e.class=Oi(a)),oe(c)&&(Fi(c)&&!j(c)&&(c=_e({},c)),e.style=Pi(c))}const o=le(t)?1:qc(t)?128:wf(t)?64:oe(t)?4:V(t)?2:0;return Z(t,e,n,r,s,o,i,!0)}function dd(t){return t?Fi(t)||xc(t)?_e({},t):t:null}function In(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:c}=t,l=e?hd(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&zc(l),ref:e&&e.ref?n&&i?j(i)?i.concat(xr(e)):[i,xr(e)]:xr(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==lt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&In(t.ssContent),ssFallback:t.ssFallback&&In(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&$i(u,c.clone(u)),u}function xt(t=" ",e=0){return ce(ds,null,t,e)}function On(t="",e=!1){return e?(de(),Vi(Zt,null,t)):ce(Zt,null,t)}function Qe(t){return t==null||typeof t=="boolean"?ce(Zt):j(t)?ce(lt,null,t.slice()):zr(t)?Rt(t):ce(ds,null,String(t))}function Rt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:In(t)}function Wi(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(j(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Wi(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!xc(e)?e._ctx=ke:s===3&&ke&&(ke.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else V(e)?(e={default:e,_ctx:ke},n=32):(e=String(e),r&64?(n=16,e=[xt(e)]):n=8);t.children=e,t.shapeFlag|=n}function hd(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Oi([e.class,r.class]));else if(s==="style")e.style=Pi([e.style,r.style]);else if(rs(s)){const i=e[s],o=r[s];o&&i!==o&&!(j(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Je(t,e,n,r=null){st(t,e,7,[n,r])}const pd=Oc();let md=0;function gd(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||pd,i={uid:md++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ju(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Lc(r,s),emitsOptions:Wc(r,s),emit:null,emitted:null,propsDefaults:re,inheritAttrs:r.inheritAttrs,ctx:re,data:re,props:re,attrs:re,slots:re,refs:re,setupState:re,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=sd.bind(null,i),t.ce&&t.ce(i),i}let pe=null,Gr,ii;{const t=as(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Gr=e("__VUE_INSTANCE_SETTERS__",n=>pe=n),ii=e("__VUE_SSR_SETTERS__",n=>sr=n)}const mr=t=>{const e=pe;return Gr(t),t.scope.on(),()=>{t.scope.off(),Gr(e)}},Io=()=>{pe&&pe.scope.off(),Gr(null)};function Gc(t){return t.vnode.shapeFlag&4}let sr=!1;function _d(t,e=!1,n=!1){e&&ii(e);const{props:r,children:s}=t.vnode,i=Gc(t);Wf(t,r,i,e),Gf(t,s,n);const o=i?yd(t,e):void 0;return e&&ii(!1),o}function yd(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Mf);const{setup:r}=n;if(r){Ft();const s=t.setupContext=r.length>1?vd(t):null,i=mr(t),o=pr(r,t,0,[t.props,s]),a=Ka(o);if(Bt(),i(),(a||t.sp)&&!zn(t)&&Ic(t),a){if(o.then(Io,Io),e)return o.then(c=>{To(t,c)}).catch(c=>{ls(c,t,0)});t.asyncDep=o}else To(t,o)}else Jc(t)}function To(t,e,n){V(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:oe(e)&&(t.setupState=gc(e)),Jc(t)}function Jc(t,e,n){const r=t.type;t.render||(t.render=r.render||Ze);{const s=mr(t);Ft();try{Uf(t)}finally{Bt(),s()}}}const bd={get(t,e){return he(t,"get",""),t[e]}};function vd(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,bd),slots:t.slots,emit:t.emit,expose:e}}function hs(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(gc(lf(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Gn)return Gn[n](t)},has(e,n){return n in e||n in Gn}})):t.proxy}function wd(t,e=!0){return V(t)?t.displayName||t.name:t.name||e&&t.__name}function Ed(t){return V(t)&&"__vccOpts"in t}const Ue=(t,e)=>pf(t,e,sr);function Yc(t,e,n){const r=arguments.length;return r===2?oe(e)&&!j(e)?zr(e)?ce(t,null,[e]):ce(t,e):ce(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&zr(n)&&(n=[n]),ce(t,e,n))}const Sd="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let oi;const Ro=typeof window<"u"&&window.trustedTypes;if(Ro)try{oi=Ro.createPolicy("vue",{createHTML:t=>t})}catch{}const Xc=oi?t=>oi.createHTML(t):t=>t,Id="http://www.w3.org/2000/svg",Td="http://www.w3.org/1998/Math/MathML",ct=typeof document<"u"?document:null,Ao=ct&&ct.createElement("template"),Rd={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?ct.createElementNS(Id,t):e==="mathml"?ct.createElementNS(Td,t):n?ct.createElement(t,{is:n}):ct.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>ct.createTextNode(t),createComment:t=>ct.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ct.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Ao.innerHTML=Xc(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const a=Ao.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Ad=Symbol("_vtc");function Cd(t,e,n){const r=t[Ad];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Co=Symbol("_vod"),Pd=Symbol("_vsh"),Od=Symbol(""),kd=/(^|;)\s*display\s*:/;function Nd(t,e,n){const r=t.style,s=le(n);let i=!1;if(n&&!s){if(e)if(le(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Dr(r,a,"")}else for(const o in e)n[o]==null&&Dr(r,o,"");for(const o in n)o==="display"&&(i=!0),Dr(r,o,n[o])}else if(s){if(e!==n){const o=r[Od];o&&(n+=";"+o),r.cssText=n,i=kd.test(n)}}else e&&t.removeAttribute("style");Co in t&&(t[Co]=i?r.display:"",t[Pd]&&(r.display="none"))}const Po=/\s*!important$/;function Dr(t,e,n){if(j(n))n.forEach(r=>Dr(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=xd(t,e);Po.test(n)?t.setProperty(Ut(r),n.replace(Po,""),"important"):t[r]=n}}const Oo=["Webkit","Moz","ms"],xs={};function xd(t,e){const n=xs[e];if(n)return n;let r=Me(e);if(r!=="filter"&&r in t)return xs[e]=r;r=os(r);for(let s=0;s<Oo.length;s++){const i=Oo[s]+r;if(i in t)return xs[e]=i}return e}const ko="http://www.w3.org/1999/xlink";function No(t,e,n,r,s,i=Hu(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(ko,e.slice(6,e.length)):t.setAttributeNS(ko,e,n):n==null||i&&!Ya(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Mt(n)?String(n):n)}function xo(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Xc(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Ya(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function un(t,e,n,r){t.addEventListener(e,n,r)}function Dd(t,e,n,r){t.removeEventListener(e,n,r)}const Do=Symbol("_vei");function Ld(t,e,n,r,s=null){const i=t[Do]||(t[Do]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=Md(e);if(r){const l=i[e]=Bd(r,s);un(t,a,l,c)}else o&&(Dd(t,a,o,c),i[e]=void 0)}}const Lo=/(?:Once|Passive|Capture)$/;function Md(t){let e;if(Lo.test(t)){e={};let r;for(;r=t.match(Lo);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ut(t.slice(2)),e]}let Ds=0;const Ud=Promise.resolve(),Fd=()=>Ds||(Ud.then(()=>Ds=0),Ds=Date.now());function Bd(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;st($d(r,n.value),e,5,[r])};return n.value=t,n.attached=Fd(),n}function $d(t,e){if(j(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Mo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Hd=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?Cd(t,r,o):e==="style"?Nd(t,n,r):rs(e)?Ri(e)||Ld(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):jd(t,e,r,o))?(xo(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&No(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!le(r))?xo(t,Me(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),No(t,e,r,o))};function jd(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Mo(e)&&V(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Mo(e)&&le(n)?!1:e in t}const Uo=t=>{const e=t.props["onUpdate:modelValue"]||!1;return j(e)?n=>Or(e,n):e};function Vd(t){t.target.composing=!0}function Fo(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ls=Symbol("_assign"),ir={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Ls]=Uo(s);const i=r||s.props&&s.props.type==="number";un(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Js(a)),t[Ls](a)}),n&&un(t,"change",()=>{t.value=t.value.trim()}),e||(un(t,"compositionstart",Vd),un(t,"compositionend",Fo),un(t,"change",Fo))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Ls]=Uo(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?Js(t.value):t.value,c=e??"";a!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},Wd={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},or=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const i=Ut(s.key);if(e.some(o=>o===i||Wd[o]===i))return t(s)})},qd=_e({patchProp:Hd},Rd);let Bo;function Kd(){return Bo||(Bo=Yf(qd))}const zd=(...t)=>{const e=Kd().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Jd(r);if(!s)return;const i=e._component;!V(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,Gd(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Gd(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Jd(t){return le(t)?document.querySelector(t):t}const Yd=()=>{};var $o={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qc=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Xd=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Zc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,f=(i&3)<<4|a>>4;let p=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(p=64)),r.push(n[u],n[f],n[p],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Qc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Xd(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||f==null)throw new Qd;const p=i<<2|a>>4;if(r.push(p),l!==64){const m=a<<4&240|l>>2;if(r.push(m),f!==64){const y=l<<6&192|f;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Qd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Zd=function(t){const e=Qc(t);return Zc.encodeByteArray(e,!0)},el=function(t){return Zd(t).replace(/\./g,"")},tl=function(t){try{return Zc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const th=()=>eh().__FIREBASE_DEFAULTS__,nh=()=>{if(typeof process>"u"||typeof $o>"u")return;const t=$o.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},rh=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&tl(t[1]);return e&&JSON.parse(e)},qi=()=>{try{return Yd()||th()||nh()||rh()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},sh=t=>{var e,n;return(n=(e=qi())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},nl=()=>{var t;return(t=qi())===null||t===void 0?void 0:t.config},rl=t=>{var e;return(e=qi())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function oh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ee())}function ah(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ch(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function lh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function uh(){const t=Ee();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function fh(){try{return typeof indexedDB=="object"}catch{return!1}}function dh(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hh="FirebaseError";class $t extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=hh,Object.setPrototypeOf(this,$t.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,gr.prototype.create)}}class gr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?ph(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new $t(s,a,r)}}function ph(t,e){return t.replace(mh,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const mh=/\{\$([^}]+)}/g;function gh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Tn(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Ho(i)&&Ho(o)){if(!Tn(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Ho(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _r(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Hn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function jn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function _h(t,e){const n=new yh(t,e);return n.subscribe.bind(n)}class yh{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");bh(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Ms),s.error===void 0&&(s.error=Ms),s.complete===void 0&&(s.complete=Ms);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function bh(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ms(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(t){return t&&t._delegate?t._delegate:t}class Rn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ih;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Eh(e))try{this.getOrInitializeService({instanceIdentifier:Gt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Gt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Gt){return this.instances.has(e)}getOptions(e=Gt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:wh(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Gt){return this.component?this.component.multipleInstances?e:Gt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function wh(t){return t===Gt?void 0:t}function Eh(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new vh(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const Ih={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},Th=ne.INFO,Rh={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},Ah=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Rh[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class sl{constructor(e){this.name=e,this._logLevel=Th,this._logHandler=Ah,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ih[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const Ch=(t,e)=>e.some(n=>t instanceof n);let jo,Vo;function Ph(){return jo||(jo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Oh(){return Vo||(Vo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const il=new WeakMap,ai=new WeakMap,ol=new WeakMap,Us=new WeakMap,Ki=new WeakMap;function kh(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Dt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&il.set(n,t)}).catch(()=>{}),Ki.set(e,t),e}function Nh(t){if(ai.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ai.set(t,e)}let ci={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ai.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ol.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Dt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function xh(t){ci=t(ci)}function Dh(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Fs(this),e,...n);return ol.set(r,e.sort?e.sort():[e]),Dt(r)}:Oh().includes(t)?function(...e){return t.apply(Fs(this),e),Dt(il.get(this))}:function(...e){return Dt(t.apply(Fs(this),e))}}function Lh(t){return typeof t=="function"?Dh(t):(t instanceof IDBTransaction&&Nh(t),Ch(t,Ph())?new Proxy(t,ci):t)}function Dt(t){if(t instanceof IDBRequest)return kh(t);if(Us.has(t))return Us.get(t);const e=Lh(t);return e!==t&&(Us.set(t,e),Ki.set(e,t)),e}const Fs=t=>Ki.get(t);function Mh(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Dt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Dt(o.result),c.oldVersion,c.newVersion,Dt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Uh=["get","getKey","getAll","getAllKeys","count"],Fh=["put","add","delete","clear"],Bs=new Map;function Wo(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Bs.get(e))return Bs.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Fh.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Uh.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Bs.set(e,i),i}xh(t=>({...t,get:(e,n,r)=>Wo(e,n)||t.get(e,n,r),has:(e,n)=>!!Wo(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if($h(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function $h(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const li="@firebase/app",qo="0.11.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t=new sl("@firebase/app"),Hh="@firebase/app-compat",jh="@firebase/analytics-compat",Vh="@firebase/analytics",Wh="@firebase/app-check-compat",qh="@firebase/app-check",Kh="@firebase/auth",zh="@firebase/auth-compat",Gh="@firebase/database",Jh="@firebase/data-connect",Yh="@firebase/database-compat",Xh="@firebase/functions",Qh="@firebase/functions-compat",Zh="@firebase/installations",ep="@firebase/installations-compat",tp="@firebase/messaging",np="@firebase/messaging-compat",rp="@firebase/performance",sp="@firebase/performance-compat",ip="@firebase/remote-config",op="@firebase/remote-config-compat",ap="@firebase/storage",cp="@firebase/storage-compat",lp="@firebase/firestore",up="@firebase/vertexai",fp="@firebase/firestore-compat",dp="firebase",hp="11.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ui="[DEFAULT]",pp={[li]:"fire-core",[Hh]:"fire-core-compat",[Vh]:"fire-analytics",[jh]:"fire-analytics-compat",[qh]:"fire-app-check",[Wh]:"fire-app-check-compat",[Kh]:"fire-auth",[zh]:"fire-auth-compat",[Gh]:"fire-rtdb",[Jh]:"fire-data-connect",[Yh]:"fire-rtdb-compat",[Xh]:"fire-fn",[Qh]:"fire-fn-compat",[Zh]:"fire-iid",[ep]:"fire-iid-compat",[tp]:"fire-fcm",[np]:"fire-fcm-compat",[rp]:"fire-perf",[sp]:"fire-perf-compat",[ip]:"fire-rc",[op]:"fire-rc-compat",[ap]:"fire-gcs",[cp]:"fire-gcs-compat",[lp]:"fire-fst",[fp]:"fire-fst-compat",[up]:"fire-vertex","fire-js":"fire-js",[dp]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr=new Map,mp=new Map,fi=new Map;function Ko(t,e){try{t.container.addComponent(e)}catch(n){_t.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ar(t){const e=t.name;if(fi.has(e))return _t.debug(`There were multiple attempts to register component ${e}.`),!1;fi.set(e,t);for(const n of Jr.values())Ko(n,t);for(const n of mp.values())Ko(n,t);return!0}function al(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Fe(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Lt=new gr("app","Firebase",gp);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Rn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Lt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yr=hp;function cl(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ui,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Lt.create("bad-app-name",{appName:String(s)});if(n||(n=nl()),!n)throw Lt.create("no-options");const i=Jr.get(s);if(i){if(Tn(n,i.options)&&Tn(r,i.config))return i;throw Lt.create("duplicate-app",{appName:s})}const o=new Sh(s);for(const c of fi.values())o.addComponent(c);const a=new _p(n,r,o);return Jr.set(s,a),a}function yp(t=ui){const e=Jr.get(t);if(!e&&t===ui&&nl())return cl();if(!e)throw Lt.create("no-app",{appName:t});return e}function bn(t,e,n){var r;let s=(r=pp[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),_t.warn(a.join(" "));return}ar(new Rn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bp="firebase-heartbeat-database",vp=1,cr="firebase-heartbeat-store";let $s=null;function ll(){return $s||($s=Mh(bp,vp,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(cr)}catch(n){console.warn(n)}}}}).catch(t=>{throw Lt.create("idb-open",{originalErrorMessage:t.message})})),$s}async function wp(t){try{const n=(await ll()).transaction(cr),r=await n.objectStore(cr).get(ul(t));return await n.done,r}catch(e){if(e instanceof $t)_t.warn(e.message);else{const n=Lt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});_t.warn(n.message)}}}async function zo(t,e){try{const r=(await ll()).transaction(cr,"readwrite");await r.objectStore(cr).put(e,ul(t)),await r.done}catch(n){if(n instanceof $t)_t.warn(n.message);else{const r=Lt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});_t.warn(r.message)}}}function ul(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ep=1024,Sp=30;class Ip{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Rp(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Go();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>Sp){const o=Ap(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){_t.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Go(),{heartbeatsToSend:r,unsentEntries:s}=Tp(this._heartbeatsCache.heartbeats),i=el(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return _t.warn(n),""}}}function Go(){return new Date().toISOString().substring(0,10)}function Tp(t,e=Ep){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Jo(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Jo(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Rp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return fh()?dh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await wp(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return zo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return zo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Jo(t){return el(JSON.stringify({version:2,heartbeats:t})).length}function Ap(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cp(t){ar(new Rn("platform-logger",e=>new Bh(e),"PRIVATE")),ar(new Rn("heartbeat",e=>new Ip(e),"PRIVATE")),bn(li,qo,t),bn(li,qo,"esm2017"),bn("fire-js","")}Cp("");var Pp="firebase",Op="11.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bn(Pp,Op,"app");function zi(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function fl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const kp=fl,dl=new gr("auth","Firebase",fl());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr=new sl("@firebase/auth");function Np(t,...e){Yr.logLevel<=ne.WARN&&Yr.warn(`Auth (${yr}): ${t}`,...e)}function Lr(t,...e){Yr.logLevel<=ne.ERROR&&Yr.error(`Auth (${yr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(t,...e){throw Gi(t,...e)}function nt(t,...e){return Gi(t,...e)}function hl(t,e,n){const r=Object.assign(Object.assign({},kp()),{[e]:n});return new gr("auth","Firebase",r).create(e,{appName:t.name})}function gt(t){return hl(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Gi(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return dl.create(t,...e)}function B(t,e,...n){if(!t)throw Gi(e,...n)}function ht(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Lr(e),new Error(e)}function yt(t,e){t||ht(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function xp(){return Yo()==="http:"||Yo()==="https:"}function Yo(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(xp()||ch()||"connection"in navigator)?navigator.onLine:!0}function Lp(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(e,n){this.shortDelay=e,this.longDelay=n,yt(n>e,"Short delay should be less than long delay!"),this.isMobile=oh()||lh()}get(){return Dp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(t,e){yt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ht("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ht("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ht("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Up=new br(3e4,6e4);function Ht(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function jt(t,e,n,r,s={}){return ml(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=_r(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const l=Object.assign({method:e,headers:c},i);return ah()||(l.referrerPolicy="no-referrer"),pl.fetch()(gl(t,t.config.apiHost,n,a),l)})}async function ml(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Mp),e);try{const s=new Bp(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Pr(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Pr(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Pr(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Pr(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw hl(t,u,l);He(t,u)}}catch(s){if(s instanceof $t)throw s;He(t,"network-request-failed",{message:String(s)})}}async function vr(t,e,n,r,s={}){const i=await jt(t,e,n,r,s);return"mfaPendingCredential"in i&&He(t,"multi-factor-auth-required",{_serverResponse:i}),i}function gl(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Ji(t.config,s):`${t.config.apiScheme}://${s}`}function Fp(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Bp{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(nt(this.auth,"network-request-failed")),Up.get())})}}function Pr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=nt(t,e,r);return s.customData._tokenResponse=n,s}function Xo(t){return t!==void 0&&t.enterprise!==void 0}class $p{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Fp(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Hp(t,e){return jt(t,"GET","/v2/recaptchaConfig",Ht(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jp(t,e){return jt(t,"POST","/v1/accounts:delete",e)}async function _l(t,e){return jt(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Vp(t,e=!1){const n=vt(t),r=await n.getIdToken(e),s=Yi(r);B(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Yn(Hs(s.auth_time)),issuedAtTime:Yn(Hs(s.iat)),expirationTime:Yn(Hs(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Hs(t){return Number(t)*1e3}function Yi(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Lr("JWT malformed, contained fewer than 3 sections"),null;try{const s=tl(n);return s?JSON.parse(s):(Lr("Failed to decode base64 JWT payload"),null)}catch(s){return Lr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Qo(t){const e=Yi(t);return B(e,"internal-error"),B(typeof e.exp<"u","internal-error"),B(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof $t&&Wp(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Wp({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Yn(this.lastLoginAt),this.creationTime=Yn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await lr(t,_l(n,{idToken:r}));B(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?yl(i.providerUserInfo):[],a=zp(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new hi(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function Kp(t){const e=vt(t);await Xr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function zp(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function yl(t){return t.map(e=>{var{providerId:n}=e,r=zi(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gp(t,e){const n=await ml(t,{},async()=>{const r=_r({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=gl(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",pl.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Jp(t,e){return jt(t,"POST","/v2/accounts:revokeToken",Ht(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){B(e.idToken,"internal-error"),B(typeof e.idToken<"u","internal-error"),B(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Qo(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){B(e.length!==0,"internal-error");const n=Qo(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(B(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Gp(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new vn;return r&&(B(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(B(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(B(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new vn,this.toJSON())}_performRefresh(){return ht("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(t,e){B(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class pt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=zi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new qp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new hi(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await lr(this,this.stsTokenManager.getToken(this.auth,e));return B(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Vp(this,e)}reload(){return Kp(this)}_assign(e){this!==e&&(B(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new pt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Xr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Fe(this.auth.app))return Promise.reject(gt(this.auth));const e=await this.getIdToken();return await lr(this,jp(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,E=(a=n.tenantId)!==null&&a!==void 0?a:void 0,I=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,P=(l=n.createdAt)!==null&&l!==void 0?l:void 0,A=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:O,emailVerified:x,isAnonymous:$,providerData:z,stsTokenManager:q}=n;B(O&&q,e,"internal-error");const fe=vn.fromJSON(this.name,q);B(typeof O=="string",e,"internal-error"),St(f,e.name),St(p,e.name),B(typeof x=="boolean",e,"internal-error"),B(typeof $=="boolean",e,"internal-error"),St(m,e.name),St(y,e.name),St(E,e.name),St(I,e.name),St(P,e.name),St(A,e.name);const ye=new pt({uid:O,auth:e,email:p,emailVerified:x,displayName:f,isAnonymous:$,photoURL:y,phoneNumber:m,tenantId:E,stsTokenManager:fe,createdAt:P,lastLoginAt:A});return z&&Array.isArray(z)&&(ye.providerData=z.map(De=>Object.assign({},De))),I&&(ye._redirectEventId=I),ye}static async _fromIdTokenResponse(e,n,r=!1){const s=new vn;s.updateFromServerResponse(n);const i=new pt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Xr(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];B(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?yl(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new vn;a.updateFromIdToken(r);const c=new pt({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new hi(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,l),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zo=new Map;function mt(t){yt(t instanceof Function,"Expected a class definition");let e=Zo.get(t);return e?(yt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Zo.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}bl.type="NONE";const ea=bl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mr(t,e,n){return`firebase:${t}:${e}:${n}`}class wn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Mr(this.userKey,s.apiKey,i),this.fullPersistenceKey=Mr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?pt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new wn(mt(ea),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||mt(ea);const o=Mr(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const f=pt._fromJSON(e,u);l!==i&&(a=f),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new wn(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new wn(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ta(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Sl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(vl(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Tl(e))return"Blackberry";if(Rl(e))return"Webos";if(wl(e))return"Safari";if((e.includes("chrome/")||El(e))&&!e.includes("edge/"))return"Chrome";if(Il(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function vl(t=Ee()){return/firefox\//i.test(t)}function wl(t=Ee()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function El(t=Ee()){return/crios\//i.test(t)}function Sl(t=Ee()){return/iemobile/i.test(t)}function Il(t=Ee()){return/android/i.test(t)}function Tl(t=Ee()){return/blackberry/i.test(t)}function Rl(t=Ee()){return/webos/i.test(t)}function Xi(t=Ee()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Yp(t=Ee()){var e;return Xi(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Xp(){return uh()&&document.documentMode===10}function Al(t=Ee()){return Xi(t)||Il(t)||Rl(t)||Tl(t)||/windows phone/i.test(t)||Sl(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cl(t,e=[]){let n;switch(t){case"Browser":n=ta(Ee());break;case"Worker":n=`${ta(Ee())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${yr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zp(t,e={}){return jt(t,"GET","/v2/passwordPolicy",Ht(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const em=6;class tm{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:em,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new na(this),this.idTokenSubscription=new na(this),this.beforeStateQueue=new Qp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=dl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=mt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await wn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await _l(this,{idToken:e}),r=await pt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Fe(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Xr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Lp()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Fe(this.app))return Promise.reject(gt(this));const n=e?vt(e):null;return n&&B(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&B(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Fe(this.app)?Promise.reject(gt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Fe(this.app)?Promise.reject(gt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(mt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Zp(this),n=new tm(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new gr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Jp(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&mt(e)||this._popupRedirectResolver;B(n,this,"argument-error"),this.redirectPersistenceManager=await wn.create(this,[mt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(B(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Cl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(Fe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Np(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function rn(t){return vt(t)}class na{constructor(e){this.auth=e,this.observer=null,this.addObserver=_h(n=>this.observer=n)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ps={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function rm(t){ps=t}function Pl(t){return ps.loadJS(t)}function sm(){return ps.recaptchaEnterpriseScript}function im(){return ps.gapiScript}function om(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class am{constructor(){this.enterprise=new cm}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class cm{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const lm="recaptcha-enterprise",Ol="NO_RECAPTCHA";class um{constructor(e){this.type=lm,this.auth=rn(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Hp(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new $p(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;Xo(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(Ol)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new am().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&Xo(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=sm();c.length!==0&&(c+=a),Pl(c).then(()=>{s(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function ra(t,e,n,r=!1,s=!1){const i=new um(t);let o;if(s)o=Ol;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const c=a.phoneEnrollmentInfo.phoneNumber,l=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function pi(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await ra(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await ra(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fm(t,e){const n=al(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Tn(i,e??{}))return s;He(s,"already-initialized")}return n.initialize({options:e})}function dm(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(mt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function hm(t,e,n){const r=rn(t);B(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=kl(e),{host:o,port:a}=pm(e),c=a===null?"":`:${a}`,l={url:`${i}//${o}${c}/`},u=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){B(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),B(Tn(l,r.config.emulator)&&Tn(u,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=l,r.emulatorConfig=u,r.settings.appVerificationDisabledForTesting=!0,mm()}function kl(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function pm(t){const e=kl(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:sa(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:sa(o)}}}function sa(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function mm(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ht("not implemented")}_getIdTokenResponse(e){return ht("not implemented")}_linkToIdToken(e,n){return ht("not implemented")}_getReauthenticationResolver(e){return ht("not implemented")}}async function gm(t,e){return jt(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _m(t,e){return vr(t,"POST","/v1/accounts:signInWithPassword",Ht(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ym(t,e){return vr(t,"POST","/v1/accounts:signInWithEmailLink",Ht(t,e))}async function bm(t,e){return vr(t,"POST","/v1/accounts:signInWithEmailLink",Ht(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur extends Qi{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new ur(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ur(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return pi(e,n,"signInWithPassword",_m);case"emailLink":return ym(e,{email:this._email,oobCode:this._password});default:He(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return pi(e,r,"signUpPassword",gm);case"emailLink":return bm(e,{idToken:n,email:this._email,oobCode:this._password});default:He(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function En(t,e){return vr(t,"POST","/v1/accounts:signInWithIdp",Ht(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vm="http://localhost";class en extends Qi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new en(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):He("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=zi(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new en(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return En(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,En(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,En(e,n)}buildRequest(){const e={requestUri:vm,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=_r(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wm(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Em(t){const e=Hn(jn(t)).link,n=e?Hn(jn(e)).deep_link_id:null,r=Hn(jn(t)).deep_link_id;return(r?Hn(jn(r)).link:null)||r||n||e||t}class Zi{constructor(e){var n,r,s,i,o,a;const c=Hn(jn(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,f=wm((s=c.mode)!==null&&s!==void 0?s:null);B(l&&u&&f,"argument-error"),this.apiKey=l,this.operation=f,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Em(e);try{return new Zi(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(){this.providerId=kn.PROVIDER_ID}static credential(e,n){return ur._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Zi.parseLink(n);return B(r,"argument-error"),ur._fromEmailAndCode(e,r.code,r.tenantId)}}kn.PROVIDER_ID="password";kn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";kn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr extends Nl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct extends wr{constructor(){super("facebook.com")}static credential(e){return en._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ct.credentialFromTaggedObject(e)}static credentialFromError(e){return Ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ct.credential(e.oauthAccessToken)}catch{return null}}}Ct.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ct.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt extends wr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return en._fromParams({providerId:Pt.PROVIDER_ID,signInMethod:Pt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Pt.credentialFromTaggedObject(e)}static credentialFromError(e){return Pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Pt.credential(n,r)}catch{return null}}}Pt.GOOGLE_SIGN_IN_METHOD="google.com";Pt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot extends wr{constructor(){super("github.com")}static credential(e){return en._fromParams({providerId:Ot.PROVIDER_ID,signInMethod:Ot.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ot.credentialFromTaggedObject(e)}static credentialFromError(e){return Ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ot.credential(e.oauthAccessToken)}catch{return null}}}Ot.GITHUB_SIGN_IN_METHOD="github.com";Ot.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt extends wr{constructor(){super("twitter.com")}static credential(e,n){return en._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return kt.credentialFromTaggedObject(e)}static credentialFromError(e){return kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return kt.credential(n,r)}catch{return null}}}kt.TWITTER_SIGN_IN_METHOD="twitter.com";kt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sm(t,e){return vr(t,"POST","/v1/accounts:signUp",Ht(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await pt._fromIdTokenResponse(e,r,s),o=ia(r);return new tn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=ia(r);return new tn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function ia(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr extends $t{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Qr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Qr(e,n,r,s)}}function xl(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Qr._fromErrorAndOperation(t,i,e,r):i})}async function Im(t,e,n=!1){const r=await lr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return tn._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tm(t,e,n=!1){const{auth:r}=t;if(Fe(r.app))return Promise.reject(gt(r));const s="reauthenticate";try{const i=await lr(t,xl(r,s,e,t),n);B(i.idToken,r,"internal-error");const o=Yi(i.idToken);B(o,r,"internal-error");const{sub:a}=o;return B(t.uid===a,r,"user-mismatch"),tn._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&He(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dl(t,e,n=!1){if(Fe(t.app))return Promise.reject(gt(t));const r="signIn",s=await xl(t,r,e),i=await tn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Rm(t,e){return Dl(rn(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ll(t){const e=rn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Am(t,e,n){if(Fe(t.app))return Promise.reject(gt(t));const r=rn(t),o=await pi(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Sm).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Ll(t),c}),a=await tn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function Cm(t,e,n){return Fe(t.app)?Promise.reject(gt(t)):Rm(vt(t),kn.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Ll(t),r})}function Pm(t,e,n,r){return vt(t).onIdTokenChanged(e,n,r)}function Om(t,e,n){return vt(t).beforeAuthStateChanged(e,n)}function km(t,e,n,r){return vt(t).onAuthStateChanged(e,n,r)}function Nm(t){return vt(t).signOut()}const Zr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Zr,"1"),this.storage.removeItem(Zr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xm=1e3,Dm=10;class Ul extends Ml{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Al(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Xp()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Dm):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},xm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ul.type="LOCAL";const Lm=Ul;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl extends Ml{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Fl.type="SESSION";const Bl=Fl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mm(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ms(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await Mm(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ms.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eo(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=eo("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const p=f;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(){return window}function Fm(t){rt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $l(){return typeof rt().WorkerGlobalScope<"u"&&typeof rt().importScripts=="function"}async function Bm(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function $m(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Hm(){return $l()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hl="firebaseLocalStorageDb",jm=1,es="firebaseLocalStorage",jl="fbase_key";class Er{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function gs(t,e){return t.transaction([es],e?"readwrite":"readonly").objectStore(es)}function Vm(){const t=indexedDB.deleteDatabase(Hl);return new Er(t).toPromise()}function mi(){const t=indexedDB.open(Hl,jm);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(es,{keyPath:jl})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(es)?e(r):(r.close(),await Vm(),e(await mi()))})})}async function oa(t,e,n){const r=gs(t,!0).put({[jl]:e,value:n});return new Er(r).toPromise()}async function Wm(t,e){const n=gs(t,!1).get(e),r=await new Er(n).toPromise();return r===void 0?null:r.value}function aa(t,e){const n=gs(t,!0).delete(e);return new Er(n).toPromise()}const qm=800,Km=3;class Vl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await mi(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Km)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return $l()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ms._getInstance(Hm()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Bm(),!this.activeServiceWorker)return;this.sender=new Um(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||$m()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await mi();return await oa(e,Zr,"1"),await aa(e,Zr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>oa(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Wm(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>aa(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=gs(s,!1).getAll();return new Er(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),qm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Vl.type="LOCAL";const zm=Vl;new br(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gm(t,e){return e?mt(e):(B(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to extends Qi{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return En(e,this._buildIdpRequest())}_linkToIdToken(e,n){return En(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return En(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Jm(t){return Dl(t.auth,new to(t),t.bypassAuthState)}function Ym(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),Tm(n,new to(t),t.bypassAuthState)}async function Xm(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),Im(n,new to(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Jm;case"linkViaPopup":case"linkViaRedirect":return Xm;case"reauthViaPopup":case"reauthViaRedirect":return Ym;default:He(this.auth,"internal-error")}}resolve(e){yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qm=new br(2e3,1e4);class dn extends Wl{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,dn.currentPopupAction&&dn.currentPopupAction.cancel(),dn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return B(e,this.auth,"internal-error"),e}async onExecution(){yt(this.filter.length===1,"Popup operations only handle one event");const e=eo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(nt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(nt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,dn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Qm.get())};e()}}dn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zm="pendingRedirect",Ur=new Map;class eg extends Wl{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ur.get(this.auth._key());if(!e){try{const r=await tg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ur.set(this.auth._key(),e)}return this.bypassAuthState||Ur.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function tg(t,e){const n=sg(e),r=rg(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function ng(t,e){Ur.set(t._key(),e)}function rg(t){return mt(t._redirectPersistence)}function sg(t){return Mr(Zm,t.config.apiKey,t.name)}async function ig(t,e,n=!1){if(Fe(t.app))return Promise.reject(gt(t));const r=rn(t),s=Gm(r,e),o=await new eg(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const og=10*60*1e3;class ag{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!cg(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!ql(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(nt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=og&&this.cachedEventUids.clear(),this.cachedEventUids.has(ca(e))}saveEventToCache(e){this.cachedEventUids.add(ca(e)),this.lastProcessedEventTime=Date.now()}}function ca(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ql({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function cg(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ql(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lg(t,e={}){return jt(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ug=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,fg=/^https?/;async function dg(t){if(t.config.emulator)return;const{authorizedDomains:e}=await lg(t);for(const n of e)try{if(hg(n))return}catch{}He(t,"unauthorized-domain")}function hg(t){const e=di(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!fg.test(n))return!1;if(ug.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pg=new br(3e4,6e4);function la(){const t=rt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function mg(t){return new Promise((e,n)=>{var r,s,i;function o(){la(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{la(),n(nt(t,"network-request-failed"))},timeout:pg.get()})}if(!((s=(r=rt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=rt().gapi)===null||i===void 0)&&i.load)o();else{const a=om("iframefcb");return rt()[a]=()=>{gapi.load?o():n(nt(t,"network-request-failed"))},Pl(`${im()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Fr=null,e})}let Fr=null;function gg(t){return Fr=Fr||mg(t),Fr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _g=new br(5e3,15e3),yg="__/auth/iframe",bg="emulator/auth/iframe",vg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},wg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Eg(t){const e=t.config;B(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ji(e,bg):`https://${t.config.authDomain}/${yg}`,r={apiKey:e.apiKey,appName:t.name,v:yr},s=wg.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${_r(r).slice(1)}`}async function Sg(t){const e=await gg(t),n=rt().gapi;return B(n,t,"internal-error"),e.open({where:document.body,url:Eg(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:vg,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=nt(t,"network-request-failed"),a=rt().setTimeout(()=>{i(o)},_g.get());function c(){rt().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ig={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Tg=500,Rg=600,Ag="_blank",Cg="http://localhost";class ua{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Pg(t,e,n,r=Tg,s=Rg){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Ig),{width:r.toString(),height:s.toString(),top:i,left:o}),l=Ee().toLowerCase();n&&(a=El(l)?Ag:n),vl(l)&&(e=e||Cg,c.scrollbars="yes");const u=Object.entries(c).reduce((p,[m,y])=>`${p}${m}=${y},`,"");if(Yp(l)&&a!=="_self")return Og(e||"",a),new ua(null);const f=window.open(e||"",a,u);B(f,t,"popup-blocked");try{f.focus()}catch{}return new ua(f)}function Og(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kg="__/auth/handler",Ng="emulator/auth/handler",xg=encodeURIComponent("fac");async function fa(t,e,n,r,s,i){B(t.config.authDomain,t,"auth-domain-config-required"),B(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:yr,eventId:s};if(e instanceof Nl){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",gh(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,f]of Object.entries({}))o[u]=f}if(e instanceof wr){const u=e.getScopes().filter(f=>f!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${xg}=${encodeURIComponent(c)}`:"";return`${Dg(t)}?${_r(a).slice(1)}${l}`}function Dg({config:t}){return t.emulator?Ji(t,Ng):`https://${t.authDomain}/${kg}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const js="webStorageSupport";class Lg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Bl,this._completeRedirectFn=ig,this._overrideRedirectResult=ng}async _openPopup(e,n,r,s){var i;yt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await fa(e,n,r,di(),s);return Pg(e,o,eo())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await fa(e,n,r,di(),s);return Fm(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(yt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Sg(e),r=new ag(e);return n.register("authEvent",s=>(B(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(js,{type:js},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[js];o!==void 0&&n(!!o),He(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=dg(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Al()||wl()||Xi()}}const Mg=Lg;var da="@firebase/auth",ha="1.9.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fg(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Bg(t){ar(new Rn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;B(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Cl(t)},l=new nm(r,s,i,c);return dm(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ar(new Rn("auth-internal",e=>{const n=rn(e.getProvider("auth").getImmediate());return(r=>new Ug(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),bn(da,ha,Fg(t)),bn(da,ha,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $g=5*60,Hg=rl("authIdTokenMaxAge")||$g;let pa=null;const jg=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Hg)return;const s=n==null?void 0:n.token;pa!==s&&(pa=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Vg(t=yp()){const e=al(t,"auth");if(e.isInitialized())return e.getImmediate();const n=fm(t,{popupRedirectResolver:Mg,persistence:[zm,Lm,Bl]}),r=rl("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=jg(i.toString());Om(n,o,()=>o(n.currentUser)),Pm(n,a=>o(a))}}const s=sh("auth");return s&&hm(n,`http://${s}`),n}function Wg(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}rm({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=nt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Wg().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Bg("Browser");const qg={apiKey:"AIzaSyAcMTSlBzzrWo7Fc_LXCPLTL8P3R9CyrcY",authDomain:"vueproject-3838d.firebaseapp.com",projectId:"vueproject-3838d",storageBucket:"vueproject-3838d.firebasestorage.app",messagingSenderId:"944880823919",appId:"1:944880823919:web:da142f1aebe5e5a789a79a"},Kg=cl(qg),An=Vg(Kg);/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const fn=typeof document<"u";function Kl(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function zg(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Kl(t.default)}const J=Object.assign;function Vs(t,e){const n={};for(const r in e){const s=e[r];n[r]=je(s)?s.map(t):t(s)}return n}const Xn=()=>{},je=Array.isArray,zl=/#/g,Gg=/&/g,Jg=/\//g,Yg=/=/g,Xg=/\?/g,Gl=/\+/g,Qg=/%5B/g,Zg=/%5D/g,Jl=/%5E/g,e_=/%60/g,Yl=/%7B/g,t_=/%7C/g,Xl=/%7D/g,n_=/%20/g;function no(t){return encodeURI(""+t).replace(t_,"|").replace(Qg,"[").replace(Zg,"]")}function r_(t){return no(t).replace(Yl,"{").replace(Xl,"}").replace(Jl,"^")}function gi(t){return no(t).replace(Gl,"%2B").replace(n_,"+").replace(zl,"%23").replace(Gg,"%26").replace(e_,"`").replace(Yl,"{").replace(Xl,"}").replace(Jl,"^")}function s_(t){return gi(t).replace(Yg,"%3D")}function i_(t){return no(t).replace(zl,"%23").replace(Xg,"%3F")}function o_(t){return t==null?"":i_(t).replace(Jg,"%2F")}function fr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const a_=/\/$/,c_=t=>t.replace(a_,"");function Ws(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=d_(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:fr(o)}}function l_(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function ma(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function u_(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Cn(e.matched[r],n.matched[s])&&Ql(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Cn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Ql(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!f_(t[n],e[n]))return!1;return!0}function f_(t,e){return je(t)?ga(t,e):je(e)?ga(e,t):t===e}function ga(t,e){return je(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function d_(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const It={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var dr;(function(t){t.pop="pop",t.push="push"})(dr||(dr={}));var Qn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Qn||(Qn={}));function h_(t){if(!t)if(fn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),c_(t)}const p_=/^[^#]+#/;function m_(t,e){return t.replace(p_,"#")+e}function g_(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const _s=()=>({left:window.scrollX,top:window.scrollY});function __(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=g_(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function _a(t,e){return(history.state?history.state.position-e:-1)+t}const _i=new Map;function y_(t,e){_i.set(t,e)}function b_(t){const e=_i.get(t);return _i.delete(t),e}let v_=()=>location.protocol+"//"+location.host;function Zl(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),ma(c,"")}return ma(n,t)+r+s}function w_(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const m=Zl(t,location),y=n.value,E=e.value;let I=0;if(p){if(n.value=m,e.value=p,o&&o===y){o=null;return}I=E?p.position-E.position:0}else r(m);s.forEach(P=>{P(n.value,y,{delta:I,type:dr.pop,direction:I?I>0?Qn.forward:Qn.back:Qn.unknown})})};function c(){o=n.value}function l(p){s.push(p);const m=()=>{const y=s.indexOf(p);y>-1&&s.splice(y,1)};return i.push(m),m}function u(){const{history:p}=window;p.state&&p.replaceState(J({},p.state,{scroll:_s()}),"")}function f(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:f}}function ya(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?_s():null}}function E_(t){const{history:e,location:n}=window,r={value:Zl(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const f=t.indexOf("#"),p=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+c:v_()+t+c;try{e[u?"replaceState":"pushState"](l,"",p),s.value=l}catch(m){console.error(m),n[u?"replace":"assign"](p)}}function o(c,l){const u=J({},e.state,ya(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=J({},s.value,e.state,{forward:c,scroll:_s()});i(u.current,u,!0);const f=J({},ya(r.value,c,null),{position:u.position+1},l);i(c,f,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function S_(t){t=h_(t);const e=E_(t),n=w_(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=J({location:"",base:t,go:r,createHref:m_.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function I_(t){return typeof t=="string"||t&&typeof t=="object"}function eu(t){return typeof t=="string"||typeof t=="symbol"}const tu=Symbol("");var ba;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(ba||(ba={}));function Pn(t,e){return J(new Error,{type:t,[tu]:!0},e)}function at(t,e){return t instanceof Error&&tu in t&&(e==null||!!(t.type&e))}const va="[^/]+?",T_={sensitive:!1,strict:!1,start:!0,end:!0},R_=/[.+*?^${}()[\]/\\]/g;function A_(t,e){const n=J({},T_,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let f=0;f<l.length;f++){const p=l[f];let m=40+(n.sensitive?.25:0);if(p.type===0)f||(s+="/"),s+=p.value.replace(R_,"\\$&"),m+=40;else if(p.type===1){const{value:y,repeatable:E,optional:I,regexp:P}=p;i.push({name:y,repeatable:E,optional:I});const A=P||va;if(A!==va){m+=10;try{new RegExp(`(${A})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${y}" (${A}): `+x.message)}}let O=E?`((?:${A})(?:/(?:${A}))*)`:`(${A})`;f||(O=I&&l.length<2?`(?:/${O})`:"/"+O),I&&(O+="?"),s+=O,m+=20,I&&(m+=-8),E&&(m+=-20),A===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),f={};if(!u)return null;for(let p=1;p<u.length;p++){const m=u[p]||"",y=i[p-1];f[y.name]=m&&y.repeatable?m.split("/"):m}return f}function c(l){let u="",f=!1;for(const p of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const m of p)if(m.type===0)u+=m.value;else if(m.type===1){const{value:y,repeatable:E,optional:I}=m,P=y in l?l[y]:"";if(je(P)&&!E)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const A=je(P)?P.join("/"):P;if(!A)if(I)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${y}"`);u+=A}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function C_(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function nu(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=C_(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(wa(r))return 1;if(wa(s))return-1}return s.length-r.length}function wa(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const P_={type:0,value:""},O_=/[a-zA-Z0-9_]/;function k_(t){if(!t)return[[]];if(t==="/")return[[P_]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function f(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&f(),o()):c===":"?(f(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:O_.test(c)?p():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),f(),o(),s}function N_(t,e,n){const r=A_(k_(t.path),n),s=J(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function x_(t,e){const n=[],r=new Map;e=Ta({strict:!1,end:!0,sensitive:!1},e);function s(f){return r.get(f)}function i(f,p,m){const y=!m,E=Sa(f);E.aliasOf=m&&m.record;const I=Ta(e,f),P=[E];if("alias"in f){const x=typeof f.alias=="string"?[f.alias]:f.alias;for(const $ of x)P.push(Sa(J({},E,{components:m?m.record.components:E.components,path:$,aliasOf:m?m.record:E})))}let A,O;for(const x of P){const{path:$}=x;if(p&&$[0]!=="/"){const z=p.record.path,q=z[z.length-1]==="/"?"":"/";x.path=p.record.path+($&&q+$)}if(A=N_(x,p,I),m?m.alias.push(A):(O=O||A,O!==A&&O.alias.push(A),y&&f.name&&!Ia(A)&&o(f.name)),ru(A)&&c(A),E.children){const z=E.children;for(let q=0;q<z.length;q++)i(z[q],A,m&&m.children[q])}m=m||A}return O?()=>{o(O)}:Xn}function o(f){if(eu(f)){const p=r.get(f);p&&(r.delete(f),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(f);p>-1&&(n.splice(p,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function c(f){const p=M_(f,n);n.splice(p,0,f),f.record.name&&!Ia(f)&&r.set(f.record.name,f)}function l(f,p){let m,y={},E,I;if("name"in f&&f.name){if(m=r.get(f.name),!m)throw Pn(1,{location:f});I=m.record.name,y=J(Ea(p.params,m.keys.filter(O=>!O.optional).concat(m.parent?m.parent.keys.filter(O=>O.optional):[]).map(O=>O.name)),f.params&&Ea(f.params,m.keys.map(O=>O.name))),E=m.stringify(y)}else if(f.path!=null)E=f.path,m=n.find(O=>O.re.test(E)),m&&(y=m.parse(E),I=m.record.name);else{if(m=p.name?r.get(p.name):n.find(O=>O.re.test(p.path)),!m)throw Pn(1,{location:f,currentLocation:p});I=m.record.name,y=J({},p.params,f.params),E=m.stringify(y)}const P=[];let A=m;for(;A;)P.unshift(A.record),A=A.parent;return{name:I,path:E,params:y,matched:P,meta:L_(P)}}t.forEach(f=>i(f));function u(){n.length=0,r.clear()}return{addRoute:i,resolve:l,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function Ea(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Sa(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:D_(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function D_(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Ia(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function L_(t){return t.reduce((e,n)=>J(e,n.meta),{})}function Ta(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function M_(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;nu(t,e[i])<0?r=i:n=i+1}const s=U_(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function U_(t){let e=t;for(;e=e.parent;)if(ru(e)&&nu(t,e)===0)return e}function ru({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function F_(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Gl," "),o=i.indexOf("="),a=fr(o<0?i:i.slice(0,o)),c=o<0?null:fr(i.slice(o+1));if(a in e){let l=e[a];je(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Ra(t){let e="";for(let n in t){const r=t[n];if(n=s_(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(je(r)?r.map(i=>i&&gi(i)):[r&&gi(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function B_(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=je(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const $_=Symbol(""),Aa=Symbol(""),ys=Symbol(""),su=Symbol(""),yi=Symbol("");function Fn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function At(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const l=p=>{p===!1?c(Pn(4,{from:n,to:e})):p instanceof Error?c(p):I_(p)?c(Pn(2,{from:e,to:p})):(o&&r.enterCallbacks[s]===o&&typeof p=="function"&&o.push(p),a())},u=i(()=>t.call(r&&r.instances[s],e,n,l));let f=Promise.resolve(u);t.length<3&&(f=f.then(l)),f.catch(p=>c(p))})}function qs(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Kl(c)){const u=(c.__vccOpts||c)[e];u&&i.push(At(u,n,r,o,a,s))}else{let l=c();i.push(()=>l.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=zg(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const m=(f.__vccOpts||f)[e];return m&&At(m,n,r,o,a,s)()}))}}return i}function Ca(t){const e=tt(ys),n=tt(su),r=Ue(()=>{const c=mn(t.to);return e.resolve(c)}),s=Ue(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],f=n.matched;if(!u||!f.length)return-1;const p=f.findIndex(Cn.bind(null,u));if(p>-1)return p;const m=Pa(c[l-2]);return l>1&&Pa(u)===m&&f[f.length-1].path!==m?f.findIndex(Cn.bind(null,c[l-2])):p}),i=Ue(()=>s.value>-1&&q_(n.params,r.value.params)),o=Ue(()=>s.value>-1&&s.value===n.matched.length-1&&Ql(n.params,r.value.params));function a(c={}){if(W_(c)){const l=e[mn(t.replace)?"replace":"push"](mn(t.to)).catch(Xn);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>l),l}return Promise.resolve()}return{route:r,href:Ue(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}function H_(t){return t.length===1?t[0]:t}const j_=Sc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ca,setup(t,{slots:e}){const n=cs(Ca(t)),{options:r}=tt(ys),s=Ue(()=>({[Oa(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Oa(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&H_(e.default(n));return t.custom?i:Yc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),V_=j_;function W_(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function q_(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!je(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Pa(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Oa=(t,e,n)=>t??e??n,K_=Sc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=tt(yi),s=Ue(()=>t.route||r.value),i=tt(Aa,0),o=Ue(()=>{let l=mn(i);const{matched:u}=s.value;let f;for(;(f=u[l])&&!f.components;)l++;return l}),a=Ue(()=>s.value.matched[o.value]);kr(Aa,Ue(()=>o.value+1)),kr($_,a),kr(yi,s);const c=et();return Nr(()=>[c.value,a.value,t.name],([l,u,f],[p,m,y])=>{u&&(u.instances[f]=l,m&&m!==u&&l&&l===p&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),l&&u&&(!m||!Cn(u,m)||!p)&&(u.enterCallbacks[f]||[]).forEach(E=>E(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,f=a.value,p=f&&f.components[u];if(!p)return ka(n.default,{Component:p,route:l});const m=f.props[u],y=m?m===!0?l.params:typeof m=="function"?m(l):m:null,I=Yc(p,J({},y,e,{onVnodeUnmounted:P=>{P.component.isUnmounted&&(f.instances[u]=null)},ref:c}));return ka(n.default,{Component:I,route:l})||I}}});function ka(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const z_=K_;function G_(t){const e=x_(t.routes,t),n=t.parseQuery||F_,r=t.stringifyQuery||Ra,s=t.history,i=Fn(),o=Fn(),a=Fn(),c=uf(It);let l=It;fn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Vs.bind(null,v=>""+v),f=Vs.bind(null,o_),p=Vs.bind(null,fr);function m(v,L){let N,M;return eu(v)?(N=e.getRecordMatcher(v),M=L):M=v,e.addRoute(M,N)}function y(v){const L=e.getRecordMatcher(v);L&&e.removeRoute(L)}function E(){return e.getRoutes().map(v=>v.record)}function I(v){return!!e.getRecordMatcher(v)}function P(v,L){if(L=J({},L||c.value),typeof v=="string"){const g=Ws(n,v,L.path),b=e.resolve({path:g.path},L),S=s.createHref(g.fullPath);return J(g,b,{params:p(b.params),hash:fr(g.hash),redirectedFrom:void 0,href:S})}let N;if(v.path!=null)N=J({},v,{path:Ws(n,v.path,L.path).path});else{const g=J({},v.params);for(const b in g)g[b]==null&&delete g[b];N=J({},v,{params:f(g)}),L.params=f(L.params)}const M=e.resolve(N,L),te=v.hash||"";M.params=u(p(M.params));const d=l_(r,J({},v,{hash:r_(te),path:M.path})),h=s.createHref(d);return J({fullPath:d,hash:te,query:r===Ra?B_(v.query):v.query||{}},M,{redirectedFrom:void 0,href:h})}function A(v){return typeof v=="string"?Ws(n,v,c.value.path):J({},v)}function O(v,L){if(l!==v)return Pn(8,{from:L,to:v})}function x(v){return q(v)}function $(v){return x(J(A(v),{replace:!0}))}function z(v){const L=v.matched[v.matched.length-1];if(L&&L.redirect){const{redirect:N}=L;let M=typeof N=="function"?N(v):N;return typeof M=="string"&&(M=M.includes("?")||M.includes("#")?M=A(M):{path:M},M.params={}),J({query:v.query,hash:v.hash,params:M.path!=null?{}:v.params},M)}}function q(v,L){const N=l=P(v),M=c.value,te=v.state,d=v.force,h=v.replace===!0,g=z(N);if(g)return q(J(A(g),{state:typeof g=="object"?J({},te,g.state):te,force:d,replace:h}),L||N);const b=N;b.redirectedFrom=L;let S;return!d&&u_(r,M,N)&&(S=Pn(16,{to:b,from:M}),qe(M,M,!0,!1)),(S?Promise.resolve(S):De(b,M)).catch(w=>at(w)?at(w,2)?w:Et(w):G(w,b,M)).then(w=>{if(w){if(at(w,2))return q(J({replace:h},A(w.to),{state:typeof w.to=="object"?J({},te,w.to.state):te,force:d}),L||b)}else w=Wt(b,M,!0,h,te);return wt(b,M,w),w})}function fe(v,L){const N=O(v,L);return N?Promise.reject(N):Promise.resolve()}function ye(v){const L=an.values().next().value;return L&&typeof L.runWithContext=="function"?L.runWithContext(v):v()}function De(v,L){let N;const[M,te,d]=J_(v,L);N=qs(M.reverse(),"beforeRouteLeave",v,L);for(const g of M)g.leaveGuards.forEach(b=>{N.push(At(b,v,L))});const h=fe.bind(null,v,L);return N.push(h),Le(N).then(()=>{N=[];for(const g of i.list())N.push(At(g,v,L));return N.push(h),Le(N)}).then(()=>{N=qs(te,"beforeRouteUpdate",v,L);for(const g of te)g.updateGuards.forEach(b=>{N.push(At(b,v,L))});return N.push(h),Le(N)}).then(()=>{N=[];for(const g of d)if(g.beforeEnter)if(je(g.beforeEnter))for(const b of g.beforeEnter)N.push(At(b,v,L));else N.push(At(g.beforeEnter,v,L));return N.push(h),Le(N)}).then(()=>(v.matched.forEach(g=>g.enterCallbacks={}),N=qs(d,"beforeRouteEnter",v,L,ye),N.push(h),Le(N))).then(()=>{N=[];for(const g of o.list())N.push(At(g,v,L));return N.push(h),Le(N)}).catch(g=>at(g,8)?g:Promise.reject(g))}function wt(v,L,N){a.list().forEach(M=>ye(()=>M(v,L,N)))}function Wt(v,L,N,M,te){const d=O(v,L);if(d)return d;const h=L===It,g=fn?history.state:{};N&&(M||h?s.replace(v.fullPath,J({scroll:h&&g&&g.scroll},te)):s.push(v.fullPath,te)),c.value=v,qe(v,L,N,h),Et()}let We;function Dn(){We||(We=s.listen((v,L,N)=>{if(!Tr.listening)return;const M=P(v),te=z(M);if(te){q(J(te,{replace:!0,force:!0}),M).catch(Xn);return}l=M;const d=c.value;fn&&y_(_a(d.fullPath,N.delta),_s()),De(M,d).catch(h=>at(h,12)?h:at(h,2)?(q(J(A(h.to),{force:!0}),M).then(g=>{at(g,20)&&!N.delta&&N.type===dr.pop&&s.go(-1,!1)}).catch(Xn),Promise.reject()):(N.delta&&s.go(-N.delta,!1),G(h,M,d))).then(h=>{h=h||Wt(M,d,!1),h&&(N.delta&&!at(h,8)?s.go(-N.delta,!1):N.type===dr.pop&&at(h,20)&&s.go(-1,!1)),wt(M,d,h)}).catch(Xn)}))}let sn=Fn(),ue=Fn(),ee;function G(v,L,N){Et(v);const M=ue.list();return M.length?M.forEach(te=>te(v,L,N)):console.error(v),Promise.reject(v)}function it(){return ee&&c.value!==It?Promise.resolve():new Promise((v,L)=>{sn.add([v,L])})}function Et(v){return ee||(ee=!v,Dn(),sn.list().forEach(([L,N])=>v?N(v):L()),sn.reset()),v}function qe(v,L,N,M){const{scrollBehavior:te}=t;if(!fn||!te)return Promise.resolve();const d=!N&&b_(_a(v.fullPath,0))||(M||!N)&&history.state&&history.state.scroll||null;return yc().then(()=>te(v,L,d)).then(h=>h&&__(h)).catch(h=>G(h,v,L))}const Se=v=>s.go(v);let on;const an=new Set,Tr={currentRoute:c,listening:!0,addRoute:m,removeRoute:y,clearRoutes:e.clearRoutes,hasRoute:I,getRoutes:E,resolve:P,options:t,push:x,replace:$,go:Se,back:()=>Se(-1),forward:()=>Se(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ue.add,isReady:it,install(v){const L=this;v.component("RouterLink",V_),v.component("RouterView",z_),v.config.globalProperties.$router=L,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>mn(c)}),fn&&!on&&c.value===It&&(on=!0,x(s.location).catch(te=>{}));const N={};for(const te in It)Object.defineProperty(N,te,{get:()=>c.value[te],enumerable:!0});v.provide(ys,L),v.provide(su,hc(N)),v.provide(yi,c);const M=v.unmount;an.add(v),v.unmount=function(){an.delete(v),an.size<1&&(l=It,We&&We(),We=null,c.value=It,on=!1,ee=!1),M()}}};function Le(v){return v.reduce((L,N)=>L.then(()=>ye(N)),Promise.resolve())}return Tr}function J_(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>Cn(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Cn(l,c))||s.push(c))}return[n,r,s]}function ro(){return tt(ys)}const Vt=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Y_={setup(){const t=et(!1),e=ro();return Hi(()=>{km(An,r=>{t.value=!!r})}),{isAuthenticated:t,logout:async()=>{try{await Nm(An),e.push("/login")}catch(r){alert("Ошибка: "+r.message)}}}}},X_={class:"header__main"},Q_={class:"nav__link"},Z_={class:"nav__button"};function ey(t,e,n,r,s,i){const o=Sn("router-link");return de(),Te("header",X_,[Z("div",Q_,[e[4]||(e[4]=Z("h1",null,"ПОГОДНОЕ ПРИЛОЖЕНИЕ 🌤️",-1)),Z("div",Z_,[ce(o,{class:"nav__item",to:"/"},{default:_n(()=>e[1]||(e[1]=[xt("Weather")])),_:1}),ce(o,{class:"nav__item",to:"/geo"},{default:_n(()=>e[2]||(e[2]=[xt("Geo")])),_:1}),ce(o,{class:"nav__item",to:"/soon"},{default:_n(()=>e[3]||(e[3]=[xt("Soon")])),_:1}),r.isAuthenticated?(de(),Te("button",{key:0,onClick:e[0]||(e[0]=(...a)=>r.logout&&r.logout(...a)),class:"logout-btn"},"Выйти")):On("",!0)])])])}const ty=Vt(Y_,[["render",ey],["__scopeId","data-v-c0457503"]]),ny={components:{Header:ty},setup(){const t=et(!1),e=et(!1);return Hi(()=>{An.onAuthStateChanged(n=>{t.value=!!n,e.value=!0})}),{isAuthenticated:t,isAuthChecked:e}}},ry={key:0},sy={key:1,class:"loading-screen"};function iy(t,e,n,r,s,i){const o=Sn("Header"),a=Sn("router-view");return r.isAuthChecked?(de(),Te("div",ry,[r.isAuthenticated?(de(),Vi(o,{key:0})):On("",!0),Z("main",null,[ce(a)])])):(de(),Te("div",sy,e[0]||(e[0]=[Z("p",null,"Загрузка...",-1)])))}const oy=Vt(ny,[["render",iy],["__scopeId","data-v-45230491"]]);function iu(t,e){return function(){return t.apply(e,arguments)}}const{toString:ay}=Object.prototype,{getPrototypeOf:so}=Object,bs=(t=>e=>{const n=ay.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Ve=t=>(t=t.toLowerCase(),e=>bs(e)===t),vs=t=>e=>typeof e===t,{isArray:Nn}=Array,hr=vs("undefined");function cy(t){return t!==null&&!hr(t)&&t.constructor!==null&&!hr(t.constructor)&&xe(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const ou=Ve("ArrayBuffer");function ly(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&ou(t.buffer),e}const uy=vs("string"),xe=vs("function"),au=vs("number"),ws=t=>t!==null&&typeof t=="object",fy=t=>t===!0||t===!1,Br=t=>{if(bs(t)!=="object")return!1;const e=so(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},dy=Ve("Date"),hy=Ve("File"),py=Ve("Blob"),my=Ve("FileList"),gy=t=>ws(t)&&xe(t.pipe),_y=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||xe(t.append)&&((e=bs(t))==="formdata"||e==="object"&&xe(t.toString)&&t.toString()==="[object FormData]"))},yy=Ve("URLSearchParams"),[by,vy,wy,Ey]=["ReadableStream","Request","Response","Headers"].map(Ve),Sy=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Sr(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,s;if(typeof t!="object"&&(t=[t]),Nn(t))for(r=0,s=t.length;r<s;r++)e.call(null,t[r],r,t);else{const i=n?Object.getOwnPropertyNames(t):Object.keys(t),o=i.length;let a;for(r=0;r<o;r++)a=i[r],e.call(null,t[a],a,t)}}function cu(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,s;for(;r-- >0;)if(s=n[r],e===s.toLowerCase())return s;return null}const Jt=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,lu=t=>!hr(t)&&t!==Jt;function bi(){const{caseless:t}=lu(this)&&this||{},e={},n=(r,s)=>{const i=t&&cu(e,s)||s;Br(e[i])&&Br(r)?e[i]=bi(e[i],r):Br(r)?e[i]=bi({},r):Nn(r)?e[i]=r.slice():e[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&Sr(arguments[r],n);return e}const Iy=(t,e,n,{allOwnKeys:r}={})=>(Sr(e,(s,i)=>{n&&xe(s)?t[i]=iu(s,n):t[i]=s},{allOwnKeys:r}),t),Ty=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),Ry=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},Ay=(t,e,n,r)=>{let s,i,o;const a={};if(e=e||{},t==null)return e;do{for(s=Object.getOwnPropertyNames(t),i=s.length;i-- >0;)o=s[i],(!r||r(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&so(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},Cy=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},Py=t=>{if(!t)return null;if(Nn(t))return t;let e=t.length;if(!au(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},Oy=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&so(Uint8Array)),ky=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let s;for(;(s=r.next())&&!s.done;){const i=s.value;e.call(t,i[0],i[1])}},Ny=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},xy=Ve("HTMLFormElement"),Dy=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),Na=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),Ly=Ve("RegExp"),uu=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};Sr(n,(s,i)=>{let o;(o=e(s,i,t))!==!1&&(r[i]=o||s)}),Object.defineProperties(t,r)},My=t=>{uu(t,(e,n)=>{if(xe(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(xe(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Uy=(t,e)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return Nn(t)?r(t):r(String(t).split(e)),n},Fy=()=>{},By=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e;function $y(t){return!!(t&&xe(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const Hy=t=>{const e=new Array(10),n=(r,s)=>{if(ws(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[s]=r;const i=Nn(r)?[]:{};return Sr(r,(o,a)=>{const c=n(o,s+1);!hr(c)&&(i[a]=c)}),e[s]=void 0,i}}return r};return n(t,0)},jy=Ve("AsyncFunction"),Vy=t=>t&&(ws(t)||xe(t))&&xe(t.then)&&xe(t.catch),fu=((t,e)=>t?setImmediate:e?((n,r)=>(Jt.addEventListener("message",({source:s,data:i})=>{s===Jt&&i===n&&r.length&&r.shift()()},!1),s=>{r.push(s),Jt.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",xe(Jt.postMessage)),Wy=typeof queueMicrotask<"u"?queueMicrotask.bind(Jt):typeof process<"u"&&process.nextTick||fu,_={isArray:Nn,isArrayBuffer:ou,isBuffer:cy,isFormData:_y,isArrayBufferView:ly,isString:uy,isNumber:au,isBoolean:fy,isObject:ws,isPlainObject:Br,isReadableStream:by,isRequest:vy,isResponse:wy,isHeaders:Ey,isUndefined:hr,isDate:dy,isFile:hy,isBlob:py,isRegExp:Ly,isFunction:xe,isStream:gy,isURLSearchParams:yy,isTypedArray:Oy,isFileList:my,forEach:Sr,merge:bi,extend:Iy,trim:Sy,stripBOM:Ty,inherits:Ry,toFlatObject:Ay,kindOf:bs,kindOfTest:Ve,endsWith:Cy,toArray:Py,forEachEntry:ky,matchAll:Ny,isHTMLForm:xy,hasOwnProperty:Na,hasOwnProp:Na,reduceDescriptors:uu,freezeMethods:My,toObjectSet:Uy,toCamelCase:Dy,noop:Fy,toFiniteNumber:By,findKey:cu,global:Jt,isContextDefined:lu,isSpecCompliantForm:$y,toJSONObject:Hy,isAsyncFn:jy,isThenable:Vy,setImmediate:fu,asap:Wy};function W(t,e,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s,this.status=s.status?s.status:null)}_.inherits(W,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:_.toJSONObject(this.config),code:this.code,status:this.status}}});const du=W.prototype,hu={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{hu[t]={value:t}});Object.defineProperties(W,hu);Object.defineProperty(du,"isAxiosError",{value:!0});W.from=(t,e,n,r,s,i)=>{const o=Object.create(du);return _.toFlatObject(t,o,function(c){return c!==Error.prototype},a=>a!=="isAxiosError"),W.call(o,t.message,e,n,r,s),o.cause=t,o.name=t.name,i&&Object.assign(o,i),o};const qy=null;function vi(t){return _.isPlainObject(t)||_.isArray(t)}function pu(t){return _.endsWith(t,"[]")?t.slice(0,-2):t}function xa(t,e,n){return t?t.concat(e).map(function(s,i){return s=pu(s),!n&&i?"["+s+"]":s}).join(n?".":""):e}function Ky(t){return _.isArray(t)&&!t.some(vi)}const zy=_.toFlatObject(_,{},null,function(e){return/^is[A-Z]/.test(e)});function Es(t,e,n){if(!_.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=_.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(E,I){return!_.isUndefined(I[E])});const r=n.metaTokens,s=n.visitor||u,i=n.dots,o=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&_.isSpecCompliantForm(e);if(!_.isFunction(s))throw new TypeError("visitor must be a function");function l(y){if(y===null)return"";if(_.isDate(y))return y.toISOString();if(!c&&_.isBlob(y))throw new W("Blob is not supported. Use a Buffer instead.");return _.isArrayBuffer(y)||_.isTypedArray(y)?c&&typeof Blob=="function"?new Blob([y]):Buffer.from(y):y}function u(y,E,I){let P=y;if(y&&!I&&typeof y=="object"){if(_.endsWith(E,"{}"))E=r?E:E.slice(0,-2),y=JSON.stringify(y);else if(_.isArray(y)&&Ky(y)||(_.isFileList(y)||_.endsWith(E,"[]"))&&(P=_.toArray(y)))return E=pu(E),P.forEach(function(O,x){!(_.isUndefined(O)||O===null)&&e.append(o===!0?xa([E],x,i):o===null?E:E+"[]",l(O))}),!1}return vi(y)?!0:(e.append(xa(I,E,i),l(y)),!1)}const f=[],p=Object.assign(zy,{defaultVisitor:u,convertValue:l,isVisitable:vi});function m(y,E){if(!_.isUndefined(y)){if(f.indexOf(y)!==-1)throw Error("Circular reference detected in "+E.join("."));f.push(y),_.forEach(y,function(P,A){(!(_.isUndefined(P)||P===null)&&s.call(e,P,_.isString(A)?A.trim():A,E,p))===!0&&m(P,E?E.concat(A):[A])}),f.pop()}}if(!_.isObject(t))throw new TypeError("data must be an object");return m(t),e}function Da(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function io(t,e){this._pairs=[],t&&Es(t,this,e)}const mu=io.prototype;mu.append=function(e,n){this._pairs.push([e,n])};mu.toString=function(e){const n=e?function(r){return e.call(this,r,Da)}:Da;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Gy(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function gu(t,e,n){if(!e)return t;const r=n&&n.encode||Gy;_.isFunction(n)&&(n={serialize:n});const s=n&&n.serialize;let i;if(s?i=s(e,n):i=_.isURLSearchParams(e)?e.toString():new io(e,n).toString(r),i){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+i}return t}class La{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){_.forEach(this.handlers,function(r){r!==null&&e(r)})}}const _u={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Jy=typeof URLSearchParams<"u"?URLSearchParams:io,Yy=typeof FormData<"u"?FormData:null,Xy=typeof Blob<"u"?Blob:null,Qy={isBrowser:!0,classes:{URLSearchParams:Jy,FormData:Yy,Blob:Xy},protocols:["http","https","file","blob","url","data"]},oo=typeof window<"u"&&typeof document<"u",wi=typeof navigator=="object"&&navigator||void 0,Zy=oo&&(!wi||["ReactNative","NativeScript","NS"].indexOf(wi.product)<0),eb=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",tb=oo&&window.location.href||"http://localhost",nb=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:oo,hasStandardBrowserEnv:Zy,hasStandardBrowserWebWorkerEnv:eb,navigator:wi,origin:tb},Symbol.toStringTag,{value:"Module"})),me={...nb,...Qy};function rb(t,e){return Es(t,new me.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,i){return me.isNode&&_.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},e))}function sb(t){return _.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function ib(t){const e={},n=Object.keys(t);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],e[i]=t[i];return e}function yu(t){function e(n,r,s,i){let o=n[i++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),c=i>=n.length;return o=!o&&_.isArray(s)?s.length:o,c?(_.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!a):((!s[o]||!_.isObject(s[o]))&&(s[o]=[]),e(n,r,s[o],i)&&_.isArray(s[o])&&(s[o]=ib(s[o])),!a)}if(_.isFormData(t)&&_.isFunction(t.entries)){const n={};return _.forEachEntry(t,(r,s)=>{e(sb(r),s,n,0)}),n}return null}function ob(t,e,n){if(_.isString(t))try{return(e||JSON.parse)(t),_.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const Ir={transitional:_u,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=_.isObject(e);if(i&&_.isHTMLForm(e)&&(e=new FormData(e)),_.isFormData(e))return s?JSON.stringify(yu(e)):e;if(_.isArrayBuffer(e)||_.isBuffer(e)||_.isStream(e)||_.isFile(e)||_.isBlob(e)||_.isReadableStream(e))return e;if(_.isArrayBufferView(e))return e.buffer;if(_.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return rb(e,this.formSerializer).toString();if((a=_.isFileList(e))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return Es(a?{"files[]":e}:e,c&&new c,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),ob(e)):e}],transformResponse:[function(e){const n=this.transitional||Ir.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(_.isResponse(e)||_.isReadableStream(e))return e;if(e&&_.isString(e)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?W.from(a,W.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:me.classes.FormData,Blob:me.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};_.forEach(["delete","get","head","post","put","patch"],t=>{Ir.headers[t]={}});const ab=_.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),cb=t=>{const e={};let n,r,s;return t&&t.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||e[n]&&ab[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},Ma=Symbol("internals");function Bn(t){return t&&String(t).trim().toLowerCase()}function $r(t){return t===!1||t==null?t:_.isArray(t)?t.map($r):String(t)}function lb(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const ub=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function Ks(t,e,n,r,s){if(_.isFunction(r))return r.call(this,e,n);if(s&&(e=n),!!_.isString(e)){if(_.isString(r))return e.indexOf(r)!==-1;if(_.isRegExp(r))return r.test(e)}}function fb(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function db(t,e){const n=_.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(s,i,o){return this[r].call(this,e,s,i,o)},configurable:!0})})}let Re=class{constructor(e){e&&this.set(e)}set(e,n,r){const s=this;function i(a,c,l){const u=Bn(c);if(!u)throw new Error("header name must be a non-empty string");const f=_.findKey(s,u);(!f||s[f]===void 0||l===!0||l===void 0&&s[f]!==!1)&&(s[f||c]=$r(a))}const o=(a,c)=>_.forEach(a,(l,u)=>i(l,u,c));if(_.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(_.isString(e)&&(e=e.trim())&&!ub(e))o(cb(e),n);else if(_.isHeaders(e))for(const[a,c]of e.entries())i(c,a,r);else e!=null&&i(n,e,r);return this}get(e,n){if(e=Bn(e),e){const r=_.findKey(this,e);if(r){const s=this[r];if(!n)return s;if(n===!0)return lb(s);if(_.isFunction(n))return n.call(this,s,r);if(_.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Bn(e),e){const r=_.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||Ks(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let s=!1;function i(o){if(o=Bn(o),o){const a=_.findKey(r,o);a&&(!n||Ks(r,r[a],a,n))&&(delete r[a],s=!0)}}return _.isArray(e)?e.forEach(i):i(e),s}clear(e){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!e||Ks(this,this[i],i,e,!0))&&(delete this[i],s=!0)}return s}normalize(e){const n=this,r={};return _.forEach(this,(s,i)=>{const o=_.findKey(r,i);if(o){n[o]=$r(s),delete n[i];return}const a=e?fb(i):String(i).trim();a!==i&&delete n[i],n[a]=$r(s),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return _.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=e&&_.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(s=>r.set(s)),r}static accessor(e){const r=(this[Ma]=this[Ma]={accessors:{}}).accessors,s=this.prototype;function i(o){const a=Bn(o);r[a]||(db(s,o),r[a]=!0)}return _.isArray(e)?e.forEach(i):i(e),this}};Re.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);_.reduceDescriptors(Re.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});_.freezeMethods(Re);function zs(t,e){const n=this||Ir,r=e||n,s=Re.from(r.headers);let i=r.data;return _.forEach(t,function(a){i=a.call(n,i,s.normalize(),e?e.status:void 0)}),s.normalize(),i}function bu(t){return!!(t&&t.__CANCEL__)}function xn(t,e,n){W.call(this,t??"canceled",W.ERR_CANCELED,e,n),this.name="CanceledError"}_.inherits(xn,W,{__CANCEL__:!0});function vu(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new W("Request failed with status code "+n.status,[W.ERR_BAD_REQUEST,W.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function hb(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function pb(t,e){t=t||10;const n=new Array(t),r=new Array(t);let s=0,i=0,o;return e=e!==void 0?e:1e3,function(c){const l=Date.now(),u=r[i];o||(o=l),n[s]=c,r[s]=l;let f=i,p=0;for(;f!==s;)p+=n[f++],f=f%t;if(s=(s+1)%t,s===i&&(i=(i+1)%t),l-o<e)return;const m=u&&l-u;return m?Math.round(p*1e3/m):void 0}}function mb(t,e){let n=0,r=1e3/e,s,i;const o=(l,u=Date.now())=>{n=u,s=null,i&&(clearTimeout(i),i=null),t.apply(null,l)};return[(...l)=>{const u=Date.now(),f=u-n;f>=r?o(l,u):(s=l,i||(i=setTimeout(()=>{i=null,o(s)},r-f)))},()=>s&&o(s)]}const ts=(t,e,n=3)=>{let r=0;const s=pb(50,250);return mb(i=>{const o=i.loaded,a=i.lengthComputable?i.total:void 0,c=o-r,l=s(c),u=o<=a;r=o;const f={loaded:o,total:a,progress:a?o/a:void 0,bytes:c,rate:l||void 0,estimated:l&&a&&u?(a-o)/l:void 0,event:i,lengthComputable:a!=null,[e?"download":"upload"]:!0};t(f)},n)},Ua=(t,e)=>{const n=t!=null;return[r=>e[0]({lengthComputable:n,total:t,loaded:r}),e[1]]},Fa=t=>(...e)=>_.asap(()=>t(...e)),gb=me.hasStandardBrowserEnv?((t,e)=>n=>(n=new URL(n,me.origin),t.protocol===n.protocol&&t.host===n.host&&(e||t.port===n.port)))(new URL(me.origin),me.navigator&&/(msie|trident)/i.test(me.navigator.userAgent)):()=>!0,_b=me.hasStandardBrowserEnv?{write(t,e,n,r,s,i){const o=[t+"="+encodeURIComponent(e)];_.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),_.isString(r)&&o.push("path="+r),_.isString(s)&&o.push("domain="+s),i===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function yb(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function bb(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function wu(t,e,n){let r=!yb(e);return t&&r||n==!1?bb(t,e):e}const Ba=t=>t instanceof Re?{...t}:t;function nn(t,e){e=e||{};const n={};function r(l,u,f,p){return _.isPlainObject(l)&&_.isPlainObject(u)?_.merge.call({caseless:p},l,u):_.isPlainObject(u)?_.merge({},u):_.isArray(u)?u.slice():u}function s(l,u,f,p){if(_.isUndefined(u)){if(!_.isUndefined(l))return r(void 0,l,f,p)}else return r(l,u,f,p)}function i(l,u){if(!_.isUndefined(u))return r(void 0,u)}function o(l,u){if(_.isUndefined(u)){if(!_.isUndefined(l))return r(void 0,l)}else return r(void 0,u)}function a(l,u,f){if(f in e)return r(l,u);if(f in t)return r(void 0,l)}const c={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(l,u,f)=>s(Ba(l),Ba(u),f,!0)};return _.forEach(Object.keys(Object.assign({},t,e)),function(u){const f=c[u]||s,p=f(t[u],e[u],u);_.isUndefined(p)&&f!==a||(n[u]=p)}),n}const Eu=t=>{const e=nn({},t);let{data:n,withXSRFToken:r,xsrfHeaderName:s,xsrfCookieName:i,headers:o,auth:a}=e;e.headers=o=Re.from(o),e.url=gu(wu(e.baseURL,e.url),t.params,t.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let c;if(_.isFormData(n)){if(me.hasStandardBrowserEnv||me.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if((c=o.getContentType())!==!1){const[l,...u]=c?c.split(";").map(f=>f.trim()).filter(Boolean):[];o.setContentType([l||"multipart/form-data",...u].join("; "))}}if(me.hasStandardBrowserEnv&&(r&&_.isFunction(r)&&(r=r(e)),r||r!==!1&&gb(e.url))){const l=s&&i&&_b.read(i);l&&o.set(s,l)}return e},vb=typeof XMLHttpRequest<"u",wb=vb&&function(t){return new Promise(function(n,r){const s=Eu(t);let i=s.data;const o=Re.from(s.headers).normalize();let{responseType:a,onUploadProgress:c,onDownloadProgress:l}=s,u,f,p,m,y;function E(){m&&m(),y&&y(),s.cancelToken&&s.cancelToken.unsubscribe(u),s.signal&&s.signal.removeEventListener("abort",u)}let I=new XMLHttpRequest;I.open(s.method.toUpperCase(),s.url,!0),I.timeout=s.timeout;function P(){if(!I)return;const O=Re.from("getAllResponseHeaders"in I&&I.getAllResponseHeaders()),$={data:!a||a==="text"||a==="json"?I.responseText:I.response,status:I.status,statusText:I.statusText,headers:O,config:t,request:I};vu(function(q){n(q),E()},function(q){r(q),E()},$),I=null}"onloadend"in I?I.onloadend=P:I.onreadystatechange=function(){!I||I.readyState!==4||I.status===0&&!(I.responseURL&&I.responseURL.indexOf("file:")===0)||setTimeout(P)},I.onabort=function(){I&&(r(new W("Request aborted",W.ECONNABORTED,t,I)),I=null)},I.onerror=function(){r(new W("Network Error",W.ERR_NETWORK,t,I)),I=null},I.ontimeout=function(){let x=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const $=s.transitional||_u;s.timeoutErrorMessage&&(x=s.timeoutErrorMessage),r(new W(x,$.clarifyTimeoutError?W.ETIMEDOUT:W.ECONNABORTED,t,I)),I=null},i===void 0&&o.setContentType(null),"setRequestHeader"in I&&_.forEach(o.toJSON(),function(x,$){I.setRequestHeader($,x)}),_.isUndefined(s.withCredentials)||(I.withCredentials=!!s.withCredentials),a&&a!=="json"&&(I.responseType=s.responseType),l&&([p,y]=ts(l,!0),I.addEventListener("progress",p)),c&&I.upload&&([f,m]=ts(c),I.upload.addEventListener("progress",f),I.upload.addEventListener("loadend",m)),(s.cancelToken||s.signal)&&(u=O=>{I&&(r(!O||O.type?new xn(null,t,I):O),I.abort(),I=null)},s.cancelToken&&s.cancelToken.subscribe(u),s.signal&&(s.signal.aborted?u():s.signal.addEventListener("abort",u)));const A=hb(s.url);if(A&&me.protocols.indexOf(A)===-1){r(new W("Unsupported protocol "+A+":",W.ERR_BAD_REQUEST,t));return}I.send(i||null)})},Eb=(t,e)=>{const{length:n}=t=t?t.filter(Boolean):[];if(e||n){let r=new AbortController,s;const i=function(l){if(!s){s=!0,a();const u=l instanceof Error?l:this.reason;r.abort(u instanceof W?u:new xn(u instanceof Error?u.message:u))}};let o=e&&setTimeout(()=>{o=null,i(new W(`timeout ${e} of ms exceeded`,W.ETIMEDOUT))},e);const a=()=>{t&&(o&&clearTimeout(o),o=null,t.forEach(l=>{l.unsubscribe?l.unsubscribe(i):l.removeEventListener("abort",i)}),t=null)};t.forEach(l=>l.addEventListener("abort",i));const{signal:c}=r;return c.unsubscribe=()=>_.asap(a),c}},Sb=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let r=0,s;for(;r<n;)s=r+e,yield t.slice(r,s),r=s},Ib=async function*(t,e){for await(const n of Tb(t))yield*Sb(n,e)},Tb=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:r}=await e.read();if(n)break;yield r}}finally{await e.cancel()}},$a=(t,e,n,r)=>{const s=Ib(t,e);let i=0,o,a=c=>{o||(o=!0,r&&r(c))};return new ReadableStream({async pull(c){try{const{done:l,value:u}=await s.next();if(l){a(),c.close();return}let f=u.byteLength;if(n){let p=i+=f;n(p)}c.enqueue(new Uint8Array(u))}catch(l){throw a(l),l}},cancel(c){return a(c),s.return()}},{highWaterMark:2})},Ss=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Su=Ss&&typeof ReadableStream=="function",Rb=Ss&&(typeof TextEncoder=="function"?(t=>e=>t.encode(e))(new TextEncoder):async t=>new Uint8Array(await new Response(t).arrayBuffer())),Iu=(t,...e)=>{try{return!!t(...e)}catch{return!1}},Ab=Su&&Iu(()=>{let t=!1;const e=new Request(me.origin,{body:new ReadableStream,method:"POST",get duplex(){return t=!0,"half"}}).headers.has("Content-Type");return t&&!e}),Ha=64*1024,Ei=Su&&Iu(()=>_.isReadableStream(new Response("").body)),ns={stream:Ei&&(t=>t.body)};Ss&&(t=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!ns[e]&&(ns[e]=_.isFunction(t[e])?n=>n[e]():(n,r)=>{throw new W(`Response type '${e}' is not supported`,W.ERR_NOT_SUPPORT,r)})})})(new Response);const Cb=async t=>{if(t==null)return 0;if(_.isBlob(t))return t.size;if(_.isSpecCompliantForm(t))return(await new Request(me.origin,{method:"POST",body:t}).arrayBuffer()).byteLength;if(_.isArrayBufferView(t)||_.isArrayBuffer(t))return t.byteLength;if(_.isURLSearchParams(t)&&(t=t+""),_.isString(t))return(await Rb(t)).byteLength},Pb=async(t,e)=>{const n=_.toFiniteNumber(t.getContentLength());return n??Cb(e)},Ob=Ss&&(async t=>{let{url:e,method:n,data:r,signal:s,cancelToken:i,timeout:o,onDownloadProgress:a,onUploadProgress:c,responseType:l,headers:u,withCredentials:f="same-origin",fetchOptions:p}=Eu(t);l=l?(l+"").toLowerCase():"text";let m=Eb([s,i&&i.toAbortSignal()],o),y;const E=m&&m.unsubscribe&&(()=>{m.unsubscribe()});let I;try{if(c&&Ab&&n!=="get"&&n!=="head"&&(I=await Pb(u,r))!==0){let $=new Request(e,{method:"POST",body:r,duplex:"half"}),z;if(_.isFormData(r)&&(z=$.headers.get("content-type"))&&u.setContentType(z),$.body){const[q,fe]=Ua(I,ts(Fa(c)));r=$a($.body,Ha,q,fe)}}_.isString(f)||(f=f?"include":"omit");const P="credentials"in Request.prototype;y=new Request(e,{...p,signal:m,method:n.toUpperCase(),headers:u.normalize().toJSON(),body:r,duplex:"half",credentials:P?f:void 0});let A=await fetch(y);const O=Ei&&(l==="stream"||l==="response");if(Ei&&(a||O&&E)){const $={};["status","statusText","headers"].forEach(ye=>{$[ye]=A[ye]});const z=_.toFiniteNumber(A.headers.get("content-length")),[q,fe]=a&&Ua(z,ts(Fa(a),!0))||[];A=new Response($a(A.body,Ha,q,()=>{fe&&fe(),E&&E()}),$)}l=l||"text";let x=await ns[_.findKey(ns,l)||"text"](A,t);return!O&&E&&E(),await new Promise(($,z)=>{vu($,z,{data:x,headers:Re.from(A.headers),status:A.status,statusText:A.statusText,config:t,request:y})})}catch(P){throw E&&E(),P&&P.name==="TypeError"&&/fetch/i.test(P.message)?Object.assign(new W("Network Error",W.ERR_NETWORK,t,y),{cause:P.cause||P}):W.from(P,P&&P.code,t,y)}}),Si={http:qy,xhr:wb,fetch:Ob};_.forEach(Si,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const ja=t=>`- ${t}`,kb=t=>_.isFunction(t)||t===null||t===!1,Tu={getAdapter:t=>{t=_.isArray(t)?t:[t];const{length:e}=t;let n,r;const s={};for(let i=0;i<e;i++){n=t[i];let o;if(r=n,!kb(n)&&(r=Si[(o=String(n)).toLowerCase()],r===void 0))throw new W(`Unknown adapter '${o}'`);if(r)break;s[o||"#"+i]=r}if(!r){const i=Object.entries(s).map(([a,c])=>`adapter ${a} `+(c===!1?"is not supported by the environment":"is not available in the build"));let o=e?i.length>1?`since :
`+i.map(ja).join(`
`):" "+ja(i[0]):"as no adapter specified";throw new W("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:Si};function Gs(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new xn(null,t)}function Va(t){return Gs(t),t.headers=Re.from(t.headers),t.data=zs.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),Tu.getAdapter(t.adapter||Ir.adapter)(t).then(function(r){return Gs(t),r.data=zs.call(t,t.transformResponse,r),r.headers=Re.from(r.headers),r},function(r){return bu(r)||(Gs(t),r&&r.response&&(r.response.data=zs.call(t,t.transformResponse,r.response),r.response.headers=Re.from(r.response.headers))),Promise.reject(r)})}const Ru="1.8.1",Is={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Is[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const Wa={};Is.transitional=function(e,n,r){function s(i,o){return"[Axios v"+Ru+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,a)=>{if(e===!1)throw new W(s(o," has been removed"+(n?" in "+n:"")),W.ERR_DEPRECATED);return n&&!Wa[o]&&(Wa[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(i,o,a):!0}};Is.spelling=function(e){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${e}`),!0)};function Nb(t,e,n){if(typeof t!="object")throw new W("options must be an object",W.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let s=r.length;for(;s-- >0;){const i=r[s],o=e[i];if(o){const a=t[i],c=a===void 0||o(a,i,t);if(c!==!0)throw new W("option "+i+" must be "+c,W.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new W("Unknown option "+i,W.ERR_BAD_OPTION)}}const Hr={assertOptions:Nb,validators:Is},Ye=Hr.validators;let Xt=class{constructor(e){this.defaults=e,this.interceptors={request:new La,response:new La}}async request(e,n){try{return await this._request(e,n)}catch(r){if(r instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const i=s.stack?s.stack.replace(/^.+\n/,""):"";try{r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}catch{}}throw r}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=nn(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&Hr.assertOptions(r,{silentJSONParsing:Ye.transitional(Ye.boolean),forcedJSONParsing:Ye.transitional(Ye.boolean),clarifyTimeoutError:Ye.transitional(Ye.boolean)},!1),s!=null&&(_.isFunction(s)?n.paramsSerializer={serialize:s}:Hr.assertOptions(s,{encode:Ye.function,serialize:Ye.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),Hr.assertOptions(n,{baseUrl:Ye.spelling("baseURL"),withXsrfToken:Ye.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=i&&_.merge(i.common,i[n.method]);i&&_.forEach(["delete","get","head","post","put","patch","common"],y=>{delete i[y]}),n.headers=Re.concat(o,i);const a=[];let c=!0;this.interceptors.request.forEach(function(E){typeof E.runWhen=="function"&&E.runWhen(n)===!1||(c=c&&E.synchronous,a.unshift(E.fulfilled,E.rejected))});const l=[];this.interceptors.response.forEach(function(E){l.push(E.fulfilled,E.rejected)});let u,f=0,p;if(!c){const y=[Va.bind(this),void 0];for(y.unshift.apply(y,a),y.push.apply(y,l),p=y.length,u=Promise.resolve(n);f<p;)u=u.then(y[f++],y[f++]);return u}p=a.length;let m=n;for(f=0;f<p;){const y=a[f++],E=a[f++];try{m=y(m)}catch(I){E.call(this,I);break}}try{u=Va.call(this,m)}catch(y){return Promise.reject(y)}for(f=0,p=l.length;f<p;)u=u.then(l[f++],l[f++]);return u}getUri(e){e=nn(this.defaults,e);const n=wu(e.baseURL,e.url,e.allowAbsoluteUrls);return gu(n,e.params,e.paramsSerializer)}};_.forEach(["delete","get","head","options"],function(e){Xt.prototype[e]=function(n,r){return this.request(nn(r||{},{method:e,url:n,data:(r||{}).data}))}});_.forEach(["post","put","patch"],function(e){function n(r){return function(i,o,a){return this.request(nn(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}Xt.prototype[e]=n(),Xt.prototype[e+"Form"]=n(!0)});let xb=class Au{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(a=>{r.subscribe(a),i=a}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},e(function(i,o,a){r.reason||(r.reason=new xn(i,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=r=>{e.abort(r)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new Au(function(s){e=s}),cancel:e}}};function Db(t){return function(n){return t.apply(null,n)}}function Lb(t){return _.isObject(t)&&t.isAxiosError===!0}const Ii={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ii).forEach(([t,e])=>{Ii[e]=t});function Cu(t){const e=new Xt(t),n=iu(Xt.prototype.request,e);return _.extend(n,Xt.prototype,e,{allOwnKeys:!0}),_.extend(n,e,null,{allOwnKeys:!0}),n.create=function(s){return Cu(nn(t,s))},n}const ae=Cu(Ir);ae.Axios=Xt;ae.CanceledError=xn;ae.CancelToken=xb;ae.isCancel=bu;ae.VERSION=Ru;ae.toFormData=Es;ae.AxiosError=W;ae.Cancel=ae.CanceledError;ae.all=function(e){return Promise.all(e)};ae.spread=Db;ae.isAxiosError=Lb;ae.mergeConfig=nn;ae.AxiosHeaders=Re;ae.formToJSON=t=>yu(_.isHTMLForm(t)?new FormData(t):t);ae.getAdapter=Tu.getAdapter;ae.HttpStatusCode=Ii;ae.default=ae;const{Axios:pv,AxiosError:mv,CanceledError:gv,isCancel:_v,CancelToken:yv,VERSION:bv,all:vv,Cancel:wv,isAxiosError:Ev,spread:Sv,toFormData:Iv,AxiosHeaders:Tv,HttpStatusCode:Rv,formToJSON:Av,getAdapter:Cv,mergeConfig:Pv}=ae,Mb={name:"WeatherInfo",props:{info:Object}},Ub={key:0,class:"info"};function Fb(t,e,n,r,s,i){return n.info?(de(),Te("div",Ub,[Z("p",null,"Температура: "+dt(n.info.main.temp)+" °C 🌡️",1),Z("p",null,"Мин. температура: "+dt(n.info.main.temp_min)+" °C 🥶",1),Z("p",null,"Макс. температура: "+dt(n.info.main.temp_max)+" °C 🔥",1),Z("p",null,"Ощущается как: "+dt(n.info.main.feels_like)+" °C 😊",1)])):On("",!0)}const Bb=Vt(Mb,[["render",Fb],["__scopeId","data-v-c29cbc3d"]]),$b="e4b8dae9c016bcfe92c817baece9fde2",Hb={name:"Home",components:{WeatherInfo:Bb},data(){return{city:"",error:"",info:null}},methods:{getWeather(){if(this.city.trim().length<2){this.error="Нужно название больше одного символа",this.info=null;return}this.error="",ae.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${$b}`).then(t=>this.info=t.data).catch(()=>{this.error="Город не найден",this.info=null})}}},jb={class:"wrapper"},Vb={class:"info"},Wb={key:1,disabled:""};function qb(t,e,n,r,s,i){const o=Sn("WeatherInfo");return de(),Te("div",jb,[Z("p",null,"Узнать погоду в "+dt(s.city==""?"Вашем городе":s.city),1),Z("div",Vb,[nr(Z("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=a=>s.city=a),placeholder:"Укажите город",onKeyup:e[1]||(e[1]=or(a=>i.getWeather(),["enter"]))},null,544),[[ir,s.city]]),s.city!=""?(de(),Te("button",{key:0,onClick:e[2]||(e[2]=a=>i.getWeather())},"Узнать погоду")):(de(),Te("button",Wb,"Укажите название города"))]),Z("p",null,dt(s.error),1),s.info?(de(),Vi(o,{key:0,info:s.info},null,8,["info"])):On("",!0)])}const Kb=Vt(Hb,[["render",qb],["__scopeId","data-v-f3181c49"]]),zb={name:"Geo"},Gb={class:"info"};function Jb(t,e,n,r,s,i){return de(),Te("div",Gb,e[0]||(e[0]=[Z("h1",null,"Геолокация",-1),Z("p",null,"Здесь будет информация о местоположении.",-1)]))}const Yb=Vt(zb,[["render",Jb],["__scopeId","data-v-542dff95"]]),Xb={name:"Soon"},Qb={class:"info"};function Zb(t,e,n,r,s,i){return de(),Te("div",Qb,e[0]||(e[0]=[Z("h1",null,"Скоро",-1),Z("p",null,"Эта страница в разработке.",-1)]))}const ev=Vt(Xb,[["render",Zb],["__scopeId","data-v-8de96c1c"]]),tv={data(){return{email:"",password:""}},setup(){const t=et(""),e=et(""),n=et(""),r=ro();return{email:t,password:e,errorMessage:n,login:async()=>{try{await Cm(An,t.value,e.value),r.push("/")}catch{n.value="Неправильный логин или пароль"}}}}},nv={class:"auth-container"},rv={key:0,class:"error"};function sv(t,e,n,r,s,i){const o=Sn("router-link");return de(),Te("div",nv,[e[7]||(e[7]=Z("h2",null,"Вход",-1)),nr(Z("input",{type:"email","onUpdate:modelValue":e[0]||(e[0]=a=>r.email=a),placeholder:"Email",onKeyup:e[1]||(e[1]=or((...a)=>r.login&&r.login(...a),["enter"]))},null,544),[[ir,r.email]]),nr(Z("input",{type:"password","onUpdate:modelValue":e[2]||(e[2]=a=>r.password=a),placeholder:"Пароль",onKeyup:e[3]||(e[3]=or((...a)=>r.login&&r.login(...a),["enter"]))},null,544),[[ir,r.password]]),Z("button",{onClick:e[4]||(e[4]=(...a)=>r.login&&r.login(...a))},"Войти"),r.errorMessage?(de(),Te("p",rv,dt(r.errorMessage),1)):On("",!0),Z("p",null,[e[6]||(e[6]=xt("Нет аккаунта? ")),ce(o,{class:"reg",to:"/register"},{default:_n(()=>e[5]||(e[5]=[xt("Регистрация")])),_:1})])])}const iv=Vt(tv,[["render",sv],["__scopeId","data-v-67a06347"]]),ov={setup(){const t=et(""),e=et(""),n=ro(),r=et("");return{email:t,password:e,errorMessage:r,register:async()=>{const i=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,o=/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/;if(!i.test(t.value)){r.value="Некорректный email";return}o.test(e.value)||(r.value="Ваш пароль должен содержать минимум 6 символов, 1 заглавную букву и 1 цифру");try{await Am(An,t.value,e.value),n.push("/")}catch{return}}}}},av={class:"auth-container"},cv={key:0,class:"error"};function lv(t,e,n,r,s,i){const o=Sn("router-link");return de(),Te("div",av,[e[7]||(e[7]=Z("h2",null,"Регистрация",-1)),nr(Z("input",{type:"email","onUpdate:modelValue":e[0]||(e[0]=a=>r.email=a),placeholder:"Email",onKeyup:e[1]||(e[1]=or((...a)=>r.register&&r.register(...a),["enter"]))},null,544),[[ir,r.email]]),nr(Z("input",{type:"password","onUpdate:modelValue":e[2]||(e[2]=a=>r.password=a),placeholder:"Пароль",onKeyup:e[3]||(e[3]=or((...a)=>r.register&&r.register(...a),["enter"]))},null,544),[[ir,r.password]]),Z("button",{onClick:e[4]||(e[4]=(...a)=>r.register&&r.register(...a))},"Зарегистрироваться"),r.errorMessage?(de(),Te("p",cv,dt(r.errorMessage),1)):On("",!0),Z("p",null,[e[6]||(e[6]=xt("Уже есть аккаунт? ")),ce(o,{class:"log",to:"/login"},{default:_n(()=>e[5]||(e[5]=[xt("Войти")])),_:1})])])}const uv=Vt(ov,[["render",lv],["__scopeId","data-v-d2a4fe5b"]]),fv=[{path:"/",component:Kb,meta:{requiresAuth:!0}},{path:"/geo",component:Yb,meta:{requiresAuth:!0}},{path:"/soon",component:ev,meta:{requiresAuth:!0}},{path:"/login",component:iv,meta:{requiresGuest:!0}},{path:"/register",component:uv,meta:{requiresGuest:!0}}],Pu=G_({history:S_("/VueWeather/"),routes:fv});Pu.beforeEach(async(t,e,n)=>{const r=An.currentUser;t.meta.requiresAuth&&!r?n("/login"):t.meta.requiresGuest&&r?n("/"):n()});const Ou=zd(oy);Ou.use(Pu);Ou.mount("#app");
