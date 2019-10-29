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
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
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
  }

  return _assertThisInitialized(self);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
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

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function getSumValueOfStyleRules(element, rules) {
  return rules.reduce(function (sum, rule) {
    return sum + parseInt(window.getComputedStyle(element)[rule] || 0);
  }, 0);
}

var Point =
/*#__PURE__*/
function () {
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
      var isContentBoxSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var width = parseInt(window.getComputedStyle(element)['width']);
      var height = parseInt(window.getComputedStyle(element)['height']);

      if (!isContentBoxSize) {
        width += getSumValueOfStyleRules(element, ['padding-left', 'padding-right', 'border-left-width', 'border-right-width']);
        height += getSumValueOfStyleRules(element, ['padding-top', 'padding-bottom', 'border-top-width', 'border-bottom-width']);
      }

      return new Point(width, height);
    }
  }]);

  return Point;
}();

function hasClass(element, c) {
  var re = new RegExp('(^|\\s)' + c + '(\\s|$)', 'g');
  return re.test(element.className);
}
function addClass(element, c) {
  if (!hasClass(element, c)) {
    element.className = (element.className + ' ' + c).replace(/\s+/g, ' ').replace(/(^ | $)/g, '');
  }
}
function removeClass(element, c) {
  var re = new RegExp('(^|\\s)' + c + '(\\s|$)', 'g');
  element.className = element.className.replace(re, '$1').replace(/\s+/g, ' ').replace(/(^ | $)/g, '');
}

function getDefaultParent(element) {
  var parent = element.parentNode;

  while (parent.parentNode && window.getComputedStyle(parent)['position'] === 'static') {
    parent = parent.parentNode;
  }

  return parent;
}

var EventEmitter =
/*#__PURE__*/
function () {
  function EventEmitter(context) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, EventEmitter);

    this.context = context || this;
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
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.events[eventName][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var func = _step.value;
          func.apply(this.context, args);

          if (this.interrupted) {
            return;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
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

var Rectangle =
/*#__PURE__*/
function () {
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
      var isContentBoxSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var isConsiderTranslate = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var position = Point.elementOffset(element, parent, isConsiderTranslate);
      var size = Point.elementSize(element, isContentBoxSize);
      return new Rectangle(position, size);
    }
  }]);

  return Rectangle;
}();

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
function toRadian(angle) {
  return angle % 360 * Math.PI / 180;
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

var Bound =
/*#__PURE__*/
function () {
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
  }]);

  return Bound;
}();
var BoundToRectangle =
/*#__PURE__*/
function (_Bound) {
  _inherits(BoundToRectangle, _Bound);

  function BoundToRectangle(rectangle) {
    var _this;

    _classCallCheck(this, BoundToRectangle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BoundToRectangle).call(this));
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
var BoundToElement =
/*#__PURE__*/
function (_BoundToRectangle) {
  _inherits(BoundToElement, _BoundToRectangle);

  function BoundToElement(element, parent) {
    var _this2;

    _classCallCheck(this, BoundToElement);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(BoundToElement).call(this, Rectangle.fromElement(element, parent)));
    _this2.element = element;
    _this2.parent = parent;
    return _this2;
  }

  _createClass(BoundToElement, [{
    key: "refresh",
    value: function refresh() {
      this.rectangle = Rectangle.fromElement(this.element, this.parent);
    }
  }]);

  return BoundToElement;
}(BoundToRectangle);
var BoundToLineX =
/*#__PURE__*/
function (_Bound2) {
  _inherits(BoundToLineX, _Bound2);

  function BoundToLineX(x, startY, endY) {
    var _this3;

    _classCallCheck(this, BoundToLineX);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(BoundToLineX).call(this));
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
var BoundToLineY =
/*#__PURE__*/
function (_Bound3) {
  _inherits(BoundToLineY, _Bound3);

  function BoundToLineY(y, startX, endX) {
    var _this4;

    _classCallCheck(this, BoundToLineY);

    _this4 = _possibleConstructorReturn(this, _getPrototypeOf(BoundToLineY).call(this));
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
var BoundToLine =
/*#__PURE__*/
function (_Bound4) {
  _inherits(BoundToLine, _Bound4);

  function BoundToLine(startPoint, endPoint) {
    var _this5;

    _classCallCheck(this, BoundToLine);

    _this5 = _possibleConstructorReturn(this, _getPrototypeOf(BoundToLine).call(this));
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
var BoundToCircle =
/*#__PURE__*/
function (_Bound5) {
  _inherits(BoundToCircle, _Bound5);

  function BoundToCircle(center, radius) {
    var _this6;

    _classCallCheck(this, BoundToCircle);

    _this6 = _possibleConstructorReturn(this, _getPrototypeOf(BoundToCircle).call(this));
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
var BoundToArc =
/*#__PURE__*/
function (_BoundToCircle) {
  _inherits(BoundToArc, _BoundToCircle);

  function BoundToArc(center, radius, startAngle, endAngle) {
    var _this7;

    _classCallCheck(this, BoundToArc);

    _this7 = _possibleConstructorReturn(this, _getPrototypeOf(BoundToArc).call(this, center, radius));
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

var BasicStrategy =
/*#__PURE__*/
function () {
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

var NotCrossingStrategy =
/*#__PURE__*/
function (_BasicStrategy) {
  _inherits(NotCrossingStrategy, _BasicStrategy);

  function NotCrossingStrategy() {
    _classCallCheck(this, NotCrossingStrategy);

    return _possibleConstructorReturn(this, _getPrototypeOf(NotCrossingStrategy).apply(this, arguments));
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

var FloatLeftStrategy =
/*#__PURE__*/
function (_BasicStrategy2) {
  _inherits(FloatLeftStrategy, _BasicStrategy2);

  function FloatLeftStrategy(rectangle) {
    var _this2;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, FloatLeftStrategy);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(FloatLeftStrategy).call(this, rectangle, options));
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

var FloatRightStrategy =
/*#__PURE__*/
function (_FloatLeftStrategy) {
  _inherits(FloatRightStrategy, _FloatLeftStrategy);

  function FloatRightStrategy(rectangle) {
    var _this5;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, FloatRightStrategy);

    _this5 = _possibleConstructorReturn(this, _getPrototypeOf(FloatRightStrategy).call(this, rectangle, options));
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

var addToDefaultScope = function addToDefaultScope(target) {
  defaultScope.addTarget(target);
};

var Target =
/*#__PURE__*/
function (_EventEmitter) {
  _inherits(Target, _EventEmitter);

  function Target(element, draggables) {
    var _this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, Target);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Target).call(this, undefined, options));

    var target = _assertThisInitialized(_this);

    var parent = options.parent || getDefaultParent(element);
    _this.options = Object.assign({
      timeEnd: 200,
      timeExcange: 400,
      parent: parent
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

    _this.init();

    return _this;
  }

  _createClass(Target, [{
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
      return Rectangle.fromElement(this.element, this.options.parent, this.options.isContentBoxSize, true);
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
      var includePoint = this.getRectangle().includePoint(draggable.getPosition());

      if (!includePoint) {
        if (this.getRectangle().includePoint(draggable.getCenter())) {
          draggable.position = draggable.getCenter().clone();
        } else {
          return false;
        }
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
  }]);

  return Target;
}(EventEmitter);
Target.emitter = new EventEmitter(Target);
Target.emitter.on('target:create', addToDefaultScope);

var scopes = [];

var Scope =
/*#__PURE__*/
function (_EventEmitter) {
  _inherits(Scope, _EventEmitter);

  function Scope(draggables, targets) {
    var _this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, Scope);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Scope).call(this, undefined, options));
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
  } catch (err) {
    passiveSupported = false;
  }

  return passiveSupported;
}

var isSupportPassiveEvents = checkSupportPassiveEvents();

var isTouch = 'ontouchstart' in window;
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

function addToDefaultScope$1(draggable) {
  defaultScope.addDraggable(draggable);
}

function copyStyles(source, destination) {
  var cs = window.getComputedStyle(source);

  for (var i = 0; i < cs.length; i++) {
    var key = cs[i];

    if (key.indexOf('transition') < 0 && key.indexOf('transform') < 0) {
      destination.style[key] = cs[key];
    }
  }

  for (var _i = 0; _i < source.children.length; _i++) {
    copyStyles(source.children[_i], destination.children[_i]);
  }
}

var Draggable =
/*#__PURE__*/
function (_EventEmitter) {
  _inherits(Draggable, _EventEmitter);

  function Draggable(element) {
    var _this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Draggable);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Draggable).call(this, undefined, options));
    _this.targets = [];
    _this.options = options;
    _this.element = element;
    preventDoubleInit(_assertThisInitialized(_this));
    Draggable.emitter.emit('draggable:create', _assertThisInitialized(_this));
    _this._enable = true;

    _this.startPositioning();

    _this.startListening();

    return _this;
  }

  _createClass(Draggable, [{
    key: "startPositioning",
    value: function startPositioning() {
      this._setDefaultTransition();

      this.offset = Point.elementOffset(this.element, this.parent, true);
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

      this._nativeDragMove = function (event) {
        return _this2.nativeDragMove(event);
      };

      this._nativeDragEnd = function (event) {
        return _this2.nativeDragEnd(event);
      };

      this.handler.addEventListener(touchEvents.start, this._dragStart, isSupportPassiveEvents ? {
        passive: false
      } : false);
      this.handler.addEventListener(mouseEvents.start, this._dragStart, isSupportPassiveEvents ? {
        passive: false
      } : false);
      this.handler.addEventListener('dragstart', this._nativeDragStart);
    }
  }, {
    key: "getSize",
    value: function getSize() {
      return Point.elementSize(this.element, this.options.isContentBoxSize);
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
      this.element.style[transitionProperty] = window.getComputedStyle(this.element)[transitionProperty];
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
        transition = transition.replace(/transform \d*m?s/, transitionCss);
      }

      this.element.style[transitionProperty] = transition;
    }
  }, {
    key: "_setTranslate",
    value: function _setTranslate(point) {
      this._transformPosition = point;
      var transform = this.element.style[transformProperty];
      var translateCss = " translate3d(".concat(point.x, "px, ").concat(point.y, "px, 0px)");
      var ua = window.navigator.userAgent;
      var msie = ua.indexOf('MSIE ') !== -1;

      if (msie) {
        translateCss = " translate(".concat(point.x, "px,").concat(point.y, "px)");

        if (!/translate\([^)]+\)/.test(transform)) {
          transform += translateCss;
        } else {
          transform = transform.replace(/translate\([^)]+\)/, translateCss);
        }
      } else {
        if (!/translate3d\([^)]+\)/.test(transform)) {
          transform += translateCss;
        } else {
          transform = transform.replace(/translate3d\([^)]+\)/, translateCss);
        }
      }

      this.element.style[transformProperty] = transform;
    }
  }, {
    key: "move",
    value: function move(point) {
      var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var isSilent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      point = point.clone();
      this.determineDirection(point);
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
      this.leftDirection = this.position.x < point.x;
      this.rightDirection = this.position.x > point.x;
      this.upDirection = this.position.y > point.y;
      this.downDirection = this.position.y < point.y;
    }
  }, {
    key: "dragStart",
    value: function dragStart(event) {
      this.currentEvent = event;

      if (!this._enable) {
        return;
      }

      var isTouchEvent = isTouch && event instanceof window.TouchEvent;
      this._startTouchPoint = new Point(isTouchEvent ? event.changedTouches[0].pageX : event.clientX, isTouchEvent ? event.changedTouches[0].pageY : event.clientY);
      this._startPosition = this.getPosition();

      if (isTouchEvent) {
        this._touchId = event.changedTouches[0].identifier;
      }

      event.stopPropagation();

      if (event.target instanceof window.HTMLInputElement || event.target instanceof window.HTMLInputElement) {
        event.target.focus();
      }

      if (!(this.nativeDragAndDrop || event.target instanceof window.HTMLInputElement || event.target instanceof window.HTMLInputElement)) {
        event.preventDefault();
      }

      if (this.nativeDragAndDrop) {
        if (isTouchEvent && this.emulateNativeDragAndDropOnTouch) {
          this.emulateNativeDragAndDrop(event);
        } else {
          this.element.draggable = true;
        }
      } else {
        document.addEventListener(touchEvents.move, this._dragMove, isSupportPassiveEvents ? {
          passive: false
        } : false);
        document.addEventListener(mouseEvents.move, this._dragMove, isSupportPassiveEvents ? {
          passive: false
        } : false);
        document.addEventListener(touchEvents.end, this._dragEnd, isSupportPassiveEvents ? {
          passive: false
        } : false);
        document.addEventListener(mouseEvents.end, this._dragEnd, isSupportPassiveEvents ? {
          passive: false
        } : false);
      }

      this.isDragging = true;
      this.emit('drag:start');
      addClass(this.element, 'dragee-active');
      this.emit('drag:move');
    }
  }, {
    key: "stopDragging",
    value: function stopDragging() {
      document.removeEventListener(touchEvents.move, this._dragMove);
      document.removeEventListener(mouseEvents.move, this._dragMove);
      document.removeEventListener(touchEvents.end, this._dragEnd);
      document.removeEventListener(mouseEvents.end, this._dragEnd);
      document.removeEventListener('dragover', this._nativeDragMove);
      document.removeEventListener('dragend', this._nativeDragEnd);
      this.element.draggable = false;
      this.isDragging = false;
      removeClass(this.element, 'dragee-active');
    }
  }, {
    key: "dragMove",
    value: function dragMove(event) {
      this.currentEvent = event;
      var touch;
      var isTouchEvent = isTouch && event instanceof window.TouchEvent;

      if (isTouchEvent) {
        touch = getTouchByID(event, this._touchId);

        if (!touch) {
          return;
        }
      }

      event.stopPropagation();
      event.preventDefault();
      var touchPoint = new Point(isTouchEvent ? touch.pageX : event.clientX, isTouchEvent ? touch.pageY : event.clientY);

      var point = this._startPosition.add(touchPoint.sub(this._startTouchPoint));

      point = this.bounding.bound(point, this.getSize());
      this.touchPoint = touchPoint;
      this.move(point);
    }
  }, {
    key: "dragEnd",
    value: function dragEnd(event) {
      var isTouchEvent = isTouch && event instanceof window.TouchEvent;

      if (isTouchEvent && !getTouchByID(event, this._touchId)) {
        return;
      }

      event.stopPropagation();
      event.preventDefault();
      this.dragEndAction();
      this.emit('drag:end');
      document.removeEventListener(touchEvents.move, this._dragMove);
      document.removeEventListener(mouseEvents.move, this._dragMove);
      document.removeEventListener(touchEvents.end, this._dragEnd);
      document.removeEventListener(mouseEvents.end, this._dragEnd);
      this.isDragging = false;
      removeClass(this.element, 'dragee-active');
    }
  }, {
    key: "nativeDragStart",
    value: function nativeDragStart(event) {
      event.dataTransfer.setData('application/draggable', this);
      document.addEventListener('dragover', this._nativeDragMove);
      document.addEventListener('dragend', this._nativeDragEnd);
    }
  }, {
    key: "nativeDragMove",
    value: function nativeDragMove(event) {
      addClass(this.element, 'dragee-placeholder');
      this.currentEvent = event;

      if (event.clientX === 0 && event.clientY === 0) {
        return;
      }

      var touchPoint = new Point(event.clientX, event.clientY);

      var point = this._startPosition.add(touchPoint.sub(this._startTouchPoint));

      point = this.bounding.bound(point, this.getSize());
      this.touchPoint = touchPoint;
      this.position = point;
      this.emit('drag:move');
    }
  }, {
    key: "nativeDragEnd",
    value: function nativeDragEnd(_event) {
      removeClass(this.element, 'dragee-placeholder');
      this.dragEndAction();
      this.emit('drag:end');
      document.removeEventListener('dragover', this._nativeDragMove);
      document.removeEventListener('dragend', this._nativeDragEnd);
      this.isDragging = false;
      this.element.draggable = false;
      removeClass(this.element, 'dragee-active');
    }
  }, {
    key: "emulateNativeDragAndDrop",
    value: function emulateNativeDragAndDrop(event) {
      var _this3 = this;

      var parentRect = this.parent.getBoundingClientRect();
      var clonedElement = this.element.cloneNode(true);
      clonedElement.style[transformProperty] = '';
      copyStyles(this.element, clonedElement);
      clonedElement.style.position = 'absolute';
      document.body.appendChild(clonedElement);
      addClass(this.element, 'dragee-placeholder');
      var emulationDraggable = new Draggable(clonedElement, {
        on: {
          'drag:move': function dragMove() {
            _this3.position = new Point(emulationDraggable.position.x - parentRect.left - window.scrollX, emulationDraggable.position.y - parentRect.top - window.scrollY);

            _this3.emit('drag:move');
          },
          'drag:end': function dragEnd() {
            emulationDraggable.destroy();
            document.body.removeChild(clonedElement);
            removeClass(_this3.element, 'dragee-placeholder');
            removeClass(_this3.element, 'dragee-active');
          }
        }
      });
      emulationDraggable.move(new Point(this.pinnedPosition.x + parentRect.left + window.scrollX, this.pinnedPosition.y + parentRect.top + window.scrollY));
      emulationDraggable.dragStart(event);
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
      this.getSize(true);

      if (this.bounding.refresh) {
        this.bounding.refresh();
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.handler.removeEventListener(touchEvents.start, this._dragStart);
      this.handler.removeEventListener(mouseEvents.start, this._dragStart);
      document.removeEventListener(touchEvents.move, this._dragMove);
      document.removeEventListener(mouseEvents.move, this._dragMove);
      document.removeEventListener(touchEvents.end, this._dragEnd);
      document.removeEventListener(mouseEvents.end, this._dragEnd);
      document.removeEventListener('dragstart', this._nativeDragStart);
      document.removeEventListener('dragover', this._nativeDragMove);
      document.removeEventListener('dragend', this._nativeDragEnd);
      this.resetEmitter();
      var index = draggables.indexOf(this);

      if (index > -1) {
        draggables.splice(index, 1);
      }
    }
  }, {
    key: "parent",
    get: function get() {
      return this._parent = this._parent || this.options.parent || getDefaultParent(this.element);
    }
  }, {
    key: "bounding",
    get: function get() {
      return this._bounding = this._bounding || this.options.bounding || new BoundToElement(this.parent, this.parent);
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
      return this.options.emulateNativeDragAndDropOnTouch || true;
    }
  }, {
    key: "enable",
    get: function get() {
      return this._enable;
    },
    set: function set(enable) {
      if (enable) {
        removeClass(this.element, 'dragee-disable');
      } else {
        addClass(this.element, 'dragee-disable');
      }

      return this._enable = enable;
    }
  }]);

  return Draggable;
}(EventEmitter);
Draggable.emitter = new EventEmitter(Draggable);
Draggable.emitter.on('draggable:create', addToDefaultScope$1);

var List =
/*#__PURE__*/
function (_EventEmitter) {
  _inherits(List, _EventEmitter);

  function List(draggables) {
    var _this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, List);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(List).call(this, undefined, options));
    _this.options = Object.assign({
      timeEnd: 200,
      timeExcange: 400,
      radius: 30,
      getDistance: getDistance
    }, options);
    _this.draggables = draggables;

    _this.init();

    return _this;
  }

  _createClass(List, [{
    key: "init",
    value: function init() {
      this._enable = true;
      this.draggables.forEach(this.initDraggable, this);
    }
  }, {
    key: "initDraggable",
    value: function initDraggable(draggable) {
      var _this2 = this;

      draggable.enable = this._enable;
      draggable.on('drag:move', function () {
        return _this2.onMove(draggable);
      });

      draggable.dragEndAction = function () {
        return draggable.pinPosition(draggable.pinnedPosition, _this2.options.timeEnd);
      };
    }
  }, {
    key: "onMove",
    value: function onMove(draggable) {
      var sortedDraggables = this.getSortedDraggables();
      var pinnedPositions = sortedDraggables.map(function (draggable) {
        return draggable.pinnedPosition;
      });
      var currentIndex = sortedDraggables.indexOf(draggable);
      var targetIndex = indexOfNearestPoint(pinnedPositions, draggable.position, this.options.radius, this.options.getDistance);

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

        this.emit('list:change');
      }
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
      var _this3 = this;

      var initialPositions = this.draggables.map(function (draggable) {
        return draggable.initialPosition;
      });
      var sortedDraggables = initialPositions.map(function (position) {
        return _this3.draggables.filter(function (draggable) {
          return draggable.pinnedPosition.compare(position);
        })[0];
      });
      return sortedDraggables;
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
        draggable.resetOn('drag:end');
        draggable.resetOn('drag:move');
        removeItem(_this5.draggables, draggable);
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
    value: function factory(parentElement, elements) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var draggables = _toConsumableArray(elements).map(function (element) {
        return new Draggable(element, Object.assign({
          parent: parentElement
        }, options.draggable || {}));
      });

      return new List(draggables, options.list || {});
    }
  }]);

  return List;
}(EventEmitter);

function setStyle(element, style) {
  style = style || {};
  var cssText = '';

  for (var key in style) {
    if (style.hasOwnProperty(key)) {
      cssText += key + ': ' + style[key] + '; ';
    }
  }

  element.style.cssText = cssText;
}

function appendFirstChild(element, node) {
  if (element.firstChild) {
    element.insertBefore(node, element.firstChild);
  } else {
    element.appendChild(node);
  }
}

function createCanvas(area, rectagle) {
  var canvas = document.createElement('canvas');

  if (window.getComputedStyle(area).position === 'static') {
    area.style.position = 'relative';
  }

  canvas.setAttribute('width', rectagle.size.x + 'px');
  canvas.setAttribute('height', rectagle.size.y + 'px');
  setStyle(canvas, {
    position: 'absolute',
    left: rectagle.position.y + 'px',
    top: rectagle.position.y + 'px',
    width: rectagle.size.x + 'px',
    height: rectagle.size.y + 'px'
  });
  appendFirstChild(area, canvas);
  return canvas;
}

var Spider =
/*#__PURE__*/
function () {
  function Spider(area, elements) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, Spider);

    var areaRectangle = Rectangle.fromElement(area, area);
    this.options = Object.assign({
      angle: 0,
      dAngle: 2 * Math.PI / elements.length,
      center: areaRectangle.getCenter(),
      startRadius: 50,
      endRadius: areaRectangle.getMinSide() / 2,
      lineWidth: 2,
      strokeStyle: '#ff5577',
      fillStyle: 'rgba(150,255,50,0.8)'
    }, options);
    this.area = area;
    this.areaRectangle = areaRectangle;
    this.init(elements);
  }

  _createClass(Spider, [{
    key: "init",
    value: function init(elements) {
      var _this = this;

      this.canvas = createCanvas(this.area, this.areaRectangle);
      this.context = this.canvas.getContext('2d');
      this.draggables = elements.map(function (element, i) {
        var angle = _this.options.angle + i * _this.options.dAngle;
        var halfSize = Point.elementSize(element).mult(0.5);
        var start = getPointFromRadialSystem(angle, _this.options.startRadius, _this.options.center).sub(halfSize);
        var end = getPointFromRadialSystem(angle, _this.options.endRadius, _this.options.center).sub(halfSize);
        return new Draggable(element, {
          parent: _this.area,
          bounding: new BoundToLine(start, end),
          position: start,
          on: {
            'drag:move': function dragMove() {
              return _this.draw();
            }
          }
        });
      });
      this.isInit = true;
      this.draw();
    }
  }, {
    key: "draw",
    value: function draw() {
      if (!this.isInit) {
        return;
      }

      this.context.clearRect(0, 0, this.areaRectangle.size.x, this.areaRectangle.size.y);
      this.context.beginPath();
      var point = this.draggables[0].getCenter();
      this.context.moveTo(point.x, point.y);

      for (var i = 0; i < this.draggables.length; i++) {
        point = this.draggables[i].getCenter();
        this.context.lineTo(point.x, point.y);
      }

      this.context.closePath();
      this.context.lineWidth = this.options.lineWidth;
      this.context.strokeStyle = this.options.strokeStyle;
      this.context.stroke();
      this.context.fillStyle = this.options.fillStyle;
      this.context.fill();
    }
  }]);

  return Spider;
}();

var ArcSlider =
/*#__PURE__*/
function (_EventEmitter) {
  _inherits(ArcSlider, _EventEmitter);

  function ArcSlider(area, element) {
    var _this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, ArcSlider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ArcSlider).call(this, undefined, options));
    var areaRectangle = Rectangle.fromElement(area, area);
    _this.options = Object.assign({
      center: areaRectangle.getCenter(),
      radius: areaRectangle.getMinSide() / 2,
      startAngle: Math.PI,
      endAngle: 0,
      angles: [Math.PI, -Math.PI / 4, 0, Math.PI / 4, Math.PI / 2],
      time: 500
    }, options);
    _this.shiftedCenter = _this.options.center;
    _this.area = area;

    _this.init(element);

    return _this;
  }

  _createClass(ArcSlider, [{
    key: "init",
    value: function init(element) {
      var _this2 = this;

      var angle = this.options.startAngle;
      var position = getPointFromRadialSystem(angle, this.options.radius, this.shiftedCenter);
      this.angle = angle;
      this.draggable = new Draggable(element, {
        parent: this.area,
        bounding: new BoundToArc(this.shiftedCenter, this.options.radius, this.options.startAngle, this.options.endAngle),
        position: position,
        on: {
          'drag:move': function dragMove() {
            return _this2.change();
          }
        }
      });
    }
  }, {
    key: "updateAngle",
    value: function updateAngle() {
      this.angle = getAngle(this.shiftedCenter, this.draggable.position);
    }
  }, {
    key: "change",
    value: function change() {
      this.updateAngle(); //      var angle = Geometry.getNearestAngle(this.options.angles, this.angle);
      //      this.setAngle(angle,this.options.time);

      this.emit('arcslider:change', {
        angle: this.angle
      });
    }
  }, {
    key: "setAngle",
    value: function setAngle(angle, time) {
      var position = getPointFromRadialSystem(this.angle, this.options.radius, this.shiftedCenter);
      this.angle = normalizeAngle(angle);
      this.draggable.pinPosition(position, time || 0);
      this.emit('arcslider:change', this.angle);
    }
  }]);

  return ArcSlider;
}(EventEmitter);

var rnd = function rnd() {
  return Math.round(Math.random() * 255);
};

var toHexString = function toHexString(digit) {
  var str = digit.toString(16);

  while (str.length < 2) {
    str = '0' + str;
  }

  return str;
};

function randomColor() {
  return "#".concat(toHexString(rnd())).concat(toHexString(rnd())).concat(toHexString(rnd()));
}

function getArrayWithBoundIndexes(index, length) {
  var retIndexes = [];

  if (index !== -1) {
    retIndexes.push(index);
    retIndexes.push((index + 1) % length);
  }

  return retIndexes;
}

var Chart =
/*#__PURE__*/
function (_EventEmitter) {
  _inherits(Chart, _EventEmitter);

  function Chart(area, elements) {
    var _this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, Chart);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Chart).call(this, undefined, options));
    var areaRectangle = Rectangle.fromElement(area, area);
    _this.options = Object.assign({
      center: areaRectangle.getCenter(),
      radius: areaRectangle.getMinSide() / 2,
      touchRadius: areaRectangle.getMinSide() / 2,
      boundAngle: Math.PI / 9,
      fillStyles: range(0, elements.length).map(function () {
        return randomColor();
      }),
      initAngles: range(-90, 270, 360 / elements.length).map(function (angle) {
        return toRadian(angle);
      }),
      limitImg: null,
      limitImgOffset: new Point(0, 0)
    }, options);
    _this.area = area;
    _this.areaRectangle = areaRectangle;

    _this.init(elements);

    return _this;
  }

  _createClass(Chart, [{
    key: "init",
    value: function init(elements) {
      var _this2 = this;

      this.canvas = createCanvas(this.area, this.areaRectangle);
      this.context = this.canvas.getContext('2d');
      this.draggables = elements.map(function (element, i) {
        var angle = _this2.options.initAngles[i];
        var halfSize = Point.elementSize(element).mult(0.5);
        var position = getPointFromRadialSystem(angle, _this2.options.touchRadius, _this2.options.center.sub(halfSize));
        return new Draggable(element, {
          parent: _this2.area,
          bounding: new BoundToArc(_this2.options.center.sub(halfSize), _this2.options.touchRadius, _this2.getBoundAngle(i, false), _this2.getBoundAngle(i, true)),
          position: position,
          on: {
            'drag:move': function dragMove() {
              return _this2.draw();
            }
          }
        });
      });
      this.isInit = true;
      this.draw();
    }
  }, {
    key: "updateAngles",
    value: function updateAngles() {
      var _this3 = this;

      this.angles = this.draggables.map(function (draggable) {
        var halfSize = draggable.getSize().mult(0.5);
        return getAngle(_this3.options.center.sub(halfSize), draggable.position);
      });
    }
  }, {
    key: "getBoundAngle",
    value: function getBoundAngle(index, isClossing) {
      var _this4 = this;

      var sign = isClossing ? 1 : -1;
      return function () {
        var i = (index + sign) % _this4.angles.length;

        if (i < 0) {
          i += _this4.angles.length;
        }

        return normalizeAngle(_this4.angles[i] - sign * _this4.options.boundAngle);
      };
    }
  }, {
    key: "draw",
    value: function draw() {
      var _this5 = this;

      if (!this.isInit) {
        return;
      }

      this.updateAngles();
      this.context.clearRect(0, 0, this.areaRectangle.size.x, this.areaRectangle.size.y);
      this.draggables.forEach(function (_draggable, index) {
        _this5.drawArc(_this5.context, _this5.options.center, _this5.options.radius, index);
      });
      this.draggables.forEach(function (_draggable, index) {

        _this5.drawLimitImg(index);
      });
      this.emit('chart:draw');
    }
  }, {
    key: "createClone",
    value: function createClone(element) {
      var _this6 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (!this.isInit) {
        return;
      }

      var rectangle = Rectangle.fromElement(element, element);
      var opts = Object.assign({
        center: rectangle.getCenter(),
        radius: rectangle.getMinSide() / 2,
        fillStyles: this.options.fillStyles
      }, options);
      var canvas = createCanvas(element, rectangle);
      var context = canvas.getContext('2d');
      var cloneObj = {
        draw: function draw() {
          context.clearRect(0, 0, rectangle.size.x, rectangle.size.y);

          _this6.draggables.forEach(function (_draggable, index) {
            _this6.drawArc(context, opts.center, opts.radius, index);
          });
        }
      };
      cloneObj.draw();
      return cloneObj;
    }
  }, {
    key: "getFillStyle",
    value: function getFillStyle(index) {
      if (typeof this.options.fillStyles[index] === 'function') {
        this.options.fillStyles[index] = this.options.fillStyles[index].call(this);
      }

      return this.options.fillStyles[index];
    }
  }, {
    key: "drawArc",
    value: function drawArc(context, center, radius, index) {
      var startAngle = this.angles[index];
      var endAngle = this.angles[(index + 1) % this.angles.length];
      var color = this.getFillStyle(index);
      context.beginPath();
      context.moveTo(center.x, center.y);
      context.arc(center.x, center.y, radius, startAngle, endAngle, false);
      context.lineTo(center.x, center.y);
      context.closePath();
      context.fillStyle = color;
      context.fill();
    }
  }, {
    key: "drawLimitImg",
    value: function drawLimitImg(index) {
      var point, img;

      if (this.options.limitImg) {
        img = this.options.limitImg instanceof Array ? this.options.limitImg[index] : this.options.limitImg;
      }

      if (img) {
        var angle = normalizeAngle(this.angles[index]);
        point = new Point(0, -img.height / 2);
        point = point.add(this.options.limitImgOffset);
        this.context.translate(this.areaRectangle.size.x / 2, this.areaRectangle.size.y / 2);
        this.context.rotate(angle);
        this.context.drawImage(img, point.x, point.y);
        this.context.setTransform(1, 0, 0, 1, 0, 0);
      }
    }
  }, {
    key: "getAnglesDiff",
    value: function getAnglesDiff() {
      var angles = this.angles.slice(1);
      var baseAngle = this.angles[0];
      angles.push(baseAngle);
      return angles.map(function (angle) {
        var diffAngle = normalizeAngle(angle - baseAngle);
        baseAngle = angle;
        return diffAngle;
      });
    }
  }, {
    key: "getPercent",
    value: function getPercent() {
      return this.getAnglesDiff().map(function (diffAngle) {
        return diffAngle / (2 * Math.PI);
      });
    }
  }, {
    key: "getArcBisectrixs",
    value: function getArcBisectrixs() {
      var _this7 = this;

      return this.getAnglesDiff().map(function (diffAngle, i) {
        return normalizeAngle(_this7.angles[i] + diffAngle / 2);
      });
    }
  }, {
    key: "getArcOnPoint",
    value: function getArcOnPoint(point) {
      var angle = getAngle(this.options.center, point);
      var radius = getDistance(this.options.center, point);

      if (radius > this.options.radius) {
        return -1;
      }

      var offset = -1,
          i,
          j;

      for (i = 0; i < this.angles.length; i++) {
        if (offset === -1 || this.angles[offset] > this.angles[i]) {
          offset = i;
        }
      }

      for (i = 0, j = offset; i < this.angles.length; i++, j = (i + offset) % this.angles.length) {
        if (angle < this.angles[j]) {
          break;
        }
      }

      if (--j < 0) {
        j += this.angles.length;
      }

      return j;
    }
  }, {
    key: "setAngles",
    value: function setAngles(angles) {
      var _this8 = this;

      this.angles = angles;
      this.draggables.forEach(function (draggable, i) {
        var angle = _this8.angles[i];
        var halfSize = draggable.getSize().mult(0.5);
        var position = getPointFromRadialSystem(angle, _this8.options.touchRadius, _this8.options.center.sub(halfSize));
        draggable.moveAndSave(position);
      });
      this.draw();
    }
  }, {
    key: "setActiveArc",
    value: function setActiveArc(index) {
      var enableIndexes = getArrayWithBoundIndexes(index, this.draggables.length);
      this.activeArcIndex = index;
      this.draggables.forEach(function (draggable, i) {
        draggable.enable = enableIndexes.indexOf(i) !== -1;
      });
      this.draw();
    }
  }]);

  return Chart;
}(EventEmitter);

var bound = {
  BoundToRectangle: BoundToRectangle,
  BoundToElement: BoundToElement,
  BoundToLineX: BoundToLineX,
  BoundToLineY: BoundToLineY,
  BoundToLine: BoundToLine,
  BoundToCircle: BoundToCircle,
  BoundToArc: BoundToArc
};
var distance = {
  getDistance: getDistance,
  getXDifference: getXDifference,
  getYDifference: getYDifference,
  transformedSpaceDistanceFactory: transformedSpaceDistanceFactory
};

export { ArcSlider, Chart, Draggable, FloatLeftStrategy, FloatRightStrategy, List, NotCrossingStrategy, Point, Point as Rectangle, Scope, Spider, Target, addClass, bound, defaultScope, distance, removeClass, scope, scopes };