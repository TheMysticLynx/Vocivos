!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/Vocivos/",n(n.s=2)}([function(t,e,n){t.exports=n(1)},function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(R){s=function(t,e,n){return t[e]=n}}function c(t,e,n,r){var o=e&&e.prototype instanceof y?e:y,i=Object.create(o.prototype),a=new L(r||[]);return i._invoke=function(t,e,n){var r=f;return function(o,i){if(r===h)throw new Error("Generator is already running");if(r===d){if("throw"===o)throw i;return O()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var u=E(a,n);if(u){if(u===m)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var s=l(t,e,n);if("normal"===s.type){if(r=n.done?d:p,s.arg===m)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=d,n.method="throw",n.arg=s.arg)}}}(t,n,a),i}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(R){return{type:"throw",arg:R}}}t.wrap=c;var f="suspendedStart",p="suspendedYield",h="executing",d="completed",m={};function y(){}function v(){}function b(){}var g={};g[i]=function(){return this};var k=Object.getPrototypeOf,x=k&&k(k(I([])));x&&x!==n&&r.call(x,i)&&(g=x);var w=b.prototype=y.prototype=Object.create(g);function S(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function P(t,e){function n(o,i,a,u){var s=l(t[o],t,i);if("throw"!==s.type){var c=s.arg,f=c.value;return f&&"object"===typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,a,u)}),(function(t){n("throw",t,a,u)})):e.resolve(f).then((function(t){c.value=t,a(c)}),(function(t){return n("throw",t,a,u)}))}u(s.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function E(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,E(t,n),"throw"===n.method))return m;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=l(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,m;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,m):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function M(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function A(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(M,this),this.reset(!0)}function I(t){if(t){var n=t[i];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:O}}function O(){return{value:e,done:!0}}return v.prototype=w.constructor=b,b.constructor=v,v.displayName=s(b,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,s(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},S(P.prototype),P.prototype[a]=function(){return this},t.AsyncIterator=P,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new P(c(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},S(w),s(w,u,"Generator"),w[i]=function(){return this},w.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=I,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(A),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return u.type="throw",u.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(s&&c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),A(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;A(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:I(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=r}catch(o){Function("r","regeneratorRuntime = r")(r)}},function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function o(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}function i(t){return function(t){if(Array.isArray(t))return r(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||o(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){var n;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=o(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,s=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return u=t.done,t},e:function(t){s=!0,a=t},f:function(){try{u||null==n.return||n.return()}finally{if(s)throw a}}}}n.r(e),n.d(e,"Automation",(function(){return Y}));var u=n(0),s=n.n(u);function c(t,e,n,r,o,i,a){try{var u=t[i](a),s=u.value}catch(c){return void n(c)}u.done?e(s):Promise.resolve(s).then(r,o)}function l(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){c(i,r,o,a,u,"next",t)}function u(t){c(i,r,o,a,u,"throw",t)}a(void 0)}))}}function f(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function h(t,e,n){return e&&p(t.prototype,e),n&&p(t,n),t}function d(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(s){o=!0,i=s}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}}(t,e)||o(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function y(t,e){return(y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function v(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function b(t,e,n){return(b=v()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&y(o,n.prototype),o}).apply(null,arguments)}var g=Symbol("Comlink.proxy"),k=Symbol("Comlink.endpoint"),x=Symbol("Comlink.releaseProxy"),w=Symbol("Comlink.thrown"),S=function(t){return"object"===typeof t&&null!==t||"function"===typeof t},P=new Map([["proxy",{canHandle:function(t){return S(t)&&t[g]},serialize:function(t){var e=new MessageChannel,n=e.port1,r=e.port2;return E(t,n),[r,[r]]},deserialize:function(t){return t.start(),L(t,[],e);var e}}],["throw",{canHandle:function(t){return S(t)&&w in t},serialize:function(t){var e=t.value;return[e instanceof Error?{isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:{isError:!1,value:e},[]]},deserialize:function(t){if(t.isError)throw Object.assign(new Error(t.value.message),t.value);throw t.value}}]]);function E(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:self;e.addEventListener("message",(function n(r){if(r&&r.data){var o,a=Object.assign({path:[]},r.data),u=a.id,s=a.type,c=a.path,l=(r.data.argumentList||[]).map(U);try{var f=c.slice(0,-1).reduce((function(t,e){return t[e]}),t),p=c.reduce((function(t,e){return t[e]}),t);switch(s){case 0:o=p;break;case 1:f[c.slice(-1)[0]]=U(r.data.value),o=!0;break;case 2:o=p.apply(f,l);break;case 3:var h;o=_(b(p,i(l)));break;case 4:var y=new MessageChannel,v=y.port1,g=y.port2;E(t,g),o=j(v,[v]);break;case 5:o=void 0}}catch(h){o=m({value:h},w,0)}Promise.resolve(o).catch((function(t){return m({value:t},w,0)})).then((function(t){var r=d(N(t),2),o=r[0],i=r[1];e.postMessage(Object.assign(Object.assign({},o),{id:u}),i),5===s&&(e.removeEventListener("message",n),M(e))}))}})),e.start&&e.start()}function M(t){(function(t){return"MessagePort"===t.constructor.name})(t)&&t.close()}function A(t){if(t)throw new Error("Proxy has been released and is not useable")}function L(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},r=!1,o=new Proxy(n,{get:function(n,a){if(A(r),a===x)return function(){return G(t,{type:5,path:e.map((function(t){return t.toString()}))}).then((function(){M(t),r=!0}))};if("then"===a){if(0===e.length)return{then:function(){return o}};var u=G(t,{type:0,path:e.map((function(t){return t.toString()}))}).then(U);return u.then.bind(u)}return L(t,[].concat(i(e),[a]))},set:function(n,o,a){A(r);var u=d(N(a),2),s=u[0],c=u[1];return G(t,{type:1,path:[].concat(i(e),[o]).map((function(t){return t.toString()})),value:s},c).then(U)},apply:function(n,o,i){A(r);var a=e[e.length-1];if(a===k)return G(t,{type:4}).then(U);if("bind"===a)return L(t,e.slice(0,-1));var u=d(I(i),2),s=u[0],c=u[1];return G(t,{type:2,path:e.map((function(t){return t.toString()})),argumentList:s},c).then(U)},construct:function(n,o){A(r);var i=d(I(o),2),a=i[0],u=i[1];return G(t,{type:3,path:e.map((function(t){return t.toString()})),argumentList:a},u).then(U)}});return o}function I(t){var e,n=t.map(N);return[n.map((function(t){return t[0]})),(e=n.map((function(t){return t[1]})),Array.prototype.concat.apply([],e))]}var O,R,T,F,C=new WeakMap;function j(t,e){return C.set(t,e),t}function _(t){return Object.assign(t,m({},g,!0))}function N(t){var e,n=a(P);try{for(n.s();!(e=n.n()).done;){var r=d(e.value,2),o=r[0],i=r[1];if(i.canHandle(t)){var u=d(i.serialize(t),2);return[{type:3,name:o,value:u[0]},u[1]]}}}catch(s){n.e(s)}finally{n.f()}return[{type:0,value:t},C.get(t)||[]]}function U(t){switch(t.type){case 3:return P.get(t.name).deserialize(t.value);case 0:return t.value}}function G(t,e,n){return new Promise((function(r){var o=new Array(4).fill(0).map((function(){return Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)})).join("-");t.addEventListener("message",(function e(n){n.data&&n.data.id&&n.data.id===o&&(t.removeEventListener("message",e),r(n.data))})),t.start&&t.start(),t.postMessage(Object.assign({id:o},e),n)}))}function D(t){return(D=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function B(t){return(B="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function q(t,e){return!e||"object"!==B(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function W(t){var e="function"===typeof Map?new Map:void 0;return(W=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!==typeof t)throw new TypeError("Super expression must either be null or a function");if("undefined"!==typeof e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return b(t,arguments,D(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),y(r,t)})(t)}!function(t){t.Startup="STARTUP"}(O||(O={})),function(t){t.Planet="PLANET",t.Moon="MOON",t.GasGiant="GAS_GIANT",t.Asteroid="ASTEROID",t.Wormhole="WORMHOLE",t.Nebula="NEBULA"}(R||(R={})),function(t){t.BiometricFirearms="BIOMETRIC_FIREARMS",t.Chemicals="CHEMICALS",t.Construction="CONSTRUCTION_MATERIALS",t.Consumer="CONSUMER_GOODS",t.Electronics="ELECTRONICS",t.ExoticPlasma="EXOTIC PLASMA",t.Explosives="EXPLOSIVES",t.Food="FOOD",t.Fuel="FUEL",t.FusionReactors="FUSION_REACTORS",t.Machinery="MACHINERY",t.Metals="METALS",t.Nanobots="NANOTBOTS",t.Narcotics="NARCOTICS",t.PrecisionInstruments="PRECISION_INSTRUMENTS",t.ProteinSynthesizers="PROTEIN_SYNTHESIZERS",t.RareMetals="RARE_METALS",t.Research="RESEARCH",t.ShipParts="SHIP_PARTS",t.ShipPlating="SHIP_PLATING",t.Textiles="TEXTILES",t.UnstableCompounds="UNSTABLE_COMPOUNDS",t.Drones="DRONES"}(T||(T={})),function(t){t.Current="CURRENT",t.Paid="PAID",t.PaidLate="PAID_LATE"}(F||(F={}));var H,K,z=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&y(t,e)}(n,t);var e=function(t){var e=v();return function(){var n,r=D(t);if(e){var o=D(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return q(this,n)}}(n);function n(t){var r;return f(this,n),(r=e.call(this)).expected=void 0,r.timeout=void 0,r.completedEvent=new Event("complete"),r.interval=500,r.targetTime=void 0,r.targetTime=t,r}return h(n,[{key:"stop",value:function(){clearTimeout(this.timeout)}},{key:"step",value:function(){var t=Date.now()-this.expected;if(this.interval,new Date>=new Date(this.targetTime))return this.dispatchEvent(this.completedEvent),void this.stop();this.expected+=this.interval,this.timeout=setTimeout(this.step.bind(this),Math.max(0,this.interval-t))}},{key:"start",value:function(){this.expected=Date.now()+this.interval,this.timeout=setTimeout(this.step.bind(this),this.interval)}}]),n}(W(EventTarget));!function(t){t[t.Buy=0]="Buy",t[t.Sell=1]="Sell",t[t.CreateFlightPlan=2]="CreateFlightPlan",t[t.MarketData=3]="MarketData",t[t.BuyShip=4]="BuyShip",t[t.RemoveFlightPlan=5]="RemoveFlightPlan",t[t.GetFlightPlan=6]="GetFlightPlan",t[t.UpdateShip=7]="UpdateShip"}(H||(H={})),function(t){t[t.Trade=0]="Trade",t[t.Scout=1]="Scout"}(K||(K={}));var Y=function(){function t(e,n,r){f(this,t),this.automationGetStore=void 0,this.automationWorkerMakeApiCall=void 0,this.errorCallback=void 0,this.markets=[],this.credits=0,this.ships=[],this.spyShips=[],this.systems=[],this.enabled=!1,this.dispatched=[],this.marketUpdateTime=6e5,this.wait=function(t){return new Promise((function(e){return setTimeout(e,t)}))},this.automationGetStore=e,this.automationWorkerMakeApiCall=n,this.errorCallback=r}return h(t,[{key:"stop",value:function(){this.enabled=!1}},{key:"start",value:function(){var t=l(s.a.mark((function t(){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.automationGetStore();case 2:e=t.sent,this.markets=e.marketData,this.credits=e.user.credits,this.ships=e.user.ships,this.systems=e.systems,this.spyShips=e.spyShips,this.dispatched=[],this.enabled=!0,this.initialize();case 11:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"updateState",value:function(t){var e=this.ships;if(this.ships=t.user.ships,this.spyShips=t.spyShips,e.length!==t.user.ships.length){var n,r=a(t.user.ships.filter((function(t){return!e.some((function(e){return e.id===t.id}))})));try{for(r.s();!(n=r.n()).done;){var o=n.value;this.dispatch(o.id)}}catch(i){r.e(i)}finally{r.f()}}}},{key:"fuelPenalty",value:function(e){var n,r;if("PLANET"!==(null===(n=this.systems.find((function(n){return n.symbol===t.getSystemSymbolFromLocation(e.location)})))||void 0===n||null===(r=n.locations.find((function(t){return t.symbol===e.location})))||void 0===r?void 0:r.type))return 0;switch(e.type){case"ZA-MK-II":case"ZA-MK-III":case"EM-MK-II":case"HM-MK-II":case"HM-MK-I":return 1;case"GR-MK-I":case"EM-MK-I":case"JW-MK-I":case"HM-MK-III":return 2;case"GR-MK-II":return 3;case"GR-MK-III":return 4;default:return 0}}},{key:"BestTradeRoutes",value:function(){var e=l(s.a.mark((function e(n){var r,o,a,u,c,l,f=this;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(r=[],o=Array.from(new Set(this.ships.map((function(t){return t.location})))),a=Array.from(new Set(o.map((function(e){return t.getSystemSymbolFromLocation(e)})))),u=function(){for(var e=l[c],o=[],a=function(){var r=s[u];if(r===T.Research||r===T.Fuel)return"continue";var a=i(f.markets).filter((function(n){return t.getSystemSymbolFromLocation(n.planet.symbol)===e&&n.planet.marketplace.find((function(t){return t.symbol===r}))}));if(a.length<=1)return"continue";for(var c=0;c<a.length;c+=1)for(var l=a[c],p=0;p<a.length;p+=1)if(a[p].planet!==l.planet){var h,d,m,y=(null===(h=a[p].planet.marketplace.find((function(t){return t.symbol===r})))||void 0===h?void 0:h.sellPricePerUnit)-(null===(d=l.planet.marketplace.find((function(t){return t.symbol===r})))||void 0===d?void 0:d.purchasePricePerUnit),v=t.distanceBetween(l.planet,a[p].planet),b=Math.round(v*(2/n.speed))+60,g=t.fuelRequired(l.planet,a[p].planet),k=y*(n.maxCargo-g)/b/(null===(m=l.planet.marketplace.find((function(t){return t.symbol===r})))||void 0===m?void 0:m.volumePerUnit),x=l.updatedAt>a[p].updatedAt?l.updatedAt:a[p].updatedAt;if(k<=0)continue;var w=o.find((function(t){return t.good===r}));w&&w.cpdv<k?o[o.findIndex((function(t){return t.good===r}))]={good:r,from:l.planet.symbol,to:a[p].planet.symbol,fuelRequired:g,cpdv:k,lastUpdated:x}:w||o.push({good:r,from:l.planet.symbol,to:a[p].planet.symbol,fuelRequired:g,cpdv:k,lastUpdated:x})}},u=0,s=Object.values(T);u<s.length;u++)a();r.push({system:e,routes:o.sort((function(t,e){return t.cpdv<e.cpdv?1:e.cpdv<t.cpdv?-1:0}))})},c=0,l=a;c<l.length;c++)u();return e.abrupt("return",r);case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getBestRoute",value:function(){var e=l(s.a.mark((function e(n){var r,o,i,a,u,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.location){e.next=2;break}return e.abrupt("return",null);case 2:return e.next=4,this.BestTradeRoutes(n);case 4:if((r=e.sent)&&0!==r.length){e.next=7;break}return e.abrupt("return",null);case 7:if(o=r.find((function(e){return e.system===t.getSystemSymbolFromLocation(n.location)}))){e.next=10;break}return e.abrupt("return",null);case 10:if(i=o.routes,!i.find((function(t){return t.from===i[0].to}))){e.next=14;break}return e.abrupt("return",i[0]);case 14:a=1;case 15:if(!(a<i.length)){e.next=23;break}if(u=i[a],!((c=this.getBestRouteFromLocationToLocation(u.to,u.from,n))&&u.cpdv+c.cpdv>i[0].cpdv)){e.next=20;break}return e.abrupt("return",u);case 20:a+=1,e.next=15;break;case 23:return e.abrupt("return",i[0]);case 24:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getBestRouteFromLocationToLocation",value:function(e,n,r){var o,u,s=i(this.markets).find((function(t){return t.planet.symbol===e})),c=i(this.markets).find((function(t){return t.planet.symbol===n}));if(!s||!c)return null;var l=s.planet.marketplace.filter((function(t){return c.planet.marketplace.some((function(e){return e.symbol===t.symbol}))}));if(l.length<=0)return null;var f,p=null===(o=this.systems.find((function(n){return n.symbol===t.getSystemSymbolFromLocation(e)})))||void 0===o?void 0:o.locations.find((function(t){return t.symbol===e})),h=null===(u=this.systems.find((function(e){return e.symbol===t.getSystemSymbolFromLocation(n)})))||void 0===u?void 0:u.locations.find((function(t){return t.symbol===n})),d=[],m=a(l);try{var y=function(){var o=f.value;if(o.symbol!==T.Fuel&&o.symbol!==T.Research){var i,a,u,l=(null===(i=c.planet.marketplace.find((function(t){return t.symbol===o.symbol})))||void 0===i?void 0:i.sellPricePerUnit)-(null===(a=s.planet.marketplace.find((function(t){return t.symbol===o.symbol})))||void 0===a?void 0:a.purchasePricePerUnit),m=t.distanceBetween(p,h),y=Math.round(m*(2/r.speed))+60,v=t.fuelRequired(p,h),b=l*(r.maxCargo-v)/y/(null===(u=s.planet.marketplace.find((function(t){return t.symbol===o.symbol})))||void 0===u?void 0:u.volumePerUnit),g=s.updatedAt>c.updatedAt?s.updatedAt:c.updatedAt;b>0&&d.push({good:o.symbol,from:e,to:n,fuelRequired:v,cpdv:b,lastUpdated:g})}};for(m.s();!(f=m.n()).done;)y()}catch(v){m.e(v)}finally{m.f()}return 0===d.length?null:d.reduce((function(t,e){return e.cpdv>t.cpdv?e:t}))}},{key:"updateMarketData",value:function(){var t=l(s.a.mark((function t(e){var n,r,o,i,a=arguments;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=a.length>1&&void 0!==a[1]&&a[1],o=null===(n=this.markets)||void 0===n?void 0:n.find((function(t){return t.planet.symbol===e})),!this.ships.some((function(t){return t.location===e}))||!r&&this.markets&&o&&!(Date.now()-o.updatedAt>this.marketUpdateTime)){t.next=8;break}return t.next=6,this.automationWorkerMakeApiCall(H.MarketData,{location:e});case 6:i=t.sent,this.markets.some((function(t){return t.planet.symbol===e}))?this.markets=this.markets.map((function(t){return t.planet.symbol===e?{updatedAt:Date.now(),planet:i.location}:t})):this.markets.push({updatedAt:Date.now(),planet:i.location});case 8:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"buyFuel",value:function(){var e=l(s.a.mark((function e(n,r){var o,i,u,c,l,f,p,h,d,m,y,v,b,g,k,x,w,S,P,E,M;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(h=null===(o=this.systems.find((function(e){return e.symbol===t.getSystemSymbolFromLocation(r.from)})))||void 0===o?void 0:o.locations.find((function(t){return t.symbol===r.from})),d=null===(i=this.systems.find((function(e){return e.symbol===t.getSystemSymbolFromLocation(r.to)})))||void 0===i?void 0:i.locations.find((function(t){return t.symbol===r.to})),m=t.fuelRequired(h,d)+this.fuelPenalty(n),(y=null===(u=this.markets.find((function(t){return t.planet.symbol===d.symbol})))||void 0===u||null===(c=u.planet.marketplace.find((function(t){return t.symbol===T.Fuel})))||void 0===c?void 0:c.quantityAvailable)&&!(y&&y<100)){e.next=29;break}v=this.systems.find((function(e){return e.symbol===t.getSystemSymbolFromLocation(n.location)})),b=v.locations.find((function(t){return t.symbol===d.symbol})),g=[],k=a(v.locations),e.prev=9,k.s();case 11:if((x=k.n()).done){e.next=19;break}if((w=x.value).type!==R.Wormhole&&w.symbol!==d.symbol){e.next=15;break}return e.abrupt("continue",17);case 15:S=t.distanceBetween(b,w),g.push({body:w,distance:S});case 17:e.next=11;break;case 19:e.next=24;break;case 21:e.prev=21,e.t0=e.catch(9),k.e(e.t0);case 24:return e.prev=24,k.f(),e.finish(24);case 27:P=g.sort((function(t,e){return t.distance<e.distance?1:e.distance<t.distance?-1:0}))[0],m+=t.fuelRequired(d,P.body)+this.fuelPenalty(n);case 29:if((E=null===(l=n.cargo.find((function(t){return t.good===T.Fuel})))||void 0===l?void 0:l.quantity)&&E>0&&(m-=E),!(m<=0)){e.next=33;break}return e.abrupt("return",0);case 33:if((M=null===(f=this.markets.find((function(t){return t.planet.symbol===h.symbol})))||void 0===f||null===(p=f.planet.marketplace.find((function(t){return t.symbol===T.Fuel})))||void 0===p?void 0:p.quantityAvailable)&&!(M<=m)){e.next=36;break}return e.abrupt("return",0);case 36:return e.next=38,this.buyMarketGood(n.id,T.Fuel,m);case 38:return e.abrupt("return",m);case 39:case"end":return e.stop()}}),e,this,[[9,21,24,27]])})));return function(t,n){return e.apply(this,arguments)}}()},{key:"createFlightPlan",value:function(){var t=l(s.a.mark((function t(e,n,r){var o,i,a,u,c,f=this;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.automationWorkerMakeApiCall(H.CreateFlightPlan,{shipId:e.id,to:n.to});case 2:o=t.sent,(i=this.ships.findIndex((function(t){return t.id===o.flightPlan.shipId})))&&(this.ships[i].location=void 0,this.ships[i].flightPlanId=o.flightPlan.id,this.ships[i].spaceAvailable+=o.flightPlan.fuelConsumed,(a=e.cargo.find((function(t){return t.good===T.Fuel})))&&o.flightPlan.fuelRemaining>0?a.quantity=o.flightPlan.fuelRemaining:a&&0===o.flightPlan.fuelRemaining&&e.cargo.splice(e.cargo.findIndex((function(t){return t.good===T.Fuel})),1)),this.dispatched.push({shipId:e.id,action:r,route:n}),(u=new z(o.flightPlan.arrivesAt)).start(),c=function(){var t=l(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u.removeEventListener("complete",c),t.next=3,f.doRouteCompleted(e.id,o.flightPlan);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),u.addEventListener("complete",c);case 10:case"end":return t.stop()}}),t,this)})));return function(e,n,r){return t.apply(this,arguments)}}()},{key:"buyMarketGood",value:function(){var t=l(s.a.mark((function t(e,n,r){var o,i,a=this;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r&&!(r<=0)){t.next=2;break}return t.abrupt("return");case 2:o=r,i=s.a.mark((function t(){var r,i,u,c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.automationWorkerMakeApiCall(H.Buy,{shipId:e,good:n,quantity:o>500?500:o});case 2:r=t.sent,i=a.ships.findIndex((function(t){return t.id===r.ship.id})),a.ships[i]=r.ship,a.credits=r.credits,(u=a.markets.find((function(t){return t.planet.symbol===r.ship.location})))&&(c=u.planet.marketplace.find((function(t){return t.symbol===r.order.good})))&&(c.purchasePricePerUnit=r.order.pricePerUnit),o-=500;case 9:case"end":return t.stop()}}),t)}));case 4:if(!(o>0)){t.next=8;break}return t.delegateYield(i(),"t0",6);case 6:t.next=4;break;case 8:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()},{key:"shouldScout",value:function(e){var n,r=this,o=(null===(n=this.systems.find((function(t){return t.symbol===e})))||void 0===n?void 0:n.locations).filter((function(t){return!r.markets.some((function(e){return e.planet.symbol===t.symbol}))&&t.type!==R.Wormhole&&!r.dispatched.some((function(e){return e.route.to===t.symbol}))})).map((function(t){return t.symbol})),a=i(this.markets).filter((function(n){var o,i=(Date.now()-n.updatedAt)/6e5,a=r.ships.length/50;return Math.pow(Math.E,a*i*-1)<.37&&!r.ships.some((function(t){return t.location===n.planet.symbol}))&&t.getSystemSymbolFromLocation(n.planet.symbol)===e&&n.planet.symbol!==(null===(o=r.dispatched.find((function(t){return t.route.to===n.planet.symbol})))||void 0===o?void 0:o.route.to)&&n.planet.type!==R.Wormhole})).map((function(t){return t.planet.symbol}));return o.push.apply(o,i(a)),o}},{key:"sellMarketGood",value:function(){var t=l(s.a.mark((function t(e,n,r){var o,i,a=this;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o=r,i=s.a.mark((function t(){var r,i,u,c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.automationWorkerMakeApiCall(H.Sell,{shipId:e,good:n,quantity:o>500?500:o});case 2:r=t.sent,i=a.ships.findIndex((function(t){return t.id===r.ship.id})),a.ships[i]=r.ship,a.credits=r.credits,(u=a.markets.find((function(t){return t.planet.symbol===r.ship.location})))&&(c=u.planet.marketplace.find((function(t){return t.symbol===r.order.good})))&&(c.sellPricePerUnit=r.order.pricePerUnit),o-=500;case 9:case"end":return t.stop()}}),t)}));case 2:if(!(o>0)){t.next=6;break}return t.delegateYield(i(),"t0",4);case 4:t.next=2;break;case 6:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()},{key:"doRouteCompleted",value:function(){var t=l(s.a.mark((function t(e,n){var r,o,i,u,c,l=arguments;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=l.length>2&&void 0!==l[2]?l[2]:0,t.next=3,this.automationWorkerMakeApiCall(H.RemoveFlightPlan,{flightPlan:n});case 3:if((o=this.ships.find((function(t){return t.id===e})))&&!this.spyShips.some((function(t){return t.id===o.id}))){t.next=6;break}return t.abrupt("return");case 6:return t.next=8,this.automationWorkerMakeApiCall(H.GetFlightPlan,{shipId:n.id});case 8:if(t.sent.flightPlan.terminatedAt||!(r<5)){t.next=14;break}return console.log("Ship has not yet arrived at destination. Waiting"),this.wait(1e3+1e3*r),t.next=14,this.doRouteCompleted(e,n,r+1);case 14:if(!(o.cargo.filter((function(t){return t.good!==T.Fuel})).length>0)){t.next=35;break}i=a(o.cargo),t.prev=16,i.s();case 18:if((u=i.n()).done){t.next=25;break}if((c=u.value).good===T.Fuel){t.next=23;break}return t.next=23,this.sellMarketGood(e,c.good,c.quantity);case 23:t.next=18;break;case 25:t.next=30;break;case 27:t.prev=27,t.t0=t.catch(16),i.e(t.t0);case 30:return t.prev=30,i.f(),t.finish(30);case 33:t.next=36;break;case 35:o.location=n.destination;case 36:if(!this.enabled){t.next=39;break}return t.next=39,this.dispatch(o.id);case 39:case"end":return t.stop()}}),t,this,[[16,27,30,33]])})));return function(e,n){return t.apply(this,arguments)}}()},{key:"dispatch",value:function(){var e=l(s.a.mark((function e(n){var r,o,i,a,u,c,l,f,p,h,d,m,y,v,b,g=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=g.length>1&&void 0!==g[1]?g[1]:0,e.prev=1,(o=this.ships.find((function(t){return t.id===n})))&&this.enabled){e.next=5;break}return e.abrupt("return");case 5:if(o.location){e.next=8;break}return console.log("Ship has no location"),e.abrupt("return");case 8:return e.next=10,this.updateMarketData(o.location);case 10:if(!((i=this.shouldScout(t.getSystemSymbolFromLocation(o.location)))&&i.length>0)){e.next=22;break}if(o.location!==i[0]){e.next=15;break}return e.next=15,this.updateMarketData(o.location,!0);case 15:if(this.ships.some((function(t){return t.location===i[0]}))){e.next=22;break}return a={from:o.location,to:i[0]},e.next=19,this.buyFuel(o,a);case 19:return e.next=21,this.createFlightPlan(o,a,K.Scout);case 21:return e.abrupt("return");case 22:return e.next=24,this.getBestRoute(o);case 24:if(!(u=e.sent)){e.next=66;break}if(null===(c=this.systems.find((function(e){return e.symbol===t.getSystemSymbolFromLocation(o.location)})))||void 0===c?void 0:c.locations.find((function(t){return t.symbol===o.location}))){e.next=29;break}return e.abrupt("return");case 29:if(!(Date.now()-u.lastUpdated>this.marketUpdateTime)){e.next=36;break}return f={from:o.location,to:u.from},e.next=33,this.buyFuel(o,f);case 33:return e.next=35,this.createFlightPlan(o,f,K.Scout);case 35:return e.abrupt("return");case 36:if(o.location===u.from){e.next=53;break}return e.next=39,this.buyFuel(o,{from:o.location,to:u.from});case 39:if(p=e.sent,!(h=this.getBestRouteFromLocationToLocation(o.location,u.from,o))){e.next=50;break}if(!((m=this.getMaxQuantity(null===(d=this.markets.find((function(t){return t.planet.symbol===o.location})))||void 0===d?void 0:d.planet.marketplace.find((function(t){return t.symbol===h.good})),o)-p)>0)){e.next=48;break}return e.next=46,this.buyMarketGood(o.id,h.good,m);case 46:return e.next=48,this.createFlightPlan(o,h,K.Trade);case 48:e.next=52;break;case 50:return e.next=52,this.createFlightPlan(o,{from:o.location,to:u.from},K.Scout);case 52:return e.abrupt("return");case 53:return e.next=55,this.buyFuel(o,u);case 55:if(y=e.sent,!((v=this.getMaxQuantity(null===(l=this.markets.find((function(t){return t.planet.symbol===u.from})))||void 0===l?void 0:l.planet.marketplace.find((function(t){return t.symbol===u.good})),o)-y)>0)){e.next=63;break}return e.next=60,this.buyMarketGood(o.id,null===u||void 0===u?void 0:u.good,v);case 60:return e.next=62,this.createFlightPlan(o,u,K.Trade);case 62:return e.abrupt("return");case 63:return e.next=65,this.createFlightPlan(o,u,K.Trade);case 65:return e.abrupt("return");case 66:console.log("Not best route found"),e.next=88;break;case 69:if(e.prev=69,e.t0=e.catch(1),e.prev=71,0!==r){e.next=80;break}return e.next=75,this.automationWorkerMakeApiCall(H.UpdateShip,{shipId:n});case 75:b=e.sent,this.ships[this.ships.findIndex((function(t){return t.id===n}))]=b,this.dispatch(n,1),e.next=82;break;case 80:this.enabled=!1,this.errorCallback("Error dispatching ship: ".concat(JSON.stringify(n),", Error: ").concat(e.t0.message));case 82:e.next=88;break;case 84:e.prev=84,e.t1=e.catch(71),this.enabled=!1,this.errorCallback("Error dispatching ship: ".concat(JSON.stringify(n),", Error: ").concat(e.t1.message));case 88:case"end":return e.stop()}}),e,this,[[1,69],[71,84]])})));return function(t){return e.apply(this,arguments)}}()},{key:"createSpyTimer",value:function(){var t=l(s.a.mark((function t(){var e,n,r,o,i,u=this;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=a(this.spyShips),t.prev=1,e.s();case 3:if((n=e.n()).done){t.next=10;break}if(!(r=n.value).location){t.next=8;break}return t.next=8,this.updateMarketData(r.location,!0);case 8:t.next=3;break;case 10:t.next=15;break;case 12:t.prev=12,t.t0=t.catch(1),e.e(t.t0);case 15:return t.prev=15,e.f(),t.finish(15);case 18:(o=new z(new Date(Date.now()+12e4))).start(),i=function t(){o.removeEventListener("complete",t),u.createSpyTimer()},o.addEventListener("complete",i);case 22:case"end":return t.stop()}}),t,this,[[1,12,15,18]])})));return function(){return t.apply(this,arguments)}}()},{key:"initialize",value:function(){var t=l(s.a.mark((function t(){var e,n,r,o,i,u,c=this;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=a(this.systems),t.prev=1,r=s.a.mark((function t(){var e,r,o,i,a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=n.value,t.prev=1,r=e.locations.filter((function(t){return t.type!==R.Wormhole&&!c.spyShips.some((function(e){return e.location===t.symbol}))})),o=c.spyShips.filter((function(t,n,r){var o;return(null===(o=t.location)||void 0===o?void 0:o.split("-")[0])===e.symbol&&r.findIndex((function(e){return e.location===t.location}))!==n})),i=0;case 5:if(!(i<r.length)){t.next=15;break}if(!o[i]){t.next=12;break}return a={from:o[i].location,to:r[i].symbol},t.next=10,c.buyFuel(o[i],a);case 10:return t.next=12,c.createFlightPlan(o[i],a,K.Scout);case 12:i+=1,t.next=5;break;case 15:t.next=21;break;case 17:t.prev=17,t.t0=t.catch(1),c.enabled=!1,c.errorCallback("Error dispatching spy ship. Error: ".concat(t.t0.message));case 21:case"end":return t.stop()}}),t,null,[[1,17]])})),e.s();case 4:if((n=e.n()).done){t.next=8;break}return t.delegateYield(r(),"t0",6);case 6:t.next=4;break;case 8:t.next=13;break;case 10:t.prev=10,t.t1=t.catch(1),e.e(t.t1);case 13:return t.prev=13,e.f(),t.finish(13);case 16:this.createSpyTimer(),o=a(this.ships.sort((function(t,e){return t.speed<e.speed?1:e.speed<t.speed?-1:0}))),t.prev=18,u=s.a.mark((function t(){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=i.value,c.spyShips.some((function(t){return t.id===e.id}))){t.next=4;break}return t.next=4,c.dispatch(e.id);case 4:case"end":return t.stop()}}),t)})),o.s();case 21:if((i=o.n()).done){t.next=25;break}return t.delegateYield(u(),"t2",23);case 23:t.next=21;break;case 25:t.next=30;break;case 27:t.prev=27,t.t3=t.catch(18),o.e(t.t3);case 30:return t.prev=30,o.f(),t.finish(30);case 33:case"end":return t.stop()}}),t,this,[[1,10,13,16],[18,27,30,33]])})));return function(){return t.apply(this,arguments)}}()},{key:"getMaxQuantity",value:function(t,e){var n=Math.floor(e.spaceAvailable/t.volumePerUnit);return n*t.pricePerUnit<this.credits&&n<=t.quantityAvailable?n:n>t.quantityAvailable?t.quantityAvailable:Math.floor(this.credits/t.pricePerUnit)}}],[{key:"getSystemSymbolFromLocation",value:function(t){return t?t.split("-")[0]:""}},{key:"distanceBetween",value:function(t,e){return Math.ceil(Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2)))}},{key:"fuelRequired",value:function(e,n){return Math.round(t.distanceBetween(n,e)/4)+1}},{key:"getBestRouteFromLocation",value:function(t,e){var n=i(e).filter((function(e){return e.from===t}));return void 0===n||0===n.length?null:n.reduce((function(t,e){return e.cpdv>t.cpdv?e:t}))}}]),t}();E(Y)}]);
//# sourceMappingURL=automation.worker.js.map