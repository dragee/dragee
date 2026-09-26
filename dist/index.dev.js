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
      const detail = {
        draggable: this
      };
      this.emit(`drag:${type}`, detail);
      if (this.domEvents) {
        dispatchDomEvent(this.element, `dragee:${type}`, detail);
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
      const restoreDragEndAction = draggable.overrideDragEndAction(() => {
        draggable.pinPosition(draggable.pinnedPosition, this.options.timeEnd);
        this.onEnd(draggable);
      });
      this.signalFor(draggable).addEventListener('abort', restoreDragEndAction);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZGV2LmpzIiwic291cmNlcyI6WyIuLi9zcmMvdXRpbHMvZ2V0LXBhcmVudHMtY2hhaW4uanMiLCIuLi9zcmMvZ2VvbWV0cnkvcG9pbnQuanMiLCIuLi9zcmMvZ2VvbWV0cnkvcmVjdGFuZ2xlLmpzIiwiLi4vc3JjL2V2ZW50RW1pdHRlci5qcyIsIi4uL3NyYy91dGlscy9yZW1vdmUtYXJyYXktaXRlbS5qcyIsIi4uL3NyYy9zY29wZS5qcyIsIi4uL3NyYy91dGlscy90aHJvdHRsZS5qcyIsIi4uL3NyYy91dGlscy9kaXNwYXRjaC1kb20tZXZlbnQuanMiLCIuLi9zcmMvZHJhZ2dhYmxlLmpzIiwiLi4vc3JjL3V0aWxzL2RlYm91bmNlLmpzIiwiLi4vc3JjL2dlb21ldHJ5L2Rpc3RhbmNlcy5qcyIsIi4uL3NyYy9saXN0LmpzIiwiLi4vc3JjL2J1YmJsaW5nTGlzdC5qcyIsIi4uL3NyYy91dGlscy9yYW5nZS5qcyIsIi4uL3NyYy9nZW9tZXRyeS9ib3VuZHMuanMiLCIuLi9zcmMvcG9zaXRpb25pbmcuanMiLCIuLi9zcmMvZ2VvbWV0cnkvYW5nbGVzLmpzIiwiLi4vc3JjL2JvdW5kaW5nLmpzIiwiLi4vc3JjL3RhcmdldC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRQYXJlbnRzQ2hhaW4oY2hpbGRFbGVtZW50LCByb290RWxlbWVudCkge1xuXHRjb25zdCBjaGFpbiA9IFtdXG4gIGxldCBlbGVtZW50ID0gY2hpbGRFbGVtZW50XG5cbiAgd2hpbGUoZWxlbWVudC5wYXJlbnROb2RlICYmIGVsZW1lbnQgIT09IHJvb3RFbGVtZW50KSB7XG4gICAgY2hhaW4udW5zaGlmdChlbGVtZW50LnBhcmVudE5vZGUpXG4gICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZVxuICB9XG5cbiAgcmV0dXJuIGNoYWluXG59XG4iLCJpbXBvcnQgZ2V0UGFyZW50c0NoYWluIGZyb20gJy4uL3V0aWxzL2dldC1wYXJlbnRzLWNoYWluJ1xuXG4vKiogQ2xhc3MgcmVwcmVzZW50aW5nIGEgcG9pbnQuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2ludCB7XG4gIC8qKlxuICAqIENyZWF0ZSBhIHBvaW50LlxuICAqIEBwYXJhbSB7bnVtYmVyfSB4IC0gVGhlIHggdmFsdWUuXG4gICogQHBhcmFtIHtudW1iZXJ9IHkgLSBUaGUgeSB2YWx1ZS5cbiAgKi9cbiAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgIHRoaXMueCA9IHhcbiAgICB0aGlzLnkgPSB5XG4gIH1cblxuICBhZGQocCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54ICsgcC54LCB0aGlzLnkgKyBwLnkpXG4gIH1cblxuICBzdWIocCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54IC0gcC54LCB0aGlzLnkgLSBwLnkpXG4gIH1cblxuICBtdWx0KGspIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCAqIGssIHRoaXMueSAqIGspXG4gIH1cblxuICBuZWdhdGl2ZSgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KC10aGlzLngsIC10aGlzLnkpXG4gIH1cblxuICBjb21wYXJlKHApIHtcbiAgICByZXR1cm4gKHRoaXMueCA9PT0gcC54ICYmIHRoaXMueSA9PT0gcC55KVxuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLngsIHRoaXMueSlcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiBge3g9JHt0aGlzLnh9LHk9JHt0aGlzLnl9fWBcbiAgfVxuXG4gIHN0YXRpYyBlbGVtZW50T2Zmc2V0KGVsZW1lbnQsIHBhcmVudCkge1xuICAgIHBhcmVudCA9IHBhcmVudCB8fCBlbGVtZW50LnBhcmVudE5vZGVcbiAgICBpZiAocGFyZW50ID09PSBlbGVtZW50KSB7XG4gICAgICByZXR1cm4gbmV3IFBvaW50KDAsIDApO1xuICAgIH0gZWxzZSBpZiAocGFyZW50ID09PSBlbGVtZW50Lm9mZnNldFBhcmVudCkge1xuICAgICAgcmV0dXJuIG5ldyBQb2ludChcbiAgICAgICAgZWxlbWVudC5vZmZzZXRMZWZ0ICsgcGFyZW50LmNsaWVudExlZnQsXG4gICAgICAgIGVsZW1lbnQub2Zmc2V0VG9wICsgcGFyZW50LmNsaWVudFRvcFxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjb25zaWRlck9mZnNldEVsZW1lbnRzID0gW2VsZW1lbnQsIGdldFBhcmVudHNDaGFpbihlbGVtZW50LCBwYXJlbnQpLnBvcCgpXVxuICAgICAgcmV0dXJuIG5ldyBQb2ludChcbiAgICAgICAgY29uc2lkZXJPZmZzZXRFbGVtZW50cy5yZWR1Y2UoKHN1bSwgcCkgPT4gc3VtICsgcC5vZmZzZXRMZWZ0LCAwKSArIHBhcmVudC5jbGllbnRMZWZ0LFxuICAgICAgICBjb25zaWRlck9mZnNldEVsZW1lbnRzLnJlZHVjZSgoc3VtLCBwKSA9PiBzdW0gKyBwLm9mZnNldFRvcCwgMCkgKyBwYXJlbnQuY2xpZW50VG9wXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGVsZW1lbnRCb3VuZGluZ09mZnNldChlbGVtZW50LCBwYXJlbnQpIHtcbiAgICBwYXJlbnQgPSBwYXJlbnQgfHwgZWxlbWVudC5wYXJlbnROb2RlXG4gICAgY29uc3QgZWxlbWVudFJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgY29uc3QgcGFyZW50UmVjdCA9IHBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIHJldHVybiBuZXcgUG9pbnQoXG4gICAgICBlbGVtZW50UmVjdC5sZWZ0IC0gcGFyZW50UmVjdC5sZWZ0LFxuICAgICAgZWxlbWVudFJlY3QudG9wIC0gcGFyZW50UmVjdC50b3BcbiAgICApXG4gIH1cblxuICBzdGF0aWMgZWxlbWVudFNpemUoZWxlbWVudCkge1xuICAgIGNvbnN0IGVsZW1lbnRSZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIHJldHVybiBuZXcgUG9pbnQoXG4gICAgICBlbGVtZW50UmVjdC53aWR0aCxcbiAgICAgIGVsZW1lbnRSZWN0LmhlaWdodFxuICAgIClcbiAgfVxufVxuIiwiaW1wb3J0IFBvaW50IGZyb20gJy4vcG9pbnQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY3RhbmdsZSB7XG4gIGNvbnN0cnVjdG9yKHBvc2l0aW9uLCBzaXplKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgdGhpcy5zaXplID0gc2l6ZVxuICB9XG5cbiAgZ2V0UDEoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25cbiAgfVxuXG4gIGdldFAyKCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHRoaXMucG9zaXRpb24ueSlcbiAgfVxuXG4gIGdldFAzKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLnNpemUpXG4gIH1cblxuICBnZXRQNCgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnkpXG4gIH1cblxuICBnZXRDZW50ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb24uYWRkKHRoaXMuc2l6ZS5tdWx0KDAuNSkpXG4gIH1cblxuICBvcihyZWN0KSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBuZXcgUG9pbnQoTWF0aC5taW4odGhpcy5wb3NpdGlvbi54LCByZWN0LnBvc2l0aW9uLngpLCBNYXRoLm1pbih0aGlzLnBvc2l0aW9uLnksIHJlY3QucG9zaXRpb24ueSkpXG4gICAgY29uc3Qgc2l6ZSA9IChuZXcgUG9pbnQoTWF0aC5tYXgodGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHJlY3QucG9zaXRpb24ueCArIHJlY3Quc2l6ZS54KSwgTWF0aC5tYXgodGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnksIHJlY3QucG9zaXRpb24ueSArIHJlY3Quc2l6ZS55KSkpLnN1Yihwb3NpdGlvbilcbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZShwb3NpdGlvbiwgc2l6ZSlcbiAgfVxuXG4gIGFuZChyZWN0KSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBuZXcgUG9pbnQoTWF0aC5tYXgodGhpcy5wb3NpdGlvbi54LCByZWN0LnBvc2l0aW9uLngpLCBNYXRoLm1heCh0aGlzLnBvc2l0aW9uLnksIHJlY3QucG9zaXRpb24ueSkpXG4gICAgY29uc3Qgc2l6ZSA9IChuZXcgUG9pbnQoTWF0aC5taW4odGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHJlY3QucG9zaXRpb24ueCArIHJlY3Quc2l6ZS54KSwgTWF0aC5taW4odGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnksIHJlY3QucG9zaXRpb24ueSArIHJlY3Quc2l6ZS55KSkpLnN1Yihwb3NpdGlvbilcbiAgICBpZiAoc2l6ZS54IDw9IDAgfHwgc2l6ZS55IDw9IDApIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHBvc2l0aW9uLCBzaXplKVxuICB9XG5cbiAgaW5jbHVkZVBvaW50KHApIHtcbiAgICByZXR1cm4gISh0aGlzLnBvc2l0aW9uLnggPiBwLnggfHwgdGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLnggPCBwLnggfHwgdGhpcy5wb3NpdGlvbi55ID4gcC55IHx8IHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55IDwgcC55KVxuICB9XG5cbiAgaW5jbHVkZVJlY3RhbmdsZShyZWN0YW5nbGUpIHtcbiAgICByZXR1cm4gdGhpcy5pbmNsdWRlUG9pbnQocmVjdGFuZ2xlLnBvc2l0aW9uKSAmJiB0aGlzLmluY2x1ZGVQb2ludChyZWN0YW5nbGUuZ2V0UDMoKSlcbiAgfVxuXG4gIG1vdmVUb0JvdW5kKHJlY3QsIGF4aXMpIHtcbiAgICBsZXQgc2VsQXhpcywgY3Jvc3NSZWN0YW5nbGVcbiAgICBpZiAoYXhpcykge1xuICAgICAgc2VsQXhpcyA9IGF4aXNcbiAgICB9IGVsc2Uge1xuICAgICAgY3Jvc3NSZWN0YW5nbGUgPSB0aGlzLmFuZChyZWN0KVxuICAgICAgaWYgKCFjcm9zc1JlY3RhbmdsZSkge1xuICAgICAgICByZXR1cm4gcmVjdFxuICAgICAgfVxuICAgICAgc2VsQXhpcyA9IGNyb3NzUmVjdGFuZ2xlLnNpemUueCA+IGNyb3NzUmVjdGFuZ2xlLnNpemUueSA/ICd5JyA6ICd4J1xuICAgIH1cbiAgICBjb25zdCB0aGlzQ2VudGVyID0gdGhpcy5nZXRDZW50ZXIoKVxuICAgIGNvbnN0IHJlY3RDZW50ZXIgPSByZWN0LmdldENlbnRlcigpXG4gICAgY29uc3Qgc2lnbiA9IHRoaXNDZW50ZXJbc2VsQXhpc10gPiByZWN0Q2VudGVyW3NlbEF4aXNdID8gLTEgOiAxXG4gICAgY29uc3Qgb2Zmc2V0ID0gc2lnbiA+IDAgPyB0aGlzLnBvc2l0aW9uW3NlbEF4aXNdICsgdGhpcy5zaXplW3NlbEF4aXNdIC0gcmVjdC5wb3NpdGlvbltzZWxBeGlzXSA6IHRoaXMucG9zaXRpb25bc2VsQXhpc10gLSAocmVjdC5wb3NpdGlvbltzZWxBeGlzXSArIHJlY3Quc2l6ZVtzZWxBeGlzXSlcbiAgICByZWN0LnBvc2l0aW9uW3NlbEF4aXNdID0gcmVjdC5wb3NpdGlvbltzZWxBeGlzXSArIG9mZnNldFxuICAgIHJldHVybiByZWN0XG4gIH1cblxuICBnZXRTcXVhcmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZS54ICogdGhpcy5zaXplLnlcbiAgfVxuXG4gIHN0eWxlQXBwbHkoZWwpIHtcbiAgICBlbCA9IGVsIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2luZCcpXG4gICAgZWwuc3R5bGUubGVmdCA9IHRoaXMucG9zaXRpb24ueCArICdweCdcbiAgICBlbC5zdHlsZS50b3AgPSB0aGlzLnBvc2l0aW9uLnkgKyAncHgnXG4gICAgZWwuc3R5bGUud2lkdGggPSB0aGlzLnNpemUueCArICdweCdcbiAgICBlbC5zdHlsZS5oZWlnaHQgPSB0aGlzLnNpemUueSArICdweCdcbiAgfVxuXG4gIGdyb3d0aChzaXplKSB7XG4gICAgdGhpcy5zaXplID0gdGhpcy5zaXplLmFkZChzaXplKVxuICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uLmFkZChzaXplLm11bHQoLTAuNSkpXG4gIH1cblxuICBnZXRNaW5TaWRlKCkge1xuICAgIHJldHVybiBNYXRoLm1pbih0aGlzLnNpemUueCwgdGhpcy5zaXplLnkpXG4gIH1cblxuICBzdGF0aWMgZnJvbUVsZW1lbnQoZWxlbWVudCwgcGFyZW50PWVsZW1lbnQucGFyZW50Tm9kZSwgaXNDb25zaWRlclRyYW5zbGF0ZT1mYWxzZSkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gaXNDb25zaWRlclRyYW5zbGF0ZVxuICAgICAgPyBQb2ludC5lbGVtZW50Qm91bmRpbmdPZmZzZXQoZWxlbWVudCwgcGFyZW50KVxuICAgICAgOiBQb2ludC5lbGVtZW50T2Zmc2V0KGVsZW1lbnQsIHBhcmVudClcbiAgICBjb25zdCBzaXplID0gUG9pbnQuZWxlbWVudFNpemUoZWxlbWVudClcbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZShwb3NpdGlvbiwgc2l6ZSlcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRFbWl0dGVyIGV4dGVuZHMgRXZlbnRUYXJnZXQge1xuICBjb25zdHJ1Y3RvciAob3B0aW9ucyA9IHt9KSB7XG4gICAgc3VwZXIoKVxuXG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5vbikge1xuICAgICAgT2JqZWN0LmVudHJpZXMob3B0aW9ucy5vbikuZm9yRWFjaCgoW2V2ZW50TmFtZSwgZm5dKSA9PiB0aGlzLm9uKGV2ZW50TmFtZSwgZm4pKVxuICAgIH1cbiAgfVxuXG4gIGVtaXQoZXZlbnROYW1lLCBkZXRhaWwsIHsgY2FuY2VsYWJsZSA9IGZhbHNlIH0gPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KGV2ZW50TmFtZSwgeyBkZXRhaWwsIGNhbmNlbGFibGUgfSkpXG4gIH1cblxuICBvbihldmVudE5hbWUsIGZuLCBvcHRpb25zKSB7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZm4sIG9wdGlvbnMpXG4gICAgcmV0dXJuICgpID0+IHRoaXMub2ZmKGV2ZW50TmFtZSwgZm4pXG4gIH1cblxuICBvbmNlKGV2ZW50TmFtZSwgZm4pIHtcbiAgICByZXR1cm4gdGhpcy5vbihldmVudE5hbWUsIGZuLCB7IG9uY2U6IHRydWUgfSlcbiAgfVxuXG4gIG9mZihldmVudE5hbWUsIGZuKSB7XG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZm4pXG4gIH1cblxuICAvLyBEZXByZWNhdGVkIGFsaWFzIGZvciBgb2ZmYFxuICB1bnN1YnNjcmliZShldmVudE5hbWUsIGZuKSB7XG4gICAgdGhpcy5vZmYoZXZlbnROYW1lLCBmbilcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oYXJyYXksIHZhbCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGFycmF5W2ldID09PSB2YWwpIHtcbiAgICAgIGFycmF5LnNwbGljZShpLCAxKVxuICAgICAgaS0tXG4gICAgfVxuICB9XG4gIHJldHVybiBhcnJheVxufVxuIiwiaW1wb3J0IHJlbW92ZUl0ZW0gZnJvbSAnLi91dGlscy9yZW1vdmUtYXJyYXktaXRlbSdcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudEVtaXR0ZXInXG5cbmNvbnN0IHNjb3BlcyA9IFtdXG5jb25zdCBzY29wZVN0YWNrID0gW11cblxuY2xhc3MgU2NvcGUgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvcihkcmFnZ2FibGVzLCB0YXJnZXRzLCBvcHRpb25zPXt9KSB7XG4gICAgc3VwZXIob3B0aW9ucylcbiAgICBzY29wZXMuZm9yRWFjaCgoc2NvcGUpID0+IHtcbiAgICAgIGlmIChkcmFnZ2FibGVzKSB7XG4gICAgICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBzY29wZS5yZWxlYXNlRHJhZ2dhYmxlKGRyYWdnYWJsZSkpXG4gICAgICB9XG5cbiAgICAgIGlmICh0YXJnZXRzKSB7XG4gICAgICAgIHRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB7XG4gICAgICAgICAgcmVtb3ZlSXRlbShzY29wZS50YXJnZXRzLCB0YXJnZXQpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZXMgfHwgW11cbiAgICB0aGlzLnRhcmdldHMgPSB0YXJnZXRzIHx8IFtdXG4gICAgdGhpcy5kcmFnRW5kQWN0aW9uUmVsZWFzZXMgPSBuZXcgTWFwKClcbiAgICBzY29wZXMucHVzaCh0aGlzKVxuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgIHRpbWVFbmQ6IChvcHRpb25zLnRpbWVFbmQpIHx8IDQwMFxuICAgIH1cblxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHRoaXMuaW5pdERyYWdnYWJsZShkcmFnZ2FibGUpKVxuICB9XG5cbiAgYWRkRHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5wdXNoKGRyYWdnYWJsZSlcbiAgICB0aGlzLmluaXREcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICB9XG5cbiAgaW5pdERyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICB0aGlzLmRyYWdFbmRBY3Rpb25SZWxlYXNlcy5zZXQoZHJhZ2dhYmxlLCBkcmFnZ2FibGUub3ZlcnJpZGVEcmFnRW5kQWN0aW9uKCgpID0+IHRoaXMub25FbmQoZHJhZ2dhYmxlKSkpXG4gIH1cblxuICByZWxlYXNlRHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IHJlbGVhc2UgPSB0aGlzLmRyYWdFbmRBY3Rpb25SZWxlYXNlcy5nZXQoZHJhZ2dhYmxlKVxuICAgIGlmIChyZWxlYXNlKSB7XG4gICAgICByZWxlYXNlKClcbiAgICAgIHRoaXMuZHJhZ0VuZEFjdGlvblJlbGVhc2VzLmRlbGV0ZShkcmFnZ2FibGUpXG4gICAgfVxuICAgIHJlbW92ZUl0ZW0odGhpcy5kcmFnZ2FibGVzLCBkcmFnZ2FibGUpXG4gIH1cblxuICBhZGRUYXJnZXQodGFyZ2V0KSB7XG4gICAgdGhpcy50YXJnZXRzLnB1c2godGFyZ2V0KVxuICB9XG5cbiAgb25FbmQoZHJhZ2dhYmxlKSB7XG4gICAgY29uc3Qgc2hvdFRhcmdldHMgPSB0aGlzLnRhcmdldHMuZmlsdGVyKCh0YXJnZXQpID0+IHtcbiAgICAgIHJldHVybiB0YXJnZXQuZHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkgIT09IC0xXG4gICAgfSkuZmlsdGVyKCh0YXJnZXQpID0+IHtcbiAgICAgIHJldHVybiB0YXJnZXQuY2F0Y2hEcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICAgIH0pLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIHJldHVybiBhLmdldFJlY3RhbmdsZSgpLmdldFNxdWFyZSgpIC0gYi5nZXRSZWN0YW5nbGUoKS5nZXRTcXVhcmUoKVxuICAgIH0pXG5cbiAgICBpZiAoc2hvdFRhcmdldHMubGVuZ3RoKSB7XG4gICAgICBzaG90VGFyZ2V0c1swXS5vbkVuZChkcmFnZ2FibGUpXG4gICAgfSBlbHNlIGlmIChkcmFnZ2FibGUudGFyZ2V0cy5sZW5ndGgpIHtcbiAgICAgIGRyYWdnYWJsZS5waW5Qb3NpdGlvbihkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uLCB0aGlzLm9wdGlvbnMudGltZUVuZClcbiAgICB9XG5cbiAgICB0aGlzLmVtaXQoJ3Njb3BlOmNoYW5nZScsIHsgc2NvcGU6IHRoaXMsIGRyYWdnYWJsZSB9KVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy50YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4gdGFyZ2V0LnJlc2V0KCkpXG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5yZWZyZXNoKCkpXG4gICAgdGhpcy50YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4gdGFyZ2V0LnJlZnJlc2goKSlcbiAgfVxuXG4gIGdldCBwb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0cy5tYXAoKHRhcmdldCkgPT4ge1xuICAgICAgcmV0dXJuIHRhcmdldC5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHRoaXMuZHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkpXG4gICAgfSlcbiAgfVxuXG4gIHNldCBwb3NpdGlvbnMocG9zaXRpb25zKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9ICd3cm9uZyBhcnJheSBsZW5ndGgnXG4gICAgaWYgKHBvc2l0aW9ucy5sZW5ndGggPT09IHRoaXMudGFyZ2V0cy5sZW5ndGgpIHtcbiAgICAgIHRoaXMudGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHRhcmdldC5yZXNldCgpKVxuXG4gICAgICBwb3NpdGlvbnMuZm9yRWFjaCgodGFyZ2V0SW5kZXhlcywgaSkgPT4ge1xuICAgICAgICB0YXJnZXRJbmRleGVzLmZvckVhY2goKGluZGV4KSA9PiB7XG4gICAgICAgICAgdGhpcy50YXJnZXRzW2ldLmFkZCh0aGlzLmRyYWdnYWJsZXNbaW5kZXhdKVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbWVzc2FnZVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBkZWZhdWx0U2NvcGUgPSBuZXcgU2NvcGUoKVxuXG5mdW5jdGlvbiBjdXJyZW50U2NvcGUoKSB7XG4gIHJldHVybiBzY29wZVN0YWNrW3Njb3BlU3RhY2subGVuZ3RoIC0gMV0gfHwgZGVmYXVsdFNjb3BlXG59XG5cbmZ1bmN0aW9uIHNjb3BlKGZuKSB7XG4gIGNvbnN0IGN1cnJlbnRTY29wZSA9IG5ldyBTY29wZSgpXG5cbiAgc2NvcGVTdGFjay5wdXNoKGN1cnJlbnRTY29wZSlcbiAgdHJ5IHtcbiAgICBmbi5jYWxsKClcbiAgfSBmaW5hbGx5IHtcbiAgICBzY29wZVN0YWNrLnBvcCgpXG4gIH1cbiAgcmV0dXJuIGN1cnJlbnRTY29wZVxufVxuXG5leHBvcnQgeyBzY29wZXMsIGRlZmF1bHRTY29wZSwgY3VycmVudFNjb3BlLCBTY29wZSwgc2NvcGUgfVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGhyb3R0bGUoZnVuYywgd2FpdCkge1xuICBsZXQgbGFzdFRpbWUgPSAwXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGV4ZWN1dGVkRnVuY3Rpb24oKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXNcbiAgICBjb25zdCBhcmdzID0gYXJndW1lbnRzXG5cbiAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpXG4gICAgaWYgKG5vdyAtIGxhc3RUaW1lID49IHdhaXQpIHtcbiAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncylcbiAgICAgIGxhc3RUaW1lID0gbm93XG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwYXRjaERvbUV2ZW50KGVsZW1lbnQsIGV2ZW50TmFtZSwgZGV0YWlsLCB7IGNhbmNlbGFibGUgPSBmYWxzZSB9ID0ge30pIHtcbiAgcmV0dXJuIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoZXZlbnROYW1lLCB7IGJ1YmJsZXM6IHRydWUsIGNhbmNlbGFibGUsIGRldGFpbCB9KSlcbn1cbiIsImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudEVtaXR0ZXInXG5pbXBvcnQgUG9pbnQgZnJvbSAnLi9nZW9tZXRyeS9wb2ludCdcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSAnLi9nZW9tZXRyeS9yZWN0YW5nbGUnXG5pbXBvcnQgeyBzY29wZXMsIGN1cnJlbnRTY29wZSB9IGZyb20gJy4vc2NvcGUnXG5pbXBvcnQgdGhyb3R0bGUgZnJvbSAnLi91dGlscy90aHJvdHRsZSdcbmltcG9ydCBnZXRQYXJlbnRzQ2hhaW4gZnJvbSAnLi91dGlscy9nZXQtcGFyZW50cy1jaGFpbidcbmltcG9ydCByZW1vdmVJdGVtIGZyb20gJy4vdXRpbHMvcmVtb3ZlLWFycmF5LWl0ZW0nXG5pbXBvcnQgZGlzcGF0Y2hEb21FdmVudCBmcm9tICcuL3V0aWxzL2Rpc3BhdGNoLWRvbS1ldmVudCdcblxuY29uc3QgdGhyb3R0bGVkRHJhZ092ZXIgPSAoY2FsbGJhY2ssIGR1cmF0aW9uKSA9PiB7XG4gIGNvbnN0IHRocm90dGxlZENhbGxiYWNrID0gdGhyb3R0bGUoKGV2ZW50KSA9PiBjYWxsYmFjayhldmVudCksIGR1cmF0aW9uKVxuICByZXR1cm4gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIHRocm90dGxlZENhbGxiYWNrKGV2ZW50KVxuICB9XG59XG5cbmNvbnN0IHBhc3NpdmVGYWxzZSA9IHsgcGFzc2l2ZTogZmFsc2UgfVxuXG5jb25zdCBpc1RvdWNoID0gbmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzID4gMFxuY29uc3QgbW91c2VFdmVudHMgPSB7XG4gIHN0YXJ0OiAnbW91c2Vkb3duJyxcbiAgbW92ZTogJ21vdXNlbW92ZScsXG4gIGVuZDogJ21vdXNldXAnXG59XG5jb25zdCB0b3VjaEV2ZW50cyA9IHtcbiAgc3RhcnQ6ICd0b3VjaHN0YXJ0JyxcbiAgbW92ZTogJ3RvdWNobW92ZScsXG4gIGVuZDogJ3RvdWNoZW5kJ1xufVxuY29uc3QgZHJhZ2dhYmxlcyA9IFtdXG5jb25zdCB0cmFuc2Zvcm1Qcm9wZXJ0eSA9ICd0cmFuc2Zvcm0nXG5jb25zdCB0cmFuc2l0aW9uUHJvcGVydHkgPSAndHJhbnNpdGlvbidcblxuZnVuY3Rpb24gZ2V0VG91Y2hCeUlEKGVsZW1lbnQsIHRvdWNoSWQpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50LmNoYW5nZWRUb3VjaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGVsZW1lbnQuY2hhbmdlZFRvdWNoZXNbaV0uaWRlbnRpZmllciA9PT0gdG91Y2hJZCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQuY2hhbmdlZFRvdWNoZXNbaV1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmZ1bmN0aW9uIHByZXZlbnREb3VibGVJbml0KGRyYWdnYWJsZSkge1xuICBjb25zdCBtZXNzYWdlID0gXCJmb3IgdGhpcyBlbGVtZW50IERyYWdlZS5EcmFnZ2FibGUgaXMgYWxyZWFkeSBleGlzdCwgZG9uJ3QgY3JlYXRlIGl0IHR3aWNlIFwiXG4gIGlmIChkcmFnZ2FibGVzLnNvbWUoKGV4aXN0aW5nKSA9PiBkcmFnZ2FibGUuZWxlbWVudCA9PT0gZXhpc3RpbmcuZWxlbWVudCkpIHtcbiAgICB0aHJvdyBtZXNzYWdlXG4gIH1cbiAgZHJhZ2dhYmxlcy5wdXNoKGRyYWdnYWJsZSlcbn1cblxuZnVuY3Rpb24gY29weVN0eWxlcyhzb3VyY2UsIGRlc3RpbmF0aW9uKSB7XG4gIGNvbnN0IGNzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoc291cmNlKVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY3MubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBrZXkgPSBjc1tpXVxuICAgIGlmICgoa2V5LmluZGV4T2YoJ3RyYW5zaXRpb24nKSA8IDApICYmIChrZXkuaW5kZXhPZigndHJhbnNmb3JtJykgPCAwKSkge1xuICAgICAgZGVzdGluYXRpb24uc3R5bGVba2V5XSA9IGNzW2tleV1cbiAgICB9XG4gIH1cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNvdXJjZS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgIGNvcHlTdHlsZXMoc291cmNlLmNoaWxkcmVuW2ldLCBkZXN0aW5hdGlvbi5jaGlsZHJlbltpXSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcmFnZ2FibGUgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBvcHRpb25zPXt9KSB7XG4gICAgc3VwZXIob3B0aW9ucylcbiAgICB0aGlzLnRhcmdldHMgPSBbXVxuICAgIHRoaXMuX2RyYWdFbmRBY3Rpb25zID0gW11cbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIHByZXZlbnREb3VibGVJbml0KHRoaXMpXG4gICAgY3VycmVudFNjb3BlKCkuYWRkRHJhZ2dhYmxlKHRoaXMpXG4gICAgdGhpcy5fZW5hYmxlID0gdHJ1ZVxuICAgIHRoaXMuc3RhcnRCb3VuZGluZygpXG4gICAgdGhpcy5zdGFydFBvc2l0aW9uaW5nKClcbiAgICB0aGlzLnN0YXJ0TGlzdGVuaW5nKClcbiAgfVxuXG4gIHN0YXJ0Qm91bmRpbmcoKSB7XG4gICAgdGhpcy5ib3VuZGluZyA9IHRoaXMub3B0aW9ucy5ib3VuZGluZyB8fCB7XG4gICAgICBib3VuZDogdGhpcy5vcHRpb25zLmJvdW5kIHx8ICgocG9pbnQpID0+IHBvaW50KVxuICAgIH1cbiAgfVxuXG4gIHN0YXJ0UG9zaXRpb25pbmcoKSB7XG4gICAgdGhpcy5fc2V0RGVmYXVsdFRyYW5zaXRpb24oKVxuICAgIHRoaXMub2Zmc2V0ID0gdGhpcy5pc0NvbnNpZGVyVHJhbnNmb3JtT2Zmc2V0XG4gICAgICA/IFBvaW50LmVsZW1lbnRCb3VuZGluZ09mZnNldCh0aGlzLmVsZW1lbnQsIHRoaXMuY29udGFpbmVyKVxuICAgICAgOiBQb2ludC5lbGVtZW50T2Zmc2V0KHRoaXMuZWxlbWVudCwgdGhpcy5jb250YWluZXIpXG4gICAgdGhpcy5waW5uZWRQb3NpdGlvbiA9IHRoaXMub2Zmc2V0XG4gICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMub2Zmc2V0XG4gICAgdGhpcy5pbml0aWFsUG9zaXRpb24gPSB0aGlzLm9wdGlvbnMucG9zaXRpb24gfHwgdGhpcy5vZmZzZXRcblxuICAgIHRoaXMucGluUG9zaXRpb24odGhpcy5pbml0aWFsUG9zaXRpb24pXG5cbiAgICBpZiAodGhpcy5ib3VuZGluZy5yZWZyZXNoKSB7XG4gICAgICB0aGlzLmJvdW5kaW5nLnJlZnJlc2goKVxuICAgIH1cbiAgfVxuXG4gIHN0YXJ0TGlzdGVuaW5nKCkge1xuICAgIHRoaXMuX2RyYWdTdGFydCA9IChldmVudCkgPT4gdGhpcy5kcmFnU3RhcnQoZXZlbnQpXG4gICAgdGhpcy5fZHJhZ01vdmUgPSAoZXZlbnQpID0+IHRoaXMuZHJhZ01vdmUoZXZlbnQpXG4gICAgdGhpcy5fZHJhZ0VuZCA9IChldmVudCkgPT4gdGhpcy5kcmFnRW5kKGV2ZW50KVxuICAgIHRoaXMuX25hdGl2ZURyYWdTdGFydCA9IChldmVudCkgPT4gdGhpcy5uYXRpdmVEcmFnU3RhcnQoZXZlbnQpXG4gICAgdGhpcy5fbmF0aXZlRHJhZ092ZXIgPSB0aHJvdHRsZWREcmFnT3ZlcigoZXZlbnQpID0+IHRoaXMubmF0aXZlRHJhZ092ZXIoZXZlbnQpLCB0aGlzLmRyYWdPdmVyVGhyb3R0bGVEdXJhdGlvbilcbiAgICB0aGlzLl9uYXRpdmVEcmFnRW5kID0gKGV2ZW50KSA9PiB0aGlzLm5hdGl2ZURyYWdFbmQoZXZlbnQpXG4gICAgdGhpcy5fbmF0aXZlRHJvcCA9IChldmVudCkgPT4gdGhpcy5uYXRpdmVEcm9wKGV2ZW50KVxuICAgIHRoaXMuX3Njcm9sbCA9IChldmVudCkgPT4gdGhpcy5vblNjcm9sbChldmVudClcblxuICAgIHRoaXMuaGFuZGxlci5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQsIHBhc3NpdmVGYWxzZSlcbiAgICB0aGlzLmhhbmRsZXIuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0LCBwYXNzaXZlRmFsc2UpXG4gIH1cblxuICBnZXRTaXplKCkge1xuICAgIHJldHVybiBQb2ludC5lbGVtZW50U2l6ZSh0aGlzLmVsZW1lbnQpXG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5vZmZzZXQuYWRkKHRoaXMuX3RyYW5zZm9ybVBvc2l0aW9uIHx8IG5ldyBQb2ludCgwLCAwKSlcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvblxuICB9XG5cbiAgZ2V0Q2VudGVyKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLmdldFNpemUoKS5tdWx0KDAuNSkpXG4gIH1cblxuICBfc2V0RGVmYXVsdFRyYW5zaXRpb24gKCkge1xuICAgIGlmICghdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV0pIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5lbGVtZW50KVt0cmFuc2l0aW9uUHJvcGVydHldXG4gICAgfVxuICB9XG5cbiAgX3NldFRyYW5zaXRpb24odGltZSkge1xuICAgIGxldCB0cmFuc2l0aW9uID0gdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV1cbiAgICBjb25zdCB0cmFuc2l0aW9uQ3NzID0gYHRyYW5zZm9ybSAke3RpbWV9bXNgXG5cbiAgICBpZiAoIS90cmFuc2Zvcm1cXHM/XFxkKm0/cz8vLnRlc3QodHJhbnNpdGlvbikpIHtcbiAgICAgIGlmICh0cmFuc2l0aW9uKSB7XG4gICAgICAgIHRyYW5zaXRpb24gKz0gYCwgJHt0cmFuc2l0aW9uQ3NzfWBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyYW5zaXRpb24gPSB0cmFuc2l0aW9uQ3NzXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyYW5zaXRpb24gPSB0cmFuc2l0aW9uLnJlcGxhY2UoL3RyYW5zZm9ybVxccz9cXGQqbT9zPy9nLCB0cmFuc2l0aW9uQ3NzKVxuICAgIH1cblxuICAgIGlmICh0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNpdGlvblByb3BlcnR5XSAhPT0gdHJhbnNpdGlvbikge1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV0gPSB0cmFuc2l0aW9uXG4gICAgfVxuICB9XG5cbiAgX3NldFRyYW5zbGF0ZShwb2ludCkge1xuICAgIHRoaXMuX3RyYW5zZm9ybVBvc2l0aW9uID0gcG9pbnRcbiAgICBjb25zdCB0cmFuc2xhdGVDc3MgPSBgdHJhbnNsYXRlM2QoJHtwb2ludC54fXB4LCAke3BvaW50Lnl9cHgsIDBweClgXG5cbiAgICBsZXQgdHJhbnNmb3JtID0gdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BlcnR5XVxuXG4gICAgaWYgKHRoaXMuc2hvdWxkUmVtb3ZlWmVyb1RyYW5zbGF0ZSAmJiBwb2ludC54ID09PSAwICYmIHBvaW50LnkgPT09IDApIHtcbiAgICAgIHRyYW5zZm9ybSA9IHRyYW5zZm9ybS5yZXBsYWNlKC90cmFuc2xhdGUzZFxcKFteKV0rXFwpLywgJycpXG4gICAgfSBlbHNlIGlmICghL3RyYW5zbGF0ZTNkXFwoW14pXStcXCkvLnRlc3QodHJhbnNmb3JtKSkge1xuICAgICAgaWYgKHRyYW5zZm9ybSkge1xuICAgICAgICB0cmFuc2Zvcm0gKz0gJyAnXG4gICAgICB9XG4gICAgICB0cmFuc2Zvcm0gKz0gdHJhbnNsYXRlQ3NzXG4gICAgfSBlbHNlIHtcbiAgICAgIHRyYW5zZm9ybSA9IHRyYW5zZm9ybS5yZXBsYWNlKC90cmFuc2xhdGUzZFxcKFteKV0rXFwpLywgdHJhbnNsYXRlQ3NzKVxuICAgIH1cblxuICAgIGlmICh0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcGVydHldICE9PSB0cmFuc2Zvcm0pIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wZXJ0eV0gPSB0cmFuc2Zvcm1cbiAgICB9XG4gIH1cblxuICBtb3ZlKHBvaW50LCB0aW1lPTAsIGlzU2lsZW50PWZhbHNlKSB7XG4gICAgcG9pbnQgPSBwb2ludC5jbG9uZSgpXG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvaW50XG5cbiAgICB0aGlzLl9zZXRUcmFuc2l0aW9uKHRpbWUpXG4gICAgdGhpcy5fc2V0VHJhbnNsYXRlKHBvaW50LnN1Yih0aGlzLm9mZnNldCkpXG5cbiAgICBpZiAoIWlzU2lsZW50KSB7XG4gICAgICB0aGlzLmVtaXREcmFnRXZlbnQoJ21vdmUnKVxuICAgIH1cbiAgfVxuXG4gIHBpblBvc2l0aW9uKHBvaW50LCB0aW1lPTAsIHNpbGVudD10cnVlKSB7XG4gICAgdGhpcy5waW5uZWRQb3NpdGlvbiA9IHBvaW50LmNsb25lKClcbiAgICB0aGlzLm1vdmUodGhpcy5waW5uZWRQb3NpdGlvbiwgdGltZSwgc2lsZW50KVxuICB9XG5cbiAgcmVzZXRQb3NpdGlvblRvSW5pdGlhbCAoKSB7XG4gICAgdGhpcy5waW5Qb3NpdGlvbih0aGlzLmluaXRpYWxQb3NpdGlvbilcbiAgfVxuXG4gIHJlZnJlc2hQb3NpdGlvbiAoKSB7XG4gICAgdGhpcy5zZXRQb3NpdGlvbih0aGlzLmdldFBvc2l0aW9uKCkpXG4gIH1cblxuICBzZXRQb3NpdGlvbihwb2ludCkge1xuICAgIHBvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIHRoaXMucG9zaXRpb24gPSBwb2ludFxuICAgIHRoaXMuX3NldFRyYW5zaXRpb24oMClcbiAgICB0aGlzLl9zZXRUcmFuc2xhdGUocG9pbnQuc3ViKHRoaXMub2Zmc2V0KSlcbiAgfVxuXG4gIGRldGVybWluZURpcmVjdGlvbihwb2ludCkge1xuICAgIHRoaXMuX3ByZXZpb3VzRGlyZWN0aW9uUG9zaXRpb24gfHw9IHRoaXMuX3N0YXJ0UG9zaXRpb25cblxuICAgIHRoaXMubGVmdERpcmVjdGlvbiA9ICh0aGlzLl9wcmV2aW91c0RpcmVjdGlvblBvc2l0aW9uLnggPiBwb2ludC54KVxuICAgIHRoaXMucmlnaHREaXJlY3Rpb24gPSAodGhpcy5fcHJldmlvdXNEaXJlY3Rpb25Qb3NpdGlvbi54IDwgcG9pbnQueClcbiAgICB0aGlzLnVwRGlyZWN0aW9uID0gKHRoaXMuX3ByZXZpb3VzRGlyZWN0aW9uUG9zaXRpb24ueSA+IHBvaW50LnkpXG4gICAgdGhpcy5kb3duRGlyZWN0aW9uID0gKHRoaXMuX3ByZXZpb3VzRGlyZWN0aW9uUG9zaXRpb24ueSA8IHBvaW50LnkpXG5cbiAgICB0aGlzLl9wcmV2aW91c0RpcmVjdGlvblBvc2l0aW9uID0gcG9pbnRcbiAgfVxuXG4gIHNlZW1zU2Nyb2xsaW5nKCkge1xuICAgIHJldHVybiAoK25ldyBEYXRlKCkgLSB0aGlzLl9zdGFydFRvdWNoVGltZXN0YW1wKSA8IHRoaXMudG91Y2hEcmFnZ2luZ1RocmVzaG9sZFxuICB9XG5cbiAgc2hvdWxkVXNlTmF0aXZlRHJhZ0FuZERyb3AoKSB7XG4gICAgaWYgKHRoaXMuaXNUb3VjaEV2ZW50KSB7XG4gICAgICByZXR1cm4gdGhpcy5uYXRpdmVEcmFnQW5kRHJvcCAmJiB0aGlzLmVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcE9uVG91Y2hcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMubmF0aXZlRHJhZ0FuZERyb3BcbiAgICB9XG4gIH1cblxuICBkcmFnU3RhcnQoZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuX2VuYWJsZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3RvcFByb3BhZ2F0aW9uT25EcmFnU3RhcnQpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgfVxuXG4gICAgdGhpcy5pc1RvdWNoRXZlbnQgPSAoaXNUb3VjaCAmJiAoZXZlbnQgaW5zdGFuY2VvZiB3aW5kb3cuVG91Y2hFdmVudCkpXG5cbiAgICB0aGlzLnRvdWNoUG9pbnQgPSB0aGlzLl9zdGFydFRvdWNoUG9pbnQgPSBuZXcgUG9pbnQoXG4gICAgICB0aGlzLmlzVG91Y2hFdmVudCA/IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYIDogZXZlbnQuY2xpZW50WCxcbiAgICAgIHRoaXMuaXNUb3VjaEV2ZW50ID8gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVkgOiBldmVudC5jbGllbnRZXG4gICAgKVxuXG4gICAgdGhpcy5fc3RhcnRQb3NpdGlvbiA9IHRoaXMuZ2V0UG9zaXRpb24oKVxuICAgIGlmICh0aGlzLmlzVG91Y2hFdmVudCkge1xuICAgICAgdGhpcy5fdG91Y2hJZCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmlkZW50aWZpZXJcbiAgICAgIHRoaXMuX3N0YXJ0VG91Y2hUaW1lc3RhbXAgPSArbmV3IERhdGUoKVxuICAgIH1cblxuICAgIHRoaXMuX3N0YXJ0V2luZG93U2Nyb2xsUG9pbnQgPSB0aGlzLndpbmRvd1Njcm9sbFBvaW50XG4gICAgdGhpcy5fc3RhcnRTY3JvbGxFbGVtZW50c09mZnNldCA9IHRoaXMuc2Nyb2xsRWxlbWVudHNPZmZzZXRcblxuICAgIGlmIChldmVudC50YXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElucHV0RWxlbWVudCB8fFxuICAgICAgICAgIGV2ZW50LnRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSW5wdXRFbGVtZW50KSB7XG4gICAgICBldmVudC50YXJnZXQuZm9jdXMoKVxuICAgIH1cblxuICAgIGlmICh0aGlzLnNob3VsZFVzZU5hdGl2ZURyYWdBbmREcm9wKCkpIHtcbiAgICAgIGlmICh0aGlzLmlzVG91Y2hFdmVudCAmJiB0aGlzLmVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcE9uVG91Y2gpIHtcbiAgICAgICAgdGhpcy5fc3RhcnRQYXJlbnRzU2Nyb2xsT2Zmc2V0ID0gdGhpcy5wYXJlbnRzU2Nyb2xsT2Zmc2V0XG5cbiAgICAgICAgY29uc3QgZW11bGF0ZU9uRmlyc3RNb3ZlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuc2VlbXNTY3JvbGxpbmcoKSkge1xuICAgICAgICAgICAgdGhpcy5jYW5jZWxEcmFnZ2luZygpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wKGV2ZW50KVxuICAgICAgICAgIH1cbiAgICAgICAgICBjYW5jZWxFbXVsYXRpb24oKVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNhbmNlbEVtdWxhdGlvbiA9ICgpID0+IHtcbiAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIGVtdWxhdGVPbkZpcnN0TW92ZSlcbiAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgY2FuY2VsRW11bGF0aW9uKVxuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCBlbXVsYXRlT25GaXJzdE1vdmUsIHBhc3NpdmVGYWxzZSlcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIGNhbmNlbEVtdWxhdGlvbiwgcGFzc2l2ZUZhbHNlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIHRoaXMuX25hdGl2ZURyYWdTdGFydClcbiAgICAgICAgdGhpcy5lbGVtZW50LmRyYWdnYWJsZSA9IHRydWVcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX25hdGl2ZURyYWdFbmQsIHBhc3NpdmVGYWxzZSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSwgcGFzc2l2ZUZhbHNlKVxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSwgcGFzc2l2ZUZhbHNlKVxuXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZCwgcGFzc2l2ZUZhbHNlKVxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQsIHBhc3NpdmVGYWxzZSlcbiAgICB9XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fc2Nyb2xsKVxuICAgIHRoaXMuc2Nyb2xsRWxlbWVudHMuZm9yRWFjaCgocCkgPT4gcC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9zY3JvbGwpKVxuXG4gICAgaWYgKCF0aGlzLnNob3VsZFVzZU5hdGl2ZURyYWdBbmREcm9wKCkgJiYgdGhpcy5kcmFnU3RhcnRUaHJlc2hvbGQgPiAwKSB7XG4gICAgICB0aGlzLl9kcmFnU3RhcnRQZW5kaW5nID0gdHJ1ZVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVtaXREcmFnRXZlbnQoJ3N0YXJ0JylcbiAgICB9XG4gIH1cblxuICBkcmFnTW92ZShldmVudCkge1xuICAgIGxldCB0b3VjaFxuXG4gICAgdGhpcy5pc1RvdWNoRXZlbnQgPSAoaXNUb3VjaCAmJiAoZXZlbnQgaW5zdGFuY2VvZiB3aW5kb3cuVG91Y2hFdmVudCkpXG4gICAgaWYgKHRoaXMuaXNUb3VjaEV2ZW50KSB7XG4gICAgICB0b3VjaCA9IGdldFRvdWNoQnlJRChldmVudCwgdGhpcy5fdG91Y2hJZClcblxuICAgICAgaWYgKCF0b3VjaCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuc2VlbXNTY3JvbGxpbmcoKSkge1xuICAgICAgICB0aGlzLmNhbmNlbERyYWdnaW5nKClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy50b3VjaFBvaW50ID0gbmV3IFBvaW50KFxuICAgICAgdGhpcy5pc1RvdWNoRXZlbnQgPyB0b3VjaC5wYWdlWCA6IGV2ZW50LmNsaWVudFgsXG4gICAgICB0aGlzLmlzVG91Y2hFdmVudCA/IHRvdWNoLnBhZ2VZIDogZXZlbnQuY2xpZW50WVxuICAgIClcblxuICAgIGlmICh0aGlzLl9kcmFnU3RhcnRQZW5kaW5nKSB7XG4gICAgICBjb25zdCBkeCA9IHRoaXMudG91Y2hQb2ludC54IC0gdGhpcy5fc3RhcnRUb3VjaFBvaW50LnhcbiAgICAgIGNvbnN0IGR5ID0gdGhpcy50b3VjaFBvaW50LnkgLSB0aGlzLl9zdGFydFRvdWNoUG9pbnQueVxuICAgICAgaWYgKE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSkgPCB0aGlzLmRyYWdTdGFydFRocmVzaG9sZCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHRoaXMuX2RyYWdTdGFydFBlbmRpbmcgPSBmYWxzZVxuICAgICAgdGhpcy5lbWl0RHJhZ0V2ZW50KCdzdGFydCcpXG4gICAgfVxuXG4gICAgdGhpcy5pc0RyYWdnaW5nID0gdHJ1ZVxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gICAgbGV0IHBvaW50ID0gdGhpcy5fc3RhcnRQb3NpdGlvbi5hZGQodGhpcy50b3VjaFBvaW50LnN1Yih0aGlzLl9zdGFydFRvdWNoUG9pbnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMud2luZG93U2Nyb2xsUG9pbnQuc3ViKHRoaXMuX3N0YXJ0V2luZG93U2Nyb2xsUG9pbnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMuc2Nyb2xsRWxlbWVudHNPZmZzZXQuc3ViKHRoaXMuX3N0YXJ0U2Nyb2xsRWxlbWVudHNPZmZzZXQpKVxuXG4gICAgcG9pbnQgPSB0aGlzLmJvdW5kaW5nLmJvdW5kKHBvaW50LCB0aGlzLmdldFNpemUoKSlcbiAgICB0aGlzLmRldGVybWluZURpcmVjdGlvbihwb2ludClcbiAgICB0aGlzLm1vdmUocG9pbnQpXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RyYWdlZS1hY3RpdmUnKVxuICB9XG5cbiAgZHJhZ0VuZChldmVudCkge1xuICAgIHRoaXMuaXNUb3VjaEV2ZW50ID0gKGlzVG91Y2ggJiYgKGV2ZW50IGluc3RhbmNlb2Ygd2luZG93LlRvdWNoRXZlbnQpKVxuXG4gICAgaWYgKHRoaXMuaXNUb3VjaEV2ZW50ICYmICFnZXRUb3VjaEJ5SUQoZXZlbnQsIHRoaXMuX3RvdWNoSWQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5fZHJhZ1N0YXJ0UGVuZGluZykge1xuICAgICAgLy8gdGhyZXNob2xkIG5ldmVyIGNyb3NzZWQg4oCUIHRyZWF0IGFzIGNsaWNrLCBjbGVhbiB1cCBzaWxlbnRseVxuICAgICAgdGhpcy5fZHJhZ1N0YXJ0UGVuZGluZyA9IGZhbHNlXG4gICAgICB0aGlzLmNhbmNlbERyYWdnaW5nKClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLmlzRHJhZ2dpbmcpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfVxuXG4gICAgdGhpcy5kcmFnRW5kQWN0aW9uKClcbiAgICB0aGlzLmVtaXREcmFnRXZlbnQoJ2VuZCcpXG4gICAgdGhpcy5jYW5jZWxEcmFnZ2luZygpXG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZWUtYWN0aXZlJykpXG4gIH1cblxuICBvblNjcm9sbChfZXZlbnQpIHtcbiAgICBsZXQgcG9pbnQgPSB0aGlzLl9zdGFydFBvc2l0aW9uLmFkZCh0aGlzLnRvdWNoUG9pbnQuc3ViKHRoaXMuX3N0YXJ0VG91Y2hQb2ludCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy53aW5kb3dTY3JvbGxQb2ludC5zdWIodGhpcy5fc3RhcnRXaW5kb3dTY3JvbGxQb2ludCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy5zY3JvbGxFbGVtZW50c09mZnNldC5zdWIodGhpcy5fc3RhcnRTY3JvbGxFbGVtZW50c09mZnNldCkpXG5cbiAgICBwb2ludCA9IHRoaXMuYm91bmRpbmcuYm91bmQocG9pbnQsIHRoaXMuZ2V0U2l6ZSgpKVxuICAgIGlmICghdGhpcy5uYXRpdmVEcmFnQW5kRHJvcCkge1xuICAgICAgdGhpcy5kZXRlcm1pbmVEaXJlY3Rpb24ocG9pbnQpXG4gICAgICB0aGlzLm1vdmUocG9pbnQpXG4gICAgfVxuICB9XG5cbiAgbmF0aXZlRHJhZ1N0YXJ0KGV2ZW50KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dCcsICdGaXJlRm94IGZpeCcpXG4gICAgZXZlbnQuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSAnbW92ZSdcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIHRoaXMuX25hdGl2ZURyYWdPdmVyKVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzLl9uYXRpdmVEcm9wKVxuICB9XG5cbiAgbmF0aXZlRHJhZ092ZXIoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZXZlbnQuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnbW92ZSdcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZHJhZ2VlLXBsYWNlaG9sZGVyJylcbiAgICBpZiAoZXZlbnQuY2xpZW50WCA9PT0gMCAmJiBldmVudC5jbGllbnRZID09PSAwKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLnRvdWNoUG9pbnQgPSBuZXcgUG9pbnQoZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSlcbiAgICBsZXQgcG9pbnQgPSB0aGlzLl9zdGFydFBvc2l0aW9uLmFkZCh0aGlzLnRvdWNoUG9pbnQuc3ViKHRoaXMuX3N0YXJ0VG91Y2hQb2ludCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy53aW5kb3dTY3JvbGxQb2ludC5zdWIodGhpcy5fc3RhcnRXaW5kb3dTY3JvbGxQb2ludCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy5zY3JvbGxFbGVtZW50c09mZnNldC5zdWIodGhpcy5fc3RhcnRTY3JvbGxFbGVtZW50c09mZnNldCkpXG4gICAgcG9pbnQgPSB0aGlzLmJvdW5kaW5nLmJvdW5kKHBvaW50LCB0aGlzLmdldFNpemUoKSlcbiAgICB0aGlzLmRldGVybWluZURpcmVjdGlvbihwb2ludClcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9pbnRcbiAgICB0aGlzLmVtaXREcmFnRXZlbnQoJ21vdmUnKVxuICB9XG5cbiAgbmF0aXZlRHJhZ0VuZChfZXZlbnQpIHtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2VlLXBsYWNlaG9sZGVyJylcbiAgICB0aGlzLmRyYWdFbmRBY3Rpb24oKVxuICAgIHRoaXMuZW1pdERyYWdFdmVudCgnZW5kJylcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIHRoaXMuX25hdGl2ZURyYWdPdmVyKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzLl9uYXRpdmVEcm9wKVxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9zY3JvbGwpXG4gICAgdGhpcy5zY3JvbGxFbGVtZW50cy5mb3JFYWNoKChwKSA9PiBwLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX3Njcm9sbCkpXG4gICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2VcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkcmFnZ2FibGUnKVxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCB0aGlzLl9uYXRpdmVEcmFnU3RhcnQpXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdlZS1hY3RpdmUnKVxuICB9XG5cbiAgbmF0aXZlRHJvcChldmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgY2FuY2VsRHJhZ2dpbmcgKCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcblxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX25hdGl2ZURyYWdFbmQpXG5cbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fc2Nyb2xsKVxuICAgIHRoaXMuc2Nyb2xsRWxlbWVudHMuZm9yRWFjaCgocCkgPT4gcC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9zY3JvbGwpKVxuXG4gICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2VcbiAgICB0aGlzLl9wcmV2aW91c0RpcmVjdGlvblBvc2l0aW9uID0gbnVsbFxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2RyYWdnYWJsZScpXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIHRoaXMuX25hdGl2ZURyYWdTdGFydClcbiAgfVxuXG4gIGNvcHlTdHlsZXMoc291cmNlLCBkZXN0aW5hdGlvbikge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuY29weVN0eWxlcykge1xuICAgICAgdGhpcy5vcHRpb25zLmNvcHlTdHlsZXMoc291cmNlLCBkZXN0aW5hdGlvbilcbiAgICB9IGVsc2Uge1xuICAgICAgY29weVN0eWxlcyhzb3VyY2UsIGRlc3RpbmF0aW9uKVxuICAgIH1cbiAgfVxuXG4gIGVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcChldmVudCkge1xuICAgIGNvbnN0IGNvbnRhaW5lclJlY3QgPSB0aGlzLmNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIGNvbnN0IGNsb25lZEVsZW1lbnQgPSB0aGlzLmVsZW1lbnQuY2xvbmVOb2RlKHRydWUpXG4gICAgY2xvbmVkRWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wZXJ0eV0gPSAnJ1xuICAgIHRoaXMuY29weVN0eWxlcyh0aGlzLmVsZW1lbnQsIGNsb25lZEVsZW1lbnQpXG4gICAgY2xvbmVkRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkcmFnZWUtbmF0aXZlLWVtdWxhdGlvbicpXG4gICAgY2xvbmVkRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSdcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNsb25lZEVsZW1lbnQpXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RyYWdlZS1wbGFjZWhvbGRlcicpXG5cbiAgICBjb25zdCBlbXVsYXRpb25EcmFnZ2FibGUgPSBuZXcgRHJhZ2dhYmxlKGNsb25lZEVsZW1lbnQsIHtcbiAgICAgIGNvbnRhaW5lcjogZG9jdW1lbnQuYm9keSxcbiAgICAgIHRvdWNoRHJhZ2dpbmdUaHJlc2hvbGQ6IDAsXG4gICAgICBkb21FdmVudHM6IGZhbHNlLFxuICAgICAgYm91bmQocG9pbnQpIHtcbiAgICAgICAgcmV0dXJuIHBvaW50XG4gICAgICB9LFxuICAgICAgb246IHtcbiAgICAgICAgJ2RyYWc6bW92ZSc6ICgpID0+IHtcbiAgICAgICAgICBjb25zdCBjb250YWluZXJSZWN0UG9pbnQgPSBuZXcgUG9pbnQoY29udGFpbmVyUmVjdC5sZWZ0LCBjb250YWluZXJSZWN0LnRvcClcbiAgICAgICAgICB0aGlzLnBvc2l0aW9uID0gZW11bGF0aW9uRHJhZ2dhYmxlLnBvc2l0aW9uLnN1Yihjb250YWluZXJSZWN0UG9pbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdWIodGhpcy5fc3RhcnRXaW5kb3dTY3JvbGxQb2ludClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZCh0aGlzLl9zdGFydFBhcmVudHNTY3JvbGxPZmZzZXQpXG5cbiAgICAgICAgICB0aGlzLmRldGVybWluZURpcmVjdGlvbih0aGlzLnBvc2l0aW9uKVxuICAgICAgICAgIHRoaXMuZW1pdERyYWdFdmVudCgnbW92ZScpXG4gICAgICAgIH0sXG4gICAgICAgICdkcmFnOmVuZCc6ICgpID0+IHtcbiAgICAgICAgICBlbXVsYXRpb25EcmFnZ2FibGUuZGVzdHJveSgpXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChjbG9uZWRFbGVtZW50KVxuICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZWUtcGxhY2Vob2xkZXInKVxuICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZWUtYWN0aXZlJylcblxuICAgICAgICAgIHRoaXMuZHJhZ0VuZEFjdGlvbigpXG4gICAgICAgICAgdGhpcy5lbWl0RHJhZ0V2ZW50KCdlbmQnKVxuICAgICAgICAgIHRoaXMuY2FuY2VsRHJhZ2dpbmcoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IGNvbnRhaW5lclJlY3RQb2ludCA9IG5ldyBQb2ludChjb250YWluZXJSZWN0LmxlZnQsIGNvbnRhaW5lclJlY3QudG9wKVxuICAgIGVtdWxhdGlvbkRyYWdnYWJsZS5fc3RhcnRXaW5kb3dTY3JvbGxQb2ludCA9IHRoaXMuX3N0YXJ0V2luZG93U2Nyb2xsUG9pbnRcblxuICAgIGVtdWxhdGlvbkRyYWdnYWJsZS5tb3ZlKFxuICAgICAgdGhpcy5waW5uZWRQb3NpdGlvbi5hZGQoY29udGFpbmVyUmVjdFBvaW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy53aW5kb3dTY3JvbGxQb2ludClcbiAgICAgICAgICAgICAgICAgICAgICAgICAuc3ViKHRoaXMucGFyZW50c1Njcm9sbE9mZnNldClcbiAgICApXG5cbiAgICBlbXVsYXRpb25EcmFnZ2FibGUuZHJhZ1N0YXJ0KGV2ZW50KVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIGVtaXREcmFnRXZlbnQodHlwZSkge1xuICAgIGNvbnN0IGRldGFpbCA9IHsgZHJhZ2dhYmxlOiB0aGlzIH1cbiAgICB0aGlzLmVtaXQoYGRyYWc6JHt0eXBlfWAsIGRldGFpbClcblxuICAgIGlmICh0aGlzLmRvbUV2ZW50cykge1xuICAgICAgZGlzcGF0Y2hEb21FdmVudCh0aGlzLmVsZW1lbnQsIGBkcmFnZWU6JHt0eXBlfWAsIGRldGFpbClcbiAgICB9XG4gIH1cblxuICBvdmVycmlkZURyYWdFbmRBY3Rpb24oYWN0aW9uKSB7XG4gICAgdGhpcy5fZHJhZ0VuZEFjdGlvbnMucHVzaChhY3Rpb24pXG4gICAgcmV0dXJuICgpID0+IHJlbW92ZUl0ZW0odGhpcy5fZHJhZ0VuZEFjdGlvbnMsIGFjdGlvbilcbiAgfVxuXG4gIGRyYWdFbmRBY3Rpb24oKSB7XG4gICAgY29uc3QgYWN0aW9uID0gdGhpcy5fZHJhZ0VuZEFjdGlvbnNbdGhpcy5fZHJhZ0VuZEFjdGlvbnMubGVuZ3RoIC0gMV1cblxuICAgIGlmIChhY3Rpb24pIHtcbiAgICAgIGFjdGlvbigpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucGluUG9zaXRpb24odGhpcy5wb3NpdGlvbilcbiAgICB9XG4gIH1cblxuICBnZXRSZWN0YW5nbGUoKSB7XG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUodGhpcy5wb3NpdGlvbiwgdGhpcy5nZXRTaXplKCkpXG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIGlmICh0aGlzLmJvdW5kaW5nLnJlZnJlc2gpIHtcbiAgICAgIHRoaXMuYm91bmRpbmcucmVmcmVzaCgpXG4gICAgfVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmhhbmRsZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0KVxuICAgIHRoaXMuaGFuZGxlci5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQpXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIHRoaXMuX25hdGl2ZURyYWdTdGFydClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCB0aGlzLl9uYXRpdmVEcmFnT3ZlcilcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcm9wJywgdGhpcy5fbmF0aXZlRHJvcClcbiAgICBzY29wZXMuZm9yRWFjaCgoc2NvcGUpID0+IHNjb3BlLnJlbGVhc2VEcmFnZ2FibGUodGhpcykpXG5cbiAgICBjb25zdCBpbmRleCA9IGRyYWdnYWJsZXMuaW5kZXhPZih0aGlzKVxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICBkcmFnZ2FibGVzLnNwbGljZShpbmRleCwgMSlcbiAgICB9XG4gIH1cblxuICBnZXQgY29udGFpbmVyKCkge1xuICAgIHJldHVybiAodGhpcy5fY29udGFpbmVyID0gdGhpcy5fY29udGFpbmVyIHx8IHRoaXMub3B0aW9ucy5jb250YWluZXIgfHwgdGhpcy5vcHRpb25zLnBhcmVudCB8fCB0aGlzLmVsZW1lbnQub2Zmc2V0UGFyZW50KVxuICB9XG5cbiAgZ2V0IGhhbmRsZXIoKSB7XG4gICAgaWYgKCF0aGlzLl9oYW5kbGVyKSB7XG4gICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5oYW5kbGVyID09PSAnc3RyaW5nJykge1xuICAgICAgICB0aGlzLl9oYW5kbGVyID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5vcHRpb25zLmhhbmRsZXIpIHx8IHRoaXMuZWxlbWVudFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5faGFuZGxlciA9IHRoaXMub3B0aW9ucy5oYW5kbGVyIHx8IHRoaXMuZWxlbWVudFxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9oYW5kbGVyXG4gIH1cblxuICBnZXQgc3RvcFByb3BhZ2F0aW9uT25EcmFnU3RhcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5zdG9wUHJvcGFnYXRpb25PbkRyYWdTdGFydCB8fCBmYWxzZVxuICB9XG5cbiAgZ2V0IG5hdGl2ZURyYWdBbmREcm9wKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMubmF0aXZlRHJhZ0FuZERyb3AgfHwgZmFsc2VcbiAgfVxuXG4gIGdldCBkb21FdmVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5kb21FdmVudHMgIT09IGZhbHNlXG4gIH1cblxuICBnZXQgZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wT25Ub3VjaCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcE9uVG91Y2ggfHwgZmFsc2VcbiAgfVxuXG4gIGdldCBzaG91bGRSZW1vdmVaZXJvVHJhbnNsYXRlKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuc2hvdWxkUmVtb3ZlWmVyb1RyYW5zbGF0ZSB8fCBmYWxzZVxuICB9XG5cbiAgZ2V0IHRvdWNoRHJhZ2dpbmdUaHJlc2hvbGQoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy50b3VjaERyYWdnaW5nVGhyZXNob2xkIHx8IDBcbiAgfVxuXG4gIGdldCBkcmFnU3RhcnRUaHJlc2hvbGQoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5kcmFnU3RhcnRUaHJlc2hvbGQgfHwgMFxuICB9XG5cbiAgZ2V0IGRyYWdPdmVyVGhyb3R0bGVEdXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmRyYWdPdmVyVGhyb3R0bGVEdXJhdGlvbiB8fCAxNlxuICB9XG5cbiAgZ2V0IGlzQ29uc2lkZXJUcmFuc2Zvcm1PZmZzZXQgKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuY29uc2lkZXJUcmFuc2Zvcm1PZmZzZXQgfHwgZmFsc2VcbiAgfVxuXG4gIGdldCB3aW5kb3dTY3JvbGxQb2ludCgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHdpbmRvdy5zY3JvbGxYLCB3aW5kb3cuc2Nyb2xsWSlcbiAgfVxuXG4gIGdldCBzY3JvbGxSb290Q29udGFpbmVyKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuc2Nyb2xsUm9vdENvbnRhaW5lciB8fCB0aGlzLmNvbnRhaW5lclxuICB9XG5cbiAgZ2V0IHNjcm9sbEVsZW1lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLl9jYWNoZWRTY3JvbGxFbGVtZW50c1xuICAgICAgPyB0aGlzLl9jYWNoZWRTY3JvbGxFbGVtZW50c1xuICAgICAgOiAodGhpcy5fY2FjaGVkU2Nyb2xsRWxlbWVudHMgPSBnZXRQYXJlbnRzQ2hhaW4odGhpcy5lbGVtZW50LCB0aGlzLnNjcm9sbFJvb3RDb250YWluZXIpKVxuICB9XG5cbiAgZ2V0IHNjcm9sbEVsZW1lbnRzT2Zmc2V0KCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQoXG4gICAgICB0aGlzLnNjcm9sbEVsZW1lbnRzLnJlZHVjZSgoc3VtLCBwKSA9PiBzdW0gKyBwLnNjcm9sbExlZnQsIDApLFxuICAgICAgdGhpcy5zY3JvbGxFbGVtZW50cy5yZWR1Y2UoKHN1bSwgcCkgPT4gc3VtICsgcC5zY3JvbGxUb3AsIDApXG4gICAgKVxuICB9XG5cbiAgZ2V0IHBhcmVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhY2hlZFBhcmVudHNcbiAgICAgID8gdGhpcy5fY2FjaGVkUGFyZW50c1xuICAgICAgOiAodGhpcy5fY2FjaGVkUGFyZW50cyA9IGdldFBhcmVudHNDaGFpbih0aGlzLmVsZW1lbnQsIHRoaXMuY29udGFpbmVyKSlcbiAgfVxuXG4gIGdldCBwYXJlbnRzU2Nyb2xsT2Zmc2V0KCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQoXG4gICAgICB0aGlzLnBhcmVudHMucmVkdWNlKChzdW0sIHApID0+IHN1bSArIHAuc2Nyb2xsTGVmdCwgMCksXG4gICAgICB0aGlzLnBhcmVudHMucmVkdWNlKChzdW0sIHApID0+IHN1bSArIHAuc2Nyb2xsVG9wLCAwKVxuICAgIClcbiAgfVxuXG4gIGdldCBlbmFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZVxuICB9XG5cbiAgc2V0IGVuYWJsZShlbmFibGUpIHtcbiAgICBpZiAoZW5hYmxlKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2VlLWRpc2FibGUnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZHJhZ2VlLWRpc2FibGUnKVxuICAgIH1cblxuICAgIHRoaXMuX2VuYWJsZSA9IGVuYWJsZVxuICB9XG59XG5cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQsIGltbWVkaWF0ZSkge1xuICBsZXQgdGltZW91dFxuXG4gIHJldHVybiBmdW5jdGlvbiBleGVjdXRlZEZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzXG4gICAgY29uc3QgYXJncyA9IGFyZ3VtZW50c1xuXG4gICAgY29uc3QgbGF0ZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgIHRpbWVvdXQgPSBudWxsXG4gICAgICBpZiAoIWltbWVkaWF0ZSkgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKVxuICAgIH1cblxuICAgIGNvbnN0IGNhbGxOb3cgPSBpbW1lZGlhdGUgJiYgIXRpbWVvdXRcblxuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KVxuXG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpXG5cbiAgICBpZiAoY2FsbE5vdykgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKVxuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0RGlzdGFuY2UocDEsIHAyKSB7XG4gIGNvbnN0IGR4ID0gcDEueCAtIHAyLngsIGR5ID0gcDEueSAtIHAyLnlcbiAgcmV0dXJuIE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFhEaWZmZXJlbmNlKHAxLCBwMikge1xuICByZXR1cm4gTWF0aC5hYnMocDEueCAtIHAyLngpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRZRGlmZmVyZW5jZShwMSwgcDIpIHtcbiAgcmV0dXJuIE1hdGguYWJzKHAxLnkgLSBwMi55KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtZWRTcGFjZURpc3RhbmNlRmFjdG9yeShvcHRpb25zKSB7XG4gIHJldHVybiAocDEsIHAyKSA9PiB7XG4gICAgcmV0dXJuIE1hdGguc3FydChcbiAgICAgIE1hdGgucG93KG9wdGlvbnMueCAqIE1hdGguYWJzKHAxLnggLSBwMi54KSwgMikgK1xuICAgICAgTWF0aC5wb3cob3B0aW9ucy55ICogTWF0aC5hYnMocDEueSAtIHAyLnkpLCAyKVxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5kZXhPZk5lYXJlc3RQb2ludChhcnIsIHZhbCwgcmFkaXVzLCBnZXREaXN0YW5jZUZ1bmM9Z2V0RGlzdGFuY2UpIHtcbiAgbGV0IHNpemUsIGluZGV4ID0gMCwgaSwgdGVtcFxuICBpZiAoYXJyLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAtMVxuICB9XG4gIHNpemUgPSBnZXREaXN0YW5jZUZ1bmMoYXJyWzBdLCB2YWwpXG4gIGZvciAoaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICB0ZW1wID0gZ2V0RGlzdGFuY2VGdW5jKGFycltpXSwgdmFsKVxuICAgIGlmICh0ZW1wIDwgc2l6ZSkge1xuICAgICAgc2l6ZSA9IHRlbXBcbiAgICAgIGluZGV4ID0gaVxuICAgIH1cbiAgfVxuICBpZiAocmFkaXVzID49IDAgJiYgc2l6ZSA+IHJhZGl1cykge1xuICAgIHJldHVybiAtMVxuICB9XG4gIHJldHVybiBpbmRleFxufVxuIiwiaW1wb3J0IGRlYm91bmNlIGZyb20gJy4vdXRpbHMvZGVib3VuY2UnXG5pbXBvcnQgcmVtb3ZlSXRlbSBmcm9tICcuL3V0aWxzL3JlbW92ZS1hcnJheS1pdGVtJ1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50RW1pdHRlcidcbmltcG9ydCBkaXNwYXRjaERvbUV2ZW50IGZyb20gJy4vdXRpbHMvZGlzcGF0Y2gtZG9tLWV2ZW50J1xuaW1wb3J0IHtcbiAgZ2V0RGlzdGFuY2UsXG4gIGluZGV4T2ZOZWFyZXN0UG9pbnRcbn0gZnJvbSAnLi9nZW9tZXRyeS9kaXN0YW5jZXMnXG5cbmltcG9ydCBEcmFnZ2FibGUgZnJvbSAnLi9kcmFnZ2FibGUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3QgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvcihkcmFnZ2FibGVzLCBvcHRpb25zPXt9KSB7XG4gICAgc3VwZXIob3B0aW9ucylcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHRpbWVFbmQ6IDIwMCxcbiAgICAgIHRpbWVFeGNhbmdlOiA0MDAsXG4gICAgICByYWRpdXM6IDMwXG4gICAgfSwgb3B0aW9ucylcblxuICAgIHRoaXMuY29udGFpbmVyID0gb3B0aW9ucy5jb250YWluZXJcbiAgICB0aGlzLmRyYWdnYWJsZXMgPSBkcmFnZ2FibGVzXG4gICAgdGhpcy5jaGFuZ2VkRHVyaW5nSXRlcmF0aW9uID0gZmFsc2VcbiAgICB0aGlzLmRyYWdnYWJsZUNvbnRyb2xsZXJzID0gbmV3IE1hcCgpXG5cbiAgICB0aGlzLnJlc2l6ZU9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKGRlYm91bmNlKHRoaXMub25SZXNpemUuYmluZCh0aGlzKSwgMTAwKSlcblxuICAgIGlmICh0aGlzLmNvbnRhaW5lcikge1xuICAgICAgdGhpcy5yZXNpemVPYnNlcnZlci5vYnNlcnZlKHRoaXMuY29udGFpbmVyKVxuICAgIH1cblxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBvblJlc2l6ZSgpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLnJlb3JkZXJPbkNoYW5nZSkgdGhpcy5yZXNldCgpXG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgaWYoIWRyYWdnYWJsZS5pc0RyYWdnaW5nKSB7XG4gICAgICAgIGRyYWdnYWJsZS5zdGFydFBvc2l0aW9uaW5nKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLl9lbmFibGUgPSB0cnVlXG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gdGhpcy5pbml0RHJhZ2dhYmxlKGRyYWdnYWJsZSkpXG4gIH1cblxuICBpbml0RHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIGRyYWdnYWJsZS5lbmFibGUgPSB0aGlzLl9lbmFibGVcbiAgICB0aGlzLmxpc3RlblRvKGRyYWdnYWJsZSwgJ2RyYWc6bW92ZScsICgpID0+IHRoaXMub25Nb3ZlKGRyYWdnYWJsZSkpXG4gICAgY29uc3QgcmVzdG9yZURyYWdFbmRBY3Rpb24gPSBkcmFnZ2FibGUub3ZlcnJpZGVEcmFnRW5kQWN0aW9uKCgpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5waW5Qb3NpdGlvbihkcmFnZ2FibGUucGlubmVkUG9zaXRpb24sIHRoaXMub3B0aW9ucy50aW1lRW5kKVxuICAgICAgdGhpcy5vbkVuZChkcmFnZ2FibGUpXG4gICAgfSlcbiAgICB0aGlzLnNpZ25hbEZvcihkcmFnZ2FibGUpLmFkZEV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgcmVzdG9yZURyYWdFbmRBY3Rpb24pXG4gICAgdGhpcy5yZXNpemVPYnNlcnZlci5vYnNlcnZlKGRyYWdnYWJsZS5lbGVtZW50KVxuICB9XG5cbiAgbGlzdGVuVG8oZHJhZ2dhYmxlLCBldmVudE5hbWUsIGhhbmRsZXIpIHtcbiAgICBkcmFnZ2FibGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGhhbmRsZXIsIHsgc2lnbmFsOiB0aGlzLnNpZ25hbEZvcihkcmFnZ2FibGUpIH0pXG4gIH1cblxuICBzaWduYWxGb3IoZHJhZ2dhYmxlKSB7XG4gICAgaWYgKCF0aGlzLmRyYWdnYWJsZUNvbnRyb2xsZXJzLmhhcyhkcmFnZ2FibGUpKSB7XG4gICAgICB0aGlzLmRyYWdnYWJsZUNvbnRyb2xsZXJzLnNldChkcmFnZ2FibGUsIG5ldyBBYm9ydENvbnRyb2xsZXIoKSlcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZHJhZ2dhYmxlQ29udHJvbGxlcnMuZ2V0KGRyYWdnYWJsZSkuc2lnbmFsXG4gIH1cblxuICByZWxlYXNlRHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIudW5vYnNlcnZlKGRyYWdnYWJsZS5lbGVtZW50KVxuICAgIHRoaXMuZHJhZ2dhYmxlQ29udHJvbGxlcnMuZ2V0KGRyYWdnYWJsZSk/LmFib3J0KClcbiAgICB0aGlzLmRyYWdnYWJsZUNvbnRyb2xsZXJzLmRlbGV0ZShkcmFnZ2FibGUpXG4gICAgcmVtb3ZlSXRlbSh0aGlzLmRyYWdnYWJsZXMsIGRyYWdnYWJsZSlcbiAgfVxuXG4gIG9uTW92ZShkcmFnZ2FibGUpIHtcbiAgICBpZiAodGhpcy5zd2FwcGluZ0Rpc2FibGVkKSByZXR1cm5cblxuICAgIGNvbnN0IHNvcnRlZERyYWdnYWJsZXMgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuICAgIGNvbnN0IHBpbm5lZFBvc2l0aW9ucyA9IHNvcnRlZERyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbilcblxuICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IHNvcnRlZERyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpXG4gICAgY29uc3QgdGFyZ2V0SW5kZXggPSBpbmRleE9mTmVhcmVzdFBvaW50KHBpbm5lZFBvc2l0aW9ucywgZHJhZ2dhYmxlLnBvc2l0aW9uLCB0aGlzLm9wdGlvbnMucmFkaXVzLCB0aGlzLmRpc3RhbmNlRnVuYylcblxuICAgIGlmICh0YXJnZXRJbmRleCAhPT0gLTEgJiYgY3VycmVudEluZGV4ICE9PSB0YXJnZXRJbmRleCkge1xuICAgICAgaWYgKHRhcmdldEluZGV4IDwgY3VycmVudEluZGV4KSB7XG4gICAgICAgIGZvciAobGV0IGk9dGFyZ2V0SW5kZXg7IGk8Y3VycmVudEluZGV4OyBpKyspIHtcbiAgICAgICAgICBzb3J0ZWREcmFnZ2FibGVzW2ldLnBpblBvc2l0aW9uKHBpbm5lZFBvc2l0aW9uc1tpKzFdLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAobGV0IGk9Y3VycmVudEluZGV4OyBpPHRhcmdldEluZGV4OyBpKyspIHtcbiAgICAgICAgICBzb3J0ZWREcmFnZ2FibGVzW2krMV0ucGluUG9zaXRpb24ocGlubmVkUG9zaXRpb25zW2ldLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGRyYWdnYWJsZS5uYXRpdmVEcmFnQW5kRHJvcCkge1xuICAgICAgICBkcmFnZ2FibGUucGluUG9zaXRpb24ocGlubmVkUG9zaXRpb25zW3RhcmdldEluZGV4XSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbiA9IHBpbm5lZFBvc2l0aW9uc1t0YXJnZXRJbmRleF1cbiAgICAgIH1cblxuICAgICAgdGhpcy5jaGFuZ2VkRHVyaW5nSXRlcmF0aW9uID0gdHJ1ZVxuICAgIH1cbiAgfVxuXG4gIG9uRW5kKGRyYWdnYWJsZSkge1xuICAgIGlmICh0aGlzLmNoYW5nZWREdXJpbmdJdGVyYXRpb24pIHtcbiAgICAgIHRoaXMuZW1pdExpc3RFdmVudCgnY2hhbmdlJywgZHJhZ2dhYmxlKVxuICAgICAgdGhpcy5jaGFuZ2VkRHVyaW5nSXRlcmF0aW9uID0gZmFsc2VcblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZW9yZGVyT25DaGFuZ2UgJiYgdGhpcy5vcHRpb25zLmNvbnRhaW5lcikge1xuICAgICAgICB0aGlzLnJlb3JkZXJFbGVtZW50cyhkcmFnZ2FibGUpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVvcmRlckVsZW1lbnRzKG1vdmVkRHJhZ2dhYmxlKSB7XG4gICAgY29uc3Qgc29ydGVkRHJhZ2dhYmxlcyA9IHRoaXMuZ2V0U29ydGVkRHJhZ2dhYmxlcygpXG4gICAgY29uc3QgaW5kZXggPSBzb3J0ZWREcmFnZ2FibGVzLmluZGV4T2YobW92ZWREcmFnZ2FibGUpXG4gICAgY29uc3QgbmV4dCA9IHNvcnRlZERyYWdnYWJsZXNbaW5kZXggKyAxXVxuXG4gICAgdGhpcy5yZXNldCgpXG5cbiAgICBpZiAobmV4dCkge1xuICAgICAgdGhpcy5jb250YWluZXIuaW5zZXJ0QmVmb3JlKG1vdmVkRHJhZ2dhYmxlLmVsZW1lbnQsIG5leHQuZWxlbWVudClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQobW92ZWREcmFnZ2FibGUuZWxlbWVudClcbiAgICB9XG5cbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZCkgPT4gZC5zdGFydFBvc2l0aW9uaW5nKCkpXG4gICAgdGhpcy5lbWl0TGlzdEV2ZW50KCdyZW9yZGVyZWQnLCBtb3ZlZERyYWdnYWJsZSlcbiAgfVxuXG4gIGVtaXRMaXN0RXZlbnQodHlwZSwgZHJhZ2dhYmxlKSB7XG4gICAgY29uc3QgZGV0YWlsID0geyBsaXN0OiB0aGlzLCBkcmFnZ2FibGUgfVxuICAgIHRoaXMuZW1pdChgbGlzdDoke3R5cGV9YCwgZGV0YWlsKVxuXG4gICAgaWYgKHRoaXMuZG9tRXZlbnRzKSB7XG4gICAgICBkaXNwYXRjaERvbUV2ZW50KGRyYWdnYWJsZS5lbGVtZW50LCBgZHJhZ2VlOmxpc3QtJHt0eXBlfWAsIGRldGFpbClcbiAgICB9XG4gIH1cblxuICBnZXRDdXJyZW50UGlubmVkUG9zaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbi5jbG9uZSgpKVxuICB9XG5cbiAgZ2V0U29ydGVkRHJhZ2dhYmxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5kcmFnZ2FibGVzLnNvcnQodGhpcy5zb3J0aW5nLmJpbmQodGhpcykpXG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucmVzZXRQb3NpdGlvblRvSW5pdGlhbCgpKVxuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucmVmcmVzaCgpKVxuICB9XG5cbiAgYWRkKGRyYWdnYWJsZXMpIHtcbiAgICBpZiAoIShkcmFnZ2FibGVzIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgICBkcmFnZ2FibGVzID0gW2RyYWdnYWJsZXNdXG4gICAgfVxuICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB0aGlzLmluaXREcmFnZ2FibGUoZHJhZ2dhYmxlKSlcbiAgICB0aGlzLmRyYWdnYWJsZXMgPSB0aGlzLmRyYWdnYWJsZXMuY29uY2F0KGRyYWdnYWJsZXMpXG4gIH1cblxuICByZW1vdmUoZHJhZ2dhYmxlcykge1xuICAgIGNvbnN0IGluaXRpYWxQb3NpdGlvbnMgPSB0aGlzLmRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5pbml0aWFsUG9zaXRpb24pXG4gICAgY29uc3QgbGlzdCA9IFtdXG4gICAgY29uc3Qgc29ydGVkRHJhZ2dhYmxlcyA9IHRoaXMuZ2V0U29ydGVkRHJhZ2dhYmxlcygpXG5cbiAgICBpZiAoIShkcmFnZ2FibGVzIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgICBkcmFnZ2FibGVzID0gW2RyYWdnYWJsZXNdXG4gICAgfVxuXG4gICAgZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHRoaXMucmVsZWFzZURyYWdnYWJsZShkcmFnZ2FibGUpKVxuXG4gICAgbGV0IGogPSAwXG4gICAgc29ydGVkRHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGlmICh0aGlzLmRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMSkge1xuICAgICAgICBpZiAoZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uICE9PSBpbml0aWFsUG9zaXRpb25zW2pdKSB7XG4gICAgICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKGluaXRpYWxQb3NpdGlvbnNbal0sIHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSlcbiAgICAgICAgfVxuICAgICAgICBkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uID0gaW5pdGlhbFBvc2l0aW9uc1tqXVxuICAgICAgICBqKytcbiAgICAgICAgbGlzdC5wdXNoKGRyYWdnYWJsZSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGxpc3RcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMucmVtb3ZlKHRoaXMuZHJhZ2dhYmxlcy5zbGljZSgpKVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUuZGVzdHJveSgpKVxuICAgIGlmICh0aGlzLmNvbnRhaW5lcikge1xuICAgICAgdGhpcy5yZXNpemVPYnNlcnZlci51bm9ic2VydmUodGhpcy5jb250YWluZXIpXG4gICAgfVxuICB9XG5cbiAgc29ydGluZyhkcmFnZ2FibGVBLCBkcmFnZ2FibGVCKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5zb3J0aW5nKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLnNvcnRpbmcoZHJhZ2dhYmxlQSwgZHJhZ2dhYmxlQilcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGRyYWdnYWJsZUEucGlubmVkUG9zaXRpb24ueSA8IGRyYWdnYWJsZUIucGlubmVkUG9zaXRpb24ueSkgcmV0dXJuIC0xXG4gICAgICBpZiAoZHJhZ2dhYmxlQS5waW5uZWRQb3NpdGlvbi55ID4gZHJhZ2dhYmxlQi5waW5uZWRQb3NpdGlvbi55KSByZXR1cm4gMVxuICAgICAgaWYgKGRyYWdnYWJsZUEucGlubmVkUG9zaXRpb24ueCA8IGRyYWdnYWJsZUIucGlubmVkUG9zaXRpb24ueCkgcmV0dXJuIC0xXG4gICAgICBpZiAoZHJhZ2dhYmxlQS5waW5uZWRQb3NpdGlvbi54ID4gZHJhZ2dhYmxlQi5waW5uZWRQb3NpdGlvbi54KSByZXR1cm4gMVxuICAgICAgcmV0dXJuIDBcbiAgICB9XG4gIH1cblxuICBnZXQgZGlzdGFuY2VGdW5jKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZ2V0RGlzdGFuY2UgfHwgZ2V0RGlzdGFuY2VcbiAgfVxuXG4gIGdldCBkb21FdmVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5kb21FdmVudHMgIT09IGZhbHNlXG4gIH1cblxuICBnZXQgcG9zaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmdldEN1cnJlbnRQaW5uZWRQb3NpdGlvbnMoKVxuICB9XG5cbiAgc2V0IHBvc2l0aW9ucyhwb3NpdGlvbnMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gJ3dyb25nIGFycmF5IGxlbmd0aCdcbiAgICBpZiAocG9zaXRpb25zLmxlbmd0aCA9PT0gdGhpcy5kcmFnZ2FibGVzLmxlbmd0aCkge1xuICAgICAgcG9zaXRpb25zLmZvckVhY2goKHBvaW50LCBpKSA9PiB7XG4gICAgICAgIHRoaXMuZHJhZ2dhYmxlc1tpXS5waW5Qb3NpdGlvbihwb2ludClcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG1lc3NhZ2VcbiAgICB9XG4gIH1cblxuICBnZXQgZW5hYmxlKCkge1xuICAgIHJldHVybiB0aGlzLl9lbmFibGVcbiAgfVxuXG4gIHNldCBlbmFibGUoZW5hYmxlKSB7XG4gICAgdGhpcy5fZW5hYmxlID0gZW5hYmxlXG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLmVuYWJsZSA9IGVuYWJsZVxuICAgIH0pXG4gIH1cblxuICBnZXQgc3dhcHBpbmdEaXNhYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3dhcHBpbmdEaXNhYmxlZFxuICB9XG5cbiAgc2V0IHN3YXBwaW5nRGlzYWJsZWQoZGlzYWJsZWQpIHtcbiAgICB0aGlzLl9zd2FwcGluZ0Rpc2FibGVkID0gZGlzYWJsZWRcbiAgfVxufVxuIiwiaW1wb3J0IExpc3QgZnJvbSAnLi9saXN0J1xuaW1wb3J0IHsgaW5kZXhPZk5lYXJlc3RQb2ludCwgZ2V0WERpZmZlcmVuY2UsIGdldFlEaWZmZXJlbmNlIH0gZnJvbSAnLi9nZW9tZXRyeS9kaXN0YW5jZXMnXG5cbmltcG9ydCBEcmFnZ2FibGUgZnJvbSAnLi9kcmFnZ2FibGUnXG5cbmNvbnN0IGFycmF5TW92ZSA9IChhcnJheSwgZnJvbSwgdG8pID0+IHtcbiAgYXJyYXkuc3BsaWNlKHRvIDwgMCA/IGFycmF5Lmxlbmd0aCArIHRvIDogdG8sIDAsIGFycmF5LnNwbGljZShmcm9tLCAxKVswXSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnViYmxpbmdMaXN0IGV4dGVuZHMgTGlzdCB7XG4gIGF1dG9EZXRlY3RHYXAoKSB7XG4gICAgaWYgKHRoaXMuX2dhcCAhPT0gdW5kZWZpbmVkIHx8IHRoaXMuZXhwbGljaXRHYXAgIT09IHVuZGVmaW5lZCB8fCB0aGlzLmRyYWdnYWJsZXMubGVuZ3RoIDwgMikgcmV0dXJuXG5cbiAgICBjb25zdCBheGlzID0gdGhpcy5heGlzXG4gICAgY29uc3Qgc29ydGVkID0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcbiAgICAvLyBEZXRhY2hlZCBlbGVtZW50cyByZXBvcnQgc2l6ZSAwXG4gICAgY29uc3QgaW5kZXggPSBzb3J0ZWQuZmluZEluZGV4KChkLCBpKSA9PiBpIDwgc29ydGVkLmxlbmd0aCAtIDEgJiYgZC5lbGVtZW50LmlzQ29ubmVjdGVkKVxuICAgIGlmIChpbmRleCA9PT0gLTEpIHJldHVyblxuXG4gICAgY29uc3QgW2N1cnJlbnQsIG5leHRdID0gW3NvcnRlZFtpbmRleF0sIHNvcnRlZFtpbmRleCArIDFdXVxuICAgIHRoaXMuX2dhcCA9IG5leHQucGlubmVkUG9zaXRpb25bYXhpc10gLSBjdXJyZW50LnBpbm5lZFBvc2l0aW9uW2F4aXNdIC0gY3VycmVudC5nZXRTaXplKClbYXhpc11cbiAgfVxuXG4gIGF1dG9EZXRlY3RTdGFydFBvc2l0aW9uKCkge1xuICAgIGlmICh0aGlzLmRyYWdnYWJsZXMubGVuZ3RoID49IDEgJiYgIXRoaXMuc3RhcnRQb3NpdGlvbikge1xuICAgICAgdGhpcy5zdGFydFBvc2l0aW9uID0gdGhpcy5kcmFnZ2FibGVzWzBdLnBpbm5lZFBvc2l0aW9uXG4gICAgfVxuICB9XG5cbiAgaW5pdERyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICBzdXBlci5pbml0RHJhZ2dhYmxlKGRyYWdnYWJsZSlcbiAgICB0aGlzLmxpc3RlblRvKGRyYWdnYWJsZSwgJ2RyYWc6c3RhcnQnLCAoKSA9PiB0aGlzLm9uRHJhZ1N0YXJ0KGRyYWdnYWJsZSkpXG4gIH1cblxuICBvbkRyYWdTdGFydChkcmFnZ2FibGUpIHtcbiAgICB0aGlzLmF1dG9EZXRlY3RHYXAoKVxuICAgIHRoaXMuYXV0b0RldGVjdFN0YXJ0UG9zaXRpb24oKVxuICAgIHRoaXMuY2FjaGVkU29ydGVkRHJhZ2dhYmxlcyA9IHRoaXMuZ2V0U29ydGVkRHJhZ2dhYmxlcygpXG4gICAgdGhpcy5pbmRleE9mQWN0aXZlRHJhZ2dhYmxlID0gdGhpcy5jYWNoZWRTb3J0ZWREcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKVxuICB9XG5cbiAgb25Nb3ZlKGRyYWdnYWJsZSkge1xuICAgIGlmICh0aGlzLnN3YXBwaW5nRGlzYWJsZWQpIHJldHVyblxuXG4gICAgY29uc3QgcHJldkRyYWdnYWJsZSA9IHRoaXMuY2FjaGVkU29ydGVkRHJhZ2dhYmxlc1t0aGlzLmluZGV4T2ZBY3RpdmVEcmFnZ2FibGUgLSAxXVxuICAgIGNvbnN0IG5leHREcmFnZ2FibGUgPSB0aGlzLmNhY2hlZFNvcnRlZERyYWdnYWJsZXNbdGhpcy5pbmRleE9mQWN0aXZlRHJhZ2dhYmxlICsgMV1cbiAgICBjb25zdCBjdXJyZW50UG9zaXRpb24gPSBkcmFnZ2FibGUucGlubmVkUG9zaXRpb25cblxuICAgIGxldCBjdXJyZW50T3JkZXJcbiAgICBsZXQgdGFyZ2V0SW5kZXhcblxuICAgIGlmKHRoaXMuaXNNb3ZpbmdCYWNrd2FyZChkcmFnZ2FibGUpICYmIHByZXZEcmFnZ2FibGUpIHtcbiAgICAgIGN1cnJlbnRPcmRlciA9IFtwcmV2RHJhZ2dhYmxlLCBkcmFnZ2FibGVdLm1hcCgoZCkgPT4gZC5waW5uZWRQb3NpdGlvbilcbiAgICAgIHRhcmdldEluZGV4ID0gaW5kZXhPZk5lYXJlc3RQb2ludChjdXJyZW50T3JkZXIsIGRyYWdnYWJsZS5wb3NpdGlvbiwgMTAwMDAsIHRoaXMuZGlzdGFuY2VGdW5jKVxuXG4gICAgICBpZiAodGFyZ2V0SW5kZXggPT09IDApIHtcbiAgICAgICAgaWYoZHJhZ2dhYmxlLnNob3VsZFVzZU5hdGl2ZURyYWdBbmREcm9wKCkpIHtcbiAgICAgICAgICBkcmFnZ2FibGUucGluUG9zaXRpb24ocHJldkRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24gPSBwcmV2RHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uLmNsb25lKClcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwcmV2TmV3UG9zaXRpb24gPSB0aGlzLm5leHRQb3NpdGlvbihkcmFnZ2FibGUucGlubmVkUG9zaXRpb24sIGRyYWdnYWJsZSlcbiAgICAgICAgcHJldk5ld1Bvc2l0aW9uW3RoaXMuY3Jvc3NBeGlzXSA9IGN1cnJlbnRQb3NpdGlvblt0aGlzLmNyb3NzQXhpc11cbiAgICAgICAgcHJldkRyYWdnYWJsZS5waW5Qb3NpdGlvbihwcmV2TmV3UG9zaXRpb24sIHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSlcbiAgICAgICAgYXJyYXlNb3ZlKHRoaXMuY2FjaGVkU29ydGVkRHJhZ2dhYmxlcywgdGhpcy5pbmRleE9mQWN0aXZlRHJhZ2dhYmxlLS0sIHRoaXMuaW5kZXhPZkFjdGl2ZURyYWdnYWJsZSlcbiAgICAgICAgdGhpcy5vbk1vdmUoZHJhZ2dhYmxlKVxuICAgICAgICB0aGlzLmNoYW5nZWREdXJpbmdJdGVyYXRpb24gPSB0cnVlXG4gICAgICB9XG4gICAgfSBlbHNlIGlmKHRoaXMuaXNNb3ZpbmdGb3J3YXJkKGRyYWdnYWJsZSkgJiYgbmV4dERyYWdnYWJsZSkge1xuICAgICAgY3VycmVudE9yZGVyID0gW2RyYWdnYWJsZSwgbmV4dERyYWdnYWJsZV0ubWFwKChkKSA9PiBkLnBpbm5lZFBvc2l0aW9uKVxuICAgICAgdGFyZ2V0SW5kZXggPSBpbmRleE9mTmVhcmVzdFBvaW50KGN1cnJlbnRPcmRlciwgZHJhZ2dhYmxlLnBvc2l0aW9uLCAxMDAwMCwgdGhpcy5kaXN0YW5jZUZ1bmMpXG5cbiAgICAgIGlmKHRhcmdldEluZGV4ID09PSAxKSB7XG4gICAgICAgIG5leHREcmFnZ2FibGUucGluUG9zaXRpb24oZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICAgIGNvbnN0IGRyYWdnYWJsZU5ld1Bvc2l0aW9uID0gdGhpcy5uZXh0UG9zaXRpb24obmV4dERyYWdnYWJsZS5waW5uZWRQb3NpdGlvbiwgbmV4dERyYWdnYWJsZSlcbiAgICAgICAgaWYoZHJhZ2dhYmxlLnNob3VsZFVzZU5hdGl2ZURyYWdBbmREcm9wKCkpIHtcbiAgICAgICAgICBkcmFnZ2FibGUucGluUG9zaXRpb24oZHJhZ2dhYmxlTmV3UG9zaXRpb24pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uID0gZHJhZ2dhYmxlTmV3UG9zaXRpb25cbiAgICAgICAgfVxuICAgICAgICBhcnJheU1vdmUodGhpcy5jYWNoZWRTb3J0ZWREcmFnZ2FibGVzLCB0aGlzLmluZGV4T2ZBY3RpdmVEcmFnZ2FibGUrKywgdGhpcy5pbmRleE9mQWN0aXZlRHJhZ2dhYmxlKVxuICAgICAgICB0aGlzLm9uTW92ZShkcmFnZ2FibGUpXG4gICAgICAgIHRoaXMuY2hhbmdlZER1cmluZ0l0ZXJhdGlvbiA9IHRydWVcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBidWJibGluZyhzb3J0ZWREcmFnZ2FibGVzLCBjdXJyZW50RHJhZ2dhYmxlKSB7XG4gICAgbGV0IGN1cnJlbnRQb3NpdGlvbiA9IHRoaXMuc3RhcnRQb3NpdGlvbi5jbG9uZSgpXG4gICAgc29ydGVkRHJhZ2dhYmxlcyB8fD0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcblxuICAgIHNvcnRlZERyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBpZiAoIWRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbi5jb21wYXJlKGN1cnJlbnRQb3NpdGlvbikpIHtcbiAgICAgICAgaWYgKGRyYWdnYWJsZSA9PT0gY3VycmVudERyYWdnYWJsZSAmJiAhY3VycmVudERyYWdnYWJsZS5zaG91bGRVc2VOYXRpdmVEcmFnQW5kRHJvcCgpKSB7XG4gICAgICAgICAgZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uID0gY3VycmVudFBvc2l0aW9uLmNsb25lKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkcmFnZ2FibGUucGluUG9zaXRpb24oY3VycmVudFBvc2l0aW9uLCAoZHJhZ2dhYmxlID09PSBjdXJyZW50RHJhZ2dhYmxlKSA/IDAgOiB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY3VycmVudFBvc2l0aW9uID0gdGhpcy5uZXh0UG9zaXRpb24oY3VycmVudFBvc2l0aW9uLCBkcmFnZ2FibGUpXG4gICAgfSlcbiAgfVxuXG4gIHJlbW92ZShkcmFnZ2FibGVzKSB7XG4gICAgaWYgKCEoZHJhZ2dhYmxlcyBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgZHJhZ2dhYmxlcyA9IFtkcmFnZ2FibGVzXVxuICAgIH1cblxuICAgIC8vIERldGVjdCBsYXlvdXQgYmVmb3JlIHJlbW92YWwsIG90aGVyd2lzZSB0aGUgZ2FwIGlzIG1lYXN1cmVkIGFjcm9zcyB0aGUgaG9sZVxuICAgIHRoaXMuYXV0b0RldGVjdEdhcCgpXG4gICAgdGhpcy5hdXRvRGV0ZWN0U3RhcnRQb3NpdGlvbigpXG5cbiAgICBkcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gdGhpcy5yZWxlYXNlRHJhZ2dhYmxlKGRyYWdnYWJsZSkpXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gdGhpcy5kcmFnZ2FibGVzLmZpbHRlcigoZCkgPT4gIWRyYWdnYWJsZXMuaW5jbHVkZXMoZCkpXG5cbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZCkgPT4gZC5zdGFydFBvc2l0aW9uaW5nKCkpXG5cbiAgICBpZih0aGlzLmRyYWdnYWJsZXMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5idWJibGluZygpXG4gICAgfVxuICB9XG5cbiAgbmV4dFBvc2l0aW9uKHBvc2l0aW9uLCBkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBuZXh0ID0gcG9zaXRpb24uY2xvbmUoKVxuICAgIG5leHRbdGhpcy5heGlzXSA9IHBvc2l0aW9uW3RoaXMuYXhpc10gKyBkcmFnZ2FibGUuZ2V0U2l6ZSgpW3RoaXMuYXhpc10gKyB0aGlzLmdhcFxuICAgIHJldHVybiBuZXh0XG4gIH1cblxuICBpc01vdmluZ0JhY2t3YXJkKGRyYWdnYWJsZSkge1xuICAgIHJldHVybiB0aGlzLmF4aXMgPT09ICd4JyA/IGRyYWdnYWJsZS5sZWZ0RGlyZWN0aW9uIDogZHJhZ2dhYmxlLnVwRGlyZWN0aW9uXG4gIH1cblxuICBpc01vdmluZ0ZvcndhcmQoZHJhZ2dhYmxlKSB7XG4gICAgcmV0dXJuIHRoaXMuYXhpcyA9PT0gJ3gnID8gZHJhZ2dhYmxlLnJpZ2h0RGlyZWN0aW9uIDogZHJhZ2dhYmxlLmRvd25EaXJlY3Rpb25cbiAgfVxuXG4gIGdldCBheGlzKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuYXhpcyA9PT0gJ3gnID8gJ3gnIDogJ3knXG4gIH1cblxuICBnZXQgY3Jvc3NBeGlzKCkge1xuICAgIHJldHVybiB0aGlzLmF4aXMgPT09ICd4JyA/ICd5JyA6ICd4J1xuICB9XG5cbiAgZ2V0IGRpc3RhbmNlRnVuYygpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmdldERpc3RhbmNlIHx8ICh0aGlzLmF4aXMgPT09ICd4JyA/IGdldFhEaWZmZXJlbmNlIDogZ2V0WURpZmZlcmVuY2UpXG4gIH1cblxuICBnZXQgZXhwbGljaXRHYXAoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5nYXAgPz8gdGhpcy5vcHRpb25zLnZlcnRpY2FsR2FwXG4gIH1cblxuICBnZXQgZ2FwKCkge1xuICAgIGlmICh0aGlzLmV4cGxpY2l0R2FwICE9PSB1bmRlZmluZWQpIHJldHVybiB0aGlzLmV4cGxpY2l0R2FwXG5cbiAgICB0aGlzLmF1dG9EZXRlY3RHYXAoKVxuICAgIHJldHVybiB0aGlzLl9nYXAgfHwgMFxuICB9XG5cbiAgc2V0IGdhcChnYXBWYWx1ZSkge1xuICAgIHRoaXMub3B0aW9ucy5nYXAgPSBnYXBWYWx1ZVxuICB9XG5cbiAgLy8gRGVwcmVjYXRlZCBhbGlhcyBmb3IgYGdhcGBcbiAgZ2V0IHZlcnRpY2FsR2FwKCkge1xuICAgIHJldHVybiB0aGlzLmdhcFxuICB9XG5cbiAgc2V0IHZlcnRpY2FsR2FwKGdhcFZhbHVlKSB7XG4gICAgdGhpcy5nYXAgPSBnYXBWYWx1ZVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByYW5nZShzdGFydCwgc3RvcCwgc3RlcCkge1xuICBjb25zdCByZXN1bHQgPSBbXVxuICBpZiAodHlwZW9mIHN0b3AgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgc3RvcCA9IHN0YXJ0XG4gICAgc3RhcnQgPSAwXG4gIH1cbiAgaWYgKHR5cGVvZiBzdGVwID09PSAndW5kZWZpbmVkJykge1xuICAgIHN0ZXAgPSAxXG4gIH1cbiAgaWYgKChzdGVwID4gMCAmJiBzdGFydCA+PSBzdG9wKSB8fCAoc3RlcCA8IDAgJiYgc3RhcnQgPD0gc3RvcCkpIHtcbiAgICByZXR1cm4gW11cbiAgfVxuICBmb3IgKGxldCBpID0gc3RhcnQ7IHN0ZXAgPiAwID8gaSA8IHN0b3AgOiBpID4gc3RvcDsgaSArPSBzdGVwKSB7XG4gICAgcmVzdWx0LnB1c2goaSlcbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9wb2ludCdcbmltcG9ydCB7IGdldERpc3RhbmNlIH0gZnJvbSAnLi9kaXN0YW5jZXMnXG5cbmV4cG9ydCBmdW5jdGlvbiBjbGFtcChtaW4sIG1heCwgdmFsKSB7XG4gIHJldHVybiBNYXRoLm1heChtaW4sIE1hdGgubWluKG1heCwgdmFsKSlcbn1cblxuLy9SZXR1cm4gY3Jvc3NpbmcgcG9pbnQgb2YgdHdvIGxpbmVzXG5leHBvcnQgZnVuY3Rpb24gZGlyZWN0Q3Jvc3NpbmcoTDFQMSwgTDFQMiwgTDJQMSwgTDJQMikge1xuICBsZXQgdGVtcCwgazEsIGsyLCBiMSwgYjIsIHgsIHlcbiAgaWYgKEwyUDEueCA9PT0gTDJQMi54KSB7XG4gICAgdGVtcCA9IEwyUDFcbiAgICBMMlAxID0gTDFQMVxuICAgIEwxUDEgPSB0ZW1wXG4gICAgdGVtcCA9IEwyUDJcbiAgICBMMlAyID0gTDFQMlxuICAgIEwxUDIgPSB0ZW1wXG4gIH1cbiAgaWYgKEwxUDEueCA9PT0gTDFQMi54KSB7XG4gICAgazIgPSAoTDJQMi55IC0gTDJQMS55KSAvIChMMlAyLnggLSBMMlAxLngpXG4gICAgYjIgPSAoTDJQMi54ICogTDJQMS55IC0gTDJQMS54ICogTDJQMi55KSAvIChMMlAyLnggLSBMMlAxLngpXG4gICAgeCA9IEwxUDEueFxuICAgIHkgPSB4ICogazIgKyBiMlxuICAgIHJldHVybiBuZXcgUG9pbnQoeCwgeSlcbiAgfSBlbHNlIHtcbiAgICBrMSA9IChMMVAyLnkgLSBMMVAxLnkpIC8gKEwxUDIueCAtIEwxUDEueClcbiAgICBiMSA9IChMMVAyLnggKiBMMVAxLnkgLSBMMVAxLnggKiBMMVAyLnkpIC8gKEwxUDIueCAtIEwxUDEueClcbiAgICBrMiA9IChMMlAyLnkgLSBMMlAxLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICBiMiA9IChMMlAyLnggKiBMMlAxLnkgLSBMMlAxLnggKiBMMlAyLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICB4ID0gKGIxIC0gYjIpIC8gKGsyIC0gazEpXG4gICAgeSA9IHggKiBrMSArIGIxXG4gICAgcmV0dXJuIG5ldyBQb2ludCh4LCB5KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZFRvU2VnbWVudChMUDEsIExQMiwgUCkge1xuICBsZXQgeCwgeVxuICB4ID0gY2xhbXAoTWF0aC5taW4oTFAxLngsIExQMi54KSwgTWF0aC5tYXgoTFAxLngsIExQMi54KSwgUC54KVxuICBpZiAoeCAhPT0gUC54KSB7XG4gICAgeSA9ICh4ID09PSBMUDEueCkgPyBMUDEueSA6IExQMi55XG4gICAgUCA9IG5ldyBQb2ludCh4LCB5KVxuICB9XG5cbiAgeSA9IGNsYW1wKE1hdGgubWluKExQMS55LCBMUDIueSksIE1hdGgubWF4KExQMS55LCBMUDIueSksIFAueSlcbiAgaWYgKHkgIT09IFAueSkge1xuICAgIHggPSAoeSA9PT0gTFAxLnkpID8gTFAxLnggOiBMUDIueFxuICAgIFAgPSBuZXcgUG9pbnQoeCwgeSlcbiAgfVxuXG4gIHJldHVybiBQXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZFRvTGluZShBLCBCLCBQKSB7XG4gIGNvbnN0IEFQID0gbmV3IFBvaW50KFAueCAtIEEueCwgUC55IC0gQS55KSxcbiAgICBBQiA9IG5ldyBQb2ludChCLnggLSBBLngsIEIueSAtIEEueSksXG4gICAgYWIyID0gQUIueCAqIEFCLnggKyBBQi55ICogQUIueSxcbiAgICBhcF9hYiA9IEFQLnggKiBBQi54ICsgQVAueSAqIEFCLnksXG4gICAgdCA9IGFwX2FiIC8gYWIyXG4gIHJldHVybiBuZXcgUG9pbnQoQS54ICsgQUIueCAqIHQsIEEueSArIEFCLnkgKiB0KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9pbnRPbkxpbmUoTFAxLCBMUDIsIHBlcmNlbnQpIHtcbiAgY29uc3QgZHggPSBMUDIueCAtIExQMS54LCBkeSA9IExQMi55IC0gTFAxLnlcbiAgcmV0dXJuIG5ldyBQb2ludChMUDEueCArIHBlcmNlbnQgKiBkeCwgTFAxLnkgKyBwZXJjZW50ICogZHkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb2ludE9uTGluZUJ5TGVuZ2h0KExQMSwgTFAyLCBsZW5naHQpIHtcbiAgY29uc3QgZHggPSBMUDIueCAtIExQMS54XG4gIGNvbnN0IGR5ID0gTFAyLnkgLSBMUDEueVxuICBjb25zdCBwZXJjZW50ID0gbGVuZ2h0IC8gZ2V0RGlzdGFuY2UoTFAxLCBMUDIpXG4gIHJldHVybiBuZXcgUG9pbnQoTFAxLnggKyBwZXJjZW50ICogZHgsIExQMS55ICsgcGVyY2VudCAqIGR5KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkUG9pbnRUb0JvdW5kUG9pbnRzKGJvdW5kcG9pbnRzLCBwb2ludCwgaXNSaWdodCkge1xuICBjb25zdCByZXN1bHQgPSBib3VuZHBvaW50cy5maWx0ZXIoKGJQb2ludCkgPT4ge1xuICAgIHJldHVybiBiUG9pbnQueSA+IHBvaW50LnkgfHwgKGlzUmlnaHQgPyBiUG9pbnQueCA8IHBvaW50LnggOiBiUG9pbnQueCA+IHBvaW50LngpXG4gIH0pXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHQubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAocG9pbnQueSA8IHJlc3VsdFtpXS55KSB7XG4gICAgICByZXN1bHQuc3BsaWNlKGksIDAsIHBvaW50KVxuICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbiAgfVxuICByZXN1bHQucHVzaChwb2ludClcbiAgcmV0dXJuIHJlc3VsdFxufVxuIiwiaW1wb3J0IFBvaW50IGZyb20gJy4vZ2VvbWV0cnkvcG9pbnQnXG5pbXBvcnQgeyBhZGRQb2ludFRvQm91bmRQb2ludHMgfSBmcm9tICcuL2dlb21ldHJ5L2JvdW5kcydcblxuaW1wb3J0IHtcbiAgaW5kZXhPZk5lYXJlc3RQb2ludCxcbiAgZ2V0RGlzdGFuY2Vcbn0gZnJvbSAnLi9nZW9tZXRyeS9kaXN0YW5jZXMnXG5cbmNsYXNzIEJhc2ljU3RyYXRlZ3kge1xuICBjb25zdHJ1Y3RvcihyZWN0YW5nbGUsIG9wdGlvbnM9e30pIHtcbiAgICB0aGlzLnJlY3RhbmdsZSA9IHJlY3RhbmdsZVxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNcbiAgfVxuXG4gIGdldCBib3VuZFJlY3QgKCkge1xuICAgIHJldHVybiB0eXBlb2YgdGhpcy5yZWN0YW5nbGUgPT09ICdmdW5jdGlvbicgPyB0aGlzLnJlY3RhbmdsZSgpIDogdGhpcy5yZWN0YW5nbGVcbiAgfVxufVxuXG5jbGFzcyBOb3RDcm9zc2luZ1N0cmF0ZWd5IGV4dGVuZHMgQmFzaWNTdHJhdGVneSB7XG4gIHBvc2l0aW9uaW5nIChyZWN0YW5nbGVMaXN0LCBpbmRleGVzT2ZOZXdzKSB7XG4gICAgY29uc3Qgc3RhdGljUmVjdGFuZ2xlSW5kZXhlcyA9IHJlY3RhbmdsZUxpc3QucmVkdWNlKChpbmRleGVzLCBfcmVjdCwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChpbmRleGVzT2ZOZXdzLmluZGV4T2YoaW5kZXgpID09PSAtMSkge1xuICAgICAgICBpbmRleGVzLnB1c2goaW5kZXgpXG4gICAgICB9XG4gICAgICByZXR1cm4gaW5kZXhlc1xuICAgIH0sIFtdKVxuXG4gICAgaW5kZXhlc09mTmV3cy5mb3JFYWNoKChpbmRleCkgPT4ge1xuICAgICAgbGV0IHJlY3QgPSByZWN0YW5nbGVMaXN0W2luZGV4XVxuICAgICAgbGV0IHJlbW92YWJsZSA9IGZhbHNlXG5cbiAgICAgIHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMuZm9yRWFjaCgoaW5kZXhPZlN0YXRpYykgPT4ge1xuICAgICAgICBjb25zdCBzdGF0aWNSZWN0ID0gcmVjdGFuZ2xlTGlzdFtpbmRleE9mU3RhdGljXVxuICAgICAgICByZWN0ID0gc3RhdGljUmVjdC5tb3ZlVG9Cb3VuZChyZWN0KVxuICAgICAgfSlcblxuICAgICAgcmVtb3ZhYmxlID0gc3RhdGljUmVjdGFuZ2xlSW5kZXhlcy5zb21lKChpbmRleE9mU3RhdGljKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YXRpY1JlY3QgPSByZWN0YW5nbGVMaXN0W2luZGV4T2ZTdGF0aWNdXG4gICAgICAgIHJldHVybiAgISFzdGF0aWNSZWN0LmFuZChyZWN0KVxuICAgICAgfSkgfHwgcmVjdC5hbmQodGhpcy5ib3VuZFJlY3QpLmdldFNxdWFyZSgpICE9PSByZWN0LmdldFNxdWFyZSgpXG5cbiAgICAgIGlmIChyZW1vdmFibGUpIHtcbiAgICAgICAgcmVjdC5yZW1vdmFibGUgPSB0cnVlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0aWNSZWN0YW5nbGVJbmRleGVzLnB1c2goaW5kZXgpXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcmVjdGFuZ2xlTGlzdFxuICB9XG5cbiAgc29ydGluZyhvZGxEcmFnZ2FibGVzTGlzdCwgbmV3RHJhZ2dhYmxlcywgaW5kZXhPZk5ld3MpIHtcbiAgICBjb25zdCBkcmFnZ2FibGVzID0gb2RsRHJhZ2dhYmxlc0xpc3QuY29uY2F0KG5ld0RyYWdnYWJsZXMpXG4gICAgbmV3RHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGluZGV4T2ZOZXdzLnB1c2goZHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkpXG4gICAgfSlcbiAgICByZXR1cm4gZHJhZ2dhYmxlc1xuICB9XG59XG5cbmNsYXNzIEZsb2F0TGVmdFN0cmF0ZWd5IGV4dGVuZHMgQmFzaWNTdHJhdGVneSB7XG4gIGNvbnN0cnVjdG9yKHJlY3RhbmdsZSwgb3B0aW9ucz17fSkge1xuICAgIHN1cGVyKHJlY3RhbmdsZSwgb3B0aW9ucylcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHJlbW92YWJsZTogdHJ1ZVxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0aGlzLnJhZGl1cyA9IG9wdGlvbnMucmFkaXVzIHx8IDgwXG5cbiAgICB0aGlzLnBhZGRpbmdUb3BMZWZ0ID0gb3B0aW9ucy5wYWRkaW5nVG9wTGVmdCB8fCBuZXcgUG9pbnQoMCwgMClcbiAgICB0aGlzLnBhZGRpbmdCb3R0b21SaWdodCA9IG9wdGlvbnMucGFkZGluZ0JvdHRvbVJpZ2h0IHx8IG5ldyBQb2ludCgwLCAwKVxuICAgIHRoaXMueUdhcEJldHdlZW5EcmFnZ2FibGVzID0gb3B0aW9ucy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgfHwgMFxuXG4gICAgdGhpcy5nZXREaXN0YW5jZSA9IG9wdGlvbnMuZ2V0RGlzdGFuY2UgfHwgZ2V0RGlzdGFuY2VcbiAgICB0aGlzLmdldFBvc2l0aW9uID0gb3B0aW9ucy5nZXRQb3NpdGlvbiB8fCAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnBvc2l0aW9uKVxuICB9XG5cbiAgcG9zaXRpb25pbmcocmVjdGFuZ2xlTGlzdCwgX2luZGV4ZXNPZk5ld3MpIHtcbiAgICBjb25zdCBib3VuZFJlY3QgPSB0aGlzLmJvdW5kUmVjdFxuICAgIGNvbnN0IHJlY3RQMiA9IGJvdW5kUmVjdC5nZXRQMigpXG4gICAgbGV0IGJvdW5kYXJ5UG9pbnRzID0gW2JvdW5kUmVjdC5wb3NpdGlvbl1cblxuICAgIHJlY3RhbmdsZUxpc3QuZm9yRWFjaCgocmVjdCwgcmVjdEluZGV4KSA9PiB7XG4gICAgICBsZXQgcG9zaXRpb24sIGlzVmFsaWQgPSBmYWxzZVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib3VuZGFyeVBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBwb3NpdGlvbiA9IG5ldyBQb2ludChcbiAgICAgICAgICBib3VuZGFyeVBvaW50c1tpXS54ICsgdGhpcy5wYWRkaW5nVG9wTGVmdC54LFxuICAgICAgICAgIGkgPiAwID8gKGJvdW5kYXJ5UG9pbnRzW2kgLSAxXS55ICsgdGhpcy55R2FwQmV0d2VlbkRyYWdnYWJsZXMpIDogKGJvdW5kUmVjdC5wb3NpdGlvbi55ICsgdGhpcy5wYWRkaW5nVG9wTGVmdC55KVxuICAgICAgICApXG5cbiAgICAgICAgaXNWYWxpZCA9IChwb3NpdGlvbi54ICsgcmVjdC5zaXplLnggPCByZWN0UDIueClcblxuICAgICAgICBpZiAoaXNWYWxpZCkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICAgIHBvc2l0aW9uID0gbmV3IFBvaW50KFxuICAgICAgICAgIGJvdW5kUmVjdC5wb3NpdGlvbi54ICsgdGhpcy5wYWRkaW5nVG9wTGVmdC54LFxuICAgICAgICAgIGJvdW5kYXJ5UG9pbnRzW2JvdW5kYXJ5UG9pbnRzLmxlbmd0aCAtIDFdLnkgKyAocmVjdEluZGV4ID4gMCA/IHRoaXMueUdhcEJldHdlZW5EcmFnZ2FibGVzIDogdGhpcy5wYWRkaW5nVG9wTGVmdC55KVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHJlY3QucG9zaXRpb24gPSBwb3NpdGlvblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZW1vdmFibGUgJiYgcmVjdC5nZXRQMygpLnkgPiBib3VuZFJlY3QuZ2V0UDMoKS55KSB7XG4gICAgICAgIHJlY3QucmVtb3ZhYmxlID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBib3VuZGFyeVBvaW50cyA9IGFkZFBvaW50VG9Cb3VuZFBvaW50cyhib3VuZGFyeVBvaW50cywgcmVjdC5nZXRQMygpLmFkZCh0aGlzLnBhZGRpbmdCb3R0b21SaWdodCkpXG4gICAgfSlcbiAgICByZXR1cm4gcmVjdGFuZ2xlTGlzdFxuICB9XG5cbiAgc29ydGluZyhvZGxEcmFnZ2FibGVzTGlzdCwgbmV3RHJhZ2dhYmxlcywgaW5kZXhPZk5ld3MpIHtcbiAgICBjb25zdCBuZXdMaXN0ID0gb2RsRHJhZ2dhYmxlc0xpc3QuY29uY2F0KClcbiAgICBjb25zdCBsaXN0T2xkUG9zaXRpb24gPSBvZGxEcmFnZ2FibGVzTGlzdC5tYXAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLmdldFBvc2l0aW9uKCkpXG4gICAgbmV3RHJhZ2dhYmxlcy5mb3JFYWNoKChuZXdEcmFnZ2FibGUpID0+IHtcbiAgICAgIGxldCBpbmRleCA9IGluZGV4T2ZOZWFyZXN0UG9pbnQobGlzdE9sZFBvc2l0aW9uLCB0aGlzLmdldFBvc2l0aW9uKG5ld0RyYWdnYWJsZSksIHRoaXMucmFkaXVzLCB0aGlzLmdldERpc3RhbmNlKVxuICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICBpbmRleCA9IG5ld0xpc3QubGVuZ3RoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbmRleCA9IG5ld0xpc3QuaW5kZXhPZihvZGxEcmFnZ2FibGVzTGlzdFtpbmRleF0pXG4gICAgICB9XG4gICAgICBuZXdMaXN0LnNwbGljZShpbmRleCwgMCwgbmV3RHJhZ2dhYmxlKVxuICAgIH0pXG4gICAgbmV3RHJhZ2dhYmxlcy5mb3JFYWNoKChuZXdEcmFnZ2FibGUpID0+IHtcbiAgICAgIGluZGV4T2ZOZXdzLnB1c2gobmV3TGlzdC5pbmRleE9mKG5ld0RyYWdnYWJsZSkpXG4gICAgfSlcbiAgICByZXR1cm4gbmV3TGlzdFxuICB9XG59XG5cbmNsYXNzIEZsb2F0UmlnaHRTdHJhdGVneSBleHRlbmRzIEZsb2F0TGVmdFN0cmF0ZWd5IHtcbiAgY29uc3RydWN0b3IocmVjdGFuZ2xlLCBvcHRpb25zPXt9KSB7XG4gICAgc3VwZXIocmVjdGFuZ2xlLCBvcHRpb25zKVxuXG4gICAgdGhpcy5wYWRkaW5nVG9wUmlnaHQgPSBvcHRpb25zLnBhZGRpbmdUb3BSaWdodCB8fCBuZXcgUG9pbnQoNSwgNSlcbiAgICB0aGlzLnBhZGRpbmdCb3R0b21MZWZ0ID0gb3B0aW9ucy5wYWRkaW5nQm90dG9tTGVmdCB8fCBuZXcgUG9pbnQoMCwgMClcbiAgICB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyA9IG9wdGlvbnMueUdhcEJldHdlZW5EcmFnZ2FibGVzIHx8IDBcblxuICAgIHRoaXMucGFkZGluZ0JvdHRvbU5lZ0xlZnQgPSBuZXcgUG9pbnQoLXRoaXMucGFkZGluZ0JvdHRvbUxlZnQueCwgdGhpcy5wYWRkaW5nQm90dG9tTGVmdC55KVxuICB9XG5cbiAgcG9zaXRpb25pbmcocmVjdGFuZ2xlTGlzdCwgX2luZGV4ZXNPZk5ld3MpIHtcbiAgICBjb25zdCBib3VuZFJlY3QgPSB0aGlzLmJvdW5kUmVjdFxuICAgIGxldCBib3VuZGFyeVBvaW50cyA9IFtib3VuZFJlY3QuZ2V0UDIoKV1cblxuICAgIHJlY3RhbmdsZUxpc3QuZm9yRWFjaCgocmVjdCwgcmVjdEluZGV4KSA9PiB7XG4gICAgICBsZXQgcG9zaXRpb24sIGlzVmFsaWQgPSBmYWxzZVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib3VuZGFyeVBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBwb3NpdGlvbiA9IG5ldyBQb2ludChcbiAgICAgICAgICBib3VuZGFyeVBvaW50c1tpXS54IC0gcmVjdC5zaXplLnggLSB0aGlzLnBhZGRpbmdUb3BSaWdodC54LFxuICAgICAgICAgIGkgPiAwID8gKGJvdW5kYXJ5UG9pbnRzW2kgLSAxXS55ICsgdGhpcy55R2FwQmV0d2VlbkRyYWdnYWJsZXMpIDogKGJvdW5kUmVjdC5wb3NpdGlvbi55ICsgdGhpcy5wYWRkaW5nVG9wUmlnaHQueSlcbiAgICAgICAgKVxuXG4gICAgICAgIGlzVmFsaWQgPSAocG9zaXRpb24ueCA+IHJlY3QucG9zaXRpb24ueClcbiAgICAgICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgcG9zaXRpb24gPSBuZXcgUG9pbnQoXG4gICAgICAgICAgYm91bmRSZWN0LmdldFAyKCkueCAgLSByZWN0LnNpemUueCAtIHRoaXMucGFkZGluZ1RvcFJpZ2h0LngsXG4gICAgICAgICAgYm91bmRhcnlQb2ludHNbYm91bmRhcnlQb2ludHMubGVuZ3RoIC0gMV0ueSArIChyZWN0SW5kZXggPiAwID8gdGhpcy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgOiB0aGlzLnBhZGRpbmdUb3BSaWdodC55KVxuICAgICAgICApXG4gICAgICB9XG4gICAgICByZWN0LnBvc2l0aW9uID0gcG9zaXRpb25cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucmVtb3ZhYmxlICYmIHJlY3QuZ2V0UDQoKS55ID4gYm91bmRSZWN0LmdldFA0KCkueSkge1xuICAgICAgICByZWN0LnJlbW92YWJsZSA9IHRydWVcbiAgICAgIH1cbiAgICAgIGJvdW5kYXJ5UG9pbnRzID0gYWRkUG9pbnRUb0JvdW5kUG9pbnRzKGJvdW5kYXJ5UG9pbnRzLCByZWN0LmdldFA0KCkuYWRkKHRoaXMucGFkZGluZ0JvdHRvbU5lZ0xlZnQpLCB0cnVlKVxuICAgIH0pXG4gICAgcmV0dXJuIHJlY3RhbmdsZUxpc3RcbiAgfVxufVxuXG5leHBvcnQgeyBOb3RDcm9zc2luZ1N0cmF0ZWd5LCBGbG9hdExlZnRTdHJhdGVneSwgRmxvYXRSaWdodFN0cmF0ZWd5IH1cbiIsImltcG9ydCBQb2ludCBmcm9tICcuL3BvaW50J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QW5nbGVEaWZmKGFscGhhLCBiZXRhKSB7XG4gIGNvbnN0IG1pbkFuZ2xlID0gTWF0aC5taW4oYWxwaGEsIGJldGEpXG4gIGNvbnN0IG1heEFuZ2xlID0gIE1hdGgubWF4KGFscGhhLCBiZXRhKVxuICByZXR1cm4gTWF0aC5taW4obWF4QW5nbGUgLSBtaW5BbmdsZSwgbWluQW5nbGUgKyBNYXRoLlBJKjIgLSBtYXhBbmdsZSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFuZ2xlKHAxLCBwMikge1xuICBjb25zdCBkaWZmID0gcDIuc3ViKHAxKVxuICByZXR1cm4gbm9ybWFsaXplQW5nbGUoTWF0aC5hdGFuMihkaWZmLnksIGRpZmYueCkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b1JhZGlhbihhbmdsZSkge1xuICByZXR1cm4gKChhbmdsZSAlIDM2MCkgKiBNYXRoLlBJIC8gMTgwKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9EZWdyZWUoYW5nbGUpIHtcbiAgcmV0dXJuIChhbmdsZSAqIDE4MCAvIE1hdGguUEkpICUgMzYwXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZEFuZ2xlKG1pbiwgbWF4LCB2YWwpIHtcbiAgbGV0IGRtaW4sIGRtYXhcbiAgaWYgKG1pbiA8IG1heCAmJiB2YWwgPiBtaW4gJiYgdmFsIDwgbWF4KSB7XG4gICAgcmV0dXJuIHZhbFxuICB9IGVsc2UgaWYgKG1heCA8IG1pbiAmJiAodmFsIDwgbWF4IHx8IHZhbCA+IG1pbikpIHtcbiAgICByZXR1cm4gdmFsXG4gIH0gZWxzZSB7XG4gICAgZG1pbiA9IGdldEFuZ2xlRGlmZihtaW4sIHZhbClcbiAgICBkbWF4ID0gZ2V0QW5nbGVEaWZmKG1heCwgdmFsKVxuICAgIGlmIChkbWluIDwgZG1heCkge1xuICAgICAgcmV0dXJuIG1pblxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbWF4XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROZWFyZXN0QW5nbGUoYXJyLCBhbmdsZSkge1xuICBsZXQgaSwgdGVtcCwgZGlmZiA9IE1hdGguUEkgKiAyLCB2YWx1ZVxuICBmb3IgKGkgPSAwOyBpIDwgYXJyLmxlbmd0aDtpKyspIHtcbiAgICB0ZW1wID0gZ2V0QW5nbGVEaWZmKGFycltpXSwgYW5nbGUpXG4gICAgaWYgKGRpZmYgPCB0ZW1wKSB7XG4gICAgICBkaWZmID0gdGVtcFxuICAgICAgdmFsdWUgPSBhcnJbaV1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHZhbHVlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVBbmdsZSh2YWwpIHtcbiAgd2hpbGUgKHZhbCA8IDApIHtcbiAgICB2YWwgKz0gMiAqIE1hdGguUElcbiAgfVxuICB3aGlsZSAodmFsID4gMiAqIE1hdGguUEkpIHtcbiAgICB2YWwgLT0gMiAqIE1hdGguUElcbiAgfVxuICByZXR1cm4gdmFsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oYW5nbGUsIGxlbmd0aCwgY2VudGVyKSB7XG4gIGNlbnRlciA9IGNlbnRlciB8fCBuZXcgUG9pbnQoMCwgMClcbiAgcmV0dXJuIGNlbnRlci5hZGQobmV3IFBvaW50KGxlbmd0aCAqIE1hdGguY29zKGFuZ2xlKSwgbGVuZ3RoICogTWF0aC5zaW4oYW5nbGUpKSlcbn1cbiIsImltcG9ydCBQb2ludCBmcm9tICcuL2dlb21ldHJ5L3BvaW50J1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tICcuL2dlb21ldHJ5L3JlY3RhbmdsZSdcbmltcG9ydCB7XG4gIGdldFBvaW50T25MaW5lQnlMZW5naHQsXG4gIGRpcmVjdENyb3NzaW5nLFxuICBib3VuZFRvTGluZVxufSBmcm9tICcuL2dlb21ldHJ5L2JvdW5kcydcblxuaW1wb3J0IHtcbiAgZ2V0QW5nbGUsXG4gIG5vcm1hbGl6ZUFuZ2xlLFxuICBib3VuZEFuZ2xlLFxuICBnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW1cbn0gZnJvbSAnLi9nZW9tZXRyeS9hbmdsZXMnXG5cbmV4cG9ydCBjbGFzcyBCb3VuZCB7XG4gIGNvbnN0cnVjdG9yICgpIHt9XG5cbiAgYm91bmQocG9pbnQsIF9zaXplKSB7XG4gICAgcmV0dXJuIHBvaW50XG4gIH1cblxuICByZWZyZXNoICgpIHt9XG5cbiAgc3RhdGljIGJvdW5kaW5nKCkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IHRoaXMoLi4uYXJndW1lbnRzKVxuICAgIHJldHVybiBpbnN0YW5jZS5ib3VuZC5iaW5kKGluc3RhbmNlKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvUmVjdGFuZ2xlIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3RvcihyZWN0YW5nbGUpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5yZWN0YW5nbGUgPSByZWN0YW5nbGVcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgY2FsY1BvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIGNvbnN0IHJlY3RQMiA9IHRoaXMucmVjdGFuZ2xlLmdldFAzKClcblxuICAgIGlmICh0aGlzLnJlY3RhbmdsZS5wb3NpdGlvbi54ID4gY2FsY1BvaW50LngpIHtcbiAgICAgIChjYWxjUG9pbnQueCA9IHRoaXMucmVjdGFuZ2xlLnBvc2l0aW9uLngpXG4gICAgfVxuICAgIGlmICh0aGlzLnJlY3RhbmdsZS5wb3NpdGlvbi55ID4gY2FsY1BvaW50LnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gdGhpcy5yZWN0YW5nbGUucG9zaXRpb24ueVxuICAgIH1cbiAgICBpZiAocmVjdFAyLnggPCBjYWxjUG9pbnQueCArIHNpemUueCkge1xuICAgICAgY2FsY1BvaW50LnggPSByZWN0UDIueCAtIHNpemUueFxuICAgIH1cbiAgICBpZiAocmVjdFAyLnkgPCBjYWxjUG9pbnQueSArIHNpemUueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSByZWN0UDIueSAtIHNpemUueVxuICAgIH1cblxuICAgIHJldHVybiBjYWxjUG9pbnRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb0VsZW1lbnQgZXh0ZW5kcyBCb3VuZFRvUmVjdGFuZ2xlIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29udGFpbmVyKSB7XG4gICAgc3VwZXIoUmVjdGFuZ2xlLmZyb21FbGVtZW50KGVsZW1lbnQsIGNvbnRhaW5lcikpXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyXG4gIH1cblxuICByZWZyZXNoICgpIHtcbiAgICB0aGlzLnJlY3RhbmdsZSA9IFJlY3RhbmdsZS5mcm9tRWxlbWVudCh0aGlzLmVsZW1lbnQsIHRoaXMuY29udGFpbmVyKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvTGluZVggZXh0ZW5kcyBCb3VuZCB7XG4gIGNvbnN0cnVjdG9yKHgsIHN0YXJ0WSwgZW5kWSkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnggPSB4XG4gICAgdGhpcy5zdGFydFkgPSBzdGFydFlcbiAgICB0aGlzLmVuZFkgPSBlbmRZXG4gIH1cblxuICBib3VuZChwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IGNhbGNQb2ludCA9IHBvaW50LmNsb25lKClcblxuICAgIGNhbGNQb2ludC54ID0gdGhpcy54XG4gICAgaWYgKHRoaXMuc3RhcnRZID4gY2FsY1BvaW50LnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gdGhpcy5zdGFydFlcbiAgICB9XG4gICAgaWYgKHRoaXMuZW5kWSA8IGNhbGNQb2ludC55ICsgc2l6ZS55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHRoaXMuZW5kWSAtIHNpemUueVxuICAgIH1cblxuICAgIHJldHVybiBjYWxjUG9pbnRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb0xpbmVZIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3Rvcih5LCBzdGFydFgsIGVuZFgpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy55ID0geVxuICAgIHRoaXMuc3RhcnRYID0gc3RhcnRYXG4gICAgdGhpcy5lbmRYID0gZW5kWFxuICB9XG5cbiAgYm91bmQocG9pbnQsIHNpemUpIHtcbiAgICBjb25zdCBjYWxjUG9pbnQgPSBwb2ludC5jbG9uZSgpXG4gICAgY2FsY1BvaW50LnkgPSB0aGlzLnlcbiAgICBpZiAodGhpcy5zdGFydFggPiBjYWxjUG9pbnQueCkge1xuICAgICAgY2FsY1BvaW50LnggPSB0aGlzLnN0YXJ0WFxuICAgIH1cbiAgICBpZiAodGhpcy5lbmRYIDwgY2FsY1BvaW50LnggKyBzaXplLngpIHtcbiAgICAgIGNhbGNQb2ludC54ID0gdGhpcy5lbmRYIC0gc2l6ZS54XG4gICAgfVxuICAgIHJldHVybiBjYWxjUG9pbnRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb0xpbmUgZXh0ZW5kcyBCb3VuZCB7XG4gIGNvbnN0cnVjdG9yKHN0YXJ0UG9pbnQsIGVuZFBvaW50KSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuc3RhcnRQb2ludCA9IHN0YXJ0UG9pbnRcbiAgICB0aGlzLmVuZFBvaW50ID0gZW5kUG9pbnRcbiAgICBjb25zdCBhbHBoYSA9IE1hdGguYXRhbjIoZW5kUG9pbnQueSAtIHN0YXJ0UG9pbnQueSwgZW5kUG9pbnQueCAtIHN0YXJ0UG9pbnQueClcbiAgICBjb25zdCBiZXRhID0gYWxwaGEgKyBNYXRoLlBJIC8gMlxuICAgIHRoaXMuc29tZUsgPSAxMFxuICAgIHRoaXMuY29zQmV0YSA9IE1hdGguY29zKGJldGEpXG4gICAgdGhpcy5zaW5CZXRhID0gTWF0aC5zaW4oYmV0YSlcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgcG9pbnQyID0gbmV3IFBvaW50KFxuICAgICAgcG9pbnQueCArIHRoaXMuc29tZUsgKiB0aGlzLmNvc0JldGEsXG4gICAgICBwb2ludC55ICsgdGhpcy5zb21lSyAqIHRoaXMuc2luQmV0YVxuICAgIClcblxuICAgIGNvbnN0IG5ld0VuZFBvaW50ID0gZ2V0UG9pbnRPbkxpbmVCeUxlbmdodCh0aGlzLmVuZFBvaW50LCB0aGlzLnN0YXJ0UG9pbnQsIHNpemUueClcbiAgICBjb25zdCBwb2ludENyb3NzaW5nID0gZGlyZWN0Q3Jvc3NpbmcodGhpcy5zdGFydFBvaW50LCB0aGlzLmVuZFBvaW50LCBwb2ludCwgcG9pbnQyKVxuXG4gICAgcmV0dXJuIGJvdW5kVG9MaW5lKHRoaXMuc3RhcnRQb2ludCwgbmV3RW5kUG9pbnQsIHBvaW50Q3Jvc3NpbmcpXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9DaXJjbGUgZXh0ZW5kcyBCb3VuZCB7XG4gIGNvbnN0cnVjdG9yKGNlbnRlciwgcmFkaXVzKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuY2VudGVyID0gY2VudGVyXG4gICAgdGhpcy5yYWRpdXMgPSByYWRpdXNcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBfc2l6ZSkge1xuICAgIHJldHVybiBnZXRQb2ludE9uTGluZUJ5TGVuZ2h0KHRoaXMuY2VudGVyLCBwb2ludCwgdGhpcy5yYWRpdXMpXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9BcmMgZXh0ZW5kcyBCb3VuZFRvQ2lyY2xlIHtcbiAgY29uc3RydWN0b3IoY2VudGVyLCByYWRpdXMsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlKSB7XG4gICAgc3VwZXIoY2VudGVyLCByYWRpdXMpXG4gICAgdGhpcy5fc3RhcnRBbmdsZSA9IHN0YXJ0QW5nbGVcbiAgICB0aGlzLl9lbmRBbmdsZSA9IGVuZEFuZ2xlXG4gIH1cblxuICBzdGFydEFuZ2xlKCkge1xuICAgIHJldHVybiB0eXBlb2YgdGhpcy5fc3RhcnRBbmdsZSA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMuX3N0YXJ0QW5nbGUoKSA6IHRoaXMuX3N0YXJ0QW5nbGVcbiAgfVxuXG4gIGVuZEFuZ2xlKCkge1xuICAgIHJldHVybiB0eXBlb2YgdGhpcy5fZW5kQW5nbGUgPT09ICdmdW5jdGlvbicgPyB0aGlzLl9lbmRBbmdsZSgpIDogdGhpcy5fZW5kQW5nbGVcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBfc2l6ZSkge1xuICAgIGxldCBhbmdsZSA9IGdldEFuZ2xlKHRoaXMuY2VudGVyLCBwb2ludClcbiAgICBhbmdsZSA9IG5vcm1hbGl6ZUFuZ2xlKGFuZ2xlKVxuICAgIGFuZ2xlID0gYm91bmRBbmdsZSh0aGlzLnN0YXJ0QW5nbGUoKSwgdGhpcy5lbmRBbmdsZSgpLCBhbmdsZSlcbiAgICByZXR1cm4gZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKGFuZ2xlLCB0aGlzLnJhZGl1cywgdGhpcy5jZW50ZXIpXG4gIH1cbn1cbiIsImltcG9ydCByYW5nZSBmcm9tICcuL3V0aWxzL3JhbmdlLmpzJ1xuaW1wb3J0IHJlbW92ZUl0ZW0gZnJvbSAnLi91dGlscy9yZW1vdmUtYXJyYXktaXRlbSdcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudEVtaXR0ZXInXG5pbXBvcnQgZGlzcGF0Y2hEb21FdmVudCBmcm9tICcuL3V0aWxzL2Rpc3BhdGNoLWRvbS1ldmVudCdcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSAnLi9nZW9tZXRyeS9yZWN0YW5nbGUnXG5pbXBvcnQgeyB0cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5IH0gZnJvbSAnLi9nZW9tZXRyeS9kaXN0YW5jZXMnXG5pbXBvcnQgeyBzY29wZXMsIGN1cnJlbnRTY29wZSB9IGZyb20gJy4vc2NvcGUnXG5cbmltcG9ydCB7IEZsb2F0TGVmdFN0cmF0ZWd5IH0gZnJvbSAnLi9wb3NpdGlvbmluZydcbmltcG9ydCB7IEJvdW5kVG9FbGVtZW50IH0gZnJvbSAnLi9ib3VuZGluZydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFyZ2V0IGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgZHJhZ2dhYmxlcywgb3B0aW9ucyA9IHt9KSB7XG4gICAgc3VwZXIob3B0aW9ucylcbiAgICBjb25zdCB0YXJnZXQgPSB0aGlzXG5cbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHRpbWVFbmQ6IDIwMCxcbiAgICAgIHRpbWVFeGNhbmdlOiA0MDBcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGhpcy5wb3NpdGlvbmluZ1N0cmF0ZWd5ID0gb3B0aW9ucy5zdHJhdGVneSB8fCBuZXcgRmxvYXRMZWZ0U3RyYXRlZ3koXG4gICAgICB0aGlzLmdldFJlY3RhbmdsZS5iaW5kKHRoaXMpLFxuICAgICAge1xuICAgICAgICByYWRpdXM6IDgwLFxuICAgICAgICBnZXREaXN0YW5jZTogdHJhbnNmb3JtZWRTcGFjZURpc3RhbmNlRmFjdG9yeSh7IHg6IDEsIHk6IDQgfSksXG4gICAgICAgIHJlbW92YWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIClcblxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgICB0aGlzLnJlbW92ZU9uTW92ZUNvbnRyb2xsZXJzID0gbmV3IE1hcCgpXG4gICAgZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS50YXJnZXRzLnB1c2godGFyZ2V0KSlcbiAgICB0aGlzLmRyYWdnYWJsZXMgPSBkcmFnZ2FibGVzXG5cbiAgICBjdXJyZW50U2NvcGUoKS5hZGRUYXJnZXQodGhpcylcblxuICAgIHRoaXMuc3RhcnRCb3VuZGluZygpXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIHN0YXJ0Qm91bmRpbmcoKSB7XG4gICAgdGhpcy5ib3VuZCA9IHRoaXMub3B0aW9ucy5ib3VuZCB8fCBCb3VuZFRvRWxlbWVudC5ib3VuZGluZyh0aGlzLmVsZW1lbnQpXG4gIH1cblxuICBwb3NpdGlvbmluZyAoZHJhZ2dhYmxlcywgaW5kZXhlc09mTmV3KSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25pbmdTdHJhdGVneS5wb3NpdGlvbmluZyhkcmFnZ2FibGVzLCBpbmRleGVzT2ZOZXcpXG4gIH1cblxuICBzb3J0aW5nIChvbGREcmFnZ2FibGVzLCBuZXdEcmFnZ2FibGVzLCBpbmRleE9mTmV3cykge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uaW5nU3RyYXRlZ3kuc29ydGluZyhvbGREcmFnZ2FibGVzLCBuZXdEcmFnZ2FibGVzLCBpbmRleE9mTmV3cylcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgbGV0IHJlY3RhbmdsZXMsIGluZGV4ZXNPZk5ld1xuXG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMgPSB0aGlzLmRyYWdnYWJsZXMuZmlsdGVyKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGxldCBlbGVtZW50ID0gZHJhZ2dhYmxlLmVsZW1lbnQucGFyZW50Tm9kZVxuICAgICAgd2hpbGUgKGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQgPT09IHRoaXMuZWxlbWVudCkge1xuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfSlcblxuICAgIGlmICh0aGlzLmlubmVyRHJhZ2dhYmxlcy5sZW5ndGgpIHtcbiAgICAgIGluZGV4ZXNPZk5ldyA9IHJhbmdlKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmxlbmd0aClcbiAgICAgIHJlY3RhbmdsZXMgPSB0aGlzLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICAgIH0pLCBpbmRleGVzT2ZOZXcpXG4gICAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIGluZGV4ZXNPZk5ldylcbiAgICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gdGhpcy5lbWl0VGFyZ2V0RXZlbnQoJ2FkZCcsIGRyYWdnYWJsZSkpXG4gICAgfVxuICB9XG5cbiAgZ2V0UmVjdGFuZ2xlKCkge1xuICAgIHJldHVybiBSZWN0YW5nbGUuZnJvbUVsZW1lbnQodGhpcy5lbGVtZW50LCB0aGlzLmNvbnRhaW5lciwgdHJ1ZSlcbiAgfVxuXG4gIGNhdGNoRHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuY2F0Y2hEcmFnZ2FibGUpIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuY2F0Y2hEcmFnZ2FibGUodGhpcywgZHJhZ2dhYmxlKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0YXJnZXRSZWN0YW5nbGUgPSB0aGlzLmdldFJlY3RhbmdsZSgpXG4gICAgICBjb25zdCBkcmFnZ2FibGVTcXVhcmUgPSBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKCkuZ2V0U3F1YXJlKClcblxuICAgICAgcmV0dXJuIGRyYWdnYWJsZVNxdWFyZSA8IHRhcmdldFJlY3RhbmdsZS5nZXRTcXVhcmUoKVxuICAgICAgICAgICAgICAmJiB0YXJnZXRSZWN0YW5nbGUuaW5jbHVkZVBvaW50KGRyYWdnYWJsZS5nZXRDZW50ZXIoKSlcbiAgICB9XG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRSZWN0YW5nbGUoKS5wb3NpdGlvblxuICB9XG5cbiAgZ2V0U2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRSZWN0YW5nbGUoKS5zaXplXG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHNjb3Blcy5mb3JFYWNoKChzY29wZSkgPT4gcmVtb3ZlSXRlbShzY29wZS50YXJnZXRzLCB0aGlzKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgW10pXG4gICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBbXSwgMClcbiAgfVxuXG4gIG9uRW5kKGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IG5ld0RyYWdnYWJsZXNJbmRleCA9IFtdXG5cbiAgICBpZiAodGhpcy5nZXRSZWN0YW5nbGUoKS5pbmNsdWRlUG9pbnQoZHJhZ2dhYmxlLmdldENlbnRlcigpKSkge1xuICAgICAgZHJhZ2dhYmxlLnBvc2l0aW9uID0gdGhpcy5ib3VuZChkcmFnZ2FibGUucG9zaXRpb24sIGRyYWdnYWJsZS5nZXRTaXplKCkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHRoaXMuZW1pdFRhcmdldEV2ZW50KCdiZWZvcmVBZGQnLCBkcmFnZ2FibGUpXG5cbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcyA9IHRoaXMuc29ydGluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcywgW2RyYWdnYWJsZV0sIG5ld0RyYWdnYWJsZXNJbmRleClcbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBuZXdEcmFnZ2FibGVzSW5kZXgpXG5cbiAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIG5ld0RyYWdnYWJsZXNJbmRleClcbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMSkge1xuICAgICAgdGhpcy5hZGRSZW1vdmVPbk1vdmUoZHJhZ2dhYmxlKVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgaW5kZXhlc09mTmV3LCB0aW1lKSB7XG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuc2xpY2UoMCkuZm9yRWFjaCgoZHJhZ2dhYmxlLCBpKSA9PiB7XG4gICAgICBjb25zdCByZWN0ID0gcmVjdGFuZ2xlc1tpXSxcbiAgICAgICAgdGltZUVuZCA9IHRpbWUgfHwgdGltZSA9PT0gMCA/IHRpbWUgOiBpbmRleGVzT2ZOZXcuaW5kZXhPZihpKSAhPT0gLTEgPyB0aGlzLm9wdGlvbnMudGltZUVuZCA6IHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZVxuXG4gICAgICBpZiAocmVjdC5yZW1vdmFibGUpIHtcbiAgICAgICAgZHJhZ2dhYmxlLm1vdmUoZHJhZ2dhYmxlLmluaXRpYWxQb3NpdGlvbiwgdGltZUVuZCwgdHJ1ZSwgdHJ1ZSlcbiAgICAgICAgdGhpcy5zdG9wUmVtb3ZlT25Nb3ZlKGRyYWdnYWJsZSlcbiAgICAgICAgcmVtb3ZlSXRlbSh0aGlzLmlubmVyRHJhZ2dhYmxlcywgZHJhZ2dhYmxlKVxuICAgICAgICB0aGlzLmVtaXRUYXJnZXRFdmVudCgncmVtb3ZlJywgZHJhZ2dhYmxlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZHJhZ2dhYmxlLm1vdmUocmVjdC5wb3NpdGlvbiwgdGltZUVuZCwgdHJ1ZSwgdHJ1ZSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgYWRkKGRyYWdnYWJsZSwgdGltZSkge1xuICAgIGNvbnN0IG5ld0RyYWdnYWJsZXNJbmRleCA9IHRoaXMuaW5uZXJEcmFnZ2FibGVzLmxlbmd0aFxuXG4gICAgdGhpcy5lbWl0VGFyZ2V0RXZlbnQoJ2JlZm9yZUFkZCcsIGRyYWdnYWJsZSlcblxuICAgIHRoaXMucHVzaElubmVyRHJhZ2dhYmxlKGRyYWdnYWJsZSlcbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBuZXdEcmFnZ2FibGVzSW5kZXgsIGRyYWdnYWJsZSlcblxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgW25ld0RyYWdnYWJsZXNJbmRleF0sIHRpbWUgfHwgMClcbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMSkge1xuICAgICAgdGhpcy5hZGRSZW1vdmVPbk1vdmUoZHJhZ2dhYmxlKVxuICAgIH1cbiAgfVxuXG4gIHB1c2hJbm5lckRyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpPT09LTEpIHtcbiAgICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxuICAgIH1cbiAgfVxuXG4gIGFkZFJlbW92ZU9uTW92ZShkcmFnZ2FibGUpIHtcbiAgICB0aGlzLnN0b3BSZW1vdmVPbk1vdmUoZHJhZ2dhYmxlKVxuICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKClcbiAgICBkcmFnZ2FibGUuYWRkRXZlbnRMaXN0ZW5lcignZHJhZzptb3ZlJywgKCkgPT4gdGhpcy5yZW1vdmUoZHJhZ2dhYmxlKSwgeyBzaWduYWw6IGNvbnRyb2xsZXIuc2lnbmFsIH0pXG4gICAgdGhpcy5yZW1vdmVPbk1vdmVDb250cm9sbGVycy5zZXQoZHJhZ2dhYmxlLCBjb250cm9sbGVyKVxuXG4gICAgdGhpcy5lbWl0VGFyZ2V0RXZlbnQoJ2FkZCcsIGRyYWdnYWJsZSlcbiAgfVxuXG4gIHN0b3BSZW1vdmVPbk1vdmUoZHJhZ2dhYmxlKSB7XG4gICAgdGhpcy5yZW1vdmVPbk1vdmVDb250cm9sbGVycy5nZXQoZHJhZ2dhYmxlKT8uYWJvcnQoKVxuICAgIHRoaXMucmVtb3ZlT25Nb3ZlQ29udHJvbGxlcnMuZGVsZXRlKGRyYWdnYWJsZSlcbiAgfVxuXG4gIHJlbW92ZShkcmFnZ2FibGUpIHtcbiAgICB0aGlzLnN0b3BSZW1vdmVPbk1vdmUoZHJhZ2dhYmxlKVxuXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSlcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5zcGxpY2UoaW5kZXgsIDEpXG5cbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBbXSlcblxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgW10pXG4gICAgdGhpcy5lbWl0VGFyZ2V0RXZlbnQoJ3JlbW92ZScsIGRyYWdnYWJsZSlcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLm1vdmUoZHJhZ2dhYmxlLmluaXRpYWxQb3NpdGlvbiwgMCwgdHJ1ZSwgdHJ1ZSlcbiAgICAgIHRoaXMuc3RvcFJlbW92ZU9uTW92ZShkcmFnZ2FibGUpXG4gICAgICB0aGlzLmVtaXRUYXJnZXRFdmVudCgncmVtb3ZlJywgZHJhZ2dhYmxlKVxuICAgIH0pXG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMgPSBbXVxuICB9XG5cbiAgZ2V0U29ydGVkRHJhZ2dhYmxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5pbm5lckRyYWdnYWJsZXMuc2xpY2UoKVxuICB9XG5cbiAgZW1pdFRhcmdldEV2ZW50KHR5cGUsIGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IGRldGFpbCA9IHsgdGFyZ2V0OiB0aGlzLCBkcmFnZ2FibGUgfVxuICAgIHRoaXMuZW1pdChgdGFyZ2V0OiR7dHlwZX1gLCBkZXRhaWwpXG5cbiAgICBpZiAodGhpcy5kb21FdmVudHMpIHtcbiAgICAgIGNvbnN0IGRvbVR5cGUgPSB0eXBlLnJlcGxhY2UoL1tBLVpdL2csIChsZXR0ZXIpID0+IGAtJHtsZXR0ZXIudG9Mb3dlckNhc2UoKX1gKVxuICAgICAgZGlzcGF0Y2hEb21FdmVudCh0aGlzLmVsZW1lbnQsIGBkcmFnZWU6dGFyZ2V0LSR7ZG9tVHlwZX1gLCBkZXRhaWwpXG4gICAgfVxuICB9XG5cbiAgZ2V0IGNvbnRhaW5lcigpIHtcbiAgICByZXR1cm4gKHRoaXMuX2NvbnRhaW5lciA9IHRoaXMuX2NvbnRhaW5lciB8fCB0aGlzLm9wdGlvbnMuY29udGFpbmVyIHx8IHRoaXMub3B0aW9ucy5wYXJlbnQgfHwgdGhpcy5lbGVtZW50Lm9mZnNldFBhcmVudClcbiAgfVxuXG4gIGdldCBkb21FdmVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5kb21FdmVudHMgIT09IGZhbHNlXG4gIH1cbn1cblxuIl0sIm5hbWVzIjpbImdldFBhcmVudHNDaGFpbiIsImNoaWxkRWxlbWVudCIsInJvb3RFbGVtZW50IiwiY2hhaW4iLCJlbGVtZW50IiwicGFyZW50Tm9kZSIsInVuc2hpZnQiLCJQb2ludCIsImNvbnN0cnVjdG9yIiwieCIsInkiLCJhZGQiLCJwIiwic3ViIiwibXVsdCIsImsiLCJuZWdhdGl2ZSIsImNvbXBhcmUiLCJjbG9uZSIsInRvU3RyaW5nIiwiZWxlbWVudE9mZnNldCIsInBhcmVudCIsIm9mZnNldFBhcmVudCIsIm9mZnNldExlZnQiLCJjbGllbnRMZWZ0Iiwib2Zmc2V0VG9wIiwiY2xpZW50VG9wIiwiY29uc2lkZXJPZmZzZXRFbGVtZW50cyIsInBvcCIsInJlZHVjZSIsInN1bSIsImVsZW1lbnRCb3VuZGluZ09mZnNldCIsImVsZW1lbnRSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicGFyZW50UmVjdCIsImxlZnQiLCJ0b3AiLCJlbGVtZW50U2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwiUmVjdGFuZ2xlIiwicG9zaXRpb24iLCJzaXplIiwiZ2V0UDEiLCJnZXRQMiIsImdldFAzIiwiZ2V0UDQiLCJnZXRDZW50ZXIiLCJvciIsInJlY3QiLCJNYXRoIiwibWluIiwibWF4IiwiYW5kIiwiaW5jbHVkZVBvaW50IiwiaW5jbHVkZVJlY3RhbmdsZSIsInJlY3RhbmdsZSIsIm1vdmVUb0JvdW5kIiwiYXhpcyIsInNlbEF4aXMiLCJjcm9zc1JlY3RhbmdsZSIsInRoaXNDZW50ZXIiLCJyZWN0Q2VudGVyIiwic2lnbiIsIm9mZnNldCIsImdldFNxdWFyZSIsInN0eWxlQXBwbHkiLCJlbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInN0eWxlIiwiZ3Jvd3RoIiwiZ2V0TWluU2lkZSIsImZyb21FbGVtZW50IiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiaXNDb25zaWRlclRyYW5zbGF0ZSIsIkV2ZW50RW1pdHRlciIsIkV2ZW50VGFyZ2V0Iiwib3B0aW9ucyIsIm9uIiwiT2JqZWN0IiwiZW50cmllcyIsImZvckVhY2giLCJfcmVmIiwiZXZlbnROYW1lIiwiZm4iLCJlbWl0IiwiZGV0YWlsIiwiY2FuY2VsYWJsZSIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJvZmYiLCJvbmNlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInVuc3Vic2NyaWJlIiwiYXJyYXkiLCJ2YWwiLCJpIiwic3BsaWNlIiwic2NvcGVzIiwic2NvcGVTdGFjayIsIlNjb3BlIiwiZHJhZ2dhYmxlcyIsInRhcmdldHMiLCJzY29wZSIsImRyYWdnYWJsZSIsInJlbGVhc2VEcmFnZ2FibGUiLCJ0YXJnZXQiLCJyZW1vdmVJdGVtIiwiZHJhZ0VuZEFjdGlvblJlbGVhc2VzIiwiTWFwIiwicHVzaCIsInRpbWVFbmQiLCJpbml0IiwiaW5pdERyYWdnYWJsZSIsImFkZERyYWdnYWJsZSIsInNldCIsIm92ZXJyaWRlRHJhZ0VuZEFjdGlvbiIsIm9uRW5kIiwicmVsZWFzZSIsImdldCIsImRlbGV0ZSIsImFkZFRhcmdldCIsInNob3RUYXJnZXRzIiwiZmlsdGVyIiwiaW5kZXhPZiIsImNhdGNoRHJhZ2dhYmxlIiwic29ydCIsImEiLCJiIiwiZ2V0UmVjdGFuZ2xlIiwicGluUG9zaXRpb24iLCJpbml0aWFsUG9zaXRpb24iLCJyZXNldCIsInJlZnJlc2giLCJwb3NpdGlvbnMiLCJtYXAiLCJpbm5lckRyYWdnYWJsZXMiLCJtZXNzYWdlIiwidGFyZ2V0SW5kZXhlcyIsImluZGV4IiwiZGVmYXVsdFNjb3BlIiwiY3VycmVudFNjb3BlIiwiY2FsbCIsInRocm90dGxlIiwiZnVuYyIsIndhaXQiLCJsYXN0VGltZSIsImV4ZWN1dGVkRnVuY3Rpb24iLCJjb250ZXh0IiwiYXJncyIsIm5vdyIsIkRhdGUiLCJhcHBseSIsImRpc3BhdGNoRG9tRXZlbnQiLCJidWJibGVzIiwidGhyb3R0bGVkRHJhZ092ZXIiLCJjYWxsYmFjayIsImR1cmF0aW9uIiwidGhyb3R0bGVkQ2FsbGJhY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicGFzc2l2ZUZhbHNlIiwicGFzc2l2ZSIsImlzVG91Y2giLCJuYXZpZ2F0b3IiLCJtYXhUb3VjaFBvaW50cyIsIm1vdXNlRXZlbnRzIiwic3RhcnQiLCJtb3ZlIiwiZW5kIiwidG91Y2hFdmVudHMiLCJ0cmFuc2Zvcm1Qcm9wZXJ0eSIsInRyYW5zaXRpb25Qcm9wZXJ0eSIsImdldFRvdWNoQnlJRCIsInRvdWNoSWQiLCJjaGFuZ2VkVG91Y2hlcyIsImlkZW50aWZpZXIiLCJwcmV2ZW50RG91YmxlSW5pdCIsInNvbWUiLCJleGlzdGluZyIsImNvcHlTdHlsZXMiLCJzb3VyY2UiLCJkZXN0aW5hdGlvbiIsImNzIiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImtleSIsImNoaWxkcmVuIiwiRHJhZ2dhYmxlIiwiX2RyYWdFbmRBY3Rpb25zIiwiX2VuYWJsZSIsInN0YXJ0Qm91bmRpbmciLCJzdGFydFBvc2l0aW9uaW5nIiwic3RhcnRMaXN0ZW5pbmciLCJib3VuZGluZyIsImJvdW5kIiwicG9pbnQiLCJfc2V0RGVmYXVsdFRyYW5zaXRpb24iLCJpc0NvbnNpZGVyVHJhbnNmb3JtT2Zmc2V0IiwiY29udGFpbmVyIiwicGlubmVkUG9zaXRpb24iLCJfZHJhZ1N0YXJ0IiwiZHJhZ1N0YXJ0IiwiX2RyYWdNb3ZlIiwiZHJhZ01vdmUiLCJfZHJhZ0VuZCIsImRyYWdFbmQiLCJfbmF0aXZlRHJhZ1N0YXJ0IiwibmF0aXZlRHJhZ1N0YXJ0IiwiX25hdGl2ZURyYWdPdmVyIiwibmF0aXZlRHJhZ092ZXIiLCJkcmFnT3ZlclRocm90dGxlRHVyYXRpb24iLCJfbmF0aXZlRHJhZ0VuZCIsIm5hdGl2ZURyYWdFbmQiLCJfbmF0aXZlRHJvcCIsIm5hdGl2ZURyb3AiLCJfc2Nyb2xsIiwib25TY3JvbGwiLCJoYW5kbGVyIiwiZ2V0U2l6ZSIsImdldFBvc2l0aW9uIiwiX3RyYW5zZm9ybVBvc2l0aW9uIiwiX3NldFRyYW5zaXRpb24iLCJ0aW1lIiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25Dc3MiLCJ0ZXN0IiwicmVwbGFjZSIsIl9zZXRUcmFuc2xhdGUiLCJ0cmFuc2xhdGVDc3MiLCJ0cmFuc2Zvcm0iLCJzaG91bGRSZW1vdmVaZXJvVHJhbnNsYXRlIiwiaXNTaWxlbnQiLCJlbWl0RHJhZ0V2ZW50Iiwic2lsZW50IiwicmVzZXRQb3NpdGlvblRvSW5pdGlhbCIsInJlZnJlc2hQb3NpdGlvbiIsInNldFBvc2l0aW9uIiwiZGV0ZXJtaW5lRGlyZWN0aW9uIiwiX3ByZXZpb3VzRGlyZWN0aW9uUG9zaXRpb24iLCJfc3RhcnRQb3NpdGlvbiIsImxlZnREaXJlY3Rpb24iLCJyaWdodERpcmVjdGlvbiIsInVwRGlyZWN0aW9uIiwiZG93bkRpcmVjdGlvbiIsInNlZW1zU2Nyb2xsaW5nIiwiX3N0YXJ0VG91Y2hUaW1lc3RhbXAiLCJ0b3VjaERyYWdnaW5nVGhyZXNob2xkIiwic2hvdWxkVXNlTmF0aXZlRHJhZ0FuZERyb3AiLCJpc1RvdWNoRXZlbnQiLCJuYXRpdmVEcmFnQW5kRHJvcCIsImVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcE9uVG91Y2giLCJzdG9wUHJvcGFnYXRpb25PbkRyYWdTdGFydCIsInN0b3BQcm9wYWdhdGlvbiIsIlRvdWNoRXZlbnQiLCJ0b3VjaFBvaW50IiwiX3N0YXJ0VG91Y2hQb2ludCIsInBhZ2VYIiwiY2xpZW50WCIsInBhZ2VZIiwiY2xpZW50WSIsIl90b3VjaElkIiwiX3N0YXJ0V2luZG93U2Nyb2xsUG9pbnQiLCJ3aW5kb3dTY3JvbGxQb2ludCIsIl9zdGFydFNjcm9sbEVsZW1lbnRzT2Zmc2V0Iiwic2Nyb2xsRWxlbWVudHNPZmZzZXQiLCJIVE1MSW5wdXRFbGVtZW50IiwiZm9jdXMiLCJfc3RhcnRQYXJlbnRzU2Nyb2xsT2Zmc2V0IiwicGFyZW50c1Njcm9sbE9mZnNldCIsImVtdWxhdGVPbkZpcnN0TW92ZSIsImNhbmNlbERyYWdnaW5nIiwiZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wIiwiY2FuY2VsRW11bGF0aW9uIiwic2Nyb2xsRWxlbWVudHMiLCJkcmFnU3RhcnRUaHJlc2hvbGQiLCJfZHJhZ1N0YXJ0UGVuZGluZyIsInRvdWNoIiwiZHgiLCJkeSIsInNxcnQiLCJpc0RyYWdnaW5nIiwiY2xhc3NMaXN0IiwiZHJhZ0VuZEFjdGlvbiIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJfZXZlbnQiLCJkYXRhVHJhbnNmZXIiLCJzZXREYXRhIiwiZWZmZWN0QWxsb3dlZCIsImRyb3BFZmZlY3QiLCJyZW1vdmVBdHRyaWJ1dGUiLCJjb250YWluZXJSZWN0IiwiY2xvbmVkRWxlbWVudCIsImNsb25lTm9kZSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImVtdWxhdGlvbkRyYWdnYWJsZSIsImRvbUV2ZW50cyIsImRyYWc6bW92ZSIsImNvbnRhaW5lclJlY3RQb2ludCIsImRyYWc6ZW5kIiwiZGVzdHJveSIsInJlbW92ZUNoaWxkIiwidHlwZSIsImFjdGlvbiIsIl9jb250YWluZXIiLCJfaGFuZGxlciIsImNvbnNpZGVyVHJhbnNmb3JtT2Zmc2V0Iiwic2Nyb2xsWCIsInNjcm9sbFkiLCJzY3JvbGxSb290Q29udGFpbmVyIiwiX2NhY2hlZFNjcm9sbEVsZW1lbnRzIiwic2Nyb2xsTGVmdCIsInNjcm9sbFRvcCIsInBhcmVudHMiLCJfY2FjaGVkUGFyZW50cyIsImVuYWJsZSIsImRlYm91bmNlIiwiaW1tZWRpYXRlIiwidGltZW91dCIsImxhdGVyIiwiY2xlYXJUaW1lb3V0IiwiZ2V0RGlzdGFuY2UiLCJwMSIsInAyIiwiZ2V0WERpZmZlcmVuY2UiLCJhYnMiLCJnZXRZRGlmZmVyZW5jZSIsInRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3RvcnkiLCJwb3ciLCJpbmRleE9mTmVhcmVzdFBvaW50IiwiYXJyIiwicmFkaXVzIiwiZ2V0RGlzdGFuY2VGdW5jIiwidGVtcCIsIkxpc3QiLCJhc3NpZ24iLCJ0aW1lRXhjYW5nZSIsImNoYW5nZWREdXJpbmdJdGVyYXRpb24iLCJkcmFnZ2FibGVDb250cm9sbGVycyIsInJlc2l6ZU9ic2VydmVyIiwiUmVzaXplT2JzZXJ2ZXIiLCJvblJlc2l6ZSIsImJpbmQiLCJvYnNlcnZlIiwicmVvcmRlck9uQ2hhbmdlIiwibGlzdGVuVG8iLCJvbk1vdmUiLCJyZXN0b3JlRHJhZ0VuZEFjdGlvbiIsInNpZ25hbEZvciIsInNpZ25hbCIsImhhcyIsIkFib3J0Q29udHJvbGxlciIsInVub2JzZXJ2ZSIsImFib3J0Iiwic3dhcHBpbmdEaXNhYmxlZCIsInNvcnRlZERyYWdnYWJsZXMiLCJnZXRTb3J0ZWREcmFnZ2FibGVzIiwicGlubmVkUG9zaXRpb25zIiwiY3VycmVudEluZGV4IiwidGFyZ2V0SW5kZXgiLCJkaXN0YW5jZUZ1bmMiLCJlbWl0TGlzdEV2ZW50IiwicmVvcmRlckVsZW1lbnRzIiwibW92ZWREcmFnZ2FibGUiLCJuZXh0IiwiaW5zZXJ0QmVmb3JlIiwiZCIsImxpc3QiLCJnZXRDdXJyZW50UGlubmVkUG9zaXRpb25zIiwic29ydGluZyIsIkFycmF5IiwiY29uY2F0IiwiaW5pdGlhbFBvc2l0aW9ucyIsImoiLCJjbGVhciIsInNsaWNlIiwiZHJhZ2dhYmxlQSIsImRyYWdnYWJsZUIiLCJfc3dhcHBpbmdEaXNhYmxlZCIsImRpc2FibGVkIiwiYXJyYXlNb3ZlIiwiZnJvbSIsInRvIiwiQnViYmxpbmdMaXN0IiwiYXV0b0RldGVjdEdhcCIsIl9nYXAiLCJleHBsaWNpdEdhcCIsInNvcnRlZCIsImZpbmRJbmRleCIsImlzQ29ubmVjdGVkIiwiY3VycmVudCIsImF1dG9EZXRlY3RTdGFydFBvc2l0aW9uIiwic3RhcnRQb3NpdGlvbiIsIm9uRHJhZ1N0YXJ0IiwiY2FjaGVkU29ydGVkRHJhZ2dhYmxlcyIsImluZGV4T2ZBY3RpdmVEcmFnZ2FibGUiLCJwcmV2RHJhZ2dhYmxlIiwibmV4dERyYWdnYWJsZSIsImN1cnJlbnRQb3NpdGlvbiIsImN1cnJlbnRPcmRlciIsImlzTW92aW5nQmFja3dhcmQiLCJwcmV2TmV3UG9zaXRpb24iLCJuZXh0UG9zaXRpb24iLCJjcm9zc0F4aXMiLCJpc01vdmluZ0ZvcndhcmQiLCJkcmFnZ2FibGVOZXdQb3NpdGlvbiIsImJ1YmJsaW5nIiwiY3VycmVudERyYWdnYWJsZSIsImluY2x1ZGVzIiwiZ2FwIiwidmVydGljYWxHYXAiLCJnYXBWYWx1ZSIsInJhbmdlIiwic3RvcCIsInN0ZXAiLCJyZXN1bHQiLCJkaXJlY3RDcm9zc2luZyIsIkwxUDEiLCJMMVAyIiwiTDJQMSIsIkwyUDIiLCJrMSIsImsyIiwiYjEiLCJiMiIsImJvdW5kVG9MaW5lIiwiQSIsIkIiLCJQIiwiQVAiLCJBQiIsImFiMiIsImFwX2FiIiwidCIsImdldFBvaW50T25MaW5lQnlMZW5naHQiLCJMUDEiLCJMUDIiLCJsZW5naHQiLCJwZXJjZW50IiwiYWRkUG9pbnRUb0JvdW5kUG9pbnRzIiwiYm91bmRwb2ludHMiLCJpc1JpZ2h0IiwiYlBvaW50IiwiQmFzaWNTdHJhdGVneSIsImJvdW5kUmVjdCIsIk5vdENyb3NzaW5nU3RyYXRlZ3kiLCJwb3NpdGlvbmluZyIsInJlY3RhbmdsZUxpc3QiLCJpbmRleGVzT2ZOZXdzIiwic3RhdGljUmVjdGFuZ2xlSW5kZXhlcyIsImluZGV4ZXMiLCJfcmVjdCIsInJlbW92YWJsZSIsImluZGV4T2ZTdGF0aWMiLCJzdGF0aWNSZWN0Iiwib2RsRHJhZ2dhYmxlc0xpc3QiLCJuZXdEcmFnZ2FibGVzIiwiaW5kZXhPZk5ld3MiLCJGbG9hdExlZnRTdHJhdGVneSIsInBhZGRpbmdUb3BMZWZ0IiwicGFkZGluZ0JvdHRvbVJpZ2h0IiwieUdhcEJldHdlZW5EcmFnZ2FibGVzIiwiX2luZGV4ZXNPZk5ld3MiLCJyZWN0UDIiLCJib3VuZGFyeVBvaW50cyIsInJlY3RJbmRleCIsImlzVmFsaWQiLCJuZXdMaXN0IiwibGlzdE9sZFBvc2l0aW9uIiwibmV3RHJhZ2dhYmxlIiwiRmxvYXRSaWdodFN0cmF0ZWd5IiwicGFkZGluZ1RvcFJpZ2h0IiwicGFkZGluZ0JvdHRvbUxlZnQiLCJwYWRkaW5nQm90dG9tTmVnTGVmdCIsImdldEFuZ2xlRGlmZiIsImFscGhhIiwiYmV0YSIsIm1pbkFuZ2xlIiwibWF4QW5nbGUiLCJQSSIsImdldEFuZ2xlIiwiZGlmZiIsIm5vcm1hbGl6ZUFuZ2xlIiwiYXRhbjIiLCJib3VuZEFuZ2xlIiwiZG1pbiIsImRtYXgiLCJnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0iLCJhbmdsZSIsImNlbnRlciIsImNvcyIsInNpbiIsIkJvdW5kIiwiX3NpemUiLCJpbnN0YW5jZSIsIkJvdW5kVG9SZWN0YW5nbGUiLCJjYWxjUG9pbnQiLCJCb3VuZFRvRWxlbWVudCIsIkJvdW5kVG9MaW5lWCIsInN0YXJ0WSIsImVuZFkiLCJCb3VuZFRvTGluZVkiLCJzdGFydFgiLCJlbmRYIiwiQm91bmRUb0xpbmUiLCJzdGFydFBvaW50IiwiZW5kUG9pbnQiLCJzb21lSyIsImNvc0JldGEiLCJzaW5CZXRhIiwicG9pbnQyIiwibmV3RW5kUG9pbnQiLCJwb2ludENyb3NzaW5nIiwiQm91bmRUb0NpcmNsZSIsIkJvdW5kVG9BcmMiLCJzdGFydEFuZ2xlIiwiZW5kQW5nbGUiLCJfc3RhcnRBbmdsZSIsIl9lbmRBbmdsZSIsIlRhcmdldCIsInBvc2l0aW9uaW5nU3RyYXRlZ3kiLCJzdHJhdGVneSIsInJlbW92ZU9uTW92ZUNvbnRyb2xsZXJzIiwiaW5kZXhlc09mTmV3Iiwib2xkRHJhZ2dhYmxlcyIsInJlY3RhbmdsZXMiLCJlbWl0VGFyZ2V0RXZlbnQiLCJ0YXJnZXRSZWN0YW5nbGUiLCJkcmFnZ2FibGVTcXVhcmUiLCJuZXdEcmFnZ2FibGVzSW5kZXgiLCJhZGRSZW1vdmVPbk1vdmUiLCJzdG9wUmVtb3ZlT25Nb3ZlIiwicHVzaElubmVyRHJhZ2dhYmxlIiwiY29udHJvbGxlciIsImRvbVR5cGUiLCJsZXR0ZXIiLCJ0b0xvd2VyQ2FzZSJdLCJtYXBwaW5ncyI6Ijs7O0VBQWUsU0FBU0EsZUFBZUEsQ0FBQ0MsWUFBWSxFQUFFQyxXQUFXLEVBQUU7SUFDbEUsTUFBTUMsS0FBSyxHQUFHLEVBQUU7SUFDZixJQUFJQyxPQUFPLEdBQUdILFlBQVk7RUFFMUIsRUFBQSxPQUFNRyxPQUFPLENBQUNDLFVBQVUsSUFBSUQsT0FBTyxLQUFLRixXQUFXLEVBQUU7RUFDbkRDLElBQUFBLEtBQUssQ0FBQ0csT0FBTyxDQUFDRixPQUFPLENBQUNDLFVBQVUsQ0FBQztNQUNqQ0QsT0FBTyxHQUFHQSxPQUFPLENBQUNDLFVBQVU7RUFDOUI7RUFFQSxFQUFBLE9BQU9GLEtBQUs7RUFDZDs7RUNSQTtFQUNlLE1BQU1JLEtBQUssQ0FBQztFQUN6QjtFQUNGO0VBQ0E7RUFDQTtFQUNBO0VBQ0VDLEVBQUFBLFdBQVdBLENBQUNDLENBQUMsRUFBRUMsQ0FBQyxFQUFFO01BQ2hCLElBQUksQ0FBQ0QsQ0FBQyxHQUFHQSxDQUFDO01BQ1YsSUFBSSxDQUFDQyxDQUFDLEdBQUdBLENBQUM7RUFDWjtJQUVBQyxHQUFH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
