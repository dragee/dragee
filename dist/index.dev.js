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
      const isAccepted = shotTargets.length > 0 && shotTargets[0].onEnd(draggable);
      if (!isAccepted && draggable.targets.length) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZGV2LmpzIiwic291cmNlcyI6WyIuLi9zcmMvdXRpbHMvZ2V0LXBhcmVudHMtY2hhaW4uanMiLCIuLi9zcmMvZ2VvbWV0cnkvcG9pbnQuanMiLCIuLi9zcmMvZ2VvbWV0cnkvcmVjdGFuZ2xlLmpzIiwiLi4vc3JjL2V2ZW50RW1pdHRlci5qcyIsIi4uL3NyYy91dGlscy9yZW1vdmUtYXJyYXktaXRlbS5qcyIsIi4uL3NyYy9zY29wZS5qcyIsIi4uL3NyYy91dGlscy90aHJvdHRsZS5qcyIsIi4uL3NyYy91dGlscy9kaXNwYXRjaC1kb20tZXZlbnQuanMiLCIuLi9zcmMvZHJhZ2dhYmxlLmpzIiwiLi4vc3JjL3V0aWxzL2RlYm91bmNlLmpzIiwiLi4vc3JjL2dlb21ldHJ5L2Rpc3RhbmNlcy5qcyIsIi4uL3NyYy9saXN0LmpzIiwiLi4vc3JjL2J1YmJsaW5nTGlzdC5qcyIsIi4uL3NyYy91dGlscy9yYW5nZS5qcyIsIi4uL3NyYy9nZW9tZXRyeS9ib3VuZHMuanMiLCIuLi9zcmMvcG9zaXRpb25pbmcuanMiLCIuLi9zcmMvZ2VvbWV0cnkvYW5nbGVzLmpzIiwiLi4vc3JjL2JvdW5kaW5nLmpzIiwiLi4vc3JjL3RhcmdldC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRQYXJlbnRzQ2hhaW4oY2hpbGRFbGVtZW50LCByb290RWxlbWVudCkge1xuXHRjb25zdCBjaGFpbiA9IFtdXG4gIGxldCBlbGVtZW50ID0gY2hpbGRFbGVtZW50XG5cbiAgd2hpbGUoZWxlbWVudC5wYXJlbnROb2RlICYmIGVsZW1lbnQgIT09IHJvb3RFbGVtZW50KSB7XG4gICAgY2hhaW4udW5zaGlmdChlbGVtZW50LnBhcmVudE5vZGUpXG4gICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZVxuICB9XG5cbiAgcmV0dXJuIGNoYWluXG59XG4iLCJpbXBvcnQgZ2V0UGFyZW50c0NoYWluIGZyb20gJy4uL3V0aWxzL2dldC1wYXJlbnRzLWNoYWluJ1xuXG4vKiogQ2xhc3MgcmVwcmVzZW50aW5nIGEgcG9pbnQuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2ludCB7XG4gIC8qKlxuICAqIENyZWF0ZSBhIHBvaW50LlxuICAqIEBwYXJhbSB7bnVtYmVyfSB4IC0gVGhlIHggdmFsdWUuXG4gICogQHBhcmFtIHtudW1iZXJ9IHkgLSBUaGUgeSB2YWx1ZS5cbiAgKi9cbiAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgIHRoaXMueCA9IHhcbiAgICB0aGlzLnkgPSB5XG4gIH1cblxuICBhZGQocCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54ICsgcC54LCB0aGlzLnkgKyBwLnkpXG4gIH1cblxuICBzdWIocCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54IC0gcC54LCB0aGlzLnkgLSBwLnkpXG4gIH1cblxuICBtdWx0KGspIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCAqIGssIHRoaXMueSAqIGspXG4gIH1cblxuICBuZWdhdGl2ZSgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KC10aGlzLngsIC10aGlzLnkpXG4gIH1cblxuICBjb21wYXJlKHApIHtcbiAgICByZXR1cm4gKHRoaXMueCA9PT0gcC54ICYmIHRoaXMueSA9PT0gcC55KVxuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLngsIHRoaXMueSlcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiBge3g9JHt0aGlzLnh9LHk9JHt0aGlzLnl9fWBcbiAgfVxuXG4gIHN0YXRpYyBlbGVtZW50T2Zmc2V0KGVsZW1lbnQsIHBhcmVudCkge1xuICAgIHBhcmVudCA9IHBhcmVudCB8fCBlbGVtZW50LnBhcmVudE5vZGVcbiAgICBpZiAocGFyZW50ID09PSBlbGVtZW50KSB7XG4gICAgICByZXR1cm4gbmV3IFBvaW50KDAsIDApO1xuICAgIH0gZWxzZSBpZiAocGFyZW50ID09PSBlbGVtZW50Lm9mZnNldFBhcmVudCkge1xuICAgICAgcmV0dXJuIG5ldyBQb2ludChcbiAgICAgICAgZWxlbWVudC5vZmZzZXRMZWZ0ICsgcGFyZW50LmNsaWVudExlZnQsXG4gICAgICAgIGVsZW1lbnQub2Zmc2V0VG9wICsgcGFyZW50LmNsaWVudFRvcFxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjb25zaWRlck9mZnNldEVsZW1lbnRzID0gW2VsZW1lbnQsIGdldFBhcmVudHNDaGFpbihlbGVtZW50LCBwYXJlbnQpLnBvcCgpXVxuICAgICAgcmV0dXJuIG5ldyBQb2ludChcbiAgICAgICAgY29uc2lkZXJPZmZzZXRFbGVtZW50cy5yZWR1Y2UoKHN1bSwgcCkgPT4gc3VtICsgcC5vZmZzZXRMZWZ0LCAwKSArIHBhcmVudC5jbGllbnRMZWZ0LFxuICAgICAgICBjb25zaWRlck9mZnNldEVsZW1lbnRzLnJlZHVjZSgoc3VtLCBwKSA9PiBzdW0gKyBwLm9mZnNldFRvcCwgMCkgKyBwYXJlbnQuY2xpZW50VG9wXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGVsZW1lbnRCb3VuZGluZ09mZnNldChlbGVtZW50LCBwYXJlbnQpIHtcbiAgICBwYXJlbnQgPSBwYXJlbnQgfHwgZWxlbWVudC5wYXJlbnROb2RlXG4gICAgY29uc3QgZWxlbWVudFJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgY29uc3QgcGFyZW50UmVjdCA9IHBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIHJldHVybiBuZXcgUG9pbnQoXG4gICAgICBlbGVtZW50UmVjdC5sZWZ0IC0gcGFyZW50UmVjdC5sZWZ0LFxuICAgICAgZWxlbWVudFJlY3QudG9wIC0gcGFyZW50UmVjdC50b3BcbiAgICApXG4gIH1cblxuICBzdGF0aWMgZWxlbWVudFNpemUoZWxlbWVudCkge1xuICAgIGNvbnN0IGVsZW1lbnRSZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIHJldHVybiBuZXcgUG9pbnQoXG4gICAgICBlbGVtZW50UmVjdC53aWR0aCxcbiAgICAgIGVsZW1lbnRSZWN0LmhlaWdodFxuICAgIClcbiAgfVxufVxuIiwiaW1wb3J0IFBvaW50IGZyb20gJy4vcG9pbnQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY3RhbmdsZSB7XG4gIGNvbnN0cnVjdG9yKHBvc2l0aW9uLCBzaXplKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgdGhpcy5zaXplID0gc2l6ZVxuICB9XG5cbiAgZ2V0UDEoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25cbiAgfVxuXG4gIGdldFAyKCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHRoaXMucG9zaXRpb24ueSlcbiAgfVxuXG4gIGdldFAzKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLnNpemUpXG4gIH1cblxuICBnZXRQNCgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnkpXG4gIH1cblxuICBnZXRDZW50ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb24uYWRkKHRoaXMuc2l6ZS5tdWx0KDAuNSkpXG4gIH1cblxuICBvcihyZWN0KSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBuZXcgUG9pbnQoTWF0aC5taW4odGhpcy5wb3NpdGlvbi54LCByZWN0LnBvc2l0aW9uLngpLCBNYXRoLm1pbih0aGlzLnBvc2l0aW9uLnksIHJlY3QucG9zaXRpb24ueSkpXG4gICAgY29uc3Qgc2l6ZSA9IChuZXcgUG9pbnQoTWF0aC5tYXgodGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHJlY3QucG9zaXRpb24ueCArIHJlY3Quc2l6ZS54KSwgTWF0aC5tYXgodGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnksIHJlY3QucG9zaXRpb24ueSArIHJlY3Quc2l6ZS55KSkpLnN1Yihwb3NpdGlvbilcbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZShwb3NpdGlvbiwgc2l6ZSlcbiAgfVxuXG4gIGFuZChyZWN0KSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBuZXcgUG9pbnQoTWF0aC5tYXgodGhpcy5wb3NpdGlvbi54LCByZWN0LnBvc2l0aW9uLngpLCBNYXRoLm1heCh0aGlzLnBvc2l0aW9uLnksIHJlY3QucG9zaXRpb24ueSkpXG4gICAgY29uc3Qgc2l6ZSA9IChuZXcgUG9pbnQoTWF0aC5taW4odGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHJlY3QucG9zaXRpb24ueCArIHJlY3Quc2l6ZS54KSwgTWF0aC5taW4odGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnksIHJlY3QucG9zaXRpb24ueSArIHJlY3Quc2l6ZS55KSkpLnN1Yihwb3NpdGlvbilcbiAgICBpZiAoc2l6ZS54IDw9IDAgfHwgc2l6ZS55IDw9IDApIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHBvc2l0aW9uLCBzaXplKVxuICB9XG5cbiAgaW5jbHVkZVBvaW50KHApIHtcbiAgICByZXR1cm4gISh0aGlzLnBvc2l0aW9uLnggPiBwLnggfHwgdGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLnggPCBwLnggfHwgdGhpcy5wb3NpdGlvbi55ID4gcC55IHx8IHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55IDwgcC55KVxuICB9XG5cbiAgaW5jbHVkZVJlY3RhbmdsZShyZWN0YW5nbGUpIHtcbiAgICByZXR1cm4gdGhpcy5pbmNsdWRlUG9pbnQocmVjdGFuZ2xlLnBvc2l0aW9uKSAmJiB0aGlzLmluY2x1ZGVQb2ludChyZWN0YW5nbGUuZ2V0UDMoKSlcbiAgfVxuXG4gIG1vdmVUb0JvdW5kKHJlY3QsIGF4aXMpIHtcbiAgICBsZXQgc2VsQXhpcywgY3Jvc3NSZWN0YW5nbGVcbiAgICBpZiAoYXhpcykge1xuICAgICAgc2VsQXhpcyA9IGF4aXNcbiAgICB9IGVsc2Uge1xuICAgICAgY3Jvc3NSZWN0YW5nbGUgPSB0aGlzLmFuZChyZWN0KVxuICAgICAgaWYgKCFjcm9zc1JlY3RhbmdsZSkge1xuICAgICAgICByZXR1cm4gcmVjdFxuICAgICAgfVxuICAgICAgc2VsQXhpcyA9IGNyb3NzUmVjdGFuZ2xlLnNpemUueCA+IGNyb3NzUmVjdGFuZ2xlLnNpemUueSA/ICd5JyA6ICd4J1xuICAgIH1cbiAgICBjb25zdCB0aGlzQ2VudGVyID0gdGhpcy5nZXRDZW50ZXIoKVxuICAgIGNvbnN0IHJlY3RDZW50ZXIgPSByZWN0LmdldENlbnRlcigpXG4gICAgY29uc3Qgc2lnbiA9IHRoaXNDZW50ZXJbc2VsQXhpc10gPiByZWN0Q2VudGVyW3NlbEF4aXNdID8gLTEgOiAxXG4gICAgY29uc3Qgb2Zmc2V0ID0gc2lnbiA+IDAgPyB0aGlzLnBvc2l0aW9uW3NlbEF4aXNdICsgdGhpcy5zaXplW3NlbEF4aXNdIC0gcmVjdC5wb3NpdGlvbltzZWxBeGlzXSA6IHRoaXMucG9zaXRpb25bc2VsQXhpc10gLSAocmVjdC5wb3NpdGlvbltzZWxBeGlzXSArIHJlY3Quc2l6ZVtzZWxBeGlzXSlcbiAgICByZWN0LnBvc2l0aW9uW3NlbEF4aXNdID0gcmVjdC5wb3NpdGlvbltzZWxBeGlzXSArIG9mZnNldFxuICAgIHJldHVybiByZWN0XG4gIH1cblxuICBnZXRTcXVhcmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZS54ICogdGhpcy5zaXplLnlcbiAgfVxuXG4gIHN0eWxlQXBwbHkoZWwpIHtcbiAgICBlbCA9IGVsIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2luZCcpXG4gICAgZWwuc3R5bGUubGVmdCA9IHRoaXMucG9zaXRpb24ueCArICdweCdcbiAgICBlbC5zdHlsZS50b3AgPSB0aGlzLnBvc2l0aW9uLnkgKyAncHgnXG4gICAgZWwuc3R5bGUud2lkdGggPSB0aGlzLnNpemUueCArICdweCdcbiAgICBlbC5zdHlsZS5oZWlnaHQgPSB0aGlzLnNpemUueSArICdweCdcbiAgfVxuXG4gIGdyb3d0aChzaXplKSB7XG4gICAgdGhpcy5zaXplID0gdGhpcy5zaXplLmFkZChzaXplKVxuICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uLmFkZChzaXplLm11bHQoLTAuNSkpXG4gIH1cblxuICBnZXRNaW5TaWRlKCkge1xuICAgIHJldHVybiBNYXRoLm1pbih0aGlzLnNpemUueCwgdGhpcy5zaXplLnkpXG4gIH1cblxuICBzdGF0aWMgZnJvbUVsZW1lbnQoZWxlbWVudCwgcGFyZW50PWVsZW1lbnQucGFyZW50Tm9kZSwgaXNDb25zaWRlclRyYW5zbGF0ZT1mYWxzZSkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gaXNDb25zaWRlclRyYW5zbGF0ZVxuICAgICAgPyBQb2ludC5lbGVtZW50Qm91bmRpbmdPZmZzZXQoZWxlbWVudCwgcGFyZW50KVxuICAgICAgOiBQb2ludC5lbGVtZW50T2Zmc2V0KGVsZW1lbnQsIHBhcmVudClcbiAgICBjb25zdCBzaXplID0gUG9pbnQuZWxlbWVudFNpemUoZWxlbWVudClcbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZShwb3NpdGlvbiwgc2l6ZSlcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRFbWl0dGVyIGV4dGVuZHMgRXZlbnRUYXJnZXQge1xuICBjb25zdHJ1Y3RvciAob3B0aW9ucyA9IHt9KSB7XG4gICAgc3VwZXIoKVxuXG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5vbikge1xuICAgICAgT2JqZWN0LmVudHJpZXMob3B0aW9ucy5vbikuZm9yRWFjaCgoW2V2ZW50TmFtZSwgZm5dKSA9PiB0aGlzLm9uKGV2ZW50TmFtZSwgZm4pKVxuICAgIH1cbiAgfVxuXG4gIGVtaXQoZXZlbnROYW1lLCBkZXRhaWwsIHsgY2FuY2VsYWJsZSA9IGZhbHNlIH0gPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KGV2ZW50TmFtZSwgeyBkZXRhaWwsIGNhbmNlbGFibGUgfSkpXG4gIH1cblxuICBvbihldmVudE5hbWUsIGZuLCBvcHRpb25zKSB7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZm4sIG9wdGlvbnMpXG4gICAgcmV0dXJuICgpID0+IHRoaXMub2ZmKGV2ZW50TmFtZSwgZm4pXG4gIH1cblxuICBvbmNlKGV2ZW50TmFtZSwgZm4pIHtcbiAgICByZXR1cm4gdGhpcy5vbihldmVudE5hbWUsIGZuLCB7IG9uY2U6IHRydWUgfSlcbiAgfVxuXG4gIG9mZihldmVudE5hbWUsIGZuKSB7XG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZm4pXG4gIH1cblxuICAvLyBEZXByZWNhdGVkIGFsaWFzIGZvciBgb2ZmYFxuICB1bnN1YnNjcmliZShldmVudE5hbWUsIGZuKSB7XG4gICAgdGhpcy5vZmYoZXZlbnROYW1lLCBmbilcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oYXJyYXksIHZhbCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGFycmF5W2ldID09PSB2YWwpIHtcbiAgICAgIGFycmF5LnNwbGljZShpLCAxKVxuICAgICAgaS0tXG4gICAgfVxuICB9XG4gIHJldHVybiBhcnJheVxufVxuIiwiaW1wb3J0IHJlbW92ZUl0ZW0gZnJvbSAnLi91dGlscy9yZW1vdmUtYXJyYXktaXRlbSdcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudEVtaXR0ZXInXG5cbmNvbnN0IHNjb3BlcyA9IFtdXG5jb25zdCBzY29wZVN0YWNrID0gW11cblxuY2xhc3MgU2NvcGUgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvcihkcmFnZ2FibGVzLCB0YXJnZXRzLCBvcHRpb25zPXt9KSB7XG4gICAgc3VwZXIob3B0aW9ucylcbiAgICBzY29wZXMuZm9yRWFjaCgoc2NvcGUpID0+IHtcbiAgICAgIGlmIChkcmFnZ2FibGVzKSB7XG4gICAgICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBzY29wZS5yZWxlYXNlRHJhZ2dhYmxlKGRyYWdnYWJsZSkpXG4gICAgICB9XG5cbiAgICAgIGlmICh0YXJnZXRzKSB7XG4gICAgICAgIHRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB7XG4gICAgICAgICAgcmVtb3ZlSXRlbShzY29wZS50YXJnZXRzLCB0YXJnZXQpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZXMgfHwgW11cbiAgICB0aGlzLnRhcmdldHMgPSB0YXJnZXRzIHx8IFtdXG4gICAgdGhpcy5kcmFnRW5kQWN0aW9uUmVsZWFzZXMgPSBuZXcgTWFwKClcbiAgICBzY29wZXMucHVzaCh0aGlzKVxuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgIHRpbWVFbmQ6IChvcHRpb25zLnRpbWVFbmQpIHx8IDQwMFxuICAgIH1cblxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHRoaXMuaW5pdERyYWdnYWJsZShkcmFnZ2FibGUpKVxuICB9XG5cbiAgYWRkRHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5wdXNoKGRyYWdnYWJsZSlcbiAgICB0aGlzLmluaXREcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICB9XG5cbiAgaW5pdERyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICB0aGlzLmRyYWdFbmRBY3Rpb25SZWxlYXNlcy5zZXQoZHJhZ2dhYmxlLCBkcmFnZ2FibGUub3ZlcnJpZGVEcmFnRW5kQWN0aW9uKCgpID0+IHRoaXMub25FbmQoZHJhZ2dhYmxlKSkpXG4gIH1cblxuICByZWxlYXNlRHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IHJlbGVhc2UgPSB0aGlzLmRyYWdFbmRBY3Rpb25SZWxlYXNlcy5nZXQoZHJhZ2dhYmxlKVxuICAgIGlmIChyZWxlYXNlKSB7XG4gICAgICByZWxlYXNlKClcbiAgICAgIHRoaXMuZHJhZ0VuZEFjdGlvblJlbGVhc2VzLmRlbGV0ZShkcmFnZ2FibGUpXG4gICAgfVxuICAgIHJlbW92ZUl0ZW0odGhpcy5kcmFnZ2FibGVzLCBkcmFnZ2FibGUpXG4gIH1cblxuICBhZGRUYXJnZXQodGFyZ2V0KSB7XG4gICAgdGhpcy50YXJnZXRzLnB1c2godGFyZ2V0KVxuICB9XG5cbiAgb25FbmQoZHJhZ2dhYmxlKSB7XG4gICAgY29uc3Qgc2hvdFRhcmdldHMgPSB0aGlzLnRhcmdldHMuZmlsdGVyKCh0YXJnZXQpID0+IHtcbiAgICAgIHJldHVybiB0YXJnZXQuZHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkgIT09IC0xXG4gICAgfSkuZmlsdGVyKCh0YXJnZXQpID0+IHtcbiAgICAgIHJldHVybiB0YXJnZXQuY2F0Y2hEcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICAgIH0pLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIHJldHVybiBhLmdldFJlY3RhbmdsZSgpLmdldFNxdWFyZSgpIC0gYi5nZXRSZWN0YW5nbGUoKS5nZXRTcXVhcmUoKVxuICAgIH0pXG5cbiAgICBjb25zdCBpc0FjY2VwdGVkID0gc2hvdFRhcmdldHMubGVuZ3RoID4gMCAmJiBzaG90VGFyZ2V0c1swXS5vbkVuZChkcmFnZ2FibGUpXG5cbiAgICBpZiAoIWlzQWNjZXB0ZWQgJiYgZHJhZ2dhYmxlLnRhcmdldHMubGVuZ3RoKSB7XG4gICAgICBkcmFnZ2FibGUucGluUG9zaXRpb24oZHJhZ2dhYmxlLmluaXRpYWxQb3NpdGlvbiwgdGhpcy5vcHRpb25zLnRpbWVFbmQpXG4gICAgfVxuXG4gICAgdGhpcy5lbWl0KCdzY29wZTpjaGFuZ2UnLCB7IHNjb3BlOiB0aGlzLCBkcmFnZ2FibGUgfSlcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMudGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHRhcmdldC5yZXNldCgpKVxuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucmVmcmVzaCgpKVxuICAgIHRoaXMudGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHRhcmdldC5yZWZyZXNoKCkpXG4gIH1cblxuICBnZXQgcG9zaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnRhcmdldHMubWFwKCh0YXJnZXQpID0+IHtcbiAgICAgIHJldHVybiB0YXJnZXQuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB0aGlzLmRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpKVxuICAgIH0pXG4gIH1cblxuICBzZXQgcG9zaXRpb25zKHBvc2l0aW9ucykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSAnd3JvbmcgYXJyYXkgbGVuZ3RoJ1xuICAgIGlmIChwb3NpdGlvbnMubGVuZ3RoID09PSB0aGlzLnRhcmdldHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB0YXJnZXQucmVzZXQoKSlcblxuICAgICAgcG9zaXRpb25zLmZvckVhY2goKHRhcmdldEluZGV4ZXMsIGkpID0+IHtcbiAgICAgICAgdGFyZ2V0SW5kZXhlcy5mb3JFYWNoKChpbmRleCkgPT4ge1xuICAgICAgICAgIHRoaXMudGFyZ2V0c1tpXS5hZGQodGhpcy5kcmFnZ2FibGVzW2luZGV4XSlcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG1lc3NhZ2VcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgZGVmYXVsdFNjb3BlID0gbmV3IFNjb3BlKClcblxuZnVuY3Rpb24gY3VycmVudFNjb3BlKCkge1xuICByZXR1cm4gc2NvcGVTdGFja1tzY29wZVN0YWNrLmxlbmd0aCAtIDFdIHx8IGRlZmF1bHRTY29wZVxufVxuXG5mdW5jdGlvbiBzY29wZShmbikge1xuICBjb25zdCBjdXJyZW50U2NvcGUgPSBuZXcgU2NvcGUoKVxuXG4gIHNjb3BlU3RhY2sucHVzaChjdXJyZW50U2NvcGUpXG4gIHRyeSB7XG4gICAgZm4uY2FsbCgpXG4gIH0gZmluYWxseSB7XG4gICAgc2NvcGVTdGFjay5wb3AoKVxuICB9XG4gIHJldHVybiBjdXJyZW50U2NvcGVcbn1cblxuZXhwb3J0IHsgc2NvcGVzLCBkZWZhdWx0U2NvcGUsIGN1cnJlbnRTY29wZSwgU2NvcGUsIHNjb3BlIH1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRocm90dGxlKGZ1bmMsIHdhaXQpIHtcbiAgbGV0IGxhc3RUaW1lID0gMFxuXG4gIHJldHVybiBmdW5jdGlvbiBleGVjdXRlZEZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzXG4gICAgY29uc3QgYXJncyA9IGFyZ3VtZW50c1xuXG4gICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKVxuICAgIGlmIChub3cgLSBsYXN0VGltZSA+PSB3YWl0KSB7XG4gICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpXG4gICAgICBsYXN0VGltZSA9IG5vd1xuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGF0Y2hEb21FdmVudChlbGVtZW50LCBldmVudE5hbWUsIGRldGFpbCwgeyBjYW5jZWxhYmxlID0gZmFsc2UgfSA9IHt9KSB7XG4gIHJldHVybiBlbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KGV2ZW50TmFtZSwgeyBidWJibGVzOiB0cnVlLCBjYW5jZWxhYmxlLCBkZXRhaWwgfSkpXG59XG4iLCJpbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnRFbWl0dGVyJ1xuaW1wb3J0IFBvaW50IGZyb20gJy4vZ2VvbWV0cnkvcG9pbnQnXG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gJy4vZ2VvbWV0cnkvcmVjdGFuZ2xlJ1xuaW1wb3J0IHsgc2NvcGVzLCBjdXJyZW50U2NvcGUgfSBmcm9tICcuL3Njb3BlJ1xuaW1wb3J0IHRocm90dGxlIGZyb20gJy4vdXRpbHMvdGhyb3R0bGUnXG5pbXBvcnQgZ2V0UGFyZW50c0NoYWluIGZyb20gJy4vdXRpbHMvZ2V0LXBhcmVudHMtY2hhaW4nXG5pbXBvcnQgcmVtb3ZlSXRlbSBmcm9tICcuL3V0aWxzL3JlbW92ZS1hcnJheS1pdGVtJ1xuaW1wb3J0IGRpc3BhdGNoRG9tRXZlbnQgZnJvbSAnLi91dGlscy9kaXNwYXRjaC1kb20tZXZlbnQnXG5cbmNvbnN0IHRocm90dGxlZERyYWdPdmVyID0gKGNhbGxiYWNrLCBkdXJhdGlvbikgPT4ge1xuICBjb25zdCB0aHJvdHRsZWRDYWxsYmFjayA9IHRocm90dGxlKChldmVudCkgPT4gY2FsbGJhY2soZXZlbnQpLCBkdXJhdGlvbilcbiAgcmV0dXJuIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB0aHJvdHRsZWRDYWxsYmFjayhldmVudClcbiAgfVxufVxuXG5jb25zdCBwYXNzaXZlRmFsc2UgPSB7IHBhc3NpdmU6IGZhbHNlIH1cblxuY29uc3QgaXNUb3VjaCA9IG5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyA+IDBcbmNvbnN0IG1vdXNlRXZlbnRzID0ge1xuICBzdGFydDogJ21vdXNlZG93bicsXG4gIG1vdmU6ICdtb3VzZW1vdmUnLFxuICBlbmQ6ICdtb3VzZXVwJ1xufVxuY29uc3QgdG91Y2hFdmVudHMgPSB7XG4gIHN0YXJ0OiAndG91Y2hzdGFydCcsXG4gIG1vdmU6ICd0b3VjaG1vdmUnLFxuICBlbmQ6ICd0b3VjaGVuZCdcbn1cbmNvbnN0IGRyYWdnYWJsZXMgPSBbXVxuY29uc3QgdHJhbnNmb3JtUHJvcGVydHkgPSAndHJhbnNmb3JtJ1xuY29uc3QgdHJhbnNpdGlvblByb3BlcnR5ID0gJ3RyYW5zaXRpb24nXG5cbmZ1bmN0aW9uIGdldFRvdWNoQnlJRChlbGVtZW50LCB0b3VjaElkKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudC5jaGFuZ2VkVG91Y2hlcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChlbGVtZW50LmNoYW5nZWRUb3VjaGVzW2ldLmlkZW50aWZpZXIgPT09IHRvdWNoSWQpIHtcbiAgICAgIHJldHVybiBlbGVtZW50LmNoYW5nZWRUb3VjaGVzW2ldXG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZVxufVxuXG5mdW5jdGlvbiBwcmV2ZW50RG91YmxlSW5pdChkcmFnZ2FibGUpIHtcbiAgY29uc3QgbWVzc2FnZSA9IFwiZm9yIHRoaXMgZWxlbWVudCBEcmFnZWUuRHJhZ2dhYmxlIGlzIGFscmVhZHkgZXhpc3QsIGRvbid0IGNyZWF0ZSBpdCB0d2ljZSBcIlxuICBpZiAoZHJhZ2dhYmxlcy5zb21lKChleGlzdGluZykgPT4gZHJhZ2dhYmxlLmVsZW1lbnQgPT09IGV4aXN0aW5nLmVsZW1lbnQpKSB7XG4gICAgdGhyb3cgbWVzc2FnZVxuICB9XG4gIGRyYWdnYWJsZXMucHVzaChkcmFnZ2FibGUpXG59XG5cbmZ1bmN0aW9uIGNvcHlTdHlsZXMoc291cmNlLCBkZXN0aW5hdGlvbikge1xuICBjb25zdCBjcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHNvdXJjZSlcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qga2V5ID0gY3NbaV1cbiAgICBpZiAoKGtleS5pbmRleE9mKCd0cmFuc2l0aW9uJykgPCAwKSAmJiAoa2V5LmluZGV4T2YoJ3RyYW5zZm9ybScpIDwgMCkpIHtcbiAgICAgIGRlc3RpbmF0aW9uLnN0eWxlW2tleV0gPSBjc1trZXldXG4gICAgfVxuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzb3VyY2UuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICBjb3B5U3R5bGVzKHNvdXJjZS5jaGlsZHJlbltpXSwgZGVzdGluYXRpb24uY2hpbGRyZW5baV0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhZ2dhYmxlIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgb3B0aW9ucz17fSkge1xuICAgIHN1cGVyKG9wdGlvbnMpXG4gICAgdGhpcy50YXJnZXRzID0gW11cbiAgICB0aGlzLl9kcmFnRW5kQWN0aW9ucyA9IFtdXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9uc1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgICBwcmV2ZW50RG91YmxlSW5pdCh0aGlzKVxuICAgIGN1cnJlbnRTY29wZSgpLmFkZERyYWdnYWJsZSh0aGlzKVxuICAgIHRoaXMuX2VuYWJsZSA9IHRydWVcbiAgICB0aGlzLnN0YXJ0Qm91bmRpbmcoKVxuICAgIHRoaXMuc3RhcnRQb3NpdGlvbmluZygpXG4gICAgdGhpcy5zdGFydExpc3RlbmluZygpXG4gIH1cblxuICBzdGFydEJvdW5kaW5nKCkge1xuICAgIHRoaXMuYm91bmRpbmcgPSB0aGlzLm9wdGlvbnMuYm91bmRpbmcgfHwge1xuICAgICAgYm91bmQ6IHRoaXMub3B0aW9ucy5ib3VuZCB8fCAoKHBvaW50KSA9PiBwb2ludClcbiAgICB9XG4gIH1cblxuICBzdGFydFBvc2l0aW9uaW5nKCkge1xuICAgIHRoaXMuX3NldERlZmF1bHRUcmFuc2l0aW9uKClcbiAgICB0aGlzLm9mZnNldCA9IHRoaXMuaXNDb25zaWRlclRyYW5zZm9ybU9mZnNldFxuICAgICAgPyBQb2ludC5lbGVtZW50Qm91bmRpbmdPZmZzZXQodGhpcy5lbGVtZW50LCB0aGlzLmNvbnRhaW5lcilcbiAgICAgIDogUG9pbnQuZWxlbWVudE9mZnNldCh0aGlzLmVsZW1lbnQsIHRoaXMuY29udGFpbmVyKVxuICAgIHRoaXMucGlubmVkUG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICAgIHRoaXMuaW5pdGlhbFBvc2l0aW9uID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uIHx8IHRoaXMub2Zmc2V0XG5cbiAgICB0aGlzLnBpblBvc2l0aW9uKHRoaXMuaW5pdGlhbFBvc2l0aW9uKVxuXG4gICAgaWYgKHRoaXMuYm91bmRpbmcucmVmcmVzaCkge1xuICAgICAgdGhpcy5ib3VuZGluZy5yZWZyZXNoKClcbiAgICB9XG4gIH1cblxuICBzdGFydExpc3RlbmluZygpIHtcbiAgICB0aGlzLl9kcmFnU3RhcnQgPSAoZXZlbnQpID0+IHRoaXMuZHJhZ1N0YXJ0KGV2ZW50KVxuICAgIHRoaXMuX2RyYWdNb3ZlID0gKGV2ZW50KSA9PiB0aGlzLmRyYWdNb3ZlKGV2ZW50KVxuICAgIHRoaXMuX2RyYWdFbmQgPSAoZXZlbnQpID0+IHRoaXMuZHJhZ0VuZChldmVudClcbiAgICB0aGlzLl9uYXRpdmVEcmFnU3RhcnQgPSAoZXZlbnQpID0+IHRoaXMubmF0aXZlRHJhZ1N0YXJ0KGV2ZW50KVxuICAgIHRoaXMuX25hdGl2ZURyYWdPdmVyID0gdGhyb3R0bGVkRHJhZ092ZXIoKGV2ZW50KSA9PiB0aGlzLm5hdGl2ZURyYWdPdmVyKGV2ZW50KSwgdGhpcy5kcmFnT3ZlclRocm90dGxlRHVyYXRpb24pXG4gICAgdGhpcy5fbmF0aXZlRHJhZ0VuZCA9IChldmVudCkgPT4gdGhpcy5uYXRpdmVEcmFnRW5kKGV2ZW50KVxuICAgIHRoaXMuX25hdGl2ZURyb3AgPSAoZXZlbnQpID0+IHRoaXMubmF0aXZlRHJvcChldmVudClcbiAgICB0aGlzLl9zY3JvbGwgPSAoZXZlbnQpID0+IHRoaXMub25TY3JvbGwoZXZlbnQpXG5cbiAgICB0aGlzLmhhbmRsZXIuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0LCBwYXNzaXZlRmFsc2UpXG4gICAgdGhpcy5oYW5kbGVyLmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydCwgcGFzc2l2ZUZhbHNlKVxuICB9XG5cbiAgZ2V0U2l6ZSgpIHtcbiAgICByZXR1cm4gUG9pbnQuZWxlbWVudFNpemUodGhpcy5lbGVtZW50KVxuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMub2Zmc2V0LmFkZCh0aGlzLl90cmFuc2Zvcm1Qb3NpdGlvbiB8fCBuZXcgUG9pbnQoMCwgMCkpXG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25cbiAgfVxuXG4gIGdldENlbnRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi5hZGQodGhpcy5nZXRTaXplKCkubXVsdCgwLjUpKVxuICB9XG5cbiAgX3NldERlZmF1bHRUcmFuc2l0aW9uICgpIHtcbiAgICBpZiAoIXRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNpdGlvblByb3BlcnR5XSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZWxlbWVudClbdHJhbnNpdGlvblByb3BlcnR5XVxuICAgIH1cbiAgfVxuXG4gIF9zZXRUcmFuc2l0aW9uKHRpbWUpIHtcbiAgICBsZXQgdHJhbnNpdGlvbiA9IHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldXG4gICAgY29uc3QgdHJhbnNpdGlvbkNzcyA9IGB0cmFuc2Zvcm0gJHt0aW1lfW1zYFxuXG4gICAgaWYgKCEvdHJhbnNmb3JtXFxzP1xcZCptP3M/Ly50ZXN0KHRyYW5zaXRpb24pKSB7XG4gICAgICBpZiAodHJhbnNpdGlvbikge1xuICAgICAgICB0cmFuc2l0aW9uICs9IGAsICR7dHJhbnNpdGlvbkNzc31gXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cmFuc2l0aW9uID0gdHJhbnNpdGlvbkNzc1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0cmFuc2l0aW9uID0gdHJhbnNpdGlvbi5yZXBsYWNlKC90cmFuc2Zvcm1cXHM/XFxkKm0/cz8vZywgdHJhbnNpdGlvbkNzcylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV0gIT09IHRyYW5zaXRpb24pIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldID0gdHJhbnNpdGlvblxuICAgIH1cbiAgfVxuXG4gIF9zZXRUcmFuc2xhdGUocG9pbnQpIHtcbiAgICB0aGlzLl90cmFuc2Zvcm1Qb3NpdGlvbiA9IHBvaW50XG4gICAgY29uc3QgdHJhbnNsYXRlQ3NzID0gYHRyYW5zbGF0ZTNkKCR7cG9pbnQueH1weCwgJHtwb2ludC55fXB4LCAwcHgpYFxuXG4gICAgbGV0IHRyYW5zZm9ybSA9IHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wZXJ0eV1cblxuICAgIGlmICh0aGlzLnNob3VsZFJlbW92ZVplcm9UcmFuc2xhdGUgJiYgcG9pbnQueCA9PT0gMCAmJiBwb2ludC55ID09PSAwKSB7XG4gICAgICB0cmFuc2Zvcm0gPSB0cmFuc2Zvcm0ucmVwbGFjZSgvdHJhbnNsYXRlM2RcXChbXildK1xcKS8sICcnKVxuICAgIH0gZWxzZSBpZiAoIS90cmFuc2xhdGUzZFxcKFteKV0rXFwpLy50ZXN0KHRyYW5zZm9ybSkpIHtcbiAgICAgIGlmICh0cmFuc2Zvcm0pIHtcbiAgICAgICAgdHJhbnNmb3JtICs9ICcgJ1xuICAgICAgfVxuICAgICAgdHJhbnNmb3JtICs9IHRyYW5zbGF0ZUNzc1xuICAgIH0gZWxzZSB7XG4gICAgICB0cmFuc2Zvcm0gPSB0cmFuc2Zvcm0ucmVwbGFjZSgvdHJhbnNsYXRlM2RcXChbXildK1xcKS8sIHRyYW5zbGF0ZUNzcylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BlcnR5XSAhPT0gdHJhbnNmb3JtKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcGVydHldID0gdHJhbnNmb3JtXG4gICAgfVxuICB9XG5cbiAgbW92ZShwb2ludCwgdGltZT0wLCBpc1NpbGVudD1mYWxzZSkge1xuICAgIHBvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIHRoaXMucG9zaXRpb24gPSBwb2ludFxuXG4gICAgdGhpcy5fc2V0VHJhbnNpdGlvbih0aW1lKVxuICAgIHRoaXMuX3NldFRyYW5zbGF0ZShwb2ludC5zdWIodGhpcy5vZmZzZXQpKVxuXG4gICAgaWYgKCFpc1NpbGVudCkge1xuICAgICAgdGhpcy5lbWl0RHJhZ0V2ZW50KCdtb3ZlJylcbiAgICB9XG4gIH1cblxuICBwaW5Qb3NpdGlvbihwb2ludCwgdGltZT0wLCBzaWxlbnQ9dHJ1ZSkge1xuICAgIHRoaXMucGlubmVkUG9zaXRpb24gPSBwb2ludC5jbG9uZSgpXG4gICAgdGhpcy5tb3ZlKHRoaXMucGlubmVkUG9zaXRpb24sIHRpbWUsIHNpbGVudClcbiAgfVxuXG4gIHJlc2V0UG9zaXRpb25Ub0luaXRpYWwgKCkge1xuICAgIHRoaXMucGluUG9zaXRpb24odGhpcy5pbml0aWFsUG9zaXRpb24pXG4gIH1cblxuICByZWZyZXNoUG9zaXRpb24gKCkge1xuICAgIHRoaXMuc2V0UG9zaXRpb24odGhpcy5nZXRQb3NpdGlvbigpKVxuICB9XG5cbiAgc2V0UG9zaXRpb24ocG9pbnQpIHtcbiAgICBwb2ludCA9IHBvaW50LmNsb25lKClcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9pbnRcbiAgICB0aGlzLl9zZXRUcmFuc2l0aW9uKDApXG4gICAgdGhpcy5fc2V0VHJhbnNsYXRlKHBvaW50LnN1Yih0aGlzLm9mZnNldCkpXG4gIH1cblxuICBkZXRlcm1pbmVEaXJlY3Rpb24ocG9pbnQpIHtcbiAgICB0aGlzLl9wcmV2aW91c0RpcmVjdGlvblBvc2l0aW9uIHx8PSB0aGlzLl9zdGFydFBvc2l0aW9uXG5cbiAgICB0aGlzLmxlZnREaXJlY3Rpb24gPSAodGhpcy5fcHJldmlvdXNEaXJlY3Rpb25Qb3NpdGlvbi54ID4gcG9pbnQueClcbiAgICB0aGlzLnJpZ2h0RGlyZWN0aW9uID0gKHRoaXMuX3ByZXZpb3VzRGlyZWN0aW9uUG9zaXRpb24ueCA8IHBvaW50LngpXG4gICAgdGhpcy51cERpcmVjdGlvbiA9ICh0aGlzLl9wcmV2aW91c0RpcmVjdGlvblBvc2l0aW9uLnkgPiBwb2ludC55KVxuICAgIHRoaXMuZG93bkRpcmVjdGlvbiA9ICh0aGlzLl9wcmV2aW91c0RpcmVjdGlvblBvc2l0aW9uLnkgPCBwb2ludC55KVxuXG4gICAgdGhpcy5fcHJldmlvdXNEaXJlY3Rpb25Qb3NpdGlvbiA9IHBvaW50XG4gIH1cblxuICBzZWVtc1Njcm9sbGluZygpIHtcbiAgICByZXR1cm4gKCtuZXcgRGF0ZSgpIC0gdGhpcy5fc3RhcnRUb3VjaFRpbWVzdGFtcCkgPCB0aGlzLnRvdWNoRHJhZ2dpbmdUaHJlc2hvbGRcbiAgfVxuXG4gIHNob3VsZFVzZU5hdGl2ZURyYWdBbmREcm9wKCkge1xuICAgIGlmICh0aGlzLmlzVG91Y2hFdmVudCkge1xuICAgICAgcmV0dXJuIHRoaXMubmF0aXZlRHJhZ0FuZERyb3AgJiYgdGhpcy5lbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3BPblRvdWNoXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLm5hdGl2ZURyYWdBbmREcm9wXG4gICAgfVxuICB9XG5cbiAgZHJhZ1N0YXJ0KGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLl9lbmFibGUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLnN0b3BQcm9wYWdhdGlvbk9uRHJhZ1N0YXJ0KSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIH1cblxuICAgIHRoaXMuaXNUb3VjaEV2ZW50ID0gKGlzVG91Y2ggJiYgKGV2ZW50IGluc3RhbmNlb2Ygd2luZG93LlRvdWNoRXZlbnQpKVxuXG4gICAgdGhpcy50b3VjaFBvaW50ID0gdGhpcy5fc3RhcnRUb3VjaFBvaW50ID0gbmV3IFBvaW50KFxuICAgICAgdGhpcy5pc1RvdWNoRXZlbnQgPyBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCA6IGV2ZW50LmNsaWVudFgsXG4gICAgICB0aGlzLmlzVG91Y2hFdmVudCA/IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZIDogZXZlbnQuY2xpZW50WVxuICAgIClcblxuICAgIHRoaXMuX3N0YXJ0UG9zaXRpb24gPSB0aGlzLmdldFBvc2l0aW9uKClcbiAgICBpZiAodGhpcy5pc1RvdWNoRXZlbnQpIHtcbiAgICAgIHRoaXMuX3RvdWNoSWQgPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5pZGVudGlmaWVyXG4gICAgICB0aGlzLl9zdGFydFRvdWNoVGltZXN0YW1wID0gK25ldyBEYXRlKClcbiAgICB9XG5cbiAgICB0aGlzLl9zdGFydFdpbmRvd1Njcm9sbFBvaW50ID0gdGhpcy53aW5kb3dTY3JvbGxQb2ludFxuICAgIHRoaXMuX3N0YXJ0U2Nyb2xsRWxlbWVudHNPZmZzZXQgPSB0aGlzLnNjcm9sbEVsZW1lbnRzT2Zmc2V0XG5cbiAgICBpZiAoZXZlbnQudGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJbnB1dEVsZW1lbnQgfHxcbiAgICAgICAgICBldmVudC50YXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElucHV0RWxlbWVudCkge1xuICAgICAgZXZlbnQudGFyZ2V0LmZvY3VzKClcbiAgICB9XG5cbiAgICBjb25zdCBpc1N0YXJ0UGVuZGluZyA9ICF0aGlzLnNob3VsZFVzZU5hdGl2ZURyYWdBbmREcm9wKCkgJiYgdGhpcy5kcmFnU3RhcnRUaHJlc2hvbGQgPiAwXG4gICAgaWYgKCFpc1N0YXJ0UGVuZGluZyAmJiAhdGhpcy5lbWl0RHJhZ0V2ZW50KCdzdGFydCcsIHsgY2FuY2VsYWJsZTogdHJ1ZSB9KSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2hvdWxkVXNlTmF0aXZlRHJhZ0FuZERyb3AoKSkge1xuICAgICAgaWYgKHRoaXMuaXNUb3VjaEV2ZW50ICYmIHRoaXMuZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wT25Ub3VjaCkge1xuICAgICAgICB0aGlzLl9zdGFydFBhcmVudHNTY3JvbGxPZmZzZXQgPSB0aGlzLnBhcmVudHNTY3JvbGxPZmZzZXRcblxuICAgICAgICBjb25zdCBlbXVsYXRlT25GaXJzdE1vdmUgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5zZWVtc1Njcm9sbGluZygpKSB7XG4gICAgICAgICAgICB0aGlzLmNhbmNlbERyYWdnaW5nKClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3AoZXZlbnQpXG4gICAgICAgICAgfVxuICAgICAgICAgIGNhbmNlbEVtdWxhdGlvbigpXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2FuY2VsRW11bGF0aW9uID0gKCkgPT4ge1xuICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgZW11bGF0ZU9uRmlyc3RNb3ZlKVxuICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCBjYW5jZWxFbXVsYXRpb24pXG4gICAgICAgIH1cblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIGVtdWxhdGVPbkZpcnN0TW92ZSwgcGFzc2l2ZUZhbHNlKVxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgY2FuY2VsRW11bGF0aW9uLCBwYXNzaXZlRmFsc2UpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgdGhpcy5fbmF0aXZlRHJhZ1N0YXJ0KVxuICAgICAgICB0aGlzLmVsZW1lbnQuZHJhZ2dhYmxlID0gdHJ1ZVxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fbmF0aXZlRHJhZ0VuZCwgcGFzc2l2ZUZhbHNlKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlLCBwYXNzaXZlRmFsc2UpXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlLCBwYXNzaXZlRmFsc2UpXG5cbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kLCBwYXNzaXZlRmFsc2UpXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZCwgcGFzc2l2ZUZhbHNlKVxuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9zY3JvbGwpXG4gICAgdGhpcy5zY3JvbGxFbGVtZW50cy5mb3JFYWNoKChwKSA9PiBwLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX3Njcm9sbCkpXG5cbiAgICB0aGlzLl9kcmFnU3RhcnRQZW5kaW5nID0gaXNTdGFydFBlbmRpbmdcbiAgfVxuXG4gIGRyYWdNb3ZlKGV2ZW50KSB7XG4gICAgbGV0IHRvdWNoXG5cbiAgICB0aGlzLmlzVG91Y2hFdmVudCA9IChpc1RvdWNoICYmIChldmVudCBpbnN0YW5jZW9mIHdpbmRvdy5Ub3VjaEV2ZW50KSlcbiAgICBpZiAodGhpcy5pc1RvdWNoRXZlbnQpIHtcbiAgICAgIHRvdWNoID0gZ2V0VG91Y2hCeUlEKGV2ZW50LCB0aGlzLl90b3VjaElkKVxuXG4gICAgICBpZiAoIXRvdWNoKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5zZWVtc1Njcm9sbGluZygpKSB7XG4gICAgICAgIHRoaXMuY2FuY2VsRHJhZ2dpbmcoKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnRvdWNoUG9pbnQgPSBuZXcgUG9pbnQoXG4gICAgICB0aGlzLmlzVG91Y2hFdmVudCA/IHRvdWNoLnBhZ2VYIDogZXZlbnQuY2xpZW50WCxcbiAgICAgIHRoaXMuaXNUb3VjaEV2ZW50ID8gdG91Y2gucGFnZVkgOiBldmVudC5jbGllbnRZXG4gICAgKVxuXG4gICAgaWYgKHRoaXMuX2RyYWdTdGFydFBlbmRpbmcpIHtcbiAgICAgIGNvbnN0IGR4ID0gdGhpcy50b3VjaFBvaW50LnggLSB0aGlzLl9zdGFydFRvdWNoUG9pbnQueFxuICAgICAgY29uc3QgZHkgPSB0aGlzLnRvdWNoUG9pbnQueSAtIHRoaXMuX3N0YXJ0VG91Y2hQb2ludC55XG4gICAgICBpZiAoTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KSA8IHRoaXMuZHJhZ1N0YXJ0VGhyZXNob2xkKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgdGhpcy5fZHJhZ1N0YXJ0UGVuZGluZyA9IGZhbHNlXG4gICAgICBpZiAoIXRoaXMuZW1pdERyYWdFdmVudCgnc3RhcnQnLCB7IGNhbmNlbGFibGU6IHRydWUgfSkpIHtcbiAgICAgICAgdGhpcy5jYW5jZWxEcmFnZ2luZygpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuaXNEcmFnZ2luZyA9IHRydWVcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgIGxldCBwb2ludCA9IHRoaXMuX3N0YXJ0UG9zaXRpb24uYWRkKHRoaXMudG91Y2hQb2ludC5zdWIodGhpcy5fc3RhcnRUb3VjaFBvaW50KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZCh0aGlzLndpbmRvd1Njcm9sbFBvaW50LnN1Yih0aGlzLl9zdGFydFdpbmRvd1Njcm9sbFBvaW50KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZCh0aGlzLnNjcm9sbEVsZW1lbnRzT2Zmc2V0LnN1Yih0aGlzLl9zdGFydFNjcm9sbEVsZW1lbnRzT2Zmc2V0KSlcblxuICAgIHBvaW50ID0gdGhpcy5ib3VuZGluZy5ib3VuZChwb2ludCwgdGhpcy5nZXRTaXplKCkpXG4gICAgdGhpcy5kZXRlcm1pbmVEaXJlY3Rpb24ocG9pbnQpXG4gICAgdGhpcy5tb3ZlKHBvaW50KVxuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkcmFnZWUtYWN0aXZlJylcbiAgfVxuXG4gIGRyYWdFbmQoZXZlbnQpIHtcbiAgICB0aGlzLmlzVG91Y2hFdmVudCA9IChpc1RvdWNoICYmIChldmVudCBpbnN0YW5jZW9mIHdpbmRvdy5Ub3VjaEV2ZW50KSlcblxuICAgIGlmICh0aGlzLmlzVG91Y2hFdmVudCAmJiAhZ2V0VG91Y2hCeUlEKGV2ZW50LCB0aGlzLl90b3VjaElkKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2RyYWdTdGFydFBlbmRpbmcpIHtcbiAgICAgIC8vIHRocmVzaG9sZCBuZXZlciBjcm9zc2VkIOKAlCB0cmVhdCBhcyBjbGljaywgY2xlYW4gdXAgc2lsZW50bHlcbiAgICAgIHRoaXMuX2RyYWdTdGFydFBlbmRpbmcgPSBmYWxzZVxuICAgICAgdGhpcy5jYW5jZWxEcmFnZ2luZygpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc0RyYWdnaW5nKSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIH1cblxuICAgIHRoaXMuZHJhZ0VuZEFjdGlvbigpXG4gICAgdGhpcy5lbWl0RHJhZ0V2ZW50KCdlbmQnKVxuICAgIHRoaXMuY2FuY2VsRHJhZ2dpbmcoKVxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2VlLWFjdGl2ZScpKVxuICB9XG5cbiAgb25TY3JvbGwoX2V2ZW50KSB7XG4gICAgbGV0IHBvaW50ID0gdGhpcy5fc3RhcnRQb3NpdGlvbi5hZGQodGhpcy50b3VjaFBvaW50LnN1Yih0aGlzLl9zdGFydFRvdWNoUG9pbnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMud2luZG93U2Nyb2xsUG9pbnQuc3ViKHRoaXMuX3N0YXJ0V2luZG93U2Nyb2xsUG9pbnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMuc2Nyb2xsRWxlbWVudHNPZmZzZXQuc3ViKHRoaXMuX3N0YXJ0U2Nyb2xsRWxlbWVudHNPZmZzZXQpKVxuXG4gICAgcG9pbnQgPSB0aGlzLmJvdW5kaW5nLmJvdW5kKHBvaW50LCB0aGlzLmdldFNpemUoKSlcbiAgICBpZiAoIXRoaXMubmF0aXZlRHJhZ0FuZERyb3ApIHtcbiAgICAgIHRoaXMuZGV0ZXJtaW5lRGlyZWN0aW9uKHBvaW50KVxuICAgICAgdGhpcy5tb3ZlKHBvaW50KVxuICAgIH1cbiAgfVxuXG4gIG5hdGl2ZURyYWdTdGFydChldmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQnLCAnRmlyZUZveCBmaXgnKVxuICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gJ21vdmUnXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCB0aGlzLl9uYXRpdmVEcmFnT3ZlcilcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgdGhpcy5fbmF0aXZlRHJvcClcbiAgfVxuXG4gIG5hdGl2ZURyYWdPdmVyKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gJ21vdmUnXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RyYWdlZS1wbGFjZWhvbGRlcicpXG4gICAgaWYgKGV2ZW50LmNsaWVudFggPT09IDAgJiYgZXZlbnQuY2xpZW50WSA9PT0gMCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy50b3VjaFBvaW50ID0gbmV3IFBvaW50KGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpXG4gICAgbGV0IHBvaW50ID0gdGhpcy5fc3RhcnRQb3NpdGlvbi5hZGQodGhpcy50b3VjaFBvaW50LnN1Yih0aGlzLl9zdGFydFRvdWNoUG9pbnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMud2luZG93U2Nyb2xsUG9pbnQuc3ViKHRoaXMuX3N0YXJ0V2luZG93U2Nyb2xsUG9pbnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMuc2Nyb2xsRWxlbWVudHNPZmZzZXQuc3ViKHRoaXMuX3N0YXJ0U2Nyb2xsRWxlbWVudHNPZmZzZXQpKVxuICAgIHBvaW50ID0gdGhpcy5ib3VuZGluZy5ib3VuZChwb2ludCwgdGhpcy5nZXRTaXplKCkpXG4gICAgdGhpcy5kZXRlcm1pbmVEaXJlY3Rpb24ocG9pbnQpXG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvaW50XG4gICAgdGhpcy5lbWl0RHJhZ0V2ZW50KCdtb3ZlJylcbiAgfVxuXG4gIG5hdGl2ZURyYWdFbmQoX2V2ZW50KSB7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdlZS1wbGFjZWhvbGRlcicpXG4gICAgdGhpcy5kcmFnRW5kQWN0aW9uKClcbiAgICB0aGlzLmVtaXREcmFnRXZlbnQoJ2VuZCcpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCB0aGlzLl9uYXRpdmVEcmFnT3ZlcilcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcm9wJywgdGhpcy5fbmF0aXZlRHJvcClcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fc2Nyb2xsKVxuICAgIHRoaXMuc2Nyb2xsRWxlbWVudHMuZm9yRWFjaCgocCkgPT4gcC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9zY3JvbGwpKVxuICAgIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnZHJhZ2dhYmxlJylcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgdGhpcy5fbmF0aXZlRHJhZ1N0YXJ0KVxuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZWUtYWN0aXZlJylcbiAgfVxuXG4gIG5hdGl2ZURyb3AoZXZlbnQpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIGNhbmNlbERyYWdnaW5nICgpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG5cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcblxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX3Njcm9sbClcbiAgICB0aGlzLnNjcm9sbEVsZW1lbnRzLmZvckVhY2goKHApID0+IHAucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fc2Nyb2xsKSlcblxuICAgIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlXG4gICAgdGhpcy5fcHJldmlvdXNEaXJlY3Rpb25Qb3NpdGlvbiA9IG51bGxcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkcmFnZ2FibGUnKVxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCB0aGlzLl9uYXRpdmVEcmFnU3RhcnQpXG4gIH1cblxuICBjb3B5U3R5bGVzKHNvdXJjZSwgZGVzdGluYXRpb24pIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmNvcHlTdHlsZXMpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5jb3B5U3R5bGVzKHNvdXJjZSwgZGVzdGluYXRpb24pXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvcHlTdHlsZXMoc291cmNlLCBkZXN0aW5hdGlvbilcbiAgICB9XG4gIH1cblxuICBlbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3AoZXZlbnQpIHtcbiAgICBjb25zdCBjb250YWluZXJSZWN0ID0gdGhpcy5jb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICBjb25zdCBjbG9uZWRFbGVtZW50ID0gdGhpcy5lbGVtZW50LmNsb25lTm9kZSh0cnVlKVxuICAgIGNsb25lZEVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcGVydHldID0gJydcbiAgICB0aGlzLmNvcHlTdHlsZXModGhpcy5lbGVtZW50LCBjbG9uZWRFbGVtZW50KVxuICAgIGNsb25lZEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZHJhZ2VlLW5hdGl2ZS1lbXVsYXRpb24nKVxuICAgIGNsb25lZEVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjbG9uZWRFbGVtZW50KVxuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkcmFnZWUtcGxhY2Vob2xkZXInKVxuXG4gICAgY29uc3QgZW11bGF0aW9uRHJhZ2dhYmxlID0gbmV3IERyYWdnYWJsZShjbG9uZWRFbGVtZW50LCB7XG4gICAgICBjb250YWluZXI6IGRvY3VtZW50LmJvZHksXG4gICAgICB0b3VjaERyYWdnaW5nVGhyZXNob2xkOiAwLFxuICAgICAgZG9tRXZlbnRzOiBmYWxzZSxcbiAgICAgIGJvdW5kKHBvaW50KSB7XG4gICAgICAgIHJldHVybiBwb2ludFxuICAgICAgfSxcbiAgICAgIG9uOiB7XG4gICAgICAgICdkcmFnOm1vdmUnOiAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgY29udGFpbmVyUmVjdFBvaW50ID0gbmV3IFBvaW50KGNvbnRhaW5lclJlY3QubGVmdCwgY29udGFpbmVyUmVjdC50b3ApXG4gICAgICAgICAgdGhpcy5wb3NpdGlvbiA9IGVtdWxhdGlvbkRyYWdnYWJsZS5wb3NpdGlvbi5zdWIoY29udGFpbmVyUmVjdFBvaW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3ViKHRoaXMuX3N0YXJ0V2luZG93U2Nyb2xsUG9pbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy5fc3RhcnRQYXJlbnRzU2Nyb2xsT2Zmc2V0KVxuXG4gICAgICAgICAgdGhpcy5kZXRlcm1pbmVEaXJlY3Rpb24odGhpcy5wb3NpdGlvbilcbiAgICAgICAgICB0aGlzLmVtaXREcmFnRXZlbnQoJ21vdmUnKVxuICAgICAgICB9LFxuICAgICAgICAnZHJhZzplbmQnOiAoKSA9PiB7XG4gICAgICAgICAgZW11bGF0aW9uRHJhZ2dhYmxlLmRlc3Ryb3koKVxuICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoY2xvbmVkRWxlbWVudClcbiAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2VlLXBsYWNlaG9sZGVyJylcbiAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2VlLWFjdGl2ZScpXG5cbiAgICAgICAgICB0aGlzLmRyYWdFbmRBY3Rpb24oKVxuICAgICAgICAgIHRoaXMuZW1pdERyYWdFdmVudCgnZW5kJylcbiAgICAgICAgICB0aGlzLmNhbmNlbERyYWdnaW5nKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBjb250YWluZXJSZWN0UG9pbnQgPSBuZXcgUG9pbnQoY29udGFpbmVyUmVjdC5sZWZ0LCBjb250YWluZXJSZWN0LnRvcClcbiAgICBlbXVsYXRpb25EcmFnZ2FibGUuX3N0YXJ0V2luZG93U2Nyb2xsUG9pbnQgPSB0aGlzLl9zdGFydFdpbmRvd1Njcm9sbFBvaW50XG5cbiAgICBlbXVsYXRpb25EcmFnZ2FibGUubW92ZShcbiAgICAgIHRoaXMucGlubmVkUG9zaXRpb24uYWRkKGNvbnRhaW5lclJlY3RQb2ludClcbiAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMud2luZG93U2Nyb2xsUG9pbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgLnN1Yih0aGlzLnBhcmVudHNTY3JvbGxPZmZzZXQpXG4gICAgKVxuXG4gICAgZW11bGF0aW9uRHJhZ2dhYmxlLmRyYWdTdGFydChldmVudClcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBlbWl0RHJhZ0V2ZW50KHR5cGUsIHsgY2FuY2VsYWJsZSA9IGZhbHNlIH0gPSB7fSkge1xuICAgIGNvbnN0IGRldGFpbCA9IHsgZHJhZ2dhYmxlOiB0aGlzIH1cbiAgICBjb25zdCBpc05vdFByZXZlbnRlZCA9IHRoaXMuZW1pdChgZHJhZzoke3R5cGV9YCwgZGV0YWlsLCB7IGNhbmNlbGFibGUgfSlcblxuICAgIGlmICghdGhpcy5kb21FdmVudHMpIHJldHVybiBpc05vdFByZXZlbnRlZFxuXG4gICAgcmV0dXJuIGRpc3BhdGNoRG9tRXZlbnQodGhpcy5lbGVtZW50LCBgZHJhZ2VlOiR7dHlwZX1gLCBkZXRhaWwsIHsgY2FuY2VsYWJsZSB9KSAmJiBpc05vdFByZXZlbnRlZFxuICB9XG5cbiAgb3ZlcnJpZGVEcmFnRW5kQWN0aW9uKGFjdGlvbikge1xuICAgIHRoaXMuX2RyYWdFbmRBY3Rpb25zLnB1c2goYWN0aW9uKVxuICAgIHJldHVybiAoKSA9PiByZW1vdmVJdGVtKHRoaXMuX2RyYWdFbmRBY3Rpb25zLCBhY3Rpb24pXG4gIH1cblxuICBkcmFnRW5kQWN0aW9uKCkge1xuICAgIGNvbnN0IGFjdGlvbiA9IHRoaXMuX2RyYWdFbmRBY3Rpb25zW3RoaXMuX2RyYWdFbmRBY3Rpb25zLmxlbmd0aCAtIDFdXG5cbiAgICBpZiAoYWN0aW9uKSB7XG4gICAgICBhY3Rpb24oKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBpblBvc2l0aW9uKHRoaXMucG9zaXRpb24pXG4gICAgfVxuICB9XG5cbiAgZ2V0UmVjdGFuZ2xlKCkge1xuICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHRoaXMucG9zaXRpb24sIHRoaXMuZ2V0U2l6ZSgpKVxuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICBpZiAodGhpcy5ib3VuZGluZy5yZWZyZXNoKSB7XG4gICAgICB0aGlzLmJvdW5kaW5nLnJlZnJlc2goKVxuICAgIH1cbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5oYW5kbGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydClcbiAgICB0aGlzLmhhbmRsZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0KVxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCB0aGlzLl9uYXRpdmVEcmFnU3RhcnQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgdGhpcy5fbmF0aXZlRHJhZ092ZXIpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIHRoaXMuX25hdGl2ZURyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX25hdGl2ZURyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJvcCcsIHRoaXMuX25hdGl2ZURyb3ApXG4gICAgc2NvcGVzLmZvckVhY2goKHNjb3BlKSA9PiBzY29wZS5yZWxlYXNlRHJhZ2dhYmxlKHRoaXMpKVxuXG4gICAgY29uc3QgaW5kZXggPSBkcmFnZ2FibGVzLmluZGV4T2YodGhpcylcbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgZHJhZ2dhYmxlcy5zcGxpY2UoaW5kZXgsIDEpXG4gICAgfVxuICB9XG5cbiAgZ2V0IGNvbnRhaW5lcigpIHtcbiAgICByZXR1cm4gKHRoaXMuX2NvbnRhaW5lciA9IHRoaXMuX2NvbnRhaW5lciB8fCB0aGlzLm9wdGlvbnMuY29udGFpbmVyIHx8IHRoaXMub3B0aW9ucy5wYXJlbnQgfHwgdGhpcy5lbGVtZW50Lm9mZnNldFBhcmVudClcbiAgfVxuXG4gIGdldCBoYW5kbGVyKCkge1xuICAgIGlmICghdGhpcy5faGFuZGxlcikge1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuaGFuZGxlciA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhpcy5faGFuZGxlciA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKHRoaXMub3B0aW9ucy5oYW5kbGVyKSB8fCB0aGlzLmVsZW1lbnRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZXIgPSB0aGlzLm9wdGlvbnMuaGFuZGxlciB8fCB0aGlzLmVsZW1lbnRcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5faGFuZGxlclxuICB9XG5cbiAgZ2V0IHN0b3BQcm9wYWdhdGlvbk9uRHJhZ1N0YXJ0KCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuc3RvcFByb3BhZ2F0aW9uT25EcmFnU3RhcnQgfHwgZmFsc2VcbiAgfVxuXG4gIGdldCBuYXRpdmVEcmFnQW5kRHJvcCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLm5hdGl2ZURyYWdBbmREcm9wIHx8IGZhbHNlXG4gIH1cblxuICBnZXQgZG9tRXZlbnRzKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZG9tRXZlbnRzICE9PSBmYWxzZVxuICB9XG5cbiAgZ2V0IGVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcE9uVG91Y2goKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5lbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3BPblRvdWNoIHx8IGZhbHNlXG4gIH1cblxuICBnZXQgc2hvdWxkUmVtb3ZlWmVyb1RyYW5zbGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLnNob3VsZFJlbW92ZVplcm9UcmFuc2xhdGUgfHwgZmFsc2VcbiAgfVxuXG4gIGdldCB0b3VjaERyYWdnaW5nVGhyZXNob2xkKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMudG91Y2hEcmFnZ2luZ1RocmVzaG9sZCB8fCAwXG4gIH1cblxuICBnZXQgZHJhZ1N0YXJ0VGhyZXNob2xkKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZHJhZ1N0YXJ0VGhyZXNob2xkIHx8IDBcbiAgfVxuXG4gIGdldCBkcmFnT3ZlclRocm90dGxlRHVyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5kcmFnT3ZlclRocm90dGxlRHVyYXRpb24gfHwgMTZcbiAgfVxuXG4gIGdldCBpc0NvbnNpZGVyVHJhbnNmb3JtT2Zmc2V0ICgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmNvbnNpZGVyVHJhbnNmb3JtT2Zmc2V0IHx8IGZhbHNlXG4gIH1cblxuICBnZXQgd2luZG93U2Nyb2xsUG9pbnQoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh3aW5kb3cuc2Nyb2xsWCwgd2luZG93LnNjcm9sbFkpXG4gIH1cblxuICBnZXQgc2Nyb2xsUm9vdENvbnRhaW5lcigpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLnNjcm9sbFJvb3RDb250YWluZXIgfHwgdGhpcy5jb250YWluZXJcbiAgfVxuXG4gIGdldCBzY3JvbGxFbGVtZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5fY2FjaGVkU2Nyb2xsRWxlbWVudHNcbiAgICAgID8gdGhpcy5fY2FjaGVkU2Nyb2xsRWxlbWVudHNcbiAgICAgIDogKHRoaXMuX2NhY2hlZFNjcm9sbEVsZW1lbnRzID0gZ2V0UGFyZW50c0NoYWluKHRoaXMuZWxlbWVudCwgdGhpcy5zY3JvbGxSb290Q29udGFpbmVyKSlcbiAgfVxuXG4gIGdldCBzY3JvbGxFbGVtZW50c09mZnNldCgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KFxuICAgICAgdGhpcy5zY3JvbGxFbGVtZW50cy5yZWR1Y2UoKHN1bSwgcCkgPT4gc3VtICsgcC5zY3JvbGxMZWZ0LCAwKSxcbiAgICAgIHRoaXMuc2Nyb2xsRWxlbWVudHMucmVkdWNlKChzdW0sIHApID0+IHN1bSArIHAuc2Nyb2xsVG9wLCAwKVxuICAgIClcbiAgfVxuXG4gIGdldCBwYXJlbnRzKCkge1xuICAgIHJldHVybiB0aGlzLl9jYWNoZWRQYXJlbnRzXG4gICAgICA/IHRoaXMuX2NhY2hlZFBhcmVudHNcbiAgICAgIDogKHRoaXMuX2NhY2hlZFBhcmVudHMgPSBnZXRQYXJlbnRzQ2hhaW4odGhpcy5lbGVtZW50LCB0aGlzLmNvbnRhaW5lcikpXG4gIH1cblxuICBnZXQgcGFyZW50c1Njcm9sbE9mZnNldCgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KFxuICAgICAgdGhpcy5wYXJlbnRzLnJlZHVjZSgoc3VtLCBwKSA9PiBzdW0gKyBwLnNjcm9sbExlZnQsIDApLFxuICAgICAgdGhpcy5wYXJlbnRzLnJlZHVjZSgoc3VtLCBwKSA9PiBzdW0gKyBwLnNjcm9sbFRvcCwgMClcbiAgICApXG4gIH1cblxuICBnZXQgZW5hYmxlKCkge1xuICAgIHJldHVybiB0aGlzLl9lbmFibGVcbiAgfVxuXG4gIHNldCBlbmFibGUoZW5hYmxlKSB7XG4gICAgaWYgKGVuYWJsZSkge1xuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdlZS1kaXNhYmxlJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RyYWdlZS1kaXNhYmxlJylcbiAgICB9XG5cbiAgICB0aGlzLl9lbmFibGUgPSBlbmFibGVcbiAgfVxufVxuXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0LCBpbW1lZGlhdGUpIHtcbiAgbGV0IHRpbWVvdXRcblxuICByZXR1cm4gZnVuY3Rpb24gZXhlY3V0ZWRGdW5jdGlvbigpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpc1xuICAgIGNvbnN0IGFyZ3MgPSBhcmd1bWVudHNcblxuICAgIGNvbnN0IGxhdGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICB0aW1lb3V0ID0gbnVsbFxuICAgICAgaWYgKCFpbW1lZGlhdGUpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncylcbiAgICB9XG5cbiAgICBjb25zdCBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0XG5cbiAgICBjbGVhclRpbWVvdXQodGltZW91dClcblxuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KVxuXG4gICAgaWYgKGNhbGxOb3cpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncylcbiAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldERpc3RhbmNlKHAxLCBwMikge1xuICBjb25zdCBkeCA9IHAxLnggLSBwMi54LCBkeSA9IHAxLnkgLSBwMi55XG4gIHJldHVybiBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRYRGlmZmVyZW5jZShwMSwgcDIpIHtcbiAgcmV0dXJuIE1hdGguYWJzKHAxLnggLSBwMi54KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0WURpZmZlcmVuY2UocDEsIHAyKSB7XG4gIHJldHVybiBNYXRoLmFicyhwMS55IC0gcDIueSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3Rvcnkob3B0aW9ucykge1xuICByZXR1cm4gKHAxLCBwMikgPT4ge1xuICAgIHJldHVybiBNYXRoLnNxcnQoXG4gICAgICBNYXRoLnBvdyhvcHRpb25zLnggKiBNYXRoLmFicyhwMS54IC0gcDIueCksIDIpICtcbiAgICAgIE1hdGgucG93KG9wdGlvbnMueSAqIE1hdGguYWJzKHAxLnkgLSBwMi55KSwgMilcbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluZGV4T2ZOZWFyZXN0UG9pbnQoYXJyLCB2YWwsIHJhZGl1cywgZ2V0RGlzdGFuY2VGdW5jPWdldERpc3RhbmNlKSB7XG4gIGxldCBzaXplLCBpbmRleCA9IDAsIGksIHRlbXBcbiAgaWYgKGFyci5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gLTFcbiAgfVxuICBzaXplID0gZ2V0RGlzdGFuY2VGdW5jKGFyclswXSwgdmFsKVxuICBmb3IgKGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgdGVtcCA9IGdldERpc3RhbmNlRnVuYyhhcnJbaV0sIHZhbClcbiAgICBpZiAodGVtcCA8IHNpemUpIHtcbiAgICAgIHNpemUgPSB0ZW1wXG4gICAgICBpbmRleCA9IGlcbiAgICB9XG4gIH1cbiAgaWYgKHJhZGl1cyA+PSAwICYmIHNpemUgPiByYWRpdXMpIHtcbiAgICByZXR1cm4gLTFcbiAgfVxuICByZXR1cm4gaW5kZXhcbn1cbiIsImltcG9ydCBkZWJvdW5jZSBmcm9tICcuL3V0aWxzL2RlYm91bmNlJ1xuaW1wb3J0IHJlbW92ZUl0ZW0gZnJvbSAnLi91dGlscy9yZW1vdmUtYXJyYXktaXRlbSdcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudEVtaXR0ZXInXG5pbXBvcnQgZGlzcGF0Y2hEb21FdmVudCBmcm9tICcuL3V0aWxzL2Rpc3BhdGNoLWRvbS1ldmVudCdcbmltcG9ydCB7XG4gIGdldERpc3RhbmNlLFxuICBpbmRleE9mTmVhcmVzdFBvaW50XG59IGZyb20gJy4vZ2VvbWV0cnkvZGlzdGFuY2VzJ1xuXG5pbXBvcnQgRHJhZ2dhYmxlIGZyb20gJy4vZHJhZ2dhYmxlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0IGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoZHJhZ2dhYmxlcywgb3B0aW9ucz17fSkge1xuICAgIHN1cGVyKG9wdGlvbnMpXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICB0aW1lRW5kOiAyMDAsXG4gICAgICB0aW1lRXhjYW5nZTogNDAwLFxuICAgICAgcmFkaXVzOiAzMFxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0aGlzLmNvbnRhaW5lciA9IG9wdGlvbnMuY29udGFpbmVyXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gZHJhZ2dhYmxlc1xuICAgIHRoaXMuY2hhbmdlZER1cmluZ0l0ZXJhdGlvbiA9IGZhbHNlXG4gICAgdGhpcy5kcmFnZ2FibGVDb250cm9sbGVycyA9IG5ldyBNYXAoKVxuXG4gICAgdGhpcy5yZXNpemVPYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcihkZWJvdW5jZSh0aGlzLm9uUmVzaXplLmJpbmQodGhpcyksIDEwMCkpXG5cbiAgICBpZiAodGhpcy5jb250YWluZXIpIHtcbiAgICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLmNvbnRhaW5lcilcbiAgICB9XG5cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgb25SZXNpemUoKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5yZW9yZGVyT25DaGFuZ2UpIHRoaXMucmVzZXQoKVxuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGlmKCFkcmFnZ2FibGUuaXNEcmFnZ2luZykge1xuICAgICAgICBkcmFnZ2FibGUuc3RhcnRQb3NpdGlvbmluZygpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5fZW5hYmxlID0gdHJ1ZVxuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHRoaXMuaW5pdERyYWdnYWJsZShkcmFnZ2FibGUpKVxuICB9XG5cbiAgaW5pdERyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICBkcmFnZ2FibGUuZW5hYmxlID0gdGhpcy5fZW5hYmxlXG4gICAgdGhpcy5saXN0ZW5UbyhkcmFnZ2FibGUsICdkcmFnOm1vdmUnLCAoKSA9PiB0aGlzLm9uTW92ZShkcmFnZ2FibGUpKVxuICAgIGNvbnN0IHJlc3RvcmVEcmFnRW5kQWN0aW9uID0gZHJhZ2dhYmxlLm92ZXJyaWRlRHJhZ0VuZEFjdGlvbigoKSA9PiB7XG4gICAgICBkcmFnZ2FibGUucGluUG9zaXRpb24oZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uLCB0aGlzLm9wdGlvbnMudGltZUVuZClcbiAgICAgIHRoaXMub25FbmQoZHJhZ2dhYmxlKVxuICAgIH0pXG4gICAgdGhpcy5zaWduYWxGb3IoZHJhZ2dhYmxlKS5hZGRFdmVudExpc3RlbmVyKCdhYm9ydCcsIHJlc3RvcmVEcmFnRW5kQWN0aW9uKVxuICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZShkcmFnZ2FibGUuZWxlbWVudClcbiAgfVxuXG4gIGxpc3RlblRvKGRyYWdnYWJsZSwgZXZlbnROYW1lLCBoYW5kbGVyKSB7XG4gICAgZHJhZ2dhYmxlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBoYW5kbGVyLCB7IHNpZ25hbDogdGhpcy5zaWduYWxGb3IoZHJhZ2dhYmxlKSB9KVxuICB9XG5cbiAgc2lnbmFsRm9yKGRyYWdnYWJsZSkge1xuICAgIGlmICghdGhpcy5kcmFnZ2FibGVDb250cm9sbGVycy5oYXMoZHJhZ2dhYmxlKSkge1xuICAgICAgdGhpcy5kcmFnZ2FibGVDb250cm9sbGVycy5zZXQoZHJhZ2dhYmxlLCBuZXcgQWJvcnRDb250cm9sbGVyKCkpXG4gICAgfVxuICAgIHJldHVybiB0aGlzLmRyYWdnYWJsZUNvbnRyb2xsZXJzLmdldChkcmFnZ2FibGUpLnNpZ25hbFxuICB9XG5cbiAgcmVsZWFzZURyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICB0aGlzLnJlc2l6ZU9ic2VydmVyLnVub2JzZXJ2ZShkcmFnZ2FibGUuZWxlbWVudClcbiAgICB0aGlzLmRyYWdnYWJsZUNvbnRyb2xsZXJzLmdldChkcmFnZ2FibGUpPy5hYm9ydCgpXG4gICAgdGhpcy5kcmFnZ2FibGVDb250cm9sbGVycy5kZWxldGUoZHJhZ2dhYmxlKVxuICAgIHJlbW92ZUl0ZW0odGhpcy5kcmFnZ2FibGVzLCBkcmFnZ2FibGUpXG4gIH1cblxuICBvbk1vdmUoZHJhZ2dhYmxlKSB7XG4gICAgaWYgKHRoaXMuc3dhcHBpbmdEaXNhYmxlZCkgcmV0dXJuXG5cbiAgICBjb25zdCBzb3J0ZWREcmFnZ2FibGVzID0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcbiAgICBjb25zdCBwaW5uZWRQb3NpdGlvbnMgPSBzb3J0ZWREcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24pXG5cbiAgICBjb25zdCBjdXJyZW50SW5kZXggPSBzb3J0ZWREcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKVxuICAgIGNvbnN0IHRhcmdldEluZGV4ID0gaW5kZXhPZk5lYXJlc3RQb2ludChwaW5uZWRQb3NpdGlvbnMsIGRyYWdnYWJsZS5wb3NpdGlvbiwgdGhpcy5vcHRpb25zLnJhZGl1cywgdGhpcy5kaXN0YW5jZUZ1bmMpXG5cbiAgICBpZiAodGFyZ2V0SW5kZXggIT09IC0xICYmIGN1cnJlbnRJbmRleCAhPT0gdGFyZ2V0SW5kZXgpIHtcbiAgICAgIGlmICh0YXJnZXRJbmRleCA8IGN1cnJlbnRJbmRleCkge1xuICAgICAgICBmb3IgKGxldCBpPXRhcmdldEluZGV4OyBpPGN1cnJlbnRJbmRleDsgaSsrKSB7XG4gICAgICAgICAgc29ydGVkRHJhZ2dhYmxlc1tpXS5waW5Qb3NpdGlvbihwaW5uZWRQb3NpdGlvbnNbaSsxXSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGxldCBpPWN1cnJlbnRJbmRleDsgaTx0YXJnZXRJbmRleDsgaSsrKSB7XG4gICAgICAgICAgc29ydGVkRHJhZ2dhYmxlc1tpKzFdLnBpblBvc2l0aW9uKHBpbm5lZFBvc2l0aW9uc1tpXSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChkcmFnZ2FibGUubmF0aXZlRHJhZ0FuZERyb3ApIHtcbiAgICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKHBpbm5lZFBvc2l0aW9uc1t0YXJnZXRJbmRleF0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24gPSBwaW5uZWRQb3NpdGlvbnNbdGFyZ2V0SW5kZXhdXG4gICAgICB9XG5cbiAgICAgIHRoaXMuY2hhbmdlZER1cmluZ0l0ZXJhdGlvbiA9IHRydWVcbiAgICB9XG4gIH1cblxuICBvbkVuZChkcmFnZ2FibGUpIHtcbiAgICBpZiAodGhpcy5jaGFuZ2VkRHVyaW5nSXRlcmF0aW9uKSB7XG4gICAgICB0aGlzLmVtaXRMaXN0RXZlbnQoJ2NoYW5nZScsIGRyYWdnYWJsZSlcbiAgICAgIHRoaXMuY2hhbmdlZER1cmluZ0l0ZXJhdGlvbiA9IGZhbHNlXG5cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucmVvcmRlck9uQ2hhbmdlICYmIHRoaXMub3B0aW9ucy5jb250YWluZXIpIHtcbiAgICAgICAgdGhpcy5yZW9yZGVyRWxlbWVudHMoZHJhZ2dhYmxlKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlb3JkZXJFbGVtZW50cyhtb3ZlZERyYWdnYWJsZSkge1xuICAgIGNvbnN0IHNvcnRlZERyYWdnYWJsZXMgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuICAgIGNvbnN0IGluZGV4ID0gc29ydGVkRHJhZ2dhYmxlcy5pbmRleE9mKG1vdmVkRHJhZ2dhYmxlKVxuICAgIGNvbnN0IG5leHQgPSBzb3J0ZWREcmFnZ2FibGVzW2luZGV4ICsgMV1cblxuICAgIHRoaXMucmVzZXQoKVxuXG4gICAgaWYgKG5leHQpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmluc2VydEJlZm9yZShtb3ZlZERyYWdnYWJsZS5lbGVtZW50LCBuZXh0LmVsZW1lbnQpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKG1vdmVkRHJhZ2dhYmxlLmVsZW1lbnQpXG4gICAgfVxuXG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGQpID0+IGQuc3RhcnRQb3NpdGlvbmluZygpKVxuICAgIHRoaXMuZW1pdExpc3RFdmVudCgncmVvcmRlcmVkJywgbW92ZWREcmFnZ2FibGUpXG4gIH1cblxuICBlbWl0TGlzdEV2ZW50KHR5cGUsIGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IGRldGFpbCA9IHsgbGlzdDogdGhpcywgZHJhZ2dhYmxlIH1cbiAgICB0aGlzLmVtaXQoYGxpc3Q6JHt0eXBlfWAsIGRldGFpbClcblxuICAgIGlmICh0aGlzLmRvbUV2ZW50cykge1xuICAgICAgZGlzcGF0Y2hEb21FdmVudChkcmFnZ2FibGUuZWxlbWVudCwgYGRyYWdlZTpsaXN0LSR7dHlwZX1gLCBkZXRhaWwpXG4gICAgfVxuICB9XG5cbiAgZ2V0Q3VycmVudFBpbm5lZFBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5kcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24uY2xvbmUoKSlcbiAgfVxuXG4gIGdldFNvcnRlZERyYWdnYWJsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJhZ2dhYmxlcy5zb3J0KHRoaXMuc29ydGluZy5iaW5kKHRoaXMpKVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnJlc2V0UG9zaXRpb25Ub0luaXRpYWwoKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnJlZnJlc2goKSlcbiAgfVxuXG4gIGFkZChkcmFnZ2FibGVzKSB7XG4gICAgaWYgKCEoZHJhZ2dhYmxlcyBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgZHJhZ2dhYmxlcyA9IFtkcmFnZ2FibGVzXVxuICAgIH1cbiAgICBkcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gdGhpcy5pbml0RHJhZ2dhYmxlKGRyYWdnYWJsZSkpXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gdGhpcy5kcmFnZ2FibGVzLmNvbmNhdChkcmFnZ2FibGVzKVxuICB9XG5cbiAgcmVtb3ZlKGRyYWdnYWJsZXMpIHtcbiAgICBjb25zdCBpbml0aWFsUG9zaXRpb25zID0gdGhpcy5kcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uKVxuICAgIGNvbnN0IGxpc3QgPSBbXVxuICAgIGNvbnN0IHNvcnRlZERyYWdnYWJsZXMgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuXG4gICAgaWYgKCEoZHJhZ2dhYmxlcyBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgZHJhZ2dhYmxlcyA9IFtkcmFnZ2FibGVzXVxuICAgIH1cblxuICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB0aGlzLnJlbGVhc2VEcmFnZ2FibGUoZHJhZ2dhYmxlKSlcblxuICAgIGxldCBqID0gMFxuICAgIHNvcnRlZERyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBpZiAodGhpcy5kcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTEpIHtcbiAgICAgICAgaWYgKGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbiAhPT0gaW5pdGlhbFBvc2l0aW9uc1tqXSkge1xuICAgICAgICAgIGRyYWdnYWJsZS5waW5Qb3NpdGlvbihpbml0aWFsUG9zaXRpb25zW2pdLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICAgIH1cbiAgICAgICAgZHJhZ2dhYmxlLmluaXRpYWxQb3NpdGlvbiA9IGluaXRpYWxQb3NpdGlvbnNbal1cbiAgICAgICAgaisrXG4gICAgICAgIGxpc3QucHVzaChkcmFnZ2FibGUpXG4gICAgICB9XG4gICAgfSlcbiAgICB0aGlzLmRyYWdnYWJsZXMgPSBsaXN0XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLnJlbW92ZSh0aGlzLmRyYWdnYWJsZXMuc2xpY2UoKSlcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLmRlc3Ryb3koKSlcbiAgICBpZiAodGhpcy5jb250YWluZXIpIHtcbiAgICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIudW5vYnNlcnZlKHRoaXMuY29udGFpbmVyKVxuICAgIH1cbiAgfVxuXG4gIHNvcnRpbmcoZHJhZ2dhYmxlQSwgZHJhZ2dhYmxlQikge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuc29ydGluZykge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5zb3J0aW5nKGRyYWdnYWJsZUEsIGRyYWdnYWJsZUIpXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChkcmFnZ2FibGVBLnBpbm5lZFBvc2l0aW9uLnkgPCBkcmFnZ2FibGVCLnBpbm5lZFBvc2l0aW9uLnkpIHJldHVybiAtMVxuICAgICAgaWYgKGRyYWdnYWJsZUEucGlubmVkUG9zaXRpb24ueSA+IGRyYWdnYWJsZUIucGlubmVkUG9zaXRpb24ueSkgcmV0dXJuIDFcbiAgICAgIGlmIChkcmFnZ2FibGVBLnBpbm5lZFBvc2l0aW9uLnggPCBkcmFnZ2FibGVCLnBpbm5lZFBvc2l0aW9uLngpIHJldHVybiAtMVxuICAgICAgaWYgKGRyYWdnYWJsZUEucGlubmVkUG9zaXRpb24ueCA+IGRyYWdnYWJsZUIucGlubmVkUG9zaXRpb24ueCkgcmV0dXJuIDFcbiAgICAgIHJldHVybiAwXG4gICAgfVxuICB9XG5cbiAgZ2V0IGRpc3RhbmNlRnVuYygpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmdldERpc3RhbmNlIHx8IGdldERpc3RhbmNlXG4gIH1cblxuICBnZXQgZG9tRXZlbnRzKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZG9tRXZlbnRzICE9PSBmYWxzZVxuICB9XG5cbiAgZ2V0IHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDdXJyZW50UGlubmVkUG9zaXRpb25zKClcbiAgfVxuXG4gIHNldCBwb3NpdGlvbnMocG9zaXRpb25zKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9ICd3cm9uZyBhcnJheSBsZW5ndGgnXG4gICAgaWYgKHBvc2l0aW9ucy5sZW5ndGggPT09IHRoaXMuZHJhZ2dhYmxlcy5sZW5ndGgpIHtcbiAgICAgIHBvc2l0aW9ucy5mb3JFYWNoKChwb2ludCwgaSkgPT4ge1xuICAgICAgICB0aGlzLmRyYWdnYWJsZXNbaV0ucGluUG9zaXRpb24ocG9pbnQpXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBtZXNzYWdlXG4gICAgfVxuICB9XG5cbiAgZ2V0IGVuYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlXG4gIH1cblxuICBzZXQgZW5hYmxlKGVuYWJsZSkge1xuICAgIHRoaXMuX2VuYWJsZSA9IGVuYWJsZVxuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5lbmFibGUgPSBlbmFibGVcbiAgICB9KVxuICB9XG5cbiAgZ2V0IHN3YXBwaW5nRGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N3YXBwaW5nRGlzYWJsZWRcbiAgfVxuXG4gIHNldCBzd2FwcGluZ0Rpc2FibGVkKGRpc2FibGVkKSB7XG4gICAgdGhpcy5fc3dhcHBpbmdEaXNhYmxlZCA9IGRpc2FibGVkXG4gIH1cbn1cbiIsImltcG9ydCBMaXN0IGZyb20gJy4vbGlzdCdcbmltcG9ydCB7IGluZGV4T2ZOZWFyZXN0UG9pbnQsIGdldFhEaWZmZXJlbmNlLCBnZXRZRGlmZmVyZW5jZSB9IGZyb20gJy4vZ2VvbWV0cnkvZGlzdGFuY2VzJ1xuXG5pbXBvcnQgRHJhZ2dhYmxlIGZyb20gJy4vZHJhZ2dhYmxlJ1xuXG5jb25zdCBhcnJheU1vdmUgPSAoYXJyYXksIGZyb20sIHRvKSA9PiB7XG4gIGFycmF5LnNwbGljZSh0byA8IDAgPyBhcnJheS5sZW5ndGggKyB0byA6IHRvLCAwLCBhcnJheS5zcGxpY2UoZnJvbSwgMSlbMF0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1YmJsaW5nTGlzdCBleHRlbmRzIExpc3Qge1xuICBhdXRvRGV0ZWN0R2FwKCkge1xuICAgIGlmICh0aGlzLl9nYXAgIT09IHVuZGVmaW5lZCB8fCB0aGlzLmV4cGxpY2l0R2FwICE9PSB1bmRlZmluZWQgfHwgdGhpcy5kcmFnZ2FibGVzLmxlbmd0aCA8IDIpIHJldHVyblxuXG4gICAgY29uc3QgYXhpcyA9IHRoaXMuYXhpc1xuICAgIGNvbnN0IHNvcnRlZCA9IHRoaXMuZ2V0U29ydGVkRHJhZ2dhYmxlcygpXG4gICAgLy8gRGV0YWNoZWQgZWxlbWVudHMgcmVwb3J0IHNpemUgMFxuICAgIGNvbnN0IGluZGV4ID0gc29ydGVkLmZpbmRJbmRleCgoZCwgaSkgPT4gaSA8IHNvcnRlZC5sZW5ndGggLSAxICYmIGQuZWxlbWVudC5pc0Nvbm5lY3RlZClcbiAgICBpZiAoaW5kZXggPT09IC0xKSByZXR1cm5cblxuICAgIGNvbnN0IFtjdXJyZW50LCBuZXh0XSA9IFtzb3J0ZWRbaW5kZXhdLCBzb3J0ZWRbaW5kZXggKyAxXV1cbiAgICB0aGlzLl9nYXAgPSBuZXh0LnBpbm5lZFBvc2l0aW9uW2F4aXNdIC0gY3VycmVudC5waW5uZWRQb3NpdGlvbltheGlzXSAtIGN1cnJlbnQuZ2V0U2l6ZSgpW2F4aXNdXG4gIH1cblxuICBhdXRvRGV0ZWN0U3RhcnRQb3NpdGlvbigpIHtcbiAgICBpZiAodGhpcy5kcmFnZ2FibGVzLmxlbmd0aCA+PSAxICYmICF0aGlzLnN0YXJ0UG9zaXRpb24pIHtcbiAgICAgIHRoaXMuc3RhcnRQb3NpdGlvbiA9IHRoaXMuZHJhZ2dhYmxlc1swXS5waW5uZWRQb3NpdGlvblxuICAgIH1cbiAgfVxuXG4gIGluaXREcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgc3VwZXIuaW5pdERyYWdnYWJsZShkcmFnZ2FibGUpXG4gICAgdGhpcy5saXN0ZW5UbyhkcmFnZ2FibGUsICdkcmFnOnN0YXJ0JywgKCkgPT4gdGhpcy5vbkRyYWdTdGFydChkcmFnZ2FibGUpKVxuICB9XG5cbiAgb25EcmFnU3RhcnQoZHJhZ2dhYmxlKSB7XG4gICAgdGhpcy5hdXRvRGV0ZWN0R2FwKClcbiAgICB0aGlzLmF1dG9EZXRlY3RTdGFydFBvc2l0aW9uKClcbiAgICB0aGlzLmNhY2hlZFNvcnRlZERyYWdnYWJsZXMgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuICAgIHRoaXMuaW5kZXhPZkFjdGl2ZURyYWdnYWJsZSA9IHRoaXMuY2FjaGVkU29ydGVkRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSlcbiAgfVxuXG4gIG9uTW92ZShkcmFnZ2FibGUpIHtcbiAgICBpZiAodGhpcy5zd2FwcGluZ0Rpc2FibGVkKSByZXR1cm5cblxuICAgIGNvbnN0IHByZXZEcmFnZ2FibGUgPSB0aGlzLmNhY2hlZFNvcnRlZERyYWdnYWJsZXNbdGhpcy5pbmRleE9mQWN0aXZlRHJhZ2dhYmxlIC0gMV1cbiAgICBjb25zdCBuZXh0RHJhZ2dhYmxlID0gdGhpcy5jYWNoZWRTb3J0ZWREcmFnZ2FibGVzW3RoaXMuaW5kZXhPZkFjdGl2ZURyYWdnYWJsZSArIDFdXG4gICAgY29uc3QgY3VycmVudFBvc2l0aW9uID0gZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uXG5cbiAgICBsZXQgY3VycmVudE9yZGVyXG4gICAgbGV0IHRhcmdldEluZGV4XG5cbiAgICBpZih0aGlzLmlzTW92aW5nQmFja3dhcmQoZHJhZ2dhYmxlKSAmJiBwcmV2RHJhZ2dhYmxlKSB7XG4gICAgICBjdXJyZW50T3JkZXIgPSBbcHJldkRyYWdnYWJsZSwgZHJhZ2dhYmxlXS5tYXAoKGQpID0+IGQucGlubmVkUG9zaXRpb24pXG4gICAgICB0YXJnZXRJbmRleCA9IGluZGV4T2ZOZWFyZXN0UG9pbnQoY3VycmVudE9yZGVyLCBkcmFnZ2FibGUucG9zaXRpb24sIDEwMDAwLCB0aGlzLmRpc3RhbmNlRnVuYylcblxuICAgICAgaWYgKHRhcmdldEluZGV4ID09PSAwKSB7XG4gICAgICAgIGlmKGRyYWdnYWJsZS5zaG91bGRVc2VOYXRpdmVEcmFnQW5kRHJvcCgpKSB7XG4gICAgICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKHByZXZEcmFnZ2FibGUucGlubmVkUG9zaXRpb24pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uID0gcHJldkRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbi5jbG9uZSgpXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJldk5ld1Bvc2l0aW9uID0gdGhpcy5uZXh0UG9zaXRpb24oZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uLCBkcmFnZ2FibGUpXG4gICAgICAgIHByZXZOZXdQb3NpdGlvblt0aGlzLmNyb3NzQXhpc10gPSBjdXJyZW50UG9zaXRpb25bdGhpcy5jcm9zc0F4aXNdXG4gICAgICAgIHByZXZEcmFnZ2FibGUucGluUG9zaXRpb24ocHJldk5ld1Bvc2l0aW9uLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICAgIGFycmF5TW92ZSh0aGlzLmNhY2hlZFNvcnRlZERyYWdnYWJsZXMsIHRoaXMuaW5kZXhPZkFjdGl2ZURyYWdnYWJsZS0tLCB0aGlzLmluZGV4T2ZBY3RpdmVEcmFnZ2FibGUpXG4gICAgICAgIHRoaXMub25Nb3ZlKGRyYWdnYWJsZSlcbiAgICAgICAgdGhpcy5jaGFuZ2VkRHVyaW5nSXRlcmF0aW9uID0gdHJ1ZVxuICAgICAgfVxuICAgIH0gZWxzZSBpZih0aGlzLmlzTW92aW5nRm9yd2FyZChkcmFnZ2FibGUpICYmIG5leHREcmFnZ2FibGUpIHtcbiAgICAgIGN1cnJlbnRPcmRlciA9IFtkcmFnZ2FibGUsIG5leHREcmFnZ2FibGVdLm1hcCgoZCkgPT4gZC5waW5uZWRQb3NpdGlvbilcbiAgICAgIHRhcmdldEluZGV4ID0gaW5kZXhPZk5lYXJlc3RQb2ludChjdXJyZW50T3JkZXIsIGRyYWdnYWJsZS5wb3NpdGlvbiwgMTAwMDAsIHRoaXMuZGlzdGFuY2VGdW5jKVxuXG4gICAgICBpZih0YXJnZXRJbmRleCA9PT0gMSkge1xuICAgICAgICBuZXh0RHJhZ2dhYmxlLnBpblBvc2l0aW9uKGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbiwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICBjb25zdCBkcmFnZ2FibGVOZXdQb3NpdGlvbiA9IHRoaXMubmV4dFBvc2l0aW9uKG5leHREcmFnZ2FibGUucGlubmVkUG9zaXRpb24sIG5leHREcmFnZ2FibGUpXG4gICAgICAgIGlmKGRyYWdnYWJsZS5zaG91bGRVc2VOYXRpdmVEcmFnQW5kRHJvcCgpKSB7XG4gICAgICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKGRyYWdnYWJsZU5ld1Bvc2l0aW9uKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbiA9IGRyYWdnYWJsZU5ld1Bvc2l0aW9uXG4gICAgICAgIH1cbiAgICAgICAgYXJyYXlNb3ZlKHRoaXMuY2FjaGVkU29ydGVkRHJhZ2dhYmxlcywgdGhpcy5pbmRleE9mQWN0aXZlRHJhZ2dhYmxlKyssIHRoaXMuaW5kZXhPZkFjdGl2ZURyYWdnYWJsZSlcbiAgICAgICAgdGhpcy5vbk1vdmUoZHJhZ2dhYmxlKVxuICAgICAgICB0aGlzLmNoYW5nZWREdXJpbmdJdGVyYXRpb24gPSB0cnVlXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYnViYmxpbmcoc29ydGVkRHJhZ2dhYmxlcywgY3VycmVudERyYWdnYWJsZSkge1xuICAgIGxldCBjdXJyZW50UG9zaXRpb24gPSB0aGlzLnN0YXJ0UG9zaXRpb24uY2xvbmUoKVxuICAgIHNvcnRlZERyYWdnYWJsZXMgfHw9IHRoaXMuZ2V0U29ydGVkRHJhZ2dhYmxlcygpXG5cbiAgICBzb3J0ZWREcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgaWYgKCFkcmFnZ2FibGUucGlubmVkUG9zaXRpb24uY29tcGFyZShjdXJyZW50UG9zaXRpb24pKSB7XG4gICAgICAgIGlmIChkcmFnZ2FibGUgPT09IGN1cnJlbnREcmFnZ2FibGUgJiYgIWN1cnJlbnREcmFnZ2FibGUuc2hvdWxkVXNlTmF0aXZlRHJhZ0FuZERyb3AoKSkge1xuICAgICAgICAgIGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbiA9IGN1cnJlbnRQb3NpdGlvbi5jbG9uZSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKGN1cnJlbnRQb3NpdGlvbiwgKGRyYWdnYWJsZSA9PT0gY3VycmVudERyYWdnYWJsZSkgPyAwIDogdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGN1cnJlbnRQb3NpdGlvbiA9IHRoaXMubmV4dFBvc2l0aW9uKGN1cnJlbnRQb3NpdGlvbiwgZHJhZ2dhYmxlKVxuICAgIH0pXG4gIH1cblxuICByZW1vdmUoZHJhZ2dhYmxlcykge1xuICAgIGlmICghKGRyYWdnYWJsZXMgaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICAgIGRyYWdnYWJsZXMgPSBbZHJhZ2dhYmxlc11cbiAgICB9XG5cbiAgICAvLyBEZXRlY3QgbGF5b3V0IGJlZm9yZSByZW1vdmFsLCBvdGhlcndpc2UgdGhlIGdhcCBpcyBtZWFzdXJlZCBhY3Jvc3MgdGhlIGhvbGVcbiAgICB0aGlzLmF1dG9EZXRlY3RHYXAoKVxuICAgIHRoaXMuYXV0b0RldGVjdFN0YXJ0UG9zaXRpb24oKVxuXG4gICAgZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHRoaXMucmVsZWFzZURyYWdnYWJsZShkcmFnZ2FibGUpKVxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IHRoaXMuZHJhZ2dhYmxlcy5maWx0ZXIoKGQpID0+ICFkcmFnZ2FibGVzLmluY2x1ZGVzKGQpKVxuXG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGQpID0+IGQuc3RhcnRQb3NpdGlvbmluZygpKVxuXG4gICAgaWYodGhpcy5kcmFnZ2FibGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuYnViYmxpbmcoKVxuICAgIH1cbiAgfVxuXG4gIG5leHRQb3NpdGlvbihwb3NpdGlvbiwgZHJhZ2dhYmxlKSB7XG4gICAgY29uc3QgbmV4dCA9IHBvc2l0aW9uLmNsb25lKClcbiAgICBuZXh0W3RoaXMuYXhpc10gPSBwb3NpdGlvblt0aGlzLmF4aXNdICsgZHJhZ2dhYmxlLmdldFNpemUoKVt0aGlzLmF4aXNdICsgdGhpcy5nYXBcbiAgICByZXR1cm4gbmV4dFxuICB9XG5cbiAgaXNNb3ZpbmdCYWNrd2FyZChkcmFnZ2FibGUpIHtcbiAgICByZXR1cm4gdGhpcy5heGlzID09PSAneCcgPyBkcmFnZ2FibGUubGVmdERpcmVjdGlvbiA6IGRyYWdnYWJsZS51cERpcmVjdGlvblxuICB9XG5cbiAgaXNNb3ZpbmdGb3J3YXJkKGRyYWdnYWJsZSkge1xuICAgIHJldHVybiB0aGlzLmF4aXMgPT09ICd4JyA/IGRyYWdnYWJsZS5yaWdodERpcmVjdGlvbiA6IGRyYWdnYWJsZS5kb3duRGlyZWN0aW9uXG4gIH1cblxuICBnZXQgYXhpcygpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmF4aXMgPT09ICd4JyA/ICd4JyA6ICd5J1xuICB9XG5cbiAgZ2V0IGNyb3NzQXhpcygpIHtcbiAgICByZXR1cm4gdGhpcy5heGlzID09PSAneCcgPyAneScgOiAneCdcbiAgfVxuXG4gIGdldCBkaXN0YW5jZUZ1bmMoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5nZXREaXN0YW5jZSB8fCAodGhpcy5heGlzID09PSAneCcgPyBnZXRYRGlmZmVyZW5jZSA6IGdldFlEaWZmZXJlbmNlKVxuICB9XG5cbiAgZ2V0IGV4cGxpY2l0R2FwKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZ2FwID8/IHRoaXMub3B0aW9ucy52ZXJ0aWNhbEdhcFxuICB9XG5cbiAgZ2V0IGdhcCgpIHtcbiAgICBpZiAodGhpcy5leHBsaWNpdEdhcCAhPT0gdW5kZWZpbmVkKSByZXR1cm4gdGhpcy5leHBsaWNpdEdhcFxuXG4gICAgdGhpcy5hdXRvRGV0ZWN0R2FwKClcbiAgICByZXR1cm4gdGhpcy5fZ2FwIHx8IDBcbiAgfVxuXG4gIHNldCBnYXAoZ2FwVmFsdWUpIHtcbiAgICB0aGlzLm9wdGlvbnMuZ2FwID0gZ2FwVmFsdWVcbiAgfVxuXG4gIC8vIERlcHJlY2F0ZWQgYWxpYXMgZm9yIGBnYXBgXG4gIGdldCB2ZXJ0aWNhbEdhcCgpIHtcbiAgICByZXR1cm4gdGhpcy5nYXBcbiAgfVxuXG4gIHNldCB2ZXJ0aWNhbEdhcChnYXBWYWx1ZSkge1xuICAgIHRoaXMuZ2FwID0gZ2FwVmFsdWVcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmFuZ2Uoc3RhcnQsIHN0b3AsIHN0ZXApIHtcbiAgY29uc3QgcmVzdWx0ID0gW11cbiAgaWYgKHR5cGVvZiBzdG9wID09PSAndW5kZWZpbmVkJykge1xuICAgIHN0b3AgPSBzdGFydFxuICAgIHN0YXJ0ID0gMFxuICB9XG4gIGlmICh0eXBlb2Ygc3RlcCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBzdGVwID0gMVxuICB9XG4gIGlmICgoc3RlcCA+IDAgJiYgc3RhcnQgPj0gc3RvcCkgfHwgKHN0ZXAgPCAwICYmIHN0YXJ0IDw9IHN0b3ApKSB7XG4gICAgcmV0dXJuIFtdXG4gIH1cbiAgZm9yIChsZXQgaSA9IHN0YXJ0OyBzdGVwID4gMCA/IGkgPCBzdG9wIDogaSA+IHN0b3A7IGkgKz0gc3RlcCkge1xuICAgIHJlc3VsdC5wdXNoKGkpXG4gIH1cbiAgcmV0dXJuIHJlc3VsdFxufVxuIiwiaW1wb3J0IFBvaW50IGZyb20gJy4vcG9pbnQnXG5pbXBvcnQgeyBnZXREaXN0YW5jZSB9IGZyb20gJy4vZGlzdGFuY2VzJ1xuXG5leHBvcnQgZnVuY3Rpb24gY2xhbXAobWluLCBtYXgsIHZhbCkge1xuICByZXR1cm4gTWF0aC5tYXgobWluLCBNYXRoLm1pbihtYXgsIHZhbCkpXG59XG5cbi8vUmV0dXJuIGNyb3NzaW5nIHBvaW50IG9mIHR3byBsaW5lc1xuZXhwb3J0IGZ1bmN0aW9uIGRpcmVjdENyb3NzaW5nKEwxUDEsIEwxUDIsIEwyUDEsIEwyUDIpIHtcbiAgbGV0IHRlbXAsIGsxLCBrMiwgYjEsIGIyLCB4LCB5XG4gIGlmIChMMlAxLnggPT09IEwyUDIueCkge1xuICAgIHRlbXAgPSBMMlAxXG4gICAgTDJQMSA9IEwxUDFcbiAgICBMMVAxID0gdGVtcFxuICAgIHRlbXAgPSBMMlAyXG4gICAgTDJQMiA9IEwxUDJcbiAgICBMMVAyID0gdGVtcFxuICB9XG4gIGlmIChMMVAxLnggPT09IEwxUDIueCkge1xuICAgIGsyID0gKEwyUDIueSAtIEwyUDEueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgIGIyID0gKEwyUDIueCAqIEwyUDEueSAtIEwyUDEueCAqIEwyUDIueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgIHggPSBMMVAxLnhcbiAgICB5ID0geCAqIGsyICsgYjJcbiAgICByZXR1cm4gbmV3IFBvaW50KHgsIHkpXG4gIH0gZWxzZSB7XG4gICAgazEgPSAoTDFQMi55IC0gTDFQMS55KSAvIChMMVAyLnggLSBMMVAxLngpXG4gICAgYjEgPSAoTDFQMi54ICogTDFQMS55IC0gTDFQMS54ICogTDFQMi55KSAvIChMMVAyLnggLSBMMVAxLngpXG4gICAgazIgPSAoTDJQMi55IC0gTDJQMS55KSAvIChMMlAyLnggLSBMMlAxLngpXG4gICAgYjIgPSAoTDJQMi54ICogTDJQMS55IC0gTDJQMS54ICogTDJQMi55KSAvIChMMlAyLnggLSBMMlAxLngpXG4gICAgeCA9IChiMSAtIGIyKSAvIChrMiAtIGsxKVxuICAgIHkgPSB4ICogazEgKyBiMVxuICAgIHJldHVybiBuZXcgUG9pbnQoeCwgeSlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRUb1NlZ21lbnQoTFAxLCBMUDIsIFApIHtcbiAgbGV0IHgsIHlcbiAgeCA9IGNsYW1wKE1hdGgubWluKExQMS54LCBMUDIueCksIE1hdGgubWF4KExQMS54LCBMUDIueCksIFAueClcbiAgaWYgKHggIT09IFAueCkge1xuICAgIHkgPSAoeCA9PT0gTFAxLngpID8gTFAxLnkgOiBMUDIueVxuICAgIFAgPSBuZXcgUG9pbnQoeCwgeSlcbiAgfVxuXG4gIHkgPSBjbGFtcChNYXRoLm1pbihMUDEueSwgTFAyLnkpLCBNYXRoLm1heChMUDEueSwgTFAyLnkpLCBQLnkpXG4gIGlmICh5ICE9PSBQLnkpIHtcbiAgICB4ID0gKHkgPT09IExQMS55KSA/IExQMS54IDogTFAyLnhcbiAgICBQID0gbmV3IFBvaW50KHgsIHkpXG4gIH1cblxuICByZXR1cm4gUFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRUb0xpbmUoQSwgQiwgUCkge1xuICBjb25zdCBBUCA9IG5ldyBQb2ludChQLnggLSBBLngsIFAueSAtIEEueSksXG4gICAgQUIgPSBuZXcgUG9pbnQoQi54IC0gQS54LCBCLnkgLSBBLnkpLFxuICAgIGFiMiA9IEFCLnggKiBBQi54ICsgQUIueSAqIEFCLnksXG4gICAgYXBfYWIgPSBBUC54ICogQUIueCArIEFQLnkgKiBBQi55LFxuICAgIHQgPSBhcF9hYiAvIGFiMlxuICByZXR1cm4gbmV3IFBvaW50KEEueCArIEFCLnggKiB0LCBBLnkgKyBBQi55ICogdClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBvaW50T25MaW5lKExQMSwgTFAyLCBwZXJjZW50KSB7XG4gIGNvbnN0IGR4ID0gTFAyLnggLSBMUDEueCwgZHkgPSBMUDIueSAtIExQMS55XG4gIHJldHVybiBuZXcgUG9pbnQoTFAxLnggKyBwZXJjZW50ICogZHgsIExQMS55ICsgcGVyY2VudCAqIGR5KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9pbnRPbkxpbmVCeUxlbmdodChMUDEsIExQMiwgbGVuZ2h0KSB7XG4gIGNvbnN0IGR4ID0gTFAyLnggLSBMUDEueFxuICBjb25zdCBkeSA9IExQMi55IC0gTFAxLnlcbiAgY29uc3QgcGVyY2VudCA9IGxlbmdodCAvIGdldERpc3RhbmNlKExQMSwgTFAyKVxuICByZXR1cm4gbmV3IFBvaW50KExQMS54ICsgcGVyY2VudCAqIGR4LCBMUDEueSArIHBlcmNlbnQgKiBkeSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFBvaW50VG9Cb3VuZFBvaW50cyhib3VuZHBvaW50cywgcG9pbnQsIGlzUmlnaHQpIHtcbiAgY29uc3QgcmVzdWx0ID0gYm91bmRwb2ludHMuZmlsdGVyKChiUG9pbnQpID0+IHtcbiAgICByZXR1cm4gYlBvaW50LnkgPiBwb2ludC55IHx8IChpc1JpZ2h0ID8gYlBvaW50LnggPCBwb2ludC54IDogYlBvaW50LnggPiBwb2ludC54KVxuICB9KVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzdWx0Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHBvaW50LnkgPCByZXN1bHRbaV0ueSkge1xuICAgICAgcmVzdWx0LnNwbGljZShpLCAwLCBwb2ludClcbiAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG4gIH1cbiAgcmVzdWx0LnB1c2gocG9pbnQpXG4gIHJldHVybiByZXN1bHRcbn1cbiIsImltcG9ydCBQb2ludCBmcm9tICcuL2dlb21ldHJ5L3BvaW50J1xuaW1wb3J0IHsgYWRkUG9pbnRUb0JvdW5kUG9pbnRzIH0gZnJvbSAnLi9nZW9tZXRyeS9ib3VuZHMnXG5cbmltcG9ydCB7XG4gIGluZGV4T2ZOZWFyZXN0UG9pbnQsXG4gIGdldERpc3RhbmNlXG59IGZyb20gJy4vZ2VvbWV0cnkvZGlzdGFuY2VzJ1xuXG5jbGFzcyBCYXNpY1N0cmF0ZWd5IHtcbiAgY29uc3RydWN0b3IocmVjdGFuZ2xlLCBvcHRpb25zPXt9KSB7XG4gICAgdGhpcy5yZWN0YW5nbGUgPSByZWN0YW5nbGVcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zXG4gIH1cblxuICBnZXQgYm91bmRSZWN0ICgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMucmVjdGFuZ2xlID09PSAnZnVuY3Rpb24nID8gdGhpcy5yZWN0YW5nbGUoKSA6IHRoaXMucmVjdGFuZ2xlXG4gIH1cbn1cblxuY2xhc3MgTm90Q3Jvc3NpbmdTdHJhdGVneSBleHRlbmRzIEJhc2ljU3RyYXRlZ3kge1xuICBwb3NpdGlvbmluZyAocmVjdGFuZ2xlTGlzdCwgaW5kZXhlc09mTmV3cykge1xuICAgIGNvbnN0IHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMgPSByZWN0YW5nbGVMaXN0LnJlZHVjZSgoaW5kZXhlcywgX3JlY3QsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoaW5kZXhlc09mTmV3cy5pbmRleE9mKGluZGV4KSA9PT0gLTEpIHtcbiAgICAgICAgaW5kZXhlcy5wdXNoKGluZGV4KVxuICAgICAgfVxuICAgICAgcmV0dXJuIGluZGV4ZXNcbiAgICB9LCBbXSlcblxuICAgIGluZGV4ZXNPZk5ld3MuZm9yRWFjaCgoaW5kZXgpID0+IHtcbiAgICAgIGxldCByZWN0ID0gcmVjdGFuZ2xlTGlzdFtpbmRleF1cbiAgICAgIGxldCByZW1vdmFibGUgPSBmYWxzZVxuXG4gICAgICBzdGF0aWNSZWN0YW5nbGVJbmRleGVzLmZvckVhY2goKGluZGV4T2ZTdGF0aWMpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhdGljUmVjdCA9IHJlY3RhbmdsZUxpc3RbaW5kZXhPZlN0YXRpY11cbiAgICAgICAgcmVjdCA9IHN0YXRpY1JlY3QubW92ZVRvQm91bmQocmVjdClcbiAgICAgIH0pXG5cbiAgICAgIHJlbW92YWJsZSA9IHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMuc29tZSgoaW5kZXhPZlN0YXRpYykgPT4ge1xuICAgICAgICBjb25zdCBzdGF0aWNSZWN0ID0gcmVjdGFuZ2xlTGlzdFtpbmRleE9mU3RhdGljXVxuICAgICAgICByZXR1cm4gICEhc3RhdGljUmVjdC5hbmQocmVjdClcbiAgICAgIH0pIHx8IHJlY3QuYW5kKHRoaXMuYm91bmRSZWN0KS5nZXRTcXVhcmUoKSAhPT0gcmVjdC5nZXRTcXVhcmUoKVxuXG4gICAgICBpZiAocmVtb3ZhYmxlKSB7XG4gICAgICAgIHJlY3QucmVtb3ZhYmxlID0gdHJ1ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdGljUmVjdGFuZ2xlSW5kZXhlcy5wdXNoKGluZGV4KVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHJlY3RhbmdsZUxpc3RcbiAgfVxuXG4gIHNvcnRpbmcob2RsRHJhZ2dhYmxlc0xpc3QsIG5ld0RyYWdnYWJsZXMsIGluZGV4T2ZOZXdzKSB7XG4gICAgY29uc3QgZHJhZ2dhYmxlcyA9IG9kbERyYWdnYWJsZXNMaXN0LmNvbmNhdChuZXdEcmFnZ2FibGVzKVxuICAgIG5ld0RyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBpbmRleE9mTmV3cy5wdXNoKGRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpKVxuICAgIH0pXG4gICAgcmV0dXJuIGRyYWdnYWJsZXNcbiAgfVxufVxuXG5jbGFzcyBGbG9hdExlZnRTdHJhdGVneSBleHRlbmRzIEJhc2ljU3RyYXRlZ3kge1xuICBjb25zdHJ1Y3RvcihyZWN0YW5nbGUsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcihyZWN0YW5nbGUsIG9wdGlvbnMpXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICByZW1vdmFibGU6IHRydWVcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGhpcy5yYWRpdXMgPSBvcHRpb25zLnJhZGl1cyB8fCA4MFxuXG4gICAgdGhpcy5wYWRkaW5nVG9wTGVmdCA9IG9wdGlvbnMucGFkZGluZ1RvcExlZnQgfHwgbmV3IFBvaW50KDAsIDApXG4gICAgdGhpcy5wYWRkaW5nQm90dG9tUmlnaHQgPSBvcHRpb25zLnBhZGRpbmdCb3R0b21SaWdodCB8fCBuZXcgUG9pbnQoMCwgMClcbiAgICB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyA9IG9wdGlvbnMueUdhcEJldHdlZW5EcmFnZ2FibGVzIHx8IDBcblxuICAgIHRoaXMuZ2V0RGlzdGFuY2UgPSBvcHRpb25zLmdldERpc3RhbmNlIHx8IGdldERpc3RhbmNlXG4gICAgdGhpcy5nZXRQb3NpdGlvbiA9IG9wdGlvbnMuZ2V0UG9zaXRpb24gfHwgKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5wb3NpdGlvbilcbiAgfVxuXG4gIHBvc2l0aW9uaW5nKHJlY3RhbmdsZUxpc3QsIF9pbmRleGVzT2ZOZXdzKSB7XG4gICAgY29uc3QgYm91bmRSZWN0ID0gdGhpcy5ib3VuZFJlY3RcbiAgICBjb25zdCByZWN0UDIgPSBib3VuZFJlY3QuZ2V0UDIoKVxuICAgIGxldCBib3VuZGFyeVBvaW50cyA9IFtib3VuZFJlY3QucG9zaXRpb25dXG5cbiAgICByZWN0YW5nbGVMaXN0LmZvckVhY2goKHJlY3QsIHJlY3RJbmRleCkgPT4ge1xuICAgICAgbGV0IHBvc2l0aW9uLCBpc1ZhbGlkID0gZmFsc2VcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm91bmRhcnlQb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcG9zaXRpb24gPSBuZXcgUG9pbnQoXG4gICAgICAgICAgYm91bmRhcnlQb2ludHNbaV0ueCArIHRoaXMucGFkZGluZ1RvcExlZnQueCxcbiAgICAgICAgICBpID4gMCA/IChib3VuZGFyeVBvaW50c1tpIC0gMV0ueSArIHRoaXMueUdhcEJldHdlZW5EcmFnZ2FibGVzKSA6IChib3VuZFJlY3QucG9zaXRpb24ueSArIHRoaXMucGFkZGluZ1RvcExlZnQueSlcbiAgICAgICAgKVxuXG4gICAgICAgIGlzVmFsaWQgPSAocG9zaXRpb24ueCArIHJlY3Quc2l6ZS54IDwgcmVjdFAyLngpXG5cbiAgICAgICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICBwb3NpdGlvbiA9IG5ldyBQb2ludChcbiAgICAgICAgICBib3VuZFJlY3QucG9zaXRpb24ueCArIHRoaXMucGFkZGluZ1RvcExlZnQueCxcbiAgICAgICAgICBib3VuZGFyeVBvaW50c1tib3VuZGFyeVBvaW50cy5sZW5ndGggLSAxXS55ICsgKHJlY3RJbmRleCA+IDAgPyB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyA6IHRoaXMucGFkZGluZ1RvcExlZnQueSlcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICByZWN0LnBvc2l0aW9uID0gcG9zaXRpb25cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucmVtb3ZhYmxlICYmIHJlY3QuZ2V0UDMoKS55ID4gYm91bmRSZWN0LmdldFAzKCkueSkge1xuICAgICAgICByZWN0LnJlbW92YWJsZSA9IHRydWVcbiAgICAgIH1cblxuICAgICAgYm91bmRhcnlQb2ludHMgPSBhZGRQb2ludFRvQm91bmRQb2ludHMoYm91bmRhcnlQb2ludHMsIHJlY3QuZ2V0UDMoKS5hZGQodGhpcy5wYWRkaW5nQm90dG9tUmlnaHQpKVxuICAgIH0pXG4gICAgcmV0dXJuIHJlY3RhbmdsZUxpc3RcbiAgfVxuXG4gIHNvcnRpbmcob2RsRHJhZ2dhYmxlc0xpc3QsIG5ld0RyYWdnYWJsZXMsIGluZGV4T2ZOZXdzKSB7XG4gICAgY29uc3QgbmV3TGlzdCA9IG9kbERyYWdnYWJsZXNMaXN0LmNvbmNhdCgpXG4gICAgY29uc3QgbGlzdE9sZFBvc2l0aW9uID0gb2RsRHJhZ2dhYmxlc0xpc3QubWFwKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5nZXRQb3NpdGlvbigpKVxuICAgIG5ld0RyYWdnYWJsZXMuZm9yRWFjaCgobmV3RHJhZ2dhYmxlKSA9PiB7XG4gICAgICBsZXQgaW5kZXggPSBpbmRleE9mTmVhcmVzdFBvaW50KGxpc3RPbGRQb3NpdGlvbiwgdGhpcy5nZXRQb3NpdGlvbihuZXdEcmFnZ2FibGUpLCB0aGlzLnJhZGl1cywgdGhpcy5nZXREaXN0YW5jZSlcbiAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgaW5kZXggPSBuZXdMaXN0Lmxlbmd0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5kZXggPSBuZXdMaXN0LmluZGV4T2Yob2RsRHJhZ2dhYmxlc0xpc3RbaW5kZXhdKVxuICAgICAgfVxuICAgICAgbmV3TGlzdC5zcGxpY2UoaW5kZXgsIDAsIG5ld0RyYWdnYWJsZSlcbiAgICB9KVxuICAgIG5ld0RyYWdnYWJsZXMuZm9yRWFjaCgobmV3RHJhZ2dhYmxlKSA9PiB7XG4gICAgICBpbmRleE9mTmV3cy5wdXNoKG5ld0xpc3QuaW5kZXhPZihuZXdEcmFnZ2FibGUpKVxuICAgIH0pXG4gICAgcmV0dXJuIG5ld0xpc3RcbiAgfVxufVxuXG5jbGFzcyBGbG9hdFJpZ2h0U3RyYXRlZ3kgZXh0ZW5kcyBGbG9hdExlZnRTdHJhdGVneSB7XG4gIGNvbnN0cnVjdG9yKHJlY3RhbmdsZSwgb3B0aW9ucz17fSkge1xuICAgIHN1cGVyKHJlY3RhbmdsZSwgb3B0aW9ucylcblxuICAgIHRoaXMucGFkZGluZ1RvcFJpZ2h0ID0gb3B0aW9ucy5wYWRkaW5nVG9wUmlnaHQgfHwgbmV3IFBvaW50KDUsIDUpXG4gICAgdGhpcy5wYWRkaW5nQm90dG9tTGVmdCA9IG9wdGlvbnMucGFkZGluZ0JvdHRvbUxlZnQgfHwgbmV3IFBvaW50KDAsIDApXG4gICAgdGhpcy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgPSBvcHRpb25zLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyB8fCAwXG5cbiAgICB0aGlzLnBhZGRpbmdCb3R0b21OZWdMZWZ0ID0gbmV3IFBvaW50KC10aGlzLnBhZGRpbmdCb3R0b21MZWZ0LngsIHRoaXMucGFkZGluZ0JvdHRvbUxlZnQueSlcbiAgfVxuXG4gIHBvc2l0aW9uaW5nKHJlY3RhbmdsZUxpc3QsIF9pbmRleGVzT2ZOZXdzKSB7XG4gICAgY29uc3QgYm91bmRSZWN0ID0gdGhpcy5ib3VuZFJlY3RcbiAgICBsZXQgYm91bmRhcnlQb2ludHMgPSBbYm91bmRSZWN0LmdldFAyKCldXG5cbiAgICByZWN0YW5nbGVMaXN0LmZvckVhY2goKHJlY3QsIHJlY3RJbmRleCkgPT4ge1xuICAgICAgbGV0IHBvc2l0aW9uLCBpc1ZhbGlkID0gZmFsc2VcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm91bmRhcnlQb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcG9zaXRpb24gPSBuZXcgUG9pbnQoXG4gICAgICAgICAgYm91bmRhcnlQb2ludHNbaV0ueCAtIHJlY3Quc2l6ZS54IC0gdGhpcy5wYWRkaW5nVG9wUmlnaHQueCxcbiAgICAgICAgICBpID4gMCA/IChib3VuZGFyeVBvaW50c1tpIC0gMV0ueSArIHRoaXMueUdhcEJldHdlZW5EcmFnZ2FibGVzKSA6IChib3VuZFJlY3QucG9zaXRpb24ueSArIHRoaXMucGFkZGluZ1RvcFJpZ2h0LnkpXG4gICAgICAgIClcblxuICAgICAgICBpc1ZhbGlkID0gKHBvc2l0aW9uLnggPiByZWN0LnBvc2l0aW9uLngpXG4gICAgICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICAgIHBvc2l0aW9uID0gbmV3IFBvaW50KFxuICAgICAgICAgIGJvdW5kUmVjdC5nZXRQMigpLnggIC0gcmVjdC5zaXplLnggLSB0aGlzLnBhZGRpbmdUb3BSaWdodC54LFxuICAgICAgICAgIGJvdW5kYXJ5UG9pbnRzW2JvdW5kYXJ5UG9pbnRzLmxlbmd0aCAtIDFdLnkgKyAocmVjdEluZGV4ID4gMCA/IHRoaXMueUdhcEJldHdlZW5EcmFnZ2FibGVzIDogdGhpcy5wYWRkaW5nVG9wUmlnaHQueSlcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgcmVjdC5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnJlbW92YWJsZSAmJiByZWN0LmdldFA0KCkueSA+IGJvdW5kUmVjdC5nZXRQNCgpLnkpIHtcbiAgICAgICAgcmVjdC5yZW1vdmFibGUgPSB0cnVlXG4gICAgICB9XG4gICAgICBib3VuZGFyeVBvaW50cyA9IGFkZFBvaW50VG9Cb3VuZFBvaW50cyhib3VuZGFyeVBvaW50cywgcmVjdC5nZXRQNCgpLmFkZCh0aGlzLnBhZGRpbmdCb3R0b21OZWdMZWZ0KSwgdHJ1ZSlcbiAgICB9KVxuICAgIHJldHVybiByZWN0YW5nbGVMaXN0XG4gIH1cbn1cblxuZXhwb3J0IHsgTm90Q3Jvc3NpbmdTdHJhdGVneSwgRmxvYXRMZWZ0U3RyYXRlZ3ksIEZsb2F0UmlnaHRTdHJhdGVneSB9XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9wb2ludCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFuZ2xlRGlmZihhbHBoYSwgYmV0YSkge1xuICBjb25zdCBtaW5BbmdsZSA9IE1hdGgubWluKGFscGhhLCBiZXRhKVxuICBjb25zdCBtYXhBbmdsZSA9ICBNYXRoLm1heChhbHBoYSwgYmV0YSlcbiAgcmV0dXJuIE1hdGgubWluKG1heEFuZ2xlIC0gbWluQW5nbGUsIG1pbkFuZ2xlICsgTWF0aC5QSSoyIC0gbWF4QW5nbGUpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbmdsZShwMSwgcDIpIHtcbiAgY29uc3QgZGlmZiA9IHAyLnN1YihwMSlcbiAgcmV0dXJuIG5vcm1hbGl6ZUFuZ2xlKE1hdGguYXRhbjIoZGlmZi55LCBkaWZmLngpKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9SYWRpYW4oYW5nbGUpIHtcbiAgcmV0dXJuICgoYW5nbGUgJSAzNjApICogTWF0aC5QSSAvIDE4MClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvRGVncmVlKGFuZ2xlKSB7XG4gIHJldHVybiAoYW5nbGUgKiAxODAgLyBNYXRoLlBJKSAlIDM2MFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRBbmdsZShtaW4sIG1heCwgdmFsKSB7XG4gIGxldCBkbWluLCBkbWF4XG4gIGlmIChtaW4gPCBtYXggJiYgdmFsID4gbWluICYmIHZhbCA8IG1heCkge1xuICAgIHJldHVybiB2YWxcbiAgfSBlbHNlIGlmIChtYXggPCBtaW4gJiYgKHZhbCA8IG1heCB8fCB2YWwgPiBtaW4pKSB7XG4gICAgcmV0dXJuIHZhbFxuICB9IGVsc2Uge1xuICAgIGRtaW4gPSBnZXRBbmdsZURpZmYobWluLCB2YWwpXG4gICAgZG1heCA9IGdldEFuZ2xlRGlmZihtYXgsIHZhbClcbiAgICBpZiAoZG1pbiA8IGRtYXgpIHtcbiAgICAgIHJldHVybiBtaW5cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG1heFxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmVhcmVzdEFuZ2xlKGFyciwgYW5nbGUpIHtcbiAgbGV0IGksIHRlbXAsIGRpZmYgPSBNYXRoLlBJICogMiwgdmFsdWVcbiAgZm9yIChpID0gMDsgaSA8IGFyci5sZW5ndGg7aSsrKSB7XG4gICAgdGVtcCA9IGdldEFuZ2xlRGlmZihhcnJbaV0sIGFuZ2xlKVxuICAgIGlmIChkaWZmIDwgdGVtcCkge1xuICAgICAgZGlmZiA9IHRlbXBcbiAgICAgIHZhbHVlID0gYXJyW2ldXG4gICAgfVxuICB9XG4gIHJldHVybiB2YWx1ZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplQW5nbGUodmFsKSB7XG4gIHdoaWxlICh2YWwgPCAwKSB7XG4gICAgdmFsICs9IDIgKiBNYXRoLlBJXG4gIH1cbiAgd2hpbGUgKHZhbCA+IDIgKiBNYXRoLlBJKSB7XG4gICAgdmFsIC09IDIgKiBNYXRoLlBJXG4gIH1cbiAgcmV0dXJuIHZhbFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKGFuZ2xlLCBsZW5ndGgsIGNlbnRlcikge1xuICBjZW50ZXIgPSBjZW50ZXIgfHwgbmV3IFBvaW50KDAsIDApXG4gIHJldHVybiBjZW50ZXIuYWRkKG5ldyBQb2ludChsZW5ndGggKiBNYXRoLmNvcyhhbmdsZSksIGxlbmd0aCAqIE1hdGguc2luKGFuZ2xlKSkpXG59XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9nZW9tZXRyeS9wb2ludCdcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSAnLi9nZW9tZXRyeS9yZWN0YW5nbGUnXG5pbXBvcnQge1xuICBnZXRQb2ludE9uTGluZUJ5TGVuZ2h0LFxuICBkaXJlY3RDcm9zc2luZyxcbiAgYm91bmRUb0xpbmVcbn0gZnJvbSAnLi9nZW9tZXRyeS9ib3VuZHMnXG5cbmltcG9ydCB7XG4gIGdldEFuZ2xlLFxuICBub3JtYWxpemVBbmdsZSxcbiAgYm91bmRBbmdsZSxcbiAgZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtXG59IGZyb20gJy4vZ2VvbWV0cnkvYW5nbGVzJ1xuXG5leHBvcnQgY2xhc3MgQm91bmQge1xuICBjb25zdHJ1Y3RvciAoKSB7fVxuXG4gIGJvdW5kKHBvaW50LCBfc2l6ZSkge1xuICAgIHJldHVybiBwb2ludFxuICB9XG5cbiAgcmVmcmVzaCAoKSB7fVxuXG4gIHN0YXRpYyBib3VuZGluZygpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyB0aGlzKC4uLmFyZ3VtZW50cylcbiAgICByZXR1cm4gaW5zdGFuY2UuYm91bmQuYmluZChpbnN0YW5jZSlcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb1JlY3RhbmdsZSBleHRlbmRzIEJvdW5kIHtcbiAgY29uc3RydWN0b3IocmVjdGFuZ2xlKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMucmVjdGFuZ2xlID0gcmVjdGFuZ2xlXG4gIH1cblxuICBib3VuZChwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IGNhbGNQb2ludCA9IHBvaW50LmNsb25lKClcbiAgICBjb25zdCByZWN0UDIgPSB0aGlzLnJlY3RhbmdsZS5nZXRQMygpXG5cbiAgICBpZiAodGhpcy5yZWN0YW5nbGUucG9zaXRpb24ueCA+IGNhbGNQb2ludC54KSB7XG4gICAgICAoY2FsY1BvaW50LnggPSB0aGlzLnJlY3RhbmdsZS5wb3NpdGlvbi54KVxuICAgIH1cbiAgICBpZiAodGhpcy5yZWN0YW5nbGUucG9zaXRpb24ueSA+IGNhbGNQb2ludC55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHRoaXMucmVjdGFuZ2xlLnBvc2l0aW9uLnlcbiAgICB9XG4gICAgaWYgKHJlY3RQMi54IDwgY2FsY1BvaW50LnggKyBzaXplLngpIHtcbiAgICAgIGNhbGNQb2ludC54ID0gcmVjdFAyLnggLSBzaXplLnhcbiAgICB9XG4gICAgaWYgKHJlY3RQMi55IDwgY2FsY1BvaW50LnkgKyBzaXplLnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gcmVjdFAyLnkgLSBzaXplLnlcbiAgICB9XG5cbiAgICByZXR1cm4gY2FsY1BvaW50XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9FbGVtZW50IGV4dGVuZHMgQm91bmRUb1JlY3RhbmdsZSB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbnRhaW5lcikge1xuICAgIHN1cGVyKFJlY3RhbmdsZS5mcm9tRWxlbWVudChlbGVtZW50LCBjb250YWluZXIpKVxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lclxuICB9XG5cbiAgcmVmcmVzaCAoKSB7XG4gICAgdGhpcy5yZWN0YW5nbGUgPSBSZWN0YW5nbGUuZnJvbUVsZW1lbnQodGhpcy5lbGVtZW50LCB0aGlzLmNvbnRhaW5lcilcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb0xpbmVYIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3Rvcih4LCBzdGFydFksIGVuZFkpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy54ID0geFxuICAgIHRoaXMuc3RhcnRZID0gc3RhcnRZXG4gICAgdGhpcy5lbmRZID0gZW5kWVxuICB9XG5cbiAgYm91bmQocG9pbnQsIHNpemUpIHtcbiAgICBjb25zdCBjYWxjUG9pbnQgPSBwb2ludC5jbG9uZSgpXG5cbiAgICBjYWxjUG9pbnQueCA9IHRoaXMueFxuICAgIGlmICh0aGlzLnN0YXJ0WSA+IGNhbGNQb2ludC55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHRoaXMuc3RhcnRZXG4gICAgfVxuICAgIGlmICh0aGlzLmVuZFkgPCBjYWxjUG9pbnQueSArIHNpemUueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSB0aGlzLmVuZFkgLSBzaXplLnlcbiAgICB9XG5cbiAgICByZXR1cm4gY2FsY1BvaW50XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9MaW5lWSBleHRlbmRzIEJvdW5kIHtcbiAgY29uc3RydWN0b3IoeSwgc3RhcnRYLCBlbmRYKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMueSA9IHlcbiAgICB0aGlzLnN0YXJ0WCA9IHN0YXJ0WFxuICAgIHRoaXMuZW5kWCA9IGVuZFhcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgY2FsY1BvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIGNhbGNQb2ludC55ID0gdGhpcy55XG4gICAgaWYgKHRoaXMuc3RhcnRYID4gY2FsY1BvaW50LngpIHtcbiAgICAgIGNhbGNQb2ludC54ID0gdGhpcy5zdGFydFhcbiAgICB9XG4gICAgaWYgKHRoaXMuZW5kWCA8IGNhbGNQb2ludC54ICsgc2l6ZS54KSB7XG4gICAgICBjYWxjUG9pbnQueCA9IHRoaXMuZW5kWCAtIHNpemUueFxuICAgIH1cbiAgICByZXR1cm4gY2FsY1BvaW50XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9MaW5lIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3RvcihzdGFydFBvaW50LCBlbmRQb2ludCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnN0YXJ0UG9pbnQgPSBzdGFydFBvaW50XG4gICAgdGhpcy5lbmRQb2ludCA9IGVuZFBvaW50XG4gICAgY29uc3QgYWxwaGEgPSBNYXRoLmF0YW4yKGVuZFBvaW50LnkgLSBzdGFydFBvaW50LnksIGVuZFBvaW50LnggLSBzdGFydFBvaW50LngpXG4gICAgY29uc3QgYmV0YSA9IGFscGhhICsgTWF0aC5QSSAvIDJcbiAgICB0aGlzLnNvbWVLID0gMTBcbiAgICB0aGlzLmNvc0JldGEgPSBNYXRoLmNvcyhiZXRhKVxuICAgIHRoaXMuc2luQmV0YSA9IE1hdGguc2luKGJldGEpXG4gIH1cblxuICBib3VuZChwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IHBvaW50MiA9IG5ldyBQb2ludChcbiAgICAgIHBvaW50LnggKyB0aGlzLnNvbWVLICogdGhpcy5jb3NCZXRhLFxuICAgICAgcG9pbnQueSArIHRoaXMuc29tZUsgKiB0aGlzLnNpbkJldGFcbiAgICApXG5cbiAgICBjb25zdCBuZXdFbmRQb2ludCA9IGdldFBvaW50T25MaW5lQnlMZW5naHQodGhpcy5lbmRQb2ludCwgdGhpcy5zdGFydFBvaW50LCBzaXplLngpXG4gICAgY29uc3QgcG9pbnRDcm9zc2luZyA9IGRpcmVjdENyb3NzaW5nKHRoaXMuc3RhcnRQb2ludCwgdGhpcy5lbmRQb2ludCwgcG9pbnQsIHBvaW50MilcblxuICAgIHJldHVybiBib3VuZFRvTGluZSh0aGlzLnN0YXJ0UG9pbnQsIG5ld0VuZFBvaW50LCBwb2ludENyb3NzaW5nKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvQ2lyY2xlIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3RvcihjZW50ZXIsIHJhZGl1cykge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLmNlbnRlciA9IGNlbnRlclxuICAgIHRoaXMucmFkaXVzID0gcmFkaXVzXG4gIH1cblxuICBib3VuZChwb2ludCwgX3NpemUpIHtcbiAgICByZXR1cm4gZ2V0UG9pbnRPbkxpbmVCeUxlbmdodCh0aGlzLmNlbnRlciwgcG9pbnQsIHRoaXMucmFkaXVzKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvQXJjIGV4dGVuZHMgQm91bmRUb0NpcmNsZSB7XG4gIGNvbnN0cnVjdG9yKGNlbnRlciwgcmFkaXVzLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSkge1xuICAgIHN1cGVyKGNlbnRlciwgcmFkaXVzKVxuICAgIHRoaXMuX3N0YXJ0QW5nbGUgPSBzdGFydEFuZ2xlXG4gICAgdGhpcy5fZW5kQW5nbGUgPSBlbmRBbmdsZVxuICB9XG5cbiAgc3RhcnRBbmdsZSgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMuX3N0YXJ0QW5nbGUgPT09ICdmdW5jdGlvbicgPyB0aGlzLl9zdGFydEFuZ2xlKCkgOiB0aGlzLl9zdGFydEFuZ2xlXG4gIH1cblxuICBlbmRBbmdsZSgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMuX2VuZEFuZ2xlID09PSAnZnVuY3Rpb24nID8gdGhpcy5fZW5kQW5nbGUoKSA6IHRoaXMuX2VuZEFuZ2xlXG4gIH1cblxuICBib3VuZChwb2ludCwgX3NpemUpIHtcbiAgICBsZXQgYW5nbGUgPSBnZXRBbmdsZSh0aGlzLmNlbnRlciwgcG9pbnQpXG4gICAgYW5nbGUgPSBub3JtYWxpemVBbmdsZShhbmdsZSlcbiAgICBhbmdsZSA9IGJvdW5kQW5nbGUodGhpcy5zdGFydEFuZ2xlKCksIHRoaXMuZW5kQW5nbGUoKSwgYW5nbGUpXG4gICAgcmV0dXJuIGdldFBvaW50RnJvbVJhZGlhbFN5c3RlbShhbmdsZSwgdGhpcy5yYWRpdXMsIHRoaXMuY2VudGVyKVxuICB9XG59XG4iLCJpbXBvcnQgcmFuZ2UgZnJvbSAnLi91dGlscy9yYW5nZS5qcydcbmltcG9ydCByZW1vdmVJdGVtIGZyb20gJy4vdXRpbHMvcmVtb3ZlLWFycmF5LWl0ZW0nXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnRFbWl0dGVyJ1xuaW1wb3J0IGRpc3BhdGNoRG9tRXZlbnQgZnJvbSAnLi91dGlscy9kaXNwYXRjaC1kb20tZXZlbnQnXG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gJy4vZ2VvbWV0cnkvcmVjdGFuZ2xlJ1xuaW1wb3J0IHsgdHJhbnNmb3JtZWRTcGFjZURpc3RhbmNlRmFjdG9yeSB9IGZyb20gJy4vZ2VvbWV0cnkvZGlzdGFuY2VzJ1xuaW1wb3J0IHsgc2NvcGVzLCBjdXJyZW50U2NvcGUgfSBmcm9tICcuL3Njb3BlJ1xuXG5pbXBvcnQgeyBGbG9hdExlZnRTdHJhdGVneSB9IGZyb20gJy4vcG9zaXRpb25pbmcnXG5pbXBvcnQgeyBCb3VuZFRvRWxlbWVudCB9IGZyb20gJy4vYm91bmRpbmcnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhcmdldCBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGRyYWdnYWJsZXMsIG9wdGlvbnMgPSB7fSkge1xuICAgIHN1cGVyKG9wdGlvbnMpXG4gICAgY29uc3QgdGFyZ2V0ID0gdGhpc1xuXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICB0aW1lRW5kOiAyMDAsXG4gICAgICB0aW1lRXhjYW5nZTogNDAwXG4gICAgfSwgb3B0aW9ucylcblxuICAgIHRoaXMucG9zaXRpb25pbmdTdHJhdGVneSA9IG9wdGlvbnMuc3RyYXRlZ3kgfHwgbmV3IEZsb2F0TGVmdFN0cmF0ZWd5KFxuICAgICAgdGhpcy5nZXRSZWN0YW5nbGUuYmluZCh0aGlzKSxcbiAgICAgIHtcbiAgICAgICAgcmFkaXVzOiA4MCxcbiAgICAgICAgZ2V0RGlzdGFuY2U6IHRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3RvcnkoeyB4OiAxLCB5OiA0IH0pLFxuICAgICAgICByZW1vdmFibGU6IHRydWVcbiAgICAgIH1cbiAgICApXG5cbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG4gICAgdGhpcy5yZW1vdmVPbk1vdmVDb250cm9sbGVycyA9IG5ldyBNYXAoKVxuICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUudGFyZ2V0cy5wdXNoKHRhcmdldCkpXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gZHJhZ2dhYmxlc1xuXG4gICAgY3VycmVudFNjb3BlKCkuYWRkVGFyZ2V0KHRoaXMpXG5cbiAgICB0aGlzLnN0YXJ0Qm91bmRpbmcoKVxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBzdGFydEJvdW5kaW5nKCkge1xuICAgIHRoaXMuYm91bmQgPSB0aGlzLm9wdGlvbnMuYm91bmQgfHwgQm91bmRUb0VsZW1lbnQuYm91bmRpbmcodGhpcy5lbGVtZW50KVxuICB9XG5cbiAgcG9zaXRpb25pbmcgKGRyYWdnYWJsZXMsIGluZGV4ZXNPZk5ldykge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uaW5nU3RyYXRlZ3kucG9zaXRpb25pbmcoZHJhZ2dhYmxlcywgaW5kZXhlc09mTmV3KVxuICB9XG5cbiAgc29ydGluZyAob2xkRHJhZ2dhYmxlcywgbmV3RHJhZ2dhYmxlcywgaW5kZXhPZk5ld3MpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbmluZ1N0cmF0ZWd5LnNvcnRpbmcob2xkRHJhZ2dhYmxlcywgbmV3RHJhZ2dhYmxlcywgaW5kZXhPZk5ld3MpXG4gIH1cblxuICBpbml0KCkge1xuICAgIGxldCByZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXdcblxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzID0gdGhpcy5kcmFnZ2FibGVzLmZpbHRlcigoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBsZXQgZWxlbWVudCA9IGRyYWdnYWJsZS5lbGVtZW50LnBhcmVudE5vZGVcbiAgICAgIHdoaWxlIChlbGVtZW50KSB7XG4gICAgICAgIGlmIChlbGVtZW50ID09PSB0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGVcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH0pXG5cbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMubGVuZ3RoKSB7XG4gICAgICBpbmRleGVzT2ZOZXcgPSByYW5nZSh0aGlzLmlubmVyRHJhZ2dhYmxlcy5sZW5ndGgpXG4gICAgICByZWN0YW5nbGVzID0gdGhpcy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgICB9KSwgaW5kZXhlc09mTmV3KVxuICAgICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXcpXG4gICAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHRoaXMuZW1pdFRhcmdldEV2ZW50KCdhZGQnLCBkcmFnZ2FibGUpKVxuICAgIH1cbiAgfVxuXG4gIGdldFJlY3RhbmdsZSgpIHtcbiAgICByZXR1cm4gUmVjdGFuZ2xlLmZyb21FbGVtZW50KHRoaXMuZWxlbWVudCwgdGhpcy5jb250YWluZXIsIHRydWUpXG4gIH1cblxuICBjYXRjaERyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmNhdGNoRHJhZ2dhYmxlKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmNhdGNoRHJhZ2dhYmxlKHRoaXMsIGRyYWdnYWJsZSlcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGFyZ2V0UmVjdGFuZ2xlID0gdGhpcy5nZXRSZWN0YW5nbGUoKVxuICAgICAgY29uc3QgZHJhZ2dhYmxlU3F1YXJlID0gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpLmdldFNxdWFyZSgpXG5cbiAgICAgIHJldHVybiBkcmFnZ2FibGVTcXVhcmUgPCB0YXJnZXRSZWN0YW5nbGUuZ2V0U3F1YXJlKClcbiAgICAgICAgICAgICAgJiYgdGFyZ2V0UmVjdGFuZ2xlLmluY2x1ZGVQb2ludChkcmFnZ2FibGUuZ2V0Q2VudGVyKCkpXG4gICAgfVxuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UmVjdGFuZ2xlKCkucG9zaXRpb25cbiAgfVxuXG4gIGdldFNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UmVjdGFuZ2xlKCkuc2l6ZVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICBzY29wZXMuZm9yRWFjaCgoc2NvcGUpID0+IHJlbW92ZUl0ZW0oc2NvcGUudGFyZ2V0cywgdGhpcykpXG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgfSksIFtdKVxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgW10sIDApXG4gIH1cblxuICBvbkVuZChkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBuZXdEcmFnZ2FibGVzSW5kZXggPSBbXVxuXG4gICAgaWYgKCF0aGlzLmdldFJlY3RhbmdsZSgpLmluY2x1ZGVQb2ludChkcmFnZ2FibGUuZ2V0Q2VudGVyKCkpKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuZW1pdFRhcmdldEV2ZW50KCdiZWZvcmVBZGQnLCBkcmFnZ2FibGUsIHsgY2FuY2VsYWJsZTogdHJ1ZSB9KSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgZHJhZ2dhYmxlLnBvc2l0aW9uID0gdGhpcy5ib3VuZChkcmFnZ2FibGUucG9zaXRpb24sIGRyYWdnYWJsZS5nZXRTaXplKCkpXG5cbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcyA9IHRoaXMuc29ydGluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcywgW2RyYWdnYWJsZV0sIG5ld0RyYWdnYWJsZXNJbmRleClcbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBuZXdEcmFnZ2FibGVzSW5kZXgpXG5cbiAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIG5ld0RyYWdnYWJsZXNJbmRleClcbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMSkge1xuICAgICAgdGhpcy5hZGRSZW1vdmVPbk1vdmUoZHJhZ2dhYmxlKVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgaW5kZXhlc09mTmV3LCB0aW1lKSB7XG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuc2xpY2UoMCkuZm9yRWFjaCgoZHJhZ2dhYmxlLCBpKSA9PiB7XG4gICAgICBjb25zdCByZWN0ID0gcmVjdGFuZ2xlc1tpXSxcbiAgICAgICAgdGltZUVuZCA9IHRpbWUgfHwgdGltZSA9PT0gMCA/IHRpbWUgOiBpbmRleGVzT2ZOZXcuaW5kZXhPZihpKSAhPT0gLTEgPyB0aGlzLm9wdGlvbnMudGltZUVuZCA6IHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZVxuXG4gICAgICBpZiAocmVjdC5yZW1vdmFibGUpIHtcbiAgICAgICAgZHJhZ2dhYmxlLm1vdmUoZHJhZ2dhYmxlLmluaXRpYWxQb3NpdGlvbiwgdGltZUVuZCwgdHJ1ZSwgdHJ1ZSlcbiAgICAgICAgdGhpcy5zdG9wUmVtb3ZlT25Nb3ZlKGRyYWdnYWJsZSlcbiAgICAgICAgcmVtb3ZlSXRlbSh0aGlzLmlubmVyRHJhZ2dhYmxlcywgZHJhZ2dhYmxlKVxuICAgICAgICB0aGlzLmVtaXRUYXJnZXRFdmVudCgncmVtb3ZlJywgZHJhZ2dhYmxlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZHJhZ2dhYmxlLm1vdmUocmVjdC5wb3NpdGlvbiwgdGltZUVuZCwgdHJ1ZSwgdHJ1ZSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgYWRkKGRyYWdnYWJsZSwgdGltZSkge1xuICAgIGNvbnN0IG5ld0RyYWdnYWJsZXNJbmRleCA9IHRoaXMuaW5uZXJEcmFnZ2FibGVzLmxlbmd0aFxuXG4gICAgaWYgKCF0aGlzLmVtaXRUYXJnZXRFdmVudCgnYmVmb3JlQWRkJywgZHJhZ2dhYmxlLCB7IGNhbmNlbGFibGU6IHRydWUgfSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMucHVzaElubmVyRHJhZ2dhYmxlKGRyYWdnYWJsZSlcbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBuZXdEcmFnZ2FibGVzSW5kZXgsIGRyYWdnYWJsZSlcblxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgW25ld0RyYWdnYWJsZXNJbmRleF0sIHRpbWUgfHwgMClcbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMSkge1xuICAgICAgdGhpcy5hZGRSZW1vdmVPbk1vdmUoZHJhZ2dhYmxlKVxuICAgIH1cbiAgfVxuXG4gIHB1c2hJbm5lckRyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpPT09LTEpIHtcbiAgICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxuICAgIH1cbiAgfVxuXG4gIGFkZFJlbW92ZU9uTW92ZShkcmFnZ2FibGUpIHtcbiAgICB0aGlzLnN0b3BSZW1vdmVPbk1vdmUoZHJhZ2dhYmxlKVxuICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKClcbiAgICBkcmFnZ2FibGUuYWRkRXZlbnRMaXN0ZW5lcignZHJhZzptb3ZlJywgKCkgPT4gdGhpcy5yZW1vdmUoZHJhZ2dhYmxlKSwgeyBzaWduYWw6IGNvbnRyb2xsZXIuc2lnbmFsIH0pXG4gICAgdGhpcy5yZW1vdmVPbk1vdmVDb250cm9sbGVycy5zZXQoZHJhZ2dhYmxlLCBjb250cm9sbGVyKVxuXG4gICAgdGhpcy5lbWl0VGFyZ2V0RXZlbnQoJ2FkZCcsIGRyYWdnYWJsZSlcbiAgfVxuXG4gIHN0b3BSZW1vdmVPbk1vdmUoZHJhZ2dhYmxlKSB7XG4gICAgdGhpcy5yZW1vdmVPbk1vdmVDb250cm9sbGVycy5nZXQoZHJhZ2dhYmxlKT8uYWJvcnQoKVxuICAgIHRoaXMucmVtb3ZlT25Nb3ZlQ29udHJvbGxlcnMuZGVsZXRlKGRyYWdnYWJsZSlcbiAgfVxuXG4gIHJlbW92ZShkcmFnZ2FibGUpIHtcbiAgICB0aGlzLnN0b3BSZW1vdmVPbk1vdmUoZHJhZ2dhYmxlKVxuXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSlcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5zcGxpY2UoaW5kZXgsIDEpXG5cbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBbXSlcblxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgW10pXG4gICAgdGhpcy5lbWl0VGFyZ2V0RXZlbnQoJ3JlbW92ZScsIGRyYWdnYWJsZSlcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLm1vdmUoZHJhZ2dhYmxlLmluaXRpYWxQb3NpdGlvbiwgMCwgdHJ1ZSwgdHJ1ZSlcbiAgICAgIHRoaXMuc3RvcFJlbW92ZU9uTW92ZShkcmFnZ2FibGUpXG4gICAgICB0aGlzLmVtaXRUYXJnZXRFdmVudCgncmVtb3ZlJywgZHJhZ2dhYmxlKVxuICAgIH0pXG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMgPSBbXVxuICB9XG5cbiAgZ2V0U29ydGVkRHJhZ2dhYmxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5pbm5lckRyYWdnYWJsZXMuc2xpY2UoKVxuICB9XG5cbiAgZW1pdFRhcmdldEV2ZW50KHR5cGUsIGRyYWdnYWJsZSwgeyBjYW5jZWxhYmxlID0gZmFsc2UgfSA9IHt9KSB7XG4gICAgY29uc3QgZGV0YWlsID0geyB0YXJnZXQ6IHRoaXMsIGRyYWdnYWJsZSB9XG4gICAgY29uc3QgaXNOb3RQcmV2ZW50ZWQgPSB0aGlzLmVtaXQoYHRhcmdldDoke3R5cGV9YCwgZGV0YWlsLCB7IGNhbmNlbGFibGUgfSlcblxuICAgIGlmICghdGhpcy5kb21FdmVudHMpIHJldHVybiBpc05vdFByZXZlbnRlZFxuXG4gICAgY29uc3QgZG9tVHlwZSA9IHR5cGUucmVwbGFjZSgvW0EtWl0vZywgKGxldHRlcikgPT4gYC0ke2xldHRlci50b0xvd2VyQ2FzZSgpfWApXG4gICAgcmV0dXJuIGRpc3BhdGNoRG9tRXZlbnQodGhpcy5lbGVtZW50LCBgZHJhZ2VlOnRhcmdldC0ke2RvbVR5cGV9YCwgZGV0YWlsLCB7IGNhbmNlbGFibGUgfSkgJiYgaXNOb3RQcmV2ZW50ZWRcbiAgfVxuXG4gIGdldCBjb250YWluZXIoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9jb250YWluZXIgPSB0aGlzLl9jb250YWluZXIgfHwgdGhpcy5vcHRpb25zLmNvbnRhaW5lciB8fCB0aGlzLm9wdGlvbnMucGFyZW50IHx8IHRoaXMuZWxlbWVudC5vZmZzZXRQYXJlbnQpXG4gIH1cblxuICBnZXQgZG9tRXZlbnRzKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZG9tRXZlbnRzICE9PSBmYWxzZVxuICB9XG59XG5cbiJdLCJuYW1lcyI6WyJnZXRQYXJlbnRzQ2hhaW4iLCJjaGlsZEVsZW1lbnQiLCJyb290RWxlbWVudCIsImNoYWluIiwiZWxlbWVudCIsInBhcmVudE5vZGUiLCJ1bnNoaWZ0IiwiUG9pbnQiLCJjb25zdHJ1Y3RvciIsIngiLCJ5IiwiYWRkIiwicCIsInN1YiIsIm11bHQiLCJrIiwibmVnYXRpdmUiLCJjb21wYXJlIiwiY2xvbmUiLCJ0b1N0cmluZyIsImVsZW1lbnRPZmZzZXQiLCJwYXJlbnQiLCJvZmZzZXRQYXJlbnQiLCJvZmZzZXRMZWZ0IiwiY2xpZW50TGVmdCIsIm9mZnNldFRvcCIsImNsaWVudFRvcCIsImNvbnNpZGVyT2Zmc2V0RWxlbWVudHMiLCJwb3AiLCJyZWR1Y2UiLCJzdW0iLCJlbGVtZW50Qm91bmRpbmdPZmZzZXQiLCJlbGVtZW50UmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInBhcmVudFJlY3QiLCJsZWZ0IiwidG9wIiwiZWxlbWVudFNpemUiLCJ3aWR0aCIsImhlaWdodCIsIlJlY3RhbmdsZSIsInBvc2l0aW9uIiwic2l6ZSIsImdldFAxIiwiZ2V0UDIiLCJnZXRQMyIsImdldFA0IiwiZ2V0Q2VudGVyIiwib3IiLCJyZWN0IiwiTWF0aCIsIm1pbiIsIm1heCIsImFuZCIsImluY2x1ZGVQb2ludCIsImluY2x1ZGVSZWN0YW5nbGUiLCJyZWN0YW5nbGUiLCJtb3ZlVG9Cb3VuZCIsImF4aXMiLCJzZWxBeGlzIiwiY3Jvc3NSZWN0YW5nbGUiLCJ0aGlzQ2VudGVyIiwicmVjdENlbnRlciIsInNpZ24iLCJvZmZzZXQiLCJnZXRTcXVhcmUiLCJzdHlsZUFwcGx5IiwiZWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzdHlsZSIsImdyb3d0aCIsImdldE1pblNpZGUiLCJmcm9tRWxlbWVudCIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsImlzQ29uc2lkZXJUcmFuc2xhdGUiLCJFdmVudEVtaXR0ZXIiLCJFdmVudFRhcmdldCIsIm9wdGlvbnMiLCJvbiIsIk9iamVjdCIsImVudHJpZXMiLCJmb3JFYWNoIiwiX3JlZiIsImV2ZW50TmFtZSIsImZuIiwiZW1pdCIsImRldGFpbCIsImNhbmNlbGFibGUiLCJkaXNwYXRjaEV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwib2ZmIiwib25jZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ1bnN1YnNjcmliZSIsImFycmF5IiwidmFsIiwiaSIsInNwbGljZSIsInNjb3BlcyIsInNjb3BlU3RhY2siLCJTY29wZSIsImRyYWdnYWJsZXMiLCJ0YXJnZXRzIiwic2NvcGUiLCJkcmFnZ2FibGUiLCJyZWxlYXNlRHJhZ2dhYmxlIiwidGFyZ2V0IiwicmVtb3ZlSXRlbSIsImRyYWdFbmRBY3Rpb25SZWxlYXNlcyIsIk1hcCIsInB1c2giLCJ0aW1lRW5kIiwiaW5pdCIsImluaXREcmFnZ2FibGUiLCJhZGREcmFnZ2FibGUiLCJzZXQiLCJvdmVycmlkZURyYWdFbmRBY3Rpb24iLCJvbkVuZCIsInJlbGVhc2UiLCJnZXQiLCJkZWxldGUiLCJhZGRUYXJnZXQiLCJzaG90VGFyZ2V0cyIsImZpbHRlciIsImluZGV4T2YiLCJjYXRjaERyYWdnYWJsZSIsInNvcnQiLCJhIiwiYiIsImdldFJlY3RhbmdsZSIsImlzQWNjZXB0ZWQiLCJwaW5Qb3NpdGlvbiIsImluaXRpYWxQb3NpdGlvbiIsInJlc2V0IiwicmVmcmVzaCIsInBvc2l0aW9ucyIsIm1hcCIsImlubmVyRHJhZ2dhYmxlcyIsIm1lc3NhZ2UiLCJ0YXJnZXRJbmRleGVzIiwiaW5kZXgiLCJkZWZhdWx0U2NvcGUiLCJjdXJyZW50U2NvcGUiLCJjYWxsIiwidGhyb3R0bGUiLCJmdW5jIiwid2FpdCIsImxhc3RUaW1lIiwiZXhlY3V0ZWRGdW5jdGlvbiIsImNvbnRleHQiLCJhcmdzIiwibm93IiwiRGF0ZSIsImFwcGx5IiwiZGlzcGF0Y2hEb21FdmVudCIsImJ1YmJsZXMiLCJ0aHJvdHRsZWREcmFnT3ZlciIsImNhbGxiYWNrIiwiZHVyYXRpb24iLCJ0aHJvdHRsZWRDYWxsYmFjayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJwYXNzaXZlRmFsc2UiLCJwYXNzaXZlIiwiaXNUb3VjaCIsIm5hdmlnYXRvciIsIm1heFRvdWNoUG9pbnRzIiwibW91c2VFdmVudHMiLCJzdGFydCIsIm1vdmUiLCJlbmQiLCJ0b3VjaEV2ZW50cyIsInRyYW5zZm9ybVByb3BlcnR5IiwidHJhbnNpdGlvblByb3BlcnR5IiwiZ2V0VG91Y2hCeUlEIiwidG91Y2hJZCIsImNoYW5nZWRUb3VjaGVzIiwiaWRlbnRpZmllciIsInByZXZlbnREb3VibGVJbml0Iiwic29tZSIsImV4aXN0aW5nIiwiY29weVN0eWxlcyIsInNvdXJjZSIsImRlc3RpbmF0aW9uIiwiY3MiLCJ3aW5kb3ciLCJnZXRDb21wdXRlZFN0eWxlIiwia2V5IiwiY2hpbGRyZW4iLCJEcmFnZ2FibGUiLCJfZHJhZ0VuZEFjdGlvbnMiLCJfZW5hYmxlIiwic3RhcnRCb3VuZGluZyIsInN0YXJ0UG9zaXRpb25pbmciLCJzdGFydExpc3RlbmluZyIsImJvdW5kaW5nIiwiYm91bmQiLCJwb2ludCIsIl9zZXREZWZhdWx0VHJhbnNpdGlvbiIsImlzQ29uc2lkZXJUcmFuc2Zvcm1PZmZzZXQiLCJjb250YWluZXIiLCJwaW5uZWRQb3NpdGlvbiIsIl9kcmFnU3RhcnQiLCJkcmFnU3RhcnQiLCJfZHJhZ01vdmUiLCJkcmFnTW92ZSIsIl9kcmFnRW5kIiwiZHJhZ0VuZCIsIl9uYXRpdmVEcmFnU3RhcnQiLCJuYXRpdmVEcmFnU3RhcnQiLCJfbmF0aXZlRHJhZ092ZXIiLCJuYXRpdmVEcmFnT3ZlciIsImRyYWdPdmVyVGhyb3R0bGVEdXJhdGlvbiIsIl9uYXRpdmVEcmFnRW5kIiwibmF0aXZlRHJhZ0VuZCIsIl9uYXRpdmVEcm9wIiwibmF0aXZlRHJvcCIsIl9zY3JvbGwiLCJvblNjcm9sbCIsImhhbmRsZXIiLCJnZXRTaXplIiwiZ2V0UG9zaXRpb24iLCJfdHJhbnNmb3JtUG9zaXRpb24iLCJfc2V0VHJhbnNpdGlvbiIsInRpbWUiLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbkNzcyIsInRlc3QiLCJyZXBsYWNlIiwiX3NldFRyYW5zbGF0ZSIsInRyYW5zbGF0ZUNzcyIsInRyYW5zZm9ybSIsInNob3VsZFJlbW92ZVplcm9UcmFuc2xhdGUiLCJpc1NpbGVudCIsImVtaXREcmFnRXZlbnQiLCJzaWxlbnQiLCJyZXNldFBvc2l0aW9uVG9Jbml0aWFsIiwicmVmcmVzaFBvc2l0aW9uIiwic2V0UG9zaXRpb24iLCJkZXRlcm1pbmVEaXJlY3Rpb24iLCJfcHJldmlvdXNEaXJlY3Rpb25Qb3NpdGlvbiIsIl9zdGFydFBvc2l0aW9uIiwibGVmdERpcmVjdGlvbiIsInJpZ2h0RGlyZWN0aW9uIiwidXBEaXJlY3Rpb24iLCJkb3duRGlyZWN0aW9uIiwic2VlbXNTY3JvbGxpbmciLCJfc3RhcnRUb3VjaFRpbWVzdGFtcCIsInRvdWNoRHJhZ2dpbmdUaHJlc2hvbGQiLCJzaG91bGRVc2VOYXRpdmVEcmFnQW5kRHJvcCIsImlzVG91Y2hFdmVudCIsIm5hdGl2ZURyYWdBbmREcm9wIiwiZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wT25Ub3VjaCIsInN0b3BQcm9wYWdhdGlvbk9uRHJhZ1N0YXJ0Iiwic3RvcFByb3BhZ2F0aW9uIiwiVG91Y2hFdmVudCIsInRvdWNoUG9pbnQiLCJfc3RhcnRUb3VjaFBvaW50IiwicGFnZVgiLCJjbGllbnRYIiwicGFnZVkiLCJjbGllbnRZIiwiX3RvdWNoSWQiLCJfc3RhcnRXaW5kb3dTY3JvbGxQb2ludCIsIndpbmRvd1Njcm9sbFBvaW50IiwiX3N0YXJ0U2Nyb2xsRWxlbWVudHNPZmZzZXQiLCJzY3JvbGxFbGVtZW50c09mZnNldCIsIkhUTUxJbnB1dEVsZW1lbnQiLCJmb2N1cyIsImlzU3RhcnRQZW5kaW5nIiwiZHJhZ1N0YXJ0VGhyZXNob2xkIiwiX3N0YXJ0UGFyZW50c1Njcm9sbE9mZnNldCIsInBhcmVudHNTY3JvbGxPZmZzZXQiLCJlbXVsYXRlT25GaXJzdE1vdmUiLCJjYW5jZWxEcmFnZ2luZyIsImVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcCIsImNhbmNlbEVtdWxhdGlvbiIsInNjcm9sbEVsZW1lbnRzIiwiX2RyYWdTdGFydFBlbmRpbmciLCJ0b3VjaCIsImR4IiwiZHkiLCJzcXJ0IiwiaXNEcmFnZ2luZyIsImNsYXNzTGlzdCIsImRyYWdFbmRBY3Rpb24iLCJzZXRUaW1lb3V0IiwicmVtb3ZlIiwiX2V2ZW50IiwiZGF0YVRyYW5zZmVyIiwic2V0RGF0YSIsImVmZmVjdEFsbG93ZWQiLCJkcm9wRWZmZWN0IiwicmVtb3ZlQXR0cmlidXRlIiwiY29udGFpbmVyUmVjdCIsImNsb25lZEVsZW1lbnQiLCJjbG9uZU5vZGUiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJlbXVsYXRpb25EcmFnZ2FibGUiLCJkb21FdmVudHMiLCJkcmFnOm1vdmUiLCJjb250YWluZXJSZWN0UG9pbnQiLCJkcmFnOmVuZCIsImRlc3Ryb3kiLCJyZW1vdmVDaGlsZCIsInR5cGUiLCJpc05vdFByZXZlbnRlZCIsImFjdGlvbiIsIl9jb250YWluZXIiLCJfaGFuZGxlciIsImNvbnNpZGVyVHJhbnNmb3JtT2Zmc2V0Iiwic2Nyb2xsWCIsInNjcm9sbFkiLCJzY3JvbGxSb290Q29udGFpbmVyIiwiX2NhY2hlZFNjcm9sbEVsZW1lbnRzIiwic2Nyb2xsTGVmdCIsInNjcm9sbFRvcCIsInBhcmVudHMiLCJfY2FjaGVkUGFyZW50cyIsImVuYWJsZSIsImRlYm91bmNlIiwiaW1tZWRpYXRlIiwidGltZW91dCIsImxhdGVyIiwiY2xlYXJUaW1lb3V0IiwiZ2V0RGlzdGFuY2UiLCJwMSIsInAyIiwiZ2V0WERpZmZlcmVuY2UiLCJhYnMiLCJnZXRZRGlmZmVyZW5jZSIsInRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3RvcnkiLCJwb3ciLCJpbmRleE9mTmVhcmVzdFBvaW50IiwiYXJyIiwicmFkaXVzIiwiZ2V0RGlzdGFuY2VGdW5jIiwidGVtcCIsIkxpc3QiLCJhc3NpZ24iLCJ0aW1lRXhjYW5nZSIsImNoYW5nZWREdXJpbmdJdGVyYXRpb24iLCJkcmFnZ2FibGVDb250cm9sbGVycyIsInJlc2l6ZU9ic2VydmVyIiwiUmVzaXplT2JzZXJ2ZXIiLCJvblJlc2l6ZSIsImJpbmQiLCJvYnNlcnZlIiwicmVvcmRlck9uQ2hhbmdlIiwibGlzdGVuVG8iLCJvbk1vdmUiLCJyZXN0b3JlRHJhZ0VuZEFjdGlvbiIsInNpZ25hbEZvciIsInNpZ25hbCIsImhhcyIsIkFib3J0Q29udHJvbGxlciIsInVub2JzZXJ2ZSIsImFib3J0Iiwic3dhcHBpbmdEaXNhYmxlZCIsInNvcnRlZERyYWdnYWJsZXMiLCJnZXRTb3J0ZWREcmFnZ2FibGVzIiwicGlubmVkUG9zaXRpb25zIiwiY3VycmVudEluZGV4IiwidGFyZ2V0SW5kZXgiLCJkaXN0YW5jZUZ1bmMiLCJlbWl0TGlzdEV2ZW50IiwicmVvcmRlckVsZW1lbnRzIiwibW92ZWREcmFnZ2FibGUiLCJuZXh0IiwiaW5zZXJ0QmVmb3JlIiwiZCIsImxpc3QiLCJnZXRDdXJyZW50UGlubmVkUG9zaXRpb25zIiwic29ydGluZyIsIkFycmF5IiwiY29uY2F0IiwiaW5pdGlhbFBvc2l0aW9ucyIsImoiLCJjbGVhciIsInNsaWNlIiwiZHJhZ2dhYmxlQSIsImRyYWdnYWJsZUIiLCJfc3dhcHBpbmdEaXNhYmxlZCIsImRpc2FibGVkIiwiYXJyYXlNb3ZlIiwiZnJvbSIsInRvIiwiQnViYmxpbmdMaXN0IiwiYXV0b0RldGVjdEdhcCIsIl9nYXAiLCJleHBsaWNpdEdhcCIsInNvcnRlZCIsImZpbmRJbmRleCIsImlzQ29ubmVjdGVkIiwiY3VycmVudCIsImF1dG9EZXRlY3RTdGFydFBvc2l0aW9uIiwic3RhcnRQb3NpdGlvbiIsIm9uRHJhZ1N0YXJ0IiwiY2FjaGVkU29ydGVkRHJhZ2dhYmxlcyIsImluZGV4T2ZBY3RpdmVEcmFnZ2FibGUiLCJwcmV2RHJhZ2dhYmxlIiwibmV4dERyYWdnYWJsZSIsImN1cnJlbnRQb3NpdGlvbiIsImN1cnJlbnRPcmRlciIsImlzTW92aW5nQmFja3dhcmQiLCJwcmV2TmV3UG9zaXRpb24iLCJuZXh0UG9zaXRpb24iLCJjcm9zc0F4aXMiLCJpc01vdmluZ0ZvcndhcmQiLCJkcmFnZ2FibGVOZXdQb3NpdGlvbiIsImJ1YmJsaW5nIiwiY3VycmVudERyYWdnYWJsZSIsImluY2x1ZGVzIiwiZ2FwIiwidmVydGljYWxHYXAiLCJnYXBWYWx1ZSIsInJhbmdlIiwic3RvcCIsInN0ZXAiLCJyZXN1bHQiLCJkaXJlY3RDcm9zc2luZyIsIkwxUDEiLCJMMVAyIiwiTDJQMSIsIkwyUDIiLCJrMSIsImsyIiwiYjEiLCJiMiIsImJvdW5kVG9MaW5lIiwiQSIsIkIiLCJQIiwiQVAiLCJBQiIsImFiMiIsImFwX2FiIiwidCIsImdldFBvaW50T25MaW5lQnlMZW5naHQiLCJMUDEiLCJMUDIiLCJsZW5naHQiLCJwZXJjZW50IiwiYWRkUG9pbnRUb0JvdW5kUG9pbnRzIiwiYm91bmRwb2ludHMiLCJpc1JpZ2h0IiwiYlBvaW50IiwiQmFzaWNTdHJhdGVneSIsImJvdW5kUmVjdCIsIk5vdENyb3NzaW5nU3RyYXRlZ3kiLCJwb3NpdGlvbmluZyIsInJlY3RhbmdsZUxpc3QiLCJpbmRleGVzT2ZOZXdzIiwic3RhdGljUmVjdGFuZ2xlSW5kZXhlcyIsImluZGV4ZXMiLCJfcmVjdCIsInJlbW92YWJsZSIsImluZGV4T2ZTdGF0aWMiLCJzdGF0aWNSZWN0Iiwib2RsRHJhZ2dhYmxlc0xpc3QiLCJuZXdEcmFnZ2FibGVzIiwiaW5kZXhPZk5ld3MiLCJGbG9hdExlZnRTdHJhdGVneSIsInBhZGRpbmdUb3BMZWZ0IiwicGFkZGluZ0JvdHRvbVJpZ2h0IiwieUdhcEJldHdlZW5EcmFnZ2FibGVzIiwiX2luZGV4ZXNPZk5ld3MiLCJyZWN0UDIiLCJib3VuZGFyeVBvaW50cyIsInJlY3RJbmRleCIsImlzVmFsaWQiLCJuZXdMaXN0IiwibGlzdE9sZFBvc2l0aW9uIiwibmV3RHJhZ2dhYmxlIiwiRmxvYXRSaWdodFN0cmF0ZWd5IiwicGFkZGluZ1RvcFJpZ2h0IiwicGFkZGluZ0JvdHRvbUxlZnQiLCJwYWRkaW5nQm90dG9tTmVnTGVmdCIsImdldEFuZ2xlRGlmZiIsImFscGhhIiwiYmV0YSIsIm1pbkFuZ2xlIiwibWF4QW5nbGUiLCJQSSIsImdldEFuZ2xlIiwiZGlmZiIsIm5vcm1hbGl6ZUFuZ2xlIiwiYXRhbjIiLCJib3VuZEFuZ2xlIiwiZG1pbiIsImRtYXgiLCJnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0iLCJhbmdsZSIsImNlbnRlciIsImNvcyIsInNpbiIsIkJvdW5kIiwiX3NpemUiLCJpbnN0YW5jZSIsIkJvdW5kVG9SZWN0YW5nbGUiLCJjYWxjUG9pbnQiLCJCb3VuZFRvRWxlbWVudCIsIkJvdW5kVG9MaW5lWCIsInN0YXJ0WSIsImVuZFkiLCJCb3VuZFRvTGluZVkiLCJzdGFydFgiLCJlbmRYIiwiQm91bmRUb0xpbmUiLCJzdGFydFBvaW50IiwiZW5kUG9pbnQiLCJzb21lSyIsImNvc0JldGEiLCJzaW5CZXRhIiwicG9pbnQyIiwibmV3RW5kUG9pbnQiLCJwb2ludENyb3NzaW5nIiwiQm91bmRUb0NpcmNsZSIsIkJvdW5kVG9BcmMiLCJzdGFydEFuZ2xlIiwiZW5kQW5nbGUiLCJfc3RhcnRBbmdsZSIsIl9lbmRBbmdsZSIsIlRhcmdldCIsInBvc2l0aW9uaW5nU3RyYXRlZ3kiLCJzdHJhdGVneSIsInJlbW92ZU9uTW92ZUNvbnRyb2xsZXJzIiwiaW5kZXhlc09mTmV3Iiwib2xkRHJhZ2dhYmxlcyIsInJlY3RhbmdsZXMiLCJlbWl0VGFyZ2V0RXZlbnQiLCJ0YXJnZXRSZWN0YW5nbGUiLCJkcmFnZ2FibGVTcXVhcmUiLCJuZXdEcmFnZ2FibGVzSW5kZXgiLCJhZGRSZW1vdmVPbk1vdmUiLCJzdG9wUmVtb3ZlT25Nb3ZlIiwicHVzaElubmVyRHJhZ2dhYmxlIiwiY29udHJvbGxlciIsImRvbVR5cGUiLCJsZXR0ZXIiLCJ0b0xvd2VyQ2FzZSJdLCJtYXBwaW5ncyI6Ijs7O0VBQWUsU0FBU0EsZUFBZUEsQ0FBQ0MsWUFBWSxFQUFFQyxXQUFXLEVBQUU7SUFDbEUsTUFBTUMsS0FBSyxHQUFHLEVBQUU7SUFDZixJQUFJQyxPQUFPLEdBQUdILFlBQVk7RUFFMUIsRUFBQSxPQUFNRyxPQUFPLENBQUNDLFVBQVUsSUFBSUQsT0FBTyxLQUFLRixXQUFXLEVBQUU7RUFDbkRDLElBQUFBLEtBQUssQ0FBQ0csT0FBTyxDQUFDRixPQUFPLENBQUNDLFVBQVUsQ0FBQztNQUNqQ0QsT0FBTyxHQUFHQSxPQUFPLENBQUNDLFVBQVU7RUFDOUI7RUFFQSxFQUFBLE9BQU9GLEtBQUs7RUFDZDs7RUNSQTtFQUNlLE1BQU1JLEtBQUssQ0FBQztFQUN6QjtFQUNGO0VBQ0E7RUFDQTtFQUNBO0VBQ0VDLEVBQUFBLFdBQVdBLENBQUNDLENBQUMsRUFBRUMsQ0FBQyxFQUFFO01BQ2hCLElBQUksQ0FBQ0QsQ0FBQyxHQUFHQSxDQUFDO01BQ1YsSUFBSSxDQUFDQyxDQUFDLEdBQUdBLENBQUM7RUFDWjtJQUVBQyxHQUFHQSxDQUFDQyxDQUFDLEVBQUU7RUFDTCxJQUFBLE9BQU8sSUFBSUwsS0FBSyxDQUFDLElBQUksQ0FBQ0UsQ0FBQyxHQUFHRyxDQUFDLENBQUNILENBQUMsRUFBRSxJQUFJLENBQUNDLENBQUMsR0FBR0UsQ0FBQyxDQUFDRixDQUFDLENBQUM7RUFDOUM7SUFFQUcsR0FBR0EsQ0FBQ0QsQ0FBQyxFQUFFO0VBQ0wsSUFBQSxPQUFPLElBQUlMLEtBQUssQ0FBQyxJQUFJLENBQUNFLENBQUMsR0FBR0csQ0FBQyxDQUFDSCxDQUFDLEVBQUUsSUFBSSxDQUFDQyxDQUFDLEdBQUdFLENBQUMsQ0FBQ0YsQ0FBQyxDQUFDO0VBQzlDO0lBRUFJLElBQUlBLENBQUNDLENBQUMsRUFBRTtFQUNOLElBQUEsT0FB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
