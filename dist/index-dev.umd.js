(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.Dragee = {}));
}(this, (function (exports) { 'use strict';

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

    while (parent.parentNode && window.getComputedStyle(parent)['position'] === 'static' && parent.tagName !== 'BODY') {
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
    } catch (_err) {
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
          var isSafari = /version\/(\d+).+?safari/i.test(window.navigator.userAgent);

          if (isTouchEvent && this.emulateNativeDragAndDropOnTouch || isSafari) {
            this.emulateNativeDragAndDrop(event);
          } else {
            this.element.draggable = true;
            document.addEventListener(mouseEvents.end, this._nativeDragEnd, isSupportPassiveEvents ? {
              passive: false
            } : false);
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
        document.removeEventListener(mouseEvents.end, this._nativeDragEnd);
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
        this.element.removeAttribute('draggable');
        removeClass(this.element, 'dragee-active');
      }
    }, {
      key: "nativeDragStart",
      value: function nativeDragStart(event) {
        event.dataTransfer.setData('text', 'FireFox fix');
        document.addEventListener('dragover', this._nativeDragMove);
        document.addEventListener('dragend', this._nativeDragEnd);
      }
    }, {
      key: "nativeDragMove",
      value: function nativeDragMove(event) {
        event.preventDefault();
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
        document.removeEventListener(mouseEvents.end, this._nativeDragEnd);
        this.isDragging = false;
        this.element.removeAttribute('draggable');
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
          parent: document.body,
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

  exports.ArcSlider = ArcSlider;
  exports.Chart = Chart;
  exports.Draggable = Draggable;
  exports.FloatLeftStrategy = FloatLeftStrategy;
  exports.FloatRightStrategy = FloatRightStrategy;
  exports.List = List;
  exports.NotCrossingStrategy = NotCrossingStrategy;
  exports.Point = Point;
  exports.Rectangle = Point;
  exports.Scope = Scope;
  exports.Spider = Spider;
  exports.Target = Target;
  exports.addClass = addClass;
  exports.bound = bound;
  exports.defaultScope = defaultScope;
  exports.distance = distance;
  exports.removeClass = removeClass;
  exports.scope = scope;
  exports.scopes = scopes;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgtZGV2LnVtZC5qcyIsInNvdXJjZXMiOlsiLi4vc3JjL2dlb21ldHJ5L3BvaW50LmpzIiwiLi4vc3JjL3V0aWxzL2NsYXNzZXMuanMiLCIuLi9zcmMvdXRpbHMvZ2V0LWRlZmF1bHQtcGFyZW50LmpzIiwiLi4vc3JjL2V2ZW50RW1pdHRlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9kZXNhbmRyby1nZXQtc3R5bGUtcHJvcGVydHkvZ2V0LXN0eWxlLXByb3BlcnR5LmpzIiwiLi4vc3JjL2dlb21ldHJ5L3JlY3RhbmdsZS5qcyIsIi4uL3NyYy9nZW9tZXRyeS9kaXN0YW5jZXMuanMiLCIuLi9zcmMvZ2VvbWV0cnkvYm91bmRzLmpzIiwiLi4vc3JjL2dlb21ldHJ5L2FuZ2xlcy5qcyIsIi4uL3NyYy9ib3VuZGluZy5qcyIsIi4uL3NyYy91dGlscy9yZW1vdmUtYXJyYXktaXRlbS5qcyIsIi4uL3NyYy91dGlscy9yYW5nZS5qcyIsIi4uL3NyYy9wb3NpdGlvbmluZy5qcyIsIi4uL3NyYy90YXJnZXQuanMiLCIuLi9zcmMvc2NvcGUuanMiLCIuLi9zcmMvdXRpbHMvaXMtc3VwcG9ydC1wYXNzaXZlLWV2ZW50cy5qcyIsIi4uL3NyYy9kcmFnZ2FibGUuanMiLCIuLi9zcmMvbGlzdC5qcyIsIi4uL3NyYy91dGlscy9jcmVhdGUtY2FudmFzLmpzIiwiLi4vc3JjL3NwaWRlci5qcyIsIi4uL3NyYy9hcmNzbGlkZXIuanMiLCIuLi9zcmMvY2hhcnQuanMiLCIuLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gZ2V0U3VtVmFsdWVPZlN0eWxlUnVsZXMoZWxlbWVudCwgcnVsZXMpIHtcbiAgcmV0dXJuIHJ1bGVzLnJlZHVjZSgoc3VtLCBydWxlKSA9PiB7XG4gICAgcmV0dXJuIHN1bSArIHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpW3J1bGVdfHwwKVxuICB9LCAwKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2ludCB7XG4gIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICB0aGlzLnggPSB4XG4gICAgdGhpcy55ID0geVxuICB9XG5cbiAgYWRkKHApIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCArIHAueCwgdGhpcy55ICsgcC55KVxuICB9XG5cbiAgc3ViKHApIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCAtIHAueCwgdGhpcy55IC0gcC55KVxuICB9XG5cbiAgbXVsdChrKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnggKiBrLCB0aGlzLnkgKiBrKVxuICB9XG5cbiAgbmVnYXRpdmUoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCgtdGhpcy54LCAtdGhpcy55KVxuICB9XG5cbiAgY29tcGFyZShwKSB7XG4gICAgcmV0dXJuICh0aGlzLnggPT09IHAueCAmJiB0aGlzLnkgPT09IHAueSlcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54LCB0aGlzLnkpXG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gYHt4PSR7dGhpcy54fSx5PSR7dGhpcy55fWBcbiAgfVxuXG4gIHN0YXRpYyBlbGVtZW50T2Zmc2V0KGVsZW1lbnQsIHBhcmVudCkge1xuICAgIHBhcmVudCA9IHBhcmVudCB8fCBlbGVtZW50LnBhcmVudE5vZGVcbiAgICBjb25zdCBlbGVtZW50UmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICBjb25zdCBwYXJlbnRSZWN0ID0gcGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgcmV0dXJuIG5ldyBQb2ludChcbiAgICAgIGVsZW1lbnRSZWN0LmxlZnQgLSBwYXJlbnRSZWN0LmxlZnQsXG4gICAgICBlbGVtZW50UmVjdC50b3AgLSBwYXJlbnRSZWN0LnRvcFxuICAgIClcbiAgfVxuXG4gIHN0YXRpYyBlbGVtZW50U2l6ZShlbGVtZW50LCBpc0NvbnRlbnRCb3hTaXplPWZhbHNlKSB7XG4gICAgbGV0IHdpZHRoID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudClbJ3dpZHRoJ10pXG4gICAgbGV0IGhlaWdodCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpWydoZWlnaHQnXSlcbiAgICBpZiAoIWlzQ29udGVudEJveFNpemUpIHtcbiAgICAgIHdpZHRoICs9IGdldFN1bVZhbHVlT2ZTdHlsZVJ1bGVzKGVsZW1lbnQsIFsncGFkZGluZy1sZWZ0JywgJ3BhZGRpbmctcmlnaHQnLCAnYm9yZGVyLWxlZnQtd2lkdGgnLCAnYm9yZGVyLXJpZ2h0LXdpZHRoJ10pXG4gICAgICBoZWlnaHQgKz0gZ2V0U3VtVmFsdWVPZlN0eWxlUnVsZXMoZWxlbWVudCwgWydwYWRkaW5nLXRvcCcsICdwYWRkaW5nLWJvdHRvbScsICdib3JkZXItdG9wLXdpZHRoJywgJ2JvcmRlci1ib3R0b20td2lkdGgnXSlcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBQb2ludCh3aWR0aCwgaGVpZ2h0KVxuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gaGFzQ2xhc3MoZWxlbWVudCwgYykge1xuICBjb25zdCByZSA9IG5ldyBSZWdFeHAoJyhefFxcXFxzKScgKyBjICsgJyhcXFxcc3wkKScsICdnJylcbiAgcmV0dXJuIChyZS50ZXN0KGVsZW1lbnQuY2xhc3NOYW1lKSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZENsYXNzKGVsZW1lbnQsIGMpIHtcbiAgaWYgKCFoYXNDbGFzcyhlbGVtZW50LCBjKSkge1xuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gKGVsZW1lbnQuY2xhc3NOYW1lICsgJyAnICsgYykucmVwbGFjZSgvXFxzKy9nLCAnICcpLnJlcGxhY2UoLyheIHwgJCkvZywgJycpXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNsYXNzKGVsZW1lbnQsIGMpIHtcbiAgY29uc3QgcmUgPSBuZXcgUmVnRXhwKCcoXnxcXFxccyknICsgYyArICcoXFxcXHN8JCknLCAnZycpXG4gIGVsZW1lbnQuY2xhc3NOYW1lID0gZWxlbWVudC5jbGFzc05hbWUucmVwbGFjZShyZSwgJyQxJykucmVwbGFjZSgvXFxzKy9nLCAnICcpLnJlcGxhY2UoLyheIHwgJCkvZywgJycpXG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXREZWZhdWx0UGFyZW50KGVsZW1lbnQpIHtcbiAgbGV0IHBhcmVudCA9IGVsZW1lbnQucGFyZW50Tm9kZVxuICB3aGlsZSAocGFyZW50LnBhcmVudE5vZGUgJiYgd2luZG93LmdldENvbXB1dGVkU3R5bGUocGFyZW50KVsncG9zaXRpb24nXSA9PT0gJ3N0YXRpYycgJiYgcGFyZW50LnRhZ05hbWUgIT09ICdCT0RZJykge1xuICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlXG4gIH1cbiAgcmV0dXJuIHBhcmVudFxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKGNvbnRleHQsIG9wdGlvbnMgPSB7fSkge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQgfHwgdGhpc1xuICAgIHRoaXMuZXZlbnRzID0ge31cblxuICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMub24pIHtcbiAgICAgIGZvciAoY29uc3QgW2V2ZW50TmFtZSwgZm5dIG9mIE9iamVjdC5lbnRyaWVzKG9wdGlvbnMub24pKSB7XG4gICAgICAgIHRoaXMub24oZXZlbnROYW1lLCBmbilcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBlbWl0KGV2ZW50TmFtZSkge1xuICAgIHRoaXMuaW50ZXJydXB0ZWQgPSBmYWxzZVxuICAgIGNvbnN0IGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSlcblxuICAgIGlmICghdGhpcy5ldmVudHNbZXZlbnROYW1lXSkgcmV0dXJuXG5cbiAgICBmb3IgKGNvbnN0IGZ1bmMgb2YgdGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgZnVuYy5hcHBseSh0aGlzLmNvbnRleHQsIGFyZ3MpXG4gICAgICBpZiAodGhpcy5pbnRlcnJ1cHRlZCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpbnRlcnJ1cHQoKSB7XG4gICAgdGhpcy5pbnRlcnJ1cHRlZCA9IHRydWVcbiAgfVxuXG4gIG9uKGV2ZW50TmFtZSwgZm4pIHtcbiAgICBpZiAoIXRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSBbXVxuICAgIH1cblxuICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0ucHVzaChmbilcbiAgfVxuXG4gIHByZXBlbmRPbihldmVudE5hbWUsIGZuKSB7XG4gICAgaWYgKCF0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdID0gW11cbiAgICB9XG5cbiAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLnVuc2hpZnQoZm4pXG4gIH1cblxuICB1bnN1YnNjcmliZShldmVudE5hbWUsIGZuKSB7XG4gICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5ldmVudHNbZXZlbnROYW1lXS5pbmRleE9mKGZuKVxuICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5zcGxpY2UoaW5kZXgsIDEpXG4gICAgfVxuICB9XG5cbiAgcmVzZXRFbWl0dGVyICgpIHtcbiAgICB0aGlzLmV2ZW50cyA9IHt9XG4gIH1cblxuICByZXNldE9uKGV2ZW50TmFtZSkge1xuICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSBbXVxuICB9XG59XG4iLCIvKiFcbiAqIGdldFN0eWxlUHJvcGVydHkgdjEuMC40XG4gKiBvcmlnaW5hbCBieSBrYW5nYXhcbiAqIGh0dHA6Ly9wZXJmZWN0aW9ua2lsbHMuY29tL2ZlYXR1cmUtdGVzdGluZy1jc3MtcHJvcGVydGllcy9cbiAqIE1JVCBsaWNlbnNlXG4gKi9cblxuLypqc2hpbnQgYnJvd3NlcjogdHJ1ZSwgc3RyaWN0OiB0cnVlLCB1bmRlZjogdHJ1ZSAqL1xuLypnbG9iYWwgZGVmaW5lOiBmYWxzZSwgZXhwb3J0czogZmFsc2UsIG1vZHVsZTogZmFsc2UgKi9cblxuKCBmdW5jdGlvbiggd2luZG93ICkge1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBwcmVmaXhlcyA9ICdXZWJraXQgTW96IG1zIE1zIE8nLnNwbGl0KCcgJyk7XG52YXIgZG9jRWxlbVN0eWxlID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlO1xuXG5mdW5jdGlvbiBnZXRTdHlsZVByb3BlcnR5KCBwcm9wTmFtZSApIHtcbiAgaWYgKCAhcHJvcE5hbWUgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gdGVzdCBzdGFuZGFyZCBwcm9wZXJ0eSBmaXJzdFxuICBpZiAoIHR5cGVvZiBkb2NFbGVtU3R5bGVbIHByb3BOYW1lIF0gPT09ICdzdHJpbmcnICkge1xuICAgIHJldHVybiBwcm9wTmFtZTtcbiAgfVxuXG4gIC8vIGNhcGl0YWxpemVcbiAgcHJvcE5hbWUgPSBwcm9wTmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHByb3BOYW1lLnNsaWNlKDEpO1xuXG4gIC8vIHRlc3QgdmVuZG9yIHNwZWNpZmljIHByb3BlcnRpZXNcbiAgdmFyIHByZWZpeGVkO1xuICBmb3IgKCB2YXIgaT0wLCBsZW4gPSBwcmVmaXhlcy5sZW5ndGg7IGkgPCBsZW47IGkrKyApIHtcbiAgICBwcmVmaXhlZCA9IHByZWZpeGVzW2ldICsgcHJvcE5hbWU7XG4gICAgaWYgKCB0eXBlb2YgZG9jRWxlbVN0eWxlWyBwcmVmaXhlZCBdID09PSAnc3RyaW5nJyApIHtcbiAgICAgIHJldHVybiBwcmVmaXhlZDtcbiAgICB9XG4gIH1cbn1cblxuLy8gdHJhbnNwb3J0XG5pZiAoIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcbiAgLy8gQU1EXG4gIGRlZmluZSggZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGdldFN0eWxlUHJvcGVydHk7XG4gIH0pO1xufSBlbHNlIGlmICggdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICkge1xuICAvLyBDb21tb25KUyBmb3IgQ29tcG9uZW50XG4gIG1vZHVsZS5leHBvcnRzID0gZ2V0U3R5bGVQcm9wZXJ0eTtcbn0gZWxzZSB7XG4gIC8vIGJyb3dzZXIgZ2xvYmFsXG4gIHdpbmRvdy5nZXRTdHlsZVByb3BlcnR5ID0gZ2V0U3R5bGVQcm9wZXJ0eTtcbn1cblxufSkoIHdpbmRvdyApO1xuIiwiaW1wb3J0IFBvaW50IGZyb20gJy4vcG9pbnQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY3RhbmdsZSB7XG4gIGNvbnN0cnVjdG9yKHBvc2l0aW9uLCBzaXplKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgdGhpcy5zaXplID0gc2l6ZVxuICB9XG5cbiAgZ2V0UDEoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25cbiAgfVxuXG4gIGdldFAyKCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHRoaXMucG9zaXRpb24ueSlcbiAgfVxuXG4gIGdldFAzKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLnNpemUpXG4gIH1cblxuICBnZXRQNCgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnkpXG4gIH1cblxuICBnZXRDZW50ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb24uYWRkKHRoaXMuc2l6ZS5tdWx0KDAuNSkpXG4gIH1cblxuICBvcihyZWN0KSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBuZXcgUG9pbnQoTWF0aC5taW4odGhpcy5wb3NpdGlvbi54LCByZWN0LnBvc2l0aW9uLngpLCBNYXRoLm1pbih0aGlzLnBvc2l0aW9uLnksIHJlY3QucG9zaXRpb24ueSkpXG4gICAgY29uc3Qgc2l6ZSA9IChuZXcgUG9pbnQoTWF0aC5tYXgodGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHJlY3QucG9zaXRpb24ueCArIHJlY3Quc2l6ZS54KSwgTWF0aC5tYXgodGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnksIHJlY3QucG9zaXRpb24ueSArIHJlY3Quc2l6ZS55KSkpLnN1Yihwb3NpdGlvbilcbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZShwb3NpdGlvbiwgc2l6ZSlcbiAgfVxuXG4gIGFuZChyZWN0KSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBuZXcgUG9pbnQoTWF0aC5tYXgodGhpcy5wb3NpdGlvbi54LCByZWN0LnBvc2l0aW9uLngpLCBNYXRoLm1heCh0aGlzLnBvc2l0aW9uLnksIHJlY3QucG9zaXRpb24ueSkpXG4gICAgY29uc3Qgc2l6ZSA9IChuZXcgUG9pbnQoTWF0aC5taW4odGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHJlY3QucG9zaXRpb24ueCArIHJlY3Quc2l6ZS54KSwgTWF0aC5taW4odGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnksIHJlY3QucG9zaXRpb24ueSArIHJlY3Quc2l6ZS55KSkpLnN1Yihwb3NpdGlvbilcbiAgICBpZiAoc2l6ZS54IDw9IDAgfHwgc2l6ZS55IDw9IDApIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHBvc2l0aW9uLCBzaXplKVxuICB9XG5cbiAgaW5jbHVkZVBvaW50KHApIHtcbiAgICByZXR1cm4gISh0aGlzLnBvc2l0aW9uLnggPiBwLnggfHwgdGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLnggPCBwLnggfHwgdGhpcy5wb3NpdGlvbi55ID4gcC55IHx8IHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55IDwgcC55KVxuICB9XG5cbiAgaW5jbHVkZVJlY3RhbmdsZShyZWN0YW5nbGUpIHtcbiAgICByZXR1cm4gdGhpcy5pbmNsdWRlUG9pbnQocmVjdGFuZ2xlLnBvc2l0aW9uKSAmJiB0aGlzLmluY2x1ZGVQb2ludChyZWN0YW5nbGUuZ2V0UDMoKSlcbiAgfVxuXG4gIG1vdmVUb0JvdW5kKHJlY3QsIGF4aXMpIHtcbiAgICBsZXQgc2VsQXhpcywgY3Jvc3NSZWN0YW5nbGVcbiAgICBpZiAoYXhpcykge1xuICAgICAgc2VsQXhpcyA9IGF4aXNcbiAgICB9IGVsc2Uge1xuICAgICAgY3Jvc3NSZWN0YW5nbGUgPSB0aGlzLmFuZChyZWN0KVxuICAgICAgaWYgKCFjcm9zc1JlY3RhbmdsZSkge1xuICAgICAgICByZXR1cm4gcmVjdFxuICAgICAgfVxuICAgICAgc2VsQXhpcyA9IGNyb3NzUmVjdGFuZ2xlLnNpemUueCA+IGNyb3NzUmVjdGFuZ2xlLnNpemUueSA/ICd5JyA6ICd4J1xuICAgIH1cbiAgICBjb25zdCB0aGlzQ2VudGVyID0gdGhpcy5nZXRDZW50ZXIoKVxuICAgIGNvbnN0IHJlY3RDZW50ZXIgPSByZWN0LmdldENlbnRlcigpXG4gICAgY29uc3Qgc2lnbiA9IHRoaXNDZW50ZXJbc2VsQXhpc10gPiByZWN0Q2VudGVyW3NlbEF4aXNdID8gLTEgOiAxXG4gICAgY29uc3Qgb2Zmc2V0ID0gc2lnbiA+IDAgPyB0aGlzLnBvc2l0aW9uW3NlbEF4aXNdICsgdGhpcy5zaXplW3NlbEF4aXNdIC0gcmVjdC5wb3NpdGlvbltzZWxBeGlzXSA6IHRoaXMucG9zaXRpb25bc2VsQXhpc10gLSAocmVjdC5wb3NpdGlvbltzZWxBeGlzXSArIHJlY3Quc2l6ZVtzZWxBeGlzXSlcbiAgICByZWN0LnBvc2l0aW9uW3NlbEF4aXNdID0gcmVjdC5wb3NpdGlvbltzZWxBeGlzXSArIG9mZnNldFxuICAgIHJldHVybiByZWN0XG4gIH1cblxuICBnZXRTcXVhcmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZS54ICogdGhpcy5zaXplLnlcbiAgfVxuXG4gIHN0eWxlQXBwbHkoZWwpIHtcbiAgICBlbCA9IGVsIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2luZCcpXG4gICAgZWwuc3R5bGUubGVmdCA9IHRoaXMucG9zaXRpb24ueCArICdweCdcbiAgICBlbC5zdHlsZS50b3AgPSB0aGlzLnBvc2l0aW9uLnkgKyAncHgnXG4gICAgZWwuc3R5bGUud2lkdGggPSB0aGlzLnNpemUueCArICdweCdcbiAgICBlbC5zdHlsZS5oZWlnaHQgPSB0aGlzLnNpemUueSArICdweCdcbiAgfVxuXG4gIGdyb3d0aChzaXplKSB7XG4gICAgdGhpcy5zaXplID0gdGhpcy5zaXplLmFkZChzaXplKVxuICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uLmFkZChzaXplLm11bHQoLTAuNSkpXG4gIH1cblxuICBnZXRNaW5TaWRlKCkge1xuICAgIHJldHVybiBNYXRoLm1pbih0aGlzLnNpemUueCwgdGhpcy5zaXplLnkpXG4gIH1cblxuICBzdGF0aWMgZnJvbUVsZW1lbnQoZWxlbWVudCwgcGFyZW50PWVsZW1lbnQucGFyZW50Tm9kZSwgaXNDb250ZW50Qm94U2l6ZT1mYWxzZSwgaXNDb25zaWRlclRyYW5zbGF0ZT1mYWxzZSkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gUG9pbnQuZWxlbWVudE9mZnNldChlbGVtZW50LCBwYXJlbnQsIGlzQ29uc2lkZXJUcmFuc2xhdGUpXG4gICAgY29uc3Qgc2l6ZSA9IFBvaW50LmVsZW1lbnRTaXplKGVsZW1lbnQsIGlzQ29udGVudEJveFNpemUpXG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUocG9zaXRpb24sIHNpemUpXG4gIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBnZXREaXN0YW5jZShwMSwgcDIpIHtcbiAgY29uc3QgZHggPSBwMS54IC0gcDIueCwgZHkgPSBwMS55IC0gcDIueVxuICByZXR1cm4gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0WERpZmZlcmVuY2UocDEsIHAyKSB7XG4gIHJldHVybiBNYXRoLmFicyhwMS54IC0gcDIueClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFlEaWZmZXJlbmNlKHAxLCBwMikge1xuICByZXR1cm4gTWF0aC5hYnMocDEueSAtIHAyLnkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5KG9wdGlvbnMpIHtcbiAgcmV0dXJuIChwMSwgcDIpID0+IHtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KFxuICAgICAgTWF0aC5wb3cob3B0aW9ucy54ICogTWF0aC5hYnMocDEueCAtIHAyLngpLCAyKSArXG4gICAgICBNYXRoLnBvdyhvcHRpb25zLnkgKiBNYXRoLmFicyhwMS55IC0gcDIueSksIDIpXG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmRleE9mTmVhcmVzdFBvaW50KGFyciwgdmFsLCByYWRpdXMsIGdldERpc3RhbmNlRnVuYz1nZXREaXN0YW5jZSkge1xuICBsZXQgc2l6ZSwgaW5kZXggPSAwLCBpLCB0ZW1wXG4gIGlmIChhcnIubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIC0xXG4gIH1cbiAgc2l6ZSA9IGdldERpc3RhbmNlRnVuYyhhcnJbMF0sIHZhbClcbiAgZm9yIChpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgIHRlbXAgPSBnZXREaXN0YW5jZUZ1bmMoYXJyW2ldLCB2YWwpXG4gICAgaWYgKHRlbXAgPCBzaXplKSB7XG4gICAgICBzaXplID0gdGVtcFxuICAgICAgaW5kZXggPSBpXG4gICAgfVxuICB9XG4gIGlmIChyYWRpdXMgPj0gMCAmJiBzaXplID4gcmFkaXVzKSB7XG4gICAgcmV0dXJuIC0xXG4gIH1cbiAgcmV0dXJuIGluZGV4XG59XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9wb2ludCdcbmltcG9ydCB7IGdldERpc3RhbmNlIH0gZnJvbSAnLi9kaXN0YW5jZXMnXG5cbmV4cG9ydCBmdW5jdGlvbiBjbGFtcChtaW4sIG1heCwgdmFsKSB7XG4gIHJldHVybiBNYXRoLm1heChtaW4sIE1hdGgubWluKG1heCwgdmFsKSlcbn1cblxuLy9SZXR1cm4gY3Jvc3NpbmcgcG9pbnQgb2YgdHdvIGxpbmVzXG5leHBvcnQgZnVuY3Rpb24gZGlyZWN0Q3Jvc3NpbmcoTDFQMSwgTDFQMiwgTDJQMSwgTDJQMikge1xuICBsZXQgdGVtcCwgazEsIGsyLCBiMSwgYjIsIHgsIHlcbiAgaWYgKEwyUDEueCA9PT0gTDJQMi54KSB7XG4gICAgdGVtcCA9IEwyUDFcbiAgICBMMlAxID0gTDFQMVxuICAgIEwxUDEgPSB0ZW1wXG4gICAgdGVtcCA9IEwyUDJcbiAgICBMMlAyID0gTDFQMlxuICAgIEwxUDIgPSB0ZW1wXG4gIH1cbiAgaWYgKEwxUDEueCA9PT0gTDFQMi54KSB7XG4gICAgazIgPSAoTDJQMi55IC0gTDJQMS55KSAvIChMMlAyLnggLSBMMlAxLngpXG4gICAgYjIgPSAoTDJQMi54ICogTDJQMS55IC0gTDJQMS54ICogTDJQMi55KSAvIChMMlAyLnggLSBMMlAxLngpXG4gICAgeCA9IEwxUDEueFxuICAgIHkgPSB4ICogazIgKyBiMlxuICAgIHJldHVybiBuZXcgUG9pbnQoeCwgeSlcbiAgfSBlbHNlIHtcbiAgICBrMSA9IChMMVAyLnkgLSBMMVAxLnkpIC8gKEwxUDIueCAtIEwxUDEueClcbiAgICBiMSA9IChMMVAyLnggKiBMMVAxLnkgLSBMMVAxLnggKiBMMVAyLnkpIC8gKEwxUDIueCAtIEwxUDEueClcbiAgICBrMiA9IChMMlAyLnkgLSBMMlAxLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICBiMiA9IChMMlAyLnggKiBMMlAxLnkgLSBMMlAxLnggKiBMMlAyLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICB4ID0gKGIxIC0gYjIpIC8gKGsyIC0gazEpXG4gICAgeSA9IHggKiBrMSArIGIxXG4gICAgcmV0dXJuIG5ldyBQb2ludCh4LCB5KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZFRvU2VnbWVudChMUDEsIExQMiwgUCkge1xuICBsZXQgeCwgeVxuICB4ID0gY2xhbXAoTWF0aC5taW4oTFAxLngsIExQMi54KSwgTWF0aC5tYXgoTFAxLngsIExQMi54KSwgUC54KVxuICBpZiAoeCAhPT0gUC54KSB7XG4gICAgeSA9ICh4ID09PSBMUDEueCkgPyBMUDEueSA6IExQMi55XG4gICAgUCA9IG5ldyBQb2ludCh4LCB5KVxuICB9XG5cbiAgeSA9IGNsYW1wKE1hdGgubWluKExQMS55LCBMUDIueSksIE1hdGgubWF4KExQMS55LCBMUDIueSksIFAueSlcbiAgaWYgKHkgIT09IFAueSkge1xuICAgIHggPSAoeSA9PT0gTFAxLnkpID8gTFAxLnggOiBMUDIueFxuICAgIFAgPSBuZXcgUG9pbnQoeCwgeSlcbiAgfVxuXG4gIHJldHVybiBQXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZFRvTGluZShBLCBCLCBQKSB7XG4gIGNvbnN0IEFQID0gbmV3IFBvaW50KFAueCAtIEEueCwgUC55IC0gQS55KSxcbiAgICBBQiA9IG5ldyBQb2ludChCLnggLSBBLngsIEIueSAtIEEueSksXG4gICAgYWIyID0gQUIueCAqIEFCLnggKyBBQi55ICogQUIueSxcbiAgICBhcF9hYiA9IEFQLnggKiBBQi54ICsgQVAueSAqIEFCLnksXG4gICAgdCA9IGFwX2FiIC8gYWIyXG4gIHJldHVybiBuZXcgUG9pbnQoQS54ICsgQUIueCAqIHQsIEEueSArIEFCLnkgKiB0KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9pbnRPbkxpbmUoTFAxLCBMUDIsIHBlcmNlbnQpIHtcbiAgY29uc3QgZHggPSBMUDIueCAtIExQMS54LCBkeSA9IExQMi55IC0gTFAxLnlcbiAgcmV0dXJuIG5ldyBQb2ludChMUDEueCArIHBlcmNlbnQgKiBkeCwgTFAxLnkgKyBwZXJjZW50ICogZHkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb2ludE9uTGluZUJ5TGVuZ2h0KExQMSwgTFAyLCBsZW5naHQpIHtcbiAgY29uc3QgZHggPSBMUDIueCAtIExQMS54XG4gIGNvbnN0IGR5ID0gTFAyLnkgLSBMUDEueVxuICBjb25zdCBwZXJjZW50ID0gbGVuZ2h0IC8gZ2V0RGlzdGFuY2UoTFAxLCBMUDIpXG4gIHJldHVybiBuZXcgUG9pbnQoTFAxLnggKyBwZXJjZW50ICogZHgsIExQMS55ICsgcGVyY2VudCAqIGR5KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkUG9pbnRUb0JvdW5kUG9pbnRzKGJvdW5kcG9pbnRzLCBwb2ludCwgaXNSaWdodCkge1xuICBjb25zdCByZXN1bHQgPSBib3VuZHBvaW50cy5maWx0ZXIoKGJQb2ludCkgPT4ge1xuICAgIHJldHVybiBiUG9pbnQueSA+IHBvaW50LnkgfHwgKGlzUmlnaHQgPyBiUG9pbnQueCA8IHBvaW50LnggOiBiUG9pbnQueCA+IHBvaW50LngpXG4gIH0pXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHQubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAocG9pbnQueSA8IHJlc3VsdFtpXS55KSB7XG4gICAgICByZXN1bHQuc3BsaWNlKGksIDAsIHBvaW50KVxuICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbiAgfVxuICByZXN1bHQucHVzaChwb2ludClcbiAgcmV0dXJuIHJlc3VsdFxufVxuIiwiaW1wb3J0IFBvaW50IGZyb20gJy4vcG9pbnQnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbmdsZURpZmYoYWxwaGEsIGJldGEpIHtcbiAgY29uc3QgbWluQW5nbGUgPSBNYXRoLm1pbihhbHBoYSwgYmV0YSlcbiAgY29uc3QgbWF4QW5nbGUgPSAgTWF0aC5tYXgoYWxwaGEsIGJldGEpXG4gIHJldHVybiBNYXRoLm1pbihtYXhBbmdsZSAtIG1pbkFuZ2xlLCBtaW5BbmdsZSArIE1hdGguUEkqMiAtIG1heEFuZ2xlKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QW5nbGUocDEsIHAyKSB7XG4gIGNvbnN0IGRpZmYgPSBwMi5zdWIocDEpXG4gIHJldHVybiBub3JtYWxpemVBbmdsZShNYXRoLmF0YW4yKGRpZmYueSwgZGlmZi54KSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvUmFkaWFuKGFuZ2xlKSB7XG4gIHJldHVybiAoKGFuZ2xlICUgMzYwKSAqIE1hdGguUEkgLyAxODApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0RlZ3JlZShhbmdsZSkge1xuICByZXR1cm4gKGFuZ2xlICogMTgwIC8gTWF0aC5QSSkgJSAzNjBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kQW5nbGUobWluLCBtYXgsIHZhbCkge1xuICBsZXQgZG1pbiwgZG1heFxuICBpZiAobWluIDwgbWF4ICYmIHZhbCA+IG1pbiAmJiB2YWwgPCBtYXgpIHtcbiAgICByZXR1cm4gdmFsXG4gIH0gZWxzZSBpZiAobWF4IDwgbWluICYmICh2YWwgPCBtYXggfHwgdmFsID4gbWluKSkge1xuICAgIHJldHVybiB2YWxcbiAgfSBlbHNlIHtcbiAgICBkbWluID0gZ2V0QW5nbGVEaWZmKG1pbiwgdmFsKVxuICAgIGRtYXggPSBnZXRBbmdsZURpZmYobWF4LCB2YWwpXG4gICAgaWYgKGRtaW4gPCBkbWF4KSB7XG4gICAgICByZXR1cm4gbWluXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBtYXhcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE5lYXJlc3RBbmdsZShhcnIsIGFuZ2xlKSB7XG4gIGxldCBpLCB0ZW1wLCBkaWZmID0gTWF0aC5QSSAqIDIsIHZhbHVlXG4gIGZvciAoaSA9IDA7IGkgPCBhcnIubGVuZ3RoO2krKykge1xuICAgIHRlbXAgPSBnZXRBbmdsZURpZmYoYXJyW2ldLCBhbmdsZSlcbiAgICBpZiAoZGlmZiA8IHRlbXApIHtcbiAgICAgIGRpZmYgPSB0ZW1wXG4gICAgICB2YWx1ZSA9IGFycltpXVxuICAgIH1cbiAgfVxuICByZXR1cm4gdmFsdWVcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZUFuZ2xlKHZhbCkge1xuICB3aGlsZSAodmFsIDwgMCkge1xuICAgIHZhbCArPSAyICogTWF0aC5QSVxuICB9XG4gIHdoaWxlICh2YWwgPiAyICogTWF0aC5QSSkge1xuICAgIHZhbCAtPSAyICogTWF0aC5QSVxuICB9XG4gIHJldHVybiB2YWxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBvaW50RnJvbVJhZGlhbFN5c3RlbShhbmdsZSwgbGVuZ3RoLCBjZW50ZXIpIHtcbiAgY2VudGVyID0gY2VudGVyIHx8IG5ldyBQb2ludCgwLCAwKVxuICByZXR1cm4gY2VudGVyLmFkZChuZXcgUG9pbnQobGVuZ3RoICogTWF0aC5jb3MoYW5nbGUpLCBsZW5ndGggKiBNYXRoLnNpbihhbmdsZSkpKVxufVxuIiwiaW1wb3J0IFBvaW50IGZyb20gJy4vZ2VvbWV0cnkvcG9pbnQnXG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gJy4vZ2VvbWV0cnkvcmVjdGFuZ2xlJ1xuaW1wb3J0IHtcbiAgZ2V0UG9pbnRPbkxpbmVCeUxlbmdodCxcbiAgZGlyZWN0Q3Jvc3NpbmcsXG4gIGJvdW5kVG9MaW5lXG59IGZyb20gJy4vZ2VvbWV0cnkvYm91bmRzJ1xuXG5pbXBvcnQge1xuICBnZXRBbmdsZSxcbiAgbm9ybWFsaXplQW5nbGUsXG4gIGJvdW5kQW5nbGUsXG4gIGdldFBvaW50RnJvbVJhZGlhbFN5c3RlbVxufSBmcm9tICcuL2dlb21ldHJ5L2FuZ2xlcydcblxuZXhwb3J0IGNsYXNzIEJvdW5kIHtcbiAgY29uc3RydWN0b3IgKCkge31cblxuICBib3VuZChwb2ludCwgX3NpemUpIHtcbiAgICByZXR1cm4gcG9pbnRcbiAgfVxuXG4gIHJlZnJlc2ggKCkge31cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9SZWN0YW5nbGUgZXh0ZW5kcyBCb3VuZCB7XG4gIGNvbnN0cnVjdG9yKHJlY3RhbmdsZSkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnJlY3RhbmdsZSA9IHJlY3RhbmdsZVxuICB9XG5cbiAgYm91bmQocG9pbnQsIHNpemUpIHtcbiAgICBjb25zdCBjYWxjUG9pbnQgPSBwb2ludC5jbG9uZSgpXG4gICAgY29uc3QgcmVjdFAyID0gdGhpcy5yZWN0YW5nbGUuZ2V0UDMoKVxuXG4gICAgaWYgKHRoaXMucmVjdGFuZ2xlLnBvc2l0aW9uLnggPiBjYWxjUG9pbnQueCkge1xuICAgICAgKGNhbGNQb2ludC54ID0gdGhpcy5yZWN0YW5nbGUucG9zaXRpb24ueClcbiAgICB9XG4gICAgaWYgKHRoaXMucmVjdGFuZ2xlLnBvc2l0aW9uLnkgPiBjYWxjUG9pbnQueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSB0aGlzLnJlY3RhbmdsZS5wb3NpdGlvbi55XG4gICAgfVxuICAgIGlmIChyZWN0UDIueCA8IGNhbGNQb2ludC54ICsgc2l6ZS54KSB7XG4gICAgICBjYWxjUG9pbnQueCA9IHJlY3RQMi54IC0gc2l6ZS54XG4gICAgfVxuICAgIGlmIChyZWN0UDIueSA8IGNhbGNQb2ludC55ICsgc2l6ZS55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHJlY3RQMi55IC0gc2l6ZS55XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhbGNQb2ludFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvRWxlbWVudCBleHRlbmRzIEJvdW5kVG9SZWN0YW5nbGUge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBwYXJlbnQpIHtcbiAgICBzdXBlcihSZWN0YW5nbGUuZnJvbUVsZW1lbnQoZWxlbWVudCwgcGFyZW50KSlcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnRcbiAgfVxuXG4gIHJlZnJlc2ggKCkge1xuICAgIHRoaXMucmVjdGFuZ2xlID0gUmVjdGFuZ2xlLmZyb21FbGVtZW50KHRoaXMuZWxlbWVudCwgdGhpcy5wYXJlbnQpXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9MaW5lWCBleHRlbmRzIEJvdW5kIHtcbiAgY29uc3RydWN0b3IoeCwgc3RhcnRZLCBlbmRZKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMueCA9IHhcbiAgICB0aGlzLnN0YXJ0WSA9IHN0YXJ0WVxuICAgIHRoaXMuZW5kWSA9IGVuZFlcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgY2FsY1BvaW50ID0gcG9pbnQuY2xvbmUoKVxuXG4gICAgY2FsY1BvaW50LnggPSB0aGlzLnhcbiAgICBpZiAodGhpcy5zdGFydFkgPiBjYWxjUG9pbnQueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSB0aGlzLnN0YXJ0WVxuICAgIH1cbiAgICBpZiAodGhpcy5lbmRZIDwgY2FsY1BvaW50LnkgKyBzaXplLnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gdGhpcy5lbmRZIC0gc2l6ZS55XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhbGNQb2ludFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvTGluZVkgZXh0ZW5kcyBCb3VuZCB7XG4gIGNvbnN0cnVjdG9yKHksIHN0YXJ0WCwgZW5kWCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnkgPSB5XG4gICAgdGhpcy5zdGFydFggPSBzdGFydFhcbiAgICB0aGlzLmVuZFggPSBlbmRYXG4gIH1cblxuICBib3VuZChwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IGNhbGNQb2ludCA9IHBvaW50LmNsb25lKClcbiAgICBjYWxjUG9pbnQueSA9IHRoaXMueVxuICAgIGlmICh0aGlzLnN0YXJ0WCA+IGNhbGNQb2ludC54KSB7XG4gICAgICBjYWxjUG9pbnQueCA9IHRoaXMuc3RhcnRYXG4gICAgfVxuICAgIGlmICh0aGlzLmVuZFggPCBjYWxjUG9pbnQueCArIHNpemUueCkge1xuICAgICAgY2FsY1BvaW50LnggPSB0aGlzLmVuZFggLSBzaXplLnhcbiAgICB9XG4gICAgcmV0dXJuIGNhbGNQb2ludFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvTGluZSBleHRlbmRzIEJvdW5kIHtcbiAgY29uc3RydWN0b3Ioc3RhcnRQb2ludCwgZW5kUG9pbnQpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5zdGFydFBvaW50ID0gc3RhcnRQb2ludFxuICAgIHRoaXMuZW5kUG9pbnQgPSBlbmRQb2ludFxuICAgIGNvbnN0IGFscGhhID0gTWF0aC5hdGFuMihlbmRQb2ludC55IC0gc3RhcnRQb2ludC55LCBlbmRQb2ludC54IC0gc3RhcnRQb2ludC54KVxuICAgIGNvbnN0IGJldGEgPSBhbHBoYSArIE1hdGguUEkgLyAyXG4gICAgdGhpcy5zb21lSyA9IDEwXG4gICAgdGhpcy5jb3NCZXRhID0gTWF0aC5jb3MoYmV0YSlcbiAgICB0aGlzLnNpbkJldGEgPSBNYXRoLnNpbihiZXRhKVxuICB9XG5cbiAgYm91bmQocG9pbnQsIHNpemUpIHtcbiAgICBjb25zdCBwb2ludDIgPSBuZXcgUG9pbnQoXG4gICAgICBwb2ludC54ICsgdGhpcy5zb21lSyAqIHRoaXMuY29zQmV0YSxcbiAgICAgIHBvaW50LnkgKyB0aGlzLnNvbWVLICogdGhpcy5zaW5CZXRhXG4gICAgKVxuXG4gICAgY29uc3QgbmV3RW5kUG9pbnQgPSBnZXRQb2ludE9uTGluZUJ5TGVuZ2h0KHRoaXMuZW5kUG9pbnQsIHRoaXMuc3RhcnRQb2ludCwgc2l6ZS54KVxuICAgIGNvbnN0IHBvaW50Q3Jvc3NpbmcgPSBkaXJlY3RDcm9zc2luZyh0aGlzLnN0YXJ0UG9pbnQsIHRoaXMuZW5kUG9pbnQsIHBvaW50LCBwb2ludDIpXG5cbiAgICByZXR1cm4gYm91bmRUb0xpbmUodGhpcy5zdGFydFBvaW50LCBuZXdFbmRQb2ludCwgcG9pbnRDcm9zc2luZylcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb0NpcmNsZSBleHRlbmRzIEJvdW5kIHtcbiAgY29uc3RydWN0b3IoY2VudGVyLCByYWRpdXMpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5jZW50ZXIgPSBjZW50ZXJcbiAgICB0aGlzLnJhZGl1cyA9IHJhZGl1c1xuICB9XG5cbiAgYm91bmQocG9pbnQsIF9zaXplKSB7XG4gICAgcmV0dXJuIGdldFBvaW50T25MaW5lQnlMZW5naHQodGhpcy5jZW50ZXIsIHBvaW50LCB0aGlzLnJhZGl1cylcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb0FyYyBleHRlbmRzIEJvdW5kVG9DaXJjbGUge1xuICBjb25zdHJ1Y3RvcihjZW50ZXIsIHJhZGl1cywgc3RhcnRBbmdsZSwgZW5kQW5nbGUpIHtcbiAgICBzdXBlcihjZW50ZXIsIHJhZGl1cylcbiAgICB0aGlzLl9zdGFydEFuZ2xlID0gc3RhcnRBbmdsZVxuICAgIHRoaXMuX2VuZEFuZ2xlID0gZW5kQW5nbGVcbiAgfVxuXG4gIHN0YXJ0QW5nbGUoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGlzLl9zdGFydEFuZ2xlID09PSAnZnVuY3Rpb24nID8gdGhpcy5fc3RhcnRBbmdsZSgpIDogdGhpcy5fc3RhcnRBbmdsZVxuICB9XG5cbiAgZW5kQW5nbGUoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGlzLl9lbmRBbmdsZSA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMuX2VuZEFuZ2xlKCkgOiB0aGlzLl9lbmRBbmdsZVxuICB9XG5cbiAgYm91bmQocG9pbnQsIF9zaXplKSB7XG4gICAgbGV0IGFuZ2xlID0gZ2V0QW5nbGUodGhpcy5jZW50ZXIsIHBvaW50KVxuICAgIGFuZ2xlID0gbm9ybWFsaXplQW5nbGUoYW5nbGUpXG4gICAgYW5nbGUgPSBib3VuZEFuZ2xlKHRoaXMuc3RhcnRBbmdsZSgpLCB0aGlzLmVuZEFuZ2xlKCksIGFuZ2xlKVxuICAgIHJldHVybiBnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oYW5nbGUsIHRoaXMucmFkaXVzLCB0aGlzLmNlbnRlcilcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oYXJyYXksIHZhbCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGFycmF5W2ldID09PSB2YWwpIHtcbiAgICAgIGFycmF5LnNwbGljZShpLCAxKVxuICAgICAgaS0tXG4gICAgfVxuICB9XG4gIHJldHVybiBhcnJheVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmFuZ2Uoc3RhcnQsIHN0b3AsIHN0ZXApIHtcbiAgY29uc3QgcmVzdWx0ID0gW11cbiAgaWYgKHR5cGVvZiBzdG9wID09PSAndW5kZWZpbmVkJykge1xuICAgIHN0b3AgPSBzdGFydFxuICAgIHN0YXJ0ID0gMFxuICB9XG4gIGlmICh0eXBlb2Ygc3RlcCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBzdGVwID0gMVxuICB9XG4gIGlmICgoc3RlcCA+IDAgJiYgc3RhcnQgPj0gc3RvcCkgfHwgKHN0ZXAgPCAwICYmIHN0YXJ0IDw9IHN0b3ApKSB7XG4gICAgcmV0dXJuIFtdXG4gIH1cbiAgZm9yIChsZXQgaSA9IHN0YXJ0OyBzdGVwID4gMCA/IGkgPCBzdG9wIDogaSA+IHN0b3A7IGkgKz0gc3RlcCkge1xuICAgIHJlc3VsdC5wdXNoKGkpXG4gIH1cbiAgcmV0dXJuIHJlc3VsdFxufVxuIiwiaW1wb3J0IFBvaW50IGZyb20gJy4vZ2VvbWV0cnkvcG9pbnQnXG5pbXBvcnQgeyBhZGRQb2ludFRvQm91bmRQb2ludHMgfSBmcm9tICcuL2dlb21ldHJ5L2JvdW5kcydcblxuaW1wb3J0IHtcbiAgaW5kZXhPZk5lYXJlc3RQb2ludCxcbiAgZ2V0RGlzdGFuY2Vcbn0gZnJvbSAnLi9nZW9tZXRyeS9kaXN0YW5jZXMnXG5cbmNsYXNzIEJhc2ljU3RyYXRlZ3kge1xuICBjb25zdHJ1Y3RvcihyZWN0YW5nbGUsIG9wdGlvbnM9e30pIHtcbiAgICB0aGlzLnJlY3RhbmdsZSA9IHJlY3RhbmdsZVxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNcbiAgfVxuXG4gIGdldCBib3VuZFJlY3QgKCkge1xuICAgIHJldHVybiB0eXBlb2YgdGhpcy5yZWN0YW5nbGUgPT09ICdmdW5jdGlvbicgPyB0aGlzLnJlY3RhbmdsZSgpIDogdGhpcy5yZWN0YW5nbGVcbiAgfVxufVxuXG5jbGFzcyBOb3RDcm9zc2luZ1N0cmF0ZWd5IGV4dGVuZHMgQmFzaWNTdHJhdGVneSB7XG4gIHBvc2l0aW9uaW5nIChyZWN0YW5nbGVMaXN0LCBpbmRleGVzT2ZOZXdzKSB7XG4gICAgY29uc3Qgc3RhdGljUmVjdGFuZ2xlSW5kZXhlcyA9IHJlY3RhbmdsZUxpc3QucmVkdWNlKChpbmRleGVzLCBfcmVjdCwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChpbmRleGVzT2ZOZXdzLmluZGV4T2YoaW5kZXgpID09PSAtMSkge1xuICAgICAgICBpbmRleGVzLnB1c2goaW5kZXgpXG4gICAgICB9XG4gICAgICByZXR1cm4gaW5kZXhlc1xuICAgIH0sIFtdKVxuXG4gICAgaW5kZXhlc09mTmV3cy5mb3JFYWNoKChpbmRleCkgPT4ge1xuICAgICAgbGV0IHJlY3QgPSByZWN0YW5nbGVMaXN0W2luZGV4XVxuICAgICAgbGV0IHJlbW92YWJsZSA9IGZhbHNlXG5cbiAgICAgIHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMuZm9yRWFjaCgoaW5kZXhPZlN0YXRpYykgPT4ge1xuICAgICAgICBjb25zdCBzdGF0aWNSZWN0ID0gcmVjdGFuZ2xlTGlzdFtpbmRleE9mU3RhdGljXVxuICAgICAgICByZWN0ID0gc3RhdGljUmVjdC5tb3ZlVG9Cb3VuZChyZWN0KVxuICAgICAgfSlcblxuICAgICAgcmVtb3ZhYmxlID0gc3RhdGljUmVjdGFuZ2xlSW5kZXhlcy5zb21lKChpbmRleE9mU3RhdGljKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YXRpY1JlY3QgPSByZWN0YW5nbGVMaXN0W2luZGV4T2ZTdGF0aWNdXG4gICAgICAgIHJldHVybiAgISFzdGF0aWNSZWN0LmFuZChyZWN0KVxuICAgICAgfSkgfHwgcmVjdC5hbmQodGhpcy5ib3VuZFJlY3QpLmdldFNxdWFyZSgpICE9PSByZWN0LmdldFNxdWFyZSgpXG5cbiAgICAgIGlmIChyZW1vdmFibGUpIHtcbiAgICAgICAgcmVjdC5yZW1vdmFibGUgPSB0cnVlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0aWNSZWN0YW5nbGVJbmRleGVzLnB1c2goaW5kZXgpXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcmVjdGFuZ2xlTGlzdFxuICB9XG5cbiAgc29ydGluZyhvZGxEcmFnZ2FibGVzTGlzdCwgbmV3RHJhZ2dhYmxlcywgaW5kZXhPZk5ld3MpIHtcbiAgICBjb25zdCBkcmFnZ2FibGVzID0gb2RsRHJhZ2dhYmxlc0xpc3QuY29uY2F0KG5ld0RyYWdnYWJsZXMpXG4gICAgbmV3RHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGluZGV4T2ZOZXdzLnB1c2goZHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkpXG4gICAgfSlcbiAgICByZXR1cm4gZHJhZ2dhYmxlc1xuICB9XG59XG5cbmNsYXNzIEZsb2F0TGVmdFN0cmF0ZWd5IGV4dGVuZHMgQmFzaWNTdHJhdGVneSB7XG4gIGNvbnN0cnVjdG9yKHJlY3RhbmdsZSwgb3B0aW9ucz17fSkge1xuICAgIHN1cGVyKHJlY3RhbmdsZSwgb3B0aW9ucylcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHJlbW92YWJsZTogdHJ1ZVxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0aGlzLnJhZGl1cyA9IG9wdGlvbnMucmFkaXVzIHx8IDgwXG5cbiAgICB0aGlzLnBhZGRpbmdUb3BMZWZ0ID0gb3B0aW9ucy5wYWRkaW5nVG9wTGVmdCB8fCBuZXcgUG9pbnQoMCwgMClcbiAgICB0aGlzLnBhZGRpbmdCb3R0b21SaWdodCA9IG9wdGlvbnMucGFkZGluZ0JvdHRvbVJpZ2h0IHx8IG5ldyBQb2ludCgwLCAwKVxuICAgIHRoaXMueUdhcEJldHdlZW5EcmFnZ2FibGVzID0gb3B0aW9ucy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgfHwgMFxuXG4gICAgdGhpcy5nZXREaXN0YW5jZSA9IG9wdGlvbnMuZ2V0RGlzdGFuY2UgfHwgZ2V0RGlzdGFuY2VcbiAgICB0aGlzLmdldFBvc2l0aW9uID0gb3B0aW9ucy5nZXRQb3NpdGlvbiB8fCAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnBvc2l0aW9uKVxuICB9XG5cbiAgcG9zaXRpb25pbmcocmVjdGFuZ2xlTGlzdCwgX2luZGV4ZXNPZk5ld3MpIHtcbiAgICBjb25zdCBib3VuZFJlY3QgPSB0aGlzLmJvdW5kUmVjdFxuICAgIGNvbnN0IHJlY3RQMiA9IGJvdW5kUmVjdC5nZXRQMigpXG4gICAgbGV0IGJvdW5kYXJ5UG9pbnRzID0gW2JvdW5kUmVjdC5wb3NpdGlvbl1cblxuICAgIHJlY3RhbmdsZUxpc3QuZm9yRWFjaCgocmVjdCwgcmVjdEluZGV4KSA9PiB7XG4gICAgICBsZXQgcG9zaXRpb24sIGlzVmFsaWQgPSBmYWxzZVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib3VuZGFyeVBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBwb3NpdGlvbiA9IG5ldyBQb2ludChcbiAgICAgICAgICBib3VuZGFyeVBvaW50c1tpXS54ICsgdGhpcy5wYWRkaW5nVG9wTGVmdC54LFxuICAgICAgICAgIGkgPiAwID8gKGJvdW5kYXJ5UG9pbnRzW2kgLSAxXS55ICsgdGhpcy55R2FwQmV0d2VlbkRyYWdnYWJsZXMpIDogKGJvdW5kUmVjdC5wb3NpdGlvbi55ICsgdGhpcy5wYWRkaW5nVG9wTGVmdC55KVxuICAgICAgICApXG5cbiAgICAgICAgaXNWYWxpZCA9IChwb3NpdGlvbi54ICsgcmVjdC5zaXplLnggPCByZWN0UDIueClcblxuICAgICAgICBpZiAoaXNWYWxpZCkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICAgIHBvc2l0aW9uID0gbmV3IFBvaW50KFxuICAgICAgICAgIGJvdW5kUmVjdC5wb3NpdGlvbi54ICsgdGhpcy5wYWRkaW5nVG9wTGVmdC54LFxuICAgICAgICAgIGJvdW5kYXJ5UG9pbnRzW2JvdW5kYXJ5UG9pbnRzLmxlbmd0aCAtIDFdLnkgKyAocmVjdEluZGV4ID4gMCA/IHRoaXMueUdhcEJldHdlZW5EcmFnZ2FibGVzIDogdGhpcy5wYWRkaW5nVG9wTGVmdC55KVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHJlY3QucG9zaXRpb24gPSBwb3NpdGlvblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZW1vdmFibGUgJiYgcmVjdC5nZXRQMygpLnkgPiBib3VuZFJlY3QuZ2V0UDMoKS55KSB7XG4gICAgICAgIHJlY3QucmVtb3ZhYmxlID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBib3VuZGFyeVBvaW50cyA9IGFkZFBvaW50VG9Cb3VuZFBvaW50cyhib3VuZGFyeVBvaW50cywgcmVjdC5nZXRQMygpLmFkZCh0aGlzLnBhZGRpbmdCb3R0b21SaWdodCkpXG4gICAgfSlcbiAgICByZXR1cm4gcmVjdGFuZ2xlTGlzdFxuICB9XG5cbiAgc29ydGluZyhvZGxEcmFnZ2FibGVzTGlzdCwgbmV3RHJhZ2dhYmxlcywgaW5kZXhPZk5ld3MpIHtcbiAgICBjb25zdCBuZXdMaXN0ID0gb2RsRHJhZ2dhYmxlc0xpc3QuY29uY2F0KClcbiAgICBjb25zdCBsaXN0T2xkUG9zaXRpb24gPSBvZGxEcmFnZ2FibGVzTGlzdC5tYXAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLmdldFBvc2l0aW9uKCkpXG4gICAgbmV3RHJhZ2dhYmxlcy5mb3JFYWNoKChuZXdEcmFnZ2FibGUpID0+IHtcbiAgICAgIGxldCBpbmRleCA9IGluZGV4T2ZOZWFyZXN0UG9pbnQobGlzdE9sZFBvc2l0aW9uLCB0aGlzLmdldFBvc2l0aW9uKG5ld0RyYWdnYWJsZSksIHRoaXMucmFkaXVzLCB0aGlzLmdldERpc3RhbmNlKVxuICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICBpbmRleCA9IG5ld0xpc3QubGVuZ3RoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbmRleCA9IG5ld0xpc3QuaW5kZXhPZihvZGxEcmFnZ2FibGVzTGlzdFtpbmRleF0pXG4gICAgICB9XG4gICAgICBuZXdMaXN0LnNwbGljZShpbmRleCwgMCwgbmV3RHJhZ2dhYmxlKVxuICAgIH0pXG4gICAgbmV3RHJhZ2dhYmxlcy5mb3JFYWNoKChuZXdEcmFnZ2FibGUpID0+IHtcbiAgICAgIGluZGV4T2ZOZXdzLnB1c2gobmV3TGlzdC5pbmRleE9mKG5ld0RyYWdnYWJsZSkpXG4gICAgfSlcbiAgICByZXR1cm4gbmV3TGlzdFxuICB9XG59XG5cbmNsYXNzIEZsb2F0UmlnaHRTdHJhdGVneSBleHRlbmRzIEZsb2F0TGVmdFN0cmF0ZWd5IHtcbiAgY29uc3RydWN0b3IocmVjdGFuZ2xlLCBvcHRpb25zPXt9KSB7XG4gICAgc3VwZXIocmVjdGFuZ2xlLCBvcHRpb25zKVxuXG4gICAgdGhpcy5wYWRkaW5nVG9wUmlnaHQgPSBvcHRpb25zLnBhZGRpbmdUb3BSaWdodCB8fCBuZXcgUG9pbnQoNSwgNSlcbiAgICB0aGlzLnBhZGRpbmdCb3R0b21MZWZ0ID0gb3B0aW9ucy5wYWRkaW5nQm90dG9tTGVmdCB8fCBuZXcgUG9pbnQoMCwgMClcbiAgICB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyA9IG9wdGlvbnMueUdhcEJldHdlZW5EcmFnZ2FibGVzIHx8IDBcblxuICAgIHRoaXMucGFkZGluZ0JvdHRvbU5lZ0xlZnQgPSBuZXcgUG9pbnQoLXRoaXMucGFkZGluZ0JvdHRvbUxlZnQueCwgdGhpcy5wYWRkaW5nQm90dG9tTGVmdC55KVxuICB9XG5cbiAgcG9zaXRpb25pbmcocmVjdGFuZ2xlTGlzdCwgX2luZGV4ZXNPZk5ld3MpIHtcbiAgICBjb25zdCBib3VuZFJlY3QgPSB0aGlzLmJvdW5kUmVjdFxuICAgIGxldCBib3VuZGFyeVBvaW50cyA9IFtib3VuZFJlY3QuZ2V0UDIoKV1cblxuICAgIHJlY3RhbmdsZUxpc3QuZm9yRWFjaCgocmVjdCwgcmVjdEluZGV4KSA9PiB7XG4gICAgICBsZXQgcG9zaXRpb24sIGlzVmFsaWQgPSBmYWxzZVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib3VuZGFyeVBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBwb3NpdGlvbiA9IG5ldyBQb2ludChcbiAgICAgICAgICBib3VuZGFyeVBvaW50c1tpXS54IC0gcmVjdC5zaXplLnggLSB0aGlzLnBhZGRpbmdUb3BSaWdodC54LFxuICAgICAgICAgIGkgPiAwID8gKGJvdW5kYXJ5UG9pbnRzW2kgLSAxXS55ICsgdGhpcy55R2FwQmV0d2VlbkRyYWdnYWJsZXMpIDogKGJvdW5kUmVjdC5wb3NpdGlvbi55ICsgdGhpcy5wYWRkaW5nVG9wUmlnaHQueSlcbiAgICAgICAgKVxuXG4gICAgICAgIGlzVmFsaWQgPSAocG9zaXRpb24ueCA+IHJlY3QucG9zaXRpb24ueClcbiAgICAgICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgcG9zaXRpb24gPSBuZXcgUG9pbnQoXG4gICAgICAgICAgYm91bmRSZWN0LmdldFAyKCkueCAgLSByZWN0LnNpemUueCAtIHRoaXMucGFkZGluZ1RvcFJpZ2h0LngsXG4gICAgICAgICAgYm91bmRhcnlQb2ludHNbYm91bmRhcnlQb2ludHMubGVuZ3RoIC0gMV0ueSArIChyZWN0SW5kZXggPiAwID8gdGhpcy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgOiB0aGlzLnBhZGRpbmdUb3BSaWdodC55KVxuICAgICAgICApXG4gICAgICB9XG4gICAgICByZWN0LnBvc2l0aW9uID0gcG9zaXRpb25cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucmVtb3ZhYmxlICYmIHJlY3QuZ2V0UDQoKS55ID4gYm91bmRSZWN0LmdldFA0KCkueSkge1xuICAgICAgICByZWN0LnJlbW92YWJsZSA9IHRydWVcbiAgICAgIH1cbiAgICAgIGJvdW5kYXJ5UG9pbnRzID0gYWRkUG9pbnRUb0JvdW5kUG9pbnRzKGJvdW5kYXJ5UG9pbnRzLCByZWN0LmdldFA0KCkuYWRkKHRoaXMucGFkZGluZ0JvdHRvbU5lZ0xlZnQpLCB0cnVlKVxuICAgIH0pXG4gICAgcmV0dXJuIHJlY3RhbmdsZUxpc3RcbiAgfVxufVxuXG5leHBvcnQgeyBOb3RDcm9zc2luZ1N0cmF0ZWd5LCBGbG9hdExlZnRTdHJhdGVneSwgRmxvYXRSaWdodFN0cmF0ZWd5IH1cbiIsImltcG9ydCByYW5nZSBmcm9tICcuL3V0aWxzL3JhbmdlLmpzJ1xuaW1wb3J0IHJlbW92ZUl0ZW0gZnJvbSAnLi91dGlscy9yZW1vdmUtYXJyYXktaXRlbSdcbmltcG9ydCBnZXREZWZhdWx0UGFyZW50IGZyb20gJy4vdXRpbHMvZ2V0LWRlZmF1bHQtcGFyZW50J1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50RW1pdHRlcidcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSAnLi9nZW9tZXRyeS9yZWN0YW5nbGUnXG5pbXBvcnQgeyB0cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5IH0gZnJvbSAnLi9nZW9tZXRyeS9kaXN0YW5jZXMnXG5pbXBvcnQgeyBzY29wZXMsIGRlZmF1bHRTY29wZSB9IGZyb20gJy4vc2NvcGUnXG5cbmltcG9ydCB7IEZsb2F0TGVmdFN0cmF0ZWd5IH0gZnJvbSAnLi9wb3NpdGlvbmluZydcblxuY29uc3QgYWRkVG9EZWZhdWx0U2NvcGUgPSBmdW5jdGlvbih0YXJnZXQpIHtcbiAgZGVmYXVsdFNjb3BlLmFkZFRhcmdldCh0YXJnZXQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhcmdldCBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGRyYWdnYWJsZXMsIG9wdGlvbnMgPSB7fSkge1xuICAgIHN1cGVyKHVuZGVmaW5lZCwgb3B0aW9ucylcbiAgICBjb25zdCB0YXJnZXQgPSB0aGlzXG4gICAgY29uc3QgcGFyZW50ID0gb3B0aW9ucy5wYXJlbnQgfHwgZ2V0RGVmYXVsdFBhcmVudChlbGVtZW50KVxuXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICB0aW1lRW5kOiAyMDAsXG4gICAgICB0aW1lRXhjYW5nZTogNDAwLFxuICAgICAgcGFyZW50OiBwYXJlbnRcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGhpcy5wb3NpdGlvbmluZ1N0cmF0ZWd5ID0gb3B0aW9ucy5zdHJhdGVneSB8fCBuZXcgRmxvYXRMZWZ0U3RyYXRlZ3koXG4gICAgICB0aGlzLmdldFJlY3RhbmdsZS5iaW5kKHRoaXMpLFxuICAgICAge1xuICAgICAgICByYWRpdXM6IDgwLFxuICAgICAgICBnZXREaXN0YW5jZTogdHJhbnNmb3JtZWRTcGFjZURpc3RhbmNlRmFjdG9yeSh7IHg6IDEsIHk6IDQgfSksXG4gICAgICAgIHJlbW92YWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIClcblxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgICBkcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnRhcmdldHMucHVzaCh0YXJnZXQpKVxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZXNcblxuICAgIFRhcmdldC5lbWl0dGVyLmVtaXQoJ3RhcmdldDpjcmVhdGUnLCB0aGlzKVxuXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIHBvc2l0aW9uaW5nIChkcmFnZ2FibGVzLCBpbmRleGVzT2ZOZXcpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbmluZ1N0cmF0ZWd5LnBvc2l0aW9uaW5nKGRyYWdnYWJsZXMsIGluZGV4ZXNPZk5ldylcbiAgfVxuXG4gIHNvcnRpbmcgKG9sZERyYWdnYWJsZXMsIG5ld0RyYWdnYWJsZXMsIGluZGV4T2ZOZXdzKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25pbmdTdHJhdGVneS5zb3J0aW5nKG9sZERyYWdnYWJsZXMsIG5ld0RyYWdnYWJsZXMsIGluZGV4T2ZOZXdzKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBsZXQgcmVjdGFuZ2xlcywgaW5kZXhlc09mTmV3XG5cbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcyA9IHRoaXMuZHJhZ2dhYmxlcy5maWx0ZXIoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgbGV0IGVsZW1lbnQgPSBkcmFnZ2FibGUuZWxlbWVudC5wYXJlbnROb2RlXG4gICAgICB3aGlsZSAoZWxlbWVudCkge1xuICAgICAgICBpZiAoZWxlbWVudCA9PT0gdGhpcy5lbGVtZW50KSB7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlXG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9KVxuXG4gICAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmxlbmd0aCkge1xuICAgICAgaW5kZXhlc09mTmV3ID0gcmFuZ2UodGhpcy5pbm5lckRyYWdnYWJsZXMubGVuZ3RoKVxuICAgICAgcmVjdGFuZ2xlcyA9IHRoaXMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgICAgfSksIGluZGV4ZXNPZk5ldylcbiAgICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgaW5kZXhlc09mTmV3KVxuICAgICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB0aGlzLmVtaXQoJ3RhcmdldDphZGQnLCBkcmFnZ2FibGUpKVxuICAgIH1cbiAgfVxuXG4gIGdldFJlY3RhbmdsZSgpIHtcbiAgICByZXR1cm4gUmVjdGFuZ2xlLmZyb21FbGVtZW50KFxuICAgICAgdGhpcy5lbGVtZW50LFxuICAgICAgdGhpcy5vcHRpb25zLnBhcmVudCxcbiAgICAgIHRoaXMub3B0aW9ucy5pc0NvbnRlbnRCb3hTaXplLFxuICAgICAgdHJ1ZVxuICAgIClcbiAgfVxuXG4gIGNhdGNoRHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuY2F0Y2hEcmFnZ2FibGUpIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuY2F0Y2hEcmFnZ2FibGUodGhpcywgZHJhZ2dhYmxlKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0YXJnZXRSZWN0YW5nbGUgPSB0aGlzLmdldFJlY3RhbmdsZSgpXG4gICAgICBjb25zdCBkcmFnZ2FibGVTcXVhcmUgPSBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKCkuZ2V0U3F1YXJlKClcblxuICAgICAgcmV0dXJuIGRyYWdnYWJsZVNxdWFyZSA8IHRhcmdldFJlY3RhbmdsZS5nZXRTcXVhcmUoKVxuICAgICAgICAgICAgICAmJiB0YXJnZXRSZWN0YW5nbGUuaW5jbHVkZVBvaW50KGRyYWdnYWJsZS5nZXRDZW50ZXIoKSlcbiAgICB9XG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRSZWN0YW5nbGUoKS5wb3NpdGlvblxuICB9XG5cbiAgZ2V0U2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRSZWN0YW5nbGUoKS5zaXplXG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHNjb3Blcy5mb3JFYWNoKChzY29wZSkgPT4gcmVtb3ZlSXRlbShzY29wZS50YXJnZXRzLCB0aGlzKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgW10pXG4gICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBbXSwgMClcbiAgfVxuXG4gIG9uRW5kKGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IG5ld0RyYWdnYWJsZXNJbmRleCA9IFtdXG4gICAgY29uc3QgaW5jbHVkZVBvaW50ID0gdGhpcy5nZXRSZWN0YW5nbGUoKS5pbmNsdWRlUG9pbnQoZHJhZ2dhYmxlLmdldFBvc2l0aW9uKCkpXG5cbiAgICBpZiAoIWluY2x1ZGVQb2ludCkge1xuICAgICAgaWYgKHRoaXMuZ2V0UmVjdGFuZ2xlKCkuaW5jbHVkZVBvaW50KGRyYWdnYWJsZS5nZXRDZW50ZXIoKSkpIHtcbiAgICAgICAgZHJhZ2dhYmxlLnBvc2l0aW9uID0gZHJhZ2dhYmxlLmdldENlbnRlcigpLmNsb25lKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuZW1pdCgndGFyZ2V0OmJlZm9yZUFkZCcsIGRyYWdnYWJsZSlcblxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzID0gdGhpcy5zb3J0aW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLCBbZHJhZ2dhYmxlXSwgbmV3RHJhZ2dhYmxlc0luZGV4KVxuICAgIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgfSksIG5ld0RyYWdnYWJsZXNJbmRleClcblxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgbmV3RHJhZ2dhYmxlc0luZGV4KVxuICAgIGlmICh0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkgIT09IC0xKSB7XG4gICAgICB0aGlzLmFkZFJlbW92ZU9uTW92ZShkcmFnZ2FibGUpXG4gICAgfVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBzZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXcsIHRpbWUpIHtcbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5zbGljZSgwKS5mb3JFYWNoKChkcmFnZ2FibGUsIGkpID0+IHtcbiAgICAgIGNvbnN0IHJlY3QgPSByZWN0YW5nbGVzW2ldLFxuICAgICAgICB0aW1lRW5kID0gdGltZSB8fCB0aW1lID09PSAwID8gdGltZSA6IGluZGV4ZXNPZk5ldy5pbmRleE9mKGkpICE9PSAtMSA/IHRoaXMub3B0aW9ucy50aW1lRW5kIDogdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlXG5cbiAgICAgIGlmIChyZWN0LnJlbW92YWJsZSkge1xuICAgICAgICBkcmFnZ2FibGUubW92ZShkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uLCB0aW1lRW5kLCB0cnVlLCB0cnVlKVxuICAgICAgICByZW1vdmVJdGVtKHRoaXMuaW5uZXJEcmFnZ2FibGVzLCBkcmFnZ2FibGUpXG4gICAgICAgIHRoaXMuZW1pdCgndGFyZ2V0OnJlbW92ZScsIGRyYWdnYWJsZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRyYWdnYWJsZS5tb3ZlKHJlY3QucG9zaXRpb24sIHRpbWVFbmQsIHRydWUsIHRydWUpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGFkZChkcmFnZ2FibGUsIHRpbWUpIHtcbiAgICBjb25zdCBuZXdEcmFnZ2FibGVzSW5kZXggPSB0aGlzLmlubmVyRHJhZ2dhYmxlcy5sZW5ndGhcblxuICAgIHRoaXMuZW1pdCgndGFyZ2V0OmJlZm9yZUFkZCcsIGRyYWdnYWJsZSlcblxuICAgIHRoaXMucHVzaElubmVyRHJhZ2dhYmxlKGRyYWdnYWJsZSlcbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBuZXdEcmFnZ2FibGVzSW5kZXgsIGRyYWdnYWJsZSlcblxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgW25ld0RyYWdnYWJsZXNJbmRleF0sIHRpbWUgfHwgMClcbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMSkge1xuICAgICAgdGhpcy5hZGRSZW1vdmVPbk1vdmUoZHJhZ2dhYmxlKVxuICAgIH1cbiAgfVxuXG4gIHB1c2hJbm5lckRyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpPT09LTEpIHtcbiAgICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxuICAgIH1cbiAgfVxuXG4gIGFkZFJlbW92ZU9uTW92ZShkcmFnZ2FibGUpIHtcbiAgICBkcmFnZ2FibGUub24oJ2RyYWc6bW92ZScsIHRoaXMucmVtb3ZlSGFuZGxlciA9ICgpID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlKGRyYWdnYWJsZSlcbiAgICB9KVxuXG4gICAgdGhpcy5lbWl0KCd0YXJnZXQ6YWRkJywgZHJhZ2dhYmxlKVxuICB9XG5cbiAgcmVtb3ZlKGRyYWdnYWJsZSkge1xuICAgIGRyYWdnYWJsZS51bnN1YnNjcmliZSgnZHJhZzptb3ZlJywgdGhpcy5yZW1vdmVIYW5kbGVyKVxuXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSlcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5zcGxpY2UoaW5kZXgsIDEpXG5cbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBbXSlcblxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgW10pXG4gICAgdGhpcy5lbWl0KCd0YXJnZXQ6cmVtb3ZlJywgZHJhZ2dhYmxlKVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUubW92ZShkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uLCAwLCB0cnVlLCB0cnVlKVxuICAgICAgdGhpcy5lbWl0KCd0YXJnZXQ6cmVtb3ZlJywgZHJhZ2dhYmxlKVxuICAgIH0pXG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMgPSBbXVxuICB9XG5cbiAgZ2V0U29ydGVkRHJhZ2dhYmxlcygpIHtcbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5zbGljZSgpXG4gIH1cbn1cblxuVGFyZ2V0LmVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKFRhcmdldClcblRhcmdldC5lbWl0dGVyLm9uKCd0YXJnZXQ6Y3JlYXRlJywgYWRkVG9EZWZhdWx0U2NvcGUpXG4iLCJpbXBvcnQgcmVtb3ZlSXRlbSBmcm9tICcuL3V0aWxzL3JlbW92ZS1hcnJheS1pdGVtJ1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50RW1pdHRlcidcbmltcG9ydCBEcmFnZ2FibGUgZnJvbSAnLi9kcmFnZ2FibGUnXG5pbXBvcnQgVGFyZ2V0IGZyb20gJy4vdGFyZ2V0J1xuXG5jb25zdCBzY29wZXMgPSBbXVxuXG5jbGFzcyBTY29wZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKGRyYWdnYWJsZXMsIHRhcmdldHMsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcih1bmRlZmluZWQsIG9wdGlvbnMpXG4gICAgc2NvcGVzLmZvckVhY2goKHNjb3BlKSA9PiB7XG4gICAgICBpZiAoZHJhZ2dhYmxlcykge1xuICAgICAgICBkcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgICAgIHJlbW92ZUl0ZW0oc2NvcGUuZHJhZ2dhYmxlcywgZHJhZ2dhYmxlKVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICBpZiAodGFyZ2V0cykge1xuICAgICAgICB0YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4ge1xuICAgICAgICAgIHJlbW92ZUl0ZW0oc2NvcGUudGFyZ2V0cywgdGFyZ2V0KVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLmRyYWdnYWJsZXMgPSBkcmFnZ2FibGVzIHx8IFtdXG4gICAgdGhpcy50YXJnZXRzID0gdGFyZ2V0cyB8fCBbXVxuICAgIHNjb3Blcy5wdXNoKHRoaXMpXG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgdGltZUVuZDogKG9wdGlvbnMudGltZUVuZCkgfHwgNDAwXG4gICAgfVxuXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLmRyYWdFbmRBY3Rpb24gPSAoKSA9PiB0aGlzLm9uRW5kKGRyYWdnYWJsZSlcbiAgICB9KVxuICB9XG5cbiAgYWRkRHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5wdXNoKGRyYWdnYWJsZSlcbiAgICBkcmFnZ2FibGUuZHJhZ0VuZEFjdGlvbiA9ICgpID0+IHRoaXMub25FbmQoZHJhZ2dhYmxlKVxuICB9XG5cbiAgYWRkVGFyZ2V0KHRhcmdldCkge1xuICAgIHRoaXMudGFyZ2V0cy5wdXNoKHRhcmdldClcbiAgfVxuXG4gIG9uRW5kKGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IHNob3RUYXJnZXRzID0gdGhpcy50YXJnZXRzLmZpbHRlcigodGFyZ2V0KSA9PiB7XG4gICAgICByZXR1cm4gdGFyZ2V0LmRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMVxuICAgIH0pLmZpbHRlcigodGFyZ2V0KSA9PiB7XG4gICAgICByZXR1cm4gdGFyZ2V0LmNhdGNoRHJhZ2dhYmxlKGRyYWdnYWJsZSlcbiAgICB9KS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICByZXR1cm4gYS5nZXRSZWN0YW5nbGUoKS5nZXRTcXVhcmUoKSAtIGIuZ2V0UmVjdGFuZ2xlKCkuZ2V0U3F1YXJlKClcbiAgICB9KVxuXG4gICAgaWYgKHNob3RUYXJnZXRzLmxlbmd0aCkge1xuICAgICAgc2hvdFRhcmdldHNbMF0ub25FbmQoZHJhZ2dhYmxlKVxuICAgIH0gZWxzZSBpZiAoZHJhZ2dhYmxlLnRhcmdldHMubGVuZ3RoKSB7XG4gICAgICBkcmFnZ2FibGUucGluUG9zaXRpb24oZHJhZ2dhYmxlLmluaXRpYWxQb3NpdGlvbiwgdGhpcy5vcHRpb25zLnRpbWVFbmQpXG4gICAgfVxuXG4gICAgdGhpcy5lbWl0KCdzY29wZTpjaGFuZ2UnKVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy50YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4gdGFyZ2V0LnJlc2V0KCkpXG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5yZWZyZXNoKCkpXG4gICAgdGhpcy50YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4gdGFyZ2V0LnJlZnJlc2goKSlcbiAgfVxuXG4gIGdldCBwb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0cy5tYXAoKHRhcmdldCkgPT4ge1xuICAgICAgcmV0dXJuIHRhcmdldC5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHRoaXMuZHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkpXG4gICAgfSlcbiAgfVxuXG4gIHNldCBwb3NpdGlvbnMocG9zaXRpb25zKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9ICd3cm9uZyBhcnJheSBsZW5ndGgnXG4gICAgaWYgKHBvc2l0aW9ucy5sZW5ndGggPT09IHRoaXMudGFyZ2V0cy5sZW5ndGgpIHtcbiAgICAgIHRoaXMudGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHRhcmdldC5yZXNldCgpKVxuXG4gICAgICBwb3NpdGlvbnMuZm9yRWFjaCgodGFyZ2V0SW5kZXhlcywgaSkgPT4ge1xuICAgICAgICB0YXJnZXRJbmRleGVzLmZvckVhY2goKGluZGV4KSA9PiB7XG4gICAgICAgICAgdGhpcy50YXJnZXRzW2ldLmFkZCh0aGlzLmRyYWdnYWJsZXNbaW5kZXhdKVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbWVzc2FnZVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBkZWZhdWx0U2NvcGUgPSBuZXcgU2NvcGUoKVxuXG5mdW5jdGlvbiBzY29wZShmbikge1xuICBjb25zdCBjdXJyZW50U2NvcGUgPSBuZXcgU2NvcGUoKVxuXG4gIGNvbnN0IGFkZERyYWdnYWJsZVRvU2NvcGUgPSBmdW5jdGlvbihkcmFnZ2FibGUpIHtcbiAgICBjdXJyZW50U2NvcGUuYWRkRHJhZ2dhYmxlKGRyYWdnYWJsZSlcbiAgICBEcmFnZ2FibGUuZW1pdHRlci5pbnRlcnJ1cHQoKVxuICB9XG5cbiAgY29uc3QgYWRkVGFyZ2V0VG9TY29wZSA9IGZ1bmN0aW9uKHRhcmdldCkge1xuICAgIGN1cnJlbnRTY29wZS5hZGRUYXJnZXQodGFyZ2V0KVxuICAgIERyYWdnYWJsZS5lbWl0dGVyLmludGVycnVwdCgpXG4gIH1cblxuICBEcmFnZ2FibGUuZW1pdHRlci5wcmVwZW5kT24oJ2RyYWdnYWJsZTpjcmVhdGUnLCBhZGREcmFnZ2FibGVUb1Njb3BlKVxuICBUYXJnZXQuZW1pdHRlci5wcmVwZW5kT24oJ3RhcmdldDpjcmVhdGUnLCBhZGRUYXJnZXRUb1Njb3BlKVxuICBmbi5jYWxsKClcbiAgRHJhZ2dhYmxlLmVtaXR0ZXIudW5zdWJzY3JpYmUoJ2RyYWdnYWJsZTpjcmVhdGUnLCBhZGREcmFnZ2FibGVUb1Njb3BlKVxuICBUYXJnZXQuZW1pdHRlci51bnN1YnNjcmliZSgndGFyZ2V0OmNyZWF0ZScsIGFkZFRhcmdldFRvU2NvcGUpXG4gIHJldHVybiBjdXJyZW50U2NvcGVcbn1cblxuZXhwb3J0IHsgc2NvcGVzLCBkZWZhdWx0U2NvcGUsIFNjb3BlLCBzY29wZSB9XG4iLCJmdW5jdGlvbiBjaGVja1N1cHBvcnRQYXNzaXZlRXZlbnRzKCkge1xuICBsZXQgcGFzc2l2ZVN1cHBvcnRlZCA9IGZhbHNlXG5cbiAgdHJ5IHtcbiAgICBjb25zdCBvcHRpb25zID0gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAncGFzc2l2ZScsIHtcbiAgICAgIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIChwYXNzaXZlU3VwcG9ydGVkID0gdHJ1ZSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3QnLCBvcHRpb25zLCBvcHRpb25zKVxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0ZXN0Jywgb3B0aW9ucywgb3B0aW9ucylcbiAgfSBjYXRjaCAoX2Vycikge1xuICAgIHBhc3NpdmVTdXBwb3J0ZWQgPSBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIHBhc3NpdmVTdXBwb3J0ZWRcbn1cblxuZXhwb3J0IGNvbnN0IGlzU3VwcG9ydFBhc3NpdmVFdmVudHMgPSBjaGVja1N1cHBvcnRQYXNzaXZlRXZlbnRzKClcblxuZnVuY3Rpb24gZXZlbnRPcHRpb25zKG9wdGlvbnMsIGZhbGxiYWNrID0gZmFsc2UpIHtcbiAgcmV0dXJuIGlzU3VwcG9ydFBhc3NpdmVFdmVudHMgPyBvcHRpb25zIDogZmFsbGJhY2tcbn1cblxuZXhwb3J0IHsgZXZlbnRPcHRpb25zIH1cblxuZXhwb3J0IGRlZmF1bHQgaXNTdXBwb3J0UGFzc2l2ZUV2ZW50c1xuIiwiaW1wb3J0IHsgYWRkQ2xhc3MsIHJlbW92ZUNsYXNzIH0gZnJvbSAnLi91dGlscy9jbGFzc2VzJ1xuaW1wb3J0IGdldERlZmF1bHRQYXJlbnQgZnJvbSAnLi91dGlscy9nZXQtZGVmYXVsdC1wYXJlbnQnXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnRFbWl0dGVyJ1xuaW1wb3J0IGdldFN0eWxlUHJvcGVydHkgZnJvbSAnZGVzYW5kcm8tZ2V0LXN0eWxlLXByb3BlcnR5J1xuaW1wb3J0IHsgQm91bmRUb0VsZW1lbnQgfSBmcm9tICcuL2JvdW5kaW5nJ1xuaW1wb3J0IFBvaW50IGZyb20gJy4vZ2VvbWV0cnkvcG9pbnQnXG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gJy4vZ2VvbWV0cnkvcmVjdGFuZ2xlJ1xuaW1wb3J0IHsgZGVmYXVsdFNjb3BlIH0gZnJvbSAnLi9zY29wZSdcbmltcG9ydCBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzIGZyb20gJy4vdXRpbHMvaXMtc3VwcG9ydC1wYXNzaXZlLWV2ZW50cydcblxuY29uc3QgaXNUb3VjaCA9ICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvd1xuY29uc3QgbW91c2VFdmVudHMgPSB7XG4gIHN0YXJ0OiAnbW91c2Vkb3duJyxcbiAgbW92ZTogJ21vdXNlbW92ZScsXG4gIGVuZDogJ21vdXNldXAnXG59XG5jb25zdCB0b3VjaEV2ZW50cyA9IHtcbiAgc3RhcnQ6ICd0b3VjaHN0YXJ0JyxcbiAgbW92ZTogJ3RvdWNobW92ZScsXG4gIGVuZDogJ3RvdWNoZW5kJ1xufVxuY29uc3QgZHJhZ2dhYmxlcyA9IFtdXG5jb25zdCB0cmFuc2Zvcm1Qcm9wZXJ0eSA9IGdldFN0eWxlUHJvcGVydHkoJ3RyYW5zZm9ybScpXG5jb25zdCB0cmFuc2l0aW9uUHJvcGVydHkgPSBnZXRTdHlsZVByb3BlcnR5KCd0cmFuc2l0aW9uJylcblxuZnVuY3Rpb24gZ2V0VG91Y2hCeUlEKGVsZW1lbnQsIHRvdWNoSWQpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50LmNoYW5nZWRUb3VjaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGVsZW1lbnQuY2hhbmdlZFRvdWNoZXNbaV0uaWRlbnRpZmllciA9PT0gdG91Y2hJZCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQuY2hhbmdlZFRvdWNoZXNbaV1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmZ1bmN0aW9uIHByZXZlbnREb3VibGVJbml0KGRyYWdnYWJsZSkge1xuICBjb25zdCBtZXNzYWdlID0gXCJmb3IgdGhpcyBlbGVtZW50IERyYWdlZS5EcmFnZ2FibGUgaXMgYWxyZWFkeSBleGlzdCwgZG9uJ3QgY3JlYXRlIGl0IHR3aWNlIFwiXG4gIGlmIChkcmFnZ2FibGVzLnNvbWUoKGV4aXN0aW5nKSA9PiBkcmFnZ2FibGUuZWxlbWVudCA9PT0gZXhpc3RpbmcuZWxlbWVudCkpIHtcbiAgICB0aHJvdyBtZXNzYWdlXG4gIH1cbiAgZHJhZ2dhYmxlcy5wdXNoKGRyYWdnYWJsZSlcbn1cblxuZnVuY3Rpb24gYWRkVG9EZWZhdWx0U2NvcGUoZHJhZ2dhYmxlKSB7XG4gIGRlZmF1bHRTY29wZS5hZGREcmFnZ2FibGUoZHJhZ2dhYmxlKVxufVxuXG5mdW5jdGlvbiBjb3B5U3R5bGVzKHNvdXJjZSwgZGVzdGluYXRpb24pIHtcbiAgY29uc3QgY3MgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShzb3VyY2UpXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGtleSA9IGNzW2ldXG4gICAgaWYgKChrZXkuaW5kZXhPZigndHJhbnNpdGlvbicpIDwgMCkgJiYgKGtleS5pbmRleE9mKCd0cmFuc2Zvcm0nKSA8IDApKSB7XG4gICAgICBkZXN0aW5hdGlvbi5zdHlsZVtrZXldID0gY3Nba2V5XVxuICAgIH1cbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc291cmNlLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgY29weVN0eWxlcyhzb3VyY2UuY2hpbGRyZW5baV0sIGRlc3RpbmF0aW9uLmNoaWxkcmVuW2ldKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYWdnYWJsZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcih1bmRlZmluZWQsIG9wdGlvbnMpXG4gICAgdGhpcy50YXJnZXRzID0gW11cbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIHByZXZlbnREb3VibGVJbml0KHRoaXMpXG4gICAgRHJhZ2dhYmxlLmVtaXR0ZXIuZW1pdCgnZHJhZ2dhYmxlOmNyZWF0ZScsIHRoaXMpXG4gICAgdGhpcy5fZW5hYmxlID0gdHJ1ZVxuICAgIHRoaXMuc3RhcnRQb3NpdGlvbmluZygpXG4gICAgdGhpcy5zdGFydExpc3RlbmluZygpXG4gIH1cblxuICBzdGFydFBvc2l0aW9uaW5nKCkge1xuICAgIHRoaXMuX3NldERlZmF1bHRUcmFuc2l0aW9uKClcbiAgICB0aGlzLm9mZnNldCA9IFBvaW50LmVsZW1lbnRPZmZzZXQodGhpcy5lbGVtZW50LCB0aGlzLnBhcmVudCwgdHJ1ZSlcbiAgICB0aGlzLnBpbm5lZFBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICB0aGlzLmluaXRpYWxQb3NpdGlvbiA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbiB8fCB0aGlzLm9mZnNldFxuXG4gICAgdGhpcy5waW5Qb3NpdGlvbih0aGlzLmluaXRpYWxQb3NpdGlvbilcblxuICAgIGlmICh0aGlzLmJvdW5kaW5nLnJlZnJlc2gpIHtcbiAgICAgIHRoaXMuYm91bmRpbmcucmVmcmVzaCgpXG4gICAgfVxuICB9XG5cbiAgc3RhcnRMaXN0ZW5pbmcoKSB7XG4gICAgdGhpcy5fZHJhZ1N0YXJ0ID0gKGV2ZW50KSA9PiB0aGlzLmRyYWdTdGFydChldmVudClcbiAgICB0aGlzLl9kcmFnTW92ZSA9IChldmVudCkgPT4gdGhpcy5kcmFnTW92ZShldmVudClcbiAgICB0aGlzLl9kcmFnRW5kID0gKGV2ZW50KSA9PiB0aGlzLmRyYWdFbmQoZXZlbnQpXG4gICAgdGhpcy5fbmF0aXZlRHJhZ1N0YXJ0ID0gKGV2ZW50KSA9PiB0aGlzLm5hdGl2ZURyYWdTdGFydChldmVudClcbiAgICB0aGlzLl9uYXRpdmVEcmFnTW92ZSA9IChldmVudCkgPT4gdGhpcy5uYXRpdmVEcmFnTW92ZShldmVudClcbiAgICB0aGlzLl9uYXRpdmVEcmFnRW5kID0gKGV2ZW50KSA9PiB0aGlzLm5hdGl2ZURyYWdFbmQoZXZlbnQpXG5cbiAgICB0aGlzLmhhbmRsZXIuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0LCBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzID8geyBwYXNzaXZlOiBmYWxzZSB9IDogZmFsc2UpXG4gICAgdGhpcy5oYW5kbGVyLmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydCwgaXNTdXBwb3J0UGFzc2l2ZUV2ZW50cyA/IHsgcGFzc2l2ZTogZmFsc2UgfSA6IGZhbHNlKVxuICAgIHRoaXMuaGFuZGxlci5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCB0aGlzLl9uYXRpdmVEcmFnU3RhcnQpXG4gIH1cblxuICBnZXRTaXplKCkge1xuICAgIHJldHVybiBQb2ludC5lbGVtZW50U2l6ZSh0aGlzLmVsZW1lbnQsIHRoaXMub3B0aW9ucy5pc0NvbnRlbnRCb3hTaXplKVxuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMub2Zmc2V0LmFkZCh0aGlzLl90cmFuc2Zvcm1Qb3NpdGlvbiB8fCBuZXcgUG9pbnQoMCwgMCkpXG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25cbiAgfVxuXG4gIGdldENlbnRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi5hZGQodGhpcy5nZXRTaXplKCkubXVsdCgwLjUpKVxuICB9XG5cbiAgX3NldERlZmF1bHRUcmFuc2l0aW9uICgpIHtcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNpdGlvblByb3BlcnR5XSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZWxlbWVudClbdHJhbnNpdGlvblByb3BlcnR5XVxuICB9XG5cbiAgX3NldFRyYW5zaXRpb24odGltZSkge1xuICAgIGxldCB0cmFuc2l0aW9uID0gdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV1cbiAgICBjb25zdCB0cmFuc2l0aW9uQ3NzID0gYHRyYW5zZm9ybSAke3RpbWV9bXNgXG5cbiAgICBpZiAoIS90cmFuc2Zvcm0gXFxkKm0/cy8udGVzdCh0cmFuc2l0aW9uKSkge1xuICAgICAgaWYgKHRyYW5zaXRpb24pIHtcbiAgICAgICAgdHJhbnNpdGlvbiArPSBgLCAke3RyYW5zaXRpb25Dc3N9YFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJhbnNpdGlvbiA9IHRyYW5zaXRpb25Dc3NcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdHJhbnNpdGlvbiA9IHRyYW5zaXRpb24ucmVwbGFjZSgvdHJhbnNmb3JtIFxcZCptP3MvLCB0cmFuc2l0aW9uQ3NzKVxuICAgIH1cblxuICAgIHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldID0gdHJhbnNpdGlvblxuICB9XG5cbiAgX3NldFRyYW5zbGF0ZShwb2ludCkge1xuICAgIHRoaXMuX3RyYW5zZm9ybVBvc2l0aW9uID0gcG9pbnRcblxuICAgIGxldCB0cmFuc2Zvcm0gPSB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcGVydHldXG4gICAgbGV0IHRyYW5zbGF0ZUNzcyA9IGAgdHJhbnNsYXRlM2QoJHtwb2ludC54fXB4LCAke3BvaW50Lnl9cHgsIDBweClgXG5cbiAgICBjb25zdCB1YSA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50XG4gICAgY29uc3QgbXNpZSA9IHVhLmluZGV4T2YoJ01TSUUgJykgIT09IC0xXG5cbiAgICBpZiAobXNpZSkge1xuICAgICAgdHJhbnNsYXRlQ3NzID0gYCB0cmFuc2xhdGUoJHtwb2ludC54fXB4LCR7cG9pbnQueX1weClgXG4gICAgICBpZiAoIS90cmFuc2xhdGVcXChbXildK1xcKS8udGVzdCh0cmFuc2Zvcm0pKSB7XG4gICAgICAgIHRyYW5zZm9ybSArPSB0cmFuc2xhdGVDc3NcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyYW5zZm9ybSA9IHRyYW5zZm9ybS5yZXBsYWNlKC90cmFuc2xhdGVcXChbXildK1xcKS8sIHRyYW5zbGF0ZUNzcylcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCEvdHJhbnNsYXRlM2RcXChbXildK1xcKS8udGVzdCh0cmFuc2Zvcm0pKSB7XG4gICAgICAgIHRyYW5zZm9ybSArPSB0cmFuc2xhdGVDc3NcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyYW5zZm9ybSA9IHRyYW5zZm9ybS5yZXBsYWNlKC90cmFuc2xhdGUzZFxcKFteKV0rXFwpLywgdHJhbnNsYXRlQ3NzKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wZXJ0eV0gPSB0cmFuc2Zvcm1cbiAgfVxuXG4gIG1vdmUocG9pbnQsIHRpbWU9MCwgaXNTaWxlbnQ9ZmFsc2UpIHtcbiAgICBwb2ludCA9IHBvaW50LmNsb25lKClcblxuICAgIHRoaXMuZGV0ZXJtaW5lRGlyZWN0aW9uKHBvaW50KVxuICAgIHRoaXMucG9zaXRpb24gPSBwb2ludFxuXG4gICAgdGhpcy5fc2V0VHJhbnNpdGlvbih0aW1lKVxuICAgIHRoaXMuX3NldFRyYW5zbGF0ZShwb2ludC5zdWIodGhpcy5vZmZzZXQpKVxuXG4gICAgaWYgKCFpc1NpbGVudCkge1xuICAgICAgdGhpcy5lbWl0KCdkcmFnOm1vdmUnKVxuICAgIH1cbiAgfVxuXG4gIHBpblBvc2l0aW9uKHBvaW50LCB0aW1lPTAsIHNpbGVudD10cnVlKSB7XG4gICAgdGhpcy5waW5uZWRQb3NpdGlvbiA9IHBvaW50LmNsb25lKClcbiAgICB0aGlzLm1vdmUodGhpcy5waW5uZWRQb3NpdGlvbiwgdGltZSwgc2lsZW50KVxuICB9XG5cbiAgcmVzZXRQb3NpdGlvblRvSW5pdGlhbCAoKSB7XG4gICAgdGhpcy5waW5Qb3NpdGlvbih0aGlzLmluaXRpYWxQb3NpdGlvbilcbiAgfVxuXG4gIHJlZnJlc2hQb3NpdGlvbiAoKSB7XG4gICAgdGhpcy5zZXRQb3NpdGlvbih0aGlzLmdldFBvc2l0aW9uKCkpXG4gIH1cblxuICBzZXRQb3NpdGlvbihwb2ludCkge1xuICAgIHBvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIHRoaXMucG9zaXRpb24gPSBwb2ludFxuICAgIHRoaXMuX3NldFRyYW5zaXRpb24oMClcbiAgICB0aGlzLl9zZXRUcmFuc2xhdGUocG9pbnQuc3ViKHRoaXMub2Zmc2V0KSlcbiAgfVxuXG4gIGRldGVybWluZURpcmVjdGlvbihwb2ludCkge1xuICAgIHRoaXMubGVmdERpcmVjdGlvbiA9ICh0aGlzLnBvc2l0aW9uLnggPCBwb2ludC54KVxuICAgIHRoaXMucmlnaHREaXJlY3Rpb24gPSAodGhpcy5wb3NpdGlvbi54ID4gcG9pbnQueClcbiAgICB0aGlzLnVwRGlyZWN0aW9uID0gKHRoaXMucG9zaXRpb24ueSA+IHBvaW50LnkpXG4gICAgdGhpcy5kb3duRGlyZWN0aW9uID0gKHRoaXMucG9zaXRpb24ueSA8IHBvaW50LnkpXG4gIH1cblxuICBkcmFnU3RhcnQoZXZlbnQpIHtcbiAgICB0aGlzLmN1cnJlbnRFdmVudCA9IGV2ZW50XG4gICAgaWYgKCF0aGlzLl9lbmFibGUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGlzVG91Y2hFdmVudCA9IChpc1RvdWNoICYmIChldmVudCBpbnN0YW5jZW9mIHdpbmRvdy5Ub3VjaEV2ZW50KSlcblxuICAgIHRoaXMuX3N0YXJ0VG91Y2hQb2ludCA9IG5ldyBQb2ludChcbiAgICAgIGlzVG91Y2hFdmVudCA/IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYIDogZXZlbnQuY2xpZW50WCxcbiAgICAgIGlzVG91Y2hFdmVudCA/IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZIDogZXZlbnQuY2xpZW50WVxuICAgIClcblxuICAgIHRoaXMuX3N0YXJ0UG9zaXRpb24gPSB0aGlzLmdldFBvc2l0aW9uKClcbiAgICBpZiAoaXNUb3VjaEV2ZW50KSB7XG4gICAgICB0aGlzLl90b3VjaElkID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uaWRlbnRpZmllclxuICAgIH1cblxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgaWYgKGV2ZW50LnRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSW5wdXRFbGVtZW50IHx8XG4gICAgICAgICAgZXZlbnQudGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJbnB1dEVsZW1lbnQpIHtcbiAgICAgIGV2ZW50LnRhcmdldC5mb2N1cygpXG4gICAgfVxuXG4gICAgaWYgKCEodGhpcy5uYXRpdmVEcmFnQW5kRHJvcCB8fFxuICAgICAgICAgICAgZXZlbnQudGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJbnB1dEVsZW1lbnQgfHxcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSW5wdXRFbGVtZW50KSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIH1cblxuICAgIGlmICh0aGlzLm5hdGl2ZURyYWdBbmREcm9wKSB7XG4gICAgICBjb25zdCBpc1NhZmFyaSA9L3ZlcnNpb25cXC8oXFxkKykuKz9zYWZhcmkvaS50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KVxuICAgICAgaWYgKChpc1RvdWNoRXZlbnQgJiYgdGhpcy5lbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3BPblRvdWNoKSB8fCBpc1NhZmFyaSkge1xuICAgICAgICB0aGlzLmVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcChldmVudClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5kcmFnZ2FibGUgPSB0cnVlXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9uYXRpdmVEcmFnRW5kLCBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzID8geyBwYXNzaXZlOiBmYWxzZSB9IDogZmFsc2UpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUsIGlzU3VwcG9ydFBhc3NpdmVFdmVudHMgPyB7IHBhc3NpdmU6IGZhbHNlIH0gOiBmYWxzZSlcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUsIGlzU3VwcG9ydFBhc3NpdmVFdmVudHMgPyB7IHBhc3NpdmU6IGZhbHNlIH0gOiBmYWxzZSlcblxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQsIGlzU3VwcG9ydFBhc3NpdmVFdmVudHMgPyB7IHBhc3NpdmU6IGZhbHNlIH0gOiBmYWxzZSlcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kLCBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzID8geyBwYXNzaXZlOiBmYWxzZSB9IDogZmFsc2UpXG4gICAgfVxuXG4gICAgdGhpcy5pc0RyYWdnaW5nID0gdHJ1ZVxuICAgIHRoaXMuZW1pdCgnZHJhZzpzdGFydCcpXG4gICAgYWRkQ2xhc3ModGhpcy5lbGVtZW50LCAnZHJhZ2VlLWFjdGl2ZScpXG4gICAgdGhpcy5lbWl0KCdkcmFnOm1vdmUnKVxuICB9XG5cbiAgc3RvcERyYWdnaW5nKCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIHRoaXMuX25hdGl2ZURyYWdNb3ZlKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIHRoaXMuZWxlbWVudC5kcmFnZ2FibGUgPSBmYWxzZVxuICAgIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlXG4gICAgcmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50LCAnZHJhZ2VlLWFjdGl2ZScpXG4gIH1cblxuICBkcmFnTW92ZShldmVudCkge1xuICAgIHRoaXMuY3VycmVudEV2ZW50ID0gZXZlbnRcbiAgICBsZXQgdG91Y2hcblxuICAgIGNvbnN0IGlzVG91Y2hFdmVudCA9IChpc1RvdWNoICYmIChldmVudCBpbnN0YW5jZW9mIHdpbmRvdy5Ub3VjaEV2ZW50KSlcbiAgICBpZiAoaXNUb3VjaEV2ZW50KSB7XG4gICAgICB0b3VjaCA9IGdldFRvdWNoQnlJRChldmVudCwgdGhpcy5fdG91Y2hJZClcblxuICAgICAgaWYgKCF0b3VjaCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zdCB0b3VjaFBvaW50ID0gbmV3IFBvaW50KFxuICAgICAgaXNUb3VjaEV2ZW50ID8gdG91Y2gucGFnZVggOiBldmVudC5jbGllbnRYLFxuICAgICAgaXNUb3VjaEV2ZW50ID8gdG91Y2gucGFnZVkgOiBldmVudC5jbGllbnRZXG4gICAgKVxuXG4gICAgbGV0IHBvaW50ID0gdGhpcy5fc3RhcnRQb3NpdGlvbi5hZGQodG91Y2hQb2ludC5zdWIodGhpcy5fc3RhcnRUb3VjaFBvaW50KSlcbiAgICBwb2ludCA9IHRoaXMuYm91bmRpbmcuYm91bmQocG9pbnQsIHRoaXMuZ2V0U2l6ZSgpKVxuICAgIHRoaXMudG91Y2hQb2ludCA9IHRvdWNoUG9pbnRcbiAgICB0aGlzLm1vdmUocG9pbnQpXG4gIH1cblxuICBkcmFnRW5kKGV2ZW50KSB7XG4gICAgY29uc3QgaXNUb3VjaEV2ZW50ID0gKGlzVG91Y2ggJiYgKGV2ZW50IGluc3RhbmNlb2Ygd2luZG93LlRvdWNoRXZlbnQpKVxuXG4gICAgaWYgKGlzVG91Y2hFdmVudCAmJiAhZ2V0VG91Y2hCeUlEKGV2ZW50LCB0aGlzLl90b3VjaElkKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhpcy5kcmFnRW5kQWN0aW9uKClcbiAgICB0aGlzLmVtaXQoJ2RyYWc6ZW5kJylcblxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcblxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuXG4gICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2VcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkcmFnZ2FibGUnKVxuICAgIHJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudCwgJ2RyYWdlZS1hY3RpdmUnKVxuICB9XG5cbiAgbmF0aXZlRHJhZ1N0YXJ0KGV2ZW50KSB7XG4gICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQnLCAnRmlyZUZveCBmaXgnKVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgdGhpcy5fbmF0aXZlRHJhZ01vdmUpXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIHRoaXMuX25hdGl2ZURyYWdFbmQpXG4gIH1cblxuICBuYXRpdmVEcmFnTW92ZShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBhZGRDbGFzcyh0aGlzLmVsZW1lbnQsICdkcmFnZWUtcGxhY2Vob2xkZXInKVxuICAgIHRoaXMuY3VycmVudEV2ZW50ID0gZXZlbnRcbiAgICBpZiAoZXZlbnQuY2xpZW50WCA9PT0gMCAmJiBldmVudC5jbGllbnRZID09PSAwKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB0b3VjaFBvaW50ID0gbmV3IFBvaW50KGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpXG4gICAgbGV0IHBvaW50ID0gdGhpcy5fc3RhcnRQb3NpdGlvbi5hZGQodG91Y2hQb2ludC5zdWIodGhpcy5fc3RhcnRUb3VjaFBvaW50KSlcbiAgICBwb2ludCA9IHRoaXMuYm91bmRpbmcuYm91bmQocG9pbnQsIHRoaXMuZ2V0U2l6ZSgpKVxuICAgIHRoaXMudG91Y2hQb2ludCA9IHRvdWNoUG9pbnRcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9pbnRcbiAgICB0aGlzLmVtaXQoJ2RyYWc6bW92ZScpXG4gIH1cblxuICBuYXRpdmVEcmFnRW5kKF9ldmVudCkge1xuICAgIHJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudCwgJ2RyYWdlZS1wbGFjZWhvbGRlcicpXG4gICAgdGhpcy5kcmFnRW5kQWN0aW9uKClcbiAgICB0aGlzLmVtaXQoJ2RyYWc6ZW5kJylcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIHRoaXMuX25hdGl2ZURyYWdNb3ZlKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnZHJhZ2dhYmxlJylcbiAgICByZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnQsICdkcmFnZWUtYWN0aXZlJylcbiAgfVxuXG4gIGVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcChldmVudCkge1xuICAgIGNvbnN0IHBhcmVudFJlY3QgPSB0aGlzLnBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIGNvbnN0IGNsb25lZEVsZW1lbnQgPSB0aGlzLmVsZW1lbnQuY2xvbmVOb2RlKHRydWUpXG4gICAgY2xvbmVkRWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wZXJ0eV0gPSAnJ1xuICAgIGNvcHlTdHlsZXModGhpcy5lbGVtZW50LCBjbG9uZWRFbGVtZW50KVxuICAgIGNsb25lZEVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjbG9uZWRFbGVtZW50KVxuICAgIGFkZENsYXNzKHRoaXMuZWxlbWVudCwgJ2RyYWdlZS1wbGFjZWhvbGRlcicpXG5cbiAgICBjb25zdCBlbXVsYXRpb25EcmFnZ2FibGUgPSBuZXcgRHJhZ2dhYmxlKGNsb25lZEVsZW1lbnQsIHtcbiAgICAgIHBhcmVudDogZG9jdW1lbnQuYm9keSxcbiAgICAgIG9uOiB7XG4gICAgICAgICdkcmFnOm1vdmUnOiAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5wb3NpdGlvbiA9IG5ldyBQb2ludChcbiAgICAgICAgICAgIGVtdWxhdGlvbkRyYWdnYWJsZS5wb3NpdGlvbi54IC0gcGFyZW50UmVjdC5sZWZ0IC0gd2luZG93LnNjcm9sbFgsXG4gICAgICAgICAgICBlbXVsYXRpb25EcmFnZ2FibGUucG9zaXRpb24ueSAtIHBhcmVudFJlY3QudG9wIC0gd2luZG93LnNjcm9sbFlcbiAgICAgICAgICApXG4gICAgICAgICAgdGhpcy5lbWl0KCdkcmFnOm1vdmUnKVxuICAgICAgICB9LFxuICAgICAgICAnZHJhZzplbmQnOiAoKSA9PiB7XG4gICAgICAgICAgZW11bGF0aW9uRHJhZ2dhYmxlLmRlc3Ryb3koKVxuICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoY2xvbmVkRWxlbWVudClcbiAgICAgICAgICByZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnQsICdkcmFnZWUtcGxhY2Vob2xkZXInKVxuICAgICAgICAgIHJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudCwgJ2RyYWdlZS1hY3RpdmUnKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcblxuICAgIGVtdWxhdGlvbkRyYWdnYWJsZS5tb3ZlKG5ldyBQb2ludChcbiAgICAgIHRoaXMucGlubmVkUG9zaXRpb24ueCArIHBhcmVudFJlY3QubGVmdCArIHdpbmRvdy5zY3JvbGxYLFxuICAgICAgdGhpcy5waW5uZWRQb3NpdGlvbi55ICsgcGFyZW50UmVjdC50b3AgKyB3aW5kb3cuc2Nyb2xsWVxuICAgICkpXG5cbiAgICBlbXVsYXRpb25EcmFnZ2FibGUuZHJhZ1N0YXJ0KGV2ZW50KVxuICB9XG5cbiAgZHJhZ0VuZEFjdGlvbigpIHtcbiAgICB0aGlzLnBpblBvc2l0aW9uKHRoaXMucG9zaXRpb24pXG4gIH1cblxuICBnZXRSZWN0YW5nbGUoKSB7XG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUodGhpcy5wb3NpdGlvbiwgdGhpcy5nZXRTaXplKCkpXG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIHRoaXMuZ2V0U2l6ZSh0cnVlKVxuICAgIGlmICh0aGlzLmJvdW5kaW5nLnJlZnJlc2gpIHtcbiAgICAgIHRoaXMuYm91bmRpbmcucmVmcmVzaCgpXG4gICAgfVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmhhbmRsZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0KVxuICAgIHRoaXMuaGFuZGxlci5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIHRoaXMuX25hdGl2ZURyYWdTdGFydClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIHRoaXMuX25hdGl2ZURyYWdNb3ZlKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIHRoaXMucmVzZXRFbWl0dGVyKClcblxuICAgIGNvbnN0IGluZGV4ID0gZHJhZ2dhYmxlcy5pbmRleE9mKHRoaXMpXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIGRyYWdnYWJsZXMuc3BsaWNlKGluZGV4LCAxKVxuICAgIH1cbiAgfVxuXG4gIGdldCBwYXJlbnQoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9wYXJlbnQgPSB0aGlzLl9wYXJlbnQgfHwgdGhpcy5vcHRpb25zLnBhcmVudCB8fCBnZXREZWZhdWx0UGFyZW50KHRoaXMuZWxlbWVudCkpXG4gIH1cblxuICBnZXQgYm91bmRpbmcoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9ib3VuZGluZyA9IHRoaXMuX2JvdW5kaW5nIHx8IHRoaXMub3B0aW9ucy5ib3VuZGluZyB8fCBuZXcgQm91bmRUb0VsZW1lbnQodGhpcy5wYXJlbnQsIHRoaXMucGFyZW50KSlcbiAgfVxuXG4gIGdldCBoYW5kbGVyKCkge1xuICAgIGlmICghdGhpcy5faGFuZGxlcikge1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuaGFuZGxlciA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhpcy5faGFuZGxlciA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKHRoaXMub3B0aW9ucy5oYW5kbGVyKSB8fCB0aGlzLmVsZW1lbnRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZXIgPSB0aGlzLm9wdGlvbnMuaGFuZGxlciB8fCB0aGlzLmVsZW1lbnRcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5faGFuZGxlclxuICB9XG5cbiAgZ2V0IG5hdGl2ZURyYWdBbmREcm9wKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMubmF0aXZlRHJhZ0FuZERyb3AgfHwgZmFsc2VcbiAgfVxuXG4gIGdldCBlbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3BPblRvdWNoKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wT25Ub3VjaCB8fCB0cnVlXG4gIH1cblxuICBnZXQgZW5hYmxlKCkge1xuICAgIHJldHVybiB0aGlzLl9lbmFibGVcbiAgfVxuXG4gIHNldCBlbmFibGUoZW5hYmxlKSB7XG4gICAgaWYgKGVuYWJsZSkge1xuICAgICAgcmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50LCAnZHJhZ2VlLWRpc2FibGUnKVxuICAgIH0gZWxzZSB7XG4gICAgICBhZGRDbGFzcyh0aGlzLmVsZW1lbnQsICdkcmFnZWUtZGlzYWJsZScpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZSA9IGVuYWJsZVxuICB9XG59XG5cbkRyYWdnYWJsZS5lbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcihEcmFnZ2FibGUpXG5EcmFnZ2FibGUuZW1pdHRlci5vbignZHJhZ2dhYmxlOmNyZWF0ZScsIGFkZFRvRGVmYXVsdFNjb3BlKVxuIiwiaW1wb3J0IHJlbW92ZUl0ZW0gZnJvbSAnLi91dGlscy9yZW1vdmUtYXJyYXktaXRlbSdcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudEVtaXR0ZXInXG5pbXBvcnQge1xuICBnZXREaXN0YW5jZSxcbiAgaW5kZXhPZk5lYXJlc3RQb2ludFxufSBmcm9tICcuL2dlb21ldHJ5L2Rpc3RhbmNlcydcblxuaW1wb3J0IERyYWdnYWJsZSBmcm9tICcuL2RyYWdnYWJsZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdCBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKGRyYWdnYWJsZXMsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcih1bmRlZmluZWQsIG9wdGlvbnMpXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICB0aW1lRW5kOiAyMDAsXG4gICAgICB0aW1lRXhjYW5nZTogNDAwLFxuICAgICAgcmFkaXVzOiAzMCxcbiAgICAgIGdldERpc3RhbmNlOiBnZXREaXN0YW5jZVxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0aGlzLmRyYWdnYWJsZXMgPSBkcmFnZ2FibGVzXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5fZW5hYmxlID0gdHJ1ZVxuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKHRoaXMuaW5pdERyYWdnYWJsZSwgdGhpcylcbiAgfVxuXG4gIGluaXREcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgZHJhZ2dhYmxlLmVuYWJsZSA9IHRoaXMuX2VuYWJsZVxuICAgIGRyYWdnYWJsZS5vbignZHJhZzptb3ZlJywgKCkgPT4gdGhpcy5vbk1vdmUoZHJhZ2dhYmxlKSlcbiAgICBkcmFnZ2FibGUuZHJhZ0VuZEFjdGlvbiA9ICgpID0+IGRyYWdnYWJsZS5waW5Qb3NpdGlvbihkcmFnZ2FibGUucGlubmVkUG9zaXRpb24sIHRoaXMub3B0aW9ucy50aW1lRW5kKVxuICB9XG5cbiAgb25Nb3ZlKGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IHNvcnRlZERyYWdnYWJsZXMgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuICAgIGNvbnN0IHBpbm5lZFBvc2l0aW9ucyA9IHNvcnRlZERyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbilcblxuICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IHNvcnRlZERyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpXG4gICAgY29uc3QgdGFyZ2V0SW5kZXggPSBpbmRleE9mTmVhcmVzdFBvaW50KHBpbm5lZFBvc2l0aW9ucywgZHJhZ2dhYmxlLnBvc2l0aW9uLCB0aGlzLm9wdGlvbnMucmFkaXVzLCB0aGlzLm9wdGlvbnMuZ2V0RGlzdGFuY2UpXG5cbiAgICBpZiAodGFyZ2V0SW5kZXggIT09IC0xICYmIGN1cnJlbnRJbmRleCAhPT0gdGFyZ2V0SW5kZXgpIHtcbiAgICAgIGlmICh0YXJnZXRJbmRleCA8IGN1cnJlbnRJbmRleCkge1xuICAgICAgICBmb3IgKGxldCBpPXRhcmdldEluZGV4OyBpPGN1cnJlbnRJbmRleDsgaSsrKSB7XG4gICAgICAgICAgc29ydGVkRHJhZ2dhYmxlc1tpXS5waW5Qb3NpdGlvbihwaW5uZWRQb3NpdGlvbnNbaSsxXSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGxldCBpPWN1cnJlbnRJbmRleDsgaTx0YXJnZXRJbmRleDsgaSsrKSB7XG4gICAgICAgICAgc29ydGVkRHJhZ2dhYmxlc1tpKzFdLnBpblBvc2l0aW9uKHBpbm5lZFBvc2l0aW9uc1tpXSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChkcmFnZ2FibGUubmF0aXZlRHJhZ0FuZERyb3ApIHtcbiAgICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKHBpbm5lZFBvc2l0aW9uc1t0YXJnZXRJbmRleF0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24gPSBwaW5uZWRQb3NpdGlvbnNbdGFyZ2V0SW5kZXhdXG4gICAgICB9XG5cbiAgICAgIHRoaXMuZW1pdCgnbGlzdDpjaGFuZ2UnKVxuICAgIH1cbiAgfVxuXG4gIGdldEN1cnJlbnRQaW5uZWRQb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uLmNsb25lKCkpXG4gIH1cblxuICBnZXRTb3J0ZWREcmFnZ2FibGVzKCkge1xuICAgIGNvbnN0IGluaXRpYWxQb3NpdGlvbnMgPSB0aGlzLmRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5pbml0aWFsUG9zaXRpb24pXG5cbiAgICBjb25zdCBzb3J0ZWREcmFnZ2FibGVzID0gaW5pdGlhbFBvc2l0aW9ucy5tYXAoKHBvc2l0aW9uKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5kcmFnZ2FibGVzLmZpbHRlcigoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24uY29tcGFyZShwb3NpdGlvbikpWzBdXG4gICAgfSlcblxuICAgIHJldHVybiBzb3J0ZWREcmFnZ2FibGVzXG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucmVzZXRQb3NpdGlvblRvSW5pdGlhbCgpKVxuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucmVmcmVzaCgpKVxuICB9XG5cbiAgYWRkKGRyYWdnYWJsZXMpIHtcbiAgICBpZiAoIShkcmFnZ2FibGVzIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgICBkcmFnZ2FibGVzID0gW2RyYWdnYWJsZXNdXG4gICAgfVxuICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB0aGlzLmluaXREcmFnZ2FibGUoZHJhZ2dhYmxlKSlcbiAgICB0aGlzLmRyYWdnYWJsZXMgPSB0aGlzLmRyYWdnYWJsZXMuY29uY2F0KGRyYWdnYWJsZXMpXG4gIH1cblxuICByZW1vdmUoZHJhZ2dhYmxlcykge1xuICAgIGNvbnN0IGluaXRpYWxQb3NpdGlvbnMgPSB0aGlzLmRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5pbml0aWFsUG9zaXRpb24pXG4gICAgY29uc3QgbGlzdCA9IFtdXG4gICAgY29uc3Qgc29ydGVkRHJhZ2dhYmxlcyA9IHRoaXMuZ2V0U29ydGVkRHJhZ2dhYmxlcygpXG5cbiAgICBpZiAoIShkcmFnZ2FibGVzIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgICBkcmFnZ2FibGVzID0gW2RyYWdnYWJsZXNdXG4gICAgfVxuXG4gICAgZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5yZXNldE9uKCdkcmFnOmVuZCcpXG4gICAgICBkcmFnZ2FibGUucmVzZXRPbignZHJhZzptb3ZlJylcbiAgICAgIHJlbW92ZUl0ZW0odGhpcy5kcmFnZ2FibGVzLCBkcmFnZ2FibGUpXG4gICAgfSlcblxuICAgIGxldCBqID0gMFxuICAgIHNvcnRlZERyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBpZiAodGhpcy5kcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTEpIHtcbiAgICAgICAgaWYgKGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbiAhPT0gaW5pdGlhbFBvc2l0aW9uc1tqXSkge1xuICAgICAgICAgIGRyYWdnYWJsZS5waW5Qb3NpdGlvbihpbml0aWFsUG9zaXRpb25zW2pdLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICAgIH1cbiAgICAgICAgZHJhZ2dhYmxlLmluaXRpYWxQb3NpdGlvbiA9IGluaXRpYWxQb3NpdGlvbnNbal1cbiAgICAgICAgaisrXG4gICAgICAgIGxpc3QucHVzaChkcmFnZ2FibGUpXG4gICAgICB9XG4gICAgfSlcbiAgICB0aGlzLmRyYWdnYWJsZXMgPSBsaXN0XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLnJlbW92ZSh0aGlzLmRyYWdnYWJsZXMuc2xpY2UoKSlcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLmRlc3Ryb3koKSlcbiAgfVxuXG4gIGdldCBwb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q3VycmVudFBpbm5lZFBvc2l0aW9ucygpXG4gIH1cblxuICBzZXQgcG9zaXRpb25zKHBvc2l0aW9ucykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSAnd3JvbmcgYXJyYXkgbGVuZ3RoJ1xuICAgIGlmIChwb3NpdGlvbnMubGVuZ3RoID09PSB0aGlzLmRyYWdnYWJsZXMubGVuZ3RoKSB7XG4gICAgICBwb3NpdGlvbnMuZm9yRWFjaCgocG9pbnQsIGkpID0+IHtcbiAgICAgICAgdGhpcy5kcmFnZ2FibGVzW2ldLnBpblBvc2l0aW9uKHBvaW50KVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbWVzc2FnZVxuICAgIH1cbiAgfVxuXG4gIGdldCBlbmFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZVxuICB9XG5cbiAgc2V0IGVuYWJsZShlbmFibGUpIHtcbiAgICB0aGlzLl9lbmFibGUgPSBlbmFibGVcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUuZW5hYmxlID0gZW5hYmxlXG4gICAgfSlcbiAgfVxuXG4gIHN0YXRpYyBmYWN0b3J5KHBhcmVudEVsZW1lbnQsIGVsZW1lbnRzLCBvcHRpb25zPXt9KSB7XG4gICAgY29uc3QgZHJhZ2dhYmxlcyA9IFsuLi5lbGVtZW50c10ubWFwKChlbGVtZW50KSA9PiB7XG4gICAgICByZXR1cm4gbmV3IERyYWdnYWJsZShlbGVtZW50LCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgcGFyZW50OiBwYXJlbnRFbGVtZW50XG4gICAgICB9LCBvcHRpb25zLmRyYWdnYWJsZSB8fCB7fSkpXG4gICAgfSlcbiAgICByZXR1cm4gbmV3IExpc3QoZHJhZ2dhYmxlcywgb3B0aW9ucy5saXN0IHx8IHt9KVxuICB9XG59XG4iLCJmdW5jdGlvbiBzZXRTdHlsZShlbGVtZW50LCBzdHlsZSkge1xuICBzdHlsZSA9IHN0eWxlIHx8IHt9XG4gIGxldCBjc3NUZXh0ID0gJydcbiAgZm9yIChjb25zdCBrZXkgaW4gc3R5bGUpIHtcbiAgICBpZiAoc3R5bGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgY3NzVGV4dCArPSBrZXkgKyAnOiAnICsgc3R5bGVba2V5XSArICc7ICdcbiAgICB9XG4gIH1cblxuICBlbGVtZW50LnN0eWxlLmNzc1RleHQgPSBjc3NUZXh0XG59XG5cbmZ1bmN0aW9uIGFwcGVuZEZpcnN0Q2hpbGQoZWxlbWVudCwgbm9kZSkge1xuICBpZiAoZWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgZWxlbWVudC5pbnNlcnRCZWZvcmUobm9kZSwgZWxlbWVudC5maXJzdENoaWxkKVxuICB9IGVsc2Uge1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQobm9kZSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVDYW52YXMoYXJlYSwgcmVjdGFnbGUpIHtcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJylcbiAgaWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGFyZWEpLnBvc2l0aW9uID09PSAnc3RhdGljJykge1xuICAgIGFyZWEuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnXG4gIH1cblxuICBjYW52YXMuc2V0QXR0cmlidXRlKCd3aWR0aCcsIHJlY3RhZ2xlLnNpemUueCArICdweCcpXG4gIGNhbnZhcy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIHJlY3RhZ2xlLnNpemUueSArICdweCcpXG4gIHNldFN0eWxlKGNhbnZhcywge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGxlZnQ6IHJlY3RhZ2xlLnBvc2l0aW9uLnkgKyAncHgnLFxuICAgIHRvcDogcmVjdGFnbGUucG9zaXRpb24ueSArICdweCcsXG4gICAgd2lkdGg6IHJlY3RhZ2xlLnNpemUueCArICdweCcsXG4gICAgaGVpZ2h0OiByZWN0YWdsZS5zaXplLnkgKyAncHgnXG4gIH0pXG4gIGFwcGVuZEZpcnN0Q2hpbGQoYXJlYSwgY2FudmFzKVxuICByZXR1cm4gY2FudmFzXG59XG4iLCJpbXBvcnQgY3JlYXRlQ2FudmFzIGZyb20gJy4vdXRpbHMvY3JlYXRlLWNhbnZhcydcbmltcG9ydCBQb2ludCBmcm9tICcuL2dlb21ldHJ5L3BvaW50J1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tICcuL2dlb21ldHJ5L3JlY3RhbmdsZSdcblxuaW1wb3J0IHsgZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtIH0gZnJvbSAnLi9nZW9tZXRyeS9hbmdsZXMnXG5pbXBvcnQgeyBCb3VuZFRvTGluZSB9IGZyb20gJy4vYm91bmRpbmcnXG5pbXBvcnQgRHJhZ2dhYmxlIGZyb20gJy4vZHJhZ2dhYmxlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTcGlkZXIge1xuICBjb25zdHJ1Y3RvcihhcmVhLCBlbGVtZW50cywgb3B0aW9ucz17fSkge1xuICAgIGNvbnN0IGFyZWFSZWN0YW5nbGUgPSBSZWN0YW5nbGUuZnJvbUVsZW1lbnQoYXJlYSwgYXJlYSlcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGFuZ2xlOiAwLFxuICAgICAgZEFuZ2xlOiAyICogTWF0aC5QSSAvIGVsZW1lbnRzLmxlbmd0aCxcbiAgICAgIGNlbnRlcjogYXJlYVJlY3RhbmdsZS5nZXRDZW50ZXIoKSxcbiAgICAgIHN0YXJ0UmFkaXVzOiA1MCxcbiAgICAgIGVuZFJhZGl1czogYXJlYVJlY3RhbmdsZS5nZXRNaW5TaWRlKCkgLyAyLFxuICAgICAgbGluZVdpZHRoOiAyLFxuICAgICAgc3Ryb2tlU3R5bGU6ICcjZmY1NTc3JyxcbiAgICAgIGZpbGxTdHlsZTogJ3JnYmEoMTUwLDI1NSw1MCwwLjgpJ1xuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0aGlzLmFyZWEgPSBhcmVhXG4gICAgdGhpcy5hcmVhUmVjdGFuZ2xlID0gYXJlYVJlY3RhbmdsZVxuICAgIHRoaXMuaW5pdChlbGVtZW50cylcbiAgfVxuXG4gIGluaXQoZWxlbWVudHMpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNyZWF0ZUNhbnZhcyh0aGlzLmFyZWEsIHRoaXMuYXJlYVJlY3RhbmdsZSlcbiAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG5cbiAgICB0aGlzLmRyYWdnYWJsZXMgPSBlbGVtZW50cy5tYXAoKGVsZW1lbnQsIGkpID0+IHtcbiAgICAgIGNvbnN0IGFuZ2xlID0gdGhpcy5vcHRpb25zLmFuZ2xlICsgaSAqIHRoaXMub3B0aW9ucy5kQW5nbGVcbiAgICAgIGNvbnN0IGhhbGZTaXplID0gUG9pbnQuZWxlbWVudFNpemUoZWxlbWVudCkubXVsdCgwLjUpXG4gICAgICBjb25zdCBzdGFydCA9IGdldFBvaW50RnJvbVJhZGlhbFN5c3RlbShhbmdsZSwgdGhpcy5vcHRpb25zLnN0YXJ0UmFkaXVzLCB0aGlzLm9wdGlvbnMuY2VudGVyKS5zdWIoaGFsZlNpemUpXG4gICAgICBjb25zdCBlbmQgPSBnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oYW5nbGUsIHRoaXMub3B0aW9ucy5lbmRSYWRpdXMsIHRoaXMub3B0aW9ucy5jZW50ZXIpLnN1YihoYWxmU2l6ZSlcblxuICAgICAgcmV0dXJuIG5ldyBEcmFnZ2FibGUoZWxlbWVudCwge1xuICAgICAgICBwYXJlbnQ6IHRoaXMuYXJlYSxcbiAgICAgICAgYm91bmRpbmc6IG5ldyBCb3VuZFRvTGluZShzdGFydCwgZW5kKSxcbiAgICAgICAgcG9zaXRpb246IHN0YXJ0LFxuICAgICAgICBvbjoge1xuICAgICAgICAgICdkcmFnOm1vdmUnOiAoKSA9PiB0aGlzLmRyYXcoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG5cbiAgICB0aGlzLmlzSW5pdCA9IHRydWVcbiAgICB0aGlzLmRyYXcoKVxuICB9XG5cbiAgZHJhdygpIHtcbiAgICBpZiAoIXRoaXMuaXNJbml0KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmFyZWFSZWN0YW5nbGUuc2l6ZS54LCB0aGlzLmFyZWFSZWN0YW5nbGUuc2l6ZS55KVxuICAgIHRoaXMuY29udGV4dC5iZWdpblBhdGgoKVxuXG4gICAgbGV0IHBvaW50ID0gdGhpcy5kcmFnZ2FibGVzWzBdLmdldENlbnRlcigpXG4gICAgdGhpcy5jb250ZXh0Lm1vdmVUbyhwb2ludC54LCBwb2ludC55KVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRyYWdnYWJsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHBvaW50ID0gdGhpcy5kcmFnZ2FibGVzW2ldLmdldENlbnRlcigpXG4gICAgICB0aGlzLmNvbnRleHQubGluZVRvKHBvaW50LngsIHBvaW50LnkpXG4gICAgfVxuICAgIHRoaXMuY29udGV4dC5jbG9zZVBhdGgoKVxuICAgIHRoaXMuY29udGV4dC5saW5lV2lkdGggPSB0aGlzLm9wdGlvbnMubGluZVdpZHRoXG4gICAgdGhpcy5jb250ZXh0LnN0cm9rZVN0eWxlID0gdGhpcy5vcHRpb25zLnN0cm9rZVN0eWxlXG4gICAgdGhpcy5jb250ZXh0LnN0cm9rZSgpXG4gICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IHRoaXMub3B0aW9ucy5maWxsU3R5bGVcbiAgICB0aGlzLmNvbnRleHQuZmlsbCgpXG4gIH1cbn1cbiIsImltcG9ydCBEcmFnZ2FibGUgZnJvbSAnLi9kcmFnZ2FibGUnXG5pbXBvcnQgeyBCb3VuZFRvQXJjIH0gZnJvbSAnLi9ib3VuZGluZydcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudEVtaXR0ZXInXG5cbmltcG9ydCBSZWN0YW5nbGUgZnJvbSAnLi9nZW9tZXRyeS9yZWN0YW5nbGUnXG5pbXBvcnQge1xuICBnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0sXG4gIGdldEFuZ2xlLFxuICBub3JtYWxpemVBbmdsZVxufSBmcm9tICcuL2dlb21ldHJ5L2FuZ2xlcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXJjU2xpZGVyIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoYXJlYSwgZWxlbWVudCwgb3B0aW9ucz17fSkge1xuICAgIHN1cGVyKHVuZGVmaW5lZCwgb3B0aW9ucylcbiAgICBjb25zdCBhcmVhUmVjdGFuZ2xlID0gUmVjdGFuZ2xlLmZyb21FbGVtZW50KGFyZWEsIGFyZWEpXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjZW50ZXI6IGFyZWFSZWN0YW5nbGUuZ2V0Q2VudGVyKCksXG4gICAgICByYWRpdXM6IGFyZWFSZWN0YW5nbGUuZ2V0TWluU2lkZSgpIC8gMixcbiAgICAgIHN0YXJ0QW5nbGU6IE1hdGguUEksXG4gICAgICBlbmRBbmdsZTogMCxcbiAgICAgIGFuZ2xlczogW01hdGguUEksIC1NYXRoLlBJIC8gNCwgMCwgTWF0aC5QSSAvIDQsIE1hdGguUEkgLyAyXSxcbiAgICAgIHRpbWU6IDUwMFxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0aGlzLnNoaWZ0ZWRDZW50ZXIgPSB0aGlzLm9wdGlvbnMuY2VudGVyXG4gICAgdGhpcy5hcmVhID0gYXJlYVxuICAgIHRoaXMuaW5pdChlbGVtZW50KVxuICB9XG5cbiAgaW5pdChlbGVtZW50KSB7XG4gICAgY29uc3QgYW5nbGUgPSB0aGlzLm9wdGlvbnMuc3RhcnRBbmdsZVxuICAgIGNvbnN0IHBvc2l0aW9uID0gZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKFxuICAgICAgYW5nbGUsXG4gICAgICB0aGlzLm9wdGlvbnMucmFkaXVzLFxuICAgICAgdGhpcy5zaGlmdGVkQ2VudGVyXG4gICAgKVxuXG4gICAgdGhpcy5hbmdsZSA9IGFuZ2xlXG4gICAgdGhpcy5kcmFnZ2FibGUgPSBuZXcgRHJhZ2dhYmxlKGVsZW1lbnQsIHtcbiAgICAgIHBhcmVudDogdGhpcy5hcmVhLFxuICAgICAgYm91bmRpbmc6IG5ldyBCb3VuZFRvQXJjKFxuICAgICAgICB0aGlzLnNoaWZ0ZWRDZW50ZXIsXG4gICAgICAgIHRoaXMub3B0aW9ucy5yYWRpdXMsXG4gICAgICAgIHRoaXMub3B0aW9ucy5zdGFydEFuZ2xlLFxuICAgICAgICB0aGlzLm9wdGlvbnMuZW5kQW5nbGVcbiAgICAgICksXG4gICAgICBwb3NpdGlvbjogcG9zaXRpb24sXG4gICAgICBvbjoge1xuICAgICAgICAnZHJhZzptb3ZlJzogKCkgPT4gdGhpcy5jaGFuZ2UoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICB1cGRhdGVBbmdsZSgpIHtcbiAgICB0aGlzLmFuZ2xlID0gZ2V0QW5nbGUodGhpcy5zaGlmdGVkQ2VudGVyLCB0aGlzLmRyYWdnYWJsZS5wb3NpdGlvbilcbiAgfVxuXG4gIGNoYW5nZSgpIHtcbiAgICB0aGlzLnVwZGF0ZUFuZ2xlKClcbiAgICAvLyAgICAgIHZhciBhbmdsZSA9IEdlb21ldHJ5LmdldE5lYXJlc3RBbmdsZSh0aGlzLm9wdGlvbnMuYW5nbGVzLCB0aGlzLmFuZ2xlKTtcbiAgICAvLyAgICAgIHRoaXMuc2V0QW5nbGUoYW5nbGUsdGhpcy5vcHRpb25zLnRpbWUpO1xuICAgIHRoaXMuZW1pdCgnYXJjc2xpZGVyOmNoYW5nZScsIHsgYW5nbGU6IHRoaXMuYW5nbGUgfSlcbiAgfVxuXG4gIHNldEFuZ2xlKGFuZ2xlLCB0aW1lKSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oXG4gICAgICB0aGlzLmFuZ2xlLFxuICAgICAgdGhpcy5vcHRpb25zLnJhZGl1cyxcbiAgICAgIHRoaXMuc2hpZnRlZENlbnRlclxuICAgIClcbiAgICB0aGlzLmFuZ2xlID0gbm9ybWFsaXplQW5nbGUoYW5nbGUsIHBvc2l0aW9uKVxuICAgIHRoaXMuZHJhZ2dhYmxlLnBpblBvc2l0aW9uKHBvc2l0aW9uLCB0aW1lfHwwKVxuICAgIHRoaXMuZW1pdCgnYXJjc2xpZGVyOmNoYW5nZScsIHRoaXMuYW5nbGUpXG4gIH1cbn1cbiIsImltcG9ydCBjcmVhdGVDYW52YXMgZnJvbSAnLi91dGlscy9jcmVhdGUtY2FudmFzJ1xuaW1wb3J0IHJhbmdlIGZyb20gJy4vdXRpbHMvcmFuZ2UnXG5pbXBvcnQgUG9pbnQgZnJvbSAnLi9nZW9tZXRyeS9wb2ludCdcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSAnLi9nZW9tZXRyeS9yZWN0YW5nbGUnXG5cbmltcG9ydCB7IGdldERpc3RhbmNlIH0gZnJvbSAnLi9nZW9tZXRyeS9kaXN0YW5jZXMnXG5cbmltcG9ydCB7XG4gIHRvUmFkaWFuLFxuICBnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0sXG4gIGdldEFuZ2xlLFxuICBub3JtYWxpemVBbmdsZVxufSBmcm9tICcuL2dlb21ldHJ5L2FuZ2xlcydcblxuaW1wb3J0IERyYWdnYWJsZSBmcm9tICcuL2RyYWdnYWJsZSdcbmltcG9ydCB7IEJvdW5kVG9BcmMgfSBmcm9tICcuL2JvdW5kaW5nJ1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50RW1pdHRlcidcblxuY29uc3Qgcm5kID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkqMjU1KVxufVxuXG5jb25zdCB0b0hleFN0cmluZyA9IGZ1bmN0aW9uKGRpZ2l0KSB7XG4gIGxldCBzdHIgPSBkaWdpdC50b1N0cmluZygxNilcbiAgd2hpbGUgKHN0ci5sZW5ndGggPCAyKSB7XG4gICAgc3RyID0gJzAnICsgc3RyXG4gIH1cbiAgcmV0dXJuIHN0clxufVxuXG5mdW5jdGlvbiByYW5kb21Db2xvcigpIHtcbiAgcmV0dXJuIGAjJHt0b0hleFN0cmluZyhybmQoKSl9JHt0b0hleFN0cmluZyhybmQoKSl9JHt0b0hleFN0cmluZyhybmQoKSl9YFxufVxuXG5mdW5jdGlvbiBnZXRBcnJheVdpdGhCb3VuZEluZGV4ZXMoaW5kZXgsIGxlbmd0aCkge1xuICBjb25zdCByZXRJbmRleGVzID0gW11cbiAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgIHJldEluZGV4ZXMucHVzaChpbmRleClcbiAgICByZXRJbmRleGVzLnB1c2goKGluZGV4ICsgMSkgJSBsZW5ndGgpXG4gIH1cblxuICByZXR1cm4gcmV0SW5kZXhlc1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFydCBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yIChhcmVhLCBlbGVtZW50cywgb3B0aW9ucz17fSkge1xuICAgIHN1cGVyKHVuZGVmaW5lZCwgb3B0aW9ucylcbiAgICBjb25zdCBhcmVhUmVjdGFuZ2xlID0gUmVjdGFuZ2xlLmZyb21FbGVtZW50KGFyZWEsIGFyZWEpXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjZW50ZXI6IGFyZWFSZWN0YW5nbGUuZ2V0Q2VudGVyKCksXG4gICAgICByYWRpdXM6IGFyZWFSZWN0YW5nbGUuZ2V0TWluU2lkZSgpIC8gMixcbiAgICAgIHRvdWNoUmFkaXVzOiBhcmVhUmVjdGFuZ2xlLmdldE1pblNpZGUoKSAvIDIsXG4gICAgICBib3VuZEFuZ2xlOiBNYXRoLlBJIC8gOSxcbiAgICAgIGZpbGxTdHlsZXM6IHJhbmdlKDAsIGVsZW1lbnRzLmxlbmd0aCkubWFwKCgpID0+IHJhbmRvbUNvbG9yKCkpLFxuICAgICAgaW5pdEFuZ2xlczogcmFuZ2UoLTkwLCAyNzAsIDM2MCAvIGVsZW1lbnRzLmxlbmd0aCkubWFwKChhbmdsZSkgPT4gdG9SYWRpYW4oYW5nbGUpKSxcbiAgICAgIGxpbWl0SW1nOiBudWxsLFxuICAgICAgbGltaXRJbWdPZmZzZXQ6IG5ldyBQb2ludCgwLCAwKVxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0aGlzLmFyZWEgPSBhcmVhXG4gICAgdGhpcy5hcmVhUmVjdGFuZ2xlID0gYXJlYVJlY3RhbmdsZVxuICAgIHRoaXMuaW5pdChlbGVtZW50cylcbiAgfVxuXG4gIGluaXQoZWxlbWVudHMpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNyZWF0ZUNhbnZhcyh0aGlzLmFyZWEsIHRoaXMuYXJlYVJlY3RhbmdsZSlcbiAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gZWxlbWVudHMubWFwKChlbGVtZW50LCBpKSA9PiB7XG4gICAgICBjb25zdCBhbmdsZSA9IHRoaXMub3B0aW9ucy5pbml0QW5nbGVzW2ldXG4gICAgICBjb25zdCBoYWxmU2l6ZSA9IFBvaW50LmVsZW1lbnRTaXplKGVsZW1lbnQpLm11bHQoMC41KVxuICAgICAgY29uc3QgcG9zaXRpb24gPSBnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oXG4gICAgICAgIGFuZ2xlLFxuICAgICAgICB0aGlzLm9wdGlvbnMudG91Y2hSYWRpdXMsXG4gICAgICAgIHRoaXMub3B0aW9ucy5jZW50ZXIuc3ViKGhhbGZTaXplKVxuICAgICAgKVxuXG4gICAgICByZXR1cm4gbmV3IERyYWdnYWJsZShlbGVtZW50LCB7XG4gICAgICAgIHBhcmVudDogdGhpcy5hcmVhLFxuICAgICAgICBib3VuZGluZzogbmV3IEJvdW5kVG9BcmMoXG4gICAgICAgICAgdGhpcy5vcHRpb25zLmNlbnRlci5zdWIoaGFsZlNpemUpLFxuICAgICAgICAgIHRoaXMub3B0aW9ucy50b3VjaFJhZGl1cyxcbiAgICAgICAgICB0aGlzLmdldEJvdW5kQW5nbGUoaSwgZmFsc2UpLFxuICAgICAgICAgIHRoaXMuZ2V0Qm91bmRBbmdsZShpLCB0cnVlKVxuICAgICAgICApLFxuICAgICAgICBwb3NpdGlvbjogcG9zaXRpb24sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgJ2RyYWc6bW92ZSc6ICgpID0+IHRoaXMuZHJhdygpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcblxuICAgIHRoaXMuaXNJbml0ID0gdHJ1ZVxuICAgIHRoaXMuZHJhdygpXG4gIH1cblxuICB1cGRhdGVBbmdsZXMoKSB7XG4gICAgdGhpcy5hbmdsZXMgPSB0aGlzLmRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGNvbnN0IGhhbGZTaXplID0gZHJhZ2dhYmxlLmdldFNpemUoKS5tdWx0KDAuNSlcbiAgICAgIHJldHVybiBnZXRBbmdsZSh0aGlzLm9wdGlvbnMuY2VudGVyLnN1YihoYWxmU2l6ZSksIGRyYWdnYWJsZS5wb3NpdGlvbilcbiAgICB9KVxuICB9XG5cbiAgZ2V0Qm91bmRBbmdsZShpbmRleCwgaXNDbG9zc2luZykge1xuICAgIGNvbnN0IHNpZ24gPSBpc0Nsb3NzaW5nID8gMSA6IC0xXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgbGV0IGkgPSAoaW5kZXggKyBzaWduKSAlIHRoaXMuYW5nbGVzLmxlbmd0aFxuICAgICAgaWYgKGkgPCAwKSB7XG4gICAgICAgIGkgKz0gdGhpcy5hbmdsZXMubGVuZ3RoXG4gICAgICB9XG4gICAgICByZXR1cm4gbm9ybWFsaXplQW5nbGUodGhpcy5hbmdsZXNbaV0gLSBzaWduICogdGhpcy5vcHRpb25zLmJvdW5kQW5nbGUpXG4gICAgfVxuICB9XG5cbiAgZHJhdygpIHtcbiAgICBpZiAoIXRoaXMuaXNJbml0KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZUFuZ2xlcygpXG4gICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmFyZWFSZWN0YW5nbGUuc2l6ZS54LCB0aGlzLmFyZWFSZWN0YW5nbGUuc2l6ZS55KVxuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChfZHJhZ2dhYmxlLCBpbmRleCkgPT4ge1xuICAgICAgdGhpcy5kcmF3QXJjKHRoaXMuY29udGV4dCwgdGhpcy5vcHRpb25zLmNlbnRlciwgdGhpcy5vcHRpb25zLnJhZGl1cywgaW5kZXgpXG4gICAgfSlcblxuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChfZHJhZ2dhYmxlLCBpbmRleCkgPT4ge1xuICAgICAgdGhpcy5kcmF3TGltaXRJbWcoaW5kZXgpXG4gICAgfSlcblxuICAgIHRoaXMuZW1pdCgnY2hhcnQ6ZHJhdycpXG4gIH1cblxuICBjcmVhdGVDbG9uZShlbGVtZW50LCBvcHRpb25zID0ge30pIHtcbiAgICBpZiAoIXRoaXMuaXNJbml0KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3QgcmVjdGFuZ2xlID0gUmVjdGFuZ2xlLmZyb21FbGVtZW50KGVsZW1lbnQsIGVsZW1lbnQpXG4gICAgY29uc3Qgb3B0cyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY2VudGVyOiByZWN0YW5nbGUuZ2V0Q2VudGVyKCksXG4gICAgICByYWRpdXM6IHJlY3RhbmdsZS5nZXRNaW5TaWRlKCkgLyAyLFxuICAgICAgZmlsbFN0eWxlczogdGhpcy5vcHRpb25zLmZpbGxTdHlsZXNcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgY29uc3QgY2FudmFzID0gY3JlYXRlQ2FudmFzKGVsZW1lbnQsIHJlY3RhbmdsZSlcbiAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJylcbiAgICBjb25zdCBjbG9uZU9iaiA9IHtcbiAgICAgIGRyYXc6ICgpID0+IHtcbiAgICAgICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgcmVjdGFuZ2xlLnNpemUueCwgcmVjdGFuZ2xlLnNpemUueSlcbiAgICAgICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKF9kcmFnZ2FibGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgdGhpcy5kcmF3QXJjKGNvbnRleHQsIG9wdHMuY2VudGVyLCBvcHRzLnJhZGl1cywgaW5kZXgpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICAgIGNsb25lT2JqLmRyYXcoKVxuICAgIHJldHVybiBjbG9uZU9ialxuICB9XG5cbiAgZ2V0RmlsbFN0eWxlKGluZGV4KSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuZmlsbFN0eWxlc1tpbmRleF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5maWxsU3R5bGVzW2luZGV4XSA9IHRoaXMub3B0aW9ucy5maWxsU3R5bGVzW2luZGV4XS5jYWxsKHRoaXMpXG4gICAgfVxuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZmlsbFN0eWxlc1tpbmRleF1cbiAgfVxuXG4gIGRyYXdBcmMoY29udGV4dCwgY2VudGVyLCByYWRpdXMsIGluZGV4KSB7XG4gICAgY29uc3Qgc3RhcnRBbmdsZSA9IHRoaXMuYW5nbGVzW2luZGV4XVxuICAgIGNvbnN0IGVuZEFuZ2xlID0gdGhpcy5hbmdsZXNbKGluZGV4KzEpICUgdGhpcy5hbmdsZXMubGVuZ3RoXVxuICAgIGNvbnN0IGNvbG9yID0gdGhpcy5nZXRGaWxsU3R5bGUoaW5kZXgpXG5cbiAgICBjb250ZXh0LmJlZ2luUGF0aCgpXG4gICAgY29udGV4dC5tb3ZlVG8oY2VudGVyLngsIGNlbnRlci55KVxuICAgIGNvbnRleHQuYXJjKGNlbnRlci54LCBjZW50ZXIueSwgcmFkaXVzLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSwgZmFsc2UpXG4gICAgY29udGV4dC5saW5lVG8oY2VudGVyLngsIGNlbnRlci55KVxuICAgIGNvbnRleHQuY2xvc2VQYXRoKClcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yXG4gICAgY29udGV4dC5maWxsKClcbiAgfVxuXG4gIGRyYXdMaW1pdEltZyhpbmRleCkge1xuICAgIGxldCBwb2ludCwgaW1nXG4gICAgaWYgKHRoaXMub3B0aW9ucy5saW1pdEltZykge1xuICAgICAgaW1nID0gdGhpcy5vcHRpb25zLmxpbWl0SW1nIGluc3RhbmNlb2YgQXJyYXkgPyB0aGlzLm9wdGlvbnMubGltaXRJbWdbaW5kZXhdIDogdGhpcy5vcHRpb25zLmxpbWl0SW1nXG4gICAgfVxuXG4gICAgaWYgKGltZykge1xuICAgICAgY29uc3QgYW5nbGUgPSBub3JtYWxpemVBbmdsZSh0aGlzLmFuZ2xlc1tpbmRleF0pXG4gICAgICBwb2ludCA9IG5ldyBQb2ludCgwLCAtaW1nLmhlaWdodCAvIDIpXG4gICAgICBwb2ludCA9IHBvaW50LmFkZCh0aGlzLm9wdGlvbnMubGltaXRJbWdPZmZzZXQpXG4gICAgICB0aGlzLmNvbnRleHQudHJhbnNsYXRlKHRoaXMuYXJlYVJlY3RhbmdsZS5zaXplLnggLyAyLCB0aGlzLmFyZWFSZWN0YW5nbGUuc2l6ZS55IC8gMilcbiAgICAgIHRoaXMuY29udGV4dC5yb3RhdGUoYW5nbGUpXG4gICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKGltZywgcG9pbnQueCwgcG9pbnQueSlcbiAgICAgIHRoaXMuY29udGV4dC5zZXRUcmFuc2Zvcm0oMSwgMCwgMCwgMSwgMCwgMClcbiAgICB9XG4gIH1cblxuICBnZXRBbmdsZXNEaWZmKCkge1xuICAgIGNvbnN0IGFuZ2xlcyA9IHRoaXMuYW5nbGVzLnNsaWNlKDEpXG4gICAgbGV0IGJhc2VBbmdsZSA9IHRoaXMuYW5nbGVzWzBdXG5cbiAgICBhbmdsZXMucHVzaChiYXNlQW5nbGUpXG4gICAgcmV0dXJuIGFuZ2xlcy5tYXAoKGFuZ2xlKSA9PiB7XG4gICAgICBjb25zdCBkaWZmQW5nbGUgPSBub3JtYWxpemVBbmdsZShhbmdsZSAtIGJhc2VBbmdsZSlcbiAgICAgIGJhc2VBbmdsZSA9IGFuZ2xlXG4gICAgICByZXR1cm4gZGlmZkFuZ2xlXG4gICAgfSlcbiAgfVxuXG4gIGdldFBlcmNlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0QW5nbGVzRGlmZigpLm1hcCgoZGlmZkFuZ2xlKSA9PiBkaWZmQW5nbGUgLyAoMiAqIE1hdGguUEkpKVxuICB9XG5cbiAgZ2V0QXJjQmlzZWN0cml4cygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRBbmdsZXNEaWZmKCkubWFwKChkaWZmQW5nbGUsIGkpID0+IHtcbiAgICAgIHJldHVybiBub3JtYWxpemVBbmdsZSh0aGlzLmFuZ2xlc1tpXSArIGRpZmZBbmdsZSAvIDIpXG4gICAgfSlcbiAgfVxuXG4gIGdldEFyY09uUG9pbnQocG9pbnQpIHtcbiAgICBjb25zdCBhbmdsZSA9IGdldEFuZ2xlKHRoaXMub3B0aW9ucy5jZW50ZXIsIHBvaW50KVxuICAgIGNvbnN0IHJhZGl1cyA9IGdldERpc3RhbmNlKHRoaXMub3B0aW9ucy5jZW50ZXIsIHBvaW50KVxuXG4gICAgaWYgKHJhZGl1cyA+IHRoaXMub3B0aW9ucy5yYWRpdXMpIHtcbiAgICAgIHJldHVybiAtMVxuICAgIH1cblxuICAgIGxldCBvZmZzZXQgPSAtMSwgaSwgalxuICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLmFuZ2xlcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKG9mZnNldCA9PT0gLTEgfHwgdGhpcy5hbmdsZXNbb2Zmc2V0XSA+IHRoaXMuYW5nbGVzW2ldKSB7XG4gICAgICAgIG9mZnNldCA9IGlcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChpID0gMCwgaiA9IG9mZnNldDsgaSA8IHRoaXMuYW5nbGVzLmxlbmd0aDsgaSsrLCBqID0gKGkgKyBvZmZzZXQpICUgdGhpcy5hbmdsZXMubGVuZ3RoKSB7XG4gICAgICBpZiAoYW5nbGUgPCB0aGlzLmFuZ2xlc1tqXSkge1xuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoLS1qIDwgMCkge1xuICAgICAgaiArPSB0aGlzLmFuZ2xlcy5sZW5ndGhcbiAgICB9XG4gICAgcmV0dXJuIGpcbiAgfVxuXG4gIHNldEFuZ2xlcyhhbmdsZXMpIHtcbiAgICB0aGlzLmFuZ2xlcyA9IGFuZ2xlc1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUsIGkpID0+IHtcbiAgICAgIGNvbnN0IGFuZ2xlID0gdGhpcy5hbmdsZXNbaV1cbiAgICAgIGNvbnN0IGhhbGZTaXplID0gZHJhZ2dhYmxlLmdldFNpemUoKS5tdWx0KDAuNSlcbiAgICAgIGNvbnN0IHBvc2l0aW9uID0gZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKFxuICAgICAgICBhbmdsZSxcbiAgICAgICAgdGhpcy5vcHRpb25zLnRvdWNoUmFkaXVzLFxuICAgICAgICB0aGlzLm9wdGlvbnMuY2VudGVyLnN1YihoYWxmU2l6ZSlcbiAgICAgIClcblxuICAgICAgZHJhZ2dhYmxlLm1vdmVBbmRTYXZlKHBvc2l0aW9uKVxuICAgIH0pXG4gICAgdGhpcy5kcmF3KClcbiAgfVxuXG4gIHNldEFjdGl2ZUFyYyhpbmRleCkge1xuICAgIGNvbnN0IGVuYWJsZUluZGV4ZXMgPSBnZXRBcnJheVdpdGhCb3VuZEluZGV4ZXMoaW5kZXgsIHRoaXMuZHJhZ2dhYmxlcy5sZW5ndGgpXG4gICAgdGhpcy5hY3RpdmVBcmNJbmRleCA9IGluZGV4XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSwgaSkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLmVuYWJsZSA9IGVuYWJsZUluZGV4ZXMuaW5kZXhPZihpKSAhPT0gLTFcbiAgICB9KVxuICAgIHRoaXMuZHJhdygpXG4gIH1cbn1cbiIsImltcG9ydCBQb2ludCBmcm9tICcuL2dlb21ldHJ5L3BvaW50J1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tICcuL2dlb21ldHJ5L3BvaW50J1xuaW1wb3J0IERyYWdnYWJsZSBmcm9tICcuL2RyYWdnYWJsZSdcbmltcG9ydCBMaXN0IGZyb20gJy4vbGlzdCdcbmltcG9ydCBUYXJnZXQgZnJvbSAnLi90YXJnZXQnXG5pbXBvcnQgeyBzY29wZXMsIGRlZmF1bHRTY29wZSwgU2NvcGUsIHNjb3BlIH0gZnJvbSAnLi9zY29wZSdcbmltcG9ydCB7IE5vdENyb3NzaW5nU3RyYXRlZ3ksIEZsb2F0TGVmdFN0cmF0ZWd5LCBGbG9hdFJpZ2h0U3RyYXRlZ3kgfSBmcm9tICcuL3Bvc2l0aW9uaW5nJ1xuaW1wb3J0IFNwaWRlciBmcm9tICcuL3NwaWRlcidcbmltcG9ydCBBcmNTbGlkZXIgZnJvbSAnLi9hcmNzbGlkZXInXG5pbXBvcnQgQ2hhcnQgZnJvbSAnLi9jaGFydCdcbmltcG9ydCB7IGdldERpc3RhbmNlLCBnZXRYRGlmZmVyZW5jZSwgZ2V0WURpZmZlcmVuY2UsIHRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3RvcnkgfSBmcm9tICcuL2dlb21ldHJ5L2Rpc3RhbmNlcydcbmltcG9ydCB7IGFkZENsYXNzLCByZW1vdmVDbGFzcyB9IGZyb20gJy4vdXRpbHMvY2xhc3NlcydcbmltcG9ydCB7XG4gIEJvdW5kVG9SZWN0YW5nbGUsXG4gIEJvdW5kVG9FbGVtZW50LFxuICBCb3VuZFRvTGluZVgsXG4gIEJvdW5kVG9MaW5lWSxcbiAgQm91bmRUb0xpbmUsXG4gIEJvdW5kVG9DaXJjbGUsXG4gIEJvdW5kVG9BcmNcbn0gZnJvbSAnLi9ib3VuZGluZydcblxuY29uc3QgYm91bmQgPSB7XG4gIEJvdW5kVG9SZWN0YW5nbGUsXG4gIEJvdW5kVG9FbGVtZW50LFxuICBCb3VuZFRvTGluZVgsXG4gIEJvdW5kVG9MaW5lWSxcbiAgQm91bmRUb0xpbmUsXG4gIEJvdW5kVG9DaXJjbGUsXG4gIEJvdW5kVG9BcmNcbn1cblxuY29uc3QgZGlzdGFuY2UgPSB7XG4gIGdldERpc3RhbmNlLFxuICBnZXRYRGlmZmVyZW5jZSxcbiAgZ2V0WURpZmZlcmVuY2UsXG4gIHRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3Rvcnlcbn1cblxuZXhwb3J0IHtcbiAgRHJhZ2dhYmxlLFxuICBQb2ludCwgUmVjdGFuZ2xlLFxuICBMaXN0LFxuICBUYXJnZXQsXG4gIHNjb3BlcywgZGVmYXVsdFNjb3BlLCBTY29wZSwgc2NvcGUsXG4gIE5vdENyb3NzaW5nU3RyYXRlZ3ksIEZsb2F0TGVmdFN0cmF0ZWd5LCBGbG9hdFJpZ2h0U3RyYXRlZ3ksXG4gIFNwaWRlcixcbiAgQXJjU2xpZGVyLFxuICBDaGFydCxcbiAgYm91bmQsXG4gIGRpc3RhbmNlLFxuICBhZGRDbGFzcywgcmVtb3ZlQ2xhc3Ncbn1cbiJdLCJuYW1lcyI6WyJnZXRTdW1WYWx1ZU9mU3R5bGVSdWxlcyIsImVsZW1lbnQiLCJydWxlcyIsInJlZHVjZSIsInN1bSIsInJ1bGUiLCJwYXJzZUludCIsIndpbmRvdyIsImdldENvbXB1dGVkU3R5bGUiLCJQb2ludCIsIngiLCJ5IiwicCIsImsiLCJwYXJlbnQiLCJwYXJlbnROb2RlIiwiZWxlbWVudFJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJwYXJlbnRSZWN0IiwibGVmdCIsInRvcCIsImlzQ29udGVudEJveFNpemUiLCJ3aWR0aCIsImhlaWdodCIsImhhc0NsYXNzIiwiYyIsInJlIiwiUmVnRXhwIiwidGVzdCIsImNsYXNzTmFtZSIsImFkZENsYXNzIiwicmVwbGFjZSIsInJlbW92ZUNsYXNzIiwiZ2V0RGVmYXVsdFBhcmVudCIsInRhZ05hbWUiLCJFdmVudEVtaXR0ZXIiLCJjb250ZXh0Iiwib3B0aW9ucyIsImV2ZW50cyIsIm9uIiwiT2JqZWN0IiwiZW50cmllcyIsImV2ZW50TmFtZSIsImZuIiwiaW50ZXJydXB0ZWQiLCJhcmdzIiwic2xpY2UiLCJjYWxsIiwiYXJndW1lbnRzIiwiZnVuYyIsImFwcGx5IiwicHVzaCIsInVuc2hpZnQiLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJSZWN0YW5nbGUiLCJwb3NpdGlvbiIsInNpemUiLCJhZGQiLCJtdWx0IiwicmVjdCIsIk1hdGgiLCJtaW4iLCJtYXgiLCJzdWIiLCJyZWN0YW5nbGUiLCJpbmNsdWRlUG9pbnQiLCJnZXRQMyIsImF4aXMiLCJzZWxBeGlzIiwiY3Jvc3NSZWN0YW5nbGUiLCJhbmQiLCJ0aGlzQ2VudGVyIiwiZ2V0Q2VudGVyIiwicmVjdENlbnRlciIsInNpZ24iLCJvZmZzZXQiLCJlbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInN0eWxlIiwiaXNDb25zaWRlclRyYW5zbGF0ZSIsImVsZW1lbnRPZmZzZXQiLCJlbGVtZW50U2l6ZSIsImdldERpc3RhbmNlIiwicDEiLCJwMiIsImR4IiwiZHkiLCJzcXJ0IiwiZ2V0WERpZmZlcmVuY2UiLCJhYnMiLCJnZXRZRGlmZmVyZW5jZSIsInRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3RvcnkiLCJwb3ciLCJpbmRleE9mTmVhcmVzdFBvaW50IiwiYXJyIiwidmFsIiwicmFkaXVzIiwiZ2V0RGlzdGFuY2VGdW5jIiwiaSIsInRlbXAiLCJsZW5ndGgiLCJkaXJlY3RDcm9zc2luZyIsIkwxUDEiLCJMMVAyIiwiTDJQMSIsIkwyUDIiLCJrMSIsImsyIiwiYjEiLCJiMiIsImJvdW5kVG9MaW5lIiwiQSIsIkIiLCJQIiwiQVAiLCJBQiIsImFiMiIsImFwX2FiIiwidCIsImdldFBvaW50T25MaW5lQnlMZW5naHQiLCJMUDEiLCJMUDIiLCJsZW5naHQiLCJwZXJjZW50IiwiYWRkUG9pbnRUb0JvdW5kUG9pbnRzIiwiYm91bmRwb2ludHMiLCJwb2ludCIsImlzUmlnaHQiLCJyZXN1bHQiLCJmaWx0ZXIiLCJiUG9pbnQiLCJnZXRBbmdsZURpZmYiLCJhbHBoYSIsImJldGEiLCJtaW5BbmdsZSIsIm1heEFuZ2xlIiwiUEkiLCJnZXRBbmdsZSIsImRpZmYiLCJub3JtYWxpemVBbmdsZSIsImF0YW4yIiwidG9SYWRpYW4iLCJhbmdsZSIsImJvdW5kQW5nbGUiLCJkbWluIiwiZG1heCIsImdldFBvaW50RnJvbVJhZGlhbFN5c3RlbSIsImNlbnRlciIsImNvcyIsInNpbiIsIkJvdW5kIiwiX3NpemUiLCJCb3VuZFRvUmVjdGFuZ2xlIiwiY2FsY1BvaW50IiwiY2xvbmUiLCJyZWN0UDIiLCJCb3VuZFRvRWxlbWVudCIsImZyb21FbGVtZW50IiwiQm91bmRUb0xpbmVYIiwic3RhcnRZIiwiZW5kWSIsIkJvdW5kVG9MaW5lWSIsInN0YXJ0WCIsImVuZFgiLCJCb3VuZFRvTGluZSIsInN0YXJ0UG9pbnQiLCJlbmRQb2ludCIsInNvbWVLIiwiY29zQmV0YSIsInNpbkJldGEiLCJwb2ludDIiLCJuZXdFbmRQb2ludCIsInBvaW50Q3Jvc3NpbmciLCJCb3VuZFRvQ2lyY2xlIiwiQm91bmRUb0FyYyIsInN0YXJ0QW5nbGUiLCJlbmRBbmdsZSIsIl9zdGFydEFuZ2xlIiwiX2VuZEFuZ2xlIiwiYXJyYXkiLCJyYW5nZSIsInN0YXJ0Iiwic3RvcCIsInN0ZXAiLCJCYXNpY1N0cmF0ZWd5IiwiTm90Q3Jvc3NpbmdTdHJhdGVneSIsInJlY3RhbmdsZUxpc3QiLCJpbmRleGVzT2ZOZXdzIiwic3RhdGljUmVjdGFuZ2xlSW5kZXhlcyIsImluZGV4ZXMiLCJfcmVjdCIsImZvckVhY2giLCJyZW1vdmFibGUiLCJpbmRleE9mU3RhdGljIiwic3RhdGljUmVjdCIsIm1vdmVUb0JvdW5kIiwic29tZSIsImJvdW5kUmVjdCIsImdldFNxdWFyZSIsIm9kbERyYWdnYWJsZXNMaXN0IiwibmV3RHJhZ2dhYmxlcyIsImluZGV4T2ZOZXdzIiwiZHJhZ2dhYmxlcyIsImNvbmNhdCIsImRyYWdnYWJsZSIsIkZsb2F0TGVmdFN0cmF0ZWd5IiwiYXNzaWduIiwicGFkZGluZ1RvcExlZnQiLCJwYWRkaW5nQm90dG9tUmlnaHQiLCJ5R2FwQmV0d2VlbkRyYWdnYWJsZXMiLCJnZXRQb3NpdGlvbiIsIl9pbmRleGVzT2ZOZXdzIiwiZ2V0UDIiLCJib3VuZGFyeVBvaW50cyIsInJlY3RJbmRleCIsImlzVmFsaWQiLCJuZXdMaXN0IiwibGlzdE9sZFBvc2l0aW9uIiwibWFwIiwibmV3RHJhZ2dhYmxlIiwiRmxvYXRSaWdodFN0cmF0ZWd5IiwicGFkZGluZ1RvcFJpZ2h0IiwicGFkZGluZ0JvdHRvbUxlZnQiLCJwYWRkaW5nQm90dG9tTmVnTGVmdCIsImdldFA0IiwiYWRkVG9EZWZhdWx0U2NvcGUiLCJ0YXJnZXQiLCJkZWZhdWx0U2NvcGUiLCJhZGRUYXJnZXQiLCJUYXJnZXQiLCJ1bmRlZmluZWQiLCJ0aW1lRW5kIiwidGltZUV4Y2FuZ2UiLCJwb3NpdGlvbmluZ1N0cmF0ZWd5Iiwic3RyYXRlZ3kiLCJnZXRSZWN0YW5nbGUiLCJiaW5kIiwidGFyZ2V0cyIsImVtaXR0ZXIiLCJlbWl0IiwiaW5pdCIsImluZGV4ZXNPZk5ldyIsInBvc2l0aW9uaW5nIiwib2xkRHJhZ2dhYmxlcyIsInNvcnRpbmciLCJyZWN0YW5nbGVzIiwiaW5uZXJEcmFnZ2FibGVzIiwic2V0UG9zaXRpb24iLCJjYXRjaERyYWdnYWJsZSIsInRhcmdldFJlY3RhbmdsZSIsImRyYWdnYWJsZVNxdWFyZSIsInNjb3BlcyIsInNjb3BlIiwicmVtb3ZlSXRlbSIsIm5ld0RyYWdnYWJsZXNJbmRleCIsImFkZFJlbW92ZU9uTW92ZSIsInRpbWUiLCJtb3ZlIiwiaW5pdGlhbFBvc2l0aW9uIiwicHVzaElubmVyRHJhZ2dhYmxlIiwicmVtb3ZlSGFuZGxlciIsInJlbW92ZSIsInVuc3Vic2NyaWJlIiwiU2NvcGUiLCJkcmFnRW5kQWN0aW9uIiwib25FbmQiLCJzaG90VGFyZ2V0cyIsInNvcnQiLCJhIiwiYiIsInBpblBvc2l0aW9uIiwicmVzZXQiLCJyZWZyZXNoIiwicG9zaXRpb25zIiwibWVzc2FnZSIsInRhcmdldEluZGV4ZXMiLCJjdXJyZW50U2NvcGUiLCJhZGREcmFnZ2FibGVUb1Njb3BlIiwiYWRkRHJhZ2dhYmxlIiwiRHJhZ2dhYmxlIiwiaW50ZXJydXB0IiwiYWRkVGFyZ2V0VG9TY29wZSIsInByZXBlbmRPbiIsImNoZWNrU3VwcG9ydFBhc3NpdmVFdmVudHMiLCJwYXNzaXZlU3VwcG9ydGVkIiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIl9lcnIiLCJpc1N1cHBvcnRQYXNzaXZlRXZlbnRzIiwiaXNUb3VjaCIsIm1vdXNlRXZlbnRzIiwiZW5kIiwidG91Y2hFdmVudHMiLCJ0cmFuc2Zvcm1Qcm9wZXJ0eSIsImdldFN0eWxlUHJvcGVydHkiLCJ0cmFuc2l0aW9uUHJvcGVydHkiLCJnZXRUb3VjaEJ5SUQiLCJ0b3VjaElkIiwiY2hhbmdlZFRvdWNoZXMiLCJpZGVudGlmaWVyIiwicHJldmVudERvdWJsZUluaXQiLCJleGlzdGluZyIsImNvcHlTdHlsZXMiLCJzb3VyY2UiLCJkZXN0aW5hdGlvbiIsImNzIiwia2V5IiwiY2hpbGRyZW4iLCJfZW5hYmxlIiwic3RhcnRQb3NpdGlvbmluZyIsInN0YXJ0TGlzdGVuaW5nIiwiX3NldERlZmF1bHRUcmFuc2l0aW9uIiwicGlubmVkUG9zaXRpb24iLCJib3VuZGluZyIsIl9kcmFnU3RhcnQiLCJldmVudCIsImRyYWdTdGFydCIsIl9kcmFnTW92ZSIsImRyYWdNb3ZlIiwiX2RyYWdFbmQiLCJkcmFnRW5kIiwiX25hdGl2ZURyYWdTdGFydCIsIm5hdGl2ZURyYWdTdGFydCIsIl9uYXRpdmVEcmFnTW92ZSIsIm5hdGl2ZURyYWdNb3ZlIiwiX25hdGl2ZURyYWdFbmQiLCJuYXRpdmVEcmFnRW5kIiwiaGFuZGxlciIsInBhc3NpdmUiLCJfdHJhbnNmb3JtUG9zaXRpb24iLCJnZXRTaXplIiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25Dc3MiLCJ0cmFuc2Zvcm0iLCJ0cmFuc2xhdGVDc3MiLCJ1YSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsIm1zaWUiLCJpc1NpbGVudCIsImRldGVybWluZURpcmVjdGlvbiIsIl9zZXRUcmFuc2l0aW9uIiwiX3NldFRyYW5zbGF0ZSIsInNpbGVudCIsImxlZnREaXJlY3Rpb24iLCJyaWdodERpcmVjdGlvbiIsInVwRGlyZWN0aW9uIiwiZG93bkRpcmVjdGlvbiIsImN1cnJlbnRFdmVudCIsImlzVG91Y2hFdmVudCIsIlRvdWNoRXZlbnQiLCJfc3RhcnRUb3VjaFBvaW50IiwicGFnZVgiLCJjbGllbnRYIiwicGFnZVkiLCJjbGllbnRZIiwiX3N0YXJ0UG9zaXRpb24iLCJfdG91Y2hJZCIsInN0b3BQcm9wYWdhdGlvbiIsIkhUTUxJbnB1dEVsZW1lbnQiLCJmb2N1cyIsIm5hdGl2ZURyYWdBbmREcm9wIiwicHJldmVudERlZmF1bHQiLCJpc1NhZmFyaSIsImVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcE9uVG91Y2giLCJlbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3AiLCJpc0RyYWdnaW5nIiwidG91Y2giLCJ0b3VjaFBvaW50IiwiYm91bmQiLCJyZW1vdmVBdHRyaWJ1dGUiLCJkYXRhVHJhbnNmZXIiLCJzZXREYXRhIiwiX2V2ZW50IiwiY2xvbmVkRWxlbWVudCIsImNsb25lTm9kZSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImVtdWxhdGlvbkRyYWdnYWJsZSIsInNjcm9sbFgiLCJzY3JvbGxZIiwiZGVzdHJveSIsInJlbW92ZUNoaWxkIiwicmVzZXRFbWl0dGVyIiwiX3BhcmVudCIsIl9ib3VuZGluZyIsIl9oYW5kbGVyIiwiZW5hYmxlIiwiTGlzdCIsImluaXREcmFnZ2FibGUiLCJvbk1vdmUiLCJzb3J0ZWREcmFnZ2FibGVzIiwiZ2V0U29ydGVkRHJhZ2dhYmxlcyIsInBpbm5lZFBvc2l0aW9ucyIsImN1cnJlbnRJbmRleCIsInRhcmdldEluZGV4IiwiaW5pdGlhbFBvc2l0aW9ucyIsImNvbXBhcmUiLCJyZXNldFBvc2l0aW9uVG9Jbml0aWFsIiwiQXJyYXkiLCJsaXN0IiwicmVzZXRPbiIsImoiLCJnZXRDdXJyZW50UGlubmVkUG9zaXRpb25zIiwicGFyZW50RWxlbWVudCIsImVsZW1lbnRzIiwic2V0U3R5bGUiLCJjc3NUZXh0IiwiaGFzT3duUHJvcGVydHkiLCJhcHBlbmRGaXJzdENoaWxkIiwibm9kZSIsImZpcnN0Q2hpbGQiLCJpbnNlcnRCZWZvcmUiLCJjcmVhdGVDYW52YXMiLCJhcmVhIiwicmVjdGFnbGUiLCJjYW52YXMiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiU3BpZGVyIiwiYXJlYVJlY3RhbmdsZSIsImRBbmdsZSIsInN0YXJ0UmFkaXVzIiwiZW5kUmFkaXVzIiwiZ2V0TWluU2lkZSIsImxpbmVXaWR0aCIsInN0cm9rZVN0eWxlIiwiZmlsbFN0eWxlIiwiZ2V0Q29udGV4dCIsImhhbGZTaXplIiwiZHJhdyIsImlzSW5pdCIsImNsZWFyUmVjdCIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsImNsb3NlUGF0aCIsInN0cm9rZSIsImZpbGwiLCJBcmNTbGlkZXIiLCJhbmdsZXMiLCJzaGlmdGVkQ2VudGVyIiwiY2hhbmdlIiwidXBkYXRlQW5nbGUiLCJybmQiLCJyb3VuZCIsInJhbmRvbSIsInRvSGV4U3RyaW5nIiwiZGlnaXQiLCJzdHIiLCJ0b1N0cmluZyIsInJhbmRvbUNvbG9yIiwiZ2V0QXJyYXlXaXRoQm91bmRJbmRleGVzIiwicmV0SW5kZXhlcyIsIkNoYXJ0IiwidG91Y2hSYWRpdXMiLCJmaWxsU3R5bGVzIiwiaW5pdEFuZ2xlcyIsImxpbWl0SW1nIiwibGltaXRJbWdPZmZzZXQiLCJnZXRCb3VuZEFuZ2xlIiwiaXNDbG9zc2luZyIsInVwZGF0ZUFuZ2xlcyIsIl9kcmFnZ2FibGUiLCJkcmF3QXJjIiwiZHJhd0xpbWl0SW1nIiwib3B0cyIsImNsb25lT2JqIiwiY29sb3IiLCJnZXRGaWxsU3R5bGUiLCJhcmMiLCJpbWciLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJkcmF3SW1hZ2UiLCJzZXRUcmFuc2Zvcm0iLCJiYXNlQW5nbGUiLCJkaWZmQW5nbGUiLCJnZXRBbmdsZXNEaWZmIiwibW92ZUFuZFNhdmUiLCJlbmFibGVJbmRleGVzIiwiYWN0aXZlQXJjSW5kZXgiLCJkaXN0YW5jZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFBQSxTQUFTQSx1QkFBVCxDQUFpQ0MsT0FBakMsRUFBMENDLEtBQTFDLEVBQWlEO0VBQy9DLFNBQU9BLEtBQUssQ0FBQ0MsTUFBTixDQUFhLFVBQUNDLEdBQUQsRUFBTUMsSUFBTixFQUFlO0VBQ2pDLFdBQU9ELEdBQUcsR0FBR0UsUUFBUSxDQUFDQyxNQUFNLENBQUNDLGdCQUFQLENBQXdCUCxPQUF4QixFQUFpQ0ksSUFBakMsS0FBd0MsQ0FBekMsQ0FBckI7RUFDRCxHQUZNLEVBRUosQ0FGSSxDQUFQO0VBR0Q7O01BRW9CSTs7O0VBQ25CLGlCQUFZQyxDQUFaLEVBQWVDLENBQWYsRUFBa0I7RUFBQTs7RUFDaEIsU0FBS0QsQ0FBTCxHQUFTQSxDQUFUO0VBQ0EsU0FBS0MsQ0FBTCxHQUFTQSxDQUFUO0VBQ0Q7Ozs7MEJBRUdDLEdBQUc7RUFDTCxhQUFPLElBQUlILEtBQUosQ0FBVSxLQUFLQyxDQUFMLEdBQVNFLENBQUMsQ0FBQ0YsQ0FBckIsRUFBd0IsS0FBS0MsQ0FBTCxHQUFTQyxDQUFDLENBQUNELENBQW5DLENBQVA7RUFDRDs7OzBCQUVHQyxH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
