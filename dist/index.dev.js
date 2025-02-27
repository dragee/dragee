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
        return new Point(element.offsetLeft, element.offsetTop);
      } else {
        const considerOffsetElements = [element, getParentsChain(element, parent).pop()];
        return new Point(considerOffsetElements.reduce((sum, p) => sum + p.offsetLeft, 0), considerOffsetElements.reduce((sum, p) => sum + p.offsetTop, 0));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZGV2LmpzIiwic291cmNlcyI6WyIuLi9zcmMvdXRpbHMvZ2V0LXBhcmVudHMtY2hhaW4uanMiLCIuLi9zcmMvZ2VvbWV0cnkvcG9pbnQuanMiLCIuLi9zcmMvZ2VvbWV0cnkvcmVjdGFuZ2xlLmpzIiwiLi4vc3JjL2V2ZW50RW1pdHRlci5qcyIsIi4uL3NyYy9nZW9tZXRyeS9kaXN0YW5jZXMuanMiLCIuLi9zcmMvZ2VvbWV0cnkvYm91bmRzLmpzIiwiLi4vc3JjL2dlb21ldHJ5L2FuZ2xlcy5qcyIsIi4uL3NyYy9ib3VuZGluZy5qcyIsIi4uL3NyYy91dGlscy9yZW1vdmUtYXJyYXktaXRlbS5qcyIsIi4uL3NyYy91dGlscy9yYW5nZS5qcyIsIi4uL3NyYy9wb3NpdGlvbmluZy5qcyIsIi4uL3NyYy90YXJnZXQuanMiLCIuLi9zcmMvc2NvcGUuanMiLCIuLi9zcmMvdXRpbHMvdGhyb3R0bGUuanMiLCIuLi9zcmMvZHJhZ2dhYmxlLmpzIiwiLi4vc3JjL3V0aWxzL2RlYm91bmNlLmpzIiwiLi4vc3JjL2xpc3QuanMiLCIuLi9zcmMvYnViYmxpbmdMaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFBhcmVudHNDaGFpbihjaGlsZEVsZW1lbnQsIHJvb3RFbGVtZW50KSB7XG5cdGNvbnN0IGNoYWluID0gW11cbiAgbGV0IGVsZW1lbnQgPSBjaGlsZEVsZW1lbnRcblxuICB3aGlsZShlbGVtZW50LnBhcmVudE5vZGUgJiYgZWxlbWVudCAhPT0gcm9vdEVsZW1lbnQpIHtcbiAgICBjaGFpbi51bnNoaWZ0KGVsZW1lbnQucGFyZW50Tm9kZSlcbiAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlXG4gIH1cblxuICByZXR1cm4gY2hhaW5cbn1cbiIsImltcG9ydCBnZXRQYXJlbnRzQ2hhaW4gZnJvbSAnLi4vdXRpbHMvZ2V0LXBhcmVudHMtY2hhaW4nXG5cbi8qKiBDbGFzcyByZXByZXNlbnRpbmcgYSBwb2ludC4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvaW50IHtcbiAgLyoqXG4gICogQ3JlYXRlIGEgcG9pbnQuXG4gICogQHBhcmFtIHtudW1iZXJ9IHggLSBUaGUgeCB2YWx1ZS5cbiAgKiBAcGFyYW0ge251bWJlcn0geSAtIFRoZSB5IHZhbHVlLlxuICAqL1xuICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgdGhpcy54ID0geFxuICAgIHRoaXMueSA9IHlcbiAgfVxuXG4gIGFkZChwKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnggKyBwLngsIHRoaXMueSArIHAueSlcbiAgfVxuXG4gIHN1YihwKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnggLSBwLngsIHRoaXMueSAtIHAueSlcbiAgfVxuXG4gIG11bHQoaykge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54ICogaywgdGhpcy55ICogaylcbiAgfVxuXG4gIG5lZ2F0aXZlKCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQoLXRoaXMueCwgLXRoaXMueSlcbiAgfVxuXG4gIGNvbXBhcmUocCkge1xuICAgIHJldHVybiAodGhpcy54ID09PSBwLnggJiYgdGhpcy55ID09PSBwLnkpXG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCwgdGhpcy55KVxuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIGB7eD0ke3RoaXMueH0seT0ke3RoaXMueX1gXG4gIH1cblxuICBzdGF0aWMgZWxlbWVudE9mZnNldChlbGVtZW50LCBwYXJlbnQpIHtcbiAgICBwYXJlbnQgPSBwYXJlbnQgfHwgZWxlbWVudC5wYXJlbnROb2RlXG4gICAgaWYgKHBhcmVudCA9PT0gZWxlbWVudCkge1xuICAgICAgcmV0dXJuIG5ldyBQb2ludCgwLCAwKTtcbiAgICB9IGVsc2UgaWYgKHBhcmVudCA9PT0gZWxlbWVudC5vZmZzZXRQYXJlbnQpIHtcbiAgICAgIHJldHVybiBuZXcgUG9pbnQoZWxlbWVudC5vZmZzZXRMZWZ0LCBlbGVtZW50Lm9mZnNldFRvcClcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgY29uc2lkZXJPZmZzZXRFbGVtZW50cyA9IFtlbGVtZW50LCBnZXRQYXJlbnRzQ2hhaW4oZWxlbWVudCwgcGFyZW50KS5wb3AoKV1cblxuICAgICAgcmV0dXJuIG5ldyBQb2ludChcbiAgICAgICAgY29uc2lkZXJPZmZzZXRFbGVtZW50cy5yZWR1Y2UoKHN1bSwgcCkgPT4gc3VtICsgcC5vZmZzZXRMZWZ0LCAwKSxcbiAgICAgICAgY29uc2lkZXJPZmZzZXRFbGVtZW50cy5yZWR1Y2UoKHN1bSwgcCkgPT4gc3VtICsgcC5vZmZzZXRUb3AsIDApXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGVsZW1lbnRCb3VuZGluZ09mZnNldChlbGVtZW50LCBwYXJlbnQpIHtcbiAgICBwYXJlbnQgPSBwYXJlbnQgfHwgZWxlbWVudC5wYXJlbnROb2RlXG4gICAgY29uc3QgZWxlbWVudFJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgY29uc3QgcGFyZW50UmVjdCA9IHBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIHJldHVybiBuZXcgUG9pbnQoXG4gICAgICBlbGVtZW50UmVjdC5sZWZ0IC0gcGFyZW50UmVjdC5sZWZ0LFxuICAgICAgZWxlbWVudFJlY3QudG9wIC0gcGFyZW50UmVjdC50b3BcbiAgICApXG4gIH1cblxuICBzdGF0aWMgZWxlbWVudFNpemUoZWxlbWVudCkge1xuICAgIGNvbnN0IGVsZW1lbnRSZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIHJldHVybiBuZXcgUG9pbnQoXG4gICAgICBlbGVtZW50UmVjdC53aWR0aCxcbiAgICAgIGVsZW1lbnRSZWN0LmhlaWdodFxuICAgIClcbiAgfVxufVxuIiwiaW1wb3J0IFBvaW50IGZyb20gJy4vcG9pbnQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY3RhbmdsZSB7XG4gIGNvbnN0cnVjdG9yKHBvc2l0aW9uLCBzaXplKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgdGhpcy5zaXplID0gc2l6ZVxuICB9XG5cbiAgZ2V0UDEoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25cbiAgfVxuXG4gIGdldFAyKCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHRoaXMucG9zaXRpb24ueSlcbiAgfVxuXG4gIGdldFAzKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLnNpemUpXG4gIH1cblxuICBnZXRQNCgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnkpXG4gIH1cblxuICBnZXRDZW50ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb24uYWRkKHRoaXMuc2l6ZS5tdWx0KDAuNSkpXG4gIH1cblxuICBvcihyZWN0KSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBuZXcgUG9pbnQoTWF0aC5taW4odGhpcy5wb3NpdGlvbi54LCByZWN0LnBvc2l0aW9uLngpLCBNYXRoLm1pbih0aGlzLnBvc2l0aW9uLnksIHJlY3QucG9zaXRpb24ueSkpXG4gICAgY29uc3Qgc2l6ZSA9IChuZXcgUG9pbnQoTWF0aC5tYXgodGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHJlY3QucG9zaXRpb24ueCArIHJlY3Quc2l6ZS54KSwgTWF0aC5tYXgodGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnksIHJlY3QucG9zaXRpb24ueSArIHJlY3Quc2l6ZS55KSkpLnN1Yihwb3NpdGlvbilcbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZShwb3NpdGlvbiwgc2l6ZSlcbiAgfVxuXG4gIGFuZChyZWN0KSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBuZXcgUG9pbnQoTWF0aC5tYXgodGhpcy5wb3NpdGlvbi54LCByZWN0LnBvc2l0aW9uLngpLCBNYXRoLm1heCh0aGlzLnBvc2l0aW9uLnksIHJlY3QucG9zaXRpb24ueSkpXG4gICAgY29uc3Qgc2l6ZSA9IChuZXcgUG9pbnQoTWF0aC5taW4odGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHJlY3QucG9zaXRpb24ueCArIHJlY3Quc2l6ZS54KSwgTWF0aC5taW4odGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnksIHJlY3QucG9zaXRpb24ueSArIHJlY3Quc2l6ZS55KSkpLnN1Yihwb3NpdGlvbilcbiAgICBpZiAoc2l6ZS54IDw9IDAgfHwgc2l6ZS55IDw9IDApIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHBvc2l0aW9uLCBzaXplKVxuICB9XG5cbiAgaW5jbHVkZVBvaW50KHApIHtcbiAgICByZXR1cm4gISh0aGlzLnBvc2l0aW9uLnggPiBwLnggfHwgdGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLnggPCBwLnggfHwgdGhpcy5wb3NpdGlvbi55ID4gcC55IHx8IHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55IDwgcC55KVxuICB9XG5cbiAgaW5jbHVkZVJlY3RhbmdsZShyZWN0YW5nbGUpIHtcbiAgICByZXR1cm4gdGhpcy5pbmNsdWRlUG9pbnQocmVjdGFuZ2xlLnBvc2l0aW9uKSAmJiB0aGlzLmluY2x1ZGVQb2ludChyZWN0YW5nbGUuZ2V0UDMoKSlcbiAgfVxuXG4gIG1vdmVUb0JvdW5kKHJlY3QsIGF4aXMpIHtcbiAgICBsZXQgc2VsQXhpcywgY3Jvc3NSZWN0YW5nbGVcbiAgICBpZiAoYXhpcykge1xuICAgICAgc2VsQXhpcyA9IGF4aXNcbiAgICB9IGVsc2Uge1xuICAgICAgY3Jvc3NSZWN0YW5nbGUgPSB0aGlzLmFuZChyZWN0KVxuICAgICAgaWYgKCFjcm9zc1JlY3RhbmdsZSkge1xuICAgICAgICByZXR1cm4gcmVjdFxuICAgICAgfVxuICAgICAgc2VsQXhpcyA9IGNyb3NzUmVjdGFuZ2xlLnNpemUueCA+IGNyb3NzUmVjdGFuZ2xlLnNpemUueSA/ICd5JyA6ICd4J1xuICAgIH1cbiAgICBjb25zdCB0aGlzQ2VudGVyID0gdGhpcy5nZXRDZW50ZXIoKVxuICAgIGNvbnN0IHJlY3RDZW50ZXIgPSByZWN0LmdldENlbnRlcigpXG4gICAgY29uc3Qgc2lnbiA9IHRoaXNDZW50ZXJbc2VsQXhpc10gPiByZWN0Q2VudGVyW3NlbEF4aXNdID8gLTEgOiAxXG4gICAgY29uc3Qgb2Zmc2V0ID0gc2lnbiA+IDAgPyB0aGlzLnBvc2l0aW9uW3NlbEF4aXNdICsgdGhpcy5zaXplW3NlbEF4aXNdIC0gcmVjdC5wb3NpdGlvbltzZWxBeGlzXSA6IHRoaXMucG9zaXRpb25bc2VsQXhpc10gLSAocmVjdC5wb3NpdGlvbltzZWxBeGlzXSArIHJlY3Quc2l6ZVtzZWxBeGlzXSlcbiAgICByZWN0LnBvc2l0aW9uW3NlbEF4aXNdID0gcmVjdC5wb3NpdGlvbltzZWxBeGlzXSArIG9mZnNldFxuICAgIHJldHVybiByZWN0XG4gIH1cblxuICBnZXRTcXVhcmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZS54ICogdGhpcy5zaXplLnlcbiAgfVxuXG4gIHN0eWxlQXBwbHkoZWwpIHtcbiAgICBlbCA9IGVsIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2luZCcpXG4gICAgZWwuc3R5bGUubGVmdCA9IHRoaXMucG9zaXRpb24ueCArICdweCdcbiAgICBlbC5zdHlsZS50b3AgPSB0aGlzLnBvc2l0aW9uLnkgKyAncHgnXG4gICAgZWwuc3R5bGUud2lkdGggPSB0aGlzLnNpemUueCArICdweCdcbiAgICBlbC5zdHlsZS5oZWlnaHQgPSB0aGlzLnNpemUueSArICdweCdcbiAgfVxuXG4gIGdyb3d0aChzaXplKSB7XG4gICAgdGhpcy5zaXplID0gdGhpcy5zaXplLmFkZChzaXplKVxuICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uLmFkZChzaXplLm11bHQoLTAuNSkpXG4gIH1cblxuICBnZXRNaW5TaWRlKCkge1xuICAgIHJldHVybiBNYXRoLm1pbih0aGlzLnNpemUueCwgdGhpcy5zaXplLnkpXG4gIH1cblxuICBzdGF0aWMgZnJvbUVsZW1lbnQoZWxlbWVudCwgcGFyZW50PWVsZW1lbnQucGFyZW50Tm9kZSwgaXNDb25zaWRlclRyYW5zbGF0ZT1mYWxzZSkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gaXNDb25zaWRlclRyYW5zbGF0ZVxuICAgICAgPyBQb2ludC5lbGVtZW50Qm91bmRpbmdPZmZzZXQoZWxlbWVudCwgcGFyZW50KVxuICAgICAgOiBQb2ludC5lbGVtZW50T2Zmc2V0KGVsZW1lbnQsIHBhcmVudClcbiAgICBjb25zdCBzaXplID0gUG9pbnQuZWxlbWVudFNpemUoZWxlbWVudClcbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZShwb3NpdGlvbiwgc2l6ZSlcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKG9wdGlvbnMgPSB7fSkge1xuICAgIHRoaXMuZXZlbnRzID0ge31cblxuICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMub24pIHtcbiAgICAgIGZvciAoY29uc3QgW2V2ZW50TmFtZSwgZm5dIG9mIE9iamVjdC5lbnRyaWVzKG9wdGlvbnMub24pKSB7XG4gICAgICAgIHRoaXMub24oZXZlbnROYW1lLCBmbilcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBlbWl0KGV2ZW50TmFtZSkge1xuICAgIHRoaXMuaW50ZXJydXB0ZWQgPSBmYWxzZVxuICAgIGNvbnN0IGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSlcblxuICAgIGlmICghdGhpcy5ldmVudHNbZXZlbnROYW1lXSkgcmV0dXJuXG5cbiAgICBmb3IgKGNvbnN0IGZ1bmMgb2YgdGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgZnVuYyguLi5hcmdzKVxuICAgICAgaWYgKHRoaXMuaW50ZXJydXB0ZWQpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaW50ZXJydXB0KCkge1xuICAgIHRoaXMuaW50ZXJydXB0ZWQgPSB0cnVlXG4gIH1cblxuICBvbihldmVudE5hbWUsIGZuKSB7XG4gICAgaWYgKCF0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdID0gW11cbiAgICB9XG5cbiAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLnB1c2goZm4pXG4gIH1cblxuICBwcmVwZW5kT24oZXZlbnROYW1lLCBmbikge1xuICAgIGlmICghdGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IFtdXG4gICAgfVxuXG4gICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS51bnNoaWZ0KGZuKVxuICB9XG5cbiAgdW5zdWJzY3JpYmUoZXZlbnROYW1lLCBmbikge1xuICAgIGlmICh0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0uaW5kZXhPZihmbilcbiAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0uc3BsaWNlKGluZGV4LCAxKVxuICAgIH1cbiAgfVxuXG4gIHJlc2V0RW1pdHRlciAoKSB7XG4gICAgdGhpcy5ldmVudHMgPSB7fVxuICB9XG5cbiAgcmVzZXRPbihldmVudE5hbWUpIHtcbiAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdID0gW11cbiAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldERpc3RhbmNlKHAxLCBwMikge1xuICBjb25zdCBkeCA9IHAxLnggLSBwMi54LCBkeSA9IHAxLnkgLSBwMi55XG4gIHJldHVybiBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRYRGlmZmVyZW5jZShwMSwgcDIpIHtcbiAgcmV0dXJuIE1hdGguYWJzKHAxLnggLSBwMi54KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0WURpZmZlcmVuY2UocDEsIHAyKSB7XG4gIHJldHVybiBNYXRoLmFicyhwMS55IC0gcDIueSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3Rvcnkob3B0aW9ucykge1xuICByZXR1cm4gKHAxLCBwMikgPT4ge1xuICAgIHJldHVybiBNYXRoLnNxcnQoXG4gICAgICBNYXRoLnBvdyhvcHRpb25zLnggKiBNYXRoLmFicyhwMS54IC0gcDIueCksIDIpICtcbiAgICAgIE1hdGgucG93KG9wdGlvbnMueSAqIE1hdGguYWJzKHAxLnkgLSBwMi55KSwgMilcbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluZGV4T2ZOZWFyZXN0UG9pbnQoYXJyLCB2YWwsIHJhZGl1cywgZ2V0RGlzdGFuY2VGdW5jPWdldERpc3RhbmNlKSB7XG4gIGxldCBzaXplLCBpbmRleCA9IDAsIGksIHRlbXBcbiAgaWYgKGFyci5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gLTFcbiAgfVxuICBzaXplID0gZ2V0RGlzdGFuY2VGdW5jKGFyclswXSwgdmFsKVxuICBmb3IgKGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgdGVtcCA9IGdldERpc3RhbmNlRnVuYyhhcnJbaV0sIHZhbClcbiAgICBpZiAodGVtcCA8IHNpemUpIHtcbiAgICAgIHNpemUgPSB0ZW1wXG4gICAgICBpbmRleCA9IGlcbiAgICB9XG4gIH1cbiAgaWYgKHJhZGl1cyA+PSAwICYmIHNpemUgPiByYWRpdXMpIHtcbiAgICByZXR1cm4gLTFcbiAgfVxuICByZXR1cm4gaW5kZXhcbn1cbiIsImltcG9ydCBQb2ludCBmcm9tICcuL3BvaW50J1xuaW1wb3J0IHsgZ2V0RGlzdGFuY2UgfSBmcm9tICcuL2Rpc3RhbmNlcydcblxuZXhwb3J0IGZ1bmN0aW9uIGNsYW1wKG1pbiwgbWF4LCB2YWwpIHtcbiAgcmV0dXJuIE1hdGgubWF4KG1pbiwgTWF0aC5taW4obWF4LCB2YWwpKVxufVxuXG4vL1JldHVybiBjcm9zc2luZyBwb2ludCBvZiB0d28gbGluZXNcbmV4cG9ydCBmdW5jdGlvbiBkaXJlY3RDcm9zc2luZyhMMVAxLCBMMVAyLCBMMlAxLCBMMlAyKSB7XG4gIGxldCB0ZW1wLCBrMSwgazIsIGIxLCBiMiwgeCwgeVxuICBpZiAoTDJQMS54ID09PSBMMlAyLngpIHtcbiAgICB0ZW1wID0gTDJQMVxuICAgIEwyUDEgPSBMMVAxXG4gICAgTDFQMSA9IHRlbXBcbiAgICB0ZW1wID0gTDJQMlxuICAgIEwyUDIgPSBMMVAyXG4gICAgTDFQMiA9IHRlbXBcbiAgfVxuICBpZiAoTDFQMS54ID09PSBMMVAyLngpIHtcbiAgICBrMiA9IChMMlAyLnkgLSBMMlAxLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICBiMiA9IChMMlAyLnggKiBMMlAxLnkgLSBMMlAxLnggKiBMMlAyLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICB4ID0gTDFQMS54XG4gICAgeSA9IHggKiBrMiArIGIyXG4gICAgcmV0dXJuIG5ldyBQb2ludCh4LCB5KVxuICB9IGVsc2Uge1xuICAgIGsxID0gKEwxUDIueSAtIEwxUDEueSkgLyAoTDFQMi54IC0gTDFQMS54KVxuICAgIGIxID0gKEwxUDIueCAqIEwxUDEueSAtIEwxUDEueCAqIEwxUDIueSkgLyAoTDFQMi54IC0gTDFQMS54KVxuICAgIGsyID0gKEwyUDIueSAtIEwyUDEueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgIGIyID0gKEwyUDIueCAqIEwyUDEueSAtIEwyUDEueCAqIEwyUDIueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgIHggPSAoYjEgLSBiMikgLyAoazIgLSBrMSlcbiAgICB5ID0geCAqIGsxICsgYjFcbiAgICByZXR1cm4gbmV3IFBvaW50KHgsIHkpXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kVG9TZWdtZW50KExQMSwgTFAyLCBQKSB7XG4gIGxldCB4LCB5XG4gIHggPSBjbGFtcChNYXRoLm1pbihMUDEueCwgTFAyLngpLCBNYXRoLm1heChMUDEueCwgTFAyLngpLCBQLngpXG4gIGlmICh4ICE9PSBQLngpIHtcbiAgICB5ID0gKHggPT09IExQMS54KSA/IExQMS55IDogTFAyLnlcbiAgICBQID0gbmV3IFBvaW50KHgsIHkpXG4gIH1cblxuICB5ID0gY2xhbXAoTWF0aC5taW4oTFAxLnksIExQMi55KSwgTWF0aC5tYXgoTFAxLnksIExQMi55KSwgUC55KVxuICBpZiAoeSAhPT0gUC55KSB7XG4gICAgeCA9ICh5ID09PSBMUDEueSkgPyBMUDEueCA6IExQMi54XG4gICAgUCA9IG5ldyBQb2ludCh4LCB5KVxuICB9XG5cbiAgcmV0dXJuIFBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kVG9MaW5lKEEsIEIsIFApIHtcbiAgY29uc3QgQVAgPSBuZXcgUG9pbnQoUC54IC0gQS54LCBQLnkgLSBBLnkpLFxuICAgIEFCID0gbmV3IFBvaW50KEIueCAtIEEueCwgQi55IC0gQS55KSxcbiAgICBhYjIgPSBBQi54ICogQUIueCArIEFCLnkgKiBBQi55LFxuICAgIGFwX2FiID0gQVAueCAqIEFCLnggKyBBUC55ICogQUIueSxcbiAgICB0ID0gYXBfYWIgLyBhYjJcbiAgcmV0dXJuIG5ldyBQb2ludChBLnggKyBBQi54ICogdCwgQS55ICsgQUIueSAqIHQpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb2ludE9uTGluZShMUDEsIExQMiwgcGVyY2VudCkge1xuICBjb25zdCBkeCA9IExQMi54IC0gTFAxLngsIGR5ID0gTFAyLnkgLSBMUDEueVxuICByZXR1cm4gbmV3IFBvaW50KExQMS54ICsgcGVyY2VudCAqIGR4LCBMUDEueSArIHBlcmNlbnQgKiBkeSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBvaW50T25MaW5lQnlMZW5naHQoTFAxLCBMUDIsIGxlbmdodCkge1xuICBjb25zdCBkeCA9IExQMi54IC0gTFAxLnhcbiAgY29uc3QgZHkgPSBMUDIueSAtIExQMS55XG4gIGNvbnN0IHBlcmNlbnQgPSBsZW5naHQgLyBnZXREaXN0YW5jZShMUDEsIExQMilcbiAgcmV0dXJuIG5ldyBQb2ludChMUDEueCArIHBlcmNlbnQgKiBkeCwgTFAxLnkgKyBwZXJjZW50ICogZHkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRQb2ludFRvQm91bmRQb2ludHMoYm91bmRwb2ludHMsIHBvaW50LCBpc1JpZ2h0KSB7XG4gIGNvbnN0IHJlc3VsdCA9IGJvdW5kcG9pbnRzLmZpbHRlcigoYlBvaW50KSA9PiB7XG4gICAgcmV0dXJuIGJQb2ludC55ID4gcG9pbnQueSB8fCAoaXNSaWdodCA/IGJQb2ludC54IDwgcG9pbnQueCA6IGJQb2ludC54ID4gcG9pbnQueClcbiAgfSlcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChwb2ludC55IDwgcmVzdWx0W2ldLnkpIHtcbiAgICAgIHJlc3VsdC5zcGxpY2UoaSwgMCwgcG9pbnQpXG4gICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxuICB9XG4gIHJlc3VsdC5wdXNoKHBvaW50KVxuICByZXR1cm4gcmVzdWx0XG59XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9wb2ludCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFuZ2xlRGlmZihhbHBoYSwgYmV0YSkge1xuICBjb25zdCBtaW5BbmdsZSA9IE1hdGgubWluKGFscGhhLCBiZXRhKVxuICBjb25zdCBtYXhBbmdsZSA9ICBNYXRoLm1heChhbHBoYSwgYmV0YSlcbiAgcmV0dXJuIE1hdGgubWluKG1heEFuZ2xlIC0gbWluQW5nbGUsIG1pbkFuZ2xlICsgTWF0aC5QSSoyIC0gbWF4QW5nbGUpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbmdsZShwMSwgcDIpIHtcbiAgY29uc3QgZGlmZiA9IHAyLnN1YihwMSlcbiAgcmV0dXJuIG5vcm1hbGl6ZUFuZ2xlKE1hdGguYXRhbjIoZGlmZi55LCBkaWZmLngpKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9SYWRpYW4oYW5nbGUpIHtcbiAgcmV0dXJuICgoYW5nbGUgJSAzNjApICogTWF0aC5QSSAvIDE4MClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvRGVncmVlKGFuZ2xlKSB7XG4gIHJldHVybiAoYW5nbGUgKiAxODAgLyBNYXRoLlBJKSAlIDM2MFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRBbmdsZShtaW4sIG1heCwgdmFsKSB7XG4gIGxldCBkbWluLCBkbWF4XG4gIGlmIChtaW4gPCBtYXggJiYgdmFsID4gbWluICYmIHZhbCA8IG1heCkge1xuICAgIHJldHVybiB2YWxcbiAgfSBlbHNlIGlmIChtYXggPCBtaW4gJiYgKHZhbCA8IG1heCB8fCB2YWwgPiBtaW4pKSB7XG4gICAgcmV0dXJuIHZhbFxuICB9IGVsc2Uge1xuICAgIGRtaW4gPSBnZXRBbmdsZURpZmYobWluLCB2YWwpXG4gICAgZG1heCA9IGdldEFuZ2xlRGlmZihtYXgsIHZhbClcbiAgICBpZiAoZG1pbiA8IGRtYXgpIHtcbiAgICAgIHJldHVybiBtaW5cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG1heFxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmVhcmVzdEFuZ2xlKGFyciwgYW5nbGUpIHtcbiAgbGV0IGksIHRlbXAsIGRpZmYgPSBNYXRoLlBJICogMiwgdmFsdWVcbiAgZm9yIChpID0gMDsgaSA8IGFyci5sZW5ndGg7aSsrKSB7XG4gICAgdGVtcCA9IGdldEFuZ2xlRGlmZihhcnJbaV0sIGFuZ2xlKVxuICAgIGlmIChkaWZmIDwgdGVtcCkge1xuICAgICAgZGlmZiA9IHRlbXBcbiAgICAgIHZhbHVlID0gYXJyW2ldXG4gICAgfVxuICB9XG4gIHJldHVybiB2YWx1ZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplQW5nbGUodmFsKSB7XG4gIHdoaWxlICh2YWwgPCAwKSB7XG4gICAgdmFsICs9IDIgKiBNYXRoLlBJXG4gIH1cbiAgd2hpbGUgKHZhbCA+IDIgKiBNYXRoLlBJKSB7XG4gICAgdmFsIC09IDIgKiBNYXRoLlBJXG4gIH1cbiAgcmV0dXJuIHZhbFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKGFuZ2xlLCBsZW5ndGgsIGNlbnRlcikge1xuICBjZW50ZXIgPSBjZW50ZXIgfHwgbmV3IFBvaW50KDAsIDApXG4gIHJldHVybiBjZW50ZXIuYWRkKG5ldyBQb2ludChsZW5ndGggKiBNYXRoLmNvcyhhbmdsZSksIGxlbmd0aCAqIE1hdGguc2luKGFuZ2xlKSkpXG59XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9nZW9tZXRyeS9wb2ludCdcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSAnLi9nZW9tZXRyeS9yZWN0YW5nbGUnXG5pbXBvcnQge1xuICBnZXRQb2ludE9uTGluZUJ5TGVuZ2h0LFxuICBkaXJlY3RDcm9zc2luZyxcbiAgYm91bmRUb0xpbmVcbn0gZnJvbSAnLi9nZW9tZXRyeS9ib3VuZHMnXG5cbmltcG9ydCB7XG4gIGdldEFuZ2xlLFxuICBub3JtYWxpemVBbmdsZSxcbiAgYm91bmRBbmdsZSxcbiAgZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtXG59IGZyb20gJy4vZ2VvbWV0cnkvYW5nbGVzJ1xuXG5leHBvcnQgY2xhc3MgQm91bmQge1xuICBjb25zdHJ1Y3RvciAoKSB7fVxuXG4gIGJvdW5kKHBvaW50LCBfc2l6ZSkge1xuICAgIHJldHVybiBwb2ludFxuICB9XG5cbiAgcmVmcmVzaCAoKSB7fVxuXG4gIHN0YXRpYyBib3VuZGluZygpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyB0aGlzKC4uLmFyZ3VtZW50cylcbiAgICByZXR1cm4gaW5zdGFuY2UuYm91bmQuYmluZChpbnN0YW5jZSlcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb1JlY3RhbmdsZSBleHRlbmRzIEJvdW5kIHtcbiAgY29uc3RydWN0b3IocmVjdGFuZ2xlKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMucmVjdGFuZ2xlID0gcmVjdGFuZ2xlXG4gIH1cblxuICBib3VuZChwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IGNhbGNQb2ludCA9IHBvaW50LmNsb25lKClcbiAgICBjb25zdCByZWN0UDIgPSB0aGlzLnJlY3RhbmdsZS5nZXRQMygpXG5cbiAgICBpZiAodGhpcy5yZWN0YW5nbGUucG9zaXRpb24ueCA+IGNhbGNQb2ludC54KSB7XG4gICAgICAoY2FsY1BvaW50LnggPSB0aGlzLnJlY3RhbmdsZS5wb3NpdGlvbi54KVxuICAgIH1cbiAgICBpZiAodGhpcy5yZWN0YW5nbGUucG9zaXRpb24ueSA+IGNhbGNQb2ludC55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHRoaXMucmVjdGFuZ2xlLnBvc2l0aW9uLnlcbiAgICB9XG4gICAgaWYgKHJlY3RQMi54IDwgY2FsY1BvaW50LnggKyBzaXplLngpIHtcbiAgICAgIGNhbGNQb2ludC54ID0gcmVjdFAyLnggLSBzaXplLnhcbiAgICB9XG4gICAgaWYgKHJlY3RQMi55IDwgY2FsY1BvaW50LnkgKyBzaXplLnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gcmVjdFAyLnkgLSBzaXplLnlcbiAgICB9XG5cbiAgICByZXR1cm4gY2FsY1BvaW50XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9FbGVtZW50IGV4dGVuZHMgQm91bmRUb1JlY3RhbmdsZSB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbnRhaW5lcikge1xuICAgIHN1cGVyKFJlY3RhbmdsZS5mcm9tRWxlbWVudChlbGVtZW50LCBjb250YWluZXIpKVxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lclxuICB9XG5cbiAgcmVmcmVzaCAoKSB7XG4gICAgdGhpcy5yZWN0YW5nbGUgPSBSZWN0YW5nbGUuZnJvbUVsZW1lbnQodGhpcy5lbGVtZW50LCB0aGlzLmNvbnRhaW5lcilcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb0xpbmVYIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3Rvcih4LCBzdGFydFksIGVuZFkpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy54ID0geFxuICAgIHRoaXMuc3RhcnRZID0gc3RhcnRZXG4gICAgdGhpcy5lbmRZID0gZW5kWVxuICB9XG5cbiAgYm91bmQocG9pbnQsIHNpemUpIHtcbiAgICBjb25zdCBjYWxjUG9pbnQgPSBwb2ludC5jbG9uZSgpXG5cbiAgICBjYWxjUG9pbnQueCA9IHRoaXMueFxuICAgIGlmICh0aGlzLnN0YXJ0WSA+IGNhbGNQb2ludC55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHRoaXMuc3RhcnRZXG4gICAgfVxuICAgIGlmICh0aGlzLmVuZFkgPCBjYWxjUG9pbnQueSArIHNpemUueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSB0aGlzLmVuZFkgLSBzaXplLnlcbiAgICB9XG5cbiAgICByZXR1cm4gY2FsY1BvaW50XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9MaW5lWSBleHRlbmRzIEJvdW5kIHtcbiAgY29uc3RydWN0b3IoeSwgc3RhcnRYLCBlbmRYKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMueSA9IHlcbiAgICB0aGlzLnN0YXJ0WCA9IHN0YXJ0WFxuICAgIHRoaXMuZW5kWCA9IGVuZFhcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgY2FsY1BvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIGNhbGNQb2ludC55ID0gdGhpcy55XG4gICAgaWYgKHRoaXMuc3RhcnRYID4gY2FsY1BvaW50LngpIHtcbiAgICAgIGNhbGNQb2ludC54ID0gdGhpcy5zdGFydFhcbiAgICB9XG4gICAgaWYgKHRoaXMuZW5kWCA8IGNhbGNQb2ludC54ICsgc2l6ZS54KSB7XG4gICAgICBjYWxjUG9pbnQueCA9IHRoaXMuZW5kWCAtIHNpemUueFxuICAgIH1cbiAgICByZXR1cm4gY2FsY1BvaW50XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9MaW5lIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3RvcihzdGFydFBvaW50LCBlbmRQb2ludCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnN0YXJ0UG9pbnQgPSBzdGFydFBvaW50XG4gICAgdGhpcy5lbmRQb2ludCA9IGVuZFBvaW50XG4gICAgY29uc3QgYWxwaGEgPSBNYXRoLmF0YW4yKGVuZFBvaW50LnkgLSBzdGFydFBvaW50LnksIGVuZFBvaW50LnggLSBzdGFydFBvaW50LngpXG4gICAgY29uc3QgYmV0YSA9IGFscGhhICsgTWF0aC5QSSAvIDJcbiAgICB0aGlzLnNvbWVLID0gMTBcbiAgICB0aGlzLmNvc0JldGEgPSBNYXRoLmNvcyhiZXRhKVxuICAgIHRoaXMuc2luQmV0YSA9IE1hdGguc2luKGJldGEpXG4gIH1cblxuICBib3VuZChwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IHBvaW50MiA9IG5ldyBQb2ludChcbiAgICAgIHBvaW50LnggKyB0aGlzLnNvbWVLICogdGhpcy5jb3NCZXRhLFxuICAgICAgcG9pbnQueSArIHRoaXMuc29tZUsgKiB0aGlzLnNpbkJldGFcbiAgICApXG5cbiAgICBjb25zdCBuZXdFbmRQb2ludCA9IGdldFBvaW50T25MaW5lQnlMZW5naHQodGhpcy5lbmRQb2ludCwgdGhpcy5zdGFydFBvaW50LCBzaXplLngpXG4gICAgY29uc3QgcG9pbnRDcm9zc2luZyA9IGRpcmVjdENyb3NzaW5nKHRoaXMuc3RhcnRQb2ludCwgdGhpcy5lbmRQb2ludCwgcG9pbnQsIHBvaW50MilcblxuICAgIHJldHVybiBib3VuZFRvTGluZSh0aGlzLnN0YXJ0UG9pbnQsIG5ld0VuZFBvaW50LCBwb2ludENyb3NzaW5nKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvQ2lyY2xlIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3RvcihjZW50ZXIsIHJhZGl1cykge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLmNlbnRlciA9IGNlbnRlclxuICAgIHRoaXMucmFkaXVzID0gcmFkaXVzXG4gIH1cblxuICBib3VuZChwb2ludCwgX3NpemUpIHtcbiAgICByZXR1cm4gZ2V0UG9pbnRPbkxpbmVCeUxlbmdodCh0aGlzLmNlbnRlciwgcG9pbnQsIHRoaXMucmFkaXVzKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvQXJjIGV4dGVuZHMgQm91bmRUb0NpcmNsZSB7XG4gIGNvbnN0cnVjdG9yKGNlbnRlciwgcmFkaXVzLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSkge1xuICAgIHN1cGVyKGNlbnRlciwgcmFkaXVzKVxuICAgIHRoaXMuX3N0YXJ0QW5nbGUgPSBzdGFydEFuZ2xlXG4gICAgdGhpcy5fZW5kQW5nbGUgPSBlbmRBbmdsZVxuICB9XG5cbiAgc3RhcnRBbmdsZSgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMuX3N0YXJ0QW5nbGUgPT09ICdmdW5jdGlvbicgPyB0aGlzLl9zdGFydEFuZ2xlKCkgOiB0aGlzLl9zdGFydEFuZ2xlXG4gIH1cblxuICBlbmRBbmdsZSgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMuX2VuZEFuZ2xlID09PSAnZnVuY3Rpb24nID8gdGhpcy5fZW5kQW5nbGUoKSA6IHRoaXMuX2VuZEFuZ2xlXG4gIH1cblxuICBib3VuZChwb2ludCwgX3NpemUpIHtcbiAgICBsZXQgYW5nbGUgPSBnZXRBbmdsZSh0aGlzLmNlbnRlciwgcG9pbnQpXG4gICAgYW5nbGUgPSBub3JtYWxpemVBbmdsZShhbmdsZSlcbiAgICBhbmdsZSA9IGJvdW5kQW5nbGUodGhpcy5zdGFydEFuZ2xlKCksIHRoaXMuZW5kQW5nbGUoKSwgYW5nbGUpXG4gICAgcmV0dXJuIGdldFBvaW50RnJvbVJhZGlhbFN5c3RlbShhbmdsZSwgdGhpcy5yYWRpdXMsIHRoaXMuY2VudGVyKVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhcnJheSwgdmFsKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoYXJyYXlbaV0gPT09IHZhbCkge1xuICAgICAgYXJyYXkuc3BsaWNlKGksIDEpXG4gICAgICBpLS1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycmF5XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByYW5nZShzdGFydCwgc3RvcCwgc3RlcCkge1xuICBjb25zdCByZXN1bHQgPSBbXVxuICBpZiAodHlwZW9mIHN0b3AgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgc3RvcCA9IHN0YXJ0XG4gICAgc3RhcnQgPSAwXG4gIH1cbiAgaWYgKHR5cGVvZiBzdGVwID09PSAndW5kZWZpbmVkJykge1xuICAgIHN0ZXAgPSAxXG4gIH1cbiAgaWYgKChzdGVwID4gMCAmJiBzdGFydCA+PSBzdG9wKSB8fCAoc3RlcCA8IDAgJiYgc3RhcnQgPD0gc3RvcCkpIHtcbiAgICByZXR1cm4gW11cbiAgfVxuICBmb3IgKGxldCBpID0gc3RhcnQ7IHN0ZXAgPiAwID8gaSA8IHN0b3AgOiBpID4gc3RvcDsgaSArPSBzdGVwKSB7XG4gICAgcmVzdWx0LnB1c2goaSlcbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9nZW9tZXRyeS9wb2ludCdcbmltcG9ydCB7IGFkZFBvaW50VG9Cb3VuZFBvaW50cyB9IGZyb20gJy4vZ2VvbWV0cnkvYm91bmRzJ1xuXG5pbXBvcnQge1xuICBpbmRleE9mTmVhcmVzdFBvaW50LFxuICBnZXREaXN0YW5jZVxufSBmcm9tICcuL2dlb21ldHJ5L2Rpc3RhbmNlcydcblxuY2xhc3MgQmFzaWNTdHJhdGVneSB7XG4gIGNvbnN0cnVjdG9yKHJlY3RhbmdsZSwgb3B0aW9ucz17fSkge1xuICAgIHRoaXMucmVjdGFuZ2xlID0gcmVjdGFuZ2xlXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9uc1xuICB9XG5cbiAgZ2V0IGJvdW5kUmVjdCAoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGlzLnJlY3RhbmdsZSA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMucmVjdGFuZ2xlKCkgOiB0aGlzLnJlY3RhbmdsZVxuICB9XG59XG5cbmNsYXNzIE5vdENyb3NzaW5nU3RyYXRlZ3kgZXh0ZW5kcyBCYXNpY1N0cmF0ZWd5IHtcbiAgcG9zaXRpb25pbmcgKHJlY3RhbmdsZUxpc3QsIGluZGV4ZXNPZk5ld3MpIHtcbiAgICBjb25zdCBzdGF0aWNSZWN0YW5nbGVJbmRleGVzID0gcmVjdGFuZ2xlTGlzdC5yZWR1Y2UoKGluZGV4ZXMsIF9yZWN0LCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGluZGV4ZXNPZk5ld3MuaW5kZXhPZihpbmRleCkgPT09IC0xKSB7XG4gICAgICAgIGluZGV4ZXMucHVzaChpbmRleClcbiAgICAgIH1cbiAgICAgIHJldHVybiBpbmRleGVzXG4gICAgfSwgW10pXG5cbiAgICBpbmRleGVzT2ZOZXdzLmZvckVhY2goKGluZGV4KSA9PiB7XG4gICAgICBsZXQgcmVjdCA9IHJlY3RhbmdsZUxpc3RbaW5kZXhdXG4gICAgICBsZXQgcmVtb3ZhYmxlID0gZmFsc2VcblxuICAgICAgc3RhdGljUmVjdGFuZ2xlSW5kZXhlcy5mb3JFYWNoKChpbmRleE9mU3RhdGljKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YXRpY1JlY3QgPSByZWN0YW5nbGVMaXN0W2luZGV4T2ZTdGF0aWNdXG4gICAgICAgIHJlY3QgPSBzdGF0aWNSZWN0Lm1vdmVUb0JvdW5kKHJlY3QpXG4gICAgICB9KVxuXG4gICAgICByZW1vdmFibGUgPSBzdGF0aWNSZWN0YW5nbGVJbmRleGVzLnNvbWUoKGluZGV4T2ZTdGF0aWMpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhdGljUmVjdCA9IHJlY3RhbmdsZUxpc3RbaW5kZXhPZlN0YXRpY11cbiAgICAgICAgcmV0dXJuICAhIXN0YXRpY1JlY3QuYW5kKHJlY3QpXG4gICAgICB9KSB8fCByZWN0LmFuZCh0aGlzLmJvdW5kUmVjdCkuZ2V0U3F1YXJlKCkgIT09IHJlY3QuZ2V0U3F1YXJlKClcblxuICAgICAgaWYgKHJlbW92YWJsZSkge1xuICAgICAgICByZWN0LnJlbW92YWJsZSA9IHRydWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMucHVzaChpbmRleClcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiByZWN0YW5nbGVMaXN0XG4gIH1cblxuICBzb3J0aW5nKG9kbERyYWdnYWJsZXNMaXN0LCBuZXdEcmFnZ2FibGVzLCBpbmRleE9mTmV3cykge1xuICAgIGNvbnN0IGRyYWdnYWJsZXMgPSBvZGxEcmFnZ2FibGVzTGlzdC5jb25jYXQobmV3RHJhZ2dhYmxlcylcbiAgICBuZXdEcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgaW5kZXhPZk5ld3MucHVzaChkcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSlcbiAgICB9KVxuICAgIHJldHVybiBkcmFnZ2FibGVzXG4gIH1cbn1cblxuY2xhc3MgRmxvYXRMZWZ0U3RyYXRlZ3kgZXh0ZW5kcyBCYXNpY1N0cmF0ZWd5IHtcbiAgY29uc3RydWN0b3IocmVjdGFuZ2xlLCBvcHRpb25zPXt9KSB7XG4gICAgc3VwZXIocmVjdGFuZ2xlLCBvcHRpb25zKVxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgcmVtb3ZhYmxlOiB0cnVlXG4gICAgfSwgb3B0aW9ucylcblxuICAgIHRoaXMucmFkaXVzID0gb3B0aW9ucy5yYWRpdXMgfHwgODBcblxuICAgIHRoaXMucGFkZGluZ1RvcExlZnQgPSBvcHRpb25zLnBhZGRpbmdUb3BMZWZ0IHx8IG5ldyBQb2ludCgwLCAwKVxuICAgIHRoaXMucGFkZGluZ0JvdHRvbVJpZ2h0ID0gb3B0aW9ucy5wYWRkaW5nQm90dG9tUmlnaHQgfHwgbmV3IFBvaW50KDAsIDApXG4gICAgdGhpcy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgPSBvcHRpb25zLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyB8fCAwXG5cbiAgICB0aGlzLmdldERpc3RhbmNlID0gb3B0aW9ucy5nZXREaXN0YW5jZSB8fCBnZXREaXN0YW5jZVxuICAgIHRoaXMuZ2V0UG9zaXRpb24gPSBvcHRpb25zLmdldFBvc2l0aW9uIHx8ICgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucG9zaXRpb24pXG4gIH1cblxuICBwb3NpdGlvbmluZyhyZWN0YW5nbGVMaXN0LCBfaW5kZXhlc09mTmV3cykge1xuICAgIGNvbnN0IGJvdW5kUmVjdCA9IHRoaXMuYm91bmRSZWN0XG4gICAgY29uc3QgcmVjdFAyID0gYm91bmRSZWN0LmdldFAyKClcbiAgICBsZXQgYm91bmRhcnlQb2ludHMgPSBbYm91bmRSZWN0LnBvc2l0aW9uXVxuXG4gICAgcmVjdGFuZ2xlTGlzdC5mb3JFYWNoKChyZWN0LCByZWN0SW5kZXgpID0+IHtcbiAgICAgIGxldCBwb3NpdGlvbiwgaXNWYWxpZCA9IGZhbHNlXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvdW5kYXJ5UG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHBvc2l0aW9uID0gbmV3IFBvaW50KFxuICAgICAgICAgIGJvdW5kYXJ5UG9pbnRzW2ldLnggKyB0aGlzLnBhZGRpbmdUb3BMZWZ0LngsXG4gICAgICAgICAgaSA+IDAgPyAoYm91bmRhcnlQb2ludHNbaSAtIDFdLnkgKyB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcykgOiAoYm91bmRSZWN0LnBvc2l0aW9uLnkgKyB0aGlzLnBhZGRpbmdUb3BMZWZ0LnkpXG4gICAgICAgIClcblxuICAgICAgICBpc1ZhbGlkID0gKHBvc2l0aW9uLnggKyByZWN0LnNpemUueCA8IHJlY3RQMi54KVxuXG4gICAgICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgcG9zaXRpb24gPSBuZXcgUG9pbnQoXG4gICAgICAgICAgYm91bmRSZWN0LnBvc2l0aW9uLnggKyB0aGlzLnBhZGRpbmdUb3BMZWZ0LngsXG4gICAgICAgICAgYm91bmRhcnlQb2ludHNbYm91bmRhcnlQb2ludHMubGVuZ3RoIC0gMV0ueSArIChyZWN0SW5kZXggPiAwID8gdGhpcy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgOiB0aGlzLnBhZGRpbmdUb3BMZWZ0LnkpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgcmVjdC5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnJlbW92YWJsZSAmJiByZWN0LmdldFAzKCkueSA+IGJvdW5kUmVjdC5nZXRQMygpLnkpIHtcbiAgICAgICAgcmVjdC5yZW1vdmFibGUgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGJvdW5kYXJ5UG9pbnRzID0gYWRkUG9pbnRUb0JvdW5kUG9pbnRzKGJvdW5kYXJ5UG9pbnRzLCByZWN0LmdldFAzKCkuYWRkKHRoaXMucGFkZGluZ0JvdHRvbVJpZ2h0KSlcbiAgICB9KVxuICAgIHJldHVybiByZWN0YW5nbGVMaXN0XG4gIH1cblxuICBzb3J0aW5nKG9kbERyYWdnYWJsZXNMaXN0LCBuZXdEcmFnZ2FibGVzLCBpbmRleE9mTmV3cykge1xuICAgIGNvbnN0IG5ld0xpc3QgPSBvZGxEcmFnZ2FibGVzTGlzdC5jb25jYXQoKVxuICAgIGNvbnN0IGxpc3RPbGRQb3NpdGlvbiA9IG9kbERyYWdnYWJsZXNMaXN0Lm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUuZ2V0UG9zaXRpb24oKSlcbiAgICBuZXdEcmFnZ2FibGVzLmZvckVhY2goKG5ld0RyYWdnYWJsZSkgPT4ge1xuICAgICAgbGV0IGluZGV4ID0gaW5kZXhPZk5lYXJlc3RQb2ludChsaXN0T2xkUG9zaXRpb24sIHRoaXMuZ2V0UG9zaXRpb24obmV3RHJhZ2dhYmxlKSwgdGhpcy5yYWRpdXMsIHRoaXMuZ2V0RGlzdGFuY2UpXG4gICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgIGluZGV4ID0gbmV3TGlzdC5sZW5ndGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluZGV4ID0gbmV3TGlzdC5pbmRleE9mKG9kbERyYWdnYWJsZXNMaXN0W2luZGV4XSlcbiAgICAgIH1cbiAgICAgIG5ld0xpc3Quc3BsaWNlKGluZGV4LCAwLCBuZXdEcmFnZ2FibGUpXG4gICAgfSlcbiAgICBuZXdEcmFnZ2FibGVzLmZvckVhY2goKG5ld0RyYWdnYWJsZSkgPT4ge1xuICAgICAgaW5kZXhPZk5ld3MucHVzaChuZXdMaXN0LmluZGV4T2YobmV3RHJhZ2dhYmxlKSlcbiAgICB9KVxuICAgIHJldHVybiBuZXdMaXN0XG4gIH1cbn1cblxuY2xhc3MgRmxvYXRSaWdodFN0cmF0ZWd5IGV4dGVuZHMgRmxvYXRMZWZ0U3RyYXRlZ3kge1xuICBjb25zdHJ1Y3RvcihyZWN0YW5nbGUsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcihyZWN0YW5nbGUsIG9wdGlvbnMpXG5cbiAgICB0aGlzLnBhZGRpbmdUb3BSaWdodCA9IG9wdGlvbnMucGFkZGluZ1RvcFJpZ2h0IHx8IG5ldyBQb2ludCg1LCA1KVxuICAgIHRoaXMucGFkZGluZ0JvdHRvbUxlZnQgPSBvcHRpb25zLnBhZGRpbmdCb3R0b21MZWZ0IHx8IG5ldyBQb2ludCgwLCAwKVxuICAgIHRoaXMueUdhcEJldHdlZW5EcmFnZ2FibGVzID0gb3B0aW9ucy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgfHwgMFxuXG4gICAgdGhpcy5wYWRkaW5nQm90dG9tTmVnTGVmdCA9IG5ldyBQb2ludCgtdGhpcy5wYWRkaW5nQm90dG9tTGVmdC54LCB0aGlzLnBhZGRpbmdCb3R0b21MZWZ0LnkpXG4gIH1cblxuICBwb3NpdGlvbmluZyhyZWN0YW5nbGVMaXN0LCBfaW5kZXhlc09mTmV3cykge1xuICAgIGNvbnN0IGJvdW5kUmVjdCA9IHRoaXMuYm91bmRSZWN0XG4gICAgbGV0IGJvdW5kYXJ5UG9pbnRzID0gW2JvdW5kUmVjdC5nZXRQMigpXVxuXG4gICAgcmVjdGFuZ2xlTGlzdC5mb3JFYWNoKChyZWN0LCByZWN0SW5kZXgpID0+IHtcbiAgICAgIGxldCBwb3NpdGlvbiwgaXNWYWxpZCA9IGZhbHNlXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvdW5kYXJ5UG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHBvc2l0aW9uID0gbmV3IFBvaW50KFxuICAgICAgICAgIGJvdW5kYXJ5UG9pbnRzW2ldLnggLSByZWN0LnNpemUueCAtIHRoaXMucGFkZGluZ1RvcFJpZ2h0LngsXG4gICAgICAgICAgaSA+IDAgPyAoYm91bmRhcnlQb2ludHNbaSAtIDFdLnkgKyB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcykgOiAoYm91bmRSZWN0LnBvc2l0aW9uLnkgKyB0aGlzLnBhZGRpbmdUb3BSaWdodC55KVxuICAgICAgICApXG5cbiAgICAgICAgaXNWYWxpZCA9IChwb3NpdGlvbi54ID4gcmVjdC5wb3NpdGlvbi54KVxuICAgICAgICBpZiAoaXNWYWxpZCkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICBwb3NpdGlvbiA9IG5ldyBQb2ludChcbiAgICAgICAgICBib3VuZFJlY3QuZ2V0UDIoKS54ICAtIHJlY3Quc2l6ZS54IC0gdGhpcy5wYWRkaW5nVG9wUmlnaHQueCxcbiAgICAgICAgICBib3VuZGFyeVBvaW50c1tib3VuZGFyeVBvaW50cy5sZW5ndGggLSAxXS55ICsgKHJlY3RJbmRleCA+IDAgPyB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyA6IHRoaXMucGFkZGluZ1RvcFJpZ2h0LnkpXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIHJlY3QucG9zaXRpb24gPSBwb3NpdGlvblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZW1vdmFibGUgJiYgcmVjdC5nZXRQNCgpLnkgPiBib3VuZFJlY3QuZ2V0UDQoKS55KSB7XG4gICAgICAgIHJlY3QucmVtb3ZhYmxlID0gdHJ1ZVxuICAgICAgfVxuICAgICAgYm91bmRhcnlQb2ludHMgPSBhZGRQb2ludFRvQm91bmRQb2ludHMoYm91bmRhcnlQb2ludHMsIHJlY3QuZ2V0UDQoKS5hZGQodGhpcy5wYWRkaW5nQm90dG9tTmVnTGVmdCksIHRydWUpXG4gICAgfSlcbiAgICByZXR1cm4gcmVjdGFuZ2xlTGlzdFxuICB9XG59XG5cbmV4cG9ydCB7IE5vdENyb3NzaW5nU3RyYXRlZ3ksIEZsb2F0TGVmdFN0cmF0ZWd5LCBGbG9hdFJpZ2h0U3RyYXRlZ3kgfVxuIiwiaW1wb3J0IHJhbmdlIGZyb20gJy4vdXRpbHMvcmFuZ2UuanMnXG5pbXBvcnQgcmVtb3ZlSXRlbSBmcm9tICcuL3V0aWxzL3JlbW92ZS1hcnJheS1pdGVtJ1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50RW1pdHRlcidcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSAnLi9nZW9tZXRyeS9yZWN0YW5nbGUnXG5pbXBvcnQgeyB0cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5IH0gZnJvbSAnLi9nZW9tZXRyeS9kaXN0YW5jZXMnXG5pbXBvcnQgeyBzY29wZXMsIGRlZmF1bHRTY29wZSB9IGZyb20gJy4vc2NvcGUnXG5cbmltcG9ydCB7IEZsb2F0TGVmdFN0cmF0ZWd5IH0gZnJvbSAnLi9wb3NpdGlvbmluZydcbmltcG9ydCB7IEJvdW5kVG9FbGVtZW50IH0gZnJvbSAnLi9ib3VuZGluZydcblxuY29uc3QgYWRkVG9EZWZhdWx0U2NvcGUgPSBmdW5jdGlvbih0YXJnZXQpIHtcbiAgZGVmYXVsdFNjb3BlLmFkZFRhcmdldCh0YXJnZXQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhcmdldCBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGRyYWdnYWJsZXMsIG9wdGlvbnMgPSB7fSkge1xuICAgIHN1cGVyKG9wdGlvbnMpXG4gICAgY29uc3QgdGFyZ2V0ID0gdGhpc1xuXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICB0aW1lRW5kOiAyMDAsXG4gICAgICB0aW1lRXhjYW5nZTogNDAwXG4gICAgfSwgb3B0aW9ucylcblxuICAgIHRoaXMucG9zaXRpb25pbmdTdHJhdGVneSA9IG9wdGlvbnMuc3RyYXRlZ3kgfHwgbmV3IEZsb2F0TGVmdFN0cmF0ZWd5KFxuICAgICAgdGhpcy5nZXRSZWN0YW5nbGUuYmluZCh0aGlzKSxcbiAgICAgIHtcbiAgICAgICAgcmFkaXVzOiA4MCxcbiAgICAgICAgZ2V0RGlzdGFuY2U6IHRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3RvcnkoeyB4OiAxLCB5OiA0IH0pLFxuICAgICAgICByZW1vdmFibGU6IHRydWVcbiAgICAgIH1cbiAgICApXG5cbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG4gICAgZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS50YXJnZXRzLnB1c2godGFyZ2V0KSlcbiAgICB0aGlzLmRyYWdnYWJsZXMgPSBkcmFnZ2FibGVzXG5cbiAgICBUYXJnZXQuZW1pdHRlci5lbWl0KCd0YXJnZXQ6Y3JlYXRlJywgdGhpcylcblxuICAgIHRoaXMuc3RhcnRCb3VuZGluZygpXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIHN0YXJ0Qm91bmRpbmcoKSB7XG4gICAgdGhpcy5ib3VuZCA9IHRoaXMub3B0aW9ucy5ib3VuZCB8fCBCb3VuZFRvRWxlbWVudC5ib3VuZGluZyh0aGlzLmVsZW1lbnQpXG4gIH1cblxuICBwb3NpdGlvbmluZyAoZHJhZ2dhYmxlcywgaW5kZXhlc09mTmV3KSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25pbmdTdHJhdGVneS5wb3NpdGlvbmluZyhkcmFnZ2FibGVzLCBpbmRleGVzT2ZOZXcpXG4gIH1cblxuICBzb3J0aW5nIChvbGREcmFnZ2FibGVzLCBuZXdEcmFnZ2FibGVzLCBpbmRleE9mTmV3cykge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uaW5nU3RyYXRlZ3kuc29ydGluZyhvbGREcmFnZ2FibGVzLCBuZXdEcmFnZ2FibGVzLCBpbmRleE9mTmV3cylcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgbGV0IHJlY3RhbmdsZXMsIGluZGV4ZXNPZk5ld1xuXG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMgPSB0aGlzLmRyYWdnYWJsZXMuZmlsdGVyKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGxldCBlbGVtZW50ID0gZHJhZ2dhYmxlLmVsZW1lbnQucGFyZW50Tm9kZVxuICAgICAgd2hpbGUgKGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQgPT09IHRoaXMuZWxlbWVudCkge1xuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfSlcblxuICAgIGlmICh0aGlzLmlubmVyRHJhZ2dhYmxlcy5sZW5ndGgpIHtcbiAgICAgIGluZGV4ZXNPZk5ldyA9IHJhbmdlKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmxlbmd0aClcbiAgICAgIHJlY3RhbmdsZXMgPSB0aGlzLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICAgIH0pLCBpbmRleGVzT2ZOZXcpXG4gICAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIGluZGV4ZXNPZk5ldylcbiAgICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gdGhpcy5lbWl0KCd0YXJnZXQ6YWRkJywgZHJhZ2dhYmxlKSlcbiAgICB9XG4gIH1cblxuICBnZXRSZWN0YW5nbGUoKSB7XG4gICAgcmV0dXJuIFJlY3RhbmdsZS5mcm9tRWxlbWVudCh0aGlzLmVsZW1lbnQsIHRoaXMuY29udGFpbmVyLCB0cnVlKVxuICB9XG5cbiAgY2F0Y2hEcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5jYXRjaERyYWdnYWJsZSkge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5jYXRjaERyYWdnYWJsZSh0aGlzLCBkcmFnZ2FibGUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRhcmdldFJlY3RhbmdsZSA9IHRoaXMuZ2V0UmVjdGFuZ2xlKClcbiAgICAgIGNvbnN0IGRyYWdnYWJsZVNxdWFyZSA9IGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKS5nZXRTcXVhcmUoKVxuXG4gICAgICByZXR1cm4gZHJhZ2dhYmxlU3F1YXJlIDwgdGFyZ2V0UmVjdGFuZ2xlLmdldFNxdWFyZSgpXG4gICAgICAgICAgICAgICYmIHRhcmdldFJlY3RhbmdsZS5pbmNsdWRlUG9pbnQoZHJhZ2dhYmxlLmdldENlbnRlcigpKVxuICAgIH1cbiAgfVxuXG4gIGdldFBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFJlY3RhbmdsZSgpLnBvc2l0aW9uXG4gIH1cblxuICBnZXRTaXplKCkge1xuICAgIHJldHVybiB0aGlzLmdldFJlY3RhbmdsZSgpLnNpemVcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgc2NvcGVzLmZvckVhY2goKHNjb3BlKSA9PiByZW1vdmVJdGVtKHNjb3BlLnRhcmdldHMsIHRoaXMpKVxuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBbXSlcbiAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIFtdLCAwKVxuICB9XG5cbiAgb25FbmQoZHJhZ2dhYmxlKSB7XG4gICAgY29uc3QgbmV3RHJhZ2dhYmxlc0luZGV4ID0gW11cblxuICAgIGlmICh0aGlzLmdldFJlY3RhbmdsZSgpLmluY2x1ZGVQb2ludChkcmFnZ2FibGUuZ2V0Q2VudGVyKCkpKSB7XG4gICAgICBkcmFnZ2FibGUucG9zaXRpb24gPSB0aGlzLmJvdW5kKGRyYWdnYWJsZS5wb3NpdGlvbiwgZHJhZ2dhYmxlLmdldFNpemUoKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgdGhpcy5lbWl0KCd0YXJnZXQ6YmVmb3JlQWRkJywgZHJhZ2dhYmxlKVxuXG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMgPSB0aGlzLnNvcnRpbmcodGhpcy5pbm5lckRyYWdnYWJsZXMsIFtkcmFnZ2FibGVdLCBuZXdEcmFnZ2FibGVzSW5kZXgpXG4gICAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgbmV3RHJhZ2dhYmxlc0luZGV4KVxuXG4gICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBuZXdEcmFnZ2FibGVzSW5kZXgpXG4gICAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTEpIHtcbiAgICAgIHRoaXMuYWRkUmVtb3ZlT25Nb3ZlKGRyYWdnYWJsZSlcbiAgICB9XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIHNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIGluZGV4ZXNPZk5ldywgdGltZSkge1xuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnNsaWNlKDApLmZvckVhY2goKGRyYWdnYWJsZSwgaSkgPT4ge1xuICAgICAgY29uc3QgcmVjdCA9IHJlY3RhbmdsZXNbaV0sXG4gICAgICAgIHRpbWVFbmQgPSB0aW1lIHx8IHRpbWUgPT09IDAgPyB0aW1lIDogaW5kZXhlc09mTmV3LmluZGV4T2YoaSkgIT09IC0xID8gdGhpcy5vcHRpb25zLnRpbWVFbmQgOiB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2VcblxuICAgICAgaWYgKHJlY3QucmVtb3ZhYmxlKSB7XG4gICAgICAgIGRyYWdnYWJsZS5tb3ZlKGRyYWdnYWJsZS5pbml0aWFsUG9zaXRpb24sIHRpbWVFbmQsIHRydWUsIHRydWUpXG4gICAgICAgIHJlbW92ZUl0ZW0odGhpcy5pbm5lckRyYWdnYWJsZXMsIGRyYWdnYWJsZSlcbiAgICAgICAgdGhpcy5lbWl0KCd0YXJnZXQ6cmVtb3ZlJywgZHJhZ2dhYmxlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZHJhZ2dhYmxlLm1vdmUocmVjdC5wb3NpdGlvbiwgdGltZUVuZCwgdHJ1ZSwgdHJ1ZSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgYWRkKGRyYWdnYWJsZSwgdGltZSkge1xuICAgIGNvbnN0IG5ld0RyYWdnYWJsZXNJbmRleCA9IHRoaXMuaW5uZXJEcmFnZ2FibGVzLmxlbmd0aFxuXG4gICAgdGhpcy5lbWl0KCd0YXJnZXQ6YmVmb3JlQWRkJywgZHJhZ2dhYmxlKVxuXG4gICAgdGhpcy5wdXNoSW5uZXJEcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICAgIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgfSksIG5ld0RyYWdnYWJsZXNJbmRleCwgZHJhZ2dhYmxlKVxuXG4gICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBbbmV3RHJhZ2dhYmxlc0luZGV4XSwgdGltZSB8fCAwKVxuICAgIGlmICh0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkgIT09IC0xKSB7XG4gICAgICB0aGlzLmFkZFJlbW92ZU9uTW92ZShkcmFnZ2FibGUpXG4gICAgfVxuICB9XG5cbiAgcHVzaElubmVyRHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIGlmICh0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSk9PT0tMSkge1xuICAgICAgdGhpcy5pbm5lckRyYWdnYWJsZXMucHVzaChkcmFnZ2FibGUpXG4gICAgfVxuICB9XG5cbiAgYWRkUmVtb3ZlT25Nb3ZlKGRyYWdnYWJsZSkge1xuICAgIGRyYWdnYWJsZS5vbignZHJhZzptb3ZlJywgdGhpcy5yZW1vdmVIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgdGhpcy5yZW1vdmUoZHJhZ2dhYmxlKVxuICAgIH0pXG5cbiAgICB0aGlzLmVtaXQoJ3RhcmdldDphZGQnLCBkcmFnZ2FibGUpXG4gIH1cblxuICByZW1vdmUoZHJhZ2dhYmxlKSB7XG4gICAgZHJhZ2dhYmxlLnVuc3Vic2NyaWJlKCdkcmFnOm1vdmUnLCB0aGlzLnJlbW92ZUhhbmRsZXIpXG5cbiAgICBjb25zdCBpbmRleCA9IHRoaXMuaW5uZXJEcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKVxuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnNwbGljZShpbmRleCwgMSlcblxuICAgIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgfSksIFtdKVxuXG4gICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBbXSlcbiAgICB0aGlzLmVtaXQoJ3RhcmdldDpyZW1vdmUnLCBkcmFnZ2FibGUpXG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5tb3ZlKGRyYWdnYWJsZS5pbml0aWFsUG9zaXRpb24sIDAsIHRydWUsIHRydWUpXG4gICAgICB0aGlzLmVtaXQoJ3RhcmdldDpyZW1vdmUnLCBkcmFnZ2FibGUpXG4gICAgfSlcbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcyA9IFtdXG4gIH1cblxuICBnZXRTb3J0ZWREcmFnZ2FibGVzKCkge1xuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnNsaWNlKClcbiAgfVxuXG4gIGdldCBjb250YWluZXIoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9jb250YWluZXIgPSB0aGlzLl9jb250YWluZXIgfHwgdGhpcy5vcHRpb25zLmNvbnRhaW5lciB8fCB0aGlzLm9wdGlvbnMucGFyZW50IHx8IHRoaXMuZWxlbWVudC5vZmZzZXRQYXJlbnQpXG4gIH1cbn1cblxuVGFyZ2V0LmVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKClcblRhcmdldC5lbWl0dGVyLm9uKCd0YXJnZXQ6Y3JlYXRlJywgYWRkVG9EZWZhdWx0U2NvcGUpXG4iLCJpbXBvcnQgcmVtb3ZlSXRlbSBmcm9tICcuL3V0aWxzL3JlbW92ZS1hcnJheS1pdGVtJ1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50RW1pdHRlcidcbmltcG9ydCBEcmFnZ2FibGUgZnJvbSAnLi9kcmFnZ2FibGUnXG5pbXBvcnQgVGFyZ2V0IGZyb20gJy4vdGFyZ2V0J1xuXG5jb25zdCBzY29wZXMgPSBbXVxuXG5jbGFzcyBTY29wZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKGRyYWdnYWJsZXMsIHRhcmdldHMsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcihvcHRpb25zKVxuICAgIHNjb3Blcy5mb3JFYWNoKChzY29wZSkgPT4ge1xuICAgICAgaWYgKGRyYWdnYWJsZXMpIHtcbiAgICAgICAgZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgICAgICByZW1vdmVJdGVtKHNjb3BlLmRyYWdnYWJsZXMsIGRyYWdnYWJsZSlcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgaWYgKHRhcmdldHMpIHtcbiAgICAgICAgdGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHtcbiAgICAgICAgICByZW1vdmVJdGVtKHNjb3BlLnRhcmdldHMsIHRhcmdldClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gZHJhZ2dhYmxlcyB8fCBbXVxuICAgIHRoaXMudGFyZ2V0cyA9IHRhcmdldHMgfHwgW11cbiAgICBzY29wZXMucHVzaCh0aGlzKVxuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgIHRpbWVFbmQ6IChvcHRpb25zLnRpbWVFbmQpIHx8IDQwMFxuICAgIH1cblxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5kcmFnRW5kQWN0aW9uID0gKCkgPT4gdGhpcy5vbkVuZChkcmFnZ2FibGUpXG4gICAgfSlcbiAgfVxuXG4gIGFkZERyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMucHVzaChkcmFnZ2FibGUpXG4gICAgZHJhZ2dhYmxlLmRyYWdFbmRBY3Rpb24gPSAoKSA9PiB0aGlzLm9uRW5kKGRyYWdnYWJsZSlcbiAgfVxuXG4gIGFkZFRhcmdldCh0YXJnZXQpIHtcbiAgICB0aGlzLnRhcmdldHMucHVzaCh0YXJnZXQpXG4gIH1cblxuICBvbkVuZChkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBzaG90VGFyZ2V0cyA9IHRoaXMudGFyZ2V0cy5maWx0ZXIoKHRhcmdldCkgPT4ge1xuICAgICAgcmV0dXJuIHRhcmdldC5kcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTFcbiAgICB9KS5maWx0ZXIoKHRhcmdldCkgPT4ge1xuICAgICAgcmV0dXJuIHRhcmdldC5jYXRjaERyYWdnYWJsZShkcmFnZ2FibGUpXG4gICAgfSkuc29ydCgoYSwgYikgPT4ge1xuICAgICAgcmV0dXJuIGEuZ2V0UmVjdGFuZ2xlKCkuZ2V0U3F1YXJlKCkgLSBiLmdldFJlY3RhbmdsZSgpLmdldFNxdWFyZSgpXG4gICAgfSlcblxuICAgIGlmIChzaG90VGFyZ2V0cy5sZW5ndGgpIHtcbiAgICAgIHNob3RUYXJnZXRzWzBdLm9uRW5kKGRyYWdnYWJsZSlcbiAgICB9IGVsc2UgaWYgKGRyYWdnYWJsZS50YXJnZXRzLmxlbmd0aCkge1xuICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKGRyYWdnYWJsZS5pbml0aWFsUG9zaXRpb24sIHRoaXMub3B0aW9ucy50aW1lRW5kKVxuICAgIH1cblxuICAgIHRoaXMuZW1pdCgnc2NvcGU6Y2hhbmdlJylcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMudGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHRhcmdldC5yZXNldCgpKVxuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucmVmcmVzaCgpKVxuICAgIHRoaXMudGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHRhcmdldC5yZWZyZXNoKCkpXG4gIH1cblxuICBnZXQgcG9zaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnRhcmdldHMubWFwKCh0YXJnZXQpID0+IHtcbiAgICAgIHJldHVybiB0YXJnZXQuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB0aGlzLmRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpKVxuICAgIH0pXG4gIH1cblxuICBzZXQgcG9zaXRpb25zKHBvc2l0aW9ucykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSAnd3JvbmcgYXJyYXkgbGVuZ3RoJ1xuICAgIGlmIChwb3NpdGlvbnMubGVuZ3RoID09PSB0aGlzLnRhcmdldHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB0YXJnZXQucmVzZXQoKSlcblxuICAgICAgcG9zaXRpb25zLmZvckVhY2goKHRhcmdldEluZGV4ZXMsIGkpID0+IHtcbiAgICAgICAgdGFyZ2V0SW5kZXhlcy5mb3JFYWNoKChpbmRleCkgPT4ge1xuICAgICAgICAgIHRoaXMudGFyZ2V0c1tpXS5hZGQodGhpcy5kcmFnZ2FibGVzW2luZGV4XSlcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG1lc3NhZ2VcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgZGVmYXVsdFNjb3BlID0gbmV3IFNjb3BlKClcblxuZnVuY3Rpb24gc2NvcGUoZm4pIHtcbiAgY29uc3QgY3VycmVudFNjb3BlID0gbmV3IFNjb3BlKClcblxuICBjb25zdCBhZGREcmFnZ2FibGVUb1Njb3BlID0gZnVuY3Rpb24oZHJhZ2dhYmxlKSB7XG4gICAgY3VycmVudFNjb3BlLmFkZERyYWdnYWJsZShkcmFnZ2FibGUpXG4gICAgRHJhZ2dhYmxlLmVtaXR0ZXIuaW50ZXJydXB0KClcbiAgfVxuXG4gIGNvbnN0IGFkZFRhcmdldFRvU2NvcGUgPSBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICBjdXJyZW50U2NvcGUuYWRkVGFyZ2V0KHRhcmdldClcbiAgICBEcmFnZ2FibGUuZW1pdHRlci5pbnRlcnJ1cHQoKVxuICB9XG5cbiAgRHJhZ2dhYmxlLmVtaXR0ZXIucHJlcGVuZE9uKCdkcmFnZ2FibGU6Y3JlYXRlJywgYWRkRHJhZ2dhYmxlVG9TY29wZSlcbiAgVGFyZ2V0LmVtaXR0ZXIucHJlcGVuZE9uKCd0YXJnZXQ6Y3JlYXRlJywgYWRkVGFyZ2V0VG9TY29wZSlcbiAgZm4uY2FsbCgpXG4gIERyYWdnYWJsZS5lbWl0dGVyLnVuc3Vic2NyaWJlKCdkcmFnZ2FibGU6Y3JlYXRlJywgYWRkRHJhZ2dhYmxlVG9TY29wZSlcbiAgVGFyZ2V0LmVtaXR0ZXIudW5zdWJzY3JpYmUoJ3RhcmdldDpjcmVhdGUnLCBhZGRUYXJnZXRUb1Njb3BlKVxuICByZXR1cm4gY3VycmVudFNjb3BlXG59XG5cbmV4cG9ydCB7IHNjb3BlcywgZGVmYXVsdFNjb3BlLCBTY29wZSwgc2NvcGUgfVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGhyb3R0bGUoZnVuYywgd2FpdCkge1xuICBsZXQgbGFzdFRpbWUgPSAwXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGV4ZWN1dGVkRnVuY3Rpb24oKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXNcbiAgICBjb25zdCBhcmdzID0gYXJndW1lbnRzXG5cbiAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpXG4gICAgaWYgKG5vdyAtIGxhc3RUaW1lID49IHdhaXQpIHtcbiAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncylcbiAgICAgIGxhc3RUaW1lID0gbm93XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnRFbWl0dGVyJ1xuaW1wb3J0IHsgQm91bmRUb0VsZW1lbnQgfSBmcm9tICcuL2JvdW5kaW5nJ1xuaW1wb3J0IFBvaW50IGZyb20gJy4vZ2VvbWV0cnkvcG9pbnQnXG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gJy4vZ2VvbWV0cnkvcmVjdGFuZ2xlJ1xuaW1wb3J0IHsgZGVmYXVsdFNjb3BlIH0gZnJvbSAnLi9zY29wZSdcbmltcG9ydCB0aHJvdHRsZSBmcm9tICcuL3V0aWxzL3Rocm90dGxlJ1xuaW1wb3J0IGdldFBhcmVudHNDaGFpbiBmcm9tICcuL3V0aWxzL2dldC1wYXJlbnRzLWNoYWluJ1xuXG5jb25zdCB0aHJvdHRsZWREcmFnT3ZlciA9IChjYWxsYmFjaywgZHVyYXRpb24pID0+IHtcbiAgY29uc3QgdGhyb3R0bGVkQ2FsbGJhY2sgPSB0aHJvdHRsZSgoZXZlbnQpID0+IGNhbGxiYWNrKGV2ZW50KSwgZHVyYXRpb24pXG4gIHJldHVybiAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhyb3R0bGVkQ2FsbGJhY2soZXZlbnQpXG4gIH1cbn1cblxuY29uc3QgcGFzc2l2ZUZhbHNlID0geyBwYXNzaXZlOiBmYWxzZSB9XG5cbmNvbnN0IGlzVG91Y2ggPSBuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHMgPiAwXG5jb25zdCBtb3VzZUV2ZW50cyA9IHtcbiAgc3RhcnQ6ICdtb3VzZWRvd24nLFxuICBtb3ZlOiAnbW91c2Vtb3ZlJyxcbiAgZW5kOiAnbW91c2V1cCdcbn1cbmNvbnN0IHRvdWNoRXZlbnRzID0ge1xuICBzdGFydDogJ3RvdWNoc3RhcnQnLFxuICBtb3ZlOiAndG91Y2htb3ZlJyxcbiAgZW5kOiAndG91Y2hlbmQnXG59XG5jb25zdCBkcmFnZ2FibGVzID0gW11cbmNvbnN0IHRyYW5zZm9ybVByb3BlcnR5ID0gJ3RyYW5zZm9ybSdcbmNvbnN0IHRyYW5zaXRpb25Qcm9wZXJ0eSA9ICd0cmFuc2l0aW9uJ1xuXG5mdW5jdGlvbiBnZXRUb3VjaEJ5SUQoZWxlbWVudCwgdG91Y2hJZCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnQuY2hhbmdlZFRvdWNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZWxlbWVudC5jaGFuZ2VkVG91Y2hlc1tpXS5pZGVudGlmaWVyID09PSB0b3VjaElkKSB7XG4gICAgICByZXR1cm4gZWxlbWVudC5jaGFuZ2VkVG91Y2hlc1tpXVxuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cblxuZnVuY3Rpb24gcHJldmVudERvdWJsZUluaXQoZHJhZ2dhYmxlKSB7XG4gIGNvbnN0IG1lc3NhZ2UgPSBcImZvciB0aGlzIGVsZW1lbnQgRHJhZ2VlLkRyYWdnYWJsZSBpcyBhbHJlYWR5IGV4aXN0LCBkb24ndCBjcmVhdGUgaXQgdHdpY2UgXCJcbiAgaWYgKGRyYWdnYWJsZXMuc29tZSgoZXhpc3RpbmcpID0+IGRyYWdnYWJsZS5lbGVtZW50ID09PSBleGlzdGluZy5lbGVtZW50KSkge1xuICAgIHRocm93IG1lc3NhZ2VcbiAgfVxuICBkcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxufVxuXG5mdW5jdGlvbiBhZGRUb0RlZmF1bHRTY29wZShkcmFnZ2FibGUpIHtcbiAgZGVmYXVsdFNjb3BlLmFkZERyYWdnYWJsZShkcmFnZ2FibGUpXG59XG5cbmZ1bmN0aW9uIGNvcHlTdHlsZXMoc291cmNlLCBkZXN0aW5hdGlvbikge1xuICBjb25zdCBjcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHNvdXJjZSlcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qga2V5ID0gY3NbaV1cbiAgICBpZiAoKGtleS5pbmRleE9mKCd0cmFuc2l0aW9uJykgPCAwKSAmJiAoa2V5LmluZGV4T2YoJ3RyYW5zZm9ybScpIDwgMCkpIHtcbiAgICAgIGRlc3RpbmF0aW9uLnN0eWxlW2tleV0gPSBjc1trZXldXG4gICAgfVxuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzb3VyY2UuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICBjb3B5U3R5bGVzKHNvdXJjZS5jaGlsZHJlbltpXSwgZGVzdGluYXRpb24uY2hpbGRyZW5baV0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhZ2dhYmxlIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgb3B0aW9ucz17fSkge1xuICAgIHN1cGVyKG9wdGlvbnMpXG4gICAgdGhpcy50YXJnZXRzID0gW11cbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIHByZXZlbnREb3VibGVJbml0KHRoaXMpXG4gICAgRHJhZ2dhYmxlLmVtaXR0ZXIuZW1pdCgnZHJhZ2dhYmxlOmNyZWF0ZScsIHRoaXMpXG4gICAgdGhpcy5fZW5hYmxlID0gdHJ1ZVxuICAgIHRoaXMuc3RhcnRCb3VuZGluZygpXG4gICAgdGhpcy5zdGFydFBvc2l0aW9uaW5nKClcbiAgICB0aGlzLnN0YXJ0TGlzdGVuaW5nKClcbiAgfVxuXG4gIHN0YXJ0Qm91bmRpbmcoKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5ib3VuZCkge1xuICAgICAgdGhpcy5ib3VuZGluZyA9IHsgYm91bmQ6IHRoaXMub3B0aW9ucy5ib3VuZCB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYm91bmRpbmcgPSBuZXcgQm91bmRUb0VsZW1lbnQodGhpcy5jb250YWluZXIsIHRoaXMuY29udGFpbmVyKVxuICAgIH1cbiAgfVxuXG4gIHN0YXJ0UG9zaXRpb25pbmcoKSB7XG4gICAgdGhpcy5fc2V0RGVmYXVsdFRyYW5zaXRpb24oKVxuICAgIHRoaXMub2Zmc2V0ID0gdGhpcy5pc0NvbnNpZGVyVHJhbnNmb3JtT2Zmc2V0XG4gICAgICA/IFBvaW50LmVsZW1lbnRCb3VuZGluZ09mZnNldCh0aGlzLmVsZW1lbnQsIHRoaXMuY29udGFpbmVyKVxuICAgICAgOiBQb2ludC5lbGVtZW50T2Zmc2V0KHRoaXMuZWxlbWVudCwgdGhpcy5jb250YWluZXIpXG4gICAgdGhpcy5waW5uZWRQb3NpdGlvbiA9IHRoaXMub2Zmc2V0XG4gICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMub2Zmc2V0XG4gICAgdGhpcy5pbml0aWFsUG9zaXRpb24gPSB0aGlzLm9wdGlvbnMucG9zaXRpb24gfHwgdGhpcy5vZmZzZXRcblxuICAgIHRoaXMucGluUG9zaXRpb24odGhpcy5pbml0aWFsUG9zaXRpb24pXG5cbiAgICBpZiAodGhpcy5ib3VuZGluZy5yZWZyZXNoKSB7XG4gICAgICB0aGlzLmJvdW5kaW5nLnJlZnJlc2goKVxuICAgIH1cbiAgfVxuXG4gIHN0YXJ0TGlzdGVuaW5nKCkge1xuICAgIHRoaXMuX2RyYWdTdGFydCA9IChldmVudCkgPT4gdGhpcy5kcmFnU3RhcnQoZXZlbnQpXG4gICAgdGhpcy5fZHJhZ01vdmUgPSAoZXZlbnQpID0+IHRoaXMuZHJhZ01vdmUoZXZlbnQpXG4gICAgdGhpcy5fZHJhZ0VuZCA9IChldmVudCkgPT4gdGhpcy5kcmFnRW5kKGV2ZW50KVxuICAgIHRoaXMuX25hdGl2ZURyYWdTdGFydCA9IChldmVudCkgPT4gdGhpcy5uYXRpdmVEcmFnU3RhcnQoZXZlbnQpXG4gICAgdGhpcy5fbmF0aXZlRHJhZ092ZXIgPSB0aHJvdHRsZWREcmFnT3ZlcigoZXZlbnQpID0+IHRoaXMubmF0aXZlRHJhZ092ZXIoZXZlbnQpLCB0aGlzLmRyYWdPdmVyVGhyb3R0bGVEdXJhdGlvbilcbiAgICB0aGlzLl9uYXRpdmVEcmFnRW5kID0gKGV2ZW50KSA9PiB0aGlzLm5hdGl2ZURyYWdFbmQoZXZlbnQpXG4gICAgdGhpcy5fbmF0aXZlRHJvcCA9IChldmVudCkgPT4gdGhpcy5uYXRpdmVEcm9wKGV2ZW50KVxuICAgIHRoaXMuX3Njcm9sbCA9IChldmVudCkgPT4gdGhpcy5vblNjcm9sbChldmVudClcblxuICAgIHRoaXMuaGFuZGxlci5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQsIHBhc3NpdmVGYWxzZSlcbiAgICB0aGlzLmhhbmRsZXIuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0LCBwYXNzaXZlRmFsc2UpXG4gIH1cblxuICBnZXRTaXplKCkge1xuICAgIHJldHVybiBQb2ludC5lbGVtZW50U2l6ZSh0aGlzLmVsZW1lbnQpXG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5vZmZzZXQuYWRkKHRoaXMuX3RyYW5zZm9ybVBvc2l0aW9uIHx8IG5ldyBQb2ludCgwLCAwKSlcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvblxuICB9XG5cbiAgZ2V0Q2VudGVyKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLmdldFNpemUoKS5tdWx0KDAuNSkpXG4gIH1cblxuICBfc2V0RGVmYXVsdFRyYW5zaXRpb24gKCkge1xuICAgIGlmICghdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV0pIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5lbGVtZW50KVt0cmFuc2l0aW9uUHJvcGVydHldXG4gICAgfVxuICB9XG5cbiAgX3NldFRyYW5zaXRpb24odGltZSkge1xuICAgIGxldCB0cmFuc2l0aW9uID0gdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV1cbiAgICBjb25zdCB0cmFuc2l0aW9uQ3NzID0gYHRyYW5zZm9ybSAke3RpbWV9bXNgXG5cbiAgICBpZiAoIS90cmFuc2Zvcm1cXHM/XFxkKm0/cz8vLnRlc3QodHJhbnNpdGlvbikpIHtcbiAgICAgIGlmICh0cmFuc2l0aW9uKSB7XG4gICAgICAgIHRyYW5zaXRpb24gKz0gYCwgJHt0cmFuc2l0aW9uQ3NzfWBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyYW5zaXRpb24gPSB0cmFuc2l0aW9uQ3NzXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyYW5zaXRpb24gPSB0cmFuc2l0aW9uLnJlcGxhY2UoL3RyYW5zZm9ybVxccz9cXGQqbT9zPy9nLCB0cmFuc2l0aW9uQ3NzKVxuICAgIH1cblxuICAgIGlmICh0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNpdGlvblByb3BlcnR5XSAhPT0gdHJhbnNpdGlvbikge1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV0gPSB0cmFuc2l0aW9uXG4gICAgfVxuICB9XG5cbiAgX3NldFRyYW5zbGF0ZShwb2ludCkge1xuICAgIHRoaXMuX3RyYW5zZm9ybVBvc2l0aW9uID0gcG9pbnRcbiAgICBjb25zdCB0cmFuc2xhdGVDc3MgPSBgdHJhbnNsYXRlM2QoJHtwb2ludC54fXB4LCAke3BvaW50Lnl9cHgsIDBweClgXG5cbiAgICBsZXQgdHJhbnNmb3JtID0gdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BlcnR5XVxuXG4gICAgaWYgKHRoaXMuc2hvdWxkUmVtb3ZlWmVyb1RyYW5zbGF0ZSAmJiBwb2ludC54ID09PSAwICYmIHBvaW50LnkgPT09IDApIHtcbiAgICAgIHRyYW5zZm9ybSA9IHRyYW5zZm9ybS5yZXBsYWNlKC90cmFuc2xhdGUzZFxcKFteKV0rXFwpLywgJycpXG4gICAgfSBlbHNlIGlmICghL3RyYW5zbGF0ZTNkXFwoW14pXStcXCkvLnRlc3QodHJhbnNmb3JtKSkge1xuICAgICAgaWYgKHRyYW5zZm9ybSkge1xuICAgICAgICB0cmFuc2Zvcm0gKz0gJyAnXG4gICAgICB9XG4gICAgICB0cmFuc2Zvcm0gKz0gdHJhbnNsYXRlQ3NzXG4gICAgfSBlbHNlIHtcbiAgICAgIHRyYW5zZm9ybSA9IHRyYW5zZm9ybS5yZXBsYWNlKC90cmFuc2xhdGUzZFxcKFteKV0rXFwpLywgdHJhbnNsYXRlQ3NzKVxuICAgIH1cblxuICAgIGlmICh0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcGVydHldICE9PSB0cmFuc2Zvcm0pIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wZXJ0eV0gPSB0cmFuc2Zvcm1cbiAgICB9XG4gIH1cblxuICBtb3ZlKHBvaW50LCB0aW1lPTAsIGlzU2lsZW50PWZhbHNlKSB7XG4gICAgcG9pbnQgPSBwb2ludC5jbG9uZSgpXG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvaW50XG5cbiAgICB0aGlzLl9zZXRUcmFuc2l0aW9uKHRpbWUpXG4gICAgdGhpcy5fc2V0VHJhbnNsYXRlKHBvaW50LnN1Yih0aGlzLm9mZnNldCkpXG5cbiAgICBpZiAoIWlzU2lsZW50KSB7XG4gICAgICB0aGlzLmVtaXQoJ2RyYWc6bW92ZScpXG4gICAgfVxuICB9XG5cbiAgcGluUG9zaXRpb24ocG9pbnQsIHRpbWU9MCwgc2lsZW50PXRydWUpIHtcbiAgICB0aGlzLnBpbm5lZFBvc2l0aW9uID0gcG9pbnQuY2xvbmUoKVxuICAgIHRoaXMubW92ZSh0aGlzLnBpbm5lZFBvc2l0aW9uLCB0aW1lLCBzaWxlbnQpXG4gIH1cblxuICByZXNldFBvc2l0aW9uVG9Jbml0aWFsICgpIHtcbiAgICB0aGlzLnBpblBvc2l0aW9uKHRoaXMuaW5pdGlhbFBvc2l0aW9uKVxuICB9XG5cbiAgcmVmcmVzaFBvc2l0aW9uICgpIHtcbiAgICB0aGlzLnNldFBvc2l0aW9uKHRoaXMuZ2V0UG9zaXRpb24oKSlcbiAgfVxuXG4gIHNldFBvc2l0aW9uKHBvaW50KSB7XG4gICAgcG9pbnQgPSBwb2ludC5jbG9uZSgpXG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvaW50XG4gICAgdGhpcy5fc2V0VHJhbnNpdGlvbigwKVxuICAgIHRoaXMuX3NldFRyYW5zbGF0ZShwb2ludC5zdWIodGhpcy5vZmZzZXQpKVxuICB9XG5cbiAgZGV0ZXJtaW5lRGlyZWN0aW9uKHBvaW50KSB7XG4gICAgdGhpcy5fcHJldmlvdXNEaXJlY3Rpb25Qb3NpdGlvbiB8fD0gdGhpcy5fc3RhcnRQb3NpdGlvblxuXG4gICAgdGhpcy5sZWZ0RGlyZWN0aW9uID0gKHRoaXMuX3ByZXZpb3VzRGlyZWN0aW9uUG9zaXRpb24ueCA8IHBvaW50LngpXG4gICAgdGhpcy5yaWdodERpcmVjdGlvbiA9ICh0aGlzLl9wcmV2aW91c0RpcmVjdGlvblBvc2l0aW9uLnggPiBwb2ludC54KVxuICAgIHRoaXMudXBEaXJlY3Rpb24gPSAodGhpcy5fcHJldmlvdXNEaXJlY3Rpb25Qb3NpdGlvbi55ID4gcG9pbnQueSlcbiAgICB0aGlzLmRvd25EaXJlY3Rpb24gPSAodGhpcy5fcHJldmlvdXNEaXJlY3Rpb25Qb3NpdGlvbi55IDwgcG9pbnQueSlcblxuICAgIHRoaXMuX3ByZXZpb3VzRGlyZWN0aW9uUG9zaXRpb24gPSBwb2ludFxuICB9XG5cbiAgc2VlbXNTY3JvbGxpbmcoKSB7XG4gICAgcmV0dXJuICgrbmV3IERhdGUoKSAtIHRoaXMuX3N0YXJ0VG91Y2hUaW1lc3RhbXApIDwgdGhpcy50b3VjaERyYWdnaW5nVGhyZXNob2xkXG4gIH1cblxuICBzaG91bGRVc2VOYXRpdmVEcmFnQW5kRHJvcCgpIHtcbiAgICBpZiAodGhpcy5pc1RvdWNoRXZlbnQpIHtcbiAgICAgIHJldHVybiB0aGlzLm5hdGl2ZURyYWdBbmREcm9wICYmIHRoaXMuZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wT25Ub3VjaFxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5uYXRpdmVEcmFnQW5kRHJvcFxuICAgIH1cbiAgfVxuXG4gIGRyYWdTdGFydChldmVudCkge1xuICAgIGlmICghdGhpcy5fZW5hYmxlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5zdG9wUHJvcGFnYXRpb25PbkRyYWdTdGFydCkge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICB9XG5cbiAgICB0aGlzLmlzVG91Y2hFdmVudCA9IChpc1RvdWNoICYmIChldmVudCBpbnN0YW5jZW9mIHdpbmRvdy5Ub3VjaEV2ZW50KSlcblxuICAgIHRoaXMudG91Y2hQb2ludCA9IHRoaXMuX3N0YXJ0VG91Y2hQb2ludCA9IG5ldyBQb2ludChcbiAgICAgIHRoaXMuaXNUb3VjaEV2ZW50ID8gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVggOiBldmVudC5jbGllbnRYLFxuICAgICAgdGhpcy5pc1RvdWNoRXZlbnQgPyBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWSA6IGV2ZW50LmNsaWVudFlcbiAgICApXG5cbiAgICB0aGlzLl9zdGFydFBvc2l0aW9uID0gdGhpcy5nZXRQb3NpdGlvbigpXG4gICAgaWYgKHRoaXMuaXNUb3VjaEV2ZW50KSB7XG4gICAgICB0aGlzLl90b3VjaElkID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uaWRlbnRpZmllclxuICAgICAgdGhpcy5fc3RhcnRUb3VjaFRpbWVzdGFtcCA9ICtuZXcgRGF0ZSgpXG4gICAgfVxuXG4gICAgdGhpcy5fc3RhcnRXaW5kb3dTY3JvbGxQb2ludCA9IHRoaXMud2luZG93U2Nyb2xsUG9pbnRcbiAgICB0aGlzLl9zdGFydFNjcm9sbEVsZW1lbnRzT2Zmc2V0ID0gdGhpcy5zY3JvbGxFbGVtZW50c09mZnNldFxuXG4gICAgaWYgKGV2ZW50LnRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSW5wdXRFbGVtZW50IHx8XG4gICAgICAgICAgZXZlbnQudGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJbnB1dEVsZW1lbnQpIHtcbiAgICAgIGV2ZW50LnRhcmdldC5mb2N1cygpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2hvdWxkVXNlTmF0aXZlRHJhZ0FuZERyb3AoKSkge1xuICAgICAgaWYgKHRoaXMuaXNUb3VjaEV2ZW50ICYmIHRoaXMuZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wT25Ub3VjaCkge1xuICAgICAgICB0aGlzLl9zdGFydFBhcmVudHNTY3JvbGxPZmZzZXQgPSB0aGlzLnBhcmVudHNTY3JvbGxPZmZzZXRcblxuICAgICAgICBjb25zdCBlbXVsYXRlT25GaXJzdE1vdmUgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5zZWVtc1Njcm9sbGluZygpKSB7XG4gICAgICAgICAgICB0aGlzLmNhbmNlbERyYWdnaW5nKClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3AoZXZlbnQpXG4gICAgICAgICAgfVxuICAgICAgICAgIGNhbmNlbEVtdWxhdGlvbigpXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2FuY2VsRW11bGF0aW9uID0gKCkgPT4ge1xuICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgZW11bGF0ZU9uRmlyc3RNb3ZlKVxuICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCBjYW5jZWxFbXVsYXRpb24pXG4gICAgICAgIH1cblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIGVtdWxhdGVPbkZpcnN0TW92ZSwgcGFzc2l2ZUZhbHNlKVxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgY2FuY2VsRW11bGF0aW9uLCBwYXNzaXZlRmFsc2UpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgdGhpcy5fbmF0aXZlRHJhZ1N0YXJ0KVxuICAgICAgICB0aGlzLmVsZW1lbnQuZHJhZ2dhYmxlID0gdHJ1ZVxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fbmF0aXZlRHJhZ0VuZCwgcGFzc2l2ZUZhbHNlKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlLCBwYXNzaXZlRmFsc2UpXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlLCBwYXNzaXZlRmFsc2UpXG5cbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kLCBwYXNzaXZlRmFsc2UpXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZCwgcGFzc2l2ZUZhbHNlKVxuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9zY3JvbGwpXG4gICAgdGhpcy5zY3JvbGxFbGVtZW50cy5mb3JFYWNoKChwKSA9PiBwLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX3Njcm9sbCkpXG5cbiAgICB0aGlzLmVtaXQoJ2RyYWc6c3RhcnQnKVxuICB9XG5cbiAgZHJhZ01vdmUoZXZlbnQpIHtcbiAgICBsZXQgdG91Y2hcblxuICAgIHRoaXMuaXNEcmFnZ2luZyA9IHRydWVcblxuICAgIHRoaXMuaXNUb3VjaEV2ZW50ID0gKGlzVG91Y2ggJiYgKGV2ZW50IGluc3RhbmNlb2Ygd2luZG93LlRvdWNoRXZlbnQpKVxuICAgIGlmICh0aGlzLmlzVG91Y2hFdmVudCkge1xuICAgICAgdG91Y2ggPSBnZXRUb3VjaEJ5SUQoZXZlbnQsIHRoaXMuX3RvdWNoSWQpXG5cbiAgICAgIGlmICghdG91Y2gpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnNlZW1zU2Nyb2xsaW5nKCkpIHtcbiAgICAgICAgdGhpcy5jYW5jZWxEcmFnZ2luZygpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIHRoaXMudG91Y2hQb2ludCA9IG5ldyBQb2ludChcbiAgICAgIHRoaXMuaXNUb3VjaEV2ZW50ID8gdG91Y2gucGFnZVggOiBldmVudC5jbGllbnRYLFxuICAgICAgdGhpcy5pc1RvdWNoRXZlbnQgPyB0b3VjaC5wYWdlWSA6IGV2ZW50LmNsaWVudFlcbiAgICApXG5cbiAgICBsZXQgcG9pbnQgPSB0aGlzLl9zdGFydFBvc2l0aW9uLmFkZCh0aGlzLnRvdWNoUG9pbnQuc3ViKHRoaXMuX3N0YXJ0VG91Y2hQb2ludCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy53aW5kb3dTY3JvbGxQb2ludC5zdWIodGhpcy5fc3RhcnRXaW5kb3dTY3JvbGxQb2ludCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy5zY3JvbGxFbGVtZW50c09mZnNldC5zdWIodGhpcy5fc3RhcnRTY3JvbGxFbGVtZW50c09mZnNldCkpXG5cbiAgICBwb2ludCA9IHRoaXMuYm91bmRpbmcuYm91bmQocG9pbnQsIHRoaXMuZ2V0U2l6ZSgpKVxuICAgIHRoaXMuZGV0ZXJtaW5lRGlyZWN0aW9uKHBvaW50KVxuICAgIHRoaXMubW92ZShwb2ludClcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZHJhZ2VlLWFjdGl2ZScpXG4gIH1cblxuICBkcmFnRW5kKGV2ZW50KSB7XG4gICAgdGhpcy5pc1RvdWNoRXZlbnQgPSAoaXNUb3VjaCAmJiAoZXZlbnQgaW5zdGFuY2VvZiB3aW5kb3cuVG91Y2hFdmVudCkpXG5cbiAgICBpZiAodGhpcy5pc1RvdWNoRXZlbnQgJiYgIWdldFRvdWNoQnlJRChldmVudCwgdGhpcy5fdG91Y2hJZCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLmlzRHJhZ2dpbmcpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfVxuXG4gICAgdGhpcy5kcmFnRW5kQWN0aW9uKClcbiAgICB0aGlzLmVtaXQoJ2RyYWc6ZW5kJylcbiAgICB0aGlzLmNhbmNlbERyYWdnaW5nKClcblxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdlZS1hY3RpdmUnKSlcbiAgfVxuXG4gIG9uU2Nyb2xsKF9ldmVudCkge1xuICAgIGxldCBwb2ludCA9IHRoaXMuX3N0YXJ0UG9zaXRpb24uYWRkKHRoaXMudG91Y2hQb2ludC5zdWIodGhpcy5fc3RhcnRUb3VjaFBvaW50KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZCh0aGlzLndpbmRvd1Njcm9sbFBvaW50LnN1Yih0aGlzLl9zdGFydFdpbmRvd1Njcm9sbFBvaW50KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZCh0aGlzLnNjcm9sbEVsZW1lbnRzT2Zmc2V0LnN1Yih0aGlzLl9zdGFydFNjcm9sbEVsZW1lbnRzT2Zmc2V0KSlcblxuICAgIHBvaW50ID0gdGhpcy5ib3VuZGluZy5ib3VuZChwb2ludCwgdGhpcy5nZXRTaXplKCkpXG4gICAgaWYgKCF0aGlzLm5hdGl2ZURyYWdBbmREcm9wKSB7XG4gICAgICB0aGlzLmRldGVybWluZURpcmVjdGlvbihwb2ludClcbiAgICAgIHRoaXMubW92ZShwb2ludClcbiAgICB9XG4gIH1cblxuICBuYXRpdmVEcmFnU3RhcnQoZXZlbnQpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0JywgJ0ZpcmVGb3ggZml4JylcbiAgICBldmVudC5kYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCA9ICdtb3ZlJ1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgdGhpcy5fbmF0aXZlRHJhZ092ZXIpXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIHRoaXMuX25hdGl2ZURyYWdFbmQpXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIHRoaXMuX25hdGl2ZURyb3ApXG4gIH1cblxuICBuYXRpdmVEcmFnT3ZlcihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBldmVudC5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9ICdtb3ZlJ1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkcmFnZWUtcGxhY2Vob2xkZXInKVxuICAgIGlmIChldmVudC5jbGllbnRYID09PSAwICYmIGV2ZW50LmNsaWVudFkgPT09IDApIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMudG91Y2hQb2ludCA9IG5ldyBQb2ludChldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZKVxuICAgIGxldCBwb2ludCA9IHRoaXMuX3N0YXJ0UG9zaXRpb24uYWRkKHRoaXMudG91Y2hQb2ludC5zdWIodGhpcy5fc3RhcnRUb3VjaFBvaW50KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZCh0aGlzLndpbmRvd1Njcm9sbFBvaW50LnN1Yih0aGlzLl9zdGFydFdpbmRvd1Njcm9sbFBvaW50KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZCh0aGlzLnNjcm9sbEVsZW1lbnRzT2Zmc2V0LnN1Yih0aGlzLl9zdGFydFNjcm9sbEVsZW1lbnRzT2Zmc2V0KSlcbiAgICBwb2ludCA9IHRoaXMuYm91bmRpbmcuYm91bmQocG9pbnQsIHRoaXMuZ2V0U2l6ZSgpKVxuICAgIHRoaXMuZGV0ZXJtaW5lRGlyZWN0aW9uKHBvaW50KVxuICAgIHRoaXMucG9zaXRpb24gPSBwb2ludFxuICAgIHRoaXMuZW1pdCgnZHJhZzptb3ZlJylcbiAgfVxuXG4gIG5hdGl2ZURyYWdFbmQoX2V2ZW50KSB7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdlZS1wbGFjZWhvbGRlcicpXG4gICAgdGhpcy5kcmFnRW5kQWN0aW9uKClcbiAgICB0aGlzLmVtaXQoJ2RyYWc6ZW5kJylcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIHRoaXMuX25hdGl2ZURyYWdPdmVyKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzLl9uYXRpdmVEcm9wKVxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9zY3JvbGwpXG4gICAgdGhpcy5zY3JvbGxFbGVtZW50cy5mb3JFYWNoKChwKSA9PiBwLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX3Njcm9sbCkpXG4gICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2VcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkcmFnZ2FibGUnKVxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCB0aGlzLl9uYXRpdmVEcmFnU3RhcnQpXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdlZS1hY3RpdmUnKVxuICB9XG5cbiAgbmF0aXZlRHJvcChldmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgY2FuY2VsRHJhZ2dpbmcgKCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcblxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX25hdGl2ZURyYWdFbmQpXG5cbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fc2Nyb2xsKVxuICAgIHRoaXMuc2Nyb2xsRWxlbWVudHMuZm9yRWFjaCgocCkgPT4gcC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9zY3JvbGwpKVxuXG4gICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2VcbiAgICB0aGlzLl9wcmV2aW91c0RpcmVjdGlvblBvc2l0aW9uID0gbnVsbFxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2RyYWdnYWJsZScpXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIHRoaXMuX25hdGl2ZURyYWdTdGFydClcbiAgfVxuXG4gIGNvcHlTdHlsZXMoc291cmNlLCBkZXN0aW5hdGlvbikge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuY29weVN0eWxlcykge1xuICAgICAgdGhpcy5vcHRpb25zLmNvcHlTdHlsZXMoc291cmNlLCBkZXN0aW5hdGlvbilcbiAgICB9IGVsc2Uge1xuICAgICAgY29weVN0eWxlcyhzb3VyY2UsIGRlc3RpbmF0aW9uKVxuICAgIH1cbiAgfVxuXG4gIGVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcChldmVudCkge1xuICAgIGNvbnN0IGNvbnRhaW5lclJlY3QgPSB0aGlzLmNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIGNvbnN0IGNsb25lZEVsZW1lbnQgPSB0aGlzLmVsZW1lbnQuY2xvbmVOb2RlKHRydWUpXG4gICAgY2xvbmVkRWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wZXJ0eV0gPSAnJ1xuICAgIHRoaXMuY29weVN0eWxlcyh0aGlzLmVsZW1lbnQsIGNsb25lZEVsZW1lbnQpXG4gICAgY2xvbmVkRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkcmFnZWUtbmF0aXZlLWVtdWxhdGlvbicpXG4gICAgY2xvbmVkRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSdcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNsb25lZEVsZW1lbnQpXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RyYWdlZS1wbGFjZWhvbGRlcicpXG5cbiAgICBjb25zdCBlbXVsYXRpb25EcmFnZ2FibGUgPSBuZXcgRHJhZ2dhYmxlKGNsb25lZEVsZW1lbnQsIHtcbiAgICAgIGNvbnRhaW5lcjogZG9jdW1lbnQuYm9keSxcbiAgICAgIHRvdWNoRHJhZ2dpbmdUaHJlc2hvbGQ6IDAsXG4gICAgICBib3VuZChwb2ludCkge1xuICAgICAgICByZXR1cm4gcG9pbnRcbiAgICAgIH0sXG4gICAgICBvbjoge1xuICAgICAgICAnZHJhZzptb3ZlJzogKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNvbnRhaW5lclJlY3RQb2ludCA9IG5ldyBQb2ludChjb250YWluZXJSZWN0LmxlZnQsIGNvbnRhaW5lclJlY3QudG9wKVxuICAgICAgICAgIHRoaXMucG9zaXRpb24gPSBlbXVsYXRpb25EcmFnZ2FibGUucG9zaXRpb24uc3ViKGNvbnRhaW5lclJlY3RQb2ludClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN1Yih0aGlzLl9zdGFydFdpbmRvd1Njcm9sbFBvaW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMuX3N0YXJ0UGFyZW50c1Njcm9sbE9mZnNldClcblxuICAgICAgICAgIHRoaXMuZGV0ZXJtaW5lRGlyZWN0aW9uKHRoaXMucG9zaXRpb24pXG4gICAgICAgICAgdGhpcy5lbWl0KCdkcmFnOm1vdmUnKVxuICAgICAgICB9LFxuICAgICAgICAnZHJhZzplbmQnOiAoKSA9PiB7XG4gICAgICAgICAgZW11bGF0aW9uRHJhZ2dhYmxlLmRlc3Ryb3koKVxuICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoY2xvbmVkRWxlbWVudClcbiAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2VlLXBsYWNlaG9sZGVyJylcbiAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2VlLWFjdGl2ZScpXG5cbiAgICAgICAgICB0aGlzLmVtaXQoJ2RyYWc6ZW5kJylcbiAgICAgICAgICB0aGlzLmRyYWdFbmRBY3Rpb24oKVxuICAgICAgICAgIHRoaXMuY2FuY2VsRHJhZ2dpbmcoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IGNvbnRhaW5lclJlY3RQb2ludCA9IG5ldyBQb2ludChjb250YWluZXJSZWN0LmxlZnQsIGNvbnRhaW5lclJlY3QudG9wKVxuICAgIGVtdWxhdGlvbkRyYWdnYWJsZS5fc3RhcnRXaW5kb3dTY3JvbGxQb2ludCA9IHRoaXMuX3N0YXJ0V2luZG93U2Nyb2xsUG9pbnRcblxuICAgIGVtdWxhdGlvbkRyYWdnYWJsZS5tb3ZlKFxuICAgICAgdGhpcy5waW5uZWRQb3NpdGlvbi5hZGQoY29udGFpbmVyUmVjdFBvaW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy53aW5kb3dTY3JvbGxQb2ludClcbiAgICAgICAgICAgICAgICAgICAgICAgICAuc3ViKHRoaXMucGFyZW50c1Njcm9sbE9mZnNldClcbiAgICApXG5cbiAgICBlbXVsYXRpb25EcmFnZ2FibGUuZHJhZ1N0YXJ0KGV2ZW50KVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIGRyYWdFbmRBY3Rpb24oKSB7XG4gICAgdGhpcy5waW5Qb3NpdGlvbih0aGlzLnBvc2l0aW9uKVxuICB9XG5cbiAgZ2V0UmVjdGFuZ2xlKCkge1xuICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHRoaXMucG9zaXRpb24sIHRoaXMuZ2V0U2l6ZSgpKVxuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICBpZiAodGhpcy5ib3VuZGluZy5yZWZyZXNoKSB7XG4gICAgICB0aGlzLmJvdW5kaW5nLnJlZnJlc2goKVxuICAgIH1cbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5oYW5kbGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydClcbiAgICB0aGlzLmhhbmRsZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0KVxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCB0aGlzLl9uYXRpdmVEcmFnU3RhcnQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgdGhpcy5fbmF0aXZlRHJhZ092ZXIpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIHRoaXMuX25hdGl2ZURyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX25hdGl2ZURyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJvcCcsIHRoaXMuX25hdGl2ZURyb3ApXG4gICAgdGhpcy5yZXNldEVtaXR0ZXIoKVxuXG4gICAgY29uc3QgaW5kZXggPSBkcmFnZ2FibGVzLmluZGV4T2YodGhpcylcbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgZHJhZ2dhYmxlcy5zcGxpY2UoaW5kZXgsIDEpXG4gICAgfVxuICB9XG5cbiAgZ2V0IGNvbnRhaW5lcigpIHtcbiAgICByZXR1cm4gKHRoaXMuX2NvbnRhaW5lciA9IHRoaXMuX2NvbnRhaW5lciB8fCB0aGlzLm9wdGlvbnMuY29udGFpbmVyIHx8IHRoaXMub3B0aW9ucy5wYXJlbnQgfHwgdGhpcy5lbGVtZW50Lm9mZnNldFBhcmVudClcbiAgfVxuXG4gIGdldCBoYW5kbGVyKCkge1xuICAgIGlmICghdGhpcy5faGFuZGxlcikge1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuaGFuZGxlciA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhpcy5faGFuZGxlciA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKHRoaXMub3B0aW9ucy5oYW5kbGVyKSB8fCB0aGlzLmVsZW1lbnRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZXIgPSB0aGlzLm9wdGlvbnMuaGFuZGxlciB8fCB0aGlzLmVsZW1lbnRcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5faGFuZGxlclxuICB9XG5cbiAgZ2V0IHN0b3BQcm9wYWdhdGlvbk9uRHJhZ1N0YXJ0KCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuc3RvcFByb3BhZ2F0aW9uT25EcmFnU3RhcnQgfHwgZmFsc2VcbiAgfVxuXG4gIGdldCBuYXRpdmVEcmFnQW5kRHJvcCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLm5hdGl2ZURyYWdBbmREcm9wIHx8IGZhbHNlXG4gIH1cblxuICBnZXQgZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wT25Ub3VjaCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcE9uVG91Y2ggfHwgZmFsc2VcbiAgfVxuXG4gIGdldCBzaG91bGRSZW1vdmVaZXJvVHJhbnNsYXRlKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuc2hvdWxkUmVtb3ZlWmVyb1RyYW5zbGF0ZSB8fCBmYWxzZVxuICB9XG5cbiAgZ2V0IHRvdWNoRHJhZ2dpbmdUaHJlc2hvbGQoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy50b3VjaERyYWdnaW5nVGhyZXNob2xkIHx8IDBcbiAgfVxuXG4gIGdldCBkcmFnT3ZlclRocm90dGxlRHVyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5kcmFnT3ZlclRocm90dGxlRHVyYXRpb24gfHwgMTZcbiAgfVxuXG4gIGdldCBpc0NvbnNpZGVyVHJhbnNmb3JtT2Zmc2V0ICgpIHtcbiAgICB0aGlzLm9wdGlvbnMuY29uc2lkZXJUcmFuc2Zvcm1PZmZzZXQgfHwgZmFsc2VcbiAgfVxuXG4gIGdldCB3aW5kb3dTY3JvbGxQb2ludCgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHdpbmRvdy5zY3JvbGxYLCB3aW5kb3cuc2Nyb2xsWSlcbiAgfVxuXG4gIGdldCBzY3JvbGxSb290Q29udGFpbmVyKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuc2Nyb2xsUm9vdENvbnRhaW5lciB8fCB0aGlzLmNvbnRhaW5lclxuICB9XG5cbiAgZ2V0IHNjcm9sbEVsZW1lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLl9jYWNoZWRTY3JvbGxFbGVtZW50c1xuICAgICAgPyB0aGlzLl9jYWNoZWRTY3JvbGxFbGVtZW50c1xuICAgICAgOiAodGhpcy5fY2FjaGVkU2Nyb2xsRWxlbWVudHMgPSBnZXRQYXJlbnRzQ2hhaW4odGhpcy5lbGVtZW50LCB0aGlzLnNjcm9sbFJvb3RDb250YWluZXIpKVxuICB9XG5cbiAgZ2V0IHNjcm9sbEVsZW1lbnRzT2Zmc2V0KCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQoXG4gICAgICB0aGlzLnNjcm9sbEVsZW1lbnRzLnJlZHVjZSgoc3VtLCBwKSA9PiBzdW0gKyBwLnNjcm9sbExlZnQsIDApLFxuICAgICAgdGhpcy5zY3JvbGxFbGVtZW50cy5yZWR1Y2UoKHN1bSwgcCkgPT4gc3VtICsgcC5zY3JvbGxUb3AsIDApXG4gICAgKVxuICB9XG5cbiAgZ2V0IHBhcmVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhY2hlZFBhcmVudHNcbiAgICAgID8gdGhpcy5fY2FjaGVkUGFyZW50c1xuICAgICAgOiAodGhpcy5fY2FjaGVkUGFyZW50cyA9IGdldFBhcmVudHNDaGFpbih0aGlzLmVsZW1lbnQsIHRoaXMuY29udGFpbmVyKSlcbiAgfVxuXG4gIGdldCBwYXJlbnRzU2Nyb2xsT2Zmc2V0KCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQoXG4gICAgICB0aGlzLnBhcmVudHMucmVkdWNlKChzdW0sIHApID0+IHN1bSArIHAuc2Nyb2xsTGVmdCwgMCksXG4gICAgICB0aGlzLnBhcmVudHMucmVkdWNlKChzdW0sIHApID0+IHN1bSArIHAuc2Nyb2xsVG9wLCAwKVxuICAgIClcbiAgfVxuXG4gIGdldCBlbmFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZVxuICB9XG5cbiAgc2V0IGVuYWJsZShlbmFibGUpIHtcbiAgICBpZiAoZW5hYmxlKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2VlLWRpc2FibGUnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZHJhZ2VlLWRpc2FibGUnKVxuICAgIH1cblxuICAgIHRoaXMuX2VuYWJsZSA9IGVuYWJsZVxuICB9XG59XG5cbkRyYWdnYWJsZS5lbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcigpXG5EcmFnZ2FibGUuZW1pdHRlci5vbignZHJhZ2dhYmxlOmNyZWF0ZScsIGFkZFRvRGVmYXVsdFNjb3BlKVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCwgaW1tZWRpYXRlKSB7XG4gIGxldCB0aW1lb3V0XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGV4ZWN1dGVkRnVuY3Rpb24oKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXNcbiAgICBjb25zdCBhcmdzID0gYXJndW1lbnRzXG5cbiAgICBjb25zdCBsYXRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgdGltZW91dCA9IG51bGxcbiAgICAgIGlmICghaW1tZWRpYXRlKSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpXG4gICAgfVxuXG4gICAgY29uc3QgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dFxuXG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpXG5cbiAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdClcblxuICAgIGlmIChjYWxsTm93KSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpXG4gIH1cbn1cbiIsImltcG9ydCBkZWJvdW5jZSBmcm9tICcuL3V0aWxzL2RlYm91bmNlJ1xuaW1wb3J0IHJlbW92ZUl0ZW0gZnJvbSAnLi91dGlscy9yZW1vdmUtYXJyYXktaXRlbSdcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudEVtaXR0ZXInXG5pbXBvcnQge1xuICBnZXREaXN0YW5jZSxcbiAgaW5kZXhPZk5lYXJlc3RQb2ludFxufSBmcm9tICcuL2dlb21ldHJ5L2Rpc3RhbmNlcydcblxuaW1wb3J0IERyYWdnYWJsZSBmcm9tICcuL2RyYWdnYWJsZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdCBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKGRyYWdnYWJsZXMsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcihvcHRpb25zKVxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgdGltZUVuZDogMjAwLFxuICAgICAgdGltZUV4Y2FuZ2U6IDQwMCxcbiAgICAgIHJhZGl1czogMzBcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGhpcy5jb250YWluZXIgPSBvcHRpb25zLmNvbnRhaW5lclxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZXNcbiAgICB0aGlzLmNoYW5nZWREdXJpbmdJdGVyYXRpb24gPSBmYWxzZVxuXG4gICAgdGhpcy5yZXNpemVPYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcihkZWJvdW5jZSh0aGlzLm9uUmVzaXplLmJpbmQodGhpcyksIDEwMCkpXG5cbiAgICBpZiAodGhpcy5jb250YWluZXIpIHtcbiAgICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLmNvbnRhaW5lcilcbiAgICB9XG5cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgb25SZXNpemUoKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5yZW9yZGVyT25DaGFuZ2UpIHRoaXMucmVzZXQoKVxuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGlmKCFkcmFnZ2FibGUuaXNEcmFnZ2luZykge1xuICAgICAgICBkcmFnZ2FibGUuc3RhcnRQb3NpdGlvbmluZygpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5fZW5hYmxlID0gdHJ1ZVxuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHRoaXMuaW5pdERyYWdnYWJsZShkcmFnZ2FibGUpKVxuICB9XG5cbiAgaW5pdERyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICBkcmFnZ2FibGUuZW5hYmxlID0gdGhpcy5fZW5hYmxlXG4gICAgZHJhZ2dhYmxlLm9uKCdkcmFnOm1vdmUnLCAoKSA9PiB0aGlzLm9uTW92ZShkcmFnZ2FibGUpKVxuICAgIGRyYWdnYWJsZS5kcmFnRW5kQWN0aW9uID0gKCkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbiwgdGhpcy5vcHRpb25zLnRpbWVFbmQpXG4gICAgICB0aGlzLm9uRW5kKGRyYWdnYWJsZSlcbiAgICB9XG4gICAgdGhpcy5yZXNpemVPYnNlcnZlci5vYnNlcnZlKGRyYWdnYWJsZS5lbGVtZW50KVxuICB9XG5cbiAgcmVsZWFzZURyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICB0aGlzLnJlc2l6ZU9ic2VydmVyLnVub2JzZXJ2ZShkcmFnZ2FibGUuZWxlbWVudClcbiAgICBkcmFnZ2FibGUucmVzZXRPbignZHJhZzplbmQnKVxuICAgIGRyYWdnYWJsZS5yZXNldE9uKCdkcmFnOm1vdmUnKVxuICAgIHJlbW92ZUl0ZW0odGhpcy5kcmFnZ2FibGVzLCBkcmFnZ2FibGUpXG4gIH1cblxuICBvbk1vdmUoZHJhZ2dhYmxlKSB7XG4gICAgaWYgKHRoaXMuc3dhcHBpbmdEaXNhYmxlZCkgcmV0dXJuXG5cbiAgICBjb25zdCBzb3J0ZWREcmFnZ2FibGVzID0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcbiAgICBjb25zdCBwaW5uZWRQb3NpdGlvbnMgPSBzb3J0ZWREcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24pXG5cbiAgICBjb25zdCBjdXJyZW50SW5kZXggPSBzb3J0ZWREcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKVxuICAgIGNvbnN0IHRhcmdldEluZGV4ID0gaW5kZXhPZk5lYXJlc3RQb2ludChwaW5uZWRQb3NpdGlvbnMsIGRyYWdnYWJsZS5wb3NpdGlvbiwgdGhpcy5vcHRpb25zLnJhZGl1cywgdGhpcy5kaXN0YW5jZUZ1bmMpXG5cbiAgICBpZiAodGFyZ2V0SW5kZXggIT09IC0xICYmIGN1cnJlbnRJbmRleCAhPT0gdGFyZ2V0SW5kZXgpIHtcbiAgICAgIGlmICh0YXJnZXRJbmRleCA8IGN1cnJlbnRJbmRleCkge1xuICAgICAgICBmb3IgKGxldCBpPXRhcmdldEluZGV4OyBpPGN1cnJlbnRJbmRleDsgaSsrKSB7XG4gICAgICAgICAgc29ydGVkRHJhZ2dhYmxlc1tpXS5waW5Qb3NpdGlvbihwaW5uZWRQb3NpdGlvbnNbaSsxXSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGxldCBpPWN1cnJlbnRJbmRleDsgaTx0YXJnZXRJbmRleDsgaSsrKSB7XG4gICAgICAgICAgc29ydGVkRHJhZ2dhYmxlc1tpKzFdLnBpblBvc2l0aW9uKHBpbm5lZFBvc2l0aW9uc1tpXSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChkcmFnZ2FibGUubmF0aXZlRHJhZ0FuZERyb3ApIHtcbiAgICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKHBpbm5lZFBvc2l0aW9uc1t0YXJnZXRJbmRleF0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24gPSBwaW5uZWRQb3NpdGlvbnNbdGFyZ2V0SW5kZXhdXG4gICAgICB9XG5cbiAgICAgIHRoaXMuY2hhbmdlZER1cmluZ0l0ZXJhdGlvbiA9IHRydWVcbiAgICB9XG4gIH1cblxuICBvbkVuZChkcmFnZ2FibGUpIHtcbiAgICBpZiAodGhpcy5jaGFuZ2VkRHVyaW5nSXRlcmF0aW9uKSB7XG4gICAgICB0aGlzLmVtaXQoJ2xpc3Q6Y2hhbmdlJylcbiAgICAgIHRoaXMuY2hhbmdlZER1cmluZ0l0ZXJhdGlvbiA9IGZhbHNlXG5cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucmVvcmRlck9uQ2hhbmdlICYmIHRoaXMub3B0aW9ucy5jb250YWluZXIpIHtcbiAgICAgICAgdGhpcy5yZW9yZGVyRWxlbWVudHMoZHJhZ2dhYmxlKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlb3JkZXJFbGVtZW50cyhtb3ZlZERyYWdnYWJsZSkge1xuICAgIGNvbnN0IHNvcnRlZERyYWdnYWJsZXMgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuICAgIGNvbnN0IGluZGV4ID0gc29ydGVkRHJhZ2dhYmxlcy5pbmRleE9mKG1vdmVkRHJhZ2dhYmxlKVxuICAgIGNvbnN0IG5leHQgPSBzb3J0ZWREcmFnZ2FibGVzW2luZGV4ICsgMV1cblxuICAgIHRoaXMucmVzZXQoKVxuXG4gICAgaWYgKG5leHQpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmluc2VydEJlZm9yZShtb3ZlZERyYWdnYWJsZS5lbGVtZW50LCBuZXh0LmVsZW1lbnQpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKG1vdmVkRHJhZ2dhYmxlLmVsZW1lbnQpXG4gICAgfVxuXG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGQpID0+IGQuc3RhcnRQb3NpdGlvbmluZygpKVxuICAgIHRoaXMuZW1pdCgnbGlzdDpyZW9yZGVyZWQnKVxuICB9XG5cbiAgZ2V0Q3VycmVudFBpbm5lZFBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5kcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24uY2xvbmUoKSlcbiAgfVxuXG4gIGdldFNvcnRlZERyYWdnYWJsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJhZ2dhYmxlcy5zb3J0KHRoaXMuc29ydGluZy5iaW5kKHRoaXMpKVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnJlc2V0UG9zaXRpb25Ub0luaXRpYWwoKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnJlZnJlc2goKSlcbiAgfVxuXG4gIGFkZChkcmFnZ2FibGVzKSB7XG4gICAgaWYgKCEoZHJhZ2dhYmxlcyBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgZHJhZ2dhYmxlcyA9IFtkcmFnZ2FibGVzXVxuICAgIH1cbiAgICBkcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gdGhpcy5pbml0RHJhZ2dhYmxlKGRyYWdnYWJsZSkpXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gdGhpcy5kcmFnZ2FibGVzLmNvbmNhdChkcmFnZ2FibGVzKVxuICB9XG5cbiAgcmVtb3ZlKGRyYWdnYWJsZXMpIHtcbiAgICBjb25zdCBpbml0aWFsUG9zaXRpb25zID0gdGhpcy5kcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uKVxuICAgIGNvbnN0IGxpc3QgPSBbXVxuICAgIGNvbnN0IHNvcnRlZERyYWdnYWJsZXMgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuXG4gICAgaWYgKCEoZHJhZ2dhYmxlcyBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgZHJhZ2dhYmxlcyA9IFtkcmFnZ2FibGVzXVxuICAgIH1cblxuICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB0aGlzLnJlbGVhc2VEcmFnZ2FibGUoZHJhZ2dhYmxlKSlcblxuICAgIGxldCBqID0gMFxuICAgIHNvcnRlZERyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBpZiAodGhpcy5kcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTEpIHtcbiAgICAgICAgaWYgKGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbiAhPT0gaW5pdGlhbFBvc2l0aW9uc1tqXSkge1xuICAgICAgICAgIGRyYWdnYWJsZS5waW5Qb3NpdGlvbihpbml0aWFsUG9zaXRpb25zW2pdLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICAgIH1cbiAgICAgICAgZHJhZ2dhYmxlLmluaXRpYWxQb3NpdGlvbiA9IGluaXRpYWxQb3NpdGlvbnNbal1cbiAgICAgICAgaisrXG4gICAgICAgIGxpc3QucHVzaChkcmFnZ2FibGUpXG4gICAgICB9XG4gICAgfSlcbiAgICB0aGlzLmRyYWdnYWJsZXMgPSBsaXN0XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLnJlbW92ZSh0aGlzLmRyYWdnYWJsZXMuc2xpY2UoKSlcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLmRlc3Ryb3koKSlcbiAgICBpZiAodGhpcy5jb250YWluZXIpIHtcbiAgICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIudW5vYnNlcnZlKHRoaXMuY29udGFpbmVyKVxuICAgIH1cbiAgfVxuXG4gIHNvcnRpbmcoZHJhZ2dhYmxlQSwgZHJhZ2dhYmxlQikge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuc29ydGluZykge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5zb3J0aW5nKGRyYWdnYWJsZUEsIGRyYWdnYWJsZUIpXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChkcmFnZ2FibGVBLnBpbm5lZFBvc2l0aW9uLnkgPCBkcmFnZ2FibGVCLnBpbm5lZFBvc2l0aW9uLnkpIHJldHVybiAtMVxuICAgICAgaWYgKGRyYWdnYWJsZUEucGlubmVkUG9zaXRpb24ueSA+IGRyYWdnYWJsZUIucGlubmVkUG9zaXRpb24ueSkgcmV0dXJuIDFcbiAgICAgIGlmIChkcmFnZ2FibGVBLnBpbm5lZFBvc2l0aW9uLnggPCBkcmFnZ2FibGVCLnBpbm5lZFBvc2l0aW9uLngpIHJldHVybiAtMVxuICAgICAgaWYgKGRyYWdnYWJsZUEucGlubmVkUG9zaXRpb24ueCA+IGRyYWdnYWJsZUIucGlubmVkUG9zaXRpb24ueCkgcmV0dXJuIDFcbiAgICAgIHJldHVybiAwXG4gICAgfVxuICB9XG5cbiAgZ2V0IGRpc3RhbmNlRnVuYygpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmdldERpc3RhbmNlIHx8IGdldERpc3RhbmNlXG4gIH1cblxuICBnZXQgcG9zaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmdldEN1cnJlbnRQaW5uZWRQb3NpdGlvbnMoKVxuICB9XG5cbiAgc2V0IHBvc2l0aW9ucyhwb3NpdGlvbnMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gJ3dyb25nIGFycmF5IGxlbmd0aCdcbiAgICBpZiAocG9zaXRpb25zLmxlbmd0aCA9PT0gdGhpcy5kcmFnZ2FibGVzLmxlbmd0aCkge1xuICAgICAgcG9zaXRpb25zLmZvckVhY2goKHBvaW50LCBpKSA9PiB7XG4gICAgICAgIHRoaXMuZHJhZ2dhYmxlc1tpXS5waW5Qb3NpdGlvbihwb2ludClcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG1lc3NhZ2VcbiAgICB9XG4gIH1cblxuICBnZXQgZW5hYmxlKCkge1xuICAgIHJldHVybiB0aGlzLl9lbmFibGVcbiAgfVxuXG4gIHNldCBlbmFibGUoZW5hYmxlKSB7XG4gICAgdGhpcy5fZW5hYmxlID0gZW5hYmxlXG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLmVuYWJsZSA9IGVuYWJsZVxuICAgIH0pXG4gIH1cblxuICBnZXQgc3dhcHBpbmdEaXNhYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3dhcHBpbmdEaXNhYmxlZFxuICB9XG5cbiAgc2V0IHN3YXBwaW5nRGlzYWJsZWQoZGlzYWJsZWQpIHtcbiAgICB0aGlzLl9zd2FwcGluZ0Rpc2FibGVkID0gZGlzYWJsZWRcbiAgfVxuXG4gIHN0YXRpYyBmYWN0b3J5KGNvbnRhaW5lckVsZW1lbnQsIGVsZW1lbnRzLCBvcHRpb25zPXt9KSB7XG4gICAgY29uc3QgZHJhZ2dhYmxlcyA9IEFycmF5LmZyb20oZWxlbWVudHMpLm1hcCgoZWxlbWVudCkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBEcmFnZ2FibGUoZWxlbWVudCwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyRWxlbWVudFxuICAgICAgfSwgb3B0aW9ucy5kcmFnZ2FibGUgfHwge30pKVxuICAgIH0pXG5cbiAgICByZXR1cm4gbmV3IExpc3QoZHJhZ2dhYmxlcywgT2JqZWN0LmFzc2lnbih7XG4gICAgICBjb250YWluZXI6IGNvbnRhaW5lckVsZW1lbnRcbiAgICB9LCBvcHRpb25zLmxpc3QgfHwge30pKVxuICB9XG59XG4iLCJpbXBvcnQgTGlzdCBmcm9tICcuL2xpc3QnXG5pbXBvcnQgeyBpbmRleE9mTmVhcmVzdFBvaW50LCBnZXRZRGlmZmVyZW5jZSB9IGZyb20gJy4vZ2VvbWV0cnkvZGlzdGFuY2VzJ1xuaW1wb3J0IFBvaW50IGZyb20gJy4vZ2VvbWV0cnkvcG9pbnQnXG5cbmltcG9ydCBEcmFnZ2FibGUgZnJvbSAnLi9kcmFnZ2FibGUnXG5cbmNvbnN0IGFycmF5TW92ZSA9IChhcnJheSwgZnJvbSwgdG8pID0+IHtcbiAgYXJyYXkuc3BsaWNlKHRvIDwgMCA/IGFycmF5Lmxlbmd0aCArIHRvIDogdG8sIDAsIGFycmF5LnNwbGljZShmcm9tLCAxKVswXSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnViYmxpbmdMaXN0IGV4dGVuZHMgTGlzdCB7XG4gIGF1dG9EZXRlY3RWZXJ0aWNhbEdhcCgpIHtcbiAgICBpZiAoIXRoaXMuX3ZlcnRpY2FsR2FwICYmICF0aGlzLm9wdGlvbnMudmVydGljYWxHYXAgJiYgdGhpcy5kcmFnZ2FibGVzLmxlbmd0aCA+PSAyKSB7XG4gICAgICBjb25zdCBzb3J0ZWQgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuICAgICAgdGhpcy5fdmVydGljYWxHYXAgPSBzb3J0ZWRbMV0ucGlubmVkUG9zaXRpb24ueSAtIHNvcnRlZFswXS5waW5uZWRQb3NpdGlvbi55IC0gc29ydGVkWzBdLmdldFNpemUoKS55XG4gICAgfVxuICB9XG5cbiAgYXV0b0RldGVjdFN0YXJ0UG9zaXRpb24oKSB7XG4gICAgaWYgKHRoaXMuZHJhZ2dhYmxlcy5sZW5ndGggPj0gMSAmJiAhdGhpcy5zdGFydFBvc2l0aW9uKSB7XG4gICAgICB0aGlzLnN0YXJ0UG9zaXRpb24gPSB0aGlzLmRyYWdnYWJsZXNbMF0ucGlubmVkUG9zaXRpb25cbiAgICB9XG4gIH1cblxuICBpbml0RHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIHN1cGVyLmluaXREcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICAgIGRyYWdnYWJsZS5vbignZHJhZzpzdGFydCcsICgpID0+IHRoaXMub25EcmFnU3RhcnQoZHJhZ2dhYmxlKSlcbiAgfVxuXG4gIG9uRHJhZ1N0YXJ0KGRyYWdnYWJsZSkge1xuICAgIHRoaXMuYXV0b0RldGVjdFZlcnRpY2FsR2FwKClcbiAgICB0aGlzLmF1dG9EZXRlY3RTdGFydFBvc2l0aW9uKClcbiAgICB0aGlzLmNhY2hlZFNvcnRlZERyYWdnYWJsZXMgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuICAgIHRoaXMuaW5kZXhPZkFjdGl2ZURyYWdnYWJsZSA9IHRoaXMuY2FjaGVkU29ydGVkRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSlcbiAgfVxuXG4gIG9uTW92ZShkcmFnZ2FibGUpIHtcbiAgICBpZiAodGhpcy5zd2FwcGluZ0Rpc2FibGVkKSByZXR1cm5cblxuICAgIGNvbnN0IHByZXZEcmFnZ2FibGUgPSB0aGlzLmNhY2hlZFNvcnRlZERyYWdnYWJsZXNbdGhpcy5pbmRleE9mQWN0aXZlRHJhZ2dhYmxlIC0gMV1cbiAgICBjb25zdCBuZXh0RHJhZ2dhYmxlID0gdGhpcy5jYWNoZWRTb3J0ZWREcmFnZ2FibGVzW3RoaXMuaW5kZXhPZkFjdGl2ZURyYWdnYWJsZSArIDFdXG4gICAgY29uc3QgY3VycmVudFBvc2l0aW9uID0gZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uXG5cbiAgICBsZXQgY3VycmVudE9yZGVyXG4gICAgbGV0IHRhcmdldEluZGV4XG5cbiAgICBpZihkcmFnZ2FibGUudXBEaXJlY3Rpb24gJiYgcHJldkRyYWdnYWJsZSkge1xuICAgICAgY3VycmVudE9yZGVyID0gW3ByZXZEcmFnZ2FibGUsIGRyYWdnYWJsZV0ubWFwKChkKSA9PiBkLnBpbm5lZFBvc2l0aW9uKVxuICAgICAgdGFyZ2V0SW5kZXggPSBpbmRleE9mTmVhcmVzdFBvaW50KGN1cnJlbnRPcmRlciwgZHJhZ2dhYmxlLnBvc2l0aW9uLCAxMDAwMCwgdGhpcy5kaXN0YW5jZUZ1bmMpXG5cbiAgICAgIGlmICh0YXJnZXRJbmRleCA9PT0gMCkge1xuICAgICAgICBpZihkcmFnZ2FibGUuc2hvdWxkVXNlTmF0aXZlRHJhZ0FuZERyb3AoKSkge1xuICAgICAgICAgIGRyYWdnYWJsZS5waW5Qb3NpdGlvbihwcmV2RHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbiA9IHByZXZEcmFnZ2FibGUucGlubmVkUG9zaXRpb24uY2xvbmUoKVxuICAgICAgICB9XG4gICAgICAgIHByZXZEcmFnZ2FibGUucGluUG9zaXRpb24obmV3IFBvaW50KFxuICAgICAgICAgIGN1cnJlbnRQb3NpdGlvbi54LFxuICAgICAgICAgIGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbi55ICsgZHJhZ2dhYmxlLmdldFNpemUoKS55ICsgdGhpcy52ZXJ0aWNhbEdhcFxuICAgICAgICApLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICAgIGFycmF5TW92ZSh0aGlzLmNhY2hlZFNvcnRlZERyYWdnYWJsZXMsIHRoaXMuaW5kZXhPZkFjdGl2ZURyYWdnYWJsZS0tLCB0aGlzLmluZGV4T2ZBY3RpdmVEcmFnZ2FibGUpXG4gICAgICAgIHRoaXMub25Nb3ZlKGRyYWdnYWJsZSlcbiAgICAgICAgdGhpcy5jaGFuZ2VkRHVyaW5nSXRlcmF0aW9uID0gdHJ1ZVxuICAgICAgfVxuICAgIH0gZWxzZSBpZihkcmFnZ2FibGUuZG93bkRpcmVjdGlvbiAmJiBuZXh0RHJhZ2dhYmxlKSB7XG4gICAgICBjdXJyZW50T3JkZXIgPSBbZHJhZ2dhYmxlLCBuZXh0RHJhZ2dhYmxlXS5tYXAoKGQpID0+IGQucGlubmVkUG9zaXRpb24pXG4gICAgICB0YXJnZXRJbmRleCA9IGluZGV4T2ZOZWFyZXN0UG9pbnQoY3VycmVudE9yZGVyLCBkcmFnZ2FibGUucG9zaXRpb24sIDEwMDAwLCB0aGlzLmRpc3RhbmNlRnVuYylcblxuICAgICAgaWYodGFyZ2V0SW5kZXggPT09IDEpIHtcbiAgICAgICAgbmV4dERyYWdnYWJsZS5waW5Qb3NpdGlvbihkcmFnZ2FibGUucGlubmVkUG9zaXRpb24sIHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSlcbiAgICAgICAgY29uc3QgZHJhZ2dhYmxlTmV3UG9zaXRpb24gPSBuZXcgUG9pbnQoXG4gICAgICAgICAgbmV4dERyYWdnYWJsZS5waW5uZWRQb3NpdGlvbi54LFxuICAgICAgICAgIG5leHREcmFnZ2FibGUucGlubmVkUG9zaXRpb24ueSArIG5leHREcmFnZ2FibGUuZ2V0U2l6ZSgpLnkgKyB0aGlzLnZlcnRpY2FsR2FwXG4gICAgICAgIClcbiAgICAgICAgaWYoZHJhZ2dhYmxlLnNob3VsZFVzZU5hdGl2ZURyYWdBbmREcm9wKCkpIHtcbiAgICAgICAgICBkcmFnZ2FibGUucGluUG9zaXRpb24oZHJhZ2dhYmxlTmV3UG9zaXRpb24pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uID0gZHJhZ2dhYmxlTmV3UG9zaXRpb25cbiAgICAgICAgfVxuICAgICAgICBhcnJheU1vdmUodGhpcy5jYWNoZWRTb3J0ZWREcmFnZ2FibGVzLCB0aGlzLmluZGV4T2ZBY3RpdmVEcmFnZ2FibGUrKywgdGhpcy5pbmRleE9mQWN0aXZlRHJhZ2dhYmxlKVxuICAgICAgICB0aGlzLm9uTW92ZShkcmFnZ2FibGUpXG4gICAgICAgIHRoaXMuY2hhbmdlZER1cmluZ0l0ZXJhdGlvbiA9IHRydWVcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBidWJibGluZyhzb3J0ZWREcmFnZ2FibGVzLCBjdXJyZW50RHJhZ2dhYmxlKSB7XG4gICAgY29uc3QgY3VycmVudFBvc2l0aW9uID0gdGhpcy5zdGFydFBvc2l0aW9uLmNsb25lKClcbiAgICBzb3J0ZWREcmFnZ2FibGVzIHx8PSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuXG4gICAgc29ydGVkRHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGlmICghZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uLmNvbXBhcmUoY3VycmVudFBvc2l0aW9uKSkge1xuICAgICAgICBpZiAoZHJhZ2dhYmxlID09PSBjdXJyZW50RHJhZ2dhYmxlICYmICFjdXJyZW50RHJhZ2dhYmxlLnNob3VsZFVzZU5hdGl2ZURyYWdBbmREcm9wKCkpIHtcbiAgICAgICAgICBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24gPSBjdXJyZW50UG9zaXRpb24uY2xvbmUoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRyYWdnYWJsZS5waW5Qb3NpdGlvbihjdXJyZW50UG9zaXRpb24sIChkcmFnZ2FibGUgPT09IGN1cnJlbnREcmFnZ2FibGUpID8gMCA6IHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjdXJyZW50UG9zaXRpb24ueSA9IGN1cnJlbnRQb3NpdGlvbi55ICsgZHJhZ2dhYmxlLmdldFNpemUoKS55ICsgdGhpcy52ZXJ0aWNhbEdhcFxuICAgIH0pXG4gIH1cblxuICByZW1vdmUoZHJhZ2dhYmxlcykge1xuICAgIGlmICghKGRyYWdnYWJsZXMgaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICAgIGRyYWdnYWJsZXMgPSBbZHJhZ2dhYmxlc11cbiAgICB9XG5cbiAgICBkcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gdGhpcy5yZWxlYXNlRHJhZ2dhYmxlKGRyYWdnYWJsZSkpXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gdGhpcy5kcmFnZ2FibGVzLmZpbHRlcigoZCkgPT4gIWRyYWdnYWJsZXMuaW5jbHVkZXMoZCkpXG5cbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZCkgPT4gZC5zdGFydFBvc2l0aW9uaW5nKCkpXG5cbiAgICBpZih0aGlzLmRyYWdnYWJsZXMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5hdXRvRGV0ZWN0VmVydGljYWxHYXAoKVxuICAgICAgdGhpcy5hdXRvRGV0ZWN0U3RhcnRQb3NpdGlvbigpXG4gICAgICB0aGlzLmJ1YmJsaW5nKClcbiAgICB9XG4gIH1cblxuICBnZXQgZGlzdGFuY2VGdW5jKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZ2V0RGlzdGFuY2UgfHwgZ2V0WURpZmZlcmVuY2VcbiAgfVxuXG4gIGdldCB2ZXJ0aWNhbEdhcCgpIHtcbiAgICBpZih0aGlzLm9wdGlvbnMudmVydGljYWxHYXApIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMudmVydGljYWxHYXBcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hdXRvRGV0ZWN0VmVydGljYWxHYXAoKVxuICAgICAgcmV0dXJuIHRoaXMuX3ZlcnRpY2FsR2FwIHx8IDBcbiAgICB9XG4gIH1cblxuICBzZXQgdmVydGljYWxHYXAoZ2FwVmFsdWUpIHtcbiAgICB0aGlzLm9wdGlvbnMudmVydGljYWxHYXAgPSBnYXBWYWx1ZVxuICB9XG5cbiAgc3RhdGljIGZhY3RvcnkoY29udGFpbmVyRWxlbWVudCwgZWxlbWVudHMsIG9wdGlvbnM9e30pIHtcbiAgICBjb25zdCBkcmFnZ2FibGVzID0gQXJyYXkuZnJvbShlbGVtZW50cykubWFwKChlbGVtZW50KSA9PiB7XG4gICAgICByZXR1cm4gbmV3IERyYWdnYWJsZShlbGVtZW50LCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgY29udGFpbmVyOiBjb250YWluZXJFbGVtZW50XG4gICAgICB9LCBvcHRpb25zLmRyYWdnYWJsZSB8fCB7fSkpXG4gICAgfSlcblxuICAgIHJldHVybiBuZXcgQnViYmxpbmdMaXN0KGRyYWdnYWJsZXMsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgY29udGFpbmVyOiBjb250YWluZXJFbGVtZW50XG4gICAgfSwgb3B0aW9ucy5saXN0IHx8IHt9KSlcbiAgfVxufVxuIl0sIm5hbWVzIjpbImdldFBhcmVudHNDaGFpbiIsImNoaWxkRWxlbWVudCIsInJvb3RFbGVtZW50IiwiY2hhaW4iLCJlbGVtZW50IiwicGFyZW50Tm9kZSIsInVuc2hpZnQiLCJQb2ludCIsImNvbnN0cnVjdG9yIiwieCIsInkiLCJhZGQiLCJwIiwic3ViIiwibXVsdCIsImsiLCJuZWdhdGl2ZSIsImNvbXBhcmUiLCJjbG9uZSIsInRvU3RyaW5nIiwiZWxlbWVudE9mZnNldCIsInBhcmVudCIsIm9mZnNldFBhcmVudCIsIm9mZnNldExlZnQiLCJvZmZzZXRUb3AiLCJjb25zaWRlck9mZnNldEVsZW1lbnRzIiwicG9wIiwicmVkdWNlIiwic3VtIiwiZWxlbWVudEJvdW5kaW5nT2Zmc2V0IiwiZWxlbWVudFJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJwYXJlbnRSZWN0IiwibGVmdCIsInRvcCIsImVsZW1lbnRTaXplIiwid2lkdGgiLCJoZWlnaHQiLCJSZWN0YW5nbGUiLCJwb3NpdGlvbiIsInNpemUiLCJnZXRQMSIsImdldFAyIiwiZ2V0UDMiLCJnZXRQNCIsImdldENlbnRlciIsIm9yIiwicmVjdCIsIk1hdGgiLCJtaW4iLCJtYXgiLCJhbmQiLCJpbmNsdWRlUG9pbnQiLCJpbmNsdWRlUmVjdGFuZ2xlIiwicmVjdGFuZ2xlIiwibW92ZVRvQm91bmQiLCJheGlzIiwic2VsQXhpcyIsImNyb3NzUmVjdGFuZ2xlIiwidGhpc0NlbnRlciIsInJlY3RDZW50ZXIiLCJzaWduIiwib2Zmc2V0IiwiZ2V0U3F1YXJlIiwic3R5bGVBcHBseSIsImVsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic3R5bGUiLCJncm93dGgiLCJnZXRNaW5TaWRlIiwiZnJvbUVsZW1lbnQiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJpc0NvbnNpZGVyVHJhbnNsYXRlIiwiRXZlbnRFbWl0dGVyIiwib3B0aW9ucyIsImV2ZW50cyIsIm9uIiwiZXZlbnROYW1lIiwiZm4iLCJPYmplY3QiLCJlbnRyaWVzIiwiZW1pdCIsImludGVycnVwdGVkIiwiYXJncyIsInNsaWNlIiwiY2FsbCIsImZ1bmMiLCJpbnRlcnJ1cHQiLCJwdXNoIiwicHJlcGVuZE9uIiwidW5zdWJzY3JpYmUiLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJyZXNldEVtaXR0ZXIiLCJyZXNldE9uIiwiZ2V0RGlzdGFuY2UiLCJwMSIsInAyIiwiZHgiLCJkeSIsInNxcnQiLCJnZXRYRGlmZmVyZW5jZSIsImFicyIsImdldFlEaWZmZXJlbmNlIiwidHJhbnNmb3JtZWRTcGFjZURpc3RhbmNlRmFjdG9yeSIsInBvdyIsImluZGV4T2ZOZWFyZXN0UG9pbnQiLCJhcnIiLCJ2YWwiLCJyYWRpdXMiLCJnZXREaXN0YW5jZUZ1bmMiLCJpIiwidGVtcCIsImRpcmVjdENyb3NzaW5nIiwiTDFQMSIsIkwxUDIiLCJMMlAxIiwiTDJQMiIsImsxIiwiazIiLCJiMSIsImIyIiwiYm91bmRUb0xpbmUiLCJBIiwiQiIsIlAiLCJBUCIsIkFCIiwiYWIyIiwiYXBfYWIiLCJ0IiwiZ2V0UG9pbnRPbkxpbmVCeUxlbmdodCIsIkxQMSIsIkxQMiIsImxlbmdodCIsInBlcmNlbnQiLCJhZGRQb2ludFRvQm91bmRQb2ludHMiLCJib3VuZHBvaW50cyIsInBvaW50IiwiaXNSaWdodCIsInJlc3VsdCIsImZpbHRlciIsImJQb2ludCIsImdldEFuZ2xlRGlmZiIsImFscGhhIiwiYmV0YSIsIm1pbkFuZ2xlIiwibWF4QW5nbGUiLCJQSSIsImdldEFuZ2xlIiwiZGlmZiIsIm5vcm1hbGl6ZUFuZ2xlIiwiYXRhbjIiLCJib3VuZEFuZ2xlIiwiZG1pbiIsImRtYXgiLCJnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0iLCJhbmdsZSIsImNlbnRlciIsImNvcyIsInNpbiIsIkJvdW5kIiwiYm91bmQiLCJfc2l6ZSIsInJlZnJlc2giLCJib3VuZGluZyIsImluc3RhbmNlIiwiYmluZCIsIkJvdW5kVG9SZWN0YW5nbGUiLCJjYWxjUG9pbnQiLCJyZWN0UDIiLCJCb3VuZFRvRWxlbWVudCIsImNvbnRhaW5lciIsIkJvdW5kVG9MaW5lWCIsInN0YXJ0WSIsImVuZFkiLCJCb3VuZFRvTGluZVkiLCJzdGFydFgiLCJlbmRYIiwiQm91bmRUb0xpbmUiLCJzdGFydFBvaW50IiwiZW5kUG9pbnQiLCJzb21lSyIsImNvc0JldGEiLCJzaW5CZXRhIiwicG9pbnQyIiwibmV3RW5kUG9pbnQiLCJwb2ludENyb3NzaW5nIiwiQm91bmRUb0NpcmNsZSIsIkJvdW5kVG9BcmMiLCJzdGFydEFuZ2xlIiwiZW5kQW5nbGUiLCJfc3RhcnRBbmdsZSIsIl9lbmRBbmdsZSIsImFycmF5IiwicmFuZ2UiLCJzdGFydCIsInN0b3AiLCJzdGVwIiwiQmFzaWNTdHJhdGVneSIsImJvdW5kUmVjdCIsIk5vdENyb3NzaW5nU3RyYXRlZ3kiLCJwb3NpdGlvbmluZyIsInJlY3RhbmdsZUxpc3QiLCJpbmRleGVzT2ZOZXdzIiwic3RhdGljUmVjdGFuZ2xlSW5kZXhlcyIsImluZGV4ZXMiLCJfcmVjdCIsImZvckVhY2giLCJyZW1vdmFibGUiLCJpbmRleE9mU3RhdGljIiwic3RhdGljUmVjdCIsInNvbWUiLCJzb3J0aW5nIiwib2RsRHJhZ2dhYmxlc0xpc3QiLCJuZXdEcmFnZ2FibGVzIiwiaW5kZXhPZk5ld3MiLCJkcmFnZ2FibGVzIiwiY29uY2F0IiwiZHJhZ2dhYmxlIiwiRmxvYXRMZWZ0U3RyYXRlZ3kiLCJhc3NpZ24iLCJwYWRkaW5nVG9wTGVmdCIsInBhZGRpbmdCb3R0b21SaWdodCIsInlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyIsImdldFBvc2l0aW9uIiwiX2luZGV4ZXNPZk5ld3MiLCJib3VuZGFyeVBvaW50cyIsInJlY3RJbmRleCIsImlzVmFsaWQiLCJuZXdMaXN0IiwibGlzdE9sZFBvc2l0aW9uIiwibWFwIiwibmV3RHJhZ2dhYmxlIiwiRmxvYXRSaWdodFN0cmF0ZWd5IiwicGFkZGluZ1RvcFJpZ2h0IiwicGFkZGluZ0JvdHRvbUxlZnQiLCJwYWRkaW5nQm90dG9tTmVnTGVmdCIsImFkZFRvRGVmYXVsdFNjb3BlIiwidGFyZ2V0IiwiZGVmYXVsdFNjb3BlIiwiYWRkVGFyZ2V0IiwiVGFyZ2V0IiwidGltZUVuZCIsInRpbWVFeGNhbmdlIiwicG9zaXRpb25pbmdTdHJhdGVneSIsInN0cmF0ZWd5IiwiZ2V0UmVjdGFuZ2xlIiwidGFyZ2V0cyIsImVtaXR0ZXIiLCJzdGFydEJvdW5kaW5nIiwiaW5pdCIsImluZGV4ZXNPZk5ldyIsIm9sZERyYWdnYWJsZXMiLCJyZWN0YW5nbGVzIiwiaW5uZXJEcmFnZ2FibGVzIiwic2V0UG9zaXRpb24iLCJjYXRjaERyYWdnYWJsZSIsInRhcmdldFJlY3RhbmdsZSIsImRyYWdnYWJsZVNxdWFyZSIsImdldFNpemUiLCJkZXN0cm95Iiwic2NvcGVzIiwic2NvcGUiLCJyZW1vdmVJdGVtIiwib25FbmQiLCJuZXdEcmFnZ2FibGVzSW5kZXgiLCJhZGRSZW1vdmVPbk1vdmUiLCJ0aW1lIiwibW92ZSIsImluaXRpYWxQb3NpdGlvbiIsInB1c2hJbm5lckRyYWdnYWJsZSIsInJlbW92ZUhhbmRsZXIiLCJyZW1vdmUiLCJyZXNldCIsImdldFNvcnRlZERyYWdnYWJsZXMiLCJfY29udGFpbmVyIiwiU2NvcGUiLCJkcmFnRW5kQWN0aW9uIiwiYWRkRHJhZ2dhYmxlIiwic2hvdFRhcmdldHMiLCJzb3J0IiwiYSIsImIiLCJwaW5Qb3NpdGlvbiIsInBvc2l0aW9ucyIsIm1lc3NhZ2UiLCJ0YXJnZXRJbmRleGVzIiwiY3VycmVudFNjb3BlIiwiYWRkRHJhZ2dhYmxlVG9TY29wZSIsIkRyYWdnYWJsZSIsImFkZFRhcmdldFRvU2NvcGUiLCJ0aHJvdHRsZSIsIndhaXQiLCJsYXN0VGltZSIsImV4ZWN1dGVkRnVuY3Rpb24iLCJjb250ZXh0Iiwibm93IiwiRGF0ZSIsImFwcGx5IiwidGhyb3R0bGVkRHJhZ092ZXIiLCJjYWxsYmFjayIsImR1cmF0aW9uIiwidGhyb3R0bGVkQ2FsbGJhY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicGFzc2l2ZUZhbHNlIiwicGFzc2l2ZSIsImlzVG91Y2giLCJuYXZpZ2F0b3IiLCJtYXhUb3VjaFBvaW50cyIsIm1vdXNlRXZlbnRzIiwiZW5kIiwidG91Y2hFdmVudHMiLCJ0cmFuc2Zvcm1Qcm9wZXJ0eSIsInRyYW5zaXRpb25Qcm9wZXJ0eSIsImdldFRvdWNoQnlJRCIsInRvdWNoSWQiLCJjaGFuZ2VkVG91Y2hlcyIsImlkZW50aWZpZXIiLCJwcmV2ZW50RG91YmxlSW5pdCIsImV4aXN0aW5nIiwiY29weVN0eWxlcyIsInNvdXJjZSIsImRlc3RpbmF0aW9uIiwiY3MiLCJ3aW5kb3ciLCJnZXRDb21wdXRlZFN0eWxlIiwia2V5IiwiY2hpbGRyZW4iLCJfZW5hYmxlIiwic3RhcnRQb3NpdGlvbmluZyIsInN0YXJ0TGlzdGVuaW5nIiwiX3NldERlZmF1bHRUcmFuc2l0aW9uIiwiaXNDb25zaWRlclRyYW5zZm9ybU9mZnNldCIsInBpbm5lZFBvc2l0aW9uIiwiX2RyYWdTdGFydCIsImRyYWdTdGFydCIsIl9kcmFnTW92ZSIsImRyYWdNb3ZlIiwiX2RyYWdFbmQiLCJkcmFnRW5kIiwiX25hdGl2ZURyYWdTdGFydCIsIm5hdGl2ZURyYWdTdGFydCIsIl9uYXRpdmVEcmFnT3ZlciIsIm5hdGl2ZURyYWdPdmVyIiwiZHJhZ092ZXJUaHJvdHRsZUR1cmF0aW9uIiwiX25hdGl2ZURyYWdFbmQiLCJuYXRpdmVEcmFnRW5kIiwiX25hdGl2ZURyb3AiLCJuYXRpdmVEcm9wIiwiX3Njcm9sbCIsIm9uU2Nyb2xsIiwiaGFuZGxlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJfdHJhbnNmb3JtUG9zaXRpb24iLCJfc2V0VHJhbnNpdGlvbiIsInRyYW5zaXRpb24iLCJ0cmFuc2l0aW9uQ3NzIiwidGVzdCIsInJlcGxhY2UiLCJfc2V0VHJhbnNsYXRlIiwidHJhbnNsYXRlQ3NzIiwidHJhbnNmb3JtIiwic2hvdWxkUmVtb3ZlWmVyb1RyYW5zbGF0ZSIsImlzU2lsZW50Iiwic2lsZW50IiwicmVzZXRQb3NpdGlvblRvSW5pdGlhbCIsInJlZnJlc2hQb3NpdGlvbiIsImRldGVybWluZURpcmVjdGlvbiIsIl9wcmV2aW91c0RpcmVjdGlvblBvc2l0aW9uIiwiX3N0YXJ0UG9zaXRpb24iLCJsZWZ0RGlyZWN0aW9uIiwicmlnaHREaXJlY3Rpb24iLCJ1cERpcmVjdGlvbiIsImRvd25EaXJlY3Rpb24iLCJzZWVtc1Njcm9sbGluZyIsIl9zdGFydFRvdWNoVGltZXN0YW1wIiwidG91Y2hEcmFnZ2luZ1RocmVzaG9sZCIsInNob3VsZFVzZU5hdGl2ZURyYWdBbmREcm9wIiwiaXNUb3VjaEV2ZW50IiwibmF0aXZlRHJhZ0FuZERyb3AiLCJlbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3BPblRvdWNoIiwic3RvcFByb3BhZ2F0aW9uT25EcmFnU3RhcnQiLCJzdG9wUHJvcGFnYXRpb24iLCJUb3VjaEV2ZW50IiwidG91Y2hQb2ludCIsIl9zdGFydFRvdWNoUG9pbnQiLCJwYWdlWCIsImNsaWVudFgiLCJwYWdlWSIsImNsaWVudFkiLCJfdG91Y2hJZCIsIl9zdGFydFdpbmRvd1Njcm9sbFBvaW50Iiwid2luZG93U2Nyb2xsUG9pbnQiLCJfc3RhcnRTY3JvbGxFbGVtZW50c09mZnNldCIsInNjcm9sbEVsZW1lbnRzT2Zmc2V0IiwiSFRNTElucHV0RWxlbWVudCIsImZvY3VzIiwiX3N0YXJ0UGFyZW50c1Njcm9sbE9mZnNldCIsInBhcmVudHNTY3JvbGxPZmZzZXQiLCJlbXVsYXRlT25GaXJzdE1vdmUiLCJjYW5jZWxEcmFnZ2luZyIsImVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcCIsImNhbmNlbEVtdWxhdGlvbiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzY3JvbGxFbGVtZW50cyIsInRvdWNoIiwiaXNEcmFnZ2luZyIsImNsYXNzTGlzdCIsInNldFRpbWVvdXQiLCJfZXZlbnQiLCJkYXRhVHJhbnNmZXIiLCJzZXREYXRhIiwiZWZmZWN0QWxsb3dlZCIsImRyb3BFZmZlY3QiLCJyZW1vdmVBdHRyaWJ1dGUiLCJjb250YWluZXJSZWN0IiwiY2xvbmVkRWxlbWVudCIsImNsb25lTm9kZSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImVtdWxhdGlvbkRyYWdnYWJsZSIsImRyYWc6bW92ZSIsImNvbnRhaW5lclJlY3RQb2ludCIsImRyYWc6ZW5kIiwicmVtb3ZlQ2hpbGQiLCJfaGFuZGxlciIsImNvbnNpZGVyVHJhbnNmb3JtT2Zmc2V0Iiwic2Nyb2xsWCIsInNjcm9sbFkiLCJzY3JvbGxSb290Q29udGFpbmVyIiwiX2NhY2hlZFNjcm9sbEVsZW1lbnRzIiwic2Nyb2xsTGVmdCIsInNjcm9sbFRvcCIsInBhcmVudHMiLCJfY2FjaGVkUGFyZW50cyIsImVuYWJsZSIsImRlYm91bmNlIiwiaW1tZWRpYXRlIiwidGltZW91dCIsImxhdGVyIiwiY2xlYXJUaW1lb3V0IiwiTGlzdCIsImNoYW5nZWREdXJpbmdJdGVyYXRpb24iLCJyZXNpemVPYnNlcnZlciIsIlJlc2l6ZU9ic2VydmVyIiwib25SZXNpemUiLCJvYnNlcnZlIiwicmVvcmRlck9uQ2hhbmdlIiwiaW5pdERyYWdnYWJsZSIsIm9uTW92ZSIsInJlbGVhc2VEcmFnZ2FibGUiLCJ1bm9ic2VydmUiLCJzd2FwcGluZ0Rpc2FibGVkIiwic29ydGVkRHJhZ2dhYmxlcyIsInBpbm5lZFBvc2l0aW9ucyIsImN1cnJlbnRJbmRleCIsInRhcmdldEluZGV4IiwiZGlzdGFuY2VGdW5jIiwicmVvcmRlckVsZW1lbnRzIiwibW92ZWREcmFnZ2FibGUiLCJuZXh0IiwiaW5zZXJ0QmVmb3JlIiwiZCIsImdldEN1cnJlbnRQaW5uZWRQb3NpdGlvbnMiLCJBcnJheSIsImluaXRpYWxQb3NpdGlvbnMiLCJsaXN0IiwiaiIsImNsZWFyIiwiZHJhZ2dhYmxlQSIsImRyYWdnYWJsZUIiLCJfc3dhcHBpbmdEaXNhYmxlZCIsImRpc2FibGVkIiwiZmFjdG9yeSIsImNvbnRhaW5lckVsZW1lbnQiLCJlbGVtZW50cyIsImZyb20iLCJhcnJheU1vdmUiLCJ0byIsIkJ1YmJsaW5nTGlzdCIsImF1dG9EZXRlY3RWZXJ0aWNhbEdhcCIsIl92ZXJ0aWNhbEdhcCIsInZlcnRpY2FsR2FwIiwic29ydGVkIiwiYXV0b0RldGVjdFN0YXJ0UG9zaXRpb24iLCJzdGFydFBvc2l0aW9uIiwib25EcmFnU3RhcnQiLCJjYWNoZWRTb3J0ZWREcmFnZ2FibGVzIiwiaW5kZXhPZkFjdGl2ZURyYWdnYWJsZSIsInByZXZEcmFnZ2FibGUiLCJuZXh0RHJhZ2dhYmxlIiwiY3VycmVudFBvc2l0aW9uIiwiY3VycmVudE9yZGVyIiwiZHJhZ2dhYmxlTmV3UG9zaXRpb24iLCJidWJibGluZyIsImN1cnJlbnREcmFnZ2FibGUiLCJpbmNsdWRlcyIsImdhcFZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7RUFBZSxTQUFTQSxlQUFlQSxDQUFDQyxZQUFZLEVBQUVDLFdBQVcsRUFBRTtJQUNsRSxNQUFNQyxLQUFLLEdBQUcsRUFBRTtJQUNmLElBQUlDLE9BQU8sR0FBR0gsWUFBWTtFQUUxQixFQUFBLE9BQU1HLE9BQU8sQ0FBQ0MsVUFBVSxJQUFJRCxPQUFPLEtBQUtGLFdBQVcsRUFBRTtFQUNuREMsSUFBQUEsS0FBSyxDQUFDRyxPQUFPLENBQUNGLE9BQU8sQ0FBQ0MsVUFBVSxDQUFDO01BQ2pDRCxPQUFPLEdBQUdBLE9BQU8sQ0FBQ0MsVUFBVTtFQUM5QjtFQUVBLEVBQUEsT0FBT0YsS0FBSztFQUNkOztFQ1JBO0VBQ2UsTUFBTUksS0FBSyxDQUFDO0VBQ3pCO0VBQ0Y7RUFDQTtFQUNBO0VBQ0E7RUFDRUMsRUFBQUEsV0FBV0EsQ0FBQ0MsQ0FBQyxFQUFFQyxDQUFDLEVBQUU7TUFDaEIsSUFBSSxDQUFDRCxDQUFDLEdBQUdBLENBQUM7TUFDVixJQUFJLENBQUNDLENBQUMsR0FBR0EsQ0FBQztFQUNaO0lBRUFDLEdBQUdBLENBQUNDLENBQUMsRUFB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
