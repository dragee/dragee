var Dragee = (function (exports) {
  'use strict';

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
      return `{x=${this.x},y=${this.y}`;
    }
    static elementOffset(element, parent) {
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
      const position = Point.elementOffset(element, parent, isConsiderTranslate);
      const size = Point.elementSize(element);
      return new Rectangle(position, size);
    }
  }

  function getDefaultContainer(element) {
    let container = element.parentNode;
    while (container.parentNode && window.getComputedStyle(container)['position'] === 'static' && container.tagName !== 'BODY') {
      container = container.parentNode;
    }
    return container;
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
      const args = [].slice.call(arguments, 1);
      if (!this.events[eventName]) return;
      for (const func of this.events[eventName]) {
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
      if (!this.events[eventName]) {
        this.events[eventName] = [];
      }
      this.events[eventName].push(fn);
    }
    prependOn(eventName, fn) {
      if (!this.events[eventName]) {
        this.events[eventName] = [];
      }
      this.events[eventName].unshift(fn);
    }
    unsubscribe(eventName, fn) {
      if (this.events[eventName]) {
        const index = this.events[eventName].indexOf(fn);
        this.events[eventName].splice(index, 1);
      }
    }
    resetEmitter() {
      this.events = {};
    }
    resetOn(eventName) {
      this.events[eventName] = [];
    }
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
      this.innerDraggables.slice();
    }
    get container() {
      return this._container = this._container || this.options.container || this.options.parent || getDefaultContainer(this.element);
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

  function getParentsChain(childElement, rootElement) {
    const chain = [];
    let element = childElement;
    while (element.parentNode && element !== rootElement) {
      chain.unshift(element.parentNode);
      element = element.parentNode;
    }
    return chain;
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
      if (this.options.bound) {
        this.bounding = {
          bound: this.options.bound
        };
      } else {
        this.bounding = new BoundToElement(this.container, this.container);
      }
    }
    startPositioning() {
      this._setDefaultTransition();
      this.offset = Point.elementOffset(this.element, this.container);
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
      this.leftDirection = this._previousDirectionPosition.x < point.x;
      this.rightDirection = this._previousDirectionPosition.x > point.x;
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
      this.emit('drag:start');
    }
    dragMove(event) {
      let touch;
      this.isDragging = true;
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
      event.stopPropagation();
      event.preventDefault();
      this.touchPoint = new Point(this.isTouchEvent ? touch.pageX : event.clientX, this.isTouchEvent ? touch.pageY : event.clientY);
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
      return this._container = this._container || this.options.container || this.options.parent || getDefaultContainer(this.element);
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
    get dragOverThrottleDuration() {
      return this.options.dragOverThrottleDuration || 16;
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
    static factory(containerElement, elements) {
      let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      const draggables = Array.from(elements).map(element => {
        return new Draggable(element, Object.assign({
          container: containerElement
        }, options.draggable || {}));
      });
      return new List(draggables, Object.assign({
        container: containerElement
      }, options.list || {}));
    }
  }

  const arrayMove = (array, from, to) => {
    array.splice(to < 0 ? array.length + to : to, 0, array.splice(from, 1)[0]);
  };
  class BubblingList extends List {
    autoDetectVerticalGap() {
      if (!this._verticalGap && !this.options.verticalGap && this.draggables.length >= 2) {
        const sorted = this.getSortedDraggables();
        this._verticalGap = sorted[1].pinnedPosition.y - sorted[0].pinnedPosition.y - sorted[0].getSize().y;
      }
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
      this.autoDetectVerticalGap();
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
      if (draggable.upDirection && prevDraggable) {
        currentOrder = [prevDraggable, draggable].map(d => d.pinnedPosition);
        targetIndex = indexOfNearestPoint(currentOrder, draggable.position, 10000, this.distanceFunc);
        if (targetIndex === 0) {
          if (draggable.shouldUseNativeDragAndDrop()) {
            draggable.pinPosition(prevDraggable.pinnedPosition);
          } else {
            draggable.pinnedPosition = prevDraggable.pinnedPosition.clone();
          }
          prevDraggable.pinPosition(new Point(currentPosition.x, draggable.pinnedPosition.y + draggable.getSize().y + this.verticalGap), this.options.timeExcange);
          arrayMove(this.cachedSortedDraggables, this.indexOfActiveDraggable--, this.indexOfActiveDraggable);
          this.onMove(draggable);
          this.changedDuringIteration = true;
        }
      } else if (draggable.downDirection && nextDraggable) {
        currentOrder = [draggable, nextDraggable].map(d => d.pinnedPosition);
        targetIndex = indexOfNearestPoint(currentOrder, draggable.position, 10000, this.distanceFunc);
        if (targetIndex === 1) {
          nextDraggable.pinPosition(draggable.pinnedPosition, this.options.timeExcange);
          const draggableNewPosition = new Point(nextDraggable.pinnedPosition.x, nextDraggable.pinnedPosition.y + nextDraggable.getSize().y + this.verticalGap);
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
      const currentPosition = this.startPosition.clone();
      sortedDraggables ||= this.getSortedDraggables();
      sortedDraggables.forEach(draggable => {
        if (!draggable.pinnedPosition.compare(currentPosition)) {
          if (draggable === currentDraggable && !currentDraggable.shouldUseNativeDragAndDrop()) {
            draggable.pinnedPosition = currentPosition.clone();
          } else {
            draggable.pinPosition(currentPosition, draggable === currentDraggable ? 0 : this.options.timeExcange);
          }
        }
        currentPosition.y = currentPosition.y + draggable.getSize().y + this.verticalGap;
      });
    }
    remove(draggables) {
      if (!(draggables instanceof Array)) {
        draggables = [draggables];
      }
      draggables.forEach(draggable => this.releaseDraggable(draggable));
      this.draggables = this.draggables.filter(d => !draggables.includes(d));
      this.draggables.forEach(d => d.startPositioning());
      if (this.draggables.length > 0) {
        this.autoDetectVerticalGap();
        this.autoDetectStartPosition();
        this.bubbling();
      }
    }
    get distanceFunc() {
      return this.options.getDistance || getYDifference;
    }
    get verticalGap() {
      if (this.options.verticalGap) {
        return this.options.verticalGap;
      } else {
        this.autoDetectVerticalGap();
        return this._verticalGap || 0;
      }
    }
    set verticalGap(gapValue) {
      this.options.verticalGap = gapValue;
    }
    static factory(containerElement, elements) {
      let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      const draggables = Array.from(elements).map(element => {
        return new Draggable(element, Object.assign({
          container: containerElement
        }, options.draggable || {}));
      });
      return new BubblingList(draggables, Object.assign({
        container: containerElement
      }, options.list || {}));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZGV2LmpzIiwic291cmNlcyI6WyIuLi9zcmMvZ2VvbWV0cnkvcG9pbnQuanMiLCIuLi9zcmMvZ2VvbWV0cnkvcmVjdGFuZ2xlLmpzIiwiLi4vc3JjL3V0aWxzL2dldC1kZWZhdWx0LWNvbnRhaW5lci5qcyIsIi4uL3NyYy9ldmVudEVtaXR0ZXIuanMiLCIuLi9zcmMvZ2VvbWV0cnkvZGlzdGFuY2VzLmpzIiwiLi4vc3JjL2dlb21ldHJ5L2JvdW5kcy5qcyIsIi4uL3NyYy9nZW9tZXRyeS9hbmdsZXMuanMiLCIuLi9zcmMvYm91bmRpbmcuanMiLCIuLi9zcmMvdXRpbHMvcmVtb3ZlLWFycmF5LWl0ZW0uanMiLCIuLi9zcmMvdXRpbHMvcmFuZ2UuanMiLCIuLi9zcmMvcG9zaXRpb25pbmcuanMiLCIuLi9zcmMvdGFyZ2V0LmpzIiwiLi4vc3JjL3Njb3BlLmpzIiwiLi4vc3JjL3V0aWxzL3Rocm90dGxlLmpzIiwiLi4vc3JjL3V0aWxzL2dldC1wYXJlbnRzLWNoYWluLmpzIiwiLi4vc3JjL2RyYWdnYWJsZS5qcyIsIi4uL3NyYy91dGlscy9kZWJvdW5jZS5qcyIsIi4uL3NyYy9saXN0LmpzIiwiLi4vc3JjL2J1YmJsaW5nTGlzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQ2xhc3MgcmVwcmVzZW50aW5nIGEgcG9pbnQuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2ludCB7XG4gIC8qKlxuICAqIENyZWF0ZSBhIHBvaW50LlxuICAqIEBwYXJhbSB7bnVtYmVyfSB4IC0gVGhlIHggdmFsdWUuXG4gICogQHBhcmFtIHtudW1iZXJ9IHkgLSBUaGUgeSB2YWx1ZS5cbiAgKi9cbiAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgIHRoaXMueCA9IHhcbiAgICB0aGlzLnkgPSB5XG4gIH1cblxuICBhZGQocCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54ICsgcC54LCB0aGlzLnkgKyBwLnkpXG4gIH1cblxuICBzdWIocCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54IC0gcC54LCB0aGlzLnkgLSBwLnkpXG4gIH1cblxuICBtdWx0KGspIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCAqIGssIHRoaXMueSAqIGspXG4gIH1cblxuICBuZWdhdGl2ZSgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KC10aGlzLngsIC10aGlzLnkpXG4gIH1cblxuICBjb21wYXJlKHApIHtcbiAgICByZXR1cm4gKHRoaXMueCA9PT0gcC54ICYmIHRoaXMueSA9PT0gcC55KVxuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLngsIHRoaXMueSlcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiBge3g9JHt0aGlzLnh9LHk9JHt0aGlzLnl9YFxuICB9XG5cbiAgc3RhdGljIGVsZW1lbnRPZmZzZXQoZWxlbWVudCwgcGFyZW50KSB7XG4gICAgcGFyZW50ID0gcGFyZW50IHx8IGVsZW1lbnQucGFyZW50Tm9kZVxuICAgIGNvbnN0IGVsZW1lbnRSZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIGNvbnN0IHBhcmVudFJlY3QgPSBwYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICByZXR1cm4gbmV3IFBvaW50KFxuICAgICAgZWxlbWVudFJlY3QubGVmdCAtIHBhcmVudFJlY3QubGVmdCxcbiAgICAgIGVsZW1lbnRSZWN0LnRvcCAtIHBhcmVudFJlY3QudG9wXG4gICAgKVxuICB9XG5cbiAgc3RhdGljIGVsZW1lbnRTaXplKGVsZW1lbnQpIHtcbiAgICBjb25zdCBlbGVtZW50UmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICByZXR1cm4gbmV3IFBvaW50KFxuICAgICAgZWxlbWVudFJlY3Qud2lkdGgsXG4gICAgICBlbGVtZW50UmVjdC5oZWlnaHRcbiAgICApXG4gIH1cbn1cbiIsImltcG9ydCBQb2ludCBmcm9tICcuL3BvaW50J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWN0YW5nbGUge1xuICBjb25zdHJ1Y3Rvcihwb3NpdGlvbiwgc2l6ZSkge1xuICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvblxuICAgIHRoaXMuc2l6ZSA9IHNpemVcbiAgfVxuXG4gIGdldFAxKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uXG4gIH1cblxuICBnZXRQMigpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54LCB0aGlzLnBvc2l0aW9uLnkpXG4gIH1cblxuICBnZXRQMygpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi5hZGQodGhpcy5zaXplKVxuICB9XG5cbiAgZ2V0UDQoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55KVxuICB9XG5cbiAgZ2V0Q2VudGVyKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLnNpemUubXVsdCgwLjUpKVxuICB9XG5cbiAgb3IocmVjdCkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gbmV3IFBvaW50KE1hdGgubWluKHRoaXMucG9zaXRpb24ueCwgcmVjdC5wb3NpdGlvbi54KSwgTWF0aC5taW4odGhpcy5wb3NpdGlvbi55LCByZWN0LnBvc2l0aW9uLnkpKVxuICAgIGNvbnN0IHNpemUgPSAobmV3IFBvaW50KE1hdGgubWF4KHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54LCByZWN0LnBvc2l0aW9uLnggKyByZWN0LnNpemUueCksIE1hdGgubWF4KHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55LCByZWN0LnBvc2l0aW9uLnkgKyByZWN0LnNpemUueSkpKS5zdWIocG9zaXRpb24pXG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUocG9zaXRpb24sIHNpemUpXG4gIH1cblxuICBhbmQocmVjdCkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gbmV3IFBvaW50KE1hdGgubWF4KHRoaXMucG9zaXRpb24ueCwgcmVjdC5wb3NpdGlvbi54KSwgTWF0aC5tYXgodGhpcy5wb3NpdGlvbi55LCByZWN0LnBvc2l0aW9uLnkpKVxuICAgIGNvbnN0IHNpemUgPSAobmV3IFBvaW50KE1hdGgubWluKHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54LCByZWN0LnBvc2l0aW9uLnggKyByZWN0LnNpemUueCksIE1hdGgubWluKHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55LCByZWN0LnBvc2l0aW9uLnkgKyByZWN0LnNpemUueSkpKS5zdWIocG9zaXRpb24pXG4gICAgaWYgKHNpemUueCA8PSAwIHx8IHNpemUueSA8PSAwKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZShwb3NpdGlvbiwgc2l6ZSlcbiAgfVxuXG4gIGluY2x1ZGVQb2ludChwKSB7XG4gICAgcmV0dXJuICEodGhpcy5wb3NpdGlvbi54ID4gcC54IHx8IHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54IDwgcC54IHx8IHRoaXMucG9zaXRpb24ueSA+IHAueSB8fCB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSA8IHAueSlcbiAgfVxuXG4gIGluY2x1ZGVSZWN0YW5nbGUocmVjdGFuZ2xlKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5jbHVkZVBvaW50KHJlY3RhbmdsZS5wb3NpdGlvbikgJiYgdGhpcy5pbmNsdWRlUG9pbnQocmVjdGFuZ2xlLmdldFAzKCkpXG4gIH1cblxuICBtb3ZlVG9Cb3VuZChyZWN0LCBheGlzKSB7XG4gICAgbGV0IHNlbEF4aXMsIGNyb3NzUmVjdGFuZ2xlXG4gICAgaWYgKGF4aXMpIHtcbiAgICAgIHNlbEF4aXMgPSBheGlzXG4gICAgfSBlbHNlIHtcbiAgICAgIGNyb3NzUmVjdGFuZ2xlID0gdGhpcy5hbmQocmVjdClcbiAgICAgIGlmICghY3Jvc3NSZWN0YW5nbGUpIHtcbiAgICAgICAgcmV0dXJuIHJlY3RcbiAgICAgIH1cbiAgICAgIHNlbEF4aXMgPSBjcm9zc1JlY3RhbmdsZS5zaXplLnggPiBjcm9zc1JlY3RhbmdsZS5zaXplLnkgPyAneScgOiAneCdcbiAgICB9XG4gICAgY29uc3QgdGhpc0NlbnRlciA9IHRoaXMuZ2V0Q2VudGVyKClcbiAgICBjb25zdCByZWN0Q2VudGVyID0gcmVjdC5nZXRDZW50ZXIoKVxuICAgIGNvbnN0IHNpZ24gPSB0aGlzQ2VudGVyW3NlbEF4aXNdID4gcmVjdENlbnRlcltzZWxBeGlzXSA/IC0xIDogMVxuICAgIGNvbnN0IG9mZnNldCA9IHNpZ24gPiAwID8gdGhpcy5wb3NpdGlvbltzZWxBeGlzXSArIHRoaXMuc2l6ZVtzZWxBeGlzXSAtIHJlY3QucG9zaXRpb25bc2VsQXhpc10gOiB0aGlzLnBvc2l0aW9uW3NlbEF4aXNdIC0gKHJlY3QucG9zaXRpb25bc2VsQXhpc10gKyByZWN0LnNpemVbc2VsQXhpc10pXG4gICAgcmVjdC5wb3NpdGlvbltzZWxBeGlzXSA9IHJlY3QucG9zaXRpb25bc2VsQXhpc10gKyBvZmZzZXRcbiAgICByZXR1cm4gcmVjdFxuICB9XG5cbiAgZ2V0U3F1YXJlKCkge1xuICAgIHJldHVybiB0aGlzLnNpemUueCAqIHRoaXMuc2l6ZS55XG4gIH1cblxuICBzdHlsZUFwcGx5KGVsKSB7XG4gICAgZWwgPSBlbCB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbmQnKVxuICAgIGVsLnN0eWxlLmxlZnQgPSB0aGlzLnBvc2l0aW9uLnggKyAncHgnXG4gICAgZWwuc3R5bGUudG9wID0gdGhpcy5wb3NpdGlvbi55ICsgJ3B4J1xuICAgIGVsLnN0eWxlLndpZHRoID0gdGhpcy5zaXplLnggKyAncHgnXG4gICAgZWwuc3R5bGUuaGVpZ2h0ID0gdGhpcy5zaXplLnkgKyAncHgnXG4gIH1cblxuICBncm93dGgoc2l6ZSkge1xuICAgIHRoaXMuc2l6ZSA9IHRoaXMuc2l6ZS5hZGQoc2l6ZSlcbiAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbi5hZGQoc2l6ZS5tdWx0KC0wLjUpKVxuICB9XG5cbiAgZ2V0TWluU2lkZSgpIHtcbiAgICByZXR1cm4gTWF0aC5taW4odGhpcy5zaXplLngsIHRoaXMuc2l6ZS55KVxuICB9XG5cbiAgc3RhdGljIGZyb21FbGVtZW50KGVsZW1lbnQsIHBhcmVudD1lbGVtZW50LnBhcmVudE5vZGUsIGlzQ29uc2lkZXJUcmFuc2xhdGU9ZmFsc2UpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IFBvaW50LmVsZW1lbnRPZmZzZXQoZWxlbWVudCwgcGFyZW50LCBpc0NvbnNpZGVyVHJhbnNsYXRlKVxuICAgIGNvbnN0IHNpemUgPSBQb2ludC5lbGVtZW50U2l6ZShlbGVtZW50KVxuICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHBvc2l0aW9uLCBzaXplKVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXREZWZhdWx0Q29udGFpbmVyKGVsZW1lbnQpIHtcbiAgbGV0IGNvbnRhaW5lciA9IGVsZW1lbnQucGFyZW50Tm9kZVxuICB3aGlsZSAoY29udGFpbmVyLnBhcmVudE5vZGUgJiYgd2luZG93LmdldENvbXB1dGVkU3R5bGUoY29udGFpbmVyKVsncG9zaXRpb24nXSA9PT0gJ3N0YXRpYycgJiYgY29udGFpbmVyLnRhZ05hbWUgIT09ICdCT0RZJykge1xuICAgIGNvbnRhaW5lciA9IGNvbnRhaW5lci5wYXJlbnROb2RlXG4gIH1cbiAgcmV0dXJuIGNvbnRhaW5lclxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKG9wdGlvbnMgPSB7fSkge1xuICAgIHRoaXMuZXZlbnRzID0ge31cblxuICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMub24pIHtcbiAgICAgIGZvciAoY29uc3QgW2V2ZW50TmFtZSwgZm5dIG9mIE9iamVjdC5lbnRyaWVzKG9wdGlvbnMub24pKSB7XG4gICAgICAgIHRoaXMub24oZXZlbnROYW1lLCBmbilcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBlbWl0KGV2ZW50TmFtZSkge1xuICAgIHRoaXMuaW50ZXJydXB0ZWQgPSBmYWxzZVxuICAgIGNvbnN0IGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSlcblxuICAgIGlmICghdGhpcy5ldmVudHNbZXZlbnROYW1lXSkgcmV0dXJuXG5cbiAgICBmb3IgKGNvbnN0IGZ1bmMgb2YgdGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgZnVuYyguLi5hcmdzKVxuICAgICAgaWYgKHRoaXMuaW50ZXJydXB0ZWQpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaW50ZXJydXB0KCkge1xuICAgIHRoaXMuaW50ZXJydXB0ZWQgPSB0cnVlXG4gIH1cblxuICBvbihldmVudE5hbWUsIGZuKSB7XG4gICAgaWYgKCF0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdID0gW11cbiAgICB9XG5cbiAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLnB1c2goZm4pXG4gIH1cblxuICBwcmVwZW5kT24oZXZlbnROYW1lLCBmbikge1xuICAgIGlmICghdGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IFtdXG4gICAgfVxuXG4gICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS51bnNoaWZ0KGZuKVxuICB9XG5cbiAgdW5zdWJzY3JpYmUoZXZlbnROYW1lLCBmbikge1xuICAgIGlmICh0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0uaW5kZXhPZihmbilcbiAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0uc3BsaWNlKGluZGV4LCAxKVxuICAgIH1cbiAgfVxuXG4gIHJlc2V0RW1pdHRlciAoKSB7XG4gICAgdGhpcy5ldmVudHMgPSB7fVxuICB9XG5cbiAgcmVzZXRPbihldmVudE5hbWUpIHtcbiAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdID0gW11cbiAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldERpc3RhbmNlKHAxLCBwMikge1xuICBjb25zdCBkeCA9IHAxLnggLSBwMi54LCBkeSA9IHAxLnkgLSBwMi55XG4gIHJldHVybiBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRYRGlmZmVyZW5jZShwMSwgcDIpIHtcbiAgcmV0dXJuIE1hdGguYWJzKHAxLnggLSBwMi54KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0WURpZmZlcmVuY2UocDEsIHAyKSB7XG4gIHJldHVybiBNYXRoLmFicyhwMS55IC0gcDIueSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3Rvcnkob3B0aW9ucykge1xuICByZXR1cm4gKHAxLCBwMikgPT4ge1xuICAgIHJldHVybiBNYXRoLnNxcnQoXG4gICAgICBNYXRoLnBvdyhvcHRpb25zLnggKiBNYXRoLmFicyhwMS54IC0gcDIueCksIDIpICtcbiAgICAgIE1hdGgucG93KG9wdGlvbnMueSAqIE1hdGguYWJzKHAxLnkgLSBwMi55KSwgMilcbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluZGV4T2ZOZWFyZXN0UG9pbnQoYXJyLCB2YWwsIHJhZGl1cywgZ2V0RGlzdGFuY2VGdW5jPWdldERpc3RhbmNlKSB7XG4gIGxldCBzaXplLCBpbmRleCA9IDAsIGksIHRlbXBcbiAgaWYgKGFyci5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gLTFcbiAgfVxuICBzaXplID0gZ2V0RGlzdGFuY2VGdW5jKGFyclswXSwgdmFsKVxuICBmb3IgKGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgdGVtcCA9IGdldERpc3RhbmNlRnVuYyhhcnJbaV0sIHZhbClcbiAgICBpZiAodGVtcCA8IHNpemUpIHtcbiAgICAgIHNpemUgPSB0ZW1wXG4gICAgICBpbmRleCA9IGlcbiAgICB9XG4gIH1cbiAgaWYgKHJhZGl1cyA+PSAwICYmIHNpemUgPiByYWRpdXMpIHtcbiAgICByZXR1cm4gLTFcbiAgfVxuICByZXR1cm4gaW5kZXhcbn1cbiIsImltcG9ydCBQb2ludCBmcm9tICcuL3BvaW50J1xuaW1wb3J0IHsgZ2V0RGlzdGFuY2UgfSBmcm9tICcuL2Rpc3RhbmNlcydcblxuZXhwb3J0IGZ1bmN0aW9uIGNsYW1wKG1pbiwgbWF4LCB2YWwpIHtcbiAgcmV0dXJuIE1hdGgubWF4KG1pbiwgTWF0aC5taW4obWF4LCB2YWwpKVxufVxuXG4vL1JldHVybiBjcm9zc2luZyBwb2ludCBvZiB0d28gbGluZXNcbmV4cG9ydCBmdW5jdGlvbiBkaXJlY3RDcm9zc2luZyhMMVAxLCBMMVAyLCBMMlAxLCBMMlAyKSB7XG4gIGxldCB0ZW1wLCBrMSwgazIsIGIxLCBiMiwgeCwgeVxuICBpZiAoTDJQMS54ID09PSBMMlAyLngpIHtcbiAgICB0ZW1wID0gTDJQMVxuICAgIEwyUDEgPSBMMVAxXG4gICAgTDFQMSA9IHRlbXBcbiAgICB0ZW1wID0gTDJQMlxuICAgIEwyUDIgPSBMMVAyXG4gICAgTDFQMiA9IHRlbXBcbiAgfVxuICBpZiAoTDFQMS54ID09PSBMMVAyLngpIHtcbiAgICBrMiA9IChMMlAyLnkgLSBMMlAxLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICBiMiA9IChMMlAyLnggKiBMMlAxLnkgLSBMMlAxLnggKiBMMlAyLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICB4ID0gTDFQMS54XG4gICAgeSA9IHggKiBrMiArIGIyXG4gICAgcmV0dXJuIG5ldyBQb2ludCh4LCB5KVxuICB9IGVsc2Uge1xuICAgIGsxID0gKEwxUDIueSAtIEwxUDEueSkgLyAoTDFQMi54IC0gTDFQMS54KVxuICAgIGIxID0gKEwxUDIueCAqIEwxUDEueSAtIEwxUDEueCAqIEwxUDIueSkgLyAoTDFQMi54IC0gTDFQMS54KVxuICAgIGsyID0gKEwyUDIueSAtIEwyUDEueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgIGIyID0gKEwyUDIueCAqIEwyUDEueSAtIEwyUDEueCAqIEwyUDIueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgIHggPSAoYjEgLSBiMikgLyAoazIgLSBrMSlcbiAgICB5ID0geCAqIGsxICsgYjFcbiAgICByZXR1cm4gbmV3IFBvaW50KHgsIHkpXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kVG9TZWdtZW50KExQMSwgTFAyLCBQKSB7XG4gIGxldCB4LCB5XG4gIHggPSBjbGFtcChNYXRoLm1pbihMUDEueCwgTFAyLngpLCBNYXRoLm1heChMUDEueCwgTFAyLngpLCBQLngpXG4gIGlmICh4ICE9PSBQLngpIHtcbiAgICB5ID0gKHggPT09IExQMS54KSA/IExQMS55IDogTFAyLnlcbiAgICBQID0gbmV3IFBvaW50KHgsIHkpXG4gIH1cblxuICB5ID0gY2xhbXAoTWF0aC5taW4oTFAxLnksIExQMi55KSwgTWF0aC5tYXgoTFAxLnksIExQMi55KSwgUC55KVxuICBpZiAoeSAhPT0gUC55KSB7XG4gICAgeCA9ICh5ID09PSBMUDEueSkgPyBMUDEueCA6IExQMi54XG4gICAgUCA9IG5ldyBQb2ludCh4LCB5KVxuICB9XG5cbiAgcmV0dXJuIFBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kVG9MaW5lKEEsIEIsIFApIHtcbiAgY29uc3QgQVAgPSBuZXcgUG9pbnQoUC54IC0gQS54LCBQLnkgLSBBLnkpLFxuICAgIEFCID0gbmV3IFBvaW50KEIueCAtIEEueCwgQi55IC0gQS55KSxcbiAgICBhYjIgPSBBQi54ICogQUIueCArIEFCLnkgKiBBQi55LFxuICAgIGFwX2FiID0gQVAueCAqIEFCLnggKyBBUC55ICogQUIueSxcbiAgICB0ID0gYXBfYWIgLyBhYjJcbiAgcmV0dXJuIG5ldyBQb2ludChBLnggKyBBQi54ICogdCwgQS55ICsgQUIueSAqIHQpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb2ludE9uTGluZShMUDEsIExQMiwgcGVyY2VudCkge1xuICBjb25zdCBkeCA9IExQMi54IC0gTFAxLngsIGR5ID0gTFAyLnkgLSBMUDEueVxuICByZXR1cm4gbmV3IFBvaW50KExQMS54ICsgcGVyY2VudCAqIGR4LCBMUDEueSArIHBlcmNlbnQgKiBkeSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBvaW50T25MaW5lQnlMZW5naHQoTFAxLCBMUDIsIGxlbmdodCkge1xuICBjb25zdCBkeCA9IExQMi54IC0gTFAxLnhcbiAgY29uc3QgZHkgPSBMUDIueSAtIExQMS55XG4gIGNvbnN0IHBlcmNlbnQgPSBsZW5naHQgLyBnZXREaXN0YW5jZShMUDEsIExQMilcbiAgcmV0dXJuIG5ldyBQb2ludChMUDEueCArIHBlcmNlbnQgKiBkeCwgTFAxLnkgKyBwZXJjZW50ICogZHkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRQb2ludFRvQm91bmRQb2ludHMoYm91bmRwb2ludHMsIHBvaW50LCBpc1JpZ2h0KSB7XG4gIGNvbnN0IHJlc3VsdCA9IGJvdW5kcG9pbnRzLmZpbHRlcigoYlBvaW50KSA9PiB7XG4gICAgcmV0dXJuIGJQb2ludC55ID4gcG9pbnQueSB8fCAoaXNSaWdodCA/IGJQb2ludC54IDwgcG9pbnQueCA6IGJQb2ludC54ID4gcG9pbnQueClcbiAgfSlcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChwb2ludC55IDwgcmVzdWx0W2ldLnkpIHtcbiAgICAgIHJlc3VsdC5zcGxpY2UoaSwgMCwgcG9pbnQpXG4gICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxuICB9XG4gIHJlc3VsdC5wdXNoKHBvaW50KVxuICByZXR1cm4gcmVzdWx0XG59XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9wb2ludCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFuZ2xlRGlmZihhbHBoYSwgYmV0YSkge1xuICBjb25zdCBtaW5BbmdsZSA9IE1hdGgubWluKGFscGhhLCBiZXRhKVxuICBjb25zdCBtYXhBbmdsZSA9ICBNYXRoLm1heChhbHBoYSwgYmV0YSlcbiAgcmV0dXJuIE1hdGgubWluKG1heEFuZ2xlIC0gbWluQW5nbGUsIG1pbkFuZ2xlICsgTWF0aC5QSSoyIC0gbWF4QW5nbGUpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbmdsZShwMSwgcDIpIHtcbiAgY29uc3QgZGlmZiA9IHAyLnN1YihwMSlcbiAgcmV0dXJuIG5vcm1hbGl6ZUFuZ2xlKE1hdGguYXRhbjIoZGlmZi55LCBkaWZmLngpKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9SYWRpYW4oYW5nbGUpIHtcbiAgcmV0dXJuICgoYW5nbGUgJSAzNjApICogTWF0aC5QSSAvIDE4MClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvRGVncmVlKGFuZ2xlKSB7XG4gIHJldHVybiAoYW5nbGUgKiAxODAgLyBNYXRoLlBJKSAlIDM2MFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRBbmdsZShtaW4sIG1heCwgdmFsKSB7XG4gIGxldCBkbWluLCBkbWF4XG4gIGlmIChtaW4gPCBtYXggJiYgdmFsID4gbWluICYmIHZhbCA8IG1heCkge1xuICAgIHJldHVybiB2YWxcbiAgfSBlbHNlIGlmIChtYXggPCBtaW4gJiYgKHZhbCA8IG1heCB8fCB2YWwgPiBtaW4pKSB7XG4gICAgcmV0dXJuIHZhbFxuICB9IGVsc2Uge1xuICAgIGRtaW4gPSBnZXRBbmdsZURpZmYobWluLCB2YWwpXG4gICAgZG1heCA9IGdldEFuZ2xlRGlmZihtYXgsIHZhbClcbiAgICBpZiAoZG1pbiA8IGRtYXgpIHtcbiAgICAgIHJldHVybiBtaW5cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG1heFxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmVhcmVzdEFuZ2xlKGFyciwgYW5nbGUpIHtcbiAgbGV0IGksIHRlbXAsIGRpZmYgPSBNYXRoLlBJICogMiwgdmFsdWVcbiAgZm9yIChpID0gMDsgaSA8IGFyci5sZW5ndGg7aSsrKSB7XG4gICAgdGVtcCA9IGdldEFuZ2xlRGlmZihhcnJbaV0sIGFuZ2xlKVxuICAgIGlmIChkaWZmIDwgdGVtcCkge1xuICAgICAgZGlmZiA9IHRlbXBcbiAgICAgIHZhbHVlID0gYXJyW2ldXG4gICAgfVxuICB9XG4gIHJldHVybiB2YWx1ZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplQW5nbGUodmFsKSB7XG4gIHdoaWxlICh2YWwgPCAwKSB7XG4gICAgdmFsICs9IDIgKiBNYXRoLlBJXG4gIH1cbiAgd2hpbGUgKHZhbCA+IDIgKiBNYXRoLlBJKSB7XG4gICAgdmFsIC09IDIgKiBNYXRoLlBJXG4gIH1cbiAgcmV0dXJuIHZhbFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKGFuZ2xlLCBsZW5ndGgsIGNlbnRlcikge1xuICBjZW50ZXIgPSBjZW50ZXIgfHwgbmV3IFBvaW50KDAsIDApXG4gIHJldHVybiBjZW50ZXIuYWRkKG5ldyBQb2ludChsZW5ndGggKiBNYXRoLmNvcyhhbmdsZSksIGxlbmd0aCAqIE1hdGguc2luKGFuZ2xlKSkpXG59XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9nZW9tZXRyeS9wb2ludCdcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSAnLi9nZW9tZXRyeS9yZWN0YW5nbGUnXG5pbXBvcnQge1xuICBnZXRQb2ludE9uTGluZUJ5TGVuZ2h0LFxuICBkaXJlY3RDcm9zc2luZyxcbiAgYm91bmRUb0xpbmVcbn0gZnJvbSAnLi9nZW9tZXRyeS9ib3VuZHMnXG5cbmltcG9ydCB7XG4gIGdldEFuZ2xlLFxuICBub3JtYWxpemVBbmdsZSxcbiAgYm91bmRBbmdsZSxcbiAgZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtXG59IGZyb20gJy4vZ2VvbWV0cnkvYW5nbGVzJ1xuXG5leHBvcnQgY2xhc3MgQm91bmQge1xuICBjb25zdHJ1Y3RvciAoKSB7fVxuXG4gIGJvdW5kKHBvaW50LCBfc2l6ZSkge1xuICAgIHJldHVybiBwb2ludFxuICB9XG5cbiAgcmVmcmVzaCAoKSB7fVxuXG4gIHN0YXRpYyBib3VuZGluZygpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyB0aGlzKC4uLmFyZ3VtZW50cylcbiAgICByZXR1cm4gaW5zdGFuY2UuYm91bmQuYmluZChpbnN0YW5jZSlcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb1JlY3RhbmdsZSBleHRlbmRzIEJvdW5kIHtcbiAgY29uc3RydWN0b3IocmVjdGFuZ2xlKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMucmVjdGFuZ2xlID0gcmVjdGFuZ2xlXG4gIH1cblxuICBib3VuZChwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IGNhbGNQb2ludCA9IHBvaW50LmNsb25lKClcbiAgICBjb25zdCByZWN0UDIgPSB0aGlzLnJlY3RhbmdsZS5nZXRQMygpXG5cbiAgICBpZiAodGhpcy5yZWN0YW5nbGUucG9zaXRpb24ueCA+IGNhbGNQb2ludC54KSB7XG4gICAgICAoY2FsY1BvaW50LnggPSB0aGlzLnJlY3RhbmdsZS5wb3NpdGlvbi54KVxuICAgIH1cbiAgICBpZiAodGhpcy5yZWN0YW5nbGUucG9zaXRpb24ueSA+IGNhbGNQb2ludC55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHRoaXMucmVjdGFuZ2xlLnBvc2l0aW9uLnlcbiAgICB9XG4gICAgaWYgKHJlY3RQMi54IDwgY2FsY1BvaW50LnggKyBzaXplLngpIHtcbiAgICAgIGNhbGNQb2ludC54ID0gcmVjdFAyLnggLSBzaXplLnhcbiAgICB9XG4gICAgaWYgKHJlY3RQMi55IDwgY2FsY1BvaW50LnkgKyBzaXplLnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gcmVjdFAyLnkgLSBzaXplLnlcbiAgICB9XG5cbiAgICByZXR1cm4gY2FsY1BvaW50XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9FbGVtZW50IGV4dGVuZHMgQm91bmRUb1JlY3RhbmdsZSB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbnRhaW5lcikge1xuICAgIHN1cGVyKFJlY3RhbmdsZS5mcm9tRWxlbWVudChlbGVtZW50LCBjb250YWluZXIpKVxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lclxuICB9XG5cbiAgcmVmcmVzaCAoKSB7XG4gICAgdGhpcy5yZWN0YW5nbGUgPSBSZWN0YW5nbGUuZnJvbUVsZW1lbnQodGhpcy5lbGVtZW50LCB0aGlzLmNvbnRhaW5lcilcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb0xpbmVYIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3Rvcih4LCBzdGFydFksIGVuZFkpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy54ID0geFxuICAgIHRoaXMuc3RhcnRZID0gc3RhcnRZXG4gICAgdGhpcy5lbmRZID0gZW5kWVxuICB9XG5cbiAgYm91bmQocG9pbnQsIHNpemUpIHtcbiAgICBjb25zdCBjYWxjUG9pbnQgPSBwb2ludC5jbG9uZSgpXG5cbiAgICBjYWxjUG9pbnQueCA9IHRoaXMueFxuICAgIGlmICh0aGlzLnN0YXJ0WSA+IGNhbGNQb2ludC55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHRoaXMuc3RhcnRZXG4gICAgfVxuICAgIGlmICh0aGlzLmVuZFkgPCBjYWxjUG9pbnQueSArIHNpemUueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSB0aGlzLmVuZFkgLSBzaXplLnlcbiAgICB9XG5cbiAgICByZXR1cm4gY2FsY1BvaW50XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9MaW5lWSBleHRlbmRzIEJvdW5kIHtcbiAgY29uc3RydWN0b3IoeSwgc3RhcnRYLCBlbmRYKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMueSA9IHlcbiAgICB0aGlzLnN0YXJ0WCA9IHN0YXJ0WFxuICAgIHRoaXMuZW5kWCA9IGVuZFhcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgY2FsY1BvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIGNhbGNQb2ludC55ID0gdGhpcy55XG4gICAgaWYgKHRoaXMuc3RhcnRYID4gY2FsY1BvaW50LngpIHtcbiAgICAgIGNhbGNQb2ludC54ID0gdGhpcy5zdGFydFhcbiAgICB9XG4gICAgaWYgKHRoaXMuZW5kWCA8IGNhbGNQb2ludC54ICsgc2l6ZS54KSB7XG4gICAgICBjYWxjUG9pbnQueCA9IHRoaXMuZW5kWCAtIHNpemUueFxuICAgIH1cbiAgICByZXR1cm4gY2FsY1BvaW50XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9MaW5lIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3RvcihzdGFydFBvaW50LCBlbmRQb2ludCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnN0YXJ0UG9pbnQgPSBzdGFydFBvaW50XG4gICAgdGhpcy5lbmRQb2ludCA9IGVuZFBvaW50XG4gICAgY29uc3QgYWxwaGEgPSBNYXRoLmF0YW4yKGVuZFBvaW50LnkgLSBzdGFydFBvaW50LnksIGVuZFBvaW50LnggLSBzdGFydFBvaW50LngpXG4gICAgY29uc3QgYmV0YSA9IGFscGhhICsgTWF0aC5QSSAvIDJcbiAgICB0aGlzLnNvbWVLID0gMTBcbiAgICB0aGlzLmNvc0JldGEgPSBNYXRoLmNvcyhiZXRhKVxuICAgIHRoaXMuc2luQmV0YSA9IE1hdGguc2luKGJldGEpXG4gIH1cblxuICBib3VuZChwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IHBvaW50MiA9IG5ldyBQb2ludChcbiAgICAgIHBvaW50LnggKyB0aGlzLnNvbWVLICogdGhpcy5jb3NCZXRhLFxuICAgICAgcG9pbnQueSArIHRoaXMuc29tZUsgKiB0aGlzLnNpbkJldGFcbiAgICApXG5cbiAgICBjb25zdCBuZXdFbmRQb2ludCA9IGdldFBvaW50T25MaW5lQnlMZW5naHQodGhpcy5lbmRQb2ludCwgdGhpcy5zdGFydFBvaW50LCBzaXplLngpXG4gICAgY29uc3QgcG9pbnRDcm9zc2luZyA9IGRpcmVjdENyb3NzaW5nKHRoaXMuc3RhcnRQb2ludCwgdGhpcy5lbmRQb2ludCwgcG9pbnQsIHBvaW50MilcblxuICAgIHJldHVybiBib3VuZFRvTGluZSh0aGlzLnN0YXJ0UG9pbnQsIG5ld0VuZFBvaW50LCBwb2ludENyb3NzaW5nKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvQ2lyY2xlIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3RvcihjZW50ZXIsIHJhZGl1cykge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLmNlbnRlciA9IGNlbnRlclxuICAgIHRoaXMucmFkaXVzID0gcmFkaXVzXG4gIH1cblxuICBib3VuZChwb2ludCwgX3NpemUpIHtcbiAgICByZXR1cm4gZ2V0UG9pbnRPbkxpbmVCeUxlbmdodCh0aGlzLmNlbnRlciwgcG9pbnQsIHRoaXMucmFkaXVzKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvQXJjIGV4dGVuZHMgQm91bmRUb0NpcmNsZSB7XG4gIGNvbnN0cnVjdG9yKGNlbnRlciwgcmFkaXVzLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSkge1xuICAgIHN1cGVyKGNlbnRlciwgcmFkaXVzKVxuICAgIHRoaXMuX3N0YXJ0QW5nbGUgPSBzdGFydEFuZ2xlXG4gICAgdGhpcy5fZW5kQW5nbGUgPSBlbmRBbmdsZVxuICB9XG5cbiAgc3RhcnRBbmdsZSgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMuX3N0YXJ0QW5nbGUgPT09ICdmdW5jdGlvbicgPyB0aGlzLl9zdGFydEFuZ2xlKCkgOiB0aGlzLl9zdGFydEFuZ2xlXG4gIH1cblxuICBlbmRBbmdsZSgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMuX2VuZEFuZ2xlID09PSAnZnVuY3Rpb24nID8gdGhpcy5fZW5kQW5nbGUoKSA6IHRoaXMuX2VuZEFuZ2xlXG4gIH1cblxuICBib3VuZChwb2ludCwgX3NpemUpIHtcbiAgICBsZXQgYW5nbGUgPSBnZXRBbmdsZSh0aGlzLmNlbnRlciwgcG9pbnQpXG4gICAgYW5nbGUgPSBub3JtYWxpemVBbmdsZShhbmdsZSlcbiAgICBhbmdsZSA9IGJvdW5kQW5nbGUodGhpcy5zdGFydEFuZ2xlKCksIHRoaXMuZW5kQW5nbGUoKSwgYW5nbGUpXG4gICAgcmV0dXJuIGdldFBvaW50RnJvbVJhZGlhbFN5c3RlbShhbmdsZSwgdGhpcy5yYWRpdXMsIHRoaXMuY2VudGVyKVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhcnJheSwgdmFsKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoYXJyYXlbaV0gPT09IHZhbCkge1xuICAgICAgYXJyYXkuc3BsaWNlKGksIDEpXG4gICAgICBpLS1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycmF5XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByYW5nZShzdGFydCwgc3RvcCwgc3RlcCkge1xuICBjb25zdCByZXN1bHQgPSBbXVxuICBpZiAodHlwZW9mIHN0b3AgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgc3RvcCA9IHN0YXJ0XG4gICAgc3RhcnQgPSAwXG4gIH1cbiAgaWYgKHR5cGVvZiBzdGVwID09PSAndW5kZWZpbmVkJykge1xuICAgIHN0ZXAgPSAxXG4gIH1cbiAgaWYgKChzdGVwID4gMCAmJiBzdGFydCA+PSBzdG9wKSB8fCAoc3RlcCA8IDAgJiYgc3RhcnQgPD0gc3RvcCkpIHtcbiAgICByZXR1cm4gW11cbiAgfVxuICBmb3IgKGxldCBpID0gc3RhcnQ7IHN0ZXAgPiAwID8gaSA8IHN0b3AgOiBpID4gc3RvcDsgaSArPSBzdGVwKSB7XG4gICAgcmVzdWx0LnB1c2goaSlcbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9nZW9tZXRyeS9wb2ludCdcbmltcG9ydCB7IGFkZFBvaW50VG9Cb3VuZFBvaW50cyB9IGZyb20gJy4vZ2VvbWV0cnkvYm91bmRzJ1xuXG5pbXBvcnQge1xuICBpbmRleE9mTmVhcmVzdFBvaW50LFxuICBnZXREaXN0YW5jZVxufSBmcm9tICcuL2dlb21ldHJ5L2Rpc3RhbmNlcydcblxuY2xhc3MgQmFzaWNTdHJhdGVneSB7XG4gIGNvbnN0cnVjdG9yKHJlY3RhbmdsZSwgb3B0aW9ucz17fSkge1xuICAgIHRoaXMucmVjdGFuZ2xlID0gcmVjdGFuZ2xlXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9uc1xuICB9XG5cbiAgZ2V0IGJvdW5kUmVjdCAoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGlzLnJlY3RhbmdsZSA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMucmVjdGFuZ2xlKCkgOiB0aGlzLnJlY3RhbmdsZVxuICB9XG59XG5cbmNsYXNzIE5vdENyb3NzaW5nU3RyYXRlZ3kgZXh0ZW5kcyBCYXNpY1N0cmF0ZWd5IHtcbiAgcG9zaXRpb25pbmcgKHJlY3RhbmdsZUxpc3QsIGluZGV4ZXNPZk5ld3MpIHtcbiAgICBjb25zdCBzdGF0aWNSZWN0YW5nbGVJbmRleGVzID0gcmVjdGFuZ2xlTGlzdC5yZWR1Y2UoKGluZGV4ZXMsIF9yZWN0LCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGluZGV4ZXNPZk5ld3MuaW5kZXhPZihpbmRleCkgPT09IC0xKSB7XG4gICAgICAgIGluZGV4ZXMucHVzaChpbmRleClcbiAgICAgIH1cbiAgICAgIHJldHVybiBpbmRleGVzXG4gICAgfSwgW10pXG5cbiAgICBpbmRleGVzT2ZOZXdzLmZvckVhY2goKGluZGV4KSA9PiB7XG4gICAgICBsZXQgcmVjdCA9IHJlY3RhbmdsZUxpc3RbaW5kZXhdXG4gICAgICBsZXQgcmVtb3ZhYmxlID0gZmFsc2VcblxuICAgICAgc3RhdGljUmVjdGFuZ2xlSW5kZXhlcy5mb3JFYWNoKChpbmRleE9mU3RhdGljKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YXRpY1JlY3QgPSByZWN0YW5nbGVMaXN0W2luZGV4T2ZTdGF0aWNdXG4gICAgICAgIHJlY3QgPSBzdGF0aWNSZWN0Lm1vdmVUb0JvdW5kKHJlY3QpXG4gICAgICB9KVxuXG4gICAgICByZW1vdmFibGUgPSBzdGF0aWNSZWN0YW5nbGVJbmRleGVzLnNvbWUoKGluZGV4T2ZTdGF0aWMpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhdGljUmVjdCA9IHJlY3RhbmdsZUxpc3RbaW5kZXhPZlN0YXRpY11cbiAgICAgICAgcmV0dXJuICAhIXN0YXRpY1JlY3QuYW5kKHJlY3QpXG4gICAgICB9KSB8fCByZWN0LmFuZCh0aGlzLmJvdW5kUmVjdCkuZ2V0U3F1YXJlKCkgIT09IHJlY3QuZ2V0U3F1YXJlKClcblxuICAgICAgaWYgKHJlbW92YWJsZSkge1xuICAgICAgICByZWN0LnJlbW92YWJsZSA9IHRydWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMucHVzaChpbmRleClcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiByZWN0YW5nbGVMaXN0XG4gIH1cblxuICBzb3J0aW5nKG9kbERyYWdnYWJsZXNMaXN0LCBuZXdEcmFnZ2FibGVzLCBpbmRleE9mTmV3cykge1xuICAgIGNvbnN0IGRyYWdnYWJsZXMgPSBvZGxEcmFnZ2FibGVzTGlzdC5jb25jYXQobmV3RHJhZ2dhYmxlcylcbiAgICBuZXdEcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgaW5kZXhPZk5ld3MucHVzaChkcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSlcbiAgICB9KVxuICAgIHJldHVybiBkcmFnZ2FibGVzXG4gIH1cbn1cblxuY2xhc3MgRmxvYXRMZWZ0U3RyYXRlZ3kgZXh0ZW5kcyBCYXNpY1N0cmF0ZWd5IHtcbiAgY29uc3RydWN0b3IocmVjdGFuZ2xlLCBvcHRpb25zPXt9KSB7XG4gICAgc3VwZXIocmVjdGFuZ2xlLCBvcHRpb25zKVxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgcmVtb3ZhYmxlOiB0cnVlXG4gICAgfSwgb3B0aW9ucylcblxuICAgIHRoaXMucmFkaXVzID0gb3B0aW9ucy5yYWRpdXMgfHwgODBcblxuICAgIHRoaXMucGFkZGluZ1RvcExlZnQgPSBvcHRpb25zLnBhZGRpbmdUb3BMZWZ0IHx8IG5ldyBQb2ludCgwLCAwKVxuICAgIHRoaXMucGFkZGluZ0JvdHRvbVJpZ2h0ID0gb3B0aW9ucy5wYWRkaW5nQm90dG9tUmlnaHQgfHwgbmV3IFBvaW50KDAsIDApXG4gICAgdGhpcy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgPSBvcHRpb25zLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyB8fCAwXG5cbiAgICB0aGlzLmdldERpc3RhbmNlID0gb3B0aW9ucy5nZXREaXN0YW5jZSB8fCBnZXREaXN0YW5jZVxuICAgIHRoaXMuZ2V0UG9zaXRpb24gPSBvcHRpb25zLmdldFBvc2l0aW9uIHx8ICgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucG9zaXRpb24pXG4gIH1cblxuICBwb3NpdGlvbmluZyhyZWN0YW5nbGVMaXN0LCBfaW5kZXhlc09mTmV3cykge1xuICAgIGNvbnN0IGJvdW5kUmVjdCA9IHRoaXMuYm91bmRSZWN0XG4gICAgY29uc3QgcmVjdFAyID0gYm91bmRSZWN0LmdldFAyKClcbiAgICBsZXQgYm91bmRhcnlQb2ludHMgPSBbYm91bmRSZWN0LnBvc2l0aW9uXVxuXG4gICAgcmVjdGFuZ2xlTGlzdC5mb3JFYWNoKChyZWN0LCByZWN0SW5kZXgpID0+IHtcbiAgICAgIGxldCBwb3NpdGlvbiwgaXNWYWxpZCA9IGZhbHNlXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvdW5kYXJ5UG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHBvc2l0aW9uID0gbmV3IFBvaW50KFxuICAgICAgICAgIGJvdW5kYXJ5UG9pbnRzW2ldLnggKyB0aGlzLnBhZGRpbmdUb3BMZWZ0LngsXG4gICAgICAgICAgaSA+IDAgPyAoYm91bmRhcnlQb2ludHNbaSAtIDFdLnkgKyB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcykgOiAoYm91bmRSZWN0LnBvc2l0aW9uLnkgKyB0aGlzLnBhZGRpbmdUb3BMZWZ0LnkpXG4gICAgICAgIClcblxuICAgICAgICBpc1ZhbGlkID0gKHBvc2l0aW9uLnggKyByZWN0LnNpemUueCA8IHJlY3RQMi54KVxuXG4gICAgICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgcG9zaXRpb24gPSBuZXcgUG9pbnQoXG4gICAgICAgICAgYm91bmRSZWN0LnBvc2l0aW9uLnggKyB0aGlzLnBhZGRpbmdUb3BMZWZ0LngsXG4gICAgICAgICAgYm91bmRhcnlQb2ludHNbYm91bmRhcnlQb2ludHMubGVuZ3RoIC0gMV0ueSArIChyZWN0SW5kZXggPiAwID8gdGhpcy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgOiB0aGlzLnBhZGRpbmdUb3BMZWZ0LnkpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgcmVjdC5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnJlbW92YWJsZSAmJiByZWN0LmdldFAzKCkueSA+IGJvdW5kUmVjdC5nZXRQMygpLnkpIHtcbiAgICAgICAgcmVjdC5yZW1vdmFibGUgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGJvdW5kYXJ5UG9pbnRzID0gYWRkUG9pbnRUb0JvdW5kUG9pbnRzKGJvdW5kYXJ5UG9pbnRzLCByZWN0LmdldFAzKCkuYWRkKHRoaXMucGFkZGluZ0JvdHRvbVJpZ2h0KSlcbiAgICB9KVxuICAgIHJldHVybiByZWN0YW5nbGVMaXN0XG4gIH1cblxuICBzb3J0aW5nKG9kbERyYWdnYWJsZXNMaXN0LCBuZXdEcmFnZ2FibGVzLCBpbmRleE9mTmV3cykge1xuICAgIGNvbnN0IG5ld0xpc3QgPSBvZGxEcmFnZ2FibGVzTGlzdC5jb25jYXQoKVxuICAgIGNvbnN0IGxpc3RPbGRQb3NpdGlvbiA9IG9kbERyYWdnYWJsZXNMaXN0Lm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUuZ2V0UG9zaXRpb24oKSlcbiAgICBuZXdEcmFnZ2FibGVzLmZvckVhY2goKG5ld0RyYWdnYWJsZSkgPT4ge1xuICAgICAgbGV0IGluZGV4ID0gaW5kZXhPZk5lYXJlc3RQb2ludChsaXN0T2xkUG9zaXRpb24sIHRoaXMuZ2V0UG9zaXRpb24obmV3RHJhZ2dhYmxlKSwgdGhpcy5yYWRpdXMsIHRoaXMuZ2V0RGlzdGFuY2UpXG4gICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgIGluZGV4ID0gbmV3TGlzdC5sZW5ndGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluZGV4ID0gbmV3TGlzdC5pbmRleE9mKG9kbERyYWdnYWJsZXNMaXN0W2luZGV4XSlcbiAgICAgIH1cbiAgICAgIG5ld0xpc3Quc3BsaWNlKGluZGV4LCAwLCBuZXdEcmFnZ2FibGUpXG4gICAgfSlcbiAgICBuZXdEcmFnZ2FibGVzLmZvckVhY2goKG5ld0RyYWdnYWJsZSkgPT4ge1xuICAgICAgaW5kZXhPZk5ld3MucHVzaChuZXdMaXN0LmluZGV4T2YobmV3RHJhZ2dhYmxlKSlcbiAgICB9KVxuICAgIHJldHVybiBuZXdMaXN0XG4gIH1cbn1cblxuY2xhc3MgRmxvYXRSaWdodFN0cmF0ZWd5IGV4dGVuZHMgRmxvYXRMZWZ0U3RyYXRlZ3kge1xuICBjb25zdHJ1Y3RvcihyZWN0YW5nbGUsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcihyZWN0YW5nbGUsIG9wdGlvbnMpXG5cbiAgICB0aGlzLnBhZGRpbmdUb3BSaWdodCA9IG9wdGlvbnMucGFkZGluZ1RvcFJpZ2h0IHx8IG5ldyBQb2ludCg1LCA1KVxuICAgIHRoaXMucGFkZGluZ0JvdHRvbUxlZnQgPSBvcHRpb25zLnBhZGRpbmdCb3R0b21MZWZ0IHx8IG5ldyBQb2ludCgwLCAwKVxuICAgIHRoaXMueUdhcEJldHdlZW5EcmFnZ2FibGVzID0gb3B0aW9ucy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgfHwgMFxuXG4gICAgdGhpcy5wYWRkaW5nQm90dG9tTmVnTGVmdCA9IG5ldyBQb2ludCgtdGhpcy5wYWRkaW5nQm90dG9tTGVmdC54LCB0aGlzLnBhZGRpbmdCb3R0b21MZWZ0LnkpXG4gIH1cblxuICBwb3NpdGlvbmluZyhyZWN0YW5nbGVMaXN0LCBfaW5kZXhlc09mTmV3cykge1xuICAgIGNvbnN0IGJvdW5kUmVjdCA9IHRoaXMuYm91bmRSZWN0XG4gICAgbGV0IGJvdW5kYXJ5UG9pbnRzID0gW2JvdW5kUmVjdC5nZXRQMigpXVxuXG4gICAgcmVjdGFuZ2xlTGlzdC5mb3JFYWNoKChyZWN0LCByZWN0SW5kZXgpID0+IHtcbiAgICAgIGxldCBwb3NpdGlvbiwgaXNWYWxpZCA9IGZhbHNlXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvdW5kYXJ5UG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHBvc2l0aW9uID0gbmV3IFBvaW50KFxuICAgICAgICAgIGJvdW5kYXJ5UG9pbnRzW2ldLnggLSByZWN0LnNpemUueCAtIHRoaXMucGFkZGluZ1RvcFJpZ2h0LngsXG4gICAgICAgICAgaSA+IDAgPyAoYm91bmRhcnlQb2ludHNbaSAtIDFdLnkgKyB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcykgOiAoYm91bmRSZWN0LnBvc2l0aW9uLnkgKyB0aGlzLnBhZGRpbmdUb3BSaWdodC55KVxuICAgICAgICApXG5cbiAgICAgICAgaXNWYWxpZCA9IChwb3NpdGlvbi54ID4gcmVjdC5wb3NpdGlvbi54KVxuICAgICAgICBpZiAoaXNWYWxpZCkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICBwb3NpdGlvbiA9IG5ldyBQb2ludChcbiAgICAgICAgICBib3VuZFJlY3QuZ2V0UDIoKS54ICAtIHJlY3Quc2l6ZS54IC0gdGhpcy5wYWRkaW5nVG9wUmlnaHQueCxcbiAgICAgICAgICBib3VuZGFyeVBvaW50c1tib3VuZGFyeVBvaW50cy5sZW5ndGggLSAxXS55ICsgKHJlY3RJbmRleCA+IDAgPyB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyA6IHRoaXMucGFkZGluZ1RvcFJpZ2h0LnkpXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIHJlY3QucG9zaXRpb24gPSBwb3NpdGlvblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZW1vdmFibGUgJiYgcmVjdC5nZXRQNCgpLnkgPiBib3VuZFJlY3QuZ2V0UDQoKS55KSB7XG4gICAgICAgIHJlY3QucmVtb3ZhYmxlID0gdHJ1ZVxuICAgICAgfVxuICAgICAgYm91bmRhcnlQb2ludHMgPSBhZGRQb2ludFRvQm91bmRQb2ludHMoYm91bmRhcnlQb2ludHMsIHJlY3QuZ2V0UDQoKS5hZGQodGhpcy5wYWRkaW5nQm90dG9tTmVnTGVmdCksIHRydWUpXG4gICAgfSlcbiAgICByZXR1cm4gcmVjdGFuZ2xlTGlzdFxuICB9XG59XG5cbmV4cG9ydCB7IE5vdENyb3NzaW5nU3RyYXRlZ3ksIEZsb2F0TGVmdFN0cmF0ZWd5LCBGbG9hdFJpZ2h0U3RyYXRlZ3kgfVxuIiwiaW1wb3J0IHJhbmdlIGZyb20gJy4vdXRpbHMvcmFuZ2UuanMnXG5pbXBvcnQgcmVtb3ZlSXRlbSBmcm9tICcuL3V0aWxzL3JlbW92ZS1hcnJheS1pdGVtJ1xuaW1wb3J0IGdldERlZmF1bHRDb250YWluZXIgZnJvbSAnLi91dGlscy9nZXQtZGVmYXVsdC1jb250YWluZXInXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnRFbWl0dGVyJ1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tICcuL2dlb21ldHJ5L3JlY3RhbmdsZSdcbmltcG9ydCB7IHRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3RvcnkgfSBmcm9tICcuL2dlb21ldHJ5L2Rpc3RhbmNlcydcbmltcG9ydCB7IHNjb3BlcywgZGVmYXVsdFNjb3BlIH0gZnJvbSAnLi9zY29wZSdcblxuaW1wb3J0IHsgRmxvYXRMZWZ0U3RyYXRlZ3kgfSBmcm9tICcuL3Bvc2l0aW9uaW5nJ1xuaW1wb3J0IHsgQm91bmRUb0VsZW1lbnQgfSBmcm9tICcuL2JvdW5kaW5nJ1xuXG5jb25zdCBhZGRUb0RlZmF1bHRTY29wZSA9IGZ1bmN0aW9uKHRhcmdldCkge1xuICBkZWZhdWx0U2NvcGUuYWRkVGFyZ2V0KHRhcmdldClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFyZ2V0IGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgZHJhZ2dhYmxlcywgb3B0aW9ucyA9IHt9KSB7XG4gICAgc3VwZXIob3B0aW9ucylcbiAgICBjb25zdCB0YXJnZXQgPSB0aGlzXG5cbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHRpbWVFbmQ6IDIwMCxcbiAgICAgIHRpbWVFeGNhbmdlOiA0MDBcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGhpcy5wb3NpdGlvbmluZ1N0cmF0ZWd5ID0gb3B0aW9ucy5zdHJhdGVneSB8fCBuZXcgRmxvYXRMZWZ0U3RyYXRlZ3koXG4gICAgICB0aGlzLmdldFJlY3RhbmdsZS5iaW5kKHRoaXMpLFxuICAgICAge1xuICAgICAgICByYWRpdXM6IDgwLFxuICAgICAgICBnZXREaXN0YW5jZTogdHJhbnNmb3JtZWRTcGFjZURpc3RhbmNlRmFjdG9yeSh7IHg6IDEsIHk6IDQgfSksXG4gICAgICAgIHJlbW92YWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIClcblxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgICBkcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnRhcmdldHMucHVzaCh0YXJnZXQpKVxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZXNcblxuICAgIFRhcmdldC5lbWl0dGVyLmVtaXQoJ3RhcmdldDpjcmVhdGUnLCB0aGlzKVxuXG4gICAgdGhpcy5zdGFydEJvdW5kaW5nKClcbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgc3RhcnRCb3VuZGluZygpIHtcbiAgICB0aGlzLmJvdW5kID0gdGhpcy5vcHRpb25zLmJvdW5kIHx8IEJvdW5kVG9FbGVtZW50LmJvdW5kaW5nKHRoaXMuZWxlbWVudClcbiAgfVxuXG4gIHBvc2l0aW9uaW5nIChkcmFnZ2FibGVzLCBpbmRleGVzT2ZOZXcpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbmluZ1N0cmF0ZWd5LnBvc2l0aW9uaW5nKGRyYWdnYWJsZXMsIGluZGV4ZXNPZk5ldylcbiAgfVxuXG4gIHNvcnRpbmcgKG9sZERyYWdnYWJsZXMsIG5ld0RyYWdnYWJsZXMsIGluZGV4T2ZOZXdzKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25pbmdTdHJhdGVneS5zb3J0aW5nKG9sZERyYWdnYWJsZXMsIG5ld0RyYWdnYWJsZXMsIGluZGV4T2ZOZXdzKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBsZXQgcmVjdGFuZ2xlcywgaW5kZXhlc09mTmV3XG5cbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcyA9IHRoaXMuZHJhZ2dhYmxlcy5maWx0ZXIoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgbGV0IGVsZW1lbnQgPSBkcmFnZ2FibGUuZWxlbWVudC5wYXJlbnROb2RlXG4gICAgICB3aGlsZSAoZWxlbWVudCkge1xuICAgICAgICBpZiAoZWxlbWVudCA9PT0gdGhpcy5lbGVtZW50KSB7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlXG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9KVxuXG4gICAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmxlbmd0aCkge1xuICAgICAgaW5kZXhlc09mTmV3ID0gcmFuZ2UodGhpcy5pbm5lckRyYWdnYWJsZXMubGVuZ3RoKVxuICAgICAgcmVjdGFuZ2xlcyA9IHRoaXMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgICAgfSksIGluZGV4ZXNPZk5ldylcbiAgICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgaW5kZXhlc09mTmV3KVxuICAgICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB0aGlzLmVtaXQoJ3RhcmdldDphZGQnLCBkcmFnZ2FibGUpKVxuICAgIH1cbiAgfVxuXG4gIGdldFJlY3RhbmdsZSgpIHtcbiAgICByZXR1cm4gUmVjdGFuZ2xlLmZyb21FbGVtZW50KHRoaXMuZWxlbWVudCwgdGhpcy5jb250YWluZXIsIHRydWUpXG4gIH1cblxuICBjYXRjaERyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmNhdGNoRHJhZ2dhYmxlKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmNhdGNoRHJhZ2dhYmxlKHRoaXMsIGRyYWdnYWJsZSlcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGFyZ2V0UmVjdGFuZ2xlID0gdGhpcy5nZXRSZWN0YW5nbGUoKVxuICAgICAgY29uc3QgZHJhZ2dhYmxlU3F1YXJlID0gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpLmdldFNxdWFyZSgpXG5cbiAgICAgIHJldHVybiBkcmFnZ2FibGVTcXVhcmUgPCB0YXJnZXRSZWN0YW5nbGUuZ2V0U3F1YXJlKClcbiAgICAgICAgICAgICAgJiYgdGFyZ2V0UmVjdGFuZ2xlLmluY2x1ZGVQb2ludChkcmFnZ2FibGUuZ2V0Q2VudGVyKCkpXG4gICAgfVxuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UmVjdGFuZ2xlKCkucG9zaXRpb25cbiAgfVxuXG4gIGdldFNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UmVjdGFuZ2xlKCkuc2l6ZVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICBzY29wZXMuZm9yRWFjaCgoc2NvcGUpID0+IHJlbW92ZUl0ZW0oc2NvcGUudGFyZ2V0cywgdGhpcykpXG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgfSksIFtdKVxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgW10sIDApXG4gIH1cblxuICBvbkVuZChkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBuZXdEcmFnZ2FibGVzSW5kZXggPSBbXVxuXG4gICAgaWYgKHRoaXMuZ2V0UmVjdGFuZ2xlKCkuaW5jbHVkZVBvaW50KGRyYWdnYWJsZS5nZXRDZW50ZXIoKSkpIHtcbiAgICAgIGRyYWdnYWJsZS5wb3NpdGlvbiA9IHRoaXMuYm91bmQoZHJhZ2dhYmxlLnBvc2l0aW9uLCBkcmFnZ2FibGUuZ2V0U2l6ZSgpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICB0aGlzLmVtaXQoJ3RhcmdldDpiZWZvcmVBZGQnLCBkcmFnZ2FibGUpXG5cbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcyA9IHRoaXMuc29ydGluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcywgW2RyYWdnYWJsZV0sIG5ld0RyYWdnYWJsZXNJbmRleClcbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBuZXdEcmFnZ2FibGVzSW5kZXgpXG5cbiAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIG5ld0RyYWdnYWJsZXNJbmRleClcbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMSkge1xuICAgICAgdGhpcy5hZGRSZW1vdmVPbk1vdmUoZHJhZ2dhYmxlKVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgaW5kZXhlc09mTmV3LCB0aW1lKSB7XG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuc2xpY2UoMCkuZm9yRWFjaCgoZHJhZ2dhYmxlLCBpKSA9PiB7XG4gICAgICBjb25zdCByZWN0ID0gcmVjdGFuZ2xlc1tpXSxcbiAgICAgICAgdGltZUVuZCA9IHRpbWUgfHwgdGltZSA9PT0gMCA/IHRpbWUgOiBpbmRleGVzT2ZOZXcuaW5kZXhPZihpKSAhPT0gLTEgPyB0aGlzLm9wdGlvbnMudGltZUVuZCA6IHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZVxuXG4gICAgICBpZiAocmVjdC5yZW1vdmFibGUpIHtcbiAgICAgICAgZHJhZ2dhYmxlLm1vdmUoZHJhZ2dhYmxlLmluaXRpYWxQb3NpdGlvbiwgdGltZUVuZCwgdHJ1ZSwgdHJ1ZSlcbiAgICAgICAgcmVtb3ZlSXRlbSh0aGlzLmlubmVyRHJhZ2dhYmxlcywgZHJhZ2dhYmxlKVxuICAgICAgICB0aGlzLmVtaXQoJ3RhcmdldDpyZW1vdmUnLCBkcmFnZ2FibGUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkcmFnZ2FibGUubW92ZShyZWN0LnBvc2l0aW9uLCB0aW1lRW5kLCB0cnVlLCB0cnVlKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBhZGQoZHJhZ2dhYmxlLCB0aW1lKSB7XG4gICAgY29uc3QgbmV3RHJhZ2dhYmxlc0luZGV4ID0gdGhpcy5pbm5lckRyYWdnYWJsZXMubGVuZ3RoXG5cbiAgICB0aGlzLmVtaXQoJ3RhcmdldDpiZWZvcmVBZGQnLCBkcmFnZ2FibGUpXG5cbiAgICB0aGlzLnB1c2hJbm5lckRyYWdnYWJsZShkcmFnZ2FibGUpXG4gICAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgbmV3RHJhZ2dhYmxlc0luZGV4LCBkcmFnZ2FibGUpXG5cbiAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIFtuZXdEcmFnZ2FibGVzSW5kZXhdLCB0aW1lIHx8IDApXG4gICAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTEpIHtcbiAgICAgIHRoaXMuYWRkUmVtb3ZlT25Nb3ZlKGRyYWdnYWJsZSlcbiAgICB9XG4gIH1cblxuICBwdXNoSW5uZXJEcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKT09PS0xKSB7XG4gICAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5wdXNoKGRyYWdnYWJsZSlcbiAgICB9XG4gIH1cblxuICBhZGRSZW1vdmVPbk1vdmUoZHJhZ2dhYmxlKSB7XG4gICAgZHJhZ2dhYmxlLm9uKCdkcmFnOm1vdmUnLCB0aGlzLnJlbW92ZUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICB0aGlzLnJlbW92ZShkcmFnZ2FibGUpXG4gICAgfSlcblxuICAgIHRoaXMuZW1pdCgndGFyZ2V0OmFkZCcsIGRyYWdnYWJsZSlcbiAgfVxuXG4gIHJlbW92ZShkcmFnZ2FibGUpIHtcbiAgICBkcmFnZ2FibGUudW5zdWJzY3JpYmUoJ2RyYWc6bW92ZScsIHRoaXMucmVtb3ZlSGFuZGxlcilcblxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpXG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuc3BsaWNlKGluZGV4LCAxKVxuXG4gICAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgW10pXG5cbiAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIFtdKVxuICAgIHRoaXMuZW1pdCgndGFyZ2V0OnJlbW92ZScsIGRyYWdnYWJsZSlcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLm1vdmUoZHJhZ2dhYmxlLmluaXRpYWxQb3NpdGlvbiwgMCwgdHJ1ZSwgdHJ1ZSlcbiAgICAgIHRoaXMuZW1pdCgndGFyZ2V0OnJlbW92ZScsIGRyYWdnYWJsZSlcbiAgICB9KVxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzID0gW11cbiAgfVxuXG4gIGdldFNvcnRlZERyYWdnYWJsZXMoKSB7XG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuc2xpY2UoKVxuICB9XG5cbiAgZ2V0IGNvbnRhaW5lcigpIHtcbiAgICByZXR1cm4gKHRoaXMuX2NvbnRhaW5lciA9IHRoaXMuX2NvbnRhaW5lciB8fCB0aGlzLm9wdGlvbnMuY29udGFpbmVyIHx8IHRoaXMub3B0aW9ucy5wYXJlbnQgfHwgZ2V0RGVmYXVsdENvbnRhaW5lcih0aGlzLmVsZW1lbnQpKVxuICB9XG59XG5cblRhcmdldC5lbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcigpXG5UYXJnZXQuZW1pdHRlci5vbigndGFyZ2V0OmNyZWF0ZScsIGFkZFRvRGVmYXVsdFNjb3BlKVxuIiwiaW1wb3J0IHJlbW92ZUl0ZW0gZnJvbSAnLi91dGlscy9yZW1vdmUtYXJyYXktaXRlbSdcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudEVtaXR0ZXInXG5pbXBvcnQgRHJhZ2dhYmxlIGZyb20gJy4vZHJhZ2dhYmxlJ1xuaW1wb3J0IFRhcmdldCBmcm9tICcuL3RhcmdldCdcblxuY29uc3Qgc2NvcGVzID0gW11cblxuY2xhc3MgU2NvcGUgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvcihkcmFnZ2FibGVzLCB0YXJnZXRzLCBvcHRpb25zPXt9KSB7XG4gICAgc3VwZXIob3B0aW9ucylcbiAgICBzY29wZXMuZm9yRWFjaCgoc2NvcGUpID0+IHtcbiAgICAgIGlmIChkcmFnZ2FibGVzKSB7XG4gICAgICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICAgICAgcmVtb3ZlSXRlbShzY29wZS5kcmFnZ2FibGVzLCBkcmFnZ2FibGUpXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIGlmICh0YXJnZXRzKSB7XG4gICAgICAgIHRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB7XG4gICAgICAgICAgcmVtb3ZlSXRlbShzY29wZS50YXJnZXRzLCB0YXJnZXQpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZXMgfHwgW11cbiAgICB0aGlzLnRhcmdldHMgPSB0YXJnZXRzIHx8IFtdXG4gICAgc2NvcGVzLnB1c2godGhpcylcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICB0aW1lRW5kOiAob3B0aW9ucy50aW1lRW5kKSB8fCA0MDBcbiAgICB9XG5cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUuZHJhZ0VuZEFjdGlvbiA9ICgpID0+IHRoaXMub25FbmQoZHJhZ2dhYmxlKVxuICAgIH0pXG4gIH1cblxuICBhZGREcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxuICAgIGRyYWdnYWJsZS5kcmFnRW5kQWN0aW9uID0gKCkgPT4gdGhpcy5vbkVuZChkcmFnZ2FibGUpXG4gIH1cblxuICBhZGRUYXJnZXQodGFyZ2V0KSB7XG4gICAgdGhpcy50YXJnZXRzLnB1c2godGFyZ2V0KVxuICB9XG5cbiAgb25FbmQoZHJhZ2dhYmxlKSB7XG4gICAgY29uc3Qgc2hvdFRhcmdldHMgPSB0aGlzLnRhcmdldHMuZmlsdGVyKCh0YXJnZXQpID0+IHtcbiAgICAgIHJldHVybiB0YXJnZXQuZHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkgIT09IC0xXG4gICAgfSkuZmlsdGVyKCh0YXJnZXQpID0+IHtcbiAgICAgIHJldHVybiB0YXJnZXQuY2F0Y2hEcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICAgIH0pLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIHJldHVybiBhLmdldFJlY3RhbmdsZSgpLmdldFNxdWFyZSgpIC0gYi5nZXRSZWN0YW5nbGUoKS5nZXRTcXVhcmUoKVxuICAgIH0pXG5cbiAgICBpZiAoc2hvdFRhcmdldHMubGVuZ3RoKSB7XG4gICAgICBzaG90VGFyZ2V0c1swXS5vbkVuZChkcmFnZ2FibGUpXG4gICAgfSBlbHNlIGlmIChkcmFnZ2FibGUudGFyZ2V0cy5sZW5ndGgpIHtcbiAgICAgIGRyYWdnYWJsZS5waW5Qb3NpdGlvbihkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uLCB0aGlzLm9wdGlvbnMudGltZUVuZClcbiAgICB9XG5cbiAgICB0aGlzLmVtaXQoJ3Njb3BlOmNoYW5nZScpXG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLnRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB0YXJnZXQucmVzZXQoKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnJlZnJlc2goKSlcbiAgICB0aGlzLnRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB0YXJnZXQucmVmcmVzaCgpKVxuICB9XG5cbiAgZ2V0IHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXRzLm1hcCgodGFyZ2V0KSA9PiB7XG4gICAgICByZXR1cm4gdGFyZ2V0LmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4gdGhpcy5kcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSlcbiAgICB9KVxuICB9XG5cbiAgc2V0IHBvc2l0aW9ucyhwb3NpdGlvbnMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gJ3dyb25nIGFycmF5IGxlbmd0aCdcbiAgICBpZiAocG9zaXRpb25zLmxlbmd0aCA9PT0gdGhpcy50YXJnZXRzLmxlbmd0aCkge1xuICAgICAgdGhpcy50YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4gdGFyZ2V0LnJlc2V0KCkpXG5cbiAgICAgIHBvc2l0aW9ucy5mb3JFYWNoKCh0YXJnZXRJbmRleGVzLCBpKSA9PiB7XG4gICAgICAgIHRhcmdldEluZGV4ZXMuZm9yRWFjaCgoaW5kZXgpID0+IHtcbiAgICAgICAgICB0aGlzLnRhcmdldHNbaV0uYWRkKHRoaXMuZHJhZ2dhYmxlc1tpbmRleF0pXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBtZXNzYWdlXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IGRlZmF1bHRTY29wZSA9IG5ldyBTY29wZSgpXG5cbmZ1bmN0aW9uIHNjb3BlKGZuKSB7XG4gIGNvbnN0IGN1cnJlbnRTY29wZSA9IG5ldyBTY29wZSgpXG5cbiAgY29uc3QgYWRkRHJhZ2dhYmxlVG9TY29wZSA9IGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICAgIGN1cnJlbnRTY29wZS5hZGREcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICAgIERyYWdnYWJsZS5lbWl0dGVyLmludGVycnVwdCgpXG4gIH1cblxuICBjb25zdCBhZGRUYXJnZXRUb1Njb3BlID0gZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgY3VycmVudFNjb3BlLmFkZFRhcmdldCh0YXJnZXQpXG4gICAgRHJhZ2dhYmxlLmVtaXR0ZXIuaW50ZXJydXB0KClcbiAgfVxuXG4gIERyYWdnYWJsZS5lbWl0dGVyLnByZXBlbmRPbignZHJhZ2dhYmxlOmNyZWF0ZScsIGFkZERyYWdnYWJsZVRvU2NvcGUpXG4gIFRhcmdldC5lbWl0dGVyLnByZXBlbmRPbigndGFyZ2V0OmNyZWF0ZScsIGFkZFRhcmdldFRvU2NvcGUpXG4gIGZuLmNhbGwoKVxuICBEcmFnZ2FibGUuZW1pdHRlci51bnN1YnNjcmliZSgnZHJhZ2dhYmxlOmNyZWF0ZScsIGFkZERyYWdnYWJsZVRvU2NvcGUpXG4gIFRhcmdldC5lbWl0dGVyLnVuc3Vic2NyaWJlKCd0YXJnZXQ6Y3JlYXRlJywgYWRkVGFyZ2V0VG9TY29wZSlcbiAgcmV0dXJuIGN1cnJlbnRTY29wZVxufVxuXG5leHBvcnQgeyBzY29wZXMsIGRlZmF1bHRTY29wZSwgU2NvcGUsIHNjb3BlIH1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRocm90dGxlKGZ1bmMsIHdhaXQpIHtcbiAgbGV0IGxhc3RUaW1lID0gMFxuXG4gIHJldHVybiBmdW5jdGlvbiBleGVjdXRlZEZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzXG4gICAgY29uc3QgYXJncyA9IGFyZ3VtZW50c1xuXG4gICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKVxuICAgIGlmIChub3cgLSBsYXN0VGltZSA+PSB3YWl0KSB7XG4gICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpXG4gICAgICBsYXN0VGltZSA9IG5vd1xuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0UGFyZW50c0NoYWluKGNoaWxkRWxlbWVudCwgcm9vdEVsZW1lbnQpIHtcblx0Y29uc3QgY2hhaW4gPSBbXVxuICBsZXQgZWxlbWVudCA9IGNoaWxkRWxlbWVudFxuXG4gIHdoaWxlKGVsZW1lbnQucGFyZW50Tm9kZSAmJiBlbGVtZW50ICE9PSByb290RWxlbWVudCkge1xuICAgIGNoYWluLnVuc2hpZnQoZWxlbWVudC5wYXJlbnROb2RlKVxuICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGVcbiAgfVxuXG4gIHJldHVybiBjaGFpblxufVxuIiwiaW1wb3J0IGdldERlZmF1bHRDb250YWluZXIgZnJvbSAnLi91dGlscy9nZXQtZGVmYXVsdC1jb250YWluZXInXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnRFbWl0dGVyJ1xuaW1wb3J0IHsgQm91bmRUb0VsZW1lbnQgfSBmcm9tICcuL2JvdW5kaW5nJ1xuaW1wb3J0IFBvaW50IGZyb20gJy4vZ2VvbWV0cnkvcG9pbnQnXG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gJy4vZ2VvbWV0cnkvcmVjdGFuZ2xlJ1xuaW1wb3J0IHsgZGVmYXVsdFNjb3BlIH0gZnJvbSAnLi9zY29wZSdcbmltcG9ydCB0aHJvdHRsZSBmcm9tICcuL3V0aWxzL3Rocm90dGxlJ1xuaW1wb3J0IGdldFBhcmVudHNDaGFpbiBmcm9tICcuL3V0aWxzL2dldC1wYXJlbnRzLWNoYWluJ1xuXG5jb25zdCB0aHJvdHRsZWREcmFnT3ZlciA9IChjYWxsYmFjaywgZHVyYXRpb24pID0+IHtcbiAgY29uc3QgdGhyb3R0bGVkQ2FsbGJhY2sgPSB0aHJvdHRsZSgoZXZlbnQpID0+IGNhbGxiYWNrKGV2ZW50KSwgZHVyYXRpb24pXG4gIHJldHVybiAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhyb3R0bGVkQ2FsbGJhY2soZXZlbnQpXG4gIH1cbn1cblxuY29uc3QgcGFzc2l2ZUZhbHNlID0geyBwYXNzaXZlOiBmYWxzZSB9XG5cbmNvbnN0IGlzVG91Y2ggPSBuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHMgPiAwXG5jb25zdCBtb3VzZUV2ZW50cyA9IHtcbiAgc3RhcnQ6ICdtb3VzZWRvd24nLFxuICBtb3ZlOiAnbW91c2Vtb3ZlJyxcbiAgZW5kOiAnbW91c2V1cCdcbn1cbmNvbnN0IHRvdWNoRXZlbnRzID0ge1xuICBzdGFydDogJ3RvdWNoc3RhcnQnLFxuICBtb3ZlOiAndG91Y2htb3ZlJyxcbiAgZW5kOiAndG91Y2hlbmQnXG59XG5jb25zdCBkcmFnZ2FibGVzID0gW11cbmNvbnN0IHRyYW5zZm9ybVByb3BlcnR5ID0gJ3RyYW5zZm9ybSdcbmNvbnN0IHRyYW5zaXRpb25Qcm9wZXJ0eSA9ICd0cmFuc2l0aW9uJ1xuXG5mdW5jdGlvbiBnZXRUb3VjaEJ5SUQoZWxlbWVudCwgdG91Y2hJZCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnQuY2hhbmdlZFRvdWNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZWxlbWVudC5jaGFuZ2VkVG91Y2hlc1tpXS5pZGVudGlmaWVyID09PSB0b3VjaElkKSB7XG4gICAgICByZXR1cm4gZWxlbWVudC5jaGFuZ2VkVG91Y2hlc1tpXVxuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cblxuZnVuY3Rpb24gcHJldmVudERvdWJsZUluaXQoZHJhZ2dhYmxlKSB7XG4gIGNvbnN0IG1lc3NhZ2UgPSBcImZvciB0aGlzIGVsZW1lbnQgRHJhZ2VlLkRyYWdnYWJsZSBpcyBhbHJlYWR5IGV4aXN0LCBkb24ndCBjcmVhdGUgaXQgdHdpY2UgXCJcbiAgaWYgKGRyYWdnYWJsZXMuc29tZSgoZXhpc3RpbmcpID0+IGRyYWdnYWJsZS5lbGVtZW50ID09PSBleGlzdGluZy5lbGVtZW50KSkge1xuICAgIHRocm93IG1lc3NhZ2VcbiAgfVxuICBkcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxufVxuXG5mdW5jdGlvbiBhZGRUb0RlZmF1bHRTY29wZShkcmFnZ2FibGUpIHtcbiAgZGVmYXVsdFNjb3BlLmFkZERyYWdnYWJsZShkcmFnZ2FibGUpXG59XG5cbmZ1bmN0aW9uIGNvcHlTdHlsZXMoc291cmNlLCBkZXN0aW5hdGlvbikge1xuICBjb25zdCBjcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHNvdXJjZSlcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qga2V5ID0gY3NbaV1cbiAgICBpZiAoKGtleS5pbmRleE9mKCd0cmFuc2l0aW9uJykgPCAwKSAmJiAoa2V5LmluZGV4T2YoJ3RyYW5zZm9ybScpIDwgMCkpIHtcbiAgICAgIGRlc3RpbmF0aW9uLnN0eWxlW2tleV0gPSBjc1trZXldXG4gICAgfVxuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzb3VyY2UuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICBjb3B5U3R5bGVzKHNvdXJjZS5jaGlsZHJlbltpXSwgZGVzdGluYXRpb24uY2hpbGRyZW5baV0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhZ2dhYmxlIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgb3B0aW9ucz17fSkge1xuICAgIHN1cGVyKG9wdGlvbnMpXG4gICAgdGhpcy50YXJnZXRzID0gW11cbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIHByZXZlbnREb3VibGVJbml0KHRoaXMpXG4gICAgRHJhZ2dhYmxlLmVtaXR0ZXIuZW1pdCgnZHJhZ2dhYmxlOmNyZWF0ZScsIHRoaXMpXG4gICAgdGhpcy5fZW5hYmxlID0gdHJ1ZVxuICAgIHRoaXMuc3RhcnRCb3VuZGluZygpXG4gICAgdGhpcy5zdGFydFBvc2l0aW9uaW5nKClcbiAgICB0aGlzLnN0YXJ0TGlzdGVuaW5nKClcbiAgfVxuXG4gIHN0YXJ0Qm91bmRpbmcoKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5ib3VuZCkge1xuICAgICAgdGhpcy5ib3VuZGluZyA9IHsgYm91bmQ6IHRoaXMub3B0aW9ucy5ib3VuZCB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYm91bmRpbmcgPSBuZXcgQm91bmRUb0VsZW1lbnQodGhpcy5jb250YWluZXIsIHRoaXMuY29udGFpbmVyKVxuICAgIH1cbiAgfVxuXG4gIHN0YXJ0UG9zaXRpb25pbmcoKSB7XG4gICAgdGhpcy5fc2V0RGVmYXVsdFRyYW5zaXRpb24oKVxuICAgIHRoaXMub2Zmc2V0ID0gUG9pbnQuZWxlbWVudE9mZnNldCh0aGlzLmVsZW1lbnQsIHRoaXMuY29udGFpbmVyKVxuICAgIHRoaXMucGlubmVkUG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICAgIHRoaXMuaW5pdGlhbFBvc2l0aW9uID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uIHx8IHRoaXMub2Zmc2V0XG5cbiAgICB0aGlzLnBpblBvc2l0aW9uKHRoaXMuaW5pdGlhbFBvc2l0aW9uKVxuXG4gICAgaWYgKHRoaXMuYm91bmRpbmcucmVmcmVzaCkge1xuICAgICAgdGhpcy5ib3VuZGluZy5yZWZyZXNoKClcbiAgICB9XG4gIH1cblxuICBzdGFydExpc3RlbmluZygpIHtcbiAgICB0aGlzLl9kcmFnU3RhcnQgPSAoZXZlbnQpID0+IHRoaXMuZHJhZ1N0YXJ0KGV2ZW50KVxuICAgIHRoaXMuX2RyYWdNb3ZlID0gKGV2ZW50KSA9PiB0aGlzLmRyYWdNb3ZlKGV2ZW50KVxuICAgIHRoaXMuX2RyYWdFbmQgPSAoZXZlbnQpID0+IHRoaXMuZHJhZ0VuZChldmVudClcbiAgICB0aGlzLl9uYXRpdmVEcmFnU3RhcnQgPSAoZXZlbnQpID0+IHRoaXMubmF0aXZlRHJhZ1N0YXJ0KGV2ZW50KVxuICAgIHRoaXMuX25hdGl2ZURyYWdPdmVyID0gdGhyb3R0bGVkRHJhZ092ZXIoKGV2ZW50KSA9PiB0aGlzLm5hdGl2ZURyYWdPdmVyKGV2ZW50KSwgdGhpcy5kcmFnT3ZlclRocm90dGxlRHVyYXRpb24pXG4gICAgdGhpcy5fbmF0aXZlRHJhZ0VuZCA9IChldmVudCkgPT4gdGhpcy5uYXRpdmVEcmFnRW5kKGV2ZW50KVxuICAgIHRoaXMuX25hdGl2ZURyb3AgPSAoZXZlbnQpID0+IHRoaXMubmF0aXZlRHJvcChldmVudClcbiAgICB0aGlzLl9zY3JvbGwgPSAoZXZlbnQpID0+IHRoaXMub25TY3JvbGwoZXZlbnQpXG5cbiAgICB0aGlzLmhhbmRsZXIuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0LCBwYXNzaXZlRmFsc2UpXG4gICAgdGhpcy5oYW5kbGVyLmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydCwgcGFzc2l2ZUZhbHNlKVxuICB9XG5cbiAgZ2V0U2l6ZSgpIHtcbiAgICByZXR1cm4gUG9pbnQuZWxlbWVudFNpemUodGhpcy5lbGVtZW50KVxuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMub2Zmc2V0LmFkZCh0aGlzLl90cmFuc2Zvcm1Qb3NpdGlvbiB8fCBuZXcgUG9pbnQoMCwgMCkpXG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25cbiAgfVxuXG4gIGdldENlbnRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi5hZGQodGhpcy5nZXRTaXplKCkubXVsdCgwLjUpKVxuICB9XG5cbiAgX3NldERlZmF1bHRUcmFuc2l0aW9uICgpIHtcbiAgICBpZiAoIXRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNpdGlvblByb3BlcnR5XSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZWxlbWVudClbdHJhbnNpdGlvblByb3BlcnR5XVxuICAgIH1cbiAgfVxuXG4gIF9zZXRUcmFuc2l0aW9uKHRpbWUpIHtcbiAgICBsZXQgdHJhbnNpdGlvbiA9IHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldXG4gICAgY29uc3QgdHJhbnNpdGlvbkNzcyA9IGB0cmFuc2Zvcm0gJHt0aW1lfW1zYFxuXG4gICAgaWYgKCEvdHJhbnNmb3JtXFxzP1xcZCptP3M/Ly50ZXN0KHRyYW5zaXRpb24pKSB7XG4gICAgICBpZiAodHJhbnNpdGlvbikge1xuICAgICAgICB0cmFuc2l0aW9uICs9IGAsICR7dHJhbnNpdGlvbkNzc31gXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cmFuc2l0aW9uID0gdHJhbnNpdGlvbkNzc1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0cmFuc2l0aW9uID0gdHJhbnNpdGlvbi5yZXBsYWNlKC90cmFuc2Zvcm1cXHM/XFxkKm0/cz8vZywgdHJhbnNpdGlvbkNzcylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV0gIT09IHRyYW5zaXRpb24pIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldID0gdHJhbnNpdGlvblxuICAgIH1cbiAgfVxuXG4gIF9zZXRUcmFuc2xhdGUocG9pbnQpIHtcbiAgICB0aGlzLl90cmFuc2Zvcm1Qb3NpdGlvbiA9IHBvaW50XG4gICAgY29uc3QgdHJhbnNsYXRlQ3NzID0gYHRyYW5zbGF0ZTNkKCR7cG9pbnQueH1weCwgJHtwb2ludC55fXB4LCAwcHgpYFxuXG4gICAgbGV0IHRyYW5zZm9ybSA9IHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wZXJ0eV1cblxuICAgIGlmICh0aGlzLnNob3VsZFJlbW92ZVplcm9UcmFuc2xhdGUgJiYgcG9pbnQueCA9PT0gMCAmJiBwb2ludC55ID09PSAwKSB7XG4gICAgICB0cmFuc2Zvcm0gPSB0cmFuc2Zvcm0ucmVwbGFjZSgvdHJhbnNsYXRlM2RcXChbXildK1xcKS8sICcnKVxuICAgIH0gZWxzZSBpZiAoIS90cmFuc2xhdGUzZFxcKFteKV0rXFwpLy50ZXN0KHRyYW5zZm9ybSkpIHtcbiAgICAgIGlmICh0cmFuc2Zvcm0pIHtcbiAgICAgICAgdHJhbnNmb3JtICs9ICcgJ1xuICAgICAgfVxuICAgICAgdHJhbnNmb3JtICs9IHRyYW5zbGF0ZUNzc1xuICAgIH0gZWxzZSB7XG4gICAgICB0cmFuc2Zvcm0gPSB0cmFuc2Zvcm0ucmVwbGFjZSgvdHJhbnNsYXRlM2RcXChbXildK1xcKS8sIHRyYW5zbGF0ZUNzcylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BlcnR5XSAhPT0gdHJhbnNmb3JtKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcGVydHldID0gdHJhbnNmb3JtXG4gICAgfVxuICB9XG5cbiAgbW92ZShwb2ludCwgdGltZT0wLCBpc1NpbGVudD1mYWxzZSkge1xuICAgIHBvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIHRoaXMucG9zaXRpb24gPSBwb2ludFxuXG4gICAgdGhpcy5fc2V0VHJhbnNpdGlvbih0aW1lKVxuICAgIHRoaXMuX3NldFRyYW5zbGF0ZShwb2ludC5zdWIodGhpcy5vZmZzZXQpKVxuXG4gICAgaWYgKCFpc1NpbGVudCkge1xuICAgICAgdGhpcy5lbWl0KCdkcmFnOm1vdmUnKVxuICAgIH1cbiAgfVxuXG4gIHBpblBvc2l0aW9uKHBvaW50LCB0aW1lPTAsIHNpbGVudD10cnVlKSB7XG4gICAgdGhpcy5waW5uZWRQb3NpdGlvbiA9IHBvaW50LmNsb25lKClcbiAgICB0aGlzLm1vdmUodGhpcy5waW5uZWRQb3NpdGlvbiwgdGltZSwgc2lsZW50KVxuICB9XG5cbiAgcmVzZXRQb3NpdGlvblRvSW5pdGlhbCAoKSB7XG4gICAgdGhpcy5waW5Qb3NpdGlvbih0aGlzLmluaXRpYWxQb3NpdGlvbilcbiAgfVxuXG4gIHJlZnJlc2hQb3NpdGlvbiAoKSB7XG4gICAgdGhpcy5zZXRQb3NpdGlvbih0aGlzLmdldFBvc2l0aW9uKCkpXG4gIH1cblxuICBzZXRQb3NpdGlvbihwb2ludCkge1xuICAgIHBvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIHRoaXMucG9zaXRpb24gPSBwb2ludFxuICAgIHRoaXMuX3NldFRyYW5zaXRpb24oMClcbiAgICB0aGlzLl9zZXRUcmFuc2xhdGUocG9pbnQuc3ViKHRoaXMub2Zmc2V0KSlcbiAgfVxuXG4gIGRldGVybWluZURpcmVjdGlvbihwb2ludCkge1xuICAgIHRoaXMuX3ByZXZpb3VzRGlyZWN0aW9uUG9zaXRpb24gfHw9IHRoaXMuX3N0YXJ0UG9zaXRpb25cblxuICAgIHRoaXMubGVmdERpcmVjdGlvbiA9ICh0aGlzLl9wcmV2aW91c0RpcmVjdGlvblBvc2l0aW9uLnggPCBwb2ludC54KVxuICAgIHRoaXMucmlnaHREaXJlY3Rpb24gPSAodGhpcy5fcHJldmlvdXNEaXJlY3Rpb25Qb3NpdGlvbi54ID4gcG9pbnQueClcbiAgICB0aGlzLnVwRGlyZWN0aW9uID0gKHRoaXMuX3ByZXZpb3VzRGlyZWN0aW9uUG9zaXRpb24ueSA+IHBvaW50LnkpXG4gICAgdGhpcy5kb3duRGlyZWN0aW9uID0gKHRoaXMuX3ByZXZpb3VzRGlyZWN0aW9uUG9zaXRpb24ueSA8IHBvaW50LnkpXG5cbiAgICB0aGlzLl9wcmV2aW91c0RpcmVjdGlvblBvc2l0aW9uID0gcG9pbnRcbiAgfVxuXG4gIHNlZW1zU2Nyb2xsaW5nKCkge1xuICAgIHJldHVybiAoK25ldyBEYXRlKCkgLSB0aGlzLl9zdGFydFRvdWNoVGltZXN0YW1wKSA8IHRoaXMudG91Y2hEcmFnZ2luZ1RocmVzaG9sZFxuICB9XG5cbiAgc2hvdWxkVXNlTmF0aXZlRHJhZ0FuZERyb3AoKSB7XG4gICAgaWYgKHRoaXMuaXNUb3VjaEV2ZW50KSB7XG4gICAgICByZXR1cm4gdGhpcy5uYXRpdmVEcmFnQW5kRHJvcCAmJiB0aGlzLmVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcE9uVG91Y2hcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMubmF0aXZlRHJhZ0FuZERyb3BcbiAgICB9XG4gIH1cblxuICBkcmFnU3RhcnQoZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuX2VuYWJsZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3RvcFByb3BhZ2F0aW9uT25EcmFnU3RhcnQpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgfVxuXG4gICAgdGhpcy5pc1RvdWNoRXZlbnQgPSAoaXNUb3VjaCAmJiAoZXZlbnQgaW5zdGFuY2VvZiB3aW5kb3cuVG91Y2hFdmVudCkpXG5cbiAgICB0aGlzLnRvdWNoUG9pbnQgPSB0aGlzLl9zdGFydFRvdWNoUG9pbnQgPSBuZXcgUG9pbnQoXG4gICAgICB0aGlzLmlzVG91Y2hFdmVudCA/IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYIDogZXZlbnQuY2xpZW50WCxcbiAgICAgIHRoaXMuaXNUb3VjaEV2ZW50ID8gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVkgOiBldmVudC5jbGllbnRZXG4gICAgKVxuXG4gICAgdGhpcy5fc3RhcnRQb3NpdGlvbiA9IHRoaXMuZ2V0UG9zaXRpb24oKVxuICAgIGlmICh0aGlzLmlzVG91Y2hFdmVudCkge1xuICAgICAgdGhpcy5fdG91Y2hJZCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmlkZW50aWZpZXJcbiAgICAgIHRoaXMuX3N0YXJ0VG91Y2hUaW1lc3RhbXAgPSArbmV3IERhdGUoKVxuICAgIH1cblxuICAgIHRoaXMuX3N0YXJ0V2luZG93U2Nyb2xsUG9pbnQgPSB0aGlzLndpbmRvd1Njcm9sbFBvaW50XG4gICAgdGhpcy5fc3RhcnRTY3JvbGxFbGVtZW50c09mZnNldCA9IHRoaXMuc2Nyb2xsRWxlbWVudHNPZmZzZXRcblxuICAgIGlmIChldmVudC50YXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElucHV0RWxlbWVudCB8fFxuICAgICAgICAgIGV2ZW50LnRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSW5wdXRFbGVtZW50KSB7XG4gICAgICBldmVudC50YXJnZXQuZm9jdXMoKVxuICAgIH1cblxuICAgIGlmICh0aGlzLnNob3VsZFVzZU5hdGl2ZURyYWdBbmREcm9wKCkpIHtcbiAgICAgIGlmICh0aGlzLmlzVG91Y2hFdmVudCAmJiB0aGlzLmVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcE9uVG91Y2gpIHtcbiAgICAgICAgdGhpcy5fc3RhcnRQYXJlbnRzU2Nyb2xsT2Zmc2V0ID0gdGhpcy5wYXJlbnRzU2Nyb2xsT2Zmc2V0XG5cbiAgICAgICAgY29uc3QgZW11bGF0ZU9uRmlyc3RNb3ZlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuc2VlbXNTY3JvbGxpbmcoKSkge1xuICAgICAgICAgICAgdGhpcy5jYW5jZWxEcmFnZ2luZygpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wKGV2ZW50KVxuICAgICAgICAgIH1cbiAgICAgICAgICBjYW5jZWxFbXVsYXRpb24oKVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNhbmNlbEVtdWxhdGlvbiA9ICgpID0+IHtcbiAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIGVtdWxhdGVPbkZpcnN0TW92ZSlcbiAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgY2FuY2VsRW11bGF0aW9uKVxuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCBlbXVsYXRlT25GaXJzdE1vdmUsIHBhc3NpdmVGYWxzZSlcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIGNhbmNlbEVtdWxhdGlvbiwgcGFzc2l2ZUZhbHNlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIHRoaXMuX25hdGl2ZURyYWdTdGFydClcbiAgICAgICAgdGhpcy5lbGVtZW50LmRyYWdnYWJsZSA9IHRydWVcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX25hdGl2ZURyYWdFbmQsIHBhc3NpdmVGYWxzZSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSwgcGFzc2l2ZUZhbHNlKVxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSwgcGFzc2l2ZUZhbHNlKVxuXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZCwgcGFzc2l2ZUZhbHNlKVxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQsIHBhc3NpdmVGYWxzZSlcbiAgICB9XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fc2Nyb2xsKVxuICAgIHRoaXMuc2Nyb2xsRWxlbWVudHMuZm9yRWFjaCgocCkgPT4gcC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9zY3JvbGwpKVxuXG4gICAgdGhpcy5lbWl0KCdkcmFnOnN0YXJ0JylcbiAgfVxuXG4gIGRyYWdNb3ZlKGV2ZW50KSB7XG4gICAgbGV0IHRvdWNoXG5cbiAgICB0aGlzLmlzRHJhZ2dpbmcgPSB0cnVlXG5cbiAgICB0aGlzLmlzVG91Y2hFdmVudCA9IChpc1RvdWNoICYmIChldmVudCBpbnN0YW5jZW9mIHdpbmRvdy5Ub3VjaEV2ZW50KSlcbiAgICBpZiAodGhpcy5pc1RvdWNoRXZlbnQpIHtcbiAgICAgIHRvdWNoID0gZ2V0VG91Y2hCeUlEKGV2ZW50LCB0aGlzLl90b3VjaElkKVxuXG4gICAgICBpZiAoIXRvdWNoKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5zZWVtc1Njcm9sbGluZygpKSB7XG4gICAgICAgIHRoaXMuY2FuY2VsRHJhZ2dpbmcoKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB0aGlzLnRvdWNoUG9pbnQgPSBuZXcgUG9pbnQoXG4gICAgICB0aGlzLmlzVG91Y2hFdmVudCA/IHRvdWNoLnBhZ2VYIDogZXZlbnQuY2xpZW50WCxcbiAgICAgIHRoaXMuaXNUb3VjaEV2ZW50ID8gdG91Y2gucGFnZVkgOiBldmVudC5jbGllbnRZXG4gICAgKVxuXG4gICAgbGV0IHBvaW50ID0gdGhpcy5fc3RhcnRQb3NpdGlvbi5hZGQodGhpcy50b3VjaFBvaW50LnN1Yih0aGlzLl9zdGFydFRvdWNoUG9pbnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMud2luZG93U2Nyb2xsUG9pbnQuc3ViKHRoaXMuX3N0YXJ0V2luZG93U2Nyb2xsUG9pbnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMuc2Nyb2xsRWxlbWVudHNPZmZzZXQuc3ViKHRoaXMuX3N0YXJ0U2Nyb2xsRWxlbWVudHNPZmZzZXQpKVxuXG4gICAgcG9pbnQgPSB0aGlzLmJvdW5kaW5nLmJvdW5kKHBvaW50LCB0aGlzLmdldFNpemUoKSlcbiAgICB0aGlzLmRldGVybWluZURpcmVjdGlvbihwb2ludClcbiAgICB0aGlzLm1vdmUocG9pbnQpXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RyYWdlZS1hY3RpdmUnKVxuICB9XG5cbiAgZHJhZ0VuZChldmVudCkge1xuICAgIHRoaXMuaXNUb3VjaEV2ZW50ID0gKGlzVG91Y2ggJiYgKGV2ZW50IGluc3RhbmNlb2Ygd2luZG93LlRvdWNoRXZlbnQpKVxuXG4gICAgaWYgKHRoaXMuaXNUb3VjaEV2ZW50ICYmICFnZXRUb3VjaEJ5SUQoZXZlbnQsIHRoaXMuX3RvdWNoSWQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc0RyYWdnaW5nKSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIH1cblxuICAgIHRoaXMuZHJhZ0VuZEFjdGlvbigpXG4gICAgdGhpcy5lbWl0KCdkcmFnOmVuZCcpXG4gICAgdGhpcy5jYW5jZWxEcmFnZ2luZygpXG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZWUtYWN0aXZlJykpXG4gIH1cblxuICBvblNjcm9sbChfZXZlbnQpIHtcbiAgICBsZXQgcG9pbnQgPSB0aGlzLl9zdGFydFBvc2l0aW9uLmFkZCh0aGlzLnRvdWNoUG9pbnQuc3ViKHRoaXMuX3N0YXJ0VG91Y2hQb2ludCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy53aW5kb3dTY3JvbGxQb2ludC5zdWIodGhpcy5fc3RhcnRXaW5kb3dTY3JvbGxQb2ludCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy5zY3JvbGxFbGVtZW50c09mZnNldC5zdWIodGhpcy5fc3RhcnRTY3JvbGxFbGVtZW50c09mZnNldCkpXG5cbiAgICBwb2ludCA9IHRoaXMuYm91bmRpbmcuYm91bmQocG9pbnQsIHRoaXMuZ2V0U2l6ZSgpKVxuICAgIGlmICghdGhpcy5uYXRpdmVEcmFnQW5kRHJvcCkge1xuICAgICAgdGhpcy5kZXRlcm1pbmVEaXJlY3Rpb24ocG9pbnQpXG4gICAgICB0aGlzLm1vdmUocG9pbnQpXG4gICAgfVxuICB9XG5cbiAgbmF0aXZlRHJhZ1N0YXJ0KGV2ZW50KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dCcsICdGaXJlRm94IGZpeCcpXG4gICAgZXZlbnQuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSAnbW92ZSdcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIHRoaXMuX25hdGl2ZURyYWdPdmVyKVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzLl9uYXRpdmVEcm9wKVxuICB9XG5cbiAgbmF0aXZlRHJhZ092ZXIoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZXZlbnQuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnbW92ZSdcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZHJhZ2VlLXBsYWNlaG9sZGVyJylcbiAgICBpZiAoZXZlbnQuY2xpZW50WCA9PT0gMCAmJiBldmVudC5jbGllbnRZID09PSAwKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLnRvdWNoUG9pbnQgPSBuZXcgUG9pbnQoZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSlcbiAgICBsZXQgcG9pbnQgPSB0aGlzLl9zdGFydFBvc2l0aW9uLmFkZCh0aGlzLnRvdWNoUG9pbnQuc3ViKHRoaXMuX3N0YXJ0VG91Y2hQb2ludCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy53aW5kb3dTY3JvbGxQb2ludC5zdWIodGhpcy5fc3RhcnRXaW5kb3dTY3JvbGxQb2ludCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy5zY3JvbGxFbGVtZW50c09mZnNldC5zdWIodGhpcy5fc3RhcnRTY3JvbGxFbGVtZW50c09mZnNldCkpXG4gICAgcG9pbnQgPSB0aGlzLmJvdW5kaW5nLmJvdW5kKHBvaW50LCB0aGlzLmdldFNpemUoKSlcbiAgICB0aGlzLmRldGVybWluZURpcmVjdGlvbihwb2ludClcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9pbnRcbiAgICB0aGlzLmVtaXQoJ2RyYWc6bW92ZScpXG4gIH1cblxuICBuYXRpdmVEcmFnRW5kKF9ldmVudCkge1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZWUtcGxhY2Vob2xkZXInKVxuICAgIHRoaXMuZHJhZ0VuZEFjdGlvbigpXG4gICAgdGhpcy5lbWl0KCdkcmFnOmVuZCcpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCB0aGlzLl9uYXRpdmVEcmFnT3ZlcilcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcm9wJywgdGhpcy5fbmF0aXZlRHJvcClcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fc2Nyb2xsKVxuICAgIHRoaXMuc2Nyb2xsRWxlbWVudHMuZm9yRWFjaCgocCkgPT4gcC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9zY3JvbGwpKVxuICAgIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnZHJhZ2dhYmxlJylcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgdGhpcy5fbmF0aXZlRHJhZ1N0YXJ0KVxuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZWUtYWN0aXZlJylcbiAgfVxuXG4gIG5hdGl2ZURyb3AoZXZlbnQpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIGNhbmNlbERyYWdnaW5nICgpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG5cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcblxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX3Njcm9sbClcbiAgICB0aGlzLnNjcm9sbEVsZW1lbnRzLmZvckVhY2goKHApID0+IHAucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fc2Nyb2xsKSlcblxuICAgIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlXG4gICAgdGhpcy5fcHJldmlvdXNEaXJlY3Rpb25Qb3NpdGlvbiA9IG51bGxcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkcmFnZ2FibGUnKVxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCB0aGlzLl9uYXRpdmVEcmFnU3RhcnQpXG4gIH1cblxuICBjb3B5U3R5bGVzKHNvdXJjZSwgZGVzdGluYXRpb24pIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmNvcHlTdHlsZXMpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5jb3B5U3R5bGVzKHNvdXJjZSwgZGVzdGluYXRpb24pXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvcHlTdHlsZXMoc291cmNlLCBkZXN0aW5hdGlvbilcbiAgICB9XG4gIH1cblxuICBlbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3AoZXZlbnQpIHtcbiAgICBjb25zdCBjb250YWluZXJSZWN0ID0gdGhpcy5jb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICBjb25zdCBjbG9uZWRFbGVtZW50ID0gdGhpcy5lbGVtZW50LmNsb25lTm9kZSh0cnVlKVxuICAgIGNsb25lZEVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcGVydHldID0gJydcbiAgICB0aGlzLmNvcHlTdHlsZXModGhpcy5lbGVtZW50LCBjbG9uZWRFbGVtZW50KVxuICAgIGNsb25lZEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZHJhZ2VlLW5hdGl2ZS1lbXVsYXRpb24nKVxuICAgIGNsb25lZEVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjbG9uZWRFbGVtZW50KVxuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkcmFnZWUtcGxhY2Vob2xkZXInKVxuXG4gICAgY29uc3QgZW11bGF0aW9uRHJhZ2dhYmxlID0gbmV3IERyYWdnYWJsZShjbG9uZWRFbGVtZW50LCB7XG4gICAgICBjb250YWluZXI6IGRvY3VtZW50LmJvZHksXG4gICAgICB0b3VjaERyYWdnaW5nVGhyZXNob2xkOiAwLFxuICAgICAgYm91bmQocG9pbnQpIHtcbiAgICAgICAgcmV0dXJuIHBvaW50XG4gICAgICB9LFxuICAgICAgb246IHtcbiAgICAgICAgJ2RyYWc6bW92ZSc6ICgpID0+IHtcbiAgICAgICAgICBjb25zdCBjb250YWluZXJSZWN0UG9pbnQgPSBuZXcgUG9pbnQoY29udGFpbmVyUmVjdC5sZWZ0LCBjb250YWluZXJSZWN0LnRvcClcbiAgICAgICAgICB0aGlzLnBvc2l0aW9uID0gZW11bGF0aW9uRHJhZ2dhYmxlLnBvc2l0aW9uLnN1Yihjb250YWluZXJSZWN0UG9pbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdWIodGhpcy5fc3RhcnRXaW5kb3dTY3JvbGxQb2ludClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZCh0aGlzLl9zdGFydFBhcmVudHNTY3JvbGxPZmZzZXQpXG5cbiAgICAgICAgICB0aGlzLmRldGVybWluZURpcmVjdGlvbih0aGlzLnBvc2l0aW9uKVxuICAgICAgICAgIHRoaXMuZW1pdCgnZHJhZzptb3ZlJylcbiAgICAgICAgfSxcbiAgICAgICAgJ2RyYWc6ZW5kJzogKCkgPT4ge1xuICAgICAgICAgIGVtdWxhdGlvbkRyYWdnYWJsZS5kZXN0cm95KClcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGNsb25lZEVsZW1lbnQpXG4gICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdlZS1wbGFjZWhvbGRlcicpXG4gICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdlZS1hY3RpdmUnKVxuXG4gICAgICAgICAgdGhpcy5lbWl0KCdkcmFnOmVuZCcpXG4gICAgICAgICAgdGhpcy5kcmFnRW5kQWN0aW9uKClcbiAgICAgICAgICB0aGlzLmNhbmNlbERyYWdnaW5nKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBjb250YWluZXJSZWN0UG9pbnQgPSBuZXcgUG9pbnQoY29udGFpbmVyUmVjdC5sZWZ0LCBjb250YWluZXJSZWN0LnRvcClcbiAgICBlbXVsYXRpb25EcmFnZ2FibGUuX3N0YXJ0V2luZG93U2Nyb2xsUG9pbnQgPSB0aGlzLl9zdGFydFdpbmRvd1Njcm9sbFBvaW50XG5cbiAgICBlbXVsYXRpb25EcmFnZ2FibGUubW92ZShcbiAgICAgIHRoaXMucGlubmVkUG9zaXRpb24uYWRkKGNvbnRhaW5lclJlY3RQb2ludClcbiAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMud2luZG93U2Nyb2xsUG9pbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgLnN1Yih0aGlzLnBhcmVudHNTY3JvbGxPZmZzZXQpXG4gICAgKVxuXG4gICAgZW11bGF0aW9uRHJhZ2dhYmxlLmRyYWdTdGFydChldmVudClcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBkcmFnRW5kQWN0aW9uKCkge1xuICAgIHRoaXMucGluUG9zaXRpb24odGhpcy5wb3NpdGlvbilcbiAgfVxuXG4gIGdldFJlY3RhbmdsZSgpIHtcbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZSh0aGlzLnBvc2l0aW9uLCB0aGlzLmdldFNpemUoKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgaWYgKHRoaXMuYm91bmRpbmcucmVmcmVzaCkge1xuICAgICAgdGhpcy5ib3VuZGluZy5yZWZyZXNoKClcbiAgICB9XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuaGFuZGxlci5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQpXG4gICAgdGhpcy5oYW5kbGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydClcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgdGhpcy5fbmF0aXZlRHJhZ1N0YXJ0KVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIHRoaXMuX25hdGl2ZURyYWdPdmVyKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzLl9uYXRpdmVEcm9wKVxuICAgIHRoaXMucmVzZXRFbWl0dGVyKClcblxuICAgIGNvbnN0IGluZGV4ID0gZHJhZ2dhYmxlcy5pbmRleE9mKHRoaXMpXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIGRyYWdnYWJsZXMuc3BsaWNlKGluZGV4LCAxKVxuICAgIH1cbiAgfVxuXG4gIGdldCBjb250YWluZXIoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9jb250YWluZXIgPSB0aGlzLl9jb250YWluZXIgfHwgdGhpcy5vcHRpb25zLmNvbnRhaW5lciB8fCB0aGlzLm9wdGlvbnMucGFyZW50IHx8IGdldERlZmF1bHRDb250YWluZXIodGhpcy5lbGVtZW50KSlcbiAgfVxuXG4gIGdldCBoYW5kbGVyKCkge1xuICAgIGlmICghdGhpcy5faGFuZGxlcikge1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuaGFuZGxlciA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhpcy5faGFuZGxlciA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKHRoaXMub3B0aW9ucy5oYW5kbGVyKSB8fCB0aGlzLmVsZW1lbnRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZXIgPSB0aGlzLm9wdGlvbnMuaGFuZGxlciB8fCB0aGlzLmVsZW1lbnRcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5faGFuZGxlclxuICB9XG5cbiAgZ2V0IHN0b3BQcm9wYWdhdGlvbk9uRHJhZ1N0YXJ0KCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuc3RvcFByb3BhZ2F0aW9uT25EcmFnU3RhcnQgfHwgZmFsc2VcbiAgfVxuXG4gIGdldCBuYXRpdmVEcmFnQW5kRHJvcCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLm5hdGl2ZURyYWdBbmREcm9wIHx8IGZhbHNlXG4gIH1cblxuICBnZXQgZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wT25Ub3VjaCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcE9uVG91Y2ggfHwgZmFsc2VcbiAgfVxuXG4gIGdldCBzaG91bGRSZW1vdmVaZXJvVHJhbnNsYXRlKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuc2hvdWxkUmVtb3ZlWmVyb1RyYW5zbGF0ZSB8fCBmYWxzZVxuICB9XG5cbiAgZ2V0IHRvdWNoRHJhZ2dpbmdUaHJlc2hvbGQoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy50b3VjaERyYWdnaW5nVGhyZXNob2xkIHx8IDBcbiAgfVxuXG4gIGdldCBkcmFnT3ZlclRocm90dGxlRHVyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5kcmFnT3ZlclRocm90dGxlRHVyYXRpb24gfHwgMTZcbiAgfVxuXG4gIGdldCB3aW5kb3dTY3JvbGxQb2ludCgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHdpbmRvdy5zY3JvbGxYLCB3aW5kb3cuc2Nyb2xsWSlcbiAgfVxuXG4gIGdldCBzY3JvbGxSb290Q29udGFpbmVyKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuc2Nyb2xsUm9vdENvbnRhaW5lciB8fCB0aGlzLmNvbnRhaW5lclxuICB9XG5cbiAgZ2V0IHNjcm9sbEVsZW1lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLl9jYWNoZWRTY3JvbGxFbGVtZW50c1xuICAgICAgPyB0aGlzLl9jYWNoZWRTY3JvbGxFbGVtZW50c1xuICAgICAgOiAodGhpcy5fY2FjaGVkU2Nyb2xsRWxlbWVudHMgPSBnZXRQYXJlbnRzQ2hhaW4odGhpcy5lbGVtZW50LCB0aGlzLnNjcm9sbFJvb3RDb250YWluZXIpKVxuICB9XG5cbiAgZ2V0IHNjcm9sbEVsZW1lbnRzT2Zmc2V0KCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQoXG4gICAgICB0aGlzLnNjcm9sbEVsZW1lbnRzLnJlZHVjZSgoc3VtLCBwKSA9PiBzdW0gKyBwLnNjcm9sbExlZnQsIDApLFxuICAgICAgdGhpcy5zY3JvbGxFbGVtZW50cy5yZWR1Y2UoKHN1bSwgcCkgPT4gc3VtICsgcC5zY3JvbGxUb3AsIDApXG4gICAgKVxuICB9XG5cbiAgZ2V0IHBhcmVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhY2hlZFBhcmVudHNcbiAgICAgID8gdGhpcy5fY2FjaGVkUGFyZW50c1xuICAgICAgOiAodGhpcy5fY2FjaGVkUGFyZW50cyA9IGdldFBhcmVudHNDaGFpbih0aGlzLmVsZW1lbnQsIHRoaXMuY29udGFpbmVyKSlcbiAgfVxuXG4gIGdldCBwYXJlbnRzU2Nyb2xsT2Zmc2V0KCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQoXG4gICAgICB0aGlzLnBhcmVudHMucmVkdWNlKChzdW0sIHApID0+IHN1bSArIHAuc2Nyb2xsTGVmdCwgMCksXG4gICAgICB0aGlzLnBhcmVudHMucmVkdWNlKChzdW0sIHApID0+IHN1bSArIHAuc2Nyb2xsVG9wLCAwKVxuICAgIClcbiAgfVxuXG4gIGdldCBlbmFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZVxuICB9XG5cbiAgc2V0IGVuYWJsZShlbmFibGUpIHtcbiAgICBpZiAoZW5hYmxlKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2VlLWRpc2FibGUnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZHJhZ2VlLWRpc2FibGUnKVxuICAgIH1cblxuICAgIHRoaXMuX2VuYWJsZSA9IGVuYWJsZVxuICB9XG59XG5cbkRyYWdnYWJsZS5lbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcigpXG5EcmFnZ2FibGUuZW1pdHRlci5vbignZHJhZ2dhYmxlOmNyZWF0ZScsIGFkZFRvRGVmYXVsdFNjb3BlKVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCwgaW1tZWRpYXRlKSB7XG4gIGxldCB0aW1lb3V0XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGV4ZWN1dGVkRnVuY3Rpb24oKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXNcbiAgICBjb25zdCBhcmdzID0gYXJndW1lbnRzXG5cbiAgICBjb25zdCBsYXRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgdGltZW91dCA9IG51bGxcbiAgICAgIGlmICghaW1tZWRpYXRlKSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpXG4gICAgfVxuXG4gICAgY29uc3QgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dFxuXG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpXG5cbiAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdClcblxuICAgIGlmIChjYWxsTm93KSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpXG4gIH1cbn1cbiIsImltcG9ydCBkZWJvdW5jZSBmcm9tICcuL3V0aWxzL2RlYm91bmNlJ1xuaW1wb3J0IHJlbW92ZUl0ZW0gZnJvbSAnLi91dGlscy9yZW1vdmUtYXJyYXktaXRlbSdcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudEVtaXR0ZXInXG5pbXBvcnQge1xuICBnZXREaXN0YW5jZSxcbiAgaW5kZXhPZk5lYXJlc3RQb2ludFxufSBmcm9tICcuL2dlb21ldHJ5L2Rpc3RhbmNlcydcblxuaW1wb3J0IERyYWdnYWJsZSBmcm9tICcuL2RyYWdnYWJsZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdCBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKGRyYWdnYWJsZXMsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcihvcHRpb25zKVxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgdGltZUVuZDogMjAwLFxuICAgICAgdGltZUV4Y2FuZ2U6IDQwMCxcbiAgICAgIHJhZGl1czogMzBcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGhpcy5jb250YWluZXIgPSBvcHRpb25zLmNvbnRhaW5lclxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZXNcbiAgICB0aGlzLmNoYW5nZWREdXJpbmdJdGVyYXRpb24gPSBmYWxzZVxuXG4gICAgdGhpcy5yZXNpemVPYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcihkZWJvdW5jZSh0aGlzLm9uUmVzaXplLmJpbmQodGhpcyksIDEwMCkpXG5cbiAgICBpZiAodGhpcy5jb250YWluZXIpIHtcbiAgICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLmNvbnRhaW5lcilcbiAgICB9XG5cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgb25SZXNpemUoKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5yZW9yZGVyT25DaGFuZ2UpIHRoaXMucmVzZXQoKVxuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGlmKCFkcmFnZ2FibGUuaXNEcmFnZ2luZykge1xuICAgICAgICBkcmFnZ2FibGUuc3RhcnRQb3NpdGlvbmluZygpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5fZW5hYmxlID0gdHJ1ZVxuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHRoaXMuaW5pdERyYWdnYWJsZShkcmFnZ2FibGUpKVxuICB9XG5cbiAgaW5pdERyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICBkcmFnZ2FibGUuZW5hYmxlID0gdGhpcy5fZW5hYmxlXG4gICAgZHJhZ2dhYmxlLm9uKCdkcmFnOm1vdmUnLCAoKSA9PiB0aGlzLm9uTW92ZShkcmFnZ2FibGUpKVxuICAgIGRyYWdnYWJsZS5kcmFnRW5kQWN0aW9uID0gKCkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbiwgdGhpcy5vcHRpb25zLnRpbWVFbmQpXG4gICAgICB0aGlzLm9uRW5kKGRyYWdnYWJsZSlcbiAgICB9XG4gICAgdGhpcy5yZXNpemVPYnNlcnZlci5vYnNlcnZlKGRyYWdnYWJsZS5lbGVtZW50KVxuICB9XG5cbiAgcmVsZWFzZURyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICB0aGlzLnJlc2l6ZU9ic2VydmVyLnVub2JzZXJ2ZShkcmFnZ2FibGUuZWxlbWVudClcbiAgICBkcmFnZ2FibGUucmVzZXRPbignZHJhZzplbmQnKVxuICAgIGRyYWdnYWJsZS5yZXNldE9uKCdkcmFnOm1vdmUnKVxuICAgIHJlbW92ZUl0ZW0odGhpcy5kcmFnZ2FibGVzLCBkcmFnZ2FibGUpXG4gIH1cblxuICBvbk1vdmUoZHJhZ2dhYmxlKSB7XG4gICAgaWYgKHRoaXMuc3dhcHBpbmdEaXNhYmxlZCkgcmV0dXJuXG5cbiAgICBjb25zdCBzb3J0ZWREcmFnZ2FibGVzID0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcbiAgICBjb25zdCBwaW5uZWRQb3NpdGlvbnMgPSBzb3J0ZWREcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24pXG5cbiAgICBjb25zdCBjdXJyZW50SW5kZXggPSBzb3J0ZWREcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKVxuICAgIGNvbnN0IHRhcmdldEluZGV4ID0gaW5kZXhPZk5lYXJlc3RQb2ludChwaW5uZWRQb3NpdGlvbnMsIGRyYWdnYWJsZS5wb3NpdGlvbiwgdGhpcy5vcHRpb25zLnJhZGl1cywgdGhpcy5kaXN0YW5jZUZ1bmMpXG5cbiAgICBpZiAodGFyZ2V0SW5kZXggIT09IC0xICYmIGN1cnJlbnRJbmRleCAhPT0gdGFyZ2V0SW5kZXgpIHtcbiAgICAgIGlmICh0YXJnZXRJbmRleCA8IGN1cnJlbnRJbmRleCkge1xuICAgICAgICBmb3IgKGxldCBpPXRhcmdldEluZGV4OyBpPGN1cnJlbnRJbmRleDsgaSsrKSB7XG4gICAgICAgICAgc29ydGVkRHJhZ2dhYmxlc1tpXS5waW5Qb3NpdGlvbihwaW5uZWRQb3NpdGlvbnNbaSsxXSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGxldCBpPWN1cnJlbnRJbmRleDsgaTx0YXJnZXRJbmRleDsgaSsrKSB7XG4gICAgICAgICAgc29ydGVkRHJhZ2dhYmxlc1tpKzFdLnBpblBvc2l0aW9uKHBpbm5lZFBvc2l0aW9uc1tpXSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChkcmFnZ2FibGUubmF0aXZlRHJhZ0FuZERyb3ApIHtcbiAgICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKHBpbm5lZFBvc2l0aW9uc1t0YXJnZXRJbmRleF0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24gPSBwaW5uZWRQb3NpdGlvbnNbdGFyZ2V0SW5kZXhdXG4gICAgICB9XG5cbiAgICAgIHRoaXMuY2hhbmdlZER1cmluZ0l0ZXJhdGlvbiA9IHRydWVcbiAgICB9XG4gIH1cblxuICBvbkVuZChkcmFnZ2FibGUpIHtcbiAgICBpZiAodGhpcy5jaGFuZ2VkRHVyaW5nSXRlcmF0aW9uKSB7XG4gICAgICB0aGlzLmVtaXQoJ2xpc3Q6Y2hhbmdlJylcbiAgICAgIHRoaXMuY2hhbmdlZER1cmluZ0l0ZXJhdGlvbiA9IGZhbHNlXG5cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucmVvcmRlck9uQ2hhbmdlICYmIHRoaXMub3B0aW9ucy5jb250YWluZXIpIHtcbiAgICAgICAgdGhpcy5yZW9yZGVyRWxlbWVudHMoZHJhZ2dhYmxlKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlb3JkZXJFbGVtZW50cyhtb3ZlZERyYWdnYWJsZSkge1xuICAgIGNvbnN0IHNvcnRlZERyYWdnYWJsZXMgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuICAgIGNvbnN0IGluZGV4ID0gc29ydGVkRHJhZ2dhYmxlcy5pbmRleE9mKG1vdmVkRHJhZ2dhYmxlKVxuICAgIGNvbnN0IG5leHQgPSBzb3J0ZWREcmFnZ2FibGVzW2luZGV4ICsgMV1cblxuICAgIHRoaXMucmVzZXQoKVxuXG4gICAgaWYgKG5leHQpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmluc2VydEJlZm9yZShtb3ZlZERyYWdnYWJsZS5lbGVtZW50LCBuZXh0LmVsZW1lbnQpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKG1vdmVkRHJhZ2dhYmxlLmVsZW1lbnQpXG4gICAgfVxuXG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGQpID0+IGQuc3RhcnRQb3NpdGlvbmluZygpKVxuICAgIHRoaXMuZW1pdCgnbGlzdDpyZW9yZGVyZWQnKVxuICB9XG5cbiAgZ2V0Q3VycmVudFBpbm5lZFBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5kcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24uY2xvbmUoKSlcbiAgfVxuXG4gIGdldFNvcnRlZERyYWdnYWJsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJhZ2dhYmxlcy5zb3J0KHRoaXMuc29ydGluZy5iaW5kKHRoaXMpKVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnJlc2V0UG9zaXRpb25Ub0luaXRpYWwoKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnJlZnJlc2goKSlcbiAgfVxuXG4gIGFkZChkcmFnZ2FibGVzKSB7XG4gICAgaWYgKCEoZHJhZ2dhYmxlcyBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgZHJhZ2dhYmxlcyA9IFtkcmFnZ2FibGVzXVxuICAgIH1cbiAgICBkcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gdGhpcy5pbml0RHJhZ2dhYmxlKGRyYWdnYWJsZSkpXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gdGhpcy5kcmFnZ2FibGVzLmNvbmNhdChkcmFnZ2FibGVzKVxuICB9XG5cbiAgcmVtb3ZlKGRyYWdnYWJsZXMpIHtcbiAgICBjb25zdCBpbml0aWFsUG9zaXRpb25zID0gdGhpcy5kcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uKVxuICAgIGNvbnN0IGxpc3QgPSBbXVxuICAgIGNvbnN0IHNvcnRlZERyYWdnYWJsZXMgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuXG4gICAgaWYgKCEoZHJhZ2dhYmxlcyBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgZHJhZ2dhYmxlcyA9IFtkcmFnZ2FibGVzXVxuICAgIH1cblxuICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB0aGlzLnJlbGVhc2VEcmFnZ2FibGUoZHJhZ2dhYmxlKSlcblxuICAgIGxldCBqID0gMFxuICAgIHNvcnRlZERyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBpZiAodGhpcy5kcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTEpIHtcbiAgICAgICAgaWYgKGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbiAhPT0gaW5pdGlhbFBvc2l0aW9uc1tqXSkge1xuICAgICAgICAgIGRyYWdnYWJsZS5waW5Qb3NpdGlvbihpbml0aWFsUG9zaXRpb25zW2pdLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICAgIH1cbiAgICAgICAgZHJhZ2dhYmxlLmluaXRpYWxQb3NpdGlvbiA9IGluaXRpYWxQb3NpdGlvbnNbal1cbiAgICAgICAgaisrXG4gICAgICAgIGxpc3QucHVzaChkcmFnZ2FibGUpXG4gICAgICB9XG4gICAgfSlcbiAgICB0aGlzLmRyYWdnYWJsZXMgPSBsaXN0XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLnJlbW92ZSh0aGlzLmRyYWdnYWJsZXMuc2xpY2UoKSlcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLmRlc3Ryb3koKSlcbiAgICBpZiAodGhpcy5jb250YWluZXIpIHtcbiAgICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIudW5vYnNlcnZlKHRoaXMuY29udGFpbmVyKVxuICAgIH1cbiAgfVxuXG4gIHNvcnRpbmcoZHJhZ2dhYmxlQSwgZHJhZ2dhYmxlQikge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuc29ydGluZykge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5zb3J0aW5nKGRyYWdnYWJsZUEsIGRyYWdnYWJsZUIpXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChkcmFnZ2FibGVBLnBpbm5lZFBvc2l0aW9uLnkgPCBkcmFnZ2FibGVCLnBpbm5lZFBvc2l0aW9uLnkpIHJldHVybiAtMVxuICAgICAgaWYgKGRyYWdnYWJsZUEucGlubmVkUG9zaXRpb24ueSA+IGRyYWdnYWJsZUIucGlubmVkUG9zaXRpb24ueSkgcmV0dXJuIDFcbiAgICAgIGlmIChkcmFnZ2FibGVBLnBpbm5lZFBvc2l0aW9uLnggPCBkcmFnZ2FibGVCLnBpbm5lZFBvc2l0aW9uLngpIHJldHVybiAtMVxuICAgICAgaWYgKGRyYWdnYWJsZUEucGlubmVkUG9zaXRpb24ueCA+IGRyYWdnYWJsZUIucGlubmVkUG9zaXRpb24ueCkgcmV0dXJuIDFcbiAgICAgIHJldHVybiAwXG4gICAgfVxuICB9XG5cbiAgZ2V0IGRpc3RhbmNlRnVuYygpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmdldERpc3RhbmNlIHx8IGdldERpc3RhbmNlXG4gIH1cblxuICBnZXQgcG9zaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmdldEN1cnJlbnRQaW5uZWRQb3NpdGlvbnMoKVxuICB9XG5cbiAgc2V0IHBvc2l0aW9ucyhwb3NpdGlvbnMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gJ3dyb25nIGFycmF5IGxlbmd0aCdcbiAgICBpZiAocG9zaXRpb25zLmxlbmd0aCA9PT0gdGhpcy5kcmFnZ2FibGVzLmxlbmd0aCkge1xuICAgICAgcG9zaXRpb25zLmZvckVhY2goKHBvaW50LCBpKSA9PiB7XG4gICAgICAgIHRoaXMuZHJhZ2dhYmxlc1tpXS5waW5Qb3NpdGlvbihwb2ludClcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG1lc3NhZ2VcbiAgICB9XG4gIH1cblxuICBnZXQgZW5hYmxlKCkge1xuICAgIHJldHVybiB0aGlzLl9lbmFibGVcbiAgfVxuXG4gIHNldCBlbmFibGUoZW5hYmxlKSB7XG4gICAgdGhpcy5fZW5hYmxlID0gZW5hYmxlXG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLmVuYWJsZSA9IGVuYWJsZVxuICAgIH0pXG4gIH1cblxuICBnZXQgc3dhcHBpbmdEaXNhYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3dhcHBpbmdEaXNhYmxlZFxuICB9XG5cbiAgc2V0IHN3YXBwaW5nRGlzYWJsZWQoZGlzYWJsZWQpIHtcbiAgICB0aGlzLl9zd2FwcGluZ0Rpc2FibGVkID0gZGlzYWJsZWRcbiAgfVxuXG4gIHN0YXRpYyBmYWN0b3J5KGNvbnRhaW5lckVsZW1lbnQsIGVsZW1lbnRzLCBvcHRpb25zPXt9KSB7XG4gICAgY29uc3QgZHJhZ2dhYmxlcyA9IEFycmF5LmZyb20oZWxlbWVudHMpLm1hcCgoZWxlbWVudCkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBEcmFnZ2FibGUoZWxlbWVudCwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyRWxlbWVudFxuICAgICAgfSwgb3B0aW9ucy5kcmFnZ2FibGUgfHwge30pKVxuICAgIH0pXG5cbiAgICByZXR1cm4gbmV3IExpc3QoZHJhZ2dhYmxlcywgT2JqZWN0LmFzc2lnbih7XG4gICAgICBjb250YWluZXI6IGNvbnRhaW5lckVsZW1lbnRcbiAgICB9LCBvcHRpb25zLmxpc3QgfHwge30pKVxuICB9XG59XG4iLCJpbXBvcnQgTGlzdCBmcm9tICcuL2xpc3QnXG5pbXBvcnQgeyBpbmRleE9mTmVhcmVzdFBvaW50LCBnZXRZRGlmZmVyZW5jZSB9IGZyb20gJy4vZ2VvbWV0cnkvZGlzdGFuY2VzJ1xuaW1wb3J0IFBvaW50IGZyb20gJy4vZ2VvbWV0cnkvcG9pbnQnXG5cbmltcG9ydCBEcmFnZ2FibGUgZnJvbSAnLi9kcmFnZ2FibGUnXG5cbmNvbnN0IGFycmF5TW92ZSA9IChhcnJheSwgZnJvbSwgdG8pID0+IHtcbiAgYXJyYXkuc3BsaWNlKHRvIDwgMCA/IGFycmF5Lmxlbmd0aCArIHRvIDogdG8sIDAsIGFycmF5LnNwbGljZShmcm9tLCAxKVswXSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnViYmxpbmdMaXN0IGV4dGVuZHMgTGlzdCB7XG4gIGF1dG9EZXRlY3RWZXJ0aWNhbEdhcCgpIHtcbiAgICBpZiAoIXRoaXMuX3ZlcnRpY2FsR2FwICYmICF0aGlzLm9wdGlvbnMudmVydGljYWxHYXAgJiYgdGhpcy5kcmFnZ2FibGVzLmxlbmd0aCA+PSAyKSB7XG4gICAgICBjb25zdCBzb3J0ZWQgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuICAgICAgdGhpcy5fdmVydGljYWxHYXAgPSBzb3J0ZWRbMV0ucGlubmVkUG9zaXRpb24ueSAtIHNvcnRlZFswXS5waW5uZWRQb3NpdGlvbi55IC0gc29ydGVkWzBdLmdldFNpemUoKS55XG4gICAgfVxuICB9XG5cbiAgYXV0b0RldGVjdFN0YXJ0UG9zaXRpb24oKSB7XG4gICAgaWYgKHRoaXMuZHJhZ2dhYmxlcy5sZW5ndGggPj0gMSAmJiAhdGhpcy5zdGFydFBvc2l0aW9uKSB7XG4gICAgICB0aGlzLnN0YXJ0UG9zaXRpb24gPSB0aGlzLmRyYWdnYWJsZXNbMF0ucGlubmVkUG9zaXRpb25cbiAgICB9XG4gIH1cblxuICBpbml0RHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIHN1cGVyLmluaXREcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICAgIGRyYWdnYWJsZS5vbignZHJhZzpzdGFydCcsICgpID0+IHRoaXMub25EcmFnU3RhcnQoZHJhZ2dhYmxlKSlcbiAgfVxuXG4gIG9uRHJhZ1N0YXJ0KGRyYWdnYWJsZSkge1xuICAgIHRoaXMuYXV0b0RldGVjdFZlcnRpY2FsR2FwKClcbiAgICB0aGlzLmF1dG9EZXRlY3RTdGFydFBvc2l0aW9uKClcbiAgICB0aGlzLmNhY2hlZFNvcnRlZERyYWdnYWJsZXMgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuICAgIHRoaXMuaW5kZXhPZkFjdGl2ZURyYWdnYWJsZSA9IHRoaXMuY2FjaGVkU29ydGVkRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSlcbiAgfVxuXG4gIG9uTW92ZShkcmFnZ2FibGUpIHtcbiAgICBpZiAodGhpcy5zd2FwcGluZ0Rpc2FibGVkKSByZXR1cm5cblxuICAgIGNvbnN0IHByZXZEcmFnZ2FibGUgPSB0aGlzLmNhY2hlZFNvcnRlZERyYWdnYWJsZXNbdGhpcy5pbmRleE9mQWN0aXZlRHJhZ2dhYmxlIC0gMV1cbiAgICBjb25zdCBuZXh0RHJhZ2dhYmxlID0gdGhpcy5jYWNoZWRTb3J0ZWREcmFnZ2FibGVzW3RoaXMuaW5kZXhPZkFjdGl2ZURyYWdnYWJsZSArIDFdXG4gICAgY29uc3QgY3VycmVudFBvc2l0aW9uID0gZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uXG5cbiAgICBsZXQgY3VycmVudE9yZGVyXG4gICAgbGV0IHRhcmdldEluZGV4XG5cbiAgICBpZihkcmFnZ2FibGUudXBEaXJlY3Rpb24gJiYgcHJldkRyYWdnYWJsZSkge1xuICAgICAgY3VycmVudE9yZGVyID0gW3ByZXZEcmFnZ2FibGUsIGRyYWdnYWJsZV0ubWFwKChkKSA9PiBkLnBpbm5lZFBvc2l0aW9uKVxuICAgICAgdGFyZ2V0SW5kZXggPSBpbmRleE9mTmVhcmVzdFBvaW50KGN1cnJlbnRPcmRlciwgZHJhZ2dhYmxlLnBvc2l0aW9uLCAxMDAwMCwgdGhpcy5kaXN0YW5jZUZ1bmMpXG5cbiAgICAgIGlmICh0YXJnZXRJbmRleCA9PT0gMCkge1xuICAgICAgICBpZihkcmFnZ2FibGUuc2hvdWxkVXNlTmF0aXZlRHJhZ0FuZERyb3AoKSkge1xuICAgICAgICAgIGRyYWdnYWJsZS5waW5Qb3NpdGlvbihwcmV2RHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbiA9IHByZXZEcmFnZ2FibGUucGlubmVkUG9zaXRpb24uY2xvbmUoKVxuICAgICAgICB9XG4gICAgICAgIHByZXZEcmFnZ2FibGUucGluUG9zaXRpb24obmV3IFBvaW50KFxuICAgICAgICAgIGN1cnJlbnRQb3NpdGlvbi54LFxuICAgICAgICAgIGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbi55ICsgZHJhZ2dhYmxlLmdldFNpemUoKS55ICsgdGhpcy52ZXJ0aWNhbEdhcFxuICAgICAgICApLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICAgIGFycmF5TW92ZSh0aGlzLmNhY2hlZFNvcnRlZERyYWdnYWJsZXMsIHRoaXMuaW5kZXhPZkFjdGl2ZURyYWdnYWJsZS0tLCB0aGlzLmluZGV4T2ZBY3RpdmVEcmFnZ2FibGUpXG4gICAgICAgIHRoaXMub25Nb3ZlKGRyYWdnYWJsZSlcbiAgICAgICAgdGhpcy5jaGFuZ2VkRHVyaW5nSXRlcmF0aW9uID0gdHJ1ZVxuICAgICAgfVxuICAgIH0gZWxzZSBpZihkcmFnZ2FibGUuZG93bkRpcmVjdGlvbiAmJiBuZXh0RHJhZ2dhYmxlKSB7XG4gICAgICBjdXJyZW50T3JkZXIgPSBbZHJhZ2dhYmxlLCBuZXh0RHJhZ2dhYmxlXS5tYXAoKGQpID0+IGQucGlubmVkUG9zaXRpb24pXG4gICAgICB0YXJnZXRJbmRleCA9IGluZGV4T2ZOZWFyZXN0UG9pbnQoY3VycmVudE9yZGVyLCBkcmFnZ2FibGUucG9zaXRpb24sIDEwMDAwLCB0aGlzLmRpc3RhbmNlRnVuYylcblxuICAgICAgaWYodGFyZ2V0SW5kZXggPT09IDEpIHtcbiAgICAgICAgbmV4dERyYWdnYWJsZS5waW5Qb3NpdGlvbihkcmFnZ2FibGUucGlubmVkUG9zaXRpb24sIHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSlcbiAgICAgICAgY29uc3QgZHJhZ2dhYmxlTmV3UG9zaXRpb24gPSBuZXcgUG9pbnQoXG4gICAgICAgICAgbmV4dERyYWdnYWJsZS5waW5uZWRQb3NpdGlvbi54LFxuICAgICAgICAgIG5leHREcmFnZ2FibGUucGlubmVkUG9zaXRpb24ueSArIG5leHREcmFnZ2FibGUuZ2V0U2l6ZSgpLnkgKyB0aGlzLnZlcnRpY2FsR2FwXG4gICAgICAgIClcbiAgICAgICAgaWYoZHJhZ2dhYmxlLnNob3VsZFVzZU5hdGl2ZURyYWdBbmREcm9wKCkpIHtcbiAgICAgICAgICBkcmFnZ2FibGUucGluUG9zaXRpb24oZHJhZ2dhYmxlTmV3UG9zaXRpb24pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uID0gZHJhZ2dhYmxlTmV3UG9zaXRpb25cbiAgICAgICAgfVxuICAgICAgICBhcnJheU1vdmUodGhpcy5jYWNoZWRTb3J0ZWREcmFnZ2FibGVzLCB0aGlzLmluZGV4T2ZBY3RpdmVEcmFnZ2FibGUrKywgdGhpcy5pbmRleE9mQWN0aXZlRHJhZ2dhYmxlKVxuICAgICAgICB0aGlzLm9uTW92ZShkcmFnZ2FibGUpXG4gICAgICAgIHRoaXMuY2hhbmdlZER1cmluZ0l0ZXJhdGlvbiA9IHRydWVcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBidWJibGluZyhzb3J0ZWREcmFnZ2FibGVzLCBjdXJyZW50RHJhZ2dhYmxlKSB7XG4gICAgY29uc3QgY3VycmVudFBvc2l0aW9uID0gdGhpcy5zdGFydFBvc2l0aW9uLmNsb25lKClcbiAgICBzb3J0ZWREcmFnZ2FibGVzIHx8PSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuXG4gICAgc29ydGVkRHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGlmICghZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uLmNvbXBhcmUoY3VycmVudFBvc2l0aW9uKSkge1xuICAgICAgICBpZiAoZHJhZ2dhYmxlID09PSBjdXJyZW50RHJhZ2dhYmxlICYmICFjdXJyZW50RHJhZ2dhYmxlLnNob3VsZFVzZU5hdGl2ZURyYWdBbmREcm9wKCkpIHtcbiAgICAgICAgICBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24gPSBjdXJyZW50UG9zaXRpb24uY2xvbmUoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRyYWdnYWJsZS5waW5Qb3NpdGlvbihjdXJyZW50UG9zaXRpb24sIChkcmFnZ2FibGUgPT09IGN1cnJlbnREcmFnZ2FibGUpID8gMCA6IHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjdXJyZW50UG9zaXRpb24ueSA9IGN1cnJlbnRQb3NpdGlvbi55ICsgZHJhZ2dhYmxlLmdldFNpemUoKS55ICsgdGhpcy52ZXJ0aWNhbEdhcFxuICAgIH0pXG4gIH1cblxuICByZW1vdmUoZHJhZ2dhYmxlcykge1xuICAgIGlmICghKGRyYWdnYWJsZXMgaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICAgIGRyYWdnYWJsZXMgPSBbZHJhZ2dhYmxlc11cbiAgICB9XG5cbiAgICBkcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gdGhpcy5yZWxlYXNlRHJhZ2dhYmxlKGRyYWdnYWJsZSkpXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gdGhpcy5kcmFnZ2FibGVzLmZpbHRlcigoZCkgPT4gIWRyYWdnYWJsZXMuaW5jbHVkZXMoZCkpXG5cbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZCkgPT4gZC5zdGFydFBvc2l0aW9uaW5nKCkpXG5cbiAgICBpZih0aGlzLmRyYWdnYWJsZXMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5hdXRvRGV0ZWN0VmVydGljYWxHYXAoKVxuICAgICAgdGhpcy5hdXRvRGV0ZWN0U3RhcnRQb3NpdGlvbigpXG4gICAgICB0aGlzLmJ1YmJsaW5nKClcbiAgICB9XG4gIH1cblxuICBnZXQgZGlzdGFuY2VGdW5jKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZ2V0RGlzdGFuY2UgfHwgZ2V0WURpZmZlcmVuY2VcbiAgfVxuXG4gIGdldCB2ZXJ0aWNhbEdhcCgpIHtcbiAgICBpZih0aGlzLm9wdGlvbnMudmVydGljYWxHYXApIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMudmVydGljYWxHYXBcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hdXRvRGV0ZWN0VmVydGljYWxHYXAoKVxuICAgICAgcmV0dXJuIHRoaXMuX3ZlcnRpY2FsR2FwIHx8IDBcbiAgICB9XG4gIH1cblxuICBzZXQgdmVydGljYWxHYXAoZ2FwVmFsdWUpIHtcbiAgICB0aGlzLm9wdGlvbnMudmVydGljYWxHYXAgPSBnYXBWYWx1ZVxuICB9XG5cbiAgc3RhdGljIGZhY3RvcnkoY29udGFpbmVyRWxlbWVudCwgZWxlbWVudHMsIG9wdGlvbnM9e30pIHtcbiAgICBjb25zdCBkcmFnZ2FibGVzID0gQXJyYXkuZnJvbShlbGVtZW50cykubWFwKChlbGVtZW50KSA9PiB7XG4gICAgICByZXR1cm4gbmV3IERyYWdnYWJsZShlbGVtZW50LCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgY29udGFpbmVyOiBjb250YWluZXJFbGVtZW50XG4gICAgICB9LCBvcHRpb25zLmRyYWdnYWJsZSB8fCB7fSkpXG4gICAgfSlcblxuICAgIHJldHVybiBuZXcgQnViYmxpbmdMaXN0KGRyYWdnYWJsZXMsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgY29udGFpbmVyOiBjb250YWluZXJFbGVtZW50XG4gICAgfSwgb3B0aW9ucy5saXN0IHx8IHt9KSlcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlBvaW50IiwiY29uc3RydWN0b3IiLCJ4IiwieSIsImFkZCIsInAiLCJzdWIiLCJtdWx0IiwiayIsIm5lZ2F0aXZlIiwiY29tcGFyZSIsImNsb25lIiwidG9TdHJpbmciLCJlbGVtZW50T2Zmc2V0IiwiZWxlbWVudCIsInBhcmVudCIsInBhcmVudE5vZGUiLCJlbGVtZW50UmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInBhcmVudFJlY3QiLCJsZWZ0IiwidG9wIiwiZWxlbWVudFNpemUiLCJ3aWR0aCIsImhlaWdodCIsIlJlY3RhbmdsZSIsInBvc2l0aW9uIiwic2l6ZSIsImdldFAxIiwiZ2V0UDIiLCJnZXRQMyIsImdldFA0IiwiZ2V0Q2VudGVyIiwib3IiLCJyZWN0IiwiTWF0aCIsIm1pbiIsIm1heCIsImFuZCIsImluY2x1ZGVQb2ludCIsImluY2x1ZGVSZWN0YW5nbGUiLCJyZWN0YW5nbGUiLCJtb3ZlVG9Cb3VuZCIsImF4aXMiLCJzZWxBeGlzIiwiY3Jvc3NSZWN0YW5nbGUiLCJ0aGlzQ2VudGVyIiwicmVjdENlbnRlciIsInNpZ24iLCJvZmZzZXQiLCJnZXRTcXVhcmUiLCJzdHlsZUFwcGx5IiwiZWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzdHlsZSIsImdyb3d0aCIsImdldE1pblNpZGUiLCJmcm9tRWxlbWVudCIsImlzQ29uc2lkZXJUcmFuc2xhdGUiLCJnZXREZWZhdWx0Q29udGFpbmVyIiwiY29udGFpbmVyIiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInRhZ05hbWUiLCJFdmVudEVtaXR0ZXIiLCJvcHRpb25zIiwiZXZlbnRzIiwib24iLCJldmVudE5hbWUiLCJmbiIsIk9iamVjdCIsImVudHJpZXMiLCJlbWl0IiwiaW50ZXJydXB0ZWQiLCJhcmdzIiwic2xpY2UiLCJjYWxsIiwiYXJndW1lbnRzIiwiZnVuYyIsImludGVycnVwdCIsInB1c2giLCJwcmVwZW5kT24iLCJ1bnNoaWZ0IiwidW5zdWJzY3JpYmUiLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJyZXNldEVtaXR0ZXIiLCJyZXNldE9uIiwiZ2V0RGlzdGFuY2UiLCJwMSIsInAyIiwiZHgiLCJkeSIsInNxcnQiLCJnZXRYRGlmZmVyZW5jZSIsImFicyIsImdldFlEaWZmZXJlbmNlIiwidHJhbnNmb3JtZWRTcGFjZURpc3RhbmNlRmFjdG9yeSIsInBvdyIsImluZGV4T2ZOZWFyZXN0UG9pbnQiLCJhcnIiLCJ2YWwiLCJyYWRpdXMiLCJnZXREaXN0YW5jZUZ1bmMiLCJpIiwidGVtcCIsImxlbmd0aCIsImRpcmVjdENyb3NzaW5nIiwiTDFQMSIsIkwxUDIiLCJMMlAxIiwiTDJQMiIsImsxIiwiazIiLCJiMSIsImIyIiwiYm91bmRUb0xpbmUiLCJBIiwiQiIsIlAiLCJBUCIsIkFCIiwiYWIyIiwiYXBfYWIiLCJ0IiwiZ2V0UG9pbnRPbkxpbmVCeUxlbmdodCIsIkxQMSIsIkxQMiIsImxlbmdodCIsInBlcmNlbnQiLCJhZGRQb2ludFRvQm91bmRQb2ludHMiLCJib3VuZHBvaW50cyIsInBvaW50IiwiaXNSaWdodCIsInJlc3VsdCIsImZpbHRlciIsImJQb2ludCIsImdldEFuZ2xlRGlmZiIsImFscGhhIiwiYmV0YSIsIm1pbkFuZ2xlIiwibWF4QW5nbGUiLCJQSSIsImdldEFuZ2xlIiwiZGlmZiIsIm5vcm1hbGl6ZUFuZ2xlIiwiYXRhbjIiLCJib3VuZEFuZ2xlIiwiZG1pbiIsImRtYXgiLCJnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0iLCJhbmdsZSIsImNlbnRlciIsImNvcyIsInNpbiIsIkJvdW5kIiwiYm91bmQiLCJfc2l6ZSIsInJlZnJlc2giLCJib3VuZGluZyIsImluc3RhbmNlIiwiYmluZCIsIkJvdW5kVG9SZWN0YW5nbGUiLCJjYWxjUG9pbnQiLCJyZWN0UDIiLCJCb3VuZFRvRWxlbWVudCIsIkJvdW5kVG9MaW5lWCIsInN0YXJ0WSIsImVuZFkiLCJCb3VuZFRvTGluZVkiLCJzdGFydFgiLCJlbmRYIiwiQm91bmRUb0xpbmUiLCJzdGFydFBvaW50IiwiZW5kUG9pbnQiLCJzb21lSyIsImNvc0JldGEiLCJzaW5CZXRhIiwicG9pbnQyIiwibmV3RW5kUG9pbnQiLCJwb2ludENyb3NzaW5nIiwiQm91bmRUb0NpcmNsZSIsIkJvdW5kVG9BcmMiLCJzdGFydEFuZ2xlIiwiZW5kQW5nbGUiLCJfc3RhcnRBbmdsZSIsIl9lbmRBbmdsZSIsImFycmF5IiwicmFuZ2UiLCJzdGFydCIsInN0b3AiLCJzdGVwIiwiQmFzaWNTdHJhdGVneSIsImJvdW5kUmVjdCIsIk5vdENyb3NzaW5nU3RyYXRlZ3kiLCJwb3NpdGlvbmluZyIsInJlY3RhbmdsZUxpc3QiLCJpbmRleGVzT2ZOZXdzIiwic3RhdGljUmVjdGFuZ2xlSW5kZXhlcyIsInJlZHVjZSIsImluZGV4ZXMiLCJfcmVjdCIsImZvckVhY2giLCJyZW1vdmFibGUiLCJpbmRleE9mU3RhdGljIiwic3RhdGljUmVjdCIsInNvbWUiLCJzb3J0aW5nIiwib2RsRHJhZ2dhYmxlc0xpc3QiLCJuZXdEcmFnZ2FibGVzIiwiaW5kZXhPZk5ld3MiLCJkcmFnZ2FibGVzIiwiY29uY2F0IiwiZHJhZ2dhYmxlIiwiRmxvYXRMZWZ0U3RyYXRlZ3kiLCJhc3NpZ24iLCJwYWRkaW5nVG9wTGVmdCIsInBhZGRpbmdCb3R0b21SaWdodCIsInlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyIsImdldFBvc2l0aW9uIiwiX2luZGV4ZXNPZk5ld3MiLCJib3VuZGFyeVBvaW50cyIsInJlY3RJbmRleCIsImlzVmFsaWQiLCJuZXdMaXN0IiwibGlzdE9sZFBvc2l0aW9uIiwibWFwIiwibmV3RHJhZ2dhYmxlIiwiRmxvYXRSaWdodFN0cmF0ZWd5IiwicGFkZGluZ1RvcFJpZ2h0IiwicGFkZGluZ0JvdHRvbUxlZnQiLCJwYWRkaW5nQm90dG9tTmVnTGVmdCIsImFkZFRvRGVmYXVsdFNjb3BlIiwidGFyZ2V0IiwiZGVmYXVsdFNjb3BlIiwiYWRkVGFyZ2V0IiwiVGFyZ2V0IiwidGltZUVuZCIsInRpbWVFeGNhbmdlIiwicG9zaXRpb25pbmdTdHJhdGVneSIsInN0cmF0ZWd5IiwiZ2V0UmVjdGFuZ2xlIiwidGFyZ2V0cyIsImVtaXR0ZXIiLCJzdGFydEJvdW5kaW5nIiwiaW5pdCIsImluZGV4ZXNPZk5ldyIsIm9sZERyYWdnYWJsZXMiLCJyZWN0YW5nbGVzIiwiaW5uZXJEcmFnZ2FibGVzIiwic2V0UG9zaXRpb24iLCJjYXRjaERyYWdnYWJsZSIsInRhcmdldFJlY3RhbmdsZSIsImRyYWdnYWJsZVNxdWFyZSIsImdldFNpemUiLCJkZXN0cm95Iiwic2NvcGVzIiwic2NvcGUiLCJyZW1vdmVJdGVtIiwib25FbmQiLCJuZXdEcmFnZ2FibGVzSW5kZXgiLCJhZGRSZW1vdmVPbk1vdmUiLCJ0aW1lIiwibW92ZSIsImluaXRpYWxQb3NpdGlvbiIsInB1c2hJbm5lckRyYWdnYWJsZSIsInJlbW92ZUhhbmRsZXIiLCJyZW1vdmUiLCJyZXNldCIsImdldFNvcnRlZERyYWdnYWJsZXMiLCJfY29udGFpbmVyIiwiU2NvcGUiLCJkcmFnRW5kQWN0aW9uIiwiYWRkRHJhZ2dhYmxlIiwic2hvdFRhcmdldHMiLCJzb3J0IiwiYSIsImIiLCJwaW5Qb3NpdGlvbiIsInBvc2l0aW9ucyIsIm1lc3NhZ2UiLCJ0YXJnZXRJbmRleGVzIiwiY3VycmVudFNjb3BlIiwiYWRkRHJhZ2dhYmxlVG9TY29wZSIsIkRyYWdnYWJsZSIsImFkZFRhcmdldFRvU2NvcGUiLCJ0aHJvdHRsZSIsIndhaXQiLCJsYXN0VGltZSIsImV4ZWN1dGVkRnVuY3Rpb24iLCJjb250ZXh0Iiwibm93IiwiRGF0ZSIsImFwcGx5IiwiZ2V0UGFyZW50c0NoYWluIiwiY2hpbGRFbGVtZW50Iiwicm9vdEVsZW1lbnQiLCJjaGFpbiIsInRocm90dGxlZERyYWdPdmVyIiwiY2FsbGJhY2siLCJkdXJhdGlvbiIsInRocm90dGxlZENhbGxiYWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInBhc3NpdmVGYWxzZSIsInBhc3NpdmUiLCJpc1RvdWNoIiwibmF2aWdhdG9yIiwibWF4VG91Y2hQb2ludHMiLCJtb3VzZUV2ZW50cyIsImVuZCIsInRvdWNoRXZlbnRzIiwidHJhbnNmb3JtUHJvcGVydHkiLCJ0cmFuc2l0aW9uUHJvcGVydHkiLCJnZXRUb3VjaEJ5SUQiLCJ0b3VjaElkIiwiY2hhbmdlZFRvdWNoZXMiLCJpZGVudGlmaWVyIiwicHJldmVudERvdWJsZUluaXQiLCJleGlzdGluZyIsImNvcHlTdHlsZXMiLCJzb3VyY2UiLCJkZXN0aW5hdGlvbiIsImNzIiwia2V5IiwiY2hpbGRyZW4iLCJfZW5hYmxlIiwic3RhcnRQb3NpdGlvbmluZyIsInN0YXJ0TGlzdGVuaW5nIiwiX3NldERlZmF1bHRUcmFuc2l0aW9uIiwicGlubmVkUG9zaXRpb24iLCJfZHJhZ1N0YXJ0IiwiZHJhZ1N0YXJ0IiwiX2RyYWdNb3ZlIiwiZHJhZ01vdmUiLCJfZHJhZ0VuZCIsImRyYWdFbmQiLCJfbmF0aXZlRHJhZ1N0YXJ0IiwibmF0aXZlRHJhZ1N0YXJ0IiwiX25hdGl2ZURyYWdPdmVyIiwibmF0aXZlRHJhZ092ZXIiLCJkcmFnT3ZlclRocm90dGxlRHVyYXRpb24iLCJfbmF0aXZlRHJhZ0VuZCIsIm5hdGl2ZURyYWdFbmQiLCJfbmF0aXZlRHJvcCIsIm5hdGl2ZURyb3AiLCJfc2Nyb2xsIiwib25TY3JvbGwiLCJoYW5kbGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl90cmFuc2Zvcm1Qb3NpdGlvbiIsIl9zZXRUcmFuc2l0aW9uIiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25Dc3MiLCJ0ZXN0IiwicmVwbGFjZSIsIl9zZXRUcmFuc2xhdGUiLCJ0cmFuc2xhdGVDc3MiLCJ0cmFuc2Zvcm0iLCJzaG91bGRSZW1vdmVaZXJvVHJhbnNsYXRlIiwiaXNTaWxlbnQiLCJzaWxlbnQiLCJyZXNldFBvc2l0aW9uVG9Jbml0aWFsIiwicmVmcmVzaFBvc2l0aW9uIiwiZGV0ZXJtaW5lRGlyZWN0aW9uIiwiX3ByZXZpb3VzRGlyZWN0aW9uUG9zaXRpb24iLCJfc3RhcnRQb3NpdGlvbiIsImxlZnREaXJlY3Rpb24iLCJyaWdodERpcmVjdGlvbiIsInVwRGlyZWN0aW9uIiwiZG93bkRpcmVjdGlvbiIsInNlZW1zU2Nyb2xsaW5nIiwiX3N0YXJ0VG91Y2hUaW1lc3RhbXAiLCJ0b3VjaERyYWdnaW5nVGhyZXNob2xkIiwic2hvdWxkVXNlTmF0aXZlRHJhZ0FuZERyb3AiLCJpc1RvdWNoRXZlbnQiLCJuYXRpdmVEcmFnQW5kRHJvcCIsImVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcE9uVG91Y2giLCJzdG9wUHJvcGFnYXRpb25PbkRyYWdTdGFydCIsInN0b3BQcm9wYWdhdGlvbiIsIlRvdWNoRXZlbnQiLCJ0b3VjaFBvaW50IiwiX3N0YXJ0VG91Y2hQb2ludCIsInBhZ2VYIiwiY2xpZW50WCIsInBhZ2VZIiwiY2xpZW50WSIsIl90b3VjaElkIiwiX3N0YXJ0V2luZG93U2Nyb2xsUG9pbnQiLCJ3aW5kb3dTY3JvbGxQb2ludCIsIl9zdGFydFNjcm9sbEVsZW1lbnRzT2Zmc2V0Iiwic2Nyb2xsRWxlbWVudHNPZmZzZXQiLCJIVE1MSW5wdXRFbGVtZW50IiwiZm9jdXMiLCJfc3RhcnRQYXJlbnRzU2Nyb2xsT2Zmc2V0IiwicGFyZW50c1Njcm9sbE9mZnNldCIsImVtdWxhdGVPbkZpcnN0TW92ZSIsImNhbmNlbERyYWdnaW5nIiwiZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wIiwiY2FuY2VsRW11bGF0aW9uIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNjcm9sbEVsZW1lbnRzIiwidG91Y2giLCJpc0RyYWdnaW5nIiwiY2xhc3NMaXN0Iiwic2V0VGltZW91dCIsIl9ldmVudCIsImRhdGFUcmFuc2ZlciIsInNldERhdGEiLCJlZmZlY3RBbGxvd2VkIiwiZHJvcEVmZmVjdCIsInJlbW92ZUF0dHJpYnV0ZSIsImNvbnRhaW5lclJlY3QiLCJjbG9uZWRFbGVtZW50IiwiY2xvbmVOb2RlIiwiYm9keSIsImFwcGVuZENoaWxkIiwiZW11bGF0aW9uRHJhZ2dhYmxlIiwiY29udGFpbmVyUmVjdFBvaW50IiwicmVtb3ZlQ2hpbGQiLCJfaGFuZGxlciIsInNjcm9sbFgiLCJzY3JvbGxZIiwic2Nyb2xsUm9vdENvbnRhaW5lciIsIl9jYWNoZWRTY3JvbGxFbGVtZW50cyIsInN1bSIsInNjcm9sbExlZnQiLCJzY3JvbGxUb3AiLCJwYXJlbnRzIiwiX2NhY2hlZFBhcmVudHMiLCJlbmFibGUiLCJkZWJvdW5jZSIsImltbWVkaWF0ZSIsInRpbWVvdXQiLCJsYXRlciIsImNsZWFyVGltZW91dCIsIkxpc3QiLCJjaGFuZ2VkRHVyaW5nSXRlcmF0aW9uIiwicmVzaXplT2JzZXJ2ZXIiLCJSZXNpemVPYnNlcnZlciIsIm9uUmVzaXplIiwib2JzZXJ2ZSIsInJlb3JkZXJPbkNoYW5nZSIsImluaXREcmFnZ2FibGUiLCJvbk1vdmUiLCJyZWxlYXNlRHJhZ2dhYmxlIiwidW5vYnNlcnZlIiwic3dhcHBpbmdEaXNhYmxlZCIsInNvcnRlZERyYWdnYWJsZXMiLCJwaW5uZWRQb3NpdGlvbnMiLCJjdXJyZW50SW5kZXgiLCJ0YXJnZXRJbmRleCIsImRpc3RhbmNlRnVuYyIsInJlb3JkZXJFbGVtZW50cyIsIm1vdmVkRHJhZ2dhYmxlIiwibmV4dCIsImluc2VydEJlZm9yZSIsImQiLCJnZXRDdXJyZW50UGlubmVkUG9zaXRpb25zIiwiQXJyYXkiLCJpbml0aWFsUG9zaXRpb25zIiwibGlzdCIsImoiLCJjbGVhciIsImRyYWdnYWJsZUEiLCJkcmFnZ2FibGVCIiwiX3N3YXBwaW5nRGlzYWJsZWQiLCJkaXNhYmxlZCIsImZhY3RvcnkiLCJjb250YWluZXJFbGVtZW50IiwiZWxlbWVudHMiLCJmcm9tIiwiYXJyYXlNb3ZlIiwidG8iLCJCdWJibGluZ0xpc3QiLCJhdXRvRGV0ZWN0VmVydGljYWxHYXAiLCJfdmVydGljYWxHYXAiLCJ2ZXJ0aWNhbEdhcCIsInNvcnRlZCIsImF1dG9EZXRlY3RTdGFydFBvc2l0aW9uIiwic3RhcnRQb3NpdGlvbiIsIm9uRHJhZ1N0YXJ0IiwiY2FjaGVkU29ydGVkRHJhZ2dhYmxlcyIsImluZGV4T2ZBY3RpdmVEcmFnZ2FibGUiLCJwcmV2RHJhZ2dhYmxlIiwibmV4dERyYWdnYWJsZSIsImN1cnJlbnRQb3NpdGlvbiIsImN1cnJlbnRPcmRlciIsImRyYWdnYWJsZU5ld1Bvc2l0aW9uIiwiYnViYmxpbmciLCJjdXJyZW50RHJhZ2dhYmxlIiwiaW5jbHVkZXMiLCJnYXBWYWx1ZSJdLCJtYXBwaW5ncyI6Ijs7O0VBQUE7RUFDZSxNQUFNQSxLQUFLLENBQUM7RUFDekI7RUFDRjtFQUNBO0VBQ0E7RUFDQTtFQUNFQyxFQUFBQSxXQUFXLENBQUNDLENBQUMsRUFBRUMsQ0FBQyxFQUFFO01BQ2hCLElBQUksQ0FBQ0QsQ0FBQyxHQUFHQSxDQUFDO01BQ1YsSUFBSSxDQUFD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
