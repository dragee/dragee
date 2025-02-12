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

export { Bound, BoundToArc, BoundToCircle, BoundToElement, BoundToLine, BoundToLineX, BoundToLineY, BoundToRectangle, BubblingList, Draggable, FloatLeftStrategy, FloatRightStrategy, List, NotCrossingStrategy, Point, Rectangle, Scope, Target, defaultScope, getDistance, getXDifference, getYDifference, indexOfNearestPoint, scope, scopes, transformedSpaceDistanceFactory };
