var Dragee = (function (exports) {
  'use strict';

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

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
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
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
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

        this._nativeDragOver = function (event) {
          return _this2.nativeDragOver(event);
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
          var isSafari = /version\/(\d+).+?safari/i.test(window.navigator.userAgent);

          if (isTouchEvent && this.emulateNativeDragAndDropOnTouch || isSafari || this.emulateNativeDragAndDropForAll) {
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
        document.removeEventListener('dragover', this._nativeDragOver);
        document.removeEventListener('dragend', this._nativeDragEnd);
        document.removeEventListener(mouseEvents.end, this._nativeDragEnd);
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
        this.element.removeAttribute('draggable');
        removeClass(this.element, 'dragee-active');
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
        document.removeEventListener('dragover', this._nativeDragOver);
        document.removeEventListener('dragend', this._nativeDragEnd);
        document.removeEventListener(mouseEvents.end, this._nativeDragEnd);
        document.removeEventListener('drop', this._nativeDrop);
        this.isDragging = false;
        this.element.removeAttribute('draggable');
        removeClass(this.element, 'dragee-active');
      }
    }, {
      key: "nativeDrop",
      value: function nativeDrop(event) {
        event.stopPropagation();
        event.preventDefault();
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
      key: "emulateNativeDragAndDropForAll",
      get: function get() {
        return this.options.emulateNativeDragAndDropForAll || false;
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
        var draggables = Array.from(elements).map(function (element) {
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

  return exports;

}({}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZGV2LmpzIiwic291cmNlcyI6WyIuLi9zcmMvZ2VvbWV0cnkvcG9pbnQuanMiLCIuLi9zcmMvdXRpbHMvY2xhc3Nlcy5qcyIsIi4uL3NyYy91dGlscy9nZXQtZGVmYXVsdC1wYXJlbnQuanMiLCIuLi9zcmMvZXZlbnRFbWl0dGVyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2Rlc2FuZHJvLWdldC1zdHlsZS1wcm9wZXJ0eS9nZXQtc3R5bGUtcHJvcGVydHkuanMiLCIuLi9zcmMvZ2VvbWV0cnkvcmVjdGFuZ2xlLmpzIiwiLi4vc3JjL2dlb21ldHJ5L2Rpc3RhbmNlcy5qcyIsIi4uL3NyYy9nZW9tZXRyeS9ib3VuZHMuanMiLCIuLi9zcmMvZ2VvbWV0cnkvYW5nbGVzLmpzIiwiLi4vc3JjL2JvdW5kaW5nLmpzIiwiLi4vc3JjL3V0aWxzL3JlbW92ZS1hcnJheS1pdGVtLmpzIiwiLi4vc3JjL3V0aWxzL3JhbmdlLmpzIiwiLi4vc3JjL3Bvc2l0aW9uaW5nLmpzIiwiLi4vc3JjL3RhcmdldC5qcyIsIi4uL3NyYy9zY29wZS5qcyIsIi4uL3NyYy91dGlscy9pcy1zdXBwb3J0LXBhc3NpdmUtZXZlbnRzLmpzIiwiLi4vc3JjL2RyYWdnYWJsZS5qcyIsIi4uL3NyYy9saXN0LmpzIiwiLi4vc3JjL3V0aWxzL2NyZWF0ZS1jYW52YXMuanMiLCIuLi9zcmMvc3BpZGVyLmpzIiwiLi4vc3JjL2FyY3NsaWRlci5qcyIsIi4uL3NyYy9jaGFydC5qcyIsIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBnZXRTdW1WYWx1ZU9mU3R5bGVSdWxlcyhlbGVtZW50LCBydWxlcykge1xuICByZXR1cm4gcnVsZXMucmVkdWNlKChzdW0sIHJ1bGUpID0+IHtcbiAgICByZXR1cm4gc3VtICsgcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudClbcnVsZV18fDApXG4gIH0sIDApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvaW50IHtcbiAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgIHRoaXMueCA9IHhcbiAgICB0aGlzLnkgPSB5XG4gIH1cblxuICBhZGQocCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54ICsgcC54LCB0aGlzLnkgKyBwLnkpXG4gIH1cblxuICBzdWIocCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54IC0gcC54LCB0aGlzLnkgLSBwLnkpXG4gIH1cblxuICBtdWx0KGspIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCAqIGssIHRoaXMueSAqIGspXG4gIH1cblxuICBuZWdhdGl2ZSgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KC10aGlzLngsIC10aGlzLnkpXG4gIH1cblxuICBjb21wYXJlKHApIHtcbiAgICByZXR1cm4gKHRoaXMueCA9PT0gcC54ICYmIHRoaXMueSA9PT0gcC55KVxuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLngsIHRoaXMueSlcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiBge3g9JHt0aGlzLnh9LHk9JHt0aGlzLnl9YFxuICB9XG5cbiAgc3RhdGljIGVsZW1lbnRPZmZzZXQoZWxlbWVudCwgcGFyZW50KSB7XG4gICAgcGFyZW50ID0gcGFyZW50IHx8IGVsZW1lbnQucGFyZW50Tm9kZVxuICAgIGNvbnN0IGVsZW1lbnRSZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIGNvbnN0IHBhcmVudFJlY3QgPSBwYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICByZXR1cm4gbmV3IFBvaW50KFxuICAgICAgZWxlbWVudFJlY3QubGVmdCAtIHBhcmVudFJlY3QubGVmdCxcbiAgICAgIGVsZW1lbnRSZWN0LnRvcCAtIHBhcmVudFJlY3QudG9wXG4gICAgKVxuICB9XG5cbiAgc3RhdGljIGVsZW1lbnRTaXplKGVsZW1lbnQsIGlzQ29udGVudEJveFNpemU9ZmFsc2UpIHtcbiAgICBsZXQgd2lkdGggPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KVsnd2lkdGgnXSlcbiAgICBsZXQgaGVpZ2h0ID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudClbJ2hlaWdodCddKVxuICAgIGlmICghaXNDb250ZW50Qm94U2l6ZSkge1xuICAgICAgd2lkdGggKz0gZ2V0U3VtVmFsdWVPZlN0eWxlUnVsZXMoZWxlbWVudCwgWydwYWRkaW5nLWxlZnQnLCAncGFkZGluZy1yaWdodCcsICdib3JkZXItbGVmdC13aWR0aCcsICdib3JkZXItcmlnaHQtd2lkdGgnXSlcbiAgICAgIGhlaWdodCArPSBnZXRTdW1WYWx1ZU9mU3R5bGVSdWxlcyhlbGVtZW50LCBbJ3BhZGRpbmctdG9wJywgJ3BhZGRpbmctYm90dG9tJywgJ2JvcmRlci10b3Atd2lkdGgnLCAnYm9yZGVyLWJvdHRvbS13aWR0aCddKVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFBvaW50KHdpZHRoLCBoZWlnaHQpXG4gIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBoYXNDbGFzcyhlbGVtZW50LCBjKSB7XG4gIGNvbnN0IHJlID0gbmV3IFJlZ0V4cCgnKF58XFxcXHMpJyArIGMgKyAnKFxcXFxzfCQpJywgJ2cnKVxuICByZXR1cm4gKHJlLnRlc3QoZWxlbWVudC5jbGFzc05hbWUpKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQ2xhc3MoZWxlbWVudCwgYykge1xuICBpZiAoIWhhc0NsYXNzKGVsZW1lbnQsIGMpKSB7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSAoZWxlbWVudC5jbGFzc05hbWUgKyAnICcgKyBjKS5yZXBsYWNlKC9cXHMrL2csICcgJykucmVwbGFjZSgvKF4gfCAkKS9nLCAnJylcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoZWxlbWVudCwgYykge1xuICBjb25zdCByZSA9IG5ldyBSZWdFeHAoJyhefFxcXFxzKScgKyBjICsgJyhcXFxcc3wkKScsICdnJylcbiAgZWxlbWVudC5jbGFzc05hbWUgPSBlbGVtZW50LmNsYXNzTmFtZS5yZXBsYWNlKHJlLCAnJDEnKS5yZXBsYWNlKC9cXHMrL2csICcgJykucmVwbGFjZSgvKF4gfCAkKS9nLCAnJylcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldERlZmF1bHRQYXJlbnQoZWxlbWVudCkge1xuICBsZXQgcGFyZW50ID0gZWxlbWVudC5wYXJlbnROb2RlXG4gIHdoaWxlIChwYXJlbnQucGFyZW50Tm9kZSAmJiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShwYXJlbnQpWydwb3NpdGlvbiddID09PSAnc3RhdGljJyAmJiBwYXJlbnQudGFnTmFtZSAhPT0gJ0JPRFknKSB7XG4gICAgcGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGVcbiAgfVxuICByZXR1cm4gcGFyZW50XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAoY29udGV4dCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dCB8fCB0aGlzXG4gICAgdGhpcy5ldmVudHMgPSB7fVxuXG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5vbikge1xuICAgICAgZm9yIChjb25zdCBbZXZlbnROYW1lLCBmbl0gb2YgT2JqZWN0LmVudHJpZXMob3B0aW9ucy5vbikpIHtcbiAgICAgICAgdGhpcy5vbihldmVudE5hbWUsIGZuKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGVtaXQoZXZlbnROYW1lKSB7XG4gICAgdGhpcy5pbnRlcnJ1cHRlZCA9IGZhbHNlXG4gICAgY29uc3QgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKVxuXG4gICAgaWYgKCF0aGlzLmV2ZW50c1tldmVudE5hbWVdKSByZXR1cm5cblxuICAgIGZvciAoY29uc3QgZnVuYyBvZiB0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICBmdW5jLmFwcGx5KHRoaXMuY29udGV4dCwgYXJncylcbiAgICAgIGlmICh0aGlzLmludGVycnVwdGVkKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGludGVycnVwdCgpIHtcbiAgICB0aGlzLmludGVycnVwdGVkID0gdHJ1ZVxuICB9XG5cbiAgb24oZXZlbnROYW1lLCBmbikge1xuICAgIGlmICghdGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IFtdXG4gICAgfVxuXG4gICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5wdXNoKGZuKVxuICB9XG5cbiAgcHJlcGVuZE9uKGV2ZW50TmFtZSwgZm4pIHtcbiAgICBpZiAoIXRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSBbXVxuICAgIH1cblxuICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0udW5zaGlmdChmbilcbiAgfVxuXG4gIHVuc3Vic2NyaWJlKGV2ZW50TmFtZSwgZm4pIHtcbiAgICBpZiAodGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmV2ZW50c1tldmVudE5hbWVdLmluZGV4T2YoZm4pXG4gICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLnNwbGljZShpbmRleCwgMSlcbiAgICB9XG4gIH1cblxuICByZXNldEVtaXR0ZXIgKCkge1xuICAgIHRoaXMuZXZlbnRzID0ge31cbiAgfVxuXG4gIHJlc2V0T24oZXZlbnROYW1lKSB7XG4gICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IFtdXG4gIH1cbn1cbiIsIi8qIVxuICogZ2V0U3R5bGVQcm9wZXJ0eSB2MS4wLjRcbiAqIG9yaWdpbmFsIGJ5IGthbmdheFxuICogaHR0cDovL3BlcmZlY3Rpb25raWxscy5jb20vZmVhdHVyZS10ZXN0aW5nLWNzcy1wcm9wZXJ0aWVzL1xuICogTUlUIGxpY2Vuc2VcbiAqL1xuXG4vKmpzaGludCBicm93c2VyOiB0cnVlLCBzdHJpY3Q6IHRydWUsIHVuZGVmOiB0cnVlICovXG4vKmdsb2JhbCBkZWZpbmU6IGZhbHNlLCBleHBvcnRzOiBmYWxzZSwgbW9kdWxlOiBmYWxzZSAqL1xuXG4oIGZ1bmN0aW9uKCB3aW5kb3cgKSB7XG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHByZWZpeGVzID0gJ1dlYmtpdCBNb3ogbXMgTXMgTycuc3BsaXQoJyAnKTtcbnZhciBkb2NFbGVtU3R5bGUgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGU7XG5cbmZ1bmN0aW9uIGdldFN0eWxlUHJvcGVydHkoIHByb3BOYW1lICkge1xuICBpZiAoICFwcm9wTmFtZSApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyB0ZXN0IHN0YW5kYXJkIHByb3BlcnR5IGZpcnN0XG4gIGlmICggdHlwZW9mIGRvY0VsZW1TdHlsZVsgcHJvcE5hbWUgXSA9PT0gJ3N0cmluZycgKSB7XG4gICAgcmV0dXJuIHByb3BOYW1lO1xuICB9XG5cbiAgLy8gY2FwaXRhbGl6ZVxuICBwcm9wTmFtZSA9IHByb3BOYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcHJvcE5hbWUuc2xpY2UoMSk7XG5cbiAgLy8gdGVzdCB2ZW5kb3Igc3BlY2lmaWMgcHJvcGVydGllc1xuICB2YXIgcHJlZml4ZWQ7XG4gIGZvciAoIHZhciBpPTAsIGxlbiA9IHByZWZpeGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrICkge1xuICAgIHByZWZpeGVkID0gcHJlZml4ZXNbaV0gKyBwcm9wTmFtZTtcbiAgICBpZiAoIHR5cGVvZiBkb2NFbGVtU3R5bGVbIHByZWZpeGVkIF0gPT09ICdzdHJpbmcnICkge1xuICAgICAgcmV0dXJuIHByZWZpeGVkO1xuICAgIH1cbiAgfVxufVxuXG4vLyB0cmFuc3BvcnRcbmlmICggdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAvLyBBTURcbiAgZGVmaW5lKCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZ2V0U3R5bGVQcm9wZXJ0eTtcbiAgfSk7XG59IGVsc2UgaWYgKCB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgKSB7XG4gIC8vIENvbW1vbkpTIGZvciBDb21wb25lbnRcbiAgbW9kdWxlLmV4cG9ydHMgPSBnZXRTdHlsZVByb3BlcnR5O1xufSBlbHNlIHtcbiAgLy8gYnJvd3NlciBnbG9iYWxcbiAgd2luZG93LmdldFN0eWxlUHJvcGVydHkgPSBnZXRTdHlsZVByb3BlcnR5O1xufVxuXG59KSggd2luZG93ICk7XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9wb2ludCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVjdGFuZ2xlIHtcbiAgY29uc3RydWN0b3IocG9zaXRpb24sIHNpemUpIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb25cbiAgICB0aGlzLnNpemUgPSBzaXplXG4gIH1cblxuICBnZXRQMSgpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvblxuICB9XG5cbiAgZ2V0UDIoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnNpemUueCwgdGhpcy5wb3NpdGlvbi55KVxuICB9XG5cbiAgZ2V0UDMoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb24uYWRkKHRoaXMuc2l6ZSlcbiAgfVxuXG4gIGdldFA0KCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSlcbiAgfVxuXG4gIGdldENlbnRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi5hZGQodGhpcy5zaXplLm11bHQoMC41KSlcbiAgfVxuXG4gIG9yKHJlY3QpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IG5ldyBQb2ludChNYXRoLm1pbih0aGlzLnBvc2l0aW9uLngsIHJlY3QucG9zaXRpb24ueCksIE1hdGgubWluKHRoaXMucG9zaXRpb24ueSwgcmVjdC5wb3NpdGlvbi55KSlcbiAgICBjb25zdCBzaXplID0gKG5ldyBQb2ludChNYXRoLm1heCh0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnNpemUueCwgcmVjdC5wb3NpdGlvbi54ICsgcmVjdC5zaXplLngpLCBNYXRoLm1heCh0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSwgcmVjdC5wb3NpdGlvbi55ICsgcmVjdC5zaXplLnkpKSkuc3ViKHBvc2l0aW9uKVxuICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHBvc2l0aW9uLCBzaXplKVxuICB9XG5cbiAgYW5kKHJlY3QpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IG5ldyBQb2ludChNYXRoLm1heCh0aGlzLnBvc2l0aW9uLngsIHJlY3QucG9zaXRpb24ueCksIE1hdGgubWF4KHRoaXMucG9zaXRpb24ueSwgcmVjdC5wb3NpdGlvbi55KSlcbiAgICBjb25zdCBzaXplID0gKG5ldyBQb2ludChNYXRoLm1pbih0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnNpemUueCwgcmVjdC5wb3NpdGlvbi54ICsgcmVjdC5zaXplLngpLCBNYXRoLm1pbih0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSwgcmVjdC5wb3NpdGlvbi55ICsgcmVjdC5zaXplLnkpKSkuc3ViKHBvc2l0aW9uKVxuICAgIGlmIChzaXplLnggPD0gMCB8fCBzaXplLnkgPD0gMCkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUocG9zaXRpb24sIHNpemUpXG4gIH1cblxuICBpbmNsdWRlUG9pbnQocCkge1xuICAgIHJldHVybiAhKHRoaXMucG9zaXRpb24ueCA+IHAueCB8fCB0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnNpemUueCA8IHAueCB8fCB0aGlzLnBvc2l0aW9uLnkgPiBwLnkgfHwgdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnkgPCBwLnkpXG4gIH1cblxuICBpbmNsdWRlUmVjdGFuZ2xlKHJlY3RhbmdsZSkge1xuICAgIHJldHVybiB0aGlzLmluY2x1ZGVQb2ludChyZWN0YW5nbGUucG9zaXRpb24pICYmIHRoaXMuaW5jbHVkZVBvaW50KHJlY3RhbmdsZS5nZXRQMygpKVxuICB9XG5cbiAgbW92ZVRvQm91bmQocmVjdCwgYXhpcykge1xuICAgIGxldCBzZWxBeGlzLCBjcm9zc1JlY3RhbmdsZVxuICAgIGlmIChheGlzKSB7XG4gICAgICBzZWxBeGlzID0gYXhpc1xuICAgIH0gZWxzZSB7XG4gICAgICBjcm9zc1JlY3RhbmdsZSA9IHRoaXMuYW5kKHJlY3QpXG4gICAgICBpZiAoIWNyb3NzUmVjdGFuZ2xlKSB7XG4gICAgICAgIHJldHVybiByZWN0XG4gICAgICB9XG4gICAgICBzZWxBeGlzID0gY3Jvc3NSZWN0YW5nbGUuc2l6ZS54ID4gY3Jvc3NSZWN0YW5nbGUuc2l6ZS55ID8gJ3knIDogJ3gnXG4gICAgfVxuICAgIGNvbnN0IHRoaXNDZW50ZXIgPSB0aGlzLmdldENlbnRlcigpXG4gICAgY29uc3QgcmVjdENlbnRlciA9IHJlY3QuZ2V0Q2VudGVyKClcbiAgICBjb25zdCBzaWduID0gdGhpc0NlbnRlcltzZWxBeGlzXSA+IHJlY3RDZW50ZXJbc2VsQXhpc10gPyAtMSA6IDFcbiAgICBjb25zdCBvZmZzZXQgPSBzaWduID4gMCA/IHRoaXMucG9zaXRpb25bc2VsQXhpc10gKyB0aGlzLnNpemVbc2VsQXhpc10gLSByZWN0LnBvc2l0aW9uW3NlbEF4aXNdIDogdGhpcy5wb3NpdGlvbltzZWxBeGlzXSAtIChyZWN0LnBvc2l0aW9uW3NlbEF4aXNdICsgcmVjdC5zaXplW3NlbEF4aXNdKVxuICAgIHJlY3QucG9zaXRpb25bc2VsQXhpc10gPSByZWN0LnBvc2l0aW9uW3NlbEF4aXNdICsgb2Zmc2V0XG4gICAgcmV0dXJuIHJlY3RcbiAgfVxuXG4gIGdldFNxdWFyZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zaXplLnggKiB0aGlzLnNpemUueVxuICB9XG5cbiAgc3R5bGVBcHBseShlbCkge1xuICAgIGVsID0gZWwgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5kJylcbiAgICBlbC5zdHlsZS5sZWZ0ID0gdGhpcy5wb3NpdGlvbi54ICsgJ3B4J1xuICAgIGVsLnN0eWxlLnRvcCA9IHRoaXMucG9zaXRpb24ueSArICdweCdcbiAgICBlbC5zdHlsZS53aWR0aCA9IHRoaXMuc2l6ZS54ICsgJ3B4J1xuICAgIGVsLnN0eWxlLmhlaWdodCA9IHRoaXMuc2l6ZS55ICsgJ3B4J1xuICB9XG5cbiAgZ3Jvd3RoKHNpemUpIHtcbiAgICB0aGlzLnNpemUgPSB0aGlzLnNpemUuYWRkKHNpemUpXG4gICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMucG9zaXRpb24uYWRkKHNpemUubXVsdCgtMC41KSlcbiAgfVxuXG4gIGdldE1pblNpZGUoKSB7XG4gICAgcmV0dXJuIE1hdGgubWluKHRoaXMuc2l6ZS54LCB0aGlzLnNpemUueSlcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRWxlbWVudChlbGVtZW50LCBwYXJlbnQ9ZWxlbWVudC5wYXJlbnROb2RlLCBpc0NvbnRlbnRCb3hTaXplPWZhbHNlLCBpc0NvbnNpZGVyVHJhbnNsYXRlPWZhbHNlKSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBQb2ludC5lbGVtZW50T2Zmc2V0KGVsZW1lbnQsIHBhcmVudCwgaXNDb25zaWRlclRyYW5zbGF0ZSlcbiAgICBjb25zdCBzaXplID0gUG9pbnQuZWxlbWVudFNpemUoZWxlbWVudCwgaXNDb250ZW50Qm94U2l6ZSlcbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZShwb3NpdGlvbiwgc2l6ZSlcbiAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldERpc3RhbmNlKHAxLCBwMikge1xuICBjb25zdCBkeCA9IHAxLnggLSBwMi54LCBkeSA9IHAxLnkgLSBwMi55XG4gIHJldHVybiBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRYRGlmZmVyZW5jZShwMSwgcDIpIHtcbiAgcmV0dXJuIE1hdGguYWJzKHAxLnggLSBwMi54KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0WURpZmZlcmVuY2UocDEsIHAyKSB7XG4gIHJldHVybiBNYXRoLmFicyhwMS55IC0gcDIueSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3Rvcnkob3B0aW9ucykge1xuICByZXR1cm4gKHAxLCBwMikgPT4ge1xuICAgIHJldHVybiBNYXRoLnNxcnQoXG4gICAgICBNYXRoLnBvdyhvcHRpb25zLnggKiBNYXRoLmFicyhwMS54IC0gcDIueCksIDIpICtcbiAgICAgIE1hdGgucG93KG9wdGlvbnMueSAqIE1hdGguYWJzKHAxLnkgLSBwMi55KSwgMilcbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluZGV4T2ZOZWFyZXN0UG9pbnQoYXJyLCB2YWwsIHJhZGl1cywgZ2V0RGlzdGFuY2VGdW5jPWdldERpc3RhbmNlKSB7XG4gIGxldCBzaXplLCBpbmRleCA9IDAsIGksIHRlbXBcbiAgaWYgKGFyci5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gLTFcbiAgfVxuICBzaXplID0gZ2V0RGlzdGFuY2VGdW5jKGFyclswXSwgdmFsKVxuICBmb3IgKGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgdGVtcCA9IGdldERpc3RhbmNlRnVuYyhhcnJbaV0sIHZhbClcbiAgICBpZiAodGVtcCA8IHNpemUpIHtcbiAgICAgIHNpemUgPSB0ZW1wXG4gICAgICBpbmRleCA9IGlcbiAgICB9XG4gIH1cbiAgaWYgKHJhZGl1cyA+PSAwICYmIHNpemUgPiByYWRpdXMpIHtcbiAgICByZXR1cm4gLTFcbiAgfVxuICByZXR1cm4gaW5kZXhcbn1cbiIsImltcG9ydCBQb2ludCBmcm9tICcuL3BvaW50J1xuaW1wb3J0IHsgZ2V0RGlzdGFuY2UgfSBmcm9tICcuL2Rpc3RhbmNlcydcblxuZXhwb3J0IGZ1bmN0aW9uIGNsYW1wKG1pbiwgbWF4LCB2YWwpIHtcbiAgcmV0dXJuIE1hdGgubWF4KG1pbiwgTWF0aC5taW4obWF4LCB2YWwpKVxufVxuXG4vL1JldHVybiBjcm9zc2luZyBwb2ludCBvZiB0d28gbGluZXNcbmV4cG9ydCBmdW5jdGlvbiBkaXJlY3RDcm9zc2luZyhMMVAxLCBMMVAyLCBMMlAxLCBMMlAyKSB7XG4gIGxldCB0ZW1wLCBrMSwgazIsIGIxLCBiMiwgeCwgeVxuICBpZiAoTDJQMS54ID09PSBMMlAyLngpIHtcbiAgICB0ZW1wID0gTDJQMVxuICAgIEwyUDEgPSBMMVAxXG4gICAgTDFQMSA9IHRlbXBcbiAgICB0ZW1wID0gTDJQMlxuICAgIEwyUDIgPSBMMVAyXG4gICAgTDFQMiA9IHRlbXBcbiAgfVxuICBpZiAoTDFQMS54ID09PSBMMVAyLngpIHtcbiAgICBrMiA9IChMMlAyLnkgLSBMMlAxLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICBiMiA9IChMMlAyLnggKiBMMlAxLnkgLSBMMlAxLnggKiBMMlAyLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICB4ID0gTDFQMS54XG4gICAgeSA9IHggKiBrMiArIGIyXG4gICAgcmV0dXJuIG5ldyBQb2ludCh4LCB5KVxuICB9IGVsc2Uge1xuICAgIGsxID0gKEwxUDIueSAtIEwxUDEueSkgLyAoTDFQMi54IC0gTDFQMS54KVxuICAgIGIxID0gKEwxUDIueCAqIEwxUDEueSAtIEwxUDEueCAqIEwxUDIueSkgLyAoTDFQMi54IC0gTDFQMS54KVxuICAgIGsyID0gKEwyUDIueSAtIEwyUDEueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgIGIyID0gKEwyUDIueCAqIEwyUDEueSAtIEwyUDEueCAqIEwyUDIueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgIHggPSAoYjEgLSBiMikgLyAoazIgLSBrMSlcbiAgICB5ID0geCAqIGsxICsgYjFcbiAgICByZXR1cm4gbmV3IFBvaW50KHgsIHkpXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kVG9TZWdtZW50KExQMSwgTFAyLCBQKSB7XG4gIGxldCB4LCB5XG4gIHggPSBjbGFtcChNYXRoLm1pbihMUDEueCwgTFAyLngpLCBNYXRoLm1heChMUDEueCwgTFAyLngpLCBQLngpXG4gIGlmICh4ICE9PSBQLngpIHtcbiAgICB5ID0gKHggPT09IExQMS54KSA/IExQMS55IDogTFAyLnlcbiAgICBQID0gbmV3IFBvaW50KHgsIHkpXG4gIH1cblxuICB5ID0gY2xhbXAoTWF0aC5taW4oTFAxLnksIExQMi55KSwgTWF0aC5tYXgoTFAxLnksIExQMi55KSwgUC55KVxuICBpZiAoeSAhPT0gUC55KSB7XG4gICAgeCA9ICh5ID09PSBMUDEueSkgPyBMUDEueCA6IExQMi54XG4gICAgUCA9IG5ldyBQb2ludCh4LCB5KVxuICB9XG5cbiAgcmV0dXJuIFBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kVG9MaW5lKEEsIEIsIFApIHtcbiAgY29uc3QgQVAgPSBuZXcgUG9pbnQoUC54IC0gQS54LCBQLnkgLSBBLnkpLFxuICAgIEFCID0gbmV3IFBvaW50KEIueCAtIEEueCwgQi55IC0gQS55KSxcbiAgICBhYjIgPSBBQi54ICogQUIueCArIEFCLnkgKiBBQi55LFxuICAgIGFwX2FiID0gQVAueCAqIEFCLnggKyBBUC55ICogQUIueSxcbiAgICB0ID0gYXBfYWIgLyBhYjJcbiAgcmV0dXJuIG5ldyBQb2ludChBLnggKyBBQi54ICogdCwgQS55ICsgQUIueSAqIHQpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb2ludE9uTGluZShMUDEsIExQMiwgcGVyY2VudCkge1xuICBjb25zdCBkeCA9IExQMi54IC0gTFAxLngsIGR5ID0gTFAyLnkgLSBMUDEueVxuICByZXR1cm4gbmV3IFBvaW50KExQMS54ICsgcGVyY2VudCAqIGR4LCBMUDEueSArIHBlcmNlbnQgKiBkeSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBvaW50T25MaW5lQnlMZW5naHQoTFAxLCBMUDIsIGxlbmdodCkge1xuICBjb25zdCBkeCA9IExQMi54IC0gTFAxLnhcbiAgY29uc3QgZHkgPSBMUDIueSAtIExQMS55XG4gIGNvbnN0IHBlcmNlbnQgPSBsZW5naHQgLyBnZXREaXN0YW5jZShMUDEsIExQMilcbiAgcmV0dXJuIG5ldyBQb2ludChMUDEueCArIHBlcmNlbnQgKiBkeCwgTFAxLnkgKyBwZXJjZW50ICogZHkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRQb2ludFRvQm91bmRQb2ludHMoYm91bmRwb2ludHMsIHBvaW50LCBpc1JpZ2h0KSB7XG4gIGNvbnN0IHJlc3VsdCA9IGJvdW5kcG9pbnRzLmZpbHRlcigoYlBvaW50KSA9PiB7XG4gICAgcmV0dXJuIGJQb2ludC55ID4gcG9pbnQueSB8fCAoaXNSaWdodCA/IGJQb2ludC54IDwgcG9pbnQueCA6IGJQb2ludC54ID4gcG9pbnQueClcbiAgfSlcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChwb2ludC55IDwgcmVzdWx0W2ldLnkpIHtcbiAgICAgIHJlc3VsdC5zcGxpY2UoaSwgMCwgcG9pbnQpXG4gICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxuICB9XG4gIHJlc3VsdC5wdXNoKHBvaW50KVxuICByZXR1cm4gcmVzdWx0XG59XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9wb2ludCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFuZ2xlRGlmZihhbHBoYSwgYmV0YSkge1xuICBjb25zdCBtaW5BbmdsZSA9IE1hdGgubWluKGFscGhhLCBiZXRhKVxuICBjb25zdCBtYXhBbmdsZSA9ICBNYXRoLm1heChhbHBoYSwgYmV0YSlcbiAgcmV0dXJuIE1hdGgubWluKG1heEFuZ2xlIC0gbWluQW5nbGUsIG1pbkFuZ2xlICsgTWF0aC5QSSoyIC0gbWF4QW5nbGUpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbmdsZShwMSwgcDIpIHtcbiAgY29uc3QgZGlmZiA9IHAyLnN1YihwMSlcbiAgcmV0dXJuIG5vcm1hbGl6ZUFuZ2xlKE1hdGguYXRhbjIoZGlmZi55LCBkaWZmLngpKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9SYWRpYW4oYW5nbGUpIHtcbiAgcmV0dXJuICgoYW5nbGUgJSAzNjApICogTWF0aC5QSSAvIDE4MClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvRGVncmVlKGFuZ2xlKSB7XG4gIHJldHVybiAoYW5nbGUgKiAxODAgLyBNYXRoLlBJKSAlIDM2MFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRBbmdsZShtaW4sIG1heCwgdmFsKSB7XG4gIGxldCBkbWluLCBkbWF4XG4gIGlmIChtaW4gPCBtYXggJiYgdmFsID4gbWluICYmIHZhbCA8IG1heCkge1xuICAgIHJldHVybiB2YWxcbiAgfSBlbHNlIGlmIChtYXggPCBtaW4gJiYgKHZhbCA8IG1heCB8fCB2YWwgPiBtaW4pKSB7XG4gICAgcmV0dXJuIHZhbFxuICB9IGVsc2Uge1xuICAgIGRtaW4gPSBnZXRBbmdsZURpZmYobWluLCB2YWwpXG4gICAgZG1heCA9IGdldEFuZ2xlRGlmZihtYXgsIHZhbClcbiAgICBpZiAoZG1pbiA8IGRtYXgpIHtcbiAgICAgIHJldHVybiBtaW5cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG1heFxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmVhcmVzdEFuZ2xlKGFyciwgYW5nbGUpIHtcbiAgbGV0IGksIHRlbXAsIGRpZmYgPSBNYXRoLlBJICogMiwgdmFsdWVcbiAgZm9yIChpID0gMDsgaSA8IGFyci5sZW5ndGg7aSsrKSB7XG4gICAgdGVtcCA9IGdldEFuZ2xlRGlmZihhcnJbaV0sIGFuZ2xlKVxuICAgIGlmIChkaWZmIDwgdGVtcCkge1xuICAgICAgZGlmZiA9IHRlbXBcbiAgICAgIHZhbHVlID0gYXJyW2ldXG4gICAgfVxuICB9XG4gIHJldHVybiB2YWx1ZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplQW5nbGUodmFsKSB7XG4gIHdoaWxlICh2YWwgPCAwKSB7XG4gICAgdmFsICs9IDIgKiBNYXRoLlBJXG4gIH1cbiAgd2hpbGUgKHZhbCA+IDIgKiBNYXRoLlBJKSB7XG4gICAgdmFsIC09IDIgKiBNYXRoLlBJXG4gIH1cbiAgcmV0dXJuIHZhbFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKGFuZ2xlLCBsZW5ndGgsIGNlbnRlcikge1xuICBjZW50ZXIgPSBjZW50ZXIgfHwgbmV3IFBvaW50KDAsIDApXG4gIHJldHVybiBjZW50ZXIuYWRkKG5ldyBQb2ludChsZW5ndGggKiBNYXRoLmNvcyhhbmdsZSksIGxlbmd0aCAqIE1hdGguc2luKGFuZ2xlKSkpXG59XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9nZW9tZXRyeS9wb2ludCdcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSAnLi9nZW9tZXRyeS9yZWN0YW5nbGUnXG5pbXBvcnQge1xuICBnZXRQb2ludE9uTGluZUJ5TGVuZ2h0LFxuICBkaXJlY3RDcm9zc2luZyxcbiAgYm91bmRUb0xpbmVcbn0gZnJvbSAnLi9nZW9tZXRyeS9ib3VuZHMnXG5cbmltcG9ydCB7XG4gIGdldEFuZ2xlLFxuICBub3JtYWxpemVBbmdsZSxcbiAgYm91bmRBbmdsZSxcbiAgZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtXG59IGZyb20gJy4vZ2VvbWV0cnkvYW5nbGVzJ1xuXG5leHBvcnQgY2xhc3MgQm91bmQge1xuICBjb25zdHJ1Y3RvciAoKSB7fVxuXG4gIGJvdW5kKHBvaW50LCBfc2l6ZSkge1xuICAgIHJldHVybiBwb2ludFxuICB9XG5cbiAgcmVmcmVzaCAoKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb1JlY3RhbmdsZSBleHRlbmRzIEJvdW5kIHtcbiAgY29uc3RydWN0b3IocmVjdGFuZ2xlKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMucmVjdGFuZ2xlID0gcmVjdGFuZ2xlXG4gIH1cblxuICBib3VuZChwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IGNhbGNQb2ludCA9IHBvaW50LmNsb25lKClcbiAgICBjb25zdCByZWN0UDIgPSB0aGlzLnJlY3RhbmdsZS5nZXRQMygpXG5cbiAgICBpZiAodGhpcy5yZWN0YW5nbGUucG9zaXRpb24ueCA+IGNhbGNQb2ludC54KSB7XG4gICAgICAoY2FsY1BvaW50LnggPSB0aGlzLnJlY3RhbmdsZS5wb3NpdGlvbi54KVxuICAgIH1cbiAgICBpZiAodGhpcy5yZWN0YW5nbGUucG9zaXRpb24ueSA+IGNhbGNQb2ludC55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHRoaXMucmVjdGFuZ2xlLnBvc2l0aW9uLnlcbiAgICB9XG4gICAgaWYgKHJlY3RQMi54IDwgY2FsY1BvaW50LnggKyBzaXplLngpIHtcbiAgICAgIGNhbGNQb2ludC54ID0gcmVjdFAyLnggLSBzaXplLnhcbiAgICB9XG4gICAgaWYgKHJlY3RQMi55IDwgY2FsY1BvaW50LnkgKyBzaXplLnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gcmVjdFAyLnkgLSBzaXplLnlcbiAgICB9XG5cbiAgICByZXR1cm4gY2FsY1BvaW50XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9FbGVtZW50IGV4dGVuZHMgQm91bmRUb1JlY3RhbmdsZSB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIHBhcmVudCkge1xuICAgIHN1cGVyKFJlY3RhbmdsZS5mcm9tRWxlbWVudChlbGVtZW50LCBwYXJlbnQpKVxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudFxuICB9XG5cbiAgcmVmcmVzaCAoKSB7XG4gICAgdGhpcy5yZWN0YW5nbGUgPSBSZWN0YW5nbGUuZnJvbUVsZW1lbnQodGhpcy5lbGVtZW50LCB0aGlzLnBhcmVudClcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb0xpbmVYIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3Rvcih4LCBzdGFydFksIGVuZFkpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy54ID0geFxuICAgIHRoaXMuc3RhcnRZID0gc3RhcnRZXG4gICAgdGhpcy5lbmRZID0gZW5kWVxuICB9XG5cbiAgYm91bmQocG9pbnQsIHNpemUpIHtcbiAgICBjb25zdCBjYWxjUG9pbnQgPSBwb2ludC5jbG9uZSgpXG5cbiAgICBjYWxjUG9pbnQueCA9IHRoaXMueFxuICAgIGlmICh0aGlzLnN0YXJ0WSA+IGNhbGNQb2ludC55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHRoaXMuc3RhcnRZXG4gICAgfVxuICAgIGlmICh0aGlzLmVuZFkgPCBjYWxjUG9pbnQueSArIHNpemUueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSB0aGlzLmVuZFkgLSBzaXplLnlcbiAgICB9XG5cbiAgICByZXR1cm4gY2FsY1BvaW50XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9MaW5lWSBleHRlbmRzIEJvdW5kIHtcbiAgY29uc3RydWN0b3IoeSwgc3RhcnRYLCBlbmRYKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMueSA9IHlcbiAgICB0aGlzLnN0YXJ0WCA9IHN0YXJ0WFxuICAgIHRoaXMuZW5kWCA9IGVuZFhcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgY2FsY1BvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIGNhbGNQb2ludC55ID0gdGhpcy55XG4gICAgaWYgKHRoaXMuc3RhcnRYID4gY2FsY1BvaW50LngpIHtcbiAgICAgIGNhbGNQb2ludC54ID0gdGhpcy5zdGFydFhcbiAgICB9XG4gICAgaWYgKHRoaXMuZW5kWCA8IGNhbGNQb2ludC54ICsgc2l6ZS54KSB7XG4gICAgICBjYWxjUG9pbnQueCA9IHRoaXMuZW5kWCAtIHNpemUueFxuICAgIH1cbiAgICByZXR1cm4gY2FsY1BvaW50XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9MaW5lIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3RvcihzdGFydFBvaW50LCBlbmRQb2ludCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnN0YXJ0UG9pbnQgPSBzdGFydFBvaW50XG4gICAgdGhpcy5lbmRQb2ludCA9IGVuZFBvaW50XG4gICAgY29uc3QgYWxwaGEgPSBNYXRoLmF0YW4yKGVuZFBvaW50LnkgLSBzdGFydFBvaW50LnksIGVuZFBvaW50LnggLSBzdGFydFBvaW50LngpXG4gICAgY29uc3QgYmV0YSA9IGFscGhhICsgTWF0aC5QSSAvIDJcbiAgICB0aGlzLnNvbWVLID0gMTBcbiAgICB0aGlzLmNvc0JldGEgPSBNYXRoLmNvcyhiZXRhKVxuICAgIHRoaXMuc2luQmV0YSA9IE1hdGguc2luKGJldGEpXG4gIH1cblxuICBib3VuZChwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IHBvaW50MiA9IG5ldyBQb2ludChcbiAgICAgIHBvaW50LnggKyB0aGlzLnNvbWVLICogdGhpcy5jb3NCZXRhLFxuICAgICAgcG9pbnQueSArIHRoaXMuc29tZUsgKiB0aGlzLnNpbkJldGFcbiAgICApXG5cbiAgICBjb25zdCBuZXdFbmRQb2ludCA9IGdldFBvaW50T25MaW5lQnlMZW5naHQodGhpcy5lbmRQb2ludCwgdGhpcy5zdGFydFBvaW50LCBzaXplLngpXG4gICAgY29uc3QgcG9pbnRDcm9zc2luZyA9IGRpcmVjdENyb3NzaW5nKHRoaXMuc3RhcnRQb2ludCwgdGhpcy5lbmRQb2ludCwgcG9pbnQsIHBvaW50MilcblxuICAgIHJldHVybiBib3VuZFRvTGluZSh0aGlzLnN0YXJ0UG9pbnQsIG5ld0VuZFBvaW50LCBwb2ludENyb3NzaW5nKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvQ2lyY2xlIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3RvcihjZW50ZXIsIHJhZGl1cykge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLmNlbnRlciA9IGNlbnRlclxuICAgIHRoaXMucmFkaXVzID0gcmFkaXVzXG4gIH1cblxuICBib3VuZChwb2ludCwgX3NpemUpIHtcbiAgICByZXR1cm4gZ2V0UG9pbnRPbkxpbmVCeUxlbmdodCh0aGlzLmNlbnRlciwgcG9pbnQsIHRoaXMucmFkaXVzKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvQXJjIGV4dGVuZHMgQm91bmRUb0NpcmNsZSB7XG4gIGNvbnN0cnVjdG9yKGNlbnRlciwgcmFkaXVzLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSkge1xuICAgIHN1cGVyKGNlbnRlciwgcmFkaXVzKVxuICAgIHRoaXMuX3N0YXJ0QW5nbGUgPSBzdGFydEFuZ2xlXG4gICAgdGhpcy5fZW5kQW5nbGUgPSBlbmRBbmdsZVxuICB9XG5cbiAgc3RhcnRBbmdsZSgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMuX3N0YXJ0QW5nbGUgPT09ICdmdW5jdGlvbicgPyB0aGlzLl9zdGFydEFuZ2xlKCkgOiB0aGlzLl9zdGFydEFuZ2xlXG4gIH1cblxuICBlbmRBbmdsZSgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMuX2VuZEFuZ2xlID09PSAnZnVuY3Rpb24nID8gdGhpcy5fZW5kQW5nbGUoKSA6IHRoaXMuX2VuZEFuZ2xlXG4gIH1cblxuICBib3VuZChwb2ludCwgX3NpemUpIHtcbiAgICBsZXQgYW5nbGUgPSBnZXRBbmdsZSh0aGlzLmNlbnRlciwgcG9pbnQpXG4gICAgYW5nbGUgPSBub3JtYWxpemVBbmdsZShhbmdsZSlcbiAgICBhbmdsZSA9IGJvdW5kQW5nbGUodGhpcy5zdGFydEFuZ2xlKCksIHRoaXMuZW5kQW5nbGUoKSwgYW5nbGUpXG4gICAgcmV0dXJuIGdldFBvaW50RnJvbVJhZGlhbFN5c3RlbShhbmdsZSwgdGhpcy5yYWRpdXMsIHRoaXMuY2VudGVyKVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhcnJheSwgdmFsKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoYXJyYXlbaV0gPT09IHZhbCkge1xuICAgICAgYXJyYXkuc3BsaWNlKGksIDEpXG4gICAgICBpLS1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycmF5XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByYW5nZShzdGFydCwgc3RvcCwgc3RlcCkge1xuICBjb25zdCByZXN1bHQgPSBbXVxuICBpZiAodHlwZW9mIHN0b3AgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgc3RvcCA9IHN0YXJ0XG4gICAgc3RhcnQgPSAwXG4gIH1cbiAgaWYgKHR5cGVvZiBzdGVwID09PSAndW5kZWZpbmVkJykge1xuICAgIHN0ZXAgPSAxXG4gIH1cbiAgaWYgKChzdGVwID4gMCAmJiBzdGFydCA+PSBzdG9wKSB8fCAoc3RlcCA8IDAgJiYgc3RhcnQgPD0gc3RvcCkpIHtcbiAgICByZXR1cm4gW11cbiAgfVxuICBmb3IgKGxldCBpID0gc3RhcnQ7IHN0ZXAgPiAwID8gaSA8IHN0b3AgOiBpID4gc3RvcDsgaSArPSBzdGVwKSB7XG4gICAgcmVzdWx0LnB1c2goaSlcbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9nZW9tZXRyeS9wb2ludCdcbmltcG9ydCB7IGFkZFBvaW50VG9Cb3VuZFBvaW50cyB9IGZyb20gJy4vZ2VvbWV0cnkvYm91bmRzJ1xuXG5pbXBvcnQge1xuICBpbmRleE9mTmVhcmVzdFBvaW50LFxuICBnZXREaXN0YW5jZVxufSBmcm9tICcuL2dlb21ldHJ5L2Rpc3RhbmNlcydcblxuY2xhc3MgQmFzaWNTdHJhdGVneSB7XG4gIGNvbnN0cnVjdG9yKHJlY3RhbmdsZSwgb3B0aW9ucz17fSkge1xuICAgIHRoaXMucmVjdGFuZ2xlID0gcmVjdGFuZ2xlXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9uc1xuICB9XG5cbiAgZ2V0IGJvdW5kUmVjdCAoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGlzLnJlY3RhbmdsZSA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMucmVjdGFuZ2xlKCkgOiB0aGlzLnJlY3RhbmdsZVxuICB9XG59XG5cbmNsYXNzIE5vdENyb3NzaW5nU3RyYXRlZ3kgZXh0ZW5kcyBCYXNpY1N0cmF0ZWd5IHtcbiAgcG9zaXRpb25pbmcgKHJlY3RhbmdsZUxpc3QsIGluZGV4ZXNPZk5ld3MpIHtcbiAgICBjb25zdCBzdGF0aWNSZWN0YW5nbGVJbmRleGVzID0gcmVjdGFuZ2xlTGlzdC5yZWR1Y2UoKGluZGV4ZXMsIF9yZWN0LCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGluZGV4ZXNPZk5ld3MuaW5kZXhPZihpbmRleCkgPT09IC0xKSB7XG4gICAgICAgIGluZGV4ZXMucHVzaChpbmRleClcbiAgICAgIH1cbiAgICAgIHJldHVybiBpbmRleGVzXG4gICAgfSwgW10pXG5cbiAgICBpbmRleGVzT2ZOZXdzLmZvckVhY2goKGluZGV4KSA9PiB7XG4gICAgICBsZXQgcmVjdCA9IHJlY3RhbmdsZUxpc3RbaW5kZXhdXG4gICAgICBsZXQgcmVtb3ZhYmxlID0gZmFsc2VcblxuICAgICAgc3RhdGljUmVjdGFuZ2xlSW5kZXhlcy5mb3JFYWNoKChpbmRleE9mU3RhdGljKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YXRpY1JlY3QgPSByZWN0YW5nbGVMaXN0W2luZGV4T2ZTdGF0aWNdXG4gICAgICAgIHJlY3QgPSBzdGF0aWNSZWN0Lm1vdmVUb0JvdW5kKHJlY3QpXG4gICAgICB9KVxuXG4gICAgICByZW1vdmFibGUgPSBzdGF0aWNSZWN0YW5nbGVJbmRleGVzLnNvbWUoKGluZGV4T2ZTdGF0aWMpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhdGljUmVjdCA9IHJlY3RhbmdsZUxpc3RbaW5kZXhPZlN0YXRpY11cbiAgICAgICAgcmV0dXJuICAhIXN0YXRpY1JlY3QuYW5kKHJlY3QpXG4gICAgICB9KSB8fCByZWN0LmFuZCh0aGlzLmJvdW5kUmVjdCkuZ2V0U3F1YXJlKCkgIT09IHJlY3QuZ2V0U3F1YXJlKClcblxuICAgICAgaWYgKHJlbW92YWJsZSkge1xuICAgICAgICByZWN0LnJlbW92YWJsZSA9IHRydWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMucHVzaChpbmRleClcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiByZWN0YW5nbGVMaXN0XG4gIH1cblxuICBzb3J0aW5nKG9kbERyYWdnYWJsZXNMaXN0LCBuZXdEcmFnZ2FibGVzLCBpbmRleE9mTmV3cykge1xuICAgIGNvbnN0IGRyYWdnYWJsZXMgPSBvZGxEcmFnZ2FibGVzTGlzdC5jb25jYXQobmV3RHJhZ2dhYmxlcylcbiAgICBuZXdEcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgaW5kZXhPZk5ld3MucHVzaChkcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSlcbiAgICB9KVxuICAgIHJldHVybiBkcmFnZ2FibGVzXG4gIH1cbn1cblxuY2xhc3MgRmxvYXRMZWZ0U3RyYXRlZ3kgZXh0ZW5kcyBCYXNpY1N0cmF0ZWd5IHtcbiAgY29uc3RydWN0b3IocmVjdGFuZ2xlLCBvcHRpb25zPXt9KSB7XG4gICAgc3VwZXIocmVjdGFuZ2xlLCBvcHRpb25zKVxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgcmVtb3ZhYmxlOiB0cnVlXG4gICAgfSwgb3B0aW9ucylcblxuICAgIHRoaXMucmFkaXVzID0gb3B0aW9ucy5yYWRpdXMgfHwgODBcblxuICAgIHRoaXMucGFkZGluZ1RvcExlZnQgPSBvcHRpb25zLnBhZGRpbmdUb3BMZWZ0IHx8IG5ldyBQb2ludCgwLCAwKVxuICAgIHRoaXMucGFkZGluZ0JvdHRvbVJpZ2h0ID0gb3B0aW9ucy5wYWRkaW5nQm90dG9tUmlnaHQgfHwgbmV3IFBvaW50KDAsIDApXG4gICAgdGhpcy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgPSBvcHRpb25zLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyB8fCAwXG5cbiAgICB0aGlzLmdldERpc3RhbmNlID0gb3B0aW9ucy5nZXREaXN0YW5jZSB8fCBnZXREaXN0YW5jZVxuICAgIHRoaXMuZ2V0UG9zaXRpb24gPSBvcHRpb25zLmdldFBvc2l0aW9uIHx8ICgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucG9zaXRpb24pXG4gIH1cblxuICBwb3NpdGlvbmluZyhyZWN0YW5nbGVMaXN0LCBfaW5kZXhlc09mTmV3cykge1xuICAgIGNvbnN0IGJvdW5kUmVjdCA9IHRoaXMuYm91bmRSZWN0XG4gICAgY29uc3QgcmVjdFAyID0gYm91bmRSZWN0LmdldFAyKClcbiAgICBsZXQgYm91bmRhcnlQb2ludHMgPSBbYm91bmRSZWN0LnBvc2l0aW9uXVxuXG4gICAgcmVjdGFuZ2xlTGlzdC5mb3JFYWNoKChyZWN0LCByZWN0SW5kZXgpID0+IHtcbiAgICAgIGxldCBwb3NpdGlvbiwgaXNWYWxpZCA9IGZhbHNlXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvdW5kYXJ5UG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHBvc2l0aW9uID0gbmV3IFBvaW50KFxuICAgICAgICAgIGJvdW5kYXJ5UG9pbnRzW2ldLnggKyB0aGlzLnBhZGRpbmdUb3BMZWZ0LngsXG4gICAgICAgICAgaSA+IDAgPyAoYm91bmRhcnlQb2ludHNbaSAtIDFdLnkgKyB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcykgOiAoYm91bmRSZWN0LnBvc2l0aW9uLnkgKyB0aGlzLnBhZGRpbmdUb3BMZWZ0LnkpXG4gICAgICAgIClcblxuICAgICAgICBpc1ZhbGlkID0gKHBvc2l0aW9uLnggKyByZWN0LnNpemUueCA8IHJlY3RQMi54KVxuXG4gICAgICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgcG9zaXRpb24gPSBuZXcgUG9pbnQoXG4gICAgICAgICAgYm91bmRSZWN0LnBvc2l0aW9uLnggKyB0aGlzLnBhZGRpbmdUb3BMZWZ0LngsXG4gICAgICAgICAgYm91bmRhcnlQb2ludHNbYm91bmRhcnlQb2ludHMubGVuZ3RoIC0gMV0ueSArIChyZWN0SW5kZXggPiAwID8gdGhpcy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgOiB0aGlzLnBhZGRpbmdUb3BMZWZ0LnkpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgcmVjdC5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnJlbW92YWJsZSAmJiByZWN0LmdldFAzKCkueSA+IGJvdW5kUmVjdC5nZXRQMygpLnkpIHtcbiAgICAgICAgcmVjdC5yZW1vdmFibGUgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGJvdW5kYXJ5UG9pbnRzID0gYWRkUG9pbnRUb0JvdW5kUG9pbnRzKGJvdW5kYXJ5UG9pbnRzLCByZWN0LmdldFAzKCkuYWRkKHRoaXMucGFkZGluZ0JvdHRvbVJpZ2h0KSlcbiAgICB9KVxuICAgIHJldHVybiByZWN0YW5nbGVMaXN0XG4gIH1cblxuICBzb3J0aW5nKG9kbERyYWdnYWJsZXNMaXN0LCBuZXdEcmFnZ2FibGVzLCBpbmRleE9mTmV3cykge1xuICAgIGNvbnN0IG5ld0xpc3QgPSBvZGxEcmFnZ2FibGVzTGlzdC5jb25jYXQoKVxuICAgIGNvbnN0IGxpc3RPbGRQb3NpdGlvbiA9IG9kbERyYWdnYWJsZXNMaXN0Lm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUuZ2V0UG9zaXRpb24oKSlcbiAgICBuZXdEcmFnZ2FibGVzLmZvckVhY2goKG5ld0RyYWdnYWJsZSkgPT4ge1xuICAgICAgbGV0IGluZGV4ID0gaW5kZXhPZk5lYXJlc3RQb2ludChsaXN0T2xkUG9zaXRpb24sIHRoaXMuZ2V0UG9zaXRpb24obmV3RHJhZ2dhYmxlKSwgdGhpcy5yYWRpdXMsIHRoaXMuZ2V0RGlzdGFuY2UpXG4gICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgIGluZGV4ID0gbmV3TGlzdC5sZW5ndGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluZGV4ID0gbmV3TGlzdC5pbmRleE9mKG9kbERyYWdnYWJsZXNMaXN0W2luZGV4XSlcbiAgICAgIH1cbiAgICAgIG5ld0xpc3Quc3BsaWNlKGluZGV4LCAwLCBuZXdEcmFnZ2FibGUpXG4gICAgfSlcbiAgICBuZXdEcmFnZ2FibGVzLmZvckVhY2goKG5ld0RyYWdnYWJsZSkgPT4ge1xuICAgICAgaW5kZXhPZk5ld3MucHVzaChuZXdMaXN0LmluZGV4T2YobmV3RHJhZ2dhYmxlKSlcbiAgICB9KVxuICAgIHJldHVybiBuZXdMaXN0XG4gIH1cbn1cblxuY2xhc3MgRmxvYXRSaWdodFN0cmF0ZWd5IGV4dGVuZHMgRmxvYXRMZWZ0U3RyYXRlZ3kge1xuICBjb25zdHJ1Y3RvcihyZWN0YW5nbGUsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcihyZWN0YW5nbGUsIG9wdGlvbnMpXG5cbiAgICB0aGlzLnBhZGRpbmdUb3BSaWdodCA9IG9wdGlvbnMucGFkZGluZ1RvcFJpZ2h0IHx8IG5ldyBQb2ludCg1LCA1KVxuICAgIHRoaXMucGFkZGluZ0JvdHRvbUxlZnQgPSBvcHRpb25zLnBhZGRpbmdCb3R0b21MZWZ0IHx8IG5ldyBQb2ludCgwLCAwKVxuICAgIHRoaXMueUdhcEJldHdlZW5EcmFnZ2FibGVzID0gb3B0aW9ucy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgfHwgMFxuXG4gICAgdGhpcy5wYWRkaW5nQm90dG9tTmVnTGVmdCA9IG5ldyBQb2ludCgtdGhpcy5wYWRkaW5nQm90dG9tTGVmdC54LCB0aGlzLnBhZGRpbmdCb3R0b21MZWZ0LnkpXG4gIH1cblxuICBwb3NpdGlvbmluZyhyZWN0YW5nbGVMaXN0LCBfaW5kZXhlc09mTmV3cykge1xuICAgIGNvbnN0IGJvdW5kUmVjdCA9IHRoaXMuYm91bmRSZWN0XG4gICAgbGV0IGJvdW5kYXJ5UG9pbnRzID0gW2JvdW5kUmVjdC5nZXRQMigpXVxuXG4gICAgcmVjdGFuZ2xlTGlzdC5mb3JFYWNoKChyZWN0LCByZWN0SW5kZXgpID0+IHtcbiAgICAgIGxldCBwb3NpdGlvbiwgaXNWYWxpZCA9IGZhbHNlXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvdW5kYXJ5UG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHBvc2l0aW9uID0gbmV3IFBvaW50KFxuICAgICAgICAgIGJvdW5kYXJ5UG9pbnRzW2ldLnggLSByZWN0LnNpemUueCAtIHRoaXMucGFkZGluZ1RvcFJpZ2h0LngsXG4gICAgICAgICAgaSA+IDAgPyAoYm91bmRhcnlQb2ludHNbaSAtIDFdLnkgKyB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcykgOiAoYm91bmRSZWN0LnBvc2l0aW9uLnkgKyB0aGlzLnBhZGRpbmdUb3BSaWdodC55KVxuICAgICAgICApXG5cbiAgICAgICAgaXNWYWxpZCA9IChwb3NpdGlvbi54ID4gcmVjdC5wb3NpdGlvbi54KVxuICAgICAgICBpZiAoaXNWYWxpZCkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICBwb3NpdGlvbiA9IG5ldyBQb2ludChcbiAgICAgICAgICBib3VuZFJlY3QuZ2V0UDIoKS54ICAtIHJlY3Quc2l6ZS54IC0gdGhpcy5wYWRkaW5nVG9wUmlnaHQueCxcbiAgICAgICAgICBib3VuZGFyeVBvaW50c1tib3VuZGFyeVBvaW50cy5sZW5ndGggLSAxXS55ICsgKHJlY3RJbmRleCA+IDAgPyB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyA6IHRoaXMucGFkZGluZ1RvcFJpZ2h0LnkpXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIHJlY3QucG9zaXRpb24gPSBwb3NpdGlvblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZW1vdmFibGUgJiYgcmVjdC5nZXRQNCgpLnkgPiBib3VuZFJlY3QuZ2V0UDQoKS55KSB7XG4gICAgICAgIHJlY3QucmVtb3ZhYmxlID0gdHJ1ZVxuICAgICAgfVxuICAgICAgYm91bmRhcnlQb2ludHMgPSBhZGRQb2ludFRvQm91bmRQb2ludHMoYm91bmRhcnlQb2ludHMsIHJlY3QuZ2V0UDQoKS5hZGQodGhpcy5wYWRkaW5nQm90dG9tTmVnTGVmdCksIHRydWUpXG4gICAgfSlcbiAgICByZXR1cm4gcmVjdGFuZ2xlTGlzdFxuICB9XG59XG5cbmV4cG9ydCB7IE5vdENyb3NzaW5nU3RyYXRlZ3ksIEZsb2F0TGVmdFN0cmF0ZWd5LCBGbG9hdFJpZ2h0U3RyYXRlZ3kgfVxuIiwiaW1wb3J0IHJhbmdlIGZyb20gJy4vdXRpbHMvcmFuZ2UuanMnXG5pbXBvcnQgcmVtb3ZlSXRlbSBmcm9tICcuL3V0aWxzL3JlbW92ZS1hcnJheS1pdGVtJ1xuaW1wb3J0IGdldERlZmF1bHRQYXJlbnQgZnJvbSAnLi91dGlscy9nZXQtZGVmYXVsdC1wYXJlbnQnXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnRFbWl0dGVyJ1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tICcuL2dlb21ldHJ5L3JlY3RhbmdsZSdcbmltcG9ydCB7IHRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3RvcnkgfSBmcm9tICcuL2dlb21ldHJ5L2Rpc3RhbmNlcydcbmltcG9ydCB7IHNjb3BlcywgZGVmYXVsdFNjb3BlIH0gZnJvbSAnLi9zY29wZSdcblxuaW1wb3J0IHsgRmxvYXRMZWZ0U3RyYXRlZ3kgfSBmcm9tICcuL3Bvc2l0aW9uaW5nJ1xuXG5jb25zdCBhZGRUb0RlZmF1bHRTY29wZSA9IGZ1bmN0aW9uKHRhcmdldCkge1xuICBkZWZhdWx0U2NvcGUuYWRkVGFyZ2V0KHRhcmdldClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFyZ2V0IGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgZHJhZ2dhYmxlcywgb3B0aW9ucyA9IHt9KSB7XG4gICAgc3VwZXIodW5kZWZpbmVkLCBvcHRpb25zKVxuICAgIGNvbnN0IHRhcmdldCA9IHRoaXNcbiAgICBjb25zdCBwYXJlbnQgPSBvcHRpb25zLnBhcmVudCB8fCBnZXREZWZhdWx0UGFyZW50KGVsZW1lbnQpXG5cbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHRpbWVFbmQ6IDIwMCxcbiAgICAgIHRpbWVFeGNhbmdlOiA0MDAsXG4gICAgICBwYXJlbnQ6IHBhcmVudFxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0aGlzLnBvc2l0aW9uaW5nU3RyYXRlZ3kgPSBvcHRpb25zLnN0cmF0ZWd5IHx8IG5ldyBGbG9hdExlZnRTdHJhdGVneShcbiAgICAgIHRoaXMuZ2V0UmVjdGFuZ2xlLmJpbmQodGhpcyksXG4gICAgICB7XG4gICAgICAgIHJhZGl1czogODAsXG4gICAgICAgIGdldERpc3RhbmNlOiB0cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5KHsgeDogMSwgeTogNCB9KSxcbiAgICAgICAgcmVtb3ZhYmxlOiB0cnVlXG4gICAgICB9XG4gICAgKVxuXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUudGFyZ2V0cy5wdXNoKHRhcmdldCkpXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gZHJhZ2dhYmxlc1xuXG4gICAgVGFyZ2V0LmVtaXR0ZXIuZW1pdCgndGFyZ2V0OmNyZWF0ZScsIHRoaXMpXG5cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgcG9zaXRpb25pbmcgKGRyYWdnYWJsZXMsIGluZGV4ZXNPZk5ldykge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uaW5nU3RyYXRlZ3kucG9zaXRpb25pbmcoZHJhZ2dhYmxlcywgaW5kZXhlc09mTmV3KVxuICB9XG5cbiAgc29ydGluZyAob2xkRHJhZ2dhYmxlcywgbmV3RHJhZ2dhYmxlcywgaW5kZXhPZk5ld3MpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbmluZ1N0cmF0ZWd5LnNvcnRpbmcob2xkRHJhZ2dhYmxlcywgbmV3RHJhZ2dhYmxlcywgaW5kZXhPZk5ld3MpXG4gIH1cblxuICBpbml0KCkge1xuICAgIGxldCByZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXdcblxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzID0gdGhpcy5kcmFnZ2FibGVzLmZpbHRlcigoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBsZXQgZWxlbWVudCA9IGRyYWdnYWJsZS5lbGVtZW50LnBhcmVudE5vZGVcbiAgICAgIHdoaWxlIChlbGVtZW50KSB7XG4gICAgICAgIGlmIChlbGVtZW50ID09PSB0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGVcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH0pXG5cbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMubGVuZ3RoKSB7XG4gICAgICBpbmRleGVzT2ZOZXcgPSByYW5nZSh0aGlzLmlubmVyRHJhZ2dhYmxlcy5sZW5ndGgpXG4gICAgICByZWN0YW5nbGVzID0gdGhpcy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgICB9KSwgaW5kZXhlc09mTmV3KVxuICAgICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXcpXG4gICAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHRoaXMuZW1pdCgndGFyZ2V0OmFkZCcsIGRyYWdnYWJsZSkpXG4gICAgfVxuICB9XG5cbiAgZ2V0UmVjdGFuZ2xlKCkge1xuICAgIHJldHVybiBSZWN0YW5nbGUuZnJvbUVsZW1lbnQoXG4gICAgICB0aGlzLmVsZW1lbnQsXG4gICAgICB0aGlzLm9wdGlvbnMucGFyZW50LFxuICAgICAgdGhpcy5vcHRpb25zLmlzQ29udGVudEJveFNpemUsXG4gICAgICB0cnVlXG4gICAgKVxuICB9XG5cbiAgY2F0Y2hEcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5jYXRjaERyYWdnYWJsZSkge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5jYXRjaERyYWdnYWJsZSh0aGlzLCBkcmFnZ2FibGUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRhcmdldFJlY3RhbmdsZSA9IHRoaXMuZ2V0UmVjdGFuZ2xlKClcbiAgICAgIGNvbnN0IGRyYWdnYWJsZVNxdWFyZSA9IGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKS5nZXRTcXVhcmUoKVxuXG4gICAgICByZXR1cm4gZHJhZ2dhYmxlU3F1YXJlIDwgdGFyZ2V0UmVjdGFuZ2xlLmdldFNxdWFyZSgpXG4gICAgICAgICAgICAgICYmIHRhcmdldFJlY3RhbmdsZS5pbmNsdWRlUG9pbnQoZHJhZ2dhYmxlLmdldENlbnRlcigpKVxuICAgIH1cbiAgfVxuXG4gIGdldFBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFJlY3RhbmdsZSgpLnBvc2l0aW9uXG4gIH1cblxuICBnZXRTaXplKCkge1xuICAgIHJldHVybiB0aGlzLmdldFJlY3RhbmdsZSgpLnNpemVcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgc2NvcGVzLmZvckVhY2goKHNjb3BlKSA9PiByZW1vdmVJdGVtKHNjb3BlLnRhcmdldHMsIHRoaXMpKVxuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBbXSlcbiAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIFtdLCAwKVxuICB9XG5cbiAgb25FbmQoZHJhZ2dhYmxlKSB7XG4gICAgY29uc3QgbmV3RHJhZ2dhYmxlc0luZGV4ID0gW11cbiAgICBjb25zdCBpbmNsdWRlUG9pbnQgPSB0aGlzLmdldFJlY3RhbmdsZSgpLmluY2x1ZGVQb2ludChkcmFnZ2FibGUuZ2V0UG9zaXRpb24oKSlcblxuICAgIGlmICghaW5jbHVkZVBvaW50KSB7XG4gICAgICBpZiAodGhpcy5nZXRSZWN0YW5nbGUoKS5pbmNsdWRlUG9pbnQoZHJhZ2dhYmxlLmdldENlbnRlcigpKSkge1xuICAgICAgICBkcmFnZ2FibGUucG9zaXRpb24gPSBkcmFnZ2FibGUuZ2V0Q2VudGVyKCkuY2xvbmUoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5lbWl0KCd0YXJnZXQ6YmVmb3JlQWRkJywgZHJhZ2dhYmxlKVxuXG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMgPSB0aGlzLnNvcnRpbmcodGhpcy5pbm5lckRyYWdnYWJsZXMsIFtkcmFnZ2FibGVdLCBuZXdEcmFnZ2FibGVzSW5kZXgpXG4gICAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgbmV3RHJhZ2dhYmxlc0luZGV4KVxuXG4gICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBuZXdEcmFnZ2FibGVzSW5kZXgpXG4gICAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTEpIHtcbiAgICAgIHRoaXMuYWRkUmVtb3ZlT25Nb3ZlKGRyYWdnYWJsZSlcbiAgICB9XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIHNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIGluZGV4ZXNPZk5ldywgdGltZSkge1xuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnNsaWNlKDApLmZvckVhY2goKGRyYWdnYWJsZSwgaSkgPT4ge1xuICAgICAgY29uc3QgcmVjdCA9IHJlY3RhbmdsZXNbaV0sXG4gICAgICAgIHRpbWVFbmQgPSB0aW1lIHx8IHRpbWUgPT09IDAgPyB0aW1lIDogaW5kZXhlc09mTmV3LmluZGV4T2YoaSkgIT09IC0xID8gdGhpcy5vcHRpb25zLnRpbWVFbmQgOiB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2VcblxuICAgICAgaWYgKHJlY3QucmVtb3ZhYmxlKSB7XG4gICAgICAgIGRyYWdnYWJsZS5tb3ZlKGRyYWdnYWJsZS5pbml0aWFsUG9zaXRpb24sIHRpbWVFbmQsIHRydWUsIHRydWUpXG4gICAgICAgIHJlbW92ZUl0ZW0odGhpcy5pbm5lckRyYWdnYWJsZXMsIGRyYWdnYWJsZSlcbiAgICAgICAgdGhpcy5lbWl0KCd0YXJnZXQ6cmVtb3ZlJywgZHJhZ2dhYmxlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZHJhZ2dhYmxlLm1vdmUocmVjdC5wb3NpdGlvbiwgdGltZUVuZCwgdHJ1ZSwgdHJ1ZSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgYWRkKGRyYWdnYWJsZSwgdGltZSkge1xuICAgIGNvbnN0IG5ld0RyYWdnYWJsZXNJbmRleCA9IHRoaXMuaW5uZXJEcmFnZ2FibGVzLmxlbmd0aFxuXG4gICAgdGhpcy5lbWl0KCd0YXJnZXQ6YmVmb3JlQWRkJywgZHJhZ2dhYmxlKVxuXG4gICAgdGhpcy5wdXNoSW5uZXJEcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICAgIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgfSksIG5ld0RyYWdnYWJsZXNJbmRleCwgZHJhZ2dhYmxlKVxuXG4gICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBbbmV3RHJhZ2dhYmxlc0luZGV4XSwgdGltZSB8fCAwKVxuICAgIGlmICh0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkgIT09IC0xKSB7XG4gICAgICB0aGlzLmFkZFJlbW92ZU9uTW92ZShkcmFnZ2FibGUpXG4gICAgfVxuICB9XG5cbiAgcHVzaElubmVyRHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIGlmICh0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSk9PT0tMSkge1xuICAgICAgdGhpcy5pbm5lckRyYWdnYWJsZXMucHVzaChkcmFnZ2FibGUpXG4gICAgfVxuICB9XG5cbiAgYWRkUmVtb3ZlT25Nb3ZlKGRyYWdnYWJsZSkge1xuICAgIGRyYWdnYWJsZS5vbignZHJhZzptb3ZlJywgdGhpcy5yZW1vdmVIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgdGhpcy5yZW1vdmUoZHJhZ2dhYmxlKVxuICAgIH0pXG5cbiAgICB0aGlzLmVtaXQoJ3RhcmdldDphZGQnLCBkcmFnZ2FibGUpXG4gIH1cblxuICByZW1vdmUoZHJhZ2dhYmxlKSB7XG4gICAgZHJhZ2dhYmxlLnVuc3Vic2NyaWJlKCdkcmFnOm1vdmUnLCB0aGlzLnJlbW92ZUhhbmRsZXIpXG5cbiAgICBjb25zdCBpbmRleCA9IHRoaXMuaW5uZXJEcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKVxuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnNwbGljZShpbmRleCwgMSlcblxuICAgIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgfSksIFtdKVxuXG4gICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBbXSlcbiAgICB0aGlzLmVtaXQoJ3RhcmdldDpyZW1vdmUnLCBkcmFnZ2FibGUpXG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5tb3ZlKGRyYWdnYWJsZS5pbml0aWFsUG9zaXRpb24sIDAsIHRydWUsIHRydWUpXG4gICAgICB0aGlzLmVtaXQoJ3RhcmdldDpyZW1vdmUnLCBkcmFnZ2FibGUpXG4gICAgfSlcbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcyA9IFtdXG4gIH1cblxuICBnZXRTb3J0ZWREcmFnZ2FibGVzKCkge1xuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnNsaWNlKClcbiAgfVxufVxuXG5UYXJnZXQuZW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXIoVGFyZ2V0KVxuVGFyZ2V0LmVtaXR0ZXIub24oJ3RhcmdldDpjcmVhdGUnLCBhZGRUb0RlZmF1bHRTY29wZSlcbiIsImltcG9ydCByZW1vdmVJdGVtIGZyb20gJy4vdXRpbHMvcmVtb3ZlLWFycmF5LWl0ZW0nXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnRFbWl0dGVyJ1xuaW1wb3J0IERyYWdnYWJsZSBmcm9tICcuL2RyYWdnYWJsZSdcbmltcG9ydCBUYXJnZXQgZnJvbSAnLi90YXJnZXQnXG5cbmNvbnN0IHNjb3BlcyA9IFtdXG5cbmNsYXNzIFNjb3BlIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoZHJhZ2dhYmxlcywgdGFyZ2V0cywgb3B0aW9ucz17fSkge1xuICAgIHN1cGVyKHVuZGVmaW5lZCwgb3B0aW9ucylcbiAgICBzY29wZXMuZm9yRWFjaCgoc2NvcGUpID0+IHtcbiAgICAgIGlmIChkcmFnZ2FibGVzKSB7XG4gICAgICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICAgICAgcmVtb3ZlSXRlbShzY29wZS5kcmFnZ2FibGVzLCBkcmFnZ2FibGUpXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIGlmICh0YXJnZXRzKSB7XG4gICAgICAgIHRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB7XG4gICAgICAgICAgcmVtb3ZlSXRlbShzY29wZS50YXJnZXRzLCB0YXJnZXQpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZXMgfHwgW11cbiAgICB0aGlzLnRhcmdldHMgPSB0YXJnZXRzIHx8IFtdXG4gICAgc2NvcGVzLnB1c2godGhpcylcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICB0aW1lRW5kOiAob3B0aW9ucy50aW1lRW5kKSB8fCA0MDBcbiAgICB9XG5cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUuZHJhZ0VuZEFjdGlvbiA9ICgpID0+IHRoaXMub25FbmQoZHJhZ2dhYmxlKVxuICAgIH0pXG4gIH1cblxuICBhZGREcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxuICAgIGRyYWdnYWJsZS5kcmFnRW5kQWN0aW9uID0gKCkgPT4gdGhpcy5vbkVuZChkcmFnZ2FibGUpXG4gIH1cblxuICBhZGRUYXJnZXQodGFyZ2V0KSB7XG4gICAgdGhpcy50YXJnZXRzLnB1c2godGFyZ2V0KVxuICB9XG5cbiAgb25FbmQoZHJhZ2dhYmxlKSB7XG4gICAgY29uc3Qgc2hvdFRhcmdldHMgPSB0aGlzLnRhcmdldHMuZmlsdGVyKCh0YXJnZXQpID0+IHtcbiAgICAgIHJldHVybiB0YXJnZXQuZHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkgIT09IC0xXG4gICAgfSkuZmlsdGVyKCh0YXJnZXQpID0+IHtcbiAgICAgIHJldHVybiB0YXJnZXQuY2F0Y2hEcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICAgIH0pLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIHJldHVybiBhLmdldFJlY3RhbmdsZSgpLmdldFNxdWFyZSgpIC0gYi5nZXRSZWN0YW5nbGUoKS5nZXRTcXVhcmUoKVxuICAgIH0pXG5cbiAgICBpZiAoc2hvdFRhcmdldHMubGVuZ3RoKSB7XG4gICAgICBzaG90VGFyZ2V0c1swXS5vbkVuZChkcmFnZ2FibGUpXG4gICAgfSBlbHNlIGlmIChkcmFnZ2FibGUudGFyZ2V0cy5sZW5ndGgpIHtcbiAgICAgIGRyYWdnYWJsZS5waW5Qb3NpdGlvbihkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uLCB0aGlzLm9wdGlvbnMudGltZUVuZClcbiAgICB9XG5cbiAgICB0aGlzLmVtaXQoJ3Njb3BlOmNoYW5nZScpXG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLnRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB0YXJnZXQucmVzZXQoKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnJlZnJlc2goKSlcbiAgICB0aGlzLnRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB0YXJnZXQucmVmcmVzaCgpKVxuICB9XG5cbiAgZ2V0IHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXRzLm1hcCgodGFyZ2V0KSA9PiB7XG4gICAgICByZXR1cm4gdGFyZ2V0LmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4gdGhpcy5kcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSlcbiAgICB9KVxuICB9XG5cbiAgc2V0IHBvc2l0aW9ucyhwb3NpdGlvbnMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gJ3dyb25nIGFycmF5IGxlbmd0aCdcbiAgICBpZiAocG9zaXRpb25zLmxlbmd0aCA9PT0gdGhpcy50YXJnZXRzLmxlbmd0aCkge1xuICAgICAgdGhpcy50YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4gdGFyZ2V0LnJlc2V0KCkpXG5cbiAgICAgIHBvc2l0aW9ucy5mb3JFYWNoKCh0YXJnZXRJbmRleGVzLCBpKSA9PiB7XG4gICAgICAgIHRhcmdldEluZGV4ZXMuZm9yRWFjaCgoaW5kZXgpID0+IHtcbiAgICAgICAgICB0aGlzLnRhcmdldHNbaV0uYWRkKHRoaXMuZHJhZ2dhYmxlc1tpbmRleF0pXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBtZXNzYWdlXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IGRlZmF1bHRTY29wZSA9IG5ldyBTY29wZSgpXG5cbmZ1bmN0aW9uIHNjb3BlKGZuKSB7XG4gIGNvbnN0IGN1cnJlbnRTY29wZSA9IG5ldyBTY29wZSgpXG5cbiAgY29uc3QgYWRkRHJhZ2dhYmxlVG9TY29wZSA9IGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICAgIGN1cnJlbnRTY29wZS5hZGREcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICAgIERyYWdnYWJsZS5lbWl0dGVyLmludGVycnVwdCgpXG4gIH1cblxuICBjb25zdCBhZGRUYXJnZXRUb1Njb3BlID0gZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgY3VycmVudFNjb3BlLmFkZFRhcmdldCh0YXJnZXQpXG4gICAgRHJhZ2dhYmxlLmVtaXR0ZXIuaW50ZXJydXB0KClcbiAgfVxuXG4gIERyYWdnYWJsZS5lbWl0dGVyLnByZXBlbmRPbignZHJhZ2dhYmxlOmNyZWF0ZScsIGFkZERyYWdnYWJsZVRvU2NvcGUpXG4gIFRhcmdldC5lbWl0dGVyLnByZXBlbmRPbigndGFyZ2V0OmNyZWF0ZScsIGFkZFRhcmdldFRvU2NvcGUpXG4gIGZuLmNhbGwoKVxuICBEcmFnZ2FibGUuZW1pdHRlci51bnN1YnNjcmliZSgnZHJhZ2dhYmxlOmNyZWF0ZScsIGFkZERyYWdnYWJsZVRvU2NvcGUpXG4gIFRhcmdldC5lbWl0dGVyLnVuc3Vic2NyaWJlKCd0YXJnZXQ6Y3JlYXRlJywgYWRkVGFyZ2V0VG9TY29wZSlcbiAgcmV0dXJuIGN1cnJlbnRTY29wZVxufVxuXG5leHBvcnQgeyBzY29wZXMsIGRlZmF1bHRTY29wZSwgU2NvcGUsIHNjb3BlIH1cbiIsImZ1bmN0aW9uIGNoZWNrU3VwcG9ydFBhc3NpdmVFdmVudHMoKSB7XG4gIGxldCBwYXNzaXZlU3VwcG9ydGVkID0gZmFsc2VcblxuICB0cnkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdwYXNzaXZlJywge1xuICAgICAgZ2V0KCkge1xuICAgICAgICByZXR1cm4gKHBhc3NpdmVTdXBwb3J0ZWQgPSB0cnVlKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndGVzdCcsIG9wdGlvbnMsIG9wdGlvbnMpXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Rlc3QnLCBvcHRpb25zLCBvcHRpb25zKVxuICB9IGNhdGNoIChfZXJyKSB7XG4gICAgcGFzc2l2ZVN1cHBvcnRlZCA9IGZhbHNlXG4gIH1cblxuICByZXR1cm4gcGFzc2l2ZVN1cHBvcnRlZFxufVxuXG5leHBvcnQgY29uc3QgaXNTdXBwb3J0UGFzc2l2ZUV2ZW50cyA9IGNoZWNrU3VwcG9ydFBhc3NpdmVFdmVudHMoKVxuXG5mdW5jdGlvbiBldmVudE9wdGlvbnMob3B0aW9ucywgZmFsbGJhY2sgPSBmYWxzZSkge1xuICByZXR1cm4gaXNTdXBwb3J0UGFzc2l2ZUV2ZW50cyA/IG9wdGlvbnMgOiBmYWxsYmFja1xufVxuXG5leHBvcnQgeyBldmVudE9wdGlvbnMgfVxuXG5leHBvcnQgZGVmYXVsdCBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzXG4iLCJpbXBvcnQgeyBhZGRDbGFzcywgcmVtb3ZlQ2xhc3MgfSBmcm9tICcuL3V0aWxzL2NsYXNzZXMnXG5pbXBvcnQgZ2V0RGVmYXVsdFBhcmVudCBmcm9tICcuL3V0aWxzL2dldC1kZWZhdWx0LXBhcmVudCdcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudEVtaXR0ZXInXG5pbXBvcnQgZ2V0U3R5bGVQcm9wZXJ0eSBmcm9tICdkZXNhbmRyby1nZXQtc3R5bGUtcHJvcGVydHknXG5pbXBvcnQgeyBCb3VuZFRvRWxlbWVudCB9IGZyb20gJy4vYm91bmRpbmcnXG5pbXBvcnQgUG9pbnQgZnJvbSAnLi9nZW9tZXRyeS9wb2ludCdcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSAnLi9nZW9tZXRyeS9yZWN0YW5nbGUnXG5pbXBvcnQgeyBkZWZhdWx0U2NvcGUgfSBmcm9tICcuL3Njb3BlJ1xuaW1wb3J0IGlzU3VwcG9ydFBhc3NpdmVFdmVudHMgZnJvbSAnLi91dGlscy9pcy1zdXBwb3J0LXBhc3NpdmUtZXZlbnRzJ1xuXG5jb25zdCBpc1RvdWNoID0gJ29udG91Y2hzdGFydCcgaW4gd2luZG93XG5jb25zdCBtb3VzZUV2ZW50cyA9IHtcbiAgc3RhcnQ6ICdtb3VzZWRvd24nLFxuICBtb3ZlOiAnbW91c2Vtb3ZlJyxcbiAgZW5kOiAnbW91c2V1cCdcbn1cbmNvbnN0IHRvdWNoRXZlbnRzID0ge1xuICBzdGFydDogJ3RvdWNoc3RhcnQnLFxuICBtb3ZlOiAndG91Y2htb3ZlJyxcbiAgZW5kOiAndG91Y2hlbmQnXG59XG5jb25zdCBkcmFnZ2FibGVzID0gW11cbmNvbnN0IHRyYW5zZm9ybVByb3BlcnR5ID0gZ2V0U3R5bGVQcm9wZXJ0eSgndHJhbnNmb3JtJylcbmNvbnN0IHRyYW5zaXRpb25Qcm9wZXJ0eSA9IGdldFN0eWxlUHJvcGVydHkoJ3RyYW5zaXRpb24nKVxuXG5mdW5jdGlvbiBnZXRUb3VjaEJ5SUQoZWxlbWVudCwgdG91Y2hJZCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnQuY2hhbmdlZFRvdWNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZWxlbWVudC5jaGFuZ2VkVG91Y2hlc1tpXS5pZGVudGlmaWVyID09PSB0b3VjaElkKSB7XG4gICAgICByZXR1cm4gZWxlbWVudC5jaGFuZ2VkVG91Y2hlc1tpXVxuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cblxuZnVuY3Rpb24gcHJldmVudERvdWJsZUluaXQoZHJhZ2dhYmxlKSB7XG4gIGNvbnN0IG1lc3NhZ2UgPSBcImZvciB0aGlzIGVsZW1lbnQgRHJhZ2VlLkRyYWdnYWJsZSBpcyBhbHJlYWR5IGV4aXN0LCBkb24ndCBjcmVhdGUgaXQgdHdpY2UgXCJcbiAgaWYgKGRyYWdnYWJsZXMuc29tZSgoZXhpc3RpbmcpID0+IGRyYWdnYWJsZS5lbGVtZW50ID09PSBleGlzdGluZy5lbGVtZW50KSkge1xuICAgIHRocm93IG1lc3NhZ2VcbiAgfVxuICBkcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxufVxuXG5mdW5jdGlvbiBhZGRUb0RlZmF1bHRTY29wZShkcmFnZ2FibGUpIHtcbiAgZGVmYXVsdFNjb3BlLmFkZERyYWdnYWJsZShkcmFnZ2FibGUpXG59XG5cbmZ1bmN0aW9uIGNvcHlTdHlsZXMoc291cmNlLCBkZXN0aW5hdGlvbikge1xuICBjb25zdCBjcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHNvdXJjZSlcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qga2V5ID0gY3NbaV1cbiAgICBpZiAoKGtleS5pbmRleE9mKCd0cmFuc2l0aW9uJykgPCAwKSAmJiAoa2V5LmluZGV4T2YoJ3RyYW5zZm9ybScpIDwgMCkpIHtcbiAgICAgIGRlc3RpbmF0aW9uLnN0eWxlW2tleV0gPSBjc1trZXldXG4gICAgfVxuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzb3VyY2UuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICBjb3B5U3R5bGVzKHNvdXJjZS5jaGlsZHJlbltpXSwgZGVzdGluYXRpb24uY2hpbGRyZW5baV0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhZ2dhYmxlIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgb3B0aW9ucz17fSkge1xuICAgIHN1cGVyKHVuZGVmaW5lZCwgb3B0aW9ucylcbiAgICB0aGlzLnRhcmdldHMgPSBbXVxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG4gICAgcHJldmVudERvdWJsZUluaXQodGhpcylcbiAgICBEcmFnZ2FibGUuZW1pdHRlci5lbWl0KCdkcmFnZ2FibGU6Y3JlYXRlJywgdGhpcylcbiAgICB0aGlzLl9lbmFibGUgPSB0cnVlXG4gICAgdGhpcy5zdGFydFBvc2l0aW9uaW5nKClcbiAgICB0aGlzLnN0YXJ0TGlzdGVuaW5nKClcbiAgfVxuXG4gIHN0YXJ0UG9zaXRpb25pbmcoKSB7XG4gICAgdGhpcy5fc2V0RGVmYXVsdFRyYW5zaXRpb24oKVxuICAgIHRoaXMub2Zmc2V0ID0gUG9pbnQuZWxlbWVudE9mZnNldCh0aGlzLmVsZW1lbnQsIHRoaXMucGFyZW50LCB0cnVlKVxuICAgIHRoaXMucGlubmVkUG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICAgIHRoaXMuaW5pdGlhbFBvc2l0aW9uID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uIHx8IHRoaXMub2Zmc2V0XG5cbiAgICB0aGlzLnBpblBvc2l0aW9uKHRoaXMuaW5pdGlhbFBvc2l0aW9uKVxuXG4gICAgaWYgKHRoaXMuYm91bmRpbmcucmVmcmVzaCkge1xuICAgICAgdGhpcy5ib3VuZGluZy5yZWZyZXNoKClcbiAgICB9XG4gIH1cblxuICBzdGFydExpc3RlbmluZygpIHtcbiAgICB0aGlzLl9kcmFnU3RhcnQgPSAoZXZlbnQpID0+IHRoaXMuZHJhZ1N0YXJ0KGV2ZW50KVxuICAgIHRoaXMuX2RyYWdNb3ZlID0gKGV2ZW50KSA9PiB0aGlzLmRyYWdNb3ZlKGV2ZW50KVxuICAgIHRoaXMuX2RyYWdFbmQgPSAoZXZlbnQpID0+IHRoaXMuZHJhZ0VuZChldmVudClcbiAgICB0aGlzLl9uYXRpdmVEcmFnU3RhcnQgPSAoZXZlbnQpID0+IHRoaXMubmF0aXZlRHJhZ1N0YXJ0KGV2ZW50KVxuICAgIHRoaXMuX25hdGl2ZURyYWdPdmVyID0gKGV2ZW50KSA9PiB0aGlzLm5hdGl2ZURyYWdPdmVyKGV2ZW50KVxuICAgIHRoaXMuX25hdGl2ZURyYWdFbmQgPSAoZXZlbnQpID0+IHRoaXMubmF0aXZlRHJhZ0VuZChldmVudClcbiAgICB0aGlzLl9uYXRpdmVEcm9wID0gKGV2ZW50KSA9PiB0aGlzLm5hdGl2ZURyb3AoZXZlbnQpXG5cbiAgICB0aGlzLmhhbmRsZXIuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0LCBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzID8geyBwYXNzaXZlOiBmYWxzZSB9IDogZmFsc2UpXG4gICAgdGhpcy5oYW5kbGVyLmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydCwgaXNTdXBwb3J0UGFzc2l2ZUV2ZW50cyA/IHsgcGFzc2l2ZTogZmFsc2UgfSA6IGZhbHNlKVxuICAgIHRoaXMuaGFuZGxlci5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCB0aGlzLl9uYXRpdmVEcmFnU3RhcnQpXG4gIH1cblxuICBnZXRTaXplKCkge1xuICAgIHJldHVybiBQb2ludC5lbGVtZW50U2l6ZSh0aGlzLmVsZW1lbnQsIHRoaXMub3B0aW9ucy5pc0NvbnRlbnRCb3hTaXplKVxuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMub2Zmc2V0LmFkZCh0aGlzLl90cmFuc2Zvcm1Qb3NpdGlvbiB8fCBuZXcgUG9pbnQoMCwgMCkpXG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25cbiAgfVxuXG4gIGdldENlbnRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi5hZGQodGhpcy5nZXRTaXplKCkubXVsdCgwLjUpKVxuICB9XG5cbiAgX3NldERlZmF1bHRUcmFuc2l0aW9uICgpIHtcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNpdGlvblByb3BlcnR5XSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZWxlbWVudClbdHJhbnNpdGlvblByb3BlcnR5XVxuICB9XG5cbiAgX3NldFRyYW5zaXRpb24odGltZSkge1xuICAgIGxldCB0cmFuc2l0aW9uID0gdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV1cbiAgICBjb25zdCB0cmFuc2l0aW9uQ3NzID0gYHRyYW5zZm9ybSAke3RpbWV9bXNgXG5cbiAgICBpZiAoIS90cmFuc2Zvcm0gXFxkKm0/cy8udGVzdCh0cmFuc2l0aW9uKSkge1xuICAgICAgaWYgKHRyYW5zaXRpb24pIHtcbiAgICAgICAgdHJhbnNpdGlvbiArPSBgLCAke3RyYW5zaXRpb25Dc3N9YFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJhbnNpdGlvbiA9IHRyYW5zaXRpb25Dc3NcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdHJhbnNpdGlvbiA9IHRyYW5zaXRpb24ucmVwbGFjZSgvdHJhbnNmb3JtIFxcZCptP3MvLCB0cmFuc2l0aW9uQ3NzKVxuICAgIH1cblxuICAgIHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldID0gdHJhbnNpdGlvblxuICB9XG5cbiAgX3NldFRyYW5zbGF0ZShwb2ludCkge1xuICAgIHRoaXMuX3RyYW5zZm9ybVBvc2l0aW9uID0gcG9pbnRcblxuICAgIGxldCB0cmFuc2Zvcm0gPSB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcGVydHldXG4gICAgbGV0IHRyYW5zbGF0ZUNzcyA9IGAgdHJhbnNsYXRlM2QoJHtwb2ludC54fXB4LCAke3BvaW50Lnl9cHgsIDBweClgXG5cbiAgICBjb25zdCB1YSA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50XG4gICAgY29uc3QgbXNpZSA9IHVhLmluZGV4T2YoJ01TSUUgJykgIT09IC0xXG5cbiAgICBpZiAobXNpZSkge1xuICAgICAgdHJhbnNsYXRlQ3NzID0gYCB0cmFuc2xhdGUoJHtwb2ludC54fXB4LCR7cG9pbnQueX1weClgXG4gICAgICBpZiAoIS90cmFuc2xhdGVcXChbXildK1xcKS8udGVzdCh0cmFuc2Zvcm0pKSB7XG4gICAgICAgIHRyYW5zZm9ybSArPSB0cmFuc2xhdGVDc3NcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyYW5zZm9ybSA9IHRyYW5zZm9ybS5yZXBsYWNlKC90cmFuc2xhdGVcXChbXildK1xcKS8sIHRyYW5zbGF0ZUNzcylcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCEvdHJhbnNsYXRlM2RcXChbXildK1xcKS8udGVzdCh0cmFuc2Zvcm0pKSB7XG4gICAgICAgIHRyYW5zZm9ybSArPSB0cmFuc2xhdGVDc3NcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyYW5zZm9ybSA9IHRyYW5zZm9ybS5yZXBsYWNlKC90cmFuc2xhdGUzZFxcKFteKV0rXFwpLywgdHJhbnNsYXRlQ3NzKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wZXJ0eV0gPSB0cmFuc2Zvcm1cbiAgfVxuXG4gIG1vdmUocG9pbnQsIHRpbWU9MCwgaXNTaWxlbnQ9ZmFsc2UpIHtcbiAgICBwb2ludCA9IHBvaW50LmNsb25lKClcblxuICAgIHRoaXMuZGV0ZXJtaW5lRGlyZWN0aW9uKHBvaW50KVxuICAgIHRoaXMucG9zaXRpb24gPSBwb2ludFxuXG4gICAgdGhpcy5fc2V0VHJhbnNpdGlvbih0aW1lKVxuICAgIHRoaXMuX3NldFRyYW5zbGF0ZShwb2ludC5zdWIodGhpcy5vZmZzZXQpKVxuXG4gICAgaWYgKCFpc1NpbGVudCkge1xuICAgICAgdGhpcy5lbWl0KCdkcmFnOm1vdmUnKVxuICAgIH1cbiAgfVxuXG4gIHBpblBvc2l0aW9uKHBvaW50LCB0aW1lPTAsIHNpbGVudD10cnVlKSB7XG4gICAgdGhpcy5waW5uZWRQb3NpdGlvbiA9IHBvaW50LmNsb25lKClcbiAgICB0aGlzLm1vdmUodGhpcy5waW5uZWRQb3NpdGlvbiwgdGltZSwgc2lsZW50KVxuICB9XG5cbiAgcmVzZXRQb3NpdGlvblRvSW5pdGlhbCAoKSB7XG4gICAgdGhpcy5waW5Qb3NpdGlvbih0aGlzLmluaXRpYWxQb3NpdGlvbilcbiAgfVxuXG4gIHJlZnJlc2hQb3NpdGlvbiAoKSB7XG4gICAgdGhpcy5zZXRQb3NpdGlvbih0aGlzLmdldFBvc2l0aW9uKCkpXG4gIH1cblxuICBzZXRQb3NpdGlvbihwb2ludCkge1xuICAgIHBvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIHRoaXMucG9zaXRpb24gPSBwb2ludFxuICAgIHRoaXMuX3NldFRyYW5zaXRpb24oMClcbiAgICB0aGlzLl9zZXRUcmFuc2xhdGUocG9pbnQuc3ViKHRoaXMub2Zmc2V0KSlcbiAgfVxuXG4gIGRldGVybWluZURpcmVjdGlvbihwb2ludCkge1xuICAgIHRoaXMubGVmdERpcmVjdGlvbiA9ICh0aGlzLnBvc2l0aW9uLnggPCBwb2ludC54KVxuICAgIHRoaXMucmlnaHREaXJlY3Rpb24gPSAodGhpcy5wb3NpdGlvbi54ID4gcG9pbnQueClcbiAgICB0aGlzLnVwRGlyZWN0aW9uID0gKHRoaXMucG9zaXRpb24ueSA+IHBvaW50LnkpXG4gICAgdGhpcy5kb3duRGlyZWN0aW9uID0gKHRoaXMucG9zaXRpb24ueSA8IHBvaW50LnkpXG4gIH1cblxuICBkcmFnU3RhcnQoZXZlbnQpIHtcbiAgICB0aGlzLmN1cnJlbnRFdmVudCA9IGV2ZW50XG4gICAgaWYgKCF0aGlzLl9lbmFibGUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGlzVG91Y2hFdmVudCA9IChpc1RvdWNoICYmIChldmVudCBpbnN0YW5jZW9mIHdpbmRvdy5Ub3VjaEV2ZW50KSlcblxuICAgIHRoaXMuX3N0YXJ0VG91Y2hQb2ludCA9IG5ldyBQb2ludChcbiAgICAgIGlzVG91Y2hFdmVudCA/IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYIDogZXZlbnQuY2xpZW50WCxcbiAgICAgIGlzVG91Y2hFdmVudCA/IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZIDogZXZlbnQuY2xpZW50WVxuICAgIClcblxuICAgIHRoaXMuX3N0YXJ0UG9zaXRpb24gPSB0aGlzLmdldFBvc2l0aW9uKClcbiAgICBpZiAoaXNUb3VjaEV2ZW50KSB7XG4gICAgICB0aGlzLl90b3VjaElkID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uaWRlbnRpZmllclxuICAgIH1cblxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgaWYgKGV2ZW50LnRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSW5wdXRFbGVtZW50IHx8XG4gICAgICAgICAgZXZlbnQudGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJbnB1dEVsZW1lbnQpIHtcbiAgICAgIGV2ZW50LnRhcmdldC5mb2N1cygpXG4gICAgfVxuXG4gICAgaWYgKCEodGhpcy5uYXRpdmVEcmFnQW5kRHJvcCB8fFxuICAgICAgICAgICAgZXZlbnQudGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJbnB1dEVsZW1lbnQgfHxcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSW5wdXRFbGVtZW50KSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIH1cblxuICAgIGlmICh0aGlzLm5hdGl2ZURyYWdBbmREcm9wKSB7XG4gICAgICBjb25zdCBpc1NhZmFyaSA9L3ZlcnNpb25cXC8oXFxkKykuKz9zYWZhcmkvaS50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KVxuICAgICAgaWYgKChpc1RvdWNoRXZlbnQgJiYgdGhpcy5lbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3BPblRvdWNoKSB8fFxuICAgICAgICAgICAgIGlzU2FmYXJpIHx8XG4gICAgICAgICAgICAgdGhpcy5lbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3BGb3JBbGwpIHtcbiAgICAgICAgdGhpcy5lbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3AoZXZlbnQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsZW1lbnQuZHJhZ2dhYmxlID0gdHJ1ZVxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fbmF0aXZlRHJhZ0VuZCwgaXNTdXBwb3J0UGFzc2l2ZUV2ZW50cyA/IHsgcGFzc2l2ZTogZmFsc2UgfSA6IGZhbHNlKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlLCBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzID8geyBwYXNzaXZlOiBmYWxzZSB9IDogZmFsc2UpXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlLCBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzID8geyBwYXNzaXZlOiBmYWxzZSB9IDogZmFsc2UpXG5cbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kLCBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzID8geyBwYXNzaXZlOiBmYWxzZSB9IDogZmFsc2UpXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZCwgaXNTdXBwb3J0UGFzc2l2ZUV2ZW50cyA/IHsgcGFzc2l2ZTogZmFsc2UgfSA6IGZhbHNlKVxuICAgIH1cblxuICAgIHRoaXMuaXNEcmFnZ2luZyA9IHRydWVcbiAgICB0aGlzLmVtaXQoJ2RyYWc6c3RhcnQnKVxuICAgIGFkZENsYXNzKHRoaXMuZWxlbWVudCwgJ2RyYWdlZS1hY3RpdmUnKVxuICAgIHRoaXMuZW1pdCgnZHJhZzptb3ZlJylcbiAgfVxuXG4gIHN0b3BEcmFnZ2luZygpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCB0aGlzLl9uYXRpdmVEcmFnT3ZlcilcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcm9wJywgdGhpcy5fbmF0aXZlRHJvcClcbiAgICB0aGlzLmVsZW1lbnQuZHJhZ2dhYmxlID0gZmFsc2VcbiAgICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZVxuICAgIHJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudCwgJ2RyYWdlZS1hY3RpdmUnKVxuICB9XG5cbiAgZHJhZ01vdmUoZXZlbnQpIHtcbiAgICB0aGlzLmN1cnJlbnRFdmVudCA9IGV2ZW50XG4gICAgbGV0IHRvdWNoXG5cbiAgICBjb25zdCBpc1RvdWNoRXZlbnQgPSAoaXNUb3VjaCAmJiAoZXZlbnQgaW5zdGFuY2VvZiB3aW5kb3cuVG91Y2hFdmVudCkpXG4gICAgaWYgKGlzVG91Y2hFdmVudCkge1xuICAgICAgdG91Y2ggPSBnZXRUb3VjaEJ5SUQoZXZlbnQsIHRoaXMuX3RvdWNoSWQpXG5cbiAgICAgIGlmICghdG91Y2gpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc3QgdG91Y2hQb2ludCA9IG5ldyBQb2ludChcbiAgICAgIGlzVG91Y2hFdmVudCA/IHRvdWNoLnBhZ2VYIDogZXZlbnQuY2xpZW50WCxcbiAgICAgIGlzVG91Y2hFdmVudCA/IHRvdWNoLnBhZ2VZIDogZXZlbnQuY2xpZW50WVxuICAgIClcblxuICAgIGxldCBwb2ludCA9IHRoaXMuX3N0YXJ0UG9zaXRpb24uYWRkKHRvdWNoUG9pbnQuc3ViKHRoaXMuX3N0YXJ0VG91Y2hQb2ludCkpXG4gICAgcG9pbnQgPSB0aGlzLmJvdW5kaW5nLmJvdW5kKHBvaW50LCB0aGlzLmdldFNpemUoKSlcbiAgICB0aGlzLnRvdWNoUG9pbnQgPSB0b3VjaFBvaW50XG4gICAgdGhpcy5tb3ZlKHBvaW50KVxuICB9XG5cbiAgZHJhZ0VuZChldmVudCkge1xuICAgIGNvbnN0IGlzVG91Y2hFdmVudCA9IChpc1RvdWNoICYmIChldmVudCBpbnN0YW5jZW9mIHdpbmRvdy5Ub3VjaEV2ZW50KSlcblxuICAgIGlmIChpc1RvdWNoRXZlbnQgJiYgIWdldFRvdWNoQnlJRChldmVudCwgdGhpcy5fdG91Y2hJZCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIHRoaXMuZHJhZ0VuZEFjdGlvbigpXG4gICAgdGhpcy5lbWl0KCdkcmFnOmVuZCcpXG5cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG5cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcblxuICAgIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnZHJhZ2dhYmxlJylcbiAgICByZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnQsICdkcmFnZWUtYWN0aXZlJylcbiAgfVxuXG4gIG5hdGl2ZURyYWdTdGFydChldmVudCkge1xuICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0JywgJ0ZpcmVGb3ggZml4JylcbiAgICBldmVudC5kYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCA9ICdtb3ZlJ1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgdGhpcy5fbmF0aXZlRHJhZ092ZXIpXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIHRoaXMuX25hdGl2ZURyYWdFbmQpXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIHRoaXMuX25hdGl2ZURyb3ApXG4gIH1cblxuICBuYXRpdmVEcmFnT3ZlcihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBldmVudC5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9ICdtb3ZlJ1xuICAgIGFkZENsYXNzKHRoaXMuZWxlbWVudCwgJ2RyYWdlZS1wbGFjZWhvbGRlcicpXG4gICAgdGhpcy5jdXJyZW50RXZlbnQgPSBldmVudFxuICAgIGlmIChldmVudC5jbGllbnRYID09PSAwICYmIGV2ZW50LmNsaWVudFkgPT09IDApIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHRvdWNoUG9pbnQgPSBuZXcgUG9pbnQoZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSlcbiAgICBsZXQgcG9pbnQgPSB0aGlzLl9zdGFydFBvc2l0aW9uLmFkZCh0b3VjaFBvaW50LnN1Yih0aGlzLl9zdGFydFRvdWNoUG9pbnQpKVxuICAgIHBvaW50ID0gdGhpcy5ib3VuZGluZy5ib3VuZChwb2ludCwgdGhpcy5nZXRTaXplKCkpXG4gICAgdGhpcy50b3VjaFBvaW50ID0gdG91Y2hQb2ludFxuICAgIHRoaXMucG9zaXRpb24gPSBwb2ludFxuICAgIHRoaXMuZW1pdCgnZHJhZzptb3ZlJylcbiAgfVxuXG4gIG5hdGl2ZURyYWdFbmQoX2V2ZW50KSB7XG4gICAgcmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50LCAnZHJhZ2VlLXBsYWNlaG9sZGVyJylcbiAgICB0aGlzLmRyYWdFbmRBY3Rpb24oKVxuICAgIHRoaXMuZW1pdCgnZHJhZzplbmQnKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgdGhpcy5fbmF0aXZlRHJhZ092ZXIpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIHRoaXMuX25hdGl2ZURyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX25hdGl2ZURyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJvcCcsIHRoaXMuX25hdGl2ZURyb3ApXG4gICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2VcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkcmFnZ2FibGUnKVxuICAgIHJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudCwgJ2RyYWdlZS1hY3RpdmUnKVxuICB9XG5cbiAgbmF0aXZlRHJvcChldmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wKGV2ZW50KSB7XG4gICAgY29uc3QgcGFyZW50UmVjdCA9IHRoaXMucGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgY29uc3QgY2xvbmVkRWxlbWVudCA9IHRoaXMuZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSlcbiAgICBjbG9uZWRFbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BlcnR5XSA9ICcnXG4gICAgY29weVN0eWxlcyh0aGlzLmVsZW1lbnQsIGNsb25lZEVsZW1lbnQpXG4gICAgY2xvbmVkRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSdcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNsb25lZEVsZW1lbnQpXG4gICAgYWRkQ2xhc3ModGhpcy5lbGVtZW50LCAnZHJhZ2VlLXBsYWNlaG9sZGVyJylcblxuICAgIGNvbnN0IGVtdWxhdGlvbkRyYWdnYWJsZSA9IG5ldyBEcmFnZ2FibGUoY2xvbmVkRWxlbWVudCwge1xuICAgICAgcGFyZW50OiBkb2N1bWVudC5ib2R5LFxuICAgICAgb246IHtcbiAgICAgICAgJ2RyYWc6bW92ZSc6ICgpID0+IHtcbiAgICAgICAgICB0aGlzLnBvc2l0aW9uID0gbmV3IFBvaW50KFxuICAgICAgICAgICAgZW11bGF0aW9uRHJhZ2dhYmxlLnBvc2l0aW9uLnggLSBwYXJlbnRSZWN0LmxlZnQgLSB3aW5kb3cuc2Nyb2xsWCxcbiAgICAgICAgICAgIGVtdWxhdGlvbkRyYWdnYWJsZS5wb3NpdGlvbi55IC0gcGFyZW50UmVjdC50b3AgLSB3aW5kb3cuc2Nyb2xsWVxuICAgICAgICAgIClcbiAgICAgICAgICB0aGlzLmVtaXQoJ2RyYWc6bW92ZScpXG4gICAgICAgIH0sXG4gICAgICAgICdkcmFnOmVuZCc6ICgpID0+IHtcbiAgICAgICAgICBlbXVsYXRpb25EcmFnZ2FibGUuZGVzdHJveSgpXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChjbG9uZWRFbGVtZW50KVxuICAgICAgICAgIHJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudCwgJ2RyYWdlZS1wbGFjZWhvbGRlcicpXG4gICAgICAgICAgcmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50LCAnZHJhZ2VlLWFjdGl2ZScpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgZW11bGF0aW9uRHJhZ2dhYmxlLm1vdmUobmV3IFBvaW50KFxuICAgICAgdGhpcy5waW5uZWRQb3NpdGlvbi54ICsgcGFyZW50UmVjdC5sZWZ0ICsgd2luZG93LnNjcm9sbFgsXG4gICAgICB0aGlzLnBpbm5lZFBvc2l0aW9uLnkgKyBwYXJlbnRSZWN0LnRvcCArIHdpbmRvdy5zY3JvbGxZXG4gICAgKSlcblxuICAgIGVtdWxhdGlvbkRyYWdnYWJsZS5kcmFnU3RhcnQoZXZlbnQpXG4gIH1cblxuICBkcmFnRW5kQWN0aW9uKCkge1xuICAgIHRoaXMucGluUG9zaXRpb24odGhpcy5wb3NpdGlvbilcbiAgfVxuXG4gIGdldFJlY3RhbmdsZSgpIHtcbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZSh0aGlzLnBvc2l0aW9uLCB0aGlzLmdldFNpemUoKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgdGhpcy5nZXRTaXplKHRydWUpXG4gICAgaWYgKHRoaXMuYm91bmRpbmcucmVmcmVzaCkge1xuICAgICAgdGhpcy5ib3VuZGluZy5yZWZyZXNoKClcbiAgICB9XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuaGFuZGxlci5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQpXG4gICAgdGhpcy5oYW5kbGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgdGhpcy5fbmF0aXZlRHJhZ1N0YXJ0KVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgdGhpcy5fbmF0aXZlRHJhZ092ZXIpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIHRoaXMuX25hdGl2ZURyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX25hdGl2ZURyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJvcCcsIHRoaXMuX25hdGl2ZURyb3ApXG4gICAgdGhpcy5yZXNldEVtaXR0ZXIoKVxuXG4gICAgY29uc3QgaW5kZXggPSBkcmFnZ2FibGVzLmluZGV4T2YodGhpcylcbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgZHJhZ2dhYmxlcy5zcGxpY2UoaW5kZXgsIDEpXG4gICAgfVxuICB9XG5cbiAgZ2V0IHBhcmVudCgpIHtcbiAgICByZXR1cm4gKHRoaXMuX3BhcmVudCA9IHRoaXMuX3BhcmVudCB8fCB0aGlzLm9wdGlvbnMucGFyZW50IHx8IGdldERlZmF1bHRQYXJlbnQodGhpcy5lbGVtZW50KSlcbiAgfVxuXG4gIGdldCBib3VuZGluZygpIHtcbiAgICByZXR1cm4gKHRoaXMuX2JvdW5kaW5nID0gdGhpcy5fYm91bmRpbmcgfHwgdGhpcy5vcHRpb25zLmJvdW5kaW5nIHx8IG5ldyBCb3VuZFRvRWxlbWVudCh0aGlzLnBhcmVudCwgdGhpcy5wYXJlbnQpKVxuICB9XG5cbiAgZ2V0IGhhbmRsZXIoKSB7XG4gICAgaWYgKCF0aGlzLl9oYW5kbGVyKSB7XG4gICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5oYW5kbGVyID09PSAnc3RyaW5nJykge1xuICAgICAgICB0aGlzLl9oYW5kbGVyID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5vcHRpb25zLmhhbmRsZXIpIHx8IHRoaXMuZWxlbWVudFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5faGFuZGxlciA9IHRoaXMub3B0aW9ucy5oYW5kbGVyIHx8IHRoaXMuZWxlbWVudFxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9oYW5kbGVyXG4gIH1cblxuICBnZXQgbmF0aXZlRHJhZ0FuZERyb3AoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5uYXRpdmVEcmFnQW5kRHJvcCB8fCBmYWxzZVxuICB9XG5cbiAgZ2V0IGVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcE9uVG91Y2goKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5lbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3BPblRvdWNoIHx8IHRydWVcbiAgfVxuXG4gIGdldCBlbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3BGb3JBbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5lbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3BGb3JBbGwgfHwgZmFsc2VcbiAgfVxuXG4gIGdldCBlbmFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZVxuICB9XG5cbiAgc2V0IGVuYWJsZShlbmFibGUpIHtcbiAgICBpZiAoZW5hYmxlKSB7XG4gICAgICByZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnQsICdkcmFnZWUtZGlzYWJsZScpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFkZENsYXNzKHRoaXMuZWxlbWVudCwgJ2RyYWdlZS1kaXNhYmxlJylcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlID0gZW5hYmxlXG4gIH1cbn1cblxuRHJhZ2dhYmxlLmVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKERyYWdnYWJsZSlcbkRyYWdnYWJsZS5lbWl0dGVyLm9uKCdkcmFnZ2FibGU6Y3JlYXRlJywgYWRkVG9EZWZhdWx0U2NvcGUpXG4iLCJpbXBvcnQgcmVtb3ZlSXRlbSBmcm9tICcuL3V0aWxzL3JlbW92ZS1hcnJheS1pdGVtJ1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50RW1pdHRlcidcbmltcG9ydCB7XG4gIGdldERpc3RhbmNlLFxuICBpbmRleE9mTmVhcmVzdFBvaW50XG59IGZyb20gJy4vZ2VvbWV0cnkvZGlzdGFuY2VzJ1xuXG5pbXBvcnQgRHJhZ2dhYmxlIGZyb20gJy4vZHJhZ2dhYmxlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0IGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoZHJhZ2dhYmxlcywgb3B0aW9ucz17fSkge1xuICAgIHN1cGVyKHVuZGVmaW5lZCwgb3B0aW9ucylcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHRpbWVFbmQ6IDIwMCxcbiAgICAgIHRpbWVFeGNhbmdlOiA0MDAsXG4gICAgICByYWRpdXM6IDMwLFxuICAgICAgZ2V0RGlzdGFuY2U6IGdldERpc3RhbmNlXG4gICAgfSwgb3B0aW9ucylcblxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZXNcbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLl9lbmFibGUgPSB0cnVlXG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2godGhpcy5pbml0RHJhZ2dhYmxlLCB0aGlzKVxuICB9XG5cbiAgaW5pdERyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICBkcmFnZ2FibGUuZW5hYmxlID0gdGhpcy5fZW5hYmxlXG4gICAgZHJhZ2dhYmxlLm9uKCdkcmFnOm1vdmUnLCAoKSA9PiB0aGlzLm9uTW92ZShkcmFnZ2FibGUpKVxuICAgIGRyYWdnYWJsZS5kcmFnRW5kQWN0aW9uID0gKCkgPT4gZHJhZ2dhYmxlLnBpblBvc2l0aW9uKGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbiwgdGhpcy5vcHRpb25zLnRpbWVFbmQpXG4gIH1cblxuICBvbk1vdmUoZHJhZ2dhYmxlKSB7XG4gICAgY29uc3Qgc29ydGVkRHJhZ2dhYmxlcyA9IHRoaXMuZ2V0U29ydGVkRHJhZ2dhYmxlcygpXG4gICAgY29uc3QgcGlubmVkUG9zaXRpb25zID0gc29ydGVkRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uKVxuXG4gICAgY29uc3QgY3VycmVudEluZGV4ID0gc29ydGVkRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSlcbiAgICBjb25zdCB0YXJnZXRJbmRleCA9IGluZGV4T2ZOZWFyZXN0UG9pbnQocGlubmVkUG9zaXRpb25zLCBkcmFnZ2FibGUucG9zaXRpb24sIHRoaXMub3B0aW9ucy5yYWRpdXMsIHRoaXMub3B0aW9ucy5nZXREaXN0YW5jZSlcblxuICAgIGlmICh0YXJnZXRJbmRleCAhPT0gLTEgJiYgY3VycmVudEluZGV4ICE9PSB0YXJnZXRJbmRleCkge1xuICAgICAgaWYgKHRhcmdldEluZGV4IDwgY3VycmVudEluZGV4KSB7XG4gICAgICAgIGZvciAobGV0IGk9dGFyZ2V0SW5kZXg7IGk8Y3VycmVudEluZGV4OyBpKyspIHtcbiAgICAgICAgICBzb3J0ZWREcmFnZ2FibGVzW2ldLnBpblBvc2l0aW9uKHBpbm5lZFBvc2l0aW9uc1tpKzFdLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAobGV0IGk9Y3VycmVudEluZGV4OyBpPHRhcmdldEluZGV4OyBpKyspIHtcbiAgICAgICAgICBzb3J0ZWREcmFnZ2FibGVzW2krMV0ucGluUG9zaXRpb24ocGlubmVkUG9zaXRpb25zW2ldLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGRyYWdnYWJsZS5uYXRpdmVEcmFnQW5kRHJvcCkge1xuICAgICAgICBkcmFnZ2FibGUucGluUG9zaXRpb24ocGlubmVkUG9zaXRpb25zW3RhcmdldEluZGV4XSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbiA9IHBpbm5lZFBvc2l0aW9uc1t0YXJnZXRJbmRleF1cbiAgICAgIH1cblxuICAgICAgdGhpcy5lbWl0KCdsaXN0OmNoYW5nZScpXG4gICAgfVxuICB9XG5cbiAgZ2V0Q3VycmVudFBpbm5lZFBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5kcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24uY2xvbmUoKSlcbiAgfVxuXG4gIGdldFNvcnRlZERyYWdnYWJsZXMoKSB7XG4gICAgY29uc3QgaW5pdGlhbFBvc2l0aW9ucyA9IHRoaXMuZHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLmluaXRpYWxQb3NpdGlvbilcblxuICAgIGNvbnN0IHNvcnRlZERyYWdnYWJsZXMgPSBpbml0aWFsUG9zaXRpb25zLm1hcCgocG9zaXRpb24pID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmRyYWdnYWJsZXMuZmlsdGVyKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbi5jb21wYXJlKHBvc2l0aW9uKSlbMF1cbiAgICB9KVxuXG4gICAgcmV0dXJuIHNvcnRlZERyYWdnYWJsZXNcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5yZXNldFBvc2l0aW9uVG9Jbml0aWFsKCkpXG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5yZWZyZXNoKCkpXG4gIH1cblxuICBhZGQoZHJhZ2dhYmxlcykge1xuICAgIGlmICghKGRyYWdnYWJsZXMgaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICAgIGRyYWdnYWJsZXMgPSBbZHJhZ2dhYmxlc11cbiAgICB9XG4gICAgZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHRoaXMuaW5pdERyYWdnYWJsZShkcmFnZ2FibGUpKVxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IHRoaXMuZHJhZ2dhYmxlcy5jb25jYXQoZHJhZ2dhYmxlcylcbiAgfVxuXG4gIHJlbW92ZShkcmFnZ2FibGVzKSB7XG4gICAgY29uc3QgaW5pdGlhbFBvc2l0aW9ucyA9IHRoaXMuZHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLmluaXRpYWxQb3NpdGlvbilcbiAgICBjb25zdCBsaXN0ID0gW11cbiAgICBjb25zdCBzb3J0ZWREcmFnZ2FibGVzID0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcblxuICAgIGlmICghKGRyYWdnYWJsZXMgaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICAgIGRyYWdnYWJsZXMgPSBbZHJhZ2dhYmxlc11cbiAgICB9XG5cbiAgICBkcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLnJlc2V0T24oJ2RyYWc6ZW5kJylcbiAgICAgIGRyYWdnYWJsZS5yZXNldE9uKCdkcmFnOm1vdmUnKVxuICAgICAgcmVtb3ZlSXRlbSh0aGlzLmRyYWdnYWJsZXMsIGRyYWdnYWJsZSlcbiAgICB9KVxuXG4gICAgbGV0IGogPSAwXG4gICAgc29ydGVkRHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGlmICh0aGlzLmRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMSkge1xuICAgICAgICBpZiAoZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uICE9PSBpbml0aWFsUG9zaXRpb25zW2pdKSB7XG4gICAgICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKGluaXRpYWxQb3NpdGlvbnNbal0sIHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSlcbiAgICAgICAgfVxuICAgICAgICBkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uID0gaW5pdGlhbFBvc2l0aW9uc1tqXVxuICAgICAgICBqKytcbiAgICAgICAgbGlzdC5wdXNoKGRyYWdnYWJsZSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGxpc3RcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMucmVtb3ZlKHRoaXMuZHJhZ2dhYmxlcy5zbGljZSgpKVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUuZGVzdHJveSgpKVxuICB9XG5cbiAgZ2V0IHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDdXJyZW50UGlubmVkUG9zaXRpb25zKClcbiAgfVxuXG4gIHNldCBwb3NpdGlvbnMocG9zaXRpb25zKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9ICd3cm9uZyBhcnJheSBsZW5ndGgnXG4gICAgaWYgKHBvc2l0aW9ucy5sZW5ndGggPT09IHRoaXMuZHJhZ2dhYmxlcy5sZW5ndGgpIHtcbiAgICAgIHBvc2l0aW9ucy5mb3JFYWNoKChwb2ludCwgaSkgPT4ge1xuICAgICAgICB0aGlzLmRyYWdnYWJsZXNbaV0ucGluUG9zaXRpb24ocG9pbnQpXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBtZXNzYWdlXG4gICAgfVxuICB9XG5cbiAgZ2V0IGVuYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlXG4gIH1cblxuICBzZXQgZW5hYmxlKGVuYWJsZSkge1xuICAgIHRoaXMuX2VuYWJsZSA9IGVuYWJsZVxuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5lbmFibGUgPSBlbmFibGVcbiAgICB9KVxuICB9XG5cbiAgc3RhdGljIGZhY3RvcnkocGFyZW50RWxlbWVudCwgZWxlbWVudHMsIG9wdGlvbnM9e30pIHtcbiAgICBjb25zdCBkcmFnZ2FibGVzID0gQXJyYXkuZnJvbShlbGVtZW50cykubWFwKChlbGVtZW50KSA9PiB7XG4gICAgICByZXR1cm4gbmV3IERyYWdnYWJsZShlbGVtZW50LCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgcGFyZW50OiBwYXJlbnRFbGVtZW50XG4gICAgICB9LCBvcHRpb25zLmRyYWdnYWJsZSB8fCB7fSkpXG4gICAgfSlcbiAgICByZXR1cm4gbmV3IExpc3QoZHJhZ2dhYmxlcywgb3B0aW9ucy5saXN0IHx8IHt9KVxuICB9XG59XG4iLCJmdW5jdGlvbiBzZXRTdHlsZShlbGVtZW50LCBzdHlsZSkge1xuICBzdHlsZSA9IHN0eWxlIHx8IHt9XG4gIGxldCBjc3NUZXh0ID0gJydcbiAgZm9yIChjb25zdCBrZXkgaW4gc3R5bGUpIHtcbiAgICBpZiAoc3R5bGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgY3NzVGV4dCArPSBrZXkgKyAnOiAnICsgc3R5bGVba2V5XSArICc7ICdcbiAgICB9XG4gIH1cblxuICBlbGVtZW50LnN0eWxlLmNzc1RleHQgPSBjc3NUZXh0XG59XG5cbmZ1bmN0aW9uIGFwcGVuZEZpcnN0Q2hpbGQoZWxlbWVudCwgbm9kZSkge1xuICBpZiAoZWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgZWxlbWVudC5pbnNlcnRCZWZvcmUobm9kZSwgZWxlbWVudC5maXJzdENoaWxkKVxuICB9IGVsc2Uge1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQobm9kZSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVDYW52YXMoYXJlYSwgcmVjdGFnbGUpIHtcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJylcbiAgaWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGFyZWEpLnBvc2l0aW9uID09PSAnc3RhdGljJykge1xuICAgIGFyZWEuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnXG4gIH1cblxuICBjYW52YXMuc2V0QXR0cmlidXRlKCd3aWR0aCcsIHJlY3RhZ2xlLnNpemUueCArICdweCcpXG4gIGNhbnZhcy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIHJlY3RhZ2xlLnNpemUueSArICdweCcpXG4gIHNldFN0eWxlKGNhbnZhcywge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGxlZnQ6IHJlY3RhZ2xlLnBvc2l0aW9uLnkgKyAncHgnLFxuICAgIHRvcDogcmVjdGFnbGUucG9zaXRpb24ueSArICdweCcsXG4gICAgd2lkdGg6IHJlY3RhZ2xlLnNpemUueCArICdweCcsXG4gICAgaGVpZ2h0OiByZWN0YWdsZS5zaXplLnkgKyAncHgnXG4gIH0pXG4gIGFwcGVuZEZpcnN0Q2hpbGQoYXJlYSwgY2FudmFzKVxuICByZXR1cm4gY2FudmFzXG59XG4iLCJpbXBvcnQgY3JlYXRlQ2FudmFzIGZyb20gJy4vdXRpbHMvY3JlYXRlLWNhbnZhcydcbmltcG9ydCBQb2ludCBmcm9tICcuL2dlb21ldHJ5L3BvaW50J1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tICcuL2dlb21ldHJ5L3JlY3RhbmdsZSdcblxuaW1wb3J0IHsgZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtIH0gZnJvbSAnLi9nZW9tZXRyeS9hbmdsZXMnXG5pbXBvcnQgeyBCb3VuZFRvTGluZSB9IGZyb20gJy4vYm91bmRpbmcnXG5pbXBvcnQgRHJhZ2dhYmxlIGZyb20gJy4vZHJhZ2dhYmxlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTcGlkZXIge1xuICBjb25zdHJ1Y3RvcihhcmVhLCBlbGVtZW50cywgb3B0aW9ucz17fSkge1xuICAgIGNvbnN0IGFyZWFSZWN0YW5nbGUgPSBSZWN0YW5nbGUuZnJvbUVsZW1lbnQoYXJlYSwgYXJlYSlcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGFuZ2xlOiAwLFxuICAgICAgZEFuZ2xlOiAyICogTWF0aC5QSSAvIGVsZW1lbnRzLmxlbmd0aCxcbiAgICAgIGNlbnRlcjogYXJlYVJlY3RhbmdsZS5nZXRDZW50ZXIoKSxcbiAgICAgIHN0YXJ0UmFkaXVzOiA1MCxcbiAgICAgIGVuZFJhZGl1czogYXJlYVJlY3RhbmdsZS5nZXRNaW5TaWRlKCkgLyAyLFxuICAgICAgbGluZVdpZHRoOiAyLFxuICAgICAgc3Ryb2tlU3R5bGU6ICcjZmY1NTc3JyxcbiAgICAgIGZpbGxTdHlsZTogJ3JnYmEoMTUwLDI1NSw1MCwwLjgpJ1xuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0aGlzLmFyZWEgPSBhcmVhXG4gICAgdGhpcy5hcmVhUmVjdGFuZ2xlID0gYXJlYVJlY3RhbmdsZVxuICAgIHRoaXMuaW5pdChlbGVtZW50cylcbiAgfVxuXG4gIGluaXQoZWxlbWVudHMpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNyZWF0ZUNhbnZhcyh0aGlzLmFyZWEsIHRoaXMuYXJlYVJlY3RhbmdsZSlcbiAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG5cbiAgICB0aGlzLmRyYWdnYWJsZXMgPSBlbGVtZW50cy5tYXAoKGVsZW1lbnQsIGkpID0+IHtcbiAgICAgIGNvbnN0IGFuZ2xlID0gdGhpcy5vcHRpb25zLmFuZ2xlICsgaSAqIHRoaXMub3B0aW9ucy5kQW5nbGVcbiAgICAgIGNvbnN0IGhhbGZTaXplID0gUG9pbnQuZWxlbWVudFNpemUoZWxlbWVudCkubXVsdCgwLjUpXG4gICAgICBjb25zdCBzdGFydCA9IGdldFBvaW50RnJvbVJhZGlhbFN5c3RlbShhbmdsZSwgdGhpcy5vcHRpb25zLnN0YXJ0UmFkaXVzLCB0aGlzLm9wdGlvbnMuY2VudGVyKS5zdWIoaGFsZlNpemUpXG4gICAgICBjb25zdCBlbmQgPSBnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oYW5nbGUsIHRoaXMub3B0aW9ucy5lbmRSYWRpdXMsIHRoaXMub3B0aW9ucy5jZW50ZXIpLnN1YihoYWxmU2l6ZSlcblxuICAgICAgcmV0dXJuIG5ldyBEcmFnZ2FibGUoZWxlbWVudCwge1xuICAgICAgICBwYXJlbnQ6IHRoaXMuYXJlYSxcbiAgICAgICAgYm91bmRpbmc6IG5ldyBCb3VuZFRvTGluZShzdGFydCwgZW5kKSxcbiAgICAgICAgcG9zaXRpb246IHN0YXJ0LFxuICAgICAgICBvbjoge1xuICAgICAgICAgICdkcmFnOm1vdmUnOiAoKSA9PiB0aGlzLmRyYXcoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG5cbiAgICB0aGlzLmlzSW5pdCA9IHRydWVcbiAgICB0aGlzLmRyYXcoKVxuICB9XG5cbiAgZHJhdygpIHtcbiAgICBpZiAoIXRoaXMuaXNJbml0KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmFyZWFSZWN0YW5nbGUuc2l6ZS54LCB0aGlzLmFyZWFSZWN0YW5nbGUuc2l6ZS55KVxuICAgIHRoaXMuY29udGV4dC5iZWdpblBhdGgoKVxuXG4gICAgbGV0IHBvaW50ID0gdGhpcy5kcmFnZ2FibGVzWzBdLmdldENlbnRlcigpXG4gICAgdGhpcy5jb250ZXh0Lm1vdmVUbyhwb2ludC54LCBwb2ludC55KVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRyYWdnYWJsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHBvaW50ID0gdGhpcy5kcmFnZ2FibGVzW2ldLmdldENlbnRlcigpXG4gICAgICB0aGlzLmNvbnRleHQubGluZVRvKHBvaW50LngsIHBvaW50LnkpXG4gICAgfVxuICAgIHRoaXMuY29udGV4dC5jbG9zZVBhdGgoKVxuICAgIHRoaXMuY29udGV4dC5saW5lV2lkdGggPSB0aGlzLm9wdGlvbnMubGluZVdpZHRoXG4gICAgdGhpcy5jb250ZXh0LnN0cm9rZVN0eWxlID0gdGhpcy5vcHRpb25zLnN0cm9rZVN0eWxlXG4gICAgdGhpcy5jb250ZXh0LnN0cm9rZSgpXG4gICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IHRoaXMub3B0aW9ucy5maWxsU3R5bGVcbiAgICB0aGlzLmNvbnRleHQuZmlsbCgpXG4gIH1cbn1cbiIsImltcG9ydCBEcmFnZ2FibGUgZnJvbSAnLi9kcmFnZ2FibGUnXG5pbXBvcnQgeyBCb3VuZFRvQXJjIH0gZnJvbSAnLi9ib3VuZGluZydcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudEVtaXR0ZXInXG5cbmltcG9ydCBSZWN0YW5nbGUgZnJvbSAnLi9nZW9tZXRyeS9yZWN0YW5nbGUnXG5pbXBvcnQge1xuICBnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0sXG4gIGdldEFuZ2xlLFxuICBub3JtYWxpemVBbmdsZVxufSBmcm9tICcuL2dlb21ldHJ5L2FuZ2xlcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXJjU2xpZGVyIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoYXJlYSwgZWxlbWVudCwgb3B0aW9ucz17fSkge1xuICAgIHN1cGVyKHVuZGVmaW5lZCwgb3B0aW9ucylcbiAgICBjb25zdCBhcmVhUmVjdGFuZ2xlID0gUmVjdGFuZ2xlLmZyb21FbGVtZW50KGFyZWEsIGFyZWEpXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjZW50ZXI6IGFyZWFSZWN0YW5nbGUuZ2V0Q2VudGVyKCksXG4gICAgICByYWRpdXM6IGFyZWFSZWN0YW5nbGUuZ2V0TWluU2lkZSgpIC8gMixcbiAgICAgIHN0YXJ0QW5nbGU6IE1hdGguUEksXG4gICAgICBlbmRBbmdsZTogMCxcbiAgICAgIGFuZ2xlczogW01hdGguUEksIC1NYXRoLlBJIC8gNCwgMCwgTWF0aC5QSSAvIDQsIE1hdGguUEkgLyAyXSxcbiAgICAgIHRpbWU6IDUwMFxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0aGlzLnNoaWZ0ZWRDZW50ZXIgPSB0aGlzLm9wdGlvbnMuY2VudGVyXG4gICAgdGhpcy5hcmVhID0gYXJlYVxuICAgIHRoaXMuaW5pdChlbGVtZW50KVxuICB9XG5cbiAgaW5pdChlbGVtZW50KSB7XG4gICAgY29uc3QgYW5nbGUgPSB0aGlzLm9wdGlvbnMuc3RhcnRBbmdsZVxuICAgIGNvbnN0IHBvc2l0aW9uID0gZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKFxuICAgICAgYW5nbGUsXG4gICAgICB0aGlzLm9wdGlvbnMucmFkaXVzLFxuICAgICAgdGhpcy5zaGlmdGVkQ2VudGVyXG4gICAgKVxuXG4gICAgdGhpcy5hbmdsZSA9IGFuZ2xlXG4gICAgdGhpcy5kcmFnZ2FibGUgPSBuZXcgRHJhZ2dhYmxlKGVsZW1lbnQsIHtcbiAgICAgIHBhcmVudDogdGhpcy5hcmVhLFxuICAgICAgYm91bmRpbmc6IG5ldyBCb3VuZFRvQXJjKFxuICAgICAgICB0aGlzLnNoaWZ0ZWRDZW50ZXIsXG4gICAgICAgIHRoaXMub3B0aW9ucy5yYWRpdXMsXG4gICAgICAgIHRoaXMub3B0aW9ucy5zdGFydEFuZ2xlLFxuICAgICAgICB0aGlzLm9wdGlvbnMuZW5kQW5nbGVcbiAgICAgICksXG4gICAgICBwb3NpdGlvbjogcG9zaXRpb24sXG4gICAgICBvbjoge1xuICAgICAgICAnZHJhZzptb3ZlJzogKCkgPT4gdGhpcy5jaGFuZ2UoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICB1cGRhdGVBbmdsZSgpIHtcbiAgICB0aGlzLmFuZ2xlID0gZ2V0QW5nbGUodGhpcy5zaGlmdGVkQ2VudGVyLCB0aGlzLmRyYWdnYWJsZS5wb3NpdGlvbilcbiAgfVxuXG4gIGNoYW5nZSgpIHtcbiAgICB0aGlzLnVwZGF0ZUFuZ2xlKClcbiAgICAvLyAgICAgIHZhciBhbmdsZSA9IEdlb21ldHJ5LmdldE5lYXJlc3RBbmdsZSh0aGlzLm9wdGlvbnMuYW5nbGVzLCB0aGlzLmFuZ2xlKTtcbiAgICAvLyAgICAgIHRoaXMuc2V0QW5nbGUoYW5nbGUsdGhpcy5vcHRpb25zLnRpbWUpO1xuICAgIHRoaXMuZW1pdCgnYXJjc2xpZGVyOmNoYW5nZScsIHsgYW5nbGU6IHRoaXMuYW5nbGUgfSlcbiAgfVxuXG4gIHNldEFuZ2xlKGFuZ2xlLCB0aW1lKSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oXG4gICAgICB0aGlzLmFuZ2xlLFxuICAgICAgdGhpcy5vcHRpb25zLnJhZGl1cyxcbiAgICAgIHRoaXMuc2hpZnRlZENlbnRlclxuICAgIClcbiAgICB0aGlzLmFuZ2xlID0gbm9ybWFsaXplQW5nbGUoYW5nbGUsIHBvc2l0aW9uKVxuICAgIHRoaXMuZHJhZ2dhYmxlLnBpblBvc2l0aW9uKHBvc2l0aW9uLCB0aW1lfHwwKVxuICAgIHRoaXMuZW1pdCgnYXJjc2xpZGVyOmNoYW5nZScsIHRoaXMuYW5nbGUpXG4gIH1cbn1cbiIsImltcG9ydCBjcmVhdGVDYW52YXMgZnJvbSAnLi91dGlscy9jcmVhdGUtY2FudmFzJ1xuaW1wb3J0IHJhbmdlIGZyb20gJy4vdXRpbHMvcmFuZ2UnXG5pbXBvcnQgUG9pbnQgZnJvbSAnLi9nZW9tZXRyeS9wb2ludCdcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSAnLi9nZW9tZXRyeS9yZWN0YW5nbGUnXG5cbmltcG9ydCB7IGdldERpc3RhbmNlIH0gZnJvbSAnLi9nZW9tZXRyeS9kaXN0YW5jZXMnXG5cbmltcG9ydCB7XG4gIHRvUmFkaWFuLFxuICBnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0sXG4gIGdldEFuZ2xlLFxuICBub3JtYWxpemVBbmdsZVxufSBmcm9tICcuL2dlb21ldHJ5L2FuZ2xlcydcblxuaW1wb3J0IERyYWdnYWJsZSBmcm9tICcuL2RyYWdnYWJsZSdcbmltcG9ydCB7IEJvdW5kVG9BcmMgfSBmcm9tICcuL2JvdW5kaW5nJ1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50RW1pdHRlcidcblxuY29uc3Qgcm5kID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkqMjU1KVxufVxuXG5jb25zdCB0b0hleFN0cmluZyA9IGZ1bmN0aW9uKGRpZ2l0KSB7XG4gIGxldCBzdHIgPSBkaWdpdC50b1N0cmluZygxNilcbiAgd2hpbGUgKHN0ci5sZW5ndGggPCAyKSB7XG4gICAgc3RyID0gJzAnICsgc3RyXG4gIH1cbiAgcmV0dXJuIHN0clxufVxuXG5mdW5jdGlvbiByYW5kb21Db2xvcigpIHtcbiAgcmV0dXJuIGAjJHt0b0hleFN0cmluZyhybmQoKSl9JHt0b0hleFN0cmluZyhybmQoKSl9JHt0b0hleFN0cmluZyhybmQoKSl9YFxufVxuXG5mdW5jdGlvbiBnZXRBcnJheVdpdGhCb3VuZEluZGV4ZXMoaW5kZXgsIGxlbmd0aCkge1xuICBjb25zdCByZXRJbmRleGVzID0gW11cbiAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgIHJldEluZGV4ZXMucHVzaChpbmRleClcbiAgICByZXRJbmRleGVzLnB1c2goKGluZGV4ICsgMSkgJSBsZW5ndGgpXG4gIH1cblxuICByZXR1cm4gcmV0SW5kZXhlc1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFydCBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yIChhcmVhLCBlbGVtZW50cywgb3B0aW9ucz17fSkge1xuICAgIHN1cGVyKHVuZGVmaW5lZCwgb3B0aW9ucylcbiAgICBjb25zdCBhcmVhUmVjdGFuZ2xlID0gUmVjdGFuZ2xlLmZyb21FbGVtZW50KGFyZWEsIGFyZWEpXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjZW50ZXI6IGFyZWFSZWN0YW5nbGUuZ2V0Q2VudGVyKCksXG4gICAgICByYWRpdXM6IGFyZWFSZWN0YW5nbGUuZ2V0TWluU2lkZSgpIC8gMixcbiAgICAgIHRvdWNoUmFkaXVzOiBhcmVhUmVjdGFuZ2xlLmdldE1pblNpZGUoKSAvIDIsXG4gICAgICBib3VuZEFuZ2xlOiBNYXRoLlBJIC8gOSxcbiAgICAgIGZpbGxTdHlsZXM6IHJhbmdlKDAsIGVsZW1lbnRzLmxlbmd0aCkubWFwKCgpID0+IHJhbmRvbUNvbG9yKCkpLFxuICAgICAgaW5pdEFuZ2xlczogcmFuZ2UoLTkwLCAyNzAsIDM2MCAvIGVsZW1lbnRzLmxlbmd0aCkubWFwKChhbmdsZSkgPT4gdG9SYWRpYW4oYW5nbGUpKSxcbiAgICAgIGxpbWl0SW1nOiBudWxsLFxuICAgICAgbGltaXRJbWdPZmZzZXQ6IG5ldyBQb2ludCgwLCAwKVxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0aGlzLmFyZWEgPSBhcmVhXG4gICAgdGhpcy5hcmVhUmVjdGFuZ2xlID0gYXJlYVJlY3RhbmdsZVxuICAgIHRoaXMuaW5pdChlbGVtZW50cylcbiAgfVxuXG4gIGluaXQoZWxlbWVudHMpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNyZWF0ZUNhbnZhcyh0aGlzLmFyZWEsIHRoaXMuYXJlYVJlY3RhbmdsZSlcbiAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gZWxlbWVudHMubWFwKChlbGVtZW50LCBpKSA9PiB7XG4gICAgICBjb25zdCBhbmdsZSA9IHRoaXMub3B0aW9ucy5pbml0QW5nbGVzW2ldXG4gICAgICBjb25zdCBoYWxmU2l6ZSA9IFBvaW50LmVsZW1lbnRTaXplKGVsZW1lbnQpLm11bHQoMC41KVxuICAgICAgY29uc3QgcG9zaXRpb24gPSBnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oXG4gICAgICAgIGFuZ2xlLFxuICAgICAgICB0aGlzLm9wdGlvbnMudG91Y2hSYWRpdXMsXG4gICAgICAgIHRoaXMub3B0aW9ucy5jZW50ZXIuc3ViKGhhbGZTaXplKVxuICAgICAgKVxuXG4gICAgICByZXR1cm4gbmV3IERyYWdnYWJsZShlbGVtZW50LCB7XG4gICAgICAgIHBhcmVudDogdGhpcy5hcmVhLFxuICAgICAgICBib3VuZGluZzogbmV3IEJvdW5kVG9BcmMoXG4gICAgICAgICAgdGhpcy5vcHRpb25zLmNlbnRlci5zdWIoaGFsZlNpemUpLFxuICAgICAgICAgIHRoaXMub3B0aW9ucy50b3VjaFJhZGl1cyxcbiAgICAgICAgICB0aGlzLmdldEJvdW5kQW5nbGUoaSwgZmFsc2UpLFxuICAgICAgICAgIHRoaXMuZ2V0Qm91bmRBbmdsZShpLCB0cnVlKVxuICAgICAgICApLFxuICAgICAgICBwb3NpdGlvbjogcG9zaXRpb24sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgJ2RyYWc6bW92ZSc6ICgpID0+IHRoaXMuZHJhdygpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcblxuICAgIHRoaXMuaXNJbml0ID0gdHJ1ZVxuICAgIHRoaXMuZHJhdygpXG4gIH1cblxuICB1cGRhdGVBbmdsZXMoKSB7XG4gICAgdGhpcy5hbmdsZXMgPSB0aGlzLmRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGNvbnN0IGhhbGZTaXplID0gZHJhZ2dhYmxlLmdldFNpemUoKS5tdWx0KDAuNSlcbiAgICAgIHJldHVybiBnZXRBbmdsZSh0aGlzLm9wdGlvbnMuY2VudGVyLnN1YihoYWxmU2l6ZSksIGRyYWdnYWJsZS5wb3NpdGlvbilcbiAgICB9KVxuICB9XG5cbiAgZ2V0Qm91bmRBbmdsZShpbmRleCwgaXNDbG9zc2luZykge1xuICAgIGNvbnN0IHNpZ24gPSBpc0Nsb3NzaW5nID8gMSA6IC0xXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgbGV0IGkgPSAoaW5kZXggKyBzaWduKSAlIHRoaXMuYW5nbGVzLmxlbmd0aFxuICAgICAgaWYgKGkgPCAwKSB7XG4gICAgICAgIGkgKz0gdGhpcy5hbmdsZXMubGVuZ3RoXG4gICAgICB9XG4gICAgICByZXR1cm4gbm9ybWFsaXplQW5nbGUodGhpcy5hbmdsZXNbaV0gLSBzaWduICogdGhpcy5vcHRpb25zLmJvdW5kQW5nbGUpXG4gICAgfVxuICB9XG5cbiAgZHJhdygpIHtcbiAgICBpZiAoIXRoaXMuaXNJbml0KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZUFuZ2xlcygpXG4gICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmFyZWFSZWN0YW5nbGUuc2l6ZS54LCB0aGlzLmFyZWFSZWN0YW5nbGUuc2l6ZS55KVxuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChfZHJhZ2dhYmxlLCBpbmRleCkgPT4ge1xuICAgICAgdGhpcy5kcmF3QXJjKHRoaXMuY29udGV4dCwgdGhpcy5vcHRpb25zLmNlbnRlciwgdGhpcy5vcHRpb25zLnJhZGl1cywgaW5kZXgpXG4gICAgfSlcblxuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChfZHJhZ2dhYmxlLCBpbmRleCkgPT4ge1xuICAgICAgdGhpcy5kcmF3TGltaXRJbWcoaW5kZXgpXG4gICAgfSlcblxuICAgIHRoaXMuZW1pdCgnY2hhcnQ6ZHJhdycpXG4gIH1cblxuICBjcmVhdGVDbG9uZShlbGVtZW50LCBvcHRpb25zID0ge30pIHtcbiAgICBpZiAoIXRoaXMuaXNJbml0KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3QgcmVjdGFuZ2xlID0gUmVjdGFuZ2xlLmZyb21FbGVtZW50KGVsZW1lbnQsIGVsZW1lbnQpXG4gICAgY29uc3Qgb3B0cyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY2VudGVyOiByZWN0YW5nbGUuZ2V0Q2VudGVyKCksXG4gICAgICByYWRpdXM6IHJlY3RhbmdsZS5nZXRNaW5TaWRlKCkgLyAyLFxuICAgICAgZmlsbFN0eWxlczogdGhpcy5vcHRpb25zLmZpbGxTdHlsZXNcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgY29uc3QgY2FudmFzID0gY3JlYXRlQ2FudmFzKGVsZW1lbnQsIHJlY3RhbmdsZSlcbiAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJylcbiAgICBjb25zdCBjbG9uZU9iaiA9IHtcbiAgICAgIGRyYXc6ICgpID0+IHtcbiAgICAgICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgcmVjdGFuZ2xlLnNpemUueCwgcmVjdGFuZ2xlLnNpemUueSlcbiAgICAgICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKF9kcmFnZ2FibGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgdGhpcy5kcmF3QXJjKGNvbnRleHQsIG9wdHMuY2VudGVyLCBvcHRzLnJhZGl1cywgaW5kZXgpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICAgIGNsb25lT2JqLmRyYXcoKVxuICAgIHJldHVybiBjbG9uZU9ialxuICB9XG5cbiAgZ2V0RmlsbFN0eWxlKGluZGV4KSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuZmlsbFN0eWxlc1tpbmRleF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5maWxsU3R5bGVzW2luZGV4XSA9IHRoaXMub3B0aW9ucy5maWxsU3R5bGVzW2luZGV4XS5jYWxsKHRoaXMpXG4gICAgfVxuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZmlsbFN0eWxlc1tpbmRleF1cbiAgfVxuXG4gIGRyYXdBcmMoY29udGV4dCwgY2VudGVyLCByYWRpdXMsIGluZGV4KSB7XG4gICAgY29uc3Qgc3RhcnRBbmdsZSA9IHRoaXMuYW5nbGVzW2luZGV4XVxuICAgIGNvbnN0IGVuZEFuZ2xlID0gdGhpcy5hbmdsZXNbKGluZGV4KzEpICUgdGhpcy5hbmdsZXMubGVuZ3RoXVxuICAgIGNvbnN0IGNvbG9yID0gdGhpcy5nZXRGaWxsU3R5bGUoaW5kZXgpXG5cbiAgICBjb250ZXh0LmJlZ2luUGF0aCgpXG4gICAgY29udGV4dC5tb3ZlVG8oY2VudGVyLngsIGNlbnRlci55KVxuICAgIGNvbnRleHQuYXJjKGNlbnRlci54LCBjZW50ZXIueSwgcmFkaXVzLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSwgZmFsc2UpXG4gICAgY29udGV4dC5saW5lVG8oY2VudGVyLngsIGNlbnRlci55KVxuICAgIGNvbnRleHQuY2xvc2VQYXRoKClcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yXG4gICAgY29udGV4dC5maWxsKClcbiAgfVxuXG4gIGRyYXdMaW1pdEltZyhpbmRleCkge1xuICAgIGxldCBwb2ludCwgaW1nXG4gICAgaWYgKHRoaXMub3B0aW9ucy5saW1pdEltZykge1xuICAgICAgaW1nID0gdGhpcy5vcHRpb25zLmxpbWl0SW1nIGluc3RhbmNlb2YgQXJyYXkgPyB0aGlzLm9wdGlvbnMubGltaXRJbWdbaW5kZXhdIDogdGhpcy5vcHRpb25zLmxpbWl0SW1nXG4gICAgfVxuXG4gICAgaWYgKGltZykge1xuICAgICAgY29uc3QgYW5nbGUgPSBub3JtYWxpemVBbmdsZSh0aGlzLmFuZ2xlc1tpbmRleF0pXG4gICAgICBwb2ludCA9IG5ldyBQb2ludCgwLCAtaW1nLmhlaWdodCAvIDIpXG4gICAgICBwb2ludCA9IHBvaW50LmFkZCh0aGlzLm9wdGlvbnMubGltaXRJbWdPZmZzZXQpXG4gICAgICB0aGlzLmNvbnRleHQudHJhbnNsYXRlKHRoaXMuYXJlYVJlY3RhbmdsZS5zaXplLnggLyAyLCB0aGlzLmFyZWFSZWN0YW5nbGUuc2l6ZS55IC8gMilcbiAgICAgIHRoaXMuY29udGV4dC5yb3RhdGUoYW5nbGUpXG4gICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKGltZywgcG9pbnQueCwgcG9pbnQueSlcbiAgICAgIHRoaXMuY29udGV4dC5zZXRUcmFuc2Zvcm0oMSwgMCwgMCwgMSwgMCwgMClcbiAgICB9XG4gIH1cblxuICBnZXRBbmdsZXNEaWZmKCkge1xuICAgIGNvbnN0IGFuZ2xlcyA9IHRoaXMuYW5nbGVzLnNsaWNlKDEpXG4gICAgbGV0IGJhc2VBbmdsZSA9IHRoaXMuYW5nbGVzWzBdXG5cbiAgICBhbmdsZXMucHVzaChiYXNlQW5nbGUpXG4gICAgcmV0dXJuIGFuZ2xlcy5tYXAoKGFuZ2xlKSA9PiB7XG4gICAgICBjb25zdCBkaWZmQW5nbGUgPSBub3JtYWxpemVBbmdsZShhbmdsZSAtIGJhc2VBbmdsZSlcbiAgICAgIGJhc2VBbmdsZSA9IGFuZ2xlXG4gICAgICByZXR1cm4gZGlmZkFuZ2xlXG4gICAgfSlcbiAgfVxuXG4gIGdldFBlcmNlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0QW5nbGVzRGlmZigpLm1hcCgoZGlmZkFuZ2xlKSA9PiBkaWZmQW5nbGUgLyAoMiAqIE1hdGguUEkpKVxuICB9XG5cbiAgZ2V0QXJjQmlzZWN0cml4cygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRBbmdsZXNEaWZmKCkubWFwKChkaWZmQW5nbGUsIGkpID0+IHtcbiAgICAgIHJldHVybiBub3JtYWxpemVBbmdsZSh0aGlzLmFuZ2xlc1tpXSArIGRpZmZBbmdsZSAvIDIpXG4gICAgfSlcbiAgfVxuXG4gIGdldEFyY09uUG9pbnQocG9pbnQpIHtcbiAgICBjb25zdCBhbmdsZSA9IGdldEFuZ2xlKHRoaXMub3B0aW9ucy5jZW50ZXIsIHBvaW50KVxuICAgIGNvbnN0IHJhZGl1cyA9IGdldERpc3RhbmNlKHRoaXMub3B0aW9ucy5jZW50ZXIsIHBvaW50KVxuXG4gICAgaWYgKHJhZGl1cyA+IHRoaXMub3B0aW9ucy5yYWRpdXMpIHtcbiAgICAgIHJldHVybiAtMVxuICAgIH1cblxuICAgIGxldCBvZmZzZXQgPSAtMSwgaSwgalxuICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLmFuZ2xlcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKG9mZnNldCA9PT0gLTEgfHwgdGhpcy5hbmdsZXNbb2Zmc2V0XSA+IHRoaXMuYW5nbGVzW2ldKSB7XG4gICAgICAgIG9mZnNldCA9IGlcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChpID0gMCwgaiA9IG9mZnNldDsgaSA8IHRoaXMuYW5nbGVzLmxlbmd0aDsgaSsrLCBqID0gKGkgKyBvZmZzZXQpICUgdGhpcy5hbmdsZXMubGVuZ3RoKSB7XG4gICAgICBpZiAoYW5nbGUgPCB0aGlzLmFuZ2xlc1tqXSkge1xuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoLS1qIDwgMCkge1xuICAgICAgaiArPSB0aGlzLmFuZ2xlcy5sZW5ndGhcbiAgICB9XG4gICAgcmV0dXJuIGpcbiAgfVxuXG4gIHNldEFuZ2xlcyhhbmdsZXMpIHtcbiAgICB0aGlzLmFuZ2xlcyA9IGFuZ2xlc1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUsIGkpID0+IHtcbiAgICAgIGNvbnN0IGFuZ2xlID0gdGhpcy5hbmdsZXNbaV1cbiAgICAgIGNvbnN0IGhhbGZTaXplID0gZHJhZ2dhYmxlLmdldFNpemUoKS5tdWx0KDAuNSlcbiAgICAgIGNvbnN0IHBvc2l0aW9uID0gZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKFxuICAgICAgICBhbmdsZSxcbiAgICAgICAgdGhpcy5vcHRpb25zLnRvdWNoUmFkaXVzLFxuICAgICAgICB0aGlzLm9wdGlvbnMuY2VudGVyLnN1YihoYWxmU2l6ZSlcbiAgICAgIClcblxuICAgICAgZHJhZ2dhYmxlLm1vdmVBbmRTYXZlKHBvc2l0aW9uKVxuICAgIH0pXG4gICAgdGhpcy5kcmF3KClcbiAgfVxuXG4gIHNldEFjdGl2ZUFyYyhpbmRleCkge1xuICAgIGNvbnN0IGVuYWJsZUluZGV4ZXMgPSBnZXRBcnJheVdpdGhCb3VuZEluZGV4ZXMoaW5kZXgsIHRoaXMuZHJhZ2dhYmxlcy5sZW5ndGgpXG4gICAgdGhpcy5hY3RpdmVBcmNJbmRleCA9IGluZGV4XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSwgaSkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLmVuYWJsZSA9IGVuYWJsZUluZGV4ZXMuaW5kZXhPZihpKSAhPT0gLTFcbiAgICB9KVxuICAgIHRoaXMuZHJhdygpXG4gIH1cbn1cbiIsImltcG9ydCBQb2ludCBmcm9tICcuL2dlb21ldHJ5L3BvaW50J1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tICcuL2dlb21ldHJ5L3BvaW50J1xuaW1wb3J0IERyYWdnYWJsZSBmcm9tICcuL2RyYWdnYWJsZSdcbmltcG9ydCBMaXN0IGZyb20gJy4vbGlzdCdcbmltcG9ydCBUYXJnZXQgZnJvbSAnLi90YXJnZXQnXG5pbXBvcnQgeyBzY29wZXMsIGRlZmF1bHRTY29wZSwgU2NvcGUsIHNjb3BlIH0gZnJvbSAnLi9zY29wZSdcbmltcG9ydCB7IE5vdENyb3NzaW5nU3RyYXRlZ3ksIEZsb2F0TGVmdFN0cmF0ZWd5LCBGbG9hdFJpZ2h0U3RyYXRlZ3kgfSBmcm9tICcuL3Bvc2l0aW9uaW5nJ1xuaW1wb3J0IFNwaWRlciBmcm9tICcuL3NwaWRlcidcbmltcG9ydCBBcmNTbGlkZXIgZnJvbSAnLi9hcmNzbGlkZXInXG5pbXBvcnQgQ2hhcnQgZnJvbSAnLi9jaGFydCdcbmltcG9ydCB7IGdldERpc3RhbmNlLCBnZXRYRGlmZmVyZW5jZSwgZ2V0WURpZmZlcmVuY2UsIHRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3RvcnkgfSBmcm9tICcuL2dlb21ldHJ5L2Rpc3RhbmNlcydcbmltcG9ydCB7IGFkZENsYXNzLCByZW1vdmVDbGFzcyB9IGZyb20gJy4vdXRpbHMvY2xhc3NlcydcbmltcG9ydCB7XG4gIEJvdW5kVG9SZWN0YW5nbGUsXG4gIEJvdW5kVG9FbGVtZW50LFxuICBCb3VuZFRvTGluZVgsXG4gIEJvdW5kVG9MaW5lWSxcbiAgQm91bmRUb0xpbmUsXG4gIEJvdW5kVG9DaXJjbGUsXG4gIEJvdW5kVG9BcmNcbn0gZnJvbSAnLi9ib3VuZGluZydcblxuY29uc3QgYm91bmQgPSB7XG4gIEJvdW5kVG9SZWN0YW5nbGUsXG4gIEJvdW5kVG9FbGVtZW50LFxuICBCb3VuZFRvTGluZVgsXG4gIEJvdW5kVG9MaW5lWSxcbiAgQm91bmRUb0xpbmUsXG4gIEJvdW5kVG9DaXJjbGUsXG4gIEJvdW5kVG9BcmNcbn1cblxuY29uc3QgZGlzdGFuY2UgPSB7XG4gIGdldERpc3RhbmNlLFxuICBnZXRYRGlmZmVyZW5jZSxcbiAgZ2V0WURpZmZlcmVuY2UsXG4gIHRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3Rvcnlcbn1cblxuZXhwb3J0IHtcbiAgRHJhZ2dhYmxlLFxuICBQb2ludCwgUmVjdGFuZ2xlLFxuICBMaXN0LFxuICBUYXJnZXQsXG4gIHNjb3BlcywgZGVmYXVsdFNjb3BlLCBTY29wZSwgc2NvcGUsXG4gIE5vdENyb3NzaW5nU3RyYXRlZ3ksIEZsb2F0TGVmdFN0cmF0ZWd5LCBGbG9hdFJpZ2h0U3RyYXRlZ3ksXG4gIFNwaWRlcixcbiAgQXJjU2xpZGVyLFxuICBDaGFydCxcbiAgYm91bmQsXG4gIGRpc3RhbmNlLFxuICBhZGRDbGFzcywgcmVtb3ZlQ2xhc3Ncbn1cbiJdLCJuYW1lcyI6WyJnZXRTdW1WYWx1ZU9mU3R5bGVSdWxlcyIsImVsZW1lbnQiLCJydWxlcyIsInJlZHVjZSIsInN1bSIsInJ1bGUiLCJwYXJzZUludCIsIndpbmRvdyIsImdldENvbXB1dGVkU3R5bGUiLCJQb2ludCIsIngiLCJ5IiwicCIsImsiLCJwYXJlbnQiLCJwYXJlbnROb2RlIiwiZWxlbWVudFJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJwYXJlbnRSZWN0IiwibGVmdCIsInRvcCIsImlzQ29udGVudEJveFNpemUiLCJ3aWR0aCIsImhlaWdodCIsImhhc0NsYXNzIiwiYyIsInJlIiwiUmVnRXhwIiwidGVzdCIsImNsYXNzTmFtZSIsImFkZENsYXNzIiwicmVwbGFjZSIsInJlbW92ZUNsYXNzIiwiZ2V0RGVmYXVsdFBhcmVudCIsInRhZ05hbWUiLCJFdmVudEVtaXR0ZXIiLCJjb250ZXh0Iiwib3B0aW9ucyIsImV2ZW50cyIsIm9uIiwiT2JqZWN0IiwiZW50cmllcyIsImV2ZW50TmFtZSIsImZuIiwiaW50ZXJydXB0ZWQiLCJhcmdzIiwic2xpY2UiLCJjYWxsIiwiYXJndW1lbnRzIiwiZnVuYyIsImFwcGx5IiwicHVzaCIsInVuc2hpZnQiLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJSZWN0YW5nbGUiLCJwb3NpdGlvbiIsInNpemUiLCJhZGQiLCJtdWx0IiwicmVjdCIsIk1hdGgiLCJtaW4iLCJtYXgiLCJzdWIiLCJyZWN0YW5nbGUiLCJpbmNsdWRlUG9pbnQiLCJnZXRQMyIsImF4aXMiLCJzZWxBeGlzIiwiY3Jvc3NSZWN0YW5nbGUiLCJhbmQiLCJ0aGlzQ2VudGVyIiwiZ2V0Q2VudGVyIiwicmVjdENlbnRlciIsInNpZ24iLCJvZmZzZXQiLCJlbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInN0eWxlIiwiaXNDb25zaWRlclRyYW5zbGF0ZSIsImVsZW1lbnRPZmZzZXQiLCJlbGVtZW50U2l6ZSIsImdldERpc3RhbmNlIiwicDEiLCJwMiIsImR4IiwiZHkiLCJzcXJ0IiwiZ2V0WERpZmZlcmVuY2UiLCJhYnMiLCJnZXRZRGlmZmVyZW5jZSIsInRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3RvcnkiLCJwb3ciLCJpbmRleE9mTmVhcmVzdFBvaW50IiwiYXJyIiwidmFsIiwicmFkaXVzIiwiZ2V0RGlzdGFuY2VGdW5jIiwiaSIsInRlbXAiLCJsZW5ndGgiLCJkaXJlY3RDcm9zc2luZyIsIkwxUDEiLCJMMVAyIiwiTDJQMSIsIkwyUDIiLCJrMSIsImsyIiwiYjEiLCJiMiIsImJvdW5kVG9MaW5lIiwiQSIsIkIiLCJQIiwiQVAiLCJBQiIsImFiMiIsImFwX2FiIiwidCIsImdldFBvaW50T25MaW5lQnlMZW5naHQiLCJMUDEiLCJMUDIiLCJsZW5naHQiLCJwZXJjZW50IiwiYWRkUG9pbnRUb0JvdW5kUG9pbnRzIiwiYm91bmRwb2ludHMiLCJwb2ludCIsImlzUmlnaHQiLCJyZXN1bHQiLCJmaWx0ZXIiLCJiUG9pbnQiLCJnZXRBbmdsZURpZmYiLCJhbHBoYSIsImJldGEiLCJtaW5BbmdsZSIsIm1heEFuZ2xlIiwiUEkiLCJnZXRBbmdsZSIsImRpZmYiLCJub3JtYWxpemVBbmdsZSIsImF0YW4yIiwidG9SYWRpYW4iLCJhbmdsZSIsImJvdW5kQW5nbGUiLCJkbWluIiwiZG1heCIsImdldFBvaW50RnJvbVJhZGlhbFN5c3RlbSIsImNlbnRlciIsImNvcyIsInNpbiIsIkJvdW5kIiwiX3NpemUiLCJCb3VuZFRvUmVjdGFuZ2xlIiwiY2FsY1BvaW50IiwiY2xvbmUiLCJyZWN0UDIiLCJCb3VuZFRvRWxlbWVudCIsImZyb21FbGVtZW50IiwiQm91bmRUb0xpbmVYIiwic3RhcnRZIiwiZW5kWSIsIkJvdW5kVG9MaW5lWSIsInN0YXJ0WCIsImVuZFgiLCJCb3VuZFRvTGluZSIsInN0YXJ0UG9pbnQiLCJlbmRQb2ludCIsInNvbWVLIiwiY29zQmV0YSIsInNpbkJldGEiLCJwb2ludDIiLCJuZXdFbmRQb2ludCIsInBvaW50Q3Jvc3NpbmciLCJCb3VuZFRvQ2lyY2xlIiwiQm91bmRUb0FyYyIsInN0YXJ0QW5nbGUiLCJlbmRBbmdsZSIsIl9zdGFydEFuZ2xlIiwiX2VuZEFuZ2xlIiwiYXJyYXkiLCJyYW5nZSIsInN0YXJ0Iiwic3RvcCIsInN0ZXAiLCJCYXNpY1N0cmF0ZWd5IiwiTm90Q3Jvc3NpbmdTdHJhdGVneSIsInJlY3RhbmdsZUxpc3QiLCJpbmRleGVzT2ZOZXdzIiwic3RhdGljUmVjdGFuZ2xlSW5kZXhlcyIsImluZGV4ZXMiLCJfcmVjdCIsImZvckVhY2giLCJyZW1vdmFibGUiLCJpbmRleE9mU3RhdGljIiwic3RhdGljUmVjdCIsIm1vdmVUb0JvdW5kIiwic29tZSIsImJvdW5kUmVjdCIsImdldFNxdWFyZSIsIm9kbERyYWdnYWJsZXNMaXN0IiwibmV3RHJhZ2dhYmxlcyIsImluZGV4T2ZOZXdzIiwiZHJhZ2dhYmxlcyIsImNvbmNhdCIsImRyYWdnYWJsZSIsIkZsb2F0TGVmdFN0cmF0ZWd5IiwiYXNzaWduIiwicGFkZGluZ1RvcExlZnQiLCJwYWRkaW5nQm90dG9tUmlnaHQiLCJ5R2FwQmV0d2VlbkRyYWdnYWJsZXMiLCJnZXRQb3NpdGlvbiIsIl9pbmRleGVzT2ZOZXdzIiwiZ2V0UDIiLCJib3VuZGFyeVBvaW50cyIsInJlY3RJbmRleCIsImlzVmFsaWQiLCJuZXdMaXN0IiwibGlzdE9sZFBvc2l0aW9uIiwibWFwIiwibmV3RHJhZ2dhYmxlIiwiRmxvYXRSaWdodFN0cmF0ZWd5IiwicGFkZGluZ1RvcFJpZ2h0IiwicGFkZGluZ0JvdHRvbUxlZnQiLCJwYWRkaW5nQm90dG9tTmVnTGVmdCIsImdldFA0IiwiYWRkVG9EZWZhdWx0U2NvcGUiLCJ0YXJnZXQiLCJkZWZhdWx0U2NvcGUiLCJhZGRUYXJnZXQiLCJUYXJnZXQiLCJ1bmRlZmluZWQiLCJ0aW1lRW5kIiwidGltZUV4Y2FuZ2UiLCJwb3NpdGlvbmluZ1N0cmF0ZWd5Iiwic3RyYXRlZ3kiLCJnZXRSZWN0YW5nbGUiLCJiaW5kIiwidGFyZ2V0cyIsImVtaXR0ZXIiLCJlbWl0IiwiaW5pdCIsImluZGV4ZXNPZk5ldyIsInBvc2l0aW9uaW5nIiwib2xkRHJhZ2dhYmxlcyIsInNvcnRpbmciLCJyZWN0YW5nbGVzIiwiaW5uZXJEcmFnZ2FibGVzIiwic2V0UG9zaXRpb24iLCJjYXRjaERyYWdnYWJsZSIsInRhcmdldFJlY3RhbmdsZSIsImRyYWdnYWJsZVNxdWFyZSIsInNjb3BlcyIsInNjb3BlIiwicmVtb3ZlSXRlbSIsIm5ld0RyYWdnYWJsZXNJbmRleCIsImFkZFJlbW92ZU9uTW92ZSIsInRpbWUiLCJtb3ZlIiwiaW5pdGlhbFBvc2l0aW9uIiwicHVzaElubmVyRHJhZ2dhYmxlIiwicmVtb3ZlSGFuZGxlciIsInJlbW92ZSIsInVuc3Vic2NyaWJlIiwiU2NvcGUiLCJkcmFnRW5kQWN0aW9uIiwib25FbmQiLCJzaG90VGFyZ2V0cyIsInNvcnQiLCJhIiwiYiIsInBpblBvc2l0aW9uIiwicmVzZXQiLCJyZWZyZXNoIiwicG9zaXRpb25zIiwibWVzc2FnZSIsInRhcmdldEluZGV4ZXMiLCJjdXJyZW50U2NvcGUiLCJhZGREcmFnZ2FibGVUb1Njb3BlIiwiYWRkRHJhZ2dhYmxlIiwiRHJhZ2dhYmxlIiwiaW50ZXJydXB0IiwiYWRkVGFyZ2V0VG9TY29wZSIsInByZXBlbmRPbiIsImNoZWNrU3VwcG9ydFBhc3NpdmVFdmVudHMiLCJwYXNzaXZlU3VwcG9ydGVkIiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIl9lcnIiLCJpc1N1cHBvcnRQYXNzaXZlRXZlbnRzIiwiaXNUb3VjaCIsIm1vdXNlRXZlbnRzIiwiZW5kIiwidG91Y2hFdmVudHMiLCJ0cmFuc2Zvcm1Qcm9wZXJ0eSIsImdldFN0eWxlUHJvcGVydHkiLCJ0cmFuc2l0aW9uUHJvcGVydHkiLCJnZXRUb3VjaEJ5SUQiLCJ0b3VjaElkIiwiY2hhbmdlZFRvdWNoZXMiLCJpZGVudGlmaWVyIiwicHJldmVudERvdWJsZUluaXQiLCJleGlzdGluZyIsImNvcHlTdHlsZXMiLCJzb3VyY2UiLCJkZXN0aW5hdGlvbiIsImNzIiwia2V5IiwiY2hpbGRyZW4iLCJfZW5hYmxlIiwic3RhcnRQb3NpdGlvbmluZyIsInN0YXJ0TGlzdGVuaW5nIiwiX3NldERlZmF1bHRUcmFuc2l0aW9uIiwicGlubmVkUG9zaXRpb24iLCJib3VuZGluZyIsIl9kcmFnU3RhcnQiLCJldmVudCIsImRyYWdTdGFydCIsIl9kcmFnTW92ZSIsImRyYWdNb3ZlIiwiX2RyYWdFbmQiLCJkcmFnRW5kIiwiX25hdGl2ZURyYWdTdGFydCIsIm5hdGl2ZURyYWdTdGFydCIsIl9uYXRpdmVEcmFnT3ZlciIsIm5hdGl2ZURyYWdPdmVyIiwiX25hdGl2ZURyYWdFbmQiLCJuYXRpdmVEcmFnRW5kIiwiX25hdGl2ZURyb3AiLCJuYXRpdmVEcm9wIiwiaGFuZGxlciIsInBhc3NpdmUiLCJfdHJhbnNmb3JtUG9zaXRpb24iLCJnZXRTaXplIiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25Dc3MiLCJ0cmFuc2Zvcm0iLCJ0cmFuc2xhdGVDc3MiLCJ1YSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsIm1zaWUiLCJpc1NpbGVudCIsImRldGVybWluZURpcmVjdGlvbiIsIl9zZXRUcmFuc2l0aW9uIiwiX3NldFRyYW5zbGF0ZSIsInNpbGVudCIsImxlZnREaXJlY3Rpb24iLCJyaWdodERpcmVjdGlvbiIsInVwRGlyZWN0aW9uIiwiZG93bkRpcmVjdGlvbiIsImN1cnJlbnRFdmVudCIsImlzVG91Y2hFdmVudCIsIlRvdWNoRXZlbnQiLCJfc3RhcnRUb3VjaFBvaW50IiwicGFnZVgiLCJjbGllbnRYIiwicGFnZVkiLCJjbGllbnRZIiwiX3N0YXJ0UG9zaXRpb24iLCJfdG91Y2hJZCIsInN0b3BQcm9wYWdhdGlvbiIsIkhUTUxJbnB1dEVsZW1lbnQiLCJmb2N1cyIsIm5hdGl2ZURyYWdBbmREcm9wIiwicHJldmVudERlZmF1bHQiLCJpc1NhZmFyaSIsImVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcE9uVG91Y2giLCJlbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3BGb3JBbGwiLCJlbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3AiLCJpc0RyYWdnaW5nIiwidG91Y2giLCJ0b3VjaFBvaW50IiwiYm91bmQiLCJyZW1vdmVBdHRyaWJ1dGUiLCJkYXRhVHJhbnNmZXIiLCJzZXREYXRhIiwiZWZmZWN0QWxsb3dlZCIsImRyb3BFZmZlY3QiLCJfZXZlbnQiLCJjbG9uZWRFbGVtZW50IiwiY2xvbmVOb2RlIiwiYm9keSIsImFwcGVuZENoaWxkIiwiZW11bGF0aW9uRHJhZ2dhYmxlIiwic2Nyb2xsWCIsInNjcm9sbFkiLCJkZXN0cm95IiwicmVtb3ZlQ2hpbGQiLCJyZXNldEVtaXR0ZXIiLCJfcGFyZW50IiwiX2JvdW5kaW5nIiwiX2hhbmRsZXIiLCJlbmFibGUiLCJMaXN0IiwiaW5pdERyYWdnYWJsZSIsIm9uTW92ZSIsInNvcnRlZERyYWdnYWJsZXMiLCJnZXRTb3J0ZWREcmFnZ2FibGVzIiwicGlubmVkUG9zaXRpb25zIiwiY3VycmVudEluZGV4IiwidGFyZ2V0SW5kZXgiLCJpbml0aWFsUG9zaXRpb25zIiwiY29tcGFyZSIsInJlc2V0UG9zaXRpb25Ub0luaXRpYWwiLCJBcnJheSIsImxpc3QiLCJyZXNldE9uIiwiaiIsImdldEN1cnJlbnRQaW5uZWRQb3NpdGlvbnMiLCJwYXJlbnRFbGVtZW50IiwiZWxlbWVudHMiLCJmcm9tIiwic2V0U3R5bGUiLCJjc3NUZXh0IiwiaGFzT3duUHJvcGVydHkiLCJhcHBlbmRGaXJzdENoaWxkIiwibm9kZSIsImZpcnN0Q2hpbGQiLCJpbnNlcnRCZWZvcmUiLCJjcmVhdGVDYW52YXMiLCJhcmVhIiwicmVjdGFnbGUiLCJjYW52YXMiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiU3BpZGVyIiwiYXJlYVJlY3RhbmdsZSIsImRBbmdsZSIsInN0YXJ0UmFkaXVzIiwiZW5kUmFkaXVzIiwiZ2V0TWluU2lkZSIsImxpbmVXaWR0aCIsInN0cm9rZVN0eWxlIiwiZmlsbFN0eWxlIiwiZ2V0Q29udGV4dCIsImhhbGZTaXplIiwiZHJhdyIsImlzSW5pdCIsImNsZWFyUmVjdCIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsImNsb3NlUGF0aCIsInN0cm9rZSIsImZpbGwiLCJBcmNTbGlkZXIiLCJhbmdsZXMiLCJzaGlmdGVkQ2VudGVyIiwiY2hhbmdlIiwidXBkYXRlQW5nbGUiLCJybmQiLCJyb3VuZCIsInJhbmRvbSIsInRvSGV4U3RyaW5nIiwiZGlnaXQiLCJzdHIiLCJ0b1N0cmluZyIsInJhbmRvbUNvbG9yIiwiZ2V0QXJyYXlXaXRoQm91bmRJbmRleGVzIiwicmV0SW5kZXhlcyIsIkNoYXJ0IiwidG91Y2hSYWRpdXMiLCJmaWxsU3R5bGVzIiwiaW5pdEFuZ2xlcyIsImxpbWl0SW1nIiwibGltaXRJbWdPZmZzZXQiLCJnZXRCb3VuZEFuZ2xlIiwiaXNDbG9zc2luZyIsInVwZGF0ZUFuZ2xlcyIsIl9kcmFnZ2FibGUiLCJkcmF3QXJjIiwiZHJhd0xpbWl0SW1nIiwib3B0cyIsImNsb25lT2JqIiwiY29sb3IiLCJnZXRGaWxsU3R5bGUiLCJhcmMiLCJpbWciLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJkcmF3SW1hZ2UiLCJzZXRUcmFuc2Zvcm0iLCJiYXNlQW5nbGUiLCJkaWZmQW5nbGUiLCJnZXRBbmdsZXNEaWZmIiwibW92ZUFuZFNhdmUiLCJlbmFibGVJbmRleGVzIiwiYWN0aXZlQXJjSW5kZXgiLCJkaXN0YW5jZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBQUEsU0FBU0EsdUJBQVQsQ0FBaUNDLE9BQWpDLEVBQTBDQyxLQUExQyxFQUFpRDtFQUMvQyxTQUFPQSxLQUFLLENBQUNDLE1BQU4sQ0FBYSxVQUFDQyxHQUFELEVBQU1DLElBQU4sRUFBZTtFQUNqQyxXQUFPRCxHQUFHLEdBQUdFLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QlAsT0FBeEIsRUFBaUNJLElBQWpDLEtBQXdDLENBQXpDLENBQXJCO0VBQ0QsR0FGTSxFQUVKLENBRkksQ0FBUDtFQUdEOztNQUVvQkk7OztFQUNuQixpQkFBWUMsQ0FBWixFQUFlQyxDQUFmLEVBQWtCO0VBQUE7O0VBQ2hCLFNBQUtELENBQUwsR0FBU0EsQ0FBVDtFQUNBLFNBQUtDLENBQUwsR0FBU0EsQ0FBVDtFQUNEOzs7OzBCQUVHQyxHQUFHO0VBQ0wsYUFBTyxJQUFJSCxLQUFKLENBQVUsS0FBS0MsQ0FBTCxHQUFTRSxDQUFDLENBQUNGLENBQXJCLEVBQXdCLEtBQUtDLENBQUwsR0FBU0MsQ0FBQyxDQUFDRCxDQUFuQyxDQUFQO0VBQ0Q7OzswQkFFR0MsR0FBRztFQUNMLGFBQU8sSUFBSUgsS0FBSixDQUFVLEtBQUtDLENBQUwsR0FBU0UsQ0FBQyxDQUFDRixDQUFyQixFQUF3QixLQUFLQyxDQUFMLEdBQVNDLENBQUMsQ0FBQ0Qs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
