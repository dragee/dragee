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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZGV2LmpzIiwic291cmNlcyI6WyIuLi9zcmMvdXRpbHMvZ2V0LXBhcmVudHMtY2hhaW4uanMiLCIuLi9zcmMvZ2VvbWV0cnkvcG9pbnQuanMiLCIuLi9zcmMvZ2VvbWV0cnkvcmVjdGFuZ2xlLmpzIiwiLi4vc3JjL2V2ZW50RW1pdHRlci5qcyIsIi4uL3NyYy91dGlscy9yZW1vdmUtYXJyYXktaXRlbS5qcyIsIi4uL3NyYy91dGlscy9yYW5nZS5qcyIsIi4uL3NyYy9nZW9tZXRyeS9kaXN0YW5jZXMuanMiLCIuLi9zcmMvZ2VvbWV0cnkvYm91bmRzLmpzIiwiLi4vc3JjL3Bvc2l0aW9uaW5nLmpzIiwiLi4vc3JjL2dlb21ldHJ5L2FuZ2xlcy5qcyIsIi4uL3NyYy9ib3VuZGluZy5qcyIsIi4uL3NyYy90YXJnZXQuanMiLCIuLi9zcmMvc2NvcGUuanMiLCIuLi9zcmMvdXRpbHMvdGhyb3R0bGUuanMiLCIuLi9zcmMvZHJhZ2dhYmxlLmpzIiwiLi4vc3JjL3V0aWxzL2RlYm91bmNlLmpzIiwiLi4vc3JjL2xpc3QuanMiLCIuLi9zcmMvYnViYmxpbmdMaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFBhcmVudHNDaGFpbihjaGlsZEVsZW1lbnQsIHJvb3RFbGVtZW50KSB7XG5cdGNvbnN0IGNoYWluID0gW11cbiAgbGV0IGVsZW1lbnQgPSBjaGlsZEVsZW1lbnRcblxuICB3aGlsZShlbGVtZW50LnBhcmVudE5vZGUgJiYgZWxlbWVudCAhPT0gcm9vdEVsZW1lbnQpIHtcbiAgICBjaGFpbi51bnNoaWZ0KGVsZW1lbnQucGFyZW50Tm9kZSlcbiAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlXG4gIH1cblxuICByZXR1cm4gY2hhaW5cbn1cbiIsImltcG9ydCBnZXRQYXJlbnRzQ2hhaW4gZnJvbSAnLi4vdXRpbHMvZ2V0LXBhcmVudHMtY2hhaW4nXG5cbi8qKiBDbGFzcyByZXByZXNlbnRpbmcgYSBwb2ludC4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvaW50IHtcbiAgLyoqXG4gICogQ3JlYXRlIGEgcG9pbnQuXG4gICogQHBhcmFtIHtudW1iZXJ9IHggLSBUaGUgeCB2YWx1ZS5cbiAgKiBAcGFyYW0ge251bWJlcn0geSAtIFRoZSB5IHZhbHVlLlxuICAqL1xuICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgdGhpcy54ID0geFxuICAgIHRoaXMueSA9IHlcbiAgfVxuXG4gIGFkZChwKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnggKyBwLngsIHRoaXMueSArIHAueSlcbiAgfVxuXG4gIHN1YihwKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnggLSBwLngsIHRoaXMueSAtIHAueSlcbiAgfVxuXG4gIG11bHQoaykge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54ICogaywgdGhpcy55ICogaylcbiAgfVxuXG4gIG5lZ2F0aXZlKCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQoLXRoaXMueCwgLXRoaXMueSlcbiAgfVxuXG4gIGNvbXBhcmUocCkge1xuICAgIHJldHVybiAodGhpcy54ID09PSBwLnggJiYgdGhpcy55ID09PSBwLnkpXG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCwgdGhpcy55KVxuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIGB7eD0ke3RoaXMueH0seT0ke3RoaXMueX19YFxuICB9XG5cbiAgc3RhdGljIGVsZW1lbnRPZmZzZXQoZWxlbWVudCwgcGFyZW50KSB7XG4gICAgcGFyZW50ID0gcGFyZW50IHx8IGVsZW1lbnQucGFyZW50Tm9kZVxuICAgIGlmIChwYXJlbnQgPT09IGVsZW1lbnQpIHtcbiAgICAgIHJldHVybiBuZXcgUG9pbnQoMCwgMCk7XG4gICAgfSBlbHNlIGlmIChwYXJlbnQgPT09IGVsZW1lbnQub2Zmc2V0UGFyZW50KSB7XG4gICAgICByZXR1cm4gbmV3IFBvaW50KFxuICAgICAgICBlbGVtZW50Lm9mZnNldExlZnQgKyBwYXJlbnQuY2xpZW50TGVmdCxcbiAgICAgICAgZWxlbWVudC5vZmZzZXRUb3AgKyBwYXJlbnQuY2xpZW50VG9wXG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGNvbnNpZGVyT2Zmc2V0RWxlbWVudHMgPSBbZWxlbWVudCwgZ2V0UGFyZW50c0NoYWluKGVsZW1lbnQsIHBhcmVudCkucG9wKCldXG4gICAgICByZXR1cm4gbmV3IFBvaW50KFxuICAgICAgICBjb25zaWRlck9mZnNldEVsZW1lbnRzLnJlZHVjZSgoc3VtLCBwKSA9PiBzdW0gKyBwLm9mZnNldExlZnQsIDApICsgcGFyZW50LmNsaWVudExlZnQsXG4gICAgICAgIGNvbnNpZGVyT2Zmc2V0RWxlbWVudHMucmVkdWNlKChzdW0sIHApID0+IHN1bSArIHAub2Zmc2V0VG9wLCAwKSArIHBhcmVudC5jbGllbnRUb3BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZWxlbWVudEJvdW5kaW5nT2Zmc2V0KGVsZW1lbnQsIHBhcmVudCkge1xuICAgIHBhcmVudCA9IHBhcmVudCB8fCBlbGVtZW50LnBhcmVudE5vZGVcbiAgICBjb25zdCBlbGVtZW50UmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICBjb25zdCBwYXJlbnRSZWN0ID0gcGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgcmV0dXJuIG5ldyBQb2ludChcbiAgICAgIGVsZW1lbnRSZWN0LmxlZnQgLSBwYXJlbnRSZWN0LmxlZnQsXG4gICAgICBlbGVtZW50UmVjdC50b3AgLSBwYXJlbnRSZWN0LnRvcFxuICAgIClcbiAgfVxuXG4gIHN0YXRpYyBlbGVtZW50U2l6ZShlbGVtZW50KSB7XG4gICAgY29uc3QgZWxlbWVudFJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgcmV0dXJuIG5ldyBQb2ludChcbiAgICAgIGVsZW1lbnRSZWN0LndpZHRoLFxuICAgICAgZWxlbWVudFJlY3QuaGVpZ2h0XG4gICAgKVxuICB9XG59XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9wb2ludCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVjdGFuZ2xlIHtcbiAgY29uc3RydWN0b3IocG9zaXRpb24sIHNpemUpIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb25cbiAgICB0aGlzLnNpemUgPSBzaXplXG4gIH1cblxuICBnZXRQMSgpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvblxuICB9XG5cbiAgZ2V0UDIoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnNpemUueCwgdGhpcy5wb3NpdGlvbi55KVxuICB9XG5cbiAgZ2V0UDMoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb24uYWRkKHRoaXMuc2l6ZSlcbiAgfVxuXG4gIGdldFA0KCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSlcbiAgfVxuXG4gIGdldENlbnRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi5hZGQodGhpcy5zaXplLm11bHQoMC41KSlcbiAgfVxuXG4gIG9yKHJlY3QpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IG5ldyBQb2ludChNYXRoLm1pbih0aGlzLnBvc2l0aW9uLngsIHJlY3QucG9zaXRpb24ueCksIE1hdGgubWluKHRoaXMucG9zaXRpb24ueSwgcmVjdC5wb3NpdGlvbi55KSlcbiAgICBjb25zdCBzaXplID0gKG5ldyBQb2ludChNYXRoLm1heCh0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnNpemUueCwgcmVjdC5wb3NpdGlvbi54ICsgcmVjdC5zaXplLngpLCBNYXRoLm1heCh0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSwgcmVjdC5wb3NpdGlvbi55ICsgcmVjdC5zaXplLnkpKSkuc3ViKHBvc2l0aW9uKVxuICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHBvc2l0aW9uLCBzaXplKVxuICB9XG5cbiAgYW5kKHJlY3QpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IG5ldyBQb2ludChNYXRoLm1heCh0aGlzLnBvc2l0aW9uLngsIHJlY3QucG9zaXRpb24ueCksIE1hdGgubWF4KHRoaXMucG9zaXRpb24ueSwgcmVjdC5wb3NpdGlvbi55KSlcbiAgICBjb25zdCBzaXplID0gKG5ldyBQb2ludChNYXRoLm1pbih0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnNpemUueCwgcmVjdC5wb3NpdGlvbi54ICsgcmVjdC5zaXplLngpLCBNYXRoLm1pbih0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSwgcmVjdC5wb3NpdGlvbi55ICsgcmVjdC5zaXplLnkpKSkuc3ViKHBvc2l0aW9uKVxuICAgIGlmIChzaXplLnggPD0gMCB8fCBzaXplLnkgPD0gMCkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUocG9zaXRpb24sIHNpemUpXG4gIH1cblxuICBpbmNsdWRlUG9pbnQocCkge1xuICAgIHJldHVybiAhKHRoaXMucG9zaXRpb24ueCA+IHAueCB8fCB0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnNpemUueCA8IHAueCB8fCB0aGlzLnBvc2l0aW9uLnkgPiBwLnkgfHwgdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnkgPCBwLnkpXG4gIH1cblxuICBpbmNsdWRlUmVjdGFuZ2xlKHJlY3RhbmdsZSkge1xuICAgIHJldHVybiB0aGlzLmluY2x1ZGVQb2ludChyZWN0YW5nbGUucG9zaXRpb24pICYmIHRoaXMuaW5jbHVkZVBvaW50KHJlY3RhbmdsZS5nZXRQMygpKVxuICB9XG5cbiAgbW92ZVRvQm91bmQocmVjdCwgYXhpcykge1xuICAgIGxldCBzZWxBeGlzLCBjcm9zc1JlY3RhbmdsZVxuICAgIGlmIChheGlzKSB7XG4gICAgICBzZWxBeGlzID0gYXhpc1xuICAgIH0gZWxzZSB7XG4gICAgICBjcm9zc1JlY3RhbmdsZSA9IHRoaXMuYW5kKHJlY3QpXG4gICAgICBpZiAoIWNyb3NzUmVjdGFuZ2xlKSB7XG4gICAgICAgIHJldHVybiByZWN0XG4gICAgICB9XG4gICAgICBzZWxBeGlzID0gY3Jvc3NSZWN0YW5nbGUuc2l6ZS54ID4gY3Jvc3NSZWN0YW5nbGUuc2l6ZS55ID8gJ3knIDogJ3gnXG4gICAgfVxuICAgIGNvbnN0IHRoaXNDZW50ZXIgPSB0aGlzLmdldENlbnRlcigpXG4gICAgY29uc3QgcmVjdENlbnRlciA9IHJlY3QuZ2V0Q2VudGVyKClcbiAgICBjb25zdCBzaWduID0gdGhpc0NlbnRlcltzZWxBeGlzXSA+IHJlY3RDZW50ZXJbc2VsQXhpc10gPyAtMSA6IDFcbiAgICBjb25zdCBvZmZzZXQgPSBzaWduID4gMCA/IHRoaXMucG9zaXRpb25bc2VsQXhpc10gKyB0aGlzLnNpemVbc2VsQXhpc10gLSByZWN0LnBvc2l0aW9uW3NlbEF4aXNdIDogdGhpcy5wb3NpdGlvbltzZWxBeGlzXSAtIChyZWN0LnBvc2l0aW9uW3NlbEF4aXNdICsgcmVjdC5zaXplW3NlbEF4aXNdKVxuICAgIHJlY3QucG9zaXRpb25bc2VsQXhpc10gPSByZWN0LnBvc2l0aW9uW3NlbEF4aXNdICsgb2Zmc2V0XG4gICAgcmV0dXJuIHJlY3RcbiAgfVxuXG4gIGdldFNxdWFyZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zaXplLnggKiB0aGlzLnNpemUueVxuICB9XG5cbiAgc3R5bGVBcHBseShlbCkge1xuICAgIGVsID0gZWwgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5kJylcbiAgICBlbC5zdHlsZS5sZWZ0ID0gdGhpcy5wb3NpdGlvbi54ICsgJ3B4J1xuICAgIGVsLnN0eWxlLnRvcCA9IHRoaXMucG9zaXRpb24ueSArICdweCdcbiAgICBlbC5zdHlsZS53aWR0aCA9IHRoaXMuc2l6ZS54ICsgJ3B4J1xuICAgIGVsLnN0eWxlLmhlaWdodCA9IHRoaXMuc2l6ZS55ICsgJ3B4J1xuICB9XG5cbiAgZ3Jvd3RoKHNpemUpIHtcbiAgICB0aGlzLnNpemUgPSB0aGlzLnNpemUuYWRkKHNpemUpXG4gICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMucG9zaXRpb24uYWRkKHNpemUubXVsdCgtMC41KSlcbiAgfVxuXG4gIGdldE1pblNpZGUoKSB7XG4gICAgcmV0dXJuIE1hdGgubWluKHRoaXMuc2l6ZS54LCB0aGlzLnNpemUueSlcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRWxlbWVudChlbGVtZW50LCBwYXJlbnQ9ZWxlbWVudC5wYXJlbnROb2RlLCBpc0NvbnNpZGVyVHJhbnNsYXRlPWZhbHNlKSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBpc0NvbnNpZGVyVHJhbnNsYXRlXG4gICAgICA/IFBvaW50LmVsZW1lbnRCb3VuZGluZ09mZnNldChlbGVtZW50LCBwYXJlbnQpXG4gICAgICA6IFBvaW50LmVsZW1lbnRPZmZzZXQoZWxlbWVudCwgcGFyZW50KVxuICAgIGNvbnN0IHNpemUgPSBQb2ludC5lbGVtZW50U2l6ZShlbGVtZW50KVxuICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHBvc2l0aW9uLCBzaXplKVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAob3B0aW9ucyA9IHt9KSB7XG4gICAgdGhpcy5ldmVudHMgPSB7fVxuXG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5vbikge1xuICAgICAgZm9yIChjb25zdCBbZXZlbnROYW1lLCBmbl0gb2YgT2JqZWN0LmVudHJpZXMob3B0aW9ucy5vbikpIHtcbiAgICAgICAgdGhpcy5vbihldmVudE5hbWUsIGZuKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGVtaXQoZXZlbnROYW1lLCAuLi5hcmdzKSB7XG4gICAgdGhpcy5pbnRlcnJ1cHRlZCA9IGZhbHNlXG5cbiAgICBpZiAoIXRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHJldHVyblxuXG4gICAgLy8gSXRlcmF0ZSBvdmVyIGEgY29weSBzbyBsaXN0ZW5lcnMgY2FuIHVuc3Vic2NyaWJlIHdoaWxlIHRoZSBldmVudCBpcyBiZWluZyBlbWl0dGVkXG4gICAgZm9yIChjb25zdCBmdW5jIG9mIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0uc2xpY2UoKSkge1xuICAgICAgZnVuYyguLi5hcmdzKVxuICAgICAgaWYgKHRoaXMuaW50ZXJydXB0ZWQpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaW50ZXJydXB0KCkge1xuICAgIHRoaXMuaW50ZXJydXB0ZWQgPSB0cnVlXG4gIH1cblxuICBvbihldmVudE5hbWUsIGZuKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMoZXZlbnROYW1lKS5wdXNoKGZuKVxuICAgIHJldHVybiAoKSA9PiB0aGlzLm9mZihldmVudE5hbWUsIGZuKVxuICB9XG5cbiAgcHJlcGVuZE9uKGV2ZW50TmFtZSwgZm4pIHtcbiAgICB0aGlzLmxpc3RlbmVycyhldmVudE5hbWUpLnVuc2hpZnQoZm4pXG4gICAgcmV0dXJuICgpID0+IHRoaXMub2ZmKGV2ZW50TmFtZSwgZm4pXG4gIH1cblxuICBvbmNlKGV2ZW50TmFtZSwgZm4pIHtcbiAgICBjb25zdCB3cmFwcGVyID0gKC4uLmFyZ3MpID0+IHtcbiAgICAgIHRoaXMub2ZmKGV2ZW50TmFtZSwgd3JhcHBlcilcbiAgICAgIGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHdyYXBwZXIubGlzdGVuZXIgPSBmblxuICAgIHJldHVybiB0aGlzLm9uKGV2ZW50TmFtZSwgd3JhcHBlcilcbiAgfVxuXG4gIG9mZihldmVudE5hbWUsIGZuKSB7XG4gICAgaWYgKCF0aGlzLmV2ZW50c1tldmVudE5hbWVdKSByZXR1cm5cblxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5ldmVudHNbZXZlbnROYW1lXS5maW5kSW5kZXgoKGxpc3RlbmVyKSA9PiBsaXN0ZW5lciA9PT0gZm4gfHwgbGlzdGVuZXIubGlzdGVuZXIgPT09IGZuKVxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0uc3BsaWNlKGluZGV4LCAxKVxuICAgIH1cbiAgfVxuXG4gIHVuc3Vic2NyaWJlKGV2ZW50TmFtZSwgZm4pIHtcbiAgICB0aGlzLm9mZihldmVudE5hbWUsIGZuKVxuICB9XG5cbiAgbGlzdGVuZXJzKGV2ZW50TmFtZSkge1xuICAgIHJldHVybiAodGhpcy5ldmVudHNbZXZlbnROYW1lXSB8fD0gW10pXG4gIH1cblxuICByZXNldEVtaXR0ZXIgKCkge1xuICAgIHRoaXMuZXZlbnRzID0ge31cbiAgfVxuXG4gIHJlc2V0T24oZXZlbnROYW1lKSB7XG4gICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IFtdXG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGFycmF5LCB2YWwpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChhcnJheVtpXSA9PT0gdmFsKSB7XG4gICAgICBhcnJheS5zcGxpY2UoaSwgMSlcbiAgICAgIGktLVxuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyYXlcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJhbmdlKHN0YXJ0LCBzdG9wLCBzdGVwKSB7XG4gIGNvbnN0IHJlc3VsdCA9IFtdXG4gIGlmICh0eXBlb2Ygc3RvcCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBzdG9wID0gc3RhcnRcbiAgICBzdGFydCA9IDBcbiAgfVxuICBpZiAodHlwZW9mIHN0ZXAgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgc3RlcCA9IDFcbiAgfVxuICBpZiAoKHN0ZXAgPiAwICYmIHN0YXJ0ID49IHN0b3ApIHx8IChzdGVwIDwgMCAmJiBzdGFydCA8PSBzdG9wKSkge1xuICAgIHJldHVybiBbXVxuICB9XG4gIGZvciAobGV0IGkgPSBzdGFydDsgc3RlcCA+IDAgPyBpIDwgc3RvcCA6IGkgPiBzdG9wOyBpICs9IHN0ZXApIHtcbiAgICByZXN1bHQucHVzaChpKVxuICB9XG4gIHJldHVybiByZXN1bHRcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBnZXREaXN0YW5jZShwMSwgcDIpIHtcbiAgY29uc3QgZHggPSBwMS54IC0gcDIueCwgZHkgPSBwMS55IC0gcDIueVxuICByZXR1cm4gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0WERpZmZlcmVuY2UocDEsIHAyKSB7XG4gIHJldHVybiBNYXRoLmFicyhwMS54IC0gcDIueClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFlEaWZmZXJlbmNlKHAxLCBwMikge1xuICByZXR1cm4gTWF0aC5hYnMocDEueSAtIHAyLnkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5KG9wdGlvbnMpIHtcbiAgcmV0dXJuIChwMSwgcDIpID0+IHtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KFxuICAgICAgTWF0aC5wb3cob3B0aW9ucy54ICogTWF0aC5hYnMocDEueCAtIHAyLngpLCAyKSArXG4gICAgICBNYXRoLnBvdyhvcHRpb25zLnkgKiBNYXRoLmFicyhwMS55IC0gcDIueSksIDIpXG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmRleE9mTmVhcmVzdFBvaW50KGFyciwgdmFsLCByYWRpdXMsIGdldERpc3RhbmNlRnVuYz1nZXREaXN0YW5jZSkge1xuICBsZXQgc2l6ZSwgaW5kZXggPSAwLCBpLCB0ZW1wXG4gIGlmIChhcnIubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIC0xXG4gIH1cbiAgc2l6ZSA9IGdldERpc3RhbmNlRnVuYyhhcnJbMF0sIHZhbClcbiAgZm9yIChpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgIHRlbXAgPSBnZXREaXN0YW5jZUZ1bmMoYXJyW2ldLCB2YWwpXG4gICAgaWYgKHRlbXAgPCBzaXplKSB7XG4gICAgICBzaXplID0gdGVtcFxuICAgICAgaW5kZXggPSBpXG4gICAgfVxuICB9XG4gIGlmIChyYWRpdXMgPj0gMCAmJiBzaXplID4gcmFkaXVzKSB7XG4gICAgcmV0dXJuIC0xXG4gIH1cbiAgcmV0dXJuIGluZGV4XG59XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9wb2ludCdcbmltcG9ydCB7IGdldERpc3RhbmNlIH0gZnJvbSAnLi9kaXN0YW5jZXMnXG5cbmV4cG9ydCBmdW5jdGlvbiBjbGFtcChtaW4sIG1heCwgdmFsKSB7XG4gIHJldHVybiBNYXRoLm1heChtaW4sIE1hdGgubWluKG1heCwgdmFsKSlcbn1cblxuLy9SZXR1cm4gY3Jvc3NpbmcgcG9pbnQgb2YgdHdvIGxpbmVzXG5leHBvcnQgZnVuY3Rpb24gZGlyZWN0Q3Jvc3NpbmcoTDFQMSwgTDFQMiwgTDJQMSwgTDJQMikge1xuICBsZXQgdGVtcCwgazEsIGsyLCBiMSwgYjIsIHgsIHlcbiAgaWYgKEwyUDEueCA9PT0gTDJQMi54KSB7XG4gICAgdGVtcCA9IEwyUDFcbiAgICBMMlAxID0gTDFQMVxuICAgIEwxUDEgPSB0ZW1wXG4gICAgdGVtcCA9IEwyUDJcbiAgICBMMlAyID0gTDFQMlxuICAgIEwxUDIgPSB0ZW1wXG4gIH1cbiAgaWYgKEwxUDEueCA9PT0gTDFQMi54KSB7XG4gICAgazIgPSAoTDJQMi55IC0gTDJQMS55KSAvIChMMlAyLnggLSBMMlAxLngpXG4gICAgYjIgPSAoTDJQMi54ICogTDJQMS55IC0gTDJQMS54ICogTDJQMi55KSAvIChMMlAyLnggLSBMMlAxLngpXG4gICAgeCA9IEwxUDEueFxuICAgIHkgPSB4ICogazIgKyBiMlxuICAgIHJldHVybiBuZXcgUG9pbnQoeCwgeSlcbiAgfSBlbHNlIHtcbiAgICBrMSA9IChMMVAyLnkgLSBMMVAxLnkpIC8gKEwxUDIueCAtIEwxUDEueClcbiAgICBiMSA9IChMMVAyLnggKiBMMVAxLnkgLSBMMVAxLnggKiBMMVAyLnkpIC8gKEwxUDIueCAtIEwxUDEueClcbiAgICBrMiA9IChMMlAyLnkgLSBMMlAxLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICBiMiA9IChMMlAyLnggKiBMMlAxLnkgLSBMMlAxLnggKiBMMlAyLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICB4ID0gKGIxIC0gYjIpIC8gKGsyIC0gazEpXG4gICAgeSA9IHggKiBrMSArIGIxXG4gICAgcmV0dXJuIG5ldyBQb2ludCh4LCB5KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZFRvU2VnbWVudChMUDEsIExQMiwgUCkge1xuICBsZXQgeCwgeVxuICB4ID0gY2xhbXAoTWF0aC5taW4oTFAxLngsIExQMi54KSwgTWF0aC5tYXgoTFAxLngsIExQMi54KSwgUC54KVxuICBpZiAoeCAhPT0gUC54KSB7XG4gICAgeSA9ICh4ID09PSBMUDEueCkgPyBMUDEueSA6IExQMi55XG4gICAgUCA9IG5ldyBQb2ludCh4LCB5KVxuICB9XG5cbiAgeSA9IGNsYW1wKE1hdGgubWluKExQMS55LCBMUDIueSksIE1hdGgubWF4KExQMS55LCBMUDIueSksIFAueSlcbiAgaWYgKHkgIT09IFAueSkge1xuICAgIHggPSAoeSA9PT0gTFAxLnkpID8gTFAxLnggOiBMUDIueFxuICAgIFAgPSBuZXcgUG9pbnQoeCwgeSlcbiAgfVxuXG4gIHJldHVybiBQXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZFRvTGluZShBLCBCLCBQKSB7XG4gIGNvbnN0IEFQID0gbmV3IFBvaW50KFAueCAtIEEueCwgUC55IC0gQS55KSxcbiAgICBBQiA9IG5ldyBQb2ludChCLnggLSBBLngsIEIueSAtIEEueSksXG4gICAgYWIyID0gQUIueCAqIEFCLnggKyBBQi55ICogQUIueSxcbiAgICBhcF9hYiA9IEFQLnggKiBBQi54ICsgQVAueSAqIEFCLnksXG4gICAgdCA9IGFwX2FiIC8gYWIyXG4gIHJldHVybiBuZXcgUG9pbnQoQS54ICsgQUIueCAqIHQsIEEueSArIEFCLnkgKiB0KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9pbnRPbkxpbmUoTFAxLCBMUDIsIHBlcmNlbnQpIHtcbiAgY29uc3QgZHggPSBMUDIueCAtIExQMS54LCBkeSA9IExQMi55IC0gTFAxLnlcbiAgcmV0dXJuIG5ldyBQb2ludChMUDEueCArIHBlcmNlbnQgKiBkeCwgTFAxLnkgKyBwZXJjZW50ICogZHkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb2ludE9uTGluZUJ5TGVuZ2h0KExQMSwgTFAyLCBsZW5naHQpIHtcbiAgY29uc3QgZHggPSBMUDIueCAtIExQMS54XG4gIGNvbnN0IGR5ID0gTFAyLnkgLSBMUDEueVxuICBjb25zdCBwZXJjZW50ID0gbGVuZ2h0IC8gZ2V0RGlzdGFuY2UoTFAxLCBMUDIpXG4gIHJldHVybiBuZXcgUG9pbnQoTFAxLnggKyBwZXJjZW50ICogZHgsIExQMS55ICsgcGVyY2VudCAqIGR5KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkUG9pbnRUb0JvdW5kUG9pbnRzKGJvdW5kcG9pbnRzLCBwb2ludCwgaXNSaWdodCkge1xuICBjb25zdCByZXN1bHQgPSBib3VuZHBvaW50cy5maWx0ZXIoKGJQb2ludCkgPT4ge1xuICAgIHJldHVybiBiUG9pbnQueSA+IHBvaW50LnkgfHwgKGlzUmlnaHQgPyBiUG9pbnQueCA8IHBvaW50LnggOiBiUG9pbnQueCA+IHBvaW50LngpXG4gIH0pXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHQubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAocG9pbnQueSA8IHJlc3VsdFtpXS55KSB7XG4gICAgICByZXN1bHQuc3BsaWNlKGksIDAsIHBvaW50KVxuICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbiAgfVxuICByZXN1bHQucHVzaChwb2ludClcbiAgcmV0dXJuIHJlc3VsdFxufVxuIiwiaW1wb3J0IFBvaW50IGZyb20gJy4vZ2VvbWV0cnkvcG9pbnQnXG5pbXBvcnQgeyBhZGRQb2ludFRvQm91bmRQb2ludHMgfSBmcm9tICcuL2dlb21ldHJ5L2JvdW5kcydcblxuaW1wb3J0IHtcbiAgaW5kZXhPZk5lYXJlc3RQb2ludCxcbiAgZ2V0RGlzdGFuY2Vcbn0gZnJvbSAnLi9nZW9tZXRyeS9kaXN0YW5jZXMnXG5cbmNsYXNzIEJhc2ljU3RyYXRlZ3kge1xuICBjb25zdHJ1Y3RvcihyZWN0YW5nbGUsIG9wdGlvbnM9e30pIHtcbiAgICB0aGlzLnJlY3RhbmdsZSA9IHJlY3RhbmdsZVxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNcbiAgfVxuXG4gIGdldCBib3VuZFJlY3QgKCkge1xuICAgIHJldHVybiB0eXBlb2YgdGhpcy5yZWN0YW5nbGUgPT09ICdmdW5jdGlvbicgPyB0aGlzLnJlY3RhbmdsZSgpIDogdGhpcy5yZWN0YW5nbGVcbiAgfVxufVxuXG5jbGFzcyBOb3RDcm9zc2luZ1N0cmF0ZWd5IGV4dGVuZHMgQmFzaWNTdHJhdGVneSB7XG4gIHBvc2l0aW9uaW5nIChyZWN0YW5nbGVMaXN0LCBpbmRleGVzT2ZOZXdzKSB7XG4gICAgY29uc3Qgc3RhdGljUmVjdGFuZ2xlSW5kZXhlcyA9IHJlY3RhbmdsZUxpc3QucmVkdWNlKChpbmRleGVzLCBfcmVjdCwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChpbmRleGVzT2ZOZXdzLmluZGV4T2YoaW5kZXgpID09PSAtMSkge1xuICAgICAgICBpbmRleGVzLnB1c2goaW5kZXgpXG4gICAgICB9XG4gICAgICByZXR1cm4gaW5kZXhlc1xuICAgIH0sIFtdKVxuXG4gICAgaW5kZXhlc09mTmV3cy5mb3JFYWNoKChpbmRleCkgPT4ge1xuICAgICAgbGV0IHJlY3QgPSByZWN0YW5nbGVMaXN0W2luZGV4XVxuICAgICAgbGV0IHJlbW92YWJsZSA9IGZhbHNlXG5cbiAgICAgIHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMuZm9yRWFjaCgoaW5kZXhPZlN0YXRpYykgPT4ge1xuICAgICAgICBjb25zdCBzdGF0aWNSZWN0ID0gcmVjdGFuZ2xlTGlzdFtpbmRleE9mU3RhdGljXVxuICAgICAgICByZWN0ID0gc3RhdGljUmVjdC5tb3ZlVG9Cb3VuZChyZWN0KVxuICAgICAgfSlcblxuICAgICAgcmVtb3ZhYmxlID0gc3RhdGljUmVjdGFuZ2xlSW5kZXhlcy5zb21lKChpbmRleE9mU3RhdGljKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YXRpY1JlY3QgPSByZWN0YW5nbGVMaXN0W2luZGV4T2ZTdGF0aWNdXG4gICAgICAgIHJldHVybiAgISFzdGF0aWNSZWN0LmFuZChyZWN0KVxuICAgICAgfSkgfHwgcmVjdC5hbmQodGhpcy5ib3VuZFJlY3QpLmdldFNxdWFyZSgpICE9PSByZWN0LmdldFNxdWFyZSgpXG5cbiAgICAgIGlmIChyZW1vdmFibGUpIHtcbiAgICAgICAgcmVjdC5yZW1vdmFibGUgPSB0cnVlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0aWNSZWN0YW5nbGVJbmRleGVzLnB1c2goaW5kZXgpXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcmVjdGFuZ2xlTGlzdFxuICB9XG5cbiAgc29ydGluZyhvZGxEcmFnZ2FibGVzTGlzdCwgbmV3RHJhZ2dhYmxlcywgaW5kZXhPZk5ld3MpIHtcbiAgICBjb25zdCBkcmFnZ2FibGVzID0gb2RsRHJhZ2dhYmxlc0xpc3QuY29uY2F0KG5ld0RyYWdnYWJsZXMpXG4gICAgbmV3RHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGluZGV4T2ZOZXdzLnB1c2goZHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkpXG4gICAgfSlcbiAgICByZXR1cm4gZHJhZ2dhYmxlc1xuICB9XG59XG5cbmNsYXNzIEZsb2F0TGVmdFN0cmF0ZWd5IGV4dGVuZHMgQmFzaWNTdHJhdGVneSB7XG4gIGNvbnN0cnVjdG9yKHJlY3RhbmdsZSwgb3B0aW9ucz17fSkge1xuICAgIHN1cGVyKHJlY3RhbmdsZSwgb3B0aW9ucylcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHJlbW92YWJsZTogdHJ1ZVxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0aGlzLnJhZGl1cyA9IG9wdGlvbnMucmFkaXVzIHx8IDgwXG5cbiAgICB0aGlzLnBhZGRpbmdUb3BMZWZ0ID0gb3B0aW9ucy5wYWRkaW5nVG9wTGVmdCB8fCBuZXcgUG9pbnQoMCwgMClcbiAgICB0aGlzLnBhZGRpbmdCb3R0b21SaWdodCA9IG9wdGlvbnMucGFkZGluZ0JvdHRvbVJpZ2h0IHx8IG5ldyBQb2ludCgwLCAwKVxuICAgIHRoaXMueUdhcEJldHdlZW5EcmFnZ2FibGVzID0gb3B0aW9ucy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgfHwgMFxuXG4gICAgdGhpcy5nZXREaXN0YW5jZSA9IG9wdGlvbnMuZ2V0RGlzdGFuY2UgfHwgZ2V0RGlzdGFuY2VcbiAgICB0aGlzLmdldFBvc2l0aW9uID0gb3B0aW9ucy5nZXRQb3NpdGlvbiB8fCAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnBvc2l0aW9uKVxuICB9XG5cbiAgcG9zaXRpb25pbmcocmVjdGFuZ2xlTGlzdCwgX2luZGV4ZXNPZk5ld3MpIHtcbiAgICBjb25zdCBib3VuZFJlY3QgPSB0aGlzLmJvdW5kUmVjdFxuICAgIGNvbnN0IHJlY3RQMiA9IGJvdW5kUmVjdC5nZXRQMigpXG4gICAgbGV0IGJvdW5kYXJ5UG9pbnRzID0gW2JvdW5kUmVjdC5wb3NpdGlvbl1cblxuICAgIHJlY3RhbmdsZUxpc3QuZm9yRWFjaCgocmVjdCwgcmVjdEluZGV4KSA9PiB7XG4gICAgICBsZXQgcG9zaXRpb24sIGlzVmFsaWQgPSBmYWxzZVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib3VuZGFyeVBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBwb3NpdGlvbiA9IG5ldyBQb2ludChcbiAgICAgICAgICBib3VuZGFyeVBvaW50c1tpXS54ICsgdGhpcy5wYWRkaW5nVG9wTGVmdC54LFxuICAgICAgICAgIGkgPiAwID8gKGJvdW5kYXJ5UG9pbnRzW2kgLSAxXS55ICsgdGhpcy55R2FwQmV0d2VlbkRyYWdnYWJsZXMpIDogKGJvdW5kUmVjdC5wb3NpdGlvbi55ICsgdGhpcy5wYWRkaW5nVG9wTGVmdC55KVxuICAgICAgICApXG5cbiAgICAgICAgaXNWYWxpZCA9IChwb3NpdGlvbi54ICsgcmVjdC5zaXplLnggPCByZWN0UDIueClcblxuICAgICAgICBpZiAoaXNWYWxpZCkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICAgIHBvc2l0aW9uID0gbmV3IFBvaW50KFxuICAgICAgICAgIGJvdW5kUmVjdC5wb3NpdGlvbi54ICsgdGhpcy5wYWRkaW5nVG9wTGVmdC54LFxuICAgICAgICAgIGJvdW5kYXJ5UG9pbnRzW2JvdW5kYXJ5UG9pbnRzLmxlbmd0aCAtIDFdLnkgKyAocmVjdEluZGV4ID4gMCA/IHRoaXMueUdhcEJldHdlZW5EcmFnZ2FibGVzIDogdGhpcy5wYWRkaW5nVG9wTGVmdC55KVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHJlY3QucG9zaXRpb24gPSBwb3NpdGlvblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZW1vdmFibGUgJiYgcmVjdC5nZXRQMygpLnkgPiBib3VuZFJlY3QuZ2V0UDMoKS55KSB7XG4gICAgICAgIHJlY3QucmVtb3ZhYmxlID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBib3VuZGFyeVBvaW50cyA9IGFkZFBvaW50VG9Cb3VuZFBvaW50cyhib3VuZGFyeVBvaW50cywgcmVjdC5nZXRQMygpLmFkZCh0aGlzLnBhZGRpbmdCb3R0b21SaWdodCkpXG4gICAgfSlcbiAgICByZXR1cm4gcmVjdGFuZ2xlTGlzdFxuICB9XG5cbiAgc29ydGluZyhvZGxEcmFnZ2FibGVzTGlzdCwgbmV3RHJhZ2dhYmxlcywgaW5kZXhPZk5ld3MpIHtcbiAgICBjb25zdCBuZXdMaXN0ID0gb2RsRHJhZ2dhYmxlc0xpc3QuY29uY2F0KClcbiAgICBjb25zdCBsaXN0T2xkUG9zaXRpb24gPSBvZGxEcmFnZ2FibGVzTGlzdC5tYXAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLmdldFBvc2l0aW9uKCkpXG4gICAgbmV3RHJhZ2dhYmxlcy5mb3JFYWNoKChuZXdEcmFnZ2FibGUpID0+IHtcbiAgICAgIGxldCBpbmRleCA9IGluZGV4T2ZOZWFyZXN0UG9pbnQobGlzdE9sZFBvc2l0aW9uLCB0aGlzLmdldFBvc2l0aW9uKG5ld0RyYWdnYWJsZSksIHRoaXMucmFkaXVzLCB0aGlzLmdldERpc3RhbmNlKVxuICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICBpbmRleCA9IG5ld0xpc3QubGVuZ3RoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbmRleCA9IG5ld0xpc3QuaW5kZXhPZihvZGxEcmFnZ2FibGVzTGlzdFtpbmRleF0pXG4gICAgICB9XG4gICAgICBuZXdMaXN0LnNwbGljZShpbmRleCwgMCwgbmV3RHJhZ2dhYmxlKVxuICAgIH0pXG4gICAgbmV3RHJhZ2dhYmxlcy5mb3JFYWNoKChuZXdEcmFnZ2FibGUpID0+IHtcbiAgICAgIGluZGV4T2ZOZXdzLnB1c2gobmV3TGlzdC5pbmRleE9mKG5ld0RyYWdnYWJsZSkpXG4gICAgfSlcbiAgICByZXR1cm4gbmV3TGlzdFxuICB9XG59XG5cbmNsYXNzIEZsb2F0UmlnaHRTdHJhdGVneSBleHRlbmRzIEZsb2F0TGVmdFN0cmF0ZWd5IHtcbiAgY29uc3RydWN0b3IocmVjdGFuZ2xlLCBvcHRpb25zPXt9KSB7XG4gICAgc3VwZXIocmVjdGFuZ2xlLCBvcHRpb25zKVxuXG4gICAgdGhpcy5wYWRkaW5nVG9wUmlnaHQgPSBvcHRpb25zLnBhZGRpbmdUb3BSaWdodCB8fCBuZXcgUG9pbnQoNSwgNSlcbiAgICB0aGlzLnBhZGRpbmdCb3R0b21MZWZ0ID0gb3B0aW9ucy5wYWRkaW5nQm90dG9tTGVmdCB8fCBuZXcgUG9pbnQoMCwgMClcbiAgICB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyA9IG9wdGlvbnMueUdhcEJldHdlZW5EcmFnZ2FibGVzIHx8IDBcblxuICAgIHRoaXMucGFkZGluZ0JvdHRvbU5lZ0xlZnQgPSBuZXcgUG9pbnQoLXRoaXMucGFkZGluZ0JvdHRvbUxlZnQueCwgdGhpcy5wYWRkaW5nQm90dG9tTGVmdC55KVxuICB9XG5cbiAgcG9zaXRpb25pbmcocmVjdGFuZ2xlTGlzdCwgX2luZGV4ZXNPZk5ld3MpIHtcbiAgICBjb25zdCBib3VuZFJlY3QgPSB0aGlzLmJvdW5kUmVjdFxuICAgIGxldCBib3VuZGFyeVBvaW50cyA9IFtib3VuZFJlY3QuZ2V0UDIoKV1cblxuICAgIHJlY3RhbmdsZUxpc3QuZm9yRWFjaCgocmVjdCwgcmVjdEluZGV4KSA9PiB7XG4gICAgICBsZXQgcG9zaXRpb24sIGlzVmFsaWQgPSBmYWxzZVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib3VuZGFyeVBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBwb3NpdGlvbiA9IG5ldyBQb2ludChcbiAgICAgICAgICBib3VuZGFyeVBvaW50c1tpXS54IC0gcmVjdC5zaXplLnggLSB0aGlzLnBhZGRpbmdUb3BSaWdodC54LFxuICAgICAgICAgIGkgPiAwID8gKGJvdW5kYXJ5UG9pbnRzW2kgLSAxXS55ICsgdGhpcy55R2FwQmV0d2VlbkRyYWdnYWJsZXMpIDogKGJvdW5kUmVjdC5wb3NpdGlvbi55ICsgdGhpcy5wYWRkaW5nVG9wUmlnaHQueSlcbiAgICAgICAgKVxuXG4gICAgICAgIGlzVmFsaWQgPSAocG9zaXRpb24ueCA+IHJlY3QucG9zaXRpb24ueClcbiAgICAgICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgcG9zaXRpb24gPSBuZXcgUG9pbnQoXG4gICAgICAgICAgYm91bmRSZWN0LmdldFAyKCkueCAgLSByZWN0LnNpemUueCAtIHRoaXMucGFkZGluZ1RvcFJpZ2h0LngsXG4gICAgICAgICAgYm91bmRhcnlQb2ludHNbYm91bmRhcnlQb2ludHMubGVuZ3RoIC0gMV0ueSArIChyZWN0SW5kZXggPiAwID8gdGhpcy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgOiB0aGlzLnBhZGRpbmdUb3BSaWdodC55KVxuICAgICAgICApXG4gICAgICB9XG4gICAgICByZWN0LnBvc2l0aW9uID0gcG9zaXRpb25cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucmVtb3ZhYmxlICYmIHJlY3QuZ2V0UDQoKS55ID4gYm91bmRSZWN0LmdldFA0KCkueSkge1xuICAgICAgICByZWN0LnJlbW92YWJsZSA9IHRydWVcbiAgICAgIH1cbiAgICAgIGJvdW5kYXJ5UG9pbnRzID0gYWRkUG9pbnRUb0JvdW5kUG9pbnRzKGJvdW5kYXJ5UG9pbnRzLCByZWN0LmdldFA0KCkuYWRkKHRoaXMucGFkZGluZ0JvdHRvbU5lZ0xlZnQpLCB0cnVlKVxuICAgIH0pXG4gICAgcmV0dXJuIHJlY3RhbmdsZUxpc3RcbiAgfVxufVxuXG5leHBvcnQgeyBOb3RDcm9zc2luZ1N0cmF0ZWd5LCBGbG9hdExlZnRTdHJhdGVneSwgRmxvYXRSaWdodFN0cmF0ZWd5IH1cbiIsImltcG9ydCBQb2ludCBmcm9tICcuL3BvaW50J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QW5nbGVEaWZmKGFscGhhLCBiZXRhKSB7XG4gIGNvbnN0IG1pbkFuZ2xlID0gTWF0aC5taW4oYWxwaGEsIGJldGEpXG4gIGNvbnN0IG1heEFuZ2xlID0gIE1hdGgubWF4KGFscGhhLCBiZXRhKVxuICByZXR1cm4gTWF0aC5taW4obWF4QW5nbGUgLSBtaW5BbmdsZSwgbWluQW5nbGUgKyBNYXRoLlBJKjIgLSBtYXhBbmdsZSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFuZ2xlKHAxLCBwMikge1xuICBjb25zdCBkaWZmID0gcDIuc3ViKHAxKVxuICByZXR1cm4gbm9ybWFsaXplQW5nbGUoTWF0aC5hdGFuMihkaWZmLnksIGRpZmYueCkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b1JhZGlhbihhbmdsZSkge1xuICByZXR1cm4gKChhbmdsZSAlIDM2MCkgKiBNYXRoLlBJIC8gMTgwKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9EZWdyZWUoYW5nbGUpIHtcbiAgcmV0dXJuIChhbmdsZSAqIDE4MCAvIE1hdGguUEkpICUgMzYwXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZEFuZ2xlKG1pbiwgbWF4LCB2YWwpIHtcbiAgbGV0IGRtaW4sIGRtYXhcbiAgaWYgKG1pbiA8IG1heCAmJiB2YWwgPiBtaW4gJiYgdmFsIDwgbWF4KSB7XG4gICAgcmV0dXJuIHZhbFxuICB9IGVsc2UgaWYgKG1heCA8IG1pbiAmJiAodmFsIDwgbWF4IHx8IHZhbCA+IG1pbikpIHtcbiAgICByZXR1cm4gdmFsXG4gIH0gZWxzZSB7XG4gICAgZG1pbiA9IGdldEFuZ2xlRGlmZihtaW4sIHZhbClcbiAgICBkbWF4ID0gZ2V0QW5nbGVEaWZmKG1heCwgdmFsKVxuICAgIGlmIChkbWluIDwgZG1heCkge1xuICAgICAgcmV0dXJuIG1pblxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbWF4XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROZWFyZXN0QW5nbGUoYXJyLCBhbmdsZSkge1xuICBsZXQgaSwgdGVtcCwgZGlmZiA9IE1hdGguUEkgKiAyLCB2YWx1ZVxuICBmb3IgKGkgPSAwOyBpIDwgYXJyLmxlbmd0aDtpKyspIHtcbiAgICB0ZW1wID0gZ2V0QW5nbGVEaWZmKGFycltpXSwgYW5nbGUpXG4gICAgaWYgKGRpZmYgPCB0ZW1wKSB7XG4gICAgICBkaWZmID0gdGVtcFxuICAgICAgdmFsdWUgPSBhcnJbaV1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHZhbHVlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVBbmdsZSh2YWwpIHtcbiAgd2hpbGUgKHZhbCA8IDApIHtcbiAgICB2YWwgKz0gMiAqIE1hdGguUElcbiAgfVxuICB3aGlsZSAodmFsID4gMiAqIE1hdGguUEkpIHtcbiAgICB2YWwgLT0gMiAqIE1hdGguUElcbiAgfVxuICByZXR1cm4gdmFsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oYW5nbGUsIGxlbmd0aCwgY2VudGVyKSB7XG4gIGNlbnRlciA9IGNlbnRlciB8fCBuZXcgUG9pbnQoMCwgMClcbiAgcmV0dXJuIGNlbnRlci5hZGQobmV3IFBvaW50KGxlbmd0aCAqIE1hdGguY29zKGFuZ2xlKSwgbGVuZ3RoICogTWF0aC5zaW4oYW5nbGUpKSlcbn1cbiIsImltcG9ydCBQb2ludCBmcm9tICcuL2dlb21ldHJ5L3BvaW50J1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tICcuL2dlb21ldHJ5L3JlY3RhbmdsZSdcbmltcG9ydCB7XG4gIGdldFBvaW50T25MaW5lQnlMZW5naHQsXG4gIGRpcmVjdENyb3NzaW5nLFxuICBib3VuZFRvTGluZVxufSBmcm9tICcuL2dlb21ldHJ5L2JvdW5kcydcblxuaW1wb3J0IHtcbiAgZ2V0QW5nbGUsXG4gIG5vcm1hbGl6ZUFuZ2xlLFxuICBib3VuZEFuZ2xlLFxuICBnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW1cbn0gZnJvbSAnLi9nZW9tZXRyeS9hbmdsZXMnXG5cbmV4cG9ydCBjbGFzcyBCb3VuZCB7XG4gIGNvbnN0cnVjdG9yICgpIHt9XG5cbiAgYm91bmQocG9pbnQsIF9zaXplKSB7XG4gICAgcmV0dXJuIHBvaW50XG4gIH1cblxuICByZWZyZXNoICgpIHt9XG5cbiAgc3RhdGljIGJvdW5kaW5nKCkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IHRoaXMoLi4uYXJndW1lbnRzKVxuICAgIHJldHVybiBpbnN0YW5jZS5ib3VuZC5iaW5kKGluc3RhbmNlKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvUmVjdGFuZ2xlIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3RvcihyZWN0YW5nbGUpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5yZWN0YW5nbGUgPSByZWN0YW5nbGVcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgY2FsY1BvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIGNvbnN0IHJlY3RQMiA9IHRoaXMucmVjdGFuZ2xlLmdldFAzKClcblxuICAgIGlmICh0aGlzLnJlY3RhbmdsZS5wb3NpdGlvbi54ID4gY2FsY1BvaW50LngpIHtcbiAgICAgIChjYWxjUG9pbnQueCA9IHRoaXMucmVjdGFuZ2xlLnBvc2l0aW9uLngpXG4gICAgfVxuICAgIGlmICh0aGlzLnJlY3RhbmdsZS5wb3NpdGlvbi55ID4gY2FsY1BvaW50LnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gdGhpcy5yZWN0YW5nbGUucG9zaXRpb24ueVxuICAgIH1cbiAgICBpZiAocmVjdFAyLnggPCBjYWxjUG9pbnQueCArIHNpemUueCkge1xuICAgICAgY2FsY1BvaW50LnggPSByZWN0UDIueCAtIHNpemUueFxuICAgIH1cbiAgICBpZiAocmVjdFAyLnkgPCBjYWxjUG9pbnQueSArIHNpemUueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSByZWN0UDIueSAtIHNpemUueVxuICAgIH1cblxuICAgIHJldHVybiBjYWxjUG9pbnRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb0VsZW1lbnQgZXh0ZW5kcyBCb3VuZFRvUmVjdGFuZ2xlIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29udGFpbmVyKSB7XG4gICAgc3VwZXIoUmVjdGFuZ2xlLmZyb21FbGVtZW50KGVsZW1lbnQsIGNvbnRhaW5lcikpXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyXG4gIH1cblxuICByZWZyZXNoICgpIHtcbiAgICB0aGlzLnJlY3RhbmdsZSA9IFJlY3RhbmdsZS5mcm9tRWxlbWVudCh0aGlzLmVsZW1lbnQsIHRoaXMuY29udGFpbmVyKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvTGluZVggZXh0ZW5kcyBCb3VuZCB7XG4gIGNvbnN0cnVjdG9yKHgsIHN0YXJ0WSwgZW5kWSkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnggPSB4XG4gICAgdGhpcy5zdGFydFkgPSBzdGFydFlcbiAgICB0aGlzLmVuZFkgPSBlbmRZXG4gIH1cblxuICBib3VuZChwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IGNhbGNQb2ludCA9IHBvaW50LmNsb25lKClcblxuICAgIGNhbGNQb2ludC54ID0gdGhpcy54XG4gICAgaWYgKHRoaXMuc3RhcnRZID4gY2FsY1BvaW50LnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gdGhpcy5zdGFydFlcbiAgICB9XG4gICAgaWYgKHRoaXMuZW5kWSA8IGNhbGNQb2ludC55ICsgc2l6ZS55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHRoaXMuZW5kWSAtIHNpemUueVxuICAgIH1cblxuICAgIHJldHVybiBjYWxjUG9pbnRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb0xpbmVZIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3Rvcih5LCBzdGFydFgsIGVuZFgpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy55ID0geVxuICAgIHRoaXMuc3RhcnRYID0gc3RhcnRYXG4gICAgdGhpcy5lbmRYID0gZW5kWFxuICB9XG5cbiAgYm91bmQocG9pbnQsIHNpemUpIHtcbiAgICBjb25zdCBjYWxjUG9pbnQgPSBwb2ludC5jbG9uZSgpXG4gICAgY2FsY1BvaW50LnkgPSB0aGlzLnlcbiAgICBpZiAodGhpcy5zdGFydFggPiBjYWxjUG9pbnQueCkge1xuICAgICAgY2FsY1BvaW50LnggPSB0aGlzLnN0YXJ0WFxuICAgIH1cbiAgICBpZiAodGhpcy5lbmRYIDwgY2FsY1BvaW50LnggKyBzaXplLngpIHtcbiAgICAgIGNhbGNQb2ludC54ID0gdGhpcy5lbmRYIC0gc2l6ZS54XG4gICAgfVxuICAgIHJldHVybiBjYWxjUG9pbnRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb0xpbmUgZXh0ZW5kcyBCb3VuZCB7XG4gIGNvbnN0cnVjdG9yKHN0YXJ0UG9pbnQsIGVuZFBvaW50KSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuc3RhcnRQb2ludCA9IHN0YXJ0UG9pbnRcbiAgICB0aGlzLmVuZFBvaW50ID0gZW5kUG9pbnRcbiAgICBjb25zdCBhbHBoYSA9IE1hdGguYXRhbjIoZW5kUG9pbnQueSAtIHN0YXJ0UG9pbnQueSwgZW5kUG9pbnQueCAtIHN0YXJ0UG9pbnQueClcbiAgICBjb25zdCBiZXRhID0gYWxwaGEgKyBNYXRoLlBJIC8gMlxuICAgIHRoaXMuc29tZUsgPSAxMFxuICAgIHRoaXMuY29zQmV0YSA9IE1hdGguY29zKGJldGEpXG4gICAgdGhpcy5zaW5CZXRhID0gTWF0aC5zaW4oYmV0YSlcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgcG9pbnQyID0gbmV3IFBvaW50KFxuICAgICAgcG9pbnQueCArIHRoaXMuc29tZUsgKiB0aGlzLmNvc0JldGEsXG4gICAgICBwb2ludC55ICsgdGhpcy5zb21lSyAqIHRoaXMuc2luQmV0YVxuICAgIClcblxuICAgIGNvbnN0IG5ld0VuZFBvaW50ID0gZ2V0UG9pbnRPbkxpbmVCeUxlbmdodCh0aGlzLmVuZFBvaW50LCB0aGlzLnN0YXJ0UG9pbnQsIHNpemUueClcbiAgICBjb25zdCBwb2ludENyb3NzaW5nID0gZGlyZWN0Q3Jvc3NpbmcodGhpcy5zdGFydFBvaW50LCB0aGlzLmVuZFBvaW50LCBwb2ludCwgcG9pbnQyKVxuXG4gICAgcmV0dXJuIGJvdW5kVG9MaW5lKHRoaXMuc3RhcnRQb2ludCwgbmV3RW5kUG9pbnQsIHBvaW50Q3Jvc3NpbmcpXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9DaXJjbGUgZXh0ZW5kcyBCb3VuZCB7XG4gIGNvbnN0cnVjdG9yKGNlbnRlciwgcmFkaXVzKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuY2VudGVyID0gY2VudGVyXG4gICAgdGhpcy5yYWRpdXMgPSByYWRpdXNcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBfc2l6ZSkge1xuICAgIHJldHVybiBnZXRQb2ludE9uTGluZUJ5TGVuZ2h0KHRoaXMuY2VudGVyLCBwb2ludCwgdGhpcy5yYWRpdXMpXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9BcmMgZXh0ZW5kcyBCb3VuZFRvQ2lyY2xlIHtcbiAgY29uc3RydWN0b3IoY2VudGVyLCByYWRpdXMsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlKSB7XG4gICAgc3VwZXIoY2VudGVyLCByYWRpdXMpXG4gICAgdGhpcy5fc3RhcnRBbmdsZSA9IHN0YXJ0QW5nbGVcbiAgICB0aGlzLl9lbmRBbmdsZSA9IGVuZEFuZ2xlXG4gIH1cblxuICBzdGFydEFuZ2xlKCkge1xuICAgIHJldHVybiB0eXBlb2YgdGhpcy5fc3RhcnRBbmdsZSA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMuX3N0YXJ0QW5nbGUoKSA6IHRoaXMuX3N0YXJ0QW5nbGVcbiAgfVxuXG4gIGVuZEFuZ2xlKCkge1xuICAgIHJldHVybiB0eXBlb2YgdGhpcy5fZW5kQW5nbGUgPT09ICdmdW5jdGlvbicgPyB0aGlzLl9lbmRBbmdsZSgpIDogdGhpcy5fZW5kQW5nbGVcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBfc2l6ZSkge1xuICAgIGxldCBhbmdsZSA9IGdldEFuZ2xlKHRoaXMuY2VudGVyLCBwb2ludClcbiAgICBhbmdsZSA9IG5vcm1hbGl6ZUFuZ2xlKGFuZ2xlKVxuICAgIGFuZ2xlID0gYm91bmRBbmdsZSh0aGlzLnN0YXJ0QW5nbGUoKSwgdGhpcy5lbmRBbmdsZSgpLCBhbmdsZSlcbiAgICByZXR1cm4gZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKGFuZ2xlLCB0aGlzLnJhZGl1cywgdGhpcy5jZW50ZXIpXG4gIH1cbn1cbiIsImltcG9ydCByYW5nZSBmcm9tICcuL3V0aWxzL3JhbmdlLmpzJ1xuaW1wb3J0IHJlbW92ZUl0ZW0gZnJvbSAnLi91dGlscy9yZW1vdmUtYXJyYXktaXRlbSdcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudEVtaXR0ZXInXG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gJy4vZ2VvbWV0cnkvcmVjdGFuZ2xlJ1xuaW1wb3J0IHsgdHJhbnNmb3JtZWRTcGFjZURpc3RhbmNlRmFjdG9yeSB9IGZyb20gJy4vZ2VvbWV0cnkvZGlzdGFuY2VzJ1xuaW1wb3J0IHsgc2NvcGVzLCBkZWZhdWx0U2NvcGUgfSBmcm9tICcuL3Njb3BlJ1xuXG5pbXBvcnQgeyBGbG9hdExlZnRTdHJhdGVneSB9IGZyb20gJy4vcG9zaXRpb25pbmcnXG5pbXBvcnQgeyBCb3VuZFRvRWxlbWVudCB9IGZyb20gJy4vYm91bmRpbmcnXG5cbmNvbnN0IGFkZFRvRGVmYXVsdFNjb3BlID0gZnVuY3Rpb24odGFyZ2V0KSB7XG4gIGRlZmF1bHRTY29wZS5hZGRUYXJnZXQodGFyZ2V0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXJnZXQgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBkcmFnZ2FibGVzLCBvcHRpb25zID0ge30pIHtcbiAgICBzdXBlcihvcHRpb25zKVxuICAgIGNvbnN0IHRhcmdldCA9IHRoaXNcblxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgdGltZUVuZDogMjAwLFxuICAgICAgdGltZUV4Y2FuZ2U6IDQwMFxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0aGlzLnBvc2l0aW9uaW5nU3RyYXRlZ3kgPSBvcHRpb25zLnN0cmF0ZWd5IHx8IG5ldyBGbG9hdExlZnRTdHJhdGVneShcbiAgICAgIHRoaXMuZ2V0UmVjdGFuZ2xlLmJpbmQodGhpcyksXG4gICAgICB7XG4gICAgICAgIHJhZGl1czogODAsXG4gICAgICAgIGdldERpc3RhbmNlOiB0cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5KHsgeDogMSwgeTogNCB9KSxcbiAgICAgICAgcmVtb3ZhYmxlOiB0cnVlXG4gICAgICB9XG4gICAgKVxuXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUudGFyZ2V0cy5wdXNoKHRhcmdldCkpXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gZHJhZ2dhYmxlc1xuXG4gICAgVGFyZ2V0LmVtaXR0ZXIuZW1pdCgndGFyZ2V0OmNyZWF0ZScsIHRoaXMpXG5cbiAgICB0aGlzLnN0YXJ0Qm91bmRpbmcoKVxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBzdGFydEJvdW5kaW5nKCkge1xuICAgIHRoaXMuYm91bmQgPSB0aGlzLm9wdGlvbnMuYm91bmQgfHwgQm91bmRUb0VsZW1lbnQuYm91bmRpbmcodGhpcy5lbGVtZW50KVxuICB9XG5cbiAgcG9zaXRpb25pbmcgKGRyYWdnYWJsZXMsIGluZGV4ZXNPZk5ldykge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uaW5nU3RyYXRlZ3kucG9zaXRpb25pbmcoZHJhZ2dhYmxlcywgaW5kZXhlc09mTmV3KVxuICB9XG5cbiAgc29ydGluZyAob2xkRHJhZ2dhYmxlcywgbmV3RHJhZ2dhYmxlcywgaW5kZXhPZk5ld3MpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbmluZ1N0cmF0ZWd5LnNvcnRpbmcob2xkRHJhZ2dhYmxlcywgbmV3RHJhZ2dhYmxlcywgaW5kZXhPZk5ld3MpXG4gIH1cblxuICBpbml0KCkge1xuICAgIGxldCByZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXdcblxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzID0gdGhpcy5kcmFnZ2FibGVzLmZpbHRlcigoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBsZXQgZWxlbWVudCA9IGRyYWdnYWJsZS5lbGVtZW50LnBhcmVudE5vZGVcbiAgICAgIHdoaWxlIChlbGVtZW50KSB7XG4gICAgICAgIGlmIChlbGVtZW50ID09PSB0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGVcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH0pXG5cbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMubGVuZ3RoKSB7XG4gICAgICBpbmRleGVzT2ZOZXcgPSByYW5nZSh0aGlzLmlubmVyRHJhZ2dhYmxlcy5sZW5ndGgpXG4gICAgICByZWN0YW5nbGVzID0gdGhpcy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgICB9KSwgaW5kZXhlc09mTmV3KVxuICAgICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXcpXG4gICAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHRoaXMuZW1pdCgndGFyZ2V0OmFkZCcsIGRyYWdnYWJsZSkpXG4gICAgfVxuICB9XG5cbiAgZ2V0UmVjdGFuZ2xlKCkge1xuICAgIHJldHVybiBSZWN0YW5nbGUuZnJvbUVsZW1lbnQodGhpcy5lbGVtZW50LCB0aGlzLmNvbnRhaW5lciwgdHJ1ZSlcbiAgfVxuXG4gIGNhdGNoRHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuY2F0Y2hEcmFnZ2FibGUpIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuY2F0Y2hEcmFnZ2FibGUodGhpcywgZHJhZ2dhYmxlKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0YXJnZXRSZWN0YW5nbGUgPSB0aGlzLmdldFJlY3RhbmdsZSgpXG4gICAgICBjb25zdCBkcmFnZ2FibGVTcXVhcmUgPSBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKCkuZ2V0U3F1YXJlKClcblxuICAgICAgcmV0dXJuIGRyYWdnYWJsZVNxdWFyZSA8IHRhcmdldFJlY3RhbmdsZS5nZXRTcXVhcmUoKVxuICAgICAgICAgICAgICAmJiB0YXJnZXRSZWN0YW5nbGUuaW5jbHVkZVBvaW50KGRyYWdnYWJsZS5nZXRDZW50ZXIoKSlcbiAgICB9XG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRSZWN0YW5nbGUoKS5wb3NpdGlvblxuICB9XG5cbiAgZ2V0U2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRSZWN0YW5nbGUoKS5zaXplXG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHNjb3Blcy5mb3JFYWNoKChzY29wZSkgPT4gcmVtb3ZlSXRlbShzY29wZS50YXJnZXRzLCB0aGlzKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgW10pXG4gICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBbXSwgMClcbiAgfVxuXG4gIG9uRW5kKGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IG5ld0RyYWdnYWJsZXNJbmRleCA9IFtdXG5cbiAgICBpZiAodGhpcy5nZXRSZWN0YW5nbGUoKS5pbmNsdWRlUG9pbnQoZHJhZ2dhYmxlLmdldENlbnRlcigpKSkge1xuICAgICAgZHJhZ2dhYmxlLnBvc2l0aW9uID0gdGhpcy5ib3VuZChkcmFnZ2FibGUucG9zaXRpb24sIGRyYWdnYWJsZS5nZXRTaXplKCkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHRoaXMuZW1pdCgndGFyZ2V0OmJlZm9yZUFkZCcsIGRyYWdnYWJsZSlcblxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzID0gdGhpcy5zb3J0aW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLCBbZHJhZ2dhYmxlXSwgbmV3RHJhZ2dhYmxlc0luZGV4KVxuICAgIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgfSksIG5ld0RyYWdnYWJsZXNJbmRleClcblxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgbmV3RHJhZ2dhYmxlc0luZGV4KVxuICAgIGlmICh0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkgIT09IC0xKSB7XG4gICAgICB0aGlzLmFkZFJlbW92ZU9uTW92ZShkcmFnZ2FibGUpXG4gICAgfVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBzZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXcsIHRpbWUpIHtcbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5zbGljZSgwKS5mb3JFYWNoKChkcmFnZ2FibGUsIGkpID0+IHtcbiAgICAgIGNvbnN0IHJlY3QgPSByZWN0YW5nbGVzW2ldLFxuICAgICAgICB0aW1lRW5kID0gdGltZSB8fCB0aW1lID09PSAwID8gdGltZSA6IGluZGV4ZXNPZk5ldy5pbmRleE9mKGkpICE9PSAtMSA/IHRoaXMub3B0aW9ucy50aW1lRW5kIDogdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlXG5cbiAgICAgIGlmIChyZWN0LnJlbW92YWJsZSkge1xuICAgICAgICBkcmFnZ2FibGUubW92ZShkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uLCB0aW1lRW5kLCB0cnVlLCB0cnVlKVxuICAgICAgICByZW1vdmVJdGVtKHRoaXMuaW5uZXJEcmFnZ2FibGVzLCBkcmFnZ2FibGUpXG4gICAgICAgIHRoaXMuZW1pdCgndGFyZ2V0OnJlbW92ZScsIGRyYWdnYWJsZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRyYWdnYWJsZS5tb3ZlKHJlY3QucG9zaXRpb24sIHRpbWVFbmQsIHRydWUsIHRydWUpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGFkZChkcmFnZ2FibGUsIHRpbWUpIHtcbiAgICBjb25zdCBuZXdEcmFnZ2FibGVzSW5kZXggPSB0aGlzLmlubmVyRHJhZ2dhYmxlcy5sZW5ndGhcblxuICAgIHRoaXMuZW1pdCgndGFyZ2V0OmJlZm9yZUFkZCcsIGRyYWdnYWJsZSlcblxuICAgIHRoaXMucHVzaElubmVyRHJhZ2dhYmxlKGRyYWdnYWJsZSlcbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBuZXdEcmFnZ2FibGVzSW5kZXgsIGRyYWdnYWJsZSlcblxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgW25ld0RyYWdnYWJsZXNJbmRleF0sIHRpbWUgfHwgMClcbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMSkge1xuICAgICAgdGhpcy5hZGRSZW1vdmVPbk1vdmUoZHJhZ2dhYmxlKVxuICAgIH1cbiAgfVxuXG4gIHB1c2hJbm5lckRyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpPT09LTEpIHtcbiAgICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxuICAgIH1cbiAgfVxuXG4gIGFkZFJlbW92ZU9uTW92ZShkcmFnZ2FibGUpIHtcbiAgICBkcmFnZ2FibGUub24oJ2RyYWc6bW92ZScsIHRoaXMucmVtb3ZlSGFuZGxlciA9ICgpID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlKGRyYWdnYWJsZSlcbiAgICB9KVxuXG4gICAgdGhpcy5lbWl0KCd0YXJnZXQ6YWRkJywgZHJhZ2dhYmxlKVxuICB9XG5cbiAgcmVtb3ZlKGRyYWdnYWJsZSkge1xuICAgIGRyYWdnYWJsZS51bnN1YnNjcmliZSgnZHJhZzptb3ZlJywgdGhpcy5yZW1vdmVIYW5kbGVyKVxuXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSlcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5zcGxpY2UoaW5kZXgsIDEpXG5cbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBbXSlcblxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgW10pXG4gICAgdGhpcy5lbWl0KCd0YXJnZXQ6cmVtb3ZlJywgZHJhZ2dhYmxlKVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUubW92ZShkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uLCAwLCB0cnVlLCB0cnVlKVxuICAgICAgdGhpcy5lbWl0KCd0YXJnZXQ6cmVtb3ZlJywgZHJhZ2dhYmxlKVxuICAgIH0pXG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMgPSBbXVxuICB9XG5cbiAgZ2V0U29ydGVkRHJhZ2dhYmxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5pbm5lckRyYWdnYWJsZXMuc2xpY2UoKVxuICB9XG5cbiAgZ2V0IGNvbnRhaW5lcigpIHtcbiAgICByZXR1cm4gKHRoaXMuX2NvbnRhaW5lciA9IHRoaXMuX2NvbnRhaW5lciB8fCB0aGlzLm9wdGlvbnMuY29udGFpbmVyIHx8IHRoaXMub3B0aW9ucy5wYXJlbnQgfHwgdGhpcy5lbGVtZW50Lm9mZnNldFBhcmVudClcbiAgfVxufVxuXG5UYXJnZXQuZW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuVGFyZ2V0LmVtaXR0ZXIub24oJ3RhcmdldDpjcmVhdGUnLCBhZGRUb0RlZmF1bHRTY29wZSlcbiIsImltcG9ydCByZW1vdmVJdGVtIGZyb20gJy4vdXRpbHMvcmVtb3ZlLWFycmF5LWl0ZW0nXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnRFbWl0dGVyJ1xuaW1wb3J0IERyYWdnYWJsZSBmcm9tICcuL2RyYWdnYWJsZSdcbmltcG9ydCBUYXJnZXQgZnJvbSAnLi90YXJnZXQnXG5cbmNvbnN0IHNjb3BlcyA9IFtdXG5cbmNsYXNzIFNjb3BlIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoZHJhZ2dhYmxlcywgdGFyZ2V0cywgb3B0aW9ucz17fSkge1xuICAgIHN1cGVyKG9wdGlvbnMpXG4gICAgc2NvcGVzLmZvckVhY2goKHNjb3BlKSA9PiB7XG4gICAgICBpZiAoZHJhZ2dhYmxlcykge1xuICAgICAgICBkcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgICAgIHJlbW92ZUl0ZW0oc2NvcGUuZHJhZ2dhYmxlcywgZHJhZ2dhYmxlKVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICBpZiAodGFyZ2V0cykge1xuICAgICAgICB0YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4ge1xuICAgICAgICAgIHJlbW92ZUl0ZW0oc2NvcGUudGFyZ2V0cywgdGFyZ2V0KVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLmRyYWdnYWJsZXMgPSBkcmFnZ2FibGVzIHx8IFtdXG4gICAgdGhpcy50YXJnZXRzID0gdGFyZ2V0cyB8fCBbXVxuICAgIHNjb3Blcy5wdXNoKHRoaXMpXG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgdGltZUVuZDogKG9wdGlvbnMudGltZUVuZCkgfHwgNDAwXG4gICAgfVxuXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLmRyYWdFbmRBY3Rpb24gPSAoKSA9PiB0aGlzLm9uRW5kKGRyYWdnYWJsZSlcbiAgICB9KVxuICB9XG5cbiAgYWRkRHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5wdXNoKGRyYWdnYWJsZSlcbiAgICBkcmFnZ2FibGUuZHJhZ0VuZEFjdGlvbiA9ICgpID0+IHRoaXMub25FbmQoZHJhZ2dhYmxlKVxuICB9XG5cbiAgYWRkVGFyZ2V0KHRhcmdldCkge1xuICAgIHRoaXMudGFyZ2V0cy5wdXNoKHRhcmdldClcbiAgfVxuXG4gIG9uRW5kKGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IHNob3RUYXJnZXRzID0gdGhpcy50YXJnZXRzLmZpbHRlcigodGFyZ2V0KSA9PiB7XG4gICAgICByZXR1cm4gdGFyZ2V0LmRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMVxuICAgIH0pLmZpbHRlcigodGFyZ2V0KSA9PiB7XG4gICAgICByZXR1cm4gdGFyZ2V0LmNhdGNoRHJhZ2dhYmxlKGRyYWdnYWJsZSlcbiAgICB9KS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICByZXR1cm4gYS5nZXRSZWN0YW5nbGUoKS5nZXRTcXVhcmUoKSAtIGIuZ2V0UmVjdGFuZ2xlKCkuZ2V0U3F1YXJlKClcbiAgICB9KVxuXG4gICAgaWYgKHNob3RUYXJnZXRzLmxlbmd0aCkge1xuICAgICAgc2hvdFRhcmdldHNbMF0ub25FbmQoZHJhZ2dhYmxlKVxuICAgIH0gZWxzZSBpZiAoZHJhZ2dhYmxlLnRhcmdldHMubGVuZ3RoKSB7XG4gICAgICBkcmFnZ2FibGUucGluUG9zaXRpb24oZHJhZ2dhYmxlLmluaXRpYWxQb3NpdGlvbiwgdGhpcy5vcHRpb25zLnRpbWVFbmQpXG4gICAgfVxuXG4gICAgdGhpcy5lbWl0KCdzY29wZTpjaGFuZ2UnKVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy50YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4gdGFyZ2V0LnJlc2V0KCkpXG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5yZWZyZXNoKCkpXG4gICAgdGhpcy50YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4gdGFyZ2V0LnJlZnJlc2goKSlcbiAgfVxuXG4gIGdldCBwb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0cy5tYXAoKHRhcmdldCkgPT4ge1xuICAgICAgcmV0dXJuIHRhcmdldC5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHRoaXMuZHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkpXG4gICAgfSlcbiAgfVxuXG4gIHNldCBwb3NpdGlvbnMocG9zaXRpb25zKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9ICd3cm9uZyBhcnJheSBsZW5ndGgnXG4gICAgaWYgKHBvc2l0aW9ucy5sZW5ndGggPT09IHRoaXMudGFyZ2V0cy5sZW5ndGgpIHtcbiAgICAgIHRoaXMudGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHRhcmdldC5yZXNldCgpKVxuXG4gICAgICBwb3NpdGlvbnMuZm9yRWFjaCgodGFyZ2V0SW5kZXhlcywgaSkgPT4ge1xuICAgICAgICB0YXJnZXRJbmRleGVzLmZvckVhY2goKGluZGV4KSA9PiB7XG4gICAgICAgICAgdGhpcy50YXJnZXRzW2ldLmFkZCh0aGlzLmRyYWdnYWJsZXNbaW5kZXhdKVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbWVzc2FnZVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBkZWZhdWx0U2NvcGUgPSBuZXcgU2NvcGUoKVxuXG5mdW5jdGlvbiBzY29wZShmbikge1xuICBjb25zdCBjdXJyZW50U2NvcGUgPSBuZXcgU2NvcGUoKVxuXG4gIGNvbnN0IGFkZERyYWdnYWJsZVRvU2NvcGUgPSBmdW5jdGlvbihkcmFnZ2FibGUpIHtcbiAgICBjdXJyZW50U2NvcGUuYWRkRHJhZ2dhYmxlKGRyYWdnYWJsZSlcbiAgICBEcmFnZ2FibGUuZW1pdHRlci5pbnRlcnJ1cHQoKVxuICB9XG5cbiAgY29uc3QgYWRkVGFyZ2V0VG9TY29wZSA9IGZ1bmN0aW9uKHRhcmdldCkge1xuICAgIGN1cnJlbnRTY29wZS5hZGRUYXJnZXQodGFyZ2V0KVxuICAgIERyYWdnYWJsZS5lbWl0dGVyLmludGVycnVwdCgpXG4gIH1cblxuICBEcmFnZ2FibGUuZW1pdHRlci5wcmVwZW5kT24oJ2RyYWdnYWJsZTpjcmVhdGUnLCBhZGREcmFnZ2FibGVUb1Njb3BlKVxuICBUYXJnZXQuZW1pdHRlci5wcmVwZW5kT24oJ3RhcmdldDpjcmVhdGUnLCBhZGRUYXJnZXRUb1Njb3BlKVxuICBmbi5jYWxsKClcbiAgRHJhZ2dhYmxlLmVtaXR0ZXIudW5zdWJzY3JpYmUoJ2RyYWdnYWJsZTpjcmVhdGUnLCBhZGREcmFnZ2FibGVUb1Njb3BlKVxuICBUYXJnZXQuZW1pdHRlci51bnN1YnNjcmliZSgndGFyZ2V0OmNyZWF0ZScsIGFkZFRhcmdldFRvU2NvcGUpXG4gIHJldHVybiBjdXJyZW50U2NvcGVcbn1cblxuZXhwb3J0IHsgc2NvcGVzLCBkZWZhdWx0U2NvcGUsIFNjb3BlLCBzY29wZSB9XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0aHJvdHRsZShmdW5jLCB3YWl0KSB7XG4gIGxldCBsYXN0VGltZSA9IDBcblxuICByZXR1cm4gZnVuY3Rpb24gZXhlY3V0ZWRGdW5jdGlvbigpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpc1xuICAgIGNvbnN0IGFyZ3MgPSBhcmd1bWVudHNcblxuICAgIGNvbnN0IG5vdyA9IERhdGUubm93KClcbiAgICBpZiAobm93IC0gbGFzdFRpbWUgPj0gd2FpdCkge1xuICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKVxuICAgICAgbGFzdFRpbWUgPSBub3dcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudEVtaXR0ZXInXG5pbXBvcnQgUG9pbnQgZnJvbSAnLi9nZW9tZXRyeS9wb2ludCdcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSAnLi9nZW9tZXRyeS9yZWN0YW5nbGUnXG5pbXBvcnQgeyBkZWZhdWx0U2NvcGUgfSBmcm9tICcuL3Njb3BlJ1xuaW1wb3J0IHRocm90dGxlIGZyb20gJy4vdXRpbHMvdGhyb3R0bGUnXG5pbXBvcnQgZ2V0UGFyZW50c0NoYWluIGZyb20gJy4vdXRpbHMvZ2V0LXBhcmVudHMtY2hhaW4nXG5cbmNvbnN0IHRocm90dGxlZERyYWdPdmVyID0gKGNhbGxiYWNrLCBkdXJhdGlvbikgPT4ge1xuICBjb25zdCB0aHJvdHRsZWRDYWxsYmFjayA9IHRocm90dGxlKChldmVudCkgPT4gY2FsbGJhY2soZXZlbnQpLCBkdXJhdGlvbilcbiAgcmV0dXJuIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB0aHJvdHRsZWRDYWxsYmFjayhldmVudClcbiAgfVxufVxuXG5jb25zdCBwYXNzaXZlRmFsc2UgPSB7IHBhc3NpdmU6IGZhbHNlIH1cblxuY29uc3QgaXNUb3VjaCA9IG5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyA+IDBcbmNvbnN0IG1vdXNlRXZlbnRzID0ge1xuICBzdGFydDogJ21vdXNlZG93bicsXG4gIG1vdmU6ICdtb3VzZW1vdmUnLFxuICBlbmQ6ICdtb3VzZXVwJ1xufVxuY29uc3QgdG91Y2hFdmVudHMgPSB7XG4gIHN0YXJ0OiAndG91Y2hzdGFydCcsXG4gIG1vdmU6ICd0b3VjaG1vdmUnLFxuICBlbmQ6ICd0b3VjaGVuZCdcbn1cbmNvbnN0IGRyYWdnYWJsZXMgPSBbXVxuY29uc3QgdHJhbnNmb3JtUHJvcGVydHkgPSAndHJhbnNmb3JtJ1xuY29uc3QgdHJhbnNpdGlvblByb3BlcnR5ID0gJ3RyYW5zaXRpb24nXG5cbmZ1bmN0aW9uIGdldFRvdWNoQnlJRChlbGVtZW50LCB0b3VjaElkKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudC5jaGFuZ2VkVG91Y2hlcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChlbGVtZW50LmNoYW5nZWRUb3VjaGVzW2ldLmlkZW50aWZpZXIgPT09IHRvdWNoSWQpIHtcbiAgICAgIHJldHVybiBlbGVtZW50LmNoYW5nZWRUb3VjaGVzW2ldXG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZVxufVxuXG5mdW5jdGlvbiBwcmV2ZW50RG91YmxlSW5pdChkcmFnZ2FibGUpIHtcbiAgY29uc3QgbWVzc2FnZSA9IFwiZm9yIHRoaXMgZWxlbWVudCBEcmFnZWUuRHJhZ2dhYmxlIGlzIGFscmVhZHkgZXhpc3QsIGRvbid0IGNyZWF0ZSBpdCB0d2ljZSBcIlxuICBpZiAoZHJhZ2dhYmxlcy5zb21lKChleGlzdGluZykgPT4gZHJhZ2dhYmxlLmVsZW1lbnQgPT09IGV4aXN0aW5nLmVsZW1lbnQpKSB7XG4gICAgdGhyb3cgbWVzc2FnZVxuICB9XG4gIGRyYWdnYWJsZXMucHVzaChkcmFnZ2FibGUpXG59XG5cbmZ1bmN0aW9uIGFkZFRvRGVmYXVsdFNjb3BlKGRyYWdnYWJsZSkge1xuICBkZWZhdWx0U2NvcGUuYWRkRHJhZ2dhYmxlKGRyYWdnYWJsZSlcbn1cblxuZnVuY3Rpb24gY29weVN0eWxlcyhzb3VyY2UsIGRlc3RpbmF0aW9uKSB7XG4gIGNvbnN0IGNzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoc291cmNlKVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY3MubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBrZXkgPSBjc1tpXVxuICAgIGlmICgoa2V5LmluZGV4T2YoJ3RyYW5zaXRpb24nKSA8IDApICYmIChrZXkuaW5kZXhPZigndHJhbnNmb3JtJykgPCAwKSkge1xuICAgICAgZGVzdGluYXRpb24uc3R5bGVba2V5XSA9IGNzW2tleV1cbiAgICB9XG4gIH1cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNvdXJjZS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgIGNvcHlTdHlsZXMoc291cmNlLmNoaWxkcmVuW2ldLCBkZXN0aW5hdGlvbi5jaGlsZHJlbltpXSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcmFnZ2FibGUgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBvcHRpb25zPXt9KSB7XG4gICAgc3VwZXIob3B0aW9ucylcbiAgICB0aGlzLnRhcmdldHMgPSBbXVxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG4gICAgcHJldmVudERvdWJsZUluaXQodGhpcylcbiAgICBEcmFnZ2FibGUuZW1pdHRlci5lbWl0KCdkcmFnZ2FibGU6Y3JlYXRlJywgdGhpcylcbiAgICB0aGlzLl9lbmFibGUgPSB0cnVlXG4gICAgdGhpcy5zdGFydEJvdW5kaW5nKClcbiAgICB0aGlzLnN0YXJ0UG9zaXRpb25pbmcoKVxuICAgIHRoaXMuc3RhcnRMaXN0ZW5pbmcoKVxuICB9XG5cbiAgc3RhcnRCb3VuZGluZygpIHtcbiAgICB0aGlzLmJvdW5kaW5nID0gdGhpcy5vcHRpb25zLmJvdW5kaW5nIHx8IHtcbiAgICAgIGJvdW5kOiB0aGlzLm9wdGlvbnMuYm91bmQgfHwgKChwb2ludCkgPT4gcG9pbnQpXG4gICAgfVxuICB9XG5cbiAgc3RhcnRQb3NpdGlvbmluZygpIHtcbiAgICB0aGlzLl9zZXREZWZhdWx0VHJhbnNpdGlvbigpXG4gICAgdGhpcy5vZmZzZXQgPSB0aGlzLmlzQ29uc2lkZXJUcmFuc2Zvcm1PZmZzZXRcbiAgICAgID8gUG9pbnQuZWxlbWVudEJvdW5kaW5nT2Zmc2V0KHRoaXMuZWxlbWVudCwgdGhpcy5jb250YWluZXIpXG4gICAgICA6IFBvaW50LmVsZW1lbnRPZmZzZXQodGhpcy5lbGVtZW50LCB0aGlzLmNvbnRhaW5lcilcbiAgICB0aGlzLnBpbm5lZFBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICB0aGlzLmluaXRpYWxQb3NpdGlvbiA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbiB8fCB0aGlzLm9mZnNldFxuXG4gICAgdGhpcy5waW5Qb3NpdGlvbih0aGlzLmluaXRpYWxQb3NpdGlvbilcblxuICAgIGlmICh0aGlzLmJvdW5kaW5nLnJlZnJlc2gpIHtcbiAgICAgIHRoaXMuYm91bmRpbmcucmVmcmVzaCgpXG4gICAgfVxuICB9XG5cbiAgc3RhcnRMaXN0ZW5pbmcoKSB7XG4gICAgdGhpcy5fZHJhZ1N0YXJ0ID0gKGV2ZW50KSA9PiB0aGlzLmRyYWdTdGFydChldmVudClcbiAgICB0aGlzLl9kcmFnTW92ZSA9IChldmVudCkgPT4gdGhpcy5kcmFnTW92ZShldmVudClcbiAgICB0aGlzLl9kcmFnRW5kID0gKGV2ZW50KSA9PiB0aGlzLmRyYWdFbmQoZXZlbnQpXG4gICAgdGhpcy5fbmF0aXZlRHJhZ1N0YXJ0ID0gKGV2ZW50KSA9PiB0aGlzLm5hdGl2ZURyYWdTdGFydChldmVudClcbiAgICB0aGlzLl9uYXRpdmVEcmFnT3ZlciA9IHRocm90dGxlZERyYWdPdmVyKChldmVudCkgPT4gdGhpcy5uYXRpdmVEcmFnT3ZlcihldmVudCksIHRoaXMuZHJhZ092ZXJUaHJvdHRsZUR1cmF0aW9uKVxuICAgIHRoaXMuX25hdGl2ZURyYWdFbmQgPSAoZXZlbnQpID0+IHRoaXMubmF0aXZlRHJhZ0VuZChldmVudClcbiAgICB0aGlzLl9uYXRpdmVEcm9wID0gKGV2ZW50KSA9PiB0aGlzLm5hdGl2ZURyb3AoZXZlbnQpXG4gICAgdGhpcy5fc2Nyb2xsID0gKGV2ZW50KSA9PiB0aGlzLm9uU2Nyb2xsKGV2ZW50KVxuXG4gICAgdGhpcy5oYW5kbGVyLmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydCwgcGFzc2l2ZUZhbHNlKVxuICAgIHRoaXMuaGFuZGxlci5hZGRFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQsIHBhc3NpdmVGYWxzZSlcbiAgfVxuXG4gIGdldFNpemUoKSB7XG4gICAgcmV0dXJuIFBvaW50LmVsZW1lbnRTaXplKHRoaXMuZWxlbWVudClcbiAgfVxuXG4gIGdldFBvc2l0aW9uKCkge1xuICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLm9mZnNldC5hZGQodGhpcy5fdHJhbnNmb3JtUG9zaXRpb24gfHwgbmV3IFBvaW50KDAsIDApKVxuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uXG4gIH1cblxuICBnZXRDZW50ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb24uYWRkKHRoaXMuZ2V0U2l6ZSgpLm11bHQoMC41KSlcbiAgfVxuXG4gIF9zZXREZWZhdWx0VHJhbnNpdGlvbiAoKSB7XG4gICAgaWYgKCF0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNpdGlvblByb3BlcnR5XSkge1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV0gPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsZW1lbnQpW3RyYW5zaXRpb25Qcm9wZXJ0eV1cbiAgICB9XG4gIH1cblxuICBfc2V0VHJhbnNpdGlvbih0aW1lKSB7XG4gICAgbGV0IHRyYW5zaXRpb24gPSB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNpdGlvblByb3BlcnR5XVxuICAgIGNvbnN0IHRyYW5zaXRpb25Dc3MgPSBgdHJhbnNmb3JtICR7dGltZX1tc2BcblxuICAgIGlmICghL3RyYW5zZm9ybVxccz9cXGQqbT9zPy8udGVzdCh0cmFuc2l0aW9uKSkge1xuICAgICAgaWYgKHRyYW5zaXRpb24pIHtcbiAgICAgICAgdHJhbnNpdGlvbiArPSBgLCAke3RyYW5zaXRpb25Dc3N9YFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJhbnNpdGlvbiA9IHRyYW5zaXRpb25Dc3NcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdHJhbnNpdGlvbiA9IHRyYW5zaXRpb24ucmVwbGFjZSgvdHJhbnNmb3JtXFxzP1xcZCptP3M/L2csIHRyYW5zaXRpb25Dc3MpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldICE9PSB0cmFuc2l0aW9uKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNpdGlvblByb3BlcnR5XSA9IHRyYW5zaXRpb25cbiAgICB9XG4gIH1cblxuICBfc2V0VHJhbnNsYXRlKHBvaW50KSB7XG4gICAgdGhpcy5fdHJhbnNmb3JtUG9zaXRpb24gPSBwb2ludFxuICAgIGNvbnN0IHRyYW5zbGF0ZUNzcyA9IGB0cmFuc2xhdGUzZCgke3BvaW50Lnh9cHgsICR7cG9pbnQueX1weCwgMHB4KWBcblxuICAgIGxldCB0cmFuc2Zvcm0gPSB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcGVydHldXG5cbiAgICBpZiAodGhpcy5zaG91bGRSZW1vdmVaZXJvVHJhbnNsYXRlICYmIHBvaW50LnggPT09IDAgJiYgcG9pbnQueSA9PT0gMCkge1xuICAgICAgdHJhbnNmb3JtID0gdHJhbnNmb3JtLnJlcGxhY2UoL3RyYW5zbGF0ZTNkXFwoW14pXStcXCkvLCAnJylcbiAgICB9IGVsc2UgaWYgKCEvdHJhbnNsYXRlM2RcXChbXildK1xcKS8udGVzdCh0cmFuc2Zvcm0pKSB7XG4gICAgICBpZiAodHJhbnNmb3JtKSB7XG4gICAgICAgIHRyYW5zZm9ybSArPSAnICdcbiAgICAgIH1cbiAgICAgIHRyYW5zZm9ybSArPSB0cmFuc2xhdGVDc3NcbiAgICB9IGVsc2Uge1xuICAgICAgdHJhbnNmb3JtID0gdHJhbnNmb3JtLnJlcGxhY2UoL3RyYW5zbGF0ZTNkXFwoW14pXStcXCkvLCB0cmFuc2xhdGVDc3MpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wZXJ0eV0gIT09IHRyYW5zZm9ybSkge1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BlcnR5XSA9IHRyYW5zZm9ybVxuICAgIH1cbiAgfVxuXG4gIG1vdmUocG9pbnQsIHRpbWU9MCwgaXNTaWxlbnQ9ZmFsc2UpIHtcbiAgICBwb2ludCA9IHBvaW50LmNsb25lKClcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9pbnRcblxuICAgIHRoaXMuX3NldFRyYW5zaXRpb24odGltZSlcbiAgICB0aGlzLl9zZXRUcmFuc2xhdGUocG9pbnQuc3ViKHRoaXMub2Zmc2V0KSlcblxuICAgIGlmICghaXNTaWxlbnQpIHtcbiAgICAgIHRoaXMuZW1pdCgnZHJhZzptb3ZlJylcbiAgICB9XG4gIH1cblxuICBwaW5Qb3NpdGlvbihwb2ludCwgdGltZT0wLCBzaWxlbnQ9dHJ1ZSkge1xuICAgIHRoaXMucGlubmVkUG9zaXRpb24gPSBwb2ludC5jbG9uZSgpXG4gICAgdGhpcy5tb3ZlKHRoaXMucGlubmVkUG9zaXRpb24sIHRpbWUsIHNpbGVudClcbiAgfVxuXG4gIHJlc2V0UG9zaXRpb25Ub0luaXRpYWwgKCkge1xuICAgIHRoaXMucGluUG9zaXRpb24odGhpcy5pbml0aWFsUG9zaXRpb24pXG4gIH1cblxuICByZWZyZXNoUG9zaXRpb24gKCkge1xuICAgIHRoaXMuc2V0UG9zaXRpb24odGhpcy5nZXRQb3NpdGlvbigpKVxuICB9XG5cbiAgc2V0UG9zaXRpb24ocG9pbnQpIHtcbiAgICBwb2ludCA9IHBvaW50LmNsb25lKClcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9pbnRcbiAgICB0aGlzLl9zZXRUcmFuc2l0aW9uKDApXG4gICAgdGhpcy5fc2V0VHJhbnNsYXRlKHBvaW50LnN1Yih0aGlzLm9mZnNldCkpXG4gIH1cblxuICBkZXRlcm1pbmVEaXJlY3Rpb24ocG9pbnQpIHtcbiAgICB0aGlzLl9wcmV2aW91c0RpcmVjdGlvblBvc2l0aW9uIHx8PSB0aGlzLl9zdGFydFBvc2l0aW9uXG5cbiAgICB0aGlzLmxlZnREaXJlY3Rpb24gPSAodGhpcy5fcHJldmlvdXNEaXJlY3Rpb25Qb3NpdGlvbi54ID4gcG9pbnQueClcbiAgICB0aGlzLnJpZ2h0RGlyZWN0aW9uID0gKHRoaXMuX3ByZXZpb3VzRGlyZWN0aW9uUG9zaXRpb24ueCA8IHBvaW50LngpXG4gICAgdGhpcy51cERpcmVjdGlvbiA9ICh0aGlzLl9wcmV2aW91c0RpcmVjdGlvblBvc2l0aW9uLnkgPiBwb2ludC55KVxuICAgIHRoaXMuZG93bkRpcmVjdGlvbiA9ICh0aGlzLl9wcmV2aW91c0RpcmVjdGlvblBvc2l0aW9uLnkgPCBwb2ludC55KVxuXG4gICAgdGhpcy5fcHJldmlvdXNEaXJlY3Rpb25Qb3NpdGlvbiA9IHBvaW50XG4gIH1cblxuICBzZWVtc1Njcm9sbGluZygpIHtcbiAgICByZXR1cm4gKCtuZXcgRGF0ZSgpIC0gdGhpcy5fc3RhcnRUb3VjaFRpbWVzdGFtcCkgPCB0aGlzLnRvdWNoRHJhZ2dpbmdUaHJlc2hvbGRcbiAgfVxuXG4gIHNob3VsZFVzZU5hdGl2ZURyYWdBbmREcm9wKCkge1xuICAgIGlmICh0aGlzLmlzVG91Y2hFdmVudCkge1xuICAgICAgcmV0dXJuIHRoaXMubmF0aXZlRHJhZ0FuZERyb3AgJiYgdGhpcy5lbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3BPblRvdWNoXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLm5hdGl2ZURyYWdBbmREcm9wXG4gICAgfVxuICB9XG5cbiAgZHJhZ1N0YXJ0KGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLl9lbmFibGUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLnN0b3BQcm9wYWdhdGlvbk9uRHJhZ1N0YXJ0KSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIH1cblxuICAgIHRoaXMuaXNUb3VjaEV2ZW50ID0gKGlzVG91Y2ggJiYgKGV2ZW50IGluc3RhbmNlb2Ygd2luZG93LlRvdWNoRXZlbnQpKVxuXG4gICAgdGhpcy50b3VjaFBvaW50ID0gdGhpcy5fc3RhcnRUb3VjaFBvaW50ID0gbmV3IFBvaW50KFxuICAgICAgdGhpcy5pc1RvdWNoRXZlbnQgPyBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCA6IGV2ZW50LmNsaWVudFgsXG4gICAgICB0aGlzLmlzVG91Y2hFdmVudCA/IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZIDogZXZlbnQuY2xpZW50WVxuICAgIClcblxuICAgIHRoaXMuX3N0YXJ0UG9zaXRpb24gPSB0aGlzLmdldFBvc2l0aW9uKClcbiAgICBpZiAodGhpcy5pc1RvdWNoRXZlbnQpIHtcbiAgICAgIHRoaXMuX3RvdWNoSWQgPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5pZGVudGlmaWVyXG4gICAgICB0aGlzLl9zdGFydFRvdWNoVGltZXN0YW1wID0gK25ldyBEYXRlKClcbiAgICB9XG5cbiAgICB0aGlzLl9zdGFydFdpbmRvd1Njcm9sbFBvaW50ID0gdGhpcy53aW5kb3dTY3JvbGxQb2ludFxuICAgIHRoaXMuX3N0YXJ0U2Nyb2xsRWxlbWVudHNPZmZzZXQgPSB0aGlzLnNjcm9sbEVsZW1lbnRzT2Zmc2V0XG5cbiAgICBpZiAoZXZlbnQudGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJbnB1dEVsZW1lbnQgfHxcbiAgICAgICAgICBldmVudC50YXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElucHV0RWxlbWVudCkge1xuICAgICAgZXZlbnQudGFyZ2V0LmZvY3VzKClcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zaG91bGRVc2VOYXRpdmVEcmFnQW5kRHJvcCgpKSB7XG4gICAgICBpZiAodGhpcy5pc1RvdWNoRXZlbnQgJiYgdGhpcy5lbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3BPblRvdWNoKSB7XG4gICAgICAgIHRoaXMuX3N0YXJ0UGFyZW50c1Njcm9sbE9mZnNldCA9IHRoaXMucGFyZW50c1Njcm9sbE9mZnNldFxuXG4gICAgICAgIGNvbnN0IGVtdWxhdGVPbkZpcnN0TW92ZSA9IChldmVudCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLnNlZW1zU2Nyb2xsaW5nKCkpIHtcbiAgICAgICAgICAgIHRoaXMuY2FuY2VsRHJhZ2dpbmcoKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcChldmVudClcbiAgICAgICAgICB9XG4gICAgICAgICAgY2FuY2VsRW11bGF0aW9uKClcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjYW5jZWxFbXVsYXRpb24gPSAoKSA9PiB7XG4gICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCBlbXVsYXRlT25GaXJzdE1vdmUpXG4gICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIGNhbmNlbEVtdWxhdGlvbilcbiAgICAgICAgfVxuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgZW11bGF0ZU9uRmlyc3RNb3ZlLCBwYXNzaXZlRmFsc2UpXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCBjYW5jZWxFbXVsYXRpb24sIHBhc3NpdmVGYWxzZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCB0aGlzLl9uYXRpdmVEcmFnU3RhcnQpXG4gICAgICAgIHRoaXMuZWxlbWVudC5kcmFnZ2FibGUgPSB0cnVlXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9uYXRpdmVEcmFnRW5kLCBwYXNzaXZlRmFsc2UpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUsIHBhc3NpdmVGYWxzZSlcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUsIHBhc3NpdmVGYWxzZSlcblxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQsIHBhc3NpdmVGYWxzZSlcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kLCBwYXNzaXZlRmFsc2UpXG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX3Njcm9sbClcbiAgICB0aGlzLnNjcm9sbEVsZW1lbnRzLmZvckVhY2goKHApID0+IHAuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fc2Nyb2xsKSlcblxuICAgIGlmICghdGhpcy5zaG91bGRVc2VOYXRpdmVEcmFnQW5kRHJvcCgpICYmIHRoaXMuZHJhZ1N0YXJ0VGhyZXNob2xkID4gMCkge1xuICAgICAgdGhpcy5fZHJhZ1N0YXJ0UGVuZGluZyA9IHRydWVcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbWl0KCdkcmFnOnN0YXJ0JylcbiAgICB9XG4gIH1cblxuICBkcmFnTW92ZShldmVudCkge1xuICAgIGxldCB0b3VjaFxuXG4gICAgdGhpcy5pc1RvdWNoRXZlbnQgPSAoaXNUb3VjaCAmJiAoZXZlbnQgaW5zdGFuY2VvZiB3aW5kb3cuVG91Y2hFdmVudCkpXG4gICAgaWYgKHRoaXMuaXNUb3VjaEV2ZW50KSB7XG4gICAgICB0b3VjaCA9IGdldFRvdWNoQnlJRChldmVudCwgdGhpcy5fdG91Y2hJZClcblxuICAgICAgaWYgKCF0b3VjaCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuc2VlbXNTY3JvbGxpbmcoKSkge1xuICAgICAgICB0aGlzLmNhbmNlbERyYWdnaW5nKClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy50b3VjaFBvaW50ID0gbmV3IFBvaW50KFxuICAgICAgdGhpcy5pc1RvdWNoRXZlbnQgPyB0b3VjaC5wYWdlWCA6IGV2ZW50LmNsaWVudFgsXG4gICAgICB0aGlzLmlzVG91Y2hFdmVudCA/IHRvdWNoLnBhZ2VZIDogZXZlbnQuY2xpZW50WVxuICAgIClcblxuICAgIGlmICh0aGlzLl9kcmFnU3RhcnRQZW5kaW5nKSB7XG4gICAgICBjb25zdCBkeCA9IHRoaXMudG91Y2hQb2ludC54IC0gdGhpcy5fc3RhcnRUb3VjaFBvaW50LnhcbiAgICAgIGNvbnN0IGR5ID0gdGhpcy50b3VjaFBvaW50LnkgLSB0aGlzLl9zdGFydFRvdWNoUG9pbnQueVxuICAgICAgaWYgKE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSkgPCB0aGlzLmRyYWdTdGFydFRocmVzaG9sZCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHRoaXMuX2RyYWdTdGFydFBlbmRpbmcgPSBmYWxzZVxuICAgICAgdGhpcy5lbWl0KCdkcmFnOnN0YXJ0JylcbiAgICB9XG5cbiAgICB0aGlzLmlzRHJhZ2dpbmcgPSB0cnVlXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICBsZXQgcG9pbnQgPSB0aGlzLl9zdGFydFBvc2l0aW9uLmFkZCh0aGlzLnRvdWNoUG9pbnQuc3ViKHRoaXMuX3N0YXJ0VG91Y2hQb2ludCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy53aW5kb3dTY3JvbGxQb2ludC5zdWIodGhpcy5fc3RhcnRXaW5kb3dTY3JvbGxQb2ludCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy5zY3JvbGxFbGVtZW50c09mZnNldC5zdWIodGhpcy5fc3RhcnRTY3JvbGxFbGVtZW50c09mZnNldCkpXG5cbiAgICBwb2ludCA9IHRoaXMuYm91bmRpbmcuYm91bmQocG9pbnQsIHRoaXMuZ2V0U2l6ZSgpKVxuICAgIHRoaXMuZGV0ZXJtaW5lRGlyZWN0aW9uKHBvaW50KVxuICAgIHRoaXMubW92ZShwb2ludClcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZHJhZ2VlLWFjdGl2ZScpXG4gIH1cblxuICBkcmFnRW5kKGV2ZW50KSB7XG4gICAgdGhpcy5pc1RvdWNoRXZlbnQgPSAoaXNUb3VjaCAmJiAoZXZlbnQgaW5zdGFuY2VvZiB3aW5kb3cuVG91Y2hFdmVudCkpXG5cbiAgICBpZiAodGhpcy5pc1RvdWNoRXZlbnQgJiYgIWdldFRvdWNoQnlJRChldmVudCwgdGhpcy5fdG91Y2hJZCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLl9kcmFnU3RhcnRQZW5kaW5nKSB7XG4gICAgICAvLyB0aHJlc2hvbGQgbmV2ZXIgY3Jvc3NlZCDigJQgdHJlYXQgYXMgY2xpY2ssIGNsZWFuIHVwIHNpbGVudGx5XG4gICAgICB0aGlzLl9kcmFnU3RhcnRQZW5kaW5nID0gZmFsc2VcbiAgICAgIHRoaXMuY2FuY2VsRHJhZ2dpbmcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNEcmFnZ2luZykge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB9XG5cbiAgICB0aGlzLmRyYWdFbmRBY3Rpb24oKVxuICAgIHRoaXMuZW1pdCgnZHJhZzplbmQnKVxuICAgIHRoaXMuY2FuY2VsRHJhZ2dpbmcoKVxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2VlLWFjdGl2ZScpKVxuICB9XG5cbiAgb25TY3JvbGwoX2V2ZW50KSB7XG4gICAgbGV0IHBvaW50ID0gdGhpcy5fc3RhcnRQb3NpdGlvbi5hZGQodGhpcy50b3VjaFBvaW50LnN1Yih0aGlzLl9zdGFydFRvdWNoUG9pbnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMud2luZG93U2Nyb2xsUG9pbnQuc3ViKHRoaXMuX3N0YXJ0V2luZG93U2Nyb2xsUG9pbnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMuc2Nyb2xsRWxlbWVudHNPZmZzZXQuc3ViKHRoaXMuX3N0YXJ0U2Nyb2xsRWxlbWVudHNPZmZzZXQpKVxuXG4gICAgcG9pbnQgPSB0aGlzLmJvdW5kaW5nLmJvdW5kKHBvaW50LCB0aGlzLmdldFNpemUoKSlcbiAgICBpZiAoIXRoaXMubmF0aXZlRHJhZ0FuZERyb3ApIHtcbiAgICAgIHRoaXMuZGV0ZXJtaW5lRGlyZWN0aW9uKHBvaW50KVxuICAgICAgdGhpcy5tb3ZlKHBvaW50KVxuICAgIH1cbiAgfVxuXG4gIG5hdGl2ZURyYWdTdGFydChldmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQnLCAnRmlyZUZveCBmaXgnKVxuICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gJ21vdmUnXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCB0aGlzLl9uYXRpdmVEcmFnT3ZlcilcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgdGhpcy5fbmF0aXZlRHJvcClcbiAgfVxuXG4gIG5hdGl2ZURyYWdPdmVyKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gJ21vdmUnXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RyYWdlZS1wbGFjZWhvbGRlcicpXG4gICAgaWYgKGV2ZW50LmNsaWVudFggPT09IDAgJiYgZXZlbnQuY2xpZW50WSA9PT0gMCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy50b3VjaFBvaW50ID0gbmV3IFBvaW50KGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpXG4gICAgbGV0IHBvaW50ID0gdGhpcy5fc3RhcnRQb3NpdGlvbi5hZGQodGhpcy50b3VjaFBvaW50LnN1Yih0aGlzLl9zdGFydFRvdWNoUG9pbnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMud2luZG93U2Nyb2xsUG9pbnQuc3ViKHRoaXMuX3N0YXJ0V2luZG93U2Nyb2xsUG9pbnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMuc2Nyb2xsRWxlbWVudHNPZmZzZXQuc3ViKHRoaXMuX3N0YXJ0U2Nyb2xsRWxlbWVudHNPZmZzZXQpKVxuICAgIHBvaW50ID0gdGhpcy5ib3VuZGluZy5ib3VuZChwb2ludCwgdGhpcy5nZXRTaXplKCkpXG4gICAgdGhpcy5kZXRlcm1pbmVEaXJlY3Rpb24ocG9pbnQpXG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvaW50XG4gICAgdGhpcy5lbWl0KCdkcmFnOm1vdmUnKVxuICB9XG5cbiAgbmF0aXZlRHJhZ0VuZChfZXZlbnQpIHtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2VlLXBsYWNlaG9sZGVyJylcbiAgICB0aGlzLmRyYWdFbmRBY3Rpb24oKVxuICAgIHRoaXMuZW1pdCgnZHJhZzplbmQnKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgdGhpcy5fbmF0aXZlRHJhZ092ZXIpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIHRoaXMuX25hdGl2ZURyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX25hdGl2ZURyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJvcCcsIHRoaXMuX25hdGl2ZURyb3ApXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX3Njcm9sbClcbiAgICB0aGlzLnNjcm9sbEVsZW1lbnRzLmZvckVhY2goKHApID0+IHAucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fc2Nyb2xsKSlcbiAgICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZVxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2RyYWdnYWJsZScpXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIHRoaXMuX25hdGl2ZURyYWdTdGFydClcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2VlLWFjdGl2ZScpXG4gIH1cblxuICBuYXRpdmVEcm9wKGV2ZW50KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBjYW5jZWxEcmFnZ2luZyAoKSB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG5cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fbmF0aXZlRHJhZ0VuZClcblxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9zY3JvbGwpXG4gICAgdGhpcy5zY3JvbGxFbGVtZW50cy5mb3JFYWNoKChwKSA9PiBwLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX3Njcm9sbCkpXG5cbiAgICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZVxuICAgIHRoaXMuX3ByZXZpb3VzRGlyZWN0aW9uUG9zaXRpb24gPSBudWxsXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnZHJhZ2dhYmxlJylcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgdGhpcy5fbmF0aXZlRHJhZ1N0YXJ0KVxuICB9XG5cbiAgY29weVN0eWxlcyhzb3VyY2UsIGRlc3RpbmF0aW9uKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5jb3B5U3R5bGVzKSB7XG4gICAgICB0aGlzLm9wdGlvbnMuY29weVN0eWxlcyhzb3VyY2UsIGRlc3RpbmF0aW9uKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb3B5U3R5bGVzKHNvdXJjZSwgZGVzdGluYXRpb24pXG4gICAgfVxuICB9XG5cbiAgZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wKGV2ZW50KSB7XG4gICAgY29uc3QgY29udGFpbmVyUmVjdCA9IHRoaXMuY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgY29uc3QgY2xvbmVkRWxlbWVudCA9IHRoaXMuZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSlcbiAgICBjbG9uZWRFbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BlcnR5XSA9ICcnXG4gICAgdGhpcy5jb3B5U3R5bGVzKHRoaXMuZWxlbWVudCwgY2xvbmVkRWxlbWVudClcbiAgICBjbG9uZWRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RyYWdlZS1uYXRpdmUtZW11bGF0aW9uJylcbiAgICBjbG9uZWRFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJ1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2xvbmVkRWxlbWVudClcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZHJhZ2VlLXBsYWNlaG9sZGVyJylcblxuICAgIGNvbnN0IGVtdWxhdGlvbkRyYWdnYWJsZSA9IG5ldyBEcmFnZ2FibGUoY2xvbmVkRWxlbWVudCwge1xuICAgICAgY29udGFpbmVyOiBkb2N1bWVudC5ib2R5LFxuICAgICAgdG91Y2hEcmFnZ2luZ1RocmVzaG9sZDogMCxcbiAgICAgIGJvdW5kKHBvaW50KSB7XG4gICAgICAgIHJldHVybiBwb2ludFxuICAgICAgfSxcbiAgICAgIG9uOiB7XG4gICAgICAgICdkcmFnOm1vdmUnOiAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgY29udGFpbmVyUmVjdFBvaW50ID0gbmV3IFBvaW50KGNvbnRhaW5lclJlY3QubGVmdCwgY29udGFpbmVyUmVjdC50b3ApXG4gICAgICAgICAgdGhpcy5wb3NpdGlvbiA9IGVtdWxhdGlvbkRyYWdnYWJsZS5wb3NpdGlvbi5zdWIoY29udGFpbmVyUmVjdFBvaW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3ViKHRoaXMuX3N0YXJ0V2luZG93U2Nyb2xsUG9pbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy5fc3RhcnRQYXJlbnRzU2Nyb2xsT2Zmc2V0KVxuXG4gICAgICAgICAgdGhpcy5kZXRlcm1pbmVEaXJlY3Rpb24odGhpcy5wb3NpdGlvbilcbiAgICAgICAgICB0aGlzLmVtaXQoJ2RyYWc6bW92ZScpXG4gICAgICAgIH0sXG4gICAgICAgICdkcmFnOmVuZCc6ICgpID0+IHtcbiAgICAgICAgICBlbXVsYXRpb25EcmFnZ2FibGUuZGVzdHJveSgpXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChjbG9uZWRFbGVtZW50KVxuICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZWUtcGxhY2Vob2xkZXInKVxuICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZWUtYWN0aXZlJylcblxuICAgICAgICAgIHRoaXMuZW1pdCgnZHJhZzplbmQnKVxuICAgICAgICAgIHRoaXMuZHJhZ0VuZEFjdGlvbigpXG4gICAgICAgICAgdGhpcy5jYW5jZWxEcmFnZ2luZygpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgY29udGFpbmVyUmVjdFBvaW50ID0gbmV3IFBvaW50KGNvbnRhaW5lclJlY3QubGVmdCwgY29udGFpbmVyUmVjdC50b3ApXG4gICAgZW11bGF0aW9uRHJhZ2dhYmxlLl9zdGFydFdpbmRvd1Njcm9sbFBvaW50ID0gdGhpcy5fc3RhcnRXaW5kb3dTY3JvbGxQb2ludFxuXG4gICAgZW11bGF0aW9uRHJhZ2dhYmxlLm1vdmUoXG4gICAgICB0aGlzLnBpbm5lZFBvc2l0aW9uLmFkZChjb250YWluZXJSZWN0UG9pbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgLmFkZCh0aGlzLndpbmRvd1Njcm9sbFBvaW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgIC5zdWIodGhpcy5wYXJlbnRzU2Nyb2xsT2Zmc2V0KVxuICAgIClcblxuICAgIGVtdWxhdGlvbkRyYWdnYWJsZS5kcmFnU3RhcnQoZXZlbnQpXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgZHJhZ0VuZEFjdGlvbigpIHtcbiAgICB0aGlzLnBpblBvc2l0aW9uKHRoaXMucG9zaXRpb24pXG4gIH1cblxuICBnZXRSZWN0YW5nbGUoKSB7XG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUodGhpcy5wb3NpdGlvbiwgdGhpcy5nZXRTaXplKCkpXG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIGlmICh0aGlzLmJvdW5kaW5nLnJlZnJlc2gpIHtcbiAgICAgIHRoaXMuYm91bmRpbmcucmVmcmVzaCgpXG4gICAgfVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmhhbmRsZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0KVxuICAgIHRoaXMuaGFuZGxlci5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQpXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIHRoaXMuX25hdGl2ZURyYWdTdGFydClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCB0aGlzLl9uYXRpdmVEcmFnT3ZlcilcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcm9wJywgdGhpcy5fbmF0aXZlRHJvcClcbiAgICB0aGlzLnJlc2V0RW1pdHRlcigpXG5cbiAgICBjb25zdCBpbmRleCA9IGRyYWdnYWJsZXMuaW5kZXhPZih0aGlzKVxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICBkcmFnZ2FibGVzLnNwbGljZShpbmRleCwgMSlcbiAgICB9XG4gIH1cblxuICBnZXQgY29udGFpbmVyKCkge1xuICAgIHJldHVybiAodGhpcy5fY29udGFpbmVyID0gdGhpcy5fY29udGFpbmVyIHx8IHRoaXMub3B0aW9ucy5jb250YWluZXIgfHwgdGhpcy5vcHRpb25zLnBhcmVudCB8fCB0aGlzLmVsZW1lbnQub2Zmc2V0UGFyZW50KVxuICB9XG5cbiAgZ2V0IGhhbmRsZXIoKSB7XG4gICAgaWYgKCF0aGlzLl9oYW5kbGVyKSB7XG4gICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5oYW5kbGVyID09PSAnc3RyaW5nJykge1xuICAgICAgICB0aGlzLl9oYW5kbGVyID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5vcHRpb25zLmhhbmRsZXIpIHx8IHRoaXMuZWxlbWVudFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5faGFuZGxlciA9IHRoaXMub3B0aW9ucy5oYW5kbGVyIHx8IHRoaXMuZWxlbWVudFxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9oYW5kbGVyXG4gIH1cblxuICBnZXQgc3RvcFByb3BhZ2F0aW9uT25EcmFnU3RhcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5zdG9wUHJvcGFnYXRpb25PbkRyYWdTdGFydCB8fCBmYWxzZVxuICB9XG5cbiAgZ2V0IG5hdGl2ZURyYWdBbmREcm9wKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMubmF0aXZlRHJhZ0FuZERyb3AgfHwgZmFsc2VcbiAgfVxuXG4gIGdldCBlbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3BPblRvdWNoKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wT25Ub3VjaCB8fCBmYWxzZVxuICB9XG5cbiAgZ2V0IHNob3VsZFJlbW92ZVplcm9UcmFuc2xhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5zaG91bGRSZW1vdmVaZXJvVHJhbnNsYXRlIHx8IGZhbHNlXG4gIH1cblxuICBnZXQgdG91Y2hEcmFnZ2luZ1RocmVzaG9sZCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLnRvdWNoRHJhZ2dpbmdUaHJlc2hvbGQgfHwgMFxuICB9XG5cbiAgZ2V0IGRyYWdTdGFydFRocmVzaG9sZCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmRyYWdTdGFydFRocmVzaG9sZCB8fCAwXG4gIH1cblxuICBnZXQgZHJhZ092ZXJUaHJvdHRsZUR1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZHJhZ092ZXJUaHJvdHRsZUR1cmF0aW9uIHx8IDE2XG4gIH1cblxuICBnZXQgaXNDb25zaWRlclRyYW5zZm9ybU9mZnNldCAoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5jb25zaWRlclRyYW5zZm9ybU9mZnNldCB8fCBmYWxzZVxuICB9XG5cbiAgZ2V0IHdpbmRvd1Njcm9sbFBvaW50KCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQod2luZG93LnNjcm9sbFgsIHdpbmRvdy5zY3JvbGxZKVxuICB9XG5cbiAgZ2V0IHNjcm9sbFJvb3RDb250YWluZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5zY3JvbGxSb290Q29udGFpbmVyIHx8IHRoaXMuY29udGFpbmVyXG4gIH1cblxuICBnZXQgc2Nyb2xsRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhY2hlZFNjcm9sbEVsZW1lbnRzXG4gICAgICA/IHRoaXMuX2NhY2hlZFNjcm9sbEVsZW1lbnRzXG4gICAgICA6ICh0aGlzLl9jYWNoZWRTY3JvbGxFbGVtZW50cyA9IGdldFBhcmVudHNDaGFpbih0aGlzLmVsZW1lbnQsIHRoaXMuc2Nyb2xsUm9vdENvbnRhaW5lcikpXG4gIH1cblxuICBnZXQgc2Nyb2xsRWxlbWVudHNPZmZzZXQoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludChcbiAgICAgIHRoaXMuc2Nyb2xsRWxlbWVudHMucmVkdWNlKChzdW0sIHApID0+IHN1bSArIHAuc2Nyb2xsTGVmdCwgMCksXG4gICAgICB0aGlzLnNjcm9sbEVsZW1lbnRzLnJlZHVjZSgoc3VtLCBwKSA9PiBzdW0gKyBwLnNjcm9sbFRvcCwgMClcbiAgICApXG4gIH1cblxuICBnZXQgcGFyZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5fY2FjaGVkUGFyZW50c1xuICAgICAgPyB0aGlzLl9jYWNoZWRQYXJlbnRzXG4gICAgICA6ICh0aGlzLl9jYWNoZWRQYXJlbnRzID0gZ2V0UGFyZW50c0NoYWluKHRoaXMuZWxlbWVudCwgdGhpcy5jb250YWluZXIpKVxuICB9XG5cbiAgZ2V0IHBhcmVudHNTY3JvbGxPZmZzZXQoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludChcbiAgICAgIHRoaXMucGFyZW50cy5yZWR1Y2UoKHN1bSwgcCkgPT4gc3VtICsgcC5zY3JvbGxMZWZ0LCAwKSxcbiAgICAgIHRoaXMucGFyZW50cy5yZWR1Y2UoKHN1bSwgcCkgPT4gc3VtICsgcC5zY3JvbGxUb3AsIDApXG4gICAgKVxuICB9XG5cbiAgZ2V0IGVuYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlXG4gIH1cblxuICBzZXQgZW5hYmxlKGVuYWJsZSkge1xuICAgIGlmIChlbmFibGUpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZWUtZGlzYWJsZScpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkcmFnZWUtZGlzYWJsZScpXG4gICAgfVxuXG4gICAgdGhpcy5fZW5hYmxlID0gZW5hYmxlXG4gIH1cbn1cblxuRHJhZ2dhYmxlLmVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKClcbkRyYWdnYWJsZS5lbWl0dGVyLm9uKCdkcmFnZ2FibGU6Y3JlYXRlJywgYWRkVG9EZWZhdWx0U2NvcGUpXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0LCBpbW1lZGlhdGUpIHtcbiAgbGV0IHRpbWVvdXRcblxuICByZXR1cm4gZnVuY3Rpb24gZXhlY3V0ZWRGdW5jdGlvbigpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpc1xuICAgIGNvbnN0IGFyZ3MgPSBhcmd1bWVudHNcblxuICAgIGNvbnN0IGxhdGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICB0aW1lb3V0ID0gbnVsbFxuICAgICAgaWYgKCFpbW1lZGlhdGUpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncylcbiAgICB9XG5cbiAgICBjb25zdCBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0XG5cbiAgICBjbGVhclRpbWVvdXQodGltZW91dClcblxuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KVxuXG4gICAgaWYgKGNhbGxOb3cpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncylcbiAgfVxufVxuIiwiaW1wb3J0IGRlYm91bmNlIGZyb20gJy4vdXRpbHMvZGVib3VuY2UnXG5pbXBvcnQgcmVtb3ZlSXRlbSBmcm9tICcuL3V0aWxzL3JlbW92ZS1hcnJheS1pdGVtJ1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50RW1pdHRlcidcbmltcG9ydCB7XG4gIGdldERpc3RhbmNlLFxuICBpbmRleE9mTmVhcmVzdFBvaW50XG59IGZyb20gJy4vZ2VvbWV0cnkvZGlzdGFuY2VzJ1xuXG5pbXBvcnQgRHJhZ2dhYmxlIGZyb20gJy4vZHJhZ2dhYmxlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0IGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoZHJhZ2dhYmxlcywgb3B0aW9ucz17fSkge1xuICAgIHN1cGVyKG9wdGlvbnMpXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICB0aW1lRW5kOiAyMDAsXG4gICAgICB0aW1lRXhjYW5nZTogNDAwLFxuICAgICAgcmFkaXVzOiAzMFxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0aGlzLmNvbnRhaW5lciA9IG9wdGlvbnMuY29udGFpbmVyXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gZHJhZ2dhYmxlc1xuICAgIHRoaXMuY2hhbmdlZER1cmluZ0l0ZXJhdGlvbiA9IGZhbHNlXG4gICAgdGhpcy51bnN1YnNjcmliZXMgPSBuZXcgTWFwKClcblxuICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoZGVib3VuY2UodGhpcy5vblJlc2l6ZS5iaW5kKHRoaXMpLCAxMDApKVxuXG4gICAgaWYgKHRoaXMuY29udGFpbmVyKSB7XG4gICAgICB0aGlzLnJlc2l6ZU9ic2VydmVyLm9ic2VydmUodGhpcy5jb250YWluZXIpXG4gICAgfVxuXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIG9uUmVzaXplKCkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMucmVvcmRlck9uQ2hhbmdlKSB0aGlzLnJlc2V0KClcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBpZighZHJhZ2dhYmxlLmlzRHJhZ2dpbmcpIHtcbiAgICAgICAgZHJhZ2dhYmxlLnN0YXJ0UG9zaXRpb25pbmcoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuX2VuYWJsZSA9IHRydWVcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB0aGlzLmluaXREcmFnZ2FibGUoZHJhZ2dhYmxlKSlcbiAgfVxuXG4gIGluaXREcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgZHJhZ2dhYmxlLmVuYWJsZSA9IHRoaXMuX2VuYWJsZVxuICAgIHRoaXMubGlzdGVuVG8oZHJhZ2dhYmxlLCAnZHJhZzptb3ZlJywgKCkgPT4gdGhpcy5vbk1vdmUoZHJhZ2dhYmxlKSlcbiAgICBkcmFnZ2FibGUuZHJhZ0VuZEFjdGlvbiA9ICgpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5waW5Qb3NpdGlvbihkcmFnZ2FibGUucGlubmVkUG9zaXRpb24sIHRoaXMub3B0aW9ucy50aW1lRW5kKVxuICAgICAgdGhpcy5vbkVuZChkcmFnZ2FibGUpXG4gICAgfVxuICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZShkcmFnZ2FibGUuZWxlbWVudClcbiAgfVxuXG4gIGxpc3RlblRvKGRyYWdnYWJsZSwgZXZlbnROYW1lLCBoYW5kbGVyKSB7XG4gICAgaWYgKCF0aGlzLnVuc3Vic2NyaWJlcy5oYXMoZHJhZ2dhYmxlKSkge1xuICAgICAgdGhpcy51bnN1YnNjcmliZXMuc2V0KGRyYWdnYWJsZSwgW10pXG4gICAgfVxuICAgIHRoaXMudW5zdWJzY3JpYmVzLmdldChkcmFnZ2FibGUpLnB1c2goZHJhZ2dhYmxlLm9uKGV2ZW50TmFtZSwgaGFuZGxlcikpXG4gIH1cblxuICByZWxlYXNlRHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIudW5vYnNlcnZlKGRyYWdnYWJsZS5lbGVtZW50KVxuICAgIHRoaXMudW5zdWJzY3JpYmVzLmdldChkcmFnZ2FibGUpPy5mb3JFYWNoKCh1bnN1YnNjcmliZSkgPT4gdW5zdWJzY3JpYmUoKSlcbiAgICB0aGlzLnVuc3Vic2NyaWJlcy5kZWxldGUoZHJhZ2dhYmxlKVxuICAgIHJlbW92ZUl0ZW0odGhpcy5kcmFnZ2FibGVzLCBkcmFnZ2FibGUpXG4gIH1cblxuICBvbk1vdmUoZHJhZ2dhYmxlKSB7XG4gICAgaWYgKHRoaXMuc3dhcHBpbmdEaXNhYmxlZCkgcmV0dXJuXG5cbiAgICBjb25zdCBzb3J0ZWREcmFnZ2FibGVzID0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcbiAgICBjb25zdCBwaW5uZWRQb3NpdGlvbnMgPSBzb3J0ZWREcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24pXG5cbiAgICBjb25zdCBjdXJyZW50SW5kZXggPSBzb3J0ZWREcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKVxuICAgIGNvbnN0IHRhcmdldEluZGV4ID0gaW5kZXhPZk5lYXJlc3RQb2ludChwaW5uZWRQb3NpdGlvbnMsIGRyYWdnYWJsZS5wb3NpdGlvbiwgdGhpcy5vcHRpb25zLnJhZGl1cywgdGhpcy5kaXN0YW5jZUZ1bmMpXG5cbiAgICBpZiAodGFyZ2V0SW5kZXggIT09IC0xICYmIGN1cnJlbnRJbmRleCAhPT0gdGFyZ2V0SW5kZXgpIHtcbiAgICAgIGlmICh0YXJnZXRJbmRleCA8IGN1cnJlbnRJbmRleCkge1xuICAgICAgICBmb3IgKGxldCBpPXRhcmdldEluZGV4OyBpPGN1cnJlbnRJbmRleDsgaSsrKSB7XG4gICAgICAgICAgc29ydGVkRHJhZ2dhYmxlc1tpXS5waW5Qb3NpdGlvbihwaW5uZWRQb3NpdGlvbnNbaSsxXSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGxldCBpPWN1cnJlbnRJbmRleDsgaTx0YXJnZXRJbmRleDsgaSsrKSB7XG4gICAgICAgICAgc29ydGVkRHJhZ2dhYmxlc1tpKzFdLnBpblBvc2l0aW9uKHBpbm5lZFBvc2l0aW9uc1tpXSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChkcmFnZ2FibGUubmF0aXZlRHJhZ0FuZERyb3ApIHtcbiAgICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKHBpbm5lZFBvc2l0aW9uc1t0YXJnZXRJbmRleF0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24gPSBwaW5uZWRQb3NpdGlvbnNbdGFyZ2V0SW5kZXhdXG4gICAgICB9XG5cbiAgICAgIHRoaXMuY2hhbmdlZER1cmluZ0l0ZXJhdGlvbiA9IHRydWVcbiAgICB9XG4gIH1cblxuICBvbkVuZChkcmFnZ2FibGUpIHtcbiAgICBpZiAodGhpcy5jaGFuZ2VkRHVyaW5nSXRlcmF0aW9uKSB7XG4gICAgICB0aGlzLmVtaXQoJ2xpc3Q6Y2hhbmdlJylcbiAgICAgIHRoaXMuY2hhbmdlZER1cmluZ0l0ZXJhdGlvbiA9IGZhbHNlXG5cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucmVvcmRlck9uQ2hhbmdlICYmIHRoaXMub3B0aW9ucy5jb250YWluZXIpIHtcbiAgICAgICAgdGhpcy5yZW9yZGVyRWxlbWVudHMoZHJhZ2dhYmxlKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlb3JkZXJFbGVtZW50cyhtb3ZlZERyYWdnYWJsZSkge1xuICAgIGNvbnN0IHNvcnRlZERyYWdnYWJsZXMgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuICAgIGNvbnN0IGluZGV4ID0gc29ydGVkRHJhZ2dhYmxlcy5pbmRleE9mKG1vdmVkRHJhZ2dhYmxlKVxuICAgIGNvbnN0IG5leHQgPSBzb3J0ZWREcmFnZ2FibGVzW2luZGV4ICsgMV1cblxuICAgIHRoaXMucmVzZXQoKVxuXG4gICAgaWYgKG5leHQpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmluc2VydEJlZm9yZShtb3ZlZERyYWdnYWJsZS5lbGVtZW50LCBuZXh0LmVsZW1lbnQpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKG1vdmVkRHJhZ2dhYmxlLmVsZW1lbnQpXG4gICAgfVxuXG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGQpID0+IGQuc3RhcnRQb3NpdGlvbmluZygpKVxuICAgIHRoaXMuZW1pdCgnbGlzdDpyZW9yZGVyZWQnKVxuICB9XG5cbiAgZ2V0Q3VycmVudFBpbm5lZFBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5kcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24uY2xvbmUoKSlcbiAgfVxuXG4gIGdldFNvcnRlZERyYWdnYWJsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJhZ2dhYmxlcy5zb3J0KHRoaXMuc29ydGluZy5iaW5kKHRoaXMpKVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnJlc2V0UG9zaXRpb25Ub0luaXRpYWwoKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnJlZnJlc2goKSlcbiAgfVxuXG4gIGFkZChkcmFnZ2FibGVzKSB7XG4gICAgaWYgKCEoZHJhZ2dhYmxlcyBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgZHJhZ2dhYmxlcyA9IFtkcmFnZ2FibGVzXVxuICAgIH1cbiAgICBkcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gdGhpcy5pbml0RHJhZ2dhYmxlKGRyYWdnYWJsZSkpXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gdGhpcy5kcmFnZ2FibGVzLmNvbmNhdChkcmFnZ2FibGVzKVxuICB9XG5cbiAgcmVtb3ZlKGRyYWdnYWJsZXMpIHtcbiAgICBjb25zdCBpbml0aWFsUG9zaXRpb25zID0gdGhpcy5kcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uKVxuICAgIGNvbnN0IGxpc3QgPSBbXVxuICAgIGNvbnN0IHNvcnRlZERyYWdnYWJsZXMgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuXG4gICAgaWYgKCEoZHJhZ2dhYmxlcyBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgZHJhZ2dhYmxlcyA9IFtkcmFnZ2FibGVzXVxuICAgIH1cblxuICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB0aGlzLnJlbGVhc2VEcmFnZ2FibGUoZHJhZ2dhYmxlKSlcblxuICAgIGxldCBqID0gMFxuICAgIHNvcnRlZERyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBpZiAodGhpcy5kcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTEpIHtcbiAgICAgICAgaWYgKGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbiAhPT0gaW5pdGlhbFBvc2l0aW9uc1tqXSkge1xuICAgICAgICAgIGRyYWdnYWJsZS5waW5Qb3NpdGlvbihpbml0aWFsUG9zaXRpb25zW2pdLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICAgIH1cbiAgICAgICAgZHJhZ2dhYmxlLmluaXRpYWxQb3NpdGlvbiA9IGluaXRpYWxQb3NpdGlvbnNbal1cbiAgICAgICAgaisrXG4gICAgICAgIGxpc3QucHVzaChkcmFnZ2FibGUpXG4gICAgICB9XG4gICAgfSlcbiAgICB0aGlzLmRyYWdnYWJsZXMgPSBsaXN0XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLnJlbW92ZSh0aGlzLmRyYWdnYWJsZXMuc2xpY2UoKSlcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLmRlc3Ryb3koKSlcbiAgICBpZiAodGhpcy5jb250YWluZXIpIHtcbiAgICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIudW5vYnNlcnZlKHRoaXMuY29udGFpbmVyKVxuICAgIH1cbiAgfVxuXG4gIHNvcnRpbmcoZHJhZ2dhYmxlQSwgZHJhZ2dhYmxlQikge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuc29ydGluZykge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5zb3J0aW5nKGRyYWdnYWJsZUEsIGRyYWdnYWJsZUIpXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChkcmFnZ2FibGVBLnBpbm5lZFBvc2l0aW9uLnkgPCBkcmFnZ2FibGVCLnBpbm5lZFBvc2l0aW9uLnkpIHJldHVybiAtMVxuICAgICAgaWYgKGRyYWdnYWJsZUEucGlubmVkUG9zaXRpb24ueSA+IGRyYWdnYWJsZUIucGlubmVkUG9zaXRpb24ueSkgcmV0dXJuIDFcbiAgICAgIGlmIChkcmFnZ2FibGVBLnBpbm5lZFBvc2l0aW9uLnggPCBkcmFnZ2FibGVCLnBpbm5lZFBvc2l0aW9uLngpIHJldHVybiAtMVxuICAgICAgaWYgKGRyYWdnYWJsZUEucGlubmVkUG9zaXRpb24ueCA+IGRyYWdnYWJsZUIucGlubmVkUG9zaXRpb24ueCkgcmV0dXJuIDFcbiAgICAgIHJldHVybiAwXG4gICAgfVxuICB9XG5cbiAgZ2V0IGRpc3RhbmNlRnVuYygpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmdldERpc3RhbmNlIHx8IGdldERpc3RhbmNlXG4gIH1cblxuICBnZXQgcG9zaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmdldEN1cnJlbnRQaW5uZWRQb3NpdGlvbnMoKVxuICB9XG5cbiAgc2V0IHBvc2l0aW9ucyhwb3NpdGlvbnMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gJ3dyb25nIGFycmF5IGxlbmd0aCdcbiAgICBpZiAocG9zaXRpb25zLmxlbmd0aCA9PT0gdGhpcy5kcmFnZ2FibGVzLmxlbmd0aCkge1xuICAgICAgcG9zaXRpb25zLmZvckVhY2goKHBvaW50LCBpKSA9PiB7XG4gICAgICAgIHRoaXMuZHJhZ2dhYmxlc1tpXS5waW5Qb3NpdGlvbihwb2ludClcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG1lc3NhZ2VcbiAgICB9XG4gIH1cblxuICBnZXQgZW5hYmxlKCkge1xuICAgIHJldHVybiB0aGlzLl9lbmFibGVcbiAgfVxuXG4gIHNldCBlbmFibGUoZW5hYmxlKSB7XG4gICAgdGhpcy5fZW5hYmxlID0gZW5hYmxlXG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLmVuYWJsZSA9IGVuYWJsZVxuICAgIH0pXG4gIH1cblxuICBnZXQgc3dhcHBpbmdEaXNhYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3dhcHBpbmdEaXNhYmxlZFxuICB9XG5cbiAgc2V0IHN3YXBwaW5nRGlzYWJsZWQoZGlzYWJsZWQpIHtcbiAgICB0aGlzLl9zd2FwcGluZ0Rpc2FibGVkID0gZGlzYWJsZWRcbiAgfVxufVxuIiwiaW1wb3J0IExpc3QgZnJvbSAnLi9saXN0J1xuaW1wb3J0IHsgaW5kZXhPZk5lYXJlc3RQb2ludCwgZ2V0WERpZmZlcmVuY2UsIGdldFlEaWZmZXJlbmNlIH0gZnJvbSAnLi9nZW9tZXRyeS9kaXN0YW5jZXMnXG5cbmltcG9ydCBEcmFnZ2FibGUgZnJvbSAnLi9kcmFnZ2FibGUnXG5cbmNvbnN0IGFycmF5TW92ZSA9IChhcnJheSwgZnJvbSwgdG8pID0+IHtcbiAgYXJyYXkuc3BsaWNlKHRvIDwgMCA/IGFycmF5Lmxlbmd0aCArIHRvIDogdG8sIDAsIGFycmF5LnNwbGljZShmcm9tLCAxKVswXSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnViYmxpbmdMaXN0IGV4dGVuZHMgTGlzdCB7XG4gIGF1dG9EZXRlY3RHYXAoKSB7XG4gICAgaWYgKHRoaXMuX2dhcCAhPT0gdW5kZWZpbmVkIHx8IHRoaXMuZXhwbGljaXRHYXAgIT09IHVuZGVmaW5lZCB8fCB0aGlzLmRyYWdnYWJsZXMubGVuZ3RoIDwgMikgcmV0dXJuXG5cbiAgICBjb25zdCBheGlzID0gdGhpcy5heGlzXG4gICAgY29uc3Qgc29ydGVkID0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcbiAgICAvLyBEZXRhY2hlZCBlbGVtZW50cyByZXBvcnQgc2l6ZSAwXG4gICAgY29uc3QgaW5kZXggPSBzb3J0ZWQuZmluZEluZGV4KChkLCBpKSA9PiBpIDwgc29ydGVkLmxlbmd0aCAtIDEgJiYgZC5lbGVtZW50LmlzQ29ubmVjdGVkKVxuICAgIGlmIChpbmRleCA9PT0gLTEpIHJldHVyblxuXG4gICAgY29uc3QgW2N1cnJlbnQsIG5leHRdID0gW3NvcnRlZFtpbmRleF0sIHNvcnRlZFtpbmRleCArIDFdXVxuICAgIHRoaXMuX2dhcCA9IG5leHQucGlubmVkUG9zaXRpb25bYXhpc10gLSBjdXJyZW50LnBpbm5lZFBvc2l0aW9uW2F4aXNdIC0gY3VycmVudC5nZXRTaXplKClbYXhpc11cbiAgfVxuXG4gIGF1dG9EZXRlY3RTdGFydFBvc2l0aW9uKCkge1xuICAgIGlmICh0aGlzLmRyYWdnYWJsZXMubGVuZ3RoID49IDEgJiYgIXRoaXMuc3RhcnRQb3NpdGlvbikge1xuICAgICAgdGhpcy5zdGFydFBvc2l0aW9uID0gdGhpcy5kcmFnZ2FibGVzWzBdLnBpbm5lZFBvc2l0aW9uXG4gICAgfVxuICB9XG5cbiAgaW5pdERyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICBzdXBlci5pbml0RHJhZ2dhYmxlKGRyYWdnYWJsZSlcbiAgICB0aGlzLmxpc3RlblRvKGRyYWdnYWJsZSwgJ2RyYWc6c3RhcnQnLCAoKSA9PiB0aGlzLm9uRHJhZ1N0YXJ0KGRyYWdnYWJsZSkpXG4gIH1cblxuICBvbkRyYWdTdGFydChkcmFnZ2FibGUpIHtcbiAgICB0aGlzLmF1dG9EZXRlY3RHYXAoKVxuICAgIHRoaXMuYXV0b0RldGVjdFN0YXJ0UG9zaXRpb24oKVxuICAgIHRoaXMuY2FjaGVkU29ydGVkRHJhZ2dhYmxlcyA9IHRoaXMuZ2V0U29ydGVkRHJhZ2dhYmxlcygpXG4gICAgdGhpcy5pbmRleE9mQWN0aXZlRHJhZ2dhYmxlID0gdGhpcy5jYWNoZWRTb3J0ZWREcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKVxuICB9XG5cbiAgb25Nb3ZlKGRyYWdnYWJsZSkge1xuICAgIGlmICh0aGlzLnN3YXBwaW5nRGlzYWJsZWQpIHJldHVyblxuXG4gICAgY29uc3QgcHJldkRyYWdnYWJsZSA9IHRoaXMuY2FjaGVkU29ydGVkRHJhZ2dhYmxlc1t0aGlzLmluZGV4T2ZBY3RpdmVEcmFnZ2FibGUgLSAxXVxuICAgIGNvbnN0IG5leHREcmFnZ2FibGUgPSB0aGlzLmNhY2hlZFNvcnRlZERyYWdnYWJsZXNbdGhpcy5pbmRleE9mQWN0aXZlRHJhZ2dhYmxlICsgMV1cbiAgICBjb25zdCBjdXJyZW50UG9zaXRpb24gPSBkcmFnZ2FibGUucGlubmVkUG9zaXRpb25cblxuICAgIGxldCBjdXJyZW50T3JkZXJcbiAgICBsZXQgdGFyZ2V0SW5kZXhcblxuICAgIGlmKHRoaXMuaXNNb3ZpbmdCYWNrd2FyZChkcmFnZ2FibGUpICYmIHByZXZEcmFnZ2FibGUpIHtcbiAgICAgIGN1cnJlbnRPcmRlciA9IFtwcmV2RHJhZ2dhYmxlLCBkcmFnZ2FibGVdLm1hcCgoZCkgPT4gZC5waW5uZWRQb3NpdGlvbilcbiAgICAgIHRhcmdldEluZGV4ID0gaW5kZXhPZk5lYXJlc3RQb2ludChjdXJyZW50T3JkZXIsIGRyYWdnYWJsZS5wb3NpdGlvbiwgMTAwMDAsIHRoaXMuZGlzdGFuY2VGdW5jKVxuXG4gICAgICBpZiAodGFyZ2V0SW5kZXggPT09IDApIHtcbiAgICAgICAgaWYoZHJhZ2dhYmxlLnNob3VsZFVzZU5hdGl2ZURyYWdBbmREcm9wKCkpIHtcbiAgICAgICAgICBkcmFnZ2FibGUucGluUG9zaXRpb24ocHJldkRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24gPSBwcmV2RHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uLmNsb25lKClcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwcmV2TmV3UG9zaXRpb24gPSB0aGlzLm5leHRQb3NpdGlvbihkcmFnZ2FibGUucGlubmVkUG9zaXRpb24sIGRyYWdnYWJsZSlcbiAgICAgICAgcHJldk5ld1Bvc2l0aW9uW3RoaXMuY3Jvc3NBeGlzXSA9IGN1cnJlbnRQb3NpdGlvblt0aGlzLmNyb3NzQXhpc11cbiAgICAgICAgcHJldkRyYWdnYWJsZS5waW5Qb3NpdGlvbihwcmV2TmV3UG9zaXRpb24sIHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSlcbiAgICAgICAgYXJyYXlNb3ZlKHRoaXMuY2FjaGVkU29ydGVkRHJhZ2dhYmxlcywgdGhpcy5pbmRleE9mQWN0aXZlRHJhZ2dhYmxlLS0sIHRoaXMuaW5kZXhPZkFjdGl2ZURyYWdnYWJsZSlcbiAgICAgICAgdGhpcy5vbk1vdmUoZHJhZ2dhYmxlKVxuICAgICAgICB0aGlzLmNoYW5nZWREdXJpbmdJdGVyYXRpb24gPSB0cnVlXG4gICAgICB9XG4gICAgfSBlbHNlIGlmKHRoaXMuaXNNb3ZpbmdGb3J3YXJkKGRyYWdnYWJsZSkgJiYgbmV4dERyYWdnYWJsZSkge1xuICAgICAgY3VycmVudE9yZGVyID0gW2RyYWdnYWJsZSwgbmV4dERyYWdnYWJsZV0ubWFwKChkKSA9PiBkLnBpbm5lZFBvc2l0aW9uKVxuICAgICAgdGFyZ2V0SW5kZXggPSBpbmRleE9mTmVhcmVzdFBvaW50KGN1cnJlbnRPcmRlciwgZHJhZ2dhYmxlLnBvc2l0aW9uLCAxMDAwMCwgdGhpcy5kaXN0YW5jZUZ1bmMpXG5cbiAgICAgIGlmKHRhcmdldEluZGV4ID09PSAxKSB7XG4gICAgICAgIG5leHREcmFnZ2FibGUucGluUG9zaXRpb24oZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICAgIGNvbnN0IGRyYWdnYWJsZU5ld1Bvc2l0aW9uID0gdGhpcy5uZXh0UG9zaXRpb24obmV4dERyYWdnYWJsZS5waW5uZWRQb3NpdGlvbiwgbmV4dERyYWdnYWJsZSlcbiAgICAgICAgaWYoZHJhZ2dhYmxlLnNob3VsZFVzZU5hdGl2ZURyYWdBbmREcm9wKCkpIHtcbiAgICAgICAgICBkcmFnZ2FibGUucGluUG9zaXRpb24oZHJhZ2dhYmxlTmV3UG9zaXRpb24pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uID0gZHJhZ2dhYmxlTmV3UG9zaXRpb25cbiAgICAgICAgfVxuICAgICAgICBhcnJheU1vdmUodGhpcy5jYWNoZWRTb3J0ZWREcmFnZ2FibGVzLCB0aGlzLmluZGV4T2ZBY3RpdmVEcmFnZ2FibGUrKywgdGhpcy5pbmRleE9mQWN0aXZlRHJhZ2dhYmxlKVxuICAgICAgICB0aGlzLm9uTW92ZShkcmFnZ2FibGUpXG4gICAgICAgIHRoaXMuY2hhbmdlZER1cmluZ0l0ZXJhdGlvbiA9IHRydWVcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBidWJibGluZyhzb3J0ZWREcmFnZ2FibGVzLCBjdXJyZW50RHJhZ2dhYmxlKSB7XG4gICAgbGV0IGN1cnJlbnRQb3NpdGlvbiA9IHRoaXMuc3RhcnRQb3NpdGlvbi5jbG9uZSgpXG4gICAgc29ydGVkRHJhZ2dhYmxlcyB8fD0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcblxuICAgIHNvcnRlZERyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBpZiAoIWRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbi5jb21wYXJlKGN1cnJlbnRQb3NpdGlvbikpIHtcbiAgICAgICAgaWYgKGRyYWdnYWJsZSA9PT0gY3VycmVudERyYWdnYWJsZSAmJiAhY3VycmVudERyYWdnYWJsZS5zaG91bGRVc2VOYXRpdmVEcmFnQW5kRHJvcCgpKSB7XG4gICAgICAgICAgZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uID0gY3VycmVudFBvc2l0aW9uLmNsb25lKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkcmFnZ2FibGUucGluUG9zaXRpb24oY3VycmVudFBvc2l0aW9uLCAoZHJhZ2dhYmxlID09PSBjdXJyZW50RHJhZ2dhYmxlKSA/IDAgOiB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY3VycmVudFBvc2l0aW9uID0gdGhpcy5uZXh0UG9zaXRpb24oY3VycmVudFBvc2l0aW9uLCBkcmFnZ2FibGUpXG4gICAgfSlcbiAgfVxuXG4gIHJlbW92ZShkcmFnZ2FibGVzKSB7XG4gICAgaWYgKCEoZHJhZ2dhYmxlcyBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgZHJhZ2dhYmxlcyA9IFtkcmFnZ2FibGVzXVxuICAgIH1cblxuICAgIC8vIERldGVjdCBsYXlvdXQgYmVmb3JlIHJlbW92YWwsIG90aGVyd2lzZSB0aGUgZ2FwIGlzIG1lYXN1cmVkIGFjcm9zcyB0aGUgaG9sZVxuICAgIHRoaXMuYXV0b0RldGVjdEdhcCgpXG4gICAgdGhpcy5hdXRvRGV0ZWN0U3RhcnRQb3NpdGlvbigpXG5cbiAgICBkcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gdGhpcy5yZWxlYXNlRHJhZ2dhYmxlKGRyYWdnYWJsZSkpXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gdGhpcy5kcmFnZ2FibGVzLmZpbHRlcigoZCkgPT4gIWRyYWdnYWJsZXMuaW5jbHVkZXMoZCkpXG5cbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZCkgPT4gZC5zdGFydFBvc2l0aW9uaW5nKCkpXG5cbiAgICBpZih0aGlzLmRyYWdnYWJsZXMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5idWJibGluZygpXG4gICAgfVxuICB9XG5cbiAgbmV4dFBvc2l0aW9uKHBvc2l0aW9uLCBkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBuZXh0ID0gcG9zaXRpb24uY2xvbmUoKVxuICAgIG5leHRbdGhpcy5heGlzXSA9IHBvc2l0aW9uW3RoaXMuYXhpc10gKyBkcmFnZ2FibGUuZ2V0U2l6ZSgpW3RoaXMuYXhpc10gKyB0aGlzLmdhcFxuICAgIHJldHVybiBuZXh0XG4gIH1cblxuICBpc01vdmluZ0JhY2t3YXJkKGRyYWdnYWJsZSkge1xuICAgIHJldHVybiB0aGlzLmF4aXMgPT09ICd4JyA/IGRyYWdnYWJsZS5sZWZ0RGlyZWN0aW9uIDogZHJhZ2dhYmxlLnVwRGlyZWN0aW9uXG4gIH1cblxuICBpc01vdmluZ0ZvcndhcmQoZHJhZ2dhYmxlKSB7XG4gICAgcmV0dXJuIHRoaXMuYXhpcyA9PT0gJ3gnID8gZHJhZ2dhYmxlLnJpZ2h0RGlyZWN0aW9uIDogZHJhZ2dhYmxlLmRvd25EaXJlY3Rpb25cbiAgfVxuXG4gIGdldCBheGlzKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuYXhpcyA9PT0gJ3gnID8gJ3gnIDogJ3knXG4gIH1cblxuICBnZXQgY3Jvc3NBeGlzKCkge1xuICAgIHJldHVybiB0aGlzLmF4aXMgPT09ICd4JyA/ICd5JyA6ICd4J1xuICB9XG5cbiAgZ2V0IGRpc3RhbmNlRnVuYygpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmdldERpc3RhbmNlIHx8ICh0aGlzLmF4aXMgPT09ICd4JyA/IGdldFhEaWZmZXJlbmNlIDogZ2V0WURpZmZlcmVuY2UpXG4gIH1cblxuICBnZXQgZXhwbGljaXRHYXAoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5nYXAgPz8gdGhpcy5vcHRpb25zLnZlcnRpY2FsR2FwXG4gIH1cblxuICBnZXQgZ2FwKCkge1xuICAgIGlmICh0aGlzLmV4cGxpY2l0R2FwICE9PSB1bmRlZmluZWQpIHJldHVybiB0aGlzLmV4cGxpY2l0R2FwXG5cbiAgICB0aGlzLmF1dG9EZXRlY3RHYXAoKVxuICAgIHJldHVybiB0aGlzLl9nYXAgfHwgMFxuICB9XG5cbiAgc2V0IGdhcChnYXBWYWx1ZSkge1xuICAgIHRoaXMub3B0aW9ucy5nYXAgPSBnYXBWYWx1ZVxuICB9XG5cbiAgZ2V0IHZlcnRpY2FsR2FwKCkge1xuICAgIHJldHVybiB0aGlzLmdhcFxuICB9XG5cbiAgc2V0IHZlcnRpY2FsR2FwKGdhcFZhbHVlKSB7XG4gICAgdGhpcy5nYXAgPSBnYXBWYWx1ZVxuICB9XG59XG4iXSwibmFtZXMiOlsiZ2V0UGFyZW50c0NoYWluIiwiY2hpbGRFbGVtZW50Iiwicm9vdEVsZW1lbnQiLCJjaGFpbiIsImVsZW1lbnQiLCJwYXJlbnROb2RlIiwidW5zaGlmdCIsIlBvaW50IiwiY29uc3RydWN0b3IiLCJ4IiwieSIsImFkZCIsInAiLCJzdWIiLCJtdWx0IiwiayIsIm5lZ2F0aXZlIiwiY29tcGFyZSIsImNsb25lIiwidG9TdHJpbmciLCJlbGVtZW50T2Zmc2V0IiwicGFyZW50Iiwib2Zmc2V0UGFyZW50Iiwib2Zmc2V0TGVmdCIsImNsaWVudExlZnQiLCJvZmZzZXRUb3AiLCJjbGllbnRUb3AiLCJjb25zaWRlck9mZnNldEVsZW1lbnRzIiwicG9wIiwicmVkdWNlIiwic3VtIiwiZWxlbWVudEJvdW5kaW5nT2Zmc2V0IiwiZWxlbWVudFJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJwYXJlbnRSZWN0IiwibGVmdCIsInRvcCIsImVsZW1lbnRTaXplIiwid2lkdGgiLCJoZWlnaHQiLCJSZWN0YW5nbGUiLCJwb3NpdGlvbiIsInNpemUiLCJnZXRQMSIsImdldFAyIiwiZ2V0UDMiLCJnZXRQNCIsImdldENlbnRlciIsIm9yIiwicmVjdCIsIk1hdGgiLCJtaW4iLCJtYXgiLCJhbmQiLCJpbmNsdWRlUG9pbnQiLCJpbmNsdWRlUmVjdGFuZ2xlIiwicmVjdGFuZ2xlIiwibW92ZVRvQm91bmQiLCJheGlzIiwic2VsQXhpcyIsImNyb3NzUmVjdGFuZ2xlIiwidGhpc0NlbnRlciIsInJlY3RDZW50ZXIiLCJzaWduIiwib2Zmc2V0IiwiZ2V0U3F1YXJlIiwic3R5bGVBcHBseSIsImVsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic3R5bGUiLCJncm93dGgiLCJnZXRNaW5TaWRlIiwiZnJvbUVsZW1lbnQiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJpc0NvbnNpZGVyVHJhbnNsYXRlIiwiRXZlbnRFbWl0dGVyIiwib3B0aW9ucyIsImV2ZW50cyIsIm9uIiwiZXZlbnROYW1lIiwiZm4iLCJPYmplY3QiLCJlbnRyaWVzIiwiZW1pdCIsImludGVycnVwdGVkIiwiX2xlbiIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJmdW5jIiwic2xpY2UiLCJpbnRlcnJ1cHQiLCJsaXN0ZW5lcnMiLCJwdXNoIiwib2ZmIiwicHJlcGVuZE9uIiwib25jZSIsIl90aGlzIiwid3JhcHBlciIsImxpc3RlbmVyIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJzcGxpY2UiLCJ1bnN1YnNjcmliZSIsInJlc2V0RW1pdHRlciIsInJlc2V0T24iLCJhcnJheSIsInZhbCIsImkiLCJyYW5nZSIsInN0YXJ0Iiwic3RvcCIsInN0ZXAiLCJyZXN1bHQiLCJnZXREaXN0YW5jZSIsInAxIiwicDIiLCJkeCIsImR5Iiwic3FydCIsImdldFhEaWZmZXJlbmNlIiwiYWJzIiwiZ2V0WURpZmZlcmVuY2UiLCJ0cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5IiwicG93IiwiaW5kZXhPZk5lYXJlc3RQb2ludCIsImFyciIsInJhZGl1cyIsImdldERpc3RhbmNlRnVuYyIsInRlbXAiLCJkaXJlY3RDcm9zc2luZyIsIkwxUDEiLCJMMVAyIiwiTDJQMSIsIkwyUDIiLCJrMSIsImsyIiwiYjEiLCJiMiIsImJvdW5kVG9MaW5lIiwiQSIsIkIiLCJQIiwiQVAiLCJBQiIsImFiMiIsImFwX2FiIiwidCIsImdldFBvaW50T25MaW5lQnlMZW5naHQiLCJMUDEiLCJMUDIiLCJsZW5naHQiLCJwZXJjZW50IiwiYWRkUG9pbnRUb0JvdW5kUG9pbnRzIiwiYm91bmRwb2ludHMiLCJwb2ludCIsImlzUmlnaHQiLCJmaWx0ZXIiLCJiUG9pbnQiLCJCYXNpY1N0cmF0ZWd5IiwiYm91bmRSZWN0IiwiTm90Q3Jvc3NpbmdTdHJhdGVneSIsInBvc2l0aW9uaW5nIiwicmVjdGFuZ2xlTGlzdCIsImluZGV4ZXNPZk5ld3MiLCJzdGF0aWNSZWN0YW5nbGVJbmRleGVzIiwiaW5kZXhlcyIsIl9yZWN0IiwiaW5kZXhPZiIsImZvckVhY2giLCJyZW1vdmFibGUiLCJpbmRleE9mU3RhdGljIiwic3RhdGljUmVjdCIsInNvbWUiLCJzb3J0aW5nIiwib2RsRHJhZ2dhYmxlc0xpc3QiLCJuZXdEcmFnZ2FibGVzIiwiaW5kZXhPZk5ld3MiLCJkcmFnZ2FibGVzIiwiY29uY2F0IiwiZHJhZ2dhYmxlIiwiRmxvYXRMZWZ0U3RyYXRlZ3kiLCJhc3NpZ24iLCJwYWRkaW5nVG9wTGVmdCIsInBhZGRpbmdCb3R0b21SaWdodCIsInlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyIsImdldFBvc2l0aW9uIiwiX2luZGV4ZXNPZk5ld3MiLCJyZWN0UDIiLCJib3VuZGFyeVBvaW50cyIsInJlY3RJbmRleCIsImlzVmFsaWQiLCJuZXdMaXN0IiwibGlzdE9sZFBvc2l0aW9uIiwibWFwIiwibmV3RHJhZ2dhYmxlIiwiRmxvYXRSaWdodFN0cmF0ZWd5IiwicGFkZGluZ1RvcFJpZ2h0IiwicGFkZGluZ0JvdHRvbUxlZnQiLCJwYWRkaW5nQm90dG9tTmVnTGVmdCIsImdldEFuZ2xlRGlmZiIsImFscGhhIiwiYmV0YSIsIm1pbkFuZ2xlIiwibWF4QW5nbGUiLCJQSSIsImdldEFuZ2xlIiwiZGlmZiIsIm5vcm1hbGl6ZUFuZ2xlIiwiYXRhbjIiLCJib3VuZEFuZ2xlIiwiZG1pbiIsImRtYXgiLCJnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0iLCJhbmdsZSIsImNlbnRlciIsImNvcyIsInNpbiIsIkJvdW5kIiwiYm91bmQiLCJfc2l6ZSIsInJlZnJlc2giLCJib3VuZGluZyIsImluc3RhbmNlIiwiYmluZCIsIkJvdW5kVG9SZWN0YW5nbGUiLCJjYWxjUG9pbnQiLCJCb3VuZFRvRWxlbWVudCIsImNvbnRhaW5lciIsIkJvdW5kVG9MaW5lWCIsInN0YXJ0WSIsImVuZFkiLCJCb3VuZFRvTGluZVkiLCJzdGFydFgiLCJlbmRYIiwiQm91bmRUb0xpbmUiLCJzdGFydFBvaW50IiwiZW5kUG9pbnQiLCJzb21lSyIsImNvc0JldGEiLCJzaW5CZXRhIiwicG9pbnQyIiwibmV3RW5kUG9pbnQiLCJwb2ludENyb3NzaW5nIiwiQm91bmRUb0NpcmNsZSIsIkJvdW5kVG9BcmMiLCJzdGFydEFuZ2xlIiwiZW5kQW5nbGUiLCJfc3RhcnRBbmdsZSIsIl9lbmRBbmdsZSIsImFkZFRvRGVmYXVsdFNjb3BlIiwidGFyZ2V0IiwiZGVmYXVsdFNjb3BlIiwiYWRkVGFyZ2V0IiwiVGFyZ2V0IiwidGltZUVuZCIsInRpbWVFeGNhbmdlIiwicG9zaXRpb25pbmdTdHJhdGVneSIsInN0cmF0ZWd5IiwiZ2V0UmVjdGFuZ2xlIiwidGFyZ2V0cyIsImVtaXR0ZXIiLCJzdGFydEJvdW5kaW5nIiwiaW5pdCIsImluZGV4ZXNPZk5ldyIsIm9sZERyYWdnYWJsZXMiLCJyZWN0YW5nbGVzIiwiaW5uZXJEcmFnZ2FibGVzIiwic2V0UG9zaXRpb24iLCJjYXRjaERyYWdnYWJsZSIsInRhcmdldFJlY3RhbmdsZSIsImRyYWdnYWJsZVNxdWFyZSIsImdldFNpemUiLCJkZXN0cm95Iiwic2NvcGVzIiwic2NvcGUiLCJyZW1vdmVJdGVtIiwib25FbmQiLCJuZXdEcmFnZ2FibGVzSW5kZXgiLCJhZGRSZW1vdmVPbk1vdmUiLCJ0aW1lIiwibW92ZSIsImluaXRpYWxQb3NpdGlvbiIsInB1c2hJbm5lckRyYWdnYWJsZSIsInJlbW92ZUhhbmRsZXIiLCJyZW1vdmUiLCJyZXNldCIsImdldFNvcnRlZERyYWdnYWJsZXMiLCJfY29udGFpbmVyIiwiU2NvcGUiLCJkcmFnRW5kQWN0aW9uIiwiYWRkRHJhZ2dhYmxlIiwic2hvdFRhcmdldHMiLCJzb3J0IiwiYSIsImIiLCJwaW5Qb3NpdGlvbiIsInBvc2l0aW9ucyIsIm1lc3NhZ2UiLCJ0YXJnZXRJbmRleGVzIiwiY3VycmVudFNjb3BlIiwiYWRkRHJhZ2dhYmxlVG9TY29wZSIsIkRyYWdnYWJsZSIsImFkZFRhcmdldFRvU2NvcGUiLCJjYWxsIiwidGhyb3R0bGUiLCJ3YWl0IiwibGFzdFRpbWUiLCJleGVjdXRlZEZ1bmN0aW9uIiwiY29udGV4dCIsIm5vdyIsIkRhdGUiLCJhcHBseSIsInRocm90dGxlZERyYWdPdmVyIiwiY2FsbGJhY2siLCJkdXJhdGlvbiIsInRocm90dGxlZENhbGxiYWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInBhc3NpdmVGYWxzZSIsInBhc3NpdmUiLCJpc1RvdWNoIiwibmF2aWdhdG9yIiwibWF4VG91Y2hQb2ludHMiLCJtb3VzZUV2ZW50cyIsImVuZCIsInRvdWNoRXZlbnRzIiwidHJhbnNmb3JtUHJvcGVydHkiLCJ0cmFuc2l0aW9uUHJvcGVydHkiLCJnZXRUb3VjaEJ5SUQiLCJ0b3VjaElkIiwiY2hhbmdlZFRvdWNoZXMiLCJpZGVudGlmaWVyIiwicHJldmVudERvdWJsZUluaXQiLCJleGlzdGluZyIsImNvcHlTdHlsZXMiLCJzb3VyY2UiLCJkZXN0aW5hdGlvbiIsImNzIiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImtleSIsImNoaWxkcmVuIiwiX2VuYWJsZSIsInN0YXJ0UG9zaXRpb25pbmciLCJzdGFydExpc3RlbmluZyIsIl9zZXREZWZhdWx0VHJhbnNpdGlvbiIsImlzQ29uc2lkZXJUcmFuc2Zvcm1PZmZzZXQiLCJwaW5uZWRQb3NpdGlvbiIsIl9kcmFnU3RhcnQiLCJkcmFnU3RhcnQiLCJfZHJhZ01vdmUiLCJkcmFnTW92ZSIsIl9kcmFnRW5kIiwiZHJhZ0VuZCIsIl9uYXRpdmVEcmFnU3RhcnQiLCJuYXRpdmVEcmFnU3RhcnQiLCJfbmF0aXZlRHJhZ092ZXIiLCJuYXRpdmVEcmFnT3ZlciIsImRyYWdPdmVyVGhyb3R0bGVEdXJhdGlvbiIsIl9uYXRpdmVEcmFnRW5kIiwibmF0aXZlRHJhZ0VuZCIsIl9uYXRpdmVEcm9wIiwibmF0aXZlRHJvcCIsIl9zY3JvbGwiLCJvblNjcm9sbCIsImhhbmRsZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiX3RyYW5zZm9ybVBvc2l0aW9uIiwiX3NldFRyYW5zaXRpb24iLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbkNzcyIsInRlc3QiLCJyZXBsYWNlIiwiX3NldFRyYW5zbGF0ZSIsInRyYW5zbGF0ZUNzcyIsInRyYW5zZm9ybSIsInNob3VsZFJlbW92ZVplcm9UcmFuc2xhdGUiLCJpc1NpbGVudCIsInNpbGVudCIsInJlc2V0UG9zaXRpb25Ub0luaXRpYWwiLCJyZWZyZXNoUG9zaXRpb24iLCJkZXRlcm1pbmVEaXJlY3Rpb24iLCJfcHJldmlvdXNEaXJlY3Rpb25Qb3NpdGlvbiIsIl9zdGFydFBvc2l0aW9uIiwibGVmdERpcmVjdGlvbiIsInJpZ2h0RGlyZWN0aW9uIiwidXBEaXJlY3Rpb24iLCJkb3duRGlyZWN0aW9uIiwic2VlbXNTY3JvbGxpbmciLCJfc3RhcnRUb3VjaFRpbWVzdGFtcCIsInRvdWNoRHJhZ2dpbmdUaHJlc2hvbGQiLCJzaG91bGRVc2VOYXRpdmVEcmFnQW5kRHJvcCIsImlzVG91Y2hFdmVudCIsIm5hdGl2ZURyYWdBbmREcm9wIiwiZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wT25Ub3VjaCIsInN0b3BQcm9wYWdhdGlvbk9uRHJhZ1N0YXJ0Iiwic3RvcFByb3BhZ2F0aW9uIiwiVG91Y2hFdmVudCIsInRvdWNoUG9pbnQiLCJfc3RhcnRUb3VjaFBvaW50IiwicGFnZVgiLCJjbGllbnRYIiwicGFnZVkiLCJjbGllbnRZIiwiX3RvdWNoSWQiLCJfc3RhcnRXaW5kb3dTY3JvbGxQb2ludCIsIndpbmRvd1Njcm9sbFBvaW50IiwiX3N0YXJ0U2Nyb2xsRWxlbWVudHNPZmZzZXQiLCJzY3JvbGxFbGVtZW50c09mZnNldCIsIkhUTUxJbnB1dEVsZW1lbnQiLCJmb2N1cyIsIl9zdGFydFBhcmVudHNTY3JvbGxPZmZzZXQiLCJwYXJlbnRzU2Nyb2xsT2Zmc2V0IiwiZW11bGF0ZU9uRmlyc3RNb3ZlIiwiY2FuY2VsRHJhZ2dpbmciLCJlbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3AiLCJjYW5jZWxFbXVsYXRpb24iLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2Nyb2xsRWxlbWVudHMiLCJkcmFnU3RhcnRUaHJlc2hvbGQiLCJfZHJhZ1N0YXJ0UGVuZGluZyIsInRvdWNoIiwiaXNEcmFnZ2luZyIsImNsYXNzTGlzdCIsInNldFRpbWVvdXQiLCJfZXZlbnQiLCJkYXRhVHJhbnNmZXIiLCJzZXREYXRhIiwiZWZmZWN0QWxsb3dlZCIsImRyb3BFZmZlY3QiLCJyZW1vdmVBdHRyaWJ1dGUiLCJjb250YWluZXJSZWN0IiwiY2xvbmVkRWxlbWVudCIsImNsb25lTm9kZSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImVtdWxhdGlvbkRyYWdnYWJsZSIsImRyYWc6bW92ZSIsImNvbnRhaW5lclJlY3RQb2ludCIsImRyYWc6ZW5kIiwicmVtb3ZlQ2hpbGQiLCJfaGFuZGxlciIsImNvbnNpZGVyVHJhbnNmb3JtT2Zmc2V0Iiwic2Nyb2xsWCIsInNjcm9sbFkiLCJzY3JvbGxSb290Q29udGFpbmVyIiwiX2NhY2hlZFNjcm9sbEVsZW1lbnRzIiwic2Nyb2xsTGVmdCIsInNjcm9sbFRvcCIsInBhcmVudHMiLCJfY2FjaGVkUGFyZW50cyIsImVuYWJsZSIsImRlYm91bmNlIiwiaW1tZWRpYXRlIiwidGltZW91dCIsImxhdGVyIiwiY2xlYXJUaW1lb3V0IiwiTGlzdCIsImNoYW5nZWREdXJpbmdJdGVyYXRpb24iLCJ1bnN1YnNjcmliZXMiLCJNYXAiLCJyZXNpemVPYnNlcnZlciIsIlJlc2l6ZU9ic2VydmVyIiwib25SZXNpemUiLCJvYnNlcnZlIiwicmVvcmRlck9uQ2hhbmdlIiwiaW5pdERyYWdnYWJsZSIsImxpc3RlblRvIiwib25Nb3ZlIiwiaGFzIiwic2V0IiwiZ2V0IiwicmVsZWFzZURyYWdnYWJsZSIsInVub2JzZXJ2ZSIsImRlbGV0ZSIsInN3YXBwaW5nRGlzYWJsZWQiLCJzb3J0ZWREcmFnZ2FibGVzIiwicGlubmVkUG9zaXRpb25zIiwiY3VycmVudEluZGV4IiwidGFyZ2V0SW5kZXgiLCJkaXN0YW5jZUZ1bmMiLCJyZW9yZGVyRWxlbWVudHMiLCJtb3ZlZERyYWdnYWJsZSIsIm5leHQiLCJpbnNlcnRCZWZvcmUiLCJkIiwiZ2V0Q3VycmVudFBpbm5lZFBvc2l0aW9ucyIsImluaXRpYWxQb3NpdGlvbnMiLCJsaXN0IiwiaiIsImNsZWFyIiwiZHJhZ2dhYmxlQSIsImRyYWdnYWJsZUIiLCJfc3dhcHBpbmdEaXNhYmxlZCIsImRpc2FibGVkIiwiYXJyYXlNb3ZlIiwiZnJvbSIsInRvIiwiQnViYmxpbmdMaXN0IiwiYXV0b0RldGVjdEdhcCIsIl9nYXAiLCJleHBsaWNpdEdhcCIsInNvcnRlZCIsImlzQ29ubmVjdGVkIiwiY3VycmVudCIsImF1dG9EZXRlY3RTdGFydFBvc2l0aW9uIiwic3RhcnRQb3NpdGlvbiIsIm9uRHJhZ1N0YXJ0IiwiY2FjaGVkU29ydGVkRHJhZ2dhYmxlcyIsImluZGV4T2ZBY3RpdmVEcmFnZ2FibGUiLCJwcmV2RHJhZ2dhYmxlIiwibmV4dERyYWdnYWJsZSIsImN1cnJlbnRQb3NpdGlvbiIsImN1cnJlbnRPcmRlciIsImlzTW92aW5nQmFja3dhcmQiLCJwcmV2TmV3UG9zaXRpb24iLCJuZXh0UG9zaXRpb24iLCJjcm9zc0F4aXMiLCJpc01vdmluZ0ZvcndhcmQiLCJkcmFnZ2FibGVOZXdQb3NpdGlvbiIsImJ1YmJsaW5nIiwiY3VycmVudERyYWdnYWJsZSIsImluY2x1ZGVzIiwiZ2FwIiwidmVydGljYWxHYXAiLCJnYXBWYWx1ZSJdLCJtYXBwaW5ncyI6Ijs7O0VBQWUsU0FBU0EsZUFBZUEsQ0FBQ0MsWUFBWSxFQUFFQyxXQUFXLEVBQUU7SUFDbEUsTUFBTUMsS0FBSyxHQUFHLEVBQUU7SUFDZixJQUFJQyxPQUFPLEdBQUdILFlBQVk7RUFFMUIsRUFBQSxPQUFNRyxPQUFPLENBQUNDLFVBQVUsSUFBSUQsT0FBTyxLQUFLRixXQUFXLEVBQUU7RUFDbkRDLElBQUFBLEtBQUssQ0FBQ0csT0FBTyxDQUFDRixPQUFPLENBQUNDLFVBQVUsQ0FBQztNQUNqQ0QsT0FBTyxHQUFHQSxPQUFPLENBQUNDLFVBQVU7RUFDOUI7RUFFQSxFQUFBLE9BQU9GLEtBQUs7RUFD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
