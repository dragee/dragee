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

    // Deprecated alias for `off`
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
          targets.forEach(target => {
            removeItem(scope.targets, target);
          });
        }
      });
      this.draggables = draggables || [];
      this.targets = targets || [];
      this.dropSubscriptions = new Map();
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
      this.dropSubscriptions.set(draggable, draggable.on('drag:drop', event => {
        if (event.defaultPrevented || !draggable.targets.length) return;
        event.preventDefault();
        this.onEnd(draggable);
      }));
    }
    releaseDraggable(draggable) {
      this.dropSubscriptions.get(draggable)?.();
      this.dropSubscriptions.delete(draggable);
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
      const isAccepted = shotTargets.length > 0 && shotTargets[0].onEnd(draggable);
      if (!isAccepted) {
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
      const isStartPending = !this.shouldUseNativeDragAndDrop() && this.dragStartThreshold > 0;
      if (!isStartPending && !this.emitDragEvent('start', {
        cancelable: true
      })) {
        return;
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
      this._dragStartPending = isStartPending;
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
        if (!this.emitDragEvent('start', {
          cancelable: true
        })) {
          this.cancelDragging();
          return;
        }
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
      this.drop();
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
      this.drop();
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
            this.drop();
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
      let {
        cancelable = false
      } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      const detail = {
        draggable: this
      };
      const isNotPrevented = this.emit(`drag:${type}`, detail, {
        cancelable
      });
      if (!this.domEvents) return isNotPrevented;
      return dispatchDomEvent(this.element, `dragee:${type}`, detail, {
        cancelable
      }) && isNotPrevented;
    }
    drop() {
      if (this.emitDragEvent('drop', {
        cancelable: true
      })) {
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
      this.draggableControllers = new Map();
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
      this.listenTo(draggable, 'drag:drop', event => {
        if (event.defaultPrevented) return;
        event.preventDefault();
        draggable.pinPosition(draggable.pinnedPosition, this.options.timeEnd);
        this.onEnd(draggable);
      });
      this.resizeObserver.observe(draggable.element);
    }
    listenTo(draggable, eventName, handler) {
      draggable.addEventListener(eventName, handler, {
        signal: this.signalFor(draggable)
      });
    }
    signalFor(draggable) {
      if (!this.draggableControllers.has(draggable)) {
        this.draggableControllers.set(draggable, new AbortController());
      }
      return this.draggableControllers.get(draggable).signal;
    }
    releaseDraggable(draggable) {
      this.resizeObserver.unobserve(draggable.element);
      this.draggableControllers.get(draggable)?.abort();
      this.draggableControllers.delete(draggable);
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
      this.removeOnMoveControllers = new Map();
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
      if (!this.getRectangle().includePoint(draggable.getCenter())) {
        return false;
      }
      if (!this.emitTargetEvent('beforeAdd', draggable, {
        cancelable: true
      })) {
        return false;
      }
      draggable.position = this.bound(draggable.position, draggable.getSize());
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
      if (!this.emitTargetEvent('beforeAdd', draggable, {
        cancelable: true
      })) {
        return;
      }
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
      const controller = new AbortController();
      draggable.addEventListener('drag:move', () => this.remove(draggable), {
        signal: controller.signal
      });
      this.removeOnMoveControllers.set(draggable, controller);
      this.emitTargetEvent('add', draggable);
    }
    stopRemoveOnMove(draggable) {
      this.removeOnMoveControllers.get(draggable)?.abort();
      this.removeOnMoveControllers.delete(draggable);
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
      let {
        cancelable = false
      } = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      const detail = {
        target: this,
        draggable
      };
      const isNotPrevented = this.emit(`target:${type}`, detail, {
        cancelable
      });
      if (!this.domEvents) return isNotPrevented;
      const domType = type.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`);
      return dispatchDomEvent(this.element, `dragee:target-${domType}`, detail, {
        cancelable
      }) && isNotPrevented;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZGV2LmpzIiwic291cmNlcyI6WyIuLi9zcmMvdXRpbHMvZ2V0LXBhcmVudHMtY2hhaW4uanMiLCIuLi9zcmMvZ2VvbWV0cnkvcG9pbnQuanMiLCIuLi9zcmMvZ2VvbWV0cnkvcmVjdGFuZ2xlLmpzIiwiLi4vc3JjL2V2ZW50RW1pdHRlci5qcyIsIi4uL3NyYy91dGlscy9yZW1vdmUtYXJyYXktaXRlbS5qcyIsIi4uL3NyYy9zY29wZS5qcyIsIi4uL3NyYy91dGlscy90aHJvdHRsZS5qcyIsIi4uL3NyYy91dGlscy9kaXNwYXRjaC1kb20tZXZlbnQuanMiLCIuLi9zcmMvZHJhZ2dhYmxlLmpzIiwiLi4vc3JjL3V0aWxzL2RlYm91bmNlLmpzIiwiLi4vc3JjL2dlb21ldHJ5L2Rpc3RhbmNlcy5qcyIsIi4uL3NyYy9saXN0LmpzIiwiLi4vc3JjL2J1YmJsaW5nTGlzdC5qcyIsIi4uL3NyYy91dGlscy9yYW5nZS5qcyIsIi4uL3NyYy9nZW9tZXRyeS9ib3VuZHMuanMiLCIuLi9zcmMvcG9zaXRpb25pbmcuanMiLCIuLi9zcmMvZ2VvbWV0cnkvYW5nbGVzLmpzIiwiLi4vc3JjL2JvdW5kaW5nLmpzIiwiLi4vc3JjL3RhcmdldC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRQYXJlbnRzQ2hhaW4oY2hpbGRFbGVtZW50LCByb290RWxlbWVudCkge1xuXHRjb25zdCBjaGFpbiA9IFtdXG4gIGxldCBlbGVtZW50ID0gY2hpbGRFbGVtZW50XG5cbiAgd2hpbGUoZWxlbWVudC5wYXJlbnROb2RlICYmIGVsZW1lbnQgIT09IHJvb3RFbGVtZW50KSB7XG4gICAgY2hhaW4udW5zaGlmdChlbGVtZW50LnBhcmVudE5vZGUpXG4gICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZVxuICB9XG5cbiAgcmV0dXJuIGNoYWluXG59XG4iLCJpbXBvcnQgZ2V0UGFyZW50c0NoYWluIGZyb20gJy4uL3V0aWxzL2dldC1wYXJlbnRzLWNoYWluJ1xuXG4vKiogQ2xhc3MgcmVwcmVzZW50aW5nIGEgcG9pbnQuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2ludCB7XG4gIC8qKlxuICAqIENyZWF0ZSBhIHBvaW50LlxuICAqIEBwYXJhbSB7bnVtYmVyfSB4IC0gVGhlIHggdmFsdWUuXG4gICogQHBhcmFtIHtudW1iZXJ9IHkgLSBUaGUgeSB2YWx1ZS5cbiAgKi9cbiAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgIHRoaXMueCA9IHhcbiAgICB0aGlzLnkgPSB5XG4gIH1cblxuICBhZGQocCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54ICsgcC54LCB0aGlzLnkgKyBwLnkpXG4gIH1cblxuICBzdWIocCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54IC0gcC54LCB0aGlzLnkgLSBwLnkpXG4gIH1cblxuICBtdWx0KGspIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCAqIGssIHRoaXMueSAqIGspXG4gIH1cblxuICBuZWdhdGl2ZSgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KC10aGlzLngsIC10aGlzLnkpXG4gIH1cblxuICBjb21wYXJlKHApIHtcbiAgICByZXR1cm4gKHRoaXMueCA9PT0gcC54ICYmIHRoaXMueSA9PT0gcC55KVxuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLngsIHRoaXMueSlcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiBge3g9JHt0aGlzLnh9LHk9JHt0aGlzLnl9fWBcbiAgfVxuXG4gIHN0YXRpYyBlbGVtZW50T2Zmc2V0KGVsZW1lbnQsIHBhcmVudCkge1xuICAgIHBhcmVudCA9IHBhcmVudCB8fCBlbGVtZW50LnBhcmVudE5vZGVcbiAgICBpZiAocGFyZW50ID09PSBlbGVtZW50KSB7XG4gICAgICByZXR1cm4gbmV3IFBvaW50KDAsIDApO1xuICAgIH0gZWxzZSBpZiAocGFyZW50ID09PSBlbGVtZW50Lm9mZnNldFBhcmVudCkge1xuICAgICAgcmV0dXJuIG5ldyBQb2ludChcbiAgICAgICAgZWxlbWVudC5vZmZzZXRMZWZ0ICsgcGFyZW50LmNsaWVudExlZnQsXG4gICAgICAgIGVsZW1lbnQub2Zmc2V0VG9wICsgcGFyZW50LmNsaWVudFRvcFxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjb25zaWRlck9mZnNldEVsZW1lbnRzID0gW2VsZW1lbnQsIGdldFBhcmVudHNDaGFpbihlbGVtZW50LCBwYXJlbnQpLnBvcCgpXVxuICAgICAgcmV0dXJuIG5ldyBQb2ludChcbiAgICAgICAgY29uc2lkZXJPZmZzZXRFbGVtZW50cy5yZWR1Y2UoKHN1bSwgcCkgPT4gc3VtICsgcC5vZmZzZXRMZWZ0LCAwKSArIHBhcmVudC5jbGllbnRMZWZ0LFxuICAgICAgICBjb25zaWRlck9mZnNldEVsZW1lbnRzLnJlZHVjZSgoc3VtLCBwKSA9PiBzdW0gKyBwLm9mZnNldFRvcCwgMCkgKyBwYXJlbnQuY2xpZW50VG9wXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGVsZW1lbnRCb3VuZGluZ09mZnNldChlbGVtZW50LCBwYXJlbnQpIHtcbiAgICBwYXJlbnQgPSBwYXJlbnQgfHwgZWxlbWVudC5wYXJlbnROb2RlXG4gICAgY29uc3QgZWxlbWVudFJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgY29uc3QgcGFyZW50UmVjdCA9IHBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIHJldHVybiBuZXcgUG9pbnQoXG4gICAgICBlbGVtZW50UmVjdC5sZWZ0IC0gcGFyZW50UmVjdC5sZWZ0LFxuICAgICAgZWxlbWVudFJlY3QudG9wIC0gcGFyZW50UmVjdC50b3BcbiAgICApXG4gIH1cblxuICBzdGF0aWMgZWxlbWVudFNpemUoZWxlbWVudCkge1xuICAgIGNvbnN0IGVsZW1lbnRSZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIHJldHVybiBuZXcgUG9pbnQoXG4gICAgICBlbGVtZW50UmVjdC53aWR0aCxcbiAgICAgIGVsZW1lbnRSZWN0LmhlaWdodFxuICAgIClcbiAgfVxufVxuIiwiaW1wb3J0IFBvaW50IGZyb20gJy4vcG9pbnQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY3RhbmdsZSB7XG4gIGNvbnN0cnVjdG9yKHBvc2l0aW9uLCBzaXplKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgdGhpcy5zaXplID0gc2l6ZVxuICB9XG5cbiAgZ2V0UDEoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25cbiAgfVxuXG4gIGdldFAyKCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHRoaXMucG9zaXRpb24ueSlcbiAgfVxuXG4gIGdldFAzKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLnNpemUpXG4gIH1cblxuICBnZXRQNCgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnkpXG4gIH1cblxuICBnZXRDZW50ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb24uYWRkKHRoaXMuc2l6ZS5tdWx0KDAuNSkpXG4gIH1cblxuICBvcihyZWN0KSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBuZXcgUG9pbnQoTWF0aC5taW4odGhpcy5wb3NpdGlvbi54LCByZWN0LnBvc2l0aW9uLngpLCBNYXRoLm1pbih0aGlzLnBvc2l0aW9uLnksIHJlY3QucG9zaXRpb24ueSkpXG4gICAgY29uc3Qgc2l6ZSA9IChuZXcgUG9pbnQoTWF0aC5tYXgodGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHJlY3QucG9zaXRpb24ueCArIHJlY3Quc2l6ZS54KSwgTWF0aC5tYXgodGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnksIHJlY3QucG9zaXRpb24ueSArIHJlY3Quc2l6ZS55KSkpLnN1Yihwb3NpdGlvbilcbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZShwb3NpdGlvbiwgc2l6ZSlcbiAgfVxuXG4gIGFuZChyZWN0KSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBuZXcgUG9pbnQoTWF0aC5tYXgodGhpcy5wb3NpdGlvbi54LCByZWN0LnBvc2l0aW9uLngpLCBNYXRoLm1heCh0aGlzLnBvc2l0aW9uLnksIHJlY3QucG9zaXRpb24ueSkpXG4gICAgY29uc3Qgc2l6ZSA9IChuZXcgUG9pbnQoTWF0aC5taW4odGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHJlY3QucG9zaXRpb24ueCArIHJlY3Quc2l6ZS54KSwgTWF0aC5taW4odGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnksIHJlY3QucG9zaXRpb24ueSArIHJlY3Quc2l6ZS55KSkpLnN1Yihwb3NpdGlvbilcbiAgICBpZiAoc2l6ZS54IDw9IDAgfHwgc2l6ZS55IDw9IDApIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHBvc2l0aW9uLCBzaXplKVxuICB9XG5cbiAgaW5jbHVkZVBvaW50KHApIHtcbiAgICByZXR1cm4gISh0aGlzLnBvc2l0aW9uLnggPiBwLnggfHwgdGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLnggPCBwLnggfHwgdGhpcy5wb3NpdGlvbi55ID4gcC55IHx8IHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55IDwgcC55KVxuICB9XG5cbiAgaW5jbHVkZVJlY3RhbmdsZShyZWN0YW5nbGUpIHtcbiAgICByZXR1cm4gdGhpcy5pbmNsdWRlUG9pbnQocmVjdGFuZ2xlLnBvc2l0aW9uKSAmJiB0aGlzLmluY2x1ZGVQb2ludChyZWN0YW5nbGUuZ2V0UDMoKSlcbiAgfVxuXG4gIG1vdmVUb0JvdW5kKHJlY3QsIGF4aXMpIHtcbiAgICBsZXQgc2VsQXhpcywgY3Jvc3NSZWN0YW5nbGVcbiAgICBpZiAoYXhpcykge1xuICAgICAgc2VsQXhpcyA9IGF4aXNcbiAgICB9IGVsc2Uge1xuICAgICAgY3Jvc3NSZWN0YW5nbGUgPSB0aGlzLmFuZChyZWN0KVxuICAgICAgaWYgKCFjcm9zc1JlY3RhbmdsZSkge1xuICAgICAgICByZXR1cm4gcmVjdFxuICAgICAgfVxuICAgICAgc2VsQXhpcyA9IGNyb3NzUmVjdGFuZ2xlLnNpemUueCA+IGNyb3NzUmVjdGFuZ2xlLnNpemUueSA/ICd5JyA6ICd4J1xuICAgIH1cbiAgICBjb25zdCB0aGlzQ2VudGVyID0gdGhpcy5nZXRDZW50ZXIoKVxuICAgIGNvbnN0IHJlY3RDZW50ZXIgPSByZWN0LmdldENlbnRlcigpXG4gICAgY29uc3Qgc2lnbiA9IHRoaXNDZW50ZXJbc2VsQXhpc10gPiByZWN0Q2VudGVyW3NlbEF4aXNdID8gLTEgOiAxXG4gICAgY29uc3Qgb2Zmc2V0ID0gc2lnbiA+IDAgPyB0aGlzLnBvc2l0aW9uW3NlbEF4aXNdICsgdGhpcy5zaXplW3NlbEF4aXNdIC0gcmVjdC5wb3NpdGlvbltzZWxBeGlzXSA6IHRoaXMucG9zaXRpb25bc2VsQXhpc10gLSAocmVjdC5wb3NpdGlvbltzZWxBeGlzXSArIHJlY3Quc2l6ZVtzZWxBeGlzXSlcbiAgICByZWN0LnBvc2l0aW9uW3NlbEF4aXNdID0gcmVjdC5wb3NpdGlvbltzZWxBeGlzXSArIG9mZnNldFxuICAgIHJldHVybiByZWN0XG4gIH1cblxuICBnZXRTcXVhcmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZS54ICogdGhpcy5zaXplLnlcbiAgfVxuXG4gIHN0eWxlQXBwbHkoZWwpIHtcbiAgICBlbCA9IGVsIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2luZCcpXG4gICAgZWwuc3R5bGUubGVmdCA9IHRoaXMucG9zaXRpb24ueCArICdweCdcbiAgICBlbC5zdHlsZS50b3AgPSB0aGlzLnBvc2l0aW9uLnkgKyAncHgnXG4gICAgZWwuc3R5bGUud2lkdGggPSB0aGlzLnNpemUueCArICdweCdcbiAgICBlbC5zdHlsZS5oZWlnaHQgPSB0aGlzLnNpemUueSArICdweCdcbiAgfVxuXG4gIGdyb3d0aChzaXplKSB7XG4gICAgdGhpcy5zaXplID0gdGhpcy5zaXplLmFkZChzaXplKVxuICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uLmFkZChzaXplLm11bHQoLTAuNSkpXG4gIH1cblxuICBnZXRNaW5TaWRlKCkge1xuICAgIHJldHVybiBNYXRoLm1pbih0aGlzLnNpemUueCwgdGhpcy5zaXplLnkpXG4gIH1cblxuICBzdGF0aWMgZnJvbUVsZW1lbnQoZWxlbWVudCwgcGFyZW50PWVsZW1lbnQucGFyZW50Tm9kZSwgaXNDb25zaWRlclRyYW5zbGF0ZT1mYWxzZSkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gaXNDb25zaWRlclRyYW5zbGF0ZVxuICAgICAgPyBQb2ludC5lbGVtZW50Qm91bmRpbmdPZmZzZXQoZWxlbWVudCwgcGFyZW50KVxuICAgICAgOiBQb2ludC5lbGVtZW50T2Zmc2V0KGVsZW1lbnQsIHBhcmVudClcbiAgICBjb25zdCBzaXplID0gUG9pbnQuZWxlbWVudFNpemUoZWxlbWVudClcbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZShwb3NpdGlvbiwgc2l6ZSlcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRFbWl0dGVyIGV4dGVuZHMgRXZlbnRUYXJnZXQge1xuICBjb25zdHJ1Y3RvciAob3B0aW9ucyA9IHt9KSB7XG4gICAgc3VwZXIoKVxuXG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5vbikge1xuICAgICAgT2JqZWN0LmVudHJpZXMob3B0aW9ucy5vbikuZm9yRWFjaCgoW2V2ZW50TmFtZSwgZm5dKSA9PiB0aGlzLm9uKGV2ZW50TmFtZSwgZm4pKVxuICAgIH1cbiAgfVxuXG4gIGVtaXQoZXZlbnROYW1lLCBkZXRhaWwsIHsgY2FuY2VsYWJsZSA9IGZhbHNlIH0gPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KGV2ZW50TmFtZSwgeyBkZXRhaWwsIGNhbmNlbGFibGUgfSkpXG4gIH1cblxuICBvbihldmVudE5hbWUsIGZuLCBvcHRpb25zKSB7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZm4sIG9wdGlvbnMpXG4gICAgcmV0dXJuICgpID0+IHRoaXMub2ZmKGV2ZW50TmFtZSwgZm4pXG4gIH1cblxuICBvbmNlKGV2ZW50TmFtZSwgZm4pIHtcbiAgICByZXR1cm4gdGhpcy5vbihldmVudE5hbWUsIGZuLCB7IG9uY2U6IHRydWUgfSlcbiAgfVxuXG4gIG9mZihldmVudE5hbWUsIGZuKSB7XG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZm4pXG4gIH1cblxuICAvLyBEZXByZWNhdGVkIGFsaWFzIGZvciBgb2ZmYFxuICB1bnN1YnNjcmliZShldmVudE5hbWUsIGZuKSB7XG4gICAgdGhpcy5vZmYoZXZlbnROYW1lLCBmbilcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oYXJyYXksIHZhbCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGFycmF5W2ldID09PSB2YWwpIHtcbiAgICAgIGFycmF5LnNwbGljZShpLCAxKVxuICAgICAgaS0tXG4gICAgfVxuICB9XG4gIHJldHVybiBhcnJheVxufVxuIiwiaW1wb3J0IHJlbW92ZUl0ZW0gZnJvbSAnLi91dGlscy9yZW1vdmUtYXJyYXktaXRlbSdcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudEVtaXR0ZXInXG5cbmNvbnN0IHNjb3BlcyA9IFtdXG5jb25zdCBzY29wZVN0YWNrID0gW11cblxuY2xhc3MgU2NvcGUgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvcihkcmFnZ2FibGVzLCB0YXJnZXRzLCBvcHRpb25zPXt9KSB7XG4gICAgc3VwZXIob3B0aW9ucylcbiAgICBzY29wZXMuZm9yRWFjaCgoc2NvcGUpID0+IHtcbiAgICAgIGlmIChkcmFnZ2FibGVzKSB7XG4gICAgICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBzY29wZS5yZWxlYXNlRHJhZ2dhYmxlKGRyYWdnYWJsZSkpXG4gICAgICB9XG5cbiAgICAgIGlmICh0YXJnZXRzKSB7XG4gICAgICAgIHRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB7XG4gICAgICAgICAgcmVtb3ZlSXRlbShzY29wZS50YXJnZXRzLCB0YXJnZXQpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZXMgfHwgW11cbiAgICB0aGlzLnRhcmdldHMgPSB0YXJnZXRzIHx8IFtdXG4gICAgdGhpcy5kcm9wU3Vic2NyaXB0aW9ucyA9IG5ldyBNYXAoKVxuICAgIHNjb3Blcy5wdXNoKHRoaXMpXG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgdGltZUVuZDogKG9wdGlvbnMudGltZUVuZCkgfHwgNDAwXG4gICAgfVxuXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gdGhpcy5pbml0RHJhZ2dhYmxlKGRyYWdnYWJsZSkpXG4gIH1cblxuICBhZGREcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxuICAgIHRoaXMuaW5pdERyYWdnYWJsZShkcmFnZ2FibGUpXG4gIH1cblxuICBpbml0RHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIHRoaXMuZHJvcFN1YnNjcmlwdGlvbnMuc2V0KGRyYWdnYWJsZSwgZHJhZ2dhYmxlLm9uKCdkcmFnOmRyb3AnLCAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC5kZWZhdWx0UHJldmVudGVkIHx8ICFkcmFnZ2FibGUudGFyZ2V0cy5sZW5ndGgpIHJldHVyblxuXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB0aGlzLm9uRW5kKGRyYWdnYWJsZSlcbiAgICB9KSlcbiAgfVxuXG4gIHJlbGVhc2VEcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgdGhpcy5kcm9wU3Vic2NyaXB0aW9ucy5nZXQoZHJhZ2dhYmxlKT8uKClcbiAgICB0aGlzLmRyb3BTdWJzY3JpcHRpb25zLmRlbGV0ZShkcmFnZ2FibGUpXG4gICAgcmVtb3ZlSXRlbSh0aGlzLmRyYWdnYWJsZXMsIGRyYWdnYWJsZSlcbiAgfVxuXG4gIGFkZFRhcmdldCh0YXJnZXQpIHtcbiAgICB0aGlzLnRhcmdldHMucHVzaCh0YXJnZXQpXG4gIH1cblxuICBvbkVuZChkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBzaG90VGFyZ2V0cyA9IHRoaXMudGFyZ2V0cy5maWx0ZXIoKHRhcmdldCkgPT4ge1xuICAgICAgcmV0dXJuIHRhcmdldC5kcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTFcbiAgICB9KS5maWx0ZXIoKHRhcmdldCkgPT4ge1xuICAgICAgcmV0dXJuIHRhcmdldC5jYXRjaERyYWdnYWJsZShkcmFnZ2FibGUpXG4gICAgfSkuc29ydCgoYSwgYikgPT4ge1xuICAgICAgcmV0dXJuIGEuZ2V0UmVjdGFuZ2xlKCkuZ2V0U3F1YXJlKCkgLSBiLmdldFJlY3RhbmdsZSgpLmdldFNxdWFyZSgpXG4gICAgfSlcblxuICAgIGNvbnN0IGlzQWNjZXB0ZWQgPSBzaG90VGFyZ2V0cy5sZW5ndGggPiAwICYmIHNob3RUYXJnZXRzWzBdLm9uRW5kKGRyYWdnYWJsZSlcblxuICAgIGlmICghaXNBY2NlcHRlZCkge1xuICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKGRyYWdnYWJsZS5pbml0aWFsUG9zaXRpb24sIHRoaXMub3B0aW9ucy50aW1lRW5kKVxuICAgIH1cblxuICAgIHRoaXMuZW1pdCgnc2NvcGU6Y2hhbmdlJywgeyBzY29wZTogdGhpcywgZHJhZ2dhYmxlIH0pXG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLnRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB0YXJnZXQucmVzZXQoKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnJlZnJlc2goKSlcbiAgICB0aGlzLnRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB0YXJnZXQucmVmcmVzaCgpKVxuICB9XG5cbiAgZ2V0IHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXRzLm1hcCgodGFyZ2V0KSA9PiB7XG4gICAgICByZXR1cm4gdGFyZ2V0LmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4gdGhpcy5kcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSlcbiAgICB9KVxuICB9XG5cbiAgc2V0IHBvc2l0aW9ucyhwb3NpdGlvbnMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gJ3dyb25nIGFycmF5IGxlbmd0aCdcbiAgICBpZiAocG9zaXRpb25zLmxlbmd0aCA9PT0gdGhpcy50YXJnZXRzLmxlbmd0aCkge1xuICAgICAgdGhpcy50YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4gdGFyZ2V0LnJlc2V0KCkpXG5cbiAgICAgIHBvc2l0aW9ucy5mb3JFYWNoKCh0YXJnZXRJbmRleGVzLCBpKSA9PiB7XG4gICAgICAgIHRhcmdldEluZGV4ZXMuZm9yRWFjaCgoaW5kZXgpID0+IHtcbiAgICAgICAgICB0aGlzLnRhcmdldHNbaV0uYWRkKHRoaXMuZHJhZ2dhYmxlc1tpbmRleF0pXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBtZXNzYWdlXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IGRlZmF1bHRTY29wZSA9IG5ldyBTY29wZSgpXG5cbmZ1bmN0aW9uIGN1cnJlbnRTY29wZSgpIHtcbiAgcmV0dXJuIHNjb3BlU3RhY2tbc2NvcGVTdGFjay5sZW5ndGggLSAxXSB8fCBkZWZhdWx0U2NvcGVcbn1cblxuZnVuY3Rpb24gc2NvcGUoZm4pIHtcbiAgY29uc3QgY3VycmVudFNjb3BlID0gbmV3IFNjb3BlKClcblxuICBzY29wZVN0YWNrLnB1c2goY3VycmVudFNjb3BlKVxuICB0cnkge1xuICAgIGZuLmNhbGwoKVxuICB9IGZpbmFsbHkge1xuICAgIHNjb3BlU3RhY2sucG9wKClcbiAgfVxuICByZXR1cm4gY3VycmVudFNjb3BlXG59XG5cbmV4cG9ydCB7IHNjb3BlcywgZGVmYXVsdFNjb3BlLCBjdXJyZW50U2NvcGUsIFNjb3BlLCBzY29wZSB9XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0aHJvdHRsZShmdW5jLCB3YWl0KSB7XG4gIGxldCBsYXN0VGltZSA9IDBcblxuICByZXR1cm4gZnVuY3Rpb24gZXhlY3V0ZWRGdW5jdGlvbigpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpc1xuICAgIGNvbnN0IGFyZ3MgPSBhcmd1bWVudHNcblxuICAgIGNvbnN0IG5vdyA9IERhdGUubm93KClcbiAgICBpZiAobm93IC0gbGFzdFRpbWUgPj0gd2FpdCkge1xuICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKVxuICAgICAgbGFzdFRpbWUgPSBub3dcbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BhdGNoRG9tRXZlbnQoZWxlbWVudCwgZXZlbnROYW1lLCBkZXRhaWwsIHsgY2FuY2VsYWJsZSA9IGZhbHNlIH0gPSB7fSkge1xuICByZXR1cm4gZWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChldmVudE5hbWUsIHsgYnViYmxlczogdHJ1ZSwgY2FuY2VsYWJsZSwgZGV0YWlsIH0pKVxufVxuIiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50RW1pdHRlcidcbmltcG9ydCBQb2ludCBmcm9tICcuL2dlb21ldHJ5L3BvaW50J1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tICcuL2dlb21ldHJ5L3JlY3RhbmdsZSdcbmltcG9ydCB7IHNjb3BlcywgY3VycmVudFNjb3BlIH0gZnJvbSAnLi9zY29wZSdcbmltcG9ydCB0aHJvdHRsZSBmcm9tICcuL3V0aWxzL3Rocm90dGxlJ1xuaW1wb3J0IGdldFBhcmVudHNDaGFpbiBmcm9tICcuL3V0aWxzL2dldC1wYXJlbnRzLWNoYWluJ1xuaW1wb3J0IGRpc3BhdGNoRG9tRXZlbnQgZnJvbSAnLi91dGlscy9kaXNwYXRjaC1kb20tZXZlbnQnXG5cbmNvbnN0IHRocm90dGxlZERyYWdPdmVyID0gKGNhbGxiYWNrLCBkdXJhdGlvbikgPT4ge1xuICBjb25zdCB0aHJvdHRsZWRDYWxsYmFjayA9IHRocm90dGxlKChldmVudCkgPT4gY2FsbGJhY2soZXZlbnQpLCBkdXJhdGlvbilcbiAgcmV0dXJuIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB0aHJvdHRsZWRDYWxsYmFjayhldmVudClcbiAgfVxufVxuXG5jb25zdCBwYXNzaXZlRmFsc2UgPSB7IHBhc3NpdmU6IGZhbHNlIH1cblxuY29uc3QgaXNUb3VjaCA9IG5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyA+IDBcbmNvbnN0IG1vdXNlRXZlbnRzID0ge1xuICBzdGFydDogJ21vdXNlZG93bicsXG4gIG1vdmU6ICdtb3VzZW1vdmUnLFxuICBlbmQ6ICdtb3VzZXVwJ1xufVxuY29uc3QgdG91Y2hFdmVudHMgPSB7XG4gIHN0YXJ0OiAndG91Y2hzdGFydCcsXG4gIG1vdmU6ICd0b3VjaG1vdmUnLFxuICBlbmQ6ICd0b3VjaGVuZCdcbn1cbmNvbnN0IGRyYWdnYWJsZXMgPSBbXVxuY29uc3QgdHJhbnNmb3JtUHJvcGVydHkgPSAndHJhbnNmb3JtJ1xuY29uc3QgdHJhbnNpdGlvblByb3BlcnR5ID0gJ3RyYW5zaXRpb24nXG5cbmZ1bmN0aW9uIGdldFRvdWNoQnlJRChlbGVtZW50LCB0b3VjaElkKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudC5jaGFuZ2VkVG91Y2hlcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChlbGVtZW50LmNoYW5nZWRUb3VjaGVzW2ldLmlkZW50aWZpZXIgPT09IHRvdWNoSWQpIHtcbiAgICAgIHJldHVybiBlbGVtZW50LmNoYW5nZWRUb3VjaGVzW2ldXG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZVxufVxuXG5mdW5jdGlvbiBwcmV2ZW50RG91YmxlSW5pdChkcmFnZ2FibGUpIHtcbiAgY29uc3QgbWVzc2FnZSA9IFwiZm9yIHRoaXMgZWxlbWVudCBEcmFnZWUuRHJhZ2dhYmxlIGlzIGFscmVhZHkgZXhpc3QsIGRvbid0IGNyZWF0ZSBpdCB0d2ljZSBcIlxuICBpZiAoZHJhZ2dhYmxlcy5zb21lKChleGlzdGluZykgPT4gZHJhZ2dhYmxlLmVsZW1lbnQgPT09IGV4aXN0aW5nLmVsZW1lbnQpKSB7XG4gICAgdGhyb3cgbWVzc2FnZVxuICB9XG4gIGRyYWdnYWJsZXMucHVzaChkcmFnZ2FibGUpXG59XG5cbmZ1bmN0aW9uIGNvcHlTdHlsZXMoc291cmNlLCBkZXN0aW5hdGlvbikge1xuICBjb25zdCBjcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHNvdXJjZSlcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qga2V5ID0gY3NbaV1cbiAgICBpZiAoKGtleS5pbmRleE9mKCd0cmFuc2l0aW9uJykgPCAwKSAmJiAoa2V5LmluZGV4T2YoJ3RyYW5zZm9ybScpIDwgMCkpIHtcbiAgICAgIGRlc3RpbmF0aW9uLnN0eWxlW2tleV0gPSBjc1trZXldXG4gICAgfVxuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzb3VyY2UuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICBjb3B5U3R5bGVzKHNvdXJjZS5jaGlsZHJlbltpXSwgZGVzdGluYXRpb24uY2hpbGRyZW5baV0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhZ2dhYmxlIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgb3B0aW9ucz17fSkge1xuICAgIHN1cGVyKG9wdGlvbnMpXG4gICAgdGhpcy50YXJnZXRzID0gW11cbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIHByZXZlbnREb3VibGVJbml0KHRoaXMpXG4gICAgY3VycmVudFNjb3BlKCkuYWRkRHJhZ2dhYmxlKHRoaXMpXG4gICAgdGhpcy5fZW5hYmxlID0gdHJ1ZVxuICAgIHRoaXMuc3RhcnRCb3VuZGluZygpXG4gICAgdGhpcy5zdGFydFBvc2l0aW9uaW5nKClcbiAgICB0aGlzLnN0YXJ0TGlzdGVuaW5nKClcbiAgfVxuXG4gIHN0YXJ0Qm91bmRpbmcoKSB7XG4gICAgdGhpcy5ib3VuZGluZyA9IHRoaXMub3B0aW9ucy5ib3VuZGluZyB8fCB7XG4gICAgICBib3VuZDogdGhpcy5vcHRpb25zLmJvdW5kIHx8ICgocG9pbnQpID0+IHBvaW50KVxuICAgIH1cbiAgfVxuXG4gIHN0YXJ0UG9zaXRpb25pbmcoKSB7XG4gICAgdGhpcy5fc2V0RGVmYXVsdFRyYW5zaXRpb24oKVxuICAgIHRoaXMub2Zmc2V0ID0gdGhpcy5pc0NvbnNpZGVyVHJhbnNmb3JtT2Zmc2V0XG4gICAgICA/IFBvaW50LmVsZW1lbnRCb3VuZGluZ09mZnNldCh0aGlzLmVsZW1lbnQsIHRoaXMuY29udGFpbmVyKVxuICAgICAgOiBQb2ludC5lbGVtZW50T2Zmc2V0KHRoaXMuZWxlbWVudCwgdGhpcy5jb250YWluZXIpXG4gICAgdGhpcy5waW5uZWRQb3NpdGlvbiA9IHRoaXMub2Zmc2V0XG4gICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMub2Zmc2V0XG4gICAgdGhpcy5pbml0aWFsUG9zaXRpb24gPSB0aGlzLm9wdGlvbnMucG9zaXRpb24gfHwgdGhpcy5vZmZzZXRcblxuICAgIHRoaXMucGluUG9zaXRpb24odGhpcy5pbml0aWFsUG9zaXRpb24pXG5cbiAgICBpZiAodGhpcy5ib3VuZGluZy5yZWZyZXNoKSB7XG4gICAgICB0aGlzLmJvdW5kaW5nLnJlZnJlc2goKVxuICAgIH1cbiAgfVxuXG4gIHN0YXJ0TGlzdGVuaW5nKCkge1xuICAgIHRoaXMuX2RyYWdTdGFydCA9IChldmVudCkgPT4gdGhpcy5kcmFnU3RhcnQoZXZlbnQpXG4gICAgdGhpcy5fZHJhZ01vdmUgPSAoZXZlbnQpID0+IHRoaXMuZHJhZ01vdmUoZXZlbnQpXG4gICAgdGhpcy5fZHJhZ0VuZCA9IChldmVudCkgPT4gdGhpcy5kcmFnRW5kKGV2ZW50KVxuICAgIHRoaXMuX25hdGl2ZURyYWdTdGFydCA9IChldmVudCkgPT4gdGhpcy5uYXRpdmVEcmFnU3RhcnQoZXZlbnQpXG4gICAgdGhpcy5fbmF0aXZlRHJhZ092ZXIgPSB0aHJvdHRsZWREcmFnT3ZlcigoZXZlbnQpID0+IHRoaXMubmF0aXZlRHJhZ092ZXIoZXZlbnQpLCB0aGlzLmRyYWdPdmVyVGhyb3R0bGVEdXJhdGlvbilcbiAgICB0aGlzLl9uYXRpdmVEcmFnRW5kID0gKGV2ZW50KSA9PiB0aGlzLm5hdGl2ZURyYWdFbmQoZXZlbnQpXG4gICAgdGhpcy5fbmF0aXZlRHJvcCA9IChldmVudCkgPT4gdGhpcy5uYXRpdmVEcm9wKGV2ZW50KVxuICAgIHRoaXMuX3Njcm9sbCA9IChldmVudCkgPT4gdGhpcy5vblNjcm9sbChldmVudClcblxuICAgIHRoaXMuaGFuZGxlci5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQsIHBhc3NpdmVGYWxzZSlcbiAgICB0aGlzLmhhbmRsZXIuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0LCBwYXNzaXZlRmFsc2UpXG4gIH1cblxuICBnZXRTaXplKCkge1xuICAgIHJldHVybiBQb2ludC5lbGVtZW50U2l6ZSh0aGlzLmVsZW1lbnQpXG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5vZmZzZXQuYWRkKHRoaXMuX3RyYW5zZm9ybVBvc2l0aW9uIHx8IG5ldyBQb2ludCgwLCAwKSlcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvblxuICB9XG5cbiAgZ2V0Q2VudGVyKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLmdldFNpemUoKS5tdWx0KDAuNSkpXG4gIH1cblxuICBfc2V0RGVmYXVsdFRyYW5zaXRpb24gKCkge1xuICAgIGlmICghdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV0pIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5lbGVtZW50KVt0cmFuc2l0aW9uUHJvcGVydHldXG4gICAgfVxuICB9XG5cbiAgX3NldFRyYW5zaXRpb24odGltZSkge1xuICAgIGxldCB0cmFuc2l0aW9uID0gdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV1cbiAgICBjb25zdCB0cmFuc2l0aW9uQ3NzID0gYHRyYW5zZm9ybSAke3RpbWV9bXNgXG5cbiAgICBpZiAoIS90cmFuc2Zvcm1cXHM/XFxkKm0/cz8vLnRlc3QodHJhbnNpdGlvbikpIHtcbiAgICAgIGlmICh0cmFuc2l0aW9uKSB7XG4gICAgICAgIHRyYW5zaXRpb24gKz0gYCwgJHt0cmFuc2l0aW9uQ3NzfWBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyYW5zaXRpb24gPSB0cmFuc2l0aW9uQ3NzXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyYW5zaXRpb24gPSB0cmFuc2l0aW9uLnJlcGxhY2UoL3RyYW5zZm9ybVxccz9cXGQqbT9zPy9nLCB0cmFuc2l0aW9uQ3NzKVxuICAgIH1cblxuICAgIGlmICh0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNpdGlvblByb3BlcnR5XSAhPT0gdHJhbnNpdGlvbikge1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV0gPSB0cmFuc2l0aW9uXG4gICAgfVxuICB9XG5cbiAgX3NldFRyYW5zbGF0ZShwb2ludCkge1xuICAgIHRoaXMuX3RyYW5zZm9ybVBvc2l0aW9uID0gcG9pbnRcbiAgICBjb25zdCB0cmFuc2xhdGVDc3MgPSBgdHJhbnNsYXRlM2QoJHtwb2ludC54fXB4LCAke3BvaW50Lnl9cHgsIDBweClgXG5cbiAgICBsZXQgdHJhbnNmb3JtID0gdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BlcnR5XVxuXG4gICAgaWYgKHRoaXMuc2hvdWxkUmVtb3ZlWmVyb1RyYW5zbGF0ZSAmJiBwb2ludC54ID09PSAwICYmIHBvaW50LnkgPT09IDApIHtcbiAgICAgIHRyYW5zZm9ybSA9IHRyYW5zZm9ybS5yZXBsYWNlKC90cmFuc2xhdGUzZFxcKFteKV0rXFwpLywgJycpXG4gICAgfSBlbHNlIGlmICghL3RyYW5zbGF0ZTNkXFwoW14pXStcXCkvLnRlc3QodHJhbnNmb3JtKSkge1xuICAgICAgaWYgKHRyYW5zZm9ybSkge1xuICAgICAgICB0cmFuc2Zvcm0gKz0gJyAnXG4gICAgICB9XG4gICAgICB0cmFuc2Zvcm0gKz0gdHJhbnNsYXRlQ3NzXG4gICAgfSBlbHNlIHtcbiAgICAgIHRyYW5zZm9ybSA9IHRyYW5zZm9ybS5yZXBsYWNlKC90cmFuc2xhdGUzZFxcKFteKV0rXFwpLywgdHJhbnNsYXRlQ3NzKVxuICAgIH1cblxuICAgIGlmICh0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcGVydHldICE9PSB0cmFuc2Zvcm0pIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wZXJ0eV0gPSB0cmFuc2Zvcm1cbiAgICB9XG4gIH1cblxuICBtb3ZlKHBvaW50LCB0aW1lPTAsIGlzU2lsZW50PWZhbHNlKSB7XG4gICAgcG9pbnQgPSBwb2ludC5jbG9uZSgpXG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvaW50XG5cbiAgICB0aGlzLl9zZXRUcmFuc2l0aW9uKHRpbWUpXG4gICAgdGhpcy5fc2V0VHJhbnNsYXRlKHBvaW50LnN1Yih0aGlzLm9mZnNldCkpXG5cbiAgICBpZiAoIWlzU2lsZW50KSB7XG4gICAgICB0aGlzLmVtaXREcmFnRXZlbnQoJ21vdmUnKVxuICAgIH1cbiAgfVxuXG4gIHBpblBvc2l0aW9uKHBvaW50LCB0aW1lPTAsIHNpbGVudD10cnVlKSB7XG4gICAgdGhpcy5waW5uZWRQb3NpdGlvbiA9IHBvaW50LmNsb25lKClcbiAgICB0aGlzLm1vdmUodGhpcy5waW5uZWRQb3NpdGlvbiwgdGltZSwgc2lsZW50KVxuICB9XG5cbiAgcmVzZXRQb3NpdGlvblRvSW5pdGlhbCAoKSB7XG4gICAgdGhpcy5waW5Qb3NpdGlvbih0aGlzLmluaXRpYWxQb3NpdGlvbilcbiAgfVxuXG4gIHJlZnJlc2hQb3NpdGlvbiAoKSB7XG4gICAgdGhpcy5zZXRQb3NpdGlvbih0aGlzLmdldFBvc2l0aW9uKCkpXG4gIH1cblxuICBzZXRQb3NpdGlvbihwb2ludCkge1xuICAgIHBvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIHRoaXMucG9zaXRpb24gPSBwb2ludFxuICAgIHRoaXMuX3NldFRyYW5zaXRpb24oMClcbiAgICB0aGlzLl9zZXRUcmFuc2xhdGUocG9pbnQuc3ViKHRoaXMub2Zmc2V0KSlcbiAgfVxuXG4gIGRldGVybWluZURpcmVjdGlvbihwb2ludCkge1xuICAgIHRoaXMuX3ByZXZpb3VzRGlyZWN0aW9uUG9zaXRpb24gfHw9IHRoaXMuX3N0YXJ0UG9zaXRpb25cblxuICAgIHRoaXMubGVmdERpcmVjdGlvbiA9ICh0aGlzLl9wcmV2aW91c0RpcmVjdGlvblBvc2l0aW9uLnggPiBwb2ludC54KVxuICAgIHRoaXMucmlnaHREaXJlY3Rpb24gPSAodGhpcy5fcHJldmlvdXNEaXJlY3Rpb25Qb3NpdGlvbi54IDwgcG9pbnQueClcbiAgICB0aGlzLnVwRGlyZWN0aW9uID0gKHRoaXMuX3ByZXZpb3VzRGlyZWN0aW9uUG9zaXRpb24ueSA+IHBvaW50LnkpXG4gICAgdGhpcy5kb3duRGlyZWN0aW9uID0gKHRoaXMuX3ByZXZpb3VzRGlyZWN0aW9uUG9zaXRpb24ueSA8IHBvaW50LnkpXG5cbiAgICB0aGlzLl9wcmV2aW91c0RpcmVjdGlvblBvc2l0aW9uID0gcG9pbnRcbiAgfVxuXG4gIHNlZW1zU2Nyb2xsaW5nKCkge1xuICAgIHJldHVybiAoK25ldyBEYXRlKCkgLSB0aGlzLl9zdGFydFRvdWNoVGltZXN0YW1wKSA8IHRoaXMudG91Y2hEcmFnZ2luZ1RocmVzaG9sZFxuICB9XG5cbiAgc2hvdWxkVXNlTmF0aXZlRHJhZ0FuZERyb3AoKSB7XG4gICAgaWYgKHRoaXMuaXNUb3VjaEV2ZW50KSB7XG4gICAgICByZXR1cm4gdGhpcy5uYXRpdmVEcmFnQW5kRHJvcCAmJiB0aGlzLmVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcE9uVG91Y2hcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMubmF0aXZlRHJhZ0FuZERyb3BcbiAgICB9XG4gIH1cblxuICBkcmFnU3RhcnQoZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuX2VuYWJsZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3RvcFByb3BhZ2F0aW9uT25EcmFnU3RhcnQpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgfVxuXG4gICAgdGhpcy5pc1RvdWNoRXZlbnQgPSAoaXNUb3VjaCAmJiAoZXZlbnQgaW5zdGFuY2VvZiB3aW5kb3cuVG91Y2hFdmVudCkpXG5cbiAgICB0aGlzLnRvdWNoUG9pbnQgPSB0aGlzLl9zdGFydFRvdWNoUG9pbnQgPSBuZXcgUG9pbnQoXG4gICAgICB0aGlzLmlzVG91Y2hFdmVudCA/IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYIDogZXZlbnQuY2xpZW50WCxcbiAgICAgIHRoaXMuaXNUb3VjaEV2ZW50ID8gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVkgOiBldmVudC5jbGllbnRZXG4gICAgKVxuXG4gICAgdGhpcy5fc3RhcnRQb3NpdGlvbiA9IHRoaXMuZ2V0UG9zaXRpb24oKVxuICAgIGlmICh0aGlzLmlzVG91Y2hFdmVudCkge1xuICAgICAgdGhpcy5fdG91Y2hJZCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmlkZW50aWZpZXJcbiAgICAgIHRoaXMuX3N0YXJ0VG91Y2hUaW1lc3RhbXAgPSArbmV3IERhdGUoKVxuICAgIH1cblxuICAgIHRoaXMuX3N0YXJ0V2luZG93U2Nyb2xsUG9pbnQgPSB0aGlzLndpbmRvd1Njcm9sbFBvaW50XG4gICAgdGhpcy5fc3RhcnRTY3JvbGxFbGVtZW50c09mZnNldCA9IHRoaXMuc2Nyb2xsRWxlbWVudHNPZmZzZXRcblxuICAgIGlmIChldmVudC50YXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElucHV0RWxlbWVudCB8fFxuICAgICAgICAgIGV2ZW50LnRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSW5wdXRFbGVtZW50KSB7XG4gICAgICBldmVudC50YXJnZXQuZm9jdXMoKVxuICAgIH1cblxuICAgIGNvbnN0IGlzU3RhcnRQZW5kaW5nID0gIXRoaXMuc2hvdWxkVXNlTmF0aXZlRHJhZ0FuZERyb3AoKSAmJiB0aGlzLmRyYWdTdGFydFRocmVzaG9sZCA+IDBcbiAgICBpZiAoIWlzU3RhcnRQZW5kaW5nICYmICF0aGlzLmVtaXREcmFnRXZlbnQoJ3N0YXJ0JywgeyBjYW5jZWxhYmxlOiB0cnVlIH0pKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5zaG91bGRVc2VOYXRpdmVEcmFnQW5kRHJvcCgpKSB7XG4gICAgICBpZiAodGhpcy5pc1RvdWNoRXZlbnQgJiYgdGhpcy5lbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3BPblRvdWNoKSB7XG4gICAgICAgIHRoaXMuX3N0YXJ0UGFyZW50c1Njcm9sbE9mZnNldCA9IHRoaXMucGFyZW50c1Njcm9sbE9mZnNldFxuXG4gICAgICAgIGNvbnN0IGVtdWxhdGVPbkZpcnN0TW92ZSA9IChldmVudCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLnNlZW1zU2Nyb2xsaW5nKCkpIHtcbiAgICAgICAgICAgIHRoaXMuY2FuY2VsRHJhZ2dpbmcoKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcChldmVudClcbiAgICAgICAgICB9XG4gICAgICAgICAgY2FuY2VsRW11bGF0aW9uKClcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjYW5jZWxFbXVsYXRpb24gPSAoKSA9PiB7XG4gICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCBlbXVsYXRlT25GaXJzdE1vdmUpXG4gICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIGNhbmNlbEVtdWxhdGlvbilcbiAgICAgICAgfVxuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgZW11bGF0ZU9uRmlyc3RNb3ZlLCBwYXNzaXZlRmFsc2UpXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCBjYW5jZWxFbXVsYXRpb24sIHBhc3NpdmVGYWxzZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCB0aGlzLl9uYXRpdmVEcmFnU3RhcnQpXG4gICAgICAgIHRoaXMuZWxlbWVudC5kcmFnZ2FibGUgPSB0cnVlXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9uYXRpdmVEcmFnRW5kLCBwYXNzaXZlRmFsc2UpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUsIHBhc3NpdmVGYWxzZSlcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUsIHBhc3NpdmVGYWxzZSlcblxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQsIHBhc3NpdmVGYWxzZSlcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kLCBwYXNzaXZlRmFsc2UpXG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX3Njcm9sbClcbiAgICB0aGlzLnNjcm9sbEVsZW1lbnRzLmZvckVhY2goKHApID0+IHAuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fc2Nyb2xsKSlcblxuICAgIHRoaXMuX2RyYWdTdGFydFBlbmRpbmcgPSBpc1N0YXJ0UGVuZGluZ1xuICB9XG5cbiAgZHJhZ01vdmUoZXZlbnQpIHtcbiAgICBsZXQgdG91Y2hcblxuICAgIHRoaXMuaXNUb3VjaEV2ZW50ID0gKGlzVG91Y2ggJiYgKGV2ZW50IGluc3RhbmNlb2Ygd2luZG93LlRvdWNoRXZlbnQpKVxuICAgIGlmICh0aGlzLmlzVG91Y2hFdmVudCkge1xuICAgICAgdG91Y2ggPSBnZXRUb3VjaEJ5SUQoZXZlbnQsIHRoaXMuX3RvdWNoSWQpXG5cbiAgICAgIGlmICghdG91Y2gpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnNlZW1zU2Nyb2xsaW5nKCkpIHtcbiAgICAgICAgdGhpcy5jYW5jZWxEcmFnZ2luZygpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMudG91Y2hQb2ludCA9IG5ldyBQb2ludChcbiAgICAgIHRoaXMuaXNUb3VjaEV2ZW50ID8gdG91Y2gucGFnZVggOiBldmVudC5jbGllbnRYLFxuICAgICAgdGhpcy5pc1RvdWNoRXZlbnQgPyB0b3VjaC5wYWdlWSA6IGV2ZW50LmNsaWVudFlcbiAgICApXG5cbiAgICBpZiAodGhpcy5fZHJhZ1N0YXJ0UGVuZGluZykge1xuICAgICAgY29uc3QgZHggPSB0aGlzLnRvdWNoUG9pbnQueCAtIHRoaXMuX3N0YXJ0VG91Y2hQb2ludC54XG4gICAgICBjb25zdCBkeSA9IHRoaXMudG91Y2hQb2ludC55IC0gdGhpcy5fc3RhcnRUb3VjaFBvaW50LnlcbiAgICAgIGlmIChNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpIDwgdGhpcy5kcmFnU3RhcnRUaHJlc2hvbGQpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICB0aGlzLl9kcmFnU3RhcnRQZW5kaW5nID0gZmFsc2VcbiAgICAgIGlmICghdGhpcy5lbWl0RHJhZ0V2ZW50KCdzdGFydCcsIHsgY2FuY2VsYWJsZTogdHJ1ZSB9KSkge1xuICAgICAgICB0aGlzLmNhbmNlbERyYWdnaW5nKClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5pc0RyYWdnaW5nID0gdHJ1ZVxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gICAgbGV0IHBvaW50ID0gdGhpcy5fc3RhcnRQb3NpdGlvbi5hZGQodGhpcy50b3VjaFBvaW50LnN1Yih0aGlzLl9zdGFydFRvdWNoUG9pbnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMud2luZG93U2Nyb2xsUG9pbnQuc3ViKHRoaXMuX3N0YXJ0V2luZG93U2Nyb2xsUG9pbnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMuc2Nyb2xsRWxlbWVudHNPZmZzZXQuc3ViKHRoaXMuX3N0YXJ0U2Nyb2xsRWxlbWVudHNPZmZzZXQpKVxuXG4gICAgcG9pbnQgPSB0aGlzLmJvdW5kaW5nLmJvdW5kKHBvaW50LCB0aGlzLmdldFNpemUoKSlcbiAgICB0aGlzLmRldGVybWluZURpcmVjdGlvbihwb2ludClcbiAgICB0aGlzLm1vdmUocG9pbnQpXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RyYWdlZS1hY3RpdmUnKVxuICB9XG5cbiAgZHJhZ0VuZChldmVudCkge1xuICAgIHRoaXMuaXNUb3VjaEV2ZW50ID0gKGlzVG91Y2ggJiYgKGV2ZW50IGluc3RhbmNlb2Ygd2luZG93LlRvdWNoRXZlbnQpKVxuXG4gICAgaWYgKHRoaXMuaXNUb3VjaEV2ZW50ICYmICFnZXRUb3VjaEJ5SUQoZXZlbnQsIHRoaXMuX3RvdWNoSWQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5fZHJhZ1N0YXJ0UGVuZGluZykge1xuICAgICAgLy8gdGhyZXNob2xkIG5ldmVyIGNyb3NzZWQg4oCUIHRyZWF0IGFzIGNsaWNrLCBjbGVhbiB1cCBzaWxlbnRseVxuICAgICAgdGhpcy5fZHJhZ1N0YXJ0UGVuZGluZyA9IGZhbHNlXG4gICAgICB0aGlzLmNhbmNlbERyYWdnaW5nKClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLmlzRHJhZ2dpbmcpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfVxuXG4gICAgdGhpcy5kcm9wKClcbiAgICB0aGlzLmVtaXREcmFnRXZlbnQoJ2VuZCcpXG4gICAgdGhpcy5jYW5jZWxEcmFnZ2luZygpXG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZWUtYWN0aXZlJykpXG4gIH1cblxuICBvblNjcm9sbChfZXZlbnQpIHtcbiAgICBsZXQgcG9pbnQgPSB0aGlzLl9zdGFydFBvc2l0aW9uLmFkZCh0aGlzLnRvdWNoUG9pbnQuc3ViKHRoaXMuX3N0YXJ0VG91Y2hQb2ludCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy53aW5kb3dTY3JvbGxQb2ludC5zdWIodGhpcy5fc3RhcnRXaW5kb3dTY3JvbGxQb2ludCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy5zY3JvbGxFbGVtZW50c09mZnNldC5zdWIodGhpcy5fc3RhcnRTY3JvbGxFbGVtZW50c09mZnNldCkpXG5cbiAgICBwb2ludCA9IHRoaXMuYm91bmRpbmcuYm91bmQocG9pbnQsIHRoaXMuZ2V0U2l6ZSgpKVxuICAgIGlmICghdGhpcy5uYXRpdmVEcmFnQW5kRHJvcCkge1xuICAgICAgdGhpcy5kZXRlcm1pbmVEaXJlY3Rpb24ocG9pbnQpXG4gICAgICB0aGlzLm1vdmUocG9pbnQpXG4gICAgfVxuICB9XG5cbiAgbmF0aXZlRHJhZ1N0YXJ0KGV2ZW50KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dCcsICdGaXJlRm94IGZpeCcpXG4gICAgZXZlbnQuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSAnbW92ZSdcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIHRoaXMuX25hdGl2ZURyYWdPdmVyKVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzLl9uYXRpdmVEcm9wKVxuICB9XG5cbiAgbmF0aXZlRHJhZ092ZXIoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZXZlbnQuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnbW92ZSdcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZHJhZ2VlLXBsYWNlaG9sZGVyJylcbiAgICBpZiAoZXZlbnQuY2xpZW50WCA9PT0gMCAmJiBldmVudC5jbGllbnRZID09PSAwKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLnRvdWNoUG9pbnQgPSBuZXcgUG9pbnQoZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSlcbiAgICBsZXQgcG9pbnQgPSB0aGlzLl9zdGFydFBvc2l0aW9uLmFkZCh0aGlzLnRvdWNoUG9pbnQuc3ViKHRoaXMuX3N0YXJ0VG91Y2hQb2ludCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy53aW5kb3dTY3JvbGxQb2ludC5zdWIodGhpcy5fc3RhcnRXaW5kb3dTY3JvbGxQb2ludCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy5zY3JvbGxFbGVtZW50c09mZnNldC5zdWIodGhpcy5fc3RhcnRTY3JvbGxFbGVtZW50c09mZnNldCkpXG4gICAgcG9pbnQgPSB0aGlzLmJvdW5kaW5nLmJvdW5kKHBvaW50LCB0aGlzLmdldFNpemUoKSlcbiAgICB0aGlzLmRldGVybWluZURpcmVjdGlvbihwb2ludClcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9pbnRcbiAgICB0aGlzLmVtaXREcmFnRXZlbnQoJ21vdmUnKVxuICB9XG5cbiAgbmF0aXZlRHJhZ0VuZChfZXZlbnQpIHtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2VlLXBsYWNlaG9sZGVyJylcbiAgICB0aGlzLmRyb3AoKVxuICAgIHRoaXMuZW1pdERyYWdFdmVudCgnZW5kJylcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIHRoaXMuX25hdGl2ZURyYWdPdmVyKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzLl9uYXRpdmVEcm9wKVxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9zY3JvbGwpXG4gICAgdGhpcy5zY3JvbGxFbGVtZW50cy5mb3JFYWNoKChwKSA9PiBwLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX3Njcm9sbCkpXG4gICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2VcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkcmFnZ2FibGUnKVxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCB0aGlzLl9uYXRpdmVEcmFnU3RhcnQpXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdlZS1hY3RpdmUnKVxuICB9XG5cbiAgbmF0aXZlRHJvcChldmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgY2FuY2VsRHJhZ2dpbmcgKCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcblxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX25hdGl2ZURyYWdFbmQpXG5cbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fc2Nyb2xsKVxuICAgIHRoaXMuc2Nyb2xsRWxlbWVudHMuZm9yRWFjaCgocCkgPT4gcC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9zY3JvbGwpKVxuXG4gICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2VcbiAgICB0aGlzLl9wcmV2aW91c0RpcmVjdGlvblBvc2l0aW9uID0gbnVsbFxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2RyYWdnYWJsZScpXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIHRoaXMuX25hdGl2ZURyYWdTdGFydClcbiAgfVxuXG4gIGNvcHlTdHlsZXMoc291cmNlLCBkZXN0aW5hdGlvbikge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuY29weVN0eWxlcykge1xuICAgICAgdGhpcy5vcHRpb25zLmNvcHlTdHlsZXMoc291cmNlLCBkZXN0aW5hdGlvbilcbiAgICB9IGVsc2Uge1xuICAgICAgY29weVN0eWxlcyhzb3VyY2UsIGRlc3RpbmF0aW9uKVxuICAgIH1cbiAgfVxuXG4gIGVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcChldmVudCkge1xuICAgIGNvbnN0IGNvbnRhaW5lclJlY3QgPSB0aGlzLmNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIGNvbnN0IGNsb25lZEVsZW1lbnQgPSB0aGlzLmVsZW1lbnQuY2xvbmVOb2RlKHRydWUpXG4gICAgY2xvbmVkRWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wZXJ0eV0gPSAnJ1xuICAgIHRoaXMuY29weVN0eWxlcyh0aGlzLmVsZW1lbnQsIGNsb25lZEVsZW1lbnQpXG4gICAgY2xvbmVkRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkcmFnZWUtbmF0aXZlLWVtdWxhdGlvbicpXG4gICAgY2xvbmVkRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSdcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNsb25lZEVsZW1lbnQpXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RyYWdlZS1wbGFjZWhvbGRlcicpXG5cbiAgICBjb25zdCBlbXVsYXRpb25EcmFnZ2FibGUgPSBuZXcgRHJhZ2dhYmxlKGNsb25lZEVsZW1lbnQsIHtcbiAgICAgIGNvbnRhaW5lcjogZG9jdW1lbnQuYm9keSxcbiAgICAgIHRvdWNoRHJhZ2dpbmdUaHJlc2hvbGQ6IDAsXG4gICAgICBkb21FdmVudHM6IGZhbHNlLFxuICAgICAgYm91bmQocG9pbnQpIHtcbiAgICAgICAgcmV0dXJuIHBvaW50XG4gICAgICB9LFxuICAgICAgb246IHtcbiAgICAgICAgJ2RyYWc6bW92ZSc6ICgpID0+IHtcbiAgICAgICAgICBjb25zdCBjb250YWluZXJSZWN0UG9pbnQgPSBuZXcgUG9pbnQoY29udGFpbmVyUmVjdC5sZWZ0LCBjb250YWluZXJSZWN0LnRvcClcbiAgICAgICAgICB0aGlzLnBvc2l0aW9uID0gZW11bGF0aW9uRHJhZ2dhYmxlLnBvc2l0aW9uLnN1Yihjb250YWluZXJSZWN0UG9pbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdWIodGhpcy5fc3RhcnRXaW5kb3dTY3JvbGxQb2ludClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZCh0aGlzLl9zdGFydFBhcmVudHNTY3JvbGxPZmZzZXQpXG5cbiAgICAgICAgICB0aGlzLmRldGVybWluZURpcmVjdGlvbih0aGlzLnBvc2l0aW9uKVxuICAgICAgICAgIHRoaXMuZW1pdERyYWdFdmVudCgnbW92ZScpXG4gICAgICAgIH0sXG4gICAgICAgICdkcmFnOmVuZCc6ICgpID0+IHtcbiAgICAgICAgICBlbXVsYXRpb25EcmFnZ2FibGUuZGVzdHJveSgpXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChjbG9uZWRFbGVtZW50KVxuICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZWUtcGxhY2Vob2xkZXInKVxuICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZWUtYWN0aXZlJylcblxuICAgICAgICAgIHRoaXMuZHJvcCgpXG4gICAgICAgICAgdGhpcy5lbWl0RHJhZ0V2ZW50KCdlbmQnKVxuICAgICAgICAgIHRoaXMuY2FuY2VsRHJhZ2dpbmcoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IGNvbnRhaW5lclJlY3RQb2ludCA9IG5ldyBQb2ludChjb250YWluZXJSZWN0LmxlZnQsIGNvbnRhaW5lclJlY3QudG9wKVxuICAgIGVtdWxhdGlvbkRyYWdnYWJsZS5fc3RhcnRXaW5kb3dTY3JvbGxQb2ludCA9IHRoaXMuX3N0YXJ0V2luZG93U2Nyb2xsUG9pbnRcblxuICAgIGVtdWxhdGlvbkRyYWdnYWJsZS5tb3ZlKFxuICAgICAgdGhpcy5waW5uZWRQb3NpdGlvbi5hZGQoY29udGFpbmVyUmVjdFBvaW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy53aW5kb3dTY3JvbGxQb2ludClcbiAgICAgICAgICAgICAgICAgICAgICAgICAuc3ViKHRoaXMucGFyZW50c1Njcm9sbE9mZnNldClcbiAgICApXG5cbiAgICBlbXVsYXRpb25EcmFnZ2FibGUuZHJhZ1N0YXJ0KGV2ZW50KVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIGVtaXREcmFnRXZlbnQodHlwZSwgeyBjYW5jZWxhYmxlID0gZmFsc2UgfSA9IHt9KSB7XG4gICAgY29uc3QgZGV0YWlsID0geyBkcmFnZ2FibGU6IHRoaXMgfVxuICAgIGNvbnN0IGlzTm90UHJldmVudGVkID0gdGhpcy5lbWl0KGBkcmFnOiR7dHlwZX1gLCBkZXRhaWwsIHsgY2FuY2VsYWJsZSB9KVxuXG4gICAgaWYgKCF0aGlzLmRvbUV2ZW50cykgcmV0dXJuIGlzTm90UHJldmVudGVkXG5cbiAgICByZXR1cm4gZGlzcGF0Y2hEb21FdmVudCh0aGlzLmVsZW1lbnQsIGBkcmFnZWU6JHt0eXBlfWAsIGRldGFpbCwgeyBjYW5jZWxhYmxlIH0pICYmIGlzTm90UHJldmVudGVkXG4gIH1cblxuICBkcm9wKCkge1xuICAgIGlmICh0aGlzLmVtaXREcmFnRXZlbnQoJ2Ryb3AnLCB7IGNhbmNlbGFibGU6IHRydWUgfSkpIHtcbiAgICAgIHRoaXMucGluUG9zaXRpb24odGhpcy5wb3NpdGlvbilcbiAgICB9XG4gIH1cblxuICBnZXRSZWN0YW5nbGUoKSB7XG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUodGhpcy5wb3NpdGlvbiwgdGhpcy5nZXRTaXplKCkpXG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIGlmICh0aGlzLmJvdW5kaW5nLnJlZnJlc2gpIHtcbiAgICAgIHRoaXMuYm91bmRpbmcucmVmcmVzaCgpXG4gICAgfVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmhhbmRsZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0KVxuICAgIHRoaXMuaGFuZGxlci5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQpXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIHRoaXMuX25hdGl2ZURyYWdTdGFydClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCB0aGlzLl9uYXRpdmVEcmFnT3ZlcilcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcm9wJywgdGhpcy5fbmF0aXZlRHJvcClcbiAgICBzY29wZXMuZm9yRWFjaCgoc2NvcGUpID0+IHNjb3BlLnJlbGVhc2VEcmFnZ2FibGUodGhpcykpXG5cbiAgICBjb25zdCBpbmRleCA9IGRyYWdnYWJsZXMuaW5kZXhPZih0aGlzKVxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICBkcmFnZ2FibGVzLnNwbGljZShpbmRleCwgMSlcbiAgICB9XG4gIH1cblxuICBnZXQgY29udGFpbmVyKCkge1xuICAgIHJldHVybiAodGhpcy5fY29udGFpbmVyID0gdGhpcy5fY29udGFpbmVyIHx8IHRoaXMub3B0aW9ucy5jb250YWluZXIgfHwgdGhpcy5vcHRpb25zLnBhcmVudCB8fCB0aGlzLmVsZW1lbnQub2Zmc2V0UGFyZW50KVxuICB9XG5cbiAgZ2V0IGhhbmRsZXIoKSB7XG4gICAgaWYgKCF0aGlzLl9oYW5kbGVyKSB7XG4gICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5oYW5kbGVyID09PSAnc3RyaW5nJykge1xuICAgICAgICB0aGlzLl9oYW5kbGVyID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5vcHRpb25zLmhhbmRsZXIpIHx8IHRoaXMuZWxlbWVudFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5faGFuZGxlciA9IHRoaXMub3B0aW9ucy5oYW5kbGVyIHx8IHRoaXMuZWxlbWVudFxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9oYW5kbGVyXG4gIH1cblxuICBnZXQgc3RvcFByb3BhZ2F0aW9uT25EcmFnU3RhcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5zdG9wUHJvcGFnYXRpb25PbkRyYWdTdGFydCB8fCBmYWxzZVxuICB9XG5cbiAgZ2V0IG5hdGl2ZURyYWdBbmREcm9wKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMubmF0aXZlRHJhZ0FuZERyb3AgfHwgZmFsc2VcbiAgfVxuXG4gIGdldCBkb21FdmVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5kb21FdmVudHMgIT09IGZhbHNlXG4gIH1cblxuICBnZXQgZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wT25Ub3VjaCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcE9uVG91Y2ggfHwgZmFsc2VcbiAgfVxuXG4gIGdldCBzaG91bGRSZW1vdmVaZXJvVHJhbnNsYXRlKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuc2hvdWxkUmVtb3ZlWmVyb1RyYW5zbGF0ZSB8fCBmYWxzZVxuICB9XG5cbiAgZ2V0IHRvdWNoRHJhZ2dpbmdUaHJlc2hvbGQoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy50b3VjaERyYWdnaW5nVGhyZXNob2xkIHx8IDBcbiAgfVxuXG4gIGdldCBkcmFnU3RhcnRUaHJlc2hvbGQoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5kcmFnU3RhcnRUaHJlc2hvbGQgfHwgMFxuICB9XG5cbiAgZ2V0IGRyYWdPdmVyVGhyb3R0bGVEdXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmRyYWdPdmVyVGhyb3R0bGVEdXJhdGlvbiB8fCAxNlxuICB9XG5cbiAgZ2V0IGlzQ29uc2lkZXJUcmFuc2Zvcm1PZmZzZXQgKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuY29uc2lkZXJUcmFuc2Zvcm1PZmZzZXQgfHwgZmFsc2VcbiAgfVxuXG4gIGdldCB3aW5kb3dTY3JvbGxQb2ludCgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHdpbmRvdy5zY3JvbGxYLCB3aW5kb3cuc2Nyb2xsWSlcbiAgfVxuXG4gIGdldCBzY3JvbGxSb290Q29udGFpbmVyKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuc2Nyb2xsUm9vdENvbnRhaW5lciB8fCB0aGlzLmNvbnRhaW5lclxuICB9XG5cbiAgZ2V0IHNjcm9sbEVsZW1lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLl9jYWNoZWRTY3JvbGxFbGVtZW50c1xuICAgICAgPyB0aGlzLl9jYWNoZWRTY3JvbGxFbGVtZW50c1xuICAgICAgOiAodGhpcy5fY2FjaGVkU2Nyb2xsRWxlbWVudHMgPSBnZXRQYXJlbnRzQ2hhaW4odGhpcy5lbGVtZW50LCB0aGlzLnNjcm9sbFJvb3RDb250YWluZXIpKVxuICB9XG5cbiAgZ2V0IHNjcm9sbEVsZW1lbnRzT2Zmc2V0KCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQoXG4gICAgICB0aGlzLnNjcm9sbEVsZW1lbnRzLnJlZHVjZSgoc3VtLCBwKSA9PiBzdW0gKyBwLnNjcm9sbExlZnQsIDApLFxuICAgICAgdGhpcy5zY3JvbGxFbGVtZW50cy5yZWR1Y2UoKHN1bSwgcCkgPT4gc3VtICsgcC5zY3JvbGxUb3AsIDApXG4gICAgKVxuICB9XG5cbiAgZ2V0IHBhcmVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhY2hlZFBhcmVudHNcbiAgICAgID8gdGhpcy5fY2FjaGVkUGFyZW50c1xuICAgICAgOiAodGhpcy5fY2FjaGVkUGFyZW50cyA9IGdldFBhcmVudHNDaGFpbih0aGlzLmVsZW1lbnQsIHRoaXMuY29udGFpbmVyKSlcbiAgfVxuXG4gIGdldCBwYXJlbnRzU2Nyb2xsT2Zmc2V0KCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQoXG4gICAgICB0aGlzLnBhcmVudHMucmVkdWNlKChzdW0sIHApID0+IHN1bSArIHAuc2Nyb2xsTGVmdCwgMCksXG4gICAgICB0aGlzLnBhcmVudHMucmVkdWNlKChzdW0sIHApID0+IHN1bSArIHAuc2Nyb2xsVG9wLCAwKVxuICAgIClcbiAgfVxuXG4gIGdldCBlbmFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZVxuICB9XG5cbiAgc2V0IGVuYWJsZShlbmFibGUpIHtcbiAgICBpZiAoZW5hYmxlKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2VlLWRpc2FibGUnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZHJhZ2VlLWRpc2FibGUnKVxuICAgIH1cblxuICAgIHRoaXMuX2VuYWJsZSA9IGVuYWJsZVxuICB9XG59XG5cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQsIGltbWVkaWF0ZSkge1xuICBsZXQgdGltZW91dFxuXG4gIHJldHVybiBmdW5jdGlvbiBleGVjdXRlZEZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzXG4gICAgY29uc3QgYXJncyA9IGFyZ3VtZW50c1xuXG4gICAgY29uc3QgbGF0ZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgIHRpbWVvdXQgPSBudWxsXG4gICAgICBpZiAoIWltbWVkaWF0ZSkgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKVxuICAgIH1cblxuICAgIGNvbnN0IGNhbGxOb3cgPSBpbW1lZGlhdGUgJiYgIXRpbWVvdXRcblxuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KVxuXG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpXG5cbiAgICBpZiAoY2FsbE5vdykgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKVxuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0RGlzdGFuY2UocDEsIHAyKSB7XG4gIGNvbnN0IGR4ID0gcDEueCAtIHAyLngsIGR5ID0gcDEueSAtIHAyLnlcbiAgcmV0dXJuIE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFhEaWZmZXJlbmNlKHAxLCBwMikge1xuICByZXR1cm4gTWF0aC5hYnMocDEueCAtIHAyLngpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRZRGlmZmVyZW5jZShwMSwgcDIpIHtcbiAgcmV0dXJuIE1hdGguYWJzKHAxLnkgLSBwMi55KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtZWRTcGFjZURpc3RhbmNlRmFjdG9yeShvcHRpb25zKSB7XG4gIHJldHVybiAocDEsIHAyKSA9PiB7XG4gICAgcmV0dXJuIE1hdGguc3FydChcbiAgICAgIE1hdGgucG93KG9wdGlvbnMueCAqIE1hdGguYWJzKHAxLnggLSBwMi54KSwgMikgK1xuICAgICAgTWF0aC5wb3cob3B0aW9ucy55ICogTWF0aC5hYnMocDEueSAtIHAyLnkpLCAyKVxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5kZXhPZk5lYXJlc3RQb2ludChhcnIsIHZhbCwgcmFkaXVzLCBnZXREaXN0YW5jZUZ1bmM9Z2V0RGlzdGFuY2UpIHtcbiAgbGV0IHNpemUsIGluZGV4ID0gMCwgaSwgdGVtcFxuICBpZiAoYXJyLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAtMVxuICB9XG4gIHNpemUgPSBnZXREaXN0YW5jZUZ1bmMoYXJyWzBdLCB2YWwpXG4gIGZvciAoaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICB0ZW1wID0gZ2V0RGlzdGFuY2VGdW5jKGFycltpXSwgdmFsKVxuICAgIGlmICh0ZW1wIDwgc2l6ZSkge1xuICAgICAgc2l6ZSA9IHRlbXBcbiAgICAgIGluZGV4ID0gaVxuICAgIH1cbiAgfVxuICBpZiAocmFkaXVzID49IDAgJiYgc2l6ZSA+IHJhZGl1cykge1xuICAgIHJldHVybiAtMVxuICB9XG4gIHJldHVybiBpbmRleFxufVxuIiwiaW1wb3J0IGRlYm91bmNlIGZyb20gJy4vdXRpbHMvZGVib3VuY2UnXG5pbXBvcnQgcmVtb3ZlSXRlbSBmcm9tICcuL3V0aWxzL3JlbW92ZS1hcnJheS1pdGVtJ1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50RW1pdHRlcidcbmltcG9ydCBkaXNwYXRjaERvbUV2ZW50IGZyb20gJy4vdXRpbHMvZGlzcGF0Y2gtZG9tLWV2ZW50J1xuaW1wb3J0IHtcbiAgZ2V0RGlzdGFuY2UsXG4gIGluZGV4T2ZOZWFyZXN0UG9pbnRcbn0gZnJvbSAnLi9nZW9tZXRyeS9kaXN0YW5jZXMnXG5cbmltcG9ydCBEcmFnZ2FibGUgZnJvbSAnLi9kcmFnZ2FibGUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3QgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvcihkcmFnZ2FibGVzLCBvcHRpb25zPXt9KSB7XG4gICAgc3VwZXIob3B0aW9ucylcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHRpbWVFbmQ6IDIwMCxcbiAgICAgIHRpbWVFeGNhbmdlOiA0MDAsXG4gICAgICByYWRpdXM6IDMwXG4gICAgfSwgb3B0aW9ucylcblxuICAgIHRoaXMuY29udGFpbmVyID0gb3B0aW9ucy5jb250YWluZXJcbiAgICB0aGlzLmRyYWdnYWJsZXMgPSBkcmFnZ2FibGVzXG4gICAgdGhpcy5jaGFuZ2VkRHVyaW5nSXRlcmF0aW9uID0gZmFsc2VcbiAgICB0aGlzLmRyYWdnYWJsZUNvbnRyb2xsZXJzID0gbmV3IE1hcCgpXG5cbiAgICB0aGlzLnJlc2l6ZU9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKGRlYm91bmNlKHRoaXMub25SZXNpemUuYmluZCh0aGlzKSwgMTAwKSlcblxuICAgIGlmICh0aGlzLmNvbnRhaW5lcikge1xuICAgICAgdGhpcy5yZXNpemVPYnNlcnZlci5vYnNlcnZlKHRoaXMuY29udGFpbmVyKVxuICAgIH1cblxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBvblJlc2l6ZSgpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLnJlb3JkZXJPbkNoYW5nZSkgdGhpcy5yZXNldCgpXG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgaWYoIWRyYWdnYWJsZS5pc0RyYWdnaW5nKSB7XG4gICAgICAgIGRyYWdnYWJsZS5zdGFydFBvc2l0aW9uaW5nKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLl9lbmFibGUgPSB0cnVlXG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gdGhpcy5pbml0RHJhZ2dhYmxlKGRyYWdnYWJsZSkpXG4gIH1cblxuICBpbml0RHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIGRyYWdnYWJsZS5lbmFibGUgPSB0aGlzLl9lbmFibGVcbiAgICB0aGlzLmxpc3RlblRvKGRyYWdnYWJsZSwgJ2RyYWc6bW92ZScsICgpID0+IHRoaXMub25Nb3ZlKGRyYWdnYWJsZSkpXG4gICAgdGhpcy5saXN0ZW5UbyhkcmFnZ2FibGUsICdkcmFnOmRyb3AnLCAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC5kZWZhdWx0UHJldmVudGVkKSByZXR1cm5cblxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbiwgdGhpcy5vcHRpb25zLnRpbWVFbmQpXG4gICAgICB0aGlzLm9uRW5kKGRyYWdnYWJsZSlcbiAgICB9KVxuICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZShkcmFnZ2FibGUuZWxlbWVudClcbiAgfVxuXG4gIGxpc3RlblRvKGRyYWdnYWJsZSwgZXZlbnROYW1lLCBoYW5kbGVyKSB7XG4gICAgZHJhZ2dhYmxlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBoYW5kbGVyLCB7IHNpZ25hbDogdGhpcy5zaWduYWxGb3IoZHJhZ2dhYmxlKSB9KVxuICB9XG5cbiAgc2lnbmFsRm9yKGRyYWdnYWJsZSkge1xuICAgIGlmICghdGhpcy5kcmFnZ2FibGVDb250cm9sbGVycy5oYXMoZHJhZ2dhYmxlKSkge1xuICAgICAgdGhpcy5kcmFnZ2FibGVDb250cm9sbGVycy5zZXQoZHJhZ2dhYmxlLCBuZXcgQWJvcnRDb250cm9sbGVyKCkpXG4gICAgfVxuICAgIHJldHVybiB0aGlzLmRyYWdnYWJsZUNvbnRyb2xsZXJzLmdldChkcmFnZ2FibGUpLnNpZ25hbFxuICB9XG5cbiAgcmVsZWFzZURyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICB0aGlzLnJlc2l6ZU9ic2VydmVyLnVub2JzZXJ2ZShkcmFnZ2FibGUuZWxlbWVudClcbiAgICB0aGlzLmRyYWdnYWJsZUNvbnRyb2xsZXJzLmdldChkcmFnZ2FibGUpPy5hYm9ydCgpXG4gICAgdGhpcy5kcmFnZ2FibGVDb250cm9sbGVycy5kZWxldGUoZHJhZ2dhYmxlKVxuICAgIHJlbW92ZUl0ZW0odGhpcy5kcmFnZ2FibGVzLCBkcmFnZ2FibGUpXG4gIH1cblxuICBvbk1vdmUoZHJhZ2dhYmxlKSB7XG4gICAgaWYgKHRoaXMuc3dhcHBpbmdEaXNhYmxlZCkgcmV0dXJuXG5cbiAgICBjb25zdCBzb3J0ZWREcmFnZ2FibGVzID0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcbiAgICBjb25zdCBwaW5uZWRQb3NpdGlvbnMgPSBzb3J0ZWREcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24pXG5cbiAgICBjb25zdCBjdXJyZW50SW5kZXggPSBzb3J0ZWREcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKVxuICAgIGNvbnN0IHRhcmdldEluZGV4ID0gaW5kZXhPZk5lYXJlc3RQb2ludChwaW5uZWRQb3NpdGlvbnMsIGRyYWdnYWJsZS5wb3NpdGlvbiwgdGhpcy5vcHRpb25zLnJhZGl1cywgdGhpcy5kaXN0YW5jZUZ1bmMpXG5cbiAgICBpZiAodGFyZ2V0SW5kZXggIT09IC0xICYmIGN1cnJlbnRJbmRleCAhPT0gdGFyZ2V0SW5kZXgpIHtcbiAgICAgIGlmICh0YXJnZXRJbmRleCA8IGN1cnJlbnRJbmRleCkge1xuICAgICAgICBmb3IgKGxldCBpPXRhcmdldEluZGV4OyBpPGN1cnJlbnRJbmRleDsgaSsrKSB7XG4gICAgICAgICAgc29ydGVkRHJhZ2dhYmxlc1tpXS5waW5Qb3NpdGlvbihwaW5uZWRQb3NpdGlvbnNbaSsxXSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGxldCBpPWN1cnJlbnRJbmRleDsgaTx0YXJnZXRJbmRleDsgaSsrKSB7XG4gICAgICAgICAgc29ydGVkRHJhZ2dhYmxlc1tpKzFdLnBpblBvc2l0aW9uKHBpbm5lZFBvc2l0aW9uc1tpXSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChkcmFnZ2FibGUubmF0aXZlRHJhZ0FuZERyb3ApIHtcbiAgICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKHBpbm5lZFBvc2l0aW9uc1t0YXJnZXRJbmRleF0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24gPSBwaW5uZWRQb3NpdGlvbnNbdGFyZ2V0SW5kZXhdXG4gICAgICB9XG5cbiAgICAgIHRoaXMuY2hhbmdlZER1cmluZ0l0ZXJhdGlvbiA9IHRydWVcbiAgICB9XG4gIH1cblxuICBvbkVuZChkcmFnZ2FibGUpIHtcbiAgICBpZiAodGhpcy5jaGFuZ2VkRHVyaW5nSXRlcmF0aW9uKSB7XG4gICAgICB0aGlzLmVtaXRMaXN0RXZlbnQoJ2NoYW5nZScsIGRyYWdnYWJsZSlcbiAgICAgIHRoaXMuY2hhbmdlZER1cmluZ0l0ZXJhdGlvbiA9IGZhbHNlXG5cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucmVvcmRlck9uQ2hhbmdlICYmIHRoaXMub3B0aW9ucy5jb250YWluZXIpIHtcbiAgICAgICAgdGhpcy5yZW9yZGVyRWxlbWVudHMoZHJhZ2dhYmxlKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlb3JkZXJFbGVtZW50cyhtb3ZlZERyYWdnYWJsZSkge1xuICAgIGNvbnN0IHNvcnRlZERyYWdnYWJsZXMgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuICAgIGNvbnN0IGluZGV4ID0gc29ydGVkRHJhZ2dhYmxlcy5pbmRleE9mKG1vdmVkRHJhZ2dhYmxlKVxuICAgIGNvbnN0IG5leHQgPSBzb3J0ZWREcmFnZ2FibGVzW2luZGV4ICsgMV1cblxuICAgIHRoaXMucmVzZXQoKVxuXG4gICAgaWYgKG5leHQpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmluc2VydEJlZm9yZShtb3ZlZERyYWdnYWJsZS5lbGVtZW50LCBuZXh0LmVsZW1lbnQpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKG1vdmVkRHJhZ2dhYmxlLmVsZW1lbnQpXG4gICAgfVxuXG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGQpID0+IGQuc3RhcnRQb3NpdGlvbmluZygpKVxuICAgIHRoaXMuZW1pdExpc3RFdmVudCgncmVvcmRlcmVkJywgbW92ZWREcmFnZ2FibGUpXG4gIH1cblxuICBlbWl0TGlzdEV2ZW50KHR5cGUsIGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IGRldGFpbCA9IHsgbGlzdDogdGhpcywgZHJhZ2dhYmxlIH1cbiAgICB0aGlzLmVtaXQoYGxpc3Q6JHt0eXBlfWAsIGRldGFpbClcblxuICAgIGlmICh0aGlzLmRvbUV2ZW50cykge1xuICAgICAgZGlzcGF0Y2hEb21FdmVudChkcmFnZ2FibGUuZWxlbWVudCwgYGRyYWdlZTpsaXN0LSR7dHlwZX1gLCBkZXRhaWwpXG4gICAgfVxuICB9XG5cbiAgZ2V0Q3VycmVudFBpbm5lZFBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5kcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24uY2xvbmUoKSlcbiAgfVxuXG4gIGdldFNvcnRlZERyYWdnYWJsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJhZ2dhYmxlcy5zb3J0KHRoaXMuc29ydGluZy5iaW5kKHRoaXMpKVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnJlc2V0UG9zaXRpb25Ub0luaXRpYWwoKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnJlZnJlc2goKSlcbiAgfVxuXG4gIGFkZChkcmFnZ2FibGVzKSB7XG4gICAgaWYgKCEoZHJhZ2dhYmxlcyBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgZHJhZ2dhYmxlcyA9IFtkcmFnZ2FibGVzXVxuICAgIH1cbiAgICBkcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gdGhpcy5pbml0RHJhZ2dhYmxlKGRyYWdnYWJsZSkpXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gdGhpcy5kcmFnZ2FibGVzLmNvbmNhdChkcmFnZ2FibGVzKVxuICB9XG5cbiAgcmVtb3ZlKGRyYWdnYWJsZXMpIHtcbiAgICBjb25zdCBpbml0aWFsUG9zaXRpb25zID0gdGhpcy5kcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uKVxuICAgIGNvbnN0IGxpc3QgPSBbXVxuICAgIGNvbnN0IHNvcnRlZERyYWdnYWJsZXMgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuXG4gICAgaWYgKCEoZHJhZ2dhYmxlcyBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgZHJhZ2dhYmxlcyA9IFtkcmFnZ2FibGVzXVxuICAgIH1cblxuICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB0aGlzLnJlbGVhc2VEcmFnZ2FibGUoZHJhZ2dhYmxlKSlcblxuICAgIGxldCBqID0gMFxuICAgIHNvcnRlZERyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBpZiAodGhpcy5kcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTEpIHtcbiAgICAgICAgaWYgKGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbiAhPT0gaW5pdGlhbFBvc2l0aW9uc1tqXSkge1xuICAgICAgICAgIGRyYWdnYWJsZS5waW5Qb3NpdGlvbihpbml0aWFsUG9zaXRpb25zW2pdLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICAgIH1cbiAgICAgICAgZHJhZ2dhYmxlLmluaXRpYWxQb3NpdGlvbiA9IGluaXRpYWxQb3NpdGlvbnNbal1cbiAgICAgICAgaisrXG4gICAgICAgIGxpc3QucHVzaChkcmFnZ2FibGUpXG4gICAgICB9XG4gICAgfSlcbiAgICB0aGlzLmRyYWdnYWJsZXMgPSBsaXN0XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLnJlbW92ZSh0aGlzLmRyYWdnYWJsZXMuc2xpY2UoKSlcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLmRlc3Ryb3koKSlcbiAgICBpZiAodGhpcy5jb250YWluZXIpIHtcbiAgICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIudW5vYnNlcnZlKHRoaXMuY29udGFpbmVyKVxuICAgIH1cbiAgfVxuXG4gIHNvcnRpbmcoZHJhZ2dhYmxlQSwgZHJhZ2dhYmxlQikge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuc29ydGluZykge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5zb3J0aW5nKGRyYWdnYWJsZUEsIGRyYWdnYWJsZUIpXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChkcmFnZ2FibGVBLnBpbm5lZFBvc2l0aW9uLnkgPCBkcmFnZ2FibGVCLnBpbm5lZFBvc2l0aW9uLnkpIHJldHVybiAtMVxuICAgICAgaWYgKGRyYWdnYWJsZUEucGlubmVkUG9zaXRpb24ueSA+IGRyYWdnYWJsZUIucGlubmVkUG9zaXRpb24ueSkgcmV0dXJuIDFcbiAgICAgIGlmIChkcmFnZ2FibGVBLnBpbm5lZFBvc2l0aW9uLnggPCBkcmFnZ2FibGVCLnBpbm5lZFBvc2l0aW9uLngpIHJldHVybiAtMVxuICAgICAgaWYgKGRyYWdnYWJsZUEucGlubmVkUG9zaXRpb24ueCA+IGRyYWdnYWJsZUIucGlubmVkUG9zaXRpb24ueCkgcmV0dXJuIDFcbiAgICAgIHJldHVybiAwXG4gICAgfVxuICB9XG5cbiAgZ2V0IGRpc3RhbmNlRnVuYygpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmdldERpc3RhbmNlIHx8IGdldERpc3RhbmNlXG4gIH1cblxuICBnZXQgZG9tRXZlbnRzKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZG9tRXZlbnRzICE9PSBmYWxzZVxuICB9XG5cbiAgZ2V0IHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDdXJyZW50UGlubmVkUG9zaXRpb25zKClcbiAgfVxuXG4gIHNldCBwb3NpdGlvbnMocG9zaXRpb25zKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9ICd3cm9uZyBhcnJheSBsZW5ndGgnXG4gICAgaWYgKHBvc2l0aW9ucy5sZW5ndGggPT09IHRoaXMuZHJhZ2dhYmxlcy5sZW5ndGgpIHtcbiAgICAgIHBvc2l0aW9ucy5mb3JFYWNoKChwb2ludCwgaSkgPT4ge1xuICAgICAgICB0aGlzLmRyYWdnYWJsZXNbaV0ucGluUG9zaXRpb24ocG9pbnQpXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBtZXNzYWdlXG4gICAgfVxuICB9XG5cbiAgZ2V0IGVuYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlXG4gIH1cblxuICBzZXQgZW5hYmxlKGVuYWJsZSkge1xuICAgIHRoaXMuX2VuYWJsZSA9IGVuYWJsZVxuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5lbmFibGUgPSBlbmFibGVcbiAgICB9KVxuICB9XG5cbiAgZ2V0IHN3YXBwaW5nRGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N3YXBwaW5nRGlzYWJsZWRcbiAgfVxuXG4gIHNldCBzd2FwcGluZ0Rpc2FibGVkKGRpc2FibGVkKSB7XG4gICAgdGhpcy5fc3dhcHBpbmdEaXNhYmxlZCA9IGRpc2FibGVkXG4gIH1cbn1cbiIsImltcG9ydCBMaXN0IGZyb20gJy4vbGlzdCdcbmltcG9ydCB7IGluZGV4T2ZOZWFyZXN0UG9pbnQsIGdldFhEaWZmZXJlbmNlLCBnZXRZRGlmZmVyZW5jZSB9IGZyb20gJy4vZ2VvbWV0cnkvZGlzdGFuY2VzJ1xuXG5pbXBvcnQgRHJhZ2dhYmxlIGZyb20gJy4vZHJhZ2dhYmxlJ1xuXG5jb25zdCBhcnJheU1vdmUgPSAoYXJyYXksIGZyb20sIHRvKSA9PiB7XG4gIGFycmF5LnNwbGljZSh0byA8IDAgPyBhcnJheS5sZW5ndGggKyB0byA6IHRvLCAwLCBhcnJheS5zcGxpY2UoZnJvbSwgMSlbMF0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1YmJsaW5nTGlzdCBleHRlbmRzIExpc3Qge1xuICBhdXRvRGV0ZWN0R2FwKCkge1xuICAgIGlmICh0aGlzLl9nYXAgIT09IHVuZGVmaW5lZCB8fCB0aGlzLmV4cGxpY2l0R2FwICE9PSB1bmRlZmluZWQgfHwgdGhpcy5kcmFnZ2FibGVzLmxlbmd0aCA8IDIpIHJldHVyblxuXG4gICAgY29uc3QgYXhpcyA9IHRoaXMuYXhpc1xuICAgIGNvbnN0IHNvcnRlZCA9IHRoaXMuZ2V0U29ydGVkRHJhZ2dhYmxlcygpXG4gICAgLy8gRGV0YWNoZWQgZWxlbWVudHMgcmVwb3J0IHNpemUgMFxuICAgIGNvbnN0IGluZGV4ID0gc29ydGVkLmZpbmRJbmRleCgoZCwgaSkgPT4gaSA8IHNvcnRlZC5sZW5ndGggLSAxICYmIGQuZWxlbWVudC5pc0Nvbm5lY3RlZClcbiAgICBpZiAoaW5kZXggPT09IC0xKSByZXR1cm5cblxuICAgIGNvbnN0IFtjdXJyZW50LCBuZXh0XSA9IFtzb3J0ZWRbaW5kZXhdLCBzb3J0ZWRbaW5kZXggKyAxXV1cbiAgICB0aGlzLl9nYXAgPSBuZXh0LnBpbm5lZFBvc2l0aW9uW2F4aXNdIC0gY3VycmVudC5waW5uZWRQb3NpdGlvbltheGlzXSAtIGN1cnJlbnQuZ2V0U2l6ZSgpW2F4aXNdXG4gIH1cblxuICBhdXRvRGV0ZWN0U3RhcnRQb3NpdGlvbigpIHtcbiAgICBpZiAodGhpcy5kcmFnZ2FibGVzLmxlbmd0aCA+PSAxICYmICF0aGlzLnN0YXJ0UG9zaXRpb24pIHtcbiAgICAgIHRoaXMuc3RhcnRQb3NpdGlvbiA9IHRoaXMuZHJhZ2dhYmxlc1swXS5waW5uZWRQb3NpdGlvblxuICAgIH1cbiAgfVxuXG4gIGluaXREcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgc3VwZXIuaW5pdERyYWdnYWJsZShkcmFnZ2FibGUpXG4gICAgdGhpcy5saXN0ZW5UbyhkcmFnZ2FibGUsICdkcmFnOnN0YXJ0JywgKCkgPT4gdGhpcy5vbkRyYWdTdGFydChkcmFnZ2FibGUpKVxuICB9XG5cbiAgb25EcmFnU3RhcnQoZHJhZ2dhYmxlKSB7XG4gICAgdGhpcy5hdXRvRGV0ZWN0R2FwKClcbiAgICB0aGlzLmF1dG9EZXRlY3RTdGFydFBvc2l0aW9uKClcbiAgICB0aGlzLmNhY2hlZFNvcnRlZERyYWdnYWJsZXMgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuICAgIHRoaXMuaW5kZXhPZkFjdGl2ZURyYWdnYWJsZSA9IHRoaXMuY2FjaGVkU29ydGVkRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSlcbiAgfVxuXG4gIG9uTW92ZShkcmFnZ2FibGUpIHtcbiAgICBpZiAodGhpcy5zd2FwcGluZ0Rpc2FibGVkKSByZXR1cm5cblxuICAgIGNvbnN0IHByZXZEcmFnZ2FibGUgPSB0aGlzLmNhY2hlZFNvcnRlZERyYWdnYWJsZXNbdGhpcy5pbmRleE9mQWN0aXZlRHJhZ2dhYmxlIC0gMV1cbiAgICBjb25zdCBuZXh0RHJhZ2dhYmxlID0gdGhpcy5jYWNoZWRTb3J0ZWREcmFnZ2FibGVzW3RoaXMuaW5kZXhPZkFjdGl2ZURyYWdnYWJsZSArIDFdXG4gICAgY29uc3QgY3VycmVudFBvc2l0aW9uID0gZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uXG5cbiAgICBsZXQgY3VycmVudE9yZGVyXG4gICAgbGV0IHRhcmdldEluZGV4XG5cbiAgICBpZih0aGlzLmlzTW92aW5nQmFja3dhcmQoZHJhZ2dhYmxlKSAmJiBwcmV2RHJhZ2dhYmxlKSB7XG4gICAgICBjdXJyZW50T3JkZXIgPSBbcHJldkRyYWdnYWJsZSwgZHJhZ2dhYmxlXS5tYXAoKGQpID0+IGQucGlubmVkUG9zaXRpb24pXG4gICAgICB0YXJnZXRJbmRleCA9IGluZGV4T2ZOZWFyZXN0UG9pbnQoY3VycmVudE9yZGVyLCBkcmFnZ2FibGUucG9zaXRpb24sIDEwMDAwLCB0aGlzLmRpc3RhbmNlRnVuYylcblxuICAgICAgaWYgKHRhcmdldEluZGV4ID09PSAwKSB7XG4gICAgICAgIGlmKGRyYWdnYWJsZS5zaG91bGRVc2VOYXRpdmVEcmFnQW5kRHJvcCgpKSB7XG4gICAgICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKHByZXZEcmFnZ2FibGUucGlubmVkUG9zaXRpb24pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uID0gcHJldkRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbi5jbG9uZSgpXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJldk5ld1Bvc2l0aW9uID0gdGhpcy5uZXh0UG9zaXRpb24oZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uLCBkcmFnZ2FibGUpXG4gICAgICAgIHByZXZOZXdQb3NpdGlvblt0aGlzLmNyb3NzQXhpc10gPSBjdXJyZW50UG9zaXRpb25bdGhpcy5jcm9zc0F4aXNdXG4gICAgICAgIHByZXZEcmFnZ2FibGUucGluUG9zaXRpb24ocHJldk5ld1Bvc2l0aW9uLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICAgIGFycmF5TW92ZSh0aGlzLmNhY2hlZFNvcnRlZERyYWdnYWJsZXMsIHRoaXMuaW5kZXhPZkFjdGl2ZURyYWdnYWJsZS0tLCB0aGlzLmluZGV4T2ZBY3RpdmVEcmFnZ2FibGUpXG4gICAgICAgIHRoaXMub25Nb3ZlKGRyYWdnYWJsZSlcbiAgICAgICAgdGhpcy5jaGFuZ2VkRHVyaW5nSXRlcmF0aW9uID0gdHJ1ZVxuICAgICAgfVxuICAgIH0gZWxzZSBpZih0aGlzLmlzTW92aW5nRm9yd2FyZChkcmFnZ2FibGUpICYmIG5leHREcmFnZ2FibGUpIHtcbiAgICAgIGN1cnJlbnRPcmRlciA9IFtkcmFnZ2FibGUsIG5leHREcmFnZ2FibGVdLm1hcCgoZCkgPT4gZC5waW5uZWRQb3NpdGlvbilcbiAgICAgIHRhcmdldEluZGV4ID0gaW5kZXhPZk5lYXJlc3RQb2ludChjdXJyZW50T3JkZXIsIGRyYWdnYWJsZS5wb3NpdGlvbiwgMTAwMDAsIHRoaXMuZGlzdGFuY2VGdW5jKVxuXG4gICAgICBpZih0YXJnZXRJbmRleCA9PT0gMSkge1xuICAgICAgICBuZXh0RHJhZ2dhYmxlLnBpblBvc2l0aW9uKGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbiwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICBjb25zdCBkcmFnZ2FibGVOZXdQb3NpdGlvbiA9IHRoaXMubmV4dFBvc2l0aW9uKG5leHREcmFnZ2FibGUucGlubmVkUG9zaXRpb24sIG5leHREcmFnZ2FibGUpXG4gICAgICAgIGlmKGRyYWdnYWJsZS5zaG91bGRVc2VOYXRpdmVEcmFnQW5kRHJvcCgpKSB7XG4gICAgICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKGRyYWdnYWJsZU5ld1Bvc2l0aW9uKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbiA9IGRyYWdnYWJsZU5ld1Bvc2l0aW9uXG4gICAgICAgIH1cbiAgICAgICAgYXJyYXlNb3ZlKHRoaXMuY2FjaGVkU29ydGVkRHJhZ2dhYmxlcywgdGhpcy5pbmRleE9mQWN0aXZlRHJhZ2dhYmxlKyssIHRoaXMuaW5kZXhPZkFjdGl2ZURyYWdnYWJsZSlcbiAgICAgICAgdGhpcy5vbk1vdmUoZHJhZ2dhYmxlKVxuICAgICAgICB0aGlzLmNoYW5nZWREdXJpbmdJdGVyYXRpb24gPSB0cnVlXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYnViYmxpbmcoc29ydGVkRHJhZ2dhYmxlcywgY3VycmVudERyYWdnYWJsZSkge1xuICAgIGxldCBjdXJyZW50UG9zaXRpb24gPSB0aGlzLnN0YXJ0UG9zaXRpb24uY2xvbmUoKVxuICAgIHNvcnRlZERyYWdnYWJsZXMgfHw9IHRoaXMuZ2V0U29ydGVkRHJhZ2dhYmxlcygpXG5cbiAgICBzb3J0ZWREcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgaWYgKCFkcmFnZ2FibGUucGlubmVkUG9zaXRpb24uY29tcGFyZShjdXJyZW50UG9zaXRpb24pKSB7XG4gICAgICAgIGlmIChkcmFnZ2FibGUgPT09IGN1cnJlbnREcmFnZ2FibGUgJiYgIWN1cnJlbnREcmFnZ2FibGUuc2hvdWxkVXNlTmF0aXZlRHJhZ0FuZERyb3AoKSkge1xuICAgICAgICAgIGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbiA9IGN1cnJlbnRQb3NpdGlvbi5jbG9uZSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKGN1cnJlbnRQb3NpdGlvbiwgKGRyYWdnYWJsZSA9PT0gY3VycmVudERyYWdnYWJsZSkgPyAwIDogdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGN1cnJlbnRQb3NpdGlvbiA9IHRoaXMubmV4dFBvc2l0aW9uKGN1cnJlbnRQb3NpdGlvbiwgZHJhZ2dhYmxlKVxuICAgIH0pXG4gIH1cblxuICByZW1vdmUoZHJhZ2dhYmxlcykge1xuICAgIGlmICghKGRyYWdnYWJsZXMgaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICAgIGRyYWdnYWJsZXMgPSBbZHJhZ2dhYmxlc11cbiAgICB9XG5cbiAgICAvLyBEZXRlY3QgbGF5b3V0IGJlZm9yZSByZW1vdmFsLCBvdGhlcndpc2UgdGhlIGdhcCBpcyBtZWFzdXJlZCBhY3Jvc3MgdGhlIGhvbGVcbiAgICB0aGlzLmF1dG9EZXRlY3RHYXAoKVxuICAgIHRoaXMuYXV0b0RldGVjdFN0YXJ0UG9zaXRpb24oKVxuXG4gICAgZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHRoaXMucmVsZWFzZURyYWdnYWJsZShkcmFnZ2FibGUpKVxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IHRoaXMuZHJhZ2dhYmxlcy5maWx0ZXIoKGQpID0+ICFkcmFnZ2FibGVzLmluY2x1ZGVzKGQpKVxuXG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGQpID0+IGQuc3RhcnRQb3NpdGlvbmluZygpKVxuXG4gICAgaWYodGhpcy5kcmFnZ2FibGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuYnViYmxpbmcoKVxuICAgIH1cbiAgfVxuXG4gIG5leHRQb3NpdGlvbihwb3NpdGlvbiwgZHJhZ2dhYmxlKSB7XG4gICAgY29uc3QgbmV4dCA9IHBvc2l0aW9uLmNsb25lKClcbiAgICBuZXh0W3RoaXMuYXhpc10gPSBwb3NpdGlvblt0aGlzLmF4aXNdICsgZHJhZ2dhYmxlLmdldFNpemUoKVt0aGlzLmF4aXNdICsgdGhpcy5nYXBcbiAgICByZXR1cm4gbmV4dFxuICB9XG5cbiAgaXNNb3ZpbmdCYWNrd2FyZChkcmFnZ2FibGUpIHtcbiAgICByZXR1cm4gdGhpcy5heGlzID09PSAneCcgPyBkcmFnZ2FibGUubGVmdERpcmVjdGlvbiA6IGRyYWdnYWJsZS51cERpcmVjdGlvblxuICB9XG5cbiAgaXNNb3ZpbmdGb3J3YXJkKGRyYWdnYWJsZSkge1xuICAgIHJldHVybiB0aGlzLmF4aXMgPT09ICd4JyA/IGRyYWdnYWJsZS5yaWdodERpcmVjdGlvbiA6IGRyYWdnYWJsZS5kb3duRGlyZWN0aW9uXG4gIH1cblxuICBnZXQgYXhpcygpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmF4aXMgPT09ICd4JyA/ICd4JyA6ICd5J1xuICB9XG5cbiAgZ2V0IGNyb3NzQXhpcygpIHtcbiAgICByZXR1cm4gdGhpcy5heGlzID09PSAneCcgPyAneScgOiAneCdcbiAgfVxuXG4gIGdldCBkaXN0YW5jZUZ1bmMoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5nZXREaXN0YW5jZSB8fCAodGhpcy5heGlzID09PSAneCcgPyBnZXRYRGlmZmVyZW5jZSA6IGdldFlEaWZmZXJlbmNlKVxuICB9XG5cbiAgZ2V0IGV4cGxpY2l0R2FwKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZ2FwID8/IHRoaXMub3B0aW9ucy52ZXJ0aWNhbEdhcFxuICB9XG5cbiAgZ2V0IGdhcCgpIHtcbiAgICBpZiAodGhpcy5leHBsaWNpdEdhcCAhPT0gdW5kZWZpbmVkKSByZXR1cm4gdGhpcy5leHBsaWNpdEdhcFxuXG4gICAgdGhpcy5hdXRvRGV0ZWN0R2FwKClcbiAgICByZXR1cm4gdGhpcy5fZ2FwIHx8IDBcbiAgfVxuXG4gIHNldCBnYXAoZ2FwVmFsdWUpIHtcbiAgICB0aGlzLm9wdGlvbnMuZ2FwID0gZ2FwVmFsdWVcbiAgfVxuXG4gIC8vIERlcHJlY2F0ZWQgYWxpYXMgZm9yIGBnYXBgXG4gIGdldCB2ZXJ0aWNhbEdhcCgpIHtcbiAgICByZXR1cm4gdGhpcy5nYXBcbiAgfVxuXG4gIHNldCB2ZXJ0aWNhbEdhcChnYXBWYWx1ZSkge1xuICAgIHRoaXMuZ2FwID0gZ2FwVmFsdWVcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmFuZ2Uoc3RhcnQsIHN0b3AsIHN0ZXApIHtcbiAgY29uc3QgcmVzdWx0ID0gW11cbiAgaWYgKHR5cGVvZiBzdG9wID09PSAndW5kZWZpbmVkJykge1xuICAgIHN0b3AgPSBzdGFydFxuICAgIHN0YXJ0ID0gMFxuICB9XG4gIGlmICh0eXBlb2Ygc3RlcCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBzdGVwID0gMVxuICB9XG4gIGlmICgoc3RlcCA+IDAgJiYgc3RhcnQgPj0gc3RvcCkgfHwgKHN0ZXAgPCAwICYmIHN0YXJ0IDw9IHN0b3ApKSB7XG4gICAgcmV0dXJuIFtdXG4gIH1cbiAgZm9yIChsZXQgaSA9IHN0YXJ0OyBzdGVwID4gMCA/IGkgPCBzdG9wIDogaSA+IHN0b3A7IGkgKz0gc3RlcCkge1xuICAgIHJlc3VsdC5wdXNoKGkpXG4gIH1cbiAgcmV0dXJuIHJlc3VsdFxufVxuIiwiaW1wb3J0IFBvaW50IGZyb20gJy4vcG9pbnQnXG5pbXBvcnQgeyBnZXREaXN0YW5jZSB9IGZyb20gJy4vZGlzdGFuY2VzJ1xuXG5leHBvcnQgZnVuY3Rpb24gY2xhbXAobWluLCBtYXgsIHZhbCkge1xuICByZXR1cm4gTWF0aC5tYXgobWluLCBNYXRoLm1pbihtYXgsIHZhbCkpXG59XG5cbi8vUmV0dXJuIGNyb3NzaW5nIHBvaW50IG9mIHR3byBsaW5lc1xuZXhwb3J0IGZ1bmN0aW9uIGRpcmVjdENyb3NzaW5nKEwxUDEsIEwxUDIsIEwyUDEsIEwyUDIpIHtcbiAgbGV0IHRlbXAsIGsxLCBrMiwgYjEsIGIyLCB4LCB5XG4gIGlmIChMMlAxLnggPT09IEwyUDIueCkge1xuICAgIHRlbXAgPSBMMlAxXG4gICAgTDJQMSA9IEwxUDFcbiAgICBMMVAxID0gdGVtcFxuICAgIHRlbXAgPSBMMlAyXG4gICAgTDJQMiA9IEwxUDJcbiAgICBMMVAyID0gdGVtcFxuICB9XG4gIGlmIChMMVAxLnggPT09IEwxUDIueCkge1xuICAgIGsyID0gKEwyUDIueSAtIEwyUDEueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgIGIyID0gKEwyUDIueCAqIEwyUDEueSAtIEwyUDEueCAqIEwyUDIueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgIHggPSBMMVAxLnhcbiAgICB5ID0geCAqIGsyICsgYjJcbiAgICByZXR1cm4gbmV3IFBvaW50KHgsIHkpXG4gIH0gZWxzZSB7XG4gICAgazEgPSAoTDFQMi55IC0gTDFQMS55KSAvIChMMVAyLnggLSBMMVAxLngpXG4gICAgYjEgPSAoTDFQMi54ICogTDFQMS55IC0gTDFQMS54ICogTDFQMi55KSAvIChMMVAyLnggLSBMMVAxLngpXG4gICAgazIgPSAoTDJQMi55IC0gTDJQMS55KSAvIChMMlAyLnggLSBMMlAxLngpXG4gICAgYjIgPSAoTDJQMi54ICogTDJQMS55IC0gTDJQMS54ICogTDJQMi55KSAvIChMMlAyLnggLSBMMlAxLngpXG4gICAgeCA9IChiMSAtIGIyKSAvIChrMiAtIGsxKVxuICAgIHkgPSB4ICogazEgKyBiMVxuICAgIHJldHVybiBuZXcgUG9pbnQoeCwgeSlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRUb1NlZ21lbnQoTFAxLCBMUDIsIFApIHtcbiAgbGV0IHgsIHlcbiAgeCA9IGNsYW1wKE1hdGgubWluKExQMS54LCBMUDIueCksIE1hdGgubWF4KExQMS54LCBMUDIueCksIFAueClcbiAgaWYgKHggIT09IFAueCkge1xuICAgIHkgPSAoeCA9PT0gTFAxLngpID8gTFAxLnkgOiBMUDIueVxuICAgIFAgPSBuZXcgUG9pbnQoeCwgeSlcbiAgfVxuXG4gIHkgPSBjbGFtcChNYXRoLm1pbihMUDEueSwgTFAyLnkpLCBNYXRoLm1heChMUDEueSwgTFAyLnkpLCBQLnkpXG4gIGlmICh5ICE9PSBQLnkpIHtcbiAgICB4ID0gKHkgPT09IExQMS55KSA/IExQMS54IDogTFAyLnhcbiAgICBQID0gbmV3IFBvaW50KHgsIHkpXG4gIH1cblxuICByZXR1cm4gUFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRUb0xpbmUoQSwgQiwgUCkge1xuICBjb25zdCBBUCA9IG5ldyBQb2ludChQLnggLSBBLngsIFAueSAtIEEueSksXG4gICAgQUIgPSBuZXcgUG9pbnQoQi54IC0gQS54LCBCLnkgLSBBLnkpLFxuICAgIGFiMiA9IEFCLnggKiBBQi54ICsgQUIueSAqIEFCLnksXG4gICAgYXBfYWIgPSBBUC54ICogQUIueCArIEFQLnkgKiBBQi55LFxuICAgIHQgPSBhcF9hYiAvIGFiMlxuICByZXR1cm4gbmV3IFBvaW50KEEueCArIEFCLnggKiB0LCBBLnkgKyBBQi55ICogdClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBvaW50T25MaW5lKExQMSwgTFAyLCBwZXJjZW50KSB7XG4gIGNvbnN0IGR4ID0gTFAyLnggLSBMUDEueCwgZHkgPSBMUDIueSAtIExQMS55XG4gIHJldHVybiBuZXcgUG9pbnQoTFAxLnggKyBwZXJjZW50ICogZHgsIExQMS55ICsgcGVyY2VudCAqIGR5KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9pbnRPbkxpbmVCeUxlbmdodChMUDEsIExQMiwgbGVuZ2h0KSB7XG4gIGNvbnN0IGR4ID0gTFAyLnggLSBMUDEueFxuICBjb25zdCBkeSA9IExQMi55IC0gTFAxLnlcbiAgY29uc3QgcGVyY2VudCA9IGxlbmdodCAvIGdldERpc3RhbmNlKExQMSwgTFAyKVxuICByZXR1cm4gbmV3IFBvaW50KExQMS54ICsgcGVyY2VudCAqIGR4LCBMUDEueSArIHBlcmNlbnQgKiBkeSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFBvaW50VG9Cb3VuZFBvaW50cyhib3VuZHBvaW50cywgcG9pbnQsIGlzUmlnaHQpIHtcbiAgY29uc3QgcmVzdWx0ID0gYm91bmRwb2ludHMuZmlsdGVyKChiUG9pbnQpID0+IHtcbiAgICByZXR1cm4gYlBvaW50LnkgPiBwb2ludC55IHx8IChpc1JpZ2h0ID8gYlBvaW50LnggPCBwb2ludC54IDogYlBvaW50LnggPiBwb2ludC54KVxuICB9KVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzdWx0Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHBvaW50LnkgPCByZXN1bHRbaV0ueSkge1xuICAgICAgcmVzdWx0LnNwbGljZShpLCAwLCBwb2ludClcbiAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG4gIH1cbiAgcmVzdWx0LnB1c2gocG9pbnQpXG4gIHJldHVybiByZXN1bHRcbn1cbiIsImltcG9ydCBQb2ludCBmcm9tICcuL2dlb21ldHJ5L3BvaW50J1xuaW1wb3J0IHsgYWRkUG9pbnRUb0JvdW5kUG9pbnRzIH0gZnJvbSAnLi9nZW9tZXRyeS9ib3VuZHMnXG5cbmltcG9ydCB7XG4gIGluZGV4T2ZOZWFyZXN0UG9pbnQsXG4gIGdldERpc3RhbmNlXG59IGZyb20gJy4vZ2VvbWV0cnkvZGlzdGFuY2VzJ1xuXG5jbGFzcyBCYXNpY1N0cmF0ZWd5IHtcbiAgY29uc3RydWN0b3IocmVjdGFuZ2xlLCBvcHRpb25zPXt9KSB7XG4gICAgdGhpcy5yZWN0YW5nbGUgPSByZWN0YW5nbGVcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zXG4gIH1cblxuICBnZXQgYm91bmRSZWN0ICgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMucmVjdGFuZ2xlID09PSAnZnVuY3Rpb24nID8gdGhpcy5yZWN0YW5nbGUoKSA6IHRoaXMucmVjdGFuZ2xlXG4gIH1cbn1cblxuY2xhc3MgTm90Q3Jvc3NpbmdTdHJhdGVneSBleHRlbmRzIEJhc2ljU3RyYXRlZ3kge1xuICBwb3NpdGlvbmluZyAocmVjdGFuZ2xlTGlzdCwgaW5kZXhlc09mTmV3cykge1xuICAgIGNvbnN0IHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMgPSByZWN0YW5nbGVMaXN0LnJlZHVjZSgoaW5kZXhlcywgX3JlY3QsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoaW5kZXhlc09mTmV3cy5pbmRleE9mKGluZGV4KSA9PT0gLTEpIHtcbiAgICAgICAgaW5kZXhlcy5wdXNoKGluZGV4KVxuICAgICAgfVxuICAgICAgcmV0dXJuIGluZGV4ZXNcbiAgICB9LCBbXSlcblxuICAgIGluZGV4ZXNPZk5ld3MuZm9yRWFjaCgoaW5kZXgpID0+IHtcbiAgICAgIGxldCByZWN0ID0gcmVjdGFuZ2xlTGlzdFtpbmRleF1cbiAgICAgIGxldCByZW1vdmFibGUgPSBmYWxzZVxuXG4gICAgICBzdGF0aWNSZWN0YW5nbGVJbmRleGVzLmZvckVhY2goKGluZGV4T2ZTdGF0aWMpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhdGljUmVjdCA9IHJlY3RhbmdsZUxpc3RbaW5kZXhPZlN0YXRpY11cbiAgICAgICAgcmVjdCA9IHN0YXRpY1JlY3QubW92ZVRvQm91bmQocmVjdClcbiAgICAgIH0pXG5cbiAgICAgIHJlbW92YWJsZSA9IHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMuc29tZSgoaW5kZXhPZlN0YXRpYykgPT4ge1xuICAgICAgICBjb25zdCBzdGF0aWNSZWN0ID0gcmVjdGFuZ2xlTGlzdFtpbmRleE9mU3RhdGljXVxuICAgICAgICByZXR1cm4gICEhc3RhdGljUmVjdC5hbmQocmVjdClcbiAgICAgIH0pIHx8IHJlY3QuYW5kKHRoaXMuYm91bmRSZWN0KS5nZXRTcXVhcmUoKSAhPT0gcmVjdC5nZXRTcXVhcmUoKVxuXG4gICAgICBpZiAocmVtb3ZhYmxlKSB7XG4gICAgICAgIHJlY3QucmVtb3ZhYmxlID0gdHJ1ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdGljUmVjdGFuZ2xlSW5kZXhlcy5wdXNoKGluZGV4KVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHJlY3RhbmdsZUxpc3RcbiAgfVxuXG4gIHNvcnRpbmcob2RsRHJhZ2dhYmxlc0xpc3QsIG5ld0RyYWdnYWJsZXMsIGluZGV4T2ZOZXdzKSB7XG4gICAgY29uc3QgZHJhZ2dhYmxlcyA9IG9kbERyYWdnYWJsZXNMaXN0LmNvbmNhdChuZXdEcmFnZ2FibGVzKVxuICAgIG5ld0RyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBpbmRleE9mTmV3cy5wdXNoKGRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpKVxuICAgIH0pXG4gICAgcmV0dXJuIGRyYWdnYWJsZXNcbiAgfVxufVxuXG5jbGFzcyBGbG9hdExlZnRTdHJhdGVneSBleHRlbmRzIEJhc2ljU3RyYXRlZ3kge1xuICBjb25zdHJ1Y3RvcihyZWN0YW5nbGUsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcihyZWN0YW5nbGUsIG9wdGlvbnMpXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICByZW1vdmFibGU6IHRydWVcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGhpcy5yYWRpdXMgPSBvcHRpb25zLnJhZGl1cyB8fCA4MFxuXG4gICAgdGhpcy5wYWRkaW5nVG9wTGVmdCA9IG9wdGlvbnMucGFkZGluZ1RvcExlZnQgfHwgbmV3IFBvaW50KDAsIDApXG4gICAgdGhpcy5wYWRkaW5nQm90dG9tUmlnaHQgPSBvcHRpb25zLnBhZGRpbmdCb3R0b21SaWdodCB8fCBuZXcgUG9pbnQoMCwgMClcbiAgICB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyA9IG9wdGlvbnMueUdhcEJldHdlZW5EcmFnZ2FibGVzIHx8IDBcblxuICAgIHRoaXMuZ2V0RGlzdGFuY2UgPSBvcHRpb25zLmdldERpc3RhbmNlIHx8IGdldERpc3RhbmNlXG4gICAgdGhpcy5nZXRQb3NpdGlvbiA9IG9wdGlvbnMuZ2V0UG9zaXRpb24gfHwgKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5wb3NpdGlvbilcbiAgfVxuXG4gIHBvc2l0aW9uaW5nKHJlY3RhbmdsZUxpc3QsIF9pbmRleGVzT2ZOZXdzKSB7XG4gICAgY29uc3QgYm91bmRSZWN0ID0gdGhpcy5ib3VuZFJlY3RcbiAgICBjb25zdCByZWN0UDIgPSBib3VuZFJlY3QuZ2V0UDIoKVxuICAgIGxldCBib3VuZGFyeVBvaW50cyA9IFtib3VuZFJlY3QucG9zaXRpb25dXG5cbiAgICByZWN0YW5nbGVMaXN0LmZvckVhY2goKHJlY3QsIHJlY3RJbmRleCkgPT4ge1xuICAgICAgbGV0IHBvc2l0aW9uLCBpc1ZhbGlkID0gZmFsc2VcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm91bmRhcnlQb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcG9zaXRpb24gPSBuZXcgUG9pbnQoXG4gICAgICAgICAgYm91bmRhcnlQb2ludHNbaV0ueCArIHRoaXMucGFkZGluZ1RvcExlZnQueCxcbiAgICAgICAgICBpID4gMCA/IChib3VuZGFyeVBvaW50c1tpIC0gMV0ueSArIHRoaXMueUdhcEJldHdlZW5EcmFnZ2FibGVzKSA6IChib3VuZFJlY3QucG9zaXRpb24ueSArIHRoaXMucGFkZGluZ1RvcExlZnQueSlcbiAgICAgICAgKVxuXG4gICAgICAgIGlzVmFsaWQgPSAocG9zaXRpb24ueCArIHJlY3Quc2l6ZS54IDwgcmVjdFAyLngpXG5cbiAgICAgICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICBwb3NpdGlvbiA9IG5ldyBQb2ludChcbiAgICAgICAgICBib3VuZFJlY3QucG9zaXRpb24ueCArIHRoaXMucGFkZGluZ1RvcExlZnQueCxcbiAgICAgICAgICBib3VuZGFyeVBvaW50c1tib3VuZGFyeVBvaW50cy5sZW5ndGggLSAxXS55ICsgKHJlY3RJbmRleCA+IDAgPyB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyA6IHRoaXMucGFkZGluZ1RvcExlZnQueSlcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICByZWN0LnBvc2l0aW9uID0gcG9zaXRpb25cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucmVtb3ZhYmxlICYmIHJlY3QuZ2V0UDMoKS55ID4gYm91bmRSZWN0LmdldFAzKCkueSkge1xuICAgICAgICByZWN0LnJlbW92YWJsZSA9IHRydWVcbiAgICAgIH1cblxuICAgICAgYm91bmRhcnlQb2ludHMgPSBhZGRQb2ludFRvQm91bmRQb2ludHMoYm91bmRhcnlQb2ludHMsIHJlY3QuZ2V0UDMoKS5hZGQodGhpcy5wYWRkaW5nQm90dG9tUmlnaHQpKVxuICAgIH0pXG4gICAgcmV0dXJuIHJlY3RhbmdsZUxpc3RcbiAgfVxuXG4gIHNvcnRpbmcob2RsRHJhZ2dhYmxlc0xpc3QsIG5ld0RyYWdnYWJsZXMsIGluZGV4T2ZOZXdzKSB7XG4gICAgY29uc3QgbmV3TGlzdCA9IG9kbERyYWdnYWJsZXNMaXN0LmNvbmNhdCgpXG4gICAgY29uc3QgbGlzdE9sZFBvc2l0aW9uID0gb2RsRHJhZ2dhYmxlc0xpc3QubWFwKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5nZXRQb3NpdGlvbigpKVxuICAgIG5ld0RyYWdnYWJsZXMuZm9yRWFjaCgobmV3RHJhZ2dhYmxlKSA9PiB7XG4gICAgICBsZXQgaW5kZXggPSBpbmRleE9mTmVhcmVzdFBvaW50KGxpc3RPbGRQb3NpdGlvbiwgdGhpcy5nZXRQb3NpdGlvbihuZXdEcmFnZ2FibGUpLCB0aGlzLnJhZGl1cywgdGhpcy5nZXREaXN0YW5jZSlcbiAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgaW5kZXggPSBuZXdMaXN0Lmxlbmd0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5kZXggPSBuZXdMaXN0LmluZGV4T2Yob2RsRHJhZ2dhYmxlc0xpc3RbaW5kZXhdKVxuICAgICAgfVxuICAgICAgbmV3TGlzdC5zcGxpY2UoaW5kZXgsIDAsIG5ld0RyYWdnYWJsZSlcbiAgICB9KVxuICAgIG5ld0RyYWdnYWJsZXMuZm9yRWFjaCgobmV3RHJhZ2dhYmxlKSA9PiB7XG4gICAgICBpbmRleE9mTmV3cy5wdXNoKG5ld0xpc3QuaW5kZXhPZihuZXdEcmFnZ2FibGUpKVxuICAgIH0pXG4gICAgcmV0dXJuIG5ld0xpc3RcbiAgfVxufVxuXG5jbGFzcyBGbG9hdFJpZ2h0U3RyYXRlZ3kgZXh0ZW5kcyBGbG9hdExlZnRTdHJhdGVneSB7XG4gIGNvbnN0cnVjdG9yKHJlY3RhbmdsZSwgb3B0aW9ucz17fSkge1xuICAgIHN1cGVyKHJlY3RhbmdsZSwgb3B0aW9ucylcblxuICAgIHRoaXMucGFkZGluZ1RvcFJpZ2h0ID0gb3B0aW9ucy5wYWRkaW5nVG9wUmlnaHQgfHwgbmV3IFBvaW50KDUsIDUpXG4gICAgdGhpcy5wYWRkaW5nQm90dG9tTGVmdCA9IG9wdGlvbnMucGFkZGluZ0JvdHRvbUxlZnQgfHwgbmV3IFBvaW50KDAsIDApXG4gICAgdGhpcy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgPSBvcHRpb25zLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyB8fCAwXG5cbiAgICB0aGlzLnBhZGRpbmdCb3R0b21OZWdMZWZ0ID0gbmV3IFBvaW50KC10aGlzLnBhZGRpbmdCb3R0b21MZWZ0LngsIHRoaXMucGFkZGluZ0JvdHRvbUxlZnQueSlcbiAgfVxuXG4gIHBvc2l0aW9uaW5nKHJlY3RhbmdsZUxpc3QsIF9pbmRleGVzT2ZOZXdzKSB7XG4gICAgY29uc3QgYm91bmRSZWN0ID0gdGhpcy5ib3VuZFJlY3RcbiAgICBsZXQgYm91bmRhcnlQb2ludHMgPSBbYm91bmRSZWN0LmdldFAyKCldXG5cbiAgICByZWN0YW5nbGVMaXN0LmZvckVhY2goKHJlY3QsIHJlY3RJbmRleCkgPT4ge1xuICAgICAgbGV0IHBvc2l0aW9uLCBpc1ZhbGlkID0gZmFsc2VcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm91bmRhcnlQb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcG9zaXRpb24gPSBuZXcgUG9pbnQoXG4gICAgICAgICAgYm91bmRhcnlQb2ludHNbaV0ueCAtIHJlY3Quc2l6ZS54IC0gdGhpcy5wYWRkaW5nVG9wUmlnaHQueCxcbiAgICAgICAgICBpID4gMCA/IChib3VuZGFyeVBvaW50c1tpIC0gMV0ueSArIHRoaXMueUdhcEJldHdlZW5EcmFnZ2FibGVzKSA6IChib3VuZFJlY3QucG9zaXRpb24ueSArIHRoaXMucGFkZGluZ1RvcFJpZ2h0LnkpXG4gICAgICAgIClcblxuICAgICAgICBpc1ZhbGlkID0gKHBvc2l0aW9uLnggPiByZWN0LnBvc2l0aW9uLngpXG4gICAgICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICAgIHBvc2l0aW9uID0gbmV3IFBvaW50KFxuICAgICAgICAgIGJvdW5kUmVjdC5nZXRQMigpLnggIC0gcmVjdC5zaXplLnggLSB0aGlzLnBhZGRpbmdUb3BSaWdodC54LFxuICAgICAgICAgIGJvdW5kYXJ5UG9pbnRzW2JvdW5kYXJ5UG9pbnRzLmxlbmd0aCAtIDFdLnkgKyAocmVjdEluZGV4ID4gMCA/IHRoaXMueUdhcEJldHdlZW5EcmFnZ2FibGVzIDogdGhpcy5wYWRkaW5nVG9wUmlnaHQueSlcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgcmVjdC5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnJlbW92YWJsZSAmJiByZWN0LmdldFA0KCkueSA+IGJvdW5kUmVjdC5nZXRQNCgpLnkpIHtcbiAgICAgICAgcmVjdC5yZW1vdmFibGUgPSB0cnVlXG4gICAgICB9XG4gICAgICBib3VuZGFyeVBvaW50cyA9IGFkZFBvaW50VG9Cb3VuZFBvaW50cyhib3VuZGFyeVBvaW50cywgcmVjdC5nZXRQNCgpLmFkZCh0aGlzLnBhZGRpbmdCb3R0b21OZWdMZWZ0KSwgdHJ1ZSlcbiAgICB9KVxuICAgIHJldHVybiByZWN0YW5nbGVMaXN0XG4gIH1cbn1cblxuZXhwb3J0IHsgTm90Q3Jvc3NpbmdTdHJhdGVneSwgRmxvYXRMZWZ0U3RyYXRlZ3ksIEZsb2F0UmlnaHRTdHJhdGVneSB9XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9wb2ludCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFuZ2xlRGlmZihhbHBoYSwgYmV0YSkge1xuICBjb25zdCBtaW5BbmdsZSA9IE1hdGgubWluKGFscGhhLCBiZXRhKVxuICBjb25zdCBtYXhBbmdsZSA9ICBNYXRoLm1heChhbHBoYSwgYmV0YSlcbiAgcmV0dXJuIE1hdGgubWluKG1heEFuZ2xlIC0gbWluQW5nbGUsIG1pbkFuZ2xlICsgTWF0aC5QSSoyIC0gbWF4QW5nbGUpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbmdsZShwMSwgcDIpIHtcbiAgY29uc3QgZGlmZiA9IHAyLnN1YihwMSlcbiAgcmV0dXJuIG5vcm1hbGl6ZUFuZ2xlKE1hdGguYXRhbjIoZGlmZi55LCBkaWZmLngpKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9SYWRpYW4oYW5nbGUpIHtcbiAgcmV0dXJuICgoYW5nbGUgJSAzNjApICogTWF0aC5QSSAvIDE4MClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvRGVncmVlKGFuZ2xlKSB7XG4gIHJldHVybiAoYW5nbGUgKiAxODAgLyBNYXRoLlBJKSAlIDM2MFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRBbmdsZShtaW4sIG1heCwgdmFsKSB7XG4gIGxldCBkbWluLCBkbWF4XG4gIGlmIChtaW4gPCBtYXggJiYgdmFsID4gbWluICYmIHZhbCA8IG1heCkge1xuICAgIHJldHVybiB2YWxcbiAgfSBlbHNlIGlmIChtYXggPCBtaW4gJiYgKHZhbCA8IG1heCB8fCB2YWwgPiBtaW4pKSB7XG4gICAgcmV0dXJuIHZhbFxuICB9IGVsc2Uge1xuICAgIGRtaW4gPSBnZXRBbmdsZURpZmYobWluLCB2YWwpXG4gICAgZG1heCA9IGdldEFuZ2xlRGlmZihtYXgsIHZhbClcbiAgICBpZiAoZG1pbiA8IGRtYXgpIHtcbiAgICAgIHJldHVybiBtaW5cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG1heFxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmVhcmVzdEFuZ2xlKGFyciwgYW5nbGUpIHtcbiAgbGV0IGksIHRlbXAsIGRpZmYgPSBNYXRoLlBJICogMiwgdmFsdWVcbiAgZm9yIChpID0gMDsgaSA8IGFyci5sZW5ndGg7aSsrKSB7XG4gICAgdGVtcCA9IGdldEFuZ2xlRGlmZihhcnJbaV0sIGFuZ2xlKVxuICAgIGlmIChkaWZmIDwgdGVtcCkge1xuICAgICAgZGlmZiA9IHRlbXBcbiAgICAgIHZhbHVlID0gYXJyW2ldXG4gICAgfVxuICB9XG4gIHJldHVybiB2YWx1ZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplQW5nbGUodmFsKSB7XG4gIHdoaWxlICh2YWwgPCAwKSB7XG4gICAgdmFsICs9IDIgKiBNYXRoLlBJXG4gIH1cbiAgd2hpbGUgKHZhbCA+IDIgKiBNYXRoLlBJKSB7XG4gICAgdmFsIC09IDIgKiBNYXRoLlBJXG4gIH1cbiAgcmV0dXJuIHZhbFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKGFuZ2xlLCBsZW5ndGgsIGNlbnRlcikge1xuICBjZW50ZXIgPSBjZW50ZXIgfHwgbmV3IFBvaW50KDAsIDApXG4gIHJldHVybiBjZW50ZXIuYWRkKG5ldyBQb2ludChsZW5ndGggKiBNYXRoLmNvcyhhbmdsZSksIGxlbmd0aCAqIE1hdGguc2luKGFuZ2xlKSkpXG59XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9nZW9tZXRyeS9wb2ludCdcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSAnLi9nZW9tZXRyeS9yZWN0YW5nbGUnXG5pbXBvcnQge1xuICBnZXRQb2ludE9uTGluZUJ5TGVuZ2h0LFxuICBkaXJlY3RDcm9zc2luZyxcbiAgYm91bmRUb0xpbmVcbn0gZnJvbSAnLi9nZW9tZXRyeS9ib3VuZHMnXG5cbmltcG9ydCB7XG4gIGdldEFuZ2xlLFxuICBub3JtYWxpemVBbmdsZSxcbiAgYm91bmRBbmdsZSxcbiAgZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtXG59IGZyb20gJy4vZ2VvbWV0cnkvYW5nbGVzJ1xuXG5leHBvcnQgY2xhc3MgQm91bmQge1xuICBjb25zdHJ1Y3RvciAoKSB7fVxuXG4gIGJvdW5kKHBvaW50LCBfc2l6ZSkge1xuICAgIHJldHVybiBwb2ludFxuICB9XG5cbiAgcmVmcmVzaCAoKSB7fVxuXG4gIHN0YXRpYyBib3VuZGluZygpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyB0aGlzKC4uLmFyZ3VtZW50cylcbiAgICByZXR1cm4gaW5zdGFuY2UuYm91bmQuYmluZChpbnN0YW5jZSlcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb1JlY3RhbmdsZSBleHRlbmRzIEJvdW5kIHtcbiAgY29uc3RydWN0b3IocmVjdGFuZ2xlKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMucmVjdGFuZ2xlID0gcmVjdGFuZ2xlXG4gIH1cblxuICBib3VuZChwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IGNhbGNQb2ludCA9IHBvaW50LmNsb25lKClcbiAgICBjb25zdCByZWN0UDIgPSB0aGlzLnJlY3RhbmdsZS5nZXRQMygpXG5cbiAgICBpZiAodGhpcy5yZWN0YW5nbGUucG9zaXRpb24ueCA+IGNhbGNQb2ludC54KSB7XG4gICAgICAoY2FsY1BvaW50LnggPSB0aGlzLnJlY3RhbmdsZS5wb3NpdGlvbi54KVxuICAgIH1cbiAgICBpZiAodGhpcy5yZWN0YW5nbGUucG9zaXRpb24ueSA+IGNhbGNQb2ludC55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHRoaXMucmVjdGFuZ2xlLnBvc2l0aW9uLnlcbiAgICB9XG4gICAgaWYgKHJlY3RQMi54IDwgY2FsY1BvaW50LnggKyBzaXplLngpIHtcbiAgICAgIGNhbGNQb2ludC54ID0gcmVjdFAyLnggLSBzaXplLnhcbiAgICB9XG4gICAgaWYgKHJlY3RQMi55IDwgY2FsY1BvaW50LnkgKyBzaXplLnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gcmVjdFAyLnkgLSBzaXplLnlcbiAgICB9XG5cbiAgICByZXR1cm4gY2FsY1BvaW50XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9FbGVtZW50IGV4dGVuZHMgQm91bmRUb1JlY3RhbmdsZSB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbnRhaW5lcikge1xuICAgIHN1cGVyKFJlY3RhbmdsZS5mcm9tRWxlbWVudChlbGVtZW50LCBjb250YWluZXIpKVxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lclxuICB9XG5cbiAgcmVmcmVzaCAoKSB7XG4gICAgdGhpcy5yZWN0YW5nbGUgPSBSZWN0YW5nbGUuZnJvbUVsZW1lbnQodGhpcy5lbGVtZW50LCB0aGlzLmNvbnRhaW5lcilcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb0xpbmVYIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3Rvcih4LCBzdGFydFksIGVuZFkpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy54ID0geFxuICAgIHRoaXMuc3RhcnRZID0gc3RhcnRZXG4gICAgdGhpcy5lbmRZID0gZW5kWVxuICB9XG5cbiAgYm91bmQocG9pbnQsIHNpemUpIHtcbiAgICBjb25zdCBjYWxjUG9pbnQgPSBwb2ludC5jbG9uZSgpXG5cbiAgICBjYWxjUG9pbnQueCA9IHRoaXMueFxuICAgIGlmICh0aGlzLnN0YXJ0WSA+IGNhbGNQb2ludC55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHRoaXMuc3RhcnRZXG4gICAgfVxuICAgIGlmICh0aGlzLmVuZFkgPCBjYWxjUG9pbnQueSArIHNpemUueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSB0aGlzLmVuZFkgLSBzaXplLnlcbiAgICB9XG5cbiAgICByZXR1cm4gY2FsY1BvaW50XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9MaW5lWSBleHRlbmRzIEJvdW5kIHtcbiAgY29uc3RydWN0b3IoeSwgc3RhcnRYLCBlbmRYKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMueSA9IHlcbiAgICB0aGlzLnN0YXJ0WCA9IHN0YXJ0WFxuICAgIHRoaXMuZW5kWCA9IGVuZFhcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgY2FsY1BvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIGNhbGNQb2ludC55ID0gdGhpcy55XG4gICAgaWYgKHRoaXMuc3RhcnRYID4gY2FsY1BvaW50LngpIHtcbiAgICAgIGNhbGNQb2ludC54ID0gdGhpcy5zdGFydFhcbiAgICB9XG4gICAgaWYgKHRoaXMuZW5kWCA8IGNhbGNQb2ludC54ICsgc2l6ZS54KSB7XG4gICAgICBjYWxjUG9pbnQueCA9IHRoaXMuZW5kWCAtIHNpemUueFxuICAgIH1cbiAgICByZXR1cm4gY2FsY1BvaW50XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9MaW5lIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3RvcihzdGFydFBvaW50LCBlbmRQb2ludCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnN0YXJ0UG9pbnQgPSBzdGFydFBvaW50XG4gICAgdGhpcy5lbmRQb2ludCA9IGVuZFBvaW50XG4gICAgY29uc3QgYWxwaGEgPSBNYXRoLmF0YW4yKGVuZFBvaW50LnkgLSBzdGFydFBvaW50LnksIGVuZFBvaW50LnggLSBzdGFydFBvaW50LngpXG4gICAgY29uc3QgYmV0YSA9IGFscGhhICsgTWF0aC5QSSAvIDJcbiAgICB0aGlzLnNvbWVLID0gMTBcbiAgICB0aGlzLmNvc0JldGEgPSBNYXRoLmNvcyhiZXRhKVxuICAgIHRoaXMuc2luQmV0YSA9IE1hdGguc2luKGJldGEpXG4gIH1cblxuICBib3VuZChwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IHBvaW50MiA9IG5ldyBQb2ludChcbiAgICAgIHBvaW50LnggKyB0aGlzLnNvbWVLICogdGhpcy5jb3NCZXRhLFxuICAgICAgcG9pbnQueSArIHRoaXMuc29tZUsgKiB0aGlzLnNpbkJldGFcbiAgICApXG5cbiAgICBjb25zdCBuZXdFbmRQb2ludCA9IGdldFBvaW50T25MaW5lQnlMZW5naHQodGhpcy5lbmRQb2ludCwgdGhpcy5zdGFydFBvaW50LCBzaXplLngpXG4gICAgY29uc3QgcG9pbnRDcm9zc2luZyA9IGRpcmVjdENyb3NzaW5nKHRoaXMuc3RhcnRQb2ludCwgdGhpcy5lbmRQb2ludCwgcG9pbnQsIHBvaW50MilcblxuICAgIHJldHVybiBib3VuZFRvTGluZSh0aGlzLnN0YXJ0UG9pbnQsIG5ld0VuZFBvaW50LCBwb2ludENyb3NzaW5nKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvQ2lyY2xlIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3RvcihjZW50ZXIsIHJhZGl1cykge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLmNlbnRlciA9IGNlbnRlclxuICAgIHRoaXMucmFkaXVzID0gcmFkaXVzXG4gIH1cblxuICBib3VuZChwb2ludCwgX3NpemUpIHtcbiAgICByZXR1cm4gZ2V0UG9pbnRPbkxpbmVCeUxlbmdodCh0aGlzLmNlbnRlciwgcG9pbnQsIHRoaXMucmFkaXVzKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvQXJjIGV4dGVuZHMgQm91bmRUb0NpcmNsZSB7XG4gIGNvbnN0cnVjdG9yKGNlbnRlciwgcmFkaXVzLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSkge1xuICAgIHN1cGVyKGNlbnRlciwgcmFkaXVzKVxuICAgIHRoaXMuX3N0YXJ0QW5nbGUgPSBzdGFydEFuZ2xlXG4gICAgdGhpcy5fZW5kQW5nbGUgPSBlbmRBbmdsZVxuICB9XG5cbiAgc3RhcnRBbmdsZSgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMuX3N0YXJ0QW5nbGUgPT09ICdmdW5jdGlvbicgPyB0aGlzLl9zdGFydEFuZ2xlKCkgOiB0aGlzLl9zdGFydEFuZ2xlXG4gIH1cblxuICBlbmRBbmdsZSgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMuX2VuZEFuZ2xlID09PSAnZnVuY3Rpb24nID8gdGhpcy5fZW5kQW5nbGUoKSA6IHRoaXMuX2VuZEFuZ2xlXG4gIH1cblxuICBib3VuZChwb2ludCwgX3NpemUpIHtcbiAgICBsZXQgYW5nbGUgPSBnZXRBbmdsZSh0aGlzLmNlbnRlciwgcG9pbnQpXG4gICAgYW5nbGUgPSBub3JtYWxpemVBbmdsZShhbmdsZSlcbiAgICBhbmdsZSA9IGJvdW5kQW5nbGUodGhpcy5zdGFydEFuZ2xlKCksIHRoaXMuZW5kQW5nbGUoKSwgYW5nbGUpXG4gICAgcmV0dXJuIGdldFBvaW50RnJvbVJhZGlhbFN5c3RlbShhbmdsZSwgdGhpcy5yYWRpdXMsIHRoaXMuY2VudGVyKVxuICB9XG59XG4iLCJpbXBvcnQgcmFuZ2UgZnJvbSAnLi91dGlscy9yYW5nZS5qcydcbmltcG9ydCByZW1vdmVJdGVtIGZyb20gJy4vdXRpbHMvcmVtb3ZlLWFycmF5LWl0ZW0nXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnRFbWl0dGVyJ1xuaW1wb3J0IGRpc3BhdGNoRG9tRXZlbnQgZnJvbSAnLi91dGlscy9kaXNwYXRjaC1kb20tZXZlbnQnXG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gJy4vZ2VvbWV0cnkvcmVjdGFuZ2xlJ1xuaW1wb3J0IHsgdHJhbnNmb3JtZWRTcGFjZURpc3RhbmNlRmFjdG9yeSB9IGZyb20gJy4vZ2VvbWV0cnkvZGlzdGFuY2VzJ1xuaW1wb3J0IHsgc2NvcGVzLCBjdXJyZW50U2NvcGUgfSBmcm9tICcuL3Njb3BlJ1xuXG5pbXBvcnQgeyBGbG9hdExlZnRTdHJhdGVneSB9IGZyb20gJy4vcG9zaXRpb25pbmcnXG5pbXBvcnQgeyBCb3VuZFRvRWxlbWVudCB9IGZyb20gJy4vYm91bmRpbmcnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhcmdldCBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGRyYWdnYWJsZXMsIG9wdGlvbnMgPSB7fSkge1xuICAgIHN1cGVyKG9wdGlvbnMpXG4gICAgY29uc3QgdGFyZ2V0ID0gdGhpc1xuXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICB0aW1lRW5kOiAyMDAsXG4gICAgICB0aW1lRXhjYW5nZTogNDAwXG4gICAgfSwgb3B0aW9ucylcblxuICAgIHRoaXMucG9zaXRpb25pbmdTdHJhdGVneSA9IG9wdGlvbnMuc3RyYXRlZ3kgfHwgbmV3IEZsb2F0TGVmdFN0cmF0ZWd5KFxuICAgICAgdGhpcy5nZXRSZWN0YW5nbGUuYmluZCh0aGlzKSxcbiAgICAgIHtcbiAgICAgICAgcmFkaXVzOiA4MCxcbiAgICAgICAgZ2V0RGlzdGFuY2U6IHRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3RvcnkoeyB4OiAxLCB5OiA0IH0pLFxuICAgICAgICByZW1vdmFibGU6IHRydWVcbiAgICAgIH1cbiAgICApXG5cbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG4gICAgdGhpcy5yZW1vdmVPbk1vdmVDb250cm9sbGVycyA9IG5ldyBNYXAoKVxuICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUudGFyZ2V0cy5wdXNoKHRhcmdldCkpXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gZHJhZ2dhYmxlc1xuXG4gICAgY3VycmVudFNjb3BlKCkuYWRkVGFyZ2V0KHRoaXMpXG5cbiAgICB0aGlzLnN0YXJ0Qm91bmRpbmcoKVxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBzdGFydEJvdW5kaW5nKCkge1xuICAgIHRoaXMuYm91bmQgPSB0aGlzLm9wdGlvbnMuYm91bmQgfHwgQm91bmRUb0VsZW1lbnQuYm91bmRpbmcodGhpcy5lbGVtZW50KVxuICB9XG5cbiAgcG9zaXRpb25pbmcgKGRyYWdnYWJsZXMsIGluZGV4ZXNPZk5ldykge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uaW5nU3RyYXRlZ3kucG9zaXRpb25pbmcoZHJhZ2dhYmxlcywgaW5kZXhlc09mTmV3KVxuICB9XG5cbiAgc29ydGluZyAob2xkRHJhZ2dhYmxlcywgbmV3RHJhZ2dhYmxlcywgaW5kZXhPZk5ld3MpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbmluZ1N0cmF0ZWd5LnNvcnRpbmcob2xkRHJhZ2dhYmxlcywgbmV3RHJhZ2dhYmxlcywgaW5kZXhPZk5ld3MpXG4gIH1cblxuICBpbml0KCkge1xuICAgIGxldCByZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXdcblxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzID0gdGhpcy5kcmFnZ2FibGVzLmZpbHRlcigoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBsZXQgZWxlbWVudCA9IGRyYWdnYWJsZS5lbGVtZW50LnBhcmVudE5vZGVcbiAgICAgIHdoaWxlIChlbGVtZW50KSB7XG4gICAgICAgIGlmIChlbGVtZW50ID09PSB0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGVcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH0pXG5cbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMubGVuZ3RoKSB7XG4gICAgICBpbmRleGVzT2ZOZXcgPSByYW5nZSh0aGlzLmlubmVyRHJhZ2dhYmxlcy5sZW5ndGgpXG4gICAgICByZWN0YW5nbGVzID0gdGhpcy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgICB9KSwgaW5kZXhlc09mTmV3KVxuICAgICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXcpXG4gICAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHRoaXMuZW1pdFRhcmdldEV2ZW50KCdhZGQnLCBkcmFnZ2FibGUpKVxuICAgIH1cbiAgfVxuXG4gIGdldFJlY3RhbmdsZSgpIHtcbiAgICByZXR1cm4gUmVjdGFuZ2xlLmZyb21FbGVtZW50KHRoaXMuZWxlbWVudCwgdGhpcy5jb250YWluZXIsIHRydWUpXG4gIH1cblxuICBjYXRjaERyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmNhdGNoRHJhZ2dhYmxlKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmNhdGNoRHJhZ2dhYmxlKHRoaXMsIGRyYWdnYWJsZSlcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGFyZ2V0UmVjdGFuZ2xlID0gdGhpcy5nZXRSZWN0YW5nbGUoKVxuICAgICAgY29uc3QgZHJhZ2dhYmxlU3F1YXJlID0gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpLmdldFNxdWFyZSgpXG5cbiAgICAgIHJldHVybiBkcmFnZ2FibGVTcXVhcmUgPCB0YXJnZXRSZWN0YW5nbGUuZ2V0U3F1YXJlKClcbiAgICAgICAgICAgICAgJiYgdGFyZ2V0UmVjdGFuZ2xlLmluY2x1ZGVQb2ludChkcmFnZ2FibGUuZ2V0Q2VudGVyKCkpXG4gICAgfVxuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UmVjdGFuZ2xlKCkucG9zaXRpb25cbiAgfVxuXG4gIGdldFNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UmVjdGFuZ2xlKCkuc2l6ZVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICBzY29wZXMuZm9yRWFjaCgoc2NvcGUpID0+IHJlbW92ZUl0ZW0oc2NvcGUudGFyZ2V0cywgdGhpcykpXG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgfSksIFtdKVxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgW10sIDApXG4gIH1cblxuICBvbkVuZChkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBuZXdEcmFnZ2FibGVzSW5kZXggPSBbXVxuXG4gICAgaWYgKCF0aGlzLmdldFJlY3RhbmdsZSgpLmluY2x1ZGVQb2ludChkcmFnZ2FibGUuZ2V0Q2VudGVyKCkpKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuZW1pdFRhcmdldEV2ZW50KCdiZWZvcmVBZGQnLCBkcmFnZ2FibGUsIHsgY2FuY2VsYWJsZTogdHJ1ZSB9KSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgZHJhZ2dhYmxlLnBvc2l0aW9uID0gdGhpcy5ib3VuZChkcmFnZ2FibGUucG9zaXRpb24sIGRyYWdnYWJsZS5nZXRTaXplKCkpXG5cbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcyA9IHRoaXMuc29ydGluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcywgW2RyYWdnYWJsZV0sIG5ld0RyYWdnYWJsZXNJbmRleClcbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBuZXdEcmFnZ2FibGVzSW5kZXgpXG5cbiAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIG5ld0RyYWdnYWJsZXNJbmRleClcbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMSkge1xuICAgICAgdGhpcy5hZGRSZW1vdmVPbk1vdmUoZHJhZ2dhYmxlKVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgaW5kZXhlc09mTmV3LCB0aW1lKSB7XG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuc2xpY2UoMCkuZm9yRWFjaCgoZHJhZ2dhYmxlLCBpKSA9PiB7XG4gICAgICBjb25zdCByZWN0ID0gcmVjdGFuZ2xlc1tpXSxcbiAgICAgICAgdGltZUVuZCA9IHRpbWUgfHwgdGltZSA9PT0gMCA/IHRpbWUgOiBpbmRleGVzT2ZOZXcuaW5kZXhPZihpKSAhPT0gLTEgPyB0aGlzLm9wdGlvbnMudGltZUVuZCA6IHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZVxuXG4gICAgICBpZiAocmVjdC5yZW1vdmFibGUpIHtcbiAgICAgICAgZHJhZ2dhYmxlLm1vdmUoZHJhZ2dhYmxlLmluaXRpYWxQb3NpdGlvbiwgdGltZUVuZCwgdHJ1ZSwgdHJ1ZSlcbiAgICAgICAgdGhpcy5zdG9wUmVtb3ZlT25Nb3ZlKGRyYWdnYWJsZSlcbiAgICAgICAgcmVtb3ZlSXRlbSh0aGlzLmlubmVyRHJhZ2dhYmxlcywgZHJhZ2dhYmxlKVxuICAgICAgICB0aGlzLmVtaXRUYXJnZXRFdmVudCgncmVtb3ZlJywgZHJhZ2dhYmxlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZHJhZ2dhYmxlLm1vdmUocmVjdC5wb3NpdGlvbiwgdGltZUVuZCwgdHJ1ZSwgdHJ1ZSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgYWRkKGRyYWdnYWJsZSwgdGltZSkge1xuICAgIGNvbnN0IG5ld0RyYWdnYWJsZXNJbmRleCA9IHRoaXMuaW5uZXJEcmFnZ2FibGVzLmxlbmd0aFxuXG4gICAgaWYgKCF0aGlzLmVtaXRUYXJnZXRFdmVudCgnYmVmb3JlQWRkJywgZHJhZ2dhYmxlLCB7IGNhbmNlbGFibGU6IHRydWUgfSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMucHVzaElubmVyRHJhZ2dhYmxlKGRyYWdnYWJsZSlcbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBuZXdEcmFnZ2FibGVzSW5kZXgsIGRyYWdnYWJsZSlcblxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgW25ld0RyYWdnYWJsZXNJbmRleF0sIHRpbWUgfHwgMClcbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMSkge1xuICAgICAgdGhpcy5hZGRSZW1vdmVPbk1vdmUoZHJhZ2dhYmxlKVxuICAgIH1cbiAgfVxuXG4gIHB1c2hJbm5lckRyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpPT09LTEpIHtcbiAgICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxuICAgIH1cbiAgfVxuXG4gIGFkZFJlbW92ZU9uTW92ZShkcmFnZ2FibGUpIHtcbiAgICB0aGlzLnN0b3BSZW1vdmVPbk1vdmUoZHJhZ2dhYmxlKVxuICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKClcbiAgICBkcmFnZ2FibGUuYWRkRXZlbnRMaXN0ZW5lcignZHJhZzptb3ZlJywgKCkgPT4gdGhpcy5yZW1vdmUoZHJhZ2dhYmxlKSwgeyBzaWduYWw6IGNvbnRyb2xsZXIuc2lnbmFsIH0pXG4gICAgdGhpcy5yZW1vdmVPbk1vdmVDb250cm9sbGVycy5zZXQoZHJhZ2dhYmxlLCBjb250cm9sbGVyKVxuXG4gICAgdGhpcy5lbWl0VGFyZ2V0RXZlbnQoJ2FkZCcsIGRyYWdnYWJsZSlcbiAgfVxuXG4gIHN0b3BSZW1vdmVPbk1vdmUoZHJhZ2dhYmxlKSB7XG4gICAgdGhpcy5yZW1vdmVPbk1vdmVDb250cm9sbGVycy5nZXQoZHJhZ2dhYmxlKT8uYWJvcnQoKVxuICAgIHRoaXMucmVtb3ZlT25Nb3ZlQ29udHJvbGxlcnMuZGVsZXRlKGRyYWdnYWJsZSlcbiAgfVxuXG4gIHJlbW92ZShkcmFnZ2FibGUpIHtcbiAgICB0aGlzLnN0b3BSZW1vdmVPbk1vdmUoZHJhZ2dhYmxlKVxuXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSlcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5zcGxpY2UoaW5kZXgsIDEpXG5cbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBbXSlcblxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgW10pXG4gICAgdGhpcy5lbWl0VGFyZ2V0RXZlbnQoJ3JlbW92ZScsIGRyYWdnYWJsZSlcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLm1vdmUoZHJhZ2dhYmxlLmluaXRpYWxQb3NpdGlvbiwgMCwgdHJ1ZSwgdHJ1ZSlcbiAgICAgIHRoaXMuc3RvcFJlbW92ZU9uTW92ZShkcmFnZ2FibGUpXG4gICAgICB0aGlzLmVtaXRUYXJnZXRFdmVudCgncmVtb3ZlJywgZHJhZ2dhYmxlKVxuICAgIH0pXG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMgPSBbXVxuICB9XG5cbiAgZ2V0U29ydGVkRHJhZ2dhYmxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5pbm5lckRyYWdnYWJsZXMuc2xpY2UoKVxuICB9XG5cbiAgZW1pdFRhcmdldEV2ZW50KHR5cGUsIGRyYWdnYWJsZSwgeyBjYW5jZWxhYmxlID0gZmFsc2UgfSA9IHt9KSB7XG4gICAgY29uc3QgZGV0YWlsID0geyB0YXJnZXQ6IHRoaXMsIGRyYWdnYWJsZSB9XG4gICAgY29uc3QgaXNOb3RQcmV2ZW50ZWQgPSB0aGlzLmVtaXQoYHRhcmdldDoke3R5cGV9YCwgZGV0YWlsLCB7IGNhbmNlbGFibGUgfSlcblxuICAgIGlmICghdGhpcy5kb21FdmVudHMpIHJldHVybiBpc05vdFByZXZlbnRlZFxuXG4gICAgY29uc3QgZG9tVHlwZSA9IHR5cGUucmVwbGFjZSgvW0EtWl0vZywgKGxldHRlcikgPT4gYC0ke2xldHRlci50b0xvd2VyQ2FzZSgpfWApXG4gICAgcmV0dXJuIGRpc3BhdGNoRG9tRXZlbnQodGhpcy5lbGVtZW50LCBgZHJhZ2VlOnRhcmdldC0ke2RvbVR5cGV9YCwgZGV0YWlsLCB7IGNhbmNlbGFibGUgfSkgJiYgaXNOb3RQcmV2ZW50ZWRcbiAgfVxuXG4gIGdldCBjb250YWluZXIoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9jb250YWluZXIgPSB0aGlzLl9jb250YWluZXIgfHwgdGhpcy5vcHRpb25zLmNvbnRhaW5lciB8fCB0aGlzLm9wdGlvbnMucGFyZW50IHx8IHRoaXMuZWxlbWVudC5vZmZzZXRQYXJlbnQpXG4gIH1cblxuICBnZXQgZG9tRXZlbnRzKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZG9tRXZlbnRzICE9PSBmYWxzZVxuICB9XG59XG5cbiJdLCJuYW1lcyI6WyJnZXRQYXJlbnRzQ2hhaW4iLCJjaGlsZEVsZW1lbnQiLCJyb290RWxlbWVudCIsImNoYWluIiwiZWxlbWVudCIsInBhcmVudE5vZGUiLCJ1bnNoaWZ0IiwiUG9pbnQiLCJjb25zdHJ1Y3RvciIsIngiLCJ5IiwiYWRkIiwicCIsInN1YiIsIm11bHQiLCJrIiwibmVnYXRpdmUiLCJjb21wYXJlIiwiY2xvbmUiLCJ0b1N0cmluZyIsImVsZW1lbnRPZmZzZXQiLCJwYXJlbnQiLCJvZmZzZXRQYXJlbnQiLCJvZmZzZXRMZWZ0IiwiY2xpZW50TGVmdCIsIm9mZnNldFRvcCIsImNsaWVudFRvcCIsImNvbnNpZGVyT2Zmc2V0RWxlbWVudHMiLCJwb3AiLCJyZWR1Y2UiLCJzdW0iLCJlbGVtZW50Qm91bmRpbmdPZmZzZXQiLCJlbGVtZW50UmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInBhcmVudFJlY3QiLCJsZWZ0IiwidG9wIiwiZWxlbWVudFNpemUiLCJ3aWR0aCIsImhlaWdodCIsIlJlY3RhbmdsZSIsInBvc2l0aW9uIiwic2l6ZSIsImdldFAxIiwiZ2V0UDIiLCJnZXRQMyIsImdldFA0IiwiZ2V0Q2VudGVyIiwib3IiLCJyZWN0IiwiTWF0aCIsIm1pbiIsIm1heCIsImFuZCIsImluY2x1ZGVQb2ludCIsImluY2x1ZGVSZWN0YW5nbGUiLCJyZWN0YW5nbGUiLCJtb3ZlVG9Cb3VuZCIsImF4aXMiLCJzZWxBeGlzIiwiY3Jvc3NSZWN0YW5nbGUiLCJ0aGlzQ2VudGVyIiwicmVjdENlbnRlciIsInNpZ24iLCJvZmZzZXQiLCJnZXRTcXVhcmUiLCJzdHlsZUFwcGx5IiwiZWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzdHlsZSIsImdyb3d0aCIsImdldE1pblNpZGUiLCJmcm9tRWxlbWVudCIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsImlzQ29uc2lkZXJUcmFuc2xhdGUiLCJFdmVudEVtaXR0ZXIiLCJFdmVudFRhcmdldCIsIm9wdGlvbnMiLCJvbiIsIk9iamVjdCIsImVudHJpZXMiLCJmb3JFYWNoIiwiX3JlZiIsImV2ZW50TmFtZSIsImZuIiwiZW1pdCIsImRldGFpbCIsImNhbmNlbGFibGUiLCJkaXNwYXRjaEV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwib2ZmIiwib25jZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ1bnN1YnNjcmliZSIsImFycmF5IiwidmFsIiwiaSIsInNwbGljZSIsInNjb3BlcyIsInNjb3BlU3RhY2siLCJTY29wZSIsImRyYWdnYWJsZXMiLCJ0YXJnZXRzIiwic2NvcGUiLCJkcmFnZ2FibGUiLCJyZWxlYXNlRHJhZ2dhYmxlIiwidGFyZ2V0IiwicmVtb3ZlSXRlbSIsImRyb3BTdWJzY3JpcHRpb25zIiwiTWFwIiwicHVzaCIsInRpbWVFbmQiLCJpbml0IiwiaW5pdERyYWdnYWJsZSIsImFkZERyYWdnYWJsZSIsInNldCIsImV2ZW50IiwiZGVmYXVsdFByZXZlbnRlZCIsInByZXZlbnREZWZhdWx0Iiwib25FbmQiLCJnZXQiLCJkZWxldGUiLCJhZGRUYXJnZXQiLCJzaG90VGFyZ2V0cyIsImZpbHRlciIsImluZGV4T2YiLCJjYXRjaERyYWdnYWJsZSIsInNvcnQiLCJhIiwiYiIsImdldFJlY3RhbmdsZSIsImlzQWNjZXB0ZWQiLCJwaW5Qb3NpdGlvbiIsImluaXRpYWxQb3NpdGlvbiIsInJlc2V0IiwicmVmcmVzaCIsInBvc2l0aW9ucyIsIm1hcCIsImlubmVyRHJhZ2dhYmxlcyIsIm1lc3NhZ2UiLCJ0YXJnZXRJbmRleGVzIiwiaW5kZXgiLCJkZWZhdWx0U2NvcGUiLCJjdXJyZW50U2NvcGUiLCJjYWxsIiwidGhyb3R0bGUiLCJmdW5jIiwid2FpdCIsImxhc3RUaW1lIiwiZXhlY3V0ZWRGdW5jdGlvbiIsImNvbnRleHQiLCJhcmdzIiwibm93IiwiRGF0ZSIsImFwcGx5IiwiZGlzcGF0Y2hEb21FdmVudCIsImJ1YmJsZXMiLCJ0aHJvdHRsZWREcmFnT3ZlciIsImNhbGxiYWNrIiwiZHVyYXRpb24iLCJ0aHJvdHRsZWRDYWxsYmFjayIsInBhc3NpdmVGYWxzZSIsInBhc3NpdmUiLCJpc1RvdWNoIiwibmF2aWdhdG9yIiwibWF4VG91Y2hQb2ludHMiLCJtb3VzZUV2ZW50cyIsInN0YXJ0IiwibW92ZSIsImVuZCIsInRvdWNoRXZlbnRzIiwidHJhbnNmb3JtUHJvcGVydHkiLCJ0cmFuc2l0aW9uUHJvcGVydHkiLCJnZXRUb3VjaEJ5SUQiLCJ0b3VjaElkIiwiY2hhbmdlZFRvdWNoZXMiLCJpZGVudGlmaWVyIiwicHJldmVudERvdWJsZUluaXQiLCJzb21lIiwiZXhpc3RpbmciLCJjb3B5U3R5bGVzIiwic291cmNlIiwiZGVzdGluYXRpb24iLCJjcyIsIndpbmRvdyIsImdldENvbXB1dGVkU3R5bGUiLCJrZXkiLCJjaGlsZHJlbiIsIkRyYWdnYWJsZSIsIl9lbmFibGUiLCJzdGFydEJvdW5kaW5nIiwic3RhcnRQb3NpdGlvbmluZyIsInN0YXJ0TGlzdGVuaW5nIiwiYm91bmRpbmciLCJib3VuZCIsInBvaW50IiwiX3NldERlZmF1bHRUcmFuc2l0aW9uIiwiaXNDb25zaWRlclRyYW5zZm9ybU9mZnNldCIsImNvbnRhaW5lciIsInBpbm5lZFBvc2l0aW9uIiwiX2RyYWdTdGFydCIsImRyYWdTdGFydCIsIl9kcmFnTW92ZSIsImRyYWdNb3ZlIiwiX2RyYWdFbmQiLCJkcmFnRW5kIiwiX25hdGl2ZURyYWdTdGFydCIsIm5hdGl2ZURyYWdTdGFydCIsIl9uYXRpdmVEcmFnT3ZlciIsIm5hdGl2ZURyYWdPdmVyIiwiZHJhZ092ZXJUaHJvdHRsZUR1cmF0aW9uIiwiX25hdGl2ZURyYWdFbmQiLCJuYXRpdmVEcmFnRW5kIiwiX25hdGl2ZURyb3AiLCJuYXRpdmVEcm9wIiwiX3Njcm9sbCIsIm9uU2Nyb2xsIiwiaGFuZGxlciIsImdldFNpemUiLCJnZXRQb3NpdGlvbiIsIl90cmFuc2Zvcm1Qb3NpdGlvbiIsIl9zZXRUcmFuc2l0aW9uIiwidGltZSIsInRyYW5zaXRpb24iLCJ0cmFuc2l0aW9uQ3NzIiwidGVzdCIsInJlcGxhY2UiLCJfc2V0VHJhbnNsYXRlIiwidHJhbnNsYXRlQ3NzIiwidHJhbnNmb3JtIiwic2hvdWxkUmVtb3ZlWmVyb1RyYW5zbGF0ZSIsImlzU2lsZW50IiwiZW1pdERyYWdFdmVudCIsInNpbGVudCIsInJlc2V0UG9zaXRpb25Ub0luaXRpYWwiLCJyZWZyZXNoUG9zaXRpb24iLCJzZXRQb3NpdGlvbiIsImRldGVybWluZURpcmVjdGlvbiIsIl9wcmV2aW91c0RpcmVjdGlvblBvc2l0aW9uIiwiX3N0YXJ0UG9zaXRpb24iLCJsZWZ0RGlyZWN0aW9uIiwicmlnaHREaXJlY3Rpb24iLCJ1cERpcmVjdGlvbiIsImRvd25EaXJlY3Rpb24iLCJzZWVtc1Njcm9sbGluZyIsIl9zdGFydFRvdWNoVGltZXN0YW1wIiwidG91Y2hEcmFnZ2luZ1RocmVzaG9sZCIsInNob3VsZFVzZU5hdGl2ZURyYWdBbmREcm9wIiwiaXNUb3VjaEV2ZW50IiwibmF0aXZlRHJhZ0FuZERyb3AiLCJlbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3BPblRvdWNoIiwic3RvcFByb3BhZ2F0aW9uT25EcmFnU3RhcnQiLCJzdG9wUHJvcGFnYXRpb24iLCJUb3VjaEV2ZW50IiwidG91Y2hQb2ludCIsIl9zdGFydFRvdWNoUG9pbnQiLCJwYWdlWCIsImNsaWVudFgiLCJwYWdlWSIsImNsaWVudFkiLCJfdG91Y2hJZCIsIl9zdGFydFdpbmRvd1Njcm9sbFBvaW50Iiwid2luZG93U2Nyb2xsUG9pbnQiLCJfc3RhcnRTY3JvbGxFbGVtZW50c09mZnNldCIsInNjcm9sbEVsZW1lbnRzT2Zmc2V0IiwiSFRNTElucHV0RWxlbWVudCIsImZvY3VzIiwiaXNTdGFydFBlbmRpbmciLCJkcmFnU3RhcnRUaHJlc2hvbGQiLCJfc3RhcnRQYXJlbnRzU2Nyb2xsT2Zmc2V0IiwicGFyZW50c1Njcm9sbE9mZnNldCIsImVtdWxhdGVPbkZpcnN0TW92ZSIsImNhbmNlbERyYWdnaW5nIiwiZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wIiwiY2FuY2VsRW11bGF0aW9uIiwic2Nyb2xsRWxlbWVudHMiLCJfZHJhZ1N0YXJ0UGVuZGluZyIsInRvdWNoIiwiZHgiLCJkeSIsInNxcnQiLCJpc0RyYWdnaW5nIiwiY2xhc3NMaXN0IiwiZHJvcCIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJfZXZlbnQiLCJkYXRhVHJhbnNmZXIiLCJzZXREYXRhIiwiZWZmZWN0QWxsb3dlZCIsImRyb3BFZmZlY3QiLCJyZW1vdmVBdHRyaWJ1dGUiLCJjb250YWluZXJSZWN0IiwiY2xvbmVkRWxlbWVudCIsImNsb25lTm9kZSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImVtdWxhdGlvbkRyYWdnYWJsZSIsImRvbUV2ZW50cyIsImRyYWc6bW92ZSIsImNvbnRhaW5lclJlY3RQb2ludCIsImRyYWc6ZW5kIiwiZGVzdHJveSIsInJlbW92ZUNoaWxkIiwidHlwZSIsImlzTm90UHJldmVudGVkIiwiX2NvbnRhaW5lciIsIl9oYW5kbGVyIiwiY29uc2lkZXJUcmFuc2Zvcm1PZmZzZXQiLCJzY3JvbGxYIiwic2Nyb2xsWSIsInNjcm9sbFJvb3RDb250YWluZXIiLCJfY2FjaGVkU2Nyb2xsRWxlbWVudHMiLCJzY3JvbGxMZWZ0Iiwic2Nyb2xsVG9wIiwicGFyZW50cyIsIl9jYWNoZWRQYXJlbnRzIiwiZW5hYmxlIiwiZGVib3VuY2UiLCJpbW1lZGlhdGUiLCJ0aW1lb3V0IiwibGF0ZXIiLCJjbGVhclRpbWVvdXQiLCJnZXREaXN0YW5jZSIsInAxIiwicDIiLCJnZXRYRGlmZmVyZW5jZSIsImFicyIsImdldFlEaWZmZXJlbmNlIiwidHJhbnNmb3JtZWRTcGFjZURpc3RhbmNlRmFjdG9yeSIsInBvdyIsImluZGV4T2ZOZWFyZXN0UG9pbnQiLCJhcnIiLCJyYWRpdXMiLCJnZXREaXN0YW5jZUZ1bmMiLCJ0ZW1wIiwiTGlzdCIsImFzc2lnbiIsInRpbWVFeGNhbmdlIiwiY2hhbmdlZER1cmluZ0l0ZXJhdGlvbiIsImRyYWdnYWJsZUNvbnRyb2xsZXJzIiwicmVzaXplT2JzZXJ2ZXIiLCJSZXNpemVPYnNlcnZlciIsIm9uUmVzaXplIiwiYmluZCIsIm9ic2VydmUiLCJyZW9yZGVyT25DaGFuZ2UiLCJsaXN0ZW5UbyIsIm9uTW92ZSIsInNpZ25hbCIsInNpZ25hbEZvciIsImhhcyIsIkFib3J0Q29udHJvbGxlciIsInVub2JzZXJ2ZSIsImFib3J0Iiwic3dhcHBpbmdEaXNhYmxlZCIsInNvcnRlZERyYWdnYWJsZXMiLCJnZXRTb3J0ZWREcmFnZ2FibGVzIiwicGlubmVkUG9zaXRpb25zIiwiY3VycmVudEluZGV4IiwidGFyZ2V0SW5kZXgiLCJkaXN0YW5jZUZ1bmMiLCJlbWl0TGlzdEV2ZW50IiwicmVvcmRlckVsZW1lbnRzIiwibW92ZWREcmFnZ2FibGUiLCJuZXh0IiwiaW5zZXJ0QmVmb3JlIiwiZCIsImxpc3QiLCJnZXRDdXJyZW50UGlubmVkUG9zaXRpb25zIiwic29ydGluZyIsIkFycmF5IiwiY29uY2F0IiwiaW5pdGlhbFBvc2l0aW9ucyIsImoiLCJjbGVhciIsInNsaWNlIiwiZHJhZ2dhYmxlQSIsImRyYWdnYWJsZUIiLCJfc3dhcHBpbmdEaXNhYmxlZCIsImRpc2FibGVkIiwiYXJyYXlNb3ZlIiwiZnJvbSIsInRvIiwiQnViYmxpbmdMaXN0IiwiYXV0b0RldGVjdEdhcCIsIl9nYXAiLCJleHBsaWNpdEdhcCIsInNvcnRlZCIsImZpbmRJbmRleCIsImlzQ29ubmVjdGVkIiwiY3VycmVudCIsImF1dG9EZXRlY3RTdGFydFBvc2l0aW9uIiwic3RhcnRQb3NpdGlvbiIsIm9uRHJhZ1N0YXJ0IiwiY2FjaGVkU29ydGVkRHJhZ2dhYmxlcyIsImluZGV4T2ZBY3RpdmVEcmFnZ2FibGUiLCJwcmV2RHJhZ2dhYmxlIiwibmV4dERyYWdnYWJsZSIsImN1cnJlbnRQb3NpdGlvbiIsImN1cnJlbnRPcmRlciIsImlzTW92aW5nQmFja3dhcmQiLCJwcmV2TmV3UG9zaXRpb24iLCJuZXh0UG9zaXRpb24iLCJjcm9zc0F4aXMiLCJpc01vdmluZ0ZvcndhcmQiLCJkcmFnZ2FibGVOZXdQb3NpdGlvbiIsImJ1YmJsaW5nIiwiY3VycmVudERyYWdnYWJsZSIsImluY2x1ZGVzIiwiZ2FwIiwidmVydGljYWxHYXAiLCJnYXBWYWx1ZSIsInJhbmdlIiwic3RvcCIsInN0ZXAiLCJyZXN1bHQiLCJkaXJlY3RDcm9zc2luZyIsIkwxUDEiLCJMMVAyIiwiTDJQMSIsIkwyUDIiLCJrMSIsImsyIiwiYjEiLCJiMiIsImJvdW5kVG9MaW5lIiwiQSIsIkIiLCJQIiwiQVAiLCJBQiIsImFiMiIsImFwX2FiIiwidCIsImdldFBvaW50T25MaW5lQnlMZW5naHQiLCJMUDEiLCJMUDIiLCJsZW5naHQiLCJwZXJjZW50IiwiYWRkUG9pbnRUb0JvdW5kUG9pbnRzIiwiYm91bmRwb2ludHMiLCJpc1JpZ2h0IiwiYlBvaW50IiwiQmFzaWNTdHJhdGVneSIsImJvdW5kUmVjdCIsIk5vdENyb3NzaW5nU3RyYXRlZ3kiLCJwb3NpdGlvbmluZyIsInJlY3RhbmdsZUxpc3QiLCJpbmRleGVzT2ZOZXdzIiwic3RhdGljUmVjdGFuZ2xlSW5kZXhlcyIsImluZGV4ZXMiLCJfcmVjdCIsInJlbW92YWJsZSIsImluZGV4T2ZTdGF0aWMiLCJzdGF0aWNSZWN0Iiwib2RsRHJhZ2dhYmxlc0xpc3QiLCJuZXdEcmFnZ2FibGVzIiwiaW5kZXhPZk5ld3MiLCJGbG9hdExlZnRTdHJhdGVneSIsInBhZGRpbmdUb3BMZWZ0IiwicGFkZGluZ0JvdHRvbVJpZ2h0IiwieUdhcEJldHdlZW5EcmFnZ2FibGVzIiwiX2luZGV4ZXNPZk5ld3MiLCJyZWN0UDIiLCJib3VuZGFyeVBvaW50cyIsInJlY3RJbmRleCIsImlzVmFsaWQiLCJuZXdMaXN0IiwibGlzdE9sZFBvc2l0aW9uIiwibmV3RHJhZ2dhYmxlIiwiRmxvYXRSaWdodFN0cmF0ZWd5IiwicGFkZGluZ1RvcFJpZ2h0IiwicGFkZGluZ0JvdHRvbUxlZnQiLCJwYWRkaW5nQm90dG9tTmVnTGVmdCIsImdldEFuZ2xlRGlmZiIsImFscGhhIiwiYmV0YSIsIm1pbkFuZ2xlIiwibWF4QW5nbGUiLCJQSSIsImdldEFuZ2xlIiwiZGlmZiIsIm5vcm1hbGl6ZUFuZ2xlIiwiYXRhbjIiLCJib3VuZEFuZ2xlIiwiZG1pbiIsImRtYXgiLCJnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0iLCJhbmdsZSIsImNlbnRlciIsImNvcyIsInNpbiIsIkJvdW5kIiwiX3NpemUiLCJpbnN0YW5jZSIsIkJvdW5kVG9SZWN0YW5nbGUiLCJjYWxjUG9pbnQiLCJCb3VuZFRvRWxlbWVudCIsIkJvdW5kVG9MaW5lWCIsInN0YXJ0WSIsImVuZFkiLCJCb3VuZFRvTGluZVkiLCJzdGFydFgiLCJlbmRYIiwiQm91bmRUb0xpbmUiLCJzdGFydFBvaW50IiwiZW5kUG9pbnQiLCJzb21lSyIsImNvc0JldGEiLCJzaW5CZXRhIiwicG9pbnQyIiwibmV3RW5kUG9pbnQiLCJwb2ludENyb3NzaW5nIiwiQm91bmRUb0NpcmNsZSIsIkJvdW5kVG9BcmMiLCJzdGFydEFuZ2xlIiwiZW5kQW5nbGUiLCJfc3RhcnRBbmdsZSIsIl9lbmRBbmdsZSIsIlRhcmdldCIsInBvc2l0aW9uaW5nU3RyYXRlZ3kiLCJzdHJhdGVneSIsInJlbW92ZU9uTW92ZUNvbnRyb2xsZXJzIiwiaW5kZXhlc09mTmV3Iiwib2xkRHJhZ2dhYmxlcyIsInJlY3RhbmdsZXMiLCJlbWl0VGFyZ2V0RXZlbnQiLCJ0YXJnZXRSZWN0YW5nbGUiLCJkcmFnZ2FibGVTcXVhcmUiLCJuZXdEcmFnZ2FibGVzSW5kZXgiLCJhZGRSZW1vdmVPbk1vdmUiLCJzdG9wUmVtb3ZlT25Nb3ZlIiwicHVzaElubmVyRHJhZ2dhYmxlIiwiY29udHJvbGxlciIsImRvbVR5cGUiLCJsZXR0ZXIiLCJ0b0xvd2VyQ2FzZSJdLCJtYXBwaW5ncyI6Ijs7O0VBQWUsU0FBU0EsZUFBZUEsQ0FBQ0MsWUFBWSxFQUFFQyxXQUFXLEVBQUU7SUFDbEUsTUFBTUMsS0FBSyxHQUFHLEVBQUU7SUFDZixJQUFJQyxPQUFPLEdBQUdILFlBQVk7RUFFMUIsRUFBQSxPQUFNRyxPQUFPLENBQUNDLFVBQVUsSUFBSUQsT0FBTyxLQUFLRixXQUFXLEVBQUU7RUFDbkRDLElBQUFBLEtBQUssQ0FBQ0csT0FBTyxDQUFDRixPQUFPLENBQUNDLFVBQVUsQ0FBQztNQUNqQ0QsT0FBTyxHQUFHQSxPQUFPLENBQUNDLFVBQVU7RUFDOUI7RUFFQSxFQUFBLE9BQU9GLEtBQUs7RUFDZDs7RUNSQTtFQUNlLE1BQU1JLEtB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
