var Dragee = (function (exports) {
  'use strict';

  function getParentsChain(childElement, rootElement) {
    const chain = [];
    let element = childElement;
    while (element.parentNode && element !== rootElement) {
      chain.unshift(element.parentNode);
      element = element.parentNode;
    }
    return chain;
  }

  /** Class representing a point. */
  class Point {
    /**
    * Create a point.
    * @param {number} x - The x value.
    * @param {number} y - The y value.
    */
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
    add(p) {
      return new Point(this.x + p.x, this.y + p.y);
    }
    sub(p) {
      return new Point(this.x - p.x, this.y - p.y);
    }
    mult(k) {
      return new Point(this.x * k, this.y * k);
    }
    negative() {
      return new Point(-this.x, -this.y);
    }
    compare(p) {
      return this.x === p.x && this.y === p.y;
    }
    clone() {
      return new Point(this.x, this.y);
    }
    toString() {
      return `{x=${this.x},y=${this.y}}`;
    }
    static elementOffset(element, parent) {
      parent = parent || element.parentNode;
      if (parent === element) {
        return new Point(0, 0);
      } else if (parent === element.offsetParent) {
        return new Point(element.offsetLeft + parent.clientLeft, element.offsetTop + parent.clientTop);
      } else {
        const considerOffsetElements = [element, getParentsChain(element, parent).pop()];
        return new Point(considerOffsetElements.reduce((sum, p) => sum + p.offsetLeft, 0) + parent.clientLeft, considerOffsetElements.reduce((sum, p) => sum + p.offsetTop, 0) + parent.clientTop);
      }
    }
    static elementBoundingOffset(element, parent) {
      parent = parent || element.parentNode;
      const elementRect = element.getBoundingClientRect();
      const parentRect = parent.getBoundingClientRect();
      return new Point(elementRect.left - parentRect.left, elementRect.top - parentRect.top);
    }
    static elementSize(element) {
      const elementRect = element.getBoundingClientRect();
      return new Point(elementRect.width, elementRect.height);
    }
  }

  class Rectangle {
    constructor(position, size) {
      this.position = position;
      this.size = size;
    }
    getP1() {
      return this.position;
    }
    getP2() {
      return new Point(this.position.x + this.size.x, this.position.y);
    }
    getP3() {
      return this.position.add(this.size);
    }
    getP4() {
      return new Point(this.position.x, this.position.y + this.size.y);
    }
    getCenter() {
      return this.position.add(this.size.mult(0.5));
    }
    or(rect) {
      const position = new Point(Math.min(this.position.x, rect.position.x), Math.min(this.position.y, rect.position.y));
      const size = new Point(Math.max(this.position.x + this.size.x, rect.position.x + rect.size.x), Math.max(this.position.y + this.size.y, rect.position.y + rect.size.y)).sub(position);
      return new Rectangle(position, size);
    }
    and(rect) {
      const position = new Point(Math.max(this.position.x, rect.position.x), Math.max(this.position.y, rect.position.y));
      const size = new Point(Math.min(this.position.x + this.size.x, rect.position.x + rect.size.x), Math.min(this.position.y + this.size.y, rect.position.y + rect.size.y)).sub(position);
      if (size.x <= 0 || size.y <= 0) {
        return null;
      }
      return new Rectangle(position, size);
    }
    includePoint(p) {
      return !(this.position.x > p.x || this.position.x + this.size.x < p.x || this.position.y > p.y || this.position.y + this.size.y < p.y);
    }
    includeRectangle(rectangle) {
      return this.includePoint(rectangle.position) && this.includePoint(rectangle.getP3());
    }
    moveToBound(rect, axis) {
      let selAxis, crossRectangle;
      if (axis) {
        selAxis = axis;
      } else {
        crossRectangle = this.and(rect);
        if (!crossRectangle) {
          return rect;
        }
        selAxis = crossRectangle.size.x > crossRectangle.size.y ? 'y' : 'x';
      }
      const thisCenter = this.getCenter();
      const rectCenter = rect.getCenter();
      const sign = thisCenter[selAxis] > rectCenter[selAxis] ? -1 : 1;
      const offset = sign > 0 ? this.position[selAxis] + this.size[selAxis] - rect.position[selAxis] : this.position[selAxis] - (rect.position[selAxis] + rect.size[selAxis]);
      rect.position[selAxis] = rect.position[selAxis] + offset;
      return rect;
    }
    getSquare() {
      return this.size.x * this.size.y;
    }
    styleApply(el) {
      el = el || document.querySelector('ind');
      el.style.left = this.position.x + 'px';
      el.style.top = this.position.y + 'px';
      el.style.width = this.size.x + 'px';
      el.style.height = this.size.y + 'px';
    }
    growth(size) {
      this.size = this.size.add(size);
      this.position = this.position.add(size.mult(-0.5));
    }
    getMinSide() {
      return Math.min(this.size.x, this.size.y);
    }
    static fromElement(element) {
      let parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : element.parentNode;
      let isConsiderTranslate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      const position = isConsiderTranslate ? Point.elementBoundingOffset(element, parent) : Point.elementOffset(element, parent);
      const size = Point.elementSize(element);
      return new Rectangle(position, size);
    }
  }

  class EventEmitter extends EventTarget {
    constructor() {
      let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      super();
      if (options && options.on) {
        Object.entries(options.on).forEach(_ref => {
          let [eventName, fn] = _ref;
          return this.on(eventName, fn);
        });
      }
    }
    emit(eventName, detail) {
      let {
        cancelable = false
      } = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.dispatchEvent(new CustomEvent(eventName, {
        detail,
        cancelable
      }));
    }
    on(eventName, fn, options) {
      this.addEventListener(eventName, fn, options);
      return () => this.off(eventName, fn);
    }
    once(eventName, fn) {
      return this.on(eventName, fn, {
        once: true
      });
    }
    off(eventName, fn) {
      this.removeEventListener(eventName, fn);
    }
    unsubscribe(eventName, fn) {
      this.off(eventName, fn);
    }
  }

  function removeItem (array, val) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === val) {
        array.splice(i, 1);
        i--;
      }
    }
    return array;
  }

  const scopes = [];
  const scopeStack = [];
  class Scope extends EventEmitter {
    constructor(draggables, targets) {
      let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      super(options);
      scopes.forEach(scope => {
        if (draggables) {
          draggables.forEach(draggable => scope.releaseDraggable(draggable));
        }
        if (targets) {
          targets.forEach(target => scope.releaseTarget(target));
        }
      });
      this.draggables = draggables || [];
      this.targets = targets || [];
      scopes.push(this);
      this.options = {
        timeEnd: options.timeEnd || 400
      };
      this.init();
    }
    init() {
      this.draggables.forEach(draggable => this.initDraggable(draggable));
    }
    addDraggable(draggable) {
      scopes.forEach(scope => scope.releaseDraggable(draggable));
      this.draggables.push(draggable);
      this.initDraggable(draggable);
    }
    initDraggable(draggable) {
      draggable.dragEndAction = () => this.onEnd(draggable);
    }
    releaseDraggable(draggable) {
      removeItem(this.draggables, draggable);
    }
    addTarget(target) {
      scopes.forEach(scope => scope.releaseTarget(target));
      this.targets.push(target);
    }
    releaseTarget(target) {
      removeItem(this.targets, target);
    }
    onEnd(draggable) {
      const shotTargets = this.targets.filter(target => {
        return target.draggables.indexOf(draggable) !== -1;
      }).filter(target => {
        return target.catchDraggable(draggable);
      }).sort((a, b) => {
        return a.getRectangle().getSquare() - b.getRectangle().getSquare();
      });
      if (shotTargets.length) {
        shotTargets[0].onEnd(draggable);
      } else if (draggable.targets.length) {
        draggable.pinPosition(draggable.initialPosition, this.options.timeEnd);
      }
      this.emit('scope:change', {
        scope: this,
        draggable
      });
    }
    reset() {
      this.targets.forEach(target => target.reset());
    }
    refresh() {
      this.draggables.forEach(draggable => draggable.refresh());
      this.targets.forEach(target => target.refresh());
    }
    get positions() {
      return this.targets.map(target => {
        return target.innerDraggables.map(draggable => this.draggables.indexOf(draggable));
      });
    }
    set positions(positions) {
      const message = 'wrong array length';
      if (positions.length === this.targets.length) {
        this.targets.forEach(target => target.reset());
        positions.forEach((targetIndexes, i) => {
          targetIndexes.forEach(index => {
            this.targets[i].add(this.draggables[index]);
          });
        });
      } else {
        throw message;
      }
    }
  }
  const defaultScope = new Scope();
  function currentScope() {
    return scopeStack[scopeStack.length - 1] || defaultScope;
  }
  function scope(fn) {
    const currentScope = new Scope();
    scopeStack.push(currentScope);
    try {
      fn.call();
    } finally {
      scopeStack.pop();
    }
    return currentScope;
  }

  function throttle(func, wait) {
    let lastTime = 0;
    return function executedFunction() {
      const context = this;
      const args = arguments;
      const now = Date.now();
      if (now - lastTime >= wait) {
        func.apply(context, args);
        lastTime = now;
      }
    };
  }

  function dispatchDomEvent(element, eventName, detail) {
    let {
      cancelable = false
    } = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    return element.dispatchEvent(new CustomEvent(eventName, {
      bubbles: true,
      cancelable,
      detail
    }));
  }

  const throttledDragOver = (callback, duration) => {
    const throttledCallback = throttle(event => callback(event), duration);
    return event => {
      event.preventDefault();
      throttledCallback(event);
    };
  };
  const passiveFalse = {
    passive: false
  };
  const isTouch = navigator.maxTouchPoints > 0;
  const mouseEvents = {
    start: 'mousedown',
    move: 'mousemove',
    end: 'mouseup'
  };
  const touchEvents = {
    start: 'touchstart',
    move: 'touchmove',
    end: 'touchend'
  };
  const draggables = [];
  const transformProperty = 'transform';
  const transitionProperty = 'transition';
  function getTouchByID(element, touchId) {
    for (let i = 0; i < element.changedTouches.length; i++) {
      if (element.changedTouches[i].identifier === touchId) {
        return element.changedTouches[i];
      }
    }
    return false;
  }
  function preventDoubleInit(draggable) {
    const message = "for this element Dragee.Draggable is already exist, don't create it twice ";
    if (draggables.some(existing => draggable.element === existing.element)) {
      throw message;
    }
    draggables.push(draggable);
  }
  function copyStyles(source, destination) {
    const cs = window.getComputedStyle(source);
    for (let i = 0; i < cs.length; i++) {
      const key = cs[i];
      if (key.indexOf('transition') < 0 && key.indexOf('transform') < 0) {
        destination.style[key] = cs[key];
      }
    }
    for (let i = 0; i < source.children.length; i++) {
      copyStyles(source.children[i], destination.children[i]);
    }
  }
  class Draggable extends EventEmitter {
    constructor(element) {
      let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      super(options);
      this.targets = [];
      this.options = options;
      this.element = element;
      preventDoubleInit(this);
      const scope = options.scope || currentScope();
      scope.addDraggable(this);
      this._enable = true;
      this.startBounding();
      this.startPositioning();
      this.startListening();
    }
    startBounding() {
      this.bounding = this.options.bounding || {
        bound: this.options.bound || (point => point)
      };
    }
    startPositioning() {
      this._setDefaultTransition();
      this.offset = this.isConsiderTransformOffset ? Point.elementBoundingOffset(this.element, this.container) : Point.elementOffset(this.element, this.container);
      this.pinnedPosition = this.offset;
      this.position = this.offset;
      this.initialPosition = this.options.position || this.offset;
      this.pinPosition(this.initialPosition);
      if (this.bounding.refresh) {
        this.bounding.refresh();
      }
    }
    startListening() {
      this._dragStart = event => this.dragStart(event);
      this._dragMove = event => this.dragMove(event);
      this._dragEnd = event => this.dragEnd(event);
      this._nativeDragStart = event => this.nativeDragStart(event);
      this._nativeDragOver = throttledDragOver(event => this.nativeDragOver(event), this.dragOverThrottleDuration);
      this._nativeDragEnd = event => this.nativeDragEnd(event);
      this._nativeDrop = event => this.nativeDrop(event);
      this._scroll = event => this.onScroll(event);
      this.handler.addEventListener(touchEvents.start, this._dragStart, passiveFalse);
      this.handler.addEventListener(mouseEvents.start, this._dragStart, passiveFalse);
    }
    getSize() {
      return Point.elementSize(this.element);
    }
    getPosition() {
      this.position = this.offset.add(this._transformPosition || new Point(0, 0));
      return this.position;
    }
    getCenter() {
      return this.position.add(this.getSize().mult(0.5));
    }
    _setDefaultTransition() {
      if (!this.element.style[transitionProperty]) {
        this.element.style[transitionProperty] = window.getComputedStyle(this.element)[transitionProperty];
      }
    }
    _setTransition(time) {
      let transition = this.element.style[transitionProperty];
      const transitionCss = `transform ${time}ms`;
      if (!/transform\s?\d*m?s?/.test(transition)) {
        if (transition) {
          transition += `, ${transitionCss}`;
        } else {
          transition = transitionCss;
        }
      } else {
        transition = transition.replace(/transform\s?\d*m?s?/g, transitionCss);
      }
      if (this.element.style[transitionProperty] !== transition) {
        this.element.style[transitionProperty] = transition;
      }
    }
    _setTranslate(point) {
      this._transformPosition = point;
      const translateCss = `translate3d(${point.x}px, ${point.y}px, 0px)`;
      let transform = this.element.style[transformProperty];
      if (this.shouldRemoveZeroTranslate && point.x === 0 && point.y === 0) {
        transform = transform.replace(/translate3d\([^)]+\)/, '');
      } else if (!/translate3d\([^)]+\)/.test(transform)) {
        if (transform) {
          transform += ' ';
        }
        transform += translateCss;
      } else {
        transform = transform.replace(/translate3d\([^)]+\)/, translateCss);
      }
      if (this.element.style[transformProperty] !== transform) {
        this.element.style[transformProperty] = transform;
      }
    }
    move(point) {
      let time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      let isSilent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      point = point.clone();
      this.position = point;
      this._setTransition(time);
      this._setTranslate(point.sub(this.offset));
      if (!isSilent) {
        this.emitDragEvent('move');
      }
    }
    pinPosition(point) {
      let time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      let silent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      this.pinnedPosition = point.clone();
      this.move(this.pinnedPosition, time, silent);
    }
    resetPositionToInitial() {
      this.pinPosition(this.initialPosition);
    }
    refreshPosition() {
      this.setPosition(this.getPosition());
    }
    setPosition(point) {
      point = point.clone();
      this.position = point;
      this._setTransition(0);
      this._setTranslate(point.sub(this.offset));
    }
    determineDirection(point) {
      this._previousDirectionPosition ||= this._startPosition;
      this.leftDirection = this._previousDirectionPosition.x > point.x;
      this.rightDirection = this._previousDirectionPosition.x < point.x;
      this.upDirection = this._previousDirectionPosition.y > point.y;
      this.downDirection = this._previousDirectionPosition.y < point.y;
      this._previousDirectionPosition = point;
    }
    seemsScrolling() {
      return +new Date() - this._startTouchTimestamp < this.touchDraggingThreshold;
    }
    shouldUseNativeDragAndDrop() {
      if (this.isTouchEvent) {
        return this.nativeDragAndDrop && this.emulateNativeDragAndDropOnTouch;
      } else {
        return this.nativeDragAndDrop;
      }
    }
    dragStart(event) {
      if (!this._enable) {
        return;
      }
      if (this.stopPropagationOnDragStart) {
        event.stopPropagation();
      }
      this.isTouchEvent = isTouch && event instanceof window.TouchEvent;
      this.touchPoint = this._startTouchPoint = new Point(this.isTouchEvent ? event.changedTouches[0].pageX : event.clientX, this.isTouchEvent ? event.changedTouches[0].pageY : event.clientY);
      this._startPosition = this.getPosition();
      if (this.isTouchEvent) {
        this._touchId = event.changedTouches[0].identifier;
        this._startTouchTimestamp = +new Date();
      }
      this._startWindowScrollPoint = this.windowScrollPoint;
      this._startScrollElementsOffset = this.scrollElementsOffset;
      if (event.target instanceof window.HTMLInputElement || event.target instanceof window.HTMLInputElement) {
        event.target.focus();
      }
      if (this.shouldUseNativeDragAndDrop()) {
        if (this.isTouchEvent && this.emulateNativeDragAndDropOnTouch) {
          this._startParentsScrollOffset = this.parentsScrollOffset;
          const emulateOnFirstMove = event => {
            if (this.seemsScrolling()) {
              this.cancelDragging();
            } else {
              this.emulateNativeDragAndDrop(event);
            }
            cancelEmulation();
          };
          const cancelEmulation = () => {
            document.removeEventListener(touchEvents.move, emulateOnFirstMove);
            document.removeEventListener(touchEvents.end, cancelEmulation);
          };
          document.addEventListener(touchEvents.move, emulateOnFirstMove, passiveFalse);
          document.addEventListener(touchEvents.end, cancelEmulation, passiveFalse);
        } else {
          this.element.addEventListener('dragstart', this._nativeDragStart);
          this.element.draggable = true;
          document.addEventListener(mouseEvents.end, this._nativeDragEnd, passiveFalse);
        }
      } else {
        document.addEventListener(touchEvents.move, this._dragMove, passiveFalse);
        document.addEventListener(mouseEvents.move, this._dragMove, passiveFalse);
        document.addEventListener(touchEvents.end, this._dragEnd, passiveFalse);
        document.addEventListener(mouseEvents.end, this._dragEnd, passiveFalse);
      }
      window.addEventListener('scroll', this._scroll);
      this.scrollElements.forEach(p => p.addEventListener('scroll', this._scroll));
      if (!this.shouldUseNativeDragAndDrop() && this.dragStartThreshold > 0) {
        this._dragStartPending = true;
      } else {
        this.emitDragEvent('start');
      }
    }
    dragMove(event) {
      let touch;
      this.isTouchEvent = isTouch && event instanceof window.TouchEvent;
      if (this.isTouchEvent) {
        touch = getTouchByID(event, this._touchId);
        if (!touch) {
          return;
        }
        if (this.seemsScrolling()) {
          this.cancelDragging();
          return;
        }
      }
      this.touchPoint = new Point(this.isTouchEvent ? touch.pageX : event.clientX, this.isTouchEvent ? touch.pageY : event.clientY);
      if (this._dragStartPending) {
        const dx = this.touchPoint.x - this._startTouchPoint.x;
        const dy = this.touchPoint.y - this._startTouchPoint.y;
        if (Math.sqrt(dx * dx + dy * dy) < this.dragStartThreshold) {
          return;
        }
        this._dragStartPending = false;
        this.emitDragEvent('start');
      }
      this.isDragging = true;
      event.stopPropagation();
      event.preventDefault();
      let point = this._startPosition.add(this.touchPoint.sub(this._startTouchPoint)).add(this.windowScrollPoint.sub(this._startWindowScrollPoint)).add(this.scrollElementsOffset.sub(this._startScrollElementsOffset));
      point = this.bounding.bound(point, this.getSize());
      this.determineDirection(point);
      this.move(point);
      this.element.classList.add('dragee-active');
    }
    dragEnd(event) {
      this.isTouchEvent = isTouch && event instanceof window.TouchEvent;
      if (this.isTouchEvent && !getTouchByID(event, this._touchId)) {
        return;
      }
      if (this._dragStartPending) {
        // threshold never crossed — treat as click, clean up silently
        this._dragStartPending = false;
        this.cancelDragging();
        return;
      }
      if (this.isDragging) {
        event.stopPropagation();
        event.preventDefault();
      }
      this.dragEndAction();
      this.emitDragEvent('end');
      this.cancelDragging();
      setTimeout(() => this.element.classList.remove('dragee-active'));
    }
    onScroll(_event) {
      let point = this._startPosition.add(this.touchPoint.sub(this._startTouchPoint)).add(this.windowScrollPoint.sub(this._startWindowScrollPoint)).add(this.scrollElementsOffset.sub(this._startScrollElementsOffset));
      point = this.bounding.bound(point, this.getSize());
      if (!this.nativeDragAndDrop) {
        this.determineDirection(point);
        this.move(point);
      }
    }
    nativeDragStart(event) {
      event.stopPropagation();
      event.dataTransfer.setData('text', 'FireFox fix');
      event.dataTransfer.effectAllowed = 'move';
      document.addEventListener('dragover', this._nativeDragOver);
      document.addEventListener('dragend', this._nativeDragEnd);
      document.addEventListener('drop', this._nativeDrop);
    }
    nativeDragOver(event) {
      event.preventDefault();
      event.dataTransfer.dropEffect = 'move';
      this.element.classList.add('dragee-placeholder');
      if (event.clientX === 0 && event.clientY === 0) {
        return;
      }
      this.touchPoint = new Point(event.clientX, event.clientY);
      let point = this._startPosition.add(this.touchPoint.sub(this._startTouchPoint)).add(this.windowScrollPoint.sub(this._startWindowScrollPoint)).add(this.scrollElementsOffset.sub(this._startScrollElementsOffset));
      point = this.bounding.bound(point, this.getSize());
      this.determineDirection(point);
      this.position = point;
      this.emitDragEvent('move');
    }
    nativeDragEnd(_event) {
      this.element.classList.remove('dragee-placeholder');
      this.dragEndAction();
      this.emitDragEvent('end');
      document.removeEventListener('dragover', this._nativeDragOver);
      document.removeEventListener('dragend', this._nativeDragEnd);
      document.removeEventListener(mouseEvents.end, this._nativeDragEnd);
      document.removeEventListener('drop', this._nativeDrop);
      window.removeEventListener('scroll', this._scroll);
      this.scrollElements.forEach(p => p.removeEventListener('scroll', this._scroll));
      this.isDragging = false;
      this.element.removeAttribute('draggable');
      this.element.removeEventListener('dragstart', this._nativeDragStart);
      this.element.classList.remove('dragee-active');
    }
    nativeDrop(event) {
      event.stopPropagation();
      event.preventDefault();
    }
    cancelDragging() {
      document.removeEventListener(touchEvents.move, this._dragMove);
      document.removeEventListener(mouseEvents.move, this._dragMove);
      document.removeEventListener(touchEvents.end, this._dragEnd);
      document.removeEventListener(mouseEvents.end, this._dragEnd);
      document.removeEventListener(mouseEvents.end, this._nativeDragEnd);
      window.removeEventListener('scroll', this._scroll);
      this.scrollElements.forEach(p => p.removeEventListener('scroll', this._scroll));
      this.isDragging = false;
      this._previousDirectionPosition = null;
      this.element.removeAttribute('draggable');
      this.element.removeEventListener('dragstart', this._nativeDragStart);
    }
    copyStyles(source, destination) {
      if (this.options.copyStyles) {
        this.options.copyStyles(source, destination);
      } else {
        copyStyles(source, destination);
      }
    }
    emulateNativeDragAndDrop(event) {
      const containerRect = this.container.getBoundingClientRect();
      const clonedElement = this.element.cloneNode(true);
      clonedElement.style[transformProperty] = '';
      this.copyStyles(this.element, clonedElement);
      clonedElement.classList.add('dragee-native-emulation');
      clonedElement.style.position = 'absolute';
      document.body.appendChild(clonedElement);
      this.element.classList.add('dragee-placeholder');
      const emulationDraggable = new Draggable(clonedElement, {
        container: document.body,
        touchDraggingThreshold: 0,
        domEvents: false,
        bound(point) {
          return point;
        },
        on: {
          'drag:move': () => {
            const containerRectPoint = new Point(containerRect.left, containerRect.top);
            this.position = emulationDraggable.position.sub(containerRectPoint).sub(this._startWindowScrollPoint).add(this._startParentsScrollOffset);
            this.determineDirection(this.position);
            this.emitDragEvent('move');
          },
          'drag:end': () => {
            emulationDraggable.destroy();
            document.body.removeChild(clonedElement);
            this.element.classList.remove('dragee-placeholder');
            this.element.classList.remove('dragee-active');
            this.dragEndAction();
            this.emitDragEvent('end');
            this.cancelDragging();
          }
        }
      });
      const containerRectPoint = new Point(containerRect.left, containerRect.top);
      emulationDraggable._startWindowScrollPoint = this._startWindowScrollPoint;
      emulationDraggable.move(this.pinnedPosition.add(containerRectPoint).add(this.windowScrollPoint).sub(this.parentsScrollOffset));
      emulationDraggable.dragStart(event);
      event.preventDefault();
    }
    emitDragEvent(type) {
      const detail = {
        draggable: this
      };
      this.emit(`drag:${type}`, detail);
      if (this.domEvents) {
        dispatchDomEvent(this.element, `dragee:${type}`, detail);
      }
    }
    dragEndAction() {
      this.pinPosition(this.position);
    }
    getRectangle() {
      return new Rectangle(this.position, this.getSize());
    }
    refresh() {
      if (this.bounding.refresh) {
        this.bounding.refresh();
      }
    }
    destroy() {
      this.handler.removeEventListener(touchEvents.start, this._dragStart);
      this.handler.removeEventListener(mouseEvents.start, this._dragStart);
      this.element.removeEventListener('dragstart', this._nativeDragStart);
      document.removeEventListener(touchEvents.move, this._dragMove);
      document.removeEventListener(mouseEvents.move, this._dragMove);
      document.removeEventListener(touchEvents.end, this._dragEnd);
      document.removeEventListener(mouseEvents.end, this._dragEnd);
      document.removeEventListener('dragover', this._nativeDragOver);
      document.removeEventListener('dragend', this._nativeDragEnd);
      document.removeEventListener(mouseEvents.end, this._nativeDragEnd);
      document.removeEventListener('drop', this._nativeDrop);
      scopes.forEach(scope => scope.releaseDraggable(this));
      const index = draggables.indexOf(this);
      if (index > -1) {
        draggables.splice(index, 1);
      }
    }
    get container() {
      return this._container = this._container || this.options.container || this.options.parent || this.element.offsetParent;
    }
    get handler() {
      if (!this._handler) {
        if (typeof this.options.handler === 'string') {
          this._handler = this.element.querySelector(this.options.handler) || this.element;
        } else {
          this._handler = this.options.handler || this.element;
        }
      }
      return this._handler;
    }
    get stopPropagationOnDragStart() {
      return this.options.stopPropagationOnDragStart || false;
    }
    get nativeDragAndDrop() {
      return this.options.nativeDragAndDrop || false;
    }
    get domEvents() {
      return this.options.domEvents !== false;
    }
    get emulateNativeDragAndDropOnTouch() {
      return this.options.emulateNativeDragAndDropOnTouch || false;
    }
    get shouldRemoveZeroTranslate() {
      return this.options.shouldRemoveZeroTranslate || false;
    }
    get touchDraggingThreshold() {
      return this.options.touchDraggingThreshold || 0;
    }
    get dragStartThreshold() {
      return this.options.dragStartThreshold || 0;
    }
    get dragOverThrottleDuration() {
      return this.options.dragOverThrottleDuration || 16;
    }
    get isConsiderTransformOffset() {
      return this.options.considerTransformOffset || false;
    }
    get windowScrollPoint() {
      return new Point(window.scrollX, window.scrollY);
    }
    get scrollRootContainer() {
      return this.options.scrollRootContainer || this.container;
    }
    get scrollElements() {
      return this._cachedScrollElements ? this._cachedScrollElements : this._cachedScrollElements = getParentsChain(this.element, this.scrollRootContainer);
    }
    get scrollElementsOffset() {
      return new Point(this.scrollElements.reduce((sum, p) => sum + p.scrollLeft, 0), this.scrollElements.reduce((sum, p) => sum + p.scrollTop, 0));
    }
    get parents() {
      return this._cachedParents ? this._cachedParents : this._cachedParents = getParentsChain(this.element, this.container);
    }
    get parentsScrollOffset() {
      return new Point(this.parents.reduce((sum, p) => sum + p.scrollLeft, 0), this.parents.reduce((sum, p) => sum + p.scrollTop, 0));
    }
    get enable() {
      return this._enable;
    }
    set enable(enable) {
      if (enable) {
        this.element.classList.remove('dragee-disable');
      } else {
        this.element.classList.add('dragee-disable');
      }
      this._enable = enable;
    }
  }

  function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction() {
      const context = this;
      const args = arguments;
      const later = function () {
        timeout = null;
        func.apply(context, args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  function getDistance(p1, p2) {
    const dx = p1.x - p2.x,
      dy = p1.y - p2.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
  function getXDifference(p1, p2) {
    return Math.abs(p1.x - p2.x);
  }
  function getYDifference(p1, p2) {
    return Math.abs(p1.y - p2.y);
  }
  function transformedSpaceDistanceFactory(options) {
    return (p1, p2) => {
      return Math.sqrt(Math.pow(options.x * Math.abs(p1.x - p2.x), 2) + Math.pow(options.y * Math.abs(p1.y - p2.y), 2));
    };
  }
  function indexOfNearestPoint(arr, val, radius) {
    let getDistanceFunc = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : getDistance;
    let size,
      index = 0,
      i,
      temp;
    if (arr.length === 0) {
      return -1;
    }
    size = getDistanceFunc(arr[0], val);
    for (i = 0; i < arr.length; i++) {
      temp = getDistanceFunc(arr[i], val);
      if (temp < size) {
        size = temp;
        index = i;
      }
    }
    if (radius >= 0 && size > radius) {
      return -1;
    }
    return index;
  }

  class List extends EventEmitter {
    constructor(draggables) {
      let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      super(options);
      this.options = Object.assign({
        timeEnd: 200,
        timeExcange: 400,
        radius: 30
      }, options);
      this.container = options.container;
      this.draggables = draggables;
      this.changedDuringIteration = false;
      this.controllers = new Map();
      this.resizeObserver = new ResizeObserver(debounce(this.onResize.bind(this), 100));
      if (this.container) {
        this.resizeObserver.observe(this.container);
      }
      this.init();
    }
    onResize() {
      if (this.options.reorderOnChange) this.reset();
      this.draggables.forEach(draggable => {
        if (!draggable.isDragging) {
          draggable.startPositioning();
        }
      });
    }
    init() {
      this._enable = true;
      this.draggables.forEach(draggable => this.initDraggable(draggable));
    }
    initDraggable(draggable) {
      draggable.enable = this._enable;
      this.listenTo(draggable, 'drag:move', () => this.onMove(draggable));
      draggable.dragEndAction = () => {
        draggable.pinPosition(draggable.pinnedPosition, this.options.timeEnd);
        this.onEnd(draggable);
      };
      this.resizeObserver.observe(draggable.element);
    }
    listenTo(draggable, eventName, handler) {
      draggable.addEventListener(eventName, handler, {
        signal: this.signalFor(draggable)
      });
    }
    signalFor(draggable) {
      if (!this.controllers.has(draggable)) {
        this.controllers.set(draggable, new AbortController());
      }
      return this.controllers.get(draggable).signal;
    }
    releaseDraggable(draggable) {
      this.resizeObserver.unobserve(draggable.element);
      this.controllers.get(draggable)?.abort();
      this.controllers.delete(draggable);
      removeItem(this.draggables, draggable);
    }
    onMove(draggable) {
      if (this.swappingDisabled) return;
      const sortedDraggables = this.getSortedDraggables();
      const pinnedPositions = sortedDraggables.map(draggable => draggable.pinnedPosition);
      const currentIndex = sortedDraggables.indexOf(draggable);
      const targetIndex = indexOfNearestPoint(pinnedPositions, draggable.position, this.options.radius, this.distanceFunc);
      if (targetIndex !== -1 && currentIndex !== targetIndex) {
        if (targetIndex < currentIndex) {
          for (let i = targetIndex; i < currentIndex; i++) {
            sortedDraggables[i].pinPosition(pinnedPositions[i + 1], this.options.timeExcange);
          }
        } else {
          for (let i = currentIndex; i < targetIndex; i++) {
            sortedDraggables[i + 1].pinPosition(pinnedPositions[i], this.options.timeExcange);
          }
        }
        if (draggable.nativeDragAndDrop) {
          draggable.pinPosition(pinnedPositions[targetIndex]);
        } else {
          draggable.pinnedPosition = pinnedPositions[targetIndex];
        }
        this.changedDuringIteration = true;
      }
    }
    onEnd(draggable) {
      if (this.changedDuringIteration) {
        this.emitListEvent('change', draggable);
        this.changedDuringIteration = false;
        if (this.options.reorderOnChange && this.options.container) {
          this.reorderElements(draggable);
        }
      }
    }
    reorderElements(movedDraggable) {
      const sortedDraggables = this.getSortedDraggables();
      const index = sortedDraggables.indexOf(movedDraggable);
      const next = sortedDraggables[index + 1];
      this.reset();
      if (next) {
        this.container.insertBefore(movedDraggable.element, next.element);
      } else {
        this.container.appendChild(movedDraggable.element);
      }
      this.draggables.forEach(d => d.startPositioning());
      this.emitListEvent('reordered', movedDraggable);
    }
    emitListEvent(type, draggable) {
      const detail = {
        list: this,
        draggable
      };
      this.emit(`list:${type}`, detail);
      if (this.domEvents) {
        dispatchDomEvent(draggable.element, `dragee:list-${type}`, detail);
      }
    }
    getCurrentPinnedPositions() {
      return this.draggables.map(draggable => draggable.pinnedPosition.clone());
    }
    getSortedDraggables() {
      return this.draggables.sort(this.sorting.bind(this));
    }
    reset() {
      this.draggables.forEach(draggable => draggable.resetPositionToInitial());
    }
    refresh() {
      this.draggables.forEach(draggable => draggable.refresh());
    }
    add(draggables) {
      if (!(draggables instanceof Array)) {
        draggables = [draggables];
      }
      draggables.forEach(draggable => this.initDraggable(draggable));
      this.draggables = this.draggables.concat(draggables);
    }
    remove(draggables) {
      const initialPositions = this.draggables.map(draggable => draggable.initialPosition);
      const list = [];
      const sortedDraggables = this.getSortedDraggables();
      if (!(draggables instanceof Array)) {
        draggables = [draggables];
      }
      draggables.forEach(draggable => this.releaseDraggable(draggable));
      let j = 0;
      sortedDraggables.forEach(draggable => {
        if (this.draggables.indexOf(draggable) !== -1) {
          if (draggable.pinnedPosition !== initialPositions[j]) {
            draggable.pinPosition(initialPositions[j], this.options.timeExcange);
          }
          draggable.initialPosition = initialPositions[j];
          j++;
          list.push(draggable);
        }
      });
      this.draggables = list;
    }
    clear() {
      this.remove(this.draggables.slice());
    }
    destroy() {
      this.draggables.forEach(draggable => draggable.destroy());
      if (this.container) {
        this.resizeObserver.unobserve(this.container);
      }
    }
    sorting(draggableA, draggableB) {
      if (this.options.sorting) {
        return this.options.sorting(draggableA, draggableB);
      } else {
        if (draggableA.pinnedPosition.y < draggableB.pinnedPosition.y) return -1;
        if (draggableA.pinnedPosition.y > draggableB.pinnedPosition.y) return 1;
        if (draggableA.pinnedPosition.x < draggableB.pinnedPosition.x) return -1;
        if (draggableA.pinnedPosition.x > draggableB.pinnedPosition.x) return 1;
        return 0;
      }
    }
    get distanceFunc() {
      return this.options.getDistance || getDistance;
    }
    get domEvents() {
      return this.options.domEvents !== false;
    }
    get positions() {
      return this.getCurrentPinnedPositions();
    }
    set positions(positions) {
      const message = 'wrong array length';
      if (positions.length === this.draggables.length) {
        positions.forEach((point, i) => {
          this.draggables[i].pinPosition(point);
        });
      } else {
        throw message;
      }
    }
    get enable() {
      return this._enable;
    }
    set enable(enable) {
      this._enable = enable;
      this.draggables.forEach(draggable => {
        draggable.enable = enable;
      });
    }
    get swappingDisabled() {
      return this._swappingDisabled;
    }
    set swappingDisabled(disabled) {
      this._swappingDisabled = disabled;
    }
  }

  const arrayMove = (array, from, to) => {
    array.splice(to < 0 ? array.length + to : to, 0, array.splice(from, 1)[0]);
  };
  class BubblingList extends List {
    autoDetectGap() {
      if (this._gap !== undefined || this.explicitGap !== undefined || this.draggables.length < 2) return;
      const axis = this.axis;
      const sorted = this.getSortedDraggables();
      // Detached elements report size 0
      const index = sorted.findIndex((d, i) => i < sorted.length - 1 && d.element.isConnected);
      if (index === -1) return;
      const [current, next] = [sorted[index], sorted[index + 1]];
      this._gap = next.pinnedPosition[axis] - current.pinnedPosition[axis] - current.getSize()[axis];
    }
    autoDetectStartPosition() {
      if (this.draggables.length >= 1 && !this.startPosition) {
        this.startPosition = this.draggables[0].pinnedPosition;
      }
    }
    initDraggable(draggable) {
      super.initDraggable(draggable);
      this.listenTo(draggable, 'drag:start', () => this.onDragStart(draggable));
    }
    onDragStart(draggable) {
      this.autoDetectGap();
      this.autoDetectStartPosition();
      this.cachedSortedDraggables = this.getSortedDraggables();
      this.indexOfActiveDraggable = this.cachedSortedDraggables.indexOf(draggable);
    }
    onMove(draggable) {
      if (this.swappingDisabled) return;
      const prevDraggable = this.cachedSortedDraggables[this.indexOfActiveDraggable - 1];
      const nextDraggable = this.cachedSortedDraggables[this.indexOfActiveDraggable + 1];
      const currentPosition = draggable.pinnedPosition;
      let currentOrder;
      let targetIndex;
      if (this.isMovingBackward(draggable) && prevDraggable) {
        currentOrder = [prevDraggable, draggable].map(d => d.pinnedPosition);
        targetIndex = indexOfNearestPoint(currentOrder, draggable.position, 10000, this.distanceFunc);
        if (targetIndex === 0) {
          if (draggable.shouldUseNativeDragAndDrop()) {
            draggable.pinPosition(prevDraggable.pinnedPosition);
          } else {
            draggable.pinnedPosition = prevDraggable.pinnedPosition.clone();
          }
          const prevNewPosition = this.nextPosition(draggable.pinnedPosition, draggable);
          prevNewPosition[this.crossAxis] = currentPosition[this.crossAxis];
          prevDraggable.pinPosition(prevNewPosition, this.options.timeExcange);
          arrayMove(this.cachedSortedDraggables, this.indexOfActiveDraggable--, this.indexOfActiveDraggable);
          this.onMove(draggable);
          this.changedDuringIteration = true;
        }
      } else if (this.isMovingForward(draggable) && nextDraggable) {
        currentOrder = [draggable, nextDraggable].map(d => d.pinnedPosition);
        targetIndex = indexOfNearestPoint(currentOrder, draggable.position, 10000, this.distanceFunc);
        if (targetIndex === 1) {
          nextDraggable.pinPosition(draggable.pinnedPosition, this.options.timeExcange);
          const draggableNewPosition = this.nextPosition(nextDraggable.pinnedPosition, nextDraggable);
          if (draggable.shouldUseNativeDragAndDrop()) {
            draggable.pinPosition(draggableNewPosition);
          } else {
            draggable.pinnedPosition = draggableNewPosition;
          }
          arrayMove(this.cachedSortedDraggables, this.indexOfActiveDraggable++, this.indexOfActiveDraggable);
          this.onMove(draggable);
          this.changedDuringIteration = true;
        }
      }
    }
    bubbling(sortedDraggables, currentDraggable) {
      let currentPosition = this.startPosition.clone();
      sortedDraggables ||= this.getSortedDraggables();
      sortedDraggables.forEach(draggable => {
        if (!draggable.pinnedPosition.compare(currentPosition)) {
          if (draggable === currentDraggable && !currentDraggable.shouldUseNativeDragAndDrop()) {
            draggable.pinnedPosition = currentPosition.clone();
          } else {
            draggable.pinPosition(currentPosition, draggable === currentDraggable ? 0 : this.options.timeExcange);
          }
        }
        currentPosition = this.nextPosition(currentPosition, draggable);
      });
    }
    remove(draggables) {
      if (!(draggables instanceof Array)) {
        draggables = [draggables];
      }

      // Detect layout before removal, otherwise the gap is measured across the hole
      this.autoDetectGap();
      this.autoDetectStartPosition();
      draggables.forEach(draggable => this.releaseDraggable(draggable));
      this.draggables = this.draggables.filter(d => !draggables.includes(d));
      this.draggables.forEach(d => d.startPositioning());
      if (this.draggables.length > 0) {
        this.bubbling();
      }
    }
    nextPosition(position, draggable) {
      const next = position.clone();
      next[this.axis] = position[this.axis] + draggable.getSize()[this.axis] + this.gap;
      return next;
    }
    isMovingBackward(draggable) {
      return this.axis === 'x' ? draggable.leftDirection : draggable.upDirection;
    }
    isMovingForward(draggable) {
      return this.axis === 'x' ? draggable.rightDirection : draggable.downDirection;
    }
    get axis() {
      return this.options.axis === 'x' ? 'x' : 'y';
    }
    get crossAxis() {
      return this.axis === 'x' ? 'y' : 'x';
    }
    get distanceFunc() {
      return this.options.getDistance || (this.axis === 'x' ? getXDifference : getYDifference);
    }
    get explicitGap() {
      return this.options.gap ?? this.options.verticalGap;
    }
    get gap() {
      if (this.explicitGap !== undefined) return this.explicitGap;
      this.autoDetectGap();
      return this._gap || 0;
    }
    set gap(gapValue) {
      this.options.gap = gapValue;
    }
    get verticalGap() {
      return this.gap;
    }
    set verticalGap(gapValue) {
      this.gap = gapValue;
    }
  }

  function range(start, stop, step) {
    const result = [];
    if (typeof stop === 'undefined') {
      stop = start;
      start = 0;
    }
    if (typeof step === 'undefined') {
      step = 1;
    }
    if (step > 0 && start >= stop || step < 0 && start <= stop) {
      return [];
    }
    for (let i = start; step > 0 ? i < stop : i > stop; i += step) {
      result.push(i);
    }
    return result;
  }

  //Return crossing point of two lines
  function directCrossing(L1P1, L1P2, L2P1, L2P2) {
    let temp, k1, k2, b1, b2, x, y;
    if (L2P1.x === L2P2.x) {
      temp = L2P1;
      L2P1 = L1P1;
      L1P1 = temp;
      temp = L2P2;
      L2P2 = L1P2;
      L1P2 = temp;
    }
    if (L1P1.x === L1P2.x) {
      k2 = (L2P2.y - L2P1.y) / (L2P2.x - L2P1.x);
      b2 = (L2P2.x * L2P1.y - L2P1.x * L2P2.y) / (L2P2.x - L2P1.x);
      x = L1P1.x;
      y = x * k2 + b2;
      return new Point(x, y);
    } else {
      k1 = (L1P2.y - L1P1.y) / (L1P2.x - L1P1.x);
      b1 = (L1P2.x * L1P1.y - L1P1.x * L1P2.y) / (L1P2.x - L1P1.x);
      k2 = (L2P2.y - L2P1.y) / (L2P2.x - L2P1.x);
      b2 = (L2P2.x * L2P1.y - L2P1.x * L2P2.y) / (L2P2.x - L2P1.x);
      x = (b1 - b2) / (k2 - k1);
      y = x * k1 + b1;
      return new Point(x, y);
    }
  }
  function boundToLine(A, B, P) {
    const AP = new Point(P.x - A.x, P.y - A.y),
      AB = new Point(B.x - A.x, B.y - A.y),
      ab2 = AB.x * AB.x + AB.y * AB.y,
      ap_ab = AP.x * AB.x + AP.y * AB.y,
      t = ap_ab / ab2;
    return new Point(A.x + AB.x * t, A.y + AB.y * t);
  }
  function getPointOnLineByLenght(LP1, LP2, lenght) {
    const dx = LP2.x - LP1.x;
    const dy = LP2.y - LP1.y;
    const percent = lenght / getDistance(LP1, LP2);
    return new Point(LP1.x + percent * dx, LP1.y + percent * dy);
  }
  function addPointToBoundPoints(boundpoints, point, isRight) {
    const result = boundpoints.filter(bPoint => {
      return bPoint.y > point.y || (isRight ? bPoint.x < point.x : bPoint.x > point.x);
    });
    for (let i = 0; i < result.length; i++) {
      if (point.y < result[i].y) {
        result.splice(i, 0, point);
        return result;
      }
    }
    result.push(point);
    return result;
  }

  class BasicStrategy {
    constructor(rectangle) {
      let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.rectangle = rectangle;
      this.options = options;
    }
    get boundRect() {
      return typeof this.rectangle === 'function' ? this.rectangle() : this.rectangle;
    }
  }
  class NotCrossingStrategy extends BasicStrategy {
    positioning(rectangleList, indexesOfNews) {
      const staticRectangleIndexes = rectangleList.reduce((indexes, _rect, index) => {
        if (indexesOfNews.indexOf(index) === -1) {
          indexes.push(index);
        }
        return indexes;
      }, []);
      indexesOfNews.forEach(index => {
        let rect = rectangleList[index];
        let removable = false;
        staticRectangleIndexes.forEach(indexOfStatic => {
          const staticRect = rectangleList[indexOfStatic];
          rect = staticRect.moveToBound(rect);
        });
        removable = staticRectangleIndexes.some(indexOfStatic => {
          const staticRect = rectangleList[indexOfStatic];
          return !!staticRect.and(rect);
        }) || rect.and(this.boundRect).getSquare() !== rect.getSquare();
        if (removable) {
          rect.removable = true;
        } else {
          staticRectangleIndexes.push(index);
        }
      });
      return rectangleList;
    }
    sorting(odlDraggablesList, newDraggables, indexOfNews) {
      const draggables = odlDraggablesList.concat(newDraggables);
      newDraggables.forEach(draggable => {
        indexOfNews.push(draggables.indexOf(draggable));
      });
      return draggables;
    }
  }
  class FloatLeftStrategy extends BasicStrategy {
    constructor(rectangle) {
      let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      super(rectangle, options);
      this.options = Object.assign({
        removable: true
      }, options);
      this.radius = options.radius || 80;
      this.paddingTopLeft = options.paddingTopLeft || new Point(0, 0);
      this.paddingBottomRight = options.paddingBottomRight || new Point(0, 0);
      this.yGapBetweenDraggables = options.yGapBetweenDraggables || 0;
      this.getDistance = options.getDistance || getDistance;
      this.getPosition = options.getPosition || (draggable => draggable.position);
    }
    positioning(rectangleList, _indexesOfNews) {
      const boundRect = this.boundRect;
      const rectP2 = boundRect.getP2();
      let boundaryPoints = [boundRect.position];
      rectangleList.forEach((rect, rectIndex) => {
        let position,
          isValid = false;
        for (let i = 0; i < boundaryPoints.length; i++) {
          position = new Point(boundaryPoints[i].x + this.paddingTopLeft.x, i > 0 ? boundaryPoints[i - 1].y + this.yGapBetweenDraggables : boundRect.position.y + this.paddingTopLeft.y);
          isValid = position.x + rect.size.x < rectP2.x;
          if (isValid) {
            break;
          }
        }
        if (!isValid) {
          position = new Point(boundRect.position.x + this.paddingTopLeft.x, boundaryPoints[boundaryPoints.length - 1].y + (rectIndex > 0 ? this.yGapBetweenDraggables : this.paddingTopLeft.y));
        }
        rect.position = position;
        if (this.options.removable && rect.getP3().y > boundRect.getP3().y) {
          rect.removable = true;
        }
        boundaryPoints = addPointToBoundPoints(boundaryPoints, rect.getP3().add(this.paddingBottomRight));
      });
      return rectangleList;
    }
    sorting(odlDraggablesList, newDraggables, indexOfNews) {
      const newList = odlDraggablesList.concat();
      const listOldPosition = odlDraggablesList.map(draggable => draggable.getPosition());
      newDraggables.forEach(newDraggable => {
        let index = indexOfNearestPoint(listOldPosition, this.getPosition(newDraggable), this.radius, this.getDistance);
        if (index === -1) {
          index = newList.length;
        } else {
          index = newList.indexOf(odlDraggablesList[index]);
        }
        newList.splice(index, 0, newDraggable);
      });
      newDraggables.forEach(newDraggable => {
        indexOfNews.push(newList.indexOf(newDraggable));
      });
      return newList;
    }
  }
  class FloatRightStrategy extends FloatLeftStrategy {
    constructor(rectangle) {
      let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      super(rectangle, options);
      this.paddingTopRight = options.paddingTopRight || new Point(5, 5);
      this.paddingBottomLeft = options.paddingBottomLeft || new Point(0, 0);
      this.yGapBetweenDraggables = options.yGapBetweenDraggables || 0;
      this.paddingBottomNegLeft = new Point(-this.paddingBottomLeft.x, this.paddingBottomLeft.y);
    }
    positioning(rectangleList, _indexesOfNews) {
      const boundRect = this.boundRect;
      let boundaryPoints = [boundRect.getP2()];
      rectangleList.forEach((rect, rectIndex) => {
        let position,
          isValid = false;
        for (let i = 0; i < boundaryPoints.length; i++) {
          position = new Point(boundaryPoints[i].x - rect.size.x - this.paddingTopRight.x, i > 0 ? boundaryPoints[i - 1].y + this.yGapBetweenDraggables : boundRect.position.y + this.paddingTopRight.y);
          isValid = position.x > rect.position.x;
          if (isValid) {
            break;
          }
        }
        if (!isValid) {
          position = new Point(boundRect.getP2().x - rect.size.x - this.paddingTopRight.x, boundaryPoints[boundaryPoints.length - 1].y + (rectIndex > 0 ? this.yGapBetweenDraggables : this.paddingTopRight.y));
        }
        rect.position = position;
        if (this.options.removable && rect.getP4().y > boundRect.getP4().y) {
          rect.removable = true;
        }
        boundaryPoints = addPointToBoundPoints(boundaryPoints, rect.getP4().add(this.paddingBottomNegLeft), true);
      });
      return rectangleList;
    }
  }

  function getAngleDiff(alpha, beta) {
    const minAngle = Math.min(alpha, beta);
    const maxAngle = Math.max(alpha, beta);
    return Math.min(maxAngle - minAngle, minAngle + Math.PI * 2 - maxAngle);
  }
  function getAngle(p1, p2) {
    const diff = p2.sub(p1);
    return normalizeAngle(Math.atan2(diff.y, diff.x));
  }
  function boundAngle(min, max, val) {
    let dmin, dmax;
    if (min < max && val > min && val < max) {
      return val;
    } else if (max < min && (val < max || val > min)) {
      return val;
    } else {
      dmin = getAngleDiff(min, val);
      dmax = getAngleDiff(max, val);
      if (dmin < dmax) {
        return min;
      } else {
        return max;
      }
    }
  }
  function normalizeAngle(val) {
    while (val < 0) {
      val += 2 * Math.PI;
    }
    while (val > 2 * Math.PI) {
      val -= 2 * Math.PI;
    }
    return val;
  }
  function getPointFromRadialSystem(angle, length, center) {
    center = center || new Point(0, 0);
    return center.add(new Point(length * Math.cos(angle), length * Math.sin(angle)));
  }

  class Bound {
    constructor() {}
    bound(point, _size) {
      return point;
    }
    refresh() {}
    static bounding() {
      const instance = new this(...arguments);
      return instance.bound.bind(instance);
    }
  }
  class BoundToRectangle extends Bound {
    constructor(rectangle) {
      super();
      this.rectangle = rectangle;
    }
    bound(point, size) {
      const calcPoint = point.clone();
      const rectP2 = this.rectangle.getP3();
      if (this.rectangle.position.x > calcPoint.x) {
        calcPoint.x = this.rectangle.position.x;
      }
      if (this.rectangle.position.y > calcPoint.y) {
        calcPoint.y = this.rectangle.position.y;
      }
      if (rectP2.x < calcPoint.x + size.x) {
        calcPoint.x = rectP2.x - size.x;
      }
      if (rectP2.y < calcPoint.y + size.y) {
        calcPoint.y = rectP2.y - size.y;
      }
      return calcPoint;
    }
  }
  class BoundToElement extends BoundToRectangle {
    constructor(element, container) {
      super(Rectangle.fromElement(element, container));
      this.element = element;
      this.container = container;
    }
    refresh() {
      this.rectangle = Rectangle.fromElement(this.element, this.container);
    }
  }
  class BoundToLineX extends Bound {
    constructor(x, startY, endY) {
      super();
      this.x = x;
      this.startY = startY;
      this.endY = endY;
    }
    bound(point, size) {
      const calcPoint = point.clone();
      calcPoint.x = this.x;
      if (this.startY > calcPoint.y) {
        calcPoint.y = this.startY;
      }
      if (this.endY < calcPoint.y + size.y) {
        calcPoint.y = this.endY - size.y;
      }
      return calcPoint;
    }
  }
  class BoundToLineY extends Bound {
    constructor(y, startX, endX) {
      super();
      this.y = y;
      this.startX = startX;
      this.endX = endX;
    }
    bound(point, size) {
      const calcPoint = point.clone();
      calcPoint.y = this.y;
      if (this.startX > calcPoint.x) {
        calcPoint.x = this.startX;
      }
      if (this.endX < calcPoint.x + size.x) {
        calcPoint.x = this.endX - size.x;
      }
      return calcPoint;
    }
  }
  class BoundToLine extends Bound {
    constructor(startPoint, endPoint) {
      super();
      this.startPoint = startPoint;
      this.endPoint = endPoint;
      const alpha = Math.atan2(endPoint.y - startPoint.y, endPoint.x - startPoint.x);
      const beta = alpha + Math.PI / 2;
      this.someK = 10;
      this.cosBeta = Math.cos(beta);
      this.sinBeta = Math.sin(beta);
    }
    bound(point, size) {
      const point2 = new Point(point.x + this.someK * this.cosBeta, point.y + this.someK * this.sinBeta);
      const newEndPoint = getPointOnLineByLenght(this.endPoint, this.startPoint, size.x);
      const pointCrossing = directCrossing(this.startPoint, this.endPoint, point, point2);
      return boundToLine(this.startPoint, newEndPoint, pointCrossing);
    }
  }
  class BoundToCircle extends Bound {
    constructor(center, radius) {
      super();
      this.center = center;
      this.radius = radius;
    }
    bound(point, _size) {
      return getPointOnLineByLenght(this.center, point, this.radius);
    }
  }
  class BoundToArc extends BoundToCircle {
    constructor(center, radius, startAngle, endAngle) {
      super(center, radius);
      this._startAngle = startAngle;
      this._endAngle = endAngle;
    }
    startAngle() {
      return typeof this._startAngle === 'function' ? this._startAngle() : this._startAngle;
    }
    endAngle() {
      return typeof this._endAngle === 'function' ? this._endAngle() : this._endAngle;
    }
    bound(point, _size) {
      let angle = getAngle(this.center, point);
      angle = normalizeAngle(angle);
      angle = boundAngle(this.startAngle(), this.endAngle(), angle);
      return getPointFromRadialSystem(angle, this.radius, this.center);
    }
  }

  class Target extends EventEmitter {
    constructor(element, draggables) {
      let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      super(options);
      this.options = Object.assign({
        timeEnd: 200,
        timeExcange: 400
      }, options);
      this.positioningStrategy = options.strategy || new FloatLeftStrategy(this.getRectangle.bind(this), {
        radius: 80,
        getDistance: transformedSpaceDistanceFactory({
          x: 1,
          y: 4
        }),
        removable: true
      });
      this.element = element;
      this.draggables = [];
      this.listeners = new AbortController();
      draggables.forEach(draggable => this.accept(draggable));
      const scope = options.scope || currentScope();
      scope.addTarget(this);
      this.startBounding();
      this.init();
    }
    startBounding() {
      this.bound = this.options.bound || BoundToElement.bounding(this.element);
    }
    positioning(draggables, indexesOfNew) {
      return this.positioningStrategy.positioning(draggables, indexesOfNew);
    }
    sorting(oldDraggables, newDraggables, indexOfNews) {
      return this.positioningStrategy.sorting(oldDraggables, newDraggables, indexOfNews);
    }
    init() {
      let rectangles, indexesOfNew;
      this.innerDraggables = this.draggables.filter(draggable => {
        let element = draggable.element.parentNode;
        while (element) {
          if (element === this.element) {
            return true;
          }
          element = element.parentNode;
        }
        return false;
      });
      if (this.innerDraggables.length) {
        indexesOfNew = range(this.innerDraggables.length);
        rectangles = this.positioning(this.innerDraggables.map(draggable => {
          return draggable.getRectangle();
        }), indexesOfNew);
        this.setPosition(rectangles, indexesOfNew);
        this.innerDraggables.forEach(draggable => this.emitTargetEvent('add', draggable));
      }
    }
    getRectangle() {
      return Rectangle.fromElement(this.element, this.container, true);
    }
    catchDraggable(draggable) {
      if (this.options.catchDraggable) {
        return this.options.catchDraggable(this, draggable);
      } else {
        const targetRectangle = this.getRectangle();
        const draggableSquare = draggable.getRectangle().getSquare();
        return draggableSquare < targetRectangle.getSquare() && targetRectangle.includePoint(draggable.getCenter());
      }
    }
    getPosition() {
      return this.getRectangle().position;
    }
    getSize() {
      return this.getRectangle().size;
    }
    destroy() {
      this.listeners.abort();
      scopes.forEach(scope => removeItem(scope.targets, this));
    }
    refresh() {
      const rectangles = this.positioning(this.innerDraggables.map(draggable => {
        return draggable.getRectangle();
      }), []);
      this.setPosition(rectangles, [], 0);
    }
    onEnd(draggable) {
      const newDraggablesIndex = [];
      if (this.getRectangle().includePoint(draggable.getCenter())) {
        draggable.position = this.bound(draggable.position, draggable.getSize());
      } else {
        return false;
      }
      this.emitTargetEvent('beforeAdd', draggable);
      this.innerDraggables = this.sorting(this.innerDraggables, [draggable], newDraggablesIndex);
      const rectangles = this.positioning(this.innerDraggables.map(draggable => {
        return draggable.getRectangle();
      }), newDraggablesIndex);
      this.setPosition(rectangles, newDraggablesIndex);
      if (this.innerDraggables.indexOf(draggable) !== -1) {
        this.emitTargetEvent('add', draggable);
      }
      return true;
    }
    setPosition(rectangles, indexesOfNew, time) {
      this.innerDraggables.slice(0).forEach((draggable, i) => {
        const rect = rectangles[i],
          timeEnd = time || time === 0 ? time : indexesOfNew.indexOf(i) !== -1 ? this.options.timeEnd : this.options.timeExcange;
        if (rect.removable) {
          draggable.move(draggable.initialPosition, timeEnd, true, true);
          removeItem(this.innerDraggables, draggable);
          this.emitTargetEvent('remove', draggable);
        } else {
          draggable.move(rect.position, timeEnd, true, true);
        }
      });
    }
    add(draggable, time) {
      const newDraggablesIndex = this.innerDraggables.length;
      this.emitTargetEvent('beforeAdd', draggable);
      this.accept(draggable);
      this.pushInnerDraggable(draggable);
      const rectangles = this.positioning(this.innerDraggables.map(draggable => {
        return draggable.getRectangle();
      }), newDraggablesIndex, draggable);
      this.setPosition(rectangles, [newDraggablesIndex], time || 0);
      if (this.innerDraggables.indexOf(draggable) !== -1) {
        this.emitTargetEvent('add', draggable);
      }
    }
    pushInnerDraggable(draggable) {
      if (this.innerDraggables.indexOf(draggable) === -1) {
        this.innerDraggables.push(draggable);
      }
    }
    accept(draggable) {
      if (this.draggables.includes(draggable)) return;
      this.draggables.push(draggable);
      draggable.targets.push(this);
      draggable.addEventListener('drag:move', () => this.remove(draggable), {
        signal: this.listeners.signal
      });
    }
    remove(draggable) {
      const index = this.innerDraggables.indexOf(draggable);
      if (index === -1) {
        return;
      }
      this.innerDraggables.splice(index, 1);
      const rectangles = this.positioning(this.innerDraggables.map(draggable => {
        return draggable.getRectangle();
      }), []);
      this.setPosition(rectangles, []);
      this.emitTargetEvent('remove', draggable);
    }
    reset() {
      this.innerDraggables.forEach(draggable => {
        draggable.move(draggable.initialPosition, 0, true, true);
        this.emitTargetEvent('remove', draggable);
      });
      this.innerDraggables = [];
    }
    getSortedDraggables() {
      return this.innerDraggables.slice();
    }
    emitTargetEvent(type, draggable) {
      const detail = {
        target: this,
        draggable
      };
      this.emit(`target:${type}`, detail);
      if (this.domEvents) {
        const domType = type.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`);
        dispatchDomEvent(this.element, `dragee:target-${domType}`, detail);
      }
    }
    get container() {
      return this._container = this._container || this.options.container || this.options.parent || this.element.offsetParent;
    }
    get domEvents() {
      return this.options.domEvents !== false;
    }
  }

  exports.Bound = Bound;
  exports.BoundToArc = BoundToArc;
  exports.BoundToCircle = BoundToCircle;
  exports.BoundToElement = BoundToElement;
  exports.BoundToLine = BoundToLine;
  exports.BoundToLineX = BoundToLineX;
  exports.BoundToLineY = BoundToLineY;
  exports.BoundToRectangle = BoundToRectangle;
  exports.BubblingList = BubblingList;
  exports.Draggable = Draggable;
  exports.FloatLeftStrategy = FloatLeftStrategy;
  exports.FloatRightStrategy = FloatRightStrategy;
  exports.List = List;
  exports.NotCrossingStrategy = NotCrossingStrategy;
  exports.Point = Point;
  exports.Rectangle = Rectangle;
  exports.Scope = Scope;
  exports.Target = Target;
  exports.defaultScope = defaultScope;
  exports.getDistance = getDistance;
  exports.getXDifference = getXDifference;
  exports.getYDifference = getYDifference;
  exports.indexOfNearestPoint = indexOfNearestPoint;
  exports.scope = scope;
  exports.scopes = scopes;
  exports.transformedSpaceDistanceFactory = transformedSpaceDistanceFactory;

  return exports;

})({});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZGV2LmpzIiwic291cmNlcyI6WyIuLi9zcmMvdXRpbHMvZ2V0LXBhcmVudHMtY2hhaW4uanMiLCIuLi9zcmMvZ2VvbWV0cnkvcG9pbnQuanMiLCIuLi9zcmMvZ2VvbWV0cnkvcmVjdGFuZ2xlLmpzIiwiLi4vc3JjL2V2ZW50RW1pdHRlci5qcyIsIi4uL3NyYy91dGlscy9yZW1vdmUtYXJyYXktaXRlbS5qcyIsIi4uL3NyYy9zY29wZS5qcyIsIi4uL3NyYy91dGlscy90aHJvdHRsZS5qcyIsIi4uL3NyYy91dGlscy9kaXNwYXRjaC1kb20tZXZlbnQuanMiLCIuLi9zcmMvZHJhZ2dhYmxlLmpzIiwiLi4vc3JjL3V0aWxzL2RlYm91bmNlLmpzIiwiLi4vc3JjL2dlb21ldHJ5L2Rpc3RhbmNlcy5qcyIsIi4uL3NyYy9saXN0LmpzIiwiLi4vc3JjL2J1YmJsaW5nTGlzdC5qcyIsIi4uL3NyYy91dGlscy9yYW5nZS5qcyIsIi4uL3NyYy9nZW9tZXRyeS9ib3VuZHMuanMiLCIuLi9zcmMvcG9zaXRpb25pbmcuanMiLCIuLi9zcmMvZ2VvbWV0cnkvYW5nbGVzLmpzIiwiLi4vc3JjL2JvdW5kaW5nLmpzIiwiLi4vc3JjL3RhcmdldC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRQYXJlbnRzQ2hhaW4oY2hpbGRFbGVtZW50LCByb290RWxlbWVudCkge1xuXHRjb25zdCBjaGFpbiA9IFtdXG4gIGxldCBlbGVtZW50ID0gY2hpbGRFbGVtZW50XG5cbiAgd2hpbGUoZWxlbWVudC5wYXJlbnROb2RlICYmIGVsZW1lbnQgIT09IHJvb3RFbGVtZW50KSB7XG4gICAgY2hhaW4udW5zaGlmdChlbGVtZW50LnBhcmVudE5vZGUpXG4gICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZVxuICB9XG5cbiAgcmV0dXJuIGNoYWluXG59XG4iLCJpbXBvcnQgZ2V0UGFyZW50c0NoYWluIGZyb20gJy4uL3V0aWxzL2dldC1wYXJlbnRzLWNoYWluJ1xuXG4vKiogQ2xhc3MgcmVwcmVzZW50aW5nIGEgcG9pbnQuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2ludCB7XG4gIC8qKlxuICAqIENyZWF0ZSBhIHBvaW50LlxuICAqIEBwYXJhbSB7bnVtYmVyfSB4IC0gVGhlIHggdmFsdWUuXG4gICogQHBhcmFtIHtudW1iZXJ9IHkgLSBUaGUgeSB2YWx1ZS5cbiAgKi9cbiAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgIHRoaXMueCA9IHhcbiAgICB0aGlzLnkgPSB5XG4gIH1cblxuICBhZGQocCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54ICsgcC54LCB0aGlzLnkgKyBwLnkpXG4gIH1cblxuICBzdWIocCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54IC0gcC54LCB0aGlzLnkgLSBwLnkpXG4gIH1cblxuICBtdWx0KGspIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCAqIGssIHRoaXMueSAqIGspXG4gIH1cblxuICBuZWdhdGl2ZSgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KC10aGlzLngsIC10aGlzLnkpXG4gIH1cblxuICBjb21wYXJlKHApIHtcbiAgICByZXR1cm4gKHRoaXMueCA9PT0gcC54ICYmIHRoaXMueSA9PT0gcC55KVxuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLngsIHRoaXMueSlcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiBge3g9JHt0aGlzLnh9LHk9JHt0aGlzLnl9fWBcbiAgfVxuXG4gIHN0YXRpYyBlbGVtZW50T2Zmc2V0KGVsZW1lbnQsIHBhcmVudCkge1xuICAgIHBhcmVudCA9IHBhcmVudCB8fCBlbGVtZW50LnBhcmVudE5vZGVcbiAgICBpZiAocGFyZW50ID09PSBlbGVtZW50KSB7XG4gICAgICByZXR1cm4gbmV3IFBvaW50KDAsIDApO1xuICAgIH0gZWxzZSBpZiAocGFyZW50ID09PSBlbGVtZW50Lm9mZnNldFBhcmVudCkge1xuICAgICAgcmV0dXJuIG5ldyBQb2ludChcbiAgICAgICAgZWxlbWVudC5vZmZzZXRMZWZ0ICsgcGFyZW50LmNsaWVudExlZnQsXG4gICAgICAgIGVsZW1lbnQub2Zmc2V0VG9wICsgcGFyZW50LmNsaWVudFRvcFxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjb25zaWRlck9mZnNldEVsZW1lbnRzID0gW2VsZW1lbnQsIGdldFBhcmVudHNDaGFpbihlbGVtZW50LCBwYXJlbnQpLnBvcCgpXVxuICAgICAgcmV0dXJuIG5ldyBQb2ludChcbiAgICAgICAgY29uc2lkZXJPZmZzZXRFbGVtZW50cy5yZWR1Y2UoKHN1bSwgcCkgPT4gc3VtICsgcC5vZmZzZXRMZWZ0LCAwKSArIHBhcmVudC5jbGllbnRMZWZ0LFxuICAgICAgICBjb25zaWRlck9mZnNldEVsZW1lbnRzLnJlZHVjZSgoc3VtLCBwKSA9PiBzdW0gKyBwLm9mZnNldFRvcCwgMCkgKyBwYXJlbnQuY2xpZW50VG9wXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGVsZW1lbnRCb3VuZGluZ09mZnNldChlbGVtZW50LCBwYXJlbnQpIHtcbiAgICBwYXJlbnQgPSBwYXJlbnQgfHwgZWxlbWVudC5wYXJlbnROb2RlXG4gICAgY29uc3QgZWxlbWVudFJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgY29uc3QgcGFyZW50UmVjdCA9IHBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIHJldHVybiBuZXcgUG9pbnQoXG4gICAgICBlbGVtZW50UmVjdC5sZWZ0IC0gcGFyZW50UmVjdC5sZWZ0LFxuICAgICAgZWxlbWVudFJlY3QudG9wIC0gcGFyZW50UmVjdC50b3BcbiAgICApXG4gIH1cblxuICBzdGF0aWMgZWxlbWVudFNpemUoZWxlbWVudCkge1xuICAgIGNvbnN0IGVsZW1lbnRSZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIHJldHVybiBuZXcgUG9pbnQoXG4gICAgICBlbGVtZW50UmVjdC53aWR0aCxcbiAgICAgIGVsZW1lbnRSZWN0LmhlaWdodFxuICAgIClcbiAgfVxufVxuIiwiaW1wb3J0IFBvaW50IGZyb20gJy4vcG9pbnQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY3RhbmdsZSB7XG4gIGNvbnN0cnVjdG9yKHBvc2l0aW9uLCBzaXplKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgdGhpcy5zaXplID0gc2l6ZVxuICB9XG5cbiAgZ2V0UDEoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25cbiAgfVxuXG4gIGdldFAyKCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHRoaXMucG9zaXRpb24ueSlcbiAgfVxuXG4gIGdldFAzKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLnNpemUpXG4gIH1cblxuICBnZXRQNCgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnkpXG4gIH1cblxuICBnZXRDZW50ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb24uYWRkKHRoaXMuc2l6ZS5tdWx0KDAuNSkpXG4gIH1cblxuICBvcihyZWN0KSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBuZXcgUG9pbnQoTWF0aC5taW4odGhpcy5wb3NpdGlvbi54LCByZWN0LnBvc2l0aW9uLngpLCBNYXRoLm1pbih0aGlzLnBvc2l0aW9uLnksIHJlY3QucG9zaXRpb24ueSkpXG4gICAgY29uc3Qgc2l6ZSA9IChuZXcgUG9pbnQoTWF0aC5tYXgodGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHJlY3QucG9zaXRpb24ueCArIHJlY3Quc2l6ZS54KSwgTWF0aC5tYXgodGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnksIHJlY3QucG9zaXRpb24ueSArIHJlY3Quc2l6ZS55KSkpLnN1Yihwb3NpdGlvbilcbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZShwb3NpdGlvbiwgc2l6ZSlcbiAgfVxuXG4gIGFuZChyZWN0KSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBuZXcgUG9pbnQoTWF0aC5tYXgodGhpcy5wb3NpdGlvbi54LCByZWN0LnBvc2l0aW9uLngpLCBNYXRoLm1heCh0aGlzLnBvc2l0aW9uLnksIHJlY3QucG9zaXRpb24ueSkpXG4gICAgY29uc3Qgc2l6ZSA9IChuZXcgUG9pbnQoTWF0aC5taW4odGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHJlY3QucG9zaXRpb24ueCArIHJlY3Quc2l6ZS54KSwgTWF0aC5taW4odGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnksIHJlY3QucG9zaXRpb24ueSArIHJlY3Quc2l6ZS55KSkpLnN1Yihwb3NpdGlvbilcbiAgICBpZiAoc2l6ZS54IDw9IDAgfHwgc2l6ZS55IDw9IDApIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHBvc2l0aW9uLCBzaXplKVxuICB9XG5cbiAgaW5jbHVkZVBvaW50KHApIHtcbiAgICByZXR1cm4gISh0aGlzLnBvc2l0aW9uLnggPiBwLnggfHwgdGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLnggPCBwLnggfHwgdGhpcy5wb3NpdGlvbi55ID4gcC55IHx8IHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55IDwgcC55KVxuICB9XG5cbiAgaW5jbHVkZVJlY3RhbmdsZShyZWN0YW5nbGUpIHtcbiAgICByZXR1cm4gdGhpcy5pbmNsdWRlUG9pbnQocmVjdGFuZ2xlLnBvc2l0aW9uKSAmJiB0aGlzLmluY2x1ZGVQb2ludChyZWN0YW5nbGUuZ2V0UDMoKSlcbiAgfVxuXG4gIG1vdmVUb0JvdW5kKHJlY3QsIGF4aXMpIHtcbiAgICBsZXQgc2VsQXhpcywgY3Jvc3NSZWN0YW5nbGVcbiAgICBpZiAoYXhpcykge1xuICAgICAgc2VsQXhpcyA9IGF4aXNcbiAgICB9IGVsc2Uge1xuICAgICAgY3Jvc3NSZWN0YW5nbGUgPSB0aGlzLmFuZChyZWN0KVxuICAgICAgaWYgKCFjcm9zc1JlY3RhbmdsZSkge1xuICAgICAgICByZXR1cm4gcmVjdFxuICAgICAgfVxuICAgICAgc2VsQXhpcyA9IGNyb3NzUmVjdGFuZ2xlLnNpemUueCA+IGNyb3NzUmVjdGFuZ2xlLnNpemUueSA/ICd5JyA6ICd4J1xuICAgIH1cbiAgICBjb25zdCB0aGlzQ2VudGVyID0gdGhpcy5nZXRDZW50ZXIoKVxuICAgIGNvbnN0IHJlY3RDZW50ZXIgPSByZWN0LmdldENlbnRlcigpXG4gICAgY29uc3Qgc2lnbiA9IHRoaXNDZW50ZXJbc2VsQXhpc10gPiByZWN0Q2VudGVyW3NlbEF4aXNdID8gLTEgOiAxXG4gICAgY29uc3Qgb2Zmc2V0ID0gc2lnbiA+IDAgPyB0aGlzLnBvc2l0aW9uW3NlbEF4aXNdICsgdGhpcy5zaXplW3NlbEF4aXNdIC0gcmVjdC5wb3NpdGlvbltzZWxBeGlzXSA6IHRoaXMucG9zaXRpb25bc2VsQXhpc10gLSAocmVjdC5wb3NpdGlvbltzZWxBeGlzXSArIHJlY3Quc2l6ZVtzZWxBeGlzXSlcbiAgICByZWN0LnBvc2l0aW9uW3NlbEF4aXNdID0gcmVjdC5wb3NpdGlvbltzZWxBeGlzXSArIG9mZnNldFxuICAgIHJldHVybiByZWN0XG4gIH1cblxuICBnZXRTcXVhcmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZS54ICogdGhpcy5zaXplLnlcbiAgfVxuXG4gIHN0eWxlQXBwbHkoZWwpIHtcbiAgICBlbCA9IGVsIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2luZCcpXG4gICAgZWwuc3R5bGUubGVmdCA9IHRoaXMucG9zaXRpb24ueCArICdweCdcbiAgICBlbC5zdHlsZS50b3AgPSB0aGlzLnBvc2l0aW9uLnkgKyAncHgnXG4gICAgZWwuc3R5bGUud2lkdGggPSB0aGlzLnNpemUueCArICdweCdcbiAgICBlbC5zdHlsZS5oZWlnaHQgPSB0aGlzLnNpemUueSArICdweCdcbiAgfVxuXG4gIGdyb3d0aChzaXplKSB7XG4gICAgdGhpcy5zaXplID0gdGhpcy5zaXplLmFkZChzaXplKVxuICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uLmFkZChzaXplLm11bHQoLTAuNSkpXG4gIH1cblxuICBnZXRNaW5TaWRlKCkge1xuICAgIHJldHVybiBNYXRoLm1pbih0aGlzLnNpemUueCwgdGhpcy5zaXplLnkpXG4gIH1cblxuICBzdGF0aWMgZnJvbUVsZW1lbnQoZWxlbWVudCwgcGFyZW50PWVsZW1lbnQucGFyZW50Tm9kZSwgaXNDb25zaWRlclRyYW5zbGF0ZT1mYWxzZSkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gaXNDb25zaWRlclRyYW5zbGF0ZVxuICAgICAgPyBQb2ludC5lbGVtZW50Qm91bmRpbmdPZmZzZXQoZWxlbWVudCwgcGFyZW50KVxuICAgICAgOiBQb2ludC5lbGVtZW50T2Zmc2V0KGVsZW1lbnQsIHBhcmVudClcbiAgICBjb25zdCBzaXplID0gUG9pbnQuZWxlbWVudFNpemUoZWxlbWVudClcbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZShwb3NpdGlvbiwgc2l6ZSlcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRFbWl0dGVyIGV4dGVuZHMgRXZlbnRUYXJnZXQge1xuICBjb25zdHJ1Y3RvciAob3B0aW9ucyA9IHt9KSB7XG4gICAgc3VwZXIoKVxuXG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5vbikge1xuICAgICAgT2JqZWN0LmVudHJpZXMob3B0aW9ucy5vbikuZm9yRWFjaCgoW2V2ZW50TmFtZSwgZm5dKSA9PiB0aGlzLm9uKGV2ZW50TmFtZSwgZm4pKVxuICAgIH1cbiAgfVxuXG4gIGVtaXQoZXZlbnROYW1lLCBkZXRhaWwsIHsgY2FuY2VsYWJsZSA9IGZhbHNlIH0gPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KGV2ZW50TmFtZSwgeyBkZXRhaWwsIGNhbmNlbGFibGUgfSkpXG4gIH1cblxuICBvbihldmVudE5hbWUsIGZuLCBvcHRpb25zKSB7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZm4sIG9wdGlvbnMpXG4gICAgcmV0dXJuICgpID0+IHRoaXMub2ZmKGV2ZW50TmFtZSwgZm4pXG4gIH1cblxuICBvbmNlKGV2ZW50TmFtZSwgZm4pIHtcbiAgICByZXR1cm4gdGhpcy5vbihldmVudE5hbWUsIGZuLCB7IG9uY2U6IHRydWUgfSlcbiAgfVxuXG4gIG9mZihldmVudE5hbWUsIGZuKSB7XG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZm4pXG4gIH1cblxuICB1bnN1YnNjcmliZShldmVudE5hbWUsIGZuKSB7XG4gICAgdGhpcy5vZmYoZXZlbnROYW1lLCBmbilcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oYXJyYXksIHZhbCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGFycmF5W2ldID09PSB2YWwpIHtcbiAgICAgIGFycmF5LnNwbGljZShpLCAxKVxuICAgICAgaS0tXG4gICAgfVxuICB9XG4gIHJldHVybiBhcnJheVxufVxuIiwiaW1wb3J0IHJlbW92ZUl0ZW0gZnJvbSAnLi91dGlscy9yZW1vdmUtYXJyYXktaXRlbSdcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudEVtaXR0ZXInXG5cbmNvbnN0IHNjb3BlcyA9IFtdXG5jb25zdCBzY29wZVN0YWNrID0gW11cblxuY2xhc3MgU2NvcGUgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvcihkcmFnZ2FibGVzLCB0YXJnZXRzLCBvcHRpb25zPXt9KSB7XG4gICAgc3VwZXIob3B0aW9ucylcbiAgICBzY29wZXMuZm9yRWFjaCgoc2NvcGUpID0+IHtcbiAgICAgIGlmIChkcmFnZ2FibGVzKSB7XG4gICAgICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBzY29wZS5yZWxlYXNlRHJhZ2dhYmxlKGRyYWdnYWJsZSkpXG4gICAgICB9XG5cbiAgICAgIGlmICh0YXJnZXRzKSB7XG4gICAgICAgIHRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiBzY29wZS5yZWxlYXNlVGFyZ2V0KHRhcmdldCkpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZXMgfHwgW11cbiAgICB0aGlzLnRhcmdldHMgPSB0YXJnZXRzIHx8IFtdXG4gICAgc2NvcGVzLnB1c2godGhpcylcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICB0aW1lRW5kOiAob3B0aW9ucy50aW1lRW5kKSB8fCA0MDBcbiAgICB9XG5cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB0aGlzLmluaXREcmFnZ2FibGUoZHJhZ2dhYmxlKSlcbiAgfVxuXG4gIGFkZERyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICBzY29wZXMuZm9yRWFjaCgoc2NvcGUpID0+IHNjb3BlLnJlbGVhc2VEcmFnZ2FibGUoZHJhZ2dhYmxlKSlcbiAgICB0aGlzLmRyYWdnYWJsZXMucHVzaChkcmFnZ2FibGUpXG4gICAgdGhpcy5pbml0RHJhZ2dhYmxlKGRyYWdnYWJsZSlcbiAgfVxuXG4gIGluaXREcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgZHJhZ2dhYmxlLmRyYWdFbmRBY3Rpb24gPSAoKSA9PiB0aGlzLm9uRW5kKGRyYWdnYWJsZSlcbiAgfVxuXG4gIHJlbGVhc2VEcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgcmVtb3ZlSXRlbSh0aGlzLmRyYWdnYWJsZXMsIGRyYWdnYWJsZSlcbiAgfVxuXG4gIGFkZFRhcmdldCh0YXJnZXQpIHtcbiAgICBzY29wZXMuZm9yRWFjaCgoc2NvcGUpID0+IHNjb3BlLnJlbGVhc2VUYXJnZXQodGFyZ2V0KSlcbiAgICB0aGlzLnRhcmdldHMucHVzaCh0YXJnZXQpXG4gIH1cblxuICByZWxlYXNlVGFyZ2V0KHRhcmdldCkge1xuICAgIHJlbW92ZUl0ZW0odGhpcy50YXJnZXRzLCB0YXJnZXQpXG4gIH1cblxuICBvbkVuZChkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBzaG90VGFyZ2V0cyA9IHRoaXMudGFyZ2V0cy5maWx0ZXIoKHRhcmdldCkgPT4ge1xuICAgICAgcmV0dXJuIHRhcmdldC5kcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTFcbiAgICB9KS5maWx0ZXIoKHRhcmdldCkgPT4ge1xuICAgICAgcmV0dXJuIHRhcmdldC5jYXRjaERyYWdnYWJsZShkcmFnZ2FibGUpXG4gICAgfSkuc29ydCgoYSwgYikgPT4ge1xuICAgICAgcmV0dXJuIGEuZ2V0UmVjdGFuZ2xlKCkuZ2V0U3F1YXJlKCkgLSBiLmdldFJlY3RhbmdsZSgpLmdldFNxdWFyZSgpXG4gICAgfSlcblxuICAgIGlmIChzaG90VGFyZ2V0cy5sZW5ndGgpIHtcbiAgICAgIHNob3RUYXJnZXRzWzBdLm9uRW5kKGRyYWdnYWJsZSlcbiAgICB9IGVsc2UgaWYgKGRyYWdnYWJsZS50YXJnZXRzLmxlbmd0aCkge1xuICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKGRyYWdnYWJsZS5pbml0aWFsUG9zaXRpb24sIHRoaXMub3B0aW9ucy50aW1lRW5kKVxuICAgIH1cblxuICAgIHRoaXMuZW1pdCgnc2NvcGU6Y2hhbmdlJywgeyBzY29wZTogdGhpcywgZHJhZ2dhYmxlIH0pXG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLnRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB0YXJnZXQucmVzZXQoKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnJlZnJlc2goKSlcbiAgICB0aGlzLnRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB0YXJnZXQucmVmcmVzaCgpKVxuICB9XG5cbiAgZ2V0IHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXRzLm1hcCgodGFyZ2V0KSA9PiB7XG4gICAgICByZXR1cm4gdGFyZ2V0LmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4gdGhpcy5kcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSlcbiAgICB9KVxuICB9XG5cbiAgc2V0IHBvc2l0aW9ucyhwb3NpdGlvbnMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gJ3dyb25nIGFycmF5IGxlbmd0aCdcbiAgICBpZiAocG9zaXRpb25zLmxlbmd0aCA9PT0gdGhpcy50YXJnZXRzLmxlbmd0aCkge1xuICAgICAgdGhpcy50YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4gdGFyZ2V0LnJlc2V0KCkpXG5cbiAgICAgIHBvc2l0aW9ucy5mb3JFYWNoKCh0YXJnZXRJbmRleGVzLCBpKSA9PiB7XG4gICAgICAgIHRhcmdldEluZGV4ZXMuZm9yRWFjaCgoaW5kZXgpID0+IHtcbiAgICAgICAgICB0aGlzLnRhcmdldHNbaV0uYWRkKHRoaXMuZHJhZ2dhYmxlc1tpbmRleF0pXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBtZXNzYWdlXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IGRlZmF1bHRTY29wZSA9IG5ldyBTY29wZSgpXG5cbmZ1bmN0aW9uIGN1cnJlbnRTY29wZSgpIHtcbiAgcmV0dXJuIHNjb3BlU3RhY2tbc2NvcGVTdGFjay5sZW5ndGggLSAxXSB8fCBkZWZhdWx0U2NvcGVcbn1cblxuZnVuY3Rpb24gc2NvcGUoZm4pIHtcbiAgY29uc3QgY3VycmVudFNjb3BlID0gbmV3IFNjb3BlKClcblxuICBzY29wZVN0YWNrLnB1c2goY3VycmVudFNjb3BlKVxuICB0cnkge1xuICAgIGZuLmNhbGwoKVxuICB9IGZpbmFsbHkge1xuICAgIHNjb3BlU3RhY2sucG9wKClcbiAgfVxuICByZXR1cm4gY3VycmVudFNjb3BlXG59XG5cbmV4cG9ydCB7IHNjb3BlcywgZGVmYXVsdFNjb3BlLCBjdXJyZW50U2NvcGUsIFNjb3BlLCBzY29wZSB9XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0aHJvdHRsZShmdW5jLCB3YWl0KSB7XG4gIGxldCBsYXN0VGltZSA9IDBcblxuICByZXR1cm4gZnVuY3Rpb24gZXhlY3V0ZWRGdW5jdGlvbigpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpc1xuICAgIGNvbnN0IGFyZ3MgPSBhcmd1bWVudHNcblxuICAgIGNvbnN0IG5vdyA9IERhdGUubm93KClcbiAgICBpZiAobm93IC0gbGFzdFRpbWUgPj0gd2FpdCkge1xuICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKVxuICAgICAgbGFzdFRpbWUgPSBub3dcbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BhdGNoRG9tRXZlbnQoZWxlbWVudCwgZXZlbnROYW1lLCBkZXRhaWwsIHsgY2FuY2VsYWJsZSA9IGZhbHNlIH0gPSB7fSkge1xuICByZXR1cm4gZWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChldmVudE5hbWUsIHsgYnViYmxlczogdHJ1ZSwgY2FuY2VsYWJsZSwgZGV0YWlsIH0pKVxufVxuIiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50RW1pdHRlcidcbmltcG9ydCBQb2ludCBmcm9tICcuL2dlb21ldHJ5L3BvaW50J1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tICcuL2dlb21ldHJ5L3JlY3RhbmdsZSdcbmltcG9ydCB7IHNjb3BlcywgY3VycmVudFNjb3BlIH0gZnJvbSAnLi9zY29wZSdcbmltcG9ydCB0aHJvdHRsZSBmcm9tICcuL3V0aWxzL3Rocm90dGxlJ1xuaW1wb3J0IGdldFBhcmVudHNDaGFpbiBmcm9tICcuL3V0aWxzL2dldC1wYXJlbnRzLWNoYWluJ1xuaW1wb3J0IGRpc3BhdGNoRG9tRXZlbnQgZnJvbSAnLi91dGlscy9kaXNwYXRjaC1kb20tZXZlbnQnXG5cbmNvbnN0IHRocm90dGxlZERyYWdPdmVyID0gKGNhbGxiYWNrLCBkdXJhdGlvbikgPT4ge1xuICBjb25zdCB0aHJvdHRsZWRDYWxsYmFjayA9IHRocm90dGxlKChldmVudCkgPT4gY2FsbGJhY2soZXZlbnQpLCBkdXJhdGlvbilcbiAgcmV0dXJuIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB0aHJvdHRsZWRDYWxsYmFjayhldmVudClcbiAgfVxufVxuXG5jb25zdCBwYXNzaXZlRmFsc2UgPSB7IHBhc3NpdmU6IGZhbHNlIH1cblxuY29uc3QgaXNUb3VjaCA9IG5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyA+IDBcbmNvbnN0IG1vdXNlRXZlbnRzID0ge1xuICBzdGFydDogJ21vdXNlZG93bicsXG4gIG1vdmU6ICdtb3VzZW1vdmUnLFxuICBlbmQ6ICdtb3VzZXVwJ1xufVxuY29uc3QgdG91Y2hFdmVudHMgPSB7XG4gIHN0YXJ0OiAndG91Y2hzdGFydCcsXG4gIG1vdmU6ICd0b3VjaG1vdmUnLFxuICBlbmQ6ICd0b3VjaGVuZCdcbn1cbmNvbnN0IGRyYWdnYWJsZXMgPSBbXVxuY29uc3QgdHJhbnNmb3JtUHJvcGVydHkgPSAndHJhbnNmb3JtJ1xuY29uc3QgdHJhbnNpdGlvblByb3BlcnR5ID0gJ3RyYW5zaXRpb24nXG5cbmZ1bmN0aW9uIGdldFRvdWNoQnlJRChlbGVtZW50LCB0b3VjaElkKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudC5jaGFuZ2VkVG91Y2hlcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChlbGVtZW50LmNoYW5nZWRUb3VjaGVzW2ldLmlkZW50aWZpZXIgPT09IHRvdWNoSWQpIHtcbiAgICAgIHJldHVybiBlbGVtZW50LmNoYW5nZWRUb3VjaGVzW2ldXG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZVxufVxuXG5mdW5jdGlvbiBwcmV2ZW50RG91YmxlSW5pdChkcmFnZ2FibGUpIHtcbiAgY29uc3QgbWVzc2FnZSA9IFwiZm9yIHRoaXMgZWxlbWVudCBEcmFnZWUuRHJhZ2dhYmxlIGlzIGFscmVhZHkgZXhpc3QsIGRvbid0IGNyZWF0ZSBpdCB0d2ljZSBcIlxuICBpZiAoZHJhZ2dhYmxlcy5zb21lKChleGlzdGluZykgPT4gZHJhZ2dhYmxlLmVsZW1lbnQgPT09IGV4aXN0aW5nLmVsZW1lbnQpKSB7XG4gICAgdGhyb3cgbWVzc2FnZVxuICB9XG4gIGRyYWdnYWJsZXMucHVzaChkcmFnZ2FibGUpXG59XG5cbmZ1bmN0aW9uIGNvcHlTdHlsZXMoc291cmNlLCBkZXN0aW5hdGlvbikge1xuICBjb25zdCBjcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHNvdXJjZSlcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qga2V5ID0gY3NbaV1cbiAgICBpZiAoKGtleS5pbmRleE9mKCd0cmFuc2l0aW9uJykgPCAwKSAmJiAoa2V5LmluZGV4T2YoJ3RyYW5zZm9ybScpIDwgMCkpIHtcbiAgICAgIGRlc3RpbmF0aW9uLnN0eWxlW2tleV0gPSBjc1trZXldXG4gICAgfVxuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzb3VyY2UuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICBjb3B5U3R5bGVzKHNvdXJjZS5jaGlsZHJlbltpXSwgZGVzdGluYXRpb24uY2hpbGRyZW5baV0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhZ2dhYmxlIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgb3B0aW9ucz17fSkge1xuICAgIHN1cGVyKG9wdGlvbnMpXG4gICAgdGhpcy50YXJnZXRzID0gW11cbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIHByZXZlbnREb3VibGVJbml0KHRoaXMpXG4gICAgY29uc3Qgc2NvcGUgPSBvcHRpb25zLnNjb3BlIHx8IGN1cnJlbnRTY29wZSgpXG4gICAgc2NvcGUuYWRkRHJhZ2dhYmxlKHRoaXMpXG4gICAgdGhpcy5fZW5hYmxlID0gdHJ1ZVxuICAgIHRoaXMuc3RhcnRCb3VuZGluZygpXG4gICAgdGhpcy5zdGFydFBvc2l0aW9uaW5nKClcbiAgICB0aGlzLnN0YXJ0TGlzdGVuaW5nKClcbiAgfVxuXG4gIHN0YXJ0Qm91bmRpbmcoKSB7XG4gICAgdGhpcy5ib3VuZGluZyA9IHRoaXMub3B0aW9ucy5ib3VuZGluZyB8fCB7XG4gICAgICBib3VuZDogdGhpcy5vcHRpb25zLmJvdW5kIHx8ICgocG9pbnQpID0+IHBvaW50KVxuICAgIH1cbiAgfVxuXG4gIHN0YXJ0UG9zaXRpb25pbmcoKSB7XG4gICAgdGhpcy5fc2V0RGVmYXVsdFRyYW5zaXRpb24oKVxuICAgIHRoaXMub2Zmc2V0ID0gdGhpcy5pc0NvbnNpZGVyVHJhbnNmb3JtT2Zmc2V0XG4gICAgICA/IFBvaW50LmVsZW1lbnRCb3VuZGluZ09mZnNldCh0aGlzLmVsZW1lbnQsIHRoaXMuY29udGFpbmVyKVxuICAgICAgOiBQb2ludC5lbGVtZW50T2Zmc2V0KHRoaXMuZWxlbWVudCwgdGhpcy5jb250YWluZXIpXG4gICAgdGhpcy5waW5uZWRQb3NpdGlvbiA9IHRoaXMub2Zmc2V0XG4gICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMub2Zmc2V0XG4gICAgdGhpcy5pbml0aWFsUG9zaXRpb24gPSB0aGlzLm9wdGlvbnMucG9zaXRpb24gfHwgdGhpcy5vZmZzZXRcblxuICAgIHRoaXMucGluUG9zaXRpb24odGhpcy5pbml0aWFsUG9zaXRpb24pXG5cbiAgICBpZiAodGhpcy5ib3VuZGluZy5yZWZyZXNoKSB7XG4gICAgICB0aGlzLmJvdW5kaW5nLnJlZnJlc2goKVxuICAgIH1cbiAgfVxuXG4gIHN0YXJ0TGlzdGVuaW5nKCkge1xuICAgIHRoaXMuX2RyYWdTdGFydCA9IChldmVudCkgPT4gdGhpcy5kcmFnU3RhcnQoZXZlbnQpXG4gICAgdGhpcy5fZHJhZ01vdmUgPSAoZXZlbnQpID0+IHRoaXMuZHJhZ01vdmUoZXZlbnQpXG4gICAgdGhpcy5fZHJhZ0VuZCA9IChldmVudCkgPT4gdGhpcy5kcmFnRW5kKGV2ZW50KVxuICAgIHRoaXMuX25hdGl2ZURyYWdTdGFydCA9IChldmVudCkgPT4gdGhpcy5uYXRpdmVEcmFnU3RhcnQoZXZlbnQpXG4gICAgdGhpcy5fbmF0aXZlRHJhZ092ZXIgPSB0aHJvdHRsZWREcmFnT3ZlcigoZXZlbnQpID0+IHRoaXMubmF0aXZlRHJhZ092ZXIoZXZlbnQpLCB0aGlzLmRyYWdPdmVyVGhyb3R0bGVEdXJhdGlvbilcbiAgICB0aGlzLl9uYXRpdmVEcmFnRW5kID0gKGV2ZW50KSA9PiB0aGlzLm5hdGl2ZURyYWdFbmQoZXZlbnQpXG4gICAgdGhpcy5fbmF0aXZlRHJvcCA9IChldmVudCkgPT4gdGhpcy5uYXRpdmVEcm9wKGV2ZW50KVxuICAgIHRoaXMuX3Njcm9sbCA9IChldmVudCkgPT4gdGhpcy5vblNjcm9sbChldmVudClcblxuICAgIHRoaXMuaGFuZGxlci5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQsIHBhc3NpdmVGYWxzZSlcbiAgICB0aGlzLmhhbmRsZXIuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0LCBwYXNzaXZlRmFsc2UpXG4gIH1cblxuICBnZXRTaXplKCkge1xuICAgIHJldHVybiBQb2ludC5lbGVtZW50U2l6ZSh0aGlzLmVsZW1lbnQpXG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5vZmZzZXQuYWRkKHRoaXMuX3RyYW5zZm9ybVBvc2l0aW9uIHx8IG5ldyBQb2ludCgwLCAwKSlcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvblxuICB9XG5cbiAgZ2V0Q2VudGVyKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLmdldFNpemUoKS5tdWx0KDAuNSkpXG4gIH1cblxuICBfc2V0RGVmYXVsdFRyYW5zaXRpb24gKCkge1xuICAgIGlmICghdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV0pIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5lbGVtZW50KVt0cmFuc2l0aW9uUHJvcGVydHldXG4gICAgfVxuICB9XG5cbiAgX3NldFRyYW5zaXRpb24odGltZSkge1xuICAgIGxldCB0cmFuc2l0aW9uID0gdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV1cbiAgICBjb25zdCB0cmFuc2l0aW9uQ3NzID0gYHRyYW5zZm9ybSAke3RpbWV9bXNgXG5cbiAgICBpZiAoIS90cmFuc2Zvcm1cXHM/XFxkKm0/cz8vLnRlc3QodHJhbnNpdGlvbikpIHtcbiAgICAgIGlmICh0cmFuc2l0aW9uKSB7XG4gICAgICAgIHRyYW5zaXRpb24gKz0gYCwgJHt0cmFuc2l0aW9uQ3NzfWBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyYW5zaXRpb24gPSB0cmFuc2l0aW9uQ3NzXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyYW5zaXRpb24gPSB0cmFuc2l0aW9uLnJlcGxhY2UoL3RyYW5zZm9ybVxccz9cXGQqbT9zPy9nLCB0cmFuc2l0aW9uQ3NzKVxuICAgIH1cblxuICAgIGlmICh0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNpdGlvblByb3BlcnR5XSAhPT0gdHJhbnNpdGlvbikge1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV0gPSB0cmFuc2l0aW9uXG4gICAgfVxuICB9XG5cbiAgX3NldFRyYW5zbGF0ZShwb2ludCkge1xuICAgIHRoaXMuX3RyYW5zZm9ybVBvc2l0aW9uID0gcG9pbnRcbiAgICBjb25zdCB0cmFuc2xhdGVDc3MgPSBgdHJhbnNsYXRlM2QoJHtwb2ludC54fXB4LCAke3BvaW50Lnl9cHgsIDBweClgXG5cbiAgICBsZXQgdHJhbnNmb3JtID0gdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BlcnR5XVxuXG4gICAgaWYgKHRoaXMuc2hvdWxkUmVtb3ZlWmVyb1RyYW5zbGF0ZSAmJiBwb2ludC54ID09PSAwICYmIHBvaW50LnkgPT09IDApIHtcbiAgICAgIHRyYW5zZm9ybSA9IHRyYW5zZm9ybS5yZXBsYWNlKC90cmFuc2xhdGUzZFxcKFteKV0rXFwpLywgJycpXG4gICAgfSBlbHNlIGlmICghL3RyYW5zbGF0ZTNkXFwoW14pXStcXCkvLnRlc3QodHJhbnNmb3JtKSkge1xuICAgICAgaWYgKHRyYW5zZm9ybSkge1xuICAgICAgICB0cmFuc2Zvcm0gKz0gJyAnXG4gICAgICB9XG4gICAgICB0cmFuc2Zvcm0gKz0gdHJhbnNsYXRlQ3NzXG4gICAgfSBlbHNlIHtcbiAgICAgIHRyYW5zZm9ybSA9IHRyYW5zZm9ybS5yZXBsYWNlKC90cmFuc2xhdGUzZFxcKFteKV0rXFwpLywgdHJhbnNsYXRlQ3NzKVxuICAgIH1cblxuICAgIGlmICh0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcGVydHldICE9PSB0cmFuc2Zvcm0pIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wZXJ0eV0gPSB0cmFuc2Zvcm1cbiAgICB9XG4gIH1cblxuICBtb3ZlKHBvaW50LCB0aW1lPTAsIGlzU2lsZW50PWZhbHNlKSB7XG4gICAgcG9pbnQgPSBwb2ludC5jbG9uZSgpXG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvaW50XG5cbiAgICB0aGlzLl9zZXRUcmFuc2l0aW9uKHRpbWUpXG4gICAgdGhpcy5fc2V0VHJhbnNsYXRlKHBvaW50LnN1Yih0aGlzLm9mZnNldCkpXG5cbiAgICBpZiAoIWlzU2lsZW50KSB7XG4gICAgICB0aGlzLmVtaXREcmFnRXZlbnQoJ21vdmUnKVxuICAgIH1cbiAgfVxuXG4gIHBpblBvc2l0aW9uKHBvaW50LCB0aW1lPTAsIHNpbGVudD10cnVlKSB7XG4gICAgdGhpcy5waW5uZWRQb3NpdGlvbiA9IHBvaW50LmNsb25lKClcbiAgICB0aGlzLm1vdmUodGhpcy5waW5uZWRQb3NpdGlvbiwgdGltZSwgc2lsZW50KVxuICB9XG5cbiAgcmVzZXRQb3NpdGlvblRvSW5pdGlhbCAoKSB7XG4gICAgdGhpcy5waW5Qb3NpdGlvbih0aGlzLmluaXRpYWxQb3NpdGlvbilcbiAgfVxuXG4gIHJlZnJlc2hQb3NpdGlvbiAoKSB7XG4gICAgdGhpcy5zZXRQb3NpdGlvbih0aGlzLmdldFBvc2l0aW9uKCkpXG4gIH1cblxuICBzZXRQb3NpdGlvbihwb2ludCkge1xuICAgIHBvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIHRoaXMucG9zaXRpb24gPSBwb2ludFxuICAgIHRoaXMuX3NldFRyYW5zaXRpb24oMClcbiAgICB0aGlzLl9zZXRUcmFuc2xhdGUocG9pbnQuc3ViKHRoaXMub2Zmc2V0KSlcbiAgfVxuXG4gIGRldGVybWluZURpcmVjdGlvbihwb2ludCkge1xuICAgIHRoaXMuX3ByZXZpb3VzRGlyZWN0aW9uUG9zaXRpb24gfHw9IHRoaXMuX3N0YXJ0UG9zaXRpb25cblxuICAgIHRoaXMubGVmdERpcmVjdGlvbiA9ICh0aGlzLl9wcmV2aW91c0RpcmVjdGlvblBvc2l0aW9uLnggPiBwb2ludC54KVxuICAgIHRoaXMucmlnaHREaXJlY3Rpb24gPSAodGhpcy5fcHJldmlvdXNEaXJlY3Rpb25Qb3NpdGlvbi54IDwgcG9pbnQueClcbiAgICB0aGlzLnVwRGlyZWN0aW9uID0gKHRoaXMuX3ByZXZpb3VzRGlyZWN0aW9uUG9zaXRpb24ueSA+IHBvaW50LnkpXG4gICAgdGhpcy5kb3duRGlyZWN0aW9uID0gKHRoaXMuX3ByZXZpb3VzRGlyZWN0aW9uUG9zaXRpb24ueSA8IHBvaW50LnkpXG5cbiAgICB0aGlzLl9wcmV2aW91c0RpcmVjdGlvblBvc2l0aW9uID0gcG9pbnRcbiAgfVxuXG4gIHNlZW1zU2Nyb2xsaW5nKCkge1xuICAgIHJldHVybiAoK25ldyBEYXRlKCkgLSB0aGlzLl9zdGFydFRvdWNoVGltZXN0YW1wKSA8IHRoaXMudG91Y2hEcmFnZ2luZ1RocmVzaG9sZFxuICB9XG5cbiAgc2hvdWxkVXNlTmF0aXZlRHJhZ0FuZERyb3AoKSB7XG4gICAgaWYgKHRoaXMuaXNUb3VjaEV2ZW50KSB7XG4gICAgICByZXR1cm4gdGhpcy5uYXRpdmVEcmFnQW5kRHJvcCAmJiB0aGlzLmVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcE9uVG91Y2hcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMubmF0aXZlRHJhZ0FuZERyb3BcbiAgICB9XG4gIH1cblxuICBkcmFnU3RhcnQoZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuX2VuYWJsZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3RvcFByb3BhZ2F0aW9uT25EcmFnU3RhcnQpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgfVxuXG4gICAgdGhpcy5pc1RvdWNoRXZlbnQgPSAoaXNUb3VjaCAmJiAoZXZlbnQgaW5zdGFuY2VvZiB3aW5kb3cuVG91Y2hFdmVudCkpXG5cbiAgICB0aGlzLnRvdWNoUG9pbnQgPSB0aGlzLl9zdGFydFRvdWNoUG9pbnQgPSBuZXcgUG9pbnQoXG4gICAgICB0aGlzLmlzVG91Y2hFdmVudCA/IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYIDogZXZlbnQuY2xpZW50WCxcbiAgICAgIHRoaXMuaXNUb3VjaEV2ZW50ID8gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVkgOiBldmVudC5jbGllbnRZXG4gICAgKVxuXG4gICAgdGhpcy5fc3RhcnRQb3NpdGlvbiA9IHRoaXMuZ2V0UG9zaXRpb24oKVxuICAgIGlmICh0aGlzLmlzVG91Y2hFdmVudCkge1xuICAgICAgdGhpcy5fdG91Y2hJZCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmlkZW50aWZpZXJcbiAgICAgIHRoaXMuX3N0YXJ0VG91Y2hUaW1lc3RhbXAgPSArbmV3IERhdGUoKVxuICAgIH1cblxuICAgIHRoaXMuX3N0YXJ0V2luZG93U2Nyb2xsUG9pbnQgPSB0aGlzLndpbmRvd1Njcm9sbFBvaW50XG4gICAgdGhpcy5fc3RhcnRTY3JvbGxFbGVtZW50c09mZnNldCA9IHRoaXMuc2Nyb2xsRWxlbWVudHNPZmZzZXRcblxuICAgIGlmIChldmVudC50YXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElucHV0RWxlbWVudCB8fFxuICAgICAgICAgIGV2ZW50LnRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSW5wdXRFbGVtZW50KSB7XG4gICAgICBldmVudC50YXJnZXQuZm9jdXMoKVxuICAgIH1cblxuICAgIGlmICh0aGlzLnNob3VsZFVzZU5hdGl2ZURyYWdBbmREcm9wKCkpIHtcbiAgICAgIGlmICh0aGlzLmlzVG91Y2hFdmVudCAmJiB0aGlzLmVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcE9uVG91Y2gpIHtcbiAgICAgICAgdGhpcy5fc3RhcnRQYXJlbnRzU2Nyb2xsT2Zmc2V0ID0gdGhpcy5wYXJlbnRzU2Nyb2xsT2Zmc2V0XG5cbiAgICAgICAgY29uc3QgZW11bGF0ZU9uRmlyc3RNb3ZlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuc2VlbXNTY3JvbGxpbmcoKSkge1xuICAgICAgICAgICAgdGhpcy5jYW5jZWxEcmFnZ2luZygpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wKGV2ZW50KVxuICAgICAgICAgIH1cbiAgICAgICAgICBjYW5jZWxFbXVsYXRpb24oKVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNhbmNlbEVtdWxhdGlvbiA9ICgpID0+IHtcbiAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIGVtdWxhdGVPbkZpcnN0TW92ZSlcbiAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgY2FuY2VsRW11bGF0aW9uKVxuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCBlbXVsYXRlT25GaXJzdE1vdmUsIHBhc3NpdmVGYWxzZSlcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIGNhbmNlbEVtdWxhdGlvbiwgcGFzc2l2ZUZhbHNlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIHRoaXMuX25hdGl2ZURyYWdTdGFydClcbiAgICAgICAgdGhpcy5lbGVtZW50LmRyYWdnYWJsZSA9IHRydWVcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX25hdGl2ZURyYWdFbmQsIHBhc3NpdmVGYWxzZSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSwgcGFzc2l2ZUZhbHNlKVxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSwgcGFzc2l2ZUZhbHNlKVxuXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZCwgcGFzc2l2ZUZhbHNlKVxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQsIHBhc3NpdmVGYWxzZSlcbiAgICB9XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fc2Nyb2xsKVxuICAgIHRoaXMuc2Nyb2xsRWxlbWVudHMuZm9yRWFjaCgocCkgPT4gcC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9zY3JvbGwpKVxuXG4gICAgaWYgKCF0aGlzLnNob3VsZFVzZU5hdGl2ZURyYWdBbmREcm9wKCkgJiYgdGhpcy5kcmFnU3RhcnRUaHJlc2hvbGQgPiAwKSB7XG4gICAgICB0aGlzLl9kcmFnU3RhcnRQZW5kaW5nID0gdHJ1ZVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVtaXREcmFnRXZlbnQoJ3N0YXJ0JylcbiAgICB9XG4gIH1cblxuICBkcmFnTW92ZShldmVudCkge1xuICAgIGxldCB0b3VjaFxuXG4gICAgdGhpcy5pc1RvdWNoRXZlbnQgPSAoaXNUb3VjaCAmJiAoZXZlbnQgaW5zdGFuY2VvZiB3aW5kb3cuVG91Y2hFdmVudCkpXG4gICAgaWYgKHRoaXMuaXNUb3VjaEV2ZW50KSB7XG4gICAgICB0b3VjaCA9IGdldFRvdWNoQnlJRChldmVudCwgdGhpcy5fdG91Y2hJZClcblxuICAgICAgaWYgKCF0b3VjaCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuc2VlbXNTY3JvbGxpbmcoKSkge1xuICAgICAgICB0aGlzLmNhbmNlbERyYWdnaW5nKClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy50b3VjaFBvaW50ID0gbmV3IFBvaW50KFxuICAgICAgdGhpcy5pc1RvdWNoRXZlbnQgPyB0b3VjaC5wYWdlWCA6IGV2ZW50LmNsaWVudFgsXG4gICAgICB0aGlzLmlzVG91Y2hFdmVudCA/IHRvdWNoLnBhZ2VZIDogZXZlbnQuY2xpZW50WVxuICAgIClcblxuICAgIGlmICh0aGlzLl9kcmFnU3RhcnRQZW5kaW5nKSB7XG4gICAgICBjb25zdCBkeCA9IHRoaXMudG91Y2hQb2ludC54IC0gdGhpcy5fc3RhcnRUb3VjaFBvaW50LnhcbiAgICAgIGNvbnN0IGR5ID0gdGhpcy50b3VjaFBvaW50LnkgLSB0aGlzLl9zdGFydFRvdWNoUG9pbnQueVxuICAgICAgaWYgKE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSkgPCB0aGlzLmRyYWdTdGFydFRocmVzaG9sZCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHRoaXMuX2RyYWdTdGFydFBlbmRpbmcgPSBmYWxzZVxuICAgICAgdGhpcy5lbWl0RHJhZ0V2ZW50KCdzdGFydCcpXG4gICAgfVxuXG4gICAgdGhpcy5pc0RyYWdnaW5nID0gdHJ1ZVxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gICAgbGV0IHBvaW50ID0gdGhpcy5fc3RhcnRQb3NpdGlvbi5hZGQodGhpcy50b3VjaFBvaW50LnN1Yih0aGlzLl9zdGFydFRvdWNoUG9pbnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMud2luZG93U2Nyb2xsUG9pbnQuc3ViKHRoaXMuX3N0YXJ0V2luZG93U2Nyb2xsUG9pbnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMuc2Nyb2xsRWxlbWVudHNPZmZzZXQuc3ViKHRoaXMuX3N0YXJ0U2Nyb2xsRWxlbWVudHNPZmZzZXQpKVxuXG4gICAgcG9pbnQgPSB0aGlzLmJvdW5kaW5nLmJvdW5kKHBvaW50LCB0aGlzLmdldFNpemUoKSlcbiAgICB0aGlzLmRldGVybWluZURpcmVjdGlvbihwb2ludClcbiAgICB0aGlzLm1vdmUocG9pbnQpXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RyYWdlZS1hY3RpdmUnKVxuICB9XG5cbiAgZHJhZ0VuZChldmVudCkge1xuICAgIHRoaXMuaXNUb3VjaEV2ZW50ID0gKGlzVG91Y2ggJiYgKGV2ZW50IGluc3RhbmNlb2Ygd2luZG93LlRvdWNoRXZlbnQpKVxuXG4gICAgaWYgKHRoaXMuaXNUb3VjaEV2ZW50ICYmICFnZXRUb3VjaEJ5SUQoZXZlbnQsIHRoaXMuX3RvdWNoSWQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5fZHJhZ1N0YXJ0UGVuZGluZykge1xuICAgICAgLy8gdGhyZXNob2xkIG5ldmVyIGNyb3NzZWQg4oCUIHRyZWF0IGFzIGNsaWNrLCBjbGVhbiB1cCBzaWxlbnRseVxuICAgICAgdGhpcy5fZHJhZ1N0YXJ0UGVuZGluZyA9IGZhbHNlXG4gICAgICB0aGlzLmNhbmNlbERyYWdnaW5nKClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLmlzRHJhZ2dpbmcpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfVxuXG4gICAgdGhpcy5kcmFnRW5kQWN0aW9uKClcbiAgICB0aGlzLmVtaXREcmFnRXZlbnQoJ2VuZCcpXG4gICAgdGhpcy5jYW5jZWxEcmFnZ2luZygpXG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZWUtYWN0aXZlJykpXG4gIH1cblxuICBvblNjcm9sbChfZXZlbnQpIHtcbiAgICBsZXQgcG9pbnQgPSB0aGlzLl9zdGFydFBvc2l0aW9uLmFkZCh0aGlzLnRvdWNoUG9pbnQuc3ViKHRoaXMuX3N0YXJ0VG91Y2hQb2ludCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy53aW5kb3dTY3JvbGxQb2ludC5zdWIodGhpcy5fc3RhcnRXaW5kb3dTY3JvbGxQb2ludCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy5zY3JvbGxFbGVtZW50c09mZnNldC5zdWIodGhpcy5fc3RhcnRTY3JvbGxFbGVtZW50c09mZnNldCkpXG5cbiAgICBwb2ludCA9IHRoaXMuYm91bmRpbmcuYm91bmQocG9pbnQsIHRoaXMuZ2V0U2l6ZSgpKVxuICAgIGlmICghdGhpcy5uYXRpdmVEcmFnQW5kRHJvcCkge1xuICAgICAgdGhpcy5kZXRlcm1pbmVEaXJlY3Rpb24ocG9pbnQpXG4gICAgICB0aGlzLm1vdmUocG9pbnQpXG4gICAgfVxuICB9XG5cbiAgbmF0aXZlRHJhZ1N0YXJ0KGV2ZW50KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dCcsICdGaXJlRm94IGZpeCcpXG4gICAgZXZlbnQuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSAnbW92ZSdcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIHRoaXMuX25hdGl2ZURyYWdPdmVyKVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzLl9uYXRpdmVEcm9wKVxuICB9XG5cbiAgbmF0aXZlRHJhZ092ZXIoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZXZlbnQuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnbW92ZSdcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZHJhZ2VlLXBsYWNlaG9sZGVyJylcbiAgICBpZiAoZXZlbnQuY2xpZW50WCA9PT0gMCAmJiBldmVudC5jbGllbnRZID09PSAwKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLnRvdWNoUG9pbnQgPSBuZXcgUG9pbnQoZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSlcbiAgICBsZXQgcG9pbnQgPSB0aGlzLl9zdGFydFBvc2l0aW9uLmFkZCh0aGlzLnRvdWNoUG9pbnQuc3ViKHRoaXMuX3N0YXJ0VG91Y2hQb2ludCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy53aW5kb3dTY3JvbGxQb2ludC5zdWIodGhpcy5fc3RhcnRXaW5kb3dTY3JvbGxQb2ludCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy5zY3JvbGxFbGVtZW50c09mZnNldC5zdWIodGhpcy5fc3RhcnRTY3JvbGxFbGVtZW50c09mZnNldCkpXG4gICAgcG9pbnQgPSB0aGlzLmJvdW5kaW5nLmJvdW5kKHBvaW50LCB0aGlzLmdldFNpemUoKSlcbiAgICB0aGlzLmRldGVybWluZURpcmVjdGlvbihwb2ludClcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9pbnRcbiAgICB0aGlzLmVtaXREcmFnRXZlbnQoJ21vdmUnKVxuICB9XG5cbiAgbmF0aXZlRHJhZ0VuZChfZXZlbnQpIHtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2VlLXBsYWNlaG9sZGVyJylcbiAgICB0aGlzLmRyYWdFbmRBY3Rpb24oKVxuICAgIHRoaXMuZW1pdERyYWdFdmVudCgnZW5kJylcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIHRoaXMuX25hdGl2ZURyYWdPdmVyKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzLl9uYXRpdmVEcm9wKVxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9zY3JvbGwpXG4gICAgdGhpcy5zY3JvbGxFbGVtZW50cy5mb3JFYWNoKChwKSA9PiBwLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX3Njcm9sbCkpXG4gICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2VcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkcmFnZ2FibGUnKVxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCB0aGlzLl9uYXRpdmVEcmFnU3RhcnQpXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdlZS1hY3RpdmUnKVxuICB9XG5cbiAgbmF0aXZlRHJvcChldmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgY2FuY2VsRHJhZ2dpbmcgKCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcblxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX25hdGl2ZURyYWdFbmQpXG5cbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fc2Nyb2xsKVxuICAgIHRoaXMuc2Nyb2xsRWxlbWVudHMuZm9yRWFjaCgocCkgPT4gcC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9zY3JvbGwpKVxuXG4gICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2VcbiAgICB0aGlzLl9wcmV2aW91c0RpcmVjdGlvblBvc2l0aW9uID0gbnVsbFxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2RyYWdnYWJsZScpXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIHRoaXMuX25hdGl2ZURyYWdTdGFydClcbiAgfVxuXG4gIGNvcHlTdHlsZXMoc291cmNlLCBkZXN0aW5hdGlvbikge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuY29weVN0eWxlcykge1xuICAgICAgdGhpcy5vcHRpb25zLmNvcHlTdHlsZXMoc291cmNlLCBkZXN0aW5hdGlvbilcbiAgICB9IGVsc2Uge1xuICAgICAgY29weVN0eWxlcyhzb3VyY2UsIGRlc3RpbmF0aW9uKVxuICAgIH1cbiAgfVxuXG4gIGVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcChldmVudCkge1xuICAgIGNvbnN0IGNvbnRhaW5lclJlY3QgPSB0aGlzLmNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIGNvbnN0IGNsb25lZEVsZW1lbnQgPSB0aGlzLmVsZW1lbnQuY2xvbmVOb2RlKHRydWUpXG4gICAgY2xvbmVkRWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wZXJ0eV0gPSAnJ1xuICAgIHRoaXMuY29weVN0eWxlcyh0aGlzLmVsZW1lbnQsIGNsb25lZEVsZW1lbnQpXG4gICAgY2xvbmVkRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkcmFnZWUtbmF0aXZlLWVtdWxhdGlvbicpXG4gICAgY2xvbmVkRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSdcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNsb25lZEVsZW1lbnQpXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RyYWdlZS1wbGFjZWhvbGRlcicpXG5cbiAgICBjb25zdCBlbXVsYXRpb25EcmFnZ2FibGUgPSBuZXcgRHJhZ2dhYmxlKGNsb25lZEVsZW1lbnQsIHtcbiAgICAgIGNvbnRhaW5lcjogZG9jdW1lbnQuYm9keSxcbiAgICAgIHRvdWNoRHJhZ2dpbmdUaHJlc2hvbGQ6IDAsXG4gICAgICBkb21FdmVudHM6IGZhbHNlLFxuICAgICAgYm91bmQocG9pbnQpIHtcbiAgICAgICAgcmV0dXJuIHBvaW50XG4gICAgICB9LFxuICAgICAgb246IHtcbiAgICAgICAgJ2RyYWc6bW92ZSc6ICgpID0+IHtcbiAgICAgICAgICBjb25zdCBjb250YWluZXJSZWN0UG9pbnQgPSBuZXcgUG9pbnQoY29udGFpbmVyUmVjdC5sZWZ0LCBjb250YWluZXJSZWN0LnRvcClcbiAgICAgICAgICB0aGlzLnBvc2l0aW9uID0gZW11bGF0aW9uRHJhZ2dhYmxlLnBvc2l0aW9uLnN1Yihjb250YWluZXJSZWN0UG9pbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdWIodGhpcy5fc3RhcnRXaW5kb3dTY3JvbGxQb2ludClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZCh0aGlzLl9zdGFydFBhcmVudHNTY3JvbGxPZmZzZXQpXG5cbiAgICAgICAgICB0aGlzLmRldGVybWluZURpcmVjdGlvbih0aGlzLnBvc2l0aW9uKVxuICAgICAgICAgIHRoaXMuZW1pdERyYWdFdmVudCgnbW92ZScpXG4gICAgICAgIH0sXG4gICAgICAgICdkcmFnOmVuZCc6ICgpID0+IHtcbiAgICAgICAgICBlbXVsYXRpb25EcmFnZ2FibGUuZGVzdHJveSgpXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChjbG9uZWRFbGVtZW50KVxuICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZWUtcGxhY2Vob2xkZXInKVxuICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZWUtYWN0aXZlJylcblxuICAgICAgICAgIHRoaXMuZHJhZ0VuZEFjdGlvbigpXG4gICAgICAgICAgdGhpcy5lbWl0RHJhZ0V2ZW50KCdlbmQnKVxuICAgICAgICAgIHRoaXMuY2FuY2VsRHJhZ2dpbmcoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IGNvbnRhaW5lclJlY3RQb2ludCA9IG5ldyBQb2ludChjb250YWluZXJSZWN0LmxlZnQsIGNvbnRhaW5lclJlY3QudG9wKVxuICAgIGVtdWxhdGlvbkRyYWdnYWJsZS5fc3RhcnRXaW5kb3dTY3JvbGxQb2ludCA9IHRoaXMuX3N0YXJ0V2luZG93U2Nyb2xsUG9pbnRcblxuICAgIGVtdWxhdGlvbkRyYWdnYWJsZS5tb3ZlKFxuICAgICAgdGhpcy5waW5uZWRQb3NpdGlvbi5hZGQoY29udGFpbmVyUmVjdFBvaW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy53aW5kb3dTY3JvbGxQb2ludClcbiAgICAgICAgICAgICAgICAgICAgICAgICAuc3ViKHRoaXMucGFyZW50c1Njcm9sbE9mZnNldClcbiAgICApXG5cbiAgICBlbXVsYXRpb25EcmFnZ2FibGUuZHJhZ1N0YXJ0KGV2ZW50KVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIGVtaXREcmFnRXZlbnQodHlwZSkge1xuICAgIGNvbnN0IGRldGFpbCA9IHsgZHJhZ2dhYmxlOiB0aGlzIH1cbiAgICB0aGlzLmVtaXQoYGRyYWc6JHt0eXBlfWAsIGRldGFpbClcblxuICAgIGlmICh0aGlzLmRvbUV2ZW50cykge1xuICAgICAgZGlzcGF0Y2hEb21FdmVudCh0aGlzLmVsZW1lbnQsIGBkcmFnZWU6JHt0eXBlfWAsIGRldGFpbClcbiAgICB9XG4gIH1cblxuICBkcmFnRW5kQWN0aW9uKCkge1xuICAgIHRoaXMucGluUG9zaXRpb24odGhpcy5wb3NpdGlvbilcbiAgfVxuXG4gIGdldFJlY3RhbmdsZSgpIHtcbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZSh0aGlzLnBvc2l0aW9uLCB0aGlzLmdldFNpemUoKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgaWYgKHRoaXMuYm91bmRpbmcucmVmcmVzaCkge1xuICAgICAgdGhpcy5ib3VuZGluZy5yZWZyZXNoKClcbiAgICB9XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuaGFuZGxlci5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQpXG4gICAgdGhpcy5oYW5kbGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydClcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgdGhpcy5fbmF0aXZlRHJhZ1N0YXJ0KVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIHRoaXMuX25hdGl2ZURyYWdPdmVyKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzLl9uYXRpdmVEcm9wKVxuICAgIHNjb3Blcy5mb3JFYWNoKChzY29wZSkgPT4gc2NvcGUucmVsZWFzZURyYWdnYWJsZSh0aGlzKSlcblxuICAgIGNvbnN0IGluZGV4ID0gZHJhZ2dhYmxlcy5pbmRleE9mKHRoaXMpXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIGRyYWdnYWJsZXMuc3BsaWNlKGluZGV4LCAxKVxuICAgIH1cbiAgfVxuXG4gIGdldCBjb250YWluZXIoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9jb250YWluZXIgPSB0aGlzLl9jb250YWluZXIgfHwgdGhpcy5vcHRpb25zLmNvbnRhaW5lciB8fCB0aGlzLm9wdGlvbnMucGFyZW50IHx8IHRoaXMuZWxlbWVudC5vZmZzZXRQYXJlbnQpXG4gIH1cblxuICBnZXQgaGFuZGxlcigpIHtcbiAgICBpZiAoIXRoaXMuX2hhbmRsZXIpIHtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmhhbmRsZXIgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZXIgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLm9wdGlvbnMuaGFuZGxlcikgfHwgdGhpcy5lbGVtZW50XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9oYW5kbGVyID0gdGhpcy5vcHRpb25zLmhhbmRsZXIgfHwgdGhpcy5lbGVtZW50XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2hhbmRsZXJcbiAgfVxuXG4gIGdldCBzdG9wUHJvcGFnYXRpb25PbkRyYWdTdGFydCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLnN0b3BQcm9wYWdhdGlvbk9uRHJhZ1N0YXJ0IHx8IGZhbHNlXG4gIH1cblxuICBnZXQgbmF0aXZlRHJhZ0FuZERyb3AoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5uYXRpdmVEcmFnQW5kRHJvcCB8fCBmYWxzZVxuICB9XG5cbiAgZ2V0IGRvbUV2ZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmRvbUV2ZW50cyAhPT0gZmFsc2VcbiAgfVxuXG4gIGdldCBlbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3BPblRvdWNoKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wT25Ub3VjaCB8fCBmYWxzZVxuICB9XG5cbiAgZ2V0IHNob3VsZFJlbW92ZVplcm9UcmFuc2xhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5zaG91bGRSZW1vdmVaZXJvVHJhbnNsYXRlIHx8IGZhbHNlXG4gIH1cblxuICBnZXQgdG91Y2hEcmFnZ2luZ1RocmVzaG9sZCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLnRvdWNoRHJhZ2dpbmdUaHJlc2hvbGQgfHwgMFxuICB9XG5cbiAgZ2V0IGRyYWdTdGFydFRocmVzaG9sZCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmRyYWdTdGFydFRocmVzaG9sZCB8fCAwXG4gIH1cblxuICBnZXQgZHJhZ092ZXJUaHJvdHRsZUR1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZHJhZ092ZXJUaHJvdHRsZUR1cmF0aW9uIHx8IDE2XG4gIH1cblxuICBnZXQgaXNDb25zaWRlclRyYW5zZm9ybU9mZnNldCAoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5jb25zaWRlclRyYW5zZm9ybU9mZnNldCB8fCBmYWxzZVxuICB9XG5cbiAgZ2V0IHdpbmRvd1Njcm9sbFBvaW50KCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQod2luZG93LnNjcm9sbFgsIHdpbmRvdy5zY3JvbGxZKVxuICB9XG5cbiAgZ2V0IHNjcm9sbFJvb3RDb250YWluZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5zY3JvbGxSb290Q29udGFpbmVyIHx8IHRoaXMuY29udGFpbmVyXG4gIH1cblxuICBnZXQgc2Nyb2xsRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhY2hlZFNjcm9sbEVsZW1lbnRzXG4gICAgICA/IHRoaXMuX2NhY2hlZFNjcm9sbEVsZW1lbnRzXG4gICAgICA6ICh0aGlzLl9jYWNoZWRTY3JvbGxFbGVtZW50cyA9IGdldFBhcmVudHNDaGFpbih0aGlzLmVsZW1lbnQsIHRoaXMuc2Nyb2xsUm9vdENvbnRhaW5lcikpXG4gIH1cblxuICBnZXQgc2Nyb2xsRWxlbWVudHNPZmZzZXQoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludChcbiAgICAgIHRoaXMuc2Nyb2xsRWxlbWVudHMucmVkdWNlKChzdW0sIHApID0+IHN1bSArIHAuc2Nyb2xsTGVmdCwgMCksXG4gICAgICB0aGlzLnNjcm9sbEVsZW1lbnRzLnJlZHVjZSgoc3VtLCBwKSA9PiBzdW0gKyBwLnNjcm9sbFRvcCwgMClcbiAgICApXG4gIH1cblxuICBnZXQgcGFyZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5fY2FjaGVkUGFyZW50c1xuICAgICAgPyB0aGlzLl9jYWNoZWRQYXJlbnRzXG4gICAgICA6ICh0aGlzLl9jYWNoZWRQYXJlbnRzID0gZ2V0UGFyZW50c0NoYWluKHRoaXMuZWxlbWVudCwgdGhpcy5jb250YWluZXIpKVxuICB9XG5cbiAgZ2V0IHBhcmVudHNTY3JvbGxPZmZzZXQoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludChcbiAgICAgIHRoaXMucGFyZW50cy5yZWR1Y2UoKHN1bSwgcCkgPT4gc3VtICsgcC5zY3JvbGxMZWZ0LCAwKSxcbiAgICAgIHRoaXMucGFyZW50cy5yZWR1Y2UoKHN1bSwgcCkgPT4gc3VtICsgcC5zY3JvbGxUb3AsIDApXG4gICAgKVxuICB9XG5cbiAgZ2V0IGVuYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlXG4gIH1cblxuICBzZXQgZW5hYmxlKGVuYWJsZSkge1xuICAgIGlmIChlbmFibGUpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZWUtZGlzYWJsZScpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkcmFnZWUtZGlzYWJsZScpXG4gICAgfVxuXG4gICAgdGhpcy5fZW5hYmxlID0gZW5hYmxlXG4gIH1cbn1cblxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCwgaW1tZWRpYXRlKSB7XG4gIGxldCB0aW1lb3V0XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGV4ZWN1dGVkRnVuY3Rpb24oKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXNcbiAgICBjb25zdCBhcmdzID0gYXJndW1lbnRzXG5cbiAgICBjb25zdCBsYXRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgdGltZW91dCA9IG51bGxcbiAgICAgIGlmICghaW1tZWRpYXRlKSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpXG4gICAgfVxuXG4gICAgY29uc3QgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dFxuXG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpXG5cbiAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdClcblxuICAgIGlmIChjYWxsTm93KSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpXG4gIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBnZXREaXN0YW5jZShwMSwgcDIpIHtcbiAgY29uc3QgZHggPSBwMS54IC0gcDIueCwgZHkgPSBwMS55IC0gcDIueVxuICByZXR1cm4gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0WERpZmZlcmVuY2UocDEsIHAyKSB7XG4gIHJldHVybiBNYXRoLmFicyhwMS54IC0gcDIueClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFlEaWZmZXJlbmNlKHAxLCBwMikge1xuICByZXR1cm4gTWF0aC5hYnMocDEueSAtIHAyLnkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5KG9wdGlvbnMpIHtcbiAgcmV0dXJuIChwMSwgcDIpID0+IHtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KFxuICAgICAgTWF0aC5wb3cob3B0aW9ucy54ICogTWF0aC5hYnMocDEueCAtIHAyLngpLCAyKSArXG4gICAgICBNYXRoLnBvdyhvcHRpb25zLnkgKiBNYXRoLmFicyhwMS55IC0gcDIueSksIDIpXG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmRleE9mTmVhcmVzdFBvaW50KGFyciwgdmFsLCByYWRpdXMsIGdldERpc3RhbmNlRnVuYz1nZXREaXN0YW5jZSkge1xuICBsZXQgc2l6ZSwgaW5kZXggPSAwLCBpLCB0ZW1wXG4gIGlmIChhcnIubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIC0xXG4gIH1cbiAgc2l6ZSA9IGdldERpc3RhbmNlRnVuYyhhcnJbMF0sIHZhbClcbiAgZm9yIChpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgIHRlbXAgPSBnZXREaXN0YW5jZUZ1bmMoYXJyW2ldLCB2YWwpXG4gICAgaWYgKHRlbXAgPCBzaXplKSB7XG4gICAgICBzaXplID0gdGVtcFxuICAgICAgaW5kZXggPSBpXG4gICAgfVxuICB9XG4gIGlmIChyYWRpdXMgPj0gMCAmJiBzaXplID4gcmFkaXVzKSB7XG4gICAgcmV0dXJuIC0xXG4gIH1cbiAgcmV0dXJuIGluZGV4XG59XG4iLCJpbXBvcnQgZGVib3VuY2UgZnJvbSAnLi91dGlscy9kZWJvdW5jZSdcbmltcG9ydCByZW1vdmVJdGVtIGZyb20gJy4vdXRpbHMvcmVtb3ZlLWFycmF5LWl0ZW0nXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnRFbWl0dGVyJ1xuaW1wb3J0IGRpc3BhdGNoRG9tRXZlbnQgZnJvbSAnLi91dGlscy9kaXNwYXRjaC1kb20tZXZlbnQnXG5pbXBvcnQge1xuICBnZXREaXN0YW5jZSxcbiAgaW5kZXhPZk5lYXJlc3RQb2ludFxufSBmcm9tICcuL2dlb21ldHJ5L2Rpc3RhbmNlcydcblxuaW1wb3J0IERyYWdnYWJsZSBmcm9tICcuL2RyYWdnYWJsZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdCBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKGRyYWdnYWJsZXMsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcihvcHRpb25zKVxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgdGltZUVuZDogMjAwLFxuICAgICAgdGltZUV4Y2FuZ2U6IDQwMCxcbiAgICAgIHJhZGl1czogMzBcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGhpcy5jb250YWluZXIgPSBvcHRpb25zLmNvbnRhaW5lclxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZXNcbiAgICB0aGlzLmNoYW5nZWREdXJpbmdJdGVyYXRpb24gPSBmYWxzZVxuICAgIHRoaXMuY29udHJvbGxlcnMgPSBuZXcgTWFwKClcblxuICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoZGVib3VuY2UodGhpcy5vblJlc2l6ZS5iaW5kKHRoaXMpLCAxMDApKVxuXG4gICAgaWYgKHRoaXMuY29udGFpbmVyKSB7XG4gICAgICB0aGlzLnJlc2l6ZU9ic2VydmVyLm9ic2VydmUodGhpcy5jb250YWluZXIpXG4gICAgfVxuXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIG9uUmVzaXplKCkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMucmVvcmRlck9uQ2hhbmdlKSB0aGlzLnJlc2V0KClcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBpZighZHJhZ2dhYmxlLmlzRHJhZ2dpbmcpIHtcbiAgICAgICAgZHJhZ2dhYmxlLnN0YXJ0UG9zaXRpb25pbmcoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuX2VuYWJsZSA9IHRydWVcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB0aGlzLmluaXREcmFnZ2FibGUoZHJhZ2dhYmxlKSlcbiAgfVxuXG4gIGluaXREcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgZHJhZ2dhYmxlLmVuYWJsZSA9IHRoaXMuX2VuYWJsZVxuICAgIHRoaXMubGlzdGVuVG8oZHJhZ2dhYmxlLCAnZHJhZzptb3ZlJywgKCkgPT4gdGhpcy5vbk1vdmUoZHJhZ2dhYmxlKSlcbiAgICBkcmFnZ2FibGUuZHJhZ0VuZEFjdGlvbiA9ICgpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5waW5Qb3NpdGlvbihkcmFnZ2FibGUucGlubmVkUG9zaXRpb24sIHRoaXMub3B0aW9ucy50aW1lRW5kKVxuICAgICAgdGhpcy5vbkVuZChkcmFnZ2FibGUpXG4gICAgfVxuICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZShkcmFnZ2FibGUuZWxlbWVudClcbiAgfVxuXG4gIGxpc3RlblRvKGRyYWdnYWJsZSwgZXZlbnROYW1lLCBoYW5kbGVyKSB7XG4gICAgZHJhZ2dhYmxlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBoYW5kbGVyLCB7IHNpZ25hbDogdGhpcy5zaWduYWxGb3IoZHJhZ2dhYmxlKSB9KVxuICB9XG5cbiAgc2lnbmFsRm9yKGRyYWdnYWJsZSkge1xuICAgIGlmICghdGhpcy5jb250cm9sbGVycy5oYXMoZHJhZ2dhYmxlKSkge1xuICAgICAgdGhpcy5jb250cm9sbGVycy5zZXQoZHJhZ2dhYmxlLCBuZXcgQWJvcnRDb250cm9sbGVyKCkpXG4gICAgfVxuICAgIHJldHVybiB0aGlzLmNvbnRyb2xsZXJzLmdldChkcmFnZ2FibGUpLnNpZ25hbFxuICB9XG5cbiAgcmVsZWFzZURyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICB0aGlzLnJlc2l6ZU9ic2VydmVyLnVub2JzZXJ2ZShkcmFnZ2FibGUuZWxlbWVudClcbiAgICB0aGlzLmNvbnRyb2xsZXJzLmdldChkcmFnZ2FibGUpPy5hYm9ydCgpXG4gICAgdGhpcy5jb250cm9sbGVycy5kZWxldGUoZHJhZ2dhYmxlKVxuICAgIHJlbW92ZUl0ZW0odGhpcy5kcmFnZ2FibGVzLCBkcmFnZ2FibGUpXG4gIH1cblxuICBvbk1vdmUoZHJhZ2dhYmxlKSB7XG4gICAgaWYgKHRoaXMuc3dhcHBpbmdEaXNhYmxlZCkgcmV0dXJuXG5cbiAgICBjb25zdCBzb3J0ZWREcmFnZ2FibGVzID0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcbiAgICBjb25zdCBwaW5uZWRQb3NpdGlvbnMgPSBzb3J0ZWREcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24pXG5cbiAgICBjb25zdCBjdXJyZW50SW5kZXggPSBzb3J0ZWREcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKVxuICAgIGNvbnN0IHRhcmdldEluZGV4ID0gaW5kZXhPZk5lYXJlc3RQb2ludChwaW5uZWRQb3NpdGlvbnMsIGRyYWdnYWJsZS5wb3NpdGlvbiwgdGhpcy5vcHRpb25zLnJhZGl1cywgdGhpcy5kaXN0YW5jZUZ1bmMpXG5cbiAgICBpZiAodGFyZ2V0SW5kZXggIT09IC0xICYmIGN1cnJlbnRJbmRleCAhPT0gdGFyZ2V0SW5kZXgpIHtcbiAgICAgIGlmICh0YXJnZXRJbmRleCA8IGN1cnJlbnRJbmRleCkge1xuICAgICAgICBmb3IgKGxldCBpPXRhcmdldEluZGV4OyBpPGN1cnJlbnRJbmRleDsgaSsrKSB7XG4gICAgICAgICAgc29ydGVkRHJhZ2dhYmxlc1tpXS5waW5Qb3NpdGlvbihwaW5uZWRQb3NpdGlvbnNbaSsxXSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGxldCBpPWN1cnJlbnRJbmRleDsgaTx0YXJnZXRJbmRleDsgaSsrKSB7XG4gICAgICAgICAgc29ydGVkRHJhZ2dhYmxlc1tpKzFdLnBpblBvc2l0aW9uKHBpbm5lZFBvc2l0aW9uc1tpXSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChkcmFnZ2FibGUubmF0aXZlRHJhZ0FuZERyb3ApIHtcbiAgICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKHBpbm5lZFBvc2l0aW9uc1t0YXJnZXRJbmRleF0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24gPSBwaW5uZWRQb3NpdGlvbnNbdGFyZ2V0SW5kZXhdXG4gICAgICB9XG5cbiAgICAgIHRoaXMuY2hhbmdlZER1cmluZ0l0ZXJhdGlvbiA9IHRydWVcbiAgICB9XG4gIH1cblxuICBvbkVuZChkcmFnZ2FibGUpIHtcbiAgICBpZiAodGhpcy5jaGFuZ2VkRHVyaW5nSXRlcmF0aW9uKSB7XG4gICAgICB0aGlzLmVtaXRMaXN0RXZlbnQoJ2NoYW5nZScsIGRyYWdnYWJsZSlcbiAgICAgIHRoaXMuY2hhbmdlZER1cmluZ0l0ZXJhdGlvbiA9IGZhbHNlXG5cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucmVvcmRlck9uQ2hhbmdlICYmIHRoaXMub3B0aW9ucy5jb250YWluZXIpIHtcbiAgICAgICAgdGhpcy5yZW9yZGVyRWxlbWVudHMoZHJhZ2dhYmxlKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlb3JkZXJFbGVtZW50cyhtb3ZlZERyYWdnYWJsZSkge1xuICAgIGNvbnN0IHNvcnRlZERyYWdnYWJsZXMgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuICAgIGNvbnN0IGluZGV4ID0gc29ydGVkRHJhZ2dhYmxlcy5pbmRleE9mKG1vdmVkRHJhZ2dhYmxlKVxuICAgIGNvbnN0IG5leHQgPSBzb3J0ZWREcmFnZ2FibGVzW2luZGV4ICsgMV1cblxuICAgIHRoaXMucmVzZXQoKVxuXG4gICAgaWYgKG5leHQpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmluc2VydEJlZm9yZShtb3ZlZERyYWdnYWJsZS5lbGVtZW50LCBuZXh0LmVsZW1lbnQpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKG1vdmVkRHJhZ2dhYmxlLmVsZW1lbnQpXG4gICAgfVxuXG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGQpID0+IGQuc3RhcnRQb3NpdGlvbmluZygpKVxuICAgIHRoaXMuZW1pdExpc3RFdmVudCgncmVvcmRlcmVkJywgbW92ZWREcmFnZ2FibGUpXG4gIH1cblxuICBlbWl0TGlzdEV2ZW50KHR5cGUsIGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IGRldGFpbCA9IHsgbGlzdDogdGhpcywgZHJhZ2dhYmxlIH1cbiAgICB0aGlzLmVtaXQoYGxpc3Q6JHt0eXBlfWAsIGRldGFpbClcblxuICAgIGlmICh0aGlzLmRvbUV2ZW50cykge1xuICAgICAgZGlzcGF0Y2hEb21FdmVudChkcmFnZ2FibGUuZWxlbWVudCwgYGRyYWdlZTpsaXN0LSR7dHlwZX1gLCBkZXRhaWwpXG4gICAgfVxuICB9XG5cbiAgZ2V0Q3VycmVudFBpbm5lZFBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5kcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24uY2xvbmUoKSlcbiAgfVxuXG4gIGdldFNvcnRlZERyYWdnYWJsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJhZ2dhYmxlcy5zb3J0KHRoaXMuc29ydGluZy5iaW5kKHRoaXMpKVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnJlc2V0UG9zaXRpb25Ub0luaXRpYWwoKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnJlZnJlc2goKSlcbiAgfVxuXG4gIGFkZChkcmFnZ2FibGVzKSB7XG4gICAgaWYgKCEoZHJhZ2dhYmxlcyBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgZHJhZ2dhYmxlcyA9IFtkcmFnZ2FibGVzXVxuICAgIH1cbiAgICBkcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gdGhpcy5pbml0RHJhZ2dhYmxlKGRyYWdnYWJsZSkpXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gdGhpcy5kcmFnZ2FibGVzLmNvbmNhdChkcmFnZ2FibGVzKVxuICB9XG5cbiAgcmVtb3ZlKGRyYWdnYWJsZXMpIHtcbiAgICBjb25zdCBpbml0aWFsUG9zaXRpb25zID0gdGhpcy5kcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uKVxuICAgIGNvbnN0IGxpc3QgPSBbXVxuICAgIGNvbnN0IHNvcnRlZERyYWdnYWJsZXMgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuXG4gICAgaWYgKCEoZHJhZ2dhYmxlcyBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgZHJhZ2dhYmxlcyA9IFtkcmFnZ2FibGVzXVxuICAgIH1cblxuICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB0aGlzLnJlbGVhc2VEcmFnZ2FibGUoZHJhZ2dhYmxlKSlcblxuICAgIGxldCBqID0gMFxuICAgIHNvcnRlZERyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBpZiAodGhpcy5kcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTEpIHtcbiAgICAgICAgaWYgKGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbiAhPT0gaW5pdGlhbFBvc2l0aW9uc1tqXSkge1xuICAgICAgICAgIGRyYWdnYWJsZS5waW5Qb3NpdGlvbihpbml0aWFsUG9zaXRpb25zW2pdLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICAgIH1cbiAgICAgICAgZHJhZ2dhYmxlLmluaXRpYWxQb3NpdGlvbiA9IGluaXRpYWxQb3NpdGlvbnNbal1cbiAgICAgICAgaisrXG4gICAgICAgIGxpc3QucHVzaChkcmFnZ2FibGUpXG4gICAgICB9XG4gICAgfSlcbiAgICB0aGlzLmRyYWdnYWJsZXMgPSBsaXN0XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLnJlbW92ZSh0aGlzLmRyYWdnYWJsZXMuc2xpY2UoKSlcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLmRlc3Ryb3koKSlcbiAgICBpZiAodGhpcy5jb250YWluZXIpIHtcbiAgICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIudW5vYnNlcnZlKHRoaXMuY29udGFpbmVyKVxuICAgIH1cbiAgfVxuXG4gIHNvcnRpbmcoZHJhZ2dhYmxlQSwgZHJhZ2dhYmxlQikge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuc29ydGluZykge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5zb3J0aW5nKGRyYWdnYWJsZUEsIGRyYWdnYWJsZUIpXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChkcmFnZ2FibGVBLnBpbm5lZFBvc2l0aW9uLnkgPCBkcmFnZ2FibGVCLnBpbm5lZFBvc2l0aW9uLnkpIHJldHVybiAtMVxuICAgICAgaWYgKGRyYWdnYWJsZUEucGlubmVkUG9zaXRpb24ueSA+IGRyYWdnYWJsZUIucGlubmVkUG9zaXRpb24ueSkgcmV0dXJuIDFcbiAgICAgIGlmIChkcmFnZ2FibGVBLnBpbm5lZFBvc2l0aW9uLnggPCBkcmFnZ2FibGVCLnBpbm5lZFBvc2l0aW9uLngpIHJldHVybiAtMVxuICAgICAgaWYgKGRyYWdnYWJsZUEucGlubmVkUG9zaXRpb24ueCA+IGRyYWdnYWJsZUIucGlubmVkUG9zaXRpb24ueCkgcmV0dXJuIDFcbiAgICAgIHJldHVybiAwXG4gICAgfVxuICB9XG5cbiAgZ2V0IGRpc3RhbmNlRnVuYygpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmdldERpc3RhbmNlIHx8IGdldERpc3RhbmNlXG4gIH1cblxuICBnZXQgZG9tRXZlbnRzKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZG9tRXZlbnRzICE9PSBmYWxzZVxuICB9XG5cbiAgZ2V0IHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDdXJyZW50UGlubmVkUG9zaXRpb25zKClcbiAgfVxuXG4gIHNldCBwb3NpdGlvbnMocG9zaXRpb25zKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9ICd3cm9uZyBhcnJheSBsZW5ndGgnXG4gICAgaWYgKHBvc2l0aW9ucy5sZW5ndGggPT09IHRoaXMuZHJhZ2dhYmxlcy5sZW5ndGgpIHtcbiAgICAgIHBvc2l0aW9ucy5mb3JFYWNoKChwb2ludCwgaSkgPT4ge1xuICAgICAgICB0aGlzLmRyYWdnYWJsZXNbaV0ucGluUG9zaXRpb24ocG9pbnQpXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBtZXNzYWdlXG4gICAgfVxuICB9XG5cbiAgZ2V0IGVuYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlXG4gIH1cblxuICBzZXQgZW5hYmxlKGVuYWJsZSkge1xuICAgIHRoaXMuX2VuYWJsZSA9IGVuYWJsZVxuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5lbmFibGUgPSBlbmFibGVcbiAgICB9KVxuICB9XG5cbiAgZ2V0IHN3YXBwaW5nRGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N3YXBwaW5nRGlzYWJsZWRcbiAgfVxuXG4gIHNldCBzd2FwcGluZ0Rpc2FibGVkKGRpc2FibGVkKSB7XG4gICAgdGhpcy5fc3dhcHBpbmdEaXNhYmxlZCA9IGRpc2FibGVkXG4gIH1cbn1cbiIsImltcG9ydCBMaXN0IGZyb20gJy4vbGlzdCdcbmltcG9ydCB7IGluZGV4T2ZOZWFyZXN0UG9pbnQsIGdldFhEaWZmZXJlbmNlLCBnZXRZRGlmZmVyZW5jZSB9IGZyb20gJy4vZ2VvbWV0cnkvZGlzdGFuY2VzJ1xuXG5pbXBvcnQgRHJhZ2dhYmxlIGZyb20gJy4vZHJhZ2dhYmxlJ1xuXG5jb25zdCBhcnJheU1vdmUgPSAoYXJyYXksIGZyb20sIHRvKSA9PiB7XG4gIGFycmF5LnNwbGljZSh0byA8IDAgPyBhcnJheS5sZW5ndGggKyB0byA6IHRvLCAwLCBhcnJheS5zcGxpY2UoZnJvbSwgMSlbMF0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1YmJsaW5nTGlzdCBleHRlbmRzIExpc3Qge1xuICBhdXRvRGV0ZWN0R2FwKCkge1xuICAgIGlmICh0aGlzLl9nYXAgIT09IHVuZGVmaW5lZCB8fCB0aGlzLmV4cGxpY2l0R2FwICE9PSB1bmRlZmluZWQgfHwgdGhpcy5kcmFnZ2FibGVzLmxlbmd0aCA8IDIpIHJldHVyblxuXG4gICAgY29uc3QgYXhpcyA9IHRoaXMuYXhpc1xuICAgIGNvbnN0IHNvcnRlZCA9IHRoaXMuZ2V0U29ydGVkRHJhZ2dhYmxlcygpXG4gICAgLy8gRGV0YWNoZWQgZWxlbWVudHMgcmVwb3J0IHNpemUgMFxuICAgIGNvbnN0IGluZGV4ID0gc29ydGVkLmZpbmRJbmRleCgoZCwgaSkgPT4gaSA8IHNvcnRlZC5sZW5ndGggLSAxICYmIGQuZWxlbWVudC5pc0Nvbm5lY3RlZClcbiAgICBpZiAoaW5kZXggPT09IC0xKSByZXR1cm5cblxuICAgIGNvbnN0IFtjdXJyZW50LCBuZXh0XSA9IFtzb3J0ZWRbaW5kZXhdLCBzb3J0ZWRbaW5kZXggKyAxXV1cbiAgICB0aGlzLl9nYXAgPSBuZXh0LnBpbm5lZFBvc2l0aW9uW2F4aXNdIC0gY3VycmVudC5waW5uZWRQb3NpdGlvbltheGlzXSAtIGN1cnJlbnQuZ2V0U2l6ZSgpW2F4aXNdXG4gIH1cblxuICBhdXRvRGV0ZWN0U3RhcnRQb3NpdGlvbigpIHtcbiAgICBpZiAodGhpcy5kcmFnZ2FibGVzLmxlbmd0aCA+PSAxICYmICF0aGlzLnN0YXJ0UG9zaXRpb24pIHtcbiAgICAgIHRoaXMuc3RhcnRQb3NpdGlvbiA9IHRoaXMuZHJhZ2dhYmxlc1swXS5waW5uZWRQb3NpdGlvblxuICAgIH1cbiAgfVxuXG4gIGluaXREcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgc3VwZXIuaW5pdERyYWdnYWJsZShkcmFnZ2FibGUpXG4gICAgdGhpcy5saXN0ZW5UbyhkcmFnZ2FibGUsICdkcmFnOnN0YXJ0JywgKCkgPT4gdGhpcy5vbkRyYWdTdGFydChkcmFnZ2FibGUpKVxuICB9XG5cbiAgb25EcmFnU3RhcnQoZHJhZ2dhYmxlKSB7XG4gICAgdGhpcy5hdXRvRGV0ZWN0R2FwKClcbiAgICB0aGlzLmF1dG9EZXRlY3RTdGFydFBvc2l0aW9uKClcbiAgICB0aGlzLmNhY2hlZFNvcnRlZERyYWdnYWJsZXMgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuICAgIHRoaXMuaW5kZXhPZkFjdGl2ZURyYWdnYWJsZSA9IHRoaXMuY2FjaGVkU29ydGVkRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSlcbiAgfVxuXG4gIG9uTW92ZShkcmFnZ2FibGUpIHtcbiAgICBpZiAodGhpcy5zd2FwcGluZ0Rpc2FibGVkKSByZXR1cm5cblxuICAgIGNvbnN0IHByZXZEcmFnZ2FibGUgPSB0aGlzLmNhY2hlZFNvcnRlZERyYWdnYWJsZXNbdGhpcy5pbmRleE9mQWN0aXZlRHJhZ2dhYmxlIC0gMV1cbiAgICBjb25zdCBuZXh0RHJhZ2dhYmxlID0gdGhpcy5jYWNoZWRTb3J0ZWREcmFnZ2FibGVzW3RoaXMuaW5kZXhPZkFjdGl2ZURyYWdnYWJsZSArIDFdXG4gICAgY29uc3QgY3VycmVudFBvc2l0aW9uID0gZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uXG5cbiAgICBsZXQgY3VycmVudE9yZGVyXG4gICAgbGV0IHRhcmdldEluZGV4XG5cbiAgICBpZih0aGlzLmlzTW92aW5nQmFja3dhcmQoZHJhZ2dhYmxlKSAmJiBwcmV2RHJhZ2dhYmxlKSB7XG4gICAgICBjdXJyZW50T3JkZXIgPSBbcHJldkRyYWdnYWJsZSwgZHJhZ2dhYmxlXS5tYXAoKGQpID0+IGQucGlubmVkUG9zaXRpb24pXG4gICAgICB0YXJnZXRJbmRleCA9IGluZGV4T2ZOZWFyZXN0UG9pbnQoY3VycmVudE9yZGVyLCBkcmFnZ2FibGUucG9zaXRpb24sIDEwMDAwLCB0aGlzLmRpc3RhbmNlRnVuYylcblxuICAgICAgaWYgKHRhcmdldEluZGV4ID09PSAwKSB7XG4gICAgICAgIGlmKGRyYWdnYWJsZS5zaG91bGRVc2VOYXRpdmVEcmFnQW5kRHJvcCgpKSB7XG4gICAgICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKHByZXZEcmFnZ2FibGUucGlubmVkUG9zaXRpb24pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uID0gcHJldkRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbi5jbG9uZSgpXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJldk5ld1Bvc2l0aW9uID0gdGhpcy5uZXh0UG9zaXRpb24oZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uLCBkcmFnZ2FibGUpXG4gICAgICAgIHByZXZOZXdQb3NpdGlvblt0aGlzLmNyb3NzQXhpc10gPSBjdXJyZW50UG9zaXRpb25bdGhpcy5jcm9zc0F4aXNdXG4gICAgICAgIHByZXZEcmFnZ2FibGUucGluUG9zaXRpb24ocHJldk5ld1Bvc2l0aW9uLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICAgIGFycmF5TW92ZSh0aGlzLmNhY2hlZFNvcnRlZERyYWdnYWJsZXMsIHRoaXMuaW5kZXhPZkFjdGl2ZURyYWdnYWJsZS0tLCB0aGlzLmluZGV4T2ZBY3RpdmVEcmFnZ2FibGUpXG4gICAgICAgIHRoaXMub25Nb3ZlKGRyYWdnYWJsZSlcbiAgICAgICAgdGhpcy5jaGFuZ2VkRHVyaW5nSXRlcmF0aW9uID0gdHJ1ZVxuICAgICAgfVxuICAgIH0gZWxzZSBpZih0aGlzLmlzTW92aW5nRm9yd2FyZChkcmFnZ2FibGUpICYmIG5leHREcmFnZ2FibGUpIHtcbiAgICAgIGN1cnJlbnRPcmRlciA9IFtkcmFnZ2FibGUsIG5leHREcmFnZ2FibGVdLm1hcCgoZCkgPT4gZC5waW5uZWRQb3NpdGlvbilcbiAgICAgIHRhcmdldEluZGV4ID0gaW5kZXhPZk5lYXJlc3RQb2ludChjdXJyZW50T3JkZXIsIGRyYWdnYWJsZS5wb3NpdGlvbiwgMTAwMDAsIHRoaXMuZGlzdGFuY2VGdW5jKVxuXG4gICAgICBpZih0YXJnZXRJbmRleCA9PT0gMSkge1xuICAgICAgICBuZXh0RHJhZ2dhYmxlLnBpblBvc2l0aW9uKGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbiwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICBjb25zdCBkcmFnZ2FibGVOZXdQb3NpdGlvbiA9IHRoaXMubmV4dFBvc2l0aW9uKG5leHREcmFnZ2FibGUucGlubmVkUG9zaXRpb24sIG5leHREcmFnZ2FibGUpXG4gICAgICAgIGlmKGRyYWdnYWJsZS5zaG91bGRVc2VOYXRpdmVEcmFnQW5kRHJvcCgpKSB7XG4gICAgICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKGRyYWdnYWJsZU5ld1Bvc2l0aW9uKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbiA9IGRyYWdnYWJsZU5ld1Bvc2l0aW9uXG4gICAgICAgIH1cbiAgICAgICAgYXJyYXlNb3ZlKHRoaXMuY2FjaGVkU29ydGVkRHJhZ2dhYmxlcywgdGhpcy5pbmRleE9mQWN0aXZlRHJhZ2dhYmxlKyssIHRoaXMuaW5kZXhPZkFjdGl2ZURyYWdnYWJsZSlcbiAgICAgICAgdGhpcy5vbk1vdmUoZHJhZ2dhYmxlKVxuICAgICAgICB0aGlzLmNoYW5nZWREdXJpbmdJdGVyYXRpb24gPSB0cnVlXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYnViYmxpbmcoc29ydGVkRHJhZ2dhYmxlcywgY3VycmVudERyYWdnYWJsZSkge1xuICAgIGxldCBjdXJyZW50UG9zaXRpb24gPSB0aGlzLnN0YXJ0UG9zaXRpb24uY2xvbmUoKVxuICAgIHNvcnRlZERyYWdnYWJsZXMgfHw9IHRoaXMuZ2V0U29ydGVkRHJhZ2dhYmxlcygpXG5cbiAgICBzb3J0ZWREcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgaWYgKCFkcmFnZ2FibGUucGlubmVkUG9zaXRpb24uY29tcGFyZShjdXJyZW50UG9zaXRpb24pKSB7XG4gICAgICAgIGlmIChkcmFnZ2FibGUgPT09IGN1cnJlbnREcmFnZ2FibGUgJiYgIWN1cnJlbnREcmFnZ2FibGUuc2hvdWxkVXNlTmF0aXZlRHJhZ0FuZERyb3AoKSkge1xuICAgICAgICAgIGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbiA9IGN1cnJlbnRQb3NpdGlvbi5jbG9uZSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKGN1cnJlbnRQb3NpdGlvbiwgKGRyYWdnYWJsZSA9PT0gY3VycmVudERyYWdnYWJsZSkgPyAwIDogdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGN1cnJlbnRQb3NpdGlvbiA9IHRoaXMubmV4dFBvc2l0aW9uKGN1cnJlbnRQb3NpdGlvbiwgZHJhZ2dhYmxlKVxuICAgIH0pXG4gIH1cblxuICByZW1vdmUoZHJhZ2dhYmxlcykge1xuICAgIGlmICghKGRyYWdnYWJsZXMgaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICAgIGRyYWdnYWJsZXMgPSBbZHJhZ2dhYmxlc11cbiAgICB9XG5cbiAgICAvLyBEZXRlY3QgbGF5b3V0IGJlZm9yZSByZW1vdmFsLCBvdGhlcndpc2UgdGhlIGdhcCBpcyBtZWFzdXJlZCBhY3Jvc3MgdGhlIGhvbGVcbiAgICB0aGlzLmF1dG9EZXRlY3RHYXAoKVxuICAgIHRoaXMuYXV0b0RldGVjdFN0YXJ0UG9zaXRpb24oKVxuXG4gICAgZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHRoaXMucmVsZWFzZURyYWdnYWJsZShkcmFnZ2FibGUpKVxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IHRoaXMuZHJhZ2dhYmxlcy5maWx0ZXIoKGQpID0+ICFkcmFnZ2FibGVzLmluY2x1ZGVzKGQpKVxuXG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGQpID0+IGQuc3RhcnRQb3NpdGlvbmluZygpKVxuXG4gICAgaWYodGhpcy5kcmFnZ2FibGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuYnViYmxpbmcoKVxuICAgIH1cbiAgfVxuXG4gIG5leHRQb3NpdGlvbihwb3NpdGlvbiwgZHJhZ2dhYmxlKSB7XG4gICAgY29uc3QgbmV4dCA9IHBvc2l0aW9uLmNsb25lKClcbiAgICBuZXh0W3RoaXMuYXhpc10gPSBwb3NpdGlvblt0aGlzLmF4aXNdICsgZHJhZ2dhYmxlLmdldFNpemUoKVt0aGlzLmF4aXNdICsgdGhpcy5nYXBcbiAgICByZXR1cm4gbmV4dFxuICB9XG5cbiAgaXNNb3ZpbmdCYWNrd2FyZChkcmFnZ2FibGUpIHtcbiAgICByZXR1cm4gdGhpcy5heGlzID09PSAneCcgPyBkcmFnZ2FibGUubGVmdERpcmVjdGlvbiA6IGRyYWdnYWJsZS51cERpcmVjdGlvblxuICB9XG5cbiAgaXNNb3ZpbmdGb3J3YXJkKGRyYWdnYWJsZSkge1xuICAgIHJldHVybiB0aGlzLmF4aXMgPT09ICd4JyA/IGRyYWdnYWJsZS5yaWdodERpcmVjdGlvbiA6IGRyYWdnYWJsZS5kb3duRGlyZWN0aW9uXG4gIH1cblxuICBnZXQgYXhpcygpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmF4aXMgPT09ICd4JyA/ICd4JyA6ICd5J1xuICB9XG5cbiAgZ2V0IGNyb3NzQXhpcygpIHtcbiAgICByZXR1cm4gdGhpcy5heGlzID09PSAneCcgPyAneScgOiAneCdcbiAgfVxuXG4gIGdldCBkaXN0YW5jZUZ1bmMoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5nZXREaXN0YW5jZSB8fCAodGhpcy5heGlzID09PSAneCcgPyBnZXRYRGlmZmVyZW5jZSA6IGdldFlEaWZmZXJlbmNlKVxuICB9XG5cbiAgZ2V0IGV4cGxpY2l0R2FwKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZ2FwID8/IHRoaXMub3B0aW9ucy52ZXJ0aWNhbEdhcFxuICB9XG5cbiAgZ2V0IGdhcCgpIHtcbiAgICBpZiAodGhpcy5leHBsaWNpdEdhcCAhPT0gdW5kZWZpbmVkKSByZXR1cm4gdGhpcy5leHBsaWNpdEdhcFxuXG4gICAgdGhpcy5hdXRvRGV0ZWN0R2FwKClcbiAgICByZXR1cm4gdGhpcy5fZ2FwIHx8IDBcbiAgfVxuXG4gIHNldCBnYXAoZ2FwVmFsdWUpIHtcbiAgICB0aGlzLm9wdGlvbnMuZ2FwID0gZ2FwVmFsdWVcbiAgfVxuXG4gIGdldCB2ZXJ0aWNhbEdhcCgpIHtcbiAgICByZXR1cm4gdGhpcy5nYXBcbiAgfVxuXG4gIHNldCB2ZXJ0aWNhbEdhcChnYXBWYWx1ZSkge1xuICAgIHRoaXMuZ2FwID0gZ2FwVmFsdWVcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmFuZ2Uoc3RhcnQsIHN0b3AsIHN0ZXApIHtcbiAgY29uc3QgcmVzdWx0ID0gW11cbiAgaWYgKHR5cGVvZiBzdG9wID09PSAndW5kZWZpbmVkJykge1xuICAgIHN0b3AgPSBzdGFydFxuICAgIHN0YXJ0ID0gMFxuICB9XG4gIGlmICh0eXBlb2Ygc3RlcCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBzdGVwID0gMVxuICB9XG4gIGlmICgoc3RlcCA+IDAgJiYgc3RhcnQgPj0gc3RvcCkgfHwgKHN0ZXAgPCAwICYmIHN0YXJ0IDw9IHN0b3ApKSB7XG4gICAgcmV0dXJuIFtdXG4gIH1cbiAgZm9yIChsZXQgaSA9IHN0YXJ0OyBzdGVwID4gMCA/IGkgPCBzdG9wIDogaSA+IHN0b3A7IGkgKz0gc3RlcCkge1xuICAgIHJlc3VsdC5wdXNoKGkpXG4gIH1cbiAgcmV0dXJuIHJlc3VsdFxufVxuIiwiaW1wb3J0IFBvaW50IGZyb20gJy4vcG9pbnQnXG5pbXBvcnQgeyBnZXREaXN0YW5jZSB9IGZyb20gJy4vZGlzdGFuY2VzJ1xuXG5leHBvcnQgZnVuY3Rpb24gY2xhbXAobWluLCBtYXgsIHZhbCkge1xuICByZXR1cm4gTWF0aC5tYXgobWluLCBNYXRoLm1pbihtYXgsIHZhbCkpXG59XG5cbi8vUmV0dXJuIGNyb3NzaW5nIHBvaW50IG9mIHR3byBsaW5lc1xuZXhwb3J0IGZ1bmN0aW9uIGRpcmVjdENyb3NzaW5nKEwxUDEsIEwxUDIsIEwyUDEsIEwyUDIpIHtcbiAgbGV0IHRlbXAsIGsxLCBrMiwgYjEsIGIyLCB4LCB5XG4gIGlmIChMMlAxLnggPT09IEwyUDIueCkge1xuICAgIHRlbXAgPSBMMlAxXG4gICAgTDJQMSA9IEwxUDFcbiAgICBMMVAxID0gdGVtcFxuICAgIHRlbXAgPSBMMlAyXG4gICAgTDJQMiA9IEwxUDJcbiAgICBMMVAyID0gdGVtcFxuICB9XG4gIGlmIChMMVAxLnggPT09IEwxUDIueCkge1xuICAgIGsyID0gKEwyUDIueSAtIEwyUDEueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgIGIyID0gKEwyUDIueCAqIEwyUDEueSAtIEwyUDEueCAqIEwyUDIueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgIHggPSBMMVAxLnhcbiAgICB5ID0geCAqIGsyICsgYjJcbiAgICByZXR1cm4gbmV3IFBvaW50KHgsIHkpXG4gIH0gZWxzZSB7XG4gICAgazEgPSAoTDFQMi55IC0gTDFQMS55KSAvIChMMVAyLnggLSBMMVAxLngpXG4gICAgYjEgPSAoTDFQMi54ICogTDFQMS55IC0gTDFQMS54ICogTDFQMi55KSAvIChMMVAyLnggLSBMMVAxLngpXG4gICAgazIgPSAoTDJQMi55IC0gTDJQMS55KSAvIChMMlAyLnggLSBMMlAxLngpXG4gICAgYjIgPSAoTDJQMi54ICogTDJQMS55IC0gTDJQMS54ICogTDJQMi55KSAvIChMMlAyLnggLSBMMlAxLngpXG4gICAgeCA9IChiMSAtIGIyKSAvIChrMiAtIGsxKVxuICAgIHkgPSB4ICogazEgKyBiMVxuICAgIHJldHVybiBuZXcgUG9pbnQoeCwgeSlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRUb1NlZ21lbnQoTFAxLCBMUDIsIFApIHtcbiAgbGV0IHgsIHlcbiAgeCA9IGNsYW1wKE1hdGgubWluKExQMS54LCBMUDIueCksIE1hdGgubWF4KExQMS54LCBMUDIueCksIFAueClcbiAgaWYgKHggIT09IFAueCkge1xuICAgIHkgPSAoeCA9PT0gTFAxLngpID8gTFAxLnkgOiBMUDIueVxuICAgIFAgPSBuZXcgUG9pbnQoeCwgeSlcbiAgfVxuXG4gIHkgPSBjbGFtcChNYXRoLm1pbihMUDEueSwgTFAyLnkpLCBNYXRoLm1heChMUDEueSwgTFAyLnkpLCBQLnkpXG4gIGlmICh5ICE9PSBQLnkpIHtcbiAgICB4ID0gKHkgPT09IExQMS55KSA/IExQMS54IDogTFAyLnhcbiAgICBQID0gbmV3IFBvaW50KHgsIHkpXG4gIH1cblxuICByZXR1cm4gUFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRUb0xpbmUoQSwgQiwgUCkge1xuICBjb25zdCBBUCA9IG5ldyBQb2ludChQLnggLSBBLngsIFAueSAtIEEueSksXG4gICAgQUIgPSBuZXcgUG9pbnQoQi54IC0gQS54LCBCLnkgLSBBLnkpLFxuICAgIGFiMiA9IEFCLnggKiBBQi54ICsgQUIueSAqIEFCLnksXG4gICAgYXBfYWIgPSBBUC54ICogQUIueCArIEFQLnkgKiBBQi55LFxuICAgIHQgPSBhcF9hYiAvIGFiMlxuICByZXR1cm4gbmV3IFBvaW50KEEueCArIEFCLnggKiB0LCBBLnkgKyBBQi55ICogdClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBvaW50T25MaW5lKExQMSwgTFAyLCBwZXJjZW50KSB7XG4gIGNvbnN0IGR4ID0gTFAyLnggLSBMUDEueCwgZHkgPSBMUDIueSAtIExQMS55XG4gIHJldHVybiBuZXcgUG9pbnQoTFAxLnggKyBwZXJjZW50ICogZHgsIExQMS55ICsgcGVyY2VudCAqIGR5KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9pbnRPbkxpbmVCeUxlbmdodChMUDEsIExQMiwgbGVuZ2h0KSB7XG4gIGNvbnN0IGR4ID0gTFAyLnggLSBMUDEueFxuICBjb25zdCBkeSA9IExQMi55IC0gTFAxLnlcbiAgY29uc3QgcGVyY2VudCA9IGxlbmdodCAvIGdldERpc3RhbmNlKExQMSwgTFAyKVxuICByZXR1cm4gbmV3IFBvaW50KExQMS54ICsgcGVyY2VudCAqIGR4LCBMUDEueSArIHBlcmNlbnQgKiBkeSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFBvaW50VG9Cb3VuZFBvaW50cyhib3VuZHBvaW50cywgcG9pbnQsIGlzUmlnaHQpIHtcbiAgY29uc3QgcmVzdWx0ID0gYm91bmRwb2ludHMuZmlsdGVyKChiUG9pbnQpID0+IHtcbiAgICByZXR1cm4gYlBvaW50LnkgPiBwb2ludC55IHx8IChpc1JpZ2h0ID8gYlBvaW50LnggPCBwb2ludC54IDogYlBvaW50LnggPiBwb2ludC54KVxuICB9KVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzdWx0Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHBvaW50LnkgPCByZXN1bHRbaV0ueSkge1xuICAgICAgcmVzdWx0LnNwbGljZShpLCAwLCBwb2ludClcbiAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG4gIH1cbiAgcmVzdWx0LnB1c2gocG9pbnQpXG4gIHJldHVybiByZXN1bHRcbn1cbiIsImltcG9ydCBQb2ludCBmcm9tICcuL2dlb21ldHJ5L3BvaW50J1xuaW1wb3J0IHsgYWRkUG9pbnRUb0JvdW5kUG9pbnRzIH0gZnJvbSAnLi9nZW9tZXRyeS9ib3VuZHMnXG5cbmltcG9ydCB7XG4gIGluZGV4T2ZOZWFyZXN0UG9pbnQsXG4gIGdldERpc3RhbmNlXG59IGZyb20gJy4vZ2VvbWV0cnkvZGlzdGFuY2VzJ1xuXG5jbGFzcyBCYXNpY1N0cmF0ZWd5IHtcbiAgY29uc3RydWN0b3IocmVjdGFuZ2xlLCBvcHRpb25zPXt9KSB7XG4gICAgdGhpcy5yZWN0YW5nbGUgPSByZWN0YW5nbGVcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zXG4gIH1cblxuICBnZXQgYm91bmRSZWN0ICgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMucmVjdGFuZ2xlID09PSAnZnVuY3Rpb24nID8gdGhpcy5yZWN0YW5nbGUoKSA6IHRoaXMucmVjdGFuZ2xlXG4gIH1cbn1cblxuY2xhc3MgTm90Q3Jvc3NpbmdTdHJhdGVneSBleHRlbmRzIEJhc2ljU3RyYXRlZ3kge1xuICBwb3NpdGlvbmluZyAocmVjdGFuZ2xlTGlzdCwgaW5kZXhlc09mTmV3cykge1xuICAgIGNvbnN0IHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMgPSByZWN0YW5nbGVMaXN0LnJlZHVjZSgoaW5kZXhlcywgX3JlY3QsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoaW5kZXhlc09mTmV3cy5pbmRleE9mKGluZGV4KSA9PT0gLTEpIHtcbiAgICAgICAgaW5kZXhlcy5wdXNoKGluZGV4KVxuICAgICAgfVxuICAgICAgcmV0dXJuIGluZGV4ZXNcbiAgICB9LCBbXSlcblxuICAgIGluZGV4ZXNPZk5ld3MuZm9yRWFjaCgoaW5kZXgpID0+IHtcbiAgICAgIGxldCByZWN0ID0gcmVjdGFuZ2xlTGlzdFtpbmRleF1cbiAgICAgIGxldCByZW1vdmFibGUgPSBmYWxzZVxuXG4gICAgICBzdGF0aWNSZWN0YW5nbGVJbmRleGVzLmZvckVhY2goKGluZGV4T2ZTdGF0aWMpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhdGljUmVjdCA9IHJlY3RhbmdsZUxpc3RbaW5kZXhPZlN0YXRpY11cbiAgICAgICAgcmVjdCA9IHN0YXRpY1JlY3QubW92ZVRvQm91bmQocmVjdClcbiAgICAgIH0pXG5cbiAgICAgIHJlbW92YWJsZSA9IHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMuc29tZSgoaW5kZXhPZlN0YXRpYykgPT4ge1xuICAgICAgICBjb25zdCBzdGF0aWNSZWN0ID0gcmVjdGFuZ2xlTGlzdFtpbmRleE9mU3RhdGljXVxuICAgICAgICByZXR1cm4gICEhc3RhdGljUmVjdC5hbmQocmVjdClcbiAgICAgIH0pIHx8IHJlY3QuYW5kKHRoaXMuYm91bmRSZWN0KS5nZXRTcXVhcmUoKSAhPT0gcmVjdC5nZXRTcXVhcmUoKVxuXG4gICAgICBpZiAocmVtb3ZhYmxlKSB7XG4gICAgICAgIHJlY3QucmVtb3ZhYmxlID0gdHJ1ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdGljUmVjdGFuZ2xlSW5kZXhlcy5wdXNoKGluZGV4KVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHJlY3RhbmdsZUxpc3RcbiAgfVxuXG4gIHNvcnRpbmcob2RsRHJhZ2dhYmxlc0xpc3QsIG5ld0RyYWdnYWJsZXMsIGluZGV4T2ZOZXdzKSB7XG4gICAgY29uc3QgZHJhZ2dhYmxlcyA9IG9kbERyYWdnYWJsZXNMaXN0LmNvbmNhdChuZXdEcmFnZ2FibGVzKVxuICAgIG5ld0RyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBpbmRleE9mTmV3cy5wdXNoKGRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpKVxuICAgIH0pXG4gICAgcmV0dXJuIGRyYWdnYWJsZXNcbiAgfVxufVxuXG5jbGFzcyBGbG9hdExlZnRTdHJhdGVneSBleHRlbmRzIEJhc2ljU3RyYXRlZ3kge1xuICBjb25zdHJ1Y3RvcihyZWN0YW5nbGUsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcihyZWN0YW5nbGUsIG9wdGlvbnMpXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICByZW1vdmFibGU6IHRydWVcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGhpcy5yYWRpdXMgPSBvcHRpb25zLnJhZGl1cyB8fCA4MFxuXG4gICAgdGhpcy5wYWRkaW5nVG9wTGVmdCA9IG9wdGlvbnMucGFkZGluZ1RvcExlZnQgfHwgbmV3IFBvaW50KDAsIDApXG4gICAgdGhpcy5wYWRkaW5nQm90dG9tUmlnaHQgPSBvcHRpb25zLnBhZGRpbmdCb3R0b21SaWdodCB8fCBuZXcgUG9pbnQoMCwgMClcbiAgICB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyA9IG9wdGlvbnMueUdhcEJldHdlZW5EcmFnZ2FibGVzIHx8IDBcblxuICAgIHRoaXMuZ2V0RGlzdGFuY2UgPSBvcHRpb25zLmdldERpc3RhbmNlIHx8IGdldERpc3RhbmNlXG4gICAgdGhpcy5nZXRQb3NpdGlvbiA9IG9wdGlvbnMuZ2V0UG9zaXRpb24gfHwgKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5wb3NpdGlvbilcbiAgfVxuXG4gIHBvc2l0aW9uaW5nKHJlY3RhbmdsZUxpc3QsIF9pbmRleGVzT2ZOZXdzKSB7XG4gICAgY29uc3QgYm91bmRSZWN0ID0gdGhpcy5ib3VuZFJlY3RcbiAgICBjb25zdCByZWN0UDIgPSBib3VuZFJlY3QuZ2V0UDIoKVxuICAgIGxldCBib3VuZGFyeVBvaW50cyA9IFtib3VuZFJlY3QucG9zaXRpb25dXG5cbiAgICByZWN0YW5nbGVMaXN0LmZvckVhY2goKHJlY3QsIHJlY3RJbmRleCkgPT4ge1xuICAgICAgbGV0IHBvc2l0aW9uLCBpc1ZhbGlkID0gZmFsc2VcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm91bmRhcnlQb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcG9zaXRpb24gPSBuZXcgUG9pbnQoXG4gICAgICAgICAgYm91bmRhcnlQb2ludHNbaV0ueCArIHRoaXMucGFkZGluZ1RvcExlZnQueCxcbiAgICAgICAgICBpID4gMCA/IChib3VuZGFyeVBvaW50c1tpIC0gMV0ueSArIHRoaXMueUdhcEJldHdlZW5EcmFnZ2FibGVzKSA6IChib3VuZFJlY3QucG9zaXRpb24ueSArIHRoaXMucGFkZGluZ1RvcExlZnQueSlcbiAgICAgICAgKVxuXG4gICAgICAgIGlzVmFsaWQgPSAocG9zaXRpb24ueCArIHJlY3Quc2l6ZS54IDwgcmVjdFAyLngpXG5cbiAgICAgICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICBwb3NpdGlvbiA9IG5ldyBQb2ludChcbiAgICAgICAgICBib3VuZFJlY3QucG9zaXRpb24ueCArIHRoaXMucGFkZGluZ1RvcExlZnQueCxcbiAgICAgICAgICBib3VuZGFyeVBvaW50c1tib3VuZGFyeVBvaW50cy5sZW5ndGggLSAxXS55ICsgKHJlY3RJbmRleCA+IDAgPyB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyA6IHRoaXMucGFkZGluZ1RvcExlZnQueSlcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICByZWN0LnBvc2l0aW9uID0gcG9zaXRpb25cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucmVtb3ZhYmxlICYmIHJlY3QuZ2V0UDMoKS55ID4gYm91bmRSZWN0LmdldFAzKCkueSkge1xuICAgICAgICByZWN0LnJlbW92YWJsZSA9IHRydWVcbiAgICAgIH1cblxuICAgICAgYm91bmRhcnlQb2ludHMgPSBhZGRQb2ludFRvQm91bmRQb2ludHMoYm91bmRhcnlQb2ludHMsIHJlY3QuZ2V0UDMoKS5hZGQodGhpcy5wYWRkaW5nQm90dG9tUmlnaHQpKVxuICAgIH0pXG4gICAgcmV0dXJuIHJlY3RhbmdsZUxpc3RcbiAgfVxuXG4gIHNvcnRpbmcob2RsRHJhZ2dhYmxlc0xpc3QsIG5ld0RyYWdnYWJsZXMsIGluZGV4T2ZOZXdzKSB7XG4gICAgY29uc3QgbmV3TGlzdCA9IG9kbERyYWdnYWJsZXNMaXN0LmNvbmNhdCgpXG4gICAgY29uc3QgbGlzdE9sZFBvc2l0aW9uID0gb2RsRHJhZ2dhYmxlc0xpc3QubWFwKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5nZXRQb3NpdGlvbigpKVxuICAgIG5ld0RyYWdnYWJsZXMuZm9yRWFjaCgobmV3RHJhZ2dhYmxlKSA9PiB7XG4gICAgICBsZXQgaW5kZXggPSBpbmRleE9mTmVhcmVzdFBvaW50KGxpc3RPbGRQb3NpdGlvbiwgdGhpcy5nZXRQb3NpdGlvbihuZXdEcmFnZ2FibGUpLCB0aGlzLnJhZGl1cywgdGhpcy5nZXREaXN0YW5jZSlcbiAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgaW5kZXggPSBuZXdMaXN0Lmxlbmd0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5kZXggPSBuZXdMaXN0LmluZGV4T2Yob2RsRHJhZ2dhYmxlc0xpc3RbaW5kZXhdKVxuICAgICAgfVxuICAgICAgbmV3TGlzdC5zcGxpY2UoaW5kZXgsIDAsIG5ld0RyYWdnYWJsZSlcbiAgICB9KVxuICAgIG5ld0RyYWdnYWJsZXMuZm9yRWFjaCgobmV3RHJhZ2dhYmxlKSA9PiB7XG4gICAgICBpbmRleE9mTmV3cy5wdXNoKG5ld0xpc3QuaW5kZXhPZihuZXdEcmFnZ2FibGUpKVxuICAgIH0pXG4gICAgcmV0dXJuIG5ld0xpc3RcbiAgfVxufVxuXG5jbGFzcyBGbG9hdFJpZ2h0U3RyYXRlZ3kgZXh0ZW5kcyBGbG9hdExlZnRTdHJhdGVneSB7XG4gIGNvbnN0cnVjdG9yKHJlY3RhbmdsZSwgb3B0aW9ucz17fSkge1xuICAgIHN1cGVyKHJlY3RhbmdsZSwgb3B0aW9ucylcblxuICAgIHRoaXMucGFkZGluZ1RvcFJpZ2h0ID0gb3B0aW9ucy5wYWRkaW5nVG9wUmlnaHQgfHwgbmV3IFBvaW50KDUsIDUpXG4gICAgdGhpcy5wYWRkaW5nQm90dG9tTGVmdCA9IG9wdGlvbnMucGFkZGluZ0JvdHRvbUxlZnQgfHwgbmV3IFBvaW50KDAsIDApXG4gICAgdGhpcy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgPSBvcHRpb25zLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyB8fCAwXG5cbiAgICB0aGlzLnBhZGRpbmdCb3R0b21OZWdMZWZ0ID0gbmV3IFBvaW50KC10aGlzLnBhZGRpbmdCb3R0b21MZWZ0LngsIHRoaXMucGFkZGluZ0JvdHRvbUxlZnQueSlcbiAgfVxuXG4gIHBvc2l0aW9uaW5nKHJlY3RhbmdsZUxpc3QsIF9pbmRleGVzT2ZOZXdzKSB7XG4gICAgY29uc3QgYm91bmRSZWN0ID0gdGhpcy5ib3VuZFJlY3RcbiAgICBsZXQgYm91bmRhcnlQb2ludHMgPSBbYm91bmRSZWN0LmdldFAyKCldXG5cbiAgICByZWN0YW5nbGVMaXN0LmZvckVhY2goKHJlY3QsIHJlY3RJbmRleCkgPT4ge1xuICAgICAgbGV0IHBvc2l0aW9uLCBpc1ZhbGlkID0gZmFsc2VcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm91bmRhcnlQb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcG9zaXRpb24gPSBuZXcgUG9pbnQoXG4gICAgICAgICAgYm91bmRhcnlQb2ludHNbaV0ueCAtIHJlY3Quc2l6ZS54IC0gdGhpcy5wYWRkaW5nVG9wUmlnaHQueCxcbiAgICAgICAgICBpID4gMCA/IChib3VuZGFyeVBvaW50c1tpIC0gMV0ueSArIHRoaXMueUdhcEJldHdlZW5EcmFnZ2FibGVzKSA6IChib3VuZFJlY3QucG9zaXRpb24ueSArIHRoaXMucGFkZGluZ1RvcFJpZ2h0LnkpXG4gICAgICAgIClcblxuICAgICAgICBpc1ZhbGlkID0gKHBvc2l0aW9uLnggPiByZWN0LnBvc2l0aW9uLngpXG4gICAgICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICAgIHBvc2l0aW9uID0gbmV3IFBvaW50KFxuICAgICAgICAgIGJvdW5kUmVjdC5nZXRQMigpLnggIC0gcmVjdC5zaXplLnggLSB0aGlzLnBhZGRpbmdUb3BSaWdodC54LFxuICAgICAgICAgIGJvdW5kYXJ5UG9pbnRzW2JvdW5kYXJ5UG9pbnRzLmxlbmd0aCAtIDFdLnkgKyAocmVjdEluZGV4ID4gMCA/IHRoaXMueUdhcEJldHdlZW5EcmFnZ2FibGVzIDogdGhpcy5wYWRkaW5nVG9wUmlnaHQueSlcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgcmVjdC5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnJlbW92YWJsZSAmJiByZWN0LmdldFA0KCkueSA+IGJvdW5kUmVjdC5nZXRQNCgpLnkpIHtcbiAgICAgICAgcmVjdC5yZW1vdmFibGUgPSB0cnVlXG4gICAgICB9XG4gICAgICBib3VuZGFyeVBvaW50cyA9IGFkZFBvaW50VG9Cb3VuZFBvaW50cyhib3VuZGFyeVBvaW50cywgcmVjdC5nZXRQNCgpLmFkZCh0aGlzLnBhZGRpbmdCb3R0b21OZWdMZWZ0KSwgdHJ1ZSlcbiAgICB9KVxuICAgIHJldHVybiByZWN0YW5nbGVMaXN0XG4gIH1cbn1cblxuZXhwb3J0IHsgTm90Q3Jvc3NpbmdTdHJhdGVneSwgRmxvYXRMZWZ0U3RyYXRlZ3ksIEZsb2F0UmlnaHRTdHJhdGVneSB9XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9wb2ludCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFuZ2xlRGlmZihhbHBoYSwgYmV0YSkge1xuICBjb25zdCBtaW5BbmdsZSA9IE1hdGgubWluKGFscGhhLCBiZXRhKVxuICBjb25zdCBtYXhBbmdsZSA9ICBNYXRoLm1heChhbHBoYSwgYmV0YSlcbiAgcmV0dXJuIE1hdGgubWluKG1heEFuZ2xlIC0gbWluQW5nbGUsIG1pbkFuZ2xlICsgTWF0aC5QSSoyIC0gbWF4QW5nbGUpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbmdsZShwMSwgcDIpIHtcbiAgY29uc3QgZGlmZiA9IHAyLnN1YihwMSlcbiAgcmV0dXJuIG5vcm1hbGl6ZUFuZ2xlKE1hdGguYXRhbjIoZGlmZi55LCBkaWZmLngpKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9SYWRpYW4oYW5nbGUpIHtcbiAgcmV0dXJuICgoYW5nbGUgJSAzNjApICogTWF0aC5QSSAvIDE4MClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvRGVncmVlKGFuZ2xlKSB7XG4gIHJldHVybiAoYW5nbGUgKiAxODAgLyBNYXRoLlBJKSAlIDM2MFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRBbmdsZShtaW4sIG1heCwgdmFsKSB7XG4gIGxldCBkbWluLCBkbWF4XG4gIGlmIChtaW4gPCBtYXggJiYgdmFsID4gbWluICYmIHZhbCA8IG1heCkge1xuICAgIHJldHVybiB2YWxcbiAgfSBlbHNlIGlmIChtYXggPCBtaW4gJiYgKHZhbCA8IG1heCB8fCB2YWwgPiBtaW4pKSB7XG4gICAgcmV0dXJuIHZhbFxuICB9IGVsc2Uge1xuICAgIGRtaW4gPSBnZXRBbmdsZURpZmYobWluLCB2YWwpXG4gICAgZG1heCA9IGdldEFuZ2xlRGlmZihtYXgsIHZhbClcbiAgICBpZiAoZG1pbiA8IGRtYXgpIHtcbiAgICAgIHJldHVybiBtaW5cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG1heFxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmVhcmVzdEFuZ2xlKGFyciwgYW5nbGUpIHtcbiAgbGV0IGksIHRlbXAsIGRpZmYgPSBNYXRoLlBJICogMiwgdmFsdWVcbiAgZm9yIChpID0gMDsgaSA8IGFyci5sZW5ndGg7aSsrKSB7XG4gICAgdGVtcCA9IGdldEFuZ2xlRGlmZihhcnJbaV0sIGFuZ2xlKVxuICAgIGlmIChkaWZmIDwgdGVtcCkge1xuICAgICAgZGlmZiA9IHRlbXBcbiAgICAgIHZhbHVlID0gYXJyW2ldXG4gICAgfVxuICB9XG4gIHJldHVybiB2YWx1ZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplQW5nbGUodmFsKSB7XG4gIHdoaWxlICh2YWwgPCAwKSB7XG4gICAgdmFsICs9IDIgKiBNYXRoLlBJXG4gIH1cbiAgd2hpbGUgKHZhbCA+IDIgKiBNYXRoLlBJKSB7XG4gICAgdmFsIC09IDIgKiBNYXRoLlBJXG4gIH1cbiAgcmV0dXJuIHZhbFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKGFuZ2xlLCBsZW5ndGgsIGNlbnRlcikge1xuICBjZW50ZXIgPSBjZW50ZXIgfHwgbmV3IFBvaW50KDAsIDApXG4gIHJldHVybiBjZW50ZXIuYWRkKG5ldyBQb2ludChsZW5ndGggKiBNYXRoLmNvcyhhbmdsZSksIGxlbmd0aCAqIE1hdGguc2luKGFuZ2xlKSkpXG59XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9nZW9tZXRyeS9wb2ludCdcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSAnLi9nZW9tZXRyeS9yZWN0YW5nbGUnXG5pbXBvcnQge1xuICBnZXRQb2ludE9uTGluZUJ5TGVuZ2h0LFxuICBkaXJlY3RDcm9zc2luZyxcbiAgYm91bmRUb0xpbmVcbn0gZnJvbSAnLi9nZW9tZXRyeS9ib3VuZHMnXG5cbmltcG9ydCB7XG4gIGdldEFuZ2xlLFxuICBub3JtYWxpemVBbmdsZSxcbiAgYm91bmRBbmdsZSxcbiAgZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtXG59IGZyb20gJy4vZ2VvbWV0cnkvYW5nbGVzJ1xuXG5leHBvcnQgY2xhc3MgQm91bmQge1xuICBjb25zdHJ1Y3RvciAoKSB7fVxuXG4gIGJvdW5kKHBvaW50LCBfc2l6ZSkge1xuICAgIHJldHVybiBwb2ludFxuICB9XG5cbiAgcmVmcmVzaCAoKSB7fVxuXG4gIHN0YXRpYyBib3VuZGluZygpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyB0aGlzKC4uLmFyZ3VtZW50cylcbiAgICByZXR1cm4gaW5zdGFuY2UuYm91bmQuYmluZChpbnN0YW5jZSlcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb1JlY3RhbmdsZSBleHRlbmRzIEJvdW5kIHtcbiAgY29uc3RydWN0b3IocmVjdGFuZ2xlKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMucmVjdGFuZ2xlID0gcmVjdGFuZ2xlXG4gIH1cblxuICBib3VuZChwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IGNhbGNQb2ludCA9IHBvaW50LmNsb25lKClcbiAgICBjb25zdCByZWN0UDIgPSB0aGlzLnJlY3RhbmdsZS5nZXRQMygpXG5cbiAgICBpZiAodGhpcy5yZWN0YW5nbGUucG9zaXRpb24ueCA+IGNhbGNQb2ludC54KSB7XG4gICAgICAoY2FsY1BvaW50LnggPSB0aGlzLnJlY3RhbmdsZS5wb3NpdGlvbi54KVxuICAgIH1cbiAgICBpZiAodGhpcy5yZWN0YW5nbGUucG9zaXRpb24ueSA+IGNhbGNQb2ludC55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHRoaXMucmVjdGFuZ2xlLnBvc2l0aW9uLnlcbiAgICB9XG4gICAgaWYgKHJlY3RQMi54IDwgY2FsY1BvaW50LnggKyBzaXplLngpIHtcbiAgICAgIGNhbGNQb2ludC54ID0gcmVjdFAyLnggLSBzaXplLnhcbiAgICB9XG4gICAgaWYgKHJlY3RQMi55IDwgY2FsY1BvaW50LnkgKyBzaXplLnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gcmVjdFAyLnkgLSBzaXplLnlcbiAgICB9XG5cbiAgICByZXR1cm4gY2FsY1BvaW50XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9FbGVtZW50IGV4dGVuZHMgQm91bmRUb1JlY3RhbmdsZSB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbnRhaW5lcikge1xuICAgIHN1cGVyKFJlY3RhbmdsZS5mcm9tRWxlbWVudChlbGVtZW50LCBjb250YWluZXIpKVxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lclxuICB9XG5cbiAgcmVmcmVzaCAoKSB7XG4gICAgdGhpcy5yZWN0YW5nbGUgPSBSZWN0YW5nbGUuZnJvbUVsZW1lbnQodGhpcy5lbGVtZW50LCB0aGlzLmNvbnRhaW5lcilcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb0xpbmVYIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3Rvcih4LCBzdGFydFksIGVuZFkpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy54ID0geFxuICAgIHRoaXMuc3RhcnRZID0gc3RhcnRZXG4gICAgdGhpcy5lbmRZID0gZW5kWVxuICB9XG5cbiAgYm91bmQocG9pbnQsIHNpemUpIHtcbiAgICBjb25zdCBjYWxjUG9pbnQgPSBwb2ludC5jbG9uZSgpXG5cbiAgICBjYWxjUG9pbnQueCA9IHRoaXMueFxuICAgIGlmICh0aGlzLnN0YXJ0WSA+IGNhbGNQb2ludC55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHRoaXMuc3RhcnRZXG4gICAgfVxuICAgIGlmICh0aGlzLmVuZFkgPCBjYWxjUG9pbnQueSArIHNpemUueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSB0aGlzLmVuZFkgLSBzaXplLnlcbiAgICB9XG5cbiAgICByZXR1cm4gY2FsY1BvaW50XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9MaW5lWSBleHRlbmRzIEJvdW5kIHtcbiAgY29uc3RydWN0b3IoeSwgc3RhcnRYLCBlbmRYKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMueSA9IHlcbiAgICB0aGlzLnN0YXJ0WCA9IHN0YXJ0WFxuICAgIHRoaXMuZW5kWCA9IGVuZFhcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgY2FsY1BvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIGNhbGNQb2ludC55ID0gdGhpcy55XG4gICAgaWYgKHRoaXMuc3RhcnRYID4gY2FsY1BvaW50LngpIHtcbiAgICAgIGNhbGNQb2ludC54ID0gdGhpcy5zdGFydFhcbiAgICB9XG4gICAgaWYgKHRoaXMuZW5kWCA8IGNhbGNQb2ludC54ICsgc2l6ZS54KSB7XG4gICAgICBjYWxjUG9pbnQueCA9IHRoaXMuZW5kWCAtIHNpemUueFxuICAgIH1cbiAgICByZXR1cm4gY2FsY1BvaW50XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9MaW5lIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3RvcihzdGFydFBvaW50LCBlbmRQb2ludCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnN0YXJ0UG9pbnQgPSBzdGFydFBvaW50XG4gICAgdGhpcy5lbmRQb2ludCA9IGVuZFBvaW50XG4gICAgY29uc3QgYWxwaGEgPSBNYXRoLmF0YW4yKGVuZFBvaW50LnkgLSBzdGFydFBvaW50LnksIGVuZFBvaW50LnggLSBzdGFydFBvaW50LngpXG4gICAgY29uc3QgYmV0YSA9IGFscGhhICsgTWF0aC5QSSAvIDJcbiAgICB0aGlzLnNvbWVLID0gMTBcbiAgICB0aGlzLmNvc0JldGEgPSBNYXRoLmNvcyhiZXRhKVxuICAgIHRoaXMuc2luQmV0YSA9IE1hdGguc2luKGJldGEpXG4gIH1cblxuICBib3VuZChwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IHBvaW50MiA9IG5ldyBQb2ludChcbiAgICAgIHBvaW50LnggKyB0aGlzLnNvbWVLICogdGhpcy5jb3NCZXRhLFxuICAgICAgcG9pbnQueSArIHRoaXMuc29tZUsgKiB0aGlzLnNpbkJldGFcbiAgICApXG5cbiAgICBjb25zdCBuZXdFbmRQb2ludCA9IGdldFBvaW50T25MaW5lQnlMZW5naHQodGhpcy5lbmRQb2ludCwgdGhpcy5zdGFydFBvaW50LCBzaXplLngpXG4gICAgY29uc3QgcG9pbnRDcm9zc2luZyA9IGRpcmVjdENyb3NzaW5nKHRoaXMuc3RhcnRQb2ludCwgdGhpcy5lbmRQb2ludCwgcG9pbnQsIHBvaW50MilcblxuICAgIHJldHVybiBib3VuZFRvTGluZSh0aGlzLnN0YXJ0UG9pbnQsIG5ld0VuZFBvaW50LCBwb2ludENyb3NzaW5nKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvQ2lyY2xlIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3RvcihjZW50ZXIsIHJhZGl1cykge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLmNlbnRlciA9IGNlbnRlclxuICAgIHRoaXMucmFkaXVzID0gcmFkaXVzXG4gIH1cblxuICBib3VuZChwb2ludCwgX3NpemUpIHtcbiAgICByZXR1cm4gZ2V0UG9pbnRPbkxpbmVCeUxlbmdodCh0aGlzLmNlbnRlciwgcG9pbnQsIHRoaXMucmFkaXVzKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvQXJjIGV4dGVuZHMgQm91bmRUb0NpcmNsZSB7XG4gIGNvbnN0cnVjdG9yKGNlbnRlciwgcmFkaXVzLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSkge1xuICAgIHN1cGVyKGNlbnRlciwgcmFkaXVzKVxuICAgIHRoaXMuX3N0YXJ0QW5nbGUgPSBzdGFydEFuZ2xlXG4gICAgdGhpcy5fZW5kQW5nbGUgPSBlbmRBbmdsZVxuICB9XG5cbiAgc3RhcnRBbmdsZSgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMuX3N0YXJ0QW5nbGUgPT09ICdmdW5jdGlvbicgPyB0aGlzLl9zdGFydEFuZ2xlKCkgOiB0aGlzLl9zdGFydEFuZ2xlXG4gIH1cblxuICBlbmRBbmdsZSgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMuX2VuZEFuZ2xlID09PSAnZnVuY3Rpb24nID8gdGhpcy5fZW5kQW5nbGUoKSA6IHRoaXMuX2VuZEFuZ2xlXG4gIH1cblxuICBib3VuZChwb2ludCwgX3NpemUpIHtcbiAgICBsZXQgYW5nbGUgPSBnZXRBbmdsZSh0aGlzLmNlbnRlciwgcG9pbnQpXG4gICAgYW5nbGUgPSBub3JtYWxpemVBbmdsZShhbmdsZSlcbiAgICBhbmdsZSA9IGJvdW5kQW5nbGUodGhpcy5zdGFydEFuZ2xlKCksIHRoaXMuZW5kQW5nbGUoKSwgYW5nbGUpXG4gICAgcmV0dXJuIGdldFBvaW50RnJvbVJhZGlhbFN5c3RlbShhbmdsZSwgdGhpcy5yYWRpdXMsIHRoaXMuY2VudGVyKVxuICB9XG59XG4iLCJpbXBvcnQgcmFuZ2UgZnJvbSAnLi91dGlscy9yYW5nZS5qcydcbmltcG9ydCByZW1vdmVJdGVtIGZyb20gJy4vdXRpbHMvcmVtb3ZlLWFycmF5LWl0ZW0nXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnRFbWl0dGVyJ1xuaW1wb3J0IGRpc3BhdGNoRG9tRXZlbnQgZnJvbSAnLi91dGlscy9kaXNwYXRjaC1kb20tZXZlbnQnXG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gJy4vZ2VvbWV0cnkvcmVjdGFuZ2xlJ1xuaW1wb3J0IHsgdHJhbnNmb3JtZWRTcGFjZURpc3RhbmNlRmFjdG9yeSB9IGZyb20gJy4vZ2VvbWV0cnkvZGlzdGFuY2VzJ1xuaW1wb3J0IHsgc2NvcGVzLCBjdXJyZW50U2NvcGUgfSBmcm9tICcuL3Njb3BlJ1xuXG5pbXBvcnQgeyBGbG9hdExlZnRTdHJhdGVneSB9IGZyb20gJy4vcG9zaXRpb25pbmcnXG5pbXBvcnQgeyBCb3VuZFRvRWxlbWVudCB9IGZyb20gJy4vYm91bmRpbmcnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhcmdldCBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGRyYWdnYWJsZXMsIG9wdGlvbnMgPSB7fSkge1xuICAgIHN1cGVyKG9wdGlvbnMpXG5cbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHRpbWVFbmQ6IDIwMCxcbiAgICAgIHRpbWVFeGNhbmdlOiA0MDBcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGhpcy5wb3NpdGlvbmluZ1N0cmF0ZWd5ID0gb3B0aW9ucy5zdHJhdGVneSB8fCBuZXcgRmxvYXRMZWZ0U3RyYXRlZ3koXG4gICAgICB0aGlzLmdldFJlY3RhbmdsZS5iaW5kKHRoaXMpLFxuICAgICAge1xuICAgICAgICByYWRpdXM6IDgwLFxuICAgICAgICBnZXREaXN0YW5jZTogdHJhbnNmb3JtZWRTcGFjZURpc3RhbmNlRmFjdG9yeSh7IHg6IDEsIHk6IDQgfSksXG4gICAgICAgIHJlbW92YWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIClcblxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgICB0aGlzLmRyYWdnYWJsZXMgPSBbXVxuICAgIHRoaXMubGlzdGVuZXJzID0gbmV3IEFib3J0Q29udHJvbGxlcigpXG4gICAgZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHRoaXMuYWNjZXB0KGRyYWdnYWJsZSkpXG5cbiAgICBjb25zdCBzY29wZSA9IG9wdGlvbnMuc2NvcGUgfHwgY3VycmVudFNjb3BlKClcbiAgICBzY29wZS5hZGRUYXJnZXQodGhpcylcblxuICAgIHRoaXMuc3RhcnRCb3VuZGluZygpXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIHN0YXJ0Qm91bmRpbmcoKSB7XG4gICAgdGhpcy5ib3VuZCA9IHRoaXMub3B0aW9ucy5ib3VuZCB8fCBCb3VuZFRvRWxlbWVudC5ib3VuZGluZyh0aGlzLmVsZW1lbnQpXG4gIH1cblxuICBwb3NpdGlvbmluZyAoZHJhZ2dhYmxlcywgaW5kZXhlc09mTmV3KSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25pbmdTdHJhdGVneS5wb3NpdGlvbmluZyhkcmFnZ2FibGVzLCBpbmRleGVzT2ZOZXcpXG4gIH1cblxuICBzb3J0aW5nIChvbGREcmFnZ2FibGVzLCBuZXdEcmFnZ2FibGVzLCBpbmRleE9mTmV3cykge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uaW5nU3RyYXRlZ3kuc29ydGluZyhvbGREcmFnZ2FibGVzLCBuZXdEcmFnZ2FibGVzLCBpbmRleE9mTmV3cylcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgbGV0IHJlY3RhbmdsZXMsIGluZGV4ZXNPZk5ld1xuXG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMgPSB0aGlzLmRyYWdnYWJsZXMuZmlsdGVyKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGxldCBlbGVtZW50ID0gZHJhZ2dhYmxlLmVsZW1lbnQucGFyZW50Tm9kZVxuICAgICAgd2hpbGUgKGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQgPT09IHRoaXMuZWxlbWVudCkge1xuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfSlcblxuICAgIGlmICh0aGlzLmlubmVyRHJhZ2dhYmxlcy5sZW5ndGgpIHtcbiAgICAgIGluZGV4ZXNPZk5ldyA9IHJhbmdlKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmxlbmd0aClcbiAgICAgIHJlY3RhbmdsZXMgPSB0aGlzLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICAgIH0pLCBpbmRleGVzT2ZOZXcpXG4gICAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIGluZGV4ZXNPZk5ldylcbiAgICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gdGhpcy5lbWl0VGFyZ2V0RXZlbnQoJ2FkZCcsIGRyYWdnYWJsZSkpXG4gICAgfVxuICB9XG5cbiAgZ2V0UmVjdGFuZ2xlKCkge1xuICAgIHJldHVybiBSZWN0YW5nbGUuZnJvbUVsZW1lbnQodGhpcy5lbGVtZW50LCB0aGlzLmNvbnRhaW5lciwgdHJ1ZSlcbiAgfVxuXG4gIGNhdGNoRHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuY2F0Y2hEcmFnZ2FibGUpIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuY2F0Y2hEcmFnZ2FibGUodGhpcywgZHJhZ2dhYmxlKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0YXJnZXRSZWN0YW5nbGUgPSB0aGlzLmdldFJlY3RhbmdsZSgpXG4gICAgICBjb25zdCBkcmFnZ2FibGVTcXVhcmUgPSBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKCkuZ2V0U3F1YXJlKClcblxuICAgICAgcmV0dXJuIGRyYWdnYWJsZVNxdWFyZSA8IHRhcmdldFJlY3RhbmdsZS5nZXRTcXVhcmUoKVxuICAgICAgICAgICAgICAmJiB0YXJnZXRSZWN0YW5nbGUuaW5jbHVkZVBvaW50KGRyYWdnYWJsZS5nZXRDZW50ZXIoKSlcbiAgICB9XG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRSZWN0YW5nbGUoKS5wb3NpdGlvblxuICB9XG5cbiAgZ2V0U2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRSZWN0YW5nbGUoKS5zaXplXG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMubGlzdGVuZXJzLmFib3J0KClcbiAgICBzY29wZXMuZm9yRWFjaCgoc2NvcGUpID0+IHJlbW92ZUl0ZW0oc2NvcGUudGFyZ2V0cywgdGhpcykpXG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgfSksIFtdKVxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgW10sIDApXG4gIH1cblxuICBvbkVuZChkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBuZXdEcmFnZ2FibGVzSW5kZXggPSBbXVxuXG4gICAgaWYgKHRoaXMuZ2V0UmVjdGFuZ2xlKCkuaW5jbHVkZVBvaW50KGRyYWdnYWJsZS5nZXRDZW50ZXIoKSkpIHtcbiAgICAgIGRyYWdnYWJsZS5wb3NpdGlvbiA9IHRoaXMuYm91bmQoZHJhZ2dhYmxlLnBvc2l0aW9uLCBkcmFnZ2FibGUuZ2V0U2l6ZSgpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICB0aGlzLmVtaXRUYXJnZXRFdmVudCgnYmVmb3JlQWRkJywgZHJhZ2dhYmxlKVxuXG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMgPSB0aGlzLnNvcnRpbmcodGhpcy5pbm5lckRyYWdnYWJsZXMsIFtkcmFnZ2FibGVdLCBuZXdEcmFnZ2FibGVzSW5kZXgpXG4gICAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgbmV3RHJhZ2dhYmxlc0luZGV4KVxuXG4gICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBuZXdEcmFnZ2FibGVzSW5kZXgpXG4gICAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTEpIHtcbiAgICAgIHRoaXMuZW1pdFRhcmdldEV2ZW50KCdhZGQnLCBkcmFnZ2FibGUpXG4gICAgfVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBzZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXcsIHRpbWUpIHtcbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5zbGljZSgwKS5mb3JFYWNoKChkcmFnZ2FibGUsIGkpID0+IHtcbiAgICAgIGNvbnN0IHJlY3QgPSByZWN0YW5nbGVzW2ldLFxuICAgICAgICB0aW1lRW5kID0gdGltZSB8fCB0aW1lID09PSAwID8gdGltZSA6IGluZGV4ZXNPZk5ldy5pbmRleE9mKGkpICE9PSAtMSA/IHRoaXMub3B0aW9ucy50aW1lRW5kIDogdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlXG5cbiAgICAgIGlmIChyZWN0LnJlbW92YWJsZSkge1xuICAgICAgICBkcmFnZ2FibGUubW92ZShkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uLCB0aW1lRW5kLCB0cnVlLCB0cnVlKVxuICAgICAgICByZW1vdmVJdGVtKHRoaXMuaW5uZXJEcmFnZ2FibGVzLCBkcmFnZ2FibGUpXG4gICAgICAgIHRoaXMuZW1pdFRhcmdldEV2ZW50KCdyZW1vdmUnLCBkcmFnZ2FibGUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkcmFnZ2FibGUubW92ZShyZWN0LnBvc2l0aW9uLCB0aW1lRW5kLCB0cnVlLCB0cnVlKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBhZGQoZHJhZ2dhYmxlLCB0aW1lKSB7XG4gICAgY29uc3QgbmV3RHJhZ2dhYmxlc0luZGV4ID0gdGhpcy5pbm5lckRyYWdnYWJsZXMubGVuZ3RoXG5cbiAgICB0aGlzLmVtaXRUYXJnZXRFdmVudCgnYmVmb3JlQWRkJywgZHJhZ2dhYmxlKVxuXG4gICAgdGhpcy5hY2NlcHQoZHJhZ2dhYmxlKVxuICAgIHRoaXMucHVzaElubmVyRHJhZ2dhYmxlKGRyYWdnYWJsZSlcbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBuZXdEcmFnZ2FibGVzSW5kZXgsIGRyYWdnYWJsZSlcblxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgW25ld0RyYWdnYWJsZXNJbmRleF0sIHRpbWUgfHwgMClcbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMSkge1xuICAgICAgdGhpcy5lbWl0VGFyZ2V0RXZlbnQoJ2FkZCcsIGRyYWdnYWJsZSlcbiAgICB9XG4gIH1cblxuICBwdXNoSW5uZXJEcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKT09PS0xKSB7XG4gICAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5wdXNoKGRyYWdnYWJsZSlcbiAgICB9XG4gIH1cblxuICBhY2NlcHQoZHJhZ2dhYmxlKSB7XG4gICAgaWYgKHRoaXMuZHJhZ2dhYmxlcy5pbmNsdWRlcyhkcmFnZ2FibGUpKSByZXR1cm5cblxuICAgIHRoaXMuZHJhZ2dhYmxlcy5wdXNoKGRyYWdnYWJsZSlcbiAgICBkcmFnZ2FibGUudGFyZ2V0cy5wdXNoKHRoaXMpXG4gICAgZHJhZ2dhYmxlLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWc6bW92ZScsICgpID0+IHRoaXMucmVtb3ZlKGRyYWdnYWJsZSksIHsgc2lnbmFsOiB0aGlzLmxpc3RlbmVycy5zaWduYWwgfSlcbiAgfVxuXG4gIHJlbW92ZShkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuaW5uZXJEcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKVxuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnNwbGljZShpbmRleCwgMSlcblxuICAgIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgfSksIFtdKVxuXG4gICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBbXSlcbiAgICB0aGlzLmVtaXRUYXJnZXRFdmVudCgncmVtb3ZlJywgZHJhZ2dhYmxlKVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUubW92ZShkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uLCAwLCB0cnVlLCB0cnVlKVxuICAgICAgdGhpcy5lbWl0VGFyZ2V0RXZlbnQoJ3JlbW92ZScsIGRyYWdnYWJsZSlcbiAgICB9KVxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzID0gW11cbiAgfVxuXG4gIGdldFNvcnRlZERyYWdnYWJsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnNsaWNlKClcbiAgfVxuXG4gIGVtaXRUYXJnZXRFdmVudCh0eXBlLCBkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBkZXRhaWwgPSB7IHRhcmdldDogdGhpcywgZHJhZ2dhYmxlIH1cbiAgICB0aGlzLmVtaXQoYHRhcmdldDoke3R5cGV9YCwgZGV0YWlsKVxuXG4gICAgaWYgKHRoaXMuZG9tRXZlbnRzKSB7XG4gICAgICBjb25zdCBkb21UeXBlID0gdHlwZS5yZXBsYWNlKC9bQS1aXS9nLCAobGV0dGVyKSA9PiBgLSR7bGV0dGVyLnRvTG93ZXJDYXNlKCl9YClcbiAgICAgIGRpc3BhdGNoRG9tRXZlbnQodGhpcy5lbGVtZW50LCBgZHJhZ2VlOnRhcmdldC0ke2RvbVR5cGV9YCwgZGV0YWlsKVxuICAgIH1cbiAgfVxuXG4gIGdldCBjb250YWluZXIoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9jb250YWluZXIgPSB0aGlzLl9jb250YWluZXIgfHwgdGhpcy5vcHRpb25zLmNvbnRhaW5lciB8fCB0aGlzLm9wdGlvbnMucGFyZW50IHx8IHRoaXMuZWxlbWVudC5vZmZzZXRQYXJlbnQpXG4gIH1cblxuICBnZXQgZG9tRXZlbnRzKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZG9tRXZlbnRzICE9PSBmYWxzZVxuICB9XG59XG5cbiJdLCJuYW1lcyI6WyJnZXRQYXJlbnRzQ2hhaW4iLCJjaGlsZEVsZW1lbnQiLCJyb290RWxlbWVudCIsImNoYWluIiwiZWxlbWVudCIsInBhcmVudE5vZGUiLCJ1bnNoaWZ0IiwiUG9pbnQiLCJjb25zdHJ1Y3RvciIsIngiLCJ5IiwiYWRkIiwicCIsInN1YiIsIm11bHQiLCJrIiwibmVnYXRpdmUiLCJjb21wYXJlIiwiY2xvbmUiLCJ0b1N0cmluZyIsImVsZW1lbnRPZmZzZXQiLCJwYXJlbnQiLCJvZmZzZXRQYXJlbnQiLCJvZmZzZXRMZWZ0IiwiY2xpZW50TGVmdCIsIm9mZnNldFRvcCIsImNsaWVudFRvcCIsImNvbnNpZGVyT2Zmc2V0RWxlbWVudHMiLCJwb3AiLCJyZWR1Y2UiLCJzdW0iLCJlbGVtZW50Qm91bmRpbmdPZmZzZXQiLCJlbGVtZW50UmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInBhcmVudFJlY3QiLCJsZWZ0IiwidG9wIiwiZWxlbWVudFNpemUiLCJ3aWR0aCIsImhlaWdodCIsIlJlY3RhbmdsZSIsInBvc2l0aW9uIiwic2l6ZSIsImdldFAxIiwiZ2V0UDIiLCJnZXRQMyIsImdldFA0IiwiZ2V0Q2VudGVyIiwib3IiLCJyZWN0IiwiTWF0aCIsIm1pbiIsIm1heCIsImFuZCIsImluY2x1ZGVQb2ludCIsImluY2x1ZGVSZWN0YW5nbGUiLCJyZWN0YW5nbGUiLCJtb3ZlVG9Cb3VuZCIsImF4aXMiLCJzZWxBeGlzIiwiY3Jvc3NSZWN0YW5nbGUiLCJ0aGlzQ2VudGVyIiwicmVjdENlbnRlciIsInNpZ24iLCJvZmZzZXQiLCJnZXRTcXVhcmUiLCJzdHlsZUFwcGx5IiwiZWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzdHlsZSIsImdyb3d0aCIsImdldE1pblNpZGUiLCJmcm9tRWxlbWVudCIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsImlzQ29uc2lkZXJUcmFuc2xhdGUiLCJFdmVudEVtaXR0ZXIiLCJFdmVudFRhcmdldCIsIm9wdGlvbnMiLCJvbiIsIk9iamVjdCIsImVudHJpZXMiLCJmb3JFYWNoIiwiX3JlZiIsImV2ZW50TmFtZSIsImZuIiwiZW1pdCIsImRldGFpbCIsImNhbmNlbGFibGUiLCJkaXNwYXRjaEV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwib2ZmIiwib25jZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ1bnN1YnNjcmliZSIsImFycmF5IiwidmFsIiwiaSIsInNwbGljZSIsInNjb3BlcyIsInNjb3BlU3RhY2siLCJTY29wZSIsImRyYWdnYWJsZXMiLCJ0YXJnZXRzIiwic2NvcGUiLCJkcmFnZ2FibGUiLCJyZWxlYXNlRHJhZ2dhYmxlIiwidGFyZ2V0IiwicmVsZWFzZVRhcmdldCIsInB1c2giLCJ0aW1lRW5kIiwiaW5pdCIsImluaXREcmFnZ2FibGUiLCJhZGREcmFnZ2FibGUiLCJkcmFnRW5kQWN0aW9uIiwib25FbmQiLCJyZW1vdmVJdGVtIiwiYWRkVGFyZ2V0Iiwic2hvdFRhcmdldHMiLCJmaWx0ZXIiLCJpbmRleE9mIiwiY2F0Y2hEcmFnZ2FibGUiLCJzb3J0IiwiYSIsImIiLCJnZXRSZWN0YW5nbGUiLCJwaW5Qb3NpdGlvbiIsImluaXRpYWxQb3NpdGlvbiIsInJlc2V0IiwicmVmcmVzaCIsInBvc2l0aW9ucyIsIm1hcCIsImlubmVyRHJhZ2dhYmxlcyIsIm1lc3NhZ2UiLCJ0YXJnZXRJbmRleGVzIiwiaW5kZXgiLCJkZWZhdWx0U2NvcGUiLCJjdXJyZW50U2NvcGUiLCJjYWxsIiwidGhyb3R0bGUiLCJmdW5jIiwid2FpdCIsImxhc3RUaW1lIiwiZXhlY3V0ZWRGdW5jdGlvbiIsImNvbnRleHQiLCJhcmdzIiwibm93IiwiRGF0ZSIsImFwcGx5IiwiZGlzcGF0Y2hEb21FdmVudCIsImJ1YmJsZXMiLCJ0aHJvdHRsZWREcmFnT3ZlciIsImNhbGxiYWNrIiwiZHVyYXRpb24iLCJ0aHJvdHRsZWRDYWxsYmFjayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJwYXNzaXZlRmFsc2UiLCJwYXNzaXZlIiwiaXNUb3VjaCIsIm5hdmlnYXRvciIsIm1heFRvdWNoUG9pbnRzIiwibW91c2VFdmVudHMiLCJzdGFydCIsIm1vdmUiLCJlbmQiLCJ0b3VjaEV2ZW50cyIsInRyYW5zZm9ybVByb3BlcnR5IiwidHJhbnNpdGlvblByb3BlcnR5IiwiZ2V0VG91Y2hCeUlEIiwidG91Y2hJZCIsImNoYW5nZWRUb3VjaGVzIiwiaWRlbnRpZmllciIsInByZXZlbnREb3VibGVJbml0Iiwic29tZSIsImV4aXN0aW5nIiwiY29weVN0eWxlcyIsInNvdXJjZSIsImRlc3RpbmF0aW9uIiwiY3MiLCJ3aW5kb3ciLCJnZXRDb21wdXRlZFN0eWxlIiwia2V5IiwiY2hpbGRyZW4iLCJEcmFnZ2FibGUiLCJfZW5hYmxlIiwic3RhcnRCb3VuZGluZyIsInN0YXJ0UG9zaXRpb25pbmciLCJzdGFydExpc3RlbmluZyIsImJvdW5kaW5nIiwiYm91bmQiLCJwb2ludCIsIl9zZXREZWZhdWx0VHJhbnNpdGlvbiIsImlzQ29uc2lkZXJUcmFuc2Zvcm1PZmZzZXQiLCJjb250YWluZXIiLCJwaW5uZWRQb3NpdGlvbiIsIl9kcmFnU3RhcnQiLCJkcmFnU3RhcnQiLCJfZHJhZ01vdmUiLCJkcmFnTW92ZSIsIl9kcmFnRW5kIiwiZHJhZ0VuZCIsIl9uYXRpdmVEcmFnU3RhcnQiLCJuYXRpdmVEcmFnU3RhcnQiLCJfbmF0aXZlRHJhZ092ZXIiLCJuYXRpdmVEcmFnT3ZlciIsImRyYWdPdmVyVGhyb3R0bGVEdXJhdGlvbiIsIl9uYXRpdmVEcmFnRW5kIiwibmF0aXZlRHJhZ0VuZCIsIl9uYXRpdmVEcm9wIiwibmF0aXZlRHJvcCIsIl9zY3JvbGwiLCJvblNjcm9sbCIsImhhbmRsZXIiLCJnZXRTaXplIiwiZ2V0UG9zaXRpb24iLCJfdHJhbnNmb3JtUG9zaXRpb24iLCJfc2V0VHJhbnNpdGlvbiIsInRpbWUiLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbkNzcyIsInRlc3QiLCJyZXBsYWNlIiwiX3NldFRyYW5zbGF0ZSIsInRyYW5zbGF0ZUNzcyIsInRyYW5zZm9ybSIsInNob3VsZFJlbW92ZVplcm9UcmFuc2xhdGUiLCJpc1NpbGVudCIsImVtaXREcmFnRXZlbnQiLCJzaWxlbnQiLCJyZXNldFBvc2l0aW9uVG9Jbml0aWFsIiwicmVmcmVzaFBvc2l0aW9uIiwic2V0UG9zaXRpb24iLCJkZXRlcm1pbmVEaXJlY3Rpb24iLCJfcHJldmlvdXNEaXJlY3Rpb25Qb3NpdGlvbiIsIl9zdGFydFBvc2l0aW9uIiwibGVmdERpcmVjdGlvbiIsInJpZ2h0RGlyZWN0aW9uIiwidXBEaXJlY3Rpb24iLCJkb3duRGlyZWN0aW9uIiwic2VlbXNTY3JvbGxpbmciLCJfc3RhcnRUb3VjaFRpbWVzdGFtcCIsInRvdWNoRHJhZ2dpbmdUaHJlc2hvbGQiLCJzaG91bGRVc2VOYXRpdmVEcmFnQW5kRHJvcCIsImlzVG91Y2hFdmVudCIsIm5hdGl2ZURyYWdBbmREcm9wIiwiZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wT25Ub3VjaCIsInN0b3BQcm9wYWdhdGlvbk9uRHJhZ1N0YXJ0Iiwic3RvcFByb3BhZ2F0aW9uIiwiVG91Y2hFdmVudCIsInRvdWNoUG9pbnQiLCJfc3RhcnRUb3VjaFBvaW50IiwicGFnZVgiLCJjbGllbnRYIiwicGFnZVkiLCJjbGllbnRZIiwiX3RvdWNoSWQiLCJfc3RhcnRXaW5kb3dTY3JvbGxQb2ludCIsIndpbmRvd1Njcm9sbFBvaW50IiwiX3N0YXJ0U2Nyb2xsRWxlbWVudHNPZmZzZXQiLCJzY3JvbGxFbGVtZW50c09mZnNldCIsIkhUTUxJbnB1dEVsZW1lbnQiLCJmb2N1cyIsIl9zdGFydFBhcmVudHNTY3JvbGxPZmZzZXQiLCJwYXJlbnRzU2Nyb2xsT2Zmc2V0IiwiZW11bGF0ZU9uRmlyc3RNb3ZlIiwiY2FuY2VsRHJhZ2dpbmciLCJlbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3AiLCJjYW5jZWxFbXVsYXRpb24iLCJzY3JvbGxFbGVtZW50cyIsImRyYWdTdGFydFRocmVzaG9sZCIsIl9kcmFnU3RhcnRQZW5kaW5nIiwidG91Y2giLCJkeCIsImR5Iiwic3FydCIsImlzRHJhZ2dpbmciLCJjbGFzc0xpc3QiLCJzZXRUaW1lb3V0IiwicmVtb3ZlIiwiX2V2ZW50IiwiZGF0YVRyYW5zZmVyIiwic2V0RGF0YSIsImVmZmVjdEFsbG93ZWQiLCJkcm9wRWZmZWN0IiwicmVtb3ZlQXR0cmlidXRlIiwiY29udGFpbmVyUmVjdCIsImNsb25lZEVsZW1lbnQiLCJjbG9uZU5vZGUiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJlbXVsYXRpb25EcmFnZ2FibGUiLCJkb21FdmVudHMiLCJkcmFnOm1vdmUiLCJjb250YWluZXJSZWN0UG9pbnQiLCJkcmFnOmVuZCIsImRlc3Ryb3kiLCJyZW1vdmVDaGlsZCIsInR5cGUiLCJfY29udGFpbmVyIiwiX2hhbmRsZXIiLCJjb25zaWRlclRyYW5zZm9ybU9mZnNldCIsInNjcm9sbFgiLCJzY3JvbGxZIiwic2Nyb2xsUm9vdENvbnRhaW5lciIsIl9jYWNoZWRTY3JvbGxFbGVtZW50cyIsInNjcm9sbExlZnQiLCJzY3JvbGxUb3AiLCJwYXJlbnRzIiwiX2NhY2hlZFBhcmVudHMiLCJlbmFibGUiLCJkZWJvdW5jZSIsImltbWVkaWF0ZSIsInRpbWVvdXQiLCJsYXRlciIsImNsZWFyVGltZW91dCIsImdldERpc3RhbmNlIiwicDEiLCJwMiIsImdldFhEaWZmZXJlbmNlIiwiYWJzIiwiZ2V0WURpZmZlcmVuY2UiLCJ0cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5IiwicG93IiwiaW5kZXhPZk5lYXJlc3RQb2ludCIsImFyciIsInJhZGl1cyIsImdldERpc3RhbmNlRnVuYyIsInRlbXAiLCJMaXN0IiwiYXNzaWduIiwidGltZUV4Y2FuZ2UiLCJjaGFuZ2VkRHVyaW5nSXRlcmF0aW9uIiwiY29udHJvbGxlcnMiLCJNYXAiLCJyZXNpemVPYnNlcnZlciIsIlJlc2l6ZU9ic2VydmVyIiwib25SZXNpemUiLCJiaW5kIiwib2JzZXJ2ZSIsInJlb3JkZXJPbkNoYW5nZSIsImxpc3RlblRvIiwib25Nb3ZlIiwic2lnbmFsIiwic2lnbmFsRm9yIiwiaGFzIiwic2V0IiwiQWJvcnRDb250cm9sbGVyIiwiZ2V0IiwidW5vYnNlcnZlIiwiYWJvcnQiLCJkZWxldGUiLCJzd2FwcGluZ0Rpc2FibGVkIiwic29ydGVkRHJhZ2dhYmxlcyIsImdldFNvcnRlZERyYWdnYWJsZXMiLCJwaW5uZWRQb3NpdGlvbnMiLCJjdXJyZW50SW5kZXgiLCJ0YXJnZXRJbmRleCIsImRpc3RhbmNlRnVuYyIsImVtaXRMaXN0RXZlbnQiLCJyZW9yZGVyRWxlbWVudHMiLCJtb3ZlZERyYWdnYWJsZSIsIm5leHQiLCJpbnNlcnRCZWZvcmUiLCJkIiwibGlzdCIsImdldEN1cnJlbnRQaW5uZWRQb3NpdGlvbnMiLCJzb3J0aW5nIiwiQXJyYXkiLCJjb25jYXQiLCJpbml0aWFsUG9zaXRpb25zIiwiaiIsImNsZWFyIiwic2xpY2UiLCJkcmFnZ2FibGVBIiwiZHJhZ2dhYmxlQiIsIl9zd2FwcGluZ0Rpc2FibGVkIiwiZGlzYWJsZWQiLCJhcnJheU1vdmUiLCJmcm9tIiwidG8iLCJCdWJibGluZ0xpc3QiLCJhdXRvRGV0ZWN0R2FwIiwiX2dhcCIsImV4cGxpY2l0R2FwIiwic29ydGVkIiwiZmluZEluZGV4IiwiaXNDb25uZWN0ZWQiLCJjdXJyZW50IiwiYXV0b0RldGVjdFN0YXJ0UG9zaXRpb24iLCJzdGFydFBvc2l0aW9uIiwib25EcmFnU3RhcnQiLCJjYWNoZWRTb3J0ZWREcmFnZ2FibGVzIiwiaW5kZXhPZkFjdGl2ZURyYWdnYWJsZSIsInByZXZEcmFnZ2FibGUiLCJuZXh0RHJhZ2dhYmxlIiwiY3VycmVudFBvc2l0aW9uIiwiY3VycmVudE9yZGVyIiwiaXNNb3ZpbmdCYWNrd2FyZCIsInByZXZOZXdQb3NpdGlvbiIsIm5leHRQb3NpdGlvbiIsImNyb3NzQXhpcyIsImlzTW92aW5nRm9yd2FyZCIsImRyYWdnYWJsZU5ld1Bvc2l0aW9uIiwiYnViYmxpbmciLCJjdXJyZW50RHJhZ2dhYmxlIiwiaW5jbHVkZXMiLCJnYXAiLCJ2ZXJ0aWNhbEdhcCIsImdhcFZhbHVlIiwicmFuZ2UiLCJzdG9wIiwic3RlcCIsInJlc3VsdCIsImRpcmVjdENyb3NzaW5nIiwiTDFQMSIsIkwxUDIiLCJMMlAxIiwiTDJQMiIsImsxIiwiazIiLCJiMSIsImIyIiwiYm91bmRUb0xpbmUiLCJBIiwiQiIsIlAiLCJBUCIsIkFCIiwiYWIyIiwiYXBfYWIiLCJ0IiwiZ2V0UG9pbnRPbkxpbmVCeUxlbmdodCIsIkxQMSIsIkxQMiIsImxlbmdodCIsInBlcmNlbnQiLCJhZGRQb2ludFRvQm91bmRQb2ludHMiLCJib3VuZHBvaW50cyIsImlzUmlnaHQiLCJiUG9pbnQiLCJCYXNpY1N0cmF0ZWd5IiwiYm91bmRSZWN0IiwiTm90Q3Jvc3NpbmdTdHJhdGVneSIsInBvc2l0aW9uaW5nIiwicmVjdGFuZ2xlTGlzdCIsImluZGV4ZXNPZk5ld3MiLCJzdGF0aWNSZWN0YW5nbGVJbmRleGVzIiwiaW5kZXhlcyIsIl9yZWN0IiwicmVtb3ZhYmxlIiwiaW5kZXhPZlN0YXRpYyIsInN0YXRpY1JlY3QiLCJvZGxEcmFnZ2FibGVzTGlzdCIsIm5ld0RyYWdnYWJsZXMiLCJpbmRleE9mTmV3cyIsIkZsb2F0TGVmdFN0cmF0ZWd5IiwicGFkZGluZ1RvcExlZnQiLCJwYWRkaW5nQm90dG9tUmlnaHQiLCJ5R2FwQmV0d2VlbkRyYWdnYWJsZXMiLCJfaW5kZXhlc09mTmV3cyIsInJlY3RQMiIsImJvdW5kYXJ5UG9pbnRzIiwicmVjdEluZGV4IiwiaXNWYWxpZCIsIm5ld0xpc3QiLCJsaXN0T2xkUG9zaXRpb24iLCJuZXdEcmFnZ2FibGUiLCJGbG9hdFJpZ2h0U3RyYXRlZ3kiLCJwYWRkaW5nVG9wUmlnaHQiLCJwYWRkaW5nQm90dG9tTGVmdCIsInBhZGRpbmdCb3R0b21OZWdMZWZ0IiwiZ2V0QW5nbGVEaWZmIiwiYWxwaGEiLCJiZXRhIiwibWluQW5nbGUiLCJtYXhBbmdsZSIsIlBJIiwiZ2V0QW5nbGUiLCJkaWZmIiwibm9ybWFsaXplQW5nbGUiLCJhdGFuMiIsImJvdW5kQW5nbGUiLCJkbWluIiwiZG1heCIsImdldFBvaW50RnJvbVJhZGlhbFN5c3RlbSIsImFuZ2xlIiwiY2VudGVyIiwiY29zIiwic2luIiwiQm91bmQiLCJfc2l6ZSIsImluc3RhbmNlIiwiQm91bmRUb1JlY3RhbmdsZSIsImNhbGNQb2ludCIsIkJvdW5kVG9FbGVtZW50IiwiQm91bmRUb0xpbmVYIiwic3RhcnRZIiwiZW5kWSIsIkJvdW5kVG9MaW5lWSIsInN0YXJ0WCIsImVuZFgiLCJCb3VuZFRvTGluZSIsInN0YXJ0UG9pbnQiLCJlbmRQb2ludCIsInNvbWVLIiwiY29zQmV0YSIsInNpbkJldGEiLCJwb2ludDIiLCJuZXdFbmRQb2ludCIsInBvaW50Q3Jvc3NpbmciLCJCb3VuZFRvQ2lyY2xlIiwiQm91bmRUb0FyYyIsInN0YXJ0QW5nbGUiLCJlbmRBbmdsZSIsIl9zdGFydEFuZ2xlIiwiX2VuZEFuZ2xlIiwiVGFyZ2V0IiwicG9zaXRpb25pbmdTdHJhdGVneSIsInN0cmF0ZWd5IiwibGlzdGVuZXJzIiwiYWNjZXB0IiwiaW5kZXhlc09mTmV3Iiwib2xkRHJhZ2dhYmxlcyIsInJlY3RhbmdsZXMiLCJlbWl0VGFyZ2V0RXZlbnQiLCJ0YXJnZXRSZWN0YW5nbGUiLCJkcmFnZ2FibGVTcXVhcmUiLCJuZXdEcmFnZ2FibGVzSW5kZXgiLCJwdXNoSW5uZXJEcmFnZ2FibGUiLCJkb21UeXBlIiwibGV0dGVyIiwidG9Mb3dlckNhc2UiXSwibWFwcGluZ3MiOiI7OztFQUFlLFNBQVNBLGVBQWVBLENBQUNDLFlBQVksRUFBRUMsV0FBVyxFQUFFO0lBQ2xFLE1BQU1DLEtBQUssR0FBRyxFQUFFO0lBQ2YsSUFBSUMsT0FBTyxHQUFHSCxZQUFZO0VBRTFCLEVBQUEsT0FBTUcsT0FBTyxDQUFDQyxVQUFVLElBQUlELE9BQU8sS0FBS0YsV0FBVyxFQUFFO0VBQ25EQyxJQUFBQSxLQUFLLENBQUNHLE9BQU8sQ0FBQ0YsT0FBTyxDQUFDQyxVQUFVLENBQUM7TUFDakNELE9BQU8sR0FBR0EsT0FBTyxDQUFDQyxVQUFVO0VBQzlCO0VBRUEsRUFBQSxPQUFPRixLQUFLO0VBQ2Q7O0VDUkE7RUFDZSxNQUFNSSxLQUFLLENBQUM7RUFDekI7RUFDRjtFQUNBO0VBQ0E7RUFDQTtFQUNFQyxFQUFBQSxXQUFXQSxDQUFDQyxDQUFDLEVBQUVDLENBQUMsRUFBRTtNQUNoQixJQUFJLENBQUNELENBQUMsR0FBR0EsQ0FBQztNQUNWLElBQUksQ0FBQ0MsQ0FBQyxHQUFHQSxDQUFDO0VBQ1o7SUFFQUMsR0FBR0EsQ0FBQ0MsQ0FBQyxFQUFFO0VBQ0wsSUFBQSxPQUFPLElBQUlMLEtBQUssQ0FBQyxJQUFJLENBQUNFLENBQUMsR0FBR0csQ0FBQyxDQUFDSCxDQUFDLEVBQUUsSUFBSSxDQUFDQyxDQUFDLEdBQUdFLENBQUMsQ0FBQ0YsQ0FBQyxDQUFDO0VBQzlDO0lBRUFHLEdBQUdBLENBQUNELENBQUMs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
