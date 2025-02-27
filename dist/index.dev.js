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
      return `{x=${this.x},y=${this.y}`;
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
      this.innerDraggables.slice();
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
    get dragOverThrottleDuration() {
      return this.options.dragOverThrottleDuration || 16;
    }
    get isConsiderTransformOffset() {
      this.options.considerTransformOffset || false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZGV2LmpzIiwic291cmNlcyI6WyIuLi9zcmMvdXRpbHMvZ2V0LXBhcmVudHMtY2hhaW4uanMiLCIuLi9zcmMvZ2VvbWV0cnkvcG9pbnQuanMiLCIuLi9zcmMvZ2VvbWV0cnkvcmVjdGFuZ2xlLmpzIiwiLi4vc3JjL2V2ZW50RW1pdHRlci5qcyIsIi4uL3NyYy91dGlscy9yZW1vdmUtYXJyYXktaXRlbS5qcyIsIi4uL3NyYy91dGlscy9yYW5nZS5qcyIsIi4uL3NyYy9nZW9tZXRyeS9kaXN0YW5jZXMuanMiLCIuLi9zcmMvZ2VvbWV0cnkvYm91bmRzLmpzIiwiLi4vc3JjL3Bvc2l0aW9uaW5nLmpzIiwiLi4vc3JjL2dlb21ldHJ5L2FuZ2xlcy5qcyIsIi4uL3NyYy9ib3VuZGluZy5qcyIsIi4uL3NyYy90YXJnZXQuanMiLCIuLi9zcmMvc2NvcGUuanMiLCIuLi9zcmMvdXRpbHMvdGhyb3R0bGUuanMiLCIuLi9zcmMvZHJhZ2dhYmxlLmpzIiwiLi4vc3JjL3V0aWxzL2RlYm91bmNlLmpzIiwiLi4vc3JjL2xpc3QuanMiLCIuLi9zcmMvYnViYmxpbmdMaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFBhcmVudHNDaGFpbihjaGlsZEVsZW1lbnQsIHJvb3RFbGVtZW50KSB7XG5cdGNvbnN0IGNoYWluID0gW11cbiAgbGV0IGVsZW1lbnQgPSBjaGlsZEVsZW1lbnRcblxuICB3aGlsZShlbGVtZW50LnBhcmVudE5vZGUgJiYgZWxlbWVudCAhPT0gcm9vdEVsZW1lbnQpIHtcbiAgICBjaGFpbi51bnNoaWZ0KGVsZW1lbnQucGFyZW50Tm9kZSlcbiAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlXG4gIH1cblxuICByZXR1cm4gY2hhaW5cbn1cbiIsImltcG9ydCBnZXRQYXJlbnRzQ2hhaW4gZnJvbSAnLi4vdXRpbHMvZ2V0LXBhcmVudHMtY2hhaW4nXG5cbi8qKiBDbGFzcyByZXByZXNlbnRpbmcgYSBwb2ludC4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvaW50IHtcbiAgLyoqXG4gICogQ3JlYXRlIGEgcG9pbnQuXG4gICogQHBhcmFtIHtudW1iZXJ9IHggLSBUaGUgeCB2YWx1ZS5cbiAgKiBAcGFyYW0ge251bWJlcn0geSAtIFRoZSB5IHZhbHVlLlxuICAqL1xuICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgdGhpcy54ID0geFxuICAgIHRoaXMueSA9IHlcbiAgfVxuXG4gIGFkZChwKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnggKyBwLngsIHRoaXMueSArIHAueSlcbiAgfVxuXG4gIHN1YihwKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnggLSBwLngsIHRoaXMueSAtIHAueSlcbiAgfVxuXG4gIG11bHQoaykge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54ICogaywgdGhpcy55ICogaylcbiAgfVxuXG4gIG5lZ2F0aXZlKCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQoLXRoaXMueCwgLXRoaXMueSlcbiAgfVxuXG4gIGNvbXBhcmUocCkge1xuICAgIHJldHVybiAodGhpcy54ID09PSBwLnggJiYgdGhpcy55ID09PSBwLnkpXG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCwgdGhpcy55KVxuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIGB7eD0ke3RoaXMueH0seT0ke3RoaXMueX1gXG4gIH1cblxuICBzdGF0aWMgZWxlbWVudE9mZnNldChlbGVtZW50LCBwYXJlbnQpIHtcbiAgICBwYXJlbnQgPSBwYXJlbnQgfHwgZWxlbWVudC5wYXJlbnROb2RlXG4gICAgaWYgKHBhcmVudCA9PT0gZWxlbWVudCkge1xuICAgICAgcmV0dXJuIG5ldyBQb2ludCgwLCAwKTtcbiAgICB9IGVsc2UgaWYgKHBhcmVudCA9PT0gZWxlbWVudC5vZmZzZXRQYXJlbnQpIHtcbiAgICAgIHJldHVybiBuZXcgUG9pbnQoXG4gICAgICAgIGVsZW1lbnQub2Zmc2V0TGVmdCArIHBhcmVudC5jbGllbnRMZWZ0LFxuICAgICAgICBlbGVtZW50Lm9mZnNldFRvcCArIHBhcmVudC5jbGllbnRUb3BcbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgY29uc2lkZXJPZmZzZXRFbGVtZW50cyA9IFtlbGVtZW50LCBnZXRQYXJlbnRzQ2hhaW4oZWxlbWVudCwgcGFyZW50KS5wb3AoKV1cbiAgICAgIHJldHVybiBuZXcgUG9pbnQoXG4gICAgICAgIGNvbnNpZGVyT2Zmc2V0RWxlbWVudHMucmVkdWNlKChzdW0sIHApID0+IHN1bSArIHAub2Zmc2V0TGVmdCwgMCkgKyBwYXJlbnQuY2xpZW50TGVmdCxcbiAgICAgICAgY29uc2lkZXJPZmZzZXRFbGVtZW50cy5yZWR1Y2UoKHN1bSwgcCkgPT4gc3VtICsgcC5vZmZzZXRUb3AsIDApICsgcGFyZW50LmNsaWVudFRvcFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBlbGVtZW50Qm91bmRpbmdPZmZzZXQoZWxlbWVudCwgcGFyZW50KSB7XG4gICAgcGFyZW50ID0gcGFyZW50IHx8IGVsZW1lbnQucGFyZW50Tm9kZVxuICAgIGNvbnN0IGVsZW1lbnRSZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIGNvbnN0IHBhcmVudFJlY3QgPSBwYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICByZXR1cm4gbmV3IFBvaW50KFxuICAgICAgZWxlbWVudFJlY3QubGVmdCAtIHBhcmVudFJlY3QubGVmdCxcbiAgICAgIGVsZW1lbnRSZWN0LnRvcCAtIHBhcmVudFJlY3QudG9wXG4gICAgKVxuICB9XG5cbiAgc3RhdGljIGVsZW1lbnRTaXplKGVsZW1lbnQpIHtcbiAgICBjb25zdCBlbGVtZW50UmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICByZXR1cm4gbmV3IFBvaW50KFxuICAgICAgZWxlbWVudFJlY3Qud2lkdGgsXG4gICAgICBlbGVtZW50UmVjdC5oZWlnaHRcbiAgICApXG4gIH1cbn1cbiIsImltcG9ydCBQb2ludCBmcm9tICcuL3BvaW50J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWN0YW5nbGUge1xuICBjb25zdHJ1Y3Rvcihwb3NpdGlvbiwgc2l6ZSkge1xuICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvblxuICAgIHRoaXMuc2l6ZSA9IHNpemVcbiAgfVxuXG4gIGdldFAxKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uXG4gIH1cblxuICBnZXRQMigpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54LCB0aGlzLnBvc2l0aW9uLnkpXG4gIH1cblxuICBnZXRQMygpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi5hZGQodGhpcy5zaXplKVxuICB9XG5cbiAgZ2V0UDQoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55KVxuICB9XG5cbiAgZ2V0Q2VudGVyKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLnNpemUubXVsdCgwLjUpKVxuICB9XG5cbiAgb3IocmVjdCkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gbmV3IFBvaW50KE1hdGgubWluKHRoaXMucG9zaXRpb24ueCwgcmVjdC5wb3NpdGlvbi54KSwgTWF0aC5taW4odGhpcy5wb3NpdGlvbi55LCByZWN0LnBvc2l0aW9uLnkpKVxuICAgIGNvbnN0IHNpemUgPSAobmV3IFBvaW50KE1hdGgubWF4KHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54LCByZWN0LnBvc2l0aW9uLnggKyByZWN0LnNpemUueCksIE1hdGgubWF4KHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55LCByZWN0LnBvc2l0aW9uLnkgKyByZWN0LnNpemUueSkpKS5zdWIocG9zaXRpb24pXG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUocG9zaXRpb24sIHNpemUpXG4gIH1cblxuICBhbmQocmVjdCkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gbmV3IFBvaW50KE1hdGgubWF4KHRoaXMucG9zaXRpb24ueCwgcmVjdC5wb3NpdGlvbi54KSwgTWF0aC5tYXgodGhpcy5wb3NpdGlvbi55LCByZWN0LnBvc2l0aW9uLnkpKVxuICAgIGNvbnN0IHNpemUgPSAobmV3IFBvaW50KE1hdGgubWluKHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54LCByZWN0LnBvc2l0aW9uLnggKyByZWN0LnNpemUueCksIE1hdGgubWluKHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55LCByZWN0LnBvc2l0aW9uLnkgKyByZWN0LnNpemUueSkpKS5zdWIocG9zaXRpb24pXG4gICAgaWYgKHNpemUueCA8PSAwIHx8IHNpemUueSA8PSAwKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZShwb3NpdGlvbiwgc2l6ZSlcbiAgfVxuXG4gIGluY2x1ZGVQb2ludChwKSB7XG4gICAgcmV0dXJuICEodGhpcy5wb3NpdGlvbi54ID4gcC54IHx8IHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54IDwgcC54IHx8IHRoaXMucG9zaXRpb24ueSA+IHAueSB8fCB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSA8IHAueSlcbiAgfVxuXG4gIGluY2x1ZGVSZWN0YW5nbGUocmVjdGFuZ2xlKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5jbHVkZVBvaW50KHJlY3RhbmdsZS5wb3NpdGlvbikgJiYgdGhpcy5pbmNsdWRlUG9pbnQocmVjdGFuZ2xlLmdldFAzKCkpXG4gIH1cblxuICBtb3ZlVG9Cb3VuZChyZWN0LCBheGlzKSB7XG4gICAgbGV0IHNlbEF4aXMsIGNyb3NzUmVjdGFuZ2xlXG4gICAgaWYgKGF4aXMpIHtcbiAgICAgIHNlbEF4aXMgPSBheGlzXG4gICAgfSBlbHNlIHtcbiAgICAgIGNyb3NzUmVjdGFuZ2xlID0gdGhpcy5hbmQocmVjdClcbiAgICAgIGlmICghY3Jvc3NSZWN0YW5nbGUpIHtcbiAgICAgICAgcmV0dXJuIHJlY3RcbiAgICAgIH1cbiAgICAgIHNlbEF4aXMgPSBjcm9zc1JlY3RhbmdsZS5zaXplLnggPiBjcm9zc1JlY3RhbmdsZS5zaXplLnkgPyAneScgOiAneCdcbiAgICB9XG4gICAgY29uc3QgdGhpc0NlbnRlciA9IHRoaXMuZ2V0Q2VudGVyKClcbiAgICBjb25zdCByZWN0Q2VudGVyID0gcmVjdC5nZXRDZW50ZXIoKVxuICAgIGNvbnN0IHNpZ24gPSB0aGlzQ2VudGVyW3NlbEF4aXNdID4gcmVjdENlbnRlcltzZWxBeGlzXSA/IC0xIDogMVxuICAgIGNvbnN0IG9mZnNldCA9IHNpZ24gPiAwID8gdGhpcy5wb3NpdGlvbltzZWxBeGlzXSArIHRoaXMuc2l6ZVtzZWxBeGlzXSAtIHJlY3QucG9zaXRpb25bc2VsQXhpc10gOiB0aGlzLnBvc2l0aW9uW3NlbEF4aXNdIC0gKHJlY3QucG9zaXRpb25bc2VsQXhpc10gKyByZWN0LnNpemVbc2VsQXhpc10pXG4gICAgcmVjdC5wb3NpdGlvbltzZWxBeGlzXSA9IHJlY3QucG9zaXRpb25bc2VsQXhpc10gKyBvZmZzZXRcbiAgICByZXR1cm4gcmVjdFxuICB9XG5cbiAgZ2V0U3F1YXJlKCkge1xuICAgIHJldHVybiB0aGlzLnNpemUueCAqIHRoaXMuc2l6ZS55XG4gIH1cblxuICBzdHlsZUFwcGx5KGVsKSB7XG4gICAgZWwgPSBlbCB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbmQnKVxuICAgIGVsLnN0eWxlLmxlZnQgPSB0aGlzLnBvc2l0aW9uLnggKyAncHgnXG4gICAgZWwuc3R5bGUudG9wID0gdGhpcy5wb3NpdGlvbi55ICsgJ3B4J1xuICAgIGVsLnN0eWxlLndpZHRoID0gdGhpcy5zaXplLnggKyAncHgnXG4gICAgZWwuc3R5bGUuaGVpZ2h0ID0gdGhpcy5zaXplLnkgKyAncHgnXG4gIH1cblxuICBncm93dGgoc2l6ZSkge1xuICAgIHRoaXMuc2l6ZSA9IHRoaXMuc2l6ZS5hZGQoc2l6ZSlcbiAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbi5hZGQoc2l6ZS5tdWx0KC0wLjUpKVxuICB9XG5cbiAgZ2V0TWluU2lkZSgpIHtcbiAgICByZXR1cm4gTWF0aC5taW4odGhpcy5zaXplLngsIHRoaXMuc2l6ZS55KVxuICB9XG5cbiAgc3RhdGljIGZyb21FbGVtZW50KGVsZW1lbnQsIHBhcmVudD1lbGVtZW50LnBhcmVudE5vZGUsIGlzQ29uc2lkZXJUcmFuc2xhdGU9ZmFsc2UpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IGlzQ29uc2lkZXJUcmFuc2xhdGVcbiAgICAgID8gUG9pbnQuZWxlbWVudEJvdW5kaW5nT2Zmc2V0KGVsZW1lbnQsIHBhcmVudClcbiAgICAgIDogUG9pbnQuZWxlbWVudE9mZnNldChlbGVtZW50LCBwYXJlbnQpXG4gICAgY29uc3Qgc2l6ZSA9IFBvaW50LmVsZW1lbnRTaXplKGVsZW1lbnQpXG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUocG9zaXRpb24sIHNpemUpXG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yIChvcHRpb25zID0ge30pIHtcbiAgICB0aGlzLmV2ZW50cyA9IHt9XG5cbiAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLm9uKSB7XG4gICAgICBmb3IgKGNvbnN0IFtldmVudE5hbWUsIGZuXSBvZiBPYmplY3QuZW50cmllcyhvcHRpb25zLm9uKSkge1xuICAgICAgICB0aGlzLm9uKGV2ZW50TmFtZSwgZm4pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZW1pdChldmVudE5hbWUpIHtcbiAgICB0aGlzLmludGVycnVwdGVkID0gZmFsc2VcbiAgICBjb25zdCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpXG5cbiAgICBpZiAoIXRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHJldHVyblxuXG4gICAgZm9yIChjb25zdCBmdW5jIG9mIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIGZ1bmMoLi4uYXJncylcbiAgICAgIGlmICh0aGlzLmludGVycnVwdGVkKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGludGVycnVwdCgpIHtcbiAgICB0aGlzLmludGVycnVwdGVkID0gdHJ1ZVxuICB9XG5cbiAgb24oZXZlbnROYW1lLCBmbikge1xuICAgIGlmICghdGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IFtdXG4gICAgfVxuXG4gICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5wdXNoKGZuKVxuICB9XG5cbiAgcHJlcGVuZE9uKGV2ZW50TmFtZSwgZm4pIHtcbiAgICBpZiAoIXRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSBbXVxuICAgIH1cblxuICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0udW5zaGlmdChmbilcbiAgfVxuXG4gIHVuc3Vic2NyaWJlKGV2ZW50TmFtZSwgZm4pIHtcbiAgICBpZiAodGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmV2ZW50c1tldmVudE5hbWVdLmluZGV4T2YoZm4pXG4gICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLnNwbGljZShpbmRleCwgMSlcbiAgICB9XG4gIH1cblxuICByZXNldEVtaXR0ZXIgKCkge1xuICAgIHRoaXMuZXZlbnRzID0ge31cbiAgfVxuXG4gIHJlc2V0T24oZXZlbnROYW1lKSB7XG4gICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IFtdXG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGFycmF5LCB2YWwpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChhcnJheVtpXSA9PT0gdmFsKSB7XG4gICAgICBhcnJheS5zcGxpY2UoaSwgMSlcbiAgICAgIGktLVxuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyYXlcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJhbmdlKHN0YXJ0LCBzdG9wLCBzdGVwKSB7XG4gIGNvbnN0IHJlc3VsdCA9IFtdXG4gIGlmICh0eXBlb2Ygc3RvcCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBzdG9wID0gc3RhcnRcbiAgICBzdGFydCA9IDBcbiAgfVxuICBpZiAodHlwZW9mIHN0ZXAgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgc3RlcCA9IDFcbiAgfVxuICBpZiAoKHN0ZXAgPiAwICYmIHN0YXJ0ID49IHN0b3ApIHx8IChzdGVwIDwgMCAmJiBzdGFydCA8PSBzdG9wKSkge1xuICAgIHJldHVybiBbXVxuICB9XG4gIGZvciAobGV0IGkgPSBzdGFydDsgc3RlcCA+IDAgPyBpIDwgc3RvcCA6IGkgPiBzdG9wOyBpICs9IHN0ZXApIHtcbiAgICByZXN1bHQucHVzaChpKVxuICB9XG4gIHJldHVybiByZXN1bHRcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBnZXREaXN0YW5jZShwMSwgcDIpIHtcbiAgY29uc3QgZHggPSBwMS54IC0gcDIueCwgZHkgPSBwMS55IC0gcDIueVxuICByZXR1cm4gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0WERpZmZlcmVuY2UocDEsIHAyKSB7XG4gIHJldHVybiBNYXRoLmFicyhwMS54IC0gcDIueClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFlEaWZmZXJlbmNlKHAxLCBwMikge1xuICByZXR1cm4gTWF0aC5hYnMocDEueSAtIHAyLnkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5KG9wdGlvbnMpIHtcbiAgcmV0dXJuIChwMSwgcDIpID0+IHtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KFxuICAgICAgTWF0aC5wb3cob3B0aW9ucy54ICogTWF0aC5hYnMocDEueCAtIHAyLngpLCAyKSArXG4gICAgICBNYXRoLnBvdyhvcHRpb25zLnkgKiBNYXRoLmFicyhwMS55IC0gcDIueSksIDIpXG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmRleE9mTmVhcmVzdFBvaW50KGFyciwgdmFsLCByYWRpdXMsIGdldERpc3RhbmNlRnVuYz1nZXREaXN0YW5jZSkge1xuICBsZXQgc2l6ZSwgaW5kZXggPSAwLCBpLCB0ZW1wXG4gIGlmIChhcnIubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIC0xXG4gIH1cbiAgc2l6ZSA9IGdldERpc3RhbmNlRnVuYyhhcnJbMF0sIHZhbClcbiAgZm9yIChpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgIHRlbXAgPSBnZXREaXN0YW5jZUZ1bmMoYXJyW2ldLCB2YWwpXG4gICAgaWYgKHRlbXAgPCBzaXplKSB7XG4gICAgICBzaXplID0gdGVtcFxuICAgICAgaW5kZXggPSBpXG4gICAgfVxuICB9XG4gIGlmIChyYWRpdXMgPj0gMCAmJiBzaXplID4gcmFkaXVzKSB7XG4gICAgcmV0dXJuIC0xXG4gIH1cbiAgcmV0dXJuIGluZGV4XG59XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9wb2ludCdcbmltcG9ydCB7IGdldERpc3RhbmNlIH0gZnJvbSAnLi9kaXN0YW5jZXMnXG5cbmV4cG9ydCBmdW5jdGlvbiBjbGFtcChtaW4sIG1heCwgdmFsKSB7XG4gIHJldHVybiBNYXRoLm1heChtaW4sIE1hdGgubWluKG1heCwgdmFsKSlcbn1cblxuLy9SZXR1cm4gY3Jvc3NpbmcgcG9pbnQgb2YgdHdvIGxpbmVzXG5leHBvcnQgZnVuY3Rpb24gZGlyZWN0Q3Jvc3NpbmcoTDFQMSwgTDFQMiwgTDJQMSwgTDJQMikge1xuICBsZXQgdGVtcCwgazEsIGsyLCBiMSwgYjIsIHgsIHlcbiAgaWYgKEwyUDEueCA9PT0gTDJQMi54KSB7XG4gICAgdGVtcCA9IEwyUDFcbiAgICBMMlAxID0gTDFQMVxuICAgIEwxUDEgPSB0ZW1wXG4gICAgdGVtcCA9IEwyUDJcbiAgICBMMlAyID0gTDFQMlxuICAgIEwxUDIgPSB0ZW1wXG4gIH1cbiAgaWYgKEwxUDEueCA9PT0gTDFQMi54KSB7XG4gICAgazIgPSAoTDJQMi55IC0gTDJQMS55KSAvIChMMlAyLnggLSBMMlAxLngpXG4gICAgYjIgPSAoTDJQMi54ICogTDJQMS55IC0gTDJQMS54ICogTDJQMi55KSAvIChMMlAyLnggLSBMMlAxLngpXG4gICAgeCA9IEwxUDEueFxuICAgIHkgPSB4ICogazIgKyBiMlxuICAgIHJldHVybiBuZXcgUG9pbnQoeCwgeSlcbiAgfSBlbHNlIHtcbiAgICBrMSA9IChMMVAyLnkgLSBMMVAxLnkpIC8gKEwxUDIueCAtIEwxUDEueClcbiAgICBiMSA9IChMMVAyLnggKiBMMVAxLnkgLSBMMVAxLnggKiBMMVAyLnkpIC8gKEwxUDIueCAtIEwxUDEueClcbiAgICBrMiA9IChMMlAyLnkgLSBMMlAxLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICBiMiA9IChMMlAyLnggKiBMMlAxLnkgLSBMMlAxLnggKiBMMlAyLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICB4ID0gKGIxIC0gYjIpIC8gKGsyIC0gazEpXG4gICAgeSA9IHggKiBrMSArIGIxXG4gICAgcmV0dXJuIG5ldyBQb2ludCh4LCB5KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZFRvU2VnbWVudChMUDEsIExQMiwgUCkge1xuICBsZXQgeCwgeVxuICB4ID0gY2xhbXAoTWF0aC5taW4oTFAxLngsIExQMi54KSwgTWF0aC5tYXgoTFAxLngsIExQMi54KSwgUC54KVxuICBpZiAoeCAhPT0gUC54KSB7XG4gICAgeSA9ICh4ID09PSBMUDEueCkgPyBMUDEueSA6IExQMi55XG4gICAgUCA9IG5ldyBQb2ludCh4LCB5KVxuICB9XG5cbiAgeSA9IGNsYW1wKE1hdGgubWluKExQMS55LCBMUDIueSksIE1hdGgubWF4KExQMS55LCBMUDIueSksIFAueSlcbiAgaWYgKHkgIT09IFAueSkge1xuICAgIHggPSAoeSA9PT0gTFAxLnkpID8gTFAxLnggOiBMUDIueFxuICAgIFAgPSBuZXcgUG9pbnQoeCwgeSlcbiAgfVxuXG4gIHJldHVybiBQXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZFRvTGluZShBLCBCLCBQKSB7XG4gIGNvbnN0IEFQID0gbmV3IFBvaW50KFAueCAtIEEueCwgUC55IC0gQS55KSxcbiAgICBBQiA9IG5ldyBQb2ludChCLnggLSBBLngsIEIueSAtIEEueSksXG4gICAgYWIyID0gQUIueCAqIEFCLnggKyBBQi55ICogQUIueSxcbiAgICBhcF9hYiA9IEFQLnggKiBBQi54ICsgQVAueSAqIEFCLnksXG4gICAgdCA9IGFwX2FiIC8gYWIyXG4gIHJldHVybiBuZXcgUG9pbnQoQS54ICsgQUIueCAqIHQsIEEueSArIEFCLnkgKiB0KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9pbnRPbkxpbmUoTFAxLCBMUDIsIHBlcmNlbnQpIHtcbiAgY29uc3QgZHggPSBMUDIueCAtIExQMS54LCBkeSA9IExQMi55IC0gTFAxLnlcbiAgcmV0dXJuIG5ldyBQb2ludChMUDEueCArIHBlcmNlbnQgKiBkeCwgTFAxLnkgKyBwZXJjZW50ICogZHkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb2ludE9uTGluZUJ5TGVuZ2h0KExQMSwgTFAyLCBsZW5naHQpIHtcbiAgY29uc3QgZHggPSBMUDIueCAtIExQMS54XG4gIGNvbnN0IGR5ID0gTFAyLnkgLSBMUDEueVxuICBjb25zdCBwZXJjZW50ID0gbGVuZ2h0IC8gZ2V0RGlzdGFuY2UoTFAxLCBMUDIpXG4gIHJldHVybiBuZXcgUG9pbnQoTFAxLnggKyBwZXJjZW50ICogZHgsIExQMS55ICsgcGVyY2VudCAqIGR5KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkUG9pbnRUb0JvdW5kUG9pbnRzKGJvdW5kcG9pbnRzLCBwb2ludCwgaXNSaWdodCkge1xuICBjb25zdCByZXN1bHQgPSBib3VuZHBvaW50cy5maWx0ZXIoKGJQb2ludCkgPT4ge1xuICAgIHJldHVybiBiUG9pbnQueSA+IHBvaW50LnkgfHwgKGlzUmlnaHQgPyBiUG9pbnQueCA8IHBvaW50LnggOiBiUG9pbnQueCA+IHBvaW50LngpXG4gIH0pXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHQubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAocG9pbnQueSA8IHJlc3VsdFtpXS55KSB7XG4gICAgICByZXN1bHQuc3BsaWNlKGksIDAsIHBvaW50KVxuICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbiAgfVxuICByZXN1bHQucHVzaChwb2ludClcbiAgcmV0dXJuIHJlc3VsdFxufVxuIiwiaW1wb3J0IFBvaW50IGZyb20gJy4vZ2VvbWV0cnkvcG9pbnQnXG5pbXBvcnQgeyBhZGRQb2ludFRvQm91bmRQb2ludHMgfSBmcm9tICcuL2dlb21ldHJ5L2JvdW5kcydcblxuaW1wb3J0IHtcbiAgaW5kZXhPZk5lYXJlc3RQb2ludCxcbiAgZ2V0RGlzdGFuY2Vcbn0gZnJvbSAnLi9nZW9tZXRyeS9kaXN0YW5jZXMnXG5cbmNsYXNzIEJhc2ljU3RyYXRlZ3kge1xuICBjb25zdHJ1Y3RvcihyZWN0YW5nbGUsIG9wdGlvbnM9e30pIHtcbiAgICB0aGlzLnJlY3RhbmdsZSA9IHJlY3RhbmdsZVxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNcbiAgfVxuXG4gIGdldCBib3VuZFJlY3QgKCkge1xuICAgIHJldHVybiB0eXBlb2YgdGhpcy5yZWN0YW5nbGUgPT09ICdmdW5jdGlvbicgPyB0aGlzLnJlY3RhbmdsZSgpIDogdGhpcy5yZWN0YW5nbGVcbiAgfVxufVxuXG5jbGFzcyBOb3RDcm9zc2luZ1N0cmF0ZWd5IGV4dGVuZHMgQmFzaWNTdHJhdGVneSB7XG4gIHBvc2l0aW9uaW5nIChyZWN0YW5nbGVMaXN0LCBpbmRleGVzT2ZOZXdzKSB7XG4gICAgY29uc3Qgc3RhdGljUmVjdGFuZ2xlSW5kZXhlcyA9IHJlY3RhbmdsZUxpc3QucmVkdWNlKChpbmRleGVzLCBfcmVjdCwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChpbmRleGVzT2ZOZXdzLmluZGV4T2YoaW5kZXgpID09PSAtMSkge1xuICAgICAgICBpbmRleGVzLnB1c2goaW5kZXgpXG4gICAgICB9XG4gICAgICByZXR1cm4gaW5kZXhlc1xuICAgIH0sIFtdKVxuXG4gICAgaW5kZXhlc09mTmV3cy5mb3JFYWNoKChpbmRleCkgPT4ge1xuICAgICAgbGV0IHJlY3QgPSByZWN0YW5nbGVMaXN0W2luZGV4XVxuICAgICAgbGV0IHJlbW92YWJsZSA9IGZhbHNlXG5cbiAgICAgIHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMuZm9yRWFjaCgoaW5kZXhPZlN0YXRpYykgPT4ge1xuICAgICAgICBjb25zdCBzdGF0aWNSZWN0ID0gcmVjdGFuZ2xlTGlzdFtpbmRleE9mU3RhdGljXVxuICAgICAgICByZWN0ID0gc3RhdGljUmVjdC5tb3ZlVG9Cb3VuZChyZWN0KVxuICAgICAgfSlcblxuICAgICAgcmVtb3ZhYmxlID0gc3RhdGljUmVjdGFuZ2xlSW5kZXhlcy5zb21lKChpbmRleE9mU3RhdGljKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YXRpY1JlY3QgPSByZWN0YW5nbGVMaXN0W2luZGV4T2ZTdGF0aWNdXG4gICAgICAgIHJldHVybiAgISFzdGF0aWNSZWN0LmFuZChyZWN0KVxuICAgICAgfSkgfHwgcmVjdC5hbmQodGhpcy5ib3VuZFJlY3QpLmdldFNxdWFyZSgpICE9PSByZWN0LmdldFNxdWFyZSgpXG5cbiAgICAgIGlmIChyZW1vdmFibGUpIHtcbiAgICAgICAgcmVjdC5yZW1vdmFibGUgPSB0cnVlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0aWNSZWN0YW5nbGVJbmRleGVzLnB1c2goaW5kZXgpXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcmVjdGFuZ2xlTGlzdFxuICB9XG5cbiAgc29ydGluZyhvZGxEcmFnZ2FibGVzTGlzdCwgbmV3RHJhZ2dhYmxlcywgaW5kZXhPZk5ld3MpIHtcbiAgICBjb25zdCBkcmFnZ2FibGVzID0gb2RsRHJhZ2dhYmxlc0xpc3QuY29uY2F0KG5ld0RyYWdnYWJsZXMpXG4gICAgbmV3RHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGluZGV4T2ZOZXdzLnB1c2goZHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkpXG4gICAgfSlcbiAgICByZXR1cm4gZHJhZ2dhYmxlc1xuICB9XG59XG5cbmNsYXNzIEZsb2F0TGVmdFN0cmF0ZWd5IGV4dGVuZHMgQmFzaWNTdHJhdGVneSB7XG4gIGNvbnN0cnVjdG9yKHJlY3RhbmdsZSwgb3B0aW9ucz17fSkge1xuICAgIHN1cGVyKHJlY3RhbmdsZSwgb3B0aW9ucylcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHJlbW92YWJsZTogdHJ1ZVxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0aGlzLnJhZGl1cyA9IG9wdGlvbnMucmFkaXVzIHx8IDgwXG5cbiAgICB0aGlzLnBhZGRpbmdUb3BMZWZ0ID0gb3B0aW9ucy5wYWRkaW5nVG9wTGVmdCB8fCBuZXcgUG9pbnQoMCwgMClcbiAgICB0aGlzLnBhZGRpbmdCb3R0b21SaWdodCA9IG9wdGlvbnMucGFkZGluZ0JvdHRvbVJpZ2h0IHx8IG5ldyBQb2ludCgwLCAwKVxuICAgIHRoaXMueUdhcEJldHdlZW5EcmFnZ2FibGVzID0gb3B0aW9ucy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgfHwgMFxuXG4gICAgdGhpcy5nZXREaXN0YW5jZSA9IG9wdGlvbnMuZ2V0RGlzdGFuY2UgfHwgZ2V0RGlzdGFuY2VcbiAgICB0aGlzLmdldFBvc2l0aW9uID0gb3B0aW9ucy5nZXRQb3NpdGlvbiB8fCAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnBvc2l0aW9uKVxuICB9XG5cbiAgcG9zaXRpb25pbmcocmVjdGFuZ2xlTGlzdCwgX2luZGV4ZXNPZk5ld3MpIHtcbiAgICBjb25zdCBib3VuZFJlY3QgPSB0aGlzLmJvdW5kUmVjdFxuICAgIGNvbnN0IHJlY3RQMiA9IGJvdW5kUmVjdC5nZXRQMigpXG4gICAgbGV0IGJvdW5kYXJ5UG9pbnRzID0gW2JvdW5kUmVjdC5wb3NpdGlvbl1cblxuICAgIHJlY3RhbmdsZUxpc3QuZm9yRWFjaCgocmVjdCwgcmVjdEluZGV4KSA9PiB7XG4gICAgICBsZXQgcG9zaXRpb24sIGlzVmFsaWQgPSBmYWxzZVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib3VuZGFyeVBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBwb3NpdGlvbiA9IG5ldyBQb2ludChcbiAgICAgICAgICBib3VuZGFyeVBvaW50c1tpXS54ICsgdGhpcy5wYWRkaW5nVG9wTGVmdC54LFxuICAgICAgICAgIGkgPiAwID8gKGJvdW5kYXJ5UG9pbnRzW2kgLSAxXS55ICsgdGhpcy55R2FwQmV0d2VlbkRyYWdnYWJsZXMpIDogKGJvdW5kUmVjdC5wb3NpdGlvbi55ICsgdGhpcy5wYWRkaW5nVG9wTGVmdC55KVxuICAgICAgICApXG5cbiAgICAgICAgaXNWYWxpZCA9IChwb3NpdGlvbi54ICsgcmVjdC5zaXplLnggPCByZWN0UDIueClcblxuICAgICAgICBpZiAoaXNWYWxpZCkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICAgIHBvc2l0aW9uID0gbmV3IFBvaW50KFxuICAgICAgICAgIGJvdW5kUmVjdC5wb3NpdGlvbi54ICsgdGhpcy5wYWRkaW5nVG9wTGVmdC54LFxuICAgICAgICAgIGJvdW5kYXJ5UG9pbnRzW2JvdW5kYXJ5UG9pbnRzLmxlbmd0aCAtIDFdLnkgKyAocmVjdEluZGV4ID4gMCA/IHRoaXMueUdhcEJldHdlZW5EcmFnZ2FibGVzIDogdGhpcy5wYWRkaW5nVG9wTGVmdC55KVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHJlY3QucG9zaXRpb24gPSBwb3NpdGlvblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZW1vdmFibGUgJiYgcmVjdC5nZXRQMygpLnkgPiBib3VuZFJlY3QuZ2V0UDMoKS55KSB7XG4gICAgICAgIHJlY3QucmVtb3ZhYmxlID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBib3VuZGFyeVBvaW50cyA9IGFkZFBvaW50VG9Cb3VuZFBvaW50cyhib3VuZGFyeVBvaW50cywgcmVjdC5nZXRQMygpLmFkZCh0aGlzLnBhZGRpbmdCb3R0b21SaWdodCkpXG4gICAgfSlcbiAgICByZXR1cm4gcmVjdGFuZ2xlTGlzdFxuICB9XG5cbiAgc29ydGluZyhvZGxEcmFnZ2FibGVzTGlzdCwgbmV3RHJhZ2dhYmxlcywgaW5kZXhPZk5ld3MpIHtcbiAgICBjb25zdCBuZXdMaXN0ID0gb2RsRHJhZ2dhYmxlc0xpc3QuY29uY2F0KClcbiAgICBjb25zdCBsaXN0T2xkUG9zaXRpb24gPSBvZGxEcmFnZ2FibGVzTGlzdC5tYXAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLmdldFBvc2l0aW9uKCkpXG4gICAgbmV3RHJhZ2dhYmxlcy5mb3JFYWNoKChuZXdEcmFnZ2FibGUpID0+IHtcbiAgICAgIGxldCBpbmRleCA9IGluZGV4T2ZOZWFyZXN0UG9pbnQobGlzdE9sZFBvc2l0aW9uLCB0aGlzLmdldFBvc2l0aW9uKG5ld0RyYWdnYWJsZSksIHRoaXMucmFkaXVzLCB0aGlzLmdldERpc3RhbmNlKVxuICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICBpbmRleCA9IG5ld0xpc3QubGVuZ3RoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbmRleCA9IG5ld0xpc3QuaW5kZXhPZihvZGxEcmFnZ2FibGVzTGlzdFtpbmRleF0pXG4gICAgICB9XG4gICAgICBuZXdMaXN0LnNwbGljZShpbmRleCwgMCwgbmV3RHJhZ2dhYmxlKVxuICAgIH0pXG4gICAgbmV3RHJhZ2dhYmxlcy5mb3JFYWNoKChuZXdEcmFnZ2FibGUpID0+IHtcbiAgICAgIGluZGV4T2ZOZXdzLnB1c2gobmV3TGlzdC5pbmRleE9mKG5ld0RyYWdnYWJsZSkpXG4gICAgfSlcbiAgICByZXR1cm4gbmV3TGlzdFxuICB9XG59XG5cbmNsYXNzIEZsb2F0UmlnaHRTdHJhdGVneSBleHRlbmRzIEZsb2F0TGVmdFN0cmF0ZWd5IHtcbiAgY29uc3RydWN0b3IocmVjdGFuZ2xlLCBvcHRpb25zPXt9KSB7XG4gICAgc3VwZXIocmVjdGFuZ2xlLCBvcHRpb25zKVxuXG4gICAgdGhpcy5wYWRkaW5nVG9wUmlnaHQgPSBvcHRpb25zLnBhZGRpbmdUb3BSaWdodCB8fCBuZXcgUG9pbnQoNSwgNSlcbiAgICB0aGlzLnBhZGRpbmdCb3R0b21MZWZ0ID0gb3B0aW9ucy5wYWRkaW5nQm90dG9tTGVmdCB8fCBuZXcgUG9pbnQoMCwgMClcbiAgICB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyA9IG9wdGlvbnMueUdhcEJldHdlZW5EcmFnZ2FibGVzIHx8IDBcblxuICAgIHRoaXMucGFkZGluZ0JvdHRvbU5lZ0xlZnQgPSBuZXcgUG9pbnQoLXRoaXMucGFkZGluZ0JvdHRvbUxlZnQueCwgdGhpcy5wYWRkaW5nQm90dG9tTGVmdC55KVxuICB9XG5cbiAgcG9zaXRpb25pbmcocmVjdGFuZ2xlTGlzdCwgX2luZGV4ZXNPZk5ld3MpIHtcbiAgICBjb25zdCBib3VuZFJlY3QgPSB0aGlzLmJvdW5kUmVjdFxuICAgIGxldCBib3VuZGFyeVBvaW50cyA9IFtib3VuZFJlY3QuZ2V0UDIoKV1cblxuICAgIHJlY3RhbmdsZUxpc3QuZm9yRWFjaCgocmVjdCwgcmVjdEluZGV4KSA9PiB7XG4gICAgICBsZXQgcG9zaXRpb24sIGlzVmFsaWQgPSBmYWxzZVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib3VuZGFyeVBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBwb3NpdGlvbiA9IG5ldyBQb2ludChcbiAgICAgICAgICBib3VuZGFyeVBvaW50c1tpXS54IC0gcmVjdC5zaXplLnggLSB0aGlzLnBhZGRpbmdUb3BSaWdodC54LFxuICAgICAgICAgIGkgPiAwID8gKGJvdW5kYXJ5UG9pbnRzW2kgLSAxXS55ICsgdGhpcy55R2FwQmV0d2VlbkRyYWdnYWJsZXMpIDogKGJvdW5kUmVjdC5wb3NpdGlvbi55ICsgdGhpcy5wYWRkaW5nVG9wUmlnaHQueSlcbiAgICAgICAgKVxuXG4gICAgICAgIGlzVmFsaWQgPSAocG9zaXRpb24ueCA+IHJlY3QucG9zaXRpb24ueClcbiAgICAgICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgcG9zaXRpb24gPSBuZXcgUG9pbnQoXG4gICAgICAgICAgYm91bmRSZWN0LmdldFAyKCkueCAgLSByZWN0LnNpemUueCAtIHRoaXMucGFkZGluZ1RvcFJpZ2h0LngsXG4gICAgICAgICAgYm91bmRhcnlQb2ludHNbYm91bmRhcnlQb2ludHMubGVuZ3RoIC0gMV0ueSArIChyZWN0SW5kZXggPiAwID8gdGhpcy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgOiB0aGlzLnBhZGRpbmdUb3BSaWdodC55KVxuICAgICAgICApXG4gICAgICB9XG4gICAgICByZWN0LnBvc2l0aW9uID0gcG9zaXRpb25cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucmVtb3ZhYmxlICYmIHJlY3QuZ2V0UDQoKS55ID4gYm91bmRSZWN0LmdldFA0KCkueSkge1xuICAgICAgICByZWN0LnJlbW92YWJsZSA9IHRydWVcbiAgICAgIH1cbiAgICAgIGJvdW5kYXJ5UG9pbnRzID0gYWRkUG9pbnRUb0JvdW5kUG9pbnRzKGJvdW5kYXJ5UG9pbnRzLCByZWN0LmdldFA0KCkuYWRkKHRoaXMucGFkZGluZ0JvdHRvbU5lZ0xlZnQpLCB0cnVlKVxuICAgIH0pXG4gICAgcmV0dXJuIHJlY3RhbmdsZUxpc3RcbiAgfVxufVxuXG5leHBvcnQgeyBOb3RDcm9zc2luZ1N0cmF0ZWd5LCBGbG9hdExlZnRTdHJhdGVneSwgRmxvYXRSaWdodFN0cmF0ZWd5IH1cbiIsImltcG9ydCBQb2ludCBmcm9tICcuL3BvaW50J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QW5nbGVEaWZmKGFscGhhLCBiZXRhKSB7XG4gIGNvbnN0IG1pbkFuZ2xlID0gTWF0aC5taW4oYWxwaGEsIGJldGEpXG4gIGNvbnN0IG1heEFuZ2xlID0gIE1hdGgubWF4KGFscGhhLCBiZXRhKVxuICByZXR1cm4gTWF0aC5taW4obWF4QW5nbGUgLSBtaW5BbmdsZSwgbWluQW5nbGUgKyBNYXRoLlBJKjIgLSBtYXhBbmdsZSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFuZ2xlKHAxLCBwMikge1xuICBjb25zdCBkaWZmID0gcDIuc3ViKHAxKVxuICByZXR1cm4gbm9ybWFsaXplQW5nbGUoTWF0aC5hdGFuMihkaWZmLnksIGRpZmYueCkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b1JhZGlhbihhbmdsZSkge1xuICByZXR1cm4gKChhbmdsZSAlIDM2MCkgKiBNYXRoLlBJIC8gMTgwKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9EZWdyZWUoYW5nbGUpIHtcbiAgcmV0dXJuIChhbmdsZSAqIDE4MCAvIE1hdGguUEkpICUgMzYwXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZEFuZ2xlKG1pbiwgbWF4LCB2YWwpIHtcbiAgbGV0IGRtaW4sIGRtYXhcbiAgaWYgKG1pbiA8IG1heCAmJiB2YWwgPiBtaW4gJiYgdmFsIDwgbWF4KSB7XG4gICAgcmV0dXJuIHZhbFxuICB9IGVsc2UgaWYgKG1heCA8IG1pbiAmJiAodmFsIDwgbWF4IHx8IHZhbCA+IG1pbikpIHtcbiAgICByZXR1cm4gdmFsXG4gIH0gZWxzZSB7XG4gICAgZG1pbiA9IGdldEFuZ2xlRGlmZihtaW4sIHZhbClcbiAgICBkbWF4ID0gZ2V0QW5nbGVEaWZmKG1heCwgdmFsKVxuICAgIGlmIChkbWluIDwgZG1heCkge1xuICAgICAgcmV0dXJuIG1pblxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbWF4XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROZWFyZXN0QW5nbGUoYXJyLCBhbmdsZSkge1xuICBsZXQgaSwgdGVtcCwgZGlmZiA9IE1hdGguUEkgKiAyLCB2YWx1ZVxuICBmb3IgKGkgPSAwOyBpIDwgYXJyLmxlbmd0aDtpKyspIHtcbiAgICB0ZW1wID0gZ2V0QW5nbGVEaWZmKGFycltpXSwgYW5nbGUpXG4gICAgaWYgKGRpZmYgPCB0ZW1wKSB7XG4gICAgICBkaWZmID0gdGVtcFxuICAgICAgdmFsdWUgPSBhcnJbaV1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHZhbHVlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVBbmdsZSh2YWwpIHtcbiAgd2hpbGUgKHZhbCA8IDApIHtcbiAgICB2YWwgKz0gMiAqIE1hdGguUElcbiAgfVxuICB3aGlsZSAodmFsID4gMiAqIE1hdGguUEkpIHtcbiAgICB2YWwgLT0gMiAqIE1hdGguUElcbiAgfVxuICByZXR1cm4gdmFsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oYW5nbGUsIGxlbmd0aCwgY2VudGVyKSB7XG4gIGNlbnRlciA9IGNlbnRlciB8fCBuZXcgUG9pbnQoMCwgMClcbiAgcmV0dXJuIGNlbnRlci5hZGQobmV3IFBvaW50KGxlbmd0aCAqIE1hdGguY29zKGFuZ2xlKSwgbGVuZ3RoICogTWF0aC5zaW4oYW5nbGUpKSlcbn1cbiIsImltcG9ydCBQb2ludCBmcm9tICcuL2dlb21ldHJ5L3BvaW50J1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tICcuL2dlb21ldHJ5L3JlY3RhbmdsZSdcbmltcG9ydCB7XG4gIGdldFBvaW50T25MaW5lQnlMZW5naHQsXG4gIGRpcmVjdENyb3NzaW5nLFxuICBib3VuZFRvTGluZVxufSBmcm9tICcuL2dlb21ldHJ5L2JvdW5kcydcblxuaW1wb3J0IHtcbiAgZ2V0QW5nbGUsXG4gIG5vcm1hbGl6ZUFuZ2xlLFxuICBib3VuZEFuZ2xlLFxuICBnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW1cbn0gZnJvbSAnLi9nZW9tZXRyeS9hbmdsZXMnXG5cbmV4cG9ydCBjbGFzcyBCb3VuZCB7XG4gIGNvbnN0cnVjdG9yICgpIHt9XG5cbiAgYm91bmQocG9pbnQsIF9zaXplKSB7XG4gICAgcmV0dXJuIHBvaW50XG4gIH1cblxuICByZWZyZXNoICgpIHt9XG5cbiAgc3RhdGljIGJvdW5kaW5nKCkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IHRoaXMoLi4uYXJndW1lbnRzKVxuICAgIHJldHVybiBpbnN0YW5jZS5ib3VuZC5iaW5kKGluc3RhbmNlKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvUmVjdGFuZ2xlIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3RvcihyZWN0YW5nbGUpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5yZWN0YW5nbGUgPSByZWN0YW5nbGVcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgY2FsY1BvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIGNvbnN0IHJlY3RQMiA9IHRoaXMucmVjdGFuZ2xlLmdldFAzKClcblxuICAgIGlmICh0aGlzLnJlY3RhbmdsZS5wb3NpdGlvbi54ID4gY2FsY1BvaW50LngpIHtcbiAgICAgIChjYWxjUG9pbnQueCA9IHRoaXMucmVjdGFuZ2xlLnBvc2l0aW9uLngpXG4gICAgfVxuICAgIGlmICh0aGlzLnJlY3RhbmdsZS5wb3NpdGlvbi55ID4gY2FsY1BvaW50LnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gdGhpcy5yZWN0YW5nbGUucG9zaXRpb24ueVxuICAgIH1cbiAgICBpZiAocmVjdFAyLnggPCBjYWxjUG9pbnQueCArIHNpemUueCkge1xuICAgICAgY2FsY1BvaW50LnggPSByZWN0UDIueCAtIHNpemUueFxuICAgIH1cbiAgICBpZiAocmVjdFAyLnkgPCBjYWxjUG9pbnQueSArIHNpemUueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSByZWN0UDIueSAtIHNpemUueVxuICAgIH1cblxuICAgIHJldHVybiBjYWxjUG9pbnRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb0VsZW1lbnQgZXh0ZW5kcyBCb3VuZFRvUmVjdGFuZ2xlIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29udGFpbmVyKSB7XG4gICAgc3VwZXIoUmVjdGFuZ2xlLmZyb21FbGVtZW50KGVsZW1lbnQsIGNvbnRhaW5lcikpXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyXG4gIH1cblxuICByZWZyZXNoICgpIHtcbiAgICB0aGlzLnJlY3RhbmdsZSA9IFJlY3RhbmdsZS5mcm9tRWxlbWVudCh0aGlzLmVsZW1lbnQsIHRoaXMuY29udGFpbmVyKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvTGluZVggZXh0ZW5kcyBCb3VuZCB7XG4gIGNvbnN0cnVjdG9yKHgsIHN0YXJ0WSwgZW5kWSkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnggPSB4XG4gICAgdGhpcy5zdGFydFkgPSBzdGFydFlcbiAgICB0aGlzLmVuZFkgPSBlbmRZXG4gIH1cblxuICBib3VuZChwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IGNhbGNQb2ludCA9IHBvaW50LmNsb25lKClcblxuICAgIGNhbGNQb2ludC54ID0gdGhpcy54XG4gICAgaWYgKHRoaXMuc3RhcnRZID4gY2FsY1BvaW50LnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gdGhpcy5zdGFydFlcbiAgICB9XG4gICAgaWYgKHRoaXMuZW5kWSA8IGNhbGNQb2ludC55ICsgc2l6ZS55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHRoaXMuZW5kWSAtIHNpemUueVxuICAgIH1cblxuICAgIHJldHVybiBjYWxjUG9pbnRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb0xpbmVZIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3Rvcih5LCBzdGFydFgsIGVuZFgpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy55ID0geVxuICAgIHRoaXMuc3RhcnRYID0gc3RhcnRYXG4gICAgdGhpcy5lbmRYID0gZW5kWFxuICB9XG5cbiAgYm91bmQocG9pbnQsIHNpemUpIHtcbiAgICBjb25zdCBjYWxjUG9pbnQgPSBwb2ludC5jbG9uZSgpXG4gICAgY2FsY1BvaW50LnkgPSB0aGlzLnlcbiAgICBpZiAodGhpcy5zdGFydFggPiBjYWxjUG9pbnQueCkge1xuICAgICAgY2FsY1BvaW50LnggPSB0aGlzLnN0YXJ0WFxuICAgIH1cbiAgICBpZiAodGhpcy5lbmRYIDwgY2FsY1BvaW50LnggKyBzaXplLngpIHtcbiAgICAgIGNhbGNQb2ludC54ID0gdGhpcy5lbmRYIC0gc2l6ZS54XG4gICAgfVxuICAgIHJldHVybiBjYWxjUG9pbnRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb0xpbmUgZXh0ZW5kcyBCb3VuZCB7XG4gIGNvbnN0cnVjdG9yKHN0YXJ0UG9pbnQsIGVuZFBvaW50KSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuc3RhcnRQb2ludCA9IHN0YXJ0UG9pbnRcbiAgICB0aGlzLmVuZFBvaW50ID0gZW5kUG9pbnRcbiAgICBjb25zdCBhbHBoYSA9IE1hdGguYXRhbjIoZW5kUG9pbnQueSAtIHN0YXJ0UG9pbnQueSwgZW5kUG9pbnQueCAtIHN0YXJ0UG9pbnQueClcbiAgICBjb25zdCBiZXRhID0gYWxwaGEgKyBNYXRoLlBJIC8gMlxuICAgIHRoaXMuc29tZUsgPSAxMFxuICAgIHRoaXMuY29zQmV0YSA9IE1hdGguY29zKGJldGEpXG4gICAgdGhpcy5zaW5CZXRhID0gTWF0aC5zaW4oYmV0YSlcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgcG9pbnQyID0gbmV3IFBvaW50KFxuICAgICAgcG9pbnQueCArIHRoaXMuc29tZUsgKiB0aGlzLmNvc0JldGEsXG4gICAgICBwb2ludC55ICsgdGhpcy5zb21lSyAqIHRoaXMuc2luQmV0YVxuICAgIClcblxuICAgIGNvbnN0IG5ld0VuZFBvaW50ID0gZ2V0UG9pbnRPbkxpbmVCeUxlbmdodCh0aGlzLmVuZFBvaW50LCB0aGlzLnN0YXJ0UG9pbnQsIHNpemUueClcbiAgICBjb25zdCBwb2ludENyb3NzaW5nID0gZGlyZWN0Q3Jvc3NpbmcodGhpcy5zdGFydFBvaW50LCB0aGlzLmVuZFBvaW50LCBwb2ludCwgcG9pbnQyKVxuXG4gICAgcmV0dXJuIGJvdW5kVG9MaW5lKHRoaXMuc3RhcnRQb2ludCwgbmV3RW5kUG9pbnQsIHBvaW50Q3Jvc3NpbmcpXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9DaXJjbGUgZXh0ZW5kcyBCb3VuZCB7XG4gIGNvbnN0cnVjdG9yKGNlbnRlciwgcmFkaXVzKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuY2VudGVyID0gY2VudGVyXG4gICAgdGhpcy5yYWRpdXMgPSByYWRpdXNcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBfc2l6ZSkge1xuICAgIHJldHVybiBnZXRQb2ludE9uTGluZUJ5TGVuZ2h0KHRoaXMuY2VudGVyLCBwb2ludCwgdGhpcy5yYWRpdXMpXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9BcmMgZXh0ZW5kcyBCb3VuZFRvQ2lyY2xlIHtcbiAgY29uc3RydWN0b3IoY2VudGVyLCByYWRpdXMsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlKSB7XG4gICAgc3VwZXIoY2VudGVyLCByYWRpdXMpXG4gICAgdGhpcy5fc3RhcnRBbmdsZSA9IHN0YXJ0QW5nbGVcbiAgICB0aGlzLl9lbmRBbmdsZSA9IGVuZEFuZ2xlXG4gIH1cblxuICBzdGFydEFuZ2xlKCkge1xuICAgIHJldHVybiB0eXBlb2YgdGhpcy5fc3RhcnRBbmdsZSA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMuX3N0YXJ0QW5nbGUoKSA6IHRoaXMuX3N0YXJ0QW5nbGVcbiAgfVxuXG4gIGVuZEFuZ2xlKCkge1xuICAgIHJldHVybiB0eXBlb2YgdGhpcy5fZW5kQW5nbGUgPT09ICdmdW5jdGlvbicgPyB0aGlzLl9lbmRBbmdsZSgpIDogdGhpcy5fZW5kQW5nbGVcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBfc2l6ZSkge1xuICAgIGxldCBhbmdsZSA9IGdldEFuZ2xlKHRoaXMuY2VudGVyLCBwb2ludClcbiAgICBhbmdsZSA9IG5vcm1hbGl6ZUFuZ2xlKGFuZ2xlKVxuICAgIGFuZ2xlID0gYm91bmRBbmdsZSh0aGlzLnN0YXJ0QW5nbGUoKSwgdGhpcy5lbmRBbmdsZSgpLCBhbmdsZSlcbiAgICByZXR1cm4gZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKGFuZ2xlLCB0aGlzLnJhZGl1cywgdGhpcy5jZW50ZXIpXG4gIH1cbn1cbiIsImltcG9ydCByYW5nZSBmcm9tICcuL3V0aWxzL3JhbmdlLmpzJ1xuaW1wb3J0IHJlbW92ZUl0ZW0gZnJvbSAnLi91dGlscy9yZW1vdmUtYXJyYXktaXRlbSdcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudEVtaXR0ZXInXG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gJy4vZ2VvbWV0cnkvcmVjdGFuZ2xlJ1xuaW1wb3J0IHsgdHJhbnNmb3JtZWRTcGFjZURpc3RhbmNlRmFjdG9yeSB9IGZyb20gJy4vZ2VvbWV0cnkvZGlzdGFuY2VzJ1xuaW1wb3J0IHsgc2NvcGVzLCBkZWZhdWx0U2NvcGUgfSBmcm9tICcuL3Njb3BlJ1xuXG5pbXBvcnQgeyBGbG9hdExlZnRTdHJhdGVneSB9IGZyb20gJy4vcG9zaXRpb25pbmcnXG5pbXBvcnQgeyBCb3VuZFRvRWxlbWVudCB9IGZyb20gJy4vYm91bmRpbmcnXG5cbmNvbnN0IGFkZFRvRGVmYXVsdFNjb3BlID0gZnVuY3Rpb24odGFyZ2V0KSB7XG4gIGRlZmF1bHRTY29wZS5hZGRUYXJnZXQodGFyZ2V0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXJnZXQgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBkcmFnZ2FibGVzLCBvcHRpb25zID0ge30pIHtcbiAgICBzdXBlcihvcHRpb25zKVxuICAgIGNvbnN0IHRhcmdldCA9IHRoaXNcblxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgdGltZUVuZDogMjAwLFxuICAgICAgdGltZUV4Y2FuZ2U6IDQwMFxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0aGlzLnBvc2l0aW9uaW5nU3RyYXRlZ3kgPSBvcHRpb25zLnN0cmF0ZWd5IHx8IG5ldyBGbG9hdExlZnRTdHJhdGVneShcbiAgICAgIHRoaXMuZ2V0UmVjdGFuZ2xlLmJpbmQodGhpcyksXG4gICAgICB7XG4gICAgICAgIHJhZGl1czogODAsXG4gICAgICAgIGdldERpc3RhbmNlOiB0cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5KHsgeDogMSwgeTogNCB9KSxcbiAgICAgICAgcmVtb3ZhYmxlOiB0cnVlXG4gICAgICB9XG4gICAgKVxuXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUudGFyZ2V0cy5wdXNoKHRhcmdldCkpXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gZHJhZ2dhYmxlc1xuXG4gICAgVGFyZ2V0LmVtaXR0ZXIuZW1pdCgndGFyZ2V0OmNyZWF0ZScsIHRoaXMpXG5cbiAgICB0aGlzLnN0YXJ0Qm91bmRpbmcoKVxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBzdGFydEJvdW5kaW5nKCkge1xuICAgIHRoaXMuYm91bmQgPSB0aGlzLm9wdGlvbnMuYm91bmQgfHwgQm91bmRUb0VsZW1lbnQuYm91bmRpbmcodGhpcy5lbGVtZW50KVxuICB9XG5cbiAgcG9zaXRpb25pbmcgKGRyYWdnYWJsZXMsIGluZGV4ZXNPZk5ldykge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uaW5nU3RyYXRlZ3kucG9zaXRpb25pbmcoZHJhZ2dhYmxlcywgaW5kZXhlc09mTmV3KVxuICB9XG5cbiAgc29ydGluZyAob2xkRHJhZ2dhYmxlcywgbmV3RHJhZ2dhYmxlcywgaW5kZXhPZk5ld3MpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbmluZ1N0cmF0ZWd5LnNvcnRpbmcob2xkRHJhZ2dhYmxlcywgbmV3RHJhZ2dhYmxlcywgaW5kZXhPZk5ld3MpXG4gIH1cblxuICBpbml0KCkge1xuICAgIGxldCByZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXdcblxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzID0gdGhpcy5kcmFnZ2FibGVzLmZpbHRlcigoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBsZXQgZWxlbWVudCA9IGRyYWdnYWJsZS5lbGVtZW50LnBhcmVudE5vZGVcbiAgICAgIHdoaWxlIChlbGVtZW50KSB7XG4gICAgICAgIGlmIChlbGVtZW50ID09PSB0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGVcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH0pXG5cbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMubGVuZ3RoKSB7XG4gICAgICBpbmRleGVzT2ZOZXcgPSByYW5nZSh0aGlzLmlubmVyRHJhZ2dhYmxlcy5sZW5ndGgpXG4gICAgICByZWN0YW5nbGVzID0gdGhpcy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgICB9KSwgaW5kZXhlc09mTmV3KVxuICAgICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXcpXG4gICAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHRoaXMuZW1pdCgndGFyZ2V0OmFkZCcsIGRyYWdnYWJsZSkpXG4gICAgfVxuICB9XG5cbiAgZ2V0UmVjdGFuZ2xlKCkge1xuICAgIHJldHVybiBSZWN0YW5nbGUuZnJvbUVsZW1lbnQodGhpcy5lbGVtZW50LCB0aGlzLmNvbnRhaW5lciwgdHJ1ZSlcbiAgfVxuXG4gIGNhdGNoRHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuY2F0Y2hEcmFnZ2FibGUpIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuY2F0Y2hEcmFnZ2FibGUodGhpcywgZHJhZ2dhYmxlKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0YXJnZXRSZWN0YW5nbGUgPSB0aGlzLmdldFJlY3RhbmdsZSgpXG4gICAgICBjb25zdCBkcmFnZ2FibGVTcXVhcmUgPSBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKCkuZ2V0U3F1YXJlKClcblxuICAgICAgcmV0dXJuIGRyYWdnYWJsZVNxdWFyZSA8IHRhcmdldFJlY3RhbmdsZS5nZXRTcXVhcmUoKVxuICAgICAgICAgICAgICAmJiB0YXJnZXRSZWN0YW5nbGUuaW5jbHVkZVBvaW50KGRyYWdnYWJsZS5nZXRDZW50ZXIoKSlcbiAgICB9XG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRSZWN0YW5nbGUoKS5wb3NpdGlvblxuICB9XG5cbiAgZ2V0U2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRSZWN0YW5nbGUoKS5zaXplXG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHNjb3Blcy5mb3JFYWNoKChzY29wZSkgPT4gcmVtb3ZlSXRlbShzY29wZS50YXJnZXRzLCB0aGlzKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgW10pXG4gICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBbXSwgMClcbiAgfVxuXG4gIG9uRW5kKGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IG5ld0RyYWdnYWJsZXNJbmRleCA9IFtdXG5cbiAgICBpZiAodGhpcy5nZXRSZWN0YW5nbGUoKS5pbmNsdWRlUG9pbnQoZHJhZ2dhYmxlLmdldENlbnRlcigpKSkge1xuICAgICAgZHJhZ2dhYmxlLnBvc2l0aW9uID0gdGhpcy5ib3VuZChkcmFnZ2FibGUucG9zaXRpb24sIGRyYWdnYWJsZS5nZXRTaXplKCkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHRoaXMuZW1pdCgndGFyZ2V0OmJlZm9yZUFkZCcsIGRyYWdnYWJsZSlcblxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzID0gdGhpcy5zb3J0aW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLCBbZHJhZ2dhYmxlXSwgbmV3RHJhZ2dhYmxlc0luZGV4KVxuICAgIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgfSksIG5ld0RyYWdnYWJsZXNJbmRleClcblxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgbmV3RHJhZ2dhYmxlc0luZGV4KVxuICAgIGlmICh0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkgIT09IC0xKSB7XG4gICAgICB0aGlzLmFkZFJlbW92ZU9uTW92ZShkcmFnZ2FibGUpXG4gICAgfVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBzZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXcsIHRpbWUpIHtcbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5zbGljZSgwKS5mb3JFYWNoKChkcmFnZ2FibGUsIGkpID0+IHtcbiAgICAgIGNvbnN0IHJlY3QgPSByZWN0YW5nbGVzW2ldLFxuICAgICAgICB0aW1lRW5kID0gdGltZSB8fCB0aW1lID09PSAwID8gdGltZSA6IGluZGV4ZXNPZk5ldy5pbmRleE9mKGkpICE9PSAtMSA/IHRoaXMub3B0aW9ucy50aW1lRW5kIDogdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlXG5cbiAgICAgIGlmIChyZWN0LnJlbW92YWJsZSkge1xuICAgICAgICBkcmFnZ2FibGUubW92ZShkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uLCB0aW1lRW5kLCB0cnVlLCB0cnVlKVxuICAgICAgICByZW1vdmVJdGVtKHRoaXMuaW5uZXJEcmFnZ2FibGVzLCBkcmFnZ2FibGUpXG4gICAgICAgIHRoaXMuZW1pdCgndGFyZ2V0OnJlbW92ZScsIGRyYWdnYWJsZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRyYWdnYWJsZS5tb3ZlKHJlY3QucG9zaXRpb24sIHRpbWVFbmQsIHRydWUsIHRydWUpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGFkZChkcmFnZ2FibGUsIHRpbWUpIHtcbiAgICBjb25zdCBuZXdEcmFnZ2FibGVzSW5kZXggPSB0aGlzLmlubmVyRHJhZ2dhYmxlcy5sZW5ndGhcblxuICAgIHRoaXMuZW1pdCgndGFyZ2V0OmJlZm9yZUFkZCcsIGRyYWdnYWJsZSlcblxuICAgIHRoaXMucHVzaElubmVyRHJhZ2dhYmxlKGRyYWdnYWJsZSlcbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBuZXdEcmFnZ2FibGVzSW5kZXgsIGRyYWdnYWJsZSlcblxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgW25ld0RyYWdnYWJsZXNJbmRleF0sIHRpbWUgfHwgMClcbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMSkge1xuICAgICAgdGhpcy5hZGRSZW1vdmVPbk1vdmUoZHJhZ2dhYmxlKVxuICAgIH1cbiAgfVxuXG4gIHB1c2hJbm5lckRyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpPT09LTEpIHtcbiAgICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxuICAgIH1cbiAgfVxuXG4gIGFkZFJlbW92ZU9uTW92ZShkcmFnZ2FibGUpIHtcbiAgICBkcmFnZ2FibGUub24oJ2RyYWc6bW92ZScsIHRoaXMucmVtb3ZlSGFuZGxlciA9ICgpID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlKGRyYWdnYWJsZSlcbiAgICB9KVxuXG4gICAgdGhpcy5lbWl0KCd0YXJnZXQ6YWRkJywgZHJhZ2dhYmxlKVxuICB9XG5cbiAgcmVtb3ZlKGRyYWdnYWJsZSkge1xuICAgIGRyYWdnYWJsZS51bnN1YnNjcmliZSgnZHJhZzptb3ZlJywgdGhpcy5yZW1vdmVIYW5kbGVyKVxuXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSlcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5zcGxpY2UoaW5kZXgsIDEpXG5cbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBbXSlcblxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgW10pXG4gICAgdGhpcy5lbWl0KCd0YXJnZXQ6cmVtb3ZlJywgZHJhZ2dhYmxlKVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUubW92ZShkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uLCAwLCB0cnVlLCB0cnVlKVxuICAgICAgdGhpcy5lbWl0KCd0YXJnZXQ6cmVtb3ZlJywgZHJhZ2dhYmxlKVxuICAgIH0pXG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMgPSBbXVxuICB9XG5cbiAgZ2V0U29ydGVkRHJhZ2dhYmxlcygpIHtcbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5zbGljZSgpXG4gIH1cblxuICBnZXQgY29udGFpbmVyKCkge1xuICAgIHJldHVybiAodGhpcy5fY29udGFpbmVyID0gdGhpcy5fY29udGFpbmVyIHx8IHRoaXMub3B0aW9ucy5jb250YWluZXIgfHwgdGhpcy5vcHRpb25zLnBhcmVudCB8fCB0aGlzLmVsZW1lbnQub2Zmc2V0UGFyZW50KVxuICB9XG59XG5cblRhcmdldC5lbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcigpXG5UYXJnZXQuZW1pdHRlci5vbigndGFyZ2V0OmNyZWF0ZScsIGFkZFRvRGVmYXVsdFNjb3BlKVxuIiwiaW1wb3J0IHJlbW92ZUl0ZW0gZnJvbSAnLi91dGlscy9yZW1vdmUtYXJyYXktaXRlbSdcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudEVtaXR0ZXInXG5pbXBvcnQgRHJhZ2dhYmxlIGZyb20gJy4vZHJhZ2dhYmxlJ1xuaW1wb3J0IFRhcmdldCBmcm9tICcuL3RhcmdldCdcblxuY29uc3Qgc2NvcGVzID0gW11cblxuY2xhc3MgU2NvcGUgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvcihkcmFnZ2FibGVzLCB0YXJnZXRzLCBvcHRpb25zPXt9KSB7XG4gICAgc3VwZXIob3B0aW9ucylcbiAgICBzY29wZXMuZm9yRWFjaCgoc2NvcGUpID0+IHtcbiAgICAgIGlmIChkcmFnZ2FibGVzKSB7XG4gICAgICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICAgICAgcmVtb3ZlSXRlbShzY29wZS5kcmFnZ2FibGVzLCBkcmFnZ2FibGUpXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIGlmICh0YXJnZXRzKSB7XG4gICAgICAgIHRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB7XG4gICAgICAgICAgcmVtb3ZlSXRlbShzY29wZS50YXJnZXRzLCB0YXJnZXQpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZXMgfHwgW11cbiAgICB0aGlzLnRhcmdldHMgPSB0YXJnZXRzIHx8IFtdXG4gICAgc2NvcGVzLnB1c2godGhpcylcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICB0aW1lRW5kOiAob3B0aW9ucy50aW1lRW5kKSB8fCA0MDBcbiAgICB9XG5cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUuZHJhZ0VuZEFjdGlvbiA9ICgpID0+IHRoaXMub25FbmQoZHJhZ2dhYmxlKVxuICAgIH0pXG4gIH1cblxuICBhZGREcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxuICAgIGRyYWdnYWJsZS5kcmFnRW5kQWN0aW9uID0gKCkgPT4gdGhpcy5vbkVuZChkcmFnZ2FibGUpXG4gIH1cblxuICBhZGRUYXJnZXQodGFyZ2V0KSB7XG4gICAgdGhpcy50YXJnZXRzLnB1c2godGFyZ2V0KVxuICB9XG5cbiAgb25FbmQoZHJhZ2dhYmxlKSB7XG4gICAgY29uc3Qgc2hvdFRhcmdldHMgPSB0aGlzLnRhcmdldHMuZmlsdGVyKCh0YXJnZXQpID0+IHtcbiAgICAgIHJldHVybiB0YXJnZXQuZHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkgIT09IC0xXG4gICAgfSkuZmlsdGVyKCh0YXJnZXQpID0+IHtcbiAgICAgIHJldHVybiB0YXJnZXQuY2F0Y2hEcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICAgIH0pLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIHJldHVybiBhLmdldFJlY3RhbmdsZSgpLmdldFNxdWFyZSgpIC0gYi5nZXRSZWN0YW5nbGUoKS5nZXRTcXVhcmUoKVxuICAgIH0pXG5cbiAgICBpZiAoc2hvdFRhcmdldHMubGVuZ3RoKSB7XG4gICAgICBzaG90VGFyZ2V0c1swXS5vbkVuZChkcmFnZ2FibGUpXG4gICAgfSBlbHNlIGlmIChkcmFnZ2FibGUudGFyZ2V0cy5sZW5ndGgpIHtcbiAgICAgIGRyYWdnYWJsZS5waW5Qb3NpdGlvbihkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uLCB0aGlzLm9wdGlvbnMudGltZUVuZClcbiAgICB9XG5cbiAgICB0aGlzLmVtaXQoJ3Njb3BlOmNoYW5nZScpXG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLnRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB0YXJnZXQucmVzZXQoKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnJlZnJlc2goKSlcbiAgICB0aGlzLnRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB0YXJnZXQucmVmcmVzaCgpKVxuICB9XG5cbiAgZ2V0IHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXRzLm1hcCgodGFyZ2V0KSA9PiB7XG4gICAgICByZXR1cm4gdGFyZ2V0LmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4gdGhpcy5kcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSlcbiAgICB9KVxuICB9XG5cbiAgc2V0IHBvc2l0aW9ucyhwb3NpdGlvbnMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gJ3dyb25nIGFycmF5IGxlbmd0aCdcbiAgICBpZiAocG9zaXRpb25zLmxlbmd0aCA9PT0gdGhpcy50YXJnZXRzLmxlbmd0aCkge1xuICAgICAgdGhpcy50YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4gdGFyZ2V0LnJlc2V0KCkpXG5cbiAgICAgIHBvc2l0aW9ucy5mb3JFYWNoKCh0YXJnZXRJbmRleGVzLCBpKSA9PiB7XG4gICAgICAgIHRhcmdldEluZGV4ZXMuZm9yRWFjaCgoaW5kZXgpID0+IHtcbiAgICAgICAgICB0aGlzLnRhcmdldHNbaV0uYWRkKHRoaXMuZHJhZ2dhYmxlc1tpbmRleF0pXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBtZXNzYWdlXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IGRlZmF1bHRTY29wZSA9IG5ldyBTY29wZSgpXG5cbmZ1bmN0aW9uIHNjb3BlKGZuKSB7XG4gIGNvbnN0IGN1cnJlbnRTY29wZSA9IG5ldyBTY29wZSgpXG5cbiAgY29uc3QgYWRkRHJhZ2dhYmxlVG9TY29wZSA9IGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICAgIGN1cnJlbnRTY29wZS5hZGREcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICAgIERyYWdnYWJsZS5lbWl0dGVyLmludGVycnVwdCgpXG4gIH1cblxuICBjb25zdCBhZGRUYXJnZXRUb1Njb3BlID0gZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgY3VycmVudFNjb3BlLmFkZFRhcmdldCh0YXJnZXQpXG4gICAgRHJhZ2dhYmxlLmVtaXR0ZXIuaW50ZXJydXB0KClcbiAgfVxuXG4gIERyYWdnYWJsZS5lbWl0dGVyLnByZXBlbmRPbignZHJhZ2dhYmxlOmNyZWF0ZScsIGFkZERyYWdnYWJsZVRvU2NvcGUpXG4gIFRhcmdldC5lbWl0dGVyLnByZXBlbmRPbigndGFyZ2V0OmNyZWF0ZScsIGFkZFRhcmdldFRvU2NvcGUpXG4gIGZuLmNhbGwoKVxuICBEcmFnZ2FibGUuZW1pdHRlci51bnN1YnNjcmliZSgnZHJhZ2dhYmxlOmNyZWF0ZScsIGFkZERyYWdnYWJsZVRvU2NvcGUpXG4gIFRhcmdldC5lbWl0dGVyLnVuc3Vic2NyaWJlKCd0YXJnZXQ6Y3JlYXRlJywgYWRkVGFyZ2V0VG9TY29wZSlcbiAgcmV0dXJuIGN1cnJlbnRTY29wZVxufVxuXG5leHBvcnQgeyBzY29wZXMsIGRlZmF1bHRTY29wZSwgU2NvcGUsIHNjb3BlIH1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRocm90dGxlKGZ1bmMsIHdhaXQpIHtcbiAgbGV0IGxhc3RUaW1lID0gMFxuXG4gIHJldHVybiBmdW5jdGlvbiBleGVjdXRlZEZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzXG4gICAgY29uc3QgYXJncyA9IGFyZ3VtZW50c1xuXG4gICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKVxuICAgIGlmIChub3cgLSBsYXN0VGltZSA+PSB3YWl0KSB7XG4gICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpXG4gICAgICBsYXN0VGltZSA9IG5vd1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50RW1pdHRlcidcbmltcG9ydCBQb2ludCBmcm9tICcuL2dlb21ldHJ5L3BvaW50J1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tICcuL2dlb21ldHJ5L3JlY3RhbmdsZSdcbmltcG9ydCB7IGRlZmF1bHRTY29wZSB9IGZyb20gJy4vc2NvcGUnXG5pbXBvcnQgdGhyb3R0bGUgZnJvbSAnLi91dGlscy90aHJvdHRsZSdcbmltcG9ydCBnZXRQYXJlbnRzQ2hhaW4gZnJvbSAnLi91dGlscy9nZXQtcGFyZW50cy1jaGFpbidcblxuY29uc3QgdGhyb3R0bGVkRHJhZ092ZXIgPSAoY2FsbGJhY2ssIGR1cmF0aW9uKSA9PiB7XG4gIGNvbnN0IHRocm90dGxlZENhbGxiYWNrID0gdGhyb3R0bGUoKGV2ZW50KSA9PiBjYWxsYmFjayhldmVudCksIGR1cmF0aW9uKVxuICByZXR1cm4gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIHRocm90dGxlZENhbGxiYWNrKGV2ZW50KVxuICB9XG59XG5cbmNvbnN0IHBhc3NpdmVGYWxzZSA9IHsgcGFzc2l2ZTogZmFsc2UgfVxuXG5jb25zdCBpc1RvdWNoID0gbmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzID4gMFxuY29uc3QgbW91c2VFdmVudHMgPSB7XG4gIHN0YXJ0OiAnbW91c2Vkb3duJyxcbiAgbW92ZTogJ21vdXNlbW92ZScsXG4gIGVuZDogJ21vdXNldXAnXG59XG5jb25zdCB0b3VjaEV2ZW50cyA9IHtcbiAgc3RhcnQ6ICd0b3VjaHN0YXJ0JyxcbiAgbW92ZTogJ3RvdWNobW92ZScsXG4gIGVuZDogJ3RvdWNoZW5kJ1xufVxuY29uc3QgZHJhZ2dhYmxlcyA9IFtdXG5jb25zdCB0cmFuc2Zvcm1Qcm9wZXJ0eSA9ICd0cmFuc2Zvcm0nXG5jb25zdCB0cmFuc2l0aW9uUHJvcGVydHkgPSAndHJhbnNpdGlvbidcblxuZnVuY3Rpb24gZ2V0VG91Y2hCeUlEKGVsZW1lbnQsIHRvdWNoSWQpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50LmNoYW5nZWRUb3VjaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGVsZW1lbnQuY2hhbmdlZFRvdWNoZXNbaV0uaWRlbnRpZmllciA9PT0gdG91Y2hJZCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQuY2hhbmdlZFRvdWNoZXNbaV1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmZ1bmN0aW9uIHByZXZlbnREb3VibGVJbml0KGRyYWdnYWJsZSkge1xuICBjb25zdCBtZXNzYWdlID0gXCJmb3IgdGhpcyBlbGVtZW50IERyYWdlZS5EcmFnZ2FibGUgaXMgYWxyZWFkeSBleGlzdCwgZG9uJ3QgY3JlYXRlIGl0IHR3aWNlIFwiXG4gIGlmIChkcmFnZ2FibGVzLnNvbWUoKGV4aXN0aW5nKSA9PiBkcmFnZ2FibGUuZWxlbWVudCA9PT0gZXhpc3RpbmcuZWxlbWVudCkpIHtcbiAgICB0aHJvdyBtZXNzYWdlXG4gIH1cbiAgZHJhZ2dhYmxlcy5wdXNoKGRyYWdnYWJsZSlcbn1cblxuZnVuY3Rpb24gYWRkVG9EZWZhdWx0U2NvcGUoZHJhZ2dhYmxlKSB7XG4gIGRlZmF1bHRTY29wZS5hZGREcmFnZ2FibGUoZHJhZ2dhYmxlKVxufVxuXG5mdW5jdGlvbiBjb3B5U3R5bGVzKHNvdXJjZSwgZGVzdGluYXRpb24pIHtcbiAgY29uc3QgY3MgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShzb3VyY2UpXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGtleSA9IGNzW2ldXG4gICAgaWYgKChrZXkuaW5kZXhPZigndHJhbnNpdGlvbicpIDwgMCkgJiYgKGtleS5pbmRleE9mKCd0cmFuc2Zvcm0nKSA8IDApKSB7XG4gICAgICBkZXN0aW5hdGlvbi5zdHlsZVtrZXldID0gY3Nba2V5XVxuICAgIH1cbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc291cmNlLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgY29weVN0eWxlcyhzb3VyY2UuY2hpbGRyZW5baV0sIGRlc3RpbmF0aW9uLmNoaWxkcmVuW2ldKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYWdnYWJsZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcihvcHRpb25zKVxuICAgIHRoaXMudGFyZ2V0cyA9IFtdXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9uc1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgICBwcmV2ZW50RG91YmxlSW5pdCh0aGlzKVxuICAgIERyYWdnYWJsZS5lbWl0dGVyLmVtaXQoJ2RyYWdnYWJsZTpjcmVhdGUnLCB0aGlzKVxuICAgIHRoaXMuX2VuYWJsZSA9IHRydWVcbiAgICB0aGlzLnN0YXJ0Qm91bmRpbmcoKVxuICAgIHRoaXMuc3RhcnRQb3NpdGlvbmluZygpXG4gICAgdGhpcy5zdGFydExpc3RlbmluZygpXG4gIH1cblxuICBzdGFydEJvdW5kaW5nKCkge1xuICAgIHRoaXMuYm91bmRpbmcgPSB0aGlzLm9wdGlvbnMuYm91bmRpbmcgfHwge1xuICAgICAgYm91bmQ6IHRoaXMub3B0aW9ucy5ib3VuZCB8fCAoKHBvaW50KSA9PiBwb2ludClcbiAgICB9XG4gIH1cblxuICBzdGFydFBvc2l0aW9uaW5nKCkge1xuICAgIHRoaXMuX3NldERlZmF1bHRUcmFuc2l0aW9uKClcbiAgICB0aGlzLm9mZnNldCA9IHRoaXMuaXNDb25zaWRlclRyYW5zZm9ybU9mZnNldFxuICAgICAgPyBQb2ludC5lbGVtZW50Qm91bmRpbmdPZmZzZXQodGhpcy5lbGVtZW50LCB0aGlzLmNvbnRhaW5lcilcbiAgICAgIDogUG9pbnQuZWxlbWVudE9mZnNldCh0aGlzLmVsZW1lbnQsIHRoaXMuY29udGFpbmVyKVxuICAgIHRoaXMucGlubmVkUG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICAgIHRoaXMuaW5pdGlhbFBvc2l0aW9uID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uIHx8IHRoaXMub2Zmc2V0XG5cbiAgICB0aGlzLnBpblBvc2l0aW9uKHRoaXMuaW5pdGlhbFBvc2l0aW9uKVxuXG4gICAgaWYgKHRoaXMuYm91bmRpbmcucmVmcmVzaCkge1xuICAgICAgdGhpcy5ib3VuZGluZy5yZWZyZXNoKClcbiAgICB9XG4gIH1cblxuICBzdGFydExpc3RlbmluZygpIHtcbiAgICB0aGlzLl9kcmFnU3RhcnQgPSAoZXZlbnQpID0+IHRoaXMuZHJhZ1N0YXJ0KGV2ZW50KVxuICAgIHRoaXMuX2RyYWdNb3ZlID0gKGV2ZW50KSA9PiB0aGlzLmRyYWdNb3ZlKGV2ZW50KVxuICAgIHRoaXMuX2RyYWdFbmQgPSAoZXZlbnQpID0+IHRoaXMuZHJhZ0VuZChldmVudClcbiAgICB0aGlzLl9uYXRpdmVEcmFnU3RhcnQgPSAoZXZlbnQpID0+IHRoaXMubmF0aXZlRHJhZ1N0YXJ0KGV2ZW50KVxuICAgIHRoaXMuX25hdGl2ZURyYWdPdmVyID0gdGhyb3R0bGVkRHJhZ092ZXIoKGV2ZW50KSA9PiB0aGlzLm5hdGl2ZURyYWdPdmVyKGV2ZW50KSwgdGhpcy5kcmFnT3ZlclRocm90dGxlRHVyYXRpb24pXG4gICAgdGhpcy5fbmF0aXZlRHJhZ0VuZCA9IChldmVudCkgPT4gdGhpcy5uYXRpdmVEcmFnRW5kKGV2ZW50KVxuICAgIHRoaXMuX25hdGl2ZURyb3AgPSAoZXZlbnQpID0+IHRoaXMubmF0aXZlRHJvcChldmVudClcbiAgICB0aGlzLl9zY3JvbGwgPSAoZXZlbnQpID0+IHRoaXMub25TY3JvbGwoZXZlbnQpXG5cbiAgICB0aGlzLmhhbmRsZXIuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0LCBwYXNzaXZlRmFsc2UpXG4gICAgdGhpcy5oYW5kbGVyLmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydCwgcGFzc2l2ZUZhbHNlKVxuICB9XG5cbiAgZ2V0U2l6ZSgpIHtcbiAgICByZXR1cm4gUG9pbnQuZWxlbWVudFNpemUodGhpcy5lbGVtZW50KVxuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMub2Zmc2V0LmFkZCh0aGlzLl90cmFuc2Zvcm1Qb3NpdGlvbiB8fCBuZXcgUG9pbnQoMCwgMCkpXG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25cbiAgfVxuXG4gIGdldENlbnRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi5hZGQodGhpcy5nZXRTaXplKCkubXVsdCgwLjUpKVxuICB9XG5cbiAgX3NldERlZmF1bHRUcmFuc2l0aW9uICgpIHtcbiAgICBpZiAoIXRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNpdGlvblByb3BlcnR5XSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZWxlbWVudClbdHJhbnNpdGlvblByb3BlcnR5XVxuICAgIH1cbiAgfVxuXG4gIF9zZXRUcmFuc2l0aW9uKHRpbWUpIHtcbiAgICBsZXQgdHJhbnNpdGlvbiA9IHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldXG4gICAgY29uc3QgdHJhbnNpdGlvbkNzcyA9IGB0cmFuc2Zvcm0gJHt0aW1lfW1zYFxuXG4gICAgaWYgKCEvdHJhbnNmb3JtXFxzP1xcZCptP3M/Ly50ZXN0KHRyYW5zaXRpb24pKSB7XG4gICAgICBpZiAodHJhbnNpdGlvbikge1xuICAgICAgICB0cmFuc2l0aW9uICs9IGAsICR7dHJhbnNpdGlvbkNzc31gXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cmFuc2l0aW9uID0gdHJhbnNpdGlvbkNzc1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0cmFuc2l0aW9uID0gdHJhbnNpdGlvbi5yZXBsYWNlKC90cmFuc2Zvcm1cXHM/XFxkKm0/cz8vZywgdHJhbnNpdGlvbkNzcylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV0gIT09IHRyYW5zaXRpb24pIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldID0gdHJhbnNpdGlvblxuICAgIH1cbiAgfVxuXG4gIF9zZXRUcmFuc2xhdGUocG9pbnQpIHtcbiAgICB0aGlzLl90cmFuc2Zvcm1Qb3NpdGlvbiA9IHBvaW50XG4gICAgY29uc3QgdHJhbnNsYXRlQ3NzID0gYHRyYW5zbGF0ZTNkKCR7cG9pbnQueH1weCwgJHtwb2ludC55fXB4LCAwcHgpYFxuXG4gICAgbGV0IHRyYW5zZm9ybSA9IHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wZXJ0eV1cblxuICAgIGlmICh0aGlzLnNob3VsZFJlbW92ZVplcm9UcmFuc2xhdGUgJiYgcG9pbnQueCA9PT0gMCAmJiBwb2ludC55ID09PSAwKSB7XG4gICAgICB0cmFuc2Zvcm0gPSB0cmFuc2Zvcm0ucmVwbGFjZSgvdHJhbnNsYXRlM2RcXChbXildK1xcKS8sICcnKVxuICAgIH0gZWxzZSBpZiAoIS90cmFuc2xhdGUzZFxcKFteKV0rXFwpLy50ZXN0KHRyYW5zZm9ybSkpIHtcbiAgICAgIGlmICh0cmFuc2Zvcm0pIHtcbiAgICAgICAgdHJhbnNmb3JtICs9ICcgJ1xuICAgICAgfVxuICAgICAgdHJhbnNmb3JtICs9IHRyYW5zbGF0ZUNzc1xuICAgIH0gZWxzZSB7XG4gICAgICB0cmFuc2Zvcm0gPSB0cmFuc2Zvcm0ucmVwbGFjZSgvdHJhbnNsYXRlM2RcXChbXildK1xcKS8sIHRyYW5zbGF0ZUNzcylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BlcnR5XSAhPT0gdHJhbnNmb3JtKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcGVydHldID0gdHJhbnNmb3JtXG4gICAgfVxuICB9XG5cbiAgbW92ZShwb2ludCwgdGltZT0wLCBpc1NpbGVudD1mYWxzZSkge1xuICAgIHBvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIHRoaXMucG9zaXRpb24gPSBwb2ludFxuXG4gICAgdGhpcy5fc2V0VHJhbnNpdGlvbih0aW1lKVxuICAgIHRoaXMuX3NldFRyYW5zbGF0ZShwb2ludC5zdWIodGhpcy5vZmZzZXQpKVxuXG4gICAgaWYgKCFpc1NpbGVudCkge1xuICAgICAgdGhpcy5lbWl0KCdkcmFnOm1vdmUnKVxuICAgIH1cbiAgfVxuXG4gIHBpblBvc2l0aW9uKHBvaW50LCB0aW1lPTAsIHNpbGVudD10cnVlKSB7XG4gICAgdGhpcy5waW5uZWRQb3NpdGlvbiA9IHBvaW50LmNsb25lKClcbiAgICB0aGlzLm1vdmUodGhpcy5waW5uZWRQb3NpdGlvbiwgdGltZSwgc2lsZW50KVxuICB9XG5cbiAgcmVzZXRQb3NpdGlvblRvSW5pdGlhbCAoKSB7XG4gICAgdGhpcy5waW5Qb3NpdGlvbih0aGlzLmluaXRpYWxQb3NpdGlvbilcbiAgfVxuXG4gIHJlZnJlc2hQb3NpdGlvbiAoKSB7XG4gICAgdGhpcy5zZXRQb3NpdGlvbih0aGlzLmdldFBvc2l0aW9uKCkpXG4gIH1cblxuICBzZXRQb3NpdGlvbihwb2ludCkge1xuICAgIHBvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIHRoaXMucG9zaXRpb24gPSBwb2ludFxuICAgIHRoaXMuX3NldFRyYW5zaXRpb24oMClcbiAgICB0aGlzLl9zZXRUcmFuc2xhdGUocG9pbnQuc3ViKHRoaXMub2Zmc2V0KSlcbiAgfVxuXG4gIGRldGVybWluZURpcmVjdGlvbihwb2ludCkge1xuICAgIHRoaXMuX3ByZXZpb3VzRGlyZWN0aW9uUG9zaXRpb24gfHw9IHRoaXMuX3N0YXJ0UG9zaXRpb25cblxuICAgIHRoaXMubGVmdERpcmVjdGlvbiA9ICh0aGlzLl9wcmV2aW91c0RpcmVjdGlvblBvc2l0aW9uLnggPCBwb2ludC54KVxuICAgIHRoaXMucmlnaHREaXJlY3Rpb24gPSAodGhpcy5fcHJldmlvdXNEaXJlY3Rpb25Qb3NpdGlvbi54ID4gcG9pbnQueClcbiAgICB0aGlzLnVwRGlyZWN0aW9uID0gKHRoaXMuX3ByZXZpb3VzRGlyZWN0aW9uUG9zaXRpb24ueSA+IHBvaW50LnkpXG4gICAgdGhpcy5kb3duRGlyZWN0aW9uID0gKHRoaXMuX3ByZXZpb3VzRGlyZWN0aW9uUG9zaXRpb24ueSA8IHBvaW50LnkpXG5cbiAgICB0aGlzLl9wcmV2aW91c0RpcmVjdGlvblBvc2l0aW9uID0gcG9pbnRcbiAgfVxuXG4gIHNlZW1zU2Nyb2xsaW5nKCkge1xuICAgIHJldHVybiAoK25ldyBEYXRlKCkgLSB0aGlzLl9zdGFydFRvdWNoVGltZXN0YW1wKSA8IHRoaXMudG91Y2hEcmFnZ2luZ1RocmVzaG9sZFxuICB9XG5cbiAgc2hvdWxkVXNlTmF0aXZlRHJhZ0FuZERyb3AoKSB7XG4gICAgaWYgKHRoaXMuaXNUb3VjaEV2ZW50KSB7XG4gICAgICByZXR1cm4gdGhpcy5uYXRpdmVEcmFnQW5kRHJvcCAmJiB0aGlzLmVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcE9uVG91Y2hcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMubmF0aXZlRHJhZ0FuZERyb3BcbiAgICB9XG4gIH1cblxuICBkcmFnU3RhcnQoZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuX2VuYWJsZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3RvcFByb3BhZ2F0aW9uT25EcmFnU3RhcnQpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgfVxuXG4gICAgdGhpcy5pc1RvdWNoRXZlbnQgPSAoaXNUb3VjaCAmJiAoZXZlbnQgaW5zdGFuY2VvZiB3aW5kb3cuVG91Y2hFdmVudCkpXG5cbiAgICB0aGlzLnRvdWNoUG9pbnQgPSB0aGlzLl9zdGFydFRvdWNoUG9pbnQgPSBuZXcgUG9pbnQoXG4gICAgICB0aGlzLmlzVG91Y2hFdmVudCA/IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYIDogZXZlbnQuY2xpZW50WCxcbiAgICAgIHRoaXMuaXNUb3VjaEV2ZW50ID8gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVkgOiBldmVudC5jbGllbnRZXG4gICAgKVxuXG4gICAgdGhpcy5fc3RhcnRQb3NpdGlvbiA9IHRoaXMuZ2V0UG9zaXRpb24oKVxuICAgIGlmICh0aGlzLmlzVG91Y2hFdmVudCkge1xuICAgICAgdGhpcy5fdG91Y2hJZCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmlkZW50aWZpZXJcbiAgICAgIHRoaXMuX3N0YXJ0VG91Y2hUaW1lc3RhbXAgPSArbmV3IERhdGUoKVxuICAgIH1cblxuICAgIHRoaXMuX3N0YXJ0V2luZG93U2Nyb2xsUG9pbnQgPSB0aGlzLndpbmRvd1Njcm9sbFBvaW50XG4gICAgdGhpcy5fc3RhcnRTY3JvbGxFbGVtZW50c09mZnNldCA9IHRoaXMuc2Nyb2xsRWxlbWVudHNPZmZzZXRcblxuICAgIGlmIChldmVudC50YXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElucHV0RWxlbWVudCB8fFxuICAgICAgICAgIGV2ZW50LnRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSW5wdXRFbGVtZW50KSB7XG4gICAgICBldmVudC50YXJnZXQuZm9jdXMoKVxuICAgIH1cblxuICAgIGlmICh0aGlzLnNob3VsZFVzZU5hdGl2ZURyYWdBbmREcm9wKCkpIHtcbiAgICAgIGlmICh0aGlzLmlzVG91Y2hFdmVudCAmJiB0aGlzLmVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcE9uVG91Y2gpIHtcbiAgICAgICAgdGhpcy5fc3RhcnRQYXJlbnRzU2Nyb2xsT2Zmc2V0ID0gdGhpcy5wYXJlbnRzU2Nyb2xsT2Zmc2V0XG5cbiAgICAgICAgY29uc3QgZW11bGF0ZU9uRmlyc3RNb3ZlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuc2VlbXNTY3JvbGxpbmcoKSkge1xuICAgICAgICAgICAgdGhpcy5jYW5jZWxEcmFnZ2luZygpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wKGV2ZW50KVxuICAgICAgICAgIH1cbiAgICAgICAgICBjYW5jZWxFbXVsYXRpb24oKVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNhbmNlbEVtdWxhdGlvbiA9ICgpID0+IHtcbiAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIGVtdWxhdGVPbkZpcnN0TW92ZSlcbiAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgY2FuY2VsRW11bGF0aW9uKVxuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCBlbXVsYXRlT25GaXJzdE1vdmUsIHBhc3NpdmVGYWxzZSlcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIGNhbmNlbEVtdWxhdGlvbiwgcGFzc2l2ZUZhbHNlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIHRoaXMuX25hdGl2ZURyYWdTdGFydClcbiAgICAgICAgdGhpcy5lbGVtZW50LmRyYWdnYWJsZSA9IHRydWVcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX25hdGl2ZURyYWdFbmQsIHBhc3NpdmVGYWxzZSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSwgcGFzc2l2ZUZhbHNlKVxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSwgcGFzc2l2ZUZhbHNlKVxuXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZCwgcGFzc2l2ZUZhbHNlKVxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQsIHBhc3NpdmVGYWxzZSlcbiAgICB9XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fc2Nyb2xsKVxuICAgIHRoaXMuc2Nyb2xsRWxlbWVudHMuZm9yRWFjaCgocCkgPT4gcC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9zY3JvbGwpKVxuXG4gICAgdGhpcy5lbWl0KCdkcmFnOnN0YXJ0JylcbiAgfVxuXG4gIGRyYWdNb3ZlKGV2ZW50KSB7XG4gICAgbGV0IHRvdWNoXG5cbiAgICB0aGlzLmlzRHJhZ2dpbmcgPSB0cnVlXG5cbiAgICB0aGlzLmlzVG91Y2hFdmVudCA9IChpc1RvdWNoICYmIChldmVudCBpbnN0YW5jZW9mIHdpbmRvdy5Ub3VjaEV2ZW50KSlcbiAgICBpZiAodGhpcy5pc1RvdWNoRXZlbnQpIHtcbiAgICAgIHRvdWNoID0gZ2V0VG91Y2hCeUlEKGV2ZW50LCB0aGlzLl90b3VjaElkKVxuXG4gICAgICBpZiAoIXRvdWNoKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5zZWVtc1Njcm9sbGluZygpKSB7XG4gICAgICAgIHRoaXMuY2FuY2VsRHJhZ2dpbmcoKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB0aGlzLnRvdWNoUG9pbnQgPSBuZXcgUG9pbnQoXG4gICAgICB0aGlzLmlzVG91Y2hFdmVudCA/IHRvdWNoLnBhZ2VYIDogZXZlbnQuY2xpZW50WCxcbiAgICAgIHRoaXMuaXNUb3VjaEV2ZW50ID8gdG91Y2gucGFnZVkgOiBldmVudC5jbGllbnRZXG4gICAgKVxuXG4gICAgbGV0IHBvaW50ID0gdGhpcy5fc3RhcnRQb3NpdGlvbi5hZGQodGhpcy50b3VjaFBvaW50LnN1Yih0aGlzLl9zdGFydFRvdWNoUG9pbnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMud2luZG93U2Nyb2xsUG9pbnQuc3ViKHRoaXMuX3N0YXJ0V2luZG93U2Nyb2xsUG9pbnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMuc2Nyb2xsRWxlbWVudHNPZmZzZXQuc3ViKHRoaXMuX3N0YXJ0U2Nyb2xsRWxlbWVudHNPZmZzZXQpKVxuXG4gICAgcG9pbnQgPSB0aGlzLmJvdW5kaW5nLmJvdW5kKHBvaW50LCB0aGlzLmdldFNpemUoKSlcbiAgICB0aGlzLmRldGVybWluZURpcmVjdGlvbihwb2ludClcbiAgICB0aGlzLm1vdmUocG9pbnQpXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RyYWdlZS1hY3RpdmUnKVxuICB9XG5cbiAgZHJhZ0VuZChldmVudCkge1xuICAgIHRoaXMuaXNUb3VjaEV2ZW50ID0gKGlzVG91Y2ggJiYgKGV2ZW50IGluc3RhbmNlb2Ygd2luZG93LlRvdWNoRXZlbnQpKVxuXG4gICAgaWYgKHRoaXMuaXNUb3VjaEV2ZW50ICYmICFnZXRUb3VjaEJ5SUQoZXZlbnQsIHRoaXMuX3RvdWNoSWQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc0RyYWdnaW5nKSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIH1cblxuICAgIHRoaXMuZHJhZ0VuZEFjdGlvbigpXG4gICAgdGhpcy5lbWl0KCdkcmFnOmVuZCcpXG4gICAgdGhpcy5jYW5jZWxEcmFnZ2luZygpXG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZWUtYWN0aXZlJykpXG4gIH1cblxuICBvblNjcm9sbChfZXZlbnQpIHtcbiAgICBsZXQgcG9pbnQgPSB0aGlzLl9zdGFydFBvc2l0aW9uLmFkZCh0aGlzLnRvdWNoUG9pbnQuc3ViKHRoaXMuX3N0YXJ0VG91Y2hQb2ludCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy53aW5kb3dTY3JvbGxQb2ludC5zdWIodGhpcy5fc3RhcnRXaW5kb3dTY3JvbGxQb2ludCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy5zY3JvbGxFbGVtZW50c09mZnNldC5zdWIodGhpcy5fc3RhcnRTY3JvbGxFbGVtZW50c09mZnNldCkpXG5cbiAgICBwb2ludCA9IHRoaXMuYm91bmRpbmcuYm91bmQocG9pbnQsIHRoaXMuZ2V0U2l6ZSgpKVxuICAgIGlmICghdGhpcy5uYXRpdmVEcmFnQW5kRHJvcCkge1xuICAgICAgdGhpcy5kZXRlcm1pbmVEaXJlY3Rpb24ocG9pbnQpXG4gICAgICB0aGlzLm1vdmUocG9pbnQpXG4gICAgfVxuICB9XG5cbiAgbmF0aXZlRHJhZ1N0YXJ0KGV2ZW50KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dCcsICdGaXJlRm94IGZpeCcpXG4gICAgZXZlbnQuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSAnbW92ZSdcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIHRoaXMuX25hdGl2ZURyYWdPdmVyKVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzLl9uYXRpdmVEcm9wKVxuICB9XG5cbiAgbmF0aXZlRHJhZ092ZXIoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZXZlbnQuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnbW92ZSdcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZHJhZ2VlLXBsYWNlaG9sZGVyJylcbiAgICBpZiAoZXZlbnQuY2xpZW50WCA9PT0gMCAmJiBldmVudC5jbGllbnRZID09PSAwKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLnRvdWNoUG9pbnQgPSBuZXcgUG9pbnQoZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSlcbiAgICBsZXQgcG9pbnQgPSB0aGlzLl9zdGFydFBvc2l0aW9uLmFkZCh0aGlzLnRvdWNoUG9pbnQuc3ViKHRoaXMuX3N0YXJ0VG91Y2hQb2ludCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy53aW5kb3dTY3JvbGxQb2ludC5zdWIodGhpcy5fc3RhcnRXaW5kb3dTY3JvbGxQb2ludCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy5zY3JvbGxFbGVtZW50c09mZnNldC5zdWIodGhpcy5fc3RhcnRTY3JvbGxFbGVtZW50c09mZnNldCkpXG4gICAgcG9pbnQgPSB0aGlzLmJvdW5kaW5nLmJvdW5kKHBvaW50LCB0aGlzLmdldFNpemUoKSlcbiAgICB0aGlzLmRldGVybWluZURpcmVjdGlvbihwb2ludClcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9pbnRcbiAgICB0aGlzLmVtaXQoJ2RyYWc6bW92ZScpXG4gIH1cblxuICBuYXRpdmVEcmFnRW5kKF9ldmVudCkge1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZWUtcGxhY2Vob2xkZXInKVxuICAgIHRoaXMuZHJhZ0VuZEFjdGlvbigpXG4gICAgdGhpcy5lbWl0KCdkcmFnOmVuZCcpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCB0aGlzLl9uYXRpdmVEcmFnT3ZlcilcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcm9wJywgdGhpcy5fbmF0aXZlRHJvcClcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fc2Nyb2xsKVxuICAgIHRoaXMuc2Nyb2xsRWxlbWVudHMuZm9yRWFjaCgocCkgPT4gcC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9zY3JvbGwpKVxuICAgIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnZHJhZ2dhYmxlJylcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgdGhpcy5fbmF0aXZlRHJhZ1N0YXJ0KVxuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZWUtYWN0aXZlJylcbiAgfVxuXG4gIG5hdGl2ZURyb3AoZXZlbnQpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIGNhbmNlbERyYWdnaW5nICgpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG5cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcblxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX3Njcm9sbClcbiAgICB0aGlzLnNjcm9sbEVsZW1lbnRzLmZvckVhY2goKHApID0+IHAucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fc2Nyb2xsKSlcblxuICAgIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlXG4gICAgdGhpcy5fcHJldmlvdXNEaXJlY3Rpb25Qb3NpdGlvbiA9IG51bGxcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkcmFnZ2FibGUnKVxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCB0aGlzLl9uYXRpdmVEcmFnU3RhcnQpXG4gIH1cblxuICBjb3B5U3R5bGVzKHNvdXJjZSwgZGVzdGluYXRpb24pIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmNvcHlTdHlsZXMpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5jb3B5U3R5bGVzKHNvdXJjZSwgZGVzdGluYXRpb24pXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvcHlTdHlsZXMoc291cmNlLCBkZXN0aW5hdGlvbilcbiAgICB9XG4gIH1cblxuICBlbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3AoZXZlbnQpIHtcbiAgICBjb25zdCBjb250YWluZXJSZWN0ID0gdGhpcy5jb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICBjb25zdCBjbG9uZWRFbGVtZW50ID0gdGhpcy5lbGVtZW50LmNsb25lTm9kZSh0cnVlKVxuICAgIGNsb25lZEVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcGVydHldID0gJydcbiAgICB0aGlzLmNvcHlTdHlsZXModGhpcy5lbGVtZW50LCBjbG9uZWRFbGVtZW50KVxuICAgIGNsb25lZEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZHJhZ2VlLW5hdGl2ZS1lbXVsYXRpb24nKVxuICAgIGNsb25lZEVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjbG9uZWRFbGVtZW50KVxuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkcmFnZWUtcGxhY2Vob2xkZXInKVxuXG4gICAgY29uc3QgZW11bGF0aW9uRHJhZ2dhYmxlID0gbmV3IERyYWdnYWJsZShjbG9uZWRFbGVtZW50LCB7XG4gICAgICBjb250YWluZXI6IGRvY3VtZW50LmJvZHksXG4gICAgICB0b3VjaERyYWdnaW5nVGhyZXNob2xkOiAwLFxuICAgICAgYm91bmQocG9pbnQpIHtcbiAgICAgICAgcmV0dXJuIHBvaW50XG4gICAgICB9LFxuICAgICAgb246IHtcbiAgICAgICAgJ2RyYWc6bW92ZSc6ICgpID0+IHtcbiAgICAgICAgICBjb25zdCBjb250YWluZXJSZWN0UG9pbnQgPSBuZXcgUG9pbnQoY29udGFpbmVyUmVjdC5sZWZ0LCBjb250YWluZXJSZWN0LnRvcClcbiAgICAgICAgICB0aGlzLnBvc2l0aW9uID0gZW11bGF0aW9uRHJhZ2dhYmxlLnBvc2l0aW9uLnN1Yihjb250YWluZXJSZWN0UG9pbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdWIodGhpcy5fc3RhcnRXaW5kb3dTY3JvbGxQb2ludClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZCh0aGlzLl9zdGFydFBhcmVudHNTY3JvbGxPZmZzZXQpXG5cbiAgICAgICAgICB0aGlzLmRldGVybWluZURpcmVjdGlvbih0aGlzLnBvc2l0aW9uKVxuICAgICAgICAgIHRoaXMuZW1pdCgnZHJhZzptb3ZlJylcbiAgICAgICAgfSxcbiAgICAgICAgJ2RyYWc6ZW5kJzogKCkgPT4ge1xuICAgICAgICAgIGVtdWxhdGlvbkRyYWdnYWJsZS5kZXN0cm95KClcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGNsb25lZEVsZW1lbnQpXG4gICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdlZS1wbGFjZWhvbGRlcicpXG4gICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdlZS1hY3RpdmUnKVxuXG4gICAgICAgICAgdGhpcy5lbWl0KCdkcmFnOmVuZCcpXG4gICAgICAgICAgdGhpcy5kcmFnRW5kQWN0aW9uKClcbiAgICAgICAgICB0aGlzLmNhbmNlbERyYWdnaW5nKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBjb250YWluZXJSZWN0UG9pbnQgPSBuZXcgUG9pbnQoY29udGFpbmVyUmVjdC5sZWZ0LCBjb250YWluZXJSZWN0LnRvcClcbiAgICBlbXVsYXRpb25EcmFnZ2FibGUuX3N0YXJ0V2luZG93U2Nyb2xsUG9pbnQgPSB0aGlzLl9zdGFydFdpbmRvd1Njcm9sbFBvaW50XG5cbiAgICBlbXVsYXRpb25EcmFnZ2FibGUubW92ZShcbiAgICAgIHRoaXMucGlubmVkUG9zaXRpb24uYWRkKGNvbnRhaW5lclJlY3RQb2ludClcbiAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMud2luZG93U2Nyb2xsUG9pbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgLnN1Yih0aGlzLnBhcmVudHNTY3JvbGxPZmZzZXQpXG4gICAgKVxuXG4gICAgZW11bGF0aW9uRHJhZ2dhYmxlLmRyYWdTdGFydChldmVudClcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBkcmFnRW5kQWN0aW9uKCkge1xuICAgIHRoaXMucGluUG9zaXRpb24odGhpcy5wb3NpdGlvbilcbiAgfVxuXG4gIGdldFJlY3RhbmdsZSgpIHtcbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZSh0aGlzLnBvc2l0aW9uLCB0aGlzLmdldFNpemUoKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgaWYgKHRoaXMuYm91bmRpbmcucmVmcmVzaCkge1xuICAgICAgdGhpcy5ib3VuZGluZy5yZWZyZXNoKClcbiAgICB9XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuaGFuZGxlci5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQpXG4gICAgdGhpcy5oYW5kbGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydClcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgdGhpcy5fbmF0aXZlRHJhZ1N0YXJ0KVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIHRoaXMuX25hdGl2ZURyYWdPdmVyKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzLl9uYXRpdmVEcm9wKVxuICAgIHRoaXMucmVzZXRFbWl0dGVyKClcblxuICAgIGNvbnN0IGluZGV4ID0gZHJhZ2dhYmxlcy5pbmRleE9mKHRoaXMpXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIGRyYWdnYWJsZXMuc3BsaWNlKGluZGV4LCAxKVxuICAgIH1cbiAgfVxuXG4gIGdldCBjb250YWluZXIoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9jb250YWluZXIgPSB0aGlzLl9jb250YWluZXIgfHwgdGhpcy5vcHRpb25zLmNvbnRhaW5lciB8fCB0aGlzLm9wdGlvbnMucGFyZW50IHx8IHRoaXMuZWxlbWVudC5vZmZzZXRQYXJlbnQpXG4gIH1cblxuICBnZXQgaGFuZGxlcigpIHtcbiAgICBpZiAoIXRoaXMuX2hhbmRsZXIpIHtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmhhbmRsZXIgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZXIgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLm9wdGlvbnMuaGFuZGxlcikgfHwgdGhpcy5lbGVtZW50XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9oYW5kbGVyID0gdGhpcy5vcHRpb25zLmhhbmRsZXIgfHwgdGhpcy5lbGVtZW50XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2hhbmRsZXJcbiAgfVxuXG4gIGdldCBzdG9wUHJvcGFnYXRpb25PbkRyYWdTdGFydCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLnN0b3BQcm9wYWdhdGlvbk9uRHJhZ1N0YXJ0IHx8IGZhbHNlXG4gIH1cblxuICBnZXQgbmF0aXZlRHJhZ0FuZERyb3AoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5uYXRpdmVEcmFnQW5kRHJvcCB8fCBmYWxzZVxuICB9XG5cbiAgZ2V0IGVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcE9uVG91Y2goKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5lbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3BPblRvdWNoIHx8IGZhbHNlXG4gIH1cblxuICBnZXQgc2hvdWxkUmVtb3ZlWmVyb1RyYW5zbGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLnNob3VsZFJlbW92ZVplcm9UcmFuc2xhdGUgfHwgZmFsc2VcbiAgfVxuXG4gIGdldCB0b3VjaERyYWdnaW5nVGhyZXNob2xkKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMudG91Y2hEcmFnZ2luZ1RocmVzaG9sZCB8fCAwXG4gIH1cblxuICBnZXQgZHJhZ092ZXJUaHJvdHRsZUR1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZHJhZ092ZXJUaHJvdHRsZUR1cmF0aW9uIHx8IDE2XG4gIH1cblxuICBnZXQgaXNDb25zaWRlclRyYW5zZm9ybU9mZnNldCAoKSB7XG4gICAgdGhpcy5vcHRpb25zLmNvbnNpZGVyVHJhbnNmb3JtT2Zmc2V0IHx8IGZhbHNlXG4gIH1cblxuICBnZXQgd2luZG93U2Nyb2xsUG9pbnQoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh3aW5kb3cuc2Nyb2xsWCwgd2luZG93LnNjcm9sbFkpXG4gIH1cblxuICBnZXQgc2Nyb2xsUm9vdENvbnRhaW5lcigpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLnNjcm9sbFJvb3RDb250YWluZXIgfHwgdGhpcy5jb250YWluZXJcbiAgfVxuXG4gIGdldCBzY3JvbGxFbGVtZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5fY2FjaGVkU2Nyb2xsRWxlbWVudHNcbiAgICAgID8gdGhpcy5fY2FjaGVkU2Nyb2xsRWxlbWVudHNcbiAgICAgIDogKHRoaXMuX2NhY2hlZFNjcm9sbEVsZW1lbnRzID0gZ2V0UGFyZW50c0NoYWluKHRoaXMuZWxlbWVudCwgdGhpcy5zY3JvbGxSb290Q29udGFpbmVyKSlcbiAgfVxuXG4gIGdldCBzY3JvbGxFbGVtZW50c09mZnNldCgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KFxuICAgICAgdGhpcy5zY3JvbGxFbGVtZW50cy5yZWR1Y2UoKHN1bSwgcCkgPT4gc3VtICsgcC5zY3JvbGxMZWZ0LCAwKSxcbiAgICAgIHRoaXMuc2Nyb2xsRWxlbWVudHMucmVkdWNlKChzdW0sIHApID0+IHN1bSArIHAuc2Nyb2xsVG9wLCAwKVxuICAgIClcbiAgfVxuXG4gIGdldCBwYXJlbnRzKCkge1xuICAgIHJldHVybiB0aGlzLl9jYWNoZWRQYXJlbnRzXG4gICAgICA/IHRoaXMuX2NhY2hlZFBhcmVudHNcbiAgICAgIDogKHRoaXMuX2NhY2hlZFBhcmVudHMgPSBnZXRQYXJlbnRzQ2hhaW4odGhpcy5lbGVtZW50LCB0aGlzLmNvbnRhaW5lcikpXG4gIH1cblxuICBnZXQgcGFyZW50c1Njcm9sbE9mZnNldCgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KFxuICAgICAgdGhpcy5wYXJlbnRzLnJlZHVjZSgoc3VtLCBwKSA9PiBzdW0gKyBwLnNjcm9sbExlZnQsIDApLFxuICAgICAgdGhpcy5wYXJlbnRzLnJlZHVjZSgoc3VtLCBwKSA9PiBzdW0gKyBwLnNjcm9sbFRvcCwgMClcbiAgICApXG4gIH1cblxuICBnZXQgZW5hYmxlKCkge1xuICAgIHJldHVybiB0aGlzLl9lbmFibGVcbiAgfVxuXG4gIHNldCBlbmFibGUoZW5hYmxlKSB7XG4gICAgaWYgKGVuYWJsZSkge1xuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdlZS1kaXNhYmxlJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RyYWdlZS1kaXNhYmxlJylcbiAgICB9XG5cbiAgICB0aGlzLl9lbmFibGUgPSBlbmFibGVcbiAgfVxufVxuXG5EcmFnZ2FibGUuZW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuRHJhZ2dhYmxlLmVtaXR0ZXIub24oJ2RyYWdnYWJsZTpjcmVhdGUnLCBhZGRUb0RlZmF1bHRTY29wZSlcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQsIGltbWVkaWF0ZSkge1xuICBsZXQgdGltZW91dFxuXG4gIHJldHVybiBmdW5jdGlvbiBleGVjdXRlZEZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzXG4gICAgY29uc3QgYXJncyA9IGFyZ3VtZW50c1xuXG4gICAgY29uc3QgbGF0ZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgIHRpbWVvdXQgPSBudWxsXG4gICAgICBpZiAoIWltbWVkaWF0ZSkgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKVxuICAgIH1cblxuICAgIGNvbnN0IGNhbGxOb3cgPSBpbW1lZGlhdGUgJiYgIXRpbWVvdXRcblxuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KVxuXG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpXG5cbiAgICBpZiAoY2FsbE5vdykgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKVxuICB9XG59XG4iLCJpbXBvcnQgZGVib3VuY2UgZnJvbSAnLi91dGlscy9kZWJvdW5jZSdcbmltcG9ydCByZW1vdmVJdGVtIGZyb20gJy4vdXRpbHMvcmVtb3ZlLWFycmF5LWl0ZW0nXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnRFbWl0dGVyJ1xuaW1wb3J0IHtcbiAgZ2V0RGlzdGFuY2UsXG4gIGluZGV4T2ZOZWFyZXN0UG9pbnRcbn0gZnJvbSAnLi9nZW9tZXRyeS9kaXN0YW5jZXMnXG5cbmltcG9ydCBEcmFnZ2FibGUgZnJvbSAnLi9kcmFnZ2FibGUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3QgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvcihkcmFnZ2FibGVzLCBvcHRpb25zPXt9KSB7XG4gICAgc3VwZXIob3B0aW9ucylcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHRpbWVFbmQ6IDIwMCxcbiAgICAgIHRpbWVFeGNhbmdlOiA0MDAsXG4gICAgICByYWRpdXM6IDMwXG4gICAgfSwgb3B0aW9ucylcblxuICAgIHRoaXMuY29udGFpbmVyID0gb3B0aW9ucy5jb250YWluZXJcbiAgICB0aGlzLmRyYWdnYWJsZXMgPSBkcmFnZ2FibGVzXG4gICAgdGhpcy5jaGFuZ2VkRHVyaW5nSXRlcmF0aW9uID0gZmFsc2VcblxuICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoZGVib3VuY2UodGhpcy5vblJlc2l6ZS5iaW5kKHRoaXMpLCAxMDApKVxuXG4gICAgaWYgKHRoaXMuY29udGFpbmVyKSB7XG4gICAgICB0aGlzLnJlc2l6ZU9ic2VydmVyLm9ic2VydmUodGhpcy5jb250YWluZXIpXG4gICAgfVxuXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIG9uUmVzaXplKCkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMucmVvcmRlck9uQ2hhbmdlKSB0aGlzLnJlc2V0KClcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBpZighZHJhZ2dhYmxlLmlzRHJhZ2dpbmcpIHtcbiAgICAgICAgZHJhZ2dhYmxlLnN0YXJ0UG9zaXRpb25pbmcoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuX2VuYWJsZSA9IHRydWVcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB0aGlzLmluaXREcmFnZ2FibGUoZHJhZ2dhYmxlKSlcbiAgfVxuXG4gIGluaXREcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgZHJhZ2dhYmxlLmVuYWJsZSA9IHRoaXMuX2VuYWJsZVxuICAgIGRyYWdnYWJsZS5vbignZHJhZzptb3ZlJywgKCkgPT4gdGhpcy5vbk1vdmUoZHJhZ2dhYmxlKSlcbiAgICBkcmFnZ2FibGUuZHJhZ0VuZEFjdGlvbiA9ICgpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5waW5Qb3NpdGlvbihkcmFnZ2FibGUucGlubmVkUG9zaXRpb24sIHRoaXMub3B0aW9ucy50aW1lRW5kKVxuICAgICAgdGhpcy5vbkVuZChkcmFnZ2FibGUpXG4gICAgfVxuICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZShkcmFnZ2FibGUuZWxlbWVudClcbiAgfVxuXG4gIHJlbGVhc2VEcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgdGhpcy5yZXNpemVPYnNlcnZlci51bm9ic2VydmUoZHJhZ2dhYmxlLmVsZW1lbnQpXG4gICAgZHJhZ2dhYmxlLnJlc2V0T24oJ2RyYWc6ZW5kJylcbiAgICBkcmFnZ2FibGUucmVzZXRPbignZHJhZzptb3ZlJylcbiAgICByZW1vdmVJdGVtKHRoaXMuZHJhZ2dhYmxlcywgZHJhZ2dhYmxlKVxuICB9XG5cbiAgb25Nb3ZlKGRyYWdnYWJsZSkge1xuICAgIGlmICh0aGlzLnN3YXBwaW5nRGlzYWJsZWQpIHJldHVyblxuXG4gICAgY29uc3Qgc29ydGVkRHJhZ2dhYmxlcyA9IHRoaXMuZ2V0U29ydGVkRHJhZ2dhYmxlcygpXG4gICAgY29uc3QgcGlubmVkUG9zaXRpb25zID0gc29ydGVkRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uKVxuXG4gICAgY29uc3QgY3VycmVudEluZGV4ID0gc29ydGVkRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSlcbiAgICBjb25zdCB0YXJnZXRJbmRleCA9IGluZGV4T2ZOZWFyZXN0UG9pbnQocGlubmVkUG9zaXRpb25zLCBkcmFnZ2FibGUucG9zaXRpb24sIHRoaXMub3B0aW9ucy5yYWRpdXMsIHRoaXMuZGlzdGFuY2VGdW5jKVxuXG4gICAgaWYgKHRhcmdldEluZGV4ICE9PSAtMSAmJiBjdXJyZW50SW5kZXggIT09IHRhcmdldEluZGV4KSB7XG4gICAgICBpZiAodGFyZ2V0SW5kZXggPCBjdXJyZW50SW5kZXgpIHtcbiAgICAgICAgZm9yIChsZXQgaT10YXJnZXRJbmRleDsgaTxjdXJyZW50SW5kZXg7IGkrKykge1xuICAgICAgICAgIHNvcnRlZERyYWdnYWJsZXNbaV0ucGluUG9zaXRpb24ocGlubmVkUG9zaXRpb25zW2krMV0sIHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChsZXQgaT1jdXJyZW50SW5kZXg7IGk8dGFyZ2V0SW5kZXg7IGkrKykge1xuICAgICAgICAgIHNvcnRlZERyYWdnYWJsZXNbaSsxXS5waW5Qb3NpdGlvbihwaW5uZWRQb3NpdGlvbnNbaV0sIHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZHJhZ2dhYmxlLm5hdGl2ZURyYWdBbmREcm9wKSB7XG4gICAgICAgIGRyYWdnYWJsZS5waW5Qb3NpdGlvbihwaW5uZWRQb3NpdGlvbnNbdGFyZ2V0SW5kZXhdKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uID0gcGlubmVkUG9zaXRpb25zW3RhcmdldEluZGV4XVxuICAgICAgfVxuXG4gICAgICB0aGlzLmNoYW5nZWREdXJpbmdJdGVyYXRpb24gPSB0cnVlXG4gICAgfVxuICB9XG5cbiAgb25FbmQoZHJhZ2dhYmxlKSB7XG4gICAgaWYgKHRoaXMuY2hhbmdlZER1cmluZ0l0ZXJhdGlvbikge1xuICAgICAgdGhpcy5lbWl0KCdsaXN0OmNoYW5nZScpXG4gICAgICB0aGlzLmNoYW5nZWREdXJpbmdJdGVyYXRpb24gPSBmYWxzZVxuXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnJlb3JkZXJPbkNoYW5nZSAmJiB0aGlzLm9wdGlvbnMuY29udGFpbmVyKSB7XG4gICAgICAgIHRoaXMucmVvcmRlckVsZW1lbnRzKGRyYWdnYWJsZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW9yZGVyRWxlbWVudHMobW92ZWREcmFnZ2FibGUpIHtcbiAgICBjb25zdCBzb3J0ZWREcmFnZ2FibGVzID0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcbiAgICBjb25zdCBpbmRleCA9IHNvcnRlZERyYWdnYWJsZXMuaW5kZXhPZihtb3ZlZERyYWdnYWJsZSlcbiAgICBjb25zdCBuZXh0ID0gc29ydGVkRHJhZ2dhYmxlc1tpbmRleCArIDFdXG5cbiAgICB0aGlzLnJlc2V0KClcblxuICAgIGlmIChuZXh0KSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5pbnNlcnRCZWZvcmUobW92ZWREcmFnZ2FibGUuZWxlbWVudCwgbmV4dC5lbGVtZW50KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChtb3ZlZERyYWdnYWJsZS5lbGVtZW50KVxuICAgIH1cblxuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkKSA9PiBkLnN0YXJ0UG9zaXRpb25pbmcoKSlcbiAgICB0aGlzLmVtaXQoJ2xpc3Q6cmVvcmRlcmVkJylcbiAgfVxuXG4gIGdldEN1cnJlbnRQaW5uZWRQb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uLmNsb25lKCkpXG4gIH1cblxuICBnZXRTb3J0ZWREcmFnZ2FibGVzKCkge1xuICAgIHJldHVybiB0aGlzLmRyYWdnYWJsZXMuc29ydCh0aGlzLnNvcnRpbmcuYmluZCh0aGlzKSlcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5yZXNldFBvc2l0aW9uVG9Jbml0aWFsKCkpXG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5yZWZyZXNoKCkpXG4gIH1cblxuICBhZGQoZHJhZ2dhYmxlcykge1xuICAgIGlmICghKGRyYWdnYWJsZXMgaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICAgIGRyYWdnYWJsZXMgPSBbZHJhZ2dhYmxlc11cbiAgICB9XG4gICAgZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHRoaXMuaW5pdERyYWdnYWJsZShkcmFnZ2FibGUpKVxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IHRoaXMuZHJhZ2dhYmxlcy5jb25jYXQoZHJhZ2dhYmxlcylcbiAgfVxuXG4gIHJlbW92ZShkcmFnZ2FibGVzKSB7XG4gICAgY29uc3QgaW5pdGlhbFBvc2l0aW9ucyA9IHRoaXMuZHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLmluaXRpYWxQb3NpdGlvbilcbiAgICBjb25zdCBsaXN0ID0gW11cbiAgICBjb25zdCBzb3J0ZWREcmFnZ2FibGVzID0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcblxuICAgIGlmICghKGRyYWdnYWJsZXMgaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICAgIGRyYWdnYWJsZXMgPSBbZHJhZ2dhYmxlc11cbiAgICB9XG5cbiAgICBkcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gdGhpcy5yZWxlYXNlRHJhZ2dhYmxlKGRyYWdnYWJsZSkpXG5cbiAgICBsZXQgaiA9IDBcbiAgICBzb3J0ZWREcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgaWYgKHRoaXMuZHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkgIT09IC0xKSB7XG4gICAgICAgIGlmIChkcmFnZ2FibGUucGlubmVkUG9zaXRpb24gIT09IGluaXRpYWxQb3NpdGlvbnNbal0pIHtcbiAgICAgICAgICBkcmFnZ2FibGUucGluUG9zaXRpb24oaW5pdGlhbFBvc2l0aW9uc1tqXSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICB9XG4gICAgICAgIGRyYWdnYWJsZS5pbml0aWFsUG9zaXRpb24gPSBpbml0aWFsUG9zaXRpb25zW2pdXG4gICAgICAgIGorK1xuICAgICAgICBsaXN0LnB1c2goZHJhZ2dhYmxlKVxuICAgICAgfVxuICAgIH0pXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gbGlzdFxuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5yZW1vdmUodGhpcy5kcmFnZ2FibGVzLnNsaWNlKCkpXG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5kZXN0cm95KCkpXG4gICAgaWYgKHRoaXMuY29udGFpbmVyKSB7XG4gICAgICB0aGlzLnJlc2l6ZU9ic2VydmVyLnVub2JzZXJ2ZSh0aGlzLmNvbnRhaW5lcilcbiAgICB9XG4gIH1cblxuICBzb3J0aW5nKGRyYWdnYWJsZUEsIGRyYWdnYWJsZUIpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLnNvcnRpbmcpIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuc29ydGluZyhkcmFnZ2FibGVBLCBkcmFnZ2FibGVCKVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZHJhZ2dhYmxlQS5waW5uZWRQb3NpdGlvbi55IDwgZHJhZ2dhYmxlQi5waW5uZWRQb3NpdGlvbi55KSByZXR1cm4gLTFcbiAgICAgIGlmIChkcmFnZ2FibGVBLnBpbm5lZFBvc2l0aW9uLnkgPiBkcmFnZ2FibGVCLnBpbm5lZFBvc2l0aW9uLnkpIHJldHVybiAxXG4gICAgICBpZiAoZHJhZ2dhYmxlQS5waW5uZWRQb3NpdGlvbi54IDwgZHJhZ2dhYmxlQi5waW5uZWRQb3NpdGlvbi54KSByZXR1cm4gLTFcbiAgICAgIGlmIChkcmFnZ2FibGVBLnBpbm5lZFBvc2l0aW9uLnggPiBkcmFnZ2FibGVCLnBpbm5lZFBvc2l0aW9uLngpIHJldHVybiAxXG4gICAgICByZXR1cm4gMFxuICAgIH1cbiAgfVxuXG4gIGdldCBkaXN0YW5jZUZ1bmMoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5nZXREaXN0YW5jZSB8fCBnZXREaXN0YW5jZVxuICB9XG5cbiAgZ2V0IHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDdXJyZW50UGlubmVkUG9zaXRpb25zKClcbiAgfVxuXG4gIHNldCBwb3NpdGlvbnMocG9zaXRpb25zKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9ICd3cm9uZyBhcnJheSBsZW5ndGgnXG4gICAgaWYgKHBvc2l0aW9ucy5sZW5ndGggPT09IHRoaXMuZHJhZ2dhYmxlcy5sZW5ndGgpIHtcbiAgICAgIHBvc2l0aW9ucy5mb3JFYWNoKChwb2ludCwgaSkgPT4ge1xuICAgICAgICB0aGlzLmRyYWdnYWJsZXNbaV0ucGluUG9zaXRpb24ocG9pbnQpXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBtZXNzYWdlXG4gICAgfVxuICB9XG5cbiAgZ2V0IGVuYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlXG4gIH1cblxuICBzZXQgZW5hYmxlKGVuYWJsZSkge1xuICAgIHRoaXMuX2VuYWJsZSA9IGVuYWJsZVxuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5lbmFibGUgPSBlbmFibGVcbiAgICB9KVxuICB9XG5cbiAgZ2V0IHN3YXBwaW5nRGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N3YXBwaW5nRGlzYWJsZWRcbiAgfVxuXG4gIHNldCBzd2FwcGluZ0Rpc2FibGVkKGRpc2FibGVkKSB7XG4gICAgdGhpcy5fc3dhcHBpbmdEaXNhYmxlZCA9IGRpc2FibGVkXG4gIH1cbn1cbiIsImltcG9ydCBMaXN0IGZyb20gJy4vbGlzdCdcbmltcG9ydCB7IGluZGV4T2ZOZWFyZXN0UG9pbnQsIGdldFlEaWZmZXJlbmNlIH0gZnJvbSAnLi9nZW9tZXRyeS9kaXN0YW5jZXMnXG5pbXBvcnQgUG9pbnQgZnJvbSAnLi9nZW9tZXRyeS9wb2ludCdcblxuaW1wb3J0IERyYWdnYWJsZSBmcm9tICcuL2RyYWdnYWJsZSdcblxuY29uc3QgYXJyYXlNb3ZlID0gKGFycmF5LCBmcm9tLCB0bykgPT4ge1xuICBhcnJheS5zcGxpY2UodG8gPCAwID8gYXJyYXkubGVuZ3RoICsgdG8gOiB0bywgMCwgYXJyYXkuc3BsaWNlKGZyb20sIDEpWzBdKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdWJibGluZ0xpc3QgZXh0ZW5kcyBMaXN0IHtcbiAgYXV0b0RldGVjdFZlcnRpY2FsR2FwKCkge1xuICAgIGlmICghdGhpcy5fdmVydGljYWxHYXAgJiYgIXRoaXMub3B0aW9ucy52ZXJ0aWNhbEdhcCAmJiB0aGlzLmRyYWdnYWJsZXMubGVuZ3RoID49IDIpIHtcbiAgICAgIGNvbnN0IHNvcnRlZCA9IHRoaXMuZ2V0U29ydGVkRHJhZ2dhYmxlcygpXG4gICAgICB0aGlzLl92ZXJ0aWNhbEdhcCA9IHNvcnRlZFsxXS5waW5uZWRQb3NpdGlvbi55IC0gc29ydGVkWzBdLnBpbm5lZFBvc2l0aW9uLnkgLSBzb3J0ZWRbMF0uZ2V0U2l6ZSgpLnlcbiAgICB9XG4gIH1cblxuICBhdXRvRGV0ZWN0U3RhcnRQb3NpdGlvbigpIHtcbiAgICBpZiAodGhpcy5kcmFnZ2FibGVzLmxlbmd0aCA+PSAxICYmICF0aGlzLnN0YXJ0UG9zaXRpb24pIHtcbiAgICAgIHRoaXMuc3RhcnRQb3NpdGlvbiA9IHRoaXMuZHJhZ2dhYmxlc1swXS5waW5uZWRQb3NpdGlvblxuICAgIH1cbiAgfVxuXG4gIGluaXREcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgc3VwZXIuaW5pdERyYWdnYWJsZShkcmFnZ2FibGUpXG4gICAgZHJhZ2dhYmxlLm9uKCdkcmFnOnN0YXJ0JywgKCkgPT4gdGhpcy5vbkRyYWdTdGFydChkcmFnZ2FibGUpKVxuICB9XG5cbiAgb25EcmFnU3RhcnQoZHJhZ2dhYmxlKSB7XG4gICAgdGhpcy5hdXRvRGV0ZWN0VmVydGljYWxHYXAoKVxuICAgIHRoaXMuYXV0b0RldGVjdFN0YXJ0UG9zaXRpb24oKVxuICAgIHRoaXMuY2FjaGVkU29ydGVkRHJhZ2dhYmxlcyA9IHRoaXMuZ2V0U29ydGVkRHJhZ2dhYmxlcygpXG4gICAgdGhpcy5pbmRleE9mQWN0aXZlRHJhZ2dhYmxlID0gdGhpcy5jYWNoZWRTb3J0ZWREcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKVxuICB9XG5cbiAgb25Nb3ZlKGRyYWdnYWJsZSkge1xuICAgIGlmICh0aGlzLnN3YXBwaW5nRGlzYWJsZWQpIHJldHVyblxuXG4gICAgY29uc3QgcHJldkRyYWdnYWJsZSA9IHRoaXMuY2FjaGVkU29ydGVkRHJhZ2dhYmxlc1t0aGlzLmluZGV4T2ZBY3RpdmVEcmFnZ2FibGUgLSAxXVxuICAgIGNvbnN0IG5leHREcmFnZ2FibGUgPSB0aGlzLmNhY2hlZFNvcnRlZERyYWdnYWJsZXNbdGhpcy5pbmRleE9mQWN0aXZlRHJhZ2dhYmxlICsgMV1cbiAgICBjb25zdCBjdXJyZW50UG9zaXRpb24gPSBkcmFnZ2FibGUucGlubmVkUG9zaXRpb25cblxuICAgIGxldCBjdXJyZW50T3JkZXJcbiAgICBsZXQgdGFyZ2V0SW5kZXhcblxuICAgIGlmKGRyYWdnYWJsZS51cERpcmVjdGlvbiAmJiBwcmV2RHJhZ2dhYmxlKSB7XG4gICAgICBjdXJyZW50T3JkZXIgPSBbcHJldkRyYWdnYWJsZSwgZHJhZ2dhYmxlXS5tYXAoKGQpID0+IGQucGlubmVkUG9zaXRpb24pXG4gICAgICB0YXJnZXRJbmRleCA9IGluZGV4T2ZOZWFyZXN0UG9pbnQoY3VycmVudE9yZGVyLCBkcmFnZ2FibGUucG9zaXRpb24sIDEwMDAwLCB0aGlzLmRpc3RhbmNlRnVuYylcblxuICAgICAgaWYgKHRhcmdldEluZGV4ID09PSAwKSB7XG4gICAgICAgIGlmKGRyYWdnYWJsZS5zaG91bGRVc2VOYXRpdmVEcmFnQW5kRHJvcCgpKSB7XG4gICAgICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKHByZXZEcmFnZ2FibGUucGlubmVkUG9zaXRpb24pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uID0gcHJldkRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbi5jbG9uZSgpXG4gICAgICAgIH1cbiAgICAgICAgcHJldkRyYWdnYWJsZS5waW5Qb3NpdGlvbihuZXcgUG9pbnQoXG4gICAgICAgICAgY3VycmVudFBvc2l0aW9uLngsXG4gICAgICAgICAgZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uLnkgKyBkcmFnZ2FibGUuZ2V0U2l6ZSgpLnkgKyB0aGlzLnZlcnRpY2FsR2FwXG4gICAgICAgICksIHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSlcbiAgICAgICAgYXJyYXlNb3ZlKHRoaXMuY2FjaGVkU29ydGVkRHJhZ2dhYmxlcywgdGhpcy5pbmRleE9mQWN0aXZlRHJhZ2dhYmxlLS0sIHRoaXMuaW5kZXhPZkFjdGl2ZURyYWdnYWJsZSlcbiAgICAgICAgdGhpcy5vbk1vdmUoZHJhZ2dhYmxlKVxuICAgICAgICB0aGlzLmNoYW5nZWREdXJpbmdJdGVyYXRpb24gPSB0cnVlXG4gICAgICB9XG4gICAgfSBlbHNlIGlmKGRyYWdnYWJsZS5kb3duRGlyZWN0aW9uICYmIG5leHREcmFnZ2FibGUpIHtcbiAgICAgIGN1cnJlbnRPcmRlciA9IFtkcmFnZ2FibGUsIG5leHREcmFnZ2FibGVdLm1hcCgoZCkgPT4gZC5waW5uZWRQb3NpdGlvbilcbiAgICAgIHRhcmdldEluZGV4ID0gaW5kZXhPZk5lYXJlc3RQb2ludChjdXJyZW50T3JkZXIsIGRyYWdnYWJsZS5wb3NpdGlvbiwgMTAwMDAsIHRoaXMuZGlzdGFuY2VGdW5jKVxuXG4gICAgICBpZih0YXJnZXRJbmRleCA9PT0gMSkge1xuICAgICAgICBuZXh0RHJhZ2dhYmxlLnBpblBvc2l0aW9uKGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbiwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICBjb25zdCBkcmFnZ2FibGVOZXdQb3NpdGlvbiA9IG5ldyBQb2ludChcbiAgICAgICAgICBuZXh0RHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uLngsXG4gICAgICAgICAgbmV4dERyYWdnYWJsZS5waW5uZWRQb3NpdGlvbi55ICsgbmV4dERyYWdnYWJsZS5nZXRTaXplKCkueSArIHRoaXMudmVydGljYWxHYXBcbiAgICAgICAgKVxuICAgICAgICBpZihkcmFnZ2FibGUuc2hvdWxkVXNlTmF0aXZlRHJhZ0FuZERyb3AoKSkge1xuICAgICAgICAgIGRyYWdnYWJsZS5waW5Qb3NpdGlvbihkcmFnZ2FibGVOZXdQb3NpdGlvbilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24gPSBkcmFnZ2FibGVOZXdQb3NpdGlvblxuICAgICAgICB9XG4gICAgICAgIGFycmF5TW92ZSh0aGlzLmNhY2hlZFNvcnRlZERyYWdnYWJsZXMsIHRoaXMuaW5kZXhPZkFjdGl2ZURyYWdnYWJsZSsrLCB0aGlzLmluZGV4T2ZBY3RpdmVEcmFnZ2FibGUpXG4gICAgICAgIHRoaXMub25Nb3ZlKGRyYWdnYWJsZSlcbiAgICAgICAgdGhpcy5jaGFuZ2VkRHVyaW5nSXRlcmF0aW9uID0gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGJ1YmJsaW5nKHNvcnRlZERyYWdnYWJsZXMsIGN1cnJlbnREcmFnZ2FibGUpIHtcbiAgICBjb25zdCBjdXJyZW50UG9zaXRpb24gPSB0aGlzLnN0YXJ0UG9zaXRpb24uY2xvbmUoKVxuICAgIHNvcnRlZERyYWdnYWJsZXMgfHw9IHRoaXMuZ2V0U29ydGVkRHJhZ2dhYmxlcygpXG5cbiAgICBzb3J0ZWREcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgaWYgKCFkcmFnZ2FibGUucGlubmVkUG9zaXRpb24uY29tcGFyZShjdXJyZW50UG9zaXRpb24pKSB7XG4gICAgICAgIGlmIChkcmFnZ2FibGUgPT09IGN1cnJlbnREcmFnZ2FibGUgJiYgIWN1cnJlbnREcmFnZ2FibGUuc2hvdWxkVXNlTmF0aXZlRHJhZ0FuZERyb3AoKSkge1xuICAgICAgICAgIGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbiA9IGN1cnJlbnRQb3NpdGlvbi5jbG9uZSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKGN1cnJlbnRQb3NpdGlvbiwgKGRyYWdnYWJsZSA9PT0gY3VycmVudERyYWdnYWJsZSkgPyAwIDogdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGN1cnJlbnRQb3NpdGlvbi55ID0gY3VycmVudFBvc2l0aW9uLnkgKyBkcmFnZ2FibGUuZ2V0U2l6ZSgpLnkgKyB0aGlzLnZlcnRpY2FsR2FwXG4gICAgfSlcbiAgfVxuXG4gIHJlbW92ZShkcmFnZ2FibGVzKSB7XG4gICAgaWYgKCEoZHJhZ2dhYmxlcyBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgZHJhZ2dhYmxlcyA9IFtkcmFnZ2FibGVzXVxuICAgIH1cblxuICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB0aGlzLnJlbGVhc2VEcmFnZ2FibGUoZHJhZ2dhYmxlKSlcbiAgICB0aGlzLmRyYWdnYWJsZXMgPSB0aGlzLmRyYWdnYWJsZXMuZmlsdGVyKChkKSA9PiAhZHJhZ2dhYmxlcy5pbmNsdWRlcyhkKSlcblxuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkKSA9PiBkLnN0YXJ0UG9zaXRpb25pbmcoKSlcblxuICAgIGlmKHRoaXMuZHJhZ2dhYmxlcy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmF1dG9EZXRlY3RWZXJ0aWNhbEdhcCgpXG4gICAgICB0aGlzLmF1dG9EZXRlY3RTdGFydFBvc2l0aW9uKClcbiAgICAgIHRoaXMuYnViYmxpbmcoKVxuICAgIH1cbiAgfVxuXG4gIGdldCBkaXN0YW5jZUZ1bmMoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5nZXREaXN0YW5jZSB8fCBnZXRZRGlmZmVyZW5jZVxuICB9XG5cbiAgZ2V0IHZlcnRpY2FsR2FwKCkge1xuICAgIGlmKHRoaXMub3B0aW9ucy52ZXJ0aWNhbEdhcCkge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy52ZXJ0aWNhbEdhcFxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmF1dG9EZXRlY3RWZXJ0aWNhbEdhcCgpXG4gICAgICByZXR1cm4gdGhpcy5fdmVydGljYWxHYXAgfHwgMFxuICAgIH1cbiAgfVxuXG4gIHNldCB2ZXJ0aWNhbEdhcChnYXBWYWx1ZSkge1xuICAgIHRoaXMub3B0aW9ucy52ZXJ0aWNhbEdhcCA9IGdhcFZhbHVlXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJnZXRQYXJlbnRzQ2hhaW4iLCJjaGlsZEVsZW1lbnQiLCJyb290RWxlbWVudCIsImNoYWluIiwiZWxlbWVudCIsInBhcmVudE5vZGUiLCJ1bnNoaWZ0IiwiUG9pbnQiLCJjb25zdHJ1Y3RvciIsIngiLCJ5IiwiYWRkIiwicCIsInN1YiIsIm11bHQiLCJrIiwibmVnYXRpdmUiLCJjb21wYXJlIiwiY2xvbmUiLCJ0b1N0cmluZyIsImVsZW1lbnRPZmZzZXQiLCJwYXJlbnQiLCJvZmZzZXRQYXJlbnQiLCJvZmZzZXRMZWZ0IiwiY2xpZW50TGVmdCIsIm9mZnNldFRvcCIsImNsaWVudFRvcCIsImNvbnNpZGVyT2Zmc2V0RWxlbWVudHMiLCJwb3AiLCJyZWR1Y2UiLCJzdW0iLCJlbGVtZW50Qm91bmRpbmdPZmZzZXQiLCJlbGVtZW50UmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInBhcmVudFJlY3QiLCJsZWZ0IiwidG9wIiwiZWxlbWVudFNpemUiLCJ3aWR0aCIsImhlaWdodCIsIlJlY3RhbmdsZSIsInBvc2l0aW9uIiwic2l6ZSIsImdldFAxIiwiZ2V0UDIiLCJnZXRQMyIsImdldFA0IiwiZ2V0Q2VudGVyIiwib3IiLCJyZWN0IiwiTWF0aCIsIm1pbiIsIm1heCIsImFuZCIsImluY2x1ZGVQb2ludCIsImluY2x1ZGVSZWN0YW5nbGUiLCJyZWN0YW5nbGUiLCJtb3ZlVG9Cb3VuZCIsImF4aXMiLCJzZWxBeGlzIiwiY3Jvc3NSZWN0YW5nbGUiLCJ0aGlzQ2VudGVyIiwicmVjdENlbnRlciIsInNpZ24iLCJvZmZzZXQiLCJnZXRTcXVhcmUiLCJzdHlsZUFwcGx5IiwiZWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzdHlsZSIsImdyb3d0aCIsImdldE1pblNpZGUiLCJmcm9tRWxlbWVudCIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsImlzQ29uc2lkZXJUcmFuc2xhdGUiLCJFdmVudEVtaXR0ZXIiLCJvcHRpb25zIiwiZXZlbnRzIiwib24iLCJldmVudE5hbWUiLCJmbiIsIk9iamVjdCIsImVudHJpZXMiLCJlbWl0IiwiaW50ZXJydXB0ZWQiLCJhcmdzIiwic2xpY2UiLCJjYWxsIiwiZnVuYyIsImludGVycnVwdCIsInB1c2giLCJwcmVwZW5kT24iLCJ1bnN1YnNjcmliZSIsImluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsInJlc2V0RW1pdHRlciIsInJlc2V0T24iLCJhcnJheSIsInZhbCIsImkiLCJyYW5nZSIsInN0YXJ0Iiwic3RvcCIsInN0ZXAiLCJyZXN1bHQiLCJnZXREaXN0YW5jZSIsInAxIiwicDIiLCJkeCIsImR5Iiwic3FydCIsImdldFhEaWZmZXJlbmNlIiwiYWJzIiwiZ2V0WURpZmZlcmVuY2UiLCJ0cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5IiwicG93IiwiaW5kZXhPZk5lYXJlc3RQb2ludCIsImFyciIsInJhZGl1cyIsImdldERpc3RhbmNlRnVuYyIsInRlbXAiLCJkaXJlY3RDcm9zc2luZyIsIkwxUDEiLCJMMVAyIiwiTDJQMSIsIkwyUDIiLCJrMSIsImsyIiwiYjEiLCJiMiIsImJvdW5kVG9MaW5lIiwiQSIsIkIiLCJQIiwiQVAiLCJBQiIsImFiMiIsImFwX2FiIiwidCIsImdldFBvaW50T25MaW5lQnlMZW5naHQiLCJMUDEiLCJMUDIiLCJsZW5naHQiLCJwZXJjZW50IiwiYWRkUG9pbnRUb0JvdW5kUG9pbnRzIiwiYm91bmRwb2ludHMiLCJwb2ludCIsImlzUmlnaHQiLCJmaWx0ZXIiLCJiUG9pbnQiLCJCYXNpY1N0cmF0ZWd5IiwiYm91bmRSZWN0IiwiTm90Q3Jvc3NpbmdTdHJhdGVneSIsInBvc2l0aW9uaW5nIiwicmVjdGFuZ2xlTGlzdCIsImluZGV4ZXNPZk5ld3MiLCJzdGF0aWNSZWN0YW5nbGVJbmRleGVzIiwiaW5kZXhlcyIsIl9yZWN0IiwiZm9yRWFjaCIsInJlbW92YWJsZSIsImluZGV4T2ZTdGF0aWMiLCJzdGF0aWNSZWN0Iiwic29tZSIsInNvcnRpbmciLCJvZGxEcmFnZ2FibGVzTGlzdCIsIm5ld0RyYWdnYWJsZXMiLCJpbmRleE9mTmV3cyIsImRyYWdnYWJsZXMiLCJjb25jYXQiLCJkcmFnZ2FibGUiLCJGbG9hdExlZnRTdHJhdGVneSIsImFzc2lnbiIsInBhZGRpbmdUb3BMZWZ0IiwicGFkZGluZ0JvdHRvbVJpZ2h0IiwieUdhcEJldHdlZW5EcmFnZ2FibGVzIiwiZ2V0UG9zaXRpb24iLCJfaW5kZXhlc09mTmV3cyIsInJlY3RQMiIsImJvdW5kYXJ5UG9pbnRzIiwicmVjdEluZGV4IiwiaXNWYWxpZCIsIm5ld0xpc3QiLCJsaXN0T2xkUG9zaXRpb24iLCJtYXAiLCJuZXdEcmFnZ2FibGUiLCJGbG9hdFJpZ2h0U3RyYXRlZ3kiLCJwYWRkaW5nVG9wUmlnaHQiLCJwYWRkaW5nQm90dG9tTGVmdCIsInBhZGRpbmdCb3R0b21OZWdMZWZ0IiwiZ2V0QW5nbGVEaWZmIiwiYWxwaGEiLCJiZXRhIiwibWluQW5nbGUiLCJtYXhBbmdsZSIsIlBJIiwiZ2V0QW5nbGUiLCJkaWZmIiwibm9ybWFsaXplQW5nbGUiLCJhdGFuMiIsImJvdW5kQW5nbGUiLCJkbWluIiwiZG1heCIsImdldFBvaW50RnJvbVJhZGlhbFN5c3RlbSIsImFuZ2xlIiwiY2VudGVyIiwiY29zIiwic2luIiwiQm91bmQiLCJib3VuZCIsIl9zaXplIiwicmVmcmVzaCIsImJvdW5kaW5nIiwiaW5zdGFuY2UiLCJiaW5kIiwiQm91bmRUb1JlY3RhbmdsZSIsImNhbGNQb2ludCIsIkJvdW5kVG9FbGVtZW50IiwiY29udGFpbmVyIiwiQm91bmRUb0xpbmVYIiwic3RhcnRZIiwiZW5kWSIsIkJvdW5kVG9MaW5lWSIsInN0YXJ0WCIsImVuZFgiLCJCb3VuZFRvTGluZSIsInN0YXJ0UG9pbnQiLCJlbmRQb2ludCIsInNvbWVLIiwiY29zQmV0YSIsInNpbkJldGEiLCJwb2ludDIiLCJuZXdFbmRQb2ludCIsInBvaW50Q3Jvc3NpbmciLCJCb3VuZFRvQ2lyY2xlIiwiQm91bmRUb0FyYyIsInN0YXJ0QW5nbGUiLCJlbmRBbmdsZSIsIl9zdGFydEFuZ2xlIiwiX2VuZEFuZ2xlIiwiYWRkVG9EZWZhdWx0U2NvcGUiLCJ0YXJnZXQiLCJkZWZhdWx0U2NvcGUiLCJhZGRUYXJnZXQiLCJUYXJnZXQiLCJ0aW1lRW5kIiwidGltZUV4Y2FuZ2UiLCJwb3NpdGlvbmluZ1N0cmF0ZWd5Iiwic3RyYXRlZ3kiLCJnZXRSZWN0YW5nbGUiLCJ0YXJnZXRzIiwiZW1pdHRlciIsInN0YXJ0Qm91bmRpbmciLCJpbml0IiwiaW5kZXhlc09mTmV3Iiwib2xkRHJhZ2dhYmxlcyIsInJlY3RhbmdsZXMiLCJpbm5lckRyYWdnYWJsZXMiLCJzZXRQb3NpdGlvbiIsImNhdGNoRHJhZ2dhYmxlIiwidGFyZ2V0UmVjdGFuZ2xlIiwiZHJhZ2dhYmxlU3F1YXJlIiwiZ2V0U2l6ZSIsImRlc3Ryb3kiLCJzY29wZXMiLCJzY29wZSIsInJlbW92ZUl0ZW0iLCJvbkVuZCIsIm5ld0RyYWdnYWJsZXNJbmRleCIsImFkZFJlbW92ZU9uTW92ZSIsInRpbWUiLCJtb3ZlIiwiaW5pdGlhbFBvc2l0aW9uIiwicHVzaElubmVyRHJhZ2dhYmxlIiwicmVtb3ZlSGFuZGxlciIsInJlbW92ZSIsInJlc2V0IiwiZ2V0U29ydGVkRHJhZ2dhYmxlcyIsIl9jb250YWluZXIiLCJTY29wZSIsImRyYWdFbmRBY3Rpb24iLCJhZGREcmFnZ2FibGUiLCJzaG90VGFyZ2V0cyIsInNvcnQiLCJhIiwiYiIsInBpblBvc2l0aW9uIiwicG9zaXRpb25zIiwibWVzc2FnZSIsInRhcmdldEluZGV4ZXMiLCJjdXJyZW50U2NvcGUiLCJhZGREcmFnZ2FibGVUb1Njb3BlIiwiRHJhZ2dhYmxlIiwiYWRkVGFyZ2V0VG9TY29wZSIsInRocm90dGxlIiwid2FpdCIsImxhc3RUaW1lIiwiZXhlY3V0ZWRGdW5jdGlvbiIsImNvbnRleHQiLCJub3ciLCJEYXRlIiwiYXBwbHkiLCJ0aHJvdHRsZWREcmFnT3ZlciIsImNhbGxiYWNrIiwiZHVyYXRpb24iLCJ0aHJvdHRsZWRDYWxsYmFjayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJwYXNzaXZlRmFsc2UiLCJwYXNzaXZlIiwiaXNUb3VjaCIsIm5hdmlnYXRvciIsIm1heFRvdWNoUG9pbnRzIiwibW91c2VFdmVudHMiLCJlbmQiLCJ0b3VjaEV2ZW50cyIsInRyYW5zZm9ybVByb3BlcnR5IiwidHJhbnNpdGlvblByb3BlcnR5IiwiZ2V0VG91Y2hCeUlEIiwidG91Y2hJZCIsImNoYW5nZWRUb3VjaGVzIiwiaWRlbnRpZmllciIsInByZXZlbnREb3VibGVJbml0IiwiZXhpc3RpbmciLCJjb3B5U3R5bGVzIiwic291cmNlIiwiZGVzdGluYXRpb24iLCJjcyIsIndpbmRvdyIsImdldENvbXB1dGVkU3R5bGUiLCJrZXkiLCJjaGlsZHJlbiIsIl9lbmFibGUiLCJzdGFydFBvc2l0aW9uaW5nIiwic3RhcnRMaXN0ZW5pbmciLCJfc2V0RGVmYXVsdFRyYW5zaXRpb24iLCJpc0NvbnNpZGVyVHJhbnNmb3JtT2Zmc2V0IiwicGlubmVkUG9zaXRpb24iLCJfZHJhZ1N0YXJ0IiwiZHJhZ1N0YXJ0IiwiX2RyYWdNb3ZlIiwiZHJhZ01vdmUiLCJfZHJhZ0VuZCIsImRyYWdFbmQiLCJfbmF0aXZlRHJhZ1N0YXJ0IiwibmF0aXZlRHJhZ1N0YXJ0IiwiX25hdGl2ZURyYWdPdmVyIiwibmF0aXZlRHJhZ092ZXIiLCJkcmFnT3ZlclRocm90dGxlRHVyYXRpb24iLCJfbmF0aXZlRHJhZ0VuZCIsIm5hdGl2ZURyYWdFbmQiLCJfbmF0aXZlRHJvcCIsIm5hdGl2ZURyb3AiLCJfc2Nyb2xsIiwib25TY3JvbGwiLCJoYW5kbGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl90cmFuc2Zvcm1Qb3NpdGlvbiIsIl9zZXRUcmFuc2l0aW9uIiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25Dc3MiLCJ0ZXN0IiwicmVwbGFjZSIsIl9zZXRUcmFuc2xhdGUiLCJ0cmFuc2xhdGVDc3MiLCJ0cmFuc2Zvcm0iLCJzaG91bGRSZW1vdmVaZXJvVHJhbnNsYXRlIiwiaXNTaWxlbnQiLCJzaWxlbnQiLCJyZXNldFBvc2l0aW9uVG9Jbml0aWFsIiwicmVmcmVzaFBvc2l0aW9uIiwiZGV0ZXJtaW5lRGlyZWN0aW9uIiwiX3ByZXZpb3VzRGlyZWN0aW9uUG9zaXRpb24iLCJfc3RhcnRQb3NpdGlvbiIsImxlZnREaXJlY3Rpb24iLCJyaWdodERpcmVjdGlvbiIsInVwRGlyZWN0aW9uIiwiZG93bkRpcmVjdGlvbiIsInNlZW1zU2Nyb2xsaW5nIiwiX3N0YXJ0VG91Y2hUaW1lc3RhbXAiLCJ0b3VjaERyYWdnaW5nVGhyZXNob2xkIiwic2hvdWxkVXNlTmF0aXZlRHJhZ0FuZERyb3AiLCJpc1RvdWNoRXZlbnQiLCJuYXRpdmVEcmFnQW5kRHJvcCIsImVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcE9uVG91Y2giLCJzdG9wUHJvcGFnYXRpb25PbkRyYWdTdGFydCIsInN0b3BQcm9wYWdhdGlvbiIsIlRvdWNoRXZlbnQiLCJ0b3VjaFBvaW50IiwiX3N0YXJ0VG91Y2hQb2ludCIsInBhZ2VYIiwiY2xpZW50WCIsInBhZ2VZIiwiY2xpZW50WSIsIl90b3VjaElkIiwiX3N0YXJ0V2luZG93U2Nyb2xsUG9pbnQiLCJ3aW5kb3dTY3JvbGxQb2ludCIsIl9zdGFydFNjcm9sbEVsZW1lbnRzT2Zmc2V0Iiwic2Nyb2xsRWxlbWVudHNPZmZzZXQiLCJIVE1MSW5wdXRFbGVtZW50IiwiZm9jdXMiLCJfc3RhcnRQYXJlbnRzU2Nyb2xsT2Zmc2V0IiwicGFyZW50c1Njcm9sbE9mZnNldCIsImVtdWxhdGVPbkZpcnN0TW92ZSIsImNhbmNlbERyYWdnaW5nIiwiZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wIiwiY2FuY2VsRW11bGF0aW9uIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNjcm9sbEVsZW1lbnRzIiwidG91Y2giLCJpc0RyYWdnaW5nIiwiY2xhc3NMaXN0Iiwic2V0VGltZW91dCIsIl9ldmVudCIsImRhdGFUcmFuc2ZlciIsInNldERhdGEiLCJlZmZlY3RBbGxvd2VkIiwiZHJvcEVmZmVjdCIsInJlbW92ZUF0dHJpYnV0ZSIsImNvbnRhaW5lclJlY3QiLCJjbG9uZWRFbGVtZW50IiwiY2xvbmVOb2RlIiwiYm9keSIsImFwcGVuZENoaWxkIiwiZW11bGF0aW9uRHJhZ2dhYmxlIiwiZHJhZzptb3ZlIiwiY29udGFpbmVyUmVjdFBvaW50IiwiZHJhZzplbmQiLCJyZW1vdmVDaGlsZCIsIl9oYW5kbGVyIiwiY29uc2lkZXJUcmFuc2Zvcm1PZmZzZXQiLCJzY3JvbGxYIiwic2Nyb2xsWSIsInNjcm9sbFJvb3RDb250YWluZXIiLCJfY2FjaGVkU2Nyb2xsRWxlbWVudHMiLCJzY3JvbGxMZWZ0Iiwic2Nyb2xsVG9wIiwicGFyZW50cyIsIl9jYWNoZWRQYXJlbnRzIiwiZW5hYmxlIiwiZGVib3VuY2UiLCJpbW1lZGlhdGUiLCJ0aW1lb3V0IiwibGF0ZXIiLCJjbGVhclRpbWVvdXQiLCJMaXN0IiwiY2hhbmdlZER1cmluZ0l0ZXJhdGlvbiIsInJlc2l6ZU9ic2VydmVyIiwiUmVzaXplT2JzZXJ2ZXIiLCJvblJlc2l6ZSIsIm9ic2VydmUiLCJyZW9yZGVyT25DaGFuZ2UiLCJpbml0RHJhZ2dhYmxlIiwib25Nb3ZlIiwicmVsZWFzZURyYWdnYWJsZSIsInVub2JzZXJ2ZSIsInN3YXBwaW5nRGlzYWJsZWQiLCJzb3J0ZWREcmFnZ2FibGVzIiwicGlubmVkUG9zaXRpb25zIiwiY3VycmVudEluZGV4IiwidGFyZ2V0SW5kZXgiLCJkaXN0YW5jZUZ1bmMiLCJyZW9yZGVyRWxlbWVudHMiLCJtb3ZlZERyYWdnYWJsZSIsIm5leHQiLCJpbnNlcnRCZWZvcmUiLCJkIiwiZ2V0Q3VycmVudFBpbm5lZFBvc2l0aW9ucyIsIkFycmF5IiwiaW5pdGlhbFBvc2l0aW9ucyIsImxpc3QiLCJqIiwiY2xlYXIiLCJkcmFnZ2FibGVBIiwiZHJhZ2dhYmxlQiIsIl9zd2FwcGluZ0Rpc2FibGVkIiwiZGlzYWJsZWQiLCJhcnJheU1vdmUiLCJmcm9tIiwidG8iLCJCdWJibGluZ0xpc3QiLCJhdXRvRGV0ZWN0VmVydGljYWxHYXAiLCJfdmVydGljYWxHYXAiLCJ2ZXJ0aWNhbEdhcCIsInNvcnRlZCIsImF1dG9EZXRlY3RTdGFydFBvc2l0aW9uIiwic3RhcnRQb3NpdGlvbiIsIm9uRHJhZ1N0YXJ0IiwiY2FjaGVkU29ydGVkRHJhZ2dhYmxlcyIsImluZGV4T2ZBY3RpdmVEcmFnZ2FibGUiLCJwcmV2RHJhZ2dhYmxlIiwibmV4dERyYWdnYWJsZSIsImN1cnJlbnRQb3NpdGlvbiIsImN1cnJlbnRPcmRlciIsImRyYWdnYWJsZU5ld1Bvc2l0aW9uIiwiYnViYmxpbmciLCJjdXJyZW50RHJhZ2dhYmxlIiwiaW5jbHVkZXMiLCJnYXBWYWx1ZSJdLCJtYXBwaW5ncyI6Ijs7O0VBQWUsU0FBU0EsZUFBZUEsQ0FBQ0MsWUFBWSxFQUFFQyxXQUFXLEVBQUU7SUFDbEUsTUFBTUMsS0FBSyxHQUFHLEVBQUU7SUFDZixJQUFJQyxPQUFPLEdBQUdILFlBQVk7RUFFMUIsRUFBQSxPQUFNRyxPQUFPLENBQUNDLFVBQVUsSUFBSUQsT0FBTyxLQUFLRixXQUFXLEVBQUU7RUFDbkRDLElBQUFBLEtBQUssQ0FBQ0csT0FBTyxDQUFDRixPQUFPLENBQUNDLFVBQVUsQ0FBQztNQUNqQ0QsT0FBTyxHQUFHQSxPQUFPLENBQUNDLFVBQVU7RUFDOUI7RUFFQSxFQUFBLE9BQU9GLEtBQUs7RUFDZDs7RUNSQTtFQUNlLE1BQU1JLEtBQUssQ0FBQztFQUN6QjtFQUNGO0VBQ0E7RUFDQTtFQUNBO0VBQ0VDLEVBQUFBLFdBQVdBLENBQUNDLENBQUMsRUFBRUMs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
