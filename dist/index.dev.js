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
  Target.emitter = new EventEmitter();
  Target.emitter.on('target:create', addToDefaultScope$1);

  const scopes = [];
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
  function scope(fn) {
    const currentScope = new Scope();
    const addDraggableToScope = function (draggable) {
      currentScope.addDraggable(draggable);
      Draggable.emitter.interrupt();
    };
    const addTargetToScope = function (target) {
      currentScope.addTarget(target);
      Target.emitter.interrupt();
    };
    const offDraggable = Draggable.emitter.prependOn('draggable:create', addDraggableToScope);
    const offTarget = Target.emitter.prependOn('target:create', addTargetToScope);
    try {
      fn.call();
    } finally {
      offDraggable();
      offTarget();
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
      this._dragEndActions = [];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZGV2LmpzIiwic291cmNlcyI6WyIuLi9zcmMvdXRpbHMvZ2V0LXBhcmVudHMtY2hhaW4uanMiLCIuLi9zcmMvZ2VvbWV0cnkvcG9pbnQuanMiLCIuLi9zcmMvZ2VvbWV0cnkvcmVjdGFuZ2xlLmpzIiwiLi4vc3JjL2V2ZW50RW1pdHRlci5qcyIsIi4uL3NyYy91dGlscy9yZW1vdmUtYXJyYXktaXRlbS5qcyIsIi4uL3NyYy91dGlscy9yYW5nZS5qcyIsIi4uL3NyYy91dGlscy9kaXNwYXRjaC1kb20tZXZlbnQuanMiLCIuLi9zcmMvZ2VvbWV0cnkvZGlzdGFuY2VzLmpzIiwiLi4vc3JjL2dlb21ldHJ5L2JvdW5kcy5qcyIsIi4uL3NyYy9wb3NpdGlvbmluZy5qcyIsIi4uL3NyYy9nZW9tZXRyeS9hbmdsZXMuanMiLCIuLi9zcmMvYm91bmRpbmcuanMiLCIuLi9zcmMvdGFyZ2V0LmpzIiwiLi4vc3JjL3Njb3BlLmpzIiwiLi4vc3JjL3V0aWxzL3Rocm90dGxlLmpzIiwiLi4vc3JjL2RyYWdnYWJsZS5qcyIsIi4uL3NyYy91dGlscy9kZWJvdW5jZS5qcyIsIi4uL3NyYy9saXN0LmpzIiwiLi4vc3JjL2J1YmJsaW5nTGlzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRQYXJlbnRzQ2hhaW4oY2hpbGRFbGVtZW50LCByb290RWxlbWVudCkge1xuXHRjb25zdCBjaGFpbiA9IFtdXG4gIGxldCBlbGVtZW50ID0gY2hpbGRFbGVtZW50XG5cbiAgd2hpbGUoZWxlbWVudC5wYXJlbnROb2RlICYmIGVsZW1lbnQgIT09IHJvb3RFbGVtZW50KSB7XG4gICAgY2hhaW4udW5zaGlmdChlbGVtZW50LnBhcmVudE5vZGUpXG4gICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZVxuICB9XG5cbiAgcmV0dXJuIGNoYWluXG59XG4iLCJpbXBvcnQgZ2V0UGFyZW50c0NoYWluIGZyb20gJy4uL3V0aWxzL2dldC1wYXJlbnRzLWNoYWluJ1xuXG4vKiogQ2xhc3MgcmVwcmVzZW50aW5nIGEgcG9pbnQuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2ludCB7XG4gIC8qKlxuICAqIENyZWF0ZSBhIHBvaW50LlxuICAqIEBwYXJhbSB7bnVtYmVyfSB4IC0gVGhlIHggdmFsdWUuXG4gICogQHBhcmFtIHtudW1iZXJ9IHkgLSBUaGUgeSB2YWx1ZS5cbiAgKi9cbiAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgIHRoaXMueCA9IHhcbiAgICB0aGlzLnkgPSB5XG4gIH1cblxuICBhZGQocCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54ICsgcC54LCB0aGlzLnkgKyBwLnkpXG4gIH1cblxuICBzdWIocCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54IC0gcC54LCB0aGlzLnkgLSBwLnkpXG4gIH1cblxuICBtdWx0KGspIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCAqIGssIHRoaXMueSAqIGspXG4gIH1cblxuICBuZWdhdGl2ZSgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KC10aGlzLngsIC10aGlzLnkpXG4gIH1cblxuICBjb21wYXJlKHApIHtcbiAgICByZXR1cm4gKHRoaXMueCA9PT0gcC54ICYmIHRoaXMueSA9PT0gcC55KVxuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLngsIHRoaXMueSlcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiBge3g9JHt0aGlzLnh9LHk9JHt0aGlzLnl9fWBcbiAgfVxuXG4gIHN0YXRpYyBlbGVtZW50T2Zmc2V0KGVsZW1lbnQsIHBhcmVudCkge1xuICAgIHBhcmVudCA9IHBhcmVudCB8fCBlbGVtZW50LnBhcmVudE5vZGVcbiAgICBpZiAocGFyZW50ID09PSBlbGVtZW50KSB7XG4gICAgICByZXR1cm4gbmV3IFBvaW50KDAsIDApO1xuICAgIH0gZWxzZSBpZiAocGFyZW50ID09PSBlbGVtZW50Lm9mZnNldFBhcmVudCkge1xuICAgICAgcmV0dXJuIG5ldyBQb2ludChcbiAgICAgICAgZWxlbWVudC5vZmZzZXRMZWZ0ICsgcGFyZW50LmNsaWVudExlZnQsXG4gICAgICAgIGVsZW1lbnQub2Zmc2V0VG9wICsgcGFyZW50LmNsaWVudFRvcFxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjb25zaWRlck9mZnNldEVsZW1lbnRzID0gW2VsZW1lbnQsIGdldFBhcmVudHNDaGFpbihlbGVtZW50LCBwYXJlbnQpLnBvcCgpXVxuICAgICAgcmV0dXJuIG5ldyBQb2ludChcbiAgICAgICAgY29uc2lkZXJPZmZzZXRFbGVtZW50cy5yZWR1Y2UoKHN1bSwgcCkgPT4gc3VtICsgcC5vZmZzZXRMZWZ0LCAwKSArIHBhcmVudC5jbGllbnRMZWZ0LFxuICAgICAgICBjb25zaWRlck9mZnNldEVsZW1lbnRzLnJlZHVjZSgoc3VtLCBwKSA9PiBzdW0gKyBwLm9mZnNldFRvcCwgMCkgKyBwYXJlbnQuY2xpZW50VG9wXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGVsZW1lbnRCb3VuZGluZ09mZnNldChlbGVtZW50LCBwYXJlbnQpIHtcbiAgICBwYXJlbnQgPSBwYXJlbnQgfHwgZWxlbWVudC5wYXJlbnROb2RlXG4gICAgY29uc3QgZWxlbWVudFJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgY29uc3QgcGFyZW50UmVjdCA9IHBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIHJldHVybiBuZXcgUG9pbnQoXG4gICAgICBlbGVtZW50UmVjdC5sZWZ0IC0gcGFyZW50UmVjdC5sZWZ0LFxuICAgICAgZWxlbWVudFJlY3QudG9wIC0gcGFyZW50UmVjdC50b3BcbiAgICApXG4gIH1cblxuICBzdGF0aWMgZWxlbWVudFNpemUoZWxlbWVudCkge1xuICAgIGNvbnN0IGVsZW1lbnRSZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIHJldHVybiBuZXcgUG9pbnQoXG4gICAgICBlbGVtZW50UmVjdC53aWR0aCxcbiAgICAgIGVsZW1lbnRSZWN0LmhlaWdodFxuICAgIClcbiAgfVxufVxuIiwiaW1wb3J0IFBvaW50IGZyb20gJy4vcG9pbnQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY3RhbmdsZSB7XG4gIGNvbnN0cnVjdG9yKHBvc2l0aW9uLCBzaXplKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgdGhpcy5zaXplID0gc2l6ZVxuICB9XG5cbiAgZ2V0UDEoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25cbiAgfVxuXG4gIGdldFAyKCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHRoaXMucG9zaXRpb24ueSlcbiAgfVxuXG4gIGdldFAzKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLnNpemUpXG4gIH1cblxuICBnZXRQNCgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnkpXG4gIH1cblxuICBnZXRDZW50ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb24uYWRkKHRoaXMuc2l6ZS5tdWx0KDAuNSkpXG4gIH1cblxuICBvcihyZWN0KSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBuZXcgUG9pbnQoTWF0aC5taW4odGhpcy5wb3NpdGlvbi54LCByZWN0LnBvc2l0aW9uLngpLCBNYXRoLm1pbih0aGlzLnBvc2l0aW9uLnksIHJlY3QucG9zaXRpb24ueSkpXG4gICAgY29uc3Qgc2l6ZSA9IChuZXcgUG9pbnQoTWF0aC5tYXgodGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHJlY3QucG9zaXRpb24ueCArIHJlY3Quc2l6ZS54KSwgTWF0aC5tYXgodGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnksIHJlY3QucG9zaXRpb24ueSArIHJlY3Quc2l6ZS55KSkpLnN1Yihwb3NpdGlvbilcbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZShwb3NpdGlvbiwgc2l6ZSlcbiAgfVxuXG4gIGFuZChyZWN0KSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBuZXcgUG9pbnQoTWF0aC5tYXgodGhpcy5wb3NpdGlvbi54LCByZWN0LnBvc2l0aW9uLngpLCBNYXRoLm1heCh0aGlzLnBvc2l0aW9uLnksIHJlY3QucG9zaXRpb24ueSkpXG4gICAgY29uc3Qgc2l6ZSA9IChuZXcgUG9pbnQoTWF0aC5taW4odGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHJlY3QucG9zaXRpb24ueCArIHJlY3Quc2l6ZS54KSwgTWF0aC5taW4odGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnksIHJlY3QucG9zaXRpb24ueSArIHJlY3Quc2l6ZS55KSkpLnN1Yihwb3NpdGlvbilcbiAgICBpZiAoc2l6ZS54IDw9IDAgfHwgc2l6ZS55IDw9IDApIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHBvc2l0aW9uLCBzaXplKVxuICB9XG5cbiAgaW5jbHVkZVBvaW50KHApIHtcbiAgICByZXR1cm4gISh0aGlzLnBvc2l0aW9uLnggPiBwLnggfHwgdGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLnggPCBwLnggfHwgdGhpcy5wb3NpdGlvbi55ID4gcC55IHx8IHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55IDwgcC55KVxuICB9XG5cbiAgaW5jbHVkZVJlY3RhbmdsZShyZWN0YW5nbGUpIHtcbiAgICByZXR1cm4gdGhpcy5pbmNsdWRlUG9pbnQocmVjdGFuZ2xlLnBvc2l0aW9uKSAmJiB0aGlzLmluY2x1ZGVQb2ludChyZWN0YW5nbGUuZ2V0UDMoKSlcbiAgfVxuXG4gIG1vdmVUb0JvdW5kKHJlY3QsIGF4aXMpIHtcbiAgICBsZXQgc2VsQXhpcywgY3Jvc3NSZWN0YW5nbGVcbiAgICBpZiAoYXhpcykge1xuICAgICAgc2VsQXhpcyA9IGF4aXNcbiAgICB9IGVsc2Uge1xuICAgICAgY3Jvc3NSZWN0YW5nbGUgPSB0aGlzLmFuZChyZWN0KVxuICAgICAgaWYgKCFjcm9zc1JlY3RhbmdsZSkge1xuICAgICAgICByZXR1cm4gcmVjdFxuICAgICAgfVxuICAgICAgc2VsQXhpcyA9IGNyb3NzUmVjdGFuZ2xlLnNpemUueCA+IGNyb3NzUmVjdGFuZ2xlLnNpemUueSA/ICd5JyA6ICd4J1xuICAgIH1cbiAgICBjb25zdCB0aGlzQ2VudGVyID0gdGhpcy5nZXRDZW50ZXIoKVxuICAgIGNvbnN0IHJlY3RDZW50ZXIgPSByZWN0LmdldENlbnRlcigpXG4gICAgY29uc3Qgc2lnbiA9IHRoaXNDZW50ZXJbc2VsQXhpc10gPiByZWN0Q2VudGVyW3NlbEF4aXNdID8gLTEgOiAxXG4gICAgY29uc3Qgb2Zmc2V0ID0gc2lnbiA+IDAgPyB0aGlzLnBvc2l0aW9uW3NlbEF4aXNdICsgdGhpcy5zaXplW3NlbEF4aXNdIC0gcmVjdC5wb3NpdGlvbltzZWxBeGlzXSA6IHRoaXMucG9zaXRpb25bc2VsQXhpc10gLSAocmVjdC5wb3NpdGlvbltzZWxBeGlzXSArIHJlY3Quc2l6ZVtzZWxBeGlzXSlcbiAgICByZWN0LnBvc2l0aW9uW3NlbEF4aXNdID0gcmVjdC5wb3NpdGlvbltzZWxBeGlzXSArIG9mZnNldFxuICAgIHJldHVybiByZWN0XG4gIH1cblxuICBnZXRTcXVhcmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZS54ICogdGhpcy5zaXplLnlcbiAgfVxuXG4gIHN0eWxlQXBwbHkoZWwpIHtcbiAgICBlbCA9IGVsIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2luZCcpXG4gICAgZWwuc3R5bGUubGVmdCA9IHRoaXMucG9zaXRpb24ueCArICdweCdcbiAgICBlbC5zdHlsZS50b3AgPSB0aGlzLnBvc2l0aW9uLnkgKyAncHgnXG4gICAgZWwuc3R5bGUud2lkdGggPSB0aGlzLnNpemUueCArICdweCdcbiAgICBlbC5zdHlsZS5oZWlnaHQgPSB0aGlzLnNpemUueSArICdweCdcbiAgfVxuXG4gIGdyb3d0aChzaXplKSB7XG4gICAgdGhpcy5zaXplID0gdGhpcy5zaXplLmFkZChzaXplKVxuICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uLmFkZChzaXplLm11bHQoLTAuNSkpXG4gIH1cblxuICBnZXRNaW5TaWRlKCkge1xuICAgIHJldHVybiBNYXRoLm1pbih0aGlzLnNpemUueCwgdGhpcy5zaXplLnkpXG4gIH1cblxuICBzdGF0aWMgZnJvbUVsZW1lbnQoZWxlbWVudCwgcGFyZW50PWVsZW1lbnQucGFyZW50Tm9kZSwgaXNDb25zaWRlclRyYW5zbGF0ZT1mYWxzZSkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gaXNDb25zaWRlclRyYW5zbGF0ZVxuICAgICAgPyBQb2ludC5lbGVtZW50Qm91bmRpbmdPZmZzZXQoZWxlbWVudCwgcGFyZW50KVxuICAgICAgOiBQb2ludC5lbGVtZW50T2Zmc2V0KGVsZW1lbnQsIHBhcmVudClcbiAgICBjb25zdCBzaXplID0gUG9pbnQuZWxlbWVudFNpemUoZWxlbWVudClcbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZShwb3NpdGlvbiwgc2l6ZSlcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKG9wdGlvbnMgPSB7fSkge1xuICAgIHRoaXMuZXZlbnRzID0ge31cblxuICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMub24pIHtcbiAgICAgIGZvciAoY29uc3QgW2V2ZW50TmFtZSwgZm5dIG9mIE9iamVjdC5lbnRyaWVzKG9wdGlvbnMub24pKSB7XG4gICAgICAgIHRoaXMub24oZXZlbnROYW1lLCBmbilcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBlbWl0KGV2ZW50TmFtZSwgLi4uYXJncykge1xuICAgIHRoaXMuaW50ZXJydXB0ZWQgPSBmYWxzZVxuXG4gICAgaWYgKCF0aGlzLmV2ZW50c1tldmVudE5hbWVdKSByZXR1cm5cblxuICAgIC8vIEl0ZXJhdGUgb3ZlciBhIGNvcHkgc28gbGlzdGVuZXJzIGNhbiB1bnN1YnNjcmliZSB3aGlsZSB0aGUgZXZlbnQgaXMgYmVpbmcgZW1pdHRlZFxuICAgIGZvciAoY29uc3QgZnVuYyBvZiB0aGlzLmV2ZW50c1tldmVudE5hbWVdLnNsaWNlKCkpIHtcbiAgICAgIGZ1bmMoLi4uYXJncylcbiAgICAgIGlmICh0aGlzLmludGVycnVwdGVkKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGludGVycnVwdCgpIHtcbiAgICB0aGlzLmludGVycnVwdGVkID0gdHJ1ZVxuICB9XG5cbiAgb24oZXZlbnROYW1lLCBmbikge1xuICAgIHRoaXMubGlzdGVuZXJzKGV2ZW50TmFtZSkucHVzaChmbilcbiAgICByZXR1cm4gKCkgPT4gdGhpcy5vZmYoZXZlbnROYW1lLCBmbilcbiAgfVxuXG4gIHByZXBlbmRPbihldmVudE5hbWUsIGZuKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMoZXZlbnROYW1lKS51bnNoaWZ0KGZuKVxuICAgIHJldHVybiAoKSA9PiB0aGlzLm9mZihldmVudE5hbWUsIGZuKVxuICB9XG5cbiAgb25jZShldmVudE5hbWUsIGZuKSB7XG4gICAgY29uc3Qgd3JhcHBlciA9ICguLi5hcmdzKSA9PiB7XG4gICAgICB0aGlzLm9mZihldmVudE5hbWUsIHdyYXBwZXIpXG4gICAgICBmbiguLi5hcmdzKVxuICAgIH1cbiAgICB3cmFwcGVyLmxpc3RlbmVyID0gZm5cbiAgICByZXR1cm4gdGhpcy5vbihldmVudE5hbWUsIHdyYXBwZXIpXG4gIH1cblxuICBvZmYoZXZlbnROYW1lLCBmbikge1xuICAgIGlmICghdGhpcy5ldmVudHNbZXZlbnROYW1lXSkgcmV0dXJuXG5cbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0uZmluZEluZGV4KChsaXN0ZW5lcikgPT4gbGlzdGVuZXIgPT09IGZuIHx8IGxpc3RlbmVyLmxpc3RlbmVyID09PSBmbilcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLnNwbGljZShpbmRleCwgMSlcbiAgICB9XG4gIH1cblxuICAvLyBEZXByZWNhdGVkIGFsaWFzIGZvciBgb2ZmYFxuICB1bnN1YnNjcmliZShldmVudE5hbWUsIGZuKSB7XG4gICAgdGhpcy5vZmYoZXZlbnROYW1lLCBmbilcbiAgfVxuXG4gIGxpc3RlbmVycyhldmVudE5hbWUpIHtcbiAgICByZXR1cm4gKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gfHw9IFtdKVxuICB9XG5cbiAgcmVzZXRFbWl0dGVyICgpIHtcbiAgICB0aGlzLmV2ZW50cyA9IHt9XG4gIH1cblxuICByZXNldE9uKGV2ZW50TmFtZSkge1xuICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSBbXVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhcnJheSwgdmFsKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoYXJyYXlbaV0gPT09IHZhbCkge1xuICAgICAgYXJyYXkuc3BsaWNlKGksIDEpXG4gICAgICBpLS1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycmF5XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByYW5nZShzdGFydCwgc3RvcCwgc3RlcCkge1xuICBjb25zdCByZXN1bHQgPSBbXVxuICBpZiAodHlwZW9mIHN0b3AgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgc3RvcCA9IHN0YXJ0XG4gICAgc3RhcnQgPSAwXG4gIH1cbiAgaWYgKHR5cGVvZiBzdGVwID09PSAndW5kZWZpbmVkJykge1xuICAgIHN0ZXAgPSAxXG4gIH1cbiAgaWYgKChzdGVwID4gMCAmJiBzdGFydCA+PSBzdG9wKSB8fCAoc3RlcCA8IDAgJiYgc3RhcnQgPD0gc3RvcCkpIHtcbiAgICByZXR1cm4gW11cbiAgfVxuICBmb3IgKGxldCBpID0gc3RhcnQ7IHN0ZXAgPiAwID8gaSA8IHN0b3AgOiBpID4gc3RvcDsgaSArPSBzdGVwKSB7XG4gICAgcmVzdWx0LnB1c2goaSlcbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwYXRjaERvbUV2ZW50KGVsZW1lbnQsIGV2ZW50TmFtZSwgZGV0YWlsKSB7XG4gIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoZXZlbnROYW1lLCB7IGJ1YmJsZXM6IHRydWUsIGRldGFpbCB9KSlcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBnZXREaXN0YW5jZShwMSwgcDIpIHtcbiAgY29uc3QgZHggPSBwMS54IC0gcDIueCwgZHkgPSBwMS55IC0gcDIueVxuICByZXR1cm4gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0WERpZmZlcmVuY2UocDEsIHAyKSB7XG4gIHJldHVybiBNYXRoLmFicyhwMS54IC0gcDIueClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFlEaWZmZXJlbmNlKHAxLCBwMikge1xuICByZXR1cm4gTWF0aC5hYnMocDEueSAtIHAyLnkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5KG9wdGlvbnMpIHtcbiAgcmV0dXJuIChwMSwgcDIpID0+IHtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KFxuICAgICAgTWF0aC5wb3cob3B0aW9ucy54ICogTWF0aC5hYnMocDEueCAtIHAyLngpLCAyKSArXG4gICAgICBNYXRoLnBvdyhvcHRpb25zLnkgKiBNYXRoLmFicyhwMS55IC0gcDIueSksIDIpXG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmRleE9mTmVhcmVzdFBvaW50KGFyciwgdmFsLCByYWRpdXMsIGdldERpc3RhbmNlRnVuYz1nZXREaXN0YW5jZSkge1xuICBsZXQgc2l6ZSwgaW5kZXggPSAwLCBpLCB0ZW1wXG4gIGlmIChhcnIubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIC0xXG4gIH1cbiAgc2l6ZSA9IGdldERpc3RhbmNlRnVuYyhhcnJbMF0sIHZhbClcbiAgZm9yIChpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgIHRlbXAgPSBnZXREaXN0YW5jZUZ1bmMoYXJyW2ldLCB2YWwpXG4gICAgaWYgKHRlbXAgPCBzaXplKSB7XG4gICAgICBzaXplID0gdGVtcFxuICAgICAgaW5kZXggPSBpXG4gICAgfVxuICB9XG4gIGlmIChyYWRpdXMgPj0gMCAmJiBzaXplID4gcmFkaXVzKSB7XG4gICAgcmV0dXJuIC0xXG4gIH1cbiAgcmV0dXJuIGluZGV4XG59XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9wb2ludCdcbmltcG9ydCB7IGdldERpc3RhbmNlIH0gZnJvbSAnLi9kaXN0YW5jZXMnXG5cbmV4cG9ydCBmdW5jdGlvbiBjbGFtcChtaW4sIG1heCwgdmFsKSB7XG4gIHJldHVybiBNYXRoLm1heChtaW4sIE1hdGgubWluKG1heCwgdmFsKSlcbn1cblxuLy9SZXR1cm4gY3Jvc3NpbmcgcG9pbnQgb2YgdHdvIGxpbmVzXG5leHBvcnQgZnVuY3Rpb24gZGlyZWN0Q3Jvc3NpbmcoTDFQMSwgTDFQMiwgTDJQMSwgTDJQMikge1xuICBsZXQgdGVtcCwgazEsIGsyLCBiMSwgYjIsIHgsIHlcbiAgaWYgKEwyUDEueCA9PT0gTDJQMi54KSB7XG4gICAgdGVtcCA9IEwyUDFcbiAgICBMMlAxID0gTDFQMVxuICAgIEwxUDEgPSB0ZW1wXG4gICAgdGVtcCA9IEwyUDJcbiAgICBMMlAyID0gTDFQMlxuICAgIEwxUDIgPSB0ZW1wXG4gIH1cbiAgaWYgKEwxUDEueCA9PT0gTDFQMi54KSB7XG4gICAgazIgPSAoTDJQMi55IC0gTDJQMS55KSAvIChMMlAyLnggLSBMMlAxLngpXG4gICAgYjIgPSAoTDJQMi54ICogTDJQMS55IC0gTDJQMS54ICogTDJQMi55KSAvIChMMlAyLnggLSBMMlAxLngpXG4gICAgeCA9IEwxUDEueFxuICAgIHkgPSB4ICogazIgKyBiMlxuICAgIHJldHVybiBuZXcgUG9pbnQoeCwgeSlcbiAgfSBlbHNlIHtcbiAgICBrMSA9IChMMVAyLnkgLSBMMVAxLnkpIC8gKEwxUDIueCAtIEwxUDEueClcbiAgICBiMSA9IChMMVAyLnggKiBMMVAxLnkgLSBMMVAxLnggKiBMMVAyLnkpIC8gKEwxUDIueCAtIEwxUDEueClcbiAgICBrMiA9IChMMlAyLnkgLSBMMlAxLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICBiMiA9IChMMlAyLnggKiBMMlAxLnkgLSBMMlAxLnggKiBMMlAyLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICB4ID0gKGIxIC0gYjIpIC8gKGsyIC0gazEpXG4gICAgeSA9IHggKiBrMSArIGIxXG4gICAgcmV0dXJuIG5ldyBQb2ludCh4LCB5KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZFRvU2VnbWVudChMUDEsIExQMiwgUCkge1xuICBsZXQgeCwgeVxuICB4ID0gY2xhbXAoTWF0aC5taW4oTFAxLngsIExQMi54KSwgTWF0aC5tYXgoTFAxLngsIExQMi54KSwgUC54KVxuICBpZiAoeCAhPT0gUC54KSB7XG4gICAgeSA9ICh4ID09PSBMUDEueCkgPyBMUDEueSA6IExQMi55XG4gICAgUCA9IG5ldyBQb2ludCh4LCB5KVxuICB9XG5cbiAgeSA9IGNsYW1wKE1hdGgubWluKExQMS55LCBMUDIueSksIE1hdGgubWF4KExQMS55LCBMUDIueSksIFAueSlcbiAgaWYgKHkgIT09IFAueSkge1xuICAgIHggPSAoeSA9PT0gTFAxLnkpID8gTFAxLnggOiBMUDIueFxuICAgIFAgPSBuZXcgUG9pbnQoeCwgeSlcbiAgfVxuXG4gIHJldHVybiBQXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZFRvTGluZShBLCBCLCBQKSB7XG4gIGNvbnN0IEFQID0gbmV3IFBvaW50KFAueCAtIEEueCwgUC55IC0gQS55KSxcbiAgICBBQiA9IG5ldyBQb2ludChCLnggLSBBLngsIEIueSAtIEEueSksXG4gICAgYWIyID0gQUIueCAqIEFCLnggKyBBQi55ICogQUIueSxcbiAgICBhcF9hYiA9IEFQLnggKiBBQi54ICsgQVAueSAqIEFCLnksXG4gICAgdCA9IGFwX2FiIC8gYWIyXG4gIHJldHVybiBuZXcgUG9pbnQoQS54ICsgQUIueCAqIHQsIEEueSArIEFCLnkgKiB0KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9pbnRPbkxpbmUoTFAxLCBMUDIsIHBlcmNlbnQpIHtcbiAgY29uc3QgZHggPSBMUDIueCAtIExQMS54LCBkeSA9IExQMi55IC0gTFAxLnlcbiAgcmV0dXJuIG5ldyBQb2ludChMUDEueCArIHBlcmNlbnQgKiBkeCwgTFAxLnkgKyBwZXJjZW50ICogZHkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb2ludE9uTGluZUJ5TGVuZ2h0KExQMSwgTFAyLCBsZW5naHQpIHtcbiAgY29uc3QgZHggPSBMUDIueCAtIExQMS54XG4gIGNvbnN0IGR5ID0gTFAyLnkgLSBMUDEueVxuICBjb25zdCBwZXJjZW50ID0gbGVuZ2h0IC8gZ2V0RGlzdGFuY2UoTFAxLCBMUDIpXG4gIHJldHVybiBuZXcgUG9pbnQoTFAxLnggKyBwZXJjZW50ICogZHgsIExQMS55ICsgcGVyY2VudCAqIGR5KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkUG9pbnRUb0JvdW5kUG9pbnRzKGJvdW5kcG9pbnRzLCBwb2ludCwgaXNSaWdodCkge1xuICBjb25zdCByZXN1bHQgPSBib3VuZHBvaW50cy5maWx0ZXIoKGJQb2ludCkgPT4ge1xuICAgIHJldHVybiBiUG9pbnQueSA+IHBvaW50LnkgfHwgKGlzUmlnaHQgPyBiUG9pbnQueCA8IHBvaW50LnggOiBiUG9pbnQueCA+IHBvaW50LngpXG4gIH0pXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHQubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAocG9pbnQueSA8IHJlc3VsdFtpXS55KSB7XG4gICAgICByZXN1bHQuc3BsaWNlKGksIDAsIHBvaW50KVxuICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbiAgfVxuICByZXN1bHQucHVzaChwb2ludClcbiAgcmV0dXJuIHJlc3VsdFxufVxuIiwiaW1wb3J0IFBvaW50IGZyb20gJy4vZ2VvbWV0cnkvcG9pbnQnXG5pbXBvcnQgeyBhZGRQb2ludFRvQm91bmRQb2ludHMgfSBmcm9tICcuL2dlb21ldHJ5L2JvdW5kcydcblxuaW1wb3J0IHtcbiAgaW5kZXhPZk5lYXJlc3RQb2ludCxcbiAgZ2V0RGlzdGFuY2Vcbn0gZnJvbSAnLi9nZW9tZXRyeS9kaXN0YW5jZXMnXG5cbmNsYXNzIEJhc2ljU3RyYXRlZ3kge1xuICBjb25zdHJ1Y3RvcihyZWN0YW5nbGUsIG9wdGlvbnM9e30pIHtcbiAgICB0aGlzLnJlY3RhbmdsZSA9IHJlY3RhbmdsZVxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNcbiAgfVxuXG4gIGdldCBib3VuZFJlY3QgKCkge1xuICAgIHJldHVybiB0eXBlb2YgdGhpcy5yZWN0YW5nbGUgPT09ICdmdW5jdGlvbicgPyB0aGlzLnJlY3RhbmdsZSgpIDogdGhpcy5yZWN0YW5nbGVcbiAgfVxufVxuXG5jbGFzcyBOb3RDcm9zc2luZ1N0cmF0ZWd5IGV4dGVuZHMgQmFzaWNTdHJhdGVneSB7XG4gIHBvc2l0aW9uaW5nIChyZWN0YW5nbGVMaXN0LCBpbmRleGVzT2ZOZXdzKSB7XG4gICAgY29uc3Qgc3RhdGljUmVjdGFuZ2xlSW5kZXhlcyA9IHJlY3RhbmdsZUxpc3QucmVkdWNlKChpbmRleGVzLCBfcmVjdCwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChpbmRleGVzT2ZOZXdzLmluZGV4T2YoaW5kZXgpID09PSAtMSkge1xuICAgICAgICBpbmRleGVzLnB1c2goaW5kZXgpXG4gICAgICB9XG4gICAgICByZXR1cm4gaW5kZXhlc1xuICAgIH0sIFtdKVxuXG4gICAgaW5kZXhlc09mTmV3cy5mb3JFYWNoKChpbmRleCkgPT4ge1xuICAgICAgbGV0IHJlY3QgPSByZWN0YW5nbGVMaXN0W2luZGV4XVxuICAgICAgbGV0IHJlbW92YWJsZSA9IGZhbHNlXG5cbiAgICAgIHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMuZm9yRWFjaCgoaW5kZXhPZlN0YXRpYykgPT4ge1xuICAgICAgICBjb25zdCBzdGF0aWNSZWN0ID0gcmVjdGFuZ2xlTGlzdFtpbmRleE9mU3RhdGljXVxuICAgICAgICByZWN0ID0gc3RhdGljUmVjdC5tb3ZlVG9Cb3VuZChyZWN0KVxuICAgICAgfSlcblxuICAgICAgcmVtb3ZhYmxlID0gc3RhdGljUmVjdGFuZ2xlSW5kZXhlcy5zb21lKChpbmRleE9mU3RhdGljKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YXRpY1JlY3QgPSByZWN0YW5nbGVMaXN0W2luZGV4T2ZTdGF0aWNdXG4gICAgICAgIHJldHVybiAgISFzdGF0aWNSZWN0LmFuZChyZWN0KVxuICAgICAgfSkgfHwgcmVjdC5hbmQodGhpcy5ib3VuZFJlY3QpLmdldFNxdWFyZSgpICE9PSByZWN0LmdldFNxdWFyZSgpXG5cbiAgICAgIGlmIChyZW1vdmFibGUpIHtcbiAgICAgICAgcmVjdC5yZW1vdmFibGUgPSB0cnVlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0aWNSZWN0YW5nbGVJbmRleGVzLnB1c2goaW5kZXgpXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcmVjdGFuZ2xlTGlzdFxuICB9XG5cbiAgc29ydGluZyhvZGxEcmFnZ2FibGVzTGlzdCwgbmV3RHJhZ2dhYmxlcywgaW5kZXhPZk5ld3MpIHtcbiAgICBjb25zdCBkcmFnZ2FibGVzID0gb2RsRHJhZ2dhYmxlc0xpc3QuY29uY2F0KG5ld0RyYWdnYWJsZXMpXG4gICAgbmV3RHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGluZGV4T2ZOZXdzLnB1c2goZHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkpXG4gICAgfSlcbiAgICByZXR1cm4gZHJhZ2dhYmxlc1xuICB9XG59XG5cbmNsYXNzIEZsb2F0TGVmdFN0cmF0ZWd5IGV4dGVuZHMgQmFzaWNTdHJhdGVneSB7XG4gIGNvbnN0cnVjdG9yKHJlY3RhbmdsZSwgb3B0aW9ucz17fSkge1xuICAgIHN1cGVyKHJlY3RhbmdsZSwgb3B0aW9ucylcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHJlbW92YWJsZTogdHJ1ZVxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0aGlzLnJhZGl1cyA9IG9wdGlvbnMucmFkaXVzIHx8IDgwXG5cbiAgICB0aGlzLnBhZGRpbmdUb3BMZWZ0ID0gb3B0aW9ucy5wYWRkaW5nVG9wTGVmdCB8fCBuZXcgUG9pbnQoMCwgMClcbiAgICB0aGlzLnBhZGRpbmdCb3R0b21SaWdodCA9IG9wdGlvbnMucGFkZGluZ0JvdHRvbVJpZ2h0IHx8IG5ldyBQb2ludCgwLCAwKVxuICAgIHRoaXMueUdhcEJldHdlZW5EcmFnZ2FibGVzID0gb3B0aW9ucy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgfHwgMFxuXG4gICAgdGhpcy5nZXREaXN0YW5jZSA9IG9wdGlvbnMuZ2V0RGlzdGFuY2UgfHwgZ2V0RGlzdGFuY2VcbiAgICB0aGlzLmdldFBvc2l0aW9uID0gb3B0aW9ucy5nZXRQb3NpdGlvbiB8fCAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnBvc2l0aW9uKVxuICB9XG5cbiAgcG9zaXRpb25pbmcocmVjdGFuZ2xlTGlzdCwgX2luZGV4ZXNPZk5ld3MpIHtcbiAgICBjb25zdCBib3VuZFJlY3QgPSB0aGlzLmJvdW5kUmVjdFxuICAgIGNvbnN0IHJlY3RQMiA9IGJvdW5kUmVjdC5nZXRQMigpXG4gICAgbGV0IGJvdW5kYXJ5UG9pbnRzID0gW2JvdW5kUmVjdC5wb3NpdGlvbl1cblxuICAgIHJlY3RhbmdsZUxpc3QuZm9yRWFjaCgocmVjdCwgcmVjdEluZGV4KSA9PiB7XG4gICAgICBsZXQgcG9zaXRpb24sIGlzVmFsaWQgPSBmYWxzZVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib3VuZGFyeVBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBwb3NpdGlvbiA9IG5ldyBQb2ludChcbiAgICAgICAgICBib3VuZGFyeVBvaW50c1tpXS54ICsgdGhpcy5wYWRkaW5nVG9wTGVmdC54LFxuICAgICAgICAgIGkgPiAwID8gKGJvdW5kYXJ5UG9pbnRzW2kgLSAxXS55ICsgdGhpcy55R2FwQmV0d2VlbkRyYWdnYWJsZXMpIDogKGJvdW5kUmVjdC5wb3NpdGlvbi55ICsgdGhpcy5wYWRkaW5nVG9wTGVmdC55KVxuICAgICAgICApXG5cbiAgICAgICAgaXNWYWxpZCA9IChwb3NpdGlvbi54ICsgcmVjdC5zaXplLnggPCByZWN0UDIueClcblxuICAgICAgICBpZiAoaXNWYWxpZCkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICAgIHBvc2l0aW9uID0gbmV3IFBvaW50KFxuICAgICAgICAgIGJvdW5kUmVjdC5wb3NpdGlvbi54ICsgdGhpcy5wYWRkaW5nVG9wTGVmdC54LFxuICAgICAgICAgIGJvdW5kYXJ5UG9pbnRzW2JvdW5kYXJ5UG9pbnRzLmxlbmd0aCAtIDFdLnkgKyAocmVjdEluZGV4ID4gMCA/IHRoaXMueUdhcEJldHdlZW5EcmFnZ2FibGVzIDogdGhpcy5wYWRkaW5nVG9wTGVmdC55KVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHJlY3QucG9zaXRpb24gPSBwb3NpdGlvblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZW1vdmFibGUgJiYgcmVjdC5nZXRQMygpLnkgPiBib3VuZFJlY3QuZ2V0UDMoKS55KSB7XG4gICAgICAgIHJlY3QucmVtb3ZhYmxlID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBib3VuZGFyeVBvaW50cyA9IGFkZFBvaW50VG9Cb3VuZFBvaW50cyhib3VuZGFyeVBvaW50cywgcmVjdC5nZXRQMygpLmFkZCh0aGlzLnBhZGRpbmdCb3R0b21SaWdodCkpXG4gICAgfSlcbiAgICByZXR1cm4gcmVjdGFuZ2xlTGlzdFxuICB9XG5cbiAgc29ydGluZyhvZGxEcmFnZ2FibGVzTGlzdCwgbmV3RHJhZ2dhYmxlcywgaW5kZXhPZk5ld3MpIHtcbiAgICBjb25zdCBuZXdMaXN0ID0gb2RsRHJhZ2dhYmxlc0xpc3QuY29uY2F0KClcbiAgICBjb25zdCBsaXN0T2xkUG9zaXRpb24gPSBvZGxEcmFnZ2FibGVzTGlzdC5tYXAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLmdldFBvc2l0aW9uKCkpXG4gICAgbmV3RHJhZ2dhYmxlcy5mb3JFYWNoKChuZXdEcmFnZ2FibGUpID0+IHtcbiAgICAgIGxldCBpbmRleCA9IGluZGV4T2ZOZWFyZXN0UG9pbnQobGlzdE9sZFBvc2l0aW9uLCB0aGlzLmdldFBvc2l0aW9uKG5ld0RyYWdnYWJsZSksIHRoaXMucmFkaXVzLCB0aGlzLmdldERpc3RhbmNlKVxuICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICBpbmRleCA9IG5ld0xpc3QubGVuZ3RoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbmRleCA9IG5ld0xpc3QuaW5kZXhPZihvZGxEcmFnZ2FibGVzTGlzdFtpbmRleF0pXG4gICAgICB9XG4gICAgICBuZXdMaXN0LnNwbGljZShpbmRleCwgMCwgbmV3RHJhZ2dhYmxlKVxuICAgIH0pXG4gICAgbmV3RHJhZ2dhYmxlcy5mb3JFYWNoKChuZXdEcmFnZ2FibGUpID0+IHtcbiAgICAgIGluZGV4T2ZOZXdzLnB1c2gobmV3TGlzdC5pbmRleE9mKG5ld0RyYWdnYWJsZSkpXG4gICAgfSlcbiAgICByZXR1cm4gbmV3TGlzdFxuICB9XG59XG5cbmNsYXNzIEZsb2F0UmlnaHRTdHJhdGVneSBleHRlbmRzIEZsb2F0TGVmdFN0cmF0ZWd5IHtcbiAgY29uc3RydWN0b3IocmVjdGFuZ2xlLCBvcHRpb25zPXt9KSB7XG4gICAgc3VwZXIocmVjdGFuZ2xlLCBvcHRpb25zKVxuXG4gICAgdGhpcy5wYWRkaW5nVG9wUmlnaHQgPSBvcHRpb25zLnBhZGRpbmdUb3BSaWdodCB8fCBuZXcgUG9pbnQoNSwgNSlcbiAgICB0aGlzLnBhZGRpbmdCb3R0b21MZWZ0ID0gb3B0aW9ucy5wYWRkaW5nQm90dG9tTGVmdCB8fCBuZXcgUG9pbnQoMCwgMClcbiAgICB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyA9IG9wdGlvbnMueUdhcEJldHdlZW5EcmFnZ2FibGVzIHx8IDBcblxuICAgIHRoaXMucGFkZGluZ0JvdHRvbU5lZ0xlZnQgPSBuZXcgUG9pbnQoLXRoaXMucGFkZGluZ0JvdHRvbUxlZnQueCwgdGhpcy5wYWRkaW5nQm90dG9tTGVmdC55KVxuICB9XG5cbiAgcG9zaXRpb25pbmcocmVjdGFuZ2xlTGlzdCwgX2luZGV4ZXNPZk5ld3MpIHtcbiAgICBjb25zdCBib3VuZFJlY3QgPSB0aGlzLmJvdW5kUmVjdFxuICAgIGxldCBib3VuZGFyeVBvaW50cyA9IFtib3VuZFJlY3QuZ2V0UDIoKV1cblxuICAgIHJlY3RhbmdsZUxpc3QuZm9yRWFjaCgocmVjdCwgcmVjdEluZGV4KSA9PiB7XG4gICAgICBsZXQgcG9zaXRpb24sIGlzVmFsaWQgPSBmYWxzZVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib3VuZGFyeVBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBwb3NpdGlvbiA9IG5ldyBQb2ludChcbiAgICAgICAgICBib3VuZGFyeVBvaW50c1tpXS54IC0gcmVjdC5zaXplLnggLSB0aGlzLnBhZGRpbmdUb3BSaWdodC54LFxuICAgICAgICAgIGkgPiAwID8gKGJvdW5kYXJ5UG9pbnRzW2kgLSAxXS55ICsgdGhpcy55R2FwQmV0d2VlbkRyYWdnYWJsZXMpIDogKGJvdW5kUmVjdC5wb3NpdGlvbi55ICsgdGhpcy5wYWRkaW5nVG9wUmlnaHQueSlcbiAgICAgICAgKVxuXG4gICAgICAgIGlzVmFsaWQgPSAocG9zaXRpb24ueCA+IHJlY3QucG9zaXRpb24ueClcbiAgICAgICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgcG9zaXRpb24gPSBuZXcgUG9pbnQoXG4gICAgICAgICAgYm91bmRSZWN0LmdldFAyKCkueCAgLSByZWN0LnNpemUueCAtIHRoaXMucGFkZGluZ1RvcFJpZ2h0LngsXG4gICAgICAgICAgYm91bmRhcnlQb2ludHNbYm91bmRhcnlQb2ludHMubGVuZ3RoIC0gMV0ueSArIChyZWN0SW5kZXggPiAwID8gdGhpcy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgOiB0aGlzLnBhZGRpbmdUb3BSaWdodC55KVxuICAgICAgICApXG4gICAgICB9XG4gICAgICByZWN0LnBvc2l0aW9uID0gcG9zaXRpb25cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucmVtb3ZhYmxlICYmIHJlY3QuZ2V0UDQoKS55ID4gYm91bmRSZWN0LmdldFA0KCkueSkge1xuICAgICAgICByZWN0LnJlbW92YWJsZSA9IHRydWVcbiAgICAgIH1cbiAgICAgIGJvdW5kYXJ5UG9pbnRzID0gYWRkUG9pbnRUb0JvdW5kUG9pbnRzKGJvdW5kYXJ5UG9pbnRzLCByZWN0LmdldFA0KCkuYWRkKHRoaXMucGFkZGluZ0JvdHRvbU5lZ0xlZnQpLCB0cnVlKVxuICAgIH0pXG4gICAgcmV0dXJuIHJlY3RhbmdsZUxpc3RcbiAgfVxufVxuXG5leHBvcnQgeyBOb3RDcm9zc2luZ1N0cmF0ZWd5LCBGbG9hdExlZnRTdHJhdGVneSwgRmxvYXRSaWdodFN0cmF0ZWd5IH1cbiIsImltcG9ydCBQb2ludCBmcm9tICcuL3BvaW50J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QW5nbGVEaWZmKGFscGhhLCBiZXRhKSB7XG4gIGNvbnN0IG1pbkFuZ2xlID0gTWF0aC5taW4oYWxwaGEsIGJldGEpXG4gIGNvbnN0IG1heEFuZ2xlID0gIE1hdGgubWF4KGFscGhhLCBiZXRhKVxuICByZXR1cm4gTWF0aC5taW4obWF4QW5nbGUgLSBtaW5BbmdsZSwgbWluQW5nbGUgKyBNYXRoLlBJKjIgLSBtYXhBbmdsZSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFuZ2xlKHAxLCBwMikge1xuICBjb25zdCBkaWZmID0gcDIuc3ViKHAxKVxuICByZXR1cm4gbm9ybWFsaXplQW5nbGUoTWF0aC5hdGFuMihkaWZmLnksIGRpZmYueCkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b1JhZGlhbihhbmdsZSkge1xuICByZXR1cm4gKChhbmdsZSAlIDM2MCkgKiBNYXRoLlBJIC8gMTgwKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9EZWdyZWUoYW5nbGUpIHtcbiAgcmV0dXJuIChhbmdsZSAqIDE4MCAvIE1hdGguUEkpICUgMzYwXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZEFuZ2xlKG1pbiwgbWF4LCB2YWwpIHtcbiAgbGV0IGRtaW4sIGRtYXhcbiAgaWYgKG1pbiA8IG1heCAmJiB2YWwgPiBtaW4gJiYgdmFsIDwgbWF4KSB7XG4gICAgcmV0dXJuIHZhbFxuICB9IGVsc2UgaWYgKG1heCA8IG1pbiAmJiAodmFsIDwgbWF4IHx8IHZhbCA+IG1pbikpIHtcbiAgICByZXR1cm4gdmFsXG4gIH0gZWxzZSB7XG4gICAgZG1pbiA9IGdldEFuZ2xlRGlmZihtaW4sIHZhbClcbiAgICBkbWF4ID0gZ2V0QW5nbGVEaWZmKG1heCwgdmFsKVxuICAgIGlmIChkbWluIDwgZG1heCkge1xuICAgICAgcmV0dXJuIG1pblxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbWF4XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROZWFyZXN0QW5nbGUoYXJyLCBhbmdsZSkge1xuICBsZXQgaSwgdGVtcCwgZGlmZiA9IE1hdGguUEkgKiAyLCB2YWx1ZVxuICBmb3IgKGkgPSAwOyBpIDwgYXJyLmxlbmd0aDtpKyspIHtcbiAgICB0ZW1wID0gZ2V0QW5nbGVEaWZmKGFycltpXSwgYW5nbGUpXG4gICAgaWYgKGRpZmYgPCB0ZW1wKSB7XG4gICAgICBkaWZmID0gdGVtcFxuICAgICAgdmFsdWUgPSBhcnJbaV1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHZhbHVlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVBbmdsZSh2YWwpIHtcbiAgd2hpbGUgKHZhbCA8IDApIHtcbiAgICB2YWwgKz0gMiAqIE1hdGguUElcbiAgfVxuICB3aGlsZSAodmFsID4gMiAqIE1hdGguUEkpIHtcbiAgICB2YWwgLT0gMiAqIE1hdGguUElcbiAgfVxuICByZXR1cm4gdmFsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oYW5nbGUsIGxlbmd0aCwgY2VudGVyKSB7XG4gIGNlbnRlciA9IGNlbnRlciB8fCBuZXcgUG9pbnQoMCwgMClcbiAgcmV0dXJuIGNlbnRlci5hZGQobmV3IFBvaW50KGxlbmd0aCAqIE1hdGguY29zKGFuZ2xlKSwgbGVuZ3RoICogTWF0aC5zaW4oYW5nbGUpKSlcbn1cbiIsImltcG9ydCBQb2ludCBmcm9tICcuL2dlb21ldHJ5L3BvaW50J1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tICcuL2dlb21ldHJ5L3JlY3RhbmdsZSdcbmltcG9ydCB7XG4gIGdldFBvaW50T25MaW5lQnlMZW5naHQsXG4gIGRpcmVjdENyb3NzaW5nLFxuICBib3VuZFRvTGluZVxufSBmcm9tICcuL2dlb21ldHJ5L2JvdW5kcydcblxuaW1wb3J0IHtcbiAgZ2V0QW5nbGUsXG4gIG5vcm1hbGl6ZUFuZ2xlLFxuICBib3VuZEFuZ2xlLFxuICBnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW1cbn0gZnJvbSAnLi9nZW9tZXRyeS9hbmdsZXMnXG5cbmV4cG9ydCBjbGFzcyBCb3VuZCB7XG4gIGNvbnN0cnVjdG9yICgpIHt9XG5cbiAgYm91bmQocG9pbnQsIF9zaXplKSB7XG4gICAgcmV0dXJuIHBvaW50XG4gIH1cblxuICByZWZyZXNoICgpIHt9XG5cbiAgc3RhdGljIGJvdW5kaW5nKCkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IHRoaXMoLi4uYXJndW1lbnRzKVxuICAgIHJldHVybiBpbnN0YW5jZS5ib3VuZC5iaW5kKGluc3RhbmNlKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvUmVjdGFuZ2xlIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3RvcihyZWN0YW5nbGUpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5yZWN0YW5nbGUgPSByZWN0YW5nbGVcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgY2FsY1BvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIGNvbnN0IHJlY3RQMiA9IHRoaXMucmVjdGFuZ2xlLmdldFAzKClcblxuICAgIGlmICh0aGlzLnJlY3RhbmdsZS5wb3NpdGlvbi54ID4gY2FsY1BvaW50LngpIHtcbiAgICAgIChjYWxjUG9pbnQueCA9IHRoaXMucmVjdGFuZ2xlLnBvc2l0aW9uLngpXG4gICAgfVxuICAgIGlmICh0aGlzLnJlY3RhbmdsZS5wb3NpdGlvbi55ID4gY2FsY1BvaW50LnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gdGhpcy5yZWN0YW5nbGUucG9zaXRpb24ueVxuICAgIH1cbiAgICBpZiAocmVjdFAyLnggPCBjYWxjUG9pbnQueCArIHNpemUueCkge1xuICAgICAgY2FsY1BvaW50LnggPSByZWN0UDIueCAtIHNpemUueFxuICAgIH1cbiAgICBpZiAocmVjdFAyLnkgPCBjYWxjUG9pbnQueSArIHNpemUueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSByZWN0UDIueSAtIHNpemUueVxuICAgIH1cblxuICAgIHJldHVybiBjYWxjUG9pbnRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb0VsZW1lbnQgZXh0ZW5kcyBCb3VuZFRvUmVjdGFuZ2xlIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29udGFpbmVyKSB7XG4gICAgc3VwZXIoUmVjdGFuZ2xlLmZyb21FbGVtZW50KGVsZW1lbnQsIGNvbnRhaW5lcikpXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyXG4gIH1cblxuICByZWZyZXNoICgpIHtcbiAgICB0aGlzLnJlY3RhbmdsZSA9IFJlY3RhbmdsZS5mcm9tRWxlbWVudCh0aGlzLmVsZW1lbnQsIHRoaXMuY29udGFpbmVyKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvTGluZVggZXh0ZW5kcyBCb3VuZCB7XG4gIGNvbnN0cnVjdG9yKHgsIHN0YXJ0WSwgZW5kWSkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnggPSB4XG4gICAgdGhpcy5zdGFydFkgPSBzdGFydFlcbiAgICB0aGlzLmVuZFkgPSBlbmRZXG4gIH1cblxuICBib3VuZChwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IGNhbGNQb2ludCA9IHBvaW50LmNsb25lKClcblxuICAgIGNhbGNQb2ludC54ID0gdGhpcy54XG4gICAgaWYgKHRoaXMuc3RhcnRZID4gY2FsY1BvaW50LnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gdGhpcy5zdGFydFlcbiAgICB9XG4gICAgaWYgKHRoaXMuZW5kWSA8IGNhbGNQb2ludC55ICsgc2l6ZS55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHRoaXMuZW5kWSAtIHNpemUueVxuICAgIH1cblxuICAgIHJldHVybiBjYWxjUG9pbnRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb0xpbmVZIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3Rvcih5LCBzdGFydFgsIGVuZFgpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy55ID0geVxuICAgIHRoaXMuc3RhcnRYID0gc3RhcnRYXG4gICAgdGhpcy5lbmRYID0gZW5kWFxuICB9XG5cbiAgYm91bmQocG9pbnQsIHNpemUpIHtcbiAgICBjb25zdCBjYWxjUG9pbnQgPSBwb2ludC5jbG9uZSgpXG4gICAgY2FsY1BvaW50LnkgPSB0aGlzLnlcbiAgICBpZiAodGhpcy5zdGFydFggPiBjYWxjUG9pbnQueCkge1xuICAgICAgY2FsY1BvaW50LnggPSB0aGlzLnN0YXJ0WFxuICAgIH1cbiAgICBpZiAodGhpcy5lbmRYIDwgY2FsY1BvaW50LnggKyBzaXplLngpIHtcbiAgICAgIGNhbGNQb2ludC54ID0gdGhpcy5lbmRYIC0gc2l6ZS54XG4gICAgfVxuICAgIHJldHVybiBjYWxjUG9pbnRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb0xpbmUgZXh0ZW5kcyBCb3VuZCB7XG4gIGNvbnN0cnVjdG9yKHN0YXJ0UG9pbnQsIGVuZFBvaW50KSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuc3RhcnRQb2ludCA9IHN0YXJ0UG9pbnRcbiAgICB0aGlzLmVuZFBvaW50ID0gZW5kUG9pbnRcbiAgICBjb25zdCBhbHBoYSA9IE1hdGguYXRhbjIoZW5kUG9pbnQueSAtIHN0YXJ0UG9pbnQueSwgZW5kUG9pbnQueCAtIHN0YXJ0UG9pbnQueClcbiAgICBjb25zdCBiZXRhID0gYWxwaGEgKyBNYXRoLlBJIC8gMlxuICAgIHRoaXMuc29tZUsgPSAxMFxuICAgIHRoaXMuY29zQmV0YSA9IE1hdGguY29zKGJldGEpXG4gICAgdGhpcy5zaW5CZXRhID0gTWF0aC5zaW4oYmV0YSlcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgcG9pbnQyID0gbmV3IFBvaW50KFxuICAgICAgcG9pbnQueCArIHRoaXMuc29tZUsgKiB0aGlzLmNvc0JldGEsXG4gICAgICBwb2ludC55ICsgdGhpcy5zb21lSyAqIHRoaXMuc2luQmV0YVxuICAgIClcblxuICAgIGNvbnN0IG5ld0VuZFBvaW50ID0gZ2V0UG9pbnRPbkxpbmVCeUxlbmdodCh0aGlzLmVuZFBvaW50LCB0aGlzLnN0YXJ0UG9pbnQsIHNpemUueClcbiAgICBjb25zdCBwb2ludENyb3NzaW5nID0gZGlyZWN0Q3Jvc3NpbmcodGhpcy5zdGFydFBvaW50LCB0aGlzLmVuZFBvaW50LCBwb2ludCwgcG9pbnQyKVxuXG4gICAgcmV0dXJuIGJvdW5kVG9MaW5lKHRoaXMuc3RhcnRQb2ludCwgbmV3RW5kUG9pbnQsIHBvaW50Q3Jvc3NpbmcpXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9DaXJjbGUgZXh0ZW5kcyBCb3VuZCB7XG4gIGNvbnN0cnVjdG9yKGNlbnRlciwgcmFkaXVzKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuY2VudGVyID0gY2VudGVyXG4gICAgdGhpcy5yYWRpdXMgPSByYWRpdXNcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBfc2l6ZSkge1xuICAgIHJldHVybiBnZXRQb2ludE9uTGluZUJ5TGVuZ2h0KHRoaXMuY2VudGVyLCBwb2ludCwgdGhpcy5yYWRpdXMpXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9BcmMgZXh0ZW5kcyBCb3VuZFRvQ2lyY2xlIHtcbiAgY29uc3RydWN0b3IoY2VudGVyLCByYWRpdXMsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlKSB7XG4gICAgc3VwZXIoY2VudGVyLCByYWRpdXMpXG4gICAgdGhpcy5fc3RhcnRBbmdsZSA9IHN0YXJ0QW5nbGVcbiAgICB0aGlzLl9lbmRBbmdsZSA9IGVuZEFuZ2xlXG4gIH1cblxuICBzdGFydEFuZ2xlKCkge1xuICAgIHJldHVybiB0eXBlb2YgdGhpcy5fc3RhcnRBbmdsZSA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMuX3N0YXJ0QW5nbGUoKSA6IHRoaXMuX3N0YXJ0QW5nbGVcbiAgfVxuXG4gIGVuZEFuZ2xlKCkge1xuICAgIHJldHVybiB0eXBlb2YgdGhpcy5fZW5kQW5nbGUgPT09ICdmdW5jdGlvbicgPyB0aGlzLl9lbmRBbmdsZSgpIDogdGhpcy5fZW5kQW5nbGVcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBfc2l6ZSkge1xuICAgIGxldCBhbmdsZSA9IGdldEFuZ2xlKHRoaXMuY2VudGVyLCBwb2ludClcbiAgICBhbmdsZSA9IG5vcm1hbGl6ZUFuZ2xlKGFuZ2xlKVxuICAgIGFuZ2xlID0gYm91bmRBbmdsZSh0aGlzLnN0YXJ0QW5nbGUoKSwgdGhpcy5lbmRBbmdsZSgpLCBhbmdsZSlcbiAgICByZXR1cm4gZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKGFuZ2xlLCB0aGlzLnJhZGl1cywgdGhpcy5jZW50ZXIpXG4gIH1cbn1cbiIsImltcG9ydCByYW5nZSBmcm9tICcuL3V0aWxzL3JhbmdlLmpzJ1xuaW1wb3J0IHJlbW92ZUl0ZW0gZnJvbSAnLi91dGlscy9yZW1vdmUtYXJyYXktaXRlbSdcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudEVtaXR0ZXInXG5pbXBvcnQgZGlzcGF0Y2hEb21FdmVudCBmcm9tICcuL3V0aWxzL2Rpc3BhdGNoLWRvbS1ldmVudCdcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSAnLi9nZW9tZXRyeS9yZWN0YW5nbGUnXG5pbXBvcnQgeyB0cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5IH0gZnJvbSAnLi9nZW9tZXRyeS9kaXN0YW5jZXMnXG5pbXBvcnQgeyBzY29wZXMsIGRlZmF1bHRTY29wZSB9IGZyb20gJy4vc2NvcGUnXG5cbmltcG9ydCB7IEZsb2F0TGVmdFN0cmF0ZWd5IH0gZnJvbSAnLi9wb3NpdGlvbmluZydcbmltcG9ydCB7IEJvdW5kVG9FbGVtZW50IH0gZnJvbSAnLi9ib3VuZGluZydcblxuY29uc3QgYWRkVG9EZWZhdWx0U2NvcGUgPSBmdW5jdGlvbih0YXJnZXQpIHtcbiAgZGVmYXVsdFNjb3BlLmFkZFRhcmdldCh0YXJnZXQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhcmdldCBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGRyYWdnYWJsZXMsIG9wdGlvbnMgPSB7fSkge1xuICAgIHN1cGVyKG9wdGlvbnMpXG4gICAgY29uc3QgdGFyZ2V0ID0gdGhpc1xuXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICB0aW1lRW5kOiAyMDAsXG4gICAgICB0aW1lRXhjYW5nZTogNDAwXG4gICAgfSwgb3B0aW9ucylcblxuICAgIHRoaXMucG9zaXRpb25pbmdTdHJhdGVneSA9IG9wdGlvbnMuc3RyYXRlZ3kgfHwgbmV3IEZsb2F0TGVmdFN0cmF0ZWd5KFxuICAgICAgdGhpcy5nZXRSZWN0YW5nbGUuYmluZCh0aGlzKSxcbiAgICAgIHtcbiAgICAgICAgcmFkaXVzOiA4MCxcbiAgICAgICAgZ2V0RGlzdGFuY2U6IHRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3RvcnkoeyB4OiAxLCB5OiA0IH0pLFxuICAgICAgICByZW1vdmFibGU6IHRydWVcbiAgICAgIH1cbiAgICApXG5cbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG4gICAgdGhpcy5yZW1vdmVPbk1vdmVTdWJzY3JpcHRpb25zID0gbmV3IE1hcCgpXG4gICAgZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS50YXJnZXRzLnB1c2godGFyZ2V0KSlcbiAgICB0aGlzLmRyYWdnYWJsZXMgPSBkcmFnZ2FibGVzXG5cbiAgICBUYXJnZXQuZW1pdHRlci5lbWl0KCd0YXJnZXQ6Y3JlYXRlJywgdGhpcylcblxuICAgIHRoaXMuc3RhcnRCb3VuZGluZygpXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIHN0YXJ0Qm91bmRpbmcoKSB7XG4gICAgdGhpcy5ib3VuZCA9IHRoaXMub3B0aW9ucy5ib3VuZCB8fCBCb3VuZFRvRWxlbWVudC5ib3VuZGluZyh0aGlzLmVsZW1lbnQpXG4gIH1cblxuICBwb3NpdGlvbmluZyAoZHJhZ2dhYmxlcywgaW5kZXhlc09mTmV3KSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25pbmdTdHJhdGVneS5wb3NpdGlvbmluZyhkcmFnZ2FibGVzLCBpbmRleGVzT2ZOZXcpXG4gIH1cblxuICBzb3J0aW5nIChvbGREcmFnZ2FibGVzLCBuZXdEcmFnZ2FibGVzLCBpbmRleE9mTmV3cykge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uaW5nU3RyYXRlZ3kuc29ydGluZyhvbGREcmFnZ2FibGVzLCBuZXdEcmFnZ2FibGVzLCBpbmRleE9mTmV3cylcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgbGV0IHJlY3RhbmdsZXMsIGluZGV4ZXNPZk5ld1xuXG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMgPSB0aGlzLmRyYWdnYWJsZXMuZmlsdGVyKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGxldCBlbGVtZW50ID0gZHJhZ2dhYmxlLmVsZW1lbnQucGFyZW50Tm9kZVxuICAgICAgd2hpbGUgKGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQgPT09IHRoaXMuZWxlbWVudCkge1xuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfSlcblxuICAgIGlmICh0aGlzLmlubmVyRHJhZ2dhYmxlcy5sZW5ndGgpIHtcbiAgICAgIGluZGV4ZXNPZk5ldyA9IHJhbmdlKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmxlbmd0aClcbiAgICAgIHJlY3RhbmdsZXMgPSB0aGlzLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICAgIH0pLCBpbmRleGVzT2ZOZXcpXG4gICAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIGluZGV4ZXNPZk5ldylcbiAgICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gdGhpcy5lbWl0VGFyZ2V0RXZlbnQoJ2FkZCcsIGRyYWdnYWJsZSkpXG4gICAgfVxuICB9XG5cbiAgZ2V0UmVjdGFuZ2xlKCkge1xuICAgIHJldHVybiBSZWN0YW5nbGUuZnJvbUVsZW1lbnQodGhpcy5lbGVtZW50LCB0aGlzLmNvbnRhaW5lciwgdHJ1ZSlcbiAgfVxuXG4gIGNhdGNoRHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuY2F0Y2hEcmFnZ2FibGUpIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuY2F0Y2hEcmFnZ2FibGUodGhpcywgZHJhZ2dhYmxlKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0YXJnZXRSZWN0YW5nbGUgPSB0aGlzLmdldFJlY3RhbmdsZSgpXG4gICAgICBjb25zdCBkcmFnZ2FibGVTcXVhcmUgPSBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKCkuZ2V0U3F1YXJlKClcblxuICAgICAgcmV0dXJuIGRyYWdnYWJsZVNxdWFyZSA8IHRhcmdldFJlY3RhbmdsZS5nZXRTcXVhcmUoKVxuICAgICAgICAgICAgICAmJiB0YXJnZXRSZWN0YW5nbGUuaW5jbHVkZVBvaW50KGRyYWdnYWJsZS5nZXRDZW50ZXIoKSlcbiAgICB9XG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRSZWN0YW5nbGUoKS5wb3NpdGlvblxuICB9XG5cbiAgZ2V0U2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRSZWN0YW5nbGUoKS5zaXplXG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHNjb3Blcy5mb3JFYWNoKChzY29wZSkgPT4gcmVtb3ZlSXRlbShzY29wZS50YXJnZXRzLCB0aGlzKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgW10pXG4gICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBbXSwgMClcbiAgfVxuXG4gIG9uRW5kKGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IG5ld0RyYWdnYWJsZXNJbmRleCA9IFtdXG5cbiAgICBpZiAodGhpcy5nZXRSZWN0YW5nbGUoKS5pbmNsdWRlUG9pbnQoZHJhZ2dhYmxlLmdldENlbnRlcigpKSkge1xuICAgICAgZHJhZ2dhYmxlLnBvc2l0aW9uID0gdGhpcy5ib3VuZChkcmFnZ2FibGUucG9zaXRpb24sIGRyYWdnYWJsZS5nZXRTaXplKCkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHRoaXMuZW1pdFRhcmdldEV2ZW50KCdiZWZvcmVBZGQnLCBkcmFnZ2FibGUpXG5cbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcyA9IHRoaXMuc29ydGluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcywgW2RyYWdnYWJsZV0sIG5ld0RyYWdnYWJsZXNJbmRleClcbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBuZXdEcmFnZ2FibGVzSW5kZXgpXG5cbiAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIG5ld0RyYWdnYWJsZXNJbmRleClcbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMSkge1xuICAgICAgdGhpcy5hZGRSZW1vdmVPbk1vdmUoZHJhZ2dhYmxlKVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgaW5kZXhlc09mTmV3LCB0aW1lKSB7XG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuc2xpY2UoMCkuZm9yRWFjaCgoZHJhZ2dhYmxlLCBpKSA9PiB7XG4gICAgICBjb25zdCByZWN0ID0gcmVjdGFuZ2xlc1tpXSxcbiAgICAgICAgdGltZUVuZCA9IHRpbWUgfHwgdGltZSA9PT0gMCA/IHRpbWUgOiBpbmRleGVzT2ZOZXcuaW5kZXhPZihpKSAhPT0gLTEgPyB0aGlzLm9wdGlvbnMudGltZUVuZCA6IHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZVxuXG4gICAgICBpZiAocmVjdC5yZW1vdmFibGUpIHtcbiAgICAgICAgZHJhZ2dhYmxlLm1vdmUoZHJhZ2dhYmxlLmluaXRpYWxQb3NpdGlvbiwgdGltZUVuZCwgdHJ1ZSwgdHJ1ZSlcbiAgICAgICAgdGhpcy5zdG9wUmVtb3ZlT25Nb3ZlKGRyYWdnYWJsZSlcbiAgICAgICAgcmVtb3ZlSXRlbSh0aGlzLmlubmVyRHJhZ2dhYmxlcywgZHJhZ2dhYmxlKVxuICAgICAgICB0aGlzLmVtaXRUYXJnZXRFdmVudCgncmVtb3ZlJywgZHJhZ2dhYmxlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZHJhZ2dhYmxlLm1vdmUocmVjdC5wb3NpdGlvbiwgdGltZUVuZCwgdHJ1ZSwgdHJ1ZSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgYWRkKGRyYWdnYWJsZSwgdGltZSkge1xuICAgIGNvbnN0IG5ld0RyYWdnYWJsZXNJbmRleCA9IHRoaXMuaW5uZXJEcmFnZ2FibGVzLmxlbmd0aFxuXG4gICAgdGhpcy5lbWl0VGFyZ2V0RXZlbnQoJ2JlZm9yZUFkZCcsIGRyYWdnYWJsZSlcblxuICAgIHRoaXMucHVzaElubmVyRHJhZ2dhYmxlKGRyYWdnYWJsZSlcbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBuZXdEcmFnZ2FibGVzSW5kZXgsIGRyYWdnYWJsZSlcblxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgW25ld0RyYWdnYWJsZXNJbmRleF0sIHRpbWUgfHwgMClcbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMSkge1xuICAgICAgdGhpcy5hZGRSZW1vdmVPbk1vdmUoZHJhZ2dhYmxlKVxuICAgIH1cbiAgfVxuXG4gIHB1c2hJbm5lckRyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpPT09LTEpIHtcbiAgICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxuICAgIH1cbiAgfVxuXG4gIGFkZFJlbW92ZU9uTW92ZShkcmFnZ2FibGUpIHtcbiAgICB0aGlzLnN0b3BSZW1vdmVPbk1vdmUoZHJhZ2dhYmxlKVxuICAgIHRoaXMucmVtb3ZlT25Nb3ZlU3Vic2NyaXB0aW9ucy5zZXQoZHJhZ2dhYmxlLCBkcmFnZ2FibGUub24oJ2RyYWc6bW92ZScsICgpID0+IHRoaXMucmVtb3ZlKGRyYWdnYWJsZSkpKVxuXG4gICAgdGhpcy5lbWl0VGFyZ2V0RXZlbnQoJ2FkZCcsIGRyYWdnYWJsZSlcbiAgfVxuXG4gIHN0b3BSZW1vdmVPbk1vdmUoZHJhZ2dhYmxlKSB7XG4gICAgY29uc3QgdW5zdWJzY3JpYmUgPSB0aGlzLnJlbW92ZU9uTW92ZVN1YnNjcmlwdGlvbnMuZ2V0KGRyYWdnYWJsZSlcbiAgICBpZiAodW5zdWJzY3JpYmUpIHtcbiAgICAgIHVuc3Vic2NyaWJlKClcbiAgICAgIHRoaXMucmVtb3ZlT25Nb3ZlU3Vic2NyaXB0aW9ucy5kZWxldGUoZHJhZ2dhYmxlKVxuICAgIH1cbiAgfVxuXG4gIHJlbW92ZShkcmFnZ2FibGUpIHtcbiAgICB0aGlzLnN0b3BSZW1vdmVPbk1vdmUoZHJhZ2dhYmxlKVxuXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSlcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5zcGxpY2UoaW5kZXgsIDEpXG5cbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBbXSlcblxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgW10pXG4gICAgdGhpcy5lbWl0VGFyZ2V0RXZlbnQoJ3JlbW92ZScsIGRyYWdnYWJsZSlcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLm1vdmUoZHJhZ2dhYmxlLmluaXRpYWxQb3NpdGlvbiwgMCwgdHJ1ZSwgdHJ1ZSlcbiAgICAgIHRoaXMuc3RvcFJlbW92ZU9uTW92ZShkcmFnZ2FibGUpXG4gICAgICB0aGlzLmVtaXRUYXJnZXRFdmVudCgncmVtb3ZlJywgZHJhZ2dhYmxlKVxuICAgIH0pXG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMgPSBbXVxuICB9XG5cbiAgZ2V0U29ydGVkRHJhZ2dhYmxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5pbm5lckRyYWdnYWJsZXMuc2xpY2UoKVxuICB9XG5cbiAgZW1pdFRhcmdldEV2ZW50KHR5cGUsIGRyYWdnYWJsZSkge1xuICAgIHRoaXMuZW1pdChgdGFyZ2V0OiR7dHlwZX1gLCBkcmFnZ2FibGUpXG5cbiAgICBpZiAodGhpcy5kb21FdmVudHMpIHtcbiAgICAgIGNvbnN0IGRvbVR5cGUgPSB0eXBlLnJlcGxhY2UoL1tBLVpdL2csIChsZXR0ZXIpID0+IGAtJHtsZXR0ZXIudG9Mb3dlckNhc2UoKX1gKVxuICAgICAgZGlzcGF0Y2hEb21FdmVudCh0aGlzLmVsZW1lbnQsIGBkcmFnZWU6dGFyZ2V0LSR7ZG9tVHlwZX1gLCB7IHRhcmdldDogdGhpcywgZHJhZ2dhYmxlIH0pXG4gICAgfVxuICB9XG5cbiAgZ2V0IGNvbnRhaW5lcigpIHtcbiAgICByZXR1cm4gKHRoaXMuX2NvbnRhaW5lciA9IHRoaXMuX2NvbnRhaW5lciB8fCB0aGlzLm9wdGlvbnMuY29udGFpbmVyIHx8IHRoaXMub3B0aW9ucy5wYXJlbnQgfHwgdGhpcy5lbGVtZW50Lm9mZnNldFBhcmVudClcbiAgfVxuXG4gIGdldCBkb21FdmVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5kb21FdmVudHMgIT09IGZhbHNlXG4gIH1cbn1cblxuVGFyZ2V0LmVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKClcblRhcmdldC5lbWl0dGVyLm9uKCd0YXJnZXQ6Y3JlYXRlJywgYWRkVG9EZWZhdWx0U2NvcGUpXG4iLCJpbXBvcnQgcmVtb3ZlSXRlbSBmcm9tICcuL3V0aWxzL3JlbW92ZS1hcnJheS1pdGVtJ1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50RW1pdHRlcidcbmltcG9ydCBEcmFnZ2FibGUgZnJvbSAnLi9kcmFnZ2FibGUnXG5pbXBvcnQgVGFyZ2V0IGZyb20gJy4vdGFyZ2V0J1xuXG5jb25zdCBzY29wZXMgPSBbXVxuXG5jbGFzcyBTY29wZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKGRyYWdnYWJsZXMsIHRhcmdldHMsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcihvcHRpb25zKVxuICAgIHNjb3Blcy5mb3JFYWNoKChzY29wZSkgPT4ge1xuICAgICAgaWYgKGRyYWdnYWJsZXMpIHtcbiAgICAgICAgZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHNjb3BlLnJlbGVhc2VEcmFnZ2FibGUoZHJhZ2dhYmxlKSlcbiAgICAgIH1cblxuICAgICAgaWYgKHRhcmdldHMpIHtcbiAgICAgICAgdGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHtcbiAgICAgICAgICByZW1vdmVJdGVtKHNjb3BlLnRhcmdldHMsIHRhcmdldClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gZHJhZ2dhYmxlcyB8fCBbXVxuICAgIHRoaXMudGFyZ2V0cyA9IHRhcmdldHMgfHwgW11cbiAgICB0aGlzLmRyYWdFbmRBY3Rpb25SZWxlYXNlcyA9IG5ldyBNYXAoKVxuICAgIHNjb3Blcy5wdXNoKHRoaXMpXG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgdGltZUVuZDogKG9wdGlvbnMudGltZUVuZCkgfHwgNDAwXG4gICAgfVxuXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gdGhpcy5pbml0RHJhZ2dhYmxlKGRyYWdnYWJsZSkpXG4gIH1cblxuICBhZGREcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxuICAgIHRoaXMuaW5pdERyYWdnYWJsZShkcmFnZ2FibGUpXG4gIH1cblxuICBpbml0RHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIHRoaXMuZHJhZ0VuZEFjdGlvblJlbGVhc2VzLnNldChkcmFnZ2FibGUsIGRyYWdnYWJsZS5vdmVycmlkZURyYWdFbmRBY3Rpb24oKCkgPT4gdGhpcy5vbkVuZChkcmFnZ2FibGUpKSlcbiAgfVxuXG4gIHJlbGVhc2VEcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgY29uc3QgcmVsZWFzZSA9IHRoaXMuZHJhZ0VuZEFjdGlvblJlbGVhc2VzLmdldChkcmFnZ2FibGUpXG4gICAgaWYgKHJlbGVhc2UpIHtcbiAgICAgIHJlbGVhc2UoKVxuICAgICAgdGhpcy5kcmFnRW5kQWN0aW9uUmVsZWFzZXMuZGVsZXRlKGRyYWdnYWJsZSlcbiAgICB9XG4gICAgcmVtb3ZlSXRlbSh0aGlzLmRyYWdnYWJsZXMsIGRyYWdnYWJsZSlcbiAgfVxuXG4gIGFkZFRhcmdldCh0YXJnZXQpIHtcbiAgICB0aGlzLnRhcmdldHMucHVzaCh0YXJnZXQpXG4gIH1cblxuICBvbkVuZChkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBzaG90VGFyZ2V0cyA9IHRoaXMudGFyZ2V0cy5maWx0ZXIoKHRhcmdldCkgPT4ge1xuICAgICAgcmV0dXJuIHRhcmdldC5kcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTFcbiAgICB9KS5maWx0ZXIoKHRhcmdldCkgPT4ge1xuICAgICAgcmV0dXJuIHRhcmdldC5jYXRjaERyYWdnYWJsZShkcmFnZ2FibGUpXG4gICAgfSkuc29ydCgoYSwgYikgPT4ge1xuICAgICAgcmV0dXJuIGEuZ2V0UmVjdGFuZ2xlKCkuZ2V0U3F1YXJlKCkgLSBiLmdldFJlY3RhbmdsZSgpLmdldFNxdWFyZSgpXG4gICAgfSlcblxuICAgIGlmIChzaG90VGFyZ2V0cy5sZW5ndGgpIHtcbiAgICAgIHNob3RUYXJnZXRzWzBdLm9uRW5kKGRyYWdnYWJsZSlcbiAgICB9IGVsc2UgaWYgKGRyYWdnYWJsZS50YXJnZXRzLmxlbmd0aCkge1xuICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKGRyYWdnYWJsZS5pbml0aWFsUG9zaXRpb24sIHRoaXMub3B0aW9ucy50aW1lRW5kKVxuICAgIH1cblxuICAgIHRoaXMuZW1pdCgnc2NvcGU6Y2hhbmdlJywgZHJhZ2dhYmxlKVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy50YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4gdGFyZ2V0LnJlc2V0KCkpXG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5yZWZyZXNoKCkpXG4gICAgdGhpcy50YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4gdGFyZ2V0LnJlZnJlc2goKSlcbiAgfVxuXG4gIGdldCBwb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0cy5tYXAoKHRhcmdldCkgPT4ge1xuICAgICAgcmV0dXJuIHRhcmdldC5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHRoaXMuZHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkpXG4gICAgfSlcbiAgfVxuXG4gIHNldCBwb3NpdGlvbnMocG9zaXRpb25zKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9ICd3cm9uZyBhcnJheSBsZW5ndGgnXG4gICAgaWYgKHBvc2l0aW9ucy5sZW5ndGggPT09IHRoaXMudGFyZ2V0cy5sZW5ndGgpIHtcbiAgICAgIHRoaXMudGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHRhcmdldC5yZXNldCgpKVxuXG4gICAgICBwb3NpdGlvbnMuZm9yRWFjaCgodGFyZ2V0SW5kZXhlcywgaSkgPT4ge1xuICAgICAgICB0YXJnZXRJbmRleGVzLmZvckVhY2goKGluZGV4KSA9PiB7XG4gICAgICAgICAgdGhpcy50YXJnZXRzW2ldLmFkZCh0aGlzLmRyYWdnYWJsZXNbaW5kZXhdKVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbWVzc2FnZVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBkZWZhdWx0U2NvcGUgPSBuZXcgU2NvcGUoKVxuXG5mdW5jdGlvbiBzY29wZShmbikge1xuICBjb25zdCBjdXJyZW50U2NvcGUgPSBuZXcgU2NvcGUoKVxuXG4gIGNvbnN0IGFkZERyYWdnYWJsZVRvU2NvcGUgPSBmdW5jdGlvbihkcmFnZ2FibGUpIHtcbiAgICBjdXJyZW50U2NvcGUuYWRkRHJhZ2dhYmxlKGRyYWdnYWJsZSlcbiAgICBEcmFnZ2FibGUuZW1pdHRlci5pbnRlcnJ1cHQoKVxuICB9XG5cbiAgY29uc3QgYWRkVGFyZ2V0VG9TY29wZSA9IGZ1bmN0aW9uKHRhcmdldCkge1xuICAgIGN1cnJlbnRTY29wZS5hZGRUYXJnZXQodGFyZ2V0KVxuICAgIFRhcmdldC5lbWl0dGVyLmludGVycnVwdCgpXG4gIH1cblxuICBjb25zdCBvZmZEcmFnZ2FibGUgPSBEcmFnZ2FibGUuZW1pdHRlci5wcmVwZW5kT24oJ2RyYWdnYWJsZTpjcmVhdGUnLCBhZGREcmFnZ2FibGVUb1Njb3BlKVxuICBjb25zdCBvZmZUYXJnZXQgPSBUYXJnZXQuZW1pdHRlci5wcmVwZW5kT24oJ3RhcmdldDpjcmVhdGUnLCBhZGRUYXJnZXRUb1Njb3BlKVxuICB0cnkge1xuICAgIGZuLmNhbGwoKVxuICB9IGZpbmFsbHkge1xuICAgIG9mZkRyYWdnYWJsZSgpXG4gICAgb2ZmVGFyZ2V0KClcbiAgfVxuICByZXR1cm4gY3VycmVudFNjb3BlXG59XG5cbmV4cG9ydCB7IHNjb3BlcywgZGVmYXVsdFNjb3BlLCBTY29wZSwgc2NvcGUgfVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGhyb3R0bGUoZnVuYywgd2FpdCkge1xuICBsZXQgbGFzdFRpbWUgPSAwXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGV4ZWN1dGVkRnVuY3Rpb24oKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXNcbiAgICBjb25zdCBhcmdzID0gYXJndW1lbnRzXG5cbiAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpXG4gICAgaWYgKG5vdyAtIGxhc3RUaW1lID49IHdhaXQpIHtcbiAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncylcbiAgICAgIGxhc3RUaW1lID0gbm93XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnRFbWl0dGVyJ1xuaW1wb3J0IFBvaW50IGZyb20gJy4vZ2VvbWV0cnkvcG9pbnQnXG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gJy4vZ2VvbWV0cnkvcmVjdGFuZ2xlJ1xuaW1wb3J0IHsgZGVmYXVsdFNjb3BlIH0gZnJvbSAnLi9zY29wZSdcbmltcG9ydCB0aHJvdHRsZSBmcm9tICcuL3V0aWxzL3Rocm90dGxlJ1xuaW1wb3J0IGdldFBhcmVudHNDaGFpbiBmcm9tICcuL3V0aWxzL2dldC1wYXJlbnRzLWNoYWluJ1xuaW1wb3J0IHJlbW92ZUl0ZW0gZnJvbSAnLi91dGlscy9yZW1vdmUtYXJyYXktaXRlbSdcbmltcG9ydCBkaXNwYXRjaERvbUV2ZW50IGZyb20gJy4vdXRpbHMvZGlzcGF0Y2gtZG9tLWV2ZW50J1xuXG5jb25zdCB0aHJvdHRsZWREcmFnT3ZlciA9IChjYWxsYmFjaywgZHVyYXRpb24pID0+IHtcbiAgY29uc3QgdGhyb3R0bGVkQ2FsbGJhY2sgPSB0aHJvdHRsZSgoZXZlbnQpID0+IGNhbGxiYWNrKGV2ZW50KSwgZHVyYXRpb24pXG4gIHJldHVybiAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhyb3R0bGVkQ2FsbGJhY2soZXZlbnQpXG4gIH1cbn1cblxuY29uc3QgcGFzc2l2ZUZhbHNlID0geyBwYXNzaXZlOiBmYWxzZSB9XG5cbmNvbnN0IGlzVG91Y2ggPSBuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHMgPiAwXG5jb25zdCBtb3VzZUV2ZW50cyA9IHtcbiAgc3RhcnQ6ICdtb3VzZWRvd24nLFxuICBtb3ZlOiAnbW91c2Vtb3ZlJyxcbiAgZW5kOiAnbW91c2V1cCdcbn1cbmNvbnN0IHRvdWNoRXZlbnRzID0ge1xuICBzdGFydDogJ3RvdWNoc3RhcnQnLFxuICBtb3ZlOiAndG91Y2htb3ZlJyxcbiAgZW5kOiAndG91Y2hlbmQnXG59XG5jb25zdCBkcmFnZ2FibGVzID0gW11cbmNvbnN0IHRyYW5zZm9ybVByb3BlcnR5ID0gJ3RyYW5zZm9ybSdcbmNvbnN0IHRyYW5zaXRpb25Qcm9wZXJ0eSA9ICd0cmFuc2l0aW9uJ1xuXG5mdW5jdGlvbiBnZXRUb3VjaEJ5SUQoZWxlbWVudCwgdG91Y2hJZCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnQuY2hhbmdlZFRvdWNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZWxlbWVudC5jaGFuZ2VkVG91Y2hlc1tpXS5pZGVudGlmaWVyID09PSB0b3VjaElkKSB7XG4gICAgICByZXR1cm4gZWxlbWVudC5jaGFuZ2VkVG91Y2hlc1tpXVxuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cblxuZnVuY3Rpb24gcHJldmVudERvdWJsZUluaXQoZHJhZ2dhYmxlKSB7XG4gIGNvbnN0IG1lc3NhZ2UgPSBcImZvciB0aGlzIGVsZW1lbnQgRHJhZ2VlLkRyYWdnYWJsZSBpcyBhbHJlYWR5IGV4aXN0LCBkb24ndCBjcmVhdGUgaXQgdHdpY2UgXCJcbiAgaWYgKGRyYWdnYWJsZXMuc29tZSgoZXhpc3RpbmcpID0+IGRyYWdnYWJsZS5lbGVtZW50ID09PSBleGlzdGluZy5lbGVtZW50KSkge1xuICAgIHRocm93IG1lc3NhZ2VcbiAgfVxuICBkcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxufVxuXG5mdW5jdGlvbiBhZGRUb0RlZmF1bHRTY29wZShkcmFnZ2FibGUpIHtcbiAgZGVmYXVsdFNjb3BlLmFkZERyYWdnYWJsZShkcmFnZ2FibGUpXG59XG5cbmZ1bmN0aW9uIGNvcHlTdHlsZXMoc291cmNlLCBkZXN0aW5hdGlvbikge1xuICBjb25zdCBjcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHNvdXJjZSlcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qga2V5ID0gY3NbaV1cbiAgICBpZiAoKGtleS5pbmRleE9mKCd0cmFuc2l0aW9uJykgPCAwKSAmJiAoa2V5LmluZGV4T2YoJ3RyYW5zZm9ybScpIDwgMCkpIHtcbiAgICAgIGRlc3RpbmF0aW9uLnN0eWxlW2tleV0gPSBjc1trZXldXG4gICAgfVxuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzb3VyY2UuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICBjb3B5U3R5bGVzKHNvdXJjZS5jaGlsZHJlbltpXSwgZGVzdGluYXRpb24uY2hpbGRyZW5baV0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhZ2dhYmxlIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgb3B0aW9ucz17fSkge1xuICAgIHN1cGVyKG9wdGlvbnMpXG4gICAgdGhpcy50YXJnZXRzID0gW11cbiAgICB0aGlzLl9kcmFnRW5kQWN0aW9ucyA9IFtdXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9uc1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgICBwcmV2ZW50RG91YmxlSW5pdCh0aGlzKVxuICAgIERyYWdnYWJsZS5lbWl0dGVyLmVtaXQoJ2RyYWdnYWJsZTpjcmVhdGUnLCB0aGlzKVxuICAgIHRoaXMuX2VuYWJsZSA9IHRydWVcbiAgICB0aGlzLnN0YXJ0Qm91bmRpbmcoKVxuICAgIHRoaXMuc3RhcnRQb3NpdGlvbmluZygpXG4gICAgdGhpcy5zdGFydExpc3RlbmluZygpXG4gIH1cblxuICBzdGFydEJvdW5kaW5nKCkge1xuICAgIHRoaXMuYm91bmRpbmcgPSB0aGlzLm9wdGlvbnMuYm91bmRpbmcgfHwge1xuICAgICAgYm91bmQ6IHRoaXMub3B0aW9ucy5ib3VuZCB8fCAoKHBvaW50KSA9PiBwb2ludClcbiAgICB9XG4gIH1cblxuICBzdGFydFBvc2l0aW9uaW5nKCkge1xuICAgIHRoaXMuX3NldERlZmF1bHRUcmFuc2l0aW9uKClcbiAgICB0aGlzLm9mZnNldCA9IHRoaXMuaXNDb25zaWRlclRyYW5zZm9ybU9mZnNldFxuICAgICAgPyBQb2ludC5lbGVtZW50Qm91bmRpbmdPZmZzZXQodGhpcy5lbGVtZW50LCB0aGlzLmNvbnRhaW5lcilcbiAgICAgIDogUG9pbnQuZWxlbWVudE9mZnNldCh0aGlzLmVsZW1lbnQsIHRoaXMuY29udGFpbmVyKVxuICAgIHRoaXMucGlubmVkUG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICAgIHRoaXMuaW5pdGlhbFBvc2l0aW9uID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uIHx8IHRoaXMub2Zmc2V0XG5cbiAgICB0aGlzLnBpblBvc2l0aW9uKHRoaXMuaW5pdGlhbFBvc2l0aW9uKVxuXG4gICAgaWYgKHRoaXMuYm91bmRpbmcucmVmcmVzaCkge1xuICAgICAgdGhpcy5ib3VuZGluZy5yZWZyZXNoKClcbiAgICB9XG4gIH1cblxuICBzdGFydExpc3RlbmluZygpIHtcbiAgICB0aGlzLl9kcmFnU3RhcnQgPSAoZXZlbnQpID0+IHRoaXMuZHJhZ1N0YXJ0KGV2ZW50KVxuICAgIHRoaXMuX2RyYWdNb3ZlID0gKGV2ZW50KSA9PiB0aGlzLmRyYWdNb3ZlKGV2ZW50KVxuICAgIHRoaXMuX2RyYWdFbmQgPSAoZXZlbnQpID0+IHRoaXMuZHJhZ0VuZChldmVudClcbiAgICB0aGlzLl9uYXRpdmVEcmFnU3RhcnQgPSAoZXZlbnQpID0+IHRoaXMubmF0aXZlRHJhZ1N0YXJ0KGV2ZW50KVxuICAgIHRoaXMuX25hdGl2ZURyYWdPdmVyID0gdGhyb3R0bGVkRHJhZ092ZXIoKGV2ZW50KSA9PiB0aGlzLm5hdGl2ZURyYWdPdmVyKGV2ZW50KSwgdGhpcy5kcmFnT3ZlclRocm90dGxlRHVyYXRpb24pXG4gICAgdGhpcy5fbmF0aXZlRHJhZ0VuZCA9IChldmVudCkgPT4gdGhpcy5uYXRpdmVEcmFnRW5kKGV2ZW50KVxuICAgIHRoaXMuX25hdGl2ZURyb3AgPSAoZXZlbnQpID0+IHRoaXMubmF0aXZlRHJvcChldmVudClcbiAgICB0aGlzLl9zY3JvbGwgPSAoZXZlbnQpID0+IHRoaXMub25TY3JvbGwoZXZlbnQpXG5cbiAgICB0aGlzLmhhbmRsZXIuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0LCBwYXNzaXZlRmFsc2UpXG4gICAgdGhpcy5oYW5kbGVyLmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydCwgcGFzc2l2ZUZhbHNlKVxuICB9XG5cbiAgZ2V0U2l6ZSgpIHtcbiAgICByZXR1cm4gUG9pbnQuZWxlbWVudFNpemUodGhpcy5lbGVtZW50KVxuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMub2Zmc2V0LmFkZCh0aGlzLl90cmFuc2Zvcm1Qb3NpdGlvbiB8fCBuZXcgUG9pbnQoMCwgMCkpXG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25cbiAgfVxuXG4gIGdldENlbnRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi5hZGQodGhpcy5nZXRTaXplKCkubXVsdCgwLjUpKVxuICB9XG5cbiAgX3NldERlZmF1bHRUcmFuc2l0aW9uICgpIHtcbiAgICBpZiAoIXRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNpdGlvblByb3BlcnR5XSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZWxlbWVudClbdHJhbnNpdGlvblByb3BlcnR5XVxuICAgIH1cbiAgfVxuXG4gIF9zZXRUcmFuc2l0aW9uKHRpbWUpIHtcbiAgICBsZXQgdHJhbnNpdGlvbiA9IHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldXG4gICAgY29uc3QgdHJhbnNpdGlvbkNzcyA9IGB0cmFuc2Zvcm0gJHt0aW1lfW1zYFxuXG4gICAgaWYgKCEvdHJhbnNmb3JtXFxzP1xcZCptP3M/Ly50ZXN0KHRyYW5zaXRpb24pKSB7XG4gICAgICBpZiAodHJhbnNpdGlvbikge1xuICAgICAgICB0cmFuc2l0aW9uICs9IGAsICR7dHJhbnNpdGlvbkNzc31gXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cmFuc2l0aW9uID0gdHJhbnNpdGlvbkNzc1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0cmFuc2l0aW9uID0gdHJhbnNpdGlvbi5yZXBsYWNlKC90cmFuc2Zvcm1cXHM/XFxkKm0/cz8vZywgdHJhbnNpdGlvbkNzcylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV0gIT09IHRyYW5zaXRpb24pIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldID0gdHJhbnNpdGlvblxuICAgIH1cbiAgfVxuXG4gIF9zZXRUcmFuc2xhdGUocG9pbnQpIHtcbiAgICB0aGlzLl90cmFuc2Zvcm1Qb3NpdGlvbiA9IHBvaW50XG4gICAgY29uc3QgdHJhbnNsYXRlQ3NzID0gYHRyYW5zbGF0ZTNkKCR7cG9pbnQueH1weCwgJHtwb2ludC55fXB4LCAwcHgpYFxuXG4gICAgbGV0IHRyYW5zZm9ybSA9IHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wZXJ0eV1cblxuICAgIGlmICh0aGlzLnNob3VsZFJlbW92ZVplcm9UcmFuc2xhdGUgJiYgcG9pbnQueCA9PT0gMCAmJiBwb2ludC55ID09PSAwKSB7XG4gICAgICB0cmFuc2Zvcm0gPSB0cmFuc2Zvcm0ucmVwbGFjZSgvdHJhbnNsYXRlM2RcXChbXildK1xcKS8sICcnKVxuICAgIH0gZWxzZSBpZiAoIS90cmFuc2xhdGUzZFxcKFteKV0rXFwpLy50ZXN0KHRyYW5zZm9ybSkpIHtcbiAgICAgIGlmICh0cmFuc2Zvcm0pIHtcbiAgICAgICAgdHJhbnNmb3JtICs9ICcgJ1xuICAgICAgfVxuICAgICAgdHJhbnNmb3JtICs9IHRyYW5zbGF0ZUNzc1xuICAgIH0gZWxzZSB7XG4gICAgICB0cmFuc2Zvcm0gPSB0cmFuc2Zvcm0ucmVwbGFjZSgvdHJhbnNsYXRlM2RcXChbXildK1xcKS8sIHRyYW5zbGF0ZUNzcylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BlcnR5XSAhPT0gdHJhbnNmb3JtKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcGVydHldID0gdHJhbnNmb3JtXG4gICAgfVxuICB9XG5cbiAgbW92ZShwb2ludCwgdGltZT0wLCBpc1NpbGVudD1mYWxzZSkge1xuICAgIHBvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIHRoaXMucG9zaXRpb24gPSBwb2ludFxuXG4gICAgdGhpcy5fc2V0VHJhbnNpdGlvbih0aW1lKVxuICAgIHRoaXMuX3NldFRyYW5zbGF0ZShwb2ludC5zdWIodGhpcy5vZmZzZXQpKVxuXG4gICAgaWYgKCFpc1NpbGVudCkge1xuICAgICAgdGhpcy5lbWl0RHJhZ0V2ZW50KCdtb3ZlJylcbiAgICB9XG4gIH1cblxuICBwaW5Qb3NpdGlvbihwb2ludCwgdGltZT0wLCBzaWxlbnQ9dHJ1ZSkge1xuICAgIHRoaXMucGlubmVkUG9zaXRpb24gPSBwb2ludC5jbG9uZSgpXG4gICAgdGhpcy5tb3ZlKHRoaXMucGlubmVkUG9zaXRpb24sIHRpbWUsIHNpbGVudClcbiAgfVxuXG4gIHJlc2V0UG9zaXRpb25Ub0luaXRpYWwgKCkge1xuICAgIHRoaXMucGluUG9zaXRpb24odGhpcy5pbml0aWFsUG9zaXRpb24pXG4gIH1cblxuICByZWZyZXNoUG9zaXRpb24gKCkge1xuICAgIHRoaXMuc2V0UG9zaXRpb24odGhpcy5nZXRQb3NpdGlvbigpKVxuICB9XG5cbiAgc2V0UG9zaXRpb24ocG9pbnQpIHtcbiAgICBwb2ludCA9IHBvaW50LmNsb25lKClcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9pbnRcbiAgICB0aGlzLl9zZXRUcmFuc2l0aW9uKDApXG4gICAgdGhpcy5fc2V0VHJhbnNsYXRlKHBvaW50LnN1Yih0aGlzLm9mZnNldCkpXG4gIH1cblxuICBkZXRlcm1pbmVEaXJlY3Rpb24ocG9pbnQpIHtcbiAgICB0aGlzLl9wcmV2aW91c0RpcmVjdGlvblBvc2l0aW9uIHx8PSB0aGlzLl9zdGFydFBvc2l0aW9uXG5cbiAgICB0aGlzLmxlZnREaXJlY3Rpb24gPSAodGhpcy5fcHJldmlvdXNEaXJlY3Rpb25Qb3NpdGlvbi54ID4gcG9pbnQueClcbiAgICB0aGlzLnJpZ2h0RGlyZWN0aW9uID0gKHRoaXMuX3ByZXZpb3VzRGlyZWN0aW9uUG9zaXRpb24ueCA8IHBvaW50LngpXG4gICAgdGhpcy51cERpcmVjdGlvbiA9ICh0aGlzLl9wcmV2aW91c0RpcmVjdGlvblBvc2l0aW9uLnkgPiBwb2ludC55KVxuICAgIHRoaXMuZG93bkRpcmVjdGlvbiA9ICh0aGlzLl9wcmV2aW91c0RpcmVjdGlvblBvc2l0aW9uLnkgPCBwb2ludC55KVxuXG4gICAgdGhpcy5fcHJldmlvdXNEaXJlY3Rpb25Qb3NpdGlvbiA9IHBvaW50XG4gIH1cblxuICBzZWVtc1Njcm9sbGluZygpIHtcbiAgICByZXR1cm4gKCtuZXcgRGF0ZSgpIC0gdGhpcy5fc3RhcnRUb3VjaFRpbWVzdGFtcCkgPCB0aGlzLnRvdWNoRHJhZ2dpbmdUaHJlc2hvbGRcbiAgfVxuXG4gIHNob3VsZFVzZU5hdGl2ZURyYWdBbmREcm9wKCkge1xuICAgIGlmICh0aGlzLmlzVG91Y2hFdmVudCkge1xuICAgICAgcmV0dXJuIHRoaXMubmF0aXZlRHJhZ0FuZERyb3AgJiYgdGhpcy5lbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3BPblRvdWNoXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLm5hdGl2ZURyYWdBbmREcm9wXG4gICAgfVxuICB9XG5cbiAgZHJhZ1N0YXJ0KGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLl9lbmFibGUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLnN0b3BQcm9wYWdhdGlvbk9uRHJhZ1N0YXJ0KSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIH1cblxuICAgIHRoaXMuaXNUb3VjaEV2ZW50ID0gKGlzVG91Y2ggJiYgKGV2ZW50IGluc3RhbmNlb2Ygd2luZG93LlRvdWNoRXZlbnQpKVxuXG4gICAgdGhpcy50b3VjaFBvaW50ID0gdGhpcy5fc3RhcnRUb3VjaFBvaW50ID0gbmV3IFBvaW50KFxuICAgICAgdGhpcy5pc1RvdWNoRXZlbnQgPyBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCA6IGV2ZW50LmNsaWVudFgsXG4gICAgICB0aGlzLmlzVG91Y2hFdmVudCA/IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZIDogZXZlbnQuY2xpZW50WVxuICAgIClcblxuICAgIHRoaXMuX3N0YXJ0UG9zaXRpb24gPSB0aGlzLmdldFBvc2l0aW9uKClcbiAgICBpZiAodGhpcy5pc1RvdWNoRXZlbnQpIHtcbiAgICAgIHRoaXMuX3RvdWNoSWQgPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5pZGVudGlmaWVyXG4gICAgICB0aGlzLl9zdGFydFRvdWNoVGltZXN0YW1wID0gK25ldyBEYXRlKClcbiAgICB9XG5cbiAgICB0aGlzLl9zdGFydFdpbmRvd1Njcm9sbFBvaW50ID0gdGhpcy53aW5kb3dTY3JvbGxQb2ludFxuICAgIHRoaXMuX3N0YXJ0U2Nyb2xsRWxlbWVudHNPZmZzZXQgPSB0aGlzLnNjcm9sbEVsZW1lbnRzT2Zmc2V0XG5cbiAgICBpZiAoZXZlbnQudGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJbnB1dEVsZW1lbnQgfHxcbiAgICAgICAgICBldmVudC50YXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElucHV0RWxlbWVudCkge1xuICAgICAgZXZlbnQudGFyZ2V0LmZvY3VzKClcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zaG91bGRVc2VOYXRpdmVEcmFnQW5kRHJvcCgpKSB7XG4gICAgICBpZiAodGhpcy5pc1RvdWNoRXZlbnQgJiYgdGhpcy5lbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3BPblRvdWNoKSB7XG4gICAgICAgIHRoaXMuX3N0YXJ0UGFyZW50c1Njcm9sbE9mZnNldCA9IHRoaXMucGFyZW50c1Njcm9sbE9mZnNldFxuXG4gICAgICAgIGNvbnN0IGVtdWxhdGVPbkZpcnN0TW92ZSA9IChldmVudCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLnNlZW1zU2Nyb2xsaW5nKCkpIHtcbiAgICAgICAgICAgIHRoaXMuY2FuY2VsRHJhZ2dpbmcoKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcChldmVudClcbiAgICAgICAgICB9XG4gICAgICAgICAgY2FuY2VsRW11bGF0aW9uKClcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjYW5jZWxFbXVsYXRpb24gPSAoKSA9PiB7XG4gICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCBlbXVsYXRlT25GaXJzdE1vdmUpXG4gICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIGNhbmNlbEVtdWxhdGlvbilcbiAgICAgICAgfVxuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgZW11bGF0ZU9uRmlyc3RNb3ZlLCBwYXNzaXZlRmFsc2UpXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCBjYW5jZWxFbXVsYXRpb24sIHBhc3NpdmVGYWxzZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCB0aGlzLl9uYXRpdmVEcmFnU3RhcnQpXG4gICAgICAgIHRoaXMuZWxlbWVudC5kcmFnZ2FibGUgPSB0cnVlXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9uYXRpdmVEcmFnRW5kLCBwYXNzaXZlRmFsc2UpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUsIHBhc3NpdmVGYWxzZSlcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUsIHBhc3NpdmVGYWxzZSlcblxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQsIHBhc3NpdmVGYWxzZSlcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kLCBwYXNzaXZlRmFsc2UpXG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX3Njcm9sbClcbiAgICB0aGlzLnNjcm9sbEVsZW1lbnRzLmZvckVhY2goKHApID0+IHAuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fc2Nyb2xsKSlcblxuICAgIGlmICghdGhpcy5zaG91bGRVc2VOYXRpdmVEcmFnQW5kRHJvcCgpICYmIHRoaXMuZHJhZ1N0YXJ0VGhyZXNob2xkID4gMCkge1xuICAgICAgdGhpcy5fZHJhZ1N0YXJ0UGVuZGluZyA9IHRydWVcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbWl0RHJhZ0V2ZW50KCdzdGFydCcpXG4gICAgfVxuICB9XG5cbiAgZHJhZ01vdmUoZXZlbnQpIHtcbiAgICBsZXQgdG91Y2hcblxuICAgIHRoaXMuaXNUb3VjaEV2ZW50ID0gKGlzVG91Y2ggJiYgKGV2ZW50IGluc3RhbmNlb2Ygd2luZG93LlRvdWNoRXZlbnQpKVxuICAgIGlmICh0aGlzLmlzVG91Y2hFdmVudCkge1xuICAgICAgdG91Y2ggPSBnZXRUb3VjaEJ5SUQoZXZlbnQsIHRoaXMuX3RvdWNoSWQpXG5cbiAgICAgIGlmICghdG91Y2gpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnNlZW1zU2Nyb2xsaW5nKCkpIHtcbiAgICAgICAgdGhpcy5jYW5jZWxEcmFnZ2luZygpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMudG91Y2hQb2ludCA9IG5ldyBQb2ludChcbiAgICAgIHRoaXMuaXNUb3VjaEV2ZW50ID8gdG91Y2gucGFnZVggOiBldmVudC5jbGllbnRYLFxuICAgICAgdGhpcy5pc1RvdWNoRXZlbnQgPyB0b3VjaC5wYWdlWSA6IGV2ZW50LmNsaWVudFlcbiAgICApXG5cbiAgICBpZiAodGhpcy5fZHJhZ1N0YXJ0UGVuZGluZykge1xuICAgICAgY29uc3QgZHggPSB0aGlzLnRvdWNoUG9pbnQueCAtIHRoaXMuX3N0YXJ0VG91Y2hQb2ludC54XG4gICAgICBjb25zdCBkeSA9IHRoaXMudG91Y2hQb2ludC55IC0gdGhpcy5fc3RhcnRUb3VjaFBvaW50LnlcbiAgICAgIGlmIChNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpIDwgdGhpcy5kcmFnU3RhcnRUaHJlc2hvbGQpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICB0aGlzLl9kcmFnU3RhcnRQZW5kaW5nID0gZmFsc2VcbiAgICAgIHRoaXMuZW1pdERyYWdFdmVudCgnc3RhcnQnKVxuICAgIH1cblxuICAgIHRoaXMuaXNEcmFnZ2luZyA9IHRydWVcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgIGxldCBwb2ludCA9IHRoaXMuX3N0YXJ0UG9zaXRpb24uYWRkKHRoaXMudG91Y2hQb2ludC5zdWIodGhpcy5fc3RhcnRUb3VjaFBvaW50KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZCh0aGlzLndpbmRvd1Njcm9sbFBvaW50LnN1Yih0aGlzLl9zdGFydFdpbmRvd1Njcm9sbFBvaW50KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZCh0aGlzLnNjcm9sbEVsZW1lbnRzT2Zmc2V0LnN1Yih0aGlzLl9zdGFydFNjcm9sbEVsZW1lbnRzT2Zmc2V0KSlcblxuICAgIHBvaW50ID0gdGhpcy5ib3VuZGluZy5ib3VuZChwb2ludCwgdGhpcy5nZXRTaXplKCkpXG4gICAgdGhpcy5kZXRlcm1pbmVEaXJlY3Rpb24ocG9pbnQpXG4gICAgdGhpcy5tb3ZlKHBvaW50KVxuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkcmFnZWUtYWN0aXZlJylcbiAgfVxuXG4gIGRyYWdFbmQoZXZlbnQpIHtcbiAgICB0aGlzLmlzVG91Y2hFdmVudCA9IChpc1RvdWNoICYmIChldmVudCBpbnN0YW5jZW9mIHdpbmRvdy5Ub3VjaEV2ZW50KSlcblxuICAgIGlmICh0aGlzLmlzVG91Y2hFdmVudCAmJiAhZ2V0VG91Y2hCeUlEKGV2ZW50LCB0aGlzLl90b3VjaElkKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2RyYWdTdGFydFBlbmRpbmcpIHtcbiAgICAgIC8vIHRocmVzaG9sZCBuZXZlciBjcm9zc2VkIOKAlCB0cmVhdCBhcyBjbGljaywgY2xlYW4gdXAgc2lsZW50bHlcbiAgICAgIHRoaXMuX2RyYWdTdGFydFBlbmRpbmcgPSBmYWxzZVxuICAgICAgdGhpcy5jYW5jZWxEcmFnZ2luZygpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc0RyYWdnaW5nKSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIH1cblxuICAgIHRoaXMuZHJhZ0VuZEFjdGlvbigpXG4gICAgdGhpcy5lbWl0RHJhZ0V2ZW50KCdlbmQnKVxuICAgIHRoaXMuY2FuY2VsRHJhZ2dpbmcoKVxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2VlLWFjdGl2ZScpKVxuICB9XG5cbiAgb25TY3JvbGwoX2V2ZW50KSB7XG4gICAgbGV0IHBvaW50ID0gdGhpcy5fc3RhcnRQb3NpdGlvbi5hZGQodGhpcy50b3VjaFBvaW50LnN1Yih0aGlzLl9zdGFydFRvdWNoUG9pbnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMud2luZG93U2Nyb2xsUG9pbnQuc3ViKHRoaXMuX3N0YXJ0V2luZG93U2Nyb2xsUG9pbnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMuc2Nyb2xsRWxlbWVudHNPZmZzZXQuc3ViKHRoaXMuX3N0YXJ0U2Nyb2xsRWxlbWVudHNPZmZzZXQpKVxuXG4gICAgcG9pbnQgPSB0aGlzLmJvdW5kaW5nLmJvdW5kKHBvaW50LCB0aGlzLmdldFNpemUoKSlcbiAgICBpZiAoIXRoaXMubmF0aXZlRHJhZ0FuZERyb3ApIHtcbiAgICAgIHRoaXMuZGV0ZXJtaW5lRGlyZWN0aW9uKHBvaW50KVxuICAgICAgdGhpcy5tb3ZlKHBvaW50KVxuICAgIH1cbiAgfVxuXG4gIG5hdGl2ZURyYWdTdGFydChldmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQnLCAnRmlyZUZveCBmaXgnKVxuICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gJ21vdmUnXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCB0aGlzLl9uYXRpdmVEcmFnT3ZlcilcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgdGhpcy5fbmF0aXZlRHJvcClcbiAgfVxuXG4gIG5hdGl2ZURyYWdPdmVyKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gJ21vdmUnXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RyYWdlZS1wbGFjZWhvbGRlcicpXG4gICAgaWYgKGV2ZW50LmNsaWVudFggPT09IDAgJiYgZXZlbnQuY2xpZW50WSA9PT0gMCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy50b3VjaFBvaW50ID0gbmV3IFBvaW50KGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpXG4gICAgbGV0IHBvaW50ID0gdGhpcy5fc3RhcnRQb3NpdGlvbi5hZGQodGhpcy50b3VjaFBvaW50LnN1Yih0aGlzLl9zdGFydFRvdWNoUG9pbnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMud2luZG93U2Nyb2xsUG9pbnQuc3ViKHRoaXMuX3N0YXJ0V2luZG93U2Nyb2xsUG9pbnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMuc2Nyb2xsRWxlbWVudHNPZmZzZXQuc3ViKHRoaXMuX3N0YXJ0U2Nyb2xsRWxlbWVudHNPZmZzZXQpKVxuICAgIHBvaW50ID0gdGhpcy5ib3VuZGluZy5ib3VuZChwb2ludCwgdGhpcy5nZXRTaXplKCkpXG4gICAgdGhpcy5kZXRlcm1pbmVEaXJlY3Rpb24ocG9pbnQpXG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvaW50XG4gICAgdGhpcy5lbWl0RHJhZ0V2ZW50KCdtb3ZlJylcbiAgfVxuXG4gIG5hdGl2ZURyYWdFbmQoX2V2ZW50KSB7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdlZS1wbGFjZWhvbGRlcicpXG4gICAgdGhpcy5kcmFnRW5kQWN0aW9uKClcbiAgICB0aGlzLmVtaXREcmFnRXZlbnQoJ2VuZCcpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCB0aGlzLl9uYXRpdmVEcmFnT3ZlcilcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcm9wJywgdGhpcy5fbmF0aXZlRHJvcClcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fc2Nyb2xsKVxuICAgIHRoaXMuc2Nyb2xsRWxlbWVudHMuZm9yRWFjaCgocCkgPT4gcC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9zY3JvbGwpKVxuICAgIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnZHJhZ2dhYmxlJylcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgdGhpcy5fbmF0aXZlRHJhZ1N0YXJ0KVxuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZWUtYWN0aXZlJylcbiAgfVxuXG4gIG5hdGl2ZURyb3AoZXZlbnQpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIGNhbmNlbERyYWdnaW5nICgpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG5cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcblxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX3Njcm9sbClcbiAgICB0aGlzLnNjcm9sbEVsZW1lbnRzLmZvckVhY2goKHApID0+IHAucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fc2Nyb2xsKSlcblxuICAgIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlXG4gICAgdGhpcy5fcHJldmlvdXNEaXJlY3Rpb25Qb3NpdGlvbiA9IG51bGxcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkcmFnZ2FibGUnKVxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCB0aGlzLl9uYXRpdmVEcmFnU3RhcnQpXG4gIH1cblxuICBjb3B5U3R5bGVzKHNvdXJjZSwgZGVzdGluYXRpb24pIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmNvcHlTdHlsZXMpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5jb3B5U3R5bGVzKHNvdXJjZSwgZGVzdGluYXRpb24pXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvcHlTdHlsZXMoc291cmNlLCBkZXN0aW5hdGlvbilcbiAgICB9XG4gIH1cblxuICBlbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3AoZXZlbnQpIHtcbiAgICBjb25zdCBjb250YWluZXJSZWN0ID0gdGhpcy5jb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICBjb25zdCBjbG9uZWRFbGVtZW50ID0gdGhpcy5lbGVtZW50LmNsb25lTm9kZSh0cnVlKVxuICAgIGNsb25lZEVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcGVydHldID0gJydcbiAgICB0aGlzLmNvcHlTdHlsZXModGhpcy5lbGVtZW50LCBjbG9uZWRFbGVtZW50KVxuICAgIGNsb25lZEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZHJhZ2VlLW5hdGl2ZS1lbXVsYXRpb24nKVxuICAgIGNsb25lZEVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjbG9uZWRFbGVtZW50KVxuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkcmFnZWUtcGxhY2Vob2xkZXInKVxuXG4gICAgY29uc3QgZW11bGF0aW9uRHJhZ2dhYmxlID0gbmV3IERyYWdnYWJsZShjbG9uZWRFbGVtZW50LCB7XG4gICAgICBjb250YWluZXI6IGRvY3VtZW50LmJvZHksXG4gICAgICB0b3VjaERyYWdnaW5nVGhyZXNob2xkOiAwLFxuICAgICAgZG9tRXZlbnRzOiBmYWxzZSxcbiAgICAgIGJvdW5kKHBvaW50KSB7XG4gICAgICAgIHJldHVybiBwb2ludFxuICAgICAgfSxcbiAgICAgIG9uOiB7XG4gICAgICAgICdkcmFnOm1vdmUnOiAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgY29udGFpbmVyUmVjdFBvaW50ID0gbmV3IFBvaW50KGNvbnRhaW5lclJlY3QubGVmdCwgY29udGFpbmVyUmVjdC50b3ApXG4gICAgICAgICAgdGhpcy5wb3NpdGlvbiA9IGVtdWxhdGlvbkRyYWdnYWJsZS5wb3NpdGlvbi5zdWIoY29udGFpbmVyUmVjdFBvaW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3ViKHRoaXMuX3N0YXJ0V2luZG93U2Nyb2xsUG9pbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy5fc3RhcnRQYXJlbnRzU2Nyb2xsT2Zmc2V0KVxuXG4gICAgICAgICAgdGhpcy5kZXRlcm1pbmVEaXJlY3Rpb24odGhpcy5wb3NpdGlvbilcbiAgICAgICAgICB0aGlzLmVtaXREcmFnRXZlbnQoJ21vdmUnKVxuICAgICAgICB9LFxuICAgICAgICAnZHJhZzplbmQnOiAoKSA9PiB7XG4gICAgICAgICAgZW11bGF0aW9uRHJhZ2dhYmxlLmRlc3Ryb3koKVxuICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoY2xvbmVkRWxlbWVudClcbiAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2VlLXBsYWNlaG9sZGVyJylcbiAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2VlLWFjdGl2ZScpXG5cbiAgICAgICAgICB0aGlzLmRyYWdFbmRBY3Rpb24oKVxuICAgICAgICAgIHRoaXMuZW1pdERyYWdFdmVudCgnZW5kJylcbiAgICAgICAgICB0aGlzLmNhbmNlbERyYWdnaW5nKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBjb250YWluZXJSZWN0UG9pbnQgPSBuZXcgUG9pbnQoY29udGFpbmVyUmVjdC5sZWZ0LCBjb250YWluZXJSZWN0LnRvcClcbiAgICBlbXVsYXRpb25EcmFnZ2FibGUuX3N0YXJ0V2luZG93U2Nyb2xsUG9pbnQgPSB0aGlzLl9zdGFydFdpbmRvd1Njcm9sbFBvaW50XG5cbiAgICBlbXVsYXRpb25EcmFnZ2FibGUubW92ZShcbiAgICAgIHRoaXMucGlubmVkUG9zaXRpb24uYWRkKGNvbnRhaW5lclJlY3RQb2ludClcbiAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMud2luZG93U2Nyb2xsUG9pbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgLnN1Yih0aGlzLnBhcmVudHNTY3JvbGxPZmZzZXQpXG4gICAgKVxuXG4gICAgZW11bGF0aW9uRHJhZ2dhYmxlLmRyYWdTdGFydChldmVudClcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBlbWl0RHJhZ0V2ZW50KHR5cGUpIHtcbiAgICB0aGlzLmVtaXQoYGRyYWc6JHt0eXBlfWAsIHRoaXMpXG5cbiAgICBpZiAodGhpcy5kb21FdmVudHMpIHtcbiAgICAgIGRpc3BhdGNoRG9tRXZlbnQodGhpcy5lbGVtZW50LCBgZHJhZ2VlOiR7dHlwZX1gLCB7IGRyYWdnYWJsZTogdGhpcyB9KVxuICAgIH1cbiAgfVxuXG4gIG92ZXJyaWRlRHJhZ0VuZEFjdGlvbihhY3Rpb24pIHtcbiAgICB0aGlzLl9kcmFnRW5kQWN0aW9ucy5wdXNoKGFjdGlvbilcbiAgICByZXR1cm4gKCkgPT4gcmVtb3ZlSXRlbSh0aGlzLl9kcmFnRW5kQWN0aW9ucywgYWN0aW9uKVxuICB9XG5cbiAgZHJhZ0VuZEFjdGlvbigpIHtcbiAgICBjb25zdCBhY3Rpb24gPSB0aGlzLl9kcmFnRW5kQWN0aW9uc1t0aGlzLl9kcmFnRW5kQWN0aW9ucy5sZW5ndGggLSAxXVxuXG4gICAgaWYgKGFjdGlvbikge1xuICAgICAgYWN0aW9uKClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5waW5Qb3NpdGlvbih0aGlzLnBvc2l0aW9uKVxuICAgIH1cbiAgfVxuXG4gIGdldFJlY3RhbmdsZSgpIHtcbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZSh0aGlzLnBvc2l0aW9uLCB0aGlzLmdldFNpemUoKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgaWYgKHRoaXMuYm91bmRpbmcucmVmcmVzaCkge1xuICAgICAgdGhpcy5ib3VuZGluZy5yZWZyZXNoKClcbiAgICB9XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuaGFuZGxlci5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQpXG4gICAgdGhpcy5oYW5kbGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydClcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgdGhpcy5fbmF0aXZlRHJhZ1N0YXJ0KVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIHRoaXMuX25hdGl2ZURyYWdPdmVyKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzLl9uYXRpdmVEcm9wKVxuICAgIHRoaXMucmVzZXRFbWl0dGVyKClcblxuICAgIGNvbnN0IGluZGV4ID0gZHJhZ2dhYmxlcy5pbmRleE9mKHRoaXMpXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIGRyYWdnYWJsZXMuc3BsaWNlKGluZGV4LCAxKVxuICAgIH1cbiAgfVxuXG4gIGdldCBjb250YWluZXIoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9jb250YWluZXIgPSB0aGlzLl9jb250YWluZXIgfHwgdGhpcy5vcHRpb25zLmNvbnRhaW5lciB8fCB0aGlzLm9wdGlvbnMucGFyZW50IHx8IHRoaXMuZWxlbWVudC5vZmZzZXRQYXJlbnQpXG4gIH1cblxuICBnZXQgaGFuZGxlcigpIHtcbiAgICBpZiAoIXRoaXMuX2hhbmRsZXIpIHtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmhhbmRsZXIgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZXIgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLm9wdGlvbnMuaGFuZGxlcikgfHwgdGhpcy5lbGVtZW50XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9oYW5kbGVyID0gdGhpcy5vcHRpb25zLmhhbmRsZXIgfHwgdGhpcy5lbGVtZW50XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2hhbmRsZXJcbiAgfVxuXG4gIGdldCBzdG9wUHJvcGFnYXRpb25PbkRyYWdTdGFydCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLnN0b3BQcm9wYWdhdGlvbk9uRHJhZ1N0YXJ0IHx8IGZhbHNlXG4gIH1cblxuICBnZXQgbmF0aXZlRHJhZ0FuZERyb3AoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5uYXRpdmVEcmFnQW5kRHJvcCB8fCBmYWxzZVxuICB9XG5cbiAgZ2V0IGRvbUV2ZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmRvbUV2ZW50cyAhPT0gZmFsc2VcbiAgfVxuXG4gIGdldCBlbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3BPblRvdWNoKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wT25Ub3VjaCB8fCBmYWxzZVxuICB9XG5cbiAgZ2V0IHNob3VsZFJlbW92ZVplcm9UcmFuc2xhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5zaG91bGRSZW1vdmVaZXJvVHJhbnNsYXRlIHx8IGZhbHNlXG4gIH1cblxuICBnZXQgdG91Y2hEcmFnZ2luZ1RocmVzaG9sZCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLnRvdWNoRHJhZ2dpbmdUaHJlc2hvbGQgfHwgMFxuICB9XG5cbiAgZ2V0IGRyYWdTdGFydFRocmVzaG9sZCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmRyYWdTdGFydFRocmVzaG9sZCB8fCAwXG4gIH1cblxuICBnZXQgZHJhZ092ZXJUaHJvdHRsZUR1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZHJhZ092ZXJUaHJvdHRsZUR1cmF0aW9uIHx8IDE2XG4gIH1cblxuICBnZXQgaXNDb25zaWRlclRyYW5zZm9ybU9mZnNldCAoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5jb25zaWRlclRyYW5zZm9ybU9mZnNldCB8fCBmYWxzZVxuICB9XG5cbiAgZ2V0IHdpbmRvd1Njcm9sbFBvaW50KCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQod2luZG93LnNjcm9sbFgsIHdpbmRvdy5zY3JvbGxZKVxuICB9XG5cbiAgZ2V0IHNjcm9sbFJvb3RDb250YWluZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5zY3JvbGxSb290Q29udGFpbmVyIHx8IHRoaXMuY29udGFpbmVyXG4gIH1cblxuICBnZXQgc2Nyb2xsRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhY2hlZFNjcm9sbEVsZW1lbnRzXG4gICAgICA/IHRoaXMuX2NhY2hlZFNjcm9sbEVsZW1lbnRzXG4gICAgICA6ICh0aGlzLl9jYWNoZWRTY3JvbGxFbGVtZW50cyA9IGdldFBhcmVudHNDaGFpbih0aGlzLmVsZW1lbnQsIHRoaXMuc2Nyb2xsUm9vdENvbnRhaW5lcikpXG4gIH1cblxuICBnZXQgc2Nyb2xsRWxlbWVudHNPZmZzZXQoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludChcbiAgICAgIHRoaXMuc2Nyb2xsRWxlbWVudHMucmVkdWNlKChzdW0sIHApID0+IHN1bSArIHAuc2Nyb2xsTGVmdCwgMCksXG4gICAgICB0aGlzLnNjcm9sbEVsZW1lbnRzLnJlZHVjZSgoc3VtLCBwKSA9PiBzdW0gKyBwLnNjcm9sbFRvcCwgMClcbiAgICApXG4gIH1cblxuICBnZXQgcGFyZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5fY2FjaGVkUGFyZW50c1xuICAgICAgPyB0aGlzLl9jYWNoZWRQYXJlbnRzXG4gICAgICA6ICh0aGlzLl9jYWNoZWRQYXJlbnRzID0gZ2V0UGFyZW50c0NoYWluKHRoaXMuZWxlbWVudCwgdGhpcy5jb250YWluZXIpKVxuICB9XG5cbiAgZ2V0IHBhcmVudHNTY3JvbGxPZmZzZXQoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludChcbiAgICAgIHRoaXMucGFyZW50cy5yZWR1Y2UoKHN1bSwgcCkgPT4gc3VtICsgcC5zY3JvbGxMZWZ0LCAwKSxcbiAgICAgIHRoaXMucGFyZW50cy5yZWR1Y2UoKHN1bSwgcCkgPT4gc3VtICsgcC5zY3JvbGxUb3AsIDApXG4gICAgKVxuICB9XG5cbiAgZ2V0IGVuYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlXG4gIH1cblxuICBzZXQgZW5hYmxlKGVuYWJsZSkge1xuICAgIGlmIChlbmFibGUpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZWUtZGlzYWJsZScpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkcmFnZWUtZGlzYWJsZScpXG4gICAgfVxuXG4gICAgdGhpcy5fZW5hYmxlID0gZW5hYmxlXG4gIH1cbn1cblxuRHJhZ2dhYmxlLmVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKClcbkRyYWdnYWJsZS5lbWl0dGVyLm9uKCdkcmFnZ2FibGU6Y3JlYXRlJywgYWRkVG9EZWZhdWx0U2NvcGUpXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0LCBpbW1lZGlhdGUpIHtcbiAgbGV0IHRpbWVvdXRcblxuICByZXR1cm4gZnVuY3Rpb24gZXhlY3V0ZWRGdW5jdGlvbigpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpc1xuICAgIGNvbnN0IGFyZ3MgPSBhcmd1bWVudHNcblxuICAgIGNvbnN0IGxhdGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICB0aW1lb3V0ID0gbnVsbFxuICAgICAgaWYgKCFpbW1lZGlhdGUpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncylcbiAgICB9XG5cbiAgICBjb25zdCBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0XG5cbiAgICBjbGVhclRpbWVvdXQodGltZW91dClcblxuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KVxuXG4gICAgaWYgKGNhbGxOb3cpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncylcbiAgfVxufVxuIiwiaW1wb3J0IGRlYm91bmNlIGZyb20gJy4vdXRpbHMvZGVib3VuY2UnXG5pbXBvcnQgcmVtb3ZlSXRlbSBmcm9tICcuL3V0aWxzL3JlbW92ZS1hcnJheS1pdGVtJ1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50RW1pdHRlcidcbmltcG9ydCBkaXNwYXRjaERvbUV2ZW50IGZyb20gJy4vdXRpbHMvZGlzcGF0Y2gtZG9tLWV2ZW50J1xuaW1wb3J0IHtcbiAgZ2V0RGlzdGFuY2UsXG4gIGluZGV4T2ZOZWFyZXN0UG9pbnRcbn0gZnJvbSAnLi9nZW9tZXRyeS9kaXN0YW5jZXMnXG5cbmltcG9ydCBEcmFnZ2FibGUgZnJvbSAnLi9kcmFnZ2FibGUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3QgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvcihkcmFnZ2FibGVzLCBvcHRpb25zPXt9KSB7XG4gICAgc3VwZXIob3B0aW9ucylcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHRpbWVFbmQ6IDIwMCxcbiAgICAgIHRpbWVFeGNhbmdlOiA0MDAsXG4gICAgICByYWRpdXM6IDMwXG4gICAgfSwgb3B0aW9ucylcblxuICAgIHRoaXMuY29udGFpbmVyID0gb3B0aW9ucy5jb250YWluZXJcbiAgICB0aGlzLmRyYWdnYWJsZXMgPSBkcmFnZ2FibGVzXG4gICAgdGhpcy5jaGFuZ2VkRHVyaW5nSXRlcmF0aW9uID0gZmFsc2VcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMgPSBuZXcgTWFwKClcblxuICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoZGVib3VuY2UodGhpcy5vblJlc2l6ZS5iaW5kKHRoaXMpLCAxMDApKVxuXG4gICAgaWYgKHRoaXMuY29udGFpbmVyKSB7XG4gICAgICB0aGlzLnJlc2l6ZU9ic2VydmVyLm9ic2VydmUodGhpcy5jb250YWluZXIpXG4gICAgfVxuXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIG9uUmVzaXplKCkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMucmVvcmRlck9uQ2hhbmdlKSB0aGlzLnJlc2V0KClcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBpZighZHJhZ2dhYmxlLmlzRHJhZ2dpbmcpIHtcbiAgICAgICAgZHJhZ2dhYmxlLnN0YXJ0UG9zaXRpb25pbmcoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuX2VuYWJsZSA9IHRydWVcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB0aGlzLmluaXREcmFnZ2FibGUoZHJhZ2dhYmxlKSlcbiAgfVxuXG4gIGluaXREcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgZHJhZ2dhYmxlLmVuYWJsZSA9IHRoaXMuX2VuYWJsZVxuICAgIHRoaXMubGlzdGVuVG8oZHJhZ2dhYmxlLCAnZHJhZzptb3ZlJywgKCkgPT4gdGhpcy5vbk1vdmUoZHJhZ2dhYmxlKSlcbiAgICB0aGlzLnRyYWNrUmVsZWFzZShkcmFnZ2FibGUsIGRyYWdnYWJsZS5vdmVycmlkZURyYWdFbmRBY3Rpb24oKCkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbiwgdGhpcy5vcHRpb25zLnRpbWVFbmQpXG4gICAgICB0aGlzLm9uRW5kKGRyYWdnYWJsZSlcbiAgICB9KSlcbiAgICB0aGlzLnJlc2l6ZU9ic2VydmVyLm9ic2VydmUoZHJhZ2dhYmxlLmVsZW1lbnQpXG4gIH1cblxuICBsaXN0ZW5UbyhkcmFnZ2FibGUsIGV2ZW50TmFtZSwgaGFuZGxlcikge1xuICAgIHRoaXMudHJhY2tSZWxlYXNlKGRyYWdnYWJsZSwgZHJhZ2dhYmxlLm9uKGV2ZW50TmFtZSwgaGFuZGxlcikpXG4gIH1cblxuICB0cmFja1JlbGVhc2UoZHJhZ2dhYmxlLCByZWxlYXNlKSB7XG4gICAgaWYgKCF0aGlzLnN1YnNjcmlwdGlvbnMuaGFzKGRyYWdnYWJsZSkpIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5zZXQoZHJhZ2dhYmxlLCBbXSlcbiAgICB9XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLmdldChkcmFnZ2FibGUpLnB1c2gocmVsZWFzZSlcbiAgfVxuXG4gIHJlbGVhc2VEcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgdGhpcy5yZXNpemVPYnNlcnZlci51bm9ic2VydmUoZHJhZ2dhYmxlLmVsZW1lbnQpXG4gICAgY29uc3QgcmVsZWFzZXMgPSB0aGlzLnN1YnNjcmlwdGlvbnMuZ2V0KGRyYWdnYWJsZSkgfHwgW11cbiAgICByZWxlYXNlcy5mb3JFYWNoKChyZWxlYXNlKSA9PiByZWxlYXNlKCkpXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLmRlbGV0ZShkcmFnZ2FibGUpXG4gICAgcmVtb3ZlSXRlbSh0aGlzLmRyYWdnYWJsZXMsIGRyYWdnYWJsZSlcbiAgfVxuXG4gIG9uTW92ZShkcmFnZ2FibGUpIHtcbiAgICBpZiAodGhpcy5zd2FwcGluZ0Rpc2FibGVkKSByZXR1cm5cblxuICAgIGNvbnN0IHNvcnRlZERyYWdnYWJsZXMgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuICAgIGNvbnN0IHBpbm5lZFBvc2l0aW9ucyA9IHNvcnRlZERyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbilcblxuICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IHNvcnRlZERyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpXG4gICAgY29uc3QgdGFyZ2V0SW5kZXggPSBpbmRleE9mTmVhcmVzdFBvaW50KHBpbm5lZFBvc2l0aW9ucywgZHJhZ2dhYmxlLnBvc2l0aW9uLCB0aGlzLm9wdGlvbnMucmFkaXVzLCB0aGlzLmRpc3RhbmNlRnVuYylcblxuICAgIGlmICh0YXJnZXRJbmRleCAhPT0gLTEgJiYgY3VycmVudEluZGV4ICE9PSB0YXJnZXRJbmRleCkge1xuICAgICAgaWYgKHRhcmdldEluZGV4IDwgY3VycmVudEluZGV4KSB7XG4gICAgICAgIGZvciAobGV0IGk9dGFyZ2V0SW5kZXg7IGk8Y3VycmVudEluZGV4OyBpKyspIHtcbiAgICAgICAgICBzb3J0ZWREcmFnZ2FibGVzW2ldLnBpblBvc2l0aW9uKHBpbm5lZFBvc2l0aW9uc1tpKzFdLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAobGV0IGk9Y3VycmVudEluZGV4OyBpPHRhcmdldEluZGV4OyBpKyspIHtcbiAgICAgICAgICBzb3J0ZWREcmFnZ2FibGVzW2krMV0ucGluUG9zaXRpb24ocGlubmVkUG9zaXRpb25zW2ldLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGRyYWdnYWJsZS5uYXRpdmVEcmFnQW5kRHJvcCkge1xuICAgICAgICBkcmFnZ2FibGUucGluUG9zaXRpb24ocGlubmVkUG9zaXRpb25zW3RhcmdldEluZGV4XSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbiA9IHBpbm5lZFBvc2l0aW9uc1t0YXJnZXRJbmRleF1cbiAgICAgIH1cblxuICAgICAgdGhpcy5jaGFuZ2VkRHVyaW5nSXRlcmF0aW9uID0gdHJ1ZVxuICAgIH1cbiAgfVxuXG4gIG9uRW5kKGRyYWdnYWJsZSkge1xuICAgIGlmICh0aGlzLmNoYW5nZWREdXJpbmdJdGVyYXRpb24pIHtcbiAgICAgIHRoaXMuZW1pdExpc3RFdmVudCgnY2hhbmdlJywgZHJhZ2dhYmxlKVxuICAgICAgdGhpcy5jaGFuZ2VkRHVyaW5nSXRlcmF0aW9uID0gZmFsc2VcblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZW9yZGVyT25DaGFuZ2UgJiYgdGhpcy5vcHRpb25zLmNvbnRhaW5lcikge1xuICAgICAgICB0aGlzLnJlb3JkZXJFbGVtZW50cyhkcmFnZ2FibGUpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVvcmRlckVsZW1lbnRzKG1vdmVkRHJhZ2dhYmxlKSB7XG4gICAgY29uc3Qgc29ydGVkRHJhZ2dhYmxlcyA9IHRoaXMuZ2V0U29ydGVkRHJhZ2dhYmxlcygpXG4gICAgY29uc3QgaW5kZXggPSBzb3J0ZWREcmFnZ2FibGVzLmluZGV4T2YobW92ZWREcmFnZ2FibGUpXG4gICAgY29uc3QgbmV4dCA9IHNvcnRlZERyYWdnYWJsZXNbaW5kZXggKyAxXVxuXG4gICAgdGhpcy5yZXNldCgpXG5cbiAgICBpZiAobmV4dCkge1xuICAgICAgdGhpcy5jb250YWluZXIuaW5zZXJ0QmVmb3JlKG1vdmVkRHJhZ2dhYmxlLmVsZW1lbnQsIG5leHQuZWxlbWVudClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQobW92ZWREcmFnZ2FibGUuZWxlbWVudClcbiAgICB9XG5cbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZCkgPT4gZC5zdGFydFBvc2l0aW9uaW5nKCkpXG4gICAgdGhpcy5lbWl0TGlzdEV2ZW50KCdyZW9yZGVyZWQnLCBtb3ZlZERyYWdnYWJsZSlcbiAgfVxuXG4gIGVtaXRMaXN0RXZlbnQodHlwZSwgZHJhZ2dhYmxlKSB7XG4gICAgdGhpcy5lbWl0KGBsaXN0OiR7dHlwZX1gLCBkcmFnZ2FibGUpXG5cbiAgICBpZiAodGhpcy5kb21FdmVudHMpIHtcbiAgICAgIGRpc3BhdGNoRG9tRXZlbnQoZHJhZ2dhYmxlLmVsZW1lbnQsIGBkcmFnZWU6bGlzdC0ke3R5cGV9YCwgeyBsaXN0OiB0aGlzLCBkcmFnZ2FibGUgfSlcbiAgICB9XG4gIH1cblxuICBnZXRDdXJyZW50UGlubmVkUG9zaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbi5jbG9uZSgpKVxuICB9XG5cbiAgZ2V0U29ydGVkRHJhZ2dhYmxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5kcmFnZ2FibGVzLnNvcnQodGhpcy5zb3J0aW5nLmJpbmQodGhpcykpXG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucmVzZXRQb3NpdGlvblRvSW5pdGlhbCgpKVxuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucmVmcmVzaCgpKVxuICB9XG5cbiAgYWRkKGRyYWdnYWJsZXMpIHtcbiAgICBpZiAoIShkcmFnZ2FibGVzIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgICBkcmFnZ2FibGVzID0gW2RyYWdnYWJsZXNdXG4gICAgfVxuICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB0aGlzLmluaXREcmFnZ2FibGUoZHJhZ2dhYmxlKSlcbiAgICB0aGlzLmRyYWdnYWJsZXMgPSB0aGlzLmRyYWdnYWJsZXMuY29uY2F0KGRyYWdnYWJsZXMpXG4gIH1cblxuICByZW1vdmUoZHJhZ2dhYmxlcykge1xuICAgIGNvbnN0IGluaXRpYWxQb3NpdGlvbnMgPSB0aGlzLmRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5pbml0aWFsUG9zaXRpb24pXG4gICAgY29uc3QgbGlzdCA9IFtdXG4gICAgY29uc3Qgc29ydGVkRHJhZ2dhYmxlcyA9IHRoaXMuZ2V0U29ydGVkRHJhZ2dhYmxlcygpXG5cbiAgICBpZiAoIShkcmFnZ2FibGVzIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgICBkcmFnZ2FibGVzID0gW2RyYWdnYWJsZXNdXG4gICAgfVxuXG4gICAgZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHRoaXMucmVsZWFzZURyYWdnYWJsZShkcmFnZ2FibGUpKVxuXG4gICAgbGV0IGogPSAwXG4gICAgc29ydGVkRHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGlmICh0aGlzLmRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMSkge1xuICAgICAgICBpZiAoZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uICE9PSBpbml0aWFsUG9zaXRpb25zW2pdKSB7XG4gICAgICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKGluaXRpYWxQb3NpdGlvbnNbal0sIHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSlcbiAgICAgICAgfVxuICAgICAgICBkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uID0gaW5pdGlhbFBvc2l0aW9uc1tqXVxuICAgICAgICBqKytcbiAgICAgICAgbGlzdC5wdXNoKGRyYWdnYWJsZSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGxpc3RcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMucmVtb3ZlKHRoaXMuZHJhZ2dhYmxlcy5zbGljZSgpKVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUuZGVzdHJveSgpKVxuICAgIGlmICh0aGlzLmNvbnRhaW5lcikge1xuICAgICAgdGhpcy5yZXNpemVPYnNlcnZlci51bm9ic2VydmUodGhpcy5jb250YWluZXIpXG4gICAgfVxuICB9XG5cbiAgc29ydGluZyhkcmFnZ2FibGVBLCBkcmFnZ2FibGVCKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5zb3J0aW5nKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLnNvcnRpbmcoZHJhZ2dhYmxlQSwgZHJhZ2dhYmxlQilcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGRyYWdnYWJsZUEucGlubmVkUG9zaXRpb24ueSA8IGRyYWdnYWJsZUIucGlubmVkUG9zaXRpb24ueSkgcmV0dXJuIC0xXG4gICAgICBpZiAoZHJhZ2dhYmxlQS5waW5uZWRQb3NpdGlvbi55ID4gZHJhZ2dhYmxlQi5waW5uZWRQb3NpdGlvbi55KSByZXR1cm4gMVxuICAgICAgaWYgKGRyYWdnYWJsZUEucGlubmVkUG9zaXRpb24ueCA8IGRyYWdnYWJsZUIucGlubmVkUG9zaXRpb24ueCkgcmV0dXJuIC0xXG4gICAgICBpZiAoZHJhZ2dhYmxlQS5waW5uZWRQb3NpdGlvbi54ID4gZHJhZ2dhYmxlQi5waW5uZWRQb3NpdGlvbi54KSByZXR1cm4gMVxuICAgICAgcmV0dXJuIDBcbiAgICB9XG4gIH1cblxuICBnZXQgZGlzdGFuY2VGdW5jKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZ2V0RGlzdGFuY2UgfHwgZ2V0RGlzdGFuY2VcbiAgfVxuXG4gIGdldCBkb21FdmVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5kb21FdmVudHMgIT09IGZhbHNlXG4gIH1cblxuICBnZXQgcG9zaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmdldEN1cnJlbnRQaW5uZWRQb3NpdGlvbnMoKVxuICB9XG5cbiAgc2V0IHBvc2l0aW9ucyhwb3NpdGlvbnMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gJ3dyb25nIGFycmF5IGxlbmd0aCdcbiAgICBpZiAocG9zaXRpb25zLmxlbmd0aCA9PT0gdGhpcy5kcmFnZ2FibGVzLmxlbmd0aCkge1xuICAgICAgcG9zaXRpb25zLmZvckVhY2goKHBvaW50LCBpKSA9PiB7XG4gICAgICAgIHRoaXMuZHJhZ2dhYmxlc1tpXS5waW5Qb3NpdGlvbihwb2ludClcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG1lc3NhZ2VcbiAgICB9XG4gIH1cblxuICBnZXQgZW5hYmxlKCkge1xuICAgIHJldHVybiB0aGlzLl9lbmFibGVcbiAgfVxuXG4gIHNldCBlbmFibGUoZW5hYmxlKSB7XG4gICAgdGhpcy5fZW5hYmxlID0gZW5hYmxlXG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLmVuYWJsZSA9IGVuYWJsZVxuICAgIH0pXG4gIH1cblxuICBnZXQgc3dhcHBpbmdEaXNhYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3dhcHBpbmdEaXNhYmxlZFxuICB9XG5cbiAgc2V0IHN3YXBwaW5nRGlzYWJsZWQoZGlzYWJsZWQpIHtcbiAgICB0aGlzLl9zd2FwcGluZ0Rpc2FibGVkID0gZGlzYWJsZWRcbiAgfVxufVxuIiwiaW1wb3J0IExpc3QgZnJvbSAnLi9saXN0J1xuaW1wb3J0IHsgaW5kZXhPZk5lYXJlc3RQb2ludCwgZ2V0WERpZmZlcmVuY2UsIGdldFlEaWZmZXJlbmNlIH0gZnJvbSAnLi9nZW9tZXRyeS9kaXN0YW5jZXMnXG5cbmltcG9ydCBEcmFnZ2FibGUgZnJvbSAnLi9kcmFnZ2FibGUnXG5cbmNvbnN0IGFycmF5TW92ZSA9IChhcnJheSwgZnJvbSwgdG8pID0+IHtcbiAgYXJyYXkuc3BsaWNlKHRvIDwgMCA/IGFycmF5Lmxlbmd0aCArIHRvIDogdG8sIDAsIGFycmF5LnNwbGljZShmcm9tLCAxKVswXSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnViYmxpbmdMaXN0IGV4dGVuZHMgTGlzdCB7XG4gIGF1dG9EZXRlY3RHYXAoKSB7XG4gICAgaWYgKHRoaXMuX2dhcCAhPT0gdW5kZWZpbmVkIHx8IHRoaXMuZXhwbGljaXRHYXAgIT09IHVuZGVmaW5lZCB8fCB0aGlzLmRyYWdnYWJsZXMubGVuZ3RoIDwgMikgcmV0dXJuXG5cbiAgICBjb25zdCBheGlzID0gdGhpcy5heGlzXG4gICAgY29uc3Qgc29ydGVkID0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcbiAgICAvLyBEZXRhY2hlZCBlbGVtZW50cyByZXBvcnQgc2l6ZSAwXG4gICAgY29uc3QgaW5kZXggPSBzb3J0ZWQuZmluZEluZGV4KChkLCBpKSA9PiBpIDwgc29ydGVkLmxlbmd0aCAtIDEgJiYgZC5lbGVtZW50LmlzQ29ubmVjdGVkKVxuICAgIGlmIChpbmRleCA9PT0gLTEpIHJldHVyblxuXG4gICAgY29uc3QgW2N1cnJlbnQsIG5leHRdID0gW3NvcnRlZFtpbmRleF0sIHNvcnRlZFtpbmRleCArIDFdXVxuICAgIHRoaXMuX2dhcCA9IG5leHQucGlubmVkUG9zaXRpb25bYXhpc10gLSBjdXJyZW50LnBpbm5lZFBvc2l0aW9uW2F4aXNdIC0gY3VycmVudC5nZXRTaXplKClbYXhpc11cbiAgfVxuXG4gIGF1dG9EZXRlY3RTdGFydFBvc2l0aW9uKCkge1xuICAgIGlmICh0aGlzLmRyYWdnYWJsZXMubGVuZ3RoID49IDEgJiYgIXRoaXMuc3RhcnRQb3NpdGlvbikge1xuICAgICAgdGhpcy5zdGFydFBvc2l0aW9uID0gdGhpcy5kcmFnZ2FibGVzWzBdLnBpbm5lZFBvc2l0aW9uXG4gICAgfVxuICB9XG5cbiAgaW5pdERyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICBzdXBlci5pbml0RHJhZ2dhYmxlKGRyYWdnYWJsZSlcbiAgICB0aGlzLmxpc3RlblRvKGRyYWdnYWJsZSwgJ2RyYWc6c3RhcnQnLCAoKSA9PiB0aGlzLm9uRHJhZ1N0YXJ0KGRyYWdnYWJsZSkpXG4gIH1cblxuICBvbkRyYWdTdGFydChkcmFnZ2FibGUpIHtcbiAgICB0aGlzLmF1dG9EZXRlY3RHYXAoKVxuICAgIHRoaXMuYXV0b0RldGVjdFN0YXJ0UG9zaXRpb24oKVxuICAgIHRoaXMuY2FjaGVkU29ydGVkRHJhZ2dhYmxlcyA9IHRoaXMuZ2V0U29ydGVkRHJhZ2dhYmxlcygpXG4gICAgdGhpcy5pbmRleE9mQWN0aXZlRHJhZ2dhYmxlID0gdGhpcy5jYWNoZWRTb3J0ZWREcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKVxuICB9XG5cbiAgb25Nb3ZlKGRyYWdnYWJsZSkge1xuICAgIGlmICh0aGlzLnN3YXBwaW5nRGlzYWJsZWQpIHJldHVyblxuXG4gICAgY29uc3QgcHJldkRyYWdnYWJsZSA9IHRoaXMuY2FjaGVkU29ydGVkRHJhZ2dhYmxlc1t0aGlzLmluZGV4T2ZBY3RpdmVEcmFnZ2FibGUgLSAxXVxuICAgIGNvbnN0IG5leHREcmFnZ2FibGUgPSB0aGlzLmNhY2hlZFNvcnRlZERyYWdnYWJsZXNbdGhpcy5pbmRleE9mQWN0aXZlRHJhZ2dhYmxlICsgMV1cbiAgICBjb25zdCBjdXJyZW50UG9zaXRpb24gPSBkcmFnZ2FibGUucGlubmVkUG9zaXRpb25cblxuICAgIGxldCBjdXJyZW50T3JkZXJcbiAgICBsZXQgdGFyZ2V0SW5kZXhcblxuICAgIGlmKHRoaXMuaXNNb3ZpbmdCYWNrd2FyZChkcmFnZ2FibGUpICYmIHByZXZEcmFnZ2FibGUpIHtcbiAgICAgIGN1cnJlbnRPcmRlciA9IFtwcmV2RHJhZ2dhYmxlLCBkcmFnZ2FibGVdLm1hcCgoZCkgPT4gZC5waW5uZWRQb3NpdGlvbilcbiAgICAgIHRhcmdldEluZGV4ID0gaW5kZXhPZk5lYXJlc3RQb2ludChjdXJyZW50T3JkZXIsIGRyYWdnYWJsZS5wb3NpdGlvbiwgMTAwMDAsIHRoaXMuZGlzdGFuY2VGdW5jKVxuXG4gICAgICBpZiAodGFyZ2V0SW5kZXggPT09IDApIHtcbiAgICAgICAgaWYoZHJhZ2dhYmxlLnNob3VsZFVzZU5hdGl2ZURyYWdBbmREcm9wKCkpIHtcbiAgICAgICAgICBkcmFnZ2FibGUucGluUG9zaXRpb24ocHJldkRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24gPSBwcmV2RHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uLmNsb25lKClcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwcmV2TmV3UG9zaXRpb24gPSB0aGlzLm5leHRQb3NpdGlvbihkcmFnZ2FibGUucGlubmVkUG9zaXRpb24sIGRyYWdnYWJsZSlcbiAgICAgICAgcHJldk5ld1Bvc2l0aW9uW3RoaXMuY3Jvc3NBeGlzXSA9IGN1cnJlbnRQb3NpdGlvblt0aGlzLmNyb3NzQXhpc11cbiAgICAgICAgcHJldkRyYWdnYWJsZS5waW5Qb3NpdGlvbihwcmV2TmV3UG9zaXRpb24sIHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSlcbiAgICAgICAgYXJyYXlNb3ZlKHRoaXMuY2FjaGVkU29ydGVkRHJhZ2dhYmxlcywgdGhpcy5pbmRleE9mQWN0aXZlRHJhZ2dhYmxlLS0sIHRoaXMuaW5kZXhPZkFjdGl2ZURyYWdnYWJsZSlcbiAgICAgICAgdGhpcy5vbk1vdmUoZHJhZ2dhYmxlKVxuICAgICAgICB0aGlzLmNoYW5nZWREdXJpbmdJdGVyYXRpb24gPSB0cnVlXG4gICAgICB9XG4gICAgfSBlbHNlIGlmKHRoaXMuaXNNb3ZpbmdGb3J3YXJkKGRyYWdnYWJsZSkgJiYgbmV4dERyYWdnYWJsZSkge1xuICAgICAgY3VycmVudE9yZGVyID0gW2RyYWdnYWJsZSwgbmV4dERyYWdnYWJsZV0ubWFwKChkKSA9PiBkLnBpbm5lZFBvc2l0aW9uKVxuICAgICAgdGFyZ2V0SW5kZXggPSBpbmRleE9mTmVhcmVzdFBvaW50KGN1cnJlbnRPcmRlciwgZHJhZ2dhYmxlLnBvc2l0aW9uLCAxMDAwMCwgdGhpcy5kaXN0YW5jZUZ1bmMpXG5cbiAgICAgIGlmKHRhcmdldEluZGV4ID09PSAxKSB7XG4gICAgICAgIG5leHREcmFnZ2FibGUucGluUG9zaXRpb24oZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICAgIGNvbnN0IGRyYWdnYWJsZU5ld1Bvc2l0aW9uID0gdGhpcy5uZXh0UG9zaXRpb24obmV4dERyYWdnYWJsZS5waW5uZWRQb3NpdGlvbiwgbmV4dERyYWdnYWJsZSlcbiAgICAgICAgaWYoZHJhZ2dhYmxlLnNob3VsZFVzZU5hdGl2ZURyYWdBbmREcm9wKCkpIHtcbiAgICAgICAgICBkcmFnZ2FibGUucGluUG9zaXRpb24oZHJhZ2dhYmxlTmV3UG9zaXRpb24pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uID0gZHJhZ2dhYmxlTmV3UG9zaXRpb25cbiAgICAgICAgfVxuICAgICAgICBhcnJheU1vdmUodGhpcy5jYWNoZWRTb3J0ZWREcmFnZ2FibGVzLCB0aGlzLmluZGV4T2ZBY3RpdmVEcmFnZ2FibGUrKywgdGhpcy5pbmRleE9mQWN0aXZlRHJhZ2dhYmxlKVxuICAgICAgICB0aGlzLm9uTW92ZShkcmFnZ2FibGUpXG4gICAgICAgIHRoaXMuY2hhbmdlZER1cmluZ0l0ZXJhdGlvbiA9IHRydWVcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBidWJibGluZyhzb3J0ZWREcmFnZ2FibGVzLCBjdXJyZW50RHJhZ2dhYmxlKSB7XG4gICAgbGV0IGN1cnJlbnRQb3NpdGlvbiA9IHRoaXMuc3RhcnRQb3NpdGlvbi5jbG9uZSgpXG4gICAgc29ydGVkRHJhZ2dhYmxlcyB8fD0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcblxuICAgIHNvcnRlZERyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBpZiAoIWRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbi5jb21wYXJlKGN1cnJlbnRQb3NpdGlvbikpIHtcbiAgICAgICAgaWYgKGRyYWdnYWJsZSA9PT0gY3VycmVudERyYWdnYWJsZSAmJiAhY3VycmVudERyYWdnYWJsZS5zaG91bGRVc2VOYXRpdmVEcmFnQW5kRHJvcCgpKSB7XG4gICAgICAgICAgZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uID0gY3VycmVudFBvc2l0aW9uLmNsb25lKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkcmFnZ2FibGUucGluUG9zaXRpb24oY3VycmVudFBvc2l0aW9uLCAoZHJhZ2dhYmxlID09PSBjdXJyZW50RHJhZ2dhYmxlKSA/IDAgOiB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY3VycmVudFBvc2l0aW9uID0gdGhpcy5uZXh0UG9zaXRpb24oY3VycmVudFBvc2l0aW9uLCBkcmFnZ2FibGUpXG4gICAgfSlcbiAgfVxuXG4gIHJlbW92ZShkcmFnZ2FibGVzKSB7XG4gICAgaWYgKCEoZHJhZ2dhYmxlcyBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgZHJhZ2dhYmxlcyA9IFtkcmFnZ2FibGVzXVxuICAgIH1cblxuICAgIC8vIERldGVjdCBsYXlvdXQgYmVmb3JlIHJlbW92YWwsIG90aGVyd2lzZSB0aGUgZ2FwIGlzIG1lYXN1cmVkIGFjcm9zcyB0aGUgaG9sZVxuICAgIHRoaXMuYXV0b0RldGVjdEdhcCgpXG4gICAgdGhpcy5hdXRvRGV0ZWN0U3RhcnRQb3NpdGlvbigpXG5cbiAgICBkcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gdGhpcy5yZWxlYXNlRHJhZ2dhYmxlKGRyYWdnYWJsZSkpXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gdGhpcy5kcmFnZ2FibGVzLmZpbHRlcigoZCkgPT4gIWRyYWdnYWJsZXMuaW5jbHVkZXMoZCkpXG5cbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZCkgPT4gZC5zdGFydFBvc2l0aW9uaW5nKCkpXG5cbiAgICBpZih0aGlzLmRyYWdnYWJsZXMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5idWJibGluZygpXG4gICAgfVxuICB9XG5cbiAgbmV4dFBvc2l0aW9uKHBvc2l0aW9uLCBkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBuZXh0ID0gcG9zaXRpb24uY2xvbmUoKVxuICAgIG5leHRbdGhpcy5heGlzXSA9IHBvc2l0aW9uW3RoaXMuYXhpc10gKyBkcmFnZ2FibGUuZ2V0U2l6ZSgpW3RoaXMuYXhpc10gKyB0aGlzLmdhcFxuICAgIHJldHVybiBuZXh0XG4gIH1cblxuICBpc01vdmluZ0JhY2t3YXJkKGRyYWdnYWJsZSkge1xuICAgIHJldHVybiB0aGlzLmF4aXMgPT09ICd4JyA/IGRyYWdnYWJsZS5sZWZ0RGlyZWN0aW9uIDogZHJhZ2dhYmxlLnVwRGlyZWN0aW9uXG4gIH1cblxuICBpc01vdmluZ0ZvcndhcmQoZHJhZ2dhYmxlKSB7XG4gICAgcmV0dXJuIHRoaXMuYXhpcyA9PT0gJ3gnID8gZHJhZ2dhYmxlLnJpZ2h0RGlyZWN0aW9uIDogZHJhZ2dhYmxlLmRvd25EaXJlY3Rpb25cbiAgfVxuXG4gIGdldCBheGlzKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuYXhpcyA9PT0gJ3gnID8gJ3gnIDogJ3knXG4gIH1cblxuICBnZXQgY3Jvc3NBeGlzKCkge1xuICAgIHJldHVybiB0aGlzLmF4aXMgPT09ICd4JyA/ICd5JyA6ICd4J1xuICB9XG5cbiAgZ2V0IGRpc3RhbmNlRnVuYygpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmdldERpc3RhbmNlIHx8ICh0aGlzLmF4aXMgPT09ICd4JyA/IGdldFhEaWZmZXJlbmNlIDogZ2V0WURpZmZlcmVuY2UpXG4gIH1cblxuICBnZXQgZXhwbGljaXRHYXAoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5nYXAgPz8gdGhpcy5vcHRpb25zLnZlcnRpY2FsR2FwXG4gIH1cblxuICBnZXQgZ2FwKCkge1xuICAgIGlmICh0aGlzLmV4cGxpY2l0R2FwICE9PSB1bmRlZmluZWQpIHJldHVybiB0aGlzLmV4cGxpY2l0R2FwXG5cbiAgICB0aGlzLmF1dG9EZXRlY3RHYXAoKVxuICAgIHJldHVybiB0aGlzLl9nYXAgfHwgMFxuICB9XG5cbiAgc2V0IGdhcChnYXBWYWx1ZSkge1xuICAgIHRoaXMub3B0aW9ucy5nYXAgPSBnYXBWYWx1ZVxuICB9XG5cbiAgLy8gRGVwcmVjYXRlZCBhbGlhcyBmb3IgYGdhcGBcbiAgZ2V0IHZlcnRpY2FsR2FwKCkge1xuICAgIHJldHVybiB0aGlzLmdhcFxuICB9XG5cbiAgc2V0IHZlcnRpY2FsR2FwKGdhcFZhbHVlKSB7XG4gICAgdGhpcy5nYXAgPSBnYXBWYWx1ZVxuICB9XG59XG4iXSwibmFtZXMiOlsiZ2V0UGFyZW50c0NoYWluIiwiY2hpbGRFbGVtZW50Iiwicm9vdEVsZW1lbnQiLCJjaGFpbiIsImVsZW1lbnQiLCJwYXJlbnROb2RlIiwidW5zaGlmdCIsIlBvaW50IiwiY29uc3RydWN0b3IiLCJ4IiwieSIsImFkZCIsInAiLCJzdWIiLCJtdWx0IiwiayIsIm5lZ2F0aXZlIiwiY29tcGFyZSIsImNsb25lIiwidG9TdHJpbmciLCJlbGVtZW50T2Zmc2V0IiwicGFyZW50Iiwib2Zmc2V0UGFyZW50Iiwib2Zmc2V0TGVmdCIsImNsaWVudExlZnQiLCJvZmZzZXRUb3AiLCJjbGllbnRUb3AiLCJjb25zaWRlck9mZnNldEVsZW1lbnRzIiwicG9wIiwicmVkdWNlIiwic3VtIiwiZWxlbWVudEJvdW5kaW5nT2Zmc2V0IiwiZWxlbWVudFJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJwYXJlbnRSZWN0IiwibGVmdCIsInRvcCIsImVsZW1lbnRTaXplIiwid2lkdGgiLCJoZWlnaHQiLCJSZWN0YW5nbGUiLCJwb3NpdGlvbiIsInNpemUiLCJnZXRQMSIsImdldFAyIiwiZ2V0UDMiLCJnZXRQNCIsImdldENlbnRlciIsIm9yIiwicmVjdCIsIk1hdGgiLCJtaW4iLCJtYXgiLCJhbmQiLCJpbmNsdWRlUG9pbnQiLCJpbmNsdWRlUmVjdGFuZ2xlIiwicmVjdGFuZ2xlIiwibW92ZVRvQm91bmQiLCJheGlzIiwic2VsQXhpcyIsImNyb3NzUmVjdGFuZ2xlIiwidGhpc0NlbnRlciIsInJlY3RDZW50ZXIiLCJzaWduIiwib2Zmc2V0IiwiZ2V0U3F1YXJlIiwic3R5bGVBcHBseSIsImVsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic3R5bGUiLCJncm93dGgiLCJnZXRNaW5TaWRlIiwiZnJvbUVsZW1lbnQiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJpc0NvbnNpZGVyVHJhbnNsYXRlIiwiRXZlbnRFbWl0dGVyIiwib3B0aW9ucyIsImV2ZW50cyIsIm9uIiwiZXZlbnROYW1lIiwiZm4iLCJPYmplY3QiLCJlbnRyaWVzIiwiZW1pdCIsImludGVycnVwdGVkIiwiX2xlbiIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJmdW5jIiwic2xpY2UiLCJpbnRlcnJ1cHQiLCJsaXN0ZW5lcnMiLCJwdXNoIiwib2ZmIiwicHJlcGVuZE9uIiwib25jZSIsIl90aGlzIiwid3JhcHBlciIsImxpc3RlbmVyIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJzcGxpY2UiLCJ1bnN1YnNjcmliZSIsInJlc2V0RW1pdHRlciIsInJlc2V0T24iLCJhcnJheSIsInZhbCIsImkiLCJyYW5nZSIsInN0YXJ0Iiwic3RvcCIsInN0ZXAiLCJyZXN1bHQiLCJkaXNwYXRjaERvbUV2ZW50IiwiZGV0YWlsIiwiZGlzcGF0Y2hFdmVudCIsIkN1c3RvbUV2ZW50IiwiYnViYmxlcyIsImdldERpc3RhbmNlIiwicDEiLCJwMiIsImR4IiwiZHkiLCJzcXJ0IiwiZ2V0WERpZmZlcmVuY2UiLCJhYnMiLCJnZXRZRGlmZmVyZW5jZSIsInRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3RvcnkiLCJwb3ciLCJpbmRleE9mTmVhcmVzdFBvaW50IiwiYXJyIiwicmFkaXVzIiwiZ2V0RGlzdGFuY2VGdW5jIiwidGVtcCIsImRpcmVjdENyb3NzaW5nIiwiTDFQMSIsIkwxUDIiLCJMMlAxIiwiTDJQMiIsImsxIiwiazIiLCJiMSIsImIyIiwiYm91bmRUb0xpbmUiLCJBIiwiQiIsIlAiLCJBUCIsIkFCIiwiYWIyIiwiYXBfYWIiLCJ0IiwiZ2V0UG9pbnRPbkxpbmVCeUxlbmdodCIsIkxQMSIsIkxQMiIsImxlbmdodCIsInBlcmNlbnQiLCJhZGRQb2ludFRvQm91bmRQb2ludHMiLCJib3VuZHBvaW50cyIsInBvaW50IiwiaXNSaWdodCIsImZpbHRlciIsImJQb2ludCIsIkJhc2ljU3RyYXRlZ3kiLCJib3VuZFJlY3QiLCJOb3RDcm9zc2luZ1N0cmF0ZWd5IiwicG9zaXRpb25pbmciLCJyZWN0YW5nbGVMaXN0IiwiaW5kZXhlc09mTmV3cyIsInN0YXRpY1JlY3RhbmdsZUluZGV4ZXMiLCJpbmRleGVzIiwiX3JlY3QiLCJpbmRleE9mIiwiZm9yRWFjaCIsInJlbW92YWJsZSIsImluZGV4T2ZTdGF0aWMiLCJzdGF0aWNSZWN0Iiwic29tZSIsInNvcnRpbmciLCJvZGxEcmFnZ2FibGVzTGlzdCIsIm5ld0RyYWdnYWJsZXMiLCJpbmRleE9mTmV3cyIsImRyYWdnYWJsZXMiLCJjb25jYXQiLCJkcmFnZ2FibGUiLCJGbG9hdExlZnRTdHJhdGVneSIsImFzc2lnbiIsInBhZGRpbmdUb3BMZWZ0IiwicGFkZGluZ0JvdHRvbVJpZ2h0IiwieUdhcEJldHdlZW5EcmFnZ2FibGVzIiwiZ2V0UG9zaXRpb24iLCJfaW5kZXhlc09mTmV3cyIsInJlY3RQMiIsImJvdW5kYXJ5UG9pbnRzIiwicmVjdEluZGV4IiwiaXNWYWxpZCIsIm5ld0xpc3QiLCJsaXN0T2xkUG9zaXRpb24iLCJtYXAiLCJuZXdEcmFnZ2FibGUiLCJGbG9hdFJpZ2h0U3RyYXRlZ3kiLCJwYWRkaW5nVG9wUmlnaHQiLCJwYWRkaW5nQm90dG9tTGVmdCIsInBhZGRpbmdCb3R0b21OZWdMZWZ0IiwiZ2V0QW5nbGVEaWZmIiwiYWxwaGEiLCJiZXRhIiwibWluQW5nbGUiLCJtYXhBbmdsZSIsIlBJIiwiZ2V0QW5nbGUiLCJkaWZmIiwibm9ybWFsaXplQW5nbGUiLCJhdGFuMiIsImJvdW5kQW5nbGUiLCJkbWluIiwiZG1heCIsImdldFBvaW50RnJvbVJhZGlhbFN5c3RlbSIsImFuZ2xlIiwiY2VudGVyIiwiY29zIiwic2luIiwiQm91bmQiLCJib3VuZCIsIl9zaXplIiwicmVmcmVzaCIsImJvdW5kaW5nIiwiaW5zdGFuY2UiLCJiaW5kIiwiQm91bmRUb1JlY3RhbmdsZSIsImNhbGNQb2ludCIsIkJvdW5kVG9FbGVtZW50IiwiY29udGFpbmVyIiwiQm91bmRUb0xpbmVYIiwic3RhcnRZIiwiZW5kWSIsIkJvdW5kVG9MaW5lWSIsInN0YXJ0WCIsImVuZFgiLCJCb3VuZFRvTGluZSIsInN0YXJ0UG9pbnQiLCJlbmRQb2ludCIsInNvbWVLIiwiY29zQmV0YSIsInNpbkJldGEiLCJwb2ludDIiLCJuZXdFbmRQb2ludCIsInBvaW50Q3Jvc3NpbmciLCJCb3VuZFRvQ2lyY2xlIiwiQm91bmRUb0FyYyIsInN0YXJ0QW5nbGUiLCJlbmRBbmdsZSIsIl9zdGFydEFuZ2xlIiwiX2VuZEFuZ2xlIiwiYWRkVG9EZWZhdWx0U2NvcGUiLCJ0YXJnZXQiLCJkZWZhdWx0U2NvcGUiLCJhZGRUYXJnZXQiLCJUYXJnZXQiLCJ0aW1lRW5kIiwidGltZUV4Y2FuZ2UiLCJwb3NpdGlvbmluZ1N0cmF0ZWd5Iiwic3RyYXRlZ3kiLCJnZXRSZWN0YW5nbGUiLCJyZW1vdmVPbk1vdmVTdWJzY3JpcHRpb25zIiwiTWFwIiwidGFyZ2V0cyIsImVtaXR0ZXIiLCJzdGFydEJvdW5kaW5nIiwiaW5pdCIsImluZGV4ZXNPZk5ldyIsIm9sZERyYWdnYWJsZXMiLCJyZWN0YW5nbGVzIiwiaW5uZXJEcmFnZ2FibGVzIiwic2V0UG9zaXRpb24iLCJlbWl0VGFyZ2V0RXZlbnQiLCJjYXRjaERyYWdnYWJsZSIsInRhcmdldFJlY3RhbmdsZSIsImRyYWdnYWJsZVNxdWFyZSIsImdldFNpemUiLCJkZXN0cm95Iiwic2NvcGVzIiwic2NvcGUiLCJyZW1vdmVJdGVtIiwib25FbmQiLCJuZXdEcmFnZ2FibGVzSW5kZXgiLCJhZGRSZW1vdmVPbk1vdmUiLCJ0aW1lIiwibW92ZSIsImluaXRpYWxQb3NpdGlvbiIsInN0b3BSZW1vdmVPbk1vdmUiLCJwdXNoSW5uZXJEcmFnZ2FibGUiLCJzZXQiLCJyZW1vdmUiLCJnZXQiLCJkZWxldGUiLCJyZXNldCIsImdldFNvcnRlZERyYWdnYWJsZXMiLCJ0eXBlIiwiZG9tRXZlbnRzIiwiZG9tVHlwZSIsInJlcGxhY2UiLCJsZXR0ZXIiLCJ0b0xvd2VyQ2FzZSIsIl9jb250YWluZXIiLCJTY29wZSIsInJlbGVhc2VEcmFnZ2FibGUiLCJkcmFnRW5kQWN0aW9uUmVsZWFzZXMiLCJpbml0RHJhZ2dhYmxlIiwiYWRkRHJhZ2dhYmxlIiwib3ZlcnJpZGVEcmFnRW5kQWN0aW9uIiwicmVsZWFzZSIsInNob3RUYXJnZXRzIiwic29ydCIsImEiLCJiIiwicGluUG9zaXRpb24iLCJwb3NpdGlvbnMiLCJtZXNzYWdlIiwidGFyZ2V0SW5kZXhlcyIsImN1cnJlbnRTY29wZSIsImFkZERyYWdnYWJsZVRvU2NvcGUiLCJEcmFnZ2FibGUiLCJhZGRUYXJnZXRUb1Njb3BlIiwib2ZmRHJhZ2dhYmxlIiwib2ZmVGFyZ2V0IiwiY2FsbCIsInRocm90dGxlIiwid2FpdCIsImxhc3RUaW1lIiwiZXhlY3V0ZWRGdW5jdGlvbiIsImNvbnRleHQiLCJub3ciLCJEYXRlIiwiYXBwbHkiLCJ0aHJvdHRsZWREcmFnT3ZlciIsImNhbGxiYWNrIiwiZHVyYXRpb24iLCJ0aHJvdHRsZWRDYWxsYmFjayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJwYXNzaXZlRmFsc2UiLCJwYXNzaXZlIiwiaXNUb3VjaCIsIm5hdmlnYXRvciIsIm1heFRvdWNoUG9pbnRzIiwibW91c2VFdmVudHMiLCJlbmQiLCJ0b3VjaEV2ZW50cyIsInRyYW5zZm9ybVByb3BlcnR5IiwidHJhbnNpdGlvblByb3BlcnR5IiwiZ2V0VG91Y2hCeUlEIiwidG91Y2hJZCIsImNoYW5nZWRUb3VjaGVzIiwiaWRlbnRpZmllciIsInByZXZlbnREb3VibGVJbml0IiwiZXhpc3RpbmciLCJjb3B5U3R5bGVzIiwic291cmNlIiwiZGVzdGluYXRpb24iLCJjcyIsIndpbmRvdyIsImdldENvbXB1dGVkU3R5bGUiLCJrZXkiLCJjaGlsZHJlbiIsIl9kcmFnRW5kQWN0aW9ucyIsIl9lbmFibGUiLCJzdGFydFBvc2l0aW9uaW5nIiwic3RhcnRMaXN0ZW5pbmciLCJfc2V0RGVmYXVsdFRyYW5zaXRpb24iLCJpc0NvbnNpZGVyVHJhbnNmb3JtT2Zmc2V0IiwicGlubmVkUG9zaXRpb24iLCJfZHJhZ1N0YXJ0IiwiZHJhZ1N0YXJ0IiwiX2RyYWdNb3ZlIiwiZHJhZ01vdmUiLCJfZHJhZ0VuZCIsImRyYWdFbmQiLCJfbmF0aXZlRHJhZ1N0YXJ0IiwibmF0aXZlRHJhZ1N0YXJ0IiwiX25hdGl2ZURyYWdPdmVyIiwibmF0aXZlRHJhZ092ZXIiLCJkcmFnT3ZlclRocm90dGxlRHVyYXRpb24iLCJfbmF0aXZlRHJhZ0VuZCIsIm5hdGl2ZURyYWdFbmQiLCJfbmF0aXZlRHJvcCIsIm5hdGl2ZURyb3AiLCJfc2Nyb2xsIiwib25TY3JvbGwiLCJoYW5kbGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl90cmFuc2Zvcm1Qb3NpdGlvbiIsIl9zZXRUcmFuc2l0aW9uIiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25Dc3MiLCJ0ZXN0IiwiX3NldFRyYW5zbGF0ZSIsInRyYW5zbGF0ZUNzcyIsInRyYW5zZm9ybSIsInNob3VsZFJlbW92ZVplcm9UcmFuc2xhdGUiLCJpc1NpbGVudCIsImVtaXREcmFnRXZlbnQiLCJzaWxlbnQiLCJyZXNldFBvc2l0aW9uVG9Jbml0aWFsIiwicmVmcmVzaFBvc2l0aW9uIiwiZGV0ZXJtaW5lRGlyZWN0aW9uIiwiX3ByZXZpb3VzRGlyZWN0aW9uUG9zaXRpb24iLCJfc3RhcnRQb3NpdGlvbiIsImxlZnREaXJlY3Rpb24iLCJyaWdodERpcmVjdGlvbiIsInVwRGlyZWN0aW9uIiwiZG93bkRpcmVjdGlvbiIsInNlZW1zU2Nyb2xsaW5nIiwiX3N0YXJ0VG91Y2hUaW1lc3RhbXAiLCJ0b3VjaERyYWdnaW5nVGhyZXNob2xkIiwic2hvdWxkVXNlTmF0aXZlRHJhZ0FuZERyb3AiLCJpc1RvdWNoRXZlbnQiLCJuYXRpdmVEcmFnQW5kRHJvcCIsImVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcE9uVG91Y2giLCJzdG9wUHJvcGFnYXRpb25PbkRyYWdTdGFydCIsInN0b3BQcm9wYWdhdGlvbiIsIlRvdWNoRXZlbnQiLCJ0b3VjaFBvaW50IiwiX3N0YXJ0VG91Y2hQb2ludCIsInBhZ2VYIiwiY2xpZW50WCIsInBhZ2VZIiwiY2xpZW50WSIsIl90b3VjaElkIiwiX3N0YXJ0V2luZG93U2Nyb2xsUG9pbnQiLCJ3aW5kb3dTY3JvbGxQb2ludCIsIl9zdGFydFNjcm9sbEVsZW1lbnRzT2Zmc2V0Iiwic2Nyb2xsRWxlbWVudHNPZmZzZXQiLCJIVE1MSW5wdXRFbGVtZW50IiwiZm9jdXMiLCJfc3RhcnRQYXJlbnRzU2Nyb2xsT2Zmc2V0IiwicGFyZW50c1Njcm9sbE9mZnNldCIsImVtdWxhdGVPbkZpcnN0TW92ZSIsImNhbmNlbERyYWdnaW5nIiwiZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wIiwiY2FuY2VsRW11bGF0aW9uIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNjcm9sbEVsZW1lbnRzIiwiZHJhZ1N0YXJ0VGhyZXNob2xkIiwiX2RyYWdTdGFydFBlbmRpbmciLCJ0b3VjaCIsImlzRHJhZ2dpbmciLCJjbGFzc0xpc3QiLCJkcmFnRW5kQWN0aW9uIiwic2V0VGltZW91dCIsIl9ldmVudCIsImRhdGFUcmFuc2ZlciIsInNldERhdGEiLCJlZmZlY3RBbGxvd2VkIiwiZHJvcEVmZmVjdCIsInJlbW92ZUF0dHJpYnV0ZSIsImNvbnRhaW5lclJlY3QiLCJjbG9uZWRFbGVtZW50IiwiY2xvbmVOb2RlIiwiYm9keSIsImFwcGVuZENoaWxkIiwiZW11bGF0aW9uRHJhZ2dhYmxlIiwiZHJhZzptb3ZlIiwiY29udGFpbmVyUmVjdFBvaW50IiwiZHJhZzplbmQiLCJyZW1vdmVDaGlsZCIsImFjdGlvbiIsIl9oYW5kbGVyIiwiY29uc2lkZXJUcmFuc2Zvcm1PZmZzZXQiLCJzY3JvbGxYIiwic2Nyb2xsWSIsInNjcm9sbFJvb3RDb250YWluZXIiLCJfY2FjaGVkU2Nyb2xsRWxlbWVudHMiLCJzY3JvbGxMZWZ0Iiwic2Nyb2xsVG9wIiwicGFyZW50cyIsIl9jYWNoZWRQYXJlbnRzIiwiZW5hYmxlIiwiZGVib3VuY2UiLCJpbW1lZGlhdGUiLCJ0aW1lb3V0IiwibGF0ZXIiLCJjbGVhclRpbWVvdXQiLCJMaXN0IiwiY2hhbmdlZER1cmluZ0l0ZXJhdGlvbiIsInN1YnNjcmlwdGlvbnMiLCJyZXNpemVPYnNlcnZlciIsIlJlc2l6ZU9ic2VydmVyIiwib25SZXNpemUiLCJvYnNlcnZlIiwicmVvcmRlck9uQ2hhbmdlIiwibGlzdGVuVG8iLCJvbk1vdmUiLCJ0cmFja1JlbGVhc2UiLCJoYXMiLCJ1bm9ic2VydmUiLCJyZWxlYXNlcyIsInN3YXBwaW5nRGlzYWJsZWQiLCJzb3J0ZWREcmFnZ2FibGVzIiwicGlubmVkUG9zaXRpb25zIiwiY3VycmVudEluZGV4IiwidGFyZ2V0SW5kZXgiLCJkaXN0YW5jZUZ1bmMiLCJlbWl0TGlzdEV2ZW50IiwicmVvcmRlckVsZW1lbnRzIiwibW92ZWREcmFnZ2FibGUiLCJuZXh0IiwiaW5zZXJ0QmVmb3JlIiwiZCIsImxpc3QiLCJnZXRDdXJyZW50UGlubmVkUG9zaXRpb25zIiwiaW5pdGlhbFBvc2l0aW9ucyIsImoiLCJjbGVhciIsImRyYWdnYWJsZUEiLCJkcmFnZ2FibGVCIiwiX3N3YXBwaW5nRGlzYWJsZWQiLCJkaXNhYmxlZCIsImFycmF5TW92ZSIsImZyb20iLCJ0byIsIkJ1YmJsaW5nTGlzdCIsImF1dG9EZXRlY3RHYXAiLCJfZ2FwIiwiZXhwbGljaXRHYXAiLCJzb3J0ZWQiLCJpc0Nvbm5lY3RlZCIsImN1cnJlbnQiLCJhdXRvRGV0ZWN0U3RhcnRQb3NpdGlvbiIsInN0YXJ0UG9zaXRpb24iLCJvbkRyYWdTdGFydCIsImNhY2hlZFNvcnRlZERyYWdnYWJsZXMiLCJpbmRleE9mQWN0aXZlRHJhZ2dhYmxlIiwicHJldkRyYWdnYWJsZSIsIm5leHREcmFnZ2FibGUiLCJjdXJyZW50UG9zaXRpb24iLCJjdXJyZW50T3JkZXIiLCJpc01vdmluZ0JhY2t3YXJkIiwicHJldk5ld1Bvc2l0aW9uIiwibmV4dFBvc2l0aW9uIiwiY3Jvc3NBeGlzIiwiaXNNb3ZpbmdGb3J3YXJkIiwiZHJhZ2dhYmxlTmV3UG9zaXRpb24iLCJidWJibGluZyIsImN1cnJlbnREcmFnZ2FibGUiLCJpbmNsdWRlcyIs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
