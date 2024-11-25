(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4955],{42255:(e,t,n)=>{"use strict";function r(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(e?.(r),!1===n||!r.defaultPrevented)return t?.(r)}}n.d(t,{m:()=>r})},93669:(e,t,n)=>{"use strict";n.d(t,{s:()=>o,t:()=>i});var r=n(6631);function i(...e){return t=>e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}function o(...e){return r.useCallback(i(...e),e)}},43339:(e,t,n)=>{"use strict";n.d(t,{A:()=>s,q:()=>o});var r=n(6631),i=n(89071);function o(e,t){let n=r.createContext(t);function o(e){let{children:t,...o}=e,s=r.useMemo(()=>o,Object.values(o));return(0,i.jsx)(n.Provider,{value:s,children:t})}return o.displayName=e+"Provider",[o,function(i){let o=r.useContext(n);if(o)return o;if(void 0!==t)return t;throw Error(`\`${i}\` must be used within \`${e}\``)}]}function s(e,t=[]){let n=[],o=()=>{let t=n.map(e=>r.createContext(e));return function(n){let i=n?.[e]||t;return r.useMemo(()=>({[`__scope${e}`]:{...n,[e]:i}}),[n,i])}};return o.scopeName=e,[function(t,o){let s=r.createContext(o),u=n.length;function a(t){let{scope:n,children:o,...a}=t,c=n?.[e][u]||s,l=r.useMemo(()=>a,Object.values(a));return(0,i.jsx)(c.Provider,{value:l,children:o})}return n=[...n,o],a.displayName=t+"Provider",[a,function(n,i){let a=i?.[e][u]||s,c=r.useContext(a);if(c)return c;if(void 0!==o)return o;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let i=n.reduce((t,{useScope:n,scopeName:r})=>{let i=n(e)[`__scope${r}`];return{...t,...i}},{});return r.useMemo(()=>({[`__scope${t.scopeName}`]:i}),[i])}};return n.scopeName=t.scopeName,n}(o,...t)]}},82073:(e,t,n)=>{"use strict";n.d(t,{B:()=>a});var r,i=n(6631),o=n(76893),s=(r||(r=n.t(i,2)))["useId".toString()]||(()=>void 0),u=0;function a(e){let[t,n]=i.useState(s());return(0,o.N)(()=>{e||n(e=>e??String(u++))},[e]),e||(t?`radix-${t}`:"")}},95314:(e,t,n)=>{"use strict";n.d(t,{C:()=>u});var r=n(6631),i=n(25688),o=n(93669),s=n(76893),u=e=>{let{present:t,children:n}=e,u=function(e){var t,n;let[o,u]=r.useState(),c=r.useRef({}),l=r.useRef(e),d=r.useRef("none"),[f,h]=(t=e?"mounted":"unmounted",n={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},r.useReducer((e,t)=>n[e][t]??e,t));return r.useEffect(()=>{let e=a(c.current);d.current="mounted"===f?e:"none"},[f]),(0,s.N)(()=>{let t=c.current,n=l.current;if(n!==e){let r=d.current,i=a(t);e?h("MOUNT"):"none"===i||t?.display==="none"?h("UNMOUNT"):n&&r!==i?h("ANIMATION_OUT"):h("UNMOUNT"),l.current=e}},[e,h]),(0,s.N)(()=>{if(o){let e=e=>{let t=a(c.current).includes(e.animationName);e.target===o&&t&&i.flushSync(()=>h("ANIMATION_END"))},t=e=>{e.target===o&&(d.current=a(c.current))};return o.addEventListener("animationstart",t),o.addEventListener("animationcancel",e),o.addEventListener("animationend",e),()=>{o.removeEventListener("animationstart",t),o.removeEventListener("animationcancel",e),o.removeEventListener("animationend",e)}}h("ANIMATION_END")},[o,h]),{isPresent:["mounted","unmountSuspended"].includes(f),ref:r.useCallback(e=>{e&&(c.current=getComputedStyle(e)),u(e)},[])}}(t),c="function"==typeof n?n({present:u.isPresent}):r.Children.only(n),l=(0,o.s)(u.ref,function(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(n=(t=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning)?e.props.ref:e.props.ref||e.ref}(c));return"function"==typeof n||u.isPresent?r.cloneElement(c,{ref:l}):null};function a(e){return e?.animationName||"none"}u.displayName="Presence"},32611:(e,t,n)=>{"use strict";n.d(t,{hO:()=>a,sG:()=>u});var r=n(6631),i=n(25688),o=n(33381),s=n(89071),u=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let n=r.forwardRef((e,n)=>{let{asChild:r,...i}=e,u=r?o.DX:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,s.jsx)(u,{...i,ref:n})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function a(e,t){e&&i.flushSync(()=>e.dispatchEvent(t))}},33381:(e,t,n)=>{"use strict";n.d(t,{DX:()=>s});var r=n(6631),i=n(93669),o=n(89071),s=r.forwardRef((e,t)=>{let{children:n,...i}=e,s=r.Children.toArray(n),a=s.find(c);if(a){let e=a.props.children,n=s.map(t=>t!==a?t:r.Children.count(e)>1?r.Children.only(null):r.isValidElement(e)?e.props.children:null);return(0,o.jsx)(u,{...i,ref:t,children:r.isValidElement(e)?r.cloneElement(e,void 0,n):null})}return(0,o.jsx)(u,{...i,ref:t,children:n})});s.displayName="Slot";var u=r.forwardRef((e,t)=>{let{children:n,...o}=e;if(r.isValidElement(n)){let e=function(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(n=(t=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning)?e.props.ref:e.props.ref||e.ref}(n);return r.cloneElement(n,{...function(e,t){let n={...t};for(let r in t){let i=e[r],o=t[r];/^on[A-Z]/.test(r)?i&&o?n[r]=(...e)=>{o(...e),i(...e)}:i&&(n[r]=i):"style"===r?n[r]={...i,...o}:"className"===r&&(n[r]=[i,o].filter(Boolean).join(" "))}return{...e,...n}}(o,n.props),ref:t?(0,i.t)(t,e):e})}return r.Children.count(n)>1?r.Children.only(null):null});u.displayName="SlotClone";var a=({children:e})=>(0,o.jsx)(o.Fragment,{children:e});function c(e){return r.isValidElement(e)&&e.type===a}},60929:(e,t,n)=>{"use strict";n.d(t,{c:()=>i});var r=n(6631);function i(e){let t=r.useRef(e);return r.useEffect(()=>{t.current=e}),r.useMemo(()=>(...e)=>t.current?.(...e),[])}},97581:(e,t,n)=>{"use strict";n.d(t,{i:()=>o});var r=n(6631),i=n(60929);function o({prop:e,defaultProp:t,onChange:n=()=>{}}){let[o,s]=function({defaultProp:e,onChange:t}){let n=r.useState(e),[o]=n,s=r.useRef(o),u=(0,i.c)(t);return r.useEffect(()=>{s.current!==o&&(u(o),s.current=o)},[o,s,u]),n}({defaultProp:t,onChange:n}),u=void 0!==e,a=u?e:o,c=(0,i.c)(n);return[a,r.useCallback(t=>{if(u){let n="function"==typeof t?t(e):t;n!==e&&c(n)}else s(t)},[u,e,s,c])]}},76893:(e,t,n)=>{"use strict";n.d(t,{N:()=>i});var r=n(6631),i=globalThis?.document?r.useLayoutEffect:()=>{}},55481:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(6631),i="undefined"!=typeof window&&window.document&&window.document.createElement?r.useLayoutEffect:r.useEffect,o=n(25688),s=({children:e,type:t="reach-portal",containerRef:n})=>{let s=r.useRef(null),u=r.useRef(null),a=function(){let[,e]=(0,r.useState)(Object.create(null));return(0,r.useCallback)(()=>{e(Object.create(null))},[])}();return r.useEffect(()=>{null!=n&&("object"==typeof n&&"current"in n?null==n.current&&console.warn("@reach/portal: A ref was passed to the `containerRef` prop of a `Portal`, but no DOM node was attached to it. Be sure to pass the ref to a DOM component.\n\nIf you are forwarding the ref from another component, be sure to use the React.forwardRef API. See https://reactjs.org/docs/forwarding-refs.html."):console.warn("@reach/portal: Invalid value passed to the `containerRef` of a `Portal`. The portal will be appended to the document body, but if you want to attach it to another DOM node you must pass a valid React ref object to `containerRef`."))},[n]),i(()=>{if(!s.current)return;let e=s.current.ownerDocument,r=n?.current||e.body;return u.current=e?.createElement(t),r.appendChild(u.current),a(),()=>{u.current&&r&&r.removeChild(u.current)}},[t,a,n]),u.current?(0,o.createPortal)(e,u.current):r.createElement("span",{ref:s})},u=({unstable_skipInitialRender:e,...t})=>{let[n,i]=r.useState(!1);return(r.useEffect(()=>{e&&i(!0)},[e]),e&&!n)?null:r.createElement(s,{...t})};u.displayName="Portal"},70411:e=>{"use strict";let t=/[|\\{}()[\]^$+*?.-]/g;e.exports=e=>{if("string"!=typeof e)throw TypeError("Expected a string");return e.replace(t,"\\$&")}},91612:(e,t,n)=>{"use strict";function r(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)e[r]=n[r]}return e}n.d(t,{A:()=>i});let i=function e(t,n){function i(e,i,o){if("undefined"!=typeof document){"number"==typeof(o=r({},n,o)).expires&&(o.expires=new Date(Date.now()+864e5*o.expires)),o.expires&&(o.expires=o.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var s="";for(var u in o)o[u]&&(s+="; "+u,!0!==o[u]&&(s+="="+o[u].split(";")[0]));return document.cookie=e+"="+t.write(i,e)+s}}return Object.create({set:i,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var n=document.cookie?document.cookie.split("; "):[],r={},i=0;i<n.length;i++){var o=n[i].split("="),s=o.slice(1).join("=");try{var u=decodeURIComponent(o[0]);if(r[u]=t.read(s,u),e===u)break}catch(e){}}return e?r[e]:r}},remove:function(e,t){i(e,"",r({},t,{expires:-1}))},withAttributes:function(t){return e(this.converter,r({},this.attributes,t))},withConverter:function(t){return e(r({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(n)},converter:{value:Object.freeze(t)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"})},54194:(e,t,n)=>{var r=1/0,i=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,o=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]","g"),s="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,u="object"==typeof self&&self&&self.Object===Object&&self,a=s||u||Function("return this")(),c=function(e){return function(t){return null==e?void 0:e[t]}}({À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"ss"}),l=Object.prototype.toString,d=a.Symbol,f=d?d.prototype:void 0,h=f?f.toString:void 0;e.exports=function(e){var t;return(e=null==(t=e)?"":function(e){if("string"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==l.call(t))return h?h.call(e):"";var t,n=e+"";return"0"==n&&1/e==-r?"-0":n}(t))&&e.replace(i,c).replace(o,"")}},65464:(e,t,n)=>{var r=n(70130),i=/^\s+/;e.exports=function(e){return e?e.slice(0,r(e)+1).replace(i,""):e}},70130:e=>{var t=/\s/;e.exports=function(e){for(var n=e.length;n--&&t.test(e.charAt(n)););return n}},44995:(e,t,n)=>{var r=n(27875),i=n(16152),o=n(72132),s=Math.max,u=Math.min;e.exports=function(e,t,n){var a,c,l,d,f,h,p=0,m=!1,y=!1,v=!0;if("function"!=typeof e)throw TypeError("Expected a function");function g(t){var n=a,r=c;return a=c=void 0,p=t,d=e.apply(r,n)}function S(e){var n=e-h,r=e-p;return void 0===h||n>=t||n<0||y&&r>=l}function _(){var e,n,r,o=i();if(S(o))return b(o);f=setTimeout(_,(e=o-h,n=o-p,r=t-e,y?u(r,l-n):r))}function b(e){return(f=void 0,v&&a)?g(e):(a=c=void 0,d)}function E(){var e,n=i(),r=S(n);if(a=arguments,c=this,h=n,r){if(void 0===f)return p=e=h,f=setTimeout(_,t),m?g(e):d;if(y)return clearTimeout(f),f=setTimeout(_,t),g(h)}return void 0===f&&(f=setTimeout(_,t)),d}return t=o(t)||0,r(n)&&(m=!!n.leading,l=(y="maxWait"in n)?s(o(n.maxWait)||0,t):l,v="trailing"in n?!!n.trailing:v),E.cancel=function(){void 0!==f&&clearTimeout(f),p=0,a=h=c=f=void 0},E.flush=function(){return void 0===f?d:b(i())},E}},27875:e=>{e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},16152:(e,t,n)=>{var r=n(26669);e.exports=function(){return r.Date.now()}},24948:(e,t,n)=>{var r=n(44995),i=n(27875);e.exports=function(e,t,n){var o=!0,s=!0;if("function"!=typeof e)throw TypeError("Expected a function");return i(n)&&(o="leading"in n?!!n.leading:o,s="trailing"in n?!!n.trailing:s),r(e,t,{leading:o,maxWait:t,trailing:s})}},72132:(e,t,n)=>{var r=n(65464),i=n(27875),o=n(18180),s=0/0,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(o(e))return s;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=r(e);var n=a.test(e);return n||c.test(e)?l(e.slice(2),n?2:8):u.test(e)?s:+e}},844:(e,t,n)=>{"use strict";n.d(t,{D:()=>c,N:()=>l});var r=n(6631);let i=["light","dark"],o="(prefers-color-scheme: dark)",s="undefined"==typeof window,u=(0,r.createContext)(void 0),a={setTheme:e=>{},themes:[]},c=()=>{var e;return null!==(e=(0,r.useContext)(u))&&void 0!==e?e:a},l=e=>(0,r.useContext)(u)?r.createElement(r.Fragment,null,e.children):r.createElement(f,e),d=["light","dark"],f=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:n=!0,enableColorScheme:s=!0,storageKey:a="theme",themes:c=d,defaultTheme:l=n?"system":"light",attribute:f="data-theme",value:v,children:g,nonce:S})=>{let[_,b]=(0,r.useState)(()=>p(a,l)),[E,w]=(0,r.useState)(()=>p(a)),O=v?Object.values(v):c,C=(0,r.useCallback)(e=>{let r=e;if(!r)return;"system"===e&&n&&(r=y());let o=v?v[r]:r,u=t?m():null,a=document.documentElement;if("class"===f?(a.classList.remove(...O),o&&a.classList.add(o)):o?a.setAttribute(f,o):a.removeAttribute(f),s){let e=i.includes(l)?l:null,t=i.includes(r)?r:e;a.style.colorScheme=t}null==u||u()},[]),A=(0,r.useCallback)(e=>{b(e);try{localStorage.setItem(a,e)}catch(e){}},[e]),R=(0,r.useCallback)(t=>{w(y(t)),"system"===_&&n&&!e&&C("system")},[_,e]);(0,r.useEffect)(()=>{let e=window.matchMedia(o);return e.addListener(R),R(e),()=>e.removeListener(R)},[R]),(0,r.useEffect)(()=>{let e=e=>{e.key===a&&A(e.newValue||l)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[A]),(0,r.useEffect)(()=>{C(null!=e?e:_)},[e,_]);let j=(0,r.useMemo)(()=>({theme:_,setTheme:A,forcedTheme:e,resolvedTheme:"system"===_?E:_,themes:n?[...c,"system"]:c,systemTheme:n?E:void 0}),[_,A,e,E,n,c]);return r.createElement(u.Provider,{value:j},r.createElement(h,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:n,enableColorScheme:s,storageKey:a,themes:c,defaultTheme:l,attribute:f,value:v,children:g,attrs:O,nonce:S}),g)},h=(0,r.memo)(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:s,enableColorScheme:u,defaultTheme:a,value:c,attrs:l,nonce:d})=>{let f="system"===a,h="class"===n?`var d=document.documentElement,c=d.classList;c.remove(${l.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${n}',s='setAttribute';`,p=u?i.includes(a)&&a?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${a}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",m=(e,t=!1,r=!0)=>{let o=c?c[e]:e,s=t?e+"|| ''":`'${o}'`,a="";return u&&r&&!t&&i.includes(e)&&(a+=`d.style.colorScheme = '${e}';`),"class"===n?a+=t||o?`c.add(${s})`:"null":o&&(a+=`d[s](n,${s})`),a},y=e?`!function(){${h}${m(e)}}()`:s?`!function(){try{${h}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${f})){var t='${o}',m=window.matchMedia(t);if(m.media!==t||m.matches){${m("dark")}}else{${m("light")}}}else if(e){${c?`var x=${JSON.stringify(c)};`:""}${m(c?"x[e]":"e",!0)}}${f?"":"else{"+m(a,!1,!1)+"}"}${p}}catch(e){}}()`:`!function(){try{${h}var e=localStorage.getItem('${t}');if(e){${c?`var x=${JSON.stringify(c)};`:""}${m(c?"x[e]":"e",!0)}}else{${m(a,!1,!1)};}${p}}catch(t){}}();`;return r.createElement("script",{nonce:d,dangerouslySetInnerHTML:{__html:y}})},()=>!0),p=(e,t)=>{let n;if(!s){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},m=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},y=e=>(e||(e=window.matchMedia(o)),e.matches?"dark":"light")},39234:()=>{},17357:(e,t,n)=>{var r=n(70411),i=n(32617);e.exports=function(e){var t,n;if("string"!=typeof e)throw TypeError("Expected a string, got `"+typeof e+"`");return t=i(e,{customReplacements:[["&"," and "]]}).replace(/([A-Z]{2,})([a-z\d]+)/g,"$1 $2").replace(/([a-z\d]+)([A-Z]{2,})/g,"$1 $2").replace(/([a-z\d])([A-Z])/g,"$1 $2").replace(/([A-Z]+)([A-Z][a-z\d]+)/g,"$1 $2").toLowerCase().replace(/[^a-z\d]+/g,"-").replace(/\\/g,""),n=r("-"),t.replace(RegExp(n+"{2,}","g"),"-").replace(RegExp("^"+n+"|"+n+"$","g"),"")}},56486:e=>{e.exports=[["\xdf","ss"],["\xe4","ae"],["\xc4","Ae"],["\xf6","oe"],["\xd6","Oe"],["\xfc","ue"],["\xdc","Ue"],["\xc0","A"],["\xc1","A"],["\xc2","A"],["\xc3","A"],["\xc4","Ae"],["\xc5","A"],["\xc6","AE"],["\xc7","C"],["\xc8","E"],["\xc9","E"],["\xca","E"],["\xcb","E"],["\xcc","I"],["\xcd","I"],["\xce","I"],["\xcf","I"],["\xd0","D"],["\xd1","N"],["\xd2","O"],["\xd3","O"],["\xd4","O"],["\xd5","O"],["\xd6","Oe"],["Ő","O"],["\xd8","O"],["\xd9","U"],["\xda","U"],["\xdb","U"],["\xdc","Ue"],["Ű","U"],["\xdd","Y"],["\xde","TH"],["\xdf","ss"],["\xe0","a"],["\xe1","a"],["\xe2","a"],["\xe3","a"],["\xe4","ae"],["\xe5","a"],["\xe6","ae"],["\xe7","c"],["\xe8","e"],["\xe9","e"],["\xea","e"],["\xeb","e"],["\xec","i"],["\xed","i"],["\xee","i"],["\xef","i"],["\xf0","d"],["\xf1","n"],["\xf2","o"],["\xf3","o"],["\xf4","o"],["\xf5","o"],["\xf6","oe"],["ő","o"],["\xf8","o"],["\xf9","u"],["\xfa","u"],["\xfb","u"],["\xfc","ue"],["ű","u"],["\xfd","y"],["\xfe","th"],["\xff","y"],["ẞ","SS"],["\xe0","a"],["\xc0","A"],["\xe1","a"],["\xc1","A"],["\xe2","a"],["\xc2","A"],["\xe3","a"],["\xc3","A"],["\xe8","e"],["\xc8","E"],["\xe9","e"],["\xc9","E"],["\xea","e"],["\xca","E"],["\xec","i"],["\xcc","I"],["\xed","i"],["\xcd","I"],["\xf2","o"],["\xd2","O"],["\xf3","o"],["\xd3","O"],["\xf4","o"],["\xd4","O"],["\xf5","o"],["\xd5","O"],["\xf9","u"],["\xd9","U"],["\xfa","u"],["\xda","U"],["\xfd","y"],["\xdd","Y"],["ă","a"],["Ă","A"],["Đ","D"],["đ","d"],["ĩ","i"],["Ĩ","I"],["ũ","u"],["Ũ","U"],["ơ","o"],["Ơ","O"],["ư","u"],["Ư","U"],["ạ","a"],["Ạ","A"],["ả","a"],["Ả","A"],["ấ","a"],["Ấ","A"],["ầ","a"],["Ầ","A"],["ẩ","a"],["Ẩ","A"],["ẫ","a"],["Ẫ","A"],["ậ","a"],["Ậ","A"],["ắ","a"],["Ắ","A"],["ằ","a"],["Ằ","A"],["ẳ","a"],["Ẳ","A"],["ẵ","a"],["Ẵ","A"],["ặ","a"],["Ặ","A"],["ẹ","e"],["Ẹ","E"],["ẻ","e"],["Ẻ","E"],["ẽ","e"],["Ẽ","E"],["ế","e"],["Ế","E"],["ề","e"],["Ề","E"],["ể","e"],["Ể","E"],["ễ","e"],["Ễ","E"],["ệ","e"],["Ệ","E"],["ỉ","i"],["Ỉ","I"],["ị","i"],["Ị","I"],["ọ","o"],["Ọ","O"],["ỏ","o"],["Ỏ","O"],["ố","o"],["Ố","O"],["ồ","o"],["Ồ","O"],["ổ","o"],["Ổ","O"],["ỗ","o"],["Ỗ","O"],["ộ","o"],["Ộ","O"],["ớ","o"],["Ớ","O"],["ờ","o"],["Ờ","O"],["ở","o"],["Ở","O"],["ỡ","o"],["Ỡ","O"],["ợ","o"],["Ợ","O"],["ụ","u"],["Ụ","U"],["ủ","u"],["Ủ","U"],["ứ","u"],["Ứ","U"],["ừ","u"],["Ừ","U"],["ử","u"],["Ử","U"],["ữ","u"],["Ữ","U"],["ự","u"],["Ự","U"],["ỳ","y"],["Ỳ","Y"],["ỵ","y"],["Ỵ","Y"],["ỷ","y"],["Ỷ","Y"],["ỹ","y"],["Ỹ","Y"],["ء","e"],["آ","a"],["أ","a"],["ؤ","w"],["إ","i"],["ئ","y"],["ا","a"],["ب","b"],["ة","t"],["ت","t"],["ث","th"],["ج","j"],["ح","h"],["خ","kh"],["د","d"],["ذ","dh"],["ر","r"],["ز","z"],["س","s"],["ش","sh"],["ص","s"],["ض","d"],["ط","t"],["ظ","z"],["ع","e"],["غ","gh"],["ـ","_"],["ف","f"],["ق","q"],["ك","k"],["ل","l"],["م","m"],["ن","n"],["ه","h"],["و","w"],["ى","a"],["ي","y"],["َ‎","a"],["ُ","u"],["ِ‎","i"],["٠","0"],["١","1"],["٢","2"],["٣","3"],["٤","4"],["٥","5"],["٦","6"],["٧","7"],["٨","8"],["٩","9"],["چ","ch"],["ک","k"],["گ","g"],["پ","p"],["ژ","zh"],["ی","y"],["۰","0"],["۱","1"],["۲","2"],["۳","3"],["۴","4"],["۵","5"],["۶","6"],["۷","7"],["۸","8"],["۹","9"],["ټ","p"],["ځ","z"],["څ","c"],["ډ","d"],["ﺫ","d"],["ﺭ","r"],["ړ","r"],["ﺯ","z"],["ږ","g"],["ښ","x"],["ګ","g"],["ڼ","n"],["ۀ","e"],["ې","e"],["ۍ","ai"],["ٹ","t"],["ڈ","d"],["ڑ","r"],["ں","n"],["ہ","h"],["ھ","h"],["ے","e"],["А","A"],["а","a"],["Б","B"],["б","b"],["В","V"],["в","v"],["Г","G"],["г","g"],["Д","D"],["д","d"],["Е","E"],["е","e"],["Ж","Zh"],["ж","zh"],["З","Z"],["з","z"],["И","I"],["и","i"],["Й","J"],["й","j"],["К","K"],["к","k"],["Л","L"],["л","l"],["М","M"],["м","m"],["Н","N"],["н","n"],["О","O"],["о","o"],["П","P"],["п","p"],["Р","R"],["р","r"],["С","S"],["с","s"],["Т","T"],["т","t"],["У","U"],["у","u"],["Ф","F"],["ф","f"],["Х","H"],["х","h"],["Ц","Cz"],["ц","cz"],["Ч","Ch"],["ч","ch"],["Ш","Sh"],["ш","sh"],["Щ","Shh"],["щ","shh"],["Ъ",""],["ъ",""],["Ы","Y"],["ы","y"],["Ь",""],["ь",""],["Э","E"],["э","e"],["Ю","Yu"],["ю","yu"],["Я","Ya"],["я","ya"],["Ё","Yo"],["ё","yo"],["ă","a"],["Ă","A"],["ș","s"],["Ș","S"],["ț","t"],["Ț","T"],["ţ","t"],["Ţ","T"],["ş","s"],["Ş","s"],["\xe7","c"],["\xc7","c"],["ğ","g"],["Ğ","g"],["ı","i"],["İ","i"],["ա","a"],["բ","b"],["գ","ɡ"],["դ","d"],["ե","ye"],["զ","z"],["է","e"],["ը","u"],["թ","t"],["ժ","zh"],["ի","i"],["լ","l"],["խ","kh"],["ծ","ts"],["կ","k"],["հ","h"],["ձ","dz"],["ղ","r"],["ճ","j"],["մ","m"],["յ","j"],["ն","n"],["շ","sh"],["ո","vo"],["չ","ch"],["պ","p"],["ջ","j"],["ռ","r"],["ս","s"],["վ","v"],["տ","t"],["ր","re"],["ց","ts"],["ու","u"],["ւ","v"],["փ","p"],["ք","q"],["օ","o"],["ֆ","f"],["և","yev"],["ა","a"],["ბ","b"],["გ","g"],["დ","d"],["ე","e"],["ვ","v"],["ზ","z"],["თ","t"],["ი","i"],["კ","k"],["ლ","l"],["მ","m"],["ნ","n"],["ო","o"],["პ","p"],["ჟ","zh"],["რ","r"],["ს","s"],["ტ","t"],["უ","u"],["ფ","ph"],["ქ","q"],["ღ","gh"],["ყ","k"],["შ","sh"],["ჩ","ch"],["ც","ts"],["ძ","dz"],["წ","ts"],["ჭ","tch"],["ხ","kh"],["ჯ","j"],["ჰ","h"],["č","c"],["ď","d"],["ě","e"],["ň","n"],["ř","r"],["š","s"],["ť","t"],["ů","u"],["ž","z"],["Č","C"],["Ď","D"],["Ě","E"],["Ň","N"],["Ř","R"],["Š","S"],["Ť","T"],["Ů","U"],["Ž","Z"],["ހ","h"],["ށ","sh"],["ނ","n"],["ރ","r"],["ބ","b"],["ޅ","lh"],["ކ","k"],["އ","a"],["ވ","v"],["މ","m"],["ފ","f"],["ދ","dh"],["ތ","th"],["ލ","l"],["ގ","g"],["ޏ","gn"],["ސ","s"],["ޑ","d"],["ޒ","z"],["ޓ","t"],["ޔ","y"],["ޕ","p"],["ޖ","j"],["ޗ","ch"],["ޘ","tt"],["ޙ","hh"],["ޚ","kh"],["ޛ","th"],["ޜ","z"],["ޝ","sh"],["ޞ","s"],["ޟ","d"],["ޠ","t"],["ޡ","z"],["ޢ","a"],["ޣ","gh"],["ޤ","q"],["ޥ","w"],["ަ","a"],["ާ","aa"],["ި","i"],["ީ","ee"],["ު","u"],["ޫ","oo"],["ެ","e"],["ޭ","ey"],["ޮ","o"],["ޯ","oa"],["ް",""],["α","a"],["β","v"],["γ","g"],["δ","d"],["ε","e"],["ζ","z"],["η","i"],["θ","th"],["ι","i"],["κ","k"],["λ","l"],["μ","m"],["ν","n"],["ξ","ks"],["ο","o"],["π","p"],["ρ","r"],["σ","s"],["τ","t"],["υ","y"],["φ","f"],["χ","x"],["ψ","ps"],["ω","o"],["ά","a"],["έ","e"],["ί","i"],["ό","o"],["ύ","y"],["ή","i"],["ώ","o"],["ς","s"],["ϊ","i"],["ΰ","y"],["ϋ","y"],["ΐ","i"],["Α","A"],["Β","B"],["Γ","G"],["Δ","D"],["Ε","E"],["Ζ","Z"],["Η","I"],["Θ","TH"],["Ι","I"],["Κ","K"],["Λ","L"],["Μ","M"],["Ν","N"],["Ξ","KS"],["Ο","O"],["Π","P"],["Ρ","R"],["Σ","S"],["Τ","T"],["Υ","Y"],["Φ","F"],["Χ","X"],["Ψ","PS"],["Ω","O"],["Ά","A"],["Έ","E"],["Ί","I"],["Ό","O"],["Ύ","Y"],["Ή","I"],["Ώ","O"],["Ϊ","I"],["Ϋ","Y"],["ā","a"],["ē","e"],["ģ","g"],["ī","i"],["ķ","k"],["ļ","l"],["ņ","n"],["ū","u"],["Ā","A"],["Ē","E"],["Ģ","G"],["Ī","I"],["Ķ","k"],["Ļ","L"],["Ņ","N"],["Ū","U"],["č","c"],["š","s"],["ž","z"],["Č","C"],["Š","S"],["Ž","Z"],["ą","a"],["č","c"],["ę","e"],["ė","e"],["į","i"],["š","s"],["ų","u"],["ū","u"],["ž","z"],["Ą","A"],["Č","C"],["Ę","E"],["Ė","E"],["Į","I"],["Š","S"],["Ų","U"],["Ū","U"],["Ќ","Kj"],["ќ","kj"],["Љ","Lj"],["љ","lj"],["Њ","Nj"],["њ","nj"],["Тс","Ts"],["тс","ts"],["ą","a"],["ć","c"],["ę","e"],["ł","l"],["ń","n"],["ś","s"],["ź","z"],["ż","z"],["Ą","A"],["Ć","C"],["Ę","E"],["Ł","L"],["Ń","N"],["Ś","S"],["Ź","Z"],["Ż","Z"],["Є","Ye"],["І","I"],["Ї","Yi"],["Ґ","G"],["є","ye"],["і","i"],["ї","yi"],["ґ","g"]]},32617:(e,t,n)=>{var r=n(54194),i=n(70411),o=n(56486);Object.keys||(Object.keys=function(e){if(e!==Object(e))throw TypeError("Object.keys called on a non-object");var t,n=[];for(t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.push(t);return n}),e.exports=function(e,t){if("string"!=typeof e)throw TypeError("Expected a string, got `"+typeof e+"`");var n,s=e,u=t||{};u=[{customReplacements:[]},u].reduce(function(e,t){try{return Object.keys(t).forEach(function(n){e[n]=t[n]}),e}catch(t){return e}},{});var a=[].concat(o).concat(u.customReplacements).filter(Boolean);return n=s=s.normalize(),r(s=a.reduce(function(e,t){var n=t[0],r=t[1];return"string"!=typeof n?e:e.replace(RegExp(i(n),"g"),r)},n))}},66400:(e,t,n)=>{"use strict";var r=n(73124);n(39234);var i=n(6631),o=function(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}(i),s=void 0!==r&&r.env&&!0,u=function(e){return"[object String]"===Object.prototype.toString.call(e)},a=function(){function e(e){var t=void 0===e?{}:e,n=t.name,r=void 0===n?"stylesheet":n,i=t.optimizeForSpeed,o=void 0===i?s:i;c(u(r),"`name` must be a string"),this._name=r,this._deletedRulePlaceholder="#"+r+"-deleted-rule____{}",c("boolean"==typeof o,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=o,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var a="undefined"!=typeof window&&document.querySelector('meta[property="csp-nonce"]');this._nonce=a?a.getAttribute("content"):null}var t=e.prototype;return t.setOptimizeForSpeed=function(e){c("boolean"==typeof e,"`setOptimizeForSpeed` accepts a boolean"),c(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},t.isOptimizeForSpeed=function(){return this._optimizeForSpeed},t.inject=function(){var e=this;if(c(!this._injected,"sheet already injected"),this._injected=!0,"undefined"!=typeof window&&this._optimizeForSpeed){this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),this._optimizeForSpeed||(s||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0);return}this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"==typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},t.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},t.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},t.insertRule=function(e,t){if(c(u(e),"`insertRule` accepts only strings"),"undefined"==typeof window)return"number"!=typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var n=this.getSheet();"number"!=typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(t){return s||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var r=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,r))}return this._rulesCount++},t.replaceRule=function(e,t){if(this._optimizeForSpeed||"undefined"==typeof window){var n="undefined"!=typeof window?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(r){s||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),n.insertRule(this._deletedRulePlaceholder,e)}}else{var r=this._tags[e];c(r,"old rule at index `"+e+"` not found"),r.textContent=t}return e},t.deleteRule=function(e){if("undefined"==typeof window){this._serverSheet.deleteRule(e);return}if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];c(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}},t.flush=function(){this._injected=!1,this._rulesCount=0,"undefined"!=typeof window?(this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]):this._serverSheet.cssRules=[]},t.cssRules=function(){var e=this;return"undefined"==typeof window?this._serverSheet.cssRules:this._tags.reduce(function(t,n){return n?t=t.concat(Array.prototype.map.call(e.getSheetForTag(n).cssRules,function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[])},t.makeStyleTag=function(e,t,n){t&&c(u(t),"makeStyleTag accepts only strings as second parameter");var r=document.createElement("style");this._nonce&&r.setAttribute("nonce",this._nonce),r.type="text/css",r.setAttribute("data-"+e,""),t&&r.appendChild(document.createTextNode(t));var i=document.head||document.getElementsByTagName("head")[0];return n?i.insertBefore(r,n):i.appendChild(r),r},function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(e.prototype,[{key:"length",get:function(){return this._rulesCount}}]),e}();function c(e,t){if(!e)throw Error("StyleSheet: "+t+".")}var l=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0},d={};function f(e,t){if(!t)return"jsx-"+e;var n=String(t),r=e+n;return d[r]||(d[r]="jsx-"+l(e+"-"+n)),d[r]}function h(e,t){"undefined"==typeof window&&(t=t.replace(/\/style/gi,"\\/style"));var n=e+t;return d[n]||(d[n]=t.replace(/__jsx-style-dynamic-selector/g,e)),d[n]}var p=function(){function e(e){var t=void 0===e?{}:e,n=t.styleSheet,r=void 0===n?null:n,i=t.optimizeForSpeed,o=void 0!==i&&i;this._sheet=r||new a({name:"styled-jsx",optimizeForSpeed:o}),this._sheet.inject(),r&&"boolean"==typeof o&&(this._sheet.setOptimizeForSpeed(o),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer=void 0,this._indices={},this._instancesCounts={}}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),"undefined"==typeof window||this._fromServer||(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var n=this.getIdAndRules(e),r=n.styleId,i=n.rules;if(r in this._instancesCounts){this._instancesCounts[r]+=1;return}var o=i.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return -1!==e});this._indices[r]=o,this._instancesCounts[r]=1},t.remove=function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw Error("StyleSheetRegistry: "+t+".")}(n in this._instancesCounts,"styleId: `"+n+"` not found"),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var r=this._fromServer&&this._fromServer[n];r?(r.parentNode.removeChild(r),delete this._fromServer[n]):(this._indices[n].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[n]),delete this._instancesCounts[n]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return n[e].cssText}).join(e._optimizeForSpeed?"":"\n")]}).filter(function(e){return!!e[1]}))},t.styles=function(e){var t,n;return t=this.cssRules(),void 0===(n=e)&&(n={}),t.map(function(e){var t=e[0],r=e[1];return o.default.createElement("style",{id:"__"+t,key:"__"+t,nonce:n.nonce?n.nonce:void 0,dangerouslySetInnerHTML:{__html:r}})})},t.getIdAndRules=function(e){var t=e.children,n=e.dynamic,r=e.id;if(n){var i=f(r,n);return{styleId:i,rules:Array.isArray(t)?t.map(function(e){return h(i,e)}):[h(i,t)]}}return{styleId:f(r),rules:Array.isArray(t)?t:[t]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})},e}(),m=i.createContext(null);m.displayName="StyleSheetContext";var y=o.default.useInsertionEffect||o.default.useLayoutEffect,v="undefined"!=typeof window?new p:void 0;function g(e){var t=v||i.useContext(m);return t&&("undefined"==typeof window?t.add(e):y(function(){return t.add(e),function(){t.remove(e)}},[e.id,String(e.dynamic)])),null}g.dynamic=function(e){return e.map(function(e){return f(e[0],e[1])}).join(" ")},t.style=g},85693:(e,t,n)=>{"use strict";e.exports=n(66400).style}}]);