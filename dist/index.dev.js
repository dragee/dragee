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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZGV2LmpzIiwic291cmNlcyI6WyIuLi9zcmMvZ2VvbWV0cnkvcG9pbnQuanMiLCIuLi9zcmMvZ2VvbWV0cnkvcmVjdGFuZ2xlLmpzIiwiLi4vc3JjL3V0aWxzL2NsYXNzZXMuanMiLCIuLi9zcmMvdXRpbHMvZ2V0LWRlZmF1bHQtcGFyZW50LmpzIiwiLi4vc3JjL2V2ZW50RW1pdHRlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9kZXNhbmRyby1nZXQtc3R5bGUtcHJvcGVydHkvZ2V0LXN0eWxlLXByb3BlcnR5LmpzIiwiLi4vc3JjL2dlb21ldHJ5L2Rpc3RhbmNlcy5qcyIsIi4uL3NyYy9nZW9tZXRyeS9ib3VuZHMuanMiLCIuLi9zcmMvZ2VvbWV0cnkvYW5nbGVzLmpzIiwiLi4vc3JjL2JvdW5kaW5nLmpzIiwiLi4vc3JjL3V0aWxzL3JlbW92ZS1hcnJheS1pdGVtLmpzIiwiLi4vc3JjL3V0aWxzL3JhbmdlLmpzIiwiLi4vc3JjL3Bvc2l0aW9uaW5nLmpzIiwiLi4vc3JjL3RhcmdldC5qcyIsIi4uL3NyYy9zY29wZS5qcyIsIi4uL3NyYy91dGlscy9pcy1zdXBwb3J0LXBhc3NpdmUtZXZlbnRzLmpzIiwiLi4vc3JjL2RyYWdnYWJsZS5qcyIsIi4uL3NyYy9saXN0LmpzIiwiLi4vc3JjL3V0aWxzL2NyZWF0ZS1jYW52YXMuanMiLCIuLi9zcmMvc3BpZGVyLmpzIiwiLi4vc3JjL2FyY3NsaWRlci5qcyIsIi4uL3NyYy9jaGFydC5qcyIsIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBnZXRTdW1WYWx1ZU9mU3R5bGVSdWxlcyhlbGVtZW50LCBydWxlcykge1xuICByZXR1cm4gcnVsZXMucmVkdWNlKChzdW0sIHJ1bGUpID0+IHtcbiAgICByZXR1cm4gc3VtICsgcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudClbcnVsZV18fDApXG4gIH0sIDApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvaW50IHtcbiAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgIHRoaXMueCA9IHhcbiAgICB0aGlzLnkgPSB5XG4gIH1cblxuICBhZGQocCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54ICsgcC54LCB0aGlzLnkgKyBwLnkpXG4gIH1cblxuICBzdWIocCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54IC0gcC54LCB0aGlzLnkgLSBwLnkpXG4gIH1cblxuICBtdWx0KGspIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCAqIGssIHRoaXMueSAqIGspXG4gIH1cblxuICBuZWdhdGl2ZSgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KC10aGlzLngsIC10aGlzLnkpXG4gIH1cblxuICBjb21wYXJlKHApIHtcbiAgICByZXR1cm4gKHRoaXMueCA9PT0gcC54ICYmIHRoaXMueSA9PT0gcC55KVxuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLngsIHRoaXMueSlcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiBge3g9JHt0aGlzLnh9LHk9JHt0aGlzLnl9YFxuICB9XG5cbiAgc3RhdGljIGVsZW1lbnRPZmZzZXQoZWxlbWVudCwgcGFyZW50KSB7XG4gICAgcGFyZW50ID0gcGFyZW50IHx8IGVsZW1lbnQucGFyZW50Tm9kZVxuICAgIGNvbnN0IGVsZW1lbnRSZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIGNvbnN0IHBhcmVudFJlY3QgPSBwYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICByZXR1cm4gbmV3IFBvaW50KFxuICAgICAgZWxlbWVudFJlY3QubGVmdCAtIHBhcmVudFJlY3QubGVmdCxcbiAgICAgIGVsZW1lbnRSZWN0LnRvcCAtIHBhcmVudFJlY3QudG9wXG4gICAgKVxuICB9XG5cbiAgc3RhdGljIGVsZW1lbnRTaXplKGVsZW1lbnQsIGlzQ29udGVudEJveFNpemU9ZmFsc2UpIHtcbiAgICBsZXQgd2lkdGggPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KVsnd2lkdGgnXSlcbiAgICBsZXQgaGVpZ2h0ID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudClbJ2hlaWdodCddKVxuICAgIGlmICghaXNDb250ZW50Qm94U2l6ZSkge1xuICAgICAgd2lkdGggKz0gZ2V0U3VtVmFsdWVPZlN0eWxlUnVsZXMoZWxlbWVudCwgWydwYWRkaW5nLWxlZnQnLCAncGFkZGluZy1yaWdodCcsICdib3JkZXItbGVmdC13aWR0aCcsICdib3JkZXItcmlnaHQtd2lkdGgnXSlcbiAgICAgIGhlaWdodCArPSBnZXRTdW1WYWx1ZU9mU3R5bGVSdWxlcyhlbGVtZW50LCBbJ3BhZGRpbmctdG9wJywgJ3BhZGRpbmctYm90dG9tJywgJ2JvcmRlci10b3Atd2lkdGgnLCAnYm9yZGVyLWJvdHRvbS13aWR0aCddKVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFBvaW50KHdpZHRoLCBoZWlnaHQpXG4gIH1cbn1cbiIsImltcG9ydCBQb2ludCBmcm9tICcuL3BvaW50J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWN0YW5nbGUge1xuICBjb25zdHJ1Y3Rvcihwb3NpdGlvbiwgc2l6ZSkge1xuICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvblxuICAgIHRoaXMuc2l6ZSA9IHNpemVcbiAgfVxuXG4gIGdldFAxKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uXG4gIH1cblxuICBnZXRQMigpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54LCB0aGlzLnBvc2l0aW9uLnkpXG4gIH1cblxuICBnZXRQMygpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi5hZGQodGhpcy5zaXplKVxuICB9XG5cbiAgZ2V0UDQoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55KVxuICB9XG5cbiAgZ2V0Q2VudGVyKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLnNpemUubXVsdCgwLjUpKVxuICB9XG5cbiAgb3IocmVjdCkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gbmV3IFBvaW50KE1hdGgubWluKHRoaXMucG9zaXRpb24ueCwgcmVjdC5wb3NpdGlvbi54KSwgTWF0aC5taW4odGhpcy5wb3NpdGlvbi55LCByZWN0LnBvc2l0aW9uLnkpKVxuICAgIGNvbnN0IHNpemUgPSAobmV3IFBvaW50KE1hdGgubWF4KHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54LCByZWN0LnBvc2l0aW9uLnggKyByZWN0LnNpemUueCksIE1hdGgubWF4KHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55LCByZWN0LnBvc2l0aW9uLnkgKyByZWN0LnNpemUueSkpKS5zdWIocG9zaXRpb24pXG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUocG9zaXRpb24sIHNpemUpXG4gIH1cblxuICBhbmQocmVjdCkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gbmV3IFBvaW50KE1hdGgubWF4KHRoaXMucG9zaXRpb24ueCwgcmVjdC5wb3NpdGlvbi54KSwgTWF0aC5tYXgodGhpcy5wb3NpdGlvbi55LCByZWN0LnBvc2l0aW9uLnkpKVxuICAgIGNvbnN0IHNpemUgPSAobmV3IFBvaW50KE1hdGgubWluKHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54LCByZWN0LnBvc2l0aW9uLnggKyByZWN0LnNpemUueCksIE1hdGgubWluKHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55LCByZWN0LnBvc2l0aW9uLnkgKyByZWN0LnNpemUueSkpKS5zdWIocG9zaXRpb24pXG4gICAgaWYgKHNpemUueCA8PSAwIHx8IHNpemUueSA8PSAwKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZShwb3NpdGlvbiwgc2l6ZSlcbiAgfVxuXG4gIGluY2x1ZGVQb2ludChwKSB7XG4gICAgcmV0dXJuICEodGhpcy5wb3NpdGlvbi54ID4gcC54IHx8IHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54IDwgcC54IHx8IHRoaXMucG9zaXRpb24ueSA+IHAueSB8fCB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSA8IHAueSlcbiAgfVxuXG4gIGluY2x1ZGVSZWN0YW5nbGUocmVjdGFuZ2xlKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5jbHVkZVBvaW50KHJlY3RhbmdsZS5wb3NpdGlvbikgJiYgdGhpcy5pbmNsdWRlUG9pbnQocmVjdGFuZ2xlLmdldFAzKCkpXG4gIH1cblxuICBtb3ZlVG9Cb3VuZChyZWN0LCBheGlzKSB7XG4gICAgbGV0IHNlbEF4aXMsIGNyb3NzUmVjdGFuZ2xlXG4gICAgaWYgKGF4aXMpIHtcbiAgICAgIHNlbEF4aXMgPSBheGlzXG4gICAgfSBlbHNlIHtcbiAgICAgIGNyb3NzUmVjdGFuZ2xlID0gdGhpcy5hbmQocmVjdClcbiAgICAgIGlmICghY3Jvc3NSZWN0YW5nbGUpIHtcbiAgICAgICAgcmV0dXJuIHJlY3RcbiAgICAgIH1cbiAgICAgIHNlbEF4aXMgPSBjcm9zc1JlY3RhbmdsZS5zaXplLnggPiBjcm9zc1JlY3RhbmdsZS5zaXplLnkgPyAneScgOiAneCdcbiAgICB9XG4gICAgY29uc3QgdGhpc0NlbnRlciA9IHRoaXMuZ2V0Q2VudGVyKClcbiAgICBjb25zdCByZWN0Q2VudGVyID0gcmVjdC5nZXRDZW50ZXIoKVxuICAgIGNvbnN0IHNpZ24gPSB0aGlzQ2VudGVyW3NlbEF4aXNdID4gcmVjdENlbnRlcltzZWxBeGlzXSA/IC0xIDogMVxuICAgIGNvbnN0IG9mZnNldCA9IHNpZ24gPiAwID8gdGhpcy5wb3NpdGlvbltzZWxBeGlzXSArIHRoaXMuc2l6ZVtzZWxBeGlzXSAtIHJlY3QucG9zaXRpb25bc2VsQXhpc10gOiB0aGlzLnBvc2l0aW9uW3NlbEF4aXNdIC0gKHJlY3QucG9zaXRpb25bc2VsQXhpc10gKyByZWN0LnNpemVbc2VsQXhpc10pXG4gICAgcmVjdC5wb3NpdGlvbltzZWxBeGlzXSA9IHJlY3QucG9zaXRpb25bc2VsQXhpc10gKyBvZmZzZXRcbiAgICByZXR1cm4gcmVjdFxuICB9XG5cbiAgZ2V0U3F1YXJlKCkge1xuICAgIHJldHVybiB0aGlzLnNpemUueCAqIHRoaXMuc2l6ZS55XG4gIH1cblxuICBzdHlsZUFwcGx5KGVsKSB7XG4gICAgZWwgPSBlbCB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbmQnKVxuICAgIGVsLnN0eWxlLmxlZnQgPSB0aGlzLnBvc2l0aW9uLnggKyAncHgnXG4gICAgZWwuc3R5bGUudG9wID0gdGhpcy5wb3NpdGlvbi55ICsgJ3B4J1xuICAgIGVsLnN0eWxlLndpZHRoID0gdGhpcy5zaXplLnggKyAncHgnXG4gICAgZWwuc3R5bGUuaGVpZ2h0ID0gdGhpcy5zaXplLnkgKyAncHgnXG4gIH1cblxuICBncm93dGgoc2l6ZSkge1xuICAgIHRoaXMuc2l6ZSA9IHRoaXMuc2l6ZS5hZGQoc2l6ZSlcbiAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbi5hZGQoc2l6ZS5tdWx0KC0wLjUpKVxuICB9XG5cbiAgZ2V0TWluU2lkZSgpIHtcbiAgICByZXR1cm4gTWF0aC5taW4odGhpcy5zaXplLngsIHRoaXMuc2l6ZS55KVxuICB9XG5cbiAgc3RhdGljIGZyb21FbGVtZW50KGVsZW1lbnQsIHBhcmVudD1lbGVtZW50LnBhcmVudE5vZGUsIGlzQ29udGVudEJveFNpemU9ZmFsc2UsIGlzQ29uc2lkZXJUcmFuc2xhdGU9ZmFsc2UpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IFBvaW50LmVsZW1lbnRPZmZzZXQoZWxlbWVudCwgcGFyZW50LCBpc0NvbnNpZGVyVHJhbnNsYXRlKVxuICAgIGNvbnN0IHNpemUgPSBQb2ludC5lbGVtZW50U2l6ZShlbGVtZW50LCBpc0NvbnRlbnRCb3hTaXplKVxuICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHBvc2l0aW9uLCBzaXplKVxuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gaGFzQ2xhc3MoZWxlbWVudCwgYykge1xuICBjb25zdCByZSA9IG5ldyBSZWdFeHAoJyhefFxcXFxzKScgKyBjICsgJyhcXFxcc3wkKScsICdnJylcbiAgcmV0dXJuIChyZS50ZXN0KGVsZW1lbnQuY2xhc3NOYW1lKSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZENsYXNzKGVsZW1lbnQsIGMpIHtcbiAgaWYgKCFoYXNDbGFzcyhlbGVtZW50LCBjKSkge1xuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gKGVsZW1lbnQuY2xhc3NOYW1lICsgJyAnICsgYykucmVwbGFjZSgvXFxzKy9nLCAnICcpLnJlcGxhY2UoLyheIHwgJCkvZywgJycpXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNsYXNzKGVsZW1lbnQsIGMpIHtcbiAgY29uc3QgcmUgPSBuZXcgUmVnRXhwKCcoXnxcXFxccyknICsgYyArICcoXFxcXHN8JCknLCAnZycpXG4gIGVsZW1lbnQuY2xhc3NOYW1lID0gZWxlbWVudC5jbGFzc05hbWUucmVwbGFjZShyZSwgJyQxJykucmVwbGFjZSgvXFxzKy9nLCAnICcpLnJlcGxhY2UoLyheIHwgJCkvZywgJycpXG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXREZWZhdWx0UGFyZW50KGVsZW1lbnQpIHtcbiAgbGV0IHBhcmVudCA9IGVsZW1lbnQucGFyZW50Tm9kZVxuICB3aGlsZSAocGFyZW50LnBhcmVudE5vZGUgJiYgd2luZG93LmdldENvbXB1dGVkU3R5bGUocGFyZW50KVsncG9zaXRpb24nXSA9PT0gJ3N0YXRpYycgJiYgcGFyZW50LnRhZ05hbWUgIT09ICdCT0RZJykge1xuICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlXG4gIH1cbiAgcmV0dXJuIHBhcmVudFxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKGNvbnRleHQsIG9wdGlvbnMgPSB7fSkge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQgfHwgdGhpc1xuICAgIHRoaXMuZXZlbnRzID0ge31cblxuICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMub24pIHtcbiAgICAgIGZvciAoY29uc3QgW2V2ZW50TmFtZSwgZm5dIG9mIE9iamVjdC5lbnRyaWVzKG9wdGlvbnMub24pKSB7XG4gICAgICAgIHRoaXMub24oZXZlbnROYW1lLCBmbilcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBlbWl0KGV2ZW50TmFtZSkge1xuICAgIHRoaXMuaW50ZXJydXB0ZWQgPSBmYWxzZVxuICAgIGNvbnN0IGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSlcblxuICAgIGlmICghdGhpcy5ldmVudHNbZXZlbnROYW1lXSkgcmV0dXJuXG5cbiAgICBmb3IgKGNvbnN0IGZ1bmMgb2YgdGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgZnVuYy5hcHBseSh0aGlzLmNvbnRleHQsIGFyZ3MpXG4gICAgICBpZiAodGhpcy5pbnRlcnJ1cHRlZCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpbnRlcnJ1cHQoKSB7XG4gICAgdGhpcy5pbnRlcnJ1cHRlZCA9IHRydWVcbiAgfVxuXG4gIG9uKGV2ZW50TmFtZSwgZm4pIHtcbiAgICBpZiAoIXRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSBbXVxuICAgIH1cblxuICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0ucHVzaChmbilcbiAgfVxuXG4gIHByZXBlbmRPbihldmVudE5hbWUsIGZuKSB7XG4gICAgaWYgKCF0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdID0gW11cbiAgICB9XG5cbiAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLnVuc2hpZnQoZm4pXG4gIH1cblxuICB1bnN1YnNjcmliZShldmVudE5hbWUsIGZuKSB7XG4gICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5ldmVudHNbZXZlbnROYW1lXS5pbmRleE9mKGZuKVxuICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5zcGxpY2UoaW5kZXgsIDEpXG4gICAgfVxuICB9XG5cbiAgcmVzZXRFbWl0dGVyICgpIHtcbiAgICB0aGlzLmV2ZW50cyA9IHt9XG4gIH1cblxuICByZXNldE9uKGV2ZW50TmFtZSkge1xuICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSBbXVxuICB9XG59XG4iLCIvKiFcbiAqIGdldFN0eWxlUHJvcGVydHkgdjEuMC40XG4gKiBvcmlnaW5hbCBieSBrYW5nYXhcbiAqIGh0dHA6Ly9wZXJmZWN0aW9ua2lsbHMuY29tL2ZlYXR1cmUtdGVzdGluZy1jc3MtcHJvcGVydGllcy9cbiAqIE1JVCBsaWNlbnNlXG4gKi9cblxuLypqc2hpbnQgYnJvd3NlcjogdHJ1ZSwgc3RyaWN0OiB0cnVlLCB1bmRlZjogdHJ1ZSAqL1xuLypnbG9iYWwgZGVmaW5lOiBmYWxzZSwgZXhwb3J0czogZmFsc2UsIG1vZHVsZTogZmFsc2UgKi9cblxuKCBmdW5jdGlvbiggd2luZG93ICkge1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBwcmVmaXhlcyA9ICdXZWJraXQgTW96IG1zIE1zIE8nLnNwbGl0KCcgJyk7XG52YXIgZG9jRWxlbVN0eWxlID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlO1xuXG5mdW5jdGlvbiBnZXRTdHlsZVByb3BlcnR5KCBwcm9wTmFtZSApIHtcbiAgaWYgKCAhcHJvcE5hbWUgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gdGVzdCBzdGFuZGFyZCBwcm9wZXJ0eSBmaXJzdFxuICBpZiAoIHR5cGVvZiBkb2NFbGVtU3R5bGVbIHByb3BOYW1lIF0gPT09ICdzdHJpbmcnICkge1xuICAgIHJldHVybiBwcm9wTmFtZTtcbiAgfVxuXG4gIC8vIGNhcGl0YWxpemVcbiAgcHJvcE5hbWUgPSBwcm9wTmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHByb3BOYW1lLnNsaWNlKDEpO1xuXG4gIC8vIHRlc3QgdmVuZG9yIHNwZWNpZmljIHByb3BlcnRpZXNcbiAgdmFyIHByZWZpeGVkO1xuICBmb3IgKCB2YXIgaT0wLCBsZW4gPSBwcmVmaXhlcy5sZW5ndGg7IGkgPCBsZW47IGkrKyApIHtcbiAgICBwcmVmaXhlZCA9IHByZWZpeGVzW2ldICsgcHJvcE5hbWU7XG4gICAgaWYgKCB0eXBlb2YgZG9jRWxlbVN0eWxlWyBwcmVmaXhlZCBdID09PSAnc3RyaW5nJyApIHtcbiAgICAgIHJldHVybiBwcmVmaXhlZDtcbiAgICB9XG4gIH1cbn1cblxuLy8gdHJhbnNwb3J0XG5pZiAoIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcbiAgLy8gQU1EXG4gIGRlZmluZSggZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGdldFN0eWxlUHJvcGVydHk7XG4gIH0pO1xufSBlbHNlIGlmICggdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICkge1xuICAvLyBDb21tb25KUyBmb3IgQ29tcG9uZW50XG4gIG1vZHVsZS5leHBvcnRzID0gZ2V0U3R5bGVQcm9wZXJ0eTtcbn0gZWxzZSB7XG4gIC8vIGJyb3dzZXIgZ2xvYmFsXG4gIHdpbmRvdy5nZXRTdHlsZVByb3BlcnR5ID0gZ2V0U3R5bGVQcm9wZXJ0eTtcbn1cblxufSkoIHdpbmRvdyApO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldERpc3RhbmNlKHAxLCBwMikge1xuICBjb25zdCBkeCA9IHAxLnggLSBwMi54LCBkeSA9IHAxLnkgLSBwMi55XG4gIHJldHVybiBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRYRGlmZmVyZW5jZShwMSwgcDIpIHtcbiAgcmV0dXJuIE1hdGguYWJzKHAxLnggLSBwMi54KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0WURpZmZlcmVuY2UocDEsIHAyKSB7XG4gIHJldHVybiBNYXRoLmFicyhwMS55IC0gcDIueSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3Rvcnkob3B0aW9ucykge1xuICByZXR1cm4gKHAxLCBwMikgPT4ge1xuICAgIHJldHVybiBNYXRoLnNxcnQoXG4gICAgICBNYXRoLnBvdyhvcHRpb25zLnggKiBNYXRoLmFicyhwMS54IC0gcDIueCksIDIpICtcbiAgICAgIE1hdGgucG93KG9wdGlvbnMueSAqIE1hdGguYWJzKHAxLnkgLSBwMi55KSwgMilcbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluZGV4T2ZOZWFyZXN0UG9pbnQoYXJyLCB2YWwsIHJhZGl1cywgZ2V0RGlzdGFuY2VGdW5jPWdldERpc3RhbmNlKSB7XG4gIGxldCBzaXplLCBpbmRleCA9IDAsIGksIHRlbXBcbiAgaWYgKGFyci5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gLTFcbiAgfVxuICBzaXplID0gZ2V0RGlzdGFuY2VGdW5jKGFyclswXSwgdmFsKVxuICBmb3IgKGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgdGVtcCA9IGdldERpc3RhbmNlRnVuYyhhcnJbaV0sIHZhbClcbiAgICBpZiAodGVtcCA8IHNpemUpIHtcbiAgICAgIHNpemUgPSB0ZW1wXG4gICAgICBpbmRleCA9IGlcbiAgICB9XG4gIH1cbiAgaWYgKHJhZGl1cyA+PSAwICYmIHNpemUgPiByYWRpdXMpIHtcbiAgICByZXR1cm4gLTFcbiAgfVxuICByZXR1cm4gaW5kZXhcbn1cbiIsImltcG9ydCBQb2ludCBmcm9tICcuL3BvaW50J1xuaW1wb3J0IHsgZ2V0RGlzdGFuY2UgfSBmcm9tICcuL2Rpc3RhbmNlcydcblxuZXhwb3J0IGZ1bmN0aW9uIGNsYW1wKG1pbiwgbWF4LCB2YWwpIHtcbiAgcmV0dXJuIE1hdGgubWF4KG1pbiwgTWF0aC5taW4obWF4LCB2YWwpKVxufVxuXG4vL1JldHVybiBjcm9zc2luZyBwb2ludCBvZiB0d28gbGluZXNcbmV4cG9ydCBmdW5jdGlvbiBkaXJlY3RDcm9zc2luZyhMMVAxLCBMMVAyLCBMMlAxLCBMMlAyKSB7XG4gIGxldCB0ZW1wLCBrMSwgazIsIGIxLCBiMiwgeCwgeVxuICBpZiAoTDJQMS54ID09PSBMMlAyLngpIHtcbiAgICB0ZW1wID0gTDJQMVxuICAgIEwyUDEgPSBMMVAxXG4gICAgTDFQMSA9IHRlbXBcbiAgICB0ZW1wID0gTDJQMlxuICAgIEwyUDIgPSBMMVAyXG4gICAgTDFQMiA9IHRlbXBcbiAgfVxuICBpZiAoTDFQMS54ID09PSBMMVAyLngpIHtcbiAgICBrMiA9IChMMlAyLnkgLSBMMlAxLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICBiMiA9IChMMlAyLnggKiBMMlAxLnkgLSBMMlAxLnggKiBMMlAyLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICB4ID0gTDFQMS54XG4gICAgeSA9IHggKiBrMiArIGIyXG4gICAgcmV0dXJuIG5ldyBQb2ludCh4LCB5KVxuICB9IGVsc2Uge1xuICAgIGsxID0gKEwxUDIueSAtIEwxUDEueSkgLyAoTDFQMi54IC0gTDFQMS54KVxuICAgIGIxID0gKEwxUDIueCAqIEwxUDEueSAtIEwxUDEueCAqIEwxUDIueSkgLyAoTDFQMi54IC0gTDFQMS54KVxuICAgIGsyID0gKEwyUDIueSAtIEwyUDEueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgIGIyID0gKEwyUDIueCAqIEwyUDEueSAtIEwyUDEueCAqIEwyUDIueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgIHggPSAoYjEgLSBiMikgLyAoazIgLSBrMSlcbiAgICB5ID0geCAqIGsxICsgYjFcbiAgICByZXR1cm4gbmV3IFBvaW50KHgsIHkpXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kVG9TZWdtZW50KExQMSwgTFAyLCBQKSB7XG4gIGxldCB4LCB5XG4gIHggPSBjbGFtcChNYXRoLm1pbihMUDEueCwgTFAyLngpLCBNYXRoLm1heChMUDEueCwgTFAyLngpLCBQLngpXG4gIGlmICh4ICE9PSBQLngpIHtcbiAgICB5ID0gKHggPT09IExQMS54KSA/IExQMS55IDogTFAyLnlcbiAgICBQID0gbmV3IFBvaW50KHgsIHkpXG4gIH1cblxuICB5ID0gY2xhbXAoTWF0aC5taW4oTFAxLnksIExQMi55KSwgTWF0aC5tYXgoTFAxLnksIExQMi55KSwgUC55KVxuICBpZiAoeSAhPT0gUC55KSB7XG4gICAgeCA9ICh5ID09PSBMUDEueSkgPyBMUDEueCA6IExQMi54XG4gICAgUCA9IG5ldyBQb2ludCh4LCB5KVxuICB9XG5cbiAgcmV0dXJuIFBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kVG9MaW5lKEEsIEIsIFApIHtcbiAgY29uc3QgQVAgPSBuZXcgUG9pbnQoUC54IC0gQS54LCBQLnkgLSBBLnkpLFxuICAgIEFCID0gbmV3IFBvaW50KEIueCAtIEEueCwgQi55IC0gQS55KSxcbiAgICBhYjIgPSBBQi54ICogQUIueCArIEFCLnkgKiBBQi55LFxuICAgIGFwX2FiID0gQVAueCAqIEFCLnggKyBBUC55ICogQUIueSxcbiAgICB0ID0gYXBfYWIgLyBhYjJcbiAgcmV0dXJuIG5ldyBQb2ludChBLnggKyBBQi54ICogdCwgQS55ICsgQUIueSAqIHQpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb2ludE9uTGluZShMUDEsIExQMiwgcGVyY2VudCkge1xuICBjb25zdCBkeCA9IExQMi54IC0gTFAxLngsIGR5ID0gTFAyLnkgLSBMUDEueVxuICByZXR1cm4gbmV3IFBvaW50KExQMS54ICsgcGVyY2VudCAqIGR4LCBMUDEueSArIHBlcmNlbnQgKiBkeSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBvaW50T25MaW5lQnlMZW5naHQoTFAxLCBMUDIsIGxlbmdodCkge1xuICBjb25zdCBkeCA9IExQMi54IC0gTFAxLnhcbiAgY29uc3QgZHkgPSBMUDIueSAtIExQMS55XG4gIGNvbnN0IHBlcmNlbnQgPSBsZW5naHQgLyBnZXREaXN0YW5jZShMUDEsIExQMilcbiAgcmV0dXJuIG5ldyBQb2ludChMUDEueCArIHBlcmNlbnQgKiBkeCwgTFAxLnkgKyBwZXJjZW50ICogZHkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRQb2ludFRvQm91bmRQb2ludHMoYm91bmRwb2ludHMsIHBvaW50LCBpc1JpZ2h0KSB7XG4gIGNvbnN0IHJlc3VsdCA9IGJvdW5kcG9pbnRzLmZpbHRlcigoYlBvaW50KSA9PiB7XG4gICAgcmV0dXJuIGJQb2ludC55ID4gcG9pbnQueSB8fCAoaXNSaWdodCA/IGJQb2ludC54IDwgcG9pbnQueCA6IGJQb2ludC54ID4gcG9pbnQueClcbiAgfSlcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChwb2ludC55IDwgcmVzdWx0W2ldLnkpIHtcbiAgICAgIHJlc3VsdC5zcGxpY2UoaSwgMCwgcG9pbnQpXG4gICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxuICB9XG4gIHJlc3VsdC5wdXNoKHBvaW50KVxuICByZXR1cm4gcmVzdWx0XG59XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9wb2ludCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFuZ2xlRGlmZihhbHBoYSwgYmV0YSkge1xuICBjb25zdCBtaW5BbmdsZSA9IE1hdGgubWluKGFscGhhLCBiZXRhKVxuICBjb25zdCBtYXhBbmdsZSA9ICBNYXRoLm1heChhbHBoYSwgYmV0YSlcbiAgcmV0dXJuIE1hdGgubWluKG1heEFuZ2xlIC0gbWluQW5nbGUsIG1pbkFuZ2xlICsgTWF0aC5QSSoyIC0gbWF4QW5nbGUpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbmdsZShwMSwgcDIpIHtcbiAgY29uc3QgZGlmZiA9IHAyLnN1YihwMSlcbiAgcmV0dXJuIG5vcm1hbGl6ZUFuZ2xlKE1hdGguYXRhbjIoZGlmZi55LCBkaWZmLngpKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9SYWRpYW4oYW5nbGUpIHtcbiAgcmV0dXJuICgoYW5nbGUgJSAzNjApICogTWF0aC5QSSAvIDE4MClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvRGVncmVlKGFuZ2xlKSB7XG4gIHJldHVybiAoYW5nbGUgKiAxODAgLyBNYXRoLlBJKSAlIDM2MFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRBbmdsZShtaW4sIG1heCwgdmFsKSB7XG4gIGxldCBkbWluLCBkbWF4XG4gIGlmIChtaW4gPCBtYXggJiYgdmFsID4gbWluICYmIHZhbCA8IG1heCkge1xuICAgIHJldHVybiB2YWxcbiAgfSBlbHNlIGlmIChtYXggPCBtaW4gJiYgKHZhbCA8IG1heCB8fCB2YWwgPiBtaW4pKSB7XG4gICAgcmV0dXJuIHZhbFxuICB9IGVsc2Uge1xuICAgIGRtaW4gPSBnZXRBbmdsZURpZmYobWluLCB2YWwpXG4gICAgZG1heCA9IGdldEFuZ2xlRGlmZihtYXgsIHZhbClcbiAgICBpZiAoZG1pbiA8IGRtYXgpIHtcbiAgICAgIHJldHVybiBtaW5cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG1heFxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmVhcmVzdEFuZ2xlKGFyciwgYW5nbGUpIHtcbiAgbGV0IGksIHRlbXAsIGRpZmYgPSBNYXRoLlBJICogMiwgdmFsdWVcbiAgZm9yIChpID0gMDsgaSA8IGFyci5sZW5ndGg7aSsrKSB7XG4gICAgdGVtcCA9IGdldEFuZ2xlRGlmZihhcnJbaV0sIGFuZ2xlKVxuICAgIGlmIChkaWZmIDwgdGVtcCkge1xuICAgICAgZGlmZiA9IHRlbXBcbiAgICAgIHZhbHVlID0gYXJyW2ldXG4gICAgfVxuICB9XG4gIHJldHVybiB2YWx1ZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplQW5nbGUodmFsKSB7XG4gIHdoaWxlICh2YWwgPCAwKSB7XG4gICAgdmFsICs9IDIgKiBNYXRoLlBJXG4gIH1cbiAgd2hpbGUgKHZhbCA+IDIgKiBNYXRoLlBJKSB7XG4gICAgdmFsIC09IDIgKiBNYXRoLlBJXG4gIH1cbiAgcmV0dXJuIHZhbFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKGFuZ2xlLCBsZW5ndGgsIGNlbnRlcikge1xuICBjZW50ZXIgPSBjZW50ZXIgfHwgbmV3IFBvaW50KDAsIDApXG4gIHJldHVybiBjZW50ZXIuYWRkKG5ldyBQb2ludChsZW5ndGggKiBNYXRoLmNvcyhhbmdsZSksIGxlbmd0aCAqIE1hdGguc2luKGFuZ2xlKSkpXG59XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9nZW9tZXRyeS9wb2ludCdcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSAnLi9nZW9tZXRyeS9yZWN0YW5nbGUnXG5pbXBvcnQge1xuICBnZXRQb2ludE9uTGluZUJ5TGVuZ2h0LFxuICBkaXJlY3RDcm9zc2luZyxcbiAgYm91bmRUb0xpbmVcbn0gZnJvbSAnLi9nZW9tZXRyeS9ib3VuZHMnXG5cbmltcG9ydCB7XG4gIGdldEFuZ2xlLFxuICBub3JtYWxpemVBbmdsZSxcbiAgYm91bmRBbmdsZSxcbiAgZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtXG59IGZyb20gJy4vZ2VvbWV0cnkvYW5nbGVzJ1xuXG5leHBvcnQgY2xhc3MgQm91bmQge1xuICBjb25zdHJ1Y3RvciAoKSB7fVxuXG4gIGJvdW5kKHBvaW50LCBfc2l6ZSkge1xuICAgIHJldHVybiBwb2ludFxuICB9XG5cbiAgcmVmcmVzaCAoKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb1JlY3RhbmdsZSBleHRlbmRzIEJvdW5kIHtcbiAgY29uc3RydWN0b3IocmVjdGFuZ2xlKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMucmVjdGFuZ2xlID0gcmVjdGFuZ2xlXG4gIH1cblxuICBib3VuZChwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IGNhbGNQb2ludCA9IHBvaW50LmNsb25lKClcbiAgICBjb25zdCByZWN0UDIgPSB0aGlzLnJlY3RhbmdsZS5nZXRQMygpXG5cbiAgICBpZiAodGhpcy5yZWN0YW5nbGUucG9zaXRpb24ueCA+IGNhbGNQb2ludC54KSB7XG4gICAgICAoY2FsY1BvaW50LnggPSB0aGlzLnJlY3RhbmdsZS5wb3NpdGlvbi54KVxuICAgIH1cbiAgICBpZiAodGhpcy5yZWN0YW5nbGUucG9zaXRpb24ueSA+IGNhbGNQb2ludC55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHRoaXMucmVjdGFuZ2xlLnBvc2l0aW9uLnlcbiAgICB9XG4gICAgaWYgKHJlY3RQMi54IDwgY2FsY1BvaW50LnggKyBzaXplLngpIHtcbiAgICAgIGNhbGNQb2ludC54ID0gcmVjdFAyLnggLSBzaXplLnhcbiAgICB9XG4gICAgaWYgKHJlY3RQMi55IDwgY2FsY1BvaW50LnkgKyBzaXplLnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gcmVjdFAyLnkgLSBzaXplLnlcbiAgICB9XG5cbiAgICByZXR1cm4gY2FsY1BvaW50XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9FbGVtZW50IGV4dGVuZHMgQm91bmRUb1JlY3RhbmdsZSB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIHBhcmVudCkge1xuICAgIHN1cGVyKFJlY3RhbmdsZS5mcm9tRWxlbWVudChlbGVtZW50LCBwYXJlbnQpKVxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudFxuICB9XG5cbiAgcmVmcmVzaCAoKSB7XG4gICAgdGhpcy5yZWN0YW5nbGUgPSBSZWN0YW5nbGUuZnJvbUVsZW1lbnQodGhpcy5lbGVtZW50LCB0aGlzLnBhcmVudClcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb0xpbmVYIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3Rvcih4LCBzdGFydFksIGVuZFkpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy54ID0geFxuICAgIHRoaXMuc3RhcnRZID0gc3RhcnRZXG4gICAgdGhpcy5lbmRZID0gZW5kWVxuICB9XG5cbiAgYm91bmQocG9pbnQsIHNpemUpIHtcbiAgICBjb25zdCBjYWxjUG9pbnQgPSBwb2ludC5jbG9uZSgpXG5cbiAgICBjYWxjUG9pbnQueCA9IHRoaXMueFxuICAgIGlmICh0aGlzLnN0YXJ0WSA+IGNhbGNQb2ludC55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHRoaXMuc3RhcnRZXG4gICAgfVxuICAgIGlmICh0aGlzLmVuZFkgPCBjYWxjUG9pbnQueSArIHNpemUueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSB0aGlzLmVuZFkgLSBzaXplLnlcbiAgICB9XG5cbiAgICByZXR1cm4gY2FsY1BvaW50XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9MaW5lWSBleHRlbmRzIEJvdW5kIHtcbiAgY29uc3RydWN0b3IoeSwgc3RhcnRYLCBlbmRYKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMueSA9IHlcbiAgICB0aGlzLnN0YXJ0WCA9IHN0YXJ0WFxuICAgIHRoaXMuZW5kWCA9IGVuZFhcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgY2FsY1BvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIGNhbGNQb2ludC55ID0gdGhpcy55XG4gICAgaWYgKHRoaXMuc3RhcnRYID4gY2FsY1BvaW50LngpIHtcbiAgICAgIGNhbGNQb2ludC54ID0gdGhpcy5zdGFydFhcbiAgICB9XG4gICAgaWYgKHRoaXMuZW5kWCA8IGNhbGNQb2ludC54ICsgc2l6ZS54KSB7XG4gICAgICBjYWxjUG9pbnQueCA9IHRoaXMuZW5kWCAtIHNpemUueFxuICAgIH1cbiAgICByZXR1cm4gY2FsY1BvaW50XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9MaW5lIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3RvcihzdGFydFBvaW50LCBlbmRQb2ludCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnN0YXJ0UG9pbnQgPSBzdGFydFBvaW50XG4gICAgdGhpcy5lbmRQb2ludCA9IGVuZFBvaW50XG4gICAgY29uc3QgYWxwaGEgPSBNYXRoLmF0YW4yKGVuZFBvaW50LnkgLSBzdGFydFBvaW50LnksIGVuZFBvaW50LnggLSBzdGFydFBvaW50LngpXG4gICAgY29uc3QgYmV0YSA9IGFscGhhICsgTWF0aC5QSSAvIDJcbiAgICB0aGlzLnNvbWVLID0gMTBcbiAgICB0aGlzLmNvc0JldGEgPSBNYXRoLmNvcyhiZXRhKVxuICAgIHRoaXMuc2luQmV0YSA9IE1hdGguc2luKGJldGEpXG4gIH1cblxuICBib3VuZChwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IHBvaW50MiA9IG5ldyBQb2ludChcbiAgICAgIHBvaW50LnggKyB0aGlzLnNvbWVLICogdGhpcy5jb3NCZXRhLFxuICAgICAgcG9pbnQueSArIHRoaXMuc29tZUsgKiB0aGlzLnNpbkJldGFcbiAgICApXG5cbiAgICBjb25zdCBuZXdFbmRQb2ludCA9IGdldFBvaW50T25MaW5lQnlMZW5naHQodGhpcy5lbmRQb2ludCwgdGhpcy5zdGFydFBvaW50LCBzaXplLngpXG4gICAgY29uc3QgcG9pbnRDcm9zc2luZyA9IGRpcmVjdENyb3NzaW5nKHRoaXMuc3RhcnRQb2ludCwgdGhpcy5lbmRQb2ludCwgcG9pbnQsIHBvaW50MilcblxuICAgIHJldHVybiBib3VuZFRvTGluZSh0aGlzLnN0YXJ0UG9pbnQsIG5ld0VuZFBvaW50LCBwb2ludENyb3NzaW5nKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvQ2lyY2xlIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3RvcihjZW50ZXIsIHJhZGl1cykge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLmNlbnRlciA9IGNlbnRlclxuICAgIHRoaXMucmFkaXVzID0gcmFkaXVzXG4gIH1cblxuICBib3VuZChwb2ludCwgX3NpemUpIHtcbiAgICByZXR1cm4gZ2V0UG9pbnRPbkxpbmVCeUxlbmdodCh0aGlzLmNlbnRlciwgcG9pbnQsIHRoaXMucmFkaXVzKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvQXJjIGV4dGVuZHMgQm91bmRUb0NpcmNsZSB7XG4gIGNvbnN0cnVjdG9yKGNlbnRlciwgcmFkaXVzLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSkge1xuICAgIHN1cGVyKGNlbnRlciwgcmFkaXVzKVxuICAgIHRoaXMuX3N0YXJ0QW5nbGUgPSBzdGFydEFuZ2xlXG4gICAgdGhpcy5fZW5kQW5nbGUgPSBlbmRBbmdsZVxuICB9XG5cbiAgc3RhcnRBbmdsZSgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMuX3N0YXJ0QW5nbGUgPT09ICdmdW5jdGlvbicgPyB0aGlzLl9zdGFydEFuZ2xlKCkgOiB0aGlzLl9zdGFydEFuZ2xlXG4gIH1cblxuICBlbmRBbmdsZSgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMuX2VuZEFuZ2xlID09PSAnZnVuY3Rpb24nID8gdGhpcy5fZW5kQW5nbGUoKSA6IHRoaXMuX2VuZEFuZ2xlXG4gIH1cblxuICBib3VuZChwb2ludCwgX3NpemUpIHtcbiAgICBsZXQgYW5nbGUgPSBnZXRBbmdsZSh0aGlzLmNlbnRlciwgcG9pbnQpXG4gICAgYW5nbGUgPSBub3JtYWxpemVBbmdsZShhbmdsZSlcbiAgICBhbmdsZSA9IGJvdW5kQW5nbGUodGhpcy5zdGFydEFuZ2xlKCksIHRoaXMuZW5kQW5nbGUoKSwgYW5nbGUpXG4gICAgcmV0dXJuIGdldFBvaW50RnJvbVJhZGlhbFN5c3RlbShhbmdsZSwgdGhpcy5yYWRpdXMsIHRoaXMuY2VudGVyKVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhcnJheSwgdmFsKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoYXJyYXlbaV0gPT09IHZhbCkge1xuICAgICAgYXJyYXkuc3BsaWNlKGksIDEpXG4gICAgICBpLS1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycmF5XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByYW5nZShzdGFydCwgc3RvcCwgc3RlcCkge1xuICBjb25zdCByZXN1bHQgPSBbXVxuICBpZiAodHlwZW9mIHN0b3AgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgc3RvcCA9IHN0YXJ0XG4gICAgc3RhcnQgPSAwXG4gIH1cbiAgaWYgKHR5cGVvZiBzdGVwID09PSAndW5kZWZpbmVkJykge1xuICAgIHN0ZXAgPSAxXG4gIH1cbiAgaWYgKChzdGVwID4gMCAmJiBzdGFydCA+PSBzdG9wKSB8fCAoc3RlcCA8IDAgJiYgc3RhcnQgPD0gc3RvcCkpIHtcbiAgICByZXR1cm4gW11cbiAgfVxuICBmb3IgKGxldCBpID0gc3RhcnQ7IHN0ZXAgPiAwID8gaSA8IHN0b3AgOiBpID4gc3RvcDsgaSArPSBzdGVwKSB7XG4gICAgcmVzdWx0LnB1c2goaSlcbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9nZW9tZXRyeS9wb2ludCdcbmltcG9ydCB7IGFkZFBvaW50VG9Cb3VuZFBvaW50cyB9IGZyb20gJy4vZ2VvbWV0cnkvYm91bmRzJ1xuXG5pbXBvcnQge1xuICBpbmRleE9mTmVhcmVzdFBvaW50LFxuICBnZXREaXN0YW5jZVxufSBmcm9tICcuL2dlb21ldHJ5L2Rpc3RhbmNlcydcblxuY2xhc3MgQmFzaWNTdHJhdGVneSB7XG4gIGNvbnN0cnVjdG9yKHJlY3RhbmdsZSwgb3B0aW9ucz17fSkge1xuICAgIHRoaXMucmVjdGFuZ2xlID0gcmVjdGFuZ2xlXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9uc1xuICB9XG5cbiAgZ2V0IGJvdW5kUmVjdCAoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGlzLnJlY3RhbmdsZSA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMucmVjdGFuZ2xlKCkgOiB0aGlzLnJlY3RhbmdsZVxuICB9XG59XG5cbmNsYXNzIE5vdENyb3NzaW5nU3RyYXRlZ3kgZXh0ZW5kcyBCYXNpY1N0cmF0ZWd5IHtcbiAgcG9zaXRpb25pbmcgKHJlY3RhbmdsZUxpc3QsIGluZGV4ZXNPZk5ld3MpIHtcbiAgICBjb25zdCBzdGF0aWNSZWN0YW5nbGVJbmRleGVzID0gcmVjdGFuZ2xlTGlzdC5yZWR1Y2UoKGluZGV4ZXMsIF9yZWN0LCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGluZGV4ZXNPZk5ld3MuaW5kZXhPZihpbmRleCkgPT09IC0xKSB7XG4gICAgICAgIGluZGV4ZXMucHVzaChpbmRleClcbiAgICAgIH1cbiAgICAgIHJldHVybiBpbmRleGVzXG4gICAgfSwgW10pXG5cbiAgICBpbmRleGVzT2ZOZXdzLmZvckVhY2goKGluZGV4KSA9PiB7XG4gICAgICBsZXQgcmVjdCA9IHJlY3RhbmdsZUxpc3RbaW5kZXhdXG4gICAgICBsZXQgcmVtb3ZhYmxlID0gZmFsc2VcblxuICAgICAgc3RhdGljUmVjdGFuZ2xlSW5kZXhlcy5mb3JFYWNoKChpbmRleE9mU3RhdGljKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YXRpY1JlY3QgPSByZWN0YW5nbGVMaXN0W2luZGV4T2ZTdGF0aWNdXG4gICAgICAgIHJlY3QgPSBzdGF0aWNSZWN0Lm1vdmVUb0JvdW5kKHJlY3QpXG4gICAgICB9KVxuXG4gICAgICByZW1vdmFibGUgPSBzdGF0aWNSZWN0YW5nbGVJbmRleGVzLnNvbWUoKGluZGV4T2ZTdGF0aWMpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhdGljUmVjdCA9IHJlY3RhbmdsZUxpc3RbaW5kZXhPZlN0YXRpY11cbiAgICAgICAgcmV0dXJuICAhIXN0YXRpY1JlY3QuYW5kKHJlY3QpXG4gICAgICB9KSB8fCByZWN0LmFuZCh0aGlzLmJvdW5kUmVjdCkuZ2V0U3F1YXJlKCkgIT09IHJlY3QuZ2V0U3F1YXJlKClcblxuICAgICAgaWYgKHJlbW92YWJsZSkge1xuICAgICAgICByZWN0LnJlbW92YWJsZSA9IHRydWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMucHVzaChpbmRleClcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiByZWN0YW5nbGVMaXN0XG4gIH1cblxuICBzb3J0aW5nKG9kbERyYWdnYWJsZXNMaXN0LCBuZXdEcmFnZ2FibGVzLCBpbmRleE9mTmV3cykge1xuICAgIGNvbnN0IGRyYWdnYWJsZXMgPSBvZGxEcmFnZ2FibGVzTGlzdC5jb25jYXQobmV3RHJhZ2dhYmxlcylcbiAgICBuZXdEcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgaW5kZXhPZk5ld3MucHVzaChkcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSlcbiAgICB9KVxuICAgIHJldHVybiBkcmFnZ2FibGVzXG4gIH1cbn1cblxuY2xhc3MgRmxvYXRMZWZ0U3RyYXRlZ3kgZXh0ZW5kcyBCYXNpY1N0cmF0ZWd5IHtcbiAgY29uc3RydWN0b3IocmVjdGFuZ2xlLCBvcHRpb25zPXt9KSB7XG4gICAgc3VwZXIocmVjdGFuZ2xlLCBvcHRpb25zKVxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgcmVtb3ZhYmxlOiB0cnVlXG4gICAgfSwgb3B0aW9ucylcblxuICAgIHRoaXMucmFkaXVzID0gb3B0aW9ucy5yYWRpdXMgfHwgODBcblxuICAgIHRoaXMucGFkZGluZ1RvcExlZnQgPSBvcHRpb25zLnBhZGRpbmdUb3BMZWZ0IHx8IG5ldyBQb2ludCgwLCAwKVxuICAgIHRoaXMucGFkZGluZ0JvdHRvbVJpZ2h0ID0gb3B0aW9ucy5wYWRkaW5nQm90dG9tUmlnaHQgfHwgbmV3IFBvaW50KDAsIDApXG4gICAgdGhpcy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgPSBvcHRpb25zLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyB8fCAwXG5cbiAgICB0aGlzLmdldERpc3RhbmNlID0gb3B0aW9ucy5nZXREaXN0YW5jZSB8fCBnZXREaXN0YW5jZVxuICAgIHRoaXMuZ2V0UG9zaXRpb24gPSBvcHRpb25zLmdldFBvc2l0aW9uIHx8ICgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucG9zaXRpb24pXG4gIH1cblxuICBwb3NpdGlvbmluZyhyZWN0YW5nbGVMaXN0LCBfaW5kZXhlc09mTmV3cykge1xuICAgIGNvbnN0IGJvdW5kUmVjdCA9IHRoaXMuYm91bmRSZWN0XG4gICAgY29uc3QgcmVjdFAyID0gYm91bmRSZWN0LmdldFAyKClcbiAgICBsZXQgYm91bmRhcnlQb2ludHMgPSBbYm91bmRSZWN0LnBvc2l0aW9uXVxuXG4gICAgcmVjdGFuZ2xlTGlzdC5mb3JFYWNoKChyZWN0LCByZWN0SW5kZXgpID0+IHtcbiAgICAgIGxldCBwb3NpdGlvbiwgaXNWYWxpZCA9IGZhbHNlXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvdW5kYXJ5UG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHBvc2l0aW9uID0gbmV3IFBvaW50KFxuICAgICAgICAgIGJvdW5kYXJ5UG9pbnRzW2ldLnggKyB0aGlzLnBhZGRpbmdUb3BMZWZ0LngsXG4gICAgICAgICAgaSA+IDAgPyAoYm91bmRhcnlQb2ludHNbaSAtIDFdLnkgKyB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcykgOiAoYm91bmRSZWN0LnBvc2l0aW9uLnkgKyB0aGlzLnBhZGRpbmdUb3BMZWZ0LnkpXG4gICAgICAgIClcblxuICAgICAgICBpc1ZhbGlkID0gKHBvc2l0aW9uLnggKyByZWN0LnNpemUueCA8IHJlY3RQMi54KVxuXG4gICAgICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgcG9zaXRpb24gPSBuZXcgUG9pbnQoXG4gICAgICAgICAgYm91bmRSZWN0LnBvc2l0aW9uLnggKyB0aGlzLnBhZGRpbmdUb3BMZWZ0LngsXG4gICAgICAgICAgYm91bmRhcnlQb2ludHNbYm91bmRhcnlQb2ludHMubGVuZ3RoIC0gMV0ueSArIChyZWN0SW5kZXggPiAwID8gdGhpcy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgOiB0aGlzLnBhZGRpbmdUb3BMZWZ0LnkpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgcmVjdC5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnJlbW92YWJsZSAmJiByZWN0LmdldFAzKCkueSA+IGJvdW5kUmVjdC5nZXRQMygpLnkpIHtcbiAgICAgICAgcmVjdC5yZW1vdmFibGUgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGJvdW5kYXJ5UG9pbnRzID0gYWRkUG9pbnRUb0JvdW5kUG9pbnRzKGJvdW5kYXJ5UG9pbnRzLCByZWN0LmdldFAzKCkuYWRkKHRoaXMucGFkZGluZ0JvdHRvbVJpZ2h0KSlcbiAgICB9KVxuICAgIHJldHVybiByZWN0YW5nbGVMaXN0XG4gIH1cblxuICBzb3J0aW5nKG9kbERyYWdnYWJsZXNMaXN0LCBuZXdEcmFnZ2FibGVzLCBpbmRleE9mTmV3cykge1xuICAgIGNvbnN0IG5ld0xpc3QgPSBvZGxEcmFnZ2FibGVzTGlzdC5jb25jYXQoKVxuICAgIGNvbnN0IGxpc3RPbGRQb3NpdGlvbiA9IG9kbERyYWdnYWJsZXNMaXN0Lm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUuZ2V0UG9zaXRpb24oKSlcbiAgICBuZXdEcmFnZ2FibGVzLmZvckVhY2goKG5ld0RyYWdnYWJsZSkgPT4ge1xuICAgICAgbGV0IGluZGV4ID0gaW5kZXhPZk5lYXJlc3RQb2ludChsaXN0T2xkUG9zaXRpb24sIHRoaXMuZ2V0UG9zaXRpb24obmV3RHJhZ2dhYmxlKSwgdGhpcy5yYWRpdXMsIHRoaXMuZ2V0RGlzdGFuY2UpXG4gICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgIGluZGV4ID0gbmV3TGlzdC5sZW5ndGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluZGV4ID0gbmV3TGlzdC5pbmRleE9mKG9kbERyYWdnYWJsZXNMaXN0W2luZGV4XSlcbiAgICAgIH1cbiAgICAgIG5ld0xpc3Quc3BsaWNlKGluZGV4LCAwLCBuZXdEcmFnZ2FibGUpXG4gICAgfSlcbiAgICBuZXdEcmFnZ2FibGVzLmZvckVhY2goKG5ld0RyYWdnYWJsZSkgPT4ge1xuICAgICAgaW5kZXhPZk5ld3MucHVzaChuZXdMaXN0LmluZGV4T2YobmV3RHJhZ2dhYmxlKSlcbiAgICB9KVxuICAgIHJldHVybiBuZXdMaXN0XG4gIH1cbn1cblxuY2xhc3MgRmxvYXRSaWdodFN0cmF0ZWd5IGV4dGVuZHMgRmxvYXRMZWZ0U3RyYXRlZ3kge1xuICBjb25zdHJ1Y3RvcihyZWN0YW5nbGUsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcihyZWN0YW5nbGUsIG9wdGlvbnMpXG5cbiAgICB0aGlzLnBhZGRpbmdUb3BSaWdodCA9IG9wdGlvbnMucGFkZGluZ1RvcFJpZ2h0IHx8IG5ldyBQb2ludCg1LCA1KVxuICAgIHRoaXMucGFkZGluZ0JvdHRvbUxlZnQgPSBvcHRpb25zLnBhZGRpbmdCb3R0b21MZWZ0IHx8IG5ldyBQb2ludCgwLCAwKVxuICAgIHRoaXMueUdhcEJldHdlZW5EcmFnZ2FibGVzID0gb3B0aW9ucy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgfHwgMFxuXG4gICAgdGhpcy5wYWRkaW5nQm90dG9tTmVnTGVmdCA9IG5ldyBQb2ludCgtdGhpcy5wYWRkaW5nQm90dG9tTGVmdC54LCB0aGlzLnBhZGRpbmdCb3R0b21MZWZ0LnkpXG4gIH1cblxuICBwb3NpdGlvbmluZyhyZWN0YW5nbGVMaXN0LCBfaW5kZXhlc09mTmV3cykge1xuICAgIGNvbnN0IGJvdW5kUmVjdCA9IHRoaXMuYm91bmRSZWN0XG4gICAgbGV0IGJvdW5kYXJ5UG9pbnRzID0gW2JvdW5kUmVjdC5nZXRQMigpXVxuXG4gICAgcmVjdGFuZ2xlTGlzdC5mb3JFYWNoKChyZWN0LCByZWN0SW5kZXgpID0+IHtcbiAgICAgIGxldCBwb3NpdGlvbiwgaXNWYWxpZCA9IGZhbHNlXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvdW5kYXJ5UG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHBvc2l0aW9uID0gbmV3IFBvaW50KFxuICAgICAgICAgIGJvdW5kYXJ5UG9pbnRzW2ldLnggLSByZWN0LnNpemUueCAtIHRoaXMucGFkZGluZ1RvcFJpZ2h0LngsXG4gICAgICAgICAgaSA+IDAgPyAoYm91bmRhcnlQb2ludHNbaSAtIDFdLnkgKyB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcykgOiAoYm91bmRSZWN0LnBvc2l0aW9uLnkgKyB0aGlzLnBhZGRpbmdUb3BSaWdodC55KVxuICAgICAgICApXG5cbiAgICAgICAgaXNWYWxpZCA9IChwb3NpdGlvbi54ID4gcmVjdC5wb3NpdGlvbi54KVxuICAgICAgICBpZiAoaXNWYWxpZCkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICBwb3NpdGlvbiA9IG5ldyBQb2ludChcbiAgICAgICAgICBib3VuZFJlY3QuZ2V0UDIoKS54ICAtIHJlY3Quc2l6ZS54IC0gdGhpcy5wYWRkaW5nVG9wUmlnaHQueCxcbiAgICAgICAgICBib3VuZGFyeVBvaW50c1tib3VuZGFyeVBvaW50cy5sZW5ndGggLSAxXS55ICsgKHJlY3RJbmRleCA+IDAgPyB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyA6IHRoaXMucGFkZGluZ1RvcFJpZ2h0LnkpXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIHJlY3QucG9zaXRpb24gPSBwb3NpdGlvblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZW1vdmFibGUgJiYgcmVjdC5nZXRQNCgpLnkgPiBib3VuZFJlY3QuZ2V0UDQoKS55KSB7XG4gICAgICAgIHJlY3QucmVtb3ZhYmxlID0gdHJ1ZVxuICAgICAgfVxuICAgICAgYm91bmRhcnlQb2ludHMgPSBhZGRQb2ludFRvQm91bmRQb2ludHMoYm91bmRhcnlQb2ludHMsIHJlY3QuZ2V0UDQoKS5hZGQodGhpcy5wYWRkaW5nQm90dG9tTmVnTGVmdCksIHRydWUpXG4gICAgfSlcbiAgICByZXR1cm4gcmVjdGFuZ2xlTGlzdFxuICB9XG59XG5cbmV4cG9ydCB7IE5vdENyb3NzaW5nU3RyYXRlZ3ksIEZsb2F0TGVmdFN0cmF0ZWd5LCBGbG9hdFJpZ2h0U3RyYXRlZ3kgfVxuIiwiaW1wb3J0IHJhbmdlIGZyb20gJy4vdXRpbHMvcmFuZ2UuanMnXG5pbXBvcnQgcmVtb3ZlSXRlbSBmcm9tICcuL3V0aWxzL3JlbW92ZS1hcnJheS1pdGVtJ1xuaW1wb3J0IGdldERlZmF1bHRQYXJlbnQgZnJvbSAnLi91dGlscy9nZXQtZGVmYXVsdC1wYXJlbnQnXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnRFbWl0dGVyJ1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tICcuL2dlb21ldHJ5L3JlY3RhbmdsZSdcbmltcG9ydCB7IHRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3RvcnkgfSBmcm9tICcuL2dlb21ldHJ5L2Rpc3RhbmNlcydcbmltcG9ydCB7IHNjb3BlcywgZGVmYXVsdFNjb3BlIH0gZnJvbSAnLi9zY29wZSdcblxuaW1wb3J0IHsgRmxvYXRMZWZ0U3RyYXRlZ3kgfSBmcm9tICcuL3Bvc2l0aW9uaW5nJ1xuXG5jb25zdCBhZGRUb0RlZmF1bHRTY29wZSA9IGZ1bmN0aW9uKHRhcmdldCkge1xuICBkZWZhdWx0U2NvcGUuYWRkVGFyZ2V0KHRhcmdldClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFyZ2V0IGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgZHJhZ2dhYmxlcywgb3B0aW9ucyA9IHt9KSB7XG4gICAgc3VwZXIodW5kZWZpbmVkLCBvcHRpb25zKVxuICAgIGNvbnN0IHRhcmdldCA9IHRoaXNcbiAgICBjb25zdCBwYXJlbnQgPSBvcHRpb25zLnBhcmVudCB8fCBnZXREZWZhdWx0UGFyZW50KGVsZW1lbnQpXG5cbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHRpbWVFbmQ6IDIwMCxcbiAgICAgIHRpbWVFeGNhbmdlOiA0MDAsXG4gICAgICBwYXJlbnQ6IHBhcmVudFxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0aGlzLnBvc2l0aW9uaW5nU3RyYXRlZ3kgPSBvcHRpb25zLnN0cmF0ZWd5IHx8IG5ldyBGbG9hdExlZnRTdHJhdGVneShcbiAgICAgIHRoaXMuZ2V0UmVjdGFuZ2xlLmJpbmQodGhpcyksXG4gICAgICB7XG4gICAgICAgIHJhZGl1czogODAsXG4gICAgICAgIGdldERpc3RhbmNlOiB0cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5KHsgeDogMSwgeTogNCB9KSxcbiAgICAgICAgcmVtb3ZhYmxlOiB0cnVlXG4gICAgICB9XG4gICAgKVxuXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUudGFyZ2V0cy5wdXNoKHRhcmdldCkpXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gZHJhZ2dhYmxlc1xuXG4gICAgVGFyZ2V0LmVtaXR0ZXIuZW1pdCgndGFyZ2V0OmNyZWF0ZScsIHRoaXMpXG5cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgcG9zaXRpb25pbmcgKGRyYWdnYWJsZXMsIGluZGV4ZXNPZk5ldykge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uaW5nU3RyYXRlZ3kucG9zaXRpb25pbmcoZHJhZ2dhYmxlcywgaW5kZXhlc09mTmV3KVxuICB9XG5cbiAgc29ydGluZyAob2xkRHJhZ2dhYmxlcywgbmV3RHJhZ2dhYmxlcywgaW5kZXhPZk5ld3MpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbmluZ1N0cmF0ZWd5LnNvcnRpbmcob2xkRHJhZ2dhYmxlcywgbmV3RHJhZ2dhYmxlcywgaW5kZXhPZk5ld3MpXG4gIH1cblxuICBpbml0KCkge1xuICAgIGxldCByZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXdcblxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzID0gdGhpcy5kcmFnZ2FibGVzLmZpbHRlcigoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBsZXQgZWxlbWVudCA9IGRyYWdnYWJsZS5lbGVtZW50LnBhcmVudE5vZGVcbiAgICAgIHdoaWxlIChlbGVtZW50KSB7XG4gICAgICAgIGlmIChlbGVtZW50ID09PSB0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGVcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH0pXG5cbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMubGVuZ3RoKSB7XG4gICAgICBpbmRleGVzT2ZOZXcgPSByYW5nZSh0aGlzLmlubmVyRHJhZ2dhYmxlcy5sZW5ndGgpXG4gICAgICByZWN0YW5nbGVzID0gdGhpcy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgICB9KSwgaW5kZXhlc09mTmV3KVxuICAgICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXcpXG4gICAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHRoaXMuZW1pdCgndGFyZ2V0OmFkZCcsIGRyYWdnYWJsZSkpXG4gICAgfVxuICB9XG5cbiAgZ2V0UmVjdGFuZ2xlKCkge1xuICAgIHJldHVybiBSZWN0YW5nbGUuZnJvbUVsZW1lbnQoXG4gICAgICB0aGlzLmVsZW1lbnQsXG4gICAgICB0aGlzLm9wdGlvbnMucGFyZW50LFxuICAgICAgdGhpcy5vcHRpb25zLmlzQ29udGVudEJveFNpemUsXG4gICAgICB0cnVlXG4gICAgKVxuICB9XG5cbiAgY2F0Y2hEcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5jYXRjaERyYWdnYWJsZSkge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5jYXRjaERyYWdnYWJsZSh0aGlzLCBkcmFnZ2FibGUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRhcmdldFJlY3RhbmdsZSA9IHRoaXMuZ2V0UmVjdGFuZ2xlKClcbiAgICAgIGNvbnN0IGRyYWdnYWJsZVNxdWFyZSA9IGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKS5nZXRTcXVhcmUoKVxuXG4gICAgICByZXR1cm4gZHJhZ2dhYmxlU3F1YXJlIDwgdGFyZ2V0UmVjdGFuZ2xlLmdldFNxdWFyZSgpXG4gICAgICAgICAgICAgICYmIHRhcmdldFJlY3RhbmdsZS5pbmNsdWRlUG9pbnQoZHJhZ2dhYmxlLmdldENlbnRlcigpKVxuICAgIH1cbiAgfVxuXG4gIGdldFBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFJlY3RhbmdsZSgpLnBvc2l0aW9uXG4gIH1cblxuICBnZXRTaXplKCkge1xuICAgIHJldHVybiB0aGlzLmdldFJlY3RhbmdsZSgpLnNpemVcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgc2NvcGVzLmZvckVhY2goKHNjb3BlKSA9PiByZW1vdmVJdGVtKHNjb3BlLnRhcmdldHMsIHRoaXMpKVxuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBbXSlcbiAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIFtdLCAwKVxuICB9XG5cbiAgb25FbmQoZHJhZ2dhYmxlKSB7XG4gICAgY29uc3QgbmV3RHJhZ2dhYmxlc0luZGV4ID0gW11cbiAgICBjb25zdCBpbmNsdWRlUG9pbnQgPSB0aGlzLmdldFJlY3RhbmdsZSgpLmluY2x1ZGVQb2ludChkcmFnZ2FibGUuZ2V0UG9zaXRpb24oKSlcblxuICAgIGlmICghaW5jbHVkZVBvaW50KSB7XG4gICAgICBpZiAodGhpcy5nZXRSZWN0YW5nbGUoKS5pbmNsdWRlUG9pbnQoZHJhZ2dhYmxlLmdldENlbnRlcigpKSkge1xuICAgICAgICBkcmFnZ2FibGUucG9zaXRpb24gPSBkcmFnZ2FibGUuZ2V0Q2VudGVyKCkuY2xvbmUoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5lbWl0KCd0YXJnZXQ6YmVmb3JlQWRkJywgZHJhZ2dhYmxlKVxuXG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMgPSB0aGlzLnNvcnRpbmcodGhpcy5pbm5lckRyYWdnYWJsZXMsIFtkcmFnZ2FibGVdLCBuZXdEcmFnZ2FibGVzSW5kZXgpXG4gICAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgbmV3RHJhZ2dhYmxlc0luZGV4KVxuXG4gICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBuZXdEcmFnZ2FibGVzSW5kZXgpXG4gICAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTEpIHtcbiAgICAgIHRoaXMuYWRkUmVtb3ZlT25Nb3ZlKGRyYWdnYWJsZSlcbiAgICB9XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIHNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIGluZGV4ZXNPZk5ldywgdGltZSkge1xuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnNsaWNlKDApLmZvckVhY2goKGRyYWdnYWJsZSwgaSkgPT4ge1xuICAgICAgY29uc3QgcmVjdCA9IHJlY3RhbmdsZXNbaV0sXG4gICAgICAgIHRpbWVFbmQgPSB0aW1lIHx8IHRpbWUgPT09IDAgPyB0aW1lIDogaW5kZXhlc09mTmV3LmluZGV4T2YoaSkgIT09IC0xID8gdGhpcy5vcHRpb25zLnRpbWVFbmQgOiB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2VcblxuICAgICAgaWYgKHJlY3QucmVtb3ZhYmxlKSB7XG4gICAgICAgIGRyYWdnYWJsZS5tb3ZlKGRyYWdnYWJsZS5pbml0aWFsUG9zaXRpb24sIHRpbWVFbmQsIHRydWUsIHRydWUpXG4gICAgICAgIHJlbW92ZUl0ZW0odGhpcy5pbm5lckRyYWdnYWJsZXMsIGRyYWdnYWJsZSlcbiAgICAgICAgdGhpcy5lbWl0KCd0YXJnZXQ6cmVtb3ZlJywgZHJhZ2dhYmxlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZHJhZ2dhYmxlLm1vdmUocmVjdC5wb3NpdGlvbiwgdGltZUVuZCwgdHJ1ZSwgdHJ1ZSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgYWRkKGRyYWdnYWJsZSwgdGltZSkge1xuICAgIGNvbnN0IG5ld0RyYWdnYWJsZXNJbmRleCA9IHRoaXMuaW5uZXJEcmFnZ2FibGVzLmxlbmd0aFxuXG4gICAgdGhpcy5lbWl0KCd0YXJnZXQ6YmVmb3JlQWRkJywgZHJhZ2dhYmxlKVxuXG4gICAgdGhpcy5wdXNoSW5uZXJEcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICAgIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgfSksIG5ld0RyYWdnYWJsZXNJbmRleCwgZHJhZ2dhYmxlKVxuXG4gICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBbbmV3RHJhZ2dhYmxlc0luZGV4XSwgdGltZSB8fCAwKVxuICAgIGlmICh0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkgIT09IC0xKSB7XG4gICAgICB0aGlzLmFkZFJlbW92ZU9uTW92ZShkcmFnZ2FibGUpXG4gICAgfVxuICB9XG5cbiAgcHVzaElubmVyRHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIGlmICh0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSk9PT0tMSkge1xuICAgICAgdGhpcy5pbm5lckRyYWdnYWJsZXMucHVzaChkcmFnZ2FibGUpXG4gICAgfVxuICB9XG5cbiAgYWRkUmVtb3ZlT25Nb3ZlKGRyYWdnYWJsZSkge1xuICAgIGRyYWdnYWJsZS5vbignZHJhZzptb3ZlJywgdGhpcy5yZW1vdmVIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgdGhpcy5yZW1vdmUoZHJhZ2dhYmxlKVxuICAgIH0pXG5cbiAgICB0aGlzLmVtaXQoJ3RhcmdldDphZGQnLCBkcmFnZ2FibGUpXG4gIH1cblxuICByZW1vdmUoZHJhZ2dhYmxlKSB7XG4gICAgZHJhZ2dhYmxlLnVuc3Vic2NyaWJlKCdkcmFnOm1vdmUnLCB0aGlzLnJlbW92ZUhhbmRsZXIpXG5cbiAgICBjb25zdCBpbmRleCA9IHRoaXMuaW5uZXJEcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKVxuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnNwbGljZShpbmRleCwgMSlcblxuICAgIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgfSksIFtdKVxuXG4gICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBbXSlcbiAgICB0aGlzLmVtaXQoJ3RhcmdldDpyZW1vdmUnLCBkcmFnZ2FibGUpXG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5tb3ZlKGRyYWdnYWJsZS5pbml0aWFsUG9zaXRpb24sIDAsIHRydWUsIHRydWUpXG4gICAgICB0aGlzLmVtaXQoJ3RhcmdldDpyZW1vdmUnLCBkcmFnZ2FibGUpXG4gICAgfSlcbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcyA9IFtdXG4gIH1cblxuICBnZXRTb3J0ZWREcmFnZ2FibGVzKCkge1xuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnNsaWNlKClcbiAgfVxufVxuXG5UYXJnZXQuZW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXIoVGFyZ2V0KVxuVGFyZ2V0LmVtaXR0ZXIub24oJ3RhcmdldDpjcmVhdGUnLCBhZGRUb0RlZmF1bHRTY29wZSlcbiIsImltcG9ydCByZW1vdmVJdGVtIGZyb20gJy4vdXRpbHMvcmVtb3ZlLWFycmF5LWl0ZW0nXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnRFbWl0dGVyJ1xuaW1wb3J0IERyYWdnYWJsZSBmcm9tICcuL2RyYWdnYWJsZSdcbmltcG9ydCBUYXJnZXQgZnJvbSAnLi90YXJnZXQnXG5cbmNvbnN0IHNjb3BlcyA9IFtdXG5cbmNsYXNzIFNjb3BlIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoZHJhZ2dhYmxlcywgdGFyZ2V0cywgb3B0aW9ucz17fSkge1xuICAgIHN1cGVyKHVuZGVmaW5lZCwgb3B0aW9ucylcbiAgICBzY29wZXMuZm9yRWFjaCgoc2NvcGUpID0+IHtcbiAgICAgIGlmIChkcmFnZ2FibGVzKSB7XG4gICAgICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICAgICAgcmVtb3ZlSXRlbShzY29wZS5kcmFnZ2FibGVzLCBkcmFnZ2FibGUpXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIGlmICh0YXJnZXRzKSB7XG4gICAgICAgIHRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB7XG4gICAgICAgICAgcmVtb3ZlSXRlbShzY29wZS50YXJnZXRzLCB0YXJnZXQpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZXMgfHwgW11cbiAgICB0aGlzLnRhcmdldHMgPSB0YXJnZXRzIHx8IFtdXG4gICAgc2NvcGVzLnB1c2godGhpcylcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICB0aW1lRW5kOiAob3B0aW9ucy50aW1lRW5kKSB8fCA0MDBcbiAgICB9XG5cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUuZHJhZ0VuZEFjdGlvbiA9ICgpID0+IHRoaXMub25FbmQoZHJhZ2dhYmxlKVxuICAgIH0pXG4gIH1cblxuICBhZGREcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxuICAgIGRyYWdnYWJsZS5kcmFnRW5kQWN0aW9uID0gKCkgPT4gdGhpcy5vbkVuZChkcmFnZ2FibGUpXG4gIH1cblxuICBhZGRUYXJnZXQodGFyZ2V0KSB7XG4gICAgdGhpcy50YXJnZXRzLnB1c2godGFyZ2V0KVxuICB9XG5cbiAgb25FbmQoZHJhZ2dhYmxlKSB7XG4gICAgY29uc3Qgc2hvdFRhcmdldHMgPSB0aGlzLnRhcmdldHMuZmlsdGVyKCh0YXJnZXQpID0+IHtcbiAgICAgIHJldHVybiB0YXJnZXQuZHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkgIT09IC0xXG4gICAgfSkuZmlsdGVyKCh0YXJnZXQpID0+IHtcbiAgICAgIHJldHVybiB0YXJnZXQuY2F0Y2hEcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICAgIH0pLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIHJldHVybiBhLmdldFJlY3RhbmdsZSgpLmdldFNxdWFyZSgpIC0gYi5nZXRSZWN0YW5nbGUoKS5nZXRTcXVhcmUoKVxuICAgIH0pXG5cbiAgICBpZiAoc2hvdFRhcmdldHMubGVuZ3RoKSB7XG4gICAgICBzaG90VGFyZ2V0c1swXS5vbkVuZChkcmFnZ2FibGUpXG4gICAgfSBlbHNlIGlmIChkcmFnZ2FibGUudGFyZ2V0cy5sZW5ndGgpIHtcbiAgICAgIGRyYWdnYWJsZS5waW5Qb3NpdGlvbihkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uLCB0aGlzLm9wdGlvbnMudGltZUVuZClcbiAgICB9XG5cbiAgICB0aGlzLmVtaXQoJ3Njb3BlOmNoYW5nZScpXG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLnRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB0YXJnZXQucmVzZXQoKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnJlZnJlc2goKSlcbiAgICB0aGlzLnRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB0YXJnZXQucmVmcmVzaCgpKVxuICB9XG5cbiAgZ2V0IHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXRzLm1hcCgodGFyZ2V0KSA9PiB7XG4gICAgICByZXR1cm4gdGFyZ2V0LmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4gdGhpcy5kcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSlcbiAgICB9KVxuICB9XG5cbiAgc2V0IHBvc2l0aW9ucyhwb3NpdGlvbnMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gJ3dyb25nIGFycmF5IGxlbmd0aCdcbiAgICBpZiAocG9zaXRpb25zLmxlbmd0aCA9PT0gdGhpcy50YXJnZXRzLmxlbmd0aCkge1xuICAgICAgdGhpcy50YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4gdGFyZ2V0LnJlc2V0KCkpXG5cbiAgICAgIHBvc2l0aW9ucy5mb3JFYWNoKCh0YXJnZXRJbmRleGVzLCBpKSA9PiB7XG4gICAgICAgIHRhcmdldEluZGV4ZXMuZm9yRWFjaCgoaW5kZXgpID0+IHtcbiAgICAgICAgICB0aGlzLnRhcmdldHNbaV0uYWRkKHRoaXMuZHJhZ2dhYmxlc1tpbmRleF0pXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBtZXNzYWdlXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IGRlZmF1bHRTY29wZSA9IG5ldyBTY29wZSgpXG5cbmZ1bmN0aW9uIHNjb3BlKGZuKSB7XG4gIGNvbnN0IGN1cnJlbnRTY29wZSA9IG5ldyBTY29wZSgpXG5cbiAgY29uc3QgYWRkRHJhZ2dhYmxlVG9TY29wZSA9IGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICAgIGN1cnJlbnRTY29wZS5hZGREcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICAgIERyYWdnYWJsZS5lbWl0dGVyLmludGVycnVwdCgpXG4gIH1cblxuICBjb25zdCBhZGRUYXJnZXRUb1Njb3BlID0gZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgY3VycmVudFNjb3BlLmFkZFRhcmdldCh0YXJnZXQpXG4gICAgRHJhZ2dhYmxlLmVtaXR0ZXIuaW50ZXJydXB0KClcbiAgfVxuXG4gIERyYWdnYWJsZS5lbWl0dGVyLnByZXBlbmRPbignZHJhZ2dhYmxlOmNyZWF0ZScsIGFkZERyYWdnYWJsZVRvU2NvcGUpXG4gIFRhcmdldC5lbWl0dGVyLnByZXBlbmRPbigndGFyZ2V0OmNyZWF0ZScsIGFkZFRhcmdldFRvU2NvcGUpXG4gIGZuLmNhbGwoKVxuICBEcmFnZ2FibGUuZW1pdHRlci51bnN1YnNjcmliZSgnZHJhZ2dhYmxlOmNyZWF0ZScsIGFkZERyYWdnYWJsZVRvU2NvcGUpXG4gIFRhcmdldC5lbWl0dGVyLnVuc3Vic2NyaWJlKCd0YXJnZXQ6Y3JlYXRlJywgYWRkVGFyZ2V0VG9TY29wZSlcbiAgcmV0dXJuIGN1cnJlbnRTY29wZVxufVxuXG5leHBvcnQgeyBzY29wZXMsIGRlZmF1bHRTY29wZSwgU2NvcGUsIHNjb3BlIH1cbiIsImZ1bmN0aW9uIGNoZWNrU3VwcG9ydFBhc3NpdmVFdmVudHMoKSB7XG4gIGxldCBwYXNzaXZlU3VwcG9ydGVkID0gZmFsc2VcblxuICB0cnkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdwYXNzaXZlJywge1xuICAgICAgZ2V0KCkge1xuICAgICAgICByZXR1cm4gKHBhc3NpdmVTdXBwb3J0ZWQgPSB0cnVlKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndGVzdCcsIG9wdGlvbnMsIG9wdGlvbnMpXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Rlc3QnLCBvcHRpb25zLCBvcHRpb25zKVxuICB9IGNhdGNoIChfZXJyKSB7XG4gICAgcGFzc2l2ZVN1cHBvcnRlZCA9IGZhbHNlXG4gIH1cblxuICByZXR1cm4gcGFzc2l2ZVN1cHBvcnRlZFxufVxuXG5leHBvcnQgY29uc3QgaXNTdXBwb3J0UGFzc2l2ZUV2ZW50cyA9IGNoZWNrU3VwcG9ydFBhc3NpdmVFdmVudHMoKVxuXG5mdW5jdGlvbiBldmVudE9wdGlvbnMob3B0aW9ucywgZmFsbGJhY2sgPSBmYWxzZSkge1xuICByZXR1cm4gaXNTdXBwb3J0UGFzc2l2ZUV2ZW50cyA/IG9wdGlvbnMgOiBmYWxsYmFja1xufVxuXG5leHBvcnQgeyBldmVudE9wdGlvbnMgfVxuXG5leHBvcnQgZGVmYXVsdCBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzXG4iLCJpbXBvcnQgeyBhZGRDbGFzcywgcmVtb3ZlQ2xhc3MgfSBmcm9tICcuL3V0aWxzL2NsYXNzZXMnXG5pbXBvcnQgZ2V0RGVmYXVsdFBhcmVudCBmcm9tICcuL3V0aWxzL2dldC1kZWZhdWx0LXBhcmVudCdcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudEVtaXR0ZXInXG5pbXBvcnQgZ2V0U3R5bGVQcm9wZXJ0eSBmcm9tICdkZXNhbmRyby1nZXQtc3R5bGUtcHJvcGVydHknXG5pbXBvcnQgeyBCb3VuZFRvRWxlbWVudCB9IGZyb20gJy4vYm91bmRpbmcnXG5pbXBvcnQgUG9pbnQgZnJvbSAnLi9nZW9tZXRyeS9wb2ludCdcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSAnLi9nZW9tZXRyeS9yZWN0YW5nbGUnXG5pbXBvcnQgeyBkZWZhdWx0U2NvcGUgfSBmcm9tICcuL3Njb3BlJ1xuaW1wb3J0IGlzU3VwcG9ydFBhc3NpdmVFdmVudHMgZnJvbSAnLi91dGlscy9pcy1zdXBwb3J0LXBhc3NpdmUtZXZlbnRzJ1xuXG5jb25zdCBpc1RvdWNoID0gJ29udG91Y2hzdGFydCcgaW4gd2luZG93XG5jb25zdCBtb3VzZUV2ZW50cyA9IHtcbiAgc3RhcnQ6ICdtb3VzZWRvd24nLFxuICBtb3ZlOiAnbW91c2Vtb3ZlJyxcbiAgZW5kOiAnbW91c2V1cCdcbn1cbmNvbnN0IHRvdWNoRXZlbnRzID0ge1xuICBzdGFydDogJ3RvdWNoc3RhcnQnLFxuICBtb3ZlOiAndG91Y2htb3ZlJyxcbiAgZW5kOiAndG91Y2hlbmQnXG59XG5jb25zdCBkcmFnZ2FibGVzID0gW11cbmNvbnN0IHRyYW5zZm9ybVByb3BlcnR5ID0gZ2V0U3R5bGVQcm9wZXJ0eSgndHJhbnNmb3JtJylcbmNvbnN0IHRyYW5zaXRpb25Qcm9wZXJ0eSA9IGdldFN0eWxlUHJvcGVydHkoJ3RyYW5zaXRpb24nKVxuXG5mdW5jdGlvbiBnZXRUb3VjaEJ5SUQoZWxlbWVudCwgdG91Y2hJZCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnQuY2hhbmdlZFRvdWNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZWxlbWVudC5jaGFuZ2VkVG91Y2hlc1tpXS5pZGVudGlmaWVyID09PSB0b3VjaElkKSB7XG4gICAgICByZXR1cm4gZWxlbWVudC5jaGFuZ2VkVG91Y2hlc1tpXVxuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cblxuZnVuY3Rpb24gcHJldmVudERvdWJsZUluaXQoZHJhZ2dhYmxlKSB7XG4gIGNvbnN0IG1lc3NhZ2UgPSBcImZvciB0aGlzIGVsZW1lbnQgRHJhZ2VlLkRyYWdnYWJsZSBpcyBhbHJlYWR5IGV4aXN0LCBkb24ndCBjcmVhdGUgaXQgdHdpY2UgXCJcbiAgaWYgKGRyYWdnYWJsZXMuc29tZSgoZXhpc3RpbmcpID0+IGRyYWdnYWJsZS5lbGVtZW50ID09PSBleGlzdGluZy5lbGVtZW50KSkge1xuICAgIHRocm93IG1lc3NhZ2VcbiAgfVxuICBkcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxufVxuXG5mdW5jdGlvbiBhZGRUb0RlZmF1bHRTY29wZShkcmFnZ2FibGUpIHtcbiAgZGVmYXVsdFNjb3BlLmFkZERyYWdnYWJsZShkcmFnZ2FibGUpXG59XG5cbmZ1bmN0aW9uIGNvcHlTdHlsZXMoc291cmNlLCBkZXN0aW5hdGlvbikge1xuICBjb25zdCBjcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHNvdXJjZSlcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qga2V5ID0gY3NbaV1cbiAgICBpZiAoKGtleS5pbmRleE9mKCd0cmFuc2l0aW9uJykgPCAwKSAmJiAoa2V5LmluZGV4T2YoJ3RyYW5zZm9ybScpIDwgMCkpIHtcbiAgICAgIGRlc3RpbmF0aW9uLnN0eWxlW2tleV0gPSBjc1trZXldXG4gICAgfVxuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzb3VyY2UuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICBjb3B5U3R5bGVzKHNvdXJjZS5jaGlsZHJlbltpXSwgZGVzdGluYXRpb24uY2hpbGRyZW5baV0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhZ2dhYmxlIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgb3B0aW9ucz17fSkge1xuICAgIHN1cGVyKHVuZGVmaW5lZCwgb3B0aW9ucylcbiAgICB0aGlzLnRhcmdldHMgPSBbXVxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG4gICAgcHJldmVudERvdWJsZUluaXQodGhpcylcbiAgICBEcmFnZ2FibGUuZW1pdHRlci5lbWl0KCdkcmFnZ2FibGU6Y3JlYXRlJywgdGhpcylcbiAgICB0aGlzLl9lbmFibGUgPSB0cnVlXG4gICAgdGhpcy5zdGFydFBvc2l0aW9uaW5nKClcbiAgICB0aGlzLnN0YXJ0TGlzdGVuaW5nKClcbiAgfVxuXG4gIHN0YXJ0UG9zaXRpb25pbmcoKSB7XG4gICAgdGhpcy5fc2V0RGVmYXVsdFRyYW5zaXRpb24oKVxuICAgIHRoaXMub2Zmc2V0ID0gUG9pbnQuZWxlbWVudE9mZnNldCh0aGlzLmVsZW1lbnQsIHRoaXMucGFyZW50LCB0cnVlKVxuICAgIHRoaXMucGlubmVkUG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICAgIHRoaXMuaW5pdGlhbFBvc2l0aW9uID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uIHx8IHRoaXMub2Zmc2V0XG5cbiAgICB0aGlzLnBpblBvc2l0aW9uKHRoaXMuaW5pdGlhbFBvc2l0aW9uKVxuXG4gICAgaWYgKHRoaXMuYm91bmRpbmcucmVmcmVzaCkge1xuICAgICAgdGhpcy5ib3VuZGluZy5yZWZyZXNoKClcbiAgICB9XG4gIH1cblxuICBzdGFydExpc3RlbmluZygpIHtcbiAgICB0aGlzLl9kcmFnU3RhcnQgPSAoZXZlbnQpID0+IHRoaXMuZHJhZ1N0YXJ0KGV2ZW50KVxuICAgIHRoaXMuX2RyYWdNb3ZlID0gKGV2ZW50KSA9PiB0aGlzLmRyYWdNb3ZlKGV2ZW50KVxuICAgIHRoaXMuX2RyYWdFbmQgPSAoZXZlbnQpID0+IHRoaXMuZHJhZ0VuZChldmVudClcbiAgICB0aGlzLl9uYXRpdmVEcmFnU3RhcnQgPSAoZXZlbnQpID0+IHRoaXMubmF0aXZlRHJhZ1N0YXJ0KGV2ZW50KVxuICAgIHRoaXMuX25hdGl2ZURyYWdPdmVyID0gKGV2ZW50KSA9PiB0aGlzLm5hdGl2ZURyYWdPdmVyKGV2ZW50KVxuICAgIHRoaXMuX25hdGl2ZURyYWdFbmQgPSAoZXZlbnQpID0+IHRoaXMubmF0aXZlRHJhZ0VuZChldmVudClcbiAgICB0aGlzLl9uYXRpdmVEcm9wID0gKGV2ZW50KSA9PiB0aGlzLm5hdGl2ZURyb3AoZXZlbnQpXG5cbiAgICB0aGlzLmhhbmRsZXIuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0LCBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzID8geyBwYXNzaXZlOiBmYWxzZSB9IDogZmFsc2UpXG4gICAgdGhpcy5oYW5kbGVyLmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydCwgaXNTdXBwb3J0UGFzc2l2ZUV2ZW50cyA/IHsgcGFzc2l2ZTogZmFsc2UgfSA6IGZhbHNlKVxuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCB0aGlzLl9uYXRpdmVEcmFnU3RhcnQpXG4gIH1cblxuICBnZXRTaXplKCkge1xuICAgIHJldHVybiBQb2ludC5lbGVtZW50U2l6ZSh0aGlzLmVsZW1lbnQsIHRoaXMub3B0aW9ucy5pc0NvbnRlbnRCb3hTaXplKVxuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMub2Zmc2V0LmFkZCh0aGlzLl90cmFuc2Zvcm1Qb3NpdGlvbiB8fCBuZXcgUG9pbnQoMCwgMCkpXG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25cbiAgfVxuXG4gIGdldENlbnRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi5hZGQodGhpcy5nZXRTaXplKCkubXVsdCgwLjUpKVxuICB9XG5cbiAgX3NldERlZmF1bHRUcmFuc2l0aW9uICgpIHtcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNpdGlvblByb3BlcnR5XSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZWxlbWVudClbdHJhbnNpdGlvblByb3BlcnR5XVxuICB9XG5cbiAgX3NldFRyYW5zaXRpb24odGltZSkge1xuICAgIGxldCB0cmFuc2l0aW9uID0gdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV1cbiAgICBjb25zdCB0cmFuc2l0aW9uQ3NzID0gYHRyYW5zZm9ybSAke3RpbWV9bXNgXG5cbiAgICBpZiAoIS90cmFuc2Zvcm0gXFxkKm0/cy8udGVzdCh0cmFuc2l0aW9uKSkge1xuICAgICAgaWYgKHRyYW5zaXRpb24pIHtcbiAgICAgICAgdHJhbnNpdGlvbiArPSBgLCAke3RyYW5zaXRpb25Dc3N9YFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJhbnNpdGlvbiA9IHRyYW5zaXRpb25Dc3NcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdHJhbnNpdGlvbiA9IHRyYW5zaXRpb24ucmVwbGFjZSgvdHJhbnNmb3JtIFxcZCptP3MvLCB0cmFuc2l0aW9uQ3NzKVxuICAgIH1cblxuICAgIHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldID0gdHJhbnNpdGlvblxuICB9XG5cbiAgX3NldFRyYW5zbGF0ZShwb2ludCkge1xuICAgIHRoaXMuX3RyYW5zZm9ybVBvc2l0aW9uID0gcG9pbnRcblxuICAgIGxldCB0cmFuc2Zvcm0gPSB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcGVydHldXG4gICAgbGV0IHRyYW5zbGF0ZUNzcyA9IGAgdHJhbnNsYXRlM2QoJHtwb2ludC54fXB4LCAke3BvaW50Lnl9cHgsIDBweClgXG5cbiAgICBjb25zdCB1YSA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50XG4gICAgY29uc3QgbXNpZSA9IHVhLmluZGV4T2YoJ01TSUUgJykgIT09IC0xXG5cbiAgICBpZiAobXNpZSkge1xuICAgICAgdHJhbnNsYXRlQ3NzID0gYCB0cmFuc2xhdGUoJHtwb2ludC54fXB4LCR7cG9pbnQueX1weClgXG4gICAgICBpZiAoIS90cmFuc2xhdGVcXChbXildK1xcKS8udGVzdCh0cmFuc2Zvcm0pKSB7XG4gICAgICAgIHRyYW5zZm9ybSArPSB0cmFuc2xhdGVDc3NcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyYW5zZm9ybSA9IHRyYW5zZm9ybS5yZXBsYWNlKC90cmFuc2xhdGVcXChbXildK1xcKS8sIHRyYW5zbGF0ZUNzcylcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCEvdHJhbnNsYXRlM2RcXChbXildK1xcKS8udGVzdCh0cmFuc2Zvcm0pKSB7XG4gICAgICAgIHRyYW5zZm9ybSArPSB0cmFuc2xhdGVDc3NcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyYW5zZm9ybSA9IHRyYW5zZm9ybS5yZXBsYWNlKC90cmFuc2xhdGUzZFxcKFteKV0rXFwpLywgdHJhbnNsYXRlQ3NzKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wZXJ0eV0gPSB0cmFuc2Zvcm1cbiAgfVxuXG4gIG1vdmUocG9pbnQsIHRpbWU9MCwgaXNTaWxlbnQ9ZmFsc2UpIHtcbiAgICBwb2ludCA9IHBvaW50LmNsb25lKClcblxuICAgIHRoaXMuZGV0ZXJtaW5lRGlyZWN0aW9uKHBvaW50KVxuICAgIHRoaXMucG9zaXRpb24gPSBwb2ludFxuXG4gICAgdGhpcy5fc2V0VHJhbnNpdGlvbih0aW1lKVxuICAgIHRoaXMuX3NldFRyYW5zbGF0ZShwb2ludC5zdWIodGhpcy5vZmZzZXQpKVxuXG4gICAgaWYgKCFpc1NpbGVudCkge1xuICAgICAgdGhpcy5lbWl0KCdkcmFnOm1vdmUnKVxuICAgIH1cbiAgfVxuXG4gIHBpblBvc2l0aW9uKHBvaW50LCB0aW1lPTAsIHNpbGVudD10cnVlKSB7XG4gICAgdGhpcy5waW5uZWRQb3NpdGlvbiA9IHBvaW50LmNsb25lKClcbiAgICB0aGlzLm1vdmUodGhpcy5waW5uZWRQb3NpdGlvbiwgdGltZSwgc2lsZW50KVxuICB9XG5cbiAgcmVzZXRQb3NpdGlvblRvSW5pdGlhbCAoKSB7XG4gICAgdGhpcy5waW5Qb3NpdGlvbih0aGlzLmluaXRpYWxQb3NpdGlvbilcbiAgfVxuXG4gIHJlZnJlc2hQb3NpdGlvbiAoKSB7XG4gICAgdGhpcy5zZXRQb3NpdGlvbih0aGlzLmdldFBvc2l0aW9uKCkpXG4gIH1cblxuICBzZXRQb3NpdGlvbihwb2ludCkge1xuICAgIHBvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIHRoaXMucG9zaXRpb24gPSBwb2ludFxuICAgIHRoaXMuX3NldFRyYW5zaXRpb24oMClcbiAgICB0aGlzLl9zZXRUcmFuc2xhdGUocG9pbnQuc3ViKHRoaXMub2Zmc2V0KSlcbiAgfVxuXG4gIGRldGVybWluZURpcmVjdGlvbihwb2ludCkge1xuICAgIHRoaXMubGVmdERpcmVjdGlvbiA9ICh0aGlzLnBvc2l0aW9uLnggPCBwb2ludC54KVxuICAgIHRoaXMucmlnaHREaXJlY3Rpb24gPSAodGhpcy5wb3NpdGlvbi54ID4gcG9pbnQueClcbiAgICB0aGlzLnVwRGlyZWN0aW9uID0gKHRoaXMucG9zaXRpb24ueSA+IHBvaW50LnkpXG4gICAgdGhpcy5kb3duRGlyZWN0aW9uID0gKHRoaXMucG9zaXRpb24ueSA8IHBvaW50LnkpXG4gIH1cblxuICBkcmFnU3RhcnQoZXZlbnQpIHtcbiAgICB0aGlzLmN1cnJlbnRFdmVudCA9IGV2ZW50XG4gICAgaWYgKCF0aGlzLl9lbmFibGUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGlzVG91Y2hFdmVudCA9IChpc1RvdWNoICYmIChldmVudCBpbnN0YW5jZW9mIHdpbmRvdy5Ub3VjaEV2ZW50KSlcblxuICAgIHRoaXMuX3N0YXJ0VG91Y2hQb2ludCA9IG5ldyBQb2ludChcbiAgICAgIGlzVG91Y2hFdmVudCA/IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYIDogZXZlbnQuY2xpZW50WCxcbiAgICAgIGlzVG91Y2hFdmVudCA/IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZIDogZXZlbnQuY2xpZW50WVxuICAgIClcblxuICAgIHRoaXMuX3N0YXJ0UG9zaXRpb24gPSB0aGlzLmdldFBvc2l0aW9uKClcbiAgICBpZiAoaXNUb3VjaEV2ZW50KSB7XG4gICAgICB0aGlzLl90b3VjaElkID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uaWRlbnRpZmllclxuICAgIH1cblxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgaWYgKGV2ZW50LnRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSW5wdXRFbGVtZW50IHx8XG4gICAgICAgICAgZXZlbnQudGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJbnB1dEVsZW1lbnQpIHtcbiAgICAgIGV2ZW50LnRhcmdldC5mb2N1cygpXG4gICAgfVxuXG4gICAgaWYgKCEodGhpcy5uYXRpdmVEcmFnQW5kRHJvcCB8fFxuICAgICAgICAgICAgZXZlbnQudGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJbnB1dEVsZW1lbnQgfHxcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSW5wdXRFbGVtZW50KSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIH1cblxuICAgIGlmICh0aGlzLm5hdGl2ZURyYWdBbmREcm9wKSB7XG4gICAgICBjb25zdCBpc1NhZmFyaSA9L3ZlcnNpb25cXC8oXFxkKykuKz9zYWZhcmkvaS50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KVxuICAgICAgaWYgKChpc1RvdWNoRXZlbnQgJiYgdGhpcy5lbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3BPblRvdWNoKSB8fFxuICAgICAgICAgICAgIGlzU2FmYXJpIHx8XG4gICAgICAgICAgICAgdGhpcy5lbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3BGb3JBbGwpIHtcbiAgICAgICAgdGhpcy5lbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3AoZXZlbnQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsZW1lbnQuZHJhZ2dhYmxlID0gdHJ1ZVxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fbmF0aXZlRHJhZ0VuZCwgaXNTdXBwb3J0UGFzc2l2ZUV2ZW50cyA/IHsgcGFzc2l2ZTogZmFsc2UgfSA6IGZhbHNlKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlLCBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzID8geyBwYXNzaXZlOiBmYWxzZSB9IDogZmFsc2UpXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlLCBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzID8geyBwYXNzaXZlOiBmYWxzZSB9IDogZmFsc2UpXG5cbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kLCBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzID8geyBwYXNzaXZlOiBmYWxzZSB9IDogZmFsc2UpXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZCwgaXNTdXBwb3J0UGFzc2l2ZUV2ZW50cyA/IHsgcGFzc2l2ZTogZmFsc2UgfSA6IGZhbHNlKVxuICAgIH1cblxuICAgIHRoaXMuaXNEcmFnZ2luZyA9IHRydWVcbiAgICB0aGlzLmVtaXQoJ2RyYWc6c3RhcnQnKVxuICAgIGFkZENsYXNzKHRoaXMuZWxlbWVudCwgJ2RyYWdlZS1hY3RpdmUnKVxuICAgIHRoaXMuZW1pdCgnZHJhZzptb3ZlJylcbiAgfVxuXG4gIHN0b3BEcmFnZ2luZygpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCB0aGlzLl9uYXRpdmVEcmFnT3ZlcilcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcm9wJywgdGhpcy5fbmF0aXZlRHJvcClcbiAgICB0aGlzLmVsZW1lbnQuZHJhZ2dhYmxlID0gZmFsc2VcbiAgICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZVxuICAgIHJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudCwgJ2RyYWdlZS1hY3RpdmUnKVxuICB9XG5cbiAgZHJhZ01vdmUoZXZlbnQpIHtcbiAgICB0aGlzLmN1cnJlbnRFdmVudCA9IGV2ZW50XG4gICAgbGV0IHRvdWNoXG5cbiAgICBjb25zdCBpc1RvdWNoRXZlbnQgPSAoaXNUb3VjaCAmJiAoZXZlbnQgaW5zdGFuY2VvZiB3aW5kb3cuVG91Y2hFdmVudCkpXG4gICAgaWYgKGlzVG91Y2hFdmVudCkge1xuICAgICAgdG91Y2ggPSBnZXRUb3VjaEJ5SUQoZXZlbnQsIHRoaXMuX3RvdWNoSWQpXG5cbiAgICAgIGlmICghdG91Y2gpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc3QgdG91Y2hQb2ludCA9IG5ldyBQb2ludChcbiAgICAgIGlzVG91Y2hFdmVudCA/IHRvdWNoLnBhZ2VYIDogZXZlbnQuY2xpZW50WCxcbiAgICAgIGlzVG91Y2hFdmVudCA/IHRvdWNoLnBhZ2VZIDogZXZlbnQuY2xpZW50WVxuICAgIClcblxuICAgIGxldCBwb2ludCA9IHRoaXMuX3N0YXJ0UG9zaXRpb24uYWRkKHRvdWNoUG9pbnQuc3ViKHRoaXMuX3N0YXJ0VG91Y2hQb2ludCkpXG4gICAgcG9pbnQgPSB0aGlzLmJvdW5kaW5nLmJvdW5kKHBvaW50LCB0aGlzLmdldFNpemUoKSlcbiAgICB0aGlzLnRvdWNoUG9pbnQgPSB0b3VjaFBvaW50XG4gICAgdGhpcy5tb3ZlKHBvaW50KVxuICB9XG5cbiAgZHJhZ0VuZChldmVudCkge1xuICAgIGNvbnN0IGlzVG91Y2hFdmVudCA9IChpc1RvdWNoICYmIChldmVudCBpbnN0YW5jZW9mIHdpbmRvdy5Ub3VjaEV2ZW50KSlcblxuICAgIGlmIChpc1RvdWNoRXZlbnQgJiYgIWdldFRvdWNoQnlJRChldmVudCwgdGhpcy5fdG91Y2hJZCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIHRoaXMuZHJhZ0VuZEFjdGlvbigpXG4gICAgdGhpcy5lbWl0KCdkcmFnOmVuZCcpXG5cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG5cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcblxuICAgIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnZHJhZ2dhYmxlJylcbiAgICByZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnQsICdkcmFnZWUtYWN0aXZlJylcbiAgfVxuXG4gIG5hdGl2ZURyYWdTdGFydChldmVudCkge1xuICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0JywgJ0ZpcmVGb3ggZml4JylcbiAgICBldmVudC5kYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCA9ICdtb3ZlJ1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgdGhpcy5fbmF0aXZlRHJhZ092ZXIpXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIHRoaXMuX25hdGl2ZURyYWdFbmQpXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIHRoaXMuX25hdGl2ZURyb3ApXG4gIH1cblxuICBuYXRpdmVEcmFnT3ZlcihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBldmVudC5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9ICdtb3ZlJ1xuICAgIGFkZENsYXNzKHRoaXMuZWxlbWVudCwgJ2RyYWdlZS1wbGFjZWhvbGRlcicpXG4gICAgdGhpcy5jdXJyZW50RXZlbnQgPSBldmVudFxuICAgIGlmIChldmVudC5jbGllbnRYID09PSAwICYmIGV2ZW50LmNsaWVudFkgPT09IDApIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHRvdWNoUG9pbnQgPSBuZXcgUG9pbnQoZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSlcbiAgICBsZXQgcG9pbnQgPSB0aGlzLl9zdGFydFBvc2l0aW9uLmFkZCh0b3VjaFBvaW50LnN1Yih0aGlzLl9zdGFydFRvdWNoUG9pbnQpKVxuICAgIHBvaW50ID0gdGhpcy5ib3VuZGluZy5ib3VuZChwb2ludCwgdGhpcy5nZXRTaXplKCkpXG4gICAgdGhpcy50b3VjaFBvaW50ID0gdG91Y2hQb2ludFxuICAgIHRoaXMucG9zaXRpb24gPSBwb2ludFxuICAgIHRoaXMuZW1pdCgnZHJhZzptb3ZlJylcbiAgfVxuXG4gIG5hdGl2ZURyYWdFbmQoX2V2ZW50KSB7XG4gICAgcmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50LCAnZHJhZ2VlLXBsYWNlaG9sZGVyJylcbiAgICB0aGlzLmRyYWdFbmRBY3Rpb24oKVxuICAgIHRoaXMuZW1pdCgnZHJhZzplbmQnKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgdGhpcy5fbmF0aXZlRHJhZ092ZXIpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIHRoaXMuX25hdGl2ZURyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX25hdGl2ZURyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJvcCcsIHRoaXMuX25hdGl2ZURyb3ApXG4gICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2VcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkcmFnZ2FibGUnKVxuICAgIHJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudCwgJ2RyYWdlZS1hY3RpdmUnKVxuICB9XG5cbiAgbmF0aXZlRHJvcChldmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wKGV2ZW50KSB7XG4gICAgY29uc3QgcGFyZW50UmVjdCA9IHRoaXMucGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgY29uc3QgY2xvbmVkRWxlbWVudCA9IHRoaXMuZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSlcbiAgICBjbG9uZWRFbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BlcnR5XSA9ICcnXG4gICAgY29weVN0eWxlcyh0aGlzLmVsZW1lbnQsIGNsb25lZEVsZW1lbnQpXG4gICAgY2xvbmVkRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSdcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNsb25lZEVsZW1lbnQpXG4gICAgYWRkQ2xhc3ModGhpcy5lbGVtZW50LCAnZHJhZ2VlLXBsYWNlaG9sZGVyJylcblxuICAgIGNvbnN0IGVtdWxhdGlvbkRyYWdnYWJsZSA9IG5ldyBEcmFnZ2FibGUoY2xvbmVkRWxlbWVudCwge1xuICAgICAgcGFyZW50OiBkb2N1bWVudC5ib2R5LFxuICAgICAgb246IHtcbiAgICAgICAgJ2RyYWc6bW92ZSc6ICgpID0+IHtcbiAgICAgICAgICB0aGlzLnBvc2l0aW9uID0gbmV3IFBvaW50KFxuICAgICAgICAgICAgZW11bGF0aW9uRHJhZ2dhYmxlLnBvc2l0aW9uLnggLSBwYXJlbnRSZWN0LmxlZnQgLSB3aW5kb3cuc2Nyb2xsWCxcbiAgICAgICAgICAgIGVtdWxhdGlvbkRyYWdnYWJsZS5wb3NpdGlvbi55IC0gcGFyZW50UmVjdC50b3AgLSB3aW5kb3cuc2Nyb2xsWVxuICAgICAgICAgIClcbiAgICAgICAgICB0aGlzLmVtaXQoJ2RyYWc6bW92ZScpXG4gICAgICAgIH0sXG4gICAgICAgICdkcmFnOmVuZCc6ICgpID0+IHtcbiAgICAgICAgICBlbXVsYXRpb25EcmFnZ2FibGUuZGVzdHJveSgpXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChjbG9uZWRFbGVtZW50KVxuICAgICAgICAgIHJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudCwgJ2RyYWdlZS1wbGFjZWhvbGRlcicpXG4gICAgICAgICAgcmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50LCAnZHJhZ2VlLWFjdGl2ZScpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgZW11bGF0aW9uRHJhZ2dhYmxlLm1vdmUobmV3IFBvaW50KFxuICAgICAgdGhpcy5waW5uZWRQb3NpdGlvbi54ICsgcGFyZW50UmVjdC5sZWZ0ICsgd2luZG93LnNjcm9sbFgsXG4gICAgICB0aGlzLnBpbm5lZFBvc2l0aW9uLnkgKyBwYXJlbnRSZWN0LnRvcCArIHdpbmRvdy5zY3JvbGxZXG4gICAgKSlcblxuICAgIGVtdWxhdGlvbkRyYWdnYWJsZS5kcmFnU3RhcnQoZXZlbnQpXG4gIH1cblxuICBkcmFnRW5kQWN0aW9uKCkge1xuICAgIHRoaXMucGluUG9zaXRpb24odGhpcy5wb3NpdGlvbilcbiAgfVxuXG4gIGdldFJlY3RhbmdsZSgpIHtcbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZSh0aGlzLnBvc2l0aW9uLCB0aGlzLmdldFNpemUoKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgdGhpcy5nZXRTaXplKHRydWUpXG4gICAgaWYgKHRoaXMuYm91bmRpbmcucmVmcmVzaCkge1xuICAgICAgdGhpcy5ib3VuZGluZy5yZWZyZXNoKClcbiAgICB9XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuaGFuZGxlci5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQpXG4gICAgdGhpcy5oYW5kbGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydClcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgdGhpcy5fbmF0aXZlRHJhZ1N0YXJ0KVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIHRoaXMuX25hdGl2ZURyYWdPdmVyKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzLl9uYXRpdmVEcm9wKVxuICAgIHRoaXMucmVzZXRFbWl0dGVyKClcblxuICAgIGNvbnN0IGluZGV4ID0gZHJhZ2dhYmxlcy5pbmRleE9mKHRoaXMpXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIGRyYWdnYWJsZXMuc3BsaWNlKGluZGV4LCAxKVxuICAgIH1cbiAgfVxuXG4gIGdldCBwYXJlbnQoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9wYXJlbnQgPSB0aGlzLl9wYXJlbnQgfHwgdGhpcy5vcHRpb25zLnBhcmVudCB8fCBnZXREZWZhdWx0UGFyZW50KHRoaXMuZWxlbWVudCkpXG4gIH1cblxuICBnZXQgYm91bmRpbmcoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9ib3VuZGluZyA9IHRoaXMuX2JvdW5kaW5nIHx8IHRoaXMub3B0aW9ucy5ib3VuZGluZyB8fCBuZXcgQm91bmRUb0VsZW1lbnQodGhpcy5wYXJlbnQsIHRoaXMucGFyZW50KSlcbiAgfVxuXG4gIGdldCBoYW5kbGVyKCkge1xuICAgIGlmICghdGhpcy5faGFuZGxlcikge1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuaGFuZGxlciA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhpcy5faGFuZGxlciA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKHRoaXMub3B0aW9ucy5oYW5kbGVyKSB8fCB0aGlzLmVsZW1lbnRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZXIgPSB0aGlzLm9wdGlvbnMuaGFuZGxlciB8fCB0aGlzLmVsZW1lbnRcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5faGFuZGxlclxuICB9XG5cbiAgZ2V0IG5hdGl2ZURyYWdBbmREcm9wKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMubmF0aXZlRHJhZ0FuZERyb3AgfHwgZmFsc2VcbiAgfVxuXG4gIGdldCBlbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3BPblRvdWNoKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wT25Ub3VjaCB8fCB0cnVlXG4gIH1cblxuICBnZXQgZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wRm9yQWxsKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wRm9yQWxsIHx8IGZhbHNlXG4gIH1cblxuICBnZXQgZW5hYmxlKCkge1xuICAgIHJldHVybiB0aGlzLl9lbmFibGVcbiAgfVxuXG4gIHNldCBlbmFibGUoZW5hYmxlKSB7XG4gICAgaWYgKGVuYWJsZSkge1xuICAgICAgcmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50LCAnZHJhZ2VlLWRpc2FibGUnKVxuICAgIH0gZWxzZSB7XG4gICAgICBhZGRDbGFzcyh0aGlzLmVsZW1lbnQsICdkcmFnZWUtZGlzYWJsZScpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZSA9IGVuYWJsZVxuICB9XG59XG5cbkRyYWdnYWJsZS5lbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcihEcmFnZ2FibGUpXG5EcmFnZ2FibGUuZW1pdHRlci5vbignZHJhZ2dhYmxlOmNyZWF0ZScsIGFkZFRvRGVmYXVsdFNjb3BlKVxuIiwiaW1wb3J0IHJlbW92ZUl0ZW0gZnJvbSAnLi91dGlscy9yZW1vdmUtYXJyYXktaXRlbSdcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudEVtaXR0ZXInXG5pbXBvcnQge1xuICBnZXREaXN0YW5jZSxcbiAgaW5kZXhPZk5lYXJlc3RQb2ludFxufSBmcm9tICcuL2dlb21ldHJ5L2Rpc3RhbmNlcydcblxuaW1wb3J0IERyYWdnYWJsZSBmcm9tICcuL2RyYWdnYWJsZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdCBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKGRyYWdnYWJsZXMsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcih1bmRlZmluZWQsIG9wdGlvbnMpXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICB0aW1lRW5kOiAyMDAsXG4gICAgICB0aW1lRXhjYW5nZTogNDAwLFxuICAgICAgcmFkaXVzOiAzMCxcbiAgICAgIGdldERpc3RhbmNlOiBnZXREaXN0YW5jZVxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0aGlzLmRyYWdnYWJsZXMgPSBkcmFnZ2FibGVzXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5fZW5hYmxlID0gdHJ1ZVxuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKHRoaXMuaW5pdERyYWdnYWJsZSwgdGhpcylcbiAgfVxuXG4gIGluaXREcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgZHJhZ2dhYmxlLmVuYWJsZSA9IHRoaXMuX2VuYWJsZVxuICAgIGRyYWdnYWJsZS5vbignZHJhZzptb3ZlJywgKCkgPT4gdGhpcy5vbk1vdmUoZHJhZ2dhYmxlKSlcbiAgICBkcmFnZ2FibGUuZHJhZ0VuZEFjdGlvbiA9ICgpID0+IGRyYWdnYWJsZS5waW5Qb3NpdGlvbihkcmFnZ2FibGUucGlubmVkUG9zaXRpb24sIHRoaXMub3B0aW9ucy50aW1lRW5kKVxuICB9XG5cbiAgb25Nb3ZlKGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IHNvcnRlZERyYWdnYWJsZXMgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuICAgIGNvbnN0IHBpbm5lZFBvc2l0aW9ucyA9IHNvcnRlZERyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbilcblxuICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IHNvcnRlZERyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpXG4gICAgY29uc3QgdGFyZ2V0SW5kZXggPSBpbmRleE9mTmVhcmVzdFBvaW50KHBpbm5lZFBvc2l0aW9ucywgZHJhZ2dhYmxlLnBvc2l0aW9uLCB0aGlzLm9wdGlvbnMucmFkaXVzLCB0aGlzLm9wdGlvbnMuZ2V0RGlzdGFuY2UpXG5cbiAgICBpZiAodGFyZ2V0SW5kZXggIT09IC0xICYmIGN1cnJlbnRJbmRleCAhPT0gdGFyZ2V0SW5kZXgpIHtcbiAgICAgIGlmICh0YXJnZXRJbmRleCA8IGN1cnJlbnRJbmRleCkge1xuICAgICAgICBmb3IgKGxldCBpPXRhcmdldEluZGV4OyBpPGN1cnJlbnRJbmRleDsgaSsrKSB7XG4gICAgICAgICAgc29ydGVkRHJhZ2dhYmxlc1tpXS5waW5Qb3NpdGlvbihwaW5uZWRQb3NpdGlvbnNbaSsxXSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGxldCBpPWN1cnJlbnRJbmRleDsgaTx0YXJnZXRJbmRleDsgaSsrKSB7XG4gICAgICAgICAgc29ydGVkRHJhZ2dhYmxlc1tpKzFdLnBpblBvc2l0aW9uKHBpbm5lZFBvc2l0aW9uc1tpXSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChkcmFnZ2FibGUubmF0aXZlRHJhZ0FuZERyb3ApIHtcbiAgICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKHBpbm5lZFBvc2l0aW9uc1t0YXJnZXRJbmRleF0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24gPSBwaW5uZWRQb3NpdGlvbnNbdGFyZ2V0SW5kZXhdXG4gICAgICB9XG5cbiAgICAgIHRoaXMuZW1pdCgnbGlzdDpjaGFuZ2UnKVxuICAgIH1cbiAgfVxuXG4gIGdldEN1cnJlbnRQaW5uZWRQb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uLmNsb25lKCkpXG4gIH1cblxuICBnZXRTb3J0ZWREcmFnZ2FibGVzKCkge1xuICAgIGNvbnN0IGluaXRpYWxQb3NpdGlvbnMgPSB0aGlzLmRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5pbml0aWFsUG9zaXRpb24pXG5cbiAgICBjb25zdCBzb3J0ZWREcmFnZ2FibGVzID0gaW5pdGlhbFBvc2l0aW9ucy5tYXAoKHBvc2l0aW9uKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5kcmFnZ2FibGVzLmZpbHRlcigoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24uY29tcGFyZShwb3NpdGlvbikpWzBdXG4gICAgfSlcblxuICAgIHJldHVybiBzb3J0ZWREcmFnZ2FibGVzXG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucmVzZXRQb3NpdGlvblRvSW5pdGlhbCgpKVxuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucmVmcmVzaCgpKVxuICB9XG5cbiAgYWRkKGRyYWdnYWJsZXMpIHtcbiAgICBpZiAoIShkcmFnZ2FibGVzIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgICBkcmFnZ2FibGVzID0gW2RyYWdnYWJsZXNdXG4gICAgfVxuICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB0aGlzLmluaXREcmFnZ2FibGUoZHJhZ2dhYmxlKSlcbiAgICB0aGlzLmRyYWdnYWJsZXMgPSB0aGlzLmRyYWdnYWJsZXMuY29uY2F0KGRyYWdnYWJsZXMpXG4gIH1cblxuICByZW1vdmUoZHJhZ2dhYmxlcykge1xuICAgIGNvbnN0IGluaXRpYWxQb3NpdGlvbnMgPSB0aGlzLmRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5pbml0aWFsUG9zaXRpb24pXG4gICAgY29uc3QgbGlzdCA9IFtdXG4gICAgY29uc3Qgc29ydGVkRHJhZ2dhYmxlcyA9IHRoaXMuZ2V0U29ydGVkRHJhZ2dhYmxlcygpXG5cbiAgICBpZiAoIShkcmFnZ2FibGVzIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgICBkcmFnZ2FibGVzID0gW2RyYWdnYWJsZXNdXG4gICAgfVxuXG4gICAgZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5yZXNldE9uKCdkcmFnOmVuZCcpXG4gICAgICBkcmFnZ2FibGUucmVzZXRPbignZHJhZzptb3ZlJylcbiAgICAgIHJlbW92ZUl0ZW0odGhpcy5kcmFnZ2FibGVzLCBkcmFnZ2FibGUpXG4gICAgfSlcblxuICAgIGxldCBqID0gMFxuICAgIHNvcnRlZERyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBpZiAodGhpcy5kcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTEpIHtcbiAgICAgICAgaWYgKGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbiAhPT0gaW5pdGlhbFBvc2l0aW9uc1tqXSkge1xuICAgICAgICAgIGRyYWdnYWJsZS5waW5Qb3NpdGlvbihpbml0aWFsUG9zaXRpb25zW2pdLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICAgIH1cbiAgICAgICAgZHJhZ2dhYmxlLmluaXRpYWxQb3NpdGlvbiA9IGluaXRpYWxQb3NpdGlvbnNbal1cbiAgICAgICAgaisrXG4gICAgICAgIGxpc3QucHVzaChkcmFnZ2FibGUpXG4gICAgICB9XG4gICAgfSlcbiAgICB0aGlzLmRyYWdnYWJsZXMgPSBsaXN0XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLnJlbW92ZSh0aGlzLmRyYWdnYWJsZXMuc2xpY2UoKSlcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLmRlc3Ryb3koKSlcbiAgfVxuXG4gIGdldCBwb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q3VycmVudFBpbm5lZFBvc2l0aW9ucygpXG4gIH1cblxuICBzZXQgcG9zaXRpb25zKHBvc2l0aW9ucykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSAnd3JvbmcgYXJyYXkgbGVuZ3RoJ1xuICAgIGlmIChwb3NpdGlvbnMubGVuZ3RoID09PSB0aGlzLmRyYWdnYWJsZXMubGVuZ3RoKSB7XG4gICAgICBwb3NpdGlvbnMuZm9yRWFjaCgocG9pbnQsIGkpID0+IHtcbiAgICAgICAgdGhpcy5kcmFnZ2FibGVzW2ldLnBpblBvc2l0aW9uKHBvaW50KVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbWVzc2FnZVxuICAgIH1cbiAgfVxuXG4gIGdldCBlbmFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZVxuICB9XG5cbiAgc2V0IGVuYWJsZShlbmFibGUpIHtcbiAgICB0aGlzLl9lbmFibGUgPSBlbmFibGVcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUuZW5hYmxlID0gZW5hYmxlXG4gICAgfSlcbiAgfVxuXG4gIHN0YXRpYyBmYWN0b3J5KHBhcmVudEVsZW1lbnQsIGVsZW1lbnRzLCBvcHRpb25zPXt9KSB7XG4gICAgY29uc3QgZHJhZ2dhYmxlcyA9IEFycmF5LmZyb20oZWxlbWVudHMpLm1hcCgoZWxlbWVudCkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBEcmFnZ2FibGUoZWxlbWVudCwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIHBhcmVudDogcGFyZW50RWxlbWVudFxuICAgICAgfSwgb3B0aW9ucy5kcmFnZ2FibGUgfHwge30pKVxuICAgIH0pXG4gICAgcmV0dXJuIG5ldyBMaXN0KGRyYWdnYWJsZXMsIG9wdGlvbnMubGlzdCB8fCB7fSlcbiAgfVxufVxuIiwiZnVuY3Rpb24gc2V0U3R5bGUoZWxlbWVudCwgc3R5bGUpIHtcbiAgc3R5bGUgPSBzdHlsZSB8fCB7fVxuICBsZXQgY3NzVGV4dCA9ICcnXG4gIGZvciAoY29uc3Qga2V5IGluIHN0eWxlKSB7XG4gICAgaWYgKHN0eWxlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGNzc1RleHQgKz0ga2V5ICsgJzogJyArIHN0eWxlW2tleV0gKyAnOyAnXG4gICAgfVxuICB9XG5cbiAgZWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gY3NzVGV4dFxufVxuXG5mdW5jdGlvbiBhcHBlbmRGaXJzdENoaWxkKGVsZW1lbnQsIG5vZGUpIHtcbiAgaWYgKGVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgIGVsZW1lbnQuaW5zZXJ0QmVmb3JlKG5vZGUsIGVsZW1lbnQuZmlyc3RDaGlsZClcbiAgfSBlbHNlIHtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKG5vZGUpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQ2FudmFzKGFyZWEsIHJlY3RhZ2xlKSB7XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXG4gIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShhcmVhKS5wb3NpdGlvbiA9PT0gJ3N0YXRpYycpIHtcbiAgICBhcmVhLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJ1xuICB9XG5cbiAgY2FudmFzLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCByZWN0YWdsZS5zaXplLnggKyAncHgnKVxuICBjYW52YXMuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCByZWN0YWdsZS5zaXplLnkgKyAncHgnKVxuICBzZXRTdHlsZShjYW52YXMsIHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBsZWZ0OiByZWN0YWdsZS5wb3NpdGlvbi55ICsgJ3B4JyxcbiAgICB0b3A6IHJlY3RhZ2xlLnBvc2l0aW9uLnkgKyAncHgnLFxuICAgIHdpZHRoOiByZWN0YWdsZS5zaXplLnggKyAncHgnLFxuICAgIGhlaWdodDogcmVjdGFnbGUuc2l6ZS55ICsgJ3B4J1xuICB9KVxuICBhcHBlbmRGaXJzdENoaWxkKGFyZWEsIGNhbnZhcylcbiAgcmV0dXJuIGNhbnZhc1xufVxuIiwiaW1wb3J0IGNyZWF0ZUNhbnZhcyBmcm9tICcuL3V0aWxzL2NyZWF0ZS1jYW52YXMnXG5pbXBvcnQgUG9pbnQgZnJvbSAnLi9nZW9tZXRyeS9wb2ludCdcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSAnLi9nZW9tZXRyeS9yZWN0YW5nbGUnXG5cbmltcG9ydCB7IGdldFBvaW50RnJvbVJhZGlhbFN5c3RlbSB9IGZyb20gJy4vZ2VvbWV0cnkvYW5nbGVzJ1xuaW1wb3J0IHsgQm91bmRUb0xpbmUgfSBmcm9tICcuL2JvdW5kaW5nJ1xuaW1wb3J0IERyYWdnYWJsZSBmcm9tICcuL2RyYWdnYWJsZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3BpZGVyIHtcbiAgY29uc3RydWN0b3IoYXJlYSwgZWxlbWVudHMsIG9wdGlvbnM9e30pIHtcbiAgICBjb25zdCBhcmVhUmVjdGFuZ2xlID0gUmVjdGFuZ2xlLmZyb21FbGVtZW50KGFyZWEsIGFyZWEpXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBhbmdsZTogMCxcbiAgICAgIGRBbmdsZTogMiAqIE1hdGguUEkgLyBlbGVtZW50cy5sZW5ndGgsXG4gICAgICBjZW50ZXI6IGFyZWFSZWN0YW5nbGUuZ2V0Q2VudGVyKCksXG4gICAgICBzdGFydFJhZGl1czogNTAsXG4gICAgICBlbmRSYWRpdXM6IGFyZWFSZWN0YW5nbGUuZ2V0TWluU2lkZSgpIC8gMixcbiAgICAgIGxpbmVXaWR0aDogMixcbiAgICAgIHN0cm9rZVN0eWxlOiAnI2ZmNTU3NycsXG4gICAgICBmaWxsU3R5bGU6ICdyZ2JhKDE1MCwyNTUsNTAsMC44KSdcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGhpcy5hcmVhID0gYXJlYVxuICAgIHRoaXMuYXJlYVJlY3RhbmdsZSA9IGFyZWFSZWN0YW5nbGVcbiAgICB0aGlzLmluaXQoZWxlbWVudHMpXG4gIH1cblxuICBpbml0KGVsZW1lbnRzKSB7XG4gICAgdGhpcy5jYW52YXMgPSBjcmVhdGVDYW52YXModGhpcy5hcmVhLCB0aGlzLmFyZWFSZWN0YW5nbGUpXG4gICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gZWxlbWVudHMubWFwKChlbGVtZW50LCBpKSA9PiB7XG4gICAgICBjb25zdCBhbmdsZSA9IHRoaXMub3B0aW9ucy5hbmdsZSArIGkgKiB0aGlzLm9wdGlvbnMuZEFuZ2xlXG4gICAgICBjb25zdCBoYWxmU2l6ZSA9IFBvaW50LmVsZW1lbnRTaXplKGVsZW1lbnQpLm11bHQoMC41KVxuICAgICAgY29uc3Qgc3RhcnQgPSBnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oYW5nbGUsIHRoaXMub3B0aW9ucy5zdGFydFJhZGl1cywgdGhpcy5vcHRpb25zLmNlbnRlcikuc3ViKGhhbGZTaXplKVxuICAgICAgY29uc3QgZW5kID0gZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKGFuZ2xlLCB0aGlzLm9wdGlvbnMuZW5kUmFkaXVzLCB0aGlzLm9wdGlvbnMuY2VudGVyKS5zdWIoaGFsZlNpemUpXG5cbiAgICAgIHJldHVybiBuZXcgRHJhZ2dhYmxlKGVsZW1lbnQsIHtcbiAgICAgICAgcGFyZW50OiB0aGlzLmFyZWEsXG4gICAgICAgIGJvdW5kaW5nOiBuZXcgQm91bmRUb0xpbmUoc3RhcnQsIGVuZCksXG4gICAgICAgIHBvc2l0aW9uOiBzdGFydCxcbiAgICAgICAgb246IHtcbiAgICAgICAgICAnZHJhZzptb3ZlJzogKCkgPT4gdGhpcy5kcmF3KClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgdGhpcy5pc0luaXQgPSB0cnVlXG4gICAgdGhpcy5kcmF3KClcbiAgfVxuXG4gIGRyYXcoKSB7XG4gICAgaWYgKCF0aGlzLmlzSW5pdCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy5hcmVhUmVjdGFuZ2xlLnNpemUueCwgdGhpcy5hcmVhUmVjdGFuZ2xlLnNpemUueSlcbiAgICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKClcblxuICAgIGxldCBwb2ludCA9IHRoaXMuZHJhZ2dhYmxlc1swXS5nZXRDZW50ZXIoKVxuICAgIHRoaXMuY29udGV4dC5tb3ZlVG8ocG9pbnQueCwgcG9pbnQueSlcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kcmFnZ2FibGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBwb2ludCA9IHRoaXMuZHJhZ2dhYmxlc1tpXS5nZXRDZW50ZXIoKVxuICAgICAgdGhpcy5jb250ZXh0LmxpbmVUbyhwb2ludC54LCBwb2ludC55KVxuICAgIH1cbiAgICB0aGlzLmNvbnRleHQuY2xvc2VQYXRoKClcbiAgICB0aGlzLmNvbnRleHQubGluZVdpZHRoID0gdGhpcy5vcHRpb25zLmxpbmVXaWR0aFxuICAgIHRoaXMuY29udGV4dC5zdHJva2VTdHlsZSA9IHRoaXMub3B0aW9ucy5zdHJva2VTdHlsZVxuICAgIHRoaXMuY29udGV4dC5zdHJva2UoKVxuICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSB0aGlzLm9wdGlvbnMuZmlsbFN0eWxlXG4gICAgdGhpcy5jb250ZXh0LmZpbGwoKVxuICB9XG59XG4iLCJpbXBvcnQgRHJhZ2dhYmxlIGZyb20gJy4vZHJhZ2dhYmxlJ1xuaW1wb3J0IHsgQm91bmRUb0FyYyB9IGZyb20gJy4vYm91bmRpbmcnXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnRFbWl0dGVyJ1xuXG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gJy4vZ2VvbWV0cnkvcmVjdGFuZ2xlJ1xuaW1wb3J0IHtcbiAgZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtLFxuICBnZXRBbmdsZSxcbiAgbm9ybWFsaXplQW5nbGVcbn0gZnJvbSAnLi9nZW9tZXRyeS9hbmdsZXMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFyY1NsaWRlciBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKGFyZWEsIGVsZW1lbnQsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcih1bmRlZmluZWQsIG9wdGlvbnMpXG4gICAgY29uc3QgYXJlYVJlY3RhbmdsZSA9IFJlY3RhbmdsZS5mcm9tRWxlbWVudChhcmVhLCBhcmVhKVxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY2VudGVyOiBhcmVhUmVjdGFuZ2xlLmdldENlbnRlcigpLFxuICAgICAgcmFkaXVzOiBhcmVhUmVjdGFuZ2xlLmdldE1pblNpZGUoKSAvIDIsXG4gICAgICBzdGFydEFuZ2xlOiBNYXRoLlBJLFxuICAgICAgZW5kQW5nbGU6IDAsXG4gICAgICBhbmdsZXM6IFtNYXRoLlBJLCAtTWF0aC5QSSAvIDQsIDAsIE1hdGguUEkgLyA0LCBNYXRoLlBJIC8gMl0sXG4gICAgICB0aW1lOiA1MDBcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGhpcy5zaGlmdGVkQ2VudGVyID0gdGhpcy5vcHRpb25zLmNlbnRlclxuICAgIHRoaXMuYXJlYSA9IGFyZWFcbiAgICB0aGlzLmluaXQoZWxlbWVudClcbiAgfVxuXG4gIGluaXQoZWxlbWVudCkge1xuICAgIGNvbnN0IGFuZ2xlID0gdGhpcy5vcHRpb25zLnN0YXJ0QW5nbGVcbiAgICBjb25zdCBwb3NpdGlvbiA9IGdldFBvaW50RnJvbVJhZGlhbFN5c3RlbShcbiAgICAgIGFuZ2xlLFxuICAgICAgdGhpcy5vcHRpb25zLnJhZGl1cyxcbiAgICAgIHRoaXMuc2hpZnRlZENlbnRlclxuICAgIClcblxuICAgIHRoaXMuYW5nbGUgPSBhbmdsZVxuICAgIHRoaXMuZHJhZ2dhYmxlID0gbmV3IERyYWdnYWJsZShlbGVtZW50LCB7XG4gICAgICBwYXJlbnQ6IHRoaXMuYXJlYSxcbiAgICAgIGJvdW5kaW5nOiBuZXcgQm91bmRUb0FyYyhcbiAgICAgICAgdGhpcy5zaGlmdGVkQ2VudGVyLFxuICAgICAgICB0aGlzLm9wdGlvbnMucmFkaXVzLFxuICAgICAgICB0aGlzLm9wdGlvbnMuc3RhcnRBbmdsZSxcbiAgICAgICAgdGhpcy5vcHRpb25zLmVuZEFuZ2xlXG4gICAgICApLFxuICAgICAgcG9zaXRpb246IHBvc2l0aW9uLFxuICAgICAgb246IHtcbiAgICAgICAgJ2RyYWc6bW92ZSc6ICgpID0+IHRoaXMuY2hhbmdlKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgdXBkYXRlQW5nbGUoKSB7XG4gICAgdGhpcy5hbmdsZSA9IGdldEFuZ2xlKHRoaXMuc2hpZnRlZENlbnRlciwgdGhpcy5kcmFnZ2FibGUucG9zaXRpb24pXG4gIH1cblxuICBjaGFuZ2UoKSB7XG4gICAgdGhpcy51cGRhdGVBbmdsZSgpXG4gICAgLy8gICAgICB2YXIgYW5nbGUgPSBHZW9tZXRyeS5nZXROZWFyZXN0QW5nbGUodGhpcy5vcHRpb25zLmFuZ2xlcywgdGhpcy5hbmdsZSk7XG4gICAgLy8gICAgICB0aGlzLnNldEFuZ2xlKGFuZ2xlLHRoaXMub3B0aW9ucy50aW1lKTtcbiAgICB0aGlzLmVtaXQoJ2FyY3NsaWRlcjpjaGFuZ2UnLCB7IGFuZ2xlOiB0aGlzLmFuZ2xlIH0pXG4gIH1cblxuICBzZXRBbmdsZShhbmdsZSwgdGltZSkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKFxuICAgICAgdGhpcy5hbmdsZSxcbiAgICAgIHRoaXMub3B0aW9ucy5yYWRpdXMsXG4gICAgICB0aGlzLnNoaWZ0ZWRDZW50ZXJcbiAgICApXG4gICAgdGhpcy5hbmdsZSA9IG5vcm1hbGl6ZUFuZ2xlKGFuZ2xlLCBwb3NpdGlvbilcbiAgICB0aGlzLmRyYWdnYWJsZS5waW5Qb3NpdGlvbihwb3NpdGlvbiwgdGltZXx8MClcbiAgICB0aGlzLmVtaXQoJ2FyY3NsaWRlcjpjaGFuZ2UnLCB0aGlzLmFuZ2xlKVxuICB9XG59XG4iLCJpbXBvcnQgY3JlYXRlQ2FudmFzIGZyb20gJy4vdXRpbHMvY3JlYXRlLWNhbnZhcydcbmltcG9ydCByYW5nZSBmcm9tICcuL3V0aWxzL3JhbmdlJ1xuaW1wb3J0IFBvaW50IGZyb20gJy4vZ2VvbWV0cnkvcG9pbnQnXG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gJy4vZ2VvbWV0cnkvcmVjdGFuZ2xlJ1xuXG5pbXBvcnQgeyBnZXREaXN0YW5jZSB9IGZyb20gJy4vZ2VvbWV0cnkvZGlzdGFuY2VzJ1xuXG5pbXBvcnQge1xuICB0b1JhZGlhbixcbiAgZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtLFxuICBnZXRBbmdsZSxcbiAgbm9ybWFsaXplQW5nbGVcbn0gZnJvbSAnLi9nZW9tZXRyeS9hbmdsZXMnXG5cbmltcG9ydCBEcmFnZ2FibGUgZnJvbSAnLi9kcmFnZ2FibGUnXG5pbXBvcnQgeyBCb3VuZFRvQXJjIH0gZnJvbSAnLi9ib3VuZGluZydcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudEVtaXR0ZXInXG5cbmNvbnN0IHJuZCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKjI1NSlcbn1cblxuY29uc3QgdG9IZXhTdHJpbmcgPSBmdW5jdGlvbihkaWdpdCkge1xuICBsZXQgc3RyID0gZGlnaXQudG9TdHJpbmcoMTYpXG4gIHdoaWxlIChzdHIubGVuZ3RoIDwgMikge1xuICAgIHN0ciA9ICcwJyArIHN0clxuICB9XG4gIHJldHVybiBzdHJcbn1cblxuZnVuY3Rpb24gcmFuZG9tQ29sb3IoKSB7XG4gIHJldHVybiBgIyR7dG9IZXhTdHJpbmcocm5kKCkpfSR7dG9IZXhTdHJpbmcocm5kKCkpfSR7dG9IZXhTdHJpbmcocm5kKCkpfWBcbn1cblxuZnVuY3Rpb24gZ2V0QXJyYXlXaXRoQm91bmRJbmRleGVzKGluZGV4LCBsZW5ndGgpIHtcbiAgY29uc3QgcmV0SW5kZXhlcyA9IFtdXG4gIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICByZXRJbmRleGVzLnB1c2goaW5kZXgpXG4gICAgcmV0SW5kZXhlcy5wdXNoKChpbmRleCArIDEpICUgbGVuZ3RoKVxuICB9XG5cbiAgcmV0dXJuIHJldEluZGV4ZXNcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhcnQgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAoYXJlYSwgZWxlbWVudHMsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcih1bmRlZmluZWQsIG9wdGlvbnMpXG4gICAgY29uc3QgYXJlYVJlY3RhbmdsZSA9IFJlY3RhbmdsZS5mcm9tRWxlbWVudChhcmVhLCBhcmVhKVxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY2VudGVyOiBhcmVhUmVjdGFuZ2xlLmdldENlbnRlcigpLFxuICAgICAgcmFkaXVzOiBhcmVhUmVjdGFuZ2xlLmdldE1pblNpZGUoKSAvIDIsXG4gICAgICB0b3VjaFJhZGl1czogYXJlYVJlY3RhbmdsZS5nZXRNaW5TaWRlKCkgLyAyLFxuICAgICAgYm91bmRBbmdsZTogTWF0aC5QSSAvIDksXG4gICAgICBmaWxsU3R5bGVzOiByYW5nZSgwLCBlbGVtZW50cy5sZW5ndGgpLm1hcCgoKSA9PiByYW5kb21Db2xvcigpKSxcbiAgICAgIGluaXRBbmdsZXM6IHJhbmdlKC05MCwgMjcwLCAzNjAgLyBlbGVtZW50cy5sZW5ndGgpLm1hcCgoYW5nbGUpID0+IHRvUmFkaWFuKGFuZ2xlKSksXG4gICAgICBsaW1pdEltZzogbnVsbCxcbiAgICAgIGxpbWl0SW1nT2Zmc2V0OiBuZXcgUG9pbnQoMCwgMClcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGhpcy5hcmVhID0gYXJlYVxuICAgIHRoaXMuYXJlYVJlY3RhbmdsZSA9IGFyZWFSZWN0YW5nbGVcbiAgICB0aGlzLmluaXQoZWxlbWVudHMpXG4gIH1cblxuICBpbml0KGVsZW1lbnRzKSB7XG4gICAgdGhpcy5jYW52YXMgPSBjcmVhdGVDYW52YXModGhpcy5hcmVhLCB0aGlzLmFyZWFSZWN0YW5nbGUpXG4gICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGVsZW1lbnRzLm1hcCgoZWxlbWVudCwgaSkgPT4ge1xuICAgICAgY29uc3QgYW5nbGUgPSB0aGlzLm9wdGlvbnMuaW5pdEFuZ2xlc1tpXVxuICAgICAgY29uc3QgaGFsZlNpemUgPSBQb2ludC5lbGVtZW50U2l6ZShlbGVtZW50KS5tdWx0KDAuNSlcbiAgICAgIGNvbnN0IHBvc2l0aW9uID0gZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKFxuICAgICAgICBhbmdsZSxcbiAgICAgICAgdGhpcy5vcHRpb25zLnRvdWNoUmFkaXVzLFxuICAgICAgICB0aGlzLm9wdGlvbnMuY2VudGVyLnN1YihoYWxmU2l6ZSlcbiAgICAgIClcblxuICAgICAgcmV0dXJuIG5ldyBEcmFnZ2FibGUoZWxlbWVudCwge1xuICAgICAgICBwYXJlbnQ6IHRoaXMuYXJlYSxcbiAgICAgICAgYm91bmRpbmc6IG5ldyBCb3VuZFRvQXJjKFxuICAgICAgICAgIHRoaXMub3B0aW9ucy5jZW50ZXIuc3ViKGhhbGZTaXplKSxcbiAgICAgICAgICB0aGlzLm9wdGlvbnMudG91Y2hSYWRpdXMsXG4gICAgICAgICAgdGhpcy5nZXRCb3VuZEFuZ2xlKGksIGZhbHNlKSxcbiAgICAgICAgICB0aGlzLmdldEJvdW5kQW5nbGUoaSwgdHJ1ZSlcbiAgICAgICAgKSxcbiAgICAgICAgcG9zaXRpb246IHBvc2l0aW9uLFxuICAgICAgICBvbjoge1xuICAgICAgICAgICdkcmFnOm1vdmUnOiAoKSA9PiB0aGlzLmRyYXcoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG5cbiAgICB0aGlzLmlzSW5pdCA9IHRydWVcbiAgICB0aGlzLmRyYXcoKVxuICB9XG5cbiAgdXBkYXRlQW5nbGVzKCkge1xuICAgIHRoaXMuYW5nbGVzID0gdGhpcy5kcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBjb25zdCBoYWxmU2l6ZSA9IGRyYWdnYWJsZS5nZXRTaXplKCkubXVsdCgwLjUpXG4gICAgICByZXR1cm4gZ2V0QW5nbGUodGhpcy5vcHRpb25zLmNlbnRlci5zdWIoaGFsZlNpemUpLCBkcmFnZ2FibGUucG9zaXRpb24pXG4gICAgfSlcbiAgfVxuXG4gIGdldEJvdW5kQW5nbGUoaW5kZXgsIGlzQ2xvc3NpbmcpIHtcbiAgICBjb25zdCBzaWduID0gaXNDbG9zc2luZyA/IDEgOiAtMVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGxldCBpID0gKGluZGV4ICsgc2lnbikgJSB0aGlzLmFuZ2xlcy5sZW5ndGhcbiAgICAgIGlmIChpIDwgMCkge1xuICAgICAgICBpICs9IHRoaXMuYW5nbGVzLmxlbmd0aFxuICAgICAgfVxuICAgICAgcmV0dXJuIG5vcm1hbGl6ZUFuZ2xlKHRoaXMuYW5nbGVzW2ldIC0gc2lnbiAqIHRoaXMub3B0aW9ucy5ib3VuZEFuZ2xlKVxuICAgIH1cbiAgfVxuXG4gIGRyYXcoKSB7XG4gICAgaWYgKCF0aGlzLmlzSW5pdCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVBbmdsZXMoKVxuICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy5hcmVhUmVjdGFuZ2xlLnNpemUueCwgdGhpcy5hcmVhUmVjdGFuZ2xlLnNpemUueSlcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoX2RyYWdnYWJsZSwgaW5kZXgpID0+IHtcbiAgICAgIHRoaXMuZHJhd0FyYyh0aGlzLmNvbnRleHQsIHRoaXMub3B0aW9ucy5jZW50ZXIsIHRoaXMub3B0aW9ucy5yYWRpdXMsIGluZGV4KVxuICAgIH0pXG5cbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoX2RyYWdnYWJsZSwgaW5kZXgpID0+IHtcbiAgICAgIHRoaXMuZHJhd0xpbWl0SW1nKGluZGV4KVxuICAgIH0pXG5cbiAgICB0aGlzLmVtaXQoJ2NoYXJ0OmRyYXcnKVxuICB9XG5cbiAgY3JlYXRlQ2xvbmUoZWxlbWVudCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgaWYgKCF0aGlzLmlzSW5pdCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IHJlY3RhbmdsZSA9IFJlY3RhbmdsZS5mcm9tRWxlbWVudChlbGVtZW50LCBlbGVtZW50KVxuICAgIGNvbnN0IG9wdHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNlbnRlcjogcmVjdGFuZ2xlLmdldENlbnRlcigpLFxuICAgICAgcmFkaXVzOiByZWN0YW5nbGUuZ2V0TWluU2lkZSgpIC8gMixcbiAgICAgIGZpbGxTdHlsZXM6IHRoaXMub3B0aW9ucy5maWxsU3R5bGVzXG4gICAgfSwgb3B0aW9ucylcblxuICAgIGNvbnN0IGNhbnZhcyA9IGNyZWF0ZUNhbnZhcyhlbGVtZW50LCByZWN0YW5nbGUpXG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG4gICAgY29uc3QgY2xvbmVPYmogPSB7XG4gICAgICBkcmF3OiAoKSA9PiB7XG4gICAgICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHJlY3RhbmdsZS5zaXplLngsIHJlY3RhbmdsZS5zaXplLnkpXG4gICAgICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChfZHJhZ2dhYmxlLCBpbmRleCkgPT4ge1xuICAgICAgICAgIHRoaXMuZHJhd0FyYyhjb250ZXh0LCBvcHRzLmNlbnRlciwgb3B0cy5yYWRpdXMsIGluZGV4KVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgICBjbG9uZU9iai5kcmF3KClcbiAgICByZXR1cm4gY2xvbmVPYmpcbiAgfVxuXG4gIGdldEZpbGxTdHlsZShpbmRleCkge1xuICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmZpbGxTdHlsZXNbaW5kZXhdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLm9wdGlvbnMuZmlsbFN0eWxlc1tpbmRleF0gPSB0aGlzLm9wdGlvbnMuZmlsbFN0eWxlc1tpbmRleF0uY2FsbCh0aGlzKVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmZpbGxTdHlsZXNbaW5kZXhdXG4gIH1cblxuICBkcmF3QXJjKGNvbnRleHQsIGNlbnRlciwgcmFkaXVzLCBpbmRleCkge1xuICAgIGNvbnN0IHN0YXJ0QW5nbGUgPSB0aGlzLmFuZ2xlc1tpbmRleF1cbiAgICBjb25zdCBlbmRBbmdsZSA9IHRoaXMuYW5nbGVzWyhpbmRleCsxKSAlIHRoaXMuYW5nbGVzLmxlbmd0aF1cbiAgICBjb25zdCBjb2xvciA9IHRoaXMuZ2V0RmlsbFN0eWxlKGluZGV4KVxuXG4gICAgY29udGV4dC5iZWdpblBhdGgoKVxuICAgIGNvbnRleHQubW92ZVRvKGNlbnRlci54LCBjZW50ZXIueSlcbiAgICBjb250ZXh0LmFyYyhjZW50ZXIueCwgY2VudGVyLnksIHJhZGl1cywgc3RhcnRBbmdsZSwgZW5kQW5nbGUsIGZhbHNlKVxuICAgIGNvbnRleHQubGluZVRvKGNlbnRlci54LCBjZW50ZXIueSlcbiAgICBjb250ZXh0LmNsb3NlUGF0aCgpXG4gICAgY29udGV4dC5maWxsU3R5bGUgPSBjb2xvclxuICAgIGNvbnRleHQuZmlsbCgpXG4gIH1cblxuICBkcmF3TGltaXRJbWcoaW5kZXgpIHtcbiAgICBsZXQgcG9pbnQsIGltZ1xuICAgIGlmICh0aGlzLm9wdGlvbnMubGltaXRJbWcpIHtcbiAgICAgIGltZyA9IHRoaXMub3B0aW9ucy5saW1pdEltZyBpbnN0YW5jZW9mIEFycmF5ID8gdGhpcy5vcHRpb25zLmxpbWl0SW1nW2luZGV4XSA6IHRoaXMub3B0aW9ucy5saW1pdEltZ1xuICAgIH1cblxuICAgIGlmIChpbWcpIHtcbiAgICAgIGNvbnN0IGFuZ2xlID0gbm9ybWFsaXplQW5nbGUodGhpcy5hbmdsZXNbaW5kZXhdKVxuICAgICAgcG9pbnQgPSBuZXcgUG9pbnQoMCwgLWltZy5oZWlnaHQgLyAyKVxuICAgICAgcG9pbnQgPSBwb2ludC5hZGQodGhpcy5vcHRpb25zLmxpbWl0SW1nT2Zmc2V0KVxuICAgICAgdGhpcy5jb250ZXh0LnRyYW5zbGF0ZSh0aGlzLmFyZWFSZWN0YW5nbGUuc2l6ZS54IC8gMiwgdGhpcy5hcmVhUmVjdGFuZ2xlLnNpemUueSAvIDIpXG4gICAgICB0aGlzLmNvbnRleHQucm90YXRlKGFuZ2xlKVxuICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZShpbWcsIHBvaW50LngsIHBvaW50LnkpXG4gICAgICB0aGlzLmNvbnRleHQuc2V0VHJhbnNmb3JtKDEsIDAsIDAsIDEsIDAsIDApXG4gICAgfVxuICB9XG5cbiAgZ2V0QW5nbGVzRGlmZigpIHtcbiAgICBjb25zdCBhbmdsZXMgPSB0aGlzLmFuZ2xlcy5zbGljZSgxKVxuICAgIGxldCBiYXNlQW5nbGUgPSB0aGlzLmFuZ2xlc1swXVxuXG4gICAgYW5nbGVzLnB1c2goYmFzZUFuZ2xlKVxuICAgIHJldHVybiBhbmdsZXMubWFwKChhbmdsZSkgPT4ge1xuICAgICAgY29uc3QgZGlmZkFuZ2xlID0gbm9ybWFsaXplQW5nbGUoYW5nbGUgLSBiYXNlQW5nbGUpXG4gICAgICBiYXNlQW5nbGUgPSBhbmdsZVxuICAgICAgcmV0dXJuIGRpZmZBbmdsZVxuICAgIH0pXG4gIH1cblxuICBnZXRQZXJjZW50KCkge1xuICAgIHJldHVybiB0aGlzLmdldEFuZ2xlc0RpZmYoKS5tYXAoKGRpZmZBbmdsZSkgPT4gZGlmZkFuZ2xlIC8gKDIgKiBNYXRoLlBJKSlcbiAgfVxuXG4gIGdldEFyY0Jpc2VjdHJpeHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0QW5nbGVzRGlmZigpLm1hcCgoZGlmZkFuZ2xlLCBpKSA9PiB7XG4gICAgICByZXR1cm4gbm9ybWFsaXplQW5nbGUodGhpcy5hbmdsZXNbaV0gKyBkaWZmQW5nbGUgLyAyKVxuICAgIH0pXG4gIH1cblxuICBnZXRBcmNPblBvaW50KHBvaW50KSB7XG4gICAgY29uc3QgYW5nbGUgPSBnZXRBbmdsZSh0aGlzLm9wdGlvbnMuY2VudGVyLCBwb2ludClcbiAgICBjb25zdCByYWRpdXMgPSBnZXREaXN0YW5jZSh0aGlzLm9wdGlvbnMuY2VudGVyLCBwb2ludClcblxuICAgIGlmIChyYWRpdXMgPiB0aGlzLm9wdGlvbnMucmFkaXVzKSB7XG4gICAgICByZXR1cm4gLTFcbiAgICB9XG5cbiAgICBsZXQgb2Zmc2V0ID0gLTEsIGksIGpcbiAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5hbmdsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChvZmZzZXQgPT09IC0xIHx8IHRoaXMuYW5nbGVzW29mZnNldF0gPiB0aGlzLmFuZ2xlc1tpXSkge1xuICAgICAgICBvZmZzZXQgPSBpXG4gICAgICB9XG4gICAgfVxuICAgIGZvciAoaSA9IDAsIGogPSBvZmZzZXQ7IGkgPCB0aGlzLmFuZ2xlcy5sZW5ndGg7IGkrKywgaiA9IChpICsgb2Zmc2V0KSAlIHRoaXMuYW5nbGVzLmxlbmd0aCkge1xuICAgICAgaWYgKGFuZ2xlIDwgdGhpcy5hbmdsZXNbal0pIHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKC0taiA8IDApIHtcbiAgICAgIGogKz0gdGhpcy5hbmdsZXMubGVuZ3RoXG4gICAgfVxuICAgIHJldHVybiBqXG4gIH1cblxuICBzZXRBbmdsZXMoYW5nbGVzKSB7XG4gICAgdGhpcy5hbmdsZXMgPSBhbmdsZXNcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlLCBpKSA9PiB7XG4gICAgICBjb25zdCBhbmdsZSA9IHRoaXMuYW5nbGVzW2ldXG4gICAgICBjb25zdCBoYWxmU2l6ZSA9IGRyYWdnYWJsZS5nZXRTaXplKCkubXVsdCgwLjUpXG4gICAgICBjb25zdCBwb3NpdGlvbiA9IGdldFBvaW50RnJvbVJhZGlhbFN5c3RlbShcbiAgICAgICAgYW5nbGUsXG4gICAgICAgIHRoaXMub3B0aW9ucy50b3VjaFJhZGl1cyxcbiAgICAgICAgdGhpcy5vcHRpb25zLmNlbnRlci5zdWIoaGFsZlNpemUpXG4gICAgICApXG5cbiAgICAgIGRyYWdnYWJsZS5tb3ZlQW5kU2F2ZShwb3NpdGlvbilcbiAgICB9KVxuICAgIHRoaXMuZHJhdygpXG4gIH1cblxuICBzZXRBY3RpdmVBcmMoaW5kZXgpIHtcbiAgICBjb25zdCBlbmFibGVJbmRleGVzID0gZ2V0QXJyYXlXaXRoQm91bmRJbmRleGVzKGluZGV4LCB0aGlzLmRyYWdnYWJsZXMubGVuZ3RoKVxuICAgIHRoaXMuYWN0aXZlQXJjSW5kZXggPSBpbmRleFxuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUsIGkpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5lbmFibGUgPSBlbmFibGVJbmRleGVzLmluZGV4T2YoaSkgIT09IC0xXG4gICAgfSlcbiAgICB0aGlzLmRyYXcoKVxuICB9XG59XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9nZW9tZXRyeS9wb2ludCdcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSAnLi9nZW9tZXRyeS9yZWN0YW5nbGUnXG5pbXBvcnQgRHJhZ2dhYmxlIGZyb20gJy4vZHJhZ2dhYmxlJ1xuaW1wb3J0IExpc3QgZnJvbSAnLi9saXN0J1xuaW1wb3J0IFRhcmdldCBmcm9tICcuL3RhcmdldCdcbmltcG9ydCB7IHNjb3BlcywgZGVmYXVsdFNjb3BlLCBTY29wZSwgc2NvcGUgfSBmcm9tICcuL3Njb3BlJ1xuaW1wb3J0IHsgTm90Q3Jvc3NpbmdTdHJhdGVneSwgRmxvYXRMZWZ0U3RyYXRlZ3ksIEZsb2F0UmlnaHRTdHJhdGVneSB9IGZyb20gJy4vcG9zaXRpb25pbmcnXG5pbXBvcnQgU3BpZGVyIGZyb20gJy4vc3BpZGVyJ1xuaW1wb3J0IEFyY1NsaWRlciBmcm9tICcuL2FyY3NsaWRlcidcbmltcG9ydCBDaGFydCBmcm9tICcuL2NoYXJ0J1xuaW1wb3J0IHsgZ2V0RGlzdGFuY2UsIGdldFhEaWZmZXJlbmNlLCBnZXRZRGlmZmVyZW5jZSwgdHJhbnNmb3JtZWRTcGFjZURpc3RhbmNlRmFjdG9yeSB9IGZyb20gJy4vZ2VvbWV0cnkvZGlzdGFuY2VzJ1xuaW1wb3J0IHsgYWRkQ2xhc3MsIHJlbW92ZUNsYXNzIH0gZnJvbSAnLi91dGlscy9jbGFzc2VzJ1xuaW1wb3J0IHtcbiAgQm91bmQsXG4gIEJvdW5kVG9SZWN0YW5nbGUsXG4gIEJvdW5kVG9FbGVtZW50LFxuICBCb3VuZFRvTGluZVgsXG4gIEJvdW5kVG9MaW5lWSxcbiAgQm91bmRUb0xpbmUsXG4gIEJvdW5kVG9DaXJjbGUsXG4gIEJvdW5kVG9BcmNcbn0gZnJvbSAnLi9ib3VuZGluZydcblxuY29uc3QgYm91bmQgPSB7XG4gIEJvdW5kLFxuICBCb3VuZFRvUmVjdGFuZ2xlLFxuICBCb3VuZFRvRWxlbWVudCxcbiAgQm91bmRUb0xpbmVYLFxuICBCb3VuZFRvTGluZVksXG4gIEJvdW5kVG9MaW5lLFxuICBCb3VuZFRvQ2lyY2xlLFxuICBCb3VuZFRvQXJjXG59XG5cbmNvbnN0IGRpc3RhbmNlID0ge1xuICBnZXREaXN0YW5jZSxcbiAgZ2V0WERpZmZlcmVuY2UsXG4gIGdldFlEaWZmZXJlbmNlLFxuICB0cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5XG59XG5cbmV4cG9ydCB7XG4gIERyYWdnYWJsZSxcbiAgUG9pbnQsIFJlY3RhbmdsZSxcbiAgTGlzdCxcbiAgVGFyZ2V0LFxuICBzY29wZXMsIGRlZmF1bHRTY29wZSwgU2NvcGUsIHNjb3BlLFxuICBOb3RDcm9zc2luZ1N0cmF0ZWd5LCBGbG9hdExlZnRTdHJhdGVneSwgRmxvYXRSaWdodFN0cmF0ZWd5LFxuICBTcGlkZXIsXG4gIEFyY1NsaWRlcixcbiAgQ2hhcnQsXG4gIGJvdW5kLFxuICBkaXN0YW5jZSxcbiAgYWRkQ2xhc3MsIHJlbW92ZUNsYXNzXG59XG4iXSwibmFtZXMiOlsiZ2V0U3VtVmFsdWVPZlN0eWxlUnVsZXMiLCJlbGVtZW50IiwicnVsZXMiLCJyZWR1Y2UiLCJzdW0iLCJydWxlIiwicGFyc2VJbnQiLCJ3aW5kb3ciLCJnZXRDb21wdXRlZFN0eWxlIiwiUG9pbnQiLCJ4IiwieSIsInAiLCJrIiwicGFyZW50IiwicGFyZW50Tm9kZSIsImVsZW1lbnRSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicGFyZW50UmVjdCIsImxlZnQiLCJ0b3AiLCJpc0NvbnRlbnRCb3hTaXplIiwid2lkdGgiLCJoZWlnaHQiLCJSZWN0YW5nbGUiLCJwb3NpdGlvbiIsInNpemUiLCJhZGQiLCJtdWx0IiwicmVjdCIsIk1hdGgiLCJtaW4iLCJtYXgiLCJzdWIiLCJyZWN0YW5nbGUiLCJpbmNsdWRlUG9pbnQiLCJnZXRQMyIsImF4aXMiLCJzZWxBeGlzIiwiY3Jvc3NSZWN0YW5nbGUiLCJhbmQiLCJ0aGlzQ2VudGVyIiwiZ2V0Q2VudGVyIiwicmVjdENlbnRlciIsInNpZ24iLCJvZmZzZXQiLCJlbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInN0eWxlIiwiaXNDb25zaWRlclRyYW5zbGF0ZSIsImVsZW1lbnRPZmZzZXQiLCJlbGVtZW50U2l6ZSIsImhhc0NsYXNzIiwiYyIsInJlIiwiUmVnRXhwIiwidGVzdCIsImNsYXNzTmFtZSIsImFkZENsYXNzIiwicmVwbGFjZSIsInJlbW92ZUNsYXNzIiwiZ2V0RGVmYXVsdFBhcmVudCIsInRhZ05hbWUiLCJFdmVudEVtaXR0ZXIiLCJjb250ZXh0Iiwib3B0aW9ucyIsImV2ZW50cyIsIm9uIiwiT2JqZWN0IiwiZW50cmllcyIsImV2ZW50TmFtZSIsImZuIiwiaW50ZXJydXB0ZWQiLCJhcmdzIiwic2xpY2UiLCJjYWxsIiwiYXJndW1lbnRzIiwiZnVuYyIsImFwcGx5IiwicHVzaCIsInVuc2hpZnQiLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJnZXREaXN0YW5jZSIsInAxIiwicDIiLCJkeCIsImR5Iiwic3FydCIsImdldFhEaWZmZXJlbmNlIiwiYWJzIiwiZ2V0WURpZmZlcmVuY2UiLCJ0cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5IiwicG93IiwiaW5kZXhPZk5lYXJlc3RQb2ludCIsImFyciIsInZhbCIsInJhZGl1cyIsImdldERpc3RhbmNlRnVuYyIsImkiLCJ0ZW1wIiwibGVuZ3RoIiwiZGlyZWN0Q3Jvc3NpbmciLCJMMVAxIiwiTDFQMiIsIkwyUDEiLCJMMlAyIiwiazEiLCJrMiIsImIxIiwiYjIiLCJib3VuZFRvTGluZSIsIkEiLCJCIiwiUCIsIkFQIiwiQUIiLCJhYjIiLCJhcF9hYiIsInQiLCJnZXRQb2ludE9uTGluZUJ5TGVuZ2h0IiwiTFAxIiwiTFAyIiwibGVuZ2h0IiwicGVyY2VudCIsImFkZFBvaW50VG9Cb3VuZFBvaW50cyIsImJvdW5kcG9pbnRzIiwicG9pbnQiLCJpc1JpZ2h0IiwicmVzdWx0IiwiZmlsdGVyIiwiYlBvaW50IiwiZ2V0QW5nbGVEaWZmIiwiYWxwaGEiLCJiZXRhIiwibWluQW5nbGUiLCJtYXhBbmdsZSIsIlBJIiwiZ2V0QW5nbGUiLCJkaWZmIiwibm9ybWFsaXplQW5nbGUiLCJhdGFuMiIsInRvUmFkaWFuIiwiYW5nbGUiLCJib3VuZEFuZ2xlIiwiZG1pbiIsImRtYXgiLCJnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0iLCJjZW50ZXIiLCJjb3MiLCJzaW4iLCJCb3VuZCIsIl9zaXplIiwiQm91bmRUb1JlY3RhbmdsZSIsImNhbGNQb2ludCIsImNsb25lIiwicmVjdFAyIiwiQm91bmRUb0VsZW1lbnQiLCJmcm9tRWxlbWVudCIsIkJvdW5kVG9MaW5lWCIsInN0YXJ0WSIsImVuZFkiLCJCb3VuZFRvTGluZVkiLCJzdGFydFgiLCJlbmRYIiwiQm91bmRUb0xpbmUiLCJzdGFydFBvaW50IiwiZW5kUG9pbnQiLCJzb21lSyIsImNvc0JldGEiLCJzaW5CZXRhIiwicG9pbnQyIiwibmV3RW5kUG9pbnQiLCJwb2ludENyb3NzaW5nIiwiQm91bmRUb0NpcmNsZSIsIkJvdW5kVG9BcmMiLCJzdGFydEFuZ2xlIiwiZW5kQW5nbGUiLCJfc3RhcnRBbmdsZSIsIl9lbmRBbmdsZSIsImFycmF5IiwicmFuZ2UiLCJzdGFydCIsInN0b3AiLCJzdGVwIiwiQmFzaWNTdHJhdGVneSIsIk5vdENyb3NzaW5nU3RyYXRlZ3kiLCJyZWN0YW5nbGVMaXN0IiwiaW5kZXhlc09mTmV3cyIsInN0YXRpY1JlY3RhbmdsZUluZGV4ZXMiLCJpbmRleGVzIiwiX3JlY3QiLCJmb3JFYWNoIiwicmVtb3ZhYmxlIiwiaW5kZXhPZlN0YXRpYyIsInN0YXRpY1JlY3QiLCJtb3ZlVG9Cb3VuZCIsInNvbWUiLCJib3VuZFJlY3QiLCJnZXRTcXVhcmUiLCJvZGxEcmFnZ2FibGVzTGlzdCIsIm5ld0RyYWdnYWJsZXMiLCJpbmRleE9mTmV3cyIsImRyYWdnYWJsZXMiLCJjb25jYXQiLCJkcmFnZ2FibGUiLCJGbG9hdExlZnRTdHJhdGVneSIsImFzc2lnbiIsInBhZGRpbmdUb3BMZWZ0IiwicGFkZGluZ0JvdHRvbVJpZ2h0IiwieUdhcEJldHdlZW5EcmFnZ2FibGVzIiwiZ2V0UG9zaXRpb24iLCJfaW5kZXhlc09mTmV3cyIsImdldFAyIiwiYm91bmRhcnlQb2ludHMiLCJyZWN0SW5kZXgiLCJpc1ZhbGlkIiwibmV3TGlzdCIsImxpc3RPbGRQb3NpdGlvbiIsIm1hcCIsIm5ld0RyYWdnYWJsZSIsIkZsb2F0UmlnaHRTdHJhdGVneSIsInBhZGRpbmdUb3BSaWdodCIsInBhZGRpbmdCb3R0b21MZWZ0IiwicGFkZGluZ0JvdHRvbU5lZ0xlZnQiLCJnZXRQNCIsImFkZFRvRGVmYXVsdFNjb3BlIiwidGFyZ2V0IiwiZGVmYXVsdFNjb3BlIiwiYWRkVGFyZ2V0IiwiVGFyZ2V0IiwidW5kZWZpbmVkIiwidGltZUVuZCIsInRpbWVFeGNhbmdlIiwicG9zaXRpb25pbmdTdHJhdGVneSIsInN0cmF0ZWd5IiwiZ2V0UmVjdGFuZ2xlIiwiYmluZCIsInRhcmdldHMiLCJlbWl0dGVyIiwiZW1pdCIsImluaXQiLCJpbmRleGVzT2ZOZXciLCJwb3NpdGlvbmluZyIsIm9sZERyYWdnYWJsZXMiLCJzb3J0aW5nIiwicmVjdGFuZ2xlcyIsImlubmVyRHJhZ2dhYmxlcyIsInNldFBvc2l0aW9uIiwiY2F0Y2hEcmFnZ2FibGUiLCJ0YXJnZXRSZWN0YW5nbGUiLCJkcmFnZ2FibGVTcXVhcmUiLCJzY29wZXMiLCJzY29wZSIsInJlbW92ZUl0ZW0iLCJuZXdEcmFnZ2FibGVzSW5kZXgiLCJhZGRSZW1vdmVPbk1vdmUiLCJ0aW1lIiwibW92ZSIsImluaXRpYWxQb3NpdGlvbiIsInB1c2hJbm5lckRyYWdnYWJsZSIsInJlbW92ZUhhbmRsZXIiLCJyZW1vdmUiLCJ1bnN1YnNjcmliZSIsIlNjb3BlIiwiZHJhZ0VuZEFjdGlvbiIsIm9uRW5kIiwic2hvdFRhcmdldHMiLCJzb3J0IiwiYSIsImIiLCJwaW5Qb3NpdGlvbiIsInJlc2V0IiwicmVmcmVzaCIsInBvc2l0aW9ucyIsIm1lc3NhZ2UiLCJ0YXJnZXRJbmRleGVzIiwiY3VycmVudFNjb3BlIiwiYWRkRHJhZ2dhYmxlVG9TY29wZSIsImFkZERyYWdnYWJsZSIsIkRyYWdnYWJsZSIsImludGVycnVwdCIsImFkZFRhcmdldFRvU2NvcGUiLCJwcmVwZW5kT24iLCJjaGVja1N1cHBvcnRQYXNzaXZlRXZlbnRzIiwicGFzc2l2ZVN1cHBvcnRlZCIsImRlZmluZVByb3BlcnR5IiwiZ2V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJfZXJyIiwiaXNTdXBwb3J0UGFzc2l2ZUV2ZW50cyIsImlzVG91Y2giLCJtb3VzZUV2ZW50cyIsImVuZCIsInRvdWNoRXZlbnRzIiwidHJhbnNmb3JtUHJvcGVydHkiLCJnZXRTdHlsZVByb3BlcnR5IiwidHJhbnNpdGlvblByb3BlcnR5IiwiZ2V0VG91Y2hCeUlEIiwidG91Y2hJZCIsImNoYW5nZWRUb3VjaGVzIiwiaWRlbnRpZmllciIsInByZXZlbnREb3VibGVJbml0IiwiZXhpc3RpbmciLCJjb3B5U3R5bGVzIiwic291cmNlIiwiZGVzdGluYXRpb24iLCJjcyIsImtleSIsImNoaWxkcmVuIiwiX2VuYWJsZSIsInN0YXJ0UG9zaXRpb25pbmciLCJzdGFydExpc3RlbmluZyIsIl9zZXREZWZhdWx0VHJhbnNpdGlvbiIsInBpbm5lZFBvc2l0aW9uIiwiYm91bmRpbmciLCJfZHJhZ1N0YXJ0IiwiZXZlbnQiLCJkcmFnU3RhcnQiLCJfZHJhZ01vdmUiLCJkcmFnTW92ZSIsIl9kcmFnRW5kIiwiZHJhZ0VuZCIsIl9uYXRpdmVEcmFnU3RhcnQiLCJuYXRpdmVEcmFnU3RhcnQiLCJfbmF0aXZlRHJhZ092ZXIiLCJuYXRpdmVEcmFnT3ZlciIsIl9uYXRpdmVEcmFnRW5kIiwibmF0aXZlRHJhZ0VuZCIsIl9uYXRpdmVEcm9wIiwibmF0aXZlRHJvcCIsImhhbmRsZXIiLCJwYXNzaXZlIiwiX3RyYW5zZm9ybVBvc2l0aW9uIiwiZ2V0U2l6ZSIsInRyYW5zaXRpb24iLCJ0cmFuc2l0aW9uQ3NzIiwidHJhbnNmb3JtIiwidHJhbnNsYXRlQ3NzIiwidWEiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJtc2llIiwiaXNTaWxlbnQiLCJkZXRlcm1pbmVEaXJlY3Rpb24iLCJfc2V0VHJhbnNpdGlvbiIsIl9zZXRUcmFuc2xhdGUiLCJzaWxlbnQiLCJsZWZ0RGlyZWN0aW9uIiwicmlnaHREaXJlY3Rpb24iLCJ1cERpcmVjdGlvbiIsImRvd25EaXJlY3Rpb24iLCJjdXJyZW50RXZlbnQiLCJpc1RvdWNoRXZlbnQiLCJUb3VjaEV2ZW50IiwiX3N0YXJ0VG91Y2hQb2ludCIsInBhZ2VYIiwiY2xpZW50WCIsInBhZ2VZIiwiY2xpZW50WSIsIl9zdGFydFBvc2l0aW9uIiwiX3RvdWNoSWQiLCJzdG9wUHJvcGFnYXRpb24iLCJIVE1MSW5wdXRFbGVtZW50IiwiZm9jdXMiLCJuYXRpdmVEcmFnQW5kRHJvcCIsInByZXZlbnREZWZhdWx0IiwiaXNTYWZhcmkiLCJlbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3BPblRvdWNoIiwiZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wRm9yQWxsIiwiZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wIiwiaXNEcmFnZ2luZyIsInRvdWNoIiwidG91Y2hQb2ludCIsImJvdW5kIiwicmVtb3ZlQXR0cmlidXRlIiwiZGF0YVRyYW5zZmVyIiwic2V0RGF0YSIsImVmZmVjdEFsbG93ZWQiLCJkcm9wRWZmZWN0IiwiX2V2ZW50IiwiY2xvbmVkRWxlbWVudCIsImNsb25lTm9kZSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImVtdWxhdGlvbkRyYWdnYWJsZSIsInNjcm9sbFgiLCJzY3JvbGxZIiwiZGVzdHJveSIsInJlbW92ZUNoaWxkIiwicmVzZXRFbWl0dGVyIiwiX3BhcmVudCIsIl9ib3VuZGluZyIsIl9oYW5kbGVyIiwiZW5hYmxlIiwiTGlzdCIsImluaXREcmFnZ2FibGUiLCJvbk1vdmUiLCJzb3J0ZWREcmFnZ2FibGVzIiwiZ2V0U29ydGVkRHJhZ2dhYmxlcyIsInBpbm5lZFBvc2l0aW9ucyIsImN1cnJlbnRJbmRleCIsInRhcmdldEluZGV4IiwiaW5pdGlhbFBvc2l0aW9ucyIsImNvbXBhcmUiLCJyZXNldFBvc2l0aW9uVG9Jbml0aWFsIiwiQXJyYXkiLCJsaXN0IiwicmVzZXRPbiIsImoiLCJnZXRDdXJyZW50UGlubmVkUG9zaXRpb25zIiwicGFyZW50RWxlbWVudCIsImVsZW1lbnRzIiwiZnJvbSIsInNldFN0eWxlIiwiY3NzVGV4dCIsImhhc093blByb3BlcnR5IiwiYXBwZW5kRmlyc3RDaGlsZCIsIm5vZGUiLCJmaXJzdENoaWxkIiwiaW5zZXJ0QmVmb3JlIiwiY3JlYXRlQ2FudmFzIiwiYXJlYSIsInJlY3RhZ2xlIiwiY2FudmFzIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsIlNwaWRlciIsImFyZWFSZWN0YW5nbGUiLCJkQW5nbGUiLCJzdGFydFJhZGl1cyIsImVuZFJhZGl1cyIsImdldE1pblNpZGUiLCJsaW5lV2lkdGgiLCJzdHJva2VTdHlsZSIsImZpbGxTdHlsZSIsImdldENvbnRleHQiLCJoYWxmU2l6ZSIsImRyYXciLCJpc0luaXQiLCJjbGVhclJlY3QiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJjbG9zZVBhdGgiLCJzdHJva2UiLCJmaWxsIiwiQXJjU2xpZGVyIiwiYW5nbGVzIiwic2hpZnRlZENlbnRlciIsImNoYW5nZSIsInVwZGF0ZUFuZ2xlIiwicm5kIiwicm91bmQiLCJyYW5kb20iLCJ0b0hleFN0cmluZyIsImRpZ2l0Iiwic3RyIiwidG9TdHJpbmciLCJyYW5kb21Db2xvciIsImdldEFycmF5V2l0aEJvdW5kSW5kZXhlcyIsInJldEluZGV4ZXMiLCJDaGFydCIsInRvdWNoUmFkaXVzIiwiZmlsbFN0eWxlcyIsImluaXRBbmdsZXMiLCJsaW1pdEltZyIsImxpbWl0SW1nT2Zmc2V0IiwiZ2V0Qm91bmRBbmdsZSIsImlzQ2xvc3NpbmciLCJ1cGRhdGVBbmdsZXMiLCJfZHJhZ2dhYmxlIiwiZHJhd0FyYyIsImRyYXdMaW1pdEltZyIsIm9wdHMiLCJjbG9uZU9iaiIsImNvbG9yIiwiZ2V0RmlsbFN0eWxlIiwiYXJjIiwiaW1nIiwidHJhbnNsYXRlIiwicm90YXRlIiwiZHJhd0ltYWdlIiwic2V0VHJhbnNmb3JtIiwiYmFzZUFuZ2xlIiwiZGlmZkFuZ2xlIiwiZ2V0QW5nbGVzRGlmZiIsIm1vdmVBbmRTYXZlIiwiZW5hYmxlSW5kZXhlcyIsImFjdGl2ZUFyY0luZGV4IiwiZGlzdGFuY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUFBLFNBQVNBLHVCQUFULENBQWlDQyxPQUFqQyxFQUEwQ0MsS0FBMUMsRUFBaUQ7RUFDL0MsU0FBT0EsS0FBSyxDQUFDQyxNQUFOLENBQWEsVUFBQ0MsR0FBRCxFQUFNQyxJQUFOLEVBQWU7RUFDakMsV0FBT0QsR0FBRyxHQUFHRSxRQUFRLENBQUNDLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0JQLE9BQXhCLEVBQWlDSSxJQUFqQyxLQUF3QyxDQUF6QyxDQUFyQjtFQUNELEdBRk0sRUFFSixDQUZJLENBQVA7RUFHRDs7TUFFb0JJOzs7RUFDbkIsaUJBQVlDLENBQVosRUFBZUMsQ0FBZixFQUFrQjtFQUFBOztFQUNoQixTQUFLRCxDQUFMLEdBQVNBLENBQVQ7RUFDQSxTQUFLQyxDQUFMLEdBQVNBLENBQVQ7RUFDRDs7OzswQkFFR0MsR0FBRztFQUNMLGFBQU8sSUFBSUgsS0FBSixDQUFVLEtBQUtDLENBQUwsR0FBU0UsQ0FBQyxDQUFDRixDQUFyQixFQUF3QixLQUFLQyxDQUFMLEdBQVNDLENBQUMsQ0FBQ0QsQ0FBbkMsQ0FBUDtFQUNEOzs7MEJBRUdDLEdBQUc7RUFDTCxhQUFPLElBQUlILEtBQUosQ0FBVSxLQUFLQyxDQUFMLEdBQVNFLENBQUMsQ0FBQ0YsQ0FBckIsRUFBd0Is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
