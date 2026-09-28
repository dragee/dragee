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
          targets.forEach(target => {
            removeItem(scope.targets, target);
          });
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
      this.targets.push(target);
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
      currentScope().addDraggable(this);
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
      draggables.forEach(draggable => this.watchDraggable(draggable));
      currentScope().addTarget(this);
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
      this.watchDraggable(draggable);
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
    watchDraggable(draggable) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZGV2LmpzIiwic291cmNlcyI6WyIuLi9zcmMvdXRpbHMvZ2V0LXBhcmVudHMtY2hhaW4uanMiLCIuLi9zcmMvZ2VvbWV0cnkvcG9pbnQuanMiLCIuLi9zcmMvZ2VvbWV0cnkvcmVjdGFuZ2xlLmpzIiwiLi4vc3JjL2V2ZW50RW1pdHRlci5qcyIsIi4uL3NyYy91dGlscy9yZW1vdmUtYXJyYXktaXRlbS5qcyIsIi4uL3NyYy9zY29wZS5qcyIsIi4uL3NyYy91dGlscy90aHJvdHRsZS5qcyIsIi4uL3NyYy91dGlscy9kaXNwYXRjaC1kb20tZXZlbnQuanMiLCIuLi9zcmMvZHJhZ2dhYmxlLmpzIiwiLi4vc3JjL3V0aWxzL2RlYm91bmNlLmpzIiwiLi4vc3JjL2dlb21ldHJ5L2Rpc3RhbmNlcy5qcyIsIi4uL3NyYy9saXN0LmpzIiwiLi4vc3JjL2J1YmJsaW5nTGlzdC5qcyIsIi4uL3NyYy91dGlscy9yYW5nZS5qcyIsIi4uL3NyYy9nZW9tZXRyeS9ib3VuZHMuanMiLCIuLi9zcmMvcG9zaXRpb25pbmcuanMiLCIuLi9zcmMvZ2VvbWV0cnkvYW5nbGVzLmpzIiwiLi4vc3JjL2JvdW5kaW5nLmpzIiwiLi4vc3JjL3RhcmdldC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRQYXJlbnRzQ2hhaW4oY2hpbGRFbGVtZW50LCByb290RWxlbWVudCkge1xuXHRjb25zdCBjaGFpbiA9IFtdXG4gIGxldCBlbGVtZW50ID0gY2hpbGRFbGVtZW50XG5cbiAgd2hpbGUoZWxlbWVudC5wYXJlbnROb2RlICYmIGVsZW1lbnQgIT09IHJvb3RFbGVtZW50KSB7XG4gICAgY2hhaW4udW5zaGlmdChlbGVtZW50LnBhcmVudE5vZGUpXG4gICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZVxuICB9XG5cbiAgcmV0dXJuIGNoYWluXG59XG4iLCJpbXBvcnQgZ2V0UGFyZW50c0NoYWluIGZyb20gJy4uL3V0aWxzL2dldC1wYXJlbnRzLWNoYWluJ1xuXG4vKiogQ2xhc3MgcmVwcmVzZW50aW5nIGEgcG9pbnQuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2ludCB7XG4gIC8qKlxuICAqIENyZWF0ZSBhIHBvaW50LlxuICAqIEBwYXJhbSB7bnVtYmVyfSB4IC0gVGhlIHggdmFsdWUuXG4gICogQHBhcmFtIHtudW1iZXJ9IHkgLSBUaGUgeSB2YWx1ZS5cbiAgKi9cbiAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgIHRoaXMueCA9IHhcbiAgICB0aGlzLnkgPSB5XG4gIH1cblxuICBhZGQocCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54ICsgcC54LCB0aGlzLnkgKyBwLnkpXG4gIH1cblxuICBzdWIocCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54IC0gcC54LCB0aGlzLnkgLSBwLnkpXG4gIH1cblxuICBtdWx0KGspIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCAqIGssIHRoaXMueSAqIGspXG4gIH1cblxuICBuZWdhdGl2ZSgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KC10aGlzLngsIC10aGlzLnkpXG4gIH1cblxuICBjb21wYXJlKHApIHtcbiAgICByZXR1cm4gKHRoaXMueCA9PT0gcC54ICYmIHRoaXMueSA9PT0gcC55KVxuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLngsIHRoaXMueSlcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiBge3g9JHt0aGlzLnh9LHk9JHt0aGlzLnl9fWBcbiAgfVxuXG4gIHN0YXRpYyBlbGVtZW50T2Zmc2V0KGVsZW1lbnQsIHBhcmVudCkge1xuICAgIHBhcmVudCA9IHBhcmVudCB8fCBlbGVtZW50LnBhcmVudE5vZGVcbiAgICBpZiAocGFyZW50ID09PSBlbGVtZW50KSB7XG4gICAgICByZXR1cm4gbmV3IFBvaW50KDAsIDApO1xuICAgIH0gZWxzZSBpZiAocGFyZW50ID09PSBlbGVtZW50Lm9mZnNldFBhcmVudCkge1xuICAgICAgcmV0dXJuIG5ldyBQb2ludChcbiAgICAgICAgZWxlbWVudC5vZmZzZXRMZWZ0ICsgcGFyZW50LmNsaWVudExlZnQsXG4gICAgICAgIGVsZW1lbnQub2Zmc2V0VG9wICsgcGFyZW50LmNsaWVudFRvcFxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjb25zaWRlck9mZnNldEVsZW1lbnRzID0gW2VsZW1lbnQsIGdldFBhcmVudHNDaGFpbihlbGVtZW50LCBwYXJlbnQpLnBvcCgpXVxuICAgICAgcmV0dXJuIG5ldyBQb2ludChcbiAgICAgICAgY29uc2lkZXJPZmZzZXRFbGVtZW50cy5yZWR1Y2UoKHN1bSwgcCkgPT4gc3VtICsgcC5vZmZzZXRMZWZ0LCAwKSArIHBhcmVudC5jbGllbnRMZWZ0LFxuICAgICAgICBjb25zaWRlck9mZnNldEVsZW1lbnRzLnJlZHVjZSgoc3VtLCBwKSA9PiBzdW0gKyBwLm9mZnNldFRvcCwgMCkgKyBwYXJlbnQuY2xpZW50VG9wXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGVsZW1lbnRCb3VuZGluZ09mZnNldChlbGVtZW50LCBwYXJlbnQpIHtcbiAgICBwYXJlbnQgPSBwYXJlbnQgfHwgZWxlbWVudC5wYXJlbnROb2RlXG4gICAgY29uc3QgZWxlbWVudFJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgY29uc3QgcGFyZW50UmVjdCA9IHBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIHJldHVybiBuZXcgUG9pbnQoXG4gICAgICBlbGVtZW50UmVjdC5sZWZ0IC0gcGFyZW50UmVjdC5sZWZ0LFxuICAgICAgZWxlbWVudFJlY3QudG9wIC0gcGFyZW50UmVjdC50b3BcbiAgICApXG4gIH1cblxuICBzdGF0aWMgZWxlbWVudFNpemUoZWxlbWVudCkge1xuICAgIGNvbnN0IGVsZW1lbnRSZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIHJldHVybiBuZXcgUG9pbnQoXG4gICAgICBlbGVtZW50UmVjdC53aWR0aCxcbiAgICAgIGVsZW1lbnRSZWN0LmhlaWdodFxuICAgIClcbiAgfVxufVxuIiwiaW1wb3J0IFBvaW50IGZyb20gJy4vcG9pbnQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY3RhbmdsZSB7XG4gIGNvbnN0cnVjdG9yKHBvc2l0aW9uLCBzaXplKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgdGhpcy5zaXplID0gc2l6ZVxuICB9XG5cbiAgZ2V0UDEoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25cbiAgfVxuXG4gIGdldFAyKCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHRoaXMucG9zaXRpb24ueSlcbiAgfVxuXG4gIGdldFAzKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLnNpemUpXG4gIH1cblxuICBnZXRQNCgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnkpXG4gIH1cblxuICBnZXRDZW50ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb24uYWRkKHRoaXMuc2l6ZS5tdWx0KDAuNSkpXG4gIH1cblxuICBvcihyZWN0KSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBuZXcgUG9pbnQoTWF0aC5taW4odGhpcy5wb3NpdGlvbi54LCByZWN0LnBvc2l0aW9uLngpLCBNYXRoLm1pbih0aGlzLnBvc2l0aW9uLnksIHJlY3QucG9zaXRpb24ueSkpXG4gICAgY29uc3Qgc2l6ZSA9IChuZXcgUG9pbnQoTWF0aC5tYXgodGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHJlY3QucG9zaXRpb24ueCArIHJlY3Quc2l6ZS54KSwgTWF0aC5tYXgodGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnksIHJlY3QucG9zaXRpb24ueSArIHJlY3Quc2l6ZS55KSkpLnN1Yihwb3NpdGlvbilcbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZShwb3NpdGlvbiwgc2l6ZSlcbiAgfVxuXG4gIGFuZChyZWN0KSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBuZXcgUG9pbnQoTWF0aC5tYXgodGhpcy5wb3NpdGlvbi54LCByZWN0LnBvc2l0aW9uLngpLCBNYXRoLm1heCh0aGlzLnBvc2l0aW9uLnksIHJlY3QucG9zaXRpb24ueSkpXG4gICAgY29uc3Qgc2l6ZSA9IChuZXcgUG9pbnQoTWF0aC5taW4odGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHJlY3QucG9zaXRpb24ueCArIHJlY3Quc2l6ZS54KSwgTWF0aC5taW4odGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnksIHJlY3QucG9zaXRpb24ueSArIHJlY3Quc2l6ZS55KSkpLnN1Yihwb3NpdGlvbilcbiAgICBpZiAoc2l6ZS54IDw9IDAgfHwgc2l6ZS55IDw9IDApIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHBvc2l0aW9uLCBzaXplKVxuICB9XG5cbiAgaW5jbHVkZVBvaW50KHApIHtcbiAgICByZXR1cm4gISh0aGlzLnBvc2l0aW9uLnggPiBwLnggfHwgdGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLnggPCBwLnggfHwgdGhpcy5wb3NpdGlvbi55ID4gcC55IHx8IHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55IDwgcC55KVxuICB9XG5cbiAgaW5jbHVkZVJlY3RhbmdsZShyZWN0YW5nbGUpIHtcbiAgICByZXR1cm4gdGhpcy5pbmNsdWRlUG9pbnQocmVjdGFuZ2xlLnBvc2l0aW9uKSAmJiB0aGlzLmluY2x1ZGVQb2ludChyZWN0YW5nbGUuZ2V0UDMoKSlcbiAgfVxuXG4gIG1vdmVUb0JvdW5kKHJlY3QsIGF4aXMpIHtcbiAgICBsZXQgc2VsQXhpcywgY3Jvc3NSZWN0YW5nbGVcbiAgICBpZiAoYXhpcykge1xuICAgICAgc2VsQXhpcyA9IGF4aXNcbiAgICB9IGVsc2Uge1xuICAgICAgY3Jvc3NSZWN0YW5nbGUgPSB0aGlzLmFuZChyZWN0KVxuICAgICAgaWYgKCFjcm9zc1JlY3RhbmdsZSkge1xuICAgICAgICByZXR1cm4gcmVjdFxuICAgICAgfVxuICAgICAgc2VsQXhpcyA9IGNyb3NzUmVjdGFuZ2xlLnNpemUueCA+IGNyb3NzUmVjdGFuZ2xlLnNpemUueSA/ICd5JyA6ICd4J1xuICAgIH1cbiAgICBjb25zdCB0aGlzQ2VudGVyID0gdGhpcy5nZXRDZW50ZXIoKVxuICAgIGNvbnN0IHJlY3RDZW50ZXIgPSByZWN0LmdldENlbnRlcigpXG4gICAgY29uc3Qgc2lnbiA9IHRoaXNDZW50ZXJbc2VsQXhpc10gPiByZWN0Q2VudGVyW3NlbEF4aXNdID8gLTEgOiAxXG4gICAgY29uc3Qgb2Zmc2V0ID0gc2lnbiA+IDAgPyB0aGlzLnBvc2l0aW9uW3NlbEF4aXNdICsgdGhpcy5zaXplW3NlbEF4aXNdIC0gcmVjdC5wb3NpdGlvbltzZWxBeGlzXSA6IHRoaXMucG9zaXRpb25bc2VsQXhpc10gLSAocmVjdC5wb3NpdGlvbltzZWxBeGlzXSArIHJlY3Quc2l6ZVtzZWxBeGlzXSlcbiAgICByZWN0LnBvc2l0aW9uW3NlbEF4aXNdID0gcmVjdC5wb3NpdGlvbltzZWxBeGlzXSArIG9mZnNldFxuICAgIHJldHVybiByZWN0XG4gIH1cblxuICBnZXRTcXVhcmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZS54ICogdGhpcy5zaXplLnlcbiAgfVxuXG4gIHN0eWxlQXBwbHkoZWwpIHtcbiAgICBlbCA9IGVsIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2luZCcpXG4gICAgZWwuc3R5bGUubGVmdCA9IHRoaXMucG9zaXRpb24ueCArICdweCdcbiAgICBlbC5zdHlsZS50b3AgPSB0aGlzLnBvc2l0aW9uLnkgKyAncHgnXG4gICAgZWwuc3R5bGUud2lkdGggPSB0aGlzLnNpemUueCArICdweCdcbiAgICBlbC5zdHlsZS5oZWlnaHQgPSB0aGlzLnNpemUueSArICdweCdcbiAgfVxuXG4gIGdyb3d0aChzaXplKSB7XG4gICAgdGhpcy5zaXplID0gdGhpcy5zaXplLmFkZChzaXplKVxuICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uLmFkZChzaXplLm11bHQoLTAuNSkpXG4gIH1cblxuICBnZXRNaW5TaWRlKCkge1xuICAgIHJldHVybiBNYXRoLm1pbih0aGlzLnNpemUueCwgdGhpcy5zaXplLnkpXG4gIH1cblxuICBzdGF0aWMgZnJvbUVsZW1lbnQoZWxlbWVudCwgcGFyZW50PWVsZW1lbnQucGFyZW50Tm9kZSwgaXNDb25zaWRlclRyYW5zbGF0ZT1mYWxzZSkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gaXNDb25zaWRlclRyYW5zbGF0ZVxuICAgICAgPyBQb2ludC5lbGVtZW50Qm91bmRpbmdPZmZzZXQoZWxlbWVudCwgcGFyZW50KVxuICAgICAgOiBQb2ludC5lbGVtZW50T2Zmc2V0KGVsZW1lbnQsIHBhcmVudClcbiAgICBjb25zdCBzaXplID0gUG9pbnQuZWxlbWVudFNpemUoZWxlbWVudClcbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZShwb3NpdGlvbiwgc2l6ZSlcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKG9wdGlvbnMgPSB7fSkge1xuICAgIHRoaXMuZXZlbnRzID0ge31cblxuICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMub24pIHtcbiAgICAgIGZvciAoY29uc3QgW2V2ZW50TmFtZSwgZm5dIG9mIE9iamVjdC5lbnRyaWVzKG9wdGlvbnMub24pKSB7XG4gICAgICAgIHRoaXMub24oZXZlbnROYW1lLCBmbilcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBlbWl0KGV2ZW50TmFtZSwgLi4uYXJncykge1xuICAgIHRoaXMuaW50ZXJydXB0ZWQgPSBmYWxzZVxuXG4gICAgaWYgKCF0aGlzLmV2ZW50c1tldmVudE5hbWVdKSByZXR1cm5cblxuICAgIC8vIEl0ZXJhdGUgb3ZlciBhIGNvcHkgc28gbGlzdGVuZXJzIGNhbiB1bnN1YnNjcmliZSB3aGlsZSB0aGUgZXZlbnQgaXMgYmVpbmcgZW1pdHRlZFxuICAgIGZvciAoY29uc3QgZnVuYyBvZiB0aGlzLmV2ZW50c1tldmVudE5hbWVdLnNsaWNlKCkpIHtcbiAgICAgIGZ1bmMoLi4uYXJncylcbiAgICAgIGlmICh0aGlzLmludGVycnVwdGVkKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGludGVycnVwdCgpIHtcbiAgICB0aGlzLmludGVycnVwdGVkID0gdHJ1ZVxuICB9XG5cbiAgb24oZXZlbnROYW1lLCBmbikge1xuICAgIHRoaXMubGlzdGVuZXJzKGV2ZW50TmFtZSkucHVzaChmbilcbiAgICByZXR1cm4gKCkgPT4gdGhpcy5vZmYoZXZlbnROYW1lLCBmbilcbiAgfVxuXG4gIHByZXBlbmRPbihldmVudE5hbWUsIGZuKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMoZXZlbnROYW1lKS51bnNoaWZ0KGZuKVxuICAgIHJldHVybiAoKSA9PiB0aGlzLm9mZihldmVudE5hbWUsIGZuKVxuICB9XG5cbiAgb25jZShldmVudE5hbWUsIGZuKSB7XG4gICAgY29uc3Qgd3JhcHBlciA9ICguLi5hcmdzKSA9PiB7XG4gICAgICB0aGlzLm9mZihldmVudE5hbWUsIHdyYXBwZXIpXG4gICAgICBmbiguLi5hcmdzKVxuICAgIH1cbiAgICB3cmFwcGVyLmxpc3RlbmVyID0gZm5cbiAgICByZXR1cm4gdGhpcy5vbihldmVudE5hbWUsIHdyYXBwZXIpXG4gIH1cblxuICBvZmYoZXZlbnROYW1lLCBmbikge1xuICAgIGlmICghdGhpcy5ldmVudHNbZXZlbnROYW1lXSkgcmV0dXJuXG5cbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0uZmluZEluZGV4KChsaXN0ZW5lcikgPT4gbGlzdGVuZXIgPT09IGZuIHx8IGxpc3RlbmVyLmxpc3RlbmVyID09PSBmbilcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLnNwbGljZShpbmRleCwgMSlcbiAgICB9XG4gIH1cblxuICB1bnN1YnNjcmliZShldmVudE5hbWUsIGZuKSB7XG4gICAgdGhpcy5vZmYoZXZlbnROYW1lLCBmbilcbiAgfVxuXG4gIGxpc3RlbmVycyhldmVudE5hbWUpIHtcbiAgICByZXR1cm4gKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gfHw9IFtdKVxuICB9XG5cbiAgcmVzZXRFbWl0dGVyICgpIHtcbiAgICB0aGlzLmV2ZW50cyA9IHt9XG4gIH1cblxuICByZXNldE9uKGV2ZW50TmFtZSkge1xuICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSBbXVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhcnJheSwgdmFsKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoYXJyYXlbaV0gPT09IHZhbCkge1xuICAgICAgYXJyYXkuc3BsaWNlKGksIDEpXG4gICAgICBpLS1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycmF5XG59XG4iLCJpbXBvcnQgcmVtb3ZlSXRlbSBmcm9tICcuL3V0aWxzL3JlbW92ZS1hcnJheS1pdGVtJ1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50RW1pdHRlcidcblxuY29uc3Qgc2NvcGVzID0gW11cbmNvbnN0IHNjb3BlU3RhY2sgPSBbXVxuXG5jbGFzcyBTY29wZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKGRyYWdnYWJsZXMsIHRhcmdldHMsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcihvcHRpb25zKVxuICAgIHNjb3Blcy5mb3JFYWNoKChzY29wZSkgPT4ge1xuICAgICAgaWYgKGRyYWdnYWJsZXMpIHtcbiAgICAgICAgZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHNjb3BlLnJlbGVhc2VEcmFnZ2FibGUoZHJhZ2dhYmxlKSlcbiAgICAgIH1cblxuICAgICAgaWYgKHRhcmdldHMpIHtcbiAgICAgICAgdGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHtcbiAgICAgICAgICByZW1vdmVJdGVtKHNjb3BlLnRhcmdldHMsIHRhcmdldClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gZHJhZ2dhYmxlcyB8fCBbXVxuICAgIHRoaXMudGFyZ2V0cyA9IHRhcmdldHMgfHwgW11cbiAgICBzY29wZXMucHVzaCh0aGlzKVxuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgIHRpbWVFbmQ6IChvcHRpb25zLnRpbWVFbmQpIHx8IDQwMFxuICAgIH1cblxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHRoaXMuaW5pdERyYWdnYWJsZShkcmFnZ2FibGUpKVxuICB9XG5cbiAgYWRkRHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5wdXNoKGRyYWdnYWJsZSlcbiAgICB0aGlzLmluaXREcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICB9XG5cbiAgaW5pdERyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICBkcmFnZ2FibGUuZHJhZ0VuZEFjdGlvbiA9ICgpID0+IHRoaXMub25FbmQoZHJhZ2dhYmxlKVxuICB9XG5cbiAgcmVsZWFzZURyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICByZW1vdmVJdGVtKHRoaXMuZHJhZ2dhYmxlcywgZHJhZ2dhYmxlKVxuICB9XG5cbiAgYWRkVGFyZ2V0KHRhcmdldCkge1xuICAgIHRoaXMudGFyZ2V0cy5wdXNoKHRhcmdldClcbiAgfVxuXG4gIG9uRW5kKGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IHNob3RUYXJnZXRzID0gdGhpcy50YXJnZXRzLmZpbHRlcigodGFyZ2V0KSA9PiB7XG4gICAgICByZXR1cm4gdGFyZ2V0LmRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMVxuICAgIH0pLmZpbHRlcigodGFyZ2V0KSA9PiB7XG4gICAgICByZXR1cm4gdGFyZ2V0LmNhdGNoRHJhZ2dhYmxlKGRyYWdnYWJsZSlcbiAgICB9KS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICByZXR1cm4gYS5nZXRSZWN0YW5nbGUoKS5nZXRTcXVhcmUoKSAtIGIuZ2V0UmVjdGFuZ2xlKCkuZ2V0U3F1YXJlKClcbiAgICB9KVxuXG4gICAgaWYgKHNob3RUYXJnZXRzLmxlbmd0aCkge1xuICAgICAgc2hvdFRhcmdldHNbMF0ub25FbmQoZHJhZ2dhYmxlKVxuICAgIH0gZWxzZSBpZiAoZHJhZ2dhYmxlLnRhcmdldHMubGVuZ3RoKSB7XG4gICAgICBkcmFnZ2FibGUucGluUG9zaXRpb24oZHJhZ2dhYmxlLmluaXRpYWxQb3NpdGlvbiwgdGhpcy5vcHRpb25zLnRpbWVFbmQpXG4gICAgfVxuXG4gICAgdGhpcy5lbWl0KCdzY29wZTpjaGFuZ2UnKVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy50YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4gdGFyZ2V0LnJlc2V0KCkpXG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5yZWZyZXNoKCkpXG4gICAgdGhpcy50YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4gdGFyZ2V0LnJlZnJlc2goKSlcbiAgfVxuXG4gIGdldCBwb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0cy5tYXAoKHRhcmdldCkgPT4ge1xuICAgICAgcmV0dXJuIHRhcmdldC5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHRoaXMuZHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkpXG4gICAgfSlcbiAgfVxuXG4gIHNldCBwb3NpdGlvbnMocG9zaXRpb25zKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9ICd3cm9uZyBhcnJheSBsZW5ndGgnXG4gICAgaWYgKHBvc2l0aW9ucy5sZW5ndGggPT09IHRoaXMudGFyZ2V0cy5sZW5ndGgpIHtcbiAgICAgIHRoaXMudGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHRhcmdldC5yZXNldCgpKVxuXG4gICAgICBwb3NpdGlvbnMuZm9yRWFjaCgodGFyZ2V0SW5kZXhlcywgaSkgPT4ge1xuICAgICAgICB0YXJnZXRJbmRleGVzLmZvckVhY2goKGluZGV4KSA9PiB7XG4gICAgICAgICAgdGhpcy50YXJnZXRzW2ldLmFkZCh0aGlzLmRyYWdnYWJsZXNbaW5kZXhdKVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbWVzc2FnZVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBkZWZhdWx0U2NvcGUgPSBuZXcgU2NvcGUoKVxuXG5mdW5jdGlvbiBjdXJyZW50U2NvcGUoKSB7XG4gIHJldHVybiBzY29wZVN0YWNrW3Njb3BlU3RhY2subGVuZ3RoIC0gMV0gfHwgZGVmYXVsdFNjb3BlXG59XG5cbmZ1bmN0aW9uIHNjb3BlKGZuKSB7XG4gIGNvbnN0IGN1cnJlbnRTY29wZSA9IG5ldyBTY29wZSgpXG5cbiAgc2NvcGVTdGFjay5wdXNoKGN1cnJlbnRTY29wZSlcbiAgdHJ5IHtcbiAgICBmbi5jYWxsKClcbiAgfSBmaW5hbGx5IHtcbiAgICBzY29wZVN0YWNrLnBvcCgpXG4gIH1cbiAgcmV0dXJuIGN1cnJlbnRTY29wZVxufVxuXG5leHBvcnQgeyBzY29wZXMsIGRlZmF1bHRTY29wZSwgY3VycmVudFNjb3BlLCBTY29wZSwgc2NvcGUgfVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGhyb3R0bGUoZnVuYywgd2FpdCkge1xuICBsZXQgbGFzdFRpbWUgPSAwXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGV4ZWN1dGVkRnVuY3Rpb24oKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXNcbiAgICBjb25zdCBhcmdzID0gYXJndW1lbnRzXG5cbiAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpXG4gICAgaWYgKG5vdyAtIGxhc3RUaW1lID49IHdhaXQpIHtcbiAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncylcbiAgICAgIGxhc3RUaW1lID0gbm93XG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwYXRjaERvbUV2ZW50KGVsZW1lbnQsIGV2ZW50TmFtZSwgZGV0YWlsKSB7XG4gIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoZXZlbnROYW1lLCB7IGJ1YmJsZXM6IHRydWUsIGRldGFpbCB9KSlcbn1cbiIsImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudEVtaXR0ZXInXG5pbXBvcnQgUG9pbnQgZnJvbSAnLi9nZW9tZXRyeS9wb2ludCdcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSAnLi9nZW9tZXRyeS9yZWN0YW5nbGUnXG5pbXBvcnQgeyBzY29wZXMsIGN1cnJlbnRTY29wZSB9IGZyb20gJy4vc2NvcGUnXG5pbXBvcnQgdGhyb3R0bGUgZnJvbSAnLi91dGlscy90aHJvdHRsZSdcbmltcG9ydCBnZXRQYXJlbnRzQ2hhaW4gZnJvbSAnLi91dGlscy9nZXQtcGFyZW50cy1jaGFpbidcbmltcG9ydCBkaXNwYXRjaERvbUV2ZW50IGZyb20gJy4vdXRpbHMvZGlzcGF0Y2gtZG9tLWV2ZW50J1xuXG5jb25zdCB0aHJvdHRsZWREcmFnT3ZlciA9IChjYWxsYmFjaywgZHVyYXRpb24pID0+IHtcbiAgY29uc3QgdGhyb3R0bGVkQ2FsbGJhY2sgPSB0aHJvdHRsZSgoZXZlbnQpID0+IGNhbGxiYWNrKGV2ZW50KSwgZHVyYXRpb24pXG4gIHJldHVybiAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhyb3R0bGVkQ2FsbGJhY2soZXZlbnQpXG4gIH1cbn1cblxuY29uc3QgcGFzc2l2ZUZhbHNlID0geyBwYXNzaXZlOiBmYWxzZSB9XG5cbmNvbnN0IGlzVG91Y2ggPSBuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHMgPiAwXG5jb25zdCBtb3VzZUV2ZW50cyA9IHtcbiAgc3RhcnQ6ICdtb3VzZWRvd24nLFxuICBtb3ZlOiAnbW91c2Vtb3ZlJyxcbiAgZW5kOiAnbW91c2V1cCdcbn1cbmNvbnN0IHRvdWNoRXZlbnRzID0ge1xuICBzdGFydDogJ3RvdWNoc3RhcnQnLFxuICBtb3ZlOiAndG91Y2htb3ZlJyxcbiAgZW5kOiAndG91Y2hlbmQnXG59XG5jb25zdCBkcmFnZ2FibGVzID0gW11cbmNvbnN0IHRyYW5zZm9ybVByb3BlcnR5ID0gJ3RyYW5zZm9ybSdcbmNvbnN0IHRyYW5zaXRpb25Qcm9wZXJ0eSA9ICd0cmFuc2l0aW9uJ1xuXG5mdW5jdGlvbiBnZXRUb3VjaEJ5SUQoZWxlbWVudCwgdG91Y2hJZCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnQuY2hhbmdlZFRvdWNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZWxlbWVudC5jaGFuZ2VkVG91Y2hlc1tpXS5pZGVudGlmaWVyID09PSB0b3VjaElkKSB7XG4gICAgICByZXR1cm4gZWxlbWVudC5jaGFuZ2VkVG91Y2hlc1tpXVxuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cblxuZnVuY3Rpb24gcHJldmVudERvdWJsZUluaXQoZHJhZ2dhYmxlKSB7XG4gIGNvbnN0IG1lc3NhZ2UgPSBcImZvciB0aGlzIGVsZW1lbnQgRHJhZ2VlLkRyYWdnYWJsZSBpcyBhbHJlYWR5IGV4aXN0LCBkb24ndCBjcmVhdGUgaXQgdHdpY2UgXCJcbiAgaWYgKGRyYWdnYWJsZXMuc29tZSgoZXhpc3RpbmcpID0+IGRyYWdnYWJsZS5lbGVtZW50ID09PSBleGlzdGluZy5lbGVtZW50KSkge1xuICAgIHRocm93IG1lc3NhZ2VcbiAgfVxuICBkcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxufVxuXG5mdW5jdGlvbiBjb3B5U3R5bGVzKHNvdXJjZSwgZGVzdGluYXRpb24pIHtcbiAgY29uc3QgY3MgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShzb3VyY2UpXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGtleSA9IGNzW2ldXG4gICAgaWYgKChrZXkuaW5kZXhPZigndHJhbnNpdGlvbicpIDwgMCkgJiYgKGtleS5pbmRleE9mKCd0cmFuc2Zvcm0nKSA8IDApKSB7XG4gICAgICBkZXN0aW5hdGlvbi5zdHlsZVtrZXldID0gY3Nba2V5XVxuICAgIH1cbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc291cmNlLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgY29weVN0eWxlcyhzb3VyY2UuY2hpbGRyZW5baV0sIGRlc3RpbmF0aW9uLmNoaWxkcmVuW2ldKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYWdnYWJsZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcihvcHRpb25zKVxuICAgIHRoaXMudGFyZ2V0cyA9IFtdXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9uc1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgICBwcmV2ZW50RG91YmxlSW5pdCh0aGlzKVxuICAgIGN1cnJlbnRTY29wZSgpLmFkZERyYWdnYWJsZSh0aGlzKVxuICAgIHRoaXMuX2VuYWJsZSA9IHRydWVcbiAgICB0aGlzLnN0YXJ0Qm91bmRpbmcoKVxuICAgIHRoaXMuc3RhcnRQb3NpdGlvbmluZygpXG4gICAgdGhpcy5zdGFydExpc3RlbmluZygpXG4gIH1cblxuICBzdGFydEJvdW5kaW5nKCkge1xuICAgIHRoaXMuYm91bmRpbmcgPSB0aGlzLm9wdGlvbnMuYm91bmRpbmcgfHwge1xuICAgICAgYm91bmQ6IHRoaXMub3B0aW9ucy5ib3VuZCB8fCAoKHBvaW50KSA9PiBwb2ludClcbiAgICB9XG4gIH1cblxuICBzdGFydFBvc2l0aW9uaW5nKCkge1xuICAgIHRoaXMuX3NldERlZmF1bHRUcmFuc2l0aW9uKClcbiAgICB0aGlzLm9mZnNldCA9IHRoaXMuaXNDb25zaWRlclRyYW5zZm9ybU9mZnNldFxuICAgICAgPyBQb2ludC5lbGVtZW50Qm91bmRpbmdPZmZzZXQodGhpcy5lbGVtZW50LCB0aGlzLmNvbnRhaW5lcilcbiAgICAgIDogUG9pbnQuZWxlbWVudE9mZnNldCh0aGlzLmVsZW1lbnQsIHRoaXMuY29udGFpbmVyKVxuICAgIHRoaXMucGlubmVkUG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICAgIHRoaXMuaW5pdGlhbFBvc2l0aW9uID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uIHx8IHRoaXMub2Zmc2V0XG5cbiAgICB0aGlzLnBpblBvc2l0aW9uKHRoaXMuaW5pdGlhbFBvc2l0aW9uKVxuXG4gICAgaWYgKHRoaXMuYm91bmRpbmcucmVmcmVzaCkge1xuICAgICAgdGhpcy5ib3VuZGluZy5yZWZyZXNoKClcbiAgICB9XG4gIH1cblxuICBzdGFydExpc3RlbmluZygpIHtcbiAgICB0aGlzLl9kcmFnU3RhcnQgPSAoZXZlbnQpID0+IHRoaXMuZHJhZ1N0YXJ0KGV2ZW50KVxuICAgIHRoaXMuX2RyYWdNb3ZlID0gKGV2ZW50KSA9PiB0aGlzLmRyYWdNb3ZlKGV2ZW50KVxuICAgIHRoaXMuX2RyYWdFbmQgPSAoZXZlbnQpID0+IHRoaXMuZHJhZ0VuZChldmVudClcbiAgICB0aGlzLl9uYXRpdmVEcmFnU3RhcnQgPSAoZXZlbnQpID0+IHRoaXMubmF0aXZlRHJhZ1N0YXJ0KGV2ZW50KVxuICAgIHRoaXMuX25hdGl2ZURyYWdPdmVyID0gdGhyb3R0bGVkRHJhZ092ZXIoKGV2ZW50KSA9PiB0aGlzLm5hdGl2ZURyYWdPdmVyKGV2ZW50KSwgdGhpcy5kcmFnT3ZlclRocm90dGxlRHVyYXRpb24pXG4gICAgdGhpcy5fbmF0aXZlRHJhZ0VuZCA9IChldmVudCkgPT4gdGhpcy5uYXRpdmVEcmFnRW5kKGV2ZW50KVxuICAgIHRoaXMuX25hdGl2ZURyb3AgPSAoZXZlbnQpID0+IHRoaXMubmF0aXZlRHJvcChldmVudClcbiAgICB0aGlzLl9zY3JvbGwgPSAoZXZlbnQpID0+IHRoaXMub25TY3JvbGwoZXZlbnQpXG5cbiAgICB0aGlzLmhhbmRsZXIuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0LCBwYXNzaXZlRmFsc2UpXG4gICAgdGhpcy5oYW5kbGVyLmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydCwgcGFzc2l2ZUZhbHNlKVxuICB9XG5cbiAgZ2V0U2l6ZSgpIHtcbiAgICByZXR1cm4gUG9pbnQuZWxlbWVudFNpemUodGhpcy5lbGVtZW50KVxuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMub2Zmc2V0LmFkZCh0aGlzLl90cmFuc2Zvcm1Qb3NpdGlvbiB8fCBuZXcgUG9pbnQoMCwgMCkpXG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25cbiAgfVxuXG4gIGdldENlbnRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi5hZGQodGhpcy5nZXRTaXplKCkubXVsdCgwLjUpKVxuICB9XG5cbiAgX3NldERlZmF1bHRUcmFuc2l0aW9uICgpIHtcbiAgICBpZiAoIXRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNpdGlvblByb3BlcnR5XSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZWxlbWVudClbdHJhbnNpdGlvblByb3BlcnR5XVxuICAgIH1cbiAgfVxuXG4gIF9zZXRUcmFuc2l0aW9uKHRpbWUpIHtcbiAgICBsZXQgdHJhbnNpdGlvbiA9IHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldXG4gICAgY29uc3QgdHJhbnNpdGlvbkNzcyA9IGB0cmFuc2Zvcm0gJHt0aW1lfW1zYFxuXG4gICAgaWYgKCEvdHJhbnNmb3JtXFxzP1xcZCptP3M/Ly50ZXN0KHRyYW5zaXRpb24pKSB7XG4gICAgICBpZiAodHJhbnNpdGlvbikge1xuICAgICAgICB0cmFuc2l0aW9uICs9IGAsICR7dHJhbnNpdGlvbkNzc31gXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cmFuc2l0aW9uID0gdHJhbnNpdGlvbkNzc1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0cmFuc2l0aW9uID0gdHJhbnNpdGlvbi5yZXBsYWNlKC90cmFuc2Zvcm1cXHM/XFxkKm0/cz8vZywgdHJhbnNpdGlvbkNzcylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV0gIT09IHRyYW5zaXRpb24pIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldID0gdHJhbnNpdGlvblxuICAgIH1cbiAgfVxuXG4gIF9zZXRUcmFuc2xhdGUocG9pbnQpIHtcbiAgICB0aGlzLl90cmFuc2Zvcm1Qb3NpdGlvbiA9IHBvaW50XG4gICAgY29uc3QgdHJhbnNsYXRlQ3NzID0gYHRyYW5zbGF0ZTNkKCR7cG9pbnQueH1weCwgJHtwb2ludC55fXB4LCAwcHgpYFxuXG4gICAgbGV0IHRyYW5zZm9ybSA9IHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wZXJ0eV1cblxuICAgIGlmICh0aGlzLnNob3VsZFJlbW92ZVplcm9UcmFuc2xhdGUgJiYgcG9pbnQueCA9PT0gMCAmJiBwb2ludC55ID09PSAwKSB7XG4gICAgICB0cmFuc2Zvcm0gPSB0cmFuc2Zvcm0ucmVwbGFjZSgvdHJhbnNsYXRlM2RcXChbXildK1xcKS8sICcnKVxuICAgIH0gZWxzZSBpZiAoIS90cmFuc2xhdGUzZFxcKFteKV0rXFwpLy50ZXN0KHRyYW5zZm9ybSkpIHtcbiAgICAgIGlmICh0cmFuc2Zvcm0pIHtcbiAgICAgICAgdHJhbnNmb3JtICs9ICcgJ1xuICAgICAgfVxuICAgICAgdHJhbnNmb3JtICs9IHRyYW5zbGF0ZUNzc1xuICAgIH0gZWxzZSB7XG4gICAgICB0cmFuc2Zvcm0gPSB0cmFuc2Zvcm0ucmVwbGFjZSgvdHJhbnNsYXRlM2RcXChbXildK1xcKS8sIHRyYW5zbGF0ZUNzcylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BlcnR5XSAhPT0gdHJhbnNmb3JtKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcGVydHldID0gdHJhbnNmb3JtXG4gICAgfVxuICB9XG5cbiAgbW92ZShwb2ludCwgdGltZT0wLCBpc1NpbGVudD1mYWxzZSkge1xuICAgIHBvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIHRoaXMucG9zaXRpb24gPSBwb2ludFxuXG4gICAgdGhpcy5fc2V0VHJhbnNpdGlvbih0aW1lKVxuICAgIHRoaXMuX3NldFRyYW5zbGF0ZShwb2ludC5zdWIodGhpcy5vZmZzZXQpKVxuXG4gICAgaWYgKCFpc1NpbGVudCkge1xuICAgICAgdGhpcy5lbWl0RHJhZ0V2ZW50KCdtb3ZlJylcbiAgICB9XG4gIH1cblxuICBwaW5Qb3NpdGlvbihwb2ludCwgdGltZT0wLCBzaWxlbnQ9dHJ1ZSkge1xuICAgIHRoaXMucGlubmVkUG9zaXRpb24gPSBwb2ludC5jbG9uZSgpXG4gICAgdGhpcy5tb3ZlKHRoaXMucGlubmVkUG9zaXRpb24sIHRpbWUsIHNpbGVudClcbiAgfVxuXG4gIHJlc2V0UG9zaXRpb25Ub0luaXRpYWwgKCkge1xuICAgIHRoaXMucGluUG9zaXRpb24odGhpcy5pbml0aWFsUG9zaXRpb24pXG4gIH1cblxuICByZWZyZXNoUG9zaXRpb24gKCkge1xuICAgIHRoaXMuc2V0UG9zaXRpb24odGhpcy5nZXRQb3NpdGlvbigpKVxuICB9XG5cbiAgc2V0UG9zaXRpb24ocG9pbnQpIHtcbiAgICBwb2ludCA9IHBvaW50LmNsb25lKClcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9pbnRcbiAgICB0aGlzLl9zZXRUcmFuc2l0aW9uKDApXG4gICAgdGhpcy5fc2V0VHJhbnNsYXRlKHBvaW50LnN1Yih0aGlzLm9mZnNldCkpXG4gIH1cblxuICBkZXRlcm1pbmVEaXJlY3Rpb24ocG9pbnQpIHtcbiAgICB0aGlzLl9wcmV2aW91c0RpcmVjdGlvblBvc2l0aW9uIHx8PSB0aGlzLl9zdGFydFBvc2l0aW9uXG5cbiAgICB0aGlzLmxlZnREaXJlY3Rpb24gPSAodGhpcy5fcHJldmlvdXNEaXJlY3Rpb25Qb3NpdGlvbi54ID4gcG9pbnQueClcbiAgICB0aGlzLnJpZ2h0RGlyZWN0aW9uID0gKHRoaXMuX3ByZXZpb3VzRGlyZWN0aW9uUG9zaXRpb24ueCA8IHBvaW50LngpXG4gICAgdGhpcy51cERpcmVjdGlvbiA9ICh0aGlzLl9wcmV2aW91c0RpcmVjdGlvblBvc2l0aW9uLnkgPiBwb2ludC55KVxuICAgIHRoaXMuZG93bkRpcmVjdGlvbiA9ICh0aGlzLl9wcmV2aW91c0RpcmVjdGlvblBvc2l0aW9uLnkgPCBwb2ludC55KVxuXG4gICAgdGhpcy5fcHJldmlvdXNEaXJlY3Rpb25Qb3NpdGlvbiA9IHBvaW50XG4gIH1cblxuICBzZWVtc1Njcm9sbGluZygpIHtcbiAgICByZXR1cm4gKCtuZXcgRGF0ZSgpIC0gdGhpcy5fc3RhcnRUb3VjaFRpbWVzdGFtcCkgPCB0aGlzLnRvdWNoRHJhZ2dpbmdUaHJlc2hvbGRcbiAgfVxuXG4gIHNob3VsZFVzZU5hdGl2ZURyYWdBbmREcm9wKCkge1xuICAgIGlmICh0aGlzLmlzVG91Y2hFdmVudCkge1xuICAgICAgcmV0dXJuIHRoaXMubmF0aXZlRHJhZ0FuZERyb3AgJiYgdGhpcy5lbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3BPblRvdWNoXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLm5hdGl2ZURyYWdBbmREcm9wXG4gICAgfVxuICB9XG5cbiAgZHJhZ1N0YXJ0KGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLl9lbmFibGUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLnN0b3BQcm9wYWdhdGlvbk9uRHJhZ1N0YXJ0KSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIH1cblxuICAgIHRoaXMuaXNUb3VjaEV2ZW50ID0gKGlzVG91Y2ggJiYgKGV2ZW50IGluc3RhbmNlb2Ygd2luZG93LlRvdWNoRXZlbnQpKVxuXG4gICAgdGhpcy50b3VjaFBvaW50ID0gdGhpcy5fc3RhcnRUb3VjaFBvaW50ID0gbmV3IFBvaW50KFxuICAgICAgdGhpcy5pc1RvdWNoRXZlbnQgPyBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCA6IGV2ZW50LmNsaWVudFgsXG4gICAgICB0aGlzLmlzVG91Y2hFdmVudCA/IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZIDogZXZlbnQuY2xpZW50WVxuICAgIClcblxuICAgIHRoaXMuX3N0YXJ0UG9zaXRpb24gPSB0aGlzLmdldFBvc2l0aW9uKClcbiAgICBpZiAodGhpcy5pc1RvdWNoRXZlbnQpIHtcbiAgICAgIHRoaXMuX3RvdWNoSWQgPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5pZGVudGlmaWVyXG4gICAgICB0aGlzLl9zdGFydFRvdWNoVGltZXN0YW1wID0gK25ldyBEYXRlKClcbiAgICB9XG5cbiAgICB0aGlzLl9zdGFydFdpbmRvd1Njcm9sbFBvaW50ID0gdGhpcy53aW5kb3dTY3JvbGxQb2ludFxuICAgIHRoaXMuX3N0YXJ0U2Nyb2xsRWxlbWVudHNPZmZzZXQgPSB0aGlzLnNjcm9sbEVsZW1lbnRzT2Zmc2V0XG5cbiAgICBpZiAoZXZlbnQudGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJbnB1dEVsZW1lbnQgfHxcbiAgICAgICAgICBldmVudC50YXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElucHV0RWxlbWVudCkge1xuICAgICAgZXZlbnQudGFyZ2V0LmZvY3VzKClcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zaG91bGRVc2VOYXRpdmVEcmFnQW5kRHJvcCgpKSB7XG4gICAgICBpZiAodGhpcy5pc1RvdWNoRXZlbnQgJiYgdGhpcy5lbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3BPblRvdWNoKSB7XG4gICAgICAgIHRoaXMuX3N0YXJ0UGFyZW50c1Njcm9sbE9mZnNldCA9IHRoaXMucGFyZW50c1Njcm9sbE9mZnNldFxuXG4gICAgICAgIGNvbnN0IGVtdWxhdGVPbkZpcnN0TW92ZSA9IChldmVudCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLnNlZW1zU2Nyb2xsaW5nKCkpIHtcbiAgICAgICAgICAgIHRoaXMuY2FuY2VsRHJhZ2dpbmcoKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcChldmVudClcbiAgICAgICAgICB9XG4gICAgICAgICAgY2FuY2VsRW11bGF0aW9uKClcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjYW5jZWxFbXVsYXRpb24gPSAoKSA9PiB7XG4gICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCBlbXVsYXRlT25GaXJzdE1vdmUpXG4gICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIGNhbmNlbEVtdWxhdGlvbilcbiAgICAgICAgfVxuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgZW11bGF0ZU9uRmlyc3RNb3ZlLCBwYXNzaXZlRmFsc2UpXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCBjYW5jZWxFbXVsYXRpb24sIHBhc3NpdmVGYWxzZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCB0aGlzLl9uYXRpdmVEcmFnU3RhcnQpXG4gICAgICAgIHRoaXMuZWxlbWVudC5kcmFnZ2FibGUgPSB0cnVlXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9uYXRpdmVEcmFnRW5kLCBwYXNzaXZlRmFsc2UpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUsIHBhc3NpdmVGYWxzZSlcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUsIHBhc3NpdmVGYWxzZSlcblxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQsIHBhc3NpdmVGYWxzZSlcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kLCBwYXNzaXZlRmFsc2UpXG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX3Njcm9sbClcbiAgICB0aGlzLnNjcm9sbEVsZW1lbnRzLmZvckVhY2goKHApID0+IHAuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fc2Nyb2xsKSlcblxuICAgIGlmICghdGhpcy5zaG91bGRVc2VOYXRpdmVEcmFnQW5kRHJvcCgpICYmIHRoaXMuZHJhZ1N0YXJ0VGhyZXNob2xkID4gMCkge1xuICAgICAgdGhpcy5fZHJhZ1N0YXJ0UGVuZGluZyA9IHRydWVcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbWl0RHJhZ0V2ZW50KCdzdGFydCcpXG4gICAgfVxuICB9XG5cbiAgZHJhZ01vdmUoZXZlbnQpIHtcbiAgICBsZXQgdG91Y2hcblxuICAgIHRoaXMuaXNUb3VjaEV2ZW50ID0gKGlzVG91Y2ggJiYgKGV2ZW50IGluc3RhbmNlb2Ygd2luZG93LlRvdWNoRXZlbnQpKVxuICAgIGlmICh0aGlzLmlzVG91Y2hFdmVudCkge1xuICAgICAgdG91Y2ggPSBnZXRUb3VjaEJ5SUQoZXZlbnQsIHRoaXMuX3RvdWNoSWQpXG5cbiAgICAgIGlmICghdG91Y2gpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnNlZW1zU2Nyb2xsaW5nKCkpIHtcbiAgICAgICAgdGhpcy5jYW5jZWxEcmFnZ2luZygpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMudG91Y2hQb2ludCA9IG5ldyBQb2ludChcbiAgICAgIHRoaXMuaXNUb3VjaEV2ZW50ID8gdG91Y2gucGFnZVggOiBldmVudC5jbGllbnRYLFxuICAgICAgdGhpcy5pc1RvdWNoRXZlbnQgPyB0b3VjaC5wYWdlWSA6IGV2ZW50LmNsaWVudFlcbiAgICApXG5cbiAgICBpZiAodGhpcy5fZHJhZ1N0YXJ0UGVuZGluZykge1xuICAgICAgY29uc3QgZHggPSB0aGlzLnRvdWNoUG9pbnQueCAtIHRoaXMuX3N0YXJ0VG91Y2hQb2ludC54XG4gICAgICBjb25zdCBkeSA9IHRoaXMudG91Y2hQb2ludC55IC0gdGhpcy5fc3RhcnRUb3VjaFBvaW50LnlcbiAgICAgIGlmIChNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpIDwgdGhpcy5kcmFnU3RhcnRUaHJlc2hvbGQpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICB0aGlzLl9kcmFnU3RhcnRQZW5kaW5nID0gZmFsc2VcbiAgICAgIHRoaXMuZW1pdERyYWdFdmVudCgnc3RhcnQnKVxuICAgIH1cblxuICAgIHRoaXMuaXNEcmFnZ2luZyA9IHRydWVcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgIGxldCBwb2ludCA9IHRoaXMuX3N0YXJ0UG9zaXRpb24uYWRkKHRoaXMudG91Y2hQb2ludC5zdWIodGhpcy5fc3RhcnRUb3VjaFBvaW50KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZCh0aGlzLndpbmRvd1Njcm9sbFBvaW50LnN1Yih0aGlzLl9zdGFydFdpbmRvd1Njcm9sbFBvaW50KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZCh0aGlzLnNjcm9sbEVsZW1lbnRzT2Zmc2V0LnN1Yih0aGlzLl9zdGFydFNjcm9sbEVsZW1lbnRzT2Zmc2V0KSlcblxuICAgIHBvaW50ID0gdGhpcy5ib3VuZGluZy5ib3VuZChwb2ludCwgdGhpcy5nZXRTaXplKCkpXG4gICAgdGhpcy5kZXRlcm1pbmVEaXJlY3Rpb24ocG9pbnQpXG4gICAgdGhpcy5tb3ZlKHBvaW50KVxuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkcmFnZWUtYWN0aXZlJylcbiAgfVxuXG4gIGRyYWdFbmQoZXZlbnQpIHtcbiAgICB0aGlzLmlzVG91Y2hFdmVudCA9IChpc1RvdWNoICYmIChldmVudCBpbnN0YW5jZW9mIHdpbmRvdy5Ub3VjaEV2ZW50KSlcblxuICAgIGlmICh0aGlzLmlzVG91Y2hFdmVudCAmJiAhZ2V0VG91Y2hCeUlEKGV2ZW50LCB0aGlzLl90b3VjaElkKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2RyYWdTdGFydFBlbmRpbmcpIHtcbiAgICAgIC8vIHRocmVzaG9sZCBuZXZlciBjcm9zc2VkIOKAlCB0cmVhdCBhcyBjbGljaywgY2xlYW4gdXAgc2lsZW50bHlcbiAgICAgIHRoaXMuX2RyYWdTdGFydFBlbmRpbmcgPSBmYWxzZVxuICAgICAgdGhpcy5jYW5jZWxEcmFnZ2luZygpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc0RyYWdnaW5nKSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIH1cblxuICAgIHRoaXMuZHJhZ0VuZEFjdGlvbigpXG4gICAgdGhpcy5lbWl0RHJhZ0V2ZW50KCdlbmQnKVxuICAgIHRoaXMuY2FuY2VsRHJhZ2dpbmcoKVxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2VlLWFjdGl2ZScpKVxuICB9XG5cbiAgb25TY3JvbGwoX2V2ZW50KSB7XG4gICAgbGV0IHBvaW50ID0gdGhpcy5fc3RhcnRQb3NpdGlvbi5hZGQodGhpcy50b3VjaFBvaW50LnN1Yih0aGlzLl9zdGFydFRvdWNoUG9pbnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMud2luZG93U2Nyb2xsUG9pbnQuc3ViKHRoaXMuX3N0YXJ0V2luZG93U2Nyb2xsUG9pbnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMuc2Nyb2xsRWxlbWVudHNPZmZzZXQuc3ViKHRoaXMuX3N0YXJ0U2Nyb2xsRWxlbWVudHNPZmZzZXQpKVxuXG4gICAgcG9pbnQgPSB0aGlzLmJvdW5kaW5nLmJvdW5kKHBvaW50LCB0aGlzLmdldFNpemUoKSlcbiAgICBpZiAoIXRoaXMubmF0aXZlRHJhZ0FuZERyb3ApIHtcbiAgICAgIHRoaXMuZGV0ZXJtaW5lRGlyZWN0aW9uKHBvaW50KVxuICAgICAgdGhpcy5tb3ZlKHBvaW50KVxuICAgIH1cbiAgfVxuXG4gIG5hdGl2ZURyYWdTdGFydChldmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQnLCAnRmlyZUZveCBmaXgnKVxuICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gJ21vdmUnXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCB0aGlzLl9uYXRpdmVEcmFnT3ZlcilcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgdGhpcy5fbmF0aXZlRHJvcClcbiAgfVxuXG4gIG5hdGl2ZURyYWdPdmVyKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gJ21vdmUnXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RyYWdlZS1wbGFjZWhvbGRlcicpXG4gICAgaWYgKGV2ZW50LmNsaWVudFggPT09IDAgJiYgZXZlbnQuY2xpZW50WSA9PT0gMCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy50b3VjaFBvaW50ID0gbmV3IFBvaW50KGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpXG4gICAgbGV0IHBvaW50ID0gdGhpcy5fc3RhcnRQb3NpdGlvbi5hZGQodGhpcy50b3VjaFBvaW50LnN1Yih0aGlzLl9zdGFydFRvdWNoUG9pbnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMud2luZG93U2Nyb2xsUG9pbnQuc3ViKHRoaXMuX3N0YXJ0V2luZG93U2Nyb2xsUG9pbnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMuc2Nyb2xsRWxlbWVudHNPZmZzZXQuc3ViKHRoaXMuX3N0YXJ0U2Nyb2xsRWxlbWVudHNPZmZzZXQpKVxuICAgIHBvaW50ID0gdGhpcy5ib3VuZGluZy5ib3VuZChwb2ludCwgdGhpcy5nZXRTaXplKCkpXG4gICAgdGhpcy5kZXRlcm1pbmVEaXJlY3Rpb24ocG9pbnQpXG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvaW50XG4gICAgdGhpcy5lbWl0RHJhZ0V2ZW50KCdtb3ZlJylcbiAgfVxuXG4gIG5hdGl2ZURyYWdFbmQoX2V2ZW50KSB7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdlZS1wbGFjZWhvbGRlcicpXG4gICAgdGhpcy5kcmFnRW5kQWN0aW9uKClcbiAgICB0aGlzLmVtaXREcmFnRXZlbnQoJ2VuZCcpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCB0aGlzLl9uYXRpdmVEcmFnT3ZlcilcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcm9wJywgdGhpcy5fbmF0aXZlRHJvcClcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fc2Nyb2xsKVxuICAgIHRoaXMuc2Nyb2xsRWxlbWVudHMuZm9yRWFjaCgocCkgPT4gcC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9zY3JvbGwpKVxuICAgIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnZHJhZ2dhYmxlJylcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgdGhpcy5fbmF0aXZlRHJhZ1N0YXJ0KVxuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZWUtYWN0aXZlJylcbiAgfVxuXG4gIG5hdGl2ZURyb3AoZXZlbnQpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIGNhbmNlbERyYWdnaW5nICgpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG5cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcblxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX3Njcm9sbClcbiAgICB0aGlzLnNjcm9sbEVsZW1lbnRzLmZvckVhY2goKHApID0+IHAucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fc2Nyb2xsKSlcblxuICAgIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlXG4gICAgdGhpcy5fcHJldmlvdXNEaXJlY3Rpb25Qb3NpdGlvbiA9IG51bGxcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkcmFnZ2FibGUnKVxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCB0aGlzLl9uYXRpdmVEcmFnU3RhcnQpXG4gIH1cblxuICBjb3B5U3R5bGVzKHNvdXJjZSwgZGVzdGluYXRpb24pIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmNvcHlTdHlsZXMpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5jb3B5U3R5bGVzKHNvdXJjZSwgZGVzdGluYXRpb24pXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvcHlTdHlsZXMoc291cmNlLCBkZXN0aW5hdGlvbilcbiAgICB9XG4gIH1cblxuICBlbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3AoZXZlbnQpIHtcbiAgICBjb25zdCBjb250YWluZXJSZWN0ID0gdGhpcy5jb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICBjb25zdCBjbG9uZWRFbGVtZW50ID0gdGhpcy5lbGVtZW50LmNsb25lTm9kZSh0cnVlKVxuICAgIGNsb25lZEVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcGVydHldID0gJydcbiAgICB0aGlzLmNvcHlTdHlsZXModGhpcy5lbGVtZW50LCBjbG9uZWRFbGVtZW50KVxuICAgIGNsb25lZEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZHJhZ2VlLW5hdGl2ZS1lbXVsYXRpb24nKVxuICAgIGNsb25lZEVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjbG9uZWRFbGVtZW50KVxuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkcmFnZWUtcGxhY2Vob2xkZXInKVxuXG4gICAgY29uc3QgZW11bGF0aW9uRHJhZ2dhYmxlID0gbmV3IERyYWdnYWJsZShjbG9uZWRFbGVtZW50LCB7XG4gICAgICBjb250YWluZXI6IGRvY3VtZW50LmJvZHksXG4gICAgICB0b3VjaERyYWdnaW5nVGhyZXNob2xkOiAwLFxuICAgICAgZG9tRXZlbnRzOiBmYWxzZSxcbiAgICAgIGJvdW5kKHBvaW50KSB7XG4gICAgICAgIHJldHVybiBwb2ludFxuICAgICAgfSxcbiAgICAgIG9uOiB7XG4gICAgICAgICdkcmFnOm1vdmUnOiAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgY29udGFpbmVyUmVjdFBvaW50ID0gbmV3IFBvaW50KGNvbnRhaW5lclJlY3QubGVmdCwgY29udGFpbmVyUmVjdC50b3ApXG4gICAgICAgICAgdGhpcy5wb3NpdGlvbiA9IGVtdWxhdGlvbkRyYWdnYWJsZS5wb3NpdGlvbi5zdWIoY29udGFpbmVyUmVjdFBvaW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3ViKHRoaXMuX3N0YXJ0V2luZG93U2Nyb2xsUG9pbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy5fc3RhcnRQYXJlbnRzU2Nyb2xsT2Zmc2V0KVxuXG4gICAgICAgICAgdGhpcy5kZXRlcm1pbmVEaXJlY3Rpb24odGhpcy5wb3NpdGlvbilcbiAgICAgICAgICB0aGlzLmVtaXREcmFnRXZlbnQoJ21vdmUnKVxuICAgICAgICB9LFxuICAgICAgICAnZHJhZzplbmQnOiAoKSA9PiB7XG4gICAgICAgICAgZW11bGF0aW9uRHJhZ2dhYmxlLmRlc3Ryb3koKVxuICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoY2xvbmVkRWxlbWVudClcbiAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2VlLXBsYWNlaG9sZGVyJylcbiAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2VlLWFjdGl2ZScpXG5cbiAgICAgICAgICB0aGlzLmRyYWdFbmRBY3Rpb24oKVxuICAgICAgICAgIHRoaXMuZW1pdERyYWdFdmVudCgnZW5kJylcbiAgICAgICAgICB0aGlzLmNhbmNlbERyYWdnaW5nKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBjb250YWluZXJSZWN0UG9pbnQgPSBuZXcgUG9pbnQoY29udGFpbmVyUmVjdC5sZWZ0LCBjb250YWluZXJSZWN0LnRvcClcbiAgICBlbXVsYXRpb25EcmFnZ2FibGUuX3N0YXJ0V2luZG93U2Nyb2xsUG9pbnQgPSB0aGlzLl9zdGFydFdpbmRvd1Njcm9sbFBvaW50XG5cbiAgICBlbXVsYXRpb25EcmFnZ2FibGUubW92ZShcbiAgICAgIHRoaXMucGlubmVkUG9zaXRpb24uYWRkKGNvbnRhaW5lclJlY3RQb2ludClcbiAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMud2luZG93U2Nyb2xsUG9pbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgLnN1Yih0aGlzLnBhcmVudHNTY3JvbGxPZmZzZXQpXG4gICAgKVxuXG4gICAgZW11bGF0aW9uRHJhZ2dhYmxlLmRyYWdTdGFydChldmVudClcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBlbWl0RHJhZ0V2ZW50KHR5cGUpIHtcbiAgICB0aGlzLmVtaXQoYGRyYWc6JHt0eXBlfWApXG5cbiAgICBpZiAodGhpcy5kb21FdmVudHMpIHtcbiAgICAgIGRpc3BhdGNoRG9tRXZlbnQodGhpcy5lbGVtZW50LCBgZHJhZ2VlOiR7dHlwZX1gLCB7IGRyYWdnYWJsZTogdGhpcyB9KVxuICAgIH1cbiAgfVxuXG4gIGRyYWdFbmRBY3Rpb24oKSB7XG4gICAgdGhpcy5waW5Qb3NpdGlvbih0aGlzLnBvc2l0aW9uKVxuICB9XG5cbiAgZ2V0UmVjdGFuZ2xlKCkge1xuICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHRoaXMucG9zaXRpb24sIHRoaXMuZ2V0U2l6ZSgpKVxuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICBpZiAodGhpcy5ib3VuZGluZy5yZWZyZXNoKSB7XG4gICAgICB0aGlzLmJvdW5kaW5nLnJlZnJlc2goKVxuICAgIH1cbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5oYW5kbGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydClcbiAgICB0aGlzLmhhbmRsZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0KVxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCB0aGlzLl9uYXRpdmVEcmFnU3RhcnQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgdGhpcy5fbmF0aXZlRHJhZ092ZXIpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIHRoaXMuX25hdGl2ZURyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX25hdGl2ZURyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJvcCcsIHRoaXMuX25hdGl2ZURyb3ApXG4gICAgc2NvcGVzLmZvckVhY2goKHNjb3BlKSA9PiBzY29wZS5yZWxlYXNlRHJhZ2dhYmxlKHRoaXMpKVxuICAgIHRoaXMucmVzZXRFbWl0dGVyKClcblxuICAgIGNvbnN0IGluZGV4ID0gZHJhZ2dhYmxlcy5pbmRleE9mKHRoaXMpXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIGRyYWdnYWJsZXMuc3BsaWNlKGluZGV4LCAxKVxuICAgIH1cbiAgfVxuXG4gIGdldCBjb250YWluZXIoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9jb250YWluZXIgPSB0aGlzLl9jb250YWluZXIgfHwgdGhpcy5vcHRpb25zLmNvbnRhaW5lciB8fCB0aGlzLm9wdGlvbnMucGFyZW50IHx8IHRoaXMuZWxlbWVudC5vZmZzZXRQYXJlbnQpXG4gIH1cblxuICBnZXQgaGFuZGxlcigpIHtcbiAgICBpZiAoIXRoaXMuX2hhbmRsZXIpIHtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmhhbmRsZXIgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZXIgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLm9wdGlvbnMuaGFuZGxlcikgfHwgdGhpcy5lbGVtZW50XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9oYW5kbGVyID0gdGhpcy5vcHRpb25zLmhhbmRsZXIgfHwgdGhpcy5lbGVtZW50XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2hhbmRsZXJcbiAgfVxuXG4gIGdldCBzdG9wUHJvcGFnYXRpb25PbkRyYWdTdGFydCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLnN0b3BQcm9wYWdhdGlvbk9uRHJhZ1N0YXJ0IHx8IGZhbHNlXG4gIH1cblxuICBnZXQgbmF0aXZlRHJhZ0FuZERyb3AoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5uYXRpdmVEcmFnQW5kRHJvcCB8fCBmYWxzZVxuICB9XG5cbiAgZ2V0IGRvbUV2ZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmRvbUV2ZW50cyAhPT0gZmFsc2VcbiAgfVxuXG4gIGdldCBlbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3BPblRvdWNoKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wT25Ub3VjaCB8fCBmYWxzZVxuICB9XG5cbiAgZ2V0IHNob3VsZFJlbW92ZVplcm9UcmFuc2xhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5zaG91bGRSZW1vdmVaZXJvVHJhbnNsYXRlIHx8IGZhbHNlXG4gIH1cblxuICBnZXQgdG91Y2hEcmFnZ2luZ1RocmVzaG9sZCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLnRvdWNoRHJhZ2dpbmdUaHJlc2hvbGQgfHwgMFxuICB9XG5cbiAgZ2V0IGRyYWdTdGFydFRocmVzaG9sZCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmRyYWdTdGFydFRocmVzaG9sZCB8fCAwXG4gIH1cblxuICBnZXQgZHJhZ092ZXJUaHJvdHRsZUR1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZHJhZ092ZXJUaHJvdHRsZUR1cmF0aW9uIHx8IDE2XG4gIH1cblxuICBnZXQgaXNDb25zaWRlclRyYW5zZm9ybU9mZnNldCAoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5jb25zaWRlclRyYW5zZm9ybU9mZnNldCB8fCBmYWxzZVxuICB9XG5cbiAgZ2V0IHdpbmRvd1Njcm9sbFBvaW50KCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQod2luZG93LnNjcm9sbFgsIHdpbmRvdy5zY3JvbGxZKVxuICB9XG5cbiAgZ2V0IHNjcm9sbFJvb3RDb250YWluZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5zY3JvbGxSb290Q29udGFpbmVyIHx8IHRoaXMuY29udGFpbmVyXG4gIH1cblxuICBnZXQgc2Nyb2xsRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhY2hlZFNjcm9sbEVsZW1lbnRzXG4gICAgICA/IHRoaXMuX2NhY2hlZFNjcm9sbEVsZW1lbnRzXG4gICAgICA6ICh0aGlzLl9jYWNoZWRTY3JvbGxFbGVtZW50cyA9IGdldFBhcmVudHNDaGFpbih0aGlzLmVsZW1lbnQsIHRoaXMuc2Nyb2xsUm9vdENvbnRhaW5lcikpXG4gIH1cblxuICBnZXQgc2Nyb2xsRWxlbWVudHNPZmZzZXQoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludChcbiAgICAgIHRoaXMuc2Nyb2xsRWxlbWVudHMucmVkdWNlKChzdW0sIHApID0+IHN1bSArIHAuc2Nyb2xsTGVmdCwgMCksXG4gICAgICB0aGlzLnNjcm9sbEVsZW1lbnRzLnJlZHVjZSgoc3VtLCBwKSA9PiBzdW0gKyBwLnNjcm9sbFRvcCwgMClcbiAgICApXG4gIH1cblxuICBnZXQgcGFyZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5fY2FjaGVkUGFyZW50c1xuICAgICAgPyB0aGlzLl9jYWNoZWRQYXJlbnRzXG4gICAgICA6ICh0aGlzLl9jYWNoZWRQYXJlbnRzID0gZ2V0UGFyZW50c0NoYWluKHRoaXMuZWxlbWVudCwgdGhpcy5jb250YWluZXIpKVxuICB9XG5cbiAgZ2V0IHBhcmVudHNTY3JvbGxPZmZzZXQoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludChcbiAgICAgIHRoaXMucGFyZW50cy5yZWR1Y2UoKHN1bSwgcCkgPT4gc3VtICsgcC5zY3JvbGxMZWZ0LCAwKSxcbiAgICAgIHRoaXMucGFyZW50cy5yZWR1Y2UoKHN1bSwgcCkgPT4gc3VtICsgcC5zY3JvbGxUb3AsIDApXG4gICAgKVxuICB9XG5cbiAgZ2V0IGVuYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlXG4gIH1cblxuICBzZXQgZW5hYmxlKGVuYWJsZSkge1xuICAgIGlmIChlbmFibGUpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZWUtZGlzYWJsZScpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkcmFnZWUtZGlzYWJsZScpXG4gICAgfVxuXG4gICAgdGhpcy5fZW5hYmxlID0gZW5hYmxlXG4gIH1cbn1cblxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCwgaW1tZWRpYXRlKSB7XG4gIGxldCB0aW1lb3V0XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGV4ZWN1dGVkRnVuY3Rpb24oKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXNcbiAgICBjb25zdCBhcmdzID0gYXJndW1lbnRzXG5cbiAgICBjb25zdCBsYXRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgdGltZW91dCA9IG51bGxcbiAgICAgIGlmICghaW1tZWRpYXRlKSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpXG4gICAgfVxuXG4gICAgY29uc3QgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dFxuXG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpXG5cbiAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdClcblxuICAgIGlmIChjYWxsTm93KSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpXG4gIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBnZXREaXN0YW5jZShwMSwgcDIpIHtcbiAgY29uc3QgZHggPSBwMS54IC0gcDIueCwgZHkgPSBwMS55IC0gcDIueVxuICByZXR1cm4gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0WERpZmZlcmVuY2UocDEsIHAyKSB7XG4gIHJldHVybiBNYXRoLmFicyhwMS54IC0gcDIueClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFlEaWZmZXJlbmNlKHAxLCBwMikge1xuICByZXR1cm4gTWF0aC5hYnMocDEueSAtIHAyLnkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5KG9wdGlvbnMpIHtcbiAgcmV0dXJuIChwMSwgcDIpID0+IHtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KFxuICAgICAgTWF0aC5wb3cob3B0aW9ucy54ICogTWF0aC5hYnMocDEueCAtIHAyLngpLCAyKSArXG4gICAgICBNYXRoLnBvdyhvcHRpb25zLnkgKiBNYXRoLmFicyhwMS55IC0gcDIueSksIDIpXG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmRleE9mTmVhcmVzdFBvaW50KGFyciwgdmFsLCByYWRpdXMsIGdldERpc3RhbmNlRnVuYz1nZXREaXN0YW5jZSkge1xuICBsZXQgc2l6ZSwgaW5kZXggPSAwLCBpLCB0ZW1wXG4gIGlmIChhcnIubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIC0xXG4gIH1cbiAgc2l6ZSA9IGdldERpc3RhbmNlRnVuYyhhcnJbMF0sIHZhbClcbiAgZm9yIChpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgIHRlbXAgPSBnZXREaXN0YW5jZUZ1bmMoYXJyW2ldLCB2YWwpXG4gICAgaWYgKHRlbXAgPCBzaXplKSB7XG4gICAgICBzaXplID0gdGVtcFxuICAgICAgaW5kZXggPSBpXG4gICAgfVxuICB9XG4gIGlmIChyYWRpdXMgPj0gMCAmJiBzaXplID4gcmFkaXVzKSB7XG4gICAgcmV0dXJuIC0xXG4gIH1cbiAgcmV0dXJuIGluZGV4XG59XG4iLCJpbXBvcnQgZGVib3VuY2UgZnJvbSAnLi91dGlscy9kZWJvdW5jZSdcbmltcG9ydCByZW1vdmVJdGVtIGZyb20gJy4vdXRpbHMvcmVtb3ZlLWFycmF5LWl0ZW0nXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnRFbWl0dGVyJ1xuaW1wb3J0IGRpc3BhdGNoRG9tRXZlbnQgZnJvbSAnLi91dGlscy9kaXNwYXRjaC1kb20tZXZlbnQnXG5pbXBvcnQge1xuICBnZXREaXN0YW5jZSxcbiAgaW5kZXhPZk5lYXJlc3RQb2ludFxufSBmcm9tICcuL2dlb21ldHJ5L2Rpc3RhbmNlcydcblxuaW1wb3J0IERyYWdnYWJsZSBmcm9tICcuL2RyYWdnYWJsZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdCBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKGRyYWdnYWJsZXMsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcihvcHRpb25zKVxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgdGltZUVuZDogMjAwLFxuICAgICAgdGltZUV4Y2FuZ2U6IDQwMCxcbiAgICAgIHJhZGl1czogMzBcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGhpcy5jb250YWluZXIgPSBvcHRpb25zLmNvbnRhaW5lclxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZXNcbiAgICB0aGlzLmNoYW5nZWREdXJpbmdJdGVyYXRpb24gPSBmYWxzZVxuICAgIHRoaXMudW5zdWJzY3JpYmVzID0gbmV3IE1hcCgpXG5cbiAgICB0aGlzLnJlc2l6ZU9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKGRlYm91bmNlKHRoaXMub25SZXNpemUuYmluZCh0aGlzKSwgMTAwKSlcblxuICAgIGlmICh0aGlzLmNvbnRhaW5lcikge1xuICAgICAgdGhpcy5yZXNpemVPYnNlcnZlci5vYnNlcnZlKHRoaXMuY29udGFpbmVyKVxuICAgIH1cblxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBvblJlc2l6ZSgpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLnJlb3JkZXJPbkNoYW5nZSkgdGhpcy5yZXNldCgpXG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgaWYoIWRyYWdnYWJsZS5pc0RyYWdnaW5nKSB7XG4gICAgICAgIGRyYWdnYWJsZS5zdGFydFBvc2l0aW9uaW5nKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLl9lbmFibGUgPSB0cnVlXG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gdGhpcy5pbml0RHJhZ2dhYmxlKGRyYWdnYWJsZSkpXG4gIH1cblxuICBpbml0RHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIGRyYWdnYWJsZS5lbmFibGUgPSB0aGlzLl9lbmFibGVcbiAgICB0aGlzLmxpc3RlblRvKGRyYWdnYWJsZSwgJ2RyYWc6bW92ZScsICgpID0+IHRoaXMub25Nb3ZlKGRyYWdnYWJsZSkpXG4gICAgZHJhZ2dhYmxlLmRyYWdFbmRBY3Rpb24gPSAoKSA9PiB7XG4gICAgICBkcmFnZ2FibGUucGluUG9zaXRpb24oZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uLCB0aGlzLm9wdGlvbnMudGltZUVuZClcbiAgICAgIHRoaXMub25FbmQoZHJhZ2dhYmxlKVxuICAgIH1cbiAgICB0aGlzLnJlc2l6ZU9ic2VydmVyLm9ic2VydmUoZHJhZ2dhYmxlLmVsZW1lbnQpXG4gIH1cblxuICBsaXN0ZW5UbyhkcmFnZ2FibGUsIGV2ZW50TmFtZSwgaGFuZGxlcikge1xuICAgIGlmICghdGhpcy51bnN1YnNjcmliZXMuaGFzKGRyYWdnYWJsZSkpIHtcbiAgICAgIHRoaXMudW5zdWJzY3JpYmVzLnNldChkcmFnZ2FibGUsIFtdKVxuICAgIH1cbiAgICB0aGlzLnVuc3Vic2NyaWJlcy5nZXQoZHJhZ2dhYmxlKS5wdXNoKGRyYWdnYWJsZS5vbihldmVudE5hbWUsIGhhbmRsZXIpKVxuICB9XG5cbiAgcmVsZWFzZURyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICB0aGlzLnJlc2l6ZU9ic2VydmVyLnVub2JzZXJ2ZShkcmFnZ2FibGUuZWxlbWVudClcbiAgICB0aGlzLnVuc3Vic2NyaWJlcy5nZXQoZHJhZ2dhYmxlKT8uZm9yRWFjaCgodW5zdWJzY3JpYmUpID0+IHVuc3Vic2NyaWJlKCkpXG4gICAgdGhpcy51bnN1YnNjcmliZXMuZGVsZXRlKGRyYWdnYWJsZSlcbiAgICByZW1vdmVJdGVtKHRoaXMuZHJhZ2dhYmxlcywgZHJhZ2dhYmxlKVxuICB9XG5cbiAgb25Nb3ZlKGRyYWdnYWJsZSkge1xuICAgIGlmICh0aGlzLnN3YXBwaW5nRGlzYWJsZWQpIHJldHVyblxuXG4gICAgY29uc3Qgc29ydGVkRHJhZ2dhYmxlcyA9IHRoaXMuZ2V0U29ydGVkRHJhZ2dhYmxlcygpXG4gICAgY29uc3QgcGlubmVkUG9zaXRpb25zID0gc29ydGVkRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uKVxuXG4gICAgY29uc3QgY3VycmVudEluZGV4ID0gc29ydGVkRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSlcbiAgICBjb25zdCB0YXJnZXRJbmRleCA9IGluZGV4T2ZOZWFyZXN0UG9pbnQocGlubmVkUG9zaXRpb25zLCBkcmFnZ2FibGUucG9zaXRpb24sIHRoaXMub3B0aW9ucy5yYWRpdXMsIHRoaXMuZGlzdGFuY2VGdW5jKVxuXG4gICAgaWYgKHRhcmdldEluZGV4ICE9PSAtMSAmJiBjdXJyZW50SW5kZXggIT09IHRhcmdldEluZGV4KSB7XG4gICAgICBpZiAodGFyZ2V0SW5kZXggPCBjdXJyZW50SW5kZXgpIHtcbiAgICAgICAgZm9yIChsZXQgaT10YXJnZXRJbmRleDsgaTxjdXJyZW50SW5kZXg7IGkrKykge1xuICAgICAgICAgIHNvcnRlZERyYWdnYWJsZXNbaV0ucGluUG9zaXRpb24ocGlubmVkUG9zaXRpb25zW2krMV0sIHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChsZXQgaT1jdXJyZW50SW5kZXg7IGk8dGFyZ2V0SW5kZXg7IGkrKykge1xuICAgICAgICAgIHNvcnRlZERyYWdnYWJsZXNbaSsxXS5waW5Qb3NpdGlvbihwaW5uZWRQb3NpdGlvbnNbaV0sIHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZHJhZ2dhYmxlLm5hdGl2ZURyYWdBbmREcm9wKSB7XG4gICAgICAgIGRyYWdnYWJsZS5waW5Qb3NpdGlvbihwaW5uZWRQb3NpdGlvbnNbdGFyZ2V0SW5kZXhdKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uID0gcGlubmVkUG9zaXRpb25zW3RhcmdldEluZGV4XVxuICAgICAgfVxuXG4gICAgICB0aGlzLmNoYW5nZWREdXJpbmdJdGVyYXRpb24gPSB0cnVlXG4gICAgfVxuICB9XG5cbiAgb25FbmQoZHJhZ2dhYmxlKSB7XG4gICAgaWYgKHRoaXMuY2hhbmdlZER1cmluZ0l0ZXJhdGlvbikge1xuICAgICAgdGhpcy5lbWl0TGlzdEV2ZW50KCdjaGFuZ2UnLCBkcmFnZ2FibGUpXG4gICAgICB0aGlzLmNoYW5nZWREdXJpbmdJdGVyYXRpb24gPSBmYWxzZVxuXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnJlb3JkZXJPbkNoYW5nZSAmJiB0aGlzLm9wdGlvbnMuY29udGFpbmVyKSB7XG4gICAgICAgIHRoaXMucmVvcmRlckVsZW1lbnRzKGRyYWdnYWJsZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW9yZGVyRWxlbWVudHMobW92ZWREcmFnZ2FibGUpIHtcbiAgICBjb25zdCBzb3J0ZWREcmFnZ2FibGVzID0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcbiAgICBjb25zdCBpbmRleCA9IHNvcnRlZERyYWdnYWJsZXMuaW5kZXhPZihtb3ZlZERyYWdnYWJsZSlcbiAgICBjb25zdCBuZXh0ID0gc29ydGVkRHJhZ2dhYmxlc1tpbmRleCArIDFdXG5cbiAgICB0aGlzLnJlc2V0KClcblxuICAgIGlmIChuZXh0KSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5pbnNlcnRCZWZvcmUobW92ZWREcmFnZ2FibGUuZWxlbWVudCwgbmV4dC5lbGVtZW50KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChtb3ZlZERyYWdnYWJsZS5lbGVtZW50KVxuICAgIH1cblxuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkKSA9PiBkLnN0YXJ0UG9zaXRpb25pbmcoKSlcbiAgICB0aGlzLmVtaXRMaXN0RXZlbnQoJ3Jlb3JkZXJlZCcsIG1vdmVkRHJhZ2dhYmxlKVxuICB9XG5cbiAgZW1pdExpc3RFdmVudCh0eXBlLCBkcmFnZ2FibGUpIHtcbiAgICB0aGlzLmVtaXQoYGxpc3Q6JHt0eXBlfWApXG5cbiAgICBpZiAodGhpcy5kb21FdmVudHMpIHtcbiAgICAgIGRpc3BhdGNoRG9tRXZlbnQoZHJhZ2dhYmxlLmVsZW1lbnQsIGBkcmFnZWU6bGlzdC0ke3R5cGV9YCwgeyBsaXN0OiB0aGlzLCBkcmFnZ2FibGUgfSlcbiAgICB9XG4gIH1cblxuICBnZXRDdXJyZW50UGlubmVkUG9zaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbi5jbG9uZSgpKVxuICB9XG5cbiAgZ2V0U29ydGVkRHJhZ2dhYmxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5kcmFnZ2FibGVzLnNvcnQodGhpcy5zb3J0aW5nLmJpbmQodGhpcykpXG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucmVzZXRQb3NpdGlvblRvSW5pdGlhbCgpKVxuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucmVmcmVzaCgpKVxuICB9XG5cbiAgYWRkKGRyYWdnYWJsZXMpIHtcbiAgICBpZiAoIShkcmFnZ2FibGVzIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgICBkcmFnZ2FibGVzID0gW2RyYWdnYWJsZXNdXG4gICAgfVxuICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB0aGlzLmluaXREcmFnZ2FibGUoZHJhZ2dhYmxlKSlcbiAgICB0aGlzLmRyYWdnYWJsZXMgPSB0aGlzLmRyYWdnYWJsZXMuY29uY2F0KGRyYWdnYWJsZXMpXG4gIH1cblxuICByZW1vdmUoZHJhZ2dhYmxlcykge1xuICAgIGNvbnN0IGluaXRpYWxQb3NpdGlvbnMgPSB0aGlzLmRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5pbml0aWFsUG9zaXRpb24pXG4gICAgY29uc3QgbGlzdCA9IFtdXG4gICAgY29uc3Qgc29ydGVkRHJhZ2dhYmxlcyA9IHRoaXMuZ2V0U29ydGVkRHJhZ2dhYmxlcygpXG5cbiAgICBpZiAoIShkcmFnZ2FibGVzIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgICBkcmFnZ2FibGVzID0gW2RyYWdnYWJsZXNdXG4gICAgfVxuXG4gICAgZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHRoaXMucmVsZWFzZURyYWdnYWJsZShkcmFnZ2FibGUpKVxuXG4gICAgbGV0IGogPSAwXG4gICAgc29ydGVkRHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGlmICh0aGlzLmRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMSkge1xuICAgICAgICBpZiAoZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uICE9PSBpbml0aWFsUG9zaXRpb25zW2pdKSB7XG4gICAgICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKGluaXRpYWxQb3NpdGlvbnNbal0sIHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSlcbiAgICAgICAgfVxuICAgICAgICBkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uID0gaW5pdGlhbFBvc2l0aW9uc1tqXVxuICAgICAgICBqKytcbiAgICAgICAgbGlzdC5wdXNoKGRyYWdnYWJsZSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGxpc3RcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMucmVtb3ZlKHRoaXMuZHJhZ2dhYmxlcy5zbGljZSgpKVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUuZGVzdHJveSgpKVxuICAgIGlmICh0aGlzLmNvbnRhaW5lcikge1xuICAgICAgdGhpcy5yZXNpemVPYnNlcnZlci51bm9ic2VydmUodGhpcy5jb250YWluZXIpXG4gICAgfVxuICB9XG5cbiAgc29ydGluZyhkcmFnZ2FibGVBLCBkcmFnZ2FibGVCKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5zb3J0aW5nKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLnNvcnRpbmcoZHJhZ2dhYmxlQSwgZHJhZ2dhYmxlQilcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGRyYWdnYWJsZUEucGlubmVkUG9zaXRpb24ueSA8IGRyYWdnYWJsZUIucGlubmVkUG9zaXRpb24ueSkgcmV0dXJuIC0xXG4gICAgICBpZiAoZHJhZ2dhYmxlQS5waW5uZWRQb3NpdGlvbi55ID4gZHJhZ2dhYmxlQi5waW5uZWRQb3NpdGlvbi55KSByZXR1cm4gMVxuICAgICAgaWYgKGRyYWdnYWJsZUEucGlubmVkUG9zaXRpb24ueCA8IGRyYWdnYWJsZUIucGlubmVkUG9zaXRpb24ueCkgcmV0dXJuIC0xXG4gICAgICBpZiAoZHJhZ2dhYmxlQS5waW5uZWRQb3NpdGlvbi54ID4gZHJhZ2dhYmxlQi5waW5uZWRQb3NpdGlvbi54KSByZXR1cm4gMVxuICAgICAgcmV0dXJuIDBcbiAgICB9XG4gIH1cblxuICBnZXQgZGlzdGFuY2VGdW5jKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZ2V0RGlzdGFuY2UgfHwgZ2V0RGlzdGFuY2VcbiAgfVxuXG4gIGdldCBkb21FdmVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5kb21FdmVudHMgIT09IGZhbHNlXG4gIH1cblxuICBnZXQgcG9zaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmdldEN1cnJlbnRQaW5uZWRQb3NpdGlvbnMoKVxuICB9XG5cbiAgc2V0IHBvc2l0aW9ucyhwb3NpdGlvbnMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gJ3dyb25nIGFycmF5IGxlbmd0aCdcbiAgICBpZiAocG9zaXRpb25zLmxlbmd0aCA9PT0gdGhpcy5kcmFnZ2FibGVzLmxlbmd0aCkge1xuICAgICAgcG9zaXRpb25zLmZvckVhY2goKHBvaW50LCBpKSA9PiB7XG4gICAgICAgIHRoaXMuZHJhZ2dhYmxlc1tpXS5waW5Qb3NpdGlvbihwb2ludClcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG1lc3NhZ2VcbiAgICB9XG4gIH1cblxuICBnZXQgZW5hYmxlKCkge1xuICAgIHJldHVybiB0aGlzLl9lbmFibGVcbiAgfVxuXG4gIHNldCBlbmFibGUoZW5hYmxlKSB7XG4gICAgdGhpcy5fZW5hYmxlID0gZW5hYmxlXG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLmVuYWJsZSA9IGVuYWJsZVxuICAgIH0pXG4gIH1cblxuICBnZXQgc3dhcHBpbmdEaXNhYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3dhcHBpbmdEaXNhYmxlZFxuICB9XG5cbiAgc2V0IHN3YXBwaW5nRGlzYWJsZWQoZGlzYWJsZWQpIHtcbiAgICB0aGlzLl9zd2FwcGluZ0Rpc2FibGVkID0gZGlzYWJsZWRcbiAgfVxufVxuIiwiaW1wb3J0IExpc3QgZnJvbSAnLi9saXN0J1xuaW1wb3J0IHsgaW5kZXhPZk5lYXJlc3RQb2ludCwgZ2V0WERpZmZlcmVuY2UsIGdldFlEaWZmZXJlbmNlIH0gZnJvbSAnLi9nZW9tZXRyeS9kaXN0YW5jZXMnXG5cbmltcG9ydCBEcmFnZ2FibGUgZnJvbSAnLi9kcmFnZ2FibGUnXG5cbmNvbnN0IGFycmF5TW92ZSA9IChhcnJheSwgZnJvbSwgdG8pID0+IHtcbiAgYXJyYXkuc3BsaWNlKHRvIDwgMCA/IGFycmF5Lmxlbmd0aCArIHRvIDogdG8sIDAsIGFycmF5LnNwbGljZShmcm9tLCAxKVswXSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnViYmxpbmdMaXN0IGV4dGVuZHMgTGlzdCB7XG4gIGF1dG9EZXRlY3RHYXAoKSB7XG4gICAgaWYgKHRoaXMuX2dhcCAhPT0gdW5kZWZpbmVkIHx8IHRoaXMuZXhwbGljaXRHYXAgIT09IHVuZGVmaW5lZCB8fCB0aGlzLmRyYWdnYWJsZXMubGVuZ3RoIDwgMikgcmV0dXJuXG5cbiAgICBjb25zdCBheGlzID0gdGhpcy5heGlzXG4gICAgY29uc3Qgc29ydGVkID0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcbiAgICAvLyBEZXRhY2hlZCBlbGVtZW50cyByZXBvcnQgc2l6ZSAwXG4gICAgY29uc3QgaW5kZXggPSBzb3J0ZWQuZmluZEluZGV4KChkLCBpKSA9PiBpIDwgc29ydGVkLmxlbmd0aCAtIDEgJiYgZC5lbGVtZW50LmlzQ29ubmVjdGVkKVxuICAgIGlmIChpbmRleCA9PT0gLTEpIHJldHVyblxuXG4gICAgY29uc3QgW2N1cnJlbnQsIG5leHRdID0gW3NvcnRlZFtpbmRleF0sIHNvcnRlZFtpbmRleCArIDFdXVxuICAgIHRoaXMuX2dhcCA9IG5leHQucGlubmVkUG9zaXRpb25bYXhpc10gLSBjdXJyZW50LnBpbm5lZFBvc2l0aW9uW2F4aXNdIC0gY3VycmVudC5nZXRTaXplKClbYXhpc11cbiAgfVxuXG4gIGF1dG9EZXRlY3RTdGFydFBvc2l0aW9uKCkge1xuICAgIGlmICh0aGlzLmRyYWdnYWJsZXMubGVuZ3RoID49IDEgJiYgIXRoaXMuc3RhcnRQb3NpdGlvbikge1xuICAgICAgdGhpcy5zdGFydFBvc2l0aW9uID0gdGhpcy5kcmFnZ2FibGVzWzBdLnBpbm5lZFBvc2l0aW9uXG4gICAgfVxuICB9XG5cbiAgaW5pdERyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICBzdXBlci5pbml0RHJhZ2dhYmxlKGRyYWdnYWJsZSlcbiAgICB0aGlzLmxpc3RlblRvKGRyYWdnYWJsZSwgJ2RyYWc6c3RhcnQnLCAoKSA9PiB0aGlzLm9uRHJhZ1N0YXJ0KGRyYWdnYWJsZSkpXG4gIH1cblxuICBvbkRyYWdTdGFydChkcmFnZ2FibGUpIHtcbiAgICB0aGlzLmF1dG9EZXRlY3RHYXAoKVxuICAgIHRoaXMuYXV0b0RldGVjdFN0YXJ0UG9zaXRpb24oKVxuICAgIHRoaXMuY2FjaGVkU29ydGVkRHJhZ2dhYmxlcyA9IHRoaXMuZ2V0U29ydGVkRHJhZ2dhYmxlcygpXG4gICAgdGhpcy5pbmRleE9mQWN0aXZlRHJhZ2dhYmxlID0gdGhpcy5jYWNoZWRTb3J0ZWREcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKVxuICB9XG5cbiAgb25Nb3ZlKGRyYWdnYWJsZSkge1xuICAgIGlmICh0aGlzLnN3YXBwaW5nRGlzYWJsZWQpIHJldHVyblxuXG4gICAgY29uc3QgcHJldkRyYWdnYWJsZSA9IHRoaXMuY2FjaGVkU29ydGVkRHJhZ2dhYmxlc1t0aGlzLmluZGV4T2ZBY3RpdmVEcmFnZ2FibGUgLSAxXVxuICAgIGNvbnN0IG5leHREcmFnZ2FibGUgPSB0aGlzLmNhY2hlZFNvcnRlZERyYWdnYWJsZXNbdGhpcy5pbmRleE9mQWN0aXZlRHJhZ2dhYmxlICsgMV1cbiAgICBjb25zdCBjdXJyZW50UG9zaXRpb24gPSBkcmFnZ2FibGUucGlubmVkUG9zaXRpb25cblxuICAgIGxldCBjdXJyZW50T3JkZXJcbiAgICBsZXQgdGFyZ2V0SW5kZXhcblxuICAgIGlmKHRoaXMuaXNNb3ZpbmdCYWNrd2FyZChkcmFnZ2FibGUpICYmIHByZXZEcmFnZ2FibGUpIHtcbiAgICAgIGN1cnJlbnRPcmRlciA9IFtwcmV2RHJhZ2dhYmxlLCBkcmFnZ2FibGVdLm1hcCgoZCkgPT4gZC5waW5uZWRQb3NpdGlvbilcbiAgICAgIHRhcmdldEluZGV4ID0gaW5kZXhPZk5lYXJlc3RQb2ludChjdXJyZW50T3JkZXIsIGRyYWdnYWJsZS5wb3NpdGlvbiwgMTAwMDAsIHRoaXMuZGlzdGFuY2VGdW5jKVxuXG4gICAgICBpZiAodGFyZ2V0SW5kZXggPT09IDApIHtcbiAgICAgICAgaWYoZHJhZ2dhYmxlLnNob3VsZFVzZU5hdGl2ZURyYWdBbmREcm9wKCkpIHtcbiAgICAgICAgICBkcmFnZ2FibGUucGluUG9zaXRpb24ocHJldkRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24gPSBwcmV2RHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uLmNsb25lKClcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwcmV2TmV3UG9zaXRpb24gPSB0aGlzLm5leHRQb3NpdGlvbihkcmFnZ2FibGUucGlubmVkUG9zaXRpb24sIGRyYWdnYWJsZSlcbiAgICAgICAgcHJldk5ld1Bvc2l0aW9uW3RoaXMuY3Jvc3NBeGlzXSA9IGN1cnJlbnRQb3NpdGlvblt0aGlzLmNyb3NzQXhpc11cbiAgICAgICAgcHJldkRyYWdnYWJsZS5waW5Qb3NpdGlvbihwcmV2TmV3UG9zaXRpb24sIHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSlcbiAgICAgICAgYXJyYXlNb3ZlKHRoaXMuY2FjaGVkU29ydGVkRHJhZ2dhYmxlcywgdGhpcy5pbmRleE9mQWN0aXZlRHJhZ2dhYmxlLS0sIHRoaXMuaW5kZXhPZkFjdGl2ZURyYWdnYWJsZSlcbiAgICAgICAgdGhpcy5vbk1vdmUoZHJhZ2dhYmxlKVxuICAgICAgICB0aGlzLmNoYW5nZWREdXJpbmdJdGVyYXRpb24gPSB0cnVlXG4gICAgICB9XG4gICAgfSBlbHNlIGlmKHRoaXMuaXNNb3ZpbmdGb3J3YXJkKGRyYWdnYWJsZSkgJiYgbmV4dERyYWdnYWJsZSkge1xuICAgICAgY3VycmVudE9yZGVyID0gW2RyYWdnYWJsZSwgbmV4dERyYWdnYWJsZV0ubWFwKChkKSA9PiBkLnBpbm5lZFBvc2l0aW9uKVxuICAgICAgdGFyZ2V0SW5kZXggPSBpbmRleE9mTmVhcmVzdFBvaW50KGN1cnJlbnRPcmRlciwgZHJhZ2dhYmxlLnBvc2l0aW9uLCAxMDAwMCwgdGhpcy5kaXN0YW5jZUZ1bmMpXG5cbiAgICAgIGlmKHRhcmdldEluZGV4ID09PSAxKSB7XG4gICAgICAgIG5leHREcmFnZ2FibGUucGluUG9zaXRpb24oZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICAgIGNvbnN0IGRyYWdnYWJsZU5ld1Bvc2l0aW9uID0gdGhpcy5uZXh0UG9zaXRpb24obmV4dERyYWdnYWJsZS5waW5uZWRQb3NpdGlvbiwgbmV4dERyYWdnYWJsZSlcbiAgICAgICAgaWYoZHJhZ2dhYmxlLnNob3VsZFVzZU5hdGl2ZURyYWdBbmREcm9wKCkpIHtcbiAgICAgICAgICBkcmFnZ2FibGUucGluUG9zaXRpb24oZHJhZ2dhYmxlTmV3UG9zaXRpb24pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uID0gZHJhZ2dhYmxlTmV3UG9zaXRpb25cbiAgICAgICAgfVxuICAgICAgICBhcnJheU1vdmUodGhpcy5jYWNoZWRTb3J0ZWREcmFnZ2FibGVzLCB0aGlzLmluZGV4T2ZBY3RpdmVEcmFnZ2FibGUrKywgdGhpcy5pbmRleE9mQWN0aXZlRHJhZ2dhYmxlKVxuICAgICAgICB0aGlzLm9uTW92ZShkcmFnZ2FibGUpXG4gICAgICAgIHRoaXMuY2hhbmdlZER1cmluZ0l0ZXJhdGlvbiA9IHRydWVcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBidWJibGluZyhzb3J0ZWREcmFnZ2FibGVzLCBjdXJyZW50RHJhZ2dhYmxlKSB7XG4gICAgbGV0IGN1cnJlbnRQb3NpdGlvbiA9IHRoaXMuc3RhcnRQb3NpdGlvbi5jbG9uZSgpXG4gICAgc29ydGVkRHJhZ2dhYmxlcyB8fD0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcblxuICAgIHNvcnRlZERyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBpZiAoIWRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbi5jb21wYXJlKGN1cnJlbnRQb3NpdGlvbikpIHtcbiAgICAgICAgaWYgKGRyYWdnYWJsZSA9PT0gY3VycmVudERyYWdnYWJsZSAmJiAhY3VycmVudERyYWdnYWJsZS5zaG91bGRVc2VOYXRpdmVEcmFnQW5kRHJvcCgpKSB7XG4gICAgICAgICAgZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uID0gY3VycmVudFBvc2l0aW9uLmNsb25lKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkcmFnZ2FibGUucGluUG9zaXRpb24oY3VycmVudFBvc2l0aW9uLCAoZHJhZ2dhYmxlID09PSBjdXJyZW50RHJhZ2dhYmxlKSA/IDAgOiB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY3VycmVudFBvc2l0aW9uID0gdGhpcy5uZXh0UG9zaXRpb24oY3VycmVudFBvc2l0aW9uLCBkcmFnZ2FibGUpXG4gICAgfSlcbiAgfVxuXG4gIHJlbW92ZShkcmFnZ2FibGVzKSB7XG4gICAgaWYgKCEoZHJhZ2dhYmxlcyBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgZHJhZ2dhYmxlcyA9IFtkcmFnZ2FibGVzXVxuICAgIH1cblxuICAgIC8vIERldGVjdCBsYXlvdXQgYmVmb3JlIHJlbW92YWwsIG90aGVyd2lzZSB0aGUgZ2FwIGlzIG1lYXN1cmVkIGFjcm9zcyB0aGUgaG9sZVxuICAgIHRoaXMuYXV0b0RldGVjdEdhcCgpXG4gICAgdGhpcy5hdXRvRGV0ZWN0U3RhcnRQb3NpdGlvbigpXG5cbiAgICBkcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gdGhpcy5yZWxlYXNlRHJhZ2dhYmxlKGRyYWdnYWJsZSkpXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gdGhpcy5kcmFnZ2FibGVzLmZpbHRlcigoZCkgPT4gIWRyYWdnYWJsZXMuaW5jbHVkZXMoZCkpXG5cbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZCkgPT4gZC5zdGFydFBvc2l0aW9uaW5nKCkpXG5cbiAgICBpZih0aGlzLmRyYWdnYWJsZXMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5idWJibGluZygpXG4gICAgfVxuICB9XG5cbiAgbmV4dFBvc2l0aW9uKHBvc2l0aW9uLCBkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBuZXh0ID0gcG9zaXRpb24uY2xvbmUoKVxuICAgIG5leHRbdGhpcy5heGlzXSA9IHBvc2l0aW9uW3RoaXMuYXhpc10gKyBkcmFnZ2FibGUuZ2V0U2l6ZSgpW3RoaXMuYXhpc10gKyB0aGlzLmdhcFxuICAgIHJldHVybiBuZXh0XG4gIH1cblxuICBpc01vdmluZ0JhY2t3YXJkKGRyYWdnYWJsZSkge1xuICAgIHJldHVybiB0aGlzLmF4aXMgPT09ICd4JyA/IGRyYWdnYWJsZS5sZWZ0RGlyZWN0aW9uIDogZHJhZ2dhYmxlLnVwRGlyZWN0aW9uXG4gIH1cblxuICBpc01vdmluZ0ZvcndhcmQoZHJhZ2dhYmxlKSB7XG4gICAgcmV0dXJuIHRoaXMuYXhpcyA9PT0gJ3gnID8gZHJhZ2dhYmxlLnJpZ2h0RGlyZWN0aW9uIDogZHJhZ2dhYmxlLmRvd25EaXJlY3Rpb25cbiAgfVxuXG4gIGdldCBheGlzKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuYXhpcyA9PT0gJ3gnID8gJ3gnIDogJ3knXG4gIH1cblxuICBnZXQgY3Jvc3NBeGlzKCkge1xuICAgIHJldHVybiB0aGlzLmF4aXMgPT09ICd4JyA/ICd5JyA6ICd4J1xuICB9XG5cbiAgZ2V0IGRpc3RhbmNlRnVuYygpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmdldERpc3RhbmNlIHx8ICh0aGlzLmF4aXMgPT09ICd4JyA/IGdldFhEaWZmZXJlbmNlIDogZ2V0WURpZmZlcmVuY2UpXG4gIH1cblxuICBnZXQgZXhwbGljaXRHYXAoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5nYXAgPz8gdGhpcy5vcHRpb25zLnZlcnRpY2FsR2FwXG4gIH1cblxuICBnZXQgZ2FwKCkge1xuICAgIGlmICh0aGlzLmV4cGxpY2l0R2FwICE9PSB1bmRlZmluZWQpIHJldHVybiB0aGlzLmV4cGxpY2l0R2FwXG5cbiAgICB0aGlzLmF1dG9EZXRlY3RHYXAoKVxuICAgIHJldHVybiB0aGlzLl9nYXAgfHwgMFxuICB9XG5cbiAgc2V0IGdhcChnYXBWYWx1ZSkge1xuICAgIHRoaXMub3B0aW9ucy5nYXAgPSBnYXBWYWx1ZVxuICB9XG5cbiAgZ2V0IHZlcnRpY2FsR2FwKCkge1xuICAgIHJldHVybiB0aGlzLmdhcFxuICB9XG5cbiAgc2V0IHZlcnRpY2FsR2FwKGdhcFZhbHVlKSB7XG4gICAgdGhpcy5nYXAgPSBnYXBWYWx1ZVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByYW5nZShzdGFydCwgc3RvcCwgc3RlcCkge1xuICBjb25zdCByZXN1bHQgPSBbXVxuICBpZiAodHlwZW9mIHN0b3AgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgc3RvcCA9IHN0YXJ0XG4gICAgc3RhcnQgPSAwXG4gIH1cbiAgaWYgKHR5cGVvZiBzdGVwID09PSAndW5kZWZpbmVkJykge1xuICAgIHN0ZXAgPSAxXG4gIH1cbiAgaWYgKChzdGVwID4gMCAmJiBzdGFydCA+PSBzdG9wKSB8fCAoc3RlcCA8IDAgJiYgc3RhcnQgPD0gc3RvcCkpIHtcbiAgICByZXR1cm4gW11cbiAgfVxuICBmb3IgKGxldCBpID0gc3RhcnQ7IHN0ZXAgPiAwID8gaSA8IHN0b3AgOiBpID4gc3RvcDsgaSArPSBzdGVwKSB7XG4gICAgcmVzdWx0LnB1c2goaSlcbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9wb2ludCdcbmltcG9ydCB7IGdldERpc3RhbmNlIH0gZnJvbSAnLi9kaXN0YW5jZXMnXG5cbmV4cG9ydCBmdW5jdGlvbiBjbGFtcChtaW4sIG1heCwgdmFsKSB7XG4gIHJldHVybiBNYXRoLm1heChtaW4sIE1hdGgubWluKG1heCwgdmFsKSlcbn1cblxuLy9SZXR1cm4gY3Jvc3NpbmcgcG9pbnQgb2YgdHdvIGxpbmVzXG5leHBvcnQgZnVuY3Rpb24gZGlyZWN0Q3Jvc3NpbmcoTDFQMSwgTDFQMiwgTDJQMSwgTDJQMikge1xuICBsZXQgdGVtcCwgazEsIGsyLCBiMSwgYjIsIHgsIHlcbiAgaWYgKEwyUDEueCA9PT0gTDJQMi54KSB7XG4gICAgdGVtcCA9IEwyUDFcbiAgICBMMlAxID0gTDFQMVxuICAgIEwxUDEgPSB0ZW1wXG4gICAgdGVtcCA9IEwyUDJcbiAgICBMMlAyID0gTDFQMlxuICAgIEwxUDIgPSB0ZW1wXG4gIH1cbiAgaWYgKEwxUDEueCA9PT0gTDFQMi54KSB7XG4gICAgazIgPSAoTDJQMi55IC0gTDJQMS55KSAvIChMMlAyLnggLSBMMlAxLngpXG4gICAgYjIgPSAoTDJQMi54ICogTDJQMS55IC0gTDJQMS54ICogTDJQMi55KSAvIChMMlAyLnggLSBMMlAxLngpXG4gICAgeCA9IEwxUDEueFxuICAgIHkgPSB4ICogazIgKyBiMlxuICAgIHJldHVybiBuZXcgUG9pbnQoeCwgeSlcbiAgfSBlbHNlIHtcbiAgICBrMSA9IChMMVAyLnkgLSBMMVAxLnkpIC8gKEwxUDIueCAtIEwxUDEueClcbiAgICBiMSA9IChMMVAyLnggKiBMMVAxLnkgLSBMMVAxLnggKiBMMVAyLnkpIC8gKEwxUDIueCAtIEwxUDEueClcbiAgICBrMiA9IChMMlAyLnkgLSBMMlAxLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICBiMiA9IChMMlAyLnggKiBMMlAxLnkgLSBMMlAxLnggKiBMMlAyLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICB4ID0gKGIxIC0gYjIpIC8gKGsyIC0gazEpXG4gICAgeSA9IHggKiBrMSArIGIxXG4gICAgcmV0dXJuIG5ldyBQb2ludCh4LCB5KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZFRvU2VnbWVudChMUDEsIExQMiwgUCkge1xuICBsZXQgeCwgeVxuICB4ID0gY2xhbXAoTWF0aC5taW4oTFAxLngsIExQMi54KSwgTWF0aC5tYXgoTFAxLngsIExQMi54KSwgUC54KVxuICBpZiAoeCAhPT0gUC54KSB7XG4gICAgeSA9ICh4ID09PSBMUDEueCkgPyBMUDEueSA6IExQMi55XG4gICAgUCA9IG5ldyBQb2ludCh4LCB5KVxuICB9XG5cbiAgeSA9IGNsYW1wKE1hdGgubWluKExQMS55LCBMUDIueSksIE1hdGgubWF4KExQMS55LCBMUDIueSksIFAueSlcbiAgaWYgKHkgIT09IFAueSkge1xuICAgIHggPSAoeSA9PT0gTFAxLnkpID8gTFAxLnggOiBMUDIueFxuICAgIFAgPSBuZXcgUG9pbnQoeCwgeSlcbiAgfVxuXG4gIHJldHVybiBQXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZFRvTGluZShBLCBCLCBQKSB7XG4gIGNvbnN0IEFQID0gbmV3IFBvaW50KFAueCAtIEEueCwgUC55IC0gQS55KSxcbiAgICBBQiA9IG5ldyBQb2ludChCLnggLSBBLngsIEIueSAtIEEueSksXG4gICAgYWIyID0gQUIueCAqIEFCLnggKyBBQi55ICogQUIueSxcbiAgICBhcF9hYiA9IEFQLnggKiBBQi54ICsgQVAueSAqIEFCLnksXG4gICAgdCA9IGFwX2FiIC8gYWIyXG4gIHJldHVybiBuZXcgUG9pbnQoQS54ICsgQUIueCAqIHQsIEEueSArIEFCLnkgKiB0KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9pbnRPbkxpbmUoTFAxLCBMUDIsIHBlcmNlbnQpIHtcbiAgY29uc3QgZHggPSBMUDIueCAtIExQMS54LCBkeSA9IExQMi55IC0gTFAxLnlcbiAgcmV0dXJuIG5ldyBQb2ludChMUDEueCArIHBlcmNlbnQgKiBkeCwgTFAxLnkgKyBwZXJjZW50ICogZHkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb2ludE9uTGluZUJ5TGVuZ2h0KExQMSwgTFAyLCBsZW5naHQpIHtcbiAgY29uc3QgZHggPSBMUDIueCAtIExQMS54XG4gIGNvbnN0IGR5ID0gTFAyLnkgLSBMUDEueVxuICBjb25zdCBwZXJjZW50ID0gbGVuZ2h0IC8gZ2V0RGlzdGFuY2UoTFAxLCBMUDIpXG4gIHJldHVybiBuZXcgUG9pbnQoTFAxLnggKyBwZXJjZW50ICogZHgsIExQMS55ICsgcGVyY2VudCAqIGR5KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkUG9pbnRUb0JvdW5kUG9pbnRzKGJvdW5kcG9pbnRzLCBwb2ludCwgaXNSaWdodCkge1xuICBjb25zdCByZXN1bHQgPSBib3VuZHBvaW50cy5maWx0ZXIoKGJQb2ludCkgPT4ge1xuICAgIHJldHVybiBiUG9pbnQueSA+IHBvaW50LnkgfHwgKGlzUmlnaHQgPyBiUG9pbnQueCA8IHBvaW50LnggOiBiUG9pbnQueCA+IHBvaW50LngpXG4gIH0pXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHQubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAocG9pbnQueSA8IHJlc3VsdFtpXS55KSB7XG4gICAgICByZXN1bHQuc3BsaWNlKGksIDAsIHBvaW50KVxuICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbiAgfVxuICByZXN1bHQucHVzaChwb2ludClcbiAgcmV0dXJuIHJlc3VsdFxufVxuIiwiaW1wb3J0IFBvaW50IGZyb20gJy4vZ2VvbWV0cnkvcG9pbnQnXG5pbXBvcnQgeyBhZGRQb2ludFRvQm91bmRQb2ludHMgfSBmcm9tICcuL2dlb21ldHJ5L2JvdW5kcydcblxuaW1wb3J0IHtcbiAgaW5kZXhPZk5lYXJlc3RQb2ludCxcbiAgZ2V0RGlzdGFuY2Vcbn0gZnJvbSAnLi9nZW9tZXRyeS9kaXN0YW5jZXMnXG5cbmNsYXNzIEJhc2ljU3RyYXRlZ3kge1xuICBjb25zdHJ1Y3RvcihyZWN0YW5nbGUsIG9wdGlvbnM9e30pIHtcbiAgICB0aGlzLnJlY3RhbmdsZSA9IHJlY3RhbmdsZVxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNcbiAgfVxuXG4gIGdldCBib3VuZFJlY3QgKCkge1xuICAgIHJldHVybiB0eXBlb2YgdGhpcy5yZWN0YW5nbGUgPT09ICdmdW5jdGlvbicgPyB0aGlzLnJlY3RhbmdsZSgpIDogdGhpcy5yZWN0YW5nbGVcbiAgfVxufVxuXG5jbGFzcyBOb3RDcm9zc2luZ1N0cmF0ZWd5IGV4dGVuZHMgQmFzaWNTdHJhdGVneSB7XG4gIHBvc2l0aW9uaW5nIChyZWN0YW5nbGVMaXN0LCBpbmRleGVzT2ZOZXdzKSB7XG4gICAgY29uc3Qgc3RhdGljUmVjdGFuZ2xlSW5kZXhlcyA9IHJlY3RhbmdsZUxpc3QucmVkdWNlKChpbmRleGVzLCBfcmVjdCwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChpbmRleGVzT2ZOZXdzLmluZGV4T2YoaW5kZXgpID09PSAtMSkge1xuICAgICAgICBpbmRleGVzLnB1c2goaW5kZXgpXG4gICAgICB9XG4gICAgICByZXR1cm4gaW5kZXhlc1xuICAgIH0sIFtdKVxuXG4gICAgaW5kZXhlc09mTmV3cy5mb3JFYWNoKChpbmRleCkgPT4ge1xuICAgICAgbGV0IHJlY3QgPSByZWN0YW5nbGVMaXN0W2luZGV4XVxuICAgICAgbGV0IHJlbW92YWJsZSA9IGZhbHNlXG5cbiAgICAgIHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMuZm9yRWFjaCgoaW5kZXhPZlN0YXRpYykgPT4ge1xuICAgICAgICBjb25zdCBzdGF0aWNSZWN0ID0gcmVjdGFuZ2xlTGlzdFtpbmRleE9mU3RhdGljXVxuICAgICAgICByZWN0ID0gc3RhdGljUmVjdC5tb3ZlVG9Cb3VuZChyZWN0KVxuICAgICAgfSlcblxuICAgICAgcmVtb3ZhYmxlID0gc3RhdGljUmVjdGFuZ2xlSW5kZXhlcy5zb21lKChpbmRleE9mU3RhdGljKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YXRpY1JlY3QgPSByZWN0YW5nbGVMaXN0W2luZGV4T2ZTdGF0aWNdXG4gICAgICAgIHJldHVybiAgISFzdGF0aWNSZWN0LmFuZChyZWN0KVxuICAgICAgfSkgfHwgcmVjdC5hbmQodGhpcy5ib3VuZFJlY3QpLmdldFNxdWFyZSgpICE9PSByZWN0LmdldFNxdWFyZSgpXG5cbiAgICAgIGlmIChyZW1vdmFibGUpIHtcbiAgICAgICAgcmVjdC5yZW1vdmFibGUgPSB0cnVlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0aWNSZWN0YW5nbGVJbmRleGVzLnB1c2goaW5kZXgpXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcmVjdGFuZ2xlTGlzdFxuICB9XG5cbiAgc29ydGluZyhvZGxEcmFnZ2FibGVzTGlzdCwgbmV3RHJhZ2dhYmxlcywgaW5kZXhPZk5ld3MpIHtcbiAgICBjb25zdCBkcmFnZ2FibGVzID0gb2RsRHJhZ2dhYmxlc0xpc3QuY29uY2F0KG5ld0RyYWdnYWJsZXMpXG4gICAgbmV3RHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGluZGV4T2ZOZXdzLnB1c2goZHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkpXG4gICAgfSlcbiAgICByZXR1cm4gZHJhZ2dhYmxlc1xuICB9XG59XG5cbmNsYXNzIEZsb2F0TGVmdFN0cmF0ZWd5IGV4dGVuZHMgQmFzaWNTdHJhdGVneSB7XG4gIGNvbnN0cnVjdG9yKHJlY3RhbmdsZSwgb3B0aW9ucz17fSkge1xuICAgIHN1cGVyKHJlY3RhbmdsZSwgb3B0aW9ucylcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHJlbW92YWJsZTogdHJ1ZVxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0aGlzLnJhZGl1cyA9IG9wdGlvbnMucmFkaXVzIHx8IDgwXG5cbiAgICB0aGlzLnBhZGRpbmdUb3BMZWZ0ID0gb3B0aW9ucy5wYWRkaW5nVG9wTGVmdCB8fCBuZXcgUG9pbnQoMCwgMClcbiAgICB0aGlzLnBhZGRpbmdCb3R0b21SaWdodCA9IG9wdGlvbnMucGFkZGluZ0JvdHRvbVJpZ2h0IHx8IG5ldyBQb2ludCgwLCAwKVxuICAgIHRoaXMueUdhcEJldHdlZW5EcmFnZ2FibGVzID0gb3B0aW9ucy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgfHwgMFxuXG4gICAgdGhpcy5nZXREaXN0YW5jZSA9IG9wdGlvbnMuZ2V0RGlzdGFuY2UgfHwgZ2V0RGlzdGFuY2VcbiAgICB0aGlzLmdldFBvc2l0aW9uID0gb3B0aW9ucy5nZXRQb3NpdGlvbiB8fCAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnBvc2l0aW9uKVxuICB9XG5cbiAgcG9zaXRpb25pbmcocmVjdGFuZ2xlTGlzdCwgX2luZGV4ZXNPZk5ld3MpIHtcbiAgICBjb25zdCBib3VuZFJlY3QgPSB0aGlzLmJvdW5kUmVjdFxuICAgIGNvbnN0IHJlY3RQMiA9IGJvdW5kUmVjdC5nZXRQMigpXG4gICAgbGV0IGJvdW5kYXJ5UG9pbnRzID0gW2JvdW5kUmVjdC5wb3NpdGlvbl1cblxuICAgIHJlY3RhbmdsZUxpc3QuZm9yRWFjaCgocmVjdCwgcmVjdEluZGV4KSA9PiB7XG4gICAgICBsZXQgcG9zaXRpb24sIGlzVmFsaWQgPSBmYWxzZVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib3VuZGFyeVBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBwb3NpdGlvbiA9IG5ldyBQb2ludChcbiAgICAgICAgICBib3VuZGFyeVBvaW50c1tpXS54ICsgdGhpcy5wYWRkaW5nVG9wTGVmdC54LFxuICAgICAgICAgIGkgPiAwID8gKGJvdW5kYXJ5UG9pbnRzW2kgLSAxXS55ICsgdGhpcy55R2FwQmV0d2VlbkRyYWdnYWJsZXMpIDogKGJvdW5kUmVjdC5wb3NpdGlvbi55ICsgdGhpcy5wYWRkaW5nVG9wTGVmdC55KVxuICAgICAgICApXG5cbiAgICAgICAgaXNWYWxpZCA9IChwb3NpdGlvbi54ICsgcmVjdC5zaXplLnggPCByZWN0UDIueClcblxuICAgICAgICBpZiAoaXNWYWxpZCkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICAgIHBvc2l0aW9uID0gbmV3IFBvaW50KFxuICAgICAgICAgIGJvdW5kUmVjdC5wb3NpdGlvbi54ICsgdGhpcy5wYWRkaW5nVG9wTGVmdC54LFxuICAgICAgICAgIGJvdW5kYXJ5UG9pbnRzW2JvdW5kYXJ5UG9pbnRzLmxlbmd0aCAtIDFdLnkgKyAocmVjdEluZGV4ID4gMCA/IHRoaXMueUdhcEJldHdlZW5EcmFnZ2FibGVzIDogdGhpcy5wYWRkaW5nVG9wTGVmdC55KVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHJlY3QucG9zaXRpb24gPSBwb3NpdGlvblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZW1vdmFibGUgJiYgcmVjdC5nZXRQMygpLnkgPiBib3VuZFJlY3QuZ2V0UDMoKS55KSB7XG4gICAgICAgIHJlY3QucmVtb3ZhYmxlID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBib3VuZGFyeVBvaW50cyA9IGFkZFBvaW50VG9Cb3VuZFBvaW50cyhib3VuZGFyeVBvaW50cywgcmVjdC5nZXRQMygpLmFkZCh0aGlzLnBhZGRpbmdCb3R0b21SaWdodCkpXG4gICAgfSlcbiAgICByZXR1cm4gcmVjdGFuZ2xlTGlzdFxuICB9XG5cbiAgc29ydGluZyhvZGxEcmFnZ2FibGVzTGlzdCwgbmV3RHJhZ2dhYmxlcywgaW5kZXhPZk5ld3MpIHtcbiAgICBjb25zdCBuZXdMaXN0ID0gb2RsRHJhZ2dhYmxlc0xpc3QuY29uY2F0KClcbiAgICBjb25zdCBsaXN0T2xkUG9zaXRpb24gPSBvZGxEcmFnZ2FibGVzTGlzdC5tYXAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLmdldFBvc2l0aW9uKCkpXG4gICAgbmV3RHJhZ2dhYmxlcy5mb3JFYWNoKChuZXdEcmFnZ2FibGUpID0+IHtcbiAgICAgIGxldCBpbmRleCA9IGluZGV4T2ZOZWFyZXN0UG9pbnQobGlzdE9sZFBvc2l0aW9uLCB0aGlzLmdldFBvc2l0aW9uKG5ld0RyYWdnYWJsZSksIHRoaXMucmFkaXVzLCB0aGlzLmdldERpc3RhbmNlKVxuICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICBpbmRleCA9IG5ld0xpc3QubGVuZ3RoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbmRleCA9IG5ld0xpc3QuaW5kZXhPZihvZGxEcmFnZ2FibGVzTGlzdFtpbmRleF0pXG4gICAgICB9XG4gICAgICBuZXdMaXN0LnNwbGljZShpbmRleCwgMCwgbmV3RHJhZ2dhYmxlKVxuICAgIH0pXG4gICAgbmV3RHJhZ2dhYmxlcy5mb3JFYWNoKChuZXdEcmFnZ2FibGUpID0+IHtcbiAgICAgIGluZGV4T2ZOZXdzLnB1c2gobmV3TGlzdC5pbmRleE9mKG5ld0RyYWdnYWJsZSkpXG4gICAgfSlcbiAgICByZXR1cm4gbmV3TGlzdFxuICB9XG59XG5cbmNsYXNzIEZsb2F0UmlnaHRTdHJhdGVneSBleHRlbmRzIEZsb2F0TGVmdFN0cmF0ZWd5IHtcbiAgY29uc3RydWN0b3IocmVjdGFuZ2xlLCBvcHRpb25zPXt9KSB7XG4gICAgc3VwZXIocmVjdGFuZ2xlLCBvcHRpb25zKVxuXG4gICAgdGhpcy5wYWRkaW5nVG9wUmlnaHQgPSBvcHRpb25zLnBhZGRpbmdUb3BSaWdodCB8fCBuZXcgUG9pbnQoNSwgNSlcbiAgICB0aGlzLnBhZGRpbmdCb3R0b21MZWZ0ID0gb3B0aW9ucy5wYWRkaW5nQm90dG9tTGVmdCB8fCBuZXcgUG9pbnQoMCwgMClcbiAgICB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyA9IG9wdGlvbnMueUdhcEJldHdlZW5EcmFnZ2FibGVzIHx8IDBcblxuICAgIHRoaXMucGFkZGluZ0JvdHRvbU5lZ0xlZnQgPSBuZXcgUG9pbnQoLXRoaXMucGFkZGluZ0JvdHRvbUxlZnQueCwgdGhpcy5wYWRkaW5nQm90dG9tTGVmdC55KVxuICB9XG5cbiAgcG9zaXRpb25pbmcocmVjdGFuZ2xlTGlzdCwgX2luZGV4ZXNPZk5ld3MpIHtcbiAgICBjb25zdCBib3VuZFJlY3QgPSB0aGlzLmJvdW5kUmVjdFxuICAgIGxldCBib3VuZGFyeVBvaW50cyA9IFtib3VuZFJlY3QuZ2V0UDIoKV1cblxuICAgIHJlY3RhbmdsZUxpc3QuZm9yRWFjaCgocmVjdCwgcmVjdEluZGV4KSA9PiB7XG4gICAgICBsZXQgcG9zaXRpb24sIGlzVmFsaWQgPSBmYWxzZVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib3VuZGFyeVBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBwb3NpdGlvbiA9IG5ldyBQb2ludChcbiAgICAgICAgICBib3VuZGFyeVBvaW50c1tpXS54IC0gcmVjdC5zaXplLnggLSB0aGlzLnBhZGRpbmdUb3BSaWdodC54LFxuICAgICAgICAgIGkgPiAwID8gKGJvdW5kYXJ5UG9pbnRzW2kgLSAxXS55ICsgdGhpcy55R2FwQmV0d2VlbkRyYWdnYWJsZXMpIDogKGJvdW5kUmVjdC5wb3NpdGlvbi55ICsgdGhpcy5wYWRkaW5nVG9wUmlnaHQueSlcbiAgICAgICAgKVxuXG4gICAgICAgIGlzVmFsaWQgPSAocG9zaXRpb24ueCA+IHJlY3QucG9zaXRpb24ueClcbiAgICAgICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgcG9zaXRpb24gPSBuZXcgUG9pbnQoXG4gICAgICAgICAgYm91bmRSZWN0LmdldFAyKCkueCAgLSByZWN0LnNpemUueCAtIHRoaXMucGFkZGluZ1RvcFJpZ2h0LngsXG4gICAgICAgICAgYm91bmRhcnlQb2ludHNbYm91bmRhcnlQb2ludHMubGVuZ3RoIC0gMV0ueSArIChyZWN0SW5kZXggPiAwID8gdGhpcy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgOiB0aGlzLnBhZGRpbmdUb3BSaWdodC55KVxuICAgICAgICApXG4gICAgICB9XG4gICAgICByZWN0LnBvc2l0aW9uID0gcG9zaXRpb25cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucmVtb3ZhYmxlICYmIHJlY3QuZ2V0UDQoKS55ID4gYm91bmRSZWN0LmdldFA0KCkueSkge1xuICAgICAgICByZWN0LnJlbW92YWJsZSA9IHRydWVcbiAgICAgIH1cbiAgICAgIGJvdW5kYXJ5UG9pbnRzID0gYWRkUG9pbnRUb0JvdW5kUG9pbnRzKGJvdW5kYXJ5UG9pbnRzLCByZWN0LmdldFA0KCkuYWRkKHRoaXMucGFkZGluZ0JvdHRvbU5lZ0xlZnQpLCB0cnVlKVxuICAgIH0pXG4gICAgcmV0dXJuIHJlY3RhbmdsZUxpc3RcbiAgfVxufVxuXG5leHBvcnQgeyBOb3RDcm9zc2luZ1N0cmF0ZWd5LCBGbG9hdExlZnRTdHJhdGVneSwgRmxvYXRSaWdodFN0cmF0ZWd5IH1cbiIsImltcG9ydCBQb2ludCBmcm9tICcuL3BvaW50J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QW5nbGVEaWZmKGFscGhhLCBiZXRhKSB7XG4gIGNvbnN0IG1pbkFuZ2xlID0gTWF0aC5taW4oYWxwaGEsIGJldGEpXG4gIGNvbnN0IG1heEFuZ2xlID0gIE1hdGgubWF4KGFscGhhLCBiZXRhKVxuICByZXR1cm4gTWF0aC5taW4obWF4QW5nbGUgLSBtaW5BbmdsZSwgbWluQW5nbGUgKyBNYXRoLlBJKjIgLSBtYXhBbmdsZSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFuZ2xlKHAxLCBwMikge1xuICBjb25zdCBkaWZmID0gcDIuc3ViKHAxKVxuICByZXR1cm4gbm9ybWFsaXplQW5nbGUoTWF0aC5hdGFuMihkaWZmLnksIGRpZmYueCkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b1JhZGlhbihhbmdsZSkge1xuICByZXR1cm4gKChhbmdsZSAlIDM2MCkgKiBNYXRoLlBJIC8gMTgwKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9EZWdyZWUoYW5nbGUpIHtcbiAgcmV0dXJuIChhbmdsZSAqIDE4MCAvIE1hdGguUEkpICUgMzYwXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZEFuZ2xlKG1pbiwgbWF4LCB2YWwpIHtcbiAgbGV0IGRtaW4sIGRtYXhcbiAgaWYgKG1pbiA8IG1heCAmJiB2YWwgPiBtaW4gJiYgdmFsIDwgbWF4KSB7XG4gICAgcmV0dXJuIHZhbFxuICB9IGVsc2UgaWYgKG1heCA8IG1pbiAmJiAodmFsIDwgbWF4IHx8IHZhbCA+IG1pbikpIHtcbiAgICByZXR1cm4gdmFsXG4gIH0gZWxzZSB7XG4gICAgZG1pbiA9IGdldEFuZ2xlRGlmZihtaW4sIHZhbClcbiAgICBkbWF4ID0gZ2V0QW5nbGVEaWZmKG1heCwgdmFsKVxuICAgIGlmIChkbWluIDwgZG1heCkge1xuICAgICAgcmV0dXJuIG1pblxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbWF4XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROZWFyZXN0QW5nbGUoYXJyLCBhbmdsZSkge1xuICBsZXQgaSwgdGVtcCwgZGlmZiA9IE1hdGguUEkgKiAyLCB2YWx1ZVxuICBmb3IgKGkgPSAwOyBpIDwgYXJyLmxlbmd0aDtpKyspIHtcbiAgICB0ZW1wID0gZ2V0QW5nbGVEaWZmKGFycltpXSwgYW5nbGUpXG4gICAgaWYgKGRpZmYgPCB0ZW1wKSB7XG4gICAgICBkaWZmID0gdGVtcFxuICAgICAgdmFsdWUgPSBhcnJbaV1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHZhbHVlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVBbmdsZSh2YWwpIHtcbiAgd2hpbGUgKHZhbCA8IDApIHtcbiAgICB2YWwgKz0gMiAqIE1hdGguUElcbiAgfVxuICB3aGlsZSAodmFsID4gMiAqIE1hdGguUEkpIHtcbiAgICB2YWwgLT0gMiAqIE1hdGguUElcbiAgfVxuICByZXR1cm4gdmFsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oYW5nbGUsIGxlbmd0aCwgY2VudGVyKSB7XG4gIGNlbnRlciA9IGNlbnRlciB8fCBuZXcgUG9pbnQoMCwgMClcbiAgcmV0dXJuIGNlbnRlci5hZGQobmV3IFBvaW50KGxlbmd0aCAqIE1hdGguY29zKGFuZ2xlKSwgbGVuZ3RoICogTWF0aC5zaW4oYW5nbGUpKSlcbn1cbiIsImltcG9ydCBQb2ludCBmcm9tICcuL2dlb21ldHJ5L3BvaW50J1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tICcuL2dlb21ldHJ5L3JlY3RhbmdsZSdcbmltcG9ydCB7XG4gIGdldFBvaW50T25MaW5lQnlMZW5naHQsXG4gIGRpcmVjdENyb3NzaW5nLFxuICBib3VuZFRvTGluZVxufSBmcm9tICcuL2dlb21ldHJ5L2JvdW5kcydcblxuaW1wb3J0IHtcbiAgZ2V0QW5nbGUsXG4gIG5vcm1hbGl6ZUFuZ2xlLFxuICBib3VuZEFuZ2xlLFxuICBnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW1cbn0gZnJvbSAnLi9nZW9tZXRyeS9hbmdsZXMnXG5cbmV4cG9ydCBjbGFzcyBCb3VuZCB7XG4gIGNvbnN0cnVjdG9yICgpIHt9XG5cbiAgYm91bmQocG9pbnQsIF9zaXplKSB7XG4gICAgcmV0dXJuIHBvaW50XG4gIH1cblxuICByZWZyZXNoICgpIHt9XG5cbiAgc3RhdGljIGJvdW5kaW5nKCkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IHRoaXMoLi4uYXJndW1lbnRzKVxuICAgIHJldHVybiBpbnN0YW5jZS5ib3VuZC5iaW5kKGluc3RhbmNlKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvUmVjdGFuZ2xlIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3RvcihyZWN0YW5nbGUpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5yZWN0YW5nbGUgPSByZWN0YW5nbGVcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgY2FsY1BvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIGNvbnN0IHJlY3RQMiA9IHRoaXMucmVjdGFuZ2xlLmdldFAzKClcblxuICAgIGlmICh0aGlzLnJlY3RhbmdsZS5wb3NpdGlvbi54ID4gY2FsY1BvaW50LngpIHtcbiAgICAgIChjYWxjUG9pbnQueCA9IHRoaXMucmVjdGFuZ2xlLnBvc2l0aW9uLngpXG4gICAgfVxuICAgIGlmICh0aGlzLnJlY3RhbmdsZS5wb3NpdGlvbi55ID4gY2FsY1BvaW50LnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gdGhpcy5yZWN0YW5nbGUucG9zaXRpb24ueVxuICAgIH1cbiAgICBpZiAocmVjdFAyLnggPCBjYWxjUG9pbnQueCArIHNpemUueCkge1xuICAgICAgY2FsY1BvaW50LnggPSByZWN0UDIueCAtIHNpemUueFxuICAgIH1cbiAgICBpZiAocmVjdFAyLnkgPCBjYWxjUG9pbnQueSArIHNpemUueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSByZWN0UDIueSAtIHNpemUueVxuICAgIH1cblxuICAgIHJldHVybiBjYWxjUG9pbnRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb0VsZW1lbnQgZXh0ZW5kcyBCb3VuZFRvUmVjdGFuZ2xlIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29udGFpbmVyKSB7XG4gICAgc3VwZXIoUmVjdGFuZ2xlLmZyb21FbGVtZW50KGVsZW1lbnQsIGNvbnRhaW5lcikpXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyXG4gIH1cblxuICByZWZyZXNoICgpIHtcbiAgICB0aGlzLnJlY3RhbmdsZSA9IFJlY3RhbmdsZS5mcm9tRWxlbWVudCh0aGlzLmVsZW1lbnQsIHRoaXMuY29udGFpbmVyKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvTGluZVggZXh0ZW5kcyBCb3VuZCB7XG4gIGNvbnN0cnVjdG9yKHgsIHN0YXJ0WSwgZW5kWSkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnggPSB4XG4gICAgdGhpcy5zdGFydFkgPSBzdGFydFlcbiAgICB0aGlzLmVuZFkgPSBlbmRZXG4gIH1cblxuICBib3VuZChwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IGNhbGNQb2ludCA9IHBvaW50LmNsb25lKClcblxuICAgIGNhbGNQb2ludC54ID0gdGhpcy54XG4gICAgaWYgKHRoaXMuc3RhcnRZID4gY2FsY1BvaW50LnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gdGhpcy5zdGFydFlcbiAgICB9XG4gICAgaWYgKHRoaXMuZW5kWSA8IGNhbGNQb2ludC55ICsgc2l6ZS55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHRoaXMuZW5kWSAtIHNpemUueVxuICAgIH1cblxuICAgIHJldHVybiBjYWxjUG9pbnRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb0xpbmVZIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3Rvcih5LCBzdGFydFgsIGVuZFgpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy55ID0geVxuICAgIHRoaXMuc3RhcnRYID0gc3RhcnRYXG4gICAgdGhpcy5lbmRYID0gZW5kWFxuICB9XG5cbiAgYm91bmQocG9pbnQsIHNpemUpIHtcbiAgICBjb25zdCBjYWxjUG9pbnQgPSBwb2ludC5jbG9uZSgpXG4gICAgY2FsY1BvaW50LnkgPSB0aGlzLnlcbiAgICBpZiAodGhpcy5zdGFydFggPiBjYWxjUG9pbnQueCkge1xuICAgICAgY2FsY1BvaW50LnggPSB0aGlzLnN0YXJ0WFxuICAgIH1cbiAgICBpZiAodGhpcy5lbmRYIDwgY2FsY1BvaW50LnggKyBzaXplLngpIHtcbiAgICAgIGNhbGNQb2ludC54ID0gdGhpcy5lbmRYIC0gc2l6ZS54XG4gICAgfVxuICAgIHJldHVybiBjYWxjUG9pbnRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb0xpbmUgZXh0ZW5kcyBCb3VuZCB7XG4gIGNvbnN0cnVjdG9yKHN0YXJ0UG9pbnQsIGVuZFBvaW50KSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuc3RhcnRQb2ludCA9IHN0YXJ0UG9pbnRcbiAgICB0aGlzLmVuZFBvaW50ID0gZW5kUG9pbnRcbiAgICBjb25zdCBhbHBoYSA9IE1hdGguYXRhbjIoZW5kUG9pbnQueSAtIHN0YXJ0UG9pbnQueSwgZW5kUG9pbnQueCAtIHN0YXJ0UG9pbnQueClcbiAgICBjb25zdCBiZXRhID0gYWxwaGEgKyBNYXRoLlBJIC8gMlxuICAgIHRoaXMuc29tZUsgPSAxMFxuICAgIHRoaXMuY29zQmV0YSA9IE1hdGguY29zKGJldGEpXG4gICAgdGhpcy5zaW5CZXRhID0gTWF0aC5zaW4oYmV0YSlcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgcG9pbnQyID0gbmV3IFBvaW50KFxuICAgICAgcG9pbnQueCArIHRoaXMuc29tZUsgKiB0aGlzLmNvc0JldGEsXG4gICAgICBwb2ludC55ICsgdGhpcy5zb21lSyAqIHRoaXMuc2luQmV0YVxuICAgIClcblxuICAgIGNvbnN0IG5ld0VuZFBvaW50ID0gZ2V0UG9pbnRPbkxpbmVCeUxlbmdodCh0aGlzLmVuZFBvaW50LCB0aGlzLnN0YXJ0UG9pbnQsIHNpemUueClcbiAgICBjb25zdCBwb2ludENyb3NzaW5nID0gZGlyZWN0Q3Jvc3NpbmcodGhpcy5zdGFydFBvaW50LCB0aGlzLmVuZFBvaW50LCBwb2ludCwgcG9pbnQyKVxuXG4gICAgcmV0dXJuIGJvdW5kVG9MaW5lKHRoaXMuc3RhcnRQb2ludCwgbmV3RW5kUG9pbnQsIHBvaW50Q3Jvc3NpbmcpXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9DaXJjbGUgZXh0ZW5kcyBCb3VuZCB7XG4gIGNvbnN0cnVjdG9yKGNlbnRlciwgcmFkaXVzKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuY2VudGVyID0gY2VudGVyXG4gICAgdGhpcy5yYWRpdXMgPSByYWRpdXNcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBfc2l6ZSkge1xuICAgIHJldHVybiBnZXRQb2ludE9uTGluZUJ5TGVuZ2h0KHRoaXMuY2VudGVyLCBwb2ludCwgdGhpcy5yYWRpdXMpXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9BcmMgZXh0ZW5kcyBCb3VuZFRvQ2lyY2xlIHtcbiAgY29uc3RydWN0b3IoY2VudGVyLCByYWRpdXMsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlKSB7XG4gICAgc3VwZXIoY2VudGVyLCByYWRpdXMpXG4gICAgdGhpcy5fc3RhcnRBbmdsZSA9IHN0YXJ0QW5nbGVcbiAgICB0aGlzLl9lbmRBbmdsZSA9IGVuZEFuZ2xlXG4gIH1cblxuICBzdGFydEFuZ2xlKCkge1xuICAgIHJldHVybiB0eXBlb2YgdGhpcy5fc3RhcnRBbmdsZSA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMuX3N0YXJ0QW5nbGUoKSA6IHRoaXMuX3N0YXJ0QW5nbGVcbiAgfVxuXG4gIGVuZEFuZ2xlKCkge1xuICAgIHJldHVybiB0eXBlb2YgdGhpcy5fZW5kQW5nbGUgPT09ICdmdW5jdGlvbicgPyB0aGlzLl9lbmRBbmdsZSgpIDogdGhpcy5fZW5kQW5nbGVcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBfc2l6ZSkge1xuICAgIGxldCBhbmdsZSA9IGdldEFuZ2xlKHRoaXMuY2VudGVyLCBwb2ludClcbiAgICBhbmdsZSA9IG5vcm1hbGl6ZUFuZ2xlKGFuZ2xlKVxuICAgIGFuZ2xlID0gYm91bmRBbmdsZSh0aGlzLnN0YXJ0QW5nbGUoKSwgdGhpcy5lbmRBbmdsZSgpLCBhbmdsZSlcbiAgICByZXR1cm4gZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKGFuZ2xlLCB0aGlzLnJhZGl1cywgdGhpcy5jZW50ZXIpXG4gIH1cbn1cbiIsImltcG9ydCByYW5nZSBmcm9tICcuL3V0aWxzL3JhbmdlLmpzJ1xuaW1wb3J0IHJlbW92ZUl0ZW0gZnJvbSAnLi91dGlscy9yZW1vdmUtYXJyYXktaXRlbSdcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudEVtaXR0ZXInXG5pbXBvcnQgZGlzcGF0Y2hEb21FdmVudCBmcm9tICcuL3V0aWxzL2Rpc3BhdGNoLWRvbS1ldmVudCdcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSAnLi9nZW9tZXRyeS9yZWN0YW5nbGUnXG5pbXBvcnQgeyB0cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5IH0gZnJvbSAnLi9nZW9tZXRyeS9kaXN0YW5jZXMnXG5pbXBvcnQgeyBzY29wZXMsIGN1cnJlbnRTY29wZSB9IGZyb20gJy4vc2NvcGUnXG5cbmltcG9ydCB7IEZsb2F0TGVmdFN0cmF0ZWd5IH0gZnJvbSAnLi9wb3NpdGlvbmluZydcbmltcG9ydCB7IEJvdW5kVG9FbGVtZW50IH0gZnJvbSAnLi9ib3VuZGluZydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFyZ2V0IGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgZHJhZ2dhYmxlcywgb3B0aW9ucyA9IHt9KSB7XG4gICAgc3VwZXIob3B0aW9ucylcblxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgdGltZUVuZDogMjAwLFxuICAgICAgdGltZUV4Y2FuZ2U6IDQwMFxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0aGlzLnBvc2l0aW9uaW5nU3RyYXRlZ3kgPSBvcHRpb25zLnN0cmF0ZWd5IHx8IG5ldyBGbG9hdExlZnRTdHJhdGVneShcbiAgICAgIHRoaXMuZ2V0UmVjdGFuZ2xlLmJpbmQodGhpcyksXG4gICAgICB7XG4gICAgICAgIHJhZGl1czogODAsXG4gICAgICAgIGdldERpc3RhbmNlOiB0cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5KHsgeDogMSwgeTogNCB9KSxcbiAgICAgICAgcmVtb3ZhYmxlOiB0cnVlXG4gICAgICB9XG4gICAgKVxuXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IFtdXG4gICAgdGhpcy51bnN1YnNjcmliZXMgPSBbXVxuICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB0aGlzLndhdGNoRHJhZ2dhYmxlKGRyYWdnYWJsZSkpXG5cbiAgICBjdXJyZW50U2NvcGUoKS5hZGRUYXJnZXQodGhpcylcblxuICAgIHRoaXMuc3RhcnRCb3VuZGluZygpXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIHN0YXJ0Qm91bmRpbmcoKSB7XG4gICAgdGhpcy5ib3VuZCA9IHRoaXMub3B0aW9ucy5ib3VuZCB8fCBCb3VuZFRvRWxlbWVudC5ib3VuZGluZyh0aGlzLmVsZW1lbnQpXG4gIH1cblxuICBwb3NpdGlvbmluZyAoZHJhZ2dhYmxlcywgaW5kZXhlc09mTmV3KSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25pbmdTdHJhdGVneS5wb3NpdGlvbmluZyhkcmFnZ2FibGVzLCBpbmRleGVzT2ZOZXcpXG4gIH1cblxuICBzb3J0aW5nIChvbGREcmFnZ2FibGVzLCBuZXdEcmFnZ2FibGVzLCBpbmRleE9mTmV3cykge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uaW5nU3RyYXRlZ3kuc29ydGluZyhvbGREcmFnZ2FibGVzLCBuZXdEcmFnZ2FibGVzLCBpbmRleE9mTmV3cylcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgbGV0IHJlY3RhbmdsZXMsIGluZGV4ZXNPZk5ld1xuXG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMgPSB0aGlzLmRyYWdnYWJsZXMuZmlsdGVyKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGxldCBlbGVtZW50ID0gZHJhZ2dhYmxlLmVsZW1lbnQucGFyZW50Tm9kZVxuICAgICAgd2hpbGUgKGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQgPT09IHRoaXMuZWxlbWVudCkge1xuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfSlcblxuICAgIGlmICh0aGlzLmlubmVyRHJhZ2dhYmxlcy5sZW5ndGgpIHtcbiAgICAgIGluZGV4ZXNPZk5ldyA9IHJhbmdlKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmxlbmd0aClcbiAgICAgIHJlY3RhbmdsZXMgPSB0aGlzLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICAgIH0pLCBpbmRleGVzT2ZOZXcpXG4gICAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIGluZGV4ZXNPZk5ldylcbiAgICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gdGhpcy5lbWl0VGFyZ2V0RXZlbnQoJ2FkZCcsIGRyYWdnYWJsZSkpXG4gICAgfVxuICB9XG5cbiAgZ2V0UmVjdGFuZ2xlKCkge1xuICAgIHJldHVybiBSZWN0YW5nbGUuZnJvbUVsZW1lbnQodGhpcy5lbGVtZW50LCB0aGlzLmNvbnRhaW5lciwgdHJ1ZSlcbiAgfVxuXG4gIGNhdGNoRHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuY2F0Y2hEcmFnZ2FibGUpIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuY2F0Y2hEcmFnZ2FibGUodGhpcywgZHJhZ2dhYmxlKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0YXJnZXRSZWN0YW5nbGUgPSB0aGlzLmdldFJlY3RhbmdsZSgpXG4gICAgICBjb25zdCBkcmFnZ2FibGVTcXVhcmUgPSBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKCkuZ2V0U3F1YXJlKClcblxuICAgICAgcmV0dXJuIGRyYWdnYWJsZVNxdWFyZSA8IHRhcmdldFJlY3RhbmdsZS5nZXRTcXVhcmUoKVxuICAgICAgICAgICAgICAmJiB0YXJnZXRSZWN0YW5nbGUuaW5jbHVkZVBvaW50KGRyYWdnYWJsZS5nZXRDZW50ZXIoKSlcbiAgICB9XG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRSZWN0YW5nbGUoKS5wb3NpdGlvblxuICB9XG5cbiAgZ2V0U2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRSZWN0YW5nbGUoKS5zaXplXG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMudW5zdWJzY3JpYmVzLmZvckVhY2goKHVuc3Vic2NyaWJlKSA9PiB1bnN1YnNjcmliZSgpKVxuICAgIHNjb3Blcy5mb3JFYWNoKChzY29wZSkgPT4gcmVtb3ZlSXRlbShzY29wZS50YXJnZXRzLCB0aGlzKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgW10pXG4gICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBbXSwgMClcbiAgfVxuXG4gIG9uRW5kKGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IG5ld0RyYWdnYWJsZXNJbmRleCA9IFtdXG5cbiAgICBpZiAodGhpcy5nZXRSZWN0YW5nbGUoKS5pbmNsdWRlUG9pbnQoZHJhZ2dhYmxlLmdldENlbnRlcigpKSkge1xuICAgICAgZHJhZ2dhYmxlLnBvc2l0aW9uID0gdGhpcy5ib3VuZChkcmFnZ2FibGUucG9zaXRpb24sIGRyYWdnYWJsZS5nZXRTaXplKCkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHRoaXMuZW1pdFRhcmdldEV2ZW50KCdiZWZvcmVBZGQnLCBkcmFnZ2FibGUpXG5cbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcyA9IHRoaXMuc29ydGluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcywgW2RyYWdnYWJsZV0sIG5ld0RyYWdnYWJsZXNJbmRleClcbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBuZXdEcmFnZ2FibGVzSW5kZXgpXG5cbiAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIG5ld0RyYWdnYWJsZXNJbmRleClcbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMSkge1xuICAgICAgdGhpcy5lbWl0VGFyZ2V0RXZlbnQoJ2FkZCcsIGRyYWdnYWJsZSlcbiAgICB9XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIHNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIGluZGV4ZXNPZk5ldywgdGltZSkge1xuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnNsaWNlKDApLmZvckVhY2goKGRyYWdnYWJsZSwgaSkgPT4ge1xuICAgICAgY29uc3QgcmVjdCA9IHJlY3RhbmdsZXNbaV0sXG4gICAgICAgIHRpbWVFbmQgPSB0aW1lIHx8IHRpbWUgPT09IDAgPyB0aW1lIDogaW5kZXhlc09mTmV3LmluZGV4T2YoaSkgIT09IC0xID8gdGhpcy5vcHRpb25zLnRpbWVFbmQgOiB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2VcblxuICAgICAgaWYgKHJlY3QucmVtb3ZhYmxlKSB7XG4gICAgICAgIGRyYWdnYWJsZS5tb3ZlKGRyYWdnYWJsZS5pbml0aWFsUG9zaXRpb24sIHRpbWVFbmQsIHRydWUsIHRydWUpXG4gICAgICAgIHJlbW92ZUl0ZW0odGhpcy5pbm5lckRyYWdnYWJsZXMsIGRyYWdnYWJsZSlcbiAgICAgICAgdGhpcy5lbWl0VGFyZ2V0RXZlbnQoJ3JlbW92ZScsIGRyYWdnYWJsZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRyYWdnYWJsZS5tb3ZlKHJlY3QucG9zaXRpb24sIHRpbWVFbmQsIHRydWUsIHRydWUpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGFkZChkcmFnZ2FibGUsIHRpbWUpIHtcbiAgICBjb25zdCBuZXdEcmFnZ2FibGVzSW5kZXggPSB0aGlzLmlubmVyRHJhZ2dhYmxlcy5sZW5ndGhcblxuICAgIHRoaXMuZW1pdFRhcmdldEV2ZW50KCdiZWZvcmVBZGQnLCBkcmFnZ2FibGUpXG5cbiAgICB0aGlzLndhdGNoRHJhZ2dhYmxlKGRyYWdnYWJsZSlcbiAgICB0aGlzLnB1c2hJbm5lckRyYWdnYWJsZShkcmFnZ2FibGUpXG4gICAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgbmV3RHJhZ2dhYmxlc0luZGV4LCBkcmFnZ2FibGUpXG5cbiAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIFtuZXdEcmFnZ2FibGVzSW5kZXhdLCB0aW1lIHx8IDApXG4gICAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTEpIHtcbiAgICAgIHRoaXMuZW1pdFRhcmdldEV2ZW50KCdhZGQnLCBkcmFnZ2FibGUpXG4gICAgfVxuICB9XG5cbiAgcHVzaElubmVyRHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIGlmICh0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSk9PT0tMSkge1xuICAgICAgdGhpcy5pbm5lckRyYWdnYWJsZXMucHVzaChkcmFnZ2FibGUpXG4gICAgfVxuICB9XG5cbiAgd2F0Y2hEcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgaWYgKHRoaXMuZHJhZ2dhYmxlcy5pbmNsdWRlcyhkcmFnZ2FibGUpKSByZXR1cm5cblxuICAgIHRoaXMuZHJhZ2dhYmxlcy5wdXNoKGRyYWdnYWJsZSlcbiAgICBkcmFnZ2FibGUudGFyZ2V0cy5wdXNoKHRoaXMpXG4gICAgdGhpcy51bnN1YnNjcmliZXMucHVzaChkcmFnZ2FibGUub24oJ2RyYWc6bW92ZScsICgpID0+IHRoaXMucmVtb3ZlKGRyYWdnYWJsZSkpKVxuICB9XG5cbiAgcmVtb3ZlKGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpXG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuc3BsaWNlKGluZGV4LCAxKVxuXG4gICAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgW10pXG5cbiAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIFtdKVxuICAgIHRoaXMuZW1pdFRhcmdldEV2ZW50KCdyZW1vdmUnLCBkcmFnZ2FibGUpXG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5tb3ZlKGRyYWdnYWJsZS5pbml0aWFsUG9zaXRpb24sIDAsIHRydWUsIHRydWUpXG4gICAgICB0aGlzLmVtaXRUYXJnZXRFdmVudCgncmVtb3ZlJywgZHJhZ2dhYmxlKVxuICAgIH0pXG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMgPSBbXVxuICB9XG5cbiAgZ2V0U29ydGVkRHJhZ2dhYmxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5pbm5lckRyYWdnYWJsZXMuc2xpY2UoKVxuICB9XG5cbiAgZW1pdFRhcmdldEV2ZW50KHR5cGUsIGRyYWdnYWJsZSkge1xuICAgIHRoaXMuZW1pdChgdGFyZ2V0OiR7dHlwZX1gLCBkcmFnZ2FibGUpXG5cbiAgICBpZiAodGhpcy5kb21FdmVudHMpIHtcbiAgICAgIGNvbnN0IGRvbVR5cGUgPSB0eXBlLnJlcGxhY2UoL1tBLVpdL2csIChsZXR0ZXIpID0+IGAtJHtsZXR0ZXIudG9Mb3dlckNhc2UoKX1gKVxuICAgICAgZGlzcGF0Y2hEb21FdmVudCh0aGlzLmVsZW1lbnQsIGBkcmFnZWU6dGFyZ2V0LSR7ZG9tVHlwZX1gLCB7IHRhcmdldDogdGhpcywgZHJhZ2dhYmxlIH0pXG4gICAgfVxuICB9XG5cbiAgZ2V0IGNvbnRhaW5lcigpIHtcbiAgICByZXR1cm4gKHRoaXMuX2NvbnRhaW5lciA9IHRoaXMuX2NvbnRhaW5lciB8fCB0aGlzLm9wdGlvbnMuY29udGFpbmVyIHx8IHRoaXMub3B0aW9ucy5wYXJlbnQgfHwgdGhpcy5lbGVtZW50Lm9mZnNldFBhcmVudClcbiAgfVxuXG4gIGdldCBkb21FdmVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5kb21FdmVudHMgIT09IGZhbHNlXG4gIH1cbn1cblxuIl0sIm5hbWVzIjpbImdldFBhcmVudHNDaGFpbiIsImNoaWxkRWxlbWVudCIsInJvb3RFbGVtZW50IiwiY2hhaW4iLCJlbGVtZW50IiwicGFyZW50Tm9kZSIsInVuc2hpZnQiLCJQb2ludCIsImNvbnN0cnVjdG9yIiwieCIsInkiLCJhZGQiLCJwIiwic3ViIiwibXVsdCIsImsiLCJuZWdhdGl2ZSIsImNvbXBhcmUiLCJjbG9uZSIsInRvU3RyaW5nIiwiZWxlbWVudE9mZnNldCIsInBhcmVudCIsIm9mZnNldFBhcmVudCIsIm9mZnNldExlZnQiLCJjbGllbnRMZWZ0Iiwib2Zmc2V0VG9wIiwiY2xpZW50VG9wIiwiY29uc2lkZXJPZmZzZXRFbGVtZW50cyIsInBvcCIsInJlZHVjZSIsInN1bSIsImVsZW1lbnRCb3VuZGluZ09mZnNldCIsImVsZW1lbnRSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicGFyZW50UmVjdCIsImxlZnQiLCJ0b3AiLCJlbGVtZW50U2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwiUmVjdGFuZ2xlIiwicG9zaXRpb24iLCJzaXplIiwiZ2V0UDEiLCJnZXRQMiIsImdldFAzIiwiZ2V0UDQiLCJnZXRDZW50ZXIiLCJvciIsInJlY3QiLCJNYXRoIiwibWluIiwibWF4IiwiYW5kIiwiaW5jbHVkZVBvaW50IiwiaW5jbHVkZVJlY3RhbmdsZSIsInJlY3RhbmdsZSIsIm1vdmVUb0JvdW5kIiwiYXhpcyIsInNlbEF4aXMiLCJjcm9zc1JlY3RhbmdsZSIsInRoaXNDZW50ZXIiLCJyZWN0Q2VudGVyIiwic2lnbiIsIm9mZnNldCIsImdldFNxdWFyZSIsInN0eWxlQXBwbHkiLCJlbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInN0eWxlIiwiZ3Jvd3RoIiwiZ2V0TWluU2lkZSIsImZyb21FbGVtZW50IiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiaXNDb25zaWRlclRyYW5zbGF0ZSIsIkV2ZW50RW1pdHRlciIsIm9wdGlvbnMiLCJldmVudHMiLCJvbiIsImV2ZW50TmFtZSIsImZuIiwiT2JqZWN0IiwiZW50cmllcyIsImVtaXQiLCJpbnRlcnJ1cHRlZCIsIl9sZW4iLCJhcmdzIiwiQXJyYXkiLCJfa2V5IiwiZnVuYyIsInNsaWNlIiwiaW50ZXJydXB0IiwibGlzdGVuZXJzIiwicHVzaCIsIm9mZiIsInByZXBlbmRPbiIsIm9uY2UiLCJfdGhpcyIsIndyYXBwZXIiLCJsaXN0ZW5lciIsImluZGV4IiwiZmluZEluZGV4Iiwic3BsaWNlIiwidW5zdWJzY3JpYmUiLCJyZXNldEVtaXR0ZXIiLCJyZXNldE9uIiwiYXJyYXkiLCJ2YWwiLCJpIiwic2NvcGVzIiwic2NvcGVTdGFjayIsIlNjb3BlIiwiZHJhZ2dhYmxlcyIsInRhcmdldHMiLCJmb3JFYWNoIiwic2NvcGUiLCJkcmFnZ2FibGUiLCJyZWxlYXNlRHJhZ2dhYmxlIiwidGFyZ2V0IiwicmVtb3ZlSXRlbSIsInRpbWVFbmQiLCJpbml0IiwiaW5pdERyYWdnYWJsZSIsImFkZERyYWdnYWJsZSIsImRyYWdFbmRBY3Rpb24iLCJvbkVuZCIsImFkZFRhcmdldCIsInNob3RUYXJnZXRzIiwiZmlsdGVyIiwiaW5kZXhPZiIsImNhdGNoRHJhZ2dhYmxlIiwic29ydCIsImEiLCJiIiwiZ2V0UmVjdGFuZ2xlIiwicGluUG9zaXRpb24iLCJpbml0aWFsUG9zaXRpb24iLCJyZXNldCIsInJlZnJlc2giLCJwb3NpdGlvbnMiLCJtYXAiLCJpbm5lckRyYWdnYWJsZXMiLCJtZXNzYWdlIiwidGFyZ2V0SW5kZXhlcyIsImRlZmF1bHRTY29wZSIsImN1cnJlbnRTY29wZSIsImNhbGwiLCJ0aHJvdHRsZSIsIndhaXQiLCJsYXN0VGltZSIsImV4ZWN1dGVkRnVuY3Rpb24iLCJjb250ZXh0Iiwibm93IiwiRGF0ZSIsImFwcGx5IiwiZGlzcGF0Y2hEb21FdmVudCIsImRldGFpbCIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsImJ1YmJsZXMiLCJ0aHJvdHRsZWREcmFnT3ZlciIsImNhbGxiYWNrIiwiZHVyYXRpb24iLCJ0aHJvdHRsZWRDYWxsYmFjayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJwYXNzaXZlRmFsc2UiLCJwYXNzaXZlIiwiaXNUb3VjaCIsIm5hdmlnYXRvciIsIm1heFRvdWNoUG9pbnRzIiwibW91c2VFdmVudHMiLCJzdGFydCIsIm1vdmUiLCJlbmQiLCJ0b3VjaEV2ZW50cyIsInRyYW5zZm9ybVByb3BlcnR5IiwidHJhbnNpdGlvblByb3BlcnR5IiwiZ2V0VG91Y2hCeUlEIiwidG91Y2hJZCIsImNoYW5nZWRUb3VjaGVzIiwiaWRlbnRpZmllciIsInByZXZlbnREb3VibGVJbml0Iiwic29tZSIsImV4aXN0aW5nIiwiY29weVN0eWxlcyIsInNvdXJjZSIsImRlc3RpbmF0aW9uIiwiY3MiLCJ3aW5kb3ciLCJnZXRDb21wdXRlZFN0eWxlIiwia2V5IiwiY2hpbGRyZW4iLCJEcmFnZ2FibGUiLCJfZW5hYmxlIiwic3RhcnRCb3VuZGluZyIsInN0YXJ0UG9zaXRpb25pbmciLCJzdGFydExpc3RlbmluZyIsImJvdW5kaW5nIiwiYm91bmQiLCJwb2ludCIsIl9zZXREZWZhdWx0VHJhbnNpdGlvbiIsImlzQ29uc2lkZXJUcmFuc2Zvcm1PZmZzZXQiLCJjb250YWluZXIiLCJwaW5uZWRQb3NpdGlvbiIsIl9kcmFnU3RhcnQiLCJkcmFnU3RhcnQiLCJfZHJhZ01vdmUiLCJkcmFnTW92ZSIsIl9kcmFnRW5kIiwiZHJhZ0VuZCIsIl9uYXRpdmVEcmFnU3RhcnQiLCJuYXRpdmVEcmFnU3RhcnQiLCJfbmF0aXZlRHJhZ092ZXIiLCJuYXRpdmVEcmFnT3ZlciIsImRyYWdPdmVyVGhyb3R0bGVEdXJhdGlvbiIsIl9uYXRpdmVEcmFnRW5kIiwibmF0aXZlRHJhZ0VuZCIsIl9uYXRpdmVEcm9wIiwibmF0aXZlRHJvcCIsIl9zY3JvbGwiLCJvblNjcm9sbCIsImhhbmRsZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiZ2V0U2l6ZSIsImdldFBvc2l0aW9uIiwiX3RyYW5zZm9ybVBvc2l0aW9uIiwiX3NldFRyYW5zaXRpb24iLCJ0aW1lIiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25Dc3MiLCJ0ZXN0IiwicmVwbGFjZSIsIl9zZXRUcmFuc2xhdGUiLCJ0cmFuc2xhdGVDc3MiLCJ0cmFuc2Zvcm0iLCJzaG91bGRSZW1vdmVaZXJvVHJhbnNsYXRlIiwiaXNTaWxlbnQiLCJlbWl0RHJhZ0V2ZW50Iiwic2lsZW50IiwicmVzZXRQb3NpdGlvblRvSW5pdGlhbCIsInJlZnJlc2hQb3NpdGlvbiIsInNldFBvc2l0aW9uIiwiZGV0ZXJtaW5lRGlyZWN0aW9uIiwiX3ByZXZpb3VzRGlyZWN0aW9uUG9zaXRpb24iLCJfc3RhcnRQb3NpdGlvbiIsImxlZnREaXJlY3Rpb24iLCJyaWdodERpcmVjdGlvbiIsInVwRGlyZWN0aW9uIiwiZG93bkRpcmVjdGlvbiIsInNlZW1zU2Nyb2xsaW5nIiwiX3N0YXJ0VG91Y2hUaW1lc3RhbXAiLCJ0b3VjaERyYWdnaW5nVGhyZXNob2xkIiwic2hvdWxkVXNlTmF0aXZlRHJhZ0FuZERyb3AiLCJpc1RvdWNoRXZlbnQiLCJuYXRpdmVEcmFnQW5kRHJvcCIsImVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcE9uVG91Y2giLCJzdG9wUHJvcGFnYXRpb25PbkRyYWdTdGFydCIsInN0b3BQcm9wYWdhdGlvbiIsIlRvdWNoRXZlbnQiLCJ0b3VjaFBvaW50IiwiX3N0YXJ0VG91Y2hQb2ludCIsInBhZ2VYIiwiY2xpZW50WCIsInBhZ2VZIiwiY2xpZW50WSIsIl90b3VjaElkIiwiX3N0YXJ0V2luZG93U2Nyb2xsUG9pbnQiLCJ3aW5kb3dTY3JvbGxQb2ludCIsIl9zdGFydFNjcm9sbEVsZW1lbnRzT2Zmc2V0Iiwic2Nyb2xsRWxlbWVudHNPZmZzZXQiLCJIVE1MSW5wdXRFbGVtZW50IiwiZm9jdXMiLCJfc3RhcnRQYXJlbnRzU2Nyb2xsT2Zmc2V0IiwicGFyZW50c1Njcm9sbE9mZnNldCIsImVtdWxhdGVPbkZpcnN0TW92ZSIsImNhbmNlbERyYWdnaW5nIiwiZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wIiwiY2FuY2VsRW11bGF0aW9uIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNjcm9sbEVsZW1lbnRzIiwiZHJhZ1N0YXJ0VGhyZXNob2xkIiwiX2RyYWdTdGFydFBlbmRpbmciLCJ0b3VjaCIsImR4IiwiZHkiLCJzcXJ0IiwiaXNEcmFnZ2luZyIsImNsYXNzTGlzdCIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJfZXZlbnQiLCJkYXRhVHJhbnNmZXIiLCJzZXREYXRhIiwiZWZmZWN0QWxsb3dlZCIsImRyb3BFZmZlY3QiLCJyZW1vdmVBdHRyaWJ1dGUiLCJjb250YWluZXJSZWN0IiwiY2xvbmVkRWxlbWVudCIsImNsb25lTm9kZSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImVtdWxhdGlvbkRyYWdnYWJsZSIsImRvbUV2ZW50cyIsImRyYWc6bW92ZSIsImNvbnRhaW5lclJlY3RQb2ludCIsImRyYWc6ZW5kIiwiZGVzdHJveSIsInJlbW92ZUNoaWxkIiwidHlwZSIsIl9jb250YWluZXIiLCJfaGFuZGxlciIsImNvbnNpZGVyVHJhbnNmb3JtT2Zmc2V0Iiwic2Nyb2xsWCIsInNjcm9sbFkiLCJzY3JvbGxSb290Q29udGFpbmVyIiwiX2NhY2hlZFNjcm9sbEVsZW1lbnRzIiwic2Nyb2xsTGVmdCIsInNjcm9sbFRvcCIsInBhcmVudHMiLCJfY2FjaGVkUGFyZW50cyIsImVuYWJsZSIsImRlYm91bmNlIiwiaW1tZWRpYXRlIiwidGltZW91dCIsImxhdGVyIiwiY2xlYXJUaW1lb3V0IiwiZ2V0RGlzdGFuY2UiLCJwMSIsInAyIiwiZ2V0WERpZmZlcmVuY2UiLCJhYnMiLCJnZXRZRGlmZmVyZW5jZSIsInRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3RvcnkiLCJwb3ciLCJpbmRleE9mTmVhcmVzdFBvaW50IiwiYXJyIiwicmFkaXVzIiwiZ2V0RGlzdGFuY2VGdW5jIiwidGVtcCIsIkxpc3QiLCJhc3NpZ24iLCJ0aW1lRXhjYW5nZSIsImNoYW5nZWREdXJpbmdJdGVyYXRpb24iLCJ1bnN1YnNjcmliZXMiLCJNYXAiLCJyZXNpemVPYnNlcnZlciIsIlJlc2l6ZU9ic2VydmVyIiwib25SZXNpemUiLCJiaW5kIiwib2JzZXJ2ZSIsInJlb3JkZXJPbkNoYW5nZSIsImxpc3RlblRvIiwib25Nb3ZlIiwiaGFzIiwic2V0IiwiZ2V0IiwidW5vYnNlcnZlIiwiZGVsZXRlIiwic3dhcHBpbmdEaXNhYmxlZCIsInNvcnRlZERyYWdnYWJsZXMiLCJnZXRTb3J0ZWREcmFnZ2FibGVzIiwicGlubmVkUG9zaXRpb25zIiwiY3VycmVudEluZGV4IiwidGFyZ2V0SW5kZXgiLCJkaXN0YW5jZUZ1bmMiLCJlbWl0TGlzdEV2ZW50IiwicmVvcmRlckVsZW1lbnRzIiwibW92ZWREcmFnZ2FibGUiLCJuZXh0IiwiaW5zZXJ0QmVmb3JlIiwiZCIsImxpc3QiLCJnZXRDdXJyZW50UGlubmVkUG9zaXRpb25zIiwic29ydGluZyIsImNvbmNhdCIsImluaXRpYWxQb3NpdGlvbnMiLCJqIiwiY2xlYXIiLCJkcmFnZ2FibGVBIiwiZHJhZ2dhYmxlQiIsIl9zd2FwcGluZ0Rpc2FibGVkIiwiZGlzYWJsZWQiLCJhcnJheU1vdmUiLCJmcm9tIiwidG8iLCJCdWJibGluZ0xpc3QiLCJhdXRvRGV0ZWN0R2FwIiwiX2dhcCIsImV4cGxpY2l0R2FwIiwic29ydGVkIiwiaXNDb25uZWN0ZWQiLCJjdXJyZW50IiwiYXV0b0RldGVjdFN0YXJ0UG9zaXRpb24iLCJzdGFydFBvc2l0aW9uIiwib25EcmFnU3RhcnQiLCJjYWNoZWRTb3J0ZWREcmFnZ2FibGVzIiwiaW5kZXhPZkFjdGl2ZURyYWdnYWJsZSIsInByZXZEcmFnZ2FibGUiLCJuZXh0RHJhZ2dhYmxlIiwiY3VycmVudFBvc2l0aW9uIiwiY3VycmVudE9yZGVyIiwiaXNNb3ZpbmdCYWNrd2FyZCIsInByZXZOZXdQb3NpdGlvbiIsIm5leHRQb3NpdGlvbiIsImNyb3NzQXhpcyIsImlzTW92aW5nRm9yd2FyZCIsImRyYWdnYWJsZU5ld1Bvc2l0aW9uIiwiYnViYmxpbmciLCJjdXJyZW50RHJhZ2dhYmxlIiwiaW5jbHVkZXMiLCJnYXAiLCJ2ZXJ0aWNhbEdhcCIsImdhcFZhbHVlIiwicmFuZ2UiLCJzdG9wIiwic3RlcCIsInJlc3VsdCIsImRpcmVjdENyb3NzaW5nIiwiTDFQMSIsIkwxUDIiLCJMMlAxIiwiTDJQMiIsImsxIiwiazIiLCJiMSIsImIyIiwiYm91bmRUb0xpbmUiLCJBIiwiQiIsIlAiLCJBUCIsIkFCIiwiYWIyIiwiYXBfYWIiLCJ0IiwiZ2V0UG9pbnRPbkxpbmVCeUxlbmdodCIsIkxQMSIsIkxQMiIsImxlbmdodCIsInBlcmNlbnQiLCJhZGRQb2ludFRvQm91bmRQb2ludHMiLCJib3VuZHBvaW50cyIsImlzUmlnaHQiLCJiUG9pbnQiLCJCYXNpY1N0cmF0ZWd5IiwiYm91bmRSZWN0IiwiTm90Q3Jvc3NpbmdTdHJhdGVneSIsInBvc2l0aW9uaW5nIiwicmVjdGFuZ2xlTGlzdCIsImluZGV4ZXNPZk5ld3MiLCJzdGF0aWNSZWN0YW5nbGVJbmRleGVzIiwiaW5kZXhlcyIsIl9yZWN0IiwicmVtb3ZhYmxlIiwiaW5kZXhPZlN0YXRpYyIsInN0YXRpY1JlY3QiLCJvZGxEcmFnZ2FibGVzTGlzdCIsIm5ld0RyYWdnYWJsZXMiLCJpbmRleE9mTmV3cyIsIkZsb2F0TGVmdFN0cmF0ZWd5IiwicGFkZGluZ1RvcExlZnQiLCJwYWRkaW5nQm90dG9tUmlnaHQiLCJ5R2FwQmV0d2VlbkRyYWdnYWJsZXMiLCJfaW5kZXhlc09mTmV3cyIsInJlY3RQMiIsImJvdW5kYXJ5UG9pbnRzIiwicmVjdEluZGV4IiwiaXNWYWxpZCIsIm5ld0xpc3QiLCJsaXN0T2xkUG9zaXRpb24iLCJuZXdEcmFnZ2FibGUiLCJGbG9hdFJpZ2h0U3RyYXRlZ3kiLCJwYWRkaW5nVG9wUmlnaHQiLCJwYWRkaW5nQm90dG9tTGVmdCIsInBhZGRpbmdCb3R0b21OZWdMZWZ0IiwiZ2V0QW5nbGVEaWZmIiwiYWxwaGEiLCJiZXRhIiwibWluQW5nbGUiLCJtYXhBbmdsZSIsIlBJIiwiZ2V0QW5nbGUiLCJkaWZmIiwibm9ybWFsaXplQW5nbGUiLCJhdGFuMiIsImJvdW5kQW5nbGUiLCJkbWluIiwiZG1heCIsImdldFBvaW50RnJvbVJhZGlhbFN5c3RlbSIsImFuZ2xlIiwiY2VudGVyIiwiY29zIiwic2luIiwiQm91bmQiLCJfc2l6ZSIsImluc3RhbmNlIiwiQm91bmRUb1JlY3RhbmdsZSIsImNhbGNQb2ludCIsIkJvdW5kVG9FbGVtZW50IiwiQm91bmRUb0xpbmVYIiwic3RhcnRZIiwiZW5kWSIsIkJvdW5kVG9MaW5lWSIsInN0YXJ0WCIsImVuZFgiLCJCb3VuZFRvTGluZSIsInN0YXJ0UG9pbnQiLCJlbmRQb2ludCIsInNvbWVLIiwiY29zQmV0YSIsInNpbkJldGEiLCJwb2ludDIiLCJuZXdFbmRQb2ludCIsInBvaW50Q3Jvc3NpbmciLCJCb3VuZFRvQ2lyY2xlIiwiQm91bmRUb0FyYyIsInN0YXJ0QW5nbGUiLCJlbmRBbmdsZSIsIl9zdGFydEFuZ2xlIiwiX2VuZEFuZ2xlIiwiVGFyZ2V0IiwicG9zaXRpb25pbmdTdHJhdGVneSIsInN0cmF0ZWd5Iiwid2F0Y2hEcmFnZ2FibGUiLCJpbmRleGVzT2ZOZXciLCJvbGREcmFnZ2FibGVzIiwicmVjdGFuZ2xlcyIsImVtaXRUYXJnZXRFdmVudCIsInRhcmdldFJlY3RhbmdsZSIsImRyYWdnYWJsZVNxdWFyZSIsIm5ld0RyYWdnYWJsZXNJbmRleCIsInB1c2hJbm5lckRyYWdnYWJsZSIsImRvbVR5cGUiLCJsZXR0ZXIiLCJ0b0xvd2VyQ2FzZSJdLCJtYXBwaW5ncyI6Ijs7O0VBQWUsU0FBU0EsZUFBZUEsQ0FBQ0MsWUFBWSxFQUFFQyxXQUFXLEVBQUU7SUFDbEUsTUFBTUMsS0FBSyxHQUFHLEVBQUU7SUFDZixJQUFJQyxPQUFPLEdBQUdILFlBQVk7RUFFMUIsRUFBQSxPQUFNRyxPQUFPLENBQUNDLFVBQVUsSUFBSUQsT0FBTyxLQUFLRixXQUFXLEVBQUU7RUFDbkRDLElBQUFBLEtBQUssQ0FBQ0csT0FBTyxDQUFDRixPQUFPLENB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
