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

  function dispatchDomEvent(element, eventName, detail) {
    element.dispatchEvent(new CustomEvent(eventName, {
      bubbles: true,
      detail
    }));
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

  const addToDefaultScope$1 = function (target) {
    defaultScope.addTarget(target);
  };
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
      Target.emitter.emit('target:create', this);
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
  Target.emitter = new EventEmitter();
  Target.emitter.on('target:create', addToDefaultScope$1);

  const scopes = [];
  class Scope extends EventEmitter {
    constructor(draggables, targets) {
      let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      super(options);
      scopes.forEach(scope => {
        if (draggables) {
          draggables.forEach(draggable => {
            removeItem(scope.draggables, draggable);
          });
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
      this.draggables.forEach(draggable => {
        draggable.dragEndAction = () => this.onEnd(draggable);
      });
    }
    addDraggable(draggable) {
      this.draggables.push(draggable);
      draggable.dragEndAction = () => this.onEnd(draggable);
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
  function scope(fn) {
    const currentScope = new Scope();
    const addDraggableToScope = function (draggable) {
      currentScope.addDraggable(draggable);
      Draggable.emitter.interrupt();
    };
    const addTargetToScope = function (target) {
      currentScope.addTarget(target);
      Draggable.emitter.interrupt();
    };
    Draggable.emitter.prependOn('draggable:create', addDraggableToScope);
    Target.emitter.prependOn('target:create', addTargetToScope);
    fn.call();
    Draggable.emitter.unsubscribe('draggable:create', addDraggableToScope);
    Target.emitter.unsubscribe('target:create', addTargetToScope);
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
  function addToDefaultScope(draggable) {
    defaultScope.addDraggable(draggable);
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
      Draggable.emitter.emit('draggable:create', this);
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
  Draggable.emitter = new EventEmitter();
  Draggable.emitter.on('draggable:create', addToDefaultScope);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZGV2LmpzIiwic291cmNlcyI6WyIuLi9zcmMvdXRpbHMvZ2V0LXBhcmVudHMtY2hhaW4uanMiLCIuLi9zcmMvZ2VvbWV0cnkvcG9pbnQuanMiLCIuLi9zcmMvZ2VvbWV0cnkvcmVjdGFuZ2xlLmpzIiwiLi4vc3JjL2V2ZW50RW1pdHRlci5qcyIsIi4uL3NyYy91dGlscy9yZW1vdmUtYXJyYXktaXRlbS5qcyIsIi4uL3NyYy91dGlscy9yYW5nZS5qcyIsIi4uL3NyYy91dGlscy9kaXNwYXRjaC1kb20tZXZlbnQuanMiLCIuLi9zcmMvZ2VvbWV0cnkvZGlzdGFuY2VzLmpzIiwiLi4vc3JjL2dlb21ldHJ5L2JvdW5kcy5qcyIsIi4uL3NyYy9wb3NpdGlvbmluZy5qcyIsIi4uL3NyYy9nZW9tZXRyeS9hbmdsZXMuanMiLCIuLi9zcmMvYm91bmRpbmcuanMiLCIuLi9zcmMvdGFyZ2V0LmpzIiwiLi4vc3JjL3Njb3BlLmpzIiwiLi4vc3JjL3V0aWxzL3Rocm90dGxlLmpzIiwiLi4vc3JjL2RyYWdnYWJsZS5qcyIsIi4uL3NyYy91dGlscy9kZWJvdW5jZS5qcyIsIi4uL3NyYy9saXN0LmpzIiwiLi4vc3JjL2J1YmJsaW5nTGlzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRQYXJlbnRzQ2hhaW4oY2hpbGRFbGVtZW50LCByb290RWxlbWVudCkge1xuXHRjb25zdCBjaGFpbiA9IFtdXG4gIGxldCBlbGVtZW50ID0gY2hpbGRFbGVtZW50XG5cbiAgd2hpbGUoZWxlbWVudC5wYXJlbnROb2RlICYmIGVsZW1lbnQgIT09IHJvb3RFbGVtZW50KSB7XG4gICAgY2hhaW4udW5zaGlmdChlbGVtZW50LnBhcmVudE5vZGUpXG4gICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZVxuICB9XG5cbiAgcmV0dXJuIGNoYWluXG59XG4iLCJpbXBvcnQgZ2V0UGFyZW50c0NoYWluIGZyb20gJy4uL3V0aWxzL2dldC1wYXJlbnRzLWNoYWluJ1xuXG4vKiogQ2xhc3MgcmVwcmVzZW50aW5nIGEgcG9pbnQuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2ludCB7XG4gIC8qKlxuICAqIENyZWF0ZSBhIHBvaW50LlxuICAqIEBwYXJhbSB7bnVtYmVyfSB4IC0gVGhlIHggdmFsdWUuXG4gICogQHBhcmFtIHtudW1iZXJ9IHkgLSBUaGUgeSB2YWx1ZS5cbiAgKi9cbiAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgIHRoaXMueCA9IHhcbiAgICB0aGlzLnkgPSB5XG4gIH1cblxuICBhZGQocCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54ICsgcC54LCB0aGlzLnkgKyBwLnkpXG4gIH1cblxuICBzdWIocCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54IC0gcC54LCB0aGlzLnkgLSBwLnkpXG4gIH1cblxuICBtdWx0KGspIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCAqIGssIHRoaXMueSAqIGspXG4gIH1cblxuICBuZWdhdGl2ZSgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KC10aGlzLngsIC10aGlzLnkpXG4gIH1cblxuICBjb21wYXJlKHApIHtcbiAgICByZXR1cm4gKHRoaXMueCA9PT0gcC54ICYmIHRoaXMueSA9PT0gcC55KVxuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLngsIHRoaXMueSlcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiBge3g9JHt0aGlzLnh9LHk9JHt0aGlzLnl9fWBcbiAgfVxuXG4gIHN0YXRpYyBlbGVtZW50T2Zmc2V0KGVsZW1lbnQsIHBhcmVudCkge1xuICAgIHBhcmVudCA9IHBhcmVudCB8fCBlbGVtZW50LnBhcmVudE5vZGVcbiAgICBpZiAocGFyZW50ID09PSBlbGVtZW50KSB7XG4gICAgICByZXR1cm4gbmV3IFBvaW50KDAsIDApO1xuICAgIH0gZWxzZSBpZiAocGFyZW50ID09PSBlbGVtZW50Lm9mZnNldFBhcmVudCkge1xuICAgICAgcmV0dXJuIG5ldyBQb2ludChcbiAgICAgICAgZWxlbWVudC5vZmZzZXRMZWZ0ICsgcGFyZW50LmNsaWVudExlZnQsXG4gICAgICAgIGVsZW1lbnQub2Zmc2V0VG9wICsgcGFyZW50LmNsaWVudFRvcFxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjb25zaWRlck9mZnNldEVsZW1lbnRzID0gW2VsZW1lbnQsIGdldFBhcmVudHNDaGFpbihlbGVtZW50LCBwYXJlbnQpLnBvcCgpXVxuICAgICAgcmV0dXJuIG5ldyBQb2ludChcbiAgICAgICAgY29uc2lkZXJPZmZzZXRFbGVtZW50cy5yZWR1Y2UoKHN1bSwgcCkgPT4gc3VtICsgcC5vZmZzZXRMZWZ0LCAwKSArIHBhcmVudC5jbGllbnRMZWZ0LFxuICAgICAgICBjb25zaWRlck9mZnNldEVsZW1lbnRzLnJlZHVjZSgoc3VtLCBwKSA9PiBzdW0gKyBwLm9mZnNldFRvcCwgMCkgKyBwYXJlbnQuY2xpZW50VG9wXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGVsZW1lbnRCb3VuZGluZ09mZnNldChlbGVtZW50LCBwYXJlbnQpIHtcbiAgICBwYXJlbnQgPSBwYXJlbnQgfHwgZWxlbWVudC5wYXJlbnROb2RlXG4gICAgY29uc3QgZWxlbWVudFJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgY29uc3QgcGFyZW50UmVjdCA9IHBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIHJldHVybiBuZXcgUG9pbnQoXG4gICAgICBlbGVtZW50UmVjdC5sZWZ0IC0gcGFyZW50UmVjdC5sZWZ0LFxuICAgICAgZWxlbWVudFJlY3QudG9wIC0gcGFyZW50UmVjdC50b3BcbiAgICApXG4gIH1cblxuICBzdGF0aWMgZWxlbWVudFNpemUoZWxlbWVudCkge1xuICAgIGNvbnN0IGVsZW1lbnRSZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIHJldHVybiBuZXcgUG9pbnQoXG4gICAgICBlbGVtZW50UmVjdC53aWR0aCxcbiAgICAgIGVsZW1lbnRSZWN0LmhlaWdodFxuICAgIClcbiAgfVxufVxuIiwiaW1wb3J0IFBvaW50IGZyb20gJy4vcG9pbnQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY3RhbmdsZSB7XG4gIGNvbnN0cnVjdG9yKHBvc2l0aW9uLCBzaXplKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgdGhpcy5zaXplID0gc2l6ZVxuICB9XG5cbiAgZ2V0UDEoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25cbiAgfVxuXG4gIGdldFAyKCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHRoaXMucG9zaXRpb24ueSlcbiAgfVxuXG4gIGdldFAzKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLnNpemUpXG4gIH1cblxuICBnZXRQNCgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnkpXG4gIH1cblxuICBnZXRDZW50ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb24uYWRkKHRoaXMuc2l6ZS5tdWx0KDAuNSkpXG4gIH1cblxuICBvcihyZWN0KSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBuZXcgUG9pbnQoTWF0aC5taW4odGhpcy5wb3NpdGlvbi54LCByZWN0LnBvc2l0aW9uLngpLCBNYXRoLm1pbih0aGlzLnBvc2l0aW9uLnksIHJlY3QucG9zaXRpb24ueSkpXG4gICAgY29uc3Qgc2l6ZSA9IChuZXcgUG9pbnQoTWF0aC5tYXgodGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHJlY3QucG9zaXRpb24ueCArIHJlY3Quc2l6ZS54KSwgTWF0aC5tYXgodGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnksIHJlY3QucG9zaXRpb24ueSArIHJlY3Quc2l6ZS55KSkpLnN1Yihwb3NpdGlvbilcbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZShwb3NpdGlvbiwgc2l6ZSlcbiAgfVxuXG4gIGFuZChyZWN0KSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBuZXcgUG9pbnQoTWF0aC5tYXgodGhpcy5wb3NpdGlvbi54LCByZWN0LnBvc2l0aW9uLngpLCBNYXRoLm1heCh0aGlzLnBvc2l0aW9uLnksIHJlY3QucG9zaXRpb24ueSkpXG4gICAgY29uc3Qgc2l6ZSA9IChuZXcgUG9pbnQoTWF0aC5taW4odGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHJlY3QucG9zaXRpb24ueCArIHJlY3Quc2l6ZS54KSwgTWF0aC5taW4odGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnksIHJlY3QucG9zaXRpb24ueSArIHJlY3Quc2l6ZS55KSkpLnN1Yihwb3NpdGlvbilcbiAgICBpZiAoc2l6ZS54IDw9IDAgfHwgc2l6ZS55IDw9IDApIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHBvc2l0aW9uLCBzaXplKVxuICB9XG5cbiAgaW5jbHVkZVBvaW50KHApIHtcbiAgICByZXR1cm4gISh0aGlzLnBvc2l0aW9uLnggPiBwLnggfHwgdGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLnggPCBwLnggfHwgdGhpcy5wb3NpdGlvbi55ID4gcC55IHx8IHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55IDwgcC55KVxuICB9XG5cbiAgaW5jbHVkZVJlY3RhbmdsZShyZWN0YW5nbGUpIHtcbiAgICByZXR1cm4gdGhpcy5pbmNsdWRlUG9pbnQocmVjdGFuZ2xlLnBvc2l0aW9uKSAmJiB0aGlzLmluY2x1ZGVQb2ludChyZWN0YW5nbGUuZ2V0UDMoKSlcbiAgfVxuXG4gIG1vdmVUb0JvdW5kKHJlY3QsIGF4aXMpIHtcbiAgICBsZXQgc2VsQXhpcywgY3Jvc3NSZWN0YW5nbGVcbiAgICBpZiAoYXhpcykge1xuICAgICAgc2VsQXhpcyA9IGF4aXNcbiAgICB9IGVsc2Uge1xuICAgICAgY3Jvc3NSZWN0YW5nbGUgPSB0aGlzLmFuZChyZWN0KVxuICAgICAgaWYgKCFjcm9zc1JlY3RhbmdsZSkge1xuICAgICAgICByZXR1cm4gcmVjdFxuICAgICAgfVxuICAgICAgc2VsQXhpcyA9IGNyb3NzUmVjdGFuZ2xlLnNpemUueCA+IGNyb3NzUmVjdGFuZ2xlLnNpemUueSA/ICd5JyA6ICd4J1xuICAgIH1cbiAgICBjb25zdCB0aGlzQ2VudGVyID0gdGhpcy5nZXRDZW50ZXIoKVxuICAgIGNvbnN0IHJlY3RDZW50ZXIgPSByZWN0LmdldENlbnRlcigpXG4gICAgY29uc3Qgc2lnbiA9IHRoaXNDZW50ZXJbc2VsQXhpc10gPiByZWN0Q2VudGVyW3NlbEF4aXNdID8gLTEgOiAxXG4gICAgY29uc3Qgb2Zmc2V0ID0gc2lnbiA+IDAgPyB0aGlzLnBvc2l0aW9uW3NlbEF4aXNdICsgdGhpcy5zaXplW3NlbEF4aXNdIC0gcmVjdC5wb3NpdGlvbltzZWxBeGlzXSA6IHRoaXMucG9zaXRpb25bc2VsQXhpc10gLSAocmVjdC5wb3NpdGlvbltzZWxBeGlzXSArIHJlY3Quc2l6ZVtzZWxBeGlzXSlcbiAgICByZWN0LnBvc2l0aW9uW3NlbEF4aXNdID0gcmVjdC5wb3NpdGlvbltzZWxBeGlzXSArIG9mZnNldFxuICAgIHJldHVybiByZWN0XG4gIH1cblxuICBnZXRTcXVhcmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZS54ICogdGhpcy5zaXplLnlcbiAgfVxuXG4gIHN0eWxlQXBwbHkoZWwpIHtcbiAgICBlbCA9IGVsIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2luZCcpXG4gICAgZWwuc3R5bGUubGVmdCA9IHRoaXMucG9zaXRpb24ueCArICdweCdcbiAgICBlbC5zdHlsZS50b3AgPSB0aGlzLnBvc2l0aW9uLnkgKyAncHgnXG4gICAgZWwuc3R5bGUud2lkdGggPSB0aGlzLnNpemUueCArICdweCdcbiAgICBlbC5zdHlsZS5oZWlnaHQgPSB0aGlzLnNpemUueSArICdweCdcbiAgfVxuXG4gIGdyb3d0aChzaXplKSB7XG4gICAgdGhpcy5zaXplID0gdGhpcy5zaXplLmFkZChzaXplKVxuICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uLmFkZChzaXplLm11bHQoLTAuNSkpXG4gIH1cblxuICBnZXRNaW5TaWRlKCkge1xuICAgIHJldHVybiBNYXRoLm1pbih0aGlzLnNpemUueCwgdGhpcy5zaXplLnkpXG4gIH1cblxuICBzdGF0aWMgZnJvbUVsZW1lbnQoZWxlbWVudCwgcGFyZW50PWVsZW1lbnQucGFyZW50Tm9kZSwgaXNDb25zaWRlclRyYW5zbGF0ZT1mYWxzZSkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gaXNDb25zaWRlclRyYW5zbGF0ZVxuICAgICAgPyBQb2ludC5lbGVtZW50Qm91bmRpbmdPZmZzZXQoZWxlbWVudCwgcGFyZW50KVxuICAgICAgOiBQb2ludC5lbGVtZW50T2Zmc2V0KGVsZW1lbnQsIHBhcmVudClcbiAgICBjb25zdCBzaXplID0gUG9pbnQuZWxlbWVudFNpemUoZWxlbWVudClcbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZShwb3NpdGlvbiwgc2l6ZSlcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKG9wdGlvbnMgPSB7fSkge1xuICAgIHRoaXMuZXZlbnRzID0ge31cblxuICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMub24pIHtcbiAgICAgIGZvciAoY29uc3QgW2V2ZW50TmFtZSwgZm5dIG9mIE9iamVjdC5lbnRyaWVzKG9wdGlvbnMub24pKSB7XG4gICAgICAgIHRoaXMub24oZXZlbnROYW1lLCBmbilcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBlbWl0KGV2ZW50TmFtZSwgLi4uYXJncykge1xuICAgIHRoaXMuaW50ZXJydXB0ZWQgPSBmYWxzZVxuXG4gICAgaWYgKCF0aGlzLmV2ZW50c1tldmVudE5hbWVdKSByZXR1cm5cblxuICAgIC8vIEl0ZXJhdGUgb3ZlciBhIGNvcHkgc28gbGlzdGVuZXJzIGNhbiB1bnN1YnNjcmliZSB3aGlsZSB0aGUgZXZlbnQgaXMgYmVpbmcgZW1pdHRlZFxuICAgIGZvciAoY29uc3QgZnVuYyBvZiB0aGlzLmV2ZW50c1tldmVudE5hbWVdLnNsaWNlKCkpIHtcbiAgICAgIGZ1bmMoLi4uYXJncylcbiAgICAgIGlmICh0aGlzLmludGVycnVwdGVkKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGludGVycnVwdCgpIHtcbiAgICB0aGlzLmludGVycnVwdGVkID0gdHJ1ZVxuICB9XG5cbiAgb24oZXZlbnROYW1lLCBmbikge1xuICAgIHRoaXMubGlzdGVuZXJzKGV2ZW50TmFtZSkucHVzaChmbilcbiAgICByZXR1cm4gKCkgPT4gdGhpcy5vZmYoZXZlbnROYW1lLCBmbilcbiAgfVxuXG4gIHByZXBlbmRPbihldmVudE5hbWUsIGZuKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMoZXZlbnROYW1lKS51bnNoaWZ0KGZuKVxuICAgIHJldHVybiAoKSA9PiB0aGlzLm9mZihldmVudE5hbWUsIGZuKVxuICB9XG5cbiAgb25jZShldmVudE5hbWUsIGZuKSB7XG4gICAgY29uc3Qgd3JhcHBlciA9ICguLi5hcmdzKSA9PiB7XG4gICAgICB0aGlzLm9mZihldmVudE5hbWUsIHdyYXBwZXIpXG4gICAgICBmbiguLi5hcmdzKVxuICAgIH1cbiAgICB3cmFwcGVyLmxpc3RlbmVyID0gZm5cbiAgICByZXR1cm4gdGhpcy5vbihldmVudE5hbWUsIHdyYXBwZXIpXG4gIH1cblxuICBvZmYoZXZlbnROYW1lLCBmbikge1xuICAgIGlmICghdGhpcy5ldmVudHNbZXZlbnROYW1lXSkgcmV0dXJuXG5cbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0uZmluZEluZGV4KChsaXN0ZW5lcikgPT4gbGlzdGVuZXIgPT09IGZuIHx8IGxpc3RlbmVyLmxpc3RlbmVyID09PSBmbilcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLnNwbGljZShpbmRleCwgMSlcbiAgICB9XG4gIH1cblxuICB1bnN1YnNjcmliZShldmVudE5hbWUsIGZuKSB7XG4gICAgdGhpcy5vZmYoZXZlbnROYW1lLCBmbilcbiAgfVxuXG4gIGxpc3RlbmVycyhldmVudE5hbWUpIHtcbiAgICByZXR1cm4gKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gfHw9IFtdKVxuICB9XG5cbiAgcmVzZXRFbWl0dGVyICgpIHtcbiAgICB0aGlzLmV2ZW50cyA9IHt9XG4gIH1cblxuICByZXNldE9uKGV2ZW50TmFtZSkge1xuICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSBbXVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhcnJheSwgdmFsKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoYXJyYXlbaV0gPT09IHZhbCkge1xuICAgICAgYXJyYXkuc3BsaWNlKGksIDEpXG4gICAgICBpLS1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycmF5XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByYW5nZShzdGFydCwgc3RvcCwgc3RlcCkge1xuICBjb25zdCByZXN1bHQgPSBbXVxuICBpZiAodHlwZW9mIHN0b3AgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgc3RvcCA9IHN0YXJ0XG4gICAgc3RhcnQgPSAwXG4gIH1cbiAgaWYgKHR5cGVvZiBzdGVwID09PSAndW5kZWZpbmVkJykge1xuICAgIHN0ZXAgPSAxXG4gIH1cbiAgaWYgKChzdGVwID4gMCAmJiBzdGFydCA+PSBzdG9wKSB8fCAoc3RlcCA8IDAgJiYgc3RhcnQgPD0gc3RvcCkpIHtcbiAgICByZXR1cm4gW11cbiAgfVxuICBmb3IgKGxldCBpID0gc3RhcnQ7IHN0ZXAgPiAwID8gaSA8IHN0b3AgOiBpID4gc3RvcDsgaSArPSBzdGVwKSB7XG4gICAgcmVzdWx0LnB1c2goaSlcbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwYXRjaERvbUV2ZW50KGVsZW1lbnQsIGV2ZW50TmFtZSwgZGV0YWlsKSB7XG4gIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoZXZlbnROYW1lLCB7IGJ1YmJsZXM6IHRydWUsIGRldGFpbCB9KSlcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBnZXREaXN0YW5jZShwMSwgcDIpIHtcbiAgY29uc3QgZHggPSBwMS54IC0gcDIueCwgZHkgPSBwMS55IC0gcDIueVxuICByZXR1cm4gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0WERpZmZlcmVuY2UocDEsIHAyKSB7XG4gIHJldHVybiBNYXRoLmFicyhwMS54IC0gcDIueClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFlEaWZmZXJlbmNlKHAxLCBwMikge1xuICByZXR1cm4gTWF0aC5hYnMocDEueSAtIHAyLnkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5KG9wdGlvbnMpIHtcbiAgcmV0dXJuIChwMSwgcDIpID0+IHtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KFxuICAgICAgTWF0aC5wb3cob3B0aW9ucy54ICogTWF0aC5hYnMocDEueCAtIHAyLngpLCAyKSArXG4gICAgICBNYXRoLnBvdyhvcHRpb25zLnkgKiBNYXRoLmFicyhwMS55IC0gcDIueSksIDIpXG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmRleE9mTmVhcmVzdFBvaW50KGFyciwgdmFsLCByYWRpdXMsIGdldERpc3RhbmNlRnVuYz1nZXREaXN0YW5jZSkge1xuICBsZXQgc2l6ZSwgaW5kZXggPSAwLCBpLCB0ZW1wXG4gIGlmIChhcnIubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIC0xXG4gIH1cbiAgc2l6ZSA9IGdldERpc3RhbmNlRnVuYyhhcnJbMF0sIHZhbClcbiAgZm9yIChpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgIHRlbXAgPSBnZXREaXN0YW5jZUZ1bmMoYXJyW2ldLCB2YWwpXG4gICAgaWYgKHRlbXAgPCBzaXplKSB7XG4gICAgICBzaXplID0gdGVtcFxuICAgICAgaW5kZXggPSBpXG4gICAgfVxuICB9XG4gIGlmIChyYWRpdXMgPj0gMCAmJiBzaXplID4gcmFkaXVzKSB7XG4gICAgcmV0dXJuIC0xXG4gIH1cbiAgcmV0dXJuIGluZGV4XG59XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9wb2ludCdcbmltcG9ydCB7IGdldERpc3RhbmNlIH0gZnJvbSAnLi9kaXN0YW5jZXMnXG5cbmV4cG9ydCBmdW5jdGlvbiBjbGFtcChtaW4sIG1heCwgdmFsKSB7XG4gIHJldHVybiBNYXRoLm1heChtaW4sIE1hdGgubWluKG1heCwgdmFsKSlcbn1cblxuLy9SZXR1cm4gY3Jvc3NpbmcgcG9pbnQgb2YgdHdvIGxpbmVzXG5leHBvcnQgZnVuY3Rpb24gZGlyZWN0Q3Jvc3NpbmcoTDFQMSwgTDFQMiwgTDJQMSwgTDJQMikge1xuICBsZXQgdGVtcCwgazEsIGsyLCBiMSwgYjIsIHgsIHlcbiAgaWYgKEwyUDEueCA9PT0gTDJQMi54KSB7XG4gICAgdGVtcCA9IEwyUDFcbiAgICBMMlAxID0gTDFQMVxuICAgIEwxUDEgPSB0ZW1wXG4gICAgdGVtcCA9IEwyUDJcbiAgICBMMlAyID0gTDFQMlxuICAgIEwxUDIgPSB0ZW1wXG4gIH1cbiAgaWYgKEwxUDEueCA9PT0gTDFQMi54KSB7XG4gICAgazIgPSAoTDJQMi55IC0gTDJQMS55KSAvIChMMlAyLnggLSBMMlAxLngpXG4gICAgYjIgPSAoTDJQMi54ICogTDJQMS55IC0gTDJQMS54ICogTDJQMi55KSAvIChMMlAyLnggLSBMMlAxLngpXG4gICAgeCA9IEwxUDEueFxuICAgIHkgPSB4ICogazIgKyBiMlxuICAgIHJldHVybiBuZXcgUG9pbnQoeCwgeSlcbiAgfSBlbHNlIHtcbiAgICBrMSA9IChMMVAyLnkgLSBMMVAxLnkpIC8gKEwxUDIueCAtIEwxUDEueClcbiAgICBiMSA9IChMMVAyLnggKiBMMVAxLnkgLSBMMVAxLnggKiBMMVAyLnkpIC8gKEwxUDIueCAtIEwxUDEueClcbiAgICBrMiA9IChMMlAyLnkgLSBMMlAxLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICBiMiA9IChMMlAyLnggKiBMMlAxLnkgLSBMMlAxLnggKiBMMlAyLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICB4ID0gKGIxIC0gYjIpIC8gKGsyIC0gazEpXG4gICAgeSA9IHggKiBrMSArIGIxXG4gICAgcmV0dXJuIG5ldyBQb2ludCh4LCB5KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZFRvU2VnbWVudChMUDEsIExQMiwgUCkge1xuICBsZXQgeCwgeVxuICB4ID0gY2xhbXAoTWF0aC5taW4oTFAxLngsIExQMi54KSwgTWF0aC5tYXgoTFAxLngsIExQMi54KSwgUC54KVxuICBpZiAoeCAhPT0gUC54KSB7XG4gICAgeSA9ICh4ID09PSBMUDEueCkgPyBMUDEueSA6IExQMi55XG4gICAgUCA9IG5ldyBQb2ludCh4LCB5KVxuICB9XG5cbiAgeSA9IGNsYW1wKE1hdGgubWluKExQMS55LCBMUDIueSksIE1hdGgubWF4KExQMS55LCBMUDIueSksIFAueSlcbiAgaWYgKHkgIT09IFAueSkge1xuICAgIHggPSAoeSA9PT0gTFAxLnkpID8gTFAxLnggOiBMUDIueFxuICAgIFAgPSBuZXcgUG9pbnQoeCwgeSlcbiAgfVxuXG4gIHJldHVybiBQXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZFRvTGluZShBLCBCLCBQKSB7XG4gIGNvbnN0IEFQID0gbmV3IFBvaW50KFAueCAtIEEueCwgUC55IC0gQS55KSxcbiAgICBBQiA9IG5ldyBQb2ludChCLnggLSBBLngsIEIueSAtIEEueSksXG4gICAgYWIyID0gQUIueCAqIEFCLnggKyBBQi55ICogQUIueSxcbiAgICBhcF9hYiA9IEFQLnggKiBBQi54ICsgQVAueSAqIEFCLnksXG4gICAgdCA9IGFwX2FiIC8gYWIyXG4gIHJldHVybiBuZXcgUG9pbnQoQS54ICsgQUIueCAqIHQsIEEueSArIEFCLnkgKiB0KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9pbnRPbkxpbmUoTFAxLCBMUDIsIHBlcmNlbnQpIHtcbiAgY29uc3QgZHggPSBMUDIueCAtIExQMS54LCBkeSA9IExQMi55IC0gTFAxLnlcbiAgcmV0dXJuIG5ldyBQb2ludChMUDEueCArIHBlcmNlbnQgKiBkeCwgTFAxLnkgKyBwZXJjZW50ICogZHkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb2ludE9uTGluZUJ5TGVuZ2h0KExQMSwgTFAyLCBsZW5naHQpIHtcbiAgY29uc3QgZHggPSBMUDIueCAtIExQMS54XG4gIGNvbnN0IGR5ID0gTFAyLnkgLSBMUDEueVxuICBjb25zdCBwZXJjZW50ID0gbGVuZ2h0IC8gZ2V0RGlzdGFuY2UoTFAxLCBMUDIpXG4gIHJldHVybiBuZXcgUG9pbnQoTFAxLnggKyBwZXJjZW50ICogZHgsIExQMS55ICsgcGVyY2VudCAqIGR5KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkUG9pbnRUb0JvdW5kUG9pbnRzKGJvdW5kcG9pbnRzLCBwb2ludCwgaXNSaWdodCkge1xuICBjb25zdCByZXN1bHQgPSBib3VuZHBvaW50cy5maWx0ZXIoKGJQb2ludCkgPT4ge1xuICAgIHJldHVybiBiUG9pbnQueSA+IHBvaW50LnkgfHwgKGlzUmlnaHQgPyBiUG9pbnQueCA8IHBvaW50LnggOiBiUG9pbnQueCA+IHBvaW50LngpXG4gIH0pXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHQubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAocG9pbnQueSA8IHJlc3VsdFtpXS55KSB7XG4gICAgICByZXN1bHQuc3BsaWNlKGksIDAsIHBvaW50KVxuICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbiAgfVxuICByZXN1bHQucHVzaChwb2ludClcbiAgcmV0dXJuIHJlc3VsdFxufVxuIiwiaW1wb3J0IFBvaW50IGZyb20gJy4vZ2VvbWV0cnkvcG9pbnQnXG5pbXBvcnQgeyBhZGRQb2ludFRvQm91bmRQb2ludHMgfSBmcm9tICcuL2dlb21ldHJ5L2JvdW5kcydcblxuaW1wb3J0IHtcbiAgaW5kZXhPZk5lYXJlc3RQb2ludCxcbiAgZ2V0RGlzdGFuY2Vcbn0gZnJvbSAnLi9nZW9tZXRyeS9kaXN0YW5jZXMnXG5cbmNsYXNzIEJhc2ljU3RyYXRlZ3kge1xuICBjb25zdHJ1Y3RvcihyZWN0YW5nbGUsIG9wdGlvbnM9e30pIHtcbiAgICB0aGlzLnJlY3RhbmdsZSA9IHJlY3RhbmdsZVxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNcbiAgfVxuXG4gIGdldCBib3VuZFJlY3QgKCkge1xuICAgIHJldHVybiB0eXBlb2YgdGhpcy5yZWN0YW5nbGUgPT09ICdmdW5jdGlvbicgPyB0aGlzLnJlY3RhbmdsZSgpIDogdGhpcy5yZWN0YW5nbGVcbiAgfVxufVxuXG5jbGFzcyBOb3RDcm9zc2luZ1N0cmF0ZWd5IGV4dGVuZHMgQmFzaWNTdHJhdGVneSB7XG4gIHBvc2l0aW9uaW5nIChyZWN0YW5nbGVMaXN0LCBpbmRleGVzT2ZOZXdzKSB7XG4gICAgY29uc3Qgc3RhdGljUmVjdGFuZ2xlSW5kZXhlcyA9IHJlY3RhbmdsZUxpc3QucmVkdWNlKChpbmRleGVzLCBfcmVjdCwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChpbmRleGVzT2ZOZXdzLmluZGV4T2YoaW5kZXgpID09PSAtMSkge1xuICAgICAgICBpbmRleGVzLnB1c2goaW5kZXgpXG4gICAgICB9XG4gICAgICByZXR1cm4gaW5kZXhlc1xuICAgIH0sIFtdKVxuXG4gICAgaW5kZXhlc09mTmV3cy5mb3JFYWNoKChpbmRleCkgPT4ge1xuICAgICAgbGV0IHJlY3QgPSByZWN0YW5nbGVMaXN0W2luZGV4XVxuICAgICAgbGV0IHJlbW92YWJsZSA9IGZhbHNlXG5cbiAgICAgIHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMuZm9yRWFjaCgoaW5kZXhPZlN0YXRpYykgPT4ge1xuICAgICAgICBjb25zdCBzdGF0aWNSZWN0ID0gcmVjdGFuZ2xlTGlzdFtpbmRleE9mU3RhdGljXVxuICAgICAgICByZWN0ID0gc3RhdGljUmVjdC5tb3ZlVG9Cb3VuZChyZWN0KVxuICAgICAgfSlcblxuICAgICAgcmVtb3ZhYmxlID0gc3RhdGljUmVjdGFuZ2xlSW5kZXhlcy5zb21lKChpbmRleE9mU3RhdGljKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YXRpY1JlY3QgPSByZWN0YW5nbGVMaXN0W2luZGV4T2ZTdGF0aWNdXG4gICAgICAgIHJldHVybiAgISFzdGF0aWNSZWN0LmFuZChyZWN0KVxuICAgICAgfSkgfHwgcmVjdC5hbmQodGhpcy5ib3VuZFJlY3QpLmdldFNxdWFyZSgpICE9PSByZWN0LmdldFNxdWFyZSgpXG5cbiAgICAgIGlmIChyZW1vdmFibGUpIHtcbiAgICAgICAgcmVjdC5yZW1vdmFibGUgPSB0cnVlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0aWNSZWN0YW5nbGVJbmRleGVzLnB1c2goaW5kZXgpXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcmVjdGFuZ2xlTGlzdFxuICB9XG5cbiAgc29ydGluZyhvZGxEcmFnZ2FibGVzTGlzdCwgbmV3RHJhZ2dhYmxlcywgaW5kZXhPZk5ld3MpIHtcbiAgICBjb25zdCBkcmFnZ2FibGVzID0gb2RsRHJhZ2dhYmxlc0xpc3QuY29uY2F0KG5ld0RyYWdnYWJsZXMpXG4gICAgbmV3RHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGluZGV4T2ZOZXdzLnB1c2goZHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkpXG4gICAgfSlcbiAgICByZXR1cm4gZHJhZ2dhYmxlc1xuICB9XG59XG5cbmNsYXNzIEZsb2F0TGVmdFN0cmF0ZWd5IGV4dGVuZHMgQmFzaWNTdHJhdGVneSB7XG4gIGNvbnN0cnVjdG9yKHJlY3RhbmdsZSwgb3B0aW9ucz17fSkge1xuICAgIHN1cGVyKHJlY3RhbmdsZSwgb3B0aW9ucylcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHJlbW92YWJsZTogdHJ1ZVxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0aGlzLnJhZGl1cyA9IG9wdGlvbnMucmFkaXVzIHx8IDgwXG5cbiAgICB0aGlzLnBhZGRpbmdUb3BMZWZ0ID0gb3B0aW9ucy5wYWRkaW5nVG9wTGVmdCB8fCBuZXcgUG9pbnQoMCwgMClcbiAgICB0aGlzLnBhZGRpbmdCb3R0b21SaWdodCA9IG9wdGlvbnMucGFkZGluZ0JvdHRvbVJpZ2h0IHx8IG5ldyBQb2ludCgwLCAwKVxuICAgIHRoaXMueUdhcEJldHdlZW5EcmFnZ2FibGVzID0gb3B0aW9ucy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgfHwgMFxuXG4gICAgdGhpcy5nZXREaXN0YW5jZSA9IG9wdGlvbnMuZ2V0RGlzdGFuY2UgfHwgZ2V0RGlzdGFuY2VcbiAgICB0aGlzLmdldFBvc2l0aW9uID0gb3B0aW9ucy5nZXRQb3NpdGlvbiB8fCAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnBvc2l0aW9uKVxuICB9XG5cbiAgcG9zaXRpb25pbmcocmVjdGFuZ2xlTGlzdCwgX2luZGV4ZXNPZk5ld3MpIHtcbiAgICBjb25zdCBib3VuZFJlY3QgPSB0aGlzLmJvdW5kUmVjdFxuICAgIGNvbnN0IHJlY3RQMiA9IGJvdW5kUmVjdC5nZXRQMigpXG4gICAgbGV0IGJvdW5kYXJ5UG9pbnRzID0gW2JvdW5kUmVjdC5wb3NpdGlvbl1cblxuICAgIHJlY3RhbmdsZUxpc3QuZm9yRWFjaCgocmVjdCwgcmVjdEluZGV4KSA9PiB7XG4gICAgICBsZXQgcG9zaXRpb24sIGlzVmFsaWQgPSBmYWxzZVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib3VuZGFyeVBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBwb3NpdGlvbiA9IG5ldyBQb2ludChcbiAgICAgICAgICBib3VuZGFyeVBvaW50c1tpXS54ICsgdGhpcy5wYWRkaW5nVG9wTGVmdC54LFxuICAgICAgICAgIGkgPiAwID8gKGJvdW5kYXJ5UG9pbnRzW2kgLSAxXS55ICsgdGhpcy55R2FwQmV0d2VlbkRyYWdnYWJsZXMpIDogKGJvdW5kUmVjdC5wb3NpdGlvbi55ICsgdGhpcy5wYWRkaW5nVG9wTGVmdC55KVxuICAgICAgICApXG5cbiAgICAgICAgaXNWYWxpZCA9IChwb3NpdGlvbi54ICsgcmVjdC5zaXplLnggPCByZWN0UDIueClcblxuICAgICAgICBpZiAoaXNWYWxpZCkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICAgIHBvc2l0aW9uID0gbmV3IFBvaW50KFxuICAgICAgICAgIGJvdW5kUmVjdC5wb3NpdGlvbi54ICsgdGhpcy5wYWRkaW5nVG9wTGVmdC54LFxuICAgICAgICAgIGJvdW5kYXJ5UG9pbnRzW2JvdW5kYXJ5UG9pbnRzLmxlbmd0aCAtIDFdLnkgKyAocmVjdEluZGV4ID4gMCA/IHRoaXMueUdhcEJldHdlZW5EcmFnZ2FibGVzIDogdGhpcy5wYWRkaW5nVG9wTGVmdC55KVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHJlY3QucG9zaXRpb24gPSBwb3NpdGlvblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZW1vdmFibGUgJiYgcmVjdC5nZXRQMygpLnkgPiBib3VuZFJlY3QuZ2V0UDMoKS55KSB7XG4gICAgICAgIHJlY3QucmVtb3ZhYmxlID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBib3VuZGFyeVBvaW50cyA9IGFkZFBvaW50VG9Cb3VuZFBvaW50cyhib3VuZGFyeVBvaW50cywgcmVjdC5nZXRQMygpLmFkZCh0aGlzLnBhZGRpbmdCb3R0b21SaWdodCkpXG4gICAgfSlcbiAgICByZXR1cm4gcmVjdGFuZ2xlTGlzdFxuICB9XG5cbiAgc29ydGluZyhvZGxEcmFnZ2FibGVzTGlzdCwgbmV3RHJhZ2dhYmxlcywgaW5kZXhPZk5ld3MpIHtcbiAgICBjb25zdCBuZXdMaXN0ID0gb2RsRHJhZ2dhYmxlc0xpc3QuY29uY2F0KClcbiAgICBjb25zdCBsaXN0T2xkUG9zaXRpb24gPSBvZGxEcmFnZ2FibGVzTGlzdC5tYXAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLmdldFBvc2l0aW9uKCkpXG4gICAgbmV3RHJhZ2dhYmxlcy5mb3JFYWNoKChuZXdEcmFnZ2FibGUpID0+IHtcbiAgICAgIGxldCBpbmRleCA9IGluZGV4T2ZOZWFyZXN0UG9pbnQobGlzdE9sZFBvc2l0aW9uLCB0aGlzLmdldFBvc2l0aW9uKG5ld0RyYWdnYWJsZSksIHRoaXMucmFkaXVzLCB0aGlzLmdldERpc3RhbmNlKVxuICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICBpbmRleCA9IG5ld0xpc3QubGVuZ3RoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbmRleCA9IG5ld0xpc3QuaW5kZXhPZihvZGxEcmFnZ2FibGVzTGlzdFtpbmRleF0pXG4gICAgICB9XG4gICAgICBuZXdMaXN0LnNwbGljZShpbmRleCwgMCwgbmV3RHJhZ2dhYmxlKVxuICAgIH0pXG4gICAgbmV3RHJhZ2dhYmxlcy5mb3JFYWNoKChuZXdEcmFnZ2FibGUpID0+IHtcbiAgICAgIGluZGV4T2ZOZXdzLnB1c2gobmV3TGlzdC5pbmRleE9mKG5ld0RyYWdnYWJsZSkpXG4gICAgfSlcbiAgICByZXR1cm4gbmV3TGlzdFxuICB9XG59XG5cbmNsYXNzIEZsb2F0UmlnaHRTdHJhdGVneSBleHRlbmRzIEZsb2F0TGVmdFN0cmF0ZWd5IHtcbiAgY29uc3RydWN0b3IocmVjdGFuZ2xlLCBvcHRpb25zPXt9KSB7XG4gICAgc3VwZXIocmVjdGFuZ2xlLCBvcHRpb25zKVxuXG4gICAgdGhpcy5wYWRkaW5nVG9wUmlnaHQgPSBvcHRpb25zLnBhZGRpbmdUb3BSaWdodCB8fCBuZXcgUG9pbnQoNSwgNSlcbiAgICB0aGlzLnBhZGRpbmdCb3R0b21MZWZ0ID0gb3B0aW9ucy5wYWRkaW5nQm90dG9tTGVmdCB8fCBuZXcgUG9pbnQoMCwgMClcbiAgICB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyA9IG9wdGlvbnMueUdhcEJldHdlZW5EcmFnZ2FibGVzIHx8IDBcblxuICAgIHRoaXMucGFkZGluZ0JvdHRvbU5lZ0xlZnQgPSBuZXcgUG9pbnQoLXRoaXMucGFkZGluZ0JvdHRvbUxlZnQueCwgdGhpcy5wYWRkaW5nQm90dG9tTGVmdC55KVxuICB9XG5cbiAgcG9zaXRpb25pbmcocmVjdGFuZ2xlTGlzdCwgX2luZGV4ZXNPZk5ld3MpIHtcbiAgICBjb25zdCBib3VuZFJlY3QgPSB0aGlzLmJvdW5kUmVjdFxuICAgIGxldCBib3VuZGFyeVBvaW50cyA9IFtib3VuZFJlY3QuZ2V0UDIoKV1cblxuICAgIHJlY3RhbmdsZUxpc3QuZm9yRWFjaCgocmVjdCwgcmVjdEluZGV4KSA9PiB7XG4gICAgICBsZXQgcG9zaXRpb24sIGlzVmFsaWQgPSBmYWxzZVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib3VuZGFyeVBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBwb3NpdGlvbiA9IG5ldyBQb2ludChcbiAgICAgICAgICBib3VuZGFyeVBvaW50c1tpXS54IC0gcmVjdC5zaXplLnggLSB0aGlzLnBhZGRpbmdUb3BSaWdodC54LFxuICAgICAgICAgIGkgPiAwID8gKGJvdW5kYXJ5UG9pbnRzW2kgLSAxXS55ICsgdGhpcy55R2FwQmV0d2VlbkRyYWdnYWJsZXMpIDogKGJvdW5kUmVjdC5wb3NpdGlvbi55ICsgdGhpcy5wYWRkaW5nVG9wUmlnaHQueSlcbiAgICAgICAgKVxuXG4gICAgICAgIGlzVmFsaWQgPSAocG9zaXRpb24ueCA+IHJlY3QucG9zaXRpb24ueClcbiAgICAgICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgcG9zaXRpb24gPSBuZXcgUG9pbnQoXG4gICAgICAgICAgYm91bmRSZWN0LmdldFAyKCkueCAgLSByZWN0LnNpemUueCAtIHRoaXMucGFkZGluZ1RvcFJpZ2h0LngsXG4gICAgICAgICAgYm91bmRhcnlQb2ludHNbYm91bmRhcnlQb2ludHMubGVuZ3RoIC0gMV0ueSArIChyZWN0SW5kZXggPiAwID8gdGhpcy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgOiB0aGlzLnBhZGRpbmdUb3BSaWdodC55KVxuICAgICAgICApXG4gICAgICB9XG4gICAgICByZWN0LnBvc2l0aW9uID0gcG9zaXRpb25cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucmVtb3ZhYmxlICYmIHJlY3QuZ2V0UDQoKS55ID4gYm91bmRSZWN0LmdldFA0KCkueSkge1xuICAgICAgICByZWN0LnJlbW92YWJsZSA9IHRydWVcbiAgICAgIH1cbiAgICAgIGJvdW5kYXJ5UG9pbnRzID0gYWRkUG9pbnRUb0JvdW5kUG9pbnRzKGJvdW5kYXJ5UG9pbnRzLCByZWN0LmdldFA0KCkuYWRkKHRoaXMucGFkZGluZ0JvdHRvbU5lZ0xlZnQpLCB0cnVlKVxuICAgIH0pXG4gICAgcmV0dXJuIHJlY3RhbmdsZUxpc3RcbiAgfVxufVxuXG5leHBvcnQgeyBOb3RDcm9zc2luZ1N0cmF0ZWd5LCBGbG9hdExlZnRTdHJhdGVneSwgRmxvYXRSaWdodFN0cmF0ZWd5IH1cbiIsImltcG9ydCBQb2ludCBmcm9tICcuL3BvaW50J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QW5nbGVEaWZmKGFscGhhLCBiZXRhKSB7XG4gIGNvbnN0IG1pbkFuZ2xlID0gTWF0aC5taW4oYWxwaGEsIGJldGEpXG4gIGNvbnN0IG1heEFuZ2xlID0gIE1hdGgubWF4KGFscGhhLCBiZXRhKVxuICByZXR1cm4gTWF0aC5taW4obWF4QW5nbGUgLSBtaW5BbmdsZSwgbWluQW5nbGUgKyBNYXRoLlBJKjIgLSBtYXhBbmdsZSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFuZ2xlKHAxLCBwMikge1xuICBjb25zdCBkaWZmID0gcDIuc3ViKHAxKVxuICByZXR1cm4gbm9ybWFsaXplQW5nbGUoTWF0aC5hdGFuMihkaWZmLnksIGRpZmYueCkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b1JhZGlhbihhbmdsZSkge1xuICByZXR1cm4gKChhbmdsZSAlIDM2MCkgKiBNYXRoLlBJIC8gMTgwKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9EZWdyZWUoYW5nbGUpIHtcbiAgcmV0dXJuIChhbmdsZSAqIDE4MCAvIE1hdGguUEkpICUgMzYwXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZEFuZ2xlKG1pbiwgbWF4LCB2YWwpIHtcbiAgbGV0IGRtaW4sIGRtYXhcbiAgaWYgKG1pbiA8IG1heCAmJiB2YWwgPiBtaW4gJiYgdmFsIDwgbWF4KSB7XG4gICAgcmV0dXJuIHZhbFxuICB9IGVsc2UgaWYgKG1heCA8IG1pbiAmJiAodmFsIDwgbWF4IHx8IHZhbCA+IG1pbikpIHtcbiAgICByZXR1cm4gdmFsXG4gIH0gZWxzZSB7XG4gICAgZG1pbiA9IGdldEFuZ2xlRGlmZihtaW4sIHZhbClcbiAgICBkbWF4ID0gZ2V0QW5nbGVEaWZmKG1heCwgdmFsKVxuICAgIGlmIChkbWluIDwgZG1heCkge1xuICAgICAgcmV0dXJuIG1pblxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbWF4XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROZWFyZXN0QW5nbGUoYXJyLCBhbmdsZSkge1xuICBsZXQgaSwgdGVtcCwgZGlmZiA9IE1hdGguUEkgKiAyLCB2YWx1ZVxuICBmb3IgKGkgPSAwOyBpIDwgYXJyLmxlbmd0aDtpKyspIHtcbiAgICB0ZW1wID0gZ2V0QW5nbGVEaWZmKGFycltpXSwgYW5nbGUpXG4gICAgaWYgKGRpZmYgPCB0ZW1wKSB7XG4gICAgICBkaWZmID0gdGVtcFxuICAgICAgdmFsdWUgPSBhcnJbaV1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHZhbHVlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVBbmdsZSh2YWwpIHtcbiAgd2hpbGUgKHZhbCA8IDApIHtcbiAgICB2YWwgKz0gMiAqIE1hdGguUElcbiAgfVxuICB3aGlsZSAodmFsID4gMiAqIE1hdGguUEkpIHtcbiAgICB2YWwgLT0gMiAqIE1hdGguUElcbiAgfVxuICByZXR1cm4gdmFsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oYW5nbGUsIGxlbmd0aCwgY2VudGVyKSB7XG4gIGNlbnRlciA9IGNlbnRlciB8fCBuZXcgUG9pbnQoMCwgMClcbiAgcmV0dXJuIGNlbnRlci5hZGQobmV3IFBvaW50KGxlbmd0aCAqIE1hdGguY29zKGFuZ2xlKSwgbGVuZ3RoICogTWF0aC5zaW4oYW5nbGUpKSlcbn1cbiIsImltcG9ydCBQb2ludCBmcm9tICcuL2dlb21ldHJ5L3BvaW50J1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tICcuL2dlb21ldHJ5L3JlY3RhbmdsZSdcbmltcG9ydCB7XG4gIGdldFBvaW50T25MaW5lQnlMZW5naHQsXG4gIGRpcmVjdENyb3NzaW5nLFxuICBib3VuZFRvTGluZVxufSBmcm9tICcuL2dlb21ldHJ5L2JvdW5kcydcblxuaW1wb3J0IHtcbiAgZ2V0QW5nbGUsXG4gIG5vcm1hbGl6ZUFuZ2xlLFxuICBib3VuZEFuZ2xlLFxuICBnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW1cbn0gZnJvbSAnLi9nZW9tZXRyeS9hbmdsZXMnXG5cbmV4cG9ydCBjbGFzcyBCb3VuZCB7XG4gIGNvbnN0cnVjdG9yICgpIHt9XG5cbiAgYm91bmQocG9pbnQsIF9zaXplKSB7XG4gICAgcmV0dXJuIHBvaW50XG4gIH1cblxuICByZWZyZXNoICgpIHt9XG5cbiAgc3RhdGljIGJvdW5kaW5nKCkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IHRoaXMoLi4uYXJndW1lbnRzKVxuICAgIHJldHVybiBpbnN0YW5jZS5ib3VuZC5iaW5kKGluc3RhbmNlKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvUmVjdGFuZ2xlIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3RvcihyZWN0YW5nbGUpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5yZWN0YW5nbGUgPSByZWN0YW5nbGVcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgY2FsY1BvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIGNvbnN0IHJlY3RQMiA9IHRoaXMucmVjdGFuZ2xlLmdldFAzKClcblxuICAgIGlmICh0aGlzLnJlY3RhbmdsZS5wb3NpdGlvbi54ID4gY2FsY1BvaW50LngpIHtcbiAgICAgIChjYWxjUG9pbnQueCA9IHRoaXMucmVjdGFuZ2xlLnBvc2l0aW9uLngpXG4gICAgfVxuICAgIGlmICh0aGlzLnJlY3RhbmdsZS5wb3NpdGlvbi55ID4gY2FsY1BvaW50LnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gdGhpcy5yZWN0YW5nbGUucG9zaXRpb24ueVxuICAgIH1cbiAgICBpZiAocmVjdFAyLnggPCBjYWxjUG9pbnQueCArIHNpemUueCkge1xuICAgICAgY2FsY1BvaW50LnggPSByZWN0UDIueCAtIHNpemUueFxuICAgIH1cbiAgICBpZiAocmVjdFAyLnkgPCBjYWxjUG9pbnQueSArIHNpemUueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSByZWN0UDIueSAtIHNpemUueVxuICAgIH1cblxuICAgIHJldHVybiBjYWxjUG9pbnRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb0VsZW1lbnQgZXh0ZW5kcyBCb3VuZFRvUmVjdGFuZ2xlIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29udGFpbmVyKSB7XG4gICAgc3VwZXIoUmVjdGFuZ2xlLmZyb21FbGVtZW50KGVsZW1lbnQsIGNvbnRhaW5lcikpXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyXG4gIH1cblxuICByZWZyZXNoICgpIHtcbiAgICB0aGlzLnJlY3RhbmdsZSA9IFJlY3RhbmdsZS5mcm9tRWxlbWVudCh0aGlzLmVsZW1lbnQsIHRoaXMuY29udGFpbmVyKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvTGluZVggZXh0ZW5kcyBCb3VuZCB7XG4gIGNvbnN0cnVjdG9yKHgsIHN0YXJ0WSwgZW5kWSkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnggPSB4XG4gICAgdGhpcy5zdGFydFkgPSBzdGFydFlcbiAgICB0aGlzLmVuZFkgPSBlbmRZXG4gIH1cblxuICBib3VuZChwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IGNhbGNQb2ludCA9IHBvaW50LmNsb25lKClcblxuICAgIGNhbGNQb2ludC54ID0gdGhpcy54XG4gICAgaWYgKHRoaXMuc3RhcnRZID4gY2FsY1BvaW50LnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gdGhpcy5zdGFydFlcbiAgICB9XG4gICAgaWYgKHRoaXMuZW5kWSA8IGNhbGNQb2ludC55ICsgc2l6ZS55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHRoaXMuZW5kWSAtIHNpemUueVxuICAgIH1cblxuICAgIHJldHVybiBjYWxjUG9pbnRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb0xpbmVZIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3Rvcih5LCBzdGFydFgsIGVuZFgpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy55ID0geVxuICAgIHRoaXMuc3RhcnRYID0gc3RhcnRYXG4gICAgdGhpcy5lbmRYID0gZW5kWFxuICB9XG5cbiAgYm91bmQocG9pbnQsIHNpemUpIHtcbiAgICBjb25zdCBjYWxjUG9pbnQgPSBwb2ludC5jbG9uZSgpXG4gICAgY2FsY1BvaW50LnkgPSB0aGlzLnlcbiAgICBpZiAodGhpcy5zdGFydFggPiBjYWxjUG9pbnQueCkge1xuICAgICAgY2FsY1BvaW50LnggPSB0aGlzLnN0YXJ0WFxuICAgIH1cbiAgICBpZiAodGhpcy5lbmRYIDwgY2FsY1BvaW50LnggKyBzaXplLngpIHtcbiAgICAgIGNhbGNQb2ludC54ID0gdGhpcy5lbmRYIC0gc2l6ZS54XG4gICAgfVxuICAgIHJldHVybiBjYWxjUG9pbnRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb0xpbmUgZXh0ZW5kcyBCb3VuZCB7XG4gIGNvbnN0cnVjdG9yKHN0YXJ0UG9pbnQsIGVuZFBvaW50KSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuc3RhcnRQb2ludCA9IHN0YXJ0UG9pbnRcbiAgICB0aGlzLmVuZFBvaW50ID0gZW5kUG9pbnRcbiAgICBjb25zdCBhbHBoYSA9IE1hdGguYXRhbjIoZW5kUG9pbnQueSAtIHN0YXJ0UG9pbnQueSwgZW5kUG9pbnQueCAtIHN0YXJ0UG9pbnQueClcbiAgICBjb25zdCBiZXRhID0gYWxwaGEgKyBNYXRoLlBJIC8gMlxuICAgIHRoaXMuc29tZUsgPSAxMFxuICAgIHRoaXMuY29zQmV0YSA9IE1hdGguY29zKGJldGEpXG4gICAgdGhpcy5zaW5CZXRhID0gTWF0aC5zaW4oYmV0YSlcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgcG9pbnQyID0gbmV3IFBvaW50KFxuICAgICAgcG9pbnQueCArIHRoaXMuc29tZUsgKiB0aGlzLmNvc0JldGEsXG4gICAgICBwb2ludC55ICsgdGhpcy5zb21lSyAqIHRoaXMuc2luQmV0YVxuICAgIClcblxuICAgIGNvbnN0IG5ld0VuZFBvaW50ID0gZ2V0UG9pbnRPbkxpbmVCeUxlbmdodCh0aGlzLmVuZFBvaW50LCB0aGlzLnN0YXJ0UG9pbnQsIHNpemUueClcbiAgICBjb25zdCBwb2ludENyb3NzaW5nID0gZGlyZWN0Q3Jvc3NpbmcodGhpcy5zdGFydFBvaW50LCB0aGlzLmVuZFBvaW50LCBwb2ludCwgcG9pbnQyKVxuXG4gICAgcmV0dXJuIGJvdW5kVG9MaW5lKHRoaXMuc3RhcnRQb2ludCwgbmV3RW5kUG9pbnQsIHBvaW50Q3Jvc3NpbmcpXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9DaXJjbGUgZXh0ZW5kcyBCb3VuZCB7XG4gIGNvbnN0cnVjdG9yKGNlbnRlciwgcmFkaXVzKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuY2VudGVyID0gY2VudGVyXG4gICAgdGhpcy5yYWRpdXMgPSByYWRpdXNcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBfc2l6ZSkge1xuICAgIHJldHVybiBnZXRQb2ludE9uTGluZUJ5TGVuZ2h0KHRoaXMuY2VudGVyLCBwb2ludCwgdGhpcy5yYWRpdXMpXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9BcmMgZXh0ZW5kcyBCb3VuZFRvQ2lyY2xlIHtcbiAgY29uc3RydWN0b3IoY2VudGVyLCByYWRpdXMsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlKSB7XG4gICAgc3VwZXIoY2VudGVyLCByYWRpdXMpXG4gICAgdGhpcy5fc3RhcnRBbmdsZSA9IHN0YXJ0QW5nbGVcbiAgICB0aGlzLl9lbmRBbmdsZSA9IGVuZEFuZ2xlXG4gIH1cblxuICBzdGFydEFuZ2xlKCkge1xuICAgIHJldHVybiB0eXBlb2YgdGhpcy5fc3RhcnRBbmdsZSA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMuX3N0YXJ0QW5nbGUoKSA6IHRoaXMuX3N0YXJ0QW5nbGVcbiAgfVxuXG4gIGVuZEFuZ2xlKCkge1xuICAgIHJldHVybiB0eXBlb2YgdGhpcy5fZW5kQW5nbGUgPT09ICdmdW5jdGlvbicgPyB0aGlzLl9lbmRBbmdsZSgpIDogdGhpcy5fZW5kQW5nbGVcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBfc2l6ZSkge1xuICAgIGxldCBhbmdsZSA9IGdldEFuZ2xlKHRoaXMuY2VudGVyLCBwb2ludClcbiAgICBhbmdsZSA9IG5vcm1hbGl6ZUFuZ2xlKGFuZ2xlKVxuICAgIGFuZ2xlID0gYm91bmRBbmdsZSh0aGlzLnN0YXJ0QW5nbGUoKSwgdGhpcy5lbmRBbmdsZSgpLCBhbmdsZSlcbiAgICByZXR1cm4gZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKGFuZ2xlLCB0aGlzLnJhZGl1cywgdGhpcy5jZW50ZXIpXG4gIH1cbn1cbiIsImltcG9ydCByYW5nZSBmcm9tICcuL3V0aWxzL3JhbmdlLmpzJ1xuaW1wb3J0IHJlbW92ZUl0ZW0gZnJvbSAnLi91dGlscy9yZW1vdmUtYXJyYXktaXRlbSdcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudEVtaXR0ZXInXG5pbXBvcnQgZGlzcGF0Y2hEb21FdmVudCBmcm9tICcuL3V0aWxzL2Rpc3BhdGNoLWRvbS1ldmVudCdcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSAnLi9nZW9tZXRyeS9yZWN0YW5nbGUnXG5pbXBvcnQgeyB0cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5IH0gZnJvbSAnLi9nZW9tZXRyeS9kaXN0YW5jZXMnXG5pbXBvcnQgeyBzY29wZXMsIGRlZmF1bHRTY29wZSB9IGZyb20gJy4vc2NvcGUnXG5cbmltcG9ydCB7IEZsb2F0TGVmdFN0cmF0ZWd5IH0gZnJvbSAnLi9wb3NpdGlvbmluZydcbmltcG9ydCB7IEJvdW5kVG9FbGVtZW50IH0gZnJvbSAnLi9ib3VuZGluZydcblxuY29uc3QgYWRkVG9EZWZhdWx0U2NvcGUgPSBmdW5jdGlvbih0YXJnZXQpIHtcbiAgZGVmYXVsdFNjb3BlLmFkZFRhcmdldCh0YXJnZXQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhcmdldCBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGRyYWdnYWJsZXMsIG9wdGlvbnMgPSB7fSkge1xuICAgIHN1cGVyKG9wdGlvbnMpXG5cbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHRpbWVFbmQ6IDIwMCxcbiAgICAgIHRpbWVFeGNhbmdlOiA0MDBcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGhpcy5wb3NpdGlvbmluZ1N0cmF0ZWd5ID0gb3B0aW9ucy5zdHJhdGVneSB8fCBuZXcgRmxvYXRMZWZ0U3RyYXRlZ3koXG4gICAgICB0aGlzLmdldFJlY3RhbmdsZS5iaW5kKHRoaXMpLFxuICAgICAge1xuICAgICAgICByYWRpdXM6IDgwLFxuICAgICAgICBnZXREaXN0YW5jZTogdHJhbnNmb3JtZWRTcGFjZURpc3RhbmNlRmFjdG9yeSh7IHg6IDEsIHk6IDQgfSksXG4gICAgICAgIHJlbW92YWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIClcblxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgICB0aGlzLmRyYWdnYWJsZXMgPSBbXVxuICAgIHRoaXMudW5zdWJzY3JpYmVzID0gW11cbiAgICBkcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gdGhpcy53YXRjaERyYWdnYWJsZShkcmFnZ2FibGUpKVxuXG4gICAgVGFyZ2V0LmVtaXR0ZXIuZW1pdCgndGFyZ2V0OmNyZWF0ZScsIHRoaXMpXG5cbiAgICB0aGlzLnN0YXJ0Qm91bmRpbmcoKVxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBzdGFydEJvdW5kaW5nKCkge1xuICAgIHRoaXMuYm91bmQgPSB0aGlzLm9wdGlvbnMuYm91bmQgfHwgQm91bmRUb0VsZW1lbnQuYm91bmRpbmcodGhpcy5lbGVtZW50KVxuICB9XG5cbiAgcG9zaXRpb25pbmcgKGRyYWdnYWJsZXMsIGluZGV4ZXNPZk5ldykge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uaW5nU3RyYXRlZ3kucG9zaXRpb25pbmcoZHJhZ2dhYmxlcywgaW5kZXhlc09mTmV3KVxuICB9XG5cbiAgc29ydGluZyAob2xkRHJhZ2dhYmxlcywgbmV3RHJhZ2dhYmxlcywgaW5kZXhPZk5ld3MpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbmluZ1N0cmF0ZWd5LnNvcnRpbmcob2xkRHJhZ2dhYmxlcywgbmV3RHJhZ2dhYmxlcywgaW5kZXhPZk5ld3MpXG4gIH1cblxuICBpbml0KCkge1xuICAgIGxldCByZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXdcblxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzID0gdGhpcy5kcmFnZ2FibGVzLmZpbHRlcigoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBsZXQgZWxlbWVudCA9IGRyYWdnYWJsZS5lbGVtZW50LnBhcmVudE5vZGVcbiAgICAgIHdoaWxlIChlbGVtZW50KSB7XG4gICAgICAgIGlmIChlbGVtZW50ID09PSB0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGVcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH0pXG5cbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMubGVuZ3RoKSB7XG4gICAgICBpbmRleGVzT2ZOZXcgPSByYW5nZSh0aGlzLmlubmVyRHJhZ2dhYmxlcy5sZW5ndGgpXG4gICAgICByZWN0YW5nbGVzID0gdGhpcy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgICB9KSwgaW5kZXhlc09mTmV3KVxuICAgICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXcpXG4gICAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHRoaXMuZW1pdFRhcmdldEV2ZW50KCdhZGQnLCBkcmFnZ2FibGUpKVxuICAgIH1cbiAgfVxuXG4gIGdldFJlY3RhbmdsZSgpIHtcbiAgICByZXR1cm4gUmVjdGFuZ2xlLmZyb21FbGVtZW50KHRoaXMuZWxlbWVudCwgdGhpcy5jb250YWluZXIsIHRydWUpXG4gIH1cblxuICBjYXRjaERyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmNhdGNoRHJhZ2dhYmxlKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmNhdGNoRHJhZ2dhYmxlKHRoaXMsIGRyYWdnYWJsZSlcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGFyZ2V0UmVjdGFuZ2xlID0gdGhpcy5nZXRSZWN0YW5nbGUoKVxuICAgICAgY29uc3QgZHJhZ2dhYmxlU3F1YXJlID0gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpLmdldFNxdWFyZSgpXG5cbiAgICAgIHJldHVybiBkcmFnZ2FibGVTcXVhcmUgPCB0YXJnZXRSZWN0YW5nbGUuZ2V0U3F1YXJlKClcbiAgICAgICAgICAgICAgJiYgdGFyZ2V0UmVjdGFuZ2xlLmluY2x1ZGVQb2ludChkcmFnZ2FibGUuZ2V0Q2VudGVyKCkpXG4gICAgfVxuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UmVjdGFuZ2xlKCkucG9zaXRpb25cbiAgfVxuXG4gIGdldFNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UmVjdGFuZ2xlKCkuc2l6ZVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlcy5mb3JFYWNoKCh1bnN1YnNjcmliZSkgPT4gdW5zdWJzY3JpYmUoKSlcbiAgICBzY29wZXMuZm9yRWFjaCgoc2NvcGUpID0+IHJlbW92ZUl0ZW0oc2NvcGUudGFyZ2V0cywgdGhpcykpXG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgfSksIFtdKVxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgW10sIDApXG4gIH1cblxuICBvbkVuZChkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBuZXdEcmFnZ2FibGVzSW5kZXggPSBbXVxuXG4gICAgaWYgKHRoaXMuZ2V0UmVjdGFuZ2xlKCkuaW5jbHVkZVBvaW50KGRyYWdnYWJsZS5nZXRDZW50ZXIoKSkpIHtcbiAgICAgIGRyYWdnYWJsZS5wb3NpdGlvbiA9IHRoaXMuYm91bmQoZHJhZ2dhYmxlLnBvc2l0aW9uLCBkcmFnZ2FibGUuZ2V0U2l6ZSgpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICB0aGlzLmVtaXRUYXJnZXRFdmVudCgnYmVmb3JlQWRkJywgZHJhZ2dhYmxlKVxuXG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMgPSB0aGlzLnNvcnRpbmcodGhpcy5pbm5lckRyYWdnYWJsZXMsIFtkcmFnZ2FibGVdLCBuZXdEcmFnZ2FibGVzSW5kZXgpXG4gICAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgbmV3RHJhZ2dhYmxlc0luZGV4KVxuXG4gICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBuZXdEcmFnZ2FibGVzSW5kZXgpXG4gICAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTEpIHtcbiAgICAgIHRoaXMuZW1pdFRhcmdldEV2ZW50KCdhZGQnLCBkcmFnZ2FibGUpXG4gICAgfVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBzZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXcsIHRpbWUpIHtcbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5zbGljZSgwKS5mb3JFYWNoKChkcmFnZ2FibGUsIGkpID0+IHtcbiAgICAgIGNvbnN0IHJlY3QgPSByZWN0YW5nbGVzW2ldLFxuICAgICAgICB0aW1lRW5kID0gdGltZSB8fCB0aW1lID09PSAwID8gdGltZSA6IGluZGV4ZXNPZk5ldy5pbmRleE9mKGkpICE9PSAtMSA/IHRoaXMub3B0aW9ucy50aW1lRW5kIDogdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlXG5cbiAgICAgIGlmIChyZWN0LnJlbW92YWJsZSkge1xuICAgICAgICBkcmFnZ2FibGUubW92ZShkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uLCB0aW1lRW5kLCB0cnVlLCB0cnVlKVxuICAgICAgICByZW1vdmVJdGVtKHRoaXMuaW5uZXJEcmFnZ2FibGVzLCBkcmFnZ2FibGUpXG4gICAgICAgIHRoaXMuZW1pdFRhcmdldEV2ZW50KCdyZW1vdmUnLCBkcmFnZ2FibGUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkcmFnZ2FibGUubW92ZShyZWN0LnBvc2l0aW9uLCB0aW1lRW5kLCB0cnVlLCB0cnVlKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBhZGQoZHJhZ2dhYmxlLCB0aW1lKSB7XG4gICAgY29uc3QgbmV3RHJhZ2dhYmxlc0luZGV4ID0gdGhpcy5pbm5lckRyYWdnYWJsZXMubGVuZ3RoXG5cbiAgICB0aGlzLmVtaXRUYXJnZXRFdmVudCgnYmVmb3JlQWRkJywgZHJhZ2dhYmxlKVxuXG4gICAgdGhpcy53YXRjaERyYWdnYWJsZShkcmFnZ2FibGUpXG4gICAgdGhpcy5wdXNoSW5uZXJEcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICAgIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgfSksIG5ld0RyYWdnYWJsZXNJbmRleCwgZHJhZ2dhYmxlKVxuXG4gICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBbbmV3RHJhZ2dhYmxlc0luZGV4XSwgdGltZSB8fCAwKVxuICAgIGlmICh0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkgIT09IC0xKSB7XG4gICAgICB0aGlzLmVtaXRUYXJnZXRFdmVudCgnYWRkJywgZHJhZ2dhYmxlKVxuICAgIH1cbiAgfVxuXG4gIHB1c2hJbm5lckRyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpPT09LTEpIHtcbiAgICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxuICAgIH1cbiAgfVxuXG4gIHdhdGNoRHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIGlmICh0aGlzLmRyYWdnYWJsZXMuaW5jbHVkZXMoZHJhZ2dhYmxlKSkgcmV0dXJuXG5cbiAgICB0aGlzLmRyYWdnYWJsZXMucHVzaChkcmFnZ2FibGUpXG4gICAgZHJhZ2dhYmxlLnRhcmdldHMucHVzaCh0aGlzKVxuICAgIHRoaXMudW5zdWJzY3JpYmVzLnB1c2goZHJhZ2dhYmxlLm9uKCdkcmFnOm1vdmUnLCAoKSA9PiB0aGlzLnJlbW92ZShkcmFnZ2FibGUpKSlcbiAgfVxuXG4gIHJlbW92ZShkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuaW5uZXJEcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKVxuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnNwbGljZShpbmRleCwgMSlcblxuICAgIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgfSksIFtdKVxuXG4gICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBbXSlcbiAgICB0aGlzLmVtaXRUYXJnZXRFdmVudCgncmVtb3ZlJywgZHJhZ2dhYmxlKVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUubW92ZShkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uLCAwLCB0cnVlLCB0cnVlKVxuICAgICAgdGhpcy5lbWl0VGFyZ2V0RXZlbnQoJ3JlbW92ZScsIGRyYWdnYWJsZSlcbiAgICB9KVxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzID0gW11cbiAgfVxuXG4gIGdldFNvcnRlZERyYWdnYWJsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnNsaWNlKClcbiAgfVxuXG4gIGVtaXRUYXJnZXRFdmVudCh0eXBlLCBkcmFnZ2FibGUpIHtcbiAgICB0aGlzLmVtaXQoYHRhcmdldDoke3R5cGV9YCwgZHJhZ2dhYmxlKVxuXG4gICAgaWYgKHRoaXMuZG9tRXZlbnRzKSB7XG4gICAgICBjb25zdCBkb21UeXBlID0gdHlwZS5yZXBsYWNlKC9bQS1aXS9nLCAobGV0dGVyKSA9PiBgLSR7bGV0dGVyLnRvTG93ZXJDYXNlKCl9YClcbiAgICAgIGRpc3BhdGNoRG9tRXZlbnQodGhpcy5lbGVtZW50LCBgZHJhZ2VlOnRhcmdldC0ke2RvbVR5cGV9YCwgeyB0YXJnZXQ6IHRoaXMsIGRyYWdnYWJsZSB9KVxuICAgIH1cbiAgfVxuXG4gIGdldCBjb250YWluZXIoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9jb250YWluZXIgPSB0aGlzLl9jb250YWluZXIgfHwgdGhpcy5vcHRpb25zLmNvbnRhaW5lciB8fCB0aGlzLm9wdGlvbnMucGFyZW50IHx8IHRoaXMuZWxlbWVudC5vZmZzZXRQYXJlbnQpXG4gIH1cblxuICBnZXQgZG9tRXZlbnRzKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZG9tRXZlbnRzICE9PSBmYWxzZVxuICB9XG59XG5cblRhcmdldC5lbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcigpXG5UYXJnZXQuZW1pdHRlci5vbigndGFyZ2V0OmNyZWF0ZScsIGFkZFRvRGVmYXVsdFNjb3BlKVxuIiwiaW1wb3J0IHJlbW92ZUl0ZW0gZnJvbSAnLi91dGlscy9yZW1vdmUtYXJyYXktaXRlbSdcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudEVtaXR0ZXInXG5pbXBvcnQgRHJhZ2dhYmxlIGZyb20gJy4vZHJhZ2dhYmxlJ1xuaW1wb3J0IFRhcmdldCBmcm9tICcuL3RhcmdldCdcblxuY29uc3Qgc2NvcGVzID0gW11cblxuY2xhc3MgU2NvcGUgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvcihkcmFnZ2FibGVzLCB0YXJnZXRzLCBvcHRpb25zPXt9KSB7XG4gICAgc3VwZXIob3B0aW9ucylcbiAgICBzY29wZXMuZm9yRWFjaCgoc2NvcGUpID0+IHtcbiAgICAgIGlmIChkcmFnZ2FibGVzKSB7XG4gICAgICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICAgICAgcmVtb3ZlSXRlbShzY29wZS5kcmFnZ2FibGVzLCBkcmFnZ2FibGUpXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIGlmICh0YXJnZXRzKSB7XG4gICAgICAgIHRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB7XG4gICAgICAgICAgcmVtb3ZlSXRlbShzY29wZS50YXJnZXRzLCB0YXJnZXQpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZXMgfHwgW11cbiAgICB0aGlzLnRhcmdldHMgPSB0YXJnZXRzIHx8IFtdXG4gICAgc2NvcGVzLnB1c2godGhpcylcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICB0aW1lRW5kOiAob3B0aW9ucy50aW1lRW5kKSB8fCA0MDBcbiAgICB9XG5cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUuZHJhZ0VuZEFjdGlvbiA9ICgpID0+IHRoaXMub25FbmQoZHJhZ2dhYmxlKVxuICAgIH0pXG4gIH1cblxuICBhZGREcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxuICAgIGRyYWdnYWJsZS5kcmFnRW5kQWN0aW9uID0gKCkgPT4gdGhpcy5vbkVuZChkcmFnZ2FibGUpXG4gIH1cblxuICBhZGRUYXJnZXQodGFyZ2V0KSB7XG4gICAgdGhpcy50YXJnZXRzLnB1c2godGFyZ2V0KVxuICB9XG5cbiAgb25FbmQoZHJhZ2dhYmxlKSB7XG4gICAgY29uc3Qgc2hvdFRhcmdldHMgPSB0aGlzLnRhcmdldHMuZmlsdGVyKCh0YXJnZXQpID0+IHtcbiAgICAgIHJldHVybiB0YXJnZXQuZHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkgIT09IC0xXG4gICAgfSkuZmlsdGVyKCh0YXJnZXQpID0+IHtcbiAgICAgIHJldHVybiB0YXJnZXQuY2F0Y2hEcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICAgIH0pLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIHJldHVybiBhLmdldFJlY3RhbmdsZSgpLmdldFNxdWFyZSgpIC0gYi5nZXRSZWN0YW5nbGUoKS5nZXRTcXVhcmUoKVxuICAgIH0pXG5cbiAgICBpZiAoc2hvdFRhcmdldHMubGVuZ3RoKSB7XG4gICAgICBzaG90VGFyZ2V0c1swXS5vbkVuZChkcmFnZ2FibGUpXG4gICAgfSBlbHNlIGlmIChkcmFnZ2FibGUudGFyZ2V0cy5sZW5ndGgpIHtcbiAgICAgIGRyYWdnYWJsZS5waW5Qb3NpdGlvbihkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uLCB0aGlzLm9wdGlvbnMudGltZUVuZClcbiAgICB9XG5cbiAgICB0aGlzLmVtaXQoJ3Njb3BlOmNoYW5nZScpXG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLnRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB0YXJnZXQucmVzZXQoKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnJlZnJlc2goKSlcbiAgICB0aGlzLnRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB0YXJnZXQucmVmcmVzaCgpKVxuICB9XG5cbiAgZ2V0IHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXRzLm1hcCgodGFyZ2V0KSA9PiB7XG4gICAgICByZXR1cm4gdGFyZ2V0LmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4gdGhpcy5kcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSlcbiAgICB9KVxuICB9XG5cbiAgc2V0IHBvc2l0aW9ucyhwb3NpdGlvbnMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gJ3dyb25nIGFycmF5IGxlbmd0aCdcbiAgICBpZiAocG9zaXRpb25zLmxlbmd0aCA9PT0gdGhpcy50YXJnZXRzLmxlbmd0aCkge1xuICAgICAgdGhpcy50YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4gdGFyZ2V0LnJlc2V0KCkpXG5cbiAgICAgIHBvc2l0aW9ucy5mb3JFYWNoKCh0YXJnZXRJbmRleGVzLCBpKSA9PiB7XG4gICAgICAgIHRhcmdldEluZGV4ZXMuZm9yRWFjaCgoaW5kZXgpID0+IHtcbiAgICAgICAgICB0aGlzLnRhcmdldHNbaV0uYWRkKHRoaXMuZHJhZ2dhYmxlc1tpbmRleF0pXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBtZXNzYWdlXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IGRlZmF1bHRTY29wZSA9IG5ldyBTY29wZSgpXG5cbmZ1bmN0aW9uIHNjb3BlKGZuKSB7XG4gIGNvbnN0IGN1cnJlbnRTY29wZSA9IG5ldyBTY29wZSgpXG5cbiAgY29uc3QgYWRkRHJhZ2dhYmxlVG9TY29wZSA9IGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICAgIGN1cnJlbnRTY29wZS5hZGREcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICAgIERyYWdnYWJsZS5lbWl0dGVyLmludGVycnVwdCgpXG4gIH1cblxuICBjb25zdCBhZGRUYXJnZXRUb1Njb3BlID0gZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgY3VycmVudFNjb3BlLmFkZFRhcmdldCh0YXJnZXQpXG4gICAgRHJhZ2dhYmxlLmVtaXR0ZXIuaW50ZXJydXB0KClcbiAgfVxuXG4gIERyYWdnYWJsZS5lbWl0dGVyLnByZXBlbmRPbignZHJhZ2dhYmxlOmNyZWF0ZScsIGFkZERyYWdnYWJsZVRvU2NvcGUpXG4gIFRhcmdldC5lbWl0dGVyLnByZXBlbmRPbigndGFyZ2V0OmNyZWF0ZScsIGFkZFRhcmdldFRvU2NvcGUpXG4gIGZuLmNhbGwoKVxuICBEcmFnZ2FibGUuZW1pdHRlci51bnN1YnNjcmliZSgnZHJhZ2dhYmxlOmNyZWF0ZScsIGFkZERyYWdnYWJsZVRvU2NvcGUpXG4gIFRhcmdldC5lbWl0dGVyLnVuc3Vic2NyaWJlKCd0YXJnZXQ6Y3JlYXRlJywgYWRkVGFyZ2V0VG9TY29wZSlcbiAgcmV0dXJuIGN1cnJlbnRTY29wZVxufVxuXG5leHBvcnQgeyBzY29wZXMsIGRlZmF1bHRTY29wZSwgU2NvcGUsIHNjb3BlIH1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRocm90dGxlKGZ1bmMsIHdhaXQpIHtcbiAgbGV0IGxhc3RUaW1lID0gMFxuXG4gIHJldHVybiBmdW5jdGlvbiBleGVjdXRlZEZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzXG4gICAgY29uc3QgYXJncyA9IGFyZ3VtZW50c1xuXG4gICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKVxuICAgIGlmIChub3cgLSBsYXN0VGltZSA+PSB3YWl0KSB7XG4gICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpXG4gICAgICBsYXN0VGltZSA9IG5vd1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50RW1pdHRlcidcbmltcG9ydCBQb2ludCBmcm9tICcuL2dlb21ldHJ5L3BvaW50J1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tICcuL2dlb21ldHJ5L3JlY3RhbmdsZSdcbmltcG9ydCB7IGRlZmF1bHRTY29wZSB9IGZyb20gJy4vc2NvcGUnXG5pbXBvcnQgdGhyb3R0bGUgZnJvbSAnLi91dGlscy90aHJvdHRsZSdcbmltcG9ydCBnZXRQYXJlbnRzQ2hhaW4gZnJvbSAnLi91dGlscy9nZXQtcGFyZW50cy1jaGFpbidcbmltcG9ydCBkaXNwYXRjaERvbUV2ZW50IGZyb20gJy4vdXRpbHMvZGlzcGF0Y2gtZG9tLWV2ZW50J1xuXG5jb25zdCB0aHJvdHRsZWREcmFnT3ZlciA9IChjYWxsYmFjaywgZHVyYXRpb24pID0+IHtcbiAgY29uc3QgdGhyb3R0bGVkQ2FsbGJhY2sgPSB0aHJvdHRsZSgoZXZlbnQpID0+IGNhbGxiYWNrKGV2ZW50KSwgZHVyYXRpb24pXG4gIHJldHVybiAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhyb3R0bGVkQ2FsbGJhY2soZXZlbnQpXG4gIH1cbn1cblxuY29uc3QgcGFzc2l2ZUZhbHNlID0geyBwYXNzaXZlOiBmYWxzZSB9XG5cbmNvbnN0IGlzVG91Y2ggPSBuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHMgPiAwXG5jb25zdCBtb3VzZUV2ZW50cyA9IHtcbiAgc3RhcnQ6ICdtb3VzZWRvd24nLFxuICBtb3ZlOiAnbW91c2Vtb3ZlJyxcbiAgZW5kOiAnbW91c2V1cCdcbn1cbmNvbnN0IHRvdWNoRXZlbnRzID0ge1xuICBzdGFydDogJ3RvdWNoc3RhcnQnLFxuICBtb3ZlOiAndG91Y2htb3ZlJyxcbiAgZW5kOiAndG91Y2hlbmQnXG59XG5jb25zdCBkcmFnZ2FibGVzID0gW11cbmNvbnN0IHRyYW5zZm9ybVByb3BlcnR5ID0gJ3RyYW5zZm9ybSdcbmNvbnN0IHRyYW5zaXRpb25Qcm9wZXJ0eSA9ICd0cmFuc2l0aW9uJ1xuXG5mdW5jdGlvbiBnZXRUb3VjaEJ5SUQoZWxlbWVudCwgdG91Y2hJZCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnQuY2hhbmdlZFRvdWNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZWxlbWVudC5jaGFuZ2VkVG91Y2hlc1tpXS5pZGVudGlmaWVyID09PSB0b3VjaElkKSB7XG4gICAgICByZXR1cm4gZWxlbWVudC5jaGFuZ2VkVG91Y2hlc1tpXVxuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cblxuZnVuY3Rpb24gcHJldmVudERvdWJsZUluaXQoZHJhZ2dhYmxlKSB7XG4gIGNvbnN0IG1lc3NhZ2UgPSBcImZvciB0aGlzIGVsZW1lbnQgRHJhZ2VlLkRyYWdnYWJsZSBpcyBhbHJlYWR5IGV4aXN0LCBkb24ndCBjcmVhdGUgaXQgdHdpY2UgXCJcbiAgaWYgKGRyYWdnYWJsZXMuc29tZSgoZXhpc3RpbmcpID0+IGRyYWdnYWJsZS5lbGVtZW50ID09PSBleGlzdGluZy5lbGVtZW50KSkge1xuICAgIHRocm93IG1lc3NhZ2VcbiAgfVxuICBkcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxufVxuXG5mdW5jdGlvbiBhZGRUb0RlZmF1bHRTY29wZShkcmFnZ2FibGUpIHtcbiAgZGVmYXVsdFNjb3BlLmFkZERyYWdnYWJsZShkcmFnZ2FibGUpXG59XG5cbmZ1bmN0aW9uIGNvcHlTdHlsZXMoc291cmNlLCBkZXN0aW5hdGlvbikge1xuICBjb25zdCBjcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHNvdXJjZSlcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qga2V5ID0gY3NbaV1cbiAgICBpZiAoKGtleS5pbmRleE9mKCd0cmFuc2l0aW9uJykgPCAwKSAmJiAoa2V5LmluZGV4T2YoJ3RyYW5zZm9ybScpIDwgMCkpIHtcbiAgICAgIGRlc3RpbmF0aW9uLnN0eWxlW2tleV0gPSBjc1trZXldXG4gICAgfVxuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzb3VyY2UuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICBjb3B5U3R5bGVzKHNvdXJjZS5jaGlsZHJlbltpXSwgZGVzdGluYXRpb24uY2hpbGRyZW5baV0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhZ2dhYmxlIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgb3B0aW9ucz17fSkge1xuICAgIHN1cGVyKG9wdGlvbnMpXG4gICAgdGhpcy50YXJnZXRzID0gW11cbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIHByZXZlbnREb3VibGVJbml0KHRoaXMpXG4gICAgRHJhZ2dhYmxlLmVtaXR0ZXIuZW1pdCgnZHJhZ2dhYmxlOmNyZWF0ZScsIHRoaXMpXG4gICAgdGhpcy5fZW5hYmxlID0gdHJ1ZVxuICAgIHRoaXMuc3RhcnRCb3VuZGluZygpXG4gICAgdGhpcy5zdGFydFBvc2l0aW9uaW5nKClcbiAgICB0aGlzLnN0YXJ0TGlzdGVuaW5nKClcbiAgfVxuXG4gIHN0YXJ0Qm91bmRpbmcoKSB7XG4gICAgdGhpcy5ib3VuZGluZyA9IHRoaXMub3B0aW9ucy5ib3VuZGluZyB8fCB7XG4gICAgICBib3VuZDogdGhpcy5vcHRpb25zLmJvdW5kIHx8ICgocG9pbnQpID0+IHBvaW50KVxuICAgIH1cbiAgfVxuXG4gIHN0YXJ0UG9zaXRpb25pbmcoKSB7XG4gICAgdGhpcy5fc2V0RGVmYXVsdFRyYW5zaXRpb24oKVxuICAgIHRoaXMub2Zmc2V0ID0gdGhpcy5pc0NvbnNpZGVyVHJhbnNmb3JtT2Zmc2V0XG4gICAgICA/IFBvaW50LmVsZW1lbnRCb3VuZGluZ09mZnNldCh0aGlzLmVsZW1lbnQsIHRoaXMuY29udGFpbmVyKVxuICAgICAgOiBQb2ludC5lbGVtZW50T2Zmc2V0KHRoaXMuZWxlbWVudCwgdGhpcy5jb250YWluZXIpXG4gICAgdGhpcy5waW5uZWRQb3NpdGlvbiA9IHRoaXMub2Zmc2V0XG4gICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMub2Zmc2V0XG4gICAgdGhpcy5pbml0aWFsUG9zaXRpb24gPSB0aGlzLm9wdGlvbnMucG9zaXRpb24gfHwgdGhpcy5vZmZzZXRcblxuICAgIHRoaXMucGluUG9zaXRpb24odGhpcy5pbml0aWFsUG9zaXRpb24pXG5cbiAgICBpZiAodGhpcy5ib3VuZGluZy5yZWZyZXNoKSB7XG4gICAgICB0aGlzLmJvdW5kaW5nLnJlZnJlc2goKVxuICAgIH1cbiAgfVxuXG4gIHN0YXJ0TGlzdGVuaW5nKCkge1xuICAgIHRoaXMuX2RyYWdTdGFydCA9IChldmVudCkgPT4gdGhpcy5kcmFnU3RhcnQoZXZlbnQpXG4gICAgdGhpcy5fZHJhZ01vdmUgPSAoZXZlbnQpID0+IHRoaXMuZHJhZ01vdmUoZXZlbnQpXG4gICAgdGhpcy5fZHJhZ0VuZCA9IChldmVudCkgPT4gdGhpcy5kcmFnRW5kKGV2ZW50KVxuICAgIHRoaXMuX25hdGl2ZURyYWdTdGFydCA9IChldmVudCkgPT4gdGhpcy5uYXRpdmVEcmFnU3RhcnQoZXZlbnQpXG4gICAgdGhpcy5fbmF0aXZlRHJhZ092ZXIgPSB0aHJvdHRsZWREcmFnT3ZlcigoZXZlbnQpID0+IHRoaXMubmF0aXZlRHJhZ092ZXIoZXZlbnQpLCB0aGlzLmRyYWdPdmVyVGhyb3R0bGVEdXJhdGlvbilcbiAgICB0aGlzLl9uYXRpdmVEcmFnRW5kID0gKGV2ZW50KSA9PiB0aGlzLm5hdGl2ZURyYWdFbmQoZXZlbnQpXG4gICAgdGhpcy5fbmF0aXZlRHJvcCA9IChldmVudCkgPT4gdGhpcy5uYXRpdmVEcm9wKGV2ZW50KVxuICAgIHRoaXMuX3Njcm9sbCA9IChldmVudCkgPT4gdGhpcy5vblNjcm9sbChldmVudClcblxuICAgIHRoaXMuaGFuZGxlci5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQsIHBhc3NpdmVGYWxzZSlcbiAgICB0aGlzLmhhbmRsZXIuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0LCBwYXNzaXZlRmFsc2UpXG4gIH1cblxuICBnZXRTaXplKCkge1xuICAgIHJldHVybiBQb2ludC5lbGVtZW50U2l6ZSh0aGlzLmVsZW1lbnQpXG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5vZmZzZXQuYWRkKHRoaXMuX3RyYW5zZm9ybVBvc2l0aW9uIHx8IG5ldyBQb2ludCgwLCAwKSlcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvblxuICB9XG5cbiAgZ2V0Q2VudGVyKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLmdldFNpemUoKS5tdWx0KDAuNSkpXG4gIH1cblxuICBfc2V0RGVmYXVsdFRyYW5zaXRpb24gKCkge1xuICAgIGlmICghdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV0pIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5lbGVtZW50KVt0cmFuc2l0aW9uUHJvcGVydHldXG4gICAgfVxuICB9XG5cbiAgX3NldFRyYW5zaXRpb24odGltZSkge1xuICAgIGxldCB0cmFuc2l0aW9uID0gdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV1cbiAgICBjb25zdCB0cmFuc2l0aW9uQ3NzID0gYHRyYW5zZm9ybSAke3RpbWV9bXNgXG5cbiAgICBpZiAoIS90cmFuc2Zvcm1cXHM/XFxkKm0/cz8vLnRlc3QodHJhbnNpdGlvbikpIHtcbiAgICAgIGlmICh0cmFuc2l0aW9uKSB7XG4gICAgICAgIHRyYW5zaXRpb24gKz0gYCwgJHt0cmFuc2l0aW9uQ3NzfWBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyYW5zaXRpb24gPSB0cmFuc2l0aW9uQ3NzXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyYW5zaXRpb24gPSB0cmFuc2l0aW9uLnJlcGxhY2UoL3RyYW5zZm9ybVxccz9cXGQqbT9zPy9nLCB0cmFuc2l0aW9uQ3NzKVxuICAgIH1cblxuICAgIGlmICh0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNpdGlvblByb3BlcnR5XSAhPT0gdHJhbnNpdGlvbikge1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV0gPSB0cmFuc2l0aW9uXG4gICAgfVxuICB9XG5cbiAgX3NldFRyYW5zbGF0ZShwb2ludCkge1xuICAgIHRoaXMuX3RyYW5zZm9ybVBvc2l0aW9uID0gcG9pbnRcbiAgICBjb25zdCB0cmFuc2xhdGVDc3MgPSBgdHJhbnNsYXRlM2QoJHtwb2ludC54fXB4LCAke3BvaW50Lnl9cHgsIDBweClgXG5cbiAgICBsZXQgdHJhbnNmb3JtID0gdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BlcnR5XVxuXG4gICAgaWYgKHRoaXMuc2hvdWxkUmVtb3ZlWmVyb1RyYW5zbGF0ZSAmJiBwb2ludC54ID09PSAwICYmIHBvaW50LnkgPT09IDApIHtcbiAgICAgIHRyYW5zZm9ybSA9IHRyYW5zZm9ybS5yZXBsYWNlKC90cmFuc2xhdGUzZFxcKFteKV0rXFwpLywgJycpXG4gICAgfSBlbHNlIGlmICghL3RyYW5zbGF0ZTNkXFwoW14pXStcXCkvLnRlc3QodHJhbnNmb3JtKSkge1xuICAgICAgaWYgKHRyYW5zZm9ybSkge1xuICAgICAgICB0cmFuc2Zvcm0gKz0gJyAnXG4gICAgICB9XG4gICAgICB0cmFuc2Zvcm0gKz0gdHJhbnNsYXRlQ3NzXG4gICAgfSBlbHNlIHtcbiAgICAgIHRyYW5zZm9ybSA9IHRyYW5zZm9ybS5yZXBsYWNlKC90cmFuc2xhdGUzZFxcKFteKV0rXFwpLywgdHJhbnNsYXRlQ3NzKVxuICAgIH1cblxuICAgIGlmICh0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcGVydHldICE9PSB0cmFuc2Zvcm0pIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wZXJ0eV0gPSB0cmFuc2Zvcm1cbiAgICB9XG4gIH1cblxuICBtb3ZlKHBvaW50LCB0aW1lPTAsIGlzU2lsZW50PWZhbHNlKSB7XG4gICAgcG9pbnQgPSBwb2ludC5jbG9uZSgpXG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvaW50XG5cbiAgICB0aGlzLl9zZXRUcmFuc2l0aW9uKHRpbWUpXG4gICAgdGhpcy5fc2V0VHJhbnNsYXRlKHBvaW50LnN1Yih0aGlzLm9mZnNldCkpXG5cbiAgICBpZiAoIWlzU2lsZW50KSB7XG4gICAgICB0aGlzLmVtaXREcmFnRXZlbnQoJ21vdmUnKVxuICAgIH1cbiAgfVxuXG4gIHBpblBvc2l0aW9uKHBvaW50LCB0aW1lPTAsIHNpbGVudD10cnVlKSB7XG4gICAgdGhpcy5waW5uZWRQb3NpdGlvbiA9IHBvaW50LmNsb25lKClcbiAgICB0aGlzLm1vdmUodGhpcy5waW5uZWRQb3NpdGlvbiwgdGltZSwgc2lsZW50KVxuICB9XG5cbiAgcmVzZXRQb3NpdGlvblRvSW5pdGlhbCAoKSB7XG4gICAgdGhpcy5waW5Qb3NpdGlvbih0aGlzLmluaXRpYWxQb3NpdGlvbilcbiAgfVxuXG4gIHJlZnJlc2hQb3NpdGlvbiAoKSB7XG4gICAgdGhpcy5zZXRQb3NpdGlvbih0aGlzLmdldFBvc2l0aW9uKCkpXG4gIH1cblxuICBzZXRQb3NpdGlvbihwb2ludCkge1xuICAgIHBvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIHRoaXMucG9zaXRpb24gPSBwb2ludFxuICAgIHRoaXMuX3NldFRyYW5zaXRpb24oMClcbiAgICB0aGlzLl9zZXRUcmFuc2xhdGUocG9pbnQuc3ViKHRoaXMub2Zmc2V0KSlcbiAgfVxuXG4gIGRldGVybWluZURpcmVjdGlvbihwb2ludCkge1xuICAgIHRoaXMuX3ByZXZpb3VzRGlyZWN0aW9uUG9zaXRpb24gfHw9IHRoaXMuX3N0YXJ0UG9zaXRpb25cblxuICAgIHRoaXMubGVmdERpcmVjdGlvbiA9ICh0aGlzLl9wcmV2aW91c0RpcmVjdGlvblBvc2l0aW9uLnggPiBwb2ludC54KVxuICAgIHRoaXMucmlnaHREaXJlY3Rpb24gPSAodGhpcy5fcHJldmlvdXNEaXJlY3Rpb25Qb3NpdGlvbi54IDwgcG9pbnQueClcbiAgICB0aGlzLnVwRGlyZWN0aW9uID0gKHRoaXMuX3ByZXZpb3VzRGlyZWN0aW9uUG9zaXRpb24ueSA+IHBvaW50LnkpXG4gICAgdGhpcy5kb3duRGlyZWN0aW9uID0gKHRoaXMuX3ByZXZpb3VzRGlyZWN0aW9uUG9zaXRpb24ueSA8IHBvaW50LnkpXG5cbiAgICB0aGlzLl9wcmV2aW91c0RpcmVjdGlvblBvc2l0aW9uID0gcG9pbnRcbiAgfVxuXG4gIHNlZW1zU2Nyb2xsaW5nKCkge1xuICAgIHJldHVybiAoK25ldyBEYXRlKCkgLSB0aGlzLl9zdGFydFRvdWNoVGltZXN0YW1wKSA8IHRoaXMudG91Y2hEcmFnZ2luZ1RocmVzaG9sZFxuICB9XG5cbiAgc2hvdWxkVXNlTmF0aXZlRHJhZ0FuZERyb3AoKSB7XG4gICAgaWYgKHRoaXMuaXNUb3VjaEV2ZW50KSB7XG4gICAgICByZXR1cm4gdGhpcy5uYXRpdmVEcmFnQW5kRHJvcCAmJiB0aGlzLmVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcE9uVG91Y2hcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMubmF0aXZlRHJhZ0FuZERyb3BcbiAgICB9XG4gIH1cblxuICBkcmFnU3RhcnQoZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuX2VuYWJsZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3RvcFByb3BhZ2F0aW9uT25EcmFnU3RhcnQpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgfVxuXG4gICAgdGhpcy5pc1RvdWNoRXZlbnQgPSAoaXNUb3VjaCAmJiAoZXZlbnQgaW5zdGFuY2VvZiB3aW5kb3cuVG91Y2hFdmVudCkpXG5cbiAgICB0aGlzLnRvdWNoUG9pbnQgPSB0aGlzLl9zdGFydFRvdWNoUG9pbnQgPSBuZXcgUG9pbnQoXG4gICAgICB0aGlzLmlzVG91Y2hFdmVudCA/IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYIDogZXZlbnQuY2xpZW50WCxcbiAgICAgIHRoaXMuaXNUb3VjaEV2ZW50ID8gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVkgOiBldmVudC5jbGllbnRZXG4gICAgKVxuXG4gICAgdGhpcy5fc3RhcnRQb3NpdGlvbiA9IHRoaXMuZ2V0UG9zaXRpb24oKVxuICAgIGlmICh0aGlzLmlzVG91Y2hFdmVudCkge1xuICAgICAgdGhpcy5fdG91Y2hJZCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmlkZW50aWZpZXJcbiAgICAgIHRoaXMuX3N0YXJ0VG91Y2hUaW1lc3RhbXAgPSArbmV3IERhdGUoKVxuICAgIH1cblxuICAgIHRoaXMuX3N0YXJ0V2luZG93U2Nyb2xsUG9pbnQgPSB0aGlzLndpbmRvd1Njcm9sbFBvaW50XG4gICAgdGhpcy5fc3RhcnRTY3JvbGxFbGVtZW50c09mZnNldCA9IHRoaXMuc2Nyb2xsRWxlbWVudHNPZmZzZXRcblxuICAgIGlmIChldmVudC50YXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElucHV0RWxlbWVudCB8fFxuICAgICAgICAgIGV2ZW50LnRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSW5wdXRFbGVtZW50KSB7XG4gICAgICBldmVudC50YXJnZXQuZm9jdXMoKVxuICAgIH1cblxuICAgIGlmICh0aGlzLnNob3VsZFVzZU5hdGl2ZURyYWdBbmREcm9wKCkpIHtcbiAgICAgIGlmICh0aGlzLmlzVG91Y2hFdmVudCAmJiB0aGlzLmVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcE9uVG91Y2gpIHtcbiAgICAgICAgdGhpcy5fc3RhcnRQYXJlbnRzU2Nyb2xsT2Zmc2V0ID0gdGhpcy5wYXJlbnRzU2Nyb2xsT2Zmc2V0XG5cbiAgICAgICAgY29uc3QgZW11bGF0ZU9uRmlyc3RNb3ZlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuc2VlbXNTY3JvbGxpbmcoKSkge1xuICAgICAgICAgICAgdGhpcy5jYW5jZWxEcmFnZ2luZygpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wKGV2ZW50KVxuICAgICAgICAgIH1cbiAgICAgICAgICBjYW5jZWxFbXVsYXRpb24oKVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNhbmNlbEVtdWxhdGlvbiA9ICgpID0+IHtcbiAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIGVtdWxhdGVPbkZpcnN0TW92ZSlcbiAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgY2FuY2VsRW11bGF0aW9uKVxuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCBlbXVsYXRlT25GaXJzdE1vdmUsIHBhc3NpdmVGYWxzZSlcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIGNhbmNlbEVtdWxhdGlvbiwgcGFzc2l2ZUZhbHNlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIHRoaXMuX25hdGl2ZURyYWdTdGFydClcbiAgICAgICAgdGhpcy5lbGVtZW50LmRyYWdnYWJsZSA9IHRydWVcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX25hdGl2ZURyYWdFbmQsIHBhc3NpdmVGYWxzZSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSwgcGFzc2l2ZUZhbHNlKVxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSwgcGFzc2l2ZUZhbHNlKVxuXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZCwgcGFzc2l2ZUZhbHNlKVxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQsIHBhc3NpdmVGYWxzZSlcbiAgICB9XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fc2Nyb2xsKVxuICAgIHRoaXMuc2Nyb2xsRWxlbWVudHMuZm9yRWFjaCgocCkgPT4gcC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9zY3JvbGwpKVxuXG4gICAgaWYgKCF0aGlzLnNob3VsZFVzZU5hdGl2ZURyYWdBbmREcm9wKCkgJiYgdGhpcy5kcmFnU3RhcnRUaHJlc2hvbGQgPiAwKSB7XG4gICAgICB0aGlzLl9kcmFnU3RhcnRQZW5kaW5nID0gdHJ1ZVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVtaXREcmFnRXZlbnQoJ3N0YXJ0JylcbiAgICB9XG4gIH1cblxuICBkcmFnTW92ZShldmVudCkge1xuICAgIGxldCB0b3VjaFxuXG4gICAgdGhpcy5pc1RvdWNoRXZlbnQgPSAoaXNUb3VjaCAmJiAoZXZlbnQgaW5zdGFuY2VvZiB3aW5kb3cuVG91Y2hFdmVudCkpXG4gICAgaWYgKHRoaXMuaXNUb3VjaEV2ZW50KSB7XG4gICAgICB0b3VjaCA9IGdldFRvdWNoQnlJRChldmVudCwgdGhpcy5fdG91Y2hJZClcblxuICAgICAgaWYgKCF0b3VjaCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuc2VlbXNTY3JvbGxpbmcoKSkge1xuICAgICAgICB0aGlzLmNhbmNlbERyYWdnaW5nKClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy50b3VjaFBvaW50ID0gbmV3IFBvaW50KFxuICAgICAgdGhpcy5pc1RvdWNoRXZlbnQgPyB0b3VjaC5wYWdlWCA6IGV2ZW50LmNsaWVudFgsXG4gICAgICB0aGlzLmlzVG91Y2hFdmVudCA/IHRvdWNoLnBhZ2VZIDogZXZlbnQuY2xpZW50WVxuICAgIClcblxuICAgIGlmICh0aGlzLl9kcmFnU3RhcnRQZW5kaW5nKSB7XG4gICAgICBjb25zdCBkeCA9IHRoaXMudG91Y2hQb2ludC54IC0gdGhpcy5fc3RhcnRUb3VjaFBvaW50LnhcbiAgICAgIGNvbnN0IGR5ID0gdGhpcy50b3VjaFBvaW50LnkgLSB0aGlzLl9zdGFydFRvdWNoUG9pbnQueVxuICAgICAgaWYgKE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSkgPCB0aGlzLmRyYWdTdGFydFRocmVzaG9sZCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHRoaXMuX2RyYWdTdGFydFBlbmRpbmcgPSBmYWxzZVxuICAgICAgdGhpcy5lbWl0RHJhZ0V2ZW50KCdzdGFydCcpXG4gICAgfVxuXG4gICAgdGhpcy5pc0RyYWdnaW5nID0gdHJ1ZVxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gICAgbGV0IHBvaW50ID0gdGhpcy5fc3RhcnRQb3NpdGlvbi5hZGQodGhpcy50b3VjaFBvaW50LnN1Yih0aGlzLl9zdGFydFRvdWNoUG9pbnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMud2luZG93U2Nyb2xsUG9pbnQuc3ViKHRoaXMuX3N0YXJ0V2luZG93U2Nyb2xsUG9pbnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMuc2Nyb2xsRWxlbWVudHNPZmZzZXQuc3ViKHRoaXMuX3N0YXJ0U2Nyb2xsRWxlbWVudHNPZmZzZXQpKVxuXG4gICAgcG9pbnQgPSB0aGlzLmJvdW5kaW5nLmJvdW5kKHBvaW50LCB0aGlzLmdldFNpemUoKSlcbiAgICB0aGlzLmRldGVybWluZURpcmVjdGlvbihwb2ludClcbiAgICB0aGlzLm1vdmUocG9pbnQpXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RyYWdlZS1hY3RpdmUnKVxuICB9XG5cbiAgZHJhZ0VuZChldmVudCkge1xuICAgIHRoaXMuaXNUb3VjaEV2ZW50ID0gKGlzVG91Y2ggJiYgKGV2ZW50IGluc3RhbmNlb2Ygd2luZG93LlRvdWNoRXZlbnQpKVxuXG4gICAgaWYgKHRoaXMuaXNUb3VjaEV2ZW50ICYmICFnZXRUb3VjaEJ5SUQoZXZlbnQsIHRoaXMuX3RvdWNoSWQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5fZHJhZ1N0YXJ0UGVuZGluZykge1xuICAgICAgLy8gdGhyZXNob2xkIG5ldmVyIGNyb3NzZWQg4oCUIHRyZWF0IGFzIGNsaWNrLCBjbGVhbiB1cCBzaWxlbnRseVxuICAgICAgdGhpcy5fZHJhZ1N0YXJ0UGVuZGluZyA9IGZhbHNlXG4gICAgICB0aGlzLmNhbmNlbERyYWdnaW5nKClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLmlzRHJhZ2dpbmcpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfVxuXG4gICAgdGhpcy5kcmFnRW5kQWN0aW9uKClcbiAgICB0aGlzLmVtaXREcmFnRXZlbnQoJ2VuZCcpXG4gICAgdGhpcy5jYW5jZWxEcmFnZ2luZygpXG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZWUtYWN0aXZlJykpXG4gIH1cblxuICBvblNjcm9sbChfZXZlbnQpIHtcbiAgICBsZXQgcG9pbnQgPSB0aGlzLl9zdGFydFBvc2l0aW9uLmFkZCh0aGlzLnRvdWNoUG9pbnQuc3ViKHRoaXMuX3N0YXJ0VG91Y2hQb2ludCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy53aW5kb3dTY3JvbGxQb2ludC5zdWIodGhpcy5fc3RhcnRXaW5kb3dTY3JvbGxQb2ludCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy5zY3JvbGxFbGVtZW50c09mZnNldC5zdWIodGhpcy5fc3RhcnRTY3JvbGxFbGVtZW50c09mZnNldCkpXG5cbiAgICBwb2ludCA9IHRoaXMuYm91bmRpbmcuYm91bmQocG9pbnQsIHRoaXMuZ2V0U2l6ZSgpKVxuICAgIGlmICghdGhpcy5uYXRpdmVEcmFnQW5kRHJvcCkge1xuICAgICAgdGhpcy5kZXRlcm1pbmVEaXJlY3Rpb24ocG9pbnQpXG4gICAgICB0aGlzLm1vdmUocG9pbnQpXG4gICAgfVxuICB9XG5cbiAgbmF0aXZlRHJhZ1N0YXJ0KGV2ZW50KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dCcsICdGaXJlRm94IGZpeCcpXG4gICAgZXZlbnQuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSAnbW92ZSdcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIHRoaXMuX25hdGl2ZURyYWdPdmVyKVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzLl9uYXRpdmVEcm9wKVxuICB9XG5cbiAgbmF0aXZlRHJhZ092ZXIoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZXZlbnQuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnbW92ZSdcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZHJhZ2VlLXBsYWNlaG9sZGVyJylcbiAgICBpZiAoZXZlbnQuY2xpZW50WCA9PT0gMCAmJiBldmVudC5jbGllbnRZID09PSAwKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLnRvdWNoUG9pbnQgPSBuZXcgUG9pbnQoZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSlcbiAgICBsZXQgcG9pbnQgPSB0aGlzLl9zdGFydFBvc2l0aW9uLmFkZCh0aGlzLnRvdWNoUG9pbnQuc3ViKHRoaXMuX3N0YXJ0VG91Y2hQb2ludCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy53aW5kb3dTY3JvbGxQb2ludC5zdWIodGhpcy5fc3RhcnRXaW5kb3dTY3JvbGxQb2ludCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy5zY3JvbGxFbGVtZW50c09mZnNldC5zdWIodGhpcy5fc3RhcnRTY3JvbGxFbGVtZW50c09mZnNldCkpXG4gICAgcG9pbnQgPSB0aGlzLmJvdW5kaW5nLmJvdW5kKHBvaW50LCB0aGlzLmdldFNpemUoKSlcbiAgICB0aGlzLmRldGVybWluZURpcmVjdGlvbihwb2ludClcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9pbnRcbiAgICB0aGlzLmVtaXREcmFnRXZlbnQoJ21vdmUnKVxuICB9XG5cbiAgbmF0aXZlRHJhZ0VuZChfZXZlbnQpIHtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2VlLXBsYWNlaG9sZGVyJylcbiAgICB0aGlzLmRyYWdFbmRBY3Rpb24oKVxuICAgIHRoaXMuZW1pdERyYWdFdmVudCgnZW5kJylcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIHRoaXMuX25hdGl2ZURyYWdPdmVyKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzLl9uYXRpdmVEcm9wKVxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9zY3JvbGwpXG4gICAgdGhpcy5zY3JvbGxFbGVtZW50cy5mb3JFYWNoKChwKSA9PiBwLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX3Njcm9sbCkpXG4gICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2VcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkcmFnZ2FibGUnKVxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCB0aGlzLl9uYXRpdmVEcmFnU3RhcnQpXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdlZS1hY3RpdmUnKVxuICB9XG5cbiAgbmF0aXZlRHJvcChldmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgY2FuY2VsRHJhZ2dpbmcgKCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcblxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX25hdGl2ZURyYWdFbmQpXG5cbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fc2Nyb2xsKVxuICAgIHRoaXMuc2Nyb2xsRWxlbWVudHMuZm9yRWFjaCgocCkgPT4gcC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9zY3JvbGwpKVxuXG4gICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2VcbiAgICB0aGlzLl9wcmV2aW91c0RpcmVjdGlvblBvc2l0aW9uID0gbnVsbFxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2RyYWdnYWJsZScpXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIHRoaXMuX25hdGl2ZURyYWdTdGFydClcbiAgfVxuXG4gIGNvcHlTdHlsZXMoc291cmNlLCBkZXN0aW5hdGlvbikge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuY29weVN0eWxlcykge1xuICAgICAgdGhpcy5vcHRpb25zLmNvcHlTdHlsZXMoc291cmNlLCBkZXN0aW5hdGlvbilcbiAgICB9IGVsc2Uge1xuICAgICAgY29weVN0eWxlcyhzb3VyY2UsIGRlc3RpbmF0aW9uKVxuICAgIH1cbiAgfVxuXG4gIGVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcChldmVudCkge1xuICAgIGNvbnN0IGNvbnRhaW5lclJlY3QgPSB0aGlzLmNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIGNvbnN0IGNsb25lZEVsZW1lbnQgPSB0aGlzLmVsZW1lbnQuY2xvbmVOb2RlKHRydWUpXG4gICAgY2xvbmVkRWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wZXJ0eV0gPSAnJ1xuICAgIHRoaXMuY29weVN0eWxlcyh0aGlzLmVsZW1lbnQsIGNsb25lZEVsZW1lbnQpXG4gICAgY2xvbmVkRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkcmFnZWUtbmF0aXZlLWVtdWxhdGlvbicpXG4gICAgY2xvbmVkRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSdcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNsb25lZEVsZW1lbnQpXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RyYWdlZS1wbGFjZWhvbGRlcicpXG5cbiAgICBjb25zdCBlbXVsYXRpb25EcmFnZ2FibGUgPSBuZXcgRHJhZ2dhYmxlKGNsb25lZEVsZW1lbnQsIHtcbiAgICAgIGNvbnRhaW5lcjogZG9jdW1lbnQuYm9keSxcbiAgICAgIHRvdWNoRHJhZ2dpbmdUaHJlc2hvbGQ6IDAsXG4gICAgICBkb21FdmVudHM6IGZhbHNlLFxuICAgICAgYm91bmQocG9pbnQpIHtcbiAgICAgICAgcmV0dXJuIHBvaW50XG4gICAgICB9LFxuICAgICAgb246IHtcbiAgICAgICAgJ2RyYWc6bW92ZSc6ICgpID0+IHtcbiAgICAgICAgICBjb25zdCBjb250YWluZXJSZWN0UG9pbnQgPSBuZXcgUG9pbnQoY29udGFpbmVyUmVjdC5sZWZ0LCBjb250YWluZXJSZWN0LnRvcClcbiAgICAgICAgICB0aGlzLnBvc2l0aW9uID0gZW11bGF0aW9uRHJhZ2dhYmxlLnBvc2l0aW9uLnN1Yihjb250YWluZXJSZWN0UG9pbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdWIodGhpcy5fc3RhcnRXaW5kb3dTY3JvbGxQb2ludClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZCh0aGlzLl9zdGFydFBhcmVudHNTY3JvbGxPZmZzZXQpXG5cbiAgICAgICAgICB0aGlzLmRldGVybWluZURpcmVjdGlvbih0aGlzLnBvc2l0aW9uKVxuICAgICAgICAgIHRoaXMuZW1pdERyYWdFdmVudCgnbW92ZScpXG4gICAgICAgIH0sXG4gICAgICAgICdkcmFnOmVuZCc6ICgpID0+IHtcbiAgICAgICAgICBlbXVsYXRpb25EcmFnZ2FibGUuZGVzdHJveSgpXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChjbG9uZWRFbGVtZW50KVxuICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZWUtcGxhY2Vob2xkZXInKVxuICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZWUtYWN0aXZlJylcblxuICAgICAgICAgIHRoaXMuZHJhZ0VuZEFjdGlvbigpXG4gICAgICAgICAgdGhpcy5lbWl0RHJhZ0V2ZW50KCdlbmQnKVxuICAgICAgICAgIHRoaXMuY2FuY2VsRHJhZ2dpbmcoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IGNvbnRhaW5lclJlY3RQb2ludCA9IG5ldyBQb2ludChjb250YWluZXJSZWN0LmxlZnQsIGNvbnRhaW5lclJlY3QudG9wKVxuICAgIGVtdWxhdGlvbkRyYWdnYWJsZS5fc3RhcnRXaW5kb3dTY3JvbGxQb2ludCA9IHRoaXMuX3N0YXJ0V2luZG93U2Nyb2xsUG9pbnRcblxuICAgIGVtdWxhdGlvbkRyYWdnYWJsZS5tb3ZlKFxuICAgICAgdGhpcy5waW5uZWRQb3NpdGlvbi5hZGQoY29udGFpbmVyUmVjdFBvaW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy53aW5kb3dTY3JvbGxQb2ludClcbiAgICAgICAgICAgICAgICAgICAgICAgICAuc3ViKHRoaXMucGFyZW50c1Njcm9sbE9mZnNldClcbiAgICApXG5cbiAgICBlbXVsYXRpb25EcmFnZ2FibGUuZHJhZ1N0YXJ0KGV2ZW50KVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIGVtaXREcmFnRXZlbnQodHlwZSkge1xuICAgIHRoaXMuZW1pdChgZHJhZzoke3R5cGV9YClcblxuICAgIGlmICh0aGlzLmRvbUV2ZW50cykge1xuICAgICAgZGlzcGF0Y2hEb21FdmVudCh0aGlzLmVsZW1lbnQsIGBkcmFnZWU6JHt0eXBlfWAsIHsgZHJhZ2dhYmxlOiB0aGlzIH0pXG4gICAgfVxuICB9XG5cbiAgZHJhZ0VuZEFjdGlvbigpIHtcbiAgICB0aGlzLnBpblBvc2l0aW9uKHRoaXMucG9zaXRpb24pXG4gIH1cblxuICBnZXRSZWN0YW5nbGUoKSB7XG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUodGhpcy5wb3NpdGlvbiwgdGhpcy5nZXRTaXplKCkpXG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIGlmICh0aGlzLmJvdW5kaW5nLnJlZnJlc2gpIHtcbiAgICAgIHRoaXMuYm91bmRpbmcucmVmcmVzaCgpXG4gICAgfVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmhhbmRsZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0KVxuICAgIHRoaXMuaGFuZGxlci5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQpXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIHRoaXMuX25hdGl2ZURyYWdTdGFydClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCB0aGlzLl9uYXRpdmVEcmFnT3ZlcilcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcm9wJywgdGhpcy5fbmF0aXZlRHJvcClcbiAgICB0aGlzLnJlc2V0RW1pdHRlcigpXG5cbiAgICBjb25zdCBpbmRleCA9IGRyYWdnYWJsZXMuaW5kZXhPZih0aGlzKVxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICBkcmFnZ2FibGVzLnNwbGljZShpbmRleCwgMSlcbiAgICB9XG4gIH1cblxuICBnZXQgY29udGFpbmVyKCkge1xuICAgIHJldHVybiAodGhpcy5fY29udGFpbmVyID0gdGhpcy5fY29udGFpbmVyIHx8IHRoaXMub3B0aW9ucy5jb250YWluZXIgfHwgdGhpcy5vcHRpb25zLnBhcmVudCB8fCB0aGlzLmVsZW1lbnQub2Zmc2V0UGFyZW50KVxuICB9XG5cbiAgZ2V0IGhhbmRsZXIoKSB7XG4gICAgaWYgKCF0aGlzLl9oYW5kbGVyKSB7XG4gICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5oYW5kbGVyID09PSAnc3RyaW5nJykge1xuICAgICAgICB0aGlzLl9oYW5kbGVyID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5vcHRpb25zLmhhbmRsZXIpIHx8IHRoaXMuZWxlbWVudFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5faGFuZGxlciA9IHRoaXMub3B0aW9ucy5oYW5kbGVyIHx8IHRoaXMuZWxlbWVudFxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9oYW5kbGVyXG4gIH1cblxuICBnZXQgc3RvcFByb3BhZ2F0aW9uT25EcmFnU3RhcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5zdG9wUHJvcGFnYXRpb25PbkRyYWdTdGFydCB8fCBmYWxzZVxuICB9XG5cbiAgZ2V0IG5hdGl2ZURyYWdBbmREcm9wKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMubmF0aXZlRHJhZ0FuZERyb3AgfHwgZmFsc2VcbiAgfVxuXG4gIGdldCBkb21FdmVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5kb21FdmVudHMgIT09IGZhbHNlXG4gIH1cblxuICBnZXQgZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wT25Ub3VjaCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcE9uVG91Y2ggfHwgZmFsc2VcbiAgfVxuXG4gIGdldCBzaG91bGRSZW1vdmVaZXJvVHJhbnNsYXRlKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuc2hvdWxkUmVtb3ZlWmVyb1RyYW5zbGF0ZSB8fCBmYWxzZVxuICB9XG5cbiAgZ2V0IHRvdWNoRHJhZ2dpbmdUaHJlc2hvbGQoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy50b3VjaERyYWdnaW5nVGhyZXNob2xkIHx8IDBcbiAgfVxuXG4gIGdldCBkcmFnU3RhcnRUaHJlc2hvbGQoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5kcmFnU3RhcnRUaHJlc2hvbGQgfHwgMFxuICB9XG5cbiAgZ2V0IGRyYWdPdmVyVGhyb3R0bGVEdXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmRyYWdPdmVyVGhyb3R0bGVEdXJhdGlvbiB8fCAxNlxuICB9XG5cbiAgZ2V0IGlzQ29uc2lkZXJUcmFuc2Zvcm1PZmZzZXQgKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuY29uc2lkZXJUcmFuc2Zvcm1PZmZzZXQgfHwgZmFsc2VcbiAgfVxuXG4gIGdldCB3aW5kb3dTY3JvbGxQb2ludCgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHdpbmRvdy5zY3JvbGxYLCB3aW5kb3cuc2Nyb2xsWSlcbiAgfVxuXG4gIGdldCBzY3JvbGxSb290Q29udGFpbmVyKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuc2Nyb2xsUm9vdENvbnRhaW5lciB8fCB0aGlzLmNvbnRhaW5lclxuICB9XG5cbiAgZ2V0IHNjcm9sbEVsZW1lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLl9jYWNoZWRTY3JvbGxFbGVtZW50c1xuICAgICAgPyB0aGlzLl9jYWNoZWRTY3JvbGxFbGVtZW50c1xuICAgICAgOiAodGhpcy5fY2FjaGVkU2Nyb2xsRWxlbWVudHMgPSBnZXRQYXJlbnRzQ2hhaW4odGhpcy5lbGVtZW50LCB0aGlzLnNjcm9sbFJvb3RDb250YWluZXIpKVxuICB9XG5cbiAgZ2V0IHNjcm9sbEVsZW1lbnRzT2Zmc2V0KCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQoXG4gICAgICB0aGlzLnNjcm9sbEVsZW1lbnRzLnJlZHVjZSgoc3VtLCBwKSA9PiBzdW0gKyBwLnNjcm9sbExlZnQsIDApLFxuICAgICAgdGhpcy5zY3JvbGxFbGVtZW50cy5yZWR1Y2UoKHN1bSwgcCkgPT4gc3VtICsgcC5zY3JvbGxUb3AsIDApXG4gICAgKVxuICB9XG5cbiAgZ2V0IHBhcmVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhY2hlZFBhcmVudHNcbiAgICAgID8gdGhpcy5fY2FjaGVkUGFyZW50c1xuICAgICAgOiAodGhpcy5fY2FjaGVkUGFyZW50cyA9IGdldFBhcmVudHNDaGFpbih0aGlzLmVsZW1lbnQsIHRoaXMuY29udGFpbmVyKSlcbiAgfVxuXG4gIGdldCBwYXJlbnRzU2Nyb2xsT2Zmc2V0KCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQoXG4gICAgICB0aGlzLnBhcmVudHMucmVkdWNlKChzdW0sIHApID0+IHN1bSArIHAuc2Nyb2xsTGVmdCwgMCksXG4gICAgICB0aGlzLnBhcmVudHMucmVkdWNlKChzdW0sIHApID0+IHN1bSArIHAuc2Nyb2xsVG9wLCAwKVxuICAgIClcbiAgfVxuXG4gIGdldCBlbmFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZVxuICB9XG5cbiAgc2V0IGVuYWJsZShlbmFibGUpIHtcbiAgICBpZiAoZW5hYmxlKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2VlLWRpc2FibGUnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZHJhZ2VlLWRpc2FibGUnKVxuICAgIH1cblxuICAgIHRoaXMuX2VuYWJsZSA9IGVuYWJsZVxuICB9XG59XG5cbkRyYWdnYWJsZS5lbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcigpXG5EcmFnZ2FibGUuZW1pdHRlci5vbignZHJhZ2dhYmxlOmNyZWF0ZScsIGFkZFRvRGVmYXVsdFNjb3BlKVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCwgaW1tZWRpYXRlKSB7XG4gIGxldCB0aW1lb3V0XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGV4ZWN1dGVkRnVuY3Rpb24oKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXNcbiAgICBjb25zdCBhcmdzID0gYXJndW1lbnRzXG5cbiAgICBjb25zdCBsYXRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgdGltZW91dCA9IG51bGxcbiAgICAgIGlmICghaW1tZWRpYXRlKSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpXG4gICAgfVxuXG4gICAgY29uc3QgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dFxuXG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpXG5cbiAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdClcblxuICAgIGlmIChjYWxsTm93KSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpXG4gIH1cbn1cbiIsImltcG9ydCBkZWJvdW5jZSBmcm9tICcuL3V0aWxzL2RlYm91bmNlJ1xuaW1wb3J0IHJlbW92ZUl0ZW0gZnJvbSAnLi91dGlscy9yZW1vdmUtYXJyYXktaXRlbSdcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudEVtaXR0ZXInXG5pbXBvcnQgZGlzcGF0Y2hEb21FdmVudCBmcm9tICcuL3V0aWxzL2Rpc3BhdGNoLWRvbS1ldmVudCdcbmltcG9ydCB7XG4gIGdldERpc3RhbmNlLFxuICBpbmRleE9mTmVhcmVzdFBvaW50XG59IGZyb20gJy4vZ2VvbWV0cnkvZGlzdGFuY2VzJ1xuXG5pbXBvcnQgRHJhZ2dhYmxlIGZyb20gJy4vZHJhZ2dhYmxlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0IGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoZHJhZ2dhYmxlcywgb3B0aW9ucz17fSkge1xuICAgIHN1cGVyKG9wdGlvbnMpXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICB0aW1lRW5kOiAyMDAsXG4gICAgICB0aW1lRXhjYW5nZTogNDAwLFxuICAgICAgcmFkaXVzOiAzMFxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0aGlzLmNvbnRhaW5lciA9IG9wdGlvbnMuY29udGFpbmVyXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gZHJhZ2dhYmxlc1xuICAgIHRoaXMuY2hhbmdlZER1cmluZ0l0ZXJhdGlvbiA9IGZhbHNlXG4gICAgdGhpcy51bnN1YnNjcmliZXMgPSBuZXcgTWFwKClcblxuICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoZGVib3VuY2UodGhpcy5vblJlc2l6ZS5iaW5kKHRoaXMpLCAxMDApKVxuXG4gICAgaWYgKHRoaXMuY29udGFpbmVyKSB7XG4gICAgICB0aGlzLnJlc2l6ZU9ic2VydmVyLm9ic2VydmUodGhpcy5jb250YWluZXIpXG4gICAgfVxuXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIG9uUmVzaXplKCkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMucmVvcmRlck9uQ2hhbmdlKSB0aGlzLnJlc2V0KClcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBpZighZHJhZ2dhYmxlLmlzRHJhZ2dpbmcpIHtcbiAgICAgICAgZHJhZ2dhYmxlLnN0YXJ0UG9zaXRpb25pbmcoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuX2VuYWJsZSA9IHRydWVcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB0aGlzLmluaXREcmFnZ2FibGUoZHJhZ2dhYmxlKSlcbiAgfVxuXG4gIGluaXREcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgZHJhZ2dhYmxlLmVuYWJsZSA9IHRoaXMuX2VuYWJsZVxuICAgIHRoaXMubGlzdGVuVG8oZHJhZ2dhYmxlLCAnZHJhZzptb3ZlJywgKCkgPT4gdGhpcy5vbk1vdmUoZHJhZ2dhYmxlKSlcbiAgICBkcmFnZ2FibGUuZHJhZ0VuZEFjdGlvbiA9ICgpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5waW5Qb3NpdGlvbihkcmFnZ2FibGUucGlubmVkUG9zaXRpb24sIHRoaXMub3B0aW9ucy50aW1lRW5kKVxuICAgICAgdGhpcy5vbkVuZChkcmFnZ2FibGUpXG4gICAgfVxuICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZShkcmFnZ2FibGUuZWxlbWVudClcbiAgfVxuXG4gIGxpc3RlblRvKGRyYWdnYWJsZSwgZXZlbnROYW1lLCBoYW5kbGVyKSB7XG4gICAgaWYgKCF0aGlzLnVuc3Vic2NyaWJlcy5oYXMoZHJhZ2dhYmxlKSkge1xuICAgICAgdGhpcy51bnN1YnNjcmliZXMuc2V0KGRyYWdnYWJsZSwgW10pXG4gICAgfVxuICAgIHRoaXMudW5zdWJzY3JpYmVzLmdldChkcmFnZ2FibGUpLnB1c2goZHJhZ2dhYmxlLm9uKGV2ZW50TmFtZSwgaGFuZGxlcikpXG4gIH1cblxuICByZWxlYXNlRHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIudW5vYnNlcnZlKGRyYWdnYWJsZS5lbGVtZW50KVxuICAgIHRoaXMudW5zdWJzY3JpYmVzLmdldChkcmFnZ2FibGUpPy5mb3JFYWNoKCh1bnN1YnNjcmliZSkgPT4gdW5zdWJzY3JpYmUoKSlcbiAgICB0aGlzLnVuc3Vic2NyaWJlcy5kZWxldGUoZHJhZ2dhYmxlKVxuICAgIHJlbW92ZUl0ZW0odGhpcy5kcmFnZ2FibGVzLCBkcmFnZ2FibGUpXG4gIH1cblxuICBvbk1vdmUoZHJhZ2dhYmxlKSB7XG4gICAgaWYgKHRoaXMuc3dhcHBpbmdEaXNhYmxlZCkgcmV0dXJuXG5cbiAgICBjb25zdCBzb3J0ZWREcmFnZ2FibGVzID0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcbiAgICBjb25zdCBwaW5uZWRQb3NpdGlvbnMgPSBzb3J0ZWREcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24pXG5cbiAgICBjb25zdCBjdXJyZW50SW5kZXggPSBzb3J0ZWREcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKVxuICAgIGNvbnN0IHRhcmdldEluZGV4ID0gaW5kZXhPZk5lYXJlc3RQb2ludChwaW5uZWRQb3NpdGlvbnMsIGRyYWdnYWJsZS5wb3NpdGlvbiwgdGhpcy5vcHRpb25zLnJhZGl1cywgdGhpcy5kaXN0YW5jZUZ1bmMpXG5cbiAgICBpZiAodGFyZ2V0SW5kZXggIT09IC0xICYmIGN1cnJlbnRJbmRleCAhPT0gdGFyZ2V0SW5kZXgpIHtcbiAgICAgIGlmICh0YXJnZXRJbmRleCA8IGN1cnJlbnRJbmRleCkge1xuICAgICAgICBmb3IgKGxldCBpPXRhcmdldEluZGV4OyBpPGN1cnJlbnRJbmRleDsgaSsrKSB7XG4gICAgICAgICAgc29ydGVkRHJhZ2dhYmxlc1tpXS5waW5Qb3NpdGlvbihwaW5uZWRQb3NpdGlvbnNbaSsxXSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGxldCBpPWN1cnJlbnRJbmRleDsgaTx0YXJnZXRJbmRleDsgaSsrKSB7XG4gICAgICAgICAgc29ydGVkRHJhZ2dhYmxlc1tpKzFdLnBpblBvc2l0aW9uKHBpbm5lZFBvc2l0aW9uc1tpXSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChkcmFnZ2FibGUubmF0aXZlRHJhZ0FuZERyb3ApIHtcbiAgICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKHBpbm5lZFBvc2l0aW9uc1t0YXJnZXRJbmRleF0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24gPSBwaW5uZWRQb3NpdGlvbnNbdGFyZ2V0SW5kZXhdXG4gICAgICB9XG5cbiAgICAgIHRoaXMuY2hhbmdlZER1cmluZ0l0ZXJhdGlvbiA9IHRydWVcbiAgICB9XG4gIH1cblxuICBvbkVuZChkcmFnZ2FibGUpIHtcbiAgICBpZiAodGhpcy5jaGFuZ2VkRHVyaW5nSXRlcmF0aW9uKSB7XG4gICAgICB0aGlzLmVtaXRMaXN0RXZlbnQoJ2NoYW5nZScsIGRyYWdnYWJsZSlcbiAgICAgIHRoaXMuY2hhbmdlZER1cmluZ0l0ZXJhdGlvbiA9IGZhbHNlXG5cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucmVvcmRlck9uQ2hhbmdlICYmIHRoaXMub3B0aW9ucy5jb250YWluZXIpIHtcbiAgICAgICAgdGhpcy5yZW9yZGVyRWxlbWVudHMoZHJhZ2dhYmxlKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlb3JkZXJFbGVtZW50cyhtb3ZlZERyYWdnYWJsZSkge1xuICAgIGNvbnN0IHNvcnRlZERyYWdnYWJsZXMgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuICAgIGNvbnN0IGluZGV4ID0gc29ydGVkRHJhZ2dhYmxlcy5pbmRleE9mKG1vdmVkRHJhZ2dhYmxlKVxuICAgIGNvbnN0IG5leHQgPSBzb3J0ZWREcmFnZ2FibGVzW2luZGV4ICsgMV1cblxuICAgIHRoaXMucmVzZXQoKVxuXG4gICAgaWYgKG5leHQpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmluc2VydEJlZm9yZShtb3ZlZERyYWdnYWJsZS5lbGVtZW50LCBuZXh0LmVsZW1lbnQpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKG1vdmVkRHJhZ2dhYmxlLmVsZW1lbnQpXG4gICAgfVxuXG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGQpID0+IGQuc3RhcnRQb3NpdGlvbmluZygpKVxuICAgIHRoaXMuZW1pdExpc3RFdmVudCgncmVvcmRlcmVkJywgbW92ZWREcmFnZ2FibGUpXG4gIH1cblxuICBlbWl0TGlzdEV2ZW50KHR5cGUsIGRyYWdnYWJsZSkge1xuICAgIHRoaXMuZW1pdChgbGlzdDoke3R5cGV9YClcblxuICAgIGlmICh0aGlzLmRvbUV2ZW50cykge1xuICAgICAgZGlzcGF0Y2hEb21FdmVudChkcmFnZ2FibGUuZWxlbWVudCwgYGRyYWdlZTpsaXN0LSR7dHlwZX1gLCB7IGxpc3Q6IHRoaXMsIGRyYWdnYWJsZSB9KVxuICAgIH1cbiAgfVxuXG4gIGdldEN1cnJlbnRQaW5uZWRQb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uLmNsb25lKCkpXG4gIH1cblxuICBnZXRTb3J0ZWREcmFnZ2FibGVzKCkge1xuICAgIHJldHVybiB0aGlzLmRyYWdnYWJsZXMuc29ydCh0aGlzLnNvcnRpbmcuYmluZCh0aGlzKSlcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5yZXNldFBvc2l0aW9uVG9Jbml0aWFsKCkpXG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5yZWZyZXNoKCkpXG4gIH1cblxuICBhZGQoZHJhZ2dhYmxlcykge1xuICAgIGlmICghKGRyYWdnYWJsZXMgaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICAgIGRyYWdnYWJsZXMgPSBbZHJhZ2dhYmxlc11cbiAgICB9XG4gICAgZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHRoaXMuaW5pdERyYWdnYWJsZShkcmFnZ2FibGUpKVxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IHRoaXMuZHJhZ2dhYmxlcy5jb25jYXQoZHJhZ2dhYmxlcylcbiAgfVxuXG4gIHJlbW92ZShkcmFnZ2FibGVzKSB7XG4gICAgY29uc3QgaW5pdGlhbFBvc2l0aW9ucyA9IHRoaXMuZHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLmluaXRpYWxQb3NpdGlvbilcbiAgICBjb25zdCBsaXN0ID0gW11cbiAgICBjb25zdCBzb3J0ZWREcmFnZ2FibGVzID0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcblxuICAgIGlmICghKGRyYWdnYWJsZXMgaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICAgIGRyYWdnYWJsZXMgPSBbZHJhZ2dhYmxlc11cbiAgICB9XG5cbiAgICBkcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gdGhpcy5yZWxlYXNlRHJhZ2dhYmxlKGRyYWdnYWJsZSkpXG5cbiAgICBsZXQgaiA9IDBcbiAgICBzb3J0ZWREcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgaWYgKHRoaXMuZHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkgIT09IC0xKSB7XG4gICAgICAgIGlmIChkcmFnZ2FibGUucGlubmVkUG9zaXRpb24gIT09IGluaXRpYWxQb3NpdGlvbnNbal0pIHtcbiAgICAgICAgICBkcmFnZ2FibGUucGluUG9zaXRpb24oaW5pdGlhbFBvc2l0aW9uc1tqXSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICB9XG4gICAgICAgIGRyYWdnYWJsZS5pbml0aWFsUG9zaXRpb24gPSBpbml0aWFsUG9zaXRpb25zW2pdXG4gICAgICAgIGorK1xuICAgICAgICBsaXN0LnB1c2goZHJhZ2dhYmxlKVxuICAgICAgfVxuICAgIH0pXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gbGlzdFxuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5yZW1vdmUodGhpcy5kcmFnZ2FibGVzLnNsaWNlKCkpXG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5kZXN0cm95KCkpXG4gICAgaWYgKHRoaXMuY29udGFpbmVyKSB7XG4gICAgICB0aGlzLnJlc2l6ZU9ic2VydmVyLnVub2JzZXJ2ZSh0aGlzLmNvbnRhaW5lcilcbiAgICB9XG4gIH1cblxuICBzb3J0aW5nKGRyYWdnYWJsZUEsIGRyYWdnYWJsZUIpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLnNvcnRpbmcpIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuc29ydGluZyhkcmFnZ2FibGVBLCBkcmFnZ2FibGVCKVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZHJhZ2dhYmxlQS5waW5uZWRQb3NpdGlvbi55IDwgZHJhZ2dhYmxlQi5waW5uZWRQb3NpdGlvbi55KSByZXR1cm4gLTFcbiAgICAgIGlmIChkcmFnZ2FibGVBLnBpbm5lZFBvc2l0aW9uLnkgPiBkcmFnZ2FibGVCLnBpbm5lZFBvc2l0aW9uLnkpIHJldHVybiAxXG4gICAgICBpZiAoZHJhZ2dhYmxlQS5waW5uZWRQb3NpdGlvbi54IDwgZHJhZ2dhYmxlQi5waW5uZWRQb3NpdGlvbi54KSByZXR1cm4gLTFcbiAgICAgIGlmIChkcmFnZ2FibGVBLnBpbm5lZFBvc2l0aW9uLnggPiBkcmFnZ2FibGVCLnBpbm5lZFBvc2l0aW9uLngpIHJldHVybiAxXG4gICAgICByZXR1cm4gMFxuICAgIH1cbiAgfVxuXG4gIGdldCBkaXN0YW5jZUZ1bmMoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5nZXREaXN0YW5jZSB8fCBnZXREaXN0YW5jZVxuICB9XG5cbiAgZ2V0IGRvbUV2ZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmRvbUV2ZW50cyAhPT0gZmFsc2VcbiAgfVxuXG4gIGdldCBwb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q3VycmVudFBpbm5lZFBvc2l0aW9ucygpXG4gIH1cblxuICBzZXQgcG9zaXRpb25zKHBvc2l0aW9ucykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSAnd3JvbmcgYXJyYXkgbGVuZ3RoJ1xuICAgIGlmIChwb3NpdGlvbnMubGVuZ3RoID09PSB0aGlzLmRyYWdnYWJsZXMubGVuZ3RoKSB7XG4gICAgICBwb3NpdGlvbnMuZm9yRWFjaCgocG9pbnQsIGkpID0+IHtcbiAgICAgICAgdGhpcy5kcmFnZ2FibGVzW2ldLnBpblBvc2l0aW9uKHBvaW50KVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbWVzc2FnZVxuICAgIH1cbiAgfVxuXG4gIGdldCBlbmFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZVxuICB9XG5cbiAgc2V0IGVuYWJsZShlbmFibGUpIHtcbiAgICB0aGlzLl9lbmFibGUgPSBlbmFibGVcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUuZW5hYmxlID0gZW5hYmxlXG4gICAgfSlcbiAgfVxuXG4gIGdldCBzd2FwcGluZ0Rpc2FibGVkKCkge1xuICAgIHJldHVybiB0aGlzLl9zd2FwcGluZ0Rpc2FibGVkXG4gIH1cblxuICBzZXQgc3dhcHBpbmdEaXNhYmxlZChkaXNhYmxlZCkge1xuICAgIHRoaXMuX3N3YXBwaW5nRGlzYWJsZWQgPSBkaXNhYmxlZFxuICB9XG59XG4iLCJpbXBvcnQgTGlzdCBmcm9tICcuL2xpc3QnXG5pbXBvcnQgeyBpbmRleE9mTmVhcmVzdFBvaW50LCBnZXRYRGlmZmVyZW5jZSwgZ2V0WURpZmZlcmVuY2UgfSBmcm9tICcuL2dlb21ldHJ5L2Rpc3RhbmNlcydcblxuaW1wb3J0IERyYWdnYWJsZSBmcm9tICcuL2RyYWdnYWJsZSdcblxuY29uc3QgYXJyYXlNb3ZlID0gKGFycmF5LCBmcm9tLCB0bykgPT4ge1xuICBhcnJheS5zcGxpY2UodG8gPCAwID8gYXJyYXkubGVuZ3RoICsgdG8gOiB0bywgMCwgYXJyYXkuc3BsaWNlKGZyb20sIDEpWzBdKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdWJibGluZ0xpc3QgZXh0ZW5kcyBMaXN0IHtcbiAgYXV0b0RldGVjdEdhcCgpIHtcbiAgICBpZiAodGhpcy5fZ2FwICE9PSB1bmRlZmluZWQgfHwgdGhpcy5leHBsaWNpdEdhcCAhPT0gdW5kZWZpbmVkIHx8IHRoaXMuZHJhZ2dhYmxlcy5sZW5ndGggPCAyKSByZXR1cm5cblxuICAgIGNvbnN0IGF4aXMgPSB0aGlzLmF4aXNcbiAgICBjb25zdCBzb3J0ZWQgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuICAgIC8vIERldGFjaGVkIGVsZW1lbnRzIHJlcG9ydCBzaXplIDBcbiAgICBjb25zdCBpbmRleCA9IHNvcnRlZC5maW5kSW5kZXgoKGQsIGkpID0+IGkgPCBzb3J0ZWQubGVuZ3RoIC0gMSAmJiBkLmVsZW1lbnQuaXNDb25uZWN0ZWQpXG4gICAgaWYgKGluZGV4ID09PSAtMSkgcmV0dXJuXG5cbiAgICBjb25zdCBbY3VycmVudCwgbmV4dF0gPSBbc29ydGVkW2luZGV4XSwgc29ydGVkW2luZGV4ICsgMV1dXG4gICAgdGhpcy5fZ2FwID0gbmV4dC5waW5uZWRQb3NpdGlvbltheGlzXSAtIGN1cnJlbnQucGlubmVkUG9zaXRpb25bYXhpc10gLSBjdXJyZW50LmdldFNpemUoKVtheGlzXVxuICB9XG5cbiAgYXV0b0RldGVjdFN0YXJ0UG9zaXRpb24oKSB7XG4gICAgaWYgKHRoaXMuZHJhZ2dhYmxlcy5sZW5ndGggPj0gMSAmJiAhdGhpcy5zdGFydFBvc2l0aW9uKSB7XG4gICAgICB0aGlzLnN0YXJ0UG9zaXRpb24gPSB0aGlzLmRyYWdnYWJsZXNbMF0ucGlubmVkUG9zaXRpb25cbiAgICB9XG4gIH1cblxuICBpbml0RHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIHN1cGVyLmluaXREcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICAgIHRoaXMubGlzdGVuVG8oZHJhZ2dhYmxlLCAnZHJhZzpzdGFydCcsICgpID0+IHRoaXMub25EcmFnU3RhcnQoZHJhZ2dhYmxlKSlcbiAgfVxuXG4gIG9uRHJhZ1N0YXJ0KGRyYWdnYWJsZSkge1xuICAgIHRoaXMuYXV0b0RldGVjdEdhcCgpXG4gICAgdGhpcy5hdXRvRGV0ZWN0U3RhcnRQb3NpdGlvbigpXG4gICAgdGhpcy5jYWNoZWRTb3J0ZWREcmFnZ2FibGVzID0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcbiAgICB0aGlzLmluZGV4T2ZBY3RpdmVEcmFnZ2FibGUgPSB0aGlzLmNhY2hlZFNvcnRlZERyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpXG4gIH1cblxuICBvbk1vdmUoZHJhZ2dhYmxlKSB7XG4gICAgaWYgKHRoaXMuc3dhcHBpbmdEaXNhYmxlZCkgcmV0dXJuXG5cbiAgICBjb25zdCBwcmV2RHJhZ2dhYmxlID0gdGhpcy5jYWNoZWRTb3J0ZWREcmFnZ2FibGVzW3RoaXMuaW5kZXhPZkFjdGl2ZURyYWdnYWJsZSAtIDFdXG4gICAgY29uc3QgbmV4dERyYWdnYWJsZSA9IHRoaXMuY2FjaGVkU29ydGVkRHJhZ2dhYmxlc1t0aGlzLmluZGV4T2ZBY3RpdmVEcmFnZ2FibGUgKyAxXVxuICAgIGNvbnN0IGN1cnJlbnRQb3NpdGlvbiA9IGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvblxuXG4gICAgbGV0IGN1cnJlbnRPcmRlclxuICAgIGxldCB0YXJnZXRJbmRleFxuXG4gICAgaWYodGhpcy5pc01vdmluZ0JhY2t3YXJkKGRyYWdnYWJsZSkgJiYgcHJldkRyYWdnYWJsZSkge1xuICAgICAgY3VycmVudE9yZGVyID0gW3ByZXZEcmFnZ2FibGUsIGRyYWdnYWJsZV0ubWFwKChkKSA9PiBkLnBpbm5lZFBvc2l0aW9uKVxuICAgICAgdGFyZ2V0SW5kZXggPSBpbmRleE9mTmVhcmVzdFBvaW50KGN1cnJlbnRPcmRlciwgZHJhZ2dhYmxlLnBvc2l0aW9uLCAxMDAwMCwgdGhpcy5kaXN0YW5jZUZ1bmMpXG5cbiAgICAgIGlmICh0YXJnZXRJbmRleCA9PT0gMCkge1xuICAgICAgICBpZihkcmFnZ2FibGUuc2hvdWxkVXNlTmF0aXZlRHJhZ0FuZERyb3AoKSkge1xuICAgICAgICAgIGRyYWdnYWJsZS5waW5Qb3NpdGlvbihwcmV2RHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbiA9IHByZXZEcmFnZ2FibGUucGlubmVkUG9zaXRpb24uY2xvbmUoKVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHByZXZOZXdQb3NpdGlvbiA9IHRoaXMubmV4dFBvc2l0aW9uKGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbiwgZHJhZ2dhYmxlKVxuICAgICAgICBwcmV2TmV3UG9zaXRpb25bdGhpcy5jcm9zc0F4aXNdID0gY3VycmVudFBvc2l0aW9uW3RoaXMuY3Jvc3NBeGlzXVxuICAgICAgICBwcmV2RHJhZ2dhYmxlLnBpblBvc2l0aW9uKHByZXZOZXdQb3NpdGlvbiwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICBhcnJheU1vdmUodGhpcy5jYWNoZWRTb3J0ZWREcmFnZ2FibGVzLCB0aGlzLmluZGV4T2ZBY3RpdmVEcmFnZ2FibGUtLSwgdGhpcy5pbmRleE9mQWN0aXZlRHJhZ2dhYmxlKVxuICAgICAgICB0aGlzLm9uTW92ZShkcmFnZ2FibGUpXG4gICAgICAgIHRoaXMuY2hhbmdlZER1cmluZ0l0ZXJhdGlvbiA9IHRydWVcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYodGhpcy5pc01vdmluZ0ZvcndhcmQoZHJhZ2dhYmxlKSAmJiBuZXh0RHJhZ2dhYmxlKSB7XG4gICAgICBjdXJyZW50T3JkZXIgPSBbZHJhZ2dhYmxlLCBuZXh0RHJhZ2dhYmxlXS5tYXAoKGQpID0+IGQucGlubmVkUG9zaXRpb24pXG4gICAgICB0YXJnZXRJbmRleCA9IGluZGV4T2ZOZWFyZXN0UG9pbnQoY3VycmVudE9yZGVyLCBkcmFnZ2FibGUucG9zaXRpb24sIDEwMDAwLCB0aGlzLmRpc3RhbmNlRnVuYylcblxuICAgICAgaWYodGFyZ2V0SW5kZXggPT09IDEpIHtcbiAgICAgICAgbmV4dERyYWdnYWJsZS5waW5Qb3NpdGlvbihkcmFnZ2FibGUucGlubmVkUG9zaXRpb24sIHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSlcbiAgICAgICAgY29uc3QgZHJhZ2dhYmxlTmV3UG9zaXRpb24gPSB0aGlzLm5leHRQb3NpdGlvbihuZXh0RHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uLCBuZXh0RHJhZ2dhYmxlKVxuICAgICAgICBpZihkcmFnZ2FibGUuc2hvdWxkVXNlTmF0aXZlRHJhZ0FuZERyb3AoKSkge1xuICAgICAgICAgIGRyYWdnYWJsZS5waW5Qb3NpdGlvbihkcmFnZ2FibGVOZXdQb3NpdGlvbilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24gPSBkcmFnZ2FibGVOZXdQb3NpdGlvblxuICAgICAgICB9XG4gICAgICAgIGFycmF5TW92ZSh0aGlzLmNhY2hlZFNvcnRlZERyYWdnYWJsZXMsIHRoaXMuaW5kZXhPZkFjdGl2ZURyYWdnYWJsZSsrLCB0aGlzLmluZGV4T2ZBY3RpdmVEcmFnZ2FibGUpXG4gICAgICAgIHRoaXMub25Nb3ZlKGRyYWdnYWJsZSlcbiAgICAgICAgdGhpcy5jaGFuZ2VkRHVyaW5nSXRlcmF0aW9uID0gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGJ1YmJsaW5nKHNvcnRlZERyYWdnYWJsZXMsIGN1cnJlbnREcmFnZ2FibGUpIHtcbiAgICBsZXQgY3VycmVudFBvc2l0aW9uID0gdGhpcy5zdGFydFBvc2l0aW9uLmNsb25lKClcbiAgICBzb3J0ZWREcmFnZ2FibGVzIHx8PSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuXG4gICAgc29ydGVkRHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGlmICghZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uLmNvbXBhcmUoY3VycmVudFBvc2l0aW9uKSkge1xuICAgICAgICBpZiAoZHJhZ2dhYmxlID09PSBjdXJyZW50RHJhZ2dhYmxlICYmICFjdXJyZW50RHJhZ2dhYmxlLnNob3VsZFVzZU5hdGl2ZURyYWdBbmREcm9wKCkpIHtcbiAgICAgICAgICBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24gPSBjdXJyZW50UG9zaXRpb24uY2xvbmUoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRyYWdnYWJsZS5waW5Qb3NpdGlvbihjdXJyZW50UG9zaXRpb24sIChkcmFnZ2FibGUgPT09IGN1cnJlbnREcmFnZ2FibGUpID8gMCA6IHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjdXJyZW50UG9zaXRpb24gPSB0aGlzLm5leHRQb3NpdGlvbihjdXJyZW50UG9zaXRpb24sIGRyYWdnYWJsZSlcbiAgICB9KVxuICB9XG5cbiAgcmVtb3ZlKGRyYWdnYWJsZXMpIHtcbiAgICBpZiAoIShkcmFnZ2FibGVzIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgICBkcmFnZ2FibGVzID0gW2RyYWdnYWJsZXNdXG4gICAgfVxuXG4gICAgLy8gRGV0ZWN0IGxheW91dCBiZWZvcmUgcmVtb3ZhbCwgb3RoZXJ3aXNlIHRoZSBnYXAgaXMgbWVhc3VyZWQgYWNyb3NzIHRoZSBob2xlXG4gICAgdGhpcy5hdXRvRGV0ZWN0R2FwKClcbiAgICB0aGlzLmF1dG9EZXRlY3RTdGFydFBvc2l0aW9uKClcblxuICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB0aGlzLnJlbGVhc2VEcmFnZ2FibGUoZHJhZ2dhYmxlKSlcbiAgICB0aGlzLmRyYWdnYWJsZXMgPSB0aGlzLmRyYWdnYWJsZXMuZmlsdGVyKChkKSA9PiAhZHJhZ2dhYmxlcy5pbmNsdWRlcyhkKSlcblxuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkKSA9PiBkLnN0YXJ0UG9zaXRpb25pbmcoKSlcblxuICAgIGlmKHRoaXMuZHJhZ2dhYmxlcy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmJ1YmJsaW5nKClcbiAgICB9XG4gIH1cblxuICBuZXh0UG9zaXRpb24ocG9zaXRpb24sIGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IG5leHQgPSBwb3NpdGlvbi5jbG9uZSgpXG4gICAgbmV4dFt0aGlzLmF4aXNdID0gcG9zaXRpb25bdGhpcy5heGlzXSArIGRyYWdnYWJsZS5nZXRTaXplKClbdGhpcy5heGlzXSArIHRoaXMuZ2FwXG4gICAgcmV0dXJuIG5leHRcbiAgfVxuXG4gIGlzTW92aW5nQmFja3dhcmQoZHJhZ2dhYmxlKSB7XG4gICAgcmV0dXJuIHRoaXMuYXhpcyA9PT0gJ3gnID8gZHJhZ2dhYmxlLmxlZnREaXJlY3Rpb24gOiBkcmFnZ2FibGUudXBEaXJlY3Rpb25cbiAgfVxuXG4gIGlzTW92aW5nRm9yd2FyZChkcmFnZ2FibGUpIHtcbiAgICByZXR1cm4gdGhpcy5heGlzID09PSAneCcgPyBkcmFnZ2FibGUucmlnaHREaXJlY3Rpb24gOiBkcmFnZ2FibGUuZG93bkRpcmVjdGlvblxuICB9XG5cbiAgZ2V0IGF4aXMoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5heGlzID09PSAneCcgPyAneCcgOiAneSdcbiAgfVxuXG4gIGdldCBjcm9zc0F4aXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXhpcyA9PT0gJ3gnID8gJ3knIDogJ3gnXG4gIH1cblxuICBnZXQgZGlzdGFuY2VGdW5jKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZ2V0RGlzdGFuY2UgfHwgKHRoaXMuYXhpcyA9PT0gJ3gnID8gZ2V0WERpZmZlcmVuY2UgOiBnZXRZRGlmZmVyZW5jZSlcbiAgfVxuXG4gIGdldCBleHBsaWNpdEdhcCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmdhcCA/PyB0aGlzLm9wdGlvbnMudmVydGljYWxHYXBcbiAgfVxuXG4gIGdldCBnYXAoKSB7XG4gICAgaWYgKHRoaXMuZXhwbGljaXRHYXAgIT09IHVuZGVmaW5lZCkgcmV0dXJuIHRoaXMuZXhwbGljaXRHYXBcblxuICAgIHRoaXMuYXV0b0RldGVjdEdhcCgpXG4gICAgcmV0dXJuIHRoaXMuX2dhcCB8fCAwXG4gIH1cblxuICBzZXQgZ2FwKGdhcFZhbHVlKSB7XG4gICAgdGhpcy5vcHRpb25zLmdhcCA9IGdhcFZhbHVlXG4gIH1cblxuICBnZXQgdmVydGljYWxHYXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2FwXG4gIH1cblxuICBzZXQgdmVydGljYWxHYXAoZ2FwVmFsdWUpIHtcbiAgICB0aGlzLmdhcCA9IGdhcFZhbHVlXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJnZXRQYXJlbnRzQ2hhaW4iLCJjaGlsZEVsZW1lbnQiLCJyb290RWxlbWVudCIsImNoYWluIiwiZWxlbWVudCIsInBhcmVudE5vZGUiLCJ1bnNoaWZ0IiwiUG9pbnQiLCJjb25zdHJ1Y3RvciIsIngiLCJ5IiwiYWRkIiwicCIsInN1YiIsIm11bHQiLCJrIiwibmVnYXRpdmUiLCJjb21wYXJlIiwiY2xvbmUiLCJ0b1N0cmluZyIsImVsZW1lbnRPZmZzZXQiLCJwYXJlbnQiLCJvZmZzZXRQYXJlbnQiLCJvZmZzZXRMZWZ0IiwiY2xpZW50TGVmdCIsIm9mZnNldFRvcCIsImNsaWVudFRvcCIsImNvbnNpZGVyT2Zmc2V0RWxlbWVudHMiLCJwb3AiLCJyZWR1Y2UiLCJzdW0iLCJlbGVtZW50Qm91bmRpbmdPZmZzZXQiLCJlbGVtZW50UmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInBhcmVudFJlY3QiLCJsZWZ0IiwidG9wIiwiZWxlbWVudFNpemUiLCJ3aWR0aCIsImhlaWdodCIsIlJlY3RhbmdsZSIsInBvc2l0aW9uIiwic2l6ZSIsImdldFAxIiwiZ2V0UDIiLCJnZXRQMyIsImdldFA0IiwiZ2V0Q2VudGVyIiwib3IiLCJyZWN0IiwiTWF0aCIsIm1pbiIsIm1heCIsImFuZCIsImluY2x1ZGVQb2ludCIsImluY2x1ZGVSZWN0YW5nbGUiLCJyZWN0YW5nbGUiLCJtb3ZlVG9Cb3VuZCIsImF4aXMiLCJzZWxBeGlzIiwiY3Jvc3NSZWN0YW5nbGUiLCJ0aGlzQ2VudGVyIiwicmVjdENlbnRlciIsInNpZ24iLCJvZmZzZXQiLCJnZXRTcXVhcmUiLCJzdHlsZUFwcGx5IiwiZWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzdHlsZSIsImdyb3d0aCIsImdldE1pblNpZGUiLCJmcm9tRWxlbWVudCIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsImlzQ29uc2lkZXJUcmFuc2xhdGUiLCJFdmVudEVtaXR0ZXIiLCJvcHRpb25zIiwiZXZlbnRzIiwib24iLCJldmVudE5hbWUiLCJmbiIsIk9iamVjdCIsImVudHJpZXMiLCJlbWl0IiwiaW50ZXJydXB0ZWQiLCJfbGVuIiwiYXJncyIsIkFycmF5IiwiX2tleSIsImZ1bmMiLCJzbGljZSIsImludGVycnVwdCIsImxpc3RlbmVycyIsInB1c2giLCJvZmYiLCJwcmVwZW5kT24iLCJvbmNlIiwiX3RoaXMiLCJ3cmFwcGVyIiwibGlzdGVuZXIiLCJpbmRleCIsImZpbmRJbmRleCIsInNwbGljZSIsInVuc3Vic2NyaWJlIiwicmVzZXRFbWl0dGVyIiwicmVzZXRPbiIsImFycmF5IiwidmFsIiwiaSIsInJhbmdlIiwic3RhcnQiLCJzdG9wIiwic3RlcCIsInJlc3VsdCIsImRpc3BhdGNoRG9tRXZlbnQiLCJkZXRhaWwiLCJkaXNwYXRjaEV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJidWJibGVzIiwiZ2V0RGlzdGFuY2UiLCJwMSIsInAyIiwiZHgiLCJkeSIsInNxcnQiLCJnZXRYRGlmZmVyZW5jZSIsImFicyIsImdldFlEaWZmZXJlbmNlIiwidHJhbnNmb3JtZWRTcGFjZURpc3RhbmNlRmFjdG9yeSIsInBvdyIsImluZGV4T2ZOZWFyZXN0UG9pbnQiLCJhcnIiLCJyYWRpdXMiLCJnZXREaXN0YW5jZUZ1bmMiLCJ0ZW1wIiwiZGlyZWN0Q3Jvc3NpbmciLCJMMVAxIiwiTDFQMiIsIkwyUDEiLCJMMlAyIiwiazEiLCJrMiIsImIxIiwiYjIiLCJib3VuZFRvTGluZSIsIkEiLCJCIiwiUCIsIkFQIiwiQUIiLCJhYjIiLCJhcF9hYiIsInQiLCJnZXRQb2ludE9uTGluZUJ5TGVuZ2h0IiwiTFAxIiwiTFAyIiwibGVuZ2h0IiwicGVyY2VudCIsImFkZFBvaW50VG9Cb3VuZFBvaW50cyIsImJvdW5kcG9pbnRzIiwicG9pbnQiLCJpc1JpZ2h0IiwiZmlsdGVyIiwiYlBvaW50IiwiQmFzaWNTdHJhdGVneSIsImJvdW5kUmVjdCIsIk5vdENyb3NzaW5nU3RyYXRlZ3kiLCJwb3NpdGlvbmluZyIsInJlY3RhbmdsZUxpc3QiLCJpbmRleGVzT2ZOZXdzIiwic3RhdGljUmVjdGFuZ2xlSW5kZXhlcyIsImluZGV4ZXMiLCJfcmVjdCIsImluZGV4T2YiLCJmb3JFYWNoIiwicmVtb3ZhYmxlIiwiaW5kZXhPZlN0YXRpYyIsInN0YXRpY1JlY3QiLCJzb21lIiwic29ydGluZyIsIm9kbERyYWdnYWJsZXNMaXN0IiwibmV3RHJhZ2dhYmxlcyIsImluZGV4T2ZOZXdzIiwiZHJhZ2dhYmxlcyIsImNvbmNhdCIsImRyYWdnYWJsZSIsIkZsb2F0TGVmdFN0cmF0ZWd5IiwiYXNzaWduIiwicGFkZGluZ1RvcExlZnQiLCJwYWRkaW5nQm90dG9tUmlnaHQiLCJ5R2FwQmV0d2VlbkRyYWdnYWJsZXMiLCJnZXRQb3NpdGlvbiIsIl9pbmRleGVzT2ZOZXdzIiwicmVjdFAyIiwiYm91bmRhcnlQb2ludHMiLCJyZWN0SW5kZXgiLCJpc1ZhbGlkIiwibmV3TGlzdCIsImxpc3RPbGRQb3NpdGlvbiIsIm1hcCIsIm5ld0RyYWdnYWJsZSIsIkZsb2F0UmlnaHRTdHJhdGVneSIsInBhZGRpbmdUb3BSaWdodCIsInBhZGRpbmdCb3R0b21MZWZ0IiwicGFkZGluZ0JvdHRvbU5lZ0xlZnQiLCJnZXRBbmdsZURpZmYiLCJhbHBoYSIsImJldGEiLCJtaW5BbmdsZSIsIm1heEFuZ2xlIiwiUEkiLCJnZXRBbmdsZSIsImRpZmYiLCJub3JtYWxpemVBbmdsZSIsImF0YW4yIiwiYm91bmRBbmdsZSIsImRtaW4iLCJkbWF4IiwiZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtIiwiYW5nbGUiLCJjZW50ZXIiLCJjb3MiLCJzaW4iLCJCb3VuZCIsImJvdW5kIiwiX3NpemUiLCJyZWZyZXNoIiwiYm91bmRpbmciLCJpbnN0YW5jZSIsImJpbmQiLCJCb3VuZFRvUmVjdGFuZ2xlIiwiY2FsY1BvaW50IiwiQm91bmRUb0VsZW1lbnQiLCJjb250YWluZXIiLCJCb3VuZFRvTGluZVgiLCJzdGFydFkiLCJlbmRZIiwiQm91bmRUb0xpbmVZIiwic3RhcnRYIiwiZW5kWCIsIkJvdW5kVG9MaW5lIiwic3RhcnRQb2ludCIsImVuZFBvaW50Iiwic29tZUsiLCJjb3NCZXRhIiwic2luQmV0YSIsInBvaW50MiIsIm5ld0VuZFBvaW50IiwicG9pbnRDcm9zc2luZyIsIkJvdW5kVG9DaXJjbGUiLCJCb3VuZFRvQXJjIiwic3RhcnRBbmdsZSIsImVuZEFuZ2xlIiwiX3N0YXJ0QW5nbGUiLCJfZW5kQW5nbGUiLCJhZGRUb0RlZmF1bHRTY29wZSIsInRhcmdldCIsImRlZmF1bHRTY29wZSIsImFkZFRhcmdldCIsIlRhcmdldCIsInRpbWVFbmQiLCJ0aW1lRXhjYW5nZSIsInBvc2l0aW9uaW5nU3RyYXRlZ3kiLCJzdHJhdGVneSIsImdldFJlY3RhbmdsZSIsInVuc3Vic2NyaWJlcyIsIndhdGNoRHJhZ2dhYmxlIiwiZW1pdHRlciIsInN0YXJ0Qm91bmRpbmciLCJpbml0IiwiaW5kZXhlc09mTmV3Iiwib2xkRHJhZ2dhYmxlcyIsInJlY3RhbmdsZXMiLCJpbm5lckRyYWdnYWJsZXMiLCJzZXRQb3NpdGlvbiIsImVtaXRUYXJnZXRFdmVudCIsImNhdGNoRHJhZ2dhYmxlIiwidGFyZ2V0UmVjdGFuZ2xlIiwiZHJhZ2dhYmxlU3F1YXJlIiwiZ2V0U2l6ZSIsImRlc3Ryb3kiLCJzY29wZXMiLCJzY29wZSIsInJlbW92ZUl0ZW0iLCJ0YXJnZXRzIiwib25FbmQiLCJuZXdEcmFnZ2FibGVzSW5kZXgiLCJ0aW1lIiwibW92ZSIsImluaXRpYWxQb3NpdGlvbiIsInB1c2hJbm5lckRyYWdnYWJsZSIsImluY2x1ZGVzIiwicmVtb3ZlIiwicmVzZXQiLCJnZXRTb3J0ZWREcmFnZ2FibGVzIiwidHlwZSIsImRvbUV2ZW50cyIsImRvbVR5cGUiLCJyZXBsYWNlIiwibGV0dGVyIiwidG9Mb3dlckNhc2UiLCJfY29udGFpbmVyIiwiU2NvcGUiLCJkcmFnRW5kQWN0aW9uIiwiYWRkRHJhZ2dhYmxlIiwic2hvdFRhcmdldHMiLCJzb3J0IiwiYSIsImIiLCJwaW5Qb3NpdGlvbiIsInBvc2l0aW9ucyIsIm1lc3NhZ2UiLCJ0YXJnZXRJbmRleGVzIiwiY3VycmVudFNjb3BlIiwiYWRkRHJhZ2dhYmxlVG9TY29wZSIsIkRyYWdnYWJsZSIsImFkZFRhcmdldFRvU2NvcGUiLCJjYWxsIiwidGhyb3R0bGUiLCJ3YWl0IiwibGFzdFRpbWUiLCJleGVjdXRlZEZ1bmN0aW9uIiwiY29udGV4dCIsIm5vdyIsIkRhdGUiLCJhcHBseSIsInRocm90dGxlZERyYWdPdmVyIiwiY2FsbGJhY2siLCJkdXJhdGlvbiIsInRocm90dGxlZENhbGxiYWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInBhc3NpdmVGYWxzZSIsInBhc3NpdmUiLCJpc1RvdWNoIiwibmF2aWdhdG9yIiwibWF4VG91Y2hQb2ludHMiLCJtb3VzZUV2ZW50cyIsImVuZCIsInRvdWNoRXZlbnRzIiwidHJhbnNmb3JtUHJvcGVydHkiLCJ0cmFuc2l0aW9uUHJvcGVydHkiLCJnZXRUb3VjaEJ5SUQiLCJ0b3VjaElkIiwiY2hhbmdlZFRvdWNoZXMiLCJpZGVudGlmaWVyIiwicHJldmVudERvdWJsZUluaXQiLCJleGlzdGluZyIsImNvcHlTdHlsZXMiLCJzb3VyY2UiLCJkZXN0aW5hdGlvbiIsImNzIiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImtleSIsImNoaWxkcmVuIiwiX2VuYWJsZSIsInN0YXJ0UG9zaXRpb25pbmciLCJzdGFydExpc3RlbmluZyIsIl9zZXREZWZhdWx0VHJhbnNpdGlvbiIsImlzQ29uc2lkZXJUcmFuc2Zvcm1PZmZzZXQiLCJwaW5uZWRQb3NpdGlvbiIsIl9kcmFnU3RhcnQiLCJkcmFnU3RhcnQiLCJfZHJhZ01vdmUiLCJkcmFnTW92ZSIsIl9kcmFnRW5kIiwiZHJhZ0VuZCIsIl9uYXRpdmVEcmFnU3RhcnQiLCJuYXRpdmVEcmFnU3RhcnQiLCJfbmF0aXZlRHJhZ092ZXIiLCJuYXRpdmVEcmFnT3ZlciIsImRyYWdPdmVyVGhyb3R0bGVEdXJhdGlvbiIsIl9uYXRpdmVEcmFnRW5kIiwibmF0aXZlRHJhZ0VuZCIsIl9uYXRpdmVEcm9wIiwibmF0aXZlRHJvcCIsIl9zY3JvbGwiLCJvblNjcm9sbCIsImhhbmRsZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiX3RyYW5zZm9ybVBvc2l0aW9uIiwiX3NldFRyYW5zaXRpb24iLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbkNzcyIsInRlc3QiLCJfc2V0VHJhbnNsYXRlIiwidHJhbnNsYXRlQ3NzIiwidHJhbnNmb3JtIiwic2hvdWxkUmVtb3ZlWmVyb1RyYW5zbGF0ZSIsImlzU2lsZW50IiwiZW1pdERyYWdFdmVudCIsInNpbGVudCIsInJlc2V0UG9zaXRpb25Ub0luaXRpYWwiLCJyZWZyZXNoUG9zaXRpb24iLCJkZXRlcm1pbmVEaXJlY3Rpb24iLCJfcHJldmlvdXNEaXJlY3Rpb25Qb3NpdGlvbiIsIl9zdGFydFBvc2l0aW9uIiwibGVmdERpcmVjdGlvbiIsInJpZ2h0RGlyZWN0aW9uIiwidXBEaXJlY3Rpb24iLCJkb3duRGlyZWN0aW9uIiwic2VlbXNTY3JvbGxpbmciLCJfc3RhcnRUb3VjaFRpbWVzdGFtcCIsInRvdWNoRHJhZ2dpbmdUaHJlc2hvbGQiLCJzaG91bGRVc2VOYXRpdmVEcmFnQW5kRHJvcCIsImlzVG91Y2hFdmVudCIsIm5hdGl2ZURyYWdBbmREcm9wIiwiZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wT25Ub3VjaCIsInN0b3BQcm9wYWdhdGlvbk9uRHJhZ1N0YXJ0Iiwic3RvcFByb3BhZ2F0aW9uIiwiVG91Y2hFdmVudCIsInRvdWNoUG9pbnQiLCJfc3RhcnRUb3VjaFBvaW50IiwicGFnZVgiLCJjbGllbnRYIiwicGFnZVkiLCJjbGllbnRZIiwiX3RvdWNoSWQiLCJfc3RhcnRXaW5kb3dTY3JvbGxQb2ludCIsIndpbmRvd1Njcm9sbFBvaW50IiwiX3N0YXJ0U2Nyb2xsRWxlbWVudHNPZmZzZXQiLCJzY3JvbGxFbGVtZW50c09mZnNldCIsIkhUTUxJbnB1dEVsZW1lbnQiLCJmb2N1cyIsIl9zdGFydFBhcmVudHNTY3JvbGxPZmZzZXQiLCJwYXJlbnRzU2Nyb2xsT2Zmc2V0IiwiZW11bGF0ZU9uRmlyc3RNb3ZlIiwiY2FuY2VsRHJhZ2dpbmciLCJlbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3AiLCJjYW5jZWxFbXVsYXRpb24iLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2Nyb2xsRWxlbWVudHMiLCJkcmFnU3RhcnRUaHJlc2hvbGQiLCJfZHJhZ1N0YXJ0UGVuZGluZyIsInRvdWNoIiwiaXNEcmFnZ2luZyIsImNsYXNzTGlzdCIsInNldFRpbWVvdXQiLCJfZXZlbnQiLCJkYXRhVHJhbnNmZXIiLCJzZXREYXRhIiwiZWZmZWN0QWxsb3dlZCIsImRyb3BFZmZlY3QiLCJyZW1vdmVBdHRyaWJ1dGUiLCJjb250YWluZXJSZWN0IiwiY2xvbmVkRWxlbWVudCIsImNsb25lTm9kZSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImVtdWxhdGlvbkRyYWdnYWJsZSIsImRyYWc6bW92ZSIsImNvbnRhaW5lclJlY3RQb2ludCIsImRyYWc6ZW5kIiwicmVtb3ZlQ2hpbGQiLCJfaGFuZGxlciIsImNvbnNpZGVyVHJhbnNmb3JtT2Zmc2V0Iiwic2Nyb2xsWCIsInNjcm9sbFkiLCJzY3JvbGxSb290Q29udGFpbmVyIiwiX2NhY2hlZFNjcm9sbEVsZW1lbnRzIiwic2Nyb2xsTGVmdCIsInNjcm9sbFRvcCIsInBhcmVudHMiLCJfY2FjaGVkUGFyZW50cyIsImVuYWJsZSIsImRlYm91bmNlIiwiaW1tZWRpYXRlIiwidGltZW91dCIsImxhdGVyIiwiY2xlYXJUaW1lb3V0IiwiTGlzdCIsImNoYW5nZWREdXJpbmdJdGVyYXRpb24iLCJNYXAiLCJyZXNpemVPYnNlcnZlciIsIlJlc2l6ZU9ic2VydmVyIiwib25SZXNpemUiLCJvYnNlcnZlIiwicmVvcmRlck9uQ2hhbmdlIiwiaW5pdERyYWdnYWJsZSIsImxpc3RlblRvIiwib25Nb3ZlIiwiaGFzIiwic2V0IiwiZ2V0IiwicmVsZWFzZURyYWdnYWJsZSIsInVub2JzZXJ2ZSIsImRlbGV0ZSIsInN3YXBwaW5nRGlzYWJsZWQiLCJzb3J0ZWREcmFnZ2FibGVzIiwicGlubmVkUG9zaXRpb25zIiwiY3VycmVudEluZGV4IiwidGFyZ2V0SW5kZXgiLCJkaXN0YW5jZUZ1bmMiLCJlbWl0TGlzdEV2ZW50IiwicmVvcmRlckVsZW1lbnRzIiwibW92ZWREcmFnZ2FibGUiLCJuZXh0IiwiaW5zZXJ0QmVmb3JlIiwiZCIsImxpc3QiLCJnZXRDdXJyZW50UGlubmVkUG9zaXRpb25zIiwiaW5pdGlhbFBvc2l0aW9ucyIsImoiLCJjbGVhciIsImRyYWdnYWJsZUEiLCJkcmFnZ2FibGVCIiwiX3N3YXBwaW5nRGlzYWJsZWQiLCJkaXNhYmxlZCIsImFycmF5TW92ZSIsImZyb20iLCJ0byIsIkJ1YmJsaW5nTGlzdCIsImF1dG9EZXRlY3RHYXAiLCJfZ2FwIiwiZXhwbGljaXRHYXAiLCJzb3J0ZWQiLCJpc0Nvbm5lY3RlZCIsImN1cnJlbnQiLCJhdXRvRGV0ZWN0U3RhcnRQb3NpdGlvbiIsInN0YXJ0UG9zaXRpb24iLCJvbkRyYWdTdGFydCIsImNhY2hlZFNvcnRlZERyYWdnYWJsZXMiLCJpbmRleE9mQWN0aXZlRHJhZ2dhYmxlIiwicHJldkRyYWdnYWJsZSIsIm5leHREcmFnZ2FibGUiLCJjdXJyZW50UG9zaXRpb24iLCJjdXJyZW50T3JkZXIiLCJpc01vdmluZ0JhY2t3YXJkIiwicHJldk5ld1Bvc2l0aW9uIiwibmV4dFBvc2l0aW9uIiwiY3Jvc3NBeGlzIiwiaXNNb3ZpbmdGb3J3YXJkIiwiZHJhZ2dhYmxlTmV3UG9zaXRpb24iLCJidWJibGluZyIsImN1cnJlbnREcmFnZ2FibGUiLCJnYXAiLCJ2ZXJ0aWNhbEdhcCIsImdhcFZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7RUFBZSxTQUFTQSxlQUFlQSxDQUFDQyxZQUFZLEVBQUVDLFdBQVcsRUFBRTtJQUNsRSxNQUFNQyxLQUFLLEdBQUcsRUFBRTtJQUNmLElBQUlDLE9BQU8sR0FBR0gsWUFBWTtFQUUxQixFQUFBLE9BQU1HLE9BQU8sQ0FBQ0MsVUFBVSxJQUFJRCxPQUFPLEtBQUtGLFdBQVcsRUFBRTtFQUNuREMsSUFBQUEsS0FBSyxDQUFDRyxPQUFPLENBQUNGLE9BQU8sQ0FBQ0MsVUFBVSxDQUFDO01BQ2pDRCxPQUFPLEdBQUdBLE9BQU8sQ0FBQ0MsVUFBVTtFQUM5QjtFQUVBLEVBQUEsT0FBT0YsS0FBSztFQUNkOztFQ1JBO0VBQ2UsTUFBTUksS0FBSyxDQUFDO0VBQ3pCO0VBQ0Y7RUFDQTtFQUNBO0VBQ0E7RUFDRUMsRUFBQUEsV0FBV0EsQ0FBQ0MsQ0FBQyxFQUFFQyxDQUFDLEVBQUU7TUFDaEIsSUFBSSxDQUFDRCxDQUFDLEdBQUdBLENBQUM7TUFDVixJ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
