!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("Dragee",[],e):"object"==typeof exports?exports.Dragee=e():t.Dragee=e()}(window,(function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=15)}([function(t,e,n){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n.d(e,"a",(function(){return o}));var o=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=e,this.y=n}var e,n,o;return e=t,(n=[{key:"add",value:function(e){return new t(this.x+e.x,this.y+e.y)}},{key:"sub",value:function(e){return new t(this.x-e.x,this.y-e.y)}},{key:"mult",value:function(e){return new t(this.x*e,this.y*e)}},{key:"negative",value:function(){return new t(-this.x,-this.y)}},{key:"compare",value:function(t){return this.x===t.x&&this.y===t.y}},{key:"clone",value:function(){return new t(this.x,this.y)}},{key:"toString",value:function(){return"{x=".concat(this.x,",y=").concat(this.y)}}])&&i(e.prototype,n),o&&i(e,o),t}()},function(t,e,n){"use strict";n.d(e,"g",(function(){return r})),n.d(e,"l",(function(){return s})),n.d(e,"m",(function(){return a})),n.d(e,"q",(function(){return u})),n.d(e,"n",(function(){return c})),n.d(e,"e",(function(){return h})),n.d(e,"c",(function(){return f})),n.d(e,"j",(function(){return g})),n.d(e,"d",(function(){return l})),n.d(e,"k",(function(){return p})),n.d(e,"h",(function(){return v})),n.d(e,"i",(function(){return y})),n.d(e,"a",(function(){return b})),n.d(e,"f",(function(){return m})),n.d(e,"p",(function(){return x})),n.d(e,"b",(function(){return w})),n.d(e,"o",(function(){return P}));var i=n(0),o=n(8);function r(t,e){var n=t.x-e.x,i=t.y-e.y;return Math.sqrt(n*n+i*i)}function s(t,e){return Math.abs(t.x-e.x)}function a(t,e){return Math.abs(t.y-e.y)}function u(t){return function(e,n){return Math.sqrt(Math.pow(t.x*Math.abs(e.x-n.x),2)+Math.pow(t.y*Math.abs(e.y-n.y),2))}}function c(t,e,n,i){var o,s,a,u=0;if(i=i||r,0===t.length)return-1;for(o=i(t[0],e),s=0;s<t.length;s++)(a=i(t[s],e))<o&&(o=a,u=s);return n>=0&&o>n?-1:u}function h(t,e,n,o){var r,s,a,u,c,h,f;return n.x===o.x&&(r=n,n=t,t=r,r=o,o=e,e=r),t.x===e.x?(a=(o.y-n.y)/(o.x-n.x),c=(o.x*n.y-n.x*o.y)/(o.x-n.x),f=(h=t.x)*a+c,new i.a(h,f)):(s=(e.y-t.y)/(e.x-t.x),u=(e.x*t.y-t.x*e.y)/(e.x-t.x),a=(o.y-n.y)/(o.x-n.x),f=(h=(u-(c=(o.x*n.y-n.x*o.y)/(o.x-n.x)))/(a-s))*s+u,new i.a(h,f))}function f(t,e,n){var o=new i.a(n.x-t.x,n.y-t.y),r=new i.a(e.x-t.x,e.y-t.y),s=r.x*r.x+r.y*r.y,a=(o.x*r.x+o.y*r.y)/s;return new i.a(t.x+r.x*a,t.y+r.y*a)}function g(t,e,n){var o=e.x-t.x,s=e.y-t.y,a=n/r(t,e);return new i.a(t.x+a*o,t.y+a*s)}function l(t,e,n,i){var r=p(t,n);return new o.a(v(t,e||t.parentNode),r)}function d(t,e){return e.reduce((function(e,n){return e+parseInt(window.getComputedStyle(t)[n]||0)}),0)}function p(t,e){var n=parseInt(window.getComputedStyle(t).width),o=parseInt(window.getComputedStyle(t).height);return e||(n+=d(t,["padding-left","padding-right","border-left-width","border-right-width"]),o+=d(t,["padding-top","padding-bottom","border-top-width","border-bottom-width"])),new i.a(n,o)}function v(t,e){var n=t.getBoundingClientRect(),o=e.getBoundingClientRect();return new i.a(n.left-o.left,n.top-o.top)}function y(t,e,n){return(n=n||new i.a(0,0)).add(new i.a(e*Math.cos(t),e*Math.sin(t)))}function b(t,e,n){for(var i=t.filter((function(t){return t.y>e.y||(n?t.x<e.x:t.x>e.x)})),o=0;o<i.length;o++)if(e.y<i[o].y)return i.splice(o,0,e),i;return i.push(e),i}function m(t,e){var n=e.sub(t);return P(Math.atan2(n.y,n.x))}function x(t){return t%360*Math.PI/180}function w(t,e,n){return t<e&&n>t&&n<e?n:e<t&&(n<e||n>t)?n:E(t,n)<E(e,n)?t:e}function E(t,e){var n=Math.min(t,e),i=Math.max(t,e);return Math.min(i-n,n+2*Math.PI-i)}function P(t){for(;t<0;)t+=2*Math.PI;for(;t>2*Math.PI;)t-=2*Math.PI;return t}},function(t,e,n){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n.d(e,"a",(function(){return o}));var o=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.funcs=[],this.context=e,this.isReverse=n.isReverse||!1,this.isStopOnTrue=n.isStopOnTrue||!1}var e,n,o;return e=t,(n=[{key:"fire",value:function(){for(var t,e=[].slice.call(arguments),n=this.isReverse?this.funcs.slice().reverse():this.funcs,i=0;i<n.length;i++)if(t=n[i].apply(this.context,e),this.isStopOnTrue&&t)return!0;return!this.isStopOnTrue}},{key:"add",value:function(t){this.funcs.push(t)}},{key:"unshift",value:function(t){this.funcs.unshift(t)}},{key:"remove",value:function(t){var e=this.funcs.indexOf(t);-1!==e&&this.funcs.splice(e,1)}},{key:"reset",value:function(){this.funcs=[]}}])&&i(e.prototype,n),o&&i(e,o),t}()},function(t,e,n){"use strict";function i(t,e){(function(t,e){return new RegExp("(^|\\s)"+e+"(\\s|$)","g").test(t.className)})(t,e)||(t.className=(t.className+" "+e).replace(/\s+/g," ").replace(/(^ | $)/g,""))}function o(t,e){var n=new RegExp("(^|\\s)"+e+"(\\s|$)","g");t.className=t.className.replace(n,"$1").replace(/\s+/g," ").replace(/(^ | $)/g,"")}n.r(e);var r=n(9),s=n(2),a=n(10),u=n.n(a),c=n(6),h=n(0),f=n(8),g=n(1),l=n(5);function d(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n.d(e,"Draggable",(function(){return P})),n.d(e,"events",(function(){return b}));var p="ontouchstart"in window,v={start:"mousedown",move:"mousemove",end:"mouseup"},y={start:"touchstart",move:"touchmove",end:"touchend"},b=p?y:v,m=[],x=u()("transform"),w=u()("transition");function E(t,e){for(var n=0;n<t.changedTouches.length;n++)if(t.changedTouches[n].identifier===e)return t.changedTouches[n];return!1}var P=function(){function t(e){var n=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var o=i.parent||Object(r.a)(e);this.targets=[],this.options=Object.assign({parent:o,bound:Object(c.c)(o,o),startFilter:!1,isContentBoxSize:!1,position:!1},i),"string"==typeof i.handler?this.handler=e.querySelector(i.handler)||e:this.handler=i.handler||e,this.onEnd=new s.a(this,{isReverse:!0,isStopOnTrue:!0}),this.onMove=new s.a(this),this.onStart=new s.a(this),this.onEnd.add((function(){return n.move(n.position,0,!0,!0)})),i.onEnd&&this.onEnd.add(i.onEnd),i.onMove&&this.onMove.add(i.onMove),i.onStart&&this.onStart.add(i.onStart),this.element=e,this.bound=this.options.bound,function(t){if(m.some((function(e){return t.element===e.element})))throw"for this element Dragee.Draggable is already exist, don't create it twice ";m.push(t)}(this),t.onCreate.fire(this),this.init()}var e,n,a;return e=t,(n=[{key:"init",value:function(){this._enable=!0,this.offset=Object(g.h)(this.element,this.options.parent,!0),this.fixPosition=this.offset,this.position=this.offset,this.options.position?(this.initPosition=this.options.position,this.move(this.initPosition,0,!0,!0)):this.initPosition=this.offset,this._dragStart=this.dragStart.bind(this),this._dragMove=this.dragMove.bind(this),this._dragEnd=this.dragEnd.bind(this),this.handler.addEventListener(y.start,this._dragStart),this.handler.addEventListener(v.start,this._dragStart),this.bound.refresh&&this.bound.refresh()}},{key:"reinit",value:function(){this.offset=Object(g.h)(this.element,this.options.parent,!0),this.fixPosition=this.offset,this.position=this.offset,this.options.position?(this.initPosition=this.options.position,this.move(this.initPosition,0,!0,!0)):this.initPosition=this.offset,this.bound.refresh&&this.bound.refresh()}},{key:"getSize",value:function(t){return Object(g.k)(this.element,this.options.isContentBoxSize)}},{key:"getPosition",value:function(){return this.position=this.offset.add(this._transformPosition||new h.a(0,0)),this.position}},{key:"getCenter",value:function(){return this.position.add(this.getSize().mult(.5))}},{key:"_setTranslate",value:function(t){this._transformPosition=t;var e=this.element.style[x],n=this.isDragging?1:0,i=" translate3d(".concat(t.x,"px, ").concat(t.y,"px, ").concat(n,"px)");window.navigator.userAgent.indexOf("MSIE ")?(i=" translate("+t.x+"px,"+t.y+"px)",/translate\([^)]+\)/.test(e)?e=e.replace(/translate\([^)]+\)/,i):e+=i):/translate3d\([^)]+\)/.test(e)?e=e.replace(/translate3d\([^)]+\)/,i):e+=i,this.element.style[x]=e}},{key:"move",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];t=t.clone(),n&&(this.fixPosition=t),this.determineDirection(t),this.position=t,w&&(this.element.style[w]=e+"ms"),this._setTranslate(t.sub(this.offset)),i||this.onMove.fire()}},{key:"refreshPosition",value:function(){this.setPosition(this.getPosition())}},{key:"setPosition",value:function(t){t=t.clone(),this.position=t,w&&(this.element.style[w]="0ms"),this._setTranslate(t.sub(this.offset))}},{key:"setZeroTransition",value:function(){w&&(this.element.style[w]="0ms")}},{key:"determineDirection",value:function(t){this.leftDirection=this.position.x<t.x,this.rightDirection=this.position.x>t.x,this.upDirection=this.position.y>t.y,this.downDirection=this.position.y<t.y}},{key:"dragStart",value:function(t){if(this.currentEvent=t,this._enable&&(!this.options.startFilter||this.options.startFilter(t))){var e=p&&t instanceof window.TouchEvent;this._startTouchPoint=new h.a(e?t.changedTouches[0].pageX:t.clientX,e?t.changedTouches[0].pageY:t.clientY),this._startPosition=this.getPosition(),e&&(this._touchId=t.changedTouches[0].identifier),t.stopPropagation(),t.target instanceof window.HTMLInputElement||t.target instanceof window.HTMLInputElement?t.target.focus():t.preventDefault(),document.addEventListener(y.move,this._dragMove),document.addEventListener(v.move,this._dragMove),document.addEventListener(y.end,this._dragEnd),document.addEventListener(v.end,this._dragEnd),this.isDragging=!0,this.onStart.fire(t),i(this.element,"active"),this.onMove.fire(t)}}},{key:"dragMove",value:function(t){var e;this.currentEvent=t;var n=p&&t instanceof window.TouchEvent;if(!n||(e=E(t,this._touchId))){t.stopPropagation(),t.preventDefault();var i=new h.a(n?e.pageX:t.clientX,n?e.pageY:t.clientY),o=this._startPosition.add(i.sub(this._startTouchPoint));o=this.bound(o,this.getSize()),this.touchPoint=i,this.move(o,0)}}},{key:"dragEnd",value:function(t){p&&t instanceof window.TouchEvent&&!E(t,this._touchId)||(t.stopPropagation(),t.preventDefault(),this.onEnd.fire(t),document.removeEventListener(y.move,this._dragMove),document.removeEventListener(v.move,this._dragMove),document.removeEventListener(y.end,this._dragEnd),document.removeEventListener(v.end,this._dragEnd),this.isDragging=!1,o(this.element,"active"))}},{key:"getRectangle",value:function(){return new f.a(this.position,this.getSize())}},{key:"refresh",value:function(){this.getSize(!0),this.bound.refresh&&this.bound.refresh()}},{key:"destroy",value:function(){this.handler.removeEventListener(y.start,this._dragStart),this.handler.removeEventListener(v.start,this._dragStart),document.removeEventListener(y.move,this._dragMove),document.removeEventListener(v.move,this._dragMove),document.removeEventListener(y.end,this._dragEnd),document.removeEventListener(v.end,this._dragEnd),this.onEnd.reset(),this.onMove.reset()}},{key:"enable",get:function(){return this._enable},set:function(t){return t?o(this.element,"disable"):i(this.element,"disable"),this._enable=t}}])&&d(e.prototype,n),a&&d(e,a),t}();P.onCreate=new s.a(P,{isReverse:!0,isStopOnTrue:!0}),P.onCreate.add((function(t){l.b.addDraggable(t)}))},function(t,e,n){"use strict";e.a=function(t,e){for(var n=0;n<t.length;n++)t[n]===e&&(t.splice(n,1),n--);return t}},function(t,e,n){"use strict";n.d(e,"e",(function(){return u})),n.d(e,"b",(function(){return h})),n.d(e,"a",(function(){return c})),n.d(e,"d",(function(){return g})),n.d(e,"c",(function(){return f}));var i=n(4),o=n(2),r=n(3),s=n(7);function a(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var u=[],c=function(){function t(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),u.forEach((function(t){e&&e.forEach((function(e){Object(i.a)(t.draggables,e)})),n&&n.forEach((function(e){Object(i.a)(t.targets,e)}))})),this.draggables=e||[],this.targets=n||[],u.push(this),this.options={timeEnd:r.timeEnd||400},this.onChange=new o.a(this),r.onChange&&this.onChange.add(r.onChange),this.init()}var e,n,r;return e=t,(n=[{key:"init",value:function(){var t=this;this.draggables.forEach((function(e){e.onEnd.add((function(){return t.onEnd(e)}))}))}},{key:"addDraggable",value:function(t){var e=this;this.draggables.push(t),t.onEnd.unshift((function(){return e.onEnd(t)}))}},{key:"addTarget",value:function(t){this.targets.push(t)}},{key:"onEnd",value:function(t){var e=this.targets.filter((function(e){return-1!==e.draggables.indexOf(t)})).filter((function(e){return e.catchDraggable(t)})).sort((function(t,e){return t.getRectangle().getSquare()-e.getRectangle().getSquare()}));return e.length?e[0].onEnd(t):t.targets.length&&t.move(t.initPosition,this.options.timeEnd,!0,!0),this.onChange.fire(),!0}},{key:"reset",value:function(){this.targets.forEach((function(t){return t.reset()}))}},{key:"refresh",value:function(){this.draggables.forEach((function(t){return t.refresh()})),this.targets.forEach((function(t){return t.refresh()}))}},{key:"positions",get:function(){var t=this;return this.targets.map((function(e){return e.innerDraggables.map((function(e){return t.draggables.indexOf(e)}))}))},set:function(t){var e=this;if(t.length!==this.targets.length)throw"wrong array length";this.targets.forEach((function(t){return t.reset()})),t.forEach((function(t,n){t.forEach((function(t){e.targets[n].add(e.draggables[t])}))}))}}])&&a(e.prototype,n),r&&a(e,r),t}(),h=new c;function f(t){var e=new c,n=function(t){return e.addDraggable(t),!0},i=function(t){return e.addTarget(t),!0};return r.Draggable.onCreate.add(n),s.a.onCreate.add(i),t.call(),r.Draggable.onCreate.remove(n),s.a.onCreate.remove(i),e}function g(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=i.draggable||{},a=i.target||{},u=i.scope||{};o.parent=o.parent||t,a.parent=a.parent||t,e=Array.prototype.slice.call(e),n=Array.prototype.slice.call(n);var h=e.map((function(t){return new r.Draggable(t,o)})),f=n.map((function(t){return new s.a(t,h,a)}));return new c(h,f,u)}},function(t,e,n){"use strict";n.d(e,"g",(function(){return r})),n.d(e,"c",(function(){return s})),n.d(e,"e",(function(){return a})),n.d(e,"f",(function(){return u})),n.d(e,"d",(function(){return c})),n.d(e,"b",(function(){return h})),n.d(e,"a",(function(){return f}));var i=n(0),o=n(1);function r(t){return function(e,n){var i=e.clone(),o=t.getP3();return t.position.x>i.x&&(i.x=t.position.x),t.position.y>i.y&&(i.y=t.position.y),o.x<i.x+n.x&&(i.x=o.x-n.x),o.y<i.y+n.y&&(i.y=o.y-n.y),i}}function s(t,e){var n,i=function(){return n.apply(this,arguments)};return i.refresh=function(){n=r(Object(o.d)(t,e))},i.refresh(),i}function a(t,e,n){return function(i,o){var r=i.clone();return r.x=t,e>r.y&&(r.y=e),n<r.y+o.y&&(r.y=n-o.y),r}}function u(t,e,n){return function(i,o){var r=i.clone();return r.y=t,e>r.x&&(r.x=e),n<r.x+o.x&&(r.x=n-o.x),r}}function c(t,e){var n=Math.atan2(e.y-t.y,e.x-t.x)+Math.PI/2,r=Math.cos(n),s=Math.sin(n);return function(n,a){var u=new i.a(n.x+10*r,n.y+10*s),c=Object(o.j)(e,t,a.x),h=Object(o.e)(t,e,n,u);return h=Object(o.c)(t,c,h)}}function h(t,e){return function(n,i){return Object(o.j)(t,n,e)}}function f(t,e,n,i){return function(r,s){var a="function"==typeof n?n():n,u="function"==typeof n?i():i,c=Object(o.f)(t,r);return c=Object(o.o)(c),c=Object(o.b)(a,u,c),Object(o.i)(c,e,t)}}},function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var i=n(11),o=n(4),r=n(9),s=n(2),a=n(1),u=n(5),c=n(12);function h(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var f=function(){function t(e,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var o=this,u=i.parent||Object(r.a)(e);this.options=Object.assign({timeEnd:200,timeExcange:400,parent:u},i),this.positioningStrategy=i.strategy||new c.a(this.getRectangle.bind(this),{radius:80,getDistance:Object(a.q)({x:1,y:4}),removable:!0}),this.element=e,n.forEach((function(t){return t.targets.push(o)})),this.draggables=n,this.onAdd=new s.a(this),this.beforeAdd=new s.a(this),this.onRemove=new s.a(this),i.onRemove&&this.onRemove.add(i.onRemove),i.onAdd&&this.onAdd.add(i.onAdd),i.beforeAdd&&this.beforeAdd.add(i.beforeAdd),t.onCreate.fire(this),this.init()}var e,n,f;return e=t,(n=[{key:"positioning",value:function(t,e){return this.positioningStrategy.positioning(t,e)}},{key:"sorting",value:function(t,e,n){return this.positioningStrategy.sorting(t,e,n)}},{key:"init",value:function(){var t,e,n=this;this.innerDraggables=this.draggables.filter((function(t){for(var e=t.element.parentNode;e;){if(e===n.element)return!0;e=e.parentNode}return!1})),this.innerDraggables.length&&(e=Object(i.a)(this.innerDraggables.length),t=this.positioning(this.innerDraggables.map((function(t){return t.getRectangle()})),e),this.setPosition(t,e),this.innerDraggables.forEach((function(t){return n.onAdd.fire(t)})))}},{key:"getRectangle",value:function(){return Object(a.d)(this.element,this.options.parent,this.options.isContentBoxSize,!0)}},{key:"catchDraggable",value:function(t){if(this.options.catchDraggable)return this.options.catchDraggable(this,t);var e=this.getRectangle();return t.getRectangle().getSquare()<e.getSquare()&&e.includePoint(t.getCenter())}},{key:"getPosition",value:function(){return this.getRectangle().position}},{key:"getSize",value:function(){return this.getRectangle().size}},{key:"destroy",value:function(){var t=this;u.e.forEach((function(e){return Object(o.a)(e.targets,t)}))}},{key:"refresh",value:function(){var t=this.positioning(this.innerDraggables.map((function(t){return t.getRectangle()})),[]);this.setPosition(t,[],0)}},{key:"onEnd",value:function(t){var e=[];if(!this.getRectangle().includePoint(t.getPosition())){if(!this.getRectangle().includePoint(t.getCenter()))return!1;t.position=t.getCenter().clone()}this.beforeAdd.fire(t),this.innerDraggables=this.sorting(this.innerDraggables,[t],e);var n=this.positioning(this.innerDraggables.map((function(t){return t.getRectangle()})),e);return this.setPosition(n,e),-1!==this.innerDraggables.indexOf(t)&&this.addRemoveOnMove(t),!0}},{key:"setPosition",value:function(t,e,n){var i=this;this.innerDraggables.slice(0).forEach((function(r,s){var a=t[s],u=n||0===n?n:-1!==e.indexOf(s)?i.options.timeEnd:i.options.timeExcange;a.removable?(r.move(r.initPosition,u,!0,!0),Object(o.a)(i.innerDraggables,r),i.onRemove.fire(r)):r.move(a.position,u,!0,!0)}))}},{key:"add",value:function(t,e){var n=this.innerDraggables.length;this.beforeAdd.fire(t),this.pushInnerDraggable(t);var i=this.positioning(this.innerDraggables.map((function(t){return t.getRectangle()})),n,t);this.setPosition(i,[n],e||0),-1!==this.innerDraggables.indexOf(t)&&this.addRemoveOnMove(t)}},{key:"pushInnerDraggable",value:function(t){-1===this.innerDraggables.indexOf(t)&&this.innerDraggables.push(t)}},{key:"addRemoveOnMove",value:function(t){var e=this;t.onMove.add(this.removeHandler=function(){e.remove(t)}),this.onAdd.fire(t)}},{key:"remove",value:function(t){t.onMove.remove(this.removeHandler);var e=this.innerDraggables.indexOf(t);if(-1!==e){this.innerDraggables.splice(e,1);var n=this.positioning(this.innerDraggables.map((function(t){return t.getRectangle()})),[]);this.setPosition(n,[]),this.onRemove.fire(t)}}},{key:"reset",value:function(){var t=this;this.innerDraggables.forEach((function(e){e.move(e.initPosition,0,!0,!0),t.onRemove.fire(e)})),this.innerDraggables=[]}},{key:"getSortedDraggables",value:function(){this.innerDraggables.slice()}}])&&h(e.prototype,n),f&&h(e,f),t}();f.onCreate=new s.a(f,{isReverse:!0,isStopOnTrue:!0}),f.onCreate.add((function(t){u.b.addTarget(t)}))},function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n(0);function o(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var r=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.position=e,this.size=n}var e,n,r;return e=t,(n=[{key:"getP1",value:function(){return this.position}},{key:"getP2",value:function(){return new i.a(this.position.x+this.size.x,this.position.y)}},{key:"getP3",value:function(){return this.position.add(this.size)}},{key:"getP4",value:function(){return new i.a(this.position.x,this.position.y+this.size.y)}},{key:"getCenter",value:function(){return this.position.add(this.size.mult(.5))}},{key:"or",value:function(e){var n=new i.a(Math.min(this.position.x,e.position.x),Math.min(this.position.y,e.position.y));return new t(n,new i.a(Math.max(this.position.x+this.size.x,e.position.x+e.size.x),Math.max(this.position.y+this.size.y,e.position.y+e.size.y)).sub(n))}},{key:"and",value:function(e){var n=new i.a(Math.max(this.position.x,e.position.x),Math.max(this.position.y,e.position.y)),o=new i.a(Math.min(this.position.x+this.size.x,e.position.x+e.size.x),Math.min(this.position.y+this.size.y,e.position.y+e.size.y)).sub(n);return o.x<=0||o.y<=0?null:new t(n,o)}},{key:"includePoint",value:function(t){return!(this.position.x>t.x||this.position.x+this.size.x<t.x||this.position.y>t.y||this.position.y+this.size.y<t.y)}},{key:"includeRectangle",value:function(t){return this.includePoint(t.position)&&this.includePoint(t.getP3())}},{key:"moveToBound",value:function(t,e){var n,i;if(e)n=e;else{if(!(i=this.and(t)))return t;n=i.size.x>i.size.y?"y":"x"}var o=this.getCenter(),r=t.getCenter(),s=(o[n]>r[n]?-1:1)>0?this.position[n]+this.size[n]-t.position[n]:this.position[n]-(t.position[n]+t.size[n]);return t.position[n]=t.position[n]+s,t}},{key:"getSquare",value:function(){return this.size.x*this.size.y}},{key:"styleApply",value:function(t){(t=t||document.querySelector("ind")).style.left=this.position.x+"px",t.style.top=this.position.y+"px",t.style.width=this.size.x+"px",t.style.height=this.size.y+"px"}},{key:"growth",value:function(t){this.size=this.size.add(t),this.position=this.position.add(t.mult(-.5))}},{key:"getMinSide",value:function(){return Math.min(this.size.x,this.size.y)}}])&&o(e.prototype,n),r&&o(e,r),t}()},function(t,e,n){"use strict";function i(t){for(var e=t.parentNode;e.parentNode&&"static"===window.getComputedStyle(e).position;)e=e.parentNode;return e}n.d(e,"a",(function(){return i}))},function(t,e,n){var i;
/*!
 * getStyleProperty v1.0.4
 * original by kangax
 * http://perfectionkills.com/feature-testing-css-properties/
 * MIT license
 */!function(o){"use strict";var r="Webkit Moz ms Ms O".split(" "),s=document.documentElement.style;function a(t){if(t){if("string"==typeof s[t])return t;var e;t=t.charAt(0).toUpperCase()+t.slice(1);for(var n=0,i=r.length;n<i;n++)if(e=r[n]+t,"string"==typeof s[e])return e}}void 0===(i=function(){return a}.call(e,n,e,t))||(t.exports=i)}(window)},function(t,e,n){"use strict";function i(t,e,n){var i=[];if(void 0===e&&(e=t,t=0),void 0===n&&(n=1),n>0&&t>=e||n<0&&t<=e)return[];for(var o=t;n>0?o<e:o>e;o+=n)i.push(o);return i}n.d(e,"a",(function(){return i}))},function(t,e,n){"use strict";n.d(e,"c",(function(){return d})),n.d(e,"a",(function(){return p})),n.d(e,"b",(function(){return v}));var i=n(0),o=n(1);function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function h(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function f(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function g(t,e,n){return e&&f(t.prototype,e),n&&f(t,n),t}var l=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};h(this,t),this.rectangle=e,this.options=n}return g(t,[{key:"boundRect",get:function(){return"function"==typeof this.rectangle?this.rectangle():this.rectangle}}]),t}(),d=function(t){function e(){return h(this,e),s(this,a(e).apply(this,arguments))}return u(e,t),g(e,[{key:"positioning",value:function(t,e){var n=this,i=t.reduce((function(t,n,i){return-1===e.indexOf(i)&&t.push(i),t}),[]);return e.forEach((function(e){var o=t[e];i.forEach((function(e){var n=t[e];o=n.moveToBound(o)})),i.some((function(e){return!!t[e].and(o)}))||o.and(n.boundRect).getSquare()!==o.getSquare()?o.removable=!0:i.push(e)})),t}},{key:"sorting",value:function(t,e,n){var i=t.concat(e);return e.forEach((function(t){n.push(i.indexOf(t))})),i}}]),e}(l),p=function(t){function e(t){var n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return h(this,e),(n=s(this,a(e).call(this,t,r))).options=Object.assign({removable:!0},r),n.radius=r.radius||80,n.paddingTopLeft=r.paddingTopLeft||new i.a(0,0),n.paddingBottomRight=r.paddingBottomRight||new i.a(0,0),n.yGapBetweenDraggables=r.yGapBetweenDraggables||0,n.getDistance=r.getDistance||o.g,n.getPosition=r.getPosition||function(t){return t.position},n}return u(e,t),g(e,[{key:"positioning",value:function(t,e){var n=this,r=this.boundRect,s=r.getP2(),a=[r.position];return t.forEach((function(t){for(var e,u=!1,c=0;c<a.length&&!(u=(e=new i.a(a[c].x,c>0?a[c-1].y+n.yGapBetweenDraggables:r.position.y).add(n.paddingTopLeft)).x+t.size.x<s.x);c++);u||(e=new i.a(r.position.x,a[a.length-1].y+n.yGapBetweenDraggables).add(n.paddingTopLeft)),t.position=e,n.options.removable&&t.getP3().y>r.getP3().y&&(t.removable=!0),a=Object(o.a)(a,t.getP3().add(n.paddingBottomRight))})),t}},{key:"sorting",value:function(t,e,n){var i=this,r=t.concat(),s=t.map((function(t){return t.getPosition()}));return e.forEach((function(e){var n=Object(o.n)(s,i.getPosition(e),i.radius,i.getDistance);n=-1===n?r.length:r.indexOf(t[n]),r.splice(n,0,e)})),e.forEach((function(t){n.push(r.indexOf(t))})),r}}]),e}(l),v=function(t){function e(t){var n,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return h(this,e),(n=s(this,a(e).call(this,t,o))).paddingTopRight=o.paddingTopRight||new i.a(5,5),n.paddingBottomLeft=o.paddingBottomLeft||new i.a(0,0),n.paddingTopNegRight=new i.a(-n.paddingTopRight.x,n.paddingTopRight.y),n.paddingBottomNegLeft=new i.a(-n.paddingBottomLeft.x,n.paddingBottomLeft.y),n}return u(e,t),g(e,[{key:"positioning",value:function(t,e){var n=this,r=this.boundRect,s=[r.getRightTopPoint()];return t.forEach((function(t,e){for(var a,u=!1,c=0;c<s.length&&!(u=(a=new i.a(s[c].x-t.size.x,c>0?s[c-1].y:r.position.y).add(n.paddingTopNegRight)).x>t.position.x);c++);u||(a=new i.a(r.getP2().x,s[s.length-1].y)),t.position=a,n.options.removable&&t.getLeftBottomPoint().y>r.getP4().y&&(t.removable=!0),s=Object(o.a)(s,t.getP4().add(n.paddingBottomNegLeft),!0)})),t}}]),e}(p)},function(t,e,n){"use strict";n.r(e),n.d(e,"List",(function(){return u})),n.d(e,"listFactory",(function(){return c}));var i=n(4),o=n(2),r=n(1),s=n(3);function a(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var u=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.options=Object.assign({timeEnd:200,timeExcange:400,radius:30,getDistance:r.g,isDisplacement:!1,isSortable:!0},n),this.draggables=e,this.onChange=new o.a(this),n.onChange&&this.onChange.add(n.onChange),this.init()}var e,n,s;return e=t,(n=[{key:"init",value:function(){this._enable=!0,this.draggables.forEach(this.initDraggable,this)}},{key:"initDraggable",value:function(t){var e,n=this,i=this;t.enable=this._enable,this.options.isDisplacement?(e=function(){if(t.isDragging)return i.onStart(t),t.onMove.remove(e),!0},t.onEnd.add((function(){return n.onEndDisplaycement(t),t.onMove.add(e),!0})),t.onMove.add(e)):t.onEnd.add((function(){return n.onEnd(t),!0}))}},{key:"moveOrSave",value:function(t,e,n){t.isDragging?t.fixPosition=e:t.move(e,n,!0)}},{key:"onEnd",value:function(t){var e=this.getCurrentFixPosition(),n=this.draggables.indexOf(t),i=Object(r.n)(e,t.position,this.options.radius,this.options.getDistance);return-1===i||i===n?t.move(t.fixPosition,this.options.timeEnd,!0):(this.moveOrSave(this.draggables[i],e[n],this.options.timeExcange),this.draggables[n].move(e[i],this.options.timeEnd,!0),this.onChange.fire()),!0}},{key:"sortIfPossible",value:function(t){var e=t.fixPosition,n=this.draggables.indexOf(t),i=this.draggables[n+1],o=this.draggables[n-1];if(t.downDirection&&i&&this.options.getDistance(t.position,i.position)<this.options.radius){t.fixPosition=i.fixPosition,this.moveOrSave(i,e,this.options.timeExcange);var r=[this.draggables[n+1],this.draggables[n]];this.draggables[n]=r[0],this.draggables[n+1]=r[1],this.sortIfPossible(t)}if(t.upDirection&&o&&this.options.getDistance(t.position,o.position)<this.options.radius){t.fixPosition=o.fixPosition,this.moveOrSave(o,e,this.options.timeExcange);var s=[this.draggables[n-1],this.draggables[n]];this.draggables[n]=s[0],this.draggables[n-1]=s[1],this.sortIfPossible(t)}}},{key:"onEndDisplaycement",value:function(t){var e=this.getSortedDraggables(),n=e.map((function(t){return t.fixPosition})),i=e.indexOf(t),o=Object(r.n)(n,t.position,this.options.radius,this.options.getDistance);if(-1!==o){if(o<i)for(var s=o;s<i;s++)this.moveOrSave(e[s],n[s+1],this.options.timeExcange);else for(var a=i;a<o;a++)this.moveOrSave(e[a+1],n[a],this.options.timeExcange);t.move(n[o],this.options.timeEnd,!0)}else t.move(t.fixPosition,this.options.timeEnd,!0)}},{key:"onStart",value:function(t){var e,n=this.getSortedDraggables(),i=n.map((function(t){return t.fixPosition})),o=n.indexOf(t);for(e=o+1;e<n.length;e++)this.moveOrSave(n[e],i[e-1],this.options.timeExcange);n[o].fixPosition=i[e-1]}},{key:"getCurrentFixPosition",value:function(){return this.draggables.map((function(t){return t.fixPosition.clone()}))}},{key:"getSortedDraggables",value:function(){var t=this;return this.draggables.map((function(t){return t.initPosition})).map((function(e){return t.draggables.filter((function(t){return t.fixPosition.compare(e)}))[0]}))}},{key:"reset",value:function(){this.draggables.forEach((function(t){t.move(t.initPosition,0,!0,!1)}))}},{key:"refresh",value:function(){this.draggables.forEach((function(t){t.refresh()}))}},{key:"add",value:function(t){t instanceof Array||(t=[t]),t.forEach(this.initDraggable,this),this.draggables=this.draggables.concat(t)}},{key:"remove",value:function(t){var e=this,n=this.draggables.map((function(t){return t.initPosition})),o=[],r=this.getSortedDraggables();t instanceof Array||(t=[t]),t.forEach((function(t){t.onEnd.reset(),t.onMove.reset(),Object(i.a)(e.draggables,t)}));var s=0;r.forEach((function(t){-1!==e.draggables.indexOf(t)&&(t.fixPosition!==n[s]&&t.move(n[s],e.options.timeExcange,!0),t.initPosition=n[s],s++,o.push(t))})),this.draggables=o}},{key:"clear",value:function(){this.remove(this.draggables.slice())}},{key:"destroy",value:function(){this.draggables.forEach((function(t){return t.destroy()}))}},{key:"positions",get:function(){return this.getCurrentFixPosition()},set:function(t){var e=this;if(t.length!==this.draggables.length)throw"wrong array length";t.forEach((function(t,n){e.draggables[n].move(t,0,!0,!0)}),this)}},{key:"enable",get:function(){return this._enable},set:function(t){this._enable=t,this.draggables.forEach((function(e){e.enable=t}))}}])&&a(e.prototype,n),s&&a(e,s),t}();function c(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=n.draggable||{},o=n.list||{};i.parent=i.parent||t;var r=(e=Array.prototype.slice.call(e)).map((function(t){return new s.Draggable(t,i)}));return new u(r,o)}},,function(t,e,n){"use strict";n.r(e),n.d(e,"Sortable",(function(){return f})),n.d(e,"sortableFactory",(function(){return g}));var i=n(13),o=n(1),r=n(3);function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function u(t,e){return!e||"object"!==s(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){return(h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var f=function(t){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),n.getDistance=n.getDistance||o.m,u(this,c(e).call(this,t,n))}var n,i,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}(e,t),n=e,(i=[{key:"initDraggable",value:function(t){var e=this;t.enable=this._enable,this.options.isSortable&&(t.onMove.add((function(){if(t.isDragging)return e.exchangeDraggableIfPossible(t),!0})),t.onEnd.add((function(){t.move(t.fixPosition,e.options.timeEnd)})))}},{key:"exchangeDraggableIfPossible",value:function(t){var e=t.fixPosition,n=this.draggables.indexOf(t),i=this.draggables[n+1],o=this.draggables[n-1];if(t.downDirection&&i&&this.options.getDistance(t.position,i.position)<this.options.radius){t.fixPosition=i.fixPosition,this.moveOrSave(i,e,this.options.timeExcange);var r=[this.draggables[n+1],this.draggables[n]];this.draggables[n]=r[0],this.draggables[n+1]=r[1],this.exchangeDraggableIfPossible(t)}if(t.upDirection&&o&&this.options.getDistance(t.position,o.position)<this.options.radius){t.fixPosition=o.fixPosition,this.moveOrSave(o,e,this.options.timeExcange);var s=[this.draggables[n-1],this.draggables[n]];this.draggables[n]=s[0],this.draggables[n-1]=s[1],this.exchangeDraggableIfPossible(t)}}}])&&a(n.prototype,i),r&&a(n,r),e}(i.List);function g(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=n.draggable||{},o=n.list||{};i.parent=i.parent||t;var s=(e=Array.prototype.slice.call(e)).map((function(t){return new r.Draggable(t,i)}));return new f(s,o)}}])}));