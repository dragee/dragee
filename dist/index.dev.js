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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZGV2LmpzIiwic291cmNlcyI6WyIuLi9zcmMvZ2VvbWV0cnkvcG9pbnQuanMiLCIuLi9zcmMvZ2VvbWV0cnkvcmVjdGFuZ2xlLmpzIiwiLi4vc3JjL3V0aWxzL2NsYXNzZXMuanMiLCIuLi9zcmMvdXRpbHMvZ2V0LWRlZmF1bHQtcGFyZW50LmpzIiwiLi4vc3JjL2V2ZW50RW1pdHRlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9kZXNhbmRyby1nZXQtc3R5bGUtcHJvcGVydHkvZ2V0LXN0eWxlLXByb3BlcnR5LmpzIiwiLi4vc3JjL2dlb21ldHJ5L2Rpc3RhbmNlcy5qcyIsIi4uL3NyYy9nZW9tZXRyeS9ib3VuZHMuanMiLCIuLi9zcmMvZ2VvbWV0cnkvYW5nbGVzLmpzIiwiLi4vc3JjL2JvdW5kaW5nLmpzIiwiLi4vc3JjL3V0aWxzL3JlbW92ZS1hcnJheS1pdGVtLmpzIiwiLi4vc3JjL3V0aWxzL3JhbmdlLmpzIiwiLi4vc3JjL3Bvc2l0aW9uaW5nLmpzIiwiLi4vc3JjL3RhcmdldC5qcyIsIi4uL3NyYy9zY29wZS5qcyIsIi4uL3NyYy91dGlscy9pcy1zdXBwb3J0LXBhc3NpdmUtZXZlbnRzLmpzIiwiLi4vc3JjL2RyYWdnYWJsZS5qcyIsIi4uL3NyYy9saXN0LmpzIiwiLi4vc3JjL3V0aWxzL2NyZWF0ZS1jYW52YXMuanMiLCIuLi9zcmMvc3BpZGVyLmpzIiwiLi4vc3JjL2FyY3NsaWRlci5qcyIsIi4uL3NyYy9jaGFydC5qcyIsIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBnZXRTdW1WYWx1ZU9mU3R5bGVSdWxlcyhlbGVtZW50LCBydWxlcykge1xuICByZXR1cm4gcnVsZXMucmVkdWNlKChzdW0sIHJ1bGUpID0+IHtcbiAgICByZXR1cm4gc3VtICsgcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudClbcnVsZV18fDApXG4gIH0sIDApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvaW50IHtcbiAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgIHRoaXMueCA9IHhcbiAgICB0aGlzLnkgPSB5XG4gIH1cblxuICBhZGQocCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54ICsgcC54LCB0aGlzLnkgKyBwLnkpXG4gIH1cblxuICBzdWIocCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54IC0gcC54LCB0aGlzLnkgLSBwLnkpXG4gIH1cblxuICBtdWx0KGspIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCAqIGssIHRoaXMueSAqIGspXG4gIH1cblxuICBuZWdhdGl2ZSgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KC10aGlzLngsIC10aGlzLnkpXG4gIH1cblxuICBjb21wYXJlKHApIHtcbiAgICByZXR1cm4gKHRoaXMueCA9PT0gcC54ICYmIHRoaXMueSA9PT0gcC55KVxuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLngsIHRoaXMueSlcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiBge3g9JHt0aGlzLnh9LHk9JHt0aGlzLnl9YFxuICB9XG5cbiAgc3RhdGljIGVsZW1lbnRPZmZzZXQoZWxlbWVudCwgcGFyZW50KSB7XG4gICAgcGFyZW50ID0gcGFyZW50IHx8IGVsZW1lbnQucGFyZW50Tm9kZVxuICAgIGNvbnN0IGVsZW1lbnRSZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIGNvbnN0IHBhcmVudFJlY3QgPSBwYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICByZXR1cm4gbmV3IFBvaW50KFxuICAgICAgZWxlbWVudFJlY3QubGVmdCAtIHBhcmVudFJlY3QubGVmdCxcbiAgICAgIGVsZW1lbnRSZWN0LnRvcCAtIHBhcmVudFJlY3QudG9wXG4gICAgKVxuICB9XG5cbiAgc3RhdGljIGVsZW1lbnRTaXplKGVsZW1lbnQsIGlzQ29udGVudEJveFNpemU9ZmFsc2UpIHtcbiAgICBsZXQgd2lkdGggPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KVsnd2lkdGgnXSlcbiAgICBsZXQgaGVpZ2h0ID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudClbJ2hlaWdodCddKVxuICAgIGlmICghaXNDb250ZW50Qm94U2l6ZSkge1xuICAgICAgd2lkdGggKz0gZ2V0U3VtVmFsdWVPZlN0eWxlUnVsZXMoZWxlbWVudCwgWydwYWRkaW5nLWxlZnQnLCAncGFkZGluZy1yaWdodCcsICdib3JkZXItbGVmdC13aWR0aCcsICdib3JkZXItcmlnaHQtd2lkdGgnXSlcbiAgICAgIGhlaWdodCArPSBnZXRTdW1WYWx1ZU9mU3R5bGVSdWxlcyhlbGVtZW50LCBbJ3BhZGRpbmctdG9wJywgJ3BhZGRpbmctYm90dG9tJywgJ2JvcmRlci10b3Atd2lkdGgnLCAnYm9yZGVyLWJvdHRvbS13aWR0aCddKVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFBvaW50KHdpZHRoLCBoZWlnaHQpXG4gIH1cbn1cbiIsImltcG9ydCBQb2ludCBmcm9tICcuL3BvaW50J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWN0YW5nbGUge1xuICBjb25zdHJ1Y3Rvcihwb3NpdGlvbiwgc2l6ZSkge1xuICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvblxuICAgIHRoaXMuc2l6ZSA9IHNpemVcbiAgfVxuXG4gIGdldFAxKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uXG4gIH1cblxuICBnZXRQMigpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54LCB0aGlzLnBvc2l0aW9uLnkpXG4gIH1cblxuICBnZXRQMygpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi5hZGQodGhpcy5zaXplKVxuICB9XG5cbiAgZ2V0UDQoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55KVxuICB9XG5cbiAgZ2V0Q2VudGVyKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLnNpemUubXVsdCgwLjUpKVxuICB9XG5cbiAgb3IocmVjdCkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gbmV3IFBvaW50KE1hdGgubWluKHRoaXMucG9zaXRpb24ueCwgcmVjdC5wb3NpdGlvbi54KSwgTWF0aC5taW4odGhpcy5wb3NpdGlvbi55LCByZWN0LnBvc2l0aW9uLnkpKVxuICAgIGNvbnN0IHNpemUgPSAobmV3IFBvaW50KE1hdGgubWF4KHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54LCByZWN0LnBvc2l0aW9uLnggKyByZWN0LnNpemUueCksIE1hdGgubWF4KHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55LCByZWN0LnBvc2l0aW9uLnkgKyByZWN0LnNpemUueSkpKS5zdWIocG9zaXRpb24pXG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUocG9zaXRpb24sIHNpemUpXG4gIH1cblxuICBhbmQocmVjdCkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gbmV3IFBvaW50KE1hdGgubWF4KHRoaXMucG9zaXRpb24ueCwgcmVjdC5wb3NpdGlvbi54KSwgTWF0aC5tYXgodGhpcy5wb3NpdGlvbi55LCByZWN0LnBvc2l0aW9uLnkpKVxuICAgIGNvbnN0IHNpemUgPSAobmV3IFBvaW50KE1hdGgubWluKHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54LCByZWN0LnBvc2l0aW9uLnggKyByZWN0LnNpemUueCksIE1hdGgubWluKHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55LCByZWN0LnBvc2l0aW9uLnkgKyByZWN0LnNpemUueSkpKS5zdWIocG9zaXRpb24pXG4gICAgaWYgKHNpemUueCA8PSAwIHx8IHNpemUueSA8PSAwKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZShwb3NpdGlvbiwgc2l6ZSlcbiAgfVxuXG4gIGluY2x1ZGVQb2ludChwKSB7XG4gICAgcmV0dXJuICEodGhpcy5wb3NpdGlvbi54ID4gcC54IHx8IHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54IDwgcC54IHx8IHRoaXMucG9zaXRpb24ueSA+IHAueSB8fCB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSA8IHAueSlcbiAgfVxuXG4gIGluY2x1ZGVSZWN0YW5nbGUocmVjdGFuZ2xlKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5jbHVkZVBvaW50KHJlY3RhbmdsZS5wb3NpdGlvbikgJiYgdGhpcy5pbmNsdWRlUG9pbnQocmVjdGFuZ2xlLmdldFAzKCkpXG4gIH1cblxuICBtb3ZlVG9Cb3VuZChyZWN0LCBheGlzKSB7XG4gICAgbGV0IHNlbEF4aXMsIGNyb3NzUmVjdGFuZ2xlXG4gICAgaWYgKGF4aXMpIHtcbiAgICAgIHNlbEF4aXMgPSBheGlzXG4gICAgfSBlbHNlIHtcbiAgICAgIGNyb3NzUmVjdGFuZ2xlID0gdGhpcy5hbmQocmVjdClcbiAgICAgIGlmICghY3Jvc3NSZWN0YW5nbGUpIHtcbiAgICAgICAgcmV0dXJuIHJlY3RcbiAgICAgIH1cbiAgICAgIHNlbEF4aXMgPSBjcm9zc1JlY3RhbmdsZS5zaXplLnggPiBjcm9zc1JlY3RhbmdsZS5zaXplLnkgPyAneScgOiAneCdcbiAgICB9XG4gICAgY29uc3QgdGhpc0NlbnRlciA9IHRoaXMuZ2V0Q2VudGVyKClcbiAgICBjb25zdCByZWN0Q2VudGVyID0gcmVjdC5nZXRDZW50ZXIoKVxuICAgIGNvbnN0IHNpZ24gPSB0aGlzQ2VudGVyW3NlbEF4aXNdID4gcmVjdENlbnRlcltzZWxBeGlzXSA/IC0xIDogMVxuICAgIGNvbnN0IG9mZnNldCA9IHNpZ24gPiAwID8gdGhpcy5wb3NpdGlvbltzZWxBeGlzXSArIHRoaXMuc2l6ZVtzZWxBeGlzXSAtIHJlY3QucG9zaXRpb25bc2VsQXhpc10gOiB0aGlzLnBvc2l0aW9uW3NlbEF4aXNdIC0gKHJlY3QucG9zaXRpb25bc2VsQXhpc10gKyByZWN0LnNpemVbc2VsQXhpc10pXG4gICAgcmVjdC5wb3NpdGlvbltzZWxBeGlzXSA9IHJlY3QucG9zaXRpb25bc2VsQXhpc10gKyBvZmZzZXRcbiAgICByZXR1cm4gcmVjdFxuICB9XG5cbiAgZ2V0U3F1YXJlKCkge1xuICAgIHJldHVybiB0aGlzLnNpemUueCAqIHRoaXMuc2l6ZS55XG4gIH1cblxuICBzdHlsZUFwcGx5KGVsKSB7XG4gICAgZWwgPSBlbCB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbmQnKVxuICAgIGVsLnN0eWxlLmxlZnQgPSB0aGlzLnBvc2l0aW9uLnggKyAncHgnXG4gICAgZWwuc3R5bGUudG9wID0gdGhpcy5wb3NpdGlvbi55ICsgJ3B4J1xuICAgIGVsLnN0eWxlLndpZHRoID0gdGhpcy5zaXplLnggKyAncHgnXG4gICAgZWwuc3R5bGUuaGVpZ2h0ID0gdGhpcy5zaXplLnkgKyAncHgnXG4gIH1cblxuICBncm93dGgoc2l6ZSkge1xuICAgIHRoaXMuc2l6ZSA9IHRoaXMuc2l6ZS5hZGQoc2l6ZSlcbiAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbi5hZGQoc2l6ZS5tdWx0KC0wLjUpKVxuICB9XG5cbiAgZ2V0TWluU2lkZSgpIHtcbiAgICByZXR1cm4gTWF0aC5taW4odGhpcy5zaXplLngsIHRoaXMuc2l6ZS55KVxuICB9XG5cbiAgc3RhdGljIGZyb21FbGVtZW50KGVsZW1lbnQsIHBhcmVudD1lbGVtZW50LnBhcmVudE5vZGUsIGlzQ29udGVudEJveFNpemU9ZmFsc2UsIGlzQ29uc2lkZXJUcmFuc2xhdGU9ZmFsc2UpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IFBvaW50LmVsZW1lbnRPZmZzZXQoZWxlbWVudCwgcGFyZW50LCBpc0NvbnNpZGVyVHJhbnNsYXRlKVxuICAgIGNvbnN0IHNpemUgPSBQb2ludC5lbGVtZW50U2l6ZShlbGVtZW50LCBpc0NvbnRlbnRCb3hTaXplKVxuICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHBvc2l0aW9uLCBzaXplKVxuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gaGFzQ2xhc3MoZWxlbWVudCwgYykge1xuICBjb25zdCByZSA9IG5ldyBSZWdFeHAoJyhefFxcXFxzKScgKyBjICsgJyhcXFxcc3wkKScsICdnJylcbiAgcmV0dXJuIChyZS50ZXN0KGVsZW1lbnQuY2xhc3NOYW1lKSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZENsYXNzKGVsZW1lbnQsIGMpIHtcbiAgaWYgKCFoYXNDbGFzcyhlbGVtZW50LCBjKSkge1xuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gKGVsZW1lbnQuY2xhc3NOYW1lICsgJyAnICsgYykucmVwbGFjZSgvXFxzKy9nLCAnICcpLnJlcGxhY2UoLyheIHwgJCkvZywgJycpXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNsYXNzKGVsZW1lbnQsIGMpIHtcbiAgY29uc3QgcmUgPSBuZXcgUmVnRXhwKCcoXnxcXFxccyknICsgYyArICcoXFxcXHN8JCknLCAnZycpXG4gIGVsZW1lbnQuY2xhc3NOYW1lID0gZWxlbWVudC5jbGFzc05hbWUucmVwbGFjZShyZSwgJyQxJykucmVwbGFjZSgvXFxzKy9nLCAnICcpLnJlcGxhY2UoLyheIHwgJCkvZywgJycpXG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXREZWZhdWx0UGFyZW50KGVsZW1lbnQpIHtcbiAgbGV0IHBhcmVudCA9IGVsZW1lbnQucGFyZW50Tm9kZVxuICB3aGlsZSAocGFyZW50LnBhcmVudE5vZGUgJiYgd2luZG93LmdldENvbXB1dGVkU3R5bGUocGFyZW50KVsncG9zaXRpb24nXSA9PT0gJ3N0YXRpYycgJiYgcGFyZW50LnRhZ05hbWUgIT09ICdCT0RZJykge1xuICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlXG4gIH1cbiAgcmV0dXJuIHBhcmVudFxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKGNvbnRleHQsIG9wdGlvbnMgPSB7fSkge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQgfHwgdGhpc1xuICAgIHRoaXMuZXZlbnRzID0ge31cblxuICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMub24pIHtcbiAgICAgIGZvciAoY29uc3QgW2V2ZW50TmFtZSwgZm5dIG9mIE9iamVjdC5lbnRyaWVzKG9wdGlvbnMub24pKSB7XG4gICAgICAgIHRoaXMub24oZXZlbnROYW1lLCBmbilcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBlbWl0KGV2ZW50TmFtZSkge1xuICAgIHRoaXMuaW50ZXJydXB0ZWQgPSBmYWxzZVxuICAgIGNvbnN0IGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSlcblxuICAgIGlmICghdGhpcy5ldmVudHNbZXZlbnROYW1lXSkgcmV0dXJuXG5cbiAgICBmb3IgKGNvbnN0IGZ1bmMgb2YgdGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgZnVuYy5hcHBseSh0aGlzLmNvbnRleHQsIGFyZ3MpXG4gICAgICBpZiAodGhpcy5pbnRlcnJ1cHRlZCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpbnRlcnJ1cHQoKSB7XG4gICAgdGhpcy5pbnRlcnJ1cHRlZCA9IHRydWVcbiAgfVxuXG4gIG9uKGV2ZW50TmFtZSwgZm4pIHtcbiAgICBpZiAoIXRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSBbXVxuICAgIH1cblxuICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0ucHVzaChmbilcbiAgfVxuXG4gIHByZXBlbmRPbihldmVudE5hbWUsIGZuKSB7XG4gICAgaWYgKCF0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdID0gW11cbiAgICB9XG5cbiAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLnVuc2hpZnQoZm4pXG4gIH1cblxuICB1bnN1YnNjcmliZShldmVudE5hbWUsIGZuKSB7XG4gICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5ldmVudHNbZXZlbnROYW1lXS5pbmRleE9mKGZuKVxuICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5zcGxpY2UoaW5kZXgsIDEpXG4gICAgfVxuICB9XG5cbiAgcmVzZXRFbWl0dGVyICgpIHtcbiAgICB0aGlzLmV2ZW50cyA9IHt9XG4gIH1cblxuICByZXNldE9uKGV2ZW50TmFtZSkge1xuICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSBbXVxuICB9XG59XG4iLCIvKiFcbiAqIGdldFN0eWxlUHJvcGVydHkgdjEuMC40XG4gKiBvcmlnaW5hbCBieSBrYW5nYXhcbiAqIGh0dHA6Ly9wZXJmZWN0aW9ua2lsbHMuY29tL2ZlYXR1cmUtdGVzdGluZy1jc3MtcHJvcGVydGllcy9cbiAqIE1JVCBsaWNlbnNlXG4gKi9cblxuLypqc2hpbnQgYnJvd3NlcjogdHJ1ZSwgc3RyaWN0OiB0cnVlLCB1bmRlZjogdHJ1ZSAqL1xuLypnbG9iYWwgZGVmaW5lOiBmYWxzZSwgZXhwb3J0czogZmFsc2UsIG1vZHVsZTogZmFsc2UgKi9cblxuKCBmdW5jdGlvbiggd2luZG93ICkge1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBwcmVmaXhlcyA9ICdXZWJraXQgTW96IG1zIE1zIE8nLnNwbGl0KCcgJyk7XG52YXIgZG9jRWxlbVN0eWxlID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlO1xuXG5mdW5jdGlvbiBnZXRTdHlsZVByb3BlcnR5KCBwcm9wTmFtZSApIHtcbiAgaWYgKCAhcHJvcE5hbWUgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gdGVzdCBzdGFuZGFyZCBwcm9wZXJ0eSBmaXJzdFxuICBpZiAoIHR5cGVvZiBkb2NFbGVtU3R5bGVbIHByb3BOYW1lIF0gPT09ICdzdHJpbmcnICkge1xuICAgIHJldHVybiBwcm9wTmFtZTtcbiAgfVxuXG4gIC8vIGNhcGl0YWxpemVcbiAgcHJvcE5hbWUgPSBwcm9wTmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHByb3BOYW1lLnNsaWNlKDEpO1xuXG4gIC8vIHRlc3QgdmVuZG9yIHNwZWNpZmljIHByb3BlcnRpZXNcbiAgdmFyIHByZWZpeGVkO1xuICBmb3IgKCB2YXIgaT0wLCBsZW4gPSBwcmVmaXhlcy5sZW5ndGg7IGkgPCBsZW47IGkrKyApIHtcbiAgICBwcmVmaXhlZCA9IHByZWZpeGVzW2ldICsgcHJvcE5hbWU7XG4gICAgaWYgKCB0eXBlb2YgZG9jRWxlbVN0eWxlWyBwcmVmaXhlZCBdID09PSAnc3RyaW5nJyApIHtcbiAgICAgIHJldHVybiBwcmVmaXhlZDtcbiAgICB9XG4gIH1cbn1cblxuLy8gdHJhbnNwb3J0XG5pZiAoIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcbiAgLy8gQU1EXG4gIGRlZmluZSggZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGdldFN0eWxlUHJvcGVydHk7XG4gIH0pO1xufSBlbHNlIGlmICggdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICkge1xuICAvLyBDb21tb25KUyBmb3IgQ29tcG9uZW50XG4gIG1vZHVsZS5leHBvcnRzID0gZ2V0U3R5bGVQcm9wZXJ0eTtcbn0gZWxzZSB7XG4gIC8vIGJyb3dzZXIgZ2xvYmFsXG4gIHdpbmRvdy5nZXRTdHlsZVByb3BlcnR5ID0gZ2V0U3R5bGVQcm9wZXJ0eTtcbn1cblxufSkoIHdpbmRvdyApO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldERpc3RhbmNlKHAxLCBwMikge1xuICBjb25zdCBkeCA9IHAxLnggLSBwMi54LCBkeSA9IHAxLnkgLSBwMi55XG4gIHJldHVybiBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRYRGlmZmVyZW5jZShwMSwgcDIpIHtcbiAgcmV0dXJuIE1hdGguYWJzKHAxLnggLSBwMi54KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0WURpZmZlcmVuY2UocDEsIHAyKSB7XG4gIHJldHVybiBNYXRoLmFicyhwMS55IC0gcDIueSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3Rvcnkob3B0aW9ucykge1xuICByZXR1cm4gKHAxLCBwMikgPT4ge1xuICAgIHJldHVybiBNYXRoLnNxcnQoXG4gICAgICBNYXRoLnBvdyhvcHRpb25zLnggKiBNYXRoLmFicyhwMS54IC0gcDIueCksIDIpICtcbiAgICAgIE1hdGgucG93KG9wdGlvbnMueSAqIE1hdGguYWJzKHAxLnkgLSBwMi55KSwgMilcbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluZGV4T2ZOZWFyZXN0UG9pbnQoYXJyLCB2YWwsIHJhZGl1cywgZ2V0RGlzdGFuY2VGdW5jPWdldERpc3RhbmNlKSB7XG4gIGxldCBzaXplLCBpbmRleCA9IDAsIGksIHRlbXBcbiAgaWYgKGFyci5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gLTFcbiAgfVxuICBzaXplID0gZ2V0RGlzdGFuY2VGdW5jKGFyclswXSwgdmFsKVxuICBmb3IgKGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgdGVtcCA9IGdldERpc3RhbmNlRnVuYyhhcnJbaV0sIHZhbClcbiAgICBpZiAodGVtcCA8IHNpemUpIHtcbiAgICAgIHNpemUgPSB0ZW1wXG4gICAgICBpbmRleCA9IGlcbiAgICB9XG4gIH1cbiAgaWYgKHJhZGl1cyA+PSAwICYmIHNpemUgPiByYWRpdXMpIHtcbiAgICByZXR1cm4gLTFcbiAgfVxuICByZXR1cm4gaW5kZXhcbn1cbiIsImltcG9ydCBQb2ludCBmcm9tICcuL3BvaW50J1xuaW1wb3J0IHsgZ2V0RGlzdGFuY2UgfSBmcm9tICcuL2Rpc3RhbmNlcydcblxuZXhwb3J0IGZ1bmN0aW9uIGNsYW1wKG1pbiwgbWF4LCB2YWwpIHtcbiAgcmV0dXJuIE1hdGgubWF4KG1pbiwgTWF0aC5taW4obWF4LCB2YWwpKVxufVxuXG4vL1JldHVybiBjcm9zc2luZyBwb2ludCBvZiB0d28gbGluZXNcbmV4cG9ydCBmdW5jdGlvbiBkaXJlY3RDcm9zc2luZyhMMVAxLCBMMVAyLCBMMlAxLCBMMlAyKSB7XG4gIGxldCB0ZW1wLCBrMSwgazIsIGIxLCBiMiwgeCwgeVxuICBpZiAoTDJQMS54ID09PSBMMlAyLngpIHtcbiAgICB0ZW1wID0gTDJQMVxuICAgIEwyUDEgPSBMMVAxXG4gICAgTDFQMSA9IHRlbXBcbiAgICB0ZW1wID0gTDJQMlxuICAgIEwyUDIgPSBMMVAyXG4gICAgTDFQMiA9IHRlbXBcbiAgfVxuICBpZiAoTDFQMS54ID09PSBMMVAyLngpIHtcbiAgICBrMiA9IChMMlAyLnkgLSBMMlAxLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICBiMiA9IChMMlAyLnggKiBMMlAxLnkgLSBMMlAxLnggKiBMMlAyLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICB4ID0gTDFQMS54XG4gICAgeSA9IHggKiBrMiArIGIyXG4gICAgcmV0dXJuIG5ldyBQb2ludCh4LCB5KVxuICB9IGVsc2Uge1xuICAgIGsxID0gKEwxUDIueSAtIEwxUDEueSkgLyAoTDFQMi54IC0gTDFQMS54KVxuICAgIGIxID0gKEwxUDIueCAqIEwxUDEueSAtIEwxUDEueCAqIEwxUDIueSkgLyAoTDFQMi54IC0gTDFQMS54KVxuICAgIGsyID0gKEwyUDIueSAtIEwyUDEueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgIGIyID0gKEwyUDIueCAqIEwyUDEueSAtIEwyUDEueCAqIEwyUDIueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgIHggPSAoYjEgLSBiMikgLyAoazIgLSBrMSlcbiAgICB5ID0geCAqIGsxICsgYjFcbiAgICByZXR1cm4gbmV3IFBvaW50KHgsIHkpXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kVG9TZWdtZW50KExQMSwgTFAyLCBQKSB7XG4gIGxldCB4LCB5XG4gIHggPSBjbGFtcChNYXRoLm1pbihMUDEueCwgTFAyLngpLCBNYXRoLm1heChMUDEueCwgTFAyLngpLCBQLngpXG4gIGlmICh4ICE9PSBQLngpIHtcbiAgICB5ID0gKHggPT09IExQMS54KSA/IExQMS55IDogTFAyLnlcbiAgICBQID0gbmV3IFBvaW50KHgsIHkpXG4gIH1cblxuICB5ID0gY2xhbXAoTWF0aC5taW4oTFAxLnksIExQMi55KSwgTWF0aC5tYXgoTFAxLnksIExQMi55KSwgUC55KVxuICBpZiAoeSAhPT0gUC55KSB7XG4gICAgeCA9ICh5ID09PSBMUDEueSkgPyBMUDEueCA6IExQMi54XG4gICAgUCA9IG5ldyBQb2ludCh4LCB5KVxuICB9XG5cbiAgcmV0dXJuIFBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kVG9MaW5lKEEsIEIsIFApIHtcbiAgY29uc3QgQVAgPSBuZXcgUG9pbnQoUC54IC0gQS54LCBQLnkgLSBBLnkpLFxuICAgIEFCID0gbmV3IFBvaW50KEIueCAtIEEueCwgQi55IC0gQS55KSxcbiAgICBhYjIgPSBBQi54ICogQUIueCArIEFCLnkgKiBBQi55LFxuICAgIGFwX2FiID0gQVAueCAqIEFCLnggKyBBUC55ICogQUIueSxcbiAgICB0ID0gYXBfYWIgLyBhYjJcbiAgcmV0dXJuIG5ldyBQb2ludChBLnggKyBBQi54ICogdCwgQS55ICsgQUIueSAqIHQpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb2ludE9uTGluZShMUDEsIExQMiwgcGVyY2VudCkge1xuICBjb25zdCBkeCA9IExQMi54IC0gTFAxLngsIGR5ID0gTFAyLnkgLSBMUDEueVxuICByZXR1cm4gbmV3IFBvaW50KExQMS54ICsgcGVyY2VudCAqIGR4LCBMUDEueSArIHBlcmNlbnQgKiBkeSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBvaW50T25MaW5lQnlMZW5naHQoTFAxLCBMUDIsIGxlbmdodCkge1xuICBjb25zdCBkeCA9IExQMi54IC0gTFAxLnhcbiAgY29uc3QgZHkgPSBMUDIueSAtIExQMS55XG4gIGNvbnN0IHBlcmNlbnQgPSBsZW5naHQgLyBnZXREaXN0YW5jZShMUDEsIExQMilcbiAgcmV0dXJuIG5ldyBQb2ludChMUDEueCArIHBlcmNlbnQgKiBkeCwgTFAxLnkgKyBwZXJjZW50ICogZHkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRQb2ludFRvQm91bmRQb2ludHMoYm91bmRwb2ludHMsIHBvaW50LCBpc1JpZ2h0KSB7XG4gIGNvbnN0IHJlc3VsdCA9IGJvdW5kcG9pbnRzLmZpbHRlcigoYlBvaW50KSA9PiB7XG4gICAgcmV0dXJuIGJQb2ludC55ID4gcG9pbnQueSB8fCAoaXNSaWdodCA/IGJQb2ludC54IDwgcG9pbnQueCA6IGJQb2ludC54ID4gcG9pbnQueClcbiAgfSlcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChwb2ludC55IDwgcmVzdWx0W2ldLnkpIHtcbiAgICAgIHJlc3VsdC5zcGxpY2UoaSwgMCwgcG9pbnQpXG4gICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxuICB9XG4gIHJlc3VsdC5wdXNoKHBvaW50KVxuICByZXR1cm4gcmVzdWx0XG59XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9wb2ludCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFuZ2xlRGlmZihhbHBoYSwgYmV0YSkge1xuICBjb25zdCBtaW5BbmdsZSA9IE1hdGgubWluKGFscGhhLCBiZXRhKVxuICBjb25zdCBtYXhBbmdsZSA9ICBNYXRoLm1heChhbHBoYSwgYmV0YSlcbiAgcmV0dXJuIE1hdGgubWluKG1heEFuZ2xlIC0gbWluQW5nbGUsIG1pbkFuZ2xlICsgTWF0aC5QSSoyIC0gbWF4QW5nbGUpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbmdsZShwMSwgcDIpIHtcbiAgY29uc3QgZGlmZiA9IHAyLnN1YihwMSlcbiAgcmV0dXJuIG5vcm1hbGl6ZUFuZ2xlKE1hdGguYXRhbjIoZGlmZi55LCBkaWZmLngpKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9SYWRpYW4oYW5nbGUpIHtcbiAgcmV0dXJuICgoYW5nbGUgJSAzNjApICogTWF0aC5QSSAvIDE4MClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvRGVncmVlKGFuZ2xlKSB7XG4gIHJldHVybiAoYW5nbGUgKiAxODAgLyBNYXRoLlBJKSAlIDM2MFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRBbmdsZShtaW4sIG1heCwgdmFsKSB7XG4gIGxldCBkbWluLCBkbWF4XG4gIGlmIChtaW4gPCBtYXggJiYgdmFsID4gbWluICYmIHZhbCA8IG1heCkge1xuICAgIHJldHVybiB2YWxcbiAgfSBlbHNlIGlmIChtYXggPCBtaW4gJiYgKHZhbCA8IG1heCB8fCB2YWwgPiBtaW4pKSB7XG4gICAgcmV0dXJuIHZhbFxuICB9IGVsc2Uge1xuICAgIGRtaW4gPSBnZXRBbmdsZURpZmYobWluLCB2YWwpXG4gICAgZG1heCA9IGdldEFuZ2xlRGlmZihtYXgsIHZhbClcbiAgICBpZiAoZG1pbiA8IGRtYXgpIHtcbiAgICAgIHJldHVybiBtaW5cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG1heFxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmVhcmVzdEFuZ2xlKGFyciwgYW5nbGUpIHtcbiAgbGV0IGksIHRlbXAsIGRpZmYgPSBNYXRoLlBJICogMiwgdmFsdWVcbiAgZm9yIChpID0gMDsgaSA8IGFyci5sZW5ndGg7aSsrKSB7XG4gICAgdGVtcCA9IGdldEFuZ2xlRGlmZihhcnJbaV0sIGFuZ2xlKVxuICAgIGlmIChkaWZmIDwgdGVtcCkge1xuICAgICAgZGlmZiA9IHRlbXBcbiAgICAgIHZhbHVlID0gYXJyW2ldXG4gICAgfVxuICB9XG4gIHJldHVybiB2YWx1ZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplQW5nbGUodmFsKSB7XG4gIHdoaWxlICh2YWwgPCAwKSB7XG4gICAgdmFsICs9IDIgKiBNYXRoLlBJXG4gIH1cbiAgd2hpbGUgKHZhbCA+IDIgKiBNYXRoLlBJKSB7XG4gICAgdmFsIC09IDIgKiBNYXRoLlBJXG4gIH1cbiAgcmV0dXJuIHZhbFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKGFuZ2xlLCBsZW5ndGgsIGNlbnRlcikge1xuICBjZW50ZXIgPSBjZW50ZXIgfHwgbmV3IFBvaW50KDAsIDApXG4gIHJldHVybiBjZW50ZXIuYWRkKG5ldyBQb2ludChsZW5ndGggKiBNYXRoLmNvcyhhbmdsZSksIGxlbmd0aCAqIE1hdGguc2luKGFuZ2xlKSkpXG59XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9nZW9tZXRyeS9wb2ludCdcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSAnLi9nZW9tZXRyeS9yZWN0YW5nbGUnXG5pbXBvcnQge1xuICBnZXRQb2ludE9uTGluZUJ5TGVuZ2h0LFxuICBkaXJlY3RDcm9zc2luZyxcbiAgYm91bmRUb0xpbmVcbn0gZnJvbSAnLi9nZW9tZXRyeS9ib3VuZHMnXG5cbmltcG9ydCB7XG4gIGdldEFuZ2xlLFxuICBub3JtYWxpemVBbmdsZSxcbiAgYm91bmRBbmdsZSxcbiAgZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtXG59IGZyb20gJy4vZ2VvbWV0cnkvYW5nbGVzJ1xuXG5leHBvcnQgY2xhc3MgQm91bmQge1xuICBjb25zdHJ1Y3RvciAoKSB7fVxuXG4gIGJvdW5kKHBvaW50LCBfc2l6ZSkge1xuICAgIHJldHVybiBwb2ludFxuICB9XG5cbiAgcmVmcmVzaCAoKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb1JlY3RhbmdsZSBleHRlbmRzIEJvdW5kIHtcbiAgY29uc3RydWN0b3IocmVjdGFuZ2xlKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMucmVjdGFuZ2xlID0gcmVjdGFuZ2xlXG4gIH1cblxuICBib3VuZChwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IGNhbGNQb2ludCA9IHBvaW50LmNsb25lKClcbiAgICBjb25zdCByZWN0UDIgPSB0aGlzLnJlY3RhbmdsZS5nZXRQMygpXG5cbiAgICBpZiAodGhpcy5yZWN0YW5nbGUucG9zaXRpb24ueCA+IGNhbGNQb2ludC54KSB7XG4gICAgICAoY2FsY1BvaW50LnggPSB0aGlzLnJlY3RhbmdsZS5wb3NpdGlvbi54KVxuICAgIH1cbiAgICBpZiAodGhpcy5yZWN0YW5nbGUucG9zaXRpb24ueSA+IGNhbGNQb2ludC55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHRoaXMucmVjdGFuZ2xlLnBvc2l0aW9uLnlcbiAgICB9XG4gICAgaWYgKHJlY3RQMi54IDwgY2FsY1BvaW50LnggKyBzaXplLngpIHtcbiAgICAgIGNhbGNQb2ludC54ID0gcmVjdFAyLnggLSBzaXplLnhcbiAgICB9XG4gICAgaWYgKHJlY3RQMi55IDwgY2FsY1BvaW50LnkgKyBzaXplLnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gcmVjdFAyLnkgLSBzaXplLnlcbiAgICB9XG5cbiAgICByZXR1cm4gY2FsY1BvaW50XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9FbGVtZW50IGV4dGVuZHMgQm91bmRUb1JlY3RhbmdsZSB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIHBhcmVudCkge1xuICAgIHN1cGVyKFJlY3RhbmdsZS5mcm9tRWxlbWVudChlbGVtZW50LCBwYXJlbnQpKVxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudFxuICB9XG5cbiAgcmVmcmVzaCAoKSB7XG4gICAgdGhpcy5yZWN0YW5nbGUgPSBSZWN0YW5nbGUuZnJvbUVsZW1lbnQodGhpcy5lbGVtZW50LCB0aGlzLnBhcmVudClcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb0xpbmVYIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3Rvcih4LCBzdGFydFksIGVuZFkpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy54ID0geFxuICAgIHRoaXMuc3RhcnRZID0gc3RhcnRZXG4gICAgdGhpcy5lbmRZID0gZW5kWVxuICB9XG5cbiAgYm91bmQocG9pbnQsIHNpemUpIHtcbiAgICBjb25zdCBjYWxjUG9pbnQgPSBwb2ludC5jbG9uZSgpXG5cbiAgICBjYWxjUG9pbnQueCA9IHRoaXMueFxuICAgIGlmICh0aGlzLnN0YXJ0WSA+IGNhbGNQb2ludC55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHRoaXMuc3RhcnRZXG4gICAgfVxuICAgIGlmICh0aGlzLmVuZFkgPCBjYWxjUG9pbnQueSArIHNpemUueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSB0aGlzLmVuZFkgLSBzaXplLnlcbiAgICB9XG5cbiAgICByZXR1cm4gY2FsY1BvaW50XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9MaW5lWSBleHRlbmRzIEJvdW5kIHtcbiAgY29uc3RydWN0b3IoeSwgc3RhcnRYLCBlbmRYKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMueSA9IHlcbiAgICB0aGlzLnN0YXJ0WCA9IHN0YXJ0WFxuICAgIHRoaXMuZW5kWCA9IGVuZFhcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgY2FsY1BvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIGNhbGNQb2ludC55ID0gdGhpcy55XG4gICAgaWYgKHRoaXMuc3RhcnRYID4gY2FsY1BvaW50LngpIHtcbiAgICAgIGNhbGNQb2ludC54ID0gdGhpcy5zdGFydFhcbiAgICB9XG4gICAgaWYgKHRoaXMuZW5kWCA8IGNhbGNQb2ludC54ICsgc2l6ZS54KSB7XG4gICAgICBjYWxjUG9pbnQueCA9IHRoaXMuZW5kWCAtIHNpemUueFxuICAgIH1cbiAgICByZXR1cm4gY2FsY1BvaW50XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9MaW5lIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3RvcihzdGFydFBvaW50LCBlbmRQb2ludCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnN0YXJ0UG9pbnQgPSBzdGFydFBvaW50XG4gICAgdGhpcy5lbmRQb2ludCA9IGVuZFBvaW50XG4gICAgY29uc3QgYWxwaGEgPSBNYXRoLmF0YW4yKGVuZFBvaW50LnkgLSBzdGFydFBvaW50LnksIGVuZFBvaW50LnggLSBzdGFydFBvaW50LngpXG4gICAgY29uc3QgYmV0YSA9IGFscGhhICsgTWF0aC5QSSAvIDJcbiAgICB0aGlzLnNvbWVLID0gMTBcbiAgICB0aGlzLmNvc0JldGEgPSBNYXRoLmNvcyhiZXRhKVxuICAgIHRoaXMuc2luQmV0YSA9IE1hdGguc2luKGJldGEpXG4gIH1cblxuICBib3VuZChwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IHBvaW50MiA9IG5ldyBQb2ludChcbiAgICAgIHBvaW50LnggKyB0aGlzLnNvbWVLICogdGhpcy5jb3NCZXRhLFxuICAgICAgcG9pbnQueSArIHRoaXMuc29tZUsgKiB0aGlzLnNpbkJldGFcbiAgICApXG5cbiAgICBjb25zdCBuZXdFbmRQb2ludCA9IGdldFBvaW50T25MaW5lQnlMZW5naHQodGhpcy5lbmRQb2ludCwgdGhpcy5zdGFydFBvaW50LCBzaXplLngpXG4gICAgY29uc3QgcG9pbnRDcm9zc2luZyA9IGRpcmVjdENyb3NzaW5nKHRoaXMuc3RhcnRQb2ludCwgdGhpcy5lbmRQb2ludCwgcG9pbnQsIHBvaW50MilcblxuICAgIHJldHVybiBib3VuZFRvTGluZSh0aGlzLnN0YXJ0UG9pbnQsIG5ld0VuZFBvaW50LCBwb2ludENyb3NzaW5nKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvQ2lyY2xlIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3RvcihjZW50ZXIsIHJhZGl1cykge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLmNlbnRlciA9IGNlbnRlclxuICAgIHRoaXMucmFkaXVzID0gcmFkaXVzXG4gIH1cblxuICBib3VuZChwb2ludCwgX3NpemUpIHtcbiAgICByZXR1cm4gZ2V0UG9pbnRPbkxpbmVCeUxlbmdodCh0aGlzLmNlbnRlciwgcG9pbnQsIHRoaXMucmFkaXVzKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvQXJjIGV4dGVuZHMgQm91bmRUb0NpcmNsZSB7XG4gIGNvbnN0cnVjdG9yKGNlbnRlciwgcmFkaXVzLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSkge1xuICAgIHN1cGVyKGNlbnRlciwgcmFkaXVzKVxuICAgIHRoaXMuX3N0YXJ0QW5nbGUgPSBzdGFydEFuZ2xlXG4gICAgdGhpcy5fZW5kQW5nbGUgPSBlbmRBbmdsZVxuICB9XG5cbiAgc3RhcnRBbmdsZSgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMuX3N0YXJ0QW5nbGUgPT09ICdmdW5jdGlvbicgPyB0aGlzLl9zdGFydEFuZ2xlKCkgOiB0aGlzLl9zdGFydEFuZ2xlXG4gIH1cblxuICBlbmRBbmdsZSgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMuX2VuZEFuZ2xlID09PSAnZnVuY3Rpb24nID8gdGhpcy5fZW5kQW5nbGUoKSA6IHRoaXMuX2VuZEFuZ2xlXG4gIH1cblxuICBib3VuZChwb2ludCwgX3NpemUpIHtcbiAgICBsZXQgYW5nbGUgPSBnZXRBbmdsZSh0aGlzLmNlbnRlciwgcG9pbnQpXG4gICAgYW5nbGUgPSBub3JtYWxpemVBbmdsZShhbmdsZSlcbiAgICBhbmdsZSA9IGJvdW5kQW5nbGUodGhpcy5zdGFydEFuZ2xlKCksIHRoaXMuZW5kQW5nbGUoKSwgYW5nbGUpXG4gICAgcmV0dXJuIGdldFBvaW50RnJvbVJhZGlhbFN5c3RlbShhbmdsZSwgdGhpcy5yYWRpdXMsIHRoaXMuY2VudGVyKVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhcnJheSwgdmFsKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoYXJyYXlbaV0gPT09IHZhbCkge1xuICAgICAgYXJyYXkuc3BsaWNlKGksIDEpXG4gICAgICBpLS1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycmF5XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByYW5nZShzdGFydCwgc3RvcCwgc3RlcCkge1xuICBjb25zdCByZXN1bHQgPSBbXVxuICBpZiAodHlwZW9mIHN0b3AgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgc3RvcCA9IHN0YXJ0XG4gICAgc3RhcnQgPSAwXG4gIH1cbiAgaWYgKHR5cGVvZiBzdGVwID09PSAndW5kZWZpbmVkJykge1xuICAgIHN0ZXAgPSAxXG4gIH1cbiAgaWYgKChzdGVwID4gMCAmJiBzdGFydCA+PSBzdG9wKSB8fCAoc3RlcCA8IDAgJiYgc3RhcnQgPD0gc3RvcCkpIHtcbiAgICByZXR1cm4gW11cbiAgfVxuICBmb3IgKGxldCBpID0gc3RhcnQ7IHN0ZXAgPiAwID8gaSA8IHN0b3AgOiBpID4gc3RvcDsgaSArPSBzdGVwKSB7XG4gICAgcmVzdWx0LnB1c2goaSlcbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9nZW9tZXRyeS9wb2ludCdcbmltcG9ydCB7IGFkZFBvaW50VG9Cb3VuZFBvaW50cyB9IGZyb20gJy4vZ2VvbWV0cnkvYm91bmRzJ1xuXG5pbXBvcnQge1xuICBpbmRleE9mTmVhcmVzdFBvaW50LFxuICBnZXREaXN0YW5jZVxufSBmcm9tICcuL2dlb21ldHJ5L2Rpc3RhbmNlcydcblxuY2xhc3MgQmFzaWNTdHJhdGVneSB7XG4gIGNvbnN0cnVjdG9yKHJlY3RhbmdsZSwgb3B0aW9ucz17fSkge1xuICAgIHRoaXMucmVjdGFuZ2xlID0gcmVjdGFuZ2xlXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9uc1xuICB9XG5cbiAgZ2V0IGJvdW5kUmVjdCAoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGlzLnJlY3RhbmdsZSA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMucmVjdGFuZ2xlKCkgOiB0aGlzLnJlY3RhbmdsZVxuICB9XG59XG5cbmNsYXNzIE5vdENyb3NzaW5nU3RyYXRlZ3kgZXh0ZW5kcyBCYXNpY1N0cmF0ZWd5IHtcbiAgcG9zaXRpb25pbmcgKHJlY3RhbmdsZUxpc3QsIGluZGV4ZXNPZk5ld3MpIHtcbiAgICBjb25zdCBzdGF0aWNSZWN0YW5nbGVJbmRleGVzID0gcmVjdGFuZ2xlTGlzdC5yZWR1Y2UoKGluZGV4ZXMsIF9yZWN0LCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGluZGV4ZXNPZk5ld3MuaW5kZXhPZihpbmRleCkgPT09IC0xKSB7XG4gICAgICAgIGluZGV4ZXMucHVzaChpbmRleClcbiAgICAgIH1cbiAgICAgIHJldHVybiBpbmRleGVzXG4gICAgfSwgW10pXG5cbiAgICBpbmRleGVzT2ZOZXdzLmZvckVhY2goKGluZGV4KSA9PiB7XG4gICAgICBsZXQgcmVjdCA9IHJlY3RhbmdsZUxpc3RbaW5kZXhdXG4gICAgICBsZXQgcmVtb3ZhYmxlID0gZmFsc2VcblxuICAgICAgc3RhdGljUmVjdGFuZ2xlSW5kZXhlcy5mb3JFYWNoKChpbmRleE9mU3RhdGljKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YXRpY1JlY3QgPSByZWN0YW5nbGVMaXN0W2luZGV4T2ZTdGF0aWNdXG4gICAgICAgIHJlY3QgPSBzdGF0aWNSZWN0Lm1vdmVUb0JvdW5kKHJlY3QpXG4gICAgICB9KVxuXG4gICAgICByZW1vdmFibGUgPSBzdGF0aWNSZWN0YW5nbGVJbmRleGVzLnNvbWUoKGluZGV4T2ZTdGF0aWMpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhdGljUmVjdCA9IHJlY3RhbmdsZUxpc3RbaW5kZXhPZlN0YXRpY11cbiAgICAgICAgcmV0dXJuICAhIXN0YXRpY1JlY3QuYW5kKHJlY3QpXG4gICAgICB9KSB8fCByZWN0LmFuZCh0aGlzLmJvdW5kUmVjdCkuZ2V0U3F1YXJlKCkgIT09IHJlY3QuZ2V0U3F1YXJlKClcblxuICAgICAgaWYgKHJlbW92YWJsZSkge1xuICAgICAgICByZWN0LnJlbW92YWJsZSA9IHRydWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMucHVzaChpbmRleClcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiByZWN0YW5nbGVMaXN0XG4gIH1cblxuICBzb3J0aW5nKG9kbERyYWdnYWJsZXNMaXN0LCBuZXdEcmFnZ2FibGVzLCBpbmRleE9mTmV3cykge1xuICAgIGNvbnN0IGRyYWdnYWJsZXMgPSBvZGxEcmFnZ2FibGVzTGlzdC5jb25jYXQobmV3RHJhZ2dhYmxlcylcbiAgICBuZXdEcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgaW5kZXhPZk5ld3MucHVzaChkcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSlcbiAgICB9KVxuICAgIHJldHVybiBkcmFnZ2FibGVzXG4gIH1cbn1cblxuY2xhc3MgRmxvYXRMZWZ0U3RyYXRlZ3kgZXh0ZW5kcyBCYXNpY1N0cmF0ZWd5IHtcbiAgY29uc3RydWN0b3IocmVjdGFuZ2xlLCBvcHRpb25zPXt9KSB7XG4gICAgc3VwZXIocmVjdGFuZ2xlLCBvcHRpb25zKVxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgcmVtb3ZhYmxlOiB0cnVlXG4gICAgfSwgb3B0aW9ucylcblxuICAgIHRoaXMucmFkaXVzID0gb3B0aW9ucy5yYWRpdXMgfHwgODBcblxuICAgIHRoaXMucGFkZGluZ1RvcExlZnQgPSBvcHRpb25zLnBhZGRpbmdUb3BMZWZ0IHx8IG5ldyBQb2ludCgwLCAwKVxuICAgIHRoaXMucGFkZGluZ0JvdHRvbVJpZ2h0ID0gb3B0aW9ucy5wYWRkaW5nQm90dG9tUmlnaHQgfHwgbmV3IFBvaW50KDAsIDApXG4gICAgdGhpcy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgPSBvcHRpb25zLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyB8fCAwXG5cbiAgICB0aGlzLmdldERpc3RhbmNlID0gb3B0aW9ucy5nZXREaXN0YW5jZSB8fCBnZXREaXN0YW5jZVxuICAgIHRoaXMuZ2V0UG9zaXRpb24gPSBvcHRpb25zLmdldFBvc2l0aW9uIHx8ICgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucG9zaXRpb24pXG4gIH1cblxuICBwb3NpdGlvbmluZyhyZWN0YW5nbGVMaXN0LCBfaW5kZXhlc09mTmV3cykge1xuICAgIGNvbnN0IGJvdW5kUmVjdCA9IHRoaXMuYm91bmRSZWN0XG4gICAgY29uc3QgcmVjdFAyID0gYm91bmRSZWN0LmdldFAyKClcbiAgICBsZXQgYm91bmRhcnlQb2ludHMgPSBbYm91bmRSZWN0LnBvc2l0aW9uXVxuXG4gICAgcmVjdGFuZ2xlTGlzdC5mb3JFYWNoKChyZWN0LCByZWN0SW5kZXgpID0+IHtcbiAgICAgIGxldCBwb3NpdGlvbiwgaXNWYWxpZCA9IGZhbHNlXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvdW5kYXJ5UG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHBvc2l0aW9uID0gbmV3IFBvaW50KFxuICAgICAgICAgIGJvdW5kYXJ5UG9pbnRzW2ldLnggKyB0aGlzLnBhZGRpbmdUb3BMZWZ0LngsXG4gICAgICAgICAgaSA+IDAgPyAoYm91bmRhcnlQb2ludHNbaSAtIDFdLnkgKyB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcykgOiAoYm91bmRSZWN0LnBvc2l0aW9uLnkgKyB0aGlzLnBhZGRpbmdUb3BMZWZ0LnkpXG4gICAgICAgIClcblxuICAgICAgICBpc1ZhbGlkID0gKHBvc2l0aW9uLnggKyByZWN0LnNpemUueCA8IHJlY3RQMi54KVxuXG4gICAgICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgcG9zaXRpb24gPSBuZXcgUG9pbnQoXG4gICAgICAgICAgYm91bmRSZWN0LnBvc2l0aW9uLnggKyB0aGlzLnBhZGRpbmdUb3BMZWZ0LngsXG4gICAgICAgICAgYm91bmRhcnlQb2ludHNbYm91bmRhcnlQb2ludHMubGVuZ3RoIC0gMV0ueSArIChyZWN0SW5kZXggPiAwID8gdGhpcy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgOiB0aGlzLnBhZGRpbmdUb3BMZWZ0LnkpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgcmVjdC5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnJlbW92YWJsZSAmJiByZWN0LmdldFAzKCkueSA+IGJvdW5kUmVjdC5nZXRQMygpLnkpIHtcbiAgICAgICAgcmVjdC5yZW1vdmFibGUgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGJvdW5kYXJ5UG9pbnRzID0gYWRkUG9pbnRUb0JvdW5kUG9pbnRzKGJvdW5kYXJ5UG9pbnRzLCByZWN0LmdldFAzKCkuYWRkKHRoaXMucGFkZGluZ0JvdHRvbVJpZ2h0KSlcbiAgICB9KVxuICAgIHJldHVybiByZWN0YW5nbGVMaXN0XG4gIH1cblxuICBzb3J0aW5nKG9kbERyYWdnYWJsZXNMaXN0LCBuZXdEcmFnZ2FibGVzLCBpbmRleE9mTmV3cykge1xuICAgIGNvbnN0IG5ld0xpc3QgPSBvZGxEcmFnZ2FibGVzTGlzdC5jb25jYXQoKVxuICAgIGNvbnN0IGxpc3RPbGRQb3NpdGlvbiA9IG9kbERyYWdnYWJsZXNMaXN0Lm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUuZ2V0UG9zaXRpb24oKSlcbiAgICBuZXdEcmFnZ2FibGVzLmZvckVhY2goKG5ld0RyYWdnYWJsZSkgPT4ge1xuICAgICAgbGV0IGluZGV4ID0gaW5kZXhPZk5lYXJlc3RQb2ludChsaXN0T2xkUG9zaXRpb24sIHRoaXMuZ2V0UG9zaXRpb24obmV3RHJhZ2dhYmxlKSwgdGhpcy5yYWRpdXMsIHRoaXMuZ2V0RGlzdGFuY2UpXG4gICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgIGluZGV4ID0gbmV3TGlzdC5sZW5ndGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluZGV4ID0gbmV3TGlzdC5pbmRleE9mKG9kbERyYWdnYWJsZXNMaXN0W2luZGV4XSlcbiAgICAgIH1cbiAgICAgIG5ld0xpc3Quc3BsaWNlKGluZGV4LCAwLCBuZXdEcmFnZ2FibGUpXG4gICAgfSlcbiAgICBuZXdEcmFnZ2FibGVzLmZvckVhY2goKG5ld0RyYWdnYWJsZSkgPT4ge1xuICAgICAgaW5kZXhPZk5ld3MucHVzaChuZXdMaXN0LmluZGV4T2YobmV3RHJhZ2dhYmxlKSlcbiAgICB9KVxuICAgIHJldHVybiBuZXdMaXN0XG4gIH1cbn1cblxuY2xhc3MgRmxvYXRSaWdodFN0cmF0ZWd5IGV4dGVuZHMgRmxvYXRMZWZ0U3RyYXRlZ3kge1xuICBjb25zdHJ1Y3RvcihyZWN0YW5nbGUsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcihyZWN0YW5nbGUsIG9wdGlvbnMpXG5cbiAgICB0aGlzLnBhZGRpbmdUb3BSaWdodCA9IG9wdGlvbnMucGFkZGluZ1RvcFJpZ2h0IHx8IG5ldyBQb2ludCg1LCA1KVxuICAgIHRoaXMucGFkZGluZ0JvdHRvbUxlZnQgPSBvcHRpb25zLnBhZGRpbmdCb3R0b21MZWZ0IHx8IG5ldyBQb2ludCgwLCAwKVxuICAgIHRoaXMueUdhcEJldHdlZW5EcmFnZ2FibGVzID0gb3B0aW9ucy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgfHwgMFxuXG4gICAgdGhpcy5wYWRkaW5nQm90dG9tTmVnTGVmdCA9IG5ldyBQb2ludCgtdGhpcy5wYWRkaW5nQm90dG9tTGVmdC54LCB0aGlzLnBhZGRpbmdCb3R0b21MZWZ0LnkpXG4gIH1cblxuICBwb3NpdGlvbmluZyhyZWN0YW5nbGVMaXN0LCBfaW5kZXhlc09mTmV3cykge1xuICAgIGNvbnN0IGJvdW5kUmVjdCA9IHRoaXMuYm91bmRSZWN0XG4gICAgbGV0IGJvdW5kYXJ5UG9pbnRzID0gW2JvdW5kUmVjdC5nZXRQMigpXVxuXG4gICAgcmVjdGFuZ2xlTGlzdC5mb3JFYWNoKChyZWN0LCByZWN0SW5kZXgpID0+IHtcbiAgICAgIGxldCBwb3NpdGlvbiwgaXNWYWxpZCA9IGZhbHNlXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvdW5kYXJ5UG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHBvc2l0aW9uID0gbmV3IFBvaW50KFxuICAgICAgICAgIGJvdW5kYXJ5UG9pbnRzW2ldLnggLSByZWN0LnNpemUueCAtIHRoaXMucGFkZGluZ1RvcFJpZ2h0LngsXG4gICAgICAgICAgaSA+IDAgPyAoYm91bmRhcnlQb2ludHNbaSAtIDFdLnkgKyB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcykgOiAoYm91bmRSZWN0LnBvc2l0aW9uLnkgKyB0aGlzLnBhZGRpbmdUb3BSaWdodC55KVxuICAgICAgICApXG5cbiAgICAgICAgaXNWYWxpZCA9IChwb3NpdGlvbi54ID4gcmVjdC5wb3NpdGlvbi54KVxuICAgICAgICBpZiAoaXNWYWxpZCkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICBwb3NpdGlvbiA9IG5ldyBQb2ludChcbiAgICAgICAgICBib3VuZFJlY3QuZ2V0UDIoKS54ICAtIHJlY3Quc2l6ZS54IC0gdGhpcy5wYWRkaW5nVG9wUmlnaHQueCxcbiAgICAgICAgICBib3VuZGFyeVBvaW50c1tib3VuZGFyeVBvaW50cy5sZW5ndGggLSAxXS55ICsgKHJlY3RJbmRleCA+IDAgPyB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyA6IHRoaXMucGFkZGluZ1RvcFJpZ2h0LnkpXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIHJlY3QucG9zaXRpb24gPSBwb3NpdGlvblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZW1vdmFibGUgJiYgcmVjdC5nZXRQNCgpLnkgPiBib3VuZFJlY3QuZ2V0UDQoKS55KSB7XG4gICAgICAgIHJlY3QucmVtb3ZhYmxlID0gdHJ1ZVxuICAgICAgfVxuICAgICAgYm91bmRhcnlQb2ludHMgPSBhZGRQb2ludFRvQm91bmRQb2ludHMoYm91bmRhcnlQb2ludHMsIHJlY3QuZ2V0UDQoKS5hZGQodGhpcy5wYWRkaW5nQm90dG9tTmVnTGVmdCksIHRydWUpXG4gICAgfSlcbiAgICByZXR1cm4gcmVjdGFuZ2xlTGlzdFxuICB9XG59XG5cbmV4cG9ydCB7IE5vdENyb3NzaW5nU3RyYXRlZ3ksIEZsb2F0TGVmdFN0cmF0ZWd5LCBGbG9hdFJpZ2h0U3RyYXRlZ3kgfVxuIiwiaW1wb3J0IHJhbmdlIGZyb20gJy4vdXRpbHMvcmFuZ2UuanMnXG5pbXBvcnQgcmVtb3ZlSXRlbSBmcm9tICcuL3V0aWxzL3JlbW92ZS1hcnJheS1pdGVtJ1xuaW1wb3J0IGdldERlZmF1bHRQYXJlbnQgZnJvbSAnLi91dGlscy9nZXQtZGVmYXVsdC1wYXJlbnQnXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnRFbWl0dGVyJ1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tICcuL2dlb21ldHJ5L3JlY3RhbmdsZSdcbmltcG9ydCB7IHRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3RvcnkgfSBmcm9tICcuL2dlb21ldHJ5L2Rpc3RhbmNlcydcbmltcG9ydCB7IHNjb3BlcywgZGVmYXVsdFNjb3BlIH0gZnJvbSAnLi9zY29wZSdcblxuaW1wb3J0IHsgRmxvYXRMZWZ0U3RyYXRlZ3kgfSBmcm9tICcuL3Bvc2l0aW9uaW5nJ1xuXG5jb25zdCBhZGRUb0RlZmF1bHRTY29wZSA9IGZ1bmN0aW9uKHRhcmdldCkge1xuICBkZWZhdWx0U2NvcGUuYWRkVGFyZ2V0KHRhcmdldClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFyZ2V0IGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgZHJhZ2dhYmxlcywgb3B0aW9ucyA9IHt9KSB7XG4gICAgc3VwZXIodW5kZWZpbmVkLCBvcHRpb25zKVxuICAgIGNvbnN0IHRhcmdldCA9IHRoaXNcbiAgICBjb25zdCBwYXJlbnQgPSBvcHRpb25zLnBhcmVudCB8fCBnZXREZWZhdWx0UGFyZW50KGVsZW1lbnQpXG5cbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHRpbWVFbmQ6IDIwMCxcbiAgICAgIHRpbWVFeGNhbmdlOiA0MDAsXG4gICAgICBwYXJlbnQ6IHBhcmVudFxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0aGlzLnBvc2l0aW9uaW5nU3RyYXRlZ3kgPSBvcHRpb25zLnN0cmF0ZWd5IHx8IG5ldyBGbG9hdExlZnRTdHJhdGVneShcbiAgICAgIHRoaXMuZ2V0UmVjdGFuZ2xlLmJpbmQodGhpcyksXG4gICAgICB7XG4gICAgICAgIHJhZGl1czogODAsXG4gICAgICAgIGdldERpc3RhbmNlOiB0cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5KHsgeDogMSwgeTogNCB9KSxcbiAgICAgICAgcmVtb3ZhYmxlOiB0cnVlXG4gICAgICB9XG4gICAgKVxuXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUudGFyZ2V0cy5wdXNoKHRhcmdldCkpXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gZHJhZ2dhYmxlc1xuXG4gICAgVGFyZ2V0LmVtaXR0ZXIuZW1pdCgndGFyZ2V0OmNyZWF0ZScsIHRoaXMpXG5cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgcG9zaXRpb25pbmcgKGRyYWdnYWJsZXMsIGluZGV4ZXNPZk5ldykge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uaW5nU3RyYXRlZ3kucG9zaXRpb25pbmcoZHJhZ2dhYmxlcywgaW5kZXhlc09mTmV3KVxuICB9XG5cbiAgc29ydGluZyAob2xkRHJhZ2dhYmxlcywgbmV3RHJhZ2dhYmxlcywgaW5kZXhPZk5ld3MpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbmluZ1N0cmF0ZWd5LnNvcnRpbmcob2xkRHJhZ2dhYmxlcywgbmV3RHJhZ2dhYmxlcywgaW5kZXhPZk5ld3MpXG4gIH1cblxuICBpbml0KCkge1xuICAgIGxldCByZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXdcblxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzID0gdGhpcy5kcmFnZ2FibGVzLmZpbHRlcigoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBsZXQgZWxlbWVudCA9IGRyYWdnYWJsZS5lbGVtZW50LnBhcmVudE5vZGVcbiAgICAgIHdoaWxlIChlbGVtZW50KSB7XG4gICAgICAgIGlmIChlbGVtZW50ID09PSB0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGVcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH0pXG5cbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMubGVuZ3RoKSB7XG4gICAgICBpbmRleGVzT2ZOZXcgPSByYW5nZSh0aGlzLmlubmVyRHJhZ2dhYmxlcy5sZW5ndGgpXG4gICAgICByZWN0YW5nbGVzID0gdGhpcy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgICB9KSwgaW5kZXhlc09mTmV3KVxuICAgICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXcpXG4gICAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHRoaXMuZW1pdCgndGFyZ2V0OmFkZCcsIGRyYWdnYWJsZSkpXG4gICAgfVxuICB9XG5cbiAgZ2V0UmVjdGFuZ2xlKCkge1xuICAgIHJldHVybiBSZWN0YW5nbGUuZnJvbUVsZW1lbnQoXG4gICAgICB0aGlzLmVsZW1lbnQsXG4gICAgICB0aGlzLm9wdGlvbnMucGFyZW50LFxuICAgICAgdGhpcy5vcHRpb25zLmlzQ29udGVudEJveFNpemUsXG4gICAgICB0cnVlXG4gICAgKVxuICB9XG5cbiAgY2F0Y2hEcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5jYXRjaERyYWdnYWJsZSkge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5jYXRjaERyYWdnYWJsZSh0aGlzLCBkcmFnZ2FibGUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRhcmdldFJlY3RhbmdsZSA9IHRoaXMuZ2V0UmVjdGFuZ2xlKClcbiAgICAgIGNvbnN0IGRyYWdnYWJsZVNxdWFyZSA9IGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKS5nZXRTcXVhcmUoKVxuXG4gICAgICByZXR1cm4gZHJhZ2dhYmxlU3F1YXJlIDwgdGFyZ2V0UmVjdGFuZ2xlLmdldFNxdWFyZSgpXG4gICAgICAgICAgICAgICYmIHRhcmdldFJlY3RhbmdsZS5pbmNsdWRlUG9pbnQoZHJhZ2dhYmxlLmdldENlbnRlcigpKVxuICAgIH1cbiAgfVxuXG4gIGdldFBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFJlY3RhbmdsZSgpLnBvc2l0aW9uXG4gIH1cblxuICBnZXRTaXplKCkge1xuICAgIHJldHVybiB0aGlzLmdldFJlY3RhbmdsZSgpLnNpemVcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgc2NvcGVzLmZvckVhY2goKHNjb3BlKSA9PiByZW1vdmVJdGVtKHNjb3BlLnRhcmdldHMsIHRoaXMpKVxuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBbXSlcbiAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIFtdLCAwKVxuICB9XG5cbiAgb25FbmQoZHJhZ2dhYmxlKSB7XG4gICAgY29uc3QgbmV3RHJhZ2dhYmxlc0luZGV4ID0gW11cbiAgICBjb25zdCBpbmNsdWRlUG9pbnQgPSB0aGlzLmdldFJlY3RhbmdsZSgpLmluY2x1ZGVQb2ludChkcmFnZ2FibGUuZ2V0UG9zaXRpb24oKSlcblxuICAgIGlmICghaW5jbHVkZVBvaW50KSB7XG4gICAgICBpZiAodGhpcy5nZXRSZWN0YW5nbGUoKS5pbmNsdWRlUG9pbnQoZHJhZ2dhYmxlLmdldENlbnRlcigpKSkge1xuICAgICAgICBkcmFnZ2FibGUucG9zaXRpb24gPSBkcmFnZ2FibGUuZ2V0Q2VudGVyKCkuY2xvbmUoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5lbWl0KCd0YXJnZXQ6YmVmb3JlQWRkJywgZHJhZ2dhYmxlKVxuXG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMgPSB0aGlzLnNvcnRpbmcodGhpcy5pbm5lckRyYWdnYWJsZXMsIFtkcmFnZ2FibGVdLCBuZXdEcmFnZ2FibGVzSW5kZXgpXG4gICAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgbmV3RHJhZ2dhYmxlc0luZGV4KVxuXG4gICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBuZXdEcmFnZ2FibGVzSW5kZXgpXG4gICAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTEpIHtcbiAgICAgIHRoaXMuYWRkUmVtb3ZlT25Nb3ZlKGRyYWdnYWJsZSlcbiAgICB9XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIHNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIGluZGV4ZXNPZk5ldywgdGltZSkge1xuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnNsaWNlKDApLmZvckVhY2goKGRyYWdnYWJsZSwgaSkgPT4ge1xuICAgICAgY29uc3QgcmVjdCA9IHJlY3RhbmdsZXNbaV0sXG4gICAgICAgIHRpbWVFbmQgPSB0aW1lIHx8IHRpbWUgPT09IDAgPyB0aW1lIDogaW5kZXhlc09mTmV3LmluZGV4T2YoaSkgIT09IC0xID8gdGhpcy5vcHRpb25zLnRpbWVFbmQgOiB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2VcblxuICAgICAgaWYgKHJlY3QucmVtb3ZhYmxlKSB7XG4gICAgICAgIGRyYWdnYWJsZS5tb3ZlKGRyYWdnYWJsZS5pbml0aWFsUG9zaXRpb24sIHRpbWVFbmQsIHRydWUsIHRydWUpXG4gICAgICAgIHJlbW92ZUl0ZW0odGhpcy5pbm5lckRyYWdnYWJsZXMsIGRyYWdnYWJsZSlcbiAgICAgICAgdGhpcy5lbWl0KCd0YXJnZXQ6cmVtb3ZlJywgZHJhZ2dhYmxlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZHJhZ2dhYmxlLm1vdmUocmVjdC5wb3NpdGlvbiwgdGltZUVuZCwgdHJ1ZSwgdHJ1ZSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgYWRkKGRyYWdnYWJsZSwgdGltZSkge1xuICAgIGNvbnN0IG5ld0RyYWdnYWJsZXNJbmRleCA9IHRoaXMuaW5uZXJEcmFnZ2FibGVzLmxlbmd0aFxuXG4gICAgdGhpcy5lbWl0KCd0YXJnZXQ6YmVmb3JlQWRkJywgZHJhZ2dhYmxlKVxuXG4gICAgdGhpcy5wdXNoSW5uZXJEcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICAgIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgfSksIG5ld0RyYWdnYWJsZXNJbmRleCwgZHJhZ2dhYmxlKVxuXG4gICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBbbmV3RHJhZ2dhYmxlc0luZGV4XSwgdGltZSB8fCAwKVxuICAgIGlmICh0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkgIT09IC0xKSB7XG4gICAgICB0aGlzLmFkZFJlbW92ZU9uTW92ZShkcmFnZ2FibGUpXG4gICAgfVxuICB9XG5cbiAgcHVzaElubmVyRHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIGlmICh0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSk9PT0tMSkge1xuICAgICAgdGhpcy5pbm5lckRyYWdnYWJsZXMucHVzaChkcmFnZ2FibGUpXG4gICAgfVxuICB9XG5cbiAgYWRkUmVtb3ZlT25Nb3ZlKGRyYWdnYWJsZSkge1xuICAgIGRyYWdnYWJsZS5vbignZHJhZzptb3ZlJywgdGhpcy5yZW1vdmVIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgdGhpcy5yZW1vdmUoZHJhZ2dhYmxlKVxuICAgIH0pXG5cbiAgICB0aGlzLmVtaXQoJ3RhcmdldDphZGQnLCBkcmFnZ2FibGUpXG4gIH1cblxuICByZW1vdmUoZHJhZ2dhYmxlKSB7XG4gICAgZHJhZ2dhYmxlLnVuc3Vic2NyaWJlKCdkcmFnOm1vdmUnLCB0aGlzLnJlbW92ZUhhbmRsZXIpXG5cbiAgICBjb25zdCBpbmRleCA9IHRoaXMuaW5uZXJEcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKVxuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnNwbGljZShpbmRleCwgMSlcblxuICAgIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgfSksIFtdKVxuXG4gICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBbXSlcbiAgICB0aGlzLmVtaXQoJ3RhcmdldDpyZW1vdmUnLCBkcmFnZ2FibGUpXG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5tb3ZlKGRyYWdnYWJsZS5pbml0aWFsUG9zaXRpb24sIDAsIHRydWUsIHRydWUpXG4gICAgICB0aGlzLmVtaXQoJ3RhcmdldDpyZW1vdmUnLCBkcmFnZ2FibGUpXG4gICAgfSlcbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcyA9IFtdXG4gIH1cblxuICBnZXRTb3J0ZWREcmFnZ2FibGVzKCkge1xuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnNsaWNlKClcbiAgfVxufVxuXG5UYXJnZXQuZW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXIoVGFyZ2V0KVxuVGFyZ2V0LmVtaXR0ZXIub24oJ3RhcmdldDpjcmVhdGUnLCBhZGRUb0RlZmF1bHRTY29wZSlcbiIsImltcG9ydCByZW1vdmVJdGVtIGZyb20gJy4vdXRpbHMvcmVtb3ZlLWFycmF5LWl0ZW0nXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnRFbWl0dGVyJ1xuaW1wb3J0IERyYWdnYWJsZSBmcm9tICcuL2RyYWdnYWJsZSdcbmltcG9ydCBUYXJnZXQgZnJvbSAnLi90YXJnZXQnXG5cbmNvbnN0IHNjb3BlcyA9IFtdXG5cbmNsYXNzIFNjb3BlIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoZHJhZ2dhYmxlcywgdGFyZ2V0cywgb3B0aW9ucz17fSkge1xuICAgIHN1cGVyKHVuZGVmaW5lZCwgb3B0aW9ucylcbiAgICBzY29wZXMuZm9yRWFjaCgoc2NvcGUpID0+IHtcbiAgICAgIGlmIChkcmFnZ2FibGVzKSB7XG4gICAgICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICAgICAgcmVtb3ZlSXRlbShzY29wZS5kcmFnZ2FibGVzLCBkcmFnZ2FibGUpXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIGlmICh0YXJnZXRzKSB7XG4gICAgICAgIHRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB7XG4gICAgICAgICAgcmVtb3ZlSXRlbShzY29wZS50YXJnZXRzLCB0YXJnZXQpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZXMgfHwgW11cbiAgICB0aGlzLnRhcmdldHMgPSB0YXJnZXRzIHx8IFtdXG4gICAgc2NvcGVzLnB1c2godGhpcylcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICB0aW1lRW5kOiAob3B0aW9ucy50aW1lRW5kKSB8fCA0MDBcbiAgICB9XG5cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUuZHJhZ0VuZEFjdGlvbiA9ICgpID0+IHRoaXMub25FbmQoZHJhZ2dhYmxlKVxuICAgIH0pXG4gIH1cblxuICBhZGREcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxuICAgIGRyYWdnYWJsZS5kcmFnRW5kQWN0aW9uID0gKCkgPT4gdGhpcy5vbkVuZChkcmFnZ2FibGUpXG4gIH1cblxuICBhZGRUYXJnZXQodGFyZ2V0KSB7XG4gICAgdGhpcy50YXJnZXRzLnB1c2godGFyZ2V0KVxuICB9XG5cbiAgb25FbmQoZHJhZ2dhYmxlKSB7XG4gICAgY29uc3Qgc2hvdFRhcmdldHMgPSB0aGlzLnRhcmdldHMuZmlsdGVyKCh0YXJnZXQpID0+IHtcbiAgICAgIHJldHVybiB0YXJnZXQuZHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkgIT09IC0xXG4gICAgfSkuZmlsdGVyKCh0YXJnZXQpID0+IHtcbiAgICAgIHJldHVybiB0YXJnZXQuY2F0Y2hEcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICAgIH0pLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIHJldHVybiBhLmdldFJlY3RhbmdsZSgpLmdldFNxdWFyZSgpIC0gYi5nZXRSZWN0YW5nbGUoKS5nZXRTcXVhcmUoKVxuICAgIH0pXG5cbiAgICBpZiAoc2hvdFRhcmdldHMubGVuZ3RoKSB7XG4gICAgICBzaG90VGFyZ2V0c1swXS5vbkVuZChkcmFnZ2FibGUpXG4gICAgfSBlbHNlIGlmIChkcmFnZ2FibGUudGFyZ2V0cy5sZW5ndGgpIHtcbiAgICAgIGRyYWdnYWJsZS5waW5Qb3NpdGlvbihkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uLCB0aGlzLm9wdGlvbnMudGltZUVuZClcbiAgICB9XG5cbiAgICB0aGlzLmVtaXQoJ3Njb3BlOmNoYW5nZScpXG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLnRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB0YXJnZXQucmVzZXQoKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnJlZnJlc2goKSlcbiAgICB0aGlzLnRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB0YXJnZXQucmVmcmVzaCgpKVxuICB9XG5cbiAgZ2V0IHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXRzLm1hcCgodGFyZ2V0KSA9PiB7XG4gICAgICByZXR1cm4gdGFyZ2V0LmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4gdGhpcy5kcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSlcbiAgICB9KVxuICB9XG5cbiAgc2V0IHBvc2l0aW9ucyhwb3NpdGlvbnMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gJ3dyb25nIGFycmF5IGxlbmd0aCdcbiAgICBpZiAocG9zaXRpb25zLmxlbmd0aCA9PT0gdGhpcy50YXJnZXRzLmxlbmd0aCkge1xuICAgICAgdGhpcy50YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4gdGFyZ2V0LnJlc2V0KCkpXG5cbiAgICAgIHBvc2l0aW9ucy5mb3JFYWNoKCh0YXJnZXRJbmRleGVzLCBpKSA9PiB7XG4gICAgICAgIHRhcmdldEluZGV4ZXMuZm9yRWFjaCgoaW5kZXgpID0+IHtcbiAgICAgICAgICB0aGlzLnRhcmdldHNbaV0uYWRkKHRoaXMuZHJhZ2dhYmxlc1tpbmRleF0pXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBtZXNzYWdlXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IGRlZmF1bHRTY29wZSA9IG5ldyBTY29wZSgpXG5cbmZ1bmN0aW9uIHNjb3BlKGZuKSB7XG4gIGNvbnN0IGN1cnJlbnRTY29wZSA9IG5ldyBTY29wZSgpXG5cbiAgY29uc3QgYWRkRHJhZ2dhYmxlVG9TY29wZSA9IGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICAgIGN1cnJlbnRTY29wZS5hZGREcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICAgIERyYWdnYWJsZS5lbWl0dGVyLmludGVycnVwdCgpXG4gIH1cblxuICBjb25zdCBhZGRUYXJnZXRUb1Njb3BlID0gZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgY3VycmVudFNjb3BlLmFkZFRhcmdldCh0YXJnZXQpXG4gICAgRHJhZ2dhYmxlLmVtaXR0ZXIuaW50ZXJydXB0KClcbiAgfVxuXG4gIERyYWdnYWJsZS5lbWl0dGVyLnByZXBlbmRPbignZHJhZ2dhYmxlOmNyZWF0ZScsIGFkZERyYWdnYWJsZVRvU2NvcGUpXG4gIFRhcmdldC5lbWl0dGVyLnByZXBlbmRPbigndGFyZ2V0OmNyZWF0ZScsIGFkZFRhcmdldFRvU2NvcGUpXG4gIGZuLmNhbGwoKVxuICBEcmFnZ2FibGUuZW1pdHRlci51bnN1YnNjcmliZSgnZHJhZ2dhYmxlOmNyZWF0ZScsIGFkZERyYWdnYWJsZVRvU2NvcGUpXG4gIFRhcmdldC5lbWl0dGVyLnVuc3Vic2NyaWJlKCd0YXJnZXQ6Y3JlYXRlJywgYWRkVGFyZ2V0VG9TY29wZSlcbiAgcmV0dXJuIGN1cnJlbnRTY29wZVxufVxuXG5leHBvcnQgeyBzY29wZXMsIGRlZmF1bHRTY29wZSwgU2NvcGUsIHNjb3BlIH1cbiIsImZ1bmN0aW9uIGNoZWNrU3VwcG9ydFBhc3NpdmVFdmVudHMoKSB7XG4gIGxldCBwYXNzaXZlU3VwcG9ydGVkID0gZmFsc2VcblxuICB0cnkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdwYXNzaXZlJywge1xuICAgICAgZ2V0KCkge1xuICAgICAgICByZXR1cm4gKHBhc3NpdmVTdXBwb3J0ZWQgPSB0cnVlKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndGVzdCcsIG9wdGlvbnMsIG9wdGlvbnMpXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Rlc3QnLCBvcHRpb25zLCBvcHRpb25zKVxuICB9IGNhdGNoIChfZXJyKSB7XG4gICAgcGFzc2l2ZVN1cHBvcnRlZCA9IGZhbHNlXG4gIH1cblxuICByZXR1cm4gcGFzc2l2ZVN1cHBvcnRlZFxufVxuXG5leHBvcnQgY29uc3QgaXNTdXBwb3J0UGFzc2l2ZUV2ZW50cyA9IGNoZWNrU3VwcG9ydFBhc3NpdmVFdmVudHMoKVxuXG5mdW5jdGlvbiBldmVudE9wdGlvbnMob3B0aW9ucywgZmFsbGJhY2sgPSBmYWxzZSkge1xuICByZXR1cm4gaXNTdXBwb3J0UGFzc2l2ZUV2ZW50cyA/IG9wdGlvbnMgOiBmYWxsYmFja1xufVxuXG5leHBvcnQgeyBldmVudE9wdGlvbnMgfVxuXG5leHBvcnQgZGVmYXVsdCBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzXG4iLCJpbXBvcnQgeyBhZGRDbGFzcywgcmVtb3ZlQ2xhc3MgfSBmcm9tICcuL3V0aWxzL2NsYXNzZXMnXG5pbXBvcnQgZ2V0RGVmYXVsdFBhcmVudCBmcm9tICcuL3V0aWxzL2dldC1kZWZhdWx0LXBhcmVudCdcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudEVtaXR0ZXInXG5pbXBvcnQgZ2V0U3R5bGVQcm9wZXJ0eSBmcm9tICdkZXNhbmRyby1nZXQtc3R5bGUtcHJvcGVydHknXG5pbXBvcnQgeyBCb3VuZFRvRWxlbWVudCB9IGZyb20gJy4vYm91bmRpbmcnXG5pbXBvcnQgUG9pbnQgZnJvbSAnLi9nZW9tZXRyeS9wb2ludCdcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSAnLi9nZW9tZXRyeS9yZWN0YW5nbGUnXG5pbXBvcnQgeyBkZWZhdWx0U2NvcGUgfSBmcm9tICcuL3Njb3BlJ1xuaW1wb3J0IGlzU3VwcG9ydFBhc3NpdmVFdmVudHMgZnJvbSAnLi91dGlscy9pcy1zdXBwb3J0LXBhc3NpdmUtZXZlbnRzJ1xuXG5jb25zdCBpc1RvdWNoID0gJ29udG91Y2hzdGFydCcgaW4gd2luZG93XG5jb25zdCBtb3VzZUV2ZW50cyA9IHtcbiAgc3RhcnQ6ICdtb3VzZWRvd24nLFxuICBtb3ZlOiAnbW91c2Vtb3ZlJyxcbiAgZW5kOiAnbW91c2V1cCdcbn1cbmNvbnN0IHRvdWNoRXZlbnRzID0ge1xuICBzdGFydDogJ3RvdWNoc3RhcnQnLFxuICBtb3ZlOiAndG91Y2htb3ZlJyxcbiAgZW5kOiAndG91Y2hlbmQnXG59XG5jb25zdCBkcmFnZ2FibGVzID0gW11cbmNvbnN0IHRyYW5zZm9ybVByb3BlcnR5ID0gZ2V0U3R5bGVQcm9wZXJ0eSgndHJhbnNmb3JtJylcbmNvbnN0IHRyYW5zaXRpb25Qcm9wZXJ0eSA9IGdldFN0eWxlUHJvcGVydHkoJ3RyYW5zaXRpb24nKVxuXG5mdW5jdGlvbiBnZXRUb3VjaEJ5SUQoZWxlbWVudCwgdG91Y2hJZCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnQuY2hhbmdlZFRvdWNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZWxlbWVudC5jaGFuZ2VkVG91Y2hlc1tpXS5pZGVudGlmaWVyID09PSB0b3VjaElkKSB7XG4gICAgICByZXR1cm4gZWxlbWVudC5jaGFuZ2VkVG91Y2hlc1tpXVxuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cblxuZnVuY3Rpb24gcHJldmVudERvdWJsZUluaXQoZHJhZ2dhYmxlKSB7XG4gIGNvbnN0IG1lc3NhZ2UgPSBcImZvciB0aGlzIGVsZW1lbnQgRHJhZ2VlLkRyYWdnYWJsZSBpcyBhbHJlYWR5IGV4aXN0LCBkb24ndCBjcmVhdGUgaXQgdHdpY2UgXCJcbiAgaWYgKGRyYWdnYWJsZXMuc29tZSgoZXhpc3RpbmcpID0+IGRyYWdnYWJsZS5lbGVtZW50ID09PSBleGlzdGluZy5lbGVtZW50KSkge1xuICAgIHRocm93IG1lc3NhZ2VcbiAgfVxuICBkcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxufVxuXG5mdW5jdGlvbiBhZGRUb0RlZmF1bHRTY29wZShkcmFnZ2FibGUpIHtcbiAgZGVmYXVsdFNjb3BlLmFkZERyYWdnYWJsZShkcmFnZ2FibGUpXG59XG5cbmZ1bmN0aW9uIGNvcHlTdHlsZXMoc291cmNlLCBkZXN0aW5hdGlvbikge1xuICBjb25zdCBjcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHNvdXJjZSlcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qga2V5ID0gY3NbaV1cbiAgICBpZiAoKGtleS5pbmRleE9mKCd0cmFuc2l0aW9uJykgPCAwKSAmJiAoa2V5LmluZGV4T2YoJ3RyYW5zZm9ybScpIDwgMCkpIHtcbiAgICAgIGRlc3RpbmF0aW9uLnN0eWxlW2tleV0gPSBjc1trZXldXG4gICAgfVxuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzb3VyY2UuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICBjb3B5U3R5bGVzKHNvdXJjZS5jaGlsZHJlbltpXSwgZGVzdGluYXRpb24uY2hpbGRyZW5baV0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhZ2dhYmxlIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgb3B0aW9ucz17fSkge1xuICAgIHN1cGVyKHVuZGVmaW5lZCwgb3B0aW9ucylcbiAgICB0aGlzLnRhcmdldHMgPSBbXVxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG4gICAgcHJldmVudERvdWJsZUluaXQodGhpcylcbiAgICBEcmFnZ2FibGUuZW1pdHRlci5lbWl0KCdkcmFnZ2FibGU6Y3JlYXRlJywgdGhpcylcbiAgICB0aGlzLl9lbmFibGUgPSB0cnVlXG4gICAgdGhpcy5zdGFydFBvc2l0aW9uaW5nKClcbiAgICB0aGlzLnN0YXJ0TGlzdGVuaW5nKClcbiAgfVxuXG4gIHN0YXJ0UG9zaXRpb25pbmcoKSB7XG4gICAgdGhpcy5fc2V0RGVmYXVsdFRyYW5zaXRpb24oKVxuICAgIHRoaXMub2Zmc2V0ID0gUG9pbnQuZWxlbWVudE9mZnNldCh0aGlzLmVsZW1lbnQsIHRoaXMucGFyZW50LCB0cnVlKVxuICAgIHRoaXMucGlubmVkUG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICAgIHRoaXMuaW5pdGlhbFBvc2l0aW9uID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uIHx8IHRoaXMub2Zmc2V0XG5cbiAgICB0aGlzLnBpblBvc2l0aW9uKHRoaXMuaW5pdGlhbFBvc2l0aW9uKVxuXG4gICAgaWYgKHRoaXMuYm91bmRpbmcucmVmcmVzaCkge1xuICAgICAgdGhpcy5ib3VuZGluZy5yZWZyZXNoKClcbiAgICB9XG4gIH1cblxuICBzdGFydExpc3RlbmluZygpIHtcbiAgICB0aGlzLl9kcmFnU3RhcnQgPSAoZXZlbnQpID0+IHRoaXMuZHJhZ1N0YXJ0KGV2ZW50KVxuICAgIHRoaXMuX2RyYWdNb3ZlID0gKGV2ZW50KSA9PiB0aGlzLmRyYWdNb3ZlKGV2ZW50KVxuICAgIHRoaXMuX2RyYWdFbmQgPSAoZXZlbnQpID0+IHRoaXMuZHJhZ0VuZChldmVudClcbiAgICB0aGlzLl9uYXRpdmVEcmFnU3RhcnQgPSAoZXZlbnQpID0+IHRoaXMubmF0aXZlRHJhZ1N0YXJ0KGV2ZW50KVxuICAgIHRoaXMuX25hdGl2ZURyYWdPdmVyID0gKGV2ZW50KSA9PiB0aGlzLm5hdGl2ZURyYWdPdmVyKGV2ZW50KVxuICAgIHRoaXMuX25hdGl2ZURyYWdFbmQgPSAoZXZlbnQpID0+IHRoaXMubmF0aXZlRHJhZ0VuZChldmVudClcbiAgICB0aGlzLl9uYXRpdmVEcm9wID0gKGV2ZW50KSA9PiB0aGlzLm5hdGl2ZURyb3AoZXZlbnQpXG5cbiAgICB0aGlzLmhhbmRsZXIuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0LCBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzID8geyBwYXNzaXZlOiBmYWxzZSB9IDogZmFsc2UpXG4gICAgdGhpcy5oYW5kbGVyLmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydCwgaXNTdXBwb3J0UGFzc2l2ZUV2ZW50cyA/IHsgcGFzc2l2ZTogZmFsc2UgfSA6IGZhbHNlKVxuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCB0aGlzLl9uYXRpdmVEcmFnU3RhcnQpXG4gIH1cblxuICBnZXRTaXplKCkge1xuICAgIHJldHVybiBQb2ludC5lbGVtZW50U2l6ZSh0aGlzLmVsZW1lbnQsIHRoaXMub3B0aW9ucy5pc0NvbnRlbnRCb3hTaXplKVxuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMub2Zmc2V0LmFkZCh0aGlzLl90cmFuc2Zvcm1Qb3NpdGlvbiB8fCBuZXcgUG9pbnQoMCwgMCkpXG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25cbiAgfVxuXG4gIGdldENlbnRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi5hZGQodGhpcy5nZXRTaXplKCkubXVsdCgwLjUpKVxuICB9XG5cbiAgX3NldERlZmF1bHRUcmFuc2l0aW9uICgpIHtcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNpdGlvblByb3BlcnR5XSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZWxlbWVudClbdHJhbnNpdGlvblByb3BlcnR5XVxuICB9XG5cbiAgX3NldFRyYW5zaXRpb24odGltZSkge1xuICAgIGxldCB0cmFuc2l0aW9uID0gdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV1cbiAgICBjb25zdCB0cmFuc2l0aW9uQ3NzID0gYHRyYW5zZm9ybSAke3RpbWV9bXNgXG5cbiAgICBpZiAoIS90cmFuc2Zvcm0gXFxkKm0/cy8udGVzdCh0cmFuc2l0aW9uKSkge1xuICAgICAgaWYgKHRyYW5zaXRpb24pIHtcbiAgICAgICAgdHJhbnNpdGlvbiArPSBgLCAke3RyYW5zaXRpb25Dc3N9YFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJhbnNpdGlvbiA9IHRyYW5zaXRpb25Dc3NcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdHJhbnNpdGlvbiA9IHRyYW5zaXRpb24ucmVwbGFjZSgvdHJhbnNmb3JtIFxcZCptP3MvLCB0cmFuc2l0aW9uQ3NzKVxuICAgIH1cblxuICAgIHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldID0gdHJhbnNpdGlvblxuICB9XG5cbiAgX3NldFRyYW5zbGF0ZShwb2ludCkge1xuICAgIHRoaXMuX3RyYW5zZm9ybVBvc2l0aW9uID0gcG9pbnRcblxuICAgIGxldCB0cmFuc2Zvcm0gPSB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcGVydHldXG4gICAgbGV0IHRyYW5zbGF0ZUNzcyA9IGAgdHJhbnNsYXRlM2QoJHtwb2ludC54fXB4LCAke3BvaW50Lnl9cHgsIDBweClgXG5cbiAgICBjb25zdCB1YSA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50XG4gICAgY29uc3QgbXNpZSA9IHVhLmluZGV4T2YoJ01TSUUgJykgIT09IC0xXG5cbiAgICBpZiAobXNpZSkge1xuICAgICAgdHJhbnNsYXRlQ3NzID0gYCB0cmFuc2xhdGUoJHtwb2ludC54fXB4LCR7cG9pbnQueX1weClgXG4gICAgICBpZiAoIS90cmFuc2xhdGVcXChbXildK1xcKS8udGVzdCh0cmFuc2Zvcm0pKSB7XG4gICAgICAgIHRyYW5zZm9ybSArPSB0cmFuc2xhdGVDc3NcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyYW5zZm9ybSA9IHRyYW5zZm9ybS5yZXBsYWNlKC90cmFuc2xhdGVcXChbXildK1xcKS8sIHRyYW5zbGF0ZUNzcylcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCEvdHJhbnNsYXRlM2RcXChbXildK1xcKS8udGVzdCh0cmFuc2Zvcm0pKSB7XG4gICAgICAgIHRyYW5zZm9ybSArPSB0cmFuc2xhdGVDc3NcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyYW5zZm9ybSA9IHRyYW5zZm9ybS5yZXBsYWNlKC90cmFuc2xhdGUzZFxcKFteKV0rXFwpLywgdHJhbnNsYXRlQ3NzKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wZXJ0eV0gPSB0cmFuc2Zvcm1cbiAgfVxuXG4gIG1vdmUocG9pbnQsIHRpbWU9MCwgaXNTaWxlbnQ9ZmFsc2UpIHtcbiAgICBwb2ludCA9IHBvaW50LmNsb25lKClcblxuICAgIHRoaXMuZGV0ZXJtaW5lRGlyZWN0aW9uKHBvaW50KVxuICAgIHRoaXMucG9zaXRpb24gPSBwb2ludFxuXG4gICAgdGhpcy5fc2V0VHJhbnNpdGlvbih0aW1lKVxuICAgIHRoaXMuX3NldFRyYW5zbGF0ZShwb2ludC5zdWIodGhpcy5vZmZzZXQpKVxuXG4gICAgaWYgKCFpc1NpbGVudCkge1xuICAgICAgdGhpcy5lbWl0KCdkcmFnOm1vdmUnKVxuICAgIH1cbiAgfVxuXG4gIHBpblBvc2l0aW9uKHBvaW50LCB0aW1lPTAsIHNpbGVudD10cnVlKSB7XG4gICAgdGhpcy5waW5uZWRQb3NpdGlvbiA9IHBvaW50LmNsb25lKClcbiAgICB0aGlzLm1vdmUodGhpcy5waW5uZWRQb3NpdGlvbiwgdGltZSwgc2lsZW50KVxuICB9XG5cbiAgcmVzZXRQb3NpdGlvblRvSW5pdGlhbCAoKSB7XG4gICAgdGhpcy5waW5Qb3NpdGlvbih0aGlzLmluaXRpYWxQb3NpdGlvbilcbiAgfVxuXG4gIHJlZnJlc2hQb3NpdGlvbiAoKSB7XG4gICAgdGhpcy5zZXRQb3NpdGlvbih0aGlzLmdldFBvc2l0aW9uKCkpXG4gIH1cblxuICBzZXRQb3NpdGlvbihwb2ludCkge1xuICAgIHBvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIHRoaXMucG9zaXRpb24gPSBwb2ludFxuICAgIHRoaXMuX3NldFRyYW5zaXRpb24oMClcbiAgICB0aGlzLl9zZXRUcmFuc2xhdGUocG9pbnQuc3ViKHRoaXMub2Zmc2V0KSlcbiAgfVxuXG4gIGRldGVybWluZURpcmVjdGlvbihwb2ludCkge1xuICAgIHRoaXMubGVmdERpcmVjdGlvbiA9ICh0aGlzLnBvc2l0aW9uLnggPCBwb2ludC54KVxuICAgIHRoaXMucmlnaHREaXJlY3Rpb24gPSAodGhpcy5wb3NpdGlvbi54ID4gcG9pbnQueClcbiAgICB0aGlzLnVwRGlyZWN0aW9uID0gKHRoaXMucG9zaXRpb24ueSA+IHBvaW50LnkpXG4gICAgdGhpcy5kb3duRGlyZWN0aW9uID0gKHRoaXMucG9zaXRpb24ueSA8IHBvaW50LnkpXG4gIH1cblxuICBkcmFnU3RhcnQoZXZlbnQpIHtcbiAgICB0aGlzLmN1cnJlbnRFdmVudCA9IGV2ZW50XG4gICAgaWYgKCF0aGlzLl9lbmFibGUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGlzVG91Y2hFdmVudCA9IChpc1RvdWNoICYmIChldmVudCBpbnN0YW5jZW9mIHdpbmRvdy5Ub3VjaEV2ZW50KSlcblxuICAgIHRoaXMuX3N0YXJ0VG91Y2hQb2ludCA9IG5ldyBQb2ludChcbiAgICAgIGlzVG91Y2hFdmVudCA/IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYIDogZXZlbnQuY2xpZW50WCxcbiAgICAgIGlzVG91Y2hFdmVudCA/IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZIDogZXZlbnQuY2xpZW50WVxuICAgIClcblxuICAgIHRoaXMuX3N0YXJ0UG9zaXRpb24gPSB0aGlzLmdldFBvc2l0aW9uKClcbiAgICBpZiAoaXNUb3VjaEV2ZW50KSB7XG4gICAgICB0aGlzLl90b3VjaElkID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uaWRlbnRpZmllclxuICAgIH1cblxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgaWYgKGV2ZW50LnRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSW5wdXRFbGVtZW50IHx8XG4gICAgICAgICAgZXZlbnQudGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJbnB1dEVsZW1lbnQpIHtcbiAgICAgIGV2ZW50LnRhcmdldC5mb2N1cygpXG4gICAgfVxuXG4gICAgaWYgKCEodGhpcy5uYXRpdmVEcmFnQW5kRHJvcCB8fFxuICAgICAgICAgICAgZXZlbnQudGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJbnB1dEVsZW1lbnQgfHxcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSW5wdXRFbGVtZW50KSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIH1cblxuICAgIGlmICh0aGlzLm5hdGl2ZURyYWdBbmREcm9wKSB7XG4gICAgICBjb25zdCBpc1NhZmFyaSA9L3ZlcnNpb25cXC8oXFxkKykuKz9zYWZhcmkvaS50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KVxuICAgICAgaWYgKChpc1RvdWNoRXZlbnQgJiYgdGhpcy5lbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3BPblRvdWNoKSB8fFxuICAgICAgICAgICAgIGlzU2FmYXJpIHx8XG4gICAgICAgICAgICAgdGhpcy5lbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3BGb3JBbGwpIHtcbiAgICAgICAgdGhpcy5lbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3AoZXZlbnQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsZW1lbnQuZHJhZ2dhYmxlID0gdHJ1ZVxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fbmF0aXZlRHJhZ0VuZCwgaXNTdXBwb3J0UGFzc2l2ZUV2ZW50cyA/IHsgcGFzc2l2ZTogZmFsc2UgfSA6IGZhbHNlKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlLCBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzID8geyBwYXNzaXZlOiBmYWxzZSB9IDogZmFsc2UpXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlLCBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzID8geyBwYXNzaXZlOiBmYWxzZSB9IDogZmFsc2UpXG5cbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kLCBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzID8geyBwYXNzaXZlOiBmYWxzZSB9IDogZmFsc2UpXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZCwgaXNTdXBwb3J0UGFzc2l2ZUV2ZW50cyA/IHsgcGFzc2l2ZTogZmFsc2UgfSA6IGZhbHNlKVxuICAgIH1cblxuICAgIHRoaXMuaXNEcmFnZ2luZyA9IHRydWVcbiAgICB0aGlzLmVtaXQoJ2RyYWc6c3RhcnQnKVxuICAgIGFkZENsYXNzKHRoaXMuZWxlbWVudCwgJ2RyYWdlZS1hY3RpdmUnKVxuICAgIHRoaXMuZW1pdCgnZHJhZzptb3ZlJylcbiAgfVxuXG4gIHN0b3BEcmFnZ2luZygpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCB0aGlzLl9uYXRpdmVEcmFnT3ZlcilcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcm9wJywgdGhpcy5fbmF0aXZlRHJvcClcbiAgICB0aGlzLmVsZW1lbnQuZHJhZ2dhYmxlID0gZmFsc2VcbiAgICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZVxuICAgIHJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudCwgJ2RyYWdlZS1hY3RpdmUnKVxuICB9XG5cbiAgZHJhZ01vdmUoZXZlbnQpIHtcbiAgICB0aGlzLmN1cnJlbnRFdmVudCA9IGV2ZW50XG4gICAgbGV0IHRvdWNoXG5cbiAgICBjb25zdCBpc1RvdWNoRXZlbnQgPSAoaXNUb3VjaCAmJiAoZXZlbnQgaW5zdGFuY2VvZiB3aW5kb3cuVG91Y2hFdmVudCkpXG4gICAgaWYgKGlzVG91Y2hFdmVudCkge1xuICAgICAgdG91Y2ggPSBnZXRUb3VjaEJ5SUQoZXZlbnQsIHRoaXMuX3RvdWNoSWQpXG5cbiAgICAgIGlmICghdG91Y2gpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc3QgdG91Y2hQb2ludCA9IG5ldyBQb2ludChcbiAgICAgIGlzVG91Y2hFdmVudCA/IHRvdWNoLnBhZ2VYIDogZXZlbnQuY2xpZW50WCxcbiAgICAgIGlzVG91Y2hFdmVudCA/IHRvdWNoLnBhZ2VZIDogZXZlbnQuY2xpZW50WVxuICAgIClcblxuICAgIGxldCBwb2ludCA9IHRoaXMuX3N0YXJ0UG9zaXRpb24uYWRkKHRvdWNoUG9pbnQuc3ViKHRoaXMuX3N0YXJ0VG91Y2hQb2ludCkpXG4gICAgcG9pbnQgPSB0aGlzLmJvdW5kaW5nLmJvdW5kKHBvaW50LCB0aGlzLmdldFNpemUoKSlcbiAgICB0aGlzLnRvdWNoUG9pbnQgPSB0b3VjaFBvaW50XG4gICAgdGhpcy5tb3ZlKHBvaW50KVxuICB9XG5cbiAgZHJhZ0VuZChldmVudCkge1xuICAgIGNvbnN0IGlzVG91Y2hFdmVudCA9IChpc1RvdWNoICYmIChldmVudCBpbnN0YW5jZW9mIHdpbmRvdy5Ub3VjaEV2ZW50KSlcblxuICAgIGlmIChpc1RvdWNoRXZlbnQgJiYgIWdldFRvdWNoQnlJRChldmVudCwgdGhpcy5fdG91Y2hJZCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIHRoaXMuZHJhZ0VuZEFjdGlvbigpXG4gICAgdGhpcy5lbWl0KCdkcmFnOmVuZCcpXG5cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG5cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcblxuICAgIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnZHJhZ2dhYmxlJylcbiAgICByZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnQsICdkcmFnZWUtYWN0aXZlJylcbiAgfVxuXG4gIG5hdGl2ZURyYWdTdGFydChldmVudCkge1xuICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0JywgJ0ZpcmVGb3ggZml4JylcbiAgICBldmVudC5kYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCA9ICdtb3ZlJ1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgdGhpcy5fbmF0aXZlRHJhZ092ZXIpXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIHRoaXMuX25hdGl2ZURyYWdFbmQpXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIHRoaXMuX25hdGl2ZURyb3ApXG4gIH1cblxuICBuYXRpdmVEcmFnT3ZlcihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBldmVudC5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9ICdtb3ZlJ1xuICAgIGFkZENsYXNzKHRoaXMuZWxlbWVudCwgJ2RyYWdlZS1wbGFjZWhvbGRlcicpXG4gICAgdGhpcy5jdXJyZW50RXZlbnQgPSBldmVudFxuICAgIGlmIChldmVudC5jbGllbnRYID09PSAwICYmIGV2ZW50LmNsaWVudFkgPT09IDApIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHRvdWNoUG9pbnQgPSBuZXcgUG9pbnQoZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSlcbiAgICBsZXQgcG9pbnQgPSB0aGlzLl9zdGFydFBvc2l0aW9uLmFkZCh0b3VjaFBvaW50LnN1Yih0aGlzLl9zdGFydFRvdWNoUG9pbnQpKVxuICAgIHBvaW50ID0gdGhpcy5ib3VuZGluZy5ib3VuZChwb2ludCwgdGhpcy5nZXRTaXplKCkpXG4gICAgdGhpcy50b3VjaFBvaW50ID0gdG91Y2hQb2ludFxuICAgIHRoaXMucG9zaXRpb24gPSBwb2ludFxuICAgIHRoaXMuZW1pdCgnZHJhZzptb3ZlJylcbiAgfVxuXG4gIG5hdGl2ZURyYWdFbmQoX2V2ZW50KSB7XG4gICAgcmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50LCAnZHJhZ2VlLXBsYWNlaG9sZGVyJylcbiAgICB0aGlzLmRyYWdFbmRBY3Rpb24oKVxuICAgIHRoaXMuZW1pdCgnZHJhZzplbmQnKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgdGhpcy5fbmF0aXZlRHJhZ092ZXIpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIHRoaXMuX25hdGl2ZURyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX25hdGl2ZURyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJvcCcsIHRoaXMuX25hdGl2ZURyb3ApXG4gICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2VcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkcmFnZ2FibGUnKVxuICAgIHJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudCwgJ2RyYWdlZS1hY3RpdmUnKVxuICB9XG5cbiAgbmF0aXZlRHJvcChldmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wKGV2ZW50KSB7XG4gICAgY29uc3QgcGFyZW50UmVjdCA9IHRoaXMucGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgY29uc3QgY2xvbmVkRWxlbWVudCA9IHRoaXMuZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSlcbiAgICBjbG9uZWRFbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BlcnR5XSA9ICcnXG4gICAgY29weVN0eWxlcyh0aGlzLmVsZW1lbnQsIGNsb25lZEVsZW1lbnQpXG4gICAgY2xvbmVkRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSdcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNsb25lZEVsZW1lbnQpXG4gICAgYWRkQ2xhc3ModGhpcy5lbGVtZW50LCAnZHJhZ2VlLXBsYWNlaG9sZGVyJylcblxuICAgIGNvbnN0IGVtdWxhdGlvbkRyYWdnYWJsZSA9IG5ldyBEcmFnZ2FibGUoY2xvbmVkRWxlbWVudCwge1xuICAgICAgcGFyZW50OiBkb2N1bWVudC5ib2R5LFxuICAgICAgb246IHtcbiAgICAgICAgJ2RyYWc6bW92ZSc6ICgpID0+IHtcbiAgICAgICAgICB0aGlzLnBvc2l0aW9uID0gbmV3IFBvaW50KFxuICAgICAgICAgICAgZW11bGF0aW9uRHJhZ2dhYmxlLnBvc2l0aW9uLnggLSBwYXJlbnRSZWN0LmxlZnQgLSB3aW5kb3cuc2Nyb2xsWCxcbiAgICAgICAgICAgIGVtdWxhdGlvbkRyYWdnYWJsZS5wb3NpdGlvbi55IC0gcGFyZW50UmVjdC50b3AgLSB3aW5kb3cuc2Nyb2xsWVxuICAgICAgICAgIClcbiAgICAgICAgICB0aGlzLmVtaXQoJ2RyYWc6bW92ZScpXG4gICAgICAgIH0sXG4gICAgICAgICdkcmFnOmVuZCc6ICgpID0+IHtcbiAgICAgICAgICBlbXVsYXRpb25EcmFnZ2FibGUuZGVzdHJveSgpXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChjbG9uZWRFbGVtZW50KVxuICAgICAgICAgIHJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudCwgJ2RyYWdlZS1wbGFjZWhvbGRlcicpXG4gICAgICAgICAgcmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50LCAnZHJhZ2VlLWFjdGl2ZScpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgZW11bGF0aW9uRHJhZ2dhYmxlLm1vdmUobmV3IFBvaW50KFxuICAgICAgdGhpcy5waW5uZWRQb3NpdGlvbi54ICsgcGFyZW50UmVjdC5sZWZ0ICsgd2luZG93LnNjcm9sbFgsXG4gICAgICB0aGlzLnBpbm5lZFBvc2l0aW9uLnkgKyBwYXJlbnRSZWN0LnRvcCArIHdpbmRvdy5zY3JvbGxZXG4gICAgKSlcblxuICAgIGVtdWxhdGlvbkRyYWdnYWJsZS5kcmFnU3RhcnQoZXZlbnQpXG4gIH1cblxuICBkcmFnRW5kQWN0aW9uKCkge1xuICAgIHRoaXMucGluUG9zaXRpb24odGhpcy5wb3NpdGlvbilcbiAgfVxuXG4gIGdldFJlY3RhbmdsZSgpIHtcbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZSh0aGlzLnBvc2l0aW9uLCB0aGlzLmdldFNpemUoKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgdGhpcy5nZXRTaXplKHRydWUpXG4gICAgaWYgKHRoaXMuYm91bmRpbmcucmVmcmVzaCkge1xuICAgICAgdGhpcy5ib3VuZGluZy5yZWZyZXNoKClcbiAgICB9XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuaGFuZGxlci5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQpXG4gICAgdGhpcy5oYW5kbGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydClcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgdGhpcy5fbmF0aXZlRHJhZ1N0YXJ0KVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIHRoaXMuX25hdGl2ZURyYWdPdmVyKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzLl9uYXRpdmVEcm9wKVxuICAgIHRoaXMucmVzZXRFbWl0dGVyKClcblxuICAgIGNvbnN0IGluZGV4ID0gZHJhZ2dhYmxlcy5pbmRleE9mKHRoaXMpXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIGRyYWdnYWJsZXMuc3BsaWNlKGluZGV4LCAxKVxuICAgIH1cbiAgfVxuXG4gIGdldCBwYXJlbnQoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9wYXJlbnQgPSB0aGlzLl9wYXJlbnQgfHwgdGhpcy5vcHRpb25zLnBhcmVudCB8fCBnZXREZWZhdWx0UGFyZW50KHRoaXMuZWxlbWVudCkpXG4gIH1cblxuICBnZXQgYm91bmRpbmcoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9ib3VuZGluZyA9IHRoaXMuX2JvdW5kaW5nIHx8IHRoaXMub3B0aW9ucy5ib3VuZGluZyB8fCBuZXcgQm91bmRUb0VsZW1lbnQodGhpcy5wYXJlbnQsIHRoaXMucGFyZW50KSlcbiAgfVxuXG4gIGdldCBoYW5kbGVyKCkge1xuICAgIGlmICghdGhpcy5faGFuZGxlcikge1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuaGFuZGxlciA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhpcy5faGFuZGxlciA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKHRoaXMub3B0aW9ucy5oYW5kbGVyKSB8fCB0aGlzLmVsZW1lbnRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZXIgPSB0aGlzLm9wdGlvbnMuaGFuZGxlciB8fCB0aGlzLmVsZW1lbnRcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5faGFuZGxlclxuICB9XG5cbiAgZ2V0IG5hdGl2ZURyYWdBbmREcm9wKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMubmF0aXZlRHJhZ0FuZERyb3AgfHwgZmFsc2VcbiAgfVxuXG4gIGdldCBlbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3BPblRvdWNoKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wT25Ub3VjaCB8fCB0cnVlXG4gIH1cblxuICBnZXQgZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wRm9yQWxsKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wRm9yQWxsIHx8IGZhbHNlXG4gIH1cblxuICBnZXQgZW5hYmxlKCkge1xuICAgIHJldHVybiB0aGlzLl9lbmFibGVcbiAgfVxuXG4gIHNldCBlbmFibGUoZW5hYmxlKSB7XG4gICAgaWYgKGVuYWJsZSkge1xuICAgICAgcmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50LCAnZHJhZ2VlLWRpc2FibGUnKVxuICAgIH0gZWxzZSB7XG4gICAgICBhZGRDbGFzcyh0aGlzLmVsZW1lbnQsICdkcmFnZWUtZGlzYWJsZScpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZSA9IGVuYWJsZVxuICB9XG59XG5cbkRyYWdnYWJsZS5lbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcihEcmFnZ2FibGUpXG5EcmFnZ2FibGUuZW1pdHRlci5vbignZHJhZ2dhYmxlOmNyZWF0ZScsIGFkZFRvRGVmYXVsdFNjb3BlKVxuIiwiaW1wb3J0IHJlbW92ZUl0ZW0gZnJvbSAnLi91dGlscy9yZW1vdmUtYXJyYXktaXRlbSdcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudEVtaXR0ZXInXG5pbXBvcnQge1xuICBnZXREaXN0YW5jZSxcbiAgaW5kZXhPZk5lYXJlc3RQb2ludFxufSBmcm9tICcuL2dlb21ldHJ5L2Rpc3RhbmNlcydcblxuaW1wb3J0IERyYWdnYWJsZSBmcm9tICcuL2RyYWdnYWJsZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdCBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKGRyYWdnYWJsZXMsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcih1bmRlZmluZWQsIG9wdGlvbnMpXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICB0aW1lRW5kOiAyMDAsXG4gICAgICB0aW1lRXhjYW5nZTogNDAwLFxuICAgICAgcmFkaXVzOiAzMFxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0aGlzLmRyYWdnYWJsZXMgPSBkcmFnZ2FibGVzXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5fZW5hYmxlID0gdHJ1ZVxuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKHRoaXMuaW5pdERyYWdnYWJsZSwgdGhpcylcbiAgfVxuXG4gIGluaXREcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgZHJhZ2dhYmxlLmVuYWJsZSA9IHRoaXMuX2VuYWJsZVxuICAgIGRyYWdnYWJsZS5vbignZHJhZzptb3ZlJywgKCkgPT4gdGhpcy5vbk1vdmUoZHJhZ2dhYmxlKSlcbiAgICBkcmFnZ2FibGUuZHJhZ0VuZEFjdGlvbiA9ICgpID0+IGRyYWdnYWJsZS5waW5Qb3NpdGlvbihkcmFnZ2FibGUucGlubmVkUG9zaXRpb24sIHRoaXMub3B0aW9ucy50aW1lRW5kKVxuICB9XG5cbiAgb25Nb3ZlKGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IHNvcnRlZERyYWdnYWJsZXMgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuICAgIGNvbnN0IHBpbm5lZFBvc2l0aW9ucyA9IHNvcnRlZERyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbilcblxuICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IHNvcnRlZERyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpXG4gICAgY29uc3QgdGFyZ2V0SW5kZXggPSBpbmRleE9mTmVhcmVzdFBvaW50KHBpbm5lZFBvc2l0aW9ucywgZHJhZ2dhYmxlLnBvc2l0aW9uLCB0aGlzLm9wdGlvbnMucmFkaXVzLCB0aGlzLmRpc3RhbmNlRnVuYylcblxuICAgIGlmICh0YXJnZXRJbmRleCAhPT0gLTEgJiYgY3VycmVudEluZGV4ICE9PSB0YXJnZXRJbmRleCkge1xuICAgICAgaWYgKHRhcmdldEluZGV4IDwgY3VycmVudEluZGV4KSB7XG4gICAgICAgIGZvciAobGV0IGk9dGFyZ2V0SW5kZXg7IGk8Y3VycmVudEluZGV4OyBpKyspIHtcbiAgICAgICAgICBzb3J0ZWREcmFnZ2FibGVzW2ldLnBpblBvc2l0aW9uKHBpbm5lZFBvc2l0aW9uc1tpKzFdLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAobGV0IGk9Y3VycmVudEluZGV4OyBpPHRhcmdldEluZGV4OyBpKyspIHtcbiAgICAgICAgICBzb3J0ZWREcmFnZ2FibGVzW2krMV0ucGluUG9zaXRpb24ocGlubmVkUG9zaXRpb25zW2ldLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGRyYWdnYWJsZS5uYXRpdmVEcmFnQW5kRHJvcCkge1xuICAgICAgICBkcmFnZ2FibGUucGluUG9zaXRpb24ocGlubmVkUG9zaXRpb25zW3RhcmdldEluZGV4XSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbiA9IHBpbm5lZFBvc2l0aW9uc1t0YXJnZXRJbmRleF1cbiAgICAgIH1cblxuICAgICAgdGhpcy5lbWl0KCdsaXN0OmNoYW5nZScpXG4gICAgfVxuICB9XG5cbiAgZ2V0Q3VycmVudFBpbm5lZFBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5kcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24uY2xvbmUoKSlcbiAgfVxuXG4gIGdldFNvcnRlZERyYWdnYWJsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJhZ2dhYmxlcy5zb3J0KHRoaXMuc29ydGluZy5iaW5kKHRoaXMpKVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnJlc2V0UG9zaXRpb25Ub0luaXRpYWwoKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnJlZnJlc2goKSlcbiAgfVxuXG4gIGFkZChkcmFnZ2FibGVzKSB7XG4gICAgaWYgKCEoZHJhZ2dhYmxlcyBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgZHJhZ2dhYmxlcyA9IFtkcmFnZ2FibGVzXVxuICAgIH1cbiAgICBkcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gdGhpcy5pbml0RHJhZ2dhYmxlKGRyYWdnYWJsZSkpXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gdGhpcy5kcmFnZ2FibGVzLmNvbmNhdChkcmFnZ2FibGVzKVxuICB9XG5cbiAgcmVtb3ZlKGRyYWdnYWJsZXMpIHtcbiAgICBjb25zdCBpbml0aWFsUG9zaXRpb25zID0gdGhpcy5kcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uKVxuICAgIGNvbnN0IGxpc3QgPSBbXVxuICAgIGNvbnN0IHNvcnRlZERyYWdnYWJsZXMgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuXG4gICAgaWYgKCEoZHJhZ2dhYmxlcyBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgZHJhZ2dhYmxlcyA9IFtkcmFnZ2FibGVzXVxuICAgIH1cblxuICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUucmVzZXRPbignZHJhZzplbmQnKVxuICAgICAgZHJhZ2dhYmxlLnJlc2V0T24oJ2RyYWc6bW92ZScpXG4gICAgICByZW1vdmVJdGVtKHRoaXMuZHJhZ2dhYmxlcywgZHJhZ2dhYmxlKVxuICAgIH0pXG5cbiAgICBsZXQgaiA9IDBcbiAgICBzb3J0ZWREcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgaWYgKHRoaXMuZHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkgIT09IC0xKSB7XG4gICAgICAgIGlmIChkcmFnZ2FibGUucGlubmVkUG9zaXRpb24gIT09IGluaXRpYWxQb3NpdGlvbnNbal0pIHtcbiAgICAgICAgICBkcmFnZ2FibGUucGluUG9zaXRpb24oaW5pdGlhbFBvc2l0aW9uc1tqXSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICB9XG4gICAgICAgIGRyYWdnYWJsZS5pbml0aWFsUG9zaXRpb24gPSBpbml0aWFsUG9zaXRpb25zW2pdXG4gICAgICAgIGorK1xuICAgICAgICBsaXN0LnB1c2goZHJhZ2dhYmxlKVxuICAgICAgfVxuICAgIH0pXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gbGlzdFxuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5yZW1vdmUodGhpcy5kcmFnZ2FibGVzLnNsaWNlKCkpXG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5kZXN0cm95KCkpXG4gIH1cblxuICBzb3J0aW5nKGRyYWdnYWJsZUEsIGRyYWdnYWJsZUIpIHtcbiAgICBpZih0aGlzLm9wdGlvbnMuc29ydGluZykge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5zb3J0aW5nKGRyYWdnYWJsZUEsIGRyYWdnYWJsZUIpXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmKGRyYWdnYWJsZUEucGlubmVkUG9zaXRpb24ueSA8IGRyYWdnYWJsZUIucGlubmVkUG9zaXRpb24ueSkgcmV0dXJuIC0xXG4gICAgICBpZihkcmFnZ2FibGVBLnBpbm5lZFBvc2l0aW9uLnkgPiBkcmFnZ2FibGVCLnBpbm5lZFBvc2l0aW9uLnkpIHJldHVybiAxXG4gICAgICBpZihkcmFnZ2FibGVBLnBpbm5lZFBvc2l0aW9uLnggPCBkcmFnZ2FibGVCLnBpbm5lZFBvc2l0aW9uLngpIHJldHVybiAtMVxuICAgICAgaWYoZHJhZ2dhYmxlQS5waW5uZWRQb3NpdGlvbi54ID4gZHJhZ2dhYmxlQi5waW5uZWRQb3NpdGlvbi54KSByZXR1cm4gMVxuICAgICAgcmV0dXJuIDBcbiAgICB9XG4gIH1cblxuICBnZXQgZGlzdGFuY2VGdW5jKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZ2V0RGlzdGFuY2UgfHwgZ2V0RGlzdGFuY2VcbiAgfVxuXG4gIGdldCBwb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q3VycmVudFBpbm5lZFBvc2l0aW9ucygpXG4gIH1cblxuICBzZXQgcG9zaXRpb25zKHBvc2l0aW9ucykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSAnd3JvbmcgYXJyYXkgbGVuZ3RoJ1xuICAgIGlmIChwb3NpdGlvbnMubGVuZ3RoID09PSB0aGlzLmRyYWdnYWJsZXMubGVuZ3RoKSB7XG4gICAgICBwb3NpdGlvbnMuZm9yRWFjaCgocG9pbnQsIGkpID0+IHtcbiAgICAgICAgdGhpcy5kcmFnZ2FibGVzW2ldLnBpblBvc2l0aW9uKHBvaW50KVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbWVzc2FnZVxuICAgIH1cbiAgfVxuXG4gIGdldCBlbmFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZVxuICB9XG5cbiAgc2V0IGVuYWJsZShlbmFibGUpIHtcbiAgICB0aGlzLl9lbmFibGUgPSBlbmFibGVcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUuZW5hYmxlID0gZW5hYmxlXG4gICAgfSlcbiAgfVxuXG4gIHN0YXRpYyBmYWN0b3J5KHBhcmVudEVsZW1lbnQsIGVsZW1lbnRzLCBvcHRpb25zPXt9KSB7XG4gICAgY29uc3QgZHJhZ2dhYmxlcyA9IEFycmF5LmZyb20oZWxlbWVudHMpLm1hcCgoZWxlbWVudCkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBEcmFnZ2FibGUoZWxlbWVudCwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIHBhcmVudDogcGFyZW50RWxlbWVudFxuICAgICAgfSwgb3B0aW9ucy5kcmFnZ2FibGUgfHwge30pKVxuICAgIH0pXG4gICAgcmV0dXJuIG5ldyBMaXN0KGRyYWdnYWJsZXMsIG9wdGlvbnMubGlzdCB8fCB7fSlcbiAgfVxufVxuIiwiZnVuY3Rpb24gc2V0U3R5bGUoZWxlbWVudCwgc3R5bGUpIHtcbiAgc3R5bGUgPSBzdHlsZSB8fCB7fVxuICBsZXQgY3NzVGV4dCA9ICcnXG4gIGZvciAoY29uc3Qga2V5IGluIHN0eWxlKSB7XG4gICAgaWYgKHN0eWxlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGNzc1RleHQgKz0ga2V5ICsgJzogJyArIHN0eWxlW2tleV0gKyAnOyAnXG4gICAgfVxuICB9XG5cbiAgZWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gY3NzVGV4dFxufVxuXG5mdW5jdGlvbiBhcHBlbmRGaXJzdENoaWxkKGVsZW1lbnQsIG5vZGUpIHtcbiAgaWYgKGVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgIGVsZW1lbnQuaW5zZXJ0QmVmb3JlKG5vZGUsIGVsZW1lbnQuZmlyc3RDaGlsZClcbiAgfSBlbHNlIHtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKG5vZGUpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQ2FudmFzKGFyZWEsIHJlY3RhZ2xlKSB7XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXG4gIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShhcmVhKS5wb3NpdGlvbiA9PT0gJ3N0YXRpYycpIHtcbiAgICBhcmVhLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJ1xuICB9XG5cbiAgY2FudmFzLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCByZWN0YWdsZS5zaXplLnggKyAncHgnKVxuICBjYW52YXMuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCByZWN0YWdsZS5zaXplLnkgKyAncHgnKVxuICBzZXRTdHlsZShjYW52YXMsIHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBsZWZ0OiByZWN0YWdsZS5wb3NpdGlvbi55ICsgJ3B4JyxcbiAgICB0b3A6IHJlY3RhZ2xlLnBvc2l0aW9uLnkgKyAncHgnLFxuICAgIHdpZHRoOiByZWN0YWdsZS5zaXplLnggKyAncHgnLFxuICAgIGhlaWdodDogcmVjdGFnbGUuc2l6ZS55ICsgJ3B4J1xuICB9KVxuICBhcHBlbmRGaXJzdENoaWxkKGFyZWEsIGNhbnZhcylcbiAgcmV0dXJuIGNhbnZhc1xufVxuIiwiaW1wb3J0IGNyZWF0ZUNhbnZhcyBmcm9tICcuL3V0aWxzL2NyZWF0ZS1jYW52YXMnXG5pbXBvcnQgUG9pbnQgZnJvbSAnLi9nZW9tZXRyeS9wb2ludCdcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSAnLi9nZW9tZXRyeS9yZWN0YW5nbGUnXG5cbmltcG9ydCB7IGdldFBvaW50RnJvbVJhZGlhbFN5c3RlbSB9IGZyb20gJy4vZ2VvbWV0cnkvYW5nbGVzJ1xuaW1wb3J0IHsgQm91bmRUb0xpbmUgfSBmcm9tICcuL2JvdW5kaW5nJ1xuaW1wb3J0IERyYWdnYWJsZSBmcm9tICcuL2RyYWdnYWJsZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3BpZGVyIHtcbiAgY29uc3RydWN0b3IoYXJlYSwgZWxlbWVudHMsIG9wdGlvbnM9e30pIHtcbiAgICBjb25zdCBhcmVhUmVjdGFuZ2xlID0gUmVjdGFuZ2xlLmZyb21FbGVtZW50KGFyZWEsIGFyZWEpXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBhbmdsZTogMCxcbiAgICAgIGRBbmdsZTogMiAqIE1hdGguUEkgLyBlbGVtZW50cy5sZW5ndGgsXG4gICAgICBjZW50ZXI6IGFyZWFSZWN0YW5nbGUuZ2V0Q2VudGVyKCksXG4gICAgICBzdGFydFJhZGl1czogNTAsXG4gICAgICBlbmRSYWRpdXM6IGFyZWFSZWN0YW5nbGUuZ2V0TWluU2lkZSgpIC8gMixcbiAgICAgIGxpbmVXaWR0aDogMixcbiAgICAgIHN0cm9rZVN0eWxlOiAnI2ZmNTU3NycsXG4gICAgICBmaWxsU3R5bGU6ICdyZ2JhKDE1MCwyNTUsNTAsMC44KSdcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGhpcy5hcmVhID0gYXJlYVxuICAgIHRoaXMuYXJlYVJlY3RhbmdsZSA9IGFyZWFSZWN0YW5nbGVcbiAgICB0aGlzLmluaXQoZWxlbWVudHMpXG4gIH1cblxuICBpbml0KGVsZW1lbnRzKSB7XG4gICAgdGhpcy5jYW52YXMgPSBjcmVhdGVDYW52YXModGhpcy5hcmVhLCB0aGlzLmFyZWFSZWN0YW5nbGUpXG4gICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gZWxlbWVudHMubWFwKChlbGVtZW50LCBpKSA9PiB7XG4gICAgICBjb25zdCBhbmdsZSA9IHRoaXMub3B0aW9ucy5hbmdsZSArIGkgKiB0aGlzLm9wdGlvbnMuZEFuZ2xlXG4gICAgICBjb25zdCBoYWxmU2l6ZSA9IFBvaW50LmVsZW1lbnRTaXplKGVsZW1lbnQpLm11bHQoMC41KVxuICAgICAgY29uc3Qgc3RhcnQgPSBnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oYW5nbGUsIHRoaXMub3B0aW9ucy5zdGFydFJhZGl1cywgdGhpcy5vcHRpb25zLmNlbnRlcikuc3ViKGhhbGZTaXplKVxuICAgICAgY29uc3QgZW5kID0gZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKGFuZ2xlLCB0aGlzLm9wdGlvbnMuZW5kUmFkaXVzLCB0aGlzLm9wdGlvbnMuY2VudGVyKS5zdWIoaGFsZlNpemUpXG5cbiAgICAgIHJldHVybiBuZXcgRHJhZ2dhYmxlKGVsZW1lbnQsIHtcbiAgICAgICAgcGFyZW50OiB0aGlzLmFyZWEsXG4gICAgICAgIGJvdW5kaW5nOiBuZXcgQm91bmRUb0xpbmUoc3RhcnQsIGVuZCksXG4gICAgICAgIHBvc2l0aW9uOiBzdGFydCxcbiAgICAgICAgb246IHtcbiAgICAgICAgICAnZHJhZzptb3ZlJzogKCkgPT4gdGhpcy5kcmF3KClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgdGhpcy5pc0luaXQgPSB0cnVlXG4gICAgdGhpcy5kcmF3KClcbiAgfVxuXG4gIGRyYXcoKSB7XG4gICAgaWYgKCF0aGlzLmlzSW5pdCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy5hcmVhUmVjdGFuZ2xlLnNpemUueCwgdGhpcy5hcmVhUmVjdGFuZ2xlLnNpemUueSlcbiAgICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKClcblxuICAgIGxldCBwb2ludCA9IHRoaXMuZHJhZ2dhYmxlc1swXS5nZXRDZW50ZXIoKVxuICAgIHRoaXMuY29udGV4dC5tb3ZlVG8ocG9pbnQueCwgcG9pbnQueSlcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kcmFnZ2FibGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBwb2ludCA9IHRoaXMuZHJhZ2dhYmxlc1tpXS5nZXRDZW50ZXIoKVxuICAgICAgdGhpcy5jb250ZXh0LmxpbmVUbyhwb2ludC54LCBwb2ludC55KVxuICAgIH1cbiAgICB0aGlzLmNvbnRleHQuY2xvc2VQYXRoKClcbiAgICB0aGlzLmNvbnRleHQubGluZVdpZHRoID0gdGhpcy5vcHRpb25zLmxpbmVXaWR0aFxuICAgIHRoaXMuY29udGV4dC5zdHJva2VTdHlsZSA9IHRoaXMub3B0aW9ucy5zdHJva2VTdHlsZVxuICAgIHRoaXMuY29udGV4dC5zdHJva2UoKVxuICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSB0aGlzLm9wdGlvbnMuZmlsbFN0eWxlXG4gICAgdGhpcy5jb250ZXh0LmZpbGwoKVxuICB9XG59XG4iLCJpbXBvcnQgRHJhZ2dhYmxlIGZyb20gJy4vZHJhZ2dhYmxlJ1xuaW1wb3J0IHsgQm91bmRUb0FyYyB9IGZyb20gJy4vYm91bmRpbmcnXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnRFbWl0dGVyJ1xuXG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gJy4vZ2VvbWV0cnkvcmVjdGFuZ2xlJ1xuaW1wb3J0IHtcbiAgZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtLFxuICBnZXRBbmdsZSxcbiAgbm9ybWFsaXplQW5nbGVcbn0gZnJvbSAnLi9nZW9tZXRyeS9hbmdsZXMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFyY1NsaWRlciBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKGFyZWEsIGVsZW1lbnQsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcih1bmRlZmluZWQsIG9wdGlvbnMpXG4gICAgY29uc3QgYXJlYVJlY3RhbmdsZSA9IFJlY3RhbmdsZS5mcm9tRWxlbWVudChhcmVhLCBhcmVhKVxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY2VudGVyOiBhcmVhUmVjdGFuZ2xlLmdldENlbnRlcigpLFxuICAgICAgcmFkaXVzOiBhcmVhUmVjdGFuZ2xlLmdldE1pblNpZGUoKSAvIDIsXG4gICAgICBzdGFydEFuZ2xlOiBNYXRoLlBJLFxuICAgICAgZW5kQW5nbGU6IDAsXG4gICAgICBhbmdsZXM6IFtNYXRoLlBJLCAtTWF0aC5QSSAvIDQsIDAsIE1hdGguUEkgLyA0LCBNYXRoLlBJIC8gMl0sXG4gICAgICB0aW1lOiA1MDBcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGhpcy5zaGlmdGVkQ2VudGVyID0gdGhpcy5vcHRpb25zLmNlbnRlclxuICAgIHRoaXMuYXJlYSA9IGFyZWFcbiAgICB0aGlzLmluaXQoZWxlbWVudClcbiAgfVxuXG4gIGluaXQoZWxlbWVudCkge1xuICAgIGNvbnN0IGFuZ2xlID0gdGhpcy5vcHRpb25zLnN0YXJ0QW5nbGVcbiAgICBjb25zdCBwb3NpdGlvbiA9IGdldFBvaW50RnJvbVJhZGlhbFN5c3RlbShcbiAgICAgIGFuZ2xlLFxuICAgICAgdGhpcy5vcHRpb25zLnJhZGl1cyxcbiAgICAgIHRoaXMuc2hpZnRlZENlbnRlclxuICAgIClcblxuICAgIHRoaXMuYW5nbGUgPSBhbmdsZVxuICAgIHRoaXMuZHJhZ2dhYmxlID0gbmV3IERyYWdnYWJsZShlbGVtZW50LCB7XG4gICAgICBwYXJlbnQ6IHRoaXMuYXJlYSxcbiAgICAgIGJvdW5kaW5nOiBuZXcgQm91bmRUb0FyYyhcbiAgICAgICAgdGhpcy5zaGlmdGVkQ2VudGVyLFxuICAgICAgICB0aGlzLm9wdGlvbnMucmFkaXVzLFxuICAgICAgICB0aGlzLm9wdGlvbnMuc3RhcnRBbmdsZSxcbiAgICAgICAgdGhpcy5vcHRpb25zLmVuZEFuZ2xlXG4gICAgICApLFxuICAgICAgcG9zaXRpb246IHBvc2l0aW9uLFxuICAgICAgb246IHtcbiAgICAgICAgJ2RyYWc6bW92ZSc6ICgpID0+IHRoaXMuY2hhbmdlKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgdXBkYXRlQW5nbGUoKSB7XG4gICAgdGhpcy5hbmdsZSA9IGdldEFuZ2xlKHRoaXMuc2hpZnRlZENlbnRlciwgdGhpcy5kcmFnZ2FibGUucG9zaXRpb24pXG4gIH1cblxuICBjaGFuZ2UoKSB7XG4gICAgdGhpcy51cGRhdGVBbmdsZSgpXG4gICAgLy8gICAgICB2YXIgYW5nbGUgPSBHZW9tZXRyeS5nZXROZWFyZXN0QW5nbGUodGhpcy5vcHRpb25zLmFuZ2xlcywgdGhpcy5hbmdsZSk7XG4gICAgLy8gICAgICB0aGlzLnNldEFuZ2xlKGFuZ2xlLHRoaXMub3B0aW9ucy50aW1lKTtcbiAgICB0aGlzLmVtaXQoJ2FyY3NsaWRlcjpjaGFuZ2UnLCB7IGFuZ2xlOiB0aGlzLmFuZ2xlIH0pXG4gIH1cblxuICBzZXRBbmdsZShhbmdsZSwgdGltZSkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKFxuICAgICAgdGhpcy5hbmdsZSxcbiAgICAgIHRoaXMub3B0aW9ucy5yYWRpdXMsXG4gICAgICB0aGlzLnNoaWZ0ZWRDZW50ZXJcbiAgICApXG4gICAgdGhpcy5hbmdsZSA9IG5vcm1hbGl6ZUFuZ2xlKGFuZ2xlLCBwb3NpdGlvbilcbiAgICB0aGlzLmRyYWdnYWJsZS5waW5Qb3NpdGlvbihwb3NpdGlvbiwgdGltZXx8MClcbiAgICB0aGlzLmVtaXQoJ2FyY3NsaWRlcjpjaGFuZ2UnLCB0aGlzLmFuZ2xlKVxuICB9XG59XG4iLCJpbXBvcnQgY3JlYXRlQ2FudmFzIGZyb20gJy4vdXRpbHMvY3JlYXRlLWNhbnZhcydcbmltcG9ydCByYW5nZSBmcm9tICcuL3V0aWxzL3JhbmdlJ1xuaW1wb3J0IFBvaW50IGZyb20gJy4vZ2VvbWV0cnkvcG9pbnQnXG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gJy4vZ2VvbWV0cnkvcmVjdGFuZ2xlJ1xuXG5pbXBvcnQgeyBnZXREaXN0YW5jZSB9IGZyb20gJy4vZ2VvbWV0cnkvZGlzdGFuY2VzJ1xuXG5pbXBvcnQge1xuICB0b1JhZGlhbixcbiAgZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtLFxuICBnZXRBbmdsZSxcbiAgbm9ybWFsaXplQW5nbGVcbn0gZnJvbSAnLi9nZW9tZXRyeS9hbmdsZXMnXG5cbmltcG9ydCBEcmFnZ2FibGUgZnJvbSAnLi9kcmFnZ2FibGUnXG5pbXBvcnQgeyBCb3VuZFRvQXJjIH0gZnJvbSAnLi9ib3VuZGluZydcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudEVtaXR0ZXInXG5cbmNvbnN0IHJuZCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKjI1NSlcbn1cblxuY29uc3QgdG9IZXhTdHJpbmcgPSBmdW5jdGlvbihkaWdpdCkge1xuICBsZXQgc3RyID0gZGlnaXQudG9TdHJpbmcoMTYpXG4gIHdoaWxlIChzdHIubGVuZ3RoIDwgMikge1xuICAgIHN0ciA9ICcwJyArIHN0clxuICB9XG4gIHJldHVybiBzdHJcbn1cblxuZnVuY3Rpb24gcmFuZG9tQ29sb3IoKSB7XG4gIHJldHVybiBgIyR7dG9IZXhTdHJpbmcocm5kKCkpfSR7dG9IZXhTdHJpbmcocm5kKCkpfSR7dG9IZXhTdHJpbmcocm5kKCkpfWBcbn1cblxuZnVuY3Rpb24gZ2V0QXJyYXlXaXRoQm91bmRJbmRleGVzKGluZGV4LCBsZW5ndGgpIHtcbiAgY29uc3QgcmV0SW5kZXhlcyA9IFtdXG4gIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICByZXRJbmRleGVzLnB1c2goaW5kZXgpXG4gICAgcmV0SW5kZXhlcy5wdXNoKChpbmRleCArIDEpICUgbGVuZ3RoKVxuICB9XG5cbiAgcmV0dXJuIHJldEluZGV4ZXNcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhcnQgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAoYXJlYSwgZWxlbWVudHMsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcih1bmRlZmluZWQsIG9wdGlvbnMpXG4gICAgY29uc3QgYXJlYVJlY3RhbmdsZSA9IFJlY3RhbmdsZS5mcm9tRWxlbWVudChhcmVhLCBhcmVhKVxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY2VudGVyOiBhcmVhUmVjdGFuZ2xlLmdldENlbnRlcigpLFxuICAgICAgcmFkaXVzOiBhcmVhUmVjdGFuZ2xlLmdldE1pblNpZGUoKSAvIDIsXG4gICAgICB0b3VjaFJhZGl1czogYXJlYVJlY3RhbmdsZS5nZXRNaW5TaWRlKCkgLyAyLFxuICAgICAgYm91bmRBbmdsZTogTWF0aC5QSSAvIDksXG4gICAgICBmaWxsU3R5bGVzOiByYW5nZSgwLCBlbGVtZW50cy5sZW5ndGgpLm1hcCgoKSA9PiByYW5kb21Db2xvcigpKSxcbiAgICAgIGluaXRBbmdsZXM6IHJhbmdlKC05MCwgMjcwLCAzNjAgLyBlbGVtZW50cy5sZW5ndGgpLm1hcCgoYW5nbGUpID0+IHRvUmFkaWFuKGFuZ2xlKSksXG4gICAgICBsaW1pdEltZzogbnVsbCxcbiAgICAgIGxpbWl0SW1nT2Zmc2V0OiBuZXcgUG9pbnQoMCwgMClcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGhpcy5hcmVhID0gYXJlYVxuICAgIHRoaXMuYXJlYVJlY3RhbmdsZSA9IGFyZWFSZWN0YW5nbGVcbiAgICB0aGlzLmluaXQoZWxlbWVudHMpXG4gIH1cblxuICBpbml0KGVsZW1lbnRzKSB7XG4gICAgdGhpcy5jYW52YXMgPSBjcmVhdGVDYW52YXModGhpcy5hcmVhLCB0aGlzLmFyZWFSZWN0YW5nbGUpXG4gICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGVsZW1lbnRzLm1hcCgoZWxlbWVudCwgaSkgPT4ge1xuICAgICAgY29uc3QgYW5nbGUgPSB0aGlzLm9wdGlvbnMuaW5pdEFuZ2xlc1tpXVxuICAgICAgY29uc3QgaGFsZlNpemUgPSBQb2ludC5lbGVtZW50U2l6ZShlbGVtZW50KS5tdWx0KDAuNSlcbiAgICAgIGNvbnN0IHBvc2l0aW9uID0gZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKFxuICAgICAgICBhbmdsZSxcbiAgICAgICAgdGhpcy5vcHRpb25zLnRvdWNoUmFkaXVzLFxuICAgICAgICB0aGlzLm9wdGlvbnMuY2VudGVyLnN1YihoYWxmU2l6ZSlcbiAgICAgIClcblxuICAgICAgcmV0dXJuIG5ldyBEcmFnZ2FibGUoZWxlbWVudCwge1xuICAgICAgICBwYXJlbnQ6IHRoaXMuYXJlYSxcbiAgICAgICAgYm91bmRpbmc6IG5ldyBCb3VuZFRvQXJjKFxuICAgICAgICAgIHRoaXMub3B0aW9ucy5jZW50ZXIuc3ViKGhhbGZTaXplKSxcbiAgICAgICAgICB0aGlzLm9wdGlvbnMudG91Y2hSYWRpdXMsXG4gICAgICAgICAgdGhpcy5nZXRCb3VuZEFuZ2xlKGksIGZhbHNlKSxcbiAgICAgICAgICB0aGlzLmdldEJvdW5kQW5nbGUoaSwgdHJ1ZSlcbiAgICAgICAgKSxcbiAgICAgICAgcG9zaXRpb246IHBvc2l0aW9uLFxuICAgICAgICBvbjoge1xuICAgICAgICAgICdkcmFnOm1vdmUnOiAoKSA9PiB0aGlzLmRyYXcoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG5cbiAgICB0aGlzLmlzSW5pdCA9IHRydWVcbiAgICB0aGlzLmRyYXcoKVxuICB9XG5cbiAgdXBkYXRlQW5nbGVzKCkge1xuICAgIHRoaXMuYW5nbGVzID0gdGhpcy5kcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBjb25zdCBoYWxmU2l6ZSA9IGRyYWdnYWJsZS5nZXRTaXplKCkubXVsdCgwLjUpXG4gICAgICByZXR1cm4gZ2V0QW5nbGUodGhpcy5vcHRpb25zLmNlbnRlci5zdWIoaGFsZlNpemUpLCBkcmFnZ2FibGUucG9zaXRpb24pXG4gICAgfSlcbiAgfVxuXG4gIGdldEJvdW5kQW5nbGUoaW5kZXgsIGlzQ2xvc3NpbmcpIHtcbiAgICBjb25zdCBzaWduID0gaXNDbG9zc2luZyA/IDEgOiAtMVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGxldCBpID0gKGluZGV4ICsgc2lnbikgJSB0aGlzLmFuZ2xlcy5sZW5ndGhcbiAgICAgIGlmIChpIDwgMCkge1xuICAgICAgICBpICs9IHRoaXMuYW5nbGVzLmxlbmd0aFxuICAgICAgfVxuICAgICAgcmV0dXJuIG5vcm1hbGl6ZUFuZ2xlKHRoaXMuYW5nbGVzW2ldIC0gc2lnbiAqIHRoaXMub3B0aW9ucy5ib3VuZEFuZ2xlKVxuICAgIH1cbiAgfVxuXG4gIGRyYXcoKSB7XG4gICAgaWYgKCF0aGlzLmlzSW5pdCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVBbmdsZXMoKVxuICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy5hcmVhUmVjdGFuZ2xlLnNpemUueCwgdGhpcy5hcmVhUmVjdGFuZ2xlLnNpemUueSlcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoX2RyYWdnYWJsZSwgaW5kZXgpID0+IHtcbiAgICAgIHRoaXMuZHJhd0FyYyh0aGlzLmNvbnRleHQsIHRoaXMub3B0aW9ucy5jZW50ZXIsIHRoaXMub3B0aW9ucy5yYWRpdXMsIGluZGV4KVxuICAgIH0pXG5cbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoX2RyYWdnYWJsZSwgaW5kZXgpID0+IHtcbiAgICAgIHRoaXMuZHJhd0xpbWl0SW1nKGluZGV4KVxuICAgIH0pXG5cbiAgICB0aGlzLmVtaXQoJ2NoYXJ0OmRyYXcnKVxuICB9XG5cbiAgY3JlYXRlQ2xvbmUoZWxlbWVudCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgaWYgKCF0aGlzLmlzSW5pdCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IHJlY3RhbmdsZSA9IFJlY3RhbmdsZS5mcm9tRWxlbWVudChlbGVtZW50LCBlbGVtZW50KVxuICAgIGNvbnN0IG9wdHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNlbnRlcjogcmVjdGFuZ2xlLmdldENlbnRlcigpLFxuICAgICAgcmFkaXVzOiByZWN0YW5nbGUuZ2V0TWluU2lkZSgpIC8gMixcbiAgICAgIGZpbGxTdHlsZXM6IHRoaXMub3B0aW9ucy5maWxsU3R5bGVzXG4gICAgfSwgb3B0aW9ucylcblxuICAgIGNvbnN0IGNhbnZhcyA9IGNyZWF0ZUNhbnZhcyhlbGVtZW50LCByZWN0YW5nbGUpXG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG4gICAgY29uc3QgY2xvbmVPYmogPSB7XG4gICAgICBkcmF3OiAoKSA9PiB7XG4gICAgICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHJlY3RhbmdsZS5zaXplLngsIHJlY3RhbmdsZS5zaXplLnkpXG4gICAgICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChfZHJhZ2dhYmxlLCBpbmRleCkgPT4ge1xuICAgICAgICAgIHRoaXMuZHJhd0FyYyhjb250ZXh0LCBvcHRzLmNlbnRlciwgb3B0cy5yYWRpdXMsIGluZGV4KVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgICBjbG9uZU9iai5kcmF3KClcbiAgICByZXR1cm4gY2xvbmVPYmpcbiAgfVxuXG4gIGdldEZpbGxTdHlsZShpbmRleCkge1xuICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmZpbGxTdHlsZXNbaW5kZXhdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLm9wdGlvbnMuZmlsbFN0eWxlc1tpbmRleF0gPSB0aGlzLm9wdGlvbnMuZmlsbFN0eWxlc1tpbmRleF0uY2FsbCh0aGlzKVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmZpbGxTdHlsZXNbaW5kZXhdXG4gIH1cblxuICBkcmF3QXJjKGNvbnRleHQsIGNlbnRlciwgcmFkaXVzLCBpbmRleCkge1xuICAgIGNvbnN0IHN0YXJ0QW5nbGUgPSB0aGlzLmFuZ2xlc1tpbmRleF1cbiAgICBjb25zdCBlbmRBbmdsZSA9IHRoaXMuYW5nbGVzWyhpbmRleCsxKSAlIHRoaXMuYW5nbGVzLmxlbmd0aF1cbiAgICBjb25zdCBjb2xvciA9IHRoaXMuZ2V0RmlsbFN0eWxlKGluZGV4KVxuXG4gICAgY29udGV4dC5iZWdpblBhdGgoKVxuICAgIGNvbnRleHQubW92ZVRvKGNlbnRlci54LCBjZW50ZXIueSlcbiAgICBjb250ZXh0LmFyYyhjZW50ZXIueCwgY2VudGVyLnksIHJhZGl1cywgc3RhcnRBbmdsZSwgZW5kQW5nbGUsIGZhbHNlKVxuICAgIGNvbnRleHQubGluZVRvKGNlbnRlci54LCBjZW50ZXIueSlcbiAgICBjb250ZXh0LmNsb3NlUGF0aCgpXG4gICAgY29udGV4dC5maWxsU3R5bGUgPSBjb2xvclxuICAgIGNvbnRleHQuZmlsbCgpXG4gIH1cblxuICBkcmF3TGltaXRJbWcoaW5kZXgpIHtcbiAgICBsZXQgcG9pbnQsIGltZ1xuICAgIGlmICh0aGlzLm9wdGlvbnMubGltaXRJbWcpIHtcbiAgICAgIGltZyA9IHRoaXMub3B0aW9ucy5saW1pdEltZyBpbnN0YW5jZW9mIEFycmF5ID8gdGhpcy5vcHRpb25zLmxpbWl0SW1nW2luZGV4XSA6IHRoaXMub3B0aW9ucy5saW1pdEltZ1xuICAgIH1cblxuICAgIGlmIChpbWcpIHtcbiAgICAgIGNvbnN0IGFuZ2xlID0gbm9ybWFsaXplQW5nbGUodGhpcy5hbmdsZXNbaW5kZXhdKVxuICAgICAgcG9pbnQgPSBuZXcgUG9pbnQoMCwgLWltZy5oZWlnaHQgLyAyKVxuICAgICAgcG9pbnQgPSBwb2ludC5hZGQodGhpcy5vcHRpb25zLmxpbWl0SW1nT2Zmc2V0KVxuICAgICAgdGhpcy5jb250ZXh0LnRyYW5zbGF0ZSh0aGlzLmFyZWFSZWN0YW5nbGUuc2l6ZS54IC8gMiwgdGhpcy5hcmVhUmVjdGFuZ2xlLnNpemUueSAvIDIpXG4gICAgICB0aGlzLmNvbnRleHQucm90YXRlKGFuZ2xlKVxuICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZShpbWcsIHBvaW50LngsIHBvaW50LnkpXG4gICAgICB0aGlzLmNvbnRleHQuc2V0VHJhbnNmb3JtKDEsIDAsIDAsIDEsIDAsIDApXG4gICAgfVxuICB9XG5cbiAgZ2V0QW5nbGVzRGlmZigpIHtcbiAgICBjb25zdCBhbmdsZXMgPSB0aGlzLmFuZ2xlcy5zbGljZSgxKVxuICAgIGxldCBiYXNlQW5nbGUgPSB0aGlzLmFuZ2xlc1swXVxuXG4gICAgYW5nbGVzLnB1c2goYmFzZUFuZ2xlKVxuICAgIHJldHVybiBhbmdsZXMubWFwKChhbmdsZSkgPT4ge1xuICAgICAgY29uc3QgZGlmZkFuZ2xlID0gbm9ybWFsaXplQW5nbGUoYW5nbGUgLSBiYXNlQW5nbGUpXG4gICAgICBiYXNlQW5nbGUgPSBhbmdsZVxuICAgICAgcmV0dXJuIGRpZmZBbmdsZVxuICAgIH0pXG4gIH1cblxuICBnZXRQZXJjZW50KCkge1xuICAgIHJldHVybiB0aGlzLmdldEFuZ2xlc0RpZmYoKS5tYXAoKGRpZmZBbmdsZSkgPT4gZGlmZkFuZ2xlIC8gKDIgKiBNYXRoLlBJKSlcbiAgfVxuXG4gIGdldEFyY0Jpc2VjdHJpeHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0QW5nbGVzRGlmZigpLm1hcCgoZGlmZkFuZ2xlLCBpKSA9PiB7XG4gICAgICByZXR1cm4gbm9ybWFsaXplQW5nbGUodGhpcy5hbmdsZXNbaV0gKyBkaWZmQW5nbGUgLyAyKVxuICAgIH0pXG4gIH1cblxuICBnZXRBcmNPblBvaW50KHBvaW50KSB7XG4gICAgY29uc3QgYW5nbGUgPSBnZXRBbmdsZSh0aGlzLm9wdGlvbnMuY2VudGVyLCBwb2ludClcbiAgICBjb25zdCByYWRpdXMgPSBnZXREaXN0YW5jZSh0aGlzLm9wdGlvbnMuY2VudGVyLCBwb2ludClcblxuICAgIGlmIChyYWRpdXMgPiB0aGlzLm9wdGlvbnMucmFkaXVzKSB7XG4gICAgICByZXR1cm4gLTFcbiAgICB9XG5cbiAgICBsZXQgb2Zmc2V0ID0gLTEsIGksIGpcbiAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5hbmdsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChvZmZzZXQgPT09IC0xIHx8IHRoaXMuYW5nbGVzW29mZnNldF0gPiB0aGlzLmFuZ2xlc1tpXSkge1xuICAgICAgICBvZmZzZXQgPSBpXG4gICAgICB9XG4gICAgfVxuICAgIGZvciAoaSA9IDAsIGogPSBvZmZzZXQ7IGkgPCB0aGlzLmFuZ2xlcy5sZW5ndGg7IGkrKywgaiA9IChpICsgb2Zmc2V0KSAlIHRoaXMuYW5nbGVzLmxlbmd0aCkge1xuICAgICAgaWYgKGFuZ2xlIDwgdGhpcy5hbmdsZXNbal0pIHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKC0taiA8IDApIHtcbiAgICAgIGogKz0gdGhpcy5hbmdsZXMubGVuZ3RoXG4gICAgfVxuICAgIHJldHVybiBqXG4gIH1cblxuICBzZXRBbmdsZXMoYW5nbGVzKSB7XG4gICAgdGhpcy5hbmdsZXMgPSBhbmdsZXNcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlLCBpKSA9PiB7XG4gICAgICBjb25zdCBhbmdsZSA9IHRoaXMuYW5nbGVzW2ldXG4gICAgICBjb25zdCBoYWxmU2l6ZSA9IGRyYWdnYWJsZS5nZXRTaXplKCkubXVsdCgwLjUpXG4gICAgICBjb25zdCBwb3NpdGlvbiA9IGdldFBvaW50RnJvbVJhZGlhbFN5c3RlbShcbiAgICAgICAgYW5nbGUsXG4gICAgICAgIHRoaXMub3B0aW9ucy50b3VjaFJhZGl1cyxcbiAgICAgICAgdGhpcy5vcHRpb25zLmNlbnRlci5zdWIoaGFsZlNpemUpXG4gICAgICApXG5cbiAgICAgIGRyYWdnYWJsZS5tb3ZlQW5kU2F2ZShwb3NpdGlvbilcbiAgICB9KVxuICAgIHRoaXMuZHJhdygpXG4gIH1cblxuICBzZXRBY3RpdmVBcmMoaW5kZXgpIHtcbiAgICBjb25zdCBlbmFibGVJbmRleGVzID0gZ2V0QXJyYXlXaXRoQm91bmRJbmRleGVzKGluZGV4LCB0aGlzLmRyYWdnYWJsZXMubGVuZ3RoKVxuICAgIHRoaXMuYWN0aXZlQXJjSW5kZXggPSBpbmRleFxuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUsIGkpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5lbmFibGUgPSBlbmFibGVJbmRleGVzLmluZGV4T2YoaSkgIT09IC0xXG4gICAgfSlcbiAgICB0aGlzLmRyYXcoKVxuICB9XG59XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9nZW9tZXRyeS9wb2ludCdcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSAnLi9nZW9tZXRyeS9yZWN0YW5nbGUnXG5pbXBvcnQgRHJhZ2dhYmxlIGZyb20gJy4vZHJhZ2dhYmxlJ1xuaW1wb3J0IExpc3QgZnJvbSAnLi9saXN0J1xuaW1wb3J0IFRhcmdldCBmcm9tICcuL3RhcmdldCdcbmltcG9ydCB7IHNjb3BlcywgZGVmYXVsdFNjb3BlLCBTY29wZSwgc2NvcGUgfSBmcm9tICcuL3Njb3BlJ1xuaW1wb3J0IHsgTm90Q3Jvc3NpbmdTdHJhdGVneSwgRmxvYXRMZWZ0U3RyYXRlZ3ksIEZsb2F0UmlnaHRTdHJhdGVneSB9IGZyb20gJy4vcG9zaXRpb25pbmcnXG5pbXBvcnQgU3BpZGVyIGZyb20gJy4vc3BpZGVyJ1xuaW1wb3J0IEFyY1NsaWRlciBmcm9tICcuL2FyY3NsaWRlcidcbmltcG9ydCBDaGFydCBmcm9tICcuL2NoYXJ0J1xuaW1wb3J0IHsgZ2V0RGlzdGFuY2UsIGdldFhEaWZmZXJlbmNlLCBnZXRZRGlmZmVyZW5jZSwgdHJhbnNmb3JtZWRTcGFjZURpc3RhbmNlRmFjdG9yeSB9IGZyb20gJy4vZ2VvbWV0cnkvZGlzdGFuY2VzJ1xuaW1wb3J0IHsgYWRkQ2xhc3MsIHJlbW92ZUNsYXNzIH0gZnJvbSAnLi91dGlscy9jbGFzc2VzJ1xuaW1wb3J0IHtcbiAgQm91bmQsXG4gIEJvdW5kVG9SZWN0YW5nbGUsXG4gIEJvdW5kVG9FbGVtZW50LFxuICBCb3VuZFRvTGluZVgsXG4gIEJvdW5kVG9MaW5lWSxcbiAgQm91bmRUb0xpbmUsXG4gIEJvdW5kVG9DaXJjbGUsXG4gIEJvdW5kVG9BcmNcbn0gZnJvbSAnLi9ib3VuZGluZydcblxuY29uc3QgYm91bmQgPSB7XG4gIEJvdW5kLFxuICBCb3VuZFRvUmVjdGFuZ2xlLFxuICBCb3VuZFRvRWxlbWVudCxcbiAgQm91bmRUb0xpbmVYLFxuICBCb3VuZFRvTGluZVksXG4gIEJvdW5kVG9MaW5lLFxuICBCb3VuZFRvQ2lyY2xlLFxuICBCb3VuZFRvQXJjXG59XG5cbmNvbnN0IGRpc3RhbmNlID0ge1xuICBnZXREaXN0YW5jZSxcbiAgZ2V0WERpZmZlcmVuY2UsXG4gIGdldFlEaWZmZXJlbmNlLFxuICB0cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5XG59XG5cbmV4cG9ydCB7XG4gIERyYWdnYWJsZSxcbiAgUG9pbnQsIFJlY3RhbmdsZSxcbiAgTGlzdCxcbiAgVGFyZ2V0LFxuICBzY29wZXMsIGRlZmF1bHRTY29wZSwgU2NvcGUsIHNjb3BlLFxuICBOb3RDcm9zc2luZ1N0cmF0ZWd5LCBGbG9hdExlZnRTdHJhdGVneSwgRmxvYXRSaWdodFN0cmF0ZWd5LFxuICBTcGlkZXIsXG4gIEFyY1NsaWRlcixcbiAgQ2hhcnQsXG4gIGJvdW5kLFxuICBkaXN0YW5jZSxcbiAgYWRkQ2xhc3MsIHJlbW92ZUNsYXNzXG59XG4iXSwibmFtZXMiOlsiZ2V0U3VtVmFsdWVPZlN0eWxlUnVsZXMiLCJlbGVtZW50IiwicnVsZXMiLCJyZWR1Y2UiLCJzdW0iLCJydWxlIiwicGFyc2VJbnQiLCJ3aW5kb3ciLCJnZXRDb21wdXRlZFN0eWxlIiwiUG9pbnQiLCJ4IiwieSIsInAiLCJrIiwicGFyZW50IiwicGFyZW50Tm9kZSIsImVsZW1lbnRSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicGFyZW50UmVjdCIsImxlZnQiLCJ0b3AiLCJpc0NvbnRlbnRCb3hTaXplIiwid2lkdGgiLCJoZWlnaHQiLCJSZWN0YW5nbGUiLCJwb3NpdGlvbiIsInNpemUiLCJhZGQiLCJtdWx0IiwicmVjdCIsIk1hdGgiLCJtaW4iLCJtYXgiLCJzdWIiLCJyZWN0YW5nbGUiLCJpbmNsdWRlUG9pbnQiLCJnZXRQMyIsImF4aXMiLCJzZWxBeGlzIiwiY3Jvc3NSZWN0YW5nbGUiLCJhbmQiLCJ0aGlzQ2VudGVyIiwiZ2V0Q2VudGVyIiwicmVjdENlbnRlciIsInNpZ24iLCJvZmZzZXQiLCJlbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInN0eWxlIiwiaXNDb25zaWRlclRyYW5zbGF0ZSIsImVsZW1lbnRPZmZzZXQiLCJlbGVtZW50U2l6ZSIsImhhc0NsYXNzIiwiYyIsInJlIiwiUmVnRXhwIiwidGVzdCIsImNsYXNzTmFtZSIsImFkZENsYXNzIiwicmVwbGFjZSIsInJlbW92ZUNsYXNzIiwiZ2V0RGVmYXVsdFBhcmVudCIsInRhZ05hbWUiLCJFdmVudEVtaXR0ZXIiLCJjb250ZXh0Iiwib3B0aW9ucyIsImV2ZW50cyIsIm9uIiwiT2JqZWN0IiwiZW50cmllcyIsImV2ZW50TmFtZSIsImZuIiwiaW50ZXJydXB0ZWQiLCJhcmdzIiwic2xpY2UiLCJjYWxsIiwiYXJndW1lbnRzIiwiZnVuYyIsImFwcGx5IiwicHVzaCIsInVuc2hpZnQiLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJnZXREaXN0YW5jZSIsInAxIiwicDIiLCJkeCIsImR5Iiwic3FydCIsImdldFhEaWZmZXJlbmNlIiwiYWJzIiwiZ2V0WURpZmZlcmVuY2UiLCJ0cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5IiwicG93IiwiaW5kZXhPZk5lYXJlc3RQb2ludCIsImFyciIsInZhbCIsInJhZGl1cyIsImdldERpc3RhbmNlRnVuYyIsImkiLCJ0ZW1wIiwibGVuZ3RoIiwiZGlyZWN0Q3Jvc3NpbmciLCJMMVAxIiwiTDFQMiIsIkwyUDEiLCJMMlAyIiwiazEiLCJrMiIsImIxIiwiYjIiLCJib3VuZFRvTGluZSIsIkEiLCJCIiwiUCIsIkFQIiwiQUIiLCJhYjIiLCJhcF9hYiIsInQiLCJnZXRQb2ludE9uTGluZUJ5TGVuZ2h0IiwiTFAxIiwiTFAyIiwibGVuZ2h0IiwicGVyY2VudCIsImFkZFBvaW50VG9Cb3VuZFBvaW50cyIsImJvdW5kcG9pbnRzIiwicG9pbnQiLCJpc1JpZ2h0IiwicmVzdWx0IiwiZmlsdGVyIiwiYlBvaW50IiwiZ2V0QW5nbGVEaWZmIiwiYWxwaGEiLCJiZXRhIiwibWluQW5nbGUiLCJtYXhBbmdsZSIsIlBJIiwiZ2V0QW5nbGUiLCJkaWZmIiwibm9ybWFsaXplQW5nbGUiLCJhdGFuMiIsInRvUmFkaWFuIiwiYW5nbGUiLCJib3VuZEFuZ2xlIiwiZG1pbiIsImRtYXgiLCJnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0iLCJjZW50ZXIiLCJjb3MiLCJzaW4iLCJCb3VuZCIsIl9zaXplIiwiQm91bmRUb1JlY3RhbmdsZSIsImNhbGNQb2ludCIsImNsb25lIiwicmVjdFAyIiwiQm91bmRUb0VsZW1lbnQiLCJmcm9tRWxlbWVudCIsIkJvdW5kVG9MaW5lWCIsInN0YXJ0WSIsImVuZFkiLCJCb3VuZFRvTGluZVkiLCJzdGFydFgiLCJlbmRYIiwiQm91bmRUb0xpbmUiLCJzdGFydFBvaW50IiwiZW5kUG9pbnQiLCJzb21lSyIsImNvc0JldGEiLCJzaW5CZXRhIiwicG9pbnQyIiwibmV3RW5kUG9pbnQiLCJwb2ludENyb3NzaW5nIiwiQm91bmRUb0NpcmNsZSIsIkJvdW5kVG9BcmMiLCJzdGFydEFuZ2xlIiwiZW5kQW5nbGUiLCJfc3RhcnRBbmdsZSIsIl9lbmRBbmdsZSIsImFycmF5IiwicmFuZ2UiLCJzdGFydCIsInN0b3AiLCJzdGVwIiwiQmFzaWNTdHJhdGVneSIsIk5vdENyb3NzaW5nU3RyYXRlZ3kiLCJyZWN0YW5nbGVMaXN0IiwiaW5kZXhlc09mTmV3cyIsInN0YXRpY1JlY3RhbmdsZUluZGV4ZXMiLCJpbmRleGVzIiwiX3JlY3QiLCJmb3JFYWNoIiwicmVtb3ZhYmxlIiwiaW5kZXhPZlN0YXRpYyIsInN0YXRpY1JlY3QiLCJtb3ZlVG9Cb3VuZCIsInNvbWUiLCJib3VuZFJlY3QiLCJnZXRTcXVhcmUiLCJvZGxEcmFnZ2FibGVzTGlzdCIsIm5ld0RyYWdnYWJsZXMiLCJpbmRleE9mTmV3cyIsImRyYWdnYWJsZXMiLCJjb25jYXQiLCJkcmFnZ2FibGUiLCJGbG9hdExlZnRTdHJhdGVneSIsImFzc2lnbiIsInBhZGRpbmdUb3BMZWZ0IiwicGFkZGluZ0JvdHRvbVJpZ2h0IiwieUdhcEJldHdlZW5EcmFnZ2FibGVzIiwiZ2V0UG9zaXRpb24iLCJfaW5kZXhlc09mTmV3cyIsImdldFAyIiwiYm91bmRhcnlQb2ludHMiLCJyZWN0SW5kZXgiLCJpc1ZhbGlkIiwibmV3TGlzdCIsImxpc3RPbGRQb3NpdGlvbiIsIm1hcCIsIm5ld0RyYWdnYWJsZSIsIkZsb2F0UmlnaHRTdHJhdGVneSIsInBhZGRpbmdUb3BSaWdodCIsInBhZGRpbmdCb3R0b21MZWZ0IiwicGFkZGluZ0JvdHRvbU5lZ0xlZnQiLCJnZXRQNCIsImFkZFRvRGVmYXVsdFNjb3BlIiwidGFyZ2V0IiwiZGVmYXVsdFNjb3BlIiwiYWRkVGFyZ2V0IiwiVGFyZ2V0IiwidW5kZWZpbmVkIiwidGltZUVuZCIsInRpbWVFeGNhbmdlIiwicG9zaXRpb25pbmdTdHJhdGVneSIsInN0cmF0ZWd5IiwiZ2V0UmVjdGFuZ2xlIiwiYmluZCIsInRhcmdldHMiLCJlbWl0dGVyIiwiZW1pdCIsImluaXQiLCJpbmRleGVzT2ZOZXciLCJwb3NpdGlvbmluZyIsIm9sZERyYWdnYWJsZXMiLCJzb3J0aW5nIiwicmVjdGFuZ2xlcyIsImlubmVyRHJhZ2dhYmxlcyIsInNldFBvc2l0aW9uIiwiY2F0Y2hEcmFnZ2FibGUiLCJ0YXJnZXRSZWN0YW5nbGUiLCJkcmFnZ2FibGVTcXVhcmUiLCJzY29wZXMiLCJzY29wZSIsInJlbW92ZUl0ZW0iLCJuZXdEcmFnZ2FibGVzSW5kZXgiLCJhZGRSZW1vdmVPbk1vdmUiLCJ0aW1lIiwibW92ZSIsImluaXRpYWxQb3NpdGlvbiIsInB1c2hJbm5lckRyYWdnYWJsZSIsInJlbW92ZUhhbmRsZXIiLCJyZW1vdmUiLCJ1bnN1YnNjcmliZSIsIlNjb3BlIiwiZHJhZ0VuZEFjdGlvbiIsIm9uRW5kIiwic2hvdFRhcmdldHMiLCJzb3J0IiwiYSIsImIiLCJwaW5Qb3NpdGlvbiIsInJlc2V0IiwicmVmcmVzaCIsInBvc2l0aW9ucyIsIm1lc3NhZ2UiLCJ0YXJnZXRJbmRleGVzIiwiY3VycmVudFNjb3BlIiwiYWRkRHJhZ2dhYmxlVG9TY29wZSIsImFkZERyYWdnYWJsZSIsIkRyYWdnYWJsZSIsImludGVycnVwdCIsImFkZFRhcmdldFRvU2NvcGUiLCJwcmVwZW5kT24iLCJjaGVja1N1cHBvcnRQYXNzaXZlRXZlbnRzIiwicGFzc2l2ZVN1cHBvcnRlZCIsImRlZmluZVByb3BlcnR5IiwiZ2V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJfZXJyIiwiaXNTdXBwb3J0UGFzc2l2ZUV2ZW50cyIsImlzVG91Y2giLCJtb3VzZUV2ZW50cyIsImVuZCIsInRvdWNoRXZlbnRzIiwidHJhbnNmb3JtUHJvcGVydHkiLCJnZXRTdHlsZVByb3BlcnR5IiwidHJhbnNpdGlvblByb3BlcnR5IiwiZ2V0VG91Y2hCeUlEIiwidG91Y2hJZCIsImNoYW5nZWRUb3VjaGVzIiwiaWRlbnRpZmllciIsInByZXZlbnREb3VibGVJbml0IiwiZXhpc3RpbmciLCJjb3B5U3R5bGVzIiwic291cmNlIiwiZGVzdGluYXRpb24iLCJjcyIsImtleSIsImNoaWxkcmVuIiwiX2VuYWJsZSIsInN0YXJ0UG9zaXRpb25pbmciLCJzdGFydExpc3RlbmluZyIsIl9zZXREZWZhdWx0VHJhbnNpdGlvbiIsInBpbm5lZFBvc2l0aW9uIiwiYm91bmRpbmciLCJfZHJhZ1N0YXJ0IiwiZXZlbnQiLCJkcmFnU3RhcnQiLCJfZHJhZ01vdmUiLCJkcmFnTW92ZSIsIl9kcmFnRW5kIiwiZHJhZ0VuZCIsIl9uYXRpdmVEcmFnU3RhcnQiLCJuYXRpdmVEcmFnU3RhcnQiLCJfbmF0aXZlRHJhZ092ZXIiLCJuYXRpdmVEcmFnT3ZlciIsIl9uYXRpdmVEcmFnRW5kIiwibmF0aXZlRHJhZ0VuZCIsIl9uYXRpdmVEcm9wIiwibmF0aXZlRHJvcCIsImhhbmRsZXIiLCJwYXNzaXZlIiwiX3RyYW5zZm9ybVBvc2l0aW9uIiwiZ2V0U2l6ZSIsInRyYW5zaXRpb24iLCJ0cmFuc2l0aW9uQ3NzIiwidHJhbnNmb3JtIiwidHJhbnNsYXRlQ3NzIiwidWEiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJtc2llIiwiaXNTaWxlbnQiLCJkZXRlcm1pbmVEaXJlY3Rpb24iLCJfc2V0VHJhbnNpdGlvbiIsIl9zZXRUcmFuc2xhdGUiLCJzaWxlbnQiLCJsZWZ0RGlyZWN0aW9uIiwicmlnaHREaXJlY3Rpb24iLCJ1cERpcmVjdGlvbiIsImRvd25EaXJlY3Rpb24iLCJjdXJyZW50RXZlbnQiLCJpc1RvdWNoRXZlbnQiLCJUb3VjaEV2ZW50IiwiX3N0YXJ0VG91Y2hQb2ludCIsInBhZ2VYIiwiY2xpZW50WCIsInBhZ2VZIiwiY2xpZW50WSIsIl9zdGFydFBvc2l0aW9uIiwiX3RvdWNoSWQiLCJzdG9wUHJvcGFnYXRpb24iLCJIVE1MSW5wdXRFbGVtZW50IiwiZm9jdXMiLCJuYXRpdmVEcmFnQW5kRHJvcCIsInByZXZlbnREZWZhdWx0IiwiaXNTYWZhcmkiLCJlbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3BPblRvdWNoIiwiZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wRm9yQWxsIiwiZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wIiwiaXNEcmFnZ2luZyIsInRvdWNoIiwidG91Y2hQb2ludCIsImJvdW5kIiwicmVtb3ZlQXR0cmlidXRlIiwiZGF0YVRyYW5zZmVyIiwic2V0RGF0YSIsImVmZmVjdEFsbG93ZWQiLCJkcm9wRWZmZWN0IiwiX2V2ZW50IiwiY2xvbmVkRWxlbWVudCIsImNsb25lTm9kZSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImVtdWxhdGlvbkRyYWdnYWJsZSIsInNjcm9sbFgiLCJzY3JvbGxZIiwiZGVzdHJveSIsInJlbW92ZUNoaWxkIiwicmVzZXRFbWl0dGVyIiwiX3BhcmVudCIsIl9ib3VuZGluZyIsIl9oYW5kbGVyIiwiZW5hYmxlIiwiTGlzdCIsImluaXREcmFnZ2FibGUiLCJvbk1vdmUiLCJzb3J0ZWREcmFnZ2FibGVzIiwiZ2V0U29ydGVkRHJhZ2dhYmxlcyIsInBpbm5lZFBvc2l0aW9ucyIsImN1cnJlbnRJbmRleCIsInRhcmdldEluZGV4IiwiZGlzdGFuY2VGdW5jIiwicmVzZXRQb3NpdGlvblRvSW5pdGlhbCIsIkFycmF5IiwiaW5pdGlhbFBvc2l0aW9ucyIsImxpc3QiLCJyZXNldE9uIiwiaiIsImRyYWdnYWJsZUEiLCJkcmFnZ2FibGVCIiwiZ2V0Q3VycmVudFBpbm5lZFBvc2l0aW9ucyIsInBhcmVudEVsZW1lbnQiLCJlbGVtZW50cyIsImZyb20iLCJzZXRTdHlsZSIsImNzc1RleHQiLCJoYXNPd25Qcm9wZXJ0eSIsImFwcGVuZEZpcnN0Q2hpbGQiLCJub2RlIiwiZmlyc3RDaGlsZCIsImluc2VydEJlZm9yZSIsImNyZWF0ZUNhbnZhcyIsImFyZWEiLCJyZWN0YWdsZSIsImNhbnZhcyIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJTcGlkZXIiLCJhcmVhUmVjdGFuZ2xlIiwiZEFuZ2xlIiwic3RhcnRSYWRpdXMiLCJlbmRSYWRpdXMiLCJnZXRNaW5TaWRlIiwibGluZVdpZHRoIiwic3Ryb2tlU3R5bGUiLCJmaWxsU3R5bGUiLCJnZXRDb250ZXh0IiwiaGFsZlNpemUiLCJkcmF3IiwiaXNJbml0IiwiY2xlYXJSZWN0IiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwiY2xvc2VQYXRoIiwic3Ryb2tlIiwiZmlsbCIsIkFyY1NsaWRlciIsImFuZ2xlcyIsInNoaWZ0ZWRDZW50ZXIiLCJjaGFuZ2UiLCJ1cGRhdGVBbmdsZSIsInJuZCIsInJvdW5kIiwicmFuZG9tIiwidG9IZXhTdHJpbmciLCJkaWdpdCIsInN0ciIsInRvU3RyaW5nIiwicmFuZG9tQ29sb3IiLCJnZXRBcnJheVdpdGhCb3VuZEluZGV4ZXMiLCJyZXRJbmRleGVzIiwiQ2hhcnQiLCJ0b3VjaFJhZGl1cyIsImZpbGxTdHlsZXMiLCJpbml0QW5nbGVzIiwibGltaXRJbWciLCJsaW1pdEltZ09mZnNldCIsImdldEJvdW5kQW5nbGUiLCJpc0Nsb3NzaW5nIiwidXBkYXRlQW5nbGVzIiwiX2RyYWdnYWJsZSIsImRyYXdBcmMiLCJkcmF3TGltaXRJbWciLCJvcHRzIiwiY2xvbmVPYmoiLCJjb2xvciIsImdldEZpbGxTdHlsZSIsImFyYyIsImltZyIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsImRyYXdJbWFnZSIsInNldFRyYW5zZm9ybSIsImJhc2VBbmdsZSIsImRpZmZBbmdsZSIsImdldEFuZ2xlc0RpZmYiLCJtb3ZlQW5kU2F2ZSIsImVuYWJsZUluZGV4ZXMiLCJhY3RpdmVBcmNJbmRleCIsImRpc3RhbmNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFBQSxTQUFTQSx1QkFBVCxDQUFpQ0MsT0FBakMsRUFBMENDLEtBQTFDLEVBQWlEO0VBQy9DLFNBQU9BLEtBQUssQ0FBQ0MsTUFBTixDQUFhLFVBQUNDLEdBQUQsRUFBTUMsSUFBTixFQUFlO0VBQ2pDLFdBQU9ELEdBQUcsR0FBR0UsUUFBUSxDQUFDQyxNQUFNLENBQUNDLGdCQUFQLENBQXdCUCxPQUF4QixFQUFpQ0ksSUFBakMsS0FBd0MsQ0FBekMsQ0FBckI7RUFDRCxHQUZNLEVBRUosQ0FGSSxDQUFQO0VB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
