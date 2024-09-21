(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function s(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(i){if(i.ep)return;i.ep=!0;const n=s(i);fetch(i.href,n)}})();/**
* @vue/shared v3.5.5
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function qs(t){const e=Object.create(null);for(const s of t.split(","))e[s]=1;return s=>s in e}const F={},oe=[],Wt=()=>{},an=()=>!1,_s=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Zs=t=>t.startsWith("onUpdate:"),et=Object.assign,Ys=(t,e)=>{const s=t.indexOf(e);s>-1&&t.splice(s,1)},un=Object.prototype.hasOwnProperty,R=(t,e)=>un.call(t,e),N=Array.isArray,ae=t=>Re(t)==="[object Map]",ms=t=>Re(t)==="[object Set]",kl=t=>Re(t)==="[object Date]",W=t=>typeof t=="function",q=t=>typeof t=="string",jt=t=>typeof t=="symbol",K=t=>t!==null&&typeof t=="object",si=t=>(K(t)||W(t))&&W(t.then)&&W(t.catch),li=Object.prototype.toString,Re=t=>li.call(t),dn=t=>Re(t).slice(8,-1),ii=t=>Re(t)==="[object Object]",Qs=t=>q(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Te=qs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),gs=t=>{const e=Object.create(null);return s=>e[s]||(e[s]=t(s))},_n=/-(\w)/g,St=gs(t=>t.replace(_n,(e,s)=>s?s.toUpperCase():"")),mn=/\B([A-Z])/g,ie=gs(t=>t.replace(mn,"-$1").toLowerCase()),fs=gs(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ds=gs(t=>t?`on${fs(t)}`:""),se=(t,e)=>!Object.is(t,e),Qe=(t,...e)=>{for(let s=0;s<t.length;s++)t[s](...e)},ni=(t,e,s,l=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:l,value:s})},is=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let wl;const ri=()=>wl||(wl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Xs(t){if(N(t)){const e={};for(let s=0;s<t.length;s++){const l=t[s],i=q(l)?hn(l):Xs(l);if(i)for(const n in i)e[n]=i[n]}return e}else if(q(t)||K(t))return t}const gn=/;(?![^(]*\))/g,fn=/:([^]+)/,xn=/\/\*[^]*?\*\//g;function hn(t){const e={};return t.replace(xn,"").split(gn).forEach(s=>{if(s){const l=s.split(fn);l.length>1&&(e[l[0].trim()]=l[1].trim())}}),e}function Pt(t){let e="";if(q(t))e=t;else if(N(t))for(let s=0;s<t.length;s++){const l=Pt(t[s]);l&&(e+=l+" ")}else if(K(t))for(const s in t)t[s]&&(e+=s+" ");return e.trim()}const cn="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",pn=qs(cn);function oi(t){return!!t||t===""}function bn(t,e){if(t.length!==e.length)return!1;let s=!0;for(let l=0;s&&l<t.length;l++)s=xs(t[l],e[l]);return s}function xs(t,e){if(t===e)return!0;let s=kl(t),l=kl(e);if(s||l)return s&&l?t.getTime()===e.getTime():!1;if(s=jt(t),l=jt(e),s||l)return t===e;if(s=N(t),l=N(e),s||l)return s&&l?bn(t,e):!1;if(s=K(t),l=K(e),s||l){if(!s||!l)return!1;const i=Object.keys(t).length,n=Object.keys(e).length;if(i!==n)return!1;for(const r in t){const o=t.hasOwnProperty(r),u=e.hasOwnProperty(r);if(o&&!u||!o&&u||!xs(t[r],e[r]))return!1}}return String(t)===String(e)}function An(t,e){return t.findIndex(s=>xs(s,e))}const ai=t=>!!(t&&t.__v_isRef===!0),bt=t=>q(t)?t:t==null?"":N(t)||K(t)&&(t.toString===li||!W(t.toString))?ai(t)?bt(t.value):JSON.stringify(t,ui,2):String(t),ui=(t,e)=>ai(e)?ui(t,e.value):ae(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((s,[l,i],n)=>(s[ys(l,n)+" =>"]=i,s),{})}:ms(e)?{[`Set(${e.size})`]:[...e.values()].map(s=>ys(s))}:jt(e)?ys(e):K(e)&&!N(e)&&!ii(e)?String(e):e,ys=(t,e="")=>{var s;return jt(t)?`Symbol(${(s=t.description)!=null?s:e})`:t};/**
* @vue/reactivity v3.5.5
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ft;class kn{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=ft,!e&&ft&&(this.index=(ft.scopes||(ft.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,s;if(this.scopes)for(e=0,s=this.scopes.length;e<s;e++)this.scopes[e].pause();for(e=0,s=this.effects.length;e<s;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,s;if(this.scopes)for(e=0,s=this.scopes.length;e<s;e++)this.scopes[e].resume();for(e=0,s=this.effects.length;e<s;e++)this.effects[e].resume()}}run(e){if(this._active){const s=ft;try{return ft=this,e()}finally{ft=s}}}on(){ft=this}off(){ft=this.parent}stop(e){if(this._active){let s,l;for(s=0,l=this.effects.length;s<l;s++)this.effects[s].stop();for(s=0,l=this.cleanups.length;s<l;s++)this.cleanups[s]();if(this.scopes)for(s=0,l=this.scopes.length;s<l;s++)this.scopes[s].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function wn(){return ft}let z;const Ns=new WeakSet;class di{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.nextEffect=void 0,this.cleanup=void 0,this.scheduler=void 0,ft&&ft.active&&ft.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ns.has(this)&&(Ns.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||(this.flags|=8,this.nextEffect=De,De=this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,El(this),mi(this);const e=z,s=wt;z=this,wt=!0;try{return this.fn()}finally{gi(this),z=e,wt=s,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)sl(e);this.deps=this.depsTail=void 0,El(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ns.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Hs(this)&&this.run()}get dirty(){return Hs(this)}}let _i=0,De;function tl(){_i++}function el(){if(--_i>0)return;let t;for(;De;){let e=De;for(De=void 0;e;){const s=e.nextEffect;if(e.nextEffect=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(l){t||(t=l)}e=s}}if(t)throw t}function mi(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function gi(t){let e,s=t.depsTail,l=s;for(;l;){const i=l.prevDep;l.version===-1?(l===s&&(s=i),sl(l),En(l)):e=l,l.dep.activeLink=l.prevActiveLink,l.prevActiveLink=void 0,l=i}t.deps=e,t.depsTail=s}function Hs(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&fi(e.dep.computed)||e.dep.version!==e.version)return!0;return!!t._dirty}function fi(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ve))return;t.globalVersion=ve;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&!Hs(t)){t.flags&=-3;return}const s=z,l=wt;z=t,wt=!0;try{mi(t);const i=t.fn(t._value);(e.version===0||se(i,t._value))&&(t._value=i,e.version++)}catch(i){throw e.version++,i}finally{z=s,wt=l,gi(t),t.flags&=-3}}function sl(t){const{dep:e,prevSub:s,nextSub:l}=t;if(s&&(s.nextSub=l,t.prevSub=void 0),l&&(l.prevSub=s,t.nextSub=void 0),e.subs===t&&(e.subs=s),!e.subs&&e.computed){e.computed.flags&=-5;for(let i=e.computed.deps;i;i=i.nextDep)sl(i)}}function En(t){const{prevDep:e,nextDep:s}=t;e&&(e.nextDep=s,t.prevDep=void 0),s&&(s.prevDep=e,t.nextDep=void 0)}let wt=!0;const xi=[];function Vt(){xi.push(wt),wt=!1}function $t(){const t=xi.pop();wt=t===void 0?!0:t}function El(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const s=z;z=void 0;try{e()}finally{z=s}}}let ve=0;class Sn{constructor(e,s){this.sub=e,this.dep=s,this.version=s.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class hi{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0}track(e){if(!z||!wt||z===this.computed)return;let s=this.activeLink;if(s===void 0||s.sub!==z)s=this.activeLink=new Sn(z,this),z.deps?(s.prevDep=z.depsTail,z.depsTail.nextDep=s,z.depsTail=s):z.deps=z.depsTail=s,z.flags&4&&ci(s);else if(s.version===-1&&(s.version=this.version,s.nextDep)){const l=s.nextDep;l.prevDep=s.prevDep,s.prevDep&&(s.prevDep.nextDep=l),s.prevDep=z.depsTail,s.nextDep=void 0,z.depsTail.nextDep=s,z.depsTail=s,z.deps===s&&(z.deps=l)}return s}trigger(e){this.version++,ve++,this.notify(e)}notify(e){tl();try{for(let s=this.subs;s;s=s.prevSub)s.sub.notify()}finally{el()}}}function ci(t){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let l=e.deps;l;l=l.nextDep)ci(l)}const s=t.dep.subs;s!==t&&(t.prevSub=s,s&&(s.nextSub=t)),t.dep.subs=t}const Ms=new WeakMap,ee=Symbol(""),zs=Symbol(""),We=Symbol("");function st(t,e,s){if(wt&&z){let l=Ms.get(t);l||Ms.set(t,l=new Map);let i=l.get(s);i||l.set(s,i=new hi),i.track()}}function Ht(t,e,s,l,i,n){const r=Ms.get(t);if(!r){ve++;return}const o=u=>{u&&u.trigger()};if(tl(),e==="clear")r.forEach(o);else{const u=N(t),g=u&&Qs(s);if(u&&s==="length"){const _=Number(l);r.forEach((f,k)=>{(k==="length"||k===We||!jt(k)&&k>=_)&&o(f)})}else switch(s!==void 0&&o(r.get(s)),g&&o(r.get(We)),e){case"add":u?g&&o(r.get("length")):(o(r.get(ee)),ae(t)&&o(r.get(zs)));break;case"delete":u||(o(r.get(ee)),ae(t)&&o(r.get(zs)));break;case"set":ae(t)&&o(r.get(ee));break}}el()}function ne(t){const e=M(t);return e===t?e:(st(e,"iterate",We),Et(t)?e:e.map(at))}function hs(t){return st(t=M(t),"iterate",We),t}const Tn={__proto__:null,[Symbol.iterator](){return Gs(this,Symbol.iterator,at)},concat(...t){return ne(this).concat(...t.map(e=>N(e)?ne(e):e))},entries(){return Gs(this,"entries",t=>(t[1]=at(t[1]),t))},every(t,e){return Ct(this,"every",t,e,void 0,arguments)},filter(t,e){return Ct(this,"filter",t,e,s=>s.map(at),arguments)},find(t,e){return Ct(this,"find",t,e,at,arguments)},findIndex(t,e){return Ct(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Ct(this,"findLast",t,e,at,arguments)},findLastIndex(t,e){return Ct(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Ct(this,"forEach",t,e,void 0,arguments)},includes(...t){return vs(this,"includes",t)},indexOf(...t){return vs(this,"indexOf",t)},join(t){return ne(this).join(t)},lastIndexOf(...t){return vs(this,"lastIndexOf",t)},map(t,e){return Ct(this,"map",t,e,void 0,arguments)},pop(){return ke(this,"pop")},push(...t){return ke(this,"push",t)},reduce(t,...e){return Sl(this,"reduce",t,e)},reduceRight(t,...e){return Sl(this,"reduceRight",t,e)},shift(){return ke(this,"shift")},some(t,e){return Ct(this,"some",t,e,void 0,arguments)},splice(...t){return ke(this,"splice",t)},toReversed(){return ne(this).toReversed()},toSorted(t){return ne(this).toSorted(t)},toSpliced(...t){return ne(this).toSpliced(...t)},unshift(...t){return ke(this,"unshift",t)},values(){return Gs(this,"values",at)}};function Gs(t,e,s){const l=hs(t),i=l[e]();return l!==t&&!Et(t)&&(i._next=i.next,i.next=()=>{const n=i._next();return n.value&&(n.value=s(n.value)),n}),i}const Dn=Array.prototype;function Ct(t,e,s,l,i,n){const r=hs(t),o=r!==t&&!Et(t),u=r[e];if(u!==Dn[e]){const f=u.apply(t,n);return o?at(f):f}let g=s;r!==t&&(o?g=function(f,k){return s.call(this,at(f),k,t)}:s.length>2&&(g=function(f,k){return s.call(this,f,k,t)}));const _=u.call(r,g,l);return o&&i?i(_):_}function Sl(t,e,s,l){const i=hs(t);let n=s;return i!==t&&(Et(t)?s.length>3&&(n=function(r,o,u){return s.call(this,r,o,u,t)}):n=function(r,o,u){return s.call(this,r,at(o),u,t)}),i[e](n,...l)}function vs(t,e,s){const l=M(t);st(l,"iterate",We);const i=l[e](...s);return(i===-1||i===!1)&&rl(s[0])?(s[0]=M(s[0]),l[e](...s)):i}function ke(t,e,s=[]){Vt(),tl();const l=M(t)[e].apply(t,s);return el(),$t(),l}const yn=qs("__proto__,__v_isRef,__isVue"),pi=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(jt));function Nn(t){jt(t)||(t=String(t));const e=M(this);return st(e,"has",t),e.hasOwnProperty(t)}class bi{constructor(e=!1,s=!1){this._isReadonly=e,this._isShallow=s}get(e,s,l){const i=this._isReadonly,n=this._isShallow;if(s==="__v_isReactive")return!i;if(s==="__v_isReadonly")return i;if(s==="__v_isShallow")return n;if(s==="__v_raw")return l===(i?n?Fn:Ei:n?wi:ki).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(l)?e:void 0;const r=N(e);if(!i){let u;if(r&&(u=Tn[s]))return u;if(s==="hasOwnProperty")return Nn}const o=Reflect.get(e,s,ot(e)?e:l);return(jt(s)?pi.has(s):yn(s))||(i||st(e,"get",s),n)?o:ot(o)?r&&Qs(s)?o:o.value:K(o)?i?Si(o):Pe(o):o}}class Ai extends bi{constructor(e=!1){super(!1,e)}set(e,s,l,i){let n=e[s];if(!this._isShallow){const u=ge(n);if(!Et(l)&&!ge(l)&&(n=M(n),l=M(l)),!N(e)&&ot(n)&&!ot(l))return u?!1:(n.value=l,!0)}const r=N(e)&&Qs(s)?Number(s)<e.length:R(e,s),o=Reflect.set(e,s,l,ot(e)?e:i);return e===M(i)&&(r?se(l,n)&&Ht(e,"set",s,l):Ht(e,"add",s,l)),o}deleteProperty(e,s){const l=R(e,s);e[s];const i=Reflect.deleteProperty(e,s);return i&&l&&Ht(e,"delete",s,void 0),i}has(e,s){const l=Reflect.has(e,s);return(!jt(s)||!pi.has(s))&&st(e,"has",s),l}ownKeys(e){return st(e,"iterate",N(e)?"length":ee),Reflect.ownKeys(e)}}class Gn extends bi{constructor(e=!1){super(!0,e)}set(e,s){return!0}deleteProperty(e,s){return!0}}const vn=new Ai,Wn=new Gn,jn=new Ai(!0);const ll=t=>t,cs=t=>Reflect.getPrototypeOf(t);function Ve(t,e,s=!1,l=!1){t=t.__v_raw;const i=M(t),n=M(e);s||(se(e,n)&&st(i,"get",e),st(i,"get",n));const{has:r}=cs(i),o=l?ll:s?ol:at;if(r.call(i,e))return o(t.get(e));if(r.call(i,n))return o(t.get(n));t!==i&&t.get(e)}function $e(t,e=!1){const s=this.__v_raw,l=M(s),i=M(t);return e||(se(t,i)&&st(l,"has",t),st(l,"has",i)),t===i?s.has(t):s.has(t)||s.has(i)}function Je(t,e=!1){return t=t.__v_raw,!e&&st(M(t),"iterate",ee),Reflect.get(t,"size",t)}function Tl(t,e=!1){!e&&!Et(t)&&!ge(t)&&(t=M(t));const s=M(this);return cs(s).has.call(s,t)||(s.add(t),Ht(s,"add",t,t)),this}function Dl(t,e,s=!1){!s&&!Et(e)&&!ge(e)&&(e=M(e));const l=M(this),{has:i,get:n}=cs(l);let r=i.call(l,t);r||(t=M(t),r=i.call(l,t));const o=n.call(l,t);return l.set(t,e),r?se(e,o)&&Ht(l,"set",t,e):Ht(l,"add",t,e),this}function yl(t){const e=M(this),{has:s,get:l}=cs(e);let i=s.call(e,t);i||(t=M(t),i=s.call(e,t)),l&&l.call(e,t);const n=e.delete(t);return i&&Ht(e,"delete",t,void 0),n}function Nl(){const t=M(this),e=t.size!==0,s=t.clear();return e&&Ht(t,"clear",void 0,void 0),s}function qe(t,e){return function(l,i){const n=this,r=n.__v_raw,o=M(r),u=e?ll:t?ol:at;return!t&&st(o,"iterate",ee),r.forEach((g,_)=>l.call(i,u(g),u(_),n))}}function Ze(t,e,s){return function(...l){const i=this.__v_raw,n=M(i),r=ae(n),o=t==="entries"||t===Symbol.iterator&&r,u=t==="keys"&&r,g=i[t](...l),_=s?ll:e?ol:at;return!e&&st(n,"iterate",u?zs:ee),{next(){const{value:f,done:k}=g.next();return k?{value:f,done:k}:{value:o?[_(f[0]),_(f[1])]:_(f),done:k}},[Symbol.iterator](){return this}}}}function Ut(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function On(){const t={get(n){return Ve(this,n)},get size(){return Je(this)},has:$e,add:Tl,set:Dl,delete:yl,clear:Nl,forEach:qe(!1,!1)},e={get(n){return Ve(this,n,!1,!0)},get size(){return Je(this)},has:$e,add(n){return Tl.call(this,n,!0)},set(n,r){return Dl.call(this,n,r,!0)},delete:yl,clear:Nl,forEach:qe(!1,!0)},s={get(n){return Ve(this,n,!0)},get size(){return Je(this,!0)},has(n){return $e.call(this,n,!0)},add:Ut("add"),set:Ut("set"),delete:Ut("delete"),clear:Ut("clear"),forEach:qe(!0,!1)},l={get(n){return Ve(this,n,!0,!0)},get size(){return Je(this,!0)},has(n){return $e.call(this,n,!0)},add:Ut("add"),set:Ut("set"),delete:Ut("delete"),clear:Ut("clear"),forEach:qe(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(n=>{t[n]=Ze(n,!1,!1),s[n]=Ze(n,!0,!1),e[n]=Ze(n,!1,!0),l[n]=Ze(n,!0,!0)}),[t,s,e,l]}const[Cn,In,Rn,Pn]=On();function il(t,e){const s=e?t?Pn:Rn:t?In:Cn;return(l,i,n)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?l:Reflect.get(R(s,i)&&i in l?s:l,i,n)}const Hn={get:il(!1,!1)},Mn={get:il(!1,!0)},zn={get:il(!0,!1)};const ki=new WeakMap,wi=new WeakMap,Ei=new WeakMap,Fn=new WeakMap;function Un(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ln(t){return t.__v_skip||!Object.isExtensible(t)?0:Un(dn(t))}function Pe(t){return ge(t)?t:nl(t,!1,vn,Hn,ki)}function Bn(t){return nl(t,!1,jn,Mn,wi)}function Si(t){return nl(t,!0,Wn,zn,Ei)}function nl(t,e,s,l,i){if(!K(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const n=i.get(t);if(n)return n;const r=Ln(t);if(r===0)return t;const o=new Proxy(t,r===2?l:s);return i.set(t,o),o}function ue(t){return ge(t)?ue(t.__v_raw):!!(t&&t.__v_isReactive)}function ge(t){return!!(t&&t.__v_isReadonly)}function Et(t){return!!(t&&t.__v_isShallow)}function rl(t){return t?!!t.__v_raw:!1}function M(t){const e=t&&t.__v_raw;return e?M(e):t}function Kn(t){return!R(t,"__v_skip")&&Object.isExtensible(t)&&ni(t,"__v_skip",!0),t}const at=t=>K(t)?Pe(t):t,ol=t=>K(t)?Si(t):t;function ot(t){return t?t.__v_isRef===!0:!1}function Vn(t){return ot(t)?t.value:t}const $n={get:(t,e,s)=>e==="__v_raw"?t:Vn(Reflect.get(t,e,s)),set:(t,e,s,l)=>{const i=t[e];return ot(i)&&!ot(s)?(i.value=s,!0):Reflect.set(t,e,s,l)}};function Ti(t){return ue(t)?t:new Proxy(t,$n)}class Jn{constructor(e,s,l){this.fn=e,this.setter=s,this._value=void 0,this.dep=new hi(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ve-1,this.effect=this,this.__v_isReadonly=!s,this.isSSR=l}notify(){this.flags|=16,z!==this&&this.dep.notify()}get value(){const e=this.dep.track();return fi(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function qn(t,e,s=!1){let l,i;return W(t)?l=t:(l=t.get,i=t.set),new Jn(l,i,s)}const Ye={},ns=new WeakMap;let Xt;function Zn(t,e=!1,s=Xt){if(s){let l=ns.get(s);l||ns.set(s,l=[]),l.push(t)}}function Yn(t,e,s=F){const{immediate:l,deep:i,once:n,scheduler:r,augmentJob:o,call:u}=s,g=y=>i?y:Et(y)||i===!1||i===0?Rt(y,1):Rt(y);let _,f,k,v,I=!1,O=!1;if(ot(t)?(f=()=>t.value,I=Et(t)):ue(t)?(f=()=>g(t),I=!0):N(t)?(O=!0,I=t.some(y=>ue(y)||Et(y)),f=()=>t.map(y=>{if(ot(y))return y.value;if(ue(y))return g(y);if(W(y))return u?u(y,2):y()})):W(t)?e?f=u?()=>u(t,2):t:f=()=>{if(k){Vt();try{k()}finally{$t()}}const y=Xt;Xt=_;try{return u?u(t,3,[v]):t(v)}finally{Xt=y}}:f=Wt,e&&i){const y=f,Z=i===!0?1/0:i;f=()=>Rt(y(),Z)}const lt=wn(),H=()=>{_.stop(),lt&&Ys(lt.effects,_)};if(n)if(e){const y=e;e=(...Z)=>{y(...Z),H()}}else{const y=f;f=()=>{y(),H()}}let $=O?new Array(t.length).fill(Ye):Ye;const J=y=>{if(!(!(_.flags&1)||!_.dirty&&!y))if(e){const Z=_.run();if(i||I||(O?Z.some((zt,Tt)=>se(zt,$[Tt])):se(Z,$))){k&&k();const zt=Xt;Xt=_;try{const Tt=[Z,$===Ye?void 0:O&&$[0]===Ye?[]:$,v];u?u(e,3,Tt):e(...Tt),$=Z}finally{Xt=zt}}}else _.run()};return o&&o(J),_=new di(f),_.scheduler=r?()=>r(J,!1):J,v=y=>Zn(y,!1,_),k=_.onStop=()=>{const y=ns.get(_);if(y){if(u)u(y,4);else for(const Z of y)Z();ns.delete(_)}},e?l?J(!0):$=_.run():r?r(J.bind(null,!0),!0):_.run(),H.pause=_.pause.bind(_),H.resume=_.resume.bind(_),H.stop=H,H}function Rt(t,e=1/0,s){if(e<=0||!K(t)||t.__v_skip||(s=s||new Set,s.has(t)))return t;if(s.add(t),e--,ot(t))Rt(t.value,e,s);else if(N(t))for(let l=0;l<t.length;l++)Rt(t[l],e,s);else if(ms(t)||ae(t))t.forEach(l=>{Rt(l,e,s)});else if(ii(t)){for(const l in t)Rt(t[l],e,s);for(const l of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,l)&&Rt(t[l],e,s)}return t}/**
* @vue/runtime-core v3.5.5
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function He(t,e,s,l){try{return l?t(...l):t()}catch(i){ps(i,e,s)}}function Ot(t,e,s,l){if(W(t)){const i=He(t,e,s,l);return i&&si(i)&&i.catch(n=>{ps(n,e,s)}),i}if(N(t)){const i=[];for(let n=0;n<t.length;n++)i.push(Ot(t[n],e,s,l));return i}}function ps(t,e,s,l=!0){const i=e?e.vnode:null,{errorHandler:n,throwUnhandledErrorInProduction:r}=e&&e.appContext.config||F;if(e){let o=e.parent;const u=e.proxy,g=`https://vuejs.org/error-reference/#runtime-${s}`;for(;o;){const _=o.ec;if(_){for(let f=0;f<_.length;f++)if(_[f](t,u,g)===!1)return}o=o.parent}if(n){Vt(),He(n,null,10,[t,u,g]),$t();return}}Qn(t,s,i,l,r)}function Qn(t,e,s,l=!0,i=!1){if(i)throw t;console.error(t)}let je=!1,Fs=!1;const rt=[];let Gt=0;const de=[];let Bt=null,re=0;const Di=Promise.resolve();let al=null;function yi(t){const e=al||Di;return t?e.then(this?t.bind(this):t):e}function Xn(t){let e=je?Gt+1:0,s=rt.length;for(;e<s;){const l=e+s>>>1,i=rt[l],n=Oe(i);n<t||n===t&&i.flags&2?e=l+1:s=l}return e}function ul(t){if(!(t.flags&1)){const e=Oe(t),s=rt[rt.length-1];!s||!(t.flags&2)&&e>=Oe(s)?rt.push(t):rt.splice(Xn(e),0,t),t.flags|=1,Ni()}}function Ni(){!je&&!Fs&&(Fs=!0,al=Di.then(vi))}function tr(t){N(t)?de.push(...t):Bt&&t.id===-1?Bt.splice(re+1,0,t):t.flags&1||(de.push(t),t.flags|=1),Ni()}function Gl(t,e,s=je?Gt+1:0){for(;s<rt.length;s++){const l=rt[s];if(l&&l.flags&2){if(t&&l.id!==t.uid)continue;rt.splice(s,1),s--,l.flags&4&&(l.flags&=-2),l(),l.flags&=-2}}}function Gi(t){if(de.length){const e=[...new Set(de)].sort((s,l)=>Oe(s)-Oe(l));if(de.length=0,Bt){Bt.push(...e);return}for(Bt=e,re=0;re<Bt.length;re++){const s=Bt[re];s.flags&4&&(s.flags&=-2),s.flags&8||s(),s.flags&=-2}Bt=null,re=0}}const Oe=t=>t.id==null?t.flags&2?-1:1/0:t.id;function vi(t){Fs=!1,je=!0;try{for(Gt=0;Gt<rt.length;Gt++){const e=rt[Gt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),He(e,e.i,e.i?15:14),e.flags&=-2)}}finally{for(;Gt<rt.length;Gt++){const e=rt[Gt];e&&(e.flags&=-2)}Gt=0,rt.length=0,Gi(),je=!1,al=null,(rt.length||de.length)&&vi()}}let xt=null,Wi=null;function rs(t){const e=xt;return xt=t,Wi=t&&t.type.__scopeId||null,e}function er(t,e=xt,s){if(!e||t._n)return t;const l=(...i)=>{l._d&&Hl(-1);const n=rs(e);let r;try{r=t(...i)}finally{rs(n),l._d&&Hl(1)}return r};return l._n=!0,l._c=!0,l._d=!0,l}function Xe(t,e){if(xt===null)return t;const s=Es(xt),l=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[n,r,o,u=F]=e[i];n&&(W(n)&&(n={mounted:n,updated:n}),n.deep&&Rt(r),l.push({dir:n,instance:s,value:r,oldValue:void 0,arg:o,modifiers:u}))}return t}function Yt(t,e,s,l){const i=t.dirs,n=e&&e.dirs;for(let r=0;r<i.length;r++){const o=i[r];n&&(o.oldValue=n[r].value);let u=o.dir[l];u&&(Vt(),Ot(u,s,8,[t.el,o,t,e]),$t())}}const sr=Symbol("_vte"),lr=t=>t.__isTeleport;function dl(t,e){t.shapeFlag&6&&t.component?(t.transition=e,dl(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function ji(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Us(t,e,s,l,i=!1){if(N(t)){t.forEach((I,O)=>Us(I,e&&(N(e)?e[O]:e),s,l,i));return}if(ye(l)&&!i)return;const n=l.shapeFlag&4?Es(l.component):l.el,r=i?null:n,{i:o,r:u}=t,g=e&&e.r,_=o.refs===F?o.refs={}:o.refs,f=o.setupState,k=M(f),v=f===F?()=>!1:I=>R(k,I);if(g!=null&&g!==u&&(q(g)?(_[g]=null,v(g)&&(f[g]=null)):ot(g)&&(g.value=null)),W(u))He(u,o,12,[r,_]);else{const I=q(u),O=ot(u);if(I||O){const lt=()=>{if(t.f){const H=I?v(u)?f[u]:_[u]:u.value;i?N(H)&&Ys(H,n):N(H)?H.includes(n)||H.push(n):I?(_[u]=[n],v(u)&&(f[u]=_[u])):(u.value=[n],t.k&&(_[t.k]=u.value))}else I?(_[u]=r,v(u)&&(f[u]=r)):O&&(u.value=r,t.k&&(_[t.k]=r))};r?(lt.id=-1,gt(lt,s)):lt()}}}const ye=t=>!!t.type.__asyncLoader,Oi=t=>t.type.__isKeepAlive;function ir(t,e){Ci(t,"a",e)}function nr(t,e){Ci(t,"da",e)}function Ci(t,e,s=tt){const l=t.__wdc||(t.__wdc=()=>{let i=s;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(bs(e,l,s),s){let i=s.parent;for(;i&&i.parent;)Oi(i.parent.vnode)&&rr(l,e,s,i),i=i.parent}}function rr(t,e,s,l){const i=bs(e,t,l,!0);Ii(()=>{Ys(l[e],i)},s)}function bs(t,e,s=tt,l=!1){if(s){const i=s[t]||(s[t]=[]),n=e.__weh||(e.__weh=(...r)=>{Vt();const o=ze(s),u=Ot(e,s,t,r);return o(),$t(),u});return l?i.unshift(n):i.push(n),n}}const Mt=t=>(e,s=tt)=>{(!ws||t==="sp")&&bs(t,(...l)=>e(...l),s)},or=Mt("bm"),ar=Mt("m"),ur=Mt("bu"),dr=Mt("u"),_r=Mt("bum"),Ii=Mt("um"),mr=Mt("sp"),gr=Mt("rtg"),fr=Mt("rtc");function xr(t,e=tt){bs("ec",t,e)}const Ri="components";function pt(t,e){return cr(Ri,t,!0,e)||t}const hr=Symbol.for("v-ndc");function cr(t,e,s=!0,l=!1){const i=xt||tt;if(i){const n=i.type;if(t===Ri){const o=ro(n,!1);if(o&&(o===e||o===St(e)||o===fs(St(e))))return n}const r=vl(i[t]||n[t],e)||vl(i.appContext[t],e);return!r&&l?n:r}}function vl(t,e){return t&&(t[e]||t[St(e)]||t[fs(St(e))])}function Me(t,e,s,l){let i;const n=s,r=N(t);if(r||q(t)){const o=r&&ue(t);let u=!1;o&&(u=!Et(t),t=hs(t)),i=new Array(t.length);for(let g=0,_=t.length;g<_;g++)i[g]=e(u?at(t[g]):t[g],g,void 0,n)}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,n)}else if(K(t))if(t[Symbol.iterator])i=Array.from(t,(o,u)=>e(o,u,void 0,n));else{const o=Object.keys(t);i=new Array(o.length);for(let u=0,g=o.length;u<g;u++){const _=o[u];i[u]=e(t[_],_,u,n)}}else i=[];return i}const Ls=t=>t?sn(t)?Es(t):Ls(t.parent):null,Ne=et(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ls(t.parent),$root:t=>Ls(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>_l(t),$forceUpdate:t=>t.f||(t.f=()=>{ul(t.update)}),$nextTick:t=>t.n||(t.n=yi.bind(t.proxy)),$watch:t=>Mr.bind(t)}),Ws=(t,e)=>t!==F&&!t.__isScriptSetup&&R(t,e),pr={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:s,setupState:l,data:i,props:n,accessCache:r,type:o,appContext:u}=t;let g;if(e[0]!=="$"){const v=r[e];if(v!==void 0)switch(v){case 1:return l[e];case 2:return i[e];case 4:return s[e];case 3:return n[e]}else{if(Ws(l,e))return r[e]=1,l[e];if(i!==F&&R(i,e))return r[e]=2,i[e];if((g=t.propsOptions[0])&&R(g,e))return r[e]=3,n[e];if(s!==F&&R(s,e))return r[e]=4,s[e];Bs&&(r[e]=0)}}const _=Ne[e];let f,k;if(_)return e==="$attrs"&&st(t.attrs,"get",""),_(t);if((f=o.__cssModules)&&(f=f[e]))return f;if(s!==F&&R(s,e))return r[e]=4,s[e];if(k=u.config.globalProperties,R(k,e))return k[e]},set({_:t},e,s){const{data:l,setupState:i,ctx:n}=t;return Ws(i,e)?(i[e]=s,!0):l!==F&&R(l,e)?(l[e]=s,!0):R(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(n[e]=s,!0)},has({_:{data:t,setupState:e,accessCache:s,ctx:l,appContext:i,propsOptions:n}},r){let o;return!!s[r]||t!==F&&R(t,r)||Ws(e,r)||(o=n[0])&&R(o,r)||R(l,r)||R(Ne,r)||R(i.config.globalProperties,r)},defineProperty(t,e,s){return s.get!=null?t._.accessCache[e]=0:R(s,"value")&&this.set(t,e,s.value,null),Reflect.defineProperty(t,e,s)}};function Wl(t){return N(t)?t.reduce((e,s)=>(e[s]=null,e),{}):t}let Bs=!0;function br(t){const e=_l(t),s=t.proxy,l=t.ctx;Bs=!1,e.beforeCreate&&jl(e.beforeCreate,t,"bc");const{data:i,computed:n,methods:r,watch:o,provide:u,inject:g,created:_,beforeMount:f,mounted:k,beforeUpdate:v,updated:I,activated:O,deactivated:lt,beforeDestroy:H,beforeUnmount:$,destroyed:J,unmounted:y,render:Z,renderTracked:zt,renderTriggered:Tt,errorCaptured:Ft,serverPrefetch:Fe,expose:Jt,inheritAttrs:ce,components:Ue,directives:Le,filters:Ss}=e;if(g&&Ar(g,l,null),r)for(const V in r){const U=r[V];W(U)&&(l[V]=U.bind(s))}if(i){const V=i.call(s,s);K(V)&&(t.data=Pe(V))}if(Bs=!0,n)for(const V in n){const U=n[V],qt=W(U)?U.bind(s,s):W(U.get)?U.get.bind(s,s):Wt,Be=!W(U)&&W(U.set)?U.set.bind(s):Wt,Zt=ao({get:qt,set:Be});Object.defineProperty(l,V,{enumerable:!0,configurable:!0,get:()=>Zt.value,set:Dt=>Zt.value=Dt})}if(o)for(const V in o)Pi(o[V],l,s,V);if(u){const V=W(u)?u.call(s):u;Reflect.ownKeys(V).forEach(U=>{Dr(U,V[U])})}_&&jl(_,t,"c");function it(V,U){N(U)?U.forEach(qt=>V(qt.bind(s))):U&&V(U.bind(s))}if(it(or,f),it(ar,k),it(ur,v),it(dr,I),it(ir,O),it(nr,lt),it(xr,Ft),it(fr,zt),it(gr,Tt),it(_r,$),it(Ii,y),it(mr,Fe),N(Jt))if(Jt.length){const V=t.exposed||(t.exposed={});Jt.forEach(U=>{Object.defineProperty(V,U,{get:()=>s[U],set:qt=>s[U]=qt})})}else t.exposed||(t.exposed={});Z&&t.render===Wt&&(t.render=Z),ce!=null&&(t.inheritAttrs=ce),Ue&&(t.components=Ue),Le&&(t.directives=Le),Fe&&ji(t)}function Ar(t,e,s=Wt){N(t)&&(t=Ks(t));for(const l in t){const i=t[l];let n;K(i)?"default"in i?n=ts(i.from||l,i.default,!0):n=ts(i.from||l):n=ts(i),ot(n)?Object.defineProperty(e,l,{enumerable:!0,configurable:!0,get:()=>n.value,set:r=>n.value=r}):e[l]=n}}function jl(t,e,s){Ot(N(t)?t.map(l=>l.bind(e.proxy)):t.bind(e.proxy),e,s)}function Pi(t,e,s,l){let i=l.includes(".")?Yi(s,l):()=>s[l];if(q(t)){const n=e[t];W(n)&&Os(i,n)}else if(W(t))Os(i,t.bind(s));else if(K(t))if(N(t))t.forEach(n=>Pi(n,e,s,l));else{const n=W(t.handler)?t.handler.bind(s):e[t.handler];W(n)&&Os(i,n,t)}}function _l(t){const e=t.type,{mixins:s,extends:l}=e,{mixins:i,optionsCache:n,config:{optionMergeStrategies:r}}=t.appContext,o=n.get(e);let u;return o?u=o:!i.length&&!s&&!l?u=e:(u={},i.length&&i.forEach(g=>os(u,g,r,!0)),os(u,e,r)),K(e)&&n.set(e,u),u}function os(t,e,s,l=!1){const{mixins:i,extends:n}=e;n&&os(t,n,s,!0),i&&i.forEach(r=>os(t,r,s,!0));for(const r in e)if(!(l&&r==="expose")){const o=kr[r]||s&&s[r];t[r]=o?o(t[r],e[r]):e[r]}return t}const kr={data:Ol,props:Cl,emits:Cl,methods:Ee,computed:Ee,beforeCreate:nt,created:nt,beforeMount:nt,mounted:nt,beforeUpdate:nt,updated:nt,beforeDestroy:nt,beforeUnmount:nt,destroyed:nt,unmounted:nt,activated:nt,deactivated:nt,errorCaptured:nt,serverPrefetch:nt,components:Ee,directives:Ee,watch:Er,provide:Ol,inject:wr};function Ol(t,e){return e?t?function(){return et(W(t)?t.call(this,this):t,W(e)?e.call(this,this):e)}:e:t}function wr(t,e){return Ee(Ks(t),Ks(e))}function Ks(t){if(N(t)){const e={};for(let s=0;s<t.length;s++)e[t[s]]=t[s];return e}return t}function nt(t,e){return t?[...new Set([].concat(t,e))]:e}function Ee(t,e){return t?et(Object.create(null),t,e):e}function Cl(t,e){return t?N(t)&&N(e)?[...new Set([...t,...e])]:et(Object.create(null),Wl(t),Wl(e??{})):e}function Er(t,e){if(!t)return e;if(!e)return t;const s=et(Object.create(null),t);for(const l in e)s[l]=nt(t[l],e[l]);return s}function Hi(){return{app:null,config:{isNativeTag:an,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Sr=0;function Tr(t,e){return function(l,i=null){W(l)||(l=et({},l)),i!=null&&!K(i)&&(i=null);const n=Hi(),r=new WeakSet,o=[];let u=!1;const g=n.app={_uid:Sr++,_component:l,_props:i,_container:null,_context:n,_instance:null,version:uo,get config(){return n.config},set config(_){},use(_,...f){return r.has(_)||(_&&W(_.install)?(r.add(_),_.install(g,...f)):W(_)&&(r.add(_),_(g,...f))),g},mixin(_){return n.mixins.includes(_)||n.mixins.push(_),g},component(_,f){return f?(n.components[_]=f,g):n.components[_]},directive(_,f){return f?(n.directives[_]=f,g):n.directives[_]},mount(_,f,k){if(!u){const v=g._ceVNode||Y(l,i);return v.appContext=n,k===!0?k="svg":k===!1&&(k=void 0),f&&e?e(v,_):t(v,_,k),u=!0,g._container=_,_.__vue_app__=g,Es(v.component)}},onUnmount(_){o.push(_)},unmount(){u&&(Ot(o,g._instance,16),t(null,g._container),delete g._container.__vue_app__)},provide(_,f){return n.provides[_]=f,g},runWithContext(_){const f=_e;_e=g;try{return _()}finally{_e=f}}};return g}}let _e=null;function Dr(t,e){if(tt){let s=tt.provides;const l=tt.parent&&tt.parent.provides;l===s&&(s=tt.provides=Object.create(l)),s[t]=e}}function ts(t,e,s=!1){const l=tt||xt;if(l||_e){const i=_e?_e._context.provides:l?l.parent==null?l.vnode.appContext&&l.vnode.appContext.provides:l.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return s&&W(e)?e.call(l&&l.proxy):e}}const Mi={},zi=()=>Object.create(Mi),Fi=t=>Object.getPrototypeOf(t)===Mi;function yr(t,e,s,l=!1){const i={},n=zi();t.propsDefaults=Object.create(null),Ui(t,e,i,n);for(const r in t.propsOptions[0])r in i||(i[r]=void 0);s?t.props=l?i:Bn(i):t.type.props?t.props=i:t.props=n,t.attrs=n}function Nr(t,e,s,l){const{props:i,attrs:n,vnode:{patchFlag:r}}=t,o=M(i),[u]=t.propsOptions;let g=!1;if((l||r>0)&&!(r&16)){if(r&8){const _=t.vnode.dynamicProps;for(let f=0;f<_.length;f++){let k=_[f];if(As(t.emitsOptions,k))continue;const v=e[k];if(u)if(R(n,k))v!==n[k]&&(n[k]=v,g=!0);else{const I=St(k);i[I]=Vs(u,o,I,v,t,!1)}else v!==n[k]&&(n[k]=v,g=!0)}}}else{Ui(t,e,i,n)&&(g=!0);let _;for(const f in o)(!e||!R(e,f)&&((_=ie(f))===f||!R(e,_)))&&(u?s&&(s[f]!==void 0||s[_]!==void 0)&&(i[f]=Vs(u,o,f,void 0,t,!0)):delete i[f]);if(n!==o)for(const f in n)(!e||!R(e,f))&&(delete n[f],g=!0)}g&&Ht(t.attrs,"set","")}function Ui(t,e,s,l){const[i,n]=t.propsOptions;let r=!1,o;if(e)for(let u in e){if(Te(u))continue;const g=e[u];let _;i&&R(i,_=St(u))?!n||!n.includes(_)?s[_]=g:(o||(o={}))[_]=g:As(t.emitsOptions,u)||(!(u in l)||g!==l[u])&&(l[u]=g,r=!0)}if(n){const u=M(s),g=o||F;for(let _=0;_<n.length;_++){const f=n[_];s[f]=Vs(i,u,f,g[f],t,!R(g,f))}}return r}function Vs(t,e,s,l,i,n){const r=t[s];if(r!=null){const o=R(r,"default");if(o&&l===void 0){const u=r.default;if(r.type!==Function&&!r.skipFactory&&W(u)){const{propsDefaults:g}=i;if(s in g)l=g[s];else{const _=ze(i);l=g[s]=u.call(null,e),_()}}else l=u;i.ce&&i.ce._setProp(s,l)}r[0]&&(n&&!o?l=!1:r[1]&&(l===""||l===ie(s))&&(l=!0))}return l}const Gr=new WeakMap;function Li(t,e,s=!1){const l=s?Gr:e.propsCache,i=l.get(t);if(i)return i;const n=t.props,r={},o=[];let u=!1;if(!W(t)){const _=f=>{u=!0;const[k,v]=Li(f,e,!0);et(r,k),v&&o.push(...v)};!s&&e.mixins.length&&e.mixins.forEach(_),t.extends&&_(t.extends),t.mixins&&t.mixins.forEach(_)}if(!n&&!u)return K(t)&&l.set(t,oe),oe;if(N(n))for(let _=0;_<n.length;_++){const f=St(n[_]);Il(f)&&(r[f]=F)}else if(n)for(const _ in n){const f=St(_);if(Il(f)){const k=n[_],v=r[f]=N(k)||W(k)?{type:k}:et({},k),I=v.type;let O=!1,lt=!0;if(N(I))for(let H=0;H<I.length;++H){const $=I[H],J=W($)&&$.name;if(J==="Boolean"){O=!0;break}else J==="String"&&(lt=!1)}else O=W(I)&&I.name==="Boolean";v[0]=O,v[1]=lt,(O||R(v,"default"))&&o.push(f)}}const g=[r,o];return K(t)&&l.set(t,g),g}function Il(t){return t[0]!=="$"&&!Te(t)}const Bi=t=>t[0]==="_"||t==="$stable",ml=t=>N(t)?t.map(vt):[vt(t)],vr=(t,e,s)=>{if(e._n)return e;const l=er((...i)=>ml(e(...i)),s);return l._c=!1,l},Ki=(t,e,s)=>{const l=t._ctx;for(const i in t){if(Bi(i))continue;const n=t[i];if(W(n))e[i]=vr(i,n,l);else if(n!=null){const r=ml(n);e[i]=()=>r}}},Vi=(t,e)=>{const s=ml(e);t.slots.default=()=>s},$i=(t,e,s)=>{for(const l in e)(s||l!=="_")&&(t[l]=e[l])},Wr=(t,e,s)=>{const l=t.slots=zi();if(t.vnode.shapeFlag&32){const i=e._;i?($i(l,e,s),s&&ni(l,"_",i,!0)):Ki(e,l)}else e&&Vi(t,e)},jr=(t,e,s)=>{const{vnode:l,slots:i}=t;let n=!0,r=F;if(l.shapeFlag&32){const o=e._;o?s&&o===1?n=!1:$i(i,e,s):(n=!e.$stable,Ki(e,i)),r=e}else e&&(Vi(t,e),r={default:1});if(n)for(const o in i)!Bi(o)&&r[o]==null&&delete i[o]},gt=Vr;function Or(t){return Cr(t)}function Cr(t,e){const s=ri();s.__VUE__=!0;const{insert:l,remove:i,patchProp:n,createElement:r,createText:o,createComment:u,setText:g,setElementText:_,parentNode:f,nextSibling:k,setScopeId:v=Wt,insertStaticContent:I}=t,O=(a,d,m,c=null,x=null,h=null,w=void 0,A=null,b=!!d.dynamicChildren)=>{if(a===d)return;a&&!we(a,d)&&(c=Ke(a),Dt(a,x,h,!0),a=null),d.patchFlag===-2&&(b=!1,d.dynamicChildren=null);const{type:p,ref:D,shapeFlag:E}=d;switch(p){case ks:lt(a,d,m,c);break;case le:H(a,d,m,c);break;case es:a==null&&$(d,m,c,w);break;case Q:Ue(a,d,m,c,x,h,w,A,b);break;default:E&1?Z(a,d,m,c,x,h,w,A,b):E&6?Le(a,d,m,c,x,h,w,A,b):(E&64||E&128)&&p.process(a,d,m,c,x,h,w,A,b,be)}D!=null&&x&&Us(D,a&&a.ref,h,d||a,!d)},lt=(a,d,m,c)=>{if(a==null)l(d.el=o(d.children),m,c);else{const x=d.el=a.el;d.children!==a.children&&g(x,d.children)}},H=(a,d,m,c)=>{a==null?l(d.el=u(d.children||""),m,c):d.el=a.el},$=(a,d,m,c)=>{[a.el,a.anchor]=I(a.children,d,m,c,a.el,a.anchor)},J=({el:a,anchor:d},m,c)=>{let x;for(;a&&a!==d;)x=k(a),l(a,m,c),a=x;l(d,m,c)},y=({el:a,anchor:d})=>{let m;for(;a&&a!==d;)m=k(a),i(a),a=m;i(d)},Z=(a,d,m,c,x,h,w,A,b)=>{d.type==="svg"?w="svg":d.type==="math"&&(w="mathml"),a==null?zt(d,m,c,x,h,w,A,b):Fe(a,d,x,h,w,A,b)},zt=(a,d,m,c,x,h,w,A)=>{let b,p;const{props:D,shapeFlag:E,transition:T,dirs:G}=a;if(b=a.el=r(a.type,h,D&&D.is,D),E&8?_(b,a.children):E&16&&Ft(a.children,b,null,c,x,js(a,h),w,A),G&&Yt(a,null,c,"created"),Tt(b,a,a.scopeId,w,c),D){for(const L in D)L!=="value"&&!Te(L)&&n(b,L,null,D[L],h,c);"value"in D&&n(b,"value",null,D.value,h),(p=D.onVnodeBeforeMount)&&Nt(p,c,a)}G&&Yt(a,null,c,"beforeMount");const j=Ir(x,T);j&&T.beforeEnter(b),l(b,d,m),((p=D&&D.onVnodeMounted)||j||G)&&gt(()=>{p&&Nt(p,c,a),j&&T.enter(b),G&&Yt(a,null,c,"mounted")},x)},Tt=(a,d,m,c,x)=>{if(m&&v(a,m),c)for(let h=0;h<c.length;h++)v(a,c[h]);if(x){let h=x.subTree;if(d===h||Xi(h.type)&&(h.ssContent===d||h.ssFallback===d)){const w=x.vnode;Tt(a,w,w.scopeId,w.slotScopeIds,x.parent)}}},Ft=(a,d,m,c,x,h,w,A,b=0)=>{for(let p=b;p<a.length;p++){const D=a[p]=A?Kt(a[p]):vt(a[p]);O(null,D,d,m,c,x,h,w,A)}},Fe=(a,d,m,c,x,h,w)=>{const A=d.el=a.el;let{patchFlag:b,dynamicChildren:p,dirs:D}=d;b|=a.patchFlag&16;const E=a.props||F,T=d.props||F;let G;if(m&&Qt(m,!1),(G=T.onVnodeBeforeUpdate)&&Nt(G,m,d,a),D&&Yt(d,a,m,"beforeUpdate"),m&&Qt(m,!0),(E.innerHTML&&T.innerHTML==null||E.textContent&&T.textContent==null)&&_(A,""),p?Jt(a.dynamicChildren,p,A,m,c,js(d,x),h):w||U(a,d,A,null,m,c,js(d,x),h,!1),b>0){if(b&16)ce(A,E,T,m,x);else if(b&2&&E.class!==T.class&&n(A,"class",null,T.class,x),b&4&&n(A,"style",E.style,T.style,x),b&8){const j=d.dynamicProps;for(let L=0;L<j.length;L++){const P=j[L],dt=E[P],X=T[P];(X!==dt||P==="value")&&n(A,P,dt,X,x,m)}}b&1&&a.children!==d.children&&_(A,d.children)}else!w&&p==null&&ce(A,E,T,m,x);((G=T.onVnodeUpdated)||D)&&gt(()=>{G&&Nt(G,m,d,a),D&&Yt(d,a,m,"updated")},c)},Jt=(a,d,m,c,x,h,w)=>{for(let A=0;A<d.length;A++){const b=a[A],p=d[A],D=b.el&&(b.type===Q||!we(b,p)||b.shapeFlag&70)?f(b.el):m;O(b,p,D,null,c,x,h,w,!0)}},ce=(a,d,m,c,x)=>{if(d!==m){if(d!==F)for(const h in d)!Te(h)&&!(h in m)&&n(a,h,d[h],null,x,c);for(const h in m){if(Te(h))continue;const w=m[h],A=d[h];w!==A&&h!=="value"&&n(a,h,A,w,x,c)}"value"in m&&n(a,"value",d.value,m.value,x)}},Ue=(a,d,m,c,x,h,w,A,b)=>{const p=d.el=a?a.el:o(""),D=d.anchor=a?a.anchor:o("");let{patchFlag:E,dynamicChildren:T,slotScopeIds:G}=d;G&&(A=A?A.concat(G):G),a==null?(l(p,m,c),l(D,m,c),Ft(d.children||[],m,D,x,h,w,A,b)):E>0&&E&64&&T&&a.dynamicChildren?(Jt(a.dynamicChildren,T,m,x,h,w,A),(d.key!=null||x&&d===x.subTree)&&Ji(a,d,!0)):U(a,d,m,D,x,h,w,A,b)},Le=(a,d,m,c,x,h,w,A,b)=>{d.slotScopeIds=A,a==null?d.shapeFlag&512?x.ctx.activate(d,m,c,w,b):Ss(d,m,c,x,h,w,b):fl(a,d,b)},Ss=(a,d,m,c,x,h,w)=>{const A=a.component=eo(a,c,x);if(Oi(a)&&(A.ctx.renderer=be),so(A,!1,w),A.asyncDep){if(x&&x.registerDep(A,it,w),!a.el){const b=A.subTree=Y(le);H(null,b,d,m)}}else it(A,a,d,m,x,h,w)},fl=(a,d,m)=>{const c=d.component=a.component;if(Br(a,d,m))if(c.asyncDep&&!c.asyncResolved){V(c,d,m);return}else c.next=d,c.update();else d.el=a.el,c.vnode=d},it=(a,d,m,c,x,h,w)=>{const A=()=>{if(a.isMounted){let{next:E,bu:T,u:G,parent:j,vnode:L}=a;{const _t=qi(a);if(_t){E&&(E.el=L.el,V(a,E,w)),_t.asyncDep.then(()=>{a.isUnmounted||A()});return}}let P=E,dt;Qt(a,!1),E?(E.el=L.el,V(a,E,w)):E=L,T&&Qe(T),(dt=E.props&&E.props.onVnodeBeforeUpdate)&&Nt(dt,j,E,L),Qt(a,!0);const X=Cs(a),kt=a.subTree;a.subTree=X,O(kt,X,f(kt.el),Ke(kt),a,x,h),E.el=X.el,P===null&&Kr(a,X.el),G&&gt(G,x),(dt=E.props&&E.props.onVnodeUpdated)&&gt(()=>Nt(dt,j,E,L),x)}else{let E;const{el:T,props:G}=d,{bm:j,m:L,parent:P,root:dt,type:X}=a,kt=ye(d);if(Qt(a,!1),j&&Qe(j),!kt&&(E=G&&G.onVnodeBeforeMount)&&Nt(E,P,d),Qt(a,!0),T&&pl){const _t=()=>{a.subTree=Cs(a),pl(T,a.subTree,a,x,null)};kt&&X.__asyncHydrate?X.__asyncHydrate(T,a,_t):_t()}else{dt.ce&&dt.ce._injectChildStyle(X);const _t=a.subTree=Cs(a);O(null,_t,m,c,a,x,h),d.el=_t.el}if(L&&gt(L,x),!kt&&(E=G&&G.onVnodeMounted)){const _t=d;gt(()=>Nt(E,P,_t),x)}(d.shapeFlag&256||P&&ye(P.vnode)&&P.vnode.shapeFlag&256)&&a.a&&gt(a.a,x),a.isMounted=!0,d=m=c=null}};a.scope.on();const b=a.effect=new di(A);a.scope.off();const p=a.update=b.run.bind(b),D=a.job=b.runIfDirty.bind(b);D.i=a,D.id=a.uid,b.scheduler=()=>ul(D),Qt(a,!0),p()},V=(a,d,m)=>{d.component=a;const c=a.vnode.props;a.vnode=d,a.next=null,Nr(a,d.props,c,m),jr(a,d.children,m),Vt(),Gl(a),$t()},U=(a,d,m,c,x,h,w,A,b=!1)=>{const p=a&&a.children,D=a?a.shapeFlag:0,E=d.children,{patchFlag:T,shapeFlag:G}=d;if(T>0){if(T&128){Be(p,E,m,c,x,h,w,A,b);return}else if(T&256){qt(p,E,m,c,x,h,w,A,b);return}}G&8?(D&16&&pe(p,x,h),E!==p&&_(m,E)):D&16?G&16?Be(p,E,m,c,x,h,w,A,b):pe(p,x,h,!0):(D&8&&_(m,""),G&16&&Ft(E,m,c,x,h,w,A,b))},qt=(a,d,m,c,x,h,w,A,b)=>{a=a||oe,d=d||oe;const p=a.length,D=d.length,E=Math.min(p,D);let T;for(T=0;T<E;T++){const G=d[T]=b?Kt(d[T]):vt(d[T]);O(a[T],G,m,null,x,h,w,A,b)}p>D?pe(a,x,h,!0,!1,E):Ft(d,m,c,x,h,w,A,b,E)},Be=(a,d,m,c,x,h,w,A,b)=>{let p=0;const D=d.length;let E=a.length-1,T=D-1;for(;p<=E&&p<=T;){const G=a[p],j=d[p]=b?Kt(d[p]):vt(d[p]);if(we(G,j))O(G,j,m,null,x,h,w,A,b);else break;p++}for(;p<=E&&p<=T;){const G=a[E],j=d[T]=b?Kt(d[T]):vt(d[T]);if(we(G,j))O(G,j,m,null,x,h,w,A,b);else break;E--,T--}if(p>E){if(p<=T){const G=T+1,j=G<D?d[G].el:c;for(;p<=T;)O(null,d[p]=b?Kt(d[p]):vt(d[p]),m,j,x,h,w,A,b),p++}}else if(p>T)for(;p<=E;)Dt(a[p],x,h,!0),p++;else{const G=p,j=p,L=new Map;for(p=j;p<=T;p++){const mt=d[p]=b?Kt(d[p]):vt(d[p]);mt.key!=null&&L.set(mt.key,p)}let P,dt=0;const X=T-j+1;let kt=!1,_t=0;const Ae=new Array(X);for(p=0;p<X;p++)Ae[p]=0;for(p=G;p<=E;p++){const mt=a[p];if(dt>=X){Dt(mt,x,h,!0);continue}let yt;if(mt.key!=null)yt=L.get(mt.key);else for(P=j;P<=T;P++)if(Ae[P-j]===0&&we(mt,d[P])){yt=P;break}yt===void 0?Dt(mt,x,h,!0):(Ae[yt-j]=p+1,yt>=_t?_t=yt:kt=!0,O(mt,d[yt],m,null,x,h,w,A,b),dt++)}const bl=kt?Rr(Ae):oe;for(P=bl.length-1,p=X-1;p>=0;p--){const mt=j+p,yt=d[mt],Al=mt+1<D?d[mt+1].el:c;Ae[p]===0?O(null,yt,m,Al,x,h,w,A,b):kt&&(P<0||p!==bl[P]?Zt(yt,m,Al,2):P--)}}},Zt=(a,d,m,c,x=null)=>{const{el:h,type:w,transition:A,children:b,shapeFlag:p}=a;if(p&6){Zt(a.component.subTree,d,m,c);return}if(p&128){a.suspense.move(d,m,c);return}if(p&64){w.move(a,d,m,be);return}if(w===Q){l(h,d,m);for(let E=0;E<b.length;E++)Zt(b[E],d,m,c);l(a.anchor,d,m);return}if(w===es){J(a,d,m);return}if(c!==2&&p&1&&A)if(c===0)A.beforeEnter(h),l(h,d,m),gt(()=>A.enter(h),x);else{const{leave:E,delayLeave:T,afterLeave:G}=A,j=()=>l(h,d,m),L=()=>{E(h,()=>{j(),G&&G()})};T?T(h,j,L):L()}else l(h,d,m)},Dt=(a,d,m,c=!1,x=!1)=>{const{type:h,props:w,ref:A,children:b,dynamicChildren:p,shapeFlag:D,patchFlag:E,dirs:T,cacheIndex:G}=a;if(E===-2&&(x=!1),A!=null&&Us(A,null,m,a,!0),G!=null&&(d.renderCache[G]=void 0),D&256){d.ctx.deactivate(a);return}const j=D&1&&T,L=!ye(a);let P;if(L&&(P=w&&w.onVnodeBeforeUnmount)&&Nt(P,d,a),D&6)on(a.component,m,c);else{if(D&128){a.suspense.unmount(m,c);return}j&&Yt(a,null,d,"beforeUnmount"),D&64?a.type.remove(a,d,m,be,c):p&&!p.hasOnce&&(h!==Q||E>0&&E&64)?pe(p,d,m,!1,!0):(h===Q&&E&384||!x&&D&16)&&pe(b,d,m),c&&xl(a)}(L&&(P=w&&w.onVnodeUnmounted)||j)&&gt(()=>{P&&Nt(P,d,a),j&&Yt(a,null,d,"unmounted")},m)},xl=a=>{const{type:d,el:m,anchor:c,transition:x}=a;if(d===Q){rn(m,c);return}if(d===es){y(a);return}const h=()=>{i(m),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(a.shapeFlag&1&&x&&!x.persisted){const{leave:w,delayLeave:A}=x,b=()=>w(m,h);A?A(a.el,h,b):b()}else h()},rn=(a,d)=>{let m;for(;a!==d;)m=k(a),i(a),a=m;i(d)},on=(a,d,m)=>{const{bum:c,scope:x,job:h,subTree:w,um:A,m:b,a:p}=a;Rl(b),Rl(p),c&&Qe(c),x.stop(),h&&(h.flags|=8,Dt(w,a,d,m)),A&&gt(A,d),gt(()=>{a.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&a.asyncDep&&!a.asyncResolved&&a.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},pe=(a,d,m,c=!1,x=!1,h=0)=>{for(let w=h;w<a.length;w++)Dt(a[w],d,m,c,x)},Ke=a=>{if(a.shapeFlag&6)return Ke(a.component.subTree);if(a.shapeFlag&128)return a.suspense.next();const d=k(a.anchor||a.el),m=d&&d[sr];return m?k(m):d};let Ts=!1;const hl=(a,d,m)=>{a==null?d._vnode&&Dt(d._vnode,null,null,!0):O(d._vnode||null,a,d,null,null,null,m),d._vnode=a,Ts||(Ts=!0,Gl(),Gi(),Ts=!1)},be={p:O,um:Dt,m:Zt,r:xl,mt:Ss,mc:Ft,pc:U,pbc:Jt,n:Ke,o:t};let cl,pl;return{render:hl,hydrate:cl,createApp:Tr(hl,cl)}}function js({type:t,props:e},s){return s==="svg"&&t==="foreignObject"||s==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:s}function Qt({effect:t,job:e},s){s?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Ir(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Ji(t,e,s=!1){const l=t.children,i=e.children;if(N(l)&&N(i))for(let n=0;n<l.length;n++){const r=l[n];let o=i[n];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=i[n]=Kt(i[n]),o.el=r.el),!s&&o.patchFlag!==-2&&Ji(r,o)),o.type===ks&&(o.el=r.el)}}function Rr(t){const e=t.slice(),s=[0];let l,i,n,r,o;const u=t.length;for(l=0;l<u;l++){const g=t[l];if(g!==0){if(i=s[s.length-1],t[i]<g){e[l]=i,s.push(l);continue}for(n=0,r=s.length-1;n<r;)o=n+r>>1,t[s[o]]<g?n=o+1:r=o;g<t[s[n]]&&(n>0&&(e[l]=s[n-1]),s[n]=l)}}for(n=s.length,r=s[n-1];n-- >0;)s[n]=r,r=e[r];return s}function qi(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:qi(e)}function Rl(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Pr=Symbol.for("v-scx"),Hr=()=>ts(Pr);function Os(t,e,s){return Zi(t,e,s)}function Zi(t,e,s=F){const{immediate:l,deep:i,flush:n,once:r}=s,o=et({},s);let u;if(ws)if(n==="sync"){const k=Hr();u=k.__watcherHandles||(k.__watcherHandles=[])}else if(!e||l)o.once=!0;else return{stop:Wt,resume:Wt,pause:Wt};const g=tt;o.call=(k,v,I)=>Ot(k,g,v,I);let _=!1;n==="post"?o.scheduler=k=>{gt(k,g&&g.suspense)}:n!=="sync"&&(_=!0,o.scheduler=(k,v)=>{v?k():ul(k)}),o.augmentJob=k=>{e&&(k.flags|=4),_&&(k.flags|=2,g&&(k.id=g.uid,k.i=g))};const f=Yn(t,e,o);return u&&u.push(f),f}function Mr(t,e,s){const l=this.proxy,i=q(t)?t.includes(".")?Yi(l,t):()=>l[t]:t.bind(l,l);let n;W(e)?n=e:(n=e.handler,s=e);const r=ze(this),o=Zi(i,n.bind(l),s);return r(),o}function Yi(t,e){const s=e.split(".");return()=>{let l=t;for(let i=0;i<s.length&&l;i++)l=l[s[i]];return l}}const zr=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${St(e)}Modifiers`]||t[`${ie(e)}Modifiers`];function Fr(t,e,...s){if(t.isUnmounted)return;const l=t.vnode.props||F;let i=s;const n=e.startsWith("update:"),r=n&&zr(l,e.slice(7));r&&(r.trim&&(i=s.map(_=>q(_)?_.trim():_)),r.number&&(i=s.map(is)));let o,u=l[o=Ds(e)]||l[o=Ds(St(e))];!u&&n&&(u=l[o=Ds(ie(e))]),u&&Ot(u,t,6,i);const g=l[o+"Once"];if(g){if(!t.emitted)t.emitted={};else if(t.emitted[o])return;t.emitted[o]=!0,Ot(g,t,6,i)}}function Qi(t,e,s=!1){const l=e.emitsCache,i=l.get(t);if(i!==void 0)return i;const n=t.emits;let r={},o=!1;if(!W(t)){const u=g=>{const _=Qi(g,e,!0);_&&(o=!0,et(r,_))};!s&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}return!n&&!o?(K(t)&&l.set(t,null),null):(N(n)?n.forEach(u=>r[u]=null):et(r,n),K(t)&&l.set(t,r),r)}function As(t,e){return!t||!_s(e)?!1:(e=e.slice(2).replace(/Once$/,""),R(t,e[0].toLowerCase()+e.slice(1))||R(t,ie(e))||R(t,e))}function Cs(t){const{type:e,vnode:s,proxy:l,withProxy:i,propsOptions:[n],slots:r,attrs:o,emit:u,render:g,renderCache:_,props:f,data:k,setupState:v,ctx:I,inheritAttrs:O}=t,lt=rs(t);let H,$;try{if(s.shapeFlag&4){const y=i||l,Z=y;H=vt(g.call(Z,y,_,f,v,k,I)),$=o}else{const y=e;H=vt(y.length>1?y(f,{attrs:o,slots:r,emit:u}):y(f,null)),$=e.props?o:Ur(o)}}catch(y){Ge.length=0,ps(y,t,1),H=Y(le)}let J=H;if($&&O!==!1){const y=Object.keys($),{shapeFlag:Z}=J;y.length&&Z&7&&(n&&y.some(Zs)&&($=Lr($,n)),J=fe(J,$,!1,!0))}return s.dirs&&(J=fe(J,null,!1,!0),J.dirs=J.dirs?J.dirs.concat(s.dirs):s.dirs),s.transition&&dl(J,s.transition),H=J,rs(lt),H}const Ur=t=>{let e;for(const s in t)(s==="class"||s==="style"||_s(s))&&((e||(e={}))[s]=t[s]);return e},Lr=(t,e)=>{const s={};for(const l in t)(!Zs(l)||!(l.slice(9)in e))&&(s[l]=t[l]);return s};function Br(t,e,s){const{props:l,children:i,component:n}=t,{props:r,children:o,patchFlag:u}=e,g=n.emitsOptions;if(e.dirs||e.transition)return!0;if(s&&u>=0){if(u&1024)return!0;if(u&16)return l?Pl(l,r,g):!!r;if(u&8){const _=e.dynamicProps;for(let f=0;f<_.length;f++){const k=_[f];if(r[k]!==l[k]&&!As(g,k))return!0}}}else return(i||o)&&(!o||!o.$stable)?!0:l===r?!1:l?r?Pl(l,r,g):!0:!!r;return!1}function Pl(t,e,s){const l=Object.keys(e);if(l.length!==Object.keys(t).length)return!0;for(let i=0;i<l.length;i++){const n=l[i];if(e[n]!==t[n]&&!As(s,n))return!0}return!1}function Kr({vnode:t,parent:e},s){for(;e;){const l=e.subTree;if(l.suspense&&l.suspense.activeBranch===t&&(l.el=t.el),l===t)(t=e.vnode).el=s,e=e.parent;else break}}const Xi=t=>t.__isSuspense;function Vr(t,e){e&&e.pendingBranch?N(t)?e.effects.push(...t):e.effects.push(t):tr(t)}const Q=Symbol.for("v-fgt"),ks=Symbol.for("v-txt"),le=Symbol.for("v-cmt"),es=Symbol.for("v-stc"),Ge=[];let ht=null;function C(t=!1){Ge.push(ht=t?null:[])}function $r(){Ge.pop(),ht=Ge[Ge.length-1]||null}let Ce=1;function Hl(t){Ce+=t,t<0&&ht&&(ht.hasOnce=!0)}function tn(t){return t.dynamicChildren=Ce>0?ht||oe:null,$r(),Ce>0&&ht&&ht.push(t),t}function B(t,e,s,l,i,n){return tn(S(t,e,s,l,i,n,!0))}function he(t,e,s,l,i){return tn(Y(t,e,s,l,i,!0))}function Jr(t){return t?t.__v_isVNode===!0:!1}function we(t,e){return t.type===e.type&&t.key===e.key}const en=({key:t})=>t??null,ss=({ref:t,ref_key:e,ref_for:s})=>(typeof t=="number"&&(t=""+t),t!=null?q(t)||ot(t)||W(t)?{i:xt,r:t,k:e,f:!!s}:t:null);function S(t,e=null,s=null,l=0,i=null,n=t===Q?0:1,r=!1,o=!1){const u={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&en(e),ref:e&&ss(e),scopeId:Wi,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:n,patchFlag:l,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:xt};return o?(gl(u,s),n&128&&t.normalize(u)):s&&(u.shapeFlag|=q(s)?8:16),Ce>0&&!r&&ht&&(u.patchFlag>0||n&6)&&u.patchFlag!==32&&ht.push(u),u}const Y=qr;function qr(t,e=null,s=null,l=0,i=null,n=!1){if((!t||t===hr)&&(t=le),Jr(t)){const o=fe(t,e,!0);return s&&gl(o,s),Ce>0&&!n&&ht&&(o.shapeFlag&6?ht[ht.indexOf(t)]=o:ht.push(o)),o.patchFlag=-2,o}if(oo(t)&&(t=t.__vccOpts),e){e=Zr(e);let{class:o,style:u}=e;o&&!q(o)&&(e.class=Pt(o)),K(u)&&(rl(u)&&!N(u)&&(u=et({},u)),e.style=Xs(u))}const r=q(t)?1:Xi(t)?128:lr(t)?64:K(t)?4:W(t)?2:0;return S(t,e,s,l,i,r,n,!0)}function Zr(t){return t?rl(t)||Fi(t)?et({},t):t:null}function fe(t,e,s=!1,l=!1){const{props:i,ref:n,patchFlag:r,children:o,transition:u}=t,g=e?Qr(i||{},e):i,_={__v_isVNode:!0,__v_skip:!0,type:t.type,props:g,key:g&&en(g),ref:e&&e.ref?s&&n?N(n)?n.concat(ss(e)):[n,ss(e)]:ss(e):n,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Q?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:u,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&fe(t.ssContent),ssFallback:t.ssFallback&&fe(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return u&&l&&dl(_,u.clone(_)),_}function Ie(t=" ",e=0){return Y(ks,null,t,e)}function Yr(t,e){const s=Y(es,null,t);return s.staticCount=e,s}function xe(t="",e=!1){return e?(C(),he(le,null,t)):Y(le,null,t)}function vt(t){return t==null||typeof t=="boolean"?Y(le):N(t)?Y(Q,null,t.slice()):typeof t=="object"?Kt(t):Y(ks,null,String(t))}function Kt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:fe(t)}function gl(t,e){let s=0;const{shapeFlag:l}=t;if(e==null)e=null;else if(N(e))s=16;else if(typeof e=="object")if(l&65){const i=e.default;i&&(i._c&&(i._d=!1),gl(t,i()),i._c&&(i._d=!0));return}else{s=32;const i=e._;!i&&!Fi(e)?e._ctx=xt:i===3&&xt&&(xt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else W(e)?(e={default:e,_ctx:xt},s=32):(e=String(e),l&64?(s=16,e=[Ie(e)]):s=8);t.children=e,t.shapeFlag|=s}function Qr(...t){const e={};for(let s=0;s<t.length;s++){const l=t[s];for(const i in l)if(i==="class")e.class!==l.class&&(e.class=Pt([e.class,l.class]));else if(i==="style")e.style=Xs([e.style,l.style]);else if(_s(i)){const n=e[i],r=l[i];r&&n!==r&&!(N(n)&&n.includes(r))&&(e[i]=n?[].concat(n,r):r)}else i!==""&&(e[i]=l[i])}return e}function Nt(t,e,s,l=null){Ot(t,e,7,[s,l])}const Xr=Hi();let to=0;function eo(t,e,s){const l=t.type,i=(e?e.appContext:t.appContext)||Xr,n={uid:to++,vnode:t,type:l,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new kn(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Li(l,i),emitsOptions:Qi(l,i),emit:null,emitted:null,propsDefaults:F,inheritAttrs:l.inheritAttrs,ctx:F,data:F,props:F,attrs:F,slots:F,refs:F,setupState:F,setupContext:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return n.ctx={_:n},n.root=e?e.root:n,n.emit=Fr.bind(null,n),t.ce&&t.ce(n),n}let tt=null,as,$s;{const t=ri(),e=(s,l)=>{let i;return(i=t[s])||(i=t[s]=[]),i.push(l),n=>{i.length>1?i.forEach(r=>r(n)):i[0](n)}};as=e("__VUE_INSTANCE_SETTERS__",s=>tt=s),$s=e("__VUE_SSR_SETTERS__",s=>ws=s)}const ze=t=>{const e=tt;return as(t),t.scope.on(),()=>{t.scope.off(),as(e)}},Ml=()=>{tt&&tt.scope.off(),as(null)};function sn(t){return t.vnode.shapeFlag&4}let ws=!1;function so(t,e=!1,s=!1){e&&$s(e);const{props:l,children:i}=t.vnode,n=sn(t);yr(t,l,n,e),Wr(t,i,s);const r=n?lo(t,e):void 0;return e&&$s(!1),r}function lo(t,e){const s=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,pr);const{setup:l}=s;if(l){const i=t.setupContext=l.length>1?no(t):null,n=ze(t);Vt();const r=He(l,t,0,[t.props,i]);if($t(),n(),si(r)){if(ye(t)||ji(t),r.then(Ml,Ml),e)return r.then(o=>{zl(t,o,e)}).catch(o=>{ps(o,t,0)});t.asyncDep=r}else zl(t,r,e)}else ln(t,e)}function zl(t,e,s){W(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:K(e)&&(t.setupState=Ti(e)),ln(t,s)}let Fl;function ln(t,e,s){const l=t.type;if(!t.render){if(!e&&Fl&&!l.render){const i=l.template||_l(t).template;if(i){const{isCustomElement:n,compilerOptions:r}=t.appContext.config,{delimiters:o,compilerOptions:u}=l,g=et(et({isCustomElement:n,delimiters:o},r),u);l.render=Fl(i,g)}}t.render=l.render||Wt}{const i=ze(t);Vt();try{br(t)}finally{$t(),i()}}}const io={get(t,e){return st(t,"get",""),t[e]}};function no(t){const e=s=>{t.exposed=s||{}};return{attrs:new Proxy(t.attrs,io),slots:t.slots,emit:t.emit,expose:e}}function Es(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Ti(Kn(t.exposed)),{get(e,s){if(s in e)return e[s];if(s in Ne)return Ne[s](t)},has(e,s){return s in e||s in Ne}})):t.proxy}function ro(t,e=!0){return W(t)?t.displayName||t.name:t.name||e&&t.__name}function oo(t){return W(t)&&"__vccOpts"in t}const ao=(t,e)=>qn(t,e,ws),uo="3.5.5";/**
* @vue/runtime-dom v3.5.5
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Js;const Ul=typeof window<"u"&&window.trustedTypes;if(Ul)try{Js=Ul.createPolicy("vue",{createHTML:t=>t})}catch{}const nn=Js?t=>Js.createHTML(t):t=>t,_o="http://www.w3.org/2000/svg",mo="http://www.w3.org/1998/Math/MathML",It=typeof document<"u"?document:null,Ll=It&&It.createElement("template"),go={insert:(t,e,s)=>{e.insertBefore(t,s||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,s,l)=>{const i=e==="svg"?It.createElementNS(_o,t):e==="mathml"?It.createElementNS(mo,t):s?It.createElement(t,{is:s}):It.createElement(t);return t==="select"&&l&&l.multiple!=null&&i.setAttribute("multiple",l.multiple),i},createText:t=>It.createTextNode(t),createComment:t=>It.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>It.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,s,l,i,n){const r=s?s.previousSibling:e.lastChild;if(i&&(i===n||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),s),!(i===n||!(i=i.nextSibling)););else{Ll.innerHTML=nn(l==="svg"?`<svg>${t}</svg>`:l==="mathml"?`<math>${t}</math>`:t);const o=Ll.content;if(l==="svg"||l==="mathml"){const u=o.firstChild;for(;u.firstChild;)o.appendChild(u.firstChild);o.removeChild(u)}e.insertBefore(o,s)}return[r?r.nextSibling:e.firstChild,s?s.previousSibling:e.lastChild]}},fo=Symbol("_vtc");function xo(t,e,s){const l=t[fo];l&&(e=(e?[e,...l]:[...l]).join(" ")),e==null?t.removeAttribute("class"):s?t.setAttribute("class",e):t.className=e}const Bl=Symbol("_vod"),ho=Symbol("_vsh"),co=Symbol(""),po=/(^|;)\s*display\s*:/;function bo(t,e,s){const l=t.style,i=q(s);let n=!1;if(s&&!i){if(e)if(q(e))for(const r of e.split(";")){const o=r.slice(0,r.indexOf(":")).trim();s[o]==null&&ls(l,o,"")}else for(const r in e)s[r]==null&&ls(l,r,"");for(const r in s)r==="display"&&(n=!0),ls(l,r,s[r])}else if(i){if(e!==s){const r=l[co];r&&(s+=";"+r),l.cssText=s,n=po.test(s)}}else e&&t.removeAttribute("style");Bl in t&&(t[Bl]=n?l.display:"",t[ho]&&(l.display="none"))}const Kl=/\s*!important$/;function ls(t,e,s){if(N(s))s.forEach(l=>ls(t,e,l));else if(s==null&&(s=""),e.startsWith("--"))t.setProperty(e,s);else{const l=Ao(t,e);Kl.test(s)?t.setProperty(ie(l),s.replace(Kl,""),"important"):t[l]=s}}const Vl=["Webkit","Moz","ms"],Is={};function Ao(t,e){const s=Is[e];if(s)return s;let l=St(e);if(l!=="filter"&&l in t)return Is[e]=l;l=fs(l);for(let i=0;i<Vl.length;i++){const n=Vl[i]+l;if(n in t)return Is[e]=n}return e}const $l="http://www.w3.org/1999/xlink";function Jl(t,e,s,l,i,n=pn(e)){l&&e.startsWith("xlink:")?s==null?t.removeAttributeNS($l,e.slice(6,e.length)):t.setAttributeNS($l,e,s):s==null||n&&!oi(s)?t.removeAttribute(e):t.setAttribute(e,n?"":jt(s)?String(s):s)}function ko(t,e,s,l){if(e==="innerHTML"||e==="textContent"){s!=null&&(t[e]=e==="innerHTML"?nn(s):s);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const r=i==="OPTION"?t.getAttribute("value")||"":t.value,o=s==null?t.type==="checkbox"?"on":"":String(s);(r!==o||!("_value"in t))&&(t.value=o),s==null&&t.removeAttribute(e),t._value=s;return}let n=!1;if(s===""||s==null){const r=typeof t[e];r==="boolean"?s=oi(s):s==null&&r==="string"?(s="",n=!0):r==="number"&&(s=0,n=!0)}try{t[e]=s}catch{}n&&t.removeAttribute(e)}function te(t,e,s,l){t.addEventListener(e,s,l)}function wo(t,e,s,l){t.removeEventListener(e,s,l)}const ql=Symbol("_vei");function Eo(t,e,s,l,i=null){const n=t[ql]||(t[ql]={}),r=n[e];if(l&&r)r.value=l;else{const[o,u]=So(e);if(l){const g=n[e]=yo(l,i);te(t,o,g,u)}else r&&(wo(t,o,r,u),n[e]=void 0)}}const Zl=/(?:Once|Passive|Capture)$/;function So(t){let e;if(Zl.test(t)){e={};let l;for(;l=t.match(Zl);)t=t.slice(0,t.length-l[0].length),e[l[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ie(t.slice(2)),e]}let Rs=0;const To=Promise.resolve(),Do=()=>Rs||(To.then(()=>Rs=0),Rs=Date.now());function yo(t,e){const s=l=>{if(!l._vts)l._vts=Date.now();else if(l._vts<=s.attached)return;Ot(No(l,s.value),e,5,[l])};return s.value=t,s.attached=Do(),s}function No(t,e){if(N(e)){const s=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{s.call(t),t._stopped=!0},e.map(l=>i=>!i._stopped&&l&&l(i))}else return e}const Yl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Go=(t,e,s,l,i,n)=>{const r=i==="svg";e==="class"?xo(t,l,r):e==="style"?bo(t,s,l):_s(e)?Zs(e)||Eo(t,e,s,l,n):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):vo(t,e,l,r))?(ko(t,e,l),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Jl(t,e,l,r,n,e!=="value")):(e==="true-value"?t._trueValue=l:e==="false-value"&&(t._falseValue=l),Jl(t,e,l,r))};function vo(t,e,s,l){if(l)return!!(e==="innerHTML"||e==="textContent"||e in t&&Yl(e)&&W(s));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Yl(e)&&q(s)?!1:!!(e in t||t._isVueCE&&(/[A-Z]/.test(e)||!q(s)))}const us=t=>{const e=t.props["onUpdate:modelValue"]||!1;return N(e)?s=>Qe(e,s):e};function Wo(t){t.target.composing=!0}function Ql(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const me=Symbol("_assign"),jo={created(t,{modifiers:{lazy:e,trim:s,number:l}},i){t[me]=us(i);const n=l||i.props&&i.props.type==="number";te(t,e?"change":"input",r=>{if(r.target.composing)return;let o=t.value;s&&(o=o.trim()),n&&(o=is(o)),t[me](o)}),s&&te(t,"change",()=>{t.value=t.value.trim()}),e||(te(t,"compositionstart",Wo),te(t,"compositionend",Ql),te(t,"change",Ql))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:s,modifiers:{lazy:l,trim:i,number:n}},r){if(t[me]=us(r),t.composing)return;const o=(n||t.type==="number")&&!/^0\d/.test(t.value)?is(t.value):t.value,u=e??"";o!==u&&(document.activeElement===t&&t.type!=="range"&&(l&&e===s||i&&t.value.trim()===u)||(t.value=u))}},Ps={deep:!0,created(t,{value:e,modifiers:{number:s}},l){const i=ms(e);te(t,"change",()=>{const n=Array.prototype.filter.call(t.options,r=>r.selected).map(r=>s?is(ds(r)):ds(r));t[me](t.multiple?i?new Set(n):n:n[0]),t._assigning=!0,yi(()=>{t._assigning=!1})}),t[me]=us(l)},mounted(t,{value:e,modifiers:{number:s}}){Xl(t,e)},beforeUpdate(t,e,s){t[me]=us(s)},updated(t,{value:e,modifiers:{number:s}}){t._assigning||Xl(t,e)}};function Xl(t,e,s){const l=t.multiple,i=N(e);if(!(l&&!i&&!ms(e))){for(let n=0,r=t.options.length;n<r;n++){const o=t.options[n],u=ds(o);if(l)if(i){const g=typeof u;g==="string"||g==="number"?o.selected=e.some(_=>String(_)===String(u)):o.selected=An(e,u)>-1}else o.selected=e.has(u);else if(xs(ds(o),e)){t.selectedIndex!==n&&(t.selectedIndex=n);return}}!l&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function ds(t){return"_value"in t?t._value:t.value}const Oo=et({patchProp:Go},go);let ti;function Co(){return ti||(ti=Or(Oo))}const Io=(...t)=>{const e=Co().createApp(...t),{mount:s}=e;return e.mount=l=>{const i=Po(l);if(!i)return;const n=e._component;!W(n)&&!n.render&&!n.template&&(n.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const r=s(i,!1,Ro(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),r},e};function Ro(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Po(t){return q(t)?document.querySelector(t):t}const ct=(t,e)=>{const s=t.__vccOpts||t;for(const[l,i]of e)s[l]=i;return s},Ho={};function Mo(t,e){return C(),B(Q,null,[e[0]||(e[0]=S("h1",null,"GlossySnake Backend",-1)),e[1]||(e[1]=S("p",null,[Ie("INDEX PAGE "),S("span",{class:"index_version_span"},[Ie("Vue.js version | "),S("a",{href:"js"},"JS version")])],-1))],64)}const zo=ct(Ho,[["render",Mo],["__scopeId","data-v-536918ad"]]),Lt=Pe({}),ut={on(t,e){Lt[t]||(Lt[t]=[]),Lt[t].push(e)},off(t,e){Lt[t]&&(Lt[t]=Lt[t].filter(s=>s!==e))},emit(t,e){Lt[t]&&Lt[t].forEach(s=>s(e))}};function At(){}At.prototype.host="http://glossysnake.com";At.prototype.api="/api/v4";At.prototype.uri=function(t){return this.host+this.api+t};At.prototype.jsonHelper=async function(t){try{return await t.json()}catch(e){return console.log(e),{error:JSON.parse(JSON.stringify(e,Object.getOwnPropertyNames(e)))}}};At.prototype.submit=async function(t,e="GET",s=null){const l=this.uri(t);let i={method:e,headers:{"Content-type":"application/json; charset=UTF-8"},credentials:"include"};if(e!="GET"){i.body=JSON.stringify(s);const r=(document.cookie.match(/^(?:.*;)?\s*csrftoken\s*=\s*([^;]+)(?:.*)?$/)||[,null])[1];r||console.log("POST: no csrftoken."),i.headers["X-CSRFToken"]=r}const n=await fetch(l,i);if(!n.ok){const r=await this.jsonHelper(n),o=l+": "+n.statusText+`
> `+JSON.stringify(r);throw ut.emit("addAlert",{message:o,alertClass:"alert-warning"}),new Error(o)}return this.emitCorpusesUpdate(t),n};At.prototype.emitCorpusesUpdate=async function(t){["/corpuses/","/tasks/","/user/check","/user/get-temp-user","/user/logout","/rest-auth/registration/","/rest-auth/login/","/rest-auth/logout/"].some(s=>t.endsWith(s))||(ut.emit("updateCorpuses"),ut.emit("updateTasks"))};const Fo={data(){return{api:new At,email:null}},computed:{userinfo(){return this.email?this.email.includes("@example.com")?this.email.replace("@example.com",""):this.email:"Log in."}},methods:{meow(){console.log("meow")},async getTempUser(){const e=await(await this.api.submit("/user/get-temp-user")).json();return e.success?(this.key=e.key,!0):(console.error("get-temp-user unsuccessful"),!1)},async updateUser(){const t=this.email;let s=await(await this.api.submit("/user/check")).json();if(!s.is_auth){if(await this.getTempUser(),!await this.api.submit("/user/check")){console.error("could not get the temp user.");return}s=await(await this.api.submit("/user/check")).json()}t!=s.email&&(this.email=s.email),ut.emit("updateCorpuses"),ut.emit("updateTasks")},async logout(){this.api.submit("/user/logout").then(()=>{this.email=null,this.updateUser()})}},async created(){await this.updateUser()}},Uo={id:"frontend_auth_div"},Lo={class:"userinfo_p"};function Bo(t,e,s,l,i,n){return C(),B("div",Uo,[S("p",Lo,bt(n.userinfo),1),S("p",{onClick:e[0]||(e[0]=r=>n.logout()),class:"btn"}," Logout ")])}const Ko=ct(Fo,[["render",Bo],["__scopeId","data-v-4896238f"]]),Se=Pe({annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}),Vo={data(){return Se},watch:{annotator_name(){this.emitChange()},lang_from(){this.emitChange()},lang_to(){this.emitChange()}},methods:{emitChange(){Se.annotator_name=this.annotator_name,Se.lang_from=this.lang_from,Se.lang_to=this.lang_to}}},$o={class:"container mt-4"},Jo={class:"row"},qo={class:"col-md-4"},Zo={class:"col-md-4"},Yo={class:"col-md-4"};function Qo(t,e,s,l,i,n){return C(),B("div",$o,[S("div",Jo,[S("div",qo,[e[4]||(e[4]=S("label",{for:"annotator_name"},"annotator_name:",-1)),Xe(S("select",{"onUpdate:modelValue":e[0]||(e[0]=r=>t.annotator_name=r),name:"annotator_name",id:"annotator_name_select",class:"form-control"},e[3]||(e[3]=[Yr('<option value="dummy">dummy</option><option value="chatgpt_ft0">chatgpt_ft0</option><option value="chatgpt_gpt-4o-mini-untrained_0">chatgpt_gpt-4o-mini-untrained_0</option><option value="chatgpt_gpt-4o-mini-pretrained_0">chatgpt_gpt-4o-mini-pretrained_0</option><option value="chatgpt_gpt-3.5-turbo-untrained_0">chatgpt_gpt-3.5-turbo-untrained_0</option><option value="chatgpt_gpt-3.5-turbo-pretrained_0">chatgpt_gpt-3.5-turbo-pretrained_0</option>',6)]),512),[[Ps,t.annotator_name]])]),S("div",Zo,[e[6]||(e[6]=S("label",{for:"lang_from"},"lang_from:",-1)),Xe(S("select",{"onUpdate:modelValue":e[1]||(e[1]=r=>t.lang_from=r),name:"lang_from",id:"lang_from_select",class:"form-control"},e[5]||(e[5]=[S("option",{value:"French"},"French",-1),S("option",{value:"German"},"German",-1)]),512),[[Ps,t.lang_from]])]),S("div",Yo,[e[8]||(e[8]=S("label",{for:"lang_to"},"lang_to:",-1)),Xe(S("select",{"onUpdate:modelValue":e[2]||(e[2]=r=>t.lang_to=r),name:"lang_to",id:"lang_to_select",class:"form-control"},e[7]||(e[7]=[S("option",{value:"English"},"English",-1)]),512),[[Ps,t.lang_to]])])])])}const Xo=ct(Vo,[["render",Qo]]),ei=[{corpus_id:"Winterreise",corpuses_history:[{paragraphs:[{pstate:"ANNOTATED",tokens:[{txt:"#",is_delimiter:!1,gloss:"#"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Gute",is_delimiter:!1,gloss:"Good"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Nacht.",is_delimiter:!1,gloss:"Night."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:"# Gute Nacht.",annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Fremd",is_delimiter:!1,gloss:"Stranger"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"bin",is_delimiter:!1,gloss:"am"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"eingezogen,",is_delimiter:!1,gloss:"gone-in,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Fremd",is_delimiter:!1,gloss:"stranger"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"zieh’",is_delimiter:!1,gloss:"draw"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wieder",is_delimiter:!1,gloss:"again (now)"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"aus.",is_delimiter:!1,gloss:"out."},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Der",is_delimiter:!1,gloss:"The"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Mai",is_delimiter:!1,gloss:"May"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"war",is_delimiter:!1,gloss:"was"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mir",is_delimiter:!1,gloss:"to-me"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"gewogen",is_delimiter:!1,gloss:"favourable"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Mit",is_delimiter:!1,gloss:"With"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"manchem",is_delimiter:!1,gloss:"many-a"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Blumenstrauß.",is_delimiter:!1,gloss:"flower-bunch."},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Das",is_delimiter:!1,gloss:"The"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Mädchen",is_delimiter:!1,gloss:"girl"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sprach",is_delimiter:!1,gloss:"spake"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"von",is_delimiter:!1,gloss:"of"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Liebe,",is_delimiter:!1,gloss:"love,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Die",is_delimiter:!1,gloss:"The"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Mutter",is_delimiter:!1,gloss:"mother"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"gar",is_delimiter:!1,gloss:"even"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"von",is_delimiter:!1,gloss:"of"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Eh’",is_delimiter:!1,gloss:"marriage"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"—",is_delimiter:!1,gloss:"—"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Nun",is_delimiter:!1,gloss:"Now"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ist",is_delimiter:!1,gloss:"is"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"die",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Welt",is_delimiter:!1,gloss:"world"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"so",is_delimiter:!1,gloss:"so"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"trübe,",is_delimiter:!1,gloss:"dreary,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Der",is_delimiter:!1,gloss:"The"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Weg",is_delimiter:!1,gloss:"way"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"gehüllt",is_delimiter:!1,gloss:"enveloped"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"in",is_delimiter:!1,gloss:"in"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Schnee.",is_delimiter:!1,gloss:"snow."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Fremd bin ich eingezogen,
Fremd zieh’ ich wieder aus.
Der Mai war mir gewogen
Mit manchem Blumenstrauß.
Das Mädchen sprach von Liebe,
Die Mutter gar von Eh’ —
Nun ist die Welt so trübe,
Der Weg gehüllt in Schnee.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"kann",is_delimiter:!1,gloss:"can"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"zu",is_delimiter:!1,gloss:"to"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"meiner",is_delimiter:!1,gloss:"my"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Reisen",is_delimiter:!1,gloss:"journeys"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Nicht",is_delimiter:!1,gloss:"not"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wählen",is_delimiter:!1,gloss:"choose"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mit",is_delimiter:!1,gloss:"with"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"der",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Zeit:",is_delimiter:!1,gloss:"time:"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Muß",is_delimiter:!1,gloss:"Must"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"selbst",is_delimiter:!1,gloss:"myself"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"den",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Weg",is_delimiter:!1,gloss:"way"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mir",is_delimiter:!1,gloss:"to-me"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"weisen",is_delimiter:!1,gloss:"point-out"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"In",is_delimiter:!1,gloss:"In"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dieser",is_delimiter:!1,gloss:"this"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Dunkelheit.",is_delimiter:!1,gloss:"darkness."},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Es",is_delimiter:!1,gloss:"A"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"zieht",is_delimiter:!1,gloss:"draws"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ein",is_delimiter:!1,gloss:"a"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Mondenschatten",is_delimiter:!1,gloss:"moon-shade"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Als",is_delimiter:!1,gloss:"As"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mein",is_delimiter:!1,gloss:"my"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Gefährte",is_delimiter:!1,gloss:"companion"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mit,",is_delimiter:!1,gloss:"with,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Und",is_delimiter:!1,gloss:"And"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"auf",is_delimiter:!1,gloss:"on"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"den",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"weißen",is_delimiter:!1,gloss:"white"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Matten",is_delimiter:!1,gloss:"meadows"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Such’",is_delimiter:!1,gloss:"Such’"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"des",is_delimiter:!1,gloss:"of-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Wildes",is_delimiter:!1,gloss:"wild-thing"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Tritt.",is_delimiter:!1,gloss:"tread."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Ich kann zu meiner Reisen
Nicht wählen mit der Zeit:
Muß selbst den Weg mir weisen
In dieser Dunkelheit.
Es zieht ein Mondenschatten
Als mein Gefährte mit,
Und auf den weißen Matten
Such’ ich des Wildes Tritt.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Was",is_delimiter:!1,gloss:"What"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"soll",is_delimiter:!1,gloss:"shall"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"länger",is_delimiter:!1,gloss:"longer"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"weilen,",is_delimiter:!1,gloss:"tarry,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Bis",is_delimiter:!1,gloss:"Until"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"man",is_delimiter:!1,gloss:"one"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mich",is_delimiter:!1,gloss:"me"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"trieb’",is_delimiter:!1,gloss:"drove"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"hinaus?",is_delimiter:!1,gloss:"forth?"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Laß",is_delimiter:!1,gloss:"Let"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"irre",is_delimiter:!1,gloss:"loiter"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Hunde",is_delimiter:!1,gloss:"dogs"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"heulen",is_delimiter:!1,gloss:"howl"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Vor",is_delimiter:!1,gloss:"Before"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ihres",is_delimiter:!1,gloss:"their"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Herren",is_delimiter:!1,gloss:"master's"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Haus!",is_delimiter:!1,gloss:"house!"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Die",is_delimiter:!1,gloss:"The"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Liebe",is_delimiter:!1,gloss:"Love"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"liebt",is_delimiter:!1,gloss:"loves"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"das",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Wandern,",is_delimiter:!1,gloss:"wandering,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"—",is_delimiter:!1,gloss:"—"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Gott",is_delimiter:!1,gloss:"God"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"hat",is_delimiter:!1,gloss:"has"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sie",is_delimiter:!1,gloss:"it"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"so",is_delimiter:!1,gloss:"so"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"gemacht",is_delimiter:!1,gloss:"made"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"—",is_delimiter:!1,gloss:"—"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Von",is_delimiter:!1,gloss:"From"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Einem",is_delimiter:!1,gloss:"one"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"zu",is_delimiter:!1,gloss:"to"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dem",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Andern",is_delimiter:!1,gloss:"other"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"—",is_delimiter:!1,gloss:"—"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Fein",is_delimiter:!1,gloss:"Sweet"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Liebchen,",is_delimiter:!1,gloss:"darling,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"gute",is_delimiter:!1,gloss:"good"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Nacht!",is_delimiter:!1,gloss:"night!"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Was soll ich länger weilen,
Bis man mich trieb’ hinaus?
Laß irre Hunde heulen
Vor ihres Herren Haus!
Die Liebe liebt das Wandern, —
Gott hat sie so gemacht —
Von Einem zu dem Andern —
Fein Liebchen, gute Nacht!`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Will",is_delimiter:!1,gloss:"Will"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dich",is_delimiter:!1,gloss:"thee"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"im",is_delimiter:!1,gloss:"in-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Traum",is_delimiter:!1,gloss:"dream"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nicht",is_delimiter:!1,gloss:"not"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"stören,",is_delimiter:!1,gloss:"disturb,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Wär’",is_delimiter:!1,gloss:"Were’t"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Schad’",is_delimiter:!1,gloss:"Sh’were"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"um",is_delimiter:!1,gloss:"about"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"deine",is_delimiter:!1,gloss:"thy"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Ruh’,",is_delimiter:!1,gloss:"rest,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Sollst",is_delimiter:!1,gloss:"Shalt"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"meinen",is_delimiter:!1,gloss:"my"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Tritt",is_delimiter:!1,gloss:"tread"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nicht",is_delimiter:!1,gloss:"not"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"hören",is_delimiter:!1,gloss:"hear"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"—",is_delimiter:!1,gloss:"—"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Sacht,",is_delimiter:!1,gloss:"Soft,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sacht",is_delimiter:!1,gloss:"soft"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"die",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Thüre",is_delimiter:!1,gloss:"door"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"zu!",is_delimiter:!1,gloss:"to!"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"schreibe",is_delimiter:!1,gloss:"write"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nur",is_delimiter:!1,gloss:"only"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"im",is_delimiter:!1,gloss:"in-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Gehen",is_delimiter:!1,gloss:"going"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"An’s",is_delimiter:!1,gloss:"At-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Thor",is_delimiter:!1,gloss:"gate"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"noch",is_delimiter:!1,gloss:"yet-(wishing)"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"gute",is_delimiter:!1,gloss:"good"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Nacht,",is_delimiter:!1,gloss:"night-"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Damit",is_delimiter:!1,gloss:"that"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"du",is_delimiter:!1,gloss:"thou"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mögest",is_delimiter:!1,gloss:"may"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sehen,",is_delimiter:!1,gloss:"see,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"hab’",is_delimiter:!1,gloss:"have"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"an",is_delimiter:!1,gloss:"on"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dich",is_delimiter:!1,gloss:"thee"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"gedacht.",is_delimiter:!1,gloss:"thought."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Will dich im Traum nicht stören,
Wär’ Schad’ um deine Ruh’,
Sollst meinen Tritt nicht hören —
Sacht, sacht die Thüre zu!
Ich schreibe nur im Gehen
An’s Thor noch gute Nacht,
Damit du mögest sehen,
Ich hab’ an dich gedacht.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"#",is_delimiter:!1,gloss:"#"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Die",is_delimiter:!1,gloss:"The"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Wetterfahne.",is_delimiter:!1,gloss:"Weather-vanes."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:"# Die Wetterfahne.",annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Der",is_delimiter:!1,gloss:"The"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Wind",is_delimiter:!1,gloss:"Wind"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"spielt",is_delimiter:!1,gloss:"plays"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mit",is_delimiter:!1,gloss:"with"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"der",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Wetterfahne",is_delimiter:!1,gloss:"weather-vane"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Auf",is_delimiter:!1,gloss:"On"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"meines",is_delimiter:!1,gloss:"my"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"schönen",is_delimiter:!1,gloss:"pretty"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Liebchens",is_delimiter:!1,gloss:"love's"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Haus.",is_delimiter:!1,gloss:"house."},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Da",is_delimiter:!1,gloss:"There"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dacht’",is_delimiter:!1,gloss:"thought"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"schon",is_delimiter:!1,gloss:"already"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"in",is_delimiter:!1,gloss:"in"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"meinem",is_delimiter:!1,gloss:"my"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Wahne,",is_delimiter:!1,gloss:"fancy,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Sie",is_delimiter:!1,gloss:"She"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"pfiff’",is_delimiter:!1,gloss:"whistled"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"den",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"armen",is_delimiter:!1,gloss:"poor"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Flüchtling",is_delimiter:!1,gloss:"fugitive"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"aus.",is_delimiter:!1,gloss:"out."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Der Wind spielt mit der Wetterfahne
Auf meines schönen Liebchens Haus.
Da dacht’ ich schon in meinem Wahne,
Sie pfiff’ den armen Flüchtling aus.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Er",is_delimiter:!1,gloss:"He"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"hätt’",is_delimiter:!1,gloss:"ought-have"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"es",is_delimiter:!1,gloss:"it"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ehr",is_delimiter:!1,gloss:"sooner"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"bemerken",is_delimiter:!1,gloss:"to-notice"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sollen,",is_delimiter:!1,gloss:"to-have-been-able,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Des",is_delimiter:!1,gloss:"Of-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Hauses",is_delimiter:!1,gloss:"house’s"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"aufgestecktes",is_delimiter:!1,gloss:"hung-up"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Schild,",is_delimiter:!1,gloss:"sign,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"So",is_delimiter:!1,gloss:"Then"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"hätt’",is_delimiter:!1,gloss:"ought"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"er",is_delimiter:!1,gloss:"he"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nimmer",is_delimiter:!1,gloss:"never"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"suchen",is_delimiter:!1,gloss:"to-search"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wollen",is_delimiter:!1,gloss:"to-have-will"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Im",is_delimiter:!1,gloss:"In-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Haus’",is_delimiter:!1,gloss:"house"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ein",is_delimiter:!1,gloss:"a"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"treues",is_delimiter:!1,gloss:"faithful"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Frauenbild.",is_delimiter:!1,gloss:"female-portrait."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Er hätt’ es ehr bemerken sollen,
Des Hauses aufgestecktes Schild,
So hätt’ er nimmer suchen wollen
Im Haus’ ein treues Frauenbild.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Der",is_delimiter:!1,gloss:"The"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Wind",is_delimiter:!1,gloss:"Wind"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"spielt",is_delimiter:!1,gloss:"plays"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"drinnen",is_delimiter:!1,gloss:"within"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mit",is_delimiter:!1,gloss:"with"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"den",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Herzen,",is_delimiter:!1,gloss:"hearts,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Wie",is_delimiter:!1,gloss:"As"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"auf",is_delimiter:!1,gloss:"on"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dem",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Dach,",is_delimiter:!1,gloss:"roof,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nur",is_delimiter:!1,gloss:"only"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nicht",is_delimiter:!1,gloss:"not"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"so",is_delimiter:!1,gloss:"so"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"laut.",is_delimiter:!1,gloss:"loud."},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Was",is_delimiter:!1,gloss:"What"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"fragen",is_delimiter:!1,gloss:"ask"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sie",is_delimiter:!1,gloss:"they"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nach",is_delimiter:!1,gloss:"after (care for)"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"meinen",is_delimiter:!1,gloss:"my"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Schmerzen?",is_delimiter:!1,gloss:"pains?"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Ihr",is_delimiter:!1,gloss:"Your"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Kind",is_delimiter:!1,gloss:"child"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ist",is_delimiter:!1,gloss:"is"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"eine",is_delimiter:!1,gloss:"a"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"reiche",is_delimiter:!1,gloss:"rich"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Braut.",is_delimiter:!1,gloss:"bride."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Der Wind spielt drinnen mit den Herzen,
Wie auf dem Dach, nur nicht so laut.
Was fragen sie nach meinen Schmerzen?
Ihr Kind ist eine reiche Braut.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"#",is_delimiter:!1,gloss:"!UNKNOWN"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Gefrorene",is_delimiter:!1,gloss:"!UNKNOWN"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Thränen.",is_delimiter:!1,gloss:"!UNKNOWN"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:"# Gefrorene Thränen.",annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Gefrorne",is_delimiter:!1,gloss:"Frozen"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Tropfen",is_delimiter:!1,gloss:"drops"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"fallen",is_delimiter:!1,gloss:"fall"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Von",is_delimiter:!1,gloss:"From"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"meinen",is_delimiter:!1,gloss:"my"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Wangen",is_delimiter:!1,gloss:"cheeks"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ab:",is_delimiter:!1,gloss:"off:"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Und",is_delimiter:!1,gloss:"And"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ist’s",is_delimiter:!1,gloss:"is-it"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mir",is_delimiter:!1,gloss:"to-me"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"denn",is_delimiter:!1,gloss:"then"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"entgangen,",is_delimiter:!1,gloss:"escaped,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Daß",is_delimiter:!1,gloss:"That"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"geweinet",is_delimiter:!1,gloss:"wept"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"hab’?",is_delimiter:!1,gloss:"have?"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Gefrorne Tropfen fallen
Von meinen Wangen ab:
Und ist’s mir denn entgangen,
Daß ich geweinet hab’?`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Ei",is_delimiter:!1,gloss:"Ah"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Thränen,",is_delimiter:!1,gloss:"Tears,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"meine",is_delimiter:!1,gloss:"my"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Thränen,",is_delimiter:!1,gloss:"tears,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Und",is_delimiter:!1,gloss:"And"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"seid",is_delimiter:!1,gloss:"are"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ihr",is_delimiter:!1,gloss:"ye"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"gar",is_delimiter:!1,gloss:"quite"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"so",is_delimiter:!1,gloss:"so"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"lau,",is_delimiter:!1,gloss:"lukewarm,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Daß",is_delimiter:!1,gloss:"That"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ihr",is_delimiter:!1,gloss:"ye"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"erstarrt",is_delimiter:!1,gloss:"congealed"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"zu",is_delimiter:!1,gloss:"to"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Eise,",is_delimiter:!1,gloss:"ice,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Wie",is_delimiter:!1,gloss:"How"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"kühler",is_delimiter:!1,gloss:"cool"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Morgenthau?",is_delimiter:!1,gloss:"dew?"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Ei Thränen, meine Thränen,
Und seid ihr gar so lau,
Daß ihr erstarrt zu Eise,
Wie kühler Morgenthau?`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Und",is_delimiter:!1,gloss:"And"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dringt",is_delimiter:!1,gloss:"wells"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"doch",is_delimiter:!1,gloss:"yet"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"aus",is_delimiter:!1,gloss:"out"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"der",is_delimiter:!1,gloss:"of-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Quelle",is_delimiter:!1,gloss:"fount"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Der",is_delimiter:!1,gloss:"Of-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Brust",is_delimiter:!1,gloss:"breast"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"so",is_delimiter:!1,gloss:"so"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"glühend",is_delimiter:!1,gloss:"glowing"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"heiß,",is_delimiter:!1,gloss:"hot,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Als",is_delimiter:!1,gloss:"As"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wolltet",is_delimiter:!1,gloss:"ye-would"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ihr",is_delimiter:!1,gloss:"it"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"zerschmelzen",is_delimiter:!1,gloss:"to-vanquish"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Des",is_delimiter:!1,gloss:"The"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ganzen",is_delimiter:!1,gloss:"whole"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Winters",is_delimiter:!1,gloss:"winter's"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Eis.",is_delimiter:!1,gloss:"ice."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Und dringt doch aus der Quelle
Der Brust so glühend heiß,
Als wolltet ihr zerschmelzen
Des ganzen Winters Eis.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"#",is_delimiter:!1,gloss:"!UNKNOWN"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Erstarrung.",is_delimiter:!1,gloss:"Stupor."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:"# Erstarrung.",annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"such’",is_delimiter:!1,gloss:"sought"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"im",is_delimiter:!1,gloss:"in-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Schnee",is_delimiter:!1,gloss:"snow"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"vergebens",is_delimiter:!1,gloss:"in-vain"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Nach",is_delimiter:!1,gloss:"after"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ihrer",is_delimiter:!1,gloss:"her"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Tritte",is_delimiter:!1,gloss:"foot"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Spur,",is_delimiter:!1,gloss:"track,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Hier,",is_delimiter:!1,gloss:"Here,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wo",is_delimiter:!1,gloss:"where"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wir",is_delimiter:!1,gloss:"we"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"oft",is_delimiter:!1,gloss:"often"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"gewandelt",is_delimiter:!1,gloss:"walked"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Selbander",is_delimiter:!1,gloss:"each-other"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"durch",is_delimiter:!1,gloss:"through"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"die",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Flur.",is_delimiter:!1,gloss:"field."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Ich such’ im Schnee vergebens
Nach ihrer Tritte Spur,
Hier, wo wir oft gewandelt
Selbander durch die Flur.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"will",is_delimiter:!1,gloss:"will"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"den",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Boden",is_delimiter:!1,gloss:"ground"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"küssen,",is_delimiter:!1,gloss:"kiss,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Durchdringen",is_delimiter:!1,gloss:"Penetrate"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Eis",is_delimiter:!1,gloss:"ice"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"und",is_delimiter:!1,gloss:"and"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Schnee",is_delimiter:!1,gloss:"snow"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Mit",is_delimiter:!1,gloss:"with"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"meinen",is_delimiter:!1,gloss:"my"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"heißen",is_delimiter:!1,gloss:"hot"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Thränen,",is_delimiter:!1,gloss:"tears,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Bis",is_delimiter:!1,gloss:"till"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"die",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Erde",is_delimiter:!1,gloss:"earth"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"seh’.",is_delimiter:!1,gloss:"see."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Ich will den Boden küssen,
Durchdringen Eis und Schnee
Mit meinen heißen Thränen,
Bis ich die Erde seh’.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Wo",is_delimiter:!1,gloss:"Where"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"find’",is_delimiter:!1,gloss:"find"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"eine",is_delimiter:!1,gloss:"a"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Blüthe,",is_delimiter:!1,gloss:"blossom,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Wo",is_delimiter:!1,gloss:"Where"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"find’",is_delimiter:!1,gloss:"find"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"grünes",is_delimiter:!1,gloss:"green"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Gras?",is_delimiter:!1,gloss:"grass?"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Die",is_delimiter:!1,gloss:"The"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Blumen",is_delimiter:!1,gloss:"flowers"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sind",is_delimiter:!1,gloss:"are"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"erstorben,",is_delimiter:!1,gloss:"withered,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Der",is_delimiter:!1,gloss:"The"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Rasen",is_delimiter:!1,gloss:"turf"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sieht",is_delimiter:!1,gloss:"looks"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"so",is_delimiter:!1,gloss:"so"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"blaß.",is_delimiter:!1,gloss:"pale."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Wo find’ ich eine Blüthe,
Wo find’ ich grünes Gras?
Die Blumen sind erstorben,
Der Rasen sieht so blaß.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Soll",is_delimiter:!1,gloss:"Shall"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"denn",is_delimiter:!1,gloss:"then"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"kein",is_delimiter:!1,gloss:"no"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Angedenken",is_delimiter:!1,gloss:"remembrance"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nehmen",is_delimiter:!1,gloss:"take"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mit",is_delimiter:!1,gloss:"with"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"von",is_delimiter:!1,gloss:"from"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"hier?",is_delimiter:!1,gloss:"here?"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Wenn",is_delimiter:!1,gloss:"When"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"meine",is_delimiter:!1,gloss:"my"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Schmerzen",is_delimiter:!1,gloss:"pains"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"schweigen,",is_delimiter:!1,gloss:"cease,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Wer",is_delimiter:!1,gloss:"Who"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sagt",is_delimiter:!1,gloss:"says"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mir",is_delimiter:!1,gloss:"to-me"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dann",is_delimiter:!1,gloss:"then"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"von",is_delimiter:!1,gloss:"of"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ihr?",is_delimiter:!1,gloss:"her?"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Soll denn kein Angedenken
Ich nehmen mit von hier?
Wenn meine Schmerzen schweigen,
Wer sagt mir dann von ihr?`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Mein",is_delimiter:!1,gloss:"My"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Herz",is_delimiter:!1,gloss:"heart"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ist",is_delimiter:!1,gloss:"is"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wie",is_delimiter:!1,gloss:"like"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"erfroren,",is_delimiter:!1,gloss:"frozen,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Kalt",is_delimiter:!1,gloss:"cold"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"starrt",is_delimiter:!1,gloss:"stares"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ihr",is_delimiter:!1,gloss:"her"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Bild",is_delimiter:!1,gloss:"picture"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"darin:",is_delimiter:!1,gloss:"in-it:"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Schmilzt",is_delimiter:!1,gloss:"melts"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"je",is_delimiter:!1,gloss:"ever"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"das",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Herz",is_delimiter:!1,gloss:"heart"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mir",is_delimiter:!1,gloss:"to-me"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wieder,",is_delimiter:!1,gloss:"agin,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Fließt",is_delimiter:!1,gloss:"flows"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"auch",is_delimiter:!1,gloss:"also"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"das",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Bild",is_delimiter:!1,gloss:"picture"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dahin.",is_delimiter:!1,gloss:"thither."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Mein Herz ist wie erfroren,
Kalt starrt ihr Bild darin:
Schmilzt je das Herz mir wieder,
Fließt auch das Bild dahin.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"#",is_delimiter:!1,gloss:"!UNKNOWN"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Der",is_delimiter:!1,gloss:"The"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Lindenbaum.",is_delimiter:!1,gloss:"Linde-tree."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:"# Der Lindenbaum.",annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Am",is_delimiter:!1,gloss:"At-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Brunnen",is_delimiter:!1,gloss:"well"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"vor",is_delimiter:!1,gloss:"before"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dem",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Thore",is_delimiter:!1,gloss:"gate"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Da",is_delimiter:!1,gloss:"There"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"steht",is_delimiter:!1,gloss:"stands"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ein",is_delimiter:!1,gloss:"a"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Lindenbaum:",is_delimiter:!1,gloss:"lime-tree:"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"träumt’",is_delimiter:!1,gloss:"dreamt"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"in",is_delimiter:!1,gloss:"in"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"seinem",is_delimiter:!1,gloss:"its"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Schatten",is_delimiter:!1,gloss:"shade"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"So",is_delimiter:!1,gloss:"So"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"manchen",is_delimiter:!1,gloss:"many"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"süßen",is_delimiter:!1,gloss:"sweet"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Traum.",is_delimiter:!1,gloss:"dream."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Am Brunnen vor dem Thore
Da steht ein Lindenbaum:
Ich träumt’ in seinem Schatten
So manchen süßen Traum.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"schnitt",is_delimiter:!1,gloss:"cut"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"in",is_delimiter:!1,gloss:"in"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"seine",is_delimiter:!1,gloss:"its"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Rinde",is_delimiter:!1,gloss:"rind"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"So",is_delimiter:!1,gloss:"So"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"manches",is_delimiter:!1,gloss:"many-a"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"liebe",is_delimiter:!1,gloss:"dear"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Wort;",is_delimiter:!1,gloss:"word;"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Es",is_delimiter:!1,gloss:"It"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"zog",is_delimiter:!1,gloss:"drew"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"in",is_delimiter:!1,gloss:"in"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Freud’",is_delimiter:!1,gloss:"joy"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"und",is_delimiter:!1,gloss:"and"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Leide",is_delimiter:!1,gloss:"sorrow"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Zu",is_delimiter:!1,gloss:"To"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ihm",is_delimiter:!1,gloss:"it"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mich",is_delimiter:!1,gloss:"me"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"immer",is_delimiter:!1,gloss:"always"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"fort.",is_delimiter:!1,gloss:"forth."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Ich schnitt in seine Rinde
So manches liebe Wort;
Es zog in Freud’ und Leide
Zu ihm mich immer fort.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mußt’",is_delimiter:!1,gloss:"must’"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"auch",is_delimiter:!1,gloss:"also"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"heute",is_delimiter:!1,gloss:"to-day"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wandern",is_delimiter:!1,gloss:"wander"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Vorbei",is_delimiter:!1,gloss:"Past"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"in",is_delimiter:!1,gloss:"in"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"tiefer",is_delimiter:!1,gloss:"deep"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Nacht,",is_delimiter:!1,gloss:"night,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Da",is_delimiter:!1,gloss:"Then"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"hab’",is_delimiter:!1,gloss:"have"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"noch",is_delimiter:!1,gloss:"yet"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"im",is_delimiter:!1,gloss:"in-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Dunkel",is_delimiter:!1,gloss:"dark"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Die",is_delimiter:!1,gloss:"The"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Augen",is_delimiter:!1,gloss:"eyes"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"zugemacht.",is_delimiter:!1,gloss:"shut."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Ich mußt’ auch heute wandern
Vorbei in tiefer Nacht,
Da hab’ ich noch im Dunkel
Die Augen zugemacht.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Und",is_delimiter:!1,gloss:"And"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"seine",is_delimiter:!1,gloss:"its"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Zweige",is_delimiter:!1,gloss:"branches"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"rauschten,",is_delimiter:!1,gloss:"rustled,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Als",is_delimiter:!1,gloss:"As"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"riefen",is_delimiter:!1,gloss:"called"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sie",is_delimiter:!1,gloss:"they"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mir",is_delimiter:!1,gloss:"to-me"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"zu:",is_delimiter:!1,gloss:"to:"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Komm",is_delimiter:!1,gloss:"Come"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"her",is_delimiter:!1,gloss:"hither"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"zu",is_delimiter:!1,gloss:"to"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mir,",is_delimiter:!1,gloss:"me,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Geselle,",is_delimiter:!1,gloss:"Comrade,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Hier",is_delimiter:!1,gloss:"Here"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"findst",is_delimiter:!1,gloss:"findest"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"du",is_delimiter:!1,gloss:"thou"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"deine",is_delimiter:!1,gloss:"thy"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Ruh’!",is_delimiter:!1,gloss:"Rest!"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Und seine Zweige rauschten,
Als riefen sie mir zu:
Komm her zu mir, Geselle,
Hier findst du deine Ruh’!`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Die",is_delimiter:!1,gloss:"The"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"kalten",is_delimiter:!1,gloss:"cold"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Winde",is_delimiter:!1,gloss:"winds"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"bliesen",is_delimiter:!1,gloss:"blew"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Mir",is_delimiter:!1,gloss:"to-me"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"grad’",is_delimiter:!1,gloss:"straight"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"in’s",is_delimiter:!1,gloss:"into-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Angesicht,",is_delimiter:!1,gloss:"face,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Der",is_delimiter:!1,gloss:"The"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Hut",is_delimiter:!1,gloss:"hat"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"flog",is_delimiter:!1,gloss:"flew"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mir",is_delimiter:!1,gloss:"to-me"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"vom",is_delimiter:!1,gloss:"from-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Kopfe,",is_delimiter:!1,gloss:"head,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wendete",is_delimiter:!1,gloss:"turned"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mich",is_delimiter:!1,gloss:"me"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nicht.",is_delimiter:!1,gloss:"not."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Die kalten Winde bliesen
Mir grad’ in’s Angesicht,
Der Hut flog mir vom Kopfe,
Ich wendete mich nicht.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Nun",is_delimiter:!1,gloss:"Now"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"bin",is_delimiter:!1,gloss:"am"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"manche",is_delimiter:!1,gloss:"many (an)"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Stunde",is_delimiter:!1,gloss:"hour"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Entfernt",is_delimiter:!1,gloss:"distant"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"von",is_delimiter:!1,gloss:"from"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"jenem",is_delimiter:!1,gloss:"that"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Ort,",is_delimiter:!1,gloss:"place,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Und",is_delimiter:!1,gloss:"And"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"immer",is_delimiter:!1,gloss:"always"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"hör’",is_delimiter:!1,gloss:"hear"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich’s",is_delimiter:!1,gloss:"it’s"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"rauschen:",is_delimiter:!1,gloss:"rustling:"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Du",is_delimiter:!1,gloss:"Thou"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"fändest",is_delimiter:!1,gloss:"wouldst-find"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Ruhe",is_delimiter:!1,gloss:"rest"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dort!",is_delimiter:!1,gloss:"there!"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Nun bin ich manche Stunde
Entfernt von jenem Ort,
Und immer hör’ ich’s rauschen:
Du fändest Ruhe dort!`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"#",is_delimiter:!1,gloss:"#"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Die",is_delimiter:!1,gloss:"The"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Post.",is_delimiter:!1,gloss:"Postman."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:"# Die Post.",annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Von",is_delimiter:!1,gloss:"From"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"der",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Straße",is_delimiter:!1,gloss:"street"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"her",is_delimiter:!1,gloss:"hence"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ein",is_delimiter:!1,gloss:"a"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Posthorn",is_delimiter:!1,gloss:"posthorn"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"klingt.",is_delimiter:!1,gloss:"sounds."},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Was",is_delimiter:!1,gloss:"What"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"hat",is_delimiter:!1,gloss:"has"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"es,",is_delimiter:!1,gloss:"it,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"daß",is_delimiter:!1,gloss:"that"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"es",is_delimiter:!1,gloss:"it"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"so",is_delimiter:!1,gloss:"so"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"hoch",is_delimiter:!1,gloss:"high (so)"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"aufspringt,",is_delimiter:!1,gloss:"leaps,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Mein",is_delimiter:!1,gloss:"My"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Herz?",is_delimiter:!1,gloss:"heart?"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Von der Straße her ein Posthorn klingt.
Was hat es, daß es so hoch aufspringt,
Mein Herz?`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Die",is_delimiter:!1,gloss:"The"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Post",is_delimiter:!1,gloss:"Post"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"bringt",is_delimiter:!1,gloss:"brings"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"keinen",is_delimiter:!1,gloss:"no"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Brief",is_delimiter:!1,gloss:"letter"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"für",is_delimiter:!1,gloss:"for"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dich:",is_delimiter:!1,gloss:"thee:"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Was",is_delimiter:!1,gloss:"Why"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"drängst",is_delimiter:!1,gloss:"art-urging"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"du",is_delimiter:!1,gloss:"thou"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"denn",is_delimiter:!1,gloss:"then"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"so",is_delimiter:!1,gloss:"so"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wunderlich,",is_delimiter:!1,gloss:"wonderfully,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Mein",is_delimiter:!1,gloss:"My"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Herz?",is_delimiter:!1,gloss:"Heart?"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Die Post bringt keinen Brief für dich:
Was drängst du denn so wunderlich,
Mein Herz?`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Nun",is_delimiter:!1,gloss:"Well"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ja,",is_delimiter:!1,gloss:"yes,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"die",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Post",is_delimiter:!1,gloss:"Post"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"kömmt",is_delimiter:!1,gloss:"comes"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"aus",is_delimiter:!1,gloss:"from"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"der",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Stadt,",is_delimiter:!1,gloss:"city,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Wo",is_delimiter:!1,gloss:"where"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ein",is_delimiter:!1,gloss:"a"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"liebes",is_delimiter:!1,gloss:"dear"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Liebchen",is_delimiter:!1,gloss:"girl"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"hatt’,",is_delimiter:!1,gloss:"had,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Mein",is_delimiter:!1,gloss:"My"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Herz!",is_delimiter:!1,gloss:"Heart!"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Nun ja, die Post kömmt aus der Stadt,
Wo ich ein liebes Liebchen hatt’,
Mein Herz!`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Willst",is_delimiter:!1,gloss:"Wilt"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wohl",is_delimiter:!1,gloss:"well"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"einmal",is_delimiter:!1,gloss:"once"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"hinübersehn,",is_delimiter:!1,gloss:"o'er-look,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Und",is_delimiter:!1,gloss:"And"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"fragen,",is_delimiter:!1,gloss:"ask,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wie",is_delimiter:!1,gloss:"how"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"es",is_delimiter:!1,gloss:"it"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dort",is_delimiter:!1,gloss:"yonder"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mag",is_delimiter:!1,gloss:"may"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"gehn,",is_delimiter:!1,gloss:"go,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Mein",is_delimiter:!1,gloss:"My"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Herz?",is_delimiter:!1,gloss:"Heart?"},{txt:" ",is_delimiter:!0,gloss:null}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Willst wohl einmal hinübersehn,
Und fragen, wie es dort mag gehn,
Mein Herz? `,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"#",is_delimiter:!1,gloss:"#"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Wasserfluth.",is_delimiter:!1,gloss:"Water-flood."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:"# Wasserfluth.",annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Manche",is_delimiter:!1,gloss:"Many"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Thrän’",is_delimiter:!1,gloss:"tear"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"aus",is_delimiter:!1,gloss:"from"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"meinen",is_delimiter:!1,gloss:"my"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Augen",is_delimiter:!1,gloss:"eyes"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Ist",is_delimiter:!1,gloss:"is"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"gefallen",is_delimiter:!1,gloss:"fallen"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"in",is_delimiter:!1,gloss:"into"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"den",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Schnee;",is_delimiter:!1,gloss:"snow;"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Seine",is_delimiter:!1,gloss:"its"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"kalten",is_delimiter:!1,gloss:"cold"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Flocken",is_delimiter:!1,gloss:"flakes"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"saugen",is_delimiter:!1,gloss:"suck (up)"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Durstig",is_delimiter:!1,gloss:"thirstily"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ein",is_delimiter:!1,gloss:"out"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"das",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"heiße",is_delimiter:!1,gloss:"hot"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Weh.",is_delimiter:!1,gloss:"woe."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Manche Thrän’ aus meinen Augen
Ist gefallen in den Schnee;
Seine kalten Flocken saugen
Durstig ein das heiße Weh.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Wann",is_delimiter:!1,gloss:"When"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"die",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Gräser",is_delimiter:!1,gloss:"grasses"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sprossen",is_delimiter:!1,gloss:"sprout"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wollen,",is_delimiter:!1,gloss:"will,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Weht",is_delimiter:!1,gloss:"There-blows"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"daher",is_delimiter:!1,gloss:"thence"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ein",is_delimiter:!1,gloss:"a"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"lauer",is_delimiter:!1,gloss:"languid"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Wind,",is_delimiter:!1,gloss:"wind,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Und",is_delimiter:!1,gloss:"And"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"das",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Eis",is_delimiter:!1,gloss:"ice"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"zerspringt",is_delimiter:!1,gloss:"bursts"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"in",is_delimiter:!1,gloss:"into"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Schollen,",is_delimiter:!1,gloss:"pieces,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Und",is_delimiter:!1,gloss:"And"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"der",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"weiche",is_delimiter:!1,gloss:"soft"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Schnee",is_delimiter:!1,gloss:"snow"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"zerrinnt.",is_delimiter:!1,gloss:"melts."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Wann die Gräser sprossen wollen,
Weht daher ein lauer Wind,
Und das Eis zerspringt in Schollen,
Und der weiche Schnee zerrinnt.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Schnee,",is_delimiter:!1,gloss:"Snow,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"du",is_delimiter:!1,gloss:"thou"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"weißt",is_delimiter:!1,gloss:"knowest"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"von",is_delimiter:!1,gloss:"of"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"meinem",is_delimiter:!1,gloss:"my"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Sehnen:",is_delimiter:!1,gloss:"longing:"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Sag",is_delimiter:!1,gloss:"Say"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mir,",is_delimiter:!1,gloss:"to-me,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wohin",is_delimiter:!1,gloss:"whither"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"geht",is_delimiter:!1,gloss:"goest"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dein",is_delimiter:!1,gloss:"thy"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Lauf?",is_delimiter:!1,gloss:"course?"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Folge",is_delimiter:!1,gloss:"Follow"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nach",is_delimiter:!1,gloss:"after"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nur",is_delimiter:!1,gloss:"only"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"meinen",is_delimiter:!1,gloss:"my"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Thränen,",is_delimiter:!1,gloss:"tears,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Nimmt",is_delimiter:!1,gloss:"Takes"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dich",is_delimiter:!1,gloss:"thee"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"bald",is_delimiter:!1,gloss:"soon"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"das",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Bächlein",is_delimiter:!1,gloss:"brooklet"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"auf.",is_delimiter:!1,gloss:"up."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Schnee, du weißt von meinem Sehnen:
Sag mir, wohin geht dein Lauf?
Folge nach nur meinen Thränen,
Nimmt dich bald das Bächlein auf.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Wirst",is_delimiter:!1,gloss:"Wilt"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mit",is_delimiter:!1,gloss:"with"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ihm",is_delimiter:!1,gloss:"him"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"die",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Stadt",is_delimiter:!1,gloss:"city"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"durchziehen,",is_delimiter:!1,gloss:"traverse,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Muntre",is_delimiter:!1,gloss:"Muntre"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Straßen",is_delimiter:!1,gloss:"streets"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ein",is_delimiter:!1,gloss:"in"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"und",is_delimiter:!1,gloss:"and"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"aus:",is_delimiter:!1,gloss:"out:"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Fühlst",is_delimiter:!1,gloss:"Feelst"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"du",is_delimiter:!1,gloss:"thou"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"meine",is_delimiter:!1,gloss:"my"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Thränen",is_delimiter:!1,gloss:"tears"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"glühen,",is_delimiter:!1,gloss:"glow,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Da",is_delimiter:!1,gloss:"There"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ist",is_delimiter:!1,gloss:"is"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"meiner",is_delimiter:!1,gloss:"of-my"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Liebsten",is_delimiter:!1,gloss:"love-best"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Haus.",is_delimiter:!1,gloss:"house."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Wirst mit ihm die Stadt durchziehen,
Muntre Straßen ein und aus:
Fühlst du meine Thränen glühen,
Da ist meiner Liebsten Haus.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"#",is_delimiter:!1,gloss:"#"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Auf",is_delimiter:!1,gloss:"On"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dem",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Flusse.",is_delimiter:!1,gloss:"river."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:"# Auf dem Flusse.",annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Der",is_delimiter:!1,gloss:"The"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"du",is_delimiter:!1,gloss:"thou"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"so",is_delimiter:!1,gloss:"so"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"lustig",is_delimiter:!1,gloss:"cheerful"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"rauschtest,",is_delimiter:!1,gloss:"rattlest,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Du",is_delimiter:!1,gloss:"Thou"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"heller,",is_delimiter:!1,gloss:"clear,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wilder",is_delimiter:!1,gloss:"wild"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Fluß,",is_delimiter:!1,gloss:"river,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Wie",is_delimiter:!1,gloss:"How"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"still",is_delimiter:!1,gloss:"silent"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"bist",is_delimiter:!1,gloss:"art"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"du",is_delimiter:!1,gloss:"thou"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"geworden,",is_delimiter:!1,gloss:"become,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Giebst",is_delimiter:!1,gloss:"Givest"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"keinen",is_delimiter:!1,gloss:"no"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Scheidegruß.",is_delimiter:!1,gloss:"parting-greeting."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Der du so lustig rauschtest,
Du heller, wilder Fluß,
Wie still bist du geworden,
Giebst keinen Scheidegruß.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Mit",is_delimiter:!1,gloss:"With"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"harter,",is_delimiter:!1,gloss:"hard,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"starrer",is_delimiter:!1,gloss:"rigid"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Rinde",is_delimiter:!1,gloss:"rind"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Hast",is_delimiter:!1,gloss:"Hast"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"du",is_delimiter:!1,gloss:"thou"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dich",is_delimiter:!1,gloss:"thyself"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"überdeckt,",is_delimiter:!1,gloss:"covered,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Liegst",is_delimiter:!1,gloss:"Liest"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"kalt",is_delimiter:!1,gloss:"cold"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"und",is_delimiter:!1,gloss:"and"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"unbeweglich",is_delimiter:!1,gloss:"motionless"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Im",is_delimiter:!1,gloss:"In-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Sande",is_delimiter:!1,gloss:"sand"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"hingestreckt.",is_delimiter:!1,gloss:"stretched."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Mit harter, starrer Rinde
Hast du dich überdeckt,
Liegst kalt und unbeweglich
Im Sande hingestreckt.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"In",is_delimiter:!1,gloss:"In"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"deine",is_delimiter:!1,gloss:"thy"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Decke",is_delimiter:!1,gloss:"mantle"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"grab’",is_delimiter:!1,gloss:"carve"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Mit",is_delimiter:!1,gloss:"with"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"einem",is_delimiter:!1,gloss:"a"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"spitzen",is_delimiter:!1,gloss:"sharp"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Stein",is_delimiter:!1,gloss:"stone"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Den",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Namen",is_delimiter:!1,gloss:"name"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"meiner",is_delimiter:!1,gloss:"of-my"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Liebsten",is_delimiter:!1,gloss:"dearest"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Und",is_delimiter:!1,gloss:"And"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Stund’",is_delimiter:!1,gloss:"hour"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"und",is_delimiter:!1,gloss:"and"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Tag",is_delimiter:!1,gloss:"day"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"hinein:",is_delimiter:!1,gloss:"therein"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`In deine Decke grab’ ich
Mit einem spitzen Stein
Den Namen meiner Liebsten
Und Stund’ und Tag hinein:`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Den",is_delimiter:!1,gloss:"The"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Tag",is_delimiter:!1,gloss:"day"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"des",is_delimiter:!1,gloss:"of-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ersten",is_delimiter:!1,gloss:"first"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Grußes,",is_delimiter:!1,gloss:"greeting,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Den",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Tag,",is_delimiter:!1,gloss:"day,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"an",is_delimiter:!1,gloss:"on"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dem",is_delimiter:!1,gloss:"which"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ging,",is_delimiter:!1,gloss:"went,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Um",is_delimiter:!1,gloss:"about"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Nam’",is_delimiter:!1,gloss:"nam’"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"und",is_delimiter:!1,gloss:"and"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Zahlen",is_delimiter:!1,gloss:"numbers"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"windet",is_delimiter:!1,gloss:"windet"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Sich",is_delimiter:!1,gloss:"itself"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ein",is_delimiter:!1,gloss:"a"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"zerbrochner",is_delimiter:!1,gloss:"broken"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Ring.",is_delimiter:!1,gloss:"ring."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Den Tag des ersten Grußes,
Den Tag, an dem ich ging,
Um Nam’ und Zahlen windet
Sich ein zerbrochner Ring.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Mein",is_delimiter:!1,gloss:"My"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Herz,",is_delimiter:!1,gloss:"heart,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"in",is_delimiter:!1,gloss:"in"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"diesem",is_delimiter:!1,gloss:"this"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Bache",is_delimiter:!1,gloss:"brook"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Erkennst",is_delimiter:!1,gloss:"Recognizest"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"du",is_delimiter:!1,gloss:"thou"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nun",is_delimiter:!1,gloss:"now"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dein",is_delimiter:!1,gloss:"thy"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Bild?",is_delimiter:!1,gloss:"image?"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Ob’s",is_delimiter:!1,gloss:"Whether-it’s"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"unter",is_delimiter:!1,gloss:"under"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"seiner",is_delimiter:!1,gloss:"its"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Rinde",is_delimiter:!1,gloss:"bark"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Wohl",is_delimiter:!1,gloss:"well"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"auch",is_delimiter:!1,gloss:"also"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"so",is_delimiter:!1,gloss:"so"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"reißend",is_delimiter:!1,gloss:"rushing"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"schwillt?",is_delimiter:!1,gloss:"swells?"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Mein Herz, in diesem Bache
Erkennst du nun dein Bild?
Ob’s unter seiner Rinde
Wohl auch so reißend schwillt?`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"#",is_delimiter:!1,gloss:"!UNKNOWN"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Rückblick.",is_delimiter:!1,gloss:"Retrospective."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:"# Rückblick.",annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Es",is_delimiter:!1,gloss:"It"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"brennt",is_delimiter:!1,gloss:"burns"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mir",is_delimiter:!1,gloss:"to-me"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"unter",is_delimiter:!1,gloss:"under"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"beiden",is_delimiter:!1,gloss:"both"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Sohlen,",is_delimiter:!1,gloss:"soles,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Tret’",is_delimiter:!1,gloss:"Tread"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"auch",is_delimiter:!1,gloss:"also"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"schon",is_delimiter:!1,gloss:"already"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"auf",is_delimiter:!1,gloss:"upon"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Eis",is_delimiter:!1,gloss:"ice"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"und",is_delimiter:!1,gloss:"and"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Schnee.",is_delimiter:!1,gloss:"snow."},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"möcht’",is_delimiter:!1,gloss:"might"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nicht",is_delimiter:!1,gloss:"not"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wieder",is_delimiter:!1,gloss:"again"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Athem",is_delimiter:!1,gloss:"breath"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"holen,",is_delimiter:!1,gloss:"fetch,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Bis",is_delimiter:!1,gloss:"Until"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nicht",is_delimiter:!1,gloss:"not"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mehr",is_delimiter:!1,gloss:"more"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"die",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Thürme",is_delimiter:!1,gloss:"towers"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"seh’.",is_delimiter:!1,gloss:"see."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Es brennt mir unter beiden Sohlen,
Tret’ ich auch schon auf Eis und Schnee.
Ich möcht’ nicht wieder Athem holen,
Bis ich nicht mehr die Thürme seh’.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Hab’",is_delimiter:!1,gloss:"Had"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mich",is_delimiter:!1,gloss:"me"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"an",is_delimiter:!1,gloss:"on"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"jedem",is_delimiter:!1,gloss:"every"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Stein",is_delimiter:!1,gloss:"stone"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"gestoßen,",is_delimiter:!1,gloss:"stumbled,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"So",is_delimiter:!1,gloss:"So"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"eilt’",is_delimiter:!1,gloss:"hastened"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"zu",is_delimiter:!1,gloss:"to"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"der",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Stadt",is_delimiter:!1,gloss:"city"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"hinaus;",is_delimiter:!1,gloss:"out;"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Die",is_delimiter:!1,gloss:"The"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Krähen",is_delimiter:!1,gloss:"crows"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"warfen",is_delimiter:!1,gloss:"threw"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Bäll’",is_delimiter:!1,gloss:"balls"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"und",is_delimiter:!1,gloss:"and"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Schloßen",is_delimiter:!1,gloss:"buckles"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Auf",is_delimiter:!1,gloss:"(from) on"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"meinen",is_delimiter:!1,gloss:"my"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Hut",is_delimiter:!1,gloss:"hat"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"von",is_delimiter:!1,gloss:"from"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"jedem",is_delimiter:!1,gloss:"every"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Haus.",is_delimiter:!1,gloss:"house."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Hab’ mich an jedem Stein gestoßen,
So eilt’ ich zu der Stadt hinaus;
Die Krähen warfen Bäll’ und Schloßen
Auf meinen Hut von jedem Haus.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Wie",is_delimiter:!1,gloss:"How"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"anders",is_delimiter:!1,gloss:"differently"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"hast",is_delimiter:!1,gloss:"hast"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"du",is_delimiter:!1,gloss:"thou"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mich",is_delimiter:!1,gloss:"me"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"empfangen,",is_delimiter:!1,gloss:"received,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Du",is_delimiter:!1,gloss:"Thou"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Stadt",is_delimiter:!1,gloss:"city"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"der",is_delimiter:!1,gloss:"of-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Unbeständigkeit!",is_delimiter:!1,gloss:"inconstancy!"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"An",is_delimiter:!1,gloss:"At"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"deinen",is_delimiter:!1,gloss:"thy"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"blanken",is_delimiter:!1,gloss:"bright"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Fenstern",is_delimiter:!1,gloss:"windows"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sangen",is_delimiter:!1,gloss:"sang"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Die",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Lerch’",is_delimiter:!1,gloss:"lark"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"und",is_delimiter:!1,gloss:"and"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Nachtigall",is_delimiter:!1,gloss:"nightingale"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"im",is_delimiter:!1,gloss:"in-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Streit.",is_delimiter:!1,gloss:"strife."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Wie anders hast du mich empfangen,
Du Stadt der Unbeständigkeit!
An deinen blanken Fenstern sangen
Die Lerch’ und Nachtigall im Streit.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Die",is_delimiter:!1,gloss:"The"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"runden",is_delimiter:!1,gloss:"round"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Lindenbäume",is_delimiter:!1,gloss:"linden-trees"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"blühten,",is_delimiter:!1,gloss:"bloomed,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Die",is_delimiter:!1,gloss:"The"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"klaren",is_delimiter:!1,gloss:"clear"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Rinnen",is_delimiter:!1,gloss:"rivulets"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"rauschten",is_delimiter:!1,gloss:"murmured"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"hell,",is_delimiter:!1,gloss:"bright,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Und",is_delimiter:!1,gloss:"And"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ach,",is_delimiter:!1,gloss:"ah,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"zwei",is_delimiter:!1,gloss:"two"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Mädchenaugen",is_delimiter:!1,gloss:"maiden-eyes"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"glühten!",is_delimiter:!1,gloss:"shone!"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"–",is_delimiter:!1,gloss:"-"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Da",is_delimiter:!1,gloss:"Then"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"war’s",is_delimiter:!1,gloss:"was-it"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"geschehn",is_delimiter:!1,gloss:"happened"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"um",is_delimiter:!1,gloss:"about"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dich,",is_delimiter:!1,gloss:"thee,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Gesell!",is_delimiter:!1,gloss:"comrade!"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Die runden Lindenbäume blühten,
Die klaren Rinnen rauschten hell,
Und ach, zwei Mädchenaugen glühten! –
Da war’s geschehn um dich, Gesell!`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Kömmt",is_delimiter:!1,gloss:"Comes"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mir",is_delimiter:!1,gloss:"unto-me"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"der",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Tag",is_delimiter:!1,gloss:"day"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"in",is_delimiter:!1,gloss:"into"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"die",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Gedanken,",is_delimiter:!1,gloss:"thoughts,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Möcht’",is_delimiter:!1,gloss:"I-might-like"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"noch",is_delimiter:!1,gloss:"yet"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"einmal",is_delimiter:!1,gloss:"once"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"rückwärts",is_delimiter:!1,gloss:"backwards"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sehn,",is_delimiter:!1,gloss:"see,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Möcht’",is_delimiter:!1,gloss:"I-might-like"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"zurücke",is_delimiter:!1,gloss:"backward"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wieder",is_delimiter:!1,gloss:"again"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wanken,",is_delimiter:!1,gloss:"to-fortify-the-walk,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Vor",is_delimiter:!1,gloss:"Before"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ihrem",is_delimiter:!1,gloss:"her"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Hause",is_delimiter:!1,gloss:"house"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"stille",is_delimiter:!1,gloss:"still"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"stehn.",is_delimiter:!1,gloss:"stand."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Kömmt mir der Tag in die Gedanken,
Möcht’ ich noch einmal rückwärts sehn,
Möcht’ ich zurücke wieder wanken,
Vor ihrem Hause stille stehn.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"#",is_delimiter:!1,gloss:"#"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Der",is_delimiter:!1,gloss:"The"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"greise",is_delimiter:!1,gloss:"old"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Kopf.",is_delimiter:!1,gloss:"Head."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:"# Der greise Kopf.",annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Der",is_delimiter:!1,gloss:"The"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Reif",is_delimiter:!1,gloss:"Hoar-frost"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"hatt’",is_delimiter:!1,gloss:"had"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"einen",is_delimiter:!1,gloss:"a"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"weißen",is_delimiter:!1,gloss:"white"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Schein",is_delimiter:!1,gloss:"appearance"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Mir",is_delimiter:!1,gloss:"To-me"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"über’s",is_delimiter:!1,gloss:"over-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Haar",is_delimiter:!1,gloss:"hair"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"gestreuet.",is_delimiter:!1,gloss:"strewed."},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Da",is_delimiter:!1,gloss:"Then"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"meint’",is_delimiter:!1,gloss:"thought"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"schon",is_delimiter:!1,gloss:"already"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ein",is_delimiter:!1,gloss:"an"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Greis",is_delimiter:!1,gloss:"old-man"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"zu",is_delimiter:!1,gloss:"to"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sein,",is_delimiter:!1,gloss:"be,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Und",is_delimiter:!1,gloss:"And"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"hab’",is_delimiter:!1,gloss:"have"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mich",is_delimiter:!1,gloss:"myself"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sehr",is_delimiter:!1,gloss:"very"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"gefreuet.",is_delimiter:!1,gloss:"rejoiced."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Der Reif hatt’ einen weißen Schein
Mir über’s Haar gestreuet.
Da meint’ ich schon ein Greis zu sein,
Und hab’ mich sehr gefreuet.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Doch",is_delimiter:!1,gloss:"But"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"bald",is_delimiter:!1,gloss:"soon"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ist",is_delimiter:!1,gloss:"is"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"er",is_delimiter:!1,gloss:"he"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"hinweggethaut,",is_delimiter:!1,gloss:"cropped,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Hab’",is_delimiter:!1,gloss:"Have"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wieder",is_delimiter:!1,gloss:"again"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"schwarze",is_delimiter:!1,gloss:"black"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Haare,",is_delimiter:!1,gloss:"hairs,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Daß",is_delimiter:!1,gloss:"That"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mir’s",is_delimiter:!1,gloss:"to-me-it"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"vor",is_delimiter:!1,gloss:"from"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"meiner",is_delimiter:!1,gloss:"my"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Jugend",is_delimiter:!1,gloss:"youth"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"graut",is_delimiter:!1,gloss:"shudders"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"—",is_delimiter:!1,gloss:"—"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Wie",is_delimiter:!1,gloss:"How"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"weit",is_delimiter:!1,gloss:"far"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"noch",is_delimiter:!1,gloss:"still"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"bis",is_delimiter:!1,gloss:"to"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"zur",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Bahre!",is_delimiter:!1,gloss:"coffin!"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Doch bald ist er hinweggethaut,
Hab’ wieder schwarze Haare,
Daß mir’s vor meiner Jugend graut —
Wie weit noch bis zur Bahre!`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Vom",is_delimiter:!1,gloss:"From the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Abendroth",is_delimiter:!1,gloss:"evening-red (sunset)"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"zum",is_delimiter:!1,gloss:"to the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Morgenlicht",is_delimiter:!1,gloss:"morning-light (sunrise)"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Ward",is_delimiter:!1,gloss:"Was"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mancher",is_delimiter:!1,gloss:"many"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Kopf",is_delimiter:!1,gloss:"head (man)"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"zum",is_delimiter:!1,gloss:"to"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Greise.",is_delimiter:!1,gloss:"grey-haired."},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Wer",is_delimiter:!1,gloss:"Who"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"glaubt’s?",is_delimiter:!1,gloss:"believes it?"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Und",is_delimiter:!1,gloss:"And"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"meiner",is_delimiter:!1,gloss:"mine"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ward",is_delimiter:!1,gloss:"was"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"es",is_delimiter:!1,gloss:"it"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nicht",is_delimiter:!1,gloss:"not"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Auf",is_delimiter:!1,gloss:"On"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dieser",is_delimiter:!1,gloss:"this"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ganzen",is_delimiter:!1,gloss:"whole"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Reise!",is_delimiter:!1,gloss:"journey!"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Vom Abendroth zum Morgenlicht
Ward mancher Kopf zum Greise.
Wer glaubt’s? Und meiner ward es nicht
Auf dieser ganzen Reise!`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"#",is_delimiter:!1,gloss:"!UNKNOWN"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Die",is_delimiter:!1,gloss:"!UNKNOWN"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Krähe.",is_delimiter:!1,gloss:"The-Crow"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:"# Die Krähe.",annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Eine",is_delimiter:!1,gloss:"A"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Krähe",is_delimiter:!1,gloss:"crow"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"war",is_delimiter:!1,gloss:"was"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mit",is_delimiter:!1,gloss:"with"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mir",is_delimiter:!1,gloss:"me"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Aus",is_delimiter:!1,gloss:"out"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"der",is_delimiter:!1,gloss:"of-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Stadt",is_delimiter:!1,gloss:"city"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"gezogen,",is_delimiter:!1,gloss:"drawn-(companion),"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Ist",is_delimiter:!1,gloss:"Is"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"bis",is_delimiter:!1,gloss:"until"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"heute",is_delimiter:!1,gloss:"to-day"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"für",is_delimiter:!1,gloss:"for"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"und",is_delimiter:!1,gloss:"and"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"für",is_delimiter:!1,gloss:"for"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Um",is_delimiter:!1,gloss:"about"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mein",is_delimiter:!1,gloss:"my"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Haupt",is_delimiter:!1,gloss:"head"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"geflogen.",is_delimiter:!1,gloss:"flown."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Eine Krähe war mit mir
Aus der Stadt gezogen,
Ist bis heute für und für
Um mein Haupt geflogen.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Krähe,",is_delimiter:!1,gloss:"Crow,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wunderliches",is_delimiter:!1,gloss:"wonderful"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Thier,",is_delimiter:!1,gloss:"animal,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Willst",is_delimiter:!1,gloss:"Wilt"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mich",is_delimiter:!1,gloss:"me"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nicht",is_delimiter:!1,gloss:"not"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"verlassen?",is_delimiter:!1,gloss:"leave?"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Meinst",is_delimiter:!1,gloss:"Meinst"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wohl",is_delimiter:!1,gloss:"well"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"bald",is_delimiter:!1,gloss:"soon"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"als",is_delimiter:!1,gloss:"as"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Beute",is_delimiter:!1,gloss:"prey"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"hier",is_delimiter:!1,gloss:"here"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Meinen",is_delimiter:!1,gloss:"my"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Leib",is_delimiter:!1,gloss:"body"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"zu",is_delimiter:!1,gloss:"to"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"fassen?",is_delimiter:!1,gloss:"grasp?"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Krähe, wunderliches Thier,
Willst mich nicht verlassen?
Meinst wohl bald als Beute hier
Meinen Leib zu fassen?`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Nun,",is_delimiter:!1,gloss:"Well,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"es",is_delimiter:!1,gloss:"it"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wird",is_delimiter:!1,gloss:"will"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nicht",is_delimiter:!1,gloss:"not"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"weit",is_delimiter:!1,gloss:"far"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mehr",is_delimiter:!1,gloss:"more (longer)"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"gehn",is_delimiter:!1,gloss:"go"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"An",is_delimiter:!1,gloss:"Upon"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dem",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Wanderstabe.",is_delimiter:!1,gloss:"walking-stick."},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Krähe,",is_delimiter:!1,gloss:"Crow,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"laß",is_delimiter:!1,gloss:"suffer"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mich",is_delimiter:!1,gloss:"me"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"endlich",is_delimiter:!1,gloss:"finally"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sehn",is_delimiter:!1,gloss:"see"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Treue",is_delimiter:!1,gloss:"fidelity"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"bis",is_delimiter:!1,gloss:"till"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"zum",is_delimiter:!1,gloss:"to-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Grabe!",is_delimiter:!1,gloss:"grave!"},{txt:" ",is_delimiter:!0,gloss:null}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Nun, es wird nicht weit mehr gehn
An dem Wanderstabe.
Krähe, laß mich endlich sehn
Treue bis zum Grabe! `,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"#",is_delimiter:!1,gloss:"!UNKNOWN"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Letzte",is_delimiter:!1,gloss:"Last"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Hoffnung.",is_delimiter:!1,gloss:"hope."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:"# Letzte Hoffnung.",annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Hier",is_delimiter:!1,gloss:"Here"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"und",is_delimiter:!1,gloss:"and"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"da",is_delimiter:!1,gloss:"there"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ist",is_delimiter:!1,gloss:"is"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"an",is_delimiter:!1,gloss:"on"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"den",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Bäumen",is_delimiter:!1,gloss:"trees"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Noch",is_delimiter:!1,gloss:"yet"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ein",is_delimiter:!1,gloss:"a"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"buntes",is_delimiter:!1,gloss:"coloured"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Blatt",is_delimiter:!1,gloss:"leaf"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"zu",is_delimiter:!1,gloss:"to"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sehn,",is_delimiter:!1,gloss:"see,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Und",is_delimiter:!1,gloss:"And"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"bleibe",is_delimiter:!1,gloss:"remain"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"vor",is_delimiter:!1,gloss:"before"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"den",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Bäumen",is_delimiter:!1,gloss:"trees"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Oftmals",is_delimiter:!1,gloss:"oft-times"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"in",is_delimiter:!1,gloss:"in"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Gedanken",is_delimiter:!1,gloss:"thoughts"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"stehn.",is_delimiter:!1,gloss:"stand."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Hier und da ist an den Bäumen
Noch ein buntes Blatt zu sehn,
Und ich bleibe vor den Bäumen
Oftmals in Gedanken stehn.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Schaue",is_delimiter:!1,gloss:"Look"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nach",is_delimiter:!1,gloss:"after"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dem",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"einen",is_delimiter:!1,gloss:"one"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Blatte,",is_delimiter:!1,gloss:"leaf,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Hänge",is_delimiter:!1,gloss:"Hinge"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"meine",is_delimiter:!1,gloss:"my"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Hoffnung",is_delimiter:!1,gloss:"hope"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dran;",is_delimiter:!1,gloss:"thereon;"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Spielt",is_delimiter:!1,gloss:"Plays"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"der",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Wind",is_delimiter:!1,gloss:"wind"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mit",is_delimiter:!1,gloss:"with"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"meinem",is_delimiter:!1,gloss:"my"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Blatte,",is_delimiter:!1,gloss:"leaf,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Zittr’",is_delimiter:!1,gloss:"Tremble"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich,",is_delimiter:!1,gloss:"I,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"was",is_delimiter:!1,gloss:"what"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"zittern",is_delimiter:!1,gloss:"can-tremble"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"kann.",is_delimiter:!1,gloss:"can."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Schaue nach dem einen Blatte,
Hänge meine Hoffnung dran;
Spielt der Wind mit meinem Blatte,
Zittr’ ich, was ich zittern kann.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Ach,",is_delimiter:!1,gloss:"Ah,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"und",is_delimiter:!1,gloss:"and"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"fällt",is_delimiter:!1,gloss:"falls"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"das",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Blatt",is_delimiter:!1,gloss:"leaf"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"zu",is_delimiter:!1,gloss:"to"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Boden,",is_delimiter:!1,gloss:"ground,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Fällt",is_delimiter:!1,gloss:"Falls"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mit",is_delimiter:!1,gloss:"with"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ihm",is_delimiter:!1,gloss:"it"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"die",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Hoffnung",is_delimiter:!1,gloss:"hope"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ab,",is_delimiter:!1,gloss:"off,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Fall’",is_delimiter:!1,gloss:"Fall’"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"selber",is_delimiter:!1,gloss:"myself"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mit",is_delimiter:!1,gloss:"with"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"zu",is_delimiter:!1,gloss:"to"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Boden,",is_delimiter:!1,gloss:"ground,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Wein’",is_delimiter:!1,gloss:"weep"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"auf",is_delimiter:!1,gloss:"on"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"meiner",is_delimiter:!1,gloss:"my"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Hoffnung",is_delimiter:!1,gloss:"hope"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Grab.",is_delimiter:!1,gloss:"grave."},{txt:" ",is_delimiter:!0,gloss:null}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Ach, und fällt das Blatt zu Boden,
Fällt mit ihm die Hoffnung ab,
Fall’ ich selber mit zu Boden,
Wein’ auf meiner Hoffnung Grab. `,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"#",is_delimiter:!1,gloss:"!UNKNOWN"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Im",is_delimiter:!1,gloss:"In-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Dorfe",is_delimiter:!1,gloss:"village"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:"# Im Dorfe",annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Es",is_delimiter:!1,gloss:"It"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"bellen",is_delimiter:!1,gloss:"bark"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"die",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Hunde,",is_delimiter:!1,gloss:"dogs,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"es",is_delimiter:!1,gloss:"it"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"rasseln",is_delimiter:!1,gloss:"rattle"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"die",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Ketten.",is_delimiter:!1,gloss:"chains."},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Die",is_delimiter:!1,gloss:"The"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Menschen",is_delimiter:!1,gloss:"men"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"schnarchen",is_delimiter:!1,gloss:"snore"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"in",is_delimiter:!1,gloss:"in"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ihren",is_delimiter:!1,gloss:"their"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Betten,",is_delimiter:!1,gloss:"beds,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Träumen",is_delimiter:!1,gloss:"dreaming"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sich",is_delimiter:!1,gloss:"to-themselves"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Manches,",is_delimiter:!1,gloss:"many-a-thing,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"was",is_delimiter:!1,gloss:"which"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sie",is_delimiter:!1,gloss:"they"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nicht",is_delimiter:!1,gloss:"not"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"haben,",is_delimiter:!1,gloss:"have,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Thun",is_delimiter:!1,gloss:"Do"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sich",is_delimiter:!1,gloss:"to-themselves"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"im",is_delimiter:!1,gloss:"in"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Guten",is_delimiter:!1,gloss:"good"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"und",is_delimiter:!1,gloss:"and"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Argen",is_delimiter:!1,gloss:"bad"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"erlaben:",is_delimiter:!1,gloss:"to-rejoice:"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Und",is_delimiter:!1,gloss:"And"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Morgen",is_delimiter:!1,gloss:"morning"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"früh",is_delimiter:!1,gloss:"early"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ist",is_delimiter:!1,gloss:"is"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Alles",is_delimiter:!1,gloss:"All"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"zerflossen.",is_delimiter:!1,gloss:"melted-away."},{txt:" ",is_delimiter:!0,gloss:null},{txt:"—",is_delimiter:!1,gloss:"—"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Je",is_delimiter:!1,gloss:"Well"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nun,",is_delimiter:!1,gloss:"then,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sie",is_delimiter:!1,gloss:"they"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"haben",is_delimiter:!1,gloss:"have"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ihr",is_delimiter:!1,gloss:"their"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Theil",is_delimiter:!1,gloss:"share"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"genossen,",is_delimiter:!1,gloss:"enjoyed,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Und",is_delimiter:!1,gloss:"And"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"hoffen,",is_delimiter:!1,gloss:"hope,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"was",is_delimiter:!1,gloss:"what"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sie",is_delimiter:!1,gloss:"they"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"noch",is_delimiter:!1,gloss:"yet"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"übrig",is_delimiter:!1,gloss:"left"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ließen,",is_delimiter:!1,gloss:"may-have-left,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Doch",is_delimiter:!1,gloss:"Yet"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wieder",is_delimiter:!1,gloss:"again"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"zu",is_delimiter:!1,gloss:"to"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"finden",is_delimiter:!1,gloss:"find"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"auf",is_delimiter:!1,gloss:"upon"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ihren",is_delimiter:!1,gloss:"their"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Kissen.",is_delimiter:!1,gloss:"pillow."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Es bellen die Hunde, es rasseln die Ketten.
Die Menschen schnarchen in ihren Betten,
Träumen sich Manches, was sie nicht haben,
Thun sich im Guten und Argen erlaben:
Und Morgen früh ist Alles zerflossen. —
Je nun, sie haben ihr Theil genossen,
Und hoffen, was sie noch übrig ließen,
Doch wieder zu finden auf ihren Kissen.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Bellt",is_delimiter:!1,gloss:"Bark"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mich",is_delimiter:!1,gloss:"me"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nur",is_delimiter:!1,gloss:"only"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"fort,",is_delimiter:!1,gloss:"forth,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ihr",is_delimiter:!1,gloss:"ye"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wachen",is_delimiter:!1,gloss:"wake"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Hunde,",is_delimiter:!1,gloss:"dogs,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Laßt",is_delimiter:!1,gloss:"Let"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mich",is_delimiter:!1,gloss:"me"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nicht",is_delimiter:!1,gloss:"not"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ruhn",is_delimiter:!1,gloss:"rest"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"in",is_delimiter:!1,gloss:"in"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"der",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Schlummerstunde!",is_delimiter:!1,gloss:"slumber-hour!"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"bin",is_delimiter:!1,gloss:"am"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"zu",is_delimiter:!1,gloss:"to"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Ende",is_delimiter:!1,gloss:"end"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mit",is_delimiter:!1,gloss:"with"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"allen",is_delimiter:!1,gloss:"all"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Träumen",is_delimiter:!1,gloss:"dreams"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"—",is_delimiter:!1,gloss:"—"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Was",is_delimiter:!1,gloss:"What"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"will",is_delimiter:!1,gloss:"will"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"unter",is_delimiter:!1,gloss:"among"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"den",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Schläfern",is_delimiter:!1,gloss:"sleepers"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"säumen?",is_delimiter:!1,gloss:"delay?"},{txt:" ",is_delimiter:!0,gloss:null}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Bellt mich nur fort, ihr wachen Hunde,
Laßt mich nicht ruhn in der Schlummerstunde!
Ich bin zu Ende mit allen Träumen —
Was will ich unter den Schläfern säumen? `,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"#",is_delimiter:!1,gloss:"#"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Der",is_delimiter:!1,gloss:"The"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"stürmische",is_delimiter:!1,gloss:"stormy"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Morgen.",is_delimiter:!1,gloss:"Morning."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:"# Der stürmische Morgen.",annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Wie",is_delimiter:!1,gloss:"How"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"hat",is_delimiter:!1,gloss:"has"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"der",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Sturm",is_delimiter:!1,gloss:"storm"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"zerrissen",is_delimiter:!1,gloss:"torn"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Des",is_delimiter:!1,gloss:"Of-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Himmels",is_delimiter:!1,gloss:"sky"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"graues",is_delimiter:!1,gloss:"gray"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Kleid!",is_delimiter:!1,gloss:"robe!"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Die",is_delimiter:!1,gloss:"The"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Wolkenfetzen",is_delimiter:!1,gloss:"cloud-patches"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"flattern",is_delimiter:!1,gloss:"flutter"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Umher",is_delimiter:!1,gloss:"About"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"in",is_delimiter:!1,gloss:"in"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mattem",is_delimiter:!1,gloss:"dull"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Streit.",is_delimiter:!1,gloss:"strife."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Wie hat der Sturm zerrissen
Des Himmels graues Kleid!
Die Wolkenfetzen flattern
Umher in mattem Streit.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Und",is_delimiter:!1,gloss:"And"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"rothe",is_delimiter:!1,gloss:"red"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Feuerflammen",is_delimiter:!1,gloss:"fire-flames"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Ziehn",is_delimiter:!1,gloss:"move"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"zwischen",is_delimiter:!1,gloss:"between"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ihnen",is_delimiter:!1,gloss:"them"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"hin.",is_delimiter:!1,gloss:"hither-thither"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Das",is_delimiter:!1,gloss:"That"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nenn’",is_delimiter:!1,gloss:"call"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"einen",is_delimiter:!1,gloss:"a"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Morgen",is_delimiter:!1,gloss:"morn"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"So",is_delimiter:!1,gloss:"So"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"recht",is_delimiter:!1,gloss:"right"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nach",is_delimiter:!1,gloss:"after"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"meinem",is_delimiter:!1,gloss:"my"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Sinn!",is_delimiter:!1,gloss:"mind!"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Und rothe Feuerflammen
Ziehn zwischen ihnen hin.
Das nenn’ ich einen Morgen
So recht nach meinem Sinn!`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Mein",is_delimiter:!1,gloss:"My"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Herz",is_delimiter:!1,gloss:"heart"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sieht",is_delimiter:!1,gloss:"sees"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"an",is_delimiter:!1,gloss:"in"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dem",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Himmel",is_delimiter:!1,gloss:"heaven"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Gemahlt",is_delimiter:!1,gloss:"portrayed"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sein",is_delimiter:!1,gloss:"its"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"eignes",is_delimiter:!1,gloss:"own"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Bild",is_delimiter:!1,gloss:"picture"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"—",is_delimiter:!1,gloss:"—"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Es",is_delimiter:!1,gloss:"It"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ist",is_delimiter:!1,gloss:"is"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nichts",is_delimiter:!1,gloss:"nothing"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"als",is_delimiter:!1,gloss:"than"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"der",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Winter,",is_delimiter:!1,gloss:"winter,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Der",is_delimiter:!1,gloss:"The"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Winter",is_delimiter:!1,gloss:"winter"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"kalt",is_delimiter:!1,gloss:"cold"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"und",is_delimiter:!1,gloss:"and"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wild!",is_delimiter:!1,gloss:"wild!"},{txt:" ",is_delimiter:!0,gloss:null}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Mein Herz sieht an dem Himmel
Gemahlt sein eignes Bild —
Es ist nichts als der Winter,
Der Winter kalt und wild! `,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"#",is_delimiter:!1,gloss:"!UNKNOWN"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Täuschung.",is_delimiter:!1,gloss:"Deception."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:"# Täuschung.",annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Ein",is_delimiter:!1,gloss:"A"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Licht",is_delimiter:!1,gloss:"light"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"tanzt",is_delimiter:!1,gloss:"dances"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"freundlich",is_delimiter:!1,gloss:"friendly"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"vor",is_delimiter:!1,gloss:"before"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mir",is_delimiter:!1,gloss:"me"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"her;",is_delimiter:!1,gloss:"there;"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"folg’",is_delimiter:!1,gloss:"follow"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ihm",is_delimiter:!1,gloss:"it"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nach",is_delimiter:!1,gloss:"now"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"die",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Kreuz",is_delimiter:!1,gloss:"cross"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"und",is_delimiter:!1,gloss:"and"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Quer;",is_delimiter:!1,gloss:"queer;"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"folg’",is_delimiter:!1,gloss:"follow"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ihm",is_delimiter:!1,gloss:"it"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"gern,",is_delimiter:!1,gloss:"gladly,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"und",is_delimiter:!1,gloss:"and"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"seh’s",is_delimiter:!1,gloss:"see-it’s"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ihm",is_delimiter:!1,gloss:"it"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"an,",is_delimiter:!1,gloss:"on,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Daß",is_delimiter:!1,gloss:"That"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"es",is_delimiter:!1,gloss:"it"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"verlockt",is_delimiter:!1,gloss:"allures"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"den",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Wandersmann.",is_delimiter:!1,gloss:"wayfarer."},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Ach,",is_delimiter:!1,gloss:"Ah,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wer",is_delimiter:!1,gloss:"who"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wie",is_delimiter:!1,gloss:"like"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"so",is_delimiter:!1,gloss:"so"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"elend",is_delimiter:!1,gloss:"wretched"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ist,",is_delimiter:!1,gloss:"is,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Giebt",is_delimiter:!1,gloss:"Giveth"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"gern",is_delimiter:!1,gloss:"gladly"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sich",is_delimiter:!1,gloss:"himself"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"hin",is_delimiter:!1,gloss:"(given) in"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"der",is_delimiter:!1,gloss:"to-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"bunten",is_delimiter:!1,gloss:"gaudy"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"List,",is_delimiter:!1,gloss:"lure,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Die",is_delimiter:!1,gloss:"Which"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"hinter",is_delimiter:!1,gloss:"behind"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Eis",is_delimiter:!1,gloss:"rest"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"und",is_delimiter:!1,gloss:"and"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Nacht",is_delimiter:!1,gloss:"night"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"und",is_delimiter:!1,gloss:"and"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Graus",is_delimiter:!1,gloss:"horror"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Ihm",is_delimiter:!1,gloss:"To-him"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"weist",is_delimiter:!1,gloss:"points"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ein",is_delimiter:!1,gloss:"a"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"helles,",is_delimiter:!1,gloss:"bright,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"warmes",is_delimiter:!1,gloss:"warm"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Haus,",is_delimiter:!1,gloss:"house,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Und",is_delimiter:!1,gloss:"And"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"eine",is_delimiter:!1,gloss:"a"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"liebe",is_delimiter:!1,gloss:"dear"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Seele",is_delimiter:!1,gloss:"soul"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"drin",is_delimiter:!1,gloss:"therein"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"—",is_delimiter:!1,gloss:"—"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Nur",is_delimiter:!1,gloss:"Only"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Täuschung",is_delimiter:!1,gloss:"Delusion"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ist",is_delimiter:!1,gloss:"is"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"für",is_delimiter:!1,gloss:"for"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mich",is_delimiter:!1,gloss:"me"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Gewinn!",is_delimiter:!1,gloss:"Gain!"},{txt:" ",is_delimiter:!0,gloss:null}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Ein Licht tanzt freundlich vor mir her;
Ich folg’ ihm nach die Kreuz und Quer;
Ich folg’ ihm gern, und seh’s ihm an,
Daß es verlockt den Wandersmann.
Ach, wer wie ich so elend ist,
Giebt gern sich hin der bunten List,
Die hinter Eis und Nacht und Graus
Ihm weist ein helles, warmes Haus,
Und eine liebe Seele drin —
Nur Täuschung ist für mich Gewinn! `,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"#",is_delimiter:!1,gloss:"#"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Der",is_delimiter:!1,gloss:"The"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Wegweiser.",is_delimiter:!1,gloss:"Waypointer."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:"# Der Wegweiser.",annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Was",is_delimiter:!1,gloss:"What"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"vermeid’",is_delimiter:!1,gloss:"avoid"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"denn",is_delimiter:!1,gloss:"then"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"die",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Wege,",is_delimiter:!1,gloss:"ways,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Wo",is_delimiter:!1,gloss:"Where"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"die",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"andren",is_delimiter:!1,gloss:"other"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Wandrer",is_delimiter:!1,gloss:"wanderers"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"gehn,",is_delimiter:!1,gloss:"go,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Suche",is_delimiter:!1,gloss:"Seek"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mir",is_delimiter:!1,gloss:"to-me"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"versteckte",is_delimiter:!1,gloss:"concealed"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Stege",is_delimiter:!1,gloss:"causeways"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Durch",is_delimiter:!1,gloss:"Through"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"verschneite",is_delimiter:!1,gloss:"snow-covered"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Felsenhöhn?",is_delimiter:!1,gloss:"rock-highs?"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Was vermeid’ ich denn die Wege,
Wo die andren Wandrer gehn,
Suche mir versteckte Stege
Durch verschneite Felsenhöhn?`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Habe",is_delimiter:!1,gloss:"Have"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ja",is_delimiter:!1,gloss:"yes"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"doch",is_delimiter:!1,gloss:"yet"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nichts",is_delimiter:!1,gloss:"nothing"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"begangen,",is_delimiter:!1,gloss:"perpetrated,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Daß",is_delimiter:!1,gloss:"That"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Menschen",is_delimiter:!1,gloss:"men"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sollte",is_delimiter:!1,gloss:"should"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"scheun",is_delimiter:!1,gloss:"shun"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"—",is_delimiter:!1,gloss:"—"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Welch",is_delimiter:!1,gloss:"What"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ein",is_delimiter:!1,gloss:"a"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"thörichtes",is_delimiter:!1,gloss:"foolish"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Verlangen",is_delimiter:!1,gloss:"desire"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Treibt",is_delimiter:!1,gloss:"Drives"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mich",is_delimiter:!1,gloss:"me"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"in",is_delimiter:!1,gloss:"into"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"die",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Wüstenein?",is_delimiter:!1,gloss:"waste?"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Habe ja doch nichts begangen,
Daß ich Menschen sollte scheun —
Welch ein thörichtes Verlangen
Treibt mich in die Wüstenein?`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Weiser",is_delimiter:!1,gloss:"Wise"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"stehen",is_delimiter:!1,gloss:"stand"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"auf",is_delimiter:!1,gloss:"upon"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"den",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Straßen,",is_delimiter:!1,gloss:"streets,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Weisen",is_delimiter:!1,gloss:"wise(ly)"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"auf",is_delimiter:!1,gloss:"upon"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"die",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Städte",is_delimiter:!1,gloss:"cities"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"zu,",is_delimiter:!1,gloss:"to,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Und",is_delimiter:!1,gloss:"And"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wandre",is_delimiter:!1,gloss:"wander"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sonder",is_delimiter:!1,gloss:"without"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Maßen,",is_delimiter:!1,gloss:"measure,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Ohne",is_delimiter:!1,gloss:"Without"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Ruh’,",is_delimiter:!1,gloss:"rest,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"und",is_delimiter:!1,gloss:"and"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"suche",is_delimiter:!1,gloss:"seek"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Ruh’.",is_delimiter:!1,gloss:"rest."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Weiser stehen auf den Straßen,
Weisen auf die Städte zu,
Und ich wandre sonder Maßen,
Ohne Ruh’, und suche Ruh’.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Einen",is_delimiter:!1,gloss:"A"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Weiser",is_delimiter:!1,gloss:"Sure"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"seh’",is_delimiter:!1,gloss:"see"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"stehen",is_delimiter:!1,gloss:"standing"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Unverrückt",is_delimiter:!1,gloss:"Unmoved"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"vor",is_delimiter:!1,gloss:"before"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"meinem",is_delimiter:!1,gloss:"my"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Blick;",is_delimiter:!1,gloss:"sight;"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Eine",is_delimiter:!1,gloss:"A"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Straße",is_delimiter:!1,gloss:"road"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"muß",is_delimiter:!1,gloss:"must"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"gehen,",is_delimiter:!1,gloss:"go,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Die",is_delimiter:!1,gloss:"Which"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"noch",is_delimiter:!1,gloss:"yet"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Keiner",is_delimiter:!1,gloss:"Nobody"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ging",is_delimiter:!1,gloss:"went"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"zurück.",is_delimiter:!1,gloss:"back."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Einen Weiser seh’ ich stehen
Unverrückt vor meinem Blick;
Eine Straße muß ich gehen,
Die noch Keiner ging zurück.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"#",is_delimiter:!1,gloss:"!UNKNOWN"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Das",is_delimiter:!1,gloss:"!UNKNOWN"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Wirthshaus.",is_delimiter:!1,gloss:"!UNKNOWN"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:"# Das Wirthshaus.",annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Auf",is_delimiter:!1,gloss:"On"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"einen",is_delimiter:!1,gloss:"a"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Todtenacker",is_delimiter:!1,gloss:"graveyard"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Hat",is_delimiter:!1,gloss:"Has"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mich",is_delimiter:!1,gloss:"me"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mein",is_delimiter:!1,gloss:"my"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Weg",is_delimiter:!1,gloss:"way"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"gebracht.",is_delimiter:!1,gloss:"brought."},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Allhier",is_delimiter:!1,gloss:"Here"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"will",is_delimiter:!1,gloss:"will"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"einkehren:",is_delimiter:!1,gloss:"pause:"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Hab’",is_delimiter:!1,gloss:"Have"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"bei",is_delimiter:!1,gloss:"by"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mir",is_delimiter:!1,gloss:"myself"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"gedacht.",is_delimiter:!1,gloss:"thought."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Auf einen Todtenacker
Hat mich mein Weg gebracht.
Allhier will ich einkehren:
Hab’ ich bei mir gedacht.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Ihr",is_delimiter:!1,gloss:"Ye"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"grünen",is_delimiter:!1,gloss:"green"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Todtenkränze",is_delimiter:!1,gloss:"wreaths-of-death"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Könnt",is_delimiter:!1,gloss:"May"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wohl",is_delimiter:!1,gloss:"well"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"die",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Zeichen",is_delimiter:!1,gloss:"signs"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sein,",is_delimiter:!1,gloss:"be,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Die",is_delimiter:!1,gloss:"Which"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"müde",is_delimiter:!1,gloss:"weary"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Wandrer",is_delimiter:!1,gloss:"wayfarer"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"laden",is_delimiter:!1,gloss:"invite"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"In’s",is_delimiter:!1,gloss:"Into-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"kühle",is_delimiter:!1,gloss:"cool"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Wirthshaus",is_delimiter:!1,gloss:"inn"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ein.",is_delimiter:!1,gloss:"one."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Ihr grünen Todtenkränze
Könnt wohl die Zeichen sein,
Die müde Wandrer laden
In’s kühle Wirthshaus ein.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Sind",is_delimiter:!1,gloss:"Are"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"denn",is_delimiter:!1,gloss:"then"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"in",is_delimiter:!1,gloss:"in"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"diesem",is_delimiter:!1,gloss:"this"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Hause",is_delimiter:!1,gloss:"house"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Die",is_delimiter:!1,gloss:"the (these)"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Kammern",is_delimiter:!1,gloss:"chambers"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"all’",is_delimiter:!1,gloss:"all"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"besetzt?",is_delimiter:!1,gloss:"occupied?"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Bin",is_delimiter:!1,gloss:"Am"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"matt",is_delimiter:!1,gloss:"weary"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"zum",is_delimiter:!1,gloss:"to"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Niedersinken",is_delimiter:!1,gloss:"sinking-down"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Und",is_delimiter:!1,gloss:"And"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"tödtlich",is_delimiter:!1,gloss:"deadly"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"schwer",is_delimiter:!1,gloss:"heavily"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"verletzt.",is_delimiter:!1,gloss:"wounded."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Sind denn in diesem Hause
Die Kammern all’ besetzt?
Bin matt zum Niedersinken
Und tödtlich schwer verletzt.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"O",is_delimiter:!1,gloss:"O"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"unbarmherz’ge",is_delimiter:!1,gloss:"unmerciful"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Schenke,",is_delimiter:!1,gloss:"inn,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Doch",is_delimiter:!1,gloss:"But"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"weisest",is_delimiter:!1,gloss:"wilt-send-away"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"du",is_delimiter:!1,gloss:"thou"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mich",is_delimiter:!1,gloss:"me"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ab?",is_delimiter:!1,gloss:"off?"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Nun",is_delimiter:!1,gloss:"Now"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"weiter",is_delimiter:!1,gloss:"further"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"denn,",is_delimiter:!1,gloss:"then,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nur",is_delimiter:!1,gloss:"only"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"weiter,",is_delimiter:!1,gloss:"further,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Mein",is_delimiter:!1,gloss:"My"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"treuer",is_delimiter:!1,gloss:"faithful"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Wanderstab!",is_delimiter:!1,gloss:"staff!"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`O unbarmherz’ge Schenke,
Doch weisest du mich ab?
Nun weiter denn, nur weiter,
Mein treuer Wanderstab!`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"#",is_delimiter:!1,gloss:"#"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Das",is_delimiter:!1,gloss:"The"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Irrlicht.",is_delimiter:!1,gloss:"Will-o'-the-wisp."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:"# Das Irrlicht.",annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"In",is_delimiter:!1,gloss:"In"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"die",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"tiefsten",is_delimiter:!1,gloss:"deepest"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Felsengründe",is_delimiter:!1,gloss:"rock-bottoms"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Lockte",is_delimiter:!1,gloss:"Enticed"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mich",is_delimiter:!1,gloss:"me"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ein",is_delimiter:!1,gloss:"a"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Irrlicht",is_delimiter:!1,gloss:"Will-o'-the-wisp"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"hin:",is_delimiter:!1,gloss:"thither:"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Wie",is_delimiter:!1,gloss:"How"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"einen",is_delimiter:!1,gloss:"an"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Ausgang",is_delimiter:!1,gloss:"issue"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"finde,",is_delimiter:!1,gloss:"find,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Liegt",is_delimiter:!1,gloss:"Lies"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nicht",is_delimiter:!1,gloss:"not"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"schwer",is_delimiter:!1,gloss:"heavy (hard)"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mir",is_delimiter:!1,gloss:"to-me"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"in",is_delimiter:!1,gloss:"in"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dem",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Sinn.",is_delimiter:!1,gloss:"mind."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`In die tiefsten Felsengründe
Lockte mich ein Irrlicht hin:
Wie ich einen Ausgang finde,
Liegt nicht schwer mir in dem Sinn.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Bin",is_delimiter:!1,gloss:"Am"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"gewohnt",is_delimiter:!1,gloss:"accustomed"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"das",is_delimiter:!1,gloss:"to-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"irre",is_delimiter:!1,gloss:"erring"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Gehen,",is_delimiter:!1,gloss:"going,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"’S",is_delimiter:!1,gloss:"’S"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"führt",is_delimiter:!1,gloss:"leads"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ja",is_delimiter:!1,gloss:"indeed"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"jeder",is_delimiter:!1,gloss:"every"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Weg",is_delimiter:!1,gloss:"way"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"zum",is_delimiter:!1,gloss:"to-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Ziel:",is_delimiter:!1,gloss:"goal:"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Unsre",is_delimiter:!1,gloss:"Our"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Freuden,",is_delimiter:!1,gloss:"joys,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"unsre",is_delimiter:!1,gloss:"our"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Wehen,",is_delimiter:!1,gloss:"pains,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Alles",is_delimiter:!1,gloss:"All-(is)"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"eines",is_delimiter:!1,gloss:"(merely)-a"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Irrlichts",is_delimiter:!1,gloss:"will-o'-the-wisp"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Spiel!",is_delimiter:!1,gloss:"play!"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Bin gewohnt das irre Gehen,
’S führt ja jeder Weg zum Ziel:
Unsre Freuden, unsre Wehen,
Alles eines Irrlichts Spiel!`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Durch",is_delimiter:!1,gloss:"Through"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"des",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Bergstroms",is_delimiter:!1,gloss:"mountain-stream's"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"trockne",is_delimiter:!1,gloss:"dry"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Rinnen",is_delimiter:!1,gloss:"channels"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Wind’",is_delimiter:!1,gloss:"wends"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ruhig",is_delimiter:!1,gloss:"quietly"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mich",is_delimiter:!1,gloss:"myself"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"hinab",is_delimiter:!1,gloss:"down"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"—",is_delimiter:!1,gloss:"—"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Jeder",is_delimiter:!1,gloss:"Every"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Strom",is_delimiter:!1,gloss:"stream"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wird’s",is_delimiter:!1,gloss:"will-for-it-(obtain-it)"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Meer",is_delimiter:!1,gloss:"sea"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"gewinnen,",is_delimiter:!1,gloss:"to-gain,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Jedes",is_delimiter:!1,gloss:"Every"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Leiden",is_delimiter:!1,gloss:"suffering"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"auch",is_delimiter:!1,gloss:"also"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ein",is_delimiter:!1,gloss:"a"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Grab.",is_delimiter:!1,gloss:"grave."},{txt:" ",is_delimiter:!0,gloss:null}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Durch des Bergstroms trockne Rinnen
Wind’ ich ruhig mich hinab —
Jeder Strom wird’s Meer gewinnen,
Jedes Leiden auch ein Grab. `,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"#",is_delimiter:!1,gloss:"!UNKNOWN"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Rast.",is_delimiter:!1,gloss:"Rest."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:"# Rast.",annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Nun",is_delimiter:!1,gloss:"Now"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"merk",is_delimiter:!1,gloss:"perceive"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"erst,",is_delimiter:!1,gloss:"first,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wie",is_delimiter:!1,gloss:"how"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"müd’",is_delimiter:!1,gloss:"tired"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"bin,",is_delimiter:!1,gloss:"am,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Da",is_delimiter:!1,gloss:"When"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"zur",is_delimiter:!1,gloss:"to"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Ruh’",is_delimiter:!1,gloss:"rest"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mich",is_delimiter:!1,gloss:"myself"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"lege;",is_delimiter:!1,gloss:"lay;"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Das",is_delimiter:!1,gloss:"The"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Wandern",is_delimiter:!1,gloss:"wandering"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"hielt",is_delimiter:!1,gloss:"held"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mich",is_delimiter:!1,gloss:"me"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"munter",is_delimiter:!1,gloss:"merry"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"hin",is_delimiter:!1,gloss:"on"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Auf",is_delimiter:!1,gloss:"Upon"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"unwirthbarem",is_delimiter:!1,gloss:"unfit-for habitation"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Wege.",is_delimiter:!1,gloss:"way."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Nun merk ich erst, wie müd’ ich bin,
Da ich zur Ruh’ mich lege;
Das Wandern hielt mich munter hin
Auf unwirthbarem Wege.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Die",is_delimiter:!1,gloss:"The"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Füße",is_delimiter:!1,gloss:"feet"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"frugen",is_delimiter:!1,gloss:"ask'd"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nicht",is_delimiter:!1,gloss:"not"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nach",is_delimiter:!1,gloss:"after"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Rast,",is_delimiter:!1,gloss:"rest,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Es",is_delimiter:!1,gloss:"It"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"war",is_delimiter:!1,gloss:"was"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"zu",is_delimiter:!1,gloss:"too"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"kalt",is_delimiter:!1,gloss:"cold"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"zum",is_delimiter:!1,gloss:"to"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Stehen,",is_delimiter:!1,gloss:"stand,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Der",is_delimiter:!1,gloss:"The"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Rücken",is_delimiter:!1,gloss:"back"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"fühlte",is_delimiter:!1,gloss:"felt"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"keine",is_delimiter:!1,gloss:"no"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Last,",is_delimiter:!1,gloss:"load,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Der",is_delimiter:!1,gloss:"The"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Sturm",is_delimiter:!1,gloss:"storm"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"half",is_delimiter:!1,gloss:"helped"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"fort",is_delimiter:!1,gloss:"forth"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mich",is_delimiter:!1,gloss:"me"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wehen.",is_delimiter:!1,gloss:"to-blow."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Die Füße frugen nicht nach Rast,
Es war zu kalt zum Stehen,
Der Rücken fühlte keine Last,
Der Sturm half fort mich wehen.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"In",is_delimiter:!1,gloss:"In"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"eines",is_delimiter:!1,gloss:"one (a)"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Köhlers",is_delimiter:!1,gloss:"coalman’s"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"engem",is_delimiter:!1,gloss:"close"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Haus",is_delimiter:!1,gloss:"house"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Hab’",is_delimiter:!1,gloss:"Have"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Obdach",is_delimiter:!1,gloss:"shelter"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"gefunden;",is_delimiter:!1,gloss:"found;"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Doch",is_delimiter:!1,gloss:"Yet"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"meine",is_delimiter:!1,gloss:"my"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Glieder",is_delimiter:!1,gloss:"limbs"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ruhn",is_delimiter:!1,gloss:"rest"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nicht",is_delimiter:!1,gloss:"not"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"aus:",is_delimiter:!1,gloss:"out (therefrom):"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"So",is_delimiter:!1,gloss:"So"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"brennen",is_delimiter:!1,gloss:"burn"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ihre",is_delimiter:!1,gloss:"their"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Wunden.",is_delimiter:!1,gloss:"wounds."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`In eines Köhlers engem Haus
Hab’ Obdach ich gefunden;
Doch meine Glieder ruhn nicht aus:
So brennen ihre Wunden.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Auch",is_delimiter:!1,gloss:"Also"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"du,",is_delimiter:!1,gloss:"thou,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mein",is_delimiter:!1,gloss:"my"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Herz,",is_delimiter:!1,gloss:"heart,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"im",is_delimiter:!1,gloss:"in-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Kampf",is_delimiter:!1,gloss:"battle"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"und",is_delimiter:!1,gloss:"and"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Sturm",is_delimiter:!1,gloss:"storm"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"So",is_delimiter:!1,gloss:"So"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wild",is_delimiter:!1,gloss:"wild"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"und",is_delimiter:!1,gloss:"and"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"so",is_delimiter:!1,gloss:"so"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"verwegen,",is_delimiter:!1,gloss:"daring,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Fühlst",is_delimiter:!1,gloss:"Feel’st"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"in",is_delimiter:!1,gloss:"in"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"der",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Still’",is_delimiter:!1,gloss:"stillness"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"erst",is_delimiter:!1,gloss:"first"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"deinen",is_delimiter:!1,gloss:"thy"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Wurm",is_delimiter:!1,gloss:"worm"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Mit",is_delimiter:!1,gloss:"With"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"heißem",is_delimiter:!1,gloss:"hot"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Stich",is_delimiter:!1,gloss:"sting"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sich",is_delimiter:!1,gloss:"itself"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"regen!",is_delimiter:!1,gloss:"move!"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Auch du, mein Herz, im Kampf und Sturm
So wild und so verwegen,
Fühlst in der Still’ erst deinen Wurm
Mit heißem Stich sich regen!`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"#",is_delimiter:!1,gloss:"#"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Die",is_delimiter:!1,gloss:"The"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Nebensonnen.",is_delimiter:!1,gloss:"Sundogs."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:"# Die Nebensonnen.",annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Drei",is_delimiter:!1,gloss:"Three"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Sonnen",is_delimiter:!1,gloss:"suns"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sah’",is_delimiter:!1,gloss:"saw"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"am",is_delimiter:!1,gloss:"on-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Himmel",is_delimiter:!1,gloss:"heaven"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"stehn,",is_delimiter:!1,gloss:"to-stand,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Hab’",is_delimiter:!1,gloss:"Have"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"lang’",is_delimiter:!1,gloss:"long"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"und",is_delimiter:!1,gloss:"and"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"fest",is_delimiter:!1,gloss:"firm"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sie",is_delimiter:!1,gloss:"them"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"angesehn;",is_delimiter:!1,gloss:"gazed-on;"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Und",is_delimiter:!1,gloss:"And"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sie",is_delimiter:!1,gloss:"they"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"auch",is_delimiter:!1,gloss:"also"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"standen",is_delimiter:!1,gloss:"stood"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"da",is_delimiter:!1,gloss:"there"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"so",is_delimiter:!1,gloss:"so"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"stier,",is_delimiter:!1,gloss:"sterr,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Als",is_delimiter:!1,gloss:"As"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"könnten",is_delimiter:!1,gloss:"they-could"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sie",is_delimiter:!1,gloss:"they"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nicht",is_delimiter:!1,gloss:"not"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"weg",is_delimiter:!1,gloss:"away"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"von",is_delimiter:!1,gloss:"from"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mir.",is_delimiter:!1,gloss:"me."},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Ach,",is_delimiter:!1,gloss:"Ah,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"meine",is_delimiter:!1,gloss:"my"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Sonnen",is_delimiter:!1,gloss:"suns"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"seid",is_delimiter:!1,gloss:"be-(are)"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ihr",is_delimiter:!1,gloss:"you"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nicht!",is_delimiter:!1,gloss:"not!"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Schaut",is_delimiter:!1,gloss:"Look-(ye)"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Andren",is_delimiter:!1,gloss:"on-(the-)others"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"doch",is_delimiter:!1,gloss:"however"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"in’s",is_delimiter:!1,gloss:"into-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Angesicht!",is_delimiter:!1,gloss:"face!"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Ja,",is_delimiter:!1,gloss:"Yes,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"neulich",is_delimiter:!1,gloss:"lately"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"hatt’",is_delimiter:!1,gloss:"had"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"auch",is_delimiter:!1,gloss:"also"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wohl",is_delimiter:!1,gloss:"well-(perhaps)"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"drei:",is_delimiter:!1,gloss:"three:"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Nun",is_delimiter:!1,gloss:"now"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sind",is_delimiter:!1,gloss:"are"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"hinab",is_delimiter:!1,gloss:"down-(gone)"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"die",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"besten",is_delimiter:!1,gloss:"best"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"zwei.",is_delimiter:!1,gloss:"two."},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Ging’",is_delimiter:!1,gloss:"May-(it)"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nur",is_delimiter:!1,gloss:"only"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"die",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dritt’",is_delimiter:!1,gloss:"third"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"erst",is_delimiter:!1,gloss:"first"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"hinterdrein!",is_delimiter:!1,gloss:"behind-the-first!(may-it)"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Im",is_delimiter:!1,gloss:"In"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Dunkel",is_delimiter:!1,gloss:"darkness"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wird",is_delimiter:!1,gloss:"will"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mir",is_delimiter:!1,gloss:"to-me"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wohler",is_delimiter:!1,gloss:"better"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sein.",is_delimiter:!1,gloss:"be."},{txt:" ",is_delimiter:!0,gloss:null}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Drei Sonnen sah’ ich am Himmel stehn,
Hab’ lang’ und fest sie angesehn;
Und sie auch standen da so stier,
Als könnten sie nicht weg von mir.
Ach, meine Sonnen seid ihr nicht!
Schaut Andren doch in’s Angesicht!
Ja, neulich hatt’ ich auch wohl drei:
Nun sind hinab die besten zwei.
Ging’ nur die dritt’ erst hinterdrein!
Im Dunkel wird mir wohler sein. `,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"#",is_delimiter:!1,gloss:"!UNKNOWN"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Frühlingstraum.",is_delimiter:!1,gloss:"Spring-dream."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:"# Frühlingstraum.",annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"träumte",is_delimiter:!1,gloss:"dreamt"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"von",is_delimiter:!1,gloss:"of"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"bunten",is_delimiter:!1,gloss:"bright-colored"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Blumen,",is_delimiter:!1,gloss:"flowers,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"So",is_delimiter:!1,gloss:"So"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wie",is_delimiter:!1,gloss:"as"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sie",is_delimiter:!1,gloss:"they"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wohl",is_delimiter:!1,gloss:"well"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"blühen",is_delimiter:!1,gloss:"bloom"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"im",is_delimiter:!1,gloss:"in-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Mai,",is_delimiter:!1,gloss:"May,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"träumte",is_delimiter:!1,gloss:"dreamt"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"von",is_delimiter:!1,gloss:"of"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"grünen",is_delimiter:!1,gloss:"green"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Wiesen,",is_delimiter:!1,gloss:"meadows,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Von",is_delimiter:!1,gloss:"From"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"lustigem",is_delimiter:!1,gloss:"merry"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Vogelgeschrei.",is_delimiter:!1,gloss:"bird-calls."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Ich träumte von bunten Blumen,
So wie sie wohl blühen im Mai,
Ich träumte von grünen Wiesen,
Von lustigem Vogelgeschrei.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Und",is_delimiter:!1,gloss:"And"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"als",is_delimiter:!1,gloss:"when"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"die",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Hähne",is_delimiter:!1,gloss:"cocks"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"krähten,",is_delimiter:!1,gloss:"crowed,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Da",is_delimiter:!1,gloss:"Then"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ward",is_delimiter:!1,gloss:"was"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mein",is_delimiter:!1,gloss:"my"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Auge",is_delimiter:!1,gloss:"eye"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wach;",is_delimiter:!1,gloss:"awake;"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Da",is_delimiter:!1,gloss:"Then"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"war",is_delimiter:!1,gloss:"was"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"es",is_delimiter:!1,gloss:"it"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"kalt",is_delimiter:!1,gloss:"cold"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"und",is_delimiter:!1,gloss:"and"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"finster,",is_delimiter:!1,gloss:"dark,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Es",is_delimiter:!1,gloss:"(There)"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"schrieen",is_delimiter:!1,gloss:"cawed"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"die",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Raben",is_delimiter:!1,gloss:"ravens"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"vom",is_delimiter:!1,gloss:"from the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Dach.",is_delimiter:!1,gloss:"roof."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Und als die Hähne krähten,
Da ward mein Auge wach;
Da war es kalt und finster,
Es schrieen die Raben vom Dach.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Doch",is_delimiter:!1,gloss:"But"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"an",is_delimiter:!1,gloss:"on"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"den",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Fensterscheiben",is_delimiter:!1,gloss:"windowpanes"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Wer",is_delimiter:!1,gloss:"Who"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mahlte",is_delimiter:!1,gloss:"painted"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"die",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Blätter",is_delimiter:!1,gloss:"leaves"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"da?",is_delimiter:!1,gloss:"there?"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Ihr",is_delimiter:!1,gloss:"You"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"lacht",is_delimiter:!1,gloss:"laugh"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wohl",is_delimiter:!1,gloss:"well"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"über",is_delimiter:!1,gloss:"about"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"den",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Träumer,",is_delimiter:!1,gloss:"dreamer,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Der",is_delimiter:!1,gloss:"Who"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Blumen",is_delimiter:!1,gloss:"flowers"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"im",is_delimiter:!1,gloss:"in"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Winter",is_delimiter:!1,gloss:"winter"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sah?",is_delimiter:!1,gloss:"saw?"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Doch an den Fensterscheiben
Wer mahlte die Blätter da?
Ihr lacht wohl über den Träumer,
Der Blumen im Winter sah?`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"träumte",is_delimiter:!1,gloss:"dreamt"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"von",is_delimiter:!1,gloss:"of"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Lieb’",is_delimiter:!1,gloss:"love"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"um",is_delimiter:!1,gloss:"about"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Liebe,",is_delimiter:!1,gloss:"love,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Von",is_delimiter:!1,gloss:"Of"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"einer",is_delimiter:!1,gloss:"a"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"schönen",is_delimiter:!1,gloss:"beautiful"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Maid,",is_delimiter:!1,gloss:"girl,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Von",is_delimiter:!1,gloss:"Of"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Herzen",is_delimiter:!1,gloss:"hearts"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"und",is_delimiter:!1,gloss:"and"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"von",is_delimiter:!1,gloss:"of"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Küssen,",is_delimiter:!1,gloss:"kisses,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Von",is_delimiter:!1,gloss:"Of"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Wonn’",is_delimiter:!1,gloss:"bliss"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"und",is_delimiter:!1,gloss:"and"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Seligkeit.",is_delimiter:!1,gloss:"happiness."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Ich träumte von Lieb’ um Liebe,
Von einer schönen Maid,
Von Herzen und von Küssen,
Von Wonn’ und Seligkeit.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Und",is_delimiter:!1,gloss:"And"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"als",is_delimiter:!1,gloss:"when"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"die",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Hähne",is_delimiter:!1,gloss:"Cocks"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"krähten,",is_delimiter:!1,gloss:"crew,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Da",is_delimiter:!1,gloss:"Then"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ward",is_delimiter:!1,gloss:"was"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mein",is_delimiter:!1,gloss:"my"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Herze",is_delimiter:!1,gloss:"heart"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wach;",is_delimiter:!1,gloss:"awake;"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Nun",is_delimiter:!1,gloss:"Now"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sitz’",is_delimiter:!1,gloss:"sit"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"hier",is_delimiter:!1,gloss:"here"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"alleine",is_delimiter:!1,gloss:"alone"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Und",is_delimiter:!1,gloss:"And"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"denke",is_delimiter:!1,gloss:"think"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dem",is_delimiter:!1,gloss:"of-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Traume",is_delimiter:!1,gloss:"dream"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nach.",is_delimiter:!1,gloss:"afterwards-counter."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Und als die Hähne krähten,
Da ward mein Herze wach;
Nun sitz’ ich hier alleine
Und denke dem Traume nach.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Die",is_delimiter:!1,gloss:"The"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Augen",is_delimiter:!1,gloss:"eyes"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"schließ’",is_delimiter:!1,gloss:"close-I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wieder,",is_delimiter:!1,gloss:"again,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Noch",is_delimiter:!1,gloss:"Nor"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"schlägt",is_delimiter:!1,gloss:"beats"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"das",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Herz",is_delimiter:!1,gloss:"heart"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"so",is_delimiter:!1,gloss:"so"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"warm.",is_delimiter:!1,gloss:"warm."},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Wann",is_delimiter:!1,gloss:"When"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"grünt",is_delimiter:!1,gloss:"greens"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ihr",is_delimiter:!1,gloss:"your"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Blätter",is_delimiter:!1,gloss:"leaves"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"am",is_delimiter:!1,gloss:"at-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Fenster?",is_delimiter:!1,gloss:"window?"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Wann",is_delimiter:!1,gloss:"When"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"halt’",is_delimiter:!1,gloss:"hold"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dich,",is_delimiter:!1,gloss:"thee,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Liebchen,",is_delimiter:!1,gloss:"dear-one,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"im",is_delimiter:!1,gloss:"in-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Arm?",is_delimiter:!1,gloss:"arm?"},{txt:" ",is_delimiter:!0,gloss:null}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Die Augen schließ’ ich wieder,
Noch schlägt das Herz so warm.
Wann grünt ihr Blätter am Fenster?
Wann halt’ ich dich, Liebchen, im Arm? `,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"#",is_delimiter:!1,gloss:"!UNKNOWN"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Einsamkeit.",is_delimiter:!1,gloss:"!UNKNOWN"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:"# Einsamkeit.",annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Wie",is_delimiter:!1,gloss:"Like"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"eine",is_delimiter:!1,gloss:"a"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"trübe",is_delimiter:!1,gloss:"dark"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Wolke",is_delimiter:!1,gloss:"cloud"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Durch",is_delimiter:!1,gloss:"Through"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"heitre",is_delimiter:!1,gloss:"bright"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Lüfte",is_delimiter:!1,gloss:"airs"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"geht,",is_delimiter:!1,gloss:"goes,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Wann",is_delimiter:!1,gloss:"When"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"in",is_delimiter:!1,gloss:"in"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"der",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Tanne",is_delimiter:!1,gloss:"fir-tree"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Wipfel",is_delimiter:!1,gloss:"top"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Ein",is_delimiter:!1,gloss:"A"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mattes",is_delimiter:!1,gloss:"languid"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Lüftchen",is_delimiter:!1,gloss:"little-breeze"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"weht:",is_delimiter:!1,gloss:"blows:"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Wie eine trübe Wolke
Durch heitre Lüfte geht,
Wann in der Tanne Wipfel
Ein mattes Lüftchen weht:`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"So",is_delimiter:!1,gloss:"So"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"zieh’",is_delimiter:!1,gloss:"zieh’"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"ich"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"meine",is_delimiter:!1,gloss:"meine"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Straße",is_delimiter:!1,gloss:"Strasse"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Dahin",is_delimiter:!1,gloss:"dahin"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mit",is_delimiter:!1,gloss:"mit"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"trägem",is_delimiter:!1,gloss:"trägem"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Fuß,",is_delimiter:!1,gloss:"Fuße,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Durch",is_delimiter:!1,gloss:"Durch"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"helles,",is_delimiter:!1,gloss:"helles,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"frohes",is_delimiter:!1,gloss:"frohes"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Leben,",is_delimiter:!1,gloss:"Leben,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Einsam",is_delimiter:!1,gloss:"einsam"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"und",is_delimiter:!1,gloss:"und"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ohne",is_delimiter:!1,gloss:"ohne"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Gruß.",is_delimiter:!1,gloss:"Gruss."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`So zieh’ ich meine Straße
Dahin mit trägem Fuß,
Durch helles, frohes Leben,
Einsam und ohne Gruß.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Ach,",is_delimiter:!1,gloss:"Ah,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"daß",is_delimiter:!1,gloss:"that"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"die",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Luft",is_delimiter:!1,gloss:"air"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"so",is_delimiter:!1,gloss:"so"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ruhig!",is_delimiter:!1,gloss:"quiet!"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Ach,",is_delimiter:!1,gloss:"Ah,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"daß",is_delimiter:!1,gloss:"that"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"die",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Welt",is_delimiter:!1,gloss:"world"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"so",is_delimiter:!1,gloss:"so"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"licht!",is_delimiter:!1,gloss:"light!"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Als",is_delimiter:!1,gloss:"When"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"noch",is_delimiter:!1,gloss:"yet"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"die",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Stürme",is_delimiter:!1,gloss:"storms"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"tobten,",is_delimiter:!1,gloss:"raged,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"War",is_delimiter:!1,gloss:"was"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"so",is_delimiter:!1,gloss:"so"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"elend",is_delimiter:!1,gloss:"wretched"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nicht.",is_delimiter:!1,gloss:"not."},{txt:" ",is_delimiter:!0,gloss:null}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Ach, daß die Luft so ruhig!
Ach, daß die Welt so licht!
Als noch die Stürme tobten,
War ich so elend nicht. `,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"#",is_delimiter:!1,gloss:"!UNKNOWN"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Muth!",is_delimiter:!1,gloss:"!UNKNOWN"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:"# Muth!",annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Fliegt",is_delimiter:!1,gloss:"Flies"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"der",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Schnee",is_delimiter:!1,gloss:"snow"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mir",is_delimiter:!1,gloss:"to-me"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"in’s",is_delimiter:!1,gloss:"into-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Gesicht,",is_delimiter:!1,gloss:"face,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Schüttl’",is_delimiter:!1,gloss:"shake-I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ihn",is_delimiter:!1,gloss:"it"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"herunter.",is_delimiter:!1,gloss:"down."},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Wenn",is_delimiter:!1,gloss:"When"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mein",is_delimiter:!1,gloss:"my"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Herz",is_delimiter:!1,gloss:"heart"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"im",is_delimiter:!1,gloss:"in-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Busen",is_delimiter:!1,gloss:"bosom"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"spricht,",is_delimiter:!1,gloss:"speaks,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Sing’",is_delimiter:!1,gloss:"Sing"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"hell",is_delimiter:!1,gloss:"merry"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"und",is_delimiter:!1,gloss:"and"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"munter.",is_delimiter:!1,gloss:"gay."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Fliegt der Schnee mir in’s Gesicht,
Schüttl’ ich ihn herunter.
Wenn mein Herz im Busen spricht,
Sing’ ich hell und munter.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Höre",is_delimiter:!1,gloss:"Hear"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nicht,",is_delimiter:!1,gloss:"not,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"was",is_delimiter:!1,gloss:"what"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"es",is_delimiter:!1,gloss:"it"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mir",is_delimiter:!1,gloss:"to-me"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sagt,",is_delimiter:!1,gloss:"says,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Habe",is_delimiter:!1,gloss:"Have"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"keine",is_delimiter:!1,gloss:"no"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Ohren.",is_delimiter:!1,gloss:"ears."},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Fühle",is_delimiter:!1,gloss:"Feel"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nicht,",is_delimiter:!1,gloss:"not,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"was",is_delimiter:!1,gloss:"what"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"es",is_delimiter:!1,gloss:"it"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mir",is_delimiter:!1,gloss:"to-me"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"klagt,",is_delimiter:!1,gloss:"complains,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Klagen",is_delimiter:!1,gloss:"Complaining"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ist",is_delimiter:!1,gloss:"is"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"für",is_delimiter:!1,gloss:"for"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Thoren.",is_delimiter:!1,gloss:"Fools."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Höre nicht, was es mir sagt,
Habe keine Ohren.
Fühle nicht, was es mir klagt,
Klagen ist für Thoren.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Lustig",is_delimiter:!1,gloss:"Merry"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"in",is_delimiter:!1,gloss:"into"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"die",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Welt",is_delimiter:!1,gloss:"world"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"hinein",is_delimiter:!1,gloss:"therein"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Gegen",is_delimiter:!1,gloss:"Against"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Wind",is_delimiter:!1,gloss:"wind"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"und",is_delimiter:!1,gloss:"and"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Wetter!",is_delimiter:!1,gloss:"weather!"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Will",is_delimiter:!1,gloss:"Will"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"kein",is_delimiter:!1,gloss:"no"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Gott",is_delimiter:!1,gloss:"God"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"auf",is_delimiter:!1,gloss:"upon"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Erden",is_delimiter:!1,gloss:"earth"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sein,",is_delimiter:!1,gloss:"be,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Sind",is_delimiter:!1,gloss:"Are"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wir",is_delimiter:!1,gloss:"we"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"selber",is_delimiter:!1,gloss:"self"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Götter.",is_delimiter:!1,gloss:"gods."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Lustig in die Welt hinein
Gegen Wind und Wetter!
Will kein Gott auf Erden sein,
Sind wir selber Götter.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"#",is_delimiter:!1,gloss:"!UNKNOWN"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Der",is_delimiter:!1,gloss:"!UNKNOWN"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Leiermann.",is_delimiter:!1,gloss:"The-organ-grinder."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:"# Der Leiermann.",annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Drüben",is_delimiter:!1,gloss:"Over-there"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"hinter’m",is_delimiter:!1,gloss:"behind-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Dorfe",is_delimiter:!1,gloss:"village"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Steht",is_delimiter:!1,gloss:"Stands"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ein",is_delimiter:!1,gloss:"a"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Leiermann,",is_delimiter:!1,gloss:"hurdy-gurdy-man,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Und",is_delimiter:!1,gloss:"And"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mit",is_delimiter:!1,gloss:"with"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"starren",is_delimiter:!1,gloss:"stiff"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Fingern",is_delimiter:!1,gloss:"fingers"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Dreht",is_delimiter:!1,gloss:"turns"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"er",is_delimiter:!1,gloss:"he"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"was",is_delimiter:!1,gloss:"what"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"er",is_delimiter:!1,gloss:"he"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"kann.",is_delimiter:!1,gloss:"can."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Drüben hinter’m Dorfe
Steht ein Leiermann,
Und mit starren Fingern
Dreht er was er kann.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Baarfuß",is_delimiter:!1,gloss:"Bare-foot"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"auf",is_delimiter:!1,gloss:"on"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dem",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Eise",is_delimiter:!1,gloss:"ice"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Schwankt",is_delimiter:!1,gloss:"staggering"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"er",is_delimiter:!1,gloss:"he"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"hin",is_delimiter:!1,gloss:"hither"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"und",is_delimiter:!1,gloss:"and"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"her;",is_delimiter:!1,gloss:"thither;"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Und",is_delimiter:!1,gloss:"And"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sein",is_delimiter:!1,gloss:"his"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"kleiner",is_delimiter:!1,gloss:"little"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Teller",is_delimiter:!1,gloss:"plate"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Bleibt",is_delimiter:!1,gloss:"remains"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ihm",is_delimiter:!1,gloss:"to-him"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"immer",is_delimiter:!1,gloss:"always"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"leer.",is_delimiter:!1,gloss:"empty."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Baarfuß auf dem Eise
Schwankt er hin und her;
Und sein kleiner Teller
Bleibt ihm immer leer.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Keiner",is_delimiter:!1,gloss:"Nobody"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mag",is_delimiter:!1,gloss:"may"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ihn",is_delimiter:!1,gloss:"him"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"hören,",is_delimiter:!1,gloss:"hear,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Keiner",is_delimiter:!1,gloss:"Nobody"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sieht",is_delimiter:!1,gloss:"looks"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ihn",is_delimiter:!1,gloss:"him"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"an;",is_delimiter:!1,gloss:"on;"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Und",is_delimiter:!1,gloss:"And"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"die",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Hunde",is_delimiter:!1,gloss:"dogs"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"brummen",is_delimiter:!1,gloss:"growl"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Um",is_delimiter:!1,gloss:"about"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"den",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"alten",is_delimiter:!1,gloss:"old"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Mann.",is_delimiter:!1,gloss:"man."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Keiner mag ihn hören,
Keiner sieht ihn an;
Und die Hunde brummen
Um den alten Mann.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Und",is_delimiter:!1,gloss:"And"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"er",is_delimiter:!1,gloss:"he"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"läßt",is_delimiter:!1,gloss:"leaves"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"es",is_delimiter:!1,gloss:"it"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"gehen",is_delimiter:!1,gloss:"go"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Alles,",is_delimiter:!1,gloss:"all,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"wie",is_delimiter:!1,gloss:"as"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"es",is_delimiter:!1,gloss:"it"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"will,",is_delimiter:!1,gloss:"will,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Dreht,",is_delimiter:!1,gloss:"Turn,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"und",is_delimiter:!1,gloss:"and"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"seine",is_delimiter:!1,gloss:"his"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Leier",is_delimiter:!1,gloss:"lyre"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Steht",is_delimiter:!1,gloss:"Stands"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ihm",is_delimiter:!1,gloss:"to-him"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nimmer",is_delimiter:!1,gloss:"never"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"still.",is_delimiter:!1,gloss:"still."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Und er läßt es gehen
Alles, wie es will,
Dreht, und seine Leier
Steht ihm nimmer still.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Wunderlicher",is_delimiter:!1,gloss:"Wondering"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Alter,",is_delimiter:!1,gloss:"Old-man,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Soll",is_delimiter:!1,gloss:"Shall"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ich",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mit",is_delimiter:!1,gloss:"with"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dir",is_delimiter:!1,gloss:"thee"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"gehn?",is_delimiter:!1,gloss:"go?"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Willst",is_delimiter:!1,gloss:"Wilt"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"zu",is_delimiter:!1,gloss:"to"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"meinen",is_delimiter:!1,gloss:"my"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Liedern",is_delimiter:!1,gloss:"songs"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Deine",is_delimiter:!1,gloss:"thy"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Leier",is_delimiter:!1,gloss:"lyre"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"drehn?",is_delimiter:!1,gloss:"turn?"},{txt:`
`,is_delimiter:!0,gloss:null}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`German`_`English`",original_text:`Wunderlicher Alter,
Soll ich mit dir gehn?
Willst zu meinen Liedern
Deine Leier drehn?
`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"German",lang_to:"English"}}],paragraph_delimiters:[`

`],original_text:`# Gute Nacht.

Fremd bin ich eingezogen,
Fremd zieh’ ich wieder aus.
Der Mai war mir gewogen
Mit manchem Blumenstrauß.
Das Mädchen sprach von Liebe,
Die Mutter gar von Eh’ —
Nun ist die Welt so trübe,
Der Weg gehüllt in Schnee.

Ich kann zu meiner Reisen
Nicht wählen mit der Zeit:
Muß selbst den Weg mir weisen
In dieser Dunkelheit.
Es zieht ein Mondenschatten
Als mein Gefährte mit,
Und auf den weißen Matten
Such’ ich des Wildes Tritt.

Was soll ich länger weilen,
Bis man mich trieb’ hinaus?
Laß irre Hunde heulen
Vor ihres Herren Haus!
Die Liebe liebt das Wandern, —
Gott hat sie so gemacht —
Von Einem zu dem Andern —
Fein Liebchen, gute Nacht!

Will dich im Traum nicht stören,
Wär’ Schad’ um deine Ruh’,
Sollst meinen Tritt nicht hören —
Sacht, sacht die Thüre zu!
Ich schreibe nur im Gehen
An’s Thor noch gute Nacht,
Damit du mögest sehen,
Ich hab’ an dich gedacht.

# Die Wetterfahne.

Der Wind spielt mit der Wetterfahne
Auf meines schönen Liebchens Haus.
Da dacht’ ich schon in meinem Wahne,
Sie pfiff’ den armen Flüchtling aus.

Er hätt’ es ehr bemerken sollen,
Des Hauses aufgestecktes Schild,
So hätt’ er nimmer suchen wollen
Im Haus’ ein treues Frauenbild.

Der Wind spielt drinnen mit den Herzen,
Wie auf dem Dach, nur nicht so laut.
Was fragen sie nach meinen Schmerzen?
Ihr Kind ist eine reiche Braut.

# Gefrorene Thränen.

Gefrorne Tropfen fallen
Von meinen Wangen ab:
Und ist’s mir denn entgangen,
Daß ich geweinet hab’?

Ei Thränen, meine Thränen,
Und seid ihr gar so lau,
Daß ihr erstarrt zu Eise,
Wie kühler Morgenthau?

Und dringt doch aus der Quelle
Der Brust so glühend heiß,
Als wolltet ihr zerschmelzen
Des ganzen Winters Eis.

# Erstarrung.

Ich such’ im Schnee vergebens
Nach ihrer Tritte Spur,
Hier, wo wir oft gewandelt
Selbander durch die Flur.

Ich will den Boden küssen,
Durchdringen Eis und Schnee
Mit meinen heißen Thränen,
Bis ich die Erde seh’.

Wo find’ ich eine Blüthe,
Wo find’ ich grünes Gras?
Die Blumen sind erstorben,
Der Rasen sieht so blaß.

Soll denn kein Angedenken
Ich nehmen mit von hier?
Wenn meine Schmerzen schweigen,
Wer sagt mir dann von ihr?

Mein Herz ist wie erfroren,
Kalt starrt ihr Bild darin:
Schmilzt je das Herz mir wieder,
Fließt auch das Bild dahin.

# Der Lindenbaum.

Am Brunnen vor dem Thore
Da steht ein Lindenbaum:
Ich träumt’ in seinem Schatten
So manchen süßen Traum.

Ich schnitt in seine Rinde
So manches liebe Wort;
Es zog in Freud’ und Leide
Zu ihm mich immer fort.

Ich mußt’ auch heute wandern
Vorbei in tiefer Nacht,
Da hab’ ich noch im Dunkel
Die Augen zugemacht.

Und seine Zweige rauschten,
Als riefen sie mir zu:
Komm her zu mir, Geselle,
Hier findst du deine Ruh’!

Die kalten Winde bliesen
Mir grad’ in’s Angesicht,
Der Hut flog mir vom Kopfe,
Ich wendete mich nicht.

Nun bin ich manche Stunde
Entfernt von jenem Ort,
Und immer hör’ ich’s rauschen:
Du fändest Ruhe dort!

# Die Post.

Von der Straße her ein Posthorn klingt.
Was hat es, daß es so hoch aufspringt,
Mein Herz?

Die Post bringt keinen Brief für dich:
Was drängst du denn so wunderlich,
Mein Herz?

Nun ja, die Post kömmt aus der Stadt,
Wo ich ein liebes Liebchen hatt’,
Mein Herz!

Willst wohl einmal hinübersehn,
Und fragen, wie es dort mag gehn,
Mein Herz? 

# Wasserfluth.

Manche Thrän’ aus meinen Augen
Ist gefallen in den Schnee;
Seine kalten Flocken saugen
Durstig ein das heiße Weh.

Wann die Gräser sprossen wollen,
Weht daher ein lauer Wind,
Und das Eis zerspringt in Schollen,
Und der weiche Schnee zerrinnt.

Schnee, du weißt von meinem Sehnen:
Sag mir, wohin geht dein Lauf?
Folge nach nur meinen Thränen,
Nimmt dich bald das Bächlein auf.

Wirst mit ihm die Stadt durchziehen,
Muntre Straßen ein und aus:
Fühlst du meine Thränen glühen,
Da ist meiner Liebsten Haus.

# Auf dem Flusse.

Der du so lustig rauschtest,
Du heller, wilder Fluß,
Wie still bist du geworden,
Giebst keinen Scheidegruß.

Mit harter, starrer Rinde
Hast du dich überdeckt,
Liegst kalt und unbeweglich
Im Sande hingestreckt.

In deine Decke grab’ ich
Mit einem spitzen Stein
Den Namen meiner Liebsten
Und Stund’ und Tag hinein:

Den Tag des ersten Grußes,
Den Tag, an dem ich ging,
Um Nam’ und Zahlen windet
Sich ein zerbrochner Ring.

Mein Herz, in diesem Bache
Erkennst du nun dein Bild?
Ob’s unter seiner Rinde
Wohl auch so reißend schwillt?

# Rückblick.

Es brennt mir unter beiden Sohlen,
Tret’ ich auch schon auf Eis und Schnee.
Ich möcht’ nicht wieder Athem holen,
Bis ich nicht mehr die Thürme seh’.

Hab’ mich an jedem Stein gestoßen,
So eilt’ ich zu der Stadt hinaus;
Die Krähen warfen Bäll’ und Schloßen
Auf meinen Hut von jedem Haus.

Wie anders hast du mich empfangen,
Du Stadt der Unbeständigkeit!
An deinen blanken Fenstern sangen
Die Lerch’ und Nachtigall im Streit.

Die runden Lindenbäume blühten,
Die klaren Rinnen rauschten hell,
Und ach, zwei Mädchenaugen glühten! –
Da war’s geschehn um dich, Gesell!

Kömmt mir der Tag in die Gedanken,
Möcht’ ich noch einmal rückwärts sehn,
Möcht’ ich zurücke wieder wanken,
Vor ihrem Hause stille stehn.

# Der greise Kopf.

Der Reif hatt’ einen weißen Schein
Mir über’s Haar gestreuet.
Da meint’ ich schon ein Greis zu sein,
Und hab’ mich sehr gefreuet.

Doch bald ist er hinweggethaut,
Hab’ wieder schwarze Haare,
Daß mir’s vor meiner Jugend graut —
Wie weit noch bis zur Bahre!

Vom Abendroth zum Morgenlicht
Ward mancher Kopf zum Greise.
Wer glaubt’s? Und meiner ward es nicht
Auf dieser ganzen Reise!

# Die Krähe.

Eine Krähe war mit mir
Aus der Stadt gezogen,
Ist bis heute für und für
Um mein Haupt geflogen.

Krähe, wunderliches Thier,
Willst mich nicht verlassen?
Meinst wohl bald als Beute hier
Meinen Leib zu fassen?

Nun, es wird nicht weit mehr gehn
An dem Wanderstabe.
Krähe, laß mich endlich sehn
Treue bis zum Grabe! 

# Letzte Hoffnung.

Hier und da ist an den Bäumen
Noch ein buntes Blatt zu sehn,
Und ich bleibe vor den Bäumen
Oftmals in Gedanken stehn.

Schaue nach dem einen Blatte,
Hänge meine Hoffnung dran;
Spielt der Wind mit meinem Blatte,
Zittr’ ich, was ich zittern kann.

Ach, und fällt das Blatt zu Boden,
Fällt mit ihm die Hoffnung ab,
Fall’ ich selber mit zu Boden,
Wein’ auf meiner Hoffnung Grab. 

# Im Dorfe

Es bellen die Hunde, es rasseln die Ketten.
Die Menschen schnarchen in ihren Betten,
Träumen sich Manches, was sie nicht haben,
Thun sich im Guten und Argen erlaben:
Und Morgen früh ist Alles zerflossen. —
Je nun, sie haben ihr Theil genossen,
Und hoffen, was sie noch übrig ließen,
Doch wieder zu finden auf ihren Kissen.

Bellt mich nur fort, ihr wachen Hunde,
Laßt mich nicht ruhn in der Schlummerstunde!
Ich bin zu Ende mit allen Träumen —
Was will ich unter den Schläfern säumen? 

# Der stürmische Morgen.

Wie hat der Sturm zerrissen
Des Himmels graues Kleid!
Die Wolkenfetzen flattern
Umher in mattem Streit.

Und rothe Feuerflammen
Ziehn zwischen ihnen hin.
Das nenn’ ich einen Morgen
So recht nach meinem Sinn!

Mein Herz sieht an dem Himmel
Gemahlt sein eignes Bild —
Es ist nichts als der Winter,
Der Winter kalt und wild! 

# Täuschung.

Ein Licht tanzt freundlich vor mir her;
Ich folg’ ihm nach die Kreuz und Quer;
Ich folg’ ihm gern, und seh’s ihm an,
Daß es verlockt den Wandersmann.
Ach, wer wie ich so elend ist,
Giebt gern sich hin der bunten List,
Die hinter Eis und Nacht und Graus
Ihm weist ein helles, warmes Haus,
Und eine liebe Seele drin —
Nur Täuschung ist für mich Gewinn! 

# Der Wegweiser.

Was vermeid’ ich denn die Wege,
Wo die andren Wandrer gehn,
Suche mir versteckte Stege
Durch verschneite Felsenhöhn?

Habe ja doch nichts begangen,
Daß ich Menschen sollte scheun —
Welch ein thörichtes Verlangen
Treibt mich in die Wüstenein?

Weiser stehen auf den Straßen,
Weisen auf die Städte zu,
Und ich wandre sonder Maßen,
Ohne Ruh’, und suche Ruh’.

Einen Weiser seh’ ich stehen
Unverrückt vor meinem Blick;
Eine Straße muß ich gehen,
Die noch Keiner ging zurück.

# Das Wirthshaus.

Auf einen Todtenacker
Hat mich mein Weg gebracht.
Allhier will ich einkehren:
Hab’ ich bei mir gedacht.

Ihr grünen Todtenkränze
Könnt wohl die Zeichen sein,
Die müde Wandrer laden
In’s kühle Wirthshaus ein.

Sind denn in diesem Hause
Die Kammern all’ besetzt?
Bin matt zum Niedersinken
Und tödtlich schwer verletzt.

O unbarmherz’ge Schenke,
Doch weisest du mich ab?
Nun weiter denn, nur weiter,
Mein treuer Wanderstab!

# Das Irrlicht.

In die tiefsten Felsengründe
Lockte mich ein Irrlicht hin:
Wie ich einen Ausgang finde,
Liegt nicht schwer mir in dem Sinn.

Bin gewohnt das irre Gehen,
’S führt ja jeder Weg zum Ziel:
Unsre Freuden, unsre Wehen,
Alles eines Irrlichts Spiel!

Durch des Bergstroms trockne Rinnen
Wind’ ich ruhig mich hinab —
Jeder Strom wird’s Meer gewinnen,
Jedes Leiden auch ein Grab. 

# Rast.

Nun merk ich erst, wie müd’ ich bin,
Da ich zur Ruh’ mich lege;
Das Wandern hielt mich munter hin
Auf unwirthbarem Wege.

Die Füße frugen nicht nach Rast,
Es war zu kalt zum Stehen,
Der Rücken fühlte keine Last,
Der Sturm half fort mich wehen.

In eines Köhlers engem Haus
Hab’ Obdach ich gefunden;
Doch meine Glieder ruhn nicht aus:
So brennen ihre Wunden.

Auch du, mein Herz, im Kampf und Sturm
So wild und so verwegen,
Fühlst in der Still’ erst deinen Wurm
Mit heißem Stich sich regen!

# Die Nebensonnen.

Drei Sonnen sah’ ich am Himmel stehn,
Hab’ lang’ und fest sie angesehn;
Und sie auch standen da so stier,
Als könnten sie nicht weg von mir.
Ach, meine Sonnen seid ihr nicht!
Schaut Andren doch in’s Angesicht!
Ja, neulich hatt’ ich auch wohl drei:
Nun sind hinab die besten zwei.
Ging’ nur die dritt’ erst hinterdrein!
Im Dunkel wird mir wohler sein. 

# Frühlingstraum.

Ich träumte von bunten Blumen,
So wie sie wohl blühen im Mai,
Ich träumte von grünen Wiesen,
Von lustigem Vogelgeschrei.

Und als die Hähne krähten,
Da ward mein Auge wach;
Da war es kalt und finster,
Es schrieen die Raben vom Dach.

Doch an den Fensterscheiben
Wer mahlte die Blätter da?
Ihr lacht wohl über den Träumer,
Der Blumen im Winter sah?

Ich träumte von Lieb’ um Liebe,
Von einer schönen Maid,
Von Herzen und von Küssen,
Von Wonn’ und Seligkeit.

Und als die Hähne krähten,
Da ward mein Herze wach;
Nun sitz’ ich hier alleine
Und denke dem Traume nach.

Die Augen schließ’ ich wieder,
Noch schlägt das Herz so warm.
Wann grünt ihr Blätter am Fenster?
Wann halt’ ich dich, Liebchen, im Arm? 

# Einsamkeit.

Wie eine trübe Wolke
Durch heitre Lüfte geht,
Wann in der Tanne Wipfel
Ein mattes Lüftchen weht:

So zieh’ ich meine Straße
Dahin mit trägem Fuß,
Durch helles, frohes Leben,
Einsam und ohne Gruß.

Ach, daß die Luft so ruhig!
Ach, daß die Welt so licht!
Als noch die Stürme tobten,
War ich so elend nicht. 

# Muth!

Fliegt der Schnee mir in’s Gesicht,
Schüttl’ ich ihn herunter.
Wenn mein Herz im Busen spricht,
Sing’ ich hell und munter.

Höre nicht, was es mir sagt,
Habe keine Ohren.
Fühle nicht, was es mir klagt,
Klagen ist für Thoren.

Lustig in die Welt hinein
Gegen Wind und Wetter!
Will kein Gott auf Erden sein,
Sind wir selber Götter.

# Der Leiermann.

Drüben hinter’m Dorfe
Steht ein Leiermann,
Und mit starren Fingern
Dreht er was er kann.

Baarfuß auf dem Eise
Schwankt er hin und her;
Und sein kleiner Teller
Bleibt ihm immer leer.

Keiner mag ihn hören,
Keiner sieht ihn an;
Und die Hunde brummen
Um den alten Mann.

Und er läßt es gehen
Alles, wie es will,
Dreht, und seine Leier
Steht ihm nimmer still.

Wunderlicher Alter,
Soll ich mit dir gehn?
Willst zu meinen Liedern
Deine Leier drehn?
`,p_div_locs:"[13, 15, 227, 229, 438, 440, 650, 652, 874, 876, 894, 896, 1040, 1042, 1172, 1174, 1320, 1322, 1342, 1344, 1442, 1444, 1544, 1546, 1656, 1658, 1671, 1673, 1779, 1781, 1885, 1887, 1990, 1992, 2101, 2103, 2219, 2221, 2238, 2240, 2344, 2346, 2446, 2448, 2548, 2550, 2653, 2655, 2757, 2759, 2861, 2863, 2874, 2876, 2965, 2967, 3051, 3053, 3135, 3137, 3214, 3216, 3230, 3232, 3345, 3347, 3474, 3476, 3607, 3609, 3734, 3736, 3753, 3755, 3862, 3864, 3964, 3966, 4067, 4069, 4174, 4176, 4284, 4286, 4298, 4300, 4448, 4450, 4586, 4588, 4723, 4725, 4863, 4865, 5002, 5004, 5022, 5024, 5153, 5155, 5279, 5281, 5404, 5406, 5418, 5420, 5515, 5517, 5627, 5629, 5733, 5735, 5753, 5755, 5872, 5874, 5999, 6001, 6130, 6132, 6142, 6144, 6466, 6468, 6629, 6631, 6655, 6657, 6760, 6762, 6864, 6866, 6979, 6981, 6993, 6995, 7346, 7348, 7364, 7366, 7482, 7484, 7607, 7609, 7721, 7723, 7836, 7838, 7855, 7857, 7960, 7962, 8064, 8066, 8173, 8175, 8277, 8279, 8294, 8296, 8419, 8421, 8537, 8539, 8666, 8668, 8675, 8677, 8797, 8799, 8920, 8922, 9034, 9036, 9166, 9168, 9186, 9188, 9539, 9541, 9558, 9560, 9680, 9682, 9792, 9794, 9907, 9909, 10016, 10018, 10123, 10125, 10261, 10263, 10276, 10278, 10374, 10376, 10473, 10475, 10583, 10585, 10592, 10594, 10716, 10718, 10818, 10820, 10923, 10925, 10941, 10943, 11031, 11033, 11125, 11127, 11210, 11212, 11299, 11301, 11388]"}]},{corpus_id:"Le papillon et le fleur",corpuses_history:[{paragraphs:[{pstate:"ANNOTATED",tokens:[{txt:"La",is_delimiter:!1,gloss:"The"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"pauvre",is_delimiter:!1,gloss:"poor"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"fleur",is_delimiter:!1,gloss:"flower"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"disait",is_delimiter:!1,gloss:"said"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"au",is_delimiter:!1,gloss:"to-the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"papillon",is_delimiter:!1,gloss:"butterfly"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"céleste:",is_delimiter:!1,gloss:"heavenly:"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Ne",is_delimiter:!1,gloss:"Not"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"fuis",is_delimiter:!1,gloss:"flee"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"pas!",is_delimiter:!1,gloss:"not!"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Vois",is_delimiter:!1,gloss:"See"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"comme",is_delimiter:!1,gloss:"how"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nos",is_delimiter:!1,gloss:"our"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"destins",is_delimiter:!1,gloss:"destinies"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sont",is_delimiter:!1,gloss:"are"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"différents.",is_delimiter:!1,gloss:"different."},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Je",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"reste,",is_delimiter:!1,gloss:"remain,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Tu",is_delimiter:!1,gloss:"Thou"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"t’en",is_delimiter:!1,gloss:"thyself"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"vas!",is_delimiter:!1,gloss:"goest!"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`French`_`English`",original_text:`La pauvre fleur disait au papillon céleste:
Ne fuis pas!
Vois comme nos destins sont différents. Je reste,
Tu t’en vas!`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"French",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Pourtant",is_delimiter:!1,gloss:"Yet"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nous",is_delimiter:!1,gloss:"we"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nous",is_delimiter:!1,gloss:"we"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"aimons,",is_delimiter:!1,gloss:"love,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nous",is_delimiter:!1,gloss:"we"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"vivons",is_delimiter:!1,gloss:"live"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sans",is_delimiter:!1,gloss:"without"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"les",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"hommes",is_delimiter:!1,gloss:"men"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Et",is_delimiter:!1,gloss:"And"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"loin",is_delimiter:!1,gloss:"far"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"d’eux,",is_delimiter:!1,gloss:"from-them,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Et",is_delimiter:!1,gloss:"And"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nous",is_delimiter:!1,gloss:"we"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nous",is_delimiter:!1,gloss:"ourselves"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ressemblons,",is_delimiter:!1,gloss:"resemble,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"et",is_delimiter:!1,gloss:"and"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"l’on",is_delimiter:!1,gloss:"one"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"dit",is_delimiter:!1,gloss:"says"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"que",is_delimiter:!1,gloss:"that"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nous",is_delimiter:!1,gloss:"we"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sommes",is_delimiter:!1,gloss:"are"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Fleurs",is_delimiter:!1,gloss:"Flowers"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"tous",is_delimiter:!1,gloss:"all"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"deux!",is_delimiter:!1,gloss:"two!"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`French`_`English`",original_text:`Pourtant nous nous aimons, nous vivons sans les hommes
Et loin d’eux,
Et nous nous ressemblons, et l’on dit que nous sommes
Fleurs tous deux!`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"French",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Mais,",is_delimiter:!1,gloss:"But,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"hélas!",is_delimiter:!1,gloss:"alas!"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"l’air",is_delimiter:!1,gloss:"the-air"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"t’emporte",is_delimiter:!1,gloss:"carries-thee-off"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"et",is_delimiter:!1,gloss:"and"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"la",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"terre",is_delimiter:!1,gloss:"earth"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"m’enchaîne.",is_delimiter:!1,gloss:"enchains-me."},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Sort",is_delimiter:!1,gloss:"Fate"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"cruel!",is_delimiter:!1,gloss:"cruel!"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Je",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"voudrais",is_delimiter:!1,gloss:"should-like"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"embaumer",is_delimiter:!1,gloss:"to-embalm"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ton",is_delimiter:!1,gloss:"thy"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"vol",is_delimiter:!1,gloss:"flight"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"de",is_delimiter:!1,gloss:"of"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mon",is_delimiter:!1,gloss:"my"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"haleine",is_delimiter:!1,gloss:"breath"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Dans",is_delimiter:!1,gloss:"In"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"le",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ciel!",is_delimiter:!1,gloss:"sky!"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`French`_`English`",original_text:`Mais, hélas! l’air t’emporte et la terre m’enchaîne.
Sort cruel!
Je voudrais embaumer ton vol de mon haleine
Dans le ciel!`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"French",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Mais",is_delimiter:!1,gloss:"But"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"non,",is_delimiter:!1,gloss:"no,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"tu",is_delimiter:!1,gloss:"thou"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"vas",is_delimiter:!1,gloss:"goest"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"trop",is_delimiter:!1,gloss:"too"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"loin!",is_delimiter:!1,gloss:"far!"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"–",is_delimiter:!1,gloss:"-"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"Parmi",is_delimiter:!1,gloss:"Among"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"des",is_delimiter:!1,gloss:"the"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"fleurs",is_delimiter:!1,gloss:"flowers"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"sans",is_delimiter:!1,gloss:"without"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"nombre",is_delimiter:!1,gloss:"number"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Vous",is_delimiter:!1,gloss:"You"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"fuyez,",is_delimiter:!1,gloss:"flee,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Et",is_delimiter:!1,gloss:"And"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"moi",is_delimiter:!1,gloss:"me"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"je",is_delimiter:!1,gloss:"I"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"reste",is_delimiter:!1,gloss:"remain"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"seule",is_delimiter:!1,gloss:"alone"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"à",is_delimiter:!1,gloss:"to"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"voir",is_delimiter:!1,gloss:"see"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"tourner",is_delimiter:!1,gloss:"turn"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mon",is_delimiter:!1,gloss:"my"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ombre",is_delimiter:!1,gloss:"shade"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"À",is_delimiter:!1,gloss:"At"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mes",is_delimiter:!1,gloss:"my"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"pieds.",is_delimiter:!1,gloss:"feet."}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`French`_`English`",original_text:`
Mais non, tu vas trop loin! – Parmi des fleurs sans nombre
Vous fuyez,
Et moi je reste seule à voir tourner mon ombre
À mes pieds.`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"French",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Tu",is_delimiter:!1,gloss:"Thou"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"fuis,",is_delimiter:!1,gloss:"fleest,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"puis",is_delimiter:!1,gloss:"then"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"tu",is_delimiter:!1,gloss:"thou"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"reviens;",is_delimiter:!1,gloss:"returnst;"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"puis",is_delimiter:!1,gloss:"then"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"tu",is_delimiter:!1,gloss:"thou"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"t’en",is_delimiter:!1,gloss:"thence"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"vas",is_delimiter:!1,gloss:"goest"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"encore",is_delimiter:!1,gloss:"yet"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Luire",is_delimiter:!1,gloss:"Shining"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ailleurs.",is_delimiter:!1,gloss:"elsewhere."},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Aussi",is_delimiter:!1,gloss:"Also"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"me",is_delimiter:!1,gloss:"me"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"trouves-tu",is_delimiter:!1,gloss:"findest"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"toujours",is_delimiter:!1,gloss:"always"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"à",is_delimiter:!1,gloss:"at"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"chaque",is_delimiter:!1,gloss:"each"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"aurore",is_delimiter:!1,gloss:"aurora"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Toute",is_delimiter:!1,gloss:"All"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"en",is_delimiter:!1,gloss:"in"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"pleurs!",is_delimiter:!1,gloss:"tears!"}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`French`_`English`",original_text:`Tu fuis, puis tu reviens; puis tu t’en vas encore
Luire ailleurs.
Aussi me trouves-tu toujours à chaque aurore
Toute en pleurs!`,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"French",lang_to:"English"}},{pstate:"PARSED",tokens:[{txt:`

`,is_delimiter:!0,gloss:null}],is_delimiter:!0,token_delimiters:` 	
\r\v\f`,annotator_info:"",original_text:`

`,annotator_info_obj:{annotator_name:null,lang_from:null,lang_to:null}},{pstate:"ANNOTATED",tokens:[{txt:"Oh!",is_delimiter:!1,gloss:"Oh!"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"pour",is_delimiter:!1,gloss:"for"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"que",is_delimiter:!1,gloss:"that"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"notre",is_delimiter:!1,gloss:"our"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"amour",is_delimiter:!1,gloss:"love"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"coule",is_delimiter:!1,gloss:"flow"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"des",is_delimiter:!1,gloss:"some"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"jours",is_delimiter:!1,gloss:"days"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"fidèles,",is_delimiter:!1,gloss:"faithful,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Ô",is_delimiter:!1,gloss:"O"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"mon",is_delimiter:!1,gloss:"my"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"roi,",is_delimiter:!1,gloss:"king,"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Prends",is_delimiter:!1,gloss:"Take"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"comme",is_delimiter:!1,gloss:"like"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"moi",is_delimiter:!1,gloss:"me"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"racine,",is_delimiter:!1,gloss:"root,"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ou",is_delimiter:!1,gloss:"or"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"donne-moi",is_delimiter:!1,gloss:"give-me"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"des",is_delimiter:!1,gloss:"some"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"ailes",is_delimiter:!1,gloss:"wings"},{txt:`
`,is_delimiter:!0,gloss:null},{txt:"Comme",is_delimiter:!1,gloss:"Like"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"à",is_delimiter:!1,gloss:"at"},{txt:" ",is_delimiter:!0,gloss:null},{txt:"toi!",is_delimiter:!1,gloss:"thee!"},{txt:" ",is_delimiter:!0,gloss:null}],is_delimiter:!1,token_delimiters:` 	
\r\v\f`,annotator_info:"ChatGptAnnotator_`French`_`English`",original_text:`Oh! pour que notre amour coule des jours fidèles,
Ô mon roi,
Prends comme moi racine, ou donne-moi des ailes
Comme à toi! `,annotator_info_obj:{annotator_name:"chatgpt_ft0",lang_from:"French",lang_to:"English"}}],paragraph_delimiters:[`

`],original_text:`La pauvre fleur disait au papillon céleste:
Ne fuis pas!
Vois comme nos destins sont différents. Je reste,
Tu t’en vas!

Pourtant nous nous aimons, nous vivons sans les hommes
Et loin d’eux,
Et nous nous ressemblons, et l’on dit que nous sommes
Fleurs tous deux!

Mais, hélas! l’air t’emporte et la terre m’enchaîne.
Sort cruel!
Je voudrais embaumer ton vol de mon haleine
Dans le ciel!


Mais non, tu vas trop loin! – Parmi des fleurs sans nombre
Vous fuyez,
Et moi je reste seule à voir tourner mon ombre
À mes pieds.

Tu fuis, puis tu reviens; puis tu t’en vas encore
Luire ailleurs.
Aussi me trouves-tu toujours à chaque aurore
Toute en pleurs!

Oh! pour que notre amour coule des jours fidèles,
Ô mon roi,
Prends comme moi racine, ou donne-moi des ailes
Comme à toi! `,p_div_locs:"[119, 121, 262, 264, 386, 388, 519, 521, 648, 650, 772]"}]}],ta={props:{t:{type:Object,required:!0},index:{type:Number,required:!0}},data(){return{isSelected:!1}},computed:{is_delimiter(){return this.t.is_delimiter},should_linebreak(){return this.t.txt.includes(`
`)},txt(){return this.t.txt},gloss(){let t=this.t.gloss;return t=="!UNKNOWN"&&(t="-"),t}},methods:{toggle(){this.isSelected=!this.isSelected,this.$emit("selectionChanged",{tIndex:this.index,isSelected:this.isSelected})}}},ea={class:"list-group list-group-flush"},sa={class:"list-group-item token_txt"},la={class:"list-group-item gloss"},ia={key:1},na={key:2,class:"token_wrapper"};function ra(t,e,s,l,i,n){return n.is_delimiter?n.should_linebreak?(C(),B("br",ia)):(C(),B("div",na,[S("span",null,bt(n.txt),1)])):(C(),B("div",{key:0,class:Pt(["token_wrapper","card",{"selected-token":i.isSelected}]),onClick:e[0]||(e[0]=r=>n.toggle())},[S("ul",ea,[S("li",sa,bt(n.txt),1),S("li",la,bt(n.gloss),1)])],2))}const oa=ct(ta,[["render",ra],["__scopeId","data-v-9ba9cf58"]]),aa={props:{p:{type:Object,required:!0},index:{type:Number,required:!0}},components:{Token:oa},computed:{isAnnotateButtonVisible(){return!this.p.is_delimiter&&this.p.tokens&&this.p.tokens.length}},data(){return{selectedTokens:new Set,showPre:!1}},methods:{annotateP(){this.$emit("annotateP",this.index)},reannotateP(){this.$emit("reannotateP",this.index,Array.from(this.selectedTokens))},onSelectionChanged({tIndex:t,isSelected:e}){e?this.selectedTokens.add(t):this.selectedTokens.delete(t)}}},ua={class:"paragraph_wrapper"},da={key:0,class:"paragraph_annotate_buttons_span"},_a={key:1};function ma(t,e,s,l,i,n){const r=pt("Token");return C(),B("div",ua,[n.isAnnotateButtonVisible?(C(),B("span",da,[S("button",{class:"corpus_button btn btn-light",onClick:e[0]||(e[0]=o=>n.annotateP(s.index))}," Annotate "),S("button",{class:"corpus_button btn btn-light",onClick:e[1]||(e[1]=o=>n.reannotateP(s.index))}," Reannotate "),e[2]||(e[2]=S("br",null,null,-1))])):xe("",!0),i.showPre?(C(),B("pre",_a,bt(JSON.stringify(s.p)),1)):xe("",!0),(C(!0),B(Q,null,Me(s.p.tokens,(o,u)=>(C(),he(r,{key:u,t:o,index:u,onSelectionChanged:n.onSelectionChanged},null,8,["t","index","onSelectionChanged"]))),128))])}const ga=ct(aa,[["render",ma],["__scopeId","data-v-affc5bb3"]]),fa={props:{corpus_id:{required:!0},corpus:{type:Object,required:!0}},components:{Paragraph:ga},data(){return{api:new At,sharedState:Se,isCorpusVisible:!1,showPre:!1}},computed:{pseudoState(){return!this.corpus.paragraphs||this.corpus.paragraphs.length<=0?"PLAIN":this.corpus.paragraphs[0].pstate},divideButtonClass(){const t=this.pseudoState=="PLAIN";return{"btn-primary":t,"btn-light":!t}},parseButtonClass(){const t=this.pseudoState=="DIVIDED";return{"btn-primary":t,"btn-light":!t}},annotateButtonClass(){const t=this.pseudoState=="PARSED";return{"btn-primary":t,"btn-light":!t}}},methods:{toggleCorpusVisibility(){this.isCorpusVisible=!this.isCorpusVisible},download(){const t=JSON.stringify(this.corpus);console.log("Downloading...");let e=document.createElement("a"),s=new Blob([t],{type:"text/plain"});e.download=this.corpus_id+".corpus.json",e.href=URL.createObjectURL(s),e.click()},async divide(t=`
`){this.api.submit("/parser/divide","POST",{corpus_id:this.corpus_id,divide_options:{p_delims:[t]}})},async parse(){this.api.submit("/parser/parse","POST",{corpus_id:this.corpus_id,parse_options:{t_delims:null}})},async annotate(t=null){this.api.submit("/annotator/annotate","POST",{corpus_id:this.corpus_id,annotate_options:{annotator_name:this.sharedState.annotator_name,lang_from:this.sharedState.lang_from,lang_to:this.sharedState.lang_to,target_paragraphs:t}})},async reannotate(t,e){if(!e){console.error("target_tokens is not given");return}if(e.length==0){ut.emit("addAlert",{message:"No token selected.",alertClass:"alert-warning"});return}this.api.submit("/annotator/reannotate","POST",{corpus_id:this.corpus_id,annotate_options:{annotator_name:this.sharedState.annotator_name,lang_from:this.sharedState.lang_from,lang_to:this.sharedState.lang_to,target_paragraphs:t},reannotate_options:{target_tokens:e}})},onAnnotateP(t){this.annotate([t])},onReannotateP(t,e){this.reannotate([t],e)}}},xa={class:"corpus_wrapper"},ha={key:0,class:"corpus"},ca={class:"corpus_buttons_span"},pa={key:0,class:"corpus-pre"};function ba(t,e,s,l,i,n){const r=pt("Paragraph");return C(),B("div",xa,[e[8]||(e[8]=S("hr",null,null,-1)),S("h4",{onClick:e[0]||(e[0]=o=>n.toggleCorpusVisibility())},bt("CORPUS: "+s.corpus_id),1),i.isCorpusVisible?(C(),B("div",ha,[S("span",ca,[S("button",{class:"corpus_button btn btn-light",onClick:e[1]||(e[1]=o=>n.download())},"Download"),S("button",{class:Pt(["corpus_button","btn",n.divideButtonClass]),onClick:e[2]||(e[2]=o=>n.divide())},"Divide",2),S("button",{class:Pt(["corpus_button","btn",n.divideButtonClass]),onClick:e[3]||(e[3]=o=>n.divide("\\n\\n"))},"Divide (for poems)",2),S("button",{class:Pt(["corpus_button","btn",n.parseButtonClass]),onClick:e[4]||(e[4]=o=>n.parse())},"Parse",2),S("button",{class:Pt(["corpus_button","btn",n.annotateButtonClass]),onClick:e[5]||(e[5]=o=>n.annotate())}," Annotate ",2)]),e[6]||(e[6]=S("br",null,null,-1)),i.showPre?(C(),B("pre",pa,bt(JSON.stringify(s.corpus)),1)):xe("",!0),e[7]||(e[7]=S("h4",null,"paragraphs",-1)),(C(!0),B(Q,null,Me(s.corpus.paragraphs,(o,u)=>(C(),he(r,{key:u,p:o,index:u,onAnnotateP:n.onAnnotateP,onReannotateP:n.onReannotateP},null,8,["p","index","onAnnotateP","onReannotateP"]))),128))])):xe("",!0)])}const Aa=ct(fa,[["render",ba],["__scopeId","data-v-c198a50a"]]),ka={components:{Corpus:Aa},data(){return{api:new At,corpuses:[...ei]}},methods:{async updateCorpuses(){const e=await(await this.api.submit("/corpuses/")).json();this.corpuses=[...ei,...e]}},created(){ut.on("updateCorpuses",this.updateCorpuses)},beforeDestroy(){ut.off("updateCorpuses",this.updateCorpuses)}};function wa(t,e,s,l,i,n){const r=pt("Corpus");return C(),B("div",null,[(C(!0),B(Q,null,Me(i.corpuses,(o,u)=>(C(),he(r,{key:u,corpus:o.corpuses_history.at(-1),corpus_id:o.corpus_id},null,8,["corpus","corpus_id"]))),128))])}const Ea=ct(ka,[["render",wa]]),Sa={data(){return{api:new At,originalText:""}},methods:{async onUploadButtonClicked(){this.api.submit("/upload","POST",{original_text:this.originalText}).then(t=>t.json()).then(t=>{ut.emit("addAlert",{message:"Uploaded corpus "+t.corpus_id})})},async onJsonFileInput(t){let s=await t.target.files[0].text();s=JSON.parse(s),this.api.submit("/upload","POST",{corpus:s}).then(l=>l.json()).then(l=>{ut.emit("addAlert",{message:"Uploaded corpus "+l.corpus_id})})}}},Ta={id:"frontend_upload_div"};function Da(t,e,s,l,i,n){return C(),B("div",Ta,[e[3]||(e[3]=S("h3",null,"Upload...",-1)),e[4]||(e[4]=S("label",{for:"frontend_original_text"},"Original Text",-1)),e[5]||(e[5]=S("br",null,null,-1)),Xe(S("textarea",{"onUpdate:modelValue":e[0]||(e[0]=r=>i.originalText=r),class:"context_input auto-resize field_input",name:"frontend_original_text",spellcheck:"true",autofocus:"",placeholder:"Original Text",id:"frontend_original_text_textarea"},null,512),[[jo,i.originalText]]),e[6]||(e[6]=S("br",null,null,-1)),S("button",{onClick:e[1]||(e[1]=r=>n.onUploadButtonClicked()),id:"frontend_original_text_button",class:"btn btn-primary"}," Upload "),e[7]||(e[7]=S("br",null,null,-1)),e[8]||(e[8]=S("p",null,"...or the JSON file",-1)),S("input",{type:"file",id:"json_file_input",onChange:e[2]||(e[2]=(...r)=>n.onJsonFileInput&&n.onJsonFileInput(...r))},null,32)])}const ya=ct(Sa,[["render",Da],["__scopeId","data-v-3796bdda"]]),Na={props:{message:{type:String,required:!0},alertClass:{type:String,default:"alert-warning",validator(t){return["alert-success","alert-warning","alert-info","alert-light"].includes(t)}},timeout:{type:Number,default:5e4}},data(){return{showAlert:!1,alertMessage:this.message}},mounted(){this.showAlert=!0,setTimeout(()=>{this.showAlert=!1},this.timeout)}};function Ga(t,e,s,l,i,n){return i.showAlert?(C(),B("div",{key:0,class:Pt(["alert",this.alertClass]),role:"alert"},bt(i.alertMessage),3)):xe("",!0)}const va=ct(Na,[["render",Ga]]),Wa={components:{Alert:va},data(){return{alerts:[],maxAlerts:3}},methods:{addAlert({message:t,alertClass:e="alert-light"}){this.alerts.length>=this.maxAlerts&&this.alerts.shift(),this.alerts.push({message:t,alertClass:e})}},created(){ut.on("addAlert",this.addAlert)},beforeDestroy(){ut.off("addAlert",this.addAlert)}};function ja(t,e,s,l,i,n){const r=pt("Alert");return C(),B("div",null,[(C(!0),B(Q,null,Me(i.alerts,(o,u)=>(C(),he(r,{key:u,message:o.message,timeout:o.timeout,alertClass:o.alertClass},null,8,["message","timeout","alertClass"]))),128))])}const Oa=ct(Wa,[["render",ja]]),Ca={props:{task_id:{required:!0},status:{type:String,required:!0},target_corpus_id:{required:!0}},data(){return{api:new At}},computed:{isAbortButtonShown(){return["READY","RUNNING"].includes(this.status)}},methods:{async abort(){this.api.submit("/task/"+this.task_id+"/abort")}}},Ia={class:"task_wrapper"};function Ra(t,e,s,l,i,n){return C(),B("div",Ia,[e[1]||(e[1]=S("hr",null,null,-1)),S("p",null,[Ie(" Task: "+bt(s.task_id)+" ",1),n.isAbortButtonShown?(C(),B("button",{key:0,class:"task_button btn btn-light",onClick:e[0]||(e[0]=r=>n.abort())}," Abort ")):xe("",!0),Ie(" for corpus: "+bt(s.target_corpus_id)+" ("+bt(s.status)+") ",1)])])}const Pa=ct(Ca,[["render",Ra]]),Ha={components:{Task:Pa},data(){return{api:new At,tasks:[]}},methods:{async updateTasks(){const e=await(await this.api.submit("/tasks/")).json();this.tasks=e}},created(){ut.on("updateTasks",this.updateTasks)},beforeDestroy(){ut.off("updateTasks",this.updateTasks)}};function Ma(t,e,s,l,i,n){const r=pt("Task");return C(),B(Q,null,[e[0]||(e[0]=S("h3",null,"Tasks",-1)),S("div",null,[(C(!0),B(Q,null,Me(i.tasks,(o,u)=>(C(),he(r,{key:u,task_id:o.task_id,status:o.status,target_corpus_id:o.target_corpus_id},null,8,["task_id","status","target_corpus_id"]))),128))])],64)}const za=ct(Ha,[["render",Ma]]),Fa={components:{Header:zo,RestAuth:Ko,AnnotatorSelect:Xo,CorpusesView:Ea,UploadView:ya,AlertsView:Oa,TasksView:za},data(){return{}}};function Ua(t,e,s,l,i,n){const r=pt("Header"),o=pt("RestAuth"),u=pt("AnnotatorSelect"),g=pt("CorpusesView"),_=pt("UploadView"),f=pt("AlertsView"),k=pt("TasksView");return C(),B(Q,null,[S("header",null,[Y(r)]),S("main",null,[Y(o),e[0]||(e[0]=S("hr",null,null,-1)),Y(u),e[1]||(e[1]=S("hr",null,null,-1)),Y(g),e[2]||(e[2]=S("hr",null,null,-1)),Y(_),e[3]||(e[3]=S("hr",null,null,-1)),Y(f),e[4]||(e[4]=S("hr",null,null,-1)),Y(k)])],64)}const La=ct(Fa,[["render",Ua],["__scopeId","data-v-931c6b77"]]);Io(La).mount("#app");
