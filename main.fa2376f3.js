parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){return o(e)||n(e)||t(e)||r()}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function t(e,r){if(e){if("string"==typeof e)return a(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?a(e,r):void 0}}function n(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function o(e){if(Array.isArray(e))return a(e)}function a(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}for(var l=document.querySelector("thead"),c=document.querySelector("tbody"),i=c.querySelectorAll("tr"),s=document.createElement("span"),u=l.querySelectorAll("th"),p=function(r){var t=r.target,n=e(i);switch(t.innerText){case"Name":n.sort(function(e,r){return e.cells[0].innerText.localeCompare(r.cells[0].innerText)});for(var o=0;o<n.length;o++)c.append(n[o]);break;case"Position":n.sort(function(e,r){return e.cells[1].innerText.localeCompare(r.cells[1].innerText)});for(var a=0;a<n.length;a++)c.append(n[a]);break;case"Age":n.sort(function(e,r){return parseFloat(e.cells[2].innerText)-parseFloat(r.cells[2].innerText)});for(var l=0;l<n.length;l++)c.append(n[l]);break;case"Salary":n.sort(function(e,r){return b(e.cells[3].innerText)-b(r.cells[3].innerText)});for(var s=0;s<n.length;s++)c.append(n[s])}},f=0,d=e(u);f<d.length;f++){var y=d[f];y.prepend(s.cloneNode(!0));var m=y.querySelector("span");m.append(y.childNodes[1]),m.addEventListener("click",p)}function b(e){var r=e.slice(1).split(",").join("");return Number.parseInt(r)}
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.fa2376f3.js.map