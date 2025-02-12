!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).Dragee={})}(this,(function(t){"use strict";class e{constructor(t,e){this.x=t,this.y=e}add(t){return new e(this.x+t.x,this.y+t.y)}sub(t){return new e(this.x-t.x,this.y-t.y)}mult(t){return new e(this.x*t,this.y*t)}negative(){return new e(-this.x,-this.y)}compare(t){return this.x===t.x&&this.y===t.y}clone(){return new e(this.x,this.y)}toString(){return`{x=${this.x},y=${this.y}`}static elementOffset(t,i){i=i||t.parentNode;const n=t.getBoundingClientRect(),s=i.getBoundingClientRect();return new e(n.left-s.left,n.top-s.top)}static elementSize(t){const i=t.getBoundingClientRect();return new e(i.width,i.height)}}class i{constructor(t,e){this.position=t,this.size=e}getP1(){return this.position}getP2(){return new e(this.position.x+this.size.x,this.position.y)}getP3(){return this.position.add(this.size)}getP4(){return new e(this.position.x,this.position.y+this.size.y)}getCenter(){return this.position.add(this.size.mult(.5))}or(t){const n=new e(Math.min(this.position.x,t.position.x),Math.min(this.position.y,t.position.y)),s=new e(Math.max(this.position.x+this.size.x,t.position.x+t.size.x),Math.max(this.position.y+this.size.y,t.position.y+t.size.y)).sub(n);return new i(n,s)}and(t){const n=new e(Math.max(this.position.x,t.position.x),Math.max(this.position.y,t.position.y)),s=new e(Math.min(this.position.x+this.size.x,t.position.x+t.size.x),Math.min(this.position.y+this.size.y,t.position.y+t.size.y)).sub(n);return s.x<=0||s.y<=0?null:new i(n,s)}includePoint(t){return!(this.position.x>t.x||this.position.x+this.size.x<t.x||this.position.y>t.y||this.position.y+this.size.y<t.y)}includeRectangle(t){return this.includePoint(t.position)&&this.includePoint(t.getP3())}moveToBound(t,e){let i,n;if(e)i=e;else{if(n=this.and(t),!n)return t;i=n.size.x>n.size.y?"y":"x"}const s=this.getCenter(),o=t.getCenter(),r=(s[i]>o[i]?-1:1)>0?this.position[i]+this.size[i]-t.position[i]:this.position[i]-(t.position[i]+t.size[i]);return t.position[i]=t.position[i]+r,t}getSquare(){return this.size.x*this.size.y}styleApply(t){(t=t||document.querySelector("ind")).style.left=this.position.x+"px",t.style.top=this.position.y+"px",t.style.width=this.size.x+"px",t.style.height=this.size.y+"px"}growth(t){this.size=this.size.add(t),this.position=this.position.add(t.mult(-.5))}getMinSide(){return Math.min(this.size.x,this.size.y)}static fromElement(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.parentNode,s=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const o=e.elementOffset(t,n,s),r=e.elementSize(t);return new i(o,r)}}function n(t){let e=t.parentNode;for(;e.parentNode&&"static"===window.getComputedStyle(e).position&&"BODY"!==e.tagName;)e=e.parentNode;return e}class s{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(this.events={},t&&t.on)for(const[e,i]of Object.entries(t.on))this.on(e,i)}emit(t){this.interrupted=!1;const e=[].slice.call(arguments,1);if(this.events[t])for(const i of this.events[t])if(i(...e),this.interrupted)return}interrupt(){this.interrupted=!0}on(t,e){this.events[t]||(this.events[t]=[]),this.events[t].push(e)}prependOn(t,e){this.events[t]||(this.events[t]=[]),this.events[t].unshift(e)}unsubscribe(t,e){if(this.events[t]){const i=this.events[t].indexOf(e);this.events[t].splice(i,1)}}resetEmitter(){this.events={}}resetOn(t){this.events[t]=[]}}function o(t,e){const i=t.x-e.x,n=t.y-e.y;return Math.sqrt(i*i+n*n)}function r(t,e){return Math.abs(t.y-e.y)}function a(t){return(e,i)=>Math.sqrt(Math.pow(t.x*Math.abs(e.x-i.x),2)+Math.pow(t.y*Math.abs(e.y-i.y),2))}function h(t,e,i){let n,s,r,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:o,h=0;if(0===t.length)return-1;for(n=a(t[0],e),s=0;s<t.length;s++)r=a(t[s],e),r<n&&(n=r,h=s);return i>=0&&n>i?-1:h}function g(t,i,n){const s=i.x-t.x,r=i.y-t.y,a=n/o(t,i);return new e(t.x+a*s,t.y+a*r)}function d(t,e,i){const n=t.filter((t=>t.y>e.y||(i?t.x<e.x:t.x>e.x)));for(let t=0;t<n.length;t++)if(e.y<n[t].y)return n.splice(t,0,e),n;return n.push(e),n}function l(t,e){const i=Math.min(t,e),n=Math.max(t,e);return Math.min(n-i,i+2*Math.PI-n)}function c(t){for(;t<0;)t+=2*Math.PI;for(;t>2*Math.PI;)t-=2*Math.PI;return t}class u{constructor(){}bound(t,e){return t}refresh(){}static bounding(){const t=new this(...arguments);return t.bound.bind(t)}}class p extends u{constructor(t){super(),this.rectangle=t}bound(t,e){const i=t.clone(),n=this.rectangle.getP3();return this.rectangle.position.x>i.x&&(i.x=this.rectangle.position.x),this.rectangle.position.y>i.y&&(i.y=this.rectangle.position.y),n.x<i.x+e.x&&(i.x=n.x-e.x),n.y<i.y+e.y&&(i.y=n.y-e.y),i}}class m extends p{constructor(t,e){super(i.fromElement(t,e)),this.element=t,this.container=e}refresh(){this.rectangle=i.fromElement(this.element,this.container)}}class f extends u{constructor(t,e){super(),this.center=t,this.radius=e}bound(t,e){return g(this.center,t,this.radius)}}function v(t,e){for(let i=0;i<t.length;i++)t[i]===e&&(t.splice(i,1),i--);return t}class b{constructor(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.rectangle=t,this.options=e}get boundRect(){return"function"==typeof this.rectangle?this.rectangle():this.rectangle}}class D extends b{constructor(t){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};super(t,i),this.options=Object.assign({removable:!0},i),this.radius=i.radius||80,this.paddingTopLeft=i.paddingTopLeft||new e(0,0),this.paddingBottomRight=i.paddingBottomRight||new e(0,0),this.yGapBetweenDraggables=i.yGapBetweenDraggables||0,this.getDistance=i.getDistance||o,this.getPosition=i.getPosition||(t=>t.position)}positioning(t,i){const n=this.boundRect,s=n.getP2();let o=[n.position];return t.forEach(((t,i)=>{let r,a=!1;for(let i=0;i<o.length&&(r=new e(o[i].x+this.paddingTopLeft.x,i>0?o[i-1].y+this.yGapBetweenDraggables:n.position.y+this.paddingTopLeft.y),a=r.x+t.size.x<s.x,!a);i++);a||(r=new e(n.position.x+this.paddingTopLeft.x,o[o.length-1].y+(i>0?this.yGapBetweenDraggables:this.paddingTopLeft.y))),t.position=r,this.options.removable&&t.getP3().y>n.getP3().y&&(t.removable=!0),o=d(o,t.getP3().add(this.paddingBottomRight))})),t}sorting(t,e,i){const n=t.concat(),s=t.map((t=>t.getPosition()));return e.forEach((e=>{let i=h(s,this.getPosition(e),this.radius,this.getDistance);i=-1===i?n.length:n.indexOf(t[i]),n.splice(i,0,e)})),e.forEach((t=>{i.push(n.indexOf(t))})),n}}class x extends s{constructor(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};super(i);const n=this;this.options=Object.assign({timeEnd:200,timeExcange:400},i),this.positioningStrategy=i.strategy||new D(this.getRectangle.bind(this),{radius:80,getDistance:a({x:1,y:4}),removable:!0}),this.element=t,e.forEach((t=>t.targets.push(n))),this.draggables=e,x.emitter.emit("target:create",this),this.startBounding(),this.init()}startBounding(){this.bound=this.options.bound||m.bounding(this.element)}positioning(t,e){return this.positioningStrategy.positioning(t,e)}sorting(t,e,i){return this.positioningStrategy.sorting(t,e,i)}init(){let t,e;this.innerDraggables=this.draggables.filter((t=>{let e=t.element.parentNode;for(;e;){if(e===this.element)return!0;e=e.parentNode}return!1})),this.innerDraggables.length&&(e=function(t,e,i){const n=[];if(void 0===e&&(e=t,t=0),void 0===i&&(i=1),i>0&&t>=e||i<0&&t<=e)return[];for(let s=t;i>0?s<e:s>e;s+=i)n.push(s);return n}(this.innerDraggables.length),t=this.positioning(this.innerDraggables.map((t=>t.getRectangle())),e),this.setPosition(t,e),this.innerDraggables.forEach((t=>this.emit("target:add",t))))}getRectangle(){return i.fromElement(this.element,this.container,!0)}catchDraggable(t){if(this.options.catchDraggable)return this.options.catchDraggable(this,t);{const e=this.getRectangle();return t.getRectangle().getSquare()<e.getSquare()&&e.includePoint(t.getCenter())}}getPosition(){return this.getRectangle().position}getSize(){return this.getRectangle().size}destroy(){y.forEach((t=>v(t.targets,this)))}refresh(){const t=this.positioning(this.innerDraggables.map((t=>t.getRectangle())),[]);this.setPosition(t,[],0)}onEnd(t){const e=[];if(!this.getRectangle().includePoint(t.getCenter()))return!1;t.position=this.bound(t.position,t.getSize()),this.emit("target:beforeAdd",t),this.innerDraggables=this.sorting(this.innerDraggables,[t],e);const i=this.positioning(this.innerDraggables.map((t=>t.getRectangle())),e);return this.setPosition(i,e),-1!==this.innerDraggables.indexOf(t)&&this.addRemoveOnMove(t),!0}setPosition(t,e,i){this.innerDraggables.slice(0).forEach(((n,s)=>{const o=t[s],r=i||0===i?i:-1!==e.indexOf(s)?this.options.timeEnd:this.options.timeExcange;o.removable?(n.move(n.initialPosition,r,!0,!0),v(this.innerDraggables,n),this.emit("target:remove",n)):n.move(o.position,r,!0,!0)}))}add(t,e){const i=this.innerDraggables.length;this.emit("target:beforeAdd",t),this.pushInnerDraggable(t);const n=this.positioning(this.innerDraggables.map((t=>t.getRectangle())),i,t);this.setPosition(n,[i],e||0),-1!==this.innerDraggables.indexOf(t)&&this.addRemoveOnMove(t)}pushInnerDraggable(t){-1===this.innerDraggables.indexOf(t)&&this.innerDraggables.push(t)}addRemoveOnMove(t){t.on("drag:move",this.removeHandler=()=>{this.remove(t)}),this.emit("target:add",t)}remove(t){t.unsubscribe("drag:move",this.removeHandler);const e=this.innerDraggables.indexOf(t);if(-1===e)return;this.innerDraggables.splice(e,1);const i=this.positioning(this.innerDraggables.map((t=>t.getRectangle())),[]);this.setPosition(i,[]),this.emit("target:remove",t)}reset(){this.innerDraggables.forEach((t=>{t.move(t.initialPosition,0,!0,!0),this.emit("target:remove",t)})),this.innerDraggables=[]}getSortedDraggables(){this.innerDraggables.slice()}get container(){return this._container=this._container||this.options.container||this.options.parent||n(this.element)}}x.emitter=new s,x.emitter.on("target:create",(function(t){P.addTarget(t)}));const y=[];class E extends s{constructor(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};super(i),y.forEach((i=>{t&&t.forEach((t=>{v(i.draggables,t)})),e&&e.forEach((t=>{v(i.targets,t)}))})),this.draggables=t||[],this.targets=e||[],y.push(this),this.options={timeEnd:i.timeEnd||400},this.init()}init(){this.draggables.forEach((t=>{t.dragEndAction=()=>this.onEnd(t)}))}addDraggable(t){this.draggables.push(t),t.dragEndAction=()=>this.onEnd(t)}addTarget(t){this.targets.push(t)}onEnd(t){const e=this.targets.filter((e=>-1!==e.draggables.indexOf(t))).filter((e=>e.catchDraggable(t))).sort(((t,e)=>t.getRectangle().getSquare()-e.getRectangle().getSquare()));e.length?e[0].onEnd(t):t.targets.length&&t.pinPosition(t.initialPosition,this.options.timeEnd),this.emit("scope:change")}reset(){this.targets.forEach((t=>t.reset()))}refresh(){this.draggables.forEach((t=>t.refresh())),this.targets.forEach((t=>t.refresh()))}get positions(){return this.targets.map((t=>t.innerDraggables.map((t=>this.draggables.indexOf(t)))))}set positions(t){if(t.length!==this.targets.length)throw"wrong array length";this.targets.forEach((t=>t.reset())),t.forEach(((t,e)=>{t.forEach((t=>{this.targets[e].add(this.draggables[t])}))}))}}const P=new E;function w(t,e){const i=[];let n=t;for(;n.parentNode&&n!==e;)i.unshift(n.parentNode),n=n.parentNode;return i}const _=(t,e)=>{const i=function(t,e){let i=0;return function(){const n=this,s=arguments,o=Date.now();o-i>=e&&(t.apply(n,s),i=o)}}((e=>t(e)),e);return t=>{t.preventDefault(),i(t)}},S={passive:!1},T=navigator.maxTouchPoints>0,O="mousedown",L="mousemove",A="mouseup",z="touchstart",M="touchmove",R="touchend",B=[];function N(t,e){for(let i=0;i<t.changedTouches.length;i++)if(t.changedTouches[i].identifier===e)return t.changedTouches[i];return!1}function C(t,e){const i=window.getComputedStyle(t);for(let t=0;t<i.length;t++){const n=i[t];n.indexOf("transition")<0&&n.indexOf("transform")<0&&(e.style[n]=i[n])}for(let i=0;i<t.children.length;i++)C(t.children[i],e.children[i])}class G extends s{constructor(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};super(e),this.targets=[],this.options=e,this.element=t,function(t){if(B.some((e=>t.element===e.element)))throw"for this element Dragee.Draggable is already exist, don't create it twice ";B.push(t)}(this),G.emitter.emit("draggable:create",this),this._enable=!0,this.startBounding(),this.startPositioning(),this.startListening()}startBounding(){this.options.bound?this.bounding={bound:this.options.bound}:this.bounding=new m(this.container,this.container)}startPositioning(){this._setDefaultTransition(),this.offset=e.elementOffset(this.element,this.container),this.pinnedPosition=this.offset,this.position=this.offset,this.initialPosition=this.options.position||this.offset,this.pinPosition(this.initialPosition),this.bounding.refresh&&this.bounding.refresh()}startListening(){this._dragStart=t=>this.dragStart(t),this._dragMove=t=>this.dragMove(t),this._dragEnd=t=>this.dragEnd(t),this._nativeDragStart=t=>this.nativeDragStart(t),this._nativeDragOver=_((t=>this.nativeDragOver(t)),this.dragOverThrottleDuration),this._nativeDragEnd=t=>this.nativeDragEnd(t),this._nativeDrop=t=>this.nativeDrop(t),this._scroll=t=>this.onScroll(t),this.handler.addEventListener(z,this._dragStart,S),this.handler.addEventListener(O,this._dragStart,S)}getSize(){return e.elementSize(this.element)}getPosition(){return this.position=this.offset.add(this._transformPosition||new e(0,0)),this.position}getCenter(){return this.position.add(this.getSize().mult(.5))}_setDefaultTransition(){this.element.style.transition||(this.element.style.transition=window.getComputedStyle(this.element).transition)}_setTransition(t){let e=this.element.style.transition;const i=`transform ${t}ms`;/transform\s?\d*m?s?/.test(e)?e=e.replace(/transform\s?\d*m?s?/g,i):e?e+=`, ${i}`:e=i,this.element.style.transition!==e&&(this.element.style.transition=e)}_setTranslate(t){this._transformPosition=t;const e=`translate3d(${t.x}px, ${t.y}px, 0px)`;let i=this.element.style.transform;this.shouldRemoveZeroTranslate&&0===t.x&&0===t.y?i=i.replace(/translate3d\([^)]+\)/,""):/translate3d\([^)]+\)/.test(i)?i=i.replace(/translate3d\([^)]+\)/,e):(i&&(i+=" "),i+=e),this.element.style.transform!==i&&(this.element.style.transform=i)}move(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];t=t.clone(),this.position=t,this._setTransition(e),this._setTranslate(t.sub(this.offset)),i||this.emit("drag:move")}pinPosition(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];this.pinnedPosition=t.clone(),this.move(this.pinnedPosition,e,i)}resetPositionToInitial(){this.pinPosition(this.initialPosition)}refreshPosition(){this.setPosition(this.getPosition())}setPosition(t){t=t.clone(),this.position=t,this._setTransition(0),this._setTranslate(t.sub(this.offset))}determineDirection(t){this._previousDirectionPosition||=this._startPosition,this.leftDirection=this._previousDirectionPosition.x<t.x,this.rightDirection=this._previousDirectionPosition.x>t.x,this.upDirection=this._previousDirectionPosition.y>t.y,this.downDirection=this._previousDirectionPosition.y<t.y,this._previousDirectionPosition=t}seemsScrolling(){return+new Date-this._startTouchTimestamp<this.touchDraggingThreshold}shouldUseNativeDragAndDrop(){return this.isTouchEvent?this.nativeDragAndDrop&&this.emulateNativeDragAndDropOnTouch:this.nativeDragAndDrop}dragStart(t){if(this._enable){if(this.stopPropagationOnDragStart&&t.stopPropagation(),this.isTouchEvent=T&&t instanceof window.TouchEvent,this.touchPoint=this._startTouchPoint=new e(this.isTouchEvent?t.changedTouches[0].pageX:t.clientX,this.isTouchEvent?t.changedTouches[0].pageY:t.clientY),this._startPosition=this.getPosition(),this.isTouchEvent&&(this._touchId=t.changedTouches[0].identifier,this._startTouchTimestamp=+new Date),this._startWindowScrollPoint=this.windowScrollPoint,this._startScrollElementsOffset=this.scrollElementsOffset,(t.target instanceof window.HTMLInputElement||t.target instanceof window.HTMLInputElement)&&t.target.focus(),this.shouldUseNativeDragAndDrop())if(this.isTouchEvent&&this.emulateNativeDragAndDropOnTouch){this._startParentsScrollOffset=this.parentsScrollOffset;const t=t=>{this.seemsScrolling()?this.cancelDragging():this.emulateNativeDragAndDrop(t),e()},e=()=>{document.removeEventListener(M,t),document.removeEventListener(R,e)};document.addEventListener(M,t,S),document.addEventListener(R,e,S)}else this.element.addEventListener("dragstart",this._nativeDragStart),this.element.draggable=!0,document.addEventListener(A,this._nativeDragEnd,S);else document.addEventListener(M,this._dragMove,S),document.addEventListener(L,this._dragMove,S),document.addEventListener(R,this._dragEnd,S),document.addEventListener(A,this._dragEnd,S);window.addEventListener("scroll",this._scroll),this.scrollElements.forEach((t=>t.addEventListener("scroll",this._scroll))),this.emit("drag:start")}}dragMove(t){let i;if(this.isDragging=!0,this.isTouchEvent=T&&t instanceof window.TouchEvent,this.isTouchEvent){if(i=N(t,this._touchId),!i)return;if(this.seemsScrolling())return void this.cancelDragging()}t.stopPropagation(),t.preventDefault(),this.touchPoint=new e(this.isTouchEvent?i.pageX:t.clientX,this.isTouchEvent?i.pageY:t.clientY);let n=this._startPosition.add(this.touchPoint.sub(this._startTouchPoint)).add(this.windowScrollPoint.sub(this._startWindowScrollPoint)).add(this.scrollElementsOffset.sub(this._startScrollElementsOffset));n=this.bounding.bound(n,this.getSize()),this.determineDirection(n),this.move(n),this.element.classList.add("dragee-active")}dragEnd(t){this.isTouchEvent=T&&t instanceof window.TouchEvent,this.isTouchEvent&&!N(t,this._touchId)||(this.isDragging&&(t.stopPropagation(),t.preventDefault()),this.dragEndAction(),this.emit("drag:end"),this.cancelDragging(),setTimeout((()=>this.element.classList.remove("dragee-active"))))}onScroll(t){let e=this._startPosition.add(this.touchPoint.sub(this._startTouchPoint)).add(this.windowScrollPoint.sub(this._startWindowScrollPoint)).add(this.scrollElementsOffset.sub(this._startScrollElementsOffset));e=this.bounding.bound(e,this.getSize()),this.nativeDragAndDrop||(this.determineDirection(e),this.move(e))}nativeDragStart(t){t.stopPropagation(),t.dataTransfer.setData("text","FireFox fix"),t.dataTransfer.effectAllowed="move",document.addEventListener("dragover",this._nativeDragOver),document.addEventListener("dragend",this._nativeDragEnd),document.addEventListener("drop",this._nativeDrop)}nativeDragOver(t){if(t.preventDefault(),t.dataTransfer.dropEffect="move",this.element.classList.add("dragee-placeholder"),0===t.clientX&&0===t.clientY)return;this.touchPoint=new e(t.clientX,t.clientY);let i=this._startPosition.add(this.touchPoint.sub(this._startTouchPoint)).add(this.windowScrollPoint.sub(this._startWindowScrollPoint)).add(this.scrollElementsOffset.sub(this._startScrollElementsOffset));i=this.bounding.bound(i,this.getSize()),this.determineDirection(i),this.position=i,this.emit("drag:move")}nativeDragEnd(t){this.element.classList.remove("dragee-placeholder"),this.dragEndAction(),this.emit("drag:end"),document.removeEventListener("dragover",this._nativeDragOver),document.removeEventListener("dragend",this._nativeDragEnd),document.removeEventListener(A,this._nativeDragEnd),document.removeEventListener("drop",this._nativeDrop),window.removeEventListener("scroll",this._scroll),this.scrollElements.forEach((t=>t.removeEventListener("scroll",this._scroll))),this.isDragging=!1,this.element.removeAttribute("draggable"),this.element.removeEventListener("dragstart",this._nativeDragStart),this.element.classList.remove("dragee-active")}nativeDrop(t){t.stopPropagation(),t.preventDefault()}cancelDragging(){document.removeEventListener(M,this._dragMove),document.removeEventListener(L,this._dragMove),document.removeEventListener(R,this._dragEnd),document.removeEventListener(A,this._dragEnd),document.removeEventListener(A,this._nativeDragEnd),window.removeEventListener("scroll",this._scroll),this.scrollElements.forEach((t=>t.removeEventListener("scroll",this._scroll))),this.isDragging=!1,this._previousDirectionPosition=null,this.element.removeAttribute("draggable"),this.element.removeEventListener("dragstart",this._nativeDragStart)}copyStyles(t,e){this.options.copyStyles?this.options.copyStyles(t,e):C(t,e)}emulateNativeDragAndDrop(t){const i=this.container.getBoundingClientRect(),n=this.element.cloneNode(!0);n.style.transform="",this.copyStyles(this.element,n),n.classList.add("dragee-native-emulation"),n.style.position="absolute",document.body.appendChild(n),this.element.classList.add("dragee-placeholder");const s=new G(n,{container:document.body,touchDraggingThreshold:0,bound:t=>t,on:{"drag:move":()=>{const t=new e(i.left,i.top);this.position=s.position.sub(t).sub(this._startWindowScrollPoint).add(this._startParentsScrollOffset),this.determineDirection(this.position),this.emit("drag:move")},"drag:end":()=>{s.destroy(),document.body.removeChild(n),this.element.classList.remove("dragee-placeholder"),this.element.classList.remove("dragee-active"),this.emit("drag:end"),this.dragEndAction(),this.cancelDragging()}}}),o=new e(i.left,i.top);s._startWindowScrollPoint=this._startWindowScrollPoint,s.move(this.pinnedPosition.add(o).add(this.windowScrollPoint).sub(this.parentsScrollOffset)),s.dragStart(t),t.preventDefault()}dragEndAction(){this.pinPosition(this.position)}getRectangle(){return new i(this.position,this.getSize())}refresh(){this.bounding.refresh&&this.bounding.refresh()}destroy(){this.handler.removeEventListener(z,this._dragStart),this.handler.removeEventListener(O,this._dragStart),this.element.removeEventListener("dragstart",this._nativeDragStart),document.removeEventListener(M,this._dragMove),document.removeEventListener(L,this._dragMove),document.removeEventListener(R,this._dragEnd),document.removeEventListener(A,this._dragEnd),document.removeEventListener("dragover",this._nativeDragOver),document.removeEventListener("dragend",this._nativeDragEnd),document.removeEventListener(A,this._nativeDragEnd),document.removeEventListener("drop",this._nativeDrop),this.resetEmitter();const t=B.indexOf(this);t>-1&&B.splice(t,1)}get container(){return this._container=this._container||this.options.container||this.options.parent||n(this.element)}get handler(){return this._handler||("string"==typeof this.options.handler?this._handler=this.element.querySelector(this.options.handler)||this.element:this._handler=this.options.handler||this.element),this._handler}get stopPropagationOnDragStart(){return this.options.stopPropagationOnDragStart||!1}get nativeDragAndDrop(){return this.options.nativeDragAndDrop||!1}get emulateNativeDragAndDropOnTouch(){return this.options.emulateNativeDragAndDropOnTouch||!1}get shouldRemoveZeroTranslate(){return this.options.shouldRemoveZeroTranslate||!1}get touchDraggingThreshold(){return this.options.touchDraggingThreshold||0}get dragOverThrottleDuration(){return this.options.dragOverThrottleDuration||16}get windowScrollPoint(){return new e(window.scrollX,window.scrollY)}get scrollRootContainer(){return this.options.scrollRootContainer||this.container}get scrollElements(){return this._cachedScrollElements?this._cachedScrollElements:this._cachedScrollElements=w(this.element,this.scrollRootContainer)}get scrollElementsOffset(){return new e(this.scrollElements.reduce(((t,e)=>t+e.scrollLeft),0),this.scrollElements.reduce(((t,e)=>t+e.scrollTop),0))}get parents(){return this._cachedParents?this._cachedParents:this._cachedParents=w(this.element,this.container)}get parentsScrollOffset(){return new e(this.parents.reduce(((t,e)=>t+e.scrollLeft),0),this.parents.reduce(((t,e)=>t+e.scrollTop),0))}get enable(){return this._enable}set enable(t){t?this.element.classList.remove("dragee-disable"):this.element.classList.add("dragee-disable"),this._enable=t}}G.emitter=new s,G.emitter.on("draggable:create",(function(t){P.addDraggable(t)}));class I extends s{constructor(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};super(e),this.options=Object.assign({timeEnd:200,timeExcange:400,radius:30},e),this.container=e.container,this.draggables=t,this.changedDuringIteration=!1,this.resizeObserver=new ResizeObserver(function(t,e,i){let n;return function(){const i=this,s=arguments,o=function(){n=null,t.apply(i,s)};clearTimeout(n),n=setTimeout(o,e)}}(this.onResize.bind(this),100)),this.container&&this.resizeObserver.observe(this.container),this.init()}onResize(){this.options.reorderOnChange&&this.reset(),this.draggables.forEach((t=>{t.isDragging||t.startPositioning()}))}init(){this._enable=!0,this.draggables.forEach((t=>this.initDraggable(t)))}initDraggable(t){t.enable=this._enable,t.on("drag:move",(()=>this.onMove(t))),t.dragEndAction=()=>{t.pinPosition(t.pinnedPosition,this.options.timeEnd),this.onEnd(t)},this.resizeObserver.observe(t.element)}releaseDraggable(t){this.resizeObserver.unobserve(t.element),t.resetOn("drag:end"),t.resetOn("drag:move"),v(this.draggables,t)}onMove(t){if(this.swappingDisabled)return;const e=this.getSortedDraggables(),i=e.map((t=>t.pinnedPosition)),n=e.indexOf(t),s=h(i,t.position,this.options.radius,this.distanceFunc);if(-1!==s&&n!==s){if(s<n)for(let t=s;t<n;t++)e[t].pinPosition(i[t+1],this.options.timeExcange);else for(let t=n;t<s;t++)e[t+1].pinPosition(i[t],this.options.timeExcange);t.nativeDragAndDrop?t.pinPosition(i[s]):t.pinnedPosition=i[s],this.changedDuringIteration=!0}}onEnd(t){this.changedDuringIteration&&(this.emit("list:change"),this.changedDuringIteration=!1,this.options.reorderOnChange&&this.options.container&&this.reorderElements(t))}reorderElements(t){const e=this.getSortedDraggables(),i=e.indexOf(t),n=e[i+1];this.reset(),n?this.container.insertBefore(t.element,n.element):this.container.appendChild(t.element),this.draggables.forEach((t=>t.startPositioning())),this.emit("list:reordered")}getCurrentPinnedPositions(){return this.draggables.map((t=>t.pinnedPosition.clone()))}getSortedDraggables(){return this.draggables.sort(this.sorting.bind(this))}reset(){this.draggables.forEach((t=>t.resetPositionToInitial()))}refresh(){this.draggables.forEach((t=>t.refresh()))}add(t){t instanceof Array||(t=[t]),t.forEach((t=>this.initDraggable(t))),this.draggables=this.draggables.concat(t)}remove(t){const e=this.draggables.map((t=>t.initialPosition)),i=[],n=this.getSortedDraggables();t instanceof Array||(t=[t]),t.forEach((t=>this.releaseDraggable(t)));let s=0;n.forEach((t=>{-1!==this.draggables.indexOf(t)&&(t.pinnedPosition!==e[s]&&t.pinPosition(e[s],this.options.timeExcange),t.initialPosition=e[s],s++,i.push(t))})),this.draggables=i}clear(){this.remove(this.draggables.slice())}destroy(){this.draggables.forEach((t=>t.destroy())),this.container&&this.resizeObserver.unobserve(this.container)}sorting(t,e){return this.options.sorting?this.options.sorting(t,e):t.pinnedPosition.y<e.pinnedPosition.y?-1:t.pinnedPosition.y>e.pinnedPosition.y?1:t.pinnedPosition.x<e.pinnedPosition.x?-1:t.pinnedPosition.x>e.pinnedPosition.x?1:0}get distanceFunc(){return this.options.getDistance||o}get positions(){return this.getCurrentPinnedPositions()}set positions(t){if(t.length!==this.draggables.length)throw"wrong array length";t.forEach(((t,e)=>{this.draggables[e].pinPosition(t)}))}get enable(){return this._enable}set enable(t){this._enable=t,this.draggables.forEach((e=>{e.enable=t}))}get swappingDisabled(){return this._swappingDisabled}set swappingDisabled(t){this._swappingDisabled=t}static factory(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const n=Array.from(e).map((e=>new G(e,Object.assign({container:t},i.draggable||{}))));return new I(n,Object.assign({container:t},i.list||{}))}}const Y=(t,e,i)=>{t.splice(i<0?t.length+i:i,0,t.splice(e,1)[0])};class X extends I{autoDetectVerticalGap(){if(!this._verticalGap&&!this.options.verticalGap&&this.draggables.length>=2){const t=this.getSortedDraggables();this._verticalGap=t[1].pinnedPosition.y-t[0].pinnedPosition.y-t[0].getSize().y}}autoDetectStartPosition(){this.draggables.length>=1&&!this.startPosition&&(this.startPosition=this.draggables[0].pinnedPosition)}initDraggable(t){super.initDraggable(t),t.on("drag:start",(()=>this.onDragStart(t)))}onDragStart(t){this.autoDetectVerticalGap(),this.autoDetectStartPosition(),this.cachedSortedDraggables=this.getSortedDraggables(),this.indexOfActiveDraggable=this.cachedSortedDraggables.indexOf(t)}onMove(t){if(this.swappingDisabled)return;const i=this.cachedSortedDraggables[this.indexOfActiveDraggable-1],n=this.cachedSortedDraggables[this.indexOfActiveDraggable+1],s=t.pinnedPosition;let o,r;if(t.upDirection&&i)o=[i,t].map((t=>t.pinnedPosition)),r=h(o,t.position,1e4,this.distanceFunc),0===r&&(t.shouldUseNativeDragAndDrop()?t.pinPosition(i.pinnedPosition):t.pinnedPosition=i.pinnedPosition.clone(),i.pinPosition(new e(s.x,t.pinnedPosition.y+t.getSize().y+this.verticalGap),this.options.timeExcange),Y(this.cachedSortedDraggables,this.indexOfActiveDraggable--,this.indexOfActiveDraggable),this.onMove(t),this.changedDuringIteration=!0);else if(t.downDirection&&n&&(o=[t,n].map((t=>t.pinnedPosition)),r=h(o,t.position,1e4,this.distanceFunc),1===r)){n.pinPosition(t.pinnedPosition,this.options.timeExcange);const i=new e(n.pinnedPosition.x,n.pinnedPosition.y+n.getSize().y+this.verticalGap);t.shouldUseNativeDragAndDrop()?t.pinPosition(i):t.pinnedPosition=i,Y(this.cachedSortedDraggables,this.indexOfActiveDraggable++,this.indexOfActiveDraggable),this.onMove(t),this.changedDuringIteration=!0}}bubbling(t,e){const i=this.startPosition.clone();t||=this.getSortedDraggables(),t.forEach((t=>{t.pinnedPosition.compare(i)||(t!==e||e.shouldUseNativeDragAndDrop()?t.pinPosition(i,t===e?0:this.options.timeExcange):t.pinnedPosition=i.clone()),i.y=i.y+t.getSize().y+this.verticalGap}))}remove(t){t instanceof Array||(t=[t]),t.forEach((t=>this.releaseDraggable(t))),this.draggables=this.draggables.filter((e=>!t.includes(e))),this.draggables.forEach((t=>t.startPositioning())),this.draggables.length>0&&(this.autoDetectVerticalGap(),this.autoDetectStartPosition(),this.bubbling())}get distanceFunc(){return this.options.getDistance||r}get verticalGap(){return this.options.verticalGap?this.options.verticalGap:(this.autoDetectVerticalGap(),this._verticalGap||0)}set verticalGap(t){this.options.verticalGap=t}static factory(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const n=Array.from(e).map((e=>new G(e,Object.assign({container:t},i.draggable||{}))));return new X(n,Object.assign({container:t},i.list||{}))}}t.Bound=u,t.BoundToArc=class extends f{constructor(t,e,i,n){super(t,e),this._startAngle=i,this._endAngle=n}startAngle(){return"function"==typeof this._startAngle?this._startAngle():this._startAngle}endAngle(){return"function"==typeof this._endAngle?this._endAngle():this._endAngle}bound(t,i){let n=function(t,e){const i=e.sub(t);return c(Math.atan2(i.y,i.x))}(this.center,t);return n=c(n),n=function(t,e,i){let n,s;return t<e&&i>t&&i<e||e<t&&(i<e||i>t)?i:(n=l(t,i),s=l(e,i),n<s?t:e)}(this.startAngle(),this.endAngle(),n),function(t,i,n){return(n=n||new e(0,0)).add(new e(i*Math.cos(t),i*Math.sin(t)))}(n,this.radius,this.center)}},t.BoundToCircle=f,t.BoundToElement=m,t.BoundToLine=class extends u{constructor(t,e){super(),this.startPoint=t,this.endPoint=e;const i=Math.atan2(e.y-t.y,e.x-t.x)+Math.PI/2;this.someK=10,this.cosBeta=Math.cos(i),this.sinBeta=Math.sin(i)}bound(t,i){const n=new e(t.x+this.someK*this.cosBeta,t.y+this.someK*this.sinBeta),s=g(this.endPoint,this.startPoint,i.x),o=function(t,i,n,s){let o,r,a,h,g,d,l;return n.x===s.x&&(o=n,n=t,t=o,o=s,s=i,i=o),t.x===i.x?(a=(s.y-n.y)/(s.x-n.x),g=(s.x*n.y-n.x*s.y)/(s.x-n.x),d=t.x,l=d*a+g,new e(d,l)):(r=(i.y-t.y)/(i.x-t.x),h=(i.x*t.y-t.x*i.y)/(i.x-t.x),a=(s.y-n.y)/(s.x-n.x),g=(s.x*n.y-n.x*s.y)/(s.x-n.x),d=(h-g)/(a-r),l=d*r+h,new e(d,l))}(this.startPoint,this.endPoint,t,n);return function(t,i,n){const s=new e(n.x-t.x,n.y-t.y),o=new e(i.x-t.x,i.y-t.y),r=o.x*o.x+o.y*o.y,a=(s.x*o.x+s.y*o.y)/r;return new e(t.x+o.x*a,t.y+o.y*a)}(this.startPoint,s,o)}},t.BoundToLineX=class extends u{constructor(t,e,i){super(),this.x=t,this.startY=e,this.endY=i}bound(t,e){const i=t.clone();return i.x=this.x,this.startY>i.y&&(i.y=this.startY),this.endY<i.y+e.y&&(i.y=this.endY-e.y),i}},t.BoundToLineY=class extends u{constructor(t,e,i){super(),this.y=t,this.startX=e,this.endX=i}bound(t,e){const i=t.clone();return i.y=this.y,this.startX>i.x&&(i.x=this.startX),this.endX<i.x+e.x&&(i.x=this.endX-e.x),i}},t.BoundToRectangle=p,t.BubblingList=X,t.Draggable=G,t.FloatLeftStrategy=D,t.FloatRightStrategy=class extends D{constructor(t){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};super(t,i),this.paddingTopRight=i.paddingTopRight||new e(5,5),this.paddingBottomLeft=i.paddingBottomLeft||new e(0,0),this.yGapBetweenDraggables=i.yGapBetweenDraggables||0,this.paddingBottomNegLeft=new e(-this.paddingBottomLeft.x,this.paddingBottomLeft.y)}positioning(t,i){const n=this.boundRect;let s=[n.getP2()];return t.forEach(((t,i)=>{let o,r=!1;for(let i=0;i<s.length&&(o=new e(s[i].x-t.size.x-this.paddingTopRight.x,i>0?s[i-1].y+this.yGapBetweenDraggables:n.position.y+this.paddingTopRight.y),r=o.x>t.position.x,!r);i++);r||(o=new e(n.getP2().x-t.size.x-this.paddingTopRight.x,s[s.length-1].y+(i>0?this.yGapBetweenDraggables:this.paddingTopRight.y))),t.position=o,this.options.removable&&t.getP4().y>n.getP4().y&&(t.removable=!0),s=d(s,t.getP4().add(this.paddingBottomNegLeft),!0)})),t}},t.List=I,t.NotCrossingStrategy=class extends b{positioning(t,e){const i=t.reduce(((t,i,n)=>(-1===e.indexOf(n)&&t.push(n),t)),[]);return e.forEach((e=>{let n=t[e],s=!1;i.forEach((e=>{const i=t[e];n=i.moveToBound(n)})),s=i.some((e=>!!t[e].and(n)))||n.and(this.boundRect).getSquare()!==n.getSquare(),s?n.removable=!0:i.push(e)})),t}sorting(t,e,i){const n=t.concat(e);return e.forEach((t=>{i.push(n.indexOf(t))})),n}},t.Point=e,t.Rectangle=i,t.Scope=E,t.Target=x,t.defaultScope=P,t.getDistance=o,t.getXDifference=function(t,e){return Math.abs(t.x-e.x)},t.getYDifference=r,t.indexOfNearestPoint=h,t.scope=function(t){const e=new E,i=function(t){e.addDraggable(t),G.emitter.interrupt()},n=function(t){e.addTarget(t),G.emitter.interrupt()};return G.emitter.prependOn("draggable:create",i),x.emitter.prependOn("target:create",n),t.call(),G.emitter.unsubscribe("draggable:create",i),x.emitter.unsubscribe("target:create",n),e},t.scopes=y,t.transformedSpaceDistanceFactory=a}));
