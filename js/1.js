var setVh = function() {
    var svh = document.documentElement.clientHeight * .01;
    document.documentElement.style.setProperty("--1svh", svh + "px");
  
    var dvh = window.innerHeight * .01;
    document.documentElement.style.setProperty("--1dvh", dvh + "px");
  
    if (document.body) {
      var fixed = document.createElement("div");
      fixed.style.width = "1px";
      fixed.style.height = "100vh";
      fixed.style.position = "fixed";
      fixed.style.left = "0";
      fixed.style.top = "0";
      fixed.style.bottom = "0";
      fixed.style.visibility = "hidden";
      document.body.appendChild(fixed);
  
      var fixedHeight = fixed.clientHeight;
      fixed.remove();
  
      var lvh = fixedHeight * .01;
      document.documentElement.style.setProperty("--1lvh", lvh + "px");
    }
  };
  
  var initialize = function() {
    if (typeof window === "undefined") {
      return;
    }
  
    setVh();
    document.addEventListener("DOMContentLoaded", function() {
      setVh();
    });
  
    window.addEventListener("resize", function() {
      setVh();
    });
  };
  
  initialize();

  import {
    _ as e,
    o as a,
    a as n,
    g as o,
    n as s,
    q as r
  } from "./entry.520837d9.js";
  
  const c = "components-layout-text-with-bar--root--PG-da",
    l = "components-layout-text-with-bar--bar--5T6ZS",
    _ = "components-layout-text-with-bar--text--vV8HT";
  
  const p = {
    root: c,
    bar: l,
    text: _
  };
  
  const u = {};
  
  function m(t, y) {
    return a(), n("span", { class: s(t.$style.root) }, [
      o("span", { class: s(t.$style.bar) }, null, 2),
      o("span", { class: s(t.$style.text) }, [r(t.$slots, "default")], 2)
    ], 2);
  }
  
  const d = { $style: p };
  
  const i = e(u, [
    ["render", m],
    ["__cssModules", d]
  ]);
  
  export { i as _ };  

  import { _ as L } from "./component.8af8ca1f.js";
import { g as x, e as B } from "./index.c6b826ff.js";
import {
  _ as $, k as p, z as C, c as w, o as c, a as d, g as f, b as k,
  j as g, s as v, t as h, u as o, n as l, S, X, F as q, r as G, d as M, q as N
} from "./entry.520837d9.js";
import { o as O, b as P, c as T, w as z } from "./index.69030827.js";

const D = "components-navigation-language-switcher--root--I0Tzf",
  E = "components-navigation-language-switcher--item--qGuLX",
  V = "components-navigation-language-switcher--button--RLAVZ reset-button button components-navigation-language-switcher--item--qGuLX",
  F = "components-navigation-language-switcher--list--ydXwi reset-list",
  I = "components-navigation-language-switcher--link--HKOPt reset-link components-navigation-language-switcher--item--qGuLX";

const W = { root: D, item: E, button: V, list: F, link: I },
  j = ["data-expanded"];

const A = {
  __name: "component",
  props: { sticky: { type: Boolean, default: !1 } },
  setup(m) {
    const r = p(null),
      { locale: a, locales: u } = C(),
      _ = w(() => u.value.filter(t => t.code !== a.value)),
      i = x(),
      e = p(!1);

    O(r, () => {
      e.value = !1;
    }, { ignore: ["button", "a"] });

    return (t, n) => {
      const y = L, b = B;
      return c(), d("div", {
        class: l(t.$style.root),
        "data-expanded": o(e) ? "" : null,
        ref_key: "root",
        ref: r
      }, [
        f("button", {
          onClick: n[0] || (n[0] = s => e.value = !o(e)),
          class: l(t.$style.button)
        }, [
          k(y, null, { default: g(() => [v(h(o(a)), 1)]), _: 1 })
        ], 2),
        S(f("ul", { class: l(t.$style.list) }, [
          (c(!0), d(q, null, G(o(_), s => (
            c(), d("li", { key: s.code }, [
              (c(), M(b, {
                key: s.code,
                to: o(i)(s.code),
                class: l(t.$style.link),
                "data-current": o(a) === s.code ? "" : null,
                onClick: n[1] || (n[1] = Q => e.value = !1)
              }, {
                default: g(() => [k(y, null, { default: g(() => [v(h(s.code), 1)]), _: 2 }, 1024)]),
                _: 2
              }, 1032, ["to", "class", "data-current"]))
            ]))
          ), 128))], 2), [[X, o(e) && m.sticky]])
        ], 10, j)
      ]);
    };
  }
};

const H = { $style: W },
  nt = $(A, [["__cssModules", H]]);

const K = "components-layout-sticky-header--root--rGT7d",
  R = { root: K },
  Y = ["data-sticky"];

const Z = {
  __name: "component",
  props: { menuOpen: { type: Boolean, default: !1 } },
  setup(m) {
    const r = m,
      a = P(),
      { y: u } = T(a),
      _ = p(0),
      i = p(null);

    z(u, (t, n) => {
      _.value = t;
      i.value = t > n ? "down" : "up";
    }, { debounce: 100, maxWait: 500 });

    const e = w(() => i.value === "up" || u.value === 0 || r.menuOpen);

    return (t, n) => {
      return c(), d("header", {
        class: l(t.$style.root),
        "data-sticky": o(e) ? "" : null
      }, [
        N(t.$slots, "default")
      ], 10, Y);
    };
  }
};

const J = { $style: R },
  st = $(Z, [["__cssModules", J]]);

export { nt as _, st as a };

import{A as _,$ as K,a0 as Z,u as ee,a1 as P,l as F,a2 as te,k as h,a3 as ne,a4 as oe,c as D,O as X,a5 as re,C as se}from"./entry.520837d9.js";

function ie(e,t){let o,n,r;const i=h(!0),u=()=>{i.value=!0,r()};_(e,u,{flush:"sync"});const l=typeof t=="function"?t:t.get,f=typeof t=="function"?void 0:t.set,c=ne((d,p)=>(n=d,r=p,{get(){return i.value&&(o=l(),i.value=!1),n(),o},set(s){f==null||f(s)}}));return Object.isExtensible(c)&&(c.trigger=u),c}

function B(e){return K()?(Z(e),!0):!1}
function w(e){return typeof e=="function"?e():ee(e)}

const Q=typeof window<"u"&&typeof document<"u",le=Object.prototype.toString,ue=e=>le.call(e)==="[object Object]",S=()=>{},ce=ae();

function ae(){var e;return Q&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent)}

function C(e,t){function o(...n){return new Promise((r,i)=>{Promise.resolve(e(()=>t.apply(this,n),{fn:t,thisArg:this,args:n})).then(r).catch(i)})}return o}

const fe=e=>e();

function q(e,t={}){let o,n,r=S;const i=l=>{clearTimeout(l),r(),r=S};return l=>{const f=w(e),c=w(t.maxWait);return o&&i(o),f<=0||c!==void 0&&c<=0?(n&&(i(n),n=null),Promise.resolve(l())):new Promise((d,p)=>{r=t.rejectOnCancel?p:d,c&&!n&&(n=setTimeout(()=>{o&&i(o),n=null,d(l())},c)),o=setTimeout(()=>{n&&i(n),n=null,d(l())},f)})}}

function de(e,t=!0,o=!0,n=!1){let r=0,i,u=!0,l=S,f;const c=()=>{i&&(clearTimeout(i),i=void 0,l(),l=S)};return p=>{const s=w(e),a=Date.now()-r,v=()=>f=p();return c(),s<=0?(r=Date.now(),v()):(a>s&&(o||!u)?(r=Date.now(),v()):t&&(f=new Promise((T,b)=>{l=n?b:T,i=setTimeout(()=>{r=Date.now(),u=!0,T(v()),c()},Math.max(0,s-a))})),!o&&!i&&(i=setTimeout(()=>u=!0,s)),u=!1,f)}}

function U(e,t=200,o={}){return C(q(t,o),e)}

function Ee(e,t=200,o={}){const n=h(e.value),r=U(()=>{n.value=e.value},t,o);return _(e,()=>r()),n}

function me(e,t=200,o=!1,n=!0,r=!1){return C(de(t,o,n,r),e)}

function pe(e,t,o={}){const{eventFilter:n=fe,...r}=o;return _(e,C(n,t),r)}

function G(e,t=!0){P()?F(e):t?e():te(e)}

function ye(e,t,o={}){const{debounce:n=0,maxWait:r=void 0,...i}=o;return pe(e,t,{...i,eventFilter:q(n,{maxWait:r})})}

function A(e){var t;const o=w(e);return(t=o==null?void 0:o.$el)!=null?t:o}

const x=Q?window:void 0;

function L(...e){let t,o,n,r;if(typeof e[0]=="string"||Array.isArray(e[0])?([o,n,r]=e,t=x):[t,o,n,r]=e,!t)return S;Array.isArray(o)||(o=[o]),Array.isArray(n)||(n=[n]);const i=[],u=()=>{i.forEach(d=>d()),i.length=0},l=(d,p,s,a)=>(d.addEventListener(p,s,a),()=>d.removeEventListener(p,s,a)),f=_(()=>[A(t),w(r)],([d,p])=>{if(u(),!d)return;const s=ue(p)?{...p}:p;i.push(...o.flatMap(a=>n.map(v=>l(d,a,v,s))))},{immediate:!0,flush:"post"}),c=()=>{f(),u()};return B(c),c}

let $=!1;

function Se(e,t,o={}){const{window:n=x,ignore:r=[],capture:i=!0,detectIframe:u=!1}=o;if(!n)return;ce&&!$&&($=!0,Array.from(n.document.body.children).forEach(s=>s.addEventListener("click",S)),n.document.documentElement.addEventListener("click",S));let l=!0;const f=s=>r.some(a=>{if(typeof a=="string")return Array.from(n.document.querySelectorAll(a)).some(v=>v===s.target||s.composedPath().includes(v));{const v=A(a);return v&&(s.target===v||s.composedPath().includes(v))}}),d=[L(n,"click",s=>{const a=A(e);if(!(!a||a===s.target||s.composedPath().includes(a))){if(s.detail===0&&(l=!f(s)),!l){l=!0;return}t(s)}},{passive:!0,capture:i}),L(n,"pointerdown",s=>{const a=A(e);a&&(l=!s.composedPath().includes(a)&&!f(s))},{passive:!0}),u&&L(n,"blur",s=>{setTimeout(()=>{var a;const v=A(e);((a=n.document.activeElement)==null?void 0:a.tagName)==="IFRAME"&&!(v!=null&&v.contains(n.document.activeElement))&&t(s)},0)})].filter(Boolean);return()=>d.forEach(s=>s())}

function ve(){const e=h(!1);return P()&&F(()=>{e.value=!0}),e}

function he(e){const t=ve();return D(()=>(t.value,!!e()))}

function ge(e,t={}){const{window:o=x}=t,n=he(()=>o&&"matchMedia"in o&&typeof o.matchMedia=="function");let r;const i=h(!1),u=c=>{i.value=c.matches},l=()=>{r&&("removeEventListener"in r?r.removeEventListener("change",u):r.removeListener(u))},f=oe(()=>{n.value&&(l(),r=o.matchMedia(w(e)),"addEventListener"in r?r.addEventListener("change",u):r.addListener(u),i.value=r.matches)});return B(()=>{f(),l(),r=void 0}),i}

function we(){const e=P(),t=ie(()=>null,()=>e.proxy.$el);return se(t.trigger),F(t.trigger),t}

const z=1;

function Te(e,t={}){const{throttle:o=0,idle:n=200,onStop:r=S,onScroll:i=S,offset:u={left:0,right:0,top:0,bottom:0},eventListenerOptions:l={capture:!1,passive:!0},behavior:f="auto",window:c=x}=t,d=h(0),p=h(0),s=D({get(){return d.value},set(m){v(m,void 0)}}),a=D({get(){return p.value},set(m){v(void 0,m)}});function v(m,I){var g,M,W;if(!c)return;const y=w(e);y&&((W=y instanceof Document?c.document.body:y)==null||W.scrollTo({top:(g=w(I))!=null?g:a.value,left:(M=w(m))!=null?M:s.value,behavior:w(f)}))}const T=h(!1),b=X({left:!0,right:!1,top:!0,bottom:!1}),E=X({left:!1,right:!1,top:!1,bottom:!1}),j=m=>{T.value&&(T.value=!1,E.left=!1,E.right=!1,E.top=!1,E.bottom=!1,r(m))},J=U(j,o+n),H=m=>{var I;if(!c)return;const g=m.document?m.document.documentElement:(I=m.documentElement)!=null?I:m,{display:M,flexDirection:W}=getComputedStyle(g),y=g.scrollLeft;E.left=y<d.value,E.right=y>d.value;const k=Math.abs(y)<=0+(u.left||0),N=Math.abs(y)+g.clientWidth>=g.scrollWidth-(u.right||0)-z;M==="flex"&&W==="row-reverse"?(b.left=N,b.right=k):(b.left=k,b.right=N),d.value=y;let O=g.scrollTop;m===c.document&&!O&&(O=c.document.body.scrollTop),E.top=O<p.value,E.bottom=O>p.value;const V=Math.abs(O)<=0+(u.top||0),Y=Math.abs(O)+g.clientHeight>=g.scrollHeight-(u.bottom||0)-z;M==="flex"&&W==="column-reverse"?(b.top=Y,b.bottom=V):(b.top=V,b.bottom=Y),p.value=O},R=m=>{var I;if(!c)return;const g=(I=m.target.documentElement)!=null?I:m.target;H(g),T.value=!0,J(m),i(m)};return L(e,"scroll",o?me(R,o,!0,!1):R,l),L(e,"scrollend",j,l),{x:s,y:a,isScrolling:T,arrivedState:b,directions:E,measure(){const m=w(e);c&&m&&H(m)}}}

function Ie(e=we()){const t=re(),o=()=>{const n=A(e);n&&(t.value=n.parentElement)};return G(o),_(()=>w(e),o),t}

function Oe(e={}){const{window:t=x}=e;if(!t)return{x:h(0),y:h(0)};const o=h(t.scrollX),n=h(t.scrollY);return L(t,"scroll",()=>{o.value=t.scrollX,n.value=t.scrollY},{capture:!1,passive:!0}),{x:o,y:n}}

function Le(e={}){const{window:t=x,initialWidth:o=Number.POSITIVE_INFINITY,initialHeight:n=Number.POSITIVE_INFINITY,listenOrientation:r=!0,includeScrollbar:i=!0}=e,u=h(o),l=h(n),f=()=>{t&&(i?(u.value=t.innerWidth,l.value=t.innerHeight):(u.value=t.document.documentElement.clientWidth,l.value=t.document.documentElement.clientHeight))};if(f(),G(f),L("resize",f,{passive:!0}),r){const c=ge("(orientation: portrait)");_(c,()=>f())}return{width:u,height:l}}

export{Oe as a,Ie as b,Te as c,Se as o,Ee as r,Le as u,ye as w};

import { c as s } from "./camelCase.6554f06d.js";

const t = e => {
  var r;
  let a = e != null && e.includes(".") 
    ? (r = e == null ? void 0 : e.split(".")) == null ? void 0 : r.pop() 
    : e;

  switch (a = s(a), a) {
    case "aboutPage":
      return { name: "about", slug: !1 };
    case "homePage":
      return { name: "index", slug: !1 };
    case "pageEntry":
      return { name: "slug", slug: !0 };
    case "participantsPage":
    case "fellowsPage":
      return { name: "fellows", slug: !1 };
    case "participantEntry":
      return { name: "fellows-slug", slug: !0 };
    case "permanentWorksPage":
      return { name: "permanent-works", slug: !1 };
    case "permanentWorkEntry":
      return { name: "permanent-works-slug", slug: !0 };
    case "programsPage":
    case "programPage":
      return { name: "program", slug: !1 };
    case "programEntry":
      return { name: "program-slug", slug: !0 };
    case "publicationsPage":
      return { name: "publications", slug: !1 };
    case "publicationEntry":
      return { name: "publications-slug", slug: !0 };
    default:
      return { name: "index", slug: !1 };
  }
};

export { t as s };

import { t as s } from "./get-object.899f8c49.js";

function I(u, e, r) {
  var a = -1,
    f = u.length;
  e < 0 && (e = -e > f ? 0 : f + e), r = r > f ? f : r, r < 0 && (r += f), f = e > r ? 0 : r - e >>> 0, e >>>= 0;
  for (var n = Array(f); ++a < f;) n[a] = u[a + e];
  return n;
}

function T(u, e, r) {
  var a = u.length;
  return r = r === void 0 ? a : r, !e && r >= a ? u : I(u, e, r);
}

var W = "\\ud800-\\udfff", D = "\\u0300-\\u036f", H = "\\ufe20-\\ufe2f", N = "\\u20d0-\\u20ff", w = D + H + N, y = "\\ufe0e\\ufe0f", J = "\\u200d", V = RegExp("[" + J + W + w + y + "]");
function l(u) {
  return V.test(u);
}
function F(u) {
  return u.split("");
}

var g = "\\ud800-\\udfff", G = "\\u0300-\\u036f", P = "\\ufe20-\\ufe2f", Y = "\\u20d0-\\u20ff", q = G + P + Y, B = "\\ufe0e\\ufe0f", _ = "[" + g + "]", d = "[" + q + "]", x = "\\ud83c[\\udffb-\\udfff]", K = "(?:" + d + "|" + x + ")", R = "[^" + g + "]", p = "(?:\\ud83c[\\udde6-\\uddff]){2}", C = "[\\ud800-\\udbff][\\udc00-\\udfff]", Q = "\\u200d", $ = K + "?", m = "[" + B + "]?", X = "(?:" + Q + "(?:" + [R, p, C].join("|") + ")" + m + $ + ")*", u0 = m + $ + X, e0 = "(?:" + [R + d + "?", d, p, C, _].join("|") + ")", r0 = RegExp(x + "(?=" + x + ")|" + e0 + u0, "g");

function f0(u) {
  return u.match(r0) || [];
}

function a0(u) {
  return l(u) ? f0(u) : F(u);
}

function o0(u) {
  return function (e) {
    e = s(e);
    var r = l(e) ? a0(e) : void 0, a = r ? r[0] : e.charAt(0), f = r ? T(r, 1).join("") : e.slice(1);
    return a[u]() + f;
  };
}

var n0 = o0("toUpperCase");
const s0 = n0;

function d0(u) {
  return s0(s(u).toLowerCase());
}

function x0(u) {
  return function (e) {
    return u == null ? void 0 : u[e];
  };
}

var i0 = {
  Ã€: "A", Ã: "A", Ã‚: "A", Ãƒ: "A", Ã„: "A", Ã…: "A", Ã : "a", Ã¡: "a", Ã¢: "a", Ã£: "a", Ã¤: "a", Ã¥: "a", Ã‡: "C", Ã§: "c", Ã: "D", Ã°: "d", Ãˆ: "E", Ã‰: "E", ÃŠ: "E", Ã‹: "E", Ã¨: "e", Ã©: "e", Ãª: "e", Ã«: "e", ÃŒ: "I", Ã: "I", ÃŽ: "I", Ã: "I", Ã¬: "i", Ã­: "i", Ã®: "i", Ã¯: "i", Ã‘: "N", Ã±: "n", Ã’:"O", Ã“: "O", Ã”:"O", Ã•:"O", Ã–:"O", Ã˜:"O", Ã²:"o", Ã³:"o", Ã´:"o", Ãµ:"o", Ã¶:"o", Ã¸:"o", Ã™:"U", Ãš:"U", Ã›:"U", Ãœ:"U", Ã¹:"u", Ãº:"u", Ã»:"u", Ã¼:"u", Ã:"Y", Ã½:"y", Ã¿:"y", Ã†:"Ae", Ã¦:"ae", Ãž:"Th", Ã¾:"th", ÃŸ:"ss", Ä€:"A", Ä‚:"A", Ä„:"A", Ä:"a", Äƒ:"a", Ä…:"a", Ä†:"C", Äˆ:"C", ÄŠ:"C", ÄŒ:"C", Ä‡:"c", Ä‰:"c", Ä‹:"c", Ä:"c", ÄŽ:"D", Ä:"D", Ä:"d", Ä‘:"d", Ä’:"E", Ä”:"E", Ä–:"E", Ä˜:"E", Äš:"E", Ä“:"e", Ä•:"e", Ä—:"e", Ä™:"e", Ä›:"e", Äœ:"G", Äž:"G", Ä :"G", Ä¢:"G", Ä:"g", ÄŸ:"g", Ä¡:"g", Ä£:"g", Ä¤:"H", Ä¦:"H", Ä¥:"h", Ä§:"h", Ä¨:"I", Äª:"I", Ä¬:"I", Ä®:"I", Ä°:"I", Ä©:"i", Ä«:"i", Ä­:"i", Ä¯:"i", Ä±:"i", Ä´:"J", Äµ:"j", Ä¶:"K", Ä·:"k", Ä¸:"k", Ä¹:"L", Ä»:"L", Ä½:"L", Ä¿:"L", Å:"L", Äº:"l", Ä¼:"l", Ä¾:"l", Å€:"l", Å‚:"l", Åƒ:"N", Å…:"N", Å‡:"N", ÅŠ:"N", Å„:"n", Å†:"n", Åˆ:"n", Å‹:"n", ÅŒ:"O", ÅŽ:"O", Å:"O", Å:"o", Å:"o", Å‘:"o", Å”:"R", Å–:"R", Å˜:"R", Å•:"r", Å—:"r", Å™:"r", Åš:"S", Åœ:"S", Åž:"S", Å :"S", Å›:"s", Å:"s", ÅŸ:"s", Å¡:"s", Å¢:"T", Å¤:"T", Å¦:"T", Å£:"t", Å¥:"t", Å§:"t", Å¨:"U", Åª:"U", Å¬:"U", Å®:"U", Å°:"U", Å²:"U", Å©:"u", Å«:"u", Å­:"u", Å¯:"u", Å±:"u", Å³:"u", Å´:"W", Åµ:"w", Å¶:"Y", Å·:"y", Å¸:"Y", Å¹:"Z", Å»:"Z", Å½:"Z", Åº:"z", Å¼:"z", Å¾:"z", Ä²:"IJ", Ä³:"ij", Å’:"Oe", Å“:"oe", Å‰:"'n", Å¿:"s"
};

t0 = c0(i0);
const b0 = t0;

var l0 = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
  g0 = "\\u0300-\\u036f", 
  R0 = "\\ufe20-\\ufe2f", 
  p0 = "\\u20d0-\\u20ff", 
  C0 = g0 + R0 + p0, 
  $0 = "[" + C0 + "]", 
  m0 = RegExp($0, "g");

function A0(u) {
  return u = s(u), u && u.replace(l0, b0).replace(m0, "");
}

var v0 = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

function h0(u) {
  return u.match(v0) || [];
}

var O0 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

function U0(u) {
  return O0.test(u);
}

var A = "\\ud800-\\udfff", 
  S0 = "\\u0300-\\u036f", 
  L0 = "\\ufe20-\\ufe2f", 
  M0 = "\\u20d0-\\u20ff", 
  E0 = S0 + L0 + M0, 
  v = "\\u2700-\\u27bf", 
  h = "a-z\\xdf-\\xf6\\xf8-\\xff", 
  k0 = "\\xac\\xb1\\xd7\\xf7", 
  z0 = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", 
  Z0 = "\\u2000-\\u206f", 
  j0 = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", 
  O = "A-Z\\xc0-\\xd6\\xd8-\\xde", 
  I0 = "\\ufe0e\\ufe0f", 
  U = k0 + z0 + Z0 + j0, 
  S = "['â€™]", 
  c = "[" + U + "]", 
  T0 = "[" + E0 + "]", 
  L = "\\d+", 
  W0 = "[" + v + "]", 
  M = "[" + h + "]", 
  E = "[^" + A + U + L + v + h + O + "]", 
  D0 = "\\ud83c[\\udffb-\\udfff]", 
  H0 = "[" + j0 + "]";

var u1 = "\\udc80-\\udf9f\\ufd80-\\ufd9f";
const y0 = u1;
let n1 = ["\\\\\\d+"];

var g = typeof global == "object" && global && global.Object === Object && global;
const y = g;

var u = typeof self == "object" && self && self.Object === Object && self;
var j = y || u || Function("return this")();
const S = j;

var d = S.Symbol;
const e = d;

var f = Object.prototype,
    p = f.hasOwnProperty,
    O = f.toString,
    a = e ? e.toStringTag : void 0;

function T(t) {
    var r = p.call(t, a), n = t[a];
    try {
        t[a] = void 0;
        var o = true;
    } catch {}
    var i = O.call(t);
    return o && (r ? t[a] = n : delete t[a]), i;
}

var m = Object.prototype,
    $ = m.toString;

function h(t) {
    return $.call(t);
}

var w = "[object Null]",
    A = "[object Undefined]",
    s = e ? e.toStringTag : void 0;

function P(t) {
    return t == null ? t === void 0 ? A : w : s && s in Object(t) ? T(t) : h(t);
}

function G(t) {
    return t != null && typeof t == "object";
}

var v = "[object Symbol]";

function x(t) {
    return typeof t == "symbol" || G(t) && P(t) == v;
}

function I(t, r) {
    for (var n = -1, o = t == null ? 0 : t.length, i = Array(o); ++n < o;)
        i[n] = r(t[n], n, t);
    return i;
}

var N = Array.isArray;
const B = N;

var F = 1 / 0,
    c = e ? e.prototype : void 0,
    b = c ? c.toString : void 0;

function l(t) {
    if (typeof t == "string") return t;
    if (B(t)) return I(t, l) + "";
    if (x(t)) return b ? b.call(t) : "";
    var r = t + "";
    return r == "0" && 1 / t == -F ? "-0" : r;
}

function R(t) {
    return t == null ? "" : l(t);
}

const k = (t, r, n) => ({
    name: t || "index",
    ...(r ? { params: { slug: r } } : {}),
    ...(n ? { query: n } : {})
});

export { e as S, x as a, k as b, I as c, P as d, G as e, y as f, B as i, S as r, R as t };


import { o as c, a as s, g as e } from "./entry.520837d9.js";

const t = {
  xmlns: "http://www.w3.org/2000/svg",
  "xml:space": "preserve",
  style: { "enable-background": "new 0 0 1000 421.2" },
  viewBox: "0 0 1000 421.2"
};

o = e("path", {
  d: "M10.3 219.8c.9-.2 1.8-.3 2.7-.3 2 0 3.9.5 5.7 1.4 1.8.9 3.3 2.1 4.6 3.7 1.3 1.5 2.1 3.3 2.4 5.3l24.9 118.7 22.5-118.5c.4-2 1.2-3.8 2.6-5.6 1.4-1.7 2.9-3 4.7-3.8 1.8-.8 3.6-1.2 5.4-1.2h1.6c3.1 0 5.8 1.1 8.3 3.2 2.4 2.2 3.9 4.6 4.5 7.3l22.6 118 24.9-118.2c.4-2 1.2-3.8 2.4-5.3 1.3-1.5 2.8-2.8 4.6-3.7s3.7-1.4 5.7-1.4c.9 0 1.8.1 2.7.3 3.1.7 5.6 2.3 7.4 4.8 1.9 2.4 2.9 5.1 2.9 8 0 .9-.1 1.8-.3 2.7l-36.6 173.5c-.5 2.9-2 5.3-4.5 7.3-2.4 2-5.2 3-8.3 3h-3.2c-2.9 0-5.6-1-8.1-3s-4.1-4.5-4.6-7.6L86.7 297.9 65.6 408.5c-.5 2.7-2 5.1-4.5 7.3-2.4 2.2-5.2 3.2-8.3 3.2h-3.5c-3.1 0-5.8-1-8.3-3-2.4-2-3.9-4.4-4.5-7.3L.3 235.3c0-.5 0-1-.1-1.4-.2-.3-.2-.8-.2-1.3 0-3.1 1-5.8 3-8.1 2-2.4 4.4-3.9 7.3-4.7M288 301.3c8.9-14.3 13.3-32.4 13.3-54.5s-4.4-40.2-13.3-54.5-18.1-21.4-27.6-21.4-18.8 7.1-27.5 21.4c-8.8 14.3-13.1 32.4-13.1 54.5s4.4 40.2 13.1 54.5c8.8 14.3 17.9 21.4 27.5 21.4 9.6.1 18.8-7.1 27.6-21.4m31.6-103.4c5.1 15.3 7.7 31.6 7.7 48.9s-2.6 33.7-7.7 48.9c-5.1 15.3-12.9 27.9-23.3 38-10.4 10-22.4 15-35.9 15s-25.5-5-35.9-15-18.1-22.7-23.2-38c-5.1-15.3-7.6-31.6-7.6-48.9s2.5-33.7 7.6-48.9c5.1-15.3 12.8-27.9 23.2-37.9s22.4-15.1 35.9-15.1c13.6 0 25.5 5 35.9 15.1 10.4 10 18.2 22.7 23.3 37.9M438.5 226.7c8.9-14.3 13.3-32.4 13.3-54.5s-4.4-40.2-13.3-54.5-18.1-21.4-27.6-21.4-18.8 7.2-27.5 21.4c-8.8 14.3-13.1 32.4-13.1 54.5s4.4 40.2 13.1 54.5c8.8 14.3 17.9 21.4 27.5 21.4s18.8-7.1 27.6-21.4m31.6-103.4c5.1 15.3 7.7 31.6 7.7 48.9s-2.6 33.7-7.7 48.9c-5.1 15.3-12.9 27.9-23.3 38-10.4 10-22.4 15-35.9 15s-25.5-5-35.9-15-18.1-22.7-23.2-37.9-7.6-31.6-7.6-48.9 2.5-33.7 7.6-48.9c5.1-15.3 12.8-27.9 23.2-37.9 10.4-10 22.4-15.1 35.9-15.1s25.5 5 35.9 15.1c10.4 9.9 18.2 22.5 23.3 37.8M523.6 195.7c-2.5 2.5-5.6 3.8-9.2 3.8s-6.7-1.3-9.2-3.8-3.8-5.6-3.8-9.2V13c0-3.6 1.4-6.7 4.2-9.2 2.8-2.5 5.7-3.8 8.8-3.8h8.7c1.6 0 3.3.4 5 1.1s3.1 1.7 4.2 2.8 2 2.4 2.7 3.7l60.2 133.9V13c0-3.6 1.3-6.7 3.8-9.2s5.6-3.8 9.2-3.8 6.7 1.3 9.2 3.8 3.8 5.6 3.8 9.2v173.5c0 3.1-1.3 6-3.8 8.8s-5.6 4.2-9.2 4.2h-7c-1.5 0-2.9-.3-4.5-.9s-3-1.5-4.3-2.7-2.4-2.5-3.1-3.9L527.4 54.5v132c0 3.6-1.3 6.7-3.8 9.2M599.9 223.4c2.5-2.5 5.6-3.8 9.2-3.8s6.7 1.3 9.2 3.8 3.8 5.6 3.8 9.2v173.5c0 3.6-1.3 6.7-3.8 9.2s-5.6 3.8-9.2 3.8-6.7-1.3-9.2-3.8-3.8-5.6-3.8-


  