function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct.bind();
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }
  return _construct.apply(null, arguments);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }
  return object;
}
function _get() {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get.bind();
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);
      if (desc.get) {
        return desc.get.call(arguments.length < 3 ? target : receiver);
      }
      return desc.value;
    };
  }
  return _get.apply(this, arguments);
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      var F = function () {};
      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true,
    didErr = false,
    err;
  return {
    s: function () {
      it = it.call(o);
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

/** Class representing a point. */
var Point = /*#__PURE__*/function () {
  /**
  * Create a point.
  * @param {number} x - The x value.
  * @param {number} y - The y value.
  */
  function Point(x, y) {
    _classCallCheck(this, Point);
    this.x = x;
    this.y = y;
  }
  _createClass(Point, [{
    key: "add",
    value: function add(p) {
      return new Point(this.x + p.x, this.y + p.y);
    }
  }, {
    key: "sub",
    value: function sub(p) {
      return new Point(this.x - p.x, this.y - p.y);
    }
  }, {
    key: "mult",
    value: function mult(k) {
      return new Point(this.x * k, this.y * k);
    }
  }, {
    key: "negative",
    value: function negative() {
      return new Point(-this.x, -this.y);
    }
  }, {
    key: "compare",
    value: function compare(p) {
      return this.x === p.x && this.y === p.y;
    }
  }, {
    key: "clone",
    value: function clone() {
      return new Point(this.x, this.y);
    }
  }, {
    key: "toString",
    value: function toString() {
      return "{x=".concat(this.x, ",y=").concat(this.y);
    }
  }], [{
    key: "elementOffset",
    value: function elementOffset(element, parent) {
      parent = parent || element.parentNode;
      var elementRect = element.getBoundingClientRect();
      var parentRect = parent.getBoundingClientRect();
      return new Point(elementRect.left - parentRect.left, elementRect.top - parentRect.top);
    }
  }, {
    key: "elementSize",
    value: function elementSize(element) {
      var elementRect = element.getBoundingClientRect();
      return new Point(elementRect.width, elementRect.height);
    }
  }]);
  return Point;
}();

var Rectangle = /*#__PURE__*/function () {
  function Rectangle(position, size) {
    _classCallCheck(this, Rectangle);
    this.position = position;
    this.size = size;
  }
  _createClass(Rectangle, [{
    key: "getP1",
    value: function getP1() {
      return this.position;
    }
  }, {
    key: "getP2",
    value: function getP2() {
      return new Point(this.position.x + this.size.x, this.position.y);
    }
  }, {
    key: "getP3",
    value: function getP3() {
      return this.position.add(this.size);
    }
  }, {
    key: "getP4",
    value: function getP4() {
      return new Point(this.position.x, this.position.y + this.size.y);
    }
  }, {
    key: "getCenter",
    value: function getCenter() {
      return this.position.add(this.size.mult(0.5));
    }
  }, {
    key: "or",
    value: function or(rect) {
      var position = new Point(Math.min(this.position.x, rect.position.x), Math.min(this.position.y, rect.position.y));
      var size = new Point(Math.max(this.position.x + this.size.x, rect.position.x + rect.size.x), Math.max(this.position.y + this.size.y, rect.position.y + rect.size.y)).sub(position);
      return new Rectangle(position, size);
    }
  }, {
    key: "and",
    value: function and(rect) {
      var position = new Point(Math.max(this.position.x, rect.position.x), Math.max(this.position.y, rect.position.y));
      var size = new Point(Math.min(this.position.x + this.size.x, rect.position.x + rect.size.x), Math.min(this.position.y + this.size.y, rect.position.y + rect.size.y)).sub(position);
      if (size.x <= 0 || size.y <= 0) {
        return null;
      }
      return new Rectangle(position, size);
    }
  }, {
    key: "includePoint",
    value: function includePoint(p) {
      return !(this.position.x > p.x || this.position.x + this.size.x < p.x || this.position.y > p.y || this.position.y + this.size.y < p.y);
    }
  }, {
    key: "includeRectangle",
    value: function includeRectangle(rectangle) {
      return this.includePoint(rectangle.position) && this.includePoint(rectangle.getP3());
    }
  }, {
    key: "moveToBound",
    value: function moveToBound(rect, axis) {
      var selAxis, crossRectangle;
      if (axis) {
        selAxis = axis;
      } else {
        crossRectangle = this.and(rect);
        if (!crossRectangle) {
          return rect;
        }
        selAxis = crossRectangle.size.x > crossRectangle.size.y ? 'y' : 'x';
      }
      var thisCenter = this.getCenter();
      var rectCenter = rect.getCenter();
      var sign = thisCenter[selAxis] > rectCenter[selAxis] ? -1 : 1;
      var offset = sign > 0 ? this.position[selAxis] + this.size[selAxis] - rect.position[selAxis] : this.position[selAxis] - (rect.position[selAxis] + rect.size[selAxis]);
      rect.position[selAxis] = rect.position[selAxis] + offset;
      return rect;
    }
  }, {
    key: "getSquare",
    value: function getSquare() {
      return this.size.x * this.size.y;
    }
  }, {
    key: "styleApply",
    value: function styleApply(el) {
      el = el || document.querySelector('ind');
      el.style.left = this.position.x + 'px';
      el.style.top = this.position.y + 'px';
      el.style.width = this.size.x + 'px';
      el.style.height = this.size.y + 'px';
    }
  }, {
    key: "growth",
    value: function growth(size) {
      this.size = this.size.add(size);
      this.position = this.position.add(size.mult(-0.5));
    }
  }, {
    key: "getMinSide",
    value: function getMinSide() {
      return Math.min(this.size.x, this.size.y);
    }
  }], [{
    key: "fromElement",
    value: function fromElement(element) {
      var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : element.parentNode;
      var isConsiderTranslate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var position = Point.elementOffset(element, parent, isConsiderTranslate);
      var size = Point.elementSize(element);
      return new Rectangle(position, size);
    }
  }]);
  return Rectangle;
}();

function getDefaultContainer(element) {
  var container = element.parentNode;
  while (container.parentNode && window.getComputedStyle(container)['position'] === 'static' && container.tagName !== 'BODY') {
    container = container.parentNode;
  }
  return container;
}

var EventEmitter = /*#__PURE__*/function () {
  function EventEmitter() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, EventEmitter);
    this.events = {};
    if (options && options.on) {
      for (var _i = 0, _Object$entries = Object.entries(options.on); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          eventName = _Object$entries$_i[0],
          fn = _Object$entries$_i[1];
        this.on(eventName, fn);
      }
    }
  }
  _createClass(EventEmitter, [{
    key: "emit",
    value: function emit(eventName) {
      this.interrupted = false;
      var args = [].slice.call(arguments, 1);
      if (!this.events[eventName]) return;
      var _iterator = _createForOfIteratorHelper(this.events[eventName]),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var func = _step.value;
          func.apply(void 0, _toConsumableArray(args));
          if (this.interrupted) {
            return;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "interrupt",
    value: function interrupt() {
      this.interrupted = true;
    }
  }, {
    key: "on",
    value: function on(eventName, fn) {
      if (!this.events[eventName]) {
        this.events[eventName] = [];
      }
      this.events[eventName].push(fn);
    }
  }, {
    key: "prependOn",
    value: function prependOn(eventName, fn) {
      if (!this.events[eventName]) {
        this.events[eventName] = [];
      }
      this.events[eventName].unshift(fn);
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe(eventName, fn) {
      if (this.events[eventName]) {
        var index = this.events[eventName].indexOf(fn);
        this.events[eventName].splice(index, 1);
      }
    }
  }, {
    key: "resetEmitter",
    value: function resetEmitter() {
      this.events = {};
    }
  }, {
    key: "resetOn",
    value: function resetOn(eventName) {
      this.events[eventName] = [];
    }
  }]);
  return EventEmitter;
}();

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var getStyleProperty = createCommonjsModule(function (module, exports) {
/*!
 * getStyleProperty v1.0.4
 * original by kangax
 * http://perfectionkills.com/feature-testing-css-properties/
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false, exports: false, module: false */

( function( window ) {

var prefixes = 'Webkit Moz ms Ms O'.split(' ');
var docElemStyle = document.documentElement.style;

function getStyleProperty( propName ) {
  if ( !propName ) {
    return;
  }

  // test standard property first
  if ( typeof docElemStyle[ propName ] === 'string' ) {
    return propName;
  }

  // capitalize
  propName = propName.charAt(0).toUpperCase() + propName.slice(1);

  // test vendor specific properties
  var prefixed;
  for ( var i=0, len = prefixes.length; i < len; i++ ) {
    prefixed = prefixes[i] + propName;
    if ( typeof docElemStyle[ prefixed ] === 'string' ) {
      return prefixed;
    }
  }
}

// transport
{
  // CommonJS for Component
  module.exports = getStyleProperty;
}

})();
});

function getDistance(p1, p2) {
  var dx = p1.x - p2.x,
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
  return function (p1, p2) {
    return Math.sqrt(Math.pow(options.x * Math.abs(p1.x - p2.x), 2) + Math.pow(options.y * Math.abs(p1.y - p2.y), 2));
  };
}
function indexOfNearestPoint(arr, val, radius) {
  var getDistanceFunc = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : getDistance;
  var size,
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
  var temp, k1, k2, b1, b2, x, y;
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
  var AP = new Point(P.x - A.x, P.y - A.y),
    AB = new Point(B.x - A.x, B.y - A.y),
    ab2 = AB.x * AB.x + AB.y * AB.y,
    ap_ab = AP.x * AB.x + AP.y * AB.y,
    t = ap_ab / ab2;
  return new Point(A.x + AB.x * t, A.y + AB.y * t);
}
function getPointOnLineByLenght(LP1, LP2, lenght) {
  var dx = LP2.x - LP1.x;
  var dy = LP2.y - LP1.y;
  var percent = lenght / getDistance(LP1, LP2);
  return new Point(LP1.x + percent * dx, LP1.y + percent * dy);
}
function addPointToBoundPoints(boundpoints, point, isRight) {
  var result = boundpoints.filter(function (bPoint) {
    return bPoint.y > point.y || (isRight ? bPoint.x < point.x : bPoint.x > point.x);
  });
  for (var i = 0; i < result.length; i++) {
    if (point.y < result[i].y) {
      result.splice(i, 0, point);
      return result;
    }
  }
  result.push(point);
  return result;
}

function getAngleDiff(alpha, beta) {
  var minAngle = Math.min(alpha, beta);
  var maxAngle = Math.max(alpha, beta);
  return Math.min(maxAngle - minAngle, minAngle + Math.PI * 2 - maxAngle);
}
function getAngle(p1, p2) {
  var diff = p2.sub(p1);
  return normalizeAngle(Math.atan2(diff.y, diff.x));
}
function boundAngle(min, max, val) {
  var dmin, dmax;
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

var Bound = /*#__PURE__*/function () {
  function Bound() {
    _classCallCheck(this, Bound);
  }
  _createClass(Bound, [{
    key: "bound",
    value: function bound(point, _size) {
      return point;
    }
  }, {
    key: "refresh",
    value: function refresh() {}
  }], [{
    key: "bounding",
    value: function bounding() {
      var instance = _construct(this, Array.prototype.slice.call(arguments));
      return instance.bound.bind(instance);
    }
  }]);
  return Bound;
}();
var BoundToRectangle = /*#__PURE__*/function (_Bound) {
  _inherits(BoundToRectangle, _Bound);
  var _super = _createSuper(BoundToRectangle);
  function BoundToRectangle(rectangle) {
    var _this;
    _classCallCheck(this, BoundToRectangle);
    _this = _super.call(this);
    _this.rectangle = rectangle;
    return _this;
  }
  _createClass(BoundToRectangle, [{
    key: "bound",
    value: function bound(point, size) {
      var calcPoint = point.clone();
      var rectP2 = this.rectangle.getP3();
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
  }]);
  return BoundToRectangle;
}(Bound);
var BoundToElement = /*#__PURE__*/function (_BoundToRectangle) {
  _inherits(BoundToElement, _BoundToRectangle);
  var _super2 = _createSuper(BoundToElement);
  function BoundToElement(element, container) {
    var _this2;
    _classCallCheck(this, BoundToElement);
    _this2 = _super2.call(this, Rectangle.fromElement(element, container));
    _this2.element = element;
    _this2.container = container;
    return _this2;
  }
  _createClass(BoundToElement, [{
    key: "refresh",
    value: function refresh() {
      this.rectangle = Rectangle.fromElement(this.element, this.container);
    }
  }]);
  return BoundToElement;
}(BoundToRectangle);
var BoundToLineX = /*#__PURE__*/function (_Bound2) {
  _inherits(BoundToLineX, _Bound2);
  var _super3 = _createSuper(BoundToLineX);
  function BoundToLineX(x, startY, endY) {
    var _this3;
    _classCallCheck(this, BoundToLineX);
    _this3 = _super3.call(this);
    _this3.x = x;
    _this3.startY = startY;
    _this3.endY = endY;
    return _this3;
  }
  _createClass(BoundToLineX, [{
    key: "bound",
    value: function bound(point, size) {
      var calcPoint = point.clone();
      calcPoint.x = this.x;
      if (this.startY > calcPoint.y) {
        calcPoint.y = this.startY;
      }
      if (this.endY < calcPoint.y + size.y) {
        calcPoint.y = this.endY - size.y;
      }
      return calcPoint;
    }
  }]);
  return BoundToLineX;
}(Bound);
var BoundToLineY = /*#__PURE__*/function (_Bound3) {
  _inherits(BoundToLineY, _Bound3);
  var _super4 = _createSuper(BoundToLineY);
  function BoundToLineY(y, startX, endX) {
    var _this4;
    _classCallCheck(this, BoundToLineY);
    _this4 = _super4.call(this);
    _this4.y = y;
    _this4.startX = startX;
    _this4.endX = endX;
    return _this4;
  }
  _createClass(BoundToLineY, [{
    key: "bound",
    value: function bound(point, size) {
      var calcPoint = point.clone();
      calcPoint.y = this.y;
      if (this.startX > calcPoint.x) {
        calcPoint.x = this.startX;
      }
      if (this.endX < calcPoint.x + size.x) {
        calcPoint.x = this.endX - size.x;
      }
      return calcPoint;
    }
  }]);
  return BoundToLineY;
}(Bound);
var BoundToLine = /*#__PURE__*/function (_Bound4) {
  _inherits(BoundToLine, _Bound4);
  var _super5 = _createSuper(BoundToLine);
  function BoundToLine(startPoint, endPoint) {
    var _this5;
    _classCallCheck(this, BoundToLine);
    _this5 = _super5.call(this);
    _this5.startPoint = startPoint;
    _this5.endPoint = endPoint;
    var alpha = Math.atan2(endPoint.y - startPoint.y, endPoint.x - startPoint.x);
    var beta = alpha + Math.PI / 2;
    _this5.someK = 10;
    _this5.cosBeta = Math.cos(beta);
    _this5.sinBeta = Math.sin(beta);
    return _this5;
  }
  _createClass(BoundToLine, [{
    key: "bound",
    value: function bound(point, size) {
      var point2 = new Point(point.x + this.someK * this.cosBeta, point.y + this.someK * this.sinBeta);
      var newEndPoint = getPointOnLineByLenght(this.endPoint, this.startPoint, size.x);
      var pointCrossing = directCrossing(this.startPoint, this.endPoint, point, point2);
      return boundToLine(this.startPoint, newEndPoint, pointCrossing);
    }
  }]);
  return BoundToLine;
}(Bound);
var BoundToCircle = /*#__PURE__*/function (_Bound5) {
  _inherits(BoundToCircle, _Bound5);
  var _super6 = _createSuper(BoundToCircle);
  function BoundToCircle(center, radius) {
    var _this6;
    _classCallCheck(this, BoundToCircle);
    _this6 = _super6.call(this);
    _this6.center = center;
    _this6.radius = radius;
    return _this6;
  }
  _createClass(BoundToCircle, [{
    key: "bound",
    value: function bound(point, _size) {
      return getPointOnLineByLenght(this.center, point, this.radius);
    }
  }]);
  return BoundToCircle;
}(Bound);
var BoundToArc = /*#__PURE__*/function (_BoundToCircle) {
  _inherits(BoundToArc, _BoundToCircle);
  var _super7 = _createSuper(BoundToArc);
  function BoundToArc(center, radius, startAngle, endAngle) {
    var _this7;
    _classCallCheck(this, BoundToArc);
    _this7 = _super7.call(this, center, radius);
    _this7._startAngle = startAngle;
    _this7._endAngle = endAngle;
    return _this7;
  }
  _createClass(BoundToArc, [{
    key: "startAngle",
    value: function startAngle() {
      return typeof this._startAngle === 'function' ? this._startAngle() : this._startAngle;
    }
  }, {
    key: "endAngle",
    value: function endAngle() {
      return typeof this._endAngle === 'function' ? this._endAngle() : this._endAngle;
    }
  }, {
    key: "bound",
    value: function bound(point, _size) {
      var angle = getAngle(this.center, point);
      angle = normalizeAngle(angle);
      angle = boundAngle(this.startAngle(), this.endAngle(), angle);
      return getPointFromRadialSystem(angle, this.radius, this.center);
    }
  }]);
  return BoundToArc;
}(BoundToCircle);

function removeItem (array, val) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === val) {
      array.splice(i, 1);
      i--;
    }
  }
  return array;
}

function range(start, stop, step) {
  var result = [];
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
  for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
    result.push(i);
  }
  return result;
}

var BasicStrategy = /*#__PURE__*/function () {
  function BasicStrategy(rectangle) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _classCallCheck(this, BasicStrategy);
    this.rectangle = rectangle;
    this.options = options;
  }
  _createClass(BasicStrategy, [{
    key: "boundRect",
    get: function get() {
      return typeof this.rectangle === 'function' ? this.rectangle() : this.rectangle;
    }
  }]);
  return BasicStrategy;
}();
var NotCrossingStrategy = /*#__PURE__*/function (_BasicStrategy) {
  _inherits(NotCrossingStrategy, _BasicStrategy);
  var _super = _createSuper(NotCrossingStrategy);
  function NotCrossingStrategy() {
    _classCallCheck(this, NotCrossingStrategy);
    return _super.apply(this, arguments);
  }
  _createClass(NotCrossingStrategy, [{
    key: "positioning",
    value: function positioning(rectangleList, indexesOfNews) {
      var _this = this;
      var staticRectangleIndexes = rectangleList.reduce(function (indexes, _rect, index) {
        if (indexesOfNews.indexOf(index) === -1) {
          indexes.push(index);
        }
        return indexes;
      }, []);
      indexesOfNews.forEach(function (index) {
        var rect = rectangleList[index];
        var removable = false;
        staticRectangleIndexes.forEach(function (indexOfStatic) {
          var staticRect = rectangleList[indexOfStatic];
          rect = staticRect.moveToBound(rect);
        });
        removable = staticRectangleIndexes.some(function (indexOfStatic) {
          var staticRect = rectangleList[indexOfStatic];
          return !!staticRect.and(rect);
        }) || rect.and(_this.boundRect).getSquare() !== rect.getSquare();
        if (removable) {
          rect.removable = true;
        } else {
          staticRectangleIndexes.push(index);
        }
      });
      return rectangleList;
    }
  }, {
    key: "sorting",
    value: function sorting(odlDraggablesList, newDraggables, indexOfNews) {
      var draggables = odlDraggablesList.concat(newDraggables);
      newDraggables.forEach(function (draggable) {
        indexOfNews.push(draggables.indexOf(draggable));
      });
      return draggables;
    }
  }]);
  return NotCrossingStrategy;
}(BasicStrategy);
var FloatLeftStrategy = /*#__PURE__*/function (_BasicStrategy2) {
  _inherits(FloatLeftStrategy, _BasicStrategy2);
  var _super2 = _createSuper(FloatLeftStrategy);
  function FloatLeftStrategy(rectangle) {
    var _this2;
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _classCallCheck(this, FloatLeftStrategy);
    _this2 = _super2.call(this, rectangle, options);
    _this2.options = Object.assign({
      removable: true
    }, options);
    _this2.radius = options.radius || 80;
    _this2.paddingTopLeft = options.paddingTopLeft || new Point(0, 0);
    _this2.paddingBottomRight = options.paddingBottomRight || new Point(0, 0);
    _this2.yGapBetweenDraggables = options.yGapBetweenDraggables || 0;
    _this2.getDistance = options.getDistance || getDistance;
    _this2.getPosition = options.getPosition || function (draggable) {
      return draggable.position;
    };
    return _this2;
  }
  _createClass(FloatLeftStrategy, [{
    key: "positioning",
    value: function positioning(rectangleList, _indexesOfNews) {
      var _this3 = this;
      var boundRect = this.boundRect;
      var rectP2 = boundRect.getP2();
      var boundaryPoints = [boundRect.position];
      rectangleList.forEach(function (rect, rectIndex) {
        var position,
          isValid = false;
        for (var i = 0; i < boundaryPoints.length; i++) {
          position = new Point(boundaryPoints[i].x + _this3.paddingTopLeft.x, i > 0 ? boundaryPoints[i - 1].y + _this3.yGapBetweenDraggables : boundRect.position.y + _this3.paddingTopLeft.y);
          isValid = position.x + rect.size.x < rectP2.x;
          if (isValid) {
            break;
          }
        }
        if (!isValid) {
          position = new Point(boundRect.position.x + _this3.paddingTopLeft.x, boundaryPoints[boundaryPoints.length - 1].y + (rectIndex > 0 ? _this3.yGapBetweenDraggables : _this3.paddingTopLeft.y));
        }
        rect.position = position;
        if (_this3.options.removable && rect.getP3().y > boundRect.getP3().y) {
          rect.removable = true;
        }
        boundaryPoints = addPointToBoundPoints(boundaryPoints, rect.getP3().add(_this3.paddingBottomRight));
      });
      return rectangleList;
    }
  }, {
    key: "sorting",
    value: function sorting(odlDraggablesList, newDraggables, indexOfNews) {
      var _this4 = this;
      var newList = odlDraggablesList.concat();
      var listOldPosition = odlDraggablesList.map(function (draggable) {
        return draggable.getPosition();
      });
      newDraggables.forEach(function (newDraggable) {
        var index = indexOfNearestPoint(listOldPosition, _this4.getPosition(newDraggable), _this4.radius, _this4.getDistance);
        if (index === -1) {
          index = newList.length;
        } else {
          index = newList.indexOf(odlDraggablesList[index]);
        }
        newList.splice(index, 0, newDraggable);
      });
      newDraggables.forEach(function (newDraggable) {
        indexOfNews.push(newList.indexOf(newDraggable));
      });
      return newList;
    }
  }]);
  return FloatLeftStrategy;
}(BasicStrategy);
var FloatRightStrategy = /*#__PURE__*/function (_FloatLeftStrategy) {
  _inherits(FloatRightStrategy, _FloatLeftStrategy);
  var _super3 = _createSuper(FloatRightStrategy);
  function FloatRightStrategy(rectangle) {
    var _this5;
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _classCallCheck(this, FloatRightStrategy);
    _this5 = _super3.call(this, rectangle, options);
    _this5.paddingTopRight = options.paddingTopRight || new Point(5, 5);
    _this5.paddingBottomLeft = options.paddingBottomLeft || new Point(0, 0);
    _this5.yGapBetweenDraggables = options.yGapBetweenDraggables || 0;
    _this5.paddingBottomNegLeft = new Point(-_this5.paddingBottomLeft.x, _this5.paddingBottomLeft.y);
    return _this5;
  }
  _createClass(FloatRightStrategy, [{
    key: "positioning",
    value: function positioning(rectangleList, _indexesOfNews) {
      var _this6 = this;
      var boundRect = this.boundRect;
      var boundaryPoints = [boundRect.getP2()];
      rectangleList.forEach(function (rect, rectIndex) {
        var position,
          isValid = false;
        for (var i = 0; i < boundaryPoints.length; i++) {
          position = new Point(boundaryPoints[i].x - rect.size.x - _this6.paddingTopRight.x, i > 0 ? boundaryPoints[i - 1].y + _this6.yGapBetweenDraggables : boundRect.position.y + _this6.paddingTopRight.y);
          isValid = position.x > rect.position.x;
          if (isValid) {
            break;
          }
        }
        if (!isValid) {
          position = new Point(boundRect.getP2().x - rect.size.x - _this6.paddingTopRight.x, boundaryPoints[boundaryPoints.length - 1].y + (rectIndex > 0 ? _this6.yGapBetweenDraggables : _this6.paddingTopRight.y));
        }
        rect.position = position;
        if (_this6.options.removable && rect.getP4().y > boundRect.getP4().y) {
          rect.removable = true;
        }
        boundaryPoints = addPointToBoundPoints(boundaryPoints, rect.getP4().add(_this6.paddingBottomNegLeft), true);
      });
      return rectangleList;
    }
  }]);
  return FloatRightStrategy;
}(FloatLeftStrategy);

var addToDefaultScope$1 = function addToDefaultScope(target) {
  defaultScope.addTarget(target);
};
var Target = /*#__PURE__*/function (_EventEmitter) {
  _inherits(Target, _EventEmitter);
  var _super = _createSuper(Target);
  function Target(element, draggables) {
    var _this;
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    _classCallCheck(this, Target);
    _this = _super.call(this, options);
    var target = _assertThisInitialized(_this);
    _this.options = Object.assign({
      timeEnd: 200,
      timeExcange: 400
    }, options);
    _this.positioningStrategy = options.strategy || new FloatLeftStrategy(_this.getRectangle.bind(_assertThisInitialized(_this)), {
      radius: 80,
      getDistance: transformedSpaceDistanceFactory({
        x: 1,
        y: 4
      }),
      removable: true
    });
    _this.element = element;
    draggables.forEach(function (draggable) {
      return draggable.targets.push(target);
    });
    _this.draggables = draggables;
    Target.emitter.emit('target:create', _assertThisInitialized(_this));
    _this.startBounding();
    _this.init();
    return _this;
  }
  _createClass(Target, [{
    key: "startBounding",
    value: function startBounding() {
      this.bound = this.options.bound || BoundToElement.bounding(this.element);
    }
  }, {
    key: "positioning",
    value: function positioning(draggables, indexesOfNew) {
      return this.positioningStrategy.positioning(draggables, indexesOfNew);
    }
  }, {
    key: "sorting",
    value: function sorting(oldDraggables, newDraggables, indexOfNews) {
      return this.positioningStrategy.sorting(oldDraggables, newDraggables, indexOfNews);
    }
  }, {
    key: "init",
    value: function init() {
      var _this2 = this;
      var rectangles, indexesOfNew;
      this.innerDraggables = this.draggables.filter(function (draggable) {
        var element = draggable.element.parentNode;
        while (element) {
          if (element === _this2.element) {
            return true;
          }
          element = element.parentNode;
        }
        return false;
      });
      if (this.innerDraggables.length) {
        indexesOfNew = range(this.innerDraggables.length);
        rectangles = this.positioning(this.innerDraggables.map(function (draggable) {
          return draggable.getRectangle();
        }), indexesOfNew);
        this.setPosition(rectangles, indexesOfNew);
        this.innerDraggables.forEach(function (draggable) {
          return _this2.emit('target:add', draggable);
        });
      }
    }
  }, {
    key: "getRectangle",
    value: function getRectangle() {
      return Rectangle.fromElement(this.element, this.container, true);
    }
  }, {
    key: "catchDraggable",
    value: function catchDraggable(draggable) {
      if (this.options.catchDraggable) {
        return this.options.catchDraggable(this, draggable);
      } else {
        var targetRectangle = this.getRectangle();
        var draggableSquare = draggable.getRectangle().getSquare();
        return draggableSquare < targetRectangle.getSquare() && targetRectangle.includePoint(draggable.getCenter());
      }
    }
  }, {
    key: "getPosition",
    value: function getPosition() {
      return this.getRectangle().position;
    }
  }, {
    key: "getSize",
    value: function getSize() {
      return this.getRectangle().size;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var _this3 = this;
      scopes.forEach(function (scope) {
        return removeItem(scope.targets, _this3);
      });
    }
  }, {
    key: "refresh",
    value: function refresh() {
      var rectangles = this.positioning(this.innerDraggables.map(function (draggable) {
        return draggable.getRectangle();
      }), []);
      this.setPosition(rectangles, [], 0);
    }
  }, {
    key: "onEnd",
    value: function onEnd(draggable) {
      var newDraggablesIndex = [];
      if (this.getRectangle().includePoint(draggable.getCenter())) {
        draggable.position = this.bound(draggable.position, draggable.getSize());
      } else {
        return false;
      }
      this.emit('target:beforeAdd', draggable);
      this.innerDraggables = this.sorting(this.innerDraggables, [draggable], newDraggablesIndex);
      var rectangles = this.positioning(this.innerDraggables.map(function (draggable) {
        return draggable.getRectangle();
      }), newDraggablesIndex);
      this.setPosition(rectangles, newDraggablesIndex);
      if (this.innerDraggables.indexOf(draggable) !== -1) {
        this.addRemoveOnMove(draggable);
      }
      return true;
    }
  }, {
    key: "setPosition",
    value: function setPosition(rectangles, indexesOfNew, time) {
      var _this4 = this;
      this.innerDraggables.slice(0).forEach(function (draggable, i) {
        var rect = rectangles[i],
          timeEnd = time || time === 0 ? time : indexesOfNew.indexOf(i) !== -1 ? _this4.options.timeEnd : _this4.options.timeExcange;
        if (rect.removable) {
          draggable.move(draggable.initialPosition, timeEnd, true, true);
          removeItem(_this4.innerDraggables, draggable);
          _this4.emit('target:remove', draggable);
        } else {
          draggable.move(rect.position, timeEnd, true, true);
        }
      });
    }
  }, {
    key: "add",
    value: function add(draggable, time) {
      var newDraggablesIndex = this.innerDraggables.length;
      this.emit('target:beforeAdd', draggable);
      this.pushInnerDraggable(draggable);
      var rectangles = this.positioning(this.innerDraggables.map(function (draggable) {
        return draggable.getRectangle();
      }), newDraggablesIndex, draggable);
      this.setPosition(rectangles, [newDraggablesIndex], time || 0);
      if (this.innerDraggables.indexOf(draggable) !== -1) {
        this.addRemoveOnMove(draggable);
      }
    }
  }, {
    key: "pushInnerDraggable",
    value: function pushInnerDraggable(draggable) {
      if (this.innerDraggables.indexOf(draggable) === -1) {
        this.innerDraggables.push(draggable);
      }
    }
  }, {
    key: "addRemoveOnMove",
    value: function addRemoveOnMove(draggable) {
      var _this5 = this;
      draggable.on('drag:move', this.removeHandler = function () {
        _this5.remove(draggable);
      });
      this.emit('target:add', draggable);
    }
  }, {
    key: "remove",
    value: function remove(draggable) {
      draggable.unsubscribe('drag:move', this.removeHandler);
      var index = this.innerDraggables.indexOf(draggable);
      if (index === -1) {
        return;
      }
      this.innerDraggables.splice(index, 1);
      var rectangles = this.positioning(this.innerDraggables.map(function (draggable) {
        return draggable.getRectangle();
      }), []);
      this.setPosition(rectangles, []);
      this.emit('target:remove', draggable);
    }
  }, {
    key: "reset",
    value: function reset() {
      var _this6 = this;
      this.innerDraggables.forEach(function (draggable) {
        draggable.move(draggable.initialPosition, 0, true, true);
        _this6.emit('target:remove', draggable);
      });
      this.innerDraggables = [];
    }
  }, {
    key: "getSortedDraggables",
    value: function getSortedDraggables() {
      this.innerDraggables.slice();
    }
  }, {
    key: "container",
    get: function get() {
      return this._container = this._container || this.options.container || this.options.parent || getDefaultContainer(this.element);
    }
  }]);
  return Target;
}(EventEmitter);
Target.emitter = new EventEmitter();
Target.emitter.on('target:create', addToDefaultScope$1);

var scopes = [];
var Scope = /*#__PURE__*/function (_EventEmitter) {
  _inherits(Scope, _EventEmitter);
  var _super = _createSuper(Scope);
  function Scope(draggables, targets) {
    var _this;
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    _classCallCheck(this, Scope);
    _this = _super.call(this, options);
    scopes.forEach(function (scope) {
      if (draggables) {
        draggables.forEach(function (draggable) {
          removeItem(scope.draggables, draggable);
        });
      }
      if (targets) {
        targets.forEach(function (target) {
          removeItem(scope.targets, target);
        });
      }
    });
    _this.draggables = draggables || [];
    _this.targets = targets || [];
    scopes.push(_assertThisInitialized(_this));
    _this.options = {
      timeEnd: options.timeEnd || 400
    };
    _this.init();
    return _this;
  }
  _createClass(Scope, [{
    key: "init",
    value: function init() {
      var _this2 = this;
      this.draggables.forEach(function (draggable) {
        draggable.dragEndAction = function () {
          return _this2.onEnd(draggable);
        };
      });
    }
  }, {
    key: "addDraggable",
    value: function addDraggable(draggable) {
      var _this3 = this;
      this.draggables.push(draggable);
      draggable.dragEndAction = function () {
        return _this3.onEnd(draggable);
      };
    }
  }, {
    key: "addTarget",
    value: function addTarget(target) {
      this.targets.push(target);
    }
  }, {
    key: "onEnd",
    value: function onEnd(draggable) {
      var shotTargets = this.targets.filter(function (target) {
        return target.draggables.indexOf(draggable) !== -1;
      }).filter(function (target) {
        return target.catchDraggable(draggable);
      }).sort(function (a, b) {
        return a.getRectangle().getSquare() - b.getRectangle().getSquare();
      });
      if (shotTargets.length) {
        shotTargets[0].onEnd(draggable);
      } else if (draggable.targets.length) {
        draggable.pinPosition(draggable.initialPosition, this.options.timeEnd);
      }
      this.emit('scope:change');
    }
  }, {
    key: "reset",
    value: function reset() {
      this.targets.forEach(function (target) {
        return target.reset();
      });
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.draggables.forEach(function (draggable) {
        return draggable.refresh();
      });
      this.targets.forEach(function (target) {
        return target.refresh();
      });
    }
  }, {
    key: "positions",
    get: function get() {
      var _this4 = this;
      return this.targets.map(function (target) {
        return target.innerDraggables.map(function (draggable) {
          return _this4.draggables.indexOf(draggable);
        });
      });
    },
    set: function set(positions) {
      var _this5 = this;
      var message = 'wrong array length';
      if (positions.length === this.targets.length) {
        this.targets.forEach(function (target) {
          return target.reset();
        });
        positions.forEach(function (targetIndexes, i) {
          targetIndexes.forEach(function (index) {
            _this5.targets[i].add(_this5.draggables[index]);
          });
        });
      } else {
        throw message;
      }
    }
  }]);
  return Scope;
}(EventEmitter);
var defaultScope = new Scope();
function scope(fn) {
  var currentScope = new Scope();
  var addDraggableToScope = function addDraggableToScope(draggable) {
    currentScope.addDraggable(draggable);
    Draggable.emitter.interrupt();
  };
  var addTargetToScope = function addTargetToScope(target) {
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
  var passiveSupported = false;
  try {
    var options = Object.defineProperty({}, 'passive', {
      get: function get() {
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
var isSupportPassiveEvents = checkSupportPassiveEvents();
var isSupportPassiveEvents$1 = isSupportPassiveEvents;

function throttle(func, wait) {
  var lastTime = 0;
  return function executedFunction() {
    var context = this;
    var args = arguments;
    var now = Date.now();
    if (now - lastTime >= wait) {
      func.apply(context, args);
      lastTime = now;
    }
  };
}

var throttledDragOver = function throttledDragOver(callback, duration) {
  var throttledCallback = throttle(function (event) {
    return callback(event);
  }, duration);
  return function (event) {
    event.preventDefault();
    throttledCallback(event);
  };
};
var passiveFalse = isSupportPassiveEvents$1 ? {
  passive: false
} : false;
var isTouch = ('ontouchstart' in window);
var mouseEvents = {
  start: 'mousedown',
  move: 'mousemove',
  end: 'mouseup'
};
var touchEvents = {
  start: 'touchstart',
  move: 'touchmove',
  end: 'touchend'
};
var draggables = [];
var transformProperty = getStyleProperty('transform');
var transitionProperty = getStyleProperty('transition');
function getTouchByID(element, touchId) {
  for (var i = 0; i < element.changedTouches.length; i++) {
    if (element.changedTouches[i].identifier === touchId) {
      return element.changedTouches[i];
    }
  }
  return false;
}
function preventDoubleInit(draggable) {
  var message = "for this element Dragee.Draggable is already exist, don't create it twice ";
  if (draggables.some(function (existing) {
    return draggable.element === existing.element;
  })) {
    throw message;
  }
  draggables.push(draggable);
}
function addToDefaultScope(draggable) {
  defaultScope.addDraggable(draggable);
}
function _copyStyles(source, destination) {
  var cs = window.getComputedStyle(source);
  for (var i = 0; i < cs.length; i++) {
    var key = cs[i];
    if (key.indexOf('transition') < 0 && key.indexOf('transform') < 0) {
      destination.style[key] = cs[key];
    }
  }
  for (var _i = 0; _i < source.children.length; _i++) {
    _copyStyles(source.children[_i], destination.children[_i]);
  }
}
var Draggable = /*#__PURE__*/function (_EventEmitter) {
  _inherits(Draggable, _EventEmitter);
  var _super = _createSuper(Draggable);
  function Draggable(element) {
    var _this;
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _classCallCheck(this, Draggable);
    _this = _super.call(this, options);
    _this.targets = [];
    _this.options = options;
    _this.element = element;
    preventDoubleInit(_assertThisInitialized(_this));
    Draggable.emitter.emit('draggable:create', _assertThisInitialized(_this));
    _this._enable = true;
    _this.startBounding();
    _this.startPositioning();
    _this.startListening();
    return _this;
  }
  _createClass(Draggable, [{
    key: "startBounding",
    value: function startBounding() {
      if (this.options.bound) {
        this.bounding = {
          bound: this.options.bound
        };
      } else {
        this.bounding = new BoundToElement(this.container, this.container);
      }
    }
  }, {
    key: "startPositioning",
    value: function startPositioning() {
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
  }, {
    key: "startListening",
    value: function startListening() {
      var _this2 = this;
      this._dragStart = function (event) {
        return _this2.dragStart(event);
      };
      this._dragMove = function (event) {
        return _this2.dragMove(event);
      };
      this._dragEnd = function (event) {
        return _this2.dragEnd(event);
      };
      this._nativeDragStart = function (event) {
        return _this2.nativeDragStart(event);
      };
      this._nativeDragOver = throttledDragOver(function (event) {
        return _this2.nativeDragOver(event);
      }, this.dragOverThrottleDuration);
      this._nativeDragEnd = function (event) {
        return _this2.nativeDragEnd(event);
      };
      this._nativeDrop = function (event) {
        return _this2.nativeDrop(event);
      };
      this._scroll = function (event) {
        return _this2.onScroll(event);
      };
      this.handler.addEventListener(touchEvents.start, this._dragStart, passiveFalse);
      this.handler.addEventListener(mouseEvents.start, this._dragStart, passiveFalse);
      this.element.addEventListener('dragstart', this._nativeDragStart);
    }
  }, {
    key: "getSize",
    value: function getSize() {
      return Point.elementSize(this.element);
    }
  }, {
    key: "getPosition",
    value: function getPosition() {
      this.position = this.offset.add(this._transformPosition || new Point(0, 0));
      return this.position;
    }
  }, {
    key: "getCenter",
    value: function getCenter() {
      return this.position.add(this.getSize().mult(0.5));
    }
  }, {
    key: "_setDefaultTransition",
    value: function _setDefaultTransition() {
      if (!this.element.style[transitionProperty]) {
        this.element.style[transitionProperty] = window.getComputedStyle(this.element)[transitionProperty];
      }
    }
  }, {
    key: "_setTransition",
    value: function _setTransition(time) {
      var transition = this.element.style[transitionProperty];
      var transitionCss = "transform ".concat(time, "ms");
      if (!/transform \d*m?s/.test(transition)) {
        if (transition) {
          transition += ", ".concat(transitionCss);
        } else {
          transition = transitionCss;
        }
      } else {
        transition = transition.replace(/transform \d*m?s/g, transitionCss);
      }
      if (this.element.style[transitionProperty] !== transition) {
        this.element.style[transitionProperty] = transition;
      }
    }
  }, {
    key: "_setTranslate",
    value: function _setTranslate(point) {
      this._transformPosition = point;
      var translateCss = "translate3d(".concat(point.x, "px, ").concat(point.y, "px, 0px)");
      var transform = this.element.style[transformProperty];
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
  }, {
    key: "move",
    value: function move(point) {
      var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var isSilent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      point = point.clone();
      this.position = point;
      this._setTransition(time);
      this._setTranslate(point.sub(this.offset));
      if (!isSilent) {
        this.emit('drag:move');
      }
    }
  }, {
    key: "pinPosition",
    value: function pinPosition(point) {
      var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var silent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      this.pinnedPosition = point.clone();
      this.move(this.pinnedPosition, time, silent);
    }
  }, {
    key: "resetPositionToInitial",
    value: function resetPositionToInitial() {
      this.pinPosition(this.initialPosition);
    }
  }, {
    key: "refreshPosition",
    value: function refreshPosition() {
      this.setPosition(this.getPosition());
    }
  }, {
    key: "setPosition",
    value: function setPosition(point) {
      point = point.clone();
      this.position = point;
      this._setTransition(0);
      this._setTranslate(point.sub(this.offset));
    }
  }, {
    key: "determineDirection",
    value: function determineDirection(point) {
      this._previousDirectionPosition || (this._previousDirectionPosition = this._startPosition);
      this.leftDirection = this._previousDirectionPosition.x < point.x;
      this.rightDirection = this._previousDirectionPosition.x > point.x;
      this.upDirection = this._previousDirectionPosition.y > point.y;
      this.downDirection = this._previousDirectionPosition.y < point.y;
      this._previousDirectionPosition = point;
    }
  }, {
    key: "seemsScrolling",
    value: function seemsScrolling() {
      return +new Date() - this._startTouchTimestamp < this.touchDraggingThreshold;
    }
  }, {
    key: "shouldUseNativeDragAndDrop",
    value: function shouldUseNativeDragAndDrop() {
      if (this.isTouchEvent) {
        return this.nativeDragAndDrop && this.emulateNativeDragAndDropOnTouch;
      } else {
        return this.nativeDragAndDrop;
      }
    }
  }, {
    key: "dragStart",
    value: function dragStart(event) {
      var _this3 = this;
      if (!this._enable) {
        return;
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
          var emulateOnFirstMove = function emulateOnFirstMove(event) {
            if (_this3.seemsScrolling()) {
              _this3.cancelDragging();
            } else {
              _this3.emulateNativeDragAndDrop(event);
            }
            cancelEmulation();
          };
          var cancelEmulation = function cancelEmulation() {
            document.removeEventListener(touchEvents.move, emulateOnFirstMove);
            document.removeEventListener(touchEvents.end, cancelEmulation);
          };
          document.addEventListener(touchEvents.move, emulateOnFirstMove, passiveFalse);
          document.addEventListener(touchEvents.end, cancelEmulation, passiveFalse);
        } else {
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
      this.parents.forEach(function (p) {
        return p.addEventListener('scroll', _this3._scroll);
      });
      this.emit('drag:start');
    }
  }, {
    key: "dragMove",
    value: function dragMove(event) {
      var touch;
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
      var point = this._startPosition.add(this.touchPoint.sub(this._startTouchPoint)).add(this.windowScrollPoint.sub(this._startWindowScrollPoint)).add(this.parentsScrollPoint.sub(this._startParentsScrollPoint));
      point = this.bounding.bound(point, this.getSize());
      this.determineDirection(point);
      this.move(point);
      this.element.classList.add('dragee-active');
    }
  }, {
    key: "dragEnd",
    value: function dragEnd(event) {
      var _this4 = this;
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
      setTimeout(function () {
        return _this4.element.classList.remove('dragee-active');
      });
    }
  }, {
    key: "onScroll",
    value: function onScroll(_event) {
      var point = this._startPosition.add(this.touchPoint.sub(this._startTouchPoint)).add(this.windowScrollPoint.sub(this._startWindowScrollPoint)).add(this.parentsScrollPoint.sub(this._startParentsScrollPoint));
      point = this.bounding.bound(point, this.getSize());
      if (!this.nativeDragAndDrop) {
        this.determineDirection(point);
        this.move(point);
      }
    }
  }, {
    key: "nativeDragStart",
    value: function nativeDragStart(event) {
      event.dataTransfer.setData('text', 'FireFox fix');
      event.dataTransfer.effectAllowed = 'move';
      document.addEventListener('dragover', this._nativeDragOver);
      document.addEventListener('dragend', this._nativeDragEnd);
      document.addEventListener('drop', this._nativeDrop);
    }
  }, {
    key: "nativeDragOver",
    value: function nativeDragOver(event) {
      event.preventDefault();
      event.dataTransfer.dropEffect = 'move';
      this.element.classList.add('dragee-placeholder');
      if (event.clientX === 0 && event.clientY === 0) {
        return;
      }
      this.touchPoint = new Point(event.clientX, event.clientY);
      var point = this._startPosition.add(this.touchPoint.sub(this._startTouchPoint)).add(this.windowScrollPoint.sub(this._startWindowScrollPoint)).add(this.parentsScrollPoint.sub(this._startParentsScrollPoint));
      point = this.bounding.bound(point, this.getSize());
      this.determineDirection(point);
      this.position = point;
      this.emit('drag:move');
    }
  }, {
    key: "nativeDragEnd",
    value: function nativeDragEnd(_event) {
      var _this5 = this;
      this.element.classList.remove('dragee-placeholder');
      this.dragEndAction();
      this.emit('drag:end');
      document.removeEventListener('dragover', this._nativeDragOver);
      document.removeEventListener('dragend', this._nativeDragEnd);
      document.removeEventListener(mouseEvents.end, this._nativeDragEnd);
      document.removeEventListener('drop', this._nativeDrop);
      window.removeEventListener('scroll', this._scroll);
      this.parents.forEach(function (p) {
        return p.removeEventListener('scroll', _this5._scroll);
      });
      this.isDragging = false;
      this.element.removeAttribute('draggable');
      this.element.classList.remove('dragee-active');
    }
  }, {
    key: "nativeDrop",
    value: function nativeDrop(event) {
      event.stopPropagation();
      event.preventDefault();
    }
  }, {
    key: "cancelDragging",
    value: function cancelDragging() {
      var _this6 = this;
      document.removeEventListener(touchEvents.move, this._dragMove);
      document.removeEventListener(mouseEvents.move, this._dragMove);
      document.removeEventListener(touchEvents.end, this._dragEnd);
      document.removeEventListener(mouseEvents.end, this._dragEnd);
      document.removeEventListener(mouseEvents.end, this._nativeDragEnd);
      window.removeEventListener('scroll', this._scroll);
      this.parents.forEach(function (p) {
        return p.removeEventListener('scroll', _this6._scroll);
      });
      this.isDragging = false;
      this._previousDirectionPosition = null;
      this.element.removeAttribute('draggable');
    }
  }, {
    key: "copyStyles",
    value: function copyStyles(source, destination) {
      if (this.options.copyStyles) {
        this.options.copyStyles(source, destination);
      } else {
        _copyStyles(source, destination);
      }
    }
  }, {
    key: "emulateNativeDragAndDrop",
    value: function emulateNativeDragAndDrop(event) {
      var _this7 = this;
      var containerRect = this.container.getBoundingClientRect();
      var clonedElement = this.element.cloneNode(true);
      clonedElement.style[transformProperty] = '';
      this.copyStyles(this.element, clonedElement);
      clonedElement.style.position = 'absolute';
      document.body.appendChild(clonedElement);
      this.element.classList.add('dragee-placeholder');
      var emulationDraggable = new Draggable(clonedElement, {
        container: document.body,
        touchDraggingThreshold: 0,
        bound: function bound(point) {
          return point;
        },
        on: {
          'drag:move': function dragMove() {
            var containerRectPoint = new Point(containerRect.left, containerRect.top);
            _this7.position = emulationDraggable.position.sub(containerRectPoint).sub(_this7._startWindowScrollPoint).add(_this7._startParentsScrollPoint);
            _this7.determineDirection(_this7.position);
            _this7.emit('drag:move');
          },
          'drag:end': function dragEnd() {
            emulationDraggable.destroy();
            document.body.removeChild(clonedElement);
            _this7.element.classList.remove('dragee-placeholder');
            _this7.element.classList.remove('dragee-active');
            _this7.emit('drag:end');
            _this7.dragEndAction();
            _this7.cancelDragging();
          }
        }
      });
      var containerRectPoint = new Point(containerRect.left, containerRect.top);
      emulationDraggable._startWindowScrollPoint = this._startWindowScrollPoint;
      emulationDraggable.move(this.pinnedPosition.add(containerRectPoint).add(this.windowScrollPoint).sub(this.parentsScrollPoint));
      emulationDraggable.dragStart(event);
      event.preventDefault();
    }
  }, {
    key: "dragEndAction",
    value: function dragEndAction() {
      this.pinPosition(this.position);
    }
  }, {
    key: "getRectangle",
    value: function getRectangle() {
      return new Rectangle(this.position, this.getSize());
    }
  }, {
    key: "refresh",
    value: function refresh() {
      if (this.bounding.refresh) {
        this.bounding.refresh();
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
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
      var index = draggables.indexOf(this);
      if (index > -1) {
        draggables.splice(index, 1);
      }
    }
  }, {
    key: "container",
    get: function get() {
      return this._container = this._container || this.options.container || this.options.parent || getDefaultContainer(this.element);
    }
  }, {
    key: "handler",
    get: function get() {
      if (!this._handler) {
        if (typeof this.options.handler === 'string') {
          this._handler = this.element.querySelector(this.options.handler) || this.element;
        } else {
          this._handler = this.options.handler || this.element;
        }
      }
      return this._handler;
    }
  }, {
    key: "nativeDragAndDrop",
    get: function get() {
      return this.options.nativeDragAndDrop || false;
    }
  }, {
    key: "emulateNativeDragAndDropOnTouch",
    get: function get() {
      return this.options.emulateNativeDragAndDropOnTouch || false;
    }
  }, {
    key: "shouldRemoveZeroTranslate",
    get: function get() {
      return this.options.shouldRemoveZeroTranslate || false;
    }
  }, {
    key: "touchDraggingThreshold",
    get: function get() {
      return this.options.touchDraggingThreshold || 0;
    }
  }, {
    key: "dragOverThrottleDuration",
    get: function get() {
      return this.options.dragOverThrottleDuration || 16;
    }
  }, {
    key: "windowScrollPoint",
    get: function get() {
      return new Point(window.scrollX, window.scrollY);
    }
  }, {
    key: "parents",
    get: function get() {
      if (this._cachedParents) return this._cachedParents;
      this._cachedParents = [];
      var element = this.element;
      while (element.parentNode && element != this.container) {
        this._cachedParents.unshift(element.parentNode);
        element = element.parentNode;
      }
      return this._cachedParents;
    }
  }, {
    key: "parentsScrollPoint",
    get: function get() {
      return new Point(this.parents.reduce(function (sum, p) {
        return sum + p.scrollLeft;
      }, 0), this.parents.reduce(function (sum, p) {
        return sum + p.scrollTop;
      }, 0));
    }
  }, {
    key: "enable",
    get: function get() {
      return this._enable;
    },
    set: function set(enable) {
      if (enable) {
        this.element.classList.remove('dragee-disable');
      } else {
        this.element.classList.add('dragee-disable');
      }
      this._enable = enable;
    }
  }]);
  return Draggable;
}(EventEmitter);
Draggable.emitter = new EventEmitter();
Draggable.emitter.on('draggable:create', addToDefaultScope);

var resizeObservers = [];

var hasActiveObservations = function () {
    return resizeObservers.some(function (ro) { return ro.activeTargets.length > 0; });
};

var hasSkippedObservations = function () {
    return resizeObservers.some(function (ro) { return ro.skippedTargets.length > 0; });
};

var msg = 'ResizeObserver loop completed with undelivered notifications.';
var deliverResizeLoopError = function () {
    var event;
    if (typeof ErrorEvent === 'function') {
        event = new ErrorEvent('error', {
            message: msg
        });
    }
    else {
        event = document.createEvent('Event');
        event.initEvent('error', false, false);
        event.message = msg;
    }
    window.dispatchEvent(event);
};

var ResizeObserverBoxOptions;
(function (ResizeObserverBoxOptions) {
    ResizeObserverBoxOptions["BORDER_BOX"] = "border-box";
    ResizeObserverBoxOptions["CONTENT_BOX"] = "content-box";
    ResizeObserverBoxOptions["DEVICE_PIXEL_CONTENT_BOX"] = "device-pixel-content-box";
})(ResizeObserverBoxOptions || (ResizeObserverBoxOptions = {}));

var freeze = function (obj) { return Object.freeze(obj); };

var ResizeObserverSize = (function () {
    function ResizeObserverSize(inlineSize, blockSize) {
        this.inlineSize = inlineSize;
        this.blockSize = blockSize;
        freeze(this);
    }
    return ResizeObserverSize;
}());

var DOMRectReadOnly = (function () {
    function DOMRectReadOnly(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.top = this.y;
        this.left = this.x;
        this.bottom = this.top + this.height;
        this.right = this.left + this.width;
        return freeze(this);
    }
    DOMRectReadOnly.prototype.toJSON = function () {
        var _a = this, x = _a.x, y = _a.y, top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left, width = _a.width, height = _a.height;
        return { x: x, y: y, top: top, right: right, bottom: bottom, left: left, width: width, height: height };
    };
    DOMRectReadOnly.fromRect = function (rectangle) {
        return new DOMRectReadOnly(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
    };
    return DOMRectReadOnly;
}());

var isSVG = function (target) { return target instanceof SVGElement && 'getBBox' in target; };
var isHidden = function (target) {
    if (isSVG(target)) {
        var _a = target.getBBox(), width = _a.width, height = _a.height;
        return !width && !height;
    }
    var _b = target, offsetWidth = _b.offsetWidth, offsetHeight = _b.offsetHeight;
    return !(offsetWidth || offsetHeight || target.getClientRects().length);
};
var isElement = function (obj) {
    var _a;
    if (obj instanceof Element) {
        return true;
    }
    var scope = (_a = obj === null || obj === void 0 ? void 0 : obj.ownerDocument) === null || _a === void 0 ? void 0 : _a.defaultView;
    return !!(scope && obj instanceof scope.Element);
};
var isReplacedElement = function (target) {
    switch (target.tagName) {
        case 'INPUT':
            if (target.type !== 'image') {
                break;
            }
        case 'VIDEO':
        case 'AUDIO':
        case 'EMBED':
        case 'OBJECT':
        case 'CANVAS':
        case 'IFRAME':
        case 'IMG':
            return true;
    }
    return false;
};

var global = typeof window !== 'undefined' ? window : {};

var cache = new WeakMap();
var scrollRegexp = /auto|scroll/;
var verticalRegexp = /^tb|vertical/;
var IE = (/msie|trident/i).test(global.navigator && global.navigator.userAgent);
var parseDimension = function (pixel) { return parseFloat(pixel || '0'); };
var size = function (inlineSize, blockSize, switchSizes) {
    if (inlineSize === void 0) { inlineSize = 0; }
    if (blockSize === void 0) { blockSize = 0; }
    if (switchSizes === void 0) { switchSizes = false; }
    return new ResizeObserverSize((switchSizes ? blockSize : inlineSize) || 0, (switchSizes ? inlineSize : blockSize) || 0);
};
var zeroBoxes = freeze({
    devicePixelContentBoxSize: size(),
    borderBoxSize: size(),
    contentBoxSize: size(),
    contentRect: new DOMRectReadOnly(0, 0, 0, 0)
});
var calculateBoxSizes = function (target, forceRecalculation) {
    if (forceRecalculation === void 0) { forceRecalculation = false; }
    if (cache.has(target) && !forceRecalculation) {
        return cache.get(target);
    }
    if (isHidden(target)) {
        cache.set(target, zeroBoxes);
        return zeroBoxes;
    }
    var cs = getComputedStyle(target);
    var svg = isSVG(target) && target.ownerSVGElement && target.getBBox();
    var removePadding = !IE && cs.boxSizing === 'border-box';
    var switchSizes = verticalRegexp.test(cs.writingMode || '');
    var canScrollVertically = !svg && scrollRegexp.test(cs.overflowY || '');
    var canScrollHorizontally = !svg && scrollRegexp.test(cs.overflowX || '');
    var paddingTop = svg ? 0 : parseDimension(cs.paddingTop);
    var paddingRight = svg ? 0 : parseDimension(cs.paddingRight);
    var paddingBottom = svg ? 0 : parseDimension(cs.paddingBottom);
    var paddingLeft = svg ? 0 : parseDimension(cs.paddingLeft);
    var borderTop = svg ? 0 : parseDimension(cs.borderTopWidth);
    var borderRight = svg ? 0 : parseDimension(cs.borderRightWidth);
    var borderBottom = svg ? 0 : parseDimension(cs.borderBottomWidth);
    var borderLeft = svg ? 0 : parseDimension(cs.borderLeftWidth);
    var horizontalPadding = paddingLeft + paddingRight;
    var verticalPadding = paddingTop + paddingBottom;
    var horizontalBorderArea = borderLeft + borderRight;
    var verticalBorderArea = borderTop + borderBottom;
    var horizontalScrollbarThickness = !canScrollHorizontally ? 0 : target.offsetHeight - verticalBorderArea - target.clientHeight;
    var verticalScrollbarThickness = !canScrollVertically ? 0 : target.offsetWidth - horizontalBorderArea - target.clientWidth;
    var widthReduction = removePadding ? horizontalPadding + horizontalBorderArea : 0;
    var heightReduction = removePadding ? verticalPadding + verticalBorderArea : 0;
    var contentWidth = svg ? svg.width : parseDimension(cs.width) - widthReduction - verticalScrollbarThickness;
    var contentHeight = svg ? svg.height : parseDimension(cs.height) - heightReduction - horizontalScrollbarThickness;
    var borderBoxWidth = contentWidth + horizontalPadding + verticalScrollbarThickness + horizontalBorderArea;
    var borderBoxHeight = contentHeight + verticalPadding + horizontalScrollbarThickness + verticalBorderArea;
    var boxes = freeze({
        devicePixelContentBoxSize: size(Math.round(contentWidth * devicePixelRatio), Math.round(contentHeight * devicePixelRatio), switchSizes),
        borderBoxSize: size(borderBoxWidth, borderBoxHeight, switchSizes),
        contentBoxSize: size(contentWidth, contentHeight, switchSizes),
        contentRect: new DOMRectReadOnly(paddingLeft, paddingTop, contentWidth, contentHeight)
    });
    cache.set(target, boxes);
    return boxes;
};
var calculateBoxSize = function (target, observedBox, forceRecalculation) {
    var _a = calculateBoxSizes(target, forceRecalculation), borderBoxSize = _a.borderBoxSize, contentBoxSize = _a.contentBoxSize, devicePixelContentBoxSize = _a.devicePixelContentBoxSize;
    switch (observedBox) {
        case ResizeObserverBoxOptions.DEVICE_PIXEL_CONTENT_BOX:
            return devicePixelContentBoxSize;
        case ResizeObserverBoxOptions.BORDER_BOX:
            return borderBoxSize;
        default:
            return contentBoxSize;
    }
};

var ResizeObserverEntry = (function () {
    function ResizeObserverEntry(target) {
        var boxes = calculateBoxSizes(target);
        this.target = target;
        this.contentRect = boxes.contentRect;
        this.borderBoxSize = freeze([boxes.borderBoxSize]);
        this.contentBoxSize = freeze([boxes.contentBoxSize]);
        this.devicePixelContentBoxSize = freeze([boxes.devicePixelContentBoxSize]);
    }
    return ResizeObserverEntry;
}());

var calculateDepthForNode = function (node) {
    if (isHidden(node)) {
        return Infinity;
    }
    var depth = 0;
    var parent = node.parentNode;
    while (parent) {
        depth += 1;
        parent = parent.parentNode;
    }
    return depth;
};

var broadcastActiveObservations = function () {
    var shallowestDepth = Infinity;
    var callbacks = [];
    resizeObservers.forEach(function processObserver(ro) {
        if (ro.activeTargets.length === 0) {
            return;
        }
        var entries = [];
        ro.activeTargets.forEach(function processTarget(ot) {
            var entry = new ResizeObserverEntry(ot.target);
            var targetDepth = calculateDepthForNode(ot.target);
            entries.push(entry);
            ot.lastReportedSize = calculateBoxSize(ot.target, ot.observedBox);
            if (targetDepth < shallowestDepth) {
                shallowestDepth = targetDepth;
            }
        });
        callbacks.push(function resizeObserverCallback() {
            ro.callback.call(ro.observer, entries, ro.observer);
        });
        ro.activeTargets.splice(0, ro.activeTargets.length);
    });
    for (var _i = 0, callbacks_1 = callbacks; _i < callbacks_1.length; _i++) {
        var callback = callbacks_1[_i];
        callback();
    }
    return shallowestDepth;
};

var gatherActiveObservationsAtDepth = function (depth) {
    resizeObservers.forEach(function processObserver(ro) {
        ro.activeTargets.splice(0, ro.activeTargets.length);
        ro.skippedTargets.splice(0, ro.skippedTargets.length);
        ro.observationTargets.forEach(function processTarget(ot) {
            if (ot.isActive()) {
                if (calculateDepthForNode(ot.target) > depth) {
                    ro.activeTargets.push(ot);
                }
                else {
                    ro.skippedTargets.push(ot);
                }
            }
        });
    });
};

var process = function () {
    var depth = 0;
    gatherActiveObservationsAtDepth(depth);
    while (hasActiveObservations()) {
        depth = broadcastActiveObservations();
        gatherActiveObservationsAtDepth(depth);
    }
    if (hasSkippedObservations()) {
        deliverResizeLoopError();
    }
    return depth > 0;
};

var trigger;
var callbacks = [];
var notify = function () { return callbacks.splice(0).forEach(function (cb) { return cb(); }); };
var queueMicroTask = function (callback) {
    if (!trigger) {
        var toggle_1 = 0;
        var el_1 = document.createTextNode('');
        var config = { characterData: true };
        new MutationObserver(function () { return notify(); }).observe(el_1, config);
        trigger = function () { el_1.textContent = "".concat(toggle_1 ? toggle_1-- : toggle_1++); };
    }
    callbacks.push(callback);
    trigger();
};

var queueResizeObserver = function (cb) {
    queueMicroTask(function ResizeObserver() {
        requestAnimationFrame(cb);
    });
};

var watching = 0;
var isWatching = function () { return !!watching; };
var CATCH_PERIOD = 250;
var observerConfig = { attributes: true, characterData: true, childList: true, subtree: true };
var events = [
    'resize',
    'load',
    'transitionend',
    'animationend',
    'animationstart',
    'animationiteration',
    'keyup',
    'keydown',
    'mouseup',
    'mousedown',
    'mouseover',
    'mouseout',
    'blur',
    'focus'
];
var time = function (timeout) {
    if (timeout === void 0) { timeout = 0; }
    return Date.now() + timeout;
};
var scheduled = false;
var Scheduler = (function () {
    function Scheduler() {
        var _this = this;
        this.stopped = true;
        this.listener = function () { return _this.schedule(); };
    }
    Scheduler.prototype.run = function (timeout) {
        var _this = this;
        if (timeout === void 0) { timeout = CATCH_PERIOD; }
        if (scheduled) {
            return;
        }
        scheduled = true;
        var until = time(timeout);
        queueResizeObserver(function () {
            var elementsHaveResized = false;
            try {
                elementsHaveResized = process();
            }
            finally {
                scheduled = false;
                timeout = until - time();
                if (!isWatching()) {
                    return;
                }
                if (elementsHaveResized) {
                    _this.run(1000);
                }
                else if (timeout > 0) {
                    _this.run(timeout);
                }
                else {
                    _this.start();
                }
            }
        });
    };
    Scheduler.prototype.schedule = function () {
        this.stop();
        this.run();
    };
    Scheduler.prototype.observe = function () {
        var _this = this;
        var cb = function () { return _this.observer && _this.observer.observe(document.body, observerConfig); };
        document.body ? cb() : global.addEventListener('DOMContentLoaded', cb);
    };
    Scheduler.prototype.start = function () {
        var _this = this;
        if (this.stopped) {
            this.stopped = false;
            this.observer = new MutationObserver(this.listener);
            this.observe();
            events.forEach(function (name) { return global.addEventListener(name, _this.listener, true); });
        }
    };
    Scheduler.prototype.stop = function () {
        var _this = this;
        if (!this.stopped) {
            this.observer && this.observer.disconnect();
            events.forEach(function (name) { return global.removeEventListener(name, _this.listener, true); });
            this.stopped = true;
        }
    };
    return Scheduler;
}());
var scheduler = new Scheduler();
var updateCount = function (n) {
    !watching && n > 0 && scheduler.start();
    watching += n;
    !watching && scheduler.stop();
};

var skipNotifyOnElement = function (target) {
    return !isSVG(target)
        && !isReplacedElement(target)
        && getComputedStyle(target).display === 'inline';
};
var ResizeObservation = (function () {
    function ResizeObservation(target, observedBox) {
        this.target = target;
        this.observedBox = observedBox || ResizeObserverBoxOptions.CONTENT_BOX;
        this.lastReportedSize = {
            inlineSize: 0,
            blockSize: 0
        };
    }
    ResizeObservation.prototype.isActive = function () {
        var size = calculateBoxSize(this.target, this.observedBox, true);
        if (skipNotifyOnElement(this.target)) {
            this.lastReportedSize = size;
        }
        if (this.lastReportedSize.inlineSize !== size.inlineSize
            || this.lastReportedSize.blockSize !== size.blockSize) {
            return true;
        }
        return false;
    };
    return ResizeObservation;
}());

var ResizeObserverDetail = (function () {
    function ResizeObserverDetail(resizeObserver, callback) {
        this.activeTargets = [];
        this.skippedTargets = [];
        this.observationTargets = [];
        this.observer = resizeObserver;
        this.callback = callback;
    }
    return ResizeObserverDetail;
}());

var observerMap = new WeakMap();
var getObservationIndex = function (observationTargets, target) {
    for (var i = 0; i < observationTargets.length; i += 1) {
        if (observationTargets[i].target === target) {
            return i;
        }
    }
    return -1;
};
var ResizeObserverController = (function () {
    function ResizeObserverController() {
    }
    ResizeObserverController.connect = function (resizeObserver, callback) {
        var detail = new ResizeObserverDetail(resizeObserver, callback);
        observerMap.set(resizeObserver, detail);
    };
    ResizeObserverController.observe = function (resizeObserver, target, options) {
        var detail = observerMap.get(resizeObserver);
        var firstObservation = detail.observationTargets.length === 0;
        if (getObservationIndex(detail.observationTargets, target) < 0) {
            firstObservation && resizeObservers.push(detail);
            detail.observationTargets.push(new ResizeObservation(target, options && options.box));
            updateCount(1);
            scheduler.schedule();
        }
    };
    ResizeObserverController.unobserve = function (resizeObserver, target) {
        var detail = observerMap.get(resizeObserver);
        var index = getObservationIndex(detail.observationTargets, target);
        var lastObservation = detail.observationTargets.length === 1;
        if (index >= 0) {
            lastObservation && resizeObservers.splice(resizeObservers.indexOf(detail), 1);
            detail.observationTargets.splice(index, 1);
            updateCount(-1);
        }
    };
    ResizeObserverController.disconnect = function (resizeObserver) {
        var _this = this;
        var detail = observerMap.get(resizeObserver);
        detail.observationTargets.slice().forEach(function (ot) { return _this.unobserve(resizeObserver, ot.target); });
        detail.activeTargets.splice(0, detail.activeTargets.length);
    };
    return ResizeObserverController;
}());

var ResizeObserver$1 = (function () {
    function ResizeObserver(callback) {
        if (arguments.length === 0) {
            throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
        }
        if (typeof callback !== 'function') {
            throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
        }
        ResizeObserverController.connect(this, callback);
    }
    ResizeObserver.prototype.observe = function (target, options) {
        if (arguments.length === 0) {
            throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
        }
        if (!isElement(target)) {
            throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
        }
        ResizeObserverController.observe(this, target, options);
    };
    ResizeObserver.prototype.unobserve = function (target) {
        if (arguments.length === 0) {
            throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
        }
        if (!isElement(target)) {
            throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
        }
        ResizeObserverController.unobserve(this, target);
    };
    ResizeObserver.prototype.disconnect = function () {
        ResizeObserverController.disconnect(this);
    };
    ResizeObserver.toString = function () {
        return 'function ResizeObserver () { [polyfill code] }';
    };
    return ResizeObserver;
}());

function debounce(func, wait, immediate) {
  var timeout;
  return function executedFunction() {
    var context = this;
    var args = arguments;
    var later = function later() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

var ResizeObserver = window.ResizeObserver || ResizeObserver$1;
var List = /*#__PURE__*/function (_EventEmitter) {
  _inherits(List, _EventEmitter);
  var _super = _createSuper(List);
  function List(draggables) {
    var _this;
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _classCallCheck(this, List);
    _this = _super.call(this, options);
    _this.options = Object.assign({
      timeEnd: 200,
      timeExcange: 400,
      radius: 30
    }, options);
    _this.container = options.container;
    _this.draggables = draggables;
    _this.changedDuringIteration = false;
    _this.resizeObserver = new ResizeObserver(debounce(_this.onResize.bind(_assertThisInitialized(_this)), 100));
    if (_this.container) {
      _this.resizeObserver.observe(_this.container);
    }
    _this.init();
    return _this;
  }
  _createClass(List, [{
    key: "onResize",
    value: function onResize() {
      if (this.options.reorderOnChange) this.reset();
      this.draggables.forEach(function (d) {
        return d.startPositioning();
      });
    }
  }, {
    key: "init",
    value: function init() {
      var _this2 = this;
      this._enable = true;
      this.draggables.forEach(function (draggable) {
        return _this2.initDraggable(draggable);
      });
    }
  }, {
    key: "initDraggable",
    value: function initDraggable(draggable) {
      var _this3 = this;
      draggable.enable = this._enable;
      draggable.on('drag:move', function () {
        return _this3.onMove(draggable);
      });
      draggable.dragEndAction = function () {
        draggable.pinPosition(draggable.pinnedPosition, _this3.options.timeEnd);
        _this3.onEnd(draggable);
      };
      this.resizeObserver.observe(draggable.element);
    }
  }, {
    key: "releaseDraggable",
    value: function releaseDraggable(draggable) {
      this.resizeObserver.unobserve(draggable.element);
      draggable.resetOn('drag:end');
      draggable.resetOn('drag:move');
      removeItem(this.draggables, draggable);
    }
  }, {
    key: "onMove",
    value: function onMove(draggable) {
      var sortedDraggables = this.getSortedDraggables();
      var pinnedPositions = sortedDraggables.map(function (draggable) {
        return draggable.pinnedPosition;
      });
      var currentIndex = sortedDraggables.indexOf(draggable);
      var targetIndex = indexOfNearestPoint(pinnedPositions, draggable.position, this.options.radius, this.distanceFunc);
      if (targetIndex !== -1 && currentIndex !== targetIndex) {
        if (targetIndex < currentIndex) {
          for (var i = targetIndex; i < currentIndex; i++) {
            sortedDraggables[i].pinPosition(pinnedPositions[i + 1], this.options.timeExcange);
          }
        } else {
          for (var _i = currentIndex; _i < targetIndex; _i++) {
            sortedDraggables[_i + 1].pinPosition(pinnedPositions[_i], this.options.timeExcange);
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
  }, {
    key: "onEnd",
    value: function onEnd(draggable) {
      if (this.changedDuringIteration) {
        this.emit('list:change');
        this.changedDuringIteration = false;
        if (this.options.reorderOnChange && this.options.container) {
          this.reorderElements(draggable);
        }
      }
    }
  }, {
    key: "reorderElements",
    value: function reorderElements(movedDraggable) {
      var sortedDraggables = this.getSortedDraggables();
      var index = sortedDraggables.indexOf(movedDraggable);
      var next = sortedDraggables[index + 1];
      this.reset();
      if (next) {
        this.container.insertBefore(movedDraggable.element, next.element);
      } else {
        this.container.appendChild(movedDraggable.element);
      }
      this.draggables.forEach(function (d) {
        return d.startPositioning();
      });
      this.emit('list:reordered');
    }
  }, {
    key: "getCurrentPinnedPositions",
    value: function getCurrentPinnedPositions() {
      return this.draggables.map(function (draggable) {
        return draggable.pinnedPosition.clone();
      });
    }
  }, {
    key: "getSortedDraggables",
    value: function getSortedDraggables() {
      return this.draggables.sort(this.sorting.bind(this));
    }
  }, {
    key: "reset",
    value: function reset() {
      this.draggables.forEach(function (draggable) {
        return draggable.resetPositionToInitial();
      });
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.draggables.forEach(function (draggable) {
        return draggable.refresh();
      });
    }
  }, {
    key: "add",
    value: function add(draggables) {
      var _this4 = this;
      if (!(draggables instanceof Array)) {
        draggables = [draggables];
      }
      draggables.forEach(function (draggable) {
        return _this4.initDraggable(draggable);
      });
      this.draggables = this.draggables.concat(draggables);
    }
  }, {
    key: "remove",
    value: function remove(draggables) {
      var _this5 = this;
      var initialPositions = this.draggables.map(function (draggable) {
        return draggable.initialPosition;
      });
      var list = [];
      var sortedDraggables = this.getSortedDraggables();
      if (!(draggables instanceof Array)) {
        draggables = [draggables];
      }
      draggables.forEach(function (draggable) {
        return _this5.releaseDraggable(draggable);
      });
      var j = 0;
      sortedDraggables.forEach(function (draggable) {
        if (_this5.draggables.indexOf(draggable) !== -1) {
          if (draggable.pinnedPosition !== initialPositions[j]) {
            draggable.pinPosition(initialPositions[j], _this5.options.timeExcange);
          }
          draggable.initialPosition = initialPositions[j];
          j++;
          list.push(draggable);
        }
      });
      this.draggables = list;
    }
  }, {
    key: "clear",
    value: function clear() {
      this.remove(this.draggables.slice());
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.draggables.forEach(function (draggable) {
        return draggable.destroy();
      });
      if (this.container) {
        this.resizeObserver.unobserve(this.container);
      }
    }
  }, {
    key: "sorting",
    value: function sorting(draggableA, draggableB) {
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
  }, {
    key: "distanceFunc",
    get: function get() {
      return this.options.getDistance || getDistance;
    }
  }, {
    key: "positions",
    get: function get() {
      return this.getCurrentPinnedPositions();
    },
    set: function set(positions) {
      var _this6 = this;
      var message = 'wrong array length';
      if (positions.length === this.draggables.length) {
        positions.forEach(function (point, i) {
          _this6.draggables[i].pinPosition(point);
        });
      } else {
        throw message;
      }
    }
  }, {
    key: "enable",
    get: function get() {
      return this._enable;
    },
    set: function set(enable) {
      this._enable = enable;
      this.draggables.forEach(function (draggable) {
        draggable.enable = enable;
      });
    }
  }], [{
    key: "factory",
    value: function factory(containerElement, elements) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var draggables = Array.from(elements).map(function (element) {
        return new Draggable(element, Object.assign({
          container: containerElement
        }, options.draggable || {}));
      });
      return new List(draggables, Object.assign({
        container: containerElement
      }, options.list || {}));
    }
  }]);
  return List;
}(EventEmitter);

var arrayMove = function arrayMove(array, from, to) {
  array.splice(to < 0 ? array.length + to : to, 0, array.splice(from, 1)[0]);
};
var BubblingList = /*#__PURE__*/function (_List) {
  _inherits(BubblingList, _List);
  var _super = _createSuper(BubblingList);
  function BubblingList() {
    _classCallCheck(this, BubblingList);
    return _super.apply(this, arguments);
  }
  _createClass(BubblingList, [{
    key: "autoDetectVerticalGap",
    value: function autoDetectVerticalGap() {
      if (!this._verticalGap && !this.options.verticalGap && this.draggables.length >= 2) {
        var sorted = this.getSortedDraggables();
        this._verticalGap = sorted[1].pinnedPosition.y - sorted[0].pinnedPosition.y - sorted[0].getSize().y;
      }
    }
  }, {
    key: "autoDetectStartPosition",
    value: function autoDetectStartPosition() {
      if (this.draggables.length >= 1 && !this.startPosition) {
        this.startPosition = this.draggables[0].pinnedPosition;
      }
    }
  }, {
    key: "initDraggable",
    value: function initDraggable(draggable) {
      var _this = this;
      _get(_getPrototypeOf(BubblingList.prototype), "initDraggable", this).call(this, draggable);
      draggable.on('drag:start', function () {
        return _this.onDragStart(draggable);
      });
    }
  }, {
    key: "onDragStart",
    value: function onDragStart(draggable) {
      this.autoDetectVerticalGap();
      this.autoDetectStartPosition();
      this.cachedSortedDraggables = this.getSortedDraggables();
      this.indexOfActiveDraggable = this.cachedSortedDraggables.indexOf(draggable);
    }
  }, {
    key: "onMove",
    value: function onMove(draggable) {
      var prevDraggable = this.cachedSortedDraggables[this.indexOfActiveDraggable - 1];
      var nextDraggable = this.cachedSortedDraggables[this.indexOfActiveDraggable + 1];
      var currentPosition = draggable.pinnedPosition;
      var currentOrder;
      var targetIndex;
      if (draggable.upDirection && prevDraggable) {
        currentOrder = [prevDraggable, draggable].map(function (d) {
          return d.pinnedPosition;
        });
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
        currentOrder = [draggable, nextDraggable].map(function (d) {
          return d.pinnedPosition;
        });
        targetIndex = indexOfNearestPoint(currentOrder, draggable.position, 10000, this.distanceFunc);
        if (targetIndex === 1) {
          nextDraggable.pinPosition(draggable.pinnedPosition, this.options.timeExcange);
          var draggableNewPosition = new Point(nextDraggable.pinnedPosition.x, nextDraggable.pinnedPosition.y + nextDraggable.getSize().y + this.verticalGap);
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
  }, {
    key: "bubbling",
    value: function bubbling(sortedDraggables, currentDraggable) {
      var _this2 = this;
      var currentPosition = this.startPosition.clone();
      sortedDraggables || (sortedDraggables = this.getSortedDraggables());
      sortedDraggables.forEach(function (draggable) {
        if (!draggable.pinnedPosition.compare(currentPosition)) {
          if (draggable === currentDraggable && !currentDraggable.shouldUseNativeDragAndDrop()) {
            draggable.pinnedPosition = currentPosition.clone();
          } else {
            draggable.pinPosition(currentPosition, draggable === currentDraggable ? 0 : _this2.options.timeExcange);
          }
        }
        currentPosition.y = currentPosition.y + draggable.getSize().y + _this2.verticalGap;
      });
    }
  }, {
    key: "remove",
    value: function remove(draggables) {
      var _this3 = this;
      if (!(draggables instanceof Array)) {
        draggables = [draggables];
      }
      draggables.forEach(function (draggable) {
        return _this3.releaseDraggable(draggable);
      });
      this.draggables = this.draggables.filter(function (d) {
        return !draggables.includes(d);
      });
      this.draggables.forEach(function (d) {
        return d.startPositioning();
      });
      if (this.draggables.length > 0) {
        this.autoDetectVerticalGap();
        this.autoDetectStartPosition();
        this.bubbling();
      }
    }
  }, {
    key: "distanceFunc",
    get: function get() {
      return this.options.getDistance || getYDifference;
    }
  }, {
    key: "verticalGap",
    get: function get() {
      if (this.options.verticalGap) {
        return this.options.verticalGap;
      } else {
        this.autoDetectVerticalGap();
        return this._verticalGap || 0;
      }
    },
    set: function set(gapValue) {
      this.options.verticalGap = gapValue;
    }
  }], [{
    key: "factory",
    value: function factory(containerElement, elements) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var draggables = Array.from(elements).map(function (element) {
        return new Draggable(element, Object.assign({
          container: containerElement
        }, options.draggable || {}));
      });
      return new BubblingList(draggables, Object.assign({
        container: containerElement
      }, options.list || {}));
    }
  }]);
  return BubblingList;
}(List);

export { Bound, BoundToArc, BoundToCircle, BoundToElement, BoundToLine, BoundToLineX, BoundToLineY, BoundToRectangle, BubblingList, Draggable, FloatLeftStrategy, FloatRightStrategy, List, NotCrossingStrategy, Point, Rectangle, Scope, Target, defaultScope, getDistance, getXDifference, getYDifference, indexOfNearestPoint, scope, scopes, transformedSpaceDistanceFactory };
