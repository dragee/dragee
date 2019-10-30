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

        this._nativeDrop = function (event) {
          return _this2.nativeDrop(event);
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
        document.removeEventListener('drop', this._nativeDrop);
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
        document.addEventListener('drop', this._nativeDrop);
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
      key: "nativeDrop",
      value: function nativeDrop(event) {
        event.stopPropagation();
        event.preventDefault();
      }
    }, {
      key: "nativeDragEnd",
      value: function nativeDragEnd(_event) {
        removeClass(this.element, 'dragee-placeholder');
        this.dragEndAction();
        this.emit('drag:end');
        document.removeEventListener('dragover', this._nativeDragMove);
        document.removeEventListener('dragend', this._nativeDragEnd);
        document.removeEventListener('drop', this._nativeDrop);
        document.removeEventListener(mouseEvents.end, this._nativeDragEnd);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgtZGV2LnVtZC5qcyIsInNvdXJjZXMiOlsiLi4vc3JjL2dlb21ldHJ5L3BvaW50LmpzIiwiLi4vc3JjL3V0aWxzL2NsYXNzZXMuanMiLCIuLi9zcmMvdXRpbHMvZ2V0LWRlZmF1bHQtcGFyZW50LmpzIiwiLi4vc3JjL2V2ZW50RW1pdHRlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9kZXNhbmRyby1nZXQtc3R5bGUtcHJvcGVydHkvZ2V0LXN0eWxlLXByb3BlcnR5LmpzIiwiLi4vc3JjL2dlb21ldHJ5L3JlY3RhbmdsZS5qcyIsIi4uL3NyYy9nZW9tZXRyeS9kaXN0YW5jZXMuanMiLCIuLi9zcmMvZ2VvbWV0cnkvYm91bmRzLmpzIiwiLi4vc3JjL2dlb21ldHJ5L2FuZ2xlcy5qcyIsIi4uL3NyYy9ib3VuZGluZy5qcyIsIi4uL3NyYy91dGlscy9yZW1vdmUtYXJyYXktaXRlbS5qcyIsIi4uL3NyYy91dGlscy9yYW5nZS5qcyIsIi4uL3NyYy9wb3NpdGlvbmluZy5qcyIsIi4uL3NyYy90YXJnZXQuanMiLCIuLi9zcmMvc2NvcGUuanMiLCIuLi9zcmMvdXRpbHMvaXMtc3VwcG9ydC1wYXNzaXZlLWV2ZW50cy5qcyIsIi4uL3NyYy9kcmFnZ2FibGUuanMiLCIuLi9zcmMvbGlzdC5qcyIsIi4uL3NyYy91dGlscy9jcmVhdGUtY2FudmFzLmpzIiwiLi4vc3JjL3NwaWRlci5qcyIsIi4uL3NyYy9hcmNzbGlkZXIuanMiLCIuLi9zcmMvY2hhcnQuanMiLCIuLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gZ2V0U3VtVmFsdWVPZlN0eWxlUnVsZXMoZWxlbWVudCwgcnVsZXMpIHtcbiAgcmV0dXJuIHJ1bGVzLnJlZHVjZSgoc3VtLCBydWxlKSA9PiB7XG4gICAgcmV0dXJuIHN1bSArIHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpW3J1bGVdfHwwKVxuICB9LCAwKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2ludCB7XG4gIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICB0aGlzLnggPSB4XG4gICAgdGhpcy55ID0geVxuICB9XG5cbiAgYWRkKHApIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCArIHAueCwgdGhpcy55ICsgcC55KVxuICB9XG5cbiAgc3ViKHApIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCAtIHAueCwgdGhpcy55IC0gcC55KVxuICB9XG5cbiAgbXVsdChrKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnggKiBrLCB0aGlzLnkgKiBrKVxuICB9XG5cbiAgbmVnYXRpdmUoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCgtdGhpcy54LCAtdGhpcy55KVxuICB9XG5cbiAgY29tcGFyZShwKSB7XG4gICAgcmV0dXJuICh0aGlzLnggPT09IHAueCAmJiB0aGlzLnkgPT09IHAueSlcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54LCB0aGlzLnkpXG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gYHt4PSR7dGhpcy54fSx5PSR7dGhpcy55fWBcbiAgfVxuXG4gIHN0YXRpYyBlbGVtZW50T2Zmc2V0KGVsZW1lbnQsIHBhcmVudCkge1xuICAgIHBhcmVudCA9IHBhcmVudCB8fCBlbGVtZW50LnBhcmVudE5vZGVcbiAgICBjb25zdCBlbGVtZW50UmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICBjb25zdCBwYXJlbnRSZWN0ID0gcGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgcmV0dXJuIG5ldyBQb2ludChcbiAgICAgIGVsZW1lbnRSZWN0LmxlZnQgLSBwYXJlbnRSZWN0LmxlZnQsXG4gICAgICBlbGVtZW50UmVjdC50b3AgLSBwYXJlbnRSZWN0LnRvcFxuICAgIClcbiAgfVxuXG4gIHN0YXRpYyBlbGVtZW50U2l6ZShlbGVtZW50LCBpc0NvbnRlbnRCb3hTaXplPWZhbHNlKSB7XG4gICAgbGV0IHdpZHRoID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudClbJ3dpZHRoJ10pXG4gICAgbGV0IGhlaWdodCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpWydoZWlnaHQnXSlcbiAgICBpZiAoIWlzQ29udGVudEJveFNpemUpIHtcbiAgICAgIHdpZHRoICs9IGdldFN1bVZhbHVlT2ZTdHlsZVJ1bGVzKGVsZW1lbnQsIFsncGFkZGluZy1sZWZ0JywgJ3BhZGRpbmctcmlnaHQnLCAnYm9yZGVyLWxlZnQtd2lkdGgnLCAnYm9yZGVyLXJpZ2h0LXdpZHRoJ10pXG4gICAgICBoZWlnaHQgKz0gZ2V0U3VtVmFsdWVPZlN0eWxlUnVsZXMoZWxlbWVudCwgWydwYWRkaW5nLXRvcCcsICdwYWRkaW5nLWJvdHRvbScsICdib3JkZXItdG9wLXdpZHRoJywgJ2JvcmRlci1ib3R0b20td2lkdGgnXSlcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBQb2ludCh3aWR0aCwgaGVpZ2h0KVxuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gaGFzQ2xhc3MoZWxlbWVudCwgYykge1xuICBjb25zdCByZSA9IG5ldyBSZWdFeHAoJyhefFxcXFxzKScgKyBjICsgJyhcXFxcc3wkKScsICdnJylcbiAgcmV0dXJuIChyZS50ZXN0KGVsZW1lbnQuY2xhc3NOYW1lKSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZENsYXNzKGVsZW1lbnQsIGMpIHtcbiAgaWYgKCFoYXNDbGFzcyhlbGVtZW50LCBjKSkge1xuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gKGVsZW1lbnQuY2xhc3NOYW1lICsgJyAnICsgYykucmVwbGFjZSgvXFxzKy9nLCAnICcpLnJlcGxhY2UoLyheIHwgJCkvZywgJycpXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNsYXNzKGVsZW1lbnQsIGMpIHtcbiAgY29uc3QgcmUgPSBuZXcgUmVnRXhwKCcoXnxcXFxccyknICsgYyArICcoXFxcXHN8JCknLCAnZycpXG4gIGVsZW1lbnQuY2xhc3NOYW1lID0gZWxlbWVudC5jbGFzc05hbWUucmVwbGFjZShyZSwgJyQxJykucmVwbGFjZSgvXFxzKy9nLCAnICcpLnJlcGxhY2UoLyheIHwgJCkvZywgJycpXG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXREZWZhdWx0UGFyZW50KGVsZW1lbnQpIHtcbiAgbGV0IHBhcmVudCA9IGVsZW1lbnQucGFyZW50Tm9kZVxuICB3aGlsZSAocGFyZW50LnBhcmVudE5vZGUgJiYgd2luZG93LmdldENvbXB1dGVkU3R5bGUocGFyZW50KVsncG9zaXRpb24nXSA9PT0gJ3N0YXRpYycgJiYgcGFyZW50LnRhZ05hbWUgIT09ICdCT0RZJykge1xuICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlXG4gIH1cbiAgcmV0dXJuIHBhcmVudFxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKGNvbnRleHQsIG9wdGlvbnMgPSB7fSkge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQgfHwgdGhpc1xuICAgIHRoaXMuZXZlbnRzID0ge31cblxuICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMub24pIHtcbiAgICAgIGZvciAoY29uc3QgW2V2ZW50TmFtZSwgZm5dIG9mIE9iamVjdC5lbnRyaWVzKG9wdGlvbnMub24pKSB7XG4gICAgICAgIHRoaXMub24oZXZlbnROYW1lLCBmbilcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBlbWl0KGV2ZW50TmFtZSkge1xuICAgIHRoaXMuaW50ZXJydXB0ZWQgPSBmYWxzZVxuICAgIGNvbnN0IGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSlcblxuICAgIGlmICghdGhpcy5ldmVudHNbZXZlbnROYW1lXSkgcmV0dXJuXG5cbiAgICBmb3IgKGNvbnN0IGZ1bmMgb2YgdGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgZnVuYy5hcHBseSh0aGlzLmNvbnRleHQsIGFyZ3MpXG4gICAgICBpZiAodGhpcy5pbnRlcnJ1cHRlZCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpbnRlcnJ1cHQoKSB7XG4gICAgdGhpcy5pbnRlcnJ1cHRlZCA9IHRydWVcbiAgfVxuXG4gIG9uKGV2ZW50TmFtZSwgZm4pIHtcbiAgICBpZiAoIXRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSBbXVxuICAgIH1cblxuICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0ucHVzaChmbilcbiAgfVxuXG4gIHByZXBlbmRPbihldmVudE5hbWUsIGZuKSB7XG4gICAgaWYgKCF0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdID0gW11cbiAgICB9XG5cbiAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLnVuc2hpZnQoZm4pXG4gIH1cblxuICB1bnN1YnNjcmliZShldmVudE5hbWUsIGZuKSB7XG4gICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5ldmVudHNbZXZlbnROYW1lXS5pbmRleE9mKGZuKVxuICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5zcGxpY2UoaW5kZXgsIDEpXG4gICAgfVxuICB9XG5cbiAgcmVzZXRFbWl0dGVyICgpIHtcbiAgICB0aGlzLmV2ZW50cyA9IHt9XG4gIH1cblxuICByZXNldE9uKGV2ZW50TmFtZSkge1xuICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSBbXVxuICB9XG59XG4iLCIvKiFcbiAqIGdldFN0eWxlUHJvcGVydHkgdjEuMC40XG4gKiBvcmlnaW5hbCBieSBrYW5nYXhcbiAqIGh0dHA6Ly9wZXJmZWN0aW9ua2lsbHMuY29tL2ZlYXR1cmUtdGVzdGluZy1jc3MtcHJvcGVydGllcy9cbiAqIE1JVCBsaWNlbnNlXG4gKi9cblxuLypqc2hpbnQgYnJvd3NlcjogdHJ1ZSwgc3RyaWN0OiB0cnVlLCB1bmRlZjogdHJ1ZSAqL1xuLypnbG9iYWwgZGVmaW5lOiBmYWxzZSwgZXhwb3J0czogZmFsc2UsIG1vZHVsZTogZmFsc2UgKi9cblxuKCBmdW5jdGlvbiggd2luZG93ICkge1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBwcmVmaXhlcyA9ICdXZWJraXQgTW96IG1zIE1zIE8nLnNwbGl0KCcgJyk7XG52YXIgZG9jRWxlbVN0eWxlID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlO1xuXG5mdW5jdGlvbiBnZXRTdHlsZVByb3BlcnR5KCBwcm9wTmFtZSApIHtcbiAgaWYgKCAhcHJvcE5hbWUgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gdGVzdCBzdGFuZGFyZCBwcm9wZXJ0eSBmaXJzdFxuICBpZiAoIHR5cGVvZiBkb2NFbGVtU3R5bGVbIHByb3BOYW1lIF0gPT09ICdzdHJpbmcnICkge1xuICAgIHJldHVybiBwcm9wTmFtZTtcbiAgfVxuXG4gIC8vIGNhcGl0YWxpemVcbiAgcHJvcE5hbWUgPSBwcm9wTmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHByb3BOYW1lLnNsaWNlKDEpO1xuXG4gIC8vIHRlc3QgdmVuZG9yIHNwZWNpZmljIHByb3BlcnRpZXNcbiAgdmFyIHByZWZpeGVkO1xuICBmb3IgKCB2YXIgaT0wLCBsZW4gPSBwcmVmaXhlcy5sZW5ndGg7IGkgPCBsZW47IGkrKyApIHtcbiAgICBwcmVmaXhlZCA9IHByZWZpeGVzW2ldICsgcHJvcE5hbWU7XG4gICAgaWYgKCB0eXBlb2YgZG9jRWxlbVN0eWxlWyBwcmVmaXhlZCBdID09PSAnc3RyaW5nJyApIHtcbiAgICAgIHJldHVybiBwcmVmaXhlZDtcbiAgICB9XG4gIH1cbn1cblxuLy8gdHJhbnNwb3J0XG5pZiAoIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcbiAgLy8gQU1EXG4gIGRlZmluZSggZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGdldFN0eWxlUHJvcGVydHk7XG4gIH0pO1xufSBlbHNlIGlmICggdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICkge1xuICAvLyBDb21tb25KUyBmb3IgQ29tcG9uZW50XG4gIG1vZHVsZS5leHBvcnRzID0gZ2V0U3R5bGVQcm9wZXJ0eTtcbn0gZWxzZSB7XG4gIC8vIGJyb3dzZXIgZ2xvYmFsXG4gIHdpbmRvdy5nZXRTdHlsZVByb3BlcnR5ID0gZ2V0U3R5bGVQcm9wZXJ0eTtcbn1cblxufSkoIHdpbmRvdyApO1xuIiwiaW1wb3J0IFBvaW50IGZyb20gJy4vcG9pbnQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY3RhbmdsZSB7XG4gIGNvbnN0cnVjdG9yKHBvc2l0aW9uLCBzaXplKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgdGhpcy5zaXplID0gc2l6ZVxuICB9XG5cbiAgZ2V0UDEoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25cbiAgfVxuXG4gIGdldFAyKCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHRoaXMucG9zaXRpb24ueSlcbiAgfVxuXG4gIGdldFAzKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLnNpemUpXG4gIH1cblxuICBnZXRQNCgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnkpXG4gIH1cblxuICBnZXRDZW50ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb24uYWRkKHRoaXMuc2l6ZS5tdWx0KDAuNSkpXG4gIH1cblxuICBvcihyZWN0KSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBuZXcgUG9pbnQoTWF0aC5taW4odGhpcy5wb3NpdGlvbi54LCByZWN0LnBvc2l0aW9uLngpLCBNYXRoLm1pbih0aGlzLnBvc2l0aW9uLnksIHJlY3QucG9zaXRpb24ueSkpXG4gICAgY29uc3Qgc2l6ZSA9IChuZXcgUG9pbnQoTWF0aC5tYXgodGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHJlY3QucG9zaXRpb24ueCArIHJlY3Quc2l6ZS54KSwgTWF0aC5tYXgodGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnksIHJlY3QucG9zaXRpb24ueSArIHJlY3Quc2l6ZS55KSkpLnN1Yihwb3NpdGlvbilcbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZShwb3NpdGlvbiwgc2l6ZSlcbiAgfVxuXG4gIGFuZChyZWN0KSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBuZXcgUG9pbnQoTWF0aC5tYXgodGhpcy5wb3NpdGlvbi54LCByZWN0LnBvc2l0aW9uLngpLCBNYXRoLm1heCh0aGlzLnBvc2l0aW9uLnksIHJlY3QucG9zaXRpb24ueSkpXG4gICAgY29uc3Qgc2l6ZSA9IChuZXcgUG9pbnQoTWF0aC5taW4odGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHJlY3QucG9zaXRpb24ueCArIHJlY3Quc2l6ZS54KSwgTWF0aC5taW4odGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnksIHJlY3QucG9zaXRpb24ueSArIHJlY3Quc2l6ZS55KSkpLnN1Yihwb3NpdGlvbilcbiAgICBpZiAoc2l6ZS54IDw9IDAgfHwgc2l6ZS55IDw9IDApIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHBvc2l0aW9uLCBzaXplKVxuICB9XG5cbiAgaW5jbHVkZVBvaW50KHApIHtcbiAgICByZXR1cm4gISh0aGlzLnBvc2l0aW9uLnggPiBwLnggfHwgdGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLnggPCBwLnggfHwgdGhpcy5wb3NpdGlvbi55ID4gcC55IHx8IHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55IDwgcC55KVxuICB9XG5cbiAgaW5jbHVkZVJlY3RhbmdsZShyZWN0YW5nbGUpIHtcbiAgICByZXR1cm4gdGhpcy5pbmNsdWRlUG9pbnQocmVjdGFuZ2xlLnBvc2l0aW9uKSAmJiB0aGlzLmluY2x1ZGVQb2ludChyZWN0YW5nbGUuZ2V0UDMoKSlcbiAgfVxuXG4gIG1vdmVUb0JvdW5kKHJlY3QsIGF4aXMpIHtcbiAgICBsZXQgc2VsQXhpcywgY3Jvc3NSZWN0YW5nbGVcbiAgICBpZiAoYXhpcykge1xuICAgICAgc2VsQXhpcyA9IGF4aXNcbiAgICB9IGVsc2Uge1xuICAgICAgY3Jvc3NSZWN0YW5nbGUgPSB0aGlzLmFuZChyZWN0KVxuICAgICAgaWYgKCFjcm9zc1JlY3RhbmdsZSkge1xuICAgICAgICByZXR1cm4gcmVjdFxuICAgICAgfVxuICAgICAgc2VsQXhpcyA9IGNyb3NzUmVjdGFuZ2xlLnNpemUueCA+IGNyb3NzUmVjdGFuZ2xlLnNpemUueSA/ICd5JyA6ICd4J1xuICAgIH1cbiAgICBjb25zdCB0aGlzQ2VudGVyID0gdGhpcy5nZXRDZW50ZXIoKVxuICAgIGNvbnN0IHJlY3RDZW50ZXIgPSByZWN0LmdldENlbnRlcigpXG4gICAgY29uc3Qgc2lnbiA9IHRoaXNDZW50ZXJbc2VsQXhpc10gPiByZWN0Q2VudGVyW3NlbEF4aXNdID8gLTEgOiAxXG4gICAgY29uc3Qgb2Zmc2V0ID0gc2lnbiA+IDAgPyB0aGlzLnBvc2l0aW9uW3NlbEF4aXNdICsgdGhpcy5zaXplW3NlbEF4aXNdIC0gcmVjdC5wb3NpdGlvbltzZWxBeGlzXSA6IHRoaXMucG9zaXRpb25bc2VsQXhpc10gLSAocmVjdC5wb3NpdGlvbltzZWxBeGlzXSArIHJlY3Quc2l6ZVtzZWxBeGlzXSlcbiAgICByZWN0LnBvc2l0aW9uW3NlbEF4aXNdID0gcmVjdC5wb3NpdGlvbltzZWxBeGlzXSArIG9mZnNldFxuICAgIHJldHVybiByZWN0XG4gIH1cblxuICBnZXRTcXVhcmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZS54ICogdGhpcy5zaXplLnlcbiAgfVxuXG4gIHN0eWxlQXBwbHkoZWwpIHtcbiAgICBlbCA9IGVsIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2luZCcpXG4gICAgZWwuc3R5bGUubGVmdCA9IHRoaXMucG9zaXRpb24ueCArICdweCdcbiAgICBlbC5zdHlsZS50b3AgPSB0aGlzLnBvc2l0aW9uLnkgKyAncHgnXG4gICAgZWwuc3R5bGUud2lkdGggPSB0aGlzLnNpemUueCArICdweCdcbiAgICBlbC5zdHlsZS5oZWlnaHQgPSB0aGlzLnNpemUueSArICdweCdcbiAgfVxuXG4gIGdyb3d0aChzaXplKSB7XG4gICAgdGhpcy5zaXplID0gdGhpcy5zaXplLmFkZChzaXplKVxuICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uLmFkZChzaXplLm11bHQoLTAuNSkpXG4gIH1cblxuICBnZXRNaW5TaWRlKCkge1xuICAgIHJldHVybiBNYXRoLm1pbih0aGlzLnNpemUueCwgdGhpcy5zaXplLnkpXG4gIH1cblxuICBzdGF0aWMgZnJvbUVsZW1lbnQoZWxlbWVudCwgcGFyZW50PWVsZW1lbnQucGFyZW50Tm9kZSwgaXNDb250ZW50Qm94U2l6ZT1mYWxzZSwgaXNDb25zaWRlclRyYW5zbGF0ZT1mYWxzZSkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gUG9pbnQuZWxlbWVudE9mZnNldChlbGVtZW50LCBwYXJlbnQsIGlzQ29uc2lkZXJUcmFuc2xhdGUpXG4gICAgY29uc3Qgc2l6ZSA9IFBvaW50LmVsZW1lbnRTaXplKGVsZW1lbnQsIGlzQ29udGVudEJveFNpemUpXG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUocG9zaXRpb24sIHNpemUpXG4gIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBnZXREaXN0YW5jZShwMSwgcDIpIHtcbiAgY29uc3QgZHggPSBwMS54IC0gcDIueCwgZHkgPSBwMS55IC0gcDIueVxuICByZXR1cm4gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0WERpZmZlcmVuY2UocDEsIHAyKSB7XG4gIHJldHVybiBNYXRoLmFicyhwMS54IC0gcDIueClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFlEaWZmZXJlbmNlKHAxLCBwMikge1xuICByZXR1cm4gTWF0aC5hYnMocDEueSAtIHAyLnkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5KG9wdGlvbnMpIHtcbiAgcmV0dXJuIChwMSwgcDIpID0+IHtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KFxuICAgICAgTWF0aC5wb3cob3B0aW9ucy54ICogTWF0aC5hYnMocDEueCAtIHAyLngpLCAyKSArXG4gICAgICBNYXRoLnBvdyhvcHRpb25zLnkgKiBNYXRoLmFicyhwMS55IC0gcDIueSksIDIpXG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmRleE9mTmVhcmVzdFBvaW50KGFyciwgdmFsLCByYWRpdXMsIGdldERpc3RhbmNlRnVuYz1nZXREaXN0YW5jZSkge1xuICBsZXQgc2l6ZSwgaW5kZXggPSAwLCBpLCB0ZW1wXG4gIGlmIChhcnIubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIC0xXG4gIH1cbiAgc2l6ZSA9IGdldERpc3RhbmNlRnVuYyhhcnJbMF0sIHZhbClcbiAgZm9yIChpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgIHRlbXAgPSBnZXREaXN0YW5jZUZ1bmMoYXJyW2ldLCB2YWwpXG4gICAgaWYgKHRlbXAgPCBzaXplKSB7XG4gICAgICBzaXplID0gdGVtcFxuICAgICAgaW5kZXggPSBpXG4gICAgfVxuICB9XG4gIGlmIChyYWRpdXMgPj0gMCAmJiBzaXplID4gcmFkaXVzKSB7XG4gICAgcmV0dXJuIC0xXG4gIH1cbiAgcmV0dXJuIGluZGV4XG59XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9wb2ludCdcbmltcG9ydCB7IGdldERpc3RhbmNlIH0gZnJvbSAnLi9kaXN0YW5jZXMnXG5cbmV4cG9ydCBmdW5jdGlvbiBjbGFtcChtaW4sIG1heCwgdmFsKSB7XG4gIHJldHVybiBNYXRoLm1heChtaW4sIE1hdGgubWluKG1heCwgdmFsKSlcbn1cblxuLy9SZXR1cm4gY3Jvc3NpbmcgcG9pbnQgb2YgdHdvIGxpbmVzXG5leHBvcnQgZnVuY3Rpb24gZGlyZWN0Q3Jvc3NpbmcoTDFQMSwgTDFQMiwgTDJQMSwgTDJQMikge1xuICBsZXQgdGVtcCwgazEsIGsyLCBiMSwgYjIsIHgsIHlcbiAgaWYgKEwyUDEueCA9PT0gTDJQMi54KSB7XG4gICAgdGVtcCA9IEwyUDFcbiAgICBMMlAxID0gTDFQMVxuICAgIEwxUDEgPSB0ZW1wXG4gICAgdGVtcCA9IEwyUDJcbiAgICBMMlAyID0gTDFQMlxuICAgIEwxUDIgPSB0ZW1wXG4gIH1cbiAgaWYgKEwxUDEueCA9PT0gTDFQMi54KSB7XG4gICAgazIgPSAoTDJQMi55IC0gTDJQMS55KSAvIChMMlAyLnggLSBMMlAxLngpXG4gICAgYjIgPSAoTDJQMi54ICogTDJQMS55IC0gTDJQMS54ICogTDJQMi55KSAvIChMMlAyLnggLSBMMlAxLngpXG4gICAgeCA9IEwxUDEueFxuICAgIHkgPSB4ICogazIgKyBiMlxuICAgIHJldHVybiBuZXcgUG9pbnQoeCwgeSlcbiAgfSBlbHNlIHtcbiAgICBrMSA9IChMMVAyLnkgLSBMMVAxLnkpIC8gKEwxUDIueCAtIEwxUDEueClcbiAgICBiMSA9IChMMVAyLnggKiBMMVAxLnkgLSBMMVAxLnggKiBMMVAyLnkpIC8gKEwxUDIueCAtIEwxUDEueClcbiAgICBrMiA9IChMMlAyLnkgLSBMMlAxLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICBiMiA9IChMMlAyLnggKiBMMlAxLnkgLSBMMlAxLnggKiBMMlAyLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICB4ID0gKGIxIC0gYjIpIC8gKGsyIC0gazEpXG4gICAgeSA9IHggKiBrMSArIGIxXG4gICAgcmV0dXJuIG5ldyBQb2ludCh4LCB5KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZFRvU2VnbWVudChMUDEsIExQMiwgUCkge1xuICBsZXQgeCwgeVxuICB4ID0gY2xhbXAoTWF0aC5taW4oTFAxLngsIExQMi54KSwgTWF0aC5tYXgoTFAxLngsIExQMi54KSwgUC54KVxuICBpZiAoeCAhPT0gUC54KSB7XG4gICAgeSA9ICh4ID09PSBMUDEueCkgPyBMUDEueSA6IExQMi55XG4gICAgUCA9IG5ldyBQb2ludCh4LCB5KVxuICB9XG5cbiAgeSA9IGNsYW1wKE1hdGgubWluKExQMS55LCBMUDIueSksIE1hdGgubWF4KExQMS55LCBMUDIueSksIFAueSlcbiAgaWYgKHkgIT09IFAueSkge1xuICAgIHggPSAoeSA9PT0gTFAxLnkpID8gTFAxLnggOiBMUDIueFxuICAgIFAgPSBuZXcgUG9pbnQoeCwgeSlcbiAgfVxuXG4gIHJldHVybiBQXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZFRvTGluZShBLCBCLCBQKSB7XG4gIGNvbnN0IEFQID0gbmV3IFBvaW50KFAueCAtIEEueCwgUC55IC0gQS55KSxcbiAgICBBQiA9IG5ldyBQb2ludChCLnggLSBBLngsIEIueSAtIEEueSksXG4gICAgYWIyID0gQUIueCAqIEFCLnggKyBBQi55ICogQUIueSxcbiAgICBhcF9hYiA9IEFQLnggKiBBQi54ICsgQVAueSAqIEFCLnksXG4gICAgdCA9IGFwX2FiIC8gYWIyXG4gIHJldHVybiBuZXcgUG9pbnQoQS54ICsgQUIueCAqIHQsIEEueSArIEFCLnkgKiB0KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9pbnRPbkxpbmUoTFAxLCBMUDIsIHBlcmNlbnQpIHtcbiAgY29uc3QgZHggPSBMUDIueCAtIExQMS54LCBkeSA9IExQMi55IC0gTFAxLnlcbiAgcmV0dXJuIG5ldyBQb2ludChMUDEueCArIHBlcmNlbnQgKiBkeCwgTFAxLnkgKyBwZXJjZW50ICogZHkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb2ludE9uTGluZUJ5TGVuZ2h0KExQMSwgTFAyLCBsZW5naHQpIHtcbiAgY29uc3QgZHggPSBMUDIueCAtIExQMS54XG4gIGNvbnN0IGR5ID0gTFAyLnkgLSBMUDEueVxuICBjb25zdCBwZXJjZW50ID0gbGVuZ2h0IC8gZ2V0RGlzdGFuY2UoTFAxLCBMUDIpXG4gIHJldHVybiBuZXcgUG9pbnQoTFAxLnggKyBwZXJjZW50ICogZHgsIExQMS55ICsgcGVyY2VudCAqIGR5KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkUG9pbnRUb0JvdW5kUG9pbnRzKGJvdW5kcG9pbnRzLCBwb2ludCwgaXNSaWdodCkge1xuICBjb25zdCByZXN1bHQgPSBib3VuZHBvaW50cy5maWx0ZXIoKGJQb2ludCkgPT4ge1xuICAgIHJldHVybiBiUG9pbnQueSA+IHBvaW50LnkgfHwgKGlzUmlnaHQgPyBiUG9pbnQueCA8IHBvaW50LnggOiBiUG9pbnQueCA+IHBvaW50LngpXG4gIH0pXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHQubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAocG9pbnQueSA8IHJlc3VsdFtpXS55KSB7XG4gICAgICByZXN1bHQuc3BsaWNlKGksIDAsIHBvaW50KVxuICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbiAgfVxuICByZXN1bHQucHVzaChwb2ludClcbiAgcmV0dXJuIHJlc3VsdFxufVxuIiwiaW1wb3J0IFBvaW50IGZyb20gJy4vcG9pbnQnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbmdsZURpZmYoYWxwaGEsIGJldGEpIHtcbiAgY29uc3QgbWluQW5nbGUgPSBNYXRoLm1pbihhbHBoYSwgYmV0YSlcbiAgY29uc3QgbWF4QW5nbGUgPSAgTWF0aC5tYXgoYWxwaGEsIGJldGEpXG4gIHJldHVybiBNYXRoLm1pbihtYXhBbmdsZSAtIG1pbkFuZ2xlLCBtaW5BbmdsZSArIE1hdGguUEkqMiAtIG1heEFuZ2xlKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QW5nbGUocDEsIHAyKSB7XG4gIGNvbnN0IGRpZmYgPSBwMi5zdWIocDEpXG4gIHJldHVybiBub3JtYWxpemVBbmdsZShNYXRoLmF0YW4yKGRpZmYueSwgZGlmZi54KSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvUmFkaWFuKGFuZ2xlKSB7XG4gIHJldHVybiAoKGFuZ2xlICUgMzYwKSAqIE1hdGguUEkgLyAxODApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0RlZ3JlZShhbmdsZSkge1xuICByZXR1cm4gKGFuZ2xlICogMTgwIC8gTWF0aC5QSSkgJSAzNjBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kQW5nbGUobWluLCBtYXgsIHZhbCkge1xuICBsZXQgZG1pbiwgZG1heFxuICBpZiAobWluIDwgbWF4ICYmIHZhbCA+IG1pbiAmJiB2YWwgPCBtYXgpIHtcbiAgICByZXR1cm4gdmFsXG4gIH0gZWxzZSBpZiAobWF4IDwgbWluICYmICh2YWwgPCBtYXggfHwgdmFsID4gbWluKSkge1xuICAgIHJldHVybiB2YWxcbiAgfSBlbHNlIHtcbiAgICBkbWluID0gZ2V0QW5nbGVEaWZmKG1pbiwgdmFsKVxuICAgIGRtYXggPSBnZXRBbmdsZURpZmYobWF4LCB2YWwpXG4gICAgaWYgKGRtaW4gPCBkbWF4KSB7XG4gICAgICByZXR1cm4gbWluXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBtYXhcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE5lYXJlc3RBbmdsZShhcnIsIGFuZ2xlKSB7XG4gIGxldCBpLCB0ZW1wLCBkaWZmID0gTWF0aC5QSSAqIDIsIHZhbHVlXG4gIGZvciAoaSA9IDA7IGkgPCBhcnIubGVuZ3RoO2krKykge1xuICAgIHRlbXAgPSBnZXRBbmdsZURpZmYoYXJyW2ldLCBhbmdsZSlcbiAgICBpZiAoZGlmZiA8IHRlbXApIHtcbiAgICAgIGRpZmYgPSB0ZW1wXG4gICAgICB2YWx1ZSA9IGFycltpXVxuICAgIH1cbiAgfVxuICByZXR1cm4gdmFsdWVcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZUFuZ2xlKHZhbCkge1xuICB3aGlsZSAodmFsIDwgMCkge1xuICAgIHZhbCArPSAyICogTWF0aC5QSVxuICB9XG4gIHdoaWxlICh2YWwgPiAyICogTWF0aC5QSSkge1xuICAgIHZhbCAtPSAyICogTWF0aC5QSVxuICB9XG4gIHJldHVybiB2YWxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBvaW50RnJvbVJhZGlhbFN5c3RlbShhbmdsZSwgbGVuZ3RoLCBjZW50ZXIpIHtcbiAgY2VudGVyID0gY2VudGVyIHx8IG5ldyBQb2ludCgwLCAwKVxuICByZXR1cm4gY2VudGVyLmFkZChuZXcgUG9pbnQobGVuZ3RoICogTWF0aC5jb3MoYW5nbGUpLCBsZW5ndGggKiBNYXRoLnNpbihhbmdsZSkpKVxufVxuIiwiaW1wb3J0IFBvaW50IGZyb20gJy4vZ2VvbWV0cnkvcG9pbnQnXG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gJy4vZ2VvbWV0cnkvcmVjdGFuZ2xlJ1xuaW1wb3J0IHtcbiAgZ2V0UG9pbnRPbkxpbmVCeUxlbmdodCxcbiAgZGlyZWN0Q3Jvc3NpbmcsXG4gIGJvdW5kVG9MaW5lXG59IGZyb20gJy4vZ2VvbWV0cnkvYm91bmRzJ1xuXG5pbXBvcnQge1xuICBnZXRBbmdsZSxcbiAgbm9ybWFsaXplQW5nbGUsXG4gIGJvdW5kQW5nbGUsXG4gIGdldFBvaW50RnJvbVJhZGlhbFN5c3RlbVxufSBmcm9tICcuL2dlb21ldHJ5L2FuZ2xlcydcblxuZXhwb3J0IGNsYXNzIEJvdW5kIHtcbiAgY29uc3RydWN0b3IgKCkge31cblxuICBib3VuZChwb2ludCwgX3NpemUpIHtcbiAgICByZXR1cm4gcG9pbnRcbiAgfVxuXG4gIHJlZnJlc2ggKCkge31cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9SZWN0YW5nbGUgZXh0ZW5kcyBCb3VuZCB7XG4gIGNvbnN0cnVjdG9yKHJlY3RhbmdsZSkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnJlY3RhbmdsZSA9IHJlY3RhbmdsZVxuICB9XG5cbiAgYm91bmQocG9pbnQsIHNpemUpIHtcbiAgICBjb25zdCBjYWxjUG9pbnQgPSBwb2ludC5jbG9uZSgpXG4gICAgY29uc3QgcmVjdFAyID0gdGhpcy5yZWN0YW5nbGUuZ2V0UDMoKVxuXG4gICAgaWYgKHRoaXMucmVjdGFuZ2xlLnBvc2l0aW9uLnggPiBjYWxjUG9pbnQueCkge1xuICAgICAgKGNhbGNQb2ludC54ID0gdGhpcy5yZWN0YW5nbGUucG9zaXRpb24ueClcbiAgICB9XG4gICAgaWYgKHRoaXMucmVjdGFuZ2xlLnBvc2l0aW9uLnkgPiBjYWxjUG9pbnQueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSB0aGlzLnJlY3RhbmdsZS5wb3NpdGlvbi55XG4gICAgfVxuICAgIGlmIChyZWN0UDIueCA8IGNhbGNQb2ludC54ICsgc2l6ZS54KSB7XG4gICAgICBjYWxjUG9pbnQueCA9IHJlY3RQMi54IC0gc2l6ZS54XG4gICAgfVxuICAgIGlmIChyZWN0UDIueSA8IGNhbGNQb2ludC55ICsgc2l6ZS55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHJlY3RQMi55IC0gc2l6ZS55XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhbGNQb2ludFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvRWxlbWVudCBleHRlbmRzIEJvdW5kVG9SZWN0YW5nbGUge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBwYXJlbnQpIHtcbiAgICBzdXBlcihSZWN0YW5nbGUuZnJvbUVsZW1lbnQoZWxlbWVudCwgcGFyZW50KSlcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnRcbiAgfVxuXG4gIHJlZnJlc2ggKCkge1xuICAgIHRoaXMucmVjdGFuZ2xlID0gUmVjdGFuZ2xlLmZyb21FbGVtZW50KHRoaXMuZWxlbWVudCwgdGhpcy5wYXJlbnQpXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9MaW5lWCBleHRlbmRzIEJvdW5kIHtcbiAgY29uc3RydWN0b3IoeCwgc3RhcnRZLCBlbmRZKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMueCA9IHhcbiAgICB0aGlzLnN0YXJ0WSA9IHN0YXJ0WVxuICAgIHRoaXMuZW5kWSA9IGVuZFlcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgY2FsY1BvaW50ID0gcG9pbnQuY2xvbmUoKVxuXG4gICAgY2FsY1BvaW50LnggPSB0aGlzLnhcbiAgICBpZiAodGhpcy5zdGFydFkgPiBjYWxjUG9pbnQueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSB0aGlzLnN0YXJ0WVxuICAgIH1cbiAgICBpZiAodGhpcy5lbmRZIDwgY2FsY1BvaW50LnkgKyBzaXplLnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gdGhpcy5lbmRZIC0gc2l6ZS55XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhbGNQb2ludFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvTGluZVkgZXh0ZW5kcyBCb3VuZCB7XG4gIGNvbnN0cnVjdG9yKHksIHN0YXJ0WCwgZW5kWCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnkgPSB5XG4gICAgdGhpcy5zdGFydFggPSBzdGFydFhcbiAgICB0aGlzLmVuZFggPSBlbmRYXG4gIH1cblxuICBib3VuZChwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IGNhbGNQb2ludCA9IHBvaW50LmNsb25lKClcbiAgICBjYWxjUG9pbnQueSA9IHRoaXMueVxuICAgIGlmICh0aGlzLnN0YXJ0WCA+IGNhbGNQb2ludC54KSB7XG4gICAgICBjYWxjUG9pbnQueCA9IHRoaXMuc3RhcnRYXG4gICAgfVxuICAgIGlmICh0aGlzLmVuZFggPCBjYWxjUG9pbnQueCArIHNpemUueCkge1xuICAgICAgY2FsY1BvaW50LnggPSB0aGlzLmVuZFggLSBzaXplLnhcbiAgICB9XG4gICAgcmV0dXJuIGNhbGNQb2ludFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvTGluZSBleHRlbmRzIEJvdW5kIHtcbiAgY29uc3RydWN0b3Ioc3RhcnRQb2ludCwgZW5kUG9pbnQpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5zdGFydFBvaW50ID0gc3RhcnRQb2ludFxuICAgIHRoaXMuZW5kUG9pbnQgPSBlbmRQb2ludFxuICAgIGNvbnN0IGFscGhhID0gTWF0aC5hdGFuMihlbmRQb2ludC55IC0gc3RhcnRQb2ludC55LCBlbmRQb2ludC54IC0gc3RhcnRQb2ludC54KVxuICAgIGNvbnN0IGJldGEgPSBhbHBoYSArIE1hdGguUEkgLyAyXG4gICAgdGhpcy5zb21lSyA9IDEwXG4gICAgdGhpcy5jb3NCZXRhID0gTWF0aC5jb3MoYmV0YSlcbiAgICB0aGlzLnNpbkJldGEgPSBNYXRoLnNpbihiZXRhKVxuICB9XG5cbiAgYm91bmQocG9pbnQsIHNpemUpIHtcbiAgICBjb25zdCBwb2ludDIgPSBuZXcgUG9pbnQoXG4gICAgICBwb2ludC54ICsgdGhpcy5zb21lSyAqIHRoaXMuY29zQmV0YSxcbiAgICAgIHBvaW50LnkgKyB0aGlzLnNvbWVLICogdGhpcy5zaW5CZXRhXG4gICAgKVxuXG4gICAgY29uc3QgbmV3RW5kUG9pbnQgPSBnZXRQb2ludE9uTGluZUJ5TGVuZ2h0KHRoaXMuZW5kUG9pbnQsIHRoaXMuc3RhcnRQb2ludCwgc2l6ZS54KVxuICAgIGNvbnN0IHBvaW50Q3Jvc3NpbmcgPSBkaXJlY3RDcm9zc2luZyh0aGlzLnN0YXJ0UG9pbnQsIHRoaXMuZW5kUG9pbnQsIHBvaW50LCBwb2ludDIpXG5cbiAgICByZXR1cm4gYm91bmRUb0xpbmUodGhpcy5zdGFydFBvaW50LCBuZXdFbmRQb2ludCwgcG9pbnRDcm9zc2luZylcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb0NpcmNsZSBleHRlbmRzIEJvdW5kIHtcbiAgY29uc3RydWN0b3IoY2VudGVyLCByYWRpdXMpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5jZW50ZXIgPSBjZW50ZXJcbiAgICB0aGlzLnJhZGl1cyA9IHJhZGl1c1xuICB9XG5cbiAgYm91bmQocG9pbnQsIF9zaXplKSB7XG4gICAgcmV0dXJuIGdldFBvaW50T25MaW5lQnlMZW5naHQodGhpcy5jZW50ZXIsIHBvaW50LCB0aGlzLnJhZGl1cylcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb0FyYyBleHRlbmRzIEJvdW5kVG9DaXJjbGUge1xuICBjb25zdHJ1Y3RvcihjZW50ZXIsIHJhZGl1cywgc3RhcnRBbmdsZSwgZW5kQW5nbGUpIHtcbiAgICBzdXBlcihjZW50ZXIsIHJhZGl1cylcbiAgICB0aGlzLl9zdGFydEFuZ2xlID0gc3RhcnRBbmdsZVxuICAgIHRoaXMuX2VuZEFuZ2xlID0gZW5kQW5nbGVcbiAgfVxuXG4gIHN0YXJ0QW5nbGUoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGlzLl9zdGFydEFuZ2xlID09PSAnZnVuY3Rpb24nID8gdGhpcy5fc3RhcnRBbmdsZSgpIDogdGhpcy5fc3RhcnRBbmdsZVxuICB9XG5cbiAgZW5kQW5nbGUoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGlzLl9lbmRBbmdsZSA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMuX2VuZEFuZ2xlKCkgOiB0aGlzLl9lbmRBbmdsZVxuICB9XG5cbiAgYm91bmQocG9pbnQsIF9zaXplKSB7XG4gICAgbGV0IGFuZ2xlID0gZ2V0QW5nbGUodGhpcy5jZW50ZXIsIHBvaW50KVxuICAgIGFuZ2xlID0gbm9ybWFsaXplQW5nbGUoYW5nbGUpXG4gICAgYW5nbGUgPSBib3VuZEFuZ2xlKHRoaXMuc3RhcnRBbmdsZSgpLCB0aGlzLmVuZEFuZ2xlKCksIGFuZ2xlKVxuICAgIHJldHVybiBnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oYW5nbGUsIHRoaXMucmFkaXVzLCB0aGlzLmNlbnRlcilcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oYXJyYXksIHZhbCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGFycmF5W2ldID09PSB2YWwpIHtcbiAgICAgIGFycmF5LnNwbGljZShpLCAxKVxuICAgICAgaS0tXG4gICAgfVxuICB9XG4gIHJldHVybiBhcnJheVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmFuZ2Uoc3RhcnQsIHN0b3AsIHN0ZXApIHtcbiAgY29uc3QgcmVzdWx0ID0gW11cbiAgaWYgKHR5cGVvZiBzdG9wID09PSAndW5kZWZpbmVkJykge1xuICAgIHN0b3AgPSBzdGFydFxuICAgIHN0YXJ0ID0gMFxuICB9XG4gIGlmICh0eXBlb2Ygc3RlcCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBzdGVwID0gMVxuICB9XG4gIGlmICgoc3RlcCA+IDAgJiYgc3RhcnQgPj0gc3RvcCkgfHwgKHN0ZXAgPCAwICYmIHN0YXJ0IDw9IHN0b3ApKSB7XG4gICAgcmV0dXJuIFtdXG4gIH1cbiAgZm9yIChsZXQgaSA9IHN0YXJ0OyBzdGVwID4gMCA/IGkgPCBzdG9wIDogaSA+IHN0b3A7IGkgKz0gc3RlcCkge1xuICAgIHJlc3VsdC5wdXNoKGkpXG4gIH1cbiAgcmV0dXJuIHJlc3VsdFxufVxuIiwiaW1wb3J0IFBvaW50IGZyb20gJy4vZ2VvbWV0cnkvcG9pbnQnXG5pbXBvcnQgeyBhZGRQb2ludFRvQm91bmRQb2ludHMgfSBmcm9tICcuL2dlb21ldHJ5L2JvdW5kcydcblxuaW1wb3J0IHtcbiAgaW5kZXhPZk5lYXJlc3RQb2ludCxcbiAgZ2V0RGlzdGFuY2Vcbn0gZnJvbSAnLi9nZW9tZXRyeS9kaXN0YW5jZXMnXG5cbmNsYXNzIEJhc2ljU3RyYXRlZ3kge1xuICBjb25zdHJ1Y3RvcihyZWN0YW5nbGUsIG9wdGlvbnM9e30pIHtcbiAgICB0aGlzLnJlY3RhbmdsZSA9IHJlY3RhbmdsZVxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNcbiAgfVxuXG4gIGdldCBib3VuZFJlY3QgKCkge1xuICAgIHJldHVybiB0eXBlb2YgdGhpcy5yZWN0YW5nbGUgPT09ICdmdW5jdGlvbicgPyB0aGlzLnJlY3RhbmdsZSgpIDogdGhpcy5yZWN0YW5nbGVcbiAgfVxufVxuXG5jbGFzcyBOb3RDcm9zc2luZ1N0cmF0ZWd5IGV4dGVuZHMgQmFzaWNTdHJhdGVneSB7XG4gIHBvc2l0aW9uaW5nIChyZWN0YW5nbGVMaXN0LCBpbmRleGVzT2ZOZXdzKSB7XG4gICAgY29uc3Qgc3RhdGljUmVjdGFuZ2xlSW5kZXhlcyA9IHJlY3RhbmdsZUxpc3QucmVkdWNlKChpbmRleGVzLCBfcmVjdCwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChpbmRleGVzT2ZOZXdzLmluZGV4T2YoaW5kZXgpID09PSAtMSkge1xuICAgICAgICBpbmRleGVzLnB1c2goaW5kZXgpXG4gICAgICB9XG4gICAgICByZXR1cm4gaW5kZXhlc1xuICAgIH0sIFtdKVxuXG4gICAgaW5kZXhlc09mTmV3cy5mb3JFYWNoKChpbmRleCkgPT4ge1xuICAgICAgbGV0IHJlY3QgPSByZWN0YW5nbGVMaXN0W2luZGV4XVxuICAgICAgbGV0IHJlbW92YWJsZSA9IGZhbHNlXG5cbiAgICAgIHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMuZm9yRWFjaCgoaW5kZXhPZlN0YXRpYykgPT4ge1xuICAgICAgICBjb25zdCBzdGF0aWNSZWN0ID0gcmVjdGFuZ2xlTGlzdFtpbmRleE9mU3RhdGljXVxuICAgICAgICByZWN0ID0gc3RhdGljUmVjdC5tb3ZlVG9Cb3VuZChyZWN0KVxuICAgICAgfSlcblxuICAgICAgcmVtb3ZhYmxlID0gc3RhdGljUmVjdGFuZ2xlSW5kZXhlcy5zb21lKChpbmRleE9mU3RhdGljKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YXRpY1JlY3QgPSByZWN0YW5nbGVMaXN0W2luZGV4T2ZTdGF0aWNdXG4gICAgICAgIHJldHVybiAgISFzdGF0aWNSZWN0LmFuZChyZWN0KVxuICAgICAgfSkgfHwgcmVjdC5hbmQodGhpcy5ib3VuZFJlY3QpLmdldFNxdWFyZSgpICE9PSByZWN0LmdldFNxdWFyZSgpXG5cbiAgICAgIGlmIChyZW1vdmFibGUpIHtcbiAgICAgICAgcmVjdC5yZW1vdmFibGUgPSB0cnVlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0aWNSZWN0YW5nbGVJbmRleGVzLnB1c2goaW5kZXgpXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcmVjdGFuZ2xlTGlzdFxuICB9XG5cbiAgc29ydGluZyhvZGxEcmFnZ2FibGVzTGlzdCwgbmV3RHJhZ2dhYmxlcywgaW5kZXhPZk5ld3MpIHtcbiAgICBjb25zdCBkcmFnZ2FibGVzID0gb2RsRHJhZ2dhYmxlc0xpc3QuY29uY2F0KG5ld0RyYWdnYWJsZXMpXG4gICAgbmV3RHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGluZGV4T2ZOZXdzLnB1c2goZHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkpXG4gICAgfSlcbiAgICByZXR1cm4gZHJhZ2dhYmxlc1xuICB9XG59XG5cbmNsYXNzIEZsb2F0TGVmdFN0cmF0ZWd5IGV4dGVuZHMgQmFzaWNTdHJhdGVneSB7XG4gIGNvbnN0cnVjdG9yKHJlY3RhbmdsZSwgb3B0aW9ucz17fSkge1xuICAgIHN1cGVyKHJlY3RhbmdsZSwgb3B0aW9ucylcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHJlbW92YWJsZTogdHJ1ZVxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0aGlzLnJhZGl1cyA9IG9wdGlvbnMucmFkaXVzIHx8IDgwXG5cbiAgICB0aGlzLnBhZGRpbmdUb3BMZWZ0ID0gb3B0aW9ucy5wYWRkaW5nVG9wTGVmdCB8fCBuZXcgUG9pbnQoMCwgMClcbiAgICB0aGlzLnBhZGRpbmdCb3R0b21SaWdodCA9IG9wdGlvbnMucGFkZGluZ0JvdHRvbVJpZ2h0IHx8IG5ldyBQb2ludCgwLCAwKVxuICAgIHRoaXMueUdhcEJldHdlZW5EcmFnZ2FibGVzID0gb3B0aW9ucy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgfHwgMFxuXG4gICAgdGhpcy5nZXREaXN0YW5jZSA9IG9wdGlvbnMuZ2V0RGlzdGFuY2UgfHwgZ2V0RGlzdGFuY2VcbiAgICB0aGlzLmdldFBvc2l0aW9uID0gb3B0aW9ucy5nZXRQb3NpdGlvbiB8fCAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnBvc2l0aW9uKVxuICB9XG5cbiAgcG9zaXRpb25pbmcocmVjdGFuZ2xlTGlzdCwgX2luZGV4ZXNPZk5ld3MpIHtcbiAgICBjb25zdCBib3VuZFJlY3QgPSB0aGlzLmJvdW5kUmVjdFxuICAgIGNvbnN0IHJlY3RQMiA9IGJvdW5kUmVjdC5nZXRQMigpXG4gICAgbGV0IGJvdW5kYXJ5UG9pbnRzID0gW2JvdW5kUmVjdC5wb3NpdGlvbl1cblxuICAgIHJlY3RhbmdsZUxpc3QuZm9yRWFjaCgocmVjdCwgcmVjdEluZGV4KSA9PiB7XG4gICAgICBsZXQgcG9zaXRpb24sIGlzVmFsaWQgPSBmYWxzZVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib3VuZGFyeVBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBwb3NpdGlvbiA9IG5ldyBQb2ludChcbiAgICAgICAgICBib3VuZGFyeVBvaW50c1tpXS54ICsgdGhpcy5wYWRkaW5nVG9wTGVmdC54LFxuICAgICAgICAgIGkgPiAwID8gKGJvdW5kYXJ5UG9pbnRzW2kgLSAxXS55ICsgdGhpcy55R2FwQmV0d2VlbkRyYWdnYWJsZXMpIDogKGJvdW5kUmVjdC5wb3NpdGlvbi55ICsgdGhpcy5wYWRkaW5nVG9wTGVmdC55KVxuICAgICAgICApXG5cbiAgICAgICAgaXNWYWxpZCA9IChwb3NpdGlvbi54ICsgcmVjdC5zaXplLnggPCByZWN0UDIueClcblxuICAgICAgICBpZiAoaXNWYWxpZCkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICAgIHBvc2l0aW9uID0gbmV3IFBvaW50KFxuICAgICAgICAgIGJvdW5kUmVjdC5wb3NpdGlvbi54ICsgdGhpcy5wYWRkaW5nVG9wTGVmdC54LFxuICAgICAgICAgIGJvdW5kYXJ5UG9pbnRzW2JvdW5kYXJ5UG9pbnRzLmxlbmd0aCAtIDFdLnkgKyAocmVjdEluZGV4ID4gMCA/IHRoaXMueUdhcEJldHdlZW5EcmFnZ2FibGVzIDogdGhpcy5wYWRkaW5nVG9wTGVmdC55KVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHJlY3QucG9zaXRpb24gPSBwb3NpdGlvblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZW1vdmFibGUgJiYgcmVjdC5nZXRQMygpLnkgPiBib3VuZFJlY3QuZ2V0UDMoKS55KSB7XG4gICAgICAgIHJlY3QucmVtb3ZhYmxlID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBib3VuZGFyeVBvaW50cyA9IGFkZFBvaW50VG9Cb3VuZFBvaW50cyhib3VuZGFyeVBvaW50cywgcmVjdC5nZXRQMygpLmFkZCh0aGlzLnBhZGRpbmdCb3R0b21SaWdodCkpXG4gICAgfSlcbiAgICByZXR1cm4gcmVjdGFuZ2xlTGlzdFxuICB9XG5cbiAgc29ydGluZyhvZGxEcmFnZ2FibGVzTGlzdCwgbmV3RHJhZ2dhYmxlcywgaW5kZXhPZk5ld3MpIHtcbiAgICBjb25zdCBuZXdMaXN0ID0gb2RsRHJhZ2dhYmxlc0xpc3QuY29uY2F0KClcbiAgICBjb25zdCBsaXN0T2xkUG9zaXRpb24gPSBvZGxEcmFnZ2FibGVzTGlzdC5tYXAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLmdldFBvc2l0aW9uKCkpXG4gICAgbmV3RHJhZ2dhYmxlcy5mb3JFYWNoKChuZXdEcmFnZ2FibGUpID0+IHtcbiAgICAgIGxldCBpbmRleCA9IGluZGV4T2ZOZWFyZXN0UG9pbnQobGlzdE9sZFBvc2l0aW9uLCB0aGlzLmdldFBvc2l0aW9uKG5ld0RyYWdnYWJsZSksIHRoaXMucmFkaXVzLCB0aGlzLmdldERpc3RhbmNlKVxuICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICBpbmRleCA9IG5ld0xpc3QubGVuZ3RoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbmRleCA9IG5ld0xpc3QuaW5kZXhPZihvZGxEcmFnZ2FibGVzTGlzdFtpbmRleF0pXG4gICAgICB9XG4gICAgICBuZXdMaXN0LnNwbGljZShpbmRleCwgMCwgbmV3RHJhZ2dhYmxlKVxuICAgIH0pXG4gICAgbmV3RHJhZ2dhYmxlcy5mb3JFYWNoKChuZXdEcmFnZ2FibGUpID0+IHtcbiAgICAgIGluZGV4T2ZOZXdzLnB1c2gobmV3TGlzdC5pbmRleE9mKG5ld0RyYWdnYWJsZSkpXG4gICAgfSlcbiAgICByZXR1cm4gbmV3TGlzdFxuICB9XG59XG5cbmNsYXNzIEZsb2F0UmlnaHRTdHJhdGVneSBleHRlbmRzIEZsb2F0TGVmdFN0cmF0ZWd5IHtcbiAgY29uc3RydWN0b3IocmVjdGFuZ2xlLCBvcHRpb25zPXt9KSB7XG4gICAgc3VwZXIocmVjdGFuZ2xlLCBvcHRpb25zKVxuXG4gICAgdGhpcy5wYWRkaW5nVG9wUmlnaHQgPSBvcHRpb25zLnBhZGRpbmdUb3BSaWdodCB8fCBuZXcgUG9pbnQoNSwgNSlcbiAgICB0aGlzLnBhZGRpbmdCb3R0b21MZWZ0ID0gb3B0aW9ucy5wYWRkaW5nQm90dG9tTGVmdCB8fCBuZXcgUG9pbnQoMCwgMClcbiAgICB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyA9IG9wdGlvbnMueUdhcEJldHdlZW5EcmFnZ2FibGVzIHx8IDBcblxuICAgIHRoaXMucGFkZGluZ0JvdHRvbU5lZ0xlZnQgPSBuZXcgUG9pbnQoLXRoaXMucGFkZGluZ0JvdHRvbUxlZnQueCwgdGhpcy5wYWRkaW5nQm90dG9tTGVmdC55KVxuICB9XG5cbiAgcG9zaXRpb25pbmcocmVjdGFuZ2xlTGlzdCwgX2luZGV4ZXNPZk5ld3MpIHtcbiAgICBjb25zdCBib3VuZFJlY3QgPSB0aGlzLmJvdW5kUmVjdFxuICAgIGxldCBib3VuZGFyeVBvaW50cyA9IFtib3VuZFJlY3QuZ2V0UDIoKV1cblxuICAgIHJlY3RhbmdsZUxpc3QuZm9yRWFjaCgocmVjdCwgcmVjdEluZGV4KSA9PiB7XG4gICAgICBsZXQgcG9zaXRpb24sIGlzVmFsaWQgPSBmYWxzZVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib3VuZGFyeVBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBwb3NpdGlvbiA9IG5ldyBQb2ludChcbiAgICAgICAgICBib3VuZGFyeVBvaW50c1tpXS54IC0gcmVjdC5zaXplLnggLSB0aGlzLnBhZGRpbmdUb3BSaWdodC54LFxuICAgICAgICAgIGkgPiAwID8gKGJvdW5kYXJ5UG9pbnRzW2kgLSAxXS55ICsgdGhpcy55R2FwQmV0d2VlbkRyYWdnYWJsZXMpIDogKGJvdW5kUmVjdC5wb3NpdGlvbi55ICsgdGhpcy5wYWRkaW5nVG9wUmlnaHQueSlcbiAgICAgICAgKVxuXG4gICAgICAgIGlzVmFsaWQgPSAocG9zaXRpb24ueCA+IHJlY3QucG9zaXRpb24ueClcbiAgICAgICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgcG9zaXRpb24gPSBuZXcgUG9pbnQoXG4gICAgICAgICAgYm91bmRSZWN0LmdldFAyKCkueCAgLSByZWN0LnNpemUueCAtIHRoaXMucGFkZGluZ1RvcFJpZ2h0LngsXG4gICAgICAgICAgYm91bmRhcnlQb2ludHNbYm91bmRhcnlQb2ludHMubGVuZ3RoIC0gMV0ueSArIChyZWN0SW5kZXggPiAwID8gdGhpcy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgOiB0aGlzLnBhZGRpbmdUb3BSaWdodC55KVxuICAgICAgICApXG4gICAgICB9XG4gICAgICByZWN0LnBvc2l0aW9uID0gcG9zaXRpb25cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucmVtb3ZhYmxlICYmIHJlY3QuZ2V0UDQoKS55ID4gYm91bmRSZWN0LmdldFA0KCkueSkge1xuICAgICAgICByZWN0LnJlbW92YWJsZSA9IHRydWVcbiAgICAgIH1cbiAgICAgIGJvdW5kYXJ5UG9pbnRzID0gYWRkUG9pbnRUb0JvdW5kUG9pbnRzKGJvdW5kYXJ5UG9pbnRzLCByZWN0LmdldFA0KCkuYWRkKHRoaXMucGFkZGluZ0JvdHRvbU5lZ0xlZnQpLCB0cnVlKVxuICAgIH0pXG4gICAgcmV0dXJuIHJlY3RhbmdsZUxpc3RcbiAgfVxufVxuXG5leHBvcnQgeyBOb3RDcm9zc2luZ1N0cmF0ZWd5LCBGbG9hdExlZnRTdHJhdGVneSwgRmxvYXRSaWdodFN0cmF0ZWd5IH1cbiIsImltcG9ydCByYW5nZSBmcm9tICcuL3V0aWxzL3JhbmdlLmpzJ1xuaW1wb3J0IHJlbW92ZUl0ZW0gZnJvbSAnLi91dGlscy9yZW1vdmUtYXJyYXktaXRlbSdcbmltcG9ydCBnZXREZWZhdWx0UGFyZW50IGZyb20gJy4vdXRpbHMvZ2V0LWRlZmF1bHQtcGFyZW50J1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50RW1pdHRlcidcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSAnLi9nZW9tZXRyeS9yZWN0YW5nbGUnXG5pbXBvcnQgeyB0cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5IH0gZnJvbSAnLi9nZW9tZXRyeS9kaXN0YW5jZXMnXG5pbXBvcnQgeyBzY29wZXMsIGRlZmF1bHRTY29wZSB9IGZyb20gJy4vc2NvcGUnXG5cbmltcG9ydCB7IEZsb2F0TGVmdFN0cmF0ZWd5IH0gZnJvbSAnLi9wb3NpdGlvbmluZydcblxuY29uc3QgYWRkVG9EZWZhdWx0U2NvcGUgPSBmdW5jdGlvbih0YXJnZXQpIHtcbiAgZGVmYXVsdFNjb3BlLmFkZFRhcmdldCh0YXJnZXQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhcmdldCBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGRyYWdnYWJsZXMsIG9wdGlvbnMgPSB7fSkge1xuICAgIHN1cGVyKHVuZGVmaW5lZCwgb3B0aW9ucylcbiAgICBjb25zdCB0YXJnZXQgPSB0aGlzXG4gICAgY29uc3QgcGFyZW50ID0gb3B0aW9ucy5wYXJlbnQgfHwgZ2V0RGVmYXVsdFBhcmVudChlbGVtZW50KVxuXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICB0aW1lRW5kOiAyMDAsXG4gICAgICB0aW1lRXhjYW5nZTogNDAwLFxuICAgICAgcGFyZW50OiBwYXJlbnRcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGhpcy5wb3NpdGlvbmluZ1N0cmF0ZWd5ID0gb3B0aW9ucy5zdHJhdGVneSB8fCBuZXcgRmxvYXRMZWZ0U3RyYXRlZ3koXG4gICAgICB0aGlzLmdldFJlY3RhbmdsZS5iaW5kKHRoaXMpLFxuICAgICAge1xuICAgICAgICByYWRpdXM6IDgwLFxuICAgICAgICBnZXREaXN0YW5jZTogdHJhbnNmb3JtZWRTcGFjZURpc3RhbmNlRmFjdG9yeSh7IHg6IDEsIHk6IDQgfSksXG4gICAgICAgIHJlbW92YWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIClcblxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgICBkcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnRhcmdldHMucHVzaCh0YXJnZXQpKVxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZXNcblxuICAgIFRhcmdldC5lbWl0dGVyLmVtaXQoJ3RhcmdldDpjcmVhdGUnLCB0aGlzKVxuXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIHBvc2l0aW9uaW5nIChkcmFnZ2FibGVzLCBpbmRleGVzT2ZOZXcpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbmluZ1N0cmF0ZWd5LnBvc2l0aW9uaW5nKGRyYWdnYWJsZXMsIGluZGV4ZXNPZk5ldylcbiAgfVxuXG4gIHNvcnRpbmcgKG9sZERyYWdnYWJsZXMsIG5ld0RyYWdnYWJsZXMsIGluZGV4T2ZOZXdzKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25pbmdTdHJhdGVneS5zb3J0aW5nKG9sZERyYWdnYWJsZXMsIG5ld0RyYWdnYWJsZXMsIGluZGV4T2ZOZXdzKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBsZXQgcmVjdGFuZ2xlcywgaW5kZXhlc09mTmV3XG5cbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcyA9IHRoaXMuZHJhZ2dhYmxlcy5maWx0ZXIoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgbGV0IGVsZW1lbnQgPSBkcmFnZ2FibGUuZWxlbWVudC5wYXJlbnROb2RlXG4gICAgICB3aGlsZSAoZWxlbWVudCkge1xuICAgICAgICBpZiAoZWxlbWVudCA9PT0gdGhpcy5lbGVtZW50KSB7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlXG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9KVxuXG4gICAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmxlbmd0aCkge1xuICAgICAgaW5kZXhlc09mTmV3ID0gcmFuZ2UodGhpcy5pbm5lckRyYWdnYWJsZXMubGVuZ3RoKVxuICAgICAgcmVjdGFuZ2xlcyA9IHRoaXMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgICAgfSksIGluZGV4ZXNPZk5ldylcbiAgICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgaW5kZXhlc09mTmV3KVxuICAgICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB0aGlzLmVtaXQoJ3RhcmdldDphZGQnLCBkcmFnZ2FibGUpKVxuICAgIH1cbiAgfVxuXG4gIGdldFJlY3RhbmdsZSgpIHtcbiAgICByZXR1cm4gUmVjdGFuZ2xlLmZyb21FbGVtZW50KFxuICAgICAgdGhpcy5lbGVtZW50LFxuICAgICAgdGhpcy5vcHRpb25zLnBhcmVudCxcbiAgICAgIHRoaXMub3B0aW9ucy5pc0NvbnRlbnRCb3hTaXplLFxuICAgICAgdHJ1ZVxuICAgIClcbiAgfVxuXG4gIGNhdGNoRHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuY2F0Y2hEcmFnZ2FibGUpIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuY2F0Y2hEcmFnZ2FibGUodGhpcywgZHJhZ2dhYmxlKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0YXJnZXRSZWN0YW5nbGUgPSB0aGlzLmdldFJlY3RhbmdsZSgpXG4gICAgICBjb25zdCBkcmFnZ2FibGVTcXVhcmUgPSBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKCkuZ2V0U3F1YXJlKClcblxuICAgICAgcmV0dXJuIGRyYWdnYWJsZVNxdWFyZSA8IHRhcmdldFJlY3RhbmdsZS5nZXRTcXVhcmUoKVxuICAgICAgICAgICAgICAmJiB0YXJnZXRSZWN0YW5nbGUuaW5jbHVkZVBvaW50KGRyYWdnYWJsZS5nZXRDZW50ZXIoKSlcbiAgICB9XG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRSZWN0YW5nbGUoKS5wb3NpdGlvblxuICB9XG5cbiAgZ2V0U2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRSZWN0YW5nbGUoKS5zaXplXG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHNjb3Blcy5mb3JFYWNoKChzY29wZSkgPT4gcmVtb3ZlSXRlbShzY29wZS50YXJnZXRzLCB0aGlzKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgW10pXG4gICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBbXSwgMClcbiAgfVxuXG4gIG9uRW5kKGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IG5ld0RyYWdnYWJsZXNJbmRleCA9IFtdXG4gICAgY29uc3QgaW5jbHVkZVBvaW50ID0gdGhpcy5nZXRSZWN0YW5nbGUoKS5pbmNsdWRlUG9pbnQoZHJhZ2dhYmxlLmdldFBvc2l0aW9uKCkpXG5cbiAgICBpZiAoIWluY2x1ZGVQb2ludCkge1xuICAgICAgaWYgKHRoaXMuZ2V0UmVjdGFuZ2xlKCkuaW5jbHVkZVBvaW50KGRyYWdnYWJsZS5nZXRDZW50ZXIoKSkpIHtcbiAgICAgICAgZHJhZ2dhYmxlLnBvc2l0aW9uID0gZHJhZ2dhYmxlLmdldENlbnRlcigpLmNsb25lKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuZW1pdCgndGFyZ2V0OmJlZm9yZUFkZCcsIGRyYWdnYWJsZSlcblxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzID0gdGhpcy5zb3J0aW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLCBbZHJhZ2dhYmxlXSwgbmV3RHJhZ2dhYmxlc0luZGV4KVxuICAgIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgfSksIG5ld0RyYWdnYWJsZXNJbmRleClcblxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgbmV3RHJhZ2dhYmxlc0luZGV4KVxuICAgIGlmICh0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkgIT09IC0xKSB7XG4gICAgICB0aGlzLmFkZFJlbW92ZU9uTW92ZShkcmFnZ2FibGUpXG4gICAgfVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBzZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXcsIHRpbWUpIHtcbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5zbGljZSgwKS5mb3JFYWNoKChkcmFnZ2FibGUsIGkpID0+IHtcbiAgICAgIGNvbnN0IHJlY3QgPSByZWN0YW5nbGVzW2ldLFxuICAgICAgICB0aW1lRW5kID0gdGltZSB8fCB0aW1lID09PSAwID8gdGltZSA6IGluZGV4ZXNPZk5ldy5pbmRleE9mKGkpICE9PSAtMSA/IHRoaXMub3B0aW9ucy50aW1lRW5kIDogdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlXG5cbiAgICAgIGlmIChyZWN0LnJlbW92YWJsZSkge1xuICAgICAgICBkcmFnZ2FibGUubW92ZShkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uLCB0aW1lRW5kLCB0cnVlLCB0cnVlKVxuICAgICAgICByZW1vdmVJdGVtKHRoaXMuaW5uZXJEcmFnZ2FibGVzLCBkcmFnZ2FibGUpXG4gICAgICAgIHRoaXMuZW1pdCgndGFyZ2V0OnJlbW92ZScsIGRyYWdnYWJsZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRyYWdnYWJsZS5tb3ZlKHJlY3QucG9zaXRpb24sIHRpbWVFbmQsIHRydWUsIHRydWUpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGFkZChkcmFnZ2FibGUsIHRpbWUpIHtcbiAgICBjb25zdCBuZXdEcmFnZ2FibGVzSW5kZXggPSB0aGlzLmlubmVyRHJhZ2dhYmxlcy5sZW5ndGhcblxuICAgIHRoaXMuZW1pdCgndGFyZ2V0OmJlZm9yZUFkZCcsIGRyYWdnYWJsZSlcblxuICAgIHRoaXMucHVzaElubmVyRHJhZ2dhYmxlKGRyYWdnYWJsZSlcbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBuZXdEcmFnZ2FibGVzSW5kZXgsIGRyYWdnYWJsZSlcblxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgW25ld0RyYWdnYWJsZXNJbmRleF0sIHRpbWUgfHwgMClcbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMSkge1xuICAgICAgdGhpcy5hZGRSZW1vdmVPbk1vdmUoZHJhZ2dhYmxlKVxuICAgIH1cbiAgfVxuXG4gIHB1c2hJbm5lckRyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpPT09LTEpIHtcbiAgICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxuICAgIH1cbiAgfVxuXG4gIGFkZFJlbW92ZU9uTW92ZShkcmFnZ2FibGUpIHtcbiAgICBkcmFnZ2FibGUub24oJ2RyYWc6bW92ZScsIHRoaXMucmVtb3ZlSGFuZGxlciA9ICgpID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlKGRyYWdnYWJsZSlcbiAgICB9KVxuXG4gICAgdGhpcy5lbWl0KCd0YXJnZXQ6YWRkJywgZHJhZ2dhYmxlKVxuICB9XG5cbiAgcmVtb3ZlKGRyYWdnYWJsZSkge1xuICAgIGRyYWdnYWJsZS51bnN1YnNjcmliZSgnZHJhZzptb3ZlJywgdGhpcy5yZW1vdmVIYW5kbGVyKVxuXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSlcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5zcGxpY2UoaW5kZXgsIDEpXG5cbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBbXSlcblxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgW10pXG4gICAgdGhpcy5lbWl0KCd0YXJnZXQ6cmVtb3ZlJywgZHJhZ2dhYmxlKVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUubW92ZShkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uLCAwLCB0cnVlLCB0cnVlKVxuICAgICAgdGhpcy5lbWl0KCd0YXJnZXQ6cmVtb3ZlJywgZHJhZ2dhYmxlKVxuICAgIH0pXG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMgPSBbXVxuICB9XG5cbiAgZ2V0U29ydGVkRHJhZ2dhYmxlcygpIHtcbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5zbGljZSgpXG4gIH1cbn1cblxuVGFyZ2V0LmVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKFRhcmdldClcblRhcmdldC5lbWl0dGVyLm9uKCd0YXJnZXQ6Y3JlYXRlJywgYWRkVG9EZWZhdWx0U2NvcGUpXG4iLCJpbXBvcnQgcmVtb3ZlSXRlbSBmcm9tICcuL3V0aWxzL3JlbW92ZS1hcnJheS1pdGVtJ1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50RW1pdHRlcidcbmltcG9ydCBEcmFnZ2FibGUgZnJvbSAnLi9kcmFnZ2FibGUnXG5pbXBvcnQgVGFyZ2V0IGZyb20gJy4vdGFyZ2V0J1xuXG5jb25zdCBzY29wZXMgPSBbXVxuXG5jbGFzcyBTY29wZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKGRyYWdnYWJsZXMsIHRhcmdldHMsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcih1bmRlZmluZWQsIG9wdGlvbnMpXG4gICAgc2NvcGVzLmZvckVhY2goKHNjb3BlKSA9PiB7XG4gICAgICBpZiAoZHJhZ2dhYmxlcykge1xuICAgICAgICBkcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgICAgIHJlbW92ZUl0ZW0oc2NvcGUuZHJhZ2dhYmxlcywgZHJhZ2dhYmxlKVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICBpZiAodGFyZ2V0cykge1xuICAgICAgICB0YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4ge1xuICAgICAgICAgIHJlbW92ZUl0ZW0oc2NvcGUudGFyZ2V0cywgdGFyZ2V0KVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLmRyYWdnYWJsZXMgPSBkcmFnZ2FibGVzIHx8IFtdXG4gICAgdGhpcy50YXJnZXRzID0gdGFyZ2V0cyB8fCBbXVxuICAgIHNjb3Blcy5wdXNoKHRoaXMpXG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgdGltZUVuZDogKG9wdGlvbnMudGltZUVuZCkgfHwgNDAwXG4gICAgfVxuXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLmRyYWdFbmRBY3Rpb24gPSAoKSA9PiB0aGlzLm9uRW5kKGRyYWdnYWJsZSlcbiAgICB9KVxuICB9XG5cbiAgYWRkRHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5wdXNoKGRyYWdnYWJsZSlcbiAgICBkcmFnZ2FibGUuZHJhZ0VuZEFjdGlvbiA9ICgpID0+IHRoaXMub25FbmQoZHJhZ2dhYmxlKVxuICB9XG5cbiAgYWRkVGFyZ2V0KHRhcmdldCkge1xuICAgIHRoaXMudGFyZ2V0cy5wdXNoKHRhcmdldClcbiAgfVxuXG4gIG9uRW5kKGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IHNob3RUYXJnZXRzID0gdGhpcy50YXJnZXRzLmZpbHRlcigodGFyZ2V0KSA9PiB7XG4gICAgICByZXR1cm4gdGFyZ2V0LmRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMVxuICAgIH0pLmZpbHRlcigodGFyZ2V0KSA9PiB7XG4gICAgICByZXR1cm4gdGFyZ2V0LmNhdGNoRHJhZ2dhYmxlKGRyYWdnYWJsZSlcbiAgICB9KS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICByZXR1cm4gYS5nZXRSZWN0YW5nbGUoKS5nZXRTcXVhcmUoKSAtIGIuZ2V0UmVjdGFuZ2xlKCkuZ2V0U3F1YXJlKClcbiAgICB9KVxuXG4gICAgaWYgKHNob3RUYXJnZXRzLmxlbmd0aCkge1xuICAgICAgc2hvdFRhcmdldHNbMF0ub25FbmQoZHJhZ2dhYmxlKVxuICAgIH0gZWxzZSBpZiAoZHJhZ2dhYmxlLnRhcmdldHMubGVuZ3RoKSB7XG4gICAgICBkcmFnZ2FibGUucGluUG9zaXRpb24oZHJhZ2dhYmxlLmluaXRpYWxQb3NpdGlvbiwgdGhpcy5vcHRpb25zLnRpbWVFbmQpXG4gICAgfVxuXG4gICAgdGhpcy5lbWl0KCdzY29wZTpjaGFuZ2UnKVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy50YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4gdGFyZ2V0LnJlc2V0KCkpXG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5yZWZyZXNoKCkpXG4gICAgdGhpcy50YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4gdGFyZ2V0LnJlZnJlc2goKSlcbiAgfVxuXG4gIGdldCBwb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0cy5tYXAoKHRhcmdldCkgPT4ge1xuICAgICAgcmV0dXJuIHRhcmdldC5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHRoaXMuZHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkpXG4gICAgfSlcbiAgfVxuXG4gIHNldCBwb3NpdGlvbnMocG9zaXRpb25zKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9ICd3cm9uZyBhcnJheSBsZW5ndGgnXG4gICAgaWYgKHBvc2l0aW9ucy5sZW5ndGggPT09IHRoaXMudGFyZ2V0cy5sZW5ndGgpIHtcbiAgICAgIHRoaXMudGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHRhcmdldC5yZXNldCgpKVxuXG4gICAgICBwb3NpdGlvbnMuZm9yRWFjaCgodGFyZ2V0SW5kZXhlcywgaSkgPT4ge1xuICAgICAgICB0YXJnZXRJbmRleGVzLmZvckVhY2goKGluZGV4KSA9PiB7XG4gICAgICAgICAgdGhpcy50YXJnZXRzW2ldLmFkZCh0aGlzLmRyYWdnYWJsZXNbaW5kZXhdKVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbWVzc2FnZVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBkZWZhdWx0U2NvcGUgPSBuZXcgU2NvcGUoKVxuXG5mdW5jdGlvbiBzY29wZShmbikge1xuICBjb25zdCBjdXJyZW50U2NvcGUgPSBuZXcgU2NvcGUoKVxuXG4gIGNvbnN0IGFkZERyYWdnYWJsZVRvU2NvcGUgPSBmdW5jdGlvbihkcmFnZ2FibGUpIHtcbiAgICBjdXJyZW50U2NvcGUuYWRkRHJhZ2dhYmxlKGRyYWdnYWJsZSlcbiAgICBEcmFnZ2FibGUuZW1pdHRlci5pbnRlcnJ1cHQoKVxuICB9XG5cbiAgY29uc3QgYWRkVGFyZ2V0VG9TY29wZSA9IGZ1bmN0aW9uKHRhcmdldCkge1xuICAgIGN1cnJlbnRTY29wZS5hZGRUYXJnZXQodGFyZ2V0KVxuICAgIERyYWdnYWJsZS5lbWl0dGVyLmludGVycnVwdCgpXG4gIH1cblxuICBEcmFnZ2FibGUuZW1pdHRlci5wcmVwZW5kT24oJ2RyYWdnYWJsZTpjcmVhdGUnLCBhZGREcmFnZ2FibGVUb1Njb3BlKVxuICBUYXJnZXQuZW1pdHRlci5wcmVwZW5kT24oJ3RhcmdldDpjcmVhdGUnLCBhZGRUYXJnZXRUb1Njb3BlKVxuICBmbi5jYWxsKClcbiAgRHJhZ2dhYmxlLmVtaXR0ZXIudW5zdWJzY3JpYmUoJ2RyYWdnYWJsZTpjcmVhdGUnLCBhZGREcmFnZ2FibGVUb1Njb3BlKVxuICBUYXJnZXQuZW1pdHRlci51bnN1YnNjcmliZSgndGFyZ2V0OmNyZWF0ZScsIGFkZFRhcmdldFRvU2NvcGUpXG4gIHJldHVybiBjdXJyZW50U2NvcGVcbn1cblxuZXhwb3J0IHsgc2NvcGVzLCBkZWZhdWx0U2NvcGUsIFNjb3BlLCBzY29wZSB9XG4iLCJmdW5jdGlvbiBjaGVja1N1cHBvcnRQYXNzaXZlRXZlbnRzKCkge1xuICBsZXQgcGFzc2l2ZVN1cHBvcnRlZCA9IGZhbHNlXG5cbiAgdHJ5IHtcbiAgICBjb25zdCBvcHRpb25zID0gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAncGFzc2l2ZScsIHtcbiAgICAgIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIChwYXNzaXZlU3VwcG9ydGVkID0gdHJ1ZSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3QnLCBvcHRpb25zLCBvcHRpb25zKVxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0ZXN0Jywgb3B0aW9ucywgb3B0aW9ucylcbiAgfSBjYXRjaCAoX2Vycikge1xuICAgIHBhc3NpdmVTdXBwb3J0ZWQgPSBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIHBhc3NpdmVTdXBwb3J0ZWRcbn1cblxuZXhwb3J0IGNvbnN0IGlzU3VwcG9ydFBhc3NpdmVFdmVudHMgPSBjaGVja1N1cHBvcnRQYXNzaXZlRXZlbnRzKClcblxuZnVuY3Rpb24gZXZlbnRPcHRpb25zKG9wdGlvbnMsIGZhbGxiYWNrID0gZmFsc2UpIHtcbiAgcmV0dXJuIGlzU3VwcG9ydFBhc3NpdmVFdmVudHMgPyBvcHRpb25zIDogZmFsbGJhY2tcbn1cblxuZXhwb3J0IHsgZXZlbnRPcHRpb25zIH1cblxuZXhwb3J0IGRlZmF1bHQgaXNTdXBwb3J0UGFzc2l2ZUV2ZW50c1xuIiwiaW1wb3J0IHsgYWRkQ2xhc3MsIHJlbW92ZUNsYXNzIH0gZnJvbSAnLi91dGlscy9jbGFzc2VzJ1xuaW1wb3J0IGdldERlZmF1bHRQYXJlbnQgZnJvbSAnLi91dGlscy9nZXQtZGVmYXVsdC1wYXJlbnQnXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnRFbWl0dGVyJ1xuaW1wb3J0IGdldFN0eWxlUHJvcGVydHkgZnJvbSAnZGVzYW5kcm8tZ2V0LXN0eWxlLXByb3BlcnR5J1xuaW1wb3J0IHsgQm91bmRUb0VsZW1lbnQgfSBmcm9tICcuL2JvdW5kaW5nJ1xuaW1wb3J0IFBvaW50IGZyb20gJy4vZ2VvbWV0cnkvcG9pbnQnXG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gJy4vZ2VvbWV0cnkvcmVjdGFuZ2xlJ1xuaW1wb3J0IHsgZGVmYXVsdFNjb3BlIH0gZnJvbSAnLi9zY29wZSdcbmltcG9ydCBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzIGZyb20gJy4vdXRpbHMvaXMtc3VwcG9ydC1wYXNzaXZlLWV2ZW50cydcblxuY29uc3QgaXNUb3VjaCA9ICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvd1xuY29uc3QgbW91c2VFdmVudHMgPSB7XG4gIHN0YXJ0OiAnbW91c2Vkb3duJyxcbiAgbW92ZTogJ21vdXNlbW92ZScsXG4gIGVuZDogJ21vdXNldXAnXG59XG5jb25zdCB0b3VjaEV2ZW50cyA9IHtcbiAgc3RhcnQ6ICd0b3VjaHN0YXJ0JyxcbiAgbW92ZTogJ3RvdWNobW92ZScsXG4gIGVuZDogJ3RvdWNoZW5kJ1xufVxuY29uc3QgZHJhZ2dhYmxlcyA9IFtdXG5jb25zdCB0cmFuc2Zvcm1Qcm9wZXJ0eSA9IGdldFN0eWxlUHJvcGVydHkoJ3RyYW5zZm9ybScpXG5jb25zdCB0cmFuc2l0aW9uUHJvcGVydHkgPSBnZXRTdHlsZVByb3BlcnR5KCd0cmFuc2l0aW9uJylcblxuZnVuY3Rpb24gZ2V0VG91Y2hCeUlEKGVsZW1lbnQsIHRvdWNoSWQpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50LmNoYW5nZWRUb3VjaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGVsZW1lbnQuY2hhbmdlZFRvdWNoZXNbaV0uaWRlbnRpZmllciA9PT0gdG91Y2hJZCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQuY2hhbmdlZFRvdWNoZXNbaV1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmZ1bmN0aW9uIHByZXZlbnREb3VibGVJbml0KGRyYWdnYWJsZSkge1xuICBjb25zdCBtZXNzYWdlID0gXCJmb3IgdGhpcyBlbGVtZW50IERyYWdlZS5EcmFnZ2FibGUgaXMgYWxyZWFkeSBleGlzdCwgZG9uJ3QgY3JlYXRlIGl0IHR3aWNlIFwiXG4gIGlmIChkcmFnZ2FibGVzLnNvbWUoKGV4aXN0aW5nKSA9PiBkcmFnZ2FibGUuZWxlbWVudCA9PT0gZXhpc3RpbmcuZWxlbWVudCkpIHtcbiAgICB0aHJvdyBtZXNzYWdlXG4gIH1cbiAgZHJhZ2dhYmxlcy5wdXNoKGRyYWdnYWJsZSlcbn1cblxuZnVuY3Rpb24gYWRkVG9EZWZhdWx0U2NvcGUoZHJhZ2dhYmxlKSB7XG4gIGRlZmF1bHRTY29wZS5hZGREcmFnZ2FibGUoZHJhZ2dhYmxlKVxufVxuXG5mdW5jdGlvbiBjb3B5U3R5bGVzKHNvdXJjZSwgZGVzdGluYXRpb24pIHtcbiAgY29uc3QgY3MgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShzb3VyY2UpXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGtleSA9IGNzW2ldXG4gICAgaWYgKChrZXkuaW5kZXhPZigndHJhbnNpdGlvbicpIDwgMCkgJiYgKGtleS5pbmRleE9mKCd0cmFuc2Zvcm0nKSA8IDApKSB7XG4gICAgICBkZXN0aW5hdGlvbi5zdHlsZVtrZXldID0gY3Nba2V5XVxuICAgIH1cbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc291cmNlLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgY29weVN0eWxlcyhzb3VyY2UuY2hpbGRyZW5baV0sIGRlc3RpbmF0aW9uLmNoaWxkcmVuW2ldKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYWdnYWJsZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcih1bmRlZmluZWQsIG9wdGlvbnMpXG4gICAgdGhpcy50YXJnZXRzID0gW11cbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIHByZXZlbnREb3VibGVJbml0KHRoaXMpXG4gICAgRHJhZ2dhYmxlLmVtaXR0ZXIuZW1pdCgnZHJhZ2dhYmxlOmNyZWF0ZScsIHRoaXMpXG4gICAgdGhpcy5fZW5hYmxlID0gdHJ1ZVxuICAgIHRoaXMuc3RhcnRQb3NpdGlvbmluZygpXG4gICAgdGhpcy5zdGFydExpc3RlbmluZygpXG4gIH1cblxuICBzdGFydFBvc2l0aW9uaW5nKCkge1xuICAgIHRoaXMuX3NldERlZmF1bHRUcmFuc2l0aW9uKClcbiAgICB0aGlzLm9mZnNldCA9IFBvaW50LmVsZW1lbnRPZmZzZXQodGhpcy5lbGVtZW50LCB0aGlzLnBhcmVudCwgdHJ1ZSlcbiAgICB0aGlzLnBpbm5lZFBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICB0aGlzLmluaXRpYWxQb3NpdGlvbiA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbiB8fCB0aGlzLm9mZnNldFxuXG4gICAgdGhpcy5waW5Qb3NpdGlvbih0aGlzLmluaXRpYWxQb3NpdGlvbilcblxuICAgIGlmICh0aGlzLmJvdW5kaW5nLnJlZnJlc2gpIHtcbiAgICAgIHRoaXMuYm91bmRpbmcucmVmcmVzaCgpXG4gICAgfVxuICB9XG5cbiAgc3RhcnRMaXN0ZW5pbmcoKSB7XG4gICAgdGhpcy5fZHJhZ1N0YXJ0ID0gKGV2ZW50KSA9PiB0aGlzLmRyYWdTdGFydChldmVudClcbiAgICB0aGlzLl9kcmFnTW92ZSA9IChldmVudCkgPT4gdGhpcy5kcmFnTW92ZShldmVudClcbiAgICB0aGlzLl9kcmFnRW5kID0gKGV2ZW50KSA9PiB0aGlzLmRyYWdFbmQoZXZlbnQpXG4gICAgdGhpcy5fbmF0aXZlRHJhZ1N0YXJ0ID0gKGV2ZW50KSA9PiB0aGlzLm5hdGl2ZURyYWdTdGFydChldmVudClcbiAgICB0aGlzLl9uYXRpdmVEcmFnTW92ZSA9IChldmVudCkgPT4gdGhpcy5uYXRpdmVEcmFnTW92ZShldmVudClcbiAgICB0aGlzLl9uYXRpdmVEcmFnRW5kID0gKGV2ZW50KSA9PiB0aGlzLm5hdGl2ZURyYWdFbmQoZXZlbnQpXG4gICAgdGhpcy5fbmF0aXZlRHJvcCA9IChldmVudCkgPT4gdGhpcy5uYXRpdmVEcm9wKGV2ZW50KVxuXG4gICAgdGhpcy5oYW5kbGVyLmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydCwgaXNTdXBwb3J0UGFzc2l2ZUV2ZW50cyA/IHsgcGFzc2l2ZTogZmFsc2UgfSA6IGZhbHNlKVxuICAgIHRoaXMuaGFuZGxlci5hZGRFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQsIGlzU3VwcG9ydFBhc3NpdmVFdmVudHMgPyB7IHBhc3NpdmU6IGZhbHNlIH0gOiBmYWxzZSlcbiAgICB0aGlzLmhhbmRsZXIuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgdGhpcy5fbmF0aXZlRHJhZ1N0YXJ0KVxuICB9XG5cbiAgZ2V0U2l6ZSgpIHtcbiAgICByZXR1cm4gUG9pbnQuZWxlbWVudFNpemUodGhpcy5lbGVtZW50LCB0aGlzLm9wdGlvbnMuaXNDb250ZW50Qm94U2l6ZSlcbiAgfVxuXG4gIGdldFBvc2l0aW9uKCkge1xuICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLm9mZnNldC5hZGQodGhpcy5fdHJhbnNmb3JtUG9zaXRpb24gfHwgbmV3IFBvaW50KDAsIDApKVxuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uXG4gIH1cblxuICBnZXRDZW50ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb24uYWRkKHRoaXMuZ2V0U2l6ZSgpLm11bHQoMC41KSlcbiAgfVxuXG4gIF9zZXREZWZhdWx0VHJhbnNpdGlvbiAoKSB7XG4gICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV0gPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsZW1lbnQpW3RyYW5zaXRpb25Qcm9wZXJ0eV1cbiAgfVxuXG4gIF9zZXRUcmFuc2l0aW9uKHRpbWUpIHtcbiAgICBsZXQgdHJhbnNpdGlvbiA9IHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldXG4gICAgY29uc3QgdHJhbnNpdGlvbkNzcyA9IGB0cmFuc2Zvcm0gJHt0aW1lfW1zYFxuXG4gICAgaWYgKCEvdHJhbnNmb3JtIFxcZCptP3MvLnRlc3QodHJhbnNpdGlvbikpIHtcbiAgICAgIGlmICh0cmFuc2l0aW9uKSB7XG4gICAgICAgIHRyYW5zaXRpb24gKz0gYCwgJHt0cmFuc2l0aW9uQ3NzfWBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyYW5zaXRpb24gPSB0cmFuc2l0aW9uQ3NzXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyYW5zaXRpb24gPSB0cmFuc2l0aW9uLnJlcGxhY2UoL3RyYW5zZm9ybSBcXGQqbT9zLywgdHJhbnNpdGlvbkNzcylcbiAgICB9XG5cbiAgICB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNpdGlvblByb3BlcnR5XSA9IHRyYW5zaXRpb25cbiAgfVxuXG4gIF9zZXRUcmFuc2xhdGUocG9pbnQpIHtcbiAgICB0aGlzLl90cmFuc2Zvcm1Qb3NpdGlvbiA9IHBvaW50XG5cbiAgICBsZXQgdHJhbnNmb3JtID0gdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BlcnR5XVxuICAgIGxldCB0cmFuc2xhdGVDc3MgPSBgIHRyYW5zbGF0ZTNkKCR7cG9pbnQueH1weCwgJHtwb2ludC55fXB4LCAwcHgpYFxuXG4gICAgY29uc3QgdWEgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudFxuICAgIGNvbnN0IG1zaWUgPSB1YS5pbmRleE9mKCdNU0lFICcpICE9PSAtMVxuXG4gICAgaWYgKG1zaWUpIHtcbiAgICAgIHRyYW5zbGF0ZUNzcyA9IGAgdHJhbnNsYXRlKCR7cG9pbnQueH1weCwke3BvaW50Lnl9cHgpYFxuICAgICAgaWYgKCEvdHJhbnNsYXRlXFwoW14pXStcXCkvLnRlc3QodHJhbnNmb3JtKSkge1xuICAgICAgICB0cmFuc2Zvcm0gKz0gdHJhbnNsYXRlQ3NzXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cmFuc2Zvcm0gPSB0cmFuc2Zvcm0ucmVwbGFjZSgvdHJhbnNsYXRlXFwoW14pXStcXCkvLCB0cmFuc2xhdGVDc3MpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghL3RyYW5zbGF0ZTNkXFwoW14pXStcXCkvLnRlc3QodHJhbnNmb3JtKSkge1xuICAgICAgICB0cmFuc2Zvcm0gKz0gdHJhbnNsYXRlQ3NzXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cmFuc2Zvcm0gPSB0cmFuc2Zvcm0ucmVwbGFjZSgvdHJhbnNsYXRlM2RcXChbXildK1xcKS8sIHRyYW5zbGF0ZUNzcylcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcGVydHldID0gdHJhbnNmb3JtXG4gIH1cblxuICBtb3ZlKHBvaW50LCB0aW1lPTAsIGlzU2lsZW50PWZhbHNlKSB7XG4gICAgcG9pbnQgPSBwb2ludC5jbG9uZSgpXG5cbiAgICB0aGlzLmRldGVybWluZURpcmVjdGlvbihwb2ludClcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9pbnRcblxuICAgIHRoaXMuX3NldFRyYW5zaXRpb24odGltZSlcbiAgICB0aGlzLl9zZXRUcmFuc2xhdGUocG9pbnQuc3ViKHRoaXMub2Zmc2V0KSlcblxuICAgIGlmICghaXNTaWxlbnQpIHtcbiAgICAgIHRoaXMuZW1pdCgnZHJhZzptb3ZlJylcbiAgICB9XG4gIH1cblxuICBwaW5Qb3NpdGlvbihwb2ludCwgdGltZT0wLCBzaWxlbnQ9dHJ1ZSkge1xuICAgIHRoaXMucGlubmVkUG9zaXRpb24gPSBwb2ludC5jbG9uZSgpXG4gICAgdGhpcy5tb3ZlKHRoaXMucGlubmVkUG9zaXRpb24sIHRpbWUsIHNpbGVudClcbiAgfVxuXG4gIHJlc2V0UG9zaXRpb25Ub0luaXRpYWwgKCkge1xuICAgIHRoaXMucGluUG9zaXRpb24odGhpcy5pbml0aWFsUG9zaXRpb24pXG4gIH1cblxuICByZWZyZXNoUG9zaXRpb24gKCkge1xuICAgIHRoaXMuc2V0UG9zaXRpb24odGhpcy5nZXRQb3NpdGlvbigpKVxuICB9XG5cbiAgc2V0UG9zaXRpb24ocG9pbnQpIHtcbiAgICBwb2ludCA9IHBvaW50LmNsb25lKClcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9pbnRcbiAgICB0aGlzLl9zZXRUcmFuc2l0aW9uKDApXG4gICAgdGhpcy5fc2V0VHJhbnNsYXRlKHBvaW50LnN1Yih0aGlzLm9mZnNldCkpXG4gIH1cblxuICBkZXRlcm1pbmVEaXJlY3Rpb24ocG9pbnQpIHtcbiAgICB0aGlzLmxlZnREaXJlY3Rpb24gPSAodGhpcy5wb3NpdGlvbi54IDwgcG9pbnQueClcbiAgICB0aGlzLnJpZ2h0RGlyZWN0aW9uID0gKHRoaXMucG9zaXRpb24ueCA+IHBvaW50LngpXG4gICAgdGhpcy51cERpcmVjdGlvbiA9ICh0aGlzLnBvc2l0aW9uLnkgPiBwb2ludC55KVxuICAgIHRoaXMuZG93bkRpcmVjdGlvbiA9ICh0aGlzLnBvc2l0aW9uLnkgPCBwb2ludC55KVxuICB9XG5cbiAgZHJhZ1N0YXJ0KGV2ZW50KSB7XG4gICAgdGhpcy5jdXJyZW50RXZlbnQgPSBldmVudFxuICAgIGlmICghdGhpcy5fZW5hYmxlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBpc1RvdWNoRXZlbnQgPSAoaXNUb3VjaCAmJiAoZXZlbnQgaW5zdGFuY2VvZiB3aW5kb3cuVG91Y2hFdmVudCkpXG5cbiAgICB0aGlzLl9zdGFydFRvdWNoUG9pbnQgPSBuZXcgUG9pbnQoXG4gICAgICBpc1RvdWNoRXZlbnQgPyBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCA6IGV2ZW50LmNsaWVudFgsXG4gICAgICBpc1RvdWNoRXZlbnQgPyBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWSA6IGV2ZW50LmNsaWVudFlcbiAgICApXG5cbiAgICB0aGlzLl9zdGFydFBvc2l0aW9uID0gdGhpcy5nZXRQb3NpdGlvbigpXG4gICAgaWYgKGlzVG91Y2hFdmVudCkge1xuICAgICAgdGhpcy5fdG91Y2hJZCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmlkZW50aWZpZXJcbiAgICB9XG5cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGlmIChldmVudC50YXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElucHV0RWxlbWVudCB8fFxuICAgICAgICAgIGV2ZW50LnRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSW5wdXRFbGVtZW50KSB7XG4gICAgICBldmVudC50YXJnZXQuZm9jdXMoKVxuICAgIH1cblxuICAgIGlmICghKHRoaXMubmF0aXZlRHJhZ0FuZERyb3AgfHxcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSW5wdXRFbGVtZW50IHx8XG4gICAgICAgICAgICBldmVudC50YXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElucHV0RWxlbWVudCkpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB9XG5cbiAgICBpZiAodGhpcy5uYXRpdmVEcmFnQW5kRHJvcCkge1xuICAgICAgaWYgKGlzVG91Y2hFdmVudCAmJiB0aGlzLmVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcE9uVG91Y2gpIHtcbiAgICAgICAgdGhpcy5lbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3AoZXZlbnQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsZW1lbnQuZHJhZ2dhYmxlID0gdHJ1ZVxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fbmF0aXZlRHJhZ0VuZCwgaXNTdXBwb3J0UGFzc2l2ZUV2ZW50cyA/IHsgcGFzc2l2ZTogZmFsc2UgfSA6IGZhbHNlKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlLCBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzID8geyBwYXNzaXZlOiBmYWxzZSB9IDogZmFsc2UpXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlLCBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzID8geyBwYXNzaXZlOiBmYWxzZSB9IDogZmFsc2UpXG5cbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kLCBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzID8geyBwYXNzaXZlOiBmYWxzZSB9IDogZmFsc2UpXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZCwgaXNTdXBwb3J0UGFzc2l2ZUV2ZW50cyA/IHsgcGFzc2l2ZTogZmFsc2UgfSA6IGZhbHNlKVxuICAgIH1cblxuICAgIHRoaXMuaXNEcmFnZ2luZyA9IHRydWVcbiAgICB0aGlzLmVtaXQoJ2RyYWc6c3RhcnQnKVxuICAgIGFkZENsYXNzKHRoaXMuZWxlbWVudCwgJ2RyYWdlZS1hY3RpdmUnKVxuICAgIHRoaXMuZW1pdCgnZHJhZzptb3ZlJylcbiAgfVxuXG4gIHN0b3BEcmFnZ2luZygpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX25hdGl2ZURyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCB0aGlzLl9uYXRpdmVEcmFnTW92ZSlcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcm9wJywgdGhpcy5fbmF0aXZlRHJvcClcbiAgICB0aGlzLmVsZW1lbnQuZHJhZ2dhYmxlID0gZmFsc2VcbiAgICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZVxuICAgIHJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudCwgJ2RyYWdlZS1hY3RpdmUnKVxuICB9XG5cbiAgZHJhZ01vdmUoZXZlbnQpIHtcbiAgICB0aGlzLmN1cnJlbnRFdmVudCA9IGV2ZW50XG4gICAgbGV0IHRvdWNoXG5cbiAgICBjb25zdCBpc1RvdWNoRXZlbnQgPSAoaXNUb3VjaCAmJiAoZXZlbnQgaW5zdGFuY2VvZiB3aW5kb3cuVG91Y2hFdmVudCkpXG4gICAgaWYgKGlzVG91Y2hFdmVudCkge1xuICAgICAgdG91Y2ggPSBnZXRUb3VjaEJ5SUQoZXZlbnQsIHRoaXMuX3RvdWNoSWQpXG5cbiAgICAgIGlmICghdG91Y2gpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc3QgdG91Y2hQb2ludCA9IG5ldyBQb2ludChcbiAgICAgIGlzVG91Y2hFdmVudCA/IHRvdWNoLnBhZ2VYIDogZXZlbnQuY2xpZW50WCxcbiAgICAgIGlzVG91Y2hFdmVudCA/IHRvdWNoLnBhZ2VZIDogZXZlbnQuY2xpZW50WVxuICAgIClcblxuICAgIGxldCBwb2ludCA9IHRoaXMuX3N0YXJ0UG9zaXRpb24uYWRkKHRvdWNoUG9pbnQuc3ViKHRoaXMuX3N0YXJ0VG91Y2hQb2ludCkpXG4gICAgcG9pbnQgPSB0aGlzLmJvdW5kaW5nLmJvdW5kKHBvaW50LCB0aGlzLmdldFNpemUoKSlcbiAgICB0aGlzLnRvdWNoUG9pbnQgPSB0b3VjaFBvaW50XG4gICAgdGhpcy5tb3ZlKHBvaW50KVxuICB9XG5cbiAgZHJhZ0VuZChldmVudCkge1xuICAgIGNvbnN0IGlzVG91Y2hFdmVudCA9IChpc1RvdWNoICYmIChldmVudCBpbnN0YW5jZW9mIHdpbmRvdy5Ub3VjaEV2ZW50KSlcblxuICAgIGlmIChpc1RvdWNoRXZlbnQgJiYgIWdldFRvdWNoQnlJRChldmVudCwgdGhpcy5fdG91Y2hJZCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIHRoaXMuZHJhZ0VuZEFjdGlvbigpXG4gICAgdGhpcy5lbWl0KCdkcmFnOmVuZCcpXG5cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG5cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcblxuICAgIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlXG4gICAgcmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50LCAnZHJhZ2VlLWFjdGl2ZScpXG4gIH1cblxuICBuYXRpdmVEcmFnU3RhcnQoZXZlbnQpIHtcbiAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YSgnYXBwbGljYXRpb24vZHJhZ2dhYmxlJywgdGhpcylcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgdGhpcy5fbmF0aXZlRHJvcClcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIHRoaXMuX25hdGl2ZURyYWdNb3ZlKVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICB9XG5cbiAgbmF0aXZlRHJhZ01vdmUoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgYWRkQ2xhc3ModGhpcy5lbGVtZW50LCAnZHJhZ2VlLXBsYWNlaG9sZGVyJylcbiAgICB0aGlzLmN1cnJlbnRFdmVudCA9IGV2ZW50XG4gICAgaWYgKGV2ZW50LmNsaWVudFggPT09IDAgJiYgZXZlbnQuY2xpZW50WSA9PT0gMCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgdG91Y2hQb2ludCA9IG5ldyBQb2ludChldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZKVxuICAgIGxldCBwb2ludCA9IHRoaXMuX3N0YXJ0UG9zaXRpb24uYWRkKHRvdWNoUG9pbnQuc3ViKHRoaXMuX3N0YXJ0VG91Y2hQb2ludCkpXG4gICAgcG9pbnQgPSB0aGlzLmJvdW5kaW5nLmJvdW5kKHBvaW50LCB0aGlzLmdldFNpemUoKSlcbiAgICB0aGlzLnRvdWNoUG9pbnQgPSB0b3VjaFBvaW50XG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvaW50XG4gICAgdGhpcy5lbWl0KCdkcmFnOm1vdmUnKVxuICB9XG5cbiAgbmF0aXZlRHJvcChldmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgbmF0aXZlRHJhZ0VuZChfZXZlbnQpIHtcbiAgICByZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnQsICdkcmFnZWUtcGxhY2Vob2xkZXInKVxuICAgIHRoaXMuZHJhZ0VuZEFjdGlvbigpXG4gICAgdGhpcy5lbWl0KCdkcmFnOmVuZCcpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCB0aGlzLl9uYXRpdmVEcmFnTW92ZSlcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcm9wJywgdGhpcy5fbmF0aXZlRHJvcClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZVxuICAgIHRoaXMuZWxlbWVudC5kcmFnZ2FibGUgPSBmYWxzZVxuICAgIHJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudCwgJ2RyYWdlZS1hY3RpdmUnKVxuICB9XG5cbiAgZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wKGV2ZW50KSB7XG4gICAgY29uc3QgcGFyZW50UmVjdCA9IHRoaXMucGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgY29uc3QgY2xvbmVkRWxlbWVudCA9IHRoaXMuZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSlcbiAgICBjbG9uZWRFbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BlcnR5XSA9ICcnXG4gICAgY29weVN0eWxlcyh0aGlzLmVsZW1lbnQsIGNsb25lZEVsZW1lbnQpXG4gICAgY2xvbmVkRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSdcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNsb25lZEVsZW1lbnQpXG4gICAgYWRkQ2xhc3ModGhpcy5lbGVtZW50LCAnZHJhZ2VlLXBsYWNlaG9sZGVyJylcblxuICAgIGNvbnN0IGVtdWxhdGlvbkRyYWdnYWJsZSA9IG5ldyBEcmFnZ2FibGUoY2xvbmVkRWxlbWVudCwge1xuICAgICAgcGFyZW50OiBkb2N1bWVudC5ib2R5LFxuICAgICAgb246IHtcbiAgICAgICAgJ2RyYWc6bW92ZSc6ICgpID0+IHtcbiAgICAgICAgICB0aGlzLnBvc2l0aW9uID0gbmV3IFBvaW50KFxuICAgICAgICAgICAgZW11bGF0aW9uRHJhZ2dhYmxlLnBvc2l0aW9uLnggLSBwYXJlbnRSZWN0LmxlZnQgLSB3aW5kb3cuc2Nyb2xsWCxcbiAgICAgICAgICAgIGVtdWxhdGlvbkRyYWdnYWJsZS5wb3NpdGlvbi55IC0gcGFyZW50UmVjdC50b3AgLSB3aW5kb3cuc2Nyb2xsWVxuICAgICAgICAgIClcbiAgICAgICAgICB0aGlzLmVtaXQoJ2RyYWc6bW92ZScpXG4gICAgICAgIH0sXG4gICAgICAgICdkcmFnOmVuZCc6ICgpID0+IHtcbiAgICAgICAgICBlbXVsYXRpb25EcmFnZ2FibGUuZGVzdHJveSgpXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChjbG9uZWRFbGVtZW50KVxuICAgICAgICAgIHJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudCwgJ2RyYWdlZS1wbGFjZWhvbGRlcicpXG4gICAgICAgICAgcmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50LCAnZHJhZ2VlLWFjdGl2ZScpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgZW11bGF0aW9uRHJhZ2dhYmxlLm1vdmUobmV3IFBvaW50KFxuICAgICAgdGhpcy5waW5uZWRQb3NpdGlvbi54ICsgcGFyZW50UmVjdC5sZWZ0ICsgd2luZG93LnNjcm9sbFgsXG4gICAgICB0aGlzLnBpbm5lZFBvc2l0aW9uLnkgKyBwYXJlbnRSZWN0LnRvcCArIHdpbmRvdy5zY3JvbGxZXG4gICAgKSlcblxuICAgIGVtdWxhdGlvbkRyYWdnYWJsZS5kcmFnU3RhcnQoZXZlbnQpXG4gIH1cblxuICBkcmFnRW5kQWN0aW9uKCkge1xuICAgIHRoaXMucGluUG9zaXRpb24odGhpcy5wb3NpdGlvbilcbiAgfVxuXG4gIGdldFJlY3RhbmdsZSgpIHtcbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZSh0aGlzLnBvc2l0aW9uLCB0aGlzLmdldFNpemUoKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgdGhpcy5nZXRTaXplKHRydWUpXG4gICAgaWYgKHRoaXMuYm91bmRpbmcucmVmcmVzaCkge1xuICAgICAgdGhpcy5ib3VuZGluZy5yZWZyZXNoKClcbiAgICB9XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuaGFuZGxlci5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQpXG4gICAgdGhpcy5oYW5kbGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgdGhpcy5fbmF0aXZlRHJhZ1N0YXJ0KVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgdGhpcy5fbmF0aXZlRHJhZ01vdmUpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIHRoaXMuX25hdGl2ZURyYWdFbmQpXG4gICAgdGhpcy5yZXNldEVtaXR0ZXIoKVxuXG4gICAgY29uc3QgaW5kZXggPSBkcmFnZ2FibGVzLmluZGV4T2YodGhpcylcbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgZHJhZ2dhYmxlcy5zcGxpY2UoaW5kZXgsIDEpXG4gICAgfVxuICB9XG5cbiAgZ2V0IHBhcmVudCgpIHtcbiAgICByZXR1cm4gKHRoaXMuX3BhcmVudCA9IHRoaXMuX3BhcmVudCB8fCB0aGlzLm9wdGlvbnMucGFyZW50IHx8IGdldERlZmF1bHRQYXJlbnQodGhpcy5lbGVtZW50KSlcbiAgfVxuXG4gIGdldCBib3VuZGluZygpIHtcbiAgICByZXR1cm4gKHRoaXMuX2JvdW5kaW5nID0gdGhpcy5fYm91bmRpbmcgfHwgdGhpcy5vcHRpb25zLmJvdW5kaW5nIHx8IG5ldyBCb3VuZFRvRWxlbWVudCh0aGlzLnBhcmVudCwgdGhpcy5wYXJlbnQpKVxuICB9XG5cbiAgZ2V0IGhhbmRsZXIoKSB7XG4gICAgaWYgKCF0aGlzLl9oYW5kbGVyKSB7XG4gICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5oYW5kbGVyID09PSAnc3RyaW5nJykge1xuICAgICAgICB0aGlzLl9oYW5kbGVyID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5vcHRpb25zLmhhbmRsZXIpIHx8IHRoaXMuZWxlbWVudFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5faGFuZGxlciA9IHRoaXMub3B0aW9ucy5oYW5kbGVyIHx8IHRoaXMuZWxlbWVudFxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9oYW5kbGVyXG4gIH1cblxuICBnZXQgbmF0aXZlRHJhZ0FuZERyb3AoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5uYXRpdmVEcmFnQW5kRHJvcCB8fCBmYWxzZVxuICB9XG5cbiAgZ2V0IGVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcE9uVG91Y2goKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5lbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3BPblRvdWNoIHx8IHRydWVcbiAgfVxuXG4gIGdldCBlbmFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZVxuICB9XG5cbiAgc2V0IGVuYWJsZShlbmFibGUpIHtcbiAgICBpZiAoZW5hYmxlKSB7XG4gICAgICByZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnQsICdkcmFnZWUtZGlzYWJsZScpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFkZENsYXNzKHRoaXMuZWxlbWVudCwgJ2RyYWdlZS1kaXNhYmxlJylcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlID0gZW5hYmxlXG4gIH1cbn1cblxuRHJhZ2dhYmxlLmVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKERyYWdnYWJsZSlcbkRyYWdnYWJsZS5lbWl0dGVyLm9uKCdkcmFnZ2FibGU6Y3JlYXRlJywgYWRkVG9EZWZhdWx0U2NvcGUpXG4iLCJpbXBvcnQgcmVtb3ZlSXRlbSBmcm9tICcuL3V0aWxzL3JlbW92ZS1hcnJheS1pdGVtJ1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50RW1pdHRlcidcbmltcG9ydCB7XG4gIGdldERpc3RhbmNlLFxuICBpbmRleE9mTmVhcmVzdFBvaW50XG59IGZyb20gJy4vZ2VvbWV0cnkvZGlzdGFuY2VzJ1xuXG5pbXBvcnQgRHJhZ2dhYmxlIGZyb20gJy4vZHJhZ2dhYmxlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0IGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoZHJhZ2dhYmxlcywgb3B0aW9ucz17fSkge1xuICAgIHN1cGVyKHVuZGVmaW5lZCwgb3B0aW9ucylcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHRpbWVFbmQ6IDIwMCxcbiAgICAgIHRpbWVFeGNhbmdlOiA0MDAsXG4gICAgICByYWRpdXM6IDMwLFxuICAgICAgZ2V0RGlzdGFuY2U6IGdldERpc3RhbmNlXG4gICAgfSwgb3B0aW9ucylcblxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZXNcbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLl9lbmFibGUgPSB0cnVlXG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2godGhpcy5pbml0RHJhZ2dhYmxlLCB0aGlzKVxuICB9XG5cbiAgaW5pdERyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICBkcmFnZ2FibGUuZW5hYmxlID0gdGhpcy5fZW5hYmxlXG4gICAgZHJhZ2dhYmxlLm9uKCdkcmFnOm1vdmUnLCAoKSA9PiB0aGlzLm9uTW92ZShkcmFnZ2FibGUpKVxuICAgIGRyYWdnYWJsZS5kcmFnRW5kQWN0aW9uID0gKCkgPT4gZHJhZ2dhYmxlLnBpblBvc2l0aW9uKGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbiwgdGhpcy5vcHRpb25zLnRpbWVFbmQpXG4gIH1cblxuICBvbk1vdmUoZHJhZ2dhYmxlKSB7XG4gICAgY29uc3Qgc29ydGVkRHJhZ2dhYmxlcyA9IHRoaXMuZ2V0U29ydGVkRHJhZ2dhYmxlcygpXG4gICAgY29uc3QgcGlubmVkUG9zaXRpb25zID0gc29ydGVkRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uKVxuXG4gICAgY29uc3QgY3VycmVudEluZGV4ID0gc29ydGVkRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSlcbiAgICBjb25zdCB0YXJnZXRJbmRleCA9IGluZGV4T2ZOZWFyZXN0UG9pbnQocGlubmVkUG9zaXRpb25zLCBkcmFnZ2FibGUucG9zaXRpb24sIHRoaXMub3B0aW9ucy5yYWRpdXMsIHRoaXMub3B0aW9ucy5nZXREaXN0YW5jZSlcblxuICAgIGlmICh0YXJnZXRJbmRleCAhPT0gLTEgJiYgY3VycmVudEluZGV4ICE9PSB0YXJnZXRJbmRleCkge1xuICAgICAgaWYgKHRhcmdldEluZGV4IDwgY3VycmVudEluZGV4KSB7XG4gICAgICAgIGZvciAobGV0IGk9dGFyZ2V0SW5kZXg7IGk8Y3VycmVudEluZGV4OyBpKyspIHtcbiAgICAgICAgICBzb3J0ZWREcmFnZ2FibGVzW2ldLnBpblBvc2l0aW9uKHBpbm5lZFBvc2l0aW9uc1tpKzFdLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAobGV0IGk9Y3VycmVudEluZGV4OyBpPHRhcmdldEluZGV4OyBpKyspIHtcbiAgICAgICAgICBzb3J0ZWREcmFnZ2FibGVzW2krMV0ucGluUG9zaXRpb24ocGlubmVkUG9zaXRpb25zW2ldLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGRyYWdnYWJsZS5uYXRpdmVEcmFnQW5kRHJvcCkge1xuICAgICAgICBkcmFnZ2FibGUucGluUG9zaXRpb24ocGlubmVkUG9zaXRpb25zW3RhcmdldEluZGV4XSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbiA9IHBpbm5lZFBvc2l0aW9uc1t0YXJnZXRJbmRleF1cbiAgICAgIH1cblxuICAgICAgdGhpcy5lbWl0KCdsaXN0OmNoYW5nZScpXG4gICAgfVxuICB9XG5cbiAgZ2V0Q3VycmVudFBpbm5lZFBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5kcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24uY2xvbmUoKSlcbiAgfVxuXG4gIGdldFNvcnRlZERyYWdnYWJsZXMoKSB7XG4gICAgY29uc3QgaW5pdGlhbFBvc2l0aW9ucyA9IHRoaXMuZHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLmluaXRpYWxQb3NpdGlvbilcblxuICAgIGNvbnN0IHNvcnRlZERyYWdnYWJsZXMgPSBpbml0aWFsUG9zaXRpb25zLm1hcCgocG9zaXRpb24pID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmRyYWdnYWJsZXMuZmlsdGVyKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbi5jb21wYXJlKHBvc2l0aW9uKSlbMF1cbiAgICB9KVxuXG4gICAgcmV0dXJuIHNvcnRlZERyYWdnYWJsZXNcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5yZXNldFBvc2l0aW9uVG9Jbml0aWFsKCkpXG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5yZWZyZXNoKCkpXG4gIH1cblxuICBhZGQoZHJhZ2dhYmxlcykge1xuICAgIGlmICghKGRyYWdnYWJsZXMgaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICAgIGRyYWdnYWJsZXMgPSBbZHJhZ2dhYmxlc11cbiAgICB9XG4gICAgZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHRoaXMuaW5pdERyYWdnYWJsZShkcmFnZ2FibGUpKVxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IHRoaXMuZHJhZ2dhYmxlcy5jb25jYXQoZHJhZ2dhYmxlcylcbiAgfVxuXG4gIHJlbW92ZShkcmFnZ2FibGVzKSB7XG4gICAgY29uc3QgaW5pdGlhbFBvc2l0aW9ucyA9IHRoaXMuZHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLmluaXRpYWxQb3NpdGlvbilcbiAgICBjb25zdCBsaXN0ID0gW11cbiAgICBjb25zdCBzb3J0ZWREcmFnZ2FibGVzID0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcblxuICAgIGlmICghKGRyYWdnYWJsZXMgaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICAgIGRyYWdnYWJsZXMgPSBbZHJhZ2dhYmxlc11cbiAgICB9XG5cbiAgICBkcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLnJlc2V0T24oJ2RyYWc6ZW5kJylcbiAgICAgIGRyYWdnYWJsZS5yZXNldE9uKCdkcmFnOm1vdmUnKVxuICAgICAgcmVtb3ZlSXRlbSh0aGlzLmRyYWdnYWJsZXMsIGRyYWdnYWJsZSlcbiAgICB9KVxuXG4gICAgbGV0IGogPSAwXG4gICAgc29ydGVkRHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGlmICh0aGlzLmRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMSkge1xuICAgICAgICBpZiAoZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uICE9PSBpbml0aWFsUG9zaXRpb25zW2pdKSB7XG4gICAgICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKGluaXRpYWxQb3NpdGlvbnNbal0sIHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSlcbiAgICAgICAgfVxuICAgICAgICBkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uID0gaW5pdGlhbFBvc2l0aW9uc1tqXVxuICAgICAgICBqKytcbiAgICAgICAgbGlzdC5wdXNoKGRyYWdnYWJsZSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGxpc3RcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMucmVtb3ZlKHRoaXMuZHJhZ2dhYmxlcy5zbGljZSgpKVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUuZGVzdHJveSgpKVxuICB9XG5cbiAgZ2V0IHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDdXJyZW50UGlubmVkUG9zaXRpb25zKClcbiAgfVxuXG4gIHNldCBwb3NpdGlvbnMocG9zaXRpb25zKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9ICd3cm9uZyBhcnJheSBsZW5ndGgnXG4gICAgaWYgKHBvc2l0aW9ucy5sZW5ndGggPT09IHRoaXMuZHJhZ2dhYmxlcy5sZW5ndGgpIHtcbiAgICAgIHBvc2l0aW9ucy5mb3JFYWNoKChwb2ludCwgaSkgPT4ge1xuICAgICAgICB0aGlzLmRyYWdnYWJsZXNbaV0ucGluUG9zaXRpb24ocG9pbnQpXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBtZXNzYWdlXG4gICAgfVxuICB9XG5cbiAgZ2V0IGVuYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlXG4gIH1cblxuICBzZXQgZW5hYmxlKGVuYWJsZSkge1xuICAgIHRoaXMuX2VuYWJsZSA9IGVuYWJsZVxuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5lbmFibGUgPSBlbmFibGVcbiAgICB9KVxuICB9XG5cbiAgc3RhdGljIGZhY3RvcnkocGFyZW50RWxlbWVudCwgZWxlbWVudHMsIG9wdGlvbnM9e30pIHtcbiAgICBjb25zdCBkcmFnZ2FibGVzID0gWy4uLmVsZW1lbnRzXS5tYXAoKGVsZW1lbnQpID0+IHtcbiAgICAgIHJldHVybiBuZXcgRHJhZ2dhYmxlKGVsZW1lbnQsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBwYXJlbnQ6IHBhcmVudEVsZW1lbnRcbiAgICAgIH0sIG9wdGlvbnMuZHJhZ2dhYmxlIHx8IHt9KSlcbiAgICB9KVxuICAgIHJldHVybiBuZXcgTGlzdChkcmFnZ2FibGVzLCBvcHRpb25zLmxpc3QgfHwge30pXG4gIH1cbn1cbiIsImZ1bmN0aW9uIHNldFN0eWxlKGVsZW1lbnQsIHN0eWxlKSB7XG4gIHN0eWxlID0gc3R5bGUgfHwge31cbiAgbGV0IGNzc1RleHQgPSAnJ1xuICBmb3IgKGNvbnN0IGtleSBpbiBzdHlsZSkge1xuICAgIGlmIChzdHlsZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBjc3NUZXh0ICs9IGtleSArICc6ICcgKyBzdHlsZVtrZXldICsgJzsgJ1xuICAgIH1cbiAgfVxuXG4gIGVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IGNzc1RleHRcbn1cblxuZnVuY3Rpb24gYXBwZW5kRmlyc3RDaGlsZChlbGVtZW50LCBub2RlKSB7XG4gIGlmIChlbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICBlbGVtZW50Lmluc2VydEJlZm9yZShub2RlLCBlbGVtZW50LmZpcnN0Q2hpbGQpXG4gIH0gZWxzZSB7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChub2RlKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUNhbnZhcyhhcmVhLCByZWN0YWdsZSkge1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKVxuICBpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUoYXJlYSkucG9zaXRpb24gPT09ICdzdGF0aWMnKSB7XG4gICAgYXJlYS5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSdcbiAgfVxuXG4gIGNhbnZhcy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgcmVjdGFnbGUuc2l6ZS54ICsgJ3B4JylcbiAgY2FudmFzLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgcmVjdGFnbGUuc2l6ZS55ICsgJ3B4JylcbiAgc2V0U3R5bGUoY2FudmFzLCB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgbGVmdDogcmVjdGFnbGUucG9zaXRpb24ueSArICdweCcsXG4gICAgdG9wOiByZWN0YWdsZS5wb3NpdGlvbi55ICsgJ3B4JyxcbiAgICB3aWR0aDogcmVjdGFnbGUuc2l6ZS54ICsgJ3B4JyxcbiAgICBoZWlnaHQ6IHJlY3RhZ2xlLnNpemUueSArICdweCdcbiAgfSlcbiAgYXBwZW5kRmlyc3RDaGlsZChhcmVhLCBjYW52YXMpXG4gIHJldHVybiBjYW52YXNcbn1cbiIsImltcG9ydCBjcmVhdGVDYW52YXMgZnJvbSAnLi91dGlscy9jcmVhdGUtY2FudmFzJ1xuaW1wb3J0IFBvaW50IGZyb20gJy4vZ2VvbWV0cnkvcG9pbnQnXG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gJy4vZ2VvbWV0cnkvcmVjdGFuZ2xlJ1xuXG5pbXBvcnQgeyBnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0gfSBmcm9tICcuL2dlb21ldHJ5L2FuZ2xlcydcbmltcG9ydCB7IEJvdW5kVG9MaW5lIH0gZnJvbSAnLi9ib3VuZGluZydcbmltcG9ydCBEcmFnZ2FibGUgZnJvbSAnLi9kcmFnZ2FibGUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNwaWRlciB7XG4gIGNvbnN0cnVjdG9yKGFyZWEsIGVsZW1lbnRzLCBvcHRpb25zPXt9KSB7XG4gICAgY29uc3QgYXJlYVJlY3RhbmdsZSA9IFJlY3RhbmdsZS5mcm9tRWxlbWVudChhcmVhLCBhcmVhKVxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgYW5nbGU6IDAsXG4gICAgICBkQW5nbGU6IDIgKiBNYXRoLlBJIC8gZWxlbWVudHMubGVuZ3RoLFxuICAgICAgY2VudGVyOiBhcmVhUmVjdGFuZ2xlLmdldENlbnRlcigpLFxuICAgICAgc3RhcnRSYWRpdXM6IDUwLFxuICAgICAgZW5kUmFkaXVzOiBhcmVhUmVjdGFuZ2xlLmdldE1pblNpZGUoKSAvIDIsXG4gICAgICBsaW5lV2lkdGg6IDIsXG4gICAgICBzdHJva2VTdHlsZTogJyNmZjU1NzcnLFxuICAgICAgZmlsbFN0eWxlOiAncmdiYSgxNTAsMjU1LDUwLDAuOCknXG4gICAgfSwgb3B0aW9ucylcblxuICAgIHRoaXMuYXJlYSA9IGFyZWFcbiAgICB0aGlzLmFyZWFSZWN0YW5nbGUgPSBhcmVhUmVjdGFuZ2xlXG4gICAgdGhpcy5pbml0KGVsZW1lbnRzKVxuICB9XG5cbiAgaW5pdChlbGVtZW50cykge1xuICAgIHRoaXMuY2FudmFzID0gY3JlYXRlQ2FudmFzKHRoaXMuYXJlYSwgdGhpcy5hcmVhUmVjdGFuZ2xlKVxuICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJylcblxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGVsZW1lbnRzLm1hcCgoZWxlbWVudCwgaSkgPT4ge1xuICAgICAgY29uc3QgYW5nbGUgPSB0aGlzLm9wdGlvbnMuYW5nbGUgKyBpICogdGhpcy5vcHRpb25zLmRBbmdsZVxuICAgICAgY29uc3QgaGFsZlNpemUgPSBQb2ludC5lbGVtZW50U2l6ZShlbGVtZW50KS5tdWx0KDAuNSlcbiAgICAgIGNvbnN0IHN0YXJ0ID0gZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKGFuZ2xlLCB0aGlzLm9wdGlvbnMuc3RhcnRSYWRpdXMsIHRoaXMub3B0aW9ucy5jZW50ZXIpLnN1YihoYWxmU2l6ZSlcbiAgICAgIGNvbnN0IGVuZCA9IGdldFBvaW50RnJvbVJhZGlhbFN5c3RlbShhbmdsZSwgdGhpcy5vcHRpb25zLmVuZFJhZGl1cywgdGhpcy5vcHRpb25zLmNlbnRlcikuc3ViKGhhbGZTaXplKVxuXG4gICAgICByZXR1cm4gbmV3IERyYWdnYWJsZShlbGVtZW50LCB7XG4gICAgICAgIHBhcmVudDogdGhpcy5hcmVhLFxuICAgICAgICBib3VuZGluZzogbmV3IEJvdW5kVG9MaW5lKHN0YXJ0LCBlbmQpLFxuICAgICAgICBwb3NpdGlvbjogc3RhcnQsXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgJ2RyYWc6bW92ZSc6ICgpID0+IHRoaXMuZHJhdygpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcblxuICAgIHRoaXMuaXNJbml0ID0gdHJ1ZVxuICAgIHRoaXMuZHJhdygpXG4gIH1cblxuICBkcmF3KCkge1xuICAgIGlmICghdGhpcy5pc0luaXQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMuYXJlYVJlY3RhbmdsZS5zaXplLngsIHRoaXMuYXJlYVJlY3RhbmdsZS5zaXplLnkpXG4gICAgdGhpcy5jb250ZXh0LmJlZ2luUGF0aCgpXG5cbiAgICBsZXQgcG9pbnQgPSB0aGlzLmRyYWdnYWJsZXNbMF0uZ2V0Q2VudGVyKClcbiAgICB0aGlzLmNvbnRleHQubW92ZVRvKHBvaW50LngsIHBvaW50LnkpXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZHJhZ2dhYmxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgcG9pbnQgPSB0aGlzLmRyYWdnYWJsZXNbaV0uZ2V0Q2VudGVyKClcbiAgICAgIHRoaXMuY29udGV4dC5saW5lVG8ocG9pbnQueCwgcG9pbnQueSlcbiAgICB9XG4gICAgdGhpcy5jb250ZXh0LmNsb3NlUGF0aCgpXG4gICAgdGhpcy5jb250ZXh0LmxpbmVXaWR0aCA9IHRoaXMub3B0aW9ucy5saW5lV2lkdGhcbiAgICB0aGlzLmNvbnRleHQuc3Ryb2tlU3R5bGUgPSB0aGlzLm9wdGlvbnMuc3Ryb2tlU3R5bGVcbiAgICB0aGlzLmNvbnRleHQuc3Ryb2tlKClcbiAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5vcHRpb25zLmZpbGxTdHlsZVxuICAgIHRoaXMuY29udGV4dC5maWxsKClcbiAgfVxufVxuIiwiaW1wb3J0IERyYWdnYWJsZSBmcm9tICcuL2RyYWdnYWJsZSdcbmltcG9ydCB7IEJvdW5kVG9BcmMgfSBmcm9tICcuL2JvdW5kaW5nJ1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50RW1pdHRlcidcblxuaW1wb3J0IFJlY3RhbmdsZSBmcm9tICcuL2dlb21ldHJ5L3JlY3RhbmdsZSdcbmltcG9ydCB7XG4gIGdldFBvaW50RnJvbVJhZGlhbFN5c3RlbSxcbiAgZ2V0QW5nbGUsXG4gIG5vcm1hbGl6ZUFuZ2xlXG59IGZyb20gJy4vZ2VvbWV0cnkvYW5nbGVzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcmNTbGlkZXIgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvcihhcmVhLCBlbGVtZW50LCBvcHRpb25zPXt9KSB7XG4gICAgc3VwZXIodW5kZWZpbmVkLCBvcHRpb25zKVxuICAgIGNvbnN0IGFyZWFSZWN0YW5nbGUgPSBSZWN0YW5nbGUuZnJvbUVsZW1lbnQoYXJlYSwgYXJlYSlcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNlbnRlcjogYXJlYVJlY3RhbmdsZS5nZXRDZW50ZXIoKSxcbiAgICAgIHJhZGl1czogYXJlYVJlY3RhbmdsZS5nZXRNaW5TaWRlKCkgLyAyLFxuICAgICAgc3RhcnRBbmdsZTogTWF0aC5QSSxcbiAgICAgIGVuZEFuZ2xlOiAwLFxuICAgICAgYW5nbGVzOiBbTWF0aC5QSSwgLU1hdGguUEkgLyA0LCAwLCBNYXRoLlBJIC8gNCwgTWF0aC5QSSAvIDJdLFxuICAgICAgdGltZTogNTAwXG4gICAgfSwgb3B0aW9ucylcblxuICAgIHRoaXMuc2hpZnRlZENlbnRlciA9IHRoaXMub3B0aW9ucy5jZW50ZXJcbiAgICB0aGlzLmFyZWEgPSBhcmVhXG4gICAgdGhpcy5pbml0KGVsZW1lbnQpXG4gIH1cblxuICBpbml0KGVsZW1lbnQpIHtcbiAgICBjb25zdCBhbmdsZSA9IHRoaXMub3B0aW9ucy5zdGFydEFuZ2xlXG4gICAgY29uc3QgcG9zaXRpb24gPSBnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oXG4gICAgICBhbmdsZSxcbiAgICAgIHRoaXMub3B0aW9ucy5yYWRpdXMsXG4gICAgICB0aGlzLnNoaWZ0ZWRDZW50ZXJcbiAgICApXG5cbiAgICB0aGlzLmFuZ2xlID0gYW5nbGVcbiAgICB0aGlzLmRyYWdnYWJsZSA9IG5ldyBEcmFnZ2FibGUoZWxlbWVudCwge1xuICAgICAgcGFyZW50OiB0aGlzLmFyZWEsXG4gICAgICBib3VuZGluZzogbmV3IEJvdW5kVG9BcmMoXG4gICAgICAgIHRoaXMuc2hpZnRlZENlbnRlcixcbiAgICAgICAgdGhpcy5vcHRpb25zLnJhZGl1cyxcbiAgICAgICAgdGhpcy5vcHRpb25zLnN0YXJ0QW5nbGUsXG4gICAgICAgIHRoaXMub3B0aW9ucy5lbmRBbmdsZVxuICAgICAgKSxcbiAgICAgIHBvc2l0aW9uOiBwb3NpdGlvbixcbiAgICAgIG9uOiB7XG4gICAgICAgICdkcmFnOm1vdmUnOiAoKSA9PiB0aGlzLmNoYW5nZSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHVwZGF0ZUFuZ2xlKCkge1xuICAgIHRoaXMuYW5nbGUgPSBnZXRBbmdsZSh0aGlzLnNoaWZ0ZWRDZW50ZXIsIHRoaXMuZHJhZ2dhYmxlLnBvc2l0aW9uKVxuICB9XG5cbiAgY2hhbmdlKCkge1xuICAgIHRoaXMudXBkYXRlQW5nbGUoKVxuICAgIC8vICAgICAgdmFyIGFuZ2xlID0gR2VvbWV0cnkuZ2V0TmVhcmVzdEFuZ2xlKHRoaXMub3B0aW9ucy5hbmdsZXMsIHRoaXMuYW5nbGUpO1xuICAgIC8vICAgICAgdGhpcy5zZXRBbmdsZShhbmdsZSx0aGlzLm9wdGlvbnMudGltZSk7XG4gICAgdGhpcy5lbWl0KCdhcmNzbGlkZXI6Y2hhbmdlJywgeyBhbmdsZTogdGhpcy5hbmdsZSB9KVxuICB9XG5cbiAgc2V0QW5nbGUoYW5nbGUsIHRpbWUpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IGdldFBvaW50RnJvbVJhZGlhbFN5c3RlbShcbiAgICAgIHRoaXMuYW5nbGUsXG4gICAgICB0aGlzLm9wdGlvbnMucmFkaXVzLFxuICAgICAgdGhpcy5zaGlmdGVkQ2VudGVyXG4gICAgKVxuICAgIHRoaXMuYW5nbGUgPSBub3JtYWxpemVBbmdsZShhbmdsZSwgcG9zaXRpb24pXG4gICAgdGhpcy5kcmFnZ2FibGUucGluUG9zaXRpb24ocG9zaXRpb24sIHRpbWV8fDApXG4gICAgdGhpcy5lbWl0KCdhcmNzbGlkZXI6Y2hhbmdlJywgdGhpcy5hbmdsZSlcbiAgfVxufVxuIiwiaW1wb3J0IGNyZWF0ZUNhbnZhcyBmcm9tICcuL3V0aWxzL2NyZWF0ZS1jYW52YXMnXG5pbXBvcnQgcmFuZ2UgZnJvbSAnLi91dGlscy9yYW5nZSdcbmltcG9ydCBQb2ludCBmcm9tICcuL2dlb21ldHJ5L3BvaW50J1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tICcuL2dlb21ldHJ5L3JlY3RhbmdsZSdcblxuaW1wb3J0IHsgZ2V0RGlzdGFuY2UgfSBmcm9tICcuL2dlb21ldHJ5L2Rpc3RhbmNlcydcblxuaW1wb3J0IHtcbiAgdG9SYWRpYW4sXG4gIGdldFBvaW50RnJvbVJhZGlhbFN5c3RlbSxcbiAgZ2V0QW5nbGUsXG4gIG5vcm1hbGl6ZUFuZ2xlXG59IGZyb20gJy4vZ2VvbWV0cnkvYW5nbGVzJ1xuXG5pbXBvcnQgRHJhZ2dhYmxlIGZyb20gJy4vZHJhZ2dhYmxlJ1xuaW1wb3J0IHsgQm91bmRUb0FyYyB9IGZyb20gJy4vYm91bmRpbmcnXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnRFbWl0dGVyJ1xuXG5jb25zdCBybmQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSoyNTUpXG59XG5cbmNvbnN0IHRvSGV4U3RyaW5nID0gZnVuY3Rpb24oZGlnaXQpIHtcbiAgbGV0IHN0ciA9IGRpZ2l0LnRvU3RyaW5nKDE2KVxuICB3aGlsZSAoc3RyLmxlbmd0aCA8IDIpIHtcbiAgICBzdHIgPSAnMCcgKyBzdHJcbiAgfVxuICByZXR1cm4gc3RyXG59XG5cbmZ1bmN0aW9uIHJhbmRvbUNvbG9yKCkge1xuICByZXR1cm4gYCMke3RvSGV4U3RyaW5nKHJuZCgpKX0ke3RvSGV4U3RyaW5nKHJuZCgpKX0ke3RvSGV4U3RyaW5nKHJuZCgpKX1gXG59XG5cbmZ1bmN0aW9uIGdldEFycmF5V2l0aEJvdW5kSW5kZXhlcyhpbmRleCwgbGVuZ3RoKSB7XG4gIGNvbnN0IHJldEluZGV4ZXMgPSBbXVxuICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgcmV0SW5kZXhlcy5wdXNoKGluZGV4KVxuICAgIHJldEluZGV4ZXMucHVzaCgoaW5kZXggKyAxKSAlIGxlbmd0aClcbiAgfVxuXG4gIHJldHVybiByZXRJbmRleGVzXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXJ0IGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKGFyZWEsIGVsZW1lbnRzLCBvcHRpb25zPXt9KSB7XG4gICAgc3VwZXIodW5kZWZpbmVkLCBvcHRpb25zKVxuICAgIGNvbnN0IGFyZWFSZWN0YW5nbGUgPSBSZWN0YW5nbGUuZnJvbUVsZW1lbnQoYXJlYSwgYXJlYSlcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNlbnRlcjogYXJlYVJlY3RhbmdsZS5nZXRDZW50ZXIoKSxcbiAgICAgIHJhZGl1czogYXJlYVJlY3RhbmdsZS5nZXRNaW5TaWRlKCkgLyAyLFxuICAgICAgdG91Y2hSYWRpdXM6IGFyZWFSZWN0YW5nbGUuZ2V0TWluU2lkZSgpIC8gMixcbiAgICAgIGJvdW5kQW5nbGU6IE1hdGguUEkgLyA5LFxuICAgICAgZmlsbFN0eWxlczogcmFuZ2UoMCwgZWxlbWVudHMubGVuZ3RoKS5tYXAoKCkgPT4gcmFuZG9tQ29sb3IoKSksXG4gICAgICBpbml0QW5nbGVzOiByYW5nZSgtOTAsIDI3MCwgMzYwIC8gZWxlbWVudHMubGVuZ3RoKS5tYXAoKGFuZ2xlKSA9PiB0b1JhZGlhbihhbmdsZSkpLFxuICAgICAgbGltaXRJbWc6IG51bGwsXG4gICAgICBsaW1pdEltZ09mZnNldDogbmV3IFBvaW50KDAsIDApXG4gICAgfSwgb3B0aW9ucylcblxuICAgIHRoaXMuYXJlYSA9IGFyZWFcbiAgICB0aGlzLmFyZWFSZWN0YW5nbGUgPSBhcmVhUmVjdGFuZ2xlXG4gICAgdGhpcy5pbml0KGVsZW1lbnRzKVxuICB9XG5cbiAgaW5pdChlbGVtZW50cykge1xuICAgIHRoaXMuY2FudmFzID0gY3JlYXRlQ2FudmFzKHRoaXMuYXJlYSwgdGhpcy5hcmVhUmVjdGFuZ2xlKVxuICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJylcbiAgICB0aGlzLmRyYWdnYWJsZXMgPSBlbGVtZW50cy5tYXAoKGVsZW1lbnQsIGkpID0+IHtcbiAgICAgIGNvbnN0IGFuZ2xlID0gdGhpcy5vcHRpb25zLmluaXRBbmdsZXNbaV1cbiAgICAgIGNvbnN0IGhhbGZTaXplID0gUG9pbnQuZWxlbWVudFNpemUoZWxlbWVudCkubXVsdCgwLjUpXG4gICAgICBjb25zdCBwb3NpdGlvbiA9IGdldFBvaW50RnJvbVJhZGlhbFN5c3RlbShcbiAgICAgICAgYW5nbGUsXG4gICAgICAgIHRoaXMub3B0aW9ucy50b3VjaFJhZGl1cyxcbiAgICAgICAgdGhpcy5vcHRpb25zLmNlbnRlci5zdWIoaGFsZlNpemUpXG4gICAgICApXG5cbiAgICAgIHJldHVybiBuZXcgRHJhZ2dhYmxlKGVsZW1lbnQsIHtcbiAgICAgICAgcGFyZW50OiB0aGlzLmFyZWEsXG4gICAgICAgIGJvdW5kaW5nOiBuZXcgQm91bmRUb0FyYyhcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuY2VudGVyLnN1YihoYWxmU2l6ZSksXG4gICAgICAgICAgdGhpcy5vcHRpb25zLnRvdWNoUmFkaXVzLFxuICAgICAgICAgIHRoaXMuZ2V0Qm91bmRBbmdsZShpLCBmYWxzZSksXG4gICAgICAgICAgdGhpcy5nZXRCb3VuZEFuZ2xlKGksIHRydWUpXG4gICAgICAgICksXG4gICAgICAgIHBvc2l0aW9uOiBwb3NpdGlvbixcbiAgICAgICAgb246IHtcbiAgICAgICAgICAnZHJhZzptb3ZlJzogKCkgPT4gdGhpcy5kcmF3KClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgdGhpcy5pc0luaXQgPSB0cnVlXG4gICAgdGhpcy5kcmF3KClcbiAgfVxuXG4gIHVwZGF0ZUFuZ2xlcygpIHtcbiAgICB0aGlzLmFuZ2xlcyA9IHRoaXMuZHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgY29uc3QgaGFsZlNpemUgPSBkcmFnZ2FibGUuZ2V0U2l6ZSgpLm11bHQoMC41KVxuICAgICAgcmV0dXJuIGdldEFuZ2xlKHRoaXMub3B0aW9ucy5jZW50ZXIuc3ViKGhhbGZTaXplKSwgZHJhZ2dhYmxlLnBvc2l0aW9uKVxuICAgIH0pXG4gIH1cblxuICBnZXRCb3VuZEFuZ2xlKGluZGV4LCBpc0Nsb3NzaW5nKSB7XG4gICAgY29uc3Qgc2lnbiA9IGlzQ2xvc3NpbmcgPyAxIDogLTFcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBsZXQgaSA9IChpbmRleCArIHNpZ24pICUgdGhpcy5hbmdsZXMubGVuZ3RoXG4gICAgICBpZiAoaSA8IDApIHtcbiAgICAgICAgaSArPSB0aGlzLmFuZ2xlcy5sZW5ndGhcbiAgICAgIH1cbiAgICAgIHJldHVybiBub3JtYWxpemVBbmdsZSh0aGlzLmFuZ2xlc1tpXSAtIHNpZ24gKiB0aGlzLm9wdGlvbnMuYm91bmRBbmdsZSlcbiAgICB9XG4gIH1cblxuICBkcmF3KCkge1xuICAgIGlmICghdGhpcy5pc0luaXQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMudXBkYXRlQW5nbGVzKClcbiAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMuYXJlYVJlY3RhbmdsZS5zaXplLngsIHRoaXMuYXJlYVJlY3RhbmdsZS5zaXplLnkpXG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKF9kcmFnZ2FibGUsIGluZGV4KSA9PiB7XG4gICAgICB0aGlzLmRyYXdBcmModGhpcy5jb250ZXh0LCB0aGlzLm9wdGlvbnMuY2VudGVyLCB0aGlzLm9wdGlvbnMucmFkaXVzLCBpbmRleClcbiAgICB9KVxuXG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKF9kcmFnZ2FibGUsIGluZGV4KSA9PiB7XG4gICAgICB0aGlzLmRyYXdMaW1pdEltZyhpbmRleClcbiAgICB9KVxuXG4gICAgdGhpcy5lbWl0KCdjaGFydDpkcmF3JylcbiAgfVxuXG4gIGNyZWF0ZUNsb25lKGVsZW1lbnQsIG9wdGlvbnMgPSB7fSkge1xuICAgIGlmICghdGhpcy5pc0luaXQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCByZWN0YW5nbGUgPSBSZWN0YW5nbGUuZnJvbUVsZW1lbnQoZWxlbWVudCwgZWxlbWVudClcbiAgICBjb25zdCBvcHRzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjZW50ZXI6IHJlY3RhbmdsZS5nZXRDZW50ZXIoKSxcbiAgICAgIHJhZGl1czogcmVjdGFuZ2xlLmdldE1pblNpZGUoKSAvIDIsXG4gICAgICBmaWxsU3R5bGVzOiB0aGlzLm9wdGlvbnMuZmlsbFN0eWxlc1xuICAgIH0sIG9wdGlvbnMpXG5cbiAgICBjb25zdCBjYW52YXMgPSBjcmVhdGVDYW52YXMoZWxlbWVudCwgcmVjdGFuZ2xlKVxuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuICAgIGNvbnN0IGNsb25lT2JqID0ge1xuICAgICAgZHJhdzogKCkgPT4ge1xuICAgICAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCByZWN0YW5nbGUuc2l6ZS54LCByZWN0YW5nbGUuc2l6ZS55KVxuICAgICAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoX2RyYWdnYWJsZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICB0aGlzLmRyYXdBcmMoY29udGV4dCwgb3B0cy5jZW50ZXIsIG9wdHMucmFkaXVzLCBpbmRleClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gICAgY2xvbmVPYmouZHJhdygpXG4gICAgcmV0dXJuIGNsb25lT2JqXG4gIH1cblxuICBnZXRGaWxsU3R5bGUoaW5kZXgpIHtcbiAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5maWxsU3R5bGVzW2luZGV4XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpcy5vcHRpb25zLmZpbGxTdHlsZXNbaW5kZXhdID0gdGhpcy5vcHRpb25zLmZpbGxTdHlsZXNbaW5kZXhdLmNhbGwodGhpcylcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5maWxsU3R5bGVzW2luZGV4XVxuICB9XG5cbiAgZHJhd0FyYyhjb250ZXh0LCBjZW50ZXIsIHJhZGl1cywgaW5kZXgpIHtcbiAgICBjb25zdCBzdGFydEFuZ2xlID0gdGhpcy5hbmdsZXNbaW5kZXhdXG4gICAgY29uc3QgZW5kQW5nbGUgPSB0aGlzLmFuZ2xlc1soaW5kZXgrMSkgJSB0aGlzLmFuZ2xlcy5sZW5ndGhdXG4gICAgY29uc3QgY29sb3IgPSB0aGlzLmdldEZpbGxTdHlsZShpbmRleClcblxuICAgIGNvbnRleHQuYmVnaW5QYXRoKClcbiAgICBjb250ZXh0Lm1vdmVUbyhjZW50ZXIueCwgY2VudGVyLnkpXG4gICAgY29udGV4dC5hcmMoY2VudGVyLngsIGNlbnRlci55LCByYWRpdXMsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlLCBmYWxzZSlcbiAgICBjb250ZXh0LmxpbmVUbyhjZW50ZXIueCwgY2VudGVyLnkpXG4gICAgY29udGV4dC5jbG9zZVBhdGgoKVxuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gY29sb3JcbiAgICBjb250ZXh0LmZpbGwoKVxuICB9XG5cbiAgZHJhd0xpbWl0SW1nKGluZGV4KSB7XG4gICAgbGV0IHBvaW50LCBpbWdcbiAgICBpZiAodGhpcy5vcHRpb25zLmxpbWl0SW1nKSB7XG4gICAgICBpbWcgPSB0aGlzLm9wdGlvbnMubGltaXRJbWcgaW5zdGFuY2VvZiBBcnJheSA/IHRoaXMub3B0aW9ucy5saW1pdEltZ1tpbmRleF0gOiB0aGlzLm9wdGlvbnMubGltaXRJbWdcbiAgICB9XG5cbiAgICBpZiAoaW1nKSB7XG4gICAgICBjb25zdCBhbmdsZSA9IG5vcm1hbGl6ZUFuZ2xlKHRoaXMuYW5nbGVzW2luZGV4XSlcbiAgICAgIHBvaW50ID0gbmV3IFBvaW50KDAsIC1pbWcuaGVpZ2h0IC8gMilcbiAgICAgIHBvaW50ID0gcG9pbnQuYWRkKHRoaXMub3B0aW9ucy5saW1pdEltZ09mZnNldClcbiAgICAgIHRoaXMuY29udGV4dC50cmFuc2xhdGUodGhpcy5hcmVhUmVjdGFuZ2xlLnNpemUueCAvIDIsIHRoaXMuYXJlYVJlY3RhbmdsZS5zaXplLnkgLyAyKVxuICAgICAgdGhpcy5jb250ZXh0LnJvdGF0ZShhbmdsZSlcbiAgICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UoaW1nLCBwb2ludC54LCBwb2ludC55KVxuICAgICAgdGhpcy5jb250ZXh0LnNldFRyYW5zZm9ybSgxLCAwLCAwLCAxLCAwLCAwKVxuICAgIH1cbiAgfVxuXG4gIGdldEFuZ2xlc0RpZmYoKSB7XG4gICAgY29uc3QgYW5nbGVzID0gdGhpcy5hbmdsZXMuc2xpY2UoMSlcbiAgICBsZXQgYmFzZUFuZ2xlID0gdGhpcy5hbmdsZXNbMF1cblxuICAgIGFuZ2xlcy5wdXNoKGJhc2VBbmdsZSlcbiAgICByZXR1cm4gYW5nbGVzLm1hcCgoYW5nbGUpID0+IHtcbiAgICAgIGNvbnN0IGRpZmZBbmdsZSA9IG5vcm1hbGl6ZUFuZ2xlKGFuZ2xlIC0gYmFzZUFuZ2xlKVxuICAgICAgYmFzZUFuZ2xlID0gYW5nbGVcbiAgICAgIHJldHVybiBkaWZmQW5nbGVcbiAgICB9KVxuICB9XG5cbiAgZ2V0UGVyY2VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRBbmdsZXNEaWZmKCkubWFwKChkaWZmQW5nbGUpID0+IGRpZmZBbmdsZSAvICgyICogTWF0aC5QSSkpXG4gIH1cblxuICBnZXRBcmNCaXNlY3RyaXhzKCkge1xuICAgIHJldHVybiB0aGlzLmdldEFuZ2xlc0RpZmYoKS5tYXAoKGRpZmZBbmdsZSwgaSkgPT4ge1xuICAgICAgcmV0dXJuIG5vcm1hbGl6ZUFuZ2xlKHRoaXMuYW5nbGVzW2ldICsgZGlmZkFuZ2xlIC8gMilcbiAgICB9KVxuICB9XG5cbiAgZ2V0QXJjT25Qb2ludChwb2ludCkge1xuICAgIGNvbnN0IGFuZ2xlID0gZ2V0QW5nbGUodGhpcy5vcHRpb25zLmNlbnRlciwgcG9pbnQpXG4gICAgY29uc3QgcmFkaXVzID0gZ2V0RGlzdGFuY2UodGhpcy5vcHRpb25zLmNlbnRlciwgcG9pbnQpXG5cbiAgICBpZiAocmFkaXVzID4gdGhpcy5vcHRpb25zLnJhZGl1cykge1xuICAgICAgcmV0dXJuIC0xXG4gICAgfVxuXG4gICAgbGV0IG9mZnNldCA9IC0xLCBpLCBqXG4gICAgZm9yIChpID0gMDsgaSA8IHRoaXMuYW5nbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAob2Zmc2V0ID09PSAtMSB8fCB0aGlzLmFuZ2xlc1tvZmZzZXRdID4gdGhpcy5hbmdsZXNbaV0pIHtcbiAgICAgICAgb2Zmc2V0ID0gaVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGkgPSAwLCBqID0gb2Zmc2V0OyBpIDwgdGhpcy5hbmdsZXMubGVuZ3RoOyBpKyssIGogPSAoaSArIG9mZnNldCkgJSB0aGlzLmFuZ2xlcy5sZW5ndGgpIHtcbiAgICAgIGlmIChhbmdsZSA8IHRoaXMuYW5nbGVzW2pdKSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuICAgIGlmICgtLWogPCAwKSB7XG4gICAgICBqICs9IHRoaXMuYW5nbGVzLmxlbmd0aFxuICAgIH1cbiAgICByZXR1cm4galxuICB9XG5cbiAgc2V0QW5nbGVzKGFuZ2xlcykge1xuICAgIHRoaXMuYW5nbGVzID0gYW5nbGVzXG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSwgaSkgPT4ge1xuICAgICAgY29uc3QgYW5nbGUgPSB0aGlzLmFuZ2xlc1tpXVxuICAgICAgY29uc3QgaGFsZlNpemUgPSBkcmFnZ2FibGUuZ2V0U2l6ZSgpLm11bHQoMC41KVxuICAgICAgY29uc3QgcG9zaXRpb24gPSBnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oXG4gICAgICAgIGFuZ2xlLFxuICAgICAgICB0aGlzLm9wdGlvbnMudG91Y2hSYWRpdXMsXG4gICAgICAgIHRoaXMub3B0aW9ucy5jZW50ZXIuc3ViKGhhbGZTaXplKVxuICAgICAgKVxuXG4gICAgICBkcmFnZ2FibGUubW92ZUFuZFNhdmUocG9zaXRpb24pXG4gICAgfSlcbiAgICB0aGlzLmRyYXcoKVxuICB9XG5cbiAgc2V0QWN0aXZlQXJjKGluZGV4KSB7XG4gICAgY29uc3QgZW5hYmxlSW5kZXhlcyA9IGdldEFycmF5V2l0aEJvdW5kSW5kZXhlcyhpbmRleCwgdGhpcy5kcmFnZ2FibGVzLmxlbmd0aClcbiAgICB0aGlzLmFjdGl2ZUFyY0luZGV4ID0gaW5kZXhcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlLCBpKSA9PiB7XG4gICAgICBkcmFnZ2FibGUuZW5hYmxlID0gZW5hYmxlSW5kZXhlcy5pbmRleE9mKGkpICE9PSAtMVxuICAgIH0pXG4gICAgdGhpcy5kcmF3KClcbiAgfVxufVxuIiwiaW1wb3J0IFBvaW50IGZyb20gJy4vZ2VvbWV0cnkvcG9pbnQnXG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gJy4vZ2VvbWV0cnkvcG9pbnQnXG5pbXBvcnQgRHJhZ2dhYmxlIGZyb20gJy4vZHJhZ2dhYmxlJ1xuaW1wb3J0IExpc3QgZnJvbSAnLi9saXN0J1xuaW1wb3J0IFRhcmdldCBmcm9tICcuL3RhcmdldCdcbmltcG9ydCB7IHNjb3BlcywgZGVmYXVsdFNjb3BlLCBTY29wZSwgc2NvcGUgfSBmcm9tICcuL3Njb3BlJ1xuaW1wb3J0IHsgTm90Q3Jvc3NpbmdTdHJhdGVneSwgRmxvYXRMZWZ0U3RyYXRlZ3ksIEZsb2F0UmlnaHRTdHJhdGVneSB9IGZyb20gJy4vcG9zaXRpb25pbmcnXG5pbXBvcnQgU3BpZGVyIGZyb20gJy4vc3BpZGVyJ1xuaW1wb3J0IEFyY1NsaWRlciBmcm9tICcuL2FyY3NsaWRlcidcbmltcG9ydCBDaGFydCBmcm9tICcuL2NoYXJ0J1xuaW1wb3J0IHsgZ2V0RGlzdGFuY2UsIGdldFhEaWZmZXJlbmNlLCBnZXRZRGlmZmVyZW5jZSwgdHJhbnNmb3JtZWRTcGFjZURpc3RhbmNlRmFjdG9yeSB9IGZyb20gJy4vZ2VvbWV0cnkvZGlzdGFuY2VzJ1xuaW1wb3J0IHsgYWRkQ2xhc3MsIHJlbW92ZUNsYXNzIH0gZnJvbSAnLi91dGlscy9jbGFzc2VzJ1xuaW1wb3J0IHtcbiAgQm91bmRUb1JlY3RhbmdsZSxcbiAgQm91bmRUb0VsZW1lbnQsXG4gIEJvdW5kVG9MaW5lWCxcbiAgQm91bmRUb0xpbmVZLFxuICBCb3VuZFRvTGluZSxcbiAgQm91bmRUb0NpcmNsZSxcbiAgQm91bmRUb0FyY1xufSBmcm9tICcuL2JvdW5kaW5nJ1xuXG5jb25zdCBib3VuZCA9IHtcbiAgQm91bmRUb1JlY3RhbmdsZSxcbiAgQm91bmRUb0VsZW1lbnQsXG4gIEJvdW5kVG9MaW5lWCxcbiAgQm91bmRUb0xpbmVZLFxuICBCb3VuZFRvTGluZSxcbiAgQm91bmRUb0NpcmNsZSxcbiAgQm91bmRUb0FyY1xufVxuXG5jb25zdCBkaXN0YW5jZSA9IHtcbiAgZ2V0RGlzdGFuY2UsXG4gIGdldFhEaWZmZXJlbmNlLFxuICBnZXRZRGlmZmVyZW5jZSxcbiAgdHJhbnNmb3JtZWRTcGFjZURpc3RhbmNlRmFjdG9yeVxufVxuXG5leHBvcnQge1xuICBEcmFnZ2FibGUsXG4gIFBvaW50LCBSZWN0YW5nbGUsXG4gIExpc3QsXG4gIFRhcmdldCxcbiAgc2NvcGVzLCBkZWZhdWx0U2NvcGUsIFNjb3BlLCBzY29wZSxcbiAgTm90Q3Jvc3NpbmdTdHJhdGVneSwgRmxvYXRMZWZ0U3RyYXRlZ3ksIEZsb2F0UmlnaHRTdHJhdGVneSxcbiAgU3BpZGVyLFxuICBBcmNTbGlkZXIsXG4gIENoYXJ0LFxuICBib3VuZCxcbiAgZGlzdGFuY2UsXG4gIGFkZENsYXNzLCByZW1vdmVDbGFzc1xufVxuIl0sIm5hbWVzIjpbImdldFN1bVZhbHVlT2ZTdHlsZVJ1bGVzIiwiZWxlbWVudCIsInJ1bGVzIiwicmVkdWNlIiwic3VtIiwicnVsZSIsInBhcnNlSW50Iiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIlBvaW50IiwieCIsInkiLCJwIiwiayIsInBhcmVudCIsInBhcmVudE5vZGUiLCJlbGVtZW50UmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInBhcmVudFJlY3QiLCJsZWZ0IiwidG9wIiwiaXNDb250ZW50Qm94U2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwiaGFzQ2xhc3MiLCJjIiwicmUiLCJSZWdFeHAiLCJ0ZXN0IiwiY2xhc3NOYW1lIiwiYWRkQ2xhc3MiLCJyZXBsYWNlIiwicmVtb3ZlQ2xhc3MiLCJnZXREZWZhdWx0UGFyZW50IiwidGFnTmFtZSIsIkV2ZW50RW1pdHRlciIsImNvbnRleHQiLCJvcHRpb25zIiwiZXZlbnRzIiwib24iLCJPYmplY3QiLCJlbnRyaWVzIiwiZXZlbnROYW1lIiwiZm4iLCJpbnRlcnJ1cHRlZCIsImFyZ3MiLCJzbGljZSIsImNhbGwiLCJhcmd1bWVudHMiLCJmdW5jIiwiYXBwbHkiLCJwdXNoIiwidW5zaGlmdCIsImluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsIlJlY3RhbmdsZSIsInBvc2l0aW9uIiwic2l6ZSIsImFkZCIsIm11bHQiLCJyZWN0IiwiTWF0aCIsIm1pbiIsIm1heCIsInN1YiIsInJlY3RhbmdsZSIsImluY2x1ZGVQb2ludCIsImdldFAzIiwiYXhpcyIsInNlbEF4aXMiLCJjcm9zc1JlY3RhbmdsZSIsImFuZCIsInRoaXNDZW50ZXIiLCJnZXRDZW50ZXIiLCJyZWN0Q2VudGVyIiwic2lnbiIsIm9mZnNldCIsImVsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic3R5bGUiLCJpc0NvbnNpZGVyVHJhbnNsYXRlIiwiZWxlbWVudE9mZnNldCIsImVsZW1lbnRTaXplIiwiZ2V0RGlzdGFuY2UiLCJwMSIsInAyIiwiZHgiLCJkeSIsInNxcnQiLCJnZXRYRGlmZmVyZW5jZSIsImFicyIsImdldFlEaWZmZXJlbmNlIiwidHJhbnNmb3JtZWRTcGFjZURpc3RhbmNlRmFjdG9yeSIsInBvdyIsImluZGV4T2ZOZWFyZXN0UG9pbnQiLCJhcnIiLCJ2YWwiLCJyYWRpdXMiLCJnZXREaXN0YW5jZUZ1bmMiLCJpIiwidGVtcCIsImxlbmd0aCIsImRpcmVjdENyb3NzaW5nIiwiTDFQMSIsIkwxUDIiLCJMMlAxIiwiTDJQMiIsImsxIiwiazIiLCJiMSIsImIyIiwiYm91bmRUb0xpbmUiLCJBIiwiQiIsIlAiLCJBUCIsIkFCIiwiYWIyIiwiYXBfYWIiLCJ0IiwiZ2V0UG9pbnRPbkxpbmVCeUxlbmdodCIsIkxQMSIsIkxQMiIsImxlbmdodCIsInBlcmNlbnQiLCJhZGRQb2ludFRvQm91bmRQb2ludHMiLCJib3VuZHBvaW50cyIsInBvaW50IiwiaXNSaWdodCIsInJlc3VsdCIsImZpbHRlciIsImJQb2ludCIsImdldEFuZ2xlRGlmZiIsImFscGhhIiwiYmV0YSIsIm1pbkFuZ2xlIiwibWF4QW5nbGUiLCJQSSIsImdldEFuZ2xlIiwiZGlmZiIsIm5vcm1hbGl6ZUFuZ2xlIiwiYXRhbjIiLCJ0b1JhZGlhbiIsImFuZ2xlIiwiYm91bmRBbmdsZSIsImRtaW4iLCJkbWF4IiwiZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtIiwiY2VudGVyIiwiY29zIiwic2luIiwiQm91bmQiLCJfc2l6ZSIsIkJvdW5kVG9SZWN0YW5nbGUiLCJjYWxjUG9pbnQiLCJjbG9uZSIsInJlY3RQMiIsIkJvdW5kVG9FbGVtZW50IiwiZnJvbUVsZW1lbnQiLCJCb3VuZFRvTGluZVgiLCJzdGFydFkiLCJlbmRZIiwiQm91bmRUb0xpbmVZIiwic3RhcnRYIiwiZW5kWCIsIkJvdW5kVG9MaW5lIiwic3RhcnRQb2ludCIsImVuZFBvaW50Iiwic29tZUsiLCJjb3NCZXRhIiwic2luQmV0YSIsInBvaW50MiIsIm5ld0VuZFBvaW50IiwicG9pbnRDcm9zc2luZyIsIkJvdW5kVG9DaXJjbGUiLCJCb3VuZFRvQXJjIiwic3RhcnRBbmdsZSIsImVuZEFuZ2xlIiwiX3N0YXJ0QW5nbGUiLCJfZW5kQW5nbGUiLCJhcnJheSIsInJhbmdlIiwic3RhcnQiLCJzdG9wIiwic3RlcCIsIkJhc2ljU3RyYXRlZ3kiLCJOb3RDcm9zc2luZ1N0cmF0ZWd5IiwicmVjdGFuZ2xlTGlzdCIsImluZGV4ZXNPZk5ld3MiLCJzdGF0aWNSZWN0YW5nbGVJbmRleGVzIiwiaW5kZXhlcyIsIl9yZWN0IiwiZm9yRWFjaCIsInJlbW92YWJsZSIsImluZGV4T2ZTdGF0aWMiLCJzdGF0aWNSZWN0IiwibW92ZVRvQm91bmQiLCJzb21lIiwiYm91bmRSZWN0IiwiZ2V0U3F1YXJlIiwib2RsRHJhZ2dhYmxlc0xpc3QiLCJuZXdEcmFnZ2FibGVzIiwiaW5kZXhPZk5ld3MiLCJkcmFnZ2FibGVzIiwiY29uY2F0IiwiZHJhZ2dhYmxlIiwiRmxvYXRMZWZ0U3RyYXRlZ3kiLCJhc3NpZ24iLCJwYWRkaW5nVG9wTGVmdCIsInBhZGRpbmdCb3R0b21SaWdodCIsInlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyIsImdldFBvc2l0aW9uIiwiX2luZGV4ZXNPZk5ld3MiLCJnZXRQMiIsImJvdW5kYXJ5UG9pbnRzIiwicmVjdEluZGV4IiwiaXNWYWxpZCIsIm5ld0xpc3QiLCJsaXN0T2xkUG9zaXRpb24iLCJtYXAiLCJuZXdEcmFnZ2FibGUiLCJGbG9hdFJpZ2h0U3RyYXRlZ3kiLCJwYWRkaW5nVG9wUmlnaHQiLCJwYWRkaW5nQm90dG9tTGVmdCIsInBhZGRpbmdCb3R0b21OZWdMZWZ0IiwiZ2V0UDQiLCJhZGRUb0RlZmF1bHRTY29wZSIsInRhcmdldCIsImRlZmF1bHRTY29wZSIsImFkZFRhcmdldCIsIlRhcmdldCIsInVuZGVmaW5lZCIsInRpbWVFbmQiLCJ0aW1lRXhjYW5nZSIsInBvc2l0aW9uaW5nU3RyYXRlZ3kiLCJzdHJhdGVneSIsImdldFJlY3RhbmdsZSIsImJpbmQiLCJ0YXJnZXRzIiwiZW1pdHRlciIsImVtaXQiLCJpbml0IiwiaW5kZXhlc09mTmV3IiwicG9zaXRpb25pbmciLCJvbGREcmFnZ2FibGVzIiwic29ydGluZyIsInJlY3RhbmdsZXMiLCJpbm5lckRyYWdnYWJsZXMiLCJzZXRQb3NpdGlvbiIsImNhdGNoRHJhZ2dhYmxlIiwidGFyZ2V0UmVjdGFuZ2xlIiwiZHJhZ2dhYmxlU3F1YXJlIiwic2NvcGVzIiwic2NvcGUiLCJyZW1vdmVJdGVtIiwibmV3RHJhZ2dhYmxlc0luZGV4IiwiYWRkUmVtb3ZlT25Nb3ZlIiwidGltZSIsIm1vdmUiLCJpbml0aWFsUG9zaXRpb24iLCJwdXNoSW5uZXJEcmFnZ2FibGUiLCJyZW1vdmVIYW5kbGVyIiwicmVtb3ZlIiwidW5zdWJzY3JpYmUiLCJTY29wZSIsImRyYWdFbmRBY3Rpb24iLCJvbkVuZCIsInNob3RUYXJnZXRzIiwic29ydCIsImEiLCJiIiwicGluUG9zaXRpb24iLCJyZXNldCIsInJlZnJlc2giLCJwb3NpdGlvbnMiLCJtZXNzYWdlIiwidGFyZ2V0SW5kZXhlcyIsImN1cnJlbnRTY29wZSIsImFkZERyYWdnYWJsZVRvU2NvcGUiLCJhZGREcmFnZ2FibGUiLCJEcmFnZ2FibGUiLCJpbnRlcnJ1cHQiLCJhZGRUYXJnZXRUb1Njb3BlIiwicHJlcGVuZE9uIiwiY2hlY2tTdXBwb3J0UGFzc2l2ZUV2ZW50cyIsInBhc3NpdmVTdXBwb3J0ZWQiLCJkZWZpbmVQcm9wZXJ0eSIsImdldCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiX2VyciIsImlzU3VwcG9ydFBhc3NpdmVFdmVudHMiLCJpc1RvdWNoIiwibW91c2VFdmVudHMiLCJlbmQiLCJ0b3VjaEV2ZW50cyIsInRyYW5zZm9ybVByb3BlcnR5IiwiZ2V0U3R5bGVQcm9wZXJ0eSIsInRyYW5zaXRpb25Qcm9wZXJ0eSIsImdldFRvdWNoQnlJRCIsInRvdWNoSWQiLCJjaGFuZ2VkVG91Y2hlcyIsImlkZW50aWZpZXIiLCJwcmV2ZW50RG91YmxlSW5pdCIsImV4aXN0aW5nIiwiY29weVN0eWxlcyIsInNvdXJjZSIsImRlc3RpbmF0aW9uIiwiY3MiLCJrZXkiLCJjaGlsZHJlbiIsIl9lbmFibGUiLCJzdGFydFBvc2l0aW9uaW5nIiwic3RhcnRMaXN0ZW5pbmciLCJfc2V0RGVmYXVsdFRyYW5zaXRpb24iLCJwaW5uZWRQb3NpdGlvbiIsImJvdW5kaW5nIiwiX2RyYWdTdGFydCIsImV2ZW50IiwiZHJhZ1N0YXJ0IiwiX2RyYWdNb3ZlIiwiZHJhZ01vdmUiLCJfZHJhZ0VuZCIsImRyYWdFbmQiLCJfbmF0aXZlRHJhZ1N0YXJ0IiwibmF0aXZlRHJhZ1N0YXJ0IiwiX25hdGl2ZURyYWdNb3ZlIiwibmF0aXZlRHJhZ01vdmUiLCJfbmF0aXZlRHJhZ0VuZCIsIm5hdGl2ZURyYWdFbmQiLCJfbmF0aXZlRHJvcCIsIm5hdGl2ZURyb3AiLCJoYW5kbGVyIiwicGFzc2l2ZSIsIl90cmFuc2Zvcm1Qb3NpdGlvbiIsImdldFNpemUiLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbkNzcyIsInRyYW5zZm9ybSIsInRyYW5zbGF0ZUNzcyIsInVhIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwibXNpZSIsImlzU2lsZW50IiwiZGV0ZXJtaW5lRGlyZWN0aW9uIiwiX3NldFRyYW5zaXRpb24iLCJfc2V0VHJhbnNsYXRlIiwic2lsZW50IiwibGVmdERpcmVjdGlvbiIsInJpZ2h0RGlyZWN0aW9uIiwidXBEaXJlY3Rpb24iLCJkb3duRGlyZWN0aW9uIiwiY3VycmVudEV2ZW50IiwiaXNUb3VjaEV2ZW50IiwiVG91Y2hFdmVudCIsIl9zdGFydFRvdWNoUG9pbnQiLCJwYWdlWCIsImNsaWVudFgiLCJwYWdlWSIsImNsaWVudFkiLCJfc3RhcnRQb3NpdGlvbiIsIl90b3VjaElkIiwic3RvcFByb3BhZ2F0aW9uIiwiSFRNTElucHV0RWxlbWVudCIsImZvY3VzIiwibmF0aXZlRHJhZ0FuZERyb3AiLCJwcmV2ZW50RGVmYXVsdCIsImVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcE9uVG91Y2giLCJlbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3AiLCJpc0RyYWdnaW5nIiwidG91Y2giLCJ0b3VjaFBvaW50IiwiYm91bmQiLCJkYXRhVHJhbnNmZXIiLCJzZXREYXRhIiwiX2V2ZW50IiwiY2xvbmVkRWxlbWVudCIsImNsb25lTm9kZSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImVtdWxhdGlvbkRyYWdnYWJsZSIsInNjcm9sbFgiLCJzY3JvbGxZIiwiZGVzdHJveSIsInJlbW92ZUNoaWxkIiwicmVzZXRFbWl0dGVyIiwiX3BhcmVudCIsIl9ib3VuZGluZyIsIl9oYW5kbGVyIiwiZW5hYmxlIiwiTGlzdCIsImluaXREcmFnZ2FibGUiLCJvbk1vdmUiLCJzb3J0ZWREcmFnZ2FibGVzIiwiZ2V0U29ydGVkRHJhZ2dhYmxlcyIsInBpbm5lZFBvc2l0aW9ucyIsImN1cnJlbnRJbmRleCIsInRhcmdldEluZGV4IiwiaW5pdGlhbFBvc2l0aW9ucyIsImNvbXBhcmUiLCJyZXNldFBvc2l0aW9uVG9Jbml0aWFsIiwiQXJyYXkiLCJsaXN0IiwicmVzZXRPbiIsImoiLCJnZXRDdXJyZW50UGlubmVkUG9zaXRpb25zIiwicGFyZW50RWxlbWVudCIsImVsZW1lbnRzIiwic2V0U3R5bGUiLCJjc3NUZXh0IiwiaGFzT3duUHJvcGVydHkiLCJhcHBlbmRGaXJzdENoaWxkIiwibm9kZSIsImZpcnN0Q2hpbGQiLCJpbnNlcnRCZWZvcmUiLCJjcmVhdGVDYW52YXMiLCJhcmVhIiwicmVjdGFnbGUiLCJjYW52YXMiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiU3BpZGVyIiwiYXJlYVJlY3RhbmdsZSIsImRBbmdsZSIsInN0YXJ0UmFkaXVzIiwiZW5kUmFkaXVzIiwiZ2V0TWluU2lkZSIsImxpbmVXaWR0aCIsInN0cm9rZVN0eWxlIiwiZmlsbFN0eWxlIiwiZ2V0Q29udGV4dCIsImhhbGZTaXplIiwiZHJhdyIsImlzSW5pdCIsImNsZWFyUmVjdCIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsImNsb3NlUGF0aCIsInN0cm9rZSIsImZpbGwiLCJBcmNTbGlkZXIiLCJhbmdsZXMiLCJzaGlmdGVkQ2VudGVyIiwiY2hhbmdlIiwidXBkYXRlQW5nbGUiLCJybmQiLCJyb3VuZCIsInJhbmRvbSIsInRvSGV4U3RyaW5nIiwiZGlnaXQiLCJzdHIiLCJ0b1N0cmluZyIsInJhbmRvbUNvbG9yIiwiZ2V0QXJyYXlXaXRoQm91bmRJbmRleGVzIiwicmV0SW5kZXhlcyIsIkNoYXJ0IiwidG91Y2hSYWRpdXMiLCJmaWxsU3R5bGVzIiwiaW5pdEFuZ2xlcyIsImxpbWl0SW1nIiwibGltaXRJbWdPZmZzZXQiLCJnZXRCb3VuZEFuZ2xlIiwiaXNDbG9zc2luZyIsInVwZGF0ZUFuZ2xlcyIsIl9kcmFnZ2FibGUiLCJkcmF3QXJjIiwiZHJhd0xpbWl0SW1nIiwib3B0cyIsImNsb25lT2JqIiwiY29sb3IiLCJnZXRGaWxsU3R5bGUiLCJhcmMiLCJpbWciLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJkcmF3SW1hZ2UiLCJzZXRUcmFuc2Zvcm0iLCJiYXNlQW5nbGUiLCJkaWZmQW5nbGUiLCJnZXRBbmdsZXNEaWZmIiwibW92ZUFuZFNhdmUiLCJlbmFibGVJbmRleGVzIiwiYWN0aXZlQXJjSW5kZXgiLCJkaXN0YW5jZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFBQSxTQUFTQSx1QkFBVCxDQUFpQ0MsT0FBakMsRUFBMENDLEtBQTFDLEVBQWlEO0VBQy9DLFNBQU9BLEtBQUssQ0FBQ0MsTUFBTixDQUFhLFVBQUNDLEdBQUQsRUFBTUMsSUFBTixFQUFlO0VBQ2pDLFdBQU9ELEdBQUcsR0FBR0UsUUFBUSxDQUFDQyxNQUFNLENBQUNDLGdCQUFQLENBQXdCUCxPQUF4QixFQUFpQ0ksSUFBakMsS0FBd0MsQ0FBekMsQ0FBckI7RUFDRCxHQUZNLEVBRUosQ0FGSSxDQUFQO0VBR0Q7O01BRW9CSTs7O0VBQ25CLGlCQUFZQyxDQUFaLEVBQWVDLENBQWYsRUFBa0I7RUFBQTs7RUFDaEIsU0FBS0QsQ0FBTCxHQUFTQSxDQUFUO0VBQ0EsU0FBS0MsQ0FBTCxHQUFTQSxDQUFUO0VBQ0Q7Ozs7MEJBRUdDLEdBQUc7RUFDTCxhQUFPLElBQUlILEtBQUosQ0FBVSxLQUFLQyxDQUFMLEdBQVNFLENBQUMsQ0FBQ0YsQ0FBckIsRUFBd0IsS0FBS0MsQ0FBTCxHQUFTQyxDQUFDLENBQUNELENBQW5DLENBQVA7RUFDRDs7OzBCQUVHQyxHQUFHO0VBQ0wsYUFBTyxJQUFJSCxLQUFKLENBQVUsS0FBS0MsQ0FBTCxHQUFTRSxDQUFDLENBQUNGLENBQXJCLEVBQXdCLEtBQUtDLENBQUwsR0FBU0MsQ0FBQyxDQUFDRCxDQUFuQyxDQUFQO0VBQ0Q7OzsyQkFFSUUsR0FBRztFQUNOLGFBQU8sSUFBSUosS0FBSixDQUFVLEtBQUtDLENBQUwsR0FBU0csQ0FBbkIsRUFBc0IsS0FBS0YsQ0FBTCxHQUFTRSxDQUEvQixDQUFQO0VBQ0Q7OztpQ0FFVTtFQUNULGFBQU8sSUFBSUosS0FBSixDQUFVLENBQUMsS0FBS0MsQ0FBaEIsRUFBbUIsQ0FBQyxLQUFLQyxDQUF6QixDQUFQO0VBQ0Q7Ozs4QkFFT0MsR0FBRztFQUNULGFBQVEsS0FBS0YsQ0FBTCxLQUFXRSxDQUFDLENBQUNGLENBQWIsSUFBa0IsS0FBS0MsQ0FBTCxLQUFXQyxDQUFDLENBQUNELENBQXZDO0VBQ0Q7Ozs4QkFFTztFQUNOLGFBQU8sSUFBSUYsS0FBSixDQUFVLEtBQUtDLENBQWYsRUFBa0IsS0FBS0MsQ0FBdkIsQ0FBUDtFQUNEOzs7aUNBRVU7RUFDVCwwQkFBYSxLQUFLRCxDQUFsQixnQkFBeUIsS0FBS0MsQ0FBOUI7RUFDRDs7O29DQUVvQlYsU0FBU2EsUUFBUTtFQUNwQ0EsTUFBQUEsTUFBTSxHQUFHQSxNQUFNLElBQUliLE9BQU8sQ0FBQ2MsVUFBM0I7RUFDQSxVQUFNQyxXQUFXLEdBQUdmLE9BQU8sQ0FBQ2dCLHFCQUFSLEVBQXBCO0VBQ0EsVUFBTUMsVUFBVSxHQUFHSixNQUFNLENBQUNHLHFCQUFQLEVBQW5CO0VBQ0EsYUFBTyxJQUFJUixLQUFKLENBQ0xPLFdBQVcsQ0FBQ0csSUFBWixHQUFtQkQsVUFBVSxDQUFDQyxJQUR6QixFQUVMSCxXQUFXLENBQUNJLEdBQVosR0FBa0JGLFVBQVUsQ0FBQ0UsR0FGeEIsQ0FBUDtFQUlEOzs7a0NBRWtCbkIsU0FBaUM7RUFBQSxVQUF4Qm9CLGdCQUF3Qix1RUFBUCxLQUFPO0VBQ2xELFVBQUlDLEtBQUssR0FBR2hCLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QlAsT0FBeEIsRUFBaUMsT0FBakMsQ0FBRCxDQUFwQjtFQUNBLFVBQUlzQixNQUFNLEdBQUdqQixRQUFRLENBQUNDLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0JQLE9BQXhCLEVBQWlDLFFBQWpDLENBQUQsQ0FBckI7O0VBQ0EsVUFBSSxDQUFDb0IsZ0JBQUwsRUFBdUI7RUFDckJDLFFBQUFBLEtBQUssSUFBSXRCLHVCQUF1QixDQUFDQyxPQUFELEVBQVUsQ0FBQyxjQUFELEVBQWlCLGVBQWpCLEVBQWtDLG1CQUFsQyxFQUF1RCxvQkFBdkQsQ0FBVixDQUFoQztFQUNBc0IsUUFBQUEsTUFBTSxJQUFJdkIsdUJBQXVCLENBQUNDLE9BQUQsRUFBVSxDQUFDLGFBQUQsRUFBZ0IsZ0JBQWhCLEVBQWtDLGtCQUFsQyxFQUFzRCxxQkFBdEQsQ0FBVixDQUFqQztFQUNEOztFQUNELGFBQU8sSUFBSVEsS0FBSixDQUFVYSxLQUFWLEVBQWlCQyxNQUFqQixDQUFQO0VBQ0Q7Ozs7OztFQzFESSxTQUFTQyxRQUFULENBQWtCdkIsT0FBbEIsRUFBMkJ3QixDQUEzQixFQUE4QjtFQUNuQyxNQUFNQyxFQUFFLEdBQUcsSUFBSUMsTUFBSixDQUFXLFlBQVlGLENBQVosR0FBZ0IsU0FBM0IsRUFBc0MsR0FBdEMsQ0FBWDtFQUNBLFNBQVFDLEVBQUUsQ0FBQ0UsSUFBSCxDQUFRM0IsT0FBTyxDQUFDNEIsU0FBaEIsQ0FBUjtFQUNEO0FBRUQsRUFBTyxTQUFTQyxRQUFULENBQWtCN0IsT0FBbEIsRUFBMkJ3QixDQUEzQixFQUE4QjtFQUNuQyxNQUFJLENBQUNELFFBQVEsQ0FBQ3ZCLE9BQUQsRUFBVXdCLENBQVYsQ0FBYixFQUEyQjtFQUN6QnhCLElBQUFBLE9BQU8sQ0FBQzRCLFNBQVIsR0FBb0IsQ0FBQzVCLE9BQU8sQ0FBQzRCLFNBQVIsR0FBb0IsR0FBcEIsR0FBMEJKLENBQTNCLEVBQThCTSxPQUE5QixDQUFzQyxNQUF0QyxFQUE4QyxHQUE5QyxFQUFtREEsT0FBbkQsQ0FBMkQsVUFBM0QsRUFBdUUsRUFBdkUsQ0FBcEI7RUFDRDtFQUNGO0FBRUQsRUFBTyxTQUFTQyxXQUFULENBQXFCL0IsT0FBckIsRUFBOEJ3QixDQUE5QixFQUFpQztFQUN0QyxNQUFNQyxFQUFFLEdBQUcsSUFBSUMsTUFBSixDQUFXLFlBQVlGLENBQVosR0FBZ0IsU0FBM0IsRUFBc0MsR0FBdEMsQ0FBWDtFQUNBeEIsRUFBQUEsT0FBTyxDQUFDNEIsU0FBUixHQUFvQjVCLE9BQU8sQ0FBQzRCLFNBQVIsQ0FBa0JFLE9BQWxCLENBQTBCTCxFQUExQixFQUE4QixJQUE5QixFQUFvQ0ssT0FBcEMsQ0FBNEMsTUFBNUMsRUFBb0QsR0FBcEQsRUFBeURBLE9BQXpELENBQWlFLFVBQWpFLEVBQTZFLEVBQTdFLENBQXBCO0VBQ0Q7O0VDZGMsU0FBU0UsZ0JBQVQsQ0FBMEJoQyxPQUExQixFQUFtQztFQUNoRCxNQUFJYSxNQUFNLEdBQUdiLE9BQU8sQ0FBQ2MsVUFBckI7O0VBQ0EsU0FBT0QsTUFBTSxDQUFDQyxVQUFQLElBQXFCUixNQUFNLENBQUNDLGdCQUFQLENBQXdCTSxNQUF4QixFQUFnQyxVQUFoQyxNQUFnRCxRQUFyRSxJQUFpRkEsTUFBTSxDQUFDb0IsT0FBUCxLQUFtQixNQUEzRyxFQUFtSDtFQUNqSHBCLElBQUFBLE1BQU0sR0FBR0EsTUFBTSxDQUFDQyxVQUFoQjtFQUNEOztFQUNELFNBQU9ELE1BQVA7RUFDRDs7TUNOb0JxQjs7O0VBQ25CLHdCQUFhQyxPQUFiLEVBQW9DO0VBQUEsUUFBZEMsT0FBYyx1RUFBSixFQUFJOztFQUFBOztFQUNsQyxTQUFLRCxPQUFMLEdBQWVBLE9BQU8sSUFBSSxJQUExQjtFQUNBLFNBQUtFLE1BQUwsR0FBYyxFQUFkOztFQUVBLFFBQUlELE9BQU8sSUFBSUEsT0FBTyxDQUFDRSxFQUF2QixFQUEyQjtFQUN6Qix5Q0FBOEJDLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlSixPQUFPLENBQUNFLEVBQXZCLENBQTlCLHFDQUEwRDtFQUFBO0VBQUEsWUFBOUNHLFNBQThDO0VBQUEsWUFBbkNDLEVBQW1DOztFQUN4RCxhQUFLSixFQUFMLENBQVFHLFNBQVIsRUFBbUJDLEVBQW5CO0VBQ0Q7RUFDRjtFQUNGOzs7OzJCQUVJRCxXQUFXO0VBQ2QsV0FBS0UsV0FBTCxHQUFtQixLQUFuQjtFQUNBLFVBQU1DLElBQUksR0FBRyxHQUFHQyxLQUFILENBQVNDLElBQVQsQ0FBY0MsU0FBZCxFQUF5QixDQUF6QixDQUFiO0VBRUEsVUFBSSxDQUFDLEtBQUtWLE1BQUwsQ0FBWUksU0FBWixDQUFMLEVBQTZCO0VBSmY7RUFBQTtFQUFBOztFQUFBO0VBTWQsNkJBQW1CLEtBQUtKLE1BQUwsQ0FBWUksU0FBWixDQUFuQiw4SEFBMkM7RUFBQSxjQUFoQ08sSUFBZ0M7RUFDekNBLFVBQUFBLElBQUksQ0FBQ0MsS0FBTCxDQUFXLEtBQUtkLE9BQWhCLEVBQXlCUyxJQUF6Qjs7RUFDQSxjQUFJLEtBQUtELFdBQVQsRUFBc0I7RUFDcEI7RUFDRDtFQUNGO0VBWGE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQVlmOzs7a0NBRVc7RUFDVixXQUFLQSxXQUFMLEdBQW1CLElBQW5CO0VBQ0Q7Ozt5QkFFRUYsV0FBV0MsSUFBSTtFQUNoQixVQUFJLENBQUMsS0FBS0wsTUFBTCxDQUFZSSxTQUFaLENBQUwsRUFBNkI7RUFDM0IsYUFBS0osTUFBTCxDQUFZSSxTQUFaLElBQXlCLEVBQXpCO0VBQ0Q7O0VBRUQsV0FBS0osTUFBTCxDQUFZSSxTQUFaLEVBQXVCUyxJQUF2QixDQUE0QlIsRUFBNUI7RUFDRDs7O2dDQUVTRCxXQUFXQyxJQUFJO0VBQ3ZCLFVBQUksQ0FBQyxLQUFLTCxNQUFMLENBQVlJLFNBQVosQ0FBTCxFQUE2QjtFQUMzQixhQUFLSixNQUFMLENBQVlJLFNBQVosSUFBeUIsRUFBekI7RUFDRDs7RUFFRCxXQUFLSixNQUFMLENBQVlJLFNBQVosRUFBdUJVLE9BQXZCLENBQStCVCxFQUEvQjtFQUNEOzs7a0NBRVdELFdBQVdDLElBQUk7RUFDekIsVUFBSSxLQUFLTCxNQUFMLENBQVlJLFNBQVosQ0FBSixFQUE0QjtFQUMxQixZQUFNVyxLQUFLLEdBQUcsS0FBS2YsTUFBTCxDQUFZSSxTQUFaLEVBQXVCWSxPQUF2QixDQUErQlgsRUFBL0IsQ0FBZDtFQUNBLGFBQUtMLE1BQUwsQ0FBWUksU0FBWixFQUF1QmEsTUFBdkIsQ0FBOEJGLEtBQTlCLEVBQXFDLENBQXJDO0VBQ0Q7RUFDRjs7O3FDQUVlO0VBQ2QsV0FBS2YsTUFBTCxHQUFjLEVBQWQ7RUFDRDs7OzhCQUVPSSxXQUFXO0VBQ2pCLFdBQUtKLE1BQUwsQ0FBWUksU0FBWixJQUF5QixFQUF6QjtFQUNEOzs7Ozs7Ozs7OztFQzNESDs7Ozs7Ozs7OztFQVVBLEVBQUUsVUFBVSxNQUFNLEdBQUc7O0VBSXJCLElBQUksUUFBUSxHQUFHLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztFQUMvQyxJQUFJLFlBQVksR0FBRyxRQUFRLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQzs7RUFFbEQsU0FBUyxnQkFBZ0IsRUFBRSxRQUFRLEdBQUc7SUFDcEMsS0FBSyxDQUFDLFFBQVEsR0FBRztNQUNmLE9BQU87S0FDUjs7O0lBR0QsS0FBSyxPQUFPLFlBQVksRUFBRSxRQUFRLEVBQUUsS0FBSyxRQUFRLEdBQUc7TUFDbEQsT0FBTyxRQUFRLENBQUM7S0FDakI7OztJQUdELFFBQVEsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7OztJQUdoRSxJQUFJLFFBQVEsQ0FBQztJQUNiLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUc7TUFDbkQsUUFBUSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUM7TUFDbEMsS0FBSyxPQUFPLFlBQVksRUFBRSxRQUFRLEVBQUUsS0FBSyxRQUFRLEdBQUc7UUFDbEQsT0FBTyxRQUFRLENBQUM7T0FDakI7S0FDRjtHQUNGOzs7QUFHRCxFQUswQzs7SUFFeEMsY0FBYyxHQUFHLGdCQUFnQixDQUFDO0dBQ25DLEFBR0E7O0dBRUEsR0FBVyxDQUFDOzs7TUNwRFFjOzs7RUFDbkIscUJBQVlDLFFBQVosRUFBc0JDLElBQXRCLEVBQTRCO0VBQUE7O0VBQzFCLFNBQUtELFFBQUwsR0FBZ0JBLFFBQWhCO0VBQ0EsU0FBS0MsSUFBTCxHQUFZQSxJQUFaO0VBQ0Q7Ozs7OEJBRU87RUFDTixhQUFPLEtBQUtELFFBQVo7RUFDRDs7OzhCQUVPO0VBQ04sYUFBTyxJQUFJaEQsS0FBSixDQUFVLEtBQUtnRCxRQUFMLENBQWMvQyxDQUFkLEdBQWtCLEtBQUtnRCxJQUFMLENBQVVoRCxDQUF0QyxFQUF5QyxLQUFLK0MsUUFBTCxDQUFjOUMsQ0FBdkQsQ0FBUDtFQUNEOzs7OEJBRU87RUFDTixhQUFPLEtBQUs4QyxRQUFMLENBQWNFLEdBQWQsQ0FBa0IsS0FBS0QsSUFBdkIsQ0FBUDtFQUNEOzs7OEJBRU87RUFDTixhQUFPLElBQUlqRCxLQUFKLENBQVUsS0FBS2dELFFBQUwsQ0FBYy9DLENBQXhCLEVBQTJCLEtBQUsrQyxRQUFMLENBQWM5QyxDQUFkLEdBQWtCLEtBQUsrQyxJQUFMLENBQVUvQyxDQUF2RCxDQUFQO0VBQ0Q7OztrQ0FFVztFQUNWLGFBQU8sS0FBSzhDLFFBQUwsQ0FBY0UsR0FBZCxDQUFrQixLQUFLRCxJQUFMLENBQVVFLElBQVYsQ0FBZSxHQUFmLENBQWxCLENBQVA7RUFDRDs7O3lCQUVFQyxNQUFNO0VBQ1AsVUFBTUosUUFBUSxHQUFHLElBQUloRCxLQUFKLENBQVVxRCxJQUFJLENBQUNDLEdBQUwsQ0FBUyxLQUFLTixRQUFMLENBQWMvQyxDQUF2QixFQUEwQm1ELElBQUksQ0FBQ0osUUFBTCxDQUFjL0MsQ0FBeEMsQ0FBVixFQUFzRG9ELElBQUksQ0FBQ0MsR0FBTCxDQUFTLEtBQUtOLFFBQUwsQ0FBYzlDLENBQXZCLEVBQTBCa0QsSUFBSSxDQUFDSixRQUFMLENBQWM5QyxDQUF4QyxDQUF0RCxDQUFqQjtFQUNBLFVBQU0rQyxJQUFJLEdBQUksSUFBSWpELEtBQUosQ0FBVXFELElBQUksQ0FBQ0UsR0FBTCxDQUFTLEtBQUtQLFFBQUwsQ0FBYy9DLENBQWQsR0FBa0IsS0FBS2dELElBQUwsQ0FBVWhELENBQXJDLEVBQXdDbUQsSUFBSSxDQUFDSixRQUFMLENBQWMvQyxDQUFkLEdBQWtCbUQsSUFBSSxDQUFDSCxJQUFMLENBQVVoRCxDQUFwRSxDQUFWLEVBQWtGb0QsSUFBSSxDQUFDRSxHQUFMLENBQVMsS0FBS1AsUUFBTCxDQUFjOUMsQ0FBZCxHQUFrQixLQUFLK0MsSUFBTCxDQUFVL0MsQ0FBckMsRUFBd0NrRCxJQUFJLENBQUNKLFFBQUwsQ0FBYzlDLENBQWQsR0FBa0JrRCxJQUFJLENBQUNILElBQUwsQ0FBVS9DLENBQXBFLENBQWxGLENBQUQsQ0FBNEpzRCxHQUE1SixDQUFnS1IsUUFBaEssQ0FBYjtFQUNBLGFBQU8sSUFBSUQsU0FBSixDQUFjQyxRQUFkLEVBQXdCQyxJQUF4QixDQUFQO0VBQ0Q7OzswQkFFR0csTUFBTTtFQUNSLFVBQU1KLFFBQVEsR0FBRyxJQUFJaEQsS0FBSixDQUFVcUQsSUFBSSxDQUFDRSxHQUFMLENBQVMsS0FBS1AsUUFBTCxDQUFjL0MsQ0FBdkIsRUFBMEJtRCxJQUFJLENBQUNKLFFBQUwsQ0FBYy9DLENBQXhDLENBQVYsRUFBc0RvRCxJQUFJLENBQUNFLEdBQUwsQ0FBUyxLQUFLUCxRQUFMLENBQWM5QyxDQUF2QixFQUEwQmtELElBQUksQ0FBQ0osUUFBTCxDQUFjOUMsQ0FBeEMsQ0FBdEQsQ0FBakI7RUFDQSxVQUFNK0MsSUFBSSxHQUFJLElBQUlqRCxLQUFKLENBQVVxRCxJQUFJLENBQUNDLEdBQUwsQ0FBUyxLQUFLTixRQUFMLENBQWMvQyxDQUFkLEdBQWtCLEtBQUtnRCxJQUFMLENBQVVoRCxDQUFyQyxFQUF3Q21ELElBQUksQ0FBQ0osUUFBTCxDQUFjL0MsQ0FBZCxHQUFrQm1ELElBQUksQ0FBQ0gsSUFBTCxDQUFVaEQsQ0FBcEUsQ0FBVixFQUFrRm9ELElBQUksQ0FBQ0MsR0FBTCxDQUFTLEtBQUtOLFFBQUwsQ0FBYzlDLENBQWQsR0FBa0IsS0FBSytDLElBQUwsQ0FBVS9DLENBQXJDLEVBQXdDa0QsSUFBSSxDQUFDSixRQUFMLENBQWM5QyxDQUFkLEdBQWtCa0QsSUFBSSxDQUFDSCxJQUFMLENBQVUvQyxDQUFwRSxDQUFsRixDQUFELENBQTRKc0QsR0FBNUosQ0FBZ0tSLFFBQWhLLENBQWI7O0VBQ0EsVUFBSUMsSUFBSSxDQUFDaEQsQ0FBTCxJQUFVLENBQVYsSUFBZWdELElBQUksQ0FBQy9DLENBQUwsSUFBVSxDQUE3QixFQUFnQztFQUM5QixlQUFPLElBQVA7RUFDRDs7RUFDRCxhQUFPLElBQUk2QyxTQUFKLENBQWNDLFFBQWQsRUFBd0JDLElBQXhCLENBQVA7RUFDRDs7O21DQUVZOUMsR0FBRztFQUNkLGFBQU8sRUFBRSxLQUFLNkMsUUFBTCxDQUFjL0MsQ0FBZCxHQUFrQkUsQ0FBQyxDQUFDRixDQUFwQixJQUF5QixLQUFLK0MsUUFBTCxDQUFjL0MsQ0FBZCxHQUFrQixLQUFLZ0QsSUFBTCxDQUFVaEQsQ0FBNUIsR0FBZ0NFLENBQUMsQ0FBQ0YsQ0FBM0QsSUFBZ0UsS0FBSytDLFFBQUwsQ0FBYzlDLENBQWQsR0FBa0JDLENBQUMsQ0FBQ0QsQ0FBcEYsSUFBeUYsS0FBSzhDLFFBQUwsQ0FBYzlDLENBQWQsR0FBa0IsS0FBSytDLElBQUwsQ0FBVS9DLENBQTVCLEdBQWdDQyxDQUFDLENBQUNELENBQTdILENBQVA7RUFDRDs7O3VDQUVnQnVELFdBQVc7RUFDMUIsYUFBTyxLQUFLQyxZQUFMLENBQWtCRCxTQUFTLENBQUNULFFBQTVCLEtBQXlDLEtBQUtVLFlBQUwsQ0FBa0JELFNBQVMsQ0FBQ0UsS0FBVixFQUFsQixDQUFoRDtFQUNEOzs7a0NBRVdQLE1BQU1RLE1BQU07RUFDdEIsVUFBSUMsT0FBSixFQUFhQyxjQUFiOztFQUNBLFVBQUlGLElBQUosRUFBVTtFQUNSQyxRQUFBQSxPQUFPLEdBQUdELElBQVY7RUFDRCxPQUZELE1BRU87RUFDTEUsUUFBQUEsY0FBYyxHQUFHLEtBQUtDLEdBQUwsQ0FBU1gsSUFBVCxDQUFqQjs7RUFDQSxZQUFJLENBQUNVLGNBQUwsRUFBcUI7RUFDbkIsaUJBQU9WLElBQVA7RUFDRDs7RUFDRFMsUUFBQUEsT0FBTyxHQUFHQyxjQUFjLENBQUNiLElBQWYsQ0FBb0JoRCxDQUFwQixHQUF3QjZELGNBQWMsQ0FBQ2IsSUFBZixDQUFvQi9DLENBQTVDLEdBQWdELEdBQWhELEdBQXNELEdBQWhFO0VBQ0Q7O0VBQ0QsVUFBTThELFVBQVUsR0FBRyxLQUFLQyxTQUFMLEVBQW5CO0VBQ0EsVUFBTUMsVUFBVSxHQUFHZCxJQUFJLENBQUNhLFNBQUwsRUFBbkI7RUFDQSxVQUFNRSxJQUFJLEdBQUdILFVBQVUsQ0FBQ0gsT0FBRCxDQUFWLEdBQXNCSyxVQUFVLENBQUNMLE9BQUQsQ0FBaEMsR0FBNEMsQ0FBQyxDQUE3QyxHQUFpRCxDQUE5RDtFQUNBLFVBQU1PLE1BQU0sR0FBR0QsSUFBSSxHQUFHLENBQVAsR0FBVyxLQUFLbkIsUUFBTCxDQUFjYSxPQUFkLElBQXlCLEtBQUtaLElBQUwsQ0FBVVksT0FBVixDQUF6QixHQUE4Q1QsSUFBSSxDQUFDSixRQUFMLENBQWNhLE9BQWQsQ0FBekQsR0FBa0YsS0FBS2IsUUFBTCxDQUFjYSxPQUFkLEtBQTBCVCxJQUFJLENBQUNKLFFBQUwsQ0FBY2EsT0FBZCxJQUF5QlQsSUFBSSxDQUFDSCxJQUFMLENBQVVZLE9BQVYsQ0FBbkQsQ0FBakc7RUFDQVQsTUFBQUEsSUFBSSxDQUFDSixRQUFMLENBQWNhLE9BQWQsSUFBeUJULElBQUksQ0FBQ0osUUFBTCxDQUFjYSxPQUFkLElBQXlCTyxNQUFsRDtFQUNBLGFBQU9oQixJQUFQO0VBQ0Q7OztrQ0FFVztFQUNWLGFBQU8sS0FBS0gsSUFBTCxDQUFVaEQsQ0FBVixHQUFjLEtBQUtnRCxJQUFMLENBQVUvQyxDQUEvQjtFQUNEOzs7aUNBRVVtRSxJQUFJO0VBQ2JBLE1BQUFBLEVBQUUsR0FBR0EsRUFBRSxJQUFJQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWDtFQUNBRixNQUFBQSxFQUFFLENBQUNHLEtBQUgsQ0FBUzlELElBQVQsR0FBZ0IsS0FBS3NDLFFBQUwsQ0FBYy9DLENBQWQsR0FBa0IsSUFBbEM7RUFDQW9FLE1BQUFBLEVBQUUsQ0FBQ0csS0FBSCxDQUFTN0QsR0FBVCxHQUFlLEtBQUtxQyxRQUFMLENBQWM5QyxDQUFkLEdBQWtCLElBQWpDO0VBQ0FtRSxNQUFBQSxFQUFFLENBQUNHLEtBQUgsQ0FBUzNELEtBQVQsR0FBaUIsS0FBS29DLElBQUwsQ0FBVWhELENBQVYsR0FBYyxJQUEvQjtFQUNBb0UsTUFBQUEsRUFBRSxDQUFDRyxLQUFILENBQVMxRCxNQUFULEdBQWtCLEtBQUttQyxJQUFMLENBQVUvQyxDQUFWLEdBQWMsSUFBaEM7RUFDRDs7OzZCQUVNK0MsTUFBTTtFQUNYLFdBQUtBLElBQUwsR0FBWSxLQUFLQSxJQUFMLENBQVVDLEdBQVYsQ0FBY0QsSUFBZCxDQUFaO0VBQ0EsV0FBS0QsUUFBTCxHQUFnQixLQUFLQSxRQUFMLENBQWNFLEdBQWQsQ0FBa0JELElBQUksQ0FBQ0UsSUFBTCxDQUFVLENBQUMsR0FBWCxDQUFsQixDQUFoQjtFQUNEOzs7bUNBRVk7RUFDWCxhQUFPRSxJQUFJLENBQUNDLEdBQUwsQ0FBUyxLQUFLTCxJQUFMLENBQVVoRCxDQUFuQixFQUFzQixLQUFLZ0QsSUFBTCxDQUFVL0MsQ0FBaEMsQ0FBUDtFQUNEOzs7a0NBRWtCVixTQUF1RjtFQUFBLFVBQTlFYSxNQUE4RSx1RUFBdkViLE9BQU8sQ0FBQ2MsVUFBK0Q7RUFBQSxVQUFuRE0sZ0JBQW1ELHVFQUFsQyxLQUFrQztFQUFBLFVBQTNCNkQsbUJBQTJCLHVFQUFQLEtBQU87RUFDeEcsVUFBTXpCLFFBQVEsR0FBR2hELEtBQUssQ0FBQzBFLGFBQU4sQ0FBb0JsRixPQUFwQixFQUE2QmEsTUFBN0IsRUFBcUNvRSxtQkFBckMsQ0FBakI7RUFDQSxVQUFNeEIsSUFBSSxHQUFHakQsS0FBSyxDQUFDMkUsV0FBTixDQUFrQm5GLE9BQWxCLEVBQTJCb0IsZ0JBQTNCLENBQWI7RUFDQSxhQUFPLElBQUltQyxTQUFKLENBQWNDLFFBQWQsRUFBd0JDLElBQXhCLENBQVA7RUFDRDs7Ozs7O0VDL0ZJLFNBQVMyQixXQUFULENBQXFCQyxFQUFyQixFQUF5QkMsRUFBekIsRUFBNkI7RUFDbEMsTUFBTUMsRUFBRSxHQUFHRixFQUFFLENBQUM1RSxDQUFILEdBQU82RSxFQUFFLENBQUM3RSxDQUFyQjtFQUFBLE1BQXdCK0UsRUFBRSxHQUFHSCxFQUFFLENBQUMzRSxDQUFILEdBQU80RSxFQUFFLENBQUM1RSxDQUF2QztFQUNBLFNBQU9tRCxJQUFJLENBQUM0QixJQUFMLENBQVVGLEVBQUUsR0FBR0EsRUFBTCxHQUFVQyxFQUFFLEdBQUdBLEVBQXpCLENBQVA7RUFDRDtBQUVELEVBQU8sU0FBU0UsY0FBVCxDQUF3QkwsRUFBeEIsRUFBNEJDLEVBQTVCLEVBQWdDO0VBQ3JDLFNBQU96QixJQUFJLENBQUM4QixHQUFMLENBQVNOLEVBQUUsQ0FBQzVFLENBQUgsR0FBTzZFLEVBQUUsQ0FBQzdFLENBQW5CLENBQVA7RUFDRDtBQUVELEVBQU8sU0FBU21GLGNBQVQsQ0FBd0JQLEVBQXhCLEVBQTRCQyxFQUE1QixFQUFnQztFQUNyQyxTQUFPekIsSUFBSSxDQUFDOEIsR0FBTCxDQUFTTixFQUFFLENBQUMzRSxDQUFILEdBQU80RSxFQUFFLENBQUM1RSxDQUFuQixDQUFQO0VBQ0Q7QUFFRCxFQUFPLFNBQVNtRiwrQkFBVCxDQUF5Q3pELE9BQXpDLEVBQWtEO0VBQ3ZELFNBQU8sVUFBQ2lELEVBQUQsRUFBS0MsRUFBTCxFQUFZO0VBQ2pCLFdBQU96QixJQUFJLENBQUM0QixJQUFMLENBQ0w1QixJQUFJLENBQUNpQyxHQUFMLENBQVMxRCxPQUFPLENBQUMzQixDQUFSLEdBQVlvRCxJQUFJLENBQUM4QixHQUFMLENBQVNOLEVBQUUsQ0FBQzVFLENBQUgsR0FBTzZFLEVBQUUsQ0FBQzdFLENBQW5CLENBQXJCLEVBQTRDLENBQTVDLElBQ0FvRCxJQUFJLENBQUNpQyxHQUFMLENBQVMxRCxPQUFPLENBQUMxQixDQUFSLEdBQVltRCxJQUFJLENBQUM4QixHQUFMLENBQVNOLEVBQUUsQ0FBQzNFLENBQUgsR0FBTzRFLEVBQUUsQ0FBQzVFLENBQW5CLENBQXJCLEVBQTRDLENBQTVDLENBRkssQ0FBUDtFQUlELEdBTEQ7RUFNRDtBQUVELEVBQU8sU0FBU3FGLG1CQUFULENBQTZCQyxHQUE3QixFQUFrQ0MsR0FBbEMsRUFBdUNDLE1BQXZDLEVBQTRFO0VBQUEsTUFBN0JDLGVBQTZCLHVFQUFiZixXQUFhO0VBQ2pGLE1BQUkzQixJQUFKO0VBQUEsTUFBVUwsS0FBSyxHQUFHLENBQWxCO0VBQUEsTUFBcUJnRCxDQUFyQjtFQUFBLE1BQXdCQyxJQUF4Qjs7RUFDQSxNQUFJTCxHQUFHLENBQUNNLE1BQUosS0FBZSxDQUFuQixFQUFzQjtFQUNwQixXQUFPLENBQUMsQ0FBUjtFQUNEOztFQUNEN0MsRUFBQUEsSUFBSSxHQUFHMEMsZUFBZSxDQUFDSCxHQUFHLENBQUMsQ0FBRCxDQUFKLEVBQVNDLEdBQVQsQ0FBdEI7O0VBQ0EsT0FBS0csQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHSixHQUFHLENBQUNNLE1BQXBCLEVBQTRCRixDQUFDLEVBQTdCLEVBQWlDO0VBQy9CQyxJQUFBQSxJQUFJLEdBQUdGLGVBQWUsQ0FBQ0gsR0FBRyxDQUFDSSxDQUFELENBQUosRUFBU0gsR0FBVCxDQUF0Qjs7RUFDQSxRQUFJSSxJQUFJLEdBQUc1QyxJQUFYLEVBQWlCO0VBQ2ZBLE1BQUFBLElBQUksR0FBRzRDLElBQVA7RUFDQWpELE1BQUFBLEtBQUssR0FBR2dELENBQVI7RUFDRDtFQUNGOztFQUNELE1BQUlGLE1BQU0sSUFBSSxDQUFWLElBQWV6QyxJQUFJLEdBQUd5QyxNQUExQixFQUFrQztFQUNoQyxXQUFPLENBQUMsQ0FBUjtFQUNEOztFQUNELFNBQU85QyxLQUFQO0VBQ0Q7O0VDL0JNLFNBQVNtRCxjQUFULENBQXdCQyxJQUF4QixFQUE4QkMsSUFBOUIsRUFBb0NDLElBQXBDLEVBQTBDQyxJQUExQyxFQUFnRDtFQUNyRCxNQUFJTixJQUFKLEVBQVVPLEVBQVYsRUFBY0MsRUFBZCxFQUFrQkMsRUFBbEIsRUFBc0JDLEVBQXRCLEVBQTBCdEcsQ0FBMUIsRUFBNkJDLENBQTdCOztFQUNBLE1BQUlnRyxJQUFJLENBQUNqRyxDQUFMLEtBQVdrRyxJQUFJLENBQUNsRyxDQUFwQixFQUF1QjtFQUNyQjRGLElBQUFBLElBQUksR0FBR0ssSUFBUDtFQUNBQSxJQUFBQSxJQUFJLEdBQUdGLElBQVA7RUFDQUEsSUFBQUEsSUFBSSxHQUFHSCxJQUFQO0VBQ0FBLElBQUFBLElBQUksR0FBR00sSUFBUDtFQUNBQSxJQUFBQSxJQUFJLEdBQUdGLElBQVA7RUFDQUEsSUFBQUEsSUFBSSxHQUFHSixJQUFQO0VBQ0Q7O0VBQ0QsTUFBSUcsSUFBSSxDQUFDL0YsQ0FBTCxLQUFXZ0csSUFBSSxDQUFDaEcsQ0FBcEIsRUFBdUI7RUFDckJvRyxJQUFBQSxFQUFFLEdBQUcsQ0FBQ0YsSUFBSSxDQUFDakcsQ0FBTCxHQUFTZ0csSUFBSSxDQUFDaEcsQ0FBZixLQUFxQmlHLElBQUksQ0FBQ2xHLENBQUwsR0FBU2lHLElBQUksQ0FBQ2pHLENBQW5DLENBQUw7RUFDQXNHLElBQUFBLEVBQUUsR0FBRyxDQUFDSixJQUFJLENBQUNsRyxDQUFMLEdBQVNpRyxJQUFJLENBQUNoRyxDQUFkLEdBQWtCZ0csSUFBSSxDQUFDakcsQ0FBTCxHQUFTa0csSUFBSSxDQUFDakcsQ0FBakMsS0FBdUNpRyxJQUFJLENBQUNsRyxDQUFMLEdBQVNpRyxJQUFJLENBQUNqRyxDQUFyRCxDQUFMO0VBQ0FBLElBQUFBLENBQUMsR0FBRytGLElBQUksQ0FBQy9GLENBQVQ7RUFDQUMsSUFBQUEsQ0FBQyxHQUFHRCxDQUFDLEdBQUdvRyxFQUFKLEdBQVNFLEVBQWI7RUFDQSxXQUFPLElBQUl2RyxLQUFKLENBQVVDLENBQVYsRUFBYUMsQ0FBYixDQUFQO0VBQ0QsR0FORCxNQU1PO0VBQ0xrRyxJQUFBQSxFQUFFLEdBQUcsQ0FBQ0gsSUFBSSxDQUFDL0YsQ0FBTCxHQUFTOEYsSUFBSSxDQUFDOUYsQ0FBZixLQUFxQitGLElBQUksQ0FBQ2hHLENBQUwsR0FBUytGLElBQUksQ0FBQy9GLENBQW5DLENBQUw7RUFDQXFHLElBQUFBLEVBQUUsR0FBRyxDQUFDTCxJQUFJLENBQUNoRyxDQUFMLEdBQVMrRixJQUFJLENBQUM5RixDQUFkLEdBQWtCOEYsSUFBSSxDQUFDL0YsQ0FBTCxHQUFTZ0csSUFBSSxDQUFDL0YsQ0FBakMsS0FBdUMrRixJQUFJLENBQUNoRyxDQUFMLEdBQVMrRixJQUFJLENBQUMvRixDQUFyRCxDQUFMO0VBQ0FvRyxJQUFBQSxFQUFFLEdBQUcsQ0FBQ0YsSUFBSSxDQUFDakcsQ0FBTCxHQUFTZ0csSUFBSSxDQUFDaEcsQ0FBZixLQUFxQmlHLElBQUksQ0FBQ2xHLENBQUwsR0FBU2lHLElBQUksQ0FBQ2pHLENBQW5DLENBQUw7RUFDQXNHLElBQUFBLEVBQUUsR0FBRyxDQUFDSixJQUFJLENBQUNsRyxDQUFMLEdBQVNpRyxJQUFJLENBQUNoRyxDQUFkLEdBQWtCZ0csSUFBSSxDQUFDakcsQ0FBTCxHQUFTa0csSUFBSSxDQUFDakcsQ0FBakMsS0FBdUNpRyxJQUFJLENBQUNsRyxDQUFMLEdBQVNpRyxJQUFJLENBQUNqRyxDQUFyRCxDQUFMO0VBQ0FBLElBQUFBLENBQUMsR0FBRyxDQUFDcUcsRUFBRSxHQUFHQyxFQUFOLEtBQWFGLEVBQUUsR0FBR0QsRUFBbEIsQ0FBSjtFQUNBbEcsSUFBQUEsQ0FBQyxHQUFHRCxDQUFDLEdBQUdtRyxFQUFKLEdBQVNFLEVBQWI7RUFDQSxXQUFPLElBQUl0RyxLQUFKLENBQVVDLENBQVYsRUFBYUMsQ0FBYixDQUFQO0VBQ0Q7RUFDRjtBQUVELEVBaUJPLFNBQVNzRyxXQUFULENBQXFCQyxDQUFyQixFQUF3QkMsQ0FBeEIsRUFBMkJDLENBQTNCLEVBQThCO0VBQ25DLE1BQU1DLEVBQUUsR0FBRyxJQUFJNUcsS0FBSixDQUFVMkcsQ0FBQyxDQUFDMUcsQ0FBRixHQUFNd0csQ0FBQyxDQUFDeEcsQ0FBbEIsRUFBcUIwRyxDQUFDLENBQUN6RyxDQUFGLEdBQU11RyxDQUFDLENBQUN2RyxDQUE3QixDQUFYO0VBQUEsTUFDRTJHLEVBQUUsR0FBRyxJQUFJN0csS0FBSixDQUFVMEcsQ0FBQyxDQUFDekcsQ0FBRixHQUFNd0csQ0FBQyxDQUFDeEcsQ0FBbEIsRUFBcUJ5RyxDQUFDLENBQUN4RyxDQUFGLEdBQU11RyxDQUFDLENBQUN2RyxDQUE3QixDQURQO0VBQUEsTUFFRTRHLEdBQUcsR0FBR0QsRUFBRSxDQUFDNUcsQ0FBSCxHQUFPNEcsRUFBRSxDQUFDNUcsQ0FBVixHQUFjNEcsRUFBRSxDQUFDM0csQ0FBSCxHQUFPMkcsRUFBRSxDQUFDM0csQ0FGaEM7RUFBQSxNQUdFNkcsS0FBSyxHQUFHSCxFQUFFLENBQUMzRyxDQUFILEdBQU80RyxFQUFFLENBQUM1RyxDQUFWLEdBQWMyRyxFQUFFLENBQUMxRyxDQUFILEdBQU8yRyxFQUFFLENBQUMzRyxDQUhsQztFQUFBLE1BSUU4RyxDQUFDLEdBQUdELEtBQUssR0FBR0QsR0FKZDtFQUtBLFNBQU8sSUFBSTlHLEtBQUosQ0FBVXlHLENBQUMsQ0FBQ3hHLENBQUYsR0FBTTRHLEVBQUUsQ0FBQzVHLENBQUgsR0FBTytHLENBQXZCLEVBQTBCUCxDQUFDLENBQUN2RyxDQUFGLEdBQU0yRyxFQUFFLENBQUMzRyxDQUFILEdBQU84RyxDQUF2QyxDQUFQO0VBQ0Q7QUFFRCxFQUtPLFNBQVNDLHNCQUFULENBQWdDQyxHQUFoQyxFQUFxQ0MsR0FBckMsRUFBMENDLE1BQTFDLEVBQWtEO0VBQ3ZELE1BQU1yQyxFQUFFLEdBQUdvQyxHQUFHLENBQUNsSCxDQUFKLEdBQVFpSCxHQUFHLENBQUNqSCxDQUF2QjtFQUNBLE1BQU0rRSxFQUFFLEdBQUdtQyxHQUFHLENBQUNqSCxDQUFKLEdBQVFnSCxHQUFHLENBQUNoSCxDQUF2QjtFQUNBLE1BQU1tSCxPQUFPLEdBQUdELE1BQU0sR0FBR3hDLFdBQVcsQ0FBQ3NDLEdBQUQsRUFBTUMsR0FBTixDQUFwQztFQUNBLFNBQU8sSUFBSW5ILEtBQUosQ0FBVWtILEdBQUcsQ0FBQ2pILENBQUosR0FBUW9ILE9BQU8sR0FBR3RDLEVBQTVCLEVBQWdDbUMsR0FBRyxDQUFDaEgsQ0FBSixHQUFRbUgsT0FBTyxHQUFHckMsRUFBbEQsQ0FBUDtFQUNEO0FBRUQsRUFBTyxTQUFTc0MscUJBQVQsQ0FBK0JDLFdBQS9CLEVBQTRDQyxLQUE1QyxFQUFtREMsT0FBbkQsRUFBNEQ7RUFDakUsTUFBTUMsTUFBTSxHQUFHSCxXQUFXLENBQUNJLE1BQVosQ0FBbUIsVUFBQ0MsTUFBRCxFQUFZO0VBQzVDLFdBQU9BLE1BQU0sQ0FBQzFILENBQVAsR0FBV3NILEtBQUssQ0FBQ3RILENBQWpCLEtBQXVCdUgsT0FBTyxHQUFHRyxNQUFNLENBQUMzSCxDQUFQLEdBQVd1SCxLQUFLLENBQUN2SCxDQUFwQixHQUF3QjJILE1BQU0sQ0FBQzNILENBQVAsR0FBV3VILEtBQUssQ0FBQ3ZILENBQXZFLENBQVA7RUFDRCxHQUZjLENBQWY7O0VBSUEsT0FBSyxJQUFJMkYsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRzhCLE1BQU0sQ0FBQzVCLE1BQTNCLEVBQW1DRixDQUFDLEVBQXBDLEVBQXdDO0VBQ3RDLFFBQUk0QixLQUFLLENBQUN0SCxDQUFOLEdBQVV3SCxNQUFNLENBQUM5QixDQUFELENBQU4sQ0FBVTFGLENBQXhCLEVBQTJCO0VBQ3pCd0gsTUFBQUEsTUFBTSxDQUFDNUUsTUFBUCxDQUFjOEMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQjRCLEtBQXBCO0VBQ0EsYUFBT0UsTUFBUDtFQUNEO0VBQ0Y7O0VBQ0RBLEVBQUFBLE1BQU0sQ0FBQ2hGLElBQVAsQ0FBWThFLEtBQVo7RUFDQSxTQUFPRSxNQUFQO0VBQ0Q7O0VDcEZNLFNBQVNHLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQTZCQyxJQUE3QixFQUFtQztFQUN4QyxNQUFNQyxRQUFRLEdBQUczRSxJQUFJLENBQUNDLEdBQUwsQ0FBU3dFLEtBQVQsRUFBZ0JDLElBQWhCLENBQWpCO0VBQ0EsTUFBTUUsUUFBUSxHQUFJNUUsSUFBSSxDQUFDRSxHQUFMLENBQVN1RSxLQUFULEVBQWdCQyxJQUFoQixDQUFsQjtFQUNBLFNBQU8xRSxJQUFJLENBQUNDLEdBQUwsQ0FBUzJFLFFBQVEsR0FBR0QsUUFBcEIsRUFBOEJBLFFBQVEsR0FBRzNFLElBQUksQ0FBQzZFLEVBQUwsR0FBUSxDQUFuQixHQUF1QkQsUUFBckQsQ0FBUDtFQUNEO0FBRUQsRUFBTyxTQUFTRSxRQUFULENBQWtCdEQsRUFBbEIsRUFBc0JDLEVBQXRCLEVBQTBCO0VBQy9CLE1BQU1zRCxJQUFJLEdBQUd0RCxFQUFFLENBQUN0QixHQUFILENBQU9xQixFQUFQLENBQWI7RUFDQSxTQUFPd0QsY0FBYyxDQUFDaEYsSUFBSSxDQUFDaUYsS0FBTCxDQUFXRixJQUFJLENBQUNsSSxDQUFoQixFQUFtQmtJLElBQUksQ0FBQ25JLENBQXhCLENBQUQsQ0FBckI7RUFDRDtBQUVELEVBQU8sU0FBU3NJLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0VBQzlCLFNBQVNBLEtBQUssR0FBRyxHQUFULEdBQWdCbkYsSUFBSSxDQUFDNkUsRUFBckIsR0FBMEIsR0FBbEM7RUFDRDtBQUVELEVBSU8sU0FBU08sVUFBVCxDQUFvQm5GLEdBQXBCLEVBQXlCQyxHQUF6QixFQUE4QmtDLEdBQTlCLEVBQW1DO0VBQ3hDLE1BQUlpRCxJQUFKLEVBQVVDLElBQVY7O0VBQ0EsTUFBSXJGLEdBQUcsR0FBR0MsR0FBTixJQUFha0MsR0FBRyxHQUFHbkMsR0FBbkIsSUFBMEJtQyxHQUFHLEdBQUdsQyxHQUFwQyxFQUF5QztFQUN2QyxXQUFPa0MsR0FBUDtFQUNELEdBRkQsTUFFTyxJQUFJbEMsR0FBRyxHQUFHRCxHQUFOLEtBQWNtQyxHQUFHLEdBQUdsQyxHQUFOLElBQWFrQyxHQUFHLEdBQUduQyxHQUFqQyxDQUFKLEVBQTJDO0VBQ2hELFdBQU9tQyxHQUFQO0VBQ0QsR0FGTSxNQUVBO0VBQ0xpRCxJQUFBQSxJQUFJLEdBQUdiLFlBQVksQ0FBQ3ZFLEdBQUQsRUFBTW1DLEdBQU4sQ0FBbkI7RUFDQWtELElBQUFBLElBQUksR0FBR2QsWUFBWSxDQUFDdEUsR0FBRCxFQUFNa0MsR0FBTixDQUFuQjs7RUFDQSxRQUFJaUQsSUFBSSxHQUFHQyxJQUFYLEVBQWlCO0VBQ2YsYUFBT3JGLEdBQVA7RUFDRCxLQUZELE1BRU87RUFDTCxhQUFPQyxHQUFQO0VBQ0Q7RUFDRjtFQUNGO0FBRUQsRUFZTyxTQUFTOEUsY0FBVCxDQUF3QjVDLEdBQXhCLEVBQTZCO0VBQ2xDLFNBQU9BLEdBQUcsR0FBRyxDQUFiLEVBQWdCO0VBQ2RBLElBQUFBLEdBQUcsSUFBSSxJQUFJcEMsSUFBSSxDQUFDNkUsRUFBaEI7RUFDRDs7RUFDRCxTQUFPekMsR0FBRyxHQUFHLElBQUlwQyxJQUFJLENBQUM2RSxFQUF0QixFQUEwQjtFQUN4QnpDLElBQUFBLEdBQUcsSUFBSSxJQUFJcEMsSUFBSSxDQUFDNkUsRUFBaEI7RUFDRDs7RUFDRCxTQUFPekMsR0FBUDtFQUNEO0FBRUQsRUFBTyxTQUFTbUQsd0JBQVQsQ0FBa0NKLEtBQWxDLEVBQXlDMUMsTUFBekMsRUFBaUQrQyxNQUFqRCxFQUF5RDtFQUM5REEsRUFBQUEsTUFBTSxHQUFHQSxNQUFNLElBQUksSUFBSTdJLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixDQUFuQjtFQUNBLFNBQU82SSxNQUFNLENBQUMzRixHQUFQLENBQVcsSUFBSWxELEtBQUosQ0FBVThGLE1BQU0sR0FBR3pDLElBQUksQ0FBQ3lGLEdBQUwsQ0FBU04sS0FBVCxDQUFuQixFQUFvQzFDLE1BQU0sR0FBR3pDLElBQUksQ0FBQzBGLEdBQUwsQ0FBU1AsS0FBVCxDQUE3QyxDQUFYLENBQVA7RUFDRDs7TUNoRFlRLEtBQWI7RUFBQTtFQUFBO0VBQ0UsbUJBQWU7RUFBQTtFQUFFOztFQURuQjtFQUFBO0VBQUEsMEJBR1F4QixLQUhSLEVBR2V5QixLQUhmLEVBR3NCO0VBQ2xCLGFBQU96QixLQUFQO0VBQ0Q7RUFMSDtFQUFBO0VBQUEsOEJBT2E7RUFQYjs7RUFBQTtFQUFBO0FBVUEsTUFBYTBCLGdCQUFiO0VBQUE7RUFBQTtFQUFBOztFQUNFLDRCQUFZekYsU0FBWixFQUF1QjtFQUFBOztFQUFBOztFQUNyQjtFQUNBLFVBQUtBLFNBQUwsR0FBaUJBLFNBQWpCO0VBRnFCO0VBR3RCOztFQUpIO0VBQUE7RUFBQSwwQkFNUStELEtBTlIsRUFNZXZFLElBTmYsRUFNcUI7RUFDakIsVUFBTWtHLFNBQVMsR0FBRzNCLEtBQUssQ0FBQzRCLEtBQU4sRUFBbEI7RUFDQSxVQUFNQyxNQUFNLEdBQUcsS0FBSzVGLFNBQUwsQ0FBZUUsS0FBZixFQUFmOztFQUVBLFVBQUksS0FBS0YsU0FBTCxDQUFlVCxRQUFmLENBQXdCL0MsQ0FBeEIsR0FBNEJrSixTQUFTLENBQUNsSixDQUExQyxFQUE2QztFQUMxQ2tKLFFBQUFBLFNBQVMsQ0FBQ2xKLENBQVYsR0FBYyxLQUFLd0QsU0FBTCxDQUFlVCxRQUFmLENBQXdCL0MsQ0FBdkM7RUFDRDs7RUFDRCxVQUFJLEtBQUt3RCxTQUFMLENBQWVULFFBQWYsQ0FBd0I5QyxDQUF4QixHQUE0QmlKLFNBQVMsQ0FBQ2pKLENBQTFDLEVBQTZDO0VBQzNDaUosUUFBQUEsU0FBUyxDQUFDakosQ0FBVixHQUFjLEtBQUt1RCxTQUFMLENBQWVULFFBQWYsQ0FBd0I5QyxDQUF0QztFQUNEOztFQUNELFVBQUltSixNQUFNLENBQUNwSixDQUFQLEdBQVdrSixTQUFTLENBQUNsSixDQUFWLEdBQWNnRCxJQUFJLENBQUNoRCxDQUFsQyxFQUFxQztFQUNuQ2tKLFFBQUFBLFNBQVMsQ0FBQ2xKLENBQVYsR0FBY29KLE1BQU0sQ0FBQ3BKLENBQVAsR0FBV2dELElBQUksQ0FBQ2hELENBQTlCO0VBQ0Q7O0VBQ0QsVUFBSW9KLE1BQU0sQ0FBQ25KLENBQVAsR0FBV2lKLFNBQVMsQ0FBQ2pKLENBQVYsR0FBYytDLElBQUksQ0FBQy9DLENBQWxDLEVBQXFDO0VBQ25DaUosUUFBQUEsU0FBUyxDQUFDakosQ0FBVixHQUFjbUosTUFBTSxDQUFDbkosQ0FBUCxHQUFXK0MsSUFBSSxDQUFDL0MsQ0FBOUI7RUFDRDs7RUFFRCxhQUFPaUosU0FBUDtFQUNEO0VBeEJIOztFQUFBO0VBQUEsRUFBc0NILEtBQXRDO0FBMkJBLE1BQWFNLGNBQWI7RUFBQTtFQUFBO0VBQUE7O0VBQ0UsMEJBQVk5SixPQUFaLEVBQXFCYSxNQUFyQixFQUE2QjtFQUFBOztFQUFBOztFQUMzQix5RkFBTTBDLFNBQVMsQ0FBQ3dHLFdBQVYsQ0FBc0IvSixPQUF0QixFQUErQmEsTUFBL0IsQ0FBTjtFQUNBLFdBQUtiLE9BQUwsR0FBZUEsT0FBZjtFQUNBLFdBQUthLE1BQUwsR0FBY0EsTUFBZDtFQUgyQjtFQUk1Qjs7RUFMSDtFQUFBO0VBQUEsOEJBT2E7RUFDVCxXQUFLb0QsU0FBTCxHQUFpQlYsU0FBUyxDQUFDd0csV0FBVixDQUFzQixLQUFLL0osT0FBM0IsRUFBb0MsS0FBS2EsTUFBekMsQ0FBakI7RUFDRDtFQVRIOztFQUFBO0VBQUEsRUFBb0M2SSxnQkFBcEM7QUFZQSxNQUFhTSxZQUFiO0VBQUE7RUFBQTtFQUFBOztFQUNFLHdCQUFZdkosQ0FBWixFQUFld0osTUFBZixFQUF1QkMsSUFBdkIsRUFBNkI7RUFBQTs7RUFBQTs7RUFDM0I7RUFDQSxXQUFLekosQ0FBTCxHQUFTQSxDQUFUO0VBQ0EsV0FBS3dKLE1BQUwsR0FBY0EsTUFBZDtFQUNBLFdBQUtDLElBQUwsR0FBWUEsSUFBWjtFQUoyQjtFQUs1Qjs7RUFOSDtFQUFBO0VBQUEsMEJBUVFsQyxLQVJSLEVBUWV2RSxJQVJmLEVBUXFCO0VBQ2pCLFVBQU1rRyxTQUFTLEdBQUczQixLQUFLLENBQUM0QixLQUFOLEVBQWxCO0VBRUFELE1BQUFBLFNBQVMsQ0FBQ2xKLENBQVYsR0FBYyxLQUFLQSxDQUFuQjs7RUFDQSxVQUFJLEtBQUt3SixNQUFMLEdBQWNOLFNBQVMsQ0FBQ2pKLENBQTVCLEVBQStCO0VBQzdCaUosUUFBQUEsU0FBUyxDQUFDakosQ0FBVixHQUFjLEtBQUt1SixNQUFuQjtFQUNEOztFQUNELFVBQUksS0FBS0MsSUFBTCxHQUFZUCxTQUFTLENBQUNqSixDQUFWLEdBQWMrQyxJQUFJLENBQUMvQyxDQUFuQyxFQUFzQztFQUNwQ2lKLFFBQUFBLFNBQVMsQ0FBQ2pKLENBQVYsR0FBYyxLQUFLd0osSUFBTCxHQUFZekcsSUFBSSxDQUFDL0MsQ0FBL0I7RUFDRDs7RUFFRCxhQUFPaUosU0FBUDtFQUNEO0VBcEJIOztFQUFBO0VBQUEsRUFBa0NILEtBQWxDO0FBdUJBLE1BQWFXLFlBQWI7RUFBQTtFQUFBO0VBQUE7O0VBQ0Usd0JBQVl6SixDQUFaLEVBQWUwSixNQUFmLEVBQXVCQyxJQUF2QixFQUE2QjtFQUFBOztFQUFBOztFQUMzQjtFQUNBLFdBQUszSixDQUFMLEdBQVNBLENBQVQ7RUFDQSxXQUFLMEosTUFBTCxHQUFjQSxNQUFkO0VBQ0EsV0FBS0MsSUFBTCxHQUFZQSxJQUFaO0VBSjJCO0VBSzVCOztFQU5IO0VBQUE7RUFBQSwwQkFRUXJDLEtBUlIsRUFRZXZFLElBUmYsRUFRcUI7RUFDakIsVUFBTWtHLFNBQVMsR0FBRzNCLEtBQUssQ0FBQzRCLEtBQU4sRUFBbEI7RUFDQUQsTUFBQUEsU0FBUyxDQUFDakosQ0FBVixHQUFjLEtBQUtBLENBQW5COztFQUNBLFVBQUksS0FBSzBKLE1BQUwsR0FBY1QsU0FBUyxDQUFDbEosQ0FBNUIsRUFBK0I7RUFDN0JrSixRQUFBQSxTQUFTLENBQUNsSixDQUFWLEdBQWMsS0FBSzJKLE1BQW5CO0VBQ0Q7O0VBQ0QsVUFBSSxLQUFLQyxJQUFMLEdBQVlWLFNBQVMsQ0FBQ2xKLENBQVYsR0FBY2dELElBQUksQ0FBQ2hELENBQW5DLEVBQXNDO0VBQ3BDa0osUUFBQUEsU0FBUyxDQUFDbEosQ0FBVixHQUFjLEtBQUs0SixJQUFMLEdBQVk1RyxJQUFJLENBQUNoRCxDQUEvQjtFQUNEOztFQUNELGFBQU9rSixTQUFQO0VBQ0Q7RUFsQkg7O0VBQUE7RUFBQSxFQUFrQ0gsS0FBbEM7QUFxQkEsTUFBYWMsV0FBYjtFQUFBO0VBQUE7RUFBQTs7RUFDRSx1QkFBWUMsVUFBWixFQUF3QkMsUUFBeEIsRUFBa0M7RUFBQTs7RUFBQTs7RUFDaEM7RUFDQSxXQUFLRCxVQUFMLEdBQWtCQSxVQUFsQjtFQUNBLFdBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCO0VBQ0EsUUFBTWxDLEtBQUssR0FBR3pFLElBQUksQ0FBQ2lGLEtBQUwsQ0FBVzBCLFFBQVEsQ0FBQzlKLENBQVQsR0FBYTZKLFVBQVUsQ0FBQzdKLENBQW5DLEVBQXNDOEosUUFBUSxDQUFDL0osQ0FBVCxHQUFhOEosVUFBVSxDQUFDOUosQ0FBOUQsQ0FBZDtFQUNBLFFBQU04SCxJQUFJLEdBQUdELEtBQUssR0FBR3pFLElBQUksQ0FBQzZFLEVBQUwsR0FBVSxDQUEvQjtFQUNBLFdBQUsrQixLQUFMLEdBQWEsRUFBYjtFQUNBLFdBQUtDLE9BQUwsR0FBZTdHLElBQUksQ0FBQ3lGLEdBQUwsQ0FBU2YsSUFBVCxDQUFmO0VBQ0EsV0FBS29DLE9BQUwsR0FBZTlHLElBQUksQ0FBQzBGLEdBQUwsQ0FBU2hCLElBQVQsQ0FBZjtFQVJnQztFQVNqQzs7RUFWSDtFQUFBO0VBQUEsMEJBWVFQLEtBWlIsRUFZZXZFLElBWmYsRUFZcUI7RUFDakIsVUFBTW1ILE1BQU0sR0FBRyxJQUFJcEssS0FBSixDQUNid0gsS0FBSyxDQUFDdkgsQ0FBTixHQUFVLEtBQUtnSyxLQUFMLEdBQWEsS0FBS0MsT0FEZixFQUViMUMsS0FBSyxDQUFDdEgsQ0FBTixHQUFVLEtBQUsrSixLQUFMLEdBQWEsS0FBS0UsT0FGZixDQUFmO0VBS0EsVUFBTUUsV0FBVyxHQUFHcEQsc0JBQXNCLENBQUMsS0FBSytDLFFBQU4sRUFBZ0IsS0FBS0QsVUFBckIsRUFBaUM5RyxJQUFJLENBQUNoRCxDQUF0QyxDQUExQztFQUNBLFVBQU1xSyxhQUFhLEdBQUd2RSxjQUFjLENBQUMsS0FBS2dFLFVBQU4sRUFBa0IsS0FBS0MsUUFBdkIsRUFBaUN4QyxLQUFqQyxFQUF3QzRDLE1BQXhDLENBQXBDO0VBRUEsYUFBTzVELFdBQVcsQ0FBQyxLQUFLdUQsVUFBTixFQUFrQk0sV0FBbEIsRUFBK0JDLGFBQS9CLENBQWxCO0VBQ0Q7RUF0Qkg7O0VBQUE7RUFBQSxFQUFpQ3RCLEtBQWpDO0FBeUJBLE1BQWF1QixhQUFiO0VBQUE7RUFBQTtFQUFBOztFQUNFLHlCQUFZMUIsTUFBWixFQUFvQm5ELE1BQXBCLEVBQTRCO0VBQUE7O0VBQUE7O0VBQzFCO0VBQ0EsV0FBS21ELE1BQUwsR0FBY0EsTUFBZDtFQUNBLFdBQUtuRCxNQUFMLEdBQWNBLE1BQWQ7RUFIMEI7RUFJM0I7O0VBTEg7RUFBQTtFQUFBLDBCQU9ROEIsS0FQUixFQU9leUIsS0FQZixFQU9zQjtFQUNsQixhQUFPaEMsc0JBQXNCLENBQUMsS0FBSzRCLE1BQU4sRUFBY3JCLEtBQWQsRUFBcUIsS0FBSzlCLE1BQTFCLENBQTdCO0VBQ0Q7RUFUSDs7RUFBQTtFQUFBLEVBQW1Dc0QsS0FBbkM7QUFZQSxNQUFhd0IsVUFBYjtFQUFBO0VBQUE7RUFBQTs7RUFDRSxzQkFBWTNCLE1BQVosRUFBb0JuRCxNQUFwQixFQUE0QitFLFVBQTVCLEVBQXdDQyxRQUF4QyxFQUFrRDtFQUFBOztFQUFBOztFQUNoRCxxRkFBTTdCLE1BQU4sRUFBY25ELE1BQWQ7RUFDQSxXQUFLaUYsV0FBTCxHQUFtQkYsVUFBbkI7RUFDQSxXQUFLRyxTQUFMLEdBQWlCRixRQUFqQjtFQUhnRDtFQUlqRDs7RUFMSDtFQUFBO0VBQUEsaUNBT2U7RUFDWCxhQUFPLE9BQU8sS0FBS0MsV0FBWixLQUE0QixVQUE1QixHQUF5QyxLQUFLQSxXQUFMLEVBQXpDLEdBQThELEtBQUtBLFdBQTFFO0VBQ0Q7RUFUSDtFQUFBO0VBQUEsK0JBV2E7RUFDVCxhQUFPLE9BQU8sS0FBS0MsU0FBWixLQUEwQixVQUExQixHQUF1QyxLQUFLQSxTQUFMLEVBQXZDLEdBQTBELEtBQUtBLFNBQXRFO0VBQ0Q7RUFiSDtFQUFBO0VBQUEsMEJBZVFwRCxLQWZSLEVBZWV5QixLQWZmLEVBZXNCO0VBQ2xCLFVBQUlULEtBQUssR0FBR0wsUUFBUSxDQUFDLEtBQUtVLE1BQU4sRUFBY3JCLEtBQWQsQ0FBcEI7RUFDQWdCLE1BQUFBLEtBQUssR0FBR0gsY0FBYyxDQUFDRyxLQUFELENBQXRCO0VBQ0FBLE1BQUFBLEtBQUssR0FBR0MsVUFBVSxDQUFDLEtBQUtnQyxVQUFMLEVBQUQsRUFBb0IsS0FBS0MsUUFBTCxFQUFwQixFQUFxQ2xDLEtBQXJDLENBQWxCO0VBQ0EsYUFBT0ksd0JBQXdCLENBQUNKLEtBQUQsRUFBUSxLQUFLOUMsTUFBYixFQUFxQixLQUFLbUQsTUFBMUIsQ0FBL0I7RUFDRDtFQXBCSDs7RUFBQTtFQUFBLEVBQWdDMEIsYUFBaEM7O0VDakplLHFCQUFTTSxLQUFULEVBQWdCcEYsR0FBaEIsRUFBcUI7RUFDbEMsT0FBSyxJQUFJRyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHaUYsS0FBSyxDQUFDL0UsTUFBMUIsRUFBa0NGLENBQUMsRUFBbkMsRUFBdUM7RUFDckMsUUFBSWlGLEtBQUssQ0FBQ2pGLENBQUQsQ0FBTCxLQUFhSCxHQUFqQixFQUFzQjtFQUNwQm9GLE1BQUFBLEtBQUssQ0FBQy9ILE1BQU4sQ0FBYThDLENBQWIsRUFBZ0IsQ0FBaEI7RUFDQUEsTUFBQUEsQ0FBQztFQUNGO0VBQ0Y7O0VBQ0QsU0FBT2lGLEtBQVA7RUFDRDs7RUNSYyxTQUFTQyxLQUFULENBQWVDLEtBQWYsRUFBc0JDLElBQXRCLEVBQTRCQyxJQUE1QixFQUFrQztFQUMvQyxNQUFNdkQsTUFBTSxHQUFHLEVBQWY7O0VBQ0EsTUFBSSxPQUFPc0QsSUFBUCxLQUFnQixXQUFwQixFQUFpQztFQUMvQkEsSUFBQUEsSUFBSSxHQUFHRCxLQUFQO0VBQ0FBLElBQUFBLEtBQUssR0FBRyxDQUFSO0VBQ0Q7O0VBQ0QsTUFBSSxPQUFPRSxJQUFQLEtBQWdCLFdBQXBCLEVBQWlDO0VBQy9CQSxJQUFBQSxJQUFJLEdBQUcsQ0FBUDtFQUNEOztFQUNELE1BQUtBLElBQUksR0FBRyxDQUFQLElBQVlGLEtBQUssSUFBSUMsSUFBdEIsSUFBZ0NDLElBQUksR0FBRyxDQUFQLElBQVlGLEtBQUssSUFBSUMsSUFBekQsRUFBZ0U7RUFDOUQsV0FBTyxFQUFQO0VBQ0Q7O0VBQ0QsT0FBSyxJQUFJcEYsQ0FBQyxHQUFHbUYsS0FBYixFQUFvQkUsSUFBSSxHQUFHLENBQVAsR0FBV3JGLENBQUMsR0FBR29GLElBQWYsR0FBc0JwRixDQUFDLEdBQUdvRixJQUE5QyxFQUFvRHBGLENBQUMsSUFBSXFGLElBQXpELEVBQStEO0VBQzdEdkQsSUFBQUEsTUFBTSxDQUFDaEYsSUFBUCxDQUFZa0QsQ0FBWjtFQUNEOztFQUNELFNBQU84QixNQUFQO0VBQ0Q7O01DUkt3RDs7O0VBQ0oseUJBQVl6SCxTQUFaLEVBQW1DO0VBQUEsUUFBWjdCLE9BQVksdUVBQUosRUFBSTs7RUFBQTs7RUFDakMsU0FBSzZCLFNBQUwsR0FBaUJBLFNBQWpCO0VBQ0EsU0FBSzdCLE9BQUwsR0FBZUEsT0FBZjtFQUNEOzs7OzBCQUVnQjtFQUNmLGFBQU8sT0FBTyxLQUFLNkIsU0FBWixLQUEwQixVQUExQixHQUF1QyxLQUFLQSxTQUFMLEVBQXZDLEdBQTBELEtBQUtBLFNBQXRFO0VBQ0Q7Ozs7OztNQUdHMEg7Ozs7Ozs7Ozs7Ozs7a0NBQ1NDLGVBQWVDLGVBQWU7RUFBQTs7RUFDekMsVUFBTUMsc0JBQXNCLEdBQUdGLGFBQWEsQ0FBQzFMLE1BQWQsQ0FBcUIsVUFBQzZMLE9BQUQsRUFBVUMsS0FBVixFQUFpQjVJLEtBQWpCLEVBQTJCO0VBQzdFLFlBQUl5SSxhQUFhLENBQUN4SSxPQUFkLENBQXNCRCxLQUF0QixNQUFpQyxDQUFDLENBQXRDLEVBQXlDO0VBQ3ZDMkksVUFBQUEsT0FBTyxDQUFDN0ksSUFBUixDQUFhRSxLQUFiO0VBQ0Q7O0VBQ0QsZUFBTzJJLE9BQVA7RUFDRCxPQUw4QixFQUs1QixFQUw0QixDQUEvQjtFQU9BRixNQUFBQSxhQUFhLENBQUNJLE9BQWQsQ0FBc0IsVUFBQzdJLEtBQUQsRUFBVztFQUMvQixZQUFJUSxJQUFJLEdBQUdnSSxhQUFhLENBQUN4SSxLQUFELENBQXhCO0VBQ0EsWUFBSThJLFNBQVMsR0FBRyxLQUFoQjtFQUVBSixRQUFBQSxzQkFBc0IsQ0FBQ0csT0FBdkIsQ0FBK0IsVUFBQ0UsYUFBRCxFQUFtQjtFQUNoRCxjQUFNQyxVQUFVLEdBQUdSLGFBQWEsQ0FBQ08sYUFBRCxDQUFoQztFQUNBdkksVUFBQUEsSUFBSSxHQUFHd0ksVUFBVSxDQUFDQyxXQUFYLENBQXVCekksSUFBdkIsQ0FBUDtFQUNELFNBSEQ7RUFLQXNJLFFBQUFBLFNBQVMsR0FBR0osc0JBQXNCLENBQUNRLElBQXZCLENBQTRCLFVBQUNILGFBQUQsRUFBbUI7RUFDekQsY0FBTUMsVUFBVSxHQUFHUixhQUFhLENBQUNPLGFBQUQsQ0FBaEM7RUFDQSxpQkFBUSxDQUFDLENBQUNDLFVBQVUsQ0FBQzdILEdBQVgsQ0FBZVgsSUFBZixDQUFWO0VBQ0QsU0FIVyxLQUdOQSxJQUFJLENBQUNXLEdBQUwsQ0FBUyxLQUFJLENBQUNnSSxTQUFkLEVBQXlCQyxTQUF6QixPQUF5QzVJLElBQUksQ0FBQzRJLFNBQUwsRUFIL0M7O0VBS0EsWUFBSU4sU0FBSixFQUFlO0VBQ2J0SSxVQUFBQSxJQUFJLENBQUNzSSxTQUFMLEdBQWlCLElBQWpCO0VBQ0QsU0FGRCxNQUVPO0VBQ0xKLFVBQUFBLHNCQUFzQixDQUFDNUksSUFBdkIsQ0FBNEJFLEtBQTVCO0VBQ0Q7RUFDRixPQW5CRDtFQW9CQSxhQUFPd0ksYUFBUDtFQUNEOzs7OEJBRU9hLG1CQUFtQkMsZUFBZUMsYUFBYTtFQUNyRCxVQUFNQyxVQUFVLEdBQUdILGlCQUFpQixDQUFDSSxNQUFsQixDQUF5QkgsYUFBekIsQ0FBbkI7RUFDQUEsTUFBQUEsYUFBYSxDQUFDVCxPQUFkLENBQXNCLFVBQUNhLFNBQUQsRUFBZTtFQUNuQ0gsUUFBQUEsV0FBVyxDQUFDekosSUFBWixDQUFpQjBKLFVBQVUsQ0FBQ3ZKLE9BQVgsQ0FBbUJ5SixTQUFuQixDQUFqQjtFQUNELE9BRkQ7RUFHQSxhQUFPRixVQUFQO0VBQ0Q7Ozs7SUF0QytCbEI7O01BeUM1QnFCOzs7OztFQUNKLDZCQUFZOUksU0FBWixFQUFtQztFQUFBOztFQUFBLFFBQVo3QixPQUFZLHVFQUFKLEVBQUk7O0VBQUE7O0VBQ2pDLDRGQUFNNkIsU0FBTixFQUFpQjdCLE9BQWpCO0VBQ0EsV0FBS0EsT0FBTCxHQUFlRyxNQUFNLENBQUN5SyxNQUFQLENBQWM7RUFDM0JkLE1BQUFBLFNBQVMsRUFBRTtFQURnQixLQUFkLEVBRVo5SixPQUZZLENBQWY7RUFJQSxXQUFLOEQsTUFBTCxHQUFjOUQsT0FBTyxDQUFDOEQsTUFBUixJQUFrQixFQUFoQztFQUVBLFdBQUsrRyxjQUFMLEdBQXNCN0ssT0FBTyxDQUFDNkssY0FBUixJQUEwQixJQUFJek0sS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLENBQWhEO0VBQ0EsV0FBSzBNLGtCQUFMLEdBQTBCOUssT0FBTyxDQUFDOEssa0JBQVIsSUFBOEIsSUFBSTFNLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixDQUF4RDtFQUNBLFdBQUsyTSxxQkFBTCxHQUE2Qi9LLE9BQU8sQ0FBQytLLHFCQUFSLElBQWlDLENBQTlEO0VBRUEsV0FBSy9ILFdBQUwsR0FBbUJoRCxPQUFPLENBQUNnRCxXQUFSLElBQXVCQSxXQUExQzs7RUFDQSxXQUFLZ0ksV0FBTCxHQUFtQmhMLE9BQU8sQ0FBQ2dMLFdBQVIsSUFBd0IsVUFBQ04sU0FBRDtFQUFBLGFBQWVBLFNBQVMsQ0FBQ3RKLFFBQXpCO0VBQUEsS0FBM0M7O0VBYmlDO0VBY2xDOzs7O2tDQUVXb0ksZUFBZXlCLGdCQUFnQjtFQUFBOztFQUN6QyxVQUFNZCxTQUFTLEdBQUcsS0FBS0EsU0FBdkI7RUFDQSxVQUFNMUMsTUFBTSxHQUFHMEMsU0FBUyxDQUFDZSxLQUFWLEVBQWY7RUFDQSxVQUFJQyxjQUFjLEdBQUcsQ0FBQ2hCLFNBQVMsQ0FBQy9JLFFBQVgsQ0FBckI7RUFFQW9JLE1BQUFBLGFBQWEsQ0FBQ0ssT0FBZCxDQUFzQixVQUFDckksSUFBRCxFQUFPNEosU0FBUCxFQUFxQjtFQUN6QyxZQUFJaEssUUFBSjtFQUFBLFlBQWNpSyxPQUFPLEdBQUcsS0FBeEI7O0VBQ0EsYUFBSyxJQUFJckgsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR21ILGNBQWMsQ0FBQ2pILE1BQW5DLEVBQTJDRixDQUFDLEVBQTVDLEVBQWdEO0VBQzlDNUMsVUFBQUEsUUFBUSxHQUFHLElBQUloRCxLQUFKLENBQ1QrTSxjQUFjLENBQUNuSCxDQUFELENBQWQsQ0FBa0IzRixDQUFsQixHQUFzQixNQUFJLENBQUN3TSxjQUFMLENBQW9CeE0sQ0FEakMsRUFFVDJGLENBQUMsR0FBRyxDQUFKLEdBQVNtSCxjQUFjLENBQUNuSCxDQUFDLEdBQUcsQ0FBTCxDQUFkLENBQXNCMUYsQ0FBdEIsR0FBMEIsTUFBSSxDQUFDeU0scUJBQXhDLEdBQWtFWixTQUFTLENBQUMvSSxRQUFWLENBQW1COUMsQ0FBbkIsR0FBdUIsTUFBSSxDQUFDdU0sY0FBTCxDQUFvQnZNLENBRnBHLENBQVg7RUFLQStNLFVBQUFBLE9BQU8sR0FBSWpLLFFBQVEsQ0FBQy9DLENBQVQsR0FBYW1ELElBQUksQ0FBQ0gsSUFBTCxDQUFVaEQsQ0FBdkIsR0FBMkJvSixNQUFNLENBQUNwSixDQUE3Qzs7RUFFQSxjQUFJZ04sT0FBSixFQUFhO0VBQ1g7RUFDRDtFQUNGOztFQUVELFlBQUksQ0FBQ0EsT0FBTCxFQUFjO0VBQ1pqSyxVQUFBQSxRQUFRLEdBQUcsSUFBSWhELEtBQUosQ0FDVCtMLFNBQVMsQ0FBQy9JLFFBQVYsQ0FBbUIvQyxDQUFuQixHQUF1QixNQUFJLENBQUN3TSxjQUFMLENBQW9CeE0sQ0FEbEMsRUFFVDhNLGNBQWMsQ0FBQ0EsY0FBYyxDQUFDakgsTUFBZixHQUF3QixDQUF6QixDQUFkLENBQTBDNUYsQ0FBMUMsSUFBK0M4TSxTQUFTLEdBQUcsQ0FBWixHQUFnQixNQUFJLENBQUNMLHFCQUFyQixHQUE2QyxNQUFJLENBQUNGLGNBQUwsQ0FBb0J2TSxDQUFoSCxDQUZTLENBQVg7RUFJRDs7RUFFRGtELFFBQUFBLElBQUksQ0FBQ0osUUFBTCxHQUFnQkEsUUFBaEI7O0VBQ0EsWUFBSSxNQUFJLENBQUNwQixPQUFMLENBQWE4SixTQUFiLElBQTBCdEksSUFBSSxDQUFDTyxLQUFMLEdBQWF6RCxDQUFiLEdBQWlCNkwsU0FBUyxDQUFDcEksS0FBVixHQUFrQnpELENBQWpFLEVBQW9FO0VBQ2xFa0QsVUFBQUEsSUFBSSxDQUFDc0ksU0FBTCxHQUFpQixJQUFqQjtFQUNEOztFQUVEcUIsUUFBQUEsY0FBYyxHQUFHekYscUJBQXFCLENBQUN5RixjQUFELEVBQWlCM0osSUFBSSxDQUFDTyxLQUFMLEdBQWFULEdBQWIsQ0FBaUIsTUFBSSxDQUFDd0osa0JBQXRCLENBQWpCLENBQXRDO0VBQ0QsT0E1QkQ7RUE2QkEsYUFBT3RCLGFBQVA7RUFDRDs7OzhCQUVPYSxtQkFBbUJDLGVBQWVDLGFBQWE7RUFBQTs7RUFDckQsVUFBTWUsT0FBTyxHQUFHakIsaUJBQWlCLENBQUNJLE1BQWxCLEVBQWhCO0VBQ0EsVUFBTWMsZUFBZSxHQUFHbEIsaUJBQWlCLENBQUNtQixHQUFsQixDQUFzQixVQUFDZCxTQUFEO0VBQUEsZUFBZUEsU0FBUyxDQUFDTSxXQUFWLEVBQWY7RUFBQSxPQUF0QixDQUF4QjtFQUNBVixNQUFBQSxhQUFhLENBQUNULE9BQWQsQ0FBc0IsVUFBQzRCLFlBQUQsRUFBa0I7RUFDdEMsWUFBSXpLLEtBQUssR0FBRzJDLG1CQUFtQixDQUFDNEgsZUFBRCxFQUFrQixNQUFJLENBQUNQLFdBQUwsQ0FBaUJTLFlBQWpCLENBQWxCLEVBQWtELE1BQUksQ0FBQzNILE1BQXZELEVBQStELE1BQUksQ0FBQ2QsV0FBcEUsQ0FBL0I7O0VBQ0EsWUFBSWhDLEtBQUssS0FBSyxDQUFDLENBQWYsRUFBa0I7RUFDaEJBLFVBQUFBLEtBQUssR0FBR3NLLE9BQU8sQ0FBQ3BILE1BQWhCO0VBQ0QsU0FGRCxNQUVPO0VBQ0xsRCxVQUFBQSxLQUFLLEdBQUdzSyxPQUFPLENBQUNySyxPQUFSLENBQWdCb0osaUJBQWlCLENBQUNySixLQUFELENBQWpDLENBQVI7RUFDRDs7RUFDRHNLLFFBQUFBLE9BQU8sQ0FBQ3BLLE1BQVIsQ0FBZUYsS0FBZixFQUFzQixDQUF0QixFQUF5QnlLLFlBQXpCO0VBQ0QsT0FSRDtFQVNBbkIsTUFBQUEsYUFBYSxDQUFDVCxPQUFkLENBQXNCLFVBQUM0QixZQUFELEVBQWtCO0VBQ3RDbEIsUUFBQUEsV0FBVyxDQUFDekosSUFBWixDQUFpQndLLE9BQU8sQ0FBQ3JLLE9BQVIsQ0FBZ0J3SyxZQUFoQixDQUFqQjtFQUNELE9BRkQ7RUFHQSxhQUFPSCxPQUFQO0VBQ0Q7Ozs7SUF0RTZCaEM7O01BeUUxQm9DOzs7OztFQUNKLDhCQUFZN0osU0FBWixFQUFtQztFQUFBOztFQUFBLFFBQVo3QixPQUFZLHVFQUFKLEVBQUk7O0VBQUE7O0VBQ2pDLDZGQUFNNkIsU0FBTixFQUFpQjdCLE9BQWpCO0VBRUEsV0FBSzJMLGVBQUwsR0FBdUIzTCxPQUFPLENBQUMyTCxlQUFSLElBQTJCLElBQUl2TixLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsQ0FBbEQ7RUFDQSxXQUFLd04saUJBQUwsR0FBeUI1TCxPQUFPLENBQUM0TCxpQkFBUixJQUE2QixJQUFJeE4sS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLENBQXREO0VBQ0EsV0FBSzJNLHFCQUFMLEdBQTZCL0ssT0FBTyxDQUFDK0sscUJBQVIsSUFBaUMsQ0FBOUQ7RUFFQSxXQUFLYyxvQkFBTCxHQUE0QixJQUFJek4sS0FBSixDQUFVLENBQUMsT0FBS3dOLGlCQUFMLENBQXVCdk4sQ0FBbEMsRUFBcUMsT0FBS3VOLGlCQUFMLENBQXVCdE4sQ0FBNUQsQ0FBNUI7RUFQaUM7RUFRbEM7Ozs7a0NBRVdrTCxlQUFleUIsZ0JBQWdCO0VBQUE7O0VBQ3pDLFVBQU1kLFNBQVMsR0FBRyxLQUFLQSxTQUF2QjtFQUNBLFVBQUlnQixjQUFjLEdBQUcsQ0FBQ2hCLFNBQVMsQ0FBQ2UsS0FBVixFQUFELENBQXJCO0VBRUExQixNQUFBQSxhQUFhLENBQUNLLE9BQWQsQ0FBc0IsVUFBQ3JJLElBQUQsRUFBTzRKLFNBQVAsRUFBcUI7RUFDekMsWUFBSWhLLFFBQUo7RUFBQSxZQUFjaUssT0FBTyxHQUFHLEtBQXhCOztFQUNBLGFBQUssSUFBSXJILENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdtSCxjQUFjLENBQUNqSCxNQUFuQyxFQUEyQ0YsQ0FBQyxFQUE1QyxFQUFnRDtFQUM5QzVDLFVBQUFBLFFBQVEsR0FBRyxJQUFJaEQsS0FBSixDQUNUK00sY0FBYyxDQUFDbkgsQ0FBRCxDQUFkLENBQWtCM0YsQ0FBbEIsR0FBc0JtRCxJQUFJLENBQUNILElBQUwsQ0FBVWhELENBQWhDLEdBQW9DLE1BQUksQ0FBQ3NOLGVBQUwsQ0FBcUJ0TixDQURoRCxFQUVUMkYsQ0FBQyxHQUFHLENBQUosR0FBU21ILGNBQWMsQ0FBQ25ILENBQUMsR0FBRyxDQUFMLENBQWQsQ0FBc0IxRixDQUF0QixHQUEwQixNQUFJLENBQUN5TSxxQkFBeEMsR0FBa0VaLFNBQVMsQ0FBQy9JLFFBQVYsQ0FBbUI5QyxDQUFuQixHQUF1QixNQUFJLENBQUNxTixlQUFMLENBQXFCck4sQ0FGckcsQ0FBWDtFQUtBK00sVUFBQUEsT0FBTyxHQUFJakssUUFBUSxDQUFDL0MsQ0FBVCxHQUFhbUQsSUFBSSxDQUFDSixRQUFMLENBQWMvQyxDQUF0Qzs7RUFDQSxjQUFJZ04sT0FBSixFQUFhO0VBQ1g7RUFDRDtFQUNGOztFQUNELFlBQUksQ0FBQ0EsT0FBTCxFQUFjO0VBQ1pqSyxVQUFBQSxRQUFRLEdBQUcsSUFBSWhELEtBQUosQ0FDVCtMLFNBQVMsQ0FBQ2UsS0FBVixHQUFrQjdNLENBQWxCLEdBQXVCbUQsSUFBSSxDQUFDSCxJQUFMLENBQVVoRCxDQUFqQyxHQUFxQyxNQUFJLENBQUNzTixlQUFMLENBQXFCdE4sQ0FEakQsRUFFVDhNLGNBQWMsQ0FBQ0EsY0FBYyxDQUFDakgsTUFBZixHQUF3QixDQUF6QixDQUFkLENBQTBDNUYsQ0FBMUMsSUFBK0M4TSxTQUFTLEdBQUcsQ0FBWixHQUFnQixNQUFJLENBQUNMLHFCQUFyQixHQUE2QyxNQUFJLENBQUNZLGVBQUwsQ0FBcUJyTixDQUFqSCxDQUZTLENBQVg7RUFJRDs7RUFDRGtELFFBQUFBLElBQUksQ0FBQ0osUUFBTCxHQUFnQkEsUUFBaEI7O0VBQ0EsWUFBSSxNQUFJLENBQUNwQixPQUFMLENBQWE4SixTQUFiLElBQTBCdEksSUFBSSxDQUFDc0ssS0FBTCxHQUFheE4sQ0FBYixHQUFpQjZMLFNBQVMsQ0FBQzJCLEtBQVYsR0FBa0J4TixDQUFqRSxFQUFvRTtFQUNsRWtELFVBQUFBLElBQUksQ0FBQ3NJLFNBQUwsR0FBaUIsSUFBakI7RUFDRDs7RUFDRHFCLFFBQUFBLGNBQWMsR0FBR3pGLHFCQUFxQixDQUFDeUYsY0FBRCxFQUFpQjNKLElBQUksQ0FBQ3NLLEtBQUwsR0FBYXhLLEdBQWIsQ0FBaUIsTUFBSSxDQUFDdUssb0JBQXRCLENBQWpCLEVBQThELElBQTlELENBQXRDO0VBQ0QsT0F4QkQ7RUF5QkEsYUFBT3JDLGFBQVA7RUFDRDs7OztJQXpDOEJtQjs7RUMzSGpDLElBQU1vQixpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQVNDLE1BQVQsRUFBaUI7RUFDekNDLEVBQUFBLFlBQVksQ0FBQ0MsU0FBYixDQUF1QkYsTUFBdkI7RUFDRCxDQUZEOztNQUlxQkc7Ozs7O0VBQ25CLGtCQUFZdk8sT0FBWixFQUFxQjRNLFVBQXJCLEVBQStDO0VBQUE7O0VBQUEsUUFBZHhLLE9BQWMsdUVBQUosRUFBSTs7RUFBQTs7RUFDN0MsZ0ZBQU1vTSxTQUFOLEVBQWlCcE0sT0FBakI7O0VBQ0EsUUFBTWdNLE1BQU0sZ0NBQVo7O0VBQ0EsUUFBTXZOLE1BQU0sR0FBR3VCLE9BQU8sQ0FBQ3ZCLE1BQVIsSUFBa0JtQixnQkFBZ0IsQ0FBQ2hDLE9BQUQsQ0FBakQ7RUFFQSxVQUFLb0MsT0FBTCxHQUFlRyxNQUFNLENBQUN5SyxNQUFQLENBQWM7RUFDM0J5QixNQUFBQSxPQUFPLEVBQUUsR0FEa0I7RUFFM0JDLE1BQUFBLFdBQVcsRUFBRSxHQUZjO0VBRzNCN04sTUFBQUEsTUFBTSxFQUFFQTtFQUhtQixLQUFkLEVBSVp1QixPQUpZLENBQWY7RUFNQSxVQUFLdU0sbUJBQUwsR0FBMkJ2TSxPQUFPLENBQUN3TSxRQUFSLElBQW9CLElBQUk3QixpQkFBSixDQUM3QyxNQUFLOEIsWUFBTCxDQUFrQkMsSUFBbEIsK0JBRDZDLEVBRTdDO0VBQ0U1SSxNQUFBQSxNQUFNLEVBQUUsRUFEVjtFQUVFZCxNQUFBQSxXQUFXLEVBQUVTLCtCQUErQixDQUFDO0VBQUVwRixRQUFBQSxDQUFDLEVBQUUsQ0FBTDtFQUFRQyxRQUFBQSxDQUFDLEVBQUU7RUFBWCxPQUFELENBRjlDO0VBR0V3TCxNQUFBQSxTQUFTLEVBQUU7RUFIYixLQUY2QyxDQUEvQztFQVNBLFVBQUtsTSxPQUFMLEdBQWVBLE9BQWY7RUFDQTRNLElBQUFBLFVBQVUsQ0FBQ1gsT0FBWCxDQUFtQixVQUFDYSxTQUFEO0VBQUEsYUFBZUEsU0FBUyxDQUFDaUMsT0FBVixDQUFrQjdMLElBQWxCLENBQXVCa0wsTUFBdkIsQ0FBZjtFQUFBLEtBQW5CO0VBQ0EsVUFBS3hCLFVBQUwsR0FBa0JBLFVBQWxCO0VBRUEyQixJQUFBQSxNQUFNLENBQUNTLE9BQVAsQ0FBZUMsSUFBZixDQUFvQixlQUFwQjs7RUFFQSxVQUFLQyxJQUFMOztFQTFCNkM7RUEyQjlDOzs7O2tDQUVZdEMsWUFBWXVDLGNBQWM7RUFDckMsYUFBTyxLQUFLUixtQkFBTCxDQUF5QlMsV0FBekIsQ0FBcUN4QyxVQUFyQyxFQUFpRHVDLFlBQWpELENBQVA7RUFDRDs7OzhCQUVRRSxlQUFlM0MsZUFBZUMsYUFBYTtFQUNsRCxhQUFPLEtBQUtnQyxtQkFBTCxDQUF5QlcsT0FBekIsQ0FBaUNELGFBQWpDLEVBQWdEM0MsYUFBaEQsRUFBK0RDLFdBQS9ELENBQVA7RUFDRDs7OzZCQUVNO0VBQUE7O0VBQ0wsVUFBSTRDLFVBQUosRUFBZ0JKLFlBQWhCO0VBRUEsV0FBS0ssZUFBTCxHQUF1QixLQUFLNUMsVUFBTCxDQUFnQnpFLE1BQWhCLENBQXVCLFVBQUMyRSxTQUFELEVBQWU7RUFDM0QsWUFBSTlNLE9BQU8sR0FBRzhNLFNBQVMsQ0FBQzlNLE9BQVYsQ0FBa0JjLFVBQWhDOztFQUNBLGVBQU9kLE9BQVAsRUFBZ0I7RUFDZCxjQUFJQSxPQUFPLEtBQUssTUFBSSxDQUFDQSxPQUFyQixFQUE4QjtFQUM1QixtQkFBTyxJQUFQO0VBQ0Q7O0VBQ0RBLFVBQUFBLE9BQU8sR0FBR0EsT0FBTyxDQUFDYyxVQUFsQjtFQUNEOztFQUNELGVBQU8sS0FBUDtFQUNELE9BVHNCLENBQXZCOztFQVdBLFVBQUksS0FBSzBPLGVBQUwsQ0FBcUJsSixNQUF6QixFQUFpQztFQUMvQjZJLFFBQUFBLFlBQVksR0FBRzdELEtBQUssQ0FBQyxLQUFLa0UsZUFBTCxDQUFxQmxKLE1BQXRCLENBQXBCO0VBQ0FpSixRQUFBQSxVQUFVLEdBQUcsS0FBS0gsV0FBTCxDQUFpQixLQUFLSSxlQUFMLENBQXFCNUIsR0FBckIsQ0FBeUIsVUFBQ2QsU0FBRCxFQUFlO0VBQ3BFLGlCQUFPQSxTQUFTLENBQUMrQixZQUFWLEVBQVA7RUFDRCxTQUY2QixDQUFqQixFQUVUTSxZQUZTLENBQWI7RUFHQSxhQUFLTSxXQUFMLENBQWlCRixVQUFqQixFQUE2QkosWUFBN0I7RUFDQSxhQUFLSyxlQUFMLENBQXFCdkQsT0FBckIsQ0FBNkIsVUFBQ2EsU0FBRDtFQUFBLGlCQUFlLE1BQUksQ0FBQ21DLElBQUwsQ0FBVSxZQUFWLEVBQXdCbkMsU0FBeEIsQ0FBZjtFQUFBLFNBQTdCO0VBQ0Q7RUFDRjs7O3FDQUVjO0VBQ2IsYUFBT3ZKLFNBQVMsQ0FBQ3dHLFdBQVYsQ0FDTCxLQUFLL0osT0FEQSxFQUVMLEtBQUtvQyxPQUFMLENBQWF2QixNQUZSLEVBR0wsS0FBS3VCLE9BQUwsQ0FBYWhCLGdCQUhSLEVBSUwsSUFKSyxDQUFQO0VBTUQ7OztxQ0FFYzBMLFdBQVc7RUFDeEIsVUFBSSxLQUFLMUssT0FBTCxDQUFhc04sY0FBakIsRUFBaUM7RUFDL0IsZUFBTyxLQUFLdE4sT0FBTCxDQUFhc04sY0FBYixDQUE0QixJQUE1QixFQUFrQzVDLFNBQWxDLENBQVA7RUFDRCxPQUZELE1BRU87RUFDTCxZQUFNNkMsZUFBZSxHQUFHLEtBQUtkLFlBQUwsRUFBeEI7RUFDQSxZQUFNZSxlQUFlLEdBQUc5QyxTQUFTLENBQUMrQixZQUFWLEdBQXlCckMsU0FBekIsRUFBeEI7RUFFQSxlQUFPb0QsZUFBZSxHQUFHRCxlQUFlLENBQUNuRCxTQUFoQixFQUFsQixJQUNJbUQsZUFBZSxDQUFDekwsWUFBaEIsQ0FBNkI0SSxTQUFTLENBQUNySSxTQUFWLEVBQTdCLENBRFg7RUFFRDtFQUNGOzs7b0NBRWE7RUFDWixhQUFPLEtBQUtvSyxZQUFMLEdBQW9CckwsUUFBM0I7RUFDRDs7O2dDQUVTO0VBQ1IsYUFBTyxLQUFLcUwsWUFBTCxHQUFvQnBMLElBQTNCO0VBQ0Q7OztnQ0FFUztFQUFBOztFQUNSb00sTUFBQUEsTUFBTSxDQUFDNUQsT0FBUCxDQUFlLFVBQUM2RCxLQUFEO0VBQUEsZUFBV0MsVUFBVSxDQUFDRCxLQUFLLENBQUNmLE9BQVAsRUFBZ0IsTUFBaEIsQ0FBckI7RUFBQSxPQUFmO0VBQ0Q7OztnQ0FFUztFQUNSLFVBQU1RLFVBQVUsR0FBRyxLQUFLSCxXQUFMLENBQWlCLEtBQUtJLGVBQUwsQ0FBcUI1QixHQUFyQixDQUF5QixVQUFDZCxTQUFELEVBQWU7RUFDMUUsZUFBT0EsU0FBUyxDQUFDK0IsWUFBVixFQUFQO0VBQ0QsT0FGbUMsQ0FBakIsRUFFZixFQUZlLENBQW5CO0VBR0EsV0FBS1ksV0FBTCxDQUFpQkYsVUFBakIsRUFBNkIsRUFBN0IsRUFBaUMsQ0FBakM7RUFDRDs7OzRCQUVLekMsV0FBVztFQUNmLFVBQU1rRCxrQkFBa0IsR0FBRyxFQUEzQjtFQUNBLFVBQU05TCxZQUFZLEdBQUcsS0FBSzJLLFlBQUwsR0FBb0IzSyxZQUFwQixDQUFpQzRJLFNBQVMsQ0FBQ00sV0FBVixFQUFqQyxDQUFyQjs7RUFFQSxVQUFJLENBQUNsSixZQUFMLEVBQW1CO0VBQ2pCLFlBQUksS0FBSzJLLFlBQUwsR0FBb0IzSyxZQUFwQixDQUFpQzRJLFNBQVMsQ0FBQ3JJLFNBQVYsRUFBakMsQ0FBSixFQUE2RDtFQUMzRHFJLFVBQUFBLFNBQVMsQ0FBQ3RKLFFBQVYsR0FBcUJzSixTQUFTLENBQUNySSxTQUFWLEdBQXNCbUYsS0FBdEIsRUFBckI7RUFDRCxTQUZELE1BRU87RUFDTCxpQkFBTyxLQUFQO0VBQ0Q7RUFDRjs7RUFFRCxXQUFLcUYsSUFBTCxDQUFVLGtCQUFWLEVBQThCbkMsU0FBOUI7RUFFQSxXQUFLMEMsZUFBTCxHQUF1QixLQUFLRixPQUFMLENBQWEsS0FBS0UsZUFBbEIsRUFBbUMsQ0FBQzFDLFNBQUQsQ0FBbkMsRUFBZ0RrRCxrQkFBaEQsQ0FBdkI7RUFDQSxVQUFNVCxVQUFVLEdBQUcsS0FBS0gsV0FBTCxDQUFpQixLQUFLSSxlQUFMLENBQXFCNUIsR0FBckIsQ0FBeUIsVUFBQ2QsU0FBRCxFQUFlO0VBQzFFLGVBQU9BLFNBQVMsQ0FBQytCLFlBQVYsRUFBUDtFQUNELE9BRm1DLENBQWpCLEVBRWZtQixrQkFGZSxDQUFuQjtFQUlBLFdBQUtQLFdBQUwsQ0FBaUJGLFVBQWpCLEVBQTZCUyxrQkFBN0I7O0VBQ0EsVUFBSSxLQUFLUixlQUFMLENBQXFCbk0sT0FBckIsQ0FBNkJ5SixTQUE3QixNQUE0QyxDQUFDLENBQWpELEVBQW9EO0VBQ2xELGFBQUttRCxlQUFMLENBQXFCbkQsU0FBckI7RUFDRDs7RUFDRCxhQUFPLElBQVA7RUFDRDs7O2tDQUVXeUMsWUFBWUosY0FBY2UsTUFBTTtFQUFBOztFQUMxQyxXQUFLVixlQUFMLENBQXFCM00sS0FBckIsQ0FBMkIsQ0FBM0IsRUFBOEJvSixPQUE5QixDQUFzQyxVQUFDYSxTQUFELEVBQVkxRyxDQUFaLEVBQWtCO0VBQ3RELFlBQU14QyxJQUFJLEdBQUcyTCxVQUFVLENBQUNuSixDQUFELENBQXZCO0VBQUEsWUFDRXFJLE9BQU8sR0FBR3lCLElBQUksSUFBSUEsSUFBSSxLQUFLLENBQWpCLEdBQXFCQSxJQUFyQixHQUE0QmYsWUFBWSxDQUFDOUwsT0FBYixDQUFxQitDLENBQXJCLE1BQTRCLENBQUMsQ0FBN0IsR0FBaUMsTUFBSSxDQUFDaEUsT0FBTCxDQUFhcU0sT0FBOUMsR0FBd0QsTUFBSSxDQUFDck0sT0FBTCxDQUFhc00sV0FEN0c7O0VBR0EsWUFBSTlLLElBQUksQ0FBQ3NJLFNBQVQsRUFBb0I7RUFDbEJZLFVBQUFBLFNBQVMsQ0FBQ3FELElBQVYsQ0FBZXJELFNBQVMsQ0FBQ3NELGVBQXpCLEVBQTBDM0IsT0FBMUMsRUFBbUQsSUFBbkQsRUFBeUQsSUFBekQ7RUFDQXNCLFVBQUFBLFVBQVUsQ0FBQyxNQUFJLENBQUNQLGVBQU4sRUFBdUIxQyxTQUF2QixDQUFWOztFQUNBLFVBQUEsTUFBSSxDQUFDbUMsSUFBTCxDQUFVLGVBQVYsRUFBMkJuQyxTQUEzQjtFQUNELFNBSkQsTUFJTztFQUNMQSxVQUFBQSxTQUFTLENBQUNxRCxJQUFWLENBQWV2TSxJQUFJLENBQUNKLFFBQXBCLEVBQThCaUwsT0FBOUIsRUFBdUMsSUFBdkMsRUFBNkMsSUFBN0M7RUFDRDtFQUNGLE9BWEQ7RUFZRDs7OzBCQUVHM0IsV0FBV29ELE1BQU07RUFDbkIsVUFBTUYsa0JBQWtCLEdBQUcsS0FBS1IsZUFBTCxDQUFxQmxKLE1BQWhEO0VBRUEsV0FBSzJJLElBQUwsQ0FBVSxrQkFBVixFQUE4Qm5DLFNBQTlCO0VBRUEsV0FBS3VELGtCQUFMLENBQXdCdkQsU0FBeEI7RUFDQSxVQUFNeUMsVUFBVSxHQUFHLEtBQUtILFdBQUwsQ0FBaUIsS0FBS0ksZUFBTCxDQUFxQjVCLEdBQXJCLENBQXlCLFVBQUNkLFNBQUQsRUFBZTtFQUMxRSxlQUFPQSxTQUFTLENBQUMrQixZQUFWLEVBQVA7RUFDRCxPQUZtQyxDQUFqQixFQUVmbUIsa0JBRmUsRUFFS2xELFNBRkwsQ0FBbkI7RUFJQSxXQUFLMkMsV0FBTCxDQUFpQkYsVUFBakIsRUFBNkIsQ0FBQ1Msa0JBQUQsQ0FBN0IsRUFBbURFLElBQUksSUFBSSxDQUEzRDs7RUFDQSxVQUFJLEtBQUtWLGVBQUwsQ0FBcUJuTSxPQUFyQixDQUE2QnlKLFNBQTdCLE1BQTRDLENBQUMsQ0FBakQsRUFBb0Q7RUFDbEQsYUFBS21ELGVBQUwsQ0FBcUJuRCxTQUFyQjtFQUNEO0VBQ0Y7Ozt5Q0FFa0JBLFdBQVc7RUFDNUIsVUFBSSxLQUFLMEMsZUFBTCxDQUFxQm5NLE9BQXJCLENBQTZCeUosU0FBN0IsTUFBMEMsQ0FBQyxDQUEvQyxFQUFrRDtFQUNoRCxhQUFLMEMsZUFBTCxDQUFxQnRNLElBQXJCLENBQTBCNEosU0FBMUI7RUFDRDtFQUNGOzs7c0NBRWVBLFdBQVc7RUFBQTs7RUFDekJBLE1BQUFBLFNBQVMsQ0FBQ3hLLEVBQVYsQ0FBYSxXQUFiLEVBQTBCLEtBQUtnTyxhQUFMLEdBQXFCLFlBQU07RUFDbkQsUUFBQSxNQUFJLENBQUNDLE1BQUwsQ0FBWXpELFNBQVo7RUFDRCxPQUZEO0VBSUEsV0FBS21DLElBQUwsQ0FBVSxZQUFWLEVBQXdCbkMsU0FBeEI7RUFDRDs7OzZCQUVNQSxXQUFXO0VBQ2hCQSxNQUFBQSxTQUFTLENBQUMwRCxXQUFWLENBQXNCLFdBQXRCLEVBQW1DLEtBQUtGLGFBQXhDO0VBRUEsVUFBTWxOLEtBQUssR0FBRyxLQUFLb00sZUFBTCxDQUFxQm5NLE9BQXJCLENBQTZCeUosU0FBN0IsQ0FBZDs7RUFDQSxVQUFJMUosS0FBSyxLQUFLLENBQUMsQ0FBZixFQUFrQjtFQUNoQjtFQUNEOztFQUVELFdBQUtvTSxlQUFMLENBQXFCbE0sTUFBckIsQ0FBNEJGLEtBQTVCLEVBQW1DLENBQW5DO0VBRUEsVUFBTW1NLFVBQVUsR0FBRyxLQUFLSCxXQUFMLENBQWlCLEtBQUtJLGVBQUwsQ0FBcUI1QixHQUFyQixDQUF5QixVQUFDZCxTQUFELEVBQWU7RUFDMUUsZUFBT0EsU0FBUyxDQUFDK0IsWUFBVixFQUFQO0VBQ0QsT0FGbUMsQ0FBakIsRUFFZixFQUZlLENBQW5CO0VBSUEsV0FBS1ksV0FBTCxDQUFpQkYsVUFBakIsRUFBNkIsRUFBN0I7RUFDQSxXQUFLTixJQUFMLENBQVUsZUFBVixFQUEyQm5DLFNBQTNCO0VBQ0Q7Ozs4QkFFTztFQUFBOztFQUNOLFdBQUswQyxlQUFMLENBQXFCdkQsT0FBckIsQ0FBNkIsVUFBQ2EsU0FBRCxFQUFlO0VBQzFDQSxRQUFBQSxTQUFTLENBQUNxRCxJQUFWLENBQWVyRCxTQUFTLENBQUNzRCxlQUF6QixFQUEwQyxDQUExQyxFQUE2QyxJQUE3QyxFQUFtRCxJQUFuRDs7RUFDQSxRQUFBLE1BQUksQ0FBQ25CLElBQUwsQ0FBVSxlQUFWLEVBQTJCbkMsU0FBM0I7RUFDRCxPQUhEO0VBSUEsV0FBSzBDLGVBQUwsR0FBdUIsRUFBdkI7RUFDRDs7OzRDQUVxQjtFQUNwQixXQUFLQSxlQUFMLENBQXFCM00sS0FBckI7RUFDRDs7OztJQXpNaUNYO0VBNE1wQ3FNLE1BQU0sQ0FBQ1MsT0FBUCxHQUFpQixJQUFJOU0sWUFBSixDQUFpQnFNLE1BQWpCLENBQWpCO0VBQ0FBLE1BQU0sQ0FBQ1MsT0FBUCxDQUFlMU0sRUFBZixDQUFrQixlQUFsQixFQUFtQzZMLGlCQUFuQzs7TUN0Tk0wQixNQUFNLEdBQUcsRUFBZjs7TUFFTVk7Ozs7O0VBQ0osaUJBQVk3RCxVQUFaLEVBQXdCbUMsT0FBeEIsRUFBNkM7RUFBQTs7RUFBQSxRQUFaM00sT0FBWSx1RUFBSixFQUFJOztFQUFBOztFQUMzQywrRUFBTW9NLFNBQU4sRUFBaUJwTSxPQUFqQjtFQUNBeU4sSUFBQUEsTUFBTSxDQUFDNUQsT0FBUCxDQUFlLFVBQUM2RCxLQUFELEVBQVc7RUFDeEIsVUFBSWxELFVBQUosRUFBZ0I7RUFDZEEsUUFBQUEsVUFBVSxDQUFDWCxPQUFYLENBQW1CLFVBQUNhLFNBQUQsRUFBZTtFQUNoQ2lELFVBQUFBLFVBQVUsQ0FBQ0QsS0FBSyxDQUFDbEQsVUFBUCxFQUFtQkUsU0FBbkIsQ0FBVjtFQUNELFNBRkQ7RUFHRDs7RUFFRCxVQUFJaUMsT0FBSixFQUFhO0VBQ1hBLFFBQUFBLE9BQU8sQ0FBQzlDLE9BQVIsQ0FBZ0IsVUFBQ21DLE1BQUQsRUFBWTtFQUMxQjJCLFVBQUFBLFVBQVUsQ0FBQ0QsS0FBSyxDQUFDZixPQUFQLEVBQWdCWCxNQUFoQixDQUFWO0VBQ0QsU0FGRDtFQUdEO0VBQ0YsS0FaRDtFQWNBLFVBQUt4QixVQUFMLEdBQWtCQSxVQUFVLElBQUksRUFBaEM7RUFDQSxVQUFLbUMsT0FBTCxHQUFlQSxPQUFPLElBQUksRUFBMUI7RUFDQWMsSUFBQUEsTUFBTSxDQUFDM00sSUFBUDtFQUNBLFVBQUtkLE9BQUwsR0FBZTtFQUNicU0sTUFBQUEsT0FBTyxFQUFHck0sT0FBTyxDQUFDcU0sT0FBVCxJQUFxQjtFQURqQixLQUFmOztFQUlBLFVBQUtTLElBQUw7O0VBdkIyQztFQXdCNUM7Ozs7NkJBRU07RUFBQTs7RUFDTCxXQUFLdEMsVUFBTCxDQUFnQlgsT0FBaEIsQ0FBd0IsVUFBQ2EsU0FBRCxFQUFlO0VBQ3JDQSxRQUFBQSxTQUFTLENBQUM0RCxhQUFWLEdBQTBCO0VBQUEsaUJBQU0sTUFBSSxDQUFDQyxLQUFMLENBQVc3RCxTQUFYLENBQU47RUFBQSxTQUExQjtFQUNELE9BRkQ7RUFHRDs7O21DQUVZQSxXQUFXO0VBQUE7O0VBQ3RCLFdBQUtGLFVBQUwsQ0FBZ0IxSixJQUFoQixDQUFxQjRKLFNBQXJCOztFQUNBQSxNQUFBQSxTQUFTLENBQUM0RCxhQUFWLEdBQTBCO0VBQUEsZUFBTSxNQUFJLENBQUNDLEtBQUwsQ0FBVzdELFNBQVgsQ0FBTjtFQUFBLE9BQTFCO0VBQ0Q7OztnQ0FFU3NCLFFBQVE7RUFDaEIsV0FBS1csT0FBTCxDQUFhN0wsSUFBYixDQUFrQmtMLE1BQWxCO0VBQ0Q7Ozs0QkFFS3RCLFdBQVc7RUFDZixVQUFNOEQsV0FBVyxHQUFHLEtBQUs3QixPQUFMLENBQWE1RyxNQUFiLENBQW9CLFVBQUNpRyxNQUFELEVBQVk7RUFDbEQsZUFBT0EsTUFBTSxDQUFDeEIsVUFBUCxDQUFrQnZKLE9BQWxCLENBQTBCeUosU0FBMUIsTUFBeUMsQ0FBQyxDQUFqRDtFQUNELE9BRm1CLEVBRWpCM0UsTUFGaUIsQ0FFVixVQUFDaUcsTUFBRCxFQUFZO0VBQ3BCLGVBQU9BLE1BQU0sQ0FBQ3NCLGNBQVAsQ0FBc0I1QyxTQUF0QixDQUFQO0VBQ0QsT0FKbUIsRUFJakIrRCxJQUppQixDQUlaLFVBQUNDLENBQUQsRUFBSUMsQ0FBSixFQUFVO0VBQ2hCLGVBQU9ELENBQUMsQ0FBQ2pDLFlBQUYsR0FBaUJyQyxTQUFqQixLQUErQnVFLENBQUMsQ0FBQ2xDLFlBQUYsR0FBaUJyQyxTQUFqQixFQUF0QztFQUNELE9BTm1CLENBQXBCOztFQVFBLFVBQUlvRSxXQUFXLENBQUN0SyxNQUFoQixFQUF3QjtFQUN0QnNLLFFBQUFBLFdBQVcsQ0FBQyxDQUFELENBQVgsQ0FBZUQsS0FBZixDQUFxQjdELFNBQXJCO0VBQ0QsT0FGRCxNQUVPLElBQUlBLFNBQVMsQ0FBQ2lDLE9BQVYsQ0FBa0J6SSxNQUF0QixFQUE4QjtFQUNuQ3dHLFFBQUFBLFNBQVMsQ0FBQ2tFLFdBQVYsQ0FBc0JsRSxTQUFTLENBQUNzRCxlQUFoQyxFQUFpRCxLQUFLaE8sT0FBTCxDQUFhcU0sT0FBOUQ7RUFDRDs7RUFFRCxXQUFLUSxJQUFMLENBQVUsY0FBVjtFQUNEOzs7OEJBRU87RUFDTixXQUFLRixPQUFMLENBQWE5QyxPQUFiLENBQXFCLFVBQUNtQyxNQUFEO0VBQUEsZUFBWUEsTUFBTSxDQUFDNkMsS0FBUCxFQUFaO0VBQUEsT0FBckI7RUFDRDs7O2dDQUVTO0VBQ1IsV0FBS3JFLFVBQUwsQ0FBZ0JYLE9BQWhCLENBQXdCLFVBQUNhLFNBQUQ7RUFBQSxlQUFlQSxTQUFTLENBQUNvRSxPQUFWLEVBQWY7RUFBQSxPQUF4QjtFQUNBLFdBQUtuQyxPQUFMLENBQWE5QyxPQUFiLENBQXFCLFVBQUNtQyxNQUFEO0VBQUEsZUFBWUEsTUFBTSxDQUFDOEMsT0FBUCxFQUFaO0VBQUEsT0FBckI7RUFDRDs7OzBCQUVlO0VBQUE7O0VBQ2QsYUFBTyxLQUFLbkMsT0FBTCxDQUFhbkIsR0FBYixDQUFpQixVQUFDUSxNQUFELEVBQVk7RUFDbEMsZUFBT0EsTUFBTSxDQUFDb0IsZUFBUCxDQUF1QjVCLEdBQXZCLENBQTJCLFVBQUNkLFNBQUQ7RUFBQSxpQkFBZSxNQUFJLENBQUNGLFVBQUwsQ0FBZ0J2SixPQUFoQixDQUF3QnlKLFNBQXhCLENBQWY7RUFBQSxTQUEzQixDQUFQO0VBQ0QsT0FGTSxDQUFQO0VBR0Q7d0JBRWFxRSxXQUFXO0VBQUE7O0VBQ3ZCLFVBQU1DLE9BQU8sR0FBRyxvQkFBaEI7O0VBQ0EsVUFBSUQsU0FBUyxDQUFDN0ssTUFBVixLQUFxQixLQUFLeUksT0FBTCxDQUFhekksTUFBdEMsRUFBOEM7RUFDNUMsYUFBS3lJLE9BQUwsQ0FBYTlDLE9BQWIsQ0FBcUIsVUFBQ21DLE1BQUQ7RUFBQSxpQkFBWUEsTUFBTSxDQUFDNkMsS0FBUCxFQUFaO0VBQUEsU0FBckI7RUFFQUUsUUFBQUEsU0FBUyxDQUFDbEYsT0FBVixDQUFrQixVQUFDb0YsYUFBRCxFQUFnQmpMLENBQWhCLEVBQXNCO0VBQ3RDaUwsVUFBQUEsYUFBYSxDQUFDcEYsT0FBZCxDQUFzQixVQUFDN0ksS0FBRCxFQUFXO0VBQy9CLFlBQUEsTUFBSSxDQUFDMkwsT0FBTCxDQUFhM0ksQ0FBYixFQUFnQjFDLEdBQWhCLENBQW9CLE1BQUksQ0FBQ2tKLFVBQUwsQ0FBZ0J4SixLQUFoQixDQUFwQjtFQUNELFdBRkQ7RUFHRCxTQUpEO0VBS0QsT0FSRCxNQVFPO0VBQ0wsY0FBTWdPLE9BQU47RUFDRDtFQUNGOzs7O0lBeEZpQmxQOztBQTJGcEIsTUFBTW1NLFlBQVksR0FBRyxJQUFJb0MsS0FBSixFQUFyQjs7RUFFQSxTQUFTWCxLQUFULENBQWVwTixFQUFmLEVBQW1CO0VBQ2pCLE1BQU00TyxZQUFZLEdBQUcsSUFBSWIsS0FBSixFQUFyQjs7RUFFQSxNQUFNYyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQVN6RSxTQUFULEVBQW9CO0VBQzlDd0UsSUFBQUEsWUFBWSxDQUFDRSxZQUFiLENBQTBCMUUsU0FBMUI7RUFDQTJFLElBQUFBLFNBQVMsQ0FBQ3pDLE9BQVYsQ0FBa0IwQyxTQUFsQjtFQUNELEdBSEQ7O0VBS0EsTUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFTdkQsTUFBVCxFQUFpQjtFQUN4Q2tELElBQUFBLFlBQVksQ0FBQ2hELFNBQWIsQ0FBdUJGLE1BQXZCO0VBQ0FxRCxJQUFBQSxTQUFTLENBQUN6QyxPQUFWLENBQWtCMEMsU0FBbEI7RUFDRCxHQUhEOztFQUtBRCxFQUFBQSxTQUFTLENBQUN6QyxPQUFWLENBQWtCNEMsU0FBbEIsQ0FBNEIsa0JBQTVCLEVBQWdETCxtQkFBaEQ7RUFDQWhELEVBQUFBLE1BQU0sQ0FBQ1MsT0FBUCxDQUFlNEMsU0FBZixDQUF5QixlQUF6QixFQUEwQ0QsZ0JBQTFDO0VBQ0FqUCxFQUFBQSxFQUFFLENBQUNJLElBQUg7RUFDQTJPLEVBQUFBLFNBQVMsQ0FBQ3pDLE9BQVYsQ0FBa0J3QixXQUFsQixDQUE4QixrQkFBOUIsRUFBa0RlLG1CQUFsRDtFQUNBaEQsRUFBQUEsTUFBTSxDQUFDUyxPQUFQLENBQWV3QixXQUFmLENBQTJCLGVBQTNCLEVBQTRDbUIsZ0JBQTVDO0VBQ0EsU0FBT0wsWUFBUDtFQUNEOztFQ3ZIRCxTQUFTTyx5QkFBVCxHQUFxQztFQUNuQyxNQUFJQyxnQkFBZ0IsR0FBRyxLQUF2Qjs7RUFFQSxNQUFJO0VBQ0YsUUFBTTFQLE9BQU8sR0FBR0csTUFBTSxDQUFDd1AsY0FBUCxDQUFzQixFQUF0QixFQUEwQixTQUExQixFQUFxQztFQUNuREMsTUFBQUEsR0FEbUQsaUJBQzdDO0VBQ0osZUFBUUYsZ0JBQWdCLEdBQUcsSUFBM0I7RUFDRDtFQUhrRCxLQUFyQyxDQUFoQjtFQU1BeFIsSUFBQUEsTUFBTSxDQUFDMlIsZ0JBQVAsQ0FBd0IsTUFBeEIsRUFBZ0M3UCxPQUFoQyxFQUF5Q0EsT0FBekM7RUFDQTlCLElBQUFBLE1BQU0sQ0FBQzRSLG1CQUFQLENBQTJCLE1BQTNCLEVBQW1DOVAsT0FBbkMsRUFBNENBLE9BQTVDO0VBQ0QsR0FURCxDQVNFLE9BQU8rUCxJQUFQLEVBQWE7RUFDYkwsSUFBQUEsZ0JBQWdCLEdBQUcsS0FBbkI7RUFDRDs7RUFFRCxTQUFPQSxnQkFBUDtFQUNEOztBQUVELEVBQU8sSUFBTU0sc0JBQXNCLEdBQUdQLHlCQUF5QixFQUF4RDs7RUNUUCxJQUFNUSxPQUFPLEdBQUcsa0JBQWtCL1IsTUFBbEM7RUFDQSxJQUFNZ1MsV0FBVyxHQUFHO0VBQ2xCL0csRUFBQUEsS0FBSyxFQUFFLFdBRFc7RUFFbEI0RSxFQUFBQSxJQUFJLEVBQUUsV0FGWTtFQUdsQm9DLEVBQUFBLEdBQUcsRUFBRTtFQUhhLENBQXBCO0VBS0EsSUFBTUMsV0FBVyxHQUFHO0VBQ2xCakgsRUFBQUEsS0FBSyxFQUFFLFlBRFc7RUFFbEI0RSxFQUFBQSxJQUFJLEVBQUUsV0FGWTtFQUdsQm9DLEVBQUFBLEdBQUcsRUFBRTtFQUhhLENBQXBCO0VBS0EsSUFBTTNGLFVBQVUsR0FBRyxFQUFuQjtFQUNBLElBQU02RixpQkFBaUIsR0FBR0MsZ0JBQWdCLENBQUMsV0FBRCxDQUExQztFQUNBLElBQU1DLGtCQUFrQixHQUFHRCxnQkFBZ0IsQ0FBQyxZQUFELENBQTNDOztFQUVBLFNBQVNFLFlBQVQsQ0FBc0I1UyxPQUF0QixFQUErQjZTLE9BQS9CLEVBQXdDO0VBQ3RDLE9BQUssSUFBSXpNLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdwRyxPQUFPLENBQUM4UyxjQUFSLENBQXVCeE0sTUFBM0MsRUFBbURGLENBQUMsRUFBcEQsRUFBd0Q7RUFDdEQsUUFBSXBHLE9BQU8sQ0FBQzhTLGNBQVIsQ0FBdUIxTSxDQUF2QixFQUEwQjJNLFVBQTFCLEtBQXlDRixPQUE3QyxFQUFzRDtFQUNwRCxhQUFPN1MsT0FBTyxDQUFDOFMsY0FBUixDQUF1QjFNLENBQXZCLENBQVA7RUFDRDtFQUNGOztFQUNELFNBQU8sS0FBUDtFQUNEOztFQUVELFNBQVM0TSxpQkFBVCxDQUEyQmxHLFNBQTNCLEVBQXNDO0VBQ3BDLE1BQU1zRSxPQUFPLEdBQUcsNEVBQWhCOztFQUNBLE1BQUl4RSxVQUFVLENBQUNOLElBQVgsQ0FBZ0IsVUFBQzJHLFFBQUQ7RUFBQSxXQUFjbkcsU0FBUyxDQUFDOU0sT0FBVixLQUFzQmlULFFBQVEsQ0FBQ2pULE9BQTdDO0VBQUEsR0FBaEIsQ0FBSixFQUEyRTtFQUN6RSxVQUFNb1IsT0FBTjtFQUNEOztFQUNEeEUsRUFBQUEsVUFBVSxDQUFDMUosSUFBWCxDQUFnQjRKLFNBQWhCO0VBQ0Q7O0VBRUQsU0FBU3FCLG1CQUFULENBQTJCckIsU0FBM0IsRUFBc0M7RUFDcEN1QixFQUFBQSxZQUFZLENBQUNtRCxZQUFiLENBQTBCMUUsU0FBMUI7RUFDRDs7RUFFRCxTQUFTb0csVUFBVCxDQUFvQkMsTUFBcEIsRUFBNEJDLFdBQTVCLEVBQXlDO0VBQ3ZDLE1BQU1DLEVBQUUsR0FBRy9TLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0I0UyxNQUF4QixDQUFYOztFQUVBLE9BQUssSUFBSS9NLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdpTixFQUFFLENBQUMvTSxNQUF2QixFQUErQkYsQ0FBQyxFQUFoQyxFQUFvQztFQUNsQyxRQUFNa04sR0FBRyxHQUFHRCxFQUFFLENBQUNqTixDQUFELENBQWQ7O0VBQ0EsUUFBS2tOLEdBQUcsQ0FBQ2pRLE9BQUosQ0FBWSxZQUFaLElBQTRCLENBQTdCLElBQW9DaVEsR0FBRyxDQUFDalEsT0FBSixDQUFZLFdBQVosSUFBMkIsQ0FBbkUsRUFBdUU7RUFDckUrUCxNQUFBQSxXQUFXLENBQUNwTyxLQUFaLENBQWtCc08sR0FBbEIsSUFBeUJELEVBQUUsQ0FBQ0MsR0FBRCxDQUEzQjtFQUNEO0VBQ0Y7O0VBRUQsT0FBSyxJQUFJbE4sRUFBQyxHQUFHLENBQWIsRUFBZ0JBLEVBQUMsR0FBRytNLE1BQU0sQ0FBQ0ksUUFBUCxDQUFnQmpOLE1BQXBDLEVBQTRDRixFQUFDLEVBQTdDLEVBQWlEO0VBQy9DOE0sSUFBQUEsVUFBVSxDQUFDQyxNQUFNLENBQUNJLFFBQVAsQ0FBZ0JuTixFQUFoQixDQUFELEVBQXFCZ04sV0FBVyxDQUFDRyxRQUFaLENBQXFCbk4sRUFBckIsQ0FBckIsQ0FBVjtFQUNEO0VBQ0Y7O01BRW9CcUw7Ozs7O0VBQ25CLHFCQUFZelIsT0FBWixFQUFpQztFQUFBOztFQUFBLFFBQVpvQyxPQUFZLHVFQUFKLEVBQUk7O0VBQUE7O0VBQy9CLG1GQUFNb00sU0FBTixFQUFpQnBNLE9BQWpCO0VBQ0EsVUFBSzJNLE9BQUwsR0FBZSxFQUFmO0VBQ0EsVUFBSzNNLE9BQUwsR0FBZUEsT0FBZjtFQUNBLFVBQUtwQyxPQUFMLEdBQWVBLE9BQWY7RUFDQWdULElBQUFBLGlCQUFpQiwrQkFBakI7RUFDQXZCLElBQUFBLFNBQVMsQ0FBQ3pDLE9BQVYsQ0FBa0JDLElBQWxCLENBQXVCLGtCQUF2QjtFQUNBLFVBQUt1RSxPQUFMLEdBQWUsSUFBZjs7RUFDQSxVQUFLQyxnQkFBTDs7RUFDQSxVQUFLQyxjQUFMOztFQVQrQjtFQVVoQzs7Ozt5Q0FFa0I7RUFDakIsV0FBS0MscUJBQUw7O0VBQ0EsV0FBSy9PLE1BQUwsR0FBY3BFLEtBQUssQ0FBQzBFLGFBQU4sQ0FBb0IsS0FBS2xGLE9BQXpCLEVBQWtDLEtBQUthLE1BQXZDLEVBQStDLElBQS9DLENBQWQ7RUFDQSxXQUFLK1MsY0FBTCxHQUFzQixLQUFLaFAsTUFBM0I7RUFDQSxXQUFLcEIsUUFBTCxHQUFnQixLQUFLb0IsTUFBckI7RUFDQSxXQUFLd0wsZUFBTCxHQUF1QixLQUFLaE8sT0FBTCxDQUFhb0IsUUFBYixJQUF5QixLQUFLb0IsTUFBckQ7RUFFQSxXQUFLb00sV0FBTCxDQUFpQixLQUFLWixlQUF0Qjs7RUFFQSxVQUFJLEtBQUt5RCxRQUFMLENBQWMzQyxPQUFsQixFQUEyQjtFQUN6QixhQUFLMkMsUUFBTCxDQUFjM0MsT0FBZDtFQUNEO0VBQ0Y7Ozt1Q0FFZ0I7RUFBQTs7RUFDZixXQUFLNEMsVUFBTCxHQUFrQixVQUFDQyxLQUFEO0VBQUEsZUFBVyxNQUFJLENBQUNDLFNBQUwsQ0FBZUQsS0FBZixDQUFYO0VBQUEsT0FBbEI7O0VBQ0EsV0FBS0UsU0FBTCxHQUFpQixVQUFDRixLQUFEO0VBQUEsZUFBVyxNQUFJLENBQUNHLFFBQUwsQ0FBY0gsS0FBZCxDQUFYO0VBQUEsT0FBakI7O0VBQ0EsV0FBS0ksUUFBTCxHQUFnQixVQUFDSixLQUFEO0VBQUEsZUFBVyxNQUFJLENBQUNLLE9BQUwsQ0FBYUwsS0FBYixDQUFYO0VBQUEsT0FBaEI7O0VBQ0EsV0FBS00sZ0JBQUwsR0FBd0IsVUFBQ04sS0FBRDtFQUFBLGVBQVcsTUFBSSxDQUFDTyxlQUFMLENBQXFCUCxLQUFyQixDQUFYO0VBQUEsT0FBeEI7O0VBQ0EsV0FBS1EsZUFBTCxHQUF1QixVQUFDUixLQUFEO0VBQUEsZUFBVyxNQUFJLENBQUNTLGNBQUwsQ0FBb0JULEtBQXBCLENBQVg7RUFBQSxPQUF2Qjs7RUFDQSxXQUFLVSxjQUFMLEdBQXNCLFVBQUNWLEtBQUQ7RUFBQSxlQUFXLE1BQUksQ0FBQ1csYUFBTCxDQUFtQlgsS0FBbkIsQ0FBWDtFQUFBLE9BQXRCOztFQUNBLFdBQUtZLFdBQUwsR0FBbUIsVUFBQ1osS0FBRDtFQUFBLGVBQVcsTUFBSSxDQUFDYSxVQUFMLENBQWdCYixLQUFoQixDQUFYO0VBQUEsT0FBbkI7O0VBRUEsV0FBS2MsT0FBTCxDQUFhNUMsZ0JBQWIsQ0FBOEJPLFdBQVcsQ0FBQ2pILEtBQTFDLEVBQWlELEtBQUt1SSxVQUF0RCxFQUFrRTFCLHNCQUFzQixHQUFHO0VBQUUwQyxRQUFBQSxPQUFPLEVBQUU7RUFBWCxPQUFILEdBQXdCLEtBQWhIO0VBQ0EsV0FBS0QsT0FBTCxDQUFhNUMsZ0JBQWIsQ0FBOEJLLFdBQVcsQ0FBQy9HLEtBQTFDLEVBQWlELEtBQUt1SSxVQUF0RCxFQUFrRTFCLHNCQUFzQixHQUFHO0VBQUUwQyxRQUFBQSxPQUFPLEVBQUU7RUFBWCxPQUFILEdBQXdCLEtBQWhIO0VBQ0EsV0FBS0QsT0FBTCxDQUFhNUMsZ0JBQWIsQ0FBOEIsV0FBOUIsRUFBMkMsS0FBS29DLGdCQUFoRDtFQUNEOzs7Z0NBRVM7RUFDUixhQUFPN1QsS0FBSyxDQUFDMkUsV0FBTixDQUFrQixLQUFLbkYsT0FBdkIsRUFBZ0MsS0FBS29DLE9BQUwsQ0FBYWhCLGdCQUE3QyxDQUFQO0VBQ0Q7OztvQ0FFYTtFQUNaLFdBQUtvQyxRQUFMLEdBQWdCLEtBQUtvQixNQUFMLENBQVlsQixHQUFaLENBQWdCLEtBQUtxUixrQkFBTCxJQUEyQixJQUFJdlUsS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLENBQTNDLENBQWhCO0VBQ0EsYUFBTyxLQUFLZ0QsUUFBWjtFQUNEOzs7a0NBRVc7RUFDVixhQUFPLEtBQUtBLFFBQUwsQ0FBY0UsR0FBZCxDQUFrQixLQUFLc1IsT0FBTCxHQUFlclIsSUFBZixDQUFvQixHQUFwQixDQUFsQixDQUFQO0VBQ0Q7Ozs4Q0FFd0I7RUFDdkIsV0FBSzNELE9BQUwsQ0FBYWdGLEtBQWIsQ0FBbUIyTixrQkFBbkIsSUFBeUNyUyxNQUFNLENBQUNDLGdCQUFQLENBQXdCLEtBQUtQLE9BQTdCLEVBQXNDMlMsa0JBQXRDLENBQXpDO0VBQ0Q7OztxQ0FFY3pDLE1BQU07RUFDbkIsVUFBSStFLFVBQVUsR0FBRyxLQUFLalYsT0FBTCxDQUFhZ0YsS0FBYixDQUFtQjJOLGtCQUFuQixDQUFqQjtFQUNBLFVBQU11QyxhQUFhLHVCQUFnQmhGLElBQWhCLE9BQW5COztFQUVBLFVBQUksQ0FBQyxtQkFBbUJ2TyxJQUFuQixDQUF3QnNULFVBQXhCLENBQUwsRUFBMEM7RUFDeEMsWUFBSUEsVUFBSixFQUFnQjtFQUNkQSxVQUFBQSxVQUFVLGdCQUFTQyxhQUFULENBQVY7RUFDRCxTQUZELE1BRU87RUFDTEQsVUFBQUEsVUFBVSxHQUFHQyxhQUFiO0VBQ0Q7RUFDRixPQU5ELE1BTU87RUFDTEQsUUFBQUEsVUFBVSxHQUFHQSxVQUFVLENBQUNuVCxPQUFYLENBQW1CLGtCQUFuQixFQUF1Q29ULGFBQXZDLENBQWI7RUFDRDs7RUFFRCxXQUFLbFYsT0FBTCxDQUFhZ0YsS0FBYixDQUFtQjJOLGtCQUFuQixJQUF5Q3NDLFVBQXpDO0VBQ0Q7OztvQ0FFYWpOLE9BQU87RUFDbkIsV0FBSytNLGtCQUFMLEdBQTBCL00sS0FBMUI7RUFFQSxVQUFJbU4sU0FBUyxHQUFHLEtBQUtuVixPQUFMLENBQWFnRixLQUFiLENBQW1CeU4saUJBQW5CLENBQWhCO0VBQ0EsVUFBSTJDLFlBQVksMEJBQW1CcE4sS0FBSyxDQUFDdkgsQ0FBekIsaUJBQWlDdUgsS0FBSyxDQUFDdEgsQ0FBdkMsYUFBaEI7RUFFQSxVQUFNMlUsRUFBRSxHQUFHL1UsTUFBTSxDQUFDZ1YsU0FBUCxDQUFpQkMsU0FBNUI7RUFDQSxVQUFNQyxJQUFJLEdBQUdILEVBQUUsQ0FBQ2hTLE9BQUgsQ0FBVyxPQUFYLE1BQXdCLENBQUMsQ0FBdEM7O0VBRUEsVUFBSW1TLElBQUosRUFBVTtFQUNSSixRQUFBQSxZQUFZLHdCQUFpQnBOLEtBQUssQ0FBQ3ZILENBQXZCLGdCQUE4QnVILEtBQUssQ0FBQ3RILENBQXBDLFFBQVo7O0VBQ0EsWUFBSSxDQUFDLHFCQUFxQmlCLElBQXJCLENBQTBCd1QsU0FBMUIsQ0FBTCxFQUEyQztFQUN6Q0EsVUFBQUEsU0FBUyxJQUFJQyxZQUFiO0VBQ0QsU0FGRCxNQUVPO0VBQ0xELFVBQUFBLFNBQVMsR0FBR0EsU0FBUyxDQUFDclQsT0FBVixDQUFrQixvQkFBbEIsRUFBd0NzVCxZQUF4QyxDQUFaO0VBQ0Q7RUFDRixPQVBELE1BT087RUFDTCxZQUFJLENBQUMsdUJBQXVCelQsSUFBdkIsQ0FBNEJ3VCxTQUE1QixDQUFMLEVBQTZDO0VBQzNDQSxVQUFBQSxTQUFTLElBQUlDLFlBQWI7RUFDRCxTQUZELE1BRU87RUFDTEQsVUFBQUEsU0FBUyxHQUFHQSxTQUFTLENBQUNyVCxPQUFWLENBQWtCLHNCQUFsQixFQUEwQ3NULFlBQTFDLENBQVo7RUFDRDtFQUNGOztFQUVELFdBQUtwVixPQUFMLENBQWFnRixLQUFiLENBQW1CeU4saUJBQW5CLElBQXdDMEMsU0FBeEM7RUFDRDs7OzJCQUVJbk4sT0FBK0I7RUFBQSxVQUF4QmtJLElBQXdCLHVFQUFuQixDQUFtQjtFQUFBLFVBQWhCdUYsUUFBZ0IsdUVBQVAsS0FBTztFQUNsQ3pOLE1BQUFBLEtBQUssR0FBR0EsS0FBSyxDQUFDNEIsS0FBTixFQUFSO0VBRUEsV0FBSzhMLGtCQUFMLENBQXdCMU4sS0FBeEI7RUFDQSxXQUFLeEUsUUFBTCxHQUFnQndFLEtBQWhCOztFQUVBLFdBQUsyTixjQUFMLENBQW9CekYsSUFBcEI7O0VBQ0EsV0FBSzBGLGFBQUwsQ0FBbUI1TixLQUFLLENBQUNoRSxHQUFOLENBQVUsS0FBS1ksTUFBZixDQUFuQjs7RUFFQSxVQUFJLENBQUM2USxRQUFMLEVBQWU7RUFDYixhQUFLeEcsSUFBTCxDQUFVLFdBQVY7RUFDRDtFQUNGOzs7a0NBRVdqSCxPQUE0QjtFQUFBLFVBQXJCa0ksSUFBcUIsdUVBQWhCLENBQWdCO0VBQUEsVUFBYjJGLE1BQWEsdUVBQU4sSUFBTTtFQUN0QyxXQUFLakMsY0FBTCxHQUFzQjVMLEtBQUssQ0FBQzRCLEtBQU4sRUFBdEI7RUFDQSxXQUFLdUcsSUFBTCxDQUFVLEtBQUt5RCxjQUFmLEVBQStCMUQsSUFBL0IsRUFBcUMyRixNQUFyQztFQUNEOzs7K0NBRXlCO0VBQ3hCLFdBQUs3RSxXQUFMLENBQWlCLEtBQUtaLGVBQXRCO0VBQ0Q7Ozt3Q0FFa0I7RUFDakIsV0FBS1gsV0FBTCxDQUFpQixLQUFLckMsV0FBTCxFQUFqQjtFQUNEOzs7a0NBRVdwRixPQUFPO0VBQ2pCQSxNQUFBQSxLQUFLLEdBQUdBLEtBQUssQ0FBQzRCLEtBQU4sRUFBUjtFQUNBLFdBQUtwRyxRQUFMLEdBQWdCd0UsS0FBaEI7O0VBQ0EsV0FBSzJOLGNBQUwsQ0FBb0IsQ0FBcEI7O0VBQ0EsV0FBS0MsYUFBTCxDQUFtQjVOLEtBQUssQ0FBQ2hFLEdBQU4sQ0FBVSxLQUFLWSxNQUFmLENBQW5CO0VBQ0Q7Ozt5Q0FFa0JvRCxPQUFPO0VBQ3hCLFdBQUs4TixhQUFMLEdBQXNCLEtBQUt0UyxRQUFMLENBQWMvQyxDQUFkLEdBQWtCdUgsS0FBSyxDQUFDdkgsQ0FBOUM7RUFDQSxXQUFLc1YsY0FBTCxHQUF1QixLQUFLdlMsUUFBTCxDQUFjL0MsQ0FBZCxHQUFrQnVILEtBQUssQ0FBQ3ZILENBQS9DO0VBQ0EsV0FBS3VWLFdBQUwsR0FBb0IsS0FBS3hTLFFBQUwsQ0FBYzlDLENBQWQsR0FBa0JzSCxLQUFLLENBQUN0SCxDQUE1QztFQUNBLFdBQUt1VixhQUFMLEdBQXNCLEtBQUt6UyxRQUFMLENBQWM5QyxDQUFkLEdBQWtCc0gsS0FBSyxDQUFDdEgsQ0FBOUM7RUFDRDs7O2dDQUVTcVQsT0FBTztFQUNmLFdBQUttQyxZQUFMLEdBQW9CbkMsS0FBcEI7O0VBQ0EsVUFBSSxDQUFDLEtBQUtQLE9BQVYsRUFBbUI7RUFDakI7RUFDRDs7RUFFRCxVQUFNMkMsWUFBWSxHQUFJOUQsT0FBTyxJQUFLMEIsS0FBSyxZQUFZelQsTUFBTSxDQUFDOFYsVUFBMUQ7RUFFQSxXQUFLQyxnQkFBTCxHQUF3QixJQUFJN1YsS0FBSixDQUN0QjJWLFlBQVksR0FBR3BDLEtBQUssQ0FBQ2pCLGNBQU4sQ0FBcUIsQ0FBckIsRUFBd0J3RCxLQUEzQixHQUFtQ3ZDLEtBQUssQ0FBQ3dDLE9BRC9CLEVBRXRCSixZQUFZLEdBQUdwQyxLQUFLLENBQUNqQixjQUFOLENBQXFCLENBQXJCLEVBQXdCMEQsS0FBM0IsR0FBbUN6QyxLQUFLLENBQUMwQyxPQUYvQixDQUF4QjtFQUtBLFdBQUtDLGNBQUwsR0FBc0IsS0FBS3RKLFdBQUwsRUFBdEI7O0VBQ0EsVUFBSStJLFlBQUosRUFBa0I7RUFDaEIsYUFBS1EsUUFBTCxHQUFnQjVDLEtBQUssQ0FBQ2pCLGNBQU4sQ0FBcUIsQ0FBckIsRUFBd0JDLFVBQXhDO0VBQ0Q7O0VBRURnQixNQUFBQSxLQUFLLENBQUM2QyxlQUFOOztFQUNBLFVBQUk3QyxLQUFLLENBQUMzRixNQUFOLFlBQXdCOU4sTUFBTSxDQUFDdVcsZ0JBQS9CLElBQ0U5QyxLQUFLLENBQUMzRixNQUFOLFlBQXdCOU4sTUFBTSxDQUFDdVcsZ0JBRHJDLEVBQ3VEO0VBQ3JEOUMsUUFBQUEsS0FBSyxDQUFDM0YsTUFBTixDQUFhMEksS0FBYjtFQUNEOztFQUVELFVBQUksRUFBRSxLQUFLQyxpQkFBTCxJQUNFaEQsS0FBSyxDQUFDM0YsTUFBTixZQUF3QjlOLE1BQU0sQ0FBQ3VXLGdCQURqQyxJQUVFOUMsS0FBSyxDQUFDM0YsTUFBTixZQUF3QjlOLE1BQU0sQ0FBQ3VXLGdCQUZuQyxDQUFKLEVBRTBEO0VBQ3hEOUMsUUFBQUEsS0FBSyxDQUFDaUQsY0FBTjtFQUNEOztFQUVELFVBQUksS0FBS0QsaUJBQVQsRUFBNEI7RUFDMUIsWUFBSVosWUFBWSxJQUFJLEtBQUtjLCtCQUF6QixFQUEwRDtFQUN4RCxlQUFLQyx3QkFBTCxDQUE4Qm5ELEtBQTlCO0VBQ0QsU0FGRCxNQUVPO0VBQ0wsZUFBSy9ULE9BQUwsQ0FBYThNLFNBQWIsR0FBeUIsSUFBekI7RUFDQWhJLFVBQUFBLFFBQVEsQ0FBQ21OLGdCQUFULENBQTBCSyxXQUFXLENBQUNDLEdBQXRDLEVBQTJDLEtBQUtrQyxjQUFoRCxFQUFnRXJDLHNCQUFzQixHQUFHO0VBQUUwQyxZQUFBQSxPQUFPLEVBQUU7RUFBWCxXQUFILEdBQXdCLEtBQTlHO0VBQ0Q7RUFDRixPQVBELE1BT087RUFDTGhRLFFBQUFBLFFBQVEsQ0FBQ21OLGdCQUFULENBQTBCTyxXQUFXLENBQUNyQyxJQUF0QyxFQUE0QyxLQUFLOEQsU0FBakQsRUFBNEQ3QixzQkFBc0IsR0FBRztFQUFFMEMsVUFBQUEsT0FBTyxFQUFFO0VBQVgsU0FBSCxHQUF3QixLQUExRztFQUNBaFEsUUFBQUEsUUFBUSxDQUFDbU4sZ0JBQVQsQ0FBMEJLLFdBQVcsQ0FBQ25DLElBQXRDLEVBQTRDLEtBQUs4RCxTQUFqRCxFQUE0RDdCLHNCQUFzQixHQUFHO0VBQUUwQyxVQUFBQSxPQUFPLEVBQUU7RUFBWCxTQUFILEdBQXdCLEtBQTFHO0VBRUFoUSxRQUFBQSxRQUFRLENBQUNtTixnQkFBVCxDQUEwQk8sV0FBVyxDQUFDRCxHQUF0QyxFQUEyQyxLQUFLNEIsUUFBaEQsRUFBMEQvQixzQkFBc0IsR0FBRztFQUFFMEMsVUFBQUEsT0FBTyxFQUFFO0VBQVgsU0FBSCxHQUF3QixLQUF4RztFQUNBaFEsUUFBQUEsUUFBUSxDQUFDbU4sZ0JBQVQsQ0FBMEJLLFdBQVcsQ0FBQ0MsR0FBdEMsRUFBMkMsS0FBSzRCLFFBQWhELEVBQTBEL0Isc0JBQXNCLEdBQUc7RUFBRTBDLFVBQUFBLE9BQU8sRUFBRTtFQUFYLFNBQUgsR0FBd0IsS0FBeEc7RUFDRDs7RUFFRCxXQUFLcUMsVUFBTCxHQUFrQixJQUFsQjtFQUNBLFdBQUtsSSxJQUFMLENBQVUsWUFBVjtFQUNBcE4sTUFBQUEsUUFBUSxDQUFDLEtBQUs3QixPQUFOLEVBQWUsZUFBZixDQUFSO0VBQ0EsV0FBS2lQLElBQUwsQ0FBVSxXQUFWO0VBQ0Q7OztxQ0FFYztFQUNibkssTUFBQUEsUUFBUSxDQUFDb04sbUJBQVQsQ0FBNkJNLFdBQVcsQ0FBQ3JDLElBQXpDLEVBQStDLEtBQUs4RCxTQUFwRDtFQUNBblAsTUFBQUEsUUFBUSxDQUFDb04sbUJBQVQsQ0FBNkJJLFdBQVcsQ0FBQ25DLElBQXpDLEVBQStDLEtBQUs4RCxTQUFwRDtFQUNBblAsTUFBQUEsUUFBUSxDQUFDb04sbUJBQVQsQ0FBNkJNLFdBQVcsQ0FBQ0QsR0FBekMsRUFBOEMsS0FBSzRCLFFBQW5EO0VBQ0FyUCxNQUFBQSxRQUFRLENBQUNvTixtQkFBVCxDQUE2QkksV0FBVyxDQUFDQyxHQUF6QyxFQUE4QyxLQUFLNEIsUUFBbkQ7RUFDQXJQLE1BQUFBLFFBQVEsQ0FBQ29OLG1CQUFULENBQTZCSSxXQUFXLENBQUNDLEdBQXpDLEVBQThDLEtBQUtrQyxjQUFuRDtFQUNBM1AsTUFBQUEsUUFBUSxDQUFDb04sbUJBQVQsQ0FBNkIsVUFBN0IsRUFBeUMsS0FBS3FDLGVBQTlDO0VBQ0F6UCxNQUFBQSxRQUFRLENBQUNvTixtQkFBVCxDQUE2QixTQUE3QixFQUF3QyxLQUFLdUMsY0FBN0M7RUFDQTNQLE1BQUFBLFFBQVEsQ0FBQ29OLG1CQUFULENBQTZCLE1BQTdCLEVBQXFDLEtBQUt5QyxXQUExQztFQUNBLFdBQUszVSxPQUFMLENBQWE4TSxTQUFiLEdBQXlCLEtBQXpCO0VBQ0EsV0FBS3FLLFVBQUwsR0FBa0IsS0FBbEI7RUFDQXBWLE1BQUFBLFdBQVcsQ0FBQyxLQUFLL0IsT0FBTixFQUFlLGVBQWYsQ0FBWDtFQUNEOzs7K0JBRVErVCxPQUFPO0VBQ2QsV0FBS21DLFlBQUwsR0FBb0JuQyxLQUFwQjtFQUNBLFVBQUlxRCxLQUFKO0VBRUEsVUFBTWpCLFlBQVksR0FBSTlELE9BQU8sSUFBSzBCLEtBQUssWUFBWXpULE1BQU0sQ0FBQzhWLFVBQTFEOztFQUNBLFVBQUlELFlBQUosRUFBa0I7RUFDaEJpQixRQUFBQSxLQUFLLEdBQUd4RSxZQUFZLENBQUNtQixLQUFELEVBQVEsS0FBSzRDLFFBQWIsQ0FBcEI7O0VBRUEsWUFBSSxDQUFDUyxLQUFMLEVBQVk7RUFDVjtFQUNEO0VBQ0Y7O0VBRURyRCxNQUFBQSxLQUFLLENBQUM2QyxlQUFOO0VBQ0E3QyxNQUFBQSxLQUFLLENBQUNpRCxjQUFOO0VBQ0EsVUFBTUssVUFBVSxHQUFHLElBQUk3VyxLQUFKLENBQ2pCMlYsWUFBWSxHQUFHaUIsS0FBSyxDQUFDZCxLQUFULEdBQWlCdkMsS0FBSyxDQUFDd0MsT0FEbEIsRUFFakJKLFlBQVksR0FBR2lCLEtBQUssQ0FBQ1osS0FBVCxHQUFpQnpDLEtBQUssQ0FBQzBDLE9BRmxCLENBQW5COztFQUtBLFVBQUl6TyxLQUFLLEdBQUcsS0FBSzBPLGNBQUwsQ0FBb0JoVCxHQUFwQixDQUF3QjJULFVBQVUsQ0FBQ3JULEdBQVgsQ0FBZSxLQUFLcVMsZ0JBQXBCLENBQXhCLENBQVo7O0VBQ0FyTyxNQUFBQSxLQUFLLEdBQUcsS0FBSzZMLFFBQUwsQ0FBY3lELEtBQWQsQ0FBb0J0UCxLQUFwQixFQUEyQixLQUFLZ04sT0FBTCxFQUEzQixDQUFSO0VBQ0EsV0FBS3FDLFVBQUwsR0FBa0JBLFVBQWxCO0VBQ0EsV0FBS2xILElBQUwsQ0FBVW5JLEtBQVY7RUFDRDs7OzhCQUVPK0wsT0FBTztFQUNiLFVBQU1vQyxZQUFZLEdBQUk5RCxPQUFPLElBQUswQixLQUFLLFlBQVl6VCxNQUFNLENBQUM4VixVQUExRDs7RUFFQSxVQUFJRCxZQUFZLElBQUksQ0FBQ3ZELFlBQVksQ0FBQ21CLEtBQUQsRUFBUSxLQUFLNEMsUUFBYixDQUFqQyxFQUF5RDtFQUN2RDtFQUNEOztFQUVENUMsTUFBQUEsS0FBSyxDQUFDNkMsZUFBTjtFQUNBN0MsTUFBQUEsS0FBSyxDQUFDaUQsY0FBTjtFQUNBLFdBQUt0RyxhQUFMO0VBQ0EsV0FBS3pCLElBQUwsQ0FBVSxVQUFWO0VBRUFuSyxNQUFBQSxRQUFRLENBQUNvTixtQkFBVCxDQUE2Qk0sV0FBVyxDQUFDckMsSUFBekMsRUFBK0MsS0FBSzhELFNBQXBEO0VBQ0FuUCxNQUFBQSxRQUFRLENBQUNvTixtQkFBVCxDQUE2QkksV0FBVyxDQUFDbkMsSUFBekMsRUFBK0MsS0FBSzhELFNBQXBEO0VBRUFuUCxNQUFBQSxRQUFRLENBQUNvTixtQkFBVCxDQUE2Qk0sV0FBVyxDQUFDRCxHQUF6QyxFQUE4QyxLQUFLNEIsUUFBbkQ7RUFDQXJQLE1BQUFBLFFBQVEsQ0FBQ29OLG1CQUFULENBQTZCSSxXQUFXLENBQUNDLEdBQXpDLEVBQThDLEtBQUs0QixRQUFuRDtFQUVBLFdBQUtnRCxVQUFMLEdBQWtCLEtBQWxCO0VBQ0FwVixNQUFBQSxXQUFXLENBQUMsS0FBSy9CLE9BQU4sRUFBZSxlQUFmLENBQVg7RUFDRDs7O3NDQUVlK1QsT0FBTztFQUNyQkEsTUFBQUEsS0FBSyxDQUFDd0QsWUFBTixDQUFtQkMsT0FBbkIsQ0FBMkIsdUJBQTNCLEVBQW9ELElBQXBEO0VBQ0ExUyxNQUFBQSxRQUFRLENBQUNtTixnQkFBVCxDQUEwQixNQUExQixFQUFrQyxLQUFLMEMsV0FBdkM7RUFDQTdQLE1BQUFBLFFBQVEsQ0FBQ21OLGdCQUFULENBQTBCLFVBQTFCLEVBQXNDLEtBQUtzQyxlQUEzQztFQUNBelAsTUFBQUEsUUFBUSxDQUFDbU4sZ0JBQVQsQ0FBMEIsU0FBMUIsRUFBcUMsS0FBS3dDLGNBQTFDO0VBQ0Q7OztxQ0FFY1YsT0FBTztFQUNwQkEsTUFBQUEsS0FBSyxDQUFDaUQsY0FBTjtFQUNBblYsTUFBQUEsUUFBUSxDQUFDLEtBQUs3QixPQUFOLEVBQWUsb0JBQWYsQ0FBUjtFQUNBLFdBQUtrVyxZQUFMLEdBQW9CbkMsS0FBcEI7O0VBQ0EsVUFBSUEsS0FBSyxDQUFDd0MsT0FBTixLQUFrQixDQUFsQixJQUF1QnhDLEtBQUssQ0FBQzBDLE9BQU4sS0FBa0IsQ0FBN0MsRUFBZ0Q7RUFDOUM7RUFDRDs7RUFFRCxVQUFNWSxVQUFVLEdBQUcsSUFBSTdXLEtBQUosQ0FBVXVULEtBQUssQ0FBQ3dDLE9BQWhCLEVBQXlCeEMsS0FBSyxDQUFDMEMsT0FBL0IsQ0FBbkI7O0VBQ0EsVUFBSXpPLEtBQUssR0FBRyxLQUFLME8sY0FBTCxDQUFvQmhULEdBQXBCLENBQXdCMlQsVUFBVSxDQUFDclQsR0FBWCxDQUFlLEtBQUtxUyxnQkFBcEIsQ0FBeEIsQ0FBWjs7RUFDQXJPLE1BQUFBLEtBQUssR0FBRyxLQUFLNkwsUUFBTCxDQUFjeUQsS0FBZCxDQUFvQnRQLEtBQXBCLEVBQTJCLEtBQUtnTixPQUFMLEVBQTNCLENBQVI7RUFDQSxXQUFLcUMsVUFBTCxHQUFrQkEsVUFBbEI7RUFDQSxXQUFLN1QsUUFBTCxHQUFnQndFLEtBQWhCO0VBQ0EsV0FBS2lILElBQUwsQ0FBVSxXQUFWO0VBQ0Q7OztpQ0FFVThFLE9BQU87RUFDaEJBLE1BQUFBLEtBQUssQ0FBQzZDLGVBQU47RUFDQTdDLE1BQUFBLEtBQUssQ0FBQ2lELGNBQU47RUFDRDs7O29DQUVhUyxRQUFRO0VBQ3BCMVYsTUFBQUEsV0FBVyxDQUFDLEtBQUsvQixPQUFOLEVBQWUsb0JBQWYsQ0FBWDtFQUNBLFdBQUswUSxhQUFMO0VBQ0EsV0FBS3pCLElBQUwsQ0FBVSxVQUFWO0VBQ0FuSyxNQUFBQSxRQUFRLENBQUNvTixtQkFBVCxDQUE2QixVQUE3QixFQUF5QyxLQUFLcUMsZUFBOUM7RUFDQXpQLE1BQUFBLFFBQVEsQ0FBQ29OLG1CQUFULENBQTZCLFNBQTdCLEVBQXdDLEtBQUt1QyxjQUE3QztFQUNBM1AsTUFBQUEsUUFBUSxDQUFDb04sbUJBQVQsQ0FBNkIsTUFBN0IsRUFBcUMsS0FBS3lDLFdBQTFDO0VBQ0E3UCxNQUFBQSxRQUFRLENBQUNvTixtQkFBVCxDQUE2QkksV0FBVyxDQUFDQyxHQUF6QyxFQUE4QyxLQUFLa0MsY0FBbkQ7RUFDQSxXQUFLMEMsVUFBTCxHQUFrQixLQUFsQjtFQUNBLFdBQUtuWCxPQUFMLENBQWE4TSxTQUFiLEdBQXlCLEtBQXpCO0VBQ0EvSyxNQUFBQSxXQUFXLENBQUMsS0FBSy9CLE9BQU4sRUFBZSxlQUFmLENBQVg7RUFDRDs7OytDQUV3QitULE9BQU87RUFBQTs7RUFDOUIsVUFBTTlTLFVBQVUsR0FBRyxLQUFLSixNQUFMLENBQVlHLHFCQUFaLEVBQW5CO0VBQ0EsVUFBTTBXLGFBQWEsR0FBRyxLQUFLMVgsT0FBTCxDQUFhMlgsU0FBYixDQUF1QixJQUF2QixDQUF0QjtFQUNBRCxNQUFBQSxhQUFhLENBQUMxUyxLQUFkLENBQW9CeU4saUJBQXBCLElBQXlDLEVBQXpDO0VBQ0FTLE1BQUFBLFVBQVUsQ0FBQyxLQUFLbFQsT0FBTixFQUFlMFgsYUFBZixDQUFWO0VBQ0FBLE1BQUFBLGFBQWEsQ0FBQzFTLEtBQWQsQ0FBb0J4QixRQUFwQixHQUErQixVQUEvQjtFQUNBc0IsTUFBQUEsUUFBUSxDQUFDOFMsSUFBVCxDQUFjQyxXQUFkLENBQTBCSCxhQUExQjtFQUNBN1YsTUFBQUEsUUFBUSxDQUFDLEtBQUs3QixPQUFOLEVBQWUsb0JBQWYsQ0FBUjtFQUVBLFVBQU04WCxrQkFBa0IsR0FBRyxJQUFJckcsU0FBSixDQUFjaUcsYUFBZCxFQUE2QjtFQUN0RDdXLFFBQUFBLE1BQU0sRUFBRWlFLFFBQVEsQ0FBQzhTLElBRHFDO0VBRXREdFYsUUFBQUEsRUFBRSxFQUFFO0VBQ0YsdUJBQWEsb0JBQU07RUFDakIsWUFBQSxNQUFJLENBQUNrQixRQUFMLEdBQWdCLElBQUloRCxLQUFKLENBQ2RzWCxrQkFBa0IsQ0FBQ3RVLFFBQW5CLENBQTRCL0MsQ0FBNUIsR0FBZ0NRLFVBQVUsQ0FBQ0MsSUFBM0MsR0FBa0RaLE1BQU0sQ0FBQ3lYLE9BRDNDLEVBRWRELGtCQUFrQixDQUFDdFUsUUFBbkIsQ0FBNEI5QyxDQUE1QixHQUFnQ08sVUFBVSxDQUFDRSxHQUEzQyxHQUFpRGIsTUFBTSxDQUFDMFgsT0FGMUMsQ0FBaEI7O0VBSUEsWUFBQSxNQUFJLENBQUMvSSxJQUFMLENBQVUsV0FBVjtFQUNELFdBUEM7RUFRRixzQkFBWSxtQkFBTTtFQUNoQjZJLFlBQUFBLGtCQUFrQixDQUFDRyxPQUFuQjtFQUNBblQsWUFBQUEsUUFBUSxDQUFDOFMsSUFBVCxDQUFjTSxXQUFkLENBQTBCUixhQUExQjtFQUNBM1YsWUFBQUEsV0FBVyxDQUFDLE1BQUksQ0FBQy9CLE9BQU4sRUFBZSxvQkFBZixDQUFYO0VBQ0ErQixZQUFBQSxXQUFXLENBQUMsTUFBSSxDQUFDL0IsT0FBTixFQUFlLGVBQWYsQ0FBWDtFQUNEO0VBYkM7RUFGa0QsT0FBN0IsQ0FBM0I7RUFtQkE4WCxNQUFBQSxrQkFBa0IsQ0FBQzNILElBQW5CLENBQXdCLElBQUkzUCxLQUFKLENBQ3RCLEtBQUtvVCxjQUFMLENBQW9CblQsQ0FBcEIsR0FBd0JRLFVBQVUsQ0FBQ0MsSUFBbkMsR0FBMENaLE1BQU0sQ0FBQ3lYLE9BRDNCLEVBRXRCLEtBQUtuRSxjQUFMLENBQW9CbFQsQ0FBcEIsR0FBd0JPLFVBQVUsQ0FBQ0UsR0FBbkMsR0FBeUNiLE1BQU0sQ0FBQzBYLE9BRjFCLENBQXhCO0VBS0FGLE1BQUFBLGtCQUFrQixDQUFDOUQsU0FBbkIsQ0FBNkJELEtBQTdCO0VBQ0Q7OztzQ0FFZTtFQUNkLFdBQUsvQyxXQUFMLENBQWlCLEtBQUt4TixRQUF0QjtFQUNEOzs7cUNBRWM7RUFDYixhQUFPLElBQUlELFNBQUosQ0FBYyxLQUFLQyxRQUFuQixFQUE2QixLQUFLd1IsT0FBTCxFQUE3QixDQUFQO0VBQ0Q7OztnQ0FFUztFQUNSLFdBQUtBLE9BQUwsQ0FBYSxJQUFiOztFQUNBLFVBQUksS0FBS25CLFFBQUwsQ0FBYzNDLE9BQWxCLEVBQTJCO0VBQ3pCLGFBQUsyQyxRQUFMLENBQWMzQyxPQUFkO0VBQ0Q7RUFDRjs7O2dDQUVTO0VBQ1IsV0FBSzJELE9BQUwsQ0FBYTNDLG1CQUFiLENBQWlDTSxXQUFXLENBQUNqSCxLQUE3QyxFQUFvRCxLQUFLdUksVUFBekQ7RUFDQSxXQUFLZSxPQUFMLENBQWEzQyxtQkFBYixDQUFpQ0ksV0FBVyxDQUFDL0csS0FBN0MsRUFBb0QsS0FBS3VJLFVBQXpEO0VBQ0FoUCxNQUFBQSxRQUFRLENBQUNvTixtQkFBVCxDQUE2Qk0sV0FBVyxDQUFDckMsSUFBekMsRUFBK0MsS0FBSzhELFNBQXBEO0VBQ0FuUCxNQUFBQSxRQUFRLENBQUNvTixtQkFBVCxDQUE2QkksV0FBVyxDQUFDbkMsSUFBekMsRUFBK0MsS0FBSzhELFNBQXBEO0VBQ0FuUCxNQUFBQSxRQUFRLENBQUNvTixtQkFBVCxDQUE2Qk0sV0FBVyxDQUFDRCxHQUF6QyxFQUE4QyxLQUFLNEIsUUFBbkQ7RUFDQXJQLE1BQUFBLFFBQVEsQ0FBQ29OLG1CQUFULENBQTZCSSxXQUFXLENBQUNDLEdBQXpDLEVBQThDLEtBQUs0QixRQUFuRDtFQUNBclAsTUFBQUEsUUFBUSxDQUFDb04sbUJBQVQsQ0FBNkIsV0FBN0IsRUFBMEMsS0FBS21DLGdCQUEvQztFQUNBdlAsTUFBQUEsUUFBUSxDQUFDb04sbUJBQVQsQ0FBNkIsVUFBN0IsRUFBeUMsS0FBS3FDLGVBQTlDO0VBQ0F6UCxNQUFBQSxRQUFRLENBQUNvTixtQkFBVCxDQUE2QixTQUE3QixFQUF3QyxLQUFLdUMsY0FBN0M7RUFDQSxXQUFLMEQsWUFBTDtFQUVBLFVBQU0vVSxLQUFLLEdBQUd3SixVQUFVLENBQUN2SixPQUFYLENBQW1CLElBQW5CLENBQWQ7O0VBQ0EsVUFBSUQsS0FBSyxHQUFHLENBQUMsQ0FBYixFQUFnQjtFQUNkd0osUUFBQUEsVUFBVSxDQUFDdEosTUFBWCxDQUFrQkYsS0FBbEIsRUFBeUIsQ0FBekI7RUFDRDtFQUNGOzs7MEJBRVk7RUFDWCxhQUFRLEtBQUtnVixPQUFMLEdBQWUsS0FBS0EsT0FBTCxJQUFnQixLQUFLaFcsT0FBTCxDQUFhdkIsTUFBN0IsSUFBdUNtQixnQkFBZ0IsQ0FBQyxLQUFLaEMsT0FBTixDQUE5RTtFQUNEOzs7MEJBRWM7RUFDYixhQUFRLEtBQUtxWSxTQUFMLEdBQWlCLEtBQUtBLFNBQUwsSUFBa0IsS0FBS2pXLE9BQUwsQ0FBYXlSLFFBQS9CLElBQTJDLElBQUkvSixjQUFKLENBQW1CLEtBQUtqSixNQUF4QixFQUFnQyxLQUFLQSxNQUFyQyxDQUFwRTtFQUNEOzs7MEJBRWE7RUFDWixVQUFJLENBQUMsS0FBS3lYLFFBQVYsRUFBb0I7RUFDbEIsWUFBSSxPQUFPLEtBQUtsVyxPQUFMLENBQWF5UyxPQUFwQixLQUFnQyxRQUFwQyxFQUE4QztFQUM1QyxlQUFLeUQsUUFBTCxHQUFnQixLQUFLdFksT0FBTCxDQUFhK0UsYUFBYixDQUEyQixLQUFLM0MsT0FBTCxDQUFheVMsT0FBeEMsS0FBb0QsS0FBSzdVLE9BQXpFO0VBQ0QsU0FGRCxNQUVPO0VBQ0wsZUFBS3NZLFFBQUwsR0FBZ0IsS0FBS2xXLE9BQUwsQ0FBYXlTLE9BQWIsSUFBd0IsS0FBSzdVLE9BQTdDO0VBQ0Q7RUFDRjs7RUFFRCxhQUFPLEtBQUtzWSxRQUFaO0VBQ0Q7OzswQkFFdUI7RUFDdEIsYUFBTyxLQUFLbFcsT0FBTCxDQUFhMlUsaUJBQWIsSUFBa0MsS0FBekM7RUFDRDs7OzBCQUVxQztFQUNwQyxhQUFPLEtBQUszVSxPQUFMLENBQWE2VSwrQkFBYixJQUFnRCxJQUF2RDtFQUNEOzs7MEJBRVk7RUFDWCxhQUFPLEtBQUt6RCxPQUFaO0VBQ0Q7d0JBRVUrRSxRQUFRO0VBQ2pCLFVBQUlBLE1BQUosRUFBWTtFQUNWeFcsUUFBQUEsV0FBVyxDQUFDLEtBQUsvQixPQUFOLEVBQWUsZ0JBQWYsQ0FBWDtFQUNELE9BRkQsTUFFTztFQUNMNkIsUUFBQUEsUUFBUSxDQUFDLEtBQUs3QixPQUFOLEVBQWUsZ0JBQWYsQ0FBUjtFQUNEOztFQUVELGFBQU8sS0FBS3dULE9BQUwsR0FBZStFLE1BQXRCO0VBQ0Q7Ozs7SUF0Wm9Dclc7RUF5WnZDdVAsU0FBUyxDQUFDekMsT0FBVixHQUFvQixJQUFJOU0sWUFBSixDQUFpQnVQLFNBQWpCLENBQXBCO0VBQ0FBLFNBQVMsQ0FBQ3pDLE9BQVYsQ0FBa0IxTSxFQUFsQixDQUFxQixrQkFBckIsRUFBeUM2TCxtQkFBekM7O01DOWNxQnFLOzs7OztFQUNuQixnQkFBWTVMLFVBQVosRUFBb0M7RUFBQTs7RUFBQSxRQUFaeEssT0FBWSx1RUFBSixFQUFJOztFQUFBOztFQUNsQyw4RUFBTW9NLFNBQU4sRUFBaUJwTSxPQUFqQjtFQUNBLFVBQUtBLE9BQUwsR0FBZUcsTUFBTSxDQUFDeUssTUFBUCxDQUFjO0VBQzNCeUIsTUFBQUEsT0FBTyxFQUFFLEdBRGtCO0VBRTNCQyxNQUFBQSxXQUFXLEVBQUUsR0FGYztFQUczQnhJLE1BQUFBLE1BQU0sRUFBRSxFQUhtQjtFQUkzQmQsTUFBQUEsV0FBVyxFQUFFQTtFQUpjLEtBQWQsRUFLWmhELE9BTFksQ0FBZjtFQU9BLFVBQUt3SyxVQUFMLEdBQWtCQSxVQUFsQjs7RUFDQSxVQUFLc0MsSUFBTDs7RUFWa0M7RUFXbkM7Ozs7NkJBRU07RUFDTCxXQUFLc0UsT0FBTCxHQUFlLElBQWY7RUFDQSxXQUFLNUcsVUFBTCxDQUFnQlgsT0FBaEIsQ0FBd0IsS0FBS3dNLGFBQTdCLEVBQTRDLElBQTVDO0VBQ0Q7OztvQ0FFYTNMLFdBQVc7RUFBQTs7RUFDdkJBLE1BQUFBLFNBQVMsQ0FBQ3lMLE1BQVYsR0FBbUIsS0FBSy9FLE9BQXhCO0VBQ0ExRyxNQUFBQSxTQUFTLENBQUN4SyxFQUFWLENBQWEsV0FBYixFQUEwQjtFQUFBLGVBQU0sTUFBSSxDQUFDb1csTUFBTCxDQUFZNUwsU0FBWixDQUFOO0VBQUEsT0FBMUI7O0VBQ0FBLE1BQUFBLFNBQVMsQ0FBQzRELGFBQVYsR0FBMEI7RUFBQSxlQUFNNUQsU0FBUyxDQUFDa0UsV0FBVixDQUFzQmxFLFNBQVMsQ0FBQzhHLGNBQWhDLEVBQWdELE1BQUksQ0FBQ3hSLE9BQUwsQ0FBYXFNLE9BQTdELENBQU47RUFBQSxPQUExQjtFQUNEOzs7NkJBRU0zQixXQUFXO0VBQ2hCLFVBQU02TCxnQkFBZ0IsR0FBRyxLQUFLQyxtQkFBTCxFQUF6QjtFQUNBLFVBQU1DLGVBQWUsR0FBR0YsZ0JBQWdCLENBQUMvSyxHQUFqQixDQUFxQixVQUFDZCxTQUFEO0VBQUEsZUFBZUEsU0FBUyxDQUFDOEcsY0FBekI7RUFBQSxPQUFyQixDQUF4QjtFQUVBLFVBQU1rRixZQUFZLEdBQUdILGdCQUFnQixDQUFDdFYsT0FBakIsQ0FBeUJ5SixTQUF6QixDQUFyQjtFQUNBLFVBQU1pTSxXQUFXLEdBQUdoVCxtQkFBbUIsQ0FBQzhTLGVBQUQsRUFBa0IvTCxTQUFTLENBQUN0SixRQUE1QixFQUFzQyxLQUFLcEIsT0FBTCxDQUFhOEQsTUFBbkQsRUFBMkQsS0FBSzlELE9BQUwsQ0FBYWdELFdBQXhFLENBQXZDOztFQUVBLFVBQUkyVCxXQUFXLEtBQUssQ0FBQyxDQUFqQixJQUFzQkQsWUFBWSxLQUFLQyxXQUEzQyxFQUF3RDtFQUN0RCxZQUFJQSxXQUFXLEdBQUdELFlBQWxCLEVBQWdDO0VBQzlCLGVBQUssSUFBSTFTLENBQUMsR0FBQzJTLFdBQVgsRUFBd0IzUyxDQUFDLEdBQUMwUyxZQUExQixFQUF3QzFTLENBQUMsRUFBekMsRUFBNkM7RUFDM0N1UyxZQUFBQSxnQkFBZ0IsQ0FBQ3ZTLENBQUQsQ0FBaEIsQ0FBb0I0SyxXQUFwQixDQUFnQzZILGVBQWUsQ0FBQ3pTLENBQUMsR0FBQyxDQUFILENBQS9DLEVBQXNELEtBQUtoRSxPQUFMLENBQWFzTSxXQUFuRTtFQUNEO0VBQ0YsU0FKRCxNQUlPO0VBQ0wsZUFBSyxJQUFJdEksRUFBQyxHQUFDMFMsWUFBWCxFQUF5QjFTLEVBQUMsR0FBQzJTLFdBQTNCLEVBQXdDM1MsRUFBQyxFQUF6QyxFQUE2QztFQUMzQ3VTLFlBQUFBLGdCQUFnQixDQUFDdlMsRUFBQyxHQUFDLENBQUgsQ0FBaEIsQ0FBc0I0SyxXQUF0QixDQUFrQzZILGVBQWUsQ0FBQ3pTLEVBQUQsQ0FBakQsRUFBc0QsS0FBS2hFLE9BQUwsQ0FBYXNNLFdBQW5FO0VBQ0Q7RUFDRjs7RUFFRCxZQUFJNUIsU0FBUyxDQUFDaUssaUJBQWQsRUFBaUM7RUFDL0JqSyxVQUFBQSxTQUFTLENBQUNrRSxXQUFWLENBQXNCNkgsZUFBZSxDQUFDRSxXQUFELENBQXJDO0VBQ0QsU0FGRCxNQUVPO0VBQ0xqTSxVQUFBQSxTQUFTLENBQUM4RyxjQUFWLEdBQTJCaUYsZUFBZSxDQUFDRSxXQUFELENBQTFDO0VBQ0Q7O0VBRUQsYUFBSzlKLElBQUwsQ0FBVSxhQUFWO0VBQ0Q7RUFDRjs7O2tEQUUyQjtFQUMxQixhQUFPLEtBQUtyQyxVQUFMLENBQWdCZ0IsR0FBaEIsQ0FBb0IsVUFBQ2QsU0FBRDtFQUFBLGVBQWVBLFNBQVMsQ0FBQzhHLGNBQVYsQ0FBeUJoSyxLQUF6QixFQUFmO0VBQUEsT0FBcEIsQ0FBUDtFQUNEOzs7NENBRXFCO0VBQUE7O0VBQ3BCLFVBQU1vUCxnQkFBZ0IsR0FBRyxLQUFLcE0sVUFBTCxDQUFnQmdCLEdBQWhCLENBQW9CLFVBQUNkLFNBQUQ7RUFBQSxlQUFlQSxTQUFTLENBQUNzRCxlQUF6QjtFQUFBLE9BQXBCLENBQXpCO0VBRUEsVUFBTXVJLGdCQUFnQixHQUFHSyxnQkFBZ0IsQ0FBQ3BMLEdBQWpCLENBQXFCLFVBQUNwSyxRQUFELEVBQWM7RUFDMUQsZUFBTyxNQUFJLENBQUNvSixVQUFMLENBQWdCekUsTUFBaEIsQ0FBdUIsVUFBQzJFLFNBQUQ7RUFBQSxpQkFBZUEsU0FBUyxDQUFDOEcsY0FBVixDQUF5QnFGLE9BQXpCLENBQWlDelYsUUFBakMsQ0FBZjtFQUFBLFNBQXZCLEVBQWtGLENBQWxGLENBQVA7RUFDRCxPQUZ3QixDQUF6QjtFQUlBLGFBQU9tVixnQkFBUDtFQUNEOzs7OEJBRU87RUFDTixXQUFLL0wsVUFBTCxDQUFnQlgsT0FBaEIsQ0FBd0IsVUFBQ2EsU0FBRDtFQUFBLGVBQWVBLFNBQVMsQ0FBQ29NLHNCQUFWLEVBQWY7RUFBQSxPQUF4QjtFQUNEOzs7Z0NBRVM7RUFDUixXQUFLdE0sVUFBTCxDQUFnQlgsT0FBaEIsQ0FBd0IsVUFBQ2EsU0FBRDtFQUFBLGVBQWVBLFNBQVMsQ0FBQ29FLE9BQVYsRUFBZjtFQUFBLE9BQXhCO0VBQ0Q7OzswQkFFR3RFLFlBQVk7RUFBQTs7RUFDZCxVQUFJLEVBQUVBLFVBQVUsWUFBWXVNLEtBQXhCLENBQUosRUFBb0M7RUFDbEN2TSxRQUFBQSxVQUFVLEdBQUcsQ0FBQ0EsVUFBRCxDQUFiO0VBQ0Q7O0VBQ0RBLE1BQUFBLFVBQVUsQ0FBQ1gsT0FBWCxDQUFtQixVQUFDYSxTQUFEO0VBQUEsZUFBZSxNQUFJLENBQUMyTCxhQUFMLENBQW1CM0wsU0FBbkIsQ0FBZjtFQUFBLE9BQW5CO0VBQ0EsV0FBS0YsVUFBTCxHQUFrQixLQUFLQSxVQUFMLENBQWdCQyxNQUFoQixDQUF1QkQsVUFBdkIsQ0FBbEI7RUFDRDs7OzZCQUVNQSxZQUFZO0VBQUE7O0VBQ2pCLFVBQU1vTSxnQkFBZ0IsR0FBRyxLQUFLcE0sVUFBTCxDQUFnQmdCLEdBQWhCLENBQW9CLFVBQUNkLFNBQUQ7RUFBQSxlQUFlQSxTQUFTLENBQUNzRCxlQUF6QjtFQUFBLE9BQXBCLENBQXpCO0VBQ0EsVUFBTWdKLElBQUksR0FBRyxFQUFiO0VBQ0EsVUFBTVQsZ0JBQWdCLEdBQUcsS0FBS0MsbUJBQUwsRUFBekI7O0VBRUEsVUFBSSxFQUFFaE0sVUFBVSxZQUFZdU0sS0FBeEIsQ0FBSixFQUFvQztFQUNsQ3ZNLFFBQUFBLFVBQVUsR0FBRyxDQUFDQSxVQUFELENBQWI7RUFDRDs7RUFFREEsTUFBQUEsVUFBVSxDQUFDWCxPQUFYLENBQW1CLFVBQUNhLFNBQUQsRUFBZTtFQUNoQ0EsUUFBQUEsU0FBUyxDQUFDdU0sT0FBVixDQUFrQixVQUFsQjtFQUNBdk0sUUFBQUEsU0FBUyxDQUFDdU0sT0FBVixDQUFrQixXQUFsQjtFQUNBdEosUUFBQUEsVUFBVSxDQUFDLE1BQUksQ0FBQ25ELFVBQU4sRUFBa0JFLFNBQWxCLENBQVY7RUFDRCxPQUpEO0VBTUEsVUFBSXdNLENBQUMsR0FBRyxDQUFSO0VBQ0FYLE1BQUFBLGdCQUFnQixDQUFDMU0sT0FBakIsQ0FBeUIsVUFBQ2EsU0FBRCxFQUFlO0VBQ3RDLFlBQUksTUFBSSxDQUFDRixVQUFMLENBQWdCdkosT0FBaEIsQ0FBd0J5SixTQUF4QixNQUF1QyxDQUFDLENBQTVDLEVBQStDO0VBQzdDLGNBQUlBLFNBQVMsQ0FBQzhHLGNBQVYsS0FBNkJvRixnQkFBZ0IsQ0FBQ00sQ0FBRCxDQUFqRCxFQUFzRDtFQUNwRHhNLFlBQUFBLFNBQVMsQ0FBQ2tFLFdBQVYsQ0FBc0JnSSxnQkFBZ0IsQ0FBQ00sQ0FBRCxDQUF0QyxFQUEyQyxNQUFJLENBQUNsWCxPQUFMLENBQWFzTSxXQUF4RDtFQUNEOztFQUNENUIsVUFBQUEsU0FBUyxDQUFDc0QsZUFBVixHQUE0QjRJLGdCQUFnQixDQUFDTSxDQUFELENBQTVDO0VBQ0FBLFVBQUFBLENBQUM7RUFDREYsVUFBQUEsSUFBSSxDQUFDbFcsSUFBTCxDQUFVNEosU0FBVjtFQUNEO0VBQ0YsT0FURDtFQVVBLFdBQUtGLFVBQUwsR0FBa0J3TSxJQUFsQjtFQUNEOzs7OEJBRU87RUFDTixXQUFLN0ksTUFBTCxDQUFZLEtBQUszRCxVQUFMLENBQWdCL0osS0FBaEIsRUFBWjtFQUNEOzs7Z0NBRVM7RUFDUixXQUFLK0osVUFBTCxDQUFnQlgsT0FBaEIsQ0FBd0IsVUFBQ2EsU0FBRDtFQUFBLGVBQWVBLFNBQVMsQ0FBQ21MLE9BQVYsRUFBZjtFQUFBLE9BQXhCO0VBQ0Q7OzswQkFFZTtFQUNkLGFBQU8sS0FBS3NCLHlCQUFMLEVBQVA7RUFDRDt3QkFFYXBJLFdBQVc7RUFBQTs7RUFDdkIsVUFBTUMsT0FBTyxHQUFHLG9CQUFoQjs7RUFDQSxVQUFJRCxTQUFTLENBQUM3SyxNQUFWLEtBQXFCLEtBQUtzRyxVQUFMLENBQWdCdEcsTUFBekMsRUFBaUQ7RUFDL0M2SyxRQUFBQSxTQUFTLENBQUNsRixPQUFWLENBQWtCLFVBQUNqRSxLQUFELEVBQVE1QixDQUFSLEVBQWM7RUFDOUIsVUFBQSxNQUFJLENBQUN3RyxVQUFMLENBQWdCeEcsQ0FBaEIsRUFBbUI0SyxXQUFuQixDQUErQmhKLEtBQS9CO0VBQ0QsU0FGRDtFQUdELE9BSkQsTUFJTztFQUNMLGNBQU1vSixPQUFOO0VBQ0Q7RUFDRjs7OzBCQUVZO0VBQ1gsYUFBTyxLQUFLb0MsT0FBWjtFQUNEO3dCQUVVK0UsUUFBUTtFQUNqQixXQUFLL0UsT0FBTCxHQUFlK0UsTUFBZjtFQUNBLFdBQUszTCxVQUFMLENBQWdCWCxPQUFoQixDQUF3QixVQUFDYSxTQUFELEVBQWU7RUFDckNBLFFBQUFBLFNBQVMsQ0FBQ3lMLE1BQVYsR0FBbUJBLE1BQW5CO0VBQ0QsT0FGRDtFQUdEOzs7OEJBRWNpQixlQUFlQyxVQUFzQjtFQUFBLFVBQVpyWCxPQUFZLHVFQUFKLEVBQUk7O0VBQ2xELFVBQU13SyxVQUFVLEdBQUcsbUJBQUk2TSxRQUFKLEVBQWM3TCxHQUFkLENBQWtCLFVBQUM1TixPQUFELEVBQWE7RUFDaEQsZUFBTyxJQUFJeVIsU0FBSixDQUFjelIsT0FBZCxFQUF1QnVDLE1BQU0sQ0FBQ3lLLE1BQVAsQ0FBYztFQUMxQ25NLFVBQUFBLE1BQU0sRUFBRTJZO0VBRGtDLFNBQWQsRUFFM0JwWCxPQUFPLENBQUMwSyxTQUFSLElBQXFCLEVBRk0sQ0FBdkIsQ0FBUDtFQUdELE9BSmtCLENBQW5COztFQUtBLGFBQU8sSUFBSTBMLElBQUosQ0FBUzVMLFVBQVQsRUFBcUJ4SyxPQUFPLENBQUNnWCxJQUFSLElBQWdCLEVBQXJDLENBQVA7RUFDRDs7OztJQXpKK0JsWDs7RUNUbEMsU0FBU3dYLFFBQVQsQ0FBa0IxWixPQUFsQixFQUEyQmdGLEtBQTNCLEVBQWtDO0VBQ2hDQSxFQUFBQSxLQUFLLEdBQUdBLEtBQUssSUFBSSxFQUFqQjtFQUNBLE1BQUkyVSxPQUFPLEdBQUcsRUFBZDs7RUFDQSxPQUFLLElBQU1yRyxHQUFYLElBQWtCdE8sS0FBbEIsRUFBeUI7RUFDdkIsUUFBSUEsS0FBSyxDQUFDNFUsY0FBTixDQUFxQnRHLEdBQXJCLENBQUosRUFBK0I7RUFDN0JxRyxNQUFBQSxPQUFPLElBQUlyRyxHQUFHLEdBQUcsSUFBTixHQUFhdE8sS0FBSyxDQUFDc08sR0FBRCxDQUFsQixHQUEwQixJQUFyQztFQUNEO0VBQ0Y7O0VBRUR0VCxFQUFBQSxPQUFPLENBQUNnRixLQUFSLENBQWMyVSxPQUFkLEdBQXdCQSxPQUF4QjtFQUNEOztFQUVELFNBQVNFLGdCQUFULENBQTBCN1osT0FBMUIsRUFBbUM4WixJQUFuQyxFQUF5QztFQUN2QyxNQUFJOVosT0FBTyxDQUFDK1osVUFBWixFQUF3QjtFQUN0Qi9aLElBQUFBLE9BQU8sQ0FBQ2dhLFlBQVIsQ0FBcUJGLElBQXJCLEVBQTJCOVosT0FBTyxDQUFDK1osVUFBbkM7RUFDRCxHQUZELE1BRU87RUFDTC9aLElBQUFBLE9BQU8sQ0FBQzZYLFdBQVIsQ0FBb0JpQyxJQUFwQjtFQUNEO0VBQ0Y7O0FBRUQsRUFBZSxTQUFTRyxZQUFULENBQXNCQyxJQUF0QixFQUE0QkMsUUFBNUIsRUFBc0M7RUFDbkQsTUFBTUMsTUFBTSxHQUFHdFYsUUFBUSxDQUFDdVYsYUFBVCxDQUF1QixRQUF2QixDQUFmOztFQUNBLE1BQUkvWixNQUFNLENBQUNDLGdCQUFQLENBQXdCMlosSUFBeEIsRUFBOEIxVyxRQUE5QixLQUEyQyxRQUEvQyxFQUF5RDtFQUN2RDBXLElBQUFBLElBQUksQ0FBQ2xWLEtBQUwsQ0FBV3hCLFFBQVgsR0FBc0IsVUFBdEI7RUFDRDs7RUFFRDRXLEVBQUFBLE1BQU0sQ0FBQ0UsWUFBUCxDQUFvQixPQUFwQixFQUE2QkgsUUFBUSxDQUFDMVcsSUFBVCxDQUFjaEQsQ0FBZCxHQUFrQixJQUEvQztFQUNBMlosRUFBQUEsTUFBTSxDQUFDRSxZQUFQLENBQW9CLFFBQXBCLEVBQThCSCxRQUFRLENBQUMxVyxJQUFULENBQWMvQyxDQUFkLEdBQWtCLElBQWhEO0VBQ0FnWixFQUFBQSxRQUFRLENBQUNVLE1BQUQsRUFBUztFQUNmNVcsSUFBQUEsUUFBUSxFQUFFLFVBREs7RUFFZnRDLElBQUFBLElBQUksRUFBRWlaLFFBQVEsQ0FBQzNXLFFBQVQsQ0FBa0I5QyxDQUFsQixHQUFzQixJQUZiO0VBR2ZTLElBQUFBLEdBQUcsRUFBRWdaLFFBQVEsQ0FBQzNXLFFBQVQsQ0FBa0I5QyxDQUFsQixHQUFzQixJQUhaO0VBSWZXLElBQUFBLEtBQUssRUFBRThZLFFBQVEsQ0FBQzFXLElBQVQsQ0FBY2hELENBQWQsR0FBa0IsSUFKVjtFQUtmYSxJQUFBQSxNQUFNLEVBQUU2WSxRQUFRLENBQUMxVyxJQUFULENBQWMvQyxDQUFkLEdBQWtCO0VBTFgsR0FBVCxDQUFSO0VBT0FtWixFQUFBQSxnQkFBZ0IsQ0FBQ0ssSUFBRCxFQUFPRSxNQUFQLENBQWhCO0VBQ0EsU0FBT0EsTUFBUDtFQUNEOztNQzdCb0JHOzs7RUFDbkIsa0JBQVlMLElBQVosRUFBa0JULFFBQWxCLEVBQXdDO0VBQUEsUUFBWnJYLE9BQVksdUVBQUosRUFBSTs7RUFBQTs7RUFDdEMsUUFBTW9ZLGFBQWEsR0FBR2pYLFNBQVMsQ0FBQ3dHLFdBQVYsQ0FBc0JtUSxJQUF0QixFQUE0QkEsSUFBNUIsQ0FBdEI7RUFDQSxTQUFLOVgsT0FBTCxHQUFlRyxNQUFNLENBQUN5SyxNQUFQLENBQWM7RUFDM0JoRSxNQUFBQSxLQUFLLEVBQUUsQ0FEb0I7RUFFM0J5UixNQUFBQSxNQUFNLEVBQUUsSUFBSTVXLElBQUksQ0FBQzZFLEVBQVQsR0FBYytRLFFBQVEsQ0FBQ25ULE1BRko7RUFHM0IrQyxNQUFBQSxNQUFNLEVBQUVtUixhQUFhLENBQUMvVixTQUFkLEVBSG1CO0VBSTNCaVcsTUFBQUEsV0FBVyxFQUFFLEVBSmM7RUFLM0JDLE1BQUFBLFNBQVMsRUFBRUgsYUFBYSxDQUFDSSxVQUFkLEtBQTZCLENBTGI7RUFNM0JDLE1BQUFBLFNBQVMsRUFBRSxDQU5nQjtFQU8zQkMsTUFBQUEsV0FBVyxFQUFFLFNBUGM7RUFRM0JDLE1BQUFBLFNBQVMsRUFBRTtFQVJnQixLQUFkLEVBU1ozWSxPQVRZLENBQWY7RUFXQSxTQUFLOFgsSUFBTCxHQUFZQSxJQUFaO0VBQ0EsU0FBS00sYUFBTCxHQUFxQkEsYUFBckI7RUFDQSxTQUFLdEwsSUFBTCxDQUFVdUssUUFBVjtFQUNEOzs7OzJCQUVJQSxVQUFVO0VBQUE7O0VBQ2IsV0FBS1csTUFBTCxHQUFjSCxZQUFZLENBQUMsS0FBS0MsSUFBTixFQUFZLEtBQUtNLGFBQWpCLENBQTFCO0VBQ0EsV0FBS3JZLE9BQUwsR0FBZSxLQUFLaVksTUFBTCxDQUFZWSxVQUFaLENBQXVCLElBQXZCLENBQWY7RUFFQSxXQUFLcE8sVUFBTCxHQUFrQjZNLFFBQVEsQ0FBQzdMLEdBQVQsQ0FBYSxVQUFDNU4sT0FBRCxFQUFVb0csQ0FBVixFQUFnQjtFQUM3QyxZQUFNNEMsS0FBSyxHQUFHLEtBQUksQ0FBQzVHLE9BQUwsQ0FBYTRHLEtBQWIsR0FBcUI1QyxDQUFDLEdBQUcsS0FBSSxDQUFDaEUsT0FBTCxDQUFhcVksTUFBcEQ7RUFDQSxZQUFNUSxRQUFRLEdBQUd6YSxLQUFLLENBQUMyRSxXQUFOLENBQWtCbkYsT0FBbEIsRUFBMkIyRCxJQUEzQixDQUFnQyxHQUFoQyxDQUFqQjtFQUNBLFlBQU00SCxLQUFLLEdBQUduQyx3QkFBd0IsQ0FBQ0osS0FBRCxFQUFRLEtBQUksQ0FBQzVHLE9BQUwsQ0FBYXNZLFdBQXJCLEVBQWtDLEtBQUksQ0FBQ3RZLE9BQUwsQ0FBYWlILE1BQS9DLENBQXhCLENBQStFckYsR0FBL0UsQ0FBbUZpWCxRQUFuRixDQUFkO0VBQ0EsWUFBTTFJLEdBQUcsR0FBR25KLHdCQUF3QixDQUFDSixLQUFELEVBQVEsS0FBSSxDQUFDNUcsT0FBTCxDQUFhdVksU0FBckIsRUFBZ0MsS0FBSSxDQUFDdlksT0FBTCxDQUFhaUgsTUFBN0MsQ0FBeEIsQ0FBNkVyRixHQUE3RSxDQUFpRmlYLFFBQWpGLENBQVo7RUFFQSxlQUFPLElBQUl4SixTQUFKLENBQWN6UixPQUFkLEVBQXVCO0VBQzVCYSxVQUFBQSxNQUFNLEVBQUUsS0FBSSxDQUFDcVosSUFEZTtFQUU1QnJHLFVBQUFBLFFBQVEsRUFBRSxJQUFJdkosV0FBSixDQUFnQmlCLEtBQWhCLEVBQXVCZ0gsR0FBdkIsQ0FGa0I7RUFHNUIvTyxVQUFBQSxRQUFRLEVBQUUrSCxLQUhrQjtFQUk1QmpKLFVBQUFBLEVBQUUsRUFBRTtFQUNGLHlCQUFhO0VBQUEscUJBQU0sS0FBSSxDQUFDNFksSUFBTCxFQUFOO0VBQUE7RUFEWDtFQUp3QixTQUF2QixDQUFQO0VBUUQsT0FkaUIsQ0FBbEI7RUFnQkEsV0FBS0MsTUFBTCxHQUFjLElBQWQ7RUFDQSxXQUFLRCxJQUFMO0VBQ0Q7Ozs2QkFFTTtFQUNMLFVBQUksQ0FBQyxLQUFLQyxNQUFWLEVBQWtCO0VBQ2hCO0VBQ0Q7O0VBQ0QsV0FBS2haLE9BQUwsQ0FBYWlaLFNBQWIsQ0FBdUIsQ0FBdkIsRUFBMEIsQ0FBMUIsRUFBNkIsS0FBS1osYUFBTCxDQUFtQi9XLElBQW5CLENBQXdCaEQsQ0FBckQsRUFBd0QsS0FBSytaLGFBQUwsQ0FBbUIvVyxJQUFuQixDQUF3Qi9DLENBQWhGO0VBQ0EsV0FBS3lCLE9BQUwsQ0FBYWtaLFNBQWI7RUFFQSxVQUFJclQsS0FBSyxHQUFHLEtBQUs0RSxVQUFMLENBQWdCLENBQWhCLEVBQW1CbkksU0FBbkIsRUFBWjtFQUNBLFdBQUt0QyxPQUFMLENBQWFtWixNQUFiLENBQW9CdFQsS0FBSyxDQUFDdkgsQ0FBMUIsRUFBNkJ1SCxLQUFLLENBQUN0SCxDQUFuQzs7RUFFQSxXQUFLLElBQUkwRixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUt3RyxVQUFMLENBQWdCdEcsTUFBcEMsRUFBNENGLENBQUMsRUFBN0MsRUFBaUQ7RUFDL0M0QixRQUFBQSxLQUFLLEdBQUcsS0FBSzRFLFVBQUwsQ0FBZ0J4RyxDQUFoQixFQUFtQjNCLFNBQW5CLEVBQVI7RUFDQSxhQUFLdEMsT0FBTCxDQUFhb1osTUFBYixDQUFvQnZULEtBQUssQ0FBQ3ZILENBQTFCLEVBQTZCdUgsS0FBSyxDQUFDdEgsQ0FBbkM7RUFDRDs7RUFDRCxXQUFLeUIsT0FBTCxDQUFhcVosU0FBYjtFQUNBLFdBQUtyWixPQUFMLENBQWEwWSxTQUFiLEdBQXlCLEtBQUt6WSxPQUFMLENBQWF5WSxTQUF0QztFQUNBLFdBQUsxWSxPQUFMLENBQWEyWSxXQUFiLEdBQTJCLEtBQUsxWSxPQUFMLENBQWEwWSxXQUF4QztFQUNBLFdBQUszWSxPQUFMLENBQWFzWixNQUFiO0VBQ0EsV0FBS3RaLE9BQUwsQ0FBYTRZLFNBQWIsR0FBeUIsS0FBSzNZLE9BQUwsQ0FBYTJZLFNBQXRDO0VBQ0EsV0FBSzVZLE9BQUwsQ0FBYXVaLElBQWI7RUFDRDs7Ozs7O01DNURrQkM7Ozs7O0VBQ25CLHFCQUFZekIsSUFBWixFQUFrQmxhLE9BQWxCLEVBQXVDO0VBQUE7O0VBQUEsUUFBWm9DLE9BQVksdUVBQUosRUFBSTs7RUFBQTs7RUFDckMsbUZBQU1vTSxTQUFOLEVBQWlCcE0sT0FBakI7RUFDQSxRQUFNb1ksYUFBYSxHQUFHalgsU0FBUyxDQUFDd0csV0FBVixDQUFzQm1RLElBQXRCLEVBQTRCQSxJQUE1QixDQUF0QjtFQUNBLFVBQUs5WCxPQUFMLEdBQWVHLE1BQU0sQ0FBQ3lLLE1BQVAsQ0FBYztFQUMzQjNELE1BQUFBLE1BQU0sRUFBRW1SLGFBQWEsQ0FBQy9WLFNBQWQsRUFEbUI7RUFFM0J5QixNQUFBQSxNQUFNLEVBQUVzVSxhQUFhLENBQUNJLFVBQWQsS0FBNkIsQ0FGVjtFQUczQjNQLE1BQUFBLFVBQVUsRUFBRXBILElBQUksQ0FBQzZFLEVBSFU7RUFJM0J3QyxNQUFBQSxRQUFRLEVBQUUsQ0FKaUI7RUFLM0IwUSxNQUFBQSxNQUFNLEVBQUUsQ0FBQy9YLElBQUksQ0FBQzZFLEVBQU4sRUFBVSxDQUFDN0UsSUFBSSxDQUFDNkUsRUFBTixHQUFXLENBQXJCLEVBQXdCLENBQXhCLEVBQTJCN0UsSUFBSSxDQUFDNkUsRUFBTCxHQUFVLENBQXJDLEVBQXdDN0UsSUFBSSxDQUFDNkUsRUFBTCxHQUFVLENBQWxELENBTG1CO0VBTTNCd0gsTUFBQUEsSUFBSSxFQUFFO0VBTnFCLEtBQWQsRUFPWjlOLE9BUFksQ0FBZjtFQVNBLFVBQUt5WixhQUFMLEdBQXFCLE1BQUt6WixPQUFMLENBQWFpSCxNQUFsQztFQUNBLFVBQUs2USxJQUFMLEdBQVlBLElBQVo7O0VBQ0EsVUFBS2hMLElBQUwsQ0FBVWxQLE9BQVY7O0VBZHFDO0VBZXRDOzs7OzJCQUVJQSxTQUFTO0VBQUE7O0VBQ1osVUFBTWdKLEtBQUssR0FBRyxLQUFLNUcsT0FBTCxDQUFhNkksVUFBM0I7RUFDQSxVQUFNekgsUUFBUSxHQUFHNEYsd0JBQXdCLENBQ3ZDSixLQUR1QyxFQUV2QyxLQUFLNUcsT0FBTCxDQUFhOEQsTUFGMEIsRUFHdkMsS0FBSzJWLGFBSGtDLENBQXpDO0VBTUEsV0FBSzdTLEtBQUwsR0FBYUEsS0FBYjtFQUNBLFdBQUs4RCxTQUFMLEdBQWlCLElBQUkyRSxTQUFKLENBQWN6UixPQUFkLEVBQXVCO0VBQ3RDYSxRQUFBQSxNQUFNLEVBQUUsS0FBS3FaLElBRHlCO0VBRXRDckcsUUFBQUEsUUFBUSxFQUFFLElBQUk3SSxVQUFKLENBQ1IsS0FBSzZRLGFBREcsRUFFUixLQUFLelosT0FBTCxDQUFhOEQsTUFGTCxFQUdSLEtBQUs5RCxPQUFMLENBQWE2SSxVQUhMLEVBSVIsS0FBSzdJLE9BQUwsQ0FBYThJLFFBSkwsQ0FGNEI7RUFRdEMxSCxRQUFBQSxRQUFRLEVBQUVBLFFBUjRCO0VBU3RDbEIsUUFBQUEsRUFBRSxFQUFFO0VBQ0YsdUJBQWE7RUFBQSxtQkFBTSxNQUFJLENBQUN3WixNQUFMLEVBQU47RUFBQTtFQURYO0VBVGtDLE9BQXZCLENBQWpCO0VBYUQ7OztvQ0FFYTtFQUNaLFdBQUs5UyxLQUFMLEdBQWFMLFFBQVEsQ0FBQyxLQUFLa1QsYUFBTixFQUFxQixLQUFLL08sU0FBTCxDQUFldEosUUFBcEMsQ0FBckI7RUFDRDs7OytCQUVRO0VBQ1AsV0FBS3VZLFdBQUwsR0FETztFQUdQOztFQUNBLFdBQUs5TSxJQUFMLENBQVUsa0JBQVYsRUFBOEI7RUFBRWpHLFFBQUFBLEtBQUssRUFBRSxLQUFLQTtFQUFkLE9BQTlCO0VBQ0Q7OzsrQkFFUUEsT0FBT2tILE1BQU07RUFDcEIsVUFBTTFNLFFBQVEsR0FBRzRGLHdCQUF3QixDQUN2QyxLQUFLSixLQURrQyxFQUV2QyxLQUFLNUcsT0FBTCxDQUFhOEQsTUFGMEIsRUFHdkMsS0FBSzJWLGFBSGtDLENBQXpDO0VBS0EsV0FBSzdTLEtBQUwsR0FBYUgsY0FBYyxDQUFDRyxLQUFELEFBQUEsQ0FBM0I7RUFDQSxXQUFLOEQsU0FBTCxDQUFla0UsV0FBZixDQUEyQnhOLFFBQTNCLEVBQXFDME0sSUFBSSxJQUFFLENBQTNDO0VBQ0EsV0FBS2pCLElBQUwsQ0FBVSxrQkFBVixFQUE4QixLQUFLakcsS0FBbkM7RUFDRDs7OztJQTlEb0M5Rzs7RUNPdkMsSUFBTThaLEdBQUcsR0FBRyxTQUFOQSxHQUFNLEdBQVc7RUFDckIsU0FBT25ZLElBQUksQ0FBQ29ZLEtBQUwsQ0FBV3BZLElBQUksQ0FBQ3FZLE1BQUwsS0FBYyxHQUF6QixDQUFQO0VBQ0QsQ0FGRDs7RUFJQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFTQyxLQUFULEVBQWdCO0VBQ2xDLE1BQUlDLEdBQUcsR0FBR0QsS0FBSyxDQUFDRSxRQUFOLENBQWUsRUFBZixDQUFWOztFQUNBLFNBQU9ELEdBQUcsQ0FBQy9WLE1BQUosR0FBYSxDQUFwQixFQUF1QjtFQUNyQitWLElBQUFBLEdBQUcsR0FBRyxNQUFNQSxHQUFaO0VBQ0Q7O0VBQ0QsU0FBT0EsR0FBUDtFQUNELENBTkQ7O0VBUUEsU0FBU0UsV0FBVCxHQUF1QjtFQUNyQixvQkFBV0osV0FBVyxDQUFDSCxHQUFHLEVBQUosQ0FBdEIsU0FBZ0NHLFdBQVcsQ0FBQ0gsR0FBRyxFQUFKLENBQTNDLFNBQXFERyxXQUFXLENBQUNILEdBQUcsRUFBSixDQUFoRTtFQUNEOztFQUVELFNBQVNRLHdCQUFULENBQWtDcFosS0FBbEMsRUFBeUNrRCxNQUF6QyxFQUFpRDtFQUMvQyxNQUFNbVcsVUFBVSxHQUFHLEVBQW5COztFQUNBLE1BQUlyWixLQUFLLEtBQUssQ0FBQyxDQUFmLEVBQWtCO0VBQ2hCcVosSUFBQUEsVUFBVSxDQUFDdlosSUFBWCxDQUFnQkUsS0FBaEI7RUFDQXFaLElBQUFBLFVBQVUsQ0FBQ3ZaLElBQVgsQ0FBZ0IsQ0FBQ0UsS0FBSyxHQUFHLENBQVQsSUFBY2tELE1BQTlCO0VBQ0Q7O0VBRUQsU0FBT21XLFVBQVA7RUFDRDs7TUFFb0JDOzs7OztFQUNuQixpQkFBYXhDLElBQWIsRUFBbUJULFFBQW5CLEVBQXlDO0VBQUE7O0VBQUEsUUFBWnJYLE9BQVksdUVBQUosRUFBSTs7RUFBQTs7RUFDdkMsK0VBQU1vTSxTQUFOLEVBQWlCcE0sT0FBakI7RUFDQSxRQUFNb1ksYUFBYSxHQUFHalgsU0FBUyxDQUFDd0csV0FBVixDQUFzQm1RLElBQXRCLEVBQTRCQSxJQUE1QixDQUF0QjtFQUNBLFVBQUs5WCxPQUFMLEdBQWVHLE1BQU0sQ0FBQ3lLLE1BQVAsQ0FBYztFQUMzQjNELE1BQUFBLE1BQU0sRUFBRW1SLGFBQWEsQ0FBQy9WLFNBQWQsRUFEbUI7RUFFM0J5QixNQUFBQSxNQUFNLEVBQUVzVSxhQUFhLENBQUNJLFVBQWQsS0FBNkIsQ0FGVjtFQUczQitCLE1BQUFBLFdBQVcsRUFBRW5DLGFBQWEsQ0FBQ0ksVUFBZCxLQUE2QixDQUhmO0VBSTNCM1IsTUFBQUEsVUFBVSxFQUFFcEYsSUFBSSxDQUFDNkUsRUFBTCxHQUFVLENBSks7RUFLM0JrVSxNQUFBQSxVQUFVLEVBQUV0UixLQUFLLENBQUMsQ0FBRCxFQUFJbU8sUUFBUSxDQUFDblQsTUFBYixDQUFMLENBQTBCc0gsR0FBMUIsQ0FBOEI7RUFBQSxlQUFNMk8sV0FBVyxFQUFqQjtFQUFBLE9BQTlCLENBTGU7RUFNM0JNLE1BQUFBLFVBQVUsRUFBRXZSLEtBQUssQ0FBQyxDQUFDLEVBQUYsRUFBTSxHQUFOLEVBQVcsTUFBTW1PLFFBQVEsQ0FBQ25ULE1BQTFCLENBQUwsQ0FBdUNzSCxHQUF2QyxDQUEyQyxVQUFDNUUsS0FBRDtFQUFBLGVBQVdELFFBQVEsQ0FBQ0MsS0FBRCxDQUFuQjtFQUFBLE9BQTNDLENBTmU7RUFPM0I4VCxNQUFBQSxRQUFRLEVBQUUsSUFQaUI7RUFRM0JDLE1BQUFBLGNBQWMsRUFBRSxJQUFJdmMsS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiO0VBUlcsS0FBZCxFQVNaNEIsT0FUWSxDQUFmO0VBV0EsVUFBSzhYLElBQUwsR0FBWUEsSUFBWjtFQUNBLFVBQUtNLGFBQUwsR0FBcUJBLGFBQXJCOztFQUNBLFVBQUt0TCxJQUFMLENBQVV1SyxRQUFWOztFQWhCdUM7RUFpQnhDOzs7OzJCQUVJQSxVQUFVO0VBQUE7O0VBQ2IsV0FBS1csTUFBTCxHQUFjSCxZQUFZLENBQUMsS0FBS0MsSUFBTixFQUFZLEtBQUtNLGFBQWpCLENBQTFCO0VBQ0EsV0FBS3JZLE9BQUwsR0FBZSxLQUFLaVksTUFBTCxDQUFZWSxVQUFaLENBQXVCLElBQXZCLENBQWY7RUFDQSxXQUFLcE8sVUFBTCxHQUFrQjZNLFFBQVEsQ0FBQzdMLEdBQVQsQ0FBYSxVQUFDNU4sT0FBRCxFQUFVb0csQ0FBVixFQUFnQjtFQUM3QyxZQUFNNEMsS0FBSyxHQUFHLE1BQUksQ0FBQzVHLE9BQUwsQ0FBYXlhLFVBQWIsQ0FBd0J6VyxDQUF4QixDQUFkO0VBQ0EsWUFBTTZVLFFBQVEsR0FBR3phLEtBQUssQ0FBQzJFLFdBQU4sQ0FBa0JuRixPQUFsQixFQUEyQjJELElBQTNCLENBQWdDLEdBQWhDLENBQWpCO0VBQ0EsWUFBTUgsUUFBUSxHQUFHNEYsd0JBQXdCLENBQ3ZDSixLQUR1QyxFQUV2QyxNQUFJLENBQUM1RyxPQUFMLENBQWF1YSxXQUYwQixFQUd2QyxNQUFJLENBQUN2YSxPQUFMLENBQWFpSCxNQUFiLENBQW9CckYsR0FBcEIsQ0FBd0JpWCxRQUF4QixDQUh1QyxDQUF6QztFQU1BLGVBQU8sSUFBSXhKLFNBQUosQ0FBY3pSLE9BQWQsRUFBdUI7RUFDNUJhLFVBQUFBLE1BQU0sRUFBRSxNQUFJLENBQUNxWixJQURlO0VBRTVCckcsVUFBQUEsUUFBUSxFQUFFLElBQUk3SSxVQUFKLENBQ1IsTUFBSSxDQUFDNUksT0FBTCxDQUFhaUgsTUFBYixDQUFvQnJGLEdBQXBCLENBQXdCaVgsUUFBeEIsQ0FEUSxFQUVSLE1BQUksQ0FBQzdZLE9BQUwsQ0FBYXVhLFdBRkwsRUFHUixNQUFJLENBQUNLLGFBQUwsQ0FBbUI1VyxDQUFuQixFQUFzQixLQUF0QixDQUhRLEVBSVIsTUFBSSxDQUFDNFcsYUFBTCxDQUFtQjVXLENBQW5CLEVBQXNCLElBQXRCLENBSlEsQ0FGa0I7RUFRNUI1QyxVQUFBQSxRQUFRLEVBQUVBLFFBUmtCO0VBUzVCbEIsVUFBQUEsRUFBRSxFQUFFO0VBQ0YseUJBQWE7RUFBQSxxQkFBTSxNQUFJLENBQUM0WSxJQUFMLEVBQU47RUFBQTtFQURYO0VBVHdCLFNBQXZCLENBQVA7RUFhRCxPQXRCaUIsQ0FBbEI7RUF3QkEsV0FBS0MsTUFBTCxHQUFjLElBQWQ7RUFDQSxXQUFLRCxJQUFMO0VBQ0Q7OztxQ0FFYztFQUFBOztFQUNiLFdBQUtVLE1BQUwsR0FBYyxLQUFLaFAsVUFBTCxDQUFnQmdCLEdBQWhCLENBQW9CLFVBQUNkLFNBQUQsRUFBZTtFQUMvQyxZQUFNbU8sUUFBUSxHQUFHbk8sU0FBUyxDQUFDa0ksT0FBVixHQUFvQnJSLElBQXBCLENBQXlCLEdBQXpCLENBQWpCO0VBQ0EsZUFBT2dGLFFBQVEsQ0FBQyxNQUFJLENBQUN2RyxPQUFMLENBQWFpSCxNQUFiLENBQW9CckYsR0FBcEIsQ0FBd0JpWCxRQUF4QixDQUFELEVBQW9Dbk8sU0FBUyxDQUFDdEosUUFBOUMsQ0FBZjtFQUNELE9BSGEsQ0FBZDtFQUlEOzs7b0NBRWFKLE9BQU82WixZQUFZO0VBQUE7O0VBQy9CLFVBQU10WSxJQUFJLEdBQUdzWSxVQUFVLEdBQUcsQ0FBSCxHQUFPLENBQUMsQ0FBL0I7RUFFQSxhQUFPLFlBQU07RUFDWCxZQUFJN1csQ0FBQyxHQUFHLENBQUNoRCxLQUFLLEdBQUd1QixJQUFULElBQWlCLE1BQUksQ0FBQ2lYLE1BQUwsQ0FBWXRWLE1BQXJDOztFQUNBLFlBQUlGLENBQUMsR0FBRyxDQUFSLEVBQVc7RUFDVEEsVUFBQUEsQ0FBQyxJQUFJLE1BQUksQ0FBQ3dWLE1BQUwsQ0FBWXRWLE1BQWpCO0VBQ0Q7O0VBQ0QsZUFBT3VDLGNBQWMsQ0FBQyxNQUFJLENBQUMrUyxNQUFMLENBQVl4VixDQUFaLElBQWlCekIsSUFBSSxHQUFHLE1BQUksQ0FBQ3ZDLE9BQUwsQ0FBYTZHLFVBQXRDLENBQXJCO0VBQ0QsT0FORDtFQU9EOzs7NkJBRU07RUFBQTs7RUFDTCxVQUFJLENBQUMsS0FBS2tTLE1BQVYsRUFBa0I7RUFDaEI7RUFDRDs7RUFFRCxXQUFLK0IsWUFBTDtFQUNBLFdBQUsvYSxPQUFMLENBQWFpWixTQUFiLENBQXVCLENBQXZCLEVBQTBCLENBQTFCLEVBQTZCLEtBQUtaLGFBQUwsQ0FBbUIvVyxJQUFuQixDQUF3QmhELENBQXJELEVBQXdELEtBQUsrWixhQUFMLENBQW1CL1csSUFBbkIsQ0FBd0IvQyxDQUFoRjtFQUNBLFdBQUtrTSxVQUFMLENBQWdCWCxPQUFoQixDQUF3QixVQUFDa1IsVUFBRCxFQUFhL1osS0FBYixFQUF1QjtFQUM3QyxRQUFBLE1BQUksQ0FBQ2dhLE9BQUwsQ0FBYSxNQUFJLENBQUNqYixPQUFsQixFQUEyQixNQUFJLENBQUNDLE9BQUwsQ0FBYWlILE1BQXhDLEVBQWdELE1BQUksQ0FBQ2pILE9BQUwsQ0FBYThELE1BQTdELEVBQXFFOUMsS0FBckU7RUFDRCxPQUZEO0VBSUEsV0FBS3dKLFVBQUwsQ0FBZ0JYLE9BQWhCLENBQXdCLFVBQUNrUixVQUFELEVBQWEvWixLQUFiLEVBQXVCO0VBQzdDLFFBQUEsTUFBSSxDQUFDaWEsWUFBTCxDQUFrQmphLEtBQWxCO0VBQ0QsT0FGRDtFQUlBLFdBQUs2TCxJQUFMLENBQVUsWUFBVjtFQUNEOzs7a0NBRVdqUCxTQUF1QjtFQUFBOztFQUFBLFVBQWRvQyxPQUFjLHVFQUFKLEVBQUk7O0VBQ2pDLFVBQUksQ0FBQyxLQUFLK1ksTUFBVixFQUFrQjtFQUNoQjtFQUNEOztFQUNELFVBQU1sWCxTQUFTLEdBQUdWLFNBQVMsQ0FBQ3dHLFdBQVYsQ0FBc0IvSixPQUF0QixFQUErQkEsT0FBL0IsQ0FBbEI7RUFDQSxVQUFNc2QsSUFBSSxHQUFHL2EsTUFBTSxDQUFDeUssTUFBUCxDQUFjO0VBQ3pCM0QsUUFBQUEsTUFBTSxFQUFFcEYsU0FBUyxDQUFDUSxTQUFWLEVBRGlCO0VBRXpCeUIsUUFBQUEsTUFBTSxFQUFFakMsU0FBUyxDQUFDMlcsVUFBVixLQUF5QixDQUZSO0VBR3pCZ0MsUUFBQUEsVUFBVSxFQUFFLEtBQUt4YSxPQUFMLENBQWF3YTtFQUhBLE9BQWQsRUFJVnhhLE9BSlUsQ0FBYjtFQU1BLFVBQU1nWSxNQUFNLEdBQUdILFlBQVksQ0FBQ2phLE9BQUQsRUFBVWlFLFNBQVYsQ0FBM0I7RUFDQSxVQUFNOUIsT0FBTyxHQUFHaVksTUFBTSxDQUFDWSxVQUFQLENBQWtCLElBQWxCLENBQWhCO0VBQ0EsVUFBTXVDLFFBQVEsR0FBRztFQUNmckMsUUFBQUEsSUFBSSxFQUFFLGdCQUFNO0VBQ1YvWSxVQUFBQSxPQUFPLENBQUNpWixTQUFSLENBQWtCLENBQWxCLEVBQXFCLENBQXJCLEVBQXdCblgsU0FBUyxDQUFDUixJQUFWLENBQWVoRCxDQUF2QyxFQUEwQ3dELFNBQVMsQ0FBQ1IsSUFBVixDQUFlL0MsQ0FBekQ7O0VBQ0EsVUFBQSxNQUFJLENBQUNrTSxVQUFMLENBQWdCWCxPQUFoQixDQUF3QixVQUFDa1IsVUFBRCxFQUFhL1osS0FBYixFQUF1QjtFQUM3QyxZQUFBLE1BQUksQ0FBQ2dhLE9BQUwsQ0FBYWpiLE9BQWIsRUFBc0JtYixJQUFJLENBQUNqVSxNQUEzQixFQUFtQ2lVLElBQUksQ0FBQ3BYLE1BQXhDLEVBQWdEOUMsS0FBaEQ7RUFDRCxXQUZEO0VBR0Q7RUFOYyxPQUFqQjtFQVFBbWEsTUFBQUEsUUFBUSxDQUFDckMsSUFBVDtFQUNBLGFBQU9xQyxRQUFQO0VBQ0Q7OzttQ0FFWW5hLE9BQU87RUFDbEIsVUFBSSxPQUFPLEtBQUtoQixPQUFMLENBQWF3YSxVQUFiLENBQXdCeFosS0FBeEIsQ0FBUCxLQUEwQyxVQUE5QyxFQUEwRDtFQUN4RCxhQUFLaEIsT0FBTCxDQUFhd2EsVUFBYixDQUF3QnhaLEtBQXhCLElBQWlDLEtBQUtoQixPQUFMLENBQWF3YSxVQUFiLENBQXdCeFosS0FBeEIsRUFBK0JOLElBQS9CLENBQW9DLElBQXBDLENBQWpDO0VBQ0Q7O0VBQ0QsYUFBTyxLQUFLVixPQUFMLENBQWF3YSxVQUFiLENBQXdCeFosS0FBeEIsQ0FBUDtFQUNEOzs7OEJBRU9qQixTQUFTa0gsUUFBUW5ELFFBQVE5QyxPQUFPO0VBQ3RDLFVBQU02SCxVQUFVLEdBQUcsS0FBSzJRLE1BQUwsQ0FBWXhZLEtBQVosQ0FBbkI7RUFDQSxVQUFNOEgsUUFBUSxHQUFHLEtBQUswUSxNQUFMLENBQVksQ0FBQ3hZLEtBQUssR0FBQyxDQUFQLElBQVksS0FBS3dZLE1BQUwsQ0FBWXRWLE1BQXBDLENBQWpCO0VBQ0EsVUFBTWtYLEtBQUssR0FBRyxLQUFLQyxZQUFMLENBQWtCcmEsS0FBbEIsQ0FBZDtFQUVBakIsTUFBQUEsT0FBTyxDQUFDa1osU0FBUjtFQUNBbFosTUFBQUEsT0FBTyxDQUFDbVosTUFBUixDQUFlalMsTUFBTSxDQUFDNUksQ0FBdEIsRUFBeUI0SSxNQUFNLENBQUMzSSxDQUFoQztFQUNBeUIsTUFBQUEsT0FBTyxDQUFDdWIsR0FBUixDQUFZclUsTUFBTSxDQUFDNUksQ0FBbkIsRUFBc0I0SSxNQUFNLENBQUMzSSxDQUE3QixFQUFnQ3dGLE1BQWhDLEVBQXdDK0UsVUFBeEMsRUFBb0RDLFFBQXBELEVBQThELEtBQTlEO0VBQ0EvSSxNQUFBQSxPQUFPLENBQUNvWixNQUFSLENBQWVsUyxNQUFNLENBQUM1SSxDQUF0QixFQUF5QjRJLE1BQU0sQ0FBQzNJLENBQWhDO0VBQ0F5QixNQUFBQSxPQUFPLENBQUNxWixTQUFSO0VBQ0FyWixNQUFBQSxPQUFPLENBQUM0WSxTQUFSLEdBQW9CeUMsS0FBcEI7RUFDQXJiLE1BQUFBLE9BQU8sQ0FBQ3VaLElBQVI7RUFDRDs7O21DQUVZdFksT0FBTztFQUNsQixVQUFJNEUsS0FBSixFQUFXMlYsR0FBWDs7RUFDQSxVQUFJLEtBQUt2YixPQUFMLENBQWEwYSxRQUFqQixFQUEyQjtFQUN6QmEsUUFBQUEsR0FBRyxHQUFHLEtBQUt2YixPQUFMLENBQWEwYSxRQUFiLFlBQWlDM0QsS0FBakMsR0FBeUMsS0FBSy9XLE9BQUwsQ0FBYTBhLFFBQWIsQ0FBc0IxWixLQUF0QixDQUF6QyxHQUF3RSxLQUFLaEIsT0FBTCxDQUFhMGEsUUFBM0Y7RUFDRDs7RUFFRCxVQUFJYSxHQUFKLEVBQVM7RUFDUCxZQUFNM1UsS0FBSyxHQUFHSCxjQUFjLENBQUMsS0FBSytTLE1BQUwsQ0FBWXhZLEtBQVosQ0FBRCxDQUE1QjtFQUNBNEUsUUFBQUEsS0FBSyxHQUFHLElBQUl4SCxLQUFKLENBQVUsQ0FBVixFQUFhLENBQUNtZCxHQUFHLENBQUNyYyxNQUFMLEdBQWMsQ0FBM0IsQ0FBUjtFQUNBMEcsUUFBQUEsS0FBSyxHQUFHQSxLQUFLLENBQUN0RSxHQUFOLENBQVUsS0FBS3RCLE9BQUwsQ0FBYTJhLGNBQXZCLENBQVI7RUFDQSxhQUFLNWEsT0FBTCxDQUFheWIsU0FBYixDQUF1QixLQUFLcEQsYUFBTCxDQUFtQi9XLElBQW5CLENBQXdCaEQsQ0FBeEIsR0FBNEIsQ0FBbkQsRUFBc0QsS0FBSytaLGFBQUwsQ0FBbUIvVyxJQUFuQixDQUF3Qi9DLENBQXhCLEdBQTRCLENBQWxGO0VBQ0EsYUFBS3lCLE9BQUwsQ0FBYTBiLE1BQWIsQ0FBb0I3VSxLQUFwQjtFQUNBLGFBQUs3RyxPQUFMLENBQWEyYixTQUFiLENBQXVCSCxHQUF2QixFQUE0QjNWLEtBQUssQ0FBQ3ZILENBQWxDLEVBQXFDdUgsS0FBSyxDQUFDdEgsQ0FBM0M7RUFDQSxhQUFLeUIsT0FBTCxDQUFhNGIsWUFBYixDQUEwQixDQUExQixFQUE2QixDQUE3QixFQUFnQyxDQUFoQyxFQUFtQyxDQUFuQyxFQUFzQyxDQUF0QyxFQUF5QyxDQUF6QztFQUNEO0VBQ0Y7OztzQ0FFZTtFQUNkLFVBQU1uQyxNQUFNLEdBQUcsS0FBS0EsTUFBTCxDQUFZL1ksS0FBWixDQUFrQixDQUFsQixDQUFmO0VBQ0EsVUFBSW1iLFNBQVMsR0FBRyxLQUFLcEMsTUFBTCxDQUFZLENBQVosQ0FBaEI7RUFFQUEsTUFBQUEsTUFBTSxDQUFDMVksSUFBUCxDQUFZOGEsU0FBWjtFQUNBLGFBQU9wQyxNQUFNLENBQUNoTyxHQUFQLENBQVcsVUFBQzVFLEtBQUQsRUFBVztFQUMzQixZQUFNaVYsU0FBUyxHQUFHcFYsY0FBYyxDQUFDRyxLQUFLLEdBQUdnVixTQUFULENBQWhDO0VBQ0FBLFFBQUFBLFNBQVMsR0FBR2hWLEtBQVo7RUFDQSxlQUFPaVYsU0FBUDtFQUNELE9BSk0sQ0FBUDtFQUtEOzs7bUNBRVk7RUFDWCxhQUFPLEtBQUtDLGFBQUwsR0FBcUJ0USxHQUFyQixDQUF5QixVQUFDcVEsU0FBRDtFQUFBLGVBQWVBLFNBQVMsSUFBSSxJQUFJcGEsSUFBSSxDQUFDNkUsRUFBYixDQUF4QjtFQUFBLE9BQXpCLENBQVA7RUFDRDs7O3lDQUVrQjtFQUFBOztFQUNqQixhQUFPLEtBQUt3VixhQUFMLEdBQXFCdFEsR0FBckIsQ0FBeUIsVUFBQ3FRLFNBQUQsRUFBWTdYLENBQVosRUFBa0I7RUFDaEQsZUFBT3lDLGNBQWMsQ0FBQyxNQUFJLENBQUMrUyxNQUFMLENBQVl4VixDQUFaLElBQWlCNlgsU0FBUyxHQUFHLENBQTlCLENBQXJCO0VBQ0QsT0FGTSxDQUFQO0VBR0Q7OztvQ0FFYWpXLE9BQU87RUFDbkIsVUFBTWdCLEtBQUssR0FBR0wsUUFBUSxDQUFDLEtBQUt2RyxPQUFMLENBQWFpSCxNQUFkLEVBQXNCckIsS0FBdEIsQ0FBdEI7RUFDQSxVQUFNOUIsTUFBTSxHQUFHZCxXQUFXLENBQUMsS0FBS2hELE9BQUwsQ0FBYWlILE1BQWQsRUFBc0JyQixLQUF0QixDQUExQjs7RUFFQSxVQUFJOUIsTUFBTSxHQUFHLEtBQUs5RCxPQUFMLENBQWE4RCxNQUExQixFQUFrQztFQUNoQyxlQUFPLENBQUMsQ0FBUjtFQUNEOztFQUVELFVBQUl0QixNQUFNLEdBQUcsQ0FBQyxDQUFkO0VBQUEsVUFBaUJ3QixDQUFqQjtFQUFBLFVBQW9Ca1QsQ0FBcEI7O0VBQ0EsV0FBS2xULENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsR0FBRyxLQUFLd1YsTUFBTCxDQUFZdFYsTUFBNUIsRUFBb0NGLENBQUMsRUFBckMsRUFBeUM7RUFDdkMsWUFBSXhCLE1BQU0sS0FBSyxDQUFDLENBQVosSUFBaUIsS0FBS2dYLE1BQUwsQ0FBWWhYLE1BQVosSUFBc0IsS0FBS2dYLE1BQUwsQ0FBWXhWLENBQVosQ0FBM0MsRUFBMkQ7RUFDekR4QixVQUFBQSxNQUFNLEdBQUd3QixDQUFUO0VBQ0Q7RUFDRjs7RUFDRCxXQUFLQSxDQUFDLEdBQUcsQ0FBSixFQUFPa1QsQ0FBQyxHQUFHMVUsTUFBaEIsRUFBd0J3QixDQUFDLEdBQUcsS0FBS3dWLE1BQUwsQ0FBWXRWLE1BQXhDLEVBQWdERixDQUFDLElBQUlrVCxDQUFDLEdBQUcsQ0FBQ2xULENBQUMsR0FBR3hCLE1BQUwsSUFBZSxLQUFLZ1gsTUFBTCxDQUFZdFYsTUFBcEYsRUFBNEY7RUFDMUYsWUFBSTBDLEtBQUssR0FBRyxLQUFLNFMsTUFBTCxDQUFZdEMsQ0FBWixDQUFaLEVBQTRCO0VBQzFCO0VBQ0Q7RUFDRjs7RUFDRCxVQUFJLEVBQUVBLENBQUYsR0FBTSxDQUFWLEVBQWE7RUFDWEEsUUFBQUEsQ0FBQyxJQUFJLEtBQUtzQyxNQUFMLENBQVl0VixNQUFqQjtFQUNEOztFQUNELGFBQU9nVCxDQUFQO0VBQ0Q7OztnQ0FFU3NDLFFBQVE7RUFBQTs7RUFDaEIsV0FBS0EsTUFBTCxHQUFjQSxNQUFkO0VBQ0EsV0FBS2hQLFVBQUwsQ0FBZ0JYLE9BQWhCLENBQXdCLFVBQUNhLFNBQUQsRUFBWTFHLENBQVosRUFBa0I7RUFDeEMsWUFBTTRDLEtBQUssR0FBRyxNQUFJLENBQUM0UyxNQUFMLENBQVl4VixDQUFaLENBQWQ7RUFDQSxZQUFNNlUsUUFBUSxHQUFHbk8sU0FBUyxDQUFDa0ksT0FBVixHQUFvQnJSLElBQXBCLENBQXlCLEdBQXpCLENBQWpCO0VBQ0EsWUFBTUgsUUFBUSxHQUFHNEYsd0JBQXdCLENBQ3ZDSixLQUR1QyxFQUV2QyxNQUFJLENBQUM1RyxPQUFMLENBQWF1YSxXQUYwQixFQUd2QyxNQUFJLENBQUN2YSxPQUFMLENBQWFpSCxNQUFiLENBQW9CckYsR0FBcEIsQ0FBd0JpWCxRQUF4QixDQUh1QyxDQUF6QztFQU1Bbk8sUUFBQUEsU0FBUyxDQUFDcVIsV0FBVixDQUFzQjNhLFFBQXRCO0VBQ0QsT0FWRDtFQVdBLFdBQUswWCxJQUFMO0VBQ0Q7OzttQ0FFWTlYLE9BQU87RUFDbEIsVUFBTWdiLGFBQWEsR0FBRzVCLHdCQUF3QixDQUFDcFosS0FBRCxFQUFRLEtBQUt3SixVQUFMLENBQWdCdEcsTUFBeEIsQ0FBOUM7RUFDQSxXQUFLK1gsY0FBTCxHQUFzQmpiLEtBQXRCO0VBQ0EsV0FBS3dKLFVBQUwsQ0FBZ0JYLE9BQWhCLENBQXdCLFVBQUNhLFNBQUQsRUFBWTFHLENBQVosRUFBa0I7RUFDeEMwRyxRQUFBQSxTQUFTLENBQUN5TCxNQUFWLEdBQW1CNkYsYUFBYSxDQUFDL2EsT0FBZCxDQUFzQitDLENBQXRCLE1BQTZCLENBQUMsQ0FBakQ7RUFDRCxPQUZEO0VBR0EsV0FBSzhVLElBQUw7RUFDRDs7OztJQTdOZ0NoWjs7TUN0QjdCb1YsS0FBSyxHQUFHO0VBQ1o1TixFQUFBQSxnQkFBZ0IsRUFBaEJBLGdCQURZO0VBRVpJLEVBQUFBLGNBQWMsRUFBZEEsY0FGWTtFQUdaRSxFQUFBQSxZQUFZLEVBQVpBLFlBSFk7RUFJWkcsRUFBQUEsWUFBWSxFQUFaQSxZQUpZO0VBS1pHLEVBQUFBLFdBQVcsRUFBWEEsV0FMWTtFQU1aUyxFQUFBQSxhQUFhLEVBQWJBLGFBTlk7RUFPWkMsRUFBQUEsVUFBVSxFQUFWQTtFQVBZLENBQWQ7QUFVQSxNQUFNc1QsUUFBUSxHQUFHO0VBQ2ZsWixFQUFBQSxXQUFXLEVBQVhBLFdBRGU7RUFFZk0sRUFBQUEsY0FBYyxFQUFkQSxjQUZlO0VBR2ZFLEVBQUFBLGNBQWMsRUFBZEEsY0FIZTtFQUlmQyxFQUFBQSwrQkFBK0IsRUFBL0JBO0VBSmUsQ0FBakI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
