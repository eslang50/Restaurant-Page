(()=>{"use strict";var e={28:(e,n,t)=>{t.d(n,{Z:()=>u});var r=t(81),a=t.n(r),i=t(645),o=t.n(i),c=t(667),s=t.n(c),d=new URL(t(587),t.b),l=o()(a());l.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Fira+Sans&display=swap);"]);var p=s()(d);l.push([e.id,"body {\n  margin: 0;\n  padding: 0;\n  background: url("+p+");\n  height: 100vh;\n  background-repeat: no-repeat;\n  background-size: cover;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: 'Fira Sans', sans-serif;\n}\n\n#content {\n  background-color: antiquewhite;\n  margin-top: 10%;\n  height: 90%;\n  width: 60%;\n  opacity: .9;\n  display: flex;\n  flex-direction: column;\n}\n\n\n\n.header {\n  margin: 0;\n  display: flex;\n  justify-content: center;\n  color: black;\n  font-size: 3em;\n  margin: 0;\n  \n}\n\n.description {\n  color: black;\n  display: flex;\n  justify-content: center;\n  padding: 0 2em;\n  font-size: 1.5em;\n  margin: 0;\n  text-align: center;\n}\n\nli {\n  list-style: none;\n  font-size: 2em;\n}\n\nli:hover {\n  text-decoration: underline;\n}\n\n.list {\n  display: flex;\n  justify-content: center;\n  gap: 3em;\n  margin: 3em 0;\n  padding: 0;\n  cursor: pointer;\n}\n\n.hours {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-size: 1.5em;\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  gap: 4em;\n  margin-bottom: 1em;\n}\n\n.restImg1 {\n  width: 300px;\n  height: fit-content;\n}\n\n.imgContainer {\n  display: flex;\n  justify-content: space-around;\n  margin-bottom: 1em;\n  flex-wrap: wrap;\n}\n\n\n",""]);const u=l},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,i){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(o[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&o[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},o=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=i[d]||0,p="".concat(d," ").concat(l);i[d]=l+1;var u=t(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var f=a(m,r);r.byIndex=c,n.splice(c,0,{identifier:p,updater:f,references:1})}o.push(p)}return o}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var i=r(e=e||[],a=a||{});return function(e){e=e||[];for(var o=0;o<i.length;o++){var c=t(i[o]);n[c].references--}for(var s=r(e,a),d=0;d<i.length;d++){var l=t(i[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}i=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},587:(e,n,t)=>{e.exports=t.p+"cb2c06f9350871abd565.jpg"}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),a=t.n(r),i=t(569),o=t.n(i),c=t(565),s=t.n(c),d=t(216),l=t.n(d),p=t(589),u=t.n(p),m=t(28),f={};f.styleTagTransform=u(),f.setAttributes=s(),f.insert=o().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=l(),n()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const h=t.p+"91c71d27c657705d91fc.jpg",g=t.p+"5ae7647927b1b4b575dc.jpg";function v(){const e=document.getElementById("content"),n=document.createElement("div");n.classList.add("container");const t=document.createElement("h1");t.classList.add("header"),t.innerHTML="Ethan's Enlightened Restaurant";const r=document.createElement("div");r.classList.add("imgContainer");const a=document.createElement("div"),i=new Image;i.src=h,i.classList.add("restImg1"),a.appendChild(i);const o=document.createElement("div"),c=new Image;c.src=g,c.classList.add("restImg1"),o.appendChild(c),r.appendChild(a),r.appendChild(o);const s=document.createElement("p");s.classList.add("description"),s.innerHTML="Welcome to Ethan's Enlightened Restaurant, where you will feel enlightened by eating any meal served here!";const d=document.createElement("div");d.classList.add("hours"),d.innerHTML="<strong>Hours</strong> <br /> Monday - Friday: 10 am - 10 pm <br /> Saturday: 1 pm - 12 am <br /> Sunday: 9 am - 6 pm",n.appendChild(t),n.appendChild(s),n.appendChild(d),n.appendChild(r),e.appendChild(n)}const y=document.createElement("ul"),b=document.getElementById("content");y.classList.add("list");const E=document.createElement("li");E.innerHTML="Home";const C=document.createElement("li");C.innerHTML="Menu";const x=document.createElement("li");x.innerHTML="Contact",y.appendChild(E),y.appendChild(C),y.appendChild(x),b.appendChild(y),v(),E.addEventListener("click",(e=>{b.removeChild(b.lastChild),v()})),C.addEventListener("click",(e=>{b.removeChild(b.lastChild),function(){const e=document.createElement("div"),n=document.createElement("h1");n.innerHTML="Menu";const t=document.createElement("p");t.innerHTML="$10 - Enlightening Elixer";const r=document.getElementById("content");e.appendChild(n),e.appendChild(t),r.appendChild(e)}()})),x.addEventListener("click",(e=>{b.removeChild(b.lastChild),function(){const e=document.createElement("div"),n=document.createElement("h1"),t=document.createElement("p");t.innerHTML="Name: Ethan Liu Email: eslangliu@gmail.com";const r=document.getElementById("content");e.appendChild(n),e.appendChild(t),r.appendChild(e)}()}))})()})();