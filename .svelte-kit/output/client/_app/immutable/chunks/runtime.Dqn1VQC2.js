var mn=Array.isArray,An=Array.from,Sn=Object.defineProperty,ot=Object.getOwnPropertyDescriptor,Ht=Object.getOwnPropertyDescriptors,Rn=Object.prototype,gn=Array.prototype,Ut=Object.getPrototypeOf;const xn=()=>{};function Dn(t){return t()}function Bt(t){for(var n=0;n<t.length;n++)t[n]()}const m=2,_t=4,M=8,tt=16,E=32,K=64,D=128,B=256,p=512,R=1024,Y=2048,b=4096,j=8192,Vt=16384,ct=32768,On=65536,$t=1<<18,vt=1<<19,ut=Symbol("$state"),kn=Symbol("");function pt(t){return t===this.v}function Gt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function ht(t){return!Gt(t,this.v)}function Kt(t){throw new Error("effect_in_teardown")}function Zt(){throw new Error("effect_in_unowned_derived")}function Wt(t){throw new Error("effect_orphan")}function zt(){throw new Error("effect_update_depth_exceeded")}function In(){throw new Error("hydration_failed")}function Nn(t){throw new Error("props_invalid_value")}function bn(){throw new Error("state_descriptors_fixed")}function Pn(){throw new Error("state_prototype_fixed")}function Jt(){throw new Error("state_unsafe_local_read")}function Qt(){throw new Error("state_unsafe_mutation")}function nt(t){return{f:0,v:t,reactions:null,equals:pt,version:0}}function Cn(t){return Xt(nt(t))}function Fn(t,n=!1){var e;const r=nt(t);return n||(r.equals=ht),f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function Xt(t){return a!==null&&a.f&m&&(y===null?pn([t]):y.push(t)),t}function qn(t,n){return a!==null&&st()&&a.f&(m|tt)&&(y===null||!y.includes(t))&&Qt(),tn(t,n)}function tn(t,n){return t.equals(n)||(t.v=n,t.version=Ft(),dt(t,R),st()&&u!==null&&u.f&p&&!(u.f&E)&&(_!==null&&_.includes(t)?(w(u,R),W(u)):S===null?hn([t]):S.push(t))),n}function dt(t,n){var r=t.reactions;if(r!==null)for(var e=st(),s=r.length,l=0;l<s;l++){var o=r[l],i=o.f;i&R||!e&&o===u||(w(o,n),i&(p|D)&&(i&m?dt(o,Y):W(o)))}}const Ln=1,Mn=2,Yn=4,jn=8,Hn=16,Un=1,Bn=2,nn="[",rn="[!",en="]",yt={},Vn=Symbol();function Et(t){console.warn("hydration_mismatch")}let x=!1;function $n(t){x=t}let d;function F(t){if(t===null)throw Et(),yt;return d=t}function Gn(){return F(O(d))}function Kn(t){if(x){if(O(d)!==null)throw Et(),yt;d=t}}function Zn(t=1){if(x){for(var n=t,r=d;n--;)r=O(r);d=r}}function Wn(){for(var t=0,n=d;;){if(n.nodeType===8){var r=n.data;if(r===en){if(t===0)return n;t-=1}else(r===nn||r===rn)&&(t+=1)}var e=O(n);n.remove(),n=e}}var at,sn,wt,Tt;function zn(){if(at===void 0){at=window,sn=document;var t=Element.prototype,n=Node.prototype;wt=ot(n,"firstChild").get,Tt=ot(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function z(t=""){return document.createTextNode(t)}function J(t){return wt.call(t)}function O(t){return Tt.call(t)}function Jn(t,n){if(!x)return J(t);var r=J(d);if(r===null)r=d.appendChild(z());else if(n&&r.nodeType!==3){var e=z();return r==null||r.before(e),F(e),e}return F(r),r}function Qn(t,n){if(!x){var r=J(t);return r instanceof Comment&&r.data===""?O(r):r}return d}function Xn(t,n=1,r=!1){let e=x?d:t;for(;n--;)e=O(e);if(!x)return e;var s=e.nodeType;if(r&&s!==3){var l=z();return e==null||e.before(l),F(l),l}return F(e),e}function tr(t){t.textContent=""}function ln(t){var n=m|R;u===null?n|=D:u.f|=vt;const r={children:null,ctx:f,deps:null,equals:pt,f:n,fn:t,reactions:null,v:null,version:0,parent:u};if(a!==null&&a.f&m){var e=a;(e.children??(e.children=[])).push(r)}return r}function nr(t){const n=ln(t);return n.equals=ht,n}function mt(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&m?rt(e):C(e)}}}function At(t){var n,r=u;G(t.parent);try{mt(t),n=qt(t)}finally{G(r)}return n}function St(t){var n=At(t),r=(k||t.f&D)&&t.deps!==null?Y:p;w(t,r),t.equals(n)||(t.v=n,t.version=Ft())}function rt(t){mt(t),L(t,0),w(t,j),t.v=t.children=t.deps=t.ctx=t.reactions=null}function Rt(t){u===null&&a===null&&Wt(),a!==null&&a.f&D&&Zt(),et&&Kt()}function on(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function P(t,n,r,e=!0){var s=(t&K)!==0,l=u,o={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|R,first:null,fn:n,last:null,next:null,parent:s?null:l,prev:null,teardown:null,transitions:null,version:0};if(r){var i=I;try{it(!0),Z(o),o.f|=Vt}catch(c){throw C(o),c}finally{it(i)}}else n!==null&&W(o);var T=r&&o.deps===null&&o.first===null&&o.nodes_start===null&&o.teardown===null&&(o.f&vt)===0;if(!T&&!s&&e&&(l!==null&&on(o,l),a!==null&&a.f&m)){var A=a;(A.children??(A.children=[])).push(o)}return o}function rr(t){const n=P(M,null,!1);return w(n,p),n.teardown=t,n}function er(t){Rt();var n=u!==null&&(u.f&E)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:u,reaction:a})}else{var e=gt(t);return e}}function sr(t){return Rt(),un(t)}function lr(t){const n=P(K,t,!0);return()=>{C(n)}}function gt(t){return P(_t,t,!1)}function un(t){return P(M,t,!0)}function or(t){return an(t)}function an(t,n=0){return P(M|tt|n,t,!0)}function ur(t,n=!0){return P(M|E,t,!0,n)}function xt(t){var n=t.teardown;if(n!==null){const r=et,e=a;ft(!0),$(null);try{n.call(null)}finally{ft(r),$(e)}}}function Dt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)rt(n[r])}}function Ot(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;C(r,n),r=e}}function fn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&E||C(n),n=r}}function C(t,n=!0){var r=!1;if((n||t.f&$t)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var l=e===s?null:O(e);e.remove(),e=l}r=!0}Ot(t,n&&!r),Dt(t),L(t,0),w(t,j);var o=t.transitions;if(o!==null)for(const T of o)T.stop();xt(t);var i=t.parent;i!==null&&i.first!==null&&kt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function kt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function ar(t,n){var r=[];It(t,r,!0),_n(r,()=>{C(t),n&&n()})}function _n(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function It(t,n,r){if(!(t.f&b)){if(t.f^=b,t.transitions!==null)for(const o of t.transitions)(o.is_global||r)&&n.push(o);for(var e=t.first;e!==null;){var s=e.next,l=(e.f&ct)!==0||(e.f&E)!==0;It(e,n,l?r:!1),e=s}}}function ir(t){Nt(t,!0)}function Nt(t,n){if(t.f&b){t.f^=b,H(t)&&Z(t);for(var r=t.first;r!==null;){var e=r.next,s=(r.f&ct)!==0||(r.f&E)!==0;Nt(r,s?n:!1),r=e}if(t.transitions!==null)for(const l of t.transitions)(l.is_global||n)&&l.in()}}let V=!1,Q=[];function bt(){V=!1;const t=Q.slice();Q=[],Bt(t)}function fr(t){V||(V=!0,queueMicrotask(bt)),Q.push(t)}function cn(){V&&bt()}const Pt=0,vn=1;let U=Pt,q=!1,I=!1,et=!1;function it(t){I=t}function ft(t){et=t}let g=[],N=0;let a=null;function $(t){a=t}let u=null;function G(t){u=t}let y=null;function pn(t){y=t}let _=null,h=0,S=null;function hn(t){S=t}let Ct=0,k=!1,f=null;function Ft(){return++Ct}function st(){return f!==null&&f.l===null}function H(t){var o,i;var n=t.f;if(n&R)return!0;if(n&Y){var r=t.deps,e=(n&D)!==0;if(r!==null){var s;if(n&B){for(s=0;s<r.length;s++)((o=r[s]).reactions??(o.reactions=[])).push(t);t.f^=B}for(s=0;s<r.length;s++){var l=r[s];if(H(l)&&St(l),e&&u!==null&&!k&&!((i=l==null?void 0:l.reactions)!=null&&i.includes(t))&&(l.reactions??(l.reactions=[])).push(t),l.version>t.version)return!0}}e||w(t,p)}return!1}function dn(t,n,r){throw t}function qt(t){var lt;var n=_,r=h,e=S,s=a,l=k,o=y,i=f,T=t.f;_=null,h=0,S=null,a=T&(E|K)?null:t,k=!I&&(T&D)!==0,y=null,f=t.ctx;try{var A=(0,t.fn)(),c=t.deps;if(_!==null){var v;if(L(t,h),c!==null&&h>0)for(c.length=h+_.length,v=0;v<_.length;v++)c[h+v]=_[v];else t.deps=c=_;if(!k)for(v=h;v<c.length;v++)((lt=c[v]).reactions??(lt.reactions=[])).push(t)}else c!==null&&h<c.length&&(L(t,h),c.length=h);return A}finally{_=n,h=r,S=e,a=s,k=l,y=o,f=i}}function yn(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&m&&(_===null||!_.includes(n))&&(w(n,Y),n.f&(D|B)||(n.f^=B),L(n,0))}function L(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)yn(t,r[e])}function Z(t){var n=t.f;if(!(n&j)){w(t,p);var r=u;u=t;try{n&tt?fn(t):Ot(t),Dt(t),xt(t);var e=qt(t);t.teardown=typeof e=="function"?e:null,t.version=Ct}catch(s){dn(s)}finally{u=r}}}function Lt(){N>1e3&&(N=0,zt()),N++}function Mt(t){var n=t.length;if(n!==0){Lt();var r=I;I=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&p||(s.f^=p);var l=[];Yt(s,l),En(l)}}finally{I=r}}}function En(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];!(e.f&(j|b))&&H(e)&&(Z(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?kt(e):e.fn=null))}}function wn(){if(q=!1,N>1001)return;const t=g;g=[],Mt(t),q||(N=0)}function W(t){U===Pt&&(q||(q=!0,queueMicrotask(wn)));for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(K|E)){if(!(r&p))return;n.f^=p}}g.push(n)}function Yt(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,l=(s&E)!==0,o=l&&(s&p)!==0;if(!o&&!(s&b))if(s&M){l?r.f^=p:H(r)&&Z(r);var i=r.first;if(i!==null){r=i;continue}}else s&_t&&e.push(r);var T=r.next;if(T===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var A=v.next;if(A!==null){r=A;continue t}v=v.parent}}r=T}for(var c=0;c<e.length;c++)i=e[c],n.push(i),Yt(i,n)}function jt(t){var n=U,r=g;try{Lt();const s=[];U=vn,g=s,q=!1,Mt(r);var e=t==null?void 0:t();return cn(),(g.length>0||s.length>0)&&jt(),N=0,e}finally{U=n,g=r}}async function _r(){await Promise.resolve(),jt()}function cr(t){var i;var n=t.f,r=(n&m)!==0;if(r&&n&j){var e=At(t);return rt(t),e}if(a!==null){y!==null&&y.includes(t)&&Jt();var s=a.deps;_===null&&s!==null&&s[h]===t?h++:_===null?_=[t]:_.push(t),S!==null&&u!==null&&u.f&p&&!(u.f&E)&&S.includes(t)&&(w(u,R),W(u))}else if(r&&t.deps===null){var l=t,o=l.parent;o!==null&&!((i=o.deriveds)!=null&&i.includes(l))&&(o.deriveds??(o.deriveds=[])).push(l)}return r&&(l=t,H(l)&&St(l)),t.v}function vr(t){const n=a;try{return a=null,t()}finally{a=n}}const Tn=~(R|Y|p);function w(t,n){t.f=t.f&Tn|n}function pr(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},n||(f.l={s:null,u:null,r1:[],r2:nt(!1)})}function hr(t){const n=f;if(n!==null){const o=n.e;if(o!==null){var r=u,e=a;n.e=null;try{for(var s=0;s<o.length;s++){var l=o[s];G(l.effect),$(l.reaction),gt(l.fn)}}finally{G(r),$(e)}}f=n.p,n.m=!0}return{}}function dr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(ut in t)X(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&ut in r&&X(r)}}}function X(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{X(t[e],n)}catch{}const r=Ut(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Ht(r);for(let s in e){const l=e[s].get;if(l)try{l.call(t)}catch{}}}}}export{Pn as $,an as A,ir as B,ar as C,rn as D,ct as E,Wn as F,sr as G,nn as H,er as I,vr as J,Bt as K,cr as L,Dn as M,dr as N,ln as O,fr as P,kn as Q,Ut as R,Ht as S,ut as T,Rn as U,gn as V,nt as W,bn as X,qn as Y,Vn as Z,ot as _,hr as a,mn as a0,Nn as a1,Mn as a2,On as a3,Yn as a4,ht as a5,E as a6,K as a7,G as a8,Ln as a9,jn as aa,Hn as ab,nr as ac,Fn as ad,C as ae,xn as af,gt as ag,un as ah,jt as ai,Sn as aj,_r as ak,Cn as al,$ as am,a as an,$t as ao,Un as ap,Bn as aq,rr as ar,sn as as,Zn as at,Gt as au,O as b,Jn as c,yt as d,$n as e,Qn as f,J as g,F as h,zn as i,Gn as j,d as k,en as l,Et as m,In as n,tr as o,pr as p,An as q,Kn as r,Xn as s,or as t,lr as u,z as v,ur as w,x,u as y,f as z};
