(()=>{"use strict";var A={74:(A,e,t)=>{t.d(e,{Z:()=>o});var n=t(81),r=t.n(n),a=t(645),s=t.n(a)()(r());s.push([A.id,"body .tab {\n  width: 400px;\n  height: 40px;\n  background-color: pink;\n}\n",""]);const o=s},771:(A,e,t)=>{t.d(e,{Z:()=>o});var n=t(81),r=t.n(n),a=t(645),s=t.n(a)()(r());s.push([A.id,".marqueen {\n  width: 400px;\n  height: 40px;\n  background-color: green;\n}\n",""]);const o=s},645:A=>{A.exports=function(A){var e=[];return e.toString=function(){return this.map((function(e){var t="",n=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),n&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=A(e),n&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(A,t,n,r,a){"string"==typeof A&&(A=[[null,A,void 0]]);var s={};if(n)for(var o=0;o<this.length;o++){var c=this[o][0];null!=c&&(s[c]=!0)}for(var i=0;i<A.length;i++){var u=[].concat(A[i]);n&&s[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),e.push(u))}},e}},81:A=>{A.exports=function(A){return A[1]}},379:A=>{var e=[];function t(A){for(var t=-1,n=0;n<e.length;n++)if(e[n].identifier===A){t=n;break}return t}function n(A,n){for(var a={},s=[],o=0;o<A.length;o++){var c=A[o],i=n.base?c[0]+n.base:c[0],u=a[i]||0,l="".concat(i," ").concat(u);a[i]=u+1;var p=t(l),d={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(d);else{var f=r(d,n);n.byIndex=o,e.splice(o,0,{identifier:l,updater:f,references:1})}s.push(l)}return s}function r(A,e){var t=e.domAPI(e);return t.update(A),function(e){if(e){if(e.css===A.css&&e.media===A.media&&e.sourceMap===A.sourceMap&&e.supports===A.supports&&e.layer===A.layer)return;t.update(A=e)}else t.remove()}}A.exports=function(A,r){var a=n(A=A||[],r=r||{});return function(A){A=A||[];for(var s=0;s<a.length;s++){var o=t(a[s]);e[o].references--}for(var c=n(A,r),i=0;i<a.length;i++){var u=t(a[i]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}a=c}}},569:A=>{var e={};A.exports=function(A,t){var n=function(A){if(void 0===e[A]){var t=document.querySelector(A);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(A){t=null}e[A]=t}return e[A]}(A);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(t)}},216:A=>{A.exports=function(A){var e=document.createElement("style");return A.setAttributes(e,A.attributes),A.insert(e,A.options),e}},565:(A,e,t)=>{A.exports=function(A){var e=t.nc;e&&A.setAttribute("nonce",e)}},795:A=>{A.exports=function(A){var e=A.insertStyleElement(A);return{update:function(t){!function(A,e,t){var n="";t.supports&&(n+="@supports (".concat(t.supports,") {")),t.media&&(n+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(n+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),n+=t.css,r&&(n+="}"),t.media&&(n+="}"),t.supports&&(n+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(n,A,e.options)}(e,A,t)},remove:function(){!function(A){if(null===A.parentNode)return!1;A.parentNode.removeChild(A)}(e)}}}},589:A=>{A.exports=function(A,e){if(e.styleSheet)e.styleSheet.cssText=A;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(A))}}}},e={};function t(n){var r=e[n];if(void 0!==r)return r.exports;var a=e[n]={id:n,exports:{}};return A[n](a,a.exports,t),a.exports}t.n=A=>{var e=A&&A.__esModule?()=>A.default:()=>A;return t.d(e,{a:e}),e},t.d=(A,e)=>{for(var n in e)t.o(e,n)&&!t.o(A,n)&&Object.defineProperty(A,n,{enumerable:!0,get:e[n]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(A){if("object"==typeof window)return window}}(),t.o=(A,e)=>Object.prototype.hasOwnProperty.call(A,e),(()=>{var A;t.g.importScripts&&(A=t.g.location+"");var e=t.g.document;if(!A&&e&&(e.currentScript&&(A=e.currentScript.src),!A)){var n=e.getElementsByTagName("script");n.length&&(A=n[n.length-1].src)}if(!A)throw new Error("Automatic publicPath is not supported in this browser");A=A.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=A})(),t.nc=void 0,(()=>{var A=t(379),e=t.n(A),n=t(795),r=t.n(n),a=t(569),s=t.n(a),o=t(565),c=t.n(o),i=t(216),u=t.n(i),l=t(589),p=t.n(l),d=t(771),f={};f.styleTagTransform=p(),f.setAttributes=c(),f.insert=s().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=u(),e()(d.Z,f),d.Z&&d.Z.locals&&d.Z.locals;var Q=t(74),X={};X.styleTagTransform=p(),X.setAttributes=c(),X.insert=s().bind(null,"head"),X.domAPI=r(),X.insertStyleElement=u(),e()(Q.Z,X),Q.Z&&Q.Z.locals&&Q.Z.locals;const v=t.p+"images/37ece4.gif";console.log("创建了轮播图"),console.log("创建了tab切换");const h=document.createElement("img"),m=document.createElement("img");h.src=v,m.src="data:image/png;base64,AAABAAEAEBAAAAAAAABoAwAAFgAAACgAAAAQAAAAIAAAAAEAGAAAAAAAQAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACsXQasXQYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACsXQasXQYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACsXQasXQYAAAAAAAAAAACsXQasXQasXQasXQYAAAAAAAAAAAAAAAAAAAAAAAAAAACsXQasXQYAAAAAAAAAAAAAAAAAAACsXQasXQasXQYAAAAAAAAAAAAAAAAAAAAAAACsXQasXQYAAAAAAAATAOYTAOYAAAAAAACsXQasXQasXQYAAAAAAAAAAAAAAAAAAACsXQasXQYAAAAAAAATAOYTAOYTAOYTAOYAAACsXQasXQasXQYAAAAAAAAAAAAAAACsXQasXQasXQYAAAAAAAATAOYTAOYTAOYAAAAAAACsXQasXQYAAAAAAAAAAAAAAAAAAACsXQasXQasXQYAAAAAAAATAOYTAOYTAOYAAAAAAACsXQasXQYAAAAAAAAAAAAAAAAAAACsXQasXQasXQYAAAAAAAAAAAAAAAAAAAAAAACsXQasXQYAAAAAAAAAAAAAAAAAAAAAAACsXQasXQasXQasXQasXQasXQasXQasXQasXQYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACsXQasXQasXQasXQasXQasXQasXQYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//wAA//8AAP//AAD+fwAA/n8AAM4fAADPjwAAzMcAAMwjAADGMwAA4xkAAPH5AAD4AwAA/gMAAP//AAD//wAA",document.body.appendChild(h),document.body.appendChild(m)})()})();