!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("Dragee",[],e):"object"==typeof exports?exports.Dragee=e():t.Dragee=e()}(window,(function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=15)}([function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function r(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return u}));var s=function(){function t(e,n){i(this,t),this.x=e,this.y=n}return r(t,[{key:"add",value:function(e){return new t(this.x+e.x,this.y+e.y)}},{key:"sub",value:function(e){return new t(this.x-e.x,this.y-e.y)}},{key:"mult",value:function(e){return new t(this.x*e,this.y*e)}},{key:"negative",value:function(){return new t(-this.x,-this.y)}},{key:"compare",value:function(t){return this.x===t.x&&this.y===t.y}},{key:"clone",value:function(){return new t(this.x,this.y)}},{key:"toString",value:function(){return"{x=".concat(this.x,",y=").concat(this.y)}}]),t}(),a=function(){function t(e,n){i(this,t),this.position=e,this.size=n}return r(t,[{key:"getP1",value:function(){return this.position}},{key:"getP2",value:function(){return new s(this.position.x+this.size.x,this.position.y)}},{key:"getP3",value:function(){return this.position.add(this.size)}},{key:"getP4",value:function(){return new s(this.position.x,this.position.y+this.size.y)}},{key:"getCenter",value:function(){return this.position.add(this.size.mult(.5))}},{key:"or",value:function(e){var n=new s(Math.min(this.position.x,e.position.x),Math.min(this.position.y,e.position.y));return new t(n,new s(Math.max(this.position.x+this.size.x,e.position.x+e.size.x),Math.max(this.position.y+this.size.y,e.position.y+e.size.y)).sub(n))}},{key:"and",value:function(e){var n=new s(Math.max(this.position.x,e.position.x),Math.max(this.position.y,e.position.y)),i=new s(Math.min(this.position.x+this.size.x,e.position.x+e.size.x),Math.min(this.position.y+this.size.y,e.position.y+e.size.y)).sub(n);return i.x<=0||i.y<=0?null:new t(n,i)}},{key:"includePoint",value:function(t){return!(this.position.x>t.x||this.position.x+this.size.x<t.x||this.position.y>t.y||this.position.y+this.size.y<t.y)}},{key:"includeRectangle",value:function(t){return this.includePoint(t.position)&&this.includePoint(t.getP3())}},{key:"moveToBound",value:function(t,e){var n,i;if(e)n=e;else{if(!(i=this.and(t)))return t;n=i.size.x>i.size.y?"y":"x"}var o=this.getCenter(),r=t.getCenter(),s=(o[n]>r[n]?-1:1)>0?this.position[n]+this.size[n]-t.position[n]:this.position[n]-(t.position[n]+t.size[n]);return t.position[n]=t.position[n]+s,t}},{key:"getSquare",value:function(){return this.size.x*this.size.y}},{key:"styleApply",value:function(t){(t=t||document.querySelector("ind")).style.left=this.position.x+"px",t.style.top=this.position.y+"px",t.style.width=this.size.x+"px",t.style.height=this.size.y+"px"}},{key:"growth",value:function(t){this.size=this.size.add(t),this.position=this.position.add(t.mult(-.5))}},{key:"getMinSide",value:function(){return Math.min(this.size.x,this.size.y)}}]),t}(),u={getDistance:function(t,e){var n=t.x-e.x,i=t.y-e.y;return Math.sqrt(n*n+i*i)},distance:function(t,e){return u.getDistance(t,e)},getXDifference:function(t,e){return Math.abs(t.x-e.x)},getYDifference:function(t,e){return Math.abs(t.y-e.y)},transformedSpaceDistanceFactory:function(t){return function(e,n){return Math.sqrt(Math.pow(t.x*Math.abs(e.x-n.x),2)+Math.pow(t.y*Math.abs(e.y-n.y),2))}},indexOfNearestPoint:function(t,e,n,i){var o,r,s,a=0;if(i=i||u.getDistance,0===t.length)return-1;for(o=i(t[0],e),r=0;r<t.length;r++)(s=i(t[r],e))<o&&(o=s,a=r);return n>=0&&o>n?-1:a},bound:function(t,e,n){return Math.max(t,Math.min(e,n))},boundPoint:function(t,e,n){var i=Math.max(t.x,Math.min(e.x,n.x)),o=Math.max(t.y,Math.min(e.y,n.y));return new s(i,o)},directCrossing:function(t,e,n,i){var o,r,a,u,h,c;return n.x===i.x&&(o=n,n=t,t=o,o=i,i=e,e=o),t.x===e.x?(a=(i.y-n.y)/(i.x-n.x),h=(i.x*n.y-n.x*i.y)/(i.x-n.x),c=t.x,new s(c,c*a+h)):(r=(e.y-t.y)/(e.x-t.x),u=(e.x*t.y-t.x*e.y)/(e.x-t.x),a=(i.y-n.y)/(i.x-n.x),h=(i.x*n.y-n.x*i.y)/(i.x-n.x),new s(c=(u-h)/(a-r),c*r+u))},boundToSegment:function(t,e,n){var i,o;return(i=u.bound(Math.min(t.x,e.x),Math.max(t.x,e.x),n.x))!==n.x&&(o=i===t.x?t.y:e.y,n=new s(i,o)),(o=u.bound(Math.min(t.y,e.y),Math.max(t.y,e.y),n.y))!==n.y&&(i=o===t.y?t.x:e.x,n=new s(i,o)),n},boundToLine:function(t,e,n){var i=new s(n.x-t.x,n.y-t.y),o=new s(e.x-t.x,e.y-t.y),r=o.x*o.x+o.y*o.y,a=(i.x*o.x+i.y*o.y)/r;return new s(t.x+o.x*a,t.y+o.y*a)},getPointInLine:function(t,e,n){var i=e.x-t.x,o=e.y-t.y;return new s(t.x+n*i,t.y+n*o)},getPointInLineByLenght:function(t,e,n){var i=e.x-t.x,o=e.y-t.y,r=n/u.distance(t,e);return new s(t.x+r*i,t.y+r*o)},createRectangleFromElement:function(t,e,n,i){var o=this.getSizeOfElement(t,n);return new a(this.getOffset(t,e||t.parentNode,i),o)},getSumValueOfStyleRule:function(t,e){return e.reduce((function(e,n){return e+parseInt(window.getComputedStyle(t)[n]||0)}),0)},getSizeOfElement:function(t,e){var n=parseInt(window.getComputedStyle(t).width),i=parseInt(window.getComputedStyle(t).height);return e||(n+=this.getSumValueOfStyleRule(t,["padding-left","padding-right","border-left-width","border-right-width"]),i+=this.getSumValueOfStyleRule(t,["padding-top","padding-bottom","border-top-width","border-bottom-width"])),new s(n,i)},getOffset:function(t,e){var n=t.getBoundingClientRect(),i=e.getBoundingClientRect();return new s(n.left-i.left,n.top-i.top)},getPointFromRadialSystem:function(t,e,n){return(n=n||new s(0,0)).add(new s(e*Math.cos(t),e*Math.sin(t)))},addPointToBoundPoints:function(t,e,n){for(var i=t.filter((function(t){return t.y>e.y||(n?t.x<e.x:t.x>e.x)})),o=0;o<i.length;o++)if(e.y<i[o].y)return i.splice(o,0,e),i;return i.push(e),i},getAngle:function(t,e){var n=e.sub(t);return this.normalizeAngle(Math.atan2(n.y,n.x))},toRadian:function(t){return t%360*Math.PI/180},toDegree:function(t){return 180*t/Math.PI%360},boundAngle:function(t,e,n){return t<e&&n>t&&n<e?n:e<t&&(n<e||n>t)?n:this.getAngleDiff(t,n)<this.getAngleDiff(e,n)?t:e},getNearestAngle:function(t,e){var n,i,o,r=2*Math.PI;for(n=0;n<t.length;n++)r<(i=u.getAngleDiff(t[n],e))&&(r=i,o=t[n]);return o},getAngleDiff:function(t,e){var n=Math.min(t,e),i=Math.max(t,e);return Math.min(i-n,n+2*Math.PI-i)},normalizeAngle:function(t){for(;t<0;)t+=2*Math.PI;for(;t>2*Math.PI;)t-=2*Math.PI;return t}}},function(t,e,n){"use strict";function i(t,e){(function(t,e){return new RegExp("(^|\\s)"+e+"(\\s|$)","g").test(t.className)})(t,e)||(t.className=(t.className+" "+e).replace(/\s+/g," ").replace(/(^ | $)/g,""))}function o(t,e){var n=new RegExp("(^|\\s)"+e+"(\\s|$)","g");t.className=t.className.replace(n,"$1").replace(/\s+/g," ").replace(/(^ | $)/g,"")}n.r(e);var r=n(7),s=n(2),a=n(8),u=n.n(a),h=n(5),c=n(0),f=n(4);function l(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n.d(e,"Draggable",(function(){return E})),n.d(e,"events",(function(){return y}));var g={Event:s.a},d="ontouchstart"in window,p={start:"mousedown",move:"mousemove",end:"mouseup"},v={start:"touchstart",move:"touchmove",end:"touchend"},y=d?v:p,m=[],b=u()("transform"),x=u()("transition");function w(t,e){for(var n=0;n<t.changedTouches.length;n++)if(t.changedTouches[n].identifier===e)return t.changedTouches[n];return!1}var E=function(){function t(e){var n=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var o=i.parent||Object(r.a)(e);this.targets=[],this.options=Object.assign({parent:o,bound:Object(h.c)(o,o),startFilter:!1,isContentBoxSize:!1,position:!1},i),"string"==typeof i.handler?this.handler=e.querySelector(i.handler)||e:this.handler=i.handler||e,this.onEnd=new g.Event(this,{isReverse:!0,isStopOnTrue:!0}),this.onMove=new g.Event(this),this.onStart=new g.Event(this),this.onEnd.add((function(){return n.move(n.position,0,!0,!0)})),i.onEnd&&this.onEnd.add(i.onEnd),i.onMove&&this.onMove.add(i.onMove),i.onStart&&this.onStart.add(i.onStart),this.element=e,this.bound=this.options.bound,function(t){if(m.some((function(e){return t.element===e.element})))throw"for this element Dragee.Draggable is already exist, don't create it twice ";m.push(t)}(this),t.onCreate.fire(this),this.init()}var e,n,s;return e=t,(n=[{key:"init",value:function(){this._enable=!0,this.offset=c.a.getOffset(this.element,this.options.parent,!0),this.fixPosition=this.offset,this.position=this.offset,this.options.position?(this.initPosition=this.options.position,this.move(this.initPosition,0,!0,!0)):this.initPosition=this.offset,this._dragStart=this.dragStart.bind(this),this._dragMove=this.dragMove.bind(this),this._dragEnd=this.dragEnd.bind(this),this.handler.addEventListener(v.start,this._dragStart),this.handler.addEventListener(p.start,this._dragStart),this.bound.refresh&&this.bound.refresh()}},{key:"reinit",value:function(){this.offset=c.a.getOffset(this.element,this.options.parent,!0),this.fixPosition=this.offset,this.position=this.offset,this.options.position?(this.initPosition=this.options.position,this.move(this.initPosition,0,!0,!0)):this.initPosition=this.offset,this.bound.refresh&&this.bound.refresh()}},{key:"getSize",value:function(t){return c.a.getSizeOfElement(this.element,this.options.isContentBoxSize)}},{key:"getPosition",value:function(){return this.position=this.offset.add(this._transformPosition||new c.b(0,0)),this.position}},{key:"getCenter",value:function(){return this.position.add(this.getSize().mult(.5))}},{key:"_setTranslate",value:function(t){this._transformPosition=t;var e=this.element.style[b],n=this.isDragging?1:0,i=" translate3d(".concat(t.x,"px, ").concat(t.y,"px, ").concat(n,"px)");window.navigator.userAgent.indexOf("MSIE ")?(i=" translate("+t.x+"px,"+t.y+"px)",/translate\([^)]+\)/.test(e)?e=e.replace(/translate\([^)]+\)/,i):e+=i):/translate3d\([^)]+\)/.test(e)?e=e.replace(/translate3d\([^)]+\)/,i):e+=i,this.element.style[b]=e}},{key:"move",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];t=t.clone(),n&&(this.fixPosition=t),this.determineDirection(t),this.position=t,x&&(this.element.style[x]=e+"ms"),this._setTranslate(t.sub(this.offset)),i||this.onMove.fire()}},{key:"refreshPosition",value:function(){this.setPosition(this.getPosition())}},{key:"setPosition",value:function(t){t=t.clone(),this.position=t,x&&(this.element.style[x]="0ms"),this._setTranslate(t.sub(this.offset))}},{key:"setZeroTransition",value:function(){x&&(this.element.style[x]="0ms")}},{key:"determineDirection",value:function(t){this.leftDirection=this.position.x<t.x,this.rightDirection=this.position.x>t.x,this.upDirection=this.position.y>t.y,this.downDirection=this.position.y<t.y}},{key:"dragStart",value:function(t){if(this.currentEvent=t,this._enable&&(!this.options.startFilter||this.options.startFilter(t))){var e=d&&t instanceof window.TouchEvent;this._startTouchPoint=new c.b(e?t.changedTouches[0].pageX:t.clientX,e?t.changedTouches[0].pageY:t.clientY),this._startPosition=this.getPosition(),e&&(this._touchId=t.changedTouches[0].identifier),t.stopPropagation(),t.target instanceof window.HTMLInputElement||t.target instanceof window.HTMLInputElement?t.target.focus():t.preventDefault(),document.addEventListener(v.move,this._dragMove),document.addEventListener(p.move,this._dragMove),document.addEventListener(v.end,this._dragEnd),document.addEventListener(p.end,this._dragEnd),this.isDragging=!0,this.onStart.fire(t),i(this.element,"active"),this.onMove.fire(t)}}},{key:"dragMove",value:function(t){var e;this.currentEvent=t;var n=d&&t instanceof window.TouchEvent;if(!n||(e=w(t,this._touchId))){t.stopPropagation(),t.preventDefault();var i=new c.b(n?e.pageX:t.clientX,n?e.pageY:t.clientY),o=this._startPosition.add(i.sub(this._startTouchPoint));o=this.bound(o,this.getSize()),this.touchPoint=i,this.move(o,0)}}},{key:"dragEnd",value:function(t){d&&t instanceof window.TouchEvent&&!w(t,this._touchId)||(t.stopPropagation(),t.preventDefault(),this.onEnd.fire(t),document.removeEventListener(v.move,this._dragMove),document.removeEventListener(p.move,this._dragMove),document.removeEventListener(v.end,this._dragEnd),document.removeEventListener(p.end,this._dragEnd),this.isDragging=!1,o(this.element,"active"))}},{key:"getRectangle",value:function(){return new c.c(this.position,this.getSize())}},{key:"refresh",value:function(){this.getSize(!0),this.bound.refresh&&this.bound.refresh()}},{key:"destroy",value:function(){this.handler.removeEventListener(v.start,this._dragStart),this.handler.removeEventListener(p.start,this._dragStart),document.removeEventListener(v.move,this._dragMove),document.removeEventListener(p.move,this._dragMove),document.removeEventListener(v.end,this._dragEnd),document.removeEventListener(p.end,this._dragEnd),this.onEnd.reset(),this.onMove.reset()}},{key:"enable",get:function(){return this._enable},set:function(t){return t?o(this.element,"disable"):i(this.element,"disable"),this._enable=t}}])&&l(e.prototype,n),s&&l(e,s),t}();E.onCreate=new g.Event(E,{isReverse:!0,isStopOnTrue:!0}),E.onCreate.add((function(t){f.b.addDraggable(t)}))},function(t,e,n){"use strict";function i(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.funcs=[],this.context=t,this.isReverse=e.isReverse||!1,this.isStopOnTrue=e.isStopOnTrue||!1}i.prototype.fire=function(){for(var t,e=[].slice.call(arguments),n=this.isReverse?this.funcs.slice().reverse():this.funcs,i=0;i<n.length;i++)if(t=n[i].apply(this.context,e),this.isStopOnTrue&&t)return!0;return!this.isStopOnTrue},i.prototype.add=function(t){this.funcs.push(t)},i.prototype.unshift=function(t){this.funcs.unshift(t)},i.prototype.remove=function(t){var e=this.funcs.indexOf(t);-1!==e&&this.funcs.splice(e,1)},i.prototype.reset=function(t){this.funcs=[]},e.a=i},function(t,e,n){"use strict";e.a=function(t,e){for(var n=0;n<t.length;n++)t[n]===e&&(t.splice(n,1),n--);return t}},function(t,e,n){"use strict";n.d(e,"e",(function(){return h})),n.d(e,"b",(function(){return f})),n.d(e,"a",(function(){return c})),n.d(e,"d",(function(){return g})),n.d(e,"c",(function(){return l}));var i=n(3),o=n(2),r=n(1),s=n(6);function a(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var u={Event:o.a},h=[],c=function(){function t(e,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),h.forEach((function(t){e&&e.forEach((function(e){Object(i.a)(t.draggables,e)})),n&&n.forEach((function(e){Object(i.a)(t.targets,e)}))})),this.draggables=e||[],this.targets=n||[],h.push(this),this.options={timeEnd:o.timeEnd||400},this.onChange=new u.Event(this),o.onChange&&this.onChange.add(o.onChange),this.init()}var e,n,o;return e=t,(n=[{key:"init",value:function(){var t=this;this.draggables.forEach((function(e){e.onEnd.add((function(){return t.onEnd(e)}))}))}},{key:"addDraggable",value:function(t){var e=this;this.draggables.push(t),t.onEnd.unshift((function(){return e.onEnd(t)}))}},{key:"addTarget",value:function(t){this.targets.push(t)}},{key:"onEnd",value:function(t){var e=this.targets.filter((function(e){return-1!==e.draggables.indexOf(t)})).filter((function(e){return e.catchDraggable(t)})).sort((function(t,e){return t.getRectangle().getSquare()-e.getRectangle().getSquare()}));return e.length?e[0].onEnd(t):t.targets.length&&t.move(t.initPosition,this.options.timeEnd,!0,!0),this.onChange.fire(),!0}},{key:"reset",value:function(){this.targets.forEach((function(t){return t.reset()}))}},{key:"refresh",value:function(){this.draggables.forEach((function(t){return t.refresh()})),this.targets.forEach((function(t){return t.refresh()}))}},{key:"positions",get:function(){var t=this;return this.targets.map((function(e){return e.innerDraggables.map((function(e){return t.draggables.indexOf(e)}))}))},set:function(t){var e=this;if(t.length!==this.targets.length)throw"wrong array length";this.targets.forEach((function(t){return t.reset()})),t.forEach((function(t,n){t.forEach((function(t){e.targets[n].add(e.draggables[t])}))}))}}])&&a(e.prototype,n),o&&a(e,o),t}(),f=new c;function l(t){var e=new c,n=function(t){return e.addDraggable(t),!0},i=function(t){return e.addTarget(t),!0};return r.Draggable.onCreate.add(n),s.a.onCreate.add(i),t.call(),r.Draggable.onCreate.remove(n),s.a.onCreate.remove(i),e}function g(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=i.draggable||{},a=i.target||{},u=i.scope||{};o.parent=o.parent||t,a.parent=a.parent||t,e=Array.prototype.slice.call(e),n=Array.prototype.slice.call(n);var h=e.map((function(t){return new r.Draggable(t,o)})),f=n.map((function(t){return new s.a(t,h,a)}));return new c(h,f,u)}},function(t,e,n){"use strict";n.d(e,"g",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"e",(function(){return s})),n.d(e,"f",(function(){return a})),n.d(e,"d",(function(){return u})),n.d(e,"b",(function(){return h})),n.d(e,"a",(function(){return c}));var i=n(0);function o(t){return function(e,n){var i=e.clone(),o=t.getP3();return t.position.x>i.x&&(i.x=t.position.x),t.position.y>i.y&&(i.y=t.position.y),o.x<i.x+n.x&&(i.x=o.x-n.x),o.y<i.y+n.y&&(i.y=o.y-n.y),i}}function r(t,e){var n,r=function(){return n.apply(this,arguments)};return r.refresh=function(){n=o(i.a.createRectangleFromElement(t,e))},r.refresh(),r}function s(t,e,n){return function(i,o){var r=i.clone();return r.x=t,e>r.y&&(r.y=e),n<r.y+o.y&&(r.y=n-o.y),r}}function a(t,e,n){return function(i,o){var r=i.clone();return r.y=t,e>r.x&&(r.x=e),n<r.x+o.x&&(r.x=n-o.x),r}}function u(t,e){var n=Math.atan2(e.y-t.y,e.x-t.x)+Math.PI/2,o=Math.cos(n),r=Math.sin(n);return function(n,s){var a=new i.b(n.x+10*o,n.y+10*r),u=i.a.getPointInLineByLenght(e,t,s.x),h=i.a.directCrossing(t,e,n,a);return h=i.a.boundToLine(t,u,h)}}function h(t,e){return function(n,o){return i.a.getPointInLineByLenght(t,n,e)}}function c(t,e,n,o){return function(r,s){var a="function"==typeof n?n():n,u="function"==typeof n?o():o,h=i.a.getAngle(t,r);return h=i.a.normalizeAngle(h),h=i.a.boundAngle(a,u,h),i.a.getPointFromRadialSystem(h,e,t)}}},function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var i=n(9),o=n(3),r=n(7),s=n(2),a=n(0),u=n(4),h=n(10);function c(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var f={Event:s.a},l=function(){function t(e,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var o=this,s=i.parent||Object(r.a)(e);this.options=Object.assign({timeEnd:200,timeExcange:400,parent:s},i),this.positioningStrategy=i.strategy||new h.a(this.getRectangle.bind(this),{radius:80,getDistance:a.a.transformedSpaceDistanceFactory({x:1,y:4}),removable:!0}),this.element=e,n.forEach((function(t){return t.targets.push(o)})),this.draggables=n,this.onAdd=new f.Event(this),this.beforeAdd=new f.Event(this),this.onRemove=new f.Event(this),i.onRemove&&this.onRemove.add(i.onRemove),i.onAdd&&this.onAdd.add(i.onAdd),i.beforeAdd&&this.beforeAdd.add(i.beforeAdd),t.onCreate.fire(this),this.init()}var e,n,s;return e=t,(n=[{key:"positioning",value:function(t,e){return this.positioningStrategy.positioning(t,e)}},{key:"sorting",value:function(t,e,n){return this.positioningStrategy.sorting(t,e,n)}},{key:"init",value:function(){var t,e,n=this;this.innerDraggables=this.draggables.filter((function(t){for(var e=t.element.parentNode;e;){if(e===n.element)return!0;e=e.parentNode}return!1})),this.innerDraggables.length&&(e=Object(i.a)(this.innerDraggables.length),t=this.positioning(this.innerDraggables.map((function(t){return t.getRectangle()})),e),this.setPosition(t,e),this.innerDraggables.forEach((function(t){return n.onAdd.fire(t)})))}},{key:"getRectangle",value:function(){return a.a.createRectangleFromElement(this.element,this.options.parent,this.options.isContentBoxSize,!0)}},{key:"catchDraggable",value:function(t){if(this.options.catchDraggable)return this.options.catchDraggable(this,t);var e=this.getRectangle();return t.getRectangle().getSquare()<e.getSquare()&&e.includePoint(t.getCenter())}},{key:"getPosition",value:function(){return this.getRectangle().position}},{key:"getSize",value:function(){return this.getRectangle().size}},{key:"destroy",value:function(){var t=this;u.e.forEach((function(e){return Object(o.a)(e.targets,t)}))}},{key:"refresh",value:function(){var t=this.positioning(this.innerDraggables.map((function(t){return t.getRectangle()})),[]);this.setPosition(t,[],0)}},{key:"onEnd",value:function(t){var e=[];if(!this.getRectangle().includePoint(t.getPosition())){if(!this.getRectangle().includePoint(t.getCenter()))return!1;t.position=t.getCenter().clone()}this.beforeAdd.fire(t),this.innerDraggables=this.sorting(this.innerDraggables,[t],e);var n=this.positioning(this.innerDraggables.map((function(t){return t.getRectangle()})),e);return this.setPosition(n,e),-1!==this.innerDraggables.indexOf(t)&&this.addRemoveOnMove(t),!0}},{key:"setPosition",value:function(t,e,n){var i=this;this.innerDraggables.slice(0).forEach((function(r,s){var a=t[s],u=n||0===n?n:-1!==e.indexOf(s)?i.options.timeEnd:i.options.timeExcange;a.removable?(r.move(r.initPosition,u,!0,!0),Object(o.a)(i.innerDraggables,r),i.onRemove.fire(r)):r.move(a.position,u,!0,!0)}))}},{key:"add",value:function(t,e){var n=this.innerDraggables.length;this.beforeAdd.fire(t),this.pushInnerDraggable(t);var i=this.positioning(this.innerDraggables.map((function(t){return t.getRectangle()})),n,t);this.setPosition(i,[n],e||0),-1!==this.innerDraggables.indexOf(t)&&this.addRemoveOnMove(t)}},{key:"pushInnerDraggable",value:function(t){-1===this.innerDraggables.indexOf(t)&&this.innerDraggables.push(t)}},{key:"addRemoveOnMove",value:function(t){var e=this;t.onMove.add(this.removeHandler=function(){e.remove(t)}),this.onAdd.fire(t)}},{key:"remove",value:function(t){t.onMove.remove(this.removeHandler);var e=this.innerDraggables.indexOf(t);if(-1!==e){this.innerDraggables.splice(e,1);var n=this.positioning(this.innerDraggables.map((function(t){return t.getRectangle()})),[]);this.setPosition(n,[]),this.onRemove.fire(t)}}},{key:"reset",value:function(){var t=this;this.innerDraggables.forEach((function(e){e.move(e.initPosition,0,!0,!0),t.onRemove.fire(e)})),this.innerDraggables=[]}},{key:"getSortedDraggables",value:function(){this.innerDraggables.slice()}}])&&c(e.prototype,n),s&&c(e,s),t}();l.onCreate=new f.Event(l,{isReverse:!0,isStopOnTrue:!0}),l.onCreate.add((function(t){u.b.addTarget(t)}))},function(t,e,n){"use strict";function i(t){for(var e=t.parentNode;e.parentNode&&"static"===window.getComputedStyle(e).position;)e=e.parentNode;return e}n.d(e,"a",(function(){return i}))},function(t,e,n){var i;
/*!
 * getStyleProperty v1.0.4
 * original by kangax
 * http://perfectionkills.com/feature-testing-css-properties/
 * MIT license
 */!function(o){"use strict";var r="Webkit Moz ms Ms O".split(" "),s=document.documentElement.style;function a(t){if(t){if("string"==typeof s[t])return t;var e;t=t.charAt(0).toUpperCase()+t.slice(1);for(var n=0,i=r.length;n<i;n++)if(e=r[n]+t,"string"==typeof s[e])return e}}void 0===(i=function(){return a}.call(e,n,e,t))||(t.exports=i)}(window)},function(t,e,n){"use strict";function i(t,e,n){var i=[];if(void 0===e&&(e=t,t=0),void 0===n&&(n=1),n>0&&t>=e||n<0&&t<=e)return[];for(var o=t;n>0?o<e:o>e;o+=n)i.push(o);return i}n.d(e,"a",(function(){return i}))},function(t,e,n){"use strict";n.d(e,"c",(function(){return g})),n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return p}));var i=n(0);function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function h(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function f(t,e,n){return e&&c(t.prototype,e),n&&c(t,n),t}var l=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};h(this,t),this.rectangle=e,this.options=n}return f(t,[{key:"boundRect",get:function(){return"function"==typeof this.rectangle?this.rectangle():this.rectangle}}]),t}(),g=function(t){function e(){return h(this,e),r(this,s(e).apply(this,arguments))}return a(e,t),f(e,[{key:"positioning",value:function(t,e){var n=this,i=t.reduce((function(t,n,i){return-1===e.indexOf(i)&&t.push(i),t}),[]);return e.forEach((function(e){var o=t[e];i.forEach((function(e){var n=t[e];o=n.moveToBound(o)})),i.some((function(e){return!!t[e].and(o)}))||o.and(n.boundRect).getSquare()!==o.getSquare()?o.removable=!0:i.push(e)})),t}},{key:"sorting",value:function(t,e,n){var i=t.concat(e);return e.forEach((function(t){n.push(i.indexOf(t))})),i}}]),e}(l),d=function(t){function e(t){var n,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return h(this,e),(n=r(this,s(e).call(this,t,o))).options=Object.assign({removable:!0},o),n.radius=o.radius||80,n.paddingTopLeft=o.paddingTopLeft||new i.b(0,0),n.paddingBottomRight=o.paddingBottomRight||new i.b(0,0),n.yGapBetweenDraggables=o.yGapBetweenDraggables||0,n.getDistance=o.getDistance||i.a.getDistance,n.getPosition=o.getPosition||function(t){return t.position},n}return a(e,t),f(e,[{key:"positioning",value:function(t,e){var n=this,o=this.boundRect,r=o.getP2(),s=[o.position];return t.forEach((function(t){for(var e,a=!1,u=0;u<s.length&&!(a=(e=new i.b(s[u].x,u>0?s[u-1].y+n.yGapBetweenDraggables:o.position.y).add(n.paddingTopLeft)).x+t.size.x<r.x);u++);a||(e=new i.b(o.position.x,s[s.length-1].y+n.yGapBetweenDraggables).add(n.paddingTopLeft)),t.position=e,n.options.removable&&t.getP3().y>o.getP3().y&&(t.removable=!0),s=i.a.addPointToBoundPoints(s,t.getP3().add(n.paddingBottomRight))})),t}},{key:"sorting",value:function(t,e,n){var o=this,r=t.concat(),s=t.map((function(t){return t.getPosition()}));return e.forEach((function(e){var n=i.a.indexOfNearestPoint(s,o.getPosition(e),o.radius,o.getDistance);n=-1===n?r.length:r.indexOf(t[n]),r.splice(n,0,e)})),e.forEach((function(t){n.push(r.indexOf(t))})),r}}]),e}(l),p=function(t){function e(t){var n,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return h(this,e),(n=r(this,s(e).call(this,t,o))).paddingTopRight=o.paddingTopRight||new i.b(5,5),n.paddingBottomLeft=o.paddingBottomLeft||new i.b(0,0),n.paddingTopNegRight=new i.b(-n.paddingTopRight.x,n.paddingTopRight.y),n.paddingBottomNegLeft=new i.b(-n.paddingBottomLeft.x,n.paddingBottomLeft.y),n}return a(e,t),f(e,[{key:"positioning",value:function(t,e){var n=this,o=this.boundRect,r=[o.getRightTopPoint()];return t.forEach((function(t,e){for(var s,a=!1,u=0;u<r.length&&!(a=(s=new i.b(r[u].x-t.size.x,u>0?r[u-1].y:o.position.y).add(n.paddingTopNegRight)).x>t.position.x);u++);a||(s=new i.b(o.getP2().x,r[r.length-1].y)),t.position=s,n.options.removable&&t.getLeftBottomPoint().y>o.getP4().y&&(t.removable=!0),r=i.a.addPointToBoundPoints(r,t.getP4().add(n.paddingBottomNegLeft),!0)})),t}}]),e}(d)},,function(t,e,n){"use strict";function i(t,e){var n,i,o=document.createElement("canvas");return"static"===window.getComputedStyle(t).position&&(t.style.position="relative"),o.setAttribute("width",e.size.x+"px"),o.setAttribute("height",e.size.y+"px"),function(t,e){e=e||{};var n="";for(var i in e)e.hasOwnProperty(i)&&(n+=i+": "+e[i]+"; ");t.style.cssText=n}(o,{position:"absolute",left:e.position.y+"px",top:e.position.y+"px",width:e.size.x+"px",height:e.size.y+"px"}),i=o,(n=t).firstChild?n.insertBefore(i,n.firstChild):n.appendChild(i),o}n.d(e,"a",(function(){return i}))},,,function(t,e,n){"use strict";n.r(e),n.d(e,"Spider",(function(){return u}));var i=n(12),o=n(0),r=n(5),s=n(1);function a(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var u=function(){function t(e,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var r=o.a.createRectangleFromElement(e,e);this.options=Object.assign({angle:0,dAngle:2*Math.PI/n.length,center:r.getCenter(),startRadius:50,endRadius:r.getMinSide()/2,lineWidth:2,strokeStyle:"#ff5577",fillStyle:"rgba(150,255,50,0.8)"},i),this.area=e,this.areaRectangle=r,this.init(n)}var e,n,u;return e=t,(n=[{key:"init",value:function(t){var e=this;this.canvas=Object(i.a)(this.area,this.areaRectangle),this.context=this.canvas.getContext("2d"),this.draggables=t.map((function(t,n){var i=e.options.angle+n*e.options.dAngle,a=o.a.getSizeOfElement(t).mult(.5),u=o.a.getPointFromRadialSystem(i,e.options.startRadius,e.options.center).sub(a),h=o.a.getPointFromRadialSystem(i,e.options.endRadius,e.options.center).sub(a),c=Object(r.d)(u,h);return new s.Draggable(t,{parent:e.area,bound:c,position:u,onMove:function(){return e.draw(),!0}})})),this.isInit=!0,this.draw()}},{key:"draw",value:function(){if(this.isInit){this.context.clearRect(0,0,this.areaRectangle.size.x,this.areaRectangle.size.y),this.context.beginPath();var t=this.draggables[0].getCenter();this.context.moveTo(t.x,t.y);for(var e=0;e<this.draggables.length;e++)t=this.draggables[e].getCenter(),this.context.lineTo(t.x,t.y);this.context.closePath(),this.context.lineWidth=this.options.lineWidth,this.context.strokeStyle=this.options.strokeStyle,this.context.stroke(),this.context.fillStyle=this.options.fillStyle,this.context.fill()}}}])&&a(e.prototype,n),u&&a(e,u),t}()}])}));