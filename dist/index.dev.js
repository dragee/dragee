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
        this.innerDraggables.forEach(draggable => this.emit('target:add', draggable));
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
      this.emit('target:beforeAdd', draggable);
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
          removeItem(this.innerDraggables, draggable);
          this.emit('target:remove', draggable);
        } else {
          draggable.move(rect.position, timeEnd, true, true);
        }
      });
    }
    add(draggable, time) {
      const newDraggablesIndex = this.innerDraggables.length;
      this.emit('target:beforeAdd', draggable);
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
      draggable.on('drag:move', this.removeHandler = () => {
        this.remove(draggable);
      });
      this.emit('target:add', draggable);
    }
    remove(draggable) {
      draggable.unsubscribe('drag:move', this.removeHandler);
      const index = this.innerDraggables.indexOf(draggable);
      if (index === -1) {
        return;
      }
      this.innerDraggables.splice(index, 1);
      const rectangles = this.positioning(this.innerDraggables.map(draggable => {
        return draggable.getRectangle();
      }), []);
      this.setPosition(rectangles, []);
      this.emit('target:remove', draggable);
    }
    reset() {
      this.innerDraggables.forEach(draggable => {
        draggable.move(draggable.initialPosition, 0, true, true);
        this.emit('target:remove', draggable);
      });
      this.innerDraggables = [];
    }
    getSortedDraggables() {
      return this.innerDraggables.slice();
    }
    get container() {
      return this._container = this._container || this.options.container || this.options.parent || this.element.offsetParent;
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
        this.emit('drag:move');
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
        this.emit('drag:start');
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
        this.emit('drag:start');
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
      this.emit('drag:end');
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
      this.emit('drag:move');
    }
    nativeDragEnd(_event) {
      this.element.classList.remove('dragee-placeholder');
      this.dragEndAction();
      this.emit('drag:end');
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
        bound(point) {
          return point;
        },
        on: {
          'drag:move': () => {
            const containerRectPoint = new Point(containerRect.left, containerRect.top);
            this.position = emulationDraggable.position.sub(containerRectPoint).sub(this._startWindowScrollPoint).add(this._startParentsScrollOffset);
            this.determineDirection(this.position);
            this.emit('drag:move');
          },
          'drag:end': () => {
            emulationDraggable.destroy();
            document.body.removeChild(clonedElement);
            this.element.classList.remove('dragee-placeholder');
            this.element.classList.remove('dragee-active');
            this.emit('drag:end');
            this.dragEndAction();
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
      draggable.on('drag:move', () => this.onMove(draggable));
      draggable.dragEndAction = () => {
        draggable.pinPosition(draggable.pinnedPosition, this.options.timeEnd);
        this.onEnd(draggable);
      };
      this.resizeObserver.observe(draggable.element);
    }
    releaseDraggable(draggable) {
      this.resizeObserver.unobserve(draggable.element);
      draggable.resetOn('drag:end');
      draggable.resetOn('drag:move');
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
        this.emit('list:change');
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
      this.emit('list:reordered');
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
      // Skip items already detached from the DOM (e.g. removed before `remove()`): their size is 0
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
      draggable.on('drag:start', () => this.onDragStart(draggable));
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

    // Position right after `draggable` placed at `position`, along the list axis
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZGV2LmpzIiwic291cmNlcyI6WyIuLi9zcmMvdXRpbHMvZ2V0LXBhcmVudHMtY2hhaW4uanMiLCIuLi9zcmMvZ2VvbWV0cnkvcG9pbnQuanMiLCIuLi9zcmMvZ2VvbWV0cnkvcmVjdGFuZ2xlLmpzIiwiLi4vc3JjL2V2ZW50RW1pdHRlci5qcyIsIi4uL3NyYy91dGlscy9yZW1vdmUtYXJyYXktaXRlbS5qcyIsIi4uL3NyYy91dGlscy9yYW5nZS5qcyIsIi4uL3NyYy9nZW9tZXRyeS9kaXN0YW5jZXMuanMiLCIuLi9zcmMvZ2VvbWV0cnkvYm91bmRzLmpzIiwiLi4vc3JjL3Bvc2l0aW9uaW5nLmpzIiwiLi4vc3JjL2dlb21ldHJ5L2FuZ2xlcy5qcyIsIi4uL3NyYy9ib3VuZGluZy5qcyIsIi4uL3NyYy90YXJnZXQuanMiLCIuLi9zcmMvc2NvcGUuanMiLCIuLi9zcmMvdXRpbHMvdGhyb3R0bGUuanMiLCIuLi9zcmMvZHJhZ2dhYmxlLmpzIiwiLi4vc3JjL3V0aWxzL2RlYm91bmNlLmpzIiwiLi4vc3JjL2xpc3QuanMiLCIuLi9zcmMvYnViYmxpbmdMaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFBhcmVudHNDaGFpbihjaGlsZEVsZW1lbnQsIHJvb3RFbGVtZW50KSB7XG5cdGNvbnN0IGNoYWluID0gW11cbiAgbGV0IGVsZW1lbnQgPSBjaGlsZEVsZW1lbnRcblxuICB3aGlsZShlbGVtZW50LnBhcmVudE5vZGUgJiYgZWxlbWVudCAhPT0gcm9vdEVsZW1lbnQpIHtcbiAgICBjaGFpbi51bnNoaWZ0KGVsZW1lbnQucGFyZW50Tm9kZSlcbiAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlXG4gIH1cblxuICByZXR1cm4gY2hhaW5cbn1cbiIsImltcG9ydCBnZXRQYXJlbnRzQ2hhaW4gZnJvbSAnLi4vdXRpbHMvZ2V0LXBhcmVudHMtY2hhaW4nXG5cbi8qKiBDbGFzcyByZXByZXNlbnRpbmcgYSBwb2ludC4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvaW50IHtcbiAgLyoqXG4gICogQ3JlYXRlIGEgcG9pbnQuXG4gICogQHBhcmFtIHtudW1iZXJ9IHggLSBUaGUgeCB2YWx1ZS5cbiAgKiBAcGFyYW0ge251bWJlcn0geSAtIFRoZSB5IHZhbHVlLlxuICAqL1xuICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgdGhpcy54ID0geFxuICAgIHRoaXMueSA9IHlcbiAgfVxuXG4gIGFkZChwKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnggKyBwLngsIHRoaXMueSArIHAueSlcbiAgfVxuXG4gIHN1YihwKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnggLSBwLngsIHRoaXMueSAtIHAueSlcbiAgfVxuXG4gIG11bHQoaykge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54ICogaywgdGhpcy55ICogaylcbiAgfVxuXG4gIG5lZ2F0aXZlKCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQoLXRoaXMueCwgLXRoaXMueSlcbiAgfVxuXG4gIGNvbXBhcmUocCkge1xuICAgIHJldHVybiAodGhpcy54ID09PSBwLnggJiYgdGhpcy55ID09PSBwLnkpXG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCwgdGhpcy55KVxuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIGB7eD0ke3RoaXMueH0seT0ke3RoaXMueX19YFxuICB9XG5cbiAgc3RhdGljIGVsZW1lbnRPZmZzZXQoZWxlbWVudCwgcGFyZW50KSB7XG4gICAgcGFyZW50ID0gcGFyZW50IHx8IGVsZW1lbnQucGFyZW50Tm9kZVxuICAgIGlmIChwYXJlbnQgPT09IGVsZW1lbnQpIHtcbiAgICAgIHJldHVybiBuZXcgUG9pbnQoMCwgMCk7XG4gICAgfSBlbHNlIGlmIChwYXJlbnQgPT09IGVsZW1lbnQub2Zmc2V0UGFyZW50KSB7XG4gICAgICByZXR1cm4gbmV3IFBvaW50KFxuICAgICAgICBlbGVtZW50Lm9mZnNldExlZnQgKyBwYXJlbnQuY2xpZW50TGVmdCxcbiAgICAgICAgZWxlbWVudC5vZmZzZXRUb3AgKyBwYXJlbnQuY2xpZW50VG9wXG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGNvbnNpZGVyT2Zmc2V0RWxlbWVudHMgPSBbZWxlbWVudCwgZ2V0UGFyZW50c0NoYWluKGVsZW1lbnQsIHBhcmVudCkucG9wKCldXG4gICAgICByZXR1cm4gbmV3IFBvaW50KFxuICAgICAgICBjb25zaWRlck9mZnNldEVsZW1lbnRzLnJlZHVjZSgoc3VtLCBwKSA9PiBzdW0gKyBwLm9mZnNldExlZnQsIDApICsgcGFyZW50LmNsaWVudExlZnQsXG4gICAgICAgIGNvbnNpZGVyT2Zmc2V0RWxlbWVudHMucmVkdWNlKChzdW0sIHApID0+IHN1bSArIHAub2Zmc2V0VG9wLCAwKSArIHBhcmVudC5jbGllbnRUb3BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZWxlbWVudEJvdW5kaW5nT2Zmc2V0KGVsZW1lbnQsIHBhcmVudCkge1xuICAgIHBhcmVudCA9IHBhcmVudCB8fCBlbGVtZW50LnBhcmVudE5vZGVcbiAgICBjb25zdCBlbGVtZW50UmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICBjb25zdCBwYXJlbnRSZWN0ID0gcGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgcmV0dXJuIG5ldyBQb2ludChcbiAgICAgIGVsZW1lbnRSZWN0LmxlZnQgLSBwYXJlbnRSZWN0LmxlZnQsXG4gICAgICBlbGVtZW50UmVjdC50b3AgLSBwYXJlbnRSZWN0LnRvcFxuICAgIClcbiAgfVxuXG4gIHN0YXRpYyBlbGVtZW50U2l6ZShlbGVtZW50KSB7XG4gICAgY29uc3QgZWxlbWVudFJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgcmV0dXJuIG5ldyBQb2ludChcbiAgICAgIGVsZW1lbnRSZWN0LndpZHRoLFxuICAgICAgZWxlbWVudFJlY3QuaGVpZ2h0XG4gICAgKVxuICB9XG59XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9wb2ludCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVjdGFuZ2xlIHtcbiAgY29uc3RydWN0b3IocG9zaXRpb24sIHNpemUpIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb25cbiAgICB0aGlzLnNpemUgPSBzaXplXG4gIH1cblxuICBnZXRQMSgpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvblxuICB9XG5cbiAgZ2V0UDIoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnNpemUueCwgdGhpcy5wb3NpdGlvbi55KVxuICB9XG5cbiAgZ2V0UDMoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb24uYWRkKHRoaXMuc2l6ZSlcbiAgfVxuXG4gIGdldFA0KCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSlcbiAgfVxuXG4gIGdldENlbnRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi5hZGQodGhpcy5zaXplLm11bHQoMC41KSlcbiAgfVxuXG4gIG9yKHJlY3QpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IG5ldyBQb2ludChNYXRoLm1pbih0aGlzLnBvc2l0aW9uLngsIHJlY3QucG9zaXRpb24ueCksIE1hdGgubWluKHRoaXMucG9zaXRpb24ueSwgcmVjdC5wb3NpdGlvbi55KSlcbiAgICBjb25zdCBzaXplID0gKG5ldyBQb2ludChNYXRoLm1heCh0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnNpemUueCwgcmVjdC5wb3NpdGlvbi54ICsgcmVjdC5zaXplLngpLCBNYXRoLm1heCh0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSwgcmVjdC5wb3NpdGlvbi55ICsgcmVjdC5zaXplLnkpKSkuc3ViKHBvc2l0aW9uKVxuICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHBvc2l0aW9uLCBzaXplKVxuICB9XG5cbiAgYW5kKHJlY3QpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IG5ldyBQb2ludChNYXRoLm1heCh0aGlzLnBvc2l0aW9uLngsIHJlY3QucG9zaXRpb24ueCksIE1hdGgubWF4KHRoaXMucG9zaXRpb24ueSwgcmVjdC5wb3NpdGlvbi55KSlcbiAgICBjb25zdCBzaXplID0gKG5ldyBQb2ludChNYXRoLm1pbih0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnNpemUueCwgcmVjdC5wb3NpdGlvbi54ICsgcmVjdC5zaXplLngpLCBNYXRoLm1pbih0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSwgcmVjdC5wb3NpdGlvbi55ICsgcmVjdC5zaXplLnkpKSkuc3ViKHBvc2l0aW9uKVxuICAgIGlmIChzaXplLnggPD0gMCB8fCBzaXplLnkgPD0gMCkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUocG9zaXRpb24sIHNpemUpXG4gIH1cblxuICBpbmNsdWRlUG9pbnQocCkge1xuICAgIHJldHVybiAhKHRoaXMucG9zaXRpb24ueCA+IHAueCB8fCB0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnNpemUueCA8IHAueCB8fCB0aGlzLnBvc2l0aW9uLnkgPiBwLnkgfHwgdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnkgPCBwLnkpXG4gIH1cblxuICBpbmNsdWRlUmVjdGFuZ2xlKHJlY3RhbmdsZSkge1xuICAgIHJldHVybiB0aGlzLmluY2x1ZGVQb2ludChyZWN0YW5nbGUucG9zaXRpb24pICYmIHRoaXMuaW5jbHVkZVBvaW50KHJlY3RhbmdsZS5nZXRQMygpKVxuICB9XG5cbiAgbW92ZVRvQm91bmQocmVjdCwgYXhpcykge1xuICAgIGxldCBzZWxBeGlzLCBjcm9zc1JlY3RhbmdsZVxuICAgIGlmIChheGlzKSB7XG4gICAgICBzZWxBeGlzID0gYXhpc1xuICAgIH0gZWxzZSB7XG4gICAgICBjcm9zc1JlY3RhbmdsZSA9IHRoaXMuYW5kKHJlY3QpXG4gICAgICBpZiAoIWNyb3NzUmVjdGFuZ2xlKSB7XG4gICAgICAgIHJldHVybiByZWN0XG4gICAgICB9XG4gICAgICBzZWxBeGlzID0gY3Jvc3NSZWN0YW5nbGUuc2l6ZS54ID4gY3Jvc3NSZWN0YW5nbGUuc2l6ZS55ID8gJ3knIDogJ3gnXG4gICAgfVxuICAgIGNvbnN0IHRoaXNDZW50ZXIgPSB0aGlzLmdldENlbnRlcigpXG4gICAgY29uc3QgcmVjdENlbnRlciA9IHJlY3QuZ2V0Q2VudGVyKClcbiAgICBjb25zdCBzaWduID0gdGhpc0NlbnRlcltzZWxBeGlzXSA+IHJlY3RDZW50ZXJbc2VsQXhpc10gPyAtMSA6IDFcbiAgICBjb25zdCBvZmZzZXQgPSBzaWduID4gMCA/IHRoaXMucG9zaXRpb25bc2VsQXhpc10gKyB0aGlzLnNpemVbc2VsQXhpc10gLSByZWN0LnBvc2l0aW9uW3NlbEF4aXNdIDogdGhpcy5wb3NpdGlvbltzZWxBeGlzXSAtIChyZWN0LnBvc2l0aW9uW3NlbEF4aXNdICsgcmVjdC5zaXplW3NlbEF4aXNdKVxuICAgIHJlY3QucG9zaXRpb25bc2VsQXhpc10gPSByZWN0LnBvc2l0aW9uW3NlbEF4aXNdICsgb2Zmc2V0XG4gICAgcmV0dXJuIHJlY3RcbiAgfVxuXG4gIGdldFNxdWFyZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zaXplLnggKiB0aGlzLnNpemUueVxuICB9XG5cbiAgc3R5bGVBcHBseShlbCkge1xuICAgIGVsID0gZWwgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5kJylcbiAgICBlbC5zdHlsZS5sZWZ0ID0gdGhpcy5wb3NpdGlvbi54ICsgJ3B4J1xuICAgIGVsLnN0eWxlLnRvcCA9IHRoaXMucG9zaXRpb24ueSArICdweCdcbiAgICBlbC5zdHlsZS53aWR0aCA9IHRoaXMuc2l6ZS54ICsgJ3B4J1xuICAgIGVsLnN0eWxlLmhlaWdodCA9IHRoaXMuc2l6ZS55ICsgJ3B4J1xuICB9XG5cbiAgZ3Jvd3RoKHNpemUpIHtcbiAgICB0aGlzLnNpemUgPSB0aGlzLnNpemUuYWRkKHNpemUpXG4gICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMucG9zaXRpb24uYWRkKHNpemUubXVsdCgtMC41KSlcbiAgfVxuXG4gIGdldE1pblNpZGUoKSB7XG4gICAgcmV0dXJuIE1hdGgubWluKHRoaXMuc2l6ZS54LCB0aGlzLnNpemUueSlcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRWxlbWVudChlbGVtZW50LCBwYXJlbnQ9ZWxlbWVudC5wYXJlbnROb2RlLCBpc0NvbnNpZGVyVHJhbnNsYXRlPWZhbHNlKSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBpc0NvbnNpZGVyVHJhbnNsYXRlXG4gICAgICA/IFBvaW50LmVsZW1lbnRCb3VuZGluZ09mZnNldChlbGVtZW50LCBwYXJlbnQpXG4gICAgICA6IFBvaW50LmVsZW1lbnRPZmZzZXQoZWxlbWVudCwgcGFyZW50KVxuICAgIGNvbnN0IHNpemUgPSBQb2ludC5lbGVtZW50U2l6ZShlbGVtZW50KVxuICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHBvc2l0aW9uLCBzaXplKVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAob3B0aW9ucyA9IHt9KSB7XG4gICAgdGhpcy5ldmVudHMgPSB7fVxuXG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5vbikge1xuICAgICAgZm9yIChjb25zdCBbZXZlbnROYW1lLCBmbl0gb2YgT2JqZWN0LmVudHJpZXMob3B0aW9ucy5vbikpIHtcbiAgICAgICAgdGhpcy5vbihldmVudE5hbWUsIGZuKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGVtaXQoZXZlbnROYW1lLCAuLi5hcmdzKSB7XG4gICAgdGhpcy5pbnRlcnJ1cHRlZCA9IGZhbHNlXG5cbiAgICBpZiAoIXRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHJldHVyblxuXG4gICAgLy8gSXRlcmF0ZSBvdmVyIGEgY29weSBzbyBsaXN0ZW5lcnMgY2FuIHVuc3Vic2NyaWJlIHdoaWxlIHRoZSBldmVudCBpcyBiZWluZyBlbWl0dGVkXG4gICAgZm9yIChjb25zdCBmdW5jIG9mIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0uc2xpY2UoKSkge1xuICAgICAgZnVuYyguLi5hcmdzKVxuICAgICAgaWYgKHRoaXMuaW50ZXJydXB0ZWQpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaW50ZXJydXB0KCkge1xuICAgIHRoaXMuaW50ZXJydXB0ZWQgPSB0cnVlXG4gIH1cblxuICBvbihldmVudE5hbWUsIGZuKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMoZXZlbnROYW1lKS5wdXNoKGZuKVxuICAgIHJldHVybiAoKSA9PiB0aGlzLm9mZihldmVudE5hbWUsIGZuKVxuICB9XG5cbiAgcHJlcGVuZE9uKGV2ZW50TmFtZSwgZm4pIHtcbiAgICB0aGlzLmxpc3RlbmVycyhldmVudE5hbWUpLnVuc2hpZnQoZm4pXG4gICAgcmV0dXJuICgpID0+IHRoaXMub2ZmKGV2ZW50TmFtZSwgZm4pXG4gIH1cblxuICBvbmNlKGV2ZW50TmFtZSwgZm4pIHtcbiAgICBjb25zdCB3cmFwcGVyID0gKC4uLmFyZ3MpID0+IHtcbiAgICAgIHRoaXMub2ZmKGV2ZW50TmFtZSwgd3JhcHBlcilcbiAgICAgIGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHdyYXBwZXIubGlzdGVuZXIgPSBmblxuICAgIHJldHVybiB0aGlzLm9uKGV2ZW50TmFtZSwgd3JhcHBlcilcbiAgfVxuXG4gIG9mZihldmVudE5hbWUsIGZuKSB7XG4gICAgaWYgKCF0aGlzLmV2ZW50c1tldmVudE5hbWVdKSByZXR1cm5cblxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5ldmVudHNbZXZlbnROYW1lXS5maW5kSW5kZXgoKGxpc3RlbmVyKSA9PiBsaXN0ZW5lciA9PT0gZm4gfHwgbGlzdGVuZXIubGlzdGVuZXIgPT09IGZuKVxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0uc3BsaWNlKGluZGV4LCAxKVxuICAgIH1cbiAgfVxuXG4gIHVuc3Vic2NyaWJlKGV2ZW50TmFtZSwgZm4pIHtcbiAgICB0aGlzLm9mZihldmVudE5hbWUsIGZuKVxuICB9XG5cbiAgbGlzdGVuZXJzKGV2ZW50TmFtZSkge1xuICAgIHJldHVybiAodGhpcy5ldmVudHNbZXZlbnROYW1lXSB8fD0gW10pXG4gIH1cblxuICByZXNldEVtaXR0ZXIgKCkge1xuICAgIHRoaXMuZXZlbnRzID0ge31cbiAgfVxuXG4gIHJlc2V0T24oZXZlbnROYW1lKSB7XG4gICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IFtdXG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGFycmF5LCB2YWwpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChhcnJheVtpXSA9PT0gdmFsKSB7XG4gICAgICBhcnJheS5zcGxpY2UoaSwgMSlcbiAgICAgIGktLVxuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyYXlcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJhbmdlKHN0YXJ0LCBzdG9wLCBzdGVwKSB7XG4gIGNvbnN0IHJlc3VsdCA9IFtdXG4gIGlmICh0eXBlb2Ygc3RvcCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBzdG9wID0gc3RhcnRcbiAgICBzdGFydCA9IDBcbiAgfVxuICBpZiAodHlwZW9mIHN0ZXAgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgc3RlcCA9IDFcbiAgfVxuICBpZiAoKHN0ZXAgPiAwICYmIHN0YXJ0ID49IHN0b3ApIHx8IChzdGVwIDwgMCAmJiBzdGFydCA8PSBzdG9wKSkge1xuICAgIHJldHVybiBbXVxuICB9XG4gIGZvciAobGV0IGkgPSBzdGFydDsgc3RlcCA+IDAgPyBpIDwgc3RvcCA6IGkgPiBzdG9wOyBpICs9IHN0ZXApIHtcbiAgICByZXN1bHQucHVzaChpKVxuICB9XG4gIHJldHVybiByZXN1bHRcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBnZXREaXN0YW5jZShwMSwgcDIpIHtcbiAgY29uc3QgZHggPSBwMS54IC0gcDIueCwgZHkgPSBwMS55IC0gcDIueVxuICByZXR1cm4gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0WERpZmZlcmVuY2UocDEsIHAyKSB7XG4gIHJldHVybiBNYXRoLmFicyhwMS54IC0gcDIueClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFlEaWZmZXJlbmNlKHAxLCBwMikge1xuICByZXR1cm4gTWF0aC5hYnMocDEueSAtIHAyLnkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5KG9wdGlvbnMpIHtcbiAgcmV0dXJuIChwMSwgcDIpID0+IHtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KFxuICAgICAgTWF0aC5wb3cob3B0aW9ucy54ICogTWF0aC5hYnMocDEueCAtIHAyLngpLCAyKSArXG4gICAgICBNYXRoLnBvdyhvcHRpb25zLnkgKiBNYXRoLmFicyhwMS55IC0gcDIueSksIDIpXG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmRleE9mTmVhcmVzdFBvaW50KGFyciwgdmFsLCByYWRpdXMsIGdldERpc3RhbmNlRnVuYz1nZXREaXN0YW5jZSkge1xuICBsZXQgc2l6ZSwgaW5kZXggPSAwLCBpLCB0ZW1wXG4gIGlmIChhcnIubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIC0xXG4gIH1cbiAgc2l6ZSA9IGdldERpc3RhbmNlRnVuYyhhcnJbMF0sIHZhbClcbiAgZm9yIChpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgIHRlbXAgPSBnZXREaXN0YW5jZUZ1bmMoYXJyW2ldLCB2YWwpXG4gICAgaWYgKHRlbXAgPCBzaXplKSB7XG4gICAgICBzaXplID0gdGVtcFxuICAgICAgaW5kZXggPSBpXG4gICAgfVxuICB9XG4gIGlmIChyYWRpdXMgPj0gMCAmJiBzaXplID4gcmFkaXVzKSB7XG4gICAgcmV0dXJuIC0xXG4gIH1cbiAgcmV0dXJuIGluZGV4XG59XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9wb2ludCdcbmltcG9ydCB7IGdldERpc3RhbmNlIH0gZnJvbSAnLi9kaXN0YW5jZXMnXG5cbmV4cG9ydCBmdW5jdGlvbiBjbGFtcChtaW4sIG1heCwgdmFsKSB7XG4gIHJldHVybiBNYXRoLm1heChtaW4sIE1hdGgubWluKG1heCwgdmFsKSlcbn1cblxuLy9SZXR1cm4gY3Jvc3NpbmcgcG9pbnQgb2YgdHdvIGxpbmVzXG5leHBvcnQgZnVuY3Rpb24gZGlyZWN0Q3Jvc3NpbmcoTDFQMSwgTDFQMiwgTDJQMSwgTDJQMikge1xuICBsZXQgdGVtcCwgazEsIGsyLCBiMSwgYjIsIHgsIHlcbiAgaWYgKEwyUDEueCA9PT0gTDJQMi54KSB7XG4gICAgdGVtcCA9IEwyUDFcbiAgICBMMlAxID0gTDFQMVxuICAgIEwxUDEgPSB0ZW1wXG4gICAgdGVtcCA9IEwyUDJcbiAgICBMMlAyID0gTDFQMlxuICAgIEwxUDIgPSB0ZW1wXG4gIH1cbiAgaWYgKEwxUDEueCA9PT0gTDFQMi54KSB7XG4gICAgazIgPSAoTDJQMi55IC0gTDJQMS55KSAvIChMMlAyLnggLSBMMlAxLngpXG4gICAgYjIgPSAoTDJQMi54ICogTDJQMS55IC0gTDJQMS54ICogTDJQMi55KSAvIChMMlAyLnggLSBMMlAxLngpXG4gICAgeCA9IEwxUDEueFxuICAgIHkgPSB4ICogazIgKyBiMlxuICAgIHJldHVybiBuZXcgUG9pbnQoeCwgeSlcbiAgfSBlbHNlIHtcbiAgICBrMSA9IChMMVAyLnkgLSBMMVAxLnkpIC8gKEwxUDIueCAtIEwxUDEueClcbiAgICBiMSA9IChMMVAyLnggKiBMMVAxLnkgLSBMMVAxLnggKiBMMVAyLnkpIC8gKEwxUDIueCAtIEwxUDEueClcbiAgICBrMiA9IChMMlAyLnkgLSBMMlAxLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICBiMiA9IChMMlAyLnggKiBMMlAxLnkgLSBMMlAxLnggKiBMMlAyLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICB4ID0gKGIxIC0gYjIpIC8gKGsyIC0gazEpXG4gICAgeSA9IHggKiBrMSArIGIxXG4gICAgcmV0dXJuIG5ldyBQb2ludCh4LCB5KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZFRvU2VnbWVudChMUDEsIExQMiwgUCkge1xuICBsZXQgeCwgeVxuICB4ID0gY2xhbXAoTWF0aC5taW4oTFAxLngsIExQMi54KSwgTWF0aC5tYXgoTFAxLngsIExQMi54KSwgUC54KVxuICBpZiAoeCAhPT0gUC54KSB7XG4gICAgeSA9ICh4ID09PSBMUDEueCkgPyBMUDEueSA6IExQMi55XG4gICAgUCA9IG5ldyBQb2ludCh4LCB5KVxuICB9XG5cbiAgeSA9IGNsYW1wKE1hdGgubWluKExQMS55LCBMUDIueSksIE1hdGgubWF4KExQMS55LCBMUDIueSksIFAueSlcbiAgaWYgKHkgIT09IFAueSkge1xuICAgIHggPSAoeSA9PT0gTFAxLnkpID8gTFAxLnggOiBMUDIueFxuICAgIFAgPSBuZXcgUG9pbnQoeCwgeSlcbiAgfVxuXG4gIHJldHVybiBQXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZFRvTGluZShBLCBCLCBQKSB7XG4gIGNvbnN0IEFQID0gbmV3IFBvaW50KFAueCAtIEEueCwgUC55IC0gQS55KSxcbiAgICBBQiA9IG5ldyBQb2ludChCLnggLSBBLngsIEIueSAtIEEueSksXG4gICAgYWIyID0gQUIueCAqIEFCLnggKyBBQi55ICogQUIueSxcbiAgICBhcF9hYiA9IEFQLnggKiBBQi54ICsgQVAueSAqIEFCLnksXG4gICAgdCA9IGFwX2FiIC8gYWIyXG4gIHJldHVybiBuZXcgUG9pbnQoQS54ICsgQUIueCAqIHQsIEEueSArIEFCLnkgKiB0KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9pbnRPbkxpbmUoTFAxLCBMUDIsIHBlcmNlbnQpIHtcbiAgY29uc3QgZHggPSBMUDIueCAtIExQMS54LCBkeSA9IExQMi55IC0gTFAxLnlcbiAgcmV0dXJuIG5ldyBQb2ludChMUDEueCArIHBlcmNlbnQgKiBkeCwgTFAxLnkgKyBwZXJjZW50ICogZHkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb2ludE9uTGluZUJ5TGVuZ2h0KExQMSwgTFAyLCBsZW5naHQpIHtcbiAgY29uc3QgZHggPSBMUDIueCAtIExQMS54XG4gIGNvbnN0IGR5ID0gTFAyLnkgLSBMUDEueVxuICBjb25zdCBwZXJjZW50ID0gbGVuZ2h0IC8gZ2V0RGlzdGFuY2UoTFAxLCBMUDIpXG4gIHJldHVybiBuZXcgUG9pbnQoTFAxLnggKyBwZXJjZW50ICogZHgsIExQMS55ICsgcGVyY2VudCAqIGR5KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkUG9pbnRUb0JvdW5kUG9pbnRzKGJvdW5kcG9pbnRzLCBwb2ludCwgaXNSaWdodCkge1xuICBjb25zdCByZXN1bHQgPSBib3VuZHBvaW50cy5maWx0ZXIoKGJQb2ludCkgPT4ge1xuICAgIHJldHVybiBiUG9pbnQueSA+IHBvaW50LnkgfHwgKGlzUmlnaHQgPyBiUG9pbnQueCA8IHBvaW50LnggOiBiUG9pbnQueCA+IHBvaW50LngpXG4gIH0pXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHQubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAocG9pbnQueSA8IHJlc3VsdFtpXS55KSB7XG4gICAgICByZXN1bHQuc3BsaWNlKGksIDAsIHBvaW50KVxuICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbiAgfVxuICByZXN1bHQucHVzaChwb2ludClcbiAgcmV0dXJuIHJlc3VsdFxufVxuIiwiaW1wb3J0IFBvaW50IGZyb20gJy4vZ2VvbWV0cnkvcG9pbnQnXG5pbXBvcnQgeyBhZGRQb2ludFRvQm91bmRQb2ludHMgfSBmcm9tICcuL2dlb21ldHJ5L2JvdW5kcydcblxuaW1wb3J0IHtcbiAgaW5kZXhPZk5lYXJlc3RQb2ludCxcbiAgZ2V0RGlzdGFuY2Vcbn0gZnJvbSAnLi9nZW9tZXRyeS9kaXN0YW5jZXMnXG5cbmNsYXNzIEJhc2ljU3RyYXRlZ3kge1xuICBjb25zdHJ1Y3RvcihyZWN0YW5nbGUsIG9wdGlvbnM9e30pIHtcbiAgICB0aGlzLnJlY3RhbmdsZSA9IHJlY3RhbmdsZVxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNcbiAgfVxuXG4gIGdldCBib3VuZFJlY3QgKCkge1xuICAgIHJldHVybiB0eXBlb2YgdGhpcy5yZWN0YW5nbGUgPT09ICdmdW5jdGlvbicgPyB0aGlzLnJlY3RhbmdsZSgpIDogdGhpcy5yZWN0YW5nbGVcbiAgfVxufVxuXG5jbGFzcyBOb3RDcm9zc2luZ1N0cmF0ZWd5IGV4dGVuZHMgQmFzaWNTdHJhdGVneSB7XG4gIHBvc2l0aW9uaW5nIChyZWN0YW5nbGVMaXN0LCBpbmRleGVzT2ZOZXdzKSB7XG4gICAgY29uc3Qgc3RhdGljUmVjdGFuZ2xlSW5kZXhlcyA9IHJlY3RhbmdsZUxpc3QucmVkdWNlKChpbmRleGVzLCBfcmVjdCwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChpbmRleGVzT2ZOZXdzLmluZGV4T2YoaW5kZXgpID09PSAtMSkge1xuICAgICAgICBpbmRleGVzLnB1c2goaW5kZXgpXG4gICAgICB9XG4gICAgICByZXR1cm4gaW5kZXhlc1xuICAgIH0sIFtdKVxuXG4gICAgaW5kZXhlc09mTmV3cy5mb3JFYWNoKChpbmRleCkgPT4ge1xuICAgICAgbGV0IHJlY3QgPSByZWN0YW5nbGVMaXN0W2luZGV4XVxuICAgICAgbGV0IHJlbW92YWJsZSA9IGZhbHNlXG5cbiAgICAgIHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMuZm9yRWFjaCgoaW5kZXhPZlN0YXRpYykgPT4ge1xuICAgICAgICBjb25zdCBzdGF0aWNSZWN0ID0gcmVjdGFuZ2xlTGlzdFtpbmRleE9mU3RhdGljXVxuICAgICAgICByZWN0ID0gc3RhdGljUmVjdC5tb3ZlVG9Cb3VuZChyZWN0KVxuICAgICAgfSlcblxuICAgICAgcmVtb3ZhYmxlID0gc3RhdGljUmVjdGFuZ2xlSW5kZXhlcy5zb21lKChpbmRleE9mU3RhdGljKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YXRpY1JlY3QgPSByZWN0YW5nbGVMaXN0W2luZGV4T2ZTdGF0aWNdXG4gICAgICAgIHJldHVybiAgISFzdGF0aWNSZWN0LmFuZChyZWN0KVxuICAgICAgfSkgfHwgcmVjdC5hbmQodGhpcy5ib3VuZFJlY3QpLmdldFNxdWFyZSgpICE9PSByZWN0LmdldFNxdWFyZSgpXG5cbiAgICAgIGlmIChyZW1vdmFibGUpIHtcbiAgICAgICAgcmVjdC5yZW1vdmFibGUgPSB0cnVlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0aWNSZWN0YW5nbGVJbmRleGVzLnB1c2goaW5kZXgpXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcmVjdGFuZ2xlTGlzdFxuICB9XG5cbiAgc29ydGluZyhvZGxEcmFnZ2FibGVzTGlzdCwgbmV3RHJhZ2dhYmxlcywgaW5kZXhPZk5ld3MpIHtcbiAgICBjb25zdCBkcmFnZ2FibGVzID0gb2RsRHJhZ2dhYmxlc0xpc3QuY29uY2F0KG5ld0RyYWdnYWJsZXMpXG4gICAgbmV3RHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGluZGV4T2ZOZXdzLnB1c2goZHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkpXG4gICAgfSlcbiAgICByZXR1cm4gZHJhZ2dhYmxlc1xuICB9XG59XG5cbmNsYXNzIEZsb2F0TGVmdFN0cmF0ZWd5IGV4dGVuZHMgQmFzaWNTdHJhdGVneSB7XG4gIGNvbnN0cnVjdG9yKHJlY3RhbmdsZSwgb3B0aW9ucz17fSkge1xuICAgIHN1cGVyKHJlY3RhbmdsZSwgb3B0aW9ucylcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHJlbW92YWJsZTogdHJ1ZVxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0aGlzLnJhZGl1cyA9IG9wdGlvbnMucmFkaXVzIHx8IDgwXG5cbiAgICB0aGlzLnBhZGRpbmdUb3BMZWZ0ID0gb3B0aW9ucy5wYWRkaW5nVG9wTGVmdCB8fCBuZXcgUG9pbnQoMCwgMClcbiAgICB0aGlzLnBhZGRpbmdCb3R0b21SaWdodCA9IG9wdGlvbnMucGFkZGluZ0JvdHRvbVJpZ2h0IHx8IG5ldyBQb2ludCgwLCAwKVxuICAgIHRoaXMueUdhcEJldHdlZW5EcmFnZ2FibGVzID0gb3B0aW9ucy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgfHwgMFxuXG4gICAgdGhpcy5nZXREaXN0YW5jZSA9IG9wdGlvbnMuZ2V0RGlzdGFuY2UgfHwgZ2V0RGlzdGFuY2VcbiAgICB0aGlzLmdldFBvc2l0aW9uID0gb3B0aW9ucy5nZXRQb3NpdGlvbiB8fCAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnBvc2l0aW9uKVxuICB9XG5cbiAgcG9zaXRpb25pbmcocmVjdGFuZ2xlTGlzdCwgX2luZGV4ZXNPZk5ld3MpIHtcbiAgICBjb25zdCBib3VuZFJlY3QgPSB0aGlzLmJvdW5kUmVjdFxuICAgIGNvbnN0IHJlY3RQMiA9IGJvdW5kUmVjdC5nZXRQMigpXG4gICAgbGV0IGJvdW5kYXJ5UG9pbnRzID0gW2JvdW5kUmVjdC5wb3NpdGlvbl1cblxuICAgIHJlY3RhbmdsZUxpc3QuZm9yRWFjaCgocmVjdCwgcmVjdEluZGV4KSA9PiB7XG4gICAgICBsZXQgcG9zaXRpb24sIGlzVmFsaWQgPSBmYWxzZVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib3VuZGFyeVBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBwb3NpdGlvbiA9IG5ldyBQb2ludChcbiAgICAgICAgICBib3VuZGFyeVBvaW50c1tpXS54ICsgdGhpcy5wYWRkaW5nVG9wTGVmdC54LFxuICAgICAgICAgIGkgPiAwID8gKGJvdW5kYXJ5UG9pbnRzW2kgLSAxXS55ICsgdGhpcy55R2FwQmV0d2VlbkRyYWdnYWJsZXMpIDogKGJvdW5kUmVjdC5wb3NpdGlvbi55ICsgdGhpcy5wYWRkaW5nVG9wTGVmdC55KVxuICAgICAgICApXG5cbiAgICAgICAgaXNWYWxpZCA9IChwb3NpdGlvbi54ICsgcmVjdC5zaXplLnggPCByZWN0UDIueClcblxuICAgICAgICBpZiAoaXNWYWxpZCkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICAgIHBvc2l0aW9uID0gbmV3IFBvaW50KFxuICAgICAgICAgIGJvdW5kUmVjdC5wb3NpdGlvbi54ICsgdGhpcy5wYWRkaW5nVG9wTGVmdC54LFxuICAgICAgICAgIGJvdW5kYXJ5UG9pbnRzW2JvdW5kYXJ5UG9pbnRzLmxlbmd0aCAtIDFdLnkgKyAocmVjdEluZGV4ID4gMCA/IHRoaXMueUdhcEJldHdlZW5EcmFnZ2FibGVzIDogdGhpcy5wYWRkaW5nVG9wTGVmdC55KVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHJlY3QucG9zaXRpb24gPSBwb3NpdGlvblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZW1vdmFibGUgJiYgcmVjdC5nZXRQMygpLnkgPiBib3VuZFJlY3QuZ2V0UDMoKS55KSB7XG4gICAgICAgIHJlY3QucmVtb3ZhYmxlID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBib3VuZGFyeVBvaW50cyA9IGFkZFBvaW50VG9Cb3VuZFBvaW50cyhib3VuZGFyeVBvaW50cywgcmVjdC5nZXRQMygpLmFkZCh0aGlzLnBhZGRpbmdCb3R0b21SaWdodCkpXG4gICAgfSlcbiAgICByZXR1cm4gcmVjdGFuZ2xlTGlzdFxuICB9XG5cbiAgc29ydGluZyhvZGxEcmFnZ2FibGVzTGlzdCwgbmV3RHJhZ2dhYmxlcywgaW5kZXhPZk5ld3MpIHtcbiAgICBjb25zdCBuZXdMaXN0ID0gb2RsRHJhZ2dhYmxlc0xpc3QuY29uY2F0KClcbiAgICBjb25zdCBsaXN0T2xkUG9zaXRpb24gPSBvZGxEcmFnZ2FibGVzTGlzdC5tYXAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLmdldFBvc2l0aW9uKCkpXG4gICAgbmV3RHJhZ2dhYmxlcy5mb3JFYWNoKChuZXdEcmFnZ2FibGUpID0+IHtcbiAgICAgIGxldCBpbmRleCA9IGluZGV4T2ZOZWFyZXN0UG9pbnQobGlzdE9sZFBvc2l0aW9uLCB0aGlzLmdldFBvc2l0aW9uKG5ld0RyYWdnYWJsZSksIHRoaXMucmFkaXVzLCB0aGlzLmdldERpc3RhbmNlKVxuICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICBpbmRleCA9IG5ld0xpc3QubGVuZ3RoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbmRleCA9IG5ld0xpc3QuaW5kZXhPZihvZGxEcmFnZ2FibGVzTGlzdFtpbmRleF0pXG4gICAgICB9XG4gICAgICBuZXdMaXN0LnNwbGljZShpbmRleCwgMCwgbmV3RHJhZ2dhYmxlKVxuICAgIH0pXG4gICAgbmV3RHJhZ2dhYmxlcy5mb3JFYWNoKChuZXdEcmFnZ2FibGUpID0+IHtcbiAgICAgIGluZGV4T2ZOZXdzLnB1c2gobmV3TGlzdC5pbmRleE9mKG5ld0RyYWdnYWJsZSkpXG4gICAgfSlcbiAgICByZXR1cm4gbmV3TGlzdFxuICB9XG59XG5cbmNsYXNzIEZsb2F0UmlnaHRTdHJhdGVneSBleHRlbmRzIEZsb2F0TGVmdFN0cmF0ZWd5IHtcbiAgY29uc3RydWN0b3IocmVjdGFuZ2xlLCBvcHRpb25zPXt9KSB7XG4gICAgc3VwZXIocmVjdGFuZ2xlLCBvcHRpb25zKVxuXG4gICAgdGhpcy5wYWRkaW5nVG9wUmlnaHQgPSBvcHRpb25zLnBhZGRpbmdUb3BSaWdodCB8fCBuZXcgUG9pbnQoNSwgNSlcbiAgICB0aGlzLnBhZGRpbmdCb3R0b21MZWZ0ID0gb3B0aW9ucy5wYWRkaW5nQm90dG9tTGVmdCB8fCBuZXcgUG9pbnQoMCwgMClcbiAgICB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyA9IG9wdGlvbnMueUdhcEJldHdlZW5EcmFnZ2FibGVzIHx8IDBcblxuICAgIHRoaXMucGFkZGluZ0JvdHRvbU5lZ0xlZnQgPSBuZXcgUG9pbnQoLXRoaXMucGFkZGluZ0JvdHRvbUxlZnQueCwgdGhpcy5wYWRkaW5nQm90dG9tTGVmdC55KVxuICB9XG5cbiAgcG9zaXRpb25pbmcocmVjdGFuZ2xlTGlzdCwgX2luZGV4ZXNPZk5ld3MpIHtcbiAgICBjb25zdCBib3VuZFJlY3QgPSB0aGlzLmJvdW5kUmVjdFxuICAgIGxldCBib3VuZGFyeVBvaW50cyA9IFtib3VuZFJlY3QuZ2V0UDIoKV1cblxuICAgIHJlY3RhbmdsZUxpc3QuZm9yRWFjaCgocmVjdCwgcmVjdEluZGV4KSA9PiB7XG4gICAgICBsZXQgcG9zaXRpb24sIGlzVmFsaWQgPSBmYWxzZVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib3VuZGFyeVBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBwb3NpdGlvbiA9IG5ldyBQb2ludChcbiAgICAgICAgICBib3VuZGFyeVBvaW50c1tpXS54IC0gcmVjdC5zaXplLnggLSB0aGlzLnBhZGRpbmdUb3BSaWdodC54LFxuICAgICAgICAgIGkgPiAwID8gKGJvdW5kYXJ5UG9pbnRzW2kgLSAxXS55ICsgdGhpcy55R2FwQmV0d2VlbkRyYWdnYWJsZXMpIDogKGJvdW5kUmVjdC5wb3NpdGlvbi55ICsgdGhpcy5wYWRkaW5nVG9wUmlnaHQueSlcbiAgICAgICAgKVxuXG4gICAgICAgIGlzVmFsaWQgPSAocG9zaXRpb24ueCA+IHJlY3QucG9zaXRpb24ueClcbiAgICAgICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgcG9zaXRpb24gPSBuZXcgUG9pbnQoXG4gICAgICAgICAgYm91bmRSZWN0LmdldFAyKCkueCAgLSByZWN0LnNpemUueCAtIHRoaXMucGFkZGluZ1RvcFJpZ2h0LngsXG4gICAgICAgICAgYm91bmRhcnlQb2ludHNbYm91bmRhcnlQb2ludHMubGVuZ3RoIC0gMV0ueSArIChyZWN0SW5kZXggPiAwID8gdGhpcy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgOiB0aGlzLnBhZGRpbmdUb3BSaWdodC55KVxuICAgICAgICApXG4gICAgICB9XG4gICAgICByZWN0LnBvc2l0aW9uID0gcG9zaXRpb25cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucmVtb3ZhYmxlICYmIHJlY3QuZ2V0UDQoKS55ID4gYm91bmRSZWN0LmdldFA0KCkueSkge1xuICAgICAgICByZWN0LnJlbW92YWJsZSA9IHRydWVcbiAgICAgIH1cbiAgICAgIGJvdW5kYXJ5UG9pbnRzID0gYWRkUG9pbnRUb0JvdW5kUG9pbnRzKGJvdW5kYXJ5UG9pbnRzLCByZWN0LmdldFA0KCkuYWRkKHRoaXMucGFkZGluZ0JvdHRvbU5lZ0xlZnQpLCB0cnVlKVxuICAgIH0pXG4gICAgcmV0dXJuIHJlY3RhbmdsZUxpc3RcbiAgfVxufVxuXG5leHBvcnQgeyBOb3RDcm9zc2luZ1N0cmF0ZWd5LCBGbG9hdExlZnRTdHJhdGVneSwgRmxvYXRSaWdodFN0cmF0ZWd5IH1cbiIsImltcG9ydCBQb2ludCBmcm9tICcuL3BvaW50J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QW5nbGVEaWZmKGFscGhhLCBiZXRhKSB7XG4gIGNvbnN0IG1pbkFuZ2xlID0gTWF0aC5taW4oYWxwaGEsIGJldGEpXG4gIGNvbnN0IG1heEFuZ2xlID0gIE1hdGgubWF4KGFscGhhLCBiZXRhKVxuICByZXR1cm4gTWF0aC5taW4obWF4QW5nbGUgLSBtaW5BbmdsZSwgbWluQW5nbGUgKyBNYXRoLlBJKjIgLSBtYXhBbmdsZSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFuZ2xlKHAxLCBwMikge1xuICBjb25zdCBkaWZmID0gcDIuc3ViKHAxKVxuICByZXR1cm4gbm9ybWFsaXplQW5nbGUoTWF0aC5hdGFuMihkaWZmLnksIGRpZmYueCkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b1JhZGlhbihhbmdsZSkge1xuICByZXR1cm4gKChhbmdsZSAlIDM2MCkgKiBNYXRoLlBJIC8gMTgwKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9EZWdyZWUoYW5nbGUpIHtcbiAgcmV0dXJuIChhbmdsZSAqIDE4MCAvIE1hdGguUEkpICUgMzYwXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZEFuZ2xlKG1pbiwgbWF4LCB2YWwpIHtcbiAgbGV0IGRtaW4sIGRtYXhcbiAgaWYgKG1pbiA8IG1heCAmJiB2YWwgPiBtaW4gJiYgdmFsIDwgbWF4KSB7XG4gICAgcmV0dXJuIHZhbFxuICB9IGVsc2UgaWYgKG1heCA8IG1pbiAmJiAodmFsIDwgbWF4IHx8IHZhbCA+IG1pbikpIHtcbiAgICByZXR1cm4gdmFsXG4gIH0gZWxzZSB7XG4gICAgZG1pbiA9IGdldEFuZ2xlRGlmZihtaW4sIHZhbClcbiAgICBkbWF4ID0gZ2V0QW5nbGVEaWZmKG1heCwgdmFsKVxuICAgIGlmIChkbWluIDwgZG1heCkge1xuICAgICAgcmV0dXJuIG1pblxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbWF4XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROZWFyZXN0QW5nbGUoYXJyLCBhbmdsZSkge1xuICBsZXQgaSwgdGVtcCwgZGlmZiA9IE1hdGguUEkgKiAyLCB2YWx1ZVxuICBmb3IgKGkgPSAwOyBpIDwgYXJyLmxlbmd0aDtpKyspIHtcbiAgICB0ZW1wID0gZ2V0QW5nbGVEaWZmKGFycltpXSwgYW5nbGUpXG4gICAgaWYgKGRpZmYgPCB0ZW1wKSB7XG4gICAgICBkaWZmID0gdGVtcFxuICAgICAgdmFsdWUgPSBhcnJbaV1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHZhbHVlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVBbmdsZSh2YWwpIHtcbiAgd2hpbGUgKHZhbCA8IDApIHtcbiAgICB2YWwgKz0gMiAqIE1hdGguUElcbiAgfVxuICB3aGlsZSAodmFsID4gMiAqIE1hdGguUEkpIHtcbiAgICB2YWwgLT0gMiAqIE1hdGguUElcbiAgfVxuICByZXR1cm4gdmFsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oYW5nbGUsIGxlbmd0aCwgY2VudGVyKSB7XG4gIGNlbnRlciA9IGNlbnRlciB8fCBuZXcgUG9pbnQoMCwgMClcbiAgcmV0dXJuIGNlbnRlci5hZGQobmV3IFBvaW50KGxlbmd0aCAqIE1hdGguY29zKGFuZ2xlKSwgbGVuZ3RoICogTWF0aC5zaW4oYW5nbGUpKSlcbn1cbiIsImltcG9ydCBQb2ludCBmcm9tICcuL2dlb21ldHJ5L3BvaW50J1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tICcuL2dlb21ldHJ5L3JlY3RhbmdsZSdcbmltcG9ydCB7XG4gIGdldFBvaW50T25MaW5lQnlMZW5naHQsXG4gIGRpcmVjdENyb3NzaW5nLFxuICBib3VuZFRvTGluZVxufSBmcm9tICcuL2dlb21ldHJ5L2JvdW5kcydcblxuaW1wb3J0IHtcbiAgZ2V0QW5nbGUsXG4gIG5vcm1hbGl6ZUFuZ2xlLFxuICBib3VuZEFuZ2xlLFxuICBnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW1cbn0gZnJvbSAnLi9nZW9tZXRyeS9hbmdsZXMnXG5cbmV4cG9ydCBjbGFzcyBCb3VuZCB7XG4gIGNvbnN0cnVjdG9yICgpIHt9XG5cbiAgYm91bmQocG9pbnQsIF9zaXplKSB7XG4gICAgcmV0dXJuIHBvaW50XG4gIH1cblxuICByZWZyZXNoICgpIHt9XG5cbiAgc3RhdGljIGJvdW5kaW5nKCkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IHRoaXMoLi4uYXJndW1lbnRzKVxuICAgIHJldHVybiBpbnN0YW5jZS5ib3VuZC5iaW5kKGluc3RhbmNlKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvUmVjdGFuZ2xlIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3RvcihyZWN0YW5nbGUpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5yZWN0YW5nbGUgPSByZWN0YW5nbGVcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgY2FsY1BvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIGNvbnN0IHJlY3RQMiA9IHRoaXMucmVjdGFuZ2xlLmdldFAzKClcblxuICAgIGlmICh0aGlzLnJlY3RhbmdsZS5wb3NpdGlvbi54ID4gY2FsY1BvaW50LngpIHtcbiAgICAgIChjYWxjUG9pbnQueCA9IHRoaXMucmVjdGFuZ2xlLnBvc2l0aW9uLngpXG4gICAgfVxuICAgIGlmICh0aGlzLnJlY3RhbmdsZS5wb3NpdGlvbi55ID4gY2FsY1BvaW50LnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gdGhpcy5yZWN0YW5nbGUucG9zaXRpb24ueVxuICAgIH1cbiAgICBpZiAocmVjdFAyLnggPCBjYWxjUG9pbnQueCArIHNpemUueCkge1xuICAgICAgY2FsY1BvaW50LnggPSByZWN0UDIueCAtIHNpemUueFxuICAgIH1cbiAgICBpZiAocmVjdFAyLnkgPCBjYWxjUG9pbnQueSArIHNpemUueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSByZWN0UDIueSAtIHNpemUueVxuICAgIH1cblxuICAgIHJldHVybiBjYWxjUG9pbnRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb0VsZW1lbnQgZXh0ZW5kcyBCb3VuZFRvUmVjdGFuZ2xlIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29udGFpbmVyKSB7XG4gICAgc3VwZXIoUmVjdGFuZ2xlLmZyb21FbGVtZW50KGVsZW1lbnQsIGNvbnRhaW5lcikpXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyXG4gIH1cblxuICByZWZyZXNoICgpIHtcbiAgICB0aGlzLnJlY3RhbmdsZSA9IFJlY3RhbmdsZS5mcm9tRWxlbWVudCh0aGlzLmVsZW1lbnQsIHRoaXMuY29udGFpbmVyKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvTGluZVggZXh0ZW5kcyBCb3VuZCB7XG4gIGNvbnN0cnVjdG9yKHgsIHN0YXJ0WSwgZW5kWSkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnggPSB4XG4gICAgdGhpcy5zdGFydFkgPSBzdGFydFlcbiAgICB0aGlzLmVuZFkgPSBlbmRZXG4gIH1cblxuICBib3VuZChwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IGNhbGNQb2ludCA9IHBvaW50LmNsb25lKClcblxuICAgIGNhbGNQb2ludC54ID0gdGhpcy54XG4gICAgaWYgKHRoaXMuc3RhcnRZID4gY2FsY1BvaW50LnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gdGhpcy5zdGFydFlcbiAgICB9XG4gICAgaWYgKHRoaXMuZW5kWSA8IGNhbGNQb2ludC55ICsgc2l6ZS55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHRoaXMuZW5kWSAtIHNpemUueVxuICAgIH1cblxuICAgIHJldHVybiBjYWxjUG9pbnRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb0xpbmVZIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3Rvcih5LCBzdGFydFgsIGVuZFgpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy55ID0geVxuICAgIHRoaXMuc3RhcnRYID0gc3RhcnRYXG4gICAgdGhpcy5lbmRYID0gZW5kWFxuICB9XG5cbiAgYm91bmQocG9pbnQsIHNpemUpIHtcbiAgICBjb25zdCBjYWxjUG9pbnQgPSBwb2ludC5jbG9uZSgpXG4gICAgY2FsY1BvaW50LnkgPSB0aGlzLnlcbiAgICBpZiAodGhpcy5zdGFydFggPiBjYWxjUG9pbnQueCkge1xuICAgICAgY2FsY1BvaW50LnggPSB0aGlzLnN0YXJ0WFxuICAgIH1cbiAgICBpZiAodGhpcy5lbmRYIDwgY2FsY1BvaW50LnggKyBzaXplLngpIHtcbiAgICAgIGNhbGNQb2ludC54ID0gdGhpcy5lbmRYIC0gc2l6ZS54XG4gICAgfVxuICAgIHJldHVybiBjYWxjUG9pbnRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb0xpbmUgZXh0ZW5kcyBCb3VuZCB7XG4gIGNvbnN0cnVjdG9yKHN0YXJ0UG9pbnQsIGVuZFBvaW50KSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuc3RhcnRQb2ludCA9IHN0YXJ0UG9pbnRcbiAgICB0aGlzLmVuZFBvaW50ID0gZW5kUG9pbnRcbiAgICBjb25zdCBhbHBoYSA9IE1hdGguYXRhbjIoZW5kUG9pbnQueSAtIHN0YXJ0UG9pbnQueSwgZW5kUG9pbnQueCAtIHN0YXJ0UG9pbnQueClcbiAgICBjb25zdCBiZXRhID0gYWxwaGEgKyBNYXRoLlBJIC8gMlxuICAgIHRoaXMuc29tZUsgPSAxMFxuICAgIHRoaXMuY29zQmV0YSA9IE1hdGguY29zKGJldGEpXG4gICAgdGhpcy5zaW5CZXRhID0gTWF0aC5zaW4oYmV0YSlcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgcG9pbnQyID0gbmV3IFBvaW50KFxuICAgICAgcG9pbnQueCArIHRoaXMuc29tZUsgKiB0aGlzLmNvc0JldGEsXG4gICAgICBwb2ludC55ICsgdGhpcy5zb21lSyAqIHRoaXMuc2luQmV0YVxuICAgIClcblxuICAgIGNvbnN0IG5ld0VuZFBvaW50ID0gZ2V0UG9pbnRPbkxpbmVCeUxlbmdodCh0aGlzLmVuZFBvaW50LCB0aGlzLnN0YXJ0UG9pbnQsIHNpemUueClcbiAgICBjb25zdCBwb2ludENyb3NzaW5nID0gZGlyZWN0Q3Jvc3NpbmcodGhpcy5zdGFydFBvaW50LCB0aGlzLmVuZFBvaW50LCBwb2ludCwgcG9pbnQyKVxuXG4gICAgcmV0dXJuIGJvdW5kVG9MaW5lKHRoaXMuc3RhcnRQb2ludCwgbmV3RW5kUG9pbnQsIHBvaW50Q3Jvc3NpbmcpXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9DaXJjbGUgZXh0ZW5kcyBCb3VuZCB7XG4gIGNvbnN0cnVjdG9yKGNlbnRlciwgcmFkaXVzKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuY2VudGVyID0gY2VudGVyXG4gICAgdGhpcy5yYWRpdXMgPSByYWRpdXNcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBfc2l6ZSkge1xuICAgIHJldHVybiBnZXRQb2ludE9uTGluZUJ5TGVuZ2h0KHRoaXMuY2VudGVyLCBwb2ludCwgdGhpcy5yYWRpdXMpXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9BcmMgZXh0ZW5kcyBCb3VuZFRvQ2lyY2xlIHtcbiAgY29uc3RydWN0b3IoY2VudGVyLCByYWRpdXMsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlKSB7XG4gICAgc3VwZXIoY2VudGVyLCByYWRpdXMpXG4gICAgdGhpcy5fc3RhcnRBbmdsZSA9IHN0YXJ0QW5nbGVcbiAgICB0aGlzLl9lbmRBbmdsZSA9IGVuZEFuZ2xlXG4gIH1cblxuICBzdGFydEFuZ2xlKCkge1xuICAgIHJldHVybiB0eXBlb2YgdGhpcy5fc3RhcnRBbmdsZSA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMuX3N0YXJ0QW5nbGUoKSA6IHRoaXMuX3N0YXJ0QW5nbGVcbiAgfVxuXG4gIGVuZEFuZ2xlKCkge1xuICAgIHJldHVybiB0eXBlb2YgdGhpcy5fZW5kQW5nbGUgPT09ICdmdW5jdGlvbicgPyB0aGlzLl9lbmRBbmdsZSgpIDogdGhpcy5fZW5kQW5nbGVcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBfc2l6ZSkge1xuICAgIGxldCBhbmdsZSA9IGdldEFuZ2xlKHRoaXMuY2VudGVyLCBwb2ludClcbiAgICBhbmdsZSA9IG5vcm1hbGl6ZUFuZ2xlKGFuZ2xlKVxuICAgIGFuZ2xlID0gYm91bmRBbmdsZSh0aGlzLnN0YXJ0QW5nbGUoKSwgdGhpcy5lbmRBbmdsZSgpLCBhbmdsZSlcbiAgICByZXR1cm4gZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKGFuZ2xlLCB0aGlzLnJhZGl1cywgdGhpcy5jZW50ZXIpXG4gIH1cbn1cbiIsImltcG9ydCByYW5nZSBmcm9tICcuL3V0aWxzL3JhbmdlLmpzJ1xuaW1wb3J0IHJlbW92ZUl0ZW0gZnJvbSAnLi91dGlscy9yZW1vdmUtYXJyYXktaXRlbSdcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudEVtaXR0ZXInXG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gJy4vZ2VvbWV0cnkvcmVjdGFuZ2xlJ1xuaW1wb3J0IHsgdHJhbnNmb3JtZWRTcGFjZURpc3RhbmNlRmFjdG9yeSB9IGZyb20gJy4vZ2VvbWV0cnkvZGlzdGFuY2VzJ1xuaW1wb3J0IHsgc2NvcGVzLCBkZWZhdWx0U2NvcGUgfSBmcm9tICcuL3Njb3BlJ1xuXG5pbXBvcnQgeyBGbG9hdExlZnRTdHJhdGVneSB9IGZyb20gJy4vcG9zaXRpb25pbmcnXG5pbXBvcnQgeyBCb3VuZFRvRWxlbWVudCB9IGZyb20gJy4vYm91bmRpbmcnXG5cbmNvbnN0IGFkZFRvRGVmYXVsdFNjb3BlID0gZnVuY3Rpb24odGFyZ2V0KSB7XG4gIGRlZmF1bHRTY29wZS5hZGRUYXJnZXQodGFyZ2V0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXJnZXQgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBkcmFnZ2FibGVzLCBvcHRpb25zID0ge30pIHtcbiAgICBzdXBlcihvcHRpb25zKVxuICAgIGNvbnN0IHRhcmdldCA9IHRoaXNcblxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgdGltZUVuZDogMjAwLFxuICAgICAgdGltZUV4Y2FuZ2U6IDQwMFxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0aGlzLnBvc2l0aW9uaW5nU3RyYXRlZ3kgPSBvcHRpb25zLnN0cmF0ZWd5IHx8IG5ldyBGbG9hdExlZnRTdHJhdGVneShcbiAgICAgIHRoaXMuZ2V0UmVjdGFuZ2xlLmJpbmQodGhpcyksXG4gICAgICB7XG4gICAgICAgIHJhZGl1czogODAsXG4gICAgICAgIGdldERpc3RhbmNlOiB0cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5KHsgeDogMSwgeTogNCB9KSxcbiAgICAgICAgcmVtb3ZhYmxlOiB0cnVlXG4gICAgICB9XG4gICAgKVxuXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUudGFyZ2V0cy5wdXNoKHRhcmdldCkpXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gZHJhZ2dhYmxlc1xuXG4gICAgVGFyZ2V0LmVtaXR0ZXIuZW1pdCgndGFyZ2V0OmNyZWF0ZScsIHRoaXMpXG5cbiAgICB0aGlzLnN0YXJ0Qm91bmRpbmcoKVxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBzdGFydEJvdW5kaW5nKCkge1xuICAgIHRoaXMuYm91bmQgPSB0aGlzLm9wdGlvbnMuYm91bmQgfHwgQm91bmRUb0VsZW1lbnQuYm91bmRpbmcodGhpcy5lbGVtZW50KVxuICB9XG5cbiAgcG9zaXRpb25pbmcgKGRyYWdnYWJsZXMsIGluZGV4ZXNPZk5ldykge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uaW5nU3RyYXRlZ3kucG9zaXRpb25pbmcoZHJhZ2dhYmxlcywgaW5kZXhlc09mTmV3KVxuICB9XG5cbiAgc29ydGluZyAob2xkRHJhZ2dhYmxlcywgbmV3RHJhZ2dhYmxlcywgaW5kZXhPZk5ld3MpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbmluZ1N0cmF0ZWd5LnNvcnRpbmcob2xkRHJhZ2dhYmxlcywgbmV3RHJhZ2dhYmxlcywgaW5kZXhPZk5ld3MpXG4gIH1cblxuICBpbml0KCkge1xuICAgIGxldCByZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXdcblxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzID0gdGhpcy5kcmFnZ2FibGVzLmZpbHRlcigoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBsZXQgZWxlbWVudCA9IGRyYWdnYWJsZS5lbGVtZW50LnBhcmVudE5vZGVcbiAgICAgIHdoaWxlIChlbGVtZW50KSB7XG4gICAgICAgIGlmIChlbGVtZW50ID09PSB0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGVcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH0pXG5cbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMubGVuZ3RoKSB7XG4gICAgICBpbmRleGVzT2ZOZXcgPSByYW5nZSh0aGlzLmlubmVyRHJhZ2dhYmxlcy5sZW5ndGgpXG4gICAgICByZWN0YW5nbGVzID0gdGhpcy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgICB9KSwgaW5kZXhlc09mTmV3KVxuICAgICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXcpXG4gICAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHRoaXMuZW1pdCgndGFyZ2V0OmFkZCcsIGRyYWdnYWJsZSkpXG4gICAgfVxuICB9XG5cbiAgZ2V0UmVjdGFuZ2xlKCkge1xuICAgIHJldHVybiBSZWN0YW5nbGUuZnJvbUVsZW1lbnQodGhpcy5lbGVtZW50LCB0aGlzLmNvbnRhaW5lciwgdHJ1ZSlcbiAgfVxuXG4gIGNhdGNoRHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuY2F0Y2hEcmFnZ2FibGUpIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuY2F0Y2hEcmFnZ2FibGUodGhpcywgZHJhZ2dhYmxlKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0YXJnZXRSZWN0YW5nbGUgPSB0aGlzLmdldFJlY3RhbmdsZSgpXG4gICAgICBjb25zdCBkcmFnZ2FibGVTcXVhcmUgPSBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKCkuZ2V0U3F1YXJlKClcblxuICAgICAgcmV0dXJuIGRyYWdnYWJsZVNxdWFyZSA8IHRhcmdldFJlY3RhbmdsZS5nZXRTcXVhcmUoKVxuICAgICAgICAgICAgICAmJiB0YXJnZXRSZWN0YW5nbGUuaW5jbHVkZVBvaW50KGRyYWdnYWJsZS5nZXRDZW50ZXIoKSlcbiAgICB9XG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRSZWN0YW5nbGUoKS5wb3NpdGlvblxuICB9XG5cbiAgZ2V0U2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRSZWN0YW5nbGUoKS5zaXplXG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHNjb3Blcy5mb3JFYWNoKChzY29wZSkgPT4gcmVtb3ZlSXRlbShzY29wZS50YXJnZXRzLCB0aGlzKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgW10pXG4gICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBbXSwgMClcbiAgfVxuXG4gIG9uRW5kKGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IG5ld0RyYWdnYWJsZXNJbmRleCA9IFtdXG5cbiAgICBpZiAodGhpcy5nZXRSZWN0YW5nbGUoKS5pbmNsdWRlUG9pbnQoZHJhZ2dhYmxlLmdldENlbnRlcigpKSkge1xuICAgICAgZHJhZ2dhYmxlLnBvc2l0aW9uID0gdGhpcy5ib3VuZChkcmFnZ2FibGUucG9zaXRpb24sIGRyYWdnYWJsZS5nZXRTaXplKCkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHRoaXMuZW1pdCgndGFyZ2V0OmJlZm9yZUFkZCcsIGRyYWdnYWJsZSlcblxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzID0gdGhpcy5zb3J0aW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLCBbZHJhZ2dhYmxlXSwgbmV3RHJhZ2dhYmxlc0luZGV4KVxuICAgIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgfSksIG5ld0RyYWdnYWJsZXNJbmRleClcblxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgbmV3RHJhZ2dhYmxlc0luZGV4KVxuICAgIGlmICh0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkgIT09IC0xKSB7XG4gICAgICB0aGlzLmFkZFJlbW92ZU9uTW92ZShkcmFnZ2FibGUpXG4gICAgfVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBzZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXcsIHRpbWUpIHtcbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5zbGljZSgwKS5mb3JFYWNoKChkcmFnZ2FibGUsIGkpID0+IHtcbiAgICAgIGNvbnN0IHJlY3QgPSByZWN0YW5nbGVzW2ldLFxuICAgICAgICB0aW1lRW5kID0gdGltZSB8fCB0aW1lID09PSAwID8gdGltZSA6IGluZGV4ZXNPZk5ldy5pbmRleE9mKGkpICE9PSAtMSA/IHRoaXMub3B0aW9ucy50aW1lRW5kIDogdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlXG5cbiAgICAgIGlmIChyZWN0LnJlbW92YWJsZSkge1xuICAgICAgICBkcmFnZ2FibGUubW92ZShkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uLCB0aW1lRW5kLCB0cnVlLCB0cnVlKVxuICAgICAgICByZW1vdmVJdGVtKHRoaXMuaW5uZXJEcmFnZ2FibGVzLCBkcmFnZ2FibGUpXG4gICAgICAgIHRoaXMuZW1pdCgndGFyZ2V0OnJlbW92ZScsIGRyYWdnYWJsZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRyYWdnYWJsZS5tb3ZlKHJlY3QucG9zaXRpb24sIHRpbWVFbmQsIHRydWUsIHRydWUpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGFkZChkcmFnZ2FibGUsIHRpbWUpIHtcbiAgICBjb25zdCBuZXdEcmFnZ2FibGVzSW5kZXggPSB0aGlzLmlubmVyRHJhZ2dhYmxlcy5sZW5ndGhcblxuICAgIHRoaXMuZW1pdCgndGFyZ2V0OmJlZm9yZUFkZCcsIGRyYWdnYWJsZSlcblxuICAgIHRoaXMucHVzaElubmVyRHJhZ2dhYmxlKGRyYWdnYWJsZSlcbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBuZXdEcmFnZ2FibGVzSW5kZXgsIGRyYWdnYWJsZSlcblxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgW25ld0RyYWdnYWJsZXNJbmRleF0sIHRpbWUgfHwgMClcbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMSkge1xuICAgICAgdGhpcy5hZGRSZW1vdmVPbk1vdmUoZHJhZ2dhYmxlKVxuICAgIH1cbiAgfVxuXG4gIHB1c2hJbm5lckRyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpPT09LTEpIHtcbiAgICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxuICAgIH1cbiAgfVxuXG4gIGFkZFJlbW92ZU9uTW92ZShkcmFnZ2FibGUpIHtcbiAgICBkcmFnZ2FibGUub24oJ2RyYWc6bW92ZScsIHRoaXMucmVtb3ZlSGFuZGxlciA9ICgpID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlKGRyYWdnYWJsZSlcbiAgICB9KVxuXG4gICAgdGhpcy5lbWl0KCd0YXJnZXQ6YWRkJywgZHJhZ2dhYmxlKVxuICB9XG5cbiAgcmVtb3ZlKGRyYWdnYWJsZSkge1xuICAgIGRyYWdnYWJsZS51bnN1YnNjcmliZSgnZHJhZzptb3ZlJywgdGhpcy5yZW1vdmVIYW5kbGVyKVxuXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSlcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5zcGxpY2UoaW5kZXgsIDEpXG5cbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBbXSlcblxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgW10pXG4gICAgdGhpcy5lbWl0KCd0YXJnZXQ6cmVtb3ZlJywgZHJhZ2dhYmxlKVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUubW92ZShkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uLCAwLCB0cnVlLCB0cnVlKVxuICAgICAgdGhpcy5lbWl0KCd0YXJnZXQ6cmVtb3ZlJywgZHJhZ2dhYmxlKVxuICAgIH0pXG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMgPSBbXVxuICB9XG5cbiAgZ2V0U29ydGVkRHJhZ2dhYmxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5pbm5lckRyYWdnYWJsZXMuc2xpY2UoKVxuICB9XG5cbiAgZ2V0IGNvbnRhaW5lcigpIHtcbiAgICByZXR1cm4gKHRoaXMuX2NvbnRhaW5lciA9IHRoaXMuX2NvbnRhaW5lciB8fCB0aGlzLm9wdGlvbnMuY29udGFpbmVyIHx8IHRoaXMub3B0aW9ucy5wYXJlbnQgfHwgdGhpcy5lbGVtZW50Lm9mZnNldFBhcmVudClcbiAgfVxufVxuXG5UYXJnZXQuZW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuVGFyZ2V0LmVtaXR0ZXIub24oJ3RhcmdldDpjcmVhdGUnLCBhZGRUb0RlZmF1bHRTY29wZSlcbiIsImltcG9ydCByZW1vdmVJdGVtIGZyb20gJy4vdXRpbHMvcmVtb3ZlLWFycmF5LWl0ZW0nXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnRFbWl0dGVyJ1xuaW1wb3J0IERyYWdnYWJsZSBmcm9tICcuL2RyYWdnYWJsZSdcbmltcG9ydCBUYXJnZXQgZnJvbSAnLi90YXJnZXQnXG5cbmNvbnN0IHNjb3BlcyA9IFtdXG5cbmNsYXNzIFNjb3BlIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoZHJhZ2dhYmxlcywgdGFyZ2V0cywgb3B0aW9ucz17fSkge1xuICAgIHN1cGVyKG9wdGlvbnMpXG4gICAgc2NvcGVzLmZvckVhY2goKHNjb3BlKSA9PiB7XG4gICAgICBpZiAoZHJhZ2dhYmxlcykge1xuICAgICAgICBkcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgICAgIHJlbW92ZUl0ZW0oc2NvcGUuZHJhZ2dhYmxlcywgZHJhZ2dhYmxlKVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICBpZiAodGFyZ2V0cykge1xuICAgICAgICB0YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4ge1xuICAgICAgICAgIHJlbW92ZUl0ZW0oc2NvcGUudGFyZ2V0cywgdGFyZ2V0KVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLmRyYWdnYWJsZXMgPSBkcmFnZ2FibGVzIHx8IFtdXG4gICAgdGhpcy50YXJnZXRzID0gdGFyZ2V0cyB8fCBbXVxuICAgIHNjb3Blcy5wdXNoKHRoaXMpXG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgdGltZUVuZDogKG9wdGlvbnMudGltZUVuZCkgfHwgNDAwXG4gICAgfVxuXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLmRyYWdFbmRBY3Rpb24gPSAoKSA9PiB0aGlzLm9uRW5kKGRyYWdnYWJsZSlcbiAgICB9KVxuICB9XG5cbiAgYWRkRHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5wdXNoKGRyYWdnYWJsZSlcbiAgICBkcmFnZ2FibGUuZHJhZ0VuZEFjdGlvbiA9ICgpID0+IHRoaXMub25FbmQoZHJhZ2dhYmxlKVxuICB9XG5cbiAgYWRkVGFyZ2V0KHRhcmdldCkge1xuICAgIHRoaXMudGFyZ2V0cy5wdXNoKHRhcmdldClcbiAgfVxuXG4gIG9uRW5kKGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IHNob3RUYXJnZXRzID0gdGhpcy50YXJnZXRzLmZpbHRlcigodGFyZ2V0KSA9PiB7XG4gICAgICByZXR1cm4gdGFyZ2V0LmRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMVxuICAgIH0pLmZpbHRlcigodGFyZ2V0KSA9PiB7XG4gICAgICByZXR1cm4gdGFyZ2V0LmNhdGNoRHJhZ2dhYmxlKGRyYWdnYWJsZSlcbiAgICB9KS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICByZXR1cm4gYS5nZXRSZWN0YW5nbGUoKS5nZXRTcXVhcmUoKSAtIGIuZ2V0UmVjdGFuZ2xlKCkuZ2V0U3F1YXJlKClcbiAgICB9KVxuXG4gICAgaWYgKHNob3RUYXJnZXRzLmxlbmd0aCkge1xuICAgICAgc2hvdFRhcmdldHNbMF0ub25FbmQoZHJhZ2dhYmxlKVxuICAgIH0gZWxzZSBpZiAoZHJhZ2dhYmxlLnRhcmdldHMubGVuZ3RoKSB7XG4gICAgICBkcmFnZ2FibGUucGluUG9zaXRpb24oZHJhZ2dhYmxlLmluaXRpYWxQb3NpdGlvbiwgdGhpcy5vcHRpb25zLnRpbWVFbmQpXG4gICAgfVxuXG4gICAgdGhpcy5lbWl0KCdzY29wZTpjaGFuZ2UnKVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy50YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4gdGFyZ2V0LnJlc2V0KCkpXG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5yZWZyZXNoKCkpXG4gICAgdGhpcy50YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4gdGFyZ2V0LnJlZnJlc2goKSlcbiAgfVxuXG4gIGdldCBwb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0cy5tYXAoKHRhcmdldCkgPT4ge1xuICAgICAgcmV0dXJuIHRhcmdldC5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHRoaXMuZHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkpXG4gICAgfSlcbiAgfVxuXG4gIHNldCBwb3NpdGlvbnMocG9zaXRpb25zKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9ICd3cm9uZyBhcnJheSBsZW5ndGgnXG4gICAgaWYgKHBvc2l0aW9ucy5sZW5ndGggPT09IHRoaXMudGFyZ2V0cy5sZW5ndGgpIHtcbiAgICAgIHRoaXMudGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHRhcmdldC5yZXNldCgpKVxuXG4gICAgICBwb3NpdGlvbnMuZm9yRWFjaCgodGFyZ2V0SW5kZXhlcywgaSkgPT4ge1xuICAgICAgICB0YXJnZXRJbmRleGVzLmZvckVhY2goKGluZGV4KSA9PiB7XG4gICAgICAgICAgdGhpcy50YXJnZXRzW2ldLmFkZCh0aGlzLmRyYWdnYWJsZXNbaW5kZXhdKVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbWVzc2FnZVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBkZWZhdWx0U2NvcGUgPSBuZXcgU2NvcGUoKVxuXG5mdW5jdGlvbiBzY29wZShmbikge1xuICBjb25zdCBjdXJyZW50U2NvcGUgPSBuZXcgU2NvcGUoKVxuXG4gIGNvbnN0IGFkZERyYWdnYWJsZVRvU2NvcGUgPSBmdW5jdGlvbihkcmFnZ2FibGUpIHtcbiAgICBjdXJyZW50U2NvcGUuYWRkRHJhZ2dhYmxlKGRyYWdnYWJsZSlcbiAgICBEcmFnZ2FibGUuZW1pdHRlci5pbnRlcnJ1cHQoKVxuICB9XG5cbiAgY29uc3QgYWRkVGFyZ2V0VG9TY29wZSA9IGZ1bmN0aW9uKHRhcmdldCkge1xuICAgIGN1cnJlbnRTY29wZS5hZGRUYXJnZXQodGFyZ2V0KVxuICAgIERyYWdnYWJsZS5lbWl0dGVyLmludGVycnVwdCgpXG4gIH1cblxuICBEcmFnZ2FibGUuZW1pdHRlci5wcmVwZW5kT24oJ2RyYWdnYWJsZTpjcmVhdGUnLCBhZGREcmFnZ2FibGVUb1Njb3BlKVxuICBUYXJnZXQuZW1pdHRlci5wcmVwZW5kT24oJ3RhcmdldDpjcmVhdGUnLCBhZGRUYXJnZXRUb1Njb3BlKVxuICBmbi5jYWxsKClcbiAgRHJhZ2dhYmxlLmVtaXR0ZXIudW5zdWJzY3JpYmUoJ2RyYWdnYWJsZTpjcmVhdGUnLCBhZGREcmFnZ2FibGVUb1Njb3BlKVxuICBUYXJnZXQuZW1pdHRlci51bnN1YnNjcmliZSgndGFyZ2V0OmNyZWF0ZScsIGFkZFRhcmdldFRvU2NvcGUpXG4gIHJldHVybiBjdXJyZW50U2NvcGVcbn1cblxuZXhwb3J0IHsgc2NvcGVzLCBkZWZhdWx0U2NvcGUsIFNjb3BlLCBzY29wZSB9XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0aHJvdHRsZShmdW5jLCB3YWl0KSB7XG4gIGxldCBsYXN0VGltZSA9IDBcblxuICByZXR1cm4gZnVuY3Rpb24gZXhlY3V0ZWRGdW5jdGlvbigpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpc1xuICAgIGNvbnN0IGFyZ3MgPSBhcmd1bWVudHNcblxuICAgIGNvbnN0IG5vdyA9IERhdGUubm93KClcbiAgICBpZiAobm93IC0gbGFzdFRpbWUgPj0gd2FpdCkge1xuICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKVxuICAgICAgbGFzdFRpbWUgPSBub3dcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudEVtaXR0ZXInXG5pbXBvcnQgUG9pbnQgZnJvbSAnLi9nZW9tZXRyeS9wb2ludCdcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSAnLi9nZW9tZXRyeS9yZWN0YW5nbGUnXG5pbXBvcnQgeyBkZWZhdWx0U2NvcGUgfSBmcm9tICcuL3Njb3BlJ1xuaW1wb3J0IHRocm90dGxlIGZyb20gJy4vdXRpbHMvdGhyb3R0bGUnXG5pbXBvcnQgZ2V0UGFyZW50c0NoYWluIGZyb20gJy4vdXRpbHMvZ2V0LXBhcmVudHMtY2hhaW4nXG5cbmNvbnN0IHRocm90dGxlZERyYWdPdmVyID0gKGNhbGxiYWNrLCBkdXJhdGlvbikgPT4ge1xuICBjb25zdCB0aHJvdHRsZWRDYWxsYmFjayA9IHRocm90dGxlKChldmVudCkgPT4gY2FsbGJhY2soZXZlbnQpLCBkdXJhdGlvbilcbiAgcmV0dXJuIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB0aHJvdHRsZWRDYWxsYmFjayhldmVudClcbiAgfVxufVxuXG5jb25zdCBwYXNzaXZlRmFsc2UgPSB7IHBhc3NpdmU6IGZhbHNlIH1cblxuY29uc3QgaXNUb3VjaCA9IG5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyA+IDBcbmNvbnN0IG1vdXNlRXZlbnRzID0ge1xuICBzdGFydDogJ21vdXNlZG93bicsXG4gIG1vdmU6ICdtb3VzZW1vdmUnLFxuICBlbmQ6ICdtb3VzZXVwJ1xufVxuY29uc3QgdG91Y2hFdmVudHMgPSB7XG4gIHN0YXJ0OiAndG91Y2hzdGFydCcsXG4gIG1vdmU6ICd0b3VjaG1vdmUnLFxuICBlbmQ6ICd0b3VjaGVuZCdcbn1cbmNvbnN0IGRyYWdnYWJsZXMgPSBbXVxuY29uc3QgdHJhbnNmb3JtUHJvcGVydHkgPSAndHJhbnNmb3JtJ1xuY29uc3QgdHJhbnNpdGlvblByb3BlcnR5ID0gJ3RyYW5zaXRpb24nXG5cbmZ1bmN0aW9uIGdldFRvdWNoQnlJRChlbGVtZW50LCB0b3VjaElkKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudC5jaGFuZ2VkVG91Y2hlcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChlbGVtZW50LmNoYW5nZWRUb3VjaGVzW2ldLmlkZW50aWZpZXIgPT09IHRvdWNoSWQpIHtcbiAgICAgIHJldHVybiBlbGVtZW50LmNoYW5nZWRUb3VjaGVzW2ldXG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZVxufVxuXG5mdW5jdGlvbiBwcmV2ZW50RG91YmxlSW5pdChkcmFnZ2FibGUpIHtcbiAgY29uc3QgbWVzc2FnZSA9IFwiZm9yIHRoaXMgZWxlbWVudCBEcmFnZWUuRHJhZ2dhYmxlIGlzIGFscmVhZHkgZXhpc3QsIGRvbid0IGNyZWF0ZSBpdCB0d2ljZSBcIlxuICBpZiAoZHJhZ2dhYmxlcy5zb21lKChleGlzdGluZykgPT4gZHJhZ2dhYmxlLmVsZW1lbnQgPT09IGV4aXN0aW5nLmVsZW1lbnQpKSB7XG4gICAgdGhyb3cgbWVzc2FnZVxuICB9XG4gIGRyYWdnYWJsZXMucHVzaChkcmFnZ2FibGUpXG59XG5cbmZ1bmN0aW9uIGFkZFRvRGVmYXVsdFNjb3BlKGRyYWdnYWJsZSkge1xuICBkZWZhdWx0U2NvcGUuYWRkRHJhZ2dhYmxlKGRyYWdnYWJsZSlcbn1cblxuZnVuY3Rpb24gY29weVN0eWxlcyhzb3VyY2UsIGRlc3RpbmF0aW9uKSB7XG4gIGNvbnN0IGNzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoc291cmNlKVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY3MubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBrZXkgPSBjc1tpXVxuICAgIGlmICgoa2V5LmluZGV4T2YoJ3RyYW5zaXRpb24nKSA8IDApICYmIChrZXkuaW5kZXhPZigndHJhbnNmb3JtJykgPCAwKSkge1xuICAgICAgZGVzdGluYXRpb24uc3R5bGVba2V5XSA9IGNzW2tleV1cbiAgICB9XG4gIH1cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNvdXJjZS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgIGNvcHlTdHlsZXMoc291cmNlLmNoaWxkcmVuW2ldLCBkZXN0aW5hdGlvbi5jaGlsZHJlbltpXSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcmFnZ2FibGUgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBvcHRpb25zPXt9KSB7XG4gICAgc3VwZXIob3B0aW9ucylcbiAgICB0aGlzLnRhcmdldHMgPSBbXVxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG4gICAgcHJldmVudERvdWJsZUluaXQodGhpcylcbiAgICBEcmFnZ2FibGUuZW1pdHRlci5lbWl0KCdkcmFnZ2FibGU6Y3JlYXRlJywgdGhpcylcbiAgICB0aGlzLl9lbmFibGUgPSB0cnVlXG4gICAgdGhpcy5zdGFydEJvdW5kaW5nKClcbiAgICB0aGlzLnN0YXJ0UG9zaXRpb25pbmcoKVxuICAgIHRoaXMuc3RhcnRMaXN0ZW5pbmcoKVxuICB9XG5cbiAgc3RhcnRCb3VuZGluZygpIHtcbiAgICB0aGlzLmJvdW5kaW5nID0gdGhpcy5vcHRpb25zLmJvdW5kaW5nIHx8IHtcbiAgICAgIGJvdW5kOiB0aGlzLm9wdGlvbnMuYm91bmQgfHwgKChwb2ludCkgPT4gcG9pbnQpXG4gICAgfVxuICB9XG5cbiAgc3RhcnRQb3NpdGlvbmluZygpIHtcbiAgICB0aGlzLl9zZXREZWZhdWx0VHJhbnNpdGlvbigpXG4gICAgdGhpcy5vZmZzZXQgPSB0aGlzLmlzQ29uc2lkZXJUcmFuc2Zvcm1PZmZzZXRcbiAgICAgID8gUG9pbnQuZWxlbWVudEJvdW5kaW5nT2Zmc2V0KHRoaXMuZWxlbWVudCwgdGhpcy5jb250YWluZXIpXG4gICAgICA6IFBvaW50LmVsZW1lbnRPZmZzZXQodGhpcy5lbGVtZW50LCB0aGlzLmNvbnRhaW5lcilcbiAgICB0aGlzLnBpbm5lZFBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICB0aGlzLmluaXRpYWxQb3NpdGlvbiA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbiB8fCB0aGlzLm9mZnNldFxuXG4gICAgdGhpcy5waW5Qb3NpdGlvbih0aGlzLmluaXRpYWxQb3NpdGlvbilcblxuICAgIGlmICh0aGlzLmJvdW5kaW5nLnJlZnJlc2gpIHtcbiAgICAgIHRoaXMuYm91bmRpbmcucmVmcmVzaCgpXG4gICAgfVxuICB9XG5cbiAgc3RhcnRMaXN0ZW5pbmcoKSB7XG4gICAgdGhpcy5fZHJhZ1N0YXJ0ID0gKGV2ZW50KSA9PiB0aGlzLmRyYWdTdGFydChldmVudClcbiAgICB0aGlzLl9kcmFnTW92ZSA9IChldmVudCkgPT4gdGhpcy5kcmFnTW92ZShldmVudClcbiAgICB0aGlzLl9kcmFnRW5kID0gKGV2ZW50KSA9PiB0aGlzLmRyYWdFbmQoZXZlbnQpXG4gICAgdGhpcy5fbmF0aXZlRHJhZ1N0YXJ0ID0gKGV2ZW50KSA9PiB0aGlzLm5hdGl2ZURyYWdTdGFydChldmVudClcbiAgICB0aGlzLl9uYXRpdmVEcmFnT3ZlciA9IHRocm90dGxlZERyYWdPdmVyKChldmVudCkgPT4gdGhpcy5uYXRpdmVEcmFnT3ZlcihldmVudCksIHRoaXMuZHJhZ092ZXJUaHJvdHRsZUR1cmF0aW9uKVxuICAgIHRoaXMuX25hdGl2ZURyYWdFbmQgPSAoZXZlbnQpID0+IHRoaXMubmF0aXZlRHJhZ0VuZChldmVudClcbiAgICB0aGlzLl9uYXRpdmVEcm9wID0gKGV2ZW50KSA9PiB0aGlzLm5hdGl2ZURyb3AoZXZlbnQpXG4gICAgdGhpcy5fc2Nyb2xsID0gKGV2ZW50KSA9PiB0aGlzLm9uU2Nyb2xsKGV2ZW50KVxuXG4gICAgdGhpcy5oYW5kbGVyLmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydCwgcGFzc2l2ZUZhbHNlKVxuICAgIHRoaXMuaGFuZGxlci5hZGRFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQsIHBhc3NpdmVGYWxzZSlcbiAgfVxuXG4gIGdldFNpemUoKSB7XG4gICAgcmV0dXJuIFBvaW50LmVsZW1lbnRTaXplKHRoaXMuZWxlbWVudClcbiAgfVxuXG4gIGdldFBvc2l0aW9uKCkge1xuICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLm9mZnNldC5hZGQodGhpcy5fdHJhbnNmb3JtUG9zaXRpb24gfHwgbmV3IFBvaW50KDAsIDApKVxuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uXG4gIH1cblxuICBnZXRDZW50ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb24uYWRkKHRoaXMuZ2V0U2l6ZSgpLm11bHQoMC41KSlcbiAgfVxuXG4gIF9zZXREZWZhdWx0VHJhbnNpdGlvbiAoKSB7XG4gICAgaWYgKCF0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNpdGlvblByb3BlcnR5XSkge1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV0gPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsZW1lbnQpW3RyYW5zaXRpb25Qcm9wZXJ0eV1cbiAgICB9XG4gIH1cblxuICBfc2V0VHJhbnNpdGlvbih0aW1lKSB7XG4gICAgbGV0IHRyYW5zaXRpb24gPSB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNpdGlvblByb3BlcnR5XVxuICAgIGNvbnN0IHRyYW5zaXRpb25Dc3MgPSBgdHJhbnNmb3JtICR7dGltZX1tc2BcblxuICAgIGlmICghL3RyYW5zZm9ybVxccz9cXGQqbT9zPy8udGVzdCh0cmFuc2l0aW9uKSkge1xuICAgICAgaWYgKHRyYW5zaXRpb24pIHtcbiAgICAgICAgdHJhbnNpdGlvbiArPSBgLCAke3RyYW5zaXRpb25Dc3N9YFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJhbnNpdGlvbiA9IHRyYW5zaXRpb25Dc3NcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdHJhbnNpdGlvbiA9IHRyYW5zaXRpb24ucmVwbGFjZSgvdHJhbnNmb3JtXFxzP1xcZCptP3M/L2csIHRyYW5zaXRpb25Dc3MpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldICE9PSB0cmFuc2l0aW9uKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNpdGlvblByb3BlcnR5XSA9IHRyYW5zaXRpb25cbiAgICB9XG4gIH1cblxuICBfc2V0VHJhbnNsYXRlKHBvaW50KSB7XG4gICAgdGhpcy5fdHJhbnNmb3JtUG9zaXRpb24gPSBwb2ludFxuICAgIGNvbnN0IHRyYW5zbGF0ZUNzcyA9IGB0cmFuc2xhdGUzZCgke3BvaW50Lnh9cHgsICR7cG9pbnQueX1weCwgMHB4KWBcblxuICAgIGxldCB0cmFuc2Zvcm0gPSB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcGVydHldXG5cbiAgICBpZiAodGhpcy5zaG91bGRSZW1vdmVaZXJvVHJhbnNsYXRlICYmIHBvaW50LnggPT09IDAgJiYgcG9pbnQueSA9PT0gMCkge1xuICAgICAgdHJhbnNmb3JtID0gdHJhbnNmb3JtLnJlcGxhY2UoL3RyYW5zbGF0ZTNkXFwoW14pXStcXCkvLCAnJylcbiAgICB9IGVsc2UgaWYgKCEvdHJhbnNsYXRlM2RcXChbXildK1xcKS8udGVzdCh0cmFuc2Zvcm0pKSB7XG4gICAgICBpZiAodHJhbnNmb3JtKSB7XG4gICAgICAgIHRyYW5zZm9ybSArPSAnICdcbiAgICAgIH1cbiAgICAgIHRyYW5zZm9ybSArPSB0cmFuc2xhdGVDc3NcbiAgICB9IGVsc2Uge1xuICAgICAgdHJhbnNmb3JtID0gdHJhbnNmb3JtLnJlcGxhY2UoL3RyYW5zbGF0ZTNkXFwoW14pXStcXCkvLCB0cmFuc2xhdGVDc3MpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wZXJ0eV0gIT09IHRyYW5zZm9ybSkge1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BlcnR5XSA9IHRyYW5zZm9ybVxuICAgIH1cbiAgfVxuXG4gIG1vdmUocG9pbnQsIHRpbWU9MCwgaXNTaWxlbnQ9ZmFsc2UpIHtcbiAgICBwb2ludCA9IHBvaW50LmNsb25lKClcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9pbnRcblxuICAgIHRoaXMuX3NldFRyYW5zaXRpb24odGltZSlcbiAgICB0aGlzLl9zZXRUcmFuc2xhdGUocG9pbnQuc3ViKHRoaXMub2Zmc2V0KSlcblxuICAgIGlmICghaXNTaWxlbnQpIHtcbiAgICAgIHRoaXMuZW1pdCgnZHJhZzptb3ZlJylcbiAgICB9XG4gIH1cblxuICBwaW5Qb3NpdGlvbihwb2ludCwgdGltZT0wLCBzaWxlbnQ9dHJ1ZSkge1xuICAgIHRoaXMucGlubmVkUG9zaXRpb24gPSBwb2ludC5jbG9uZSgpXG4gICAgdGhpcy5tb3ZlKHRoaXMucGlubmVkUG9zaXRpb24sIHRpbWUsIHNpbGVudClcbiAgfVxuXG4gIHJlc2V0UG9zaXRpb25Ub0luaXRpYWwgKCkge1xuICAgIHRoaXMucGluUG9zaXRpb24odGhpcy5pbml0aWFsUG9zaXRpb24pXG4gIH1cblxuICByZWZyZXNoUG9zaXRpb24gKCkge1xuICAgIHRoaXMuc2V0UG9zaXRpb24odGhpcy5nZXRQb3NpdGlvbigpKVxuICB9XG5cbiAgc2V0UG9zaXRpb24ocG9pbnQpIHtcbiAgICBwb2ludCA9IHBvaW50LmNsb25lKClcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9pbnRcbiAgICB0aGlzLl9zZXRUcmFuc2l0aW9uKDApXG4gICAgdGhpcy5fc2V0VHJhbnNsYXRlKHBvaW50LnN1Yih0aGlzLm9mZnNldCkpXG4gIH1cblxuICBkZXRlcm1pbmVEaXJlY3Rpb24ocG9pbnQpIHtcbiAgICB0aGlzLl9wcmV2aW91c0RpcmVjdGlvblBvc2l0aW9uIHx8PSB0aGlzLl9zdGFydFBvc2l0aW9uXG5cbiAgICB0aGlzLmxlZnREaXJlY3Rpb24gPSAodGhpcy5fcHJldmlvdXNEaXJlY3Rpb25Qb3NpdGlvbi54ID4gcG9pbnQueClcbiAgICB0aGlzLnJpZ2h0RGlyZWN0aW9uID0gKHRoaXMuX3ByZXZpb3VzRGlyZWN0aW9uUG9zaXRpb24ueCA8IHBvaW50LngpXG4gICAgdGhpcy51cERpcmVjdGlvbiA9ICh0aGlzLl9wcmV2aW91c0RpcmVjdGlvblBvc2l0aW9uLnkgPiBwb2ludC55KVxuICAgIHRoaXMuZG93bkRpcmVjdGlvbiA9ICh0aGlzLl9wcmV2aW91c0RpcmVjdGlvblBvc2l0aW9uLnkgPCBwb2ludC55KVxuXG4gICAgdGhpcy5fcHJldmlvdXNEaXJlY3Rpb25Qb3NpdGlvbiA9IHBvaW50XG4gIH1cblxuICBzZWVtc1Njcm9sbGluZygpIHtcbiAgICByZXR1cm4gKCtuZXcgRGF0ZSgpIC0gdGhpcy5fc3RhcnRUb3VjaFRpbWVzdGFtcCkgPCB0aGlzLnRvdWNoRHJhZ2dpbmdUaHJlc2hvbGRcbiAgfVxuXG4gIHNob3VsZFVzZU5hdGl2ZURyYWdBbmREcm9wKCkge1xuICAgIGlmICh0aGlzLmlzVG91Y2hFdmVudCkge1xuICAgICAgcmV0dXJuIHRoaXMubmF0aXZlRHJhZ0FuZERyb3AgJiYgdGhpcy5lbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3BPblRvdWNoXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLm5hdGl2ZURyYWdBbmREcm9wXG4gICAgfVxuICB9XG5cbiAgZHJhZ1N0YXJ0KGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLl9lbmFibGUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLnN0b3BQcm9wYWdhdGlvbk9uRHJhZ1N0YXJ0KSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIH1cblxuICAgIHRoaXMuaXNUb3VjaEV2ZW50ID0gKGlzVG91Y2ggJiYgKGV2ZW50IGluc3RhbmNlb2Ygd2luZG93LlRvdWNoRXZlbnQpKVxuXG4gICAgdGhpcy50b3VjaFBvaW50ID0gdGhpcy5fc3RhcnRUb3VjaFBvaW50ID0gbmV3IFBvaW50KFxuICAgICAgdGhpcy5pc1RvdWNoRXZlbnQgPyBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCA6IGV2ZW50LmNsaWVudFgsXG4gICAgICB0aGlzLmlzVG91Y2hFdmVudCA/IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZIDogZXZlbnQuY2xpZW50WVxuICAgIClcblxuICAgIHRoaXMuX3N0YXJ0UG9zaXRpb24gPSB0aGlzLmdldFBvc2l0aW9uKClcbiAgICBpZiAodGhpcy5pc1RvdWNoRXZlbnQpIHtcbiAgICAgIHRoaXMuX3RvdWNoSWQgPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5pZGVudGlmaWVyXG4gICAgICB0aGlzLl9zdGFydFRvdWNoVGltZXN0YW1wID0gK25ldyBEYXRlKClcbiAgICB9XG5cbiAgICB0aGlzLl9zdGFydFdpbmRvd1Njcm9sbFBvaW50ID0gdGhpcy53aW5kb3dTY3JvbGxQb2ludFxuICAgIHRoaXMuX3N0YXJ0U2Nyb2xsRWxlbWVudHNPZmZzZXQgPSB0aGlzLnNjcm9sbEVsZW1lbnRzT2Zmc2V0XG5cbiAgICBpZiAoZXZlbnQudGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJbnB1dEVsZW1lbnQgfHxcbiAgICAgICAgICBldmVudC50YXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElucHV0RWxlbWVudCkge1xuICAgICAgZXZlbnQudGFyZ2V0LmZvY3VzKClcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zaG91bGRVc2VOYXRpdmVEcmFnQW5kRHJvcCgpKSB7XG4gICAgICBpZiAodGhpcy5pc1RvdWNoRXZlbnQgJiYgdGhpcy5lbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3BPblRvdWNoKSB7XG4gICAgICAgIHRoaXMuX3N0YXJ0UGFyZW50c1Njcm9sbE9mZnNldCA9IHRoaXMucGFyZW50c1Njcm9sbE9mZnNldFxuXG4gICAgICAgIGNvbnN0IGVtdWxhdGVPbkZpcnN0TW92ZSA9IChldmVudCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLnNlZW1zU2Nyb2xsaW5nKCkpIHtcbiAgICAgICAgICAgIHRoaXMuY2FuY2VsRHJhZ2dpbmcoKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcChldmVudClcbiAgICAgICAgICB9XG4gICAgICAgICAgY2FuY2VsRW11bGF0aW9uKClcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjYW5jZWxFbXVsYXRpb24gPSAoKSA9PiB7XG4gICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCBlbXVsYXRlT25GaXJzdE1vdmUpXG4gICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIGNhbmNlbEVtdWxhdGlvbilcbiAgICAgICAgfVxuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgZW11bGF0ZU9uRmlyc3RNb3ZlLCBwYXNzaXZlRmFsc2UpXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCBjYW5jZWxFbXVsYXRpb24sIHBhc3NpdmVGYWxzZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCB0aGlzLl9uYXRpdmVEcmFnU3RhcnQpXG4gICAgICAgIHRoaXMuZWxlbWVudC5kcmFnZ2FibGUgPSB0cnVlXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9uYXRpdmVEcmFnRW5kLCBwYXNzaXZlRmFsc2UpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUsIHBhc3NpdmVGYWxzZSlcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUsIHBhc3NpdmVGYWxzZSlcblxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQsIHBhc3NpdmVGYWxzZSlcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kLCBwYXNzaXZlRmFsc2UpXG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX3Njcm9sbClcbiAgICB0aGlzLnNjcm9sbEVsZW1lbnRzLmZvckVhY2goKHApID0+IHAuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fc2Nyb2xsKSlcblxuICAgIGlmICghdGhpcy5zaG91bGRVc2VOYXRpdmVEcmFnQW5kRHJvcCgpICYmIHRoaXMuZHJhZ1N0YXJ0VGhyZXNob2xkID4gMCkge1xuICAgICAgdGhpcy5fZHJhZ1N0YXJ0UGVuZGluZyA9IHRydWVcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbWl0KCdkcmFnOnN0YXJ0JylcbiAgICB9XG4gIH1cblxuICBkcmFnTW92ZShldmVudCkge1xuICAgIGxldCB0b3VjaFxuXG4gICAgdGhpcy5pc1RvdWNoRXZlbnQgPSAoaXNUb3VjaCAmJiAoZXZlbnQgaW5zdGFuY2VvZiB3aW5kb3cuVG91Y2hFdmVudCkpXG4gICAgaWYgKHRoaXMuaXNUb3VjaEV2ZW50KSB7XG4gICAgICB0b3VjaCA9IGdldFRvdWNoQnlJRChldmVudCwgdGhpcy5fdG91Y2hJZClcblxuICAgICAgaWYgKCF0b3VjaCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuc2VlbXNTY3JvbGxpbmcoKSkge1xuICAgICAgICB0aGlzLmNhbmNlbERyYWdnaW5nKClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy50b3VjaFBvaW50ID0gbmV3IFBvaW50KFxuICAgICAgdGhpcy5pc1RvdWNoRXZlbnQgPyB0b3VjaC5wYWdlWCA6IGV2ZW50LmNsaWVudFgsXG4gICAgICB0aGlzLmlzVG91Y2hFdmVudCA/IHRvdWNoLnBhZ2VZIDogZXZlbnQuY2xpZW50WVxuICAgIClcblxuICAgIGlmICh0aGlzLl9kcmFnU3RhcnRQZW5kaW5nKSB7XG4gICAgICBjb25zdCBkeCA9IHRoaXMudG91Y2hQb2ludC54IC0gdGhpcy5fc3RhcnRUb3VjaFBvaW50LnhcbiAgICAgIGNvbnN0IGR5ID0gdGhpcy50b3VjaFBvaW50LnkgLSB0aGlzLl9zdGFydFRvdWNoUG9pbnQueVxuICAgICAgaWYgKE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSkgPCB0aGlzLmRyYWdTdGFydFRocmVzaG9sZCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHRoaXMuX2RyYWdTdGFydFBlbmRpbmcgPSBmYWxzZVxuICAgICAgdGhpcy5lbWl0KCdkcmFnOnN0YXJ0JylcbiAgICB9XG5cbiAgICB0aGlzLmlzRHJhZ2dpbmcgPSB0cnVlXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICBsZXQgcG9pbnQgPSB0aGlzLl9zdGFydFBvc2l0aW9uLmFkZCh0aGlzLnRvdWNoUG9pbnQuc3ViKHRoaXMuX3N0YXJ0VG91Y2hQb2ludCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy53aW5kb3dTY3JvbGxQb2ludC5zdWIodGhpcy5fc3RhcnRXaW5kb3dTY3JvbGxQb2ludCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy5zY3JvbGxFbGVtZW50c09mZnNldC5zdWIodGhpcy5fc3RhcnRTY3JvbGxFbGVtZW50c09mZnNldCkpXG5cbiAgICBwb2ludCA9IHRoaXMuYm91bmRpbmcuYm91bmQocG9pbnQsIHRoaXMuZ2V0U2l6ZSgpKVxuICAgIHRoaXMuZGV0ZXJtaW5lRGlyZWN0aW9uKHBvaW50KVxuICAgIHRoaXMubW92ZShwb2ludClcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZHJhZ2VlLWFjdGl2ZScpXG4gIH1cblxuICBkcmFnRW5kKGV2ZW50KSB7XG4gICAgdGhpcy5pc1RvdWNoRXZlbnQgPSAoaXNUb3VjaCAmJiAoZXZlbnQgaW5zdGFuY2VvZiB3aW5kb3cuVG91Y2hFdmVudCkpXG5cbiAgICBpZiAodGhpcy5pc1RvdWNoRXZlbnQgJiYgIWdldFRvdWNoQnlJRChldmVudCwgdGhpcy5fdG91Y2hJZCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLl9kcmFnU3RhcnRQZW5kaW5nKSB7XG4gICAgICAvLyB0aHJlc2hvbGQgbmV2ZXIgY3Jvc3NlZCDigJQgdHJlYXQgYXMgY2xpY2ssIGNsZWFuIHVwIHNpbGVudGx5XG4gICAgICB0aGlzLl9kcmFnU3RhcnRQZW5kaW5nID0gZmFsc2VcbiAgICAgIHRoaXMuY2FuY2VsRHJhZ2dpbmcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNEcmFnZ2luZykge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB9XG5cbiAgICB0aGlzLmRyYWdFbmRBY3Rpb24oKVxuICAgIHRoaXMuZW1pdCgnZHJhZzplbmQnKVxuICAgIHRoaXMuY2FuY2VsRHJhZ2dpbmcoKVxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2VlLWFjdGl2ZScpKVxuICB9XG5cbiAgb25TY3JvbGwoX2V2ZW50KSB7XG4gICAgbGV0IHBvaW50ID0gdGhpcy5fc3RhcnRQb3NpdGlvbi5hZGQodGhpcy50b3VjaFBvaW50LnN1Yih0aGlzLl9zdGFydFRvdWNoUG9pbnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMud2luZG93U2Nyb2xsUG9pbnQuc3ViKHRoaXMuX3N0YXJ0V2luZG93U2Nyb2xsUG9pbnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMuc2Nyb2xsRWxlbWVudHNPZmZzZXQuc3ViKHRoaXMuX3N0YXJ0U2Nyb2xsRWxlbWVudHNPZmZzZXQpKVxuXG4gICAgcG9pbnQgPSB0aGlzLmJvdW5kaW5nLmJvdW5kKHBvaW50LCB0aGlzLmdldFNpemUoKSlcbiAgICBpZiAoIXRoaXMubmF0aXZlRHJhZ0FuZERyb3ApIHtcbiAgICAgIHRoaXMuZGV0ZXJtaW5lRGlyZWN0aW9uKHBvaW50KVxuICAgICAgdGhpcy5tb3ZlKHBvaW50KVxuICAgIH1cbiAgfVxuXG4gIG5hdGl2ZURyYWdTdGFydChldmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQnLCAnRmlyZUZveCBmaXgnKVxuICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gJ21vdmUnXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCB0aGlzLl9uYXRpdmVEcmFnT3ZlcilcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgdGhpcy5fbmF0aXZlRHJvcClcbiAgfVxuXG4gIG5hdGl2ZURyYWdPdmVyKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gJ21vdmUnXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RyYWdlZS1wbGFjZWhvbGRlcicpXG4gICAgaWYgKGV2ZW50LmNsaWVudFggPT09IDAgJiYgZXZlbnQuY2xpZW50WSA9PT0gMCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy50b3VjaFBvaW50ID0gbmV3IFBvaW50KGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpXG4gICAgbGV0IHBvaW50ID0gdGhpcy5fc3RhcnRQb3NpdGlvbi5hZGQodGhpcy50b3VjaFBvaW50LnN1Yih0aGlzLl9zdGFydFRvdWNoUG9pbnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMud2luZG93U2Nyb2xsUG9pbnQuc3ViKHRoaXMuX3N0YXJ0V2luZG93U2Nyb2xsUG9pbnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMuc2Nyb2xsRWxlbWVudHNPZmZzZXQuc3ViKHRoaXMuX3N0YXJ0U2Nyb2xsRWxlbWVudHNPZmZzZXQpKVxuICAgIHBvaW50ID0gdGhpcy5ib3VuZGluZy5ib3VuZChwb2ludCwgdGhpcy5nZXRTaXplKCkpXG4gICAgdGhpcy5kZXRlcm1pbmVEaXJlY3Rpb24ocG9pbnQpXG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvaW50XG4gICAgdGhpcy5lbWl0KCdkcmFnOm1vdmUnKVxuICB9XG5cbiAgbmF0aXZlRHJhZ0VuZChfZXZlbnQpIHtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2VlLXBsYWNlaG9sZGVyJylcbiAgICB0aGlzLmRyYWdFbmRBY3Rpb24oKVxuICAgIHRoaXMuZW1pdCgnZHJhZzplbmQnKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgdGhpcy5fbmF0aXZlRHJhZ092ZXIpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIHRoaXMuX25hdGl2ZURyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX25hdGl2ZURyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJvcCcsIHRoaXMuX25hdGl2ZURyb3ApXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX3Njcm9sbClcbiAgICB0aGlzLnNjcm9sbEVsZW1lbnRzLmZvckVhY2goKHApID0+IHAucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fc2Nyb2xsKSlcbiAgICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZVxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2RyYWdnYWJsZScpXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIHRoaXMuX25hdGl2ZURyYWdTdGFydClcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2VlLWFjdGl2ZScpXG4gIH1cblxuICBuYXRpdmVEcm9wKGV2ZW50KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBjYW5jZWxEcmFnZ2luZyAoKSB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG5cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fbmF0aXZlRHJhZ0VuZClcblxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9zY3JvbGwpXG4gICAgdGhpcy5zY3JvbGxFbGVtZW50cy5mb3JFYWNoKChwKSA9PiBwLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX3Njcm9sbCkpXG5cbiAgICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZVxuICAgIHRoaXMuX3ByZXZpb3VzRGlyZWN0aW9uUG9zaXRpb24gPSBudWxsXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnZHJhZ2dhYmxlJylcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgdGhpcy5fbmF0aXZlRHJhZ1N0YXJ0KVxuICB9XG5cbiAgY29weVN0eWxlcyhzb3VyY2UsIGRlc3RpbmF0aW9uKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5jb3B5U3R5bGVzKSB7XG4gICAgICB0aGlzLm9wdGlvbnMuY29weVN0eWxlcyhzb3VyY2UsIGRlc3RpbmF0aW9uKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb3B5U3R5bGVzKHNvdXJjZSwgZGVzdGluYXRpb24pXG4gICAgfVxuICB9XG5cbiAgZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wKGV2ZW50KSB7XG4gICAgY29uc3QgY29udGFpbmVyUmVjdCA9IHRoaXMuY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgY29uc3QgY2xvbmVkRWxlbWVudCA9IHRoaXMuZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSlcbiAgICBjbG9uZWRFbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BlcnR5XSA9ICcnXG4gICAgdGhpcy5jb3B5U3R5bGVzKHRoaXMuZWxlbWVudCwgY2xvbmVkRWxlbWVudClcbiAgICBjbG9uZWRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RyYWdlZS1uYXRpdmUtZW11bGF0aW9uJylcbiAgICBjbG9uZWRFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJ1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2xvbmVkRWxlbWVudClcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZHJhZ2VlLXBsYWNlaG9sZGVyJylcblxuICAgIGNvbnN0IGVtdWxhdGlvbkRyYWdnYWJsZSA9IG5ldyBEcmFnZ2FibGUoY2xvbmVkRWxlbWVudCwge1xuICAgICAgY29udGFpbmVyOiBkb2N1bWVudC5ib2R5LFxuICAgICAgdG91Y2hEcmFnZ2luZ1RocmVzaG9sZDogMCxcbiAgICAgIGJvdW5kKHBvaW50KSB7XG4gICAgICAgIHJldHVybiBwb2ludFxuICAgICAgfSxcbiAgICAgIG9uOiB7XG4gICAgICAgICdkcmFnOm1vdmUnOiAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgY29udGFpbmVyUmVjdFBvaW50ID0gbmV3IFBvaW50KGNvbnRhaW5lclJlY3QubGVmdCwgY29udGFpbmVyUmVjdC50b3ApXG4gICAgICAgICAgdGhpcy5wb3NpdGlvbiA9IGVtdWxhdGlvbkRyYWdnYWJsZS5wb3NpdGlvbi5zdWIoY29udGFpbmVyUmVjdFBvaW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3ViKHRoaXMuX3N0YXJ0V2luZG93U2Nyb2xsUG9pbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy5fc3RhcnRQYXJlbnRzU2Nyb2xsT2Zmc2V0KVxuXG4gICAgICAgICAgdGhpcy5kZXRlcm1pbmVEaXJlY3Rpb24odGhpcy5wb3NpdGlvbilcbiAgICAgICAgICB0aGlzLmVtaXQoJ2RyYWc6bW92ZScpXG4gICAgICAgIH0sXG4gICAgICAgICdkcmFnOmVuZCc6ICgpID0+IHtcbiAgICAgICAgICBlbXVsYXRpb25EcmFnZ2FibGUuZGVzdHJveSgpXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChjbG9uZWRFbGVtZW50KVxuICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZWUtcGxhY2Vob2xkZXInKVxuICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZWUtYWN0aXZlJylcblxuICAgICAgICAgIHRoaXMuZW1pdCgnZHJhZzplbmQnKVxuICAgICAgICAgIHRoaXMuZHJhZ0VuZEFjdGlvbigpXG4gICAgICAgICAgdGhpcy5jYW5jZWxEcmFnZ2luZygpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgY29udGFpbmVyUmVjdFBvaW50ID0gbmV3IFBvaW50KGNvbnRhaW5lclJlY3QubGVmdCwgY29udGFpbmVyUmVjdC50b3ApXG4gICAgZW11bGF0aW9uRHJhZ2dhYmxlLl9zdGFydFdpbmRvd1Njcm9sbFBvaW50ID0gdGhpcy5fc3RhcnRXaW5kb3dTY3JvbGxQb2ludFxuXG4gICAgZW11bGF0aW9uRHJhZ2dhYmxlLm1vdmUoXG4gICAgICB0aGlzLnBpbm5lZFBvc2l0aW9uLmFkZChjb250YWluZXJSZWN0UG9pbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgLmFkZCh0aGlzLndpbmRvd1Njcm9sbFBvaW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgIC5zdWIodGhpcy5wYXJlbnRzU2Nyb2xsT2Zmc2V0KVxuICAgIClcblxuICAgIGVtdWxhdGlvbkRyYWdnYWJsZS5kcmFnU3RhcnQoZXZlbnQpXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgZHJhZ0VuZEFjdGlvbigpIHtcbiAgICB0aGlzLnBpblBvc2l0aW9uKHRoaXMucG9zaXRpb24pXG4gIH1cblxuICBnZXRSZWN0YW5nbGUoKSB7XG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUodGhpcy5wb3NpdGlvbiwgdGhpcy5nZXRTaXplKCkpXG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIGlmICh0aGlzLmJvdW5kaW5nLnJlZnJlc2gpIHtcbiAgICAgIHRoaXMuYm91bmRpbmcucmVmcmVzaCgpXG4gICAgfVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmhhbmRsZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0KVxuICAgIHRoaXMuaGFuZGxlci5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQpXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIHRoaXMuX25hdGl2ZURyYWdTdGFydClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCB0aGlzLl9uYXRpdmVEcmFnT3ZlcilcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcm9wJywgdGhpcy5fbmF0aXZlRHJvcClcbiAgICB0aGlzLnJlc2V0RW1pdHRlcigpXG5cbiAgICBjb25zdCBpbmRleCA9IGRyYWdnYWJsZXMuaW5kZXhPZih0aGlzKVxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICBkcmFnZ2FibGVzLnNwbGljZShpbmRleCwgMSlcbiAgICB9XG4gIH1cblxuICBnZXQgY29udGFpbmVyKCkge1xuICAgIHJldHVybiAodGhpcy5fY29udGFpbmVyID0gdGhpcy5fY29udGFpbmVyIHx8IHRoaXMub3B0aW9ucy5jb250YWluZXIgfHwgdGhpcy5vcHRpb25zLnBhcmVudCB8fCB0aGlzLmVsZW1lbnQub2Zmc2V0UGFyZW50KVxuICB9XG5cbiAgZ2V0IGhhbmRsZXIoKSB7XG4gICAgaWYgKCF0aGlzLl9oYW5kbGVyKSB7XG4gICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5oYW5kbGVyID09PSAnc3RyaW5nJykge1xuICAgICAgICB0aGlzLl9oYW5kbGVyID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5vcHRpb25zLmhhbmRsZXIpIHx8IHRoaXMuZWxlbWVudFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5faGFuZGxlciA9IHRoaXMub3B0aW9ucy5oYW5kbGVyIHx8IHRoaXMuZWxlbWVudFxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9oYW5kbGVyXG4gIH1cblxuICBnZXQgc3RvcFByb3BhZ2F0aW9uT25EcmFnU3RhcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5zdG9wUHJvcGFnYXRpb25PbkRyYWdTdGFydCB8fCBmYWxzZVxuICB9XG5cbiAgZ2V0IG5hdGl2ZURyYWdBbmREcm9wKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMubmF0aXZlRHJhZ0FuZERyb3AgfHwgZmFsc2VcbiAgfVxuXG4gIGdldCBlbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3BPblRvdWNoKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wT25Ub3VjaCB8fCBmYWxzZVxuICB9XG5cbiAgZ2V0IHNob3VsZFJlbW92ZVplcm9UcmFuc2xhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5zaG91bGRSZW1vdmVaZXJvVHJhbnNsYXRlIHx8IGZhbHNlXG4gIH1cblxuICBnZXQgdG91Y2hEcmFnZ2luZ1RocmVzaG9sZCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLnRvdWNoRHJhZ2dpbmdUaHJlc2hvbGQgfHwgMFxuICB9XG5cbiAgZ2V0IGRyYWdTdGFydFRocmVzaG9sZCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmRyYWdTdGFydFRocmVzaG9sZCB8fCAwXG4gIH1cblxuICBnZXQgZHJhZ092ZXJUaHJvdHRsZUR1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZHJhZ092ZXJUaHJvdHRsZUR1cmF0aW9uIHx8IDE2XG4gIH1cblxuICBnZXQgaXNDb25zaWRlclRyYW5zZm9ybU9mZnNldCAoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5jb25zaWRlclRyYW5zZm9ybU9mZnNldCB8fCBmYWxzZVxuICB9XG5cbiAgZ2V0IHdpbmRvd1Njcm9sbFBvaW50KCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQod2luZG93LnNjcm9sbFgsIHdpbmRvdy5zY3JvbGxZKVxuICB9XG5cbiAgZ2V0IHNjcm9sbFJvb3RDb250YWluZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5zY3JvbGxSb290Q29udGFpbmVyIHx8IHRoaXMuY29udGFpbmVyXG4gIH1cblxuICBnZXQgc2Nyb2xsRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhY2hlZFNjcm9sbEVsZW1lbnRzXG4gICAgICA/IHRoaXMuX2NhY2hlZFNjcm9sbEVsZW1lbnRzXG4gICAgICA6ICh0aGlzLl9jYWNoZWRTY3JvbGxFbGVtZW50cyA9IGdldFBhcmVudHNDaGFpbih0aGlzLmVsZW1lbnQsIHRoaXMuc2Nyb2xsUm9vdENvbnRhaW5lcikpXG4gIH1cblxuICBnZXQgc2Nyb2xsRWxlbWVudHNPZmZzZXQoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludChcbiAgICAgIHRoaXMuc2Nyb2xsRWxlbWVudHMucmVkdWNlKChzdW0sIHApID0+IHN1bSArIHAuc2Nyb2xsTGVmdCwgMCksXG4gICAgICB0aGlzLnNjcm9sbEVsZW1lbnRzLnJlZHVjZSgoc3VtLCBwKSA9PiBzdW0gKyBwLnNjcm9sbFRvcCwgMClcbiAgICApXG4gIH1cblxuICBnZXQgcGFyZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5fY2FjaGVkUGFyZW50c1xuICAgICAgPyB0aGlzLl9jYWNoZWRQYXJlbnRzXG4gICAgICA6ICh0aGlzLl9jYWNoZWRQYXJlbnRzID0gZ2V0UGFyZW50c0NoYWluKHRoaXMuZWxlbWVudCwgdGhpcy5jb250YWluZXIpKVxuICB9XG5cbiAgZ2V0IHBhcmVudHNTY3JvbGxPZmZzZXQoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludChcbiAgICAgIHRoaXMucGFyZW50cy5yZWR1Y2UoKHN1bSwgcCkgPT4gc3VtICsgcC5zY3JvbGxMZWZ0LCAwKSxcbiAgICAgIHRoaXMucGFyZW50cy5yZWR1Y2UoKHN1bSwgcCkgPT4gc3VtICsgcC5zY3JvbGxUb3AsIDApXG4gICAgKVxuICB9XG5cbiAgZ2V0IGVuYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlXG4gIH1cblxuICBzZXQgZW5hYmxlKGVuYWJsZSkge1xuICAgIGlmIChlbmFibGUpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZWUtZGlzYWJsZScpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkcmFnZWUtZGlzYWJsZScpXG4gICAgfVxuXG4gICAgdGhpcy5fZW5hYmxlID0gZW5hYmxlXG4gIH1cbn1cblxuRHJhZ2dhYmxlLmVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKClcbkRyYWdnYWJsZS5lbWl0dGVyLm9uKCdkcmFnZ2FibGU6Y3JlYXRlJywgYWRkVG9EZWZhdWx0U2NvcGUpXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0LCBpbW1lZGlhdGUpIHtcbiAgbGV0IHRpbWVvdXRcblxuICByZXR1cm4gZnVuY3Rpb24gZXhlY3V0ZWRGdW5jdGlvbigpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpc1xuICAgIGNvbnN0IGFyZ3MgPSBhcmd1bWVudHNcblxuICAgIGNvbnN0IGxhdGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICB0aW1lb3V0ID0gbnVsbFxuICAgICAgaWYgKCFpbW1lZGlhdGUpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncylcbiAgICB9XG5cbiAgICBjb25zdCBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0XG5cbiAgICBjbGVhclRpbWVvdXQodGltZW91dClcblxuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KVxuXG4gICAgaWYgKGNhbGxOb3cpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncylcbiAgfVxufVxuIiwiaW1wb3J0IGRlYm91bmNlIGZyb20gJy4vdXRpbHMvZGVib3VuY2UnXG5pbXBvcnQgcmVtb3ZlSXRlbSBmcm9tICcuL3V0aWxzL3JlbW92ZS1hcnJheS1pdGVtJ1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50RW1pdHRlcidcbmltcG9ydCB7XG4gIGdldERpc3RhbmNlLFxuICBpbmRleE9mTmVhcmVzdFBvaW50XG59IGZyb20gJy4vZ2VvbWV0cnkvZGlzdGFuY2VzJ1xuXG5pbXBvcnQgRHJhZ2dhYmxlIGZyb20gJy4vZHJhZ2dhYmxlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0IGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoZHJhZ2dhYmxlcywgb3B0aW9ucz17fSkge1xuICAgIHN1cGVyKG9wdGlvbnMpXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICB0aW1lRW5kOiAyMDAsXG4gICAgICB0aW1lRXhjYW5nZTogNDAwLFxuICAgICAgcmFkaXVzOiAzMFxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0aGlzLmNvbnRhaW5lciA9IG9wdGlvbnMuY29udGFpbmVyXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gZHJhZ2dhYmxlc1xuICAgIHRoaXMuY2hhbmdlZER1cmluZ0l0ZXJhdGlvbiA9IGZhbHNlXG5cbiAgICB0aGlzLnJlc2l6ZU9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKGRlYm91bmNlKHRoaXMub25SZXNpemUuYmluZCh0aGlzKSwgMTAwKSlcblxuICAgIGlmICh0aGlzLmNvbnRhaW5lcikge1xuICAgICAgdGhpcy5yZXNpemVPYnNlcnZlci5vYnNlcnZlKHRoaXMuY29udGFpbmVyKVxuICAgIH1cblxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBvblJlc2l6ZSgpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLnJlb3JkZXJPbkNoYW5nZSkgdGhpcy5yZXNldCgpXG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgaWYoIWRyYWdnYWJsZS5pc0RyYWdnaW5nKSB7XG4gICAgICAgIGRyYWdnYWJsZS5zdGFydFBvc2l0aW9uaW5nKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLl9lbmFibGUgPSB0cnVlXG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gdGhpcy5pbml0RHJhZ2dhYmxlKGRyYWdnYWJsZSkpXG4gIH1cblxuICBpbml0RHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIGRyYWdnYWJsZS5lbmFibGUgPSB0aGlzLl9lbmFibGVcbiAgICBkcmFnZ2FibGUub24oJ2RyYWc6bW92ZScsICgpID0+IHRoaXMub25Nb3ZlKGRyYWdnYWJsZSkpXG4gICAgZHJhZ2dhYmxlLmRyYWdFbmRBY3Rpb24gPSAoKSA9PiB7XG4gICAgICBkcmFnZ2FibGUucGluUG9zaXRpb24oZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uLCB0aGlzLm9wdGlvbnMudGltZUVuZClcbiAgICAgIHRoaXMub25FbmQoZHJhZ2dhYmxlKVxuICAgIH1cbiAgICB0aGlzLnJlc2l6ZU9ic2VydmVyLm9ic2VydmUoZHJhZ2dhYmxlLmVsZW1lbnQpXG4gIH1cblxuICByZWxlYXNlRHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIudW5vYnNlcnZlKGRyYWdnYWJsZS5lbGVtZW50KVxuICAgIGRyYWdnYWJsZS5yZXNldE9uKCdkcmFnOmVuZCcpXG4gICAgZHJhZ2dhYmxlLnJlc2V0T24oJ2RyYWc6bW92ZScpXG4gICAgcmVtb3ZlSXRlbSh0aGlzLmRyYWdnYWJsZXMsIGRyYWdnYWJsZSlcbiAgfVxuXG4gIG9uTW92ZShkcmFnZ2FibGUpIHtcbiAgICBpZiAodGhpcy5zd2FwcGluZ0Rpc2FibGVkKSByZXR1cm5cblxuICAgIGNvbnN0IHNvcnRlZERyYWdnYWJsZXMgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuICAgIGNvbnN0IHBpbm5lZFBvc2l0aW9ucyA9IHNvcnRlZERyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbilcblxuICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IHNvcnRlZERyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpXG4gICAgY29uc3QgdGFyZ2V0SW5kZXggPSBpbmRleE9mTmVhcmVzdFBvaW50KHBpbm5lZFBvc2l0aW9ucywgZHJhZ2dhYmxlLnBvc2l0aW9uLCB0aGlzLm9wdGlvbnMucmFkaXVzLCB0aGlzLmRpc3RhbmNlRnVuYylcblxuICAgIGlmICh0YXJnZXRJbmRleCAhPT0gLTEgJiYgY3VycmVudEluZGV4ICE9PSB0YXJnZXRJbmRleCkge1xuICAgICAgaWYgKHRhcmdldEluZGV4IDwgY3VycmVudEluZGV4KSB7XG4gICAgICAgIGZvciAobGV0IGk9dGFyZ2V0SW5kZXg7IGk8Y3VycmVudEluZGV4OyBpKyspIHtcbiAgICAgICAgICBzb3J0ZWREcmFnZ2FibGVzW2ldLnBpblBvc2l0aW9uKHBpbm5lZFBvc2l0aW9uc1tpKzFdLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAobGV0IGk9Y3VycmVudEluZGV4OyBpPHRhcmdldEluZGV4OyBpKyspIHtcbiAgICAgICAgICBzb3J0ZWREcmFnZ2FibGVzW2krMV0ucGluUG9zaXRpb24ocGlubmVkUG9zaXRpb25zW2ldLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGRyYWdnYWJsZS5uYXRpdmVEcmFnQW5kRHJvcCkge1xuICAgICAgICBkcmFnZ2FibGUucGluUG9zaXRpb24ocGlubmVkUG9zaXRpb25zW3RhcmdldEluZGV4XSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbiA9IHBpbm5lZFBvc2l0aW9uc1t0YXJnZXRJbmRleF1cbiAgICAgIH1cblxuICAgICAgdGhpcy5jaGFuZ2VkRHVyaW5nSXRlcmF0aW9uID0gdHJ1ZVxuICAgIH1cbiAgfVxuXG4gIG9uRW5kKGRyYWdnYWJsZSkge1xuICAgIGlmICh0aGlzLmNoYW5nZWREdXJpbmdJdGVyYXRpb24pIHtcbiAgICAgIHRoaXMuZW1pdCgnbGlzdDpjaGFuZ2UnKVxuICAgICAgdGhpcy5jaGFuZ2VkRHVyaW5nSXRlcmF0aW9uID0gZmFsc2VcblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZW9yZGVyT25DaGFuZ2UgJiYgdGhpcy5vcHRpb25zLmNvbnRhaW5lcikge1xuICAgICAgICB0aGlzLnJlb3JkZXJFbGVtZW50cyhkcmFnZ2FibGUpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVvcmRlckVsZW1lbnRzKG1vdmVkRHJhZ2dhYmxlKSB7XG4gICAgY29uc3Qgc29ydGVkRHJhZ2dhYmxlcyA9IHRoaXMuZ2V0U29ydGVkRHJhZ2dhYmxlcygpXG4gICAgY29uc3QgaW5kZXggPSBzb3J0ZWREcmFnZ2FibGVzLmluZGV4T2YobW92ZWREcmFnZ2FibGUpXG4gICAgY29uc3QgbmV4dCA9IHNvcnRlZERyYWdnYWJsZXNbaW5kZXggKyAxXVxuXG4gICAgdGhpcy5yZXNldCgpXG5cbiAgICBpZiAobmV4dCkge1xuICAgICAgdGhpcy5jb250YWluZXIuaW5zZXJ0QmVmb3JlKG1vdmVkRHJhZ2dhYmxlLmVsZW1lbnQsIG5leHQuZWxlbWVudClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQobW92ZWREcmFnZ2FibGUuZWxlbWVudClcbiAgICB9XG5cbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZCkgPT4gZC5zdGFydFBvc2l0aW9uaW5nKCkpXG4gICAgdGhpcy5lbWl0KCdsaXN0OnJlb3JkZXJlZCcpXG4gIH1cblxuICBnZXRDdXJyZW50UGlubmVkUG9zaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbi5jbG9uZSgpKVxuICB9XG5cbiAgZ2V0U29ydGVkRHJhZ2dhYmxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5kcmFnZ2FibGVzLnNvcnQodGhpcy5zb3J0aW5nLmJpbmQodGhpcykpXG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucmVzZXRQb3NpdGlvblRvSW5pdGlhbCgpKVxuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucmVmcmVzaCgpKVxuICB9XG5cbiAgYWRkKGRyYWdnYWJsZXMpIHtcbiAgICBpZiAoIShkcmFnZ2FibGVzIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgICBkcmFnZ2FibGVzID0gW2RyYWdnYWJsZXNdXG4gICAgfVxuICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB0aGlzLmluaXREcmFnZ2FibGUoZHJhZ2dhYmxlKSlcbiAgICB0aGlzLmRyYWdnYWJsZXMgPSB0aGlzLmRyYWdnYWJsZXMuY29uY2F0KGRyYWdnYWJsZXMpXG4gIH1cblxuICByZW1vdmUoZHJhZ2dhYmxlcykge1xuICAgIGNvbnN0IGluaXRpYWxQb3NpdGlvbnMgPSB0aGlzLmRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5pbml0aWFsUG9zaXRpb24pXG4gICAgY29uc3QgbGlzdCA9IFtdXG4gICAgY29uc3Qgc29ydGVkRHJhZ2dhYmxlcyA9IHRoaXMuZ2V0U29ydGVkRHJhZ2dhYmxlcygpXG5cbiAgICBpZiAoIShkcmFnZ2FibGVzIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgICBkcmFnZ2FibGVzID0gW2RyYWdnYWJsZXNdXG4gICAgfVxuXG4gICAgZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHRoaXMucmVsZWFzZURyYWdnYWJsZShkcmFnZ2FibGUpKVxuXG4gICAgbGV0IGogPSAwXG4gICAgc29ydGVkRHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGlmICh0aGlzLmRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMSkge1xuICAgICAgICBpZiAoZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uICE9PSBpbml0aWFsUG9zaXRpb25zW2pdKSB7XG4gICAgICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKGluaXRpYWxQb3NpdGlvbnNbal0sIHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSlcbiAgICAgICAgfVxuICAgICAgICBkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uID0gaW5pdGlhbFBvc2l0aW9uc1tqXVxuICAgICAgICBqKytcbiAgICAgICAgbGlzdC5wdXNoKGRyYWdnYWJsZSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGxpc3RcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMucmVtb3ZlKHRoaXMuZHJhZ2dhYmxlcy5zbGljZSgpKVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUuZGVzdHJveSgpKVxuICAgIGlmICh0aGlzLmNvbnRhaW5lcikge1xuICAgICAgdGhpcy5yZXNpemVPYnNlcnZlci51bm9ic2VydmUodGhpcy5jb250YWluZXIpXG4gICAgfVxuICB9XG5cbiAgc29ydGluZyhkcmFnZ2FibGVBLCBkcmFnZ2FibGVCKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5zb3J0aW5nKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLnNvcnRpbmcoZHJhZ2dhYmxlQSwgZHJhZ2dhYmxlQilcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGRyYWdnYWJsZUEucGlubmVkUG9zaXRpb24ueSA8IGRyYWdnYWJsZUIucGlubmVkUG9zaXRpb24ueSkgcmV0dXJuIC0xXG4gICAgICBpZiAoZHJhZ2dhYmxlQS5waW5uZWRQb3NpdGlvbi55ID4gZHJhZ2dhYmxlQi5waW5uZWRQb3NpdGlvbi55KSByZXR1cm4gMVxuICAgICAgaWYgKGRyYWdnYWJsZUEucGlubmVkUG9zaXRpb24ueCA8IGRyYWdnYWJsZUIucGlubmVkUG9zaXRpb24ueCkgcmV0dXJuIC0xXG4gICAgICBpZiAoZHJhZ2dhYmxlQS5waW5uZWRQb3NpdGlvbi54ID4gZHJhZ2dhYmxlQi5waW5uZWRQb3NpdGlvbi54KSByZXR1cm4gMVxuICAgICAgcmV0dXJuIDBcbiAgICB9XG4gIH1cblxuICBnZXQgZGlzdGFuY2VGdW5jKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZ2V0RGlzdGFuY2UgfHwgZ2V0RGlzdGFuY2VcbiAgfVxuXG4gIGdldCBwb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q3VycmVudFBpbm5lZFBvc2l0aW9ucygpXG4gIH1cblxuICBzZXQgcG9zaXRpb25zKHBvc2l0aW9ucykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSAnd3JvbmcgYXJyYXkgbGVuZ3RoJ1xuICAgIGlmIChwb3NpdGlvbnMubGVuZ3RoID09PSB0aGlzLmRyYWdnYWJsZXMubGVuZ3RoKSB7XG4gICAgICBwb3NpdGlvbnMuZm9yRWFjaCgocG9pbnQsIGkpID0+IHtcbiAgICAgICAgdGhpcy5kcmFnZ2FibGVzW2ldLnBpblBvc2l0aW9uKHBvaW50KVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbWVzc2FnZVxuICAgIH1cbiAgfVxuXG4gIGdldCBlbmFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZVxuICB9XG5cbiAgc2V0IGVuYWJsZShlbmFibGUpIHtcbiAgICB0aGlzLl9lbmFibGUgPSBlbmFibGVcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUuZW5hYmxlID0gZW5hYmxlXG4gICAgfSlcbiAgfVxuXG4gIGdldCBzd2FwcGluZ0Rpc2FibGVkKCkge1xuICAgIHJldHVybiB0aGlzLl9zd2FwcGluZ0Rpc2FibGVkXG4gIH1cblxuICBzZXQgc3dhcHBpbmdEaXNhYmxlZChkaXNhYmxlZCkge1xuICAgIHRoaXMuX3N3YXBwaW5nRGlzYWJsZWQgPSBkaXNhYmxlZFxuICB9XG59XG4iLCJpbXBvcnQgTGlzdCBmcm9tICcuL2xpc3QnXG5pbXBvcnQgeyBpbmRleE9mTmVhcmVzdFBvaW50LCBnZXRYRGlmZmVyZW5jZSwgZ2V0WURpZmZlcmVuY2UgfSBmcm9tICcuL2dlb21ldHJ5L2Rpc3RhbmNlcydcblxuaW1wb3J0IERyYWdnYWJsZSBmcm9tICcuL2RyYWdnYWJsZSdcblxuY29uc3QgYXJyYXlNb3ZlID0gKGFycmF5LCBmcm9tLCB0bykgPT4ge1xuICBhcnJheS5zcGxpY2UodG8gPCAwID8gYXJyYXkubGVuZ3RoICsgdG8gOiB0bywgMCwgYXJyYXkuc3BsaWNlKGZyb20sIDEpWzBdKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdWJibGluZ0xpc3QgZXh0ZW5kcyBMaXN0IHtcbiAgYXV0b0RldGVjdEdhcCgpIHtcbiAgICBpZiAodGhpcy5fZ2FwICE9PSB1bmRlZmluZWQgfHwgdGhpcy5leHBsaWNpdEdhcCAhPT0gdW5kZWZpbmVkIHx8IHRoaXMuZHJhZ2dhYmxlcy5sZW5ndGggPCAyKSByZXR1cm5cblxuICAgIGNvbnN0IGF4aXMgPSB0aGlzLmF4aXNcbiAgICBjb25zdCBzb3J0ZWQgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuICAgIC8vIFNraXAgaXRlbXMgYWxyZWFkeSBkZXRhY2hlZCBmcm9tIHRoZSBET00gKGUuZy4gcmVtb3ZlZCBiZWZvcmUgYHJlbW92ZSgpYCk6IHRoZWlyIHNpemUgaXMgMFxuICAgIGNvbnN0IGluZGV4ID0gc29ydGVkLmZpbmRJbmRleCgoZCwgaSkgPT4gaSA8IHNvcnRlZC5sZW5ndGggLSAxICYmIGQuZWxlbWVudC5pc0Nvbm5lY3RlZClcbiAgICBpZiAoaW5kZXggPT09IC0xKSByZXR1cm5cblxuICAgIGNvbnN0IFtjdXJyZW50LCBuZXh0XSA9IFtzb3J0ZWRbaW5kZXhdLCBzb3J0ZWRbaW5kZXggKyAxXV1cbiAgICB0aGlzLl9nYXAgPSBuZXh0LnBpbm5lZFBvc2l0aW9uW2F4aXNdIC0gY3VycmVudC5waW5uZWRQb3NpdGlvbltheGlzXSAtIGN1cnJlbnQuZ2V0U2l6ZSgpW2F4aXNdXG4gIH1cblxuICBhdXRvRGV0ZWN0U3RhcnRQb3NpdGlvbigpIHtcbiAgICBpZiAodGhpcy5kcmFnZ2FibGVzLmxlbmd0aCA+PSAxICYmICF0aGlzLnN0YXJ0UG9zaXRpb24pIHtcbiAgICAgIHRoaXMuc3RhcnRQb3NpdGlvbiA9IHRoaXMuZHJhZ2dhYmxlc1swXS5waW5uZWRQb3NpdGlvblxuICAgIH1cbiAgfVxuXG4gIGluaXREcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgc3VwZXIuaW5pdERyYWdnYWJsZShkcmFnZ2FibGUpXG4gICAgZHJhZ2dhYmxlLm9uKCdkcmFnOnN0YXJ0JywgKCkgPT4gdGhpcy5vbkRyYWdTdGFydChkcmFnZ2FibGUpKVxuICB9XG5cbiAgb25EcmFnU3RhcnQoZHJhZ2dhYmxlKSB7XG4gICAgdGhpcy5hdXRvRGV0ZWN0R2FwKClcbiAgICB0aGlzLmF1dG9EZXRlY3RTdGFydFBvc2l0aW9uKClcbiAgICB0aGlzLmNhY2hlZFNvcnRlZERyYWdnYWJsZXMgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuICAgIHRoaXMuaW5kZXhPZkFjdGl2ZURyYWdnYWJsZSA9IHRoaXMuY2FjaGVkU29ydGVkRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSlcbiAgfVxuXG4gIG9uTW92ZShkcmFnZ2FibGUpIHtcbiAgICBpZiAodGhpcy5zd2FwcGluZ0Rpc2FibGVkKSByZXR1cm5cblxuICAgIGNvbnN0IHByZXZEcmFnZ2FibGUgPSB0aGlzLmNhY2hlZFNvcnRlZERyYWdnYWJsZXNbdGhpcy5pbmRleE9mQWN0aXZlRHJhZ2dhYmxlIC0gMV1cbiAgICBjb25zdCBuZXh0RHJhZ2dhYmxlID0gdGhpcy5jYWNoZWRTb3J0ZWREcmFnZ2FibGVzW3RoaXMuaW5kZXhPZkFjdGl2ZURyYWdnYWJsZSArIDFdXG4gICAgY29uc3QgY3VycmVudFBvc2l0aW9uID0gZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uXG5cbiAgICBsZXQgY3VycmVudE9yZGVyXG4gICAgbGV0IHRhcmdldEluZGV4XG5cbiAgICBpZih0aGlzLmlzTW92aW5nQmFja3dhcmQoZHJhZ2dhYmxlKSAmJiBwcmV2RHJhZ2dhYmxlKSB7XG4gICAgICBjdXJyZW50T3JkZXIgPSBbcHJldkRyYWdnYWJsZSwgZHJhZ2dhYmxlXS5tYXAoKGQpID0+IGQucGlubmVkUG9zaXRpb24pXG4gICAgICB0YXJnZXRJbmRleCA9IGluZGV4T2ZOZWFyZXN0UG9pbnQoY3VycmVudE9yZGVyLCBkcmFnZ2FibGUucG9zaXRpb24sIDEwMDAwLCB0aGlzLmRpc3RhbmNlRnVuYylcblxuICAgICAgaWYgKHRhcmdldEluZGV4ID09PSAwKSB7XG4gICAgICAgIGlmKGRyYWdnYWJsZS5zaG91bGRVc2VOYXRpdmVEcmFnQW5kRHJvcCgpKSB7XG4gICAgICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKHByZXZEcmFnZ2FibGUucGlubmVkUG9zaXRpb24pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uID0gcHJldkRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbi5jbG9uZSgpXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJldk5ld1Bvc2l0aW9uID0gdGhpcy5uZXh0UG9zaXRpb24oZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uLCBkcmFnZ2FibGUpXG4gICAgICAgIHByZXZOZXdQb3NpdGlvblt0aGlzLmNyb3NzQXhpc10gPSBjdXJyZW50UG9zaXRpb25bdGhpcy5jcm9zc0F4aXNdXG4gICAgICAgIHByZXZEcmFnZ2FibGUucGluUG9zaXRpb24ocHJldk5ld1Bvc2l0aW9uLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICAgIGFycmF5TW92ZSh0aGlzLmNhY2hlZFNvcnRlZERyYWdnYWJsZXMsIHRoaXMuaW5kZXhPZkFjdGl2ZURyYWdnYWJsZS0tLCB0aGlzLmluZGV4T2ZBY3RpdmVEcmFnZ2FibGUpXG4gICAgICAgIHRoaXMub25Nb3ZlKGRyYWdnYWJsZSlcbiAgICAgICAgdGhpcy5jaGFuZ2VkRHVyaW5nSXRlcmF0aW9uID0gdHJ1ZVxuICAgICAgfVxuICAgIH0gZWxzZSBpZih0aGlzLmlzTW92aW5nRm9yd2FyZChkcmFnZ2FibGUpICYmIG5leHREcmFnZ2FibGUpIHtcbiAgICAgIGN1cnJlbnRPcmRlciA9IFtkcmFnZ2FibGUsIG5leHREcmFnZ2FibGVdLm1hcCgoZCkgPT4gZC5waW5uZWRQb3NpdGlvbilcbiAgICAgIHRhcmdldEluZGV4ID0gaW5kZXhPZk5lYXJlc3RQb2ludChjdXJyZW50T3JkZXIsIGRyYWdnYWJsZS5wb3NpdGlvbiwgMTAwMDAsIHRoaXMuZGlzdGFuY2VGdW5jKVxuXG4gICAgICBpZih0YXJnZXRJbmRleCA9PT0gMSkge1xuICAgICAgICBuZXh0RHJhZ2dhYmxlLnBpblBvc2l0aW9uKGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbiwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICBjb25zdCBkcmFnZ2FibGVOZXdQb3NpdGlvbiA9IHRoaXMubmV4dFBvc2l0aW9uKG5leHREcmFnZ2FibGUucGlubmVkUG9zaXRpb24sIG5leHREcmFnZ2FibGUpXG4gICAgICAgIGlmKGRyYWdnYWJsZS5zaG91bGRVc2VOYXRpdmVEcmFnQW5kRHJvcCgpKSB7XG4gICAgICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKGRyYWdnYWJsZU5ld1Bvc2l0aW9uKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbiA9IGRyYWdnYWJsZU5ld1Bvc2l0aW9uXG4gICAgICAgIH1cbiAgICAgICAgYXJyYXlNb3ZlKHRoaXMuY2FjaGVkU29ydGVkRHJhZ2dhYmxlcywgdGhpcy5pbmRleE9mQWN0aXZlRHJhZ2dhYmxlKyssIHRoaXMuaW5kZXhPZkFjdGl2ZURyYWdnYWJsZSlcbiAgICAgICAgdGhpcy5vbk1vdmUoZHJhZ2dhYmxlKVxuICAgICAgICB0aGlzLmNoYW5nZWREdXJpbmdJdGVyYXRpb24gPSB0cnVlXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYnViYmxpbmcoc29ydGVkRHJhZ2dhYmxlcywgY3VycmVudERyYWdnYWJsZSkge1xuICAgIGxldCBjdXJyZW50UG9zaXRpb24gPSB0aGlzLnN0YXJ0UG9zaXRpb24uY2xvbmUoKVxuICAgIHNvcnRlZERyYWdnYWJsZXMgfHw9IHRoaXMuZ2V0U29ydGVkRHJhZ2dhYmxlcygpXG5cbiAgICBzb3J0ZWREcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgaWYgKCFkcmFnZ2FibGUucGlubmVkUG9zaXRpb24uY29tcGFyZShjdXJyZW50UG9zaXRpb24pKSB7XG4gICAgICAgIGlmIChkcmFnZ2FibGUgPT09IGN1cnJlbnREcmFnZ2FibGUgJiYgIWN1cnJlbnREcmFnZ2FibGUuc2hvdWxkVXNlTmF0aXZlRHJhZ0FuZERyb3AoKSkge1xuICAgICAgICAgIGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbiA9IGN1cnJlbnRQb3NpdGlvbi5jbG9uZSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKGN1cnJlbnRQb3NpdGlvbiwgKGRyYWdnYWJsZSA9PT0gY3VycmVudERyYWdnYWJsZSkgPyAwIDogdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGN1cnJlbnRQb3NpdGlvbiA9IHRoaXMubmV4dFBvc2l0aW9uKGN1cnJlbnRQb3NpdGlvbiwgZHJhZ2dhYmxlKVxuICAgIH0pXG4gIH1cblxuICByZW1vdmUoZHJhZ2dhYmxlcykge1xuICAgIGlmICghKGRyYWdnYWJsZXMgaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICAgIGRyYWdnYWJsZXMgPSBbZHJhZ2dhYmxlc11cbiAgICB9XG5cbiAgICAvLyBEZXRlY3QgbGF5b3V0IGJlZm9yZSByZW1vdmFsLCBvdGhlcndpc2UgdGhlIGdhcCBpcyBtZWFzdXJlZCBhY3Jvc3MgdGhlIGhvbGVcbiAgICB0aGlzLmF1dG9EZXRlY3RHYXAoKVxuICAgIHRoaXMuYXV0b0RldGVjdFN0YXJ0UG9zaXRpb24oKVxuXG4gICAgZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHRoaXMucmVsZWFzZURyYWdnYWJsZShkcmFnZ2FibGUpKVxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IHRoaXMuZHJhZ2dhYmxlcy5maWx0ZXIoKGQpID0+ICFkcmFnZ2FibGVzLmluY2x1ZGVzKGQpKVxuXG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGQpID0+IGQuc3RhcnRQb3NpdGlvbmluZygpKVxuXG4gICAgaWYodGhpcy5kcmFnZ2FibGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuYnViYmxpbmcoKVxuICAgIH1cbiAgfVxuXG4gIC8vIFBvc2l0aW9uIHJpZ2h0IGFmdGVyIGBkcmFnZ2FibGVgIHBsYWNlZCBhdCBgcG9zaXRpb25gLCBhbG9uZyB0aGUgbGlzdCBheGlzXG4gIG5leHRQb3NpdGlvbihwb3NpdGlvbiwgZHJhZ2dhYmxlKSB7XG4gICAgY29uc3QgbmV4dCA9IHBvc2l0aW9uLmNsb25lKClcbiAgICBuZXh0W3RoaXMuYXhpc10gPSBwb3NpdGlvblt0aGlzLmF4aXNdICsgZHJhZ2dhYmxlLmdldFNpemUoKVt0aGlzLmF4aXNdICsgdGhpcy5nYXBcbiAgICByZXR1cm4gbmV4dFxuICB9XG5cbiAgaXNNb3ZpbmdCYWNrd2FyZChkcmFnZ2FibGUpIHtcbiAgICByZXR1cm4gdGhpcy5heGlzID09PSAneCcgPyBkcmFnZ2FibGUubGVmdERpcmVjdGlvbiA6IGRyYWdnYWJsZS51cERpcmVjdGlvblxuICB9XG5cbiAgaXNNb3ZpbmdGb3J3YXJkKGRyYWdnYWJsZSkge1xuICAgIHJldHVybiB0aGlzLmF4aXMgPT09ICd4JyA/IGRyYWdnYWJsZS5yaWdodERpcmVjdGlvbiA6IGRyYWdnYWJsZS5kb3duRGlyZWN0aW9uXG4gIH1cblxuICBnZXQgYXhpcygpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmF4aXMgPT09ICd4JyA/ICd4JyA6ICd5J1xuICB9XG5cbiAgZ2V0IGNyb3NzQXhpcygpIHtcbiAgICByZXR1cm4gdGhpcy5heGlzID09PSAneCcgPyAneScgOiAneCdcbiAgfVxuXG4gIGdldCBkaXN0YW5jZUZ1bmMoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5nZXREaXN0YW5jZSB8fCAodGhpcy5heGlzID09PSAneCcgPyBnZXRYRGlmZmVyZW5jZSA6IGdldFlEaWZmZXJlbmNlKVxuICB9XG5cbiAgZ2V0IGV4cGxpY2l0R2FwKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZ2FwID8/IHRoaXMub3B0aW9ucy52ZXJ0aWNhbEdhcFxuICB9XG5cbiAgZ2V0IGdhcCgpIHtcbiAgICBpZiAodGhpcy5leHBsaWNpdEdhcCAhPT0gdW5kZWZpbmVkKSByZXR1cm4gdGhpcy5leHBsaWNpdEdhcFxuXG4gICAgdGhpcy5hdXRvRGV0ZWN0R2FwKClcbiAgICByZXR1cm4gdGhpcy5fZ2FwIHx8IDBcbiAgfVxuXG4gIHNldCBnYXAoZ2FwVmFsdWUpIHtcbiAgICB0aGlzLm9wdGlvbnMuZ2FwID0gZ2FwVmFsdWVcbiAgfVxuXG4gIC8vIERlcHJlY2F0ZWQgYWxpYXMgZm9yIGBnYXBgXG4gIGdldCB2ZXJ0aWNhbEdhcCgpIHtcbiAgICByZXR1cm4gdGhpcy5nYXBcbiAgfVxuXG4gIHNldCB2ZXJ0aWNhbEdhcChnYXBWYWx1ZSkge1xuICAgIHRoaXMuZ2FwID0gZ2FwVmFsdWVcbiAgfVxufVxuIl0sIm5hbWVzIjpbImdldFBhcmVudHNDaGFpbiIsImNoaWxkRWxlbWVudCIsInJvb3RFbGVtZW50IiwiY2hhaW4iLCJlbGVtZW50IiwicGFyZW50Tm9kZSIsInVuc2hpZnQiLCJQb2ludCIsImNvbnN0cnVjdG9yIiwieCIsInkiLCJhZGQiLCJwIiwic3ViIiwibXVsdCIsImsiLCJuZWdhdGl2ZSIsImNvbXBhcmUiLCJjbG9uZSIsInRvU3RyaW5nIiwiZWxlbWVudE9mZnNldCIsInBhcmVudCIsIm9mZnNldFBhcmVudCIsIm9mZnNldExlZnQiLCJjbGllbnRMZWZ0Iiwib2Zmc2V0VG9wIiwiY2xpZW50VG9wIiwiY29uc2lkZXJPZmZzZXRFbGVtZW50cyIsInBvcCIsInJlZHVjZSIsInN1bSIsImVsZW1lbnRCb3VuZGluZ09mZnNldCIsImVsZW1lbnRSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicGFyZW50UmVjdCIsImxlZnQiLCJ0b3AiLCJlbGVtZW50U2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwiUmVjdGFuZ2xlIiwicG9zaXRpb24iLCJzaXplIiwiZ2V0UDEiLCJnZXRQMiIsImdldFAzIiwiZ2V0UDQiLCJnZXRDZW50ZXIiLCJvciIsInJlY3QiLCJNYXRoIiwibWluIiwibWF4IiwiYW5kIiwiaW5jbHVkZVBvaW50IiwiaW5jbHVkZVJlY3RhbmdsZSIsInJlY3RhbmdsZSIsIm1vdmVUb0JvdW5kIiwiYXhpcyIsInNlbEF4aXMiLCJjcm9zc1JlY3RhbmdsZSIsInRoaXNDZW50ZXIiLCJyZWN0Q2VudGVyIiwic2lnbiIsIm9mZnNldCIsImdldFNxdWFyZSIsInN0eWxlQXBwbHkiLCJlbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInN0eWxlIiwiZ3Jvd3RoIiwiZ2V0TWluU2lkZSIsImZyb21FbGVtZW50IiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiaXNDb25zaWRlclRyYW5zbGF0ZSIsIkV2ZW50RW1pdHRlciIsIm9wdGlvbnMiLCJldmVudHMiLCJvbiIsImV2ZW50TmFtZSIsImZuIiwiT2JqZWN0IiwiZW50cmllcyIsImVtaXQiLCJpbnRlcnJ1cHRlZCIsIl9sZW4iLCJhcmdzIiwiQXJyYXkiLCJfa2V5IiwiZnVuYyIsInNsaWNlIiwiaW50ZXJydXB0IiwibGlzdGVuZXJzIiwicHVzaCIsIm9mZiIsInByZXBlbmRPbiIsIm9uY2UiLCJfdGhpcyIsIndyYXBwZXIiLCJsaXN0ZW5lciIsImluZGV4IiwiZmluZEluZGV4Iiwic3BsaWNlIiwidW5zdWJzY3JpYmUiLCJyZXNldEVtaXR0ZXIiLCJyZXNldE9uIiwiYXJyYXkiLCJ2YWwiLCJpIiwicmFuZ2UiLCJzdGFydCIsInN0b3AiLCJzdGVwIiwicmVzdWx0IiwiZ2V0RGlzdGFuY2UiLCJwMSIsInAyIiwiZHgiLCJkeSIsInNxcnQiLCJnZXRYRGlmZmVyZW5jZSIsImFicyIsImdldFlEaWZmZXJlbmNlIiwidHJhbnNmb3JtZWRTcGFjZURpc3RhbmNlRmFjdG9yeSIsInBvdyIsImluZGV4T2ZOZWFyZXN0UG9pbnQiLCJhcnIiLCJyYWRpdXMiLCJnZXREaXN0YW5jZUZ1bmMiLCJ0ZW1wIiwiZGlyZWN0Q3Jvc3NpbmciLCJMMVAxIiwiTDFQMiIsIkwyUDEiLCJMMlAyIiwiazEiLCJrMiIsImIxIiwiYjIiLCJib3VuZFRvTGluZSIsIkEiLCJCIiwiUCIsIkFQIiwiQUIiLCJhYjIiLCJhcF9hYiIsInQiLCJnZXRQb2ludE9uTGluZUJ5TGVuZ2h0IiwiTFAxIiwiTFAyIiwibGVuZ2h0IiwicGVyY2VudCIsImFkZFBvaW50VG9Cb3VuZFBvaW50cyIsImJvdW5kcG9pbnRzIiwicG9pbnQiLCJpc1JpZ2h0IiwiZmlsdGVyIiwiYlBvaW50IiwiQmFzaWNTdHJhdGVneSIsImJvdW5kUmVjdCIsIk5vdENyb3NzaW5nU3RyYXRlZ3kiLCJwb3NpdGlvbmluZyIsInJlY3RhbmdsZUxpc3QiLCJpbmRleGVzT2ZOZXdzIiwic3RhdGljUmVjdGFuZ2xlSW5kZXhlcyIsImluZGV4ZXMiLCJfcmVjdCIsImluZGV4T2YiLCJmb3JFYWNoIiwicmVtb3ZhYmxlIiwiaW5kZXhPZlN0YXRpYyIsInN0YXRpY1JlY3QiLCJzb21lIiwic29ydGluZyIsIm9kbERyYWdnYWJsZXNMaXN0IiwibmV3RHJhZ2dhYmxlcyIsImluZGV4T2ZOZXdzIiwiZHJhZ2dhYmxlcyIsImNvbmNhdCIsImRyYWdnYWJsZSIsIkZsb2F0TGVmdFN0cmF0ZWd5IiwiYXNzaWduIiwicGFkZGluZ1RvcExlZnQiLCJwYWRkaW5nQm90dG9tUmlnaHQiLCJ5R2FwQmV0d2VlbkRyYWdnYWJsZXMiLCJnZXRQb3NpdGlvbiIsIl9pbmRleGVzT2ZOZXdzIiwicmVjdFAyIiwiYm91bmRhcnlQb2ludHMiLCJyZWN0SW5kZXgiLCJpc1ZhbGlkIiwibmV3TGlzdCIsImxpc3RPbGRQb3NpdGlvbiIsIm1hcCIsIm5ld0RyYWdnYWJsZSIsIkZsb2F0UmlnaHRTdHJhdGVneSIsInBhZGRpbmdUb3BSaWdodCIsInBhZGRpbmdCb3R0b21MZWZ0IiwicGFkZGluZ0JvdHRvbU5lZ0xlZnQiLCJnZXRBbmdsZURpZmYiLCJhbHBoYSIsImJldGEiLCJtaW5BbmdsZSIsIm1heEFuZ2xlIiwiUEkiLCJnZXRBbmdsZSIsImRpZmYiLCJub3JtYWxpemVBbmdsZSIsImF0YW4yIiwiYm91bmRBbmdsZSIsImRtaW4iLCJkbWF4IiwiZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtIiwiYW5nbGUiLCJjZW50ZXIiLCJjb3MiLCJzaW4iLCJCb3VuZCIsImJvdW5kIiwiX3NpemUiLCJyZWZyZXNoIiwiYm91bmRpbmciLCJpbnN0YW5jZSIsImJpbmQiLCJCb3VuZFRvUmVjdGFuZ2xlIiwiY2FsY1BvaW50IiwiQm91bmRUb0VsZW1lbnQiLCJjb250YWluZXIiLCJCb3VuZFRvTGluZVgiLCJzdGFydFkiLCJlbmRZIiwiQm91bmRUb0xpbmVZIiwic3RhcnRYIiwiZW5kWCIsIkJvdW5kVG9MaW5lIiwic3RhcnRQb2ludCIsImVuZFBvaW50Iiwic29tZUsiLCJjb3NCZXRhIiwic2luQmV0YSIsInBvaW50MiIsIm5ld0VuZFBvaW50IiwicG9pbnRDcm9zc2luZyIsIkJvdW5kVG9DaXJjbGUiLCJCb3VuZFRvQXJjIiwic3RhcnRBbmdsZSIsImVuZEFuZ2xlIiwiX3N0YXJ0QW5nbGUiLCJfZW5kQW5nbGUiLCJhZGRUb0RlZmF1bHRTY29wZSIsInRhcmdldCIsImRlZmF1bHRTY29wZSIsImFkZFRhcmdldCIsIlRhcmdldCIsInRpbWVFbmQiLCJ0aW1lRXhjYW5nZSIsInBvc2l0aW9uaW5nU3RyYXRlZ3kiLCJzdHJhdGVneSIsImdldFJlY3RhbmdsZSIsInRhcmdldHMiLCJlbWl0dGVyIiwic3RhcnRCb3VuZGluZyIsImluaXQiLCJpbmRleGVzT2ZOZXciLCJvbGREcmFnZ2FibGVzIiwicmVjdGFuZ2xlcyIsImlubmVyRHJhZ2dhYmxlcyIsInNldFBvc2l0aW9uIiwiY2F0Y2hEcmFnZ2FibGUiLCJ0YXJnZXRSZWN0YW5nbGUiLCJkcmFnZ2FibGVTcXVhcmUiLCJnZXRTaXplIiwiZGVzdHJveSIsInNjb3BlcyIsInNjb3BlIiwicmVtb3ZlSXRlbSIsIm9uRW5kIiwibmV3RHJhZ2dhYmxlc0luZGV4IiwiYWRkUmVtb3ZlT25Nb3ZlIiwidGltZSIsIm1vdmUiLCJpbml0aWFsUG9zaXRpb24iLCJwdXNoSW5uZXJEcmFnZ2FibGUiLCJyZW1vdmVIYW5kbGVyIiwicmVtb3ZlIiwicmVzZXQiLCJnZXRTb3J0ZWREcmFnZ2FibGVzIiwiX2NvbnRhaW5lciIsIlNjb3BlIiwiZHJhZ0VuZEFjdGlvbiIsImFkZERyYWdnYWJsZSIsInNob3RUYXJnZXRzIiwic29ydCIsImEiLCJiIiwicGluUG9zaXRpb24iLCJwb3NpdGlvbnMiLCJtZXNzYWdlIiwidGFyZ2V0SW5kZXhlcyIsImN1cnJlbnRTY29wZSIsImFkZERyYWdnYWJsZVRvU2NvcGUiLCJEcmFnZ2FibGUiLCJhZGRUYXJnZXRUb1Njb3BlIiwiY2FsbCIsInRocm90dGxlIiwid2FpdCIsImxhc3RUaW1lIiwiZXhlY3V0ZWRGdW5jdGlvbiIsImNvbnRleHQiLCJub3ciLCJEYXRlIiwiYXBwbHkiLCJ0aHJvdHRsZWREcmFnT3ZlciIsImNhbGxiYWNrIiwiZHVyYXRpb24iLCJ0aHJvdHRsZWRDYWxsYmFjayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJwYXNzaXZlRmFsc2UiLCJwYXNzaXZlIiwiaXNUb3VjaCIsIm5hdmlnYXRvciIsIm1heFRvdWNoUG9pbnRzIiwibW91c2VFdmVudHMiLCJlbmQiLCJ0b3VjaEV2ZW50cyIsInRyYW5zZm9ybVByb3BlcnR5IiwidHJhbnNpdGlvblByb3BlcnR5IiwiZ2V0VG91Y2hCeUlEIiwidG91Y2hJZCIsImNoYW5nZWRUb3VjaGVzIiwiaWRlbnRpZmllciIsInByZXZlbnREb3VibGVJbml0IiwiZXhpc3RpbmciLCJjb3B5U3R5bGVzIiwic291cmNlIiwiZGVzdGluYXRpb24iLCJjcyIsIndpbmRvdyIsImdldENvbXB1dGVkU3R5bGUiLCJrZXkiLCJjaGlsZHJlbiIsIl9lbmFibGUiLCJzdGFydFBvc2l0aW9uaW5nIiwic3RhcnRMaXN0ZW5pbmciLCJfc2V0RGVmYXVsdFRyYW5zaXRpb24iLCJpc0NvbnNpZGVyVHJhbnNmb3JtT2Zmc2V0IiwicGlubmVkUG9zaXRpb24iLCJfZHJhZ1N0YXJ0IiwiZHJhZ1N0YXJ0IiwiX2RyYWdNb3ZlIiwiZHJhZ01vdmUiLCJfZHJhZ0VuZCIsImRyYWdFbmQiLCJfbmF0aXZlRHJhZ1N0YXJ0IiwibmF0aXZlRHJhZ1N0YXJ0IiwiX25hdGl2ZURyYWdPdmVyIiwibmF0aXZlRHJhZ092ZXIiLCJkcmFnT3ZlclRocm90dGxlRHVyYXRpb24iLCJfbmF0aXZlRHJhZ0VuZCIsIm5hdGl2ZURyYWdFbmQiLCJfbmF0aXZlRHJvcCIsIm5hdGl2ZURyb3AiLCJfc2Nyb2xsIiwib25TY3JvbGwiLCJoYW5kbGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl90cmFuc2Zvcm1Qb3NpdGlvbiIsIl9zZXRUcmFuc2l0aW9uIiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25Dc3MiLCJ0ZXN0IiwicmVwbGFjZSIsIl9zZXRUcmFuc2xhdGUiLCJ0cmFuc2xhdGVDc3MiLCJ0cmFuc2Zvcm0iLCJzaG91bGRSZW1vdmVaZXJvVHJhbnNsYXRlIiwiaXNTaWxlbnQiLCJzaWxlbnQiLCJyZXNldFBvc2l0aW9uVG9Jbml0aWFsIiwicmVmcmVzaFBvc2l0aW9uIiwiZGV0ZXJtaW5lRGlyZWN0aW9uIiwiX3ByZXZpb3VzRGlyZWN0aW9uUG9zaXRpb24iLCJfc3RhcnRQb3NpdGlvbiIsImxlZnREaXJlY3Rpb24iLCJyaWdodERpcmVjdGlvbiIsInVwRGlyZWN0aW9uIiwiZG93bkRpcmVjdGlvbiIsInNlZW1zU2Nyb2xsaW5nIiwiX3N0YXJ0VG91Y2hUaW1lc3RhbXAiLCJ0b3VjaERyYWdnaW5nVGhyZXNob2xkIiwic2hvdWxkVXNlTmF0aXZlRHJhZ0FuZERyb3AiLCJpc1RvdWNoRXZlbnQiLCJuYXRpdmVEcmFnQW5kRHJvcCIsImVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcE9uVG91Y2giLCJzdG9wUHJvcGFnYXRpb25PbkRyYWdTdGFydCIsInN0b3BQcm9wYWdhdGlvbiIsIlRvdWNoRXZlbnQiLCJ0b3VjaFBvaW50IiwiX3N0YXJ0VG91Y2hQb2ludCIsInBhZ2VYIiwiY2xpZW50WCIsInBhZ2VZIiwiY2xpZW50WSIsIl90b3VjaElkIiwiX3N0YXJ0V2luZG93U2Nyb2xsUG9pbnQiLCJ3aW5kb3dTY3JvbGxQb2ludCIsIl9zdGFydFNjcm9sbEVsZW1lbnRzT2Zmc2V0Iiwic2Nyb2xsRWxlbWVudHNPZmZzZXQiLCJIVE1MSW5wdXRFbGVtZW50IiwiZm9jdXMiLCJfc3RhcnRQYXJlbnRzU2Nyb2xsT2Zmc2V0IiwicGFyZW50c1Njcm9sbE9mZnNldCIsImVtdWxhdGVPbkZpcnN0TW92ZSIsImNhbmNlbERyYWdnaW5nIiwiZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wIiwiY2FuY2VsRW11bGF0aW9uIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNjcm9sbEVsZW1lbnRzIiwiZHJhZ1N0YXJ0VGhyZXNob2xkIiwiX2RyYWdTdGFydFBlbmRpbmciLCJ0b3VjaCIsImlzRHJhZ2dpbmciLCJjbGFzc0xpc3QiLCJzZXRUaW1lb3V0IiwiX2V2ZW50IiwiZGF0YVRyYW5zZmVyIiwic2V0RGF0YSIsImVmZmVjdEFsbG93ZWQiLCJkcm9wRWZmZWN0IiwicmVtb3ZlQXR0cmlidXRlIiwiY29udGFpbmVyUmVjdCIsImNsb25lZEVsZW1lbnQiLCJjbG9uZU5vZGUiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJlbXVsYXRpb25EcmFnZ2FibGUiLCJkcmFnOm1vdmUiLCJjb250YWluZXJSZWN0UG9pbnQiLCJkcmFnOmVuZCIsInJlbW92ZUNoaWxkIiwiX2hhbmRsZXIiLCJjb25zaWRlclRyYW5zZm9ybU9mZnNldCIsInNjcm9sbFgiLCJzY3JvbGxZIiwic2Nyb2xsUm9vdENvbnRhaW5lciIsIl9jYWNoZWRTY3JvbGxFbGVtZW50cyIsInNjcm9sbExlZnQiLCJzY3JvbGxUb3AiLCJwYXJlbnRzIiwiX2NhY2hlZFBhcmVudHMiLCJlbmFibGUiLCJkZWJvdW5jZSIsImltbWVkaWF0ZSIsInRpbWVvdXQiLCJsYXRlciIsImNsZWFyVGltZW91dCIsIkxpc3QiLCJjaGFuZ2VkRHVyaW5nSXRlcmF0aW9uIiwicmVzaXplT2JzZXJ2ZXIiLCJSZXNpemVPYnNlcnZlciIsIm9uUmVzaXplIiwib2JzZXJ2ZSIsInJlb3JkZXJPbkNoYW5nZSIsImluaXREcmFnZ2FibGUiLCJvbk1vdmUiLCJyZWxlYXNlRHJhZ2dhYmxlIiwidW5vYnNlcnZlIiwic3dhcHBpbmdEaXNhYmxlZCIsInNvcnRlZERyYWdnYWJsZXMiLCJwaW5uZWRQb3NpdGlvbnMiLCJjdXJyZW50SW5kZXgiLCJ0YXJnZXRJbmRleCIsImRpc3RhbmNlRnVuYyIsInJlb3JkZXJFbGVtZW50cyIsIm1vdmVkRHJhZ2dhYmxlIiwibmV4dCIsImluc2VydEJlZm9yZSIsImQiLCJnZXRDdXJyZW50UGlubmVkUG9zaXRpb25zIiwiaW5pdGlhbFBvc2l0aW9ucyIsImxpc3QiLCJqIiwiY2xlYXIiLCJkcmFnZ2FibGVBIiwiZHJhZ2dhYmxlQiIsIl9zd2FwcGluZ0Rpc2FibGVkIiwiZGlzYWJsZWQiLCJhcnJheU1vdmUiLCJmcm9tIiwidG8iLCJCdWJibGluZ0xpc3QiLCJhdXRvRGV0ZWN0R2FwIiwiX2dhcCIsImV4cGxpY2l0R2FwIiwic29ydGVkIiwiaXNDb25uZWN0ZWQiLCJjdXJyZW50IiwiYXV0b0RldGVjdFN0YXJ0UG9zaXRpb24iLCJzdGFydFBvc2l0aW9uIiwib25EcmFnU3RhcnQiLCJjYWNoZWRTb3J0ZWREcmFnZ2FibGVzIiwiaW5kZXhPZkFjdGl2ZURyYWdnYWJsZSIsInByZXZEcmFnZ2FibGUiLCJuZXh0RHJhZ2dhYmxlIiwiY3VycmVudFBvc2l0aW9uIiwiY3VycmVudE9yZGVyIiwiaXNNb3ZpbmdCYWNrd2FyZCIsInByZXZOZXdQb3NpdGlvbiIsIm5leHRQb3NpdGlvbiIsImNyb3NzQXhpcyIsImlzTW92aW5nRm9yd2FyZCIsImRyYWdnYWJsZU5ld1Bvc2l0aW9uIiwiYnViYmxpbmciLCJjdXJyZW50RHJhZ2dhYmxlIiwiaW5jbHVkZXMiLCJnYXAiLCJ2ZXJ0aWNhbEdhcCIsImdhcFZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7RUFBZSxTQUFTQSxlQUFlQSxDQUFDQyxZQUFZLEVBQUVDLFdBQVcsRUFBRTtJQUNsRSxNQUFNQyxLQUFLLEdBQUcsRUFBRTtJQUNmLElBQUlDLE9BQU8sR0FBR0gsWUFBWTtFQUUxQixFQUFBLE9BQU1HLE9BQU8sQ0FBQ0MsVUFBVSxJQUFJRCxPQUFPLEtBQUtGLFdBQVcsRUFBRTtFQUNuREMsSUFBQUEsS0FBSyxDQUFDRyxPQUFPLENBQUNGLE9BQU8sQ0FBQ0MsVUFBVSxDQUFDO01BQ2pDRCxPQUFPLEdBQUdBLE9BQU8sQ0FBQ0MsVUFBVTtFQUM5QjtFQUVBLEVBQUEsT0FBT0YsS0FBSztFQUNkOztFQ1JBO0VBQ2UsTUFBTUksS0FBSyxDQUFDO0VBQ3pCO0VBQ0Y7RUFDQTtFQUNBO0VBQ0E7RUFDRUMsRUFBQUEsV0FBV0EsQ0FBQ0MsQ0FBQyxFQUFFQyxDQUFDLEVBQUU7TUFDaEIsSUFBSSxDQUFDRCxDQUFDLEdBQUdBLENBQUM7TUFDVixJQUFJLENBQUNDLENBQUMsR0FBR0EsQ0FBQztFQUNaO0lBRUFDLEdBQUdBLENBQUNDLENBQUMsRUFBRTtFQUNMLElBQUEsT0FBTyxJQUFJTCxL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
