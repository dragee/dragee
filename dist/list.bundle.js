!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("Dragee",[],e):"object"==typeof exports?exports.Dragee=e():t.Dragee=e()}(window,(function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=14)}([function(t,e,n){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n.d(e,"a",(function(){return r}));var r=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=e,this.y=n}var e,n,r;return e=t,(n=[{key:"add",value:function(e){return new t(this.x+e.x,this.y+e.y)}},{key:"sub",value:function(e){return new t(this.x-e.x,this.y-e.y)}},{key:"mult",value:function(e){return new t(this.x*e,this.y*e)}},{key:"negative",value:function(){return new t(-this.x,-this.y)}},{key:"compare",value:function(t){return this.x===t.x&&this.y===t.y}},{key:"clone",value:function(){return new t(this.x,this.y)}},{key:"toString",value:function(){return"{x=".concat(this.x,",y=").concat(this.y)}}])&&i(e.prototype,n),r&&i(e,r),t}()},function(t,e,n){"use strict";n.d(e,"e",(function(){return o})),n.d(e,"i",(function(){return a})),n.d(e,"j",(function(){return s})),n.d(e,"l",(function(){return u})),n.d(e,"k",(function(){return c})),n.d(e,"d",(function(){return f})),n.d(e,"b",(function(){return h})),n.d(e,"g",(function(){return l})),n.d(e,"c",(function(){return g})),n.d(e,"h",(function(){return p})),n.d(e,"f",(function(){return y})),n.d(e,"a",(function(){return v}));var i=n(0),r=n(9);function o(t,e){var n=t.x-e.x,i=t.y-e.y;return Math.sqrt(n*n+i*i)}function a(t,e){return Math.abs(t.x-e.x)}function s(t,e){return Math.abs(t.y-e.y)}function u(t){return function(e,n){return Math.sqrt(Math.pow(t.x*Math.abs(e.x-n.x),2)+Math.pow(t.y*Math.abs(e.y-n.y),2))}}function c(t,e,n,i){var r,a,s,u=0;if(i=i||o,0===t.length)return-1;for(r=i(t[0],e),a=0;a<t.length;a++)(s=i(t[a],e))<r&&(r=s,u=a);return n>=0&&r>n?-1:u}function f(t,e,n,r){var o,a,s,u,c,f,h;return n.x===r.x&&(o=n,n=t,t=o,o=r,r=e,e=o),t.x===e.x?(s=(r.y-n.y)/(r.x-n.x),c=(r.x*n.y-n.x*r.y)/(r.x-n.x),h=(f=t.x)*s+c,new i.a(f,h)):(a=(e.y-t.y)/(e.x-t.x),u=(e.x*t.y-t.x*e.y)/(e.x-t.x),s=(r.y-n.y)/(r.x-n.x),h=(f=(u-(c=(r.x*n.y-n.x*r.y)/(r.x-n.x)))/(s-a))*a+u,new i.a(f,h))}function h(t,e,n){var r=new i.a(n.x-t.x,n.y-t.y),o=new i.a(e.x-t.x,e.y-t.y),a=o.x*o.x+o.y*o.y,s=(r.x*o.x+r.y*o.y)/a;return new i.a(t.x+o.x*s,t.y+o.y*s)}function l(t,e,n){var r=e.x-t.x,a=e.y-t.y,s=n/o(t,e);return new i.a(t.x+s*r,t.y+s*a)}function g(t,e,n,i){var o=p(t,n);return new r.a(y(t,e||t.parentNode),o)}function d(t,e){return e.reduce((function(e,n){return e+parseInt(window.getComputedStyle(t)[n]||0)}),0)}function p(t,e){var n=parseInt(window.getComputedStyle(t).width),r=parseInt(window.getComputedStyle(t).height);return e||(n+=d(t,["padding-left","padding-right","border-left-width","border-right-width"]),r+=d(t,["padding-top","padding-bottom","border-top-width","border-bottom-width"])),new i.a(n,r)}function y(t,e){var n=t.getBoundingClientRect(),r=e.getBoundingClientRect();return new i.a(n.left-r.left,n.top-r.top)}function v(t,e,n){for(var i=t.filter((function(t){return t.y>e.y||(n?t.x<e.x:t.x>e.x)})),r=0;r<i.length;r++)if(e.y<i[r].y)return i.splice(r,0,e),i;return i.push(e),i}},function(t,e,n){"use strict";function i(t,e){(function(t,e){return new RegExp("(^|\\s)"+e+"(\\s|$)","g").test(t.className)})(t,e)||(t.className=(t.className+" "+e).replace(/\s+/g," ").replace(/(^ | $)/g,""))}function r(t,e){var n=new RegExp("(^|\\s)"+e+"(\\s|$)","g");t.className=t.className.replace(n,"$1").replace(/\s+/g," ").replace(/(^ | $)/g,"")}n.r(e);var o=n(10),a=n(3),s=n(11),u=n.n(s),c=n(7),f=n(0),h=n(9),l=n(1),g=n(6);function d(t){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function v(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function b(t,e){return(b=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}n.d(e,"Draggable",(function(){return D})),n.d(e,"events",(function(){return O}));var m="ontouchstart"in window,x={start:"mousedown",move:"mousemove",end:"mouseup"},w={start:"touchstart",move:"touchmove",end:"touchend"},O=m?w:x,P=[],E=u()("transform"),k=u()("transition");function S(t,e){for(var n=0;n<t.changedTouches.length;n++)if(t.changedTouches[n].identifier===e)return t.changedTouches[n];return!1}var D=function(t){function e(t){var n,i,r,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),i=this,n=!(r=y(e).call(this,void 0,a))||"object"!==d(r)&&"function"!=typeof r?v(i):r;var s=a.parent||Object(o.a)(t);return n.targets=[],n.options=Object.assign({parent:s,bound:Object(c.c)(s,s),startFilter:!1,isContentBoxSize:!1,position:!1},a),"string"==typeof a.handler?n.handler=t.querySelector(a.handler)||t:n.handler=a.handler||t,n.element=t,n.bound=n.options.bound,function(t){if(P.some((function(e){return t.element===e.element})))throw"for this element Dragee.Draggable is already exist, don't create it twice ";P.push(t)}(v(n)),e.emitter.emit("draggable:create",v(n)),n.init(),n}var n,a,s;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&b(t,e)}(e,t),n=e,(a=[{key:"init",value:function(){this._enable=!0,this.offset=Object(l.f)(this.element,this.options.parent,!0),this.fixPosition=this.offset,this.position=this.offset,this.options.position?(this.initPosition=this.options.position,this.move(this.initPosition,0,!0,!0)):this.initPosition=this.offset,this._dragStart=this.dragStart.bind(this),this._dragMove=this.dragMove.bind(this),this._dragEnd=this.dragEnd.bind(this),this.handler.addEventListener(w.start,this._dragStart),this.handler.addEventListener(x.start,this._dragStart),this.bound.refresh&&this.bound.refresh()}},{key:"reinit",value:function(){this.offset=Object(l.f)(this.element,this.options.parent,!0),this.fixPosition=this.offset,this.position=this.offset,this.options.position?(this.initPosition=this.options.position,this.move(this.initPosition,0,!0,!0)):this.initPosition=this.offset,this.bound.refresh&&this.bound.refresh()}},{key:"getSize",value:function(t){return Object(l.h)(this.element,this.options.isContentBoxSize)}},{key:"getPosition",value:function(){return this.position=this.offset.add(this._transformPosition||new f.a(0,0)),this.position}},{key:"getCenter",value:function(){return this.position.add(this.getSize().mult(.5))}},{key:"_setTranslate",value:function(t){this._transformPosition=t;var e=this.element.style[E],n=this.isDragging?1:0,i=" translate3d(".concat(t.x,"px, ").concat(t.y,"px, ").concat(n,"px)");window.navigator.userAgent.indexOf("MSIE ")?(i=" translate("+t.x+"px,"+t.y+"px)",/translate\([^)]+\)/.test(e)?e=e.replace(/translate\([^)]+\)/,i):e+=i):/translate3d\([^)]+\)/.test(e)?e=e.replace(/translate3d\([^)]+\)/,i):e+=i,this.element.style[E]=e}},{key:"move",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];t=t.clone(),n&&(this.fixPosition=t),this.determineDirection(t),this.position=t,k&&(this.element.style[k]=e+"ms"),this._setTranslate(t.sub(this.offset)),i||this.emit("drag:move")}},{key:"refreshPosition",value:function(){this.setPosition(this.getPosition())}},{key:"setPosition",value:function(t){t=t.clone(),this.position=t,k&&(this.element.style[k]="0ms"),this._setTranslate(t.sub(this.offset))}},{key:"setZeroTransition",value:function(){k&&(this.element.style[k]="0ms")}},{key:"determineDirection",value:function(t){this.leftDirection=this.position.x<t.x,this.rightDirection=this.position.x>t.x,this.upDirection=this.position.y>t.y,this.downDirection=this.position.y<t.y}},{key:"dragStart",value:function(t){if(this.currentEvent=t,this._enable&&(!this.options.startFilter||this.options.startFilter(t))){var e=m&&t instanceof window.TouchEvent;this._startTouchPoint=new f.a(e?t.changedTouches[0].pageX:t.clientX,e?t.changedTouches[0].pageY:t.clientY),this._startPosition=this.getPosition(),e&&(this._touchId=t.changedTouches[0].identifier),t.stopPropagation(),t.target instanceof window.HTMLInputElement||t.target instanceof window.HTMLInputElement?t.target.focus():t.preventDefault(),document.addEventListener(w.move,this._dragMove),document.addEventListener(x.move,this._dragMove),document.addEventListener(w.end,this._dragEnd),document.addEventListener(x.end,this._dragEnd),this.isDragging=!0,this.emit("drag:start"),i(this.element,"active"),this.emit("drag:move")}}},{key:"dragMove",value:function(t){var e;this.currentEvent=t;var n=m&&t instanceof window.TouchEvent;if(!n||(e=S(t,this._touchId))){t.stopPropagation(),t.preventDefault();var i=new f.a(n?e.pageX:t.clientX,n?e.pageY:t.clientY),r=this._startPosition.add(i.sub(this._startTouchPoint));r=this.bound(r,this.getSize()),this.touchPoint=i,this.move(r,0)}}},{key:"dragEnd",value:function(t){m&&t instanceof window.TouchEvent&&!S(t,this._touchId)||(t.stopPropagation(),t.preventDefault(),this.dragEndAction(),this.emit("drag:end"),document.removeEventListener(w.move,this._dragMove),document.removeEventListener(x.move,this._dragMove),document.removeEventListener(w.end,this._dragEnd),document.removeEventListener(x.end,this._dragEnd),this.isDragging=!1,r(this.element,"active"))}},{key:"dragEndAction",value:function(){this.move(this.position,0,!0,!0)}},{key:"getRectangle",value:function(){return new h.a(this.position,this.getSize())}},{key:"refresh",value:function(){this.getSize(!0),this.bound.refresh&&this.bound.refresh()}},{key:"destroy",value:function(){this.handler.removeEventListener(w.start,this._dragStart),this.handler.removeEventListener(x.start,this._dragStart),document.removeEventListener(w.move,this._dragMove),document.removeEventListener(x.move,this._dragMove),document.removeEventListener(w.end,this._dragEnd),document.removeEventListener(x.end,this._dragEnd),this.resetEmitter()}},{key:"enable",get:function(){return this._enable},set:function(t){return t?r(this.element,"disable"):i(this.element,"disable"),this._enable=t}}])&&p(n.prototype,a),s&&p(n,s),e}(a.a);D.emitter=new a.a(D),D.emitter.on("draggable:create",(function(t){g.b.addDraggable(t)}))},function(t,e,n){"use strict";function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(!(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)))return;var n=[],i=!0,r=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(i=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);i=!0);}catch(t){r=!0,o=t}finally{try{i||null==s.return||s.return()}finally{if(r)throw o}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n.d(e,"a",(function(){return o}));var o=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.context=e||this,this.events={},n&&n.on)for(var r=0,o=Object.entries(n.on);r<o.length;r++){var a=i(o[r],2),s=a[0],u=a[1];this.on(s,u)}}var e,n,o;return e=t,(n=[{key:"emit",value:function(t){this.interrupted=!1;var e=[].slice.call(arguments,1);if(this.events[t])for(var n=0;n<this.events[t].length;n++)if(this.events[t][n].apply(this.context,e),this.interrupted)return}},{key:"interrupt",value:function(){this.interrupted=!0}},{key:"on",value:function(t,e){this.events[t]||(this.events[t]=[]),this.events[t].push(e)}},{key:"prependOn",value:function(t,e){this.events[t]||(this.events[t]=[]),this.events[t].unshift(e)}},{key:"unsubscribe",value:function(t,e){if(this.events[t]){var n=this.events[t].indexOf(e);this.events[t].splice(n,1)}}},{key:"resetEmitter",value:function(){this.events={}}},{key:"resetOn",value:function(t){this.events[t]=[]}}])&&r(e.prototype,n),o&&r(e,o),t}()},function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"e",(function(){return a})),n.d(e,"a",(function(){return s})),n.d(e,"d",(function(){return u})),n.d(e,"c",(function(){return c}));var i=n(0);function r(t,e){var n=Math.min(t,e),i=Math.max(t,e);return Math.min(i-n,n+2*Math.PI-i)}function o(t,e){var n=e.sub(t);return u(Math.atan2(n.y,n.x))}function a(t){return t%360*Math.PI/180}function s(t,e,n){return t<e&&n>t&&n<e?n:e<t&&(n<e||n>t)?n:r(t,n)<r(e,n)?t:e}function u(t){for(;t<0;)t+=2*Math.PI;for(;t>2*Math.PI;)t-=2*Math.PI;return t}function c(t,e,n){return(n=n||new i.a(0,0)).add(new i.a(e*Math.cos(t),e*Math.sin(t)))}},function(t,e,n){"use strict";e.a=function(t,e){for(var n=0;n<t.length;n++)t[n]===e&&(t.splice(n,1),n--);return t}},function(t,e,n){"use strict";n.d(e,"e",(function(){return l})),n.d(e,"b",(function(){return d})),n.d(e,"a",(function(){return g})),n.d(e,"d",(function(){return y})),n.d(e,"c",(function(){return p}));var i=n(5),r=n(3),o=n(2),a=n(8);function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function f(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function h(t,e){return(h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var l=[],g=function(t){function e(t,n){var r,o,a,u=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),o=this,r=!(a=c(e).call(this,void 0,u))||"object"!==s(a)&&"function"!=typeof a?f(o):a,l.forEach((function(e){t&&t.forEach((function(t){Object(i.a)(e.draggables,t)})),n&&n.forEach((function(t){Object(i.a)(e.targets,t)}))})),r.draggables=t||[],r.targets=n||[],l.push(f(r)),r.options={timeEnd:u.timeEnd||400},r.init(),r}var n,r,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}(e,t),n=e,(r=[{key:"init",value:function(){var t=this;this.draggables.forEach((function(e){e.dragEndAction=function(){return t.onEnd(e)}}))}},{key:"addDraggable",value:function(t){var e=this;this.draggables.push(t),t.dragEndAction=function(){return e.onEnd(t)}}},{key:"addTarget",value:function(t){this.targets.push(t)}},{key:"onEnd",value:function(t){var e=this.targets.filter((function(e){return-1!==e.draggables.indexOf(t)})).filter((function(e){return e.catchDraggable(t)})).sort((function(t,e){return t.getRectangle().getSquare()-e.getRectangle().getSquare()}));e.length?e[0].onEnd(t):t.targets.length&&t.move(t.initPosition,this.options.timeEnd,!0,!0),this.emit("scope:change")}},{key:"reset",value:function(){this.targets.forEach((function(t){return t.reset()}))}},{key:"refresh",value:function(){this.draggables.forEach((function(t){return t.refresh()})),this.targets.forEach((function(t){return t.refresh()}))}},{key:"positions",get:function(){var t=this;return this.targets.map((function(e){return e.innerDraggables.map((function(e){return t.draggables.indexOf(e)}))}))},set:function(t){var e=this;if(t.length!==this.targets.length)throw"wrong array length";this.targets.forEach((function(t){return t.reset()})),t.forEach((function(t,n){t.forEach((function(t){e.targets[n].add(e.draggables[t])}))}))}}])&&u(n.prototype,r),o&&u(n,o),e}(r.a),d=new g;function p(t){var e=new g,n=function(t){e.addDraggable(t),o.Draggable.emitter.interrupt()},i=function(t){e.addTarget(t),o.Draggable.emitter.interrupt()};return o.Draggable.emitter.prependOn("draggable:create",n),a.a.emitter.prependOn("target:create",i),t.call(),o.Draggable.emitter.unsubscribe("draggable:create",n),a.a.emitter.unsubscribe("target:create",i),e}function y(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=i.draggable||{},s=i.target||{},u=i.scope||{};r.parent=r.parent||t,s.parent=s.parent||t,e=Array.prototype.slice.call(e),n=Array.prototype.slice.call(n);var c=e.map((function(t){return new o.Draggable(t,r)})),f=n.map((function(t){return new a.a(t,c,s)}));return new g(c,f,u)}},function(t,e,n){"use strict";n.d(e,"g",(function(){return a})),n.d(e,"c",(function(){return s})),n.d(e,"e",(function(){return u})),n.d(e,"f",(function(){return c})),n.d(e,"d",(function(){return f})),n.d(e,"b",(function(){return h})),n.d(e,"a",(function(){return l}));var i=n(0),r=n(1),o=n(4);function a(t){return function(e,n){var i=e.clone(),r=t.getP3();return t.position.x>i.x&&(i.x=t.position.x),t.position.y>i.y&&(i.y=t.position.y),r.x<i.x+n.x&&(i.x=r.x-n.x),r.y<i.y+n.y&&(i.y=r.y-n.y),i}}function s(t,e){var n,i=function(){return n.apply(this,arguments)};return i.refresh=function(){n=a(Object(r.c)(t,e))},i.refresh(),i}function u(t,e,n){return function(i,r){var o=i.clone();return o.x=t,e>o.y&&(o.y=e),n<o.y+r.y&&(o.y=n-r.y),o}}function c(t,e,n){return function(i,r){var o=i.clone();return o.y=t,e>o.x&&(o.x=e),n<o.x+r.x&&(o.x=n-r.x),o}}function f(t,e){var n=Math.atan2(e.y-t.y,e.x-t.x)+Math.PI/2,o=Math.cos(n),a=Math.sin(n);return function(n,s){var u=new i.a(n.x+10*o,n.y+10*a),c=Object(r.g)(e,t,s.x),f=Object(r.d)(t,e,n,u);return f=Object(r.b)(t,c,f)}}function h(t,e){return function(n,i){return Object(r.g)(t,n,e)}}function l(t,e,n,i){return function(r,a){var s="function"==typeof n?n():n,u="function"==typeof n?i():i,c=Object(o.b)(t,r);return c=Object(o.d)(c),c=Object(o.a)(s,u,c),Object(o.c)(c,e,t)}}},function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var i=n(12),r=n(5),o=n(10),a=n(3),s=n(1),u=n(6),c=n(13);function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function h(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function g(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function d(t,e){return(d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var p=function(t){function e(t,n){var i,r,a,u=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),r=this,i=!(a=l(e).call(this,void 0,u))||"object"!==f(a)&&"function"!=typeof a?g(r):a;var h=g(i),d=u.parent||Object(o.a)(t);return i.options=Object.assign({timeEnd:200,timeExcange:400,parent:d},u),i.positioningStrategy=u.strategy||new c.a(i.getRectangle.bind(g(i)),{radius:80,getDistance:Object(s.l)({x:1,y:4}),removable:!0}),i.element=t,n.forEach((function(t){return t.targets.push(h)})),i.draggables=n,e.emitter.emit("target:create",g(i)),i.init(),i}var n,a,p;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}(e,t),n=e,(a=[{key:"positioning",value:function(t,e){return this.positioningStrategy.positioning(t,e)}},{key:"sorting",value:function(t,e,n){return this.positioningStrategy.sorting(t,e,n)}},{key:"init",value:function(){var t,e,n=this;this.innerDraggables=this.draggables.filter((function(t){for(var e=t.element.parentNode;e;){if(e===n.element)return!0;e=e.parentNode}return!1})),this.innerDraggables.length&&(e=Object(i.a)(this.innerDraggables.length),t=this.positioning(this.innerDraggables.map((function(t){return t.getRectangle()})),e),this.setPosition(t,e),this.innerDraggables.forEach((function(t){return n.emit("target:add",t)})))}},{key:"getRectangle",value:function(){return Object(s.c)(this.element,this.options.parent,this.options.isContentBoxSize,!0)}},{key:"catchDraggable",value:function(t){if(this.options.catchDraggable)return this.options.catchDraggable(this,t);var e=this.getRectangle();return t.getRectangle().getSquare()<e.getSquare()&&e.includePoint(t.getCenter())}},{key:"getPosition",value:function(){return this.getRectangle().position}},{key:"getSize",value:function(){return this.getRectangle().size}},{key:"destroy",value:function(){var t=this;u.e.forEach((function(e){return Object(r.a)(e.targets,t)}))}},{key:"refresh",value:function(){var t=this.positioning(this.innerDraggables.map((function(t){return t.getRectangle()})),[]);this.setPosition(t,[],0)}},{key:"onEnd",value:function(t){var e=[];if(!this.getRectangle().includePoint(t.getPosition())){if(!this.getRectangle().includePoint(t.getCenter()))return!1;t.position=t.getCenter().clone()}this.emit("target:beforeAdd",t),this.innerDraggables=this.sorting(this.innerDraggables,[t],e);var n=this.positioning(this.innerDraggables.map((function(t){return t.getRectangle()})),e);return this.setPosition(n,e),-1!==this.innerDraggables.indexOf(t)&&this.addRemoveOnMove(t),!0}},{key:"setPosition",value:function(t,e,n){var i=this;this.innerDraggables.slice(0).forEach((function(o,a){var s=t[a],u=n||0===n?n:-1!==e.indexOf(a)?i.options.timeEnd:i.options.timeExcange;s.removable?(o.move(o.initPosition,u,!0,!0),Object(r.a)(i.innerDraggables,o),i.emit("target:remove",o)):o.move(s.position,u,!0,!0)}))}},{key:"add",value:function(t,e){var n=this.innerDraggables.length;this.emit("target:beforeAdd",t),this.pushInnerDraggable(t);var i=this.positioning(this.innerDraggables.map((function(t){return t.getRectangle()})),n,t);this.setPosition(i,[n],e||0),-1!==this.innerDraggables.indexOf(t)&&this.addRemoveOnMove(t)}},{key:"pushInnerDraggable",value:function(t){-1===this.innerDraggables.indexOf(t)&&this.innerDraggables.push(t)}},{key:"addRemoveOnMove",value:function(t){var e=this;t.on("drag:move",this.removeHandler=function(){e.remove(t)}),this.emit("target:add",t)}},{key:"remove",value:function(t){t.unsubscribe("drag:move",this.removeHandler);var e=this.innerDraggables.indexOf(t);if(-1!==e){this.innerDraggables.splice(e,1);var n=this.positioning(this.innerDraggables.map((function(t){return t.getRectangle()})),[]);this.setPosition(n,[]),this.emit("target:remove",t)}}},{key:"reset",value:function(){var t=this;this.innerDraggables.forEach((function(e){e.move(e.initPosition,0,!0,!0),t.emit("target:remove",e)})),this.innerDraggables=[]}},{key:"getSortedDraggables",value:function(){this.innerDraggables.slice()}}])&&h(n.prototype,a),p&&h(n,p),e}(a.a);p.emitter=new a.a(p),p.emitter.on("target:create",(function(t){u.b.addTarget(t)}))},function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n(0);function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var o=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.position=e,this.size=n}var e,n,o;return e=t,(n=[{key:"getP1",value:function(){return this.position}},{key:"getP2",value:function(){return new i.a(this.position.x+this.size.x,this.position.y)}},{key:"getP3",value:function(){return this.position.add(this.size)}},{key:"getP4",value:function(){return new i.a(this.position.x,this.position.y+this.size.y)}},{key:"getCenter",value:function(){return this.position.add(this.size.mult(.5))}},{key:"or",value:function(e){var n=new i.a(Math.min(this.position.x,e.position.x),Math.min(this.position.y,e.position.y));return new t(n,new i.a(Math.max(this.position.x+this.size.x,e.position.x+e.size.x),Math.max(this.position.y+this.size.y,e.position.y+e.size.y)).sub(n))}},{key:"and",value:function(e){var n=new i.a(Math.max(this.position.x,e.position.x),Math.max(this.position.y,e.position.y)),r=new i.a(Math.min(this.position.x+this.size.x,e.position.x+e.size.x),Math.min(this.position.y+this.size.y,e.position.y+e.size.y)).sub(n);return r.x<=0||r.y<=0?null:new t(n,r)}},{key:"includePoint",value:function(t){return!(this.position.x>t.x||this.position.x+this.size.x<t.x||this.position.y>t.y||this.position.y+this.size.y<t.y)}},{key:"includeRectangle",value:function(t){return this.includePoint(t.position)&&this.includePoint(t.getP3())}},{key:"moveToBound",value:function(t,e){var n,i;if(e)n=e;else{if(!(i=this.and(t)))return t;n=i.size.x>i.size.y?"y":"x"}var r=this.getCenter(),o=t.getCenter(),a=(r[n]>o[n]?-1:1)>0?this.position[n]+this.size[n]-t.position[n]:this.position[n]-(t.position[n]+t.size[n]);return t.position[n]=t.position[n]+a,t}},{key:"getSquare",value:function(){return this.size.x*this.size.y}},{key:"styleApply",value:function(t){(t=t||document.querySelector("ind")).style.left=this.position.x+"px",t.style.top=this.position.y+"px",t.style.width=this.size.x+"px",t.style.height=this.size.y+"px"}},{key:"growth",value:function(t){this.size=this.size.add(t),this.position=this.position.add(t.mult(-.5))}},{key:"getMinSide",value:function(){return Math.min(this.size.x,this.size.y)}}])&&r(e.prototype,n),o&&r(e,o),t}()},function(t,e,n){"use strict";function i(t){for(var e=t.parentNode;e.parentNode&&"static"===window.getComputedStyle(e).position;)e=e.parentNode;return e}n.d(e,"a",(function(){return i}))},function(t,e,n){var i;
/*!
 * getStyleProperty v1.0.4
 * original by kangax
 * http://perfectionkills.com/feature-testing-css-properties/
 * MIT license
 */!function(r){"use strict";var o="Webkit Moz ms Ms O".split(" "),a=document.documentElement.style;function s(t){if(t){if("string"==typeof a[t])return t;var e;t=t.charAt(0).toUpperCase()+t.slice(1);for(var n=0,i=o.length;n<i;n++)if(e=o[n]+t,"string"==typeof a[e])return e}}void 0===(i=function(){return s}.call(e,n,e,t))||(t.exports=i)}(window)},function(t,e,n){"use strict";function i(t,e,n){var i=[];if(void 0===e&&(e=t,t=0),void 0===n&&(n=1),n>0&&t>=e||n<0&&t<=e)return[];for(var r=t;n>0?r<e:r>e;r+=n)i.push(r);return i}n.d(e,"a",(function(){return i}))},function(t,e,n){"use strict";n.d(e,"c",(function(){return d})),n.d(e,"a",(function(){return p})),n.d(e,"b",(function(){return y}));var i=n(0),r=n(1);function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function h(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function l(t,e,n){return e&&h(t.prototype,e),n&&h(t,n),t}var g=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};f(this,t),this.rectangle=e,this.options=n}return l(t,[{key:"boundRect",get:function(){return"function"==typeof this.rectangle?this.rectangle():this.rectangle}}]),t}(),d=function(t){function e(){return f(this,e),a(this,s(e).apply(this,arguments))}return u(e,t),l(e,[{key:"positioning",value:function(t,e){var n=this,i=t.reduce((function(t,n,i){return-1===e.indexOf(i)&&t.push(i),t}),[]);return e.forEach((function(e){var r=t[e];i.forEach((function(e){var n=t[e];r=n.moveToBound(r)})),i.some((function(e){return!!t[e].and(r)}))||r.and(n.boundRect).getSquare()!==r.getSquare()?r.removable=!0:i.push(e)})),t}},{key:"sorting",value:function(t,e,n){var i=t.concat(e);return e.forEach((function(t){n.push(i.indexOf(t))})),i}}]),e}(g),p=function(t){function e(t){var n,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return f(this,e),(n=a(this,s(e).call(this,t,o))).options=Object.assign({removable:!0},o),n.radius=o.radius||80,n.paddingTopLeft=o.paddingTopLeft||new i.a(0,0),n.paddingBottomRight=o.paddingBottomRight||new i.a(0,0),n.yGapBetweenDraggables=o.yGapBetweenDraggables||0,n.getDistance=o.getDistance||r.e,n.getPosition=o.getPosition||function(t){return t.position},n}return u(e,t),l(e,[{key:"positioning",value:function(t,e){var n=this,o=this.boundRect,a=o.getP2(),s=[o.position];return t.forEach((function(t){for(var e,u=!1,c=0;c<s.length&&!(u=(e=new i.a(s[c].x,c>0?s[c-1].y+n.yGapBetweenDraggables:o.position.y).add(n.paddingTopLeft)).x+t.size.x<a.x);c++);u||(e=new i.a(o.position.x,s[s.length-1].y+n.yGapBetweenDraggables).add(n.paddingTopLeft)),t.position=e,n.options.removable&&t.getP3().y>o.getP3().y&&(t.removable=!0),s=Object(r.a)(s,t.getP3().add(n.paddingBottomRight))})),t}},{key:"sorting",value:function(t,e,n){var i=this,o=t.concat(),a=t.map((function(t){return t.getPosition()}));return e.forEach((function(e){var n=Object(r.k)(a,i.getPosition(e),i.radius,i.getDistance);n=-1===n?o.length:o.indexOf(t[n]),o.splice(n,0,e)})),e.forEach((function(t){n.push(o.indexOf(t))})),o}}]),e}(g),y=function(t){function e(t){var n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return f(this,e),(n=a(this,s(e).call(this,t,r))).paddingTopRight=r.paddingTopRight||new i.a(5,5),n.paddingBottomLeft=r.paddingBottomLeft||new i.a(0,0),n.paddingTopNegRight=new i.a(-n.paddingTopRight.x,n.paddingTopRight.y),n.paddingBottomNegLeft=new i.a(-n.paddingBottomLeft.x,n.paddingBottomLeft.y),n}return u(e,t),l(e,[{key:"positioning",value:function(t,e){var n=this,o=this.boundRect,a=[o.getRightTopPoint()];return t.forEach((function(t,e){for(var s,u=!1,c=0;c<a.length&&!(u=(s=new i.a(a[c].x-t.size.x,c>0?a[c-1].y:o.position.y).add(n.paddingTopNegRight)).x>t.position.x);c++);u||(s=new i.a(o.getP2().x,a[a.length-1].y)),t.position=s,n.options.removable&&t.getLeftBottomPoint().y>o.getP4().y&&(t.removable=!0),a=Object(r.a)(a,t.getP4().add(n.paddingBottomNegLeft),!0)})),t}}]),e}(p)},function(t,e,n){"use strict";n.r(e),n.d(e,"List",(function(){return l})),n.d(e,"listFactory",(function(){return g}));var i=n(5),r=n(3),o=n(1),a=n(2);function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function c(t,e){return!e||"object"!==s(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){return(h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var l=function(t){function e(t){var n,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=c(this,f(e).call(this,void 0,i))).options=Object.assign({timeEnd:200,timeExcange:400,radius:30,getDistance:o.e,isDisplacement:!1,isSortable:!0},i),n.draggables=t,n.init(),n}var n,r,a;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}(e,t),n=e,(r=[{key:"init",value:function(){this._enable=!0,this.draggables.forEach(this.initDraggable,this)}},{key:"initDraggable",value:function(t){var e,n=this,i=this;t.enable=this._enable,this.options.isDisplacement?(e=function(){t.isDragging&&(i.onStart(t),t.unsubscribe("drag:move",e))},t.dragEndAction=function(){n.onEndDisplaycement(t),t.on("drag:move",e)},t.on("drag:move",e)):t.dragEndAction=function(){return n.onEnd(t)}}},{key:"moveOrSave",value:function(t,e,n){t.isDragging?t.fixPosition=e:t.move(e,n,!0)}},{key:"onEnd",value:function(t){var e=this.getCurrentFixPosition(),n=this.draggables.indexOf(t),i=Object(o.k)(e,t.position,this.options.radius,this.options.getDistance);return-1===i||i===n?t.move(t.fixPosition,this.options.timeEnd,!0):(this.moveOrSave(this.draggables[i],e[n],this.options.timeExcange),this.draggables[n].move(e[i],this.options.timeEnd,!0),this.emit("list:change")),!0}},{key:"sortIfPossible",value:function(t){var e=t.fixPosition,n=this.draggables.indexOf(t),i=this.draggables[n+1],r=this.draggables[n-1];if(t.downDirection&&i&&this.options.getDistance(t.position,i.position)<this.options.radius){t.fixPosition=i.fixPosition,this.moveOrSave(i,e,this.options.timeExcange);var o=[this.draggables[n+1],this.draggables[n]];this.draggables[n]=o[0],this.draggables[n+1]=o[1],this.sortIfPossible(t)}if(t.upDirection&&r&&this.options.getDistance(t.position,r.position)<this.options.radius){t.fixPosition=r.fixPosition,this.moveOrSave(r,e,this.options.timeExcange);var a=[this.draggables[n-1],this.draggables[n]];this.draggables[n]=a[0],this.draggables[n-1]=a[1],this.sortIfPossible(t)}}},{key:"onEndDisplaycement",value:function(t){var e=this.getSortedDraggables(),n=e.map((function(t){return t.fixPosition})),i=e.indexOf(t),r=Object(o.k)(n,t.position,this.options.radius,this.options.getDistance);if(-1!==r){if(r<i)for(var a=r;a<i;a++)this.moveOrSave(e[a],n[a+1],this.options.timeExcange);else for(var s=i;s<r;s++)this.moveOrSave(e[s+1],n[s],this.options.timeExcange);t.move(n[r],this.options.timeEnd,!0)}else t.move(t.fixPosition,this.options.timeEnd,!0)}},{key:"onStart",value:function(t){var e,n=this.getSortedDraggables(),i=n.map((function(t){return t.fixPosition})),r=n.indexOf(t);for(e=r+1;e<n.length;e++)this.moveOrSave(n[e],i[e-1],this.options.timeExcange);n[r].fixPosition=i[e-1]}},{key:"getCurrentFixPosition",value:function(){return this.draggables.map((function(t){return t.fixPosition.clone()}))}},{key:"getSortedDraggables",value:function(){var t=this;return this.draggables.map((function(t){return t.initPosition})).map((function(e){return t.draggables.filter((function(t){return t.fixPosition.compare(e)}))[0]}))}},{key:"reset",value:function(){this.draggables.forEach((function(t){t.move(t.initPosition,0,!0,!1)}))}},{key:"refresh",value:function(){this.draggables.forEach((function(t){t.refresh()}))}},{key:"add",value:function(t){t instanceof Array||(t=[t]),t.forEach(this.initDraggable,this),this.draggables=this.draggables.concat(t)}},{key:"remove",value:function(t){var e=this,n=this.draggables.map((function(t){return t.initPosition})),r=[],o=this.getSortedDraggables();t instanceof Array||(t=[t]),t.forEach((function(t){t.resetOn("drag:end"),t.resetOn("drag:move"),Object(i.a)(e.draggables,t)}));var a=0;o.forEach((function(t){-1!==e.draggables.indexOf(t)&&(t.fixPosition!==n[a]&&t.move(n[a],e.options.timeExcange,!0),t.initPosition=n[a],a++,r.push(t))})),this.draggables=r}},{key:"clear",value:function(){this.remove(this.draggables.slice())}},{key:"destroy",value:function(){this.draggables.forEach((function(t){return t.destroy()}))}},{key:"positions",get:function(){return this.getCurrentFixPosition()},set:function(t){var e=this;if(t.length!==this.draggables.length)throw"wrong array length";t.forEach((function(t,n){e.draggables[n].move(t,0,!0,!0)}),this)}},{key:"enable",get:function(){return this._enable},set:function(t){this._enable=t,this.draggables.forEach((function(e){e.enable=t}))}}])&&u(n.prototype,r),a&&u(n,a),e}(r.a);function g(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=n.draggable||{},r=n.list||{};i.parent=i.parent||t;var o=(e=Array.prototype.slice.call(e)).map((function(t){return new a.Draggable(t,i)}));return new l(o,r)}}])}));