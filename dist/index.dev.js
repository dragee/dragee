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
  const isTouch = ('ontouchstart' in window);
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
      this.offset = Point.elementOffset(this.element, this.container, true);
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
      this._startParentsScrollPoint = this.parentsScrollPoint;
      if (event.target instanceof window.HTMLInputElement || event.target instanceof window.HTMLInputElement) {
        event.target.focus();
      }
      if (this.shouldUseNativeDragAndDrop()) {
        if (this.isTouchEvent && this.emulateNativeDragAndDropOnTouch) {
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
      this.parents.forEach(p => p.addEventListener('scroll', this._scroll));
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
      let point = this._startPosition.add(this.touchPoint.sub(this._startTouchPoint)).add(this.windowScrollPoint.sub(this._startWindowScrollPoint)).add(this.parentsScrollPoint.sub(this._startParentsScrollPoint));
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
      let point = this._startPosition.add(this.touchPoint.sub(this._startTouchPoint)).add(this.windowScrollPoint.sub(this._startWindowScrollPoint)).add(this.parentsScrollPoint.sub(this._startParentsScrollPoint));
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
      let point = this._startPosition.add(this.touchPoint.sub(this._startTouchPoint)).add(this.windowScrollPoint.sub(this._startWindowScrollPoint)).add(this.parentsScrollPoint.sub(this._startParentsScrollPoint));
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
      this.parents.forEach(p => p.removeEventListener('scroll', this._scroll));
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
      this.parents.forEach(p => p.removeEventListener('scroll', this._scroll));
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
            this.position = emulationDraggable.position.sub(containerRectPoint).sub(this._startWindowScrollPoint).add(this._startParentsScrollPoint);
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
      emulationDraggable.move(this.pinnedPosition.add(containerRectPoint).add(this.windowScrollPoint).sub(this.parentsScrollPoint));
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
    get parents() {
      if (this._cachedParents) return this._cachedParents;
      this._cachedParents = [];
      let element = this.element;
      while (element.parentNode && element != this.container) {
        this._cachedParents.unshift(element.parentNode);
        element = element.parentNode;
      }
      return this._cachedParents;
    }
    get parentsScrollPoint() {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZGV2LmpzIiwic291cmNlcyI6WyIuLi9zcmMvZ2VvbWV0cnkvcG9pbnQuanMiLCIuLi9zcmMvZ2VvbWV0cnkvcmVjdGFuZ2xlLmpzIiwiLi4vc3JjL3V0aWxzL2dldC1kZWZhdWx0LWNvbnRhaW5lci5qcyIsIi4uL3NyYy9ldmVudEVtaXR0ZXIuanMiLCIuLi9zcmMvZ2VvbWV0cnkvZGlzdGFuY2VzLmpzIiwiLi4vc3JjL2dlb21ldHJ5L2JvdW5kcy5qcyIsIi4uL3NyYy9nZW9tZXRyeS9hbmdsZXMuanMiLCIuLi9zcmMvYm91bmRpbmcuanMiLCIuLi9zcmMvdXRpbHMvcmVtb3ZlLWFycmF5LWl0ZW0uanMiLCIuLi9zcmMvdXRpbHMvcmFuZ2UuanMiLCIuLi9zcmMvcG9zaXRpb25pbmcuanMiLCIuLi9zcmMvdGFyZ2V0LmpzIiwiLi4vc3JjL3Njb3BlLmpzIiwiLi4vc3JjL3V0aWxzL3Rocm90dGxlLmpzIiwiLi4vc3JjL2RyYWdnYWJsZS5qcyIsIi4uL3NyYy91dGlscy9kZWJvdW5jZS5qcyIsIi4uL3NyYy9saXN0LmpzIiwiLi4vc3JjL2J1YmJsaW5nTGlzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQ2xhc3MgcmVwcmVzZW50aW5nIGEgcG9pbnQuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2ludCB7XG4gIC8qKlxuICAqIENyZWF0ZSBhIHBvaW50LlxuICAqIEBwYXJhbSB7bnVtYmVyfSB4IC0gVGhlIHggdmFsdWUuXG4gICogQHBhcmFtIHtudW1iZXJ9IHkgLSBUaGUgeSB2YWx1ZS5cbiAgKi9cbiAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgIHRoaXMueCA9IHhcbiAgICB0aGlzLnkgPSB5XG4gIH1cblxuICBhZGQocCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54ICsgcC54LCB0aGlzLnkgKyBwLnkpXG4gIH1cblxuICBzdWIocCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54IC0gcC54LCB0aGlzLnkgLSBwLnkpXG4gIH1cblxuICBtdWx0KGspIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCAqIGssIHRoaXMueSAqIGspXG4gIH1cblxuICBuZWdhdGl2ZSgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KC10aGlzLngsIC10aGlzLnkpXG4gIH1cblxuICBjb21wYXJlKHApIHtcbiAgICByZXR1cm4gKHRoaXMueCA9PT0gcC54ICYmIHRoaXMueSA9PT0gcC55KVxuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLngsIHRoaXMueSlcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiBge3g9JHt0aGlzLnh9LHk9JHt0aGlzLnl9YFxuICB9XG5cbiAgc3RhdGljIGVsZW1lbnRPZmZzZXQoZWxlbWVudCwgcGFyZW50KSB7XG4gICAgcGFyZW50ID0gcGFyZW50IHx8IGVsZW1lbnQucGFyZW50Tm9kZVxuICAgIGNvbnN0IGVsZW1lbnRSZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIGNvbnN0IHBhcmVudFJlY3QgPSBwYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICByZXR1cm4gbmV3IFBvaW50KFxuICAgICAgZWxlbWVudFJlY3QubGVmdCAtIHBhcmVudFJlY3QubGVmdCxcbiAgICAgIGVsZW1lbnRSZWN0LnRvcCAtIHBhcmVudFJlY3QudG9wXG4gICAgKVxuICB9XG5cbiAgc3RhdGljIGVsZW1lbnRTaXplKGVsZW1lbnQpIHtcbiAgICBjb25zdCBlbGVtZW50UmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICByZXR1cm4gbmV3IFBvaW50KFxuICAgICAgZWxlbWVudFJlY3Qud2lkdGgsXG4gICAgICBlbGVtZW50UmVjdC5oZWlnaHRcbiAgICApXG4gIH1cbn1cbiIsImltcG9ydCBQb2ludCBmcm9tICcuL3BvaW50J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWN0YW5nbGUge1xuICBjb25zdHJ1Y3Rvcihwb3NpdGlvbiwgc2l6ZSkge1xuICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvblxuICAgIHRoaXMuc2l6ZSA9IHNpemVcbiAgfVxuXG4gIGdldFAxKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uXG4gIH1cblxuICBnZXRQMigpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54LCB0aGlzLnBvc2l0aW9uLnkpXG4gIH1cblxuICBnZXRQMygpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi5hZGQodGhpcy5zaXplKVxuICB9XG5cbiAgZ2V0UDQoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55KVxuICB9XG5cbiAgZ2V0Q2VudGVyKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLnNpemUubXVsdCgwLjUpKVxuICB9XG5cbiAgb3IocmVjdCkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gbmV3IFBvaW50KE1hdGgubWluKHRoaXMucG9zaXRpb24ueCwgcmVjdC5wb3NpdGlvbi54KSwgTWF0aC5taW4odGhpcy5wb3NpdGlvbi55LCByZWN0LnBvc2l0aW9uLnkpKVxuICAgIGNvbnN0IHNpemUgPSAobmV3IFBvaW50KE1hdGgubWF4KHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54LCByZWN0LnBvc2l0aW9uLnggKyByZWN0LnNpemUueCksIE1hdGgubWF4KHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55LCByZWN0LnBvc2l0aW9uLnkgKyByZWN0LnNpemUueSkpKS5zdWIocG9zaXRpb24pXG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUocG9zaXRpb24sIHNpemUpXG4gIH1cblxuICBhbmQocmVjdCkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gbmV3IFBvaW50KE1hdGgubWF4KHRoaXMucG9zaXRpb24ueCwgcmVjdC5wb3NpdGlvbi54KSwgTWF0aC5tYXgodGhpcy5wb3NpdGlvbi55LCByZWN0LnBvc2l0aW9uLnkpKVxuICAgIGNvbnN0IHNpemUgPSAobmV3IFBvaW50KE1hdGgubWluKHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54LCByZWN0LnBvc2l0aW9uLnggKyByZWN0LnNpemUueCksIE1hdGgubWluKHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55LCByZWN0LnBvc2l0aW9uLnkgKyByZWN0LnNpemUueSkpKS5zdWIocG9zaXRpb24pXG4gICAgaWYgKHNpemUueCA8PSAwIHx8IHNpemUueSA8PSAwKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZShwb3NpdGlvbiwgc2l6ZSlcbiAgfVxuXG4gIGluY2x1ZGVQb2ludChwKSB7XG4gICAgcmV0dXJuICEodGhpcy5wb3NpdGlvbi54ID4gcC54IHx8IHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54IDwgcC54IHx8IHRoaXMucG9zaXRpb24ueSA+IHAueSB8fCB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSA8IHAueSlcbiAgfVxuXG4gIGluY2x1ZGVSZWN0YW5nbGUocmVjdGFuZ2xlKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5jbHVkZVBvaW50KHJlY3RhbmdsZS5wb3NpdGlvbikgJiYgdGhpcy5pbmNsdWRlUG9pbnQocmVjdGFuZ2xlLmdldFAzKCkpXG4gIH1cblxuICBtb3ZlVG9Cb3VuZChyZWN0LCBheGlzKSB7XG4gICAgbGV0IHNlbEF4aXMsIGNyb3NzUmVjdGFuZ2xlXG4gICAgaWYgKGF4aXMpIHtcbiAgICAgIHNlbEF4aXMgPSBheGlzXG4gICAgfSBlbHNlIHtcbiAgICAgIGNyb3NzUmVjdGFuZ2xlID0gdGhpcy5hbmQocmVjdClcbiAgICAgIGlmICghY3Jvc3NSZWN0YW5nbGUpIHtcbiAgICAgICAgcmV0dXJuIHJlY3RcbiAgICAgIH1cbiAgICAgIHNlbEF4aXMgPSBjcm9zc1JlY3RhbmdsZS5zaXplLnggPiBjcm9zc1JlY3RhbmdsZS5zaXplLnkgPyAneScgOiAneCdcbiAgICB9XG4gICAgY29uc3QgdGhpc0NlbnRlciA9IHRoaXMuZ2V0Q2VudGVyKClcbiAgICBjb25zdCByZWN0Q2VudGVyID0gcmVjdC5nZXRDZW50ZXIoKVxuICAgIGNvbnN0IHNpZ24gPSB0aGlzQ2VudGVyW3NlbEF4aXNdID4gcmVjdENlbnRlcltzZWxBeGlzXSA/IC0xIDogMVxuICAgIGNvbnN0IG9mZnNldCA9IHNpZ24gPiAwID8gdGhpcy5wb3NpdGlvbltzZWxBeGlzXSArIHRoaXMuc2l6ZVtzZWxBeGlzXSAtIHJlY3QucG9zaXRpb25bc2VsQXhpc10gOiB0aGlzLnBvc2l0aW9uW3NlbEF4aXNdIC0gKHJlY3QucG9zaXRpb25bc2VsQXhpc10gKyByZWN0LnNpemVbc2VsQXhpc10pXG4gICAgcmVjdC5wb3NpdGlvbltzZWxBeGlzXSA9IHJlY3QucG9zaXRpb25bc2VsQXhpc10gKyBvZmZzZXRcbiAgICByZXR1cm4gcmVjdFxuICB9XG5cbiAgZ2V0U3F1YXJlKCkge1xuICAgIHJldHVybiB0aGlzLnNpemUueCAqIHRoaXMuc2l6ZS55XG4gIH1cblxuICBzdHlsZUFwcGx5KGVsKSB7XG4gICAgZWwgPSBlbCB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbmQnKVxuICAgIGVsLnN0eWxlLmxlZnQgPSB0aGlzLnBvc2l0aW9uLnggKyAncHgnXG4gICAgZWwuc3R5bGUudG9wID0gdGhpcy5wb3NpdGlvbi55ICsgJ3B4J1xuICAgIGVsLnN0eWxlLndpZHRoID0gdGhpcy5zaXplLnggKyAncHgnXG4gICAgZWwuc3R5bGUuaGVpZ2h0ID0gdGhpcy5zaXplLnkgKyAncHgnXG4gIH1cblxuICBncm93dGgoc2l6ZSkge1xuICAgIHRoaXMuc2l6ZSA9IHRoaXMuc2l6ZS5hZGQoc2l6ZSlcbiAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbi5hZGQoc2l6ZS5tdWx0KC0wLjUpKVxuICB9XG5cbiAgZ2V0TWluU2lkZSgpIHtcbiAgICByZXR1cm4gTWF0aC5taW4odGhpcy5zaXplLngsIHRoaXMuc2l6ZS55KVxuICB9XG5cbiAgc3RhdGljIGZyb21FbGVtZW50KGVsZW1lbnQsIHBhcmVudD1lbGVtZW50LnBhcmVudE5vZGUsIGlzQ29uc2lkZXJUcmFuc2xhdGU9ZmFsc2UpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IFBvaW50LmVsZW1lbnRPZmZzZXQoZWxlbWVudCwgcGFyZW50LCBpc0NvbnNpZGVyVHJhbnNsYXRlKVxuICAgIGNvbnN0IHNpemUgPSBQb2ludC5lbGVtZW50U2l6ZShlbGVtZW50KVxuICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHBvc2l0aW9uLCBzaXplKVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXREZWZhdWx0Q29udGFpbmVyKGVsZW1lbnQpIHtcbiAgbGV0IGNvbnRhaW5lciA9IGVsZW1lbnQucGFyZW50Tm9kZVxuICB3aGlsZSAoY29udGFpbmVyLnBhcmVudE5vZGUgJiYgd2luZG93LmdldENvbXB1dGVkU3R5bGUoY29udGFpbmVyKVsncG9zaXRpb24nXSA9PT0gJ3N0YXRpYycgJiYgY29udGFpbmVyLnRhZ05hbWUgIT09ICdCT0RZJykge1xuICAgIGNvbnRhaW5lciA9IGNvbnRhaW5lci5wYXJlbnROb2RlXG4gIH1cbiAgcmV0dXJuIGNvbnRhaW5lclxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKG9wdGlvbnMgPSB7fSkge1xuICAgIHRoaXMuZXZlbnRzID0ge31cblxuICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMub24pIHtcbiAgICAgIGZvciAoY29uc3QgW2V2ZW50TmFtZSwgZm5dIG9mIE9iamVjdC5lbnRyaWVzKG9wdGlvbnMub24pKSB7XG4gICAgICAgIHRoaXMub24oZXZlbnROYW1lLCBmbilcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBlbWl0KGV2ZW50TmFtZSkge1xuICAgIHRoaXMuaW50ZXJydXB0ZWQgPSBmYWxzZVxuICAgIGNvbnN0IGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSlcblxuICAgIGlmICghdGhpcy5ldmVudHNbZXZlbnROYW1lXSkgcmV0dXJuXG5cbiAgICBmb3IgKGNvbnN0IGZ1bmMgb2YgdGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgZnVuYyguLi5hcmdzKVxuICAgICAgaWYgKHRoaXMuaW50ZXJydXB0ZWQpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaW50ZXJydXB0KCkge1xuICAgIHRoaXMuaW50ZXJydXB0ZWQgPSB0cnVlXG4gIH1cblxuICBvbihldmVudE5hbWUsIGZuKSB7XG4gICAgaWYgKCF0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdID0gW11cbiAgICB9XG5cbiAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLnB1c2goZm4pXG4gIH1cblxuICBwcmVwZW5kT24oZXZlbnROYW1lLCBmbikge1xuICAgIGlmICghdGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IFtdXG4gICAgfVxuXG4gICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS51bnNoaWZ0KGZuKVxuICB9XG5cbiAgdW5zdWJzY3JpYmUoZXZlbnROYW1lLCBmbikge1xuICAgIGlmICh0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0uaW5kZXhPZihmbilcbiAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0uc3BsaWNlKGluZGV4LCAxKVxuICAgIH1cbiAgfVxuXG4gIHJlc2V0RW1pdHRlciAoKSB7XG4gICAgdGhpcy5ldmVudHMgPSB7fVxuICB9XG5cbiAgcmVzZXRPbihldmVudE5hbWUpIHtcbiAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdID0gW11cbiAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldERpc3RhbmNlKHAxLCBwMikge1xuICBjb25zdCBkeCA9IHAxLnggLSBwMi54LCBkeSA9IHAxLnkgLSBwMi55XG4gIHJldHVybiBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRYRGlmZmVyZW5jZShwMSwgcDIpIHtcbiAgcmV0dXJuIE1hdGguYWJzKHAxLnggLSBwMi54KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0WURpZmZlcmVuY2UocDEsIHAyKSB7XG4gIHJldHVybiBNYXRoLmFicyhwMS55IC0gcDIueSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3Rvcnkob3B0aW9ucykge1xuICByZXR1cm4gKHAxLCBwMikgPT4ge1xuICAgIHJldHVybiBNYXRoLnNxcnQoXG4gICAgICBNYXRoLnBvdyhvcHRpb25zLnggKiBNYXRoLmFicyhwMS54IC0gcDIueCksIDIpICtcbiAgICAgIE1hdGgucG93KG9wdGlvbnMueSAqIE1hdGguYWJzKHAxLnkgLSBwMi55KSwgMilcbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluZGV4T2ZOZWFyZXN0UG9pbnQoYXJyLCB2YWwsIHJhZGl1cywgZ2V0RGlzdGFuY2VGdW5jPWdldERpc3RhbmNlKSB7XG4gIGxldCBzaXplLCBpbmRleCA9IDAsIGksIHRlbXBcbiAgaWYgKGFyci5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gLTFcbiAgfVxuICBzaXplID0gZ2V0RGlzdGFuY2VGdW5jKGFyclswXSwgdmFsKVxuICBmb3IgKGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgdGVtcCA9IGdldERpc3RhbmNlRnVuYyhhcnJbaV0sIHZhbClcbiAgICBpZiAodGVtcCA8IHNpemUpIHtcbiAgICAgIHNpemUgPSB0ZW1wXG4gICAgICBpbmRleCA9IGlcbiAgICB9XG4gIH1cbiAgaWYgKHJhZGl1cyA+PSAwICYmIHNpemUgPiByYWRpdXMpIHtcbiAgICByZXR1cm4gLTFcbiAgfVxuICByZXR1cm4gaW5kZXhcbn1cbiIsImltcG9ydCBQb2ludCBmcm9tICcuL3BvaW50J1xuaW1wb3J0IHsgZ2V0RGlzdGFuY2UgfSBmcm9tICcuL2Rpc3RhbmNlcydcblxuZXhwb3J0IGZ1bmN0aW9uIGNsYW1wKG1pbiwgbWF4LCB2YWwpIHtcbiAgcmV0dXJuIE1hdGgubWF4KG1pbiwgTWF0aC5taW4obWF4LCB2YWwpKVxufVxuXG4vL1JldHVybiBjcm9zc2luZyBwb2ludCBvZiB0d28gbGluZXNcbmV4cG9ydCBmdW5jdGlvbiBkaXJlY3RDcm9zc2luZyhMMVAxLCBMMVAyLCBMMlAxLCBMMlAyKSB7XG4gIGxldCB0ZW1wLCBrMSwgazIsIGIxLCBiMiwgeCwgeVxuICBpZiAoTDJQMS54ID09PSBMMlAyLngpIHtcbiAgICB0ZW1wID0gTDJQMVxuICAgIEwyUDEgPSBMMVAxXG4gICAgTDFQMSA9IHRlbXBcbiAgICB0ZW1wID0gTDJQMlxuICAgIEwyUDIgPSBMMVAyXG4gICAgTDFQMiA9IHRlbXBcbiAgfVxuICBpZiAoTDFQMS54ID09PSBMMVAyLngpIHtcbiAgICBrMiA9IChMMlAyLnkgLSBMMlAxLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICBiMiA9IChMMlAyLnggKiBMMlAxLnkgLSBMMlAxLnggKiBMMlAyLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICB4ID0gTDFQMS54XG4gICAgeSA9IHggKiBrMiArIGIyXG4gICAgcmV0dXJuIG5ldyBQb2ludCh4LCB5KVxuICB9IGVsc2Uge1xuICAgIGsxID0gKEwxUDIueSAtIEwxUDEueSkgLyAoTDFQMi54IC0gTDFQMS54KVxuICAgIGIxID0gKEwxUDIueCAqIEwxUDEueSAtIEwxUDEueCAqIEwxUDIueSkgLyAoTDFQMi54IC0gTDFQMS54KVxuICAgIGsyID0gKEwyUDIueSAtIEwyUDEueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgIGIyID0gKEwyUDIueCAqIEwyUDEueSAtIEwyUDEueCAqIEwyUDIueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgIHggPSAoYjEgLSBiMikgLyAoazIgLSBrMSlcbiAgICB5ID0geCAqIGsxICsgYjFcbiAgICByZXR1cm4gbmV3IFBvaW50KHgsIHkpXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kVG9TZWdtZW50KExQMSwgTFAyLCBQKSB7XG4gIGxldCB4LCB5XG4gIHggPSBjbGFtcChNYXRoLm1pbihMUDEueCwgTFAyLngpLCBNYXRoLm1heChMUDEueCwgTFAyLngpLCBQLngpXG4gIGlmICh4ICE9PSBQLngpIHtcbiAgICB5ID0gKHggPT09IExQMS54KSA/IExQMS55IDogTFAyLnlcbiAgICBQID0gbmV3IFBvaW50KHgsIHkpXG4gIH1cblxuICB5ID0gY2xhbXAoTWF0aC5taW4oTFAxLnksIExQMi55KSwgTWF0aC5tYXgoTFAxLnksIExQMi55KSwgUC55KVxuICBpZiAoeSAhPT0gUC55KSB7XG4gICAgeCA9ICh5ID09PSBMUDEueSkgPyBMUDEueCA6IExQMi54XG4gICAgUCA9IG5ldyBQb2ludCh4LCB5KVxuICB9XG5cbiAgcmV0dXJuIFBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kVG9MaW5lKEEsIEIsIFApIHtcbiAgY29uc3QgQVAgPSBuZXcgUG9pbnQoUC54IC0gQS54LCBQLnkgLSBBLnkpLFxuICAgIEFCID0gbmV3IFBvaW50KEIueCAtIEEueCwgQi55IC0gQS55KSxcbiAgICBhYjIgPSBBQi54ICogQUIueCArIEFCLnkgKiBBQi55LFxuICAgIGFwX2FiID0gQVAueCAqIEFCLnggKyBBUC55ICogQUIueSxcbiAgICB0ID0gYXBfYWIgLyBhYjJcbiAgcmV0dXJuIG5ldyBQb2ludChBLnggKyBBQi54ICogdCwgQS55ICsgQUIueSAqIHQpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb2ludE9uTGluZShMUDEsIExQMiwgcGVyY2VudCkge1xuICBjb25zdCBkeCA9IExQMi54IC0gTFAxLngsIGR5ID0gTFAyLnkgLSBMUDEueVxuICByZXR1cm4gbmV3IFBvaW50KExQMS54ICsgcGVyY2VudCAqIGR4LCBMUDEueSArIHBlcmNlbnQgKiBkeSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBvaW50T25MaW5lQnlMZW5naHQoTFAxLCBMUDIsIGxlbmdodCkge1xuICBjb25zdCBkeCA9IExQMi54IC0gTFAxLnhcbiAgY29uc3QgZHkgPSBMUDIueSAtIExQMS55XG4gIGNvbnN0IHBlcmNlbnQgPSBsZW5naHQgLyBnZXREaXN0YW5jZShMUDEsIExQMilcbiAgcmV0dXJuIG5ldyBQb2ludChMUDEueCArIHBlcmNlbnQgKiBkeCwgTFAxLnkgKyBwZXJjZW50ICogZHkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRQb2ludFRvQm91bmRQb2ludHMoYm91bmRwb2ludHMsIHBvaW50LCBpc1JpZ2h0KSB7XG4gIGNvbnN0IHJlc3VsdCA9IGJvdW5kcG9pbnRzLmZpbHRlcigoYlBvaW50KSA9PiB7XG4gICAgcmV0dXJuIGJQb2ludC55ID4gcG9pbnQueSB8fCAoaXNSaWdodCA/IGJQb2ludC54IDwgcG9pbnQueCA6IGJQb2ludC54ID4gcG9pbnQueClcbiAgfSlcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChwb2ludC55IDwgcmVzdWx0W2ldLnkpIHtcbiAgICAgIHJlc3VsdC5zcGxpY2UoaSwgMCwgcG9pbnQpXG4gICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxuICB9XG4gIHJlc3VsdC5wdXNoKHBvaW50KVxuICByZXR1cm4gcmVzdWx0XG59XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9wb2ludCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFuZ2xlRGlmZihhbHBoYSwgYmV0YSkge1xuICBjb25zdCBtaW5BbmdsZSA9IE1hdGgubWluKGFscGhhLCBiZXRhKVxuICBjb25zdCBtYXhBbmdsZSA9ICBNYXRoLm1heChhbHBoYSwgYmV0YSlcbiAgcmV0dXJuIE1hdGgubWluKG1heEFuZ2xlIC0gbWluQW5nbGUsIG1pbkFuZ2xlICsgTWF0aC5QSSoyIC0gbWF4QW5nbGUpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbmdsZShwMSwgcDIpIHtcbiAgY29uc3QgZGlmZiA9IHAyLnN1YihwMSlcbiAgcmV0dXJuIG5vcm1hbGl6ZUFuZ2xlKE1hdGguYXRhbjIoZGlmZi55LCBkaWZmLngpKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9SYWRpYW4oYW5nbGUpIHtcbiAgcmV0dXJuICgoYW5nbGUgJSAzNjApICogTWF0aC5QSSAvIDE4MClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvRGVncmVlKGFuZ2xlKSB7XG4gIHJldHVybiAoYW5nbGUgKiAxODAgLyBNYXRoLlBJKSAlIDM2MFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRBbmdsZShtaW4sIG1heCwgdmFsKSB7XG4gIGxldCBkbWluLCBkbWF4XG4gIGlmIChtaW4gPCBtYXggJiYgdmFsID4gbWluICYmIHZhbCA8IG1heCkge1xuICAgIHJldHVybiB2YWxcbiAgfSBlbHNlIGlmIChtYXggPCBtaW4gJiYgKHZhbCA8IG1heCB8fCB2YWwgPiBtaW4pKSB7XG4gICAgcmV0dXJuIHZhbFxuICB9IGVsc2Uge1xuICAgIGRtaW4gPSBnZXRBbmdsZURpZmYobWluLCB2YWwpXG4gICAgZG1heCA9IGdldEFuZ2xlRGlmZihtYXgsIHZhbClcbiAgICBpZiAoZG1pbiA8IGRtYXgpIHtcbiAgICAgIHJldHVybiBtaW5cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG1heFxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmVhcmVzdEFuZ2xlKGFyciwgYW5nbGUpIHtcbiAgbGV0IGksIHRlbXAsIGRpZmYgPSBNYXRoLlBJICogMiwgdmFsdWVcbiAgZm9yIChpID0gMDsgaSA8IGFyci5sZW5ndGg7aSsrKSB7XG4gICAgdGVtcCA9IGdldEFuZ2xlRGlmZihhcnJbaV0sIGFuZ2xlKVxuICAgIGlmIChkaWZmIDwgdGVtcCkge1xuICAgICAgZGlmZiA9IHRlbXBcbiAgICAgIHZhbHVlID0gYXJyW2ldXG4gICAgfVxuICB9XG4gIHJldHVybiB2YWx1ZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplQW5nbGUodmFsKSB7XG4gIHdoaWxlICh2YWwgPCAwKSB7XG4gICAgdmFsICs9IDIgKiBNYXRoLlBJXG4gIH1cbiAgd2hpbGUgKHZhbCA+IDIgKiBNYXRoLlBJKSB7XG4gICAgdmFsIC09IDIgKiBNYXRoLlBJXG4gIH1cbiAgcmV0dXJuIHZhbFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKGFuZ2xlLCBsZW5ndGgsIGNlbnRlcikge1xuICBjZW50ZXIgPSBjZW50ZXIgfHwgbmV3IFBvaW50KDAsIDApXG4gIHJldHVybiBjZW50ZXIuYWRkKG5ldyBQb2ludChsZW5ndGggKiBNYXRoLmNvcyhhbmdsZSksIGxlbmd0aCAqIE1hdGguc2luKGFuZ2xlKSkpXG59XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9nZW9tZXRyeS9wb2ludCdcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSAnLi9nZW9tZXRyeS9yZWN0YW5nbGUnXG5pbXBvcnQge1xuICBnZXRQb2ludE9uTGluZUJ5TGVuZ2h0LFxuICBkaXJlY3RDcm9zc2luZyxcbiAgYm91bmRUb0xpbmVcbn0gZnJvbSAnLi9nZW9tZXRyeS9ib3VuZHMnXG5cbmltcG9ydCB7XG4gIGdldEFuZ2xlLFxuICBub3JtYWxpemVBbmdsZSxcbiAgYm91bmRBbmdsZSxcbiAgZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtXG59IGZyb20gJy4vZ2VvbWV0cnkvYW5nbGVzJ1xuXG5leHBvcnQgY2xhc3MgQm91bmQge1xuICBjb25zdHJ1Y3RvciAoKSB7fVxuXG4gIGJvdW5kKHBvaW50LCBfc2l6ZSkge1xuICAgIHJldHVybiBwb2ludFxuICB9XG5cbiAgcmVmcmVzaCAoKSB7fVxuXG4gIHN0YXRpYyBib3VuZGluZygpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyB0aGlzKC4uLmFyZ3VtZW50cylcbiAgICByZXR1cm4gaW5zdGFuY2UuYm91bmQuYmluZChpbnN0YW5jZSlcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb1JlY3RhbmdsZSBleHRlbmRzIEJvdW5kIHtcbiAgY29uc3RydWN0b3IocmVjdGFuZ2xlKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMucmVjdGFuZ2xlID0gcmVjdGFuZ2xlXG4gIH1cblxuICBib3VuZChwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IGNhbGNQb2ludCA9IHBvaW50LmNsb25lKClcbiAgICBjb25zdCByZWN0UDIgPSB0aGlzLnJlY3RhbmdsZS5nZXRQMygpXG5cbiAgICBpZiAodGhpcy5yZWN0YW5nbGUucG9zaXRpb24ueCA+IGNhbGNQb2ludC54KSB7XG4gICAgICAoY2FsY1BvaW50LnggPSB0aGlzLnJlY3RhbmdsZS5wb3NpdGlvbi54KVxuICAgIH1cbiAgICBpZiAodGhpcy5yZWN0YW5nbGUucG9zaXRpb24ueSA+IGNhbGNQb2ludC55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHRoaXMucmVjdGFuZ2xlLnBvc2l0aW9uLnlcbiAgICB9XG4gICAgaWYgKHJlY3RQMi54IDwgY2FsY1BvaW50LnggKyBzaXplLngpIHtcbiAgICAgIGNhbGNQb2ludC54ID0gcmVjdFAyLnggLSBzaXplLnhcbiAgICB9XG4gICAgaWYgKHJlY3RQMi55IDwgY2FsY1BvaW50LnkgKyBzaXplLnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gcmVjdFAyLnkgLSBzaXplLnlcbiAgICB9XG5cbiAgICByZXR1cm4gY2FsY1BvaW50XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9FbGVtZW50IGV4dGVuZHMgQm91bmRUb1JlY3RhbmdsZSB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbnRhaW5lcikge1xuICAgIHN1cGVyKFJlY3RhbmdsZS5mcm9tRWxlbWVudChlbGVtZW50LCBjb250YWluZXIpKVxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lclxuICB9XG5cbiAgcmVmcmVzaCAoKSB7XG4gICAgdGhpcy5yZWN0YW5nbGUgPSBSZWN0YW5nbGUuZnJvbUVsZW1lbnQodGhpcy5lbGVtZW50LCB0aGlzLmNvbnRhaW5lcilcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb0xpbmVYIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3Rvcih4LCBzdGFydFksIGVuZFkpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy54ID0geFxuICAgIHRoaXMuc3RhcnRZID0gc3RhcnRZXG4gICAgdGhpcy5lbmRZID0gZW5kWVxuICB9XG5cbiAgYm91bmQocG9pbnQsIHNpemUpIHtcbiAgICBjb25zdCBjYWxjUG9pbnQgPSBwb2ludC5jbG9uZSgpXG5cbiAgICBjYWxjUG9pbnQueCA9IHRoaXMueFxuICAgIGlmICh0aGlzLnN0YXJ0WSA+IGNhbGNQb2ludC55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHRoaXMuc3RhcnRZXG4gICAgfVxuICAgIGlmICh0aGlzLmVuZFkgPCBjYWxjUG9pbnQueSArIHNpemUueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSB0aGlzLmVuZFkgLSBzaXplLnlcbiAgICB9XG5cbiAgICByZXR1cm4gY2FsY1BvaW50XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9MaW5lWSBleHRlbmRzIEJvdW5kIHtcbiAgY29uc3RydWN0b3IoeSwgc3RhcnRYLCBlbmRYKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMueSA9IHlcbiAgICB0aGlzLnN0YXJ0WCA9IHN0YXJ0WFxuICAgIHRoaXMuZW5kWCA9IGVuZFhcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgY2FsY1BvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIGNhbGNQb2ludC55ID0gdGhpcy55XG4gICAgaWYgKHRoaXMuc3RhcnRYID4gY2FsY1BvaW50LngpIHtcbiAgICAgIGNhbGNQb2ludC54ID0gdGhpcy5zdGFydFhcbiAgICB9XG4gICAgaWYgKHRoaXMuZW5kWCA8IGNhbGNQb2ludC54ICsgc2l6ZS54KSB7XG4gICAgICBjYWxjUG9pbnQueCA9IHRoaXMuZW5kWCAtIHNpemUueFxuICAgIH1cbiAgICByZXR1cm4gY2FsY1BvaW50XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9MaW5lIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3RvcihzdGFydFBvaW50LCBlbmRQb2ludCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnN0YXJ0UG9pbnQgPSBzdGFydFBvaW50XG4gICAgdGhpcy5lbmRQb2ludCA9IGVuZFBvaW50XG4gICAgY29uc3QgYWxwaGEgPSBNYXRoLmF0YW4yKGVuZFBvaW50LnkgLSBzdGFydFBvaW50LnksIGVuZFBvaW50LnggLSBzdGFydFBvaW50LngpXG4gICAgY29uc3QgYmV0YSA9IGFscGhhICsgTWF0aC5QSSAvIDJcbiAgICB0aGlzLnNvbWVLID0gMTBcbiAgICB0aGlzLmNvc0JldGEgPSBNYXRoLmNvcyhiZXRhKVxuICAgIHRoaXMuc2luQmV0YSA9IE1hdGguc2luKGJldGEpXG4gIH1cblxuICBib3VuZChwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IHBvaW50MiA9IG5ldyBQb2ludChcbiAgICAgIHBvaW50LnggKyB0aGlzLnNvbWVLICogdGhpcy5jb3NCZXRhLFxuICAgICAgcG9pbnQueSArIHRoaXMuc29tZUsgKiB0aGlzLnNpbkJldGFcbiAgICApXG5cbiAgICBjb25zdCBuZXdFbmRQb2ludCA9IGdldFBvaW50T25MaW5lQnlMZW5naHQodGhpcy5lbmRQb2ludCwgdGhpcy5zdGFydFBvaW50LCBzaXplLngpXG4gICAgY29uc3QgcG9pbnRDcm9zc2luZyA9IGRpcmVjdENyb3NzaW5nKHRoaXMuc3RhcnRQb2ludCwgdGhpcy5lbmRQb2ludCwgcG9pbnQsIHBvaW50MilcblxuICAgIHJldHVybiBib3VuZFRvTGluZSh0aGlzLnN0YXJ0UG9pbnQsIG5ld0VuZFBvaW50LCBwb2ludENyb3NzaW5nKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvQ2lyY2xlIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3RvcihjZW50ZXIsIHJhZGl1cykge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLmNlbnRlciA9IGNlbnRlclxuICAgIHRoaXMucmFkaXVzID0gcmFkaXVzXG4gIH1cblxuICBib3VuZChwb2ludCwgX3NpemUpIHtcbiAgICByZXR1cm4gZ2V0UG9pbnRPbkxpbmVCeUxlbmdodCh0aGlzLmNlbnRlciwgcG9pbnQsIHRoaXMucmFkaXVzKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvQXJjIGV4dGVuZHMgQm91bmRUb0NpcmNsZSB7XG4gIGNvbnN0cnVjdG9yKGNlbnRlciwgcmFkaXVzLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSkge1xuICAgIHN1cGVyKGNlbnRlciwgcmFkaXVzKVxuICAgIHRoaXMuX3N0YXJ0QW5nbGUgPSBzdGFydEFuZ2xlXG4gICAgdGhpcy5fZW5kQW5nbGUgPSBlbmRBbmdsZVxuICB9XG5cbiAgc3RhcnRBbmdsZSgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMuX3N0YXJ0QW5nbGUgPT09ICdmdW5jdGlvbicgPyB0aGlzLl9zdGFydEFuZ2xlKCkgOiB0aGlzLl9zdGFydEFuZ2xlXG4gIH1cblxuICBlbmRBbmdsZSgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMuX2VuZEFuZ2xlID09PSAnZnVuY3Rpb24nID8gdGhpcy5fZW5kQW5nbGUoKSA6IHRoaXMuX2VuZEFuZ2xlXG4gIH1cblxuICBib3VuZChwb2ludCwgX3NpemUpIHtcbiAgICBsZXQgYW5nbGUgPSBnZXRBbmdsZSh0aGlzLmNlbnRlciwgcG9pbnQpXG4gICAgYW5nbGUgPSBub3JtYWxpemVBbmdsZShhbmdsZSlcbiAgICBhbmdsZSA9IGJvdW5kQW5nbGUodGhpcy5zdGFydEFuZ2xlKCksIHRoaXMuZW5kQW5nbGUoKSwgYW5nbGUpXG4gICAgcmV0dXJuIGdldFBvaW50RnJvbVJhZGlhbFN5c3RlbShhbmdsZSwgdGhpcy5yYWRpdXMsIHRoaXMuY2VudGVyKVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhcnJheSwgdmFsKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoYXJyYXlbaV0gPT09IHZhbCkge1xuICAgICAgYXJyYXkuc3BsaWNlKGksIDEpXG4gICAgICBpLS1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycmF5XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByYW5nZShzdGFydCwgc3RvcCwgc3RlcCkge1xuICBjb25zdCByZXN1bHQgPSBbXVxuICBpZiAodHlwZW9mIHN0b3AgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgc3RvcCA9IHN0YXJ0XG4gICAgc3RhcnQgPSAwXG4gIH1cbiAgaWYgKHR5cGVvZiBzdGVwID09PSAndW5kZWZpbmVkJykge1xuICAgIHN0ZXAgPSAxXG4gIH1cbiAgaWYgKChzdGVwID4gMCAmJiBzdGFydCA+PSBzdG9wKSB8fCAoc3RlcCA8IDAgJiYgc3RhcnQgPD0gc3RvcCkpIHtcbiAgICByZXR1cm4gW11cbiAgfVxuICBmb3IgKGxldCBpID0gc3RhcnQ7IHN0ZXAgPiAwID8gaSA8IHN0b3AgOiBpID4gc3RvcDsgaSArPSBzdGVwKSB7XG4gICAgcmVzdWx0LnB1c2goaSlcbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9nZW9tZXRyeS9wb2ludCdcbmltcG9ydCB7IGFkZFBvaW50VG9Cb3VuZFBvaW50cyB9IGZyb20gJy4vZ2VvbWV0cnkvYm91bmRzJ1xuXG5pbXBvcnQge1xuICBpbmRleE9mTmVhcmVzdFBvaW50LFxuICBnZXREaXN0YW5jZVxufSBmcm9tICcuL2dlb21ldHJ5L2Rpc3RhbmNlcydcblxuY2xhc3MgQmFzaWNTdHJhdGVneSB7XG4gIGNvbnN0cnVjdG9yKHJlY3RhbmdsZSwgb3B0aW9ucz17fSkge1xuICAgIHRoaXMucmVjdGFuZ2xlID0gcmVjdGFuZ2xlXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9uc1xuICB9XG5cbiAgZ2V0IGJvdW5kUmVjdCAoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGlzLnJlY3RhbmdsZSA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMucmVjdGFuZ2xlKCkgOiB0aGlzLnJlY3RhbmdsZVxuICB9XG59XG5cbmNsYXNzIE5vdENyb3NzaW5nU3RyYXRlZ3kgZXh0ZW5kcyBCYXNpY1N0cmF0ZWd5IHtcbiAgcG9zaXRpb25pbmcgKHJlY3RhbmdsZUxpc3QsIGluZGV4ZXNPZk5ld3MpIHtcbiAgICBjb25zdCBzdGF0aWNSZWN0YW5nbGVJbmRleGVzID0gcmVjdGFuZ2xlTGlzdC5yZWR1Y2UoKGluZGV4ZXMsIF9yZWN0LCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGluZGV4ZXNPZk5ld3MuaW5kZXhPZihpbmRleCkgPT09IC0xKSB7XG4gICAgICAgIGluZGV4ZXMucHVzaChpbmRleClcbiAgICAgIH1cbiAgICAgIHJldHVybiBpbmRleGVzXG4gICAgfSwgW10pXG5cbiAgICBpbmRleGVzT2ZOZXdzLmZvckVhY2goKGluZGV4KSA9PiB7XG4gICAgICBsZXQgcmVjdCA9IHJlY3RhbmdsZUxpc3RbaW5kZXhdXG4gICAgICBsZXQgcmVtb3ZhYmxlID0gZmFsc2VcblxuICAgICAgc3RhdGljUmVjdGFuZ2xlSW5kZXhlcy5mb3JFYWNoKChpbmRleE9mU3RhdGljKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YXRpY1JlY3QgPSByZWN0YW5nbGVMaXN0W2luZGV4T2ZTdGF0aWNdXG4gICAgICAgIHJlY3QgPSBzdGF0aWNSZWN0Lm1vdmVUb0JvdW5kKHJlY3QpXG4gICAgICB9KVxuXG4gICAgICByZW1vdmFibGUgPSBzdGF0aWNSZWN0YW5nbGVJbmRleGVzLnNvbWUoKGluZGV4T2ZTdGF0aWMpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhdGljUmVjdCA9IHJlY3RhbmdsZUxpc3RbaW5kZXhPZlN0YXRpY11cbiAgICAgICAgcmV0dXJuICAhIXN0YXRpY1JlY3QuYW5kKHJlY3QpXG4gICAgICB9KSB8fCByZWN0LmFuZCh0aGlzLmJvdW5kUmVjdCkuZ2V0U3F1YXJlKCkgIT09IHJlY3QuZ2V0U3F1YXJlKClcblxuICAgICAgaWYgKHJlbW92YWJsZSkge1xuICAgICAgICByZWN0LnJlbW92YWJsZSA9IHRydWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMucHVzaChpbmRleClcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiByZWN0YW5nbGVMaXN0XG4gIH1cblxuICBzb3J0aW5nKG9kbERyYWdnYWJsZXNMaXN0LCBuZXdEcmFnZ2FibGVzLCBpbmRleE9mTmV3cykge1xuICAgIGNvbnN0IGRyYWdnYWJsZXMgPSBvZGxEcmFnZ2FibGVzTGlzdC5jb25jYXQobmV3RHJhZ2dhYmxlcylcbiAgICBuZXdEcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgaW5kZXhPZk5ld3MucHVzaChkcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSlcbiAgICB9KVxuICAgIHJldHVybiBkcmFnZ2FibGVzXG4gIH1cbn1cblxuY2xhc3MgRmxvYXRMZWZ0U3RyYXRlZ3kgZXh0ZW5kcyBCYXNpY1N0cmF0ZWd5IHtcbiAgY29uc3RydWN0b3IocmVjdGFuZ2xlLCBvcHRpb25zPXt9KSB7XG4gICAgc3VwZXIocmVjdGFuZ2xlLCBvcHRpb25zKVxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgcmVtb3ZhYmxlOiB0cnVlXG4gICAgfSwgb3B0aW9ucylcblxuICAgIHRoaXMucmFkaXVzID0gb3B0aW9ucy5yYWRpdXMgfHwgODBcblxuICAgIHRoaXMucGFkZGluZ1RvcExlZnQgPSBvcHRpb25zLnBhZGRpbmdUb3BMZWZ0IHx8IG5ldyBQb2ludCgwLCAwKVxuICAgIHRoaXMucGFkZGluZ0JvdHRvbVJpZ2h0ID0gb3B0aW9ucy5wYWRkaW5nQm90dG9tUmlnaHQgfHwgbmV3IFBvaW50KDAsIDApXG4gICAgdGhpcy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgPSBvcHRpb25zLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyB8fCAwXG5cbiAgICB0aGlzLmdldERpc3RhbmNlID0gb3B0aW9ucy5nZXREaXN0YW5jZSB8fCBnZXREaXN0YW5jZVxuICAgIHRoaXMuZ2V0UG9zaXRpb24gPSBvcHRpb25zLmdldFBvc2l0aW9uIHx8ICgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucG9zaXRpb24pXG4gIH1cblxuICBwb3NpdGlvbmluZyhyZWN0YW5nbGVMaXN0LCBfaW5kZXhlc09mTmV3cykge1xuICAgIGNvbnN0IGJvdW5kUmVjdCA9IHRoaXMuYm91bmRSZWN0XG4gICAgY29uc3QgcmVjdFAyID0gYm91bmRSZWN0LmdldFAyKClcbiAgICBsZXQgYm91bmRhcnlQb2ludHMgPSBbYm91bmRSZWN0LnBvc2l0aW9uXVxuXG4gICAgcmVjdGFuZ2xlTGlzdC5mb3JFYWNoKChyZWN0LCByZWN0SW5kZXgpID0+IHtcbiAgICAgIGxldCBwb3NpdGlvbiwgaXNWYWxpZCA9IGZhbHNlXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvdW5kYXJ5UG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHBvc2l0aW9uID0gbmV3IFBvaW50KFxuICAgICAgICAgIGJvdW5kYXJ5UG9pbnRzW2ldLnggKyB0aGlzLnBhZGRpbmdUb3BMZWZ0LngsXG4gICAgICAgICAgaSA+IDAgPyAoYm91bmRhcnlQb2ludHNbaSAtIDFdLnkgKyB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcykgOiAoYm91bmRSZWN0LnBvc2l0aW9uLnkgKyB0aGlzLnBhZGRpbmdUb3BMZWZ0LnkpXG4gICAgICAgIClcblxuICAgICAgICBpc1ZhbGlkID0gKHBvc2l0aW9uLnggKyByZWN0LnNpemUueCA8IHJlY3RQMi54KVxuXG4gICAgICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgcG9zaXRpb24gPSBuZXcgUG9pbnQoXG4gICAgICAgICAgYm91bmRSZWN0LnBvc2l0aW9uLnggKyB0aGlzLnBhZGRpbmdUb3BMZWZ0LngsXG4gICAgICAgICAgYm91bmRhcnlQb2ludHNbYm91bmRhcnlQb2ludHMubGVuZ3RoIC0gMV0ueSArIChyZWN0SW5kZXggPiAwID8gdGhpcy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgOiB0aGlzLnBhZGRpbmdUb3BMZWZ0LnkpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgcmVjdC5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnJlbW92YWJsZSAmJiByZWN0LmdldFAzKCkueSA+IGJvdW5kUmVjdC5nZXRQMygpLnkpIHtcbiAgICAgICAgcmVjdC5yZW1vdmFibGUgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGJvdW5kYXJ5UG9pbnRzID0gYWRkUG9pbnRUb0JvdW5kUG9pbnRzKGJvdW5kYXJ5UG9pbnRzLCByZWN0LmdldFAzKCkuYWRkKHRoaXMucGFkZGluZ0JvdHRvbVJpZ2h0KSlcbiAgICB9KVxuICAgIHJldHVybiByZWN0YW5nbGVMaXN0XG4gIH1cblxuICBzb3J0aW5nKG9kbERyYWdnYWJsZXNMaXN0LCBuZXdEcmFnZ2FibGVzLCBpbmRleE9mTmV3cykge1xuICAgIGNvbnN0IG5ld0xpc3QgPSBvZGxEcmFnZ2FibGVzTGlzdC5jb25jYXQoKVxuICAgIGNvbnN0IGxpc3RPbGRQb3NpdGlvbiA9IG9kbERyYWdnYWJsZXNMaXN0Lm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUuZ2V0UG9zaXRpb24oKSlcbiAgICBuZXdEcmFnZ2FibGVzLmZvckVhY2goKG5ld0RyYWdnYWJsZSkgPT4ge1xuICAgICAgbGV0IGluZGV4ID0gaW5kZXhPZk5lYXJlc3RQb2ludChsaXN0T2xkUG9zaXRpb24sIHRoaXMuZ2V0UG9zaXRpb24obmV3RHJhZ2dhYmxlKSwgdGhpcy5yYWRpdXMsIHRoaXMuZ2V0RGlzdGFuY2UpXG4gICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgIGluZGV4ID0gbmV3TGlzdC5sZW5ndGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluZGV4ID0gbmV3TGlzdC5pbmRleE9mKG9kbERyYWdnYWJsZXNMaXN0W2luZGV4XSlcbiAgICAgIH1cbiAgICAgIG5ld0xpc3Quc3BsaWNlKGluZGV4LCAwLCBuZXdEcmFnZ2FibGUpXG4gICAgfSlcbiAgICBuZXdEcmFnZ2FibGVzLmZvckVhY2goKG5ld0RyYWdnYWJsZSkgPT4ge1xuICAgICAgaW5kZXhPZk5ld3MucHVzaChuZXdMaXN0LmluZGV4T2YobmV3RHJhZ2dhYmxlKSlcbiAgICB9KVxuICAgIHJldHVybiBuZXdMaXN0XG4gIH1cbn1cblxuY2xhc3MgRmxvYXRSaWdodFN0cmF0ZWd5IGV4dGVuZHMgRmxvYXRMZWZ0U3RyYXRlZ3kge1xuICBjb25zdHJ1Y3RvcihyZWN0YW5nbGUsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcihyZWN0YW5nbGUsIG9wdGlvbnMpXG5cbiAgICB0aGlzLnBhZGRpbmdUb3BSaWdodCA9IG9wdGlvbnMucGFkZGluZ1RvcFJpZ2h0IHx8IG5ldyBQb2ludCg1LCA1KVxuICAgIHRoaXMucGFkZGluZ0JvdHRvbUxlZnQgPSBvcHRpb25zLnBhZGRpbmdCb3R0b21MZWZ0IHx8IG5ldyBQb2ludCgwLCAwKVxuICAgIHRoaXMueUdhcEJldHdlZW5EcmFnZ2FibGVzID0gb3B0aW9ucy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgfHwgMFxuXG4gICAgdGhpcy5wYWRkaW5nQm90dG9tTmVnTGVmdCA9IG5ldyBQb2ludCgtdGhpcy5wYWRkaW5nQm90dG9tTGVmdC54LCB0aGlzLnBhZGRpbmdCb3R0b21MZWZ0LnkpXG4gIH1cblxuICBwb3NpdGlvbmluZyhyZWN0YW5nbGVMaXN0LCBfaW5kZXhlc09mTmV3cykge1xuICAgIGNvbnN0IGJvdW5kUmVjdCA9IHRoaXMuYm91bmRSZWN0XG4gICAgbGV0IGJvdW5kYXJ5UG9pbnRzID0gW2JvdW5kUmVjdC5nZXRQMigpXVxuXG4gICAgcmVjdGFuZ2xlTGlzdC5mb3JFYWNoKChyZWN0LCByZWN0SW5kZXgpID0+IHtcbiAgICAgIGxldCBwb3NpdGlvbiwgaXNWYWxpZCA9IGZhbHNlXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvdW5kYXJ5UG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHBvc2l0aW9uID0gbmV3IFBvaW50KFxuICAgICAgICAgIGJvdW5kYXJ5UG9pbnRzW2ldLnggLSByZWN0LnNpemUueCAtIHRoaXMucGFkZGluZ1RvcFJpZ2h0LngsXG4gICAgICAgICAgaSA+IDAgPyAoYm91bmRhcnlQb2ludHNbaSAtIDFdLnkgKyB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcykgOiAoYm91bmRSZWN0LnBvc2l0aW9uLnkgKyB0aGlzLnBhZGRpbmdUb3BSaWdodC55KVxuICAgICAgICApXG5cbiAgICAgICAgaXNWYWxpZCA9IChwb3NpdGlvbi54ID4gcmVjdC5wb3NpdGlvbi54KVxuICAgICAgICBpZiAoaXNWYWxpZCkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICBwb3NpdGlvbiA9IG5ldyBQb2ludChcbiAgICAgICAgICBib3VuZFJlY3QuZ2V0UDIoKS54ICAtIHJlY3Quc2l6ZS54IC0gdGhpcy5wYWRkaW5nVG9wUmlnaHQueCxcbiAgICAgICAgICBib3VuZGFyeVBvaW50c1tib3VuZGFyeVBvaW50cy5sZW5ndGggLSAxXS55ICsgKHJlY3RJbmRleCA+IDAgPyB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyA6IHRoaXMucGFkZGluZ1RvcFJpZ2h0LnkpXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIHJlY3QucG9zaXRpb24gPSBwb3NpdGlvblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZW1vdmFibGUgJiYgcmVjdC5nZXRQNCgpLnkgPiBib3VuZFJlY3QuZ2V0UDQoKS55KSB7XG4gICAgICAgIHJlY3QucmVtb3ZhYmxlID0gdHJ1ZVxuICAgICAgfVxuICAgICAgYm91bmRhcnlQb2ludHMgPSBhZGRQb2ludFRvQm91bmRQb2ludHMoYm91bmRhcnlQb2ludHMsIHJlY3QuZ2V0UDQoKS5hZGQodGhpcy5wYWRkaW5nQm90dG9tTmVnTGVmdCksIHRydWUpXG4gICAgfSlcbiAgICByZXR1cm4gcmVjdGFuZ2xlTGlzdFxuICB9XG59XG5cbmV4cG9ydCB7IE5vdENyb3NzaW5nU3RyYXRlZ3ksIEZsb2F0TGVmdFN0cmF0ZWd5LCBGbG9hdFJpZ2h0U3RyYXRlZ3kgfVxuIiwiaW1wb3J0IHJhbmdlIGZyb20gJy4vdXRpbHMvcmFuZ2UuanMnXG5pbXBvcnQgcmVtb3ZlSXRlbSBmcm9tICcuL3V0aWxzL3JlbW92ZS1hcnJheS1pdGVtJ1xuaW1wb3J0IGdldERlZmF1bHRDb250YWluZXIgZnJvbSAnLi91dGlscy9nZXQtZGVmYXVsdC1jb250YWluZXInXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnRFbWl0dGVyJ1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tICcuL2dlb21ldHJ5L3JlY3RhbmdsZSdcbmltcG9ydCB7IHRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3RvcnkgfSBmcm9tICcuL2dlb21ldHJ5L2Rpc3RhbmNlcydcbmltcG9ydCB7IHNjb3BlcywgZGVmYXVsdFNjb3BlIH0gZnJvbSAnLi9zY29wZSdcblxuaW1wb3J0IHsgRmxvYXRMZWZ0U3RyYXRlZ3kgfSBmcm9tICcuL3Bvc2l0aW9uaW5nJ1xuaW1wb3J0IHsgQm91bmRUb0VsZW1lbnQgfSBmcm9tICcuL2JvdW5kaW5nJ1xuXG5jb25zdCBhZGRUb0RlZmF1bHRTY29wZSA9IGZ1bmN0aW9uKHRhcmdldCkge1xuICBkZWZhdWx0U2NvcGUuYWRkVGFyZ2V0KHRhcmdldClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFyZ2V0IGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgZHJhZ2dhYmxlcywgb3B0aW9ucyA9IHt9KSB7XG4gICAgc3VwZXIob3B0aW9ucylcbiAgICBjb25zdCB0YXJnZXQgPSB0aGlzXG5cbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHRpbWVFbmQ6IDIwMCxcbiAgICAgIHRpbWVFeGNhbmdlOiA0MDBcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGhpcy5wb3NpdGlvbmluZ1N0cmF0ZWd5ID0gb3B0aW9ucy5zdHJhdGVneSB8fCBuZXcgRmxvYXRMZWZ0U3RyYXRlZ3koXG4gICAgICB0aGlzLmdldFJlY3RhbmdsZS5iaW5kKHRoaXMpLFxuICAgICAge1xuICAgICAgICByYWRpdXM6IDgwLFxuICAgICAgICBnZXREaXN0YW5jZTogdHJhbnNmb3JtZWRTcGFjZURpc3RhbmNlRmFjdG9yeSh7IHg6IDEsIHk6IDQgfSksXG4gICAgICAgIHJlbW92YWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIClcblxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgICBkcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnRhcmdldHMucHVzaCh0YXJnZXQpKVxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZXNcblxuICAgIFRhcmdldC5lbWl0dGVyLmVtaXQoJ3RhcmdldDpjcmVhdGUnLCB0aGlzKVxuXG4gICAgdGhpcy5zdGFydEJvdW5kaW5nKClcbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgc3RhcnRCb3VuZGluZygpIHtcbiAgICB0aGlzLmJvdW5kID0gdGhpcy5vcHRpb25zLmJvdW5kIHx8IEJvdW5kVG9FbGVtZW50LmJvdW5kaW5nKHRoaXMuZWxlbWVudClcbiAgfVxuXG4gIHBvc2l0aW9uaW5nIChkcmFnZ2FibGVzLCBpbmRleGVzT2ZOZXcpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbmluZ1N0cmF0ZWd5LnBvc2l0aW9uaW5nKGRyYWdnYWJsZXMsIGluZGV4ZXNPZk5ldylcbiAgfVxuXG4gIHNvcnRpbmcgKG9sZERyYWdnYWJsZXMsIG5ld0RyYWdnYWJsZXMsIGluZGV4T2ZOZXdzKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25pbmdTdHJhdGVneS5zb3J0aW5nKG9sZERyYWdnYWJsZXMsIG5ld0RyYWdnYWJsZXMsIGluZGV4T2ZOZXdzKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBsZXQgcmVjdGFuZ2xlcywgaW5kZXhlc09mTmV3XG5cbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcyA9IHRoaXMuZHJhZ2dhYmxlcy5maWx0ZXIoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgbGV0IGVsZW1lbnQgPSBkcmFnZ2FibGUuZWxlbWVudC5wYXJlbnROb2RlXG4gICAgICB3aGlsZSAoZWxlbWVudCkge1xuICAgICAgICBpZiAoZWxlbWVudCA9PT0gdGhpcy5lbGVtZW50KSB7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlXG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9KVxuXG4gICAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmxlbmd0aCkge1xuICAgICAgaW5kZXhlc09mTmV3ID0gcmFuZ2UodGhpcy5pbm5lckRyYWdnYWJsZXMubGVuZ3RoKVxuICAgICAgcmVjdGFuZ2xlcyA9IHRoaXMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgICAgfSksIGluZGV4ZXNPZk5ldylcbiAgICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgaW5kZXhlc09mTmV3KVxuICAgICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB0aGlzLmVtaXQoJ3RhcmdldDphZGQnLCBkcmFnZ2FibGUpKVxuICAgIH1cbiAgfVxuXG4gIGdldFJlY3RhbmdsZSgpIHtcbiAgICByZXR1cm4gUmVjdGFuZ2xlLmZyb21FbGVtZW50KHRoaXMuZWxlbWVudCwgdGhpcy5jb250YWluZXIsIHRydWUpXG4gIH1cblxuICBjYXRjaERyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmNhdGNoRHJhZ2dhYmxlKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmNhdGNoRHJhZ2dhYmxlKHRoaXMsIGRyYWdnYWJsZSlcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGFyZ2V0UmVjdGFuZ2xlID0gdGhpcy5nZXRSZWN0YW5nbGUoKVxuICAgICAgY29uc3QgZHJhZ2dhYmxlU3F1YXJlID0gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpLmdldFNxdWFyZSgpXG5cbiAgICAgIHJldHVybiBkcmFnZ2FibGVTcXVhcmUgPCB0YXJnZXRSZWN0YW5nbGUuZ2V0U3F1YXJlKClcbiAgICAgICAgICAgICAgJiYgdGFyZ2V0UmVjdGFuZ2xlLmluY2x1ZGVQb2ludChkcmFnZ2FibGUuZ2V0Q2VudGVyKCkpXG4gICAgfVxuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UmVjdGFuZ2xlKCkucG9zaXRpb25cbiAgfVxuXG4gIGdldFNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UmVjdGFuZ2xlKCkuc2l6ZVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICBzY29wZXMuZm9yRWFjaCgoc2NvcGUpID0+IHJlbW92ZUl0ZW0oc2NvcGUudGFyZ2V0cywgdGhpcykpXG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgfSksIFtdKVxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgW10sIDApXG4gIH1cblxuICBvbkVuZChkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBuZXdEcmFnZ2FibGVzSW5kZXggPSBbXVxuXG4gICAgaWYgKHRoaXMuZ2V0UmVjdGFuZ2xlKCkuaW5jbHVkZVBvaW50KGRyYWdnYWJsZS5nZXRDZW50ZXIoKSkpIHtcbiAgICAgIGRyYWdnYWJsZS5wb3NpdGlvbiA9IHRoaXMuYm91bmQoZHJhZ2dhYmxlLnBvc2l0aW9uLCBkcmFnZ2FibGUuZ2V0U2l6ZSgpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICB0aGlzLmVtaXQoJ3RhcmdldDpiZWZvcmVBZGQnLCBkcmFnZ2FibGUpXG5cbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcyA9IHRoaXMuc29ydGluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcywgW2RyYWdnYWJsZV0sIG5ld0RyYWdnYWJsZXNJbmRleClcbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBuZXdEcmFnZ2FibGVzSW5kZXgpXG5cbiAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIG5ld0RyYWdnYWJsZXNJbmRleClcbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMSkge1xuICAgICAgdGhpcy5hZGRSZW1vdmVPbk1vdmUoZHJhZ2dhYmxlKVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgaW5kZXhlc09mTmV3LCB0aW1lKSB7XG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuc2xpY2UoMCkuZm9yRWFjaCgoZHJhZ2dhYmxlLCBpKSA9PiB7XG4gICAgICBjb25zdCByZWN0ID0gcmVjdGFuZ2xlc1tpXSxcbiAgICAgICAgdGltZUVuZCA9IHRpbWUgfHwgdGltZSA9PT0gMCA/IHRpbWUgOiBpbmRleGVzT2ZOZXcuaW5kZXhPZihpKSAhPT0gLTEgPyB0aGlzLm9wdGlvbnMudGltZUVuZCA6IHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZVxuXG4gICAgICBpZiAocmVjdC5yZW1vdmFibGUpIHtcbiAgICAgICAgZHJhZ2dhYmxlLm1vdmUoZHJhZ2dhYmxlLmluaXRpYWxQb3NpdGlvbiwgdGltZUVuZCwgdHJ1ZSwgdHJ1ZSlcbiAgICAgICAgcmVtb3ZlSXRlbSh0aGlzLmlubmVyRHJhZ2dhYmxlcywgZHJhZ2dhYmxlKVxuICAgICAgICB0aGlzLmVtaXQoJ3RhcmdldDpyZW1vdmUnLCBkcmFnZ2FibGUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkcmFnZ2FibGUubW92ZShyZWN0LnBvc2l0aW9uLCB0aW1lRW5kLCB0cnVlLCB0cnVlKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBhZGQoZHJhZ2dhYmxlLCB0aW1lKSB7XG4gICAgY29uc3QgbmV3RHJhZ2dhYmxlc0luZGV4ID0gdGhpcy5pbm5lckRyYWdnYWJsZXMubGVuZ3RoXG5cbiAgICB0aGlzLmVtaXQoJ3RhcmdldDpiZWZvcmVBZGQnLCBkcmFnZ2FibGUpXG5cbiAgICB0aGlzLnB1c2hJbm5lckRyYWdnYWJsZShkcmFnZ2FibGUpXG4gICAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgbmV3RHJhZ2dhYmxlc0luZGV4LCBkcmFnZ2FibGUpXG5cbiAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIFtuZXdEcmFnZ2FibGVzSW5kZXhdLCB0aW1lIHx8IDApXG4gICAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTEpIHtcbiAgICAgIHRoaXMuYWRkUmVtb3ZlT25Nb3ZlKGRyYWdnYWJsZSlcbiAgICB9XG4gIH1cblxuICBwdXNoSW5uZXJEcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKT09PS0xKSB7XG4gICAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5wdXNoKGRyYWdnYWJsZSlcbiAgICB9XG4gIH1cblxuICBhZGRSZW1vdmVPbk1vdmUoZHJhZ2dhYmxlKSB7XG4gICAgZHJhZ2dhYmxlLm9uKCdkcmFnOm1vdmUnLCB0aGlzLnJlbW92ZUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICB0aGlzLnJlbW92ZShkcmFnZ2FibGUpXG4gICAgfSlcblxuICAgIHRoaXMuZW1pdCgndGFyZ2V0OmFkZCcsIGRyYWdnYWJsZSlcbiAgfVxuXG4gIHJlbW92ZShkcmFnZ2FibGUpIHtcbiAgICBkcmFnZ2FibGUudW5zdWJzY3JpYmUoJ2RyYWc6bW92ZScsIHRoaXMucmVtb3ZlSGFuZGxlcilcblxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpXG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuc3BsaWNlKGluZGV4LCAxKVxuXG4gICAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgW10pXG5cbiAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIFtdKVxuICAgIHRoaXMuZW1pdCgndGFyZ2V0OnJlbW92ZScsIGRyYWdnYWJsZSlcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLm1vdmUoZHJhZ2dhYmxlLmluaXRpYWxQb3NpdGlvbiwgMCwgdHJ1ZSwgdHJ1ZSlcbiAgICAgIHRoaXMuZW1pdCgndGFyZ2V0OnJlbW92ZScsIGRyYWdnYWJsZSlcbiAgICB9KVxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzID0gW11cbiAgfVxuXG4gIGdldFNvcnRlZERyYWdnYWJsZXMoKSB7XG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuc2xpY2UoKVxuICB9XG5cbiAgZ2V0IGNvbnRhaW5lcigpIHtcbiAgICByZXR1cm4gKHRoaXMuX2NvbnRhaW5lciA9IHRoaXMuX2NvbnRhaW5lciB8fCB0aGlzLm9wdGlvbnMuY29udGFpbmVyIHx8IHRoaXMub3B0aW9ucy5wYXJlbnQgfHwgZ2V0RGVmYXVsdENvbnRhaW5lcih0aGlzLmVsZW1lbnQpKVxuICB9XG59XG5cblRhcmdldC5lbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcigpXG5UYXJnZXQuZW1pdHRlci5vbigndGFyZ2V0OmNyZWF0ZScsIGFkZFRvRGVmYXVsdFNjb3BlKVxuIiwiaW1wb3J0IHJlbW92ZUl0ZW0gZnJvbSAnLi91dGlscy9yZW1vdmUtYXJyYXktaXRlbSdcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudEVtaXR0ZXInXG5pbXBvcnQgRHJhZ2dhYmxlIGZyb20gJy4vZHJhZ2dhYmxlJ1xuaW1wb3J0IFRhcmdldCBmcm9tICcuL3RhcmdldCdcblxuY29uc3Qgc2NvcGVzID0gW11cblxuY2xhc3MgU2NvcGUgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvcihkcmFnZ2FibGVzLCB0YXJnZXRzLCBvcHRpb25zPXt9KSB7XG4gICAgc3VwZXIob3B0aW9ucylcbiAgICBzY29wZXMuZm9yRWFjaCgoc2NvcGUpID0+IHtcbiAgICAgIGlmIChkcmFnZ2FibGVzKSB7XG4gICAgICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICAgICAgcmVtb3ZlSXRlbShzY29wZS5kcmFnZ2FibGVzLCBkcmFnZ2FibGUpXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIGlmICh0YXJnZXRzKSB7XG4gICAgICAgIHRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB7XG4gICAgICAgICAgcmVtb3ZlSXRlbShzY29wZS50YXJnZXRzLCB0YXJnZXQpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZXMgfHwgW11cbiAgICB0aGlzLnRhcmdldHMgPSB0YXJnZXRzIHx8IFtdXG4gICAgc2NvcGVzLnB1c2godGhpcylcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICB0aW1lRW5kOiAob3B0aW9ucy50aW1lRW5kKSB8fCA0MDBcbiAgICB9XG5cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUuZHJhZ0VuZEFjdGlvbiA9ICgpID0+IHRoaXMub25FbmQoZHJhZ2dhYmxlKVxuICAgIH0pXG4gIH1cblxuICBhZGREcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxuICAgIGRyYWdnYWJsZS5kcmFnRW5kQWN0aW9uID0gKCkgPT4gdGhpcy5vbkVuZChkcmFnZ2FibGUpXG4gIH1cblxuICBhZGRUYXJnZXQodGFyZ2V0KSB7XG4gICAgdGhpcy50YXJnZXRzLnB1c2godGFyZ2V0KVxuICB9XG5cbiAgb25FbmQoZHJhZ2dhYmxlKSB7XG4gICAgY29uc3Qgc2hvdFRhcmdldHMgPSB0aGlzLnRhcmdldHMuZmlsdGVyKCh0YXJnZXQpID0+IHtcbiAgICAgIHJldHVybiB0YXJnZXQuZHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkgIT09IC0xXG4gICAgfSkuZmlsdGVyKCh0YXJnZXQpID0+IHtcbiAgICAgIHJldHVybiB0YXJnZXQuY2F0Y2hEcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICAgIH0pLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIHJldHVybiBhLmdldFJlY3RhbmdsZSgpLmdldFNxdWFyZSgpIC0gYi5nZXRSZWN0YW5nbGUoKS5nZXRTcXVhcmUoKVxuICAgIH0pXG5cbiAgICBpZiAoc2hvdFRhcmdldHMubGVuZ3RoKSB7XG4gICAgICBzaG90VGFyZ2V0c1swXS5vbkVuZChkcmFnZ2FibGUpXG4gICAgfSBlbHNlIGlmIChkcmFnZ2FibGUudGFyZ2V0cy5sZW5ndGgpIHtcbiAgICAgIGRyYWdnYWJsZS5waW5Qb3NpdGlvbihkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uLCB0aGlzLm9wdGlvbnMudGltZUVuZClcbiAgICB9XG5cbiAgICB0aGlzLmVtaXQoJ3Njb3BlOmNoYW5nZScpXG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLnRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB0YXJnZXQucmVzZXQoKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnJlZnJlc2goKSlcbiAgICB0aGlzLnRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB0YXJnZXQucmVmcmVzaCgpKVxuICB9XG5cbiAgZ2V0IHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXRzLm1hcCgodGFyZ2V0KSA9PiB7XG4gICAgICByZXR1cm4gdGFyZ2V0LmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4gdGhpcy5kcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSlcbiAgICB9KVxuICB9XG5cbiAgc2V0IHBvc2l0aW9ucyhwb3NpdGlvbnMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gJ3dyb25nIGFycmF5IGxlbmd0aCdcbiAgICBpZiAocG9zaXRpb25zLmxlbmd0aCA9PT0gdGhpcy50YXJnZXRzLmxlbmd0aCkge1xuICAgICAgdGhpcy50YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4gdGFyZ2V0LnJlc2V0KCkpXG5cbiAgICAgIHBvc2l0aW9ucy5mb3JFYWNoKCh0YXJnZXRJbmRleGVzLCBpKSA9PiB7XG4gICAgICAgIHRhcmdldEluZGV4ZXMuZm9yRWFjaCgoaW5kZXgpID0+IHtcbiAgICAgICAgICB0aGlzLnRhcmdldHNbaV0uYWRkKHRoaXMuZHJhZ2dhYmxlc1tpbmRleF0pXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBtZXNzYWdlXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IGRlZmF1bHRTY29wZSA9IG5ldyBTY29wZSgpXG5cbmZ1bmN0aW9uIHNjb3BlKGZuKSB7XG4gIGNvbnN0IGN1cnJlbnRTY29wZSA9IG5ldyBTY29wZSgpXG5cbiAgY29uc3QgYWRkRHJhZ2dhYmxlVG9TY29wZSA9IGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICAgIGN1cnJlbnRTY29wZS5hZGREcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICAgIERyYWdnYWJsZS5lbWl0dGVyLmludGVycnVwdCgpXG4gIH1cblxuICBjb25zdCBhZGRUYXJnZXRUb1Njb3BlID0gZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgY3VycmVudFNjb3BlLmFkZFRhcmdldCh0YXJnZXQpXG4gICAgRHJhZ2dhYmxlLmVtaXR0ZXIuaW50ZXJydXB0KClcbiAgfVxuXG4gIERyYWdnYWJsZS5lbWl0dGVyLnByZXBlbmRPbignZHJhZ2dhYmxlOmNyZWF0ZScsIGFkZERyYWdnYWJsZVRvU2NvcGUpXG4gIFRhcmdldC5lbWl0dGVyLnByZXBlbmRPbigndGFyZ2V0OmNyZWF0ZScsIGFkZFRhcmdldFRvU2NvcGUpXG4gIGZuLmNhbGwoKVxuICBEcmFnZ2FibGUuZW1pdHRlci51bnN1YnNjcmliZSgnZHJhZ2dhYmxlOmNyZWF0ZScsIGFkZERyYWdnYWJsZVRvU2NvcGUpXG4gIFRhcmdldC5lbWl0dGVyLnVuc3Vic2NyaWJlKCd0YXJnZXQ6Y3JlYXRlJywgYWRkVGFyZ2V0VG9TY29wZSlcbiAgcmV0dXJuIGN1cnJlbnRTY29wZVxufVxuXG5leHBvcnQgeyBzY29wZXMsIGRlZmF1bHRTY29wZSwgU2NvcGUsIHNjb3BlIH1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRocm90dGxlKGZ1bmMsIHdhaXQpIHtcbiAgbGV0IGxhc3RUaW1lID0gMFxuXG4gIHJldHVybiBmdW5jdGlvbiBleGVjdXRlZEZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzXG4gICAgY29uc3QgYXJncyA9IGFyZ3VtZW50c1xuXG4gICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKVxuICAgIGlmIChub3cgLSBsYXN0VGltZSA+PSB3YWl0KSB7XG4gICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpXG4gICAgICBsYXN0VGltZSA9IG5vd1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IGdldERlZmF1bHRDb250YWluZXIgZnJvbSAnLi91dGlscy9nZXQtZGVmYXVsdC1jb250YWluZXInXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnRFbWl0dGVyJ1xuaW1wb3J0IHsgQm91bmRUb0VsZW1lbnQgfSBmcm9tICcuL2JvdW5kaW5nJ1xuaW1wb3J0IFBvaW50IGZyb20gJy4vZ2VvbWV0cnkvcG9pbnQnXG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gJy4vZ2VvbWV0cnkvcmVjdGFuZ2xlJ1xuaW1wb3J0IHsgZGVmYXVsdFNjb3BlIH0gZnJvbSAnLi9zY29wZSdcbmltcG9ydCB0aHJvdHRsZSBmcm9tICcuL3V0aWxzL3Rocm90dGxlJ1xuXG5jb25zdCB0aHJvdHRsZWREcmFnT3ZlciA9IChjYWxsYmFjaywgZHVyYXRpb24pID0+IHtcbiAgY29uc3QgdGhyb3R0bGVkQ2FsbGJhY2sgPSB0aHJvdHRsZSgoZXZlbnQpID0+IGNhbGxiYWNrKGV2ZW50KSwgZHVyYXRpb24pXG4gIHJldHVybiAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhyb3R0bGVkQ2FsbGJhY2soZXZlbnQpXG4gIH1cbn1cblxuY29uc3QgcGFzc2l2ZUZhbHNlID0geyBwYXNzaXZlOiBmYWxzZSB9XG5cbmNvbnN0IGlzVG91Y2ggPSAnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3dcbmNvbnN0IG1vdXNlRXZlbnRzID0ge1xuICBzdGFydDogJ21vdXNlZG93bicsXG4gIG1vdmU6ICdtb3VzZW1vdmUnLFxuICBlbmQ6ICdtb3VzZXVwJ1xufVxuY29uc3QgdG91Y2hFdmVudHMgPSB7XG4gIHN0YXJ0OiAndG91Y2hzdGFydCcsXG4gIG1vdmU6ICd0b3VjaG1vdmUnLFxuICBlbmQ6ICd0b3VjaGVuZCdcbn1cbmNvbnN0IGRyYWdnYWJsZXMgPSBbXVxuY29uc3QgdHJhbnNmb3JtUHJvcGVydHkgPSAndHJhbnNmb3JtJ1xuY29uc3QgdHJhbnNpdGlvblByb3BlcnR5ID0gJ3RyYW5zaXRpb24nXG5cbmZ1bmN0aW9uIGdldFRvdWNoQnlJRChlbGVtZW50LCB0b3VjaElkKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudC5jaGFuZ2VkVG91Y2hlcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChlbGVtZW50LmNoYW5nZWRUb3VjaGVzW2ldLmlkZW50aWZpZXIgPT09IHRvdWNoSWQpIHtcbiAgICAgIHJldHVybiBlbGVtZW50LmNoYW5nZWRUb3VjaGVzW2ldXG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZVxufVxuXG5mdW5jdGlvbiBwcmV2ZW50RG91YmxlSW5pdChkcmFnZ2FibGUpIHtcbiAgY29uc3QgbWVzc2FnZSA9IFwiZm9yIHRoaXMgZWxlbWVudCBEcmFnZWUuRHJhZ2dhYmxlIGlzIGFscmVhZHkgZXhpc3QsIGRvbid0IGNyZWF0ZSBpdCB0d2ljZSBcIlxuICBpZiAoZHJhZ2dhYmxlcy5zb21lKChleGlzdGluZykgPT4gZHJhZ2dhYmxlLmVsZW1lbnQgPT09IGV4aXN0aW5nLmVsZW1lbnQpKSB7XG4gICAgdGhyb3cgbWVzc2FnZVxuICB9XG4gIGRyYWdnYWJsZXMucHVzaChkcmFnZ2FibGUpXG59XG5cbmZ1bmN0aW9uIGFkZFRvRGVmYXVsdFNjb3BlKGRyYWdnYWJsZSkge1xuICBkZWZhdWx0U2NvcGUuYWRkRHJhZ2dhYmxlKGRyYWdnYWJsZSlcbn1cblxuZnVuY3Rpb24gY29weVN0eWxlcyhzb3VyY2UsIGRlc3RpbmF0aW9uKSB7XG4gIGNvbnN0IGNzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoc291cmNlKVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY3MubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBrZXkgPSBjc1tpXVxuICAgIGlmICgoa2V5LmluZGV4T2YoJ3RyYW5zaXRpb24nKSA8IDApICYmIChrZXkuaW5kZXhPZigndHJhbnNmb3JtJykgPCAwKSkge1xuICAgICAgZGVzdGluYXRpb24uc3R5bGVba2V5XSA9IGNzW2tleV1cbiAgICB9XG4gIH1cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNvdXJjZS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgIGNvcHlTdHlsZXMoc291cmNlLmNoaWxkcmVuW2ldLCBkZXN0aW5hdGlvbi5jaGlsZHJlbltpXSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcmFnZ2FibGUgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBvcHRpb25zPXt9KSB7XG4gICAgc3VwZXIob3B0aW9ucylcbiAgICB0aGlzLnRhcmdldHMgPSBbXVxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG4gICAgcHJldmVudERvdWJsZUluaXQodGhpcylcbiAgICBEcmFnZ2FibGUuZW1pdHRlci5lbWl0KCdkcmFnZ2FibGU6Y3JlYXRlJywgdGhpcylcbiAgICB0aGlzLl9lbmFibGUgPSB0cnVlXG4gICAgdGhpcy5zdGFydEJvdW5kaW5nKClcbiAgICB0aGlzLnN0YXJ0UG9zaXRpb25pbmcoKVxuICAgIHRoaXMuc3RhcnRMaXN0ZW5pbmcoKVxuICB9XG5cbiAgc3RhcnRCb3VuZGluZygpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmJvdW5kKSB7XG4gICAgICB0aGlzLmJvdW5kaW5nID0geyBib3VuZDogdGhpcy5vcHRpb25zLmJvdW5kIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ib3VuZGluZyA9IG5ldyBCb3VuZFRvRWxlbWVudCh0aGlzLmNvbnRhaW5lciwgdGhpcy5jb250YWluZXIpXG4gICAgfVxuICB9XG5cbiAgc3RhcnRQb3NpdGlvbmluZygpIHtcbiAgICB0aGlzLl9zZXREZWZhdWx0VHJhbnNpdGlvbigpXG4gICAgdGhpcy5vZmZzZXQgPSBQb2ludC5lbGVtZW50T2Zmc2V0KHRoaXMuZWxlbWVudCwgdGhpcy5jb250YWluZXIsIHRydWUpXG4gICAgdGhpcy5waW5uZWRQb3NpdGlvbiA9IHRoaXMub2Zmc2V0XG4gICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMub2Zmc2V0XG4gICAgdGhpcy5pbml0aWFsUG9zaXRpb24gPSB0aGlzLm9wdGlvbnMucG9zaXRpb24gfHwgdGhpcy5vZmZzZXRcblxuICAgIHRoaXMucGluUG9zaXRpb24odGhpcy5pbml0aWFsUG9zaXRpb24pXG5cbiAgICBpZiAodGhpcy5ib3VuZGluZy5yZWZyZXNoKSB7XG4gICAgICB0aGlzLmJvdW5kaW5nLnJlZnJlc2goKVxuICAgIH1cbiAgfVxuXG4gIHN0YXJ0TGlzdGVuaW5nKCkge1xuICAgIHRoaXMuX2RyYWdTdGFydCA9IChldmVudCkgPT4gdGhpcy5kcmFnU3RhcnQoZXZlbnQpXG4gICAgdGhpcy5fZHJhZ01vdmUgPSAoZXZlbnQpID0+IHRoaXMuZHJhZ01vdmUoZXZlbnQpXG4gICAgdGhpcy5fZHJhZ0VuZCA9IChldmVudCkgPT4gdGhpcy5kcmFnRW5kKGV2ZW50KVxuICAgIHRoaXMuX25hdGl2ZURyYWdTdGFydCA9IChldmVudCkgPT4gdGhpcy5uYXRpdmVEcmFnU3RhcnQoZXZlbnQpXG4gICAgdGhpcy5fbmF0aXZlRHJhZ092ZXIgPSB0aHJvdHRsZWREcmFnT3ZlcigoZXZlbnQpID0+IHRoaXMubmF0aXZlRHJhZ092ZXIoZXZlbnQpLCB0aGlzLmRyYWdPdmVyVGhyb3R0bGVEdXJhdGlvbilcbiAgICB0aGlzLl9uYXRpdmVEcmFnRW5kID0gKGV2ZW50KSA9PiB0aGlzLm5hdGl2ZURyYWdFbmQoZXZlbnQpXG4gICAgdGhpcy5fbmF0aXZlRHJvcCA9IChldmVudCkgPT4gdGhpcy5uYXRpdmVEcm9wKGV2ZW50KVxuICAgIHRoaXMuX3Njcm9sbCA9IChldmVudCkgPT4gdGhpcy5vblNjcm9sbChldmVudClcblxuICAgIHRoaXMuaGFuZGxlci5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQsIHBhc3NpdmVGYWxzZSlcbiAgICB0aGlzLmhhbmRsZXIuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0LCBwYXNzaXZlRmFsc2UpXG4gIH1cblxuICBnZXRTaXplKCkge1xuICAgIHJldHVybiBQb2ludC5lbGVtZW50U2l6ZSh0aGlzLmVsZW1lbnQpXG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5vZmZzZXQuYWRkKHRoaXMuX3RyYW5zZm9ybVBvc2l0aW9uIHx8IG5ldyBQb2ludCgwLCAwKSlcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvblxuICB9XG5cbiAgZ2V0Q2VudGVyKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLmdldFNpemUoKS5tdWx0KDAuNSkpXG4gIH1cblxuICBfc2V0RGVmYXVsdFRyYW5zaXRpb24gKCkge1xuICAgIGlmICghdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV0pIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5lbGVtZW50KVt0cmFuc2l0aW9uUHJvcGVydHldXG4gICAgfVxuICB9XG5cbiAgX3NldFRyYW5zaXRpb24odGltZSkge1xuICAgIGxldCB0cmFuc2l0aW9uID0gdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV1cbiAgICBjb25zdCB0cmFuc2l0aW9uQ3NzID0gYHRyYW5zZm9ybSAke3RpbWV9bXNgXG5cbiAgICBpZiAoIS90cmFuc2Zvcm1cXHM/XFxkKm0/cz8vLnRlc3QodHJhbnNpdGlvbikpIHtcbiAgICAgIGlmICh0cmFuc2l0aW9uKSB7XG4gICAgICAgIHRyYW5zaXRpb24gKz0gYCwgJHt0cmFuc2l0aW9uQ3NzfWBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyYW5zaXRpb24gPSB0cmFuc2l0aW9uQ3NzXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyYW5zaXRpb24gPSB0cmFuc2l0aW9uLnJlcGxhY2UoL3RyYW5zZm9ybVxccz9cXGQqbT9zPy9nLCB0cmFuc2l0aW9uQ3NzKVxuICAgIH1cblxuICAgIGlmICh0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNpdGlvblByb3BlcnR5XSAhPT0gdHJhbnNpdGlvbikge1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV0gPSB0cmFuc2l0aW9uXG4gICAgfVxuICB9XG5cbiAgX3NldFRyYW5zbGF0ZShwb2ludCkge1xuICAgIHRoaXMuX3RyYW5zZm9ybVBvc2l0aW9uID0gcG9pbnRcbiAgICBjb25zdCB0cmFuc2xhdGVDc3MgPSBgdHJhbnNsYXRlM2QoJHtwb2ludC54fXB4LCAke3BvaW50Lnl9cHgsIDBweClgXG5cbiAgICBsZXQgdHJhbnNmb3JtID0gdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BlcnR5XVxuXG4gICAgaWYgKHRoaXMuc2hvdWxkUmVtb3ZlWmVyb1RyYW5zbGF0ZSAmJiBwb2ludC54ID09PSAwICYmIHBvaW50LnkgPT09IDApIHtcbiAgICAgIHRyYW5zZm9ybSA9IHRyYW5zZm9ybS5yZXBsYWNlKC90cmFuc2xhdGUzZFxcKFteKV0rXFwpLywgJycpXG4gICAgfSBlbHNlIGlmICghL3RyYW5zbGF0ZTNkXFwoW14pXStcXCkvLnRlc3QodHJhbnNmb3JtKSkge1xuICAgICAgaWYgKHRyYW5zZm9ybSkge1xuICAgICAgICB0cmFuc2Zvcm0gKz0gJyAnXG4gICAgICB9XG4gICAgICB0cmFuc2Zvcm0gKz0gdHJhbnNsYXRlQ3NzXG4gICAgfSBlbHNlIHtcbiAgICAgIHRyYW5zZm9ybSA9IHRyYW5zZm9ybS5yZXBsYWNlKC90cmFuc2xhdGUzZFxcKFteKV0rXFwpLywgdHJhbnNsYXRlQ3NzKVxuICAgIH1cblxuICAgIGlmICh0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcGVydHldICE9PSB0cmFuc2Zvcm0pIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wZXJ0eV0gPSB0cmFuc2Zvcm1cbiAgICB9XG4gIH1cblxuICBtb3ZlKHBvaW50LCB0aW1lPTAsIGlzU2lsZW50PWZhbHNlKSB7XG4gICAgcG9pbnQgPSBwb2ludC5jbG9uZSgpXG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvaW50XG5cbiAgICB0aGlzLl9zZXRUcmFuc2l0aW9uKHRpbWUpXG4gICAgdGhpcy5fc2V0VHJhbnNsYXRlKHBvaW50LnN1Yih0aGlzLm9mZnNldCkpXG5cbiAgICBpZiAoIWlzU2lsZW50KSB7XG4gICAgICB0aGlzLmVtaXQoJ2RyYWc6bW92ZScpXG4gICAgfVxuICB9XG5cbiAgcGluUG9zaXRpb24ocG9pbnQsIHRpbWU9MCwgc2lsZW50PXRydWUpIHtcbiAgICB0aGlzLnBpbm5lZFBvc2l0aW9uID0gcG9pbnQuY2xvbmUoKVxuICAgIHRoaXMubW92ZSh0aGlzLnBpbm5lZFBvc2l0aW9uLCB0aW1lLCBzaWxlbnQpXG4gIH1cblxuICByZXNldFBvc2l0aW9uVG9Jbml0aWFsICgpIHtcbiAgICB0aGlzLnBpblBvc2l0aW9uKHRoaXMuaW5pdGlhbFBvc2l0aW9uKVxuICB9XG5cbiAgcmVmcmVzaFBvc2l0aW9uICgpIHtcbiAgICB0aGlzLnNldFBvc2l0aW9uKHRoaXMuZ2V0UG9zaXRpb24oKSlcbiAgfVxuXG4gIHNldFBvc2l0aW9uKHBvaW50KSB7XG4gICAgcG9pbnQgPSBwb2ludC5jbG9uZSgpXG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvaW50XG4gICAgdGhpcy5fc2V0VHJhbnNpdGlvbigwKVxuICAgIHRoaXMuX3NldFRyYW5zbGF0ZShwb2ludC5zdWIodGhpcy5vZmZzZXQpKVxuICB9XG5cbiAgZGV0ZXJtaW5lRGlyZWN0aW9uKHBvaW50KSB7XG4gICAgdGhpcy5fcHJldmlvdXNEaXJlY3Rpb25Qb3NpdGlvbiB8fD0gdGhpcy5fc3RhcnRQb3NpdGlvblxuXG4gICAgdGhpcy5sZWZ0RGlyZWN0aW9uID0gKHRoaXMuX3ByZXZpb3VzRGlyZWN0aW9uUG9zaXRpb24ueCA8IHBvaW50LngpXG4gICAgdGhpcy5yaWdodERpcmVjdGlvbiA9ICh0aGlzLl9wcmV2aW91c0RpcmVjdGlvblBvc2l0aW9uLnggPiBwb2ludC54KVxuICAgIHRoaXMudXBEaXJlY3Rpb24gPSAodGhpcy5fcHJldmlvdXNEaXJlY3Rpb25Qb3NpdGlvbi55ID4gcG9pbnQueSlcbiAgICB0aGlzLmRvd25EaXJlY3Rpb24gPSAodGhpcy5fcHJldmlvdXNEaXJlY3Rpb25Qb3NpdGlvbi55IDwgcG9pbnQueSlcblxuICAgIHRoaXMuX3ByZXZpb3VzRGlyZWN0aW9uUG9zaXRpb24gPSBwb2ludFxuICB9XG5cbiAgc2VlbXNTY3JvbGxpbmcoKSB7XG4gICAgcmV0dXJuICgrbmV3IERhdGUoKSAtIHRoaXMuX3N0YXJ0VG91Y2hUaW1lc3RhbXApIDwgdGhpcy50b3VjaERyYWdnaW5nVGhyZXNob2xkXG4gIH1cblxuICBzaG91bGRVc2VOYXRpdmVEcmFnQW5kRHJvcCgpIHtcbiAgICBpZiAodGhpcy5pc1RvdWNoRXZlbnQpIHtcbiAgICAgIHJldHVybiB0aGlzLm5hdGl2ZURyYWdBbmREcm9wICYmIHRoaXMuZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wT25Ub3VjaFxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5uYXRpdmVEcmFnQW5kRHJvcFxuICAgIH1cbiAgfVxuXG4gIGRyYWdTdGFydChldmVudCkge1xuICAgIGlmICghdGhpcy5fZW5hYmxlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5zdG9wUHJvcGFnYXRpb25PbkRyYWdTdGFydCkge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICB9XG5cbiAgICB0aGlzLmlzVG91Y2hFdmVudCA9IChpc1RvdWNoICYmIChldmVudCBpbnN0YW5jZW9mIHdpbmRvdy5Ub3VjaEV2ZW50KSlcblxuICAgIHRoaXMudG91Y2hQb2ludCA9IHRoaXMuX3N0YXJ0VG91Y2hQb2ludCA9IG5ldyBQb2ludChcbiAgICAgIHRoaXMuaXNUb3VjaEV2ZW50ID8gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVggOiBldmVudC5jbGllbnRYLFxuICAgICAgdGhpcy5pc1RvdWNoRXZlbnQgPyBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWSA6IGV2ZW50LmNsaWVudFlcbiAgICApXG5cbiAgICB0aGlzLl9zdGFydFBvc2l0aW9uID0gdGhpcy5nZXRQb3NpdGlvbigpXG4gICAgaWYgKHRoaXMuaXNUb3VjaEV2ZW50KSB7XG4gICAgICB0aGlzLl90b3VjaElkID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uaWRlbnRpZmllclxuICAgICAgdGhpcy5fc3RhcnRUb3VjaFRpbWVzdGFtcCA9ICtuZXcgRGF0ZSgpXG4gICAgfVxuXG4gICAgdGhpcy5fc3RhcnRXaW5kb3dTY3JvbGxQb2ludCA9IHRoaXMud2luZG93U2Nyb2xsUG9pbnRcbiAgICB0aGlzLl9zdGFydFBhcmVudHNTY3JvbGxQb2ludCA9IHRoaXMucGFyZW50c1Njcm9sbFBvaW50XG5cbiAgICBpZiAoZXZlbnQudGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJbnB1dEVsZW1lbnQgfHxcbiAgICAgICAgICBldmVudC50YXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElucHV0RWxlbWVudCkge1xuICAgICAgZXZlbnQudGFyZ2V0LmZvY3VzKClcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zaG91bGRVc2VOYXRpdmVEcmFnQW5kRHJvcCgpKSB7XG4gICAgICBpZiAodGhpcy5pc1RvdWNoRXZlbnQgJiYgdGhpcy5lbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3BPblRvdWNoKSB7XG4gICAgICAgIGNvbnN0IGVtdWxhdGVPbkZpcnN0TW92ZSA9IChldmVudCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLnNlZW1zU2Nyb2xsaW5nKCkpIHtcbiAgICAgICAgICAgIHRoaXMuY2FuY2VsRHJhZ2dpbmcoKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcChldmVudClcbiAgICAgICAgICB9XG4gICAgICAgICAgY2FuY2VsRW11bGF0aW9uKClcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjYW5jZWxFbXVsYXRpb24gPSAoKSA9PiB7XG4gICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCBlbXVsYXRlT25GaXJzdE1vdmUpXG4gICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIGNhbmNlbEVtdWxhdGlvbilcbiAgICAgICAgfVxuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgZW11bGF0ZU9uRmlyc3RNb3ZlLCBwYXNzaXZlRmFsc2UpXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCBjYW5jZWxFbXVsYXRpb24sIHBhc3NpdmVGYWxzZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCB0aGlzLl9uYXRpdmVEcmFnU3RhcnQpXG4gICAgICAgIHRoaXMuZWxlbWVudC5kcmFnZ2FibGUgPSB0cnVlXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9uYXRpdmVEcmFnRW5kLCBwYXNzaXZlRmFsc2UpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUsIHBhc3NpdmVGYWxzZSlcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUsIHBhc3NpdmVGYWxzZSlcblxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQsIHBhc3NpdmVGYWxzZSlcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kLCBwYXNzaXZlRmFsc2UpXG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX3Njcm9sbClcbiAgICB0aGlzLnBhcmVudHMuZm9yRWFjaCgocCkgPT4gcC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9zY3JvbGwpKVxuXG4gICAgdGhpcy5lbWl0KCdkcmFnOnN0YXJ0JylcbiAgfVxuXG4gIGRyYWdNb3ZlKGV2ZW50KSB7XG4gICAgbGV0IHRvdWNoXG5cbiAgICB0aGlzLmlzRHJhZ2dpbmcgPSB0cnVlXG5cbiAgICB0aGlzLmlzVG91Y2hFdmVudCA9IChpc1RvdWNoICYmIChldmVudCBpbnN0YW5jZW9mIHdpbmRvdy5Ub3VjaEV2ZW50KSlcbiAgICBpZiAodGhpcy5pc1RvdWNoRXZlbnQpIHtcbiAgICAgIHRvdWNoID0gZ2V0VG91Y2hCeUlEKGV2ZW50LCB0aGlzLl90b3VjaElkKVxuXG4gICAgICBpZiAoIXRvdWNoKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5zZWVtc1Njcm9sbGluZygpKSB7XG4gICAgICAgIHRoaXMuY2FuY2VsRHJhZ2dpbmcoKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB0aGlzLnRvdWNoUG9pbnQgPSBuZXcgUG9pbnQoXG4gICAgICB0aGlzLmlzVG91Y2hFdmVudCA/IHRvdWNoLnBhZ2VYIDogZXZlbnQuY2xpZW50WCxcbiAgICAgIHRoaXMuaXNUb3VjaEV2ZW50ID8gdG91Y2gucGFnZVkgOiBldmVudC5jbGllbnRZXG4gICAgKVxuXG4gICAgbGV0IHBvaW50ID0gdGhpcy5fc3RhcnRQb3NpdGlvbi5hZGQodGhpcy50b3VjaFBvaW50LnN1Yih0aGlzLl9zdGFydFRvdWNoUG9pbnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMud2luZG93U2Nyb2xsUG9pbnQuc3ViKHRoaXMuX3N0YXJ0V2luZG93U2Nyb2xsUG9pbnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMucGFyZW50c1Njcm9sbFBvaW50LnN1Yih0aGlzLl9zdGFydFBhcmVudHNTY3JvbGxQb2ludCkpXG5cbiAgICBwb2ludCA9IHRoaXMuYm91bmRpbmcuYm91bmQocG9pbnQsIHRoaXMuZ2V0U2l6ZSgpKVxuICAgIHRoaXMuZGV0ZXJtaW5lRGlyZWN0aW9uKHBvaW50KVxuICAgIHRoaXMubW92ZShwb2ludClcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZHJhZ2VlLWFjdGl2ZScpXG4gIH1cblxuICBkcmFnRW5kKGV2ZW50KSB7XG4gICAgdGhpcy5pc1RvdWNoRXZlbnQgPSAoaXNUb3VjaCAmJiAoZXZlbnQgaW5zdGFuY2VvZiB3aW5kb3cuVG91Y2hFdmVudCkpXG5cbiAgICBpZiAodGhpcy5pc1RvdWNoRXZlbnQgJiYgIWdldFRvdWNoQnlJRChldmVudCwgdGhpcy5fdG91Y2hJZCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLmlzRHJhZ2dpbmcpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfVxuXG4gICAgdGhpcy5kcmFnRW5kQWN0aW9uKClcbiAgICB0aGlzLmVtaXQoJ2RyYWc6ZW5kJylcbiAgICB0aGlzLmNhbmNlbERyYWdnaW5nKClcblxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdlZS1hY3RpdmUnKSlcbiAgfVxuXG4gIG9uU2Nyb2xsKF9ldmVudCkge1xuICAgIGxldCBwb2ludCA9IHRoaXMuX3N0YXJ0UG9zaXRpb24uYWRkKHRoaXMudG91Y2hQb2ludC5zdWIodGhpcy5fc3RhcnRUb3VjaFBvaW50KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZCh0aGlzLndpbmRvd1Njcm9sbFBvaW50LnN1Yih0aGlzLl9zdGFydFdpbmRvd1Njcm9sbFBvaW50KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZCh0aGlzLnBhcmVudHNTY3JvbGxQb2ludC5zdWIodGhpcy5fc3RhcnRQYXJlbnRzU2Nyb2xsUG9pbnQpKVxuXG4gICAgcG9pbnQgPSB0aGlzLmJvdW5kaW5nLmJvdW5kKHBvaW50LCB0aGlzLmdldFNpemUoKSlcbiAgICBpZiAoIXRoaXMubmF0aXZlRHJhZ0FuZERyb3ApIHtcbiAgICAgIHRoaXMuZGV0ZXJtaW5lRGlyZWN0aW9uKHBvaW50KVxuICAgICAgdGhpcy5tb3ZlKHBvaW50KVxuICAgIH1cbiAgfVxuXG4gIG5hdGl2ZURyYWdTdGFydChldmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQnLCAnRmlyZUZveCBmaXgnKVxuICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gJ21vdmUnXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCB0aGlzLl9uYXRpdmVEcmFnT3ZlcilcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgdGhpcy5fbmF0aXZlRHJvcClcbiAgfVxuXG4gIG5hdGl2ZURyYWdPdmVyKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gJ21vdmUnXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RyYWdlZS1wbGFjZWhvbGRlcicpXG4gICAgaWYgKGV2ZW50LmNsaWVudFggPT09IDAgJiYgZXZlbnQuY2xpZW50WSA9PT0gMCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy50b3VjaFBvaW50ID0gbmV3IFBvaW50KGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpXG4gICAgbGV0IHBvaW50ID0gdGhpcy5fc3RhcnRQb3NpdGlvbi5hZGQodGhpcy50b3VjaFBvaW50LnN1Yih0aGlzLl9zdGFydFRvdWNoUG9pbnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMud2luZG93U2Nyb2xsUG9pbnQuc3ViKHRoaXMuX3N0YXJ0V2luZG93U2Nyb2xsUG9pbnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMucGFyZW50c1Njcm9sbFBvaW50LnN1Yih0aGlzLl9zdGFydFBhcmVudHNTY3JvbGxQb2ludCkpXG4gICAgcG9pbnQgPSB0aGlzLmJvdW5kaW5nLmJvdW5kKHBvaW50LCB0aGlzLmdldFNpemUoKSlcbiAgICB0aGlzLmRldGVybWluZURpcmVjdGlvbihwb2ludClcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9pbnRcbiAgICB0aGlzLmVtaXQoJ2RyYWc6bW92ZScpXG4gIH1cblxuICBuYXRpdmVEcmFnRW5kKF9ldmVudCkge1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZWUtcGxhY2Vob2xkZXInKVxuICAgIHRoaXMuZHJhZ0VuZEFjdGlvbigpXG4gICAgdGhpcy5lbWl0KCdkcmFnOmVuZCcpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCB0aGlzLl9uYXRpdmVEcmFnT3ZlcilcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcm9wJywgdGhpcy5fbmF0aXZlRHJvcClcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fc2Nyb2xsKVxuICAgIHRoaXMucGFyZW50cy5mb3JFYWNoKChwKSA9PiBwLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX3Njcm9sbCkpXG4gICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2VcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkcmFnZ2FibGUnKVxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCB0aGlzLl9uYXRpdmVEcmFnU3RhcnQpXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdlZS1hY3RpdmUnKVxuICB9XG5cbiAgbmF0aXZlRHJvcChldmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgY2FuY2VsRHJhZ2dpbmcgKCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcblxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX25hdGl2ZURyYWdFbmQpXG5cbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fc2Nyb2xsKVxuICAgIHRoaXMucGFyZW50cy5mb3JFYWNoKChwKSA9PiBwLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX3Njcm9sbCkpXG5cbiAgICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZVxuICAgIHRoaXMuX3ByZXZpb3VzRGlyZWN0aW9uUG9zaXRpb24gPSBudWxsXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnZHJhZ2dhYmxlJylcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgdGhpcy5fbmF0aXZlRHJhZ1N0YXJ0KVxuICB9XG5cbiAgY29weVN0eWxlcyhzb3VyY2UsIGRlc3RpbmF0aW9uKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5jb3B5U3R5bGVzKSB7XG4gICAgICB0aGlzLm9wdGlvbnMuY29weVN0eWxlcyhzb3VyY2UsIGRlc3RpbmF0aW9uKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb3B5U3R5bGVzKHNvdXJjZSwgZGVzdGluYXRpb24pXG4gICAgfVxuICB9XG5cbiAgZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wKGV2ZW50KSB7XG4gICAgY29uc3QgY29udGFpbmVyUmVjdCA9IHRoaXMuY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgY29uc3QgY2xvbmVkRWxlbWVudCA9IHRoaXMuZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSlcbiAgICBjbG9uZWRFbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BlcnR5XSA9ICcnXG4gICAgdGhpcy5jb3B5U3R5bGVzKHRoaXMuZWxlbWVudCwgY2xvbmVkRWxlbWVudClcbiAgICBjbG9uZWRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RyYWdlZS1uYXRpdmUtZW11bGF0aW9uJylcbiAgICBjbG9uZWRFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJ1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2xvbmVkRWxlbWVudClcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZHJhZ2VlLXBsYWNlaG9sZGVyJylcblxuICAgIGNvbnN0IGVtdWxhdGlvbkRyYWdnYWJsZSA9IG5ldyBEcmFnZ2FibGUoY2xvbmVkRWxlbWVudCwge1xuICAgICAgY29udGFpbmVyOiBkb2N1bWVudC5ib2R5LFxuICAgICAgdG91Y2hEcmFnZ2luZ1RocmVzaG9sZDogMCxcbiAgICAgIGJvdW5kKHBvaW50KSB7XG4gICAgICAgIHJldHVybiBwb2ludFxuICAgICAgfSxcbiAgICAgIG9uOiB7XG4gICAgICAgICdkcmFnOm1vdmUnOiAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgY29udGFpbmVyUmVjdFBvaW50ID0gbmV3IFBvaW50KGNvbnRhaW5lclJlY3QubGVmdCwgY29udGFpbmVyUmVjdC50b3ApXG4gICAgICAgICAgdGhpcy5wb3NpdGlvbiA9IGVtdWxhdGlvbkRyYWdnYWJsZS5wb3NpdGlvbi5zdWIoY29udGFpbmVyUmVjdFBvaW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3ViKHRoaXMuX3N0YXJ0V2luZG93U2Nyb2xsUG9pbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy5fc3RhcnRQYXJlbnRzU2Nyb2xsUG9pbnQpXG5cbiAgICAgICAgICB0aGlzLmRldGVybWluZURpcmVjdGlvbih0aGlzLnBvc2l0aW9uKVxuICAgICAgICAgIHRoaXMuZW1pdCgnZHJhZzptb3ZlJylcbiAgICAgICAgfSxcbiAgICAgICAgJ2RyYWc6ZW5kJzogKCkgPT4ge1xuICAgICAgICAgIGVtdWxhdGlvbkRyYWdnYWJsZS5kZXN0cm95KClcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGNsb25lZEVsZW1lbnQpXG4gICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdlZS1wbGFjZWhvbGRlcicpXG4gICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdlZS1hY3RpdmUnKVxuXG4gICAgICAgICAgdGhpcy5lbWl0KCdkcmFnOmVuZCcpXG4gICAgICAgICAgdGhpcy5kcmFnRW5kQWN0aW9uKClcbiAgICAgICAgICB0aGlzLmNhbmNlbERyYWdnaW5nKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBjb250YWluZXJSZWN0UG9pbnQgPSBuZXcgUG9pbnQoY29udGFpbmVyUmVjdC5sZWZ0LCBjb250YWluZXJSZWN0LnRvcClcbiAgICBlbXVsYXRpb25EcmFnZ2FibGUuX3N0YXJ0V2luZG93U2Nyb2xsUG9pbnQgPSB0aGlzLl9zdGFydFdpbmRvd1Njcm9sbFBvaW50XG5cbiAgICBlbXVsYXRpb25EcmFnZ2FibGUubW92ZShcbiAgICAgIHRoaXMucGlubmVkUG9zaXRpb24uYWRkKGNvbnRhaW5lclJlY3RQb2ludClcbiAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMud2luZG93U2Nyb2xsUG9pbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgLnN1Yih0aGlzLnBhcmVudHNTY3JvbGxQb2ludClcbiAgICApXG5cbiAgICBlbXVsYXRpb25EcmFnZ2FibGUuZHJhZ1N0YXJ0KGV2ZW50KVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIGRyYWdFbmRBY3Rpb24oKSB7XG4gICAgdGhpcy5waW5Qb3NpdGlvbih0aGlzLnBvc2l0aW9uKVxuICB9XG5cbiAgZ2V0UmVjdGFuZ2xlKCkge1xuICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHRoaXMucG9zaXRpb24sIHRoaXMuZ2V0U2l6ZSgpKVxuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICBpZiAodGhpcy5ib3VuZGluZy5yZWZyZXNoKSB7XG4gICAgICB0aGlzLmJvdW5kaW5nLnJlZnJlc2goKVxuICAgIH1cbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5oYW5kbGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydClcbiAgICB0aGlzLmhhbmRsZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0KVxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCB0aGlzLl9uYXRpdmVEcmFnU3RhcnQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgdGhpcy5fbmF0aXZlRHJhZ092ZXIpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIHRoaXMuX25hdGl2ZURyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX25hdGl2ZURyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJvcCcsIHRoaXMuX25hdGl2ZURyb3ApXG4gICAgdGhpcy5yZXNldEVtaXR0ZXIoKVxuXG4gICAgY29uc3QgaW5kZXggPSBkcmFnZ2FibGVzLmluZGV4T2YodGhpcylcbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgZHJhZ2dhYmxlcy5zcGxpY2UoaW5kZXgsIDEpXG4gICAgfVxuICB9XG5cbiAgZ2V0IGNvbnRhaW5lcigpIHtcbiAgICByZXR1cm4gKHRoaXMuX2NvbnRhaW5lciA9IHRoaXMuX2NvbnRhaW5lciB8fCB0aGlzLm9wdGlvbnMuY29udGFpbmVyIHx8IHRoaXMub3B0aW9ucy5wYXJlbnQgfHwgZ2V0RGVmYXVsdENvbnRhaW5lcih0aGlzLmVsZW1lbnQpKVxuICB9XG5cbiAgZ2V0IGhhbmRsZXIoKSB7XG4gICAgaWYgKCF0aGlzLl9oYW5kbGVyKSB7XG4gICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5oYW5kbGVyID09PSAnc3RyaW5nJykge1xuICAgICAgICB0aGlzLl9oYW5kbGVyID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5vcHRpb25zLmhhbmRsZXIpIHx8IHRoaXMuZWxlbWVudFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5faGFuZGxlciA9IHRoaXMub3B0aW9ucy5oYW5kbGVyIHx8IHRoaXMuZWxlbWVudFxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9oYW5kbGVyXG4gIH1cblxuICBnZXQgc3RvcFByb3BhZ2F0aW9uT25EcmFnU3RhcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5zdG9wUHJvcGFnYXRpb25PbkRyYWdTdGFydCB8fCBmYWxzZVxuICB9XG5cbiAgZ2V0IG5hdGl2ZURyYWdBbmREcm9wKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMubmF0aXZlRHJhZ0FuZERyb3AgfHwgZmFsc2VcbiAgfVxuXG4gIGdldCBlbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3BPblRvdWNoKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wT25Ub3VjaCB8fCBmYWxzZVxuICB9XG5cbiAgZ2V0IHNob3VsZFJlbW92ZVplcm9UcmFuc2xhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5zaG91bGRSZW1vdmVaZXJvVHJhbnNsYXRlIHx8IGZhbHNlXG4gIH1cblxuICBnZXQgdG91Y2hEcmFnZ2luZ1RocmVzaG9sZCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLnRvdWNoRHJhZ2dpbmdUaHJlc2hvbGQgfHwgMFxuICB9XG5cbiAgZ2V0IGRyYWdPdmVyVGhyb3R0bGVEdXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmRyYWdPdmVyVGhyb3R0bGVEdXJhdGlvbiB8fCAxNlxuICB9XG5cbiAgZ2V0IHdpbmRvd1Njcm9sbFBvaW50KCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQod2luZG93LnNjcm9sbFgsIHdpbmRvdy5zY3JvbGxZKVxuICB9XG5cbiAgZ2V0IHBhcmVudHMoKSB7XG4gICAgaWYgKHRoaXMuX2NhY2hlZFBhcmVudHMpIHJldHVybiB0aGlzLl9jYWNoZWRQYXJlbnRzXG5cbiAgICB0aGlzLl9jYWNoZWRQYXJlbnRzID0gW11cbiAgICBsZXQgZWxlbWVudCA9IHRoaXMuZWxlbWVudFxuXG4gICAgd2hpbGUoZWxlbWVudC5wYXJlbnROb2RlICYmIGVsZW1lbnQgIT0gdGhpcy5jb250YWluZXIpIHtcbiAgICAgIHRoaXMuX2NhY2hlZFBhcmVudHMudW5zaGlmdChlbGVtZW50LnBhcmVudE5vZGUpO1xuICAgICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fY2FjaGVkUGFyZW50c1xuICB9XG5cbiAgZ2V0IHBhcmVudHNTY3JvbGxQb2ludCgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KFxuICAgICAgdGhpcy5wYXJlbnRzLnJlZHVjZSgoc3VtLCBwKSA9PiBzdW0gKyBwLnNjcm9sbExlZnQsIDApLFxuICAgICAgdGhpcy5wYXJlbnRzLnJlZHVjZSgoc3VtLCBwKSA9PiBzdW0gKyBwLnNjcm9sbFRvcCwgMClcbiAgICApXG4gIH1cblxuICBnZXQgZW5hYmxlKCkge1xuICAgIHJldHVybiB0aGlzLl9lbmFibGVcbiAgfVxuXG4gIHNldCBlbmFibGUoZW5hYmxlKSB7XG4gICAgaWYgKGVuYWJsZSkge1xuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdlZS1kaXNhYmxlJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RyYWdlZS1kaXNhYmxlJylcbiAgICB9XG5cbiAgICB0aGlzLl9lbmFibGUgPSBlbmFibGVcbiAgfVxufVxuXG5EcmFnZ2FibGUuZW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuRHJhZ2dhYmxlLmVtaXR0ZXIub24oJ2RyYWdnYWJsZTpjcmVhdGUnLCBhZGRUb0RlZmF1bHRTY29wZSlcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQsIGltbWVkaWF0ZSkge1xuICBsZXQgdGltZW91dFxuXG4gIHJldHVybiBmdW5jdGlvbiBleGVjdXRlZEZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzXG4gICAgY29uc3QgYXJncyA9IGFyZ3VtZW50c1xuXG4gICAgY29uc3QgbGF0ZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgIHRpbWVvdXQgPSBudWxsXG4gICAgICBpZiAoIWltbWVkaWF0ZSkgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKVxuICAgIH1cblxuICAgIGNvbnN0IGNhbGxOb3cgPSBpbW1lZGlhdGUgJiYgIXRpbWVvdXRcblxuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KVxuXG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpXG5cbiAgICBpZiAoY2FsbE5vdykgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKVxuICB9XG59XG4iLCJpbXBvcnQgZGVib3VuY2UgZnJvbSAnLi91dGlscy9kZWJvdW5jZSdcbmltcG9ydCByZW1vdmVJdGVtIGZyb20gJy4vdXRpbHMvcmVtb3ZlLWFycmF5LWl0ZW0nXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnRFbWl0dGVyJ1xuaW1wb3J0IHtcbiAgZ2V0RGlzdGFuY2UsXG4gIGluZGV4T2ZOZWFyZXN0UG9pbnRcbn0gZnJvbSAnLi9nZW9tZXRyeS9kaXN0YW5jZXMnXG5cbmltcG9ydCBEcmFnZ2FibGUgZnJvbSAnLi9kcmFnZ2FibGUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3QgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvcihkcmFnZ2FibGVzLCBvcHRpb25zPXt9KSB7XG4gICAgc3VwZXIob3B0aW9ucylcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHRpbWVFbmQ6IDIwMCxcbiAgICAgIHRpbWVFeGNhbmdlOiA0MDAsXG4gICAgICByYWRpdXM6IDMwXG4gICAgfSwgb3B0aW9ucylcblxuICAgIHRoaXMuY29udGFpbmVyID0gb3B0aW9ucy5jb250YWluZXJcbiAgICB0aGlzLmRyYWdnYWJsZXMgPSBkcmFnZ2FibGVzXG4gICAgdGhpcy5jaGFuZ2VkRHVyaW5nSXRlcmF0aW9uID0gZmFsc2VcblxuICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoZGVib3VuY2UodGhpcy5vblJlc2l6ZS5iaW5kKHRoaXMpLCAxMDApKVxuXG4gICAgaWYgKHRoaXMuY29udGFpbmVyKSB7XG4gICAgICB0aGlzLnJlc2l6ZU9ic2VydmVyLm9ic2VydmUodGhpcy5jb250YWluZXIpXG4gICAgfVxuXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIG9uUmVzaXplKCkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMucmVvcmRlck9uQ2hhbmdlKSB0aGlzLnJlc2V0KClcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBpZighZHJhZ2dhYmxlLmlzRHJhZ2dpbmcpIHtcbiAgICAgICAgZHJhZ2dhYmxlLnN0YXJ0UG9zaXRpb25pbmcoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuX2VuYWJsZSA9IHRydWVcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB0aGlzLmluaXREcmFnZ2FibGUoZHJhZ2dhYmxlKSlcbiAgfVxuXG4gIGluaXREcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgZHJhZ2dhYmxlLmVuYWJsZSA9IHRoaXMuX2VuYWJsZVxuICAgIGRyYWdnYWJsZS5vbignZHJhZzptb3ZlJywgKCkgPT4gdGhpcy5vbk1vdmUoZHJhZ2dhYmxlKSlcbiAgICBkcmFnZ2FibGUuZHJhZ0VuZEFjdGlvbiA9ICgpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5waW5Qb3NpdGlvbihkcmFnZ2FibGUucGlubmVkUG9zaXRpb24sIHRoaXMub3B0aW9ucy50aW1lRW5kKVxuICAgICAgdGhpcy5vbkVuZChkcmFnZ2FibGUpXG4gICAgfVxuICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZShkcmFnZ2FibGUuZWxlbWVudClcbiAgfVxuXG4gIHJlbGVhc2VEcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgdGhpcy5yZXNpemVPYnNlcnZlci51bm9ic2VydmUoZHJhZ2dhYmxlLmVsZW1lbnQpXG4gICAgZHJhZ2dhYmxlLnJlc2V0T24oJ2RyYWc6ZW5kJylcbiAgICBkcmFnZ2FibGUucmVzZXRPbignZHJhZzptb3ZlJylcbiAgICByZW1vdmVJdGVtKHRoaXMuZHJhZ2dhYmxlcywgZHJhZ2dhYmxlKVxuICB9XG5cbiAgb25Nb3ZlKGRyYWdnYWJsZSkge1xuICAgIGlmICh0aGlzLnN3YXBwaW5nRGlzYWJsZWQpIHJldHVyblxuXG4gICAgY29uc3Qgc29ydGVkRHJhZ2dhYmxlcyA9IHRoaXMuZ2V0U29ydGVkRHJhZ2dhYmxlcygpXG4gICAgY29uc3QgcGlubmVkUG9zaXRpb25zID0gc29ydGVkRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uKVxuXG4gICAgY29uc3QgY3VycmVudEluZGV4ID0gc29ydGVkRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSlcbiAgICBjb25zdCB0YXJnZXRJbmRleCA9IGluZGV4T2ZOZWFyZXN0UG9pbnQocGlubmVkUG9zaXRpb25zLCBkcmFnZ2FibGUucG9zaXRpb24sIHRoaXMub3B0aW9ucy5yYWRpdXMsIHRoaXMuZGlzdGFuY2VGdW5jKVxuXG4gICAgaWYgKHRhcmdldEluZGV4ICE9PSAtMSAmJiBjdXJyZW50SW5kZXggIT09IHRhcmdldEluZGV4KSB7XG4gICAgICBpZiAodGFyZ2V0SW5kZXggPCBjdXJyZW50SW5kZXgpIHtcbiAgICAgICAgZm9yIChsZXQgaT10YXJnZXRJbmRleDsgaTxjdXJyZW50SW5kZXg7IGkrKykge1xuICAgICAgICAgIHNvcnRlZERyYWdnYWJsZXNbaV0ucGluUG9zaXRpb24ocGlubmVkUG9zaXRpb25zW2krMV0sIHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChsZXQgaT1jdXJyZW50SW5kZXg7IGk8dGFyZ2V0SW5kZXg7IGkrKykge1xuICAgICAgICAgIHNvcnRlZERyYWdnYWJsZXNbaSsxXS5waW5Qb3NpdGlvbihwaW5uZWRQb3NpdGlvbnNbaV0sIHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZHJhZ2dhYmxlLm5hdGl2ZURyYWdBbmREcm9wKSB7XG4gICAgICAgIGRyYWdnYWJsZS5waW5Qb3NpdGlvbihwaW5uZWRQb3NpdGlvbnNbdGFyZ2V0SW5kZXhdKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uID0gcGlubmVkUG9zaXRpb25zW3RhcmdldEluZGV4XVxuICAgICAgfVxuXG4gICAgICB0aGlzLmNoYW5nZWREdXJpbmdJdGVyYXRpb24gPSB0cnVlXG4gICAgfVxuICB9XG5cbiAgb25FbmQoZHJhZ2dhYmxlKSB7XG4gICAgaWYgKHRoaXMuY2hhbmdlZER1cmluZ0l0ZXJhdGlvbikge1xuICAgICAgdGhpcy5lbWl0KCdsaXN0OmNoYW5nZScpXG4gICAgICB0aGlzLmNoYW5nZWREdXJpbmdJdGVyYXRpb24gPSBmYWxzZVxuXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnJlb3JkZXJPbkNoYW5nZSAmJiB0aGlzLm9wdGlvbnMuY29udGFpbmVyKSB7XG4gICAgICAgIHRoaXMucmVvcmRlckVsZW1lbnRzKGRyYWdnYWJsZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW9yZGVyRWxlbWVudHMobW92ZWREcmFnZ2FibGUpIHtcbiAgICBjb25zdCBzb3J0ZWREcmFnZ2FibGVzID0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcbiAgICBjb25zdCBpbmRleCA9IHNvcnRlZERyYWdnYWJsZXMuaW5kZXhPZihtb3ZlZERyYWdnYWJsZSlcbiAgICBjb25zdCBuZXh0ID0gc29ydGVkRHJhZ2dhYmxlc1tpbmRleCArIDFdXG5cbiAgICB0aGlzLnJlc2V0KClcblxuICAgIGlmIChuZXh0KSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5pbnNlcnRCZWZvcmUobW92ZWREcmFnZ2FibGUuZWxlbWVudCwgbmV4dC5lbGVtZW50KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChtb3ZlZERyYWdnYWJsZS5lbGVtZW50KVxuICAgIH1cblxuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkKSA9PiBkLnN0YXJ0UG9zaXRpb25pbmcoKSlcbiAgICB0aGlzLmVtaXQoJ2xpc3Q6cmVvcmRlcmVkJylcbiAgfVxuXG4gIGdldEN1cnJlbnRQaW5uZWRQb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uLmNsb25lKCkpXG4gIH1cblxuICBnZXRTb3J0ZWREcmFnZ2FibGVzKCkge1xuICAgIHJldHVybiB0aGlzLmRyYWdnYWJsZXMuc29ydCh0aGlzLnNvcnRpbmcuYmluZCh0aGlzKSlcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5yZXNldFBvc2l0aW9uVG9Jbml0aWFsKCkpXG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5yZWZyZXNoKCkpXG4gIH1cblxuICBhZGQoZHJhZ2dhYmxlcykge1xuICAgIGlmICghKGRyYWdnYWJsZXMgaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICAgIGRyYWdnYWJsZXMgPSBbZHJhZ2dhYmxlc11cbiAgICB9XG4gICAgZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHRoaXMuaW5pdERyYWdnYWJsZShkcmFnZ2FibGUpKVxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IHRoaXMuZHJhZ2dhYmxlcy5jb25jYXQoZHJhZ2dhYmxlcylcbiAgfVxuXG4gIHJlbW92ZShkcmFnZ2FibGVzKSB7XG4gICAgY29uc3QgaW5pdGlhbFBvc2l0aW9ucyA9IHRoaXMuZHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLmluaXRpYWxQb3NpdGlvbilcbiAgICBjb25zdCBsaXN0ID0gW11cbiAgICBjb25zdCBzb3J0ZWREcmFnZ2FibGVzID0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcblxuICAgIGlmICghKGRyYWdnYWJsZXMgaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICAgIGRyYWdnYWJsZXMgPSBbZHJhZ2dhYmxlc11cbiAgICB9XG5cbiAgICBkcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gdGhpcy5yZWxlYXNlRHJhZ2dhYmxlKGRyYWdnYWJsZSkpXG5cbiAgICBsZXQgaiA9IDBcbiAgICBzb3J0ZWREcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgaWYgKHRoaXMuZHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkgIT09IC0xKSB7XG4gICAgICAgIGlmIChkcmFnZ2FibGUucGlubmVkUG9zaXRpb24gIT09IGluaXRpYWxQb3NpdGlvbnNbal0pIHtcbiAgICAgICAgICBkcmFnZ2FibGUucGluUG9zaXRpb24oaW5pdGlhbFBvc2l0aW9uc1tqXSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICB9XG4gICAgICAgIGRyYWdnYWJsZS5pbml0aWFsUG9zaXRpb24gPSBpbml0aWFsUG9zaXRpb25zW2pdXG4gICAgICAgIGorK1xuICAgICAgICBsaXN0LnB1c2goZHJhZ2dhYmxlKVxuICAgICAgfVxuICAgIH0pXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gbGlzdFxuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5yZW1vdmUodGhpcy5kcmFnZ2FibGVzLnNsaWNlKCkpXG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5kZXN0cm95KCkpXG4gICAgaWYgKHRoaXMuY29udGFpbmVyKSB7XG4gICAgICB0aGlzLnJlc2l6ZU9ic2VydmVyLnVub2JzZXJ2ZSh0aGlzLmNvbnRhaW5lcilcbiAgICB9XG4gIH1cblxuICBzb3J0aW5nKGRyYWdnYWJsZUEsIGRyYWdnYWJsZUIpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLnNvcnRpbmcpIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuc29ydGluZyhkcmFnZ2FibGVBLCBkcmFnZ2FibGVCKVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZHJhZ2dhYmxlQS5waW5uZWRQb3NpdGlvbi55IDwgZHJhZ2dhYmxlQi5waW5uZWRQb3NpdGlvbi55KSByZXR1cm4gLTFcbiAgICAgIGlmIChkcmFnZ2FibGVBLnBpbm5lZFBvc2l0aW9uLnkgPiBkcmFnZ2FibGVCLnBpbm5lZFBvc2l0aW9uLnkpIHJldHVybiAxXG4gICAgICBpZiAoZHJhZ2dhYmxlQS5waW5uZWRQb3NpdGlvbi54IDwgZHJhZ2dhYmxlQi5waW5uZWRQb3NpdGlvbi54KSByZXR1cm4gLTFcbiAgICAgIGlmIChkcmFnZ2FibGVBLnBpbm5lZFBvc2l0aW9uLnggPiBkcmFnZ2FibGVCLnBpbm5lZFBvc2l0aW9uLngpIHJldHVybiAxXG4gICAgICByZXR1cm4gMFxuICAgIH1cbiAgfVxuXG4gIGdldCBkaXN0YW5jZUZ1bmMoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5nZXREaXN0YW5jZSB8fCBnZXREaXN0YW5jZVxuICB9XG5cbiAgZ2V0IHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDdXJyZW50UGlubmVkUG9zaXRpb25zKClcbiAgfVxuXG4gIHNldCBwb3NpdGlvbnMocG9zaXRpb25zKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9ICd3cm9uZyBhcnJheSBsZW5ndGgnXG4gICAgaWYgKHBvc2l0aW9ucy5sZW5ndGggPT09IHRoaXMuZHJhZ2dhYmxlcy5sZW5ndGgpIHtcbiAgICAgIHBvc2l0aW9ucy5mb3JFYWNoKChwb2ludCwgaSkgPT4ge1xuICAgICAgICB0aGlzLmRyYWdnYWJsZXNbaV0ucGluUG9zaXRpb24ocG9pbnQpXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBtZXNzYWdlXG4gICAgfVxuICB9XG5cbiAgZ2V0IGVuYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlXG4gIH1cblxuICBzZXQgZW5hYmxlKGVuYWJsZSkge1xuICAgIHRoaXMuX2VuYWJsZSA9IGVuYWJsZVxuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5lbmFibGUgPSBlbmFibGVcbiAgICB9KVxuICB9XG5cbiAgZ2V0IHN3YXBwaW5nRGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N3YXBwaW5nRGlzYWJsZWRcbiAgfVxuXG4gIHNldCBzd2FwcGluZ0Rpc2FibGVkKGRpc2FibGVkKSB7XG4gICAgdGhpcy5fc3dhcHBpbmdEaXNhYmxlZCA9IGRpc2FibGVkXG4gIH1cblxuICBzdGF0aWMgZmFjdG9yeShjb250YWluZXJFbGVtZW50LCBlbGVtZW50cywgb3B0aW9ucz17fSkge1xuICAgIGNvbnN0IGRyYWdnYWJsZXMgPSBBcnJheS5mcm9tKGVsZW1lbnRzKS5tYXAoKGVsZW1lbnQpID0+IHtcbiAgICAgIHJldHVybiBuZXcgRHJhZ2dhYmxlKGVsZW1lbnQsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBjb250YWluZXI6IGNvbnRhaW5lckVsZW1lbnRcbiAgICAgIH0sIG9wdGlvbnMuZHJhZ2dhYmxlIHx8IHt9KSlcbiAgICB9KVxuXG4gICAgcmV0dXJuIG5ldyBMaXN0KGRyYWdnYWJsZXMsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgY29udGFpbmVyOiBjb250YWluZXJFbGVtZW50XG4gICAgfSwgb3B0aW9ucy5saXN0IHx8IHt9KSlcbiAgfVxufVxuIiwiaW1wb3J0IExpc3QgZnJvbSAnLi9saXN0J1xuaW1wb3J0IHsgaW5kZXhPZk5lYXJlc3RQb2ludCwgZ2V0WURpZmZlcmVuY2UgfSBmcm9tICcuL2dlb21ldHJ5L2Rpc3RhbmNlcydcbmltcG9ydCBQb2ludCBmcm9tICcuL2dlb21ldHJ5L3BvaW50J1xuXG5pbXBvcnQgRHJhZ2dhYmxlIGZyb20gJy4vZHJhZ2dhYmxlJ1xuXG5jb25zdCBhcnJheU1vdmUgPSAoYXJyYXksIGZyb20sIHRvKSA9PiB7XG4gIGFycmF5LnNwbGljZSh0byA8IDAgPyBhcnJheS5sZW5ndGggKyB0byA6IHRvLCAwLCBhcnJheS5zcGxpY2UoZnJvbSwgMSlbMF0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1YmJsaW5nTGlzdCBleHRlbmRzIExpc3Qge1xuICBhdXRvRGV0ZWN0VmVydGljYWxHYXAoKSB7XG4gICAgaWYgKCF0aGlzLl92ZXJ0aWNhbEdhcCAmJiAhdGhpcy5vcHRpb25zLnZlcnRpY2FsR2FwICYmIHRoaXMuZHJhZ2dhYmxlcy5sZW5ndGggPj0gMikge1xuICAgICAgY29uc3Qgc29ydGVkID0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcbiAgICAgIHRoaXMuX3ZlcnRpY2FsR2FwID0gc29ydGVkWzFdLnBpbm5lZFBvc2l0aW9uLnkgLSBzb3J0ZWRbMF0ucGlubmVkUG9zaXRpb24ueSAtIHNvcnRlZFswXS5nZXRTaXplKCkueVxuICAgIH1cbiAgfVxuXG4gIGF1dG9EZXRlY3RTdGFydFBvc2l0aW9uKCkge1xuICAgIGlmICh0aGlzLmRyYWdnYWJsZXMubGVuZ3RoID49IDEgJiYgIXRoaXMuc3RhcnRQb3NpdGlvbikge1xuICAgICAgdGhpcy5zdGFydFBvc2l0aW9uID0gdGhpcy5kcmFnZ2FibGVzWzBdLnBpbm5lZFBvc2l0aW9uXG4gICAgfVxuICB9XG5cbiAgaW5pdERyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICBzdXBlci5pbml0RHJhZ2dhYmxlKGRyYWdnYWJsZSlcbiAgICBkcmFnZ2FibGUub24oJ2RyYWc6c3RhcnQnLCAoKSA9PiB0aGlzLm9uRHJhZ1N0YXJ0KGRyYWdnYWJsZSkpXG4gIH1cblxuICBvbkRyYWdTdGFydChkcmFnZ2FibGUpIHtcbiAgICB0aGlzLmF1dG9EZXRlY3RWZXJ0aWNhbEdhcCgpXG4gICAgdGhpcy5hdXRvRGV0ZWN0U3RhcnRQb3NpdGlvbigpXG4gICAgdGhpcy5jYWNoZWRTb3J0ZWREcmFnZ2FibGVzID0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcbiAgICB0aGlzLmluZGV4T2ZBY3RpdmVEcmFnZ2FibGUgPSB0aGlzLmNhY2hlZFNvcnRlZERyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpXG4gIH1cblxuICBvbk1vdmUoZHJhZ2dhYmxlKSB7XG4gICAgaWYgKHRoaXMuc3dhcHBpbmdEaXNhYmxlZCkgcmV0dXJuXG5cbiAgICBjb25zdCBwcmV2RHJhZ2dhYmxlID0gdGhpcy5jYWNoZWRTb3J0ZWREcmFnZ2FibGVzW3RoaXMuaW5kZXhPZkFjdGl2ZURyYWdnYWJsZSAtIDFdXG4gICAgY29uc3QgbmV4dERyYWdnYWJsZSA9IHRoaXMuY2FjaGVkU29ydGVkRHJhZ2dhYmxlc1t0aGlzLmluZGV4T2ZBY3RpdmVEcmFnZ2FibGUgKyAxXVxuICAgIGNvbnN0IGN1cnJlbnRQb3NpdGlvbiA9IGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvblxuXG4gICAgbGV0IGN1cnJlbnRPcmRlclxuICAgIGxldCB0YXJnZXRJbmRleFxuXG4gICAgaWYoZHJhZ2dhYmxlLnVwRGlyZWN0aW9uICYmIHByZXZEcmFnZ2FibGUpIHtcbiAgICAgIGN1cnJlbnRPcmRlciA9IFtwcmV2RHJhZ2dhYmxlLCBkcmFnZ2FibGVdLm1hcCgoZCkgPT4gZC5waW5uZWRQb3NpdGlvbilcbiAgICAgIHRhcmdldEluZGV4ID0gaW5kZXhPZk5lYXJlc3RQb2ludChjdXJyZW50T3JkZXIsIGRyYWdnYWJsZS5wb3NpdGlvbiwgMTAwMDAsIHRoaXMuZGlzdGFuY2VGdW5jKVxuXG4gICAgICBpZiAodGFyZ2V0SW5kZXggPT09IDApIHtcbiAgICAgICAgaWYoZHJhZ2dhYmxlLnNob3VsZFVzZU5hdGl2ZURyYWdBbmREcm9wKCkpIHtcbiAgICAgICAgICBkcmFnZ2FibGUucGluUG9zaXRpb24ocHJldkRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24gPSBwcmV2RHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uLmNsb25lKClcbiAgICAgICAgfVxuICAgICAgICBwcmV2RHJhZ2dhYmxlLnBpblBvc2l0aW9uKG5ldyBQb2ludChcbiAgICAgICAgICBjdXJyZW50UG9zaXRpb24ueCxcbiAgICAgICAgICBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24ueSArIGRyYWdnYWJsZS5nZXRTaXplKCkueSArIHRoaXMudmVydGljYWxHYXBcbiAgICAgICAgKSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICBhcnJheU1vdmUodGhpcy5jYWNoZWRTb3J0ZWREcmFnZ2FibGVzLCB0aGlzLmluZGV4T2ZBY3RpdmVEcmFnZ2FibGUtLSwgdGhpcy5pbmRleE9mQWN0aXZlRHJhZ2dhYmxlKVxuICAgICAgICB0aGlzLm9uTW92ZShkcmFnZ2FibGUpXG4gICAgICAgIHRoaXMuY2hhbmdlZER1cmluZ0l0ZXJhdGlvbiA9IHRydWVcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYoZHJhZ2dhYmxlLmRvd25EaXJlY3Rpb24gJiYgbmV4dERyYWdnYWJsZSkge1xuICAgICAgY3VycmVudE9yZGVyID0gW2RyYWdnYWJsZSwgbmV4dERyYWdnYWJsZV0ubWFwKChkKSA9PiBkLnBpbm5lZFBvc2l0aW9uKVxuICAgICAgdGFyZ2V0SW5kZXggPSBpbmRleE9mTmVhcmVzdFBvaW50KGN1cnJlbnRPcmRlciwgZHJhZ2dhYmxlLnBvc2l0aW9uLCAxMDAwMCwgdGhpcy5kaXN0YW5jZUZ1bmMpXG5cbiAgICAgIGlmKHRhcmdldEluZGV4ID09PSAxKSB7XG4gICAgICAgIG5leHREcmFnZ2FibGUucGluUG9zaXRpb24oZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICAgIGNvbnN0IGRyYWdnYWJsZU5ld1Bvc2l0aW9uID0gbmV3IFBvaW50KFxuICAgICAgICAgIG5leHREcmFnZ2FibGUucGlubmVkUG9zaXRpb24ueCxcbiAgICAgICAgICBuZXh0RHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uLnkgKyBuZXh0RHJhZ2dhYmxlLmdldFNpemUoKS55ICsgdGhpcy52ZXJ0aWNhbEdhcFxuICAgICAgICApXG4gICAgICAgIGlmKGRyYWdnYWJsZS5zaG91bGRVc2VOYXRpdmVEcmFnQW5kRHJvcCgpKSB7XG4gICAgICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKGRyYWdnYWJsZU5ld1Bvc2l0aW9uKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbiA9IGRyYWdnYWJsZU5ld1Bvc2l0aW9uXG4gICAgICAgIH1cbiAgICAgICAgYXJyYXlNb3ZlKHRoaXMuY2FjaGVkU29ydGVkRHJhZ2dhYmxlcywgdGhpcy5pbmRleE9mQWN0aXZlRHJhZ2dhYmxlKyssIHRoaXMuaW5kZXhPZkFjdGl2ZURyYWdnYWJsZSlcbiAgICAgICAgdGhpcy5vbk1vdmUoZHJhZ2dhYmxlKVxuICAgICAgICB0aGlzLmNoYW5nZWREdXJpbmdJdGVyYXRpb24gPSB0cnVlXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYnViYmxpbmcoc29ydGVkRHJhZ2dhYmxlcywgY3VycmVudERyYWdnYWJsZSkge1xuICAgIGNvbnN0IGN1cnJlbnRQb3NpdGlvbiA9IHRoaXMuc3RhcnRQb3NpdGlvbi5jbG9uZSgpXG4gICAgc29ydGVkRHJhZ2dhYmxlcyB8fD0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcblxuICAgIHNvcnRlZERyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBpZiAoIWRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbi5jb21wYXJlKGN1cnJlbnRQb3NpdGlvbikpIHtcbiAgICAgICAgaWYgKGRyYWdnYWJsZSA9PT0gY3VycmVudERyYWdnYWJsZSAmJiAhY3VycmVudERyYWdnYWJsZS5zaG91bGRVc2VOYXRpdmVEcmFnQW5kRHJvcCgpKSB7XG4gICAgICAgICAgZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uID0gY3VycmVudFBvc2l0aW9uLmNsb25lKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkcmFnZ2FibGUucGluUG9zaXRpb24oY3VycmVudFBvc2l0aW9uLCAoZHJhZ2dhYmxlID09PSBjdXJyZW50RHJhZ2dhYmxlKSA/IDAgOiB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY3VycmVudFBvc2l0aW9uLnkgPSBjdXJyZW50UG9zaXRpb24ueSArIGRyYWdnYWJsZS5nZXRTaXplKCkueSArIHRoaXMudmVydGljYWxHYXBcbiAgICB9KVxuICB9XG5cbiAgcmVtb3ZlKGRyYWdnYWJsZXMpIHtcbiAgICBpZiAoIShkcmFnZ2FibGVzIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgICBkcmFnZ2FibGVzID0gW2RyYWdnYWJsZXNdXG4gICAgfVxuXG4gICAgZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHRoaXMucmVsZWFzZURyYWdnYWJsZShkcmFnZ2FibGUpKVxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IHRoaXMuZHJhZ2dhYmxlcy5maWx0ZXIoKGQpID0+ICFkcmFnZ2FibGVzLmluY2x1ZGVzKGQpKVxuXG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGQpID0+IGQuc3RhcnRQb3NpdGlvbmluZygpKVxuXG4gICAgaWYodGhpcy5kcmFnZ2FibGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuYXV0b0RldGVjdFZlcnRpY2FsR2FwKClcbiAgICAgIHRoaXMuYXV0b0RldGVjdFN0YXJ0UG9zaXRpb24oKVxuICAgICAgdGhpcy5idWJibGluZygpXG4gICAgfVxuICB9XG5cbiAgZ2V0IGRpc3RhbmNlRnVuYygpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmdldERpc3RhbmNlIHx8IGdldFlEaWZmZXJlbmNlXG4gIH1cblxuICBnZXQgdmVydGljYWxHYXAoKSB7XG4gICAgaWYodGhpcy5vcHRpb25zLnZlcnRpY2FsR2FwKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLnZlcnRpY2FsR2FwXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYXV0b0RldGVjdFZlcnRpY2FsR2FwKClcbiAgICAgIHJldHVybiB0aGlzLl92ZXJ0aWNhbEdhcCB8fCAwXG4gICAgfVxuICB9XG5cbiAgc2V0IHZlcnRpY2FsR2FwKGdhcFZhbHVlKSB7XG4gICAgdGhpcy5vcHRpb25zLnZlcnRpY2FsR2FwID0gZ2FwVmFsdWVcbiAgfVxuXG4gIHN0YXRpYyBmYWN0b3J5KGNvbnRhaW5lckVsZW1lbnQsIGVsZW1lbnRzLCBvcHRpb25zPXt9KSB7XG4gICAgY29uc3QgZHJhZ2dhYmxlcyA9IEFycmF5LmZyb20oZWxlbWVudHMpLm1hcCgoZWxlbWVudCkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBEcmFnZ2FibGUoZWxlbWVudCwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyRWxlbWVudFxuICAgICAgfSwgb3B0aW9ucy5kcmFnZ2FibGUgfHwge30pKVxuICAgIH0pXG5cbiAgICByZXR1cm4gbmV3IEJ1YmJsaW5nTGlzdChkcmFnZ2FibGVzLCBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyRWxlbWVudFxuICAgIH0sIG9wdGlvbnMubGlzdCB8fCB7fSkpXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJQb2ludCIsImNvbnN0cnVjdG9yIiwieCIsInkiLCJhZGQiLCJwIiwic3ViIiwibXVsdCIsImsiLCJuZWdhdGl2ZSIsImNvbXBhcmUiLCJjbG9uZSIsInRvU3RyaW5nIiwiZWxlbWVudE9mZnNldCIsImVsZW1lbnQiLCJwYXJlbnQiLCJwYXJlbnROb2RlIiwiZWxlbWVudFJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJwYXJlbnRSZWN0IiwibGVmdCIsInRvcCIsImVsZW1lbnRTaXplIiwid2lkdGgiLCJoZWlnaHQiLCJSZWN0YW5nbGUiLCJwb3NpdGlvbiIsInNpemUiLCJnZXRQMSIsImdldFAyIiwiZ2V0UDMiLCJnZXRQNCIsImdldENlbnRlciIsIm9yIiwicmVjdCIsIk1hdGgiLCJtaW4iLCJtYXgiLCJhbmQiLCJpbmNsdWRlUG9pbnQiLCJpbmNsdWRlUmVjdGFuZ2xlIiwicmVjdGFuZ2xlIiwibW92ZVRvQm91bmQiLCJheGlzIiwic2VsQXhpcyIsImNyb3NzUmVjdGFuZ2xlIiwidGhpc0NlbnRlciIsInJlY3RDZW50ZXIiLCJzaWduIiwib2Zmc2V0IiwiZ2V0U3F1YXJlIiwic3R5bGVBcHBseSIsImVsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic3R5bGUiLCJncm93dGgiLCJnZXRNaW5TaWRlIiwiZnJvbUVsZW1lbnQiLCJpc0NvbnNpZGVyVHJhbnNsYXRlIiwiZ2V0RGVmYXVsdENvbnRhaW5lciIsImNvbnRhaW5lciIsIndpbmRvdyIsImdldENvbXB1dGVkU3R5bGUiLCJ0YWdOYW1lIiwiRXZlbnRFbWl0dGVyIiwib3B0aW9ucyIsImV2ZW50cyIsIm9uIiwiZXZlbnROYW1lIiwiZm4iLCJPYmplY3QiLCJlbnRyaWVzIiwiZW1pdCIsImludGVycnVwdGVkIiwiYXJncyIsInNsaWNlIiwiY2FsbCIsImFyZ3VtZW50cyIsImZ1bmMiLCJpbnRlcnJ1cHQiLCJwdXNoIiwicHJlcGVuZE9uIiwidW5zaGlmdCIsInVuc3Vic2NyaWJlIiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwicmVzZXRFbWl0dGVyIiwicmVzZXRPbiIsImdldERpc3RhbmNlIiwicDEiLCJwMiIsImR4IiwiZHkiLCJzcXJ0IiwiZ2V0WERpZmZlcmVuY2UiLCJhYnMiLCJnZXRZRGlmZmVyZW5jZSIsInRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3RvcnkiLCJwb3ciLCJpbmRleE9mTmVhcmVzdFBvaW50IiwiYXJyIiwidmFsIiwicmFkaXVzIiwiZ2V0RGlzdGFuY2VGdW5jIiwiaSIsInRlbXAiLCJsZW5ndGgiLCJkaXJlY3RDcm9zc2luZyIsIkwxUDEiLCJMMVAyIiwiTDJQMSIsIkwyUDIiLCJrMSIsImsyIiwiYjEiLCJiMiIsImJvdW5kVG9MaW5lIiwiQSIsIkIiLCJQIiwiQVAiLCJBQiIsImFiMiIsImFwX2FiIiwidCIsImdldFBvaW50T25MaW5lQnlMZW5naHQiLCJMUDEiLCJMUDIiLCJsZW5naHQiLCJwZXJjZW50IiwiYWRkUG9pbnRUb0JvdW5kUG9pbnRzIiwiYm91bmRwb2ludHMiLCJwb2ludCIsImlzUmlnaHQiLCJyZXN1bHQiLCJmaWx0ZXIiLCJiUG9pbnQiLCJnZXRBbmdsZURpZmYiLCJhbHBoYSIsImJldGEiLCJtaW5BbmdsZSIsIm1heEFuZ2xlIiwiUEkiLCJnZXRBbmdsZSIsImRpZmYiLCJub3JtYWxpemVBbmdsZSIsImF0YW4yIiwiYm91bmRBbmdsZSIsImRtaW4iLCJkbWF4IiwiZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtIiwiYW5nbGUiLCJjZW50ZXIiLCJjb3MiLCJzaW4iLCJCb3VuZCIsImJvdW5kIiwiX3NpemUiLCJyZWZyZXNoIiwiYm91bmRpbmciLCJpbnN0YW5jZSIsImJpbmQiLCJCb3VuZFRvUmVjdGFuZ2xlIiwiY2FsY1BvaW50IiwicmVjdFAyIiwiQm91bmRUb0VsZW1lbnQiLCJCb3VuZFRvTGluZVgiLCJzdGFydFkiLCJlbmRZIiwiQm91bmRUb0xpbmVZIiwic3RhcnRYIiwiZW5kWCIsIkJvdW5kVG9MaW5lIiwic3RhcnRQb2ludCIsImVuZFBvaW50Iiwic29tZUsiLCJjb3NCZXRhIiwic2luQmV0YSIsInBvaW50MiIsIm5ld0VuZFBvaW50IiwicG9pbnRDcm9zc2luZyIsIkJvdW5kVG9DaXJjbGUiLCJCb3VuZFRvQXJjIiwic3RhcnRBbmdsZSIsImVuZEFuZ2xlIiwiX3N0YXJ0QW5nbGUiLCJfZW5kQW5nbGUiLCJhcnJheSIsInJhbmdlIiwic3RhcnQiLCJzdG9wIiwic3RlcCIsIkJhc2ljU3RyYXRlZ3kiLCJib3VuZFJlY3QiLCJOb3RDcm9zc2luZ1N0cmF0ZWd5IiwicG9zaXRpb25pbmciLCJyZWN0YW5nbGVMaXN0IiwiaW5kZXhlc09mTmV3cyIsInN0YXRpY1JlY3RhbmdsZUluZGV4ZXMiLCJyZWR1Y2UiLCJpbmRleGVzIiwiX3JlY3QiLCJmb3JFYWNoIiwicmVtb3ZhYmxlIiwiaW5kZXhPZlN0YXRpYyIsInN0YXRpY1JlY3QiLCJzb21lIiwic29ydGluZyIsIm9kbERyYWdnYWJsZXNMaXN0IiwibmV3RHJhZ2dhYmxlcyIsImluZGV4T2ZOZXdzIiwiZHJhZ2dhYmxlcyIsImNvbmNhdCIsImRyYWdnYWJsZSIsIkZsb2F0TGVmdFN0cmF0ZWd5IiwiYXNzaWduIiwicGFkZGluZ1RvcExlZnQiLCJwYWRkaW5nQm90dG9tUmlnaHQiLCJ5R2FwQmV0d2VlbkRyYWdnYWJsZXMiLCJnZXRQb3NpdGlvbiIsIl9pbmRleGVzT2ZOZXdzIiwiYm91bmRhcnlQb2ludHMiLCJyZWN0SW5kZXgiLCJpc1ZhbGlkIiwibmV3TGlzdCIsImxpc3RPbGRQb3NpdGlvbiIsIm1hcCIsIm5ld0RyYWdnYWJsZSIsIkZsb2F0UmlnaHRTdHJhdGVneSIsInBhZGRpbmdUb3BSaWdodCIsInBhZGRpbmdCb3R0b21MZWZ0IiwicGFkZGluZ0JvdHRvbU5lZ0xlZnQiLCJhZGRUb0RlZmF1bHRTY29wZSIsInRhcmdldCIsImRlZmF1bHRTY29wZSIsImFkZFRhcmdldCIsIlRhcmdldCIsInRpbWVFbmQiLCJ0aW1lRXhjYW5nZSIsInBvc2l0aW9uaW5nU3RyYXRlZ3kiLCJzdHJhdGVneSIsImdldFJlY3RhbmdsZSIsInRhcmdldHMiLCJlbWl0dGVyIiwic3RhcnRCb3VuZGluZyIsImluaXQiLCJpbmRleGVzT2ZOZXciLCJvbGREcmFnZ2FibGVzIiwicmVjdGFuZ2xlcyIsImlubmVyRHJhZ2dhYmxlcyIsInNldFBvc2l0aW9uIiwiY2F0Y2hEcmFnZ2FibGUiLCJ0YXJnZXRSZWN0YW5nbGUiLCJkcmFnZ2FibGVTcXVhcmUiLCJnZXRTaXplIiwiZGVzdHJveSIsInNjb3BlcyIsInNjb3BlIiwicmVtb3ZlSXRlbSIsIm9uRW5kIiwibmV3RHJhZ2dhYmxlc0luZGV4IiwiYWRkUmVtb3ZlT25Nb3ZlIiwidGltZSIsIm1vdmUiLCJpbml0aWFsUG9zaXRpb24iLCJwdXNoSW5uZXJEcmFnZ2FibGUiLCJyZW1vdmVIYW5kbGVyIiwicmVtb3ZlIiwicmVzZXQiLCJnZXRTb3J0ZWREcmFnZ2FibGVzIiwiX2NvbnRhaW5lciIsIlNjb3BlIiwiZHJhZ0VuZEFjdGlvbiIsImFkZERyYWdnYWJsZSIsInNob3RUYXJnZXRzIiwic29ydCIsImEiLCJiIiwicGluUG9zaXRpb24iLCJwb3NpdGlvbnMiLCJtZXNzYWdlIiwidGFyZ2V0SW5kZXhlcyIsImN1cnJlbnRTY29wZSIsImFkZERyYWdnYWJsZVRvU2NvcGUiLCJEcmFnZ2FibGUiLCJhZGRUYXJnZXRUb1Njb3BlIiwidGhyb3R0bGUiLCJ3YWl0IiwibGFzdFRpbWUiLCJleGVjdXRlZEZ1bmN0aW9uIiwiY29udGV4dCIsIm5vdyIsIkRhdGUiLCJhcHBseSIsInRocm90dGxlZERyYWdPdmVyIiwiY2FsbGJhY2siLCJkdXJhdGlvbiIsInRocm90dGxlZENhbGxiYWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInBhc3NpdmVGYWxzZSIsInBhc3NpdmUiLCJpc1RvdWNoIiwibW91c2VFdmVudHMiLCJlbmQiLCJ0b3VjaEV2ZW50cyIsInRyYW5zZm9ybVByb3BlcnR5IiwidHJhbnNpdGlvblByb3BlcnR5IiwiZ2V0VG91Y2hCeUlEIiwidG91Y2hJZCIsImNoYW5nZWRUb3VjaGVzIiwiaWRlbnRpZmllciIsInByZXZlbnREb3VibGVJbml0IiwiZXhpc3RpbmciLCJjb3B5U3R5bGVzIiwic291cmNlIiwiZGVzdGluYXRpb24iLCJjcyIsImtleSIsImNoaWxkcmVuIiwiX2VuYWJsZSIsInN0YXJ0UG9zaXRpb25pbmciLCJzdGFydExpc3RlbmluZyIsIl9zZXREZWZhdWx0VHJhbnNpdGlvbiIsInBpbm5lZFBvc2l0aW9uIiwiX2RyYWdTdGFydCIsImRyYWdTdGFydCIsIl9kcmFnTW92ZSIsImRyYWdNb3ZlIiwiX2RyYWdFbmQiLCJkcmFnRW5kIiwiX25hdGl2ZURyYWdTdGFydCIsIm5hdGl2ZURyYWdTdGFydCIsIl9uYXRpdmVEcmFnT3ZlciIsIm5hdGl2ZURyYWdPdmVyIiwiZHJhZ092ZXJUaHJvdHRsZUR1cmF0aW9uIiwiX25hdGl2ZURyYWdFbmQiLCJuYXRpdmVEcmFnRW5kIiwiX25hdGl2ZURyb3AiLCJuYXRpdmVEcm9wIiwiX3Njcm9sbCIsIm9uU2Nyb2xsIiwiaGFuZGxlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJfdHJhbnNmb3JtUG9zaXRpb24iLCJfc2V0VHJhbnNpdGlvbiIsInRyYW5zaXRpb24iLCJ0cmFuc2l0aW9uQ3NzIiwidGVzdCIsInJlcGxhY2UiLCJfc2V0VHJhbnNsYXRlIiwidHJhbnNsYXRlQ3NzIiwidHJhbnNmb3JtIiwic2hvdWxkUmVtb3ZlWmVyb1RyYW5zbGF0ZSIsImlzU2lsZW50Iiwic2lsZW50IiwicmVzZXRQb3NpdGlvblRvSW5pdGlhbCIsInJlZnJlc2hQb3NpdGlvbiIsImRldGVybWluZURpcmVjdGlvbiIsIl9wcmV2aW91c0RpcmVjdGlvblBvc2l0aW9uIiwiX3N0YXJ0UG9zaXRpb24iLCJsZWZ0RGlyZWN0aW9uIiwicmlnaHREaXJlY3Rpb24iLCJ1cERpcmVjdGlvbiIsImRvd25EaXJlY3Rpb24iLCJzZWVtc1Njcm9sbGluZyIsIl9zdGFydFRvdWNoVGltZXN0YW1wIiwidG91Y2hEcmFnZ2luZ1RocmVzaG9sZCIsInNob3VsZFVzZU5hdGl2ZURyYWdBbmREcm9wIiwiaXNUb3VjaEV2ZW50IiwibmF0aXZlRHJhZ0FuZERyb3AiLCJlbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3BPblRvdWNoIiwic3RvcFByb3BhZ2F0aW9uT25EcmFnU3RhcnQiLCJzdG9wUHJvcGFnYXRpb24iLCJUb3VjaEV2ZW50IiwidG91Y2hQb2ludCIsIl9zdGFydFRvdWNoUG9pbnQiLCJwYWdlWCIsImNsaWVudFgiLCJwYWdlWSIsImNsaWVudFkiLCJfdG91Y2hJZCIsIl9zdGFydFdpbmRvd1Njcm9sbFBvaW50Iiwid2luZG93U2Nyb2xsUG9pbnQiLCJfc3RhcnRQYXJlbnRzU2Nyb2xsUG9pbnQiLCJwYXJlbnRzU2Nyb2xsUG9pbnQiLCJIVE1MSW5wdXRFbGVtZW50IiwiZm9jdXMiLCJlbXVsYXRlT25GaXJzdE1vdmUiLCJjYW5jZWxEcmFnZ2luZyIsImVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcCIsImNhbmNlbEVtdWxhdGlvbiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJwYXJlbnRzIiwidG91Y2giLCJpc0RyYWdnaW5nIiwiY2xhc3NMaXN0Iiwic2V0VGltZW91dCIsIl9ldmVudCIsImRhdGFUcmFuc2ZlciIsInNldERhdGEiLCJlZmZlY3RBbGxvd2VkIiwiZHJvcEVmZmVjdCIsInJlbW92ZUF0dHJpYnV0ZSIsImNvbnRhaW5lclJlY3QiLCJjbG9uZWRFbGVtZW50IiwiY2xvbmVOb2RlIiwiYm9keSIsImFwcGVuZENoaWxkIiwiZW11bGF0aW9uRHJhZ2dhYmxlIiwiY29udGFpbmVyUmVjdFBvaW50IiwicmVtb3ZlQ2hpbGQiLCJfaGFuZGxlciIsInNjcm9sbFgiLCJzY3JvbGxZIiwiX2NhY2hlZFBhcmVudHMiLCJzdW0iLCJzY3JvbGxMZWZ0Iiwic2Nyb2xsVG9wIiwiZW5hYmxlIiwiZGVib3VuY2UiLCJpbW1lZGlhdGUiLCJ0aW1lb3V0IiwibGF0ZXIiLCJjbGVhclRpbWVvdXQiLCJMaXN0IiwiY2hhbmdlZER1cmluZ0l0ZXJhdGlvbiIsInJlc2l6ZU9ic2VydmVyIiwiUmVzaXplT2JzZXJ2ZXIiLCJvblJlc2l6ZSIsIm9ic2VydmUiLCJyZW9yZGVyT25DaGFuZ2UiLCJpbml0RHJhZ2dhYmxlIiwib25Nb3ZlIiwicmVsZWFzZURyYWdnYWJsZSIsInVub2JzZXJ2ZSIsInN3YXBwaW5nRGlzYWJsZWQiLCJzb3J0ZWREcmFnZ2FibGVzIiwicGlubmVkUG9zaXRpb25zIiwiY3VycmVudEluZGV4IiwidGFyZ2V0SW5kZXgiLCJkaXN0YW5jZUZ1bmMiLCJyZW9yZGVyRWxlbWVudHMiLCJtb3ZlZERyYWdnYWJsZSIsIm5leHQiLCJpbnNlcnRCZWZvcmUiLCJkIiwiZ2V0Q3VycmVudFBpbm5lZFBvc2l0aW9ucyIsIkFycmF5IiwiaW5pdGlhbFBvc2l0aW9ucyIsImxpc3QiLCJqIiwiY2xlYXIiLCJkcmFnZ2FibGVBIiwiZHJhZ2dhYmxlQiIsIl9zd2FwcGluZ0Rpc2FibGVkIiwiZGlzYWJsZWQiLCJmYWN0b3J5IiwiY29udGFpbmVyRWxlbWVudCIsImVsZW1lbnRzIiwiZnJvbSIsImFycmF5TW92ZSIsInRvIiwiQnViYmxpbmdMaXN0IiwiYXV0b0RldGVjdFZlcnRpY2FsR2FwIiwiX3ZlcnRpY2FsR2FwIiwidmVydGljYWxHYXAiLCJzb3J0ZWQiLCJhdXRvRGV0ZWN0U3RhcnRQb3NpdGlvbiIsInN0YXJ0UG9zaXRpb24iLCJvbkRyYWdTdGFydCIsImNhY2hlZFNvcnRlZERyYWdnYWJsZXMiLCJpbmRleE9mQWN0aXZlRHJhZ2dhYmxlIiwicHJldkRyYWdnYWJsZSIsIm5leHREcmFnZ2FibGUiLCJjdXJyZW50UG9zaXRpb24iLCJjdXJyZW50T3JkZXIiLCJkcmFnZ2FibGVOZXdQb3NpdGlvbiIsImJ1YmJsaW5nIiwiY3VycmVudERyYWdnYWJsZSIsImluY2x1ZGVzIiwiZ2FwVmFsdWUiXSwibWFwcGluZ3MiOiI7OztFQUFBO0VBQ2UsTUFBTUEsS0FBSyxDQUFDO0VBQ3pCO0VBQ0Y7RUFDQTtFQUNBO0VBQ0E7RUFDRUMsRUFBQUEsV0FBVyxDQUFDQyxDQUFDLEVBQUVDLENBQUMsRUFBRTtNQUNoQixJQUFJLENBQUNELENBQUMsR0FBR0EsQ0FBQztNQUNWLElBQUksQ0FBQ0MsQ0FBQyxHQUFHQSxDQUFDO0VBQ1o7SUFFQUMsR0FBRyxDQUFDQyxDQUFDLEVBQUU7RUFDTCxJQUFBLE9BQU8sSUFBSUwsS0FBSyxDQUFDLElBQUksQ0FBQ0UsQ0FBQyxHQUFHRyxDQUFDLENBQUNILENB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
