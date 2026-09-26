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

    // Deprecated alias for `off`
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
      this.dragEndActionReleases = new Map();
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
      this.dragEndActionReleases.set(draggable, draggable.overrideDragEndAction(() => this.onEnd(draggable)));
    }
    releaseDraggable(draggable) {
      const release = this.dragEndActionReleases.get(draggable);
      if (release) {
        release();
        this.dragEndActionReleases.delete(draggable);
      }
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
      this.emit('scope:change', draggable);
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
      this._dragEndActions = [];
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
      this.emit(`drag:${type}`, this);
      if (this.domEvents) {
        dispatchDomEvent(this.element, `dragee:${type}`, {
          draggable: this
        });
      }
    }
    overrideDragEndAction(action) {
      this._dragEndActions.push(action);
      return () => removeItem(this._dragEndActions, action);
    }
    dragEndAction() {
      const action = this._dragEndActions[this._dragEndActions.length - 1];
      if (action) {
        action();
      } else {
        this.pinPosition(this.position);
      }
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
      this.subscriptions = new Map();
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
      this.trackRelease(draggable, draggable.overrideDragEndAction(() => {
        draggable.pinPosition(draggable.pinnedPosition, this.options.timeEnd);
        this.onEnd(draggable);
      }));
      this.resizeObserver.observe(draggable.element);
    }
    listenTo(draggable, eventName, handler) {
      this.trackRelease(draggable, draggable.on(eventName, handler));
    }
    trackRelease(draggable, release) {
      if (!this.subscriptions.has(draggable)) {
        this.subscriptions.set(draggable, []);
      }
      this.subscriptions.get(draggable).push(release);
    }
    releaseDraggable(draggable) {
      this.resizeObserver.unobserve(draggable.element);
      const releases = this.subscriptions.get(draggable) || [];
      releases.forEach(release => release());
      this.subscriptions.delete(draggable);
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
      this.emit(`list:${type}`, draggable);
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

    // Deprecated alias for `gap`
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
      const target = this;
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
      this.removeOnMoveSubscriptions = new Map();
      draggables.forEach(draggable => draggable.targets.push(target));
      this.draggables = draggables;
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
        this.addRemoveOnMove(draggable);
      }
      return true;
    }
    setPosition(rectangles, indexesOfNew, time) {
      this.innerDraggables.slice(0).forEach((draggable, i) => {
        const rect = rectangles[i],
          timeEnd = time || time === 0 ? time : indexesOfNew.indexOf(i) !== -1 ? this.options.timeEnd : this.options.timeExcange;
        if (rect.removable) {
          draggable.move(draggable.initialPosition, timeEnd, true, true);
          this.stopRemoveOnMove(draggable);
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
      this.pushInnerDraggable(draggable);
      const rectangles = this.positioning(this.innerDraggables.map(draggable => {
        return draggable.getRectangle();
      }), newDraggablesIndex, draggable);
      this.setPosition(rectangles, [newDraggablesIndex], time || 0);
      if (this.innerDraggables.indexOf(draggable) !== -1) {
        this.addRemoveOnMove(draggable);
      }
    }
    pushInnerDraggable(draggable) {
      if (this.innerDraggables.indexOf(draggable) === -1) {
        this.innerDraggables.push(draggable);
      }
    }
    addRemoveOnMove(draggable) {
      this.stopRemoveOnMove(draggable);
      this.removeOnMoveSubscriptions.set(draggable, draggable.on('drag:move', () => this.remove(draggable)));
      this.emitTargetEvent('add', draggable);
    }
    stopRemoveOnMove(draggable) {
      const unsubscribe = this.removeOnMoveSubscriptions.get(draggable);
      if (unsubscribe) {
        unsubscribe();
        this.removeOnMoveSubscriptions.delete(draggable);
      }
    }
    remove(draggable) {
      this.stopRemoveOnMove(draggable);
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
        this.stopRemoveOnMove(draggable);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZGV2LmpzIiwic291cmNlcyI6WyIuLi9zcmMvdXRpbHMvZ2V0LXBhcmVudHMtY2hhaW4uanMiLCIuLi9zcmMvZ2VvbWV0cnkvcG9pbnQuanMiLCIuLi9zcmMvZ2VvbWV0cnkvcmVjdGFuZ2xlLmpzIiwiLi4vc3JjL2V2ZW50RW1pdHRlci5qcyIsIi4uL3NyYy91dGlscy9yZW1vdmUtYXJyYXktaXRlbS5qcyIsIi4uL3NyYy9zY29wZS5qcyIsIi4uL3NyYy91dGlscy90aHJvdHRsZS5qcyIsIi4uL3NyYy91dGlscy9kaXNwYXRjaC1kb20tZXZlbnQuanMiLCIuLi9zcmMvZHJhZ2dhYmxlLmpzIiwiLi4vc3JjL3V0aWxzL2RlYm91bmNlLmpzIiwiLi4vc3JjL2dlb21ldHJ5L2Rpc3RhbmNlcy5qcyIsIi4uL3NyYy9saXN0LmpzIiwiLi4vc3JjL2J1YmJsaW5nTGlzdC5qcyIsIi4uL3NyYy91dGlscy9yYW5nZS5qcyIsIi4uL3NyYy9nZW9tZXRyeS9ib3VuZHMuanMiLCIuLi9zcmMvcG9zaXRpb25pbmcuanMiLCIuLi9zcmMvZ2VvbWV0cnkvYW5nbGVzLmpzIiwiLi4vc3JjL2JvdW5kaW5nLmpzIiwiLi4vc3JjL3RhcmdldC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRQYXJlbnRzQ2hhaW4oY2hpbGRFbGVtZW50LCByb290RWxlbWVudCkge1xuXHRjb25zdCBjaGFpbiA9IFtdXG4gIGxldCBlbGVtZW50ID0gY2hpbGRFbGVtZW50XG5cbiAgd2hpbGUoZWxlbWVudC5wYXJlbnROb2RlICYmIGVsZW1lbnQgIT09IHJvb3RFbGVtZW50KSB7XG4gICAgY2hhaW4udW5zaGlmdChlbGVtZW50LnBhcmVudE5vZGUpXG4gICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZVxuICB9XG5cbiAgcmV0dXJuIGNoYWluXG59XG4iLCJpbXBvcnQgZ2V0UGFyZW50c0NoYWluIGZyb20gJy4uL3V0aWxzL2dldC1wYXJlbnRzLWNoYWluJ1xuXG4vKiogQ2xhc3MgcmVwcmVzZW50aW5nIGEgcG9pbnQuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2ludCB7XG4gIC8qKlxuICAqIENyZWF0ZSBhIHBvaW50LlxuICAqIEBwYXJhbSB7bnVtYmVyfSB4IC0gVGhlIHggdmFsdWUuXG4gICogQHBhcmFtIHtudW1iZXJ9IHkgLSBUaGUgeSB2YWx1ZS5cbiAgKi9cbiAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgIHRoaXMueCA9IHhcbiAgICB0aGlzLnkgPSB5XG4gIH1cblxuICBhZGQocCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54ICsgcC54LCB0aGlzLnkgKyBwLnkpXG4gIH1cblxuICBzdWIocCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54IC0gcC54LCB0aGlzLnkgLSBwLnkpXG4gIH1cblxuICBtdWx0KGspIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCAqIGssIHRoaXMueSAqIGspXG4gIH1cblxuICBuZWdhdGl2ZSgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KC10aGlzLngsIC10aGlzLnkpXG4gIH1cblxuICBjb21wYXJlKHApIHtcbiAgICByZXR1cm4gKHRoaXMueCA9PT0gcC54ICYmIHRoaXMueSA9PT0gcC55KVxuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLngsIHRoaXMueSlcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiBge3g9JHt0aGlzLnh9LHk9JHt0aGlzLnl9fWBcbiAgfVxuXG4gIHN0YXRpYyBlbGVtZW50T2Zmc2V0KGVsZW1lbnQsIHBhcmVudCkge1xuICAgIHBhcmVudCA9IHBhcmVudCB8fCBlbGVtZW50LnBhcmVudE5vZGVcbiAgICBpZiAocGFyZW50ID09PSBlbGVtZW50KSB7XG4gICAgICByZXR1cm4gbmV3IFBvaW50KDAsIDApO1xuICAgIH0gZWxzZSBpZiAocGFyZW50ID09PSBlbGVtZW50Lm9mZnNldFBhcmVudCkge1xuICAgICAgcmV0dXJuIG5ldyBQb2ludChcbiAgICAgICAgZWxlbWVudC5vZmZzZXRMZWZ0ICsgcGFyZW50LmNsaWVudExlZnQsXG4gICAgICAgIGVsZW1lbnQub2Zmc2V0VG9wICsgcGFyZW50LmNsaWVudFRvcFxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjb25zaWRlck9mZnNldEVsZW1lbnRzID0gW2VsZW1lbnQsIGdldFBhcmVudHNDaGFpbihlbGVtZW50LCBwYXJlbnQpLnBvcCgpXVxuICAgICAgcmV0dXJuIG5ldyBQb2ludChcbiAgICAgICAgY29uc2lkZXJPZmZzZXRFbGVtZW50cy5yZWR1Y2UoKHN1bSwgcCkgPT4gc3VtICsgcC5vZmZzZXRMZWZ0LCAwKSArIHBhcmVudC5jbGllbnRMZWZ0LFxuICAgICAgICBjb25zaWRlck9mZnNldEVsZW1lbnRzLnJlZHVjZSgoc3VtLCBwKSA9PiBzdW0gKyBwLm9mZnNldFRvcCwgMCkgKyBwYXJlbnQuY2xpZW50VG9wXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGVsZW1lbnRCb3VuZGluZ09mZnNldChlbGVtZW50LCBwYXJlbnQpIHtcbiAgICBwYXJlbnQgPSBwYXJlbnQgfHwgZWxlbWVudC5wYXJlbnROb2RlXG4gICAgY29uc3QgZWxlbWVudFJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgY29uc3QgcGFyZW50UmVjdCA9IHBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIHJldHVybiBuZXcgUG9pbnQoXG4gICAgICBlbGVtZW50UmVjdC5sZWZ0IC0gcGFyZW50UmVjdC5sZWZ0LFxuICAgICAgZWxlbWVudFJlY3QudG9wIC0gcGFyZW50UmVjdC50b3BcbiAgICApXG4gIH1cblxuICBzdGF0aWMgZWxlbWVudFNpemUoZWxlbWVudCkge1xuICAgIGNvbnN0IGVsZW1lbnRSZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIHJldHVybiBuZXcgUG9pbnQoXG4gICAgICBlbGVtZW50UmVjdC53aWR0aCxcbiAgICAgIGVsZW1lbnRSZWN0LmhlaWdodFxuICAgIClcbiAgfVxufVxuIiwiaW1wb3J0IFBvaW50IGZyb20gJy4vcG9pbnQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY3RhbmdsZSB7XG4gIGNvbnN0cnVjdG9yKHBvc2l0aW9uLCBzaXplKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgdGhpcy5zaXplID0gc2l6ZVxuICB9XG5cbiAgZ2V0UDEoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25cbiAgfVxuXG4gIGdldFAyKCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHRoaXMucG9zaXRpb24ueSlcbiAgfVxuXG4gIGdldFAzKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLnNpemUpXG4gIH1cblxuICBnZXRQNCgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnkpXG4gIH1cblxuICBnZXRDZW50ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb24uYWRkKHRoaXMuc2l6ZS5tdWx0KDAuNSkpXG4gIH1cblxuICBvcihyZWN0KSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBuZXcgUG9pbnQoTWF0aC5taW4odGhpcy5wb3NpdGlvbi54LCByZWN0LnBvc2l0aW9uLngpLCBNYXRoLm1pbih0aGlzLnBvc2l0aW9uLnksIHJlY3QucG9zaXRpb24ueSkpXG4gICAgY29uc3Qgc2l6ZSA9IChuZXcgUG9pbnQoTWF0aC5tYXgodGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHJlY3QucG9zaXRpb24ueCArIHJlY3Quc2l6ZS54KSwgTWF0aC5tYXgodGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnksIHJlY3QucG9zaXRpb24ueSArIHJlY3Quc2l6ZS55KSkpLnN1Yihwb3NpdGlvbilcbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZShwb3NpdGlvbiwgc2l6ZSlcbiAgfVxuXG4gIGFuZChyZWN0KSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBuZXcgUG9pbnQoTWF0aC5tYXgodGhpcy5wb3NpdGlvbi54LCByZWN0LnBvc2l0aW9uLngpLCBNYXRoLm1heCh0aGlzLnBvc2l0aW9uLnksIHJlY3QucG9zaXRpb24ueSkpXG4gICAgY29uc3Qgc2l6ZSA9IChuZXcgUG9pbnQoTWF0aC5taW4odGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHJlY3QucG9zaXRpb24ueCArIHJlY3Quc2l6ZS54KSwgTWF0aC5taW4odGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnksIHJlY3QucG9zaXRpb24ueSArIHJlY3Quc2l6ZS55KSkpLnN1Yihwb3NpdGlvbilcbiAgICBpZiAoc2l6ZS54IDw9IDAgfHwgc2l6ZS55IDw9IDApIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHBvc2l0aW9uLCBzaXplKVxuICB9XG5cbiAgaW5jbHVkZVBvaW50KHApIHtcbiAgICByZXR1cm4gISh0aGlzLnBvc2l0aW9uLnggPiBwLnggfHwgdGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLnggPCBwLnggfHwgdGhpcy5wb3NpdGlvbi55ID4gcC55IHx8IHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55IDwgcC55KVxuICB9XG5cbiAgaW5jbHVkZVJlY3RhbmdsZShyZWN0YW5nbGUpIHtcbiAgICByZXR1cm4gdGhpcy5pbmNsdWRlUG9pbnQocmVjdGFuZ2xlLnBvc2l0aW9uKSAmJiB0aGlzLmluY2x1ZGVQb2ludChyZWN0YW5nbGUuZ2V0UDMoKSlcbiAgfVxuXG4gIG1vdmVUb0JvdW5kKHJlY3QsIGF4aXMpIHtcbiAgICBsZXQgc2VsQXhpcywgY3Jvc3NSZWN0YW5nbGVcbiAgICBpZiAoYXhpcykge1xuICAgICAgc2VsQXhpcyA9IGF4aXNcbiAgICB9IGVsc2Uge1xuICAgICAgY3Jvc3NSZWN0YW5nbGUgPSB0aGlzLmFuZChyZWN0KVxuICAgICAgaWYgKCFjcm9zc1JlY3RhbmdsZSkge1xuICAgICAgICByZXR1cm4gcmVjdFxuICAgICAgfVxuICAgICAgc2VsQXhpcyA9IGNyb3NzUmVjdGFuZ2xlLnNpemUueCA+IGNyb3NzUmVjdGFuZ2xlLnNpemUueSA/ICd5JyA6ICd4J1xuICAgIH1cbiAgICBjb25zdCB0aGlzQ2VudGVyID0gdGhpcy5nZXRDZW50ZXIoKVxuICAgIGNvbnN0IHJlY3RDZW50ZXIgPSByZWN0LmdldENlbnRlcigpXG4gICAgY29uc3Qgc2lnbiA9IHRoaXNDZW50ZXJbc2VsQXhpc10gPiByZWN0Q2VudGVyW3NlbEF4aXNdID8gLTEgOiAxXG4gICAgY29uc3Qgb2Zmc2V0ID0gc2lnbiA+IDAgPyB0aGlzLnBvc2l0aW9uW3NlbEF4aXNdICsgdGhpcy5zaXplW3NlbEF4aXNdIC0gcmVjdC5wb3NpdGlvbltzZWxBeGlzXSA6IHRoaXMucG9zaXRpb25bc2VsQXhpc10gLSAocmVjdC5wb3NpdGlvbltzZWxBeGlzXSArIHJlY3Quc2l6ZVtzZWxBeGlzXSlcbiAgICByZWN0LnBvc2l0aW9uW3NlbEF4aXNdID0gcmVjdC5wb3NpdGlvbltzZWxBeGlzXSArIG9mZnNldFxuICAgIHJldHVybiByZWN0XG4gIH1cblxuICBnZXRTcXVhcmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZS54ICogdGhpcy5zaXplLnlcbiAgfVxuXG4gIHN0eWxlQXBwbHkoZWwpIHtcbiAgICBlbCA9IGVsIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2luZCcpXG4gICAgZWwuc3R5bGUubGVmdCA9IHRoaXMucG9zaXRpb24ueCArICdweCdcbiAgICBlbC5zdHlsZS50b3AgPSB0aGlzLnBvc2l0aW9uLnkgKyAncHgnXG4gICAgZWwuc3R5bGUud2lkdGggPSB0aGlzLnNpemUueCArICdweCdcbiAgICBlbC5zdHlsZS5oZWlnaHQgPSB0aGlzLnNpemUueSArICdweCdcbiAgfVxuXG4gIGdyb3d0aChzaXplKSB7XG4gICAgdGhpcy5zaXplID0gdGhpcy5zaXplLmFkZChzaXplKVxuICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uLmFkZChzaXplLm11bHQoLTAuNSkpXG4gIH1cblxuICBnZXRNaW5TaWRlKCkge1xuICAgIHJldHVybiBNYXRoLm1pbih0aGlzLnNpemUueCwgdGhpcy5zaXplLnkpXG4gIH1cblxuICBzdGF0aWMgZnJvbUVsZW1lbnQoZWxlbWVudCwgcGFyZW50PWVsZW1lbnQucGFyZW50Tm9kZSwgaXNDb25zaWRlclRyYW5zbGF0ZT1mYWxzZSkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gaXNDb25zaWRlclRyYW5zbGF0ZVxuICAgICAgPyBQb2ludC5lbGVtZW50Qm91bmRpbmdPZmZzZXQoZWxlbWVudCwgcGFyZW50KVxuICAgICAgOiBQb2ludC5lbGVtZW50T2Zmc2V0KGVsZW1lbnQsIHBhcmVudClcbiAgICBjb25zdCBzaXplID0gUG9pbnQuZWxlbWVudFNpemUoZWxlbWVudClcbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZShwb3NpdGlvbiwgc2l6ZSlcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKG9wdGlvbnMgPSB7fSkge1xuICAgIHRoaXMuZXZlbnRzID0ge31cblxuICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMub24pIHtcbiAgICAgIGZvciAoY29uc3QgW2V2ZW50TmFtZSwgZm5dIG9mIE9iamVjdC5lbnRyaWVzKG9wdGlvbnMub24pKSB7XG4gICAgICAgIHRoaXMub24oZXZlbnROYW1lLCBmbilcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBlbWl0KGV2ZW50TmFtZSwgLi4uYXJncykge1xuICAgIHRoaXMuaW50ZXJydXB0ZWQgPSBmYWxzZVxuXG4gICAgaWYgKCF0aGlzLmV2ZW50c1tldmVudE5hbWVdKSByZXR1cm5cblxuICAgIC8vIEl0ZXJhdGUgb3ZlciBhIGNvcHkgc28gbGlzdGVuZXJzIGNhbiB1bnN1YnNjcmliZSB3aGlsZSB0aGUgZXZlbnQgaXMgYmVpbmcgZW1pdHRlZFxuICAgIGZvciAoY29uc3QgZnVuYyBvZiB0aGlzLmV2ZW50c1tldmVudE5hbWVdLnNsaWNlKCkpIHtcbiAgICAgIGZ1bmMoLi4uYXJncylcbiAgICAgIGlmICh0aGlzLmludGVycnVwdGVkKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGludGVycnVwdCgpIHtcbiAgICB0aGlzLmludGVycnVwdGVkID0gdHJ1ZVxuICB9XG5cbiAgb24oZXZlbnROYW1lLCBmbikge1xuICAgIHRoaXMubGlzdGVuZXJzKGV2ZW50TmFtZSkucHVzaChmbilcbiAgICByZXR1cm4gKCkgPT4gdGhpcy5vZmYoZXZlbnROYW1lLCBmbilcbiAgfVxuXG4gIHByZXBlbmRPbihldmVudE5hbWUsIGZuKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMoZXZlbnROYW1lKS51bnNoaWZ0KGZuKVxuICAgIHJldHVybiAoKSA9PiB0aGlzLm9mZihldmVudE5hbWUsIGZuKVxuICB9XG5cbiAgb25jZShldmVudE5hbWUsIGZuKSB7XG4gICAgY29uc3Qgd3JhcHBlciA9ICguLi5hcmdzKSA9PiB7XG4gICAgICB0aGlzLm9mZihldmVudE5hbWUsIHdyYXBwZXIpXG4gICAgICBmbiguLi5hcmdzKVxuICAgIH1cbiAgICB3cmFwcGVyLmxpc3RlbmVyID0gZm5cbiAgICByZXR1cm4gdGhpcy5vbihldmVudE5hbWUsIHdyYXBwZXIpXG4gIH1cblxuICBvZmYoZXZlbnROYW1lLCBmbikge1xuICAgIGlmICghdGhpcy5ldmVudHNbZXZlbnROYW1lXSkgcmV0dXJuXG5cbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0uZmluZEluZGV4KChsaXN0ZW5lcikgPT4gbGlzdGVuZXIgPT09IGZuIHx8IGxpc3RlbmVyLmxpc3RlbmVyID09PSBmbilcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLnNwbGljZShpbmRleCwgMSlcbiAgICB9XG4gIH1cblxuICAvLyBEZXByZWNhdGVkIGFsaWFzIGZvciBgb2ZmYFxuICB1bnN1YnNjcmliZShldmVudE5hbWUsIGZuKSB7XG4gICAgdGhpcy5vZmYoZXZlbnROYW1lLCBmbilcbiAgfVxuXG4gIGxpc3RlbmVycyhldmVudE5hbWUpIHtcbiAgICByZXR1cm4gKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gfHw9IFtdKVxuICB9XG5cbiAgcmVzZXRFbWl0dGVyICgpIHtcbiAgICB0aGlzLmV2ZW50cyA9IHt9XG4gIH1cblxuICByZXNldE9uKGV2ZW50TmFtZSkge1xuICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSBbXVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhcnJheSwgdmFsKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoYXJyYXlbaV0gPT09IHZhbCkge1xuICAgICAgYXJyYXkuc3BsaWNlKGksIDEpXG4gICAgICBpLS1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycmF5XG59XG4iLCJpbXBvcnQgcmVtb3ZlSXRlbSBmcm9tICcuL3V0aWxzL3JlbW92ZS1hcnJheS1pdGVtJ1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50RW1pdHRlcidcblxuY29uc3Qgc2NvcGVzID0gW11cbmNvbnN0IHNjb3BlU3RhY2sgPSBbXVxuXG5jbGFzcyBTY29wZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKGRyYWdnYWJsZXMsIHRhcmdldHMsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcihvcHRpb25zKVxuICAgIHNjb3Blcy5mb3JFYWNoKChzY29wZSkgPT4ge1xuICAgICAgaWYgKGRyYWdnYWJsZXMpIHtcbiAgICAgICAgZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHNjb3BlLnJlbGVhc2VEcmFnZ2FibGUoZHJhZ2dhYmxlKSlcbiAgICAgIH1cblxuICAgICAgaWYgKHRhcmdldHMpIHtcbiAgICAgICAgdGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHtcbiAgICAgICAgICByZW1vdmVJdGVtKHNjb3BlLnRhcmdldHMsIHRhcmdldClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gZHJhZ2dhYmxlcyB8fCBbXVxuICAgIHRoaXMudGFyZ2V0cyA9IHRhcmdldHMgfHwgW11cbiAgICB0aGlzLmRyYWdFbmRBY3Rpb25SZWxlYXNlcyA9IG5ldyBNYXAoKVxuICAgIHNjb3Blcy5wdXNoKHRoaXMpXG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgdGltZUVuZDogKG9wdGlvbnMudGltZUVuZCkgfHwgNDAwXG4gICAgfVxuXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gdGhpcy5pbml0RHJhZ2dhYmxlKGRyYWdnYWJsZSkpXG4gIH1cblxuICBhZGREcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxuICAgIHRoaXMuaW5pdERyYWdnYWJsZShkcmFnZ2FibGUpXG4gIH1cblxuICBpbml0RHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIHRoaXMuZHJhZ0VuZEFjdGlvblJlbGVhc2VzLnNldChkcmFnZ2FibGUsIGRyYWdnYWJsZS5vdmVycmlkZURyYWdFbmRBY3Rpb24oKCkgPT4gdGhpcy5vbkVuZChkcmFnZ2FibGUpKSlcbiAgfVxuXG4gIHJlbGVhc2VEcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgY29uc3QgcmVsZWFzZSA9IHRoaXMuZHJhZ0VuZEFjdGlvblJlbGVhc2VzLmdldChkcmFnZ2FibGUpXG4gICAgaWYgKHJlbGVhc2UpIHtcbiAgICAgIHJlbGVhc2UoKVxuICAgICAgdGhpcy5kcmFnRW5kQWN0aW9uUmVsZWFzZXMuZGVsZXRlKGRyYWdnYWJsZSlcbiAgICB9XG4gICAgcmVtb3ZlSXRlbSh0aGlzLmRyYWdnYWJsZXMsIGRyYWdnYWJsZSlcbiAgfVxuXG4gIGFkZFRhcmdldCh0YXJnZXQpIHtcbiAgICB0aGlzLnRhcmdldHMucHVzaCh0YXJnZXQpXG4gIH1cblxuICBvbkVuZChkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBzaG90VGFyZ2V0cyA9IHRoaXMudGFyZ2V0cy5maWx0ZXIoKHRhcmdldCkgPT4ge1xuICAgICAgcmV0dXJuIHRhcmdldC5kcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTFcbiAgICB9KS5maWx0ZXIoKHRhcmdldCkgPT4ge1xuICAgICAgcmV0dXJuIHRhcmdldC5jYXRjaERyYWdnYWJsZShkcmFnZ2FibGUpXG4gICAgfSkuc29ydCgoYSwgYikgPT4ge1xuICAgICAgcmV0dXJuIGEuZ2V0UmVjdGFuZ2xlKCkuZ2V0U3F1YXJlKCkgLSBiLmdldFJlY3RhbmdsZSgpLmdldFNxdWFyZSgpXG4gICAgfSlcblxuICAgIGlmIChzaG90VGFyZ2V0cy5sZW5ndGgpIHtcbiAgICAgIHNob3RUYXJnZXRzWzBdLm9uRW5kKGRyYWdnYWJsZSlcbiAgICB9IGVsc2UgaWYgKGRyYWdnYWJsZS50YXJnZXRzLmxlbmd0aCkge1xuICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKGRyYWdnYWJsZS5pbml0aWFsUG9zaXRpb24sIHRoaXMub3B0aW9ucy50aW1lRW5kKVxuICAgIH1cblxuICAgIHRoaXMuZW1pdCgnc2NvcGU6Y2hhbmdlJywgZHJhZ2dhYmxlKVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy50YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4gdGFyZ2V0LnJlc2V0KCkpXG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5yZWZyZXNoKCkpXG4gICAgdGhpcy50YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4gdGFyZ2V0LnJlZnJlc2goKSlcbiAgfVxuXG4gIGdldCBwb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0cy5tYXAoKHRhcmdldCkgPT4ge1xuICAgICAgcmV0dXJuIHRhcmdldC5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHRoaXMuZHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkpXG4gICAgfSlcbiAgfVxuXG4gIHNldCBwb3NpdGlvbnMocG9zaXRpb25zKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9ICd3cm9uZyBhcnJheSBsZW5ndGgnXG4gICAgaWYgKHBvc2l0aW9ucy5sZW5ndGggPT09IHRoaXMudGFyZ2V0cy5sZW5ndGgpIHtcbiAgICAgIHRoaXMudGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHRhcmdldC5yZXNldCgpKVxuXG4gICAgICBwb3NpdGlvbnMuZm9yRWFjaCgodGFyZ2V0SW5kZXhlcywgaSkgPT4ge1xuICAgICAgICB0YXJnZXRJbmRleGVzLmZvckVhY2goKGluZGV4KSA9PiB7XG4gICAgICAgICAgdGhpcy50YXJnZXRzW2ldLmFkZCh0aGlzLmRyYWdnYWJsZXNbaW5kZXhdKVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbWVzc2FnZVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBkZWZhdWx0U2NvcGUgPSBuZXcgU2NvcGUoKVxuXG5mdW5jdGlvbiBjdXJyZW50U2NvcGUoKSB7XG4gIHJldHVybiBzY29wZVN0YWNrW3Njb3BlU3RhY2subGVuZ3RoIC0gMV0gfHwgZGVmYXVsdFNjb3BlXG59XG5cbmZ1bmN0aW9uIHNjb3BlKGZuKSB7XG4gIGNvbnN0IGN1cnJlbnRTY29wZSA9IG5ldyBTY29wZSgpXG5cbiAgc2NvcGVTdGFjay5wdXNoKGN1cnJlbnRTY29wZSlcbiAgdHJ5IHtcbiAgICBmbi5jYWxsKClcbiAgfSBmaW5hbGx5IHtcbiAgICBzY29wZVN0YWNrLnBvcCgpXG4gIH1cbiAgcmV0dXJuIGN1cnJlbnRTY29wZVxufVxuXG5leHBvcnQgeyBzY29wZXMsIGRlZmF1bHRTY29wZSwgY3VycmVudFNjb3BlLCBTY29wZSwgc2NvcGUgfVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGhyb3R0bGUoZnVuYywgd2FpdCkge1xuICBsZXQgbGFzdFRpbWUgPSAwXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGV4ZWN1dGVkRnVuY3Rpb24oKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXNcbiAgICBjb25zdCBhcmdzID0gYXJndW1lbnRzXG5cbiAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpXG4gICAgaWYgKG5vdyAtIGxhc3RUaW1lID49IHdhaXQpIHtcbiAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncylcbiAgICAgIGxhc3RUaW1lID0gbm93XG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwYXRjaERvbUV2ZW50KGVsZW1lbnQsIGV2ZW50TmFtZSwgZGV0YWlsKSB7XG4gIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoZXZlbnROYW1lLCB7IGJ1YmJsZXM6IHRydWUsIGRldGFpbCB9KSlcbn1cbiIsImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudEVtaXR0ZXInXG5pbXBvcnQgUG9pbnQgZnJvbSAnLi9nZW9tZXRyeS9wb2ludCdcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSAnLi9nZW9tZXRyeS9yZWN0YW5nbGUnXG5pbXBvcnQgeyBzY29wZXMsIGN1cnJlbnRTY29wZSB9IGZyb20gJy4vc2NvcGUnXG5pbXBvcnQgdGhyb3R0bGUgZnJvbSAnLi91dGlscy90aHJvdHRsZSdcbmltcG9ydCBnZXRQYXJlbnRzQ2hhaW4gZnJvbSAnLi91dGlscy9nZXQtcGFyZW50cy1jaGFpbidcbmltcG9ydCByZW1vdmVJdGVtIGZyb20gJy4vdXRpbHMvcmVtb3ZlLWFycmF5LWl0ZW0nXG5pbXBvcnQgZGlzcGF0Y2hEb21FdmVudCBmcm9tICcuL3V0aWxzL2Rpc3BhdGNoLWRvbS1ldmVudCdcblxuY29uc3QgdGhyb3R0bGVkRHJhZ092ZXIgPSAoY2FsbGJhY2ssIGR1cmF0aW9uKSA9PiB7XG4gIGNvbnN0IHRocm90dGxlZENhbGxiYWNrID0gdGhyb3R0bGUoKGV2ZW50KSA9PiBjYWxsYmFjayhldmVudCksIGR1cmF0aW9uKVxuICByZXR1cm4gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIHRocm90dGxlZENhbGxiYWNrKGV2ZW50KVxuICB9XG59XG5cbmNvbnN0IHBhc3NpdmVGYWxzZSA9IHsgcGFzc2l2ZTogZmFsc2UgfVxuXG5jb25zdCBpc1RvdWNoID0gbmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzID4gMFxuY29uc3QgbW91c2VFdmVudHMgPSB7XG4gIHN0YXJ0OiAnbW91c2Vkb3duJyxcbiAgbW92ZTogJ21vdXNlbW92ZScsXG4gIGVuZDogJ21vdXNldXAnXG59XG5jb25zdCB0b3VjaEV2ZW50cyA9IHtcbiAgc3RhcnQ6ICd0b3VjaHN0YXJ0JyxcbiAgbW92ZTogJ3RvdWNobW92ZScsXG4gIGVuZDogJ3RvdWNoZW5kJ1xufVxuY29uc3QgZHJhZ2dhYmxlcyA9IFtdXG5jb25zdCB0cmFuc2Zvcm1Qcm9wZXJ0eSA9ICd0cmFuc2Zvcm0nXG5jb25zdCB0cmFuc2l0aW9uUHJvcGVydHkgPSAndHJhbnNpdGlvbidcblxuZnVuY3Rpb24gZ2V0VG91Y2hCeUlEKGVsZW1lbnQsIHRvdWNoSWQpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50LmNoYW5nZWRUb3VjaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGVsZW1lbnQuY2hhbmdlZFRvdWNoZXNbaV0uaWRlbnRpZmllciA9PT0gdG91Y2hJZCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQuY2hhbmdlZFRvdWNoZXNbaV1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmZ1bmN0aW9uIHByZXZlbnREb3VibGVJbml0KGRyYWdnYWJsZSkge1xuICBjb25zdCBtZXNzYWdlID0gXCJmb3IgdGhpcyBlbGVtZW50IERyYWdlZS5EcmFnZ2FibGUgaXMgYWxyZWFkeSBleGlzdCwgZG9uJ3QgY3JlYXRlIGl0IHR3aWNlIFwiXG4gIGlmIChkcmFnZ2FibGVzLnNvbWUoKGV4aXN0aW5nKSA9PiBkcmFnZ2FibGUuZWxlbWVudCA9PT0gZXhpc3RpbmcuZWxlbWVudCkpIHtcbiAgICB0aHJvdyBtZXNzYWdlXG4gIH1cbiAgZHJhZ2dhYmxlcy5wdXNoKGRyYWdnYWJsZSlcbn1cblxuZnVuY3Rpb24gY29weVN0eWxlcyhzb3VyY2UsIGRlc3RpbmF0aW9uKSB7XG4gIGNvbnN0IGNzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoc291cmNlKVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY3MubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBrZXkgPSBjc1tpXVxuICAgIGlmICgoa2V5LmluZGV4T2YoJ3RyYW5zaXRpb24nKSA8IDApICYmIChrZXkuaW5kZXhPZigndHJhbnNmb3JtJykgPCAwKSkge1xuICAgICAgZGVzdGluYXRpb24uc3R5bGVba2V5XSA9IGNzW2tleV1cbiAgICB9XG4gIH1cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNvdXJjZS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgIGNvcHlTdHlsZXMoc291cmNlLmNoaWxkcmVuW2ldLCBkZXN0aW5hdGlvbi5jaGlsZHJlbltpXSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcmFnZ2FibGUgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBvcHRpb25zPXt9KSB7XG4gICAgc3VwZXIob3B0aW9ucylcbiAgICB0aGlzLnRhcmdldHMgPSBbXVxuICAgIHRoaXMuX2RyYWdFbmRBY3Rpb25zID0gW11cbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIHByZXZlbnREb3VibGVJbml0KHRoaXMpXG4gICAgY3VycmVudFNjb3BlKCkuYWRkRHJhZ2dhYmxlKHRoaXMpXG4gICAgdGhpcy5fZW5hYmxlID0gdHJ1ZVxuICAgIHRoaXMuc3RhcnRCb3VuZGluZygpXG4gICAgdGhpcy5zdGFydFBvc2l0aW9uaW5nKClcbiAgICB0aGlzLnN0YXJ0TGlzdGVuaW5nKClcbiAgfVxuXG4gIHN0YXJ0Qm91bmRpbmcoKSB7XG4gICAgdGhpcy5ib3VuZGluZyA9IHRoaXMub3B0aW9ucy5ib3VuZGluZyB8fCB7XG4gICAgICBib3VuZDogdGhpcy5vcHRpb25zLmJvdW5kIHx8ICgocG9pbnQpID0+IHBvaW50KVxuICAgIH1cbiAgfVxuXG4gIHN0YXJ0UG9zaXRpb25pbmcoKSB7XG4gICAgdGhpcy5fc2V0RGVmYXVsdFRyYW5zaXRpb24oKVxuICAgIHRoaXMub2Zmc2V0ID0gdGhpcy5pc0NvbnNpZGVyVHJhbnNmb3JtT2Zmc2V0XG4gICAgICA/IFBvaW50LmVsZW1lbnRCb3VuZGluZ09mZnNldCh0aGlzLmVsZW1lbnQsIHRoaXMuY29udGFpbmVyKVxuICAgICAgOiBQb2ludC5lbGVtZW50T2Zmc2V0KHRoaXMuZWxlbWVudCwgdGhpcy5jb250YWluZXIpXG4gICAgdGhpcy5waW5uZWRQb3NpdGlvbiA9IHRoaXMub2Zmc2V0XG4gICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMub2Zmc2V0XG4gICAgdGhpcy5pbml0aWFsUG9zaXRpb24gPSB0aGlzLm9wdGlvbnMucG9zaXRpb24gfHwgdGhpcy5vZmZzZXRcblxuICAgIHRoaXMucGluUG9zaXRpb24odGhpcy5pbml0aWFsUG9zaXRpb24pXG5cbiAgICBpZiAodGhpcy5ib3VuZGluZy5yZWZyZXNoKSB7XG4gICAgICB0aGlzLmJvdW5kaW5nLnJlZnJlc2goKVxuICAgIH1cbiAgfVxuXG4gIHN0YXJ0TGlzdGVuaW5nKCkge1xuICAgIHRoaXMuX2RyYWdTdGFydCA9IChldmVudCkgPT4gdGhpcy5kcmFnU3RhcnQoZXZlbnQpXG4gICAgdGhpcy5fZHJhZ01vdmUgPSAoZXZlbnQpID0+IHRoaXMuZHJhZ01vdmUoZXZlbnQpXG4gICAgdGhpcy5fZHJhZ0VuZCA9IChldmVudCkgPT4gdGhpcy5kcmFnRW5kKGV2ZW50KVxuICAgIHRoaXMuX25hdGl2ZURyYWdTdGFydCA9IChldmVudCkgPT4gdGhpcy5uYXRpdmVEcmFnU3RhcnQoZXZlbnQpXG4gICAgdGhpcy5fbmF0aXZlRHJhZ092ZXIgPSB0aHJvdHRsZWREcmFnT3ZlcigoZXZlbnQpID0+IHRoaXMubmF0aXZlRHJhZ092ZXIoZXZlbnQpLCB0aGlzLmRyYWdPdmVyVGhyb3R0bGVEdXJhdGlvbilcbiAgICB0aGlzLl9uYXRpdmVEcmFnRW5kID0gKGV2ZW50KSA9PiB0aGlzLm5hdGl2ZURyYWdFbmQoZXZlbnQpXG4gICAgdGhpcy5fbmF0aXZlRHJvcCA9IChldmVudCkgPT4gdGhpcy5uYXRpdmVEcm9wKGV2ZW50KVxuICAgIHRoaXMuX3Njcm9sbCA9IChldmVudCkgPT4gdGhpcy5vblNjcm9sbChldmVudClcblxuICAgIHRoaXMuaGFuZGxlci5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQsIHBhc3NpdmVGYWxzZSlcbiAgICB0aGlzLmhhbmRsZXIuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0LCBwYXNzaXZlRmFsc2UpXG4gIH1cblxuICBnZXRTaXplKCkge1xuICAgIHJldHVybiBQb2ludC5lbGVtZW50U2l6ZSh0aGlzLmVsZW1lbnQpXG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5vZmZzZXQuYWRkKHRoaXMuX3RyYW5zZm9ybVBvc2l0aW9uIHx8IG5ldyBQb2ludCgwLCAwKSlcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvblxuICB9XG5cbiAgZ2V0Q2VudGVyKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLmdldFNpemUoKS5tdWx0KDAuNSkpXG4gIH1cblxuICBfc2V0RGVmYXVsdFRyYW5zaXRpb24gKCkge1xuICAgIGlmICghdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV0pIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5lbGVtZW50KVt0cmFuc2l0aW9uUHJvcGVydHldXG4gICAgfVxuICB9XG5cbiAgX3NldFRyYW5zaXRpb24odGltZSkge1xuICAgIGxldCB0cmFuc2l0aW9uID0gdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV1cbiAgICBjb25zdCB0cmFuc2l0aW9uQ3NzID0gYHRyYW5zZm9ybSAke3RpbWV9bXNgXG5cbiAgICBpZiAoIS90cmFuc2Zvcm1cXHM/XFxkKm0/cz8vLnRlc3QodHJhbnNpdGlvbikpIHtcbiAgICAgIGlmICh0cmFuc2l0aW9uKSB7XG4gICAgICAgIHRyYW5zaXRpb24gKz0gYCwgJHt0cmFuc2l0aW9uQ3NzfWBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyYW5zaXRpb24gPSB0cmFuc2l0aW9uQ3NzXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyYW5zaXRpb24gPSB0cmFuc2l0aW9uLnJlcGxhY2UoL3RyYW5zZm9ybVxccz9cXGQqbT9zPy9nLCB0cmFuc2l0aW9uQ3NzKVxuICAgIH1cblxuICAgIGlmICh0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNpdGlvblByb3BlcnR5XSAhPT0gdHJhbnNpdGlvbikge1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV0gPSB0cmFuc2l0aW9uXG4gICAgfVxuICB9XG5cbiAgX3NldFRyYW5zbGF0ZShwb2ludCkge1xuICAgIHRoaXMuX3RyYW5zZm9ybVBvc2l0aW9uID0gcG9pbnRcbiAgICBjb25zdCB0cmFuc2xhdGVDc3MgPSBgdHJhbnNsYXRlM2QoJHtwb2ludC54fXB4LCAke3BvaW50Lnl9cHgsIDBweClgXG5cbiAgICBsZXQgdHJhbnNmb3JtID0gdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BlcnR5XVxuXG4gICAgaWYgKHRoaXMuc2hvdWxkUmVtb3ZlWmVyb1RyYW5zbGF0ZSAmJiBwb2ludC54ID09PSAwICYmIHBvaW50LnkgPT09IDApIHtcbiAgICAgIHRyYW5zZm9ybSA9IHRyYW5zZm9ybS5yZXBsYWNlKC90cmFuc2xhdGUzZFxcKFteKV0rXFwpLywgJycpXG4gICAgfSBlbHNlIGlmICghL3RyYW5zbGF0ZTNkXFwoW14pXStcXCkvLnRlc3QodHJhbnNmb3JtKSkge1xuICAgICAgaWYgKHRyYW5zZm9ybSkge1xuICAgICAgICB0cmFuc2Zvcm0gKz0gJyAnXG4gICAgICB9XG4gICAgICB0cmFuc2Zvcm0gKz0gdHJhbnNsYXRlQ3NzXG4gICAgfSBlbHNlIHtcbiAgICAgIHRyYW5zZm9ybSA9IHRyYW5zZm9ybS5yZXBsYWNlKC90cmFuc2xhdGUzZFxcKFteKV0rXFwpLywgdHJhbnNsYXRlQ3NzKVxuICAgIH1cblxuICAgIGlmICh0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcGVydHldICE9PSB0cmFuc2Zvcm0pIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wZXJ0eV0gPSB0cmFuc2Zvcm1cbiAgICB9XG4gIH1cblxuICBtb3ZlKHBvaW50LCB0aW1lPTAsIGlzU2lsZW50PWZhbHNlKSB7XG4gICAgcG9pbnQgPSBwb2ludC5jbG9uZSgpXG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvaW50XG5cbiAgICB0aGlzLl9zZXRUcmFuc2l0aW9uKHRpbWUpXG4gICAgdGhpcy5fc2V0VHJhbnNsYXRlKHBvaW50LnN1Yih0aGlzLm9mZnNldCkpXG5cbiAgICBpZiAoIWlzU2lsZW50KSB7XG4gICAgICB0aGlzLmVtaXREcmFnRXZlbnQoJ21vdmUnKVxuICAgIH1cbiAgfVxuXG4gIHBpblBvc2l0aW9uKHBvaW50LCB0aW1lPTAsIHNpbGVudD10cnVlKSB7XG4gICAgdGhpcy5waW5uZWRQb3NpdGlvbiA9IHBvaW50LmNsb25lKClcbiAgICB0aGlzLm1vdmUodGhpcy5waW5uZWRQb3NpdGlvbiwgdGltZSwgc2lsZW50KVxuICB9XG5cbiAgcmVzZXRQb3NpdGlvblRvSW5pdGlhbCAoKSB7XG4gICAgdGhpcy5waW5Qb3NpdGlvbih0aGlzLmluaXRpYWxQb3NpdGlvbilcbiAgfVxuXG4gIHJlZnJlc2hQb3NpdGlvbiAoKSB7XG4gICAgdGhpcy5zZXRQb3NpdGlvbih0aGlzLmdldFBvc2l0aW9uKCkpXG4gIH1cblxuICBzZXRQb3NpdGlvbihwb2ludCkge1xuICAgIHBvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIHRoaXMucG9zaXRpb24gPSBwb2ludFxuICAgIHRoaXMuX3NldFRyYW5zaXRpb24oMClcbiAgICB0aGlzLl9zZXRUcmFuc2xhdGUocG9pbnQuc3ViKHRoaXMub2Zmc2V0KSlcbiAgfVxuXG4gIGRldGVybWluZURpcmVjdGlvbihwb2ludCkge1xuICAgIHRoaXMuX3ByZXZpb3VzRGlyZWN0aW9uUG9zaXRpb24gfHw9IHRoaXMuX3N0YXJ0UG9zaXRpb25cblxuICAgIHRoaXMubGVmdERpcmVjdGlvbiA9ICh0aGlzLl9wcmV2aW91c0RpcmVjdGlvblBvc2l0aW9uLnggPiBwb2ludC54KVxuICAgIHRoaXMucmlnaHREaXJlY3Rpb24gPSAodGhpcy5fcHJldmlvdXNEaXJlY3Rpb25Qb3NpdGlvbi54IDwgcG9pbnQueClcbiAgICB0aGlzLnVwRGlyZWN0aW9uID0gKHRoaXMuX3ByZXZpb3VzRGlyZWN0aW9uUG9zaXRpb24ueSA+IHBvaW50LnkpXG4gICAgdGhpcy5kb3duRGlyZWN0aW9uID0gKHRoaXMuX3ByZXZpb3VzRGlyZWN0aW9uUG9zaXRpb24ueSA8IHBvaW50LnkpXG5cbiAgICB0aGlzLl9wcmV2aW91c0RpcmVjdGlvblBvc2l0aW9uID0gcG9pbnRcbiAgfVxuXG4gIHNlZW1zU2Nyb2xsaW5nKCkge1xuICAgIHJldHVybiAoK25ldyBEYXRlKCkgLSB0aGlzLl9zdGFydFRvdWNoVGltZXN0YW1wKSA8IHRoaXMudG91Y2hEcmFnZ2luZ1RocmVzaG9sZFxuICB9XG5cbiAgc2hvdWxkVXNlTmF0aXZlRHJhZ0FuZERyb3AoKSB7XG4gICAgaWYgKHRoaXMuaXNUb3VjaEV2ZW50KSB7XG4gICAgICByZXR1cm4gdGhpcy5uYXRpdmVEcmFnQW5kRHJvcCAmJiB0aGlzLmVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcE9uVG91Y2hcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMubmF0aXZlRHJhZ0FuZERyb3BcbiAgICB9XG4gIH1cblxuICBkcmFnU3RhcnQoZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuX2VuYWJsZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3RvcFByb3BhZ2F0aW9uT25EcmFnU3RhcnQpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgfVxuXG4gICAgdGhpcy5pc1RvdWNoRXZlbnQgPSAoaXNUb3VjaCAmJiAoZXZlbnQgaW5zdGFuY2VvZiB3aW5kb3cuVG91Y2hFdmVudCkpXG5cbiAgICB0aGlzLnRvdWNoUG9pbnQgPSB0aGlzLl9zdGFydFRvdWNoUG9pbnQgPSBuZXcgUG9pbnQoXG4gICAgICB0aGlzLmlzVG91Y2hFdmVudCA/IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYIDogZXZlbnQuY2xpZW50WCxcbiAgICAgIHRoaXMuaXNUb3VjaEV2ZW50ID8gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVkgOiBldmVudC5jbGllbnRZXG4gICAgKVxuXG4gICAgdGhpcy5fc3RhcnRQb3NpdGlvbiA9IHRoaXMuZ2V0UG9zaXRpb24oKVxuICAgIGlmICh0aGlzLmlzVG91Y2hFdmVudCkge1xuICAgICAgdGhpcy5fdG91Y2hJZCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmlkZW50aWZpZXJcbiAgICAgIHRoaXMuX3N0YXJ0VG91Y2hUaW1lc3RhbXAgPSArbmV3IERhdGUoKVxuICAgIH1cblxuICAgIHRoaXMuX3N0YXJ0V2luZG93U2Nyb2xsUG9pbnQgPSB0aGlzLndpbmRvd1Njcm9sbFBvaW50XG4gICAgdGhpcy5fc3RhcnRTY3JvbGxFbGVtZW50c09mZnNldCA9IHRoaXMuc2Nyb2xsRWxlbWVudHNPZmZzZXRcblxuICAgIGlmIChldmVudC50YXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElucHV0RWxlbWVudCB8fFxuICAgICAgICAgIGV2ZW50LnRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSW5wdXRFbGVtZW50KSB7XG4gICAgICBldmVudC50YXJnZXQuZm9jdXMoKVxuICAgIH1cblxuICAgIGlmICh0aGlzLnNob3VsZFVzZU5hdGl2ZURyYWdBbmREcm9wKCkpIHtcbiAgICAgIGlmICh0aGlzLmlzVG91Y2hFdmVudCAmJiB0aGlzLmVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcE9uVG91Y2gpIHtcbiAgICAgICAgdGhpcy5fc3RhcnRQYXJlbnRzU2Nyb2xsT2Zmc2V0ID0gdGhpcy5wYXJlbnRzU2Nyb2xsT2Zmc2V0XG5cbiAgICAgICAgY29uc3QgZW11bGF0ZU9uRmlyc3RNb3ZlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuc2VlbXNTY3JvbGxpbmcoKSkge1xuICAgICAgICAgICAgdGhpcy5jYW5jZWxEcmFnZ2luZygpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wKGV2ZW50KVxuICAgICAgICAgIH1cbiAgICAgICAgICBjYW5jZWxFbXVsYXRpb24oKVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNhbmNlbEVtdWxhdGlvbiA9ICgpID0+IHtcbiAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIGVtdWxhdGVPbkZpcnN0TW92ZSlcbiAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgY2FuY2VsRW11bGF0aW9uKVxuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCBlbXVsYXRlT25GaXJzdE1vdmUsIHBhc3NpdmVGYWxzZSlcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIGNhbmNlbEVtdWxhdGlvbiwgcGFzc2l2ZUZhbHNlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIHRoaXMuX25hdGl2ZURyYWdTdGFydClcbiAgICAgICAgdGhpcy5lbGVtZW50LmRyYWdnYWJsZSA9IHRydWVcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX25hdGl2ZURyYWdFbmQsIHBhc3NpdmVGYWxzZSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSwgcGFzc2l2ZUZhbHNlKVxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSwgcGFzc2l2ZUZhbHNlKVxuXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZCwgcGFzc2l2ZUZhbHNlKVxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQsIHBhc3NpdmVGYWxzZSlcbiAgICB9XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fc2Nyb2xsKVxuICAgIHRoaXMuc2Nyb2xsRWxlbWVudHMuZm9yRWFjaCgocCkgPT4gcC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9zY3JvbGwpKVxuXG4gICAgaWYgKCF0aGlzLnNob3VsZFVzZU5hdGl2ZURyYWdBbmREcm9wKCkgJiYgdGhpcy5kcmFnU3RhcnRUaHJlc2hvbGQgPiAwKSB7XG4gICAgICB0aGlzLl9kcmFnU3RhcnRQZW5kaW5nID0gdHJ1ZVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVtaXREcmFnRXZlbnQoJ3N0YXJ0JylcbiAgICB9XG4gIH1cblxuICBkcmFnTW92ZShldmVudCkge1xuICAgIGxldCB0b3VjaFxuXG4gICAgdGhpcy5pc1RvdWNoRXZlbnQgPSAoaXNUb3VjaCAmJiAoZXZlbnQgaW5zdGFuY2VvZiB3aW5kb3cuVG91Y2hFdmVudCkpXG4gICAgaWYgKHRoaXMuaXNUb3VjaEV2ZW50KSB7XG4gICAgICB0b3VjaCA9IGdldFRvdWNoQnlJRChldmVudCwgdGhpcy5fdG91Y2hJZClcblxuICAgICAgaWYgKCF0b3VjaCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuc2VlbXNTY3JvbGxpbmcoKSkge1xuICAgICAgICB0aGlzLmNhbmNlbERyYWdnaW5nKClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy50b3VjaFBvaW50ID0gbmV3IFBvaW50KFxuICAgICAgdGhpcy5pc1RvdWNoRXZlbnQgPyB0b3VjaC5wYWdlWCA6IGV2ZW50LmNsaWVudFgsXG4gICAgICB0aGlzLmlzVG91Y2hFdmVudCA/IHRvdWNoLnBhZ2VZIDogZXZlbnQuY2xpZW50WVxuICAgIClcblxuICAgIGlmICh0aGlzLl9kcmFnU3RhcnRQZW5kaW5nKSB7XG4gICAgICBjb25zdCBkeCA9IHRoaXMudG91Y2hQb2ludC54IC0gdGhpcy5fc3RhcnRUb3VjaFBvaW50LnhcbiAgICAgIGNvbnN0IGR5ID0gdGhpcy50b3VjaFBvaW50LnkgLSB0aGlzLl9zdGFydFRvdWNoUG9pbnQueVxuICAgICAgaWYgKE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSkgPCB0aGlzLmRyYWdTdGFydFRocmVzaG9sZCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHRoaXMuX2RyYWdTdGFydFBlbmRpbmcgPSBmYWxzZVxuICAgICAgdGhpcy5lbWl0RHJhZ0V2ZW50KCdzdGFydCcpXG4gICAgfVxuXG4gICAgdGhpcy5pc0RyYWdnaW5nID0gdHJ1ZVxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gICAgbGV0IHBvaW50ID0gdGhpcy5fc3RhcnRQb3NpdGlvbi5hZGQodGhpcy50b3VjaFBvaW50LnN1Yih0aGlzLl9zdGFydFRvdWNoUG9pbnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMud2luZG93U2Nyb2xsUG9pbnQuc3ViKHRoaXMuX3N0YXJ0V2luZG93U2Nyb2xsUG9pbnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMuc2Nyb2xsRWxlbWVudHNPZmZzZXQuc3ViKHRoaXMuX3N0YXJ0U2Nyb2xsRWxlbWVudHNPZmZzZXQpKVxuXG4gICAgcG9pbnQgPSB0aGlzLmJvdW5kaW5nLmJvdW5kKHBvaW50LCB0aGlzLmdldFNpemUoKSlcbiAgICB0aGlzLmRldGVybWluZURpcmVjdGlvbihwb2ludClcbiAgICB0aGlzLm1vdmUocG9pbnQpXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RyYWdlZS1hY3RpdmUnKVxuICB9XG5cbiAgZHJhZ0VuZChldmVudCkge1xuICAgIHRoaXMuaXNUb3VjaEV2ZW50ID0gKGlzVG91Y2ggJiYgKGV2ZW50IGluc3RhbmNlb2Ygd2luZG93LlRvdWNoRXZlbnQpKVxuXG4gICAgaWYgKHRoaXMuaXNUb3VjaEV2ZW50ICYmICFnZXRUb3VjaEJ5SUQoZXZlbnQsIHRoaXMuX3RvdWNoSWQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5fZHJhZ1N0YXJ0UGVuZGluZykge1xuICAgICAgLy8gdGhyZXNob2xkIG5ldmVyIGNyb3NzZWQg4oCUIHRyZWF0IGFzIGNsaWNrLCBjbGVhbiB1cCBzaWxlbnRseVxuICAgICAgdGhpcy5fZHJhZ1N0YXJ0UGVuZGluZyA9IGZhbHNlXG4gICAgICB0aGlzLmNhbmNlbERyYWdnaW5nKClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLmlzRHJhZ2dpbmcpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfVxuXG4gICAgdGhpcy5kcmFnRW5kQWN0aW9uKClcbiAgICB0aGlzLmVtaXREcmFnRXZlbnQoJ2VuZCcpXG4gICAgdGhpcy5jYW5jZWxEcmFnZ2luZygpXG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZWUtYWN0aXZlJykpXG4gIH1cblxuICBvblNjcm9sbChfZXZlbnQpIHtcbiAgICBsZXQgcG9pbnQgPSB0aGlzLl9zdGFydFBvc2l0aW9uLmFkZCh0aGlzLnRvdWNoUG9pbnQuc3ViKHRoaXMuX3N0YXJ0VG91Y2hQb2ludCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy53aW5kb3dTY3JvbGxQb2ludC5zdWIodGhpcy5fc3RhcnRXaW5kb3dTY3JvbGxQb2ludCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy5zY3JvbGxFbGVtZW50c09mZnNldC5zdWIodGhpcy5fc3RhcnRTY3JvbGxFbGVtZW50c09mZnNldCkpXG5cbiAgICBwb2ludCA9IHRoaXMuYm91bmRpbmcuYm91bmQocG9pbnQsIHRoaXMuZ2V0U2l6ZSgpKVxuICAgIGlmICghdGhpcy5uYXRpdmVEcmFnQW5kRHJvcCkge1xuICAgICAgdGhpcy5kZXRlcm1pbmVEaXJlY3Rpb24ocG9pbnQpXG4gICAgICB0aGlzLm1vdmUocG9pbnQpXG4gICAgfVxuICB9XG5cbiAgbmF0aXZlRHJhZ1N0YXJ0KGV2ZW50KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dCcsICdGaXJlRm94IGZpeCcpXG4gICAgZXZlbnQuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSAnbW92ZSdcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIHRoaXMuX25hdGl2ZURyYWdPdmVyKVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzLl9uYXRpdmVEcm9wKVxuICB9XG5cbiAgbmF0aXZlRHJhZ092ZXIoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZXZlbnQuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnbW92ZSdcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZHJhZ2VlLXBsYWNlaG9sZGVyJylcbiAgICBpZiAoZXZlbnQuY2xpZW50WCA9PT0gMCAmJiBldmVudC5jbGllbnRZID09PSAwKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLnRvdWNoUG9pbnQgPSBuZXcgUG9pbnQoZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSlcbiAgICBsZXQgcG9pbnQgPSB0aGlzLl9zdGFydFBvc2l0aW9uLmFkZCh0aGlzLnRvdWNoUG9pbnQuc3ViKHRoaXMuX3N0YXJ0VG91Y2hQb2ludCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy53aW5kb3dTY3JvbGxQb2ludC5zdWIodGhpcy5fc3RhcnRXaW5kb3dTY3JvbGxQb2ludCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy5zY3JvbGxFbGVtZW50c09mZnNldC5zdWIodGhpcy5fc3RhcnRTY3JvbGxFbGVtZW50c09mZnNldCkpXG4gICAgcG9pbnQgPSB0aGlzLmJvdW5kaW5nLmJvdW5kKHBvaW50LCB0aGlzLmdldFNpemUoKSlcbiAgICB0aGlzLmRldGVybWluZURpcmVjdGlvbihwb2ludClcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9pbnRcbiAgICB0aGlzLmVtaXREcmFnRXZlbnQoJ21vdmUnKVxuICB9XG5cbiAgbmF0aXZlRHJhZ0VuZChfZXZlbnQpIHtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2VlLXBsYWNlaG9sZGVyJylcbiAgICB0aGlzLmRyYWdFbmRBY3Rpb24oKVxuICAgIHRoaXMuZW1pdERyYWdFdmVudCgnZW5kJylcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIHRoaXMuX25hdGl2ZURyYWdPdmVyKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzLl9uYXRpdmVEcm9wKVxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9zY3JvbGwpXG4gICAgdGhpcy5zY3JvbGxFbGVtZW50cy5mb3JFYWNoKChwKSA9PiBwLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX3Njcm9sbCkpXG4gICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2VcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkcmFnZ2FibGUnKVxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCB0aGlzLl9uYXRpdmVEcmFnU3RhcnQpXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdlZS1hY3RpdmUnKVxuICB9XG5cbiAgbmF0aXZlRHJvcChldmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgY2FuY2VsRHJhZ2dpbmcgKCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcblxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX25hdGl2ZURyYWdFbmQpXG5cbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fc2Nyb2xsKVxuICAgIHRoaXMuc2Nyb2xsRWxlbWVudHMuZm9yRWFjaCgocCkgPT4gcC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9zY3JvbGwpKVxuXG4gICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2VcbiAgICB0aGlzLl9wcmV2aW91c0RpcmVjdGlvblBvc2l0aW9uID0gbnVsbFxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2RyYWdnYWJsZScpXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIHRoaXMuX25hdGl2ZURyYWdTdGFydClcbiAgfVxuXG4gIGNvcHlTdHlsZXMoc291cmNlLCBkZXN0aW5hdGlvbikge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuY29weVN0eWxlcykge1xuICAgICAgdGhpcy5vcHRpb25zLmNvcHlTdHlsZXMoc291cmNlLCBkZXN0aW5hdGlvbilcbiAgICB9IGVsc2Uge1xuICAgICAgY29weVN0eWxlcyhzb3VyY2UsIGRlc3RpbmF0aW9uKVxuICAgIH1cbiAgfVxuXG4gIGVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcChldmVudCkge1xuICAgIGNvbnN0IGNvbnRhaW5lclJlY3QgPSB0aGlzLmNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIGNvbnN0IGNsb25lZEVsZW1lbnQgPSB0aGlzLmVsZW1lbnQuY2xvbmVOb2RlKHRydWUpXG4gICAgY2xvbmVkRWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wZXJ0eV0gPSAnJ1xuICAgIHRoaXMuY29weVN0eWxlcyh0aGlzLmVsZW1lbnQsIGNsb25lZEVsZW1lbnQpXG4gICAgY2xvbmVkRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkcmFnZWUtbmF0aXZlLWVtdWxhdGlvbicpXG4gICAgY2xvbmVkRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSdcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNsb25lZEVsZW1lbnQpXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RyYWdlZS1wbGFjZWhvbGRlcicpXG5cbiAgICBjb25zdCBlbXVsYXRpb25EcmFnZ2FibGUgPSBuZXcgRHJhZ2dhYmxlKGNsb25lZEVsZW1lbnQsIHtcbiAgICAgIGNvbnRhaW5lcjogZG9jdW1lbnQuYm9keSxcbiAgICAgIHRvdWNoRHJhZ2dpbmdUaHJlc2hvbGQ6IDAsXG4gICAgICBkb21FdmVudHM6IGZhbHNlLFxuICAgICAgYm91bmQocG9pbnQpIHtcbiAgICAgICAgcmV0dXJuIHBvaW50XG4gICAgICB9LFxuICAgICAgb246IHtcbiAgICAgICAgJ2RyYWc6bW92ZSc6ICgpID0+IHtcbiAgICAgICAgICBjb25zdCBjb250YWluZXJSZWN0UG9pbnQgPSBuZXcgUG9pbnQoY29udGFpbmVyUmVjdC5sZWZ0LCBjb250YWluZXJSZWN0LnRvcClcbiAgICAgICAgICB0aGlzLnBvc2l0aW9uID0gZW11bGF0aW9uRHJhZ2dhYmxlLnBvc2l0aW9uLnN1Yihjb250YWluZXJSZWN0UG9pbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdWIodGhpcy5fc3RhcnRXaW5kb3dTY3JvbGxQb2ludClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZCh0aGlzLl9zdGFydFBhcmVudHNTY3JvbGxPZmZzZXQpXG5cbiAgICAgICAgICB0aGlzLmRldGVybWluZURpcmVjdGlvbih0aGlzLnBvc2l0aW9uKVxuICAgICAgICAgIHRoaXMuZW1pdERyYWdFdmVudCgnbW92ZScpXG4gICAgICAgIH0sXG4gICAgICAgICdkcmFnOmVuZCc6ICgpID0+IHtcbiAgICAgICAgICBlbXVsYXRpb25EcmFnZ2FibGUuZGVzdHJveSgpXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChjbG9uZWRFbGVtZW50KVxuICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZWUtcGxhY2Vob2xkZXInKVxuICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZWUtYWN0aXZlJylcblxuICAgICAgICAgIHRoaXMuZHJhZ0VuZEFjdGlvbigpXG4gICAgICAgICAgdGhpcy5lbWl0RHJhZ0V2ZW50KCdlbmQnKVxuICAgICAgICAgIHRoaXMuY2FuY2VsRHJhZ2dpbmcoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IGNvbnRhaW5lclJlY3RQb2ludCA9IG5ldyBQb2ludChjb250YWluZXJSZWN0LmxlZnQsIGNvbnRhaW5lclJlY3QudG9wKVxuICAgIGVtdWxhdGlvbkRyYWdnYWJsZS5fc3RhcnRXaW5kb3dTY3JvbGxQb2ludCA9IHRoaXMuX3N0YXJ0V2luZG93U2Nyb2xsUG9pbnRcblxuICAgIGVtdWxhdGlvbkRyYWdnYWJsZS5tb3ZlKFxuICAgICAgdGhpcy5waW5uZWRQb3NpdGlvbi5hZGQoY29udGFpbmVyUmVjdFBvaW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy53aW5kb3dTY3JvbGxQb2ludClcbiAgICAgICAgICAgICAgICAgICAgICAgICAuc3ViKHRoaXMucGFyZW50c1Njcm9sbE9mZnNldClcbiAgICApXG5cbiAgICBlbXVsYXRpb25EcmFnZ2FibGUuZHJhZ1N0YXJ0KGV2ZW50KVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIGVtaXREcmFnRXZlbnQodHlwZSkge1xuICAgIHRoaXMuZW1pdChgZHJhZzoke3R5cGV9YCwgdGhpcylcblxuICAgIGlmICh0aGlzLmRvbUV2ZW50cykge1xuICAgICAgZGlzcGF0Y2hEb21FdmVudCh0aGlzLmVsZW1lbnQsIGBkcmFnZWU6JHt0eXBlfWAsIHsgZHJhZ2dhYmxlOiB0aGlzIH0pXG4gICAgfVxuICB9XG5cbiAgb3ZlcnJpZGVEcmFnRW5kQWN0aW9uKGFjdGlvbikge1xuICAgIHRoaXMuX2RyYWdFbmRBY3Rpb25zLnB1c2goYWN0aW9uKVxuICAgIHJldHVybiAoKSA9PiByZW1vdmVJdGVtKHRoaXMuX2RyYWdFbmRBY3Rpb25zLCBhY3Rpb24pXG4gIH1cblxuICBkcmFnRW5kQWN0aW9uKCkge1xuICAgIGNvbnN0IGFjdGlvbiA9IHRoaXMuX2RyYWdFbmRBY3Rpb25zW3RoaXMuX2RyYWdFbmRBY3Rpb25zLmxlbmd0aCAtIDFdXG5cbiAgICBpZiAoYWN0aW9uKSB7XG4gICAgICBhY3Rpb24oKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBpblBvc2l0aW9uKHRoaXMucG9zaXRpb24pXG4gICAgfVxuICB9XG5cbiAgZ2V0UmVjdGFuZ2xlKCkge1xuICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHRoaXMucG9zaXRpb24sIHRoaXMuZ2V0U2l6ZSgpKVxuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICBpZiAodGhpcy5ib3VuZGluZy5yZWZyZXNoKSB7XG4gICAgICB0aGlzLmJvdW5kaW5nLnJlZnJlc2goKVxuICAgIH1cbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5oYW5kbGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydClcbiAgICB0aGlzLmhhbmRsZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0KVxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCB0aGlzLl9uYXRpdmVEcmFnU3RhcnQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgdGhpcy5fbmF0aXZlRHJhZ092ZXIpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIHRoaXMuX25hdGl2ZURyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX25hdGl2ZURyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJvcCcsIHRoaXMuX25hdGl2ZURyb3ApXG4gICAgc2NvcGVzLmZvckVhY2goKHNjb3BlKSA9PiBzY29wZS5yZWxlYXNlRHJhZ2dhYmxlKHRoaXMpKVxuICAgIHRoaXMucmVzZXRFbWl0dGVyKClcblxuICAgIGNvbnN0IGluZGV4ID0gZHJhZ2dhYmxlcy5pbmRleE9mKHRoaXMpXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIGRyYWdnYWJsZXMuc3BsaWNlKGluZGV4LCAxKVxuICAgIH1cbiAgfVxuXG4gIGdldCBjb250YWluZXIoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9jb250YWluZXIgPSB0aGlzLl9jb250YWluZXIgfHwgdGhpcy5vcHRpb25zLmNvbnRhaW5lciB8fCB0aGlzLm9wdGlvbnMucGFyZW50IHx8IHRoaXMuZWxlbWVudC5vZmZzZXRQYXJlbnQpXG4gIH1cblxuICBnZXQgaGFuZGxlcigpIHtcbiAgICBpZiAoIXRoaXMuX2hhbmRsZXIpIHtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmhhbmRsZXIgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZXIgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLm9wdGlvbnMuaGFuZGxlcikgfHwgdGhpcy5lbGVtZW50XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9oYW5kbGVyID0gdGhpcy5vcHRpb25zLmhhbmRsZXIgfHwgdGhpcy5lbGVtZW50XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2hhbmRsZXJcbiAgfVxuXG4gIGdldCBzdG9wUHJvcGFnYXRpb25PbkRyYWdTdGFydCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLnN0b3BQcm9wYWdhdGlvbk9uRHJhZ1N0YXJ0IHx8IGZhbHNlXG4gIH1cblxuICBnZXQgbmF0aXZlRHJhZ0FuZERyb3AoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5uYXRpdmVEcmFnQW5kRHJvcCB8fCBmYWxzZVxuICB9XG5cbiAgZ2V0IGRvbUV2ZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmRvbUV2ZW50cyAhPT0gZmFsc2VcbiAgfVxuXG4gIGdldCBlbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3BPblRvdWNoKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wT25Ub3VjaCB8fCBmYWxzZVxuICB9XG5cbiAgZ2V0IHNob3VsZFJlbW92ZVplcm9UcmFuc2xhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5zaG91bGRSZW1vdmVaZXJvVHJhbnNsYXRlIHx8IGZhbHNlXG4gIH1cblxuICBnZXQgdG91Y2hEcmFnZ2luZ1RocmVzaG9sZCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLnRvdWNoRHJhZ2dpbmdUaHJlc2hvbGQgfHwgMFxuICB9XG5cbiAgZ2V0IGRyYWdTdGFydFRocmVzaG9sZCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmRyYWdTdGFydFRocmVzaG9sZCB8fCAwXG4gIH1cblxuICBnZXQgZHJhZ092ZXJUaHJvdHRsZUR1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZHJhZ092ZXJUaHJvdHRsZUR1cmF0aW9uIHx8IDE2XG4gIH1cblxuICBnZXQgaXNDb25zaWRlclRyYW5zZm9ybU9mZnNldCAoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5jb25zaWRlclRyYW5zZm9ybU9mZnNldCB8fCBmYWxzZVxuICB9XG5cbiAgZ2V0IHdpbmRvd1Njcm9sbFBvaW50KCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQod2luZG93LnNjcm9sbFgsIHdpbmRvdy5zY3JvbGxZKVxuICB9XG5cbiAgZ2V0IHNjcm9sbFJvb3RDb250YWluZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5zY3JvbGxSb290Q29udGFpbmVyIHx8IHRoaXMuY29udGFpbmVyXG4gIH1cblxuICBnZXQgc2Nyb2xsRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhY2hlZFNjcm9sbEVsZW1lbnRzXG4gICAgICA/IHRoaXMuX2NhY2hlZFNjcm9sbEVsZW1lbnRzXG4gICAgICA6ICh0aGlzLl9jYWNoZWRTY3JvbGxFbGVtZW50cyA9IGdldFBhcmVudHNDaGFpbih0aGlzLmVsZW1lbnQsIHRoaXMuc2Nyb2xsUm9vdENvbnRhaW5lcikpXG4gIH1cblxuICBnZXQgc2Nyb2xsRWxlbWVudHNPZmZzZXQoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludChcbiAgICAgIHRoaXMuc2Nyb2xsRWxlbWVudHMucmVkdWNlKChzdW0sIHApID0+IHN1bSArIHAuc2Nyb2xsTGVmdCwgMCksXG4gICAgICB0aGlzLnNjcm9sbEVsZW1lbnRzLnJlZHVjZSgoc3VtLCBwKSA9PiBzdW0gKyBwLnNjcm9sbFRvcCwgMClcbiAgICApXG4gIH1cblxuICBnZXQgcGFyZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5fY2FjaGVkUGFyZW50c1xuICAgICAgPyB0aGlzLl9jYWNoZWRQYXJlbnRzXG4gICAgICA6ICh0aGlzLl9jYWNoZWRQYXJlbnRzID0gZ2V0UGFyZW50c0NoYWluKHRoaXMuZWxlbWVudCwgdGhpcy5jb250YWluZXIpKVxuICB9XG5cbiAgZ2V0IHBhcmVudHNTY3JvbGxPZmZzZXQoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludChcbiAgICAgIHRoaXMucGFyZW50cy5yZWR1Y2UoKHN1bSwgcCkgPT4gc3VtICsgcC5zY3JvbGxMZWZ0LCAwKSxcbiAgICAgIHRoaXMucGFyZW50cy5yZWR1Y2UoKHN1bSwgcCkgPT4gc3VtICsgcC5zY3JvbGxUb3AsIDApXG4gICAgKVxuICB9XG5cbiAgZ2V0IGVuYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlXG4gIH1cblxuICBzZXQgZW5hYmxlKGVuYWJsZSkge1xuICAgIGlmIChlbmFibGUpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZWUtZGlzYWJsZScpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkcmFnZWUtZGlzYWJsZScpXG4gICAgfVxuXG4gICAgdGhpcy5fZW5hYmxlID0gZW5hYmxlXG4gIH1cbn1cblxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCwgaW1tZWRpYXRlKSB7XG4gIGxldCB0aW1lb3V0XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGV4ZWN1dGVkRnVuY3Rpb24oKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXNcbiAgICBjb25zdCBhcmdzID0gYXJndW1lbnRzXG5cbiAgICBjb25zdCBsYXRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgdGltZW91dCA9IG51bGxcbiAgICAgIGlmICghaW1tZWRpYXRlKSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpXG4gICAgfVxuXG4gICAgY29uc3QgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dFxuXG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpXG5cbiAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdClcblxuICAgIGlmIChjYWxsTm93KSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpXG4gIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBnZXREaXN0YW5jZShwMSwgcDIpIHtcbiAgY29uc3QgZHggPSBwMS54IC0gcDIueCwgZHkgPSBwMS55IC0gcDIueVxuICByZXR1cm4gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0WERpZmZlcmVuY2UocDEsIHAyKSB7XG4gIHJldHVybiBNYXRoLmFicyhwMS54IC0gcDIueClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFlEaWZmZXJlbmNlKHAxLCBwMikge1xuICByZXR1cm4gTWF0aC5hYnMocDEueSAtIHAyLnkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5KG9wdGlvbnMpIHtcbiAgcmV0dXJuIChwMSwgcDIpID0+IHtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KFxuICAgICAgTWF0aC5wb3cob3B0aW9ucy54ICogTWF0aC5hYnMocDEueCAtIHAyLngpLCAyKSArXG4gICAgICBNYXRoLnBvdyhvcHRpb25zLnkgKiBNYXRoLmFicyhwMS55IC0gcDIueSksIDIpXG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmRleE9mTmVhcmVzdFBvaW50KGFyciwgdmFsLCByYWRpdXMsIGdldERpc3RhbmNlRnVuYz1nZXREaXN0YW5jZSkge1xuICBsZXQgc2l6ZSwgaW5kZXggPSAwLCBpLCB0ZW1wXG4gIGlmIChhcnIubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIC0xXG4gIH1cbiAgc2l6ZSA9IGdldERpc3RhbmNlRnVuYyhhcnJbMF0sIHZhbClcbiAgZm9yIChpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgIHRlbXAgPSBnZXREaXN0YW5jZUZ1bmMoYXJyW2ldLCB2YWwpXG4gICAgaWYgKHRlbXAgPCBzaXplKSB7XG4gICAgICBzaXplID0gdGVtcFxuICAgICAgaW5kZXggPSBpXG4gICAgfVxuICB9XG4gIGlmIChyYWRpdXMgPj0gMCAmJiBzaXplID4gcmFkaXVzKSB7XG4gICAgcmV0dXJuIC0xXG4gIH1cbiAgcmV0dXJuIGluZGV4XG59XG4iLCJpbXBvcnQgZGVib3VuY2UgZnJvbSAnLi91dGlscy9kZWJvdW5jZSdcbmltcG9ydCByZW1vdmVJdGVtIGZyb20gJy4vdXRpbHMvcmVtb3ZlLWFycmF5LWl0ZW0nXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnRFbWl0dGVyJ1xuaW1wb3J0IGRpc3BhdGNoRG9tRXZlbnQgZnJvbSAnLi91dGlscy9kaXNwYXRjaC1kb20tZXZlbnQnXG5pbXBvcnQge1xuICBnZXREaXN0YW5jZSxcbiAgaW5kZXhPZk5lYXJlc3RQb2ludFxufSBmcm9tICcuL2dlb21ldHJ5L2Rpc3RhbmNlcydcblxuaW1wb3J0IERyYWdnYWJsZSBmcm9tICcuL2RyYWdnYWJsZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdCBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKGRyYWdnYWJsZXMsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcihvcHRpb25zKVxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgdGltZUVuZDogMjAwLFxuICAgICAgdGltZUV4Y2FuZ2U6IDQwMCxcbiAgICAgIHJhZGl1czogMzBcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGhpcy5jb250YWluZXIgPSBvcHRpb25zLmNvbnRhaW5lclxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZXNcbiAgICB0aGlzLmNoYW5nZWREdXJpbmdJdGVyYXRpb24gPSBmYWxzZVxuICAgIHRoaXMuc3Vic2NyaXB0aW9ucyA9IG5ldyBNYXAoKVxuXG4gICAgdGhpcy5yZXNpemVPYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcihkZWJvdW5jZSh0aGlzLm9uUmVzaXplLmJpbmQodGhpcyksIDEwMCkpXG5cbiAgICBpZiAodGhpcy5jb250YWluZXIpIHtcbiAgICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLmNvbnRhaW5lcilcbiAgICB9XG5cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgb25SZXNpemUoKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5yZW9yZGVyT25DaGFuZ2UpIHRoaXMucmVzZXQoKVxuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGlmKCFkcmFnZ2FibGUuaXNEcmFnZ2luZykge1xuICAgICAgICBkcmFnZ2FibGUuc3RhcnRQb3NpdGlvbmluZygpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5fZW5hYmxlID0gdHJ1ZVxuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHRoaXMuaW5pdERyYWdnYWJsZShkcmFnZ2FibGUpKVxuICB9XG5cbiAgaW5pdERyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICBkcmFnZ2FibGUuZW5hYmxlID0gdGhpcy5fZW5hYmxlXG4gICAgdGhpcy5saXN0ZW5UbyhkcmFnZ2FibGUsICdkcmFnOm1vdmUnLCAoKSA9PiB0aGlzLm9uTW92ZShkcmFnZ2FibGUpKVxuICAgIHRoaXMudHJhY2tSZWxlYXNlKGRyYWdnYWJsZSwgZHJhZ2dhYmxlLm92ZXJyaWRlRHJhZ0VuZEFjdGlvbigoKSA9PiB7XG4gICAgICBkcmFnZ2FibGUucGluUG9zaXRpb24oZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uLCB0aGlzLm9wdGlvbnMudGltZUVuZClcbiAgICAgIHRoaXMub25FbmQoZHJhZ2dhYmxlKVxuICAgIH0pKVxuICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZShkcmFnZ2FibGUuZWxlbWVudClcbiAgfVxuXG4gIGxpc3RlblRvKGRyYWdnYWJsZSwgZXZlbnROYW1lLCBoYW5kbGVyKSB7XG4gICAgdGhpcy50cmFja1JlbGVhc2UoZHJhZ2dhYmxlLCBkcmFnZ2FibGUub24oZXZlbnROYW1lLCBoYW5kbGVyKSlcbiAgfVxuXG4gIHRyYWNrUmVsZWFzZShkcmFnZ2FibGUsIHJlbGVhc2UpIHtcbiAgICBpZiAoIXRoaXMuc3Vic2NyaXB0aW9ucy5oYXMoZHJhZ2dhYmxlKSkge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnNldChkcmFnZ2FibGUsIFtdKVxuICAgIH1cbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMuZ2V0KGRyYWdnYWJsZSkucHVzaChyZWxlYXNlKVxuICB9XG5cbiAgcmVsZWFzZURyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICB0aGlzLnJlc2l6ZU9ic2VydmVyLnVub2JzZXJ2ZShkcmFnZ2FibGUuZWxlbWVudClcbiAgICBjb25zdCByZWxlYXNlcyA9IHRoaXMuc3Vic2NyaXB0aW9ucy5nZXQoZHJhZ2dhYmxlKSB8fCBbXVxuICAgIHJlbGVhc2VzLmZvckVhY2goKHJlbGVhc2UpID0+IHJlbGVhc2UoKSlcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMuZGVsZXRlKGRyYWdnYWJsZSlcbiAgICByZW1vdmVJdGVtKHRoaXMuZHJhZ2dhYmxlcywgZHJhZ2dhYmxlKVxuICB9XG5cbiAgb25Nb3ZlKGRyYWdnYWJsZSkge1xuICAgIGlmICh0aGlzLnN3YXBwaW5nRGlzYWJsZWQpIHJldHVyblxuXG4gICAgY29uc3Qgc29ydGVkRHJhZ2dhYmxlcyA9IHRoaXMuZ2V0U29ydGVkRHJhZ2dhYmxlcygpXG4gICAgY29uc3QgcGlubmVkUG9zaXRpb25zID0gc29ydGVkRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uKVxuXG4gICAgY29uc3QgY3VycmVudEluZGV4ID0gc29ydGVkRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSlcbiAgICBjb25zdCB0YXJnZXRJbmRleCA9IGluZGV4T2ZOZWFyZXN0UG9pbnQocGlubmVkUG9zaXRpb25zLCBkcmFnZ2FibGUucG9zaXRpb24sIHRoaXMub3B0aW9ucy5yYWRpdXMsIHRoaXMuZGlzdGFuY2VGdW5jKVxuXG4gICAgaWYgKHRhcmdldEluZGV4ICE9PSAtMSAmJiBjdXJyZW50SW5kZXggIT09IHRhcmdldEluZGV4KSB7XG4gICAgICBpZiAodGFyZ2V0SW5kZXggPCBjdXJyZW50SW5kZXgpIHtcbiAgICAgICAgZm9yIChsZXQgaT10YXJnZXRJbmRleDsgaTxjdXJyZW50SW5kZXg7IGkrKykge1xuICAgICAgICAgIHNvcnRlZERyYWdnYWJsZXNbaV0ucGluUG9zaXRpb24ocGlubmVkUG9zaXRpb25zW2krMV0sIHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChsZXQgaT1jdXJyZW50SW5kZXg7IGk8dGFyZ2V0SW5kZXg7IGkrKykge1xuICAgICAgICAgIHNvcnRlZERyYWdnYWJsZXNbaSsxXS5waW5Qb3NpdGlvbihwaW5uZWRQb3NpdGlvbnNbaV0sIHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZHJhZ2dhYmxlLm5hdGl2ZURyYWdBbmREcm9wKSB7XG4gICAgICAgIGRyYWdnYWJsZS5waW5Qb3NpdGlvbihwaW5uZWRQb3NpdGlvbnNbdGFyZ2V0SW5kZXhdKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uID0gcGlubmVkUG9zaXRpb25zW3RhcmdldEluZGV4XVxuICAgICAgfVxuXG4gICAgICB0aGlzLmNoYW5nZWREdXJpbmdJdGVyYXRpb24gPSB0cnVlXG4gICAgfVxuICB9XG5cbiAgb25FbmQoZHJhZ2dhYmxlKSB7XG4gICAgaWYgKHRoaXMuY2hhbmdlZER1cmluZ0l0ZXJhdGlvbikge1xuICAgICAgdGhpcy5lbWl0TGlzdEV2ZW50KCdjaGFuZ2UnLCBkcmFnZ2FibGUpXG4gICAgICB0aGlzLmNoYW5nZWREdXJpbmdJdGVyYXRpb24gPSBmYWxzZVxuXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnJlb3JkZXJPbkNoYW5nZSAmJiB0aGlzLm9wdGlvbnMuY29udGFpbmVyKSB7XG4gICAgICAgIHRoaXMucmVvcmRlckVsZW1lbnRzKGRyYWdnYWJsZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW9yZGVyRWxlbWVudHMobW92ZWREcmFnZ2FibGUpIHtcbiAgICBjb25zdCBzb3J0ZWREcmFnZ2FibGVzID0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcbiAgICBjb25zdCBpbmRleCA9IHNvcnRlZERyYWdnYWJsZXMuaW5kZXhPZihtb3ZlZERyYWdnYWJsZSlcbiAgICBjb25zdCBuZXh0ID0gc29ydGVkRHJhZ2dhYmxlc1tpbmRleCArIDFdXG5cbiAgICB0aGlzLnJlc2V0KClcblxuICAgIGlmIChuZXh0KSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5pbnNlcnRCZWZvcmUobW92ZWREcmFnZ2FibGUuZWxlbWVudCwgbmV4dC5lbGVtZW50KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChtb3ZlZERyYWdnYWJsZS5lbGVtZW50KVxuICAgIH1cblxuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkKSA9PiBkLnN0YXJ0UG9zaXRpb25pbmcoKSlcbiAgICB0aGlzLmVtaXRMaXN0RXZlbnQoJ3Jlb3JkZXJlZCcsIG1vdmVkRHJhZ2dhYmxlKVxuICB9XG5cbiAgZW1pdExpc3RFdmVudCh0eXBlLCBkcmFnZ2FibGUpIHtcbiAgICB0aGlzLmVtaXQoYGxpc3Q6JHt0eXBlfWAsIGRyYWdnYWJsZSlcblxuICAgIGlmICh0aGlzLmRvbUV2ZW50cykge1xuICAgICAgZGlzcGF0Y2hEb21FdmVudChkcmFnZ2FibGUuZWxlbWVudCwgYGRyYWdlZTpsaXN0LSR7dHlwZX1gLCB7IGxpc3Q6IHRoaXMsIGRyYWdnYWJsZSB9KVxuICAgIH1cbiAgfVxuXG4gIGdldEN1cnJlbnRQaW5uZWRQb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uLmNsb25lKCkpXG4gIH1cblxuICBnZXRTb3J0ZWREcmFnZ2FibGVzKCkge1xuICAgIHJldHVybiB0aGlzLmRyYWdnYWJsZXMuc29ydCh0aGlzLnNvcnRpbmcuYmluZCh0aGlzKSlcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5yZXNldFBvc2l0aW9uVG9Jbml0aWFsKCkpXG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5yZWZyZXNoKCkpXG4gIH1cblxuICBhZGQoZHJhZ2dhYmxlcykge1xuICAgIGlmICghKGRyYWdnYWJsZXMgaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICAgIGRyYWdnYWJsZXMgPSBbZHJhZ2dhYmxlc11cbiAgICB9XG4gICAgZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHRoaXMuaW5pdERyYWdnYWJsZShkcmFnZ2FibGUpKVxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IHRoaXMuZHJhZ2dhYmxlcy5jb25jYXQoZHJhZ2dhYmxlcylcbiAgfVxuXG4gIHJlbW92ZShkcmFnZ2FibGVzKSB7XG4gICAgY29uc3QgaW5pdGlhbFBvc2l0aW9ucyA9IHRoaXMuZHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLmluaXRpYWxQb3NpdGlvbilcbiAgICBjb25zdCBsaXN0ID0gW11cbiAgICBjb25zdCBzb3J0ZWREcmFnZ2FibGVzID0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcblxuICAgIGlmICghKGRyYWdnYWJsZXMgaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICAgIGRyYWdnYWJsZXMgPSBbZHJhZ2dhYmxlc11cbiAgICB9XG5cbiAgICBkcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gdGhpcy5yZWxlYXNlRHJhZ2dhYmxlKGRyYWdnYWJsZSkpXG5cbiAgICBsZXQgaiA9IDBcbiAgICBzb3J0ZWREcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgaWYgKHRoaXMuZHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkgIT09IC0xKSB7XG4gICAgICAgIGlmIChkcmFnZ2FibGUucGlubmVkUG9zaXRpb24gIT09IGluaXRpYWxQb3NpdGlvbnNbal0pIHtcbiAgICAgICAgICBkcmFnZ2FibGUucGluUG9zaXRpb24oaW5pdGlhbFBvc2l0aW9uc1tqXSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICB9XG4gICAgICAgIGRyYWdnYWJsZS5pbml0aWFsUG9zaXRpb24gPSBpbml0aWFsUG9zaXRpb25zW2pdXG4gICAgICAgIGorK1xuICAgICAgICBsaXN0LnB1c2goZHJhZ2dhYmxlKVxuICAgICAgfVxuICAgIH0pXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gbGlzdFxuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5yZW1vdmUodGhpcy5kcmFnZ2FibGVzLnNsaWNlKCkpXG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5kZXN0cm95KCkpXG4gICAgaWYgKHRoaXMuY29udGFpbmVyKSB7XG4gICAgICB0aGlzLnJlc2l6ZU9ic2VydmVyLnVub2JzZXJ2ZSh0aGlzLmNvbnRhaW5lcilcbiAgICB9XG4gIH1cblxuICBzb3J0aW5nKGRyYWdnYWJsZUEsIGRyYWdnYWJsZUIpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLnNvcnRpbmcpIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuc29ydGluZyhkcmFnZ2FibGVBLCBkcmFnZ2FibGVCKVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZHJhZ2dhYmxlQS5waW5uZWRQb3NpdGlvbi55IDwgZHJhZ2dhYmxlQi5waW5uZWRQb3NpdGlvbi55KSByZXR1cm4gLTFcbiAgICAgIGlmIChkcmFnZ2FibGVBLnBpbm5lZFBvc2l0aW9uLnkgPiBkcmFnZ2FibGVCLnBpbm5lZFBvc2l0aW9uLnkpIHJldHVybiAxXG4gICAgICBpZiAoZHJhZ2dhYmxlQS5waW5uZWRQb3NpdGlvbi54IDwgZHJhZ2dhYmxlQi5waW5uZWRQb3NpdGlvbi54KSByZXR1cm4gLTFcbiAgICAgIGlmIChkcmFnZ2FibGVBLnBpbm5lZFBvc2l0aW9uLnggPiBkcmFnZ2FibGVCLnBpbm5lZFBvc2l0aW9uLngpIHJldHVybiAxXG4gICAgICByZXR1cm4gMFxuICAgIH1cbiAgfVxuXG4gIGdldCBkaXN0YW5jZUZ1bmMoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5nZXREaXN0YW5jZSB8fCBnZXREaXN0YW5jZVxuICB9XG5cbiAgZ2V0IGRvbUV2ZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmRvbUV2ZW50cyAhPT0gZmFsc2VcbiAgfVxuXG4gIGdldCBwb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q3VycmVudFBpbm5lZFBvc2l0aW9ucygpXG4gIH1cblxuICBzZXQgcG9zaXRpb25zKHBvc2l0aW9ucykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSAnd3JvbmcgYXJyYXkgbGVuZ3RoJ1xuICAgIGlmIChwb3NpdGlvbnMubGVuZ3RoID09PSB0aGlzLmRyYWdnYWJsZXMubGVuZ3RoKSB7XG4gICAgICBwb3NpdGlvbnMuZm9yRWFjaCgocG9pbnQsIGkpID0+IHtcbiAgICAgICAgdGhpcy5kcmFnZ2FibGVzW2ldLnBpblBvc2l0aW9uKHBvaW50KVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbWVzc2FnZVxuICAgIH1cbiAgfVxuXG4gIGdldCBlbmFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZVxuICB9XG5cbiAgc2V0IGVuYWJsZShlbmFibGUpIHtcbiAgICB0aGlzLl9lbmFibGUgPSBlbmFibGVcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUuZW5hYmxlID0gZW5hYmxlXG4gICAgfSlcbiAgfVxuXG4gIGdldCBzd2FwcGluZ0Rpc2FibGVkKCkge1xuICAgIHJldHVybiB0aGlzLl9zd2FwcGluZ0Rpc2FibGVkXG4gIH1cblxuICBzZXQgc3dhcHBpbmdEaXNhYmxlZChkaXNhYmxlZCkge1xuICAgIHRoaXMuX3N3YXBwaW5nRGlzYWJsZWQgPSBkaXNhYmxlZFxuICB9XG59XG4iLCJpbXBvcnQgTGlzdCBmcm9tICcuL2xpc3QnXG5pbXBvcnQgeyBpbmRleE9mTmVhcmVzdFBvaW50LCBnZXRYRGlmZmVyZW5jZSwgZ2V0WURpZmZlcmVuY2UgfSBmcm9tICcuL2dlb21ldHJ5L2Rpc3RhbmNlcydcblxuaW1wb3J0IERyYWdnYWJsZSBmcm9tICcuL2RyYWdnYWJsZSdcblxuY29uc3QgYXJyYXlNb3ZlID0gKGFycmF5LCBmcm9tLCB0bykgPT4ge1xuICBhcnJheS5zcGxpY2UodG8gPCAwID8gYXJyYXkubGVuZ3RoICsgdG8gOiB0bywgMCwgYXJyYXkuc3BsaWNlKGZyb20sIDEpWzBdKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdWJibGluZ0xpc3QgZXh0ZW5kcyBMaXN0IHtcbiAgYXV0b0RldGVjdEdhcCgpIHtcbiAgICBpZiAodGhpcy5fZ2FwICE9PSB1bmRlZmluZWQgfHwgdGhpcy5leHBsaWNpdEdhcCAhPT0gdW5kZWZpbmVkIHx8IHRoaXMuZHJhZ2dhYmxlcy5sZW5ndGggPCAyKSByZXR1cm5cblxuICAgIGNvbnN0IGF4aXMgPSB0aGlzLmF4aXNcbiAgICBjb25zdCBzb3J0ZWQgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuICAgIC8vIERldGFjaGVkIGVsZW1lbnRzIHJlcG9ydCBzaXplIDBcbiAgICBjb25zdCBpbmRleCA9IHNvcnRlZC5maW5kSW5kZXgoKGQsIGkpID0+IGkgPCBzb3J0ZWQubGVuZ3RoIC0gMSAmJiBkLmVsZW1lbnQuaXNDb25uZWN0ZWQpXG4gICAgaWYgKGluZGV4ID09PSAtMSkgcmV0dXJuXG5cbiAgICBjb25zdCBbY3VycmVudCwgbmV4dF0gPSBbc29ydGVkW2luZGV4XSwgc29ydGVkW2luZGV4ICsgMV1dXG4gICAgdGhpcy5fZ2FwID0gbmV4dC5waW5uZWRQb3NpdGlvbltheGlzXSAtIGN1cnJlbnQucGlubmVkUG9zaXRpb25bYXhpc10gLSBjdXJyZW50LmdldFNpemUoKVtheGlzXVxuICB9XG5cbiAgYXV0b0RldGVjdFN0YXJ0UG9zaXRpb24oKSB7XG4gICAgaWYgKHRoaXMuZHJhZ2dhYmxlcy5sZW5ndGggPj0gMSAmJiAhdGhpcy5zdGFydFBvc2l0aW9uKSB7XG4gICAgICB0aGlzLnN0YXJ0UG9zaXRpb24gPSB0aGlzLmRyYWdnYWJsZXNbMF0ucGlubmVkUG9zaXRpb25cbiAgICB9XG4gIH1cblxuICBpbml0RHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIHN1cGVyLmluaXREcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICAgIHRoaXMubGlzdGVuVG8oZHJhZ2dhYmxlLCAnZHJhZzpzdGFydCcsICgpID0+IHRoaXMub25EcmFnU3RhcnQoZHJhZ2dhYmxlKSlcbiAgfVxuXG4gIG9uRHJhZ1N0YXJ0KGRyYWdnYWJsZSkge1xuICAgIHRoaXMuYXV0b0RldGVjdEdhcCgpXG4gICAgdGhpcy5hdXRvRGV0ZWN0U3RhcnRQb3NpdGlvbigpXG4gICAgdGhpcy5jYWNoZWRTb3J0ZWREcmFnZ2FibGVzID0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcbiAgICB0aGlzLmluZGV4T2ZBY3RpdmVEcmFnZ2FibGUgPSB0aGlzLmNhY2hlZFNvcnRlZERyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpXG4gIH1cblxuICBvbk1vdmUoZHJhZ2dhYmxlKSB7XG4gICAgaWYgKHRoaXMuc3dhcHBpbmdEaXNhYmxlZCkgcmV0dXJuXG5cbiAgICBjb25zdCBwcmV2RHJhZ2dhYmxlID0gdGhpcy5jYWNoZWRTb3J0ZWREcmFnZ2FibGVzW3RoaXMuaW5kZXhPZkFjdGl2ZURyYWdnYWJsZSAtIDFdXG4gICAgY29uc3QgbmV4dERyYWdnYWJsZSA9IHRoaXMuY2FjaGVkU29ydGVkRHJhZ2dhYmxlc1t0aGlzLmluZGV4T2ZBY3RpdmVEcmFnZ2FibGUgKyAxXVxuICAgIGNvbnN0IGN1cnJlbnRQb3NpdGlvbiA9IGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvblxuXG4gICAgbGV0IGN1cnJlbnRPcmRlclxuICAgIGxldCB0YXJnZXRJbmRleFxuXG4gICAgaWYodGhpcy5pc01vdmluZ0JhY2t3YXJkKGRyYWdnYWJsZSkgJiYgcHJldkRyYWdnYWJsZSkge1xuICAgICAgY3VycmVudE9yZGVyID0gW3ByZXZEcmFnZ2FibGUsIGRyYWdnYWJsZV0ubWFwKChkKSA9PiBkLnBpbm5lZFBvc2l0aW9uKVxuICAgICAgdGFyZ2V0SW5kZXggPSBpbmRleE9mTmVhcmVzdFBvaW50KGN1cnJlbnRPcmRlciwgZHJhZ2dhYmxlLnBvc2l0aW9uLCAxMDAwMCwgdGhpcy5kaXN0YW5jZUZ1bmMpXG5cbiAgICAgIGlmICh0YXJnZXRJbmRleCA9PT0gMCkge1xuICAgICAgICBpZihkcmFnZ2FibGUuc2hvdWxkVXNlTmF0aXZlRHJhZ0FuZERyb3AoKSkge1xuICAgICAgICAgIGRyYWdnYWJsZS5waW5Qb3NpdGlvbihwcmV2RHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbiA9IHByZXZEcmFnZ2FibGUucGlubmVkUG9zaXRpb24uY2xvbmUoKVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHByZXZOZXdQb3NpdGlvbiA9IHRoaXMubmV4dFBvc2l0aW9uKGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbiwgZHJhZ2dhYmxlKVxuICAgICAgICBwcmV2TmV3UG9zaXRpb25bdGhpcy5jcm9zc0F4aXNdID0gY3VycmVudFBvc2l0aW9uW3RoaXMuY3Jvc3NBeGlzXVxuICAgICAgICBwcmV2RHJhZ2dhYmxlLnBpblBvc2l0aW9uKHByZXZOZXdQb3NpdGlvbiwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICBhcnJheU1vdmUodGhpcy5jYWNoZWRTb3J0ZWREcmFnZ2FibGVzLCB0aGlzLmluZGV4T2ZBY3RpdmVEcmFnZ2FibGUtLSwgdGhpcy5pbmRleE9mQWN0aXZlRHJhZ2dhYmxlKVxuICAgICAgICB0aGlzLm9uTW92ZShkcmFnZ2FibGUpXG4gICAgICAgIHRoaXMuY2hhbmdlZER1cmluZ0l0ZXJhdGlvbiA9IHRydWVcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYodGhpcy5pc01vdmluZ0ZvcndhcmQoZHJhZ2dhYmxlKSAmJiBuZXh0RHJhZ2dhYmxlKSB7XG4gICAgICBjdXJyZW50T3JkZXIgPSBbZHJhZ2dhYmxlLCBuZXh0RHJhZ2dhYmxlXS5tYXAoKGQpID0+IGQucGlubmVkUG9zaXRpb24pXG4gICAgICB0YXJnZXRJbmRleCA9IGluZGV4T2ZOZWFyZXN0UG9pbnQoY3VycmVudE9yZGVyLCBkcmFnZ2FibGUucG9zaXRpb24sIDEwMDAwLCB0aGlzLmRpc3RhbmNlRnVuYylcblxuICAgICAgaWYodGFyZ2V0SW5kZXggPT09IDEpIHtcbiAgICAgICAgbmV4dERyYWdnYWJsZS5waW5Qb3NpdGlvbihkcmFnZ2FibGUucGlubmVkUG9zaXRpb24sIHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSlcbiAgICAgICAgY29uc3QgZHJhZ2dhYmxlTmV3UG9zaXRpb24gPSB0aGlzLm5leHRQb3NpdGlvbihuZXh0RHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uLCBuZXh0RHJhZ2dhYmxlKVxuICAgICAgICBpZihkcmFnZ2FibGUuc2hvdWxkVXNlTmF0aXZlRHJhZ0FuZERyb3AoKSkge1xuICAgICAgICAgIGRyYWdnYWJsZS5waW5Qb3NpdGlvbihkcmFnZ2FibGVOZXdQb3NpdGlvbilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24gPSBkcmFnZ2FibGVOZXdQb3NpdGlvblxuICAgICAgICB9XG4gICAgICAgIGFycmF5TW92ZSh0aGlzLmNhY2hlZFNvcnRlZERyYWdnYWJsZXMsIHRoaXMuaW5kZXhPZkFjdGl2ZURyYWdnYWJsZSsrLCB0aGlzLmluZGV4T2ZBY3RpdmVEcmFnZ2FibGUpXG4gICAgICAgIHRoaXMub25Nb3ZlKGRyYWdnYWJsZSlcbiAgICAgICAgdGhpcy5jaGFuZ2VkRHVyaW5nSXRlcmF0aW9uID0gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGJ1YmJsaW5nKHNvcnRlZERyYWdnYWJsZXMsIGN1cnJlbnREcmFnZ2FibGUpIHtcbiAgICBsZXQgY3VycmVudFBvc2l0aW9uID0gdGhpcy5zdGFydFBvc2l0aW9uLmNsb25lKClcbiAgICBzb3J0ZWREcmFnZ2FibGVzIHx8PSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuXG4gICAgc29ydGVkRHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGlmICghZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uLmNvbXBhcmUoY3VycmVudFBvc2l0aW9uKSkge1xuICAgICAgICBpZiAoZHJhZ2dhYmxlID09PSBjdXJyZW50RHJhZ2dhYmxlICYmICFjdXJyZW50RHJhZ2dhYmxlLnNob3VsZFVzZU5hdGl2ZURyYWdBbmREcm9wKCkpIHtcbiAgICAgICAgICBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24gPSBjdXJyZW50UG9zaXRpb24uY2xvbmUoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRyYWdnYWJsZS5waW5Qb3NpdGlvbihjdXJyZW50UG9zaXRpb24sIChkcmFnZ2FibGUgPT09IGN1cnJlbnREcmFnZ2FibGUpID8gMCA6IHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjdXJyZW50UG9zaXRpb24gPSB0aGlzLm5leHRQb3NpdGlvbihjdXJyZW50UG9zaXRpb24sIGRyYWdnYWJsZSlcbiAgICB9KVxuICB9XG5cbiAgcmVtb3ZlKGRyYWdnYWJsZXMpIHtcbiAgICBpZiAoIShkcmFnZ2FibGVzIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgICBkcmFnZ2FibGVzID0gW2RyYWdnYWJsZXNdXG4gICAgfVxuXG4gICAgLy8gRGV0ZWN0IGxheW91dCBiZWZvcmUgcmVtb3ZhbCwgb3RoZXJ3aXNlIHRoZSBnYXAgaXMgbWVhc3VyZWQgYWNyb3NzIHRoZSBob2xlXG4gICAgdGhpcy5hdXRvRGV0ZWN0R2FwKClcbiAgICB0aGlzLmF1dG9EZXRlY3RTdGFydFBvc2l0aW9uKClcblxuICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB0aGlzLnJlbGVhc2VEcmFnZ2FibGUoZHJhZ2dhYmxlKSlcbiAgICB0aGlzLmRyYWdnYWJsZXMgPSB0aGlzLmRyYWdnYWJsZXMuZmlsdGVyKChkKSA9PiAhZHJhZ2dhYmxlcy5pbmNsdWRlcyhkKSlcblxuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkKSA9PiBkLnN0YXJ0UG9zaXRpb25pbmcoKSlcblxuICAgIGlmKHRoaXMuZHJhZ2dhYmxlcy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmJ1YmJsaW5nKClcbiAgICB9XG4gIH1cblxuICBuZXh0UG9zaXRpb24ocG9zaXRpb24sIGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IG5leHQgPSBwb3NpdGlvbi5jbG9uZSgpXG4gICAgbmV4dFt0aGlzLmF4aXNdID0gcG9zaXRpb25bdGhpcy5heGlzXSArIGRyYWdnYWJsZS5nZXRTaXplKClbdGhpcy5heGlzXSArIHRoaXMuZ2FwXG4gICAgcmV0dXJuIG5leHRcbiAgfVxuXG4gIGlzTW92aW5nQmFja3dhcmQoZHJhZ2dhYmxlKSB7XG4gICAgcmV0dXJuIHRoaXMuYXhpcyA9PT0gJ3gnID8gZHJhZ2dhYmxlLmxlZnREaXJlY3Rpb24gOiBkcmFnZ2FibGUudXBEaXJlY3Rpb25cbiAgfVxuXG4gIGlzTW92aW5nRm9yd2FyZChkcmFnZ2FibGUpIHtcbiAgICByZXR1cm4gdGhpcy5heGlzID09PSAneCcgPyBkcmFnZ2FibGUucmlnaHREaXJlY3Rpb24gOiBkcmFnZ2FibGUuZG93bkRpcmVjdGlvblxuICB9XG5cbiAgZ2V0IGF4aXMoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5heGlzID09PSAneCcgPyAneCcgOiAneSdcbiAgfVxuXG4gIGdldCBjcm9zc0F4aXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXhpcyA9PT0gJ3gnID8gJ3knIDogJ3gnXG4gIH1cblxuICBnZXQgZGlzdGFuY2VGdW5jKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZ2V0RGlzdGFuY2UgfHwgKHRoaXMuYXhpcyA9PT0gJ3gnID8gZ2V0WERpZmZlcmVuY2UgOiBnZXRZRGlmZmVyZW5jZSlcbiAgfVxuXG4gIGdldCBleHBsaWNpdEdhcCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmdhcCA/PyB0aGlzLm9wdGlvbnMudmVydGljYWxHYXBcbiAgfVxuXG4gIGdldCBnYXAoKSB7XG4gICAgaWYgKHRoaXMuZXhwbGljaXRHYXAgIT09IHVuZGVmaW5lZCkgcmV0dXJuIHRoaXMuZXhwbGljaXRHYXBcblxuICAgIHRoaXMuYXV0b0RldGVjdEdhcCgpXG4gICAgcmV0dXJuIHRoaXMuX2dhcCB8fCAwXG4gIH1cblxuICBzZXQgZ2FwKGdhcFZhbHVlKSB7XG4gICAgdGhpcy5vcHRpb25zLmdhcCA9IGdhcFZhbHVlXG4gIH1cblxuICAvLyBEZXByZWNhdGVkIGFsaWFzIGZvciBgZ2FwYFxuICBnZXQgdmVydGljYWxHYXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2FwXG4gIH1cblxuICBzZXQgdmVydGljYWxHYXAoZ2FwVmFsdWUpIHtcbiAgICB0aGlzLmdhcCA9IGdhcFZhbHVlXG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJhbmdlKHN0YXJ0LCBzdG9wLCBzdGVwKSB7XG4gIGNvbnN0IHJlc3VsdCA9IFtdXG4gIGlmICh0eXBlb2Ygc3RvcCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBzdG9wID0gc3RhcnRcbiAgICBzdGFydCA9IDBcbiAgfVxuICBpZiAodHlwZW9mIHN0ZXAgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgc3RlcCA9IDFcbiAgfVxuICBpZiAoKHN0ZXAgPiAwICYmIHN0YXJ0ID49IHN0b3ApIHx8IChzdGVwIDwgMCAmJiBzdGFydCA8PSBzdG9wKSkge1xuICAgIHJldHVybiBbXVxuICB9XG4gIGZvciAobGV0IGkgPSBzdGFydDsgc3RlcCA+IDAgPyBpIDwgc3RvcCA6IGkgPiBzdG9wOyBpICs9IHN0ZXApIHtcbiAgICByZXN1bHQucHVzaChpKVxuICB9XG4gIHJldHVybiByZXN1bHRcbn1cbiIsImltcG9ydCBQb2ludCBmcm9tICcuL3BvaW50J1xuaW1wb3J0IHsgZ2V0RGlzdGFuY2UgfSBmcm9tICcuL2Rpc3RhbmNlcydcblxuZXhwb3J0IGZ1bmN0aW9uIGNsYW1wKG1pbiwgbWF4LCB2YWwpIHtcbiAgcmV0dXJuIE1hdGgubWF4KG1pbiwgTWF0aC5taW4obWF4LCB2YWwpKVxufVxuXG4vL1JldHVybiBjcm9zc2luZyBwb2ludCBvZiB0d28gbGluZXNcbmV4cG9ydCBmdW5jdGlvbiBkaXJlY3RDcm9zc2luZyhMMVAxLCBMMVAyLCBMMlAxLCBMMlAyKSB7XG4gIGxldCB0ZW1wLCBrMSwgazIsIGIxLCBiMiwgeCwgeVxuICBpZiAoTDJQMS54ID09PSBMMlAyLngpIHtcbiAgICB0ZW1wID0gTDJQMVxuICAgIEwyUDEgPSBMMVAxXG4gICAgTDFQMSA9IHRlbXBcbiAgICB0ZW1wID0gTDJQMlxuICAgIEwyUDIgPSBMMVAyXG4gICAgTDFQMiA9IHRlbXBcbiAgfVxuICBpZiAoTDFQMS54ID09PSBMMVAyLngpIHtcbiAgICBrMiA9IChMMlAyLnkgLSBMMlAxLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICBiMiA9IChMMlAyLnggKiBMMlAxLnkgLSBMMlAxLnggKiBMMlAyLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICB4ID0gTDFQMS54XG4gICAgeSA9IHggKiBrMiArIGIyXG4gICAgcmV0dXJuIG5ldyBQb2ludCh4LCB5KVxuICB9IGVsc2Uge1xuICAgIGsxID0gKEwxUDIueSAtIEwxUDEueSkgLyAoTDFQMi54IC0gTDFQMS54KVxuICAgIGIxID0gKEwxUDIueCAqIEwxUDEueSAtIEwxUDEueCAqIEwxUDIueSkgLyAoTDFQMi54IC0gTDFQMS54KVxuICAgIGsyID0gKEwyUDIueSAtIEwyUDEueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgIGIyID0gKEwyUDIueCAqIEwyUDEueSAtIEwyUDEueCAqIEwyUDIueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgIHggPSAoYjEgLSBiMikgLyAoazIgLSBrMSlcbiAgICB5ID0geCAqIGsxICsgYjFcbiAgICByZXR1cm4gbmV3IFBvaW50KHgsIHkpXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kVG9TZWdtZW50KExQMSwgTFAyLCBQKSB7XG4gIGxldCB4LCB5XG4gIHggPSBjbGFtcChNYXRoLm1pbihMUDEueCwgTFAyLngpLCBNYXRoLm1heChMUDEueCwgTFAyLngpLCBQLngpXG4gIGlmICh4ICE9PSBQLngpIHtcbiAgICB5ID0gKHggPT09IExQMS54KSA/IExQMS55IDogTFAyLnlcbiAgICBQID0gbmV3IFBvaW50KHgsIHkpXG4gIH1cblxuICB5ID0gY2xhbXAoTWF0aC5taW4oTFAxLnksIExQMi55KSwgTWF0aC5tYXgoTFAxLnksIExQMi55KSwgUC55KVxuICBpZiAoeSAhPT0gUC55KSB7XG4gICAgeCA9ICh5ID09PSBMUDEueSkgPyBMUDEueCA6IExQMi54XG4gICAgUCA9IG5ldyBQb2ludCh4LCB5KVxuICB9XG5cbiAgcmV0dXJuIFBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kVG9MaW5lKEEsIEIsIFApIHtcbiAgY29uc3QgQVAgPSBuZXcgUG9pbnQoUC54IC0gQS54LCBQLnkgLSBBLnkpLFxuICAgIEFCID0gbmV3IFBvaW50KEIueCAtIEEueCwgQi55IC0gQS55KSxcbiAgICBhYjIgPSBBQi54ICogQUIueCArIEFCLnkgKiBBQi55LFxuICAgIGFwX2FiID0gQVAueCAqIEFCLnggKyBBUC55ICogQUIueSxcbiAgICB0ID0gYXBfYWIgLyBhYjJcbiAgcmV0dXJuIG5ldyBQb2ludChBLnggKyBBQi54ICogdCwgQS55ICsgQUIueSAqIHQpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb2ludE9uTGluZShMUDEsIExQMiwgcGVyY2VudCkge1xuICBjb25zdCBkeCA9IExQMi54IC0gTFAxLngsIGR5ID0gTFAyLnkgLSBMUDEueVxuICByZXR1cm4gbmV3IFBvaW50KExQMS54ICsgcGVyY2VudCAqIGR4LCBMUDEueSArIHBlcmNlbnQgKiBkeSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBvaW50T25MaW5lQnlMZW5naHQoTFAxLCBMUDIsIGxlbmdodCkge1xuICBjb25zdCBkeCA9IExQMi54IC0gTFAxLnhcbiAgY29uc3QgZHkgPSBMUDIueSAtIExQMS55XG4gIGNvbnN0IHBlcmNlbnQgPSBsZW5naHQgLyBnZXREaXN0YW5jZShMUDEsIExQMilcbiAgcmV0dXJuIG5ldyBQb2ludChMUDEueCArIHBlcmNlbnQgKiBkeCwgTFAxLnkgKyBwZXJjZW50ICogZHkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRQb2ludFRvQm91bmRQb2ludHMoYm91bmRwb2ludHMsIHBvaW50LCBpc1JpZ2h0KSB7XG4gIGNvbnN0IHJlc3VsdCA9IGJvdW5kcG9pbnRzLmZpbHRlcigoYlBvaW50KSA9PiB7XG4gICAgcmV0dXJuIGJQb2ludC55ID4gcG9pbnQueSB8fCAoaXNSaWdodCA/IGJQb2ludC54IDwgcG9pbnQueCA6IGJQb2ludC54ID4gcG9pbnQueClcbiAgfSlcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChwb2ludC55IDwgcmVzdWx0W2ldLnkpIHtcbiAgICAgIHJlc3VsdC5zcGxpY2UoaSwgMCwgcG9pbnQpXG4gICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxuICB9XG4gIHJlc3VsdC5wdXNoKHBvaW50KVxuICByZXR1cm4gcmVzdWx0XG59XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9nZW9tZXRyeS9wb2ludCdcbmltcG9ydCB7IGFkZFBvaW50VG9Cb3VuZFBvaW50cyB9IGZyb20gJy4vZ2VvbWV0cnkvYm91bmRzJ1xuXG5pbXBvcnQge1xuICBpbmRleE9mTmVhcmVzdFBvaW50LFxuICBnZXREaXN0YW5jZVxufSBmcm9tICcuL2dlb21ldHJ5L2Rpc3RhbmNlcydcblxuY2xhc3MgQmFzaWNTdHJhdGVneSB7XG4gIGNvbnN0cnVjdG9yKHJlY3RhbmdsZSwgb3B0aW9ucz17fSkge1xuICAgIHRoaXMucmVjdGFuZ2xlID0gcmVjdGFuZ2xlXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9uc1xuICB9XG5cbiAgZ2V0IGJvdW5kUmVjdCAoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGlzLnJlY3RhbmdsZSA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMucmVjdGFuZ2xlKCkgOiB0aGlzLnJlY3RhbmdsZVxuICB9XG59XG5cbmNsYXNzIE5vdENyb3NzaW5nU3RyYXRlZ3kgZXh0ZW5kcyBCYXNpY1N0cmF0ZWd5IHtcbiAgcG9zaXRpb25pbmcgKHJlY3RhbmdsZUxpc3QsIGluZGV4ZXNPZk5ld3MpIHtcbiAgICBjb25zdCBzdGF0aWNSZWN0YW5nbGVJbmRleGVzID0gcmVjdGFuZ2xlTGlzdC5yZWR1Y2UoKGluZGV4ZXMsIF9yZWN0LCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGluZGV4ZXNPZk5ld3MuaW5kZXhPZihpbmRleCkgPT09IC0xKSB7XG4gICAgICAgIGluZGV4ZXMucHVzaChpbmRleClcbiAgICAgIH1cbiAgICAgIHJldHVybiBpbmRleGVzXG4gICAgfSwgW10pXG5cbiAgICBpbmRleGVzT2ZOZXdzLmZvckVhY2goKGluZGV4KSA9PiB7XG4gICAgICBsZXQgcmVjdCA9IHJlY3RhbmdsZUxpc3RbaW5kZXhdXG4gICAgICBsZXQgcmVtb3ZhYmxlID0gZmFsc2VcblxuICAgICAgc3RhdGljUmVjdGFuZ2xlSW5kZXhlcy5mb3JFYWNoKChpbmRleE9mU3RhdGljKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YXRpY1JlY3QgPSByZWN0YW5nbGVMaXN0W2luZGV4T2ZTdGF0aWNdXG4gICAgICAgIHJlY3QgPSBzdGF0aWNSZWN0Lm1vdmVUb0JvdW5kKHJlY3QpXG4gICAgICB9KVxuXG4gICAgICByZW1vdmFibGUgPSBzdGF0aWNSZWN0YW5nbGVJbmRleGVzLnNvbWUoKGluZGV4T2ZTdGF0aWMpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhdGljUmVjdCA9IHJlY3RhbmdsZUxpc3RbaW5kZXhPZlN0YXRpY11cbiAgICAgICAgcmV0dXJuICAhIXN0YXRpY1JlY3QuYW5kKHJlY3QpXG4gICAgICB9KSB8fCByZWN0LmFuZCh0aGlzLmJvdW5kUmVjdCkuZ2V0U3F1YXJlKCkgIT09IHJlY3QuZ2V0U3F1YXJlKClcblxuICAgICAgaWYgKHJlbW92YWJsZSkge1xuICAgICAgICByZWN0LnJlbW92YWJsZSA9IHRydWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMucHVzaChpbmRleClcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiByZWN0YW5nbGVMaXN0XG4gIH1cblxuICBzb3J0aW5nKG9kbERyYWdnYWJsZXNMaXN0LCBuZXdEcmFnZ2FibGVzLCBpbmRleE9mTmV3cykge1xuICAgIGNvbnN0IGRyYWdnYWJsZXMgPSBvZGxEcmFnZ2FibGVzTGlzdC5jb25jYXQobmV3RHJhZ2dhYmxlcylcbiAgICBuZXdEcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgaW5kZXhPZk5ld3MucHVzaChkcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSlcbiAgICB9KVxuICAgIHJldHVybiBkcmFnZ2FibGVzXG4gIH1cbn1cblxuY2xhc3MgRmxvYXRMZWZ0U3RyYXRlZ3kgZXh0ZW5kcyBCYXNpY1N0cmF0ZWd5IHtcbiAgY29uc3RydWN0b3IocmVjdGFuZ2xlLCBvcHRpb25zPXt9KSB7XG4gICAgc3VwZXIocmVjdGFuZ2xlLCBvcHRpb25zKVxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgcmVtb3ZhYmxlOiB0cnVlXG4gICAgfSwgb3B0aW9ucylcblxuICAgIHRoaXMucmFkaXVzID0gb3B0aW9ucy5yYWRpdXMgfHwgODBcblxuICAgIHRoaXMucGFkZGluZ1RvcExlZnQgPSBvcHRpb25zLnBhZGRpbmdUb3BMZWZ0IHx8IG5ldyBQb2ludCgwLCAwKVxuICAgIHRoaXMucGFkZGluZ0JvdHRvbVJpZ2h0ID0gb3B0aW9ucy5wYWRkaW5nQm90dG9tUmlnaHQgfHwgbmV3IFBvaW50KDAsIDApXG4gICAgdGhpcy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgPSBvcHRpb25zLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyB8fCAwXG5cbiAgICB0aGlzLmdldERpc3RhbmNlID0gb3B0aW9ucy5nZXREaXN0YW5jZSB8fCBnZXREaXN0YW5jZVxuICAgIHRoaXMuZ2V0UG9zaXRpb24gPSBvcHRpb25zLmdldFBvc2l0aW9uIHx8ICgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucG9zaXRpb24pXG4gIH1cblxuICBwb3NpdGlvbmluZyhyZWN0YW5nbGVMaXN0LCBfaW5kZXhlc09mTmV3cykge1xuICAgIGNvbnN0IGJvdW5kUmVjdCA9IHRoaXMuYm91bmRSZWN0XG4gICAgY29uc3QgcmVjdFAyID0gYm91bmRSZWN0LmdldFAyKClcbiAgICBsZXQgYm91bmRhcnlQb2ludHMgPSBbYm91bmRSZWN0LnBvc2l0aW9uXVxuXG4gICAgcmVjdGFuZ2xlTGlzdC5mb3JFYWNoKChyZWN0LCByZWN0SW5kZXgpID0+IHtcbiAgICAgIGxldCBwb3NpdGlvbiwgaXNWYWxpZCA9IGZhbHNlXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvdW5kYXJ5UG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHBvc2l0aW9uID0gbmV3IFBvaW50KFxuICAgICAgICAgIGJvdW5kYXJ5UG9pbnRzW2ldLnggKyB0aGlzLnBhZGRpbmdUb3BMZWZ0LngsXG4gICAgICAgICAgaSA+IDAgPyAoYm91bmRhcnlQb2ludHNbaSAtIDFdLnkgKyB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcykgOiAoYm91bmRSZWN0LnBvc2l0aW9uLnkgKyB0aGlzLnBhZGRpbmdUb3BMZWZ0LnkpXG4gICAgICAgIClcblxuICAgICAgICBpc1ZhbGlkID0gKHBvc2l0aW9uLnggKyByZWN0LnNpemUueCA8IHJlY3RQMi54KVxuXG4gICAgICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgcG9zaXRpb24gPSBuZXcgUG9pbnQoXG4gICAgICAgICAgYm91bmRSZWN0LnBvc2l0aW9uLnggKyB0aGlzLnBhZGRpbmdUb3BMZWZ0LngsXG4gICAgICAgICAgYm91bmRhcnlQb2ludHNbYm91bmRhcnlQb2ludHMubGVuZ3RoIC0gMV0ueSArIChyZWN0SW5kZXggPiAwID8gdGhpcy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgOiB0aGlzLnBhZGRpbmdUb3BMZWZ0LnkpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgcmVjdC5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnJlbW92YWJsZSAmJiByZWN0LmdldFAzKCkueSA+IGJvdW5kUmVjdC5nZXRQMygpLnkpIHtcbiAgICAgICAgcmVjdC5yZW1vdmFibGUgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGJvdW5kYXJ5UG9pbnRzID0gYWRkUG9pbnRUb0JvdW5kUG9pbnRzKGJvdW5kYXJ5UG9pbnRzLCByZWN0LmdldFAzKCkuYWRkKHRoaXMucGFkZGluZ0JvdHRvbVJpZ2h0KSlcbiAgICB9KVxuICAgIHJldHVybiByZWN0YW5nbGVMaXN0XG4gIH1cblxuICBzb3J0aW5nKG9kbERyYWdnYWJsZXNMaXN0LCBuZXdEcmFnZ2FibGVzLCBpbmRleE9mTmV3cykge1xuICAgIGNvbnN0IG5ld0xpc3QgPSBvZGxEcmFnZ2FibGVzTGlzdC5jb25jYXQoKVxuICAgIGNvbnN0IGxpc3RPbGRQb3NpdGlvbiA9IG9kbERyYWdnYWJsZXNMaXN0Lm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUuZ2V0UG9zaXRpb24oKSlcbiAgICBuZXdEcmFnZ2FibGVzLmZvckVhY2goKG5ld0RyYWdnYWJsZSkgPT4ge1xuICAgICAgbGV0IGluZGV4ID0gaW5kZXhPZk5lYXJlc3RQb2ludChsaXN0T2xkUG9zaXRpb24sIHRoaXMuZ2V0UG9zaXRpb24obmV3RHJhZ2dhYmxlKSwgdGhpcy5yYWRpdXMsIHRoaXMuZ2V0RGlzdGFuY2UpXG4gICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgIGluZGV4ID0gbmV3TGlzdC5sZW5ndGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluZGV4ID0gbmV3TGlzdC5pbmRleE9mKG9kbERyYWdnYWJsZXNMaXN0W2luZGV4XSlcbiAgICAgIH1cbiAgICAgIG5ld0xpc3Quc3BsaWNlKGluZGV4LCAwLCBuZXdEcmFnZ2FibGUpXG4gICAgfSlcbiAgICBuZXdEcmFnZ2FibGVzLmZvckVhY2goKG5ld0RyYWdnYWJsZSkgPT4ge1xuICAgICAgaW5kZXhPZk5ld3MucHVzaChuZXdMaXN0LmluZGV4T2YobmV3RHJhZ2dhYmxlKSlcbiAgICB9KVxuICAgIHJldHVybiBuZXdMaXN0XG4gIH1cbn1cblxuY2xhc3MgRmxvYXRSaWdodFN0cmF0ZWd5IGV4dGVuZHMgRmxvYXRMZWZ0U3RyYXRlZ3kge1xuICBjb25zdHJ1Y3RvcihyZWN0YW5nbGUsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcihyZWN0YW5nbGUsIG9wdGlvbnMpXG5cbiAgICB0aGlzLnBhZGRpbmdUb3BSaWdodCA9IG9wdGlvbnMucGFkZGluZ1RvcFJpZ2h0IHx8IG5ldyBQb2ludCg1LCA1KVxuICAgIHRoaXMucGFkZGluZ0JvdHRvbUxlZnQgPSBvcHRpb25zLnBhZGRpbmdCb3R0b21MZWZ0IHx8IG5ldyBQb2ludCgwLCAwKVxuICAgIHRoaXMueUdhcEJldHdlZW5EcmFnZ2FibGVzID0gb3B0aW9ucy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgfHwgMFxuXG4gICAgdGhpcy5wYWRkaW5nQm90dG9tTmVnTGVmdCA9IG5ldyBQb2ludCgtdGhpcy5wYWRkaW5nQm90dG9tTGVmdC54LCB0aGlzLnBhZGRpbmdCb3R0b21MZWZ0LnkpXG4gIH1cblxuICBwb3NpdGlvbmluZyhyZWN0YW5nbGVMaXN0LCBfaW5kZXhlc09mTmV3cykge1xuICAgIGNvbnN0IGJvdW5kUmVjdCA9IHRoaXMuYm91bmRSZWN0XG4gICAgbGV0IGJvdW5kYXJ5UG9pbnRzID0gW2JvdW5kUmVjdC5nZXRQMigpXVxuXG4gICAgcmVjdGFuZ2xlTGlzdC5mb3JFYWNoKChyZWN0LCByZWN0SW5kZXgpID0+IHtcbiAgICAgIGxldCBwb3NpdGlvbiwgaXNWYWxpZCA9IGZhbHNlXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvdW5kYXJ5UG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHBvc2l0aW9uID0gbmV3IFBvaW50KFxuICAgICAgICAgIGJvdW5kYXJ5UG9pbnRzW2ldLnggLSByZWN0LnNpemUueCAtIHRoaXMucGFkZGluZ1RvcFJpZ2h0LngsXG4gICAgICAgICAgaSA+IDAgPyAoYm91bmRhcnlQb2ludHNbaSAtIDFdLnkgKyB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcykgOiAoYm91bmRSZWN0LnBvc2l0aW9uLnkgKyB0aGlzLnBhZGRpbmdUb3BSaWdodC55KVxuICAgICAgICApXG5cbiAgICAgICAgaXNWYWxpZCA9IChwb3NpdGlvbi54ID4gcmVjdC5wb3NpdGlvbi54KVxuICAgICAgICBpZiAoaXNWYWxpZCkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICBwb3NpdGlvbiA9IG5ldyBQb2ludChcbiAgICAgICAgICBib3VuZFJlY3QuZ2V0UDIoKS54ICAtIHJlY3Quc2l6ZS54IC0gdGhpcy5wYWRkaW5nVG9wUmlnaHQueCxcbiAgICAgICAgICBib3VuZGFyeVBvaW50c1tib3VuZGFyeVBvaW50cy5sZW5ndGggLSAxXS55ICsgKHJlY3RJbmRleCA+IDAgPyB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyA6IHRoaXMucGFkZGluZ1RvcFJpZ2h0LnkpXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIHJlY3QucG9zaXRpb24gPSBwb3NpdGlvblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZW1vdmFibGUgJiYgcmVjdC5nZXRQNCgpLnkgPiBib3VuZFJlY3QuZ2V0UDQoKS55KSB7XG4gICAgICAgIHJlY3QucmVtb3ZhYmxlID0gdHJ1ZVxuICAgICAgfVxuICAgICAgYm91bmRhcnlQb2ludHMgPSBhZGRQb2ludFRvQm91bmRQb2ludHMoYm91bmRhcnlQb2ludHMsIHJlY3QuZ2V0UDQoKS5hZGQodGhpcy5wYWRkaW5nQm90dG9tTmVnTGVmdCksIHRydWUpXG4gICAgfSlcbiAgICByZXR1cm4gcmVjdGFuZ2xlTGlzdFxuICB9XG59XG5cbmV4cG9ydCB7IE5vdENyb3NzaW5nU3RyYXRlZ3ksIEZsb2F0TGVmdFN0cmF0ZWd5LCBGbG9hdFJpZ2h0U3RyYXRlZ3kgfVxuIiwiaW1wb3J0IFBvaW50IGZyb20gJy4vcG9pbnQnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbmdsZURpZmYoYWxwaGEsIGJldGEpIHtcbiAgY29uc3QgbWluQW5nbGUgPSBNYXRoLm1pbihhbHBoYSwgYmV0YSlcbiAgY29uc3QgbWF4QW5nbGUgPSAgTWF0aC5tYXgoYWxwaGEsIGJldGEpXG4gIHJldHVybiBNYXRoLm1pbihtYXhBbmdsZSAtIG1pbkFuZ2xlLCBtaW5BbmdsZSArIE1hdGguUEkqMiAtIG1heEFuZ2xlKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QW5nbGUocDEsIHAyKSB7XG4gIGNvbnN0IGRpZmYgPSBwMi5zdWIocDEpXG4gIHJldHVybiBub3JtYWxpemVBbmdsZShNYXRoLmF0YW4yKGRpZmYueSwgZGlmZi54KSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvUmFkaWFuKGFuZ2xlKSB7XG4gIHJldHVybiAoKGFuZ2xlICUgMzYwKSAqIE1hdGguUEkgLyAxODApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0RlZ3JlZShhbmdsZSkge1xuICByZXR1cm4gKGFuZ2xlICogMTgwIC8gTWF0aC5QSSkgJSAzNjBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kQW5nbGUobWluLCBtYXgsIHZhbCkge1xuICBsZXQgZG1pbiwgZG1heFxuICBpZiAobWluIDwgbWF4ICYmIHZhbCA+IG1pbiAmJiB2YWwgPCBtYXgpIHtcbiAgICByZXR1cm4gdmFsXG4gIH0gZWxzZSBpZiAobWF4IDwgbWluICYmICh2YWwgPCBtYXggfHwgdmFsID4gbWluKSkge1xuICAgIHJldHVybiB2YWxcbiAgfSBlbHNlIHtcbiAgICBkbWluID0gZ2V0QW5nbGVEaWZmKG1pbiwgdmFsKVxuICAgIGRtYXggPSBnZXRBbmdsZURpZmYobWF4LCB2YWwpXG4gICAgaWYgKGRtaW4gPCBkbWF4KSB7XG4gICAgICByZXR1cm4gbWluXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBtYXhcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE5lYXJlc3RBbmdsZShhcnIsIGFuZ2xlKSB7XG4gIGxldCBpLCB0ZW1wLCBkaWZmID0gTWF0aC5QSSAqIDIsIHZhbHVlXG4gIGZvciAoaSA9IDA7IGkgPCBhcnIubGVuZ3RoO2krKykge1xuICAgIHRlbXAgPSBnZXRBbmdsZURpZmYoYXJyW2ldLCBhbmdsZSlcbiAgICBpZiAoZGlmZiA8IHRlbXApIHtcbiAgICAgIGRpZmYgPSB0ZW1wXG4gICAgICB2YWx1ZSA9IGFycltpXVxuICAgIH1cbiAgfVxuICByZXR1cm4gdmFsdWVcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZUFuZ2xlKHZhbCkge1xuICB3aGlsZSAodmFsIDwgMCkge1xuICAgIHZhbCArPSAyICogTWF0aC5QSVxuICB9XG4gIHdoaWxlICh2YWwgPiAyICogTWF0aC5QSSkge1xuICAgIHZhbCAtPSAyICogTWF0aC5QSVxuICB9XG4gIHJldHVybiB2YWxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBvaW50RnJvbVJhZGlhbFN5c3RlbShhbmdsZSwgbGVuZ3RoLCBjZW50ZXIpIHtcbiAgY2VudGVyID0gY2VudGVyIHx8IG5ldyBQb2ludCgwLCAwKVxuICByZXR1cm4gY2VudGVyLmFkZChuZXcgUG9pbnQobGVuZ3RoICogTWF0aC5jb3MoYW5nbGUpLCBsZW5ndGggKiBNYXRoLnNpbihhbmdsZSkpKVxufVxuIiwiaW1wb3J0IFBvaW50IGZyb20gJy4vZ2VvbWV0cnkvcG9pbnQnXG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gJy4vZ2VvbWV0cnkvcmVjdGFuZ2xlJ1xuaW1wb3J0IHtcbiAgZ2V0UG9pbnRPbkxpbmVCeUxlbmdodCxcbiAgZGlyZWN0Q3Jvc3NpbmcsXG4gIGJvdW5kVG9MaW5lXG59IGZyb20gJy4vZ2VvbWV0cnkvYm91bmRzJ1xuXG5pbXBvcnQge1xuICBnZXRBbmdsZSxcbiAgbm9ybWFsaXplQW5nbGUsXG4gIGJvdW5kQW5nbGUsXG4gIGdldFBvaW50RnJvbVJhZGlhbFN5c3RlbVxufSBmcm9tICcuL2dlb21ldHJ5L2FuZ2xlcydcblxuZXhwb3J0IGNsYXNzIEJvdW5kIHtcbiAgY29uc3RydWN0b3IgKCkge31cblxuICBib3VuZChwb2ludCwgX3NpemUpIHtcbiAgICByZXR1cm4gcG9pbnRcbiAgfVxuXG4gIHJlZnJlc2ggKCkge31cblxuICBzdGF0aWMgYm91bmRpbmcoKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgdGhpcyguLi5hcmd1bWVudHMpXG4gICAgcmV0dXJuIGluc3RhbmNlLmJvdW5kLmJpbmQoaW5zdGFuY2UpXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9SZWN0YW5nbGUgZXh0ZW5kcyBCb3VuZCB7XG4gIGNvbnN0cnVjdG9yKHJlY3RhbmdsZSkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnJlY3RhbmdsZSA9IHJlY3RhbmdsZVxuICB9XG5cbiAgYm91bmQocG9pbnQsIHNpemUpIHtcbiAgICBjb25zdCBjYWxjUG9pbnQgPSBwb2ludC5jbG9uZSgpXG4gICAgY29uc3QgcmVjdFAyID0gdGhpcy5yZWN0YW5nbGUuZ2V0UDMoKVxuXG4gICAgaWYgKHRoaXMucmVjdGFuZ2xlLnBvc2l0aW9uLnggPiBjYWxjUG9pbnQueCkge1xuICAgICAgKGNhbGNQb2ludC54ID0gdGhpcy5yZWN0YW5nbGUucG9zaXRpb24ueClcbiAgICB9XG4gICAgaWYgKHRoaXMucmVjdGFuZ2xlLnBvc2l0aW9uLnkgPiBjYWxjUG9pbnQueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSB0aGlzLnJlY3RhbmdsZS5wb3NpdGlvbi55XG4gICAgfVxuICAgIGlmIChyZWN0UDIueCA8IGNhbGNQb2ludC54ICsgc2l6ZS54KSB7XG4gICAgICBjYWxjUG9pbnQueCA9IHJlY3RQMi54IC0gc2l6ZS54XG4gICAgfVxuICAgIGlmIChyZWN0UDIueSA8IGNhbGNQb2ludC55ICsgc2l6ZS55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHJlY3RQMi55IC0gc2l6ZS55XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhbGNQb2ludFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvRWxlbWVudCBleHRlbmRzIEJvdW5kVG9SZWN0YW5nbGUge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb250YWluZXIpIHtcbiAgICBzdXBlcihSZWN0YW5nbGUuZnJvbUVsZW1lbnQoZWxlbWVudCwgY29udGFpbmVyKSlcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG4gICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXJcbiAgfVxuXG4gIHJlZnJlc2ggKCkge1xuICAgIHRoaXMucmVjdGFuZ2xlID0gUmVjdGFuZ2xlLmZyb21FbGVtZW50KHRoaXMuZWxlbWVudCwgdGhpcy5jb250YWluZXIpXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9MaW5lWCBleHRlbmRzIEJvdW5kIHtcbiAgY29uc3RydWN0b3IoeCwgc3RhcnRZLCBlbmRZKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMueCA9IHhcbiAgICB0aGlzLnN0YXJ0WSA9IHN0YXJ0WVxuICAgIHRoaXMuZW5kWSA9IGVuZFlcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgY2FsY1BvaW50ID0gcG9pbnQuY2xvbmUoKVxuXG4gICAgY2FsY1BvaW50LnggPSB0aGlzLnhcbiAgICBpZiAodGhpcy5zdGFydFkgPiBjYWxjUG9pbnQueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSB0aGlzLnN0YXJ0WVxuICAgIH1cbiAgICBpZiAodGhpcy5lbmRZIDwgY2FsY1BvaW50LnkgKyBzaXplLnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gdGhpcy5lbmRZIC0gc2l6ZS55XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhbGNQb2ludFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvTGluZVkgZXh0ZW5kcyBCb3VuZCB7XG4gIGNvbnN0cnVjdG9yKHksIHN0YXJ0WCwgZW5kWCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnkgPSB5XG4gICAgdGhpcy5zdGFydFggPSBzdGFydFhcbiAgICB0aGlzLmVuZFggPSBlbmRYXG4gIH1cblxuICBib3VuZChwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IGNhbGNQb2ludCA9IHBvaW50LmNsb25lKClcbiAgICBjYWxjUG9pbnQueSA9IHRoaXMueVxuICAgIGlmICh0aGlzLnN0YXJ0WCA+IGNhbGNQb2ludC54KSB7XG4gICAgICBjYWxjUG9pbnQueCA9IHRoaXMuc3RhcnRYXG4gICAgfVxuICAgIGlmICh0aGlzLmVuZFggPCBjYWxjUG9pbnQueCArIHNpemUueCkge1xuICAgICAgY2FsY1BvaW50LnggPSB0aGlzLmVuZFggLSBzaXplLnhcbiAgICB9XG4gICAgcmV0dXJuIGNhbGNQb2ludFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvTGluZSBleHRlbmRzIEJvdW5kIHtcbiAgY29uc3RydWN0b3Ioc3RhcnRQb2ludCwgZW5kUG9pbnQpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5zdGFydFBvaW50ID0gc3RhcnRQb2ludFxuICAgIHRoaXMuZW5kUG9pbnQgPSBlbmRQb2ludFxuICAgIGNvbnN0IGFscGhhID0gTWF0aC5hdGFuMihlbmRQb2ludC55IC0gc3RhcnRQb2ludC55LCBlbmRQb2ludC54IC0gc3RhcnRQb2ludC54KVxuICAgIGNvbnN0IGJldGEgPSBhbHBoYSArIE1hdGguUEkgLyAyXG4gICAgdGhpcy5zb21lSyA9IDEwXG4gICAgdGhpcy5jb3NCZXRhID0gTWF0aC5jb3MoYmV0YSlcbiAgICB0aGlzLnNpbkJldGEgPSBNYXRoLnNpbihiZXRhKVxuICB9XG5cbiAgYm91bmQocG9pbnQsIHNpemUpIHtcbiAgICBjb25zdCBwb2ludDIgPSBuZXcgUG9pbnQoXG4gICAgICBwb2ludC54ICsgdGhpcy5zb21lSyAqIHRoaXMuY29zQmV0YSxcbiAgICAgIHBvaW50LnkgKyB0aGlzLnNvbWVLICogdGhpcy5zaW5CZXRhXG4gICAgKVxuXG4gICAgY29uc3QgbmV3RW5kUG9pbnQgPSBnZXRQb2ludE9uTGluZUJ5TGVuZ2h0KHRoaXMuZW5kUG9pbnQsIHRoaXMuc3RhcnRQb2ludCwgc2l6ZS54KVxuICAgIGNvbnN0IHBvaW50Q3Jvc3NpbmcgPSBkaXJlY3RDcm9zc2luZyh0aGlzLnN0YXJ0UG9pbnQsIHRoaXMuZW5kUG9pbnQsIHBvaW50LCBwb2ludDIpXG5cbiAgICByZXR1cm4gYm91bmRUb0xpbmUodGhpcy5zdGFydFBvaW50LCBuZXdFbmRQb2ludCwgcG9pbnRDcm9zc2luZylcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb0NpcmNsZSBleHRlbmRzIEJvdW5kIHtcbiAgY29uc3RydWN0b3IoY2VudGVyLCByYWRpdXMpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5jZW50ZXIgPSBjZW50ZXJcbiAgICB0aGlzLnJhZGl1cyA9IHJhZGl1c1xuICB9XG5cbiAgYm91bmQocG9pbnQsIF9zaXplKSB7XG4gICAgcmV0dXJuIGdldFBvaW50T25MaW5lQnlMZW5naHQodGhpcy5jZW50ZXIsIHBvaW50LCB0aGlzLnJhZGl1cylcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb0FyYyBleHRlbmRzIEJvdW5kVG9DaXJjbGUge1xuICBjb25zdHJ1Y3RvcihjZW50ZXIsIHJhZGl1cywgc3RhcnRBbmdsZSwgZW5kQW5nbGUpIHtcbiAgICBzdXBlcihjZW50ZXIsIHJhZGl1cylcbiAgICB0aGlzLl9zdGFydEFuZ2xlID0gc3RhcnRBbmdsZVxuICAgIHRoaXMuX2VuZEFuZ2xlID0gZW5kQW5nbGVcbiAgfVxuXG4gIHN0YXJ0QW5nbGUoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGlzLl9zdGFydEFuZ2xlID09PSAnZnVuY3Rpb24nID8gdGhpcy5fc3RhcnRBbmdsZSgpIDogdGhpcy5fc3RhcnRBbmdsZVxuICB9XG5cbiAgZW5kQW5nbGUoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGlzLl9lbmRBbmdsZSA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMuX2VuZEFuZ2xlKCkgOiB0aGlzLl9lbmRBbmdsZVxuICB9XG5cbiAgYm91bmQocG9pbnQsIF9zaXplKSB7XG4gICAgbGV0IGFuZ2xlID0gZ2V0QW5nbGUodGhpcy5jZW50ZXIsIHBvaW50KVxuICAgIGFuZ2xlID0gbm9ybWFsaXplQW5nbGUoYW5nbGUpXG4gICAgYW5nbGUgPSBib3VuZEFuZ2xlKHRoaXMuc3RhcnRBbmdsZSgpLCB0aGlzLmVuZEFuZ2xlKCksIGFuZ2xlKVxuICAgIHJldHVybiBnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oYW5nbGUsIHRoaXMucmFkaXVzLCB0aGlzLmNlbnRlcilcbiAgfVxufVxuIiwiaW1wb3J0IHJhbmdlIGZyb20gJy4vdXRpbHMvcmFuZ2UuanMnXG5pbXBvcnQgcmVtb3ZlSXRlbSBmcm9tICcuL3V0aWxzL3JlbW92ZS1hcnJheS1pdGVtJ1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50RW1pdHRlcidcbmltcG9ydCBkaXNwYXRjaERvbUV2ZW50IGZyb20gJy4vdXRpbHMvZGlzcGF0Y2gtZG9tLWV2ZW50J1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tICcuL2dlb21ldHJ5L3JlY3RhbmdsZSdcbmltcG9ydCB7IHRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3RvcnkgfSBmcm9tICcuL2dlb21ldHJ5L2Rpc3RhbmNlcydcbmltcG9ydCB7IHNjb3BlcywgY3VycmVudFNjb3BlIH0gZnJvbSAnLi9zY29wZSdcblxuaW1wb3J0IHsgRmxvYXRMZWZ0U3RyYXRlZ3kgfSBmcm9tICcuL3Bvc2l0aW9uaW5nJ1xuaW1wb3J0IHsgQm91bmRUb0VsZW1lbnQgfSBmcm9tICcuL2JvdW5kaW5nJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXJnZXQgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBkcmFnZ2FibGVzLCBvcHRpb25zID0ge30pIHtcbiAgICBzdXBlcihvcHRpb25zKVxuICAgIGNvbnN0IHRhcmdldCA9IHRoaXNcblxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgdGltZUVuZDogMjAwLFxuICAgICAgdGltZUV4Y2FuZ2U6IDQwMFxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0aGlzLnBvc2l0aW9uaW5nU3RyYXRlZ3kgPSBvcHRpb25zLnN0cmF0ZWd5IHx8IG5ldyBGbG9hdExlZnRTdHJhdGVneShcbiAgICAgIHRoaXMuZ2V0UmVjdGFuZ2xlLmJpbmQodGhpcyksXG4gICAgICB7XG4gICAgICAgIHJhZGl1czogODAsXG4gICAgICAgIGdldERpc3RhbmNlOiB0cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5KHsgeDogMSwgeTogNCB9KSxcbiAgICAgICAgcmVtb3ZhYmxlOiB0cnVlXG4gICAgICB9XG4gICAgKVxuXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIHRoaXMucmVtb3ZlT25Nb3ZlU3Vic2NyaXB0aW9ucyA9IG5ldyBNYXAoKVxuICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUudGFyZ2V0cy5wdXNoKHRhcmdldCkpXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gZHJhZ2dhYmxlc1xuXG4gICAgY3VycmVudFNjb3BlKCkuYWRkVGFyZ2V0KHRoaXMpXG5cbiAgICB0aGlzLnN0YXJ0Qm91bmRpbmcoKVxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBzdGFydEJvdW5kaW5nKCkge1xuICAgIHRoaXMuYm91bmQgPSB0aGlzLm9wdGlvbnMuYm91bmQgfHwgQm91bmRUb0VsZW1lbnQuYm91bmRpbmcodGhpcy5lbGVtZW50KVxuICB9XG5cbiAgcG9zaXRpb25pbmcgKGRyYWdnYWJsZXMsIGluZGV4ZXNPZk5ldykge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uaW5nU3RyYXRlZ3kucG9zaXRpb25pbmcoZHJhZ2dhYmxlcywgaW5kZXhlc09mTmV3KVxuICB9XG5cbiAgc29ydGluZyAob2xkRHJhZ2dhYmxlcywgbmV3RHJhZ2dhYmxlcywgaW5kZXhPZk5ld3MpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbmluZ1N0cmF0ZWd5LnNvcnRpbmcob2xkRHJhZ2dhYmxlcywgbmV3RHJhZ2dhYmxlcywgaW5kZXhPZk5ld3MpXG4gIH1cblxuICBpbml0KCkge1xuICAgIGxldCByZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXdcblxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzID0gdGhpcy5kcmFnZ2FibGVzLmZpbHRlcigoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBsZXQgZWxlbWVudCA9IGRyYWdnYWJsZS5lbGVtZW50LnBhcmVudE5vZGVcbiAgICAgIHdoaWxlIChlbGVtZW50KSB7XG4gICAgICAgIGlmIChlbGVtZW50ID09PSB0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGVcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH0pXG5cbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMubGVuZ3RoKSB7XG4gICAgICBpbmRleGVzT2ZOZXcgPSByYW5nZSh0aGlzLmlubmVyRHJhZ2dhYmxlcy5sZW5ndGgpXG4gICAgICByZWN0YW5nbGVzID0gdGhpcy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgICB9KSwgaW5kZXhlc09mTmV3KVxuICAgICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXcpXG4gICAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHRoaXMuZW1pdFRhcmdldEV2ZW50KCdhZGQnLCBkcmFnZ2FibGUpKVxuICAgIH1cbiAgfVxuXG4gIGdldFJlY3RhbmdsZSgpIHtcbiAgICByZXR1cm4gUmVjdGFuZ2xlLmZyb21FbGVtZW50KHRoaXMuZWxlbWVudCwgdGhpcy5jb250YWluZXIsIHRydWUpXG4gIH1cblxuICBjYXRjaERyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmNhdGNoRHJhZ2dhYmxlKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmNhdGNoRHJhZ2dhYmxlKHRoaXMsIGRyYWdnYWJsZSlcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGFyZ2V0UmVjdGFuZ2xlID0gdGhpcy5nZXRSZWN0YW5nbGUoKVxuICAgICAgY29uc3QgZHJhZ2dhYmxlU3F1YXJlID0gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpLmdldFNxdWFyZSgpXG5cbiAgICAgIHJldHVybiBkcmFnZ2FibGVTcXVhcmUgPCB0YXJnZXRSZWN0YW5nbGUuZ2V0U3F1YXJlKClcbiAgICAgICAgICAgICAgJiYgdGFyZ2V0UmVjdGFuZ2xlLmluY2x1ZGVQb2ludChkcmFnZ2FibGUuZ2V0Q2VudGVyKCkpXG4gICAgfVxuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UmVjdGFuZ2xlKCkucG9zaXRpb25cbiAgfVxuXG4gIGdldFNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UmVjdGFuZ2xlKCkuc2l6ZVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICBzY29wZXMuZm9yRWFjaCgoc2NvcGUpID0+IHJlbW92ZUl0ZW0oc2NvcGUudGFyZ2V0cywgdGhpcykpXG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgfSksIFtdKVxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgW10sIDApXG4gIH1cblxuICBvbkVuZChkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBuZXdEcmFnZ2FibGVzSW5kZXggPSBbXVxuXG4gICAgaWYgKHRoaXMuZ2V0UmVjdGFuZ2xlKCkuaW5jbHVkZVBvaW50KGRyYWdnYWJsZS5nZXRDZW50ZXIoKSkpIHtcbiAgICAgIGRyYWdnYWJsZS5wb3NpdGlvbiA9IHRoaXMuYm91bmQoZHJhZ2dhYmxlLnBvc2l0aW9uLCBkcmFnZ2FibGUuZ2V0U2l6ZSgpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICB0aGlzLmVtaXRUYXJnZXRFdmVudCgnYmVmb3JlQWRkJywgZHJhZ2dhYmxlKVxuXG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMgPSB0aGlzLnNvcnRpbmcodGhpcy5pbm5lckRyYWdnYWJsZXMsIFtkcmFnZ2FibGVdLCBuZXdEcmFnZ2FibGVzSW5kZXgpXG4gICAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgbmV3RHJhZ2dhYmxlc0luZGV4KVxuXG4gICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBuZXdEcmFnZ2FibGVzSW5kZXgpXG4gICAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTEpIHtcbiAgICAgIHRoaXMuYWRkUmVtb3ZlT25Nb3ZlKGRyYWdnYWJsZSlcbiAgICB9XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIHNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIGluZGV4ZXNPZk5ldywgdGltZSkge1xuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnNsaWNlKDApLmZvckVhY2goKGRyYWdnYWJsZSwgaSkgPT4ge1xuICAgICAgY29uc3QgcmVjdCA9IHJlY3RhbmdsZXNbaV0sXG4gICAgICAgIHRpbWVFbmQgPSB0aW1lIHx8IHRpbWUgPT09IDAgPyB0aW1lIDogaW5kZXhlc09mTmV3LmluZGV4T2YoaSkgIT09IC0xID8gdGhpcy5vcHRpb25zLnRpbWVFbmQgOiB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2VcblxuICAgICAgaWYgKHJlY3QucmVtb3ZhYmxlKSB7XG4gICAgICAgIGRyYWdnYWJsZS5tb3ZlKGRyYWdnYWJsZS5pbml0aWFsUG9zaXRpb24sIHRpbWVFbmQsIHRydWUsIHRydWUpXG4gICAgICAgIHRoaXMuc3RvcFJlbW92ZU9uTW92ZShkcmFnZ2FibGUpXG4gICAgICAgIHJlbW92ZUl0ZW0odGhpcy5pbm5lckRyYWdnYWJsZXMsIGRyYWdnYWJsZSlcbiAgICAgICAgdGhpcy5lbWl0VGFyZ2V0RXZlbnQoJ3JlbW92ZScsIGRyYWdnYWJsZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRyYWdnYWJsZS5tb3ZlKHJlY3QucG9zaXRpb24sIHRpbWVFbmQsIHRydWUsIHRydWUpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGFkZChkcmFnZ2FibGUsIHRpbWUpIHtcbiAgICBjb25zdCBuZXdEcmFnZ2FibGVzSW5kZXggPSB0aGlzLmlubmVyRHJhZ2dhYmxlcy5sZW5ndGhcblxuICAgIHRoaXMuZW1pdFRhcmdldEV2ZW50KCdiZWZvcmVBZGQnLCBkcmFnZ2FibGUpXG5cbiAgICB0aGlzLnB1c2hJbm5lckRyYWdnYWJsZShkcmFnZ2FibGUpXG4gICAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgbmV3RHJhZ2dhYmxlc0luZGV4LCBkcmFnZ2FibGUpXG5cbiAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIFtuZXdEcmFnZ2FibGVzSW5kZXhdLCB0aW1lIHx8IDApXG4gICAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTEpIHtcbiAgICAgIHRoaXMuYWRkUmVtb3ZlT25Nb3ZlKGRyYWdnYWJsZSlcbiAgICB9XG4gIH1cblxuICBwdXNoSW5uZXJEcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKT09PS0xKSB7XG4gICAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5wdXNoKGRyYWdnYWJsZSlcbiAgICB9XG4gIH1cblxuICBhZGRSZW1vdmVPbk1vdmUoZHJhZ2dhYmxlKSB7XG4gICAgdGhpcy5zdG9wUmVtb3ZlT25Nb3ZlKGRyYWdnYWJsZSlcbiAgICB0aGlzLnJlbW92ZU9uTW92ZVN1YnNjcmlwdGlvbnMuc2V0KGRyYWdnYWJsZSwgZHJhZ2dhYmxlLm9uKCdkcmFnOm1vdmUnLCAoKSA9PiB0aGlzLnJlbW92ZShkcmFnZ2FibGUpKSlcblxuICAgIHRoaXMuZW1pdFRhcmdldEV2ZW50KCdhZGQnLCBkcmFnZ2FibGUpXG4gIH1cblxuICBzdG9wUmVtb3ZlT25Nb3ZlKGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IHVuc3Vic2NyaWJlID0gdGhpcy5yZW1vdmVPbk1vdmVTdWJzY3JpcHRpb25zLmdldChkcmFnZ2FibGUpXG4gICAgaWYgKHVuc3Vic2NyaWJlKSB7XG4gICAgICB1bnN1YnNjcmliZSgpXG4gICAgICB0aGlzLnJlbW92ZU9uTW92ZVN1YnNjcmlwdGlvbnMuZGVsZXRlKGRyYWdnYWJsZSlcbiAgICB9XG4gIH1cblxuICByZW1vdmUoZHJhZ2dhYmxlKSB7XG4gICAgdGhpcy5zdG9wUmVtb3ZlT25Nb3ZlKGRyYWdnYWJsZSlcblxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpXG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuc3BsaWNlKGluZGV4LCAxKVxuXG4gICAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgW10pXG5cbiAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIFtdKVxuICAgIHRoaXMuZW1pdFRhcmdldEV2ZW50KCdyZW1vdmUnLCBkcmFnZ2FibGUpXG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5tb3ZlKGRyYWdnYWJsZS5pbml0aWFsUG9zaXRpb24sIDAsIHRydWUsIHRydWUpXG4gICAgICB0aGlzLnN0b3BSZW1vdmVPbk1vdmUoZHJhZ2dhYmxlKVxuICAgICAgdGhpcy5lbWl0VGFyZ2V0RXZlbnQoJ3JlbW92ZScsIGRyYWdnYWJsZSlcbiAgICB9KVxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzID0gW11cbiAgfVxuXG4gIGdldFNvcnRlZERyYWdnYWJsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnNsaWNlKClcbiAgfVxuXG4gIGVtaXRUYXJnZXRFdmVudCh0eXBlLCBkcmFnZ2FibGUpIHtcbiAgICB0aGlzLmVtaXQoYHRhcmdldDoke3R5cGV9YCwgZHJhZ2dhYmxlKVxuXG4gICAgaWYgKHRoaXMuZG9tRXZlbnRzKSB7XG4gICAgICBjb25zdCBkb21UeXBlID0gdHlwZS5yZXBsYWNlKC9bQS1aXS9nLCAobGV0dGVyKSA9PiBgLSR7bGV0dGVyLnRvTG93ZXJDYXNlKCl9YClcbiAgICAgIGRpc3BhdGNoRG9tRXZlbnQodGhpcy5lbGVtZW50LCBgZHJhZ2VlOnRhcmdldC0ke2RvbVR5cGV9YCwgeyB0YXJnZXQ6IHRoaXMsIGRyYWdnYWJsZSB9KVxuICAgIH1cbiAgfVxuXG4gIGdldCBjb250YWluZXIoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9jb250YWluZXIgPSB0aGlzLl9jb250YWluZXIgfHwgdGhpcy5vcHRpb25zLmNvbnRhaW5lciB8fCB0aGlzLm9wdGlvbnMucGFyZW50IHx8IHRoaXMuZWxlbWVudC5vZmZzZXRQYXJlbnQpXG4gIH1cblxuICBnZXQgZG9tRXZlbnRzKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZG9tRXZlbnRzICE9PSBmYWxzZVxuICB9XG59XG5cbiJdLCJuYW1lcyI6WyJnZXRQYXJlbnRzQ2hhaW4iLCJjaGlsZEVsZW1lbnQiLCJyb290RWxlbWVudCIsImNoYWluIiwiZWxlbWVudCIsInBhcmVudE5vZGUiLCJ1bnNoaWZ0IiwiUG9pbnQiLCJjb25zdHJ1Y3RvciIsIngiLCJ5IiwiYWRkIiwicCIsInN1YiIsIm11bHQiLCJrIiwibmVnYXRpdmUiLCJjb21wYXJlIiwiY2xvbmUiLCJ0b1N0cmluZyIsImVsZW1lbnRPZmZzZXQiLCJwYXJlbnQiLCJvZmZzZXRQYXJlbnQiLCJvZmZzZXRMZWZ0IiwiY2xpZW50TGVmdCIsIm9mZnNldFRvcCIsImNsaWVudFRvcCIsImNvbnNpZGVyT2Zmc2V0RWxlbWVudHMiLCJwb3AiLCJyZWR1Y2UiLCJzdW0iLCJlbGVtZW50Qm91bmRpbmdPZmZzZXQiLCJlbGVtZW50UmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInBhcmVudFJlY3QiLCJsZWZ0IiwidG9wIiwiZWxlbWVudFNpemUiLCJ3aWR0aCIsImhlaWdodCIsIlJlY3RhbmdsZSIsInBvc2l0aW9uIiwic2l6ZSIsImdldFAxIiwiZ2V0UDIiLCJnZXRQMyIsImdldFA0IiwiZ2V0Q2VudGVyIiwib3IiLCJyZWN0IiwiTWF0aCIsIm1pbiIsIm1heCIsImFuZCIsImluY2x1ZGVQb2ludCIsImluY2x1ZGVSZWN0YW5nbGUiLCJyZWN0YW5nbGUiLCJtb3ZlVG9Cb3VuZCIsImF4aXMiLCJzZWxBeGlzIiwiY3Jvc3NSZWN0YW5nbGUiLCJ0aGlzQ2VudGVyIiwicmVjdENlbnRlciIsInNpZ24iLCJvZmZzZXQiLCJnZXRTcXVhcmUiLCJzdHlsZUFwcGx5IiwiZWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzdHlsZSIsImdyb3d0aCIsImdldE1pblNpZGUiLCJmcm9tRWxlbWVudCIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsImlzQ29uc2lkZXJUcmFuc2xhdGUiLCJFdmVudEVtaXR0ZXIiLCJvcHRpb25zIiwiZXZlbnRzIiwib24iLCJldmVudE5hbWUiLCJmbiIsIk9iamVjdCIsImVudHJpZXMiLCJlbWl0IiwiaW50ZXJydXB0ZWQiLCJfbGVuIiwiYXJncyIsIkFycmF5IiwiX2tleSIsImZ1bmMiLCJzbGljZSIsImludGVycnVwdCIsImxpc3RlbmVycyIsInB1c2giLCJvZmYiLCJwcmVwZW5kT24iLCJvbmNlIiwiX3RoaXMiLCJ3cmFwcGVyIiwibGlzdGVuZXIiLCJpbmRleCIsImZpbmRJbmRleCIsInNwbGljZSIsInVuc3Vic2NyaWJlIiwicmVzZXRFbWl0dGVyIiwicmVzZXRPbiIsImFycmF5IiwidmFsIiwiaSIsInNjb3BlcyIsInNjb3BlU3RhY2siLCJTY29wZSIsImRyYWdnYWJsZXMiLCJ0YXJnZXRzIiwiZm9yRWFjaCIsInNjb3BlIiwiZHJhZ2dhYmxlIiwicmVsZWFzZURyYWdnYWJsZSIsInRhcmdldCIsInJlbW92ZUl0ZW0iLCJkcmFnRW5kQWN0aW9uUmVsZWFzZXMiLCJNYXAiLCJ0aW1lRW5kIiwiaW5pdCIsImluaXREcmFnZ2FibGUiLCJhZGREcmFnZ2FibGUiLCJzZXQiLCJvdmVycmlkZURyYWdFbmRBY3Rpb24iLCJvbkVuZCIsInJlbGVhc2UiLCJnZXQiLCJkZWxldGUiLCJhZGRUYXJnZXQiLCJzaG90VGFyZ2V0cyIsImZpbHRlciIsImluZGV4T2YiLCJjYXRjaERyYWdnYWJsZSIsInNvcnQiLCJhIiwiYiIsImdldFJlY3RhbmdsZSIsInBpblBvc2l0aW9uIiwiaW5pdGlhbFBvc2l0aW9uIiwicmVzZXQiLCJyZWZyZXNoIiwicG9zaXRpb25zIiwibWFwIiwiaW5uZXJEcmFnZ2FibGVzIiwibWVzc2FnZSIsInRhcmdldEluZGV4ZXMiLCJkZWZhdWx0U2NvcGUiLCJjdXJyZW50U2NvcGUiLCJjYWxsIiwidGhyb3R0bGUiLCJ3YWl0IiwibGFzdFRpbWUiLCJleGVjdXRlZEZ1bmN0aW9uIiwiY29udGV4dCIsIm5vdyIsIkRhdGUiLCJhcHBseSIsImRpc3BhdGNoRG9tRXZlbnQiLCJkZXRhaWwiLCJkaXNwYXRjaEV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJidWJibGVzIiwidGhyb3R0bGVkRHJhZ092ZXIiLCJjYWxsYmFjayIsImR1cmF0aW9uIiwidGhyb3R0bGVkQ2FsbGJhY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicGFzc2l2ZUZhbHNlIiwicGFzc2l2ZSIsImlzVG91Y2giLCJuYXZpZ2F0b3IiLCJtYXhUb3VjaFBvaW50cyIsIm1vdXNlRXZlbnRzIiwic3RhcnQiLCJtb3ZlIiwiZW5kIiwidG91Y2hFdmVudHMiLCJ0cmFuc2Zvcm1Qcm9wZXJ0eSIsInRyYW5zaXRpb25Qcm9wZXJ0eSIsImdldFRvdWNoQnlJRCIsInRvdWNoSWQiLCJjaGFuZ2VkVG91Y2hlcyIsImlkZW50aWZpZXIiLCJwcmV2ZW50RG91YmxlSW5pdCIsInNvbWUiLCJleGlzdGluZyIsImNvcHlTdHlsZXMiLCJzb3VyY2UiLCJkZXN0aW5hdGlvbiIsImNzIiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImtleSIsImNoaWxkcmVuIiwiRHJhZ2dhYmxlIiwiX2RyYWdFbmRBY3Rpb25zIiwiX2VuYWJsZSIsInN0YXJ0Qm91bmRpbmciLCJzdGFydFBvc2l0aW9uaW5nIiwic3RhcnRMaXN0ZW5pbmciLCJib3VuZGluZyIsImJvdW5kIiwicG9pbnQiLCJfc2V0RGVmYXVsdFRyYW5zaXRpb24iLCJpc0NvbnNpZGVyVHJhbnNmb3JtT2Zmc2V0IiwiY29udGFpbmVyIiwicGlubmVkUG9zaXRpb24iLCJfZHJhZ1N0YXJ0IiwiZHJhZ1N0YXJ0IiwiX2RyYWdNb3ZlIiwiZHJhZ01vdmUiLCJfZHJhZ0VuZCIsImRyYWdFbmQiLCJfbmF0aXZlRHJhZ1N0YXJ0IiwibmF0aXZlRHJhZ1N0YXJ0IiwiX25hdGl2ZURyYWdPdmVyIiwibmF0aXZlRHJhZ092ZXIiLCJkcmFnT3ZlclRocm90dGxlRHVyYXRpb24iLCJfbmF0aXZlRHJhZ0VuZCIsIm5hdGl2ZURyYWdFbmQiLCJfbmF0aXZlRHJvcCIsIm5hdGl2ZURyb3AiLCJfc2Nyb2xsIiwib25TY3JvbGwiLCJoYW5kbGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImdldFNpemUiLCJnZXRQb3NpdGlvbiIsIl90cmFuc2Zvcm1Qb3NpdGlvbiIsIl9zZXRUcmFuc2l0aW9uIiwidGltZSIsInRyYW5zaXRpb24iLCJ0cmFuc2l0aW9uQ3NzIiwidGVzdCIsInJlcGxhY2UiLCJfc2V0VHJhbnNsYXRlIiwidHJhbnNsYXRlQ3NzIiwidHJhbnNmb3JtIiwic2hvdWxkUmVtb3ZlWmVyb1RyYW5zbGF0ZSIsImlzU2lsZW50IiwiZW1pdERyYWdFdmVudCIsInNpbGVudCIsInJlc2V0UG9zaXRpb25Ub0luaXRpYWwiLCJyZWZyZXNoUG9zaXRpb24iLCJzZXRQb3NpdGlvbiIsImRldGVybWluZURpcmVjdGlvbiIsIl9wcmV2aW91c0RpcmVjdGlvblBvc2l0aW9uIiwiX3N0YXJ0UG9zaXRpb24iLCJsZWZ0RGlyZWN0aW9uIiwicmlnaHREaXJlY3Rpb24iLCJ1cERpcmVjdGlvbiIsImRvd25EaXJlY3Rpb24iLCJzZWVtc1Njcm9sbGluZyIsIl9zdGFydFRvdWNoVGltZXN0YW1wIiwidG91Y2hEcmFnZ2luZ1RocmVzaG9sZCIsInNob3VsZFVzZU5hdGl2ZURyYWdBbmREcm9wIiwiaXNUb3VjaEV2ZW50IiwibmF0aXZlRHJhZ0FuZERyb3AiLCJlbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3BPblRvdWNoIiwic3RvcFByb3BhZ2F0aW9uT25EcmFnU3RhcnQiLCJzdG9wUHJvcGFnYXRpb24iLCJUb3VjaEV2ZW50IiwidG91Y2hQb2ludCIsIl9zdGFydFRvdWNoUG9pbnQiLCJwYWdlWCIsImNsaWVudFgiLCJwYWdlWSIsImNsaWVudFkiLCJfdG91Y2hJZCIsIl9zdGFydFdpbmRvd1Njcm9sbFBvaW50Iiwid2luZG93U2Nyb2xsUG9pbnQiLCJfc3RhcnRTY3JvbGxFbGVtZW50c09mZnNldCIsInNjcm9sbEVsZW1lbnRzT2Zmc2V0IiwiSFRNTElucHV0RWxlbWVudCIsImZvY3VzIiwiX3N0YXJ0UGFyZW50c1Njcm9sbE9mZnNldCIsInBhcmVudHNTY3JvbGxPZmZzZXQiLCJlbXVsYXRlT25GaXJzdE1vdmUiLCJjYW5jZWxEcmFnZ2luZyIsImVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcCIsImNhbmNlbEVtdWxhdGlvbiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzY3JvbGxFbGVtZW50cyIsImRyYWdTdGFydFRocmVzaG9sZCIsIl9kcmFnU3RhcnRQZW5kaW5nIiwidG91Y2giLCJkeCIsImR5Iiwic3FydCIsImlzRHJhZ2dpbmciLCJjbGFzc0xpc3QiLCJkcmFnRW5kQWN0aW9uIiwic2V0VGltZW91dCIsInJlbW92ZSIsIl9ldmVudCIsImRhdGFUcmFuc2ZlciIsInNldERhdGEiLCJlZmZlY3RBbGxvd2VkIiwiZHJvcEVmZmVjdCIsInJlbW92ZUF0dHJpYnV0ZSIsImNvbnRhaW5lclJlY3QiLCJjbG9uZWRFbGVtZW50IiwiY2xvbmVOb2RlIiwiYm9keSIsImFwcGVuZENoaWxkIiwiZW11bGF0aW9uRHJhZ2dhYmxlIiwiZG9tRXZlbnRzIiwiZHJhZzptb3ZlIiwiY29udGFpbmVyUmVjdFBvaW50IiwiZHJhZzplbmQiLCJkZXN0cm95IiwicmVtb3ZlQ2hpbGQiLCJ0eXBlIiwiYWN0aW9uIiwiX2NvbnRhaW5lciIsIl9oYW5kbGVyIiwiY29uc2lkZXJUcmFuc2Zvcm1PZmZzZXQiLCJzY3JvbGxYIiwic2Nyb2xsWSIsInNjcm9sbFJvb3RDb250YWluZXIiLCJfY2FjaGVkU2Nyb2xsRWxlbWVudHMiLCJzY3JvbGxMZWZ0Iiwic2Nyb2xsVG9wIiwicGFyZW50cyIsIl9jYWNoZWRQYXJlbnRzIiwiZW5hYmxlIiwiZGVib3VuY2UiLCJpbW1lZGlhdGUiLCJ0aW1lb3V0IiwibGF0ZXIiLCJjbGVhclRpbWVvdXQiLCJnZXREaXN0YW5jZSIsInAxIiwicDIiLCJnZXRYRGlmZmVyZW5jZSIsImFicyIsImdldFlEaWZmZXJlbmNlIiwidHJhbnNmb3JtZWRTcGFjZURpc3RhbmNlRmFjdG9yeSIsInBvdyIsImluZGV4T2ZOZWFyZXN0UG9pbnQiLCJhcnIiLCJyYWRpdXMiLCJnZXREaXN0YW5jZUZ1bmMiLCJ0ZW1wIiwiTGlzdCIsImFzc2lnbiIsInRpbWVFeGNhbmdlIiwiY2hhbmdlZER1cmluZ0l0ZXJhdGlvbiIsInN1YnNjcmlwdGlvbnMiLCJyZXNpemVPYnNlcnZlciIsIlJlc2l6ZU9ic2VydmVyIiwib25SZXNpemUiLCJiaW5kIiwib2JzZXJ2ZSIsInJlb3JkZXJPbkNoYW5nZSIsImxpc3RlblRvIiwib25Nb3ZlIiwidHJhY2tSZWxlYXNlIiwiaGFzIiwidW5vYnNlcnZlIiwicmVsZWFzZXMiLCJzd2FwcGluZ0Rpc2FibGVkIiwic29ydGVkRHJhZ2dhYmxlcyIsImdldFNvcnRlZERyYWdnYWJsZXMiLCJwaW5uZWRQb3NpdGlvbnMiLCJjdXJyZW50SW5kZXgiLCJ0YXJnZXRJbmRleCIsImRpc3RhbmNlRnVuYyIsImVtaXRMaXN0RXZlbnQiLCJyZW9yZGVyRWxlbWVudHMiLCJtb3ZlZERyYWdnYWJsZSIsIm5leHQiLCJpbnNlcnRCZWZvcmUiLCJkIiwibGlzdCIsImdldEN1cnJlbnRQaW5uZWRQb3NpdGlvbnMiLCJzb3J0aW5nIiwiY29uY2F0IiwiaW5pdGlhbFBvc2l0aW9ucyIsImoiLCJjbGVhciIsImRyYWdnYWJsZUEiLCJkcmFnZ2FibGVCIiwiX3N3YXBwaW5nRGlzYWJsZWQiLCJkaXNhYmxlZCIsImFycmF5TW92ZSIsImZyb20iLCJ0byIsIkJ1YmJsaW5nTGlzdCIsImF1dG9EZXRlY3RHYXAiLCJfZ2FwIiwiZXhwbGljaXRHYXAiLCJzb3J0ZWQiLCJpc0Nvbm5lY3RlZCIsImN1cnJlbnQiLCJhdXRvRGV0ZWN0U3RhcnRQb3NpdGlvbiIsInN0YXJ0UG9zaXRpb24iLCJvbkRyYWdTdGFydCIsImNhY2hlZFNvcnRlZERyYWdnYWJsZXMiLCJpbmRleE9mQWN0aXZlRHJhZ2dhYmxlIiwicHJldkRyYWdnYWJsZSIsIm5leHREcmFnZ2FibGUiLCJjdXJyZW50UG9zaXRpb24iLCJjdXJyZW50T3JkZXIiLCJpc01vdmluZ0JhY2t3YXJkIiwicHJldk5ld1Bvc2l0aW9uIiwibmV4dFBvc2l0aW9uIiwiY3Jvc3NBeGlzIiwiaXNNb3ZpbmdGb3J3YXJkIiwiZHJhZ2dhYmxlTmV3UG9zaXRpb24iLCJidWJibGluZyIsImN1cnJlbnREcmFnZ2FibGUiLCJpbmNsdWRlcyIsImdhcCIsInZlcnRpY2FsR2FwIiwiZ2FwVmFsdWUiLCJyYW5nZSIsInN0b3AiLCJzdGVwIiwicmVzdWx0IiwiZGlyZWN0Q3Jvc3NpbmciLCJMMVAxIiwiTDFQMiIsIkwyUDEiLCJMMlAyIiwiazEiLCJrMiIsImIxIiwiYjIiLCJib3VuZFRvTGluZSIsIkEiLCJCIiwiUCIsIkFQIiwiQUIiLCJhYjIiLCJhcF9hYiIsInQiLCJnZXRQb2ludE9uTGluZUJ5TGVuZ2h0IiwiTFAxIiwiTFAyIiwibGVuZ2h0IiwicGVyY2VudCIsImFkZFBvaW50VG9Cb3VuZFBvaW50cyIsImJvdW5kcG9pbnRzIiwiaXNSaWdodCIsImJQb2ludCIsIkJhc2ljU3RyYXRlZ3kiLCJib3VuZFJlY3QiLCJOb3RDcm9zc2luZ1N0cmF0ZWd5IiwicG9zaXRpb25pbmciLCJyZWN0YW5nbGVMaXN0IiwiaW5kZXhlc09mTmV3cyIsInN0YXRpY1JlY3RhbmdsZUluZGV4ZXMiLCJpbmRleGVzIiwiX3JlY3QiLCJyZW1vdmFibGUiLCJpbmRleE9mU3RhdGljIiwic3RhdGljUmVjdCIsIm9kbERyYWdnYWJsZXNMaXN0IiwibmV3RHJhZ2dhYmxlcyIsImluZGV4T2ZOZXdzIiwiRmxvYXRMZWZ0U3RyYXRlZ3kiLCJwYWRkaW5nVG9wTGVmdCIsInBhZGRpbmdCb3R0b21SaWdodCIsInlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyIsIl9pbmRleGVzT2ZOZXdzIiwicmVjdFAyIiwiYm91bmRhcnlQb2ludHMiLCJyZWN0SW5kZXgiLCJpc1ZhbGlkIiwibmV3TGlzdCIsImxpc3RPbGRQb3NpdGlvbiIsIm5ld0RyYWdnYWJsZSIsIkZsb2F0UmlnaHRTdHJhdGVneSIsInBhZGRpbmdUb3BSaWdodCIsInBhZGRpbmdCb3R0b21MZWZ0IiwicGFkZGluZ0JvdHRvbU5lZ0xlZnQiLCJnZXRBbmdsZURpZmYiLCJhbHBoYSIsImJldGEiLCJtaW5BbmdsZSIsIm1heEFuZ2xlIiwiUEkiLCJnZXRBbmdsZSIsImRpZmYiLCJub3JtYWxpemVBbmdsZSIsImF0YW4yIiwiYm91bmRBbmdsZSIsImRtaW4iLCJkbWF4IiwiZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtIiwiYW5nbGUiLCJjZW50ZXIiLCJjb3MiLCJzaW4iLCJCb3VuZCIsIl9zaXplIiwiaW5zdGFuY2UiLCJCb3VuZFRvUmVjdGFuZ2xlIiwiY2FsY1BvaW50IiwiQm91bmRUb0VsZW1lbnQiLCJCb3VuZFRvTGluZVgiLCJzdGFydFkiLCJlbmRZIiwiQm91bmRUb0xpbmVZIiwic3RhcnRYIiwiZW5kWCIsIkJvdW5kVG9MaW5lIiwic3RhcnRQb2ludCIsImVuZFBvaW50Iiwic29tZUsiLCJjb3NCZXRhIiwic2luQmV0YSIsInBvaW50MiIsIm5ld0VuZFBvaW50IiwicG9pbnRDcm9zc2luZyIsIkJvdW5kVG9DaXJjbGUiLCJCb3VuZFRvQXJjIiwic3RhcnRBbmdsZSIsImVuZEFuZ2xlIiwiX3N0YXJ0QW5nbGUiLCJfZW5kQW5nbGUiLCJUYXJnZXQiLCJwb3NpdGlvbmluZ1N0cmF0ZWd5Iiwic3RyYXRlZ3kiLCJyZW1vdmVPbk1vdmVTdWJzY3JpcHRpb25zIiwiaW5kZXhlc09mTmV3Iiwib2xkRHJhZ2dhYmxlcyIsInJlY3RhbmdsZXMiLCJlbWl0VGFyZ2V0RXZlbnQiLCJ0YXJnZXRSZWN0YW5nbGUiLCJkcmFnZ2FibGVTcXVhcmUiLCJuZXdEcmFnZ2FibGVzSW5kZXgiLCJhZGRSZW1vdmVPbk1vdmUiLCJzdG9wUmVtb3ZlT25Nb3ZlIiwicHVzaElubmVyRHJhZ2dhYmxlIiwiZG9tVHlwZSIsImxldHRlciIsInRvTG93ZXJDYXNlIl0sIm1hcHBpbmdzIjoiOzs7RUFBZSxTQUFTQSxlQUFlQSxDQUFDQyxZQUFZLEVBQUVDLFdBQVcsRUFBRTtJQUNsRSxNQUFNQyxLQUFLLEdBQUcsRUFBRTtJQUNmLElBQUlDLE9BQU8sR0FBR0gsWUFBWTtFQUUxQixFQUFBLE9BQU1HLE9BQU8sQ0FBQ0MsVUFBVSxJQUFJRCxPQUFPLEtBQUtGLFdBQVcsRUFBRTtFQUNuREMsSUFBQUEsS0FBSyxDQUFDRyxPQUFPLENBQUNGLE9BQU8sQ0FBQ0MsVUFBVSxDQUFDO01BQ2pDRCxPQUFPLEdBQUdBLE9BQU8sQ0FBQ0MsVUFBVTtFQUM5QjtFQUVBLEVBQUEsT0FBT0YsS0FBSztFQUNkOztFQ1JBO0VBQ2UsTUFBTUksS0FBSyxDQUFDO0VBQ3pCO0VBQ0Y7RUFDQTtFQUNBO0VBQ0E7RUFDRUMsRUFBQUEsV0FBV0EsQ0FBQ0MsQ0FBQyxFQUFFQyxDQUFDLEVBQUU7TUFDaEIsSUFBSSxDQUFDRCxDQUFDLEdBQUdBLENBQUM7TUFDVixJQUFJLENBQUNDLENBQUMsR0FBR0EsQ0FBQztFQUNaO0lBRUFDLEdBQUdBLENBQUNDLENBQUMsRUFBRTtFQUNMLElBQUEsT0FBTyxJQUFJTCxLQUFLLENBQUMsSUFBSSxDQUFDRSxDQUFDLEdBQUdHLENBQUMsQ0FBQ0gsQ0FBQyxFQUFFLElBQUksQ0FBQ0MsQ0FBQyxHQUFHRSxDQUFDLENBQUNGLENBQUMsQ0FBQztFQUM5QztJQUVBRyxHQUFHQSxDQUFDRCxDQUFDLEVBQUU7RUFDTCxJQUFBLE9BQU8sSUFBSUwsS0FBSyxDQUFDLElBQUksQ0FBQ0UsQ0FBQyxHQUFHRyxDQUFDLENBQUNILENBQUMsRUFBRSxJQUFJLENBQUNDLENB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
