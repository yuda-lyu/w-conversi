/*!
 * w-conversi-server v1.0.13
 * (c) 2018-2021 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r(require("@hapi/hapi"),require("@hapi/inert"),require("socket.io"),require("events")):"function"==typeof define&&define.amd?define(["@hapi/hapi","@hapi/inert","socket.io","events"],r):(t="undefined"!=typeof globalThis?globalThis:t||self)["w-conversi-server"]=r(t["@hapi/hapi"],t["@hapi/inert"],t.socket.io,t.events)}(this,(function(t,r,n,e){"use strict";function o(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var i=o(t),a=o(r),u=o(e);function c(t,r,n,e,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void n(t)}u.done?r(c):Promise.resolve(c).then(e,o)}function f(t){return function(){var r=this,n=arguments;return new Promise((function(e,o){var i=t.apply(r,n);function a(t){c(i,e,o,a,u,"next",t)}function u(t){c(i,e,o,a,u,"throw",t)}a(void 0)}))}}function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var l="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function h(t){if(t.__esModule)return t;var r=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(t).forEach((function(n){var e=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(r,n,e.get?e:{enumerable:!0,get:function(){return t[n]}})})),r}function p(t){var r={exports:{}};return t(r,r.exports),r.exports}var v=p((function(t){var r=function(t){var r,n=Object.prototype,e=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,r,n){return Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{c({},"")}catch(t){c=function(t,r,n){return t[r]=n}}function f(t,r,n,e){var o=r&&r.prototype instanceof g?r:g,i=Object.create(o.prototype),a=new L(e||[]);return i._invoke=function(t,r,n){var e=h;return function(o,i){if(e===v)throw new Error("Generator is already running");if(e===y){if("throw"===o)throw i;return T()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var u=S(a,n);if(u){if(u===d)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(e===h)throw e=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);e=v;var c=l(t,r,n);if("normal"===c.type){if(e=n.done?y:p,c.arg===d)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(e=y,n.method="throw",n.arg=c.arg)}}}(t,n,a),i}function l(t,r,n){try{return{type:"normal",arg:t.call(r,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=f;var h="suspendedStart",p="suspendedYield",v="executing",y="completed",d={};function g(){}function b(){}function m(){}var w={};c(w,i,(function(){return this}));var _=Object.getPrototypeOf,j=_&&_(_(B([])));j&&j!==n&&e.call(j,i)&&(w=j);var A=m.prototype=g.prototype=Object.create(w);function O(t){["next","throw","return"].forEach((function(r){c(t,r,(function(t){return this._invoke(r,t)}))}))}function x(t,r){function n(o,i,a,u){var c=l(t[o],t,i);if("throw"!==c.type){var f=c.arg,h=f.value;return h&&"object"===s(h)&&e.call(h,"__await")?r.resolve(h.__await).then((function(t){n("next",t,a,u)}),(function(t){n("throw",t,a,u)})):r.resolve(h).then((function(t){f.value=t,a(f)}),(function(t){return n("throw",t,a,u)}))}u(c.arg)}var o;this._invoke=function(t,e){function i(){return new r((function(r,o){n(t,e,r,o)}))}return o=o?o.then(i,i):i()}}function S(t,n){var e=t.iterator[n.method];if(e===r){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=r,S(t,n),"throw"===n.method))return d;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=l(e,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,d;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=r),n.delegate=null,d):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,d)}function E(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function U(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function B(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){for(;++o<t.length;)if(e.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=r,n.done=!0,n};return a.next=a}}return{next:T}}function T(){return{value:r,done:!0}}return b.prototype=m,c(A,"constructor",m),c(m,"constructor",b),b.displayName=c(m,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===b||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,c(t,u,"GeneratorFunction")),t.prototype=Object.create(A),t},t.awrap=function(t){return{__await:t}},O(x.prototype),c(x.prototype,a,(function(){return this})),t.AsyncIterator=x,t.async=function(r,n,e,o,i){void 0===i&&(i=Promise);var a=new x(f(r,n,e,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},O(A),c(A,u,"Generator"),c(A,i,(function(){return this})),c(A,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=[];for(var n in t)r.push(n);return r.reverse(),function n(){for(;r.length;){var e=r.pop();if(e in t)return n.value=e,n.done=!1,n}return n.done=!0,n}},t.values=B,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(U),!t)for(var n in this)"t"===n.charAt(0)&&e.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(e,o){return u.type="throw",u.arg=t,n.next=e,o&&(n.method="next",n.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=e.call(a,"catchLoc"),f=e.call(a,"finallyLoc");if(c&&f){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!f)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),d},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),U(n),d}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc===t){var e=n.completion;if("throw"===e.type){var o=e.arg;U(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:B(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=r),d}},t}(t.exports);try{regeneratorRuntime=r}catch(t){"object"===("undefined"==typeof globalThis?"undefined":s(globalThis))?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}})),y=Array.isArray,d="object"==s(l)&&l&&l.Object===Object&&l,g="object"==("undefined"==typeof self?"undefined":s(self))&&self&&self.Object===Object&&self,b=d||g||Function("return this")(),m=b.Symbol,w=Object.prototype,_=w.hasOwnProperty,j=w.toString,A=m?m.toStringTag:void 0;var O=function(t){var r=_.call(t,A),n=t[A];try{t[A]=void 0;var e=!0}catch(t){}var o=j.call(t);return e&&(r?t[A]=n:delete t[A]),o},x=Object.prototype.toString;var S=function(t){return x.call(t)},E=m?m.toStringTag:void 0;var U=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":E&&E in Object(t)?O(t):S(t)};var L=function(t){return null!=t&&"object"==s(t)};var B=function(t){return"symbol"==s(t)||L(t)&&"[object Symbol]"==U(t)},T=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,k=/^\w*$/;var P=function(t,r){if(y(t))return!1;var n=s(t);return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!B(t))||(k.test(t)||!T.test(t)||null!=r&&t in Object(r))};var I=function(t){var r=s(t);return null!=t&&("object"==r||"function"==r)};var z,N=function(t){if(!I(t))return!1;var r=U(t);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},F=b["__core-js_shared__"],C=(z=/[^.]+$/.exec(F&&F.keys&&F.keys.IE_PROTO||""))?"Symbol(src)_1."+z:"";var M=function(t){return!!C&&C in t},R=Function.prototype.toString;var $=function(t){if(null!=t){try{return R.call(t)}catch(t){}try{return t+""}catch(t){}}return""},G=/^\[object .+?Constructor\]$/,H=Function.prototype,q=Object.prototype,D=H.toString,W=q.hasOwnProperty,V=RegExp("^"+D.call(W).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var J=function(t){return!(!I(t)||M(t))&&(N(t)?V:G).test($(t))};var Y=function(t,r){return null==t?void 0:t[r]};var K=function(t,r){var n=Y(t,r);return J(n)?n:void 0},Q=K(Object,"create");var X=function(){this.__data__=Q?Q(null):{},this.size=0};var Z=function(t){var r=this.has(t)&&delete this.__data__[t];return this.size-=r?1:0,r},tt=Object.prototype.hasOwnProperty;var rt=function(t){var r=this.__data__;if(Q){var n=r[t];return"__lodash_hash_undefined__"===n?void 0:n}return tt.call(r,t)?r[t]:void 0},nt=Object.prototype.hasOwnProperty;var et=function(t){var r=this.__data__;return Q?void 0!==r[t]:nt.call(r,t)};var ot=function(t,r){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=Q&&void 0===r?"__lodash_hash_undefined__":r,this};function it(t){var r=-1,n=null==t?0:t.length;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}it.prototype.clear=X,it.prototype.delete=Z,it.prototype.get=rt,it.prototype.has=et,it.prototype.set=ot;var at=it;var ut=function(){this.__data__=[],this.size=0};var ct=function(t,r){return t===r||t!=t&&r!=r};var ft=function(t,r){for(var n=t.length;n--;)if(ct(t[n][0],r))return n;return-1},st=Array.prototype.splice;var lt=function(t){var r=this.__data__,n=ft(r,t);return!(n<0)&&(n==r.length-1?r.pop():st.call(r,n,1),--this.size,!0)};var ht=function(t){var r=this.__data__,n=ft(r,t);return n<0?void 0:r[n][1]};var pt=function(t){return ft(this.__data__,t)>-1};var vt=function(t,r){var n=this.__data__,e=ft(n,t);return e<0?(++this.size,n.push([t,r])):n[e][1]=r,this};function yt(t){var r=-1,n=null==t?0:t.length;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}yt.prototype.clear=ut,yt.prototype.delete=lt,yt.prototype.get=ht,yt.prototype.has=pt,yt.prototype.set=vt;var dt=yt,gt=K(b,"Map");var bt=function(){this.size=0,this.__data__={hash:new at,map:new(gt||dt),string:new at}};var mt=function(t){var r=s(t);return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==t:null===t};var wt=function(t,r){var n=t.__data__;return mt(r)?n["string"==typeof r?"string":"hash"]:n.map};var _t=function(t){var r=wt(this,t).delete(t);return this.size-=r?1:0,r};var jt=function(t){return wt(this,t).get(t)};var At=function(t){return wt(this,t).has(t)};var Ot=function(t,r){var n=wt(this,t),e=n.size;return n.set(t,r),this.size+=n.size==e?0:1,this};function xt(t){var r=-1,n=null==t?0:t.length;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}xt.prototype.clear=bt,xt.prototype.delete=_t,xt.prototype.get=jt,xt.prototype.has=At,xt.prototype.set=Ot;var St=xt;function Et(t,r){if("function"!=typeof t||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var n=function n(){var e=arguments,o=r?r.apply(this,e):e[0],i=n.cache;if(i.has(o))return i.get(o);var a=t.apply(this,e);return n.cache=i.set(o,a)||i,a};return n.cache=new(Et.Cache||St),n}Et.Cache=St;var Ut=Et;var Lt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Bt=/\\(\\)?/g,Tt=function(t){var r=Ut(t,(function(t){return 500===n.size&&n.clear(),t})),n=r.cache;return r}((function(t){var r=[];return 46===t.charCodeAt(0)&&r.push(""),t.replace(Lt,(function(t,n,e,o){r.push(e?o.replace(Bt,"$1"):n||t)})),r}));var kt=function(t,r){for(var n=-1,e=null==t?0:t.length,o=Array(e);++n<e;)o[n]=r(t[n],n,t);return o},Pt=m?m.prototype:void 0,It=Pt?Pt.toString:void 0;var zt=function t(r){if("string"==typeof r)return r;if(y(r))return kt(r,t)+"";if(B(r))return It?It.call(r):"";var n=r+"";return"0"==n&&1/r==-Infinity?"-0":n};var Nt=function(t){return null==t?"":zt(t)};var Ft=function(t,r){return y(t)?t:P(t,r)?[t]:Tt(Nt(t))};var Ct=function(t){if("string"==typeof t||B(t))return t;var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r};var Mt=function(t,r){for(var n=0,e=(r=Ft(r,t)).length;null!=t&&n<e;)t=t[Ct(r[n++])];return n&&n==e?t:void 0};var Rt=function(t,r,n){var e=null==t?void 0:Mt(t,r);return void 0===e?n:e};var $t=function(t,r,n){var e=-1,o=t.length;r<0&&(r=-r>o?0:o+r),(n=n>o?o:n)<0&&(n+=o),o=r>n?0:n-r>>>0,r>>>=0;for(var i=Array(o);++e<o;)i[e]=t[e+r];return i};var Gt=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991};var Ht=function(t){return null!=t&&Gt(t.length)&&!N(t)},qt=/^(?:0|[1-9]\d*)$/;var Dt=function(t,r){var n=s(t);return!!(r=null==r?9007199254740991:r)&&("number"==n||"symbol"!=n&&qt.test(t))&&t>-1&&t%1==0&&t<r};var Wt=function(t,r,n){if(!I(n))return!1;var e=s(r);return!!("number"==e?Ht(n)&&Dt(r,n.length):"string"==e&&r in n)&&ct(n[r],t)},Vt=/\s/;var Jt=function(t){for(var r=t.length;r--&&Vt.test(t.charAt(r)););return r},Yt=/^\s+/;var Kt=function(t){return t?t.slice(0,Jt(t)+1).replace(Yt,""):t},Qt=/^[-+]0x[0-9a-f]+$/i,Xt=/^0b[01]+$/i,Zt=/^0o[0-7]+$/i,tr=parseInt;var rr=function(t){if("number"==typeof t)return t;if(B(t))return NaN;if(I(t)){var r="function"==typeof t.valueOf?t.valueOf():t;t=I(r)?r+"":r}if("string"!=typeof t)return 0===t?t:+t;t=Kt(t);var n=Xt.test(t);return n||Zt.test(t)?tr(t.slice(2),n?2:8):Qt.test(t)?NaN:+t},nr=1/0;var er=function(t){return t?(t=rr(t))===nr||t===-1/0?17976931348623157e292*(t<0?-1:1):t==t?t:0:0===t?t:0};var or=function(t){var r=er(t),n=r%1;return r==r?n?r-n:r:0},ir=Math.ceil,ar=Math.max;var ur=function(t,r,n){r=(n?Wt(t,r,n):void 0===r)?1:ar(or(r),0);var e=null==t?0:t.length;if(!e||r<1)return[];for(var o=0,i=0,a=Array(ir(e/r));o<e;)a[i++]=$t(t,o,o+=r);return a},cr=Array.prototype.join;var fr=function(t,r){return null==t?"":cr.call(t,r)};var sr=function(t,r){for(var n=-1,e=null==t?0:t.length;++n<e&&!1!==r(t[n],n,t););return t};var lr=function(t){return function(r,n,e){for(var o=-1,i=Object(r),a=e(r),u=a.length;u--;){var c=a[t?u:++o];if(!1===n(i[c],c,i))break}return r}}();var hr=function(t,r){for(var n=-1,e=Array(t);++n<t;)e[n]=r(n);return e};var pr=function(t){return L(t)&&"[object Arguments]"==U(t)},vr=Object.prototype,yr=vr.hasOwnProperty,dr=vr.propertyIsEnumerable,gr=pr(function(){return arguments}())?pr:function(t){return L(t)&&yr.call(t,"callee")&&!dr.call(t,"callee")};var br=function(){return!1},mr=p((function(t,r){var n=r&&!r.nodeType&&r,e=n&&t&&!t.nodeType&&t,o=e&&e.exports===n?b.Buffer:void 0,i=(o?o.isBuffer:void 0)||br;t.exports=i})),wr={};wr["[object Float32Array]"]=wr["[object Float64Array]"]=wr["[object Int8Array]"]=wr["[object Int16Array]"]=wr["[object Int32Array]"]=wr["[object Uint8Array]"]=wr["[object Uint8ClampedArray]"]=wr["[object Uint16Array]"]=wr["[object Uint32Array]"]=!0,wr["[object Arguments]"]=wr["[object Array]"]=wr["[object ArrayBuffer]"]=wr["[object Boolean]"]=wr["[object DataView]"]=wr["[object Date]"]=wr["[object Error]"]=wr["[object Function]"]=wr["[object Map]"]=wr["[object Number]"]=wr["[object Object]"]=wr["[object RegExp]"]=wr["[object Set]"]=wr["[object String]"]=wr["[object WeakMap]"]=!1;var _r=function(t){return L(t)&&Gt(t.length)&&!!wr[U(t)]};var jr=function(t){return function(r){return t(r)}},Ar=p((function(t,r){var n=r&&!r.nodeType&&r,e=n&&t&&!t.nodeType&&t,o=e&&e.exports===n&&d.process,i=function(){try{var t=e&&e.require&&e.require("util").types;return t||o&&o.binding&&o.binding("util")}catch(t){}}();t.exports=i})),Or=Ar&&Ar.isTypedArray,xr=Or?jr(Or):_r,Sr=Object.prototype.hasOwnProperty;var Er=function(t,r){var n=y(t),e=!n&&gr(t),o=!n&&!e&&mr(t),i=!n&&!e&&!o&&xr(t),a=n||e||o||i,u=a?hr(t.length,String):[],c=u.length;for(var f in t)!r&&!Sr.call(t,f)||a&&("length"==f||o&&("offset"==f||"parent"==f)||i&&("buffer"==f||"byteLength"==f||"byteOffset"==f)||Dt(f,c))||u.push(f);return u},Ur=Object.prototype;var Lr=function(t){var r=t&&t.constructor;return t===("function"==typeof r&&r.prototype||Ur)};var Br=function(t,r){return function(n){return t(r(n))}}(Object.keys,Object),Tr=Object.prototype.hasOwnProperty;var kr=function(t){if(!Lr(t))return Br(t);var r=[];for(var n in Object(t))Tr.call(t,n)&&"constructor"!=n&&r.push(n);return r};var Pr=function(t){return Ht(t)?Er(t):kr(t)};var Ir=function(t,r){return function(n,e){if(null==n)return n;if(!Ht(n))return t(n,e);for(var o=n.length,i=r?o:-1,a=Object(n);(r?i--:++i<o)&&!1!==e(a[i],i,a););return n}}((function(t,r){return t&&lr(t,r,Pr)}));var zr=function(t){return t};var Nr=function(t){return"function"==typeof t?t:zr};var Fr=function(t,r){return(y(t)?sr:Ir)(t,Nr(r))};var Cr=function(t){return"number"==typeof t&&t==or(t)};function Mr(t){return"[object String]"===Object.prototype.toString.call(t)}function Rr(t){return!(!Mr(t)||""===t)}function $r(t){var r=!1;return Rr(t)?r=!isNaN(Number(t)):function(t){return"[object Number]"===Object.prototype.toString.call(t)}(t)&&(r=!0),r}function Gr(t){return $r(t)?er(t):0}var Hr=b.isFinite,qr=Math.min;var Dr=function(t){var r=Math[t];return function(t,n){if(t=rr(t),(n=null==n?0:qr(or(n),292))&&Hr(t)){var e=(Nt(t)+"e").split("e"),o=r(e[0]+"e"+(+e[1]+n));return+((e=(Nt(o)+"e").split("e"))[0]+"e"+(+e[1]-n))}return r(t)}}("round");function Wr(t){if(!$r(t))return 0;t=Gr(t);var r=Dr(t);return"0"===String(r)?0:r}function Vr(t){return!!function(t){return!!$r(t)&&(t=Gr(t),Cr(t))}(t)&&Wr(t)>0}var Jr="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),Yr=Jr.length;function Kr(t){return"[object Uint8Array]"===Object.prototype.toString.call(t)}function Qr(t){return"[object Uint16Array]"===Object.prototype.toString.call(t)}function Xr(t,r){return Rr(t)&&Vr(r)?t.substr(0,r):""}function Zr(t,r){return Rr(t)&&Vr(r)?function(t,r){if(!Rr(t))return"";if(!Vr(r))return"";var n=t.length-r;return n<0&&(n=0),t.substr(n,r)}(t,t.length-r):""}var tn=h(Object.freeze({__proto__:null,default:{}})),rn=p((function(t,r){var n;t.exports=n=n||function(t,r){var n;if("undefined"!=typeof window&&window.crypto&&(n=window.crypto),"undefined"!=typeof self&&self.crypto&&(n=self.crypto),"undefined"!=typeof globalThis&&globalThis.crypto&&(n=globalThis.crypto),!n&&"undefined"!=typeof window&&window.msCrypto&&(n=window.msCrypto),!n&&void 0!==l&&l.crypto&&(n=l.crypto),!n)try{n=tn}catch(t){}var e=function(){if(n){if("function"==typeof n.getRandomValues)try{return n.getRandomValues(new Uint32Array(1))[0]}catch(t){}if("function"==typeof n.randomBytes)try{return n.randomBytes(4).readInt32LE()}catch(t){}}throw new Error("Native crypto module could not be used to get secure random number.")},o=Object.create||function(){function t(){}return function(r){var n;return t.prototype=r,n=new t,t.prototype=null,n}}(),i={},a=i.lib={},u=a.Base={extend:function(t){var r=o(this);return t&&r.mixIn(t),r.hasOwnProperty("init")&&this.init!==r.init||(r.init=function(){r.$super.init.apply(this,arguments)}),r.init.prototype=r,r.$super=this,r},create:function(){var t=this.extend();return t.init.apply(t,arguments),t},init:function(){},mixIn:function(t){for(var r in t)t.hasOwnProperty(r)&&(this[r]=t[r]);t.hasOwnProperty("toString")&&(this.toString=t.toString)},clone:function(){return this.init.prototype.extend(this)}},c=a.WordArray=u.extend({init:function(t,n){t=this.words=t||[],this.sigBytes=n!=r?n:4*t.length},toString:function(t){return(t||s).stringify(this)},concat:function(t){var r=this.words,n=t.words,e=this.sigBytes,o=t.sigBytes;if(this.clamp(),e%4)for(var i=0;i<o;i++){var a=n[i>>>2]>>>24-i%4*8&255;r[e+i>>>2]|=a<<24-(e+i)%4*8}else for(var u=0;u<o;u+=4)r[e+u>>>2]=n[u>>>2];return this.sigBytes+=o,this},clamp:function(){var r=this.words,n=this.sigBytes;r[n>>>2]&=4294967295<<32-n%4*8,r.length=t.ceil(n/4)},clone:function(){var t=u.clone.call(this);return t.words=this.words.slice(0),t},random:function(t){for(var r=[],n=0;n<t;n+=4)r.push(e());return new c.init(r,t)}}),f=i.enc={},s=f.Hex={stringify:function(t){for(var r=t.words,n=t.sigBytes,e=[],o=0;o<n;o++){var i=r[o>>>2]>>>24-o%4*8&255;e.push((i>>>4).toString(16)),e.push((15&i).toString(16))}return e.join("")},parse:function(t){for(var r=t.length,n=[],e=0;e<r;e+=2)n[e>>>3]|=parseInt(t.substr(e,2),16)<<24-e%8*4;return new c.init(n,r/2)}},h=f.Latin1={stringify:function(t){for(var r=t.words,n=t.sigBytes,e=[],o=0;o<n;o++){var i=r[o>>>2]>>>24-o%4*8&255;e.push(String.fromCharCode(i))}return e.join("")},parse:function(t){for(var r=t.length,n=[],e=0;e<r;e++)n[e>>>2]|=(255&t.charCodeAt(e))<<24-e%4*8;return new c.init(n,r)}},p=f.Utf8={stringify:function(t){try{return decodeURIComponent(escape(h.stringify(t)))}catch(t){throw new Error("Malformed UTF-8 data")}},parse:function(t){return h.parse(unescape(encodeURIComponent(t)))}},v=a.BufferedBlockAlgorithm=u.extend({reset:function(){this._data=new c.init,this._nDataBytes=0},_append:function(t){"string"==typeof t&&(t=p.parse(t)),this._data.concat(t),this._nDataBytes+=t.sigBytes},_process:function(r){var n,e=this._data,o=e.words,i=e.sigBytes,a=this.blockSize,u=i/(4*a),f=(u=r?t.ceil(u):t.max((0|u)-this._minBufferSize,0))*a,s=t.min(4*f,i);if(f){for(var l=0;l<f;l+=a)this._doProcessBlock(o,l);n=o.splice(0,f),e.sigBytes-=s}return new c.init(n,s)},clone:function(){var t=u.clone.call(this);return t._data=this._data.clone(),t},_minBufferSize:0});a.Hasher=v.extend({cfg:u.extend(),init:function(t){this.cfg=this.cfg.extend(t),this.reset()},reset:function(){v.reset.call(this),this._doReset()},update:function(t){return this._append(t),this._process(),this},finalize:function(t){return t&&this._append(t),this._doFinalize()},blockSize:16,_createHelper:function(t){return function(r,n){return new t.init(n).finalize(r)}},_createHmacHelper:function(t){return function(r,n){return new y.HMAC.init(t,n).finalize(r)}}});var y=i.algo={};return i}(Math)})),nn=p((function(t,r){var n;t.exports=(n=rn,function(){var t=n,r=t.lib.WordArray;function e(t,n,e){for(var o=[],i=0,a=0;a<n;a++)if(a%4){var u=e[t.charCodeAt(a-1)]<<a%4*2|e[t.charCodeAt(a)]>>>6-a%4*2;o[i>>>2]|=u<<24-i%4*8,i++}return r.create(o,i)}t.enc.Base64={stringify:function(t){var r=t.words,n=t.sigBytes,e=this._map;t.clamp();for(var o=[],i=0;i<n;i+=3)for(var a=(r[i>>>2]>>>24-i%4*8&255)<<16|(r[i+1>>>2]>>>24-(i+1)%4*8&255)<<8|r[i+2>>>2]>>>24-(i+2)%4*8&255,u=0;u<4&&i+.75*u<n;u++)o.push(e.charAt(a>>>6*(3-u)&63));var c=e.charAt(64);if(c)for(;o.length%4;)o.push(c);return o.join("")},parse:function(t){var r=t.length,n=this._map,o=this._reverseMap;if(!o){o=this._reverseMap=[];for(var i=0;i<n.length;i++)o[n.charCodeAt(i)]=i}var a=n.charAt(64);if(a){var u=t.indexOf(a);-1!==u&&(r=u)}return e(t,r,o)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}}(),n.enc.Base64)})),en=p((function(t,r){var n;t.exports=(n=rn,function(){if("function"==typeof ArrayBuffer){var t=n.lib.WordArray,r=t.init;(t.init=function(t){if(t instanceof ArrayBuffer&&(t=new Uint8Array(t)),(t instanceof Int8Array||"undefined"!=typeof Uint8ClampedArray&&t instanceof Uint8ClampedArray||t instanceof Int16Array||t instanceof Uint16Array||t instanceof Int32Array||t instanceof Uint32Array||t instanceof Float32Array||t instanceof Float64Array)&&(t=new Uint8Array(t.buffer,t.byteOffset,t.byteLength)),t instanceof Uint8Array){for(var n=t.byteLength,e=[],o=0;o<n;o++)e[o>>>2]|=t[o]<<24-o%4*8;r.call(this,e,n)}else r.apply(this,arguments)}).prototype=t}}(),n.lib.WordArray)}));function on(t){return Kr(t)?en.create(t).toString(nn):""}function an(t){if(!Mr(t))return new Uint8Array;for(var r=nn.parse(t),n=r.words,e=r.sigBytes,o=new Uint8Array(e),i=0;i<e;i++){var a=n[i>>>2]>>>24-i%4*8&255;o[i]=a}return o}function un(t){return Qr(t)?on(function(t){return Qr(t)?new Uint8Array(t):new Uint8Array}(t)):""}function cn(t){return Mr(t)?function(t){return Kr(t)?new Uint16Array(t):new Uint16Array}(an(t)):new Uint16Array}var fn="[Uint8Array]::";var sn="[Uint16Array]::";var ln={tagU8A:fn,u8arr2b64:function(t){return Kr(t)?fn+on(t):t},b642u8arr:function(t){return Mr(t)&&Xr(t,fn.length)===fn?an(t=Zr(t,fn.length)):t},tagU16A:sn,u16arr2b64:function(t){return Qr(t)?sn+un(t):t},b642u16arr:function(t){return Mr(t)&&Xr(t,sn.length)===sn?cn(t=Zr(t,sn.length)):t}};function hn(t){return"[object Undefined]"===Object.prototype.toString.call(t)}function pn(t){return"[object Array]"===Object.prototype.toString.call(t)}function vn(t,r,n,e,o){var i=function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Uint8Array";if(hn(t))return"";if(Mr(r))r=[r];else if(!pn(r))return"";function n(t,n){return r.indexOf("Uint8Array")>=0&&(n=ln.u8arr2b64(n)),r.indexOf("Uint16Array")>=0&&(n=ln.u16arr2b64(n)),n}var e="";try{e=JSON.stringify(t,n)}catch(t){e=""}return e}(n),a=ur(i,r),u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:32,r=[];t=Vr(t)?Wr(t):32;for(var n=0;n<t;n++)r[n]=Jr[0|Math.random()*Yr];return r.join("")}(),c=a.length;Fr(a,(function(r,n){r=fr(r,"");var i="".concat(u,"|").concat(n,"|").concat(c,"|").concat(r);t.send(i,(function(t){t&&N(o)&&o(t)})),N(e)&&e((n+1)/c*100)}))}var yn=function(t,r,n){var e=t.length;return n=void 0===n?e:n,!r&&n>=e?t:$t(t,r,n)},dn=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");var gn=function(t){return dn.test(t)};var bn=function(t){return L(t)&&"[object RegExp]"==U(t)},mn=Ar&&Ar.isRegExp,wn=mn?jr(mn):bn;var _n=function(t){return t.split("")},jn="[\\ud800-\\udfff]",An="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",On="\\ud83c[\\udffb-\\udfff]",xn="[^\\ud800-\\udfff]",Sn="(?:\\ud83c[\\udde6-\\uddff]){2}",En="[\\ud800-\\udbff][\\udc00-\\udfff]",Un="(?:"+An+"|"+On+")"+"?",Ln="[\\ufe0e\\ufe0f]?",Bn=Ln+Un+("(?:\\u200d(?:"+[xn,Sn,En].join("|")+")"+Ln+Un+")*"),Tn="(?:"+[xn+An+"?",An,Sn,En,jn].join("|")+")",kn=RegExp(On+"(?="+On+")|"+Tn+Bn,"g");var Pn=function(t){return t.match(kn)||[]};var In=function(t){return gn(t)?Pn(t):_n(t)};var zn=function(t,r,n){return n&&"number"!=typeof n&&Wt(t,r,n)&&(r=n=void 0),(n=void 0===n?4294967295:n>>>0)?(t=Nt(t))&&("string"==typeof r||null!=r&&!wn(r))&&!(r=zt(r))&&gn(t)?yn(In(t),0,n):t.split(r,n):[]};var Nn=function(t,r,n){var e=null==t?0:t.length;return e?(r=n||void 0===r?1:or(r),$t(t,r<0?0:r,e)):[]},Fn=Math.ceil,Cn=Math.max;var Mn=function(t,r,n,e){for(var o=-1,i=Cn(Fn((r-t)/(n||1)),0),a=Array(i);i--;)a[e?i:++o]=t,t+=n;return a};var Rn=function(t){return function(r,n,e){return e&&"number"!=typeof e&&Wt(r,n,e)&&(n=e=void 0),r=er(r),void 0===n?(n=r,r=0):n=er(n),e=void 0===e?r<n?1:-1:er(e),Mn(r,n,e,t)}}();function $n(t,r){return n=t,"[object Object]"===Object.prototype.toString.call(n)&&(!(!Rr(r)&&!$r(r))&&r in t);var n}var Gn={};function Hn(t,r){var n=zn(t,"|"),e=n[0],o=rr(n[1]),i=rr(n[2]),a=fr(Nn(n,3),"|");if($n(Gn,e)||(Gn[e]={}),Gn[e]["_"+o]=a,o===i-1){var u="";Fr(Rn(i),(function(t){u+=Gn[e]["_"+t]})),delete Gn[e],r(function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Uint8Array";if(Mr(r))r=[r];else if(!pn(r))return{};function n(t,n){return r.indexOf("Uint8Array")>=0&&(n=ln.b642u8arr(n)),r.indexOf("Uint16Array")>=0&&(n=ln.b642u16arr(n)),n}var e={};try{e=JSON.parse(t,n)}catch(t){e={}}return e}(u))}}var qn=n.Server;return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.port||(t.port=8080),t.strSplitLength||(t.strSplitLength=1e6);var r,n=new u.default.EventEmitter;function e(t){for(var r=arguments.length,e=new Array(r>1?r-1:0),o=1;o<r;o++)e[o-1]=arguments[o];setTimeout((function(){n.emit.apply(n,[t].concat(e))}),1)}r=t.serverHapi?t.serverHapi:i.default.server({port:t.port,routes:{cors:!0}});var o=null;try{o=new qn(r.listener)}catch(t){return s("create SocketIO catch error",t),n}if(!o)return s("can not create SocketIO","io from SocketIO is null"),n;function c(){e("open")}function s(t,r){e("error",{msg:t,err:r})}function l(){e("clientChange",h)}c();var h=[];function p(){return y.apply(this,arguments)}function y(){return(y=f(v.mark((function t(){var n;return v.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.register(a.default);case 2:return n=[{method:"GET",path:"/{file*}",handler:{directory:{path:"./"}}}],r.route(n),t.next=6,r.start();case 6:console.log("Server running at: ".concat(r.info.uri));case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return o.on("connect",(function(r){function o(n,e){try{vn(r,t.strSplitLength,n,e,(function(t){s("can not send message",t)}))}catch(t){s("send message catch error",t)}}function i(t){var r=Rt(t,"_mode","");"execute"===r?e("execute",Rt(t,"func",""),Rt(t,"input"),(function(r){t.output=r,delete t.input,o(t,null)}),o):"broadcast"===r?e("broadcast",Rt(t,"data")):"deliver"===r?e("deliver",Rt(t,"data")):s("can not find _mode in data",t)}h.push(r.id),l(),r.sendData=o,r.on("message",(function(t){Hn(t,i)})),r.on("disconnect",(function(t){h=h.filter((function(t){return t!==r.id})),l()})),n.on("triggerBroadcast",(function(t,r){o({_mode:"broadcast",data:t},r)}))})),n.broadcast=function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};e("triggerBroadcast",t,r)},t.serverHapi||p(),n}}));
//# sourceMappingURL=w-conversi-server.umd.js.map
