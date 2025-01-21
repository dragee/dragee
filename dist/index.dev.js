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

  function checkSupportPassiveEvents() {
    let passiveSupported = false;
    try {
      const options = Object.defineProperty({}, 'passive', {
        get() {
          return passiveSupported = true;
        }
      });
      window.addEventListener('test', options, options);
      window.removeEventListener('test', options, options);
    } catch (_err) {
      passiveSupported = false;
    }
    return passiveSupported;
  }
  const isSupportPassiveEvents = checkSupportPassiveEvents();

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
  const delayedNativeDragStart = (callback, delay) => {
    return event => {
      event.stopPropagation();
      setTimeout(() => callback(event), delay);
    };
  };
  const passiveFalse = isSupportPassiveEvents ? {
    passive: false
  } : false;
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
      this._nativeDragStart = delayedNativeDragStart(event => this.nativeDragStart(event), this.nativeDragStartDelay);
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
    get nativeDragStartDelay() {
      return this.options.nativeDragStartDelay || 0;
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
      this.draggables.forEach(d => d.startPositioning());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZGV2LmpzIiwic291cmNlcyI6WyIuLi9zcmMvZ2VvbWV0cnkvcG9pbnQuanMiLCIuLi9zcmMvZ2VvbWV0cnkvcmVjdGFuZ2xlLmpzIiwiLi4vc3JjL3V0aWxzL2dldC1kZWZhdWx0LWNvbnRhaW5lci5qcyIsIi4uL3NyYy9ldmVudEVtaXR0ZXIuanMiLCIuLi9zcmMvZ2VvbWV0cnkvZGlzdGFuY2VzLmpzIiwiLi4vc3JjL2dlb21ldHJ5L2JvdW5kcy5qcyIsIi4uL3NyYy9nZW9tZXRyeS9hbmdsZXMuanMiLCIuLi9zcmMvYm91bmRpbmcuanMiLCIuLi9zcmMvdXRpbHMvcmVtb3ZlLWFycmF5LWl0ZW0uanMiLCIuLi9zcmMvdXRpbHMvcmFuZ2UuanMiLCIuLi9zcmMvcG9zaXRpb25pbmcuanMiLCIuLi9zcmMvdGFyZ2V0LmpzIiwiLi4vc3JjL3Njb3BlLmpzIiwiLi4vc3JjL3V0aWxzL2lzLXN1cHBvcnQtcGFzc2l2ZS1ldmVudHMuanMiLCIuLi9zcmMvdXRpbHMvdGhyb3R0bGUuanMiLCIuLi9zcmMvZHJhZ2dhYmxlLmpzIiwiLi4vc3JjL3V0aWxzL2RlYm91bmNlLmpzIiwiLi4vc3JjL2xpc3QuanMiLCIuLi9zcmMvYnViYmxpbmdMaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKiBDbGFzcyByZXByZXNlbnRpbmcgYSBwb2ludC4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvaW50IHtcbiAgLyoqXG4gICogQ3JlYXRlIGEgcG9pbnQuXG4gICogQHBhcmFtIHtudW1iZXJ9IHggLSBUaGUgeCB2YWx1ZS5cbiAgKiBAcGFyYW0ge251bWJlcn0geSAtIFRoZSB5IHZhbHVlLlxuICAqL1xuICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgdGhpcy54ID0geFxuICAgIHRoaXMueSA9IHlcbiAgfVxuXG4gIGFkZChwKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnggKyBwLngsIHRoaXMueSArIHAueSlcbiAgfVxuXG4gIHN1YihwKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnggLSBwLngsIHRoaXMueSAtIHAueSlcbiAgfVxuXG4gIG11bHQoaykge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54ICogaywgdGhpcy55ICogaylcbiAgfVxuXG4gIG5lZ2F0aXZlKCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQoLXRoaXMueCwgLXRoaXMueSlcbiAgfVxuXG4gIGNvbXBhcmUocCkge1xuICAgIHJldHVybiAodGhpcy54ID09PSBwLnggJiYgdGhpcy55ID09PSBwLnkpXG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCwgdGhpcy55KVxuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIGB7eD0ke3RoaXMueH0seT0ke3RoaXMueX1gXG4gIH1cblxuICBzdGF0aWMgZWxlbWVudE9mZnNldChlbGVtZW50LCBwYXJlbnQpIHtcbiAgICBwYXJlbnQgPSBwYXJlbnQgfHwgZWxlbWVudC5wYXJlbnROb2RlXG4gICAgY29uc3QgZWxlbWVudFJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgY29uc3QgcGFyZW50UmVjdCA9IHBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIHJldHVybiBuZXcgUG9pbnQoXG4gICAgICBlbGVtZW50UmVjdC5sZWZ0IC0gcGFyZW50UmVjdC5sZWZ0LFxuICAgICAgZWxlbWVudFJlY3QudG9wIC0gcGFyZW50UmVjdC50b3BcbiAgICApXG4gIH1cblxuICBzdGF0aWMgZWxlbWVudFNpemUoZWxlbWVudCkge1xuICAgIGNvbnN0IGVsZW1lbnRSZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIHJldHVybiBuZXcgUG9pbnQoXG4gICAgICBlbGVtZW50UmVjdC53aWR0aCxcbiAgICAgIGVsZW1lbnRSZWN0LmhlaWdodFxuICAgIClcbiAgfVxufVxuIiwiaW1wb3J0IFBvaW50IGZyb20gJy4vcG9pbnQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY3RhbmdsZSB7XG4gIGNvbnN0cnVjdG9yKHBvc2l0aW9uLCBzaXplKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgdGhpcy5zaXplID0gc2l6ZVxuICB9XG5cbiAgZ2V0UDEoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25cbiAgfVxuXG4gIGdldFAyKCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHRoaXMucG9zaXRpb24ueSlcbiAgfVxuXG4gIGdldFAzKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLnNpemUpXG4gIH1cblxuICBnZXRQNCgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnkpXG4gIH1cblxuICBnZXRDZW50ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb24uYWRkKHRoaXMuc2l6ZS5tdWx0KDAuNSkpXG4gIH1cblxuICBvcihyZWN0KSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBuZXcgUG9pbnQoTWF0aC5taW4odGhpcy5wb3NpdGlvbi54LCByZWN0LnBvc2l0aW9uLngpLCBNYXRoLm1pbih0aGlzLnBvc2l0aW9uLnksIHJlY3QucG9zaXRpb24ueSkpXG4gICAgY29uc3Qgc2l6ZSA9IChuZXcgUG9pbnQoTWF0aC5tYXgodGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHJlY3QucG9zaXRpb24ueCArIHJlY3Quc2l6ZS54KSwgTWF0aC5tYXgodGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnksIHJlY3QucG9zaXRpb24ueSArIHJlY3Quc2l6ZS55KSkpLnN1Yihwb3NpdGlvbilcbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZShwb3NpdGlvbiwgc2l6ZSlcbiAgfVxuXG4gIGFuZChyZWN0KSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBuZXcgUG9pbnQoTWF0aC5tYXgodGhpcy5wb3NpdGlvbi54LCByZWN0LnBvc2l0aW9uLngpLCBNYXRoLm1heCh0aGlzLnBvc2l0aW9uLnksIHJlY3QucG9zaXRpb24ueSkpXG4gICAgY29uc3Qgc2l6ZSA9IChuZXcgUG9pbnQoTWF0aC5taW4odGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHJlY3QucG9zaXRpb24ueCArIHJlY3Quc2l6ZS54KSwgTWF0aC5taW4odGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnksIHJlY3QucG9zaXRpb24ueSArIHJlY3Quc2l6ZS55KSkpLnN1Yihwb3NpdGlvbilcbiAgICBpZiAoc2l6ZS54IDw9IDAgfHwgc2l6ZS55IDw9IDApIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHBvc2l0aW9uLCBzaXplKVxuICB9XG5cbiAgaW5jbHVkZVBvaW50KHApIHtcbiAgICByZXR1cm4gISh0aGlzLnBvc2l0aW9uLnggPiBwLnggfHwgdGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLnggPCBwLnggfHwgdGhpcy5wb3NpdGlvbi55ID4gcC55IHx8IHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55IDwgcC55KVxuICB9XG5cbiAgaW5jbHVkZVJlY3RhbmdsZShyZWN0YW5nbGUpIHtcbiAgICByZXR1cm4gdGhpcy5pbmNsdWRlUG9pbnQocmVjdGFuZ2xlLnBvc2l0aW9uKSAmJiB0aGlzLmluY2x1ZGVQb2ludChyZWN0YW5nbGUuZ2V0UDMoKSlcbiAgfVxuXG4gIG1vdmVUb0JvdW5kKHJlY3QsIGF4aXMpIHtcbiAgICBsZXQgc2VsQXhpcywgY3Jvc3NSZWN0YW5nbGVcbiAgICBpZiAoYXhpcykge1xuICAgICAgc2VsQXhpcyA9IGF4aXNcbiAgICB9IGVsc2Uge1xuICAgICAgY3Jvc3NSZWN0YW5nbGUgPSB0aGlzLmFuZChyZWN0KVxuICAgICAgaWYgKCFjcm9zc1JlY3RhbmdsZSkge1xuICAgICAgICByZXR1cm4gcmVjdFxuICAgICAgfVxuICAgICAgc2VsQXhpcyA9IGNyb3NzUmVjdGFuZ2xlLnNpemUueCA+IGNyb3NzUmVjdGFuZ2xlLnNpemUueSA/ICd5JyA6ICd4J1xuICAgIH1cbiAgICBjb25zdCB0aGlzQ2VudGVyID0gdGhpcy5nZXRDZW50ZXIoKVxuICAgIGNvbnN0IHJlY3RDZW50ZXIgPSByZWN0LmdldENlbnRlcigpXG4gICAgY29uc3Qgc2lnbiA9IHRoaXNDZW50ZXJbc2VsQXhpc10gPiByZWN0Q2VudGVyW3NlbEF4aXNdID8gLTEgOiAxXG4gICAgY29uc3Qgb2Zmc2V0ID0gc2lnbiA+IDAgPyB0aGlzLnBvc2l0aW9uW3NlbEF4aXNdICsgdGhpcy5zaXplW3NlbEF4aXNdIC0gcmVjdC5wb3NpdGlvbltzZWxBeGlzXSA6IHRoaXMucG9zaXRpb25bc2VsQXhpc10gLSAocmVjdC5wb3NpdGlvbltzZWxBeGlzXSArIHJlY3Quc2l6ZVtzZWxBeGlzXSlcbiAgICByZWN0LnBvc2l0aW9uW3NlbEF4aXNdID0gcmVjdC5wb3NpdGlvbltzZWxBeGlzXSArIG9mZnNldFxuICAgIHJldHVybiByZWN0XG4gIH1cblxuICBnZXRTcXVhcmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZS54ICogdGhpcy5zaXplLnlcbiAgfVxuXG4gIHN0eWxlQXBwbHkoZWwpIHtcbiAgICBlbCA9IGVsIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2luZCcpXG4gICAgZWwuc3R5bGUubGVmdCA9IHRoaXMucG9zaXRpb24ueCArICdweCdcbiAgICBlbC5zdHlsZS50b3AgPSB0aGlzLnBvc2l0aW9uLnkgKyAncHgnXG4gICAgZWwuc3R5bGUud2lkdGggPSB0aGlzLnNpemUueCArICdweCdcbiAgICBlbC5zdHlsZS5oZWlnaHQgPSB0aGlzLnNpemUueSArICdweCdcbiAgfVxuXG4gIGdyb3d0aChzaXplKSB7XG4gICAgdGhpcy5zaXplID0gdGhpcy5zaXplLmFkZChzaXplKVxuICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uLmFkZChzaXplLm11bHQoLTAuNSkpXG4gIH1cblxuICBnZXRNaW5TaWRlKCkge1xuICAgIHJldHVybiBNYXRoLm1pbih0aGlzLnNpemUueCwgdGhpcy5zaXplLnkpXG4gIH1cblxuICBzdGF0aWMgZnJvbUVsZW1lbnQoZWxlbWVudCwgcGFyZW50PWVsZW1lbnQucGFyZW50Tm9kZSwgaXNDb25zaWRlclRyYW5zbGF0ZT1mYWxzZSkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gUG9pbnQuZWxlbWVudE9mZnNldChlbGVtZW50LCBwYXJlbnQsIGlzQ29uc2lkZXJUcmFuc2xhdGUpXG4gICAgY29uc3Qgc2l6ZSA9IFBvaW50LmVsZW1lbnRTaXplKGVsZW1lbnQpXG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUocG9zaXRpb24sIHNpemUpXG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldERlZmF1bHRDb250YWluZXIoZWxlbWVudCkge1xuICBsZXQgY29udGFpbmVyID0gZWxlbWVudC5wYXJlbnROb2RlXG4gIHdoaWxlIChjb250YWluZXIucGFyZW50Tm9kZSAmJiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShjb250YWluZXIpWydwb3NpdGlvbiddID09PSAnc3RhdGljJyAmJiBjb250YWluZXIudGFnTmFtZSAhPT0gJ0JPRFknKSB7XG4gICAgY29udGFpbmVyID0gY29udGFpbmVyLnBhcmVudE5vZGVcbiAgfVxuICByZXR1cm4gY29udGFpbmVyXG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAob3B0aW9ucyA9IHt9KSB7XG4gICAgdGhpcy5ldmVudHMgPSB7fVxuXG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5vbikge1xuICAgICAgZm9yIChjb25zdCBbZXZlbnROYW1lLCBmbl0gb2YgT2JqZWN0LmVudHJpZXMob3B0aW9ucy5vbikpIHtcbiAgICAgICAgdGhpcy5vbihldmVudE5hbWUsIGZuKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGVtaXQoZXZlbnROYW1lKSB7XG4gICAgdGhpcy5pbnRlcnJ1cHRlZCA9IGZhbHNlXG4gICAgY29uc3QgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKVxuXG4gICAgaWYgKCF0aGlzLmV2ZW50c1tldmVudE5hbWVdKSByZXR1cm5cblxuICAgIGZvciAoY29uc3QgZnVuYyBvZiB0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICBmdW5jKC4uLmFyZ3MpXG4gICAgICBpZiAodGhpcy5pbnRlcnJ1cHRlZCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpbnRlcnJ1cHQoKSB7XG4gICAgdGhpcy5pbnRlcnJ1cHRlZCA9IHRydWVcbiAgfVxuXG4gIG9uKGV2ZW50TmFtZSwgZm4pIHtcbiAgICBpZiAoIXRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSBbXVxuICAgIH1cblxuICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0ucHVzaChmbilcbiAgfVxuXG4gIHByZXBlbmRPbihldmVudE5hbWUsIGZuKSB7XG4gICAgaWYgKCF0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdID0gW11cbiAgICB9XG5cbiAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLnVuc2hpZnQoZm4pXG4gIH1cblxuICB1bnN1YnNjcmliZShldmVudE5hbWUsIGZuKSB7XG4gICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5ldmVudHNbZXZlbnROYW1lXS5pbmRleE9mKGZuKVxuICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5zcGxpY2UoaW5kZXgsIDEpXG4gICAgfVxuICB9XG5cbiAgcmVzZXRFbWl0dGVyICgpIHtcbiAgICB0aGlzLmV2ZW50cyA9IHt9XG4gIH1cblxuICByZXNldE9uKGV2ZW50TmFtZSkge1xuICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSBbXVxuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0RGlzdGFuY2UocDEsIHAyKSB7XG4gIGNvbnN0IGR4ID0gcDEueCAtIHAyLngsIGR5ID0gcDEueSAtIHAyLnlcbiAgcmV0dXJuIE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFhEaWZmZXJlbmNlKHAxLCBwMikge1xuICByZXR1cm4gTWF0aC5hYnMocDEueCAtIHAyLngpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRZRGlmZmVyZW5jZShwMSwgcDIpIHtcbiAgcmV0dXJuIE1hdGguYWJzKHAxLnkgLSBwMi55KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtZWRTcGFjZURpc3RhbmNlRmFjdG9yeShvcHRpb25zKSB7XG4gIHJldHVybiAocDEsIHAyKSA9PiB7XG4gICAgcmV0dXJuIE1hdGguc3FydChcbiAgICAgIE1hdGgucG93KG9wdGlvbnMueCAqIE1hdGguYWJzKHAxLnggLSBwMi54KSwgMikgK1xuICAgICAgTWF0aC5wb3cob3B0aW9ucy55ICogTWF0aC5hYnMocDEueSAtIHAyLnkpLCAyKVxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5kZXhPZk5lYXJlc3RQb2ludChhcnIsIHZhbCwgcmFkaXVzLCBnZXREaXN0YW5jZUZ1bmM9Z2V0RGlzdGFuY2UpIHtcbiAgbGV0IHNpemUsIGluZGV4ID0gMCwgaSwgdGVtcFxuICBpZiAoYXJyLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAtMVxuICB9XG4gIHNpemUgPSBnZXREaXN0YW5jZUZ1bmMoYXJyWzBdLCB2YWwpXG4gIGZvciAoaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICB0ZW1wID0gZ2V0RGlzdGFuY2VGdW5jKGFycltpXSwgdmFsKVxuICAgIGlmICh0ZW1wIDwgc2l6ZSkge1xuICAgICAgc2l6ZSA9IHRlbXBcbiAgICAgIGluZGV4ID0gaVxuICAgIH1cbiAgfVxuICBpZiAocmFkaXVzID49IDAgJiYgc2l6ZSA+IHJhZGl1cykge1xuICAgIHJldHVybiAtMVxuICB9XG4gIHJldHVybiBpbmRleFxufVxuIiwiaW1wb3J0IFBvaW50IGZyb20gJy4vcG9pbnQnXG5pbXBvcnQgeyBnZXREaXN0YW5jZSB9IGZyb20gJy4vZGlzdGFuY2VzJ1xuXG5leHBvcnQgZnVuY3Rpb24gY2xhbXAobWluLCBtYXgsIHZhbCkge1xuICByZXR1cm4gTWF0aC5tYXgobWluLCBNYXRoLm1pbihtYXgsIHZhbCkpXG59XG5cbi8vUmV0dXJuIGNyb3NzaW5nIHBvaW50IG9mIHR3byBsaW5lc1xuZXhwb3J0IGZ1bmN0aW9uIGRpcmVjdENyb3NzaW5nKEwxUDEsIEwxUDIsIEwyUDEsIEwyUDIpIHtcbiAgbGV0IHRlbXAsIGsxLCBrMiwgYjEsIGIyLCB4LCB5XG4gIGlmIChMMlAxLnggPT09IEwyUDIueCkge1xuICAgIHRlbXAgPSBMMlAxXG4gICAgTDJQMSA9IEwxUDFcbiAgICBMMVAxID0gdGVtcFxuICAgIHRlbXAgPSBMMlAyXG4gICAgTDJQMiA9IEwxUDJcbiAgICBMMVAyID0gdGVtcFxuICB9XG4gIGlmIChMMVAxLnggPT09IEwxUDIueCkge1xuICAgIGsyID0gKEwyUDIueSAtIEwyUDEueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgIGIyID0gKEwyUDIueCAqIEwyUDEueSAtIEwyUDEueCAqIEwyUDIueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgIHggPSBMMVAxLnhcbiAgICB5ID0geCAqIGsyICsgYjJcbiAgICByZXR1cm4gbmV3IFBvaW50KHgsIHkpXG4gIH0gZWxzZSB7XG4gICAgazEgPSAoTDFQMi55IC0gTDFQMS55KSAvIChMMVAyLnggLSBMMVAxLngpXG4gICAgYjEgPSAoTDFQMi54ICogTDFQMS55IC0gTDFQMS54ICogTDFQMi55KSAvIChMMVAyLnggLSBMMVAxLngpXG4gICAgazIgPSAoTDJQMi55IC0gTDJQMS55KSAvIChMMlAyLnggLSBMMlAxLngpXG4gICAgYjIgPSAoTDJQMi54ICogTDJQMS55IC0gTDJQMS54ICogTDJQMi55KSAvIChMMlAyLnggLSBMMlAxLngpXG4gICAgeCA9IChiMSAtIGIyKSAvIChrMiAtIGsxKVxuICAgIHkgPSB4ICogazEgKyBiMVxuICAgIHJldHVybiBuZXcgUG9pbnQoeCwgeSlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRUb1NlZ21lbnQoTFAxLCBMUDIsIFApIHtcbiAgbGV0IHgsIHlcbiAgeCA9IGNsYW1wKE1hdGgubWluKExQMS54LCBMUDIueCksIE1hdGgubWF4KExQMS54LCBMUDIueCksIFAueClcbiAgaWYgKHggIT09IFAueCkge1xuICAgIHkgPSAoeCA9PT0gTFAxLngpID8gTFAxLnkgOiBMUDIueVxuICAgIFAgPSBuZXcgUG9pbnQoeCwgeSlcbiAgfVxuXG4gIHkgPSBjbGFtcChNYXRoLm1pbihMUDEueSwgTFAyLnkpLCBNYXRoLm1heChMUDEueSwgTFAyLnkpLCBQLnkpXG4gIGlmICh5ICE9PSBQLnkpIHtcbiAgICB4ID0gKHkgPT09IExQMS55KSA/IExQMS54IDogTFAyLnhcbiAgICBQID0gbmV3IFBvaW50KHgsIHkpXG4gIH1cblxuICByZXR1cm4gUFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRUb0xpbmUoQSwgQiwgUCkge1xuICBjb25zdCBBUCA9IG5ldyBQb2ludChQLnggLSBBLngsIFAueSAtIEEueSksXG4gICAgQUIgPSBuZXcgUG9pbnQoQi54IC0gQS54LCBCLnkgLSBBLnkpLFxuICAgIGFiMiA9IEFCLnggKiBBQi54ICsgQUIueSAqIEFCLnksXG4gICAgYXBfYWIgPSBBUC54ICogQUIueCArIEFQLnkgKiBBQi55LFxuICAgIHQgPSBhcF9hYiAvIGFiMlxuICByZXR1cm4gbmV3IFBvaW50KEEueCArIEFCLnggKiB0LCBBLnkgKyBBQi55ICogdClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBvaW50T25MaW5lKExQMSwgTFAyLCBwZXJjZW50KSB7XG4gIGNvbnN0IGR4ID0gTFAyLnggLSBMUDEueCwgZHkgPSBMUDIueSAtIExQMS55XG4gIHJldHVybiBuZXcgUG9pbnQoTFAxLnggKyBwZXJjZW50ICogZHgsIExQMS55ICsgcGVyY2VudCAqIGR5KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9pbnRPbkxpbmVCeUxlbmdodChMUDEsIExQMiwgbGVuZ2h0KSB7XG4gIGNvbnN0IGR4ID0gTFAyLnggLSBMUDEueFxuICBjb25zdCBkeSA9IExQMi55IC0gTFAxLnlcbiAgY29uc3QgcGVyY2VudCA9IGxlbmdodCAvIGdldERpc3RhbmNlKExQMSwgTFAyKVxuICByZXR1cm4gbmV3IFBvaW50KExQMS54ICsgcGVyY2VudCAqIGR4LCBMUDEueSArIHBlcmNlbnQgKiBkeSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFBvaW50VG9Cb3VuZFBvaW50cyhib3VuZHBvaW50cywgcG9pbnQsIGlzUmlnaHQpIHtcbiAgY29uc3QgcmVzdWx0ID0gYm91bmRwb2ludHMuZmlsdGVyKChiUG9pbnQpID0+IHtcbiAgICByZXR1cm4gYlBvaW50LnkgPiBwb2ludC55IHx8IChpc1JpZ2h0ID8gYlBvaW50LnggPCBwb2ludC54IDogYlBvaW50LnggPiBwb2ludC54KVxuICB9KVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzdWx0Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHBvaW50LnkgPCByZXN1bHRbaV0ueSkge1xuICAgICAgcmVzdWx0LnNwbGljZShpLCAwLCBwb2ludClcbiAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG4gIH1cbiAgcmVzdWx0LnB1c2gocG9pbnQpXG4gIHJldHVybiByZXN1bHRcbn1cbiIsImltcG9ydCBQb2ludCBmcm9tICcuL3BvaW50J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QW5nbGVEaWZmKGFscGhhLCBiZXRhKSB7XG4gIGNvbnN0IG1pbkFuZ2xlID0gTWF0aC5taW4oYWxwaGEsIGJldGEpXG4gIGNvbnN0IG1heEFuZ2xlID0gIE1hdGgubWF4KGFscGhhLCBiZXRhKVxuICByZXR1cm4gTWF0aC5taW4obWF4QW5nbGUgLSBtaW5BbmdsZSwgbWluQW5nbGUgKyBNYXRoLlBJKjIgLSBtYXhBbmdsZSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFuZ2xlKHAxLCBwMikge1xuICBjb25zdCBkaWZmID0gcDIuc3ViKHAxKVxuICByZXR1cm4gbm9ybWFsaXplQW5nbGUoTWF0aC5hdGFuMihkaWZmLnksIGRpZmYueCkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b1JhZGlhbihhbmdsZSkge1xuICByZXR1cm4gKChhbmdsZSAlIDM2MCkgKiBNYXRoLlBJIC8gMTgwKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9EZWdyZWUoYW5nbGUpIHtcbiAgcmV0dXJuIChhbmdsZSAqIDE4MCAvIE1hdGguUEkpICUgMzYwXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZEFuZ2xlKG1pbiwgbWF4LCB2YWwpIHtcbiAgbGV0IGRtaW4sIGRtYXhcbiAgaWYgKG1pbiA8IG1heCAmJiB2YWwgPiBtaW4gJiYgdmFsIDwgbWF4KSB7XG4gICAgcmV0dXJuIHZhbFxuICB9IGVsc2UgaWYgKG1heCA8IG1pbiAmJiAodmFsIDwgbWF4IHx8IHZhbCA+IG1pbikpIHtcbiAgICByZXR1cm4gdmFsXG4gIH0gZWxzZSB7XG4gICAgZG1pbiA9IGdldEFuZ2xlRGlmZihtaW4sIHZhbClcbiAgICBkbWF4ID0gZ2V0QW5nbGVEaWZmKG1heCwgdmFsKVxuICAgIGlmIChkbWluIDwgZG1heCkge1xuICAgICAgcmV0dXJuIG1pblxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbWF4XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROZWFyZXN0QW5nbGUoYXJyLCBhbmdsZSkge1xuICBsZXQgaSwgdGVtcCwgZGlmZiA9IE1hdGguUEkgKiAyLCB2YWx1ZVxuICBmb3IgKGkgPSAwOyBpIDwgYXJyLmxlbmd0aDtpKyspIHtcbiAgICB0ZW1wID0gZ2V0QW5nbGVEaWZmKGFycltpXSwgYW5nbGUpXG4gICAgaWYgKGRpZmYgPCB0ZW1wKSB7XG4gICAgICBkaWZmID0gdGVtcFxuICAgICAgdmFsdWUgPSBhcnJbaV1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHZhbHVlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVBbmdsZSh2YWwpIHtcbiAgd2hpbGUgKHZhbCA8IDApIHtcbiAgICB2YWwgKz0gMiAqIE1hdGguUElcbiAgfVxuICB3aGlsZSAodmFsID4gMiAqIE1hdGguUEkpIHtcbiAgICB2YWwgLT0gMiAqIE1hdGguUElcbiAgfVxuICByZXR1cm4gdmFsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oYW5nbGUsIGxlbmd0aCwgY2VudGVyKSB7XG4gIGNlbnRlciA9IGNlbnRlciB8fCBuZXcgUG9pbnQoMCwgMClcbiAgcmV0dXJuIGNlbnRlci5hZGQobmV3IFBvaW50KGxlbmd0aCAqIE1hdGguY29zKGFuZ2xlKSwgbGVuZ3RoICogTWF0aC5zaW4oYW5nbGUpKSlcbn1cbiIsImltcG9ydCBQb2ludCBmcm9tICcuL2dlb21ldHJ5L3BvaW50J1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tICcuL2dlb21ldHJ5L3JlY3RhbmdsZSdcbmltcG9ydCB7XG4gIGdldFBvaW50T25MaW5lQnlMZW5naHQsXG4gIGRpcmVjdENyb3NzaW5nLFxuICBib3VuZFRvTGluZVxufSBmcm9tICcuL2dlb21ldHJ5L2JvdW5kcydcblxuaW1wb3J0IHtcbiAgZ2V0QW5nbGUsXG4gIG5vcm1hbGl6ZUFuZ2xlLFxuICBib3VuZEFuZ2xlLFxuICBnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW1cbn0gZnJvbSAnLi9nZW9tZXRyeS9hbmdsZXMnXG5cbmV4cG9ydCBjbGFzcyBCb3VuZCB7XG4gIGNvbnN0cnVjdG9yICgpIHt9XG5cbiAgYm91bmQocG9pbnQsIF9zaXplKSB7XG4gICAgcmV0dXJuIHBvaW50XG4gIH1cblxuICByZWZyZXNoICgpIHt9XG5cbiAgc3RhdGljIGJvdW5kaW5nKCkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IHRoaXMoLi4uYXJndW1lbnRzKVxuICAgIHJldHVybiBpbnN0YW5jZS5ib3VuZC5iaW5kKGluc3RhbmNlKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvUmVjdGFuZ2xlIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3RvcihyZWN0YW5nbGUpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5yZWN0YW5nbGUgPSByZWN0YW5nbGVcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgY2FsY1BvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIGNvbnN0IHJlY3RQMiA9IHRoaXMucmVjdGFuZ2xlLmdldFAzKClcblxuICAgIGlmICh0aGlzLnJlY3RhbmdsZS5wb3NpdGlvbi54ID4gY2FsY1BvaW50LngpIHtcbiAgICAgIChjYWxjUG9pbnQueCA9IHRoaXMucmVjdGFuZ2xlLnBvc2l0aW9uLngpXG4gICAgfVxuICAgIGlmICh0aGlzLnJlY3RhbmdsZS5wb3NpdGlvbi55ID4gY2FsY1BvaW50LnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gdGhpcy5yZWN0YW5nbGUucG9zaXRpb24ueVxuICAgIH1cbiAgICBpZiAocmVjdFAyLnggPCBjYWxjUG9pbnQueCArIHNpemUueCkge1xuICAgICAgY2FsY1BvaW50LnggPSByZWN0UDIueCAtIHNpemUueFxuICAgIH1cbiAgICBpZiAocmVjdFAyLnkgPCBjYWxjUG9pbnQueSArIHNpemUueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSByZWN0UDIueSAtIHNpemUueVxuICAgIH1cblxuICAgIHJldHVybiBjYWxjUG9pbnRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb0VsZW1lbnQgZXh0ZW5kcyBCb3VuZFRvUmVjdGFuZ2xlIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29udGFpbmVyKSB7XG4gICAgc3VwZXIoUmVjdGFuZ2xlLmZyb21FbGVtZW50KGVsZW1lbnQsIGNvbnRhaW5lcikpXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyXG4gIH1cblxuICByZWZyZXNoICgpIHtcbiAgICB0aGlzLnJlY3RhbmdsZSA9IFJlY3RhbmdsZS5mcm9tRWxlbWVudCh0aGlzLmVsZW1lbnQsIHRoaXMuY29udGFpbmVyKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvTGluZVggZXh0ZW5kcyBCb3VuZCB7XG4gIGNvbnN0cnVjdG9yKHgsIHN0YXJ0WSwgZW5kWSkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnggPSB4XG4gICAgdGhpcy5zdGFydFkgPSBzdGFydFlcbiAgICB0aGlzLmVuZFkgPSBlbmRZXG4gIH1cblxuICBib3VuZChwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IGNhbGNQb2ludCA9IHBvaW50LmNsb25lKClcblxuICAgIGNhbGNQb2ludC54ID0gdGhpcy54XG4gICAgaWYgKHRoaXMuc3RhcnRZID4gY2FsY1BvaW50LnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gdGhpcy5zdGFydFlcbiAgICB9XG4gICAgaWYgKHRoaXMuZW5kWSA8IGNhbGNQb2ludC55ICsgc2l6ZS55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHRoaXMuZW5kWSAtIHNpemUueVxuICAgIH1cblxuICAgIHJldHVybiBjYWxjUG9pbnRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb0xpbmVZIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3Rvcih5LCBzdGFydFgsIGVuZFgpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy55ID0geVxuICAgIHRoaXMuc3RhcnRYID0gc3RhcnRYXG4gICAgdGhpcy5lbmRYID0gZW5kWFxuICB9XG5cbiAgYm91bmQocG9pbnQsIHNpemUpIHtcbiAgICBjb25zdCBjYWxjUG9pbnQgPSBwb2ludC5jbG9uZSgpXG4gICAgY2FsY1BvaW50LnkgPSB0aGlzLnlcbiAgICBpZiAodGhpcy5zdGFydFggPiBjYWxjUG9pbnQueCkge1xuICAgICAgY2FsY1BvaW50LnggPSB0aGlzLnN0YXJ0WFxuICAgIH1cbiAgICBpZiAodGhpcy5lbmRYIDwgY2FsY1BvaW50LnggKyBzaXplLngpIHtcbiAgICAgIGNhbGNQb2ludC54ID0gdGhpcy5lbmRYIC0gc2l6ZS54XG4gICAgfVxuICAgIHJldHVybiBjYWxjUG9pbnRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb0xpbmUgZXh0ZW5kcyBCb3VuZCB7XG4gIGNvbnN0cnVjdG9yKHN0YXJ0UG9pbnQsIGVuZFBvaW50KSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuc3RhcnRQb2ludCA9IHN0YXJ0UG9pbnRcbiAgICB0aGlzLmVuZFBvaW50ID0gZW5kUG9pbnRcbiAgICBjb25zdCBhbHBoYSA9IE1hdGguYXRhbjIoZW5kUG9pbnQueSAtIHN0YXJ0UG9pbnQueSwgZW5kUG9pbnQueCAtIHN0YXJ0UG9pbnQueClcbiAgICBjb25zdCBiZXRhID0gYWxwaGEgKyBNYXRoLlBJIC8gMlxuICAgIHRoaXMuc29tZUsgPSAxMFxuICAgIHRoaXMuY29zQmV0YSA9IE1hdGguY29zKGJldGEpXG4gICAgdGhpcy5zaW5CZXRhID0gTWF0aC5zaW4oYmV0YSlcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgcG9pbnQyID0gbmV3IFBvaW50KFxuICAgICAgcG9pbnQueCArIHRoaXMuc29tZUsgKiB0aGlzLmNvc0JldGEsXG4gICAgICBwb2ludC55ICsgdGhpcy5zb21lSyAqIHRoaXMuc2luQmV0YVxuICAgIClcblxuICAgIGNvbnN0IG5ld0VuZFBvaW50ID0gZ2V0UG9pbnRPbkxpbmVCeUxlbmdodCh0aGlzLmVuZFBvaW50LCB0aGlzLnN0YXJ0UG9pbnQsIHNpemUueClcbiAgICBjb25zdCBwb2ludENyb3NzaW5nID0gZGlyZWN0Q3Jvc3NpbmcodGhpcy5zdGFydFBvaW50LCB0aGlzLmVuZFBvaW50LCBwb2ludCwgcG9pbnQyKVxuXG4gICAgcmV0dXJuIGJvdW5kVG9MaW5lKHRoaXMuc3RhcnRQb2ludCwgbmV3RW5kUG9pbnQsIHBvaW50Q3Jvc3NpbmcpXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9DaXJjbGUgZXh0ZW5kcyBCb3VuZCB7XG4gIGNvbnN0cnVjdG9yKGNlbnRlciwgcmFkaXVzKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuY2VudGVyID0gY2VudGVyXG4gICAgdGhpcy5yYWRpdXMgPSByYWRpdXNcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBfc2l6ZSkge1xuICAgIHJldHVybiBnZXRQb2ludE9uTGluZUJ5TGVuZ2h0KHRoaXMuY2VudGVyLCBwb2ludCwgdGhpcy5yYWRpdXMpXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9BcmMgZXh0ZW5kcyBCb3VuZFRvQ2lyY2xlIHtcbiAgY29uc3RydWN0b3IoY2VudGVyLCByYWRpdXMsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlKSB7XG4gICAgc3VwZXIoY2VudGVyLCByYWRpdXMpXG4gICAgdGhpcy5fc3RhcnRBbmdsZSA9IHN0YXJ0QW5nbGVcbiAgICB0aGlzLl9lbmRBbmdsZSA9IGVuZEFuZ2xlXG4gIH1cblxuICBzdGFydEFuZ2xlKCkge1xuICAgIHJldHVybiB0eXBlb2YgdGhpcy5fc3RhcnRBbmdsZSA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMuX3N0YXJ0QW5nbGUoKSA6IHRoaXMuX3N0YXJ0QW5nbGVcbiAgfVxuXG4gIGVuZEFuZ2xlKCkge1xuICAgIHJldHVybiB0eXBlb2YgdGhpcy5fZW5kQW5nbGUgPT09ICdmdW5jdGlvbicgPyB0aGlzLl9lbmRBbmdsZSgpIDogdGhpcy5fZW5kQW5nbGVcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBfc2l6ZSkge1xuICAgIGxldCBhbmdsZSA9IGdldEFuZ2xlKHRoaXMuY2VudGVyLCBwb2ludClcbiAgICBhbmdsZSA9IG5vcm1hbGl6ZUFuZ2xlKGFuZ2xlKVxuICAgIGFuZ2xlID0gYm91bmRBbmdsZSh0aGlzLnN0YXJ0QW5nbGUoKSwgdGhpcy5lbmRBbmdsZSgpLCBhbmdsZSlcbiAgICByZXR1cm4gZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKGFuZ2xlLCB0aGlzLnJhZGl1cywgdGhpcy5jZW50ZXIpXG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGFycmF5LCB2YWwpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChhcnJheVtpXSA9PT0gdmFsKSB7XG4gICAgICBhcnJheS5zcGxpY2UoaSwgMSlcbiAgICAgIGktLVxuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyYXlcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJhbmdlKHN0YXJ0LCBzdG9wLCBzdGVwKSB7XG4gIGNvbnN0IHJlc3VsdCA9IFtdXG4gIGlmICh0eXBlb2Ygc3RvcCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBzdG9wID0gc3RhcnRcbiAgICBzdGFydCA9IDBcbiAgfVxuICBpZiAodHlwZW9mIHN0ZXAgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgc3RlcCA9IDFcbiAgfVxuICBpZiAoKHN0ZXAgPiAwICYmIHN0YXJ0ID49IHN0b3ApIHx8IChzdGVwIDwgMCAmJiBzdGFydCA8PSBzdG9wKSkge1xuICAgIHJldHVybiBbXVxuICB9XG4gIGZvciAobGV0IGkgPSBzdGFydDsgc3RlcCA+IDAgPyBpIDwgc3RvcCA6IGkgPiBzdG9wOyBpICs9IHN0ZXApIHtcbiAgICByZXN1bHQucHVzaChpKVxuICB9XG4gIHJldHVybiByZXN1bHRcbn1cbiIsImltcG9ydCBQb2ludCBmcm9tICcuL2dlb21ldHJ5L3BvaW50J1xuaW1wb3J0IHsgYWRkUG9pbnRUb0JvdW5kUG9pbnRzIH0gZnJvbSAnLi9nZW9tZXRyeS9ib3VuZHMnXG5cbmltcG9ydCB7XG4gIGluZGV4T2ZOZWFyZXN0UG9pbnQsXG4gIGdldERpc3RhbmNlXG59IGZyb20gJy4vZ2VvbWV0cnkvZGlzdGFuY2VzJ1xuXG5jbGFzcyBCYXNpY1N0cmF0ZWd5IHtcbiAgY29uc3RydWN0b3IocmVjdGFuZ2xlLCBvcHRpb25zPXt9KSB7XG4gICAgdGhpcy5yZWN0YW5nbGUgPSByZWN0YW5nbGVcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zXG4gIH1cblxuICBnZXQgYm91bmRSZWN0ICgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMucmVjdGFuZ2xlID09PSAnZnVuY3Rpb24nID8gdGhpcy5yZWN0YW5nbGUoKSA6IHRoaXMucmVjdGFuZ2xlXG4gIH1cbn1cblxuY2xhc3MgTm90Q3Jvc3NpbmdTdHJhdGVneSBleHRlbmRzIEJhc2ljU3RyYXRlZ3kge1xuICBwb3NpdGlvbmluZyAocmVjdGFuZ2xlTGlzdCwgaW5kZXhlc09mTmV3cykge1xuICAgIGNvbnN0IHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMgPSByZWN0YW5nbGVMaXN0LnJlZHVjZSgoaW5kZXhlcywgX3JlY3QsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoaW5kZXhlc09mTmV3cy5pbmRleE9mKGluZGV4KSA9PT0gLTEpIHtcbiAgICAgICAgaW5kZXhlcy5wdXNoKGluZGV4KVxuICAgICAgfVxuICAgICAgcmV0dXJuIGluZGV4ZXNcbiAgICB9LCBbXSlcblxuICAgIGluZGV4ZXNPZk5ld3MuZm9yRWFjaCgoaW5kZXgpID0+IHtcbiAgICAgIGxldCByZWN0ID0gcmVjdGFuZ2xlTGlzdFtpbmRleF1cbiAgICAgIGxldCByZW1vdmFibGUgPSBmYWxzZVxuXG4gICAgICBzdGF0aWNSZWN0YW5nbGVJbmRleGVzLmZvckVhY2goKGluZGV4T2ZTdGF0aWMpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhdGljUmVjdCA9IHJlY3RhbmdsZUxpc3RbaW5kZXhPZlN0YXRpY11cbiAgICAgICAgcmVjdCA9IHN0YXRpY1JlY3QubW92ZVRvQm91bmQocmVjdClcbiAgICAgIH0pXG5cbiAgICAgIHJlbW92YWJsZSA9IHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMuc29tZSgoaW5kZXhPZlN0YXRpYykgPT4ge1xuICAgICAgICBjb25zdCBzdGF0aWNSZWN0ID0gcmVjdGFuZ2xlTGlzdFtpbmRleE9mU3RhdGljXVxuICAgICAgICByZXR1cm4gICEhc3RhdGljUmVjdC5hbmQocmVjdClcbiAgICAgIH0pIHx8IHJlY3QuYW5kKHRoaXMuYm91bmRSZWN0KS5nZXRTcXVhcmUoKSAhPT0gcmVjdC5nZXRTcXVhcmUoKVxuXG4gICAgICBpZiAocmVtb3ZhYmxlKSB7XG4gICAgICAgIHJlY3QucmVtb3ZhYmxlID0gdHJ1ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdGljUmVjdGFuZ2xlSW5kZXhlcy5wdXNoKGluZGV4KVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHJlY3RhbmdsZUxpc3RcbiAgfVxuXG4gIHNvcnRpbmcob2RsRHJhZ2dhYmxlc0xpc3QsIG5ld0RyYWdnYWJsZXMsIGluZGV4T2ZOZXdzKSB7XG4gICAgY29uc3QgZHJhZ2dhYmxlcyA9IG9kbERyYWdnYWJsZXNMaXN0LmNvbmNhdChuZXdEcmFnZ2FibGVzKVxuICAgIG5ld0RyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBpbmRleE9mTmV3cy5wdXNoKGRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpKVxuICAgIH0pXG4gICAgcmV0dXJuIGRyYWdnYWJsZXNcbiAgfVxufVxuXG5jbGFzcyBGbG9hdExlZnRTdHJhdGVneSBleHRlbmRzIEJhc2ljU3RyYXRlZ3kge1xuICBjb25zdHJ1Y3RvcihyZWN0YW5nbGUsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcihyZWN0YW5nbGUsIG9wdGlvbnMpXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICByZW1vdmFibGU6IHRydWVcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGhpcy5yYWRpdXMgPSBvcHRpb25zLnJhZGl1cyB8fCA4MFxuXG4gICAgdGhpcy5wYWRkaW5nVG9wTGVmdCA9IG9wdGlvbnMucGFkZGluZ1RvcExlZnQgfHwgbmV3IFBvaW50KDAsIDApXG4gICAgdGhpcy5wYWRkaW5nQm90dG9tUmlnaHQgPSBvcHRpb25zLnBhZGRpbmdCb3R0b21SaWdodCB8fCBuZXcgUG9pbnQoMCwgMClcbiAgICB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyA9IG9wdGlvbnMueUdhcEJldHdlZW5EcmFnZ2FibGVzIHx8IDBcblxuICAgIHRoaXMuZ2V0RGlzdGFuY2UgPSBvcHRpb25zLmdldERpc3RhbmNlIHx8IGdldERpc3RhbmNlXG4gICAgdGhpcy5nZXRQb3NpdGlvbiA9IG9wdGlvbnMuZ2V0UG9zaXRpb24gfHwgKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5wb3NpdGlvbilcbiAgfVxuXG4gIHBvc2l0aW9uaW5nKHJlY3RhbmdsZUxpc3QsIF9pbmRleGVzT2ZOZXdzKSB7XG4gICAgY29uc3QgYm91bmRSZWN0ID0gdGhpcy5ib3VuZFJlY3RcbiAgICBjb25zdCByZWN0UDIgPSBib3VuZFJlY3QuZ2V0UDIoKVxuICAgIGxldCBib3VuZGFyeVBvaW50cyA9IFtib3VuZFJlY3QucG9zaXRpb25dXG5cbiAgICByZWN0YW5nbGVMaXN0LmZvckVhY2goKHJlY3QsIHJlY3RJbmRleCkgPT4ge1xuICAgICAgbGV0IHBvc2l0aW9uLCBpc1ZhbGlkID0gZmFsc2VcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm91bmRhcnlQb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcG9zaXRpb24gPSBuZXcgUG9pbnQoXG4gICAgICAgICAgYm91bmRhcnlQb2ludHNbaV0ueCArIHRoaXMucGFkZGluZ1RvcExlZnQueCxcbiAgICAgICAgICBpID4gMCA/IChib3VuZGFyeVBvaW50c1tpIC0gMV0ueSArIHRoaXMueUdhcEJldHdlZW5EcmFnZ2FibGVzKSA6IChib3VuZFJlY3QucG9zaXRpb24ueSArIHRoaXMucGFkZGluZ1RvcExlZnQueSlcbiAgICAgICAgKVxuXG4gICAgICAgIGlzVmFsaWQgPSAocG9zaXRpb24ueCArIHJlY3Quc2l6ZS54IDwgcmVjdFAyLngpXG5cbiAgICAgICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICBwb3NpdGlvbiA9IG5ldyBQb2ludChcbiAgICAgICAgICBib3VuZFJlY3QucG9zaXRpb24ueCArIHRoaXMucGFkZGluZ1RvcExlZnQueCxcbiAgICAgICAgICBib3VuZGFyeVBvaW50c1tib3VuZGFyeVBvaW50cy5sZW5ndGggLSAxXS55ICsgKHJlY3RJbmRleCA+IDAgPyB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyA6IHRoaXMucGFkZGluZ1RvcExlZnQueSlcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICByZWN0LnBvc2l0aW9uID0gcG9zaXRpb25cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucmVtb3ZhYmxlICYmIHJlY3QuZ2V0UDMoKS55ID4gYm91bmRSZWN0LmdldFAzKCkueSkge1xuICAgICAgICByZWN0LnJlbW92YWJsZSA9IHRydWVcbiAgICAgIH1cblxuICAgICAgYm91bmRhcnlQb2ludHMgPSBhZGRQb2ludFRvQm91bmRQb2ludHMoYm91bmRhcnlQb2ludHMsIHJlY3QuZ2V0UDMoKS5hZGQodGhpcy5wYWRkaW5nQm90dG9tUmlnaHQpKVxuICAgIH0pXG4gICAgcmV0dXJuIHJlY3RhbmdsZUxpc3RcbiAgfVxuXG4gIHNvcnRpbmcob2RsRHJhZ2dhYmxlc0xpc3QsIG5ld0RyYWdnYWJsZXMsIGluZGV4T2ZOZXdzKSB7XG4gICAgY29uc3QgbmV3TGlzdCA9IG9kbERyYWdnYWJsZXNMaXN0LmNvbmNhdCgpXG4gICAgY29uc3QgbGlzdE9sZFBvc2l0aW9uID0gb2RsRHJhZ2dhYmxlc0xpc3QubWFwKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5nZXRQb3NpdGlvbigpKVxuICAgIG5ld0RyYWdnYWJsZXMuZm9yRWFjaCgobmV3RHJhZ2dhYmxlKSA9PiB7XG4gICAgICBsZXQgaW5kZXggPSBpbmRleE9mTmVhcmVzdFBvaW50KGxpc3RPbGRQb3NpdGlvbiwgdGhpcy5nZXRQb3NpdGlvbihuZXdEcmFnZ2FibGUpLCB0aGlzLnJhZGl1cywgdGhpcy5nZXREaXN0YW5jZSlcbiAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgaW5kZXggPSBuZXdMaXN0Lmxlbmd0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5kZXggPSBuZXdMaXN0LmluZGV4T2Yob2RsRHJhZ2dhYmxlc0xpc3RbaW5kZXhdKVxuICAgICAgfVxuICAgICAgbmV3TGlzdC5zcGxpY2UoaW5kZXgsIDAsIG5ld0RyYWdnYWJsZSlcbiAgICB9KVxuICAgIG5ld0RyYWdnYWJsZXMuZm9yRWFjaCgobmV3RHJhZ2dhYmxlKSA9PiB7XG4gICAgICBpbmRleE9mTmV3cy5wdXNoKG5ld0xpc3QuaW5kZXhPZihuZXdEcmFnZ2FibGUpKVxuICAgIH0pXG4gICAgcmV0dXJuIG5ld0xpc3RcbiAgfVxufVxuXG5jbGFzcyBGbG9hdFJpZ2h0U3RyYXRlZ3kgZXh0ZW5kcyBGbG9hdExlZnRTdHJhdGVneSB7XG4gIGNvbnN0cnVjdG9yKHJlY3RhbmdsZSwgb3B0aW9ucz17fSkge1xuICAgIHN1cGVyKHJlY3RhbmdsZSwgb3B0aW9ucylcblxuICAgIHRoaXMucGFkZGluZ1RvcFJpZ2h0ID0gb3B0aW9ucy5wYWRkaW5nVG9wUmlnaHQgfHwgbmV3IFBvaW50KDUsIDUpXG4gICAgdGhpcy5wYWRkaW5nQm90dG9tTGVmdCA9IG9wdGlvbnMucGFkZGluZ0JvdHRvbUxlZnQgfHwgbmV3IFBvaW50KDAsIDApXG4gICAgdGhpcy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgPSBvcHRpb25zLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyB8fCAwXG5cbiAgICB0aGlzLnBhZGRpbmdCb3R0b21OZWdMZWZ0ID0gbmV3IFBvaW50KC10aGlzLnBhZGRpbmdCb3R0b21MZWZ0LngsIHRoaXMucGFkZGluZ0JvdHRvbUxlZnQueSlcbiAgfVxuXG4gIHBvc2l0aW9uaW5nKHJlY3RhbmdsZUxpc3QsIF9pbmRleGVzT2ZOZXdzKSB7XG4gICAgY29uc3QgYm91bmRSZWN0ID0gdGhpcy5ib3VuZFJlY3RcbiAgICBsZXQgYm91bmRhcnlQb2ludHMgPSBbYm91bmRSZWN0LmdldFAyKCldXG5cbiAgICByZWN0YW5nbGVMaXN0LmZvckVhY2goKHJlY3QsIHJlY3RJbmRleCkgPT4ge1xuICAgICAgbGV0IHBvc2l0aW9uLCBpc1ZhbGlkID0gZmFsc2VcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm91bmRhcnlQb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcG9zaXRpb24gPSBuZXcgUG9pbnQoXG4gICAgICAgICAgYm91bmRhcnlQb2ludHNbaV0ueCAtIHJlY3Quc2l6ZS54IC0gdGhpcy5wYWRkaW5nVG9wUmlnaHQueCxcbiAgICAgICAgICBpID4gMCA/IChib3VuZGFyeVBvaW50c1tpIC0gMV0ueSArIHRoaXMueUdhcEJldHdlZW5EcmFnZ2FibGVzKSA6IChib3VuZFJlY3QucG9zaXRpb24ueSArIHRoaXMucGFkZGluZ1RvcFJpZ2h0LnkpXG4gICAgICAgIClcblxuICAgICAgICBpc1ZhbGlkID0gKHBvc2l0aW9uLnggPiByZWN0LnBvc2l0aW9uLngpXG4gICAgICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICAgIHBvc2l0aW9uID0gbmV3IFBvaW50KFxuICAgICAgICAgIGJvdW5kUmVjdC5nZXRQMigpLnggIC0gcmVjdC5zaXplLnggLSB0aGlzLnBhZGRpbmdUb3BSaWdodC54LFxuICAgICAgICAgIGJvdW5kYXJ5UG9pbnRzW2JvdW5kYXJ5UG9pbnRzLmxlbmd0aCAtIDFdLnkgKyAocmVjdEluZGV4ID4gMCA/IHRoaXMueUdhcEJldHdlZW5EcmFnZ2FibGVzIDogdGhpcy5wYWRkaW5nVG9wUmlnaHQueSlcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgcmVjdC5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnJlbW92YWJsZSAmJiByZWN0LmdldFA0KCkueSA+IGJvdW5kUmVjdC5nZXRQNCgpLnkpIHtcbiAgICAgICAgcmVjdC5yZW1vdmFibGUgPSB0cnVlXG4gICAgICB9XG4gICAgICBib3VuZGFyeVBvaW50cyA9IGFkZFBvaW50VG9Cb3VuZFBvaW50cyhib3VuZGFyeVBvaW50cywgcmVjdC5nZXRQNCgpLmFkZCh0aGlzLnBhZGRpbmdCb3R0b21OZWdMZWZ0KSwgdHJ1ZSlcbiAgICB9KVxuICAgIHJldHVybiByZWN0YW5nbGVMaXN0XG4gIH1cbn1cblxuZXhwb3J0IHsgTm90Q3Jvc3NpbmdTdHJhdGVneSwgRmxvYXRMZWZ0U3RyYXRlZ3ksIEZsb2F0UmlnaHRTdHJhdGVneSB9XG4iLCJpbXBvcnQgcmFuZ2UgZnJvbSAnLi91dGlscy9yYW5nZS5qcydcbmltcG9ydCByZW1vdmVJdGVtIGZyb20gJy4vdXRpbHMvcmVtb3ZlLWFycmF5LWl0ZW0nXG5pbXBvcnQgZ2V0RGVmYXVsdENvbnRhaW5lciBmcm9tICcuL3V0aWxzL2dldC1kZWZhdWx0LWNvbnRhaW5lcidcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudEVtaXR0ZXInXG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gJy4vZ2VvbWV0cnkvcmVjdGFuZ2xlJ1xuaW1wb3J0IHsgdHJhbnNmb3JtZWRTcGFjZURpc3RhbmNlRmFjdG9yeSB9IGZyb20gJy4vZ2VvbWV0cnkvZGlzdGFuY2VzJ1xuaW1wb3J0IHsgc2NvcGVzLCBkZWZhdWx0U2NvcGUgfSBmcm9tICcuL3Njb3BlJ1xuXG5pbXBvcnQgeyBGbG9hdExlZnRTdHJhdGVneSB9IGZyb20gJy4vcG9zaXRpb25pbmcnXG5pbXBvcnQgeyBCb3VuZFRvRWxlbWVudCB9IGZyb20gJy4vYm91bmRpbmcnXG5cbmNvbnN0IGFkZFRvRGVmYXVsdFNjb3BlID0gZnVuY3Rpb24odGFyZ2V0KSB7XG4gIGRlZmF1bHRTY29wZS5hZGRUYXJnZXQodGFyZ2V0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXJnZXQgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBkcmFnZ2FibGVzLCBvcHRpb25zID0ge30pIHtcbiAgICBzdXBlcihvcHRpb25zKVxuICAgIGNvbnN0IHRhcmdldCA9IHRoaXNcblxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgdGltZUVuZDogMjAwLFxuICAgICAgdGltZUV4Y2FuZ2U6IDQwMFxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0aGlzLnBvc2l0aW9uaW5nU3RyYXRlZ3kgPSBvcHRpb25zLnN0cmF0ZWd5IHx8IG5ldyBGbG9hdExlZnRTdHJhdGVneShcbiAgICAgIHRoaXMuZ2V0UmVjdGFuZ2xlLmJpbmQodGhpcyksXG4gICAgICB7XG4gICAgICAgIHJhZGl1czogODAsXG4gICAgICAgIGdldERpc3RhbmNlOiB0cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5KHsgeDogMSwgeTogNCB9KSxcbiAgICAgICAgcmVtb3ZhYmxlOiB0cnVlXG4gICAgICB9XG4gICAgKVxuXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUudGFyZ2V0cy5wdXNoKHRhcmdldCkpXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gZHJhZ2dhYmxlc1xuXG4gICAgVGFyZ2V0LmVtaXR0ZXIuZW1pdCgndGFyZ2V0OmNyZWF0ZScsIHRoaXMpXG5cbiAgICB0aGlzLnN0YXJ0Qm91bmRpbmcoKVxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBzdGFydEJvdW5kaW5nKCkge1xuICAgIHRoaXMuYm91bmQgPSB0aGlzLm9wdGlvbnMuYm91bmQgfHwgQm91bmRUb0VsZW1lbnQuYm91bmRpbmcodGhpcy5lbGVtZW50KVxuICB9XG5cbiAgcG9zaXRpb25pbmcgKGRyYWdnYWJsZXMsIGluZGV4ZXNPZk5ldykge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uaW5nU3RyYXRlZ3kucG9zaXRpb25pbmcoZHJhZ2dhYmxlcywgaW5kZXhlc09mTmV3KVxuICB9XG5cbiAgc29ydGluZyAob2xkRHJhZ2dhYmxlcywgbmV3RHJhZ2dhYmxlcywgaW5kZXhPZk5ld3MpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbmluZ1N0cmF0ZWd5LnNvcnRpbmcob2xkRHJhZ2dhYmxlcywgbmV3RHJhZ2dhYmxlcywgaW5kZXhPZk5ld3MpXG4gIH1cblxuICBpbml0KCkge1xuICAgIGxldCByZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXdcblxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzID0gdGhpcy5kcmFnZ2FibGVzLmZpbHRlcigoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBsZXQgZWxlbWVudCA9IGRyYWdnYWJsZS5lbGVtZW50LnBhcmVudE5vZGVcbiAgICAgIHdoaWxlIChlbGVtZW50KSB7XG4gICAgICAgIGlmIChlbGVtZW50ID09PSB0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGVcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH0pXG5cbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMubGVuZ3RoKSB7XG4gICAgICBpbmRleGVzT2ZOZXcgPSByYW5nZSh0aGlzLmlubmVyRHJhZ2dhYmxlcy5sZW5ndGgpXG4gICAgICByZWN0YW5nbGVzID0gdGhpcy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgICB9KSwgaW5kZXhlc09mTmV3KVxuICAgICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXcpXG4gICAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHRoaXMuZW1pdCgndGFyZ2V0OmFkZCcsIGRyYWdnYWJsZSkpXG4gICAgfVxuICB9XG5cbiAgZ2V0UmVjdGFuZ2xlKCkge1xuICAgIHJldHVybiBSZWN0YW5nbGUuZnJvbUVsZW1lbnQodGhpcy5lbGVtZW50LCB0aGlzLmNvbnRhaW5lciwgdHJ1ZSlcbiAgfVxuXG4gIGNhdGNoRHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuY2F0Y2hEcmFnZ2FibGUpIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuY2F0Y2hEcmFnZ2FibGUodGhpcywgZHJhZ2dhYmxlKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0YXJnZXRSZWN0YW5nbGUgPSB0aGlzLmdldFJlY3RhbmdsZSgpXG4gICAgICBjb25zdCBkcmFnZ2FibGVTcXVhcmUgPSBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKCkuZ2V0U3F1YXJlKClcblxuICAgICAgcmV0dXJuIGRyYWdnYWJsZVNxdWFyZSA8IHRhcmdldFJlY3RhbmdsZS5nZXRTcXVhcmUoKVxuICAgICAgICAgICAgICAmJiB0YXJnZXRSZWN0YW5nbGUuaW5jbHVkZVBvaW50KGRyYWdnYWJsZS5nZXRDZW50ZXIoKSlcbiAgICB9XG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRSZWN0YW5nbGUoKS5wb3NpdGlvblxuICB9XG5cbiAgZ2V0U2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRSZWN0YW5nbGUoKS5zaXplXG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHNjb3Blcy5mb3JFYWNoKChzY29wZSkgPT4gcmVtb3ZlSXRlbShzY29wZS50YXJnZXRzLCB0aGlzKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgW10pXG4gICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBbXSwgMClcbiAgfVxuXG4gIG9uRW5kKGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IG5ld0RyYWdnYWJsZXNJbmRleCA9IFtdXG5cbiAgICBpZiAodGhpcy5nZXRSZWN0YW5nbGUoKS5pbmNsdWRlUG9pbnQoZHJhZ2dhYmxlLmdldENlbnRlcigpKSkge1xuICAgICAgZHJhZ2dhYmxlLnBvc2l0aW9uID0gdGhpcy5ib3VuZChkcmFnZ2FibGUucG9zaXRpb24sIGRyYWdnYWJsZS5nZXRTaXplKCkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHRoaXMuZW1pdCgndGFyZ2V0OmJlZm9yZUFkZCcsIGRyYWdnYWJsZSlcblxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzID0gdGhpcy5zb3J0aW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLCBbZHJhZ2dhYmxlXSwgbmV3RHJhZ2dhYmxlc0luZGV4KVxuICAgIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgfSksIG5ld0RyYWdnYWJsZXNJbmRleClcblxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgbmV3RHJhZ2dhYmxlc0luZGV4KVxuICAgIGlmICh0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkgIT09IC0xKSB7XG4gICAgICB0aGlzLmFkZFJlbW92ZU9uTW92ZShkcmFnZ2FibGUpXG4gICAgfVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBzZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXcsIHRpbWUpIHtcbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5zbGljZSgwKS5mb3JFYWNoKChkcmFnZ2FibGUsIGkpID0+IHtcbiAgICAgIGNvbnN0IHJlY3QgPSByZWN0YW5nbGVzW2ldLFxuICAgICAgICB0aW1lRW5kID0gdGltZSB8fCB0aW1lID09PSAwID8gdGltZSA6IGluZGV4ZXNPZk5ldy5pbmRleE9mKGkpICE9PSAtMSA/IHRoaXMub3B0aW9ucy50aW1lRW5kIDogdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlXG5cbiAgICAgIGlmIChyZWN0LnJlbW92YWJsZSkge1xuICAgICAgICBkcmFnZ2FibGUubW92ZShkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uLCB0aW1lRW5kLCB0cnVlLCB0cnVlKVxuICAgICAgICByZW1vdmVJdGVtKHRoaXMuaW5uZXJEcmFnZ2FibGVzLCBkcmFnZ2FibGUpXG4gICAgICAgIHRoaXMuZW1pdCgndGFyZ2V0OnJlbW92ZScsIGRyYWdnYWJsZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRyYWdnYWJsZS5tb3ZlKHJlY3QucG9zaXRpb24sIHRpbWVFbmQsIHRydWUsIHRydWUpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGFkZChkcmFnZ2FibGUsIHRpbWUpIHtcbiAgICBjb25zdCBuZXdEcmFnZ2FibGVzSW5kZXggPSB0aGlzLmlubmVyRHJhZ2dhYmxlcy5sZW5ndGhcblxuICAgIHRoaXMuZW1pdCgndGFyZ2V0OmJlZm9yZUFkZCcsIGRyYWdnYWJsZSlcblxuICAgIHRoaXMucHVzaElubmVyRHJhZ2dhYmxlKGRyYWdnYWJsZSlcbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBuZXdEcmFnZ2FibGVzSW5kZXgsIGRyYWdnYWJsZSlcblxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgW25ld0RyYWdnYWJsZXNJbmRleF0sIHRpbWUgfHwgMClcbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMSkge1xuICAgICAgdGhpcy5hZGRSZW1vdmVPbk1vdmUoZHJhZ2dhYmxlKVxuICAgIH1cbiAgfVxuXG4gIHB1c2hJbm5lckRyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpPT09LTEpIHtcbiAgICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxuICAgIH1cbiAgfVxuXG4gIGFkZFJlbW92ZU9uTW92ZShkcmFnZ2FibGUpIHtcbiAgICBkcmFnZ2FibGUub24oJ2RyYWc6bW92ZScsIHRoaXMucmVtb3ZlSGFuZGxlciA9ICgpID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlKGRyYWdnYWJsZSlcbiAgICB9KVxuXG4gICAgdGhpcy5lbWl0KCd0YXJnZXQ6YWRkJywgZHJhZ2dhYmxlKVxuICB9XG5cbiAgcmVtb3ZlKGRyYWdnYWJsZSkge1xuICAgIGRyYWdnYWJsZS51bnN1YnNjcmliZSgnZHJhZzptb3ZlJywgdGhpcy5yZW1vdmVIYW5kbGVyKVxuXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSlcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5zcGxpY2UoaW5kZXgsIDEpXG5cbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBbXSlcblxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgW10pXG4gICAgdGhpcy5lbWl0KCd0YXJnZXQ6cmVtb3ZlJywgZHJhZ2dhYmxlKVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUubW92ZShkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uLCAwLCB0cnVlLCB0cnVlKVxuICAgICAgdGhpcy5lbWl0KCd0YXJnZXQ6cmVtb3ZlJywgZHJhZ2dhYmxlKVxuICAgIH0pXG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMgPSBbXVxuICB9XG5cbiAgZ2V0U29ydGVkRHJhZ2dhYmxlcygpIHtcbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5zbGljZSgpXG4gIH1cblxuICBnZXQgY29udGFpbmVyKCkge1xuICAgIHJldHVybiAodGhpcy5fY29udGFpbmVyID0gdGhpcy5fY29udGFpbmVyIHx8IHRoaXMub3B0aW9ucy5jb250YWluZXIgfHwgdGhpcy5vcHRpb25zLnBhcmVudCB8fCBnZXREZWZhdWx0Q29udGFpbmVyKHRoaXMuZWxlbWVudCkpXG4gIH1cbn1cblxuVGFyZ2V0LmVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKClcblRhcmdldC5lbWl0dGVyLm9uKCd0YXJnZXQ6Y3JlYXRlJywgYWRkVG9EZWZhdWx0U2NvcGUpXG4iLCJpbXBvcnQgcmVtb3ZlSXRlbSBmcm9tICcuL3V0aWxzL3JlbW92ZS1hcnJheS1pdGVtJ1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50RW1pdHRlcidcbmltcG9ydCBEcmFnZ2FibGUgZnJvbSAnLi9kcmFnZ2FibGUnXG5pbXBvcnQgVGFyZ2V0IGZyb20gJy4vdGFyZ2V0J1xuXG5jb25zdCBzY29wZXMgPSBbXVxuXG5jbGFzcyBTY29wZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKGRyYWdnYWJsZXMsIHRhcmdldHMsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcihvcHRpb25zKVxuICAgIHNjb3Blcy5mb3JFYWNoKChzY29wZSkgPT4ge1xuICAgICAgaWYgKGRyYWdnYWJsZXMpIHtcbiAgICAgICAgZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgICAgICByZW1vdmVJdGVtKHNjb3BlLmRyYWdnYWJsZXMsIGRyYWdnYWJsZSlcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgaWYgKHRhcmdldHMpIHtcbiAgICAgICAgdGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHtcbiAgICAgICAgICByZW1vdmVJdGVtKHNjb3BlLnRhcmdldHMsIHRhcmdldClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gZHJhZ2dhYmxlcyB8fCBbXVxuICAgIHRoaXMudGFyZ2V0cyA9IHRhcmdldHMgfHwgW11cbiAgICBzY29wZXMucHVzaCh0aGlzKVxuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgIHRpbWVFbmQ6IChvcHRpb25zLnRpbWVFbmQpIHx8IDQwMFxuICAgIH1cblxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5kcmFnRW5kQWN0aW9uID0gKCkgPT4gdGhpcy5vbkVuZChkcmFnZ2FibGUpXG4gICAgfSlcbiAgfVxuXG4gIGFkZERyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMucHVzaChkcmFnZ2FibGUpXG4gICAgZHJhZ2dhYmxlLmRyYWdFbmRBY3Rpb24gPSAoKSA9PiB0aGlzLm9uRW5kKGRyYWdnYWJsZSlcbiAgfVxuXG4gIGFkZFRhcmdldCh0YXJnZXQpIHtcbiAgICB0aGlzLnRhcmdldHMucHVzaCh0YXJnZXQpXG4gIH1cblxuICBvbkVuZChkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBzaG90VGFyZ2V0cyA9IHRoaXMudGFyZ2V0cy5maWx0ZXIoKHRhcmdldCkgPT4ge1xuICAgICAgcmV0dXJuIHRhcmdldC5kcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTFcbiAgICB9KS5maWx0ZXIoKHRhcmdldCkgPT4ge1xuICAgICAgcmV0dXJuIHRhcmdldC5jYXRjaERyYWdnYWJsZShkcmFnZ2FibGUpXG4gICAgfSkuc29ydCgoYSwgYikgPT4ge1xuICAgICAgcmV0dXJuIGEuZ2V0UmVjdGFuZ2xlKCkuZ2V0U3F1YXJlKCkgLSBiLmdldFJlY3RhbmdsZSgpLmdldFNxdWFyZSgpXG4gICAgfSlcblxuICAgIGlmIChzaG90VGFyZ2V0cy5sZW5ndGgpIHtcbiAgICAgIHNob3RUYXJnZXRzWzBdLm9uRW5kKGRyYWdnYWJsZSlcbiAgICB9IGVsc2UgaWYgKGRyYWdnYWJsZS50YXJnZXRzLmxlbmd0aCkge1xuICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKGRyYWdnYWJsZS5pbml0aWFsUG9zaXRpb24sIHRoaXMub3B0aW9ucy50aW1lRW5kKVxuICAgIH1cblxuICAgIHRoaXMuZW1pdCgnc2NvcGU6Y2hhbmdlJylcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMudGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHRhcmdldC5yZXNldCgpKVxuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucmVmcmVzaCgpKVxuICAgIHRoaXMudGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHRhcmdldC5yZWZyZXNoKCkpXG4gIH1cblxuICBnZXQgcG9zaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnRhcmdldHMubWFwKCh0YXJnZXQpID0+IHtcbiAgICAgIHJldHVybiB0YXJnZXQuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB0aGlzLmRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpKVxuICAgIH0pXG4gIH1cblxuICBzZXQgcG9zaXRpb25zKHBvc2l0aW9ucykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSAnd3JvbmcgYXJyYXkgbGVuZ3RoJ1xuICAgIGlmIChwb3NpdGlvbnMubGVuZ3RoID09PSB0aGlzLnRhcmdldHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB0YXJnZXQucmVzZXQoKSlcblxuICAgICAgcG9zaXRpb25zLmZvckVhY2goKHRhcmdldEluZGV4ZXMsIGkpID0+IHtcbiAgICAgICAgdGFyZ2V0SW5kZXhlcy5mb3JFYWNoKChpbmRleCkgPT4ge1xuICAgICAgICAgIHRoaXMudGFyZ2V0c1tpXS5hZGQodGhpcy5kcmFnZ2FibGVzW2luZGV4XSlcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG1lc3NhZ2VcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgZGVmYXVsdFNjb3BlID0gbmV3IFNjb3BlKClcblxuZnVuY3Rpb24gc2NvcGUoZm4pIHtcbiAgY29uc3QgY3VycmVudFNjb3BlID0gbmV3IFNjb3BlKClcblxuICBjb25zdCBhZGREcmFnZ2FibGVUb1Njb3BlID0gZnVuY3Rpb24oZHJhZ2dhYmxlKSB7XG4gICAgY3VycmVudFNjb3BlLmFkZERyYWdnYWJsZShkcmFnZ2FibGUpXG4gICAgRHJhZ2dhYmxlLmVtaXR0ZXIuaW50ZXJydXB0KClcbiAgfVxuXG4gIGNvbnN0IGFkZFRhcmdldFRvU2NvcGUgPSBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICBjdXJyZW50U2NvcGUuYWRkVGFyZ2V0KHRhcmdldClcbiAgICBEcmFnZ2FibGUuZW1pdHRlci5pbnRlcnJ1cHQoKVxuICB9XG5cbiAgRHJhZ2dhYmxlLmVtaXR0ZXIucHJlcGVuZE9uKCdkcmFnZ2FibGU6Y3JlYXRlJywgYWRkRHJhZ2dhYmxlVG9TY29wZSlcbiAgVGFyZ2V0LmVtaXR0ZXIucHJlcGVuZE9uKCd0YXJnZXQ6Y3JlYXRlJywgYWRkVGFyZ2V0VG9TY29wZSlcbiAgZm4uY2FsbCgpXG4gIERyYWdnYWJsZS5lbWl0dGVyLnVuc3Vic2NyaWJlKCdkcmFnZ2FibGU6Y3JlYXRlJywgYWRkRHJhZ2dhYmxlVG9TY29wZSlcbiAgVGFyZ2V0LmVtaXR0ZXIudW5zdWJzY3JpYmUoJ3RhcmdldDpjcmVhdGUnLCBhZGRUYXJnZXRUb1Njb3BlKVxuICByZXR1cm4gY3VycmVudFNjb3BlXG59XG5cbmV4cG9ydCB7IHNjb3BlcywgZGVmYXVsdFNjb3BlLCBTY29wZSwgc2NvcGUgfVxuIiwiZnVuY3Rpb24gY2hlY2tTdXBwb3J0UGFzc2l2ZUV2ZW50cygpIHtcbiAgbGV0IHBhc3NpdmVTdXBwb3J0ZWQgPSBmYWxzZVxuXG4gIHRyeSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ3Bhc3NpdmUnLCB7XG4gICAgICBnZXQoKSB7XG4gICAgICAgIHJldHVybiAocGFzc2l2ZVN1cHBvcnRlZCA9IHRydWUpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0ZXN0Jywgb3B0aW9ucywgb3B0aW9ucylcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndGVzdCcsIG9wdGlvbnMsIG9wdGlvbnMpXG4gIH0gY2F0Y2ggKF9lcnIpIHtcbiAgICBwYXNzaXZlU3VwcG9ydGVkID0gZmFsc2VcbiAgfVxuXG4gIHJldHVybiBwYXNzaXZlU3VwcG9ydGVkXG59XG5cbmV4cG9ydCBjb25zdCBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzID0gY2hlY2tTdXBwb3J0UGFzc2l2ZUV2ZW50cygpXG5cbmZ1bmN0aW9uIGV2ZW50T3B0aW9ucyhvcHRpb25zLCBmYWxsYmFjayA9IGZhbHNlKSB7XG4gIHJldHVybiBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzID8gb3B0aW9ucyA6IGZhbGxiYWNrXG59XG5cbmV4cG9ydCB7IGV2ZW50T3B0aW9ucyB9XG5cbmV4cG9ydCBkZWZhdWx0IGlzU3VwcG9ydFBhc3NpdmVFdmVudHNcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRocm90dGxlKGZ1bmMsIHdhaXQpIHtcbiAgbGV0IGxhc3RUaW1lID0gMFxuXG4gIHJldHVybiBmdW5jdGlvbiBleGVjdXRlZEZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzXG4gICAgY29uc3QgYXJncyA9IGFyZ3VtZW50c1xuXG4gICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKVxuICAgIGlmIChub3cgLSBsYXN0VGltZSA+PSB3YWl0KSB7XG4gICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpXG4gICAgICBsYXN0VGltZSA9IG5vd1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IGdldERlZmF1bHRDb250YWluZXIgZnJvbSAnLi91dGlscy9nZXQtZGVmYXVsdC1jb250YWluZXInXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnRFbWl0dGVyJ1xuaW1wb3J0IHsgQm91bmRUb0VsZW1lbnQgfSBmcm9tICcuL2JvdW5kaW5nJ1xuaW1wb3J0IFBvaW50IGZyb20gJy4vZ2VvbWV0cnkvcG9pbnQnXG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gJy4vZ2VvbWV0cnkvcmVjdGFuZ2xlJ1xuaW1wb3J0IHsgZGVmYXVsdFNjb3BlIH0gZnJvbSAnLi9zY29wZSdcbmltcG9ydCBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzIGZyb20gJy4vdXRpbHMvaXMtc3VwcG9ydC1wYXNzaXZlLWV2ZW50cydcbmltcG9ydCB0aHJvdHRsZSBmcm9tICcuL3V0aWxzL3Rocm90dGxlJ1xuXG5jb25zdCB0aHJvdHRsZWREcmFnT3ZlciA9IChjYWxsYmFjaywgZHVyYXRpb24pID0+IHtcbiAgY29uc3QgdGhyb3R0bGVkQ2FsbGJhY2sgPSB0aHJvdHRsZSgoZXZlbnQpID0+IGNhbGxiYWNrKGV2ZW50KSwgZHVyYXRpb24pXG4gIHJldHVybiAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhyb3R0bGVkQ2FsbGJhY2soZXZlbnQpXG4gIH1cbn1cblxuY29uc3QgZGVsYXllZE5hdGl2ZURyYWdTdGFydCA9IChjYWxsYmFjaywgZGVsYXkpID0+IHtcbiAgcmV0dXJuIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgc2V0VGltZW91dCgoKSA9PiBjYWxsYmFjayhldmVudCksIGRlbGF5KVxuICB9XG59XG5cbmNvbnN0IHBhc3NpdmVGYWxzZSA9IGlzU3VwcG9ydFBhc3NpdmVFdmVudHMgPyB7IHBhc3NpdmU6IGZhbHNlIH0gOiBmYWxzZVxuXG5jb25zdCBpc1RvdWNoID0gJ29udG91Y2hzdGFydCcgaW4gd2luZG93XG5jb25zdCBtb3VzZUV2ZW50cyA9IHtcbiAgc3RhcnQ6ICdtb3VzZWRvd24nLFxuICBtb3ZlOiAnbW91c2Vtb3ZlJyxcbiAgZW5kOiAnbW91c2V1cCdcbn1cbmNvbnN0IHRvdWNoRXZlbnRzID0ge1xuICBzdGFydDogJ3RvdWNoc3RhcnQnLFxuICBtb3ZlOiAndG91Y2htb3ZlJyxcbiAgZW5kOiAndG91Y2hlbmQnXG59XG5jb25zdCBkcmFnZ2FibGVzID0gW11cbmNvbnN0IHRyYW5zZm9ybVByb3BlcnR5ID0gJ3RyYW5zZm9ybSdcbmNvbnN0IHRyYW5zaXRpb25Qcm9wZXJ0eSA9ICd0cmFuc2l0aW9uJ1xuXG5mdW5jdGlvbiBnZXRUb3VjaEJ5SUQoZWxlbWVudCwgdG91Y2hJZCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnQuY2hhbmdlZFRvdWNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZWxlbWVudC5jaGFuZ2VkVG91Y2hlc1tpXS5pZGVudGlmaWVyID09PSB0b3VjaElkKSB7XG4gICAgICByZXR1cm4gZWxlbWVudC5jaGFuZ2VkVG91Y2hlc1tpXVxuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cblxuZnVuY3Rpb24gcHJldmVudERvdWJsZUluaXQoZHJhZ2dhYmxlKSB7XG4gIGNvbnN0IG1lc3NhZ2UgPSBcImZvciB0aGlzIGVsZW1lbnQgRHJhZ2VlLkRyYWdnYWJsZSBpcyBhbHJlYWR5IGV4aXN0LCBkb24ndCBjcmVhdGUgaXQgdHdpY2UgXCJcbiAgaWYgKGRyYWdnYWJsZXMuc29tZSgoZXhpc3RpbmcpID0+IGRyYWdnYWJsZS5lbGVtZW50ID09PSBleGlzdGluZy5lbGVtZW50KSkge1xuICAgIHRocm93IG1lc3NhZ2VcbiAgfVxuICBkcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxufVxuXG5mdW5jdGlvbiBhZGRUb0RlZmF1bHRTY29wZShkcmFnZ2FibGUpIHtcbiAgZGVmYXVsdFNjb3BlLmFkZERyYWdnYWJsZShkcmFnZ2FibGUpXG59XG5cbmZ1bmN0aW9uIGNvcHlTdHlsZXMoc291cmNlLCBkZXN0aW5hdGlvbikge1xuICBjb25zdCBjcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHNvdXJjZSlcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qga2V5ID0gY3NbaV1cbiAgICBpZiAoKGtleS5pbmRleE9mKCd0cmFuc2l0aW9uJykgPCAwKSAmJiAoa2V5LmluZGV4T2YoJ3RyYW5zZm9ybScpIDwgMCkpIHtcbiAgICAgIGRlc3RpbmF0aW9uLnN0eWxlW2tleV0gPSBjc1trZXldXG4gICAgfVxuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzb3VyY2UuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICBjb3B5U3R5bGVzKHNvdXJjZS5jaGlsZHJlbltpXSwgZGVzdGluYXRpb24uY2hpbGRyZW5baV0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhZ2dhYmxlIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgb3B0aW9ucz17fSkge1xuICAgIHN1cGVyKG9wdGlvbnMpXG4gICAgdGhpcy50YXJnZXRzID0gW11cbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIHByZXZlbnREb3VibGVJbml0KHRoaXMpXG4gICAgRHJhZ2dhYmxlLmVtaXR0ZXIuZW1pdCgnZHJhZ2dhYmxlOmNyZWF0ZScsIHRoaXMpXG4gICAgdGhpcy5fZW5hYmxlID0gdHJ1ZVxuICAgIHRoaXMuc3RhcnRCb3VuZGluZygpXG4gICAgdGhpcy5zdGFydFBvc2l0aW9uaW5nKClcbiAgICB0aGlzLnN0YXJ0TGlzdGVuaW5nKClcbiAgfVxuXG4gIHN0YXJ0Qm91bmRpbmcoKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5ib3VuZCkge1xuICAgICAgdGhpcy5ib3VuZGluZyA9IHsgYm91bmQ6IHRoaXMub3B0aW9ucy5ib3VuZCB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYm91bmRpbmcgPSBuZXcgQm91bmRUb0VsZW1lbnQodGhpcy5jb250YWluZXIsIHRoaXMuY29udGFpbmVyKVxuICAgIH1cbiAgfVxuXG4gIHN0YXJ0UG9zaXRpb25pbmcoKSB7XG4gICAgdGhpcy5fc2V0RGVmYXVsdFRyYW5zaXRpb24oKVxuICAgIHRoaXMub2Zmc2V0ID0gUG9pbnQuZWxlbWVudE9mZnNldCh0aGlzLmVsZW1lbnQsIHRoaXMuY29udGFpbmVyLCB0cnVlKVxuICAgIHRoaXMucGlubmVkUG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICAgIHRoaXMuaW5pdGlhbFBvc2l0aW9uID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uIHx8IHRoaXMub2Zmc2V0XG5cbiAgICB0aGlzLnBpblBvc2l0aW9uKHRoaXMuaW5pdGlhbFBvc2l0aW9uKVxuXG4gICAgaWYgKHRoaXMuYm91bmRpbmcucmVmcmVzaCkge1xuICAgICAgdGhpcy5ib3VuZGluZy5yZWZyZXNoKClcbiAgICB9XG4gIH1cblxuICBzdGFydExpc3RlbmluZygpIHtcbiAgICB0aGlzLl9kcmFnU3RhcnQgPSAoZXZlbnQpID0+IHRoaXMuZHJhZ1N0YXJ0KGV2ZW50KVxuICAgIHRoaXMuX2RyYWdNb3ZlID0gKGV2ZW50KSA9PiB0aGlzLmRyYWdNb3ZlKGV2ZW50KVxuICAgIHRoaXMuX2RyYWdFbmQgPSAoZXZlbnQpID0+IHRoaXMuZHJhZ0VuZChldmVudClcbiAgICB0aGlzLl9uYXRpdmVEcmFnU3RhcnQgPSBkZWxheWVkTmF0aXZlRHJhZ1N0YXJ0KChldmVudCkgPT4gdGhpcy5uYXRpdmVEcmFnU3RhcnQoZXZlbnQpLCB0aGlzLm5hdGl2ZURyYWdTdGFydERlbGF5KVxuICAgIHRoaXMuX25hdGl2ZURyYWdPdmVyID0gdGhyb3R0bGVkRHJhZ092ZXIoKGV2ZW50KSA9PiB0aGlzLm5hdGl2ZURyYWdPdmVyKGV2ZW50KSwgdGhpcy5kcmFnT3ZlclRocm90dGxlRHVyYXRpb24pXG4gICAgdGhpcy5fbmF0aXZlRHJhZ0VuZCA9IChldmVudCkgPT4gdGhpcy5uYXRpdmVEcmFnRW5kKGV2ZW50KVxuICAgIHRoaXMuX25hdGl2ZURyb3AgPSAoZXZlbnQpID0+IHRoaXMubmF0aXZlRHJvcChldmVudClcbiAgICB0aGlzLl9zY3JvbGwgPSAoZXZlbnQpID0+IHRoaXMub25TY3JvbGwoZXZlbnQpXG5cbiAgICB0aGlzLmhhbmRsZXIuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0LCBwYXNzaXZlRmFsc2UpXG4gICAgdGhpcy5oYW5kbGVyLmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydCwgcGFzc2l2ZUZhbHNlKVxuICB9XG5cbiAgZ2V0U2l6ZSgpIHtcbiAgICByZXR1cm4gUG9pbnQuZWxlbWVudFNpemUodGhpcy5lbGVtZW50KVxuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMub2Zmc2V0LmFkZCh0aGlzLl90cmFuc2Zvcm1Qb3NpdGlvbiB8fCBuZXcgUG9pbnQoMCwgMCkpXG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25cbiAgfVxuXG4gIGdldENlbnRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi5hZGQodGhpcy5nZXRTaXplKCkubXVsdCgwLjUpKVxuICB9XG5cbiAgX3NldERlZmF1bHRUcmFuc2l0aW9uICgpIHtcbiAgICBpZiAoIXRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNpdGlvblByb3BlcnR5XSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZWxlbWVudClbdHJhbnNpdGlvblByb3BlcnR5XVxuICAgIH1cbiAgfVxuXG4gIF9zZXRUcmFuc2l0aW9uKHRpbWUpIHtcbiAgICBsZXQgdHJhbnNpdGlvbiA9IHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldXG4gICAgY29uc3QgdHJhbnNpdGlvbkNzcyA9IGB0cmFuc2Zvcm0gJHt0aW1lfW1zYFxuXG4gICAgaWYgKCEvdHJhbnNmb3JtXFxzP1xcZCptP3M/Ly50ZXN0KHRyYW5zaXRpb24pKSB7XG4gICAgICBpZiAodHJhbnNpdGlvbikge1xuICAgICAgICB0cmFuc2l0aW9uICs9IGAsICR7dHJhbnNpdGlvbkNzc31gXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cmFuc2l0aW9uID0gdHJhbnNpdGlvbkNzc1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0cmFuc2l0aW9uID0gdHJhbnNpdGlvbi5yZXBsYWNlKC90cmFuc2Zvcm1cXHM/XFxkKm0/cz8vZywgdHJhbnNpdGlvbkNzcylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV0gIT09IHRyYW5zaXRpb24pIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldID0gdHJhbnNpdGlvblxuICAgIH1cbiAgfVxuXG4gIF9zZXRUcmFuc2xhdGUocG9pbnQpIHtcbiAgICB0aGlzLl90cmFuc2Zvcm1Qb3NpdGlvbiA9IHBvaW50XG4gICAgY29uc3QgdHJhbnNsYXRlQ3NzID0gYHRyYW5zbGF0ZTNkKCR7cG9pbnQueH1weCwgJHtwb2ludC55fXB4LCAwcHgpYFxuXG4gICAgbGV0IHRyYW5zZm9ybSA9IHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wZXJ0eV1cblxuICAgIGlmICh0aGlzLnNob3VsZFJlbW92ZVplcm9UcmFuc2xhdGUgJiYgcG9pbnQueCA9PT0gMCAmJiBwb2ludC55ID09PSAwKSB7XG4gICAgICB0cmFuc2Zvcm0gPSB0cmFuc2Zvcm0ucmVwbGFjZSgvdHJhbnNsYXRlM2RcXChbXildK1xcKS8sICcnKVxuICAgIH0gZWxzZSBpZiAoIS90cmFuc2xhdGUzZFxcKFteKV0rXFwpLy50ZXN0KHRyYW5zZm9ybSkpIHtcbiAgICAgIGlmICh0cmFuc2Zvcm0pIHtcbiAgICAgICAgdHJhbnNmb3JtICs9ICcgJ1xuICAgICAgfVxuICAgICAgdHJhbnNmb3JtICs9IHRyYW5zbGF0ZUNzc1xuICAgIH0gZWxzZSB7XG4gICAgICB0cmFuc2Zvcm0gPSB0cmFuc2Zvcm0ucmVwbGFjZSgvdHJhbnNsYXRlM2RcXChbXildK1xcKS8sIHRyYW5zbGF0ZUNzcylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BlcnR5XSAhPT0gdHJhbnNmb3JtKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcGVydHldID0gdHJhbnNmb3JtXG4gICAgfVxuICB9XG5cbiAgbW92ZShwb2ludCwgdGltZT0wLCBpc1NpbGVudD1mYWxzZSkge1xuICAgIHBvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIHRoaXMucG9zaXRpb24gPSBwb2ludFxuXG4gICAgdGhpcy5fc2V0VHJhbnNpdGlvbih0aW1lKVxuICAgIHRoaXMuX3NldFRyYW5zbGF0ZShwb2ludC5zdWIodGhpcy5vZmZzZXQpKVxuXG4gICAgaWYgKCFpc1NpbGVudCkge1xuICAgICAgdGhpcy5lbWl0KCdkcmFnOm1vdmUnKVxuICAgIH1cbiAgfVxuXG4gIHBpblBvc2l0aW9uKHBvaW50LCB0aW1lPTAsIHNpbGVudD10cnVlKSB7XG4gICAgdGhpcy5waW5uZWRQb3NpdGlvbiA9IHBvaW50LmNsb25lKClcbiAgICB0aGlzLm1vdmUodGhpcy5waW5uZWRQb3NpdGlvbiwgdGltZSwgc2lsZW50KVxuICB9XG5cbiAgcmVzZXRQb3NpdGlvblRvSW5pdGlhbCAoKSB7XG4gICAgdGhpcy5waW5Qb3NpdGlvbih0aGlzLmluaXRpYWxQb3NpdGlvbilcbiAgfVxuXG4gIHJlZnJlc2hQb3NpdGlvbiAoKSB7XG4gICAgdGhpcy5zZXRQb3NpdGlvbih0aGlzLmdldFBvc2l0aW9uKCkpXG4gIH1cblxuICBzZXRQb3NpdGlvbihwb2ludCkge1xuICAgIHBvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIHRoaXMucG9zaXRpb24gPSBwb2ludFxuICAgIHRoaXMuX3NldFRyYW5zaXRpb24oMClcbiAgICB0aGlzLl9zZXRUcmFuc2xhdGUocG9pbnQuc3ViKHRoaXMub2Zmc2V0KSlcbiAgfVxuXG4gIGRldGVybWluZURpcmVjdGlvbihwb2ludCkge1xuICAgIHRoaXMuX3ByZXZpb3VzRGlyZWN0aW9uUG9zaXRpb24gfHw9IHRoaXMuX3N0YXJ0UG9zaXRpb25cblxuICAgIHRoaXMubGVmdERpcmVjdGlvbiA9ICh0aGlzLl9wcmV2aW91c0RpcmVjdGlvblBvc2l0aW9uLnggPCBwb2ludC54KVxuICAgIHRoaXMucmlnaHREaXJlY3Rpb24gPSAodGhpcy5fcHJldmlvdXNEaXJlY3Rpb25Qb3NpdGlvbi54ID4gcG9pbnQueClcbiAgICB0aGlzLnVwRGlyZWN0aW9uID0gKHRoaXMuX3ByZXZpb3VzRGlyZWN0aW9uUG9zaXRpb24ueSA+IHBvaW50LnkpXG4gICAgdGhpcy5kb3duRGlyZWN0aW9uID0gKHRoaXMuX3ByZXZpb3VzRGlyZWN0aW9uUG9zaXRpb24ueSA8IHBvaW50LnkpXG5cbiAgICB0aGlzLl9wcmV2aW91c0RpcmVjdGlvblBvc2l0aW9uID0gcG9pbnRcbiAgfVxuXG4gIHNlZW1zU2Nyb2xsaW5nKCkge1xuICAgIHJldHVybiAoK25ldyBEYXRlKCkgLSB0aGlzLl9zdGFydFRvdWNoVGltZXN0YW1wKSA8IHRoaXMudG91Y2hEcmFnZ2luZ1RocmVzaG9sZFxuICB9XG5cbiAgc2hvdWxkVXNlTmF0aXZlRHJhZ0FuZERyb3AoKSB7XG4gICAgaWYgKHRoaXMuaXNUb3VjaEV2ZW50KSB7XG4gICAgICByZXR1cm4gdGhpcy5uYXRpdmVEcmFnQW5kRHJvcCAmJiB0aGlzLmVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcE9uVG91Y2hcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMubmF0aXZlRHJhZ0FuZERyb3BcbiAgICB9XG4gIH1cblxuICBkcmFnU3RhcnQoZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuX2VuYWJsZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3RvcFByb3BhZ2F0aW9uT25EcmFnU3RhcnQpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgfVxuXG4gICAgdGhpcy5pc1RvdWNoRXZlbnQgPSAoaXNUb3VjaCAmJiAoZXZlbnQgaW5zdGFuY2VvZiB3aW5kb3cuVG91Y2hFdmVudCkpXG5cbiAgICB0aGlzLnRvdWNoUG9pbnQgPSB0aGlzLl9zdGFydFRvdWNoUG9pbnQgPSBuZXcgUG9pbnQoXG4gICAgICB0aGlzLmlzVG91Y2hFdmVudCA/IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYIDogZXZlbnQuY2xpZW50WCxcbiAgICAgIHRoaXMuaXNUb3VjaEV2ZW50ID8gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVkgOiBldmVudC5jbGllbnRZXG4gICAgKVxuXG4gICAgdGhpcy5fc3RhcnRQb3NpdGlvbiA9IHRoaXMuZ2V0UG9zaXRpb24oKVxuICAgIGlmICh0aGlzLmlzVG91Y2hFdmVudCkge1xuICAgICAgdGhpcy5fdG91Y2hJZCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmlkZW50aWZpZXJcbiAgICAgIHRoaXMuX3N0YXJ0VG91Y2hUaW1lc3RhbXAgPSArbmV3IERhdGUoKVxuICAgIH1cblxuICAgIHRoaXMuX3N0YXJ0V2luZG93U2Nyb2xsUG9pbnQgPSB0aGlzLndpbmRvd1Njcm9sbFBvaW50XG4gICAgdGhpcy5fc3RhcnRQYXJlbnRzU2Nyb2xsUG9pbnQgPSB0aGlzLnBhcmVudHNTY3JvbGxQb2ludFxuXG4gICAgaWYgKGV2ZW50LnRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSW5wdXRFbGVtZW50IHx8XG4gICAgICAgICAgZXZlbnQudGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJbnB1dEVsZW1lbnQpIHtcbiAgICAgIGV2ZW50LnRhcmdldC5mb2N1cygpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2hvdWxkVXNlTmF0aXZlRHJhZ0FuZERyb3AoKSkge1xuICAgICAgaWYgKHRoaXMuaXNUb3VjaEV2ZW50ICYmIHRoaXMuZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wT25Ub3VjaCkge1xuICAgICAgICBjb25zdCBlbXVsYXRlT25GaXJzdE1vdmUgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5zZWVtc1Njcm9sbGluZygpKSB7XG4gICAgICAgICAgICB0aGlzLmNhbmNlbERyYWdnaW5nKClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3AoZXZlbnQpXG4gICAgICAgICAgfVxuICAgICAgICAgIGNhbmNlbEVtdWxhdGlvbigpXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2FuY2VsRW11bGF0aW9uID0gKCkgPT4ge1xuICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgZW11bGF0ZU9uRmlyc3RNb3ZlKVxuICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCBjYW5jZWxFbXVsYXRpb24pXG4gICAgICAgIH1cblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIGVtdWxhdGVPbkZpcnN0TW92ZSwgcGFzc2l2ZUZhbHNlKVxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgY2FuY2VsRW11bGF0aW9uLCBwYXNzaXZlRmFsc2UpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgdGhpcy5fbmF0aXZlRHJhZ1N0YXJ0KVxuICAgICAgICB0aGlzLmVsZW1lbnQuZHJhZ2dhYmxlID0gdHJ1ZVxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fbmF0aXZlRHJhZ0VuZCwgcGFzc2l2ZUZhbHNlKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlLCBwYXNzaXZlRmFsc2UpXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlLCBwYXNzaXZlRmFsc2UpXG5cbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kLCBwYXNzaXZlRmFsc2UpXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZCwgcGFzc2l2ZUZhbHNlKVxuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9zY3JvbGwpXG4gICAgdGhpcy5wYXJlbnRzLmZvckVhY2goKHApID0+IHAuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fc2Nyb2xsKSlcblxuICAgIHRoaXMuZW1pdCgnZHJhZzpzdGFydCcpXG4gIH1cblxuICBkcmFnTW92ZShldmVudCkge1xuICAgIGxldCB0b3VjaFxuXG4gICAgdGhpcy5pc0RyYWdnaW5nID0gdHJ1ZVxuXG4gICAgdGhpcy5pc1RvdWNoRXZlbnQgPSAoaXNUb3VjaCAmJiAoZXZlbnQgaW5zdGFuY2VvZiB3aW5kb3cuVG91Y2hFdmVudCkpXG4gICAgaWYgKHRoaXMuaXNUb3VjaEV2ZW50KSB7XG4gICAgICB0b3VjaCA9IGdldFRvdWNoQnlJRChldmVudCwgdGhpcy5fdG91Y2hJZClcblxuICAgICAgaWYgKCF0b3VjaCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuc2VlbXNTY3JvbGxpbmcoKSkge1xuICAgICAgICB0aGlzLmNhbmNlbERyYWdnaW5nKClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhpcy50b3VjaFBvaW50ID0gbmV3IFBvaW50KFxuICAgICAgdGhpcy5pc1RvdWNoRXZlbnQgPyB0b3VjaC5wYWdlWCA6IGV2ZW50LmNsaWVudFgsXG4gICAgICB0aGlzLmlzVG91Y2hFdmVudCA/IHRvdWNoLnBhZ2VZIDogZXZlbnQuY2xpZW50WVxuICAgIClcblxuICAgIGxldCBwb2ludCA9IHRoaXMuX3N0YXJ0UG9zaXRpb24uYWRkKHRoaXMudG91Y2hQb2ludC5zdWIodGhpcy5fc3RhcnRUb3VjaFBvaW50KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZCh0aGlzLndpbmRvd1Njcm9sbFBvaW50LnN1Yih0aGlzLl9zdGFydFdpbmRvd1Njcm9sbFBvaW50KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZCh0aGlzLnBhcmVudHNTY3JvbGxQb2ludC5zdWIodGhpcy5fc3RhcnRQYXJlbnRzU2Nyb2xsUG9pbnQpKVxuXG4gICAgcG9pbnQgPSB0aGlzLmJvdW5kaW5nLmJvdW5kKHBvaW50LCB0aGlzLmdldFNpemUoKSlcbiAgICB0aGlzLmRldGVybWluZURpcmVjdGlvbihwb2ludClcbiAgICB0aGlzLm1vdmUocG9pbnQpXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RyYWdlZS1hY3RpdmUnKVxuICB9XG5cbiAgZHJhZ0VuZChldmVudCkge1xuICAgIHRoaXMuaXNUb3VjaEV2ZW50ID0gKGlzVG91Y2ggJiYgKGV2ZW50IGluc3RhbmNlb2Ygd2luZG93LlRvdWNoRXZlbnQpKVxuXG4gICAgaWYgKHRoaXMuaXNUb3VjaEV2ZW50ICYmICFnZXRUb3VjaEJ5SUQoZXZlbnQsIHRoaXMuX3RvdWNoSWQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc0RyYWdnaW5nKSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIH1cblxuICAgIHRoaXMuZHJhZ0VuZEFjdGlvbigpXG4gICAgdGhpcy5lbWl0KCdkcmFnOmVuZCcpXG4gICAgdGhpcy5jYW5jZWxEcmFnZ2luZygpXG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZWUtYWN0aXZlJykpXG4gIH1cblxuICBvblNjcm9sbChfZXZlbnQpIHtcbiAgICBsZXQgcG9pbnQgPSB0aGlzLl9zdGFydFBvc2l0aW9uLmFkZCh0aGlzLnRvdWNoUG9pbnQuc3ViKHRoaXMuX3N0YXJ0VG91Y2hQb2ludCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy53aW5kb3dTY3JvbGxQb2ludC5zdWIodGhpcy5fc3RhcnRXaW5kb3dTY3JvbGxQb2ludCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy5wYXJlbnRzU2Nyb2xsUG9pbnQuc3ViKHRoaXMuX3N0YXJ0UGFyZW50c1Njcm9sbFBvaW50KSlcblxuICAgIHBvaW50ID0gdGhpcy5ib3VuZGluZy5ib3VuZChwb2ludCwgdGhpcy5nZXRTaXplKCkpXG4gICAgaWYgKCF0aGlzLm5hdGl2ZURyYWdBbmREcm9wKSB7XG4gICAgICB0aGlzLmRldGVybWluZURpcmVjdGlvbihwb2ludClcbiAgICAgIHRoaXMubW92ZShwb2ludClcbiAgICB9XG4gIH1cblxuICBuYXRpdmVEcmFnU3RhcnQoZXZlbnQpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0JywgJ0ZpcmVGb3ggZml4JylcbiAgICBldmVudC5kYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCA9ICdtb3ZlJ1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgdGhpcy5fbmF0aXZlRHJhZ092ZXIpXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIHRoaXMuX25hdGl2ZURyYWdFbmQpXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIHRoaXMuX25hdGl2ZURyb3ApXG4gIH1cblxuICBuYXRpdmVEcmFnT3ZlcihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBldmVudC5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9ICdtb3ZlJ1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkcmFnZWUtcGxhY2Vob2xkZXInKVxuICAgIGlmIChldmVudC5jbGllbnRYID09PSAwICYmIGV2ZW50LmNsaWVudFkgPT09IDApIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMudG91Y2hQb2ludCA9IG5ldyBQb2ludChldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZKVxuICAgIGxldCBwb2ludCA9IHRoaXMuX3N0YXJ0UG9zaXRpb24uYWRkKHRoaXMudG91Y2hQb2ludC5zdWIodGhpcy5fc3RhcnRUb3VjaFBvaW50KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZCh0aGlzLndpbmRvd1Njcm9sbFBvaW50LnN1Yih0aGlzLl9zdGFydFdpbmRvd1Njcm9sbFBvaW50KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZCh0aGlzLnBhcmVudHNTY3JvbGxQb2ludC5zdWIodGhpcy5fc3RhcnRQYXJlbnRzU2Nyb2xsUG9pbnQpKVxuICAgIHBvaW50ID0gdGhpcy5ib3VuZGluZy5ib3VuZChwb2ludCwgdGhpcy5nZXRTaXplKCkpXG4gICAgdGhpcy5kZXRlcm1pbmVEaXJlY3Rpb24ocG9pbnQpXG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvaW50XG4gICAgdGhpcy5lbWl0KCdkcmFnOm1vdmUnKVxuICB9XG5cbiAgbmF0aXZlRHJhZ0VuZChfZXZlbnQpIHtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2VlLXBsYWNlaG9sZGVyJylcbiAgICB0aGlzLmRyYWdFbmRBY3Rpb24oKVxuICAgIHRoaXMuZW1pdCgnZHJhZzplbmQnKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgdGhpcy5fbmF0aXZlRHJhZ092ZXIpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIHRoaXMuX25hdGl2ZURyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX25hdGl2ZURyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJvcCcsIHRoaXMuX25hdGl2ZURyb3ApXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX3Njcm9sbClcbiAgICB0aGlzLnBhcmVudHMuZm9yRWFjaCgocCkgPT4gcC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9zY3JvbGwpKVxuICAgIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnZHJhZ2dhYmxlJylcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgdGhpcy5fbmF0aXZlRHJhZ1N0YXJ0KVxuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZWUtYWN0aXZlJylcbiAgfVxuXG4gIG5hdGl2ZURyb3AoZXZlbnQpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIGNhbmNlbERyYWdnaW5nICgpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG5cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcblxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX3Njcm9sbClcbiAgICB0aGlzLnBhcmVudHMuZm9yRWFjaCgocCkgPT4gcC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9zY3JvbGwpKVxuXG4gICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2VcbiAgICB0aGlzLl9wcmV2aW91c0RpcmVjdGlvblBvc2l0aW9uID0gbnVsbFxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2RyYWdnYWJsZScpXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIHRoaXMuX25hdGl2ZURyYWdTdGFydClcbiAgfVxuXG4gIGNvcHlTdHlsZXMoc291cmNlLCBkZXN0aW5hdGlvbikge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuY29weVN0eWxlcykge1xuICAgICAgdGhpcy5vcHRpb25zLmNvcHlTdHlsZXMoc291cmNlLCBkZXN0aW5hdGlvbilcbiAgICB9IGVsc2Uge1xuICAgICAgY29weVN0eWxlcyhzb3VyY2UsIGRlc3RpbmF0aW9uKVxuICAgIH1cbiAgfVxuXG4gIGVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcChldmVudCkge1xuICAgIGNvbnN0IGNvbnRhaW5lclJlY3QgPSB0aGlzLmNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIGNvbnN0IGNsb25lZEVsZW1lbnQgPSB0aGlzLmVsZW1lbnQuY2xvbmVOb2RlKHRydWUpXG4gICAgY2xvbmVkRWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wZXJ0eV0gPSAnJ1xuICAgIHRoaXMuY29weVN0eWxlcyh0aGlzLmVsZW1lbnQsIGNsb25lZEVsZW1lbnQpXG4gICAgY2xvbmVkRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSdcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNsb25lZEVsZW1lbnQpXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RyYWdlZS1wbGFjZWhvbGRlcicpXG5cbiAgICBjb25zdCBlbXVsYXRpb25EcmFnZ2FibGUgPSBuZXcgRHJhZ2dhYmxlKGNsb25lZEVsZW1lbnQsIHtcbiAgICAgIGNvbnRhaW5lcjogZG9jdW1lbnQuYm9keSxcbiAgICAgIHRvdWNoRHJhZ2dpbmdUaHJlc2hvbGQ6IDAsXG4gICAgICBib3VuZChwb2ludCkge1xuICAgICAgICByZXR1cm4gcG9pbnRcbiAgICAgIH0sXG4gICAgICBvbjoge1xuICAgICAgICAnZHJhZzptb3ZlJzogKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNvbnRhaW5lclJlY3RQb2ludCA9IG5ldyBQb2ludChjb250YWluZXJSZWN0LmxlZnQsIGNvbnRhaW5lclJlY3QudG9wKVxuICAgICAgICAgIHRoaXMucG9zaXRpb24gPSBlbXVsYXRpb25EcmFnZ2FibGUucG9zaXRpb24uc3ViKGNvbnRhaW5lclJlY3RQb2ludClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN1Yih0aGlzLl9zdGFydFdpbmRvd1Njcm9sbFBvaW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMuX3N0YXJ0UGFyZW50c1Njcm9sbFBvaW50KVxuXG4gICAgICAgICAgdGhpcy5kZXRlcm1pbmVEaXJlY3Rpb24odGhpcy5wb3NpdGlvbilcbiAgICAgICAgICB0aGlzLmVtaXQoJ2RyYWc6bW92ZScpXG4gICAgICAgIH0sXG4gICAgICAgICdkcmFnOmVuZCc6ICgpID0+IHtcbiAgICAgICAgICBlbXVsYXRpb25EcmFnZ2FibGUuZGVzdHJveSgpXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChjbG9uZWRFbGVtZW50KVxuICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZWUtcGxhY2Vob2xkZXInKVxuICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZWUtYWN0aXZlJylcblxuICAgICAgICAgIHRoaXMuZW1pdCgnZHJhZzplbmQnKVxuICAgICAgICAgIHRoaXMuZHJhZ0VuZEFjdGlvbigpXG4gICAgICAgICAgdGhpcy5jYW5jZWxEcmFnZ2luZygpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgY29udGFpbmVyUmVjdFBvaW50ID0gbmV3IFBvaW50KGNvbnRhaW5lclJlY3QubGVmdCwgY29udGFpbmVyUmVjdC50b3ApXG4gICAgZW11bGF0aW9uRHJhZ2dhYmxlLl9zdGFydFdpbmRvd1Njcm9sbFBvaW50ID0gdGhpcy5fc3RhcnRXaW5kb3dTY3JvbGxQb2ludFxuXG4gICAgZW11bGF0aW9uRHJhZ2dhYmxlLm1vdmUoXG4gICAgICB0aGlzLnBpbm5lZFBvc2l0aW9uLmFkZChjb250YWluZXJSZWN0UG9pbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgLmFkZCh0aGlzLndpbmRvd1Njcm9sbFBvaW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgIC5zdWIodGhpcy5wYXJlbnRzU2Nyb2xsUG9pbnQpXG4gICAgKVxuXG4gICAgZW11bGF0aW9uRHJhZ2dhYmxlLmRyYWdTdGFydChldmVudClcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBkcmFnRW5kQWN0aW9uKCkge1xuICAgIHRoaXMucGluUG9zaXRpb24odGhpcy5wb3NpdGlvbilcbiAgfVxuXG4gIGdldFJlY3RhbmdsZSgpIHtcbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZSh0aGlzLnBvc2l0aW9uLCB0aGlzLmdldFNpemUoKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgaWYgKHRoaXMuYm91bmRpbmcucmVmcmVzaCkge1xuICAgICAgdGhpcy5ib3VuZGluZy5yZWZyZXNoKClcbiAgICB9XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuaGFuZGxlci5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQpXG4gICAgdGhpcy5oYW5kbGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydClcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgdGhpcy5fbmF0aXZlRHJhZ1N0YXJ0KVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIHRoaXMuX25hdGl2ZURyYWdPdmVyKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzLl9uYXRpdmVEcm9wKVxuICAgIHRoaXMucmVzZXRFbWl0dGVyKClcblxuICAgIGNvbnN0IGluZGV4ID0gZHJhZ2dhYmxlcy5pbmRleE9mKHRoaXMpXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIGRyYWdnYWJsZXMuc3BsaWNlKGluZGV4LCAxKVxuICAgIH1cbiAgfVxuXG4gIGdldCBjb250YWluZXIoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9jb250YWluZXIgPSB0aGlzLl9jb250YWluZXIgfHwgdGhpcy5vcHRpb25zLmNvbnRhaW5lciB8fCB0aGlzLm9wdGlvbnMucGFyZW50IHx8IGdldERlZmF1bHRDb250YWluZXIodGhpcy5lbGVtZW50KSlcbiAgfVxuXG4gIGdldCBoYW5kbGVyKCkge1xuICAgIGlmICghdGhpcy5faGFuZGxlcikge1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuaGFuZGxlciA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhpcy5faGFuZGxlciA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKHRoaXMub3B0aW9ucy5oYW5kbGVyKSB8fCB0aGlzLmVsZW1lbnRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZXIgPSB0aGlzLm9wdGlvbnMuaGFuZGxlciB8fCB0aGlzLmVsZW1lbnRcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5faGFuZGxlclxuICB9XG5cbiAgZ2V0IHN0b3BQcm9wYWdhdGlvbk9uRHJhZ1N0YXJ0KCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuc3RvcFByb3BhZ2F0aW9uT25EcmFnU3RhcnQgfHwgZmFsc2VcbiAgfVxuXG4gIGdldCBuYXRpdmVEcmFnQW5kRHJvcCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLm5hdGl2ZURyYWdBbmREcm9wIHx8IGZhbHNlXG4gIH1cblxuICBnZXQgZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wT25Ub3VjaCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcE9uVG91Y2ggfHwgZmFsc2VcbiAgfVxuXG4gIGdldCBzaG91bGRSZW1vdmVaZXJvVHJhbnNsYXRlKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuc2hvdWxkUmVtb3ZlWmVyb1RyYW5zbGF0ZSB8fCBmYWxzZVxuICB9XG5cbiAgZ2V0IG5hdGl2ZURyYWdTdGFydERlbGF5KCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMubmF0aXZlRHJhZ1N0YXJ0RGVsYXkgfHwgMFxuICB9XG5cbiAgZ2V0IHRvdWNoRHJhZ2dpbmdUaHJlc2hvbGQoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy50b3VjaERyYWdnaW5nVGhyZXNob2xkIHx8IDBcbiAgfVxuXG4gIGdldCBkcmFnT3ZlclRocm90dGxlRHVyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5kcmFnT3ZlclRocm90dGxlRHVyYXRpb24gfHwgMTZcbiAgfVxuXG4gIGdldCB3aW5kb3dTY3JvbGxQb2ludCgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHdpbmRvdy5zY3JvbGxYLCB3aW5kb3cuc2Nyb2xsWSlcbiAgfVxuXG4gIGdldCBwYXJlbnRzKCkge1xuICAgIGlmICh0aGlzLl9jYWNoZWRQYXJlbnRzKSByZXR1cm4gdGhpcy5fY2FjaGVkUGFyZW50c1xuXG4gICAgdGhpcy5fY2FjaGVkUGFyZW50cyA9IFtdXG4gICAgbGV0IGVsZW1lbnQgPSB0aGlzLmVsZW1lbnRcblxuICAgIHdoaWxlKGVsZW1lbnQucGFyZW50Tm9kZSAmJiBlbGVtZW50ICE9IHRoaXMuY29udGFpbmVyKSB7XG4gICAgICB0aGlzLl9jYWNoZWRQYXJlbnRzLnVuc2hpZnQoZWxlbWVudC5wYXJlbnROb2RlKTtcbiAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2NhY2hlZFBhcmVudHNcbiAgfVxuXG4gIGdldCBwYXJlbnRzU2Nyb2xsUG9pbnQoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludChcbiAgICAgIHRoaXMucGFyZW50cy5yZWR1Y2UoKHN1bSwgcCkgPT4gc3VtICsgcC5zY3JvbGxMZWZ0LCAwKSxcbiAgICAgIHRoaXMucGFyZW50cy5yZWR1Y2UoKHN1bSwgcCkgPT4gc3VtICsgcC5zY3JvbGxUb3AsIDApXG4gICAgKVxuICB9XG5cbiAgZ2V0IGVuYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlXG4gIH1cblxuICBzZXQgZW5hYmxlKGVuYWJsZSkge1xuICAgIGlmIChlbmFibGUpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZWUtZGlzYWJsZScpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkcmFnZWUtZGlzYWJsZScpXG4gICAgfVxuXG4gICAgdGhpcy5fZW5hYmxlID0gZW5hYmxlXG4gIH1cbn1cblxuRHJhZ2dhYmxlLmVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKClcbkRyYWdnYWJsZS5lbWl0dGVyLm9uKCdkcmFnZ2FibGU6Y3JlYXRlJywgYWRkVG9EZWZhdWx0U2NvcGUpXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0LCBpbW1lZGlhdGUpIHtcbiAgbGV0IHRpbWVvdXRcblxuICByZXR1cm4gZnVuY3Rpb24gZXhlY3V0ZWRGdW5jdGlvbigpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpc1xuICAgIGNvbnN0IGFyZ3MgPSBhcmd1bWVudHNcblxuICAgIGNvbnN0IGxhdGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICB0aW1lb3V0ID0gbnVsbFxuICAgICAgaWYgKCFpbW1lZGlhdGUpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncylcbiAgICB9XG5cbiAgICBjb25zdCBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0XG5cbiAgICBjbGVhclRpbWVvdXQodGltZW91dClcblxuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KVxuXG4gICAgaWYgKGNhbGxOb3cpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncylcbiAgfVxufVxuIiwiaW1wb3J0IGRlYm91bmNlIGZyb20gJy4vdXRpbHMvZGVib3VuY2UnXG5pbXBvcnQgcmVtb3ZlSXRlbSBmcm9tICcuL3V0aWxzL3JlbW92ZS1hcnJheS1pdGVtJ1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50RW1pdHRlcidcbmltcG9ydCB7XG4gIGdldERpc3RhbmNlLFxuICBpbmRleE9mTmVhcmVzdFBvaW50XG59IGZyb20gJy4vZ2VvbWV0cnkvZGlzdGFuY2VzJ1xuXG5pbXBvcnQgRHJhZ2dhYmxlIGZyb20gJy4vZHJhZ2dhYmxlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0IGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoZHJhZ2dhYmxlcywgb3B0aW9ucz17fSkge1xuICAgIHN1cGVyKG9wdGlvbnMpXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICB0aW1lRW5kOiAyMDAsXG4gICAgICB0aW1lRXhjYW5nZTogNDAwLFxuICAgICAgcmFkaXVzOiAzMFxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0aGlzLmNvbnRhaW5lciA9IG9wdGlvbnMuY29udGFpbmVyXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gZHJhZ2dhYmxlc1xuICAgIHRoaXMuY2hhbmdlZER1cmluZ0l0ZXJhdGlvbiA9IGZhbHNlXG5cbiAgICB0aGlzLnJlc2l6ZU9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKGRlYm91bmNlKHRoaXMub25SZXNpemUuYmluZCh0aGlzKSwgMTAwKSlcblxuICAgIGlmICh0aGlzLmNvbnRhaW5lcikge1xuICAgICAgdGhpcy5yZXNpemVPYnNlcnZlci5vYnNlcnZlKHRoaXMuY29udGFpbmVyKVxuICAgIH1cblxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBvblJlc2l6ZSgpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLnJlb3JkZXJPbkNoYW5nZSkgdGhpcy5yZXNldCgpXG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGQpID0+IGQuc3RhcnRQb3NpdGlvbmluZygpKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLl9lbmFibGUgPSB0cnVlXG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gdGhpcy5pbml0RHJhZ2dhYmxlKGRyYWdnYWJsZSkpXG4gIH1cblxuICBpbml0RHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIGRyYWdnYWJsZS5lbmFibGUgPSB0aGlzLl9lbmFibGVcbiAgICBkcmFnZ2FibGUub24oJ2RyYWc6bW92ZScsICgpID0+IHRoaXMub25Nb3ZlKGRyYWdnYWJsZSkpXG4gICAgZHJhZ2dhYmxlLmRyYWdFbmRBY3Rpb24gPSAoKSA9PiB7XG4gICAgICBkcmFnZ2FibGUucGluUG9zaXRpb24oZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uLCB0aGlzLm9wdGlvbnMudGltZUVuZClcbiAgICAgIHRoaXMub25FbmQoZHJhZ2dhYmxlKVxuICAgIH1cbiAgICB0aGlzLnJlc2l6ZU9ic2VydmVyLm9ic2VydmUoZHJhZ2dhYmxlLmVsZW1lbnQpXG4gIH1cblxuICByZWxlYXNlRHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIudW5vYnNlcnZlKGRyYWdnYWJsZS5lbGVtZW50KVxuICAgIGRyYWdnYWJsZS5yZXNldE9uKCdkcmFnOmVuZCcpXG4gICAgZHJhZ2dhYmxlLnJlc2V0T24oJ2RyYWc6bW92ZScpXG4gICAgcmVtb3ZlSXRlbSh0aGlzLmRyYWdnYWJsZXMsIGRyYWdnYWJsZSlcbiAgfVxuXG4gIG9uTW92ZShkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBzb3J0ZWREcmFnZ2FibGVzID0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcbiAgICBjb25zdCBwaW5uZWRQb3NpdGlvbnMgPSBzb3J0ZWREcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24pXG5cbiAgICBjb25zdCBjdXJyZW50SW5kZXggPSBzb3J0ZWREcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKVxuICAgIGNvbnN0IHRhcmdldEluZGV4ID0gaW5kZXhPZk5lYXJlc3RQb2ludChwaW5uZWRQb3NpdGlvbnMsIGRyYWdnYWJsZS5wb3NpdGlvbiwgdGhpcy5vcHRpb25zLnJhZGl1cywgdGhpcy5kaXN0YW5jZUZ1bmMpXG5cbiAgICBpZiAodGFyZ2V0SW5kZXggIT09IC0xICYmIGN1cnJlbnRJbmRleCAhPT0gdGFyZ2V0SW5kZXgpIHtcbiAgICAgIGlmICh0YXJnZXRJbmRleCA8IGN1cnJlbnRJbmRleCkge1xuICAgICAgICBmb3IgKGxldCBpPXRhcmdldEluZGV4OyBpPGN1cnJlbnRJbmRleDsgaSsrKSB7XG4gICAgICAgICAgc29ydGVkRHJhZ2dhYmxlc1tpXS5waW5Qb3NpdGlvbihwaW5uZWRQb3NpdGlvbnNbaSsxXSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGxldCBpPWN1cnJlbnRJbmRleDsgaTx0YXJnZXRJbmRleDsgaSsrKSB7XG4gICAgICAgICAgc29ydGVkRHJhZ2dhYmxlc1tpKzFdLnBpblBvc2l0aW9uKHBpbm5lZFBvc2l0aW9uc1tpXSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChkcmFnZ2FibGUubmF0aXZlRHJhZ0FuZERyb3ApIHtcbiAgICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKHBpbm5lZFBvc2l0aW9uc1t0YXJnZXRJbmRleF0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24gPSBwaW5uZWRQb3NpdGlvbnNbdGFyZ2V0SW5kZXhdXG4gICAgICB9XG5cbiAgICAgIHRoaXMuY2hhbmdlZER1cmluZ0l0ZXJhdGlvbiA9IHRydWVcbiAgICB9XG4gIH1cblxuICBvbkVuZChkcmFnZ2FibGUpIHtcbiAgICBpZiAodGhpcy5jaGFuZ2VkRHVyaW5nSXRlcmF0aW9uKSB7XG4gICAgICB0aGlzLmVtaXQoJ2xpc3Q6Y2hhbmdlJylcbiAgICAgIHRoaXMuY2hhbmdlZER1cmluZ0l0ZXJhdGlvbiA9IGZhbHNlXG5cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucmVvcmRlck9uQ2hhbmdlICYmIHRoaXMub3B0aW9ucy5jb250YWluZXIpIHtcbiAgICAgICAgdGhpcy5yZW9yZGVyRWxlbWVudHMoZHJhZ2dhYmxlKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlb3JkZXJFbGVtZW50cyhtb3ZlZERyYWdnYWJsZSkge1xuICAgIGNvbnN0IHNvcnRlZERyYWdnYWJsZXMgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuICAgIGNvbnN0IGluZGV4ID0gc29ydGVkRHJhZ2dhYmxlcy5pbmRleE9mKG1vdmVkRHJhZ2dhYmxlKVxuICAgIGNvbnN0IG5leHQgPSBzb3J0ZWREcmFnZ2FibGVzW2luZGV4ICsgMV1cblxuICAgIHRoaXMucmVzZXQoKVxuXG4gICAgaWYgKG5leHQpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmluc2VydEJlZm9yZShtb3ZlZERyYWdnYWJsZS5lbGVtZW50LCBuZXh0LmVsZW1lbnQpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKG1vdmVkRHJhZ2dhYmxlLmVsZW1lbnQpXG4gICAgfVxuXG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGQpID0+IGQuc3RhcnRQb3NpdGlvbmluZygpKVxuICAgIHRoaXMuZW1pdCgnbGlzdDpyZW9yZGVyZWQnKVxuICB9XG5cbiAgZ2V0Q3VycmVudFBpbm5lZFBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5kcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24uY2xvbmUoKSlcbiAgfVxuXG4gIGdldFNvcnRlZERyYWdnYWJsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJhZ2dhYmxlcy5zb3J0KHRoaXMuc29ydGluZy5iaW5kKHRoaXMpKVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnJlc2V0UG9zaXRpb25Ub0luaXRpYWwoKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnJlZnJlc2goKSlcbiAgfVxuXG4gIGFkZChkcmFnZ2FibGVzKSB7XG4gICAgaWYgKCEoZHJhZ2dhYmxlcyBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgZHJhZ2dhYmxlcyA9IFtkcmFnZ2FibGVzXVxuICAgIH1cbiAgICBkcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gdGhpcy5pbml0RHJhZ2dhYmxlKGRyYWdnYWJsZSkpXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gdGhpcy5kcmFnZ2FibGVzLmNvbmNhdChkcmFnZ2FibGVzKVxuICB9XG5cbiAgcmVtb3ZlKGRyYWdnYWJsZXMpIHtcbiAgICBjb25zdCBpbml0aWFsUG9zaXRpb25zID0gdGhpcy5kcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uKVxuICAgIGNvbnN0IGxpc3QgPSBbXVxuICAgIGNvbnN0IHNvcnRlZERyYWdnYWJsZXMgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuXG4gICAgaWYgKCEoZHJhZ2dhYmxlcyBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgZHJhZ2dhYmxlcyA9IFtkcmFnZ2FibGVzXVxuICAgIH1cblxuICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB0aGlzLnJlbGVhc2VEcmFnZ2FibGUoZHJhZ2dhYmxlKSlcblxuICAgIGxldCBqID0gMFxuICAgIHNvcnRlZERyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBpZiAodGhpcy5kcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTEpIHtcbiAgICAgICAgaWYgKGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbiAhPT0gaW5pdGlhbFBvc2l0aW9uc1tqXSkge1xuICAgICAgICAgIGRyYWdnYWJsZS5waW5Qb3NpdGlvbihpbml0aWFsUG9zaXRpb25zW2pdLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICAgIH1cbiAgICAgICAgZHJhZ2dhYmxlLmluaXRpYWxQb3NpdGlvbiA9IGluaXRpYWxQb3NpdGlvbnNbal1cbiAgICAgICAgaisrXG4gICAgICAgIGxpc3QucHVzaChkcmFnZ2FibGUpXG4gICAgICB9XG4gICAgfSlcbiAgICB0aGlzLmRyYWdnYWJsZXMgPSBsaXN0XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLnJlbW92ZSh0aGlzLmRyYWdnYWJsZXMuc2xpY2UoKSlcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLmRlc3Ryb3koKSlcbiAgICBpZiAodGhpcy5jb250YWluZXIpIHtcbiAgICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIudW5vYnNlcnZlKHRoaXMuY29udGFpbmVyKVxuICAgIH1cbiAgfVxuXG4gIHNvcnRpbmcoZHJhZ2dhYmxlQSwgZHJhZ2dhYmxlQikge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuc29ydGluZykge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5zb3J0aW5nKGRyYWdnYWJsZUEsIGRyYWdnYWJsZUIpXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChkcmFnZ2FibGVBLnBpbm5lZFBvc2l0aW9uLnkgPCBkcmFnZ2FibGVCLnBpbm5lZFBvc2l0aW9uLnkpIHJldHVybiAtMVxuICAgICAgaWYgKGRyYWdnYWJsZUEucGlubmVkUG9zaXRpb24ueSA+IGRyYWdnYWJsZUIucGlubmVkUG9zaXRpb24ueSkgcmV0dXJuIDFcbiAgICAgIGlmIChkcmFnZ2FibGVBLnBpbm5lZFBvc2l0aW9uLnggPCBkcmFnZ2FibGVCLnBpbm5lZFBvc2l0aW9uLngpIHJldHVybiAtMVxuICAgICAgaWYgKGRyYWdnYWJsZUEucGlubmVkUG9zaXRpb24ueCA+IGRyYWdnYWJsZUIucGlubmVkUG9zaXRpb24ueCkgcmV0dXJuIDFcbiAgICAgIHJldHVybiAwXG4gICAgfVxuICB9XG5cbiAgZ2V0IGRpc3RhbmNlRnVuYygpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmdldERpc3RhbmNlIHx8IGdldERpc3RhbmNlXG4gIH1cblxuICBnZXQgcG9zaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmdldEN1cnJlbnRQaW5uZWRQb3NpdGlvbnMoKVxuICB9XG5cbiAgc2V0IHBvc2l0aW9ucyhwb3NpdGlvbnMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gJ3dyb25nIGFycmF5IGxlbmd0aCdcbiAgICBpZiAocG9zaXRpb25zLmxlbmd0aCA9PT0gdGhpcy5kcmFnZ2FibGVzLmxlbmd0aCkge1xuICAgICAgcG9zaXRpb25zLmZvckVhY2goKHBvaW50LCBpKSA9PiB7XG4gICAgICAgIHRoaXMuZHJhZ2dhYmxlc1tpXS5waW5Qb3NpdGlvbihwb2ludClcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG1lc3NhZ2VcbiAgICB9XG4gIH1cblxuICBnZXQgZW5hYmxlKCkge1xuICAgIHJldHVybiB0aGlzLl9lbmFibGVcbiAgfVxuXG4gIHNldCBlbmFibGUoZW5hYmxlKSB7XG4gICAgdGhpcy5fZW5hYmxlID0gZW5hYmxlXG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLmVuYWJsZSA9IGVuYWJsZVxuICAgIH0pXG4gIH1cblxuICBzdGF0aWMgZmFjdG9yeShjb250YWluZXJFbGVtZW50LCBlbGVtZW50cywgb3B0aW9ucz17fSkge1xuICAgIGNvbnN0IGRyYWdnYWJsZXMgPSBBcnJheS5mcm9tKGVsZW1lbnRzKS5tYXAoKGVsZW1lbnQpID0+IHtcbiAgICAgIHJldHVybiBuZXcgRHJhZ2dhYmxlKGVsZW1lbnQsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBjb250YWluZXI6IGNvbnRhaW5lckVsZW1lbnRcbiAgICAgIH0sIG9wdGlvbnMuZHJhZ2dhYmxlIHx8IHt9KSlcbiAgICB9KVxuXG4gICAgcmV0dXJuIG5ldyBMaXN0KGRyYWdnYWJsZXMsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgY29udGFpbmVyOiBjb250YWluZXJFbGVtZW50XG4gICAgfSwgb3B0aW9ucy5saXN0IHx8IHt9KSlcbiAgfVxufVxuIiwiaW1wb3J0IExpc3QgZnJvbSAnLi9saXN0J1xuaW1wb3J0IHsgaW5kZXhPZk5lYXJlc3RQb2ludCwgZ2V0WURpZmZlcmVuY2UgfSBmcm9tICcuL2dlb21ldHJ5L2Rpc3RhbmNlcydcbmltcG9ydCBQb2ludCBmcm9tICcuL2dlb21ldHJ5L3BvaW50J1xuXG5pbXBvcnQgRHJhZ2dhYmxlIGZyb20gJy4vZHJhZ2dhYmxlJ1xuXG5jb25zdCBhcnJheU1vdmUgPSAoYXJyYXksIGZyb20sIHRvKSA9PiB7XG4gIGFycmF5LnNwbGljZSh0byA8IDAgPyBhcnJheS5sZW5ndGggKyB0byA6IHRvLCAwLCBhcnJheS5zcGxpY2UoZnJvbSwgMSlbMF0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1YmJsaW5nTGlzdCBleHRlbmRzIExpc3Qge1xuICBhdXRvRGV0ZWN0VmVydGljYWxHYXAoKSB7XG4gICAgaWYgKCF0aGlzLl92ZXJ0aWNhbEdhcCAmJiAhdGhpcy5vcHRpb25zLnZlcnRpY2FsR2FwICYmIHRoaXMuZHJhZ2dhYmxlcy5sZW5ndGggPj0gMikge1xuICAgICAgY29uc3Qgc29ydGVkID0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcbiAgICAgIHRoaXMuX3ZlcnRpY2FsR2FwID0gc29ydGVkWzFdLnBpbm5lZFBvc2l0aW9uLnkgLSBzb3J0ZWRbMF0ucGlubmVkUG9zaXRpb24ueSAtIHNvcnRlZFswXS5nZXRTaXplKCkueVxuICAgIH1cbiAgfVxuXG4gIGF1dG9EZXRlY3RTdGFydFBvc2l0aW9uKCkge1xuICAgIGlmICh0aGlzLmRyYWdnYWJsZXMubGVuZ3RoID49IDEgJiYgIXRoaXMuc3RhcnRQb3NpdGlvbikge1xuICAgICAgdGhpcy5zdGFydFBvc2l0aW9uID0gdGhpcy5kcmFnZ2FibGVzWzBdLnBpbm5lZFBvc2l0aW9uXG4gICAgfVxuICB9XG5cbiAgaW5pdERyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICBzdXBlci5pbml0RHJhZ2dhYmxlKGRyYWdnYWJsZSlcbiAgICBkcmFnZ2FibGUub24oJ2RyYWc6c3RhcnQnLCAoKSA9PiB0aGlzLm9uRHJhZ1N0YXJ0KGRyYWdnYWJsZSkpXG4gIH1cblxuICBvbkRyYWdTdGFydChkcmFnZ2FibGUpIHtcbiAgICB0aGlzLmF1dG9EZXRlY3RWZXJ0aWNhbEdhcCgpXG4gICAgdGhpcy5hdXRvRGV0ZWN0U3RhcnRQb3NpdGlvbigpXG4gICAgdGhpcy5jYWNoZWRTb3J0ZWREcmFnZ2FibGVzID0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcbiAgICB0aGlzLmluZGV4T2ZBY3RpdmVEcmFnZ2FibGUgPSB0aGlzLmNhY2hlZFNvcnRlZERyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpXG4gIH1cblxuICBvbk1vdmUoZHJhZ2dhYmxlKSB7XG4gICAgY29uc3QgcHJldkRyYWdnYWJsZSA9IHRoaXMuY2FjaGVkU29ydGVkRHJhZ2dhYmxlc1t0aGlzLmluZGV4T2ZBY3RpdmVEcmFnZ2FibGUgLSAxXVxuICAgIGNvbnN0IG5leHREcmFnZ2FibGUgPSB0aGlzLmNhY2hlZFNvcnRlZERyYWdnYWJsZXNbdGhpcy5pbmRleE9mQWN0aXZlRHJhZ2dhYmxlICsgMV1cbiAgICBjb25zdCBjdXJyZW50UG9zaXRpb24gPSBkcmFnZ2FibGUucGlubmVkUG9zaXRpb25cblxuICAgIGxldCBjdXJyZW50T3JkZXJcbiAgICBsZXQgdGFyZ2V0SW5kZXhcblxuICAgIGlmKGRyYWdnYWJsZS51cERpcmVjdGlvbiAmJiBwcmV2RHJhZ2dhYmxlKSB7XG4gICAgICBjdXJyZW50T3JkZXIgPSBbcHJldkRyYWdnYWJsZSwgZHJhZ2dhYmxlXS5tYXAoKGQpID0+IGQucGlubmVkUG9zaXRpb24pXG4gICAgICB0YXJnZXRJbmRleCA9IGluZGV4T2ZOZWFyZXN0UG9pbnQoY3VycmVudE9yZGVyLCBkcmFnZ2FibGUucG9zaXRpb24sIDEwMDAwLCB0aGlzLmRpc3RhbmNlRnVuYylcblxuICAgICAgaWYgKHRhcmdldEluZGV4ID09PSAwKSB7XG4gICAgICAgIGlmKGRyYWdnYWJsZS5zaG91bGRVc2VOYXRpdmVEcmFnQW5kRHJvcCgpKSB7XG4gICAgICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKHByZXZEcmFnZ2FibGUucGlubmVkUG9zaXRpb24pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uID0gcHJldkRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbi5jbG9uZSgpXG4gICAgICAgIH1cbiAgICAgICAgcHJldkRyYWdnYWJsZS5waW5Qb3NpdGlvbihuZXcgUG9pbnQoXG4gICAgICAgICAgY3VycmVudFBvc2l0aW9uLngsXG4gICAgICAgICAgZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uLnkgKyBkcmFnZ2FibGUuZ2V0U2l6ZSgpLnkgKyB0aGlzLnZlcnRpY2FsR2FwXG4gICAgICAgICksIHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSlcbiAgICAgICAgYXJyYXlNb3ZlKHRoaXMuY2FjaGVkU29ydGVkRHJhZ2dhYmxlcywgdGhpcy5pbmRleE9mQWN0aXZlRHJhZ2dhYmxlLS0sIHRoaXMuaW5kZXhPZkFjdGl2ZURyYWdnYWJsZSlcbiAgICAgICAgdGhpcy5vbk1vdmUoZHJhZ2dhYmxlKVxuICAgICAgICB0aGlzLmNoYW5nZWREdXJpbmdJdGVyYXRpb24gPSB0cnVlXG4gICAgICB9XG4gICAgfSBlbHNlIGlmKGRyYWdnYWJsZS5kb3duRGlyZWN0aW9uICYmIG5leHREcmFnZ2FibGUpIHtcbiAgICAgIGN1cnJlbnRPcmRlciA9IFtkcmFnZ2FibGUsIG5leHREcmFnZ2FibGVdLm1hcCgoZCkgPT4gZC5waW5uZWRQb3NpdGlvbilcbiAgICAgIHRhcmdldEluZGV4ID0gaW5kZXhPZk5lYXJlc3RQb2ludChjdXJyZW50T3JkZXIsIGRyYWdnYWJsZS5wb3NpdGlvbiwgMTAwMDAsIHRoaXMuZGlzdGFuY2VGdW5jKVxuXG4gICAgICBpZih0YXJnZXRJbmRleCA9PT0gMSkge1xuICAgICAgICBuZXh0RHJhZ2dhYmxlLnBpblBvc2l0aW9uKGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbiwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICBjb25zdCBkcmFnZ2FibGVOZXdQb3NpdGlvbiA9IG5ldyBQb2ludChcbiAgICAgICAgICBuZXh0RHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uLngsXG4gICAgICAgICAgbmV4dERyYWdnYWJsZS5waW5uZWRQb3NpdGlvbi55ICsgbmV4dERyYWdnYWJsZS5nZXRTaXplKCkueSArIHRoaXMudmVydGljYWxHYXBcbiAgICAgICAgKVxuICAgICAgICBpZihkcmFnZ2FibGUuc2hvdWxkVXNlTmF0aXZlRHJhZ0FuZERyb3AoKSkge1xuICAgICAgICAgIGRyYWdnYWJsZS5waW5Qb3NpdGlvbihkcmFnZ2FibGVOZXdQb3NpdGlvbilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24gPSBkcmFnZ2FibGVOZXdQb3NpdGlvblxuICAgICAgICB9XG4gICAgICAgIGFycmF5TW92ZSh0aGlzLmNhY2hlZFNvcnRlZERyYWdnYWJsZXMsIHRoaXMuaW5kZXhPZkFjdGl2ZURyYWdnYWJsZSsrLCB0aGlzLmluZGV4T2ZBY3RpdmVEcmFnZ2FibGUpXG4gICAgICAgIHRoaXMub25Nb3ZlKGRyYWdnYWJsZSlcbiAgICAgICAgdGhpcy5jaGFuZ2VkRHVyaW5nSXRlcmF0aW9uID0gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGJ1YmJsaW5nKHNvcnRlZERyYWdnYWJsZXMsIGN1cnJlbnREcmFnZ2FibGUpIHtcbiAgICBjb25zdCBjdXJyZW50UG9zaXRpb24gPSB0aGlzLnN0YXJ0UG9zaXRpb24uY2xvbmUoKVxuICAgIHNvcnRlZERyYWdnYWJsZXMgfHw9IHRoaXMuZ2V0U29ydGVkRHJhZ2dhYmxlcygpXG5cbiAgICBzb3J0ZWREcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgaWYgKCFkcmFnZ2FibGUucGlubmVkUG9zaXRpb24uY29tcGFyZShjdXJyZW50UG9zaXRpb24pKSB7XG4gICAgICAgIGlmIChkcmFnZ2FibGUgPT09IGN1cnJlbnREcmFnZ2FibGUgJiYgIWN1cnJlbnREcmFnZ2FibGUuc2hvdWxkVXNlTmF0aXZlRHJhZ0FuZERyb3AoKSkge1xuICAgICAgICAgIGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbiA9IGN1cnJlbnRQb3NpdGlvbi5jbG9uZSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKGN1cnJlbnRQb3NpdGlvbiwgKGRyYWdnYWJsZSA9PT0gY3VycmVudERyYWdnYWJsZSkgPyAwIDogdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGN1cnJlbnRQb3NpdGlvbi55ID0gY3VycmVudFBvc2l0aW9uLnkgKyBkcmFnZ2FibGUuZ2V0U2l6ZSgpLnkgKyB0aGlzLnZlcnRpY2FsR2FwXG4gICAgfSlcbiAgfVxuXG4gIHJlbW92ZShkcmFnZ2FibGVzKSB7XG4gICAgaWYgKCEoZHJhZ2dhYmxlcyBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgZHJhZ2dhYmxlcyA9IFtkcmFnZ2FibGVzXVxuICAgIH1cblxuICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB0aGlzLnJlbGVhc2VEcmFnZ2FibGUoZHJhZ2dhYmxlKSlcbiAgICB0aGlzLmRyYWdnYWJsZXMgPSB0aGlzLmRyYWdnYWJsZXMuZmlsdGVyKChkKSA9PiAhZHJhZ2dhYmxlcy5pbmNsdWRlcyhkKSlcblxuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkKSA9PiBkLnN0YXJ0UG9zaXRpb25pbmcoKSlcblxuICAgIGlmKHRoaXMuZHJhZ2dhYmxlcy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmF1dG9EZXRlY3RWZXJ0aWNhbEdhcCgpXG4gICAgICB0aGlzLmF1dG9EZXRlY3RTdGFydFBvc2l0aW9uKClcbiAgICAgIHRoaXMuYnViYmxpbmcoKVxuICAgIH1cbiAgfVxuXG4gIGdldCBkaXN0YW5jZUZ1bmMoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5nZXREaXN0YW5jZSB8fCBnZXRZRGlmZmVyZW5jZVxuICB9XG5cbiAgZ2V0IHZlcnRpY2FsR2FwKCkge1xuICAgIGlmKHRoaXMub3B0aW9ucy52ZXJ0aWNhbEdhcCkge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy52ZXJ0aWNhbEdhcFxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmF1dG9EZXRlY3RWZXJ0aWNhbEdhcCgpXG4gICAgICByZXR1cm4gdGhpcy5fdmVydGljYWxHYXAgfHwgMFxuICAgIH1cbiAgfVxuXG4gIHNldCB2ZXJ0aWNhbEdhcChnYXBWYWx1ZSkge1xuICAgIHRoaXMub3B0aW9ucy52ZXJ0aWNhbEdhcCA9IGdhcFZhbHVlXG4gIH1cblxuICBzdGF0aWMgZmFjdG9yeShjb250YWluZXJFbGVtZW50LCBlbGVtZW50cywgb3B0aW9ucz17fSkge1xuICAgIGNvbnN0IGRyYWdnYWJsZXMgPSBBcnJheS5mcm9tKGVsZW1lbnRzKS5tYXAoKGVsZW1lbnQpID0+IHtcbiAgICAgIHJldHVybiBuZXcgRHJhZ2dhYmxlKGVsZW1lbnQsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBjb250YWluZXI6IGNvbnRhaW5lckVsZW1lbnRcbiAgICAgIH0sIG9wdGlvbnMuZHJhZ2dhYmxlIHx8IHt9KSlcbiAgICB9KVxuXG4gICAgcmV0dXJuIG5ldyBCdWJibGluZ0xpc3QoZHJhZ2dhYmxlcywgT2JqZWN0LmFzc2lnbih7XG4gICAgICBjb250YWluZXI6IGNvbnRhaW5lckVsZW1lbnRcbiAgICB9LCBvcHRpb25zLmxpc3QgfHwge30pKVxuICB9XG59XG4iXSwibmFtZXMiOlsiUG9pbnQiLCJjb25zdHJ1Y3RvciIsIngiLCJ5IiwiYWRkIiwicCIsInN1YiIsIm11bHQiLCJrIiwibmVnYXRpdmUiLCJjb21wYXJlIiwiY2xvbmUiLCJ0b1N0cmluZyIsImVsZW1lbnRPZmZzZXQiLCJlbGVtZW50IiwicGFyZW50IiwicGFyZW50Tm9kZSIsImVsZW1lbnRSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicGFyZW50UmVjdCIsImxlZnQiLCJ0b3AiLCJlbGVtZW50U2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwiUmVjdGFuZ2xlIiwicG9zaXRpb24iLCJzaXplIiwiZ2V0UDEiLCJnZXRQMiIsImdldFAzIiwiZ2V0UDQiLCJnZXRDZW50ZXIiLCJvciIsInJlY3QiLCJNYXRoIiwibWluIiwibWF4IiwiYW5kIiwiaW5jbHVkZVBvaW50IiwiaW5jbHVkZVJlY3RhbmdsZSIsInJlY3RhbmdsZSIsIm1vdmVUb0JvdW5kIiwiYXhpcyIsInNlbEF4aXMiLCJjcm9zc1JlY3RhbmdsZSIsInRoaXNDZW50ZXIiLCJyZWN0Q2VudGVyIiwic2lnbiIsIm9mZnNldCIsImdldFNxdWFyZSIsInN0eWxlQXBwbHkiLCJlbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInN0eWxlIiwiZ3Jvd3RoIiwiZ2V0TWluU2lkZSIsImZyb21FbGVtZW50IiwiaXNDb25zaWRlclRyYW5zbGF0ZSIsImdldERlZmF1bHRDb250YWluZXIiLCJjb250YWluZXIiLCJ3aW5kb3ciLCJnZXRDb21wdXRlZFN0eWxlIiwidGFnTmFtZSIsIkV2ZW50RW1pdHRlciIsIm9wdGlvbnMiLCJldmVudHMiLCJvbiIsImV2ZW50TmFtZSIsImZuIiwiT2JqZWN0IiwiZW50cmllcyIsImVtaXQiLCJpbnRlcnJ1cHRlZCIsImFyZ3MiLCJzbGljZSIsImNhbGwiLCJhcmd1bWVudHMiLCJmdW5jIiwiaW50ZXJydXB0IiwicHVzaCIsInByZXBlbmRPbiIsInVuc2hpZnQiLCJ1bnN1YnNjcmliZSIsImluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsInJlc2V0RW1pdHRlciIsInJlc2V0T24iLCJnZXREaXN0YW5jZSIsInAxIiwicDIiLCJkeCIsImR5Iiwic3FydCIsImdldFhEaWZmZXJlbmNlIiwiYWJzIiwiZ2V0WURpZmZlcmVuY2UiLCJ0cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5IiwicG93IiwiaW5kZXhPZk5lYXJlc3RQb2ludCIsImFyciIsInZhbCIsInJhZGl1cyIsImdldERpc3RhbmNlRnVuYyIsImkiLCJ0ZW1wIiwibGVuZ3RoIiwiZGlyZWN0Q3Jvc3NpbmciLCJMMVAxIiwiTDFQMiIsIkwyUDEiLCJMMlAyIiwiazEiLCJrMiIsImIxIiwiYjIiLCJib3VuZFRvTGluZSIsIkEiLCJCIiwiUCIsIkFQIiwiQUIiLCJhYjIiLCJhcF9hYiIsInQiLCJnZXRQb2ludE9uTGluZUJ5TGVuZ2h0IiwiTFAxIiwiTFAyIiwibGVuZ2h0IiwicGVyY2VudCIsImFkZFBvaW50VG9Cb3VuZFBvaW50cyIsImJvdW5kcG9pbnRzIiwicG9pbnQiLCJpc1JpZ2h0IiwicmVzdWx0IiwiZmlsdGVyIiwiYlBvaW50IiwiZ2V0QW5nbGVEaWZmIiwiYWxwaGEiLCJiZXRhIiwibWluQW5nbGUiLCJtYXhBbmdsZSIsIlBJIiwiZ2V0QW5nbGUiLCJkaWZmIiwibm9ybWFsaXplQW5nbGUiLCJhdGFuMiIsImJvdW5kQW5nbGUiLCJkbWluIiwiZG1heCIsImdldFBvaW50RnJvbVJhZGlhbFN5c3RlbSIsImFuZ2xlIiwiY2VudGVyIiwiY29zIiwic2luIiwiQm91bmQiLCJib3VuZCIsIl9zaXplIiwicmVmcmVzaCIsImJvdW5kaW5nIiwiaW5zdGFuY2UiLCJiaW5kIiwiQm91bmRUb1JlY3RhbmdsZSIsImNhbGNQb2ludCIsInJlY3RQMiIsIkJvdW5kVG9FbGVtZW50IiwiQm91bmRUb0xpbmVYIiwic3RhcnRZIiwiZW5kWSIsIkJvdW5kVG9MaW5lWSIsInN0YXJ0WCIsImVuZFgiLCJCb3VuZFRvTGluZSIsInN0YXJ0UG9pbnQiLCJlbmRQb2ludCIsInNvbWVLIiwiY29zQmV0YSIsInNpbkJldGEiLCJwb2ludDIiLCJuZXdFbmRQb2ludCIsInBvaW50Q3Jvc3NpbmciLCJCb3VuZFRvQ2lyY2xlIiwiQm91bmRUb0FyYyIsInN0YXJ0QW5nbGUiLCJlbmRBbmdsZSIsIl9zdGFydEFuZ2xlIiwiX2VuZEFuZ2xlIiwiYXJyYXkiLCJyYW5nZSIsInN0YXJ0Iiwic3RvcCIsInN0ZXAiLCJCYXNpY1N0cmF0ZWd5IiwiYm91bmRSZWN0IiwiTm90Q3Jvc3NpbmdTdHJhdGVneSIsInBvc2l0aW9uaW5nIiwicmVjdGFuZ2xlTGlzdCIsImluZGV4ZXNPZk5ld3MiLCJzdGF0aWNSZWN0YW5nbGVJbmRleGVzIiwicmVkdWNlIiwiaW5kZXhlcyIsIl9yZWN0IiwiZm9yRWFjaCIsInJlbW92YWJsZSIsImluZGV4T2ZTdGF0aWMiLCJzdGF0aWNSZWN0Iiwic29tZSIsInNvcnRpbmciLCJvZGxEcmFnZ2FibGVzTGlzdCIsIm5ld0RyYWdnYWJsZXMiLCJpbmRleE9mTmV3cyIsImRyYWdnYWJsZXMiLCJjb25jYXQiLCJkcmFnZ2FibGUiLCJGbG9hdExlZnRTdHJhdGVneSIsImFzc2lnbiIsInBhZGRpbmdUb3BMZWZ0IiwicGFkZGluZ0JvdHRvbVJpZ2h0IiwieUdhcEJldHdlZW5EcmFnZ2FibGVzIiwiZ2V0UG9zaXRpb24iLCJfaW5kZXhlc09mTmV3cyIsImJvdW5kYXJ5UG9pbnRzIiwicmVjdEluZGV4IiwiaXNWYWxpZCIsIm5ld0xpc3QiLCJsaXN0T2xkUG9zaXRpb24iLCJtYXAiLCJuZXdEcmFnZ2FibGUiLCJGbG9hdFJpZ2h0U3RyYXRlZ3kiLCJwYWRkaW5nVG9wUmlnaHQiLCJwYWRkaW5nQm90dG9tTGVmdCIsInBhZGRpbmdCb3R0b21OZWdMZWZ0IiwiYWRkVG9EZWZhdWx0U2NvcGUiLCJ0YXJnZXQiLCJkZWZhdWx0U2NvcGUiLCJhZGRUYXJnZXQiLCJUYXJnZXQiLCJ0aW1lRW5kIiwidGltZUV4Y2FuZ2UiLCJwb3NpdGlvbmluZ1N0cmF0ZWd5Iiwic3RyYXRlZ3kiLCJnZXRSZWN0YW5nbGUiLCJ0YXJnZXRzIiwiZW1pdHRlciIsInN0YXJ0Qm91bmRpbmciLCJpbml0IiwiaW5kZXhlc09mTmV3Iiwib2xkRHJhZ2dhYmxlcyIsInJlY3RhbmdsZXMiLCJpbm5lckRyYWdnYWJsZXMiLCJzZXRQb3NpdGlvbiIsImNhdGNoRHJhZ2dhYmxlIiwidGFyZ2V0UmVjdGFuZ2xlIiwiZHJhZ2dhYmxlU3F1YXJlIiwiZ2V0U2l6ZSIsImRlc3Ryb3kiLCJzY29wZXMiLCJzY29wZSIsInJlbW92ZUl0ZW0iLCJvbkVuZCIsIm5ld0RyYWdnYWJsZXNJbmRleCIsImFkZFJlbW92ZU9uTW92ZSIsInRpbWUiLCJtb3ZlIiwiaW5pdGlhbFBvc2l0aW9uIiwicHVzaElubmVyRHJhZ2dhYmxlIiwicmVtb3ZlSGFuZGxlciIsInJlbW92ZSIsInJlc2V0IiwiZ2V0U29ydGVkRHJhZ2dhYmxlcyIsIl9jb250YWluZXIiLCJTY29wZSIsImRyYWdFbmRBY3Rpb24iLCJhZGREcmFnZ2FibGUiLCJzaG90VGFyZ2V0cyIsInNvcnQiLCJhIiwiYiIsInBpblBvc2l0aW9uIiwicG9zaXRpb25zIiwibWVzc2FnZSIsInRhcmdldEluZGV4ZXMiLCJjdXJyZW50U2NvcGUiLCJhZGREcmFnZ2FibGVUb1Njb3BlIiwiRHJhZ2dhYmxlIiwiYWRkVGFyZ2V0VG9TY29wZSIsImNoZWNrU3VwcG9ydFBhc3NpdmVFdmVudHMiLCJwYXNzaXZlU3VwcG9ydGVkIiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIl9lcnIiLCJpc1N1cHBvcnRQYXNzaXZlRXZlbnRzIiwidGhyb3R0bGUiLCJ3YWl0IiwibGFzdFRpbWUiLCJleGVjdXRlZEZ1bmN0aW9uIiwiY29udGV4dCIsIm5vdyIsIkRhdGUiLCJhcHBseSIsInRocm90dGxlZERyYWdPdmVyIiwiY2FsbGJhY2siLCJkdXJhdGlvbiIsInRocm90dGxlZENhbGxiYWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImRlbGF5ZWROYXRpdmVEcmFnU3RhcnQiLCJkZWxheSIsInN0b3BQcm9wYWdhdGlvbiIsInNldFRpbWVvdXQiLCJwYXNzaXZlRmFsc2UiLCJwYXNzaXZlIiwiaXNUb3VjaCIsIm1vdXNlRXZlbnRzIiwiZW5kIiwidG91Y2hFdmVudHMiLCJ0cmFuc2Zvcm1Qcm9wZXJ0eSIsInRyYW5zaXRpb25Qcm9wZXJ0eSIsImdldFRvdWNoQnlJRCIsInRvdWNoSWQiLCJjaGFuZ2VkVG91Y2hlcyIsImlkZW50aWZpZXIiLCJwcmV2ZW50RG91YmxlSW5pdCIsImV4aXN0aW5nIiwiY29weVN0eWxlcyIsInNvdXJjZSIsImRlc3RpbmF0aW9uIiwiY3MiLCJrZXkiLCJjaGlsZHJlbiIsIl9lbmFibGUiLCJzdGFydFBvc2l0aW9uaW5nIiwic3RhcnRMaXN0ZW5pbmciLCJfc2V0RGVmYXVsdFRyYW5zaXRpb24iLCJwaW5uZWRQb3NpdGlvbiIsIl9kcmFnU3RhcnQiLCJkcmFnU3RhcnQiLCJfZHJhZ01vdmUiLCJkcmFnTW92ZSIsIl9kcmFnRW5kIiwiZHJhZ0VuZCIsIl9uYXRpdmVEcmFnU3RhcnQiLCJuYXRpdmVEcmFnU3RhcnQiLCJuYXRpdmVEcmFnU3RhcnREZWxheSIsIl9uYXRpdmVEcmFnT3ZlciIsIm5hdGl2ZURyYWdPdmVyIiwiZHJhZ092ZXJUaHJvdHRsZUR1cmF0aW9uIiwiX25hdGl2ZURyYWdFbmQiLCJuYXRpdmVEcmFnRW5kIiwiX25hdGl2ZURyb3AiLCJuYXRpdmVEcm9wIiwiX3Njcm9sbCIsIm9uU2Nyb2xsIiwiaGFuZGxlciIsIl90cmFuc2Zvcm1Qb3NpdGlvbiIsIl9zZXRUcmFuc2l0aW9uIiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25Dc3MiLCJ0ZXN0IiwicmVwbGFjZSIsIl9zZXRUcmFuc2xhdGUiLCJ0cmFuc2xhdGVDc3MiLCJ0cmFuc2Zvcm0iLCJzaG91bGRSZW1vdmVaZXJvVHJhbnNsYXRlIiwiaXNTaWxlbnQiLCJzaWxlbnQiLCJyZXNldFBvc2l0aW9uVG9Jbml0aWFsIiwicmVmcmVzaFBvc2l0aW9uIiwiZGV0ZXJtaW5lRGlyZWN0aW9uIiwiX3ByZXZpb3VzRGlyZWN0aW9uUG9zaXRpb24iLCJfc3RhcnRQb3NpdGlvbiIsImxlZnREaXJlY3Rpb24iLCJyaWdodERpcmVjdGlvbiIsInVwRGlyZWN0aW9uIiwiZG93bkRpcmVjdGlvbiIsInNlZW1zU2Nyb2xsaW5nIiwiX3N0YXJ0VG91Y2hUaW1lc3RhbXAiLCJ0b3VjaERyYWdnaW5nVGhyZXNob2xkIiwic2hvdWxkVXNlTmF0aXZlRHJhZ0FuZERyb3AiLCJpc1RvdWNoRXZlbnQiLCJuYXRpdmVEcmFnQW5kRHJvcCIsImVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcE9uVG91Y2giLCJzdG9wUHJvcGFnYXRpb25PbkRyYWdTdGFydCIsIlRvdWNoRXZlbnQiLCJ0b3VjaFBvaW50IiwiX3N0YXJ0VG91Y2hQb2ludCIsInBhZ2VYIiwiY2xpZW50WCIsInBhZ2VZIiwiY2xpZW50WSIsIl90b3VjaElkIiwiX3N0YXJ0V2luZG93U2Nyb2xsUG9pbnQiLCJ3aW5kb3dTY3JvbGxQb2ludCIsIl9zdGFydFBhcmVudHNTY3JvbGxQb2ludCIsInBhcmVudHNTY3JvbGxQb2ludCIsIkhUTUxJbnB1dEVsZW1lbnQiLCJmb2N1cyIsImVtdWxhdGVPbkZpcnN0TW92ZSIsImNhbmNlbERyYWdnaW5nIiwiZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wIiwiY2FuY2VsRW11bGF0aW9uIiwicGFyZW50cyIsInRvdWNoIiwiaXNEcmFnZ2luZyIsImNsYXNzTGlzdCIsIl9ldmVudCIsImRhdGFUcmFuc2ZlciIsInNldERhdGEiLCJlZmZlY3RBbGxvd2VkIiwiZHJvcEVmZmVjdCIsInJlbW92ZUF0dHJpYnV0ZSIsImNvbnRhaW5lclJlY3QiLCJjbG9uZWRFbGVtZW50IiwiY2xvbmVOb2RlIiwiYm9keSIsImFwcGVuZENoaWxkIiwiZW11bGF0aW9uRHJhZ2dhYmxlIiwiY29udGFpbmVyUmVjdFBvaW50IiwicmVtb3ZlQ2hpbGQiLCJfaGFuZGxlciIsInNjcm9sbFgiLCJzY3JvbGxZIiwiX2NhY2hlZFBhcmVudHMiLCJzdW0iLCJzY3JvbGxMZWZ0Iiwic2Nyb2xsVG9wIiwiZW5hYmxlIiwiZGVib3VuY2UiLCJpbW1lZGlhdGUiLCJ0aW1lb3V0IiwibGF0ZXIiLCJjbGVhclRpbWVvdXQiLCJMaXN0IiwiY2hhbmdlZER1cmluZ0l0ZXJhdGlvbiIsInJlc2l6ZU9ic2VydmVyIiwiUmVzaXplT2JzZXJ2ZXIiLCJvblJlc2l6ZSIsIm9ic2VydmUiLCJyZW9yZGVyT25DaGFuZ2UiLCJkIiwiaW5pdERyYWdnYWJsZSIsIm9uTW92ZSIsInJlbGVhc2VEcmFnZ2FibGUiLCJ1bm9ic2VydmUiLCJzb3J0ZWREcmFnZ2FibGVzIiwicGlubmVkUG9zaXRpb25zIiwiY3VycmVudEluZGV4IiwidGFyZ2V0SW5kZXgiLCJkaXN0YW5jZUZ1bmMiLCJyZW9yZGVyRWxlbWVudHMiLCJtb3ZlZERyYWdnYWJsZSIsIm5leHQiLCJpbnNlcnRCZWZvcmUiLCJnZXRDdXJyZW50UGlubmVkUG9zaXRpb25zIiwiQXJyYXkiLCJpbml0aWFsUG9zaXRpb25zIiwibGlzdCIsImoiLCJjbGVhciIsImRyYWdnYWJsZUEiLCJkcmFnZ2FibGVCIiwiZmFjdG9yeSIsImNvbnRhaW5lckVsZW1lbnQiLCJlbGVtZW50cyIsImZyb20iLCJhcnJheU1vdmUiLCJ0byIsIkJ1YmJsaW5nTGlzdCIsImF1dG9EZXRlY3RWZXJ0aWNhbEdhcCIsIl92ZXJ0aWNhbEdhcCIsInZlcnRpY2FsR2FwIiwic29ydGVkIiwiYXV0b0RldGVjdFN0YXJ0UG9zaXRpb24iLCJzdGFydFBvc2l0aW9uIiwib25EcmFnU3RhcnQiLCJjYWNoZWRTb3J0ZWREcmFnZ2FibGVzIiwiaW5kZXhPZkFjdGl2ZURyYWdnYWJsZSIsInByZXZEcmFnZ2FibGUiLCJuZXh0RHJhZ2dhYmxlIiwiY3VycmVudFBvc2l0aW9uIiwiY3VycmVudE9yZGVyIiwiZHJhZ2dhYmxlTmV3UG9zaXRpb24iLCJidWJibGluZyIsImN1cnJlbnREcmFnZ2FibGUiLCJpbmNsdWRlcyIsImdhcFZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7RUFBQTtFQUNlLE1BQU1BLEtBQUssQ0FBQztFQUN6QjtFQUNGO0VBQ0E7RUFDQTtFQUNBO0VBQ0VDLEVBQUFBLFdBQVcsQ0FBQ0MsQ0FBQyxFQUFFQyxDQUFDLEVBQUU7TUFDaEIsSUFBSSxDQUFDRCxDQUFDLEdBQUdBLENBQUM7TUFDVixJQUFJLENBQUNDLENBQUMsR0FBR0EsQ0FBQztFQUNaO0lBRUFDLEdBQUcsQ0FBQ0MsQ0FBQyxFQUFFO0VBQ0wsSUFBQSxPQUFPLElBQUlMLEtBQUssQ0FBQyxJQUFJLENBQUNFLENBQUMsR0FBR0csQ0FBQyxDQUFDSCxDQUFDLEVBQUUsSUFBSSxDQUFDQyxDQUFDLEdBQUdFLENBQUMsQ0FBQ0Ys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
