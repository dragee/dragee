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

        this._scroll = function (event) {
          return _this2.onScroll(event);
        };

        this.handler.addEventListener(touchEvents.start, this._dragStart, isSupportPassiveEvents ? {
          passive: false
        } : false);
        this.handler.addEventListener(mouseEvents.start, this._dragStart, isSupportPassiveEvents ? {
          passive: false
        } : false);
        this.element.addEventListener('dragstart', this._nativeDragStart);
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
        this.touchPoint = this._startTouchPoint = new Point(isTouchEvent ? event.changedTouches[0].pageX : event.clientX, isTouchEvent ? event.changedTouches[0].pageY : event.clientY);
        this._startPosition = this.getPosition();

        if (isTouchEvent) {
          this._touchId = event.changedTouches[0].identifier;
        }

        this._startScrollPoint = new Point(window.scrollX, window.scrollY);
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

        window.addEventListener('scroll', this._scroll);
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
        document.removeEventListener('drop', this._nativeDrop);
        window.removeEventListener('scroll', this._scroll);
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
        this.touchPoint = new Point(isTouchEvent ? touch.pageX : event.clientX, isTouchEvent ? touch.pageY : event.clientY);

        var point = this._startPosition.add(this.touchPoint.sub(this._startTouchPoint)).add(this.scrollPoint.sub(this._startScrollPoint));

        point = this.bounding.bound(point, this.getSize());
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
        window.removeEventListener('scroll', this._scroll);
        this.isDragging = false;
        this.element.removeAttribute('draggable');
        removeClass(this.element, 'dragee-active');
      }
    }, {
      key: "onScroll",
      value: function onScroll(_event) {
        var point = this._startPosition.add(this.touchPoint.sub(this._startTouchPoint)).add(this.scrollPoint.sub(this._startScrollPoint));

        point = this.bounding.bound(point, this.getSize());

        if (!this.nativeDragAndDrop) {
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
        addClass(this.element, 'dragee-placeholder');
        this.currentEvent = event;

        if (event.clientX === 0 && event.clientY === 0) {
          return;
        }

        this.touchPoint = new Point(event.clientX, event.clientY);

        var point = this._startPosition.add(this.touchPoint.sub(this._startTouchPoint)).add(this.scrollPoint.sub(this._startScrollPoint));

        point = this.bounding.bound(point, this.getSize());
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
        window.removeEventListener('scroll', this._scroll);
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
              var parentRectPoint = new Point(parentRect.left, parentRect.top);
              _this3.position = emulationDraggable.position.sub(parentRectPoint).sub(_this3._startScrollPoint);

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
        var parentRectPoint = new Point(parentRect.left, parentRect.top);
        emulationDraggable._startScrollPoint = this._startScrollPoint;
        emulationDraggable.move(this.pinnedPosition.add(parentRectPoint).add(new Point(window.scrollX, window.scrollY)));
        emulationDraggable.dragStart(event); // new Point(
        //   this.pinnedPosition.x + parentRect.left + window.scrollX,
        //   this.pinnedPosition.y + parentRect.top + window.scrollY
        // ))
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
      key: "scrollPoint",
      get: function get() {
        return new Point(window.scrollX, window.scrollY);
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
        radius: 30
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
        var _this3 = this;

        if (!(draggables instanceof Array)) {
          draggables = [draggables];
        }

        draggables.forEach(function (draggable) {
          return _this3.initDraggable(draggable);
        });
        this.draggables = this.draggables.concat(draggables);
      }
    }, {
      key: "remove",
      value: function remove(draggables) {
        var _this4 = this;

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
          removeItem(_this4.draggables, draggable);
        });
        var j = 0;
        sortedDraggables.forEach(function (draggable) {
          if (_this4.draggables.indexOf(draggable) !== -1) {
            if (draggable.pinnedPosition !== initialPositions[j]) {
              draggable.pinPosition(initialPositions[j], _this4.options.timeExcange);
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
        var _this5 = this;

        var message = 'wrong array length';

        if (positions.length === this.draggables.length) {
          positions.forEach(function (point, i) {
            _this5.draggables[i].pinPosition(point);
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
    Bound: Bound,
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
  exports.Rectangle = Rectangle;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZGV2LmpzIiwic291cmNlcyI6WyIuLi9zcmMvZ2VvbWV0cnkvcG9pbnQuanMiLCIuLi9zcmMvZ2VvbWV0cnkvcmVjdGFuZ2xlLmpzIiwiLi4vc3JjL3V0aWxzL2NsYXNzZXMuanMiLCIuLi9zcmMvdXRpbHMvZ2V0LWRlZmF1bHQtcGFyZW50LmpzIiwiLi4vc3JjL2V2ZW50RW1pdHRlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9kZXNhbmRyby1nZXQtc3R5bGUtcHJvcGVydHkvZ2V0LXN0eWxlLXByb3BlcnR5LmpzIiwiLi4vc3JjL2dlb21ldHJ5L2Rpc3RhbmNlcy5qcyIsIi4uL3NyYy9nZW9tZXRyeS9ib3VuZHMuanMiLCIuLi9zcmMvZ2VvbWV0cnkvYW5nbGVzLmpzIiwiLi4vc3JjL2JvdW5kaW5nLmpzIiwiLi4vc3JjL3V0aWxzL3JlbW92ZS1hcnJheS1pdGVtLmpzIiwiLi4vc3JjL3V0aWxzL3JhbmdlLmpzIiwiLi4vc3JjL3Bvc2l0aW9uaW5nLmpzIiwiLi4vc3JjL3RhcmdldC5qcyIsIi4uL3NyYy9zY29wZS5qcyIsIi4uL3NyYy91dGlscy9pcy1zdXBwb3J0LXBhc3NpdmUtZXZlbnRzLmpzIiwiLi4vc3JjL2RyYWdnYWJsZS5qcyIsIi4uL3NyYy9saXN0LmpzIiwiLi4vc3JjL3V0aWxzL2NyZWF0ZS1jYW52YXMuanMiLCIuLi9zcmMvc3BpZGVyLmpzIiwiLi4vc3JjL2FyY3NsaWRlci5qcyIsIi4uL3NyYy9jaGFydC5qcyIsIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBnZXRTdW1WYWx1ZU9mU3R5bGVSdWxlcyhlbGVtZW50LCBydWxlcykge1xuICByZXR1cm4gcnVsZXMucmVkdWNlKChzdW0sIHJ1bGUpID0+IHtcbiAgICByZXR1cm4gc3VtICsgcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudClbcnVsZV18fDApXG4gIH0sIDApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvaW50IHtcbiAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgIHRoaXMueCA9IHhcbiAgICB0aGlzLnkgPSB5XG4gIH1cblxuICBhZGQocCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54ICsgcC54LCB0aGlzLnkgKyBwLnkpXG4gIH1cblxuICBzdWIocCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54IC0gcC54LCB0aGlzLnkgLSBwLnkpXG4gIH1cblxuICBtdWx0KGspIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCAqIGssIHRoaXMueSAqIGspXG4gIH1cblxuICBuZWdhdGl2ZSgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KC10aGlzLngsIC10aGlzLnkpXG4gIH1cblxuICBjb21wYXJlKHApIHtcbiAgICByZXR1cm4gKHRoaXMueCA9PT0gcC54ICYmIHRoaXMueSA9PT0gcC55KVxuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLngsIHRoaXMueSlcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiBge3g9JHt0aGlzLnh9LHk9JHt0aGlzLnl9YFxuICB9XG5cbiAgc3RhdGljIGVsZW1lbnRPZmZzZXQoZWxlbWVudCwgcGFyZW50KSB7XG4gICAgcGFyZW50ID0gcGFyZW50IHx8IGVsZW1lbnQucGFyZW50Tm9kZVxuICAgIGNvbnN0IGVsZW1lbnRSZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIGNvbnN0IHBhcmVudFJlY3QgPSBwYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICByZXR1cm4gbmV3IFBvaW50KFxuICAgICAgZWxlbWVudFJlY3QubGVmdCAtIHBhcmVudFJlY3QubGVmdCxcbiAgICAgIGVsZW1lbnRSZWN0LnRvcCAtIHBhcmVudFJlY3QudG9wXG4gICAgKVxuICB9XG5cbiAgc3RhdGljIGVsZW1lbnRTaXplKGVsZW1lbnQsIGlzQ29udGVudEJveFNpemU9ZmFsc2UpIHtcbiAgICBsZXQgd2lkdGggPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KVsnd2lkdGgnXSlcbiAgICBsZXQgaGVpZ2h0ID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudClbJ2hlaWdodCddKVxuICAgIGlmICghaXNDb250ZW50Qm94U2l6ZSkge1xuICAgICAgd2lkdGggKz0gZ2V0U3VtVmFsdWVPZlN0eWxlUnVsZXMoZWxlbWVudCwgWydwYWRkaW5nLWxlZnQnLCAncGFkZGluZy1yaWdodCcsICdib3JkZXItbGVmdC13aWR0aCcsICdib3JkZXItcmlnaHQtd2lkdGgnXSlcbiAgICAgIGhlaWdodCArPSBnZXRTdW1WYWx1ZU9mU3R5bGVSdWxlcyhlbGVtZW50LCBbJ3BhZGRpbmctdG9wJywgJ3BhZGRpbmctYm90dG9tJywgJ2JvcmRlci10b3Atd2lkdGgnLCAnYm9yZGVyLWJvdHRvbS13aWR0aCddKVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFBvaW50KHdpZHRoLCBoZWlnaHQpXG4gIH1cbn1cbiIsImltcG9ydCBQb2ludCBmcm9tICcuL3BvaW50J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWN0YW5nbGUge1xuICBjb25zdHJ1Y3Rvcihwb3NpdGlvbiwgc2l6ZSkge1xuICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvblxuICAgIHRoaXMuc2l6ZSA9IHNpemVcbiAgfVxuXG4gIGdldFAxKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uXG4gIH1cblxuICBnZXRQMigpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54LCB0aGlzLnBvc2l0aW9uLnkpXG4gIH1cblxuICBnZXRQMygpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi5hZGQodGhpcy5zaXplKVxuICB9XG5cbiAgZ2V0UDQoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55KVxuICB9XG5cbiAgZ2V0Q2VudGVyKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLnNpemUubXVsdCgwLjUpKVxuICB9XG5cbiAgb3IocmVjdCkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gbmV3IFBvaW50KE1hdGgubWluKHRoaXMucG9zaXRpb24ueCwgcmVjdC5wb3NpdGlvbi54KSwgTWF0aC5taW4odGhpcy5wb3NpdGlvbi55LCByZWN0LnBvc2l0aW9uLnkpKVxuICAgIGNvbnN0IHNpemUgPSAobmV3IFBvaW50KE1hdGgubWF4KHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54LCByZWN0LnBvc2l0aW9uLnggKyByZWN0LnNpemUueCksIE1hdGgubWF4KHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55LCByZWN0LnBvc2l0aW9uLnkgKyByZWN0LnNpemUueSkpKS5zdWIocG9zaXRpb24pXG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUocG9zaXRpb24sIHNpemUpXG4gIH1cblxuICBhbmQocmVjdCkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gbmV3IFBvaW50KE1hdGgubWF4KHRoaXMucG9zaXRpb24ueCwgcmVjdC5wb3NpdGlvbi54KSwgTWF0aC5tYXgodGhpcy5wb3NpdGlvbi55LCByZWN0LnBvc2l0aW9uLnkpKVxuICAgIGNvbnN0IHNpemUgPSAobmV3IFBvaW50KE1hdGgubWluKHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54LCByZWN0LnBvc2l0aW9uLnggKyByZWN0LnNpemUueCksIE1hdGgubWluKHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55LCByZWN0LnBvc2l0aW9uLnkgKyByZWN0LnNpemUueSkpKS5zdWIocG9zaXRpb24pXG4gICAgaWYgKHNpemUueCA8PSAwIHx8IHNpemUueSA8PSAwKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZShwb3NpdGlvbiwgc2l6ZSlcbiAgfVxuXG4gIGluY2x1ZGVQb2ludChwKSB7XG4gICAgcmV0dXJuICEodGhpcy5wb3NpdGlvbi54ID4gcC54IHx8IHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54IDwgcC54IHx8IHRoaXMucG9zaXRpb24ueSA+IHAueSB8fCB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSA8IHAueSlcbiAgfVxuXG4gIGluY2x1ZGVSZWN0YW5nbGUocmVjdGFuZ2xlKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5jbHVkZVBvaW50KHJlY3RhbmdsZS5wb3NpdGlvbikgJiYgdGhpcy5pbmNsdWRlUG9pbnQocmVjdGFuZ2xlLmdldFAzKCkpXG4gIH1cblxuICBtb3ZlVG9Cb3VuZChyZWN0LCBheGlzKSB7XG4gICAgbGV0IHNlbEF4aXMsIGNyb3NzUmVjdGFuZ2xlXG4gICAgaWYgKGF4aXMpIHtcbiAgICAgIHNlbEF4aXMgPSBheGlzXG4gICAgfSBlbHNlIHtcbiAgICAgIGNyb3NzUmVjdGFuZ2xlID0gdGhpcy5hbmQocmVjdClcbiAgICAgIGlmICghY3Jvc3NSZWN0YW5nbGUpIHtcbiAgICAgICAgcmV0dXJuIHJlY3RcbiAgICAgIH1cbiAgICAgIHNlbEF4aXMgPSBjcm9zc1JlY3RhbmdsZS5zaXplLnggPiBjcm9zc1JlY3RhbmdsZS5zaXplLnkgPyAneScgOiAneCdcbiAgICB9XG4gICAgY29uc3QgdGhpc0NlbnRlciA9IHRoaXMuZ2V0Q2VudGVyKClcbiAgICBjb25zdCByZWN0Q2VudGVyID0gcmVjdC5nZXRDZW50ZXIoKVxuICAgIGNvbnN0IHNpZ24gPSB0aGlzQ2VudGVyW3NlbEF4aXNdID4gcmVjdENlbnRlcltzZWxBeGlzXSA/IC0xIDogMVxuICAgIGNvbnN0IG9mZnNldCA9IHNpZ24gPiAwID8gdGhpcy5wb3NpdGlvbltzZWxBeGlzXSArIHRoaXMuc2l6ZVtzZWxBeGlzXSAtIHJlY3QucG9zaXRpb25bc2VsQXhpc10gOiB0aGlzLnBvc2l0aW9uW3NlbEF4aXNdIC0gKHJlY3QucG9zaXRpb25bc2VsQXhpc10gKyByZWN0LnNpemVbc2VsQXhpc10pXG4gICAgcmVjdC5wb3NpdGlvbltzZWxBeGlzXSA9IHJlY3QucG9zaXRpb25bc2VsQXhpc10gKyBvZmZzZXRcbiAgICByZXR1cm4gcmVjdFxuICB9XG5cbiAgZ2V0U3F1YXJlKCkge1xuICAgIHJldHVybiB0aGlzLnNpemUueCAqIHRoaXMuc2l6ZS55XG4gIH1cblxuICBzdHlsZUFwcGx5KGVsKSB7XG4gICAgZWwgPSBlbCB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbmQnKVxuICAgIGVsLnN0eWxlLmxlZnQgPSB0aGlzLnBvc2l0aW9uLnggKyAncHgnXG4gICAgZWwuc3R5bGUudG9wID0gdGhpcy5wb3NpdGlvbi55ICsgJ3B4J1xuICAgIGVsLnN0eWxlLndpZHRoID0gdGhpcy5zaXplLnggKyAncHgnXG4gICAgZWwuc3R5bGUuaGVpZ2h0ID0gdGhpcy5zaXplLnkgKyAncHgnXG4gIH1cblxuICBncm93dGgoc2l6ZSkge1xuICAgIHRoaXMuc2l6ZSA9IHRoaXMuc2l6ZS5hZGQoc2l6ZSlcbiAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbi5hZGQoc2l6ZS5tdWx0KC0wLjUpKVxuICB9XG5cbiAgZ2V0TWluU2lkZSgpIHtcbiAgICByZXR1cm4gTWF0aC5taW4odGhpcy5zaXplLngsIHRoaXMuc2l6ZS55KVxuICB9XG5cbiAgc3RhdGljIGZyb21FbGVtZW50KGVsZW1lbnQsIHBhcmVudD1lbGVtZW50LnBhcmVudE5vZGUsIGlzQ29udGVudEJveFNpemU9ZmFsc2UsIGlzQ29uc2lkZXJUcmFuc2xhdGU9ZmFsc2UpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IFBvaW50LmVsZW1lbnRPZmZzZXQoZWxlbWVudCwgcGFyZW50LCBpc0NvbnNpZGVyVHJhbnNsYXRlKVxuICAgIGNvbnN0IHNpemUgPSBQb2ludC5lbGVtZW50U2l6ZShlbGVtZW50LCBpc0NvbnRlbnRCb3hTaXplKVxuICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHBvc2l0aW9uLCBzaXplKVxuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gaGFzQ2xhc3MoZWxlbWVudCwgYykge1xuICBjb25zdCByZSA9IG5ldyBSZWdFeHAoJyhefFxcXFxzKScgKyBjICsgJyhcXFxcc3wkKScsICdnJylcbiAgcmV0dXJuIChyZS50ZXN0KGVsZW1lbnQuY2xhc3NOYW1lKSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZENsYXNzKGVsZW1lbnQsIGMpIHtcbiAgaWYgKCFoYXNDbGFzcyhlbGVtZW50LCBjKSkge1xuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gKGVsZW1lbnQuY2xhc3NOYW1lICsgJyAnICsgYykucmVwbGFjZSgvXFxzKy9nLCAnICcpLnJlcGxhY2UoLyheIHwgJCkvZywgJycpXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNsYXNzKGVsZW1lbnQsIGMpIHtcbiAgY29uc3QgcmUgPSBuZXcgUmVnRXhwKCcoXnxcXFxccyknICsgYyArICcoXFxcXHN8JCknLCAnZycpXG4gIGVsZW1lbnQuY2xhc3NOYW1lID0gZWxlbWVudC5jbGFzc05hbWUucmVwbGFjZShyZSwgJyQxJykucmVwbGFjZSgvXFxzKy9nLCAnICcpLnJlcGxhY2UoLyheIHwgJCkvZywgJycpXG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXREZWZhdWx0UGFyZW50KGVsZW1lbnQpIHtcbiAgbGV0IHBhcmVudCA9IGVsZW1lbnQucGFyZW50Tm9kZVxuICB3aGlsZSAocGFyZW50LnBhcmVudE5vZGUgJiYgd2luZG93LmdldENvbXB1dGVkU3R5bGUocGFyZW50KVsncG9zaXRpb24nXSA9PT0gJ3N0YXRpYycgJiYgcGFyZW50LnRhZ05hbWUgIT09ICdCT0RZJykge1xuICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlXG4gIH1cbiAgcmV0dXJuIHBhcmVudFxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKGNvbnRleHQsIG9wdGlvbnMgPSB7fSkge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQgfHwgdGhpc1xuICAgIHRoaXMuZXZlbnRzID0ge31cblxuICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMub24pIHtcbiAgICAgIGZvciAoY29uc3QgW2V2ZW50TmFtZSwgZm5dIG9mIE9iamVjdC5lbnRyaWVzKG9wdGlvbnMub24pKSB7XG4gICAgICAgIHRoaXMub24oZXZlbnROYW1lLCBmbilcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBlbWl0KGV2ZW50TmFtZSkge1xuICAgIHRoaXMuaW50ZXJydXB0ZWQgPSBmYWxzZVxuICAgIGNvbnN0IGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSlcblxuICAgIGlmICghdGhpcy5ldmVudHNbZXZlbnROYW1lXSkgcmV0dXJuXG5cbiAgICBmb3IgKGNvbnN0IGZ1bmMgb2YgdGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgZnVuYy5hcHBseSh0aGlzLmNvbnRleHQsIGFyZ3MpXG4gICAgICBpZiAodGhpcy5pbnRlcnJ1cHRlZCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpbnRlcnJ1cHQoKSB7XG4gICAgdGhpcy5pbnRlcnJ1cHRlZCA9IHRydWVcbiAgfVxuXG4gIG9uKGV2ZW50TmFtZSwgZm4pIHtcbiAgICBpZiAoIXRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSBbXVxuICAgIH1cblxuICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0ucHVzaChmbilcbiAgfVxuXG4gIHByZXBlbmRPbihldmVudE5hbWUsIGZuKSB7XG4gICAgaWYgKCF0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdID0gW11cbiAgICB9XG5cbiAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLnVuc2hpZnQoZm4pXG4gIH1cblxuICB1bnN1YnNjcmliZShldmVudE5hbWUsIGZuKSB7XG4gICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5ldmVudHNbZXZlbnROYW1lXS5pbmRleE9mKGZuKVxuICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5zcGxpY2UoaW5kZXgsIDEpXG4gICAgfVxuICB9XG5cbiAgcmVzZXRFbWl0dGVyICgpIHtcbiAgICB0aGlzLmV2ZW50cyA9IHt9XG4gIH1cblxuICByZXNldE9uKGV2ZW50TmFtZSkge1xuICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSBbXVxuICB9XG59XG4iLCIvKiFcbiAqIGdldFN0eWxlUHJvcGVydHkgdjEuMC40XG4gKiBvcmlnaW5hbCBieSBrYW5nYXhcbiAqIGh0dHA6Ly9wZXJmZWN0aW9ua2lsbHMuY29tL2ZlYXR1cmUtdGVzdGluZy1jc3MtcHJvcGVydGllcy9cbiAqIE1JVCBsaWNlbnNlXG4gKi9cblxuLypqc2hpbnQgYnJvd3NlcjogdHJ1ZSwgc3RyaWN0OiB0cnVlLCB1bmRlZjogdHJ1ZSAqL1xuLypnbG9iYWwgZGVmaW5lOiBmYWxzZSwgZXhwb3J0czogZmFsc2UsIG1vZHVsZTogZmFsc2UgKi9cblxuKCBmdW5jdGlvbiggd2luZG93ICkge1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBwcmVmaXhlcyA9ICdXZWJraXQgTW96IG1zIE1zIE8nLnNwbGl0KCcgJyk7XG52YXIgZG9jRWxlbVN0eWxlID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlO1xuXG5mdW5jdGlvbiBnZXRTdHlsZVByb3BlcnR5KCBwcm9wTmFtZSApIHtcbiAgaWYgKCAhcHJvcE5hbWUgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gdGVzdCBzdGFuZGFyZCBwcm9wZXJ0eSBmaXJzdFxuICBpZiAoIHR5cGVvZiBkb2NFbGVtU3R5bGVbIHByb3BOYW1lIF0gPT09ICdzdHJpbmcnICkge1xuICAgIHJldHVybiBwcm9wTmFtZTtcbiAgfVxuXG4gIC8vIGNhcGl0YWxpemVcbiAgcHJvcE5hbWUgPSBwcm9wTmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHByb3BOYW1lLnNsaWNlKDEpO1xuXG4gIC8vIHRlc3QgdmVuZG9yIHNwZWNpZmljIHByb3BlcnRpZXNcbiAgdmFyIHByZWZpeGVkO1xuICBmb3IgKCB2YXIgaT0wLCBsZW4gPSBwcmVmaXhlcy5sZW5ndGg7IGkgPCBsZW47IGkrKyApIHtcbiAgICBwcmVmaXhlZCA9IHByZWZpeGVzW2ldICsgcHJvcE5hbWU7XG4gICAgaWYgKCB0eXBlb2YgZG9jRWxlbVN0eWxlWyBwcmVmaXhlZCBdID09PSAnc3RyaW5nJyApIHtcbiAgICAgIHJldHVybiBwcmVmaXhlZDtcbiAgICB9XG4gIH1cbn1cblxuLy8gdHJhbnNwb3J0XG5pZiAoIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcbiAgLy8gQU1EXG4gIGRlZmluZSggZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGdldFN0eWxlUHJvcGVydHk7XG4gIH0pO1xufSBlbHNlIGlmICggdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICkge1xuICAvLyBDb21tb25KUyBmb3IgQ29tcG9uZW50XG4gIG1vZHVsZS5leHBvcnRzID0gZ2V0U3R5bGVQcm9wZXJ0eTtcbn0gZWxzZSB7XG4gIC8vIGJyb3dzZXIgZ2xvYmFsXG4gIHdpbmRvdy5nZXRTdHlsZVByb3BlcnR5ID0gZ2V0U3R5bGVQcm9wZXJ0eTtcbn1cblxufSkoIHdpbmRvdyApO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldERpc3RhbmNlKHAxLCBwMikge1xuICBjb25zdCBkeCA9IHAxLnggLSBwMi54LCBkeSA9IHAxLnkgLSBwMi55XG4gIHJldHVybiBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRYRGlmZmVyZW5jZShwMSwgcDIpIHtcbiAgcmV0dXJuIE1hdGguYWJzKHAxLnggLSBwMi54KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0WURpZmZlcmVuY2UocDEsIHAyKSB7XG4gIHJldHVybiBNYXRoLmFicyhwMS55IC0gcDIueSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3Rvcnkob3B0aW9ucykge1xuICByZXR1cm4gKHAxLCBwMikgPT4ge1xuICAgIHJldHVybiBNYXRoLnNxcnQoXG4gICAgICBNYXRoLnBvdyhvcHRpb25zLnggKiBNYXRoLmFicyhwMS54IC0gcDIueCksIDIpICtcbiAgICAgIE1hdGgucG93KG9wdGlvbnMueSAqIE1hdGguYWJzKHAxLnkgLSBwMi55KSwgMilcbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluZGV4T2ZOZWFyZXN0UG9pbnQoYXJyLCB2YWwsIHJhZGl1cywgZ2V0RGlzdGFuY2VGdW5jPWdldERpc3RhbmNlKSB7XG4gIGxldCBzaXplLCBpbmRleCA9IDAsIGksIHRlbXBcbiAgaWYgKGFyci5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gLTFcbiAgfVxuICBzaXplID0gZ2V0RGlzdGFuY2VGdW5jKGFyclswXSwgdmFsKVxuICBmb3IgKGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgdGVtcCA9IGdldERpc3RhbmNlRnVuYyhhcnJbaV0sIHZhbClcbiAgICBpZiAodGVtcCA8IHNpemUpIHtcbiAgICAgIHNpemUgPSB0ZW1wXG4gICAgICBpbmRleCA9IGlcbiAgICB9XG4gIH1cbiAgaWYgKHJhZGl1cyA+PSAwICYmIHNpemUgPiByYWRpdXMpIHtcbiAgICByZXR1cm4gLTFcbiAgfVxuICByZXR1cm4gaW5kZXhcbn1cbiIsImltcG9ydCBQb2ludCBmcm9tICcuL3BvaW50J1xuaW1wb3J0IHsgZ2V0RGlzdGFuY2UgfSBmcm9tICcuL2Rpc3RhbmNlcydcblxuZXhwb3J0IGZ1bmN0aW9uIGNsYW1wKG1pbiwgbWF4LCB2YWwpIHtcbiAgcmV0dXJuIE1hdGgubWF4KG1pbiwgTWF0aC5taW4obWF4LCB2YWwpKVxufVxuXG4vL1JldHVybiBjcm9zc2luZyBwb2ludCBvZiB0d28gbGluZXNcbmV4cG9ydCBmdW5jdGlvbiBkaXJlY3RDcm9zc2luZyhMMVAxLCBMMVAyLCBMMlAxLCBMMlAyKSB7XG4gIGxldCB0ZW1wLCBrMSwgazIsIGIxLCBiMiwgeCwgeVxuICBpZiAoTDJQMS54ID09PSBMMlAyLngpIHtcbiAgICB0ZW1wID0gTDJQMVxuICAgIEwyUDEgPSBMMVAxXG4gICAgTDFQMSA9IHRlbXBcbiAgICB0ZW1wID0gTDJQMlxuICAgIEwyUDIgPSBMMVAyXG4gICAgTDFQMiA9IHRlbXBcbiAgfVxuICBpZiAoTDFQMS54ID09PSBMMVAyLngpIHtcbiAgICBrMiA9IChMMlAyLnkgLSBMMlAxLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICBiMiA9IChMMlAyLnggKiBMMlAxLnkgLSBMMlAxLnggKiBMMlAyLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICB4ID0gTDFQMS54XG4gICAgeSA9IHggKiBrMiArIGIyXG4gICAgcmV0dXJuIG5ldyBQb2ludCh4LCB5KVxuICB9IGVsc2Uge1xuICAgIGsxID0gKEwxUDIueSAtIEwxUDEueSkgLyAoTDFQMi54IC0gTDFQMS54KVxuICAgIGIxID0gKEwxUDIueCAqIEwxUDEueSAtIEwxUDEueCAqIEwxUDIueSkgLyAoTDFQMi54IC0gTDFQMS54KVxuICAgIGsyID0gKEwyUDIueSAtIEwyUDEueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgIGIyID0gKEwyUDIueCAqIEwyUDEueSAtIEwyUDEueCAqIEwyUDIueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgIHggPSAoYjEgLSBiMikgLyAoazIgLSBrMSlcbiAgICB5ID0geCAqIGsxICsgYjFcbiAgICByZXR1cm4gbmV3IFBvaW50KHgsIHkpXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kVG9TZWdtZW50KExQMSwgTFAyLCBQKSB7XG4gIGxldCB4LCB5XG4gIHggPSBjbGFtcChNYXRoLm1pbihMUDEueCwgTFAyLngpLCBNYXRoLm1heChMUDEueCwgTFAyLngpLCBQLngpXG4gIGlmICh4ICE9PSBQLngpIHtcbiAgICB5ID0gKHggPT09IExQMS54KSA/IExQMS55IDogTFAyLnlcbiAgICBQID0gbmV3IFBvaW50KHgsIHkpXG4gIH1cblxuICB5ID0gY2xhbXAoTWF0aC5taW4oTFAxLnksIExQMi55KSwgTWF0aC5tYXgoTFAxLnksIExQMi55KSwgUC55KVxuICBpZiAoeSAhPT0gUC55KSB7XG4gICAgeCA9ICh5ID09PSBMUDEueSkgPyBMUDEueCA6IExQMi54XG4gICAgUCA9IG5ldyBQb2ludCh4LCB5KVxuICB9XG5cbiAgcmV0dXJuIFBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kVG9MaW5lKEEsIEIsIFApIHtcbiAgY29uc3QgQVAgPSBuZXcgUG9pbnQoUC54IC0gQS54LCBQLnkgLSBBLnkpLFxuICAgIEFCID0gbmV3IFBvaW50KEIueCAtIEEueCwgQi55IC0gQS55KSxcbiAgICBhYjIgPSBBQi54ICogQUIueCArIEFCLnkgKiBBQi55LFxuICAgIGFwX2FiID0gQVAueCAqIEFCLnggKyBBUC55ICogQUIueSxcbiAgICB0ID0gYXBfYWIgLyBhYjJcbiAgcmV0dXJuIG5ldyBQb2ludChBLnggKyBBQi54ICogdCwgQS55ICsgQUIueSAqIHQpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb2ludE9uTGluZShMUDEsIExQMiwgcGVyY2VudCkge1xuICBjb25zdCBkeCA9IExQMi54IC0gTFAxLngsIGR5ID0gTFAyLnkgLSBMUDEueVxuICByZXR1cm4gbmV3IFBvaW50KExQMS54ICsgcGVyY2VudCAqIGR4LCBMUDEueSArIHBlcmNlbnQgKiBkeSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBvaW50T25MaW5lQnlMZW5naHQoTFAxLCBMUDIsIGxlbmdodCkge1xuICBjb25zdCBkeCA9IExQMi54IC0gTFAxLnhcbiAgY29uc3QgZHkgPSBMUDIueSAtIExQMS55XG4gIGNvbnN0IHBlcmNlbnQgPSBsZW5naHQgLyBnZXREaXN0YW5jZShMUDEsIExQMilcbiAgcmV0dXJuIG5ldyBQb2ludChMUDEueCArIHBlcmNlbnQgKiBkeCwgTFAxLnkgKyBwZXJjZW50ICogZHkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRQb2ludFRvQm91bmRQb2ludHMoYm91bmRwb2ludHMsIHBvaW50LCBpc1JpZ2h0KSB7XG4gIGNvbnN0IHJlc3VsdCA9IGJvdW5kcG9pbnRzLmZpbHRlcigoYlBvaW50KSA9PiB7XG4gICAgcmV0dXJuIGJQb2ludC55ID4gcG9pbnQueSB8fCAoaXNSaWdodCA/IGJQb2ludC54IDwgcG9pbnQueCA6IGJQb2ludC54ID4gcG9pbnQueClcbiAgfSlcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChwb2ludC55IDwgcmVzdWx0W2ldLnkpIHtcbiAgICAgIHJlc3VsdC5zcGxpY2UoaSwgMCwgcG9pbnQpXG4gICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxuICB9XG4gIHJlc3VsdC5wdXNoKHBvaW50KVxuICByZXR1cm4gcmVzdWx0XG59XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9wb2ludCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFuZ2xlRGlmZihhbHBoYSwgYmV0YSkge1xuICBjb25zdCBtaW5BbmdsZSA9IE1hdGgubWluKGFscGhhLCBiZXRhKVxuICBjb25zdCBtYXhBbmdsZSA9ICBNYXRoLm1heChhbHBoYSwgYmV0YSlcbiAgcmV0dXJuIE1hdGgubWluKG1heEFuZ2xlIC0gbWluQW5nbGUsIG1pbkFuZ2xlICsgTWF0aC5QSSoyIC0gbWF4QW5nbGUpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbmdsZShwMSwgcDIpIHtcbiAgY29uc3QgZGlmZiA9IHAyLnN1YihwMSlcbiAgcmV0dXJuIG5vcm1hbGl6ZUFuZ2xlKE1hdGguYXRhbjIoZGlmZi55LCBkaWZmLngpKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9SYWRpYW4oYW5nbGUpIHtcbiAgcmV0dXJuICgoYW5nbGUgJSAzNjApICogTWF0aC5QSSAvIDE4MClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvRGVncmVlKGFuZ2xlKSB7XG4gIHJldHVybiAoYW5nbGUgKiAxODAgLyBNYXRoLlBJKSAlIDM2MFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRBbmdsZShtaW4sIG1heCwgdmFsKSB7XG4gIGxldCBkbWluLCBkbWF4XG4gIGlmIChtaW4gPCBtYXggJiYgdmFsID4gbWluICYmIHZhbCA8IG1heCkge1xuICAgIHJldHVybiB2YWxcbiAgfSBlbHNlIGlmIChtYXggPCBtaW4gJiYgKHZhbCA8IG1heCB8fCB2YWwgPiBtaW4pKSB7XG4gICAgcmV0dXJuIHZhbFxuICB9IGVsc2Uge1xuICAgIGRtaW4gPSBnZXRBbmdsZURpZmYobWluLCB2YWwpXG4gICAgZG1heCA9IGdldEFuZ2xlRGlmZihtYXgsIHZhbClcbiAgICBpZiAoZG1pbiA8IGRtYXgpIHtcbiAgICAgIHJldHVybiBtaW5cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG1heFxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmVhcmVzdEFuZ2xlKGFyciwgYW5nbGUpIHtcbiAgbGV0IGksIHRlbXAsIGRpZmYgPSBNYXRoLlBJICogMiwgdmFsdWVcbiAgZm9yIChpID0gMDsgaSA8IGFyci5sZW5ndGg7aSsrKSB7XG4gICAgdGVtcCA9IGdldEFuZ2xlRGlmZihhcnJbaV0sIGFuZ2xlKVxuICAgIGlmIChkaWZmIDwgdGVtcCkge1xuICAgICAgZGlmZiA9IHRlbXBcbiAgICAgIHZhbHVlID0gYXJyW2ldXG4gICAgfVxuICB9XG4gIHJldHVybiB2YWx1ZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplQW5nbGUodmFsKSB7XG4gIHdoaWxlICh2YWwgPCAwKSB7XG4gICAgdmFsICs9IDIgKiBNYXRoLlBJXG4gIH1cbiAgd2hpbGUgKHZhbCA+IDIgKiBNYXRoLlBJKSB7XG4gICAgdmFsIC09IDIgKiBNYXRoLlBJXG4gIH1cbiAgcmV0dXJuIHZhbFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKGFuZ2xlLCBsZW5ndGgsIGNlbnRlcikge1xuICBjZW50ZXIgPSBjZW50ZXIgfHwgbmV3IFBvaW50KDAsIDApXG4gIHJldHVybiBjZW50ZXIuYWRkKG5ldyBQb2ludChsZW5ndGggKiBNYXRoLmNvcyhhbmdsZSksIGxlbmd0aCAqIE1hdGguc2luKGFuZ2xlKSkpXG59XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9nZW9tZXRyeS9wb2ludCdcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSAnLi9nZW9tZXRyeS9yZWN0YW5nbGUnXG5pbXBvcnQge1xuICBnZXRQb2ludE9uTGluZUJ5TGVuZ2h0LFxuICBkaXJlY3RDcm9zc2luZyxcbiAgYm91bmRUb0xpbmVcbn0gZnJvbSAnLi9nZW9tZXRyeS9ib3VuZHMnXG5cbmltcG9ydCB7XG4gIGdldEFuZ2xlLFxuICBub3JtYWxpemVBbmdsZSxcbiAgYm91bmRBbmdsZSxcbiAgZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtXG59IGZyb20gJy4vZ2VvbWV0cnkvYW5nbGVzJ1xuXG5leHBvcnQgY2xhc3MgQm91bmQge1xuICBjb25zdHJ1Y3RvciAoKSB7fVxuXG4gIGJvdW5kKHBvaW50LCBfc2l6ZSkge1xuICAgIHJldHVybiBwb2ludFxuICB9XG5cbiAgcmVmcmVzaCAoKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb1JlY3RhbmdsZSBleHRlbmRzIEJvdW5kIHtcbiAgY29uc3RydWN0b3IocmVjdGFuZ2xlKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMucmVjdGFuZ2xlID0gcmVjdGFuZ2xlXG4gIH1cblxuICBib3VuZChwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IGNhbGNQb2ludCA9IHBvaW50LmNsb25lKClcbiAgICBjb25zdCByZWN0UDIgPSB0aGlzLnJlY3RhbmdsZS5nZXRQMygpXG5cbiAgICBpZiAodGhpcy5yZWN0YW5nbGUucG9zaXRpb24ueCA+IGNhbGNQb2ludC54KSB7XG4gICAgICAoY2FsY1BvaW50LnggPSB0aGlzLnJlY3RhbmdsZS5wb3NpdGlvbi54KVxuICAgIH1cbiAgICBpZiAodGhpcy5yZWN0YW5nbGUucG9zaXRpb24ueSA+IGNhbGNQb2ludC55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHRoaXMucmVjdGFuZ2xlLnBvc2l0aW9uLnlcbiAgICB9XG4gICAgaWYgKHJlY3RQMi54IDwgY2FsY1BvaW50LnggKyBzaXplLngpIHtcbiAgICAgIGNhbGNQb2ludC54ID0gcmVjdFAyLnggLSBzaXplLnhcbiAgICB9XG4gICAgaWYgKHJlY3RQMi55IDwgY2FsY1BvaW50LnkgKyBzaXplLnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gcmVjdFAyLnkgLSBzaXplLnlcbiAgICB9XG5cbiAgICByZXR1cm4gY2FsY1BvaW50XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9FbGVtZW50IGV4dGVuZHMgQm91bmRUb1JlY3RhbmdsZSB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIHBhcmVudCkge1xuICAgIHN1cGVyKFJlY3RhbmdsZS5mcm9tRWxlbWVudChlbGVtZW50LCBwYXJlbnQpKVxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudFxuICB9XG5cbiAgcmVmcmVzaCAoKSB7XG4gICAgdGhpcy5yZWN0YW5nbGUgPSBSZWN0YW5nbGUuZnJvbUVsZW1lbnQodGhpcy5lbGVtZW50LCB0aGlzLnBhcmVudClcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb0xpbmVYIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3Rvcih4LCBzdGFydFksIGVuZFkpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy54ID0geFxuICAgIHRoaXMuc3RhcnRZID0gc3RhcnRZXG4gICAgdGhpcy5lbmRZID0gZW5kWVxuICB9XG5cbiAgYm91bmQocG9pbnQsIHNpemUpIHtcbiAgICBjb25zdCBjYWxjUG9pbnQgPSBwb2ludC5jbG9uZSgpXG5cbiAgICBjYWxjUG9pbnQueCA9IHRoaXMueFxuICAgIGlmICh0aGlzLnN0YXJ0WSA+IGNhbGNQb2ludC55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHRoaXMuc3RhcnRZXG4gICAgfVxuICAgIGlmICh0aGlzLmVuZFkgPCBjYWxjUG9pbnQueSArIHNpemUueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSB0aGlzLmVuZFkgLSBzaXplLnlcbiAgICB9XG5cbiAgICByZXR1cm4gY2FsY1BvaW50XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9MaW5lWSBleHRlbmRzIEJvdW5kIHtcbiAgY29uc3RydWN0b3IoeSwgc3RhcnRYLCBlbmRYKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMueSA9IHlcbiAgICB0aGlzLnN0YXJ0WCA9IHN0YXJ0WFxuICAgIHRoaXMuZW5kWCA9IGVuZFhcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgY2FsY1BvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIGNhbGNQb2ludC55ID0gdGhpcy55XG4gICAgaWYgKHRoaXMuc3RhcnRYID4gY2FsY1BvaW50LngpIHtcbiAgICAgIGNhbGNQb2ludC54ID0gdGhpcy5zdGFydFhcbiAgICB9XG4gICAgaWYgKHRoaXMuZW5kWCA8IGNhbGNQb2ludC54ICsgc2l6ZS54KSB7XG4gICAgICBjYWxjUG9pbnQueCA9IHRoaXMuZW5kWCAtIHNpemUueFxuICAgIH1cbiAgICByZXR1cm4gY2FsY1BvaW50XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9MaW5lIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3RvcihzdGFydFBvaW50LCBlbmRQb2ludCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnN0YXJ0UG9pbnQgPSBzdGFydFBvaW50XG4gICAgdGhpcy5lbmRQb2ludCA9IGVuZFBvaW50XG4gICAgY29uc3QgYWxwaGEgPSBNYXRoLmF0YW4yKGVuZFBvaW50LnkgLSBzdGFydFBvaW50LnksIGVuZFBvaW50LnggLSBzdGFydFBvaW50LngpXG4gICAgY29uc3QgYmV0YSA9IGFscGhhICsgTWF0aC5QSSAvIDJcbiAgICB0aGlzLnNvbWVLID0gMTBcbiAgICB0aGlzLmNvc0JldGEgPSBNYXRoLmNvcyhiZXRhKVxuICAgIHRoaXMuc2luQmV0YSA9IE1hdGguc2luKGJldGEpXG4gIH1cblxuICBib3VuZChwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IHBvaW50MiA9IG5ldyBQb2ludChcbiAgICAgIHBvaW50LnggKyB0aGlzLnNvbWVLICogdGhpcy5jb3NCZXRhLFxuICAgICAgcG9pbnQueSArIHRoaXMuc29tZUsgKiB0aGlzLnNpbkJldGFcbiAgICApXG5cbiAgICBjb25zdCBuZXdFbmRQb2ludCA9IGdldFBvaW50T25MaW5lQnlMZW5naHQodGhpcy5lbmRQb2ludCwgdGhpcy5zdGFydFBvaW50LCBzaXplLngpXG4gICAgY29uc3QgcG9pbnRDcm9zc2luZyA9IGRpcmVjdENyb3NzaW5nKHRoaXMuc3RhcnRQb2ludCwgdGhpcy5lbmRQb2ludCwgcG9pbnQsIHBvaW50MilcblxuICAgIHJldHVybiBib3VuZFRvTGluZSh0aGlzLnN0YXJ0UG9pbnQsIG5ld0VuZFBvaW50LCBwb2ludENyb3NzaW5nKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvQ2lyY2xlIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3RvcihjZW50ZXIsIHJhZGl1cykge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLmNlbnRlciA9IGNlbnRlclxuICAgIHRoaXMucmFkaXVzID0gcmFkaXVzXG4gIH1cblxuICBib3VuZChwb2ludCwgX3NpemUpIHtcbiAgICByZXR1cm4gZ2V0UG9pbnRPbkxpbmVCeUxlbmdodCh0aGlzLmNlbnRlciwgcG9pbnQsIHRoaXMucmFkaXVzKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvQXJjIGV4dGVuZHMgQm91bmRUb0NpcmNsZSB7XG4gIGNvbnN0cnVjdG9yKGNlbnRlciwgcmFkaXVzLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSkge1xuICAgIHN1cGVyKGNlbnRlciwgcmFkaXVzKVxuICAgIHRoaXMuX3N0YXJ0QW5nbGUgPSBzdGFydEFuZ2xlXG4gICAgdGhpcy5fZW5kQW5nbGUgPSBlbmRBbmdsZVxuICB9XG5cbiAgc3RhcnRBbmdsZSgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMuX3N0YXJ0QW5nbGUgPT09ICdmdW5jdGlvbicgPyB0aGlzLl9zdGFydEFuZ2xlKCkgOiB0aGlzLl9zdGFydEFuZ2xlXG4gIH1cblxuICBlbmRBbmdsZSgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMuX2VuZEFuZ2xlID09PSAnZnVuY3Rpb24nID8gdGhpcy5fZW5kQW5nbGUoKSA6IHRoaXMuX2VuZEFuZ2xlXG4gIH1cblxuICBib3VuZChwb2ludCwgX3NpemUpIHtcbiAgICBsZXQgYW5nbGUgPSBnZXRBbmdsZSh0aGlzLmNlbnRlciwgcG9pbnQpXG4gICAgYW5nbGUgPSBub3JtYWxpemVBbmdsZShhbmdsZSlcbiAgICBhbmdsZSA9IGJvdW5kQW5nbGUodGhpcy5zdGFydEFuZ2xlKCksIHRoaXMuZW5kQW5nbGUoKSwgYW5nbGUpXG4gICAgcmV0dXJuIGdldFBvaW50RnJvbVJhZGlhbFN5c3RlbShhbmdsZSwgdGhpcy5yYWRpdXMsIHRoaXMuY2VudGVyKVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhcnJheSwgdmFsKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoYXJyYXlbaV0gPT09IHZhbCkge1xuICAgICAgYXJyYXkuc3BsaWNlKGksIDEpXG4gICAgICBpLS1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycmF5XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByYW5nZShzdGFydCwgc3RvcCwgc3RlcCkge1xuICBjb25zdCByZXN1bHQgPSBbXVxuICBpZiAodHlwZW9mIHN0b3AgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgc3RvcCA9IHN0YXJ0XG4gICAgc3RhcnQgPSAwXG4gIH1cbiAgaWYgKHR5cGVvZiBzdGVwID09PSAndW5kZWZpbmVkJykge1xuICAgIHN0ZXAgPSAxXG4gIH1cbiAgaWYgKChzdGVwID4gMCAmJiBzdGFydCA+PSBzdG9wKSB8fCAoc3RlcCA8IDAgJiYgc3RhcnQgPD0gc3RvcCkpIHtcbiAgICByZXR1cm4gW11cbiAgfVxuICBmb3IgKGxldCBpID0gc3RhcnQ7IHN0ZXAgPiAwID8gaSA8IHN0b3AgOiBpID4gc3RvcDsgaSArPSBzdGVwKSB7XG4gICAgcmVzdWx0LnB1c2goaSlcbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9nZW9tZXRyeS9wb2ludCdcbmltcG9ydCB7IGFkZFBvaW50VG9Cb3VuZFBvaW50cyB9IGZyb20gJy4vZ2VvbWV0cnkvYm91bmRzJ1xuXG5pbXBvcnQge1xuICBpbmRleE9mTmVhcmVzdFBvaW50LFxuICBnZXREaXN0YW5jZVxufSBmcm9tICcuL2dlb21ldHJ5L2Rpc3RhbmNlcydcblxuY2xhc3MgQmFzaWNTdHJhdGVneSB7XG4gIGNvbnN0cnVjdG9yKHJlY3RhbmdsZSwgb3B0aW9ucz17fSkge1xuICAgIHRoaXMucmVjdGFuZ2xlID0gcmVjdGFuZ2xlXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9uc1xuICB9XG5cbiAgZ2V0IGJvdW5kUmVjdCAoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGlzLnJlY3RhbmdsZSA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMucmVjdGFuZ2xlKCkgOiB0aGlzLnJlY3RhbmdsZVxuICB9XG59XG5cbmNsYXNzIE5vdENyb3NzaW5nU3RyYXRlZ3kgZXh0ZW5kcyBCYXNpY1N0cmF0ZWd5IHtcbiAgcG9zaXRpb25pbmcgKHJlY3RhbmdsZUxpc3QsIGluZGV4ZXNPZk5ld3MpIHtcbiAgICBjb25zdCBzdGF0aWNSZWN0YW5nbGVJbmRleGVzID0gcmVjdGFuZ2xlTGlzdC5yZWR1Y2UoKGluZGV4ZXMsIF9yZWN0LCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGluZGV4ZXNPZk5ld3MuaW5kZXhPZihpbmRleCkgPT09IC0xKSB7XG4gICAgICAgIGluZGV4ZXMucHVzaChpbmRleClcbiAgICAgIH1cbiAgICAgIHJldHVybiBpbmRleGVzXG4gICAgfSwgW10pXG5cbiAgICBpbmRleGVzT2ZOZXdzLmZvckVhY2goKGluZGV4KSA9PiB7XG4gICAgICBsZXQgcmVjdCA9IHJlY3RhbmdsZUxpc3RbaW5kZXhdXG4gICAgICBsZXQgcmVtb3ZhYmxlID0gZmFsc2VcblxuICAgICAgc3RhdGljUmVjdGFuZ2xlSW5kZXhlcy5mb3JFYWNoKChpbmRleE9mU3RhdGljKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YXRpY1JlY3QgPSByZWN0YW5nbGVMaXN0W2luZGV4T2ZTdGF0aWNdXG4gICAgICAgIHJlY3QgPSBzdGF0aWNSZWN0Lm1vdmVUb0JvdW5kKHJlY3QpXG4gICAgICB9KVxuXG4gICAgICByZW1vdmFibGUgPSBzdGF0aWNSZWN0YW5nbGVJbmRleGVzLnNvbWUoKGluZGV4T2ZTdGF0aWMpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhdGljUmVjdCA9IHJlY3RhbmdsZUxpc3RbaW5kZXhPZlN0YXRpY11cbiAgICAgICAgcmV0dXJuICAhIXN0YXRpY1JlY3QuYW5kKHJlY3QpXG4gICAgICB9KSB8fCByZWN0LmFuZCh0aGlzLmJvdW5kUmVjdCkuZ2V0U3F1YXJlKCkgIT09IHJlY3QuZ2V0U3F1YXJlKClcblxuICAgICAgaWYgKHJlbW92YWJsZSkge1xuICAgICAgICByZWN0LnJlbW92YWJsZSA9IHRydWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMucHVzaChpbmRleClcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiByZWN0YW5nbGVMaXN0XG4gIH1cblxuICBzb3J0aW5nKG9kbERyYWdnYWJsZXNMaXN0LCBuZXdEcmFnZ2FibGVzLCBpbmRleE9mTmV3cykge1xuICAgIGNvbnN0IGRyYWdnYWJsZXMgPSBvZGxEcmFnZ2FibGVzTGlzdC5jb25jYXQobmV3RHJhZ2dhYmxlcylcbiAgICBuZXdEcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgaW5kZXhPZk5ld3MucHVzaChkcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSlcbiAgICB9KVxuICAgIHJldHVybiBkcmFnZ2FibGVzXG4gIH1cbn1cblxuY2xhc3MgRmxvYXRMZWZ0U3RyYXRlZ3kgZXh0ZW5kcyBCYXNpY1N0cmF0ZWd5IHtcbiAgY29uc3RydWN0b3IocmVjdGFuZ2xlLCBvcHRpb25zPXt9KSB7XG4gICAgc3VwZXIocmVjdGFuZ2xlLCBvcHRpb25zKVxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgcmVtb3ZhYmxlOiB0cnVlXG4gICAgfSwgb3B0aW9ucylcblxuICAgIHRoaXMucmFkaXVzID0gb3B0aW9ucy5yYWRpdXMgfHwgODBcblxuICAgIHRoaXMucGFkZGluZ1RvcExlZnQgPSBvcHRpb25zLnBhZGRpbmdUb3BMZWZ0IHx8IG5ldyBQb2ludCgwLCAwKVxuICAgIHRoaXMucGFkZGluZ0JvdHRvbVJpZ2h0ID0gb3B0aW9ucy5wYWRkaW5nQm90dG9tUmlnaHQgfHwgbmV3IFBvaW50KDAsIDApXG4gICAgdGhpcy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgPSBvcHRpb25zLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyB8fCAwXG5cbiAgICB0aGlzLmdldERpc3RhbmNlID0gb3B0aW9ucy5nZXREaXN0YW5jZSB8fCBnZXREaXN0YW5jZVxuICAgIHRoaXMuZ2V0UG9zaXRpb24gPSBvcHRpb25zLmdldFBvc2l0aW9uIHx8ICgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucG9zaXRpb24pXG4gIH1cblxuICBwb3NpdGlvbmluZyhyZWN0YW5nbGVMaXN0LCBfaW5kZXhlc09mTmV3cykge1xuICAgIGNvbnN0IGJvdW5kUmVjdCA9IHRoaXMuYm91bmRSZWN0XG4gICAgY29uc3QgcmVjdFAyID0gYm91bmRSZWN0LmdldFAyKClcbiAgICBsZXQgYm91bmRhcnlQb2ludHMgPSBbYm91bmRSZWN0LnBvc2l0aW9uXVxuXG4gICAgcmVjdGFuZ2xlTGlzdC5mb3JFYWNoKChyZWN0LCByZWN0SW5kZXgpID0+IHtcbiAgICAgIGxldCBwb3NpdGlvbiwgaXNWYWxpZCA9IGZhbHNlXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvdW5kYXJ5UG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHBvc2l0aW9uID0gbmV3IFBvaW50KFxuICAgICAgICAgIGJvdW5kYXJ5UG9pbnRzW2ldLnggKyB0aGlzLnBhZGRpbmdUb3BMZWZ0LngsXG4gICAgICAgICAgaSA+IDAgPyAoYm91bmRhcnlQb2ludHNbaSAtIDFdLnkgKyB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcykgOiAoYm91bmRSZWN0LnBvc2l0aW9uLnkgKyB0aGlzLnBhZGRpbmdUb3BMZWZ0LnkpXG4gICAgICAgIClcblxuICAgICAgICBpc1ZhbGlkID0gKHBvc2l0aW9uLnggKyByZWN0LnNpemUueCA8IHJlY3RQMi54KVxuXG4gICAgICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgcG9zaXRpb24gPSBuZXcgUG9pbnQoXG4gICAgICAgICAgYm91bmRSZWN0LnBvc2l0aW9uLnggKyB0aGlzLnBhZGRpbmdUb3BMZWZ0LngsXG4gICAgICAgICAgYm91bmRhcnlQb2ludHNbYm91bmRhcnlQb2ludHMubGVuZ3RoIC0gMV0ueSArIChyZWN0SW5kZXggPiAwID8gdGhpcy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgOiB0aGlzLnBhZGRpbmdUb3BMZWZ0LnkpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgcmVjdC5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnJlbW92YWJsZSAmJiByZWN0LmdldFAzKCkueSA+IGJvdW5kUmVjdC5nZXRQMygpLnkpIHtcbiAgICAgICAgcmVjdC5yZW1vdmFibGUgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGJvdW5kYXJ5UG9pbnRzID0gYWRkUG9pbnRUb0JvdW5kUG9pbnRzKGJvdW5kYXJ5UG9pbnRzLCByZWN0LmdldFAzKCkuYWRkKHRoaXMucGFkZGluZ0JvdHRvbVJpZ2h0KSlcbiAgICB9KVxuICAgIHJldHVybiByZWN0YW5nbGVMaXN0XG4gIH1cblxuICBzb3J0aW5nKG9kbERyYWdnYWJsZXNMaXN0LCBuZXdEcmFnZ2FibGVzLCBpbmRleE9mTmV3cykge1xuICAgIGNvbnN0IG5ld0xpc3QgPSBvZGxEcmFnZ2FibGVzTGlzdC5jb25jYXQoKVxuICAgIGNvbnN0IGxpc3RPbGRQb3NpdGlvbiA9IG9kbERyYWdnYWJsZXNMaXN0Lm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUuZ2V0UG9zaXRpb24oKSlcbiAgICBuZXdEcmFnZ2FibGVzLmZvckVhY2goKG5ld0RyYWdnYWJsZSkgPT4ge1xuICAgICAgbGV0IGluZGV4ID0gaW5kZXhPZk5lYXJlc3RQb2ludChsaXN0T2xkUG9zaXRpb24sIHRoaXMuZ2V0UG9zaXRpb24obmV3RHJhZ2dhYmxlKSwgdGhpcy5yYWRpdXMsIHRoaXMuZ2V0RGlzdGFuY2UpXG4gICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgIGluZGV4ID0gbmV3TGlzdC5sZW5ndGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluZGV4ID0gbmV3TGlzdC5pbmRleE9mKG9kbERyYWdnYWJsZXNMaXN0W2luZGV4XSlcbiAgICAgIH1cbiAgICAgIG5ld0xpc3Quc3BsaWNlKGluZGV4LCAwLCBuZXdEcmFnZ2FibGUpXG4gICAgfSlcbiAgICBuZXdEcmFnZ2FibGVzLmZvckVhY2goKG5ld0RyYWdnYWJsZSkgPT4ge1xuICAgICAgaW5kZXhPZk5ld3MucHVzaChuZXdMaXN0LmluZGV4T2YobmV3RHJhZ2dhYmxlKSlcbiAgICB9KVxuICAgIHJldHVybiBuZXdMaXN0XG4gIH1cbn1cblxuY2xhc3MgRmxvYXRSaWdodFN0cmF0ZWd5IGV4dGVuZHMgRmxvYXRMZWZ0U3RyYXRlZ3kge1xuICBjb25zdHJ1Y3RvcihyZWN0YW5nbGUsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcihyZWN0YW5nbGUsIG9wdGlvbnMpXG5cbiAgICB0aGlzLnBhZGRpbmdUb3BSaWdodCA9IG9wdGlvbnMucGFkZGluZ1RvcFJpZ2h0IHx8IG5ldyBQb2ludCg1LCA1KVxuICAgIHRoaXMucGFkZGluZ0JvdHRvbUxlZnQgPSBvcHRpb25zLnBhZGRpbmdCb3R0b21MZWZ0IHx8IG5ldyBQb2ludCgwLCAwKVxuICAgIHRoaXMueUdhcEJldHdlZW5EcmFnZ2FibGVzID0gb3B0aW9ucy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgfHwgMFxuXG4gICAgdGhpcy5wYWRkaW5nQm90dG9tTmVnTGVmdCA9IG5ldyBQb2ludCgtdGhpcy5wYWRkaW5nQm90dG9tTGVmdC54LCB0aGlzLnBhZGRpbmdCb3R0b21MZWZ0LnkpXG4gIH1cblxuICBwb3NpdGlvbmluZyhyZWN0YW5nbGVMaXN0LCBfaW5kZXhlc09mTmV3cykge1xuICAgIGNvbnN0IGJvdW5kUmVjdCA9IHRoaXMuYm91bmRSZWN0XG4gICAgbGV0IGJvdW5kYXJ5UG9pbnRzID0gW2JvdW5kUmVjdC5nZXRQMigpXVxuXG4gICAgcmVjdGFuZ2xlTGlzdC5mb3JFYWNoKChyZWN0LCByZWN0SW5kZXgpID0+IHtcbiAgICAgIGxldCBwb3NpdGlvbiwgaXNWYWxpZCA9IGZhbHNlXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvdW5kYXJ5UG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHBvc2l0aW9uID0gbmV3IFBvaW50KFxuICAgICAgICAgIGJvdW5kYXJ5UG9pbnRzW2ldLnggLSByZWN0LnNpemUueCAtIHRoaXMucGFkZGluZ1RvcFJpZ2h0LngsXG4gICAgICAgICAgaSA+IDAgPyAoYm91bmRhcnlQb2ludHNbaSAtIDFdLnkgKyB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcykgOiAoYm91bmRSZWN0LnBvc2l0aW9uLnkgKyB0aGlzLnBhZGRpbmdUb3BSaWdodC55KVxuICAgICAgICApXG5cbiAgICAgICAgaXNWYWxpZCA9IChwb3NpdGlvbi54ID4gcmVjdC5wb3NpdGlvbi54KVxuICAgICAgICBpZiAoaXNWYWxpZCkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICBwb3NpdGlvbiA9IG5ldyBQb2ludChcbiAgICAgICAgICBib3VuZFJlY3QuZ2V0UDIoKS54ICAtIHJlY3Quc2l6ZS54IC0gdGhpcy5wYWRkaW5nVG9wUmlnaHQueCxcbiAgICAgICAgICBib3VuZGFyeVBvaW50c1tib3VuZGFyeVBvaW50cy5sZW5ndGggLSAxXS55ICsgKHJlY3RJbmRleCA+IDAgPyB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyA6IHRoaXMucGFkZGluZ1RvcFJpZ2h0LnkpXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIHJlY3QucG9zaXRpb24gPSBwb3NpdGlvblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZW1vdmFibGUgJiYgcmVjdC5nZXRQNCgpLnkgPiBib3VuZFJlY3QuZ2V0UDQoKS55KSB7XG4gICAgICAgIHJlY3QucmVtb3ZhYmxlID0gdHJ1ZVxuICAgICAgfVxuICAgICAgYm91bmRhcnlQb2ludHMgPSBhZGRQb2ludFRvQm91bmRQb2ludHMoYm91bmRhcnlQb2ludHMsIHJlY3QuZ2V0UDQoKS5hZGQodGhpcy5wYWRkaW5nQm90dG9tTmVnTGVmdCksIHRydWUpXG4gICAgfSlcbiAgICByZXR1cm4gcmVjdGFuZ2xlTGlzdFxuICB9XG59XG5cbmV4cG9ydCB7IE5vdENyb3NzaW5nU3RyYXRlZ3ksIEZsb2F0TGVmdFN0cmF0ZWd5LCBGbG9hdFJpZ2h0U3RyYXRlZ3kgfVxuIiwiaW1wb3J0IHJhbmdlIGZyb20gJy4vdXRpbHMvcmFuZ2UuanMnXG5pbXBvcnQgcmVtb3ZlSXRlbSBmcm9tICcuL3V0aWxzL3JlbW92ZS1hcnJheS1pdGVtJ1xuaW1wb3J0IGdldERlZmF1bHRQYXJlbnQgZnJvbSAnLi91dGlscy9nZXQtZGVmYXVsdC1wYXJlbnQnXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnRFbWl0dGVyJ1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tICcuL2dlb21ldHJ5L3JlY3RhbmdsZSdcbmltcG9ydCB7IHRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3RvcnkgfSBmcm9tICcuL2dlb21ldHJ5L2Rpc3RhbmNlcydcbmltcG9ydCB7IHNjb3BlcywgZGVmYXVsdFNjb3BlIH0gZnJvbSAnLi9zY29wZSdcblxuaW1wb3J0IHsgRmxvYXRMZWZ0U3RyYXRlZ3kgfSBmcm9tICcuL3Bvc2l0aW9uaW5nJ1xuXG5jb25zdCBhZGRUb0RlZmF1bHRTY29wZSA9IGZ1bmN0aW9uKHRhcmdldCkge1xuICBkZWZhdWx0U2NvcGUuYWRkVGFyZ2V0KHRhcmdldClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFyZ2V0IGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgZHJhZ2dhYmxlcywgb3B0aW9ucyA9IHt9KSB7XG4gICAgc3VwZXIodW5kZWZpbmVkLCBvcHRpb25zKVxuICAgIGNvbnN0IHRhcmdldCA9IHRoaXNcbiAgICBjb25zdCBwYXJlbnQgPSBvcHRpb25zLnBhcmVudCB8fCBnZXREZWZhdWx0UGFyZW50KGVsZW1lbnQpXG5cbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHRpbWVFbmQ6IDIwMCxcbiAgICAgIHRpbWVFeGNhbmdlOiA0MDAsXG4gICAgICBwYXJlbnQ6IHBhcmVudFxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0aGlzLnBvc2l0aW9uaW5nU3RyYXRlZ3kgPSBvcHRpb25zLnN0cmF0ZWd5IHx8IG5ldyBGbG9hdExlZnRTdHJhdGVneShcbiAgICAgIHRoaXMuZ2V0UmVjdGFuZ2xlLmJpbmQodGhpcyksXG4gICAgICB7XG4gICAgICAgIHJhZGl1czogODAsXG4gICAgICAgIGdldERpc3RhbmNlOiB0cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5KHsgeDogMSwgeTogNCB9KSxcbiAgICAgICAgcmVtb3ZhYmxlOiB0cnVlXG4gICAgICB9XG4gICAgKVxuXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUudGFyZ2V0cy5wdXNoKHRhcmdldCkpXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gZHJhZ2dhYmxlc1xuXG4gICAgVGFyZ2V0LmVtaXR0ZXIuZW1pdCgndGFyZ2V0OmNyZWF0ZScsIHRoaXMpXG5cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgcG9zaXRpb25pbmcgKGRyYWdnYWJsZXMsIGluZGV4ZXNPZk5ldykge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uaW5nU3RyYXRlZ3kucG9zaXRpb25pbmcoZHJhZ2dhYmxlcywgaW5kZXhlc09mTmV3KVxuICB9XG5cbiAgc29ydGluZyAob2xkRHJhZ2dhYmxlcywgbmV3RHJhZ2dhYmxlcywgaW5kZXhPZk5ld3MpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbmluZ1N0cmF0ZWd5LnNvcnRpbmcob2xkRHJhZ2dhYmxlcywgbmV3RHJhZ2dhYmxlcywgaW5kZXhPZk5ld3MpXG4gIH1cblxuICBpbml0KCkge1xuICAgIGxldCByZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXdcblxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzID0gdGhpcy5kcmFnZ2FibGVzLmZpbHRlcigoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBsZXQgZWxlbWVudCA9IGRyYWdnYWJsZS5lbGVtZW50LnBhcmVudE5vZGVcbiAgICAgIHdoaWxlIChlbGVtZW50KSB7XG4gICAgICAgIGlmIChlbGVtZW50ID09PSB0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGVcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH0pXG5cbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMubGVuZ3RoKSB7XG4gICAgICBpbmRleGVzT2ZOZXcgPSByYW5nZSh0aGlzLmlubmVyRHJhZ2dhYmxlcy5sZW5ndGgpXG4gICAgICByZWN0YW5nbGVzID0gdGhpcy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgICB9KSwgaW5kZXhlc09mTmV3KVxuICAgICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXcpXG4gICAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHRoaXMuZW1pdCgndGFyZ2V0OmFkZCcsIGRyYWdnYWJsZSkpXG4gICAgfVxuICB9XG5cbiAgZ2V0UmVjdGFuZ2xlKCkge1xuICAgIHJldHVybiBSZWN0YW5nbGUuZnJvbUVsZW1lbnQoXG4gICAgICB0aGlzLmVsZW1lbnQsXG4gICAgICB0aGlzLm9wdGlvbnMucGFyZW50LFxuICAgICAgdGhpcy5vcHRpb25zLmlzQ29udGVudEJveFNpemUsXG4gICAgICB0cnVlXG4gICAgKVxuICB9XG5cbiAgY2F0Y2hEcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5jYXRjaERyYWdnYWJsZSkge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5jYXRjaERyYWdnYWJsZSh0aGlzLCBkcmFnZ2FibGUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRhcmdldFJlY3RhbmdsZSA9IHRoaXMuZ2V0UmVjdGFuZ2xlKClcbiAgICAgIGNvbnN0IGRyYWdnYWJsZVNxdWFyZSA9IGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKS5nZXRTcXVhcmUoKVxuXG4gICAgICByZXR1cm4gZHJhZ2dhYmxlU3F1YXJlIDwgdGFyZ2V0UmVjdGFuZ2xlLmdldFNxdWFyZSgpXG4gICAgICAgICAgICAgICYmIHRhcmdldFJlY3RhbmdsZS5pbmNsdWRlUG9pbnQoZHJhZ2dhYmxlLmdldENlbnRlcigpKVxuICAgIH1cbiAgfVxuXG4gIGdldFBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFJlY3RhbmdsZSgpLnBvc2l0aW9uXG4gIH1cblxuICBnZXRTaXplKCkge1xuICAgIHJldHVybiB0aGlzLmdldFJlY3RhbmdsZSgpLnNpemVcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgc2NvcGVzLmZvckVhY2goKHNjb3BlKSA9PiByZW1vdmVJdGVtKHNjb3BlLnRhcmdldHMsIHRoaXMpKVxuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBbXSlcbiAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIFtdLCAwKVxuICB9XG5cbiAgb25FbmQoZHJhZ2dhYmxlKSB7XG4gICAgY29uc3QgbmV3RHJhZ2dhYmxlc0luZGV4ID0gW11cbiAgICBjb25zdCBpbmNsdWRlUG9pbnQgPSB0aGlzLmdldFJlY3RhbmdsZSgpLmluY2x1ZGVQb2ludChkcmFnZ2FibGUuZ2V0UG9zaXRpb24oKSlcblxuICAgIGlmICghaW5jbHVkZVBvaW50KSB7XG4gICAgICBpZiAodGhpcy5nZXRSZWN0YW5nbGUoKS5pbmNsdWRlUG9pbnQoZHJhZ2dhYmxlLmdldENlbnRlcigpKSkge1xuICAgICAgICBkcmFnZ2FibGUucG9zaXRpb24gPSBkcmFnZ2FibGUuZ2V0Q2VudGVyKCkuY2xvbmUoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5lbWl0KCd0YXJnZXQ6YmVmb3JlQWRkJywgZHJhZ2dhYmxlKVxuXG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMgPSB0aGlzLnNvcnRpbmcodGhpcy5pbm5lckRyYWdnYWJsZXMsIFtkcmFnZ2FibGVdLCBuZXdEcmFnZ2FibGVzSW5kZXgpXG4gICAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgbmV3RHJhZ2dhYmxlc0luZGV4KVxuXG4gICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBuZXdEcmFnZ2FibGVzSW5kZXgpXG4gICAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTEpIHtcbiAgICAgIHRoaXMuYWRkUmVtb3ZlT25Nb3ZlKGRyYWdnYWJsZSlcbiAgICB9XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIHNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIGluZGV4ZXNPZk5ldywgdGltZSkge1xuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnNsaWNlKDApLmZvckVhY2goKGRyYWdnYWJsZSwgaSkgPT4ge1xuICAgICAgY29uc3QgcmVjdCA9IHJlY3RhbmdsZXNbaV0sXG4gICAgICAgIHRpbWVFbmQgPSB0aW1lIHx8IHRpbWUgPT09IDAgPyB0aW1lIDogaW5kZXhlc09mTmV3LmluZGV4T2YoaSkgIT09IC0xID8gdGhpcy5vcHRpb25zLnRpbWVFbmQgOiB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2VcblxuICAgICAgaWYgKHJlY3QucmVtb3ZhYmxlKSB7XG4gICAgICAgIGRyYWdnYWJsZS5tb3ZlKGRyYWdnYWJsZS5pbml0aWFsUG9zaXRpb24sIHRpbWVFbmQsIHRydWUsIHRydWUpXG4gICAgICAgIHJlbW92ZUl0ZW0odGhpcy5pbm5lckRyYWdnYWJsZXMsIGRyYWdnYWJsZSlcbiAgICAgICAgdGhpcy5lbWl0KCd0YXJnZXQ6cmVtb3ZlJywgZHJhZ2dhYmxlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZHJhZ2dhYmxlLm1vdmUocmVjdC5wb3NpdGlvbiwgdGltZUVuZCwgdHJ1ZSwgdHJ1ZSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgYWRkKGRyYWdnYWJsZSwgdGltZSkge1xuICAgIGNvbnN0IG5ld0RyYWdnYWJsZXNJbmRleCA9IHRoaXMuaW5uZXJEcmFnZ2FibGVzLmxlbmd0aFxuXG4gICAgdGhpcy5lbWl0KCd0YXJnZXQ6YmVmb3JlQWRkJywgZHJhZ2dhYmxlKVxuXG4gICAgdGhpcy5wdXNoSW5uZXJEcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICAgIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgfSksIG5ld0RyYWdnYWJsZXNJbmRleCwgZHJhZ2dhYmxlKVxuXG4gICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBbbmV3RHJhZ2dhYmxlc0luZGV4XSwgdGltZSB8fCAwKVxuICAgIGlmICh0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkgIT09IC0xKSB7XG4gICAgICB0aGlzLmFkZFJlbW92ZU9uTW92ZShkcmFnZ2FibGUpXG4gICAgfVxuICB9XG5cbiAgcHVzaElubmVyRHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIGlmICh0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSk9PT0tMSkge1xuICAgICAgdGhpcy5pbm5lckRyYWdnYWJsZXMucHVzaChkcmFnZ2FibGUpXG4gICAgfVxuICB9XG5cbiAgYWRkUmVtb3ZlT25Nb3ZlKGRyYWdnYWJsZSkge1xuICAgIGRyYWdnYWJsZS5vbignZHJhZzptb3ZlJywgdGhpcy5yZW1vdmVIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgdGhpcy5yZW1vdmUoZHJhZ2dhYmxlKVxuICAgIH0pXG5cbiAgICB0aGlzLmVtaXQoJ3RhcmdldDphZGQnLCBkcmFnZ2FibGUpXG4gIH1cblxuICByZW1vdmUoZHJhZ2dhYmxlKSB7XG4gICAgZHJhZ2dhYmxlLnVuc3Vic2NyaWJlKCdkcmFnOm1vdmUnLCB0aGlzLnJlbW92ZUhhbmRsZXIpXG5cbiAgICBjb25zdCBpbmRleCA9IHRoaXMuaW5uZXJEcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKVxuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnNwbGljZShpbmRleCwgMSlcblxuICAgIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgfSksIFtdKVxuXG4gICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBbXSlcbiAgICB0aGlzLmVtaXQoJ3RhcmdldDpyZW1vdmUnLCBkcmFnZ2FibGUpXG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5tb3ZlKGRyYWdnYWJsZS5pbml0aWFsUG9zaXRpb24sIDAsIHRydWUsIHRydWUpXG4gICAgICB0aGlzLmVtaXQoJ3RhcmdldDpyZW1vdmUnLCBkcmFnZ2FibGUpXG4gICAgfSlcbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcyA9IFtdXG4gIH1cblxuICBnZXRTb3J0ZWREcmFnZ2FibGVzKCkge1xuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnNsaWNlKClcbiAgfVxufVxuXG5UYXJnZXQuZW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXIoVGFyZ2V0KVxuVGFyZ2V0LmVtaXR0ZXIub24oJ3RhcmdldDpjcmVhdGUnLCBhZGRUb0RlZmF1bHRTY29wZSlcbiIsImltcG9ydCByZW1vdmVJdGVtIGZyb20gJy4vdXRpbHMvcmVtb3ZlLWFycmF5LWl0ZW0nXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnRFbWl0dGVyJ1xuaW1wb3J0IERyYWdnYWJsZSBmcm9tICcuL2RyYWdnYWJsZSdcbmltcG9ydCBUYXJnZXQgZnJvbSAnLi90YXJnZXQnXG5cbmNvbnN0IHNjb3BlcyA9IFtdXG5cbmNsYXNzIFNjb3BlIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoZHJhZ2dhYmxlcywgdGFyZ2V0cywgb3B0aW9ucz17fSkge1xuICAgIHN1cGVyKHVuZGVmaW5lZCwgb3B0aW9ucylcbiAgICBzY29wZXMuZm9yRWFjaCgoc2NvcGUpID0+IHtcbiAgICAgIGlmIChkcmFnZ2FibGVzKSB7XG4gICAgICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICAgICAgcmVtb3ZlSXRlbShzY29wZS5kcmFnZ2FibGVzLCBkcmFnZ2FibGUpXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIGlmICh0YXJnZXRzKSB7XG4gICAgICAgIHRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB7XG4gICAgICAgICAgcmVtb3ZlSXRlbShzY29wZS50YXJnZXRzLCB0YXJnZXQpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZXMgfHwgW11cbiAgICB0aGlzLnRhcmdldHMgPSB0YXJnZXRzIHx8IFtdXG4gICAgc2NvcGVzLnB1c2godGhpcylcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICB0aW1lRW5kOiAob3B0aW9ucy50aW1lRW5kKSB8fCA0MDBcbiAgICB9XG5cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUuZHJhZ0VuZEFjdGlvbiA9ICgpID0+IHRoaXMub25FbmQoZHJhZ2dhYmxlKVxuICAgIH0pXG4gIH1cblxuICBhZGREcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxuICAgIGRyYWdnYWJsZS5kcmFnRW5kQWN0aW9uID0gKCkgPT4gdGhpcy5vbkVuZChkcmFnZ2FibGUpXG4gIH1cblxuICBhZGRUYXJnZXQodGFyZ2V0KSB7XG4gICAgdGhpcy50YXJnZXRzLnB1c2godGFyZ2V0KVxuICB9XG5cbiAgb25FbmQoZHJhZ2dhYmxlKSB7XG4gICAgY29uc3Qgc2hvdFRhcmdldHMgPSB0aGlzLnRhcmdldHMuZmlsdGVyKCh0YXJnZXQpID0+IHtcbiAgICAgIHJldHVybiB0YXJnZXQuZHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkgIT09IC0xXG4gICAgfSkuZmlsdGVyKCh0YXJnZXQpID0+IHtcbiAgICAgIHJldHVybiB0YXJnZXQuY2F0Y2hEcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICAgIH0pLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIHJldHVybiBhLmdldFJlY3RhbmdsZSgpLmdldFNxdWFyZSgpIC0gYi5nZXRSZWN0YW5nbGUoKS5nZXRTcXVhcmUoKVxuICAgIH0pXG5cbiAgICBpZiAoc2hvdFRhcmdldHMubGVuZ3RoKSB7XG4gICAgICBzaG90VGFyZ2V0c1swXS5vbkVuZChkcmFnZ2FibGUpXG4gICAgfSBlbHNlIGlmIChkcmFnZ2FibGUudGFyZ2V0cy5sZW5ndGgpIHtcbiAgICAgIGRyYWdnYWJsZS5waW5Qb3NpdGlvbihkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uLCB0aGlzLm9wdGlvbnMudGltZUVuZClcbiAgICB9XG5cbiAgICB0aGlzLmVtaXQoJ3Njb3BlOmNoYW5nZScpXG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLnRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB0YXJnZXQucmVzZXQoKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnJlZnJlc2goKSlcbiAgICB0aGlzLnRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB0YXJnZXQucmVmcmVzaCgpKVxuICB9XG5cbiAgZ2V0IHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXRzLm1hcCgodGFyZ2V0KSA9PiB7XG4gICAgICByZXR1cm4gdGFyZ2V0LmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4gdGhpcy5kcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSlcbiAgICB9KVxuICB9XG5cbiAgc2V0IHBvc2l0aW9ucyhwb3NpdGlvbnMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gJ3dyb25nIGFycmF5IGxlbmd0aCdcbiAgICBpZiAocG9zaXRpb25zLmxlbmd0aCA9PT0gdGhpcy50YXJnZXRzLmxlbmd0aCkge1xuICAgICAgdGhpcy50YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4gdGFyZ2V0LnJlc2V0KCkpXG5cbiAgICAgIHBvc2l0aW9ucy5mb3JFYWNoKCh0YXJnZXRJbmRleGVzLCBpKSA9PiB7XG4gICAgICAgIHRhcmdldEluZGV4ZXMuZm9yRWFjaCgoaW5kZXgpID0+IHtcbiAgICAgICAgICB0aGlzLnRhcmdldHNbaV0uYWRkKHRoaXMuZHJhZ2dhYmxlc1tpbmRleF0pXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBtZXNzYWdlXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IGRlZmF1bHRTY29wZSA9IG5ldyBTY29wZSgpXG5cbmZ1bmN0aW9uIHNjb3BlKGZuKSB7XG4gIGNvbnN0IGN1cnJlbnRTY29wZSA9IG5ldyBTY29wZSgpXG5cbiAgY29uc3QgYWRkRHJhZ2dhYmxlVG9TY29wZSA9IGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICAgIGN1cnJlbnRTY29wZS5hZGREcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICAgIERyYWdnYWJsZS5lbWl0dGVyLmludGVycnVwdCgpXG4gIH1cblxuICBjb25zdCBhZGRUYXJnZXRUb1Njb3BlID0gZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgY3VycmVudFNjb3BlLmFkZFRhcmdldCh0YXJnZXQpXG4gICAgRHJhZ2dhYmxlLmVtaXR0ZXIuaW50ZXJydXB0KClcbiAgfVxuXG4gIERyYWdnYWJsZS5lbWl0dGVyLnByZXBlbmRPbignZHJhZ2dhYmxlOmNyZWF0ZScsIGFkZERyYWdnYWJsZVRvU2NvcGUpXG4gIFRhcmdldC5lbWl0dGVyLnByZXBlbmRPbigndGFyZ2V0OmNyZWF0ZScsIGFkZFRhcmdldFRvU2NvcGUpXG4gIGZuLmNhbGwoKVxuICBEcmFnZ2FibGUuZW1pdHRlci51bnN1YnNjcmliZSgnZHJhZ2dhYmxlOmNyZWF0ZScsIGFkZERyYWdnYWJsZVRvU2NvcGUpXG4gIFRhcmdldC5lbWl0dGVyLnVuc3Vic2NyaWJlKCd0YXJnZXQ6Y3JlYXRlJywgYWRkVGFyZ2V0VG9TY29wZSlcbiAgcmV0dXJuIGN1cnJlbnRTY29wZVxufVxuXG5leHBvcnQgeyBzY29wZXMsIGRlZmF1bHRTY29wZSwgU2NvcGUsIHNjb3BlIH1cbiIsImZ1bmN0aW9uIGNoZWNrU3VwcG9ydFBhc3NpdmVFdmVudHMoKSB7XG4gIGxldCBwYXNzaXZlU3VwcG9ydGVkID0gZmFsc2VcblxuICB0cnkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdwYXNzaXZlJywge1xuICAgICAgZ2V0KCkge1xuICAgICAgICByZXR1cm4gKHBhc3NpdmVTdXBwb3J0ZWQgPSB0cnVlKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndGVzdCcsIG9wdGlvbnMsIG9wdGlvbnMpXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Rlc3QnLCBvcHRpb25zLCBvcHRpb25zKVxuICB9IGNhdGNoIChfZXJyKSB7XG4gICAgcGFzc2l2ZVN1cHBvcnRlZCA9IGZhbHNlXG4gIH1cblxuICByZXR1cm4gcGFzc2l2ZVN1cHBvcnRlZFxufVxuXG5leHBvcnQgY29uc3QgaXNTdXBwb3J0UGFzc2l2ZUV2ZW50cyA9IGNoZWNrU3VwcG9ydFBhc3NpdmVFdmVudHMoKVxuXG5mdW5jdGlvbiBldmVudE9wdGlvbnMob3B0aW9ucywgZmFsbGJhY2sgPSBmYWxzZSkge1xuICByZXR1cm4gaXNTdXBwb3J0UGFzc2l2ZUV2ZW50cyA/IG9wdGlvbnMgOiBmYWxsYmFja1xufVxuXG5leHBvcnQgeyBldmVudE9wdGlvbnMgfVxuXG5leHBvcnQgZGVmYXVsdCBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzXG4iLCJpbXBvcnQgeyBhZGRDbGFzcywgcmVtb3ZlQ2xhc3MgfSBmcm9tICcuL3V0aWxzL2NsYXNzZXMnXG5pbXBvcnQgZ2V0RGVmYXVsdFBhcmVudCBmcm9tICcuL3V0aWxzL2dldC1kZWZhdWx0LXBhcmVudCdcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudEVtaXR0ZXInXG5pbXBvcnQgZ2V0U3R5bGVQcm9wZXJ0eSBmcm9tICdkZXNhbmRyby1nZXQtc3R5bGUtcHJvcGVydHknXG5pbXBvcnQgeyBCb3VuZFRvRWxlbWVudCB9IGZyb20gJy4vYm91bmRpbmcnXG5pbXBvcnQgUG9pbnQgZnJvbSAnLi9nZW9tZXRyeS9wb2ludCdcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSAnLi9nZW9tZXRyeS9yZWN0YW5nbGUnXG5pbXBvcnQgeyBkZWZhdWx0U2NvcGUgfSBmcm9tICcuL3Njb3BlJ1xuaW1wb3J0IGlzU3VwcG9ydFBhc3NpdmVFdmVudHMgZnJvbSAnLi91dGlscy9pcy1zdXBwb3J0LXBhc3NpdmUtZXZlbnRzJ1xuXG5jb25zdCBpc1RvdWNoID0gJ29udG91Y2hzdGFydCcgaW4gd2luZG93XG5jb25zdCBtb3VzZUV2ZW50cyA9IHtcbiAgc3RhcnQ6ICdtb3VzZWRvd24nLFxuICBtb3ZlOiAnbW91c2Vtb3ZlJyxcbiAgZW5kOiAnbW91c2V1cCdcbn1cbmNvbnN0IHRvdWNoRXZlbnRzID0ge1xuICBzdGFydDogJ3RvdWNoc3RhcnQnLFxuICBtb3ZlOiAndG91Y2htb3ZlJyxcbiAgZW5kOiAndG91Y2hlbmQnXG59XG5jb25zdCBkcmFnZ2FibGVzID0gW11cbmNvbnN0IHRyYW5zZm9ybVByb3BlcnR5ID0gZ2V0U3R5bGVQcm9wZXJ0eSgndHJhbnNmb3JtJylcbmNvbnN0IHRyYW5zaXRpb25Qcm9wZXJ0eSA9IGdldFN0eWxlUHJvcGVydHkoJ3RyYW5zaXRpb24nKVxuXG5mdW5jdGlvbiBnZXRUb3VjaEJ5SUQoZWxlbWVudCwgdG91Y2hJZCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnQuY2hhbmdlZFRvdWNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZWxlbWVudC5jaGFuZ2VkVG91Y2hlc1tpXS5pZGVudGlmaWVyID09PSB0b3VjaElkKSB7XG4gICAgICByZXR1cm4gZWxlbWVudC5jaGFuZ2VkVG91Y2hlc1tpXVxuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cblxuZnVuY3Rpb24gcHJldmVudERvdWJsZUluaXQoZHJhZ2dhYmxlKSB7XG4gIGNvbnN0IG1lc3NhZ2UgPSBcImZvciB0aGlzIGVsZW1lbnQgRHJhZ2VlLkRyYWdnYWJsZSBpcyBhbHJlYWR5IGV4aXN0LCBkb24ndCBjcmVhdGUgaXQgdHdpY2UgXCJcbiAgaWYgKGRyYWdnYWJsZXMuc29tZSgoZXhpc3RpbmcpID0+IGRyYWdnYWJsZS5lbGVtZW50ID09PSBleGlzdGluZy5lbGVtZW50KSkge1xuICAgIHRocm93IG1lc3NhZ2VcbiAgfVxuICBkcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxufVxuXG5mdW5jdGlvbiBhZGRUb0RlZmF1bHRTY29wZShkcmFnZ2FibGUpIHtcbiAgZGVmYXVsdFNjb3BlLmFkZERyYWdnYWJsZShkcmFnZ2FibGUpXG59XG5cbmZ1bmN0aW9uIGNvcHlTdHlsZXMoc291cmNlLCBkZXN0aW5hdGlvbikge1xuICBjb25zdCBjcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHNvdXJjZSlcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qga2V5ID0gY3NbaV1cbiAgICBpZiAoKGtleS5pbmRleE9mKCd0cmFuc2l0aW9uJykgPCAwKSAmJiAoa2V5LmluZGV4T2YoJ3RyYW5zZm9ybScpIDwgMCkpIHtcbiAgICAgIGRlc3RpbmF0aW9uLnN0eWxlW2tleV0gPSBjc1trZXldXG4gICAgfVxuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzb3VyY2UuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICBjb3B5U3R5bGVzKHNvdXJjZS5jaGlsZHJlbltpXSwgZGVzdGluYXRpb24uY2hpbGRyZW5baV0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhZ2dhYmxlIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgb3B0aW9ucz17fSkge1xuICAgIHN1cGVyKHVuZGVmaW5lZCwgb3B0aW9ucylcbiAgICB0aGlzLnRhcmdldHMgPSBbXVxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG4gICAgcHJldmVudERvdWJsZUluaXQodGhpcylcbiAgICBEcmFnZ2FibGUuZW1pdHRlci5lbWl0KCdkcmFnZ2FibGU6Y3JlYXRlJywgdGhpcylcbiAgICB0aGlzLl9lbmFibGUgPSB0cnVlXG4gICAgdGhpcy5zdGFydFBvc2l0aW9uaW5nKClcbiAgICB0aGlzLnN0YXJ0TGlzdGVuaW5nKClcbiAgfVxuXG4gIHN0YXJ0UG9zaXRpb25pbmcoKSB7XG4gICAgdGhpcy5fc2V0RGVmYXVsdFRyYW5zaXRpb24oKVxuICAgIHRoaXMub2Zmc2V0ID0gUG9pbnQuZWxlbWVudE9mZnNldCh0aGlzLmVsZW1lbnQsIHRoaXMucGFyZW50LCB0cnVlKVxuICAgIHRoaXMucGlubmVkUG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICAgIHRoaXMuaW5pdGlhbFBvc2l0aW9uID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uIHx8IHRoaXMub2Zmc2V0XG5cbiAgICB0aGlzLnBpblBvc2l0aW9uKHRoaXMuaW5pdGlhbFBvc2l0aW9uKVxuXG4gICAgaWYgKHRoaXMuYm91bmRpbmcucmVmcmVzaCkge1xuICAgICAgdGhpcy5ib3VuZGluZy5yZWZyZXNoKClcbiAgICB9XG4gIH1cblxuICBzdGFydExpc3RlbmluZygpIHtcbiAgICB0aGlzLl9kcmFnU3RhcnQgPSAoZXZlbnQpID0+IHRoaXMuZHJhZ1N0YXJ0KGV2ZW50KVxuICAgIHRoaXMuX2RyYWdNb3ZlID0gKGV2ZW50KSA9PiB0aGlzLmRyYWdNb3ZlKGV2ZW50KVxuICAgIHRoaXMuX2RyYWdFbmQgPSAoZXZlbnQpID0+IHRoaXMuZHJhZ0VuZChldmVudClcbiAgICB0aGlzLl9uYXRpdmVEcmFnU3RhcnQgPSAoZXZlbnQpID0+IHRoaXMubmF0aXZlRHJhZ1N0YXJ0KGV2ZW50KVxuICAgIHRoaXMuX25hdGl2ZURyYWdPdmVyID0gKGV2ZW50KSA9PiB0aGlzLm5hdGl2ZURyYWdPdmVyKGV2ZW50KVxuICAgIHRoaXMuX25hdGl2ZURyYWdFbmQgPSAoZXZlbnQpID0+IHRoaXMubmF0aXZlRHJhZ0VuZChldmVudClcbiAgICB0aGlzLl9uYXRpdmVEcm9wID0gKGV2ZW50KSA9PiB0aGlzLm5hdGl2ZURyb3AoZXZlbnQpXG4gICAgdGhpcy5fc2Nyb2xsID0gKGV2ZW50KSA9PiB0aGlzLm9uU2Nyb2xsKGV2ZW50KVxuXG4gICAgdGhpcy5oYW5kbGVyLmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydCwgaXNTdXBwb3J0UGFzc2l2ZUV2ZW50cyA/IHsgcGFzc2l2ZTogZmFsc2UgfSA6IGZhbHNlKVxuICAgIHRoaXMuaGFuZGxlci5hZGRFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQsIGlzU3VwcG9ydFBhc3NpdmVFdmVudHMgPyB7IHBhc3NpdmU6IGZhbHNlIH0gOiBmYWxzZSlcbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgdGhpcy5fbmF0aXZlRHJhZ1N0YXJ0KVxuICB9XG5cbiAgZ2V0U2l6ZSgpIHtcbiAgICByZXR1cm4gUG9pbnQuZWxlbWVudFNpemUodGhpcy5lbGVtZW50LCB0aGlzLm9wdGlvbnMuaXNDb250ZW50Qm94U2l6ZSlcbiAgfVxuXG4gIGdldFBvc2l0aW9uKCkge1xuICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLm9mZnNldC5hZGQodGhpcy5fdHJhbnNmb3JtUG9zaXRpb24gfHwgbmV3IFBvaW50KDAsIDApKVxuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uXG4gIH1cblxuICBnZXRDZW50ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb24uYWRkKHRoaXMuZ2V0U2l6ZSgpLm11bHQoMC41KSlcbiAgfVxuXG4gIF9zZXREZWZhdWx0VHJhbnNpdGlvbiAoKSB7XG4gICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV0gPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsZW1lbnQpW3RyYW5zaXRpb25Qcm9wZXJ0eV1cbiAgfVxuXG4gIF9zZXRUcmFuc2l0aW9uKHRpbWUpIHtcbiAgICBsZXQgdHJhbnNpdGlvbiA9IHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldXG4gICAgY29uc3QgdHJhbnNpdGlvbkNzcyA9IGB0cmFuc2Zvcm0gJHt0aW1lfW1zYFxuXG4gICAgaWYgKCEvdHJhbnNmb3JtIFxcZCptP3MvLnRlc3QodHJhbnNpdGlvbikpIHtcbiAgICAgIGlmICh0cmFuc2l0aW9uKSB7XG4gICAgICAgIHRyYW5zaXRpb24gKz0gYCwgJHt0cmFuc2l0aW9uQ3NzfWBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyYW5zaXRpb24gPSB0cmFuc2l0aW9uQ3NzXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyYW5zaXRpb24gPSB0cmFuc2l0aW9uLnJlcGxhY2UoL3RyYW5zZm9ybSBcXGQqbT9zLywgdHJhbnNpdGlvbkNzcylcbiAgICB9XG5cbiAgICB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNpdGlvblByb3BlcnR5XSA9IHRyYW5zaXRpb25cbiAgfVxuXG4gIF9zZXRUcmFuc2xhdGUocG9pbnQpIHtcbiAgICB0aGlzLl90cmFuc2Zvcm1Qb3NpdGlvbiA9IHBvaW50XG5cbiAgICBsZXQgdHJhbnNmb3JtID0gdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BlcnR5XVxuICAgIGxldCB0cmFuc2xhdGVDc3MgPSBgIHRyYW5zbGF0ZTNkKCR7cG9pbnQueH1weCwgJHtwb2ludC55fXB4LCAwcHgpYFxuXG4gICAgY29uc3QgdWEgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudFxuICAgIGNvbnN0IG1zaWUgPSB1YS5pbmRleE9mKCdNU0lFICcpICE9PSAtMVxuXG4gICAgaWYgKG1zaWUpIHtcbiAgICAgIHRyYW5zbGF0ZUNzcyA9IGAgdHJhbnNsYXRlKCR7cG9pbnQueH1weCwke3BvaW50Lnl9cHgpYFxuICAgICAgaWYgKCEvdHJhbnNsYXRlXFwoW14pXStcXCkvLnRlc3QodHJhbnNmb3JtKSkge1xuICAgICAgICB0cmFuc2Zvcm0gKz0gdHJhbnNsYXRlQ3NzXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cmFuc2Zvcm0gPSB0cmFuc2Zvcm0ucmVwbGFjZSgvdHJhbnNsYXRlXFwoW14pXStcXCkvLCB0cmFuc2xhdGVDc3MpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghL3RyYW5zbGF0ZTNkXFwoW14pXStcXCkvLnRlc3QodHJhbnNmb3JtKSkge1xuICAgICAgICB0cmFuc2Zvcm0gKz0gdHJhbnNsYXRlQ3NzXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cmFuc2Zvcm0gPSB0cmFuc2Zvcm0ucmVwbGFjZSgvdHJhbnNsYXRlM2RcXChbXildK1xcKS8sIHRyYW5zbGF0ZUNzcylcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcGVydHldID0gdHJhbnNmb3JtXG4gIH1cblxuICBtb3ZlKHBvaW50LCB0aW1lPTAsIGlzU2lsZW50PWZhbHNlKSB7XG4gICAgcG9pbnQgPSBwb2ludC5jbG9uZSgpXG5cbiAgICB0aGlzLmRldGVybWluZURpcmVjdGlvbihwb2ludClcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9pbnRcblxuICAgIHRoaXMuX3NldFRyYW5zaXRpb24odGltZSlcbiAgICB0aGlzLl9zZXRUcmFuc2xhdGUocG9pbnQuc3ViKHRoaXMub2Zmc2V0KSlcblxuICAgIGlmICghaXNTaWxlbnQpIHtcbiAgICAgIHRoaXMuZW1pdCgnZHJhZzptb3ZlJylcbiAgICB9XG4gIH1cblxuICBwaW5Qb3NpdGlvbihwb2ludCwgdGltZT0wLCBzaWxlbnQ9dHJ1ZSkge1xuICAgIHRoaXMucGlubmVkUG9zaXRpb24gPSBwb2ludC5jbG9uZSgpXG4gICAgdGhpcy5tb3ZlKHRoaXMucGlubmVkUG9zaXRpb24sIHRpbWUsIHNpbGVudClcbiAgfVxuXG4gIHJlc2V0UG9zaXRpb25Ub0luaXRpYWwgKCkge1xuICAgIHRoaXMucGluUG9zaXRpb24odGhpcy5pbml0aWFsUG9zaXRpb24pXG4gIH1cblxuICByZWZyZXNoUG9zaXRpb24gKCkge1xuICAgIHRoaXMuc2V0UG9zaXRpb24odGhpcy5nZXRQb3NpdGlvbigpKVxuICB9XG5cbiAgc2V0UG9zaXRpb24ocG9pbnQpIHtcbiAgICBwb2ludCA9IHBvaW50LmNsb25lKClcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9pbnRcbiAgICB0aGlzLl9zZXRUcmFuc2l0aW9uKDApXG4gICAgdGhpcy5fc2V0VHJhbnNsYXRlKHBvaW50LnN1Yih0aGlzLm9mZnNldCkpXG4gIH1cblxuICBkZXRlcm1pbmVEaXJlY3Rpb24ocG9pbnQpIHtcbiAgICB0aGlzLmxlZnREaXJlY3Rpb24gPSAodGhpcy5wb3NpdGlvbi54IDwgcG9pbnQueClcbiAgICB0aGlzLnJpZ2h0RGlyZWN0aW9uID0gKHRoaXMucG9zaXRpb24ueCA+IHBvaW50LngpXG4gICAgdGhpcy51cERpcmVjdGlvbiA9ICh0aGlzLnBvc2l0aW9uLnkgPiBwb2ludC55KVxuICAgIHRoaXMuZG93bkRpcmVjdGlvbiA9ICh0aGlzLnBvc2l0aW9uLnkgPCBwb2ludC55KVxuICB9XG5cbiAgZHJhZ1N0YXJ0KGV2ZW50KSB7XG4gICAgdGhpcy5jdXJyZW50RXZlbnQgPSBldmVudFxuICAgIGlmICghdGhpcy5fZW5hYmxlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBpc1RvdWNoRXZlbnQgPSAoaXNUb3VjaCAmJiAoZXZlbnQgaW5zdGFuY2VvZiB3aW5kb3cuVG91Y2hFdmVudCkpXG5cbiAgICB0aGlzLnRvdWNoUG9pbnQgPSB0aGlzLl9zdGFydFRvdWNoUG9pbnQgPSBuZXcgUG9pbnQoXG4gICAgICBpc1RvdWNoRXZlbnQgPyBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCA6IGV2ZW50LmNsaWVudFgsXG4gICAgICBpc1RvdWNoRXZlbnQgPyBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWSA6IGV2ZW50LmNsaWVudFlcbiAgICApXG5cbiAgICB0aGlzLl9zdGFydFBvc2l0aW9uID0gdGhpcy5nZXRQb3NpdGlvbigpXG4gICAgaWYgKGlzVG91Y2hFdmVudCkge1xuICAgICAgdGhpcy5fdG91Y2hJZCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmlkZW50aWZpZXJcbiAgICB9XG5cbiAgICB0aGlzLl9zdGFydFNjcm9sbFBvaW50ID0gbmV3IFBvaW50KHdpbmRvdy5zY3JvbGxYLCB3aW5kb3cuc2Nyb2xsWSlcblxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgaWYgKGV2ZW50LnRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSW5wdXRFbGVtZW50IHx8XG4gICAgICAgICAgZXZlbnQudGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJbnB1dEVsZW1lbnQpIHtcbiAgICAgIGV2ZW50LnRhcmdldC5mb2N1cygpXG4gICAgfVxuXG4gICAgaWYgKCEodGhpcy5uYXRpdmVEcmFnQW5kRHJvcCB8fFxuICAgICAgICAgICAgZXZlbnQudGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJbnB1dEVsZW1lbnQgfHxcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSW5wdXRFbGVtZW50KSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIH1cblxuICAgIGlmICh0aGlzLm5hdGl2ZURyYWdBbmREcm9wKSB7XG4gICAgICBjb25zdCBpc1NhZmFyaSA9IC92ZXJzaW9uXFwvKFxcZCspLis/c2FmYXJpL2kudGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudClcbiAgICAgIGlmICgoaXNUb3VjaEV2ZW50ICYmIHRoaXMuZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wT25Ub3VjaCkgfHxcbiAgICAgICAgICAgICBpc1NhZmFyaSB8fFxuICAgICAgICAgICAgIHRoaXMuZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wRm9yQWxsKSB7XG4gICAgICAgIHRoaXMuZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wKGV2ZW50KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmRyYWdnYWJsZSA9IHRydWVcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX25hdGl2ZURyYWdFbmQsIGlzU3VwcG9ydFBhc3NpdmVFdmVudHMgPyB7IHBhc3NpdmU6IGZhbHNlIH0gOiBmYWxzZSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSwgaXNTdXBwb3J0UGFzc2l2ZUV2ZW50cyA/IHsgcGFzc2l2ZTogZmFsc2UgfSA6IGZhbHNlKVxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSwgaXNTdXBwb3J0UGFzc2l2ZUV2ZW50cyA/IHsgcGFzc2l2ZTogZmFsc2UgfSA6IGZhbHNlKVxuXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZCwgaXNTdXBwb3J0UGFzc2l2ZUV2ZW50cyA/IHsgcGFzc2l2ZTogZmFsc2UgfSA6IGZhbHNlKVxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQsIGlzU3VwcG9ydFBhc3NpdmVFdmVudHMgPyB7IHBhc3NpdmU6IGZhbHNlIH0gOiBmYWxzZSlcbiAgICB9XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fc2Nyb2xsKVxuXG4gICAgdGhpcy5pc0RyYWdnaW5nID0gdHJ1ZVxuICAgIHRoaXMuZW1pdCgnZHJhZzpzdGFydCcpXG4gICAgYWRkQ2xhc3ModGhpcy5lbGVtZW50LCAnZHJhZ2VlLWFjdGl2ZScpXG4gICAgdGhpcy5lbWl0KCdkcmFnOm1vdmUnKVxuICB9XG5cbiAgc3RvcERyYWdnaW5nKCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIHRoaXMuX25hdGl2ZURyYWdPdmVyKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzLl9uYXRpdmVEcm9wKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzLl9uYXRpdmVEcm9wKVxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9zY3JvbGwpXG4gICAgdGhpcy5lbGVtZW50LmRyYWdnYWJsZSA9IGZhbHNlXG4gICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2VcbiAgICByZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnQsICdkcmFnZWUtYWN0aXZlJylcbiAgfVxuXG4gIGRyYWdNb3ZlKGV2ZW50KSB7XG4gICAgdGhpcy5jdXJyZW50RXZlbnQgPSBldmVudFxuICAgIGxldCB0b3VjaFxuXG4gICAgY29uc3QgaXNUb3VjaEV2ZW50ID0gKGlzVG91Y2ggJiYgKGV2ZW50IGluc3RhbmNlb2Ygd2luZG93LlRvdWNoRXZlbnQpKVxuICAgIGlmIChpc1RvdWNoRXZlbnQpIHtcbiAgICAgIHRvdWNoID0gZ2V0VG91Y2hCeUlEKGV2ZW50LCB0aGlzLl90b3VjaElkKVxuXG4gICAgICBpZiAoIXRvdWNoKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIHRoaXMudG91Y2hQb2ludCA9IG5ldyBQb2ludChcbiAgICAgIGlzVG91Y2hFdmVudCA/IHRvdWNoLnBhZ2VYIDogZXZlbnQuY2xpZW50WCxcbiAgICAgIGlzVG91Y2hFdmVudCA/IHRvdWNoLnBhZ2VZIDogZXZlbnQuY2xpZW50WVxuICAgIClcblxuICAgIGxldCBwb2ludCA9IHRoaXMuX3N0YXJ0UG9zaXRpb24uYWRkKHRoaXMudG91Y2hQb2ludC5zdWIodGhpcy5fc3RhcnRUb3VjaFBvaW50KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZCh0aGlzLnNjcm9sbFBvaW50LnN1Yih0aGlzLl9zdGFydFNjcm9sbFBvaW50KSlcblxuICAgIHBvaW50ID0gdGhpcy5ib3VuZGluZy5ib3VuZChwb2ludCwgdGhpcy5nZXRTaXplKCkpXG4gICAgdGhpcy5tb3ZlKHBvaW50KVxuICB9XG5cbiAgZHJhZ0VuZChldmVudCkge1xuICAgIGNvbnN0IGlzVG91Y2hFdmVudCA9IChpc1RvdWNoICYmIChldmVudCBpbnN0YW5jZW9mIHdpbmRvdy5Ub3VjaEV2ZW50KSlcblxuICAgIGlmIChpc1RvdWNoRXZlbnQgJiYgIWdldFRvdWNoQnlJRChldmVudCwgdGhpcy5fdG91Y2hJZCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIHRoaXMuZHJhZ0VuZEFjdGlvbigpXG4gICAgdGhpcy5lbWl0KCdkcmFnOmVuZCcpXG5cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG5cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcblxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9zY3JvbGwpXG5cbiAgICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZVxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2RyYWdnYWJsZScpXG4gICAgcmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50LCAnZHJhZ2VlLWFjdGl2ZScpXG4gIH1cblxuICBvblNjcm9sbChfZXZlbnQpIHtcbiAgICBsZXQgcG9pbnQgPSB0aGlzLl9zdGFydFBvc2l0aW9uLmFkZCh0aGlzLnRvdWNoUG9pbnQuc3ViKHRoaXMuX3N0YXJ0VG91Y2hQb2ludCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy5zY3JvbGxQb2ludC5zdWIodGhpcy5fc3RhcnRTY3JvbGxQb2ludCkpXG5cbiAgICBwb2ludCA9IHRoaXMuYm91bmRpbmcuYm91bmQocG9pbnQsIHRoaXMuZ2V0U2l6ZSgpKVxuICAgIGlmICghdGhpcy5uYXRpdmVEcmFnQW5kRHJvcCkge1xuICAgICAgdGhpcy5tb3ZlKHBvaW50KVxuICAgIH1cbiAgfVxuXG4gIG5hdGl2ZURyYWdTdGFydChldmVudCkge1xuICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0JywgJ0ZpcmVGb3ggZml4JylcbiAgICBldmVudC5kYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCA9ICdtb3ZlJ1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgdGhpcy5fbmF0aXZlRHJhZ092ZXIpXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIHRoaXMuX25hdGl2ZURyYWdFbmQpXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIHRoaXMuX25hdGl2ZURyb3ApXG4gIH1cblxuICBuYXRpdmVEcmFnT3ZlcihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBldmVudC5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9ICdtb3ZlJ1xuICAgIGFkZENsYXNzKHRoaXMuZWxlbWVudCwgJ2RyYWdlZS1wbGFjZWhvbGRlcicpXG4gICAgdGhpcy5jdXJyZW50RXZlbnQgPSBldmVudFxuICAgIGlmIChldmVudC5jbGllbnRYID09PSAwICYmIGV2ZW50LmNsaWVudFkgPT09IDApIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMudG91Y2hQb2ludCA9IG5ldyBQb2ludChldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZKVxuICAgIGxldCBwb2ludCA9IHRoaXMuX3N0YXJ0UG9zaXRpb24uYWRkKHRoaXMudG91Y2hQb2ludC5zdWIodGhpcy5fc3RhcnRUb3VjaFBvaW50KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZCh0aGlzLnNjcm9sbFBvaW50LnN1Yih0aGlzLl9zdGFydFNjcm9sbFBvaW50KSlcbiAgICBwb2ludCA9IHRoaXMuYm91bmRpbmcuYm91bmQocG9pbnQsIHRoaXMuZ2V0U2l6ZSgpKVxuICAgIHRoaXMucG9zaXRpb24gPSBwb2ludFxuICAgIHRoaXMuZW1pdCgnZHJhZzptb3ZlJylcbiAgfVxuXG4gIG5hdGl2ZURyYWdFbmQoX2V2ZW50KSB7XG4gICAgcmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50LCAnZHJhZ2VlLXBsYWNlaG9sZGVyJylcbiAgICB0aGlzLmRyYWdFbmRBY3Rpb24oKVxuICAgIHRoaXMuZW1pdCgnZHJhZzplbmQnKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgdGhpcy5fbmF0aXZlRHJhZ092ZXIpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIHRoaXMuX25hdGl2ZURyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX25hdGl2ZURyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJvcCcsIHRoaXMuX25hdGl2ZURyb3ApXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX3Njcm9sbClcbiAgICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZVxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2RyYWdnYWJsZScpXG4gICAgcmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50LCAnZHJhZ2VlLWFjdGl2ZScpXG4gIH1cblxuICBuYXRpdmVEcm9wKGV2ZW50KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBlbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3AoZXZlbnQpIHtcbiAgICBjb25zdCBwYXJlbnRSZWN0ID0gdGhpcy5wYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICBjb25zdCBjbG9uZWRFbGVtZW50ID0gdGhpcy5lbGVtZW50LmNsb25lTm9kZSh0cnVlKVxuICAgIGNsb25lZEVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcGVydHldID0gJydcbiAgICBjb3B5U3R5bGVzKHRoaXMuZWxlbWVudCwgY2xvbmVkRWxlbWVudClcbiAgICBjbG9uZWRFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJ1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2xvbmVkRWxlbWVudClcbiAgICBhZGRDbGFzcyh0aGlzLmVsZW1lbnQsICdkcmFnZWUtcGxhY2Vob2xkZXInKVxuXG4gICAgY29uc3QgZW11bGF0aW9uRHJhZ2dhYmxlID0gbmV3IERyYWdnYWJsZShjbG9uZWRFbGVtZW50LCB7XG4gICAgICBwYXJlbnQ6IGRvY3VtZW50LmJvZHksXG4gICAgICBvbjoge1xuICAgICAgICAnZHJhZzptb3ZlJzogKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHBhcmVudFJlY3RQb2ludCA9IG5ldyBQb2ludChwYXJlbnRSZWN0LmxlZnQsIHBhcmVudFJlY3QudG9wKVxuICAgICAgICAgIHRoaXMucG9zaXRpb24gPSBlbXVsYXRpb25EcmFnZ2FibGUucG9zaXRpb24uc3ViKHBhcmVudFJlY3RQb2ludClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN1Yih0aGlzLl9zdGFydFNjcm9sbFBvaW50KVxuICAgICAgICAgIHRoaXMuZW1pdCgnZHJhZzptb3ZlJylcbiAgICAgICAgfSxcbiAgICAgICAgJ2RyYWc6ZW5kJzogKCkgPT4ge1xuICAgICAgICAgIGVtdWxhdGlvbkRyYWdnYWJsZS5kZXN0cm95KClcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGNsb25lZEVsZW1lbnQpXG4gICAgICAgICAgcmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50LCAnZHJhZ2VlLXBsYWNlaG9sZGVyJylcbiAgICAgICAgICByZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnQsICdkcmFnZWUtYWN0aXZlJylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBwYXJlbnRSZWN0UG9pbnQgPSBuZXcgUG9pbnQocGFyZW50UmVjdC5sZWZ0LCBwYXJlbnRSZWN0LnRvcClcbiAgICBlbXVsYXRpb25EcmFnZ2FibGUuX3N0YXJ0U2Nyb2xsUG9pbnQgPSB0aGlzLl9zdGFydFNjcm9sbFBvaW50XG5cbiAgICBlbXVsYXRpb25EcmFnZ2FibGUubW92ZShcbiAgICAgIHRoaXMucGlubmVkUG9zaXRpb24uYWRkKHBhcmVudFJlY3RQb2ludCkuYWRkKG5ldyBQb2ludCh3aW5kb3cuc2Nyb2xsWCwgd2luZG93LnNjcm9sbFkpKVxuICAgIClcblxuICAgIGVtdWxhdGlvbkRyYWdnYWJsZS5kcmFnU3RhcnQoZXZlbnQpXG5cbiAgICAvLyBuZXcgUG9pbnQoXG4gICAgLy8gICB0aGlzLnBpbm5lZFBvc2l0aW9uLnggKyBwYXJlbnRSZWN0LmxlZnQgKyB3aW5kb3cuc2Nyb2xsWCxcbiAgICAvLyAgIHRoaXMucGlubmVkUG9zaXRpb24ueSArIHBhcmVudFJlY3QudG9wICsgd2luZG93LnNjcm9sbFlcbiAgICAvLyApKVxuICB9XG5cbiAgZHJhZ0VuZEFjdGlvbigpIHtcbiAgICB0aGlzLnBpblBvc2l0aW9uKHRoaXMucG9zaXRpb24pXG4gIH1cblxuICBnZXRSZWN0YW5nbGUoKSB7XG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUodGhpcy5wb3NpdGlvbiwgdGhpcy5nZXRTaXplKCkpXG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIHRoaXMuZ2V0U2l6ZSh0cnVlKVxuICAgIGlmICh0aGlzLmJvdW5kaW5nLnJlZnJlc2gpIHtcbiAgICAgIHRoaXMuYm91bmRpbmcucmVmcmVzaCgpXG4gICAgfVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmhhbmRsZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0KVxuICAgIHRoaXMuaGFuZGxlci5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQpXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIHRoaXMuX25hdGl2ZURyYWdTdGFydClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCB0aGlzLl9uYXRpdmVEcmFnT3ZlcilcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcm9wJywgdGhpcy5fbmF0aXZlRHJvcClcbiAgICB0aGlzLnJlc2V0RW1pdHRlcigpXG5cbiAgICBjb25zdCBpbmRleCA9IGRyYWdnYWJsZXMuaW5kZXhPZih0aGlzKVxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICBkcmFnZ2FibGVzLnNwbGljZShpbmRleCwgMSlcbiAgICB9XG4gIH1cblxuICBnZXQgcGFyZW50KCkge1xuICAgIHJldHVybiAodGhpcy5fcGFyZW50ID0gdGhpcy5fcGFyZW50IHx8IHRoaXMub3B0aW9ucy5wYXJlbnQgfHwgZ2V0RGVmYXVsdFBhcmVudCh0aGlzLmVsZW1lbnQpKVxuICB9XG5cbiAgZ2V0IGJvdW5kaW5nKCkge1xuICAgIHJldHVybiAodGhpcy5fYm91bmRpbmcgPSB0aGlzLl9ib3VuZGluZyB8fCB0aGlzLm9wdGlvbnMuYm91bmRpbmcgfHwgbmV3IEJvdW5kVG9FbGVtZW50KHRoaXMucGFyZW50LCB0aGlzLnBhcmVudCkpXG4gIH1cblxuICBnZXQgaGFuZGxlcigpIHtcbiAgICBpZiAoIXRoaXMuX2hhbmRsZXIpIHtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmhhbmRsZXIgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZXIgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLm9wdGlvbnMuaGFuZGxlcikgfHwgdGhpcy5lbGVtZW50XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9oYW5kbGVyID0gdGhpcy5vcHRpb25zLmhhbmRsZXIgfHwgdGhpcy5lbGVtZW50XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2hhbmRsZXJcbiAgfVxuXG4gIGdldCBuYXRpdmVEcmFnQW5kRHJvcCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLm5hdGl2ZURyYWdBbmREcm9wIHx8IGZhbHNlXG4gIH1cblxuICBnZXQgZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wT25Ub3VjaCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcE9uVG91Y2ggfHwgdHJ1ZVxuICB9XG5cbiAgZ2V0IGVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcEZvckFsbCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcEZvckFsbCB8fCBmYWxzZVxuICB9XG5cbiAgZ2V0IHNjcm9sbFBvaW50KCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQod2luZG93LnNjcm9sbFgsIHdpbmRvdy5zY3JvbGxZKVxuICB9XG5cbiAgZ2V0IGVuYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlXG4gIH1cblxuICBzZXQgZW5hYmxlKGVuYWJsZSkge1xuICAgIGlmIChlbmFibGUpIHtcbiAgICAgIHJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudCwgJ2RyYWdlZS1kaXNhYmxlJylcbiAgICB9IGVsc2Uge1xuICAgICAgYWRkQ2xhc3ModGhpcy5lbGVtZW50LCAnZHJhZ2VlLWRpc2FibGUnKVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9lbmFibGUgPSBlbmFibGVcbiAgfVxufVxuXG5EcmFnZ2FibGUuZW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXIoRHJhZ2dhYmxlKVxuRHJhZ2dhYmxlLmVtaXR0ZXIub24oJ2RyYWdnYWJsZTpjcmVhdGUnLCBhZGRUb0RlZmF1bHRTY29wZSlcbiIsImltcG9ydCByZW1vdmVJdGVtIGZyb20gJy4vdXRpbHMvcmVtb3ZlLWFycmF5LWl0ZW0nXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnRFbWl0dGVyJ1xuaW1wb3J0IHtcbiAgZ2V0RGlzdGFuY2UsXG4gIGluZGV4T2ZOZWFyZXN0UG9pbnRcbn0gZnJvbSAnLi9nZW9tZXRyeS9kaXN0YW5jZXMnXG5cbmltcG9ydCBEcmFnZ2FibGUgZnJvbSAnLi9kcmFnZ2FibGUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3QgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvcihkcmFnZ2FibGVzLCBvcHRpb25zPXt9KSB7XG4gICAgc3VwZXIodW5kZWZpbmVkLCBvcHRpb25zKVxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgdGltZUVuZDogMjAwLFxuICAgICAgdGltZUV4Y2FuZ2U6IDQwMCxcbiAgICAgIHJhZGl1czogMzBcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gZHJhZ2dhYmxlc1xuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuX2VuYWJsZSA9IHRydWVcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCh0aGlzLmluaXREcmFnZ2FibGUsIHRoaXMpXG4gIH1cblxuICBpbml0RHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIGRyYWdnYWJsZS5lbmFibGUgPSB0aGlzLl9lbmFibGVcbiAgICBkcmFnZ2FibGUub24oJ2RyYWc6bW92ZScsICgpID0+IHRoaXMub25Nb3ZlKGRyYWdnYWJsZSkpXG4gICAgZHJhZ2dhYmxlLmRyYWdFbmRBY3Rpb24gPSAoKSA9PiBkcmFnZ2FibGUucGluUG9zaXRpb24oZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uLCB0aGlzLm9wdGlvbnMudGltZUVuZClcbiAgfVxuXG4gIG9uTW92ZShkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBzb3J0ZWREcmFnZ2FibGVzID0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcbiAgICBjb25zdCBwaW5uZWRQb3NpdGlvbnMgPSBzb3J0ZWREcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24pXG5cbiAgICBjb25zdCBjdXJyZW50SW5kZXggPSBzb3J0ZWREcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKVxuICAgIGNvbnN0IHRhcmdldEluZGV4ID0gaW5kZXhPZk5lYXJlc3RQb2ludChwaW5uZWRQb3NpdGlvbnMsIGRyYWdnYWJsZS5wb3NpdGlvbiwgdGhpcy5vcHRpb25zLnJhZGl1cywgdGhpcy5kaXN0YW5jZUZ1bmMpXG5cbiAgICBpZiAodGFyZ2V0SW5kZXggIT09IC0xICYmIGN1cnJlbnRJbmRleCAhPT0gdGFyZ2V0SW5kZXgpIHtcbiAgICAgIGlmICh0YXJnZXRJbmRleCA8IGN1cnJlbnRJbmRleCkge1xuICAgICAgICBmb3IgKGxldCBpPXRhcmdldEluZGV4OyBpPGN1cnJlbnRJbmRleDsgaSsrKSB7XG4gICAgICAgICAgc29ydGVkRHJhZ2dhYmxlc1tpXS5waW5Qb3NpdGlvbihwaW5uZWRQb3NpdGlvbnNbaSsxXSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGxldCBpPWN1cnJlbnRJbmRleDsgaTx0YXJnZXRJbmRleDsgaSsrKSB7XG4gICAgICAgICAgc29ydGVkRHJhZ2dhYmxlc1tpKzFdLnBpblBvc2l0aW9uKHBpbm5lZFBvc2l0aW9uc1tpXSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChkcmFnZ2FibGUubmF0aXZlRHJhZ0FuZERyb3ApIHtcbiAgICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKHBpbm5lZFBvc2l0aW9uc1t0YXJnZXRJbmRleF0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24gPSBwaW5uZWRQb3NpdGlvbnNbdGFyZ2V0SW5kZXhdXG4gICAgICB9XG5cbiAgICAgIHRoaXMuZW1pdCgnbGlzdDpjaGFuZ2UnKVxuICAgIH1cbiAgfVxuXG4gIGdldEN1cnJlbnRQaW5uZWRQb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uLmNsb25lKCkpXG4gIH1cblxuICBnZXRTb3J0ZWREcmFnZ2FibGVzKCkge1xuICAgIHJldHVybiB0aGlzLmRyYWdnYWJsZXMuc29ydCh0aGlzLnNvcnRpbmcuYmluZCh0aGlzKSlcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5yZXNldFBvc2l0aW9uVG9Jbml0aWFsKCkpXG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5yZWZyZXNoKCkpXG4gIH1cblxuICBhZGQoZHJhZ2dhYmxlcykge1xuICAgIGlmICghKGRyYWdnYWJsZXMgaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICAgIGRyYWdnYWJsZXMgPSBbZHJhZ2dhYmxlc11cbiAgICB9XG4gICAgZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHRoaXMuaW5pdERyYWdnYWJsZShkcmFnZ2FibGUpKVxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IHRoaXMuZHJhZ2dhYmxlcy5jb25jYXQoZHJhZ2dhYmxlcylcbiAgfVxuXG4gIHJlbW92ZShkcmFnZ2FibGVzKSB7XG4gICAgY29uc3QgaW5pdGlhbFBvc2l0aW9ucyA9IHRoaXMuZHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLmluaXRpYWxQb3NpdGlvbilcbiAgICBjb25zdCBsaXN0ID0gW11cbiAgICBjb25zdCBzb3J0ZWREcmFnZ2FibGVzID0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcblxuICAgIGlmICghKGRyYWdnYWJsZXMgaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICAgIGRyYWdnYWJsZXMgPSBbZHJhZ2dhYmxlc11cbiAgICB9XG5cbiAgICBkcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLnJlc2V0T24oJ2RyYWc6ZW5kJylcbiAgICAgIGRyYWdnYWJsZS5yZXNldE9uKCdkcmFnOm1vdmUnKVxuICAgICAgcmVtb3ZlSXRlbSh0aGlzLmRyYWdnYWJsZXMsIGRyYWdnYWJsZSlcbiAgICB9KVxuXG4gICAgbGV0IGogPSAwXG4gICAgc29ydGVkRHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGlmICh0aGlzLmRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMSkge1xuICAgICAgICBpZiAoZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uICE9PSBpbml0aWFsUG9zaXRpb25zW2pdKSB7XG4gICAgICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKGluaXRpYWxQb3NpdGlvbnNbal0sIHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSlcbiAgICAgICAgfVxuICAgICAgICBkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uID0gaW5pdGlhbFBvc2l0aW9uc1tqXVxuICAgICAgICBqKytcbiAgICAgICAgbGlzdC5wdXNoKGRyYWdnYWJsZSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGxpc3RcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMucmVtb3ZlKHRoaXMuZHJhZ2dhYmxlcy5zbGljZSgpKVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUuZGVzdHJveSgpKVxuICB9XG5cbiAgc29ydGluZyhkcmFnZ2FibGVBLCBkcmFnZ2FibGVCKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5zb3J0aW5nKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLnNvcnRpbmcoZHJhZ2dhYmxlQSwgZHJhZ2dhYmxlQilcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGRyYWdnYWJsZUEucGlubmVkUG9zaXRpb24ueSA8IGRyYWdnYWJsZUIucGlubmVkUG9zaXRpb24ueSkgcmV0dXJuIC0xXG4gICAgICBpZiAoZHJhZ2dhYmxlQS5waW5uZWRQb3NpdGlvbi55ID4gZHJhZ2dhYmxlQi5waW5uZWRQb3NpdGlvbi55KSByZXR1cm4gMVxuICAgICAgaWYgKGRyYWdnYWJsZUEucGlubmVkUG9zaXRpb24ueCA8IGRyYWdnYWJsZUIucGlubmVkUG9zaXRpb24ueCkgcmV0dXJuIC0xXG4gICAgICBpZiAoZHJhZ2dhYmxlQS5waW5uZWRQb3NpdGlvbi54ID4gZHJhZ2dhYmxlQi5waW5uZWRQb3NpdGlvbi54KSByZXR1cm4gMVxuICAgICAgcmV0dXJuIDBcbiAgICB9XG4gIH1cblxuICBnZXQgZGlzdGFuY2VGdW5jKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZ2V0RGlzdGFuY2UgfHwgZ2V0RGlzdGFuY2VcbiAgfVxuXG4gIGdldCBwb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q3VycmVudFBpbm5lZFBvc2l0aW9ucygpXG4gIH1cblxuICBzZXQgcG9zaXRpb25zKHBvc2l0aW9ucykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSAnd3JvbmcgYXJyYXkgbGVuZ3RoJ1xuICAgIGlmIChwb3NpdGlvbnMubGVuZ3RoID09PSB0aGlzLmRyYWdnYWJsZXMubGVuZ3RoKSB7XG4gICAgICBwb3NpdGlvbnMuZm9yRWFjaCgocG9pbnQsIGkpID0+IHtcbiAgICAgICAgdGhpcy5kcmFnZ2FibGVzW2ldLnBpblBvc2l0aW9uKHBvaW50KVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbWVzc2FnZVxuICAgIH1cbiAgfVxuXG4gIGdldCBlbmFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZVxuICB9XG5cbiAgc2V0IGVuYWJsZShlbmFibGUpIHtcbiAgICB0aGlzLl9lbmFibGUgPSBlbmFibGVcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUuZW5hYmxlID0gZW5hYmxlXG4gICAgfSlcbiAgfVxuXG4gIHN0YXRpYyBmYWN0b3J5KHBhcmVudEVsZW1lbnQsIGVsZW1lbnRzLCBvcHRpb25zPXt9KSB7XG4gICAgY29uc3QgZHJhZ2dhYmxlcyA9IEFycmF5LmZyb20oZWxlbWVudHMpLm1hcCgoZWxlbWVudCkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBEcmFnZ2FibGUoZWxlbWVudCwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIHBhcmVudDogcGFyZW50RWxlbWVudFxuICAgICAgfSwgb3B0aW9ucy5kcmFnZ2FibGUgfHwge30pKVxuICAgIH0pXG4gICAgcmV0dXJuIG5ldyBMaXN0KGRyYWdnYWJsZXMsIG9wdGlvbnMubGlzdCB8fCB7fSlcbiAgfVxufVxuIiwiZnVuY3Rpb24gc2V0U3R5bGUoZWxlbWVudCwgc3R5bGUpIHtcbiAgc3R5bGUgPSBzdHlsZSB8fCB7fVxuICBsZXQgY3NzVGV4dCA9ICcnXG4gIGZvciAoY29uc3Qga2V5IGluIHN0eWxlKSB7XG4gICAgaWYgKHN0eWxlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGNzc1RleHQgKz0ga2V5ICsgJzogJyArIHN0eWxlW2tleV0gKyAnOyAnXG4gICAgfVxuICB9XG5cbiAgZWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gY3NzVGV4dFxufVxuXG5mdW5jdGlvbiBhcHBlbmRGaXJzdENoaWxkKGVsZW1lbnQsIG5vZGUpIHtcbiAgaWYgKGVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgIGVsZW1lbnQuaW5zZXJ0QmVmb3JlKG5vZGUsIGVsZW1lbnQuZmlyc3RDaGlsZClcbiAgfSBlbHNlIHtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKG5vZGUpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQ2FudmFzKGFyZWEsIHJlY3RhZ2xlKSB7XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXG4gIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShhcmVhKS5wb3NpdGlvbiA9PT0gJ3N0YXRpYycpIHtcbiAgICBhcmVhLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJ1xuICB9XG5cbiAgY2FudmFzLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCByZWN0YWdsZS5zaXplLnggKyAncHgnKVxuICBjYW52YXMuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCByZWN0YWdsZS5zaXplLnkgKyAncHgnKVxuICBzZXRTdHlsZShjYW52YXMsIHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBsZWZ0OiByZWN0YWdsZS5wb3NpdGlvbi55ICsgJ3B4JyxcbiAgICB0b3A6IHJlY3RhZ2xlLnBvc2l0aW9uLnkgKyAncHgnLFxuICAgIHdpZHRoOiByZWN0YWdsZS5zaXplLnggKyAncHgnLFxuICAgIGhlaWdodDogcmVjdGFnbGUuc2l6ZS55ICsgJ3B4J1xuICB9KVxuICBhcHBlbmRGaXJzdENoaWxkKGFyZWEsIGNhbnZhcylcbiAgcmV0dXJuIGNhbnZhc1xufVxuIiwiaW1wb3J0IGNyZWF0ZUNhbnZhcyBmcm9tICcuL3V0aWxzL2NyZWF0ZS1jYW52YXMnXG5pbXBvcnQgUG9pbnQgZnJvbSAnLi9nZW9tZXRyeS9wb2ludCdcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSAnLi9nZW9tZXRyeS9yZWN0YW5nbGUnXG5cbmltcG9ydCB7IGdldFBvaW50RnJvbVJhZGlhbFN5c3RlbSB9IGZyb20gJy4vZ2VvbWV0cnkvYW5nbGVzJ1xuaW1wb3J0IHsgQm91bmRUb0xpbmUgfSBmcm9tICcuL2JvdW5kaW5nJ1xuaW1wb3J0IERyYWdnYWJsZSBmcm9tICcuL2RyYWdnYWJsZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3BpZGVyIHtcbiAgY29uc3RydWN0b3IoYXJlYSwgZWxlbWVudHMsIG9wdGlvbnM9e30pIHtcbiAgICBjb25zdCBhcmVhUmVjdGFuZ2xlID0gUmVjdGFuZ2xlLmZyb21FbGVtZW50KGFyZWEsIGFyZWEpXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBhbmdsZTogMCxcbiAgICAgIGRBbmdsZTogMiAqIE1hdGguUEkgLyBlbGVtZW50cy5sZW5ndGgsXG4gICAgICBjZW50ZXI6IGFyZWFSZWN0YW5nbGUuZ2V0Q2VudGVyKCksXG4gICAgICBzdGFydFJhZGl1czogNTAsXG4gICAgICBlbmRSYWRpdXM6IGFyZWFSZWN0YW5nbGUuZ2V0TWluU2lkZSgpIC8gMixcbiAgICAgIGxpbmVXaWR0aDogMixcbiAgICAgIHN0cm9rZVN0eWxlOiAnI2ZmNTU3NycsXG4gICAgICBmaWxsU3R5bGU6ICdyZ2JhKDE1MCwyNTUsNTAsMC44KSdcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGhpcy5hcmVhID0gYXJlYVxuICAgIHRoaXMuYXJlYVJlY3RhbmdsZSA9IGFyZWFSZWN0YW5nbGVcbiAgICB0aGlzLmluaXQoZWxlbWVudHMpXG4gIH1cblxuICBpbml0KGVsZW1lbnRzKSB7XG4gICAgdGhpcy5jYW52YXMgPSBjcmVhdGVDYW52YXModGhpcy5hcmVhLCB0aGlzLmFyZWFSZWN0YW5nbGUpXG4gICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gZWxlbWVudHMubWFwKChlbGVtZW50LCBpKSA9PiB7XG4gICAgICBjb25zdCBhbmdsZSA9IHRoaXMub3B0aW9ucy5hbmdsZSArIGkgKiB0aGlzLm9wdGlvbnMuZEFuZ2xlXG4gICAgICBjb25zdCBoYWxmU2l6ZSA9IFBvaW50LmVsZW1lbnRTaXplKGVsZW1lbnQpLm11bHQoMC41KVxuICAgICAgY29uc3Qgc3RhcnQgPSBnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oYW5nbGUsIHRoaXMub3B0aW9ucy5zdGFydFJhZGl1cywgdGhpcy5vcHRpb25zLmNlbnRlcikuc3ViKGhhbGZTaXplKVxuICAgICAgY29uc3QgZW5kID0gZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKGFuZ2xlLCB0aGlzLm9wdGlvbnMuZW5kUmFkaXVzLCB0aGlzLm9wdGlvbnMuY2VudGVyKS5zdWIoaGFsZlNpemUpXG5cbiAgICAgIHJldHVybiBuZXcgRHJhZ2dhYmxlKGVsZW1lbnQsIHtcbiAgICAgICAgcGFyZW50OiB0aGlzLmFyZWEsXG4gICAgICAgIGJvdW5kaW5nOiBuZXcgQm91bmRUb0xpbmUoc3RhcnQsIGVuZCksXG4gICAgICAgIHBvc2l0aW9uOiBzdGFydCxcbiAgICAgICAgb246IHtcbiAgICAgICAgICAnZHJhZzptb3ZlJzogKCkgPT4gdGhpcy5kcmF3KClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgdGhpcy5pc0luaXQgPSB0cnVlXG4gICAgdGhpcy5kcmF3KClcbiAgfVxuXG4gIGRyYXcoKSB7XG4gICAgaWYgKCF0aGlzLmlzSW5pdCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy5hcmVhUmVjdGFuZ2xlLnNpemUueCwgdGhpcy5hcmVhUmVjdGFuZ2xlLnNpemUueSlcbiAgICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKClcblxuICAgIGxldCBwb2ludCA9IHRoaXMuZHJhZ2dhYmxlc1swXS5nZXRDZW50ZXIoKVxuICAgIHRoaXMuY29udGV4dC5tb3ZlVG8ocG9pbnQueCwgcG9pbnQueSlcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kcmFnZ2FibGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBwb2ludCA9IHRoaXMuZHJhZ2dhYmxlc1tpXS5nZXRDZW50ZXIoKVxuICAgICAgdGhpcy5jb250ZXh0LmxpbmVUbyhwb2ludC54LCBwb2ludC55KVxuICAgIH1cbiAgICB0aGlzLmNvbnRleHQuY2xvc2VQYXRoKClcbiAgICB0aGlzLmNvbnRleHQubGluZVdpZHRoID0gdGhpcy5vcHRpb25zLmxpbmVXaWR0aFxuICAgIHRoaXMuY29udGV4dC5zdHJva2VTdHlsZSA9IHRoaXMub3B0aW9ucy5zdHJva2VTdHlsZVxuICAgIHRoaXMuY29udGV4dC5zdHJva2UoKVxuICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSB0aGlzLm9wdGlvbnMuZmlsbFN0eWxlXG4gICAgdGhpcy5jb250ZXh0LmZpbGwoKVxuICB9XG59XG4iLCJpbXBvcnQgRHJhZ2dhYmxlIGZyb20gJy4vZHJhZ2dhYmxlJ1xuaW1wb3J0IHsgQm91bmRUb0FyYyB9IGZyb20gJy4vYm91bmRpbmcnXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnRFbWl0dGVyJ1xuXG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gJy4vZ2VvbWV0cnkvcmVjdGFuZ2xlJ1xuaW1wb3J0IHtcbiAgZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtLFxuICBnZXRBbmdsZSxcbiAgbm9ybWFsaXplQW5nbGVcbn0gZnJvbSAnLi9nZW9tZXRyeS9hbmdsZXMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFyY1NsaWRlciBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKGFyZWEsIGVsZW1lbnQsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcih1bmRlZmluZWQsIG9wdGlvbnMpXG4gICAgY29uc3QgYXJlYVJlY3RhbmdsZSA9IFJlY3RhbmdsZS5mcm9tRWxlbWVudChhcmVhLCBhcmVhKVxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY2VudGVyOiBhcmVhUmVjdGFuZ2xlLmdldENlbnRlcigpLFxuICAgICAgcmFkaXVzOiBhcmVhUmVjdGFuZ2xlLmdldE1pblNpZGUoKSAvIDIsXG4gICAgICBzdGFydEFuZ2xlOiBNYXRoLlBJLFxuICAgICAgZW5kQW5nbGU6IDAsXG4gICAgICBhbmdsZXM6IFtNYXRoLlBJLCAtTWF0aC5QSSAvIDQsIDAsIE1hdGguUEkgLyA0LCBNYXRoLlBJIC8gMl0sXG4gICAgICB0aW1lOiA1MDBcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGhpcy5zaGlmdGVkQ2VudGVyID0gdGhpcy5vcHRpb25zLmNlbnRlclxuICAgIHRoaXMuYXJlYSA9IGFyZWFcbiAgICB0aGlzLmluaXQoZWxlbWVudClcbiAgfVxuXG4gIGluaXQoZWxlbWVudCkge1xuICAgIGNvbnN0IGFuZ2xlID0gdGhpcy5vcHRpb25zLnN0YXJ0QW5nbGVcbiAgICBjb25zdCBwb3NpdGlvbiA9IGdldFBvaW50RnJvbVJhZGlhbFN5c3RlbShcbiAgICAgIGFuZ2xlLFxuICAgICAgdGhpcy5vcHRpb25zLnJhZGl1cyxcbiAgICAgIHRoaXMuc2hpZnRlZENlbnRlclxuICAgIClcblxuICAgIHRoaXMuYW5nbGUgPSBhbmdsZVxuICAgIHRoaXMuZHJhZ2dhYmxlID0gbmV3IERyYWdnYWJsZShlbGVtZW50LCB7XG4gICAgICBwYXJlbnQ6IHRoaXMuYXJlYSxcbiAgICAgIGJvdW5kaW5nOiBuZXcgQm91bmRUb0FyYyhcbiAgICAgICAgdGhpcy5zaGlmdGVkQ2VudGVyLFxuICAgICAgICB0aGlzLm9wdGlvbnMucmFkaXVzLFxuICAgICAgICB0aGlzLm9wdGlvbnMuc3RhcnRBbmdsZSxcbiAgICAgICAgdGhpcy5vcHRpb25zLmVuZEFuZ2xlXG4gICAgICApLFxuICAgICAgcG9zaXRpb246IHBvc2l0aW9uLFxuICAgICAgb246IHtcbiAgICAgICAgJ2RyYWc6bW92ZSc6ICgpID0+IHRoaXMuY2hhbmdlKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgdXBkYXRlQW5nbGUoKSB7XG4gICAgdGhpcy5hbmdsZSA9IGdldEFuZ2xlKHRoaXMuc2hpZnRlZENlbnRlciwgdGhpcy5kcmFnZ2FibGUucG9zaXRpb24pXG4gIH1cblxuICBjaGFuZ2UoKSB7XG4gICAgdGhpcy51cGRhdGVBbmdsZSgpXG4gICAgLy8gICAgICB2YXIgYW5nbGUgPSBHZW9tZXRyeS5nZXROZWFyZXN0QW5nbGUodGhpcy5vcHRpb25zLmFuZ2xlcywgdGhpcy5hbmdsZSk7XG4gICAgLy8gICAgICB0aGlzLnNldEFuZ2xlKGFuZ2xlLHRoaXMub3B0aW9ucy50aW1lKTtcbiAgICB0aGlzLmVtaXQoJ2FyY3NsaWRlcjpjaGFuZ2UnLCB7IGFuZ2xlOiB0aGlzLmFuZ2xlIH0pXG4gIH1cblxuICBzZXRBbmdsZShhbmdsZSwgdGltZSkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKFxuICAgICAgdGhpcy5hbmdsZSxcbiAgICAgIHRoaXMub3B0aW9ucy5yYWRpdXMsXG4gICAgICB0aGlzLnNoaWZ0ZWRDZW50ZXJcbiAgICApXG4gICAgdGhpcy5hbmdsZSA9IG5vcm1hbGl6ZUFuZ2xlKGFuZ2xlLCBwb3NpdGlvbilcbiAgICB0aGlzLmRyYWdnYWJsZS5waW5Qb3NpdGlvbihwb3NpdGlvbiwgdGltZXx8MClcbiAgICB0aGlzLmVtaXQoJ2FyY3NsaWRlcjpjaGFuZ2UnLCB0aGlzLmFuZ2xlKVxuICB9XG59XG4iLCJpbXBvcnQgY3JlYXRlQ2FudmFzIGZyb20gJy4vdXRpbHMvY3JlYXRlLWNhbnZhcydcbmltcG9ydCByYW5nZSBmcm9tICcuL3V0aWxzL3JhbmdlJ1xuaW1wb3J0IFBvaW50IGZyb20gJy4vZ2VvbWV0cnkvcG9pbnQnXG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gJy4vZ2VvbWV0cnkvcmVjdGFuZ2xlJ1xuXG5pbXBvcnQgeyBnZXREaXN0YW5jZSB9IGZyb20gJy4vZ2VvbWV0cnkvZGlzdGFuY2VzJ1xuXG5pbXBvcnQge1xuICB0b1JhZGlhbixcbiAgZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtLFxuICBnZXRBbmdsZSxcbiAgbm9ybWFsaXplQW5nbGVcbn0gZnJvbSAnLi9nZW9tZXRyeS9hbmdsZXMnXG5cbmltcG9ydCBEcmFnZ2FibGUgZnJvbSAnLi9kcmFnZ2FibGUnXG5pbXBvcnQgeyBCb3VuZFRvQXJjIH0gZnJvbSAnLi9ib3VuZGluZydcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudEVtaXR0ZXInXG5cbmNvbnN0IHJuZCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKjI1NSlcbn1cblxuY29uc3QgdG9IZXhTdHJpbmcgPSBmdW5jdGlvbihkaWdpdCkge1xuICBsZXQgc3RyID0gZGlnaXQudG9TdHJpbmcoMTYpXG4gIHdoaWxlIChzdHIubGVuZ3RoIDwgMikge1xuICAgIHN0ciA9ICcwJyArIHN0clxuICB9XG4gIHJldHVybiBzdHJcbn1cblxuZnVuY3Rpb24gcmFuZG9tQ29sb3IoKSB7XG4gIHJldHVybiBgIyR7dG9IZXhTdHJpbmcocm5kKCkpfSR7dG9IZXhTdHJpbmcocm5kKCkpfSR7dG9IZXhTdHJpbmcocm5kKCkpfWBcbn1cblxuZnVuY3Rpb24gZ2V0QXJyYXlXaXRoQm91bmRJbmRleGVzKGluZGV4LCBsZW5ndGgpIHtcbiAgY29uc3QgcmV0SW5kZXhlcyA9IFtdXG4gIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICByZXRJbmRleGVzLnB1c2goaW5kZXgpXG4gICAgcmV0SW5kZXhlcy5wdXNoKChpbmRleCArIDEpICUgbGVuZ3RoKVxuICB9XG5cbiAgcmV0dXJuIHJldEluZGV4ZXNcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhcnQgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAoYXJlYSwgZWxlbWVudHMsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcih1bmRlZmluZWQsIG9wdGlvbnMpXG4gICAgY29uc3QgYXJlYVJlY3RhbmdsZSA9IFJlY3RhbmdsZS5mcm9tRWxlbWVudChhcmVhLCBhcmVhKVxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY2VudGVyOiBhcmVhUmVjdGFuZ2xlLmdldENlbnRlcigpLFxuICAgICAgcmFkaXVzOiBhcmVhUmVjdGFuZ2xlLmdldE1pblNpZGUoKSAvIDIsXG4gICAgICB0b3VjaFJhZGl1czogYXJlYVJlY3RhbmdsZS5nZXRNaW5TaWRlKCkgLyAyLFxuICAgICAgYm91bmRBbmdsZTogTWF0aC5QSSAvIDksXG4gICAgICBmaWxsU3R5bGVzOiByYW5nZSgwLCBlbGVtZW50cy5sZW5ndGgpLm1hcCgoKSA9PiByYW5kb21Db2xvcigpKSxcbiAgICAgIGluaXRBbmdsZXM6IHJhbmdlKC05MCwgMjcwLCAzNjAgLyBlbGVtZW50cy5sZW5ndGgpLm1hcCgoYW5nbGUpID0+IHRvUmFkaWFuKGFuZ2xlKSksXG4gICAgICBsaW1pdEltZzogbnVsbCxcbiAgICAgIGxpbWl0SW1nT2Zmc2V0OiBuZXcgUG9pbnQoMCwgMClcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGhpcy5hcmVhID0gYXJlYVxuICAgIHRoaXMuYXJlYVJlY3RhbmdsZSA9IGFyZWFSZWN0YW5nbGVcbiAgICB0aGlzLmluaXQoZWxlbWVudHMpXG4gIH1cblxuICBpbml0KGVsZW1lbnRzKSB7XG4gICAgdGhpcy5jYW52YXMgPSBjcmVhdGVDYW52YXModGhpcy5hcmVhLCB0aGlzLmFyZWFSZWN0YW5nbGUpXG4gICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGVsZW1lbnRzLm1hcCgoZWxlbWVudCwgaSkgPT4ge1xuICAgICAgY29uc3QgYW5nbGUgPSB0aGlzLm9wdGlvbnMuaW5pdEFuZ2xlc1tpXVxuICAgICAgY29uc3QgaGFsZlNpemUgPSBQb2ludC5lbGVtZW50U2l6ZShlbGVtZW50KS5tdWx0KDAuNSlcbiAgICAgIGNvbnN0IHBvc2l0aW9uID0gZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKFxuICAgICAgICBhbmdsZSxcbiAgICAgICAgdGhpcy5vcHRpb25zLnRvdWNoUmFkaXVzLFxuICAgICAgICB0aGlzLm9wdGlvbnMuY2VudGVyLnN1YihoYWxmU2l6ZSlcbiAgICAgIClcblxuICAgICAgcmV0dXJuIG5ldyBEcmFnZ2FibGUoZWxlbWVudCwge1xuICAgICAgICBwYXJlbnQ6IHRoaXMuYXJlYSxcbiAgICAgICAgYm91bmRpbmc6IG5ldyBCb3VuZFRvQXJjKFxuICAgICAgICAgIHRoaXMub3B0aW9ucy5jZW50ZXIuc3ViKGhhbGZTaXplKSxcbiAgICAgICAgICB0aGlzLm9wdGlvbnMudG91Y2hSYWRpdXMsXG4gICAgICAgICAgdGhpcy5nZXRCb3VuZEFuZ2xlKGksIGZhbHNlKSxcbiAgICAgICAgICB0aGlzLmdldEJvdW5kQW5nbGUoaSwgdHJ1ZSlcbiAgICAgICAgKSxcbiAgICAgICAgcG9zaXRpb246IHBvc2l0aW9uLFxuICAgICAgICBvbjoge1xuICAgICAgICAgICdkcmFnOm1vdmUnOiAoKSA9PiB0aGlzLmRyYXcoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG5cbiAgICB0aGlzLmlzSW5pdCA9IHRydWVcbiAgICB0aGlzLmRyYXcoKVxuICB9XG5cbiAgdXBkYXRlQW5nbGVzKCkge1xuICAgIHRoaXMuYW5nbGVzID0gdGhpcy5kcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBjb25zdCBoYWxmU2l6ZSA9IGRyYWdnYWJsZS5nZXRTaXplKCkubXVsdCgwLjUpXG4gICAgICByZXR1cm4gZ2V0QW5nbGUodGhpcy5vcHRpb25zLmNlbnRlci5zdWIoaGFsZlNpemUpLCBkcmFnZ2FibGUucG9zaXRpb24pXG4gICAgfSlcbiAgfVxuXG4gIGdldEJvdW5kQW5nbGUoaW5kZXgsIGlzQ2xvc3NpbmcpIHtcbiAgICBjb25zdCBzaWduID0gaXNDbG9zc2luZyA/IDEgOiAtMVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGxldCBpID0gKGluZGV4ICsgc2lnbikgJSB0aGlzLmFuZ2xlcy5sZW5ndGhcbiAgICAgIGlmIChpIDwgMCkge1xuICAgICAgICBpICs9IHRoaXMuYW5nbGVzLmxlbmd0aFxuICAgICAgfVxuICAgICAgcmV0dXJuIG5vcm1hbGl6ZUFuZ2xlKHRoaXMuYW5nbGVzW2ldIC0gc2lnbiAqIHRoaXMub3B0aW9ucy5ib3VuZEFuZ2xlKVxuICAgIH1cbiAgfVxuXG4gIGRyYXcoKSB7XG4gICAgaWYgKCF0aGlzLmlzSW5pdCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVBbmdsZXMoKVxuICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy5hcmVhUmVjdGFuZ2xlLnNpemUueCwgdGhpcy5hcmVhUmVjdGFuZ2xlLnNpemUueSlcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoX2RyYWdnYWJsZSwgaW5kZXgpID0+IHtcbiAgICAgIHRoaXMuZHJhd0FyYyh0aGlzLmNvbnRleHQsIHRoaXMub3B0aW9ucy5jZW50ZXIsIHRoaXMub3B0aW9ucy5yYWRpdXMsIGluZGV4KVxuICAgIH0pXG5cbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoX2RyYWdnYWJsZSwgaW5kZXgpID0+IHtcbiAgICAgIHRoaXMuZHJhd0xpbWl0SW1nKGluZGV4KVxuICAgIH0pXG5cbiAgICB0aGlzLmVtaXQoJ2NoYXJ0OmRyYXcnKVxuICB9XG5cbiAgY3JlYXRlQ2xvbmUoZWxlbWVudCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgaWYgKCF0aGlzLmlzSW5pdCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IHJlY3RhbmdsZSA9IFJlY3RhbmdsZS5mcm9tRWxlbWVudChlbGVtZW50LCBlbGVtZW50KVxuICAgIGNvbnN0IG9wdHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNlbnRlcjogcmVjdGFuZ2xlLmdldENlbnRlcigpLFxuICAgICAgcmFkaXVzOiByZWN0YW5nbGUuZ2V0TWluU2lkZSgpIC8gMixcbiAgICAgIGZpbGxTdHlsZXM6IHRoaXMub3B0aW9ucy5maWxsU3R5bGVzXG4gICAgfSwgb3B0aW9ucylcblxuICAgIGNvbnN0IGNhbnZhcyA9IGNyZWF0ZUNhbnZhcyhlbGVtZW50LCByZWN0YW5nbGUpXG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG4gICAgY29uc3QgY2xvbmVPYmogPSB7XG4gICAgICBkcmF3OiAoKSA9PiB7XG4gICAgICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHJlY3RhbmdsZS5zaXplLngsIHJlY3RhbmdsZS5zaXplLnkpXG4gICAgICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChfZHJhZ2dhYmxlLCBpbmRleCkgPT4ge1xuICAgICAgICAgIHRoaXMuZHJhd0FyYyhjb250ZXh0LCBvcHRzLmNlbnRlciwgb3B0cy5yYWRpdXMsIGluZGV4KVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgICBjbG9uZU9iai5kcmF3KClcbiAgICByZXR1cm4gY2xvbmVPYmpcbiAgfVxuXG4gIGdldEZpbGxTdHlsZShpbmRleCkge1xuICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmZpbGxTdHlsZXNbaW5kZXhdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLm9wdGlvbnMuZmlsbFN0eWxlc1tpbmRleF0gPSB0aGlzLm9wdGlvbnMuZmlsbFN0eWxlc1tpbmRleF0uY2FsbCh0aGlzKVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmZpbGxTdHlsZXNbaW5kZXhdXG4gIH1cblxuICBkcmF3QXJjKGNvbnRleHQsIGNlbnRlciwgcmFkaXVzLCBpbmRleCkge1xuICAgIGNvbnN0IHN0YXJ0QW5nbGUgPSB0aGlzLmFuZ2xlc1tpbmRleF1cbiAgICBjb25zdCBlbmRBbmdsZSA9IHRoaXMuYW5nbGVzWyhpbmRleCsxKSAlIHRoaXMuYW5nbGVzLmxlbmd0aF1cbiAgICBjb25zdCBjb2xvciA9IHRoaXMuZ2V0RmlsbFN0eWxlKGluZGV4KVxuXG4gICAgY29udGV4dC5iZWdpblBhdGgoKVxuICAgIGNvbnRleHQubW92ZVRvKGNlbnRlci54LCBjZW50ZXIueSlcbiAgICBjb250ZXh0LmFyYyhjZW50ZXIueCwgY2VudGVyLnksIHJhZGl1cywgc3RhcnRBbmdsZSwgZW5kQW5nbGUsIGZhbHNlKVxuICAgIGNvbnRleHQubGluZVRvKGNlbnRlci54LCBjZW50ZXIueSlcbiAgICBjb250ZXh0LmNsb3NlUGF0aCgpXG4gICAgY29udGV4dC5maWxsU3R5bGUgPSBjb2xvclxuICAgIGNvbnRleHQuZmlsbCgpXG4gIH1cblxuICBkcmF3TGltaXRJbWcoaW5kZXgpIHtcbiAgICBsZXQgcG9pbnQsIGltZ1xuICAgIGlmICh0aGlzLm9wdGlvbnMubGltaXRJbWcpIHtcbiAgICAgIGltZyA9IHRoaXMub3B0aW9ucy5saW1pdEltZyBpbnN0YW5jZW9mIEFycmF5ID8gdGhpcy5vcHRpb25zLmxpbWl0SW1nW2luZGV4XSA6IHRoaXMub3B0aW9ucy5saW1pdEltZ1xuICAgIH1cblxuICAgIGlmIChpbWcpIHtcbiAgICAgIGNvbnN0IGFuZ2xlID0gbm9ybWFsaXplQW5nbGUodGhpcy5hbmdsZXNbaW5kZXhdKVxuICAgICAgcG9pbnQgPSBuZXcgUG9pbnQoMCwgLWltZy5oZWlnaHQgLyAyKVxuICAgICAgcG9pbnQgPSBwb2ludC5hZGQodGhpcy5vcHRpb25zLmxpbWl0SW1nT2Zmc2V0KVxuICAgICAgdGhpcy5jb250ZXh0LnRyYW5zbGF0ZSh0aGlzLmFyZWFSZWN0YW5nbGUuc2l6ZS54IC8gMiwgdGhpcy5hcmVhUmVjdGFuZ2xlLnNpemUueSAvIDIpXG4gICAgICB0aGlzLmNvbnRleHQucm90YXRlKGFuZ2xlKVxuICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZShpbWcsIHBvaW50LngsIHBvaW50LnkpXG4gICAgICB0aGlzLmNvbnRleHQuc2V0VHJhbnNmb3JtKDEsIDAsIDAsIDEsIDAsIDApXG4gICAgfVxuICB9XG5cbiAgZ2V0QW5nbGVzRGlmZigpIHtcbiAgICBjb25zdCBhbmdsZXMgPSB0aGlzLmFuZ2xlcy5zbGljZSgxKVxuICAgIGxldCBiYXNlQW5nbGUgPSB0aGlzLmFuZ2xlc1swXVxuXG4gICAgYW5nbGVzLnB1c2goYmFzZUFuZ2xlKVxuICAgIHJldHVybiBhbmdsZXMubWFwKChhbmdsZSkgPT4ge1xuICAgICAgY29uc3QgZGlmZkFuZ2xlID0gbm9ybWFsaXplQW5nbGUoYW5nbGUgLSBiYXNlQW5nbGUpXG4gICAgICBiYXNlQW5nbGUgPSBhbmdsZVxuICAgICAgcmV0dXJuIGRpZmZBbmdsZVxuICAgIH0pXG4gIH1cblxuICBnZXRQZXJjZW50KCkge1xuICAgIHJldHVybiB0aGlzLmdldEFuZ2xlc0RpZmYoKS5tYXAoKGRpZmZBbmdsZSkgPT4gZGlmZkFuZ2xlIC8gKDIgKiBNYXRoLlBJKSlcbiAgfVxuXG4gIGdldEFyY0Jpc2VjdHJpeHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0QW5nbGVzRGlmZigpLm1hcCgoZGlmZkFuZ2xlLCBpKSA9PiB7XG4gICAgICByZXR1cm4gbm9ybWFsaXplQW5nbGUodGhpcy5hbmdsZXNbaV0gKyBkaWZmQW5nbGUgLyAyKVxuICAgIH0pXG4gIH1cblxuICBnZXRBcmNPblBvaW50KHBvaW50KSB7XG4gICAgY29uc3QgYW5nbGUgPSBnZXRBbmdsZSh0aGlzLm9wdGlvbnMuY2VudGVyLCBwb2ludClcbiAgICBjb25zdCByYWRpdXMgPSBnZXREaXN0YW5jZSh0aGlzLm9wdGlvbnMuY2VudGVyLCBwb2ludClcblxuICAgIGlmIChyYWRpdXMgPiB0aGlzLm9wdGlvbnMucmFkaXVzKSB7XG4gICAgICByZXR1cm4gLTFcbiAgICB9XG5cbiAgICBsZXQgb2Zmc2V0ID0gLTEsIGksIGpcbiAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5hbmdsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChvZmZzZXQgPT09IC0xIHx8IHRoaXMuYW5nbGVzW29mZnNldF0gPiB0aGlzLmFuZ2xlc1tpXSkge1xuICAgICAgICBvZmZzZXQgPSBpXG4gICAgICB9XG4gICAgfVxuICAgIGZvciAoaSA9IDAsIGogPSBvZmZzZXQ7IGkgPCB0aGlzLmFuZ2xlcy5sZW5ndGg7IGkrKywgaiA9IChpICsgb2Zmc2V0KSAlIHRoaXMuYW5nbGVzLmxlbmd0aCkge1xuICAgICAgaWYgKGFuZ2xlIDwgdGhpcy5hbmdsZXNbal0pIHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKC0taiA8IDApIHtcbiAgICAgIGogKz0gdGhpcy5hbmdsZXMubGVuZ3RoXG4gICAgfVxuICAgIHJldHVybiBqXG4gIH1cblxuICBzZXRBbmdsZXMoYW5nbGVzKSB7XG4gICAgdGhpcy5hbmdsZXMgPSBhbmdsZXNcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlLCBpKSA9PiB7XG4gICAgICBjb25zdCBhbmdsZSA9IHRoaXMuYW5nbGVzW2ldXG4gICAgICBjb25zdCBoYWxmU2l6ZSA9IGRyYWdnYWJsZS5nZXRTaXplKCkubXVsdCgwLjUpXG4gICAgICBjb25zdCBwb3NpdGlvbiA9IGdldFBvaW50RnJvbVJhZGlhbFN5c3RlbShcbiAgICAgICAgYW5nbGUsXG4gICAgICAgIHRoaXMub3B0aW9ucy50b3VjaFJhZGl1cyxcbiAgICAgICAgdGhpcy5vcHRpb25zLmNlbnRlci5zdWIoaGFsZlNpemUpXG4gICAgICApXG5cbiAgICAgIGRyYWdnYWJsZS5tb3ZlQW5kU2F2ZShwb3NpdGlvbilcbiAgICB9KVxuICAgIHRoaXMuZHJhdygpXG4gIH1cblxuICBzZXRBY3RpdmVBcmMoaW5kZXgpIHtcbiAgICBjb25zdCBlbmFibGVJbmRleGVzID0gZ2V0QXJyYXlXaXRoQm91bmRJbmRleGVzKGluZGV4LCB0aGlzLmRyYWdnYWJsZXMubGVuZ3RoKVxuICAgIHRoaXMuYWN0aXZlQXJjSW5kZXggPSBpbmRleFxuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUsIGkpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5lbmFibGUgPSBlbmFibGVJbmRleGVzLmluZGV4T2YoaSkgIT09IC0xXG4gICAgfSlcbiAgICB0aGlzLmRyYXcoKVxuICB9XG59XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9nZW9tZXRyeS9wb2ludCdcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSAnLi9nZW9tZXRyeS9yZWN0YW5nbGUnXG5pbXBvcnQgRHJhZ2dhYmxlIGZyb20gJy4vZHJhZ2dhYmxlJ1xuaW1wb3J0IExpc3QgZnJvbSAnLi9saXN0J1xuaW1wb3J0IFRhcmdldCBmcm9tICcuL3RhcmdldCdcbmltcG9ydCB7IHNjb3BlcywgZGVmYXVsdFNjb3BlLCBTY29wZSwgc2NvcGUgfSBmcm9tICcuL3Njb3BlJ1xuaW1wb3J0IHsgTm90Q3Jvc3NpbmdTdHJhdGVneSwgRmxvYXRMZWZ0U3RyYXRlZ3ksIEZsb2F0UmlnaHRTdHJhdGVneSB9IGZyb20gJy4vcG9zaXRpb25pbmcnXG5pbXBvcnQgU3BpZGVyIGZyb20gJy4vc3BpZGVyJ1xuaW1wb3J0IEFyY1NsaWRlciBmcm9tICcuL2FyY3NsaWRlcidcbmltcG9ydCBDaGFydCBmcm9tICcuL2NoYXJ0J1xuaW1wb3J0IHsgZ2V0RGlzdGFuY2UsIGdldFhEaWZmZXJlbmNlLCBnZXRZRGlmZmVyZW5jZSwgdHJhbnNmb3JtZWRTcGFjZURpc3RhbmNlRmFjdG9yeSB9IGZyb20gJy4vZ2VvbWV0cnkvZGlzdGFuY2VzJ1xuaW1wb3J0IHsgYWRkQ2xhc3MsIHJlbW92ZUNsYXNzIH0gZnJvbSAnLi91dGlscy9jbGFzc2VzJ1xuaW1wb3J0IHtcbiAgQm91bmQsXG4gIEJvdW5kVG9SZWN0YW5nbGUsXG4gIEJvdW5kVG9FbGVtZW50LFxuICBCb3VuZFRvTGluZVgsXG4gIEJvdW5kVG9MaW5lWSxcbiAgQm91bmRUb0xpbmUsXG4gIEJvdW5kVG9DaXJjbGUsXG4gIEJvdW5kVG9BcmNcbn0gZnJvbSAnLi9ib3VuZGluZydcblxuY29uc3QgYm91bmQgPSB7XG4gIEJvdW5kLFxuICBCb3VuZFRvUmVjdGFuZ2xlLFxuICBCb3VuZFRvRWxlbWVudCxcbiAgQm91bmRUb0xpbmVYLFxuICBCb3VuZFRvTGluZVksXG4gIEJvdW5kVG9MaW5lLFxuICBCb3VuZFRvQ2lyY2xlLFxuICBCb3VuZFRvQXJjXG59XG5cbmNvbnN0IGRpc3RhbmNlID0ge1xuICBnZXREaXN0YW5jZSxcbiAgZ2V0WERpZmZlcmVuY2UsXG4gIGdldFlEaWZmZXJlbmNlLFxuICB0cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5XG59XG5cbmV4cG9ydCB7XG4gIERyYWdnYWJsZSxcbiAgUG9pbnQsIFJlY3RhbmdsZSxcbiAgTGlzdCxcbiAgVGFyZ2V0LFxuICBzY29wZXMsIGRlZmF1bHRTY29wZSwgU2NvcGUsIHNjb3BlLFxuICBOb3RDcm9zc2luZ1N0cmF0ZWd5LCBGbG9hdExlZnRTdHJhdGVneSwgRmxvYXRSaWdodFN0cmF0ZWd5LFxuICBTcGlkZXIsXG4gIEFyY1NsaWRlcixcbiAgQ2hhcnQsXG4gIGJvdW5kLFxuICBkaXN0YW5jZSxcbiAgYWRkQ2xhc3MsIHJlbW92ZUNsYXNzXG59XG4iXSwibmFtZXMiOlsiZ2V0U3VtVmFsdWVPZlN0eWxlUnVsZXMiLCJlbGVtZW50IiwicnVsZXMiLCJyZWR1Y2UiLCJzdW0iLCJydWxlIiwicGFyc2VJbnQiLCJ3aW5kb3ciLCJnZXRDb21wdXRlZFN0eWxlIiwiUG9pbnQiLCJ4IiwieSIsInAiLCJrIiwicGFyZW50IiwicGFyZW50Tm9kZSIsImVsZW1lbnRSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicGFyZW50UmVjdCIsImxlZnQiLCJ0b3AiLCJpc0NvbnRlbnRCb3hTaXplIiwid2lkdGgiLCJoZWlnaHQiLCJSZWN0YW5nbGUiLCJwb3NpdGlvbiIsInNpemUiLCJhZGQiLCJtdWx0IiwicmVjdCIsIk1hdGgiLCJtaW4iLCJtYXgiLCJzdWIiLCJyZWN0YW5nbGUiLCJpbmNsdWRlUG9pbnQiLCJnZXRQMyIsImF4aXMiLCJzZWxBeGlzIiwiY3Jvc3NSZWN0YW5nbGUiLCJhbmQiLCJ0aGlzQ2VudGVyIiwiZ2V0Q2VudGVyIiwicmVjdENlbnRlciIsInNpZ24iLCJvZmZzZXQiLCJlbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInN0eWxlIiwiaXNDb25zaWRlclRyYW5zbGF0ZSIsImVsZW1lbnRPZmZzZXQiLCJlbGVtZW50U2l6ZSIsImhhc0NsYXNzIiwiYyIsInJlIiwiUmVnRXhwIiwidGVzdCIsImNsYXNzTmFtZSIsImFkZENsYXNzIiwicmVwbGFjZSIsInJlbW92ZUNsYXNzIiwiZ2V0RGVmYXVsdFBhcmVudCIsInRhZ05hbWUiLCJFdmVudEVtaXR0ZXIiLCJjb250ZXh0Iiwib3B0aW9ucyIsImV2ZW50cyIsIm9uIiwiT2JqZWN0IiwiZW50cmllcyIsImV2ZW50TmFtZSIsImZuIiwiaW50ZXJydXB0ZWQiLCJhcmdzIiwic2xpY2UiLCJjYWxsIiwiYXJndW1lbnRzIiwiZnVuYyIsImFwcGx5IiwicHVzaCIsInVuc2hpZnQiLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJnZXREaXN0YW5jZSIsInAxIiwicDIiLCJkeCIsImR5Iiwic3FydCIsImdldFhEaWZmZXJlbmNlIiwiYWJzIiwiZ2V0WURpZmZlcmVuY2UiLCJ0cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5IiwicG93IiwiaW5kZXhPZk5lYXJlc3RQb2ludCIsImFyciIsInZhbCIsInJhZGl1cyIsImdldERpc3RhbmNlRnVuYyIsImkiLCJ0ZW1wIiwibGVuZ3RoIiwiZGlyZWN0Q3Jvc3NpbmciLCJMMVAxIiwiTDFQMiIsIkwyUDEiLCJMMlAyIiwiazEiLCJrMiIsImIxIiwiYjIiLCJib3VuZFRvTGluZSIsIkEiLCJCIiwiUCIsIkFQIiwiQUIiLCJhYjIiLCJhcF9hYiIsInQiLCJnZXRQb2ludE9uTGluZUJ5TGVuZ2h0IiwiTFAxIiwiTFAyIiwibGVuZ2h0IiwicGVyY2VudCIsImFkZFBvaW50VG9Cb3VuZFBvaW50cyIsImJvdW5kcG9pbnRzIiwicG9pbnQiLCJpc1JpZ2h0IiwicmVzdWx0IiwiZmlsdGVyIiwiYlBvaW50IiwiZ2V0QW5nbGVEaWZmIiwiYWxwaGEiLCJiZXRhIiwibWluQW5nbGUiLCJtYXhBbmdsZSIsIlBJIiwiZ2V0QW5nbGUiLCJkaWZmIiwibm9ybWFsaXplQW5nbGUiLCJhdGFuMiIsInRvUmFkaWFuIiwiYW5nbGUiLCJib3VuZEFuZ2xlIiwiZG1pbiIsImRtYXgiLCJnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0iLCJjZW50ZXIiLCJjb3MiLCJzaW4iLCJCb3VuZCIsIl9zaXplIiwiQm91bmRUb1JlY3RhbmdsZSIsImNhbGNQb2ludCIsImNsb25lIiwicmVjdFAyIiwiQm91bmRUb0VsZW1lbnQiLCJmcm9tRWxlbWVudCIsIkJvdW5kVG9MaW5lWCIsInN0YXJ0WSIsImVuZFkiLCJCb3VuZFRvTGluZVkiLCJzdGFydFgiLCJlbmRYIiwiQm91bmRUb0xpbmUiLCJzdGFydFBvaW50IiwiZW5kUG9pbnQiLCJzb21lSyIsImNvc0JldGEiLCJzaW5CZXRhIiwicG9pbnQyIiwibmV3RW5kUG9pbnQiLCJwb2ludENyb3NzaW5nIiwiQm91bmRUb0NpcmNsZSIsIkJvdW5kVG9BcmMiLCJzdGFydEFuZ2xlIiwiZW5kQW5nbGUiLCJfc3RhcnRBbmdsZSIsIl9lbmRBbmdsZSIsImFycmF5IiwicmFuZ2UiLCJzdGFydCIsInN0b3AiLCJzdGVwIiwiQmFzaWNTdHJhdGVneSIsIk5vdENyb3NzaW5nU3RyYXRlZ3kiLCJyZWN0YW5nbGVMaXN0IiwiaW5kZXhlc09mTmV3cyIsInN0YXRpY1JlY3RhbmdsZUluZGV4ZXMiLCJpbmRleGVzIiwiX3JlY3QiLCJmb3JFYWNoIiwicmVtb3ZhYmxlIiwiaW5kZXhPZlN0YXRpYyIsInN0YXRpY1JlY3QiLCJtb3ZlVG9Cb3VuZCIsInNvbWUiLCJib3VuZFJlY3QiLCJnZXRTcXVhcmUiLCJvZGxEcmFnZ2FibGVzTGlzdCIsIm5ld0RyYWdnYWJsZXMiLCJpbmRleE9mTmV3cyIsImRyYWdnYWJsZXMiLCJjb25jYXQiLCJkcmFnZ2FibGUiLCJGbG9hdExlZnRTdHJhdGVneSIsImFzc2lnbiIsInBhZGRpbmdUb3BMZWZ0IiwicGFkZGluZ0JvdHRvbVJpZ2h0IiwieUdhcEJldHdlZW5EcmFnZ2FibGVzIiwiZ2V0UG9zaXRpb24iLCJfaW5kZXhlc09mTmV3cyIsImdldFAyIiwiYm91bmRhcnlQb2ludHMiLCJyZWN0SW5kZXgiLCJpc1ZhbGlkIiwibmV3TGlzdCIsImxpc3RPbGRQb3NpdGlvbiIsIm1hcCIsIm5ld0RyYWdnYWJsZSIsIkZsb2F0UmlnaHRTdHJhdGVneSIsInBhZGRpbmdUb3BSaWdodCIsInBhZGRpbmdCb3R0b21MZWZ0IiwicGFkZGluZ0JvdHRvbU5lZ0xlZnQiLCJnZXRQNCIsImFkZFRvRGVmYXVsdFNjb3BlIiwidGFyZ2V0IiwiZGVmYXVsdFNjb3BlIiwiYWRkVGFyZ2V0IiwiVGFyZ2V0IiwidW5kZWZpbmVkIiwidGltZUVuZCIsInRpbWVFeGNhbmdlIiwicG9zaXRpb25pbmdTdHJhdGVneSIsInN0cmF0ZWd5IiwiZ2V0UmVjdGFuZ2xlIiwiYmluZCIsInRhcmdldHMiLCJlbWl0dGVyIiwiZW1pdCIsImluaXQiLCJpbmRleGVzT2ZOZXciLCJwb3NpdGlvbmluZyIsIm9sZERyYWdnYWJsZXMiLCJzb3J0aW5nIiwicmVjdGFuZ2xlcyIsImlubmVyRHJhZ2dhYmxlcyIsInNldFBvc2l0aW9uIiwiY2F0Y2hEcmFnZ2FibGUiLCJ0YXJnZXRSZWN0YW5nbGUiLCJkcmFnZ2FibGVTcXVhcmUiLCJzY29wZXMiLCJzY29wZSIsInJlbW92ZUl0ZW0iLCJuZXdEcmFnZ2FibGVzSW5kZXgiLCJhZGRSZW1vdmVPbk1vdmUiLCJ0aW1lIiwibW92ZSIsImluaXRpYWxQb3NpdGlvbiIsInB1c2hJbm5lckRyYWdnYWJsZSIsInJlbW92ZUhhbmRsZXIiLCJyZW1vdmUiLCJ1bnN1YnNjcmliZSIsIlNjb3BlIiwiZHJhZ0VuZEFjdGlvbiIsIm9uRW5kIiwic2hvdFRhcmdldHMiLCJzb3J0IiwiYSIsImIiLCJwaW5Qb3NpdGlvbiIsInJlc2V0IiwicmVmcmVzaCIsInBvc2l0aW9ucyIsIm1lc3NhZ2UiLCJ0YXJnZXRJbmRleGVzIiwiY3VycmVudFNjb3BlIiwiYWRkRHJhZ2dhYmxlVG9TY29wZSIsImFkZERyYWdnYWJsZSIsIkRyYWdnYWJsZSIsImludGVycnVwdCIsImFkZFRhcmdldFRvU2NvcGUiLCJwcmVwZW5kT24iLCJjaGVja1N1cHBvcnRQYXNzaXZlRXZlbnRzIiwicGFzc2l2ZVN1cHBvcnRlZCIsImRlZmluZVByb3BlcnR5IiwiZ2V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJfZXJyIiwiaXNTdXBwb3J0UGFzc2l2ZUV2ZW50cyIsImlzVG91Y2giLCJtb3VzZUV2ZW50cyIsImVuZCIsInRvdWNoRXZlbnRzIiwidHJhbnNmb3JtUHJvcGVydHkiLCJnZXRTdHlsZVByb3BlcnR5IiwidHJhbnNpdGlvblByb3BlcnR5IiwiZ2V0VG91Y2hCeUlEIiwidG91Y2hJZCIsImNoYW5nZWRUb3VjaGVzIiwiaWRlbnRpZmllciIsInByZXZlbnREb3VibGVJbml0IiwiZXhpc3RpbmciLCJjb3B5U3R5bGVzIiwic291cmNlIiwiZGVzdGluYXRpb24iLCJjcyIsImtleSIsImNoaWxkcmVuIiwiX2VuYWJsZSIsInN0YXJ0UG9zaXRpb25pbmciLCJzdGFydExpc3RlbmluZyIsIl9zZXREZWZhdWx0VHJhbnNpdGlvbiIsInBpbm5lZFBvc2l0aW9uIiwiYm91bmRpbmciLCJfZHJhZ1N0YXJ0IiwiZXZlbnQiLCJkcmFnU3RhcnQiLCJfZHJhZ01vdmUiLCJkcmFnTW92ZSIsIl9kcmFnRW5kIiwiZHJhZ0VuZCIsIl9uYXRpdmVEcmFnU3RhcnQiLCJuYXRpdmVEcmFnU3RhcnQiLCJfbmF0aXZlRHJhZ092ZXIiLCJuYXRpdmVEcmFnT3ZlciIsIl9uYXRpdmVEcmFnRW5kIiwibmF0aXZlRHJhZ0VuZCIsIl9uYXRpdmVEcm9wIiwibmF0aXZlRHJvcCIsIl9zY3JvbGwiLCJvblNjcm9sbCIsImhhbmRsZXIiLCJwYXNzaXZlIiwiX3RyYW5zZm9ybVBvc2l0aW9uIiwiZ2V0U2l6ZSIsInRyYW5zaXRpb24iLCJ0cmFuc2l0aW9uQ3NzIiwidHJhbnNmb3JtIiwidHJhbnNsYXRlQ3NzIiwidWEiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJtc2llIiwiaXNTaWxlbnQiLCJkZXRlcm1pbmVEaXJlY3Rpb24iLCJfc2V0VHJhbnNpdGlvbiIsIl9zZXRUcmFuc2xhdGUiLCJzaWxlbnQiLCJsZWZ0RGlyZWN0aW9uIiwicmlnaHREaXJlY3Rpb24iLCJ1cERpcmVjdGlvbiIsImRvd25EaXJlY3Rpb24iLCJjdXJyZW50RXZlbnQiLCJpc1RvdWNoRXZlbnQiLCJUb3VjaEV2ZW50IiwidG91Y2hQb2ludCIsIl9zdGFydFRvdWNoUG9pbnQiLCJwYWdlWCIsImNsaWVudFgiLCJwYWdlWSIsImNsaWVudFkiLCJfc3RhcnRQb3NpdGlvbiIsIl90b3VjaElkIiwiX3N0YXJ0U2Nyb2xsUG9pbnQiLCJzY3JvbGxYIiwic2Nyb2xsWSIsInN0b3BQcm9wYWdhdGlvbiIsIkhUTUxJbnB1dEVsZW1lbnQiLCJmb2N1cyIsIm5hdGl2ZURyYWdBbmREcm9wIiwicHJldmVudERlZmF1bHQiLCJpc1NhZmFyaSIsImVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcE9uVG91Y2giLCJlbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3BGb3JBbGwiLCJlbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3AiLCJpc0RyYWdnaW5nIiwidG91Y2giLCJzY3JvbGxQb2ludCIsImJvdW5kIiwicmVtb3ZlQXR0cmlidXRlIiwiX2V2ZW50IiwiZGF0YVRyYW5zZmVyIiwic2V0RGF0YSIsImVmZmVjdEFsbG93ZWQiLCJkcm9wRWZmZWN0IiwiY2xvbmVkRWxlbWVudCIsImNsb25lTm9kZSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImVtdWxhdGlvbkRyYWdnYWJsZSIsInBhcmVudFJlY3RQb2ludCIsImRlc3Ryb3kiLCJyZW1vdmVDaGlsZCIsInJlc2V0RW1pdHRlciIsIl9wYXJlbnQiLCJfYm91bmRpbmciLCJfaGFuZGxlciIsImVuYWJsZSIsIkxpc3QiLCJpbml0RHJhZ2dhYmxlIiwib25Nb3ZlIiwic29ydGVkRHJhZ2dhYmxlcyIsImdldFNvcnRlZERyYWdnYWJsZXMiLCJwaW5uZWRQb3NpdGlvbnMiLCJjdXJyZW50SW5kZXgiLCJ0YXJnZXRJbmRleCIsImRpc3RhbmNlRnVuYyIsInJlc2V0UG9zaXRpb25Ub0luaXRpYWwiLCJBcnJheSIsImluaXRpYWxQb3NpdGlvbnMiLCJsaXN0IiwicmVzZXRPbiIsImoiLCJkcmFnZ2FibGVBIiwiZHJhZ2dhYmxlQiIsImdldEN1cnJlbnRQaW5uZWRQb3NpdGlvbnMiLCJwYXJlbnRFbGVtZW50IiwiZWxlbWVudHMiLCJmcm9tIiwic2V0U3R5bGUiLCJjc3NUZXh0IiwiaGFzT3duUHJvcGVydHkiLCJhcHBlbmRGaXJzdENoaWxkIiwibm9kZSIsImZpcnN0Q2hpbGQiLCJpbnNlcnRCZWZvcmUiLCJjcmVhdGVDYW52YXMiLCJhcmVhIiwicmVjdGFnbGUiLCJjYW52YXMiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiU3BpZGVyIiwiYXJlYVJlY3RhbmdsZSIsImRBbmdsZSIsInN0YXJ0UmFkaXVzIiwiZW5kUmFkaXVzIiwiZ2V0TWluU2lkZSIsImxpbmVXaWR0aCIsInN0cm9rZVN0eWxlIiwiZmlsbFN0eWxlIiwiZ2V0Q29udGV4dCIsImhhbGZTaXplIiwiZHJhdyIsImlzSW5pdCIsImNsZWFyUmVjdCIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsImNsb3NlUGF0aCIsInN0cm9rZSIsImZpbGwiLCJBcmNTbGlkZXIiLCJhbmdsZXMiLCJzaGlmdGVkQ2VudGVyIiwiY2hhbmdlIiwidXBkYXRlQW5nbGUiLCJybmQiLCJyb3VuZCIsInJhbmRvbSIsInRvSGV4U3RyaW5nIiwiZGlnaXQiLCJzdHIiLCJ0b1N0cmluZyIsInJhbmRvbUNvbG9yIiwiZ2V0QXJyYXlXaXRoQm91bmRJbmRleGVzIiwicmV0SW5kZXhlcyIsIkNoYXJ0IiwidG91Y2hSYWRpdXMiLCJmaWxsU3R5bGVzIiwiaW5pdEFuZ2xlcyIsImxpbWl0SW1nIiwibGltaXRJbWdPZmZzZXQiLCJnZXRCb3VuZEFuZ2xlIiwiaXNDbG9zc2luZyIsInVwZGF0ZUFuZ2xlcyIsIl9kcmFnZ2FibGUiLCJkcmF3QXJjIiwiZHJhd0xpbWl0SW1nIiwib3B0cyIsImNsb25lT2JqIiwiY29sb3IiLCJnZXRGaWxsU3R5bGUiLCJhcmMiLCJpbWciLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJkcmF3SW1hZ2UiLCJzZXRUcmFuc2Zvcm0iLCJiYXNlQW5nbGUiLCJkaWZmQW5nbGUiLCJnZXRBbmdsZXNEaWZmIiwibW92ZUFuZFNhdmUiLCJlbmFibGVJbmRleGVzIiwiYWN0aXZlQXJjSW5kZXgiLCJkaXN0YW5jZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBQUEsU0FBU0EsdUJBQVQsQ0FBaUNDLE9BQWpDLEVBQTBDQyxLQUExQyxFQUFpRDtFQUMvQyxTQUFPQSxLQUFLLENBQUNDLE1BQU4sQ0FBYSxVQUFDQyxHQUFELEVBQU1DLElBQU4sRUFBZTtFQUNqQyxXQUFPRCxHQUFHLEdBQUdFLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QlAsT0FBeEIsRUFBaUNJLElBQWpDLEtBQXdDLENBQXpDLENBQXJCO0VBQ0QsR0FGTSxFQUVKLENBRkksQ0FBUDtFQUdEOztNQUVvQkk7OztFQUNuQixpQkFBWUMsQ0FBWixFQUFlQyxDQUFmLEVBQWtCO0VBQUE7O0VBQ2hCLFNBQUtELENBQUwsR0FBU0EsQ0FBVDtFQUNBLFNBQUtDLENBQUwsR0FBU0EsQ0FBVDtFQUNEOzs7OzBCQUVHQyxHQUFHO0VBQ0wsYUFBTyxJQUFJSCxLQUFKLENBQVUsS0FBS0MsQ0FBTCxHQUFTRSxDQUFDLENBQUNGLENBQXJCLEVBQXdCLEtBQUtDLENBQUwsR0FBU0MsQ0FBQyxDQUFDRCxDQUFuQyxDQUFQO0VBQ0Q7OzswQkFFR0MsR0FBRztFQUNMLGFBQU8sSUFBSUgsS0FBSixDQUFVLEtBQUtDLENBQUwsR0FBU0UsQ0FBQyxDQUFDRixDQUFyQixFQUF3QixLQUFLQyxDQUFMLEdBQVNDLENBQUMsQ0FBQ0QsQ0FBbkMsQ0FBUDtFQUNEOzs7MkJBRUlFLEdBQUc7RUFDTixhQUFPLElBQUlKLEtBQUosQ0FBVSxLQUFLQyxDQUFMLEdBQVNHLENBQW5CLEVBQXNCLEtBQUtGLENBQUwsR0FBU0UsQ0FBL0IsQ0FBUDtFQUNEOzs7aUNBRVU7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
