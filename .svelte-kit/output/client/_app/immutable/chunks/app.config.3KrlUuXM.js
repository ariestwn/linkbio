import{P as A,x as T,Q as I,R as w,S as B}from"./runtime.Dqn1VQC2.js";import{f as C,g as N,j as D,n as M,k as P}from"./disclose-version.MCAPzfoh.js";function R(s,i){if(i){const t=document.body;s.autofocus=!0,A(()=>{document.activeElement===t&&s.focus()})}}function S(s,i,t,u){var n=s.__attributes??(s.__attributes={});T&&(n[i]=s.getAttribute(i),i==="src"||i==="srcset"||i==="href"&&s.nodeName==="LINK")||n[i]!==(n[i]=t)&&(i==="style"&&"__styles"in s&&(s.__styles={}),i==="loading"&&(s[I]=t),t==null?s.removeAttribute(i):typeof t!="string"&&$(s).includes(i)?s[i]=t:s.setAttribute(i,t))}function G(s,i,t,u,n=!1,l=!1,j=!1){var a=i||{},L=s.tagName==="OPTION";for(var e in i)e in t||(t[e]=null);var O=$(s),b=s.__attributes??(s.__attributes={}),p=[];for(const r in t){let o=t[r];if(L&&r==="value"&&o==null){s.value=s.__value="",a[r]=o;continue}var d=a[r];if(o!==d){a[r]=o;var y=r[0]+r[1];if(y!=="$$"){if(y==="on"){const _={},v="$$"+r;let f=r.slice(2);var g=P(f);if(C(f)&&(f=f.slice(0,-7),_.capture=!0),!g&&d){if(o!=null)continue;s.removeEventListener(f,a[v],_),a[v]=null}if(o!=null)if(g)s[`__${f}`]=o,D([f]);else{let h=function(E){a[r].call(this,E)};i?a[v]=N(f,s,h,_):p.push([r,o,()=>a[v]=N(f,s,h,_)])}}else if(r==="style"&&o!=null)s.style.cssText=o+"";else if(r==="autofocus")R(s,!!o);else if(r==="__value"||r==="value"&&o!=null)s.value=s[r]=s.__value=o;else{var c=r;n||(c=M(c)),o==null&&!l?(b[r]=null,s.removeAttribute(r)):O.includes(c)&&(l||typeof o!="string")?s[c]=o:typeof o!="function"&&(T&&(c==="src"||c==="href"||c==="srcset")||S(s,c,o))}r==="style"&&"__styles"in s&&(s.__styles={})}}}return i||A(()=>{if(s.isConnected)for(const[r,o,_]of p)a[r]===o&&_()}),a}var k=new Map;function $(s){var i=k.get(s.nodeName);if(i)return i;k.set(s.nodeName,i=[]);for(var t,u=w(s),n=Element.prototype;n!==u;){t=B(u);for(var l in t)t[l].set&&i.push(l);u=w(u)}return i}const H="https://link.ariestwn.com",K="@nwtseira",Q="@nwtseira link bio",U="#000000",Y="nwtseira";export{K as a,Q as b,H as c,G as d,U as p,S as s,Y as t};
