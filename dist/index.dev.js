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

  class EventEmitter {
    constructor() {
      let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.events = {};
      if (options && options.on) {
        for (const [eventName, fn] of Object.entries(options.on)) {
          this.on(eventName, fn);
        }
      }
    }
    emit(eventName) {
      this.interrupted = false;
      if (!this.events[eventName]) return;

      // Iterate over a copy so listeners can unsubscribe while the event is being emitted
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      for (const func of this.events[eventName].slice()) {
        func(...args);
        if (this.interrupted) {
          return;
        }
      }
    }
    interrupt() {
      this.interrupted = true;
    }
    on(eventName, fn) {
      this.listeners(eventName).push(fn);
      return () => this.off(eventName, fn);
    }
    prependOn(eventName, fn) {
      this.listeners(eventName).unshift(fn);
      return () => this.off(eventName, fn);
    }
    once(eventName, fn) {
      var _this = this;
      const wrapper = function () {
        _this.off(eventName, wrapper);
        fn(...arguments);
      };
      wrapper.listener = fn;
      return this.on(eventName, wrapper);
    }
    off(eventName, fn) {
      if (!this.events[eventName]) return;
      const index = this.events[eventName].findIndex(listener => listener === fn || listener.listener === fn);
      if (index !== -1) {
        this.events[eventName].splice(index, 1);
      }
    }
    unsubscribe(eventName, fn) {
      this.off(eventName, fn);
    }
    listeners(eventName) {
      return this.events[eventName] ||= [];
    }
    resetEmitter() {
      this.events = {};
    }
    resetOn(eventName) {
      this.events[eventName] = [];
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
      this.emit('scope:change');
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
    element.dispatchEvent(new CustomEvent(eventName, {
      bubbles: true,
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
      this.emit(`drag:${type}`);
      if (this.domEvents) {
        dispatchDomEvent(this.element, `dragee:${type}`, {
          draggable: this
        });
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
      this.resetEmitter();
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
      this.unsubscribes = new Map();
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
      if (!this.unsubscribes.has(draggable)) {
        this.unsubscribes.set(draggable, []);
      }
      this.unsubscribes.get(draggable).push(draggable.on(eventName, handler));
    }
    releaseDraggable(draggable) {
      this.resizeObserver.unobserve(draggable.element);
      this.unsubscribes.get(draggable)?.forEach(unsubscribe => unsubscribe());
      this.unsubscribes.delete(draggable);
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
      this.emit(`list:${type}`);
      if (this.domEvents) {
        dispatchDomEvent(draggable.element, `dragee:list-${type}`, {
          list: this,
          draggable
        });
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
      this.unsubscribes = [];
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
      this.unsubscribes.forEach(unsubscribe => unsubscribe());
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
      this.unsubscribes.push(draggable.on('drag:move', () => this.remove(draggable)));
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
      this.emit(`target:${type}`, draggable);
      if (this.domEvents) {
        const domType = type.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`);
        dispatchDomEvent(this.element, `dragee:target-${domType}`, {
          target: this,
          draggable
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZGV2LmpzIiwic291cmNlcyI6WyIuLi9zcmMvdXRpbHMvZ2V0LXBhcmVudHMtY2hhaW4uanMiLCIuLi9zcmMvZ2VvbWV0cnkvcG9pbnQuanMiLCIuLi9zcmMvZ2VvbWV0cnkvcmVjdGFuZ2xlLmpzIiwiLi4vc3JjL2V2ZW50RW1pdHRlci5qcyIsIi4uL3NyYy91dGlscy9yZW1vdmUtYXJyYXktaXRlbS5qcyIsIi4uL3NyYy9zY29wZS5qcyIsIi4uL3NyYy91dGlscy90aHJvdHRsZS5qcyIsIi4uL3NyYy91dGlscy9kaXNwYXRjaC1kb20tZXZlbnQuanMiLCIuLi9zcmMvZHJhZ2dhYmxlLmpzIiwiLi4vc3JjL3V0aWxzL2RlYm91bmNlLmpzIiwiLi4vc3JjL2dlb21ldHJ5L2Rpc3RhbmNlcy5qcyIsIi4uL3NyYy9saXN0LmpzIiwiLi4vc3JjL2J1YmJsaW5nTGlzdC5qcyIsIi4uL3NyYy91dGlscy9yYW5nZS5qcyIsIi4uL3NyYy9nZW9tZXRyeS9ib3VuZHMuanMiLCIuLi9zcmMvcG9zaXRpb25pbmcuanMiLCIuLi9zcmMvZ2VvbWV0cnkvYW5nbGVzLmpzIiwiLi4vc3JjL2JvdW5kaW5nLmpzIiwiLi4vc3JjL3RhcmdldC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRQYXJlbnRzQ2hhaW4oY2hpbGRFbGVtZW50LCByb290RWxlbWVudCkge1xuXHRjb25zdCBjaGFpbiA9IFtdXG4gIGxldCBlbGVtZW50ID0gY2hpbGRFbGVtZW50XG5cbiAgd2hpbGUoZWxlbWVudC5wYXJlbnROb2RlICYmIGVsZW1lbnQgIT09IHJvb3RFbGVtZW50KSB7XG4gICAgY2hhaW4udW5zaGlmdChlbGVtZW50LnBhcmVudE5vZGUpXG4gICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZVxuICB9XG5cbiAgcmV0dXJuIGNoYWluXG59XG4iLCJpbXBvcnQgZ2V0UGFyZW50c0NoYWluIGZyb20gJy4uL3V0aWxzL2dldC1wYXJlbnRzLWNoYWluJ1xuXG4vKiogQ2xhc3MgcmVwcmVzZW50aW5nIGEgcG9pbnQuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2ludCB7XG4gIC8qKlxuICAqIENyZWF0ZSBhIHBvaW50LlxuICAqIEBwYXJhbSB7bnVtYmVyfSB4IC0gVGhlIHggdmFsdWUuXG4gICogQHBhcmFtIHtudW1iZXJ9IHkgLSBUaGUgeSB2YWx1ZS5cbiAgKi9cbiAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgIHRoaXMueCA9IHhcbiAgICB0aGlzLnkgPSB5XG4gIH1cblxuICBhZGQocCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54ICsgcC54LCB0aGlzLnkgKyBwLnkpXG4gIH1cblxuICBzdWIocCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54IC0gcC54LCB0aGlzLnkgLSBwLnkpXG4gIH1cblxuICBtdWx0KGspIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCAqIGssIHRoaXMueSAqIGspXG4gIH1cblxuICBuZWdhdGl2ZSgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KC10aGlzLngsIC10aGlzLnkpXG4gIH1cblxuICBjb21wYXJlKHApIHtcbiAgICByZXR1cm4gKHRoaXMueCA9PT0gcC54ICYmIHRoaXMueSA9PT0gcC55KVxuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLngsIHRoaXMueSlcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiBge3g9JHt0aGlzLnh9LHk9JHt0aGlzLnl9fWBcbiAgfVxuXG4gIHN0YXRpYyBlbGVtZW50T2Zmc2V0KGVsZW1lbnQsIHBhcmVudCkge1xuICAgIHBhcmVudCA9IHBhcmVudCB8fCBlbGVtZW50LnBhcmVudE5vZGVcbiAgICBpZiAocGFyZW50ID09PSBlbGVtZW50KSB7XG4gICAgICByZXR1cm4gbmV3IFBvaW50KDAsIDApO1xuICAgIH0gZWxzZSBpZiAocGFyZW50ID09PSBlbGVtZW50Lm9mZnNldFBhcmVudCkge1xuICAgICAgcmV0dXJuIG5ldyBQb2ludChcbiAgICAgICAgZWxlbWVudC5vZmZzZXRMZWZ0ICsgcGFyZW50LmNsaWVudExlZnQsXG4gICAgICAgIGVsZW1lbnQub2Zmc2V0VG9wICsgcGFyZW50LmNsaWVudFRvcFxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjb25zaWRlck9mZnNldEVsZW1lbnRzID0gW2VsZW1lbnQsIGdldFBhcmVudHNDaGFpbihlbGVtZW50LCBwYXJlbnQpLnBvcCgpXVxuICAgICAgcmV0dXJuIG5ldyBQb2ludChcbiAgICAgICAgY29uc2lkZXJPZmZzZXRFbGVtZW50cy5yZWR1Y2UoKHN1bSwgcCkgPT4gc3VtICsgcC5vZmZzZXRMZWZ0LCAwKSArIHBhcmVudC5jbGllbnRMZWZ0LFxuICAgICAgICBjb25zaWRlck9mZnNldEVsZW1lbnRzLnJlZHVjZSgoc3VtLCBwKSA9PiBzdW0gKyBwLm9mZnNldFRvcCwgMCkgKyBwYXJlbnQuY2xpZW50VG9wXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGVsZW1lbnRCb3VuZGluZ09mZnNldChlbGVtZW50LCBwYXJlbnQpIHtcbiAgICBwYXJlbnQgPSBwYXJlbnQgfHwgZWxlbWVudC5wYXJlbnROb2RlXG4gICAgY29uc3QgZWxlbWVudFJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgY29uc3QgcGFyZW50UmVjdCA9IHBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIHJldHVybiBuZXcgUG9pbnQoXG4gICAgICBlbGVtZW50UmVjdC5sZWZ0IC0gcGFyZW50UmVjdC5sZWZ0LFxuICAgICAgZWxlbWVudFJlY3QudG9wIC0gcGFyZW50UmVjdC50b3BcbiAgICApXG4gIH1cblxuICBzdGF0aWMgZWxlbWVudFNpemUoZWxlbWVudCkge1xuICAgIGNvbnN0IGVsZW1lbnRSZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIHJldHVybiBuZXcgUG9pbnQoXG4gICAgICBlbGVtZW50UmVjdC53aWR0aCxcbiAgICAgIGVsZW1lbnRSZWN0LmhlaWdodFxuICAgIClcbiAgfVxufVxuIiwiaW1wb3J0IFBvaW50IGZyb20gJy4vcG9pbnQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY3RhbmdsZSB7XG4gIGNvbnN0cnVjdG9yKHBvc2l0aW9uLCBzaXplKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgdGhpcy5zaXplID0gc2l6ZVxuICB9XG5cbiAgZ2V0UDEoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25cbiAgfVxuXG4gIGdldFAyKCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHRoaXMucG9zaXRpb24ueSlcbiAgfVxuXG4gIGdldFAzKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLnNpemUpXG4gIH1cblxuICBnZXRQNCgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnkpXG4gIH1cblxuICBnZXRDZW50ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb24uYWRkKHRoaXMuc2l6ZS5tdWx0KDAuNSkpXG4gIH1cblxuICBvcihyZWN0KSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBuZXcgUG9pbnQoTWF0aC5taW4odGhpcy5wb3NpdGlvbi54LCByZWN0LnBvc2l0aW9uLngpLCBNYXRoLm1pbih0aGlzLnBvc2l0aW9uLnksIHJlY3QucG9zaXRpb24ueSkpXG4gICAgY29uc3Qgc2l6ZSA9IChuZXcgUG9pbnQoTWF0aC5tYXgodGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHJlY3QucG9zaXRpb24ueCArIHJlY3Quc2l6ZS54KSwgTWF0aC5tYXgodGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnksIHJlY3QucG9zaXRpb24ueSArIHJlY3Quc2l6ZS55KSkpLnN1Yihwb3NpdGlvbilcbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZShwb3NpdGlvbiwgc2l6ZSlcbiAgfVxuXG4gIGFuZChyZWN0KSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBuZXcgUG9pbnQoTWF0aC5tYXgodGhpcy5wb3NpdGlvbi54LCByZWN0LnBvc2l0aW9uLngpLCBNYXRoLm1heCh0aGlzLnBvc2l0aW9uLnksIHJlY3QucG9zaXRpb24ueSkpXG4gICAgY29uc3Qgc2l6ZSA9IChuZXcgUG9pbnQoTWF0aC5taW4odGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHJlY3QucG9zaXRpb24ueCArIHJlY3Quc2l6ZS54KSwgTWF0aC5taW4odGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnksIHJlY3QucG9zaXRpb24ueSArIHJlY3Quc2l6ZS55KSkpLnN1Yihwb3NpdGlvbilcbiAgICBpZiAoc2l6ZS54IDw9IDAgfHwgc2l6ZS55IDw9IDApIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHBvc2l0aW9uLCBzaXplKVxuICB9XG5cbiAgaW5jbHVkZVBvaW50KHApIHtcbiAgICByZXR1cm4gISh0aGlzLnBvc2l0aW9uLnggPiBwLnggfHwgdGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLnggPCBwLnggfHwgdGhpcy5wb3NpdGlvbi55ID4gcC55IHx8IHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55IDwgcC55KVxuICB9XG5cbiAgaW5jbHVkZVJlY3RhbmdsZShyZWN0YW5nbGUpIHtcbiAgICByZXR1cm4gdGhpcy5pbmNsdWRlUG9pbnQocmVjdGFuZ2xlLnBvc2l0aW9uKSAmJiB0aGlzLmluY2x1ZGVQb2ludChyZWN0YW5nbGUuZ2V0UDMoKSlcbiAgfVxuXG4gIG1vdmVUb0JvdW5kKHJlY3QsIGF4aXMpIHtcbiAgICBsZXQgc2VsQXhpcywgY3Jvc3NSZWN0YW5nbGVcbiAgICBpZiAoYXhpcykge1xuICAgICAgc2VsQXhpcyA9IGF4aXNcbiAgICB9IGVsc2Uge1xuICAgICAgY3Jvc3NSZWN0YW5nbGUgPSB0aGlzLmFuZChyZWN0KVxuICAgICAgaWYgKCFjcm9zc1JlY3RhbmdsZSkge1xuICAgICAgICByZXR1cm4gcmVjdFxuICAgICAgfVxuICAgICAgc2VsQXhpcyA9IGNyb3NzUmVjdGFuZ2xlLnNpemUueCA+IGNyb3NzUmVjdGFuZ2xlLnNpemUueSA/ICd5JyA6ICd4J1xuICAgIH1cbiAgICBjb25zdCB0aGlzQ2VudGVyID0gdGhpcy5nZXRDZW50ZXIoKVxuICAgIGNvbnN0IHJlY3RDZW50ZXIgPSByZWN0LmdldENlbnRlcigpXG4gICAgY29uc3Qgc2lnbiA9IHRoaXNDZW50ZXJbc2VsQXhpc10gPiByZWN0Q2VudGVyW3NlbEF4aXNdID8gLTEgOiAxXG4gICAgY29uc3Qgb2Zmc2V0ID0gc2lnbiA+IDAgPyB0aGlzLnBvc2l0aW9uW3NlbEF4aXNdICsgdGhpcy5zaXplW3NlbEF4aXNdIC0gcmVjdC5wb3NpdGlvbltzZWxBeGlzXSA6IHRoaXMucG9zaXRpb25bc2VsQXhpc10gLSAocmVjdC5wb3NpdGlvbltzZWxBeGlzXSArIHJlY3Quc2l6ZVtzZWxBeGlzXSlcbiAgICByZWN0LnBvc2l0aW9uW3NlbEF4aXNdID0gcmVjdC5wb3NpdGlvbltzZWxBeGlzXSArIG9mZnNldFxuICAgIHJldHVybiByZWN0XG4gIH1cblxuICBnZXRTcXVhcmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZS54ICogdGhpcy5zaXplLnlcbiAgfVxuXG4gIHN0eWxlQXBwbHkoZWwpIHtcbiAgICBlbCA9IGVsIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2luZCcpXG4gICAgZWwuc3R5bGUubGVmdCA9IHRoaXMucG9zaXRpb24ueCArICdweCdcbiAgICBlbC5zdHlsZS50b3AgPSB0aGlzLnBvc2l0aW9uLnkgKyAncHgnXG4gICAgZWwuc3R5bGUud2lkdGggPSB0aGlzLnNpemUueCArICdweCdcbiAgICBlbC5zdHlsZS5oZWlnaHQgPSB0aGlzLnNpemUueSArICdweCdcbiAgfVxuXG4gIGdyb3d0aChzaXplKSB7XG4gICAgdGhpcy5zaXplID0gdGhpcy5zaXplLmFkZChzaXplKVxuICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uLmFkZChzaXplLm11bHQoLTAuNSkpXG4gIH1cblxuICBnZXRNaW5TaWRlKCkge1xuICAgIHJldHVybiBNYXRoLm1pbih0aGlzLnNpemUueCwgdGhpcy5zaXplLnkpXG4gIH1cblxuICBzdGF0aWMgZnJvbUVsZW1lbnQoZWxlbWVudCwgcGFyZW50PWVsZW1lbnQucGFyZW50Tm9kZSwgaXNDb25zaWRlclRyYW5zbGF0ZT1mYWxzZSkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gaXNDb25zaWRlclRyYW5zbGF0ZVxuICAgICAgPyBQb2ludC5lbGVtZW50Qm91bmRpbmdPZmZzZXQoZWxlbWVudCwgcGFyZW50KVxuICAgICAgOiBQb2ludC5lbGVtZW50T2Zmc2V0KGVsZW1lbnQsIHBhcmVudClcbiAgICBjb25zdCBzaXplID0gUG9pbnQuZWxlbWVudFNpemUoZWxlbWVudClcbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZShwb3NpdGlvbiwgc2l6ZSlcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKG9wdGlvbnMgPSB7fSkge1xuICAgIHRoaXMuZXZlbnRzID0ge31cblxuICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMub24pIHtcbiAgICAgIGZvciAoY29uc3QgW2V2ZW50TmFtZSwgZm5dIG9mIE9iamVjdC5lbnRyaWVzKG9wdGlvbnMub24pKSB7XG4gICAgICAgIHRoaXMub24oZXZlbnROYW1lLCBmbilcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBlbWl0KGV2ZW50TmFtZSwgLi4uYXJncykge1xuICAgIHRoaXMuaW50ZXJydXB0ZWQgPSBmYWxzZVxuXG4gICAgaWYgKCF0aGlzLmV2ZW50c1tldmVudE5hbWVdKSByZXR1cm5cblxuICAgIC8vIEl0ZXJhdGUgb3ZlciBhIGNvcHkgc28gbGlzdGVuZXJzIGNhbiB1bnN1YnNjcmliZSB3aGlsZSB0aGUgZXZlbnQgaXMgYmVpbmcgZW1pdHRlZFxuICAgIGZvciAoY29uc3QgZnVuYyBvZiB0aGlzLmV2ZW50c1tldmVudE5hbWVdLnNsaWNlKCkpIHtcbiAgICAgIGZ1bmMoLi4uYXJncylcbiAgICAgIGlmICh0aGlzLmludGVycnVwdGVkKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGludGVycnVwdCgpIHtcbiAgICB0aGlzLmludGVycnVwdGVkID0gdHJ1ZVxuICB9XG5cbiAgb24oZXZlbnROYW1lLCBmbikge1xuICAgIHRoaXMubGlzdGVuZXJzKGV2ZW50TmFtZSkucHVzaChmbilcbiAgICByZXR1cm4gKCkgPT4gdGhpcy5vZmYoZXZlbnROYW1lLCBmbilcbiAgfVxuXG4gIHByZXBlbmRPbihldmVudE5hbWUsIGZuKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMoZXZlbnROYW1lKS51bnNoaWZ0KGZuKVxuICAgIHJldHVybiAoKSA9PiB0aGlzLm9mZihldmVudE5hbWUsIGZuKVxuICB9XG5cbiAgb25jZShldmVudE5hbWUsIGZuKSB7XG4gICAgY29uc3Qgd3JhcHBlciA9ICguLi5hcmdzKSA9PiB7XG4gICAgICB0aGlzLm9mZihldmVudE5hbWUsIHdyYXBwZXIpXG4gICAgICBmbiguLi5hcmdzKVxuICAgIH1cbiAgICB3cmFwcGVyLmxpc3RlbmVyID0gZm5cbiAgICByZXR1cm4gdGhpcy5vbihldmVudE5hbWUsIHdyYXBwZXIpXG4gIH1cblxuICBvZmYoZXZlbnROYW1lLCBmbikge1xuICAgIGlmICghdGhpcy5ldmVudHNbZXZlbnROYW1lXSkgcmV0dXJuXG5cbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0uZmluZEluZGV4KChsaXN0ZW5lcikgPT4gbGlzdGVuZXIgPT09IGZuIHx8IGxpc3RlbmVyLmxpc3RlbmVyID09PSBmbilcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLnNwbGljZShpbmRleCwgMSlcbiAgICB9XG4gIH1cblxuICB1bnN1YnNjcmliZShldmVudE5hbWUsIGZuKSB7XG4gICAgdGhpcy5vZmYoZXZlbnROYW1lLCBmbilcbiAgfVxuXG4gIGxpc3RlbmVycyhldmVudE5hbWUpIHtcbiAgICByZXR1cm4gKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gfHw9IFtdKVxuICB9XG5cbiAgcmVzZXRFbWl0dGVyICgpIHtcbiAgICB0aGlzLmV2ZW50cyA9IHt9XG4gIH1cblxuICByZXNldE9uKGV2ZW50TmFtZSkge1xuICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSBbXVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhcnJheSwgdmFsKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoYXJyYXlbaV0gPT09IHZhbCkge1xuICAgICAgYXJyYXkuc3BsaWNlKGksIDEpXG4gICAgICBpLS1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycmF5XG59XG4iLCJpbXBvcnQgcmVtb3ZlSXRlbSBmcm9tICcuL3V0aWxzL3JlbW92ZS1hcnJheS1pdGVtJ1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50RW1pdHRlcidcblxuY29uc3Qgc2NvcGVzID0gW11cbmNvbnN0IHNjb3BlU3RhY2sgPSBbXVxuXG5jbGFzcyBTY29wZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKGRyYWdnYWJsZXMsIHRhcmdldHMsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcihvcHRpb25zKVxuICAgIHNjb3Blcy5mb3JFYWNoKChzY29wZSkgPT4ge1xuICAgICAgaWYgKGRyYWdnYWJsZXMpIHtcbiAgICAgICAgZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHNjb3BlLnJlbGVhc2VEcmFnZ2FibGUoZHJhZ2dhYmxlKSlcbiAgICAgIH1cblxuICAgICAgaWYgKHRhcmdldHMpIHtcbiAgICAgICAgdGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHNjb3BlLnJlbGVhc2VUYXJnZXQodGFyZ2V0KSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gZHJhZ2dhYmxlcyB8fCBbXVxuICAgIHRoaXMudGFyZ2V0cyA9IHRhcmdldHMgfHwgW11cbiAgICBzY29wZXMucHVzaCh0aGlzKVxuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgIHRpbWVFbmQ6IChvcHRpb25zLnRpbWVFbmQpIHx8IDQwMFxuICAgIH1cblxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHRoaXMuaW5pdERyYWdnYWJsZShkcmFnZ2FibGUpKVxuICB9XG5cbiAgYWRkRHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIHNjb3Blcy5mb3JFYWNoKChzY29wZSkgPT4gc2NvcGUucmVsZWFzZURyYWdnYWJsZShkcmFnZ2FibGUpKVxuICAgIHRoaXMuZHJhZ2dhYmxlcy5wdXNoKGRyYWdnYWJsZSlcbiAgICB0aGlzLmluaXREcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICB9XG5cbiAgaW5pdERyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICBkcmFnZ2FibGUuZHJhZ0VuZEFjdGlvbiA9ICgpID0+IHRoaXMub25FbmQoZHJhZ2dhYmxlKVxuICB9XG5cbiAgcmVsZWFzZURyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICByZW1vdmVJdGVtKHRoaXMuZHJhZ2dhYmxlcywgZHJhZ2dhYmxlKVxuICB9XG5cbiAgYWRkVGFyZ2V0KHRhcmdldCkge1xuICAgIHNjb3Blcy5mb3JFYWNoKChzY29wZSkgPT4gc2NvcGUucmVsZWFzZVRhcmdldCh0YXJnZXQpKVxuICAgIHRoaXMudGFyZ2V0cy5wdXNoKHRhcmdldClcbiAgfVxuXG4gIHJlbGVhc2VUYXJnZXQodGFyZ2V0KSB7XG4gICAgcmVtb3ZlSXRlbSh0aGlzLnRhcmdldHMsIHRhcmdldClcbiAgfVxuXG4gIG9uRW5kKGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IHNob3RUYXJnZXRzID0gdGhpcy50YXJnZXRzLmZpbHRlcigodGFyZ2V0KSA9PiB7XG4gICAgICByZXR1cm4gdGFyZ2V0LmRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMVxuICAgIH0pLmZpbHRlcigodGFyZ2V0KSA9PiB7XG4gICAgICByZXR1cm4gdGFyZ2V0LmNhdGNoRHJhZ2dhYmxlKGRyYWdnYWJsZSlcbiAgICB9KS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICByZXR1cm4gYS5nZXRSZWN0YW5nbGUoKS5nZXRTcXVhcmUoKSAtIGIuZ2V0UmVjdGFuZ2xlKCkuZ2V0U3F1YXJlKClcbiAgICB9KVxuXG4gICAgaWYgKHNob3RUYXJnZXRzLmxlbmd0aCkge1xuICAgICAgc2hvdFRhcmdldHNbMF0ub25FbmQoZHJhZ2dhYmxlKVxuICAgIH0gZWxzZSBpZiAoZHJhZ2dhYmxlLnRhcmdldHMubGVuZ3RoKSB7XG4gICAgICBkcmFnZ2FibGUucGluUG9zaXRpb24oZHJhZ2dhYmxlLmluaXRpYWxQb3NpdGlvbiwgdGhpcy5vcHRpb25zLnRpbWVFbmQpXG4gICAgfVxuXG4gICAgdGhpcy5lbWl0KCdzY29wZTpjaGFuZ2UnKVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy50YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4gdGFyZ2V0LnJlc2V0KCkpXG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5yZWZyZXNoKCkpXG4gICAgdGhpcy50YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4gdGFyZ2V0LnJlZnJlc2goKSlcbiAgfVxuXG4gIGdldCBwb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0cy5tYXAoKHRhcmdldCkgPT4ge1xuICAgICAgcmV0dXJuIHRhcmdldC5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHRoaXMuZHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkpXG4gICAgfSlcbiAgfVxuXG4gIHNldCBwb3NpdGlvbnMocG9zaXRpb25zKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9ICd3cm9uZyBhcnJheSBsZW5ndGgnXG4gICAgaWYgKHBvc2l0aW9ucy5sZW5ndGggPT09IHRoaXMudGFyZ2V0cy5sZW5ndGgpIHtcbiAgICAgIHRoaXMudGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHRhcmdldC5yZXNldCgpKVxuXG4gICAgICBwb3NpdGlvbnMuZm9yRWFjaCgodGFyZ2V0SW5kZXhlcywgaSkgPT4ge1xuICAgICAgICB0YXJnZXRJbmRleGVzLmZvckVhY2goKGluZGV4KSA9PiB7XG4gICAgICAgICAgdGhpcy50YXJnZXRzW2ldLmFkZCh0aGlzLmRyYWdnYWJsZXNbaW5kZXhdKVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbWVzc2FnZVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBkZWZhdWx0U2NvcGUgPSBuZXcgU2NvcGUoKVxuXG5mdW5jdGlvbiBjdXJyZW50U2NvcGUoKSB7XG4gIHJldHVybiBzY29wZVN0YWNrW3Njb3BlU3RhY2subGVuZ3RoIC0gMV0gfHwgZGVmYXVsdFNjb3BlXG59XG5cbmZ1bmN0aW9uIHNjb3BlKGZuKSB7XG4gIGNvbnN0IGN1cnJlbnRTY29wZSA9IG5ldyBTY29wZSgpXG5cbiAgc2NvcGVTdGFjay5wdXNoKGN1cnJlbnRTY29wZSlcbiAgdHJ5IHtcbiAgICBmbi5jYWxsKClcbiAgfSBmaW5hbGx5IHtcbiAgICBzY29wZVN0YWNrLnBvcCgpXG4gIH1cbiAgcmV0dXJuIGN1cnJlbnRTY29wZVxufVxuXG5leHBvcnQgeyBzY29wZXMsIGRlZmF1bHRTY29wZSwgY3VycmVudFNjb3BlLCBTY29wZSwgc2NvcGUgfVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGhyb3R0bGUoZnVuYywgd2FpdCkge1xuICBsZXQgbGFzdFRpbWUgPSAwXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGV4ZWN1dGVkRnVuY3Rpb24oKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXNcbiAgICBjb25zdCBhcmdzID0gYXJndW1lbnRzXG5cbiAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpXG4gICAgaWYgKG5vdyAtIGxhc3RUaW1lID49IHdhaXQpIHtcbiAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncylcbiAgICAgIGxhc3RUaW1lID0gbm93XG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwYXRjaERvbUV2ZW50KGVsZW1lbnQsIGV2ZW50TmFtZSwgZGV0YWlsKSB7XG4gIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoZXZlbnROYW1lLCB7IGJ1YmJsZXM6IHRydWUsIGRldGFpbCB9KSlcbn1cbiIsImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudEVtaXR0ZXInXG5pbXBvcnQgUG9pbnQgZnJvbSAnLi9nZW9tZXRyeS9wb2ludCdcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSAnLi9nZW9tZXRyeS9yZWN0YW5nbGUnXG5pbXBvcnQgeyBzY29wZXMsIGN1cnJlbnRTY29wZSB9IGZyb20gJy4vc2NvcGUnXG5pbXBvcnQgdGhyb3R0bGUgZnJvbSAnLi91dGlscy90aHJvdHRsZSdcbmltcG9ydCBnZXRQYXJlbnRzQ2hhaW4gZnJvbSAnLi91dGlscy9nZXQtcGFyZW50cy1jaGFpbidcbmltcG9ydCBkaXNwYXRjaERvbUV2ZW50IGZyb20gJy4vdXRpbHMvZGlzcGF0Y2gtZG9tLWV2ZW50J1xuXG5jb25zdCB0aHJvdHRsZWREcmFnT3ZlciA9IChjYWxsYmFjaywgZHVyYXRpb24pID0+IHtcbiAgY29uc3QgdGhyb3R0bGVkQ2FsbGJhY2sgPSB0aHJvdHRsZSgoZXZlbnQpID0+IGNhbGxiYWNrKGV2ZW50KSwgZHVyYXRpb24pXG4gIHJldHVybiAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhyb3R0bGVkQ2FsbGJhY2soZXZlbnQpXG4gIH1cbn1cblxuY29uc3QgcGFzc2l2ZUZhbHNlID0geyBwYXNzaXZlOiBmYWxzZSB9XG5cbmNvbnN0IGlzVG91Y2ggPSBuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHMgPiAwXG5jb25zdCBtb3VzZUV2ZW50cyA9IHtcbiAgc3RhcnQ6ICdtb3VzZWRvd24nLFxuICBtb3ZlOiAnbW91c2Vtb3ZlJyxcbiAgZW5kOiAnbW91c2V1cCdcbn1cbmNvbnN0IHRvdWNoRXZlbnRzID0ge1xuICBzdGFydDogJ3RvdWNoc3RhcnQnLFxuICBtb3ZlOiAndG91Y2htb3ZlJyxcbiAgZW5kOiAndG91Y2hlbmQnXG59XG5jb25zdCBkcmFnZ2FibGVzID0gW11cbmNvbnN0IHRyYW5zZm9ybVByb3BlcnR5ID0gJ3RyYW5zZm9ybSdcbmNvbnN0IHRyYW5zaXRpb25Qcm9wZXJ0eSA9ICd0cmFuc2l0aW9uJ1xuXG5mdW5jdGlvbiBnZXRUb3VjaEJ5SUQoZWxlbWVudCwgdG91Y2hJZCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnQuY2hhbmdlZFRvdWNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZWxlbWVudC5jaGFuZ2VkVG91Y2hlc1tpXS5pZGVudGlmaWVyID09PSB0b3VjaElkKSB7XG4gICAgICByZXR1cm4gZWxlbWVudC5jaGFuZ2VkVG91Y2hlc1tpXVxuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cblxuZnVuY3Rpb24gcHJldmVudERvdWJsZUluaXQoZHJhZ2dhYmxlKSB7XG4gIGNvbnN0IG1lc3NhZ2UgPSBcImZvciB0aGlzIGVsZW1lbnQgRHJhZ2VlLkRyYWdnYWJsZSBpcyBhbHJlYWR5IGV4aXN0LCBkb24ndCBjcmVhdGUgaXQgdHdpY2UgXCJcbiAgaWYgKGRyYWdnYWJsZXMuc29tZSgoZXhpc3RpbmcpID0+IGRyYWdnYWJsZS5lbGVtZW50ID09PSBleGlzdGluZy5lbGVtZW50KSkge1xuICAgIHRocm93IG1lc3NhZ2VcbiAgfVxuICBkcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxufVxuXG5mdW5jdGlvbiBjb3B5U3R5bGVzKHNvdXJjZSwgZGVzdGluYXRpb24pIHtcbiAgY29uc3QgY3MgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShzb3VyY2UpXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGtleSA9IGNzW2ldXG4gICAgaWYgKChrZXkuaW5kZXhPZigndHJhbnNpdGlvbicpIDwgMCkgJiYgKGtleS5pbmRleE9mKCd0cmFuc2Zvcm0nKSA8IDApKSB7XG4gICAgICBkZXN0aW5hdGlvbi5zdHlsZVtrZXldID0gY3Nba2V5XVxuICAgIH1cbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc291cmNlLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgY29weVN0eWxlcyhzb3VyY2UuY2hpbGRyZW5baV0sIGRlc3RpbmF0aW9uLmNoaWxkcmVuW2ldKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYWdnYWJsZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcihvcHRpb25zKVxuICAgIHRoaXMudGFyZ2V0cyA9IFtdXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9uc1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgICBwcmV2ZW50RG91YmxlSW5pdCh0aGlzKVxuICAgIGNvbnN0IHNjb3BlID0gb3B0aW9ucy5zY29wZSB8fCBjdXJyZW50U2NvcGUoKVxuICAgIHNjb3BlLmFkZERyYWdnYWJsZSh0aGlzKVxuICAgIHRoaXMuX2VuYWJsZSA9IHRydWVcbiAgICB0aGlzLnN0YXJ0Qm91bmRpbmcoKVxuICAgIHRoaXMuc3RhcnRQb3NpdGlvbmluZygpXG4gICAgdGhpcy5zdGFydExpc3RlbmluZygpXG4gIH1cblxuICBzdGFydEJvdW5kaW5nKCkge1xuICAgIHRoaXMuYm91bmRpbmcgPSB0aGlzLm9wdGlvbnMuYm91bmRpbmcgfHwge1xuICAgICAgYm91bmQ6IHRoaXMub3B0aW9ucy5ib3VuZCB8fCAoKHBvaW50KSA9PiBwb2ludClcbiAgICB9XG4gIH1cblxuICBzdGFydFBvc2l0aW9uaW5nKCkge1xuICAgIHRoaXMuX3NldERlZmF1bHRUcmFuc2l0aW9uKClcbiAgICB0aGlzLm9mZnNldCA9IHRoaXMuaXNDb25zaWRlclRyYW5zZm9ybU9mZnNldFxuICAgICAgPyBQb2ludC5lbGVtZW50Qm91bmRpbmdPZmZzZXQodGhpcy5lbGVtZW50LCB0aGlzLmNvbnRhaW5lcilcbiAgICAgIDogUG9pbnQuZWxlbWVudE9mZnNldCh0aGlzLmVsZW1lbnQsIHRoaXMuY29udGFpbmVyKVxuICAgIHRoaXMucGlubmVkUG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICAgIHRoaXMuaW5pdGlhbFBvc2l0aW9uID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uIHx8IHRoaXMub2Zmc2V0XG5cbiAgICB0aGlzLnBpblBvc2l0aW9uKHRoaXMuaW5pdGlhbFBvc2l0aW9uKVxuXG4gICAgaWYgKHRoaXMuYm91bmRpbmcucmVmcmVzaCkge1xuICAgICAgdGhpcy5ib3VuZGluZy5yZWZyZXNoKClcbiAgICB9XG4gIH1cblxuICBzdGFydExpc3RlbmluZygpIHtcbiAgICB0aGlzLl9kcmFnU3RhcnQgPSAoZXZlbnQpID0+IHRoaXMuZHJhZ1N0YXJ0KGV2ZW50KVxuICAgIHRoaXMuX2RyYWdNb3ZlID0gKGV2ZW50KSA9PiB0aGlzLmRyYWdNb3ZlKGV2ZW50KVxuICAgIHRoaXMuX2RyYWdFbmQgPSAoZXZlbnQpID0+IHRoaXMuZHJhZ0VuZChldmVudClcbiAgICB0aGlzLl9uYXRpdmVEcmFnU3RhcnQgPSAoZXZlbnQpID0+IHRoaXMubmF0aXZlRHJhZ1N0YXJ0KGV2ZW50KVxuICAgIHRoaXMuX25hdGl2ZURyYWdPdmVyID0gdGhyb3R0bGVkRHJhZ092ZXIoKGV2ZW50KSA9PiB0aGlzLm5hdGl2ZURyYWdPdmVyKGV2ZW50KSwgdGhpcy5kcmFnT3ZlclRocm90dGxlRHVyYXRpb24pXG4gICAgdGhpcy5fbmF0aXZlRHJhZ0VuZCA9IChldmVudCkgPT4gdGhpcy5uYXRpdmVEcmFnRW5kKGV2ZW50KVxuICAgIHRoaXMuX25hdGl2ZURyb3AgPSAoZXZlbnQpID0+IHRoaXMubmF0aXZlRHJvcChldmVudClcbiAgICB0aGlzLl9zY3JvbGwgPSAoZXZlbnQpID0+IHRoaXMub25TY3JvbGwoZXZlbnQpXG5cbiAgICB0aGlzLmhhbmRsZXIuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0LCBwYXNzaXZlRmFsc2UpXG4gICAgdGhpcy5oYW5kbGVyLmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydCwgcGFzc2l2ZUZhbHNlKVxuICB9XG5cbiAgZ2V0U2l6ZSgpIHtcbiAgICByZXR1cm4gUG9pbnQuZWxlbWVudFNpemUodGhpcy5lbGVtZW50KVxuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMub2Zmc2V0LmFkZCh0aGlzLl90cmFuc2Zvcm1Qb3NpdGlvbiB8fCBuZXcgUG9pbnQoMCwgMCkpXG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25cbiAgfVxuXG4gIGdldENlbnRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi5hZGQodGhpcy5nZXRTaXplKCkubXVsdCgwLjUpKVxuICB9XG5cbiAgX3NldERlZmF1bHRUcmFuc2l0aW9uICgpIHtcbiAgICBpZiAoIXRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNpdGlvblByb3BlcnR5XSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZWxlbWVudClbdHJhbnNpdGlvblByb3BlcnR5XVxuICAgIH1cbiAgfVxuXG4gIF9zZXRUcmFuc2l0aW9uKHRpbWUpIHtcbiAgICBsZXQgdHJhbnNpdGlvbiA9IHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldXG4gICAgY29uc3QgdHJhbnNpdGlvbkNzcyA9IGB0cmFuc2Zvcm0gJHt0aW1lfW1zYFxuXG4gICAgaWYgKCEvdHJhbnNmb3JtXFxzP1xcZCptP3M/Ly50ZXN0KHRyYW5zaXRpb24pKSB7XG4gICAgICBpZiAodHJhbnNpdGlvbikge1xuICAgICAgICB0cmFuc2l0aW9uICs9IGAsICR7dHJhbnNpdGlvbkNzc31gXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cmFuc2l0aW9uID0gdHJhbnNpdGlvbkNzc1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0cmFuc2l0aW9uID0gdHJhbnNpdGlvbi5yZXBsYWNlKC90cmFuc2Zvcm1cXHM/XFxkKm0/cz8vZywgdHJhbnNpdGlvbkNzcylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV0gIT09IHRyYW5zaXRpb24pIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldID0gdHJhbnNpdGlvblxuICAgIH1cbiAgfVxuXG4gIF9zZXRUcmFuc2xhdGUocG9pbnQpIHtcbiAgICB0aGlzLl90cmFuc2Zvcm1Qb3NpdGlvbiA9IHBvaW50XG4gICAgY29uc3QgdHJhbnNsYXRlQ3NzID0gYHRyYW5zbGF0ZTNkKCR7cG9pbnQueH1weCwgJHtwb2ludC55fXB4LCAwcHgpYFxuXG4gICAgbGV0IHRyYW5zZm9ybSA9IHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wZXJ0eV1cblxuICAgIGlmICh0aGlzLnNob3VsZFJlbW92ZVplcm9UcmFuc2xhdGUgJiYgcG9pbnQueCA9PT0gMCAmJiBwb2ludC55ID09PSAwKSB7XG4gICAgICB0cmFuc2Zvcm0gPSB0cmFuc2Zvcm0ucmVwbGFjZSgvdHJhbnNsYXRlM2RcXChbXildK1xcKS8sICcnKVxuICAgIH0gZWxzZSBpZiAoIS90cmFuc2xhdGUzZFxcKFteKV0rXFwpLy50ZXN0KHRyYW5zZm9ybSkpIHtcbiAgICAgIGlmICh0cmFuc2Zvcm0pIHtcbiAgICAgICAgdHJhbnNmb3JtICs9ICcgJ1xuICAgICAgfVxuICAgICAgdHJhbnNmb3JtICs9IHRyYW5zbGF0ZUNzc1xuICAgIH0gZWxzZSB7XG4gICAgICB0cmFuc2Zvcm0gPSB0cmFuc2Zvcm0ucmVwbGFjZSgvdHJhbnNsYXRlM2RcXChbXildK1xcKS8sIHRyYW5zbGF0ZUNzcylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BlcnR5XSAhPT0gdHJhbnNmb3JtKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcGVydHldID0gdHJhbnNmb3JtXG4gICAgfVxuICB9XG5cbiAgbW92ZShwb2ludCwgdGltZT0wLCBpc1NpbGVudD1mYWxzZSkge1xuICAgIHBvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIHRoaXMucG9zaXRpb24gPSBwb2ludFxuXG4gICAgdGhpcy5fc2V0VHJhbnNpdGlvbih0aW1lKVxuICAgIHRoaXMuX3NldFRyYW5zbGF0ZShwb2ludC5zdWIodGhpcy5vZmZzZXQpKVxuXG4gICAgaWYgKCFpc1NpbGVudCkge1xuICAgICAgdGhpcy5lbWl0RHJhZ0V2ZW50KCdtb3ZlJylcbiAgICB9XG4gIH1cblxuICBwaW5Qb3NpdGlvbihwb2ludCwgdGltZT0wLCBzaWxlbnQ9dHJ1ZSkge1xuICAgIHRoaXMucGlubmVkUG9zaXRpb24gPSBwb2ludC5jbG9uZSgpXG4gICAgdGhpcy5tb3ZlKHRoaXMucGlubmVkUG9zaXRpb24sIHRpbWUsIHNpbGVudClcbiAgfVxuXG4gIHJlc2V0UG9zaXRpb25Ub0luaXRpYWwgKCkge1xuICAgIHRoaXMucGluUG9zaXRpb24odGhpcy5pbml0aWFsUG9zaXRpb24pXG4gIH1cblxuICByZWZyZXNoUG9zaXRpb24gKCkge1xuICAgIHRoaXMuc2V0UG9zaXRpb24odGhpcy5nZXRQb3NpdGlvbigpKVxuICB9XG5cbiAgc2V0UG9zaXRpb24ocG9pbnQpIHtcbiAgICBwb2ludCA9IHBvaW50LmNsb25lKClcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9pbnRcbiAgICB0aGlzLl9zZXRUcmFuc2l0aW9uKDApXG4gICAgdGhpcy5fc2V0VHJhbnNsYXRlKHBvaW50LnN1Yih0aGlzLm9mZnNldCkpXG4gIH1cblxuICBkZXRlcm1pbmVEaXJlY3Rpb24ocG9pbnQpIHtcbiAgICB0aGlzLl9wcmV2aW91c0RpcmVjdGlvblBvc2l0aW9uIHx8PSB0aGlzLl9zdGFydFBvc2l0aW9uXG5cbiAgICB0aGlzLmxlZnREaXJlY3Rpb24gPSAodGhpcy5fcHJldmlvdXNEaXJlY3Rpb25Qb3NpdGlvbi54ID4gcG9pbnQueClcbiAgICB0aGlzLnJpZ2h0RGlyZWN0aW9uID0gKHRoaXMuX3ByZXZpb3VzRGlyZWN0aW9uUG9zaXRpb24ueCA8IHBvaW50LngpXG4gICAgdGhpcy51cERpcmVjdGlvbiA9ICh0aGlzLl9wcmV2aW91c0RpcmVjdGlvblBvc2l0aW9uLnkgPiBwb2ludC55KVxuICAgIHRoaXMuZG93bkRpcmVjdGlvbiA9ICh0aGlzLl9wcmV2aW91c0RpcmVjdGlvblBvc2l0aW9uLnkgPCBwb2ludC55KVxuXG4gICAgdGhpcy5fcHJldmlvdXNEaXJlY3Rpb25Qb3NpdGlvbiA9IHBvaW50XG4gIH1cblxuICBzZWVtc1Njcm9sbGluZygpIHtcbiAgICByZXR1cm4gKCtuZXcgRGF0ZSgpIC0gdGhpcy5fc3RhcnRUb3VjaFRpbWVzdGFtcCkgPCB0aGlzLnRvdWNoRHJhZ2dpbmdUaHJlc2hvbGRcbiAgfVxuXG4gIHNob3VsZFVzZU5hdGl2ZURyYWdBbmREcm9wKCkge1xuICAgIGlmICh0aGlzLmlzVG91Y2hFdmVudCkge1xuICAgICAgcmV0dXJuIHRoaXMubmF0aXZlRHJhZ0FuZERyb3AgJiYgdGhpcy5lbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3BPblRvdWNoXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLm5hdGl2ZURyYWdBbmREcm9wXG4gICAgfVxuICB9XG5cbiAgZHJhZ1N0YXJ0KGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLl9lbmFibGUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLnN0b3BQcm9wYWdhdGlvbk9uRHJhZ1N0YXJ0KSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIH1cblxuICAgIHRoaXMuaXNUb3VjaEV2ZW50ID0gKGlzVG91Y2ggJiYgKGV2ZW50IGluc3RhbmNlb2Ygd2luZG93LlRvdWNoRXZlbnQpKVxuXG4gICAgdGhpcy50b3VjaFBvaW50ID0gdGhpcy5fc3RhcnRUb3VjaFBvaW50ID0gbmV3IFBvaW50KFxuICAgICAgdGhpcy5pc1RvdWNoRXZlbnQgPyBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCA6IGV2ZW50LmNsaWVudFgsXG4gICAgICB0aGlzLmlzVG91Y2hFdmVudCA/IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZIDogZXZlbnQuY2xpZW50WVxuICAgIClcblxuICAgIHRoaXMuX3N0YXJ0UG9zaXRpb24gPSB0aGlzLmdldFBvc2l0aW9uKClcbiAgICBpZiAodGhpcy5pc1RvdWNoRXZlbnQpIHtcbiAgICAgIHRoaXMuX3RvdWNoSWQgPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5pZGVudGlmaWVyXG4gICAgICB0aGlzLl9zdGFydFRvdWNoVGltZXN0YW1wID0gK25ldyBEYXRlKClcbiAgICB9XG5cbiAgICB0aGlzLl9zdGFydFdpbmRvd1Njcm9sbFBvaW50ID0gdGhpcy53aW5kb3dTY3JvbGxQb2ludFxuICAgIHRoaXMuX3N0YXJ0U2Nyb2xsRWxlbWVudHNPZmZzZXQgPSB0aGlzLnNjcm9sbEVsZW1lbnRzT2Zmc2V0XG5cbiAgICBpZiAoZXZlbnQudGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJbnB1dEVsZW1lbnQgfHxcbiAgICAgICAgICBldmVudC50YXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElucHV0RWxlbWVudCkge1xuICAgICAgZXZlbnQudGFyZ2V0LmZvY3VzKClcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zaG91bGRVc2VOYXRpdmVEcmFnQW5kRHJvcCgpKSB7XG4gICAgICBpZiAodGhpcy5pc1RvdWNoRXZlbnQgJiYgdGhpcy5lbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3BPblRvdWNoKSB7XG4gICAgICAgIHRoaXMuX3N0YXJ0UGFyZW50c1Njcm9sbE9mZnNldCA9IHRoaXMucGFyZW50c1Njcm9sbE9mZnNldFxuXG4gICAgICAgIGNvbnN0IGVtdWxhdGVPbkZpcnN0TW92ZSA9IChldmVudCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLnNlZW1zU2Nyb2xsaW5nKCkpIHtcbiAgICAgICAgICAgIHRoaXMuY2FuY2VsRHJhZ2dpbmcoKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcChldmVudClcbiAgICAgICAgICB9XG4gICAgICAgICAgY2FuY2VsRW11bGF0aW9uKClcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjYW5jZWxFbXVsYXRpb24gPSAoKSA9PiB7XG4gICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCBlbXVsYXRlT25GaXJzdE1vdmUpXG4gICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIGNhbmNlbEVtdWxhdGlvbilcbiAgICAgICAgfVxuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgZW11bGF0ZU9uRmlyc3RNb3ZlLCBwYXNzaXZlRmFsc2UpXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCBjYW5jZWxFbXVsYXRpb24sIHBhc3NpdmVGYWxzZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCB0aGlzLl9uYXRpdmVEcmFnU3RhcnQpXG4gICAgICAgIHRoaXMuZWxlbWVudC5kcmFnZ2FibGUgPSB0cnVlXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9uYXRpdmVEcmFnRW5kLCBwYXNzaXZlRmFsc2UpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUsIHBhc3NpdmVGYWxzZSlcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUsIHBhc3NpdmVGYWxzZSlcblxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQsIHBhc3NpdmVGYWxzZSlcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kLCBwYXNzaXZlRmFsc2UpXG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX3Njcm9sbClcbiAgICB0aGlzLnNjcm9sbEVsZW1lbnRzLmZvckVhY2goKHApID0+IHAuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fc2Nyb2xsKSlcblxuICAgIGlmICghdGhpcy5zaG91bGRVc2VOYXRpdmVEcmFnQW5kRHJvcCgpICYmIHRoaXMuZHJhZ1N0YXJ0VGhyZXNob2xkID4gMCkge1xuICAgICAgdGhpcy5fZHJhZ1N0YXJ0UGVuZGluZyA9IHRydWVcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbWl0RHJhZ0V2ZW50KCdzdGFydCcpXG4gICAgfVxuICB9XG5cbiAgZHJhZ01vdmUoZXZlbnQpIHtcbiAgICBsZXQgdG91Y2hcblxuICAgIHRoaXMuaXNUb3VjaEV2ZW50ID0gKGlzVG91Y2ggJiYgKGV2ZW50IGluc3RhbmNlb2Ygd2luZG93LlRvdWNoRXZlbnQpKVxuICAgIGlmICh0aGlzLmlzVG91Y2hFdmVudCkge1xuICAgICAgdG91Y2ggPSBnZXRUb3VjaEJ5SUQoZXZlbnQsIHRoaXMuX3RvdWNoSWQpXG5cbiAgICAgIGlmICghdG91Y2gpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnNlZW1zU2Nyb2xsaW5nKCkpIHtcbiAgICAgICAgdGhpcy5jYW5jZWxEcmFnZ2luZygpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMudG91Y2hQb2ludCA9IG5ldyBQb2ludChcbiAgICAgIHRoaXMuaXNUb3VjaEV2ZW50ID8gdG91Y2gucGFnZVggOiBldmVudC5jbGllbnRYLFxuICAgICAgdGhpcy5pc1RvdWNoRXZlbnQgPyB0b3VjaC5wYWdlWSA6IGV2ZW50LmNsaWVudFlcbiAgICApXG5cbiAgICBpZiAodGhpcy5fZHJhZ1N0YXJ0UGVuZGluZykge1xuICAgICAgY29uc3QgZHggPSB0aGlzLnRvdWNoUG9pbnQueCAtIHRoaXMuX3N0YXJ0VG91Y2hQb2ludC54XG4gICAgICBjb25zdCBkeSA9IHRoaXMudG91Y2hQb2ludC55IC0gdGhpcy5fc3RhcnRUb3VjaFBvaW50LnlcbiAgICAgIGlmIChNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpIDwgdGhpcy5kcmFnU3RhcnRUaHJlc2hvbGQpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICB0aGlzLl9kcmFnU3RhcnRQZW5kaW5nID0gZmFsc2VcbiAgICAgIHRoaXMuZW1pdERyYWdFdmVudCgnc3RhcnQnKVxuICAgIH1cblxuICAgIHRoaXMuaXNEcmFnZ2luZyA9IHRydWVcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgIGxldCBwb2ludCA9IHRoaXMuX3N0YXJ0UG9zaXRpb24uYWRkKHRoaXMudG91Y2hQb2ludC5zdWIodGhpcy5fc3RhcnRUb3VjaFBvaW50KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZCh0aGlzLndpbmRvd1Njcm9sbFBvaW50LnN1Yih0aGlzLl9zdGFydFdpbmRvd1Njcm9sbFBvaW50KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZCh0aGlzLnNjcm9sbEVsZW1lbnRzT2Zmc2V0LnN1Yih0aGlzLl9zdGFydFNjcm9sbEVsZW1lbnRzT2Zmc2V0KSlcblxuICAgIHBvaW50ID0gdGhpcy5ib3VuZGluZy5ib3VuZChwb2ludCwgdGhpcy5nZXRTaXplKCkpXG4gICAgdGhpcy5kZXRlcm1pbmVEaXJlY3Rpb24ocG9pbnQpXG4gICAgdGhpcy5tb3ZlKHBvaW50KVxuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkcmFnZWUtYWN0aXZlJylcbiAgfVxuXG4gIGRyYWdFbmQoZXZlbnQpIHtcbiAgICB0aGlzLmlzVG91Y2hFdmVudCA9IChpc1RvdWNoICYmIChldmVudCBpbnN0YW5jZW9mIHdpbmRvdy5Ub3VjaEV2ZW50KSlcblxuICAgIGlmICh0aGlzLmlzVG91Y2hFdmVudCAmJiAhZ2V0VG91Y2hCeUlEKGV2ZW50LCB0aGlzLl90b3VjaElkKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2RyYWdTdGFydFBlbmRpbmcpIHtcbiAgICAgIC8vIHRocmVzaG9sZCBuZXZlciBjcm9zc2VkIOKAlCB0cmVhdCBhcyBjbGljaywgY2xlYW4gdXAgc2lsZW50bHlcbiAgICAgIHRoaXMuX2RyYWdTdGFydFBlbmRpbmcgPSBmYWxzZVxuICAgICAgdGhpcy5jYW5jZWxEcmFnZ2luZygpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc0RyYWdnaW5nKSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIH1cblxuICAgIHRoaXMuZHJhZ0VuZEFjdGlvbigpXG4gICAgdGhpcy5lbWl0RHJhZ0V2ZW50KCdlbmQnKVxuICAgIHRoaXMuY2FuY2VsRHJhZ2dpbmcoKVxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2VlLWFjdGl2ZScpKVxuICB9XG5cbiAgb25TY3JvbGwoX2V2ZW50KSB7XG4gICAgbGV0IHBvaW50ID0gdGhpcy5fc3RhcnRQb3NpdGlvbi5hZGQodGhpcy50b3VjaFBvaW50LnN1Yih0aGlzLl9zdGFydFRvdWNoUG9pbnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMud2luZG93U2Nyb2xsUG9pbnQuc3ViKHRoaXMuX3N0YXJ0V2luZG93U2Nyb2xsUG9pbnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMuc2Nyb2xsRWxlbWVudHNPZmZzZXQuc3ViKHRoaXMuX3N0YXJ0U2Nyb2xsRWxlbWVudHNPZmZzZXQpKVxuXG4gICAgcG9pbnQgPSB0aGlzLmJvdW5kaW5nLmJvdW5kKHBvaW50LCB0aGlzLmdldFNpemUoKSlcbiAgICBpZiAoIXRoaXMubmF0aXZlRHJhZ0FuZERyb3ApIHtcbiAgICAgIHRoaXMuZGV0ZXJtaW5lRGlyZWN0aW9uKHBvaW50KVxuICAgICAgdGhpcy5tb3ZlKHBvaW50KVxuICAgIH1cbiAgfVxuXG4gIG5hdGl2ZURyYWdTdGFydChldmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQnLCAnRmlyZUZveCBmaXgnKVxuICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gJ21vdmUnXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCB0aGlzLl9uYXRpdmVEcmFnT3ZlcilcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgdGhpcy5fbmF0aXZlRHJvcClcbiAgfVxuXG4gIG5hdGl2ZURyYWdPdmVyKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gJ21vdmUnXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RyYWdlZS1wbGFjZWhvbGRlcicpXG4gICAgaWYgKGV2ZW50LmNsaWVudFggPT09IDAgJiYgZXZlbnQuY2xpZW50WSA9PT0gMCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy50b3VjaFBvaW50ID0gbmV3IFBvaW50KGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpXG4gICAgbGV0IHBvaW50ID0gdGhpcy5fc3RhcnRQb3NpdGlvbi5hZGQodGhpcy50b3VjaFBvaW50LnN1Yih0aGlzLl9zdGFydFRvdWNoUG9pbnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMud2luZG93U2Nyb2xsUG9pbnQuc3ViKHRoaXMuX3N0YXJ0V2luZG93U2Nyb2xsUG9pbnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMuc2Nyb2xsRWxlbWVudHNPZmZzZXQuc3ViKHRoaXMuX3N0YXJ0U2Nyb2xsRWxlbWVudHNPZmZzZXQpKVxuICAgIHBvaW50ID0gdGhpcy5ib3VuZGluZy5ib3VuZChwb2ludCwgdGhpcy5nZXRTaXplKCkpXG4gICAgdGhpcy5kZXRlcm1pbmVEaXJlY3Rpb24ocG9pbnQpXG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvaW50XG4gICAgdGhpcy5lbWl0RHJhZ0V2ZW50KCdtb3ZlJylcbiAgfVxuXG4gIG5hdGl2ZURyYWdFbmQoX2V2ZW50KSB7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdlZS1wbGFjZWhvbGRlcicpXG4gICAgdGhpcy5kcmFnRW5kQWN0aW9uKClcbiAgICB0aGlzLmVtaXREcmFnRXZlbnQoJ2VuZCcpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCB0aGlzLl9uYXRpdmVEcmFnT3ZlcilcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcm9wJywgdGhpcy5fbmF0aXZlRHJvcClcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fc2Nyb2xsKVxuICAgIHRoaXMuc2Nyb2xsRWxlbWVudHMuZm9yRWFjaCgocCkgPT4gcC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9zY3JvbGwpKVxuICAgIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnZHJhZ2dhYmxlJylcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgdGhpcy5fbmF0aXZlRHJhZ1N0YXJ0KVxuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZWUtYWN0aXZlJylcbiAgfVxuXG4gIG5hdGl2ZURyb3AoZXZlbnQpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIGNhbmNlbERyYWdnaW5nICgpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG5cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcblxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX3Njcm9sbClcbiAgICB0aGlzLnNjcm9sbEVsZW1lbnRzLmZvckVhY2goKHApID0+IHAucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fc2Nyb2xsKSlcblxuICAgIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlXG4gICAgdGhpcy5fcHJldmlvdXNEaXJlY3Rpb25Qb3NpdGlvbiA9IG51bGxcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkcmFnZ2FibGUnKVxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCB0aGlzLl9uYXRpdmVEcmFnU3RhcnQpXG4gIH1cblxuICBjb3B5U3R5bGVzKHNvdXJjZSwgZGVzdGluYXRpb24pIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmNvcHlTdHlsZXMpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5jb3B5U3R5bGVzKHNvdXJjZSwgZGVzdGluYXRpb24pXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvcHlTdHlsZXMoc291cmNlLCBkZXN0aW5hdGlvbilcbiAgICB9XG4gIH1cblxuICBlbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3AoZXZlbnQpIHtcbiAgICBjb25zdCBjb250YWluZXJSZWN0ID0gdGhpcy5jb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICBjb25zdCBjbG9uZWRFbGVtZW50ID0gdGhpcy5lbGVtZW50LmNsb25lTm9kZSh0cnVlKVxuICAgIGNsb25lZEVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcGVydHldID0gJydcbiAgICB0aGlzLmNvcHlTdHlsZXModGhpcy5lbGVtZW50LCBjbG9uZWRFbGVtZW50KVxuICAgIGNsb25lZEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZHJhZ2VlLW5hdGl2ZS1lbXVsYXRpb24nKVxuICAgIGNsb25lZEVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjbG9uZWRFbGVtZW50KVxuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkcmFnZWUtcGxhY2Vob2xkZXInKVxuXG4gICAgY29uc3QgZW11bGF0aW9uRHJhZ2dhYmxlID0gbmV3IERyYWdnYWJsZShjbG9uZWRFbGVtZW50LCB7XG4gICAgICBjb250YWluZXI6IGRvY3VtZW50LmJvZHksXG4gICAgICB0b3VjaERyYWdnaW5nVGhyZXNob2xkOiAwLFxuICAgICAgZG9tRXZlbnRzOiBmYWxzZSxcbiAgICAgIGJvdW5kKHBvaW50KSB7XG4gICAgICAgIHJldHVybiBwb2ludFxuICAgICAgfSxcbiAgICAgIG9uOiB7XG4gICAgICAgICdkcmFnOm1vdmUnOiAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgY29udGFpbmVyUmVjdFBvaW50ID0gbmV3IFBvaW50KGNvbnRhaW5lclJlY3QubGVmdCwgY29udGFpbmVyUmVjdC50b3ApXG4gICAgICAgICAgdGhpcy5wb3NpdGlvbiA9IGVtdWxhdGlvbkRyYWdnYWJsZS5wb3NpdGlvbi5zdWIoY29udGFpbmVyUmVjdFBvaW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3ViKHRoaXMuX3N0YXJ0V2luZG93U2Nyb2xsUG9pbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy5fc3RhcnRQYXJlbnRzU2Nyb2xsT2Zmc2V0KVxuXG4gICAgICAgICAgdGhpcy5kZXRlcm1pbmVEaXJlY3Rpb24odGhpcy5wb3NpdGlvbilcbiAgICAgICAgICB0aGlzLmVtaXREcmFnRXZlbnQoJ21vdmUnKVxuICAgICAgICB9LFxuICAgICAgICAnZHJhZzplbmQnOiAoKSA9PiB7XG4gICAgICAgICAgZW11bGF0aW9uRHJhZ2dhYmxlLmRlc3Ryb3koKVxuICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoY2xvbmVkRWxlbWVudClcbiAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2VlLXBsYWNlaG9sZGVyJylcbiAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2VlLWFjdGl2ZScpXG5cbiAgICAgICAgICB0aGlzLmRyYWdFbmRBY3Rpb24oKVxuICAgICAgICAgIHRoaXMuZW1pdERyYWdFdmVudCgnZW5kJylcbiAgICAgICAgICB0aGlzLmNhbmNlbERyYWdnaW5nKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBjb250YWluZXJSZWN0UG9pbnQgPSBuZXcgUG9pbnQoY29udGFpbmVyUmVjdC5sZWZ0LCBjb250YWluZXJSZWN0LnRvcClcbiAgICBlbXVsYXRpb25EcmFnZ2FibGUuX3N0YXJ0V2luZG93U2Nyb2xsUG9pbnQgPSB0aGlzLl9zdGFydFdpbmRvd1Njcm9sbFBvaW50XG5cbiAgICBlbXVsYXRpb25EcmFnZ2FibGUubW92ZShcbiAgICAgIHRoaXMucGlubmVkUG9zaXRpb24uYWRkKGNvbnRhaW5lclJlY3RQb2ludClcbiAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMud2luZG93U2Nyb2xsUG9pbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgLnN1Yih0aGlzLnBhcmVudHNTY3JvbGxPZmZzZXQpXG4gICAgKVxuXG4gICAgZW11bGF0aW9uRHJhZ2dhYmxlLmRyYWdTdGFydChldmVudClcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBlbWl0RHJhZ0V2ZW50KHR5cGUpIHtcbiAgICB0aGlzLmVtaXQoYGRyYWc6JHt0eXBlfWApXG5cbiAgICBpZiAodGhpcy5kb21FdmVudHMpIHtcbiAgICAgIGRpc3BhdGNoRG9tRXZlbnQodGhpcy5lbGVtZW50LCBgZHJhZ2VlOiR7dHlwZX1gLCB7IGRyYWdnYWJsZTogdGhpcyB9KVxuICAgIH1cbiAgfVxuXG4gIGRyYWdFbmRBY3Rpb24oKSB7XG4gICAgdGhpcy5waW5Qb3NpdGlvbih0aGlzLnBvc2l0aW9uKVxuICB9XG5cbiAgZ2V0UmVjdGFuZ2xlKCkge1xuICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHRoaXMucG9zaXRpb24sIHRoaXMuZ2V0U2l6ZSgpKVxuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICBpZiAodGhpcy5ib3VuZGluZy5yZWZyZXNoKSB7XG4gICAgICB0aGlzLmJvdW5kaW5nLnJlZnJlc2goKVxuICAgIH1cbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5oYW5kbGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydClcbiAgICB0aGlzLmhhbmRsZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0KVxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCB0aGlzLl9uYXRpdmVEcmFnU3RhcnQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgdGhpcy5fbmF0aXZlRHJhZ092ZXIpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIHRoaXMuX25hdGl2ZURyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX25hdGl2ZURyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJvcCcsIHRoaXMuX25hdGl2ZURyb3ApXG4gICAgc2NvcGVzLmZvckVhY2goKHNjb3BlKSA9PiBzY29wZS5yZWxlYXNlRHJhZ2dhYmxlKHRoaXMpKVxuICAgIHRoaXMucmVzZXRFbWl0dGVyKClcblxuICAgIGNvbnN0IGluZGV4ID0gZHJhZ2dhYmxlcy5pbmRleE9mKHRoaXMpXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIGRyYWdnYWJsZXMuc3BsaWNlKGluZGV4LCAxKVxuICAgIH1cbiAgfVxuXG4gIGdldCBjb250YWluZXIoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9jb250YWluZXIgPSB0aGlzLl9jb250YWluZXIgfHwgdGhpcy5vcHRpb25zLmNvbnRhaW5lciB8fCB0aGlzLm9wdGlvbnMucGFyZW50IHx8IHRoaXMuZWxlbWVudC5vZmZzZXRQYXJlbnQpXG4gIH1cblxuICBnZXQgaGFuZGxlcigpIHtcbiAgICBpZiAoIXRoaXMuX2hhbmRsZXIpIHtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmhhbmRsZXIgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZXIgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLm9wdGlvbnMuaGFuZGxlcikgfHwgdGhpcy5lbGVtZW50XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9oYW5kbGVyID0gdGhpcy5vcHRpb25zLmhhbmRsZXIgfHwgdGhpcy5lbGVtZW50XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2hhbmRsZXJcbiAgfVxuXG4gIGdldCBzdG9wUHJvcGFnYXRpb25PbkRyYWdTdGFydCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLnN0b3BQcm9wYWdhdGlvbk9uRHJhZ1N0YXJ0IHx8IGZhbHNlXG4gIH1cblxuICBnZXQgbmF0aXZlRHJhZ0FuZERyb3AoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5uYXRpdmVEcmFnQW5kRHJvcCB8fCBmYWxzZVxuICB9XG5cbiAgZ2V0IGRvbUV2ZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmRvbUV2ZW50cyAhPT0gZmFsc2VcbiAgfVxuXG4gIGdldCBlbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3BPblRvdWNoKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wT25Ub3VjaCB8fCBmYWxzZVxuICB9XG5cbiAgZ2V0IHNob3VsZFJlbW92ZVplcm9UcmFuc2xhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5zaG91bGRSZW1vdmVaZXJvVHJhbnNsYXRlIHx8IGZhbHNlXG4gIH1cblxuICBnZXQgdG91Y2hEcmFnZ2luZ1RocmVzaG9sZCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLnRvdWNoRHJhZ2dpbmdUaHJlc2hvbGQgfHwgMFxuICB9XG5cbiAgZ2V0IGRyYWdTdGFydFRocmVzaG9sZCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmRyYWdTdGFydFRocmVzaG9sZCB8fCAwXG4gIH1cblxuICBnZXQgZHJhZ092ZXJUaHJvdHRsZUR1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZHJhZ092ZXJUaHJvdHRsZUR1cmF0aW9uIHx8IDE2XG4gIH1cblxuICBnZXQgaXNDb25zaWRlclRyYW5zZm9ybU9mZnNldCAoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5jb25zaWRlclRyYW5zZm9ybU9mZnNldCB8fCBmYWxzZVxuICB9XG5cbiAgZ2V0IHdpbmRvd1Njcm9sbFBvaW50KCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQod2luZG93LnNjcm9sbFgsIHdpbmRvdy5zY3JvbGxZKVxuICB9XG5cbiAgZ2V0IHNjcm9sbFJvb3RDb250YWluZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5zY3JvbGxSb290Q29udGFpbmVyIHx8IHRoaXMuY29udGFpbmVyXG4gIH1cblxuICBnZXQgc2Nyb2xsRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhY2hlZFNjcm9sbEVsZW1lbnRzXG4gICAgICA/IHRoaXMuX2NhY2hlZFNjcm9sbEVsZW1lbnRzXG4gICAgICA6ICh0aGlzLl9jYWNoZWRTY3JvbGxFbGVtZW50cyA9IGdldFBhcmVudHNDaGFpbih0aGlzLmVsZW1lbnQsIHRoaXMuc2Nyb2xsUm9vdENvbnRhaW5lcikpXG4gIH1cblxuICBnZXQgc2Nyb2xsRWxlbWVudHNPZmZzZXQoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludChcbiAgICAgIHRoaXMuc2Nyb2xsRWxlbWVudHMucmVkdWNlKChzdW0sIHApID0+IHN1bSArIHAuc2Nyb2xsTGVmdCwgMCksXG4gICAgICB0aGlzLnNjcm9sbEVsZW1lbnRzLnJlZHVjZSgoc3VtLCBwKSA9PiBzdW0gKyBwLnNjcm9sbFRvcCwgMClcbiAgICApXG4gIH1cblxuICBnZXQgcGFyZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5fY2FjaGVkUGFyZW50c1xuICAgICAgPyB0aGlzLl9jYWNoZWRQYXJlbnRzXG4gICAgICA6ICh0aGlzLl9jYWNoZWRQYXJlbnRzID0gZ2V0UGFyZW50c0NoYWluKHRoaXMuZWxlbWVudCwgdGhpcy5jb250YWluZXIpKVxuICB9XG5cbiAgZ2V0IHBhcmVudHNTY3JvbGxPZmZzZXQoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludChcbiAgICAgIHRoaXMucGFyZW50cy5yZWR1Y2UoKHN1bSwgcCkgPT4gc3VtICsgcC5zY3JvbGxMZWZ0LCAwKSxcbiAgICAgIHRoaXMucGFyZW50cy5yZWR1Y2UoKHN1bSwgcCkgPT4gc3VtICsgcC5zY3JvbGxUb3AsIDApXG4gICAgKVxuICB9XG5cbiAgZ2V0IGVuYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlXG4gIH1cblxuICBzZXQgZW5hYmxlKGVuYWJsZSkge1xuICAgIGlmIChlbmFibGUpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZWUtZGlzYWJsZScpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkcmFnZWUtZGlzYWJsZScpXG4gICAgfVxuXG4gICAgdGhpcy5fZW5hYmxlID0gZW5hYmxlXG4gIH1cbn1cblxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCwgaW1tZWRpYXRlKSB7XG4gIGxldCB0aW1lb3V0XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGV4ZWN1dGVkRnVuY3Rpb24oKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXNcbiAgICBjb25zdCBhcmdzID0gYXJndW1lbnRzXG5cbiAgICBjb25zdCBsYXRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgdGltZW91dCA9IG51bGxcbiAgICAgIGlmICghaW1tZWRpYXRlKSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpXG4gICAgfVxuXG4gICAgY29uc3QgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dFxuXG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpXG5cbiAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdClcblxuICAgIGlmIChjYWxsTm93KSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpXG4gIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBnZXREaXN0YW5jZShwMSwgcDIpIHtcbiAgY29uc3QgZHggPSBwMS54IC0gcDIueCwgZHkgPSBwMS55IC0gcDIueVxuICByZXR1cm4gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0WERpZmZlcmVuY2UocDEsIHAyKSB7XG4gIHJldHVybiBNYXRoLmFicyhwMS54IC0gcDIueClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFlEaWZmZXJlbmNlKHAxLCBwMikge1xuICByZXR1cm4gTWF0aC5hYnMocDEueSAtIHAyLnkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5KG9wdGlvbnMpIHtcbiAgcmV0dXJuIChwMSwgcDIpID0+IHtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KFxuICAgICAgTWF0aC5wb3cob3B0aW9ucy54ICogTWF0aC5hYnMocDEueCAtIHAyLngpLCAyKSArXG4gICAgICBNYXRoLnBvdyhvcHRpb25zLnkgKiBNYXRoLmFicyhwMS55IC0gcDIueSksIDIpXG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmRleE9mTmVhcmVzdFBvaW50KGFyciwgdmFsLCByYWRpdXMsIGdldERpc3RhbmNlRnVuYz1nZXREaXN0YW5jZSkge1xuICBsZXQgc2l6ZSwgaW5kZXggPSAwLCBpLCB0ZW1wXG4gIGlmIChhcnIubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIC0xXG4gIH1cbiAgc2l6ZSA9IGdldERpc3RhbmNlRnVuYyhhcnJbMF0sIHZhbClcbiAgZm9yIChpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgIHRlbXAgPSBnZXREaXN0YW5jZUZ1bmMoYXJyW2ldLCB2YWwpXG4gICAgaWYgKHRlbXAgPCBzaXplKSB7XG4gICAgICBzaXplID0gdGVtcFxuICAgICAgaW5kZXggPSBpXG4gICAgfVxuICB9XG4gIGlmIChyYWRpdXMgPj0gMCAmJiBzaXplID4gcmFkaXVzKSB7XG4gICAgcmV0dXJuIC0xXG4gIH1cbiAgcmV0dXJuIGluZGV4XG59XG4iLCJpbXBvcnQgZGVib3VuY2UgZnJvbSAnLi91dGlscy9kZWJvdW5jZSdcbmltcG9ydCByZW1vdmVJdGVtIGZyb20gJy4vdXRpbHMvcmVtb3ZlLWFycmF5LWl0ZW0nXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnRFbWl0dGVyJ1xuaW1wb3J0IGRpc3BhdGNoRG9tRXZlbnQgZnJvbSAnLi91dGlscy9kaXNwYXRjaC1kb20tZXZlbnQnXG5pbXBvcnQge1xuICBnZXREaXN0YW5jZSxcbiAgaW5kZXhPZk5lYXJlc3RQb2ludFxufSBmcm9tICcuL2dlb21ldHJ5L2Rpc3RhbmNlcydcblxuaW1wb3J0IERyYWdnYWJsZSBmcm9tICcuL2RyYWdnYWJsZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdCBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKGRyYWdnYWJsZXMsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcihvcHRpb25zKVxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgdGltZUVuZDogMjAwLFxuICAgICAgdGltZUV4Y2FuZ2U6IDQwMCxcbiAgICAgIHJhZGl1czogMzBcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGhpcy5jb250YWluZXIgPSBvcHRpb25zLmNvbnRhaW5lclxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZXNcbiAgICB0aGlzLmNoYW5nZWREdXJpbmdJdGVyYXRpb24gPSBmYWxzZVxuICAgIHRoaXMudW5zdWJzY3JpYmVzID0gbmV3IE1hcCgpXG5cbiAgICB0aGlzLnJlc2l6ZU9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKGRlYm91bmNlKHRoaXMub25SZXNpemUuYmluZCh0aGlzKSwgMTAwKSlcblxuICAgIGlmICh0aGlzLmNvbnRhaW5lcikge1xuICAgICAgdGhpcy5yZXNpemVPYnNlcnZlci5vYnNlcnZlKHRoaXMuY29udGFpbmVyKVxuICAgIH1cblxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBvblJlc2l6ZSgpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLnJlb3JkZXJPbkNoYW5nZSkgdGhpcy5yZXNldCgpXG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgaWYoIWRyYWdnYWJsZS5pc0RyYWdnaW5nKSB7XG4gICAgICAgIGRyYWdnYWJsZS5zdGFydFBvc2l0aW9uaW5nKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLl9lbmFibGUgPSB0cnVlXG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gdGhpcy5pbml0RHJhZ2dhYmxlKGRyYWdnYWJsZSkpXG4gIH1cblxuICBpbml0RHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIGRyYWdnYWJsZS5lbmFibGUgPSB0aGlzLl9lbmFibGVcbiAgICB0aGlzLmxpc3RlblRvKGRyYWdnYWJsZSwgJ2RyYWc6bW92ZScsICgpID0+IHRoaXMub25Nb3ZlKGRyYWdnYWJsZSkpXG4gICAgZHJhZ2dhYmxlLmRyYWdFbmRBY3Rpb24gPSAoKSA9PiB7XG4gICAgICBkcmFnZ2FibGUucGluUG9zaXRpb24oZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uLCB0aGlzLm9wdGlvbnMudGltZUVuZClcbiAgICAgIHRoaXMub25FbmQoZHJhZ2dhYmxlKVxuICAgIH1cbiAgICB0aGlzLnJlc2l6ZU9ic2VydmVyLm9ic2VydmUoZHJhZ2dhYmxlLmVsZW1lbnQpXG4gIH1cblxuICBsaXN0ZW5UbyhkcmFnZ2FibGUsIGV2ZW50TmFtZSwgaGFuZGxlcikge1xuICAgIGlmICghdGhpcy51bnN1YnNjcmliZXMuaGFzKGRyYWdnYWJsZSkpIHtcbiAgICAgIHRoaXMudW5zdWJzY3JpYmVzLnNldChkcmFnZ2FibGUsIFtdKVxuICAgIH1cbiAgICB0aGlzLnVuc3Vic2NyaWJlcy5nZXQoZHJhZ2dhYmxlKS5wdXNoKGRyYWdnYWJsZS5vbihldmVudE5hbWUsIGhhbmRsZXIpKVxuICB9XG5cbiAgcmVsZWFzZURyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICB0aGlzLnJlc2l6ZU9ic2VydmVyLnVub2JzZXJ2ZShkcmFnZ2FibGUuZWxlbWVudClcbiAgICB0aGlzLnVuc3Vic2NyaWJlcy5nZXQoZHJhZ2dhYmxlKT8uZm9yRWFjaCgodW5zdWJzY3JpYmUpID0+IHVuc3Vic2NyaWJlKCkpXG4gICAgdGhpcy51bnN1YnNjcmliZXMuZGVsZXRlKGRyYWdnYWJsZSlcbiAgICByZW1vdmVJdGVtKHRoaXMuZHJhZ2dhYmxlcywgZHJhZ2dhYmxlKVxuICB9XG5cbiAgb25Nb3ZlKGRyYWdnYWJsZSkge1xuICAgIGlmICh0aGlzLnN3YXBwaW5nRGlzYWJsZWQpIHJldHVyblxuXG4gICAgY29uc3Qgc29ydGVkRHJhZ2dhYmxlcyA9IHRoaXMuZ2V0U29ydGVkRHJhZ2dhYmxlcygpXG4gICAgY29uc3QgcGlubmVkUG9zaXRpb25zID0gc29ydGVkRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uKVxuXG4gICAgY29uc3QgY3VycmVudEluZGV4ID0gc29ydGVkRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSlcbiAgICBjb25zdCB0YXJnZXRJbmRleCA9IGluZGV4T2ZOZWFyZXN0UG9pbnQocGlubmVkUG9zaXRpb25zLCBkcmFnZ2FibGUucG9zaXRpb24sIHRoaXMub3B0aW9ucy5yYWRpdXMsIHRoaXMuZGlzdGFuY2VGdW5jKVxuXG4gICAgaWYgKHRhcmdldEluZGV4ICE9PSAtMSAmJiBjdXJyZW50SW5kZXggIT09IHRhcmdldEluZGV4KSB7XG4gICAgICBpZiAodGFyZ2V0SW5kZXggPCBjdXJyZW50SW5kZXgpIHtcbiAgICAgICAgZm9yIChsZXQgaT10YXJnZXRJbmRleDsgaTxjdXJyZW50SW5kZXg7IGkrKykge1xuICAgICAgICAgIHNvcnRlZERyYWdnYWJsZXNbaV0ucGluUG9zaXRpb24ocGlubmVkUG9zaXRpb25zW2krMV0sIHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChsZXQgaT1jdXJyZW50SW5kZXg7IGk8dGFyZ2V0SW5kZXg7IGkrKykge1xuICAgICAgICAgIHNvcnRlZERyYWdnYWJsZXNbaSsxXS5waW5Qb3NpdGlvbihwaW5uZWRQb3NpdGlvbnNbaV0sIHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZHJhZ2dhYmxlLm5hdGl2ZURyYWdBbmREcm9wKSB7XG4gICAgICAgIGRyYWdnYWJsZS5waW5Qb3NpdGlvbihwaW5uZWRQb3NpdGlvbnNbdGFyZ2V0SW5kZXhdKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uID0gcGlubmVkUG9zaXRpb25zW3RhcmdldEluZGV4XVxuICAgICAgfVxuXG4gICAgICB0aGlzLmNoYW5nZWREdXJpbmdJdGVyYXRpb24gPSB0cnVlXG4gICAgfVxuICB9XG5cbiAgb25FbmQoZHJhZ2dhYmxlKSB7XG4gICAgaWYgKHRoaXMuY2hhbmdlZER1cmluZ0l0ZXJhdGlvbikge1xuICAgICAgdGhpcy5lbWl0TGlzdEV2ZW50KCdjaGFuZ2UnLCBkcmFnZ2FibGUpXG4gICAgICB0aGlzLmNoYW5nZWREdXJpbmdJdGVyYXRpb24gPSBmYWxzZVxuXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnJlb3JkZXJPbkNoYW5nZSAmJiB0aGlzLm9wdGlvbnMuY29udGFpbmVyKSB7XG4gICAgICAgIHRoaXMucmVvcmRlckVsZW1lbnRzKGRyYWdnYWJsZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW9yZGVyRWxlbWVudHMobW92ZWREcmFnZ2FibGUpIHtcbiAgICBjb25zdCBzb3J0ZWREcmFnZ2FibGVzID0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcbiAgICBjb25zdCBpbmRleCA9IHNvcnRlZERyYWdnYWJsZXMuaW5kZXhPZihtb3ZlZERyYWdnYWJsZSlcbiAgICBjb25zdCBuZXh0ID0gc29ydGVkRHJhZ2dhYmxlc1tpbmRleCArIDFdXG5cbiAgICB0aGlzLnJlc2V0KClcblxuICAgIGlmIChuZXh0KSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5pbnNlcnRCZWZvcmUobW92ZWREcmFnZ2FibGUuZWxlbWVudCwgbmV4dC5lbGVtZW50KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChtb3ZlZERyYWdnYWJsZS5lbGVtZW50KVxuICAgIH1cblxuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkKSA9PiBkLnN0YXJ0UG9zaXRpb25pbmcoKSlcbiAgICB0aGlzLmVtaXRMaXN0RXZlbnQoJ3Jlb3JkZXJlZCcsIG1vdmVkRHJhZ2dhYmxlKVxuICB9XG5cbiAgZW1pdExpc3RFdmVudCh0eXBlLCBkcmFnZ2FibGUpIHtcbiAgICB0aGlzLmVtaXQoYGxpc3Q6JHt0eXBlfWApXG5cbiAgICBpZiAodGhpcy5kb21FdmVudHMpIHtcbiAgICAgIGRpc3BhdGNoRG9tRXZlbnQoZHJhZ2dhYmxlLmVsZW1lbnQsIGBkcmFnZWU6bGlzdC0ke3R5cGV9YCwgeyBsaXN0OiB0aGlzLCBkcmFnZ2FibGUgfSlcbiAgICB9XG4gIH1cblxuICBnZXRDdXJyZW50UGlubmVkUG9zaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbi5jbG9uZSgpKVxuICB9XG5cbiAgZ2V0U29ydGVkRHJhZ2dhYmxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5kcmFnZ2FibGVzLnNvcnQodGhpcy5zb3J0aW5nLmJpbmQodGhpcykpXG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucmVzZXRQb3NpdGlvblRvSW5pdGlhbCgpKVxuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucmVmcmVzaCgpKVxuICB9XG5cbiAgYWRkKGRyYWdnYWJsZXMpIHtcbiAgICBpZiAoIShkcmFnZ2FibGVzIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgICBkcmFnZ2FibGVzID0gW2RyYWdnYWJsZXNdXG4gICAgfVxuICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB0aGlzLmluaXREcmFnZ2FibGUoZHJhZ2dhYmxlKSlcbiAgICB0aGlzLmRyYWdnYWJsZXMgPSB0aGlzLmRyYWdnYWJsZXMuY29uY2F0KGRyYWdnYWJsZXMpXG4gIH1cblxuICByZW1vdmUoZHJhZ2dhYmxlcykge1xuICAgIGNvbnN0IGluaXRpYWxQb3NpdGlvbnMgPSB0aGlzLmRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5pbml0aWFsUG9zaXRpb24pXG4gICAgY29uc3QgbGlzdCA9IFtdXG4gICAgY29uc3Qgc29ydGVkRHJhZ2dhYmxlcyA9IHRoaXMuZ2V0U29ydGVkRHJhZ2dhYmxlcygpXG5cbiAgICBpZiAoIShkcmFnZ2FibGVzIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgICBkcmFnZ2FibGVzID0gW2RyYWdnYWJsZXNdXG4gICAgfVxuXG4gICAgZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHRoaXMucmVsZWFzZURyYWdnYWJsZShkcmFnZ2FibGUpKVxuXG4gICAgbGV0IGogPSAwXG4gICAgc29ydGVkRHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGlmICh0aGlzLmRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMSkge1xuICAgICAgICBpZiAoZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uICE9PSBpbml0aWFsUG9zaXRpb25zW2pdKSB7XG4gICAgICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKGluaXRpYWxQb3NpdGlvbnNbal0sIHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSlcbiAgICAgICAgfVxuICAgICAgICBkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uID0gaW5pdGlhbFBvc2l0aW9uc1tqXVxuICAgICAgICBqKytcbiAgICAgICAgbGlzdC5wdXNoKGRyYWdnYWJsZSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGxpc3RcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMucmVtb3ZlKHRoaXMuZHJhZ2dhYmxlcy5zbGljZSgpKVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUuZGVzdHJveSgpKVxuICAgIGlmICh0aGlzLmNvbnRhaW5lcikge1xuICAgICAgdGhpcy5yZXNpemVPYnNlcnZlci51bm9ic2VydmUodGhpcy5jb250YWluZXIpXG4gICAgfVxuICB9XG5cbiAgc29ydGluZyhkcmFnZ2FibGVBLCBkcmFnZ2FibGVCKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5zb3J0aW5nKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLnNvcnRpbmcoZHJhZ2dhYmxlQSwgZHJhZ2dhYmxlQilcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGRyYWdnYWJsZUEucGlubmVkUG9zaXRpb24ueSA8IGRyYWdnYWJsZUIucGlubmVkUG9zaXRpb24ueSkgcmV0dXJuIC0xXG4gICAgICBpZiAoZHJhZ2dhYmxlQS5waW5uZWRQb3NpdGlvbi55ID4gZHJhZ2dhYmxlQi5waW5uZWRQb3NpdGlvbi55KSByZXR1cm4gMVxuICAgICAgaWYgKGRyYWdnYWJsZUEucGlubmVkUG9zaXRpb24ueCA8IGRyYWdnYWJsZUIucGlubmVkUG9zaXRpb24ueCkgcmV0dXJuIC0xXG4gICAgICBpZiAoZHJhZ2dhYmxlQS5waW5uZWRQb3NpdGlvbi54ID4gZHJhZ2dhYmxlQi5waW5uZWRQb3NpdGlvbi54KSByZXR1cm4gMVxuICAgICAgcmV0dXJuIDBcbiAgICB9XG4gIH1cblxuICBnZXQgZGlzdGFuY2VGdW5jKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZ2V0RGlzdGFuY2UgfHwgZ2V0RGlzdGFuY2VcbiAgfVxuXG4gIGdldCBkb21FdmVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5kb21FdmVudHMgIT09IGZhbHNlXG4gIH1cblxuICBnZXQgcG9zaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmdldEN1cnJlbnRQaW5uZWRQb3NpdGlvbnMoKVxuICB9XG5cbiAgc2V0IHBvc2l0aW9ucyhwb3NpdGlvbnMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gJ3dyb25nIGFycmF5IGxlbmd0aCdcbiAgICBpZiAocG9zaXRpb25zLmxlbmd0aCA9PT0gdGhpcy5kcmFnZ2FibGVzLmxlbmd0aCkge1xuICAgICAgcG9zaXRpb25zLmZvckVhY2goKHBvaW50LCBpKSA9PiB7XG4gICAgICAgIHRoaXMuZHJhZ2dhYmxlc1tpXS5waW5Qb3NpdGlvbihwb2ludClcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG1lc3NhZ2VcbiAgICB9XG4gIH1cblxuICBnZXQgZW5hYmxlKCkge1xuICAgIHJldHVybiB0aGlzLl9lbmFibGVcbiAgfVxuXG4gIHNldCBlbmFibGUoZW5hYmxlKSB7XG4gICAgdGhpcy5fZW5hYmxlID0gZW5hYmxlXG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLmVuYWJsZSA9IGVuYWJsZVxuICAgIH0pXG4gIH1cblxuICBnZXQgc3dhcHBpbmdEaXNhYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3dhcHBpbmdEaXNhYmxlZFxuICB9XG5cbiAgc2V0IHN3YXBwaW5nRGlzYWJsZWQoZGlzYWJsZWQpIHtcbiAgICB0aGlzLl9zd2FwcGluZ0Rpc2FibGVkID0gZGlzYWJsZWRcbiAgfVxufVxuIiwiaW1wb3J0IExpc3QgZnJvbSAnLi9saXN0J1xuaW1wb3J0IHsgaW5kZXhPZk5lYXJlc3RQb2ludCwgZ2V0WERpZmZlcmVuY2UsIGdldFlEaWZmZXJlbmNlIH0gZnJvbSAnLi9nZW9tZXRyeS9kaXN0YW5jZXMnXG5cbmltcG9ydCBEcmFnZ2FibGUgZnJvbSAnLi9kcmFnZ2FibGUnXG5cbmNvbnN0IGFycmF5TW92ZSA9IChhcnJheSwgZnJvbSwgdG8pID0+IHtcbiAgYXJyYXkuc3BsaWNlKHRvIDwgMCA/IGFycmF5Lmxlbmd0aCArIHRvIDogdG8sIDAsIGFycmF5LnNwbGljZShmcm9tLCAxKVswXSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnViYmxpbmdMaXN0IGV4dGVuZHMgTGlzdCB7XG4gIGF1dG9EZXRlY3RHYXAoKSB7XG4gICAgaWYgKHRoaXMuX2dhcCAhPT0gdW5kZWZpbmVkIHx8IHRoaXMuZXhwbGljaXRHYXAgIT09IHVuZGVmaW5lZCB8fCB0aGlzLmRyYWdnYWJsZXMubGVuZ3RoIDwgMikgcmV0dXJuXG5cbiAgICBjb25zdCBheGlzID0gdGhpcy5heGlzXG4gICAgY29uc3Qgc29ydGVkID0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcbiAgICAvLyBEZXRhY2hlZCBlbGVtZW50cyByZXBvcnQgc2l6ZSAwXG4gICAgY29uc3QgaW5kZXggPSBzb3J0ZWQuZmluZEluZGV4KChkLCBpKSA9PiBpIDwgc29ydGVkLmxlbmd0aCAtIDEgJiYgZC5lbGVtZW50LmlzQ29ubmVjdGVkKVxuICAgIGlmIChpbmRleCA9PT0gLTEpIHJldHVyblxuXG4gICAgY29uc3QgW2N1cnJlbnQsIG5leHRdID0gW3NvcnRlZFtpbmRleF0sIHNvcnRlZFtpbmRleCArIDFdXVxuICAgIHRoaXMuX2dhcCA9IG5leHQucGlubmVkUG9zaXRpb25bYXhpc10gLSBjdXJyZW50LnBpbm5lZFBvc2l0aW9uW2F4aXNdIC0gY3VycmVudC5nZXRTaXplKClbYXhpc11cbiAgfVxuXG4gIGF1dG9EZXRlY3RTdGFydFBvc2l0aW9uKCkge1xuICAgIGlmICh0aGlzLmRyYWdnYWJsZXMubGVuZ3RoID49IDEgJiYgIXRoaXMuc3RhcnRQb3NpdGlvbikge1xuICAgICAgdGhpcy5zdGFydFBvc2l0aW9uID0gdGhpcy5kcmFnZ2FibGVzWzBdLnBpbm5lZFBvc2l0aW9uXG4gICAgfVxuICB9XG5cbiAgaW5pdERyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICBzdXBlci5pbml0RHJhZ2dhYmxlKGRyYWdnYWJsZSlcbiAgICB0aGlzLmxpc3RlblRvKGRyYWdnYWJsZSwgJ2RyYWc6c3RhcnQnLCAoKSA9PiB0aGlzLm9uRHJhZ1N0YXJ0KGRyYWdnYWJsZSkpXG4gIH1cblxuICBvbkRyYWdTdGFydChkcmFnZ2FibGUpIHtcbiAgICB0aGlzLmF1dG9EZXRlY3RHYXAoKVxuICAgIHRoaXMuYXV0b0RldGVjdFN0YXJ0UG9zaXRpb24oKVxuICAgIHRoaXMuY2FjaGVkU29ydGVkRHJhZ2dhYmxlcyA9IHRoaXMuZ2V0U29ydGVkRHJhZ2dhYmxlcygpXG4gICAgdGhpcy5pbmRleE9mQWN0aXZlRHJhZ2dhYmxlID0gdGhpcy5jYWNoZWRTb3J0ZWREcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKVxuICB9XG5cbiAgb25Nb3ZlKGRyYWdnYWJsZSkge1xuICAgIGlmICh0aGlzLnN3YXBwaW5nRGlzYWJsZWQpIHJldHVyblxuXG4gICAgY29uc3QgcHJldkRyYWdnYWJsZSA9IHRoaXMuY2FjaGVkU29ydGVkRHJhZ2dhYmxlc1t0aGlzLmluZGV4T2ZBY3RpdmVEcmFnZ2FibGUgLSAxXVxuICAgIGNvbnN0IG5leHREcmFnZ2FibGUgPSB0aGlzLmNhY2hlZFNvcnRlZERyYWdnYWJsZXNbdGhpcy5pbmRleE9mQWN0aXZlRHJhZ2dhYmxlICsgMV1cbiAgICBjb25zdCBjdXJyZW50UG9zaXRpb24gPSBkcmFnZ2FibGUucGlubmVkUG9zaXRpb25cblxuICAgIGxldCBjdXJyZW50T3JkZXJcbiAgICBsZXQgdGFyZ2V0SW5kZXhcblxuICAgIGlmKHRoaXMuaXNNb3ZpbmdCYWNrd2FyZChkcmFnZ2FibGUpICYmIHByZXZEcmFnZ2FibGUpIHtcbiAgICAgIGN1cnJlbnRPcmRlciA9IFtwcmV2RHJhZ2dhYmxlLCBkcmFnZ2FibGVdLm1hcCgoZCkgPT4gZC5waW5uZWRQb3NpdGlvbilcbiAgICAgIHRhcmdldEluZGV4ID0gaW5kZXhPZk5lYXJlc3RQb2ludChjdXJyZW50T3JkZXIsIGRyYWdnYWJsZS5wb3NpdGlvbiwgMTAwMDAsIHRoaXMuZGlzdGFuY2VGdW5jKVxuXG4gICAgICBpZiAodGFyZ2V0SW5kZXggPT09IDApIHtcbiAgICAgICAgaWYoZHJhZ2dhYmxlLnNob3VsZFVzZU5hdGl2ZURyYWdBbmREcm9wKCkpIHtcbiAgICAgICAgICBkcmFnZ2FibGUucGluUG9zaXRpb24ocHJldkRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24gPSBwcmV2RHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uLmNsb25lKClcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwcmV2TmV3UG9zaXRpb24gPSB0aGlzLm5leHRQb3NpdGlvbihkcmFnZ2FibGUucGlubmVkUG9zaXRpb24sIGRyYWdnYWJsZSlcbiAgICAgICAgcHJldk5ld1Bvc2l0aW9uW3RoaXMuY3Jvc3NBeGlzXSA9IGN1cnJlbnRQb3NpdGlvblt0aGlzLmNyb3NzQXhpc11cbiAgICAgICAgcHJldkRyYWdnYWJsZS5waW5Qb3NpdGlvbihwcmV2TmV3UG9zaXRpb24sIHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSlcbiAgICAgICAgYXJyYXlNb3ZlKHRoaXMuY2FjaGVkU29ydGVkRHJhZ2dhYmxlcywgdGhpcy5pbmRleE9mQWN0aXZlRHJhZ2dhYmxlLS0sIHRoaXMuaW5kZXhPZkFjdGl2ZURyYWdnYWJsZSlcbiAgICAgICAgdGhpcy5vbk1vdmUoZHJhZ2dhYmxlKVxuICAgICAgICB0aGlzLmNoYW5nZWREdXJpbmdJdGVyYXRpb24gPSB0cnVlXG4gICAgICB9XG4gICAgfSBlbHNlIGlmKHRoaXMuaXNNb3ZpbmdGb3J3YXJkKGRyYWdnYWJsZSkgJiYgbmV4dERyYWdnYWJsZSkge1xuICAgICAgY3VycmVudE9yZGVyID0gW2RyYWdnYWJsZSwgbmV4dERyYWdnYWJsZV0ubWFwKChkKSA9PiBkLnBpbm5lZFBvc2l0aW9uKVxuICAgICAgdGFyZ2V0SW5kZXggPSBpbmRleE9mTmVhcmVzdFBvaW50KGN1cnJlbnRPcmRlciwgZHJhZ2dhYmxlLnBvc2l0aW9uLCAxMDAwMCwgdGhpcy5kaXN0YW5jZUZ1bmMpXG5cbiAgICAgIGlmKHRhcmdldEluZGV4ID09PSAxKSB7XG4gICAgICAgIG5leHREcmFnZ2FibGUucGluUG9zaXRpb24oZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICAgIGNvbnN0IGRyYWdnYWJsZU5ld1Bvc2l0aW9uID0gdGhpcy5uZXh0UG9zaXRpb24obmV4dERyYWdnYWJsZS5waW5uZWRQb3NpdGlvbiwgbmV4dERyYWdnYWJsZSlcbiAgICAgICAgaWYoZHJhZ2dhYmxlLnNob3VsZFVzZU5hdGl2ZURyYWdBbmREcm9wKCkpIHtcbiAgICAgICAgICBkcmFnZ2FibGUucGluUG9zaXRpb24oZHJhZ2dhYmxlTmV3UG9zaXRpb24pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uID0gZHJhZ2dhYmxlTmV3UG9zaXRpb25cbiAgICAgICAgfVxuICAgICAgICBhcnJheU1vdmUodGhpcy5jYWNoZWRTb3J0ZWREcmFnZ2FibGVzLCB0aGlzLmluZGV4T2ZBY3RpdmVEcmFnZ2FibGUrKywgdGhpcy5pbmRleE9mQWN0aXZlRHJhZ2dhYmxlKVxuICAgICAgICB0aGlzLm9uTW92ZShkcmFnZ2FibGUpXG4gICAgICAgIHRoaXMuY2hhbmdlZER1cmluZ0l0ZXJhdGlvbiA9IHRydWVcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBidWJibGluZyhzb3J0ZWREcmFnZ2FibGVzLCBjdXJyZW50RHJhZ2dhYmxlKSB7XG4gICAgbGV0IGN1cnJlbnRQb3NpdGlvbiA9IHRoaXMuc3RhcnRQb3NpdGlvbi5jbG9uZSgpXG4gICAgc29ydGVkRHJhZ2dhYmxlcyB8fD0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcblxuICAgIHNvcnRlZERyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBpZiAoIWRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbi5jb21wYXJlKGN1cnJlbnRQb3NpdGlvbikpIHtcbiAgICAgICAgaWYgKGRyYWdnYWJsZSA9PT0gY3VycmVudERyYWdnYWJsZSAmJiAhY3VycmVudERyYWdnYWJsZS5zaG91bGRVc2VOYXRpdmVEcmFnQW5kRHJvcCgpKSB7XG4gICAgICAgICAgZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uID0gY3VycmVudFBvc2l0aW9uLmNsb25lKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkcmFnZ2FibGUucGluUG9zaXRpb24oY3VycmVudFBvc2l0aW9uLCAoZHJhZ2dhYmxlID09PSBjdXJyZW50RHJhZ2dhYmxlKSA/IDAgOiB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY3VycmVudFBvc2l0aW9uID0gdGhpcy5uZXh0UG9zaXRpb24oY3VycmVudFBvc2l0aW9uLCBkcmFnZ2FibGUpXG4gICAgfSlcbiAgfVxuXG4gIHJlbW92ZShkcmFnZ2FibGVzKSB7XG4gICAgaWYgKCEoZHJhZ2dhYmxlcyBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgZHJhZ2dhYmxlcyA9IFtkcmFnZ2FibGVzXVxuICAgIH1cblxuICAgIC8vIERldGVjdCBsYXlvdXQgYmVmb3JlIHJlbW92YWwsIG90aGVyd2lzZSB0aGUgZ2FwIGlzIG1lYXN1cmVkIGFjcm9zcyB0aGUgaG9sZVxuICAgIHRoaXMuYXV0b0RldGVjdEdhcCgpXG4gICAgdGhpcy5hdXRvRGV0ZWN0U3RhcnRQb3NpdGlvbigpXG5cbiAgICBkcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gdGhpcy5yZWxlYXNlRHJhZ2dhYmxlKGRyYWdnYWJsZSkpXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gdGhpcy5kcmFnZ2FibGVzLmZpbHRlcigoZCkgPT4gIWRyYWdnYWJsZXMuaW5jbHVkZXMoZCkpXG5cbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZCkgPT4gZC5zdGFydFBvc2l0aW9uaW5nKCkpXG5cbiAgICBpZih0aGlzLmRyYWdnYWJsZXMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5idWJibGluZygpXG4gICAgfVxuICB9XG5cbiAgbmV4dFBvc2l0aW9uKHBvc2l0aW9uLCBkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBuZXh0ID0gcG9zaXRpb24uY2xvbmUoKVxuICAgIG5leHRbdGhpcy5heGlzXSA9IHBvc2l0aW9uW3RoaXMuYXhpc10gKyBkcmFnZ2FibGUuZ2V0U2l6ZSgpW3RoaXMuYXhpc10gKyB0aGlzLmdhcFxuICAgIHJldHVybiBuZXh0XG4gIH1cblxuICBpc01vdmluZ0JhY2t3YXJkKGRyYWdnYWJsZSkge1xuICAgIHJldHVybiB0aGlzLmF4aXMgPT09ICd4JyA/IGRyYWdnYWJsZS5sZWZ0RGlyZWN0aW9uIDogZHJhZ2dhYmxlLnVwRGlyZWN0aW9uXG4gIH1cblxuICBpc01vdmluZ0ZvcndhcmQoZHJhZ2dhYmxlKSB7XG4gICAgcmV0dXJuIHRoaXMuYXhpcyA9PT0gJ3gnID8gZHJhZ2dhYmxlLnJpZ2h0RGlyZWN0aW9uIDogZHJhZ2dhYmxlLmRvd25EaXJlY3Rpb25cbiAgfVxuXG4gIGdldCBheGlzKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuYXhpcyA9PT0gJ3gnID8gJ3gnIDogJ3knXG4gIH1cblxuICBnZXQgY3Jvc3NBeGlzKCkge1xuICAgIHJldHVybiB0aGlzLmF4aXMgPT09ICd4JyA/ICd5JyA6ICd4J1xuICB9XG5cbiAgZ2V0IGRpc3RhbmNlRnVuYygpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmdldERpc3RhbmNlIHx8ICh0aGlzLmF4aXMgPT09ICd4JyA/IGdldFhEaWZmZXJlbmNlIDogZ2V0WURpZmZlcmVuY2UpXG4gIH1cblxuICBnZXQgZXhwbGljaXRHYXAoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5nYXAgPz8gdGhpcy5vcHRpb25zLnZlcnRpY2FsR2FwXG4gIH1cblxuICBnZXQgZ2FwKCkge1xuICAgIGlmICh0aGlzLmV4cGxpY2l0R2FwICE9PSB1bmRlZmluZWQpIHJldHVybiB0aGlzLmV4cGxpY2l0R2FwXG5cbiAgICB0aGlzLmF1dG9EZXRlY3RHYXAoKVxuICAgIHJldHVybiB0aGlzLl9nYXAgfHwgMFxuICB9XG5cbiAgc2V0IGdhcChnYXBWYWx1ZSkge1xuICAgIHRoaXMub3B0aW9ucy5nYXAgPSBnYXBWYWx1ZVxuICB9XG5cbiAgZ2V0IHZlcnRpY2FsR2FwKCkge1xuICAgIHJldHVybiB0aGlzLmdhcFxuICB9XG5cbiAgc2V0IHZlcnRpY2FsR2FwKGdhcFZhbHVlKSB7XG4gICAgdGhpcy5nYXAgPSBnYXBWYWx1ZVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByYW5nZShzdGFydCwgc3RvcCwgc3RlcCkge1xuICBjb25zdCByZXN1bHQgPSBbXVxuICBpZiAodHlwZW9mIHN0b3AgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgc3RvcCA9IHN0YXJ0XG4gICAgc3RhcnQgPSAwXG4gIH1cbiAgaWYgKHR5cGVvZiBzdGVwID09PSAndW5kZWZpbmVkJykge1xuICAgIHN0ZXAgPSAxXG4gIH1cbiAgaWYgKChzdGVwID4gMCAmJiBzdGFydCA+PSBzdG9wKSB8fCAoc3RlcCA8IDAgJiYgc3RhcnQgPD0gc3RvcCkpIHtcbiAgICByZXR1cm4gW11cbiAgfVxuICBmb3IgKGxldCBpID0gc3RhcnQ7IHN0ZXAgPiAwID8gaSA8IHN0b3AgOiBpID4gc3RvcDsgaSArPSBzdGVwKSB7XG4gICAgcmVzdWx0LnB1c2goaSlcbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9wb2ludCdcbmltcG9ydCB7IGdldERpc3RhbmNlIH0gZnJvbSAnLi9kaXN0YW5jZXMnXG5cbmV4cG9ydCBmdW5jdGlvbiBjbGFtcChtaW4sIG1heCwgdmFsKSB7XG4gIHJldHVybiBNYXRoLm1heChtaW4sIE1hdGgubWluKG1heCwgdmFsKSlcbn1cblxuLy9SZXR1cm4gY3Jvc3NpbmcgcG9pbnQgb2YgdHdvIGxpbmVzXG5leHBvcnQgZnVuY3Rpb24gZGlyZWN0Q3Jvc3NpbmcoTDFQMSwgTDFQMiwgTDJQMSwgTDJQMikge1xuICBsZXQgdGVtcCwgazEsIGsyLCBiMSwgYjIsIHgsIHlcbiAgaWYgKEwyUDEueCA9PT0gTDJQMi54KSB7XG4gICAgdGVtcCA9IEwyUDFcbiAgICBMMlAxID0gTDFQMVxuICAgIEwxUDEgPSB0ZW1wXG4gICAgdGVtcCA9IEwyUDJcbiAgICBMMlAyID0gTDFQMlxuICAgIEwxUDIgPSB0ZW1wXG4gIH1cbiAgaWYgKEwxUDEueCA9PT0gTDFQMi54KSB7XG4gICAgazIgPSAoTDJQMi55IC0gTDJQMS55KSAvIChMMlAyLnggLSBMMlAxLngpXG4gICAgYjIgPSAoTDJQMi54ICogTDJQMS55IC0gTDJQMS54ICogTDJQMi55KSAvIChMMlAyLnggLSBMMlAxLngpXG4gICAgeCA9IEwxUDEueFxuICAgIHkgPSB4ICogazIgKyBiMlxuICAgIHJldHVybiBuZXcgUG9pbnQoeCwgeSlcbiAgfSBlbHNlIHtcbiAgICBrMSA9IChMMVAyLnkgLSBMMVAxLnkpIC8gKEwxUDIueCAtIEwxUDEueClcbiAgICBiMSA9IChMMVAyLnggKiBMMVAxLnkgLSBMMVAxLnggKiBMMVAyLnkpIC8gKEwxUDIueCAtIEwxUDEueClcbiAgICBrMiA9IChMMlAyLnkgLSBMMlAxLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICBiMiA9IChMMlAyLnggKiBMMlAxLnkgLSBMMlAxLnggKiBMMlAyLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICB4ID0gKGIxIC0gYjIpIC8gKGsyIC0gazEpXG4gICAgeSA9IHggKiBrMSArIGIxXG4gICAgcmV0dXJuIG5ldyBQb2ludCh4LCB5KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZFRvU2VnbWVudChMUDEsIExQMiwgUCkge1xuICBsZXQgeCwgeVxuICB4ID0gY2xhbXAoTWF0aC5taW4oTFAxLngsIExQMi54KSwgTWF0aC5tYXgoTFAxLngsIExQMi54KSwgUC54KVxuICBpZiAoeCAhPT0gUC54KSB7XG4gICAgeSA9ICh4ID09PSBMUDEueCkgPyBMUDEueSA6IExQMi55XG4gICAgUCA9IG5ldyBQb2ludCh4LCB5KVxuICB9XG5cbiAgeSA9IGNsYW1wKE1hdGgubWluKExQMS55LCBMUDIueSksIE1hdGgubWF4KExQMS55LCBMUDIueSksIFAueSlcbiAgaWYgKHkgIT09IFAueSkge1xuICAgIHggPSAoeSA9PT0gTFAxLnkpID8gTFAxLnggOiBMUDIueFxuICAgIFAgPSBuZXcgUG9pbnQoeCwgeSlcbiAgfVxuXG4gIHJldHVybiBQXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZFRvTGluZShBLCBCLCBQKSB7XG4gIGNvbnN0IEFQID0gbmV3IFBvaW50KFAueCAtIEEueCwgUC55IC0gQS55KSxcbiAgICBBQiA9IG5ldyBQb2ludChCLnggLSBBLngsIEIueSAtIEEueSksXG4gICAgYWIyID0gQUIueCAqIEFCLnggKyBBQi55ICogQUIueSxcbiAgICBhcF9hYiA9IEFQLnggKiBBQi54ICsgQVAueSAqIEFCLnksXG4gICAgdCA9IGFwX2FiIC8gYWIyXG4gIHJldHVybiBuZXcgUG9pbnQoQS54ICsgQUIueCAqIHQsIEEueSArIEFCLnkgKiB0KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9pbnRPbkxpbmUoTFAxLCBMUDIsIHBlcmNlbnQpIHtcbiAgY29uc3QgZHggPSBMUDIueCAtIExQMS54LCBkeSA9IExQMi55IC0gTFAxLnlcbiAgcmV0dXJuIG5ldyBQb2ludChMUDEueCArIHBlcmNlbnQgKiBkeCwgTFAxLnkgKyBwZXJjZW50ICogZHkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb2ludE9uTGluZUJ5TGVuZ2h0KExQMSwgTFAyLCBsZW5naHQpIHtcbiAgY29uc3QgZHggPSBMUDIueCAtIExQMS54XG4gIGNvbnN0IGR5ID0gTFAyLnkgLSBMUDEueVxuICBjb25zdCBwZXJjZW50ID0gbGVuZ2h0IC8gZ2V0RGlzdGFuY2UoTFAxLCBMUDIpXG4gIHJldHVybiBuZXcgUG9pbnQoTFAxLnggKyBwZXJjZW50ICogZHgsIExQMS55ICsgcGVyY2VudCAqIGR5KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkUG9pbnRUb0JvdW5kUG9pbnRzKGJvdW5kcG9pbnRzLCBwb2ludCwgaXNSaWdodCkge1xuICBjb25zdCByZXN1bHQgPSBib3VuZHBvaW50cy5maWx0ZXIoKGJQb2ludCkgPT4ge1xuICAgIHJldHVybiBiUG9pbnQueSA+IHBvaW50LnkgfHwgKGlzUmlnaHQgPyBiUG9pbnQueCA8IHBvaW50LnggOiBiUG9pbnQueCA+IHBvaW50LngpXG4gIH0pXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHQubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAocG9pbnQueSA8IHJlc3VsdFtpXS55KSB7XG4gICAgICByZXN1bHQuc3BsaWNlKGksIDAsIHBvaW50KVxuICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbiAgfVxuICByZXN1bHQucHVzaChwb2ludClcbiAgcmV0dXJuIHJlc3VsdFxufVxuIiwiaW1wb3J0IFBvaW50IGZyb20gJy4vZ2VvbWV0cnkvcG9pbnQnXG5pbXBvcnQgeyBhZGRQb2ludFRvQm91bmRQb2ludHMgfSBmcm9tICcuL2dlb21ldHJ5L2JvdW5kcydcblxuaW1wb3J0IHtcbiAgaW5kZXhPZk5lYXJlc3RQb2ludCxcbiAgZ2V0RGlzdGFuY2Vcbn0gZnJvbSAnLi9nZW9tZXRyeS9kaXN0YW5jZXMnXG5cbmNsYXNzIEJhc2ljU3RyYXRlZ3kge1xuICBjb25zdHJ1Y3RvcihyZWN0YW5nbGUsIG9wdGlvbnM9e30pIHtcbiAgICB0aGlzLnJlY3RhbmdsZSA9IHJlY3RhbmdsZVxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNcbiAgfVxuXG4gIGdldCBib3VuZFJlY3QgKCkge1xuICAgIHJldHVybiB0eXBlb2YgdGhpcy5yZWN0YW5nbGUgPT09ICdmdW5jdGlvbicgPyB0aGlzLnJlY3RhbmdsZSgpIDogdGhpcy5yZWN0YW5nbGVcbiAgfVxufVxuXG5jbGFzcyBOb3RDcm9zc2luZ1N0cmF0ZWd5IGV4dGVuZHMgQmFzaWNTdHJhdGVneSB7XG4gIHBvc2l0aW9uaW5nIChyZWN0YW5nbGVMaXN0LCBpbmRleGVzT2ZOZXdzKSB7XG4gICAgY29uc3Qgc3RhdGljUmVjdGFuZ2xlSW5kZXhlcyA9IHJlY3RhbmdsZUxpc3QucmVkdWNlKChpbmRleGVzLCBfcmVjdCwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChpbmRleGVzT2ZOZXdzLmluZGV4T2YoaW5kZXgpID09PSAtMSkge1xuICAgICAgICBpbmRleGVzLnB1c2goaW5kZXgpXG4gICAgICB9XG4gICAgICByZXR1cm4gaW5kZXhlc1xuICAgIH0sIFtdKVxuXG4gICAgaW5kZXhlc09mTmV3cy5mb3JFYWNoKChpbmRleCkgPT4ge1xuICAgICAgbGV0IHJlY3QgPSByZWN0YW5nbGVMaXN0W2luZGV4XVxuICAgICAgbGV0IHJlbW92YWJsZSA9IGZhbHNlXG5cbiAgICAgIHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMuZm9yRWFjaCgoaW5kZXhPZlN0YXRpYykgPT4ge1xuICAgICAgICBjb25zdCBzdGF0aWNSZWN0ID0gcmVjdGFuZ2xlTGlzdFtpbmRleE9mU3RhdGljXVxuICAgICAgICByZWN0ID0gc3RhdGljUmVjdC5tb3ZlVG9Cb3VuZChyZWN0KVxuICAgICAgfSlcblxuICAgICAgcmVtb3ZhYmxlID0gc3RhdGljUmVjdGFuZ2xlSW5kZXhlcy5zb21lKChpbmRleE9mU3RhdGljKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YXRpY1JlY3QgPSByZWN0YW5nbGVMaXN0W2luZGV4T2ZTdGF0aWNdXG4gICAgICAgIHJldHVybiAgISFzdGF0aWNSZWN0LmFuZChyZWN0KVxuICAgICAgfSkgfHwgcmVjdC5hbmQodGhpcy5ib3VuZFJlY3QpLmdldFNxdWFyZSgpICE9PSByZWN0LmdldFNxdWFyZSgpXG5cbiAgICAgIGlmIChyZW1vdmFibGUpIHtcbiAgICAgICAgcmVjdC5yZW1vdmFibGUgPSB0cnVlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0aWNSZWN0YW5nbGVJbmRleGVzLnB1c2goaW5kZXgpXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcmVjdGFuZ2xlTGlzdFxuICB9XG5cbiAgc29ydGluZyhvZGxEcmFnZ2FibGVzTGlzdCwgbmV3RHJhZ2dhYmxlcywgaW5kZXhPZk5ld3MpIHtcbiAgICBjb25zdCBkcmFnZ2FibGVzID0gb2RsRHJhZ2dhYmxlc0xpc3QuY29uY2F0KG5ld0RyYWdnYWJsZXMpXG4gICAgbmV3RHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGluZGV4T2ZOZXdzLnB1c2goZHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkpXG4gICAgfSlcbiAgICByZXR1cm4gZHJhZ2dhYmxlc1xuICB9XG59XG5cbmNsYXNzIEZsb2F0TGVmdFN0cmF0ZWd5IGV4dGVuZHMgQmFzaWNTdHJhdGVneSB7XG4gIGNvbnN0cnVjdG9yKHJlY3RhbmdsZSwgb3B0aW9ucz17fSkge1xuICAgIHN1cGVyKHJlY3RhbmdsZSwgb3B0aW9ucylcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHJlbW92YWJsZTogdHJ1ZVxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0aGlzLnJhZGl1cyA9IG9wdGlvbnMucmFkaXVzIHx8IDgwXG5cbiAgICB0aGlzLnBhZGRpbmdUb3BMZWZ0ID0gb3B0aW9ucy5wYWRkaW5nVG9wTGVmdCB8fCBuZXcgUG9pbnQoMCwgMClcbiAgICB0aGlzLnBhZGRpbmdCb3R0b21SaWdodCA9IG9wdGlvbnMucGFkZGluZ0JvdHRvbVJpZ2h0IHx8IG5ldyBQb2ludCgwLCAwKVxuICAgIHRoaXMueUdhcEJldHdlZW5EcmFnZ2FibGVzID0gb3B0aW9ucy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgfHwgMFxuXG4gICAgdGhpcy5nZXREaXN0YW5jZSA9IG9wdGlvbnMuZ2V0RGlzdGFuY2UgfHwgZ2V0RGlzdGFuY2VcbiAgICB0aGlzLmdldFBvc2l0aW9uID0gb3B0aW9ucy5nZXRQb3NpdGlvbiB8fCAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnBvc2l0aW9uKVxuICB9XG5cbiAgcG9zaXRpb25pbmcocmVjdGFuZ2xlTGlzdCwgX2luZGV4ZXNPZk5ld3MpIHtcbiAgICBjb25zdCBib3VuZFJlY3QgPSB0aGlzLmJvdW5kUmVjdFxuICAgIGNvbnN0IHJlY3RQMiA9IGJvdW5kUmVjdC5nZXRQMigpXG4gICAgbGV0IGJvdW5kYXJ5UG9pbnRzID0gW2JvdW5kUmVjdC5wb3NpdGlvbl1cblxuICAgIHJlY3RhbmdsZUxpc3QuZm9yRWFjaCgocmVjdCwgcmVjdEluZGV4KSA9PiB7XG4gICAgICBsZXQgcG9zaXRpb24sIGlzVmFsaWQgPSBmYWxzZVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib3VuZGFyeVBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBwb3NpdGlvbiA9IG5ldyBQb2ludChcbiAgICAgICAgICBib3VuZGFyeVBvaW50c1tpXS54ICsgdGhpcy5wYWRkaW5nVG9wTGVmdC54LFxuICAgICAgICAgIGkgPiAwID8gKGJvdW5kYXJ5UG9pbnRzW2kgLSAxXS55ICsgdGhpcy55R2FwQmV0d2VlbkRyYWdnYWJsZXMpIDogKGJvdW5kUmVjdC5wb3NpdGlvbi55ICsgdGhpcy5wYWRkaW5nVG9wTGVmdC55KVxuICAgICAgICApXG5cbiAgICAgICAgaXNWYWxpZCA9IChwb3NpdGlvbi54ICsgcmVjdC5zaXplLnggPCByZWN0UDIueClcblxuICAgICAgICBpZiAoaXNWYWxpZCkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICAgIHBvc2l0aW9uID0gbmV3IFBvaW50KFxuICAgICAgICAgIGJvdW5kUmVjdC5wb3NpdGlvbi54ICsgdGhpcy5wYWRkaW5nVG9wTGVmdC54LFxuICAgICAgICAgIGJvdW5kYXJ5UG9pbnRzW2JvdW5kYXJ5UG9pbnRzLmxlbmd0aCAtIDFdLnkgKyAocmVjdEluZGV4ID4gMCA/IHRoaXMueUdhcEJldHdlZW5EcmFnZ2FibGVzIDogdGhpcy5wYWRkaW5nVG9wTGVmdC55KVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHJlY3QucG9zaXRpb24gPSBwb3NpdGlvblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZW1vdmFibGUgJiYgcmVjdC5nZXRQMygpLnkgPiBib3VuZFJlY3QuZ2V0UDMoKS55KSB7XG4gICAgICAgIHJlY3QucmVtb3ZhYmxlID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBib3VuZGFyeVBvaW50cyA9IGFkZFBvaW50VG9Cb3VuZFBvaW50cyhib3VuZGFyeVBvaW50cywgcmVjdC5nZXRQMygpLmFkZCh0aGlzLnBhZGRpbmdCb3R0b21SaWdodCkpXG4gICAgfSlcbiAgICByZXR1cm4gcmVjdGFuZ2xlTGlzdFxuICB9XG5cbiAgc29ydGluZyhvZGxEcmFnZ2FibGVzTGlzdCwgbmV3RHJhZ2dhYmxlcywgaW5kZXhPZk5ld3MpIHtcbiAgICBjb25zdCBuZXdMaXN0ID0gb2RsRHJhZ2dhYmxlc0xpc3QuY29uY2F0KClcbiAgICBjb25zdCBsaXN0T2xkUG9zaXRpb24gPSBvZGxEcmFnZ2FibGVzTGlzdC5tYXAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLmdldFBvc2l0aW9uKCkpXG4gICAgbmV3RHJhZ2dhYmxlcy5mb3JFYWNoKChuZXdEcmFnZ2FibGUpID0+IHtcbiAgICAgIGxldCBpbmRleCA9IGluZGV4T2ZOZWFyZXN0UG9pbnQobGlzdE9sZFBvc2l0aW9uLCB0aGlzLmdldFBvc2l0aW9uKG5ld0RyYWdnYWJsZSksIHRoaXMucmFkaXVzLCB0aGlzLmdldERpc3RhbmNlKVxuICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICBpbmRleCA9IG5ld0xpc3QubGVuZ3RoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbmRleCA9IG5ld0xpc3QuaW5kZXhPZihvZGxEcmFnZ2FibGVzTGlzdFtpbmRleF0pXG4gICAgICB9XG4gICAgICBuZXdMaXN0LnNwbGljZShpbmRleCwgMCwgbmV3RHJhZ2dhYmxlKVxuICAgIH0pXG4gICAgbmV3RHJhZ2dhYmxlcy5mb3JFYWNoKChuZXdEcmFnZ2FibGUpID0+IHtcbiAgICAgIGluZGV4T2ZOZXdzLnB1c2gobmV3TGlzdC5pbmRleE9mKG5ld0RyYWdnYWJsZSkpXG4gICAgfSlcbiAgICByZXR1cm4gbmV3TGlzdFxuICB9XG59XG5cbmNsYXNzIEZsb2F0UmlnaHRTdHJhdGVneSBleHRlbmRzIEZsb2F0TGVmdFN0cmF0ZWd5IHtcbiAgY29uc3RydWN0b3IocmVjdGFuZ2xlLCBvcHRpb25zPXt9KSB7XG4gICAgc3VwZXIocmVjdGFuZ2xlLCBvcHRpb25zKVxuXG4gICAgdGhpcy5wYWRkaW5nVG9wUmlnaHQgPSBvcHRpb25zLnBhZGRpbmdUb3BSaWdodCB8fCBuZXcgUG9pbnQoNSwgNSlcbiAgICB0aGlzLnBhZGRpbmdCb3R0b21MZWZ0ID0gb3B0aW9ucy5wYWRkaW5nQm90dG9tTGVmdCB8fCBuZXcgUG9pbnQoMCwgMClcbiAgICB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyA9IG9wdGlvbnMueUdhcEJldHdlZW5EcmFnZ2FibGVzIHx8IDBcblxuICAgIHRoaXMucGFkZGluZ0JvdHRvbU5lZ0xlZnQgPSBuZXcgUG9pbnQoLXRoaXMucGFkZGluZ0JvdHRvbUxlZnQueCwgdGhpcy5wYWRkaW5nQm90dG9tTGVmdC55KVxuICB9XG5cbiAgcG9zaXRpb25pbmcocmVjdGFuZ2xlTGlzdCwgX2luZGV4ZXNPZk5ld3MpIHtcbiAgICBjb25zdCBib3VuZFJlY3QgPSB0aGlzLmJvdW5kUmVjdFxuICAgIGxldCBib3VuZGFyeVBvaW50cyA9IFtib3VuZFJlY3QuZ2V0UDIoKV1cblxuICAgIHJlY3RhbmdsZUxpc3QuZm9yRWFjaCgocmVjdCwgcmVjdEluZGV4KSA9PiB7XG4gICAgICBsZXQgcG9zaXRpb24sIGlzVmFsaWQgPSBmYWxzZVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib3VuZGFyeVBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBwb3NpdGlvbiA9IG5ldyBQb2ludChcbiAgICAgICAgICBib3VuZGFyeVBvaW50c1tpXS54IC0gcmVjdC5zaXplLnggLSB0aGlzLnBhZGRpbmdUb3BSaWdodC54LFxuICAgICAgICAgIGkgPiAwID8gKGJvdW5kYXJ5UG9pbnRzW2kgLSAxXS55ICsgdGhpcy55R2FwQmV0d2VlbkRyYWdnYWJsZXMpIDogKGJvdW5kUmVjdC5wb3NpdGlvbi55ICsgdGhpcy5wYWRkaW5nVG9wUmlnaHQueSlcbiAgICAgICAgKVxuXG4gICAgICAgIGlzVmFsaWQgPSAocG9zaXRpb24ueCA+IHJlY3QucG9zaXRpb24ueClcbiAgICAgICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgcG9zaXRpb24gPSBuZXcgUG9pbnQoXG4gICAgICAgICAgYm91bmRSZWN0LmdldFAyKCkueCAgLSByZWN0LnNpemUueCAtIHRoaXMucGFkZGluZ1RvcFJpZ2h0LngsXG4gICAgICAgICAgYm91bmRhcnlQb2ludHNbYm91bmRhcnlQb2ludHMubGVuZ3RoIC0gMV0ueSArIChyZWN0SW5kZXggPiAwID8gdGhpcy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgOiB0aGlzLnBhZGRpbmdUb3BSaWdodC55KVxuICAgICAgICApXG4gICAgICB9XG4gICAgICByZWN0LnBvc2l0aW9uID0gcG9zaXRpb25cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucmVtb3ZhYmxlICYmIHJlY3QuZ2V0UDQoKS55ID4gYm91bmRSZWN0LmdldFA0KCkueSkge1xuICAgICAgICByZWN0LnJlbW92YWJsZSA9IHRydWVcbiAgICAgIH1cbiAgICAgIGJvdW5kYXJ5UG9pbnRzID0gYWRkUG9pbnRUb0JvdW5kUG9pbnRzKGJvdW5kYXJ5UG9pbnRzLCByZWN0LmdldFA0KCkuYWRkKHRoaXMucGFkZGluZ0JvdHRvbU5lZ0xlZnQpLCB0cnVlKVxuICAgIH0pXG4gICAgcmV0dXJuIHJlY3RhbmdsZUxpc3RcbiAgfVxufVxuXG5leHBvcnQgeyBOb3RDcm9zc2luZ1N0cmF0ZWd5LCBGbG9hdExlZnRTdHJhdGVneSwgRmxvYXRSaWdodFN0cmF0ZWd5IH1cbiIsImltcG9ydCBQb2ludCBmcm9tICcuL3BvaW50J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QW5nbGVEaWZmKGFscGhhLCBiZXRhKSB7XG4gIGNvbnN0IG1pbkFuZ2xlID0gTWF0aC5taW4oYWxwaGEsIGJldGEpXG4gIGNvbnN0IG1heEFuZ2xlID0gIE1hdGgubWF4KGFscGhhLCBiZXRhKVxuICByZXR1cm4gTWF0aC5taW4obWF4QW5nbGUgLSBtaW5BbmdsZSwgbWluQW5nbGUgKyBNYXRoLlBJKjIgLSBtYXhBbmdsZSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFuZ2xlKHAxLCBwMikge1xuICBjb25zdCBkaWZmID0gcDIuc3ViKHAxKVxuICByZXR1cm4gbm9ybWFsaXplQW5nbGUoTWF0aC5hdGFuMihkaWZmLnksIGRpZmYueCkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b1JhZGlhbihhbmdsZSkge1xuICByZXR1cm4gKChhbmdsZSAlIDM2MCkgKiBNYXRoLlBJIC8gMTgwKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9EZWdyZWUoYW5nbGUpIHtcbiAgcmV0dXJuIChhbmdsZSAqIDE4MCAvIE1hdGguUEkpICUgMzYwXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZEFuZ2xlKG1pbiwgbWF4LCB2YWwpIHtcbiAgbGV0IGRtaW4sIGRtYXhcbiAgaWYgKG1pbiA8IG1heCAmJiB2YWwgPiBtaW4gJiYgdmFsIDwgbWF4KSB7XG4gICAgcmV0dXJuIHZhbFxuICB9IGVsc2UgaWYgKG1heCA8IG1pbiAmJiAodmFsIDwgbWF4IHx8IHZhbCA+IG1pbikpIHtcbiAgICByZXR1cm4gdmFsXG4gIH0gZWxzZSB7XG4gICAgZG1pbiA9IGdldEFuZ2xlRGlmZihtaW4sIHZhbClcbiAgICBkbWF4ID0gZ2V0QW5nbGVEaWZmKG1heCwgdmFsKVxuICAgIGlmIChkbWluIDwgZG1heCkge1xuICAgICAgcmV0dXJuIG1pblxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbWF4XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROZWFyZXN0QW5nbGUoYXJyLCBhbmdsZSkge1xuICBsZXQgaSwgdGVtcCwgZGlmZiA9IE1hdGguUEkgKiAyLCB2YWx1ZVxuICBmb3IgKGkgPSAwOyBpIDwgYXJyLmxlbmd0aDtpKyspIHtcbiAgICB0ZW1wID0gZ2V0QW5nbGVEaWZmKGFycltpXSwgYW5nbGUpXG4gICAgaWYgKGRpZmYgPCB0ZW1wKSB7XG4gICAgICBkaWZmID0gdGVtcFxuICAgICAgdmFsdWUgPSBhcnJbaV1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHZhbHVlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVBbmdsZSh2YWwpIHtcbiAgd2hpbGUgKHZhbCA8IDApIHtcbiAgICB2YWwgKz0gMiAqIE1hdGguUElcbiAgfVxuICB3aGlsZSAodmFsID4gMiAqIE1hdGguUEkpIHtcbiAgICB2YWwgLT0gMiAqIE1hdGguUElcbiAgfVxuICByZXR1cm4gdmFsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oYW5nbGUsIGxlbmd0aCwgY2VudGVyKSB7XG4gIGNlbnRlciA9IGNlbnRlciB8fCBuZXcgUG9pbnQoMCwgMClcbiAgcmV0dXJuIGNlbnRlci5hZGQobmV3IFBvaW50KGxlbmd0aCAqIE1hdGguY29zKGFuZ2xlKSwgbGVuZ3RoICogTWF0aC5zaW4oYW5nbGUpKSlcbn1cbiIsImltcG9ydCBQb2ludCBmcm9tICcuL2dlb21ldHJ5L3BvaW50J1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tICcuL2dlb21ldHJ5L3JlY3RhbmdsZSdcbmltcG9ydCB7XG4gIGdldFBvaW50T25MaW5lQnlMZW5naHQsXG4gIGRpcmVjdENyb3NzaW5nLFxuICBib3VuZFRvTGluZVxufSBmcm9tICcuL2dlb21ldHJ5L2JvdW5kcydcblxuaW1wb3J0IHtcbiAgZ2V0QW5nbGUsXG4gIG5vcm1hbGl6ZUFuZ2xlLFxuICBib3VuZEFuZ2xlLFxuICBnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW1cbn0gZnJvbSAnLi9nZW9tZXRyeS9hbmdsZXMnXG5cbmV4cG9ydCBjbGFzcyBCb3VuZCB7XG4gIGNvbnN0cnVjdG9yICgpIHt9XG5cbiAgYm91bmQocG9pbnQsIF9zaXplKSB7XG4gICAgcmV0dXJuIHBvaW50XG4gIH1cblxuICByZWZyZXNoICgpIHt9XG5cbiAgc3RhdGljIGJvdW5kaW5nKCkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IHRoaXMoLi4uYXJndW1lbnRzKVxuICAgIHJldHVybiBpbnN0YW5jZS5ib3VuZC5iaW5kKGluc3RhbmNlKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvUmVjdGFuZ2xlIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3RvcihyZWN0YW5nbGUpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5yZWN0YW5nbGUgPSByZWN0YW5nbGVcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgY2FsY1BvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIGNvbnN0IHJlY3RQMiA9IHRoaXMucmVjdGFuZ2xlLmdldFAzKClcblxuICAgIGlmICh0aGlzLnJlY3RhbmdsZS5wb3NpdGlvbi54ID4gY2FsY1BvaW50LngpIHtcbiAgICAgIChjYWxjUG9pbnQueCA9IHRoaXMucmVjdGFuZ2xlLnBvc2l0aW9uLngpXG4gICAgfVxuICAgIGlmICh0aGlzLnJlY3RhbmdsZS5wb3NpdGlvbi55ID4gY2FsY1BvaW50LnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gdGhpcy5yZWN0YW5nbGUucG9zaXRpb24ueVxuICAgIH1cbiAgICBpZiAocmVjdFAyLnggPCBjYWxjUG9pbnQueCArIHNpemUueCkge1xuICAgICAgY2FsY1BvaW50LnggPSByZWN0UDIueCAtIHNpemUueFxuICAgIH1cbiAgICBpZiAocmVjdFAyLnkgPCBjYWxjUG9pbnQueSArIHNpemUueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSByZWN0UDIueSAtIHNpemUueVxuICAgIH1cblxuICAgIHJldHVybiBjYWxjUG9pbnRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb0VsZW1lbnQgZXh0ZW5kcyBCb3VuZFRvUmVjdGFuZ2xlIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29udGFpbmVyKSB7XG4gICAgc3VwZXIoUmVjdGFuZ2xlLmZyb21FbGVtZW50KGVsZW1lbnQsIGNvbnRhaW5lcikpXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyXG4gIH1cblxuICByZWZyZXNoICgpIHtcbiAgICB0aGlzLnJlY3RhbmdsZSA9IFJlY3RhbmdsZS5mcm9tRWxlbWVudCh0aGlzLmVsZW1lbnQsIHRoaXMuY29udGFpbmVyKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvTGluZVggZXh0ZW5kcyBCb3VuZCB7XG4gIGNvbnN0cnVjdG9yKHgsIHN0YXJ0WSwgZW5kWSkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnggPSB4XG4gICAgdGhpcy5zdGFydFkgPSBzdGFydFlcbiAgICB0aGlzLmVuZFkgPSBlbmRZXG4gIH1cblxuICBib3VuZChwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IGNhbGNQb2ludCA9IHBvaW50LmNsb25lKClcblxuICAgIGNhbGNQb2ludC54ID0gdGhpcy54XG4gICAgaWYgKHRoaXMuc3RhcnRZID4gY2FsY1BvaW50LnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gdGhpcy5zdGFydFlcbiAgICB9XG4gICAgaWYgKHRoaXMuZW5kWSA8IGNhbGNQb2ludC55ICsgc2l6ZS55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHRoaXMuZW5kWSAtIHNpemUueVxuICAgIH1cblxuICAgIHJldHVybiBjYWxjUG9pbnRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb0xpbmVZIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3Rvcih5LCBzdGFydFgsIGVuZFgpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy55ID0geVxuICAgIHRoaXMuc3RhcnRYID0gc3RhcnRYXG4gICAgdGhpcy5lbmRYID0gZW5kWFxuICB9XG5cbiAgYm91bmQocG9pbnQsIHNpemUpIHtcbiAgICBjb25zdCBjYWxjUG9pbnQgPSBwb2ludC5jbG9uZSgpXG4gICAgY2FsY1BvaW50LnkgPSB0aGlzLnlcbiAgICBpZiAodGhpcy5zdGFydFggPiBjYWxjUG9pbnQueCkge1xuICAgICAgY2FsY1BvaW50LnggPSB0aGlzLnN0YXJ0WFxuICAgIH1cbiAgICBpZiAodGhpcy5lbmRYIDwgY2FsY1BvaW50LnggKyBzaXplLngpIHtcbiAgICAgIGNhbGNQb2ludC54ID0gdGhpcy5lbmRYIC0gc2l6ZS54XG4gICAgfVxuICAgIHJldHVybiBjYWxjUG9pbnRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb0xpbmUgZXh0ZW5kcyBCb3VuZCB7XG4gIGNvbnN0cnVjdG9yKHN0YXJ0UG9pbnQsIGVuZFBvaW50KSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuc3RhcnRQb2ludCA9IHN0YXJ0UG9pbnRcbiAgICB0aGlzLmVuZFBvaW50ID0gZW5kUG9pbnRcbiAgICBjb25zdCBhbHBoYSA9IE1hdGguYXRhbjIoZW5kUG9pbnQueSAtIHN0YXJ0UG9pbnQueSwgZW5kUG9pbnQueCAtIHN0YXJ0UG9pbnQueClcbiAgICBjb25zdCBiZXRhID0gYWxwaGEgKyBNYXRoLlBJIC8gMlxuICAgIHRoaXMuc29tZUsgPSAxMFxuICAgIHRoaXMuY29zQmV0YSA9IE1hdGguY29zKGJldGEpXG4gICAgdGhpcy5zaW5CZXRhID0gTWF0aC5zaW4oYmV0YSlcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgcG9pbnQyID0gbmV3IFBvaW50KFxuICAgICAgcG9pbnQueCArIHRoaXMuc29tZUsgKiB0aGlzLmNvc0JldGEsXG4gICAgICBwb2ludC55ICsgdGhpcy5zb21lSyAqIHRoaXMuc2luQmV0YVxuICAgIClcblxuICAgIGNvbnN0IG5ld0VuZFBvaW50ID0gZ2V0UG9pbnRPbkxpbmVCeUxlbmdodCh0aGlzLmVuZFBvaW50LCB0aGlzLnN0YXJ0UG9pbnQsIHNpemUueClcbiAgICBjb25zdCBwb2ludENyb3NzaW5nID0gZGlyZWN0Q3Jvc3NpbmcodGhpcy5zdGFydFBvaW50LCB0aGlzLmVuZFBvaW50LCBwb2ludCwgcG9pbnQyKVxuXG4gICAgcmV0dXJuIGJvdW5kVG9MaW5lKHRoaXMuc3RhcnRQb2ludCwgbmV3RW5kUG9pbnQsIHBvaW50Q3Jvc3NpbmcpXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9DaXJjbGUgZXh0ZW5kcyBCb3VuZCB7XG4gIGNvbnN0cnVjdG9yKGNlbnRlciwgcmFkaXVzKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuY2VudGVyID0gY2VudGVyXG4gICAgdGhpcy5yYWRpdXMgPSByYWRpdXNcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBfc2l6ZSkge1xuICAgIHJldHVybiBnZXRQb2ludE9uTGluZUJ5TGVuZ2h0KHRoaXMuY2VudGVyLCBwb2ludCwgdGhpcy5yYWRpdXMpXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9BcmMgZXh0ZW5kcyBCb3VuZFRvQ2lyY2xlIHtcbiAgY29uc3RydWN0b3IoY2VudGVyLCByYWRpdXMsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlKSB7XG4gICAgc3VwZXIoY2VudGVyLCByYWRpdXMpXG4gICAgdGhpcy5fc3RhcnRBbmdsZSA9IHN0YXJ0QW5nbGVcbiAgICB0aGlzLl9lbmRBbmdsZSA9IGVuZEFuZ2xlXG4gIH1cblxuICBzdGFydEFuZ2xlKCkge1xuICAgIHJldHVybiB0eXBlb2YgdGhpcy5fc3RhcnRBbmdsZSA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMuX3N0YXJ0QW5nbGUoKSA6IHRoaXMuX3N0YXJ0QW5nbGVcbiAgfVxuXG4gIGVuZEFuZ2xlKCkge1xuICAgIHJldHVybiB0eXBlb2YgdGhpcy5fZW5kQW5nbGUgPT09ICdmdW5jdGlvbicgPyB0aGlzLl9lbmRBbmdsZSgpIDogdGhpcy5fZW5kQW5nbGVcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBfc2l6ZSkge1xuICAgIGxldCBhbmdsZSA9IGdldEFuZ2xlKHRoaXMuY2VudGVyLCBwb2ludClcbiAgICBhbmdsZSA9IG5vcm1hbGl6ZUFuZ2xlKGFuZ2xlKVxuICAgIGFuZ2xlID0gYm91bmRBbmdsZSh0aGlzLnN0YXJ0QW5nbGUoKSwgdGhpcy5lbmRBbmdsZSgpLCBhbmdsZSlcbiAgICByZXR1cm4gZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKGFuZ2xlLCB0aGlzLnJhZGl1cywgdGhpcy5jZW50ZXIpXG4gIH1cbn1cbiIsImltcG9ydCByYW5nZSBmcm9tICcuL3V0aWxzL3JhbmdlLmpzJ1xuaW1wb3J0IHJlbW92ZUl0ZW0gZnJvbSAnLi91dGlscy9yZW1vdmUtYXJyYXktaXRlbSdcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudEVtaXR0ZXInXG5pbXBvcnQgZGlzcGF0Y2hEb21FdmVudCBmcm9tICcuL3V0aWxzL2Rpc3BhdGNoLWRvbS1ldmVudCdcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSAnLi9nZW9tZXRyeS9yZWN0YW5nbGUnXG5pbXBvcnQgeyB0cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5IH0gZnJvbSAnLi9nZW9tZXRyeS9kaXN0YW5jZXMnXG5pbXBvcnQgeyBzY29wZXMsIGN1cnJlbnRTY29wZSB9IGZyb20gJy4vc2NvcGUnXG5cbmltcG9ydCB7IEZsb2F0TGVmdFN0cmF0ZWd5IH0gZnJvbSAnLi9wb3NpdGlvbmluZydcbmltcG9ydCB7IEJvdW5kVG9FbGVtZW50IH0gZnJvbSAnLi9ib3VuZGluZydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFyZ2V0IGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgZHJhZ2dhYmxlcywgb3B0aW9ucyA9IHt9KSB7XG4gICAgc3VwZXIob3B0aW9ucylcblxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgdGltZUVuZDogMjAwLFxuICAgICAgdGltZUV4Y2FuZ2U6IDQwMFxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0aGlzLnBvc2l0aW9uaW5nU3RyYXRlZ3kgPSBvcHRpb25zLnN0cmF0ZWd5IHx8IG5ldyBGbG9hdExlZnRTdHJhdGVneShcbiAgICAgIHRoaXMuZ2V0UmVjdGFuZ2xlLmJpbmQodGhpcyksXG4gICAgICB7XG4gICAgICAgIHJhZGl1czogODAsXG4gICAgICAgIGdldERpc3RhbmNlOiB0cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5KHsgeDogMSwgeTogNCB9KSxcbiAgICAgICAgcmVtb3ZhYmxlOiB0cnVlXG4gICAgICB9XG4gICAgKVxuXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IFtdXG4gICAgdGhpcy51bnN1YnNjcmliZXMgPSBbXVxuICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB0aGlzLmFjY2VwdChkcmFnZ2FibGUpKVxuXG4gICAgY29uc3Qgc2NvcGUgPSBvcHRpb25zLnNjb3BlIHx8IGN1cnJlbnRTY29wZSgpXG4gICAgc2NvcGUuYWRkVGFyZ2V0KHRoaXMpXG5cbiAgICB0aGlzLnN0YXJ0Qm91bmRpbmcoKVxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBzdGFydEJvdW5kaW5nKCkge1xuICAgIHRoaXMuYm91bmQgPSB0aGlzLm9wdGlvbnMuYm91bmQgfHwgQm91bmRUb0VsZW1lbnQuYm91bmRpbmcodGhpcy5lbGVtZW50KVxuICB9XG5cbiAgcG9zaXRpb25pbmcgKGRyYWdnYWJsZXMsIGluZGV4ZXNPZk5ldykge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uaW5nU3RyYXRlZ3kucG9zaXRpb25pbmcoZHJhZ2dhYmxlcywgaW5kZXhlc09mTmV3KVxuICB9XG5cbiAgc29ydGluZyAob2xkRHJhZ2dhYmxlcywgbmV3RHJhZ2dhYmxlcywgaW5kZXhPZk5ld3MpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbmluZ1N0cmF0ZWd5LnNvcnRpbmcob2xkRHJhZ2dhYmxlcywgbmV3RHJhZ2dhYmxlcywgaW5kZXhPZk5ld3MpXG4gIH1cblxuICBpbml0KCkge1xuICAgIGxldCByZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXdcblxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzID0gdGhpcy5kcmFnZ2FibGVzLmZpbHRlcigoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBsZXQgZWxlbWVudCA9IGRyYWdnYWJsZS5lbGVtZW50LnBhcmVudE5vZGVcbiAgICAgIHdoaWxlIChlbGVtZW50KSB7XG4gICAgICAgIGlmIChlbGVtZW50ID09PSB0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGVcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH0pXG5cbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMubGVuZ3RoKSB7XG4gICAgICBpbmRleGVzT2ZOZXcgPSByYW5nZSh0aGlzLmlubmVyRHJhZ2dhYmxlcy5sZW5ndGgpXG4gICAgICByZWN0YW5nbGVzID0gdGhpcy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgICB9KSwgaW5kZXhlc09mTmV3KVxuICAgICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXcpXG4gICAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHRoaXMuZW1pdFRhcmdldEV2ZW50KCdhZGQnLCBkcmFnZ2FibGUpKVxuICAgIH1cbiAgfVxuXG4gIGdldFJlY3RhbmdsZSgpIHtcbiAgICByZXR1cm4gUmVjdGFuZ2xlLmZyb21FbGVtZW50KHRoaXMuZWxlbWVudCwgdGhpcy5jb250YWluZXIsIHRydWUpXG4gIH1cblxuICBjYXRjaERyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmNhdGNoRHJhZ2dhYmxlKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmNhdGNoRHJhZ2dhYmxlKHRoaXMsIGRyYWdnYWJsZSlcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGFyZ2V0UmVjdGFuZ2xlID0gdGhpcy5nZXRSZWN0YW5nbGUoKVxuICAgICAgY29uc3QgZHJhZ2dhYmxlU3F1YXJlID0gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpLmdldFNxdWFyZSgpXG5cbiAgICAgIHJldHVybiBkcmFnZ2FibGVTcXVhcmUgPCB0YXJnZXRSZWN0YW5nbGUuZ2V0U3F1YXJlKClcbiAgICAgICAgICAgICAgJiYgdGFyZ2V0UmVjdGFuZ2xlLmluY2x1ZGVQb2ludChkcmFnZ2FibGUuZ2V0Q2VudGVyKCkpXG4gICAgfVxuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UmVjdGFuZ2xlKCkucG9zaXRpb25cbiAgfVxuXG4gIGdldFNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UmVjdGFuZ2xlKCkuc2l6ZVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlcy5mb3JFYWNoKCh1bnN1YnNjcmliZSkgPT4gdW5zdWJzY3JpYmUoKSlcbiAgICBzY29wZXMuZm9yRWFjaCgoc2NvcGUpID0+IHJlbW92ZUl0ZW0oc2NvcGUudGFyZ2V0cywgdGhpcykpXG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgfSksIFtdKVxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgW10sIDApXG4gIH1cblxuICBvbkVuZChkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBuZXdEcmFnZ2FibGVzSW5kZXggPSBbXVxuXG4gICAgaWYgKHRoaXMuZ2V0UmVjdGFuZ2xlKCkuaW5jbHVkZVBvaW50KGRyYWdnYWJsZS5nZXRDZW50ZXIoKSkpIHtcbiAgICAgIGRyYWdnYWJsZS5wb3NpdGlvbiA9IHRoaXMuYm91bmQoZHJhZ2dhYmxlLnBvc2l0aW9uLCBkcmFnZ2FibGUuZ2V0U2l6ZSgpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICB0aGlzLmVtaXRUYXJnZXRFdmVudCgnYmVmb3JlQWRkJywgZHJhZ2dhYmxlKVxuXG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMgPSB0aGlzLnNvcnRpbmcodGhpcy5pbm5lckRyYWdnYWJsZXMsIFtkcmFnZ2FibGVdLCBuZXdEcmFnZ2FibGVzSW5kZXgpXG4gICAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgbmV3RHJhZ2dhYmxlc0luZGV4KVxuXG4gICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBuZXdEcmFnZ2FibGVzSW5kZXgpXG4gICAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTEpIHtcbiAgICAgIHRoaXMuZW1pdFRhcmdldEV2ZW50KCdhZGQnLCBkcmFnZ2FibGUpXG4gICAgfVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBzZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXcsIHRpbWUpIHtcbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5zbGljZSgwKS5mb3JFYWNoKChkcmFnZ2FibGUsIGkpID0+IHtcbiAgICAgIGNvbnN0IHJlY3QgPSByZWN0YW5nbGVzW2ldLFxuICAgICAgICB0aW1lRW5kID0gdGltZSB8fCB0aW1lID09PSAwID8gdGltZSA6IGluZGV4ZXNPZk5ldy5pbmRleE9mKGkpICE9PSAtMSA/IHRoaXMub3B0aW9ucy50aW1lRW5kIDogdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlXG5cbiAgICAgIGlmIChyZWN0LnJlbW92YWJsZSkge1xuICAgICAgICBkcmFnZ2FibGUubW92ZShkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uLCB0aW1lRW5kLCB0cnVlLCB0cnVlKVxuICAgICAgICByZW1vdmVJdGVtKHRoaXMuaW5uZXJEcmFnZ2FibGVzLCBkcmFnZ2FibGUpXG4gICAgICAgIHRoaXMuZW1pdFRhcmdldEV2ZW50KCdyZW1vdmUnLCBkcmFnZ2FibGUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkcmFnZ2FibGUubW92ZShyZWN0LnBvc2l0aW9uLCB0aW1lRW5kLCB0cnVlLCB0cnVlKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBhZGQoZHJhZ2dhYmxlLCB0aW1lKSB7XG4gICAgY29uc3QgbmV3RHJhZ2dhYmxlc0luZGV4ID0gdGhpcy5pbm5lckRyYWdnYWJsZXMubGVuZ3RoXG5cbiAgICB0aGlzLmVtaXRUYXJnZXRFdmVudCgnYmVmb3JlQWRkJywgZHJhZ2dhYmxlKVxuXG4gICAgdGhpcy5hY2NlcHQoZHJhZ2dhYmxlKVxuICAgIHRoaXMucHVzaElubmVyRHJhZ2dhYmxlKGRyYWdnYWJsZSlcbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBuZXdEcmFnZ2FibGVzSW5kZXgsIGRyYWdnYWJsZSlcblxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgW25ld0RyYWdnYWJsZXNJbmRleF0sIHRpbWUgfHwgMClcbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMSkge1xuICAgICAgdGhpcy5lbWl0VGFyZ2V0RXZlbnQoJ2FkZCcsIGRyYWdnYWJsZSlcbiAgICB9XG4gIH1cblxuICBwdXNoSW5uZXJEcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKT09PS0xKSB7XG4gICAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5wdXNoKGRyYWdnYWJsZSlcbiAgICB9XG4gIH1cblxuICBhY2NlcHQoZHJhZ2dhYmxlKSB7XG4gICAgaWYgKHRoaXMuZHJhZ2dhYmxlcy5pbmNsdWRlcyhkcmFnZ2FibGUpKSByZXR1cm5cblxuICAgIHRoaXMuZHJhZ2dhYmxlcy5wdXNoKGRyYWdnYWJsZSlcbiAgICBkcmFnZ2FibGUudGFyZ2V0cy5wdXNoKHRoaXMpXG4gICAgdGhpcy51bnN1YnNjcmliZXMucHVzaChkcmFnZ2FibGUub24oJ2RyYWc6bW92ZScsICgpID0+IHRoaXMucmVtb3ZlKGRyYWdnYWJsZSkpKVxuICB9XG5cbiAgcmVtb3ZlKGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpXG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuc3BsaWNlKGluZGV4LCAxKVxuXG4gICAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgW10pXG5cbiAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIFtdKVxuICAgIHRoaXMuZW1pdFRhcmdldEV2ZW50KCdyZW1vdmUnLCBkcmFnZ2FibGUpXG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5tb3ZlKGRyYWdnYWJsZS5pbml0aWFsUG9zaXRpb24sIDAsIHRydWUsIHRydWUpXG4gICAgICB0aGlzLmVtaXRUYXJnZXRFdmVudCgncmVtb3ZlJywgZHJhZ2dhYmxlKVxuICAgIH0pXG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMgPSBbXVxuICB9XG5cbiAgZ2V0U29ydGVkRHJhZ2dhYmxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5pbm5lckRyYWdnYWJsZXMuc2xpY2UoKVxuICB9XG5cbiAgZW1pdFRhcmdldEV2ZW50KHR5cGUsIGRyYWdnYWJsZSkge1xuICAgIHRoaXMuZW1pdChgdGFyZ2V0OiR7dHlwZX1gLCBkcmFnZ2FibGUpXG5cbiAgICBpZiAodGhpcy5kb21FdmVudHMpIHtcbiAgICAgIGNvbnN0IGRvbVR5cGUgPSB0eXBlLnJlcGxhY2UoL1tBLVpdL2csIChsZXR0ZXIpID0+IGAtJHtsZXR0ZXIudG9Mb3dlckNhc2UoKX1gKVxuICAgICAgZGlzcGF0Y2hEb21FdmVudCh0aGlzLmVsZW1lbnQsIGBkcmFnZWU6dGFyZ2V0LSR7ZG9tVHlwZX1gLCB7IHRhcmdldDogdGhpcywgZHJhZ2dhYmxlIH0pXG4gICAgfVxuICB9XG5cbiAgZ2V0IGNvbnRhaW5lcigpIHtcbiAgICByZXR1cm4gKHRoaXMuX2NvbnRhaW5lciA9IHRoaXMuX2NvbnRhaW5lciB8fCB0aGlzLm9wdGlvbnMuY29udGFpbmVyIHx8IHRoaXMub3B0aW9ucy5wYXJlbnQgfHwgdGhpcy5lbGVtZW50Lm9mZnNldFBhcmVudClcbiAgfVxuXG4gIGdldCBkb21FdmVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5kb21FdmVudHMgIT09IGZhbHNlXG4gIH1cbn1cblxuIl0sIm5hbWVzIjpbImdldFBhcmVudHNDaGFpbiIsImNoaWxkRWxlbWVudCIsInJvb3RFbGVtZW50IiwiY2hhaW4iLCJlbGVtZW50IiwicGFyZW50Tm9kZSIsInVuc2hpZnQiLCJQb2ludCIsImNvbnN0cnVjdG9yIiwieCIsInkiLCJhZGQiLCJwIiwic3ViIiwibXVsdCIsImsiLCJuZWdhdGl2ZSIsImNvbXBhcmUiLCJjbG9uZSIsInRvU3RyaW5nIiwiZWxlbWVudE9mZnNldCIsInBhcmVudCIsIm9mZnNldFBhcmVudCIsIm9mZnNldExlZnQiLCJjbGllbnRMZWZ0Iiwib2Zmc2V0VG9wIiwiY2xpZW50VG9wIiwiY29uc2lkZXJPZmZzZXRFbGVtZW50cyIsInBvcCIsInJlZHVjZSIsInN1bSIsImVsZW1lbnRCb3VuZGluZ09mZnNldCIsImVsZW1lbnRSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicGFyZW50UmVjdCIsImxlZnQiLCJ0b3AiLCJlbGVtZW50U2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwiUmVjdGFuZ2xlIiwicG9zaXRpb24iLCJzaXplIiwiZ2V0UDEiLCJnZXRQMiIsImdldFAzIiwiZ2V0UDQiLCJnZXRDZW50ZXIiLCJvciIsInJlY3QiLCJNYXRoIiwibWluIiwibWF4IiwiYW5kIiwiaW5jbHVkZVBvaW50IiwiaW5jbHVkZVJlY3RhbmdsZSIsInJlY3RhbmdsZSIsIm1vdmVUb0JvdW5kIiwiYXhpcyIsInNlbEF4aXMiLCJjcm9zc1JlY3RhbmdsZSIsInRoaXNDZW50ZXIiLCJyZWN0Q2VudGVyIiwic2lnbiIsIm9mZnNldCIsImdldFNxdWFyZSIsInN0eWxlQXBwbHkiLCJlbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInN0eWxlIiwiZ3Jvd3RoIiwiZ2V0TWluU2lkZSIsImZyb21FbGVtZW50IiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiaXNDb25zaWRlclRyYW5zbGF0ZSIsIkV2ZW50RW1pdHRlciIsIm9wdGlvbnMiLCJldmVudHMiLCJvbiIsImV2ZW50TmFtZSIsImZuIiwiT2JqZWN0IiwiZW50cmllcyIsImVtaXQiLCJpbnRlcnJ1cHRlZCIsIl9sZW4iLCJhcmdzIiwiQXJyYXkiLCJfa2V5IiwiZnVuYyIsInNsaWNlIiwiaW50ZXJydXB0IiwibGlzdGVuZXJzIiwicHVzaCIsIm9mZiIsInByZXBlbmRPbiIsIm9uY2UiLCJfdGhpcyIsIndyYXBwZXIiLCJsaXN0ZW5lciIsImluZGV4IiwiZmluZEluZGV4Iiwic3BsaWNlIiwidW5zdWJzY3JpYmUiLCJyZXNldEVtaXR0ZXIiLCJyZXNldE9uIiwiYXJyYXkiLCJ2YWwiLCJpIiwic2NvcGVzIiwic2NvcGVTdGFjayIsIlNjb3BlIiwiZHJhZ2dhYmxlcyIsInRhcmdldHMiLCJmb3JFYWNoIiwic2NvcGUiLCJkcmFnZ2FibGUiLCJyZWxlYXNlRHJhZ2dhYmxlIiwidGFyZ2V0IiwicmVsZWFzZVRhcmdldCIsInRpbWVFbmQiLCJpbml0IiwiaW5pdERyYWdnYWJsZSIsImFkZERyYWdnYWJsZSIsImRyYWdFbmRBY3Rpb24iLCJvbkVuZCIsInJlbW92ZUl0ZW0iLCJhZGRUYXJnZXQiLCJzaG90VGFyZ2V0cyIsImZpbHRlciIsImluZGV4T2YiLCJjYXRjaERyYWdnYWJsZSIsInNvcnQiLCJhIiwiYiIsImdldFJlY3RhbmdsZSIsInBpblBvc2l0aW9uIiwiaW5pdGlhbFBvc2l0aW9uIiwicmVzZXQiLCJyZWZyZXNoIiwicG9zaXRpb25zIiwibWFwIiwiaW5uZXJEcmFnZ2FibGVzIiwibWVzc2FnZSIsInRhcmdldEluZGV4ZXMiLCJkZWZhdWx0U2NvcGUiLCJjdXJyZW50U2NvcGUiLCJjYWxsIiwidGhyb3R0bGUiLCJ3YWl0IiwibGFzdFRpbWUiLCJleGVjdXRlZEZ1bmN0aW9uIiwiY29udGV4dCIsIm5vdyIsIkRhdGUiLCJhcHBseSIsImRpc3BhdGNoRG9tRXZlbnQiLCJkZXRhaWwiLCJkaXNwYXRjaEV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJidWJibGVzIiwidGhyb3R0bGVkRHJhZ092ZXIiLCJjYWxsYmFjayIsImR1cmF0aW9uIiwidGhyb3R0bGVkQ2FsbGJhY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicGFzc2l2ZUZhbHNlIiwicGFzc2l2ZSIsImlzVG91Y2giLCJuYXZpZ2F0b3IiLCJtYXhUb3VjaFBvaW50cyIsIm1vdXNlRXZlbnRzIiwic3RhcnQiLCJtb3ZlIiwiZW5kIiwidG91Y2hFdmVudHMiLCJ0cmFuc2Zvcm1Qcm9wZXJ0eSIsInRyYW5zaXRpb25Qcm9wZXJ0eSIsImdldFRvdWNoQnlJRCIsInRvdWNoSWQiLCJjaGFuZ2VkVG91Y2hlcyIsImlkZW50aWZpZXIiLCJwcmV2ZW50RG91YmxlSW5pdCIsInNvbWUiLCJleGlzdGluZyIsImNvcHlTdHlsZXMiLCJzb3VyY2UiLCJkZXN0aW5hdGlvbiIsImNzIiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImtleSIsImNoaWxkcmVuIiwiRHJhZ2dhYmxlIiwiX2VuYWJsZSIsInN0YXJ0Qm91bmRpbmciLCJzdGFydFBvc2l0aW9uaW5nIiwic3RhcnRMaXN0ZW5pbmciLCJib3VuZGluZyIsImJvdW5kIiwicG9pbnQiLCJfc2V0RGVmYXVsdFRyYW5zaXRpb24iLCJpc0NvbnNpZGVyVHJhbnNmb3JtT2Zmc2V0IiwiY29udGFpbmVyIiwicGlubmVkUG9zaXRpb24iLCJfZHJhZ1N0YXJ0IiwiZHJhZ1N0YXJ0IiwiX2RyYWdNb3ZlIiwiZHJhZ01vdmUiLCJfZHJhZ0VuZCIsImRyYWdFbmQiLCJfbmF0aXZlRHJhZ1N0YXJ0IiwibmF0aXZlRHJhZ1N0YXJ0IiwiX25hdGl2ZURyYWdPdmVyIiwibmF0aXZlRHJhZ092ZXIiLCJkcmFnT3ZlclRocm90dGxlRHVyYXRpb24iLCJfbmF0aXZlRHJhZ0VuZCIsIm5hdGl2ZURyYWdFbmQiLCJfbmF0aXZlRHJvcCIsIm5hdGl2ZURyb3AiLCJfc2Nyb2xsIiwib25TY3JvbGwiLCJoYW5kbGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImdldFNpemUiLCJnZXRQb3NpdGlvbiIsIl90cmFuc2Zvcm1Qb3NpdGlvbiIsIl9zZXRUcmFuc2l0aW9uIiwidGltZSIsInRyYW5zaXRpb24iLCJ0cmFuc2l0aW9uQ3NzIiwidGVzdCIsInJlcGxhY2UiLCJfc2V0VHJhbnNsYXRlIiwidHJhbnNsYXRlQ3NzIiwidHJhbnNmb3JtIiwic2hvdWxkUmVtb3ZlWmVyb1RyYW5zbGF0ZSIsImlzU2lsZW50IiwiZW1pdERyYWdFdmVudCIsInNpbGVudCIsInJlc2V0UG9zaXRpb25Ub0luaXRpYWwiLCJyZWZyZXNoUG9zaXRpb24iLCJzZXRQb3NpdGlvbiIsImRldGVybWluZURpcmVjdGlvbiIsIl9wcmV2aW91c0RpcmVjdGlvblBvc2l0aW9uIiwiX3N0YXJ0UG9zaXRpb24iLCJsZWZ0RGlyZWN0aW9uIiwicmlnaHREaXJlY3Rpb24iLCJ1cERpcmVjdGlvbiIsImRvd25EaXJlY3Rpb24iLCJzZWVtc1Njcm9sbGluZyIsIl9zdGFydFRvdWNoVGltZXN0YW1wIiwidG91Y2hEcmFnZ2luZ1RocmVzaG9sZCIsInNob3VsZFVzZU5hdGl2ZURyYWdBbmREcm9wIiwiaXNUb3VjaEV2ZW50IiwibmF0aXZlRHJhZ0FuZERyb3AiLCJlbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3BPblRvdWNoIiwic3RvcFByb3BhZ2F0aW9uT25EcmFnU3RhcnQiLCJzdG9wUHJvcGFnYXRpb24iLCJUb3VjaEV2ZW50IiwidG91Y2hQb2ludCIsIl9zdGFydFRvdWNoUG9pbnQiLCJwYWdlWCIsImNsaWVudFgiLCJwYWdlWSIsImNsaWVudFkiLCJfdG91Y2hJZCIsIl9zdGFydFdpbmRvd1Njcm9sbFBvaW50Iiwid2luZG93U2Nyb2xsUG9pbnQiLCJfc3RhcnRTY3JvbGxFbGVtZW50c09mZnNldCIsInNjcm9sbEVsZW1lbnRzT2Zmc2V0IiwiSFRNTElucHV0RWxlbWVudCIsImZvY3VzIiwiX3N0YXJ0UGFyZW50c1Njcm9sbE9mZnNldCIsInBhcmVudHNTY3JvbGxPZmZzZXQiLCJlbXVsYXRlT25GaXJzdE1vdmUiLCJjYW5jZWxEcmFnZ2luZyIsImVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcCIsImNhbmNlbEVtdWxhdGlvbiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzY3JvbGxFbGVtZW50cyIsImRyYWdTdGFydFRocmVzaG9sZCIsIl9kcmFnU3RhcnRQZW5kaW5nIiwidG91Y2giLCJkeCIsImR5Iiwic3FydCIsImlzRHJhZ2dpbmciLCJjbGFzc0xpc3QiLCJzZXRUaW1lb3V0IiwicmVtb3ZlIiwiX2V2ZW50IiwiZGF0YVRyYW5zZmVyIiwic2V0RGF0YSIsImVmZmVjdEFsbG93ZWQiLCJkcm9wRWZmZWN0IiwicmVtb3ZlQXR0cmlidXRlIiwiY29udGFpbmVyUmVjdCIsImNsb25lZEVsZW1lbnQiLCJjbG9uZU5vZGUiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJlbXVsYXRpb25EcmFnZ2FibGUiLCJkb21FdmVudHMiLCJkcmFnOm1vdmUiLCJjb250YWluZXJSZWN0UG9pbnQiLCJkcmFnOmVuZCIsImRlc3Ryb3kiLCJyZW1vdmVDaGlsZCIsInR5cGUiLCJfY29udGFpbmVyIiwiX2hhbmRsZXIiLCJjb25zaWRlclRyYW5zZm9ybU9mZnNldCIsInNjcm9sbFgiLCJzY3JvbGxZIiwic2Nyb2xsUm9vdENvbnRhaW5lciIsIl9jYWNoZWRTY3JvbGxFbGVtZW50cyIsInNjcm9sbExlZnQiLCJzY3JvbGxUb3AiLCJwYXJlbnRzIiwiX2NhY2hlZFBhcmVudHMiLCJlbmFibGUiLCJkZWJvdW5jZSIsImltbWVkaWF0ZSIsInRpbWVvdXQiLCJsYXRlciIsImNsZWFyVGltZW91dCIsImdldERpc3RhbmNlIiwicDEiLCJwMiIsImdldFhEaWZmZXJlbmNlIiwiYWJzIiwiZ2V0WURpZmZlcmVuY2UiLCJ0cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5IiwicG93IiwiaW5kZXhPZk5lYXJlc3RQb2ludCIsImFyciIsInJhZGl1cyIsImdldERpc3RhbmNlRnVuYyIsInRlbXAiLCJMaXN0IiwiYXNzaWduIiwidGltZUV4Y2FuZ2UiLCJjaGFuZ2VkRHVyaW5nSXRlcmF0aW9uIiwidW5zdWJzY3JpYmVzIiwiTWFwIiwicmVzaXplT2JzZXJ2ZXIiLCJSZXNpemVPYnNlcnZlciIsIm9uUmVzaXplIiwiYmluZCIsIm9ic2VydmUiLCJyZW9yZGVyT25DaGFuZ2UiLCJsaXN0ZW5UbyIsIm9uTW92ZSIsImhhcyIsInNldCIsImdldCIsInVub2JzZXJ2ZSIsImRlbGV0ZSIsInN3YXBwaW5nRGlzYWJsZWQiLCJzb3J0ZWREcmFnZ2FibGVzIiwiZ2V0U29ydGVkRHJhZ2dhYmxlcyIsInBpbm5lZFBvc2l0aW9ucyIsImN1cnJlbnRJbmRleCIsInRhcmdldEluZGV4IiwiZGlzdGFuY2VGdW5jIiwiZW1pdExpc3RFdmVudCIsInJlb3JkZXJFbGVtZW50cyIsIm1vdmVkRHJhZ2dhYmxlIiwibmV4dCIsImluc2VydEJlZm9yZSIsImQiLCJsaXN0IiwiZ2V0Q3VycmVudFBpbm5lZFBvc2l0aW9ucyIsInNvcnRpbmciLCJjb25jYXQiLCJpbml0aWFsUG9zaXRpb25zIiwiaiIsImNsZWFyIiwiZHJhZ2dhYmxlQSIsImRyYWdnYWJsZUIiLCJfc3dhcHBpbmdEaXNhYmxlZCIsImRpc2FibGVkIiwiYXJyYXlNb3ZlIiwiZnJvbSIsInRvIiwiQnViYmxpbmdMaXN0IiwiYXV0b0RldGVjdEdhcCIsIl9nYXAiLCJleHBsaWNpdEdhcCIsInNvcnRlZCIsImlzQ29ubmVjdGVkIiwiY3VycmVudCIsImF1dG9EZXRlY3RTdGFydFBvc2l0aW9uIiwic3RhcnRQb3NpdGlvbiIsIm9uRHJhZ1N0YXJ0IiwiY2FjaGVkU29ydGVkRHJhZ2dhYmxlcyIsImluZGV4T2ZBY3RpdmVEcmFnZ2FibGUiLCJwcmV2RHJhZ2dhYmxlIiwibmV4dERyYWdnYWJsZSIsImN1cnJlbnRQb3NpdGlvbiIsImN1cnJlbnRPcmRlciIsImlzTW92aW5nQmFja3dhcmQiLCJwcmV2TmV3UG9zaXRpb24iLCJuZXh0UG9zaXRpb24iLCJjcm9zc0F4aXMiLCJpc01vdmluZ0ZvcndhcmQiLCJkcmFnZ2FibGVOZXdQb3NpdGlvbiIsImJ1YmJsaW5nIiwiY3VycmVudERyYWdnYWJsZSIsImluY2x1ZGVzIiwiZ2FwIiwidmVydGljYWxHYXAiLCJnYXBWYWx1ZSIsInJhbmdlIiwic3RvcCIsInN0ZXAiLCJyZXN1bHQiLCJkaXJlY3RDcm9zc2luZyIsIkwxUDEiLCJMMVAyIiwiTDJQMSIsIkwyUDIiLCJrMSIsImsyIiwiYjEiLCJiMiIsImJvdW5kVG9MaW5lIiwiQSIsIkIiLCJQIiwiQVAiLCJBQiIsImFiMiIsImFwX2FiIiwidCIsImdldFBvaW50T25MaW5lQnlMZW5naHQiLCJMUDEiLCJMUDIiLCJsZW5naHQiLCJwZXJjZW50IiwiYWRkUG9pbnRUb0JvdW5kUG9pbnRzIiwiYm91bmRwb2ludHMiLCJpc1JpZ2h0IiwiYlBvaW50IiwiQmFzaWNTdHJhdGVneSIsImJvdW5kUmVjdCIsIk5vdENyb3NzaW5nU3RyYXRlZ3kiLCJwb3NpdGlvbmluZyIsInJlY3RhbmdsZUxpc3QiLCJpbmRleGVzT2ZOZXdzIiwic3RhdGljUmVjdGFuZ2xlSW5kZXhlcyIsImluZGV4ZXMiLCJfcmVjdCIsInJlbW92YWJsZSIsImluZGV4T2ZTdGF0aWMiLCJzdGF0aWNSZWN0Iiwib2RsRHJhZ2dhYmxlc0xpc3QiLCJuZXdEcmFnZ2FibGVzIiwiaW5kZXhPZk5ld3MiLCJGbG9hdExlZnRTdHJhdGVneSIsInBhZGRpbmdUb3BMZWZ0IiwicGFkZGluZ0JvdHRvbVJpZ2h0IiwieUdhcEJldHdlZW5EcmFnZ2FibGVzIiwiX2luZGV4ZXNPZk5ld3MiLCJyZWN0UDIiLCJib3VuZGFyeVBvaW50cyIsInJlY3RJbmRleCIsImlzVmFsaWQiLCJuZXdMaXN0IiwibGlzdE9sZFBvc2l0aW9uIiwibmV3RHJhZ2dhYmxlIiwiRmxvYXRSaWdodFN0cmF0ZWd5IiwicGFkZGluZ1RvcFJpZ2h0IiwicGFkZGluZ0JvdHRvbUxlZnQiLCJwYWRkaW5nQm90dG9tTmVnTGVmdCIsImdldEFuZ2xlRGlmZiIsImFscGhhIiwiYmV0YSIsIm1pbkFuZ2xlIiwibWF4QW5nbGUiLCJQSSIsImdldEFuZ2xlIiwiZGlmZiIsIm5vcm1hbGl6ZUFuZ2xlIiwiYXRhbjIiLCJib3VuZEFuZ2xlIiwiZG1pbiIsImRtYXgiLCJnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0iLCJhbmdsZSIsImNlbnRlciIsImNvcyIsInNpbiIsIkJvdW5kIiwiX3NpemUiLCJpbnN0YW5jZSIsIkJvdW5kVG9SZWN0YW5nbGUiLCJjYWxjUG9pbnQiLCJCb3VuZFRvRWxlbWVudCIsIkJvdW5kVG9MaW5lWCIsInN0YXJ0WSIsImVuZFkiLCJCb3VuZFRvTGluZVkiLCJzdGFydFgiLCJlbmRYIiwiQm91bmRUb0xpbmUiLCJzdGFydFBvaW50IiwiZW5kUG9pbnQiLCJzb21lSyIsImNvc0JldGEiLCJzaW5CZXRhIiwicG9pbnQyIiwibmV3RW5kUG9pbnQiLCJwb2ludENyb3NzaW5nIiwiQm91bmRUb0NpcmNsZSIsIkJvdW5kVG9BcmMiLCJzdGFydEFuZ2xlIiwiZW5kQW5nbGUiLCJfc3RhcnRBbmdsZSIsIl9lbmRBbmdsZSIsIlRhcmdldCIsInBvc2l0aW9uaW5nU3RyYXRlZ3kiLCJzdHJhdGVneSIsImFjY2VwdCIsImluZGV4ZXNPZk5ldyIsIm9sZERyYWdnYWJsZXMiLCJyZWN0YW5nbGVzIiwiZW1pdFRhcmdldEV2ZW50IiwidGFyZ2V0UmVjdGFuZ2xlIiwiZHJhZ2dhYmxlU3F1YXJlIiwibmV3RHJhZ2dhYmxlc0luZGV4IiwicHVzaElubmVyRHJhZ2dhYmxlIiwiZG9tVHlwZSIsImxl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
