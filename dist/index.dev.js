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

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
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
          bounding: {
            bound: function bound(point) {
              return point;
            }
          },
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

  var BubblingList =
  /*#__PURE__*/
  function (_List) {
    _inherits(BubblingList, _List);

    function BubblingList(draggables) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, BubblingList);

      return _possibleConstructorReturn(this, _getPrototypeOf(BubblingList).call(this, draggables, options));
    }

    _createClass(BubblingList, [{
      key: "initDraggable",
      value: function initDraggable(draggable) {
        var _this = this;

        draggable.on('drag:start', function () {
          return _this.autoDetectVerticalGap(draggable);
        });

        _get(_getPrototypeOf(BubblingList.prototype), "initDraggable", this).call(this, draggable);
      }
    }, {
      key: "autoDetectVerticalGap",
      value: function autoDetectVerticalGap() {
        if (this.draggables.length >= 2) {
          var sorted = this.getSortedDraggables();
          this.verticalGap = sorted[1].pinnedPosition.y - sorted[0].pinnedPosition.y - sorted[0].getSize().y;
        } else {
          this.verticalGap = 0;
        }

        if (this.draggables.length >= 1) {
          this.startPosition = this.draggables[0].pinnedPosition;
        }
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
          var _ref = [sortedDraggables[targetIndex], sortedDraggables[currentIndex]];
          sortedDraggables[currentIndex] = _ref[0];
          sortedDraggables[targetIndex] = _ref[1];
          this.bubling(sortedDraggables, draggable);
          this.emit('list:change');
        }
      }
    }, {
      key: "bubling",
      value: function bubling(sortedDraggables, currentDraggable) {
        var _this2 = this;

        var currentPosition = this.startPosition.clone();
        sortedDraggables.forEach(function (draggable, index) {
          if (!draggable.pinnedPosition.compare(currentPosition)) {
            if (draggable === currentDraggable && !currentDraggable.nativeDragAndDrop) {
              draggable.pinnedPosition = currentPosition.clone();
            } else {
              draggable.pinPosition(currentPosition, draggable === currentDraggable ? 0 : _this2.options.timeExcange);
            }
          }

          currentPosition.y = currentPosition.y + draggable.getSize().y + _this2.verticalGap;
        });
      }
    }, {
      key: "distanceFunc",
      get: function get() {
        return this.options.getDistance || getYDifference;
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
        return new BubblingList(draggables, options.list || {});
      }
    }]);

    return BubblingList;
  }(List);

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
    transformedSpaceDistanceFactory: transformedSpaceDistanceFactory,
    indexOfNearestPoint: indexOfNearestPoint
  };

  exports.ArcSlider = ArcSlider;
  exports.BubblingList = BubblingList;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZGV2LmpzIiwic291cmNlcyI6WyIuLi9zcmMvZ2VvbWV0cnkvcG9pbnQuanMiLCIuLi9zcmMvZ2VvbWV0cnkvcmVjdGFuZ2xlLmpzIiwiLi4vc3JjL3V0aWxzL2NsYXNzZXMuanMiLCIuLi9zcmMvdXRpbHMvZ2V0LWRlZmF1bHQtcGFyZW50LmpzIiwiLi4vc3JjL2V2ZW50RW1pdHRlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9kZXNhbmRyby1nZXQtc3R5bGUtcHJvcGVydHkvZ2V0LXN0eWxlLXByb3BlcnR5LmpzIiwiLi4vc3JjL2dlb21ldHJ5L2Rpc3RhbmNlcy5qcyIsIi4uL3NyYy9nZW9tZXRyeS9ib3VuZHMuanMiLCIuLi9zcmMvZ2VvbWV0cnkvYW5nbGVzLmpzIiwiLi4vc3JjL2JvdW5kaW5nLmpzIiwiLi4vc3JjL3V0aWxzL3JlbW92ZS1hcnJheS1pdGVtLmpzIiwiLi4vc3JjL3V0aWxzL3JhbmdlLmpzIiwiLi4vc3JjL3Bvc2l0aW9uaW5nLmpzIiwiLi4vc3JjL3RhcmdldC5qcyIsIi4uL3NyYy9zY29wZS5qcyIsIi4uL3NyYy91dGlscy9pcy1zdXBwb3J0LXBhc3NpdmUtZXZlbnRzLmpzIiwiLi4vc3JjL2RyYWdnYWJsZS5qcyIsIi4uL3NyYy9saXN0LmpzIiwiLi4vc3JjL2J1YmJsaW5nTGlzdC5qcyIsIi4uL3NyYy91dGlscy9jcmVhdGUtY2FudmFzLmpzIiwiLi4vc3JjL3NwaWRlci5qcyIsIi4uL3NyYy9hcmNzbGlkZXIuanMiLCIuLi9zcmMvY2hhcnQuanMiLCIuLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gZ2V0U3VtVmFsdWVPZlN0eWxlUnVsZXMoZWxlbWVudCwgcnVsZXMpIHtcbiAgcmV0dXJuIHJ1bGVzLnJlZHVjZSgoc3VtLCBydWxlKSA9PiB7XG4gICAgcmV0dXJuIHN1bSArIHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpW3J1bGVdfHwwKVxuICB9LCAwKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2ludCB7XG4gIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICB0aGlzLnggPSB4XG4gICAgdGhpcy55ID0geVxuICB9XG5cbiAgYWRkKHApIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCArIHAueCwgdGhpcy55ICsgcC55KVxuICB9XG5cbiAgc3ViKHApIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCAtIHAueCwgdGhpcy55IC0gcC55KVxuICB9XG5cbiAgbXVsdChrKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnggKiBrLCB0aGlzLnkgKiBrKVxuICB9XG5cbiAgbmVnYXRpdmUoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCgtdGhpcy54LCAtdGhpcy55KVxuICB9XG5cbiAgY29tcGFyZShwKSB7XG4gICAgcmV0dXJuICh0aGlzLnggPT09IHAueCAmJiB0aGlzLnkgPT09IHAueSlcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54LCB0aGlzLnkpXG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gYHt4PSR7dGhpcy54fSx5PSR7dGhpcy55fWBcbiAgfVxuXG4gIHN0YXRpYyBlbGVtZW50T2Zmc2V0KGVsZW1lbnQsIHBhcmVudCkge1xuICAgIHBhcmVudCA9IHBhcmVudCB8fCBlbGVtZW50LnBhcmVudE5vZGVcbiAgICBjb25zdCBlbGVtZW50UmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICBjb25zdCBwYXJlbnRSZWN0ID0gcGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgcmV0dXJuIG5ldyBQb2ludChcbiAgICAgIGVsZW1lbnRSZWN0LmxlZnQgLSBwYXJlbnRSZWN0LmxlZnQsXG4gICAgICBlbGVtZW50UmVjdC50b3AgLSBwYXJlbnRSZWN0LnRvcFxuICAgIClcbiAgfVxuXG4gIHN0YXRpYyBlbGVtZW50U2l6ZShlbGVtZW50LCBpc0NvbnRlbnRCb3hTaXplPWZhbHNlKSB7XG4gICAgbGV0IHdpZHRoID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudClbJ3dpZHRoJ10pXG4gICAgbGV0IGhlaWdodCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpWydoZWlnaHQnXSlcbiAgICBpZiAoIWlzQ29udGVudEJveFNpemUpIHtcbiAgICAgIHdpZHRoICs9IGdldFN1bVZhbHVlT2ZTdHlsZVJ1bGVzKGVsZW1lbnQsIFsncGFkZGluZy1sZWZ0JywgJ3BhZGRpbmctcmlnaHQnLCAnYm9yZGVyLWxlZnQtd2lkdGgnLCAnYm9yZGVyLXJpZ2h0LXdpZHRoJ10pXG4gICAgICBoZWlnaHQgKz0gZ2V0U3VtVmFsdWVPZlN0eWxlUnVsZXMoZWxlbWVudCwgWydwYWRkaW5nLXRvcCcsICdwYWRkaW5nLWJvdHRvbScsICdib3JkZXItdG9wLXdpZHRoJywgJ2JvcmRlci1ib3R0b20td2lkdGgnXSlcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBQb2ludCh3aWR0aCwgaGVpZ2h0KVxuICB9XG59XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9wb2ludCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVjdGFuZ2xlIHtcbiAgY29uc3RydWN0b3IocG9zaXRpb24sIHNpemUpIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb25cbiAgICB0aGlzLnNpemUgPSBzaXplXG4gIH1cblxuICBnZXRQMSgpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvblxuICB9XG5cbiAgZ2V0UDIoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnNpemUueCwgdGhpcy5wb3NpdGlvbi55KVxuICB9XG5cbiAgZ2V0UDMoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb24uYWRkKHRoaXMuc2l6ZSlcbiAgfVxuXG4gIGdldFA0KCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSlcbiAgfVxuXG4gIGdldENlbnRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi5hZGQodGhpcy5zaXplLm11bHQoMC41KSlcbiAgfVxuXG4gIG9yKHJlY3QpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IG5ldyBQb2ludChNYXRoLm1pbih0aGlzLnBvc2l0aW9uLngsIHJlY3QucG9zaXRpb24ueCksIE1hdGgubWluKHRoaXMucG9zaXRpb24ueSwgcmVjdC5wb3NpdGlvbi55KSlcbiAgICBjb25zdCBzaXplID0gKG5ldyBQb2ludChNYXRoLm1heCh0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnNpemUueCwgcmVjdC5wb3NpdGlvbi54ICsgcmVjdC5zaXplLngpLCBNYXRoLm1heCh0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSwgcmVjdC5wb3NpdGlvbi55ICsgcmVjdC5zaXplLnkpKSkuc3ViKHBvc2l0aW9uKVxuICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHBvc2l0aW9uLCBzaXplKVxuICB9XG5cbiAgYW5kKHJlY3QpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IG5ldyBQb2ludChNYXRoLm1heCh0aGlzLnBvc2l0aW9uLngsIHJlY3QucG9zaXRpb24ueCksIE1hdGgubWF4KHRoaXMucG9zaXRpb24ueSwgcmVjdC5wb3NpdGlvbi55KSlcbiAgICBjb25zdCBzaXplID0gKG5ldyBQb2ludChNYXRoLm1pbih0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnNpemUueCwgcmVjdC5wb3NpdGlvbi54ICsgcmVjdC5zaXplLngpLCBNYXRoLm1pbih0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSwgcmVjdC5wb3NpdGlvbi55ICsgcmVjdC5zaXplLnkpKSkuc3ViKHBvc2l0aW9uKVxuICAgIGlmIChzaXplLnggPD0gMCB8fCBzaXplLnkgPD0gMCkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUocG9zaXRpb24sIHNpemUpXG4gIH1cblxuICBpbmNsdWRlUG9pbnQocCkge1xuICAgIHJldHVybiAhKHRoaXMucG9zaXRpb24ueCA+IHAueCB8fCB0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnNpemUueCA8IHAueCB8fCB0aGlzLnBvc2l0aW9uLnkgPiBwLnkgfHwgdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnkgPCBwLnkpXG4gIH1cblxuICBpbmNsdWRlUmVjdGFuZ2xlKHJlY3RhbmdsZSkge1xuICAgIHJldHVybiB0aGlzLmluY2x1ZGVQb2ludChyZWN0YW5nbGUucG9zaXRpb24pICYmIHRoaXMuaW5jbHVkZVBvaW50KHJlY3RhbmdsZS5nZXRQMygpKVxuICB9XG5cbiAgbW92ZVRvQm91bmQocmVjdCwgYXhpcykge1xuICAgIGxldCBzZWxBeGlzLCBjcm9zc1JlY3RhbmdsZVxuICAgIGlmIChheGlzKSB7XG4gICAgICBzZWxBeGlzID0gYXhpc1xuICAgIH0gZWxzZSB7XG4gICAgICBjcm9zc1JlY3RhbmdsZSA9IHRoaXMuYW5kKHJlY3QpXG4gICAgICBpZiAoIWNyb3NzUmVjdGFuZ2xlKSB7XG4gICAgICAgIHJldHVybiByZWN0XG4gICAgICB9XG4gICAgICBzZWxBeGlzID0gY3Jvc3NSZWN0YW5nbGUuc2l6ZS54ID4gY3Jvc3NSZWN0YW5nbGUuc2l6ZS55ID8gJ3knIDogJ3gnXG4gICAgfVxuICAgIGNvbnN0IHRoaXNDZW50ZXIgPSB0aGlzLmdldENlbnRlcigpXG4gICAgY29uc3QgcmVjdENlbnRlciA9IHJlY3QuZ2V0Q2VudGVyKClcbiAgICBjb25zdCBzaWduID0gdGhpc0NlbnRlcltzZWxBeGlzXSA+IHJlY3RDZW50ZXJbc2VsQXhpc10gPyAtMSA6IDFcbiAgICBjb25zdCBvZmZzZXQgPSBzaWduID4gMCA/IHRoaXMucG9zaXRpb25bc2VsQXhpc10gKyB0aGlzLnNpemVbc2VsQXhpc10gLSByZWN0LnBvc2l0aW9uW3NlbEF4aXNdIDogdGhpcy5wb3NpdGlvbltzZWxBeGlzXSAtIChyZWN0LnBvc2l0aW9uW3NlbEF4aXNdICsgcmVjdC5zaXplW3NlbEF4aXNdKVxuICAgIHJlY3QucG9zaXRpb25bc2VsQXhpc10gPSByZWN0LnBvc2l0aW9uW3NlbEF4aXNdICsgb2Zmc2V0XG4gICAgcmV0dXJuIHJlY3RcbiAgfVxuXG4gIGdldFNxdWFyZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zaXplLnggKiB0aGlzLnNpemUueVxuICB9XG5cbiAgc3R5bGVBcHBseShlbCkge1xuICAgIGVsID0gZWwgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5kJylcbiAgICBlbC5zdHlsZS5sZWZ0ID0gdGhpcy5wb3NpdGlvbi54ICsgJ3B4J1xuICAgIGVsLnN0eWxlLnRvcCA9IHRoaXMucG9zaXRpb24ueSArICdweCdcbiAgICBlbC5zdHlsZS53aWR0aCA9IHRoaXMuc2l6ZS54ICsgJ3B4J1xuICAgIGVsLnN0eWxlLmhlaWdodCA9IHRoaXMuc2l6ZS55ICsgJ3B4J1xuICB9XG5cbiAgZ3Jvd3RoKHNpemUpIHtcbiAgICB0aGlzLnNpemUgPSB0aGlzLnNpemUuYWRkKHNpemUpXG4gICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMucG9zaXRpb24uYWRkKHNpemUubXVsdCgtMC41KSlcbiAgfVxuXG4gIGdldE1pblNpZGUoKSB7XG4gICAgcmV0dXJuIE1hdGgubWluKHRoaXMuc2l6ZS54LCB0aGlzLnNpemUueSlcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRWxlbWVudChlbGVtZW50LCBwYXJlbnQ9ZWxlbWVudC5wYXJlbnROb2RlLCBpc0NvbnRlbnRCb3hTaXplPWZhbHNlLCBpc0NvbnNpZGVyVHJhbnNsYXRlPWZhbHNlKSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBQb2ludC5lbGVtZW50T2Zmc2V0KGVsZW1lbnQsIHBhcmVudCwgaXNDb25zaWRlclRyYW5zbGF0ZSlcbiAgICBjb25zdCBzaXplID0gUG9pbnQuZWxlbWVudFNpemUoZWxlbWVudCwgaXNDb250ZW50Qm94U2l6ZSlcbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZShwb3NpdGlvbiwgc2l6ZSlcbiAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGhhc0NsYXNzKGVsZW1lbnQsIGMpIHtcbiAgY29uc3QgcmUgPSBuZXcgUmVnRXhwKCcoXnxcXFxccyknICsgYyArICcoXFxcXHN8JCknLCAnZycpXG4gIHJldHVybiAocmUudGVzdChlbGVtZW50LmNsYXNzTmFtZSkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRDbGFzcyhlbGVtZW50LCBjKSB7XG4gIGlmICghaGFzQ2xhc3MoZWxlbWVudCwgYykpIHtcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IChlbGVtZW50LmNsYXNzTmFtZSArICcgJyArIGMpLnJlcGxhY2UoL1xccysvZywgJyAnKS5yZXBsYWNlKC8oXiB8ICQpL2csICcnKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDbGFzcyhlbGVtZW50LCBjKSB7XG4gIGNvbnN0IHJlID0gbmV3IFJlZ0V4cCgnKF58XFxcXHMpJyArIGMgKyAnKFxcXFxzfCQpJywgJ2cnKVxuICBlbGVtZW50LmNsYXNzTmFtZSA9IGVsZW1lbnQuY2xhc3NOYW1lLnJlcGxhY2UocmUsICckMScpLnJlcGxhY2UoL1xccysvZywgJyAnKS5yZXBsYWNlKC8oXiB8ICQpL2csICcnKVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0RGVmYXVsdFBhcmVudChlbGVtZW50KSB7XG4gIGxldCBwYXJlbnQgPSBlbGVtZW50LnBhcmVudE5vZGVcbiAgd2hpbGUgKHBhcmVudC5wYXJlbnROb2RlICYmIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHBhcmVudClbJ3Bvc2l0aW9uJ10gPT09ICdzdGF0aWMnICYmIHBhcmVudC50YWdOYW1lICE9PSAnQk9EWScpIHtcbiAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50Tm9kZVxuICB9XG4gIHJldHVybiBwYXJlbnRcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yIChjb250ZXh0LCBvcHRpb25zID0ge30pIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0IHx8IHRoaXNcbiAgICB0aGlzLmV2ZW50cyA9IHt9XG5cbiAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLm9uKSB7XG4gICAgICBmb3IgKGNvbnN0IFtldmVudE5hbWUsIGZuXSBvZiBPYmplY3QuZW50cmllcyhvcHRpb25zLm9uKSkge1xuICAgICAgICB0aGlzLm9uKGV2ZW50TmFtZSwgZm4pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZW1pdChldmVudE5hbWUpIHtcbiAgICB0aGlzLmludGVycnVwdGVkID0gZmFsc2VcbiAgICBjb25zdCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpXG5cbiAgICBpZiAoIXRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHJldHVyblxuXG4gICAgZm9yIChjb25zdCBmdW5jIG9mIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIGZ1bmMuYXBwbHkodGhpcy5jb250ZXh0LCBhcmdzKVxuICAgICAgaWYgKHRoaXMuaW50ZXJydXB0ZWQpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaW50ZXJydXB0KCkge1xuICAgIHRoaXMuaW50ZXJydXB0ZWQgPSB0cnVlXG4gIH1cblxuICBvbihldmVudE5hbWUsIGZuKSB7XG4gICAgaWYgKCF0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdID0gW11cbiAgICB9XG5cbiAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLnB1c2goZm4pXG4gIH1cblxuICBwcmVwZW5kT24oZXZlbnROYW1lLCBmbikge1xuICAgIGlmICghdGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IFtdXG4gICAgfVxuXG4gICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS51bnNoaWZ0KGZuKVxuICB9XG5cbiAgdW5zdWJzY3JpYmUoZXZlbnROYW1lLCBmbikge1xuICAgIGlmICh0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0uaW5kZXhPZihmbilcbiAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0uc3BsaWNlKGluZGV4LCAxKVxuICAgIH1cbiAgfVxuXG4gIHJlc2V0RW1pdHRlciAoKSB7XG4gICAgdGhpcy5ldmVudHMgPSB7fVxuICB9XG5cbiAgcmVzZXRPbihldmVudE5hbWUpIHtcbiAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdID0gW11cbiAgfVxufVxuIiwiLyohXG4gKiBnZXRTdHlsZVByb3BlcnR5IHYxLjAuNFxuICogb3JpZ2luYWwgYnkga2FuZ2F4XG4gKiBodHRwOi8vcGVyZmVjdGlvbmtpbGxzLmNvbS9mZWF0dXJlLXRlc3RpbmctY3NzLXByb3BlcnRpZXMvXG4gKiBNSVQgbGljZW5zZVxuICovXG5cbi8qanNoaW50IGJyb3dzZXI6IHRydWUsIHN0cmljdDogdHJ1ZSwgdW5kZWY6IHRydWUgKi9cbi8qZ2xvYmFsIGRlZmluZTogZmFsc2UsIGV4cG9ydHM6IGZhbHNlLCBtb2R1bGU6IGZhbHNlICovXG5cbiggZnVuY3Rpb24oIHdpbmRvdyApIHtcblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgcHJlZml4ZXMgPSAnV2Via2l0IE1veiBtcyBNcyBPJy5zcGxpdCgnICcpO1xudmFyIGRvY0VsZW1TdHlsZSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZTtcblxuZnVuY3Rpb24gZ2V0U3R5bGVQcm9wZXJ0eSggcHJvcE5hbWUgKSB7XG4gIGlmICggIXByb3BOYW1lICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIHRlc3Qgc3RhbmRhcmQgcHJvcGVydHkgZmlyc3RcbiAgaWYgKCB0eXBlb2YgZG9jRWxlbVN0eWxlWyBwcm9wTmFtZSBdID09PSAnc3RyaW5nJyApIHtcbiAgICByZXR1cm4gcHJvcE5hbWU7XG4gIH1cblxuICAvLyBjYXBpdGFsaXplXG4gIHByb3BOYW1lID0gcHJvcE5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBwcm9wTmFtZS5zbGljZSgxKTtcblxuICAvLyB0ZXN0IHZlbmRvciBzcGVjaWZpYyBwcm9wZXJ0aWVzXG4gIHZhciBwcmVmaXhlZDtcbiAgZm9yICggdmFyIGk9MCwgbGVuID0gcHJlZml4ZXMubGVuZ3RoOyBpIDwgbGVuOyBpKysgKSB7XG4gICAgcHJlZml4ZWQgPSBwcmVmaXhlc1tpXSArIHByb3BOYW1lO1xuICAgIGlmICggdHlwZW9mIGRvY0VsZW1TdHlsZVsgcHJlZml4ZWQgXSA9PT0gJ3N0cmluZycgKSB7XG4gICAgICByZXR1cm4gcHJlZml4ZWQ7XG4gICAgfVxuICB9XG59XG5cbi8vIHRyYW5zcG9ydFxuaWYgKCB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gIC8vIEFNRFxuICBkZWZpbmUoIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBnZXRTdHlsZVByb3BlcnR5O1xuICB9KTtcbn0gZWxzZSBpZiAoIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyApIHtcbiAgLy8gQ29tbW9uSlMgZm9yIENvbXBvbmVudFxuICBtb2R1bGUuZXhwb3J0cyA9IGdldFN0eWxlUHJvcGVydHk7XG59IGVsc2Uge1xuICAvLyBicm93c2VyIGdsb2JhbFxuICB3aW5kb3cuZ2V0U3R5bGVQcm9wZXJ0eSA9IGdldFN0eWxlUHJvcGVydHk7XG59XG5cbn0pKCB3aW5kb3cgKTtcbiIsImV4cG9ydCBmdW5jdGlvbiBnZXREaXN0YW5jZShwMSwgcDIpIHtcbiAgY29uc3QgZHggPSBwMS54IC0gcDIueCwgZHkgPSBwMS55IC0gcDIueVxuICByZXR1cm4gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0WERpZmZlcmVuY2UocDEsIHAyKSB7XG4gIHJldHVybiBNYXRoLmFicyhwMS54IC0gcDIueClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFlEaWZmZXJlbmNlKHAxLCBwMikge1xuICByZXR1cm4gTWF0aC5hYnMocDEueSAtIHAyLnkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5KG9wdGlvbnMpIHtcbiAgcmV0dXJuIChwMSwgcDIpID0+IHtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KFxuICAgICAgTWF0aC5wb3cob3B0aW9ucy54ICogTWF0aC5hYnMocDEueCAtIHAyLngpLCAyKSArXG4gICAgICBNYXRoLnBvdyhvcHRpb25zLnkgKiBNYXRoLmFicyhwMS55IC0gcDIueSksIDIpXG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmRleE9mTmVhcmVzdFBvaW50KGFyciwgdmFsLCByYWRpdXMsIGdldERpc3RhbmNlRnVuYz1nZXREaXN0YW5jZSkge1xuICBsZXQgc2l6ZSwgaW5kZXggPSAwLCBpLCB0ZW1wXG4gIGlmIChhcnIubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIC0xXG4gIH1cbiAgc2l6ZSA9IGdldERpc3RhbmNlRnVuYyhhcnJbMF0sIHZhbClcbiAgZm9yIChpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgIHRlbXAgPSBnZXREaXN0YW5jZUZ1bmMoYXJyW2ldLCB2YWwpXG4gICAgaWYgKHRlbXAgPCBzaXplKSB7XG4gICAgICBzaXplID0gdGVtcFxuICAgICAgaW5kZXggPSBpXG4gICAgfVxuICB9XG4gIGlmIChyYWRpdXMgPj0gMCAmJiBzaXplID4gcmFkaXVzKSB7XG4gICAgcmV0dXJuIC0xXG4gIH1cbiAgcmV0dXJuIGluZGV4XG59XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9wb2ludCdcbmltcG9ydCB7IGdldERpc3RhbmNlIH0gZnJvbSAnLi9kaXN0YW5jZXMnXG5cbmV4cG9ydCBmdW5jdGlvbiBjbGFtcChtaW4sIG1heCwgdmFsKSB7XG4gIHJldHVybiBNYXRoLm1heChtaW4sIE1hdGgubWluKG1heCwgdmFsKSlcbn1cblxuLy9SZXR1cm4gY3Jvc3NpbmcgcG9pbnQgb2YgdHdvIGxpbmVzXG5leHBvcnQgZnVuY3Rpb24gZGlyZWN0Q3Jvc3NpbmcoTDFQMSwgTDFQMiwgTDJQMSwgTDJQMikge1xuICBsZXQgdGVtcCwgazEsIGsyLCBiMSwgYjIsIHgsIHlcbiAgaWYgKEwyUDEueCA9PT0gTDJQMi54KSB7XG4gICAgdGVtcCA9IEwyUDFcbiAgICBMMlAxID0gTDFQMVxuICAgIEwxUDEgPSB0ZW1wXG4gICAgdGVtcCA9IEwyUDJcbiAgICBMMlAyID0gTDFQMlxuICAgIEwxUDIgPSB0ZW1wXG4gIH1cbiAgaWYgKEwxUDEueCA9PT0gTDFQMi54KSB7XG4gICAgazIgPSAoTDJQMi55IC0gTDJQMS55KSAvIChMMlAyLnggLSBMMlAxLngpXG4gICAgYjIgPSAoTDJQMi54ICogTDJQMS55IC0gTDJQMS54ICogTDJQMi55KSAvIChMMlAyLnggLSBMMlAxLngpXG4gICAgeCA9IEwxUDEueFxuICAgIHkgPSB4ICogazIgKyBiMlxuICAgIHJldHVybiBuZXcgUG9pbnQoeCwgeSlcbiAgfSBlbHNlIHtcbiAgICBrMSA9IChMMVAyLnkgLSBMMVAxLnkpIC8gKEwxUDIueCAtIEwxUDEueClcbiAgICBiMSA9IChMMVAyLnggKiBMMVAxLnkgLSBMMVAxLnggKiBMMVAyLnkpIC8gKEwxUDIueCAtIEwxUDEueClcbiAgICBrMiA9IChMMlAyLnkgLSBMMlAxLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICBiMiA9IChMMlAyLnggKiBMMlAxLnkgLSBMMlAxLnggKiBMMlAyLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICB4ID0gKGIxIC0gYjIpIC8gKGsyIC0gazEpXG4gICAgeSA9IHggKiBrMSArIGIxXG4gICAgcmV0dXJuIG5ldyBQb2ludCh4LCB5KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZFRvU2VnbWVudChMUDEsIExQMiwgUCkge1xuICBsZXQgeCwgeVxuICB4ID0gY2xhbXAoTWF0aC5taW4oTFAxLngsIExQMi54KSwgTWF0aC5tYXgoTFAxLngsIExQMi54KSwgUC54KVxuICBpZiAoeCAhPT0gUC54KSB7XG4gICAgeSA9ICh4ID09PSBMUDEueCkgPyBMUDEueSA6IExQMi55XG4gICAgUCA9IG5ldyBQb2ludCh4LCB5KVxuICB9XG5cbiAgeSA9IGNsYW1wKE1hdGgubWluKExQMS55LCBMUDIueSksIE1hdGgubWF4KExQMS55LCBMUDIueSksIFAueSlcbiAgaWYgKHkgIT09IFAueSkge1xuICAgIHggPSAoeSA9PT0gTFAxLnkpID8gTFAxLnggOiBMUDIueFxuICAgIFAgPSBuZXcgUG9pbnQoeCwgeSlcbiAgfVxuXG4gIHJldHVybiBQXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZFRvTGluZShBLCBCLCBQKSB7XG4gIGNvbnN0IEFQID0gbmV3IFBvaW50KFAueCAtIEEueCwgUC55IC0gQS55KSxcbiAgICBBQiA9IG5ldyBQb2ludChCLnggLSBBLngsIEIueSAtIEEueSksXG4gICAgYWIyID0gQUIueCAqIEFCLnggKyBBQi55ICogQUIueSxcbiAgICBhcF9hYiA9IEFQLnggKiBBQi54ICsgQVAueSAqIEFCLnksXG4gICAgdCA9IGFwX2FiIC8gYWIyXG4gIHJldHVybiBuZXcgUG9pbnQoQS54ICsgQUIueCAqIHQsIEEueSArIEFCLnkgKiB0KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9pbnRPbkxpbmUoTFAxLCBMUDIsIHBlcmNlbnQpIHtcbiAgY29uc3QgZHggPSBMUDIueCAtIExQMS54LCBkeSA9IExQMi55IC0gTFAxLnlcbiAgcmV0dXJuIG5ldyBQb2ludChMUDEueCArIHBlcmNlbnQgKiBkeCwgTFAxLnkgKyBwZXJjZW50ICogZHkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb2ludE9uTGluZUJ5TGVuZ2h0KExQMSwgTFAyLCBsZW5naHQpIHtcbiAgY29uc3QgZHggPSBMUDIueCAtIExQMS54XG4gIGNvbnN0IGR5ID0gTFAyLnkgLSBMUDEueVxuICBjb25zdCBwZXJjZW50ID0gbGVuZ2h0IC8gZ2V0RGlzdGFuY2UoTFAxLCBMUDIpXG4gIHJldHVybiBuZXcgUG9pbnQoTFAxLnggKyBwZXJjZW50ICogZHgsIExQMS55ICsgcGVyY2VudCAqIGR5KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkUG9pbnRUb0JvdW5kUG9pbnRzKGJvdW5kcG9pbnRzLCBwb2ludCwgaXNSaWdodCkge1xuICBjb25zdCByZXN1bHQgPSBib3VuZHBvaW50cy5maWx0ZXIoKGJQb2ludCkgPT4ge1xuICAgIHJldHVybiBiUG9pbnQueSA+IHBvaW50LnkgfHwgKGlzUmlnaHQgPyBiUG9pbnQueCA8IHBvaW50LnggOiBiUG9pbnQueCA+IHBvaW50LngpXG4gIH0pXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHQubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAocG9pbnQueSA8IHJlc3VsdFtpXS55KSB7XG4gICAgICByZXN1bHQuc3BsaWNlKGksIDAsIHBvaW50KVxuICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbiAgfVxuICByZXN1bHQucHVzaChwb2ludClcbiAgcmV0dXJuIHJlc3VsdFxufVxuIiwiaW1wb3J0IFBvaW50IGZyb20gJy4vcG9pbnQnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbmdsZURpZmYoYWxwaGEsIGJldGEpIHtcbiAgY29uc3QgbWluQW5nbGUgPSBNYXRoLm1pbihhbHBoYSwgYmV0YSlcbiAgY29uc3QgbWF4QW5nbGUgPSAgTWF0aC5tYXgoYWxwaGEsIGJldGEpXG4gIHJldHVybiBNYXRoLm1pbihtYXhBbmdsZSAtIG1pbkFuZ2xlLCBtaW5BbmdsZSArIE1hdGguUEkqMiAtIG1heEFuZ2xlKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QW5nbGUocDEsIHAyKSB7XG4gIGNvbnN0IGRpZmYgPSBwMi5zdWIocDEpXG4gIHJldHVybiBub3JtYWxpemVBbmdsZShNYXRoLmF0YW4yKGRpZmYueSwgZGlmZi54KSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvUmFkaWFuKGFuZ2xlKSB7XG4gIHJldHVybiAoKGFuZ2xlICUgMzYwKSAqIE1hdGguUEkgLyAxODApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0RlZ3JlZShhbmdsZSkge1xuICByZXR1cm4gKGFuZ2xlICogMTgwIC8gTWF0aC5QSSkgJSAzNjBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kQW5nbGUobWluLCBtYXgsIHZhbCkge1xuICBsZXQgZG1pbiwgZG1heFxuICBpZiAobWluIDwgbWF4ICYmIHZhbCA+IG1pbiAmJiB2YWwgPCBtYXgpIHtcbiAgICByZXR1cm4gdmFsXG4gIH0gZWxzZSBpZiAobWF4IDwgbWluICYmICh2YWwgPCBtYXggfHwgdmFsID4gbWluKSkge1xuICAgIHJldHVybiB2YWxcbiAgfSBlbHNlIHtcbiAgICBkbWluID0gZ2V0QW5nbGVEaWZmKG1pbiwgdmFsKVxuICAgIGRtYXggPSBnZXRBbmdsZURpZmYobWF4LCB2YWwpXG4gICAgaWYgKGRtaW4gPCBkbWF4KSB7XG4gICAgICByZXR1cm4gbWluXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBtYXhcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE5lYXJlc3RBbmdsZShhcnIsIGFuZ2xlKSB7XG4gIGxldCBpLCB0ZW1wLCBkaWZmID0gTWF0aC5QSSAqIDIsIHZhbHVlXG4gIGZvciAoaSA9IDA7IGkgPCBhcnIubGVuZ3RoO2krKykge1xuICAgIHRlbXAgPSBnZXRBbmdsZURpZmYoYXJyW2ldLCBhbmdsZSlcbiAgICBpZiAoZGlmZiA8IHRlbXApIHtcbiAgICAgIGRpZmYgPSB0ZW1wXG4gICAgICB2YWx1ZSA9IGFycltpXVxuICAgIH1cbiAgfVxuICByZXR1cm4gdmFsdWVcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZUFuZ2xlKHZhbCkge1xuICB3aGlsZSAodmFsIDwgMCkge1xuICAgIHZhbCArPSAyICogTWF0aC5QSVxuICB9XG4gIHdoaWxlICh2YWwgPiAyICogTWF0aC5QSSkge1xuICAgIHZhbCAtPSAyICogTWF0aC5QSVxuICB9XG4gIHJldHVybiB2YWxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBvaW50RnJvbVJhZGlhbFN5c3RlbShhbmdsZSwgbGVuZ3RoLCBjZW50ZXIpIHtcbiAgY2VudGVyID0gY2VudGVyIHx8IG5ldyBQb2ludCgwLCAwKVxuICByZXR1cm4gY2VudGVyLmFkZChuZXcgUG9pbnQobGVuZ3RoICogTWF0aC5jb3MoYW5nbGUpLCBsZW5ndGggKiBNYXRoLnNpbihhbmdsZSkpKVxufVxuIiwiaW1wb3J0IFBvaW50IGZyb20gJy4vZ2VvbWV0cnkvcG9pbnQnXG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gJy4vZ2VvbWV0cnkvcmVjdGFuZ2xlJ1xuaW1wb3J0IHtcbiAgZ2V0UG9pbnRPbkxpbmVCeUxlbmdodCxcbiAgZGlyZWN0Q3Jvc3NpbmcsXG4gIGJvdW5kVG9MaW5lXG59IGZyb20gJy4vZ2VvbWV0cnkvYm91bmRzJ1xuXG5pbXBvcnQge1xuICBnZXRBbmdsZSxcbiAgbm9ybWFsaXplQW5nbGUsXG4gIGJvdW5kQW5nbGUsXG4gIGdldFBvaW50RnJvbVJhZGlhbFN5c3RlbVxufSBmcm9tICcuL2dlb21ldHJ5L2FuZ2xlcydcblxuZXhwb3J0IGNsYXNzIEJvdW5kIHtcbiAgY29uc3RydWN0b3IgKCkge31cblxuICBib3VuZChwb2ludCwgX3NpemUpIHtcbiAgICByZXR1cm4gcG9pbnRcbiAgfVxuXG4gIHJlZnJlc2ggKCkge31cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9SZWN0YW5nbGUgZXh0ZW5kcyBCb3VuZCB7XG4gIGNvbnN0cnVjdG9yKHJlY3RhbmdsZSkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnJlY3RhbmdsZSA9IHJlY3RhbmdsZVxuICB9XG5cbiAgYm91bmQocG9pbnQsIHNpemUpIHtcbiAgICBjb25zdCBjYWxjUG9pbnQgPSBwb2ludC5jbG9uZSgpXG4gICAgY29uc3QgcmVjdFAyID0gdGhpcy5yZWN0YW5nbGUuZ2V0UDMoKVxuXG4gICAgaWYgKHRoaXMucmVjdGFuZ2xlLnBvc2l0aW9uLnggPiBjYWxjUG9pbnQueCkge1xuICAgICAgKGNhbGNQb2ludC54ID0gdGhpcy5yZWN0YW5nbGUucG9zaXRpb24ueClcbiAgICB9XG4gICAgaWYgKHRoaXMucmVjdGFuZ2xlLnBvc2l0aW9uLnkgPiBjYWxjUG9pbnQueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSB0aGlzLnJlY3RhbmdsZS5wb3NpdGlvbi55XG4gICAgfVxuICAgIGlmIChyZWN0UDIueCA8IGNhbGNQb2ludC54ICsgc2l6ZS54KSB7XG4gICAgICBjYWxjUG9pbnQueCA9IHJlY3RQMi54IC0gc2l6ZS54XG4gICAgfVxuICAgIGlmIChyZWN0UDIueSA8IGNhbGNQb2ludC55ICsgc2l6ZS55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHJlY3RQMi55IC0gc2l6ZS55XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhbGNQb2ludFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvRWxlbWVudCBleHRlbmRzIEJvdW5kVG9SZWN0YW5nbGUge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBwYXJlbnQpIHtcbiAgICBzdXBlcihSZWN0YW5nbGUuZnJvbUVsZW1lbnQoZWxlbWVudCwgcGFyZW50KSlcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnRcbiAgfVxuXG4gIHJlZnJlc2ggKCkge1xuICAgIHRoaXMucmVjdGFuZ2xlID0gUmVjdGFuZ2xlLmZyb21FbGVtZW50KHRoaXMuZWxlbWVudCwgdGhpcy5wYXJlbnQpXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9MaW5lWCBleHRlbmRzIEJvdW5kIHtcbiAgY29uc3RydWN0b3IoeCwgc3RhcnRZLCBlbmRZKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMueCA9IHhcbiAgICB0aGlzLnN0YXJ0WSA9IHN0YXJ0WVxuICAgIHRoaXMuZW5kWSA9IGVuZFlcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgY2FsY1BvaW50ID0gcG9pbnQuY2xvbmUoKVxuXG4gICAgY2FsY1BvaW50LnggPSB0aGlzLnhcbiAgICBpZiAodGhpcy5zdGFydFkgPiBjYWxjUG9pbnQueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSB0aGlzLnN0YXJ0WVxuICAgIH1cbiAgICBpZiAodGhpcy5lbmRZIDwgY2FsY1BvaW50LnkgKyBzaXplLnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gdGhpcy5lbmRZIC0gc2l6ZS55XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhbGNQb2ludFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvTGluZVkgZXh0ZW5kcyBCb3VuZCB7XG4gIGNvbnN0cnVjdG9yKHksIHN0YXJ0WCwgZW5kWCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnkgPSB5XG4gICAgdGhpcy5zdGFydFggPSBzdGFydFhcbiAgICB0aGlzLmVuZFggPSBlbmRYXG4gIH1cblxuICBib3VuZChwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IGNhbGNQb2ludCA9IHBvaW50LmNsb25lKClcbiAgICBjYWxjUG9pbnQueSA9IHRoaXMueVxuICAgIGlmICh0aGlzLnN0YXJ0WCA+IGNhbGNQb2ludC54KSB7XG4gICAgICBjYWxjUG9pbnQueCA9IHRoaXMuc3RhcnRYXG4gICAgfVxuICAgIGlmICh0aGlzLmVuZFggPCBjYWxjUG9pbnQueCArIHNpemUueCkge1xuICAgICAgY2FsY1BvaW50LnggPSB0aGlzLmVuZFggLSBzaXplLnhcbiAgICB9XG4gICAgcmV0dXJuIGNhbGNQb2ludFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvTGluZSBleHRlbmRzIEJvdW5kIHtcbiAgY29uc3RydWN0b3Ioc3RhcnRQb2ludCwgZW5kUG9pbnQpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5zdGFydFBvaW50ID0gc3RhcnRQb2ludFxuICAgIHRoaXMuZW5kUG9pbnQgPSBlbmRQb2ludFxuICAgIGNvbnN0IGFscGhhID0gTWF0aC5hdGFuMihlbmRQb2ludC55IC0gc3RhcnRQb2ludC55LCBlbmRQb2ludC54IC0gc3RhcnRQb2ludC54KVxuICAgIGNvbnN0IGJldGEgPSBhbHBoYSArIE1hdGguUEkgLyAyXG4gICAgdGhpcy5zb21lSyA9IDEwXG4gICAgdGhpcy5jb3NCZXRhID0gTWF0aC5jb3MoYmV0YSlcbiAgICB0aGlzLnNpbkJldGEgPSBNYXRoLnNpbihiZXRhKVxuICB9XG5cbiAgYm91bmQocG9pbnQsIHNpemUpIHtcbiAgICBjb25zdCBwb2ludDIgPSBuZXcgUG9pbnQoXG4gICAgICBwb2ludC54ICsgdGhpcy5zb21lSyAqIHRoaXMuY29zQmV0YSxcbiAgICAgIHBvaW50LnkgKyB0aGlzLnNvbWVLICogdGhpcy5zaW5CZXRhXG4gICAgKVxuXG4gICAgY29uc3QgbmV3RW5kUG9pbnQgPSBnZXRQb2ludE9uTGluZUJ5TGVuZ2h0KHRoaXMuZW5kUG9pbnQsIHRoaXMuc3RhcnRQb2ludCwgc2l6ZS54KVxuICAgIGNvbnN0IHBvaW50Q3Jvc3NpbmcgPSBkaXJlY3RDcm9zc2luZyh0aGlzLnN0YXJ0UG9pbnQsIHRoaXMuZW5kUG9pbnQsIHBvaW50LCBwb2ludDIpXG5cbiAgICByZXR1cm4gYm91bmRUb0xpbmUodGhpcy5zdGFydFBvaW50LCBuZXdFbmRQb2ludCwgcG9pbnRDcm9zc2luZylcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb0NpcmNsZSBleHRlbmRzIEJvdW5kIHtcbiAgY29uc3RydWN0b3IoY2VudGVyLCByYWRpdXMpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5jZW50ZXIgPSBjZW50ZXJcbiAgICB0aGlzLnJhZGl1cyA9IHJhZGl1c1xuICB9XG5cbiAgYm91bmQocG9pbnQsIF9zaXplKSB7XG4gICAgcmV0dXJuIGdldFBvaW50T25MaW5lQnlMZW5naHQodGhpcy5jZW50ZXIsIHBvaW50LCB0aGlzLnJhZGl1cylcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb0FyYyBleHRlbmRzIEJvdW5kVG9DaXJjbGUge1xuICBjb25zdHJ1Y3RvcihjZW50ZXIsIHJhZGl1cywgc3RhcnRBbmdsZSwgZW5kQW5nbGUpIHtcbiAgICBzdXBlcihjZW50ZXIsIHJhZGl1cylcbiAgICB0aGlzLl9zdGFydEFuZ2xlID0gc3RhcnRBbmdsZVxuICAgIHRoaXMuX2VuZEFuZ2xlID0gZW5kQW5nbGVcbiAgfVxuXG4gIHN0YXJ0QW5nbGUoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGlzLl9zdGFydEFuZ2xlID09PSAnZnVuY3Rpb24nID8gdGhpcy5fc3RhcnRBbmdsZSgpIDogdGhpcy5fc3RhcnRBbmdsZVxuICB9XG5cbiAgZW5kQW5nbGUoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGlzLl9lbmRBbmdsZSA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMuX2VuZEFuZ2xlKCkgOiB0aGlzLl9lbmRBbmdsZVxuICB9XG5cbiAgYm91bmQocG9pbnQsIF9zaXplKSB7XG4gICAgbGV0IGFuZ2xlID0gZ2V0QW5nbGUodGhpcy5jZW50ZXIsIHBvaW50KVxuICAgIGFuZ2xlID0gbm9ybWFsaXplQW5nbGUoYW5nbGUpXG4gICAgYW5nbGUgPSBib3VuZEFuZ2xlKHRoaXMuc3RhcnRBbmdsZSgpLCB0aGlzLmVuZEFuZ2xlKCksIGFuZ2xlKVxuICAgIHJldHVybiBnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oYW5nbGUsIHRoaXMucmFkaXVzLCB0aGlzLmNlbnRlcilcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oYXJyYXksIHZhbCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGFycmF5W2ldID09PSB2YWwpIHtcbiAgICAgIGFycmF5LnNwbGljZShpLCAxKVxuICAgICAgaS0tXG4gICAgfVxuICB9XG4gIHJldHVybiBhcnJheVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmFuZ2Uoc3RhcnQsIHN0b3AsIHN0ZXApIHtcbiAgY29uc3QgcmVzdWx0ID0gW11cbiAgaWYgKHR5cGVvZiBzdG9wID09PSAndW5kZWZpbmVkJykge1xuICAgIHN0b3AgPSBzdGFydFxuICAgIHN0YXJ0ID0gMFxuICB9XG4gIGlmICh0eXBlb2Ygc3RlcCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBzdGVwID0gMVxuICB9XG4gIGlmICgoc3RlcCA+IDAgJiYgc3RhcnQgPj0gc3RvcCkgfHwgKHN0ZXAgPCAwICYmIHN0YXJ0IDw9IHN0b3ApKSB7XG4gICAgcmV0dXJuIFtdXG4gIH1cbiAgZm9yIChsZXQgaSA9IHN0YXJ0OyBzdGVwID4gMCA/IGkgPCBzdG9wIDogaSA+IHN0b3A7IGkgKz0gc3RlcCkge1xuICAgIHJlc3VsdC5wdXNoKGkpXG4gIH1cbiAgcmV0dXJuIHJlc3VsdFxufVxuIiwiaW1wb3J0IFBvaW50IGZyb20gJy4vZ2VvbWV0cnkvcG9pbnQnXG5pbXBvcnQgeyBhZGRQb2ludFRvQm91bmRQb2ludHMgfSBmcm9tICcuL2dlb21ldHJ5L2JvdW5kcydcblxuaW1wb3J0IHtcbiAgaW5kZXhPZk5lYXJlc3RQb2ludCxcbiAgZ2V0RGlzdGFuY2Vcbn0gZnJvbSAnLi9nZW9tZXRyeS9kaXN0YW5jZXMnXG5cbmNsYXNzIEJhc2ljU3RyYXRlZ3kge1xuICBjb25zdHJ1Y3RvcihyZWN0YW5nbGUsIG9wdGlvbnM9e30pIHtcbiAgICB0aGlzLnJlY3RhbmdsZSA9IHJlY3RhbmdsZVxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNcbiAgfVxuXG4gIGdldCBib3VuZFJlY3QgKCkge1xuICAgIHJldHVybiB0eXBlb2YgdGhpcy5yZWN0YW5nbGUgPT09ICdmdW5jdGlvbicgPyB0aGlzLnJlY3RhbmdsZSgpIDogdGhpcy5yZWN0YW5nbGVcbiAgfVxufVxuXG5jbGFzcyBOb3RDcm9zc2luZ1N0cmF0ZWd5IGV4dGVuZHMgQmFzaWNTdHJhdGVneSB7XG4gIHBvc2l0aW9uaW5nIChyZWN0YW5nbGVMaXN0LCBpbmRleGVzT2ZOZXdzKSB7XG4gICAgY29uc3Qgc3RhdGljUmVjdGFuZ2xlSW5kZXhlcyA9IHJlY3RhbmdsZUxpc3QucmVkdWNlKChpbmRleGVzLCBfcmVjdCwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChpbmRleGVzT2ZOZXdzLmluZGV4T2YoaW5kZXgpID09PSAtMSkge1xuICAgICAgICBpbmRleGVzLnB1c2goaW5kZXgpXG4gICAgICB9XG4gICAgICByZXR1cm4gaW5kZXhlc1xuICAgIH0sIFtdKVxuXG4gICAgaW5kZXhlc09mTmV3cy5mb3JFYWNoKChpbmRleCkgPT4ge1xuICAgICAgbGV0IHJlY3QgPSByZWN0YW5nbGVMaXN0W2luZGV4XVxuICAgICAgbGV0IHJlbW92YWJsZSA9IGZhbHNlXG5cbiAgICAgIHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMuZm9yRWFjaCgoaW5kZXhPZlN0YXRpYykgPT4ge1xuICAgICAgICBjb25zdCBzdGF0aWNSZWN0ID0gcmVjdGFuZ2xlTGlzdFtpbmRleE9mU3RhdGljXVxuICAgICAgICByZWN0ID0gc3RhdGljUmVjdC5tb3ZlVG9Cb3VuZChyZWN0KVxuICAgICAgfSlcblxuICAgICAgcmVtb3ZhYmxlID0gc3RhdGljUmVjdGFuZ2xlSW5kZXhlcy5zb21lKChpbmRleE9mU3RhdGljKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YXRpY1JlY3QgPSByZWN0YW5nbGVMaXN0W2luZGV4T2ZTdGF0aWNdXG4gICAgICAgIHJldHVybiAgISFzdGF0aWNSZWN0LmFuZChyZWN0KVxuICAgICAgfSkgfHwgcmVjdC5hbmQodGhpcy5ib3VuZFJlY3QpLmdldFNxdWFyZSgpICE9PSByZWN0LmdldFNxdWFyZSgpXG5cbiAgICAgIGlmIChyZW1vdmFibGUpIHtcbiAgICAgICAgcmVjdC5yZW1vdmFibGUgPSB0cnVlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0aWNSZWN0YW5nbGVJbmRleGVzLnB1c2goaW5kZXgpXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcmVjdGFuZ2xlTGlzdFxuICB9XG5cbiAgc29ydGluZyhvZGxEcmFnZ2FibGVzTGlzdCwgbmV3RHJhZ2dhYmxlcywgaW5kZXhPZk5ld3MpIHtcbiAgICBjb25zdCBkcmFnZ2FibGVzID0gb2RsRHJhZ2dhYmxlc0xpc3QuY29uY2F0KG5ld0RyYWdnYWJsZXMpXG4gICAgbmV3RHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGluZGV4T2ZOZXdzLnB1c2goZHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkpXG4gICAgfSlcbiAgICByZXR1cm4gZHJhZ2dhYmxlc1xuICB9XG59XG5cbmNsYXNzIEZsb2F0TGVmdFN0cmF0ZWd5IGV4dGVuZHMgQmFzaWNTdHJhdGVneSB7XG4gIGNvbnN0cnVjdG9yKHJlY3RhbmdsZSwgb3B0aW9ucz17fSkge1xuICAgIHN1cGVyKHJlY3RhbmdsZSwgb3B0aW9ucylcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHJlbW92YWJsZTogdHJ1ZVxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0aGlzLnJhZGl1cyA9IG9wdGlvbnMucmFkaXVzIHx8IDgwXG5cbiAgICB0aGlzLnBhZGRpbmdUb3BMZWZ0ID0gb3B0aW9ucy5wYWRkaW5nVG9wTGVmdCB8fCBuZXcgUG9pbnQoMCwgMClcbiAgICB0aGlzLnBhZGRpbmdCb3R0b21SaWdodCA9IG9wdGlvbnMucGFkZGluZ0JvdHRvbVJpZ2h0IHx8IG5ldyBQb2ludCgwLCAwKVxuICAgIHRoaXMueUdhcEJldHdlZW5EcmFnZ2FibGVzID0gb3B0aW9ucy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgfHwgMFxuXG4gICAgdGhpcy5nZXREaXN0YW5jZSA9IG9wdGlvbnMuZ2V0RGlzdGFuY2UgfHwgZ2V0RGlzdGFuY2VcbiAgICB0aGlzLmdldFBvc2l0aW9uID0gb3B0aW9ucy5nZXRQb3NpdGlvbiB8fCAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnBvc2l0aW9uKVxuICB9XG5cbiAgcG9zaXRpb25pbmcocmVjdGFuZ2xlTGlzdCwgX2luZGV4ZXNPZk5ld3MpIHtcbiAgICBjb25zdCBib3VuZFJlY3QgPSB0aGlzLmJvdW5kUmVjdFxuICAgIGNvbnN0IHJlY3RQMiA9IGJvdW5kUmVjdC5nZXRQMigpXG4gICAgbGV0IGJvdW5kYXJ5UG9pbnRzID0gW2JvdW5kUmVjdC5wb3NpdGlvbl1cblxuICAgIHJlY3RhbmdsZUxpc3QuZm9yRWFjaCgocmVjdCwgcmVjdEluZGV4KSA9PiB7XG4gICAgICBsZXQgcG9zaXRpb24sIGlzVmFsaWQgPSBmYWxzZVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib3VuZGFyeVBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBwb3NpdGlvbiA9IG5ldyBQb2ludChcbiAgICAgICAgICBib3VuZGFyeVBvaW50c1tpXS54ICsgdGhpcy5wYWRkaW5nVG9wTGVmdC54LFxuICAgICAgICAgIGkgPiAwID8gKGJvdW5kYXJ5UG9pbnRzW2kgLSAxXS55ICsgdGhpcy55R2FwQmV0d2VlbkRyYWdnYWJsZXMpIDogKGJvdW5kUmVjdC5wb3NpdGlvbi55ICsgdGhpcy5wYWRkaW5nVG9wTGVmdC55KVxuICAgICAgICApXG5cbiAgICAgICAgaXNWYWxpZCA9IChwb3NpdGlvbi54ICsgcmVjdC5zaXplLnggPCByZWN0UDIueClcblxuICAgICAgICBpZiAoaXNWYWxpZCkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICAgIHBvc2l0aW9uID0gbmV3IFBvaW50KFxuICAgICAgICAgIGJvdW5kUmVjdC5wb3NpdGlvbi54ICsgdGhpcy5wYWRkaW5nVG9wTGVmdC54LFxuICAgICAgICAgIGJvdW5kYXJ5UG9pbnRzW2JvdW5kYXJ5UG9pbnRzLmxlbmd0aCAtIDFdLnkgKyAocmVjdEluZGV4ID4gMCA/IHRoaXMueUdhcEJldHdlZW5EcmFnZ2FibGVzIDogdGhpcy5wYWRkaW5nVG9wTGVmdC55KVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHJlY3QucG9zaXRpb24gPSBwb3NpdGlvblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZW1vdmFibGUgJiYgcmVjdC5nZXRQMygpLnkgPiBib3VuZFJlY3QuZ2V0UDMoKS55KSB7XG4gICAgICAgIHJlY3QucmVtb3ZhYmxlID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBib3VuZGFyeVBvaW50cyA9IGFkZFBvaW50VG9Cb3VuZFBvaW50cyhib3VuZGFyeVBvaW50cywgcmVjdC5nZXRQMygpLmFkZCh0aGlzLnBhZGRpbmdCb3R0b21SaWdodCkpXG4gICAgfSlcbiAgICByZXR1cm4gcmVjdGFuZ2xlTGlzdFxuICB9XG5cbiAgc29ydGluZyhvZGxEcmFnZ2FibGVzTGlzdCwgbmV3RHJhZ2dhYmxlcywgaW5kZXhPZk5ld3MpIHtcbiAgICBjb25zdCBuZXdMaXN0ID0gb2RsRHJhZ2dhYmxlc0xpc3QuY29uY2F0KClcbiAgICBjb25zdCBsaXN0T2xkUG9zaXRpb24gPSBvZGxEcmFnZ2FibGVzTGlzdC5tYXAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLmdldFBvc2l0aW9uKCkpXG4gICAgbmV3RHJhZ2dhYmxlcy5mb3JFYWNoKChuZXdEcmFnZ2FibGUpID0+IHtcbiAgICAgIGxldCBpbmRleCA9IGluZGV4T2ZOZWFyZXN0UG9pbnQobGlzdE9sZFBvc2l0aW9uLCB0aGlzLmdldFBvc2l0aW9uKG5ld0RyYWdnYWJsZSksIHRoaXMucmFkaXVzLCB0aGlzLmdldERpc3RhbmNlKVxuICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICBpbmRleCA9IG5ld0xpc3QubGVuZ3RoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbmRleCA9IG5ld0xpc3QuaW5kZXhPZihvZGxEcmFnZ2FibGVzTGlzdFtpbmRleF0pXG4gICAgICB9XG4gICAgICBuZXdMaXN0LnNwbGljZShpbmRleCwgMCwgbmV3RHJhZ2dhYmxlKVxuICAgIH0pXG4gICAgbmV3RHJhZ2dhYmxlcy5mb3JFYWNoKChuZXdEcmFnZ2FibGUpID0+IHtcbiAgICAgIGluZGV4T2ZOZXdzLnB1c2gobmV3TGlzdC5pbmRleE9mKG5ld0RyYWdnYWJsZSkpXG4gICAgfSlcbiAgICByZXR1cm4gbmV3TGlzdFxuICB9XG59XG5cbmNsYXNzIEZsb2F0UmlnaHRTdHJhdGVneSBleHRlbmRzIEZsb2F0TGVmdFN0cmF0ZWd5IHtcbiAgY29uc3RydWN0b3IocmVjdGFuZ2xlLCBvcHRpb25zPXt9KSB7XG4gICAgc3VwZXIocmVjdGFuZ2xlLCBvcHRpb25zKVxuXG4gICAgdGhpcy5wYWRkaW5nVG9wUmlnaHQgPSBvcHRpb25zLnBhZGRpbmdUb3BSaWdodCB8fCBuZXcgUG9pbnQoNSwgNSlcbiAgICB0aGlzLnBhZGRpbmdCb3R0b21MZWZ0ID0gb3B0aW9ucy5wYWRkaW5nQm90dG9tTGVmdCB8fCBuZXcgUG9pbnQoMCwgMClcbiAgICB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyA9IG9wdGlvbnMueUdhcEJldHdlZW5EcmFnZ2FibGVzIHx8IDBcblxuICAgIHRoaXMucGFkZGluZ0JvdHRvbU5lZ0xlZnQgPSBuZXcgUG9pbnQoLXRoaXMucGFkZGluZ0JvdHRvbUxlZnQueCwgdGhpcy5wYWRkaW5nQm90dG9tTGVmdC55KVxuICB9XG5cbiAgcG9zaXRpb25pbmcocmVjdGFuZ2xlTGlzdCwgX2luZGV4ZXNPZk5ld3MpIHtcbiAgICBjb25zdCBib3VuZFJlY3QgPSB0aGlzLmJvdW5kUmVjdFxuICAgIGxldCBib3VuZGFyeVBvaW50cyA9IFtib3VuZFJlY3QuZ2V0UDIoKV1cblxuICAgIHJlY3RhbmdsZUxpc3QuZm9yRWFjaCgocmVjdCwgcmVjdEluZGV4KSA9PiB7XG4gICAgICBsZXQgcG9zaXRpb24sIGlzVmFsaWQgPSBmYWxzZVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib3VuZGFyeVBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBwb3NpdGlvbiA9IG5ldyBQb2ludChcbiAgICAgICAgICBib3VuZGFyeVBvaW50c1tpXS54IC0gcmVjdC5zaXplLnggLSB0aGlzLnBhZGRpbmdUb3BSaWdodC54LFxuICAgICAgICAgIGkgPiAwID8gKGJvdW5kYXJ5UG9pbnRzW2kgLSAxXS55ICsgdGhpcy55R2FwQmV0d2VlbkRyYWdnYWJsZXMpIDogKGJvdW5kUmVjdC5wb3NpdGlvbi55ICsgdGhpcy5wYWRkaW5nVG9wUmlnaHQueSlcbiAgICAgICAgKVxuXG4gICAgICAgIGlzVmFsaWQgPSAocG9zaXRpb24ueCA+IHJlY3QucG9zaXRpb24ueClcbiAgICAgICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgcG9zaXRpb24gPSBuZXcgUG9pbnQoXG4gICAgICAgICAgYm91bmRSZWN0LmdldFAyKCkueCAgLSByZWN0LnNpemUueCAtIHRoaXMucGFkZGluZ1RvcFJpZ2h0LngsXG4gICAgICAgICAgYm91bmRhcnlQb2ludHNbYm91bmRhcnlQb2ludHMubGVuZ3RoIC0gMV0ueSArIChyZWN0SW5kZXggPiAwID8gdGhpcy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgOiB0aGlzLnBhZGRpbmdUb3BSaWdodC55KVxuICAgICAgICApXG4gICAgICB9XG4gICAgICByZWN0LnBvc2l0aW9uID0gcG9zaXRpb25cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucmVtb3ZhYmxlICYmIHJlY3QuZ2V0UDQoKS55ID4gYm91bmRSZWN0LmdldFA0KCkueSkge1xuICAgICAgICByZWN0LnJlbW92YWJsZSA9IHRydWVcbiAgICAgIH1cbiAgICAgIGJvdW5kYXJ5UG9pbnRzID0gYWRkUG9pbnRUb0JvdW5kUG9pbnRzKGJvdW5kYXJ5UG9pbnRzLCByZWN0LmdldFA0KCkuYWRkKHRoaXMucGFkZGluZ0JvdHRvbU5lZ0xlZnQpLCB0cnVlKVxuICAgIH0pXG4gICAgcmV0dXJuIHJlY3RhbmdsZUxpc3RcbiAgfVxufVxuXG5leHBvcnQgeyBOb3RDcm9zc2luZ1N0cmF0ZWd5LCBGbG9hdExlZnRTdHJhdGVneSwgRmxvYXRSaWdodFN0cmF0ZWd5IH1cbiIsImltcG9ydCByYW5nZSBmcm9tICcuL3V0aWxzL3JhbmdlLmpzJ1xuaW1wb3J0IHJlbW92ZUl0ZW0gZnJvbSAnLi91dGlscy9yZW1vdmUtYXJyYXktaXRlbSdcbmltcG9ydCBnZXREZWZhdWx0UGFyZW50IGZyb20gJy4vdXRpbHMvZ2V0LWRlZmF1bHQtcGFyZW50J1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50RW1pdHRlcidcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSAnLi9nZW9tZXRyeS9yZWN0YW5nbGUnXG5pbXBvcnQgeyB0cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5IH0gZnJvbSAnLi9nZW9tZXRyeS9kaXN0YW5jZXMnXG5pbXBvcnQgeyBzY29wZXMsIGRlZmF1bHRTY29wZSB9IGZyb20gJy4vc2NvcGUnXG5cbmltcG9ydCB7IEZsb2F0TGVmdFN0cmF0ZWd5IH0gZnJvbSAnLi9wb3NpdGlvbmluZydcblxuY29uc3QgYWRkVG9EZWZhdWx0U2NvcGUgPSBmdW5jdGlvbih0YXJnZXQpIHtcbiAgZGVmYXVsdFNjb3BlLmFkZFRhcmdldCh0YXJnZXQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhcmdldCBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGRyYWdnYWJsZXMsIG9wdGlvbnMgPSB7fSkge1xuICAgIHN1cGVyKHVuZGVmaW5lZCwgb3B0aW9ucylcbiAgICBjb25zdCB0YXJnZXQgPSB0aGlzXG4gICAgY29uc3QgcGFyZW50ID0gb3B0aW9ucy5wYXJlbnQgfHwgZ2V0RGVmYXVsdFBhcmVudChlbGVtZW50KVxuXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICB0aW1lRW5kOiAyMDAsXG4gICAgICB0aW1lRXhjYW5nZTogNDAwLFxuICAgICAgcGFyZW50OiBwYXJlbnRcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGhpcy5wb3NpdGlvbmluZ1N0cmF0ZWd5ID0gb3B0aW9ucy5zdHJhdGVneSB8fCBuZXcgRmxvYXRMZWZ0U3RyYXRlZ3koXG4gICAgICB0aGlzLmdldFJlY3RhbmdsZS5iaW5kKHRoaXMpLFxuICAgICAge1xuICAgICAgICByYWRpdXM6IDgwLFxuICAgICAgICBnZXREaXN0YW5jZTogdHJhbnNmb3JtZWRTcGFjZURpc3RhbmNlRmFjdG9yeSh7IHg6IDEsIHk6IDQgfSksXG4gICAgICAgIHJlbW92YWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIClcblxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgICBkcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnRhcmdldHMucHVzaCh0YXJnZXQpKVxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZXNcblxuICAgIFRhcmdldC5lbWl0dGVyLmVtaXQoJ3RhcmdldDpjcmVhdGUnLCB0aGlzKVxuXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIHBvc2l0aW9uaW5nIChkcmFnZ2FibGVzLCBpbmRleGVzT2ZOZXcpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbmluZ1N0cmF0ZWd5LnBvc2l0aW9uaW5nKGRyYWdnYWJsZXMsIGluZGV4ZXNPZk5ldylcbiAgfVxuXG4gIHNvcnRpbmcgKG9sZERyYWdnYWJsZXMsIG5ld0RyYWdnYWJsZXMsIGluZGV4T2ZOZXdzKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25pbmdTdHJhdGVneS5zb3J0aW5nKG9sZERyYWdnYWJsZXMsIG5ld0RyYWdnYWJsZXMsIGluZGV4T2ZOZXdzKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBsZXQgcmVjdGFuZ2xlcywgaW5kZXhlc09mTmV3XG5cbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcyA9IHRoaXMuZHJhZ2dhYmxlcy5maWx0ZXIoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgbGV0IGVsZW1lbnQgPSBkcmFnZ2FibGUuZWxlbWVudC5wYXJlbnROb2RlXG4gICAgICB3aGlsZSAoZWxlbWVudCkge1xuICAgICAgICBpZiAoZWxlbWVudCA9PT0gdGhpcy5lbGVtZW50KSB7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlXG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9KVxuXG4gICAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmxlbmd0aCkge1xuICAgICAgaW5kZXhlc09mTmV3ID0gcmFuZ2UodGhpcy5pbm5lckRyYWdnYWJsZXMubGVuZ3RoKVxuICAgICAgcmVjdGFuZ2xlcyA9IHRoaXMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgICAgfSksIGluZGV4ZXNPZk5ldylcbiAgICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgaW5kZXhlc09mTmV3KVxuICAgICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB0aGlzLmVtaXQoJ3RhcmdldDphZGQnLCBkcmFnZ2FibGUpKVxuICAgIH1cbiAgfVxuXG4gIGdldFJlY3RhbmdsZSgpIHtcbiAgICByZXR1cm4gUmVjdGFuZ2xlLmZyb21FbGVtZW50KFxuICAgICAgdGhpcy5lbGVtZW50LFxuICAgICAgdGhpcy5vcHRpb25zLnBhcmVudCxcbiAgICAgIHRoaXMub3B0aW9ucy5pc0NvbnRlbnRCb3hTaXplLFxuICAgICAgdHJ1ZVxuICAgIClcbiAgfVxuXG4gIGNhdGNoRHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuY2F0Y2hEcmFnZ2FibGUpIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuY2F0Y2hEcmFnZ2FibGUodGhpcywgZHJhZ2dhYmxlKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0YXJnZXRSZWN0YW5nbGUgPSB0aGlzLmdldFJlY3RhbmdsZSgpXG4gICAgICBjb25zdCBkcmFnZ2FibGVTcXVhcmUgPSBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKCkuZ2V0U3F1YXJlKClcblxuICAgICAgcmV0dXJuIGRyYWdnYWJsZVNxdWFyZSA8IHRhcmdldFJlY3RhbmdsZS5nZXRTcXVhcmUoKVxuICAgICAgICAgICAgICAmJiB0YXJnZXRSZWN0YW5nbGUuaW5jbHVkZVBvaW50KGRyYWdnYWJsZS5nZXRDZW50ZXIoKSlcbiAgICB9XG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRSZWN0YW5nbGUoKS5wb3NpdGlvblxuICB9XG5cbiAgZ2V0U2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRSZWN0YW5nbGUoKS5zaXplXG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHNjb3Blcy5mb3JFYWNoKChzY29wZSkgPT4gcmVtb3ZlSXRlbShzY29wZS50YXJnZXRzLCB0aGlzKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgW10pXG4gICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBbXSwgMClcbiAgfVxuXG4gIG9uRW5kKGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IG5ld0RyYWdnYWJsZXNJbmRleCA9IFtdXG4gICAgY29uc3QgaW5jbHVkZVBvaW50ID0gdGhpcy5nZXRSZWN0YW5nbGUoKS5pbmNsdWRlUG9pbnQoZHJhZ2dhYmxlLmdldFBvc2l0aW9uKCkpXG5cbiAgICBpZiAoIWluY2x1ZGVQb2ludCkge1xuICAgICAgaWYgKHRoaXMuZ2V0UmVjdGFuZ2xlKCkuaW5jbHVkZVBvaW50KGRyYWdnYWJsZS5nZXRDZW50ZXIoKSkpIHtcbiAgICAgICAgZHJhZ2dhYmxlLnBvc2l0aW9uID0gZHJhZ2dhYmxlLmdldENlbnRlcigpLmNsb25lKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuZW1pdCgndGFyZ2V0OmJlZm9yZUFkZCcsIGRyYWdnYWJsZSlcblxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzID0gdGhpcy5zb3J0aW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLCBbZHJhZ2dhYmxlXSwgbmV3RHJhZ2dhYmxlc0luZGV4KVxuICAgIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgfSksIG5ld0RyYWdnYWJsZXNJbmRleClcblxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgbmV3RHJhZ2dhYmxlc0luZGV4KVxuICAgIGlmICh0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkgIT09IC0xKSB7XG4gICAgICB0aGlzLmFkZFJlbW92ZU9uTW92ZShkcmFnZ2FibGUpXG4gICAgfVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBzZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXcsIHRpbWUpIHtcbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5zbGljZSgwKS5mb3JFYWNoKChkcmFnZ2FibGUsIGkpID0+IHtcbiAgICAgIGNvbnN0IHJlY3QgPSByZWN0YW5nbGVzW2ldLFxuICAgICAgICB0aW1lRW5kID0gdGltZSB8fCB0aW1lID09PSAwID8gdGltZSA6IGluZGV4ZXNPZk5ldy5pbmRleE9mKGkpICE9PSAtMSA/IHRoaXMub3B0aW9ucy50aW1lRW5kIDogdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlXG5cbiAgICAgIGlmIChyZWN0LnJlbW92YWJsZSkge1xuICAgICAgICBkcmFnZ2FibGUubW92ZShkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uLCB0aW1lRW5kLCB0cnVlLCB0cnVlKVxuICAgICAgICByZW1vdmVJdGVtKHRoaXMuaW5uZXJEcmFnZ2FibGVzLCBkcmFnZ2FibGUpXG4gICAgICAgIHRoaXMuZW1pdCgndGFyZ2V0OnJlbW92ZScsIGRyYWdnYWJsZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRyYWdnYWJsZS5tb3ZlKHJlY3QucG9zaXRpb24sIHRpbWVFbmQsIHRydWUsIHRydWUpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGFkZChkcmFnZ2FibGUsIHRpbWUpIHtcbiAgICBjb25zdCBuZXdEcmFnZ2FibGVzSW5kZXggPSB0aGlzLmlubmVyRHJhZ2dhYmxlcy5sZW5ndGhcblxuICAgIHRoaXMuZW1pdCgndGFyZ2V0OmJlZm9yZUFkZCcsIGRyYWdnYWJsZSlcblxuICAgIHRoaXMucHVzaElubmVyRHJhZ2dhYmxlKGRyYWdnYWJsZSlcbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBuZXdEcmFnZ2FibGVzSW5kZXgsIGRyYWdnYWJsZSlcblxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgW25ld0RyYWdnYWJsZXNJbmRleF0sIHRpbWUgfHwgMClcbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMSkge1xuICAgICAgdGhpcy5hZGRSZW1vdmVPbk1vdmUoZHJhZ2dhYmxlKVxuICAgIH1cbiAgfVxuXG4gIHB1c2hJbm5lckRyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpPT09LTEpIHtcbiAgICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxuICAgIH1cbiAgfVxuXG4gIGFkZFJlbW92ZU9uTW92ZShkcmFnZ2FibGUpIHtcbiAgICBkcmFnZ2FibGUub24oJ2RyYWc6bW92ZScsIHRoaXMucmVtb3ZlSGFuZGxlciA9ICgpID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlKGRyYWdnYWJsZSlcbiAgICB9KVxuXG4gICAgdGhpcy5lbWl0KCd0YXJnZXQ6YWRkJywgZHJhZ2dhYmxlKVxuICB9XG5cbiAgcmVtb3ZlKGRyYWdnYWJsZSkge1xuICAgIGRyYWdnYWJsZS51bnN1YnNjcmliZSgnZHJhZzptb3ZlJywgdGhpcy5yZW1vdmVIYW5kbGVyKVxuXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSlcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5zcGxpY2UoaW5kZXgsIDEpXG5cbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBbXSlcblxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgW10pXG4gICAgdGhpcy5lbWl0KCd0YXJnZXQ6cmVtb3ZlJywgZHJhZ2dhYmxlKVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUubW92ZShkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uLCAwLCB0cnVlLCB0cnVlKVxuICAgICAgdGhpcy5lbWl0KCd0YXJnZXQ6cmVtb3ZlJywgZHJhZ2dhYmxlKVxuICAgIH0pXG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMgPSBbXVxuICB9XG5cbiAgZ2V0U29ydGVkRHJhZ2dhYmxlcygpIHtcbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5zbGljZSgpXG4gIH1cbn1cblxuVGFyZ2V0LmVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKFRhcmdldClcblRhcmdldC5lbWl0dGVyLm9uKCd0YXJnZXQ6Y3JlYXRlJywgYWRkVG9EZWZhdWx0U2NvcGUpXG4iLCJpbXBvcnQgcmVtb3ZlSXRlbSBmcm9tICcuL3V0aWxzL3JlbW92ZS1hcnJheS1pdGVtJ1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50RW1pdHRlcidcbmltcG9ydCBEcmFnZ2FibGUgZnJvbSAnLi9kcmFnZ2FibGUnXG5pbXBvcnQgVGFyZ2V0IGZyb20gJy4vdGFyZ2V0J1xuXG5jb25zdCBzY29wZXMgPSBbXVxuXG5jbGFzcyBTY29wZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKGRyYWdnYWJsZXMsIHRhcmdldHMsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcih1bmRlZmluZWQsIG9wdGlvbnMpXG4gICAgc2NvcGVzLmZvckVhY2goKHNjb3BlKSA9PiB7XG4gICAgICBpZiAoZHJhZ2dhYmxlcykge1xuICAgICAgICBkcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgICAgIHJlbW92ZUl0ZW0oc2NvcGUuZHJhZ2dhYmxlcywgZHJhZ2dhYmxlKVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICBpZiAodGFyZ2V0cykge1xuICAgICAgICB0YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4ge1xuICAgICAgICAgIHJlbW92ZUl0ZW0oc2NvcGUudGFyZ2V0cywgdGFyZ2V0KVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLmRyYWdnYWJsZXMgPSBkcmFnZ2FibGVzIHx8IFtdXG4gICAgdGhpcy50YXJnZXRzID0gdGFyZ2V0cyB8fCBbXVxuICAgIHNjb3Blcy5wdXNoKHRoaXMpXG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgdGltZUVuZDogKG9wdGlvbnMudGltZUVuZCkgfHwgNDAwXG4gICAgfVxuXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLmRyYWdFbmRBY3Rpb24gPSAoKSA9PiB0aGlzLm9uRW5kKGRyYWdnYWJsZSlcbiAgICB9KVxuICB9XG5cbiAgYWRkRHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5wdXNoKGRyYWdnYWJsZSlcbiAgICBkcmFnZ2FibGUuZHJhZ0VuZEFjdGlvbiA9ICgpID0+IHRoaXMub25FbmQoZHJhZ2dhYmxlKVxuICB9XG5cbiAgYWRkVGFyZ2V0KHRhcmdldCkge1xuICAgIHRoaXMudGFyZ2V0cy5wdXNoKHRhcmdldClcbiAgfVxuXG4gIG9uRW5kKGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IHNob3RUYXJnZXRzID0gdGhpcy50YXJnZXRzLmZpbHRlcigodGFyZ2V0KSA9PiB7XG4gICAgICByZXR1cm4gdGFyZ2V0LmRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMVxuICAgIH0pLmZpbHRlcigodGFyZ2V0KSA9PiB7XG4gICAgICByZXR1cm4gdGFyZ2V0LmNhdGNoRHJhZ2dhYmxlKGRyYWdnYWJsZSlcbiAgICB9KS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICByZXR1cm4gYS5nZXRSZWN0YW5nbGUoKS5nZXRTcXVhcmUoKSAtIGIuZ2V0UmVjdGFuZ2xlKCkuZ2V0U3F1YXJlKClcbiAgICB9KVxuXG4gICAgaWYgKHNob3RUYXJnZXRzLmxlbmd0aCkge1xuICAgICAgc2hvdFRhcmdldHNbMF0ub25FbmQoZHJhZ2dhYmxlKVxuICAgIH0gZWxzZSBpZiAoZHJhZ2dhYmxlLnRhcmdldHMubGVuZ3RoKSB7XG4gICAgICBkcmFnZ2FibGUucGluUG9zaXRpb24oZHJhZ2dhYmxlLmluaXRpYWxQb3NpdGlvbiwgdGhpcy5vcHRpb25zLnRpbWVFbmQpXG4gICAgfVxuXG4gICAgdGhpcy5lbWl0KCdzY29wZTpjaGFuZ2UnKVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy50YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4gdGFyZ2V0LnJlc2V0KCkpXG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5yZWZyZXNoKCkpXG4gICAgdGhpcy50YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4gdGFyZ2V0LnJlZnJlc2goKSlcbiAgfVxuXG4gIGdldCBwb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0cy5tYXAoKHRhcmdldCkgPT4ge1xuICAgICAgcmV0dXJuIHRhcmdldC5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHRoaXMuZHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkpXG4gICAgfSlcbiAgfVxuXG4gIHNldCBwb3NpdGlvbnMocG9zaXRpb25zKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9ICd3cm9uZyBhcnJheSBsZW5ndGgnXG4gICAgaWYgKHBvc2l0aW9ucy5sZW5ndGggPT09IHRoaXMudGFyZ2V0cy5sZW5ndGgpIHtcbiAgICAgIHRoaXMudGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHRhcmdldC5yZXNldCgpKVxuXG4gICAgICBwb3NpdGlvbnMuZm9yRWFjaCgodGFyZ2V0SW5kZXhlcywgaSkgPT4ge1xuICAgICAgICB0YXJnZXRJbmRleGVzLmZvckVhY2goKGluZGV4KSA9PiB7XG4gICAgICAgICAgdGhpcy50YXJnZXRzW2ldLmFkZCh0aGlzLmRyYWdnYWJsZXNbaW5kZXhdKVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbWVzc2FnZVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBkZWZhdWx0U2NvcGUgPSBuZXcgU2NvcGUoKVxuXG5mdW5jdGlvbiBzY29wZShmbikge1xuICBjb25zdCBjdXJyZW50U2NvcGUgPSBuZXcgU2NvcGUoKVxuXG4gIGNvbnN0IGFkZERyYWdnYWJsZVRvU2NvcGUgPSBmdW5jdGlvbihkcmFnZ2FibGUpIHtcbiAgICBjdXJyZW50U2NvcGUuYWRkRHJhZ2dhYmxlKGRyYWdnYWJsZSlcbiAgICBEcmFnZ2FibGUuZW1pdHRlci5pbnRlcnJ1cHQoKVxuICB9XG5cbiAgY29uc3QgYWRkVGFyZ2V0VG9TY29wZSA9IGZ1bmN0aW9uKHRhcmdldCkge1xuICAgIGN1cnJlbnRTY29wZS5hZGRUYXJnZXQodGFyZ2V0KVxuICAgIERyYWdnYWJsZS5lbWl0dGVyLmludGVycnVwdCgpXG4gIH1cblxuICBEcmFnZ2FibGUuZW1pdHRlci5wcmVwZW5kT24oJ2RyYWdnYWJsZTpjcmVhdGUnLCBhZGREcmFnZ2FibGVUb1Njb3BlKVxuICBUYXJnZXQuZW1pdHRlci5wcmVwZW5kT24oJ3RhcmdldDpjcmVhdGUnLCBhZGRUYXJnZXRUb1Njb3BlKVxuICBmbi5jYWxsKClcbiAgRHJhZ2dhYmxlLmVtaXR0ZXIudW5zdWJzY3JpYmUoJ2RyYWdnYWJsZTpjcmVhdGUnLCBhZGREcmFnZ2FibGVUb1Njb3BlKVxuICBUYXJnZXQuZW1pdHRlci51bnN1YnNjcmliZSgndGFyZ2V0OmNyZWF0ZScsIGFkZFRhcmdldFRvU2NvcGUpXG4gIHJldHVybiBjdXJyZW50U2NvcGVcbn1cblxuZXhwb3J0IHsgc2NvcGVzLCBkZWZhdWx0U2NvcGUsIFNjb3BlLCBzY29wZSB9XG4iLCJmdW5jdGlvbiBjaGVja1N1cHBvcnRQYXNzaXZlRXZlbnRzKCkge1xuICBsZXQgcGFzc2l2ZVN1cHBvcnRlZCA9IGZhbHNlXG5cbiAgdHJ5IHtcbiAgICBjb25zdCBvcHRpb25zID0gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAncGFzc2l2ZScsIHtcbiAgICAgIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIChwYXNzaXZlU3VwcG9ydGVkID0gdHJ1ZSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3QnLCBvcHRpb25zLCBvcHRpb25zKVxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0ZXN0Jywgb3B0aW9ucywgb3B0aW9ucylcbiAgfSBjYXRjaCAoX2Vycikge1xuICAgIHBhc3NpdmVTdXBwb3J0ZWQgPSBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIHBhc3NpdmVTdXBwb3J0ZWRcbn1cblxuZXhwb3J0IGNvbnN0IGlzU3VwcG9ydFBhc3NpdmVFdmVudHMgPSBjaGVja1N1cHBvcnRQYXNzaXZlRXZlbnRzKClcblxuZnVuY3Rpb24gZXZlbnRPcHRpb25zKG9wdGlvbnMsIGZhbGxiYWNrID0gZmFsc2UpIHtcbiAgcmV0dXJuIGlzU3VwcG9ydFBhc3NpdmVFdmVudHMgPyBvcHRpb25zIDogZmFsbGJhY2tcbn1cblxuZXhwb3J0IHsgZXZlbnRPcHRpb25zIH1cblxuZXhwb3J0IGRlZmF1bHQgaXNTdXBwb3J0UGFzc2l2ZUV2ZW50c1xuIiwiaW1wb3J0IHsgYWRkQ2xhc3MsIHJlbW92ZUNsYXNzIH0gZnJvbSAnLi91dGlscy9jbGFzc2VzJ1xuaW1wb3J0IGdldERlZmF1bHRQYXJlbnQgZnJvbSAnLi91dGlscy9nZXQtZGVmYXVsdC1wYXJlbnQnXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnRFbWl0dGVyJ1xuaW1wb3J0IGdldFN0eWxlUHJvcGVydHkgZnJvbSAnZGVzYW5kcm8tZ2V0LXN0eWxlLXByb3BlcnR5J1xuaW1wb3J0IHsgQm91bmRUb0VsZW1lbnQgfSBmcm9tICcuL2JvdW5kaW5nJ1xuaW1wb3J0IFBvaW50IGZyb20gJy4vZ2VvbWV0cnkvcG9pbnQnXG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gJy4vZ2VvbWV0cnkvcmVjdGFuZ2xlJ1xuaW1wb3J0IHsgZGVmYXVsdFNjb3BlIH0gZnJvbSAnLi9zY29wZSdcbmltcG9ydCBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzIGZyb20gJy4vdXRpbHMvaXMtc3VwcG9ydC1wYXNzaXZlLWV2ZW50cydcblxuY29uc3QgaXNUb3VjaCA9ICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvd1xuY29uc3QgbW91c2VFdmVudHMgPSB7XG4gIHN0YXJ0OiAnbW91c2Vkb3duJyxcbiAgbW92ZTogJ21vdXNlbW92ZScsXG4gIGVuZDogJ21vdXNldXAnXG59XG5jb25zdCB0b3VjaEV2ZW50cyA9IHtcbiAgc3RhcnQ6ICd0b3VjaHN0YXJ0JyxcbiAgbW92ZTogJ3RvdWNobW92ZScsXG4gIGVuZDogJ3RvdWNoZW5kJ1xufVxuY29uc3QgZHJhZ2dhYmxlcyA9IFtdXG5jb25zdCB0cmFuc2Zvcm1Qcm9wZXJ0eSA9IGdldFN0eWxlUHJvcGVydHkoJ3RyYW5zZm9ybScpXG5jb25zdCB0cmFuc2l0aW9uUHJvcGVydHkgPSBnZXRTdHlsZVByb3BlcnR5KCd0cmFuc2l0aW9uJylcblxuZnVuY3Rpb24gZ2V0VG91Y2hCeUlEKGVsZW1lbnQsIHRvdWNoSWQpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50LmNoYW5nZWRUb3VjaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGVsZW1lbnQuY2hhbmdlZFRvdWNoZXNbaV0uaWRlbnRpZmllciA9PT0gdG91Y2hJZCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQuY2hhbmdlZFRvdWNoZXNbaV1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmZ1bmN0aW9uIHByZXZlbnREb3VibGVJbml0KGRyYWdnYWJsZSkge1xuICBjb25zdCBtZXNzYWdlID0gXCJmb3IgdGhpcyBlbGVtZW50IERyYWdlZS5EcmFnZ2FibGUgaXMgYWxyZWFkeSBleGlzdCwgZG9uJ3QgY3JlYXRlIGl0IHR3aWNlIFwiXG4gIGlmIChkcmFnZ2FibGVzLnNvbWUoKGV4aXN0aW5nKSA9PiBkcmFnZ2FibGUuZWxlbWVudCA9PT0gZXhpc3RpbmcuZWxlbWVudCkpIHtcbiAgICB0aHJvdyBtZXNzYWdlXG4gIH1cbiAgZHJhZ2dhYmxlcy5wdXNoKGRyYWdnYWJsZSlcbn1cblxuZnVuY3Rpb24gYWRkVG9EZWZhdWx0U2NvcGUoZHJhZ2dhYmxlKSB7XG4gIGRlZmF1bHRTY29wZS5hZGREcmFnZ2FibGUoZHJhZ2dhYmxlKVxufVxuXG5mdW5jdGlvbiBjb3B5U3R5bGVzKHNvdXJjZSwgZGVzdGluYXRpb24pIHtcbiAgY29uc3QgY3MgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShzb3VyY2UpXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGtleSA9IGNzW2ldXG4gICAgaWYgKChrZXkuaW5kZXhPZigndHJhbnNpdGlvbicpIDwgMCkgJiYgKGtleS5pbmRleE9mKCd0cmFuc2Zvcm0nKSA8IDApKSB7XG4gICAgICBkZXN0aW5hdGlvbi5zdHlsZVtrZXldID0gY3Nba2V5XVxuICAgIH1cbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc291cmNlLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgY29weVN0eWxlcyhzb3VyY2UuY2hpbGRyZW5baV0sIGRlc3RpbmF0aW9uLmNoaWxkcmVuW2ldKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYWdnYWJsZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcih1bmRlZmluZWQsIG9wdGlvbnMpXG4gICAgdGhpcy50YXJnZXRzID0gW11cbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIHByZXZlbnREb3VibGVJbml0KHRoaXMpXG4gICAgRHJhZ2dhYmxlLmVtaXR0ZXIuZW1pdCgnZHJhZ2dhYmxlOmNyZWF0ZScsIHRoaXMpXG4gICAgdGhpcy5fZW5hYmxlID0gdHJ1ZVxuICAgIHRoaXMuc3RhcnRQb3NpdGlvbmluZygpXG4gICAgdGhpcy5zdGFydExpc3RlbmluZygpXG4gIH1cblxuICBzdGFydFBvc2l0aW9uaW5nKCkge1xuICAgIHRoaXMuX3NldERlZmF1bHRUcmFuc2l0aW9uKClcbiAgICB0aGlzLm9mZnNldCA9IFBvaW50LmVsZW1lbnRPZmZzZXQodGhpcy5lbGVtZW50LCB0aGlzLnBhcmVudCwgdHJ1ZSlcbiAgICB0aGlzLnBpbm5lZFBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICB0aGlzLmluaXRpYWxQb3NpdGlvbiA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbiB8fCB0aGlzLm9mZnNldFxuXG4gICAgdGhpcy5waW5Qb3NpdGlvbih0aGlzLmluaXRpYWxQb3NpdGlvbilcblxuICAgIGlmICh0aGlzLmJvdW5kaW5nLnJlZnJlc2gpIHtcbiAgICAgIHRoaXMuYm91bmRpbmcucmVmcmVzaCgpXG4gICAgfVxuICB9XG5cbiAgc3RhcnRMaXN0ZW5pbmcoKSB7XG4gICAgdGhpcy5fZHJhZ1N0YXJ0ID0gKGV2ZW50KSA9PiB0aGlzLmRyYWdTdGFydChldmVudClcbiAgICB0aGlzLl9kcmFnTW92ZSA9IChldmVudCkgPT4gdGhpcy5kcmFnTW92ZShldmVudClcbiAgICB0aGlzLl9kcmFnRW5kID0gKGV2ZW50KSA9PiB0aGlzLmRyYWdFbmQoZXZlbnQpXG4gICAgdGhpcy5fbmF0aXZlRHJhZ1N0YXJ0ID0gKGV2ZW50KSA9PiB0aGlzLm5hdGl2ZURyYWdTdGFydChldmVudClcbiAgICB0aGlzLl9uYXRpdmVEcmFnT3ZlciA9IChldmVudCkgPT4gdGhpcy5uYXRpdmVEcmFnT3ZlcihldmVudClcbiAgICB0aGlzLl9uYXRpdmVEcmFnRW5kID0gKGV2ZW50KSA9PiB0aGlzLm5hdGl2ZURyYWdFbmQoZXZlbnQpXG4gICAgdGhpcy5fbmF0aXZlRHJvcCA9IChldmVudCkgPT4gdGhpcy5uYXRpdmVEcm9wKGV2ZW50KVxuICAgIHRoaXMuX3Njcm9sbCA9IChldmVudCkgPT4gdGhpcy5vblNjcm9sbChldmVudClcblxuICAgIHRoaXMuaGFuZGxlci5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQsIGlzU3VwcG9ydFBhc3NpdmVFdmVudHMgPyB7IHBhc3NpdmU6IGZhbHNlIH0gOiBmYWxzZSlcbiAgICB0aGlzLmhhbmRsZXIuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0LCBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzID8geyBwYXNzaXZlOiBmYWxzZSB9IDogZmFsc2UpXG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIHRoaXMuX25hdGl2ZURyYWdTdGFydClcbiAgfVxuXG4gIGdldFNpemUoKSB7XG4gICAgcmV0dXJuIFBvaW50LmVsZW1lbnRTaXplKHRoaXMuZWxlbWVudCwgdGhpcy5vcHRpb25zLmlzQ29udGVudEJveFNpemUpXG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5vZmZzZXQuYWRkKHRoaXMuX3RyYW5zZm9ybVBvc2l0aW9uIHx8IG5ldyBQb2ludCgwLCAwKSlcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvblxuICB9XG5cbiAgZ2V0Q2VudGVyKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLmdldFNpemUoKS5tdWx0KDAuNSkpXG4gIH1cblxuICBfc2V0RGVmYXVsdFRyYW5zaXRpb24gKCkge1xuICAgIHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5lbGVtZW50KVt0cmFuc2l0aW9uUHJvcGVydHldXG4gIH1cblxuICBfc2V0VHJhbnNpdGlvbih0aW1lKSB7XG4gICAgbGV0IHRyYW5zaXRpb24gPSB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNpdGlvblByb3BlcnR5XVxuICAgIGNvbnN0IHRyYW5zaXRpb25Dc3MgPSBgdHJhbnNmb3JtICR7dGltZX1tc2BcblxuICAgIGlmICghL3RyYW5zZm9ybSBcXGQqbT9zLy50ZXN0KHRyYW5zaXRpb24pKSB7XG4gICAgICBpZiAodHJhbnNpdGlvbikge1xuICAgICAgICB0cmFuc2l0aW9uICs9IGAsICR7dHJhbnNpdGlvbkNzc31gXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cmFuc2l0aW9uID0gdHJhbnNpdGlvbkNzc1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0cmFuc2l0aW9uID0gdHJhbnNpdGlvbi5yZXBsYWNlKC90cmFuc2Zvcm0gXFxkKm0/cy8sIHRyYW5zaXRpb25Dc3MpXG4gICAgfVxuXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV0gPSB0cmFuc2l0aW9uXG4gIH1cblxuICBfc2V0VHJhbnNsYXRlKHBvaW50KSB7XG4gICAgdGhpcy5fdHJhbnNmb3JtUG9zaXRpb24gPSBwb2ludFxuXG4gICAgbGV0IHRyYW5zZm9ybSA9IHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wZXJ0eV1cbiAgICBsZXQgdHJhbnNsYXRlQ3NzID0gYCB0cmFuc2xhdGUzZCgke3BvaW50Lnh9cHgsICR7cG9pbnQueX1weCwgMHB4KWBcblxuICAgIGNvbnN0IHVhID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnRcbiAgICBjb25zdCBtc2llID0gdWEuaW5kZXhPZignTVNJRSAnKSAhPT0gLTFcblxuICAgIGlmIChtc2llKSB7XG4gICAgICB0cmFuc2xhdGVDc3MgPSBgIHRyYW5zbGF0ZSgke3BvaW50Lnh9cHgsJHtwb2ludC55fXB4KWBcbiAgICAgIGlmICghL3RyYW5zbGF0ZVxcKFteKV0rXFwpLy50ZXN0KHRyYW5zZm9ybSkpIHtcbiAgICAgICAgdHJhbnNmb3JtICs9IHRyYW5zbGF0ZUNzc1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJhbnNmb3JtID0gdHJhbnNmb3JtLnJlcGxhY2UoL3RyYW5zbGF0ZVxcKFteKV0rXFwpLywgdHJhbnNsYXRlQ3NzKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIS90cmFuc2xhdGUzZFxcKFteKV0rXFwpLy50ZXN0KHRyYW5zZm9ybSkpIHtcbiAgICAgICAgdHJhbnNmb3JtICs9IHRyYW5zbGF0ZUNzc1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJhbnNmb3JtID0gdHJhbnNmb3JtLnJlcGxhY2UoL3RyYW5zbGF0ZTNkXFwoW14pXStcXCkvLCB0cmFuc2xhdGVDc3MpXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BlcnR5XSA9IHRyYW5zZm9ybVxuICB9XG5cbiAgbW92ZShwb2ludCwgdGltZT0wLCBpc1NpbGVudD1mYWxzZSkge1xuICAgIHBvaW50ID0gcG9pbnQuY2xvbmUoKVxuXG4gICAgdGhpcy5kZXRlcm1pbmVEaXJlY3Rpb24ocG9pbnQpXG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvaW50XG5cbiAgICB0aGlzLl9zZXRUcmFuc2l0aW9uKHRpbWUpXG4gICAgdGhpcy5fc2V0VHJhbnNsYXRlKHBvaW50LnN1Yih0aGlzLm9mZnNldCkpXG5cbiAgICBpZiAoIWlzU2lsZW50KSB7XG4gICAgICB0aGlzLmVtaXQoJ2RyYWc6bW92ZScpXG4gICAgfVxuICB9XG5cbiAgcGluUG9zaXRpb24ocG9pbnQsIHRpbWU9MCwgc2lsZW50PXRydWUpIHtcbiAgICB0aGlzLnBpbm5lZFBvc2l0aW9uID0gcG9pbnQuY2xvbmUoKVxuICAgIHRoaXMubW92ZSh0aGlzLnBpbm5lZFBvc2l0aW9uLCB0aW1lLCBzaWxlbnQpXG4gIH1cblxuICByZXNldFBvc2l0aW9uVG9Jbml0aWFsICgpIHtcbiAgICB0aGlzLnBpblBvc2l0aW9uKHRoaXMuaW5pdGlhbFBvc2l0aW9uKVxuICB9XG5cbiAgcmVmcmVzaFBvc2l0aW9uICgpIHtcbiAgICB0aGlzLnNldFBvc2l0aW9uKHRoaXMuZ2V0UG9zaXRpb24oKSlcbiAgfVxuXG4gIHNldFBvc2l0aW9uKHBvaW50KSB7XG4gICAgcG9pbnQgPSBwb2ludC5jbG9uZSgpXG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvaW50XG4gICAgdGhpcy5fc2V0VHJhbnNpdGlvbigwKVxuICAgIHRoaXMuX3NldFRyYW5zbGF0ZShwb2ludC5zdWIodGhpcy5vZmZzZXQpKVxuICB9XG5cbiAgZGV0ZXJtaW5lRGlyZWN0aW9uKHBvaW50KSB7XG4gICAgdGhpcy5sZWZ0RGlyZWN0aW9uID0gKHRoaXMucG9zaXRpb24ueCA8IHBvaW50LngpXG4gICAgdGhpcy5yaWdodERpcmVjdGlvbiA9ICh0aGlzLnBvc2l0aW9uLnggPiBwb2ludC54KVxuICAgIHRoaXMudXBEaXJlY3Rpb24gPSAodGhpcy5wb3NpdGlvbi55ID4gcG9pbnQueSlcbiAgICB0aGlzLmRvd25EaXJlY3Rpb24gPSAodGhpcy5wb3NpdGlvbi55IDwgcG9pbnQueSlcbiAgfVxuXG4gIGRyYWdTdGFydChldmVudCkge1xuICAgIHRoaXMuY3VycmVudEV2ZW50ID0gZXZlbnRcbiAgICBpZiAoIXRoaXMuX2VuYWJsZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaXNUb3VjaEV2ZW50ID0gKGlzVG91Y2ggJiYgKGV2ZW50IGluc3RhbmNlb2Ygd2luZG93LlRvdWNoRXZlbnQpKVxuXG4gICAgdGhpcy50b3VjaFBvaW50ID0gdGhpcy5fc3RhcnRUb3VjaFBvaW50ID0gbmV3IFBvaW50KFxuICAgICAgaXNUb3VjaEV2ZW50ID8gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVggOiBldmVudC5jbGllbnRYLFxuICAgICAgaXNUb3VjaEV2ZW50ID8gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVkgOiBldmVudC5jbGllbnRZXG4gICAgKVxuXG4gICAgdGhpcy5fc3RhcnRQb3NpdGlvbiA9IHRoaXMuZ2V0UG9zaXRpb24oKVxuICAgIGlmIChpc1RvdWNoRXZlbnQpIHtcbiAgICAgIHRoaXMuX3RvdWNoSWQgPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5pZGVudGlmaWVyXG4gICAgfVxuXG4gICAgdGhpcy5fc3RhcnRTY3JvbGxQb2ludCA9IG5ldyBQb2ludCh3aW5kb3cuc2Nyb2xsWCwgd2luZG93LnNjcm9sbFkpXG5cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGlmIChldmVudC50YXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElucHV0RWxlbWVudCB8fFxuICAgICAgICAgIGV2ZW50LnRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSW5wdXRFbGVtZW50KSB7XG4gICAgICBldmVudC50YXJnZXQuZm9jdXMoKVxuICAgIH1cblxuICAgIGlmICghKHRoaXMubmF0aXZlRHJhZ0FuZERyb3AgfHxcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSW5wdXRFbGVtZW50IHx8XG4gICAgICAgICAgICBldmVudC50YXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElucHV0RWxlbWVudCkpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB9XG5cbiAgICBpZiAodGhpcy5uYXRpdmVEcmFnQW5kRHJvcCkge1xuICAgICAgY29uc3QgaXNTYWZhcmkgPSAvdmVyc2lvblxcLyhcXGQrKS4rP3NhZmFyaS9pLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpXG4gICAgICBpZiAoKGlzVG91Y2hFdmVudCAmJiB0aGlzLmVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcE9uVG91Y2gpIHx8XG4gICAgICAgICAgICAgaXNTYWZhcmkgfHxcbiAgICAgICAgICAgICB0aGlzLmVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcEZvckFsbCkge1xuICAgICAgICB0aGlzLmVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcChldmVudClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5kcmFnZ2FibGUgPSB0cnVlXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9uYXRpdmVEcmFnRW5kLCBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzID8geyBwYXNzaXZlOiBmYWxzZSB9IDogZmFsc2UpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUsIGlzU3VwcG9ydFBhc3NpdmVFdmVudHMgPyB7IHBhc3NpdmU6IGZhbHNlIH0gOiBmYWxzZSlcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUsIGlzU3VwcG9ydFBhc3NpdmVFdmVudHMgPyB7IHBhc3NpdmU6IGZhbHNlIH0gOiBmYWxzZSlcblxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQsIGlzU3VwcG9ydFBhc3NpdmVFdmVudHMgPyB7IHBhc3NpdmU6IGZhbHNlIH0gOiBmYWxzZSlcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kLCBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzID8geyBwYXNzaXZlOiBmYWxzZSB9IDogZmFsc2UpXG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX3Njcm9sbClcblxuICAgIHRoaXMuaXNEcmFnZ2luZyA9IHRydWVcbiAgICB0aGlzLmVtaXQoJ2RyYWc6c3RhcnQnKVxuICAgIGFkZENsYXNzKHRoaXMuZWxlbWVudCwgJ2RyYWdlZS1hY3RpdmUnKVxuICAgIHRoaXMuZW1pdCgnZHJhZzptb3ZlJylcbiAgfVxuXG4gIHN0b3BEcmFnZ2luZygpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCB0aGlzLl9uYXRpdmVEcmFnT3ZlcilcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcm9wJywgdGhpcy5fbmF0aXZlRHJvcClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcm9wJywgdGhpcy5fbmF0aXZlRHJvcClcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fc2Nyb2xsKVxuICAgIHRoaXMuZWxlbWVudC5kcmFnZ2FibGUgPSBmYWxzZVxuICAgIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlXG4gICAgcmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50LCAnZHJhZ2VlLWFjdGl2ZScpXG4gIH1cblxuICBkcmFnTW92ZShldmVudCkge1xuICAgIHRoaXMuY3VycmVudEV2ZW50ID0gZXZlbnRcbiAgICBsZXQgdG91Y2hcblxuICAgIGNvbnN0IGlzVG91Y2hFdmVudCA9IChpc1RvdWNoICYmIChldmVudCBpbnN0YW5jZW9mIHdpbmRvdy5Ub3VjaEV2ZW50KSlcbiAgICBpZiAoaXNUb3VjaEV2ZW50KSB7XG4gICAgICB0b3VjaCA9IGdldFRvdWNoQnlJRChldmVudCwgdGhpcy5fdG91Y2hJZClcblxuICAgICAgaWYgKCF0b3VjaCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB0aGlzLnRvdWNoUG9pbnQgPSBuZXcgUG9pbnQoXG4gICAgICBpc1RvdWNoRXZlbnQgPyB0b3VjaC5wYWdlWCA6IGV2ZW50LmNsaWVudFgsXG4gICAgICBpc1RvdWNoRXZlbnQgPyB0b3VjaC5wYWdlWSA6IGV2ZW50LmNsaWVudFlcbiAgICApXG5cbiAgICBsZXQgcG9pbnQgPSB0aGlzLl9zdGFydFBvc2l0aW9uLmFkZCh0aGlzLnRvdWNoUG9pbnQuc3ViKHRoaXMuX3N0YXJ0VG91Y2hQb2ludCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy5zY3JvbGxQb2ludC5zdWIodGhpcy5fc3RhcnRTY3JvbGxQb2ludCkpXG5cbiAgICBwb2ludCA9IHRoaXMuYm91bmRpbmcuYm91bmQocG9pbnQsIHRoaXMuZ2V0U2l6ZSgpKVxuICAgIHRoaXMubW92ZShwb2ludClcbiAgfVxuXG4gIGRyYWdFbmQoZXZlbnQpIHtcbiAgICBjb25zdCBpc1RvdWNoRXZlbnQgPSAoaXNUb3VjaCAmJiAoZXZlbnQgaW5zdGFuY2VvZiB3aW5kb3cuVG91Y2hFdmVudCkpXG5cbiAgICBpZiAoaXNUb3VjaEV2ZW50ICYmICFnZXRUb3VjaEJ5SUQoZXZlbnQsIHRoaXMuX3RvdWNoSWQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB0aGlzLmRyYWdFbmRBY3Rpb24oKVxuICAgIHRoaXMuZW1pdCgnZHJhZzplbmQnKVxuXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG5cbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fc2Nyb2xsKVxuXG4gICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2VcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkcmFnZ2FibGUnKVxuICAgIHJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudCwgJ2RyYWdlZS1hY3RpdmUnKVxuICB9XG5cbiAgb25TY3JvbGwoX2V2ZW50KSB7XG4gICAgbGV0IHBvaW50ID0gdGhpcy5fc3RhcnRQb3NpdGlvbi5hZGQodGhpcy50b3VjaFBvaW50LnN1Yih0aGlzLl9zdGFydFRvdWNoUG9pbnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMuc2Nyb2xsUG9pbnQuc3ViKHRoaXMuX3N0YXJ0U2Nyb2xsUG9pbnQpKVxuXG4gICAgcG9pbnQgPSB0aGlzLmJvdW5kaW5nLmJvdW5kKHBvaW50LCB0aGlzLmdldFNpemUoKSlcbiAgICBpZiAoIXRoaXMubmF0aXZlRHJhZ0FuZERyb3ApIHtcbiAgICAgIHRoaXMubW92ZShwb2ludClcbiAgICB9XG4gIH1cblxuICBuYXRpdmVEcmFnU3RhcnQoZXZlbnQpIHtcbiAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dCcsICdGaXJlRm94IGZpeCcpXG4gICAgZXZlbnQuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSAnbW92ZSdcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIHRoaXMuX25hdGl2ZURyYWdPdmVyKVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzLl9uYXRpdmVEcm9wKVxuICB9XG5cbiAgbmF0aXZlRHJhZ092ZXIoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZXZlbnQuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnbW92ZSdcbiAgICBhZGRDbGFzcyh0aGlzLmVsZW1lbnQsICdkcmFnZWUtcGxhY2Vob2xkZXInKVxuICAgIHRoaXMuY3VycmVudEV2ZW50ID0gZXZlbnRcbiAgICBpZiAoZXZlbnQuY2xpZW50WCA9PT0gMCAmJiBldmVudC5jbGllbnRZID09PSAwKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLnRvdWNoUG9pbnQgPSBuZXcgUG9pbnQoZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSlcbiAgICBsZXQgcG9pbnQgPSB0aGlzLl9zdGFydFBvc2l0aW9uLmFkZCh0aGlzLnRvdWNoUG9pbnQuc3ViKHRoaXMuX3N0YXJ0VG91Y2hQb2ludCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy5zY3JvbGxQb2ludC5zdWIodGhpcy5fc3RhcnRTY3JvbGxQb2ludCkpXG4gICAgcG9pbnQgPSB0aGlzLmJvdW5kaW5nLmJvdW5kKHBvaW50LCB0aGlzLmdldFNpemUoKSlcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9pbnRcbiAgICB0aGlzLmVtaXQoJ2RyYWc6bW92ZScpXG4gIH1cblxuICBuYXRpdmVEcmFnRW5kKF9ldmVudCkge1xuICAgIHJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudCwgJ2RyYWdlZS1wbGFjZWhvbGRlcicpXG4gICAgdGhpcy5kcmFnRW5kQWN0aW9uKClcbiAgICB0aGlzLmVtaXQoJ2RyYWc6ZW5kJylcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIHRoaXMuX25hdGl2ZURyYWdPdmVyKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzLl9uYXRpdmVEcm9wKVxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9zY3JvbGwpXG4gICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2VcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkcmFnZ2FibGUnKVxuICAgIHJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudCwgJ2RyYWdlZS1hY3RpdmUnKVxuICB9XG5cbiAgbmF0aXZlRHJvcChldmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wKGV2ZW50KSB7XG4gICAgY29uc3QgcGFyZW50UmVjdCA9IHRoaXMucGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgY29uc3QgY2xvbmVkRWxlbWVudCA9IHRoaXMuZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSlcbiAgICBjbG9uZWRFbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BlcnR5XSA9ICcnXG4gICAgY29weVN0eWxlcyh0aGlzLmVsZW1lbnQsIGNsb25lZEVsZW1lbnQpXG4gICAgY2xvbmVkRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSdcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNsb25lZEVsZW1lbnQpXG4gICAgYWRkQ2xhc3ModGhpcy5lbGVtZW50LCAnZHJhZ2VlLXBsYWNlaG9sZGVyJylcblxuICAgIGNvbnN0IGVtdWxhdGlvbkRyYWdnYWJsZSA9IG5ldyBEcmFnZ2FibGUoY2xvbmVkRWxlbWVudCwge1xuICAgICAgcGFyZW50OiBkb2N1bWVudC5ib2R5LFxuICAgICAgYm91bmRpbmc6IHtcbiAgICAgICAgYm91bmQocG9pbnQpIHsgcmV0dXJuIHBvaW50IH1cbiAgICAgIH0sXG4gICAgICBvbjoge1xuICAgICAgICAnZHJhZzptb3ZlJzogKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHBhcmVudFJlY3RQb2ludCA9IG5ldyBQb2ludChwYXJlbnRSZWN0LmxlZnQsIHBhcmVudFJlY3QudG9wKVxuICAgICAgICAgIHRoaXMucG9zaXRpb24gPSBlbXVsYXRpb25EcmFnZ2FibGUucG9zaXRpb24uc3ViKHBhcmVudFJlY3RQb2ludClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN1Yih0aGlzLl9zdGFydFNjcm9sbFBvaW50KVxuICAgICAgICAgIHRoaXMuZW1pdCgnZHJhZzptb3ZlJylcbiAgICAgICAgfSxcbiAgICAgICAgJ2RyYWc6ZW5kJzogKCkgPT4ge1xuICAgICAgICAgIGVtdWxhdGlvbkRyYWdnYWJsZS5kZXN0cm95KClcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGNsb25lZEVsZW1lbnQpXG4gICAgICAgICAgcmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50LCAnZHJhZ2VlLXBsYWNlaG9sZGVyJylcbiAgICAgICAgICByZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnQsICdkcmFnZWUtYWN0aXZlJylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBwYXJlbnRSZWN0UG9pbnQgPSBuZXcgUG9pbnQocGFyZW50UmVjdC5sZWZ0LCBwYXJlbnRSZWN0LnRvcClcbiAgICBlbXVsYXRpb25EcmFnZ2FibGUuX3N0YXJ0U2Nyb2xsUG9pbnQgPSB0aGlzLl9zdGFydFNjcm9sbFBvaW50XG5cbiAgICBlbXVsYXRpb25EcmFnZ2FibGUubW92ZShcbiAgICAgIHRoaXMucGlubmVkUG9zaXRpb24uYWRkKHBhcmVudFJlY3RQb2ludCkuYWRkKG5ldyBQb2ludCh3aW5kb3cuc2Nyb2xsWCwgd2luZG93LnNjcm9sbFkpKVxuICAgIClcblxuICAgIGVtdWxhdGlvbkRyYWdnYWJsZS5kcmFnU3RhcnQoZXZlbnQpXG5cbiAgICAvLyBuZXcgUG9pbnQoXG4gICAgLy8gICB0aGlzLnBpbm5lZFBvc2l0aW9uLnggKyBwYXJlbnRSZWN0LmxlZnQgKyB3aW5kb3cuc2Nyb2xsWCxcbiAgICAvLyAgIHRoaXMucGlubmVkUG9zaXRpb24ueSArIHBhcmVudFJlY3QudG9wICsgd2luZG93LnNjcm9sbFlcbiAgICAvLyApKVxuICB9XG5cbiAgZHJhZ0VuZEFjdGlvbigpIHtcbiAgICB0aGlzLnBpblBvc2l0aW9uKHRoaXMucG9zaXRpb24pXG4gIH1cblxuICBnZXRSZWN0YW5nbGUoKSB7XG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUodGhpcy5wb3NpdGlvbiwgdGhpcy5nZXRTaXplKCkpXG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIHRoaXMuZ2V0U2l6ZSh0cnVlKVxuICAgIGlmICh0aGlzLmJvdW5kaW5nLnJlZnJlc2gpIHtcbiAgICAgIHRoaXMuYm91bmRpbmcucmVmcmVzaCgpXG4gICAgfVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmhhbmRsZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0KVxuICAgIHRoaXMuaGFuZGxlci5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQpXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIHRoaXMuX25hdGl2ZURyYWdTdGFydClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCB0aGlzLl9uYXRpdmVEcmFnT3ZlcilcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcm9wJywgdGhpcy5fbmF0aXZlRHJvcClcbiAgICB0aGlzLnJlc2V0RW1pdHRlcigpXG5cbiAgICBjb25zdCBpbmRleCA9IGRyYWdnYWJsZXMuaW5kZXhPZih0aGlzKVxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICBkcmFnZ2FibGVzLnNwbGljZShpbmRleCwgMSlcbiAgICB9XG4gIH1cblxuICBnZXQgcGFyZW50KCkge1xuICAgIHJldHVybiAodGhpcy5fcGFyZW50ID0gdGhpcy5fcGFyZW50IHx8IHRoaXMub3B0aW9ucy5wYXJlbnQgfHwgZ2V0RGVmYXVsdFBhcmVudCh0aGlzLmVsZW1lbnQpKVxuICB9XG5cbiAgZ2V0IGJvdW5kaW5nKCkge1xuICAgIHJldHVybiAodGhpcy5fYm91bmRpbmcgPSB0aGlzLl9ib3VuZGluZyB8fCB0aGlzLm9wdGlvbnMuYm91bmRpbmcgfHwgbmV3IEJvdW5kVG9FbGVtZW50KHRoaXMucGFyZW50LCB0aGlzLnBhcmVudCkpXG4gIH1cblxuICBnZXQgaGFuZGxlcigpIHtcbiAgICBpZiAoIXRoaXMuX2hhbmRsZXIpIHtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmhhbmRsZXIgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZXIgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLm9wdGlvbnMuaGFuZGxlcikgfHwgdGhpcy5lbGVtZW50XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9oYW5kbGVyID0gdGhpcy5vcHRpb25zLmhhbmRsZXIgfHwgdGhpcy5lbGVtZW50XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2hhbmRsZXJcbiAgfVxuXG4gIGdldCBuYXRpdmVEcmFnQW5kRHJvcCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLm5hdGl2ZURyYWdBbmREcm9wIHx8IGZhbHNlXG4gIH1cblxuICBnZXQgZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wT25Ub3VjaCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcE9uVG91Y2ggfHwgdHJ1ZVxuICB9XG5cbiAgZ2V0IGVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcEZvckFsbCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcEZvckFsbCB8fCBmYWxzZVxuICB9XG5cbiAgZ2V0IHNjcm9sbFBvaW50KCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQod2luZG93LnNjcm9sbFgsIHdpbmRvdy5zY3JvbGxZKVxuICB9XG5cbiAgZ2V0IGVuYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlXG4gIH1cblxuICBzZXQgZW5hYmxlKGVuYWJsZSkge1xuICAgIGlmIChlbmFibGUpIHtcbiAgICAgIHJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudCwgJ2RyYWdlZS1kaXNhYmxlJylcbiAgICB9IGVsc2Uge1xuICAgICAgYWRkQ2xhc3ModGhpcy5lbGVtZW50LCAnZHJhZ2VlLWRpc2FibGUnKVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9lbmFibGUgPSBlbmFibGVcbiAgfVxufVxuXG5EcmFnZ2FibGUuZW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXIoRHJhZ2dhYmxlKVxuRHJhZ2dhYmxlLmVtaXR0ZXIub24oJ2RyYWdnYWJsZTpjcmVhdGUnLCBhZGRUb0RlZmF1bHRTY29wZSlcbiIsImltcG9ydCByZW1vdmVJdGVtIGZyb20gJy4vdXRpbHMvcmVtb3ZlLWFycmF5LWl0ZW0nXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnRFbWl0dGVyJ1xuaW1wb3J0IHtcbiAgZ2V0RGlzdGFuY2UsXG4gIGluZGV4T2ZOZWFyZXN0UG9pbnRcbn0gZnJvbSAnLi9nZW9tZXRyeS9kaXN0YW5jZXMnXG5cbmltcG9ydCBEcmFnZ2FibGUgZnJvbSAnLi9kcmFnZ2FibGUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3QgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvcihkcmFnZ2FibGVzLCBvcHRpb25zPXt9KSB7XG4gICAgc3VwZXIodW5kZWZpbmVkLCBvcHRpb25zKVxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgdGltZUVuZDogMjAwLFxuICAgICAgdGltZUV4Y2FuZ2U6IDQwMCxcbiAgICAgIHJhZGl1czogMzBcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gZHJhZ2dhYmxlc1xuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuX2VuYWJsZSA9IHRydWVcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCh0aGlzLmluaXREcmFnZ2FibGUsIHRoaXMpXG4gIH1cblxuICBpbml0RHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIGRyYWdnYWJsZS5lbmFibGUgPSB0aGlzLl9lbmFibGVcbiAgICBkcmFnZ2FibGUub24oJ2RyYWc6bW92ZScsICgpID0+IHRoaXMub25Nb3ZlKGRyYWdnYWJsZSkpXG4gICAgZHJhZ2dhYmxlLmRyYWdFbmRBY3Rpb24gPSAoKSA9PiBkcmFnZ2FibGUucGluUG9zaXRpb24oZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uLCB0aGlzLm9wdGlvbnMudGltZUVuZClcbiAgfVxuXG4gIG9uTW92ZShkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBzb3J0ZWREcmFnZ2FibGVzID0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcbiAgICBjb25zdCBwaW5uZWRQb3NpdGlvbnMgPSBzb3J0ZWREcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24pXG5cbiAgICBjb25zdCBjdXJyZW50SW5kZXggPSBzb3J0ZWREcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKVxuICAgIGNvbnN0IHRhcmdldEluZGV4ID0gaW5kZXhPZk5lYXJlc3RQb2ludChwaW5uZWRQb3NpdGlvbnMsIGRyYWdnYWJsZS5wb3NpdGlvbiwgdGhpcy5vcHRpb25zLnJhZGl1cywgdGhpcy5kaXN0YW5jZUZ1bmMpXG5cbiAgICBpZiAodGFyZ2V0SW5kZXggIT09IC0xICYmIGN1cnJlbnRJbmRleCAhPT0gdGFyZ2V0SW5kZXgpIHtcbiAgICAgIGlmICh0YXJnZXRJbmRleCA8IGN1cnJlbnRJbmRleCkge1xuICAgICAgICBmb3IgKGxldCBpPXRhcmdldEluZGV4OyBpPGN1cnJlbnRJbmRleDsgaSsrKSB7XG4gICAgICAgICAgc29ydGVkRHJhZ2dhYmxlc1tpXS5waW5Qb3NpdGlvbihwaW5uZWRQb3NpdGlvbnNbaSsxXSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGxldCBpPWN1cnJlbnRJbmRleDsgaTx0YXJnZXRJbmRleDsgaSsrKSB7XG4gICAgICAgICAgc29ydGVkRHJhZ2dhYmxlc1tpKzFdLnBpblBvc2l0aW9uKHBpbm5lZFBvc2l0aW9uc1tpXSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChkcmFnZ2FibGUubmF0aXZlRHJhZ0FuZERyb3ApIHtcbiAgICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKHBpbm5lZFBvc2l0aW9uc1t0YXJnZXRJbmRleF0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24gPSBwaW5uZWRQb3NpdGlvbnNbdGFyZ2V0SW5kZXhdXG4gICAgICB9XG5cbiAgICAgIHRoaXMuZW1pdCgnbGlzdDpjaGFuZ2UnKVxuICAgIH1cbiAgfVxuXG4gIGdldEN1cnJlbnRQaW5uZWRQb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uLmNsb25lKCkpXG4gIH1cblxuICBnZXRTb3J0ZWREcmFnZ2FibGVzKCkge1xuICAgIHJldHVybiB0aGlzLmRyYWdnYWJsZXMuc29ydCh0aGlzLnNvcnRpbmcuYmluZCh0aGlzKSlcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5yZXNldFBvc2l0aW9uVG9Jbml0aWFsKCkpXG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5yZWZyZXNoKCkpXG4gIH1cblxuICBhZGQoZHJhZ2dhYmxlcykge1xuICAgIGlmICghKGRyYWdnYWJsZXMgaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICAgIGRyYWdnYWJsZXMgPSBbZHJhZ2dhYmxlc11cbiAgICB9XG4gICAgZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHRoaXMuaW5pdERyYWdnYWJsZShkcmFnZ2FibGUpKVxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IHRoaXMuZHJhZ2dhYmxlcy5jb25jYXQoZHJhZ2dhYmxlcylcbiAgfVxuXG4gIHJlbW92ZShkcmFnZ2FibGVzKSB7XG4gICAgY29uc3QgaW5pdGlhbFBvc2l0aW9ucyA9IHRoaXMuZHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLmluaXRpYWxQb3NpdGlvbilcbiAgICBjb25zdCBsaXN0ID0gW11cbiAgICBjb25zdCBzb3J0ZWREcmFnZ2FibGVzID0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcblxuICAgIGlmICghKGRyYWdnYWJsZXMgaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICAgIGRyYWdnYWJsZXMgPSBbZHJhZ2dhYmxlc11cbiAgICB9XG5cbiAgICBkcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLnJlc2V0T24oJ2RyYWc6ZW5kJylcbiAgICAgIGRyYWdnYWJsZS5yZXNldE9uKCdkcmFnOm1vdmUnKVxuICAgICAgcmVtb3ZlSXRlbSh0aGlzLmRyYWdnYWJsZXMsIGRyYWdnYWJsZSlcbiAgICB9KVxuXG4gICAgbGV0IGogPSAwXG4gICAgc29ydGVkRHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGlmICh0aGlzLmRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMSkge1xuICAgICAgICBpZiAoZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uICE9PSBpbml0aWFsUG9zaXRpb25zW2pdKSB7XG4gICAgICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKGluaXRpYWxQb3NpdGlvbnNbal0sIHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSlcbiAgICAgICAgfVxuICAgICAgICBkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uID0gaW5pdGlhbFBvc2l0aW9uc1tqXVxuICAgICAgICBqKytcbiAgICAgICAgbGlzdC5wdXNoKGRyYWdnYWJsZSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGxpc3RcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMucmVtb3ZlKHRoaXMuZHJhZ2dhYmxlcy5zbGljZSgpKVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUuZGVzdHJveSgpKVxuICB9XG5cbiAgc29ydGluZyhkcmFnZ2FibGVBLCBkcmFnZ2FibGVCKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5zb3J0aW5nKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLnNvcnRpbmcoZHJhZ2dhYmxlQSwgZHJhZ2dhYmxlQilcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGRyYWdnYWJsZUEucGlubmVkUG9zaXRpb24ueSA8IGRyYWdnYWJsZUIucGlubmVkUG9zaXRpb24ueSkgcmV0dXJuIC0xXG4gICAgICBpZiAoZHJhZ2dhYmxlQS5waW5uZWRQb3NpdGlvbi55ID4gZHJhZ2dhYmxlQi5waW5uZWRQb3NpdGlvbi55KSByZXR1cm4gMVxuICAgICAgaWYgKGRyYWdnYWJsZUEucGlubmVkUG9zaXRpb24ueCA8IGRyYWdnYWJsZUIucGlubmVkUG9zaXRpb24ueCkgcmV0dXJuIC0xXG4gICAgICBpZiAoZHJhZ2dhYmxlQS5waW5uZWRQb3NpdGlvbi54ID4gZHJhZ2dhYmxlQi5waW5uZWRQb3NpdGlvbi54KSByZXR1cm4gMVxuICAgICAgcmV0dXJuIDBcbiAgICB9XG4gIH1cblxuICBnZXQgZGlzdGFuY2VGdW5jKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZ2V0RGlzdGFuY2UgfHwgZ2V0RGlzdGFuY2VcbiAgfVxuXG4gIGdldCBwb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q3VycmVudFBpbm5lZFBvc2l0aW9ucygpXG4gIH1cblxuICBzZXQgcG9zaXRpb25zKHBvc2l0aW9ucykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSAnd3JvbmcgYXJyYXkgbGVuZ3RoJ1xuICAgIGlmIChwb3NpdGlvbnMubGVuZ3RoID09PSB0aGlzLmRyYWdnYWJsZXMubGVuZ3RoKSB7XG4gICAgICBwb3NpdGlvbnMuZm9yRWFjaCgocG9pbnQsIGkpID0+IHtcbiAgICAgICAgdGhpcy5kcmFnZ2FibGVzW2ldLnBpblBvc2l0aW9uKHBvaW50KVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbWVzc2FnZVxuICAgIH1cbiAgfVxuXG4gIGdldCBlbmFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZVxuICB9XG5cbiAgc2V0IGVuYWJsZShlbmFibGUpIHtcbiAgICB0aGlzLl9lbmFibGUgPSBlbmFibGVcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUuZW5hYmxlID0gZW5hYmxlXG4gICAgfSlcbiAgfVxuXG4gIHN0YXRpYyBmYWN0b3J5KHBhcmVudEVsZW1lbnQsIGVsZW1lbnRzLCBvcHRpb25zPXt9KSB7XG4gICAgY29uc3QgZHJhZ2dhYmxlcyA9IEFycmF5LmZyb20oZWxlbWVudHMpLm1hcCgoZWxlbWVudCkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBEcmFnZ2FibGUoZWxlbWVudCwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIHBhcmVudDogcGFyZW50RWxlbWVudFxuICAgICAgfSwgb3B0aW9ucy5kcmFnZ2FibGUgfHwge30pKVxuICAgIH0pXG4gICAgcmV0dXJuIG5ldyBMaXN0KGRyYWdnYWJsZXMsIG9wdGlvbnMubGlzdCB8fCB7fSlcbiAgfVxufVxuIiwiaW1wb3J0IExpc3QgZnJvbSAnLi9saXN0J1xuaW1wb3J0IHsgaW5kZXhPZk5lYXJlc3RQb2ludCwgZ2V0WURpZmZlcmVuY2UgfSBmcm9tICcuL2dlb21ldHJ5L2Rpc3RhbmNlcydcblxuaW1wb3J0IERyYWdnYWJsZSBmcm9tICcuL2RyYWdnYWJsZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnViYmxpbmdMaXN0IGV4dGVuZHMgTGlzdCB7XG4gIGNvbnN0cnVjdG9yKGRyYWdnYWJsZXMsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcihkcmFnZ2FibGVzLCBvcHRpb25zKVxuICB9XG5cbiAgaW5pdERyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICBkcmFnZ2FibGUub24oJ2RyYWc6c3RhcnQnLCAoKSA9PiB0aGlzLmF1dG9EZXRlY3RWZXJ0aWNhbEdhcChkcmFnZ2FibGUpKVxuICAgIHN1cGVyLmluaXREcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICB9XG5cbiAgYXV0b0RldGVjdFZlcnRpY2FsR2FwKCkge1xuICAgIGlmKHRoaXMuZHJhZ2dhYmxlcy5sZW5ndGggPj0gMikge1xuICAgICAgY29uc3Qgc29ydGVkID0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcblxuICAgICAgdGhpcy52ZXJ0aWNhbEdhcCA9IHNvcnRlZFsxXS5waW5uZWRQb3NpdGlvbi55IC0gc29ydGVkWzBdLnBpbm5lZFBvc2l0aW9uLnkgLSBzb3J0ZWRbMF0uZ2V0U2l6ZSgpLnlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy52ZXJ0aWNhbEdhcCA9IDBcbiAgICB9XG5cbiAgICBpZih0aGlzLmRyYWdnYWJsZXMubGVuZ3RoID49IDEpIHtcbiAgICAgIHRoaXMuc3RhcnRQb3NpdGlvbiA9IHRoaXMuZHJhZ2dhYmxlc1swXS5waW5uZWRQb3NpdGlvblxuICAgIH1cbiAgfVxuXG4gIG9uTW92ZShkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBzb3J0ZWREcmFnZ2FibGVzID0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcbiAgICBjb25zdCBwaW5uZWRQb3NpdGlvbnMgPSBzb3J0ZWREcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24pXG5cbiAgICBjb25zdCBjdXJyZW50SW5kZXggPSBzb3J0ZWREcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKVxuICAgIGNvbnN0IHRhcmdldEluZGV4ID0gaW5kZXhPZk5lYXJlc3RQb2ludChwaW5uZWRQb3NpdGlvbnMsIGRyYWdnYWJsZS5wb3NpdGlvbiwgdGhpcy5vcHRpb25zLnJhZGl1cywgdGhpcy5kaXN0YW5jZUZ1bmMpXG5cbiAgICBpZiAodGFyZ2V0SW5kZXggIT09IC0xICYmIGN1cnJlbnRJbmRleCAhPT0gdGFyZ2V0SW5kZXgpIHtcbiAgICAgIFtzb3J0ZWREcmFnZ2FibGVzW2N1cnJlbnRJbmRleF0sIHNvcnRlZERyYWdnYWJsZXNbdGFyZ2V0SW5kZXhdXSA9IFtzb3J0ZWREcmFnZ2FibGVzW3RhcmdldEluZGV4XSwgc29ydGVkRHJhZ2dhYmxlc1tjdXJyZW50SW5kZXhdXVxuICAgICAgdGhpcy5idWJsaW5nKHNvcnRlZERyYWdnYWJsZXMsIGRyYWdnYWJsZSlcbiAgICAgIHRoaXMuZW1pdCgnbGlzdDpjaGFuZ2UnKVxuICAgIH1cbiAgfVxuXG4gIGJ1Ymxpbmcoc29ydGVkRHJhZ2dhYmxlcywgY3VycmVudERyYWdnYWJsZSkge1xuICAgIGNvbnN0IGN1cnJlbnRQb3NpdGlvbiA9IHRoaXMuc3RhcnRQb3NpdGlvbi5jbG9uZSgpXG5cbiAgICBzb3J0ZWREcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSwgaW5kZXgpID0+IHtcbiAgICAgIGlmKCFkcmFnZ2FibGUucGlubmVkUG9zaXRpb24uY29tcGFyZShjdXJyZW50UG9zaXRpb24pKSB7XG4gICAgICAgIGlmKGRyYWdnYWJsZSA9PT0gY3VycmVudERyYWdnYWJsZSAmJiAhY3VycmVudERyYWdnYWJsZS5uYXRpdmVEcmFnQW5kRHJvcCkge1xuICAgICAgICAgIGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbiA9IGN1cnJlbnRQb3NpdGlvbi5jbG9uZSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKGN1cnJlbnRQb3NpdGlvbiwgKGRyYWdnYWJsZSA9PT0gY3VycmVudERyYWdnYWJsZSkgPyAwIDogdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGN1cnJlbnRQb3NpdGlvbi55ID0gY3VycmVudFBvc2l0aW9uLnkgKyBkcmFnZ2FibGUuZ2V0U2l6ZSgpLnkgKyB0aGlzLnZlcnRpY2FsR2FwXG4gICAgfSlcbiAgfVxuXG4gIGdldCBkaXN0YW5jZUZ1bmMoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5nZXREaXN0YW5jZSB8fCBnZXRZRGlmZmVyZW5jZVxuICB9XG5cbiAgc3RhdGljIGZhY3RvcnkocGFyZW50RWxlbWVudCwgZWxlbWVudHMsIG9wdGlvbnM9e30pIHtcbiAgICBjb25zdCBkcmFnZ2FibGVzID0gQXJyYXkuZnJvbShlbGVtZW50cykubWFwKChlbGVtZW50KSA9PiB7XG4gICAgICByZXR1cm4gbmV3IERyYWdnYWJsZShlbGVtZW50LCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgcGFyZW50OiBwYXJlbnRFbGVtZW50XG4gICAgICB9LCBvcHRpb25zLmRyYWdnYWJsZSB8fCB7fSkpXG4gICAgfSlcbiAgICByZXR1cm4gbmV3IEJ1YmJsaW5nTGlzdChkcmFnZ2FibGVzLCBvcHRpb25zLmxpc3QgfHwge30pXG4gIH1cbn1cbiIsImZ1bmN0aW9uIHNldFN0eWxlKGVsZW1lbnQsIHN0eWxlKSB7XG4gIHN0eWxlID0gc3R5bGUgfHwge31cbiAgbGV0IGNzc1RleHQgPSAnJ1xuICBmb3IgKGNvbnN0IGtleSBpbiBzdHlsZSkge1xuICAgIGlmIChzdHlsZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBjc3NUZXh0ICs9IGtleSArICc6ICcgKyBzdHlsZVtrZXldICsgJzsgJ1xuICAgIH1cbiAgfVxuXG4gIGVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IGNzc1RleHRcbn1cblxuZnVuY3Rpb24gYXBwZW5kRmlyc3RDaGlsZChlbGVtZW50LCBub2RlKSB7XG4gIGlmIChlbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICBlbGVtZW50Lmluc2VydEJlZm9yZShub2RlLCBlbGVtZW50LmZpcnN0Q2hpbGQpXG4gIH0gZWxzZSB7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChub2RlKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUNhbnZhcyhhcmVhLCByZWN0YWdsZSkge1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKVxuICBpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUoYXJlYSkucG9zaXRpb24gPT09ICdzdGF0aWMnKSB7XG4gICAgYXJlYS5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSdcbiAgfVxuXG4gIGNhbnZhcy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgcmVjdGFnbGUuc2l6ZS54ICsgJ3B4JylcbiAgY2FudmFzLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgcmVjdGFnbGUuc2l6ZS55ICsgJ3B4JylcbiAgc2V0U3R5bGUoY2FudmFzLCB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgbGVmdDogcmVjdGFnbGUucG9zaXRpb24ueSArICdweCcsXG4gICAgdG9wOiByZWN0YWdsZS5wb3NpdGlvbi55ICsgJ3B4JyxcbiAgICB3aWR0aDogcmVjdGFnbGUuc2l6ZS54ICsgJ3B4JyxcbiAgICBoZWlnaHQ6IHJlY3RhZ2xlLnNpemUueSArICdweCdcbiAgfSlcbiAgYXBwZW5kRmlyc3RDaGlsZChhcmVhLCBjYW52YXMpXG4gIHJldHVybiBjYW52YXNcbn1cbiIsImltcG9ydCBjcmVhdGVDYW52YXMgZnJvbSAnLi91dGlscy9jcmVhdGUtY2FudmFzJ1xuaW1wb3J0IFBvaW50IGZyb20gJy4vZ2VvbWV0cnkvcG9pbnQnXG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gJy4vZ2VvbWV0cnkvcmVjdGFuZ2xlJ1xuXG5pbXBvcnQgeyBnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0gfSBmcm9tICcuL2dlb21ldHJ5L2FuZ2xlcydcbmltcG9ydCB7IEJvdW5kVG9MaW5lIH0gZnJvbSAnLi9ib3VuZGluZydcbmltcG9ydCBEcmFnZ2FibGUgZnJvbSAnLi9kcmFnZ2FibGUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNwaWRlciB7XG4gIGNvbnN0cnVjdG9yKGFyZWEsIGVsZW1lbnRzLCBvcHRpb25zPXt9KSB7XG4gICAgY29uc3QgYXJlYVJlY3RhbmdsZSA9IFJlY3RhbmdsZS5mcm9tRWxlbWVudChhcmVhLCBhcmVhKVxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgYW5nbGU6IDAsXG4gICAgICBkQW5nbGU6IDIgKiBNYXRoLlBJIC8gZWxlbWVudHMubGVuZ3RoLFxuICAgICAgY2VudGVyOiBhcmVhUmVjdGFuZ2xlLmdldENlbnRlcigpLFxuICAgICAgc3RhcnRSYWRpdXM6IDUwLFxuICAgICAgZW5kUmFkaXVzOiBhcmVhUmVjdGFuZ2xlLmdldE1pblNpZGUoKSAvIDIsXG4gICAgICBsaW5lV2lkdGg6IDIsXG4gICAgICBzdHJva2VTdHlsZTogJyNmZjU1NzcnLFxuICAgICAgZmlsbFN0eWxlOiAncmdiYSgxNTAsMjU1LDUwLDAuOCknXG4gICAgfSwgb3B0aW9ucylcblxuICAgIHRoaXMuYXJlYSA9IGFyZWFcbiAgICB0aGlzLmFyZWFSZWN0YW5nbGUgPSBhcmVhUmVjdGFuZ2xlXG4gICAgdGhpcy5pbml0KGVsZW1lbnRzKVxuICB9XG5cbiAgaW5pdChlbGVtZW50cykge1xuICAgIHRoaXMuY2FudmFzID0gY3JlYXRlQ2FudmFzKHRoaXMuYXJlYSwgdGhpcy5hcmVhUmVjdGFuZ2xlKVxuICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJylcblxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGVsZW1lbnRzLm1hcCgoZWxlbWVudCwgaSkgPT4ge1xuICAgICAgY29uc3QgYW5nbGUgPSB0aGlzLm9wdGlvbnMuYW5nbGUgKyBpICogdGhpcy5vcHRpb25zLmRBbmdsZVxuICAgICAgY29uc3QgaGFsZlNpemUgPSBQb2ludC5lbGVtZW50U2l6ZShlbGVtZW50KS5tdWx0KDAuNSlcbiAgICAgIGNvbnN0IHN0YXJ0ID0gZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKGFuZ2xlLCB0aGlzLm9wdGlvbnMuc3RhcnRSYWRpdXMsIHRoaXMub3B0aW9ucy5jZW50ZXIpLnN1YihoYWxmU2l6ZSlcbiAgICAgIGNvbnN0IGVuZCA9IGdldFBvaW50RnJvbVJhZGlhbFN5c3RlbShhbmdsZSwgdGhpcy5vcHRpb25zLmVuZFJhZGl1cywgdGhpcy5vcHRpb25zLmNlbnRlcikuc3ViKGhhbGZTaXplKVxuXG4gICAgICByZXR1cm4gbmV3IERyYWdnYWJsZShlbGVtZW50LCB7XG4gICAgICAgIHBhcmVudDogdGhpcy5hcmVhLFxuICAgICAgICBib3VuZGluZzogbmV3IEJvdW5kVG9MaW5lKHN0YXJ0LCBlbmQpLFxuICAgICAgICBwb3NpdGlvbjogc3RhcnQsXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgJ2RyYWc6bW92ZSc6ICgpID0+IHRoaXMuZHJhdygpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcblxuICAgIHRoaXMuaXNJbml0ID0gdHJ1ZVxuICAgIHRoaXMuZHJhdygpXG4gIH1cblxuICBkcmF3KCkge1xuICAgIGlmICghdGhpcy5pc0luaXQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMuYXJlYVJlY3RhbmdsZS5zaXplLngsIHRoaXMuYXJlYVJlY3RhbmdsZS5zaXplLnkpXG4gICAgdGhpcy5jb250ZXh0LmJlZ2luUGF0aCgpXG5cbiAgICBsZXQgcG9pbnQgPSB0aGlzLmRyYWdnYWJsZXNbMF0uZ2V0Q2VudGVyKClcbiAgICB0aGlzLmNvbnRleHQubW92ZVRvKHBvaW50LngsIHBvaW50LnkpXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZHJhZ2dhYmxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgcG9pbnQgPSB0aGlzLmRyYWdnYWJsZXNbaV0uZ2V0Q2VudGVyKClcbiAgICAgIHRoaXMuY29udGV4dC5saW5lVG8ocG9pbnQueCwgcG9pbnQueSlcbiAgICB9XG4gICAgdGhpcy5jb250ZXh0LmNsb3NlUGF0aCgpXG4gICAgdGhpcy5jb250ZXh0LmxpbmVXaWR0aCA9IHRoaXMub3B0aW9ucy5saW5lV2lkdGhcbiAgICB0aGlzLmNvbnRleHQuc3Ryb2tlU3R5bGUgPSB0aGlzLm9wdGlvbnMuc3Ryb2tlU3R5bGVcbiAgICB0aGlzLmNvbnRleHQuc3Ryb2tlKClcbiAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5vcHRpb25zLmZpbGxTdHlsZVxuICAgIHRoaXMuY29udGV4dC5maWxsKClcbiAgfVxufVxuIiwiaW1wb3J0IERyYWdnYWJsZSBmcm9tICcuL2RyYWdnYWJsZSdcbmltcG9ydCB7IEJvdW5kVG9BcmMgfSBmcm9tICcuL2JvdW5kaW5nJ1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50RW1pdHRlcidcblxuaW1wb3J0IFJlY3RhbmdsZSBmcm9tICcuL2dlb21ldHJ5L3JlY3RhbmdsZSdcbmltcG9ydCB7XG4gIGdldFBvaW50RnJvbVJhZGlhbFN5c3RlbSxcbiAgZ2V0QW5nbGUsXG4gIG5vcm1hbGl6ZUFuZ2xlXG59IGZyb20gJy4vZ2VvbWV0cnkvYW5nbGVzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcmNTbGlkZXIgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvcihhcmVhLCBlbGVtZW50LCBvcHRpb25zPXt9KSB7XG4gICAgc3VwZXIodW5kZWZpbmVkLCBvcHRpb25zKVxuICAgIGNvbnN0IGFyZWFSZWN0YW5nbGUgPSBSZWN0YW5nbGUuZnJvbUVsZW1lbnQoYXJlYSwgYXJlYSlcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNlbnRlcjogYXJlYVJlY3RhbmdsZS5nZXRDZW50ZXIoKSxcbiAgICAgIHJhZGl1czogYXJlYVJlY3RhbmdsZS5nZXRNaW5TaWRlKCkgLyAyLFxuICAgICAgc3RhcnRBbmdsZTogTWF0aC5QSSxcbiAgICAgIGVuZEFuZ2xlOiAwLFxuICAgICAgYW5nbGVzOiBbTWF0aC5QSSwgLU1hdGguUEkgLyA0LCAwLCBNYXRoLlBJIC8gNCwgTWF0aC5QSSAvIDJdLFxuICAgICAgdGltZTogNTAwXG4gICAgfSwgb3B0aW9ucylcblxuICAgIHRoaXMuc2hpZnRlZENlbnRlciA9IHRoaXMub3B0aW9ucy5jZW50ZXJcbiAgICB0aGlzLmFyZWEgPSBhcmVhXG4gICAgdGhpcy5pbml0KGVsZW1lbnQpXG4gIH1cblxuICBpbml0KGVsZW1lbnQpIHtcbiAgICBjb25zdCBhbmdsZSA9IHRoaXMub3B0aW9ucy5zdGFydEFuZ2xlXG4gICAgY29uc3QgcG9zaXRpb24gPSBnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oXG4gICAgICBhbmdsZSxcbiAgICAgIHRoaXMub3B0aW9ucy5yYWRpdXMsXG4gICAgICB0aGlzLnNoaWZ0ZWRDZW50ZXJcbiAgICApXG5cbiAgICB0aGlzLmFuZ2xlID0gYW5nbGVcbiAgICB0aGlzLmRyYWdnYWJsZSA9IG5ldyBEcmFnZ2FibGUoZWxlbWVudCwge1xuICAgICAgcGFyZW50OiB0aGlzLmFyZWEsXG4gICAgICBib3VuZGluZzogbmV3IEJvdW5kVG9BcmMoXG4gICAgICAgIHRoaXMuc2hpZnRlZENlbnRlcixcbiAgICAgICAgdGhpcy5vcHRpb25zLnJhZGl1cyxcbiAgICAgICAgdGhpcy5vcHRpb25zLnN0YXJ0QW5nbGUsXG4gICAgICAgIHRoaXMub3B0aW9ucy5lbmRBbmdsZVxuICAgICAgKSxcbiAgICAgIHBvc2l0aW9uOiBwb3NpdGlvbixcbiAgICAgIG9uOiB7XG4gICAgICAgICdkcmFnOm1vdmUnOiAoKSA9PiB0aGlzLmNoYW5nZSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHVwZGF0ZUFuZ2xlKCkge1xuICAgIHRoaXMuYW5nbGUgPSBnZXRBbmdsZSh0aGlzLnNoaWZ0ZWRDZW50ZXIsIHRoaXMuZHJhZ2dhYmxlLnBvc2l0aW9uKVxuICB9XG5cbiAgY2hhbmdlKCkge1xuICAgIHRoaXMudXBkYXRlQW5nbGUoKVxuICAgIC8vICAgICAgdmFyIGFuZ2xlID0gR2VvbWV0cnkuZ2V0TmVhcmVzdEFuZ2xlKHRoaXMub3B0aW9ucy5hbmdsZXMsIHRoaXMuYW5nbGUpO1xuICAgIC8vICAgICAgdGhpcy5zZXRBbmdsZShhbmdsZSx0aGlzLm9wdGlvbnMudGltZSk7XG4gICAgdGhpcy5lbWl0KCdhcmNzbGlkZXI6Y2hhbmdlJywgeyBhbmdsZTogdGhpcy5hbmdsZSB9KVxuICB9XG5cbiAgc2V0QW5nbGUoYW5nbGUsIHRpbWUpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IGdldFBvaW50RnJvbVJhZGlhbFN5c3RlbShcbiAgICAgIHRoaXMuYW5nbGUsXG4gICAgICB0aGlzLm9wdGlvbnMucmFkaXVzLFxuICAgICAgdGhpcy5zaGlmdGVkQ2VudGVyXG4gICAgKVxuICAgIHRoaXMuYW5nbGUgPSBub3JtYWxpemVBbmdsZShhbmdsZSwgcG9zaXRpb24pXG4gICAgdGhpcy5kcmFnZ2FibGUucGluUG9zaXRpb24ocG9zaXRpb24sIHRpbWV8fDApXG4gICAgdGhpcy5lbWl0KCdhcmNzbGlkZXI6Y2hhbmdlJywgdGhpcy5hbmdsZSlcbiAgfVxufVxuIiwiaW1wb3J0IGNyZWF0ZUNhbnZhcyBmcm9tICcuL3V0aWxzL2NyZWF0ZS1jYW52YXMnXG5pbXBvcnQgcmFuZ2UgZnJvbSAnLi91dGlscy9yYW5nZSdcbmltcG9ydCBQb2ludCBmcm9tICcuL2dlb21ldHJ5L3BvaW50J1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tICcuL2dlb21ldHJ5L3JlY3RhbmdsZSdcblxuaW1wb3J0IHsgZ2V0RGlzdGFuY2UgfSBmcm9tICcuL2dlb21ldHJ5L2Rpc3RhbmNlcydcblxuaW1wb3J0IHtcbiAgdG9SYWRpYW4sXG4gIGdldFBvaW50RnJvbVJhZGlhbFN5c3RlbSxcbiAgZ2V0QW5nbGUsXG4gIG5vcm1hbGl6ZUFuZ2xlXG59IGZyb20gJy4vZ2VvbWV0cnkvYW5nbGVzJ1xuXG5pbXBvcnQgRHJhZ2dhYmxlIGZyb20gJy4vZHJhZ2dhYmxlJ1xuaW1wb3J0IHsgQm91bmRUb0FyYyB9IGZyb20gJy4vYm91bmRpbmcnXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnRFbWl0dGVyJ1xuXG5jb25zdCBybmQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSoyNTUpXG59XG5cbmNvbnN0IHRvSGV4U3RyaW5nID0gZnVuY3Rpb24oZGlnaXQpIHtcbiAgbGV0IHN0ciA9IGRpZ2l0LnRvU3RyaW5nKDE2KVxuICB3aGlsZSAoc3RyLmxlbmd0aCA8IDIpIHtcbiAgICBzdHIgPSAnMCcgKyBzdHJcbiAgfVxuICByZXR1cm4gc3RyXG59XG5cbmZ1bmN0aW9uIHJhbmRvbUNvbG9yKCkge1xuICByZXR1cm4gYCMke3RvSGV4U3RyaW5nKHJuZCgpKX0ke3RvSGV4U3RyaW5nKHJuZCgpKX0ke3RvSGV4U3RyaW5nKHJuZCgpKX1gXG59XG5cbmZ1bmN0aW9uIGdldEFycmF5V2l0aEJvdW5kSW5kZXhlcyhpbmRleCwgbGVuZ3RoKSB7XG4gIGNvbnN0IHJldEluZGV4ZXMgPSBbXVxuICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgcmV0SW5kZXhlcy5wdXNoKGluZGV4KVxuICAgIHJldEluZGV4ZXMucHVzaCgoaW5kZXggKyAxKSAlIGxlbmd0aClcbiAgfVxuXG4gIHJldHVybiByZXRJbmRleGVzXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXJ0IGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKGFyZWEsIGVsZW1lbnRzLCBvcHRpb25zPXt9KSB7XG4gICAgc3VwZXIodW5kZWZpbmVkLCBvcHRpb25zKVxuICAgIGNvbnN0IGFyZWFSZWN0YW5nbGUgPSBSZWN0YW5nbGUuZnJvbUVsZW1lbnQoYXJlYSwgYXJlYSlcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNlbnRlcjogYXJlYVJlY3RhbmdsZS5nZXRDZW50ZXIoKSxcbiAgICAgIHJhZGl1czogYXJlYVJlY3RhbmdsZS5nZXRNaW5TaWRlKCkgLyAyLFxuICAgICAgdG91Y2hSYWRpdXM6IGFyZWFSZWN0YW5nbGUuZ2V0TWluU2lkZSgpIC8gMixcbiAgICAgIGJvdW5kQW5nbGU6IE1hdGguUEkgLyA5LFxuICAgICAgZmlsbFN0eWxlczogcmFuZ2UoMCwgZWxlbWVudHMubGVuZ3RoKS5tYXAoKCkgPT4gcmFuZG9tQ29sb3IoKSksXG4gICAgICBpbml0QW5nbGVzOiByYW5nZSgtOTAsIDI3MCwgMzYwIC8gZWxlbWVudHMubGVuZ3RoKS5tYXAoKGFuZ2xlKSA9PiB0b1JhZGlhbihhbmdsZSkpLFxuICAgICAgbGltaXRJbWc6IG51bGwsXG4gICAgICBsaW1pdEltZ09mZnNldDogbmV3IFBvaW50KDAsIDApXG4gICAgfSwgb3B0aW9ucylcblxuICAgIHRoaXMuYXJlYSA9IGFyZWFcbiAgICB0aGlzLmFyZWFSZWN0YW5nbGUgPSBhcmVhUmVjdGFuZ2xlXG4gICAgdGhpcy5pbml0KGVsZW1lbnRzKVxuICB9XG5cbiAgaW5pdChlbGVtZW50cykge1xuICAgIHRoaXMuY2FudmFzID0gY3JlYXRlQ2FudmFzKHRoaXMuYXJlYSwgdGhpcy5hcmVhUmVjdGFuZ2xlKVxuICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJylcbiAgICB0aGlzLmRyYWdnYWJsZXMgPSBlbGVtZW50cy5tYXAoKGVsZW1lbnQsIGkpID0+IHtcbiAgICAgIGNvbnN0IGFuZ2xlID0gdGhpcy5vcHRpb25zLmluaXRBbmdsZXNbaV1cbiAgICAgIGNvbnN0IGhhbGZTaXplID0gUG9pbnQuZWxlbWVudFNpemUoZWxlbWVudCkubXVsdCgwLjUpXG4gICAgICBjb25zdCBwb3NpdGlvbiA9IGdldFBvaW50RnJvbVJhZGlhbFN5c3RlbShcbiAgICAgICAgYW5nbGUsXG4gICAgICAgIHRoaXMub3B0aW9ucy50b3VjaFJhZGl1cyxcbiAgICAgICAgdGhpcy5vcHRpb25zLmNlbnRlci5zdWIoaGFsZlNpemUpXG4gICAgICApXG5cbiAgICAgIHJldHVybiBuZXcgRHJhZ2dhYmxlKGVsZW1lbnQsIHtcbiAgICAgICAgcGFyZW50OiB0aGlzLmFyZWEsXG4gICAgICAgIGJvdW5kaW5nOiBuZXcgQm91bmRUb0FyYyhcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuY2VudGVyLnN1YihoYWxmU2l6ZSksXG4gICAgICAgICAgdGhpcy5vcHRpb25zLnRvdWNoUmFkaXVzLFxuICAgICAgICAgIHRoaXMuZ2V0Qm91bmRBbmdsZShpLCBmYWxzZSksXG4gICAgICAgICAgdGhpcy5nZXRCb3VuZEFuZ2xlKGksIHRydWUpXG4gICAgICAgICksXG4gICAgICAgIHBvc2l0aW9uOiBwb3NpdGlvbixcbiAgICAgICAgb246IHtcbiAgICAgICAgICAnZHJhZzptb3ZlJzogKCkgPT4gdGhpcy5kcmF3KClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgdGhpcy5pc0luaXQgPSB0cnVlXG4gICAgdGhpcy5kcmF3KClcbiAgfVxuXG4gIHVwZGF0ZUFuZ2xlcygpIHtcbiAgICB0aGlzLmFuZ2xlcyA9IHRoaXMuZHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgY29uc3QgaGFsZlNpemUgPSBkcmFnZ2FibGUuZ2V0U2l6ZSgpLm11bHQoMC41KVxuICAgICAgcmV0dXJuIGdldEFuZ2xlKHRoaXMub3B0aW9ucy5jZW50ZXIuc3ViKGhhbGZTaXplKSwgZHJhZ2dhYmxlLnBvc2l0aW9uKVxuICAgIH0pXG4gIH1cblxuICBnZXRCb3VuZEFuZ2xlKGluZGV4LCBpc0Nsb3NzaW5nKSB7XG4gICAgY29uc3Qgc2lnbiA9IGlzQ2xvc3NpbmcgPyAxIDogLTFcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBsZXQgaSA9IChpbmRleCArIHNpZ24pICUgdGhpcy5hbmdsZXMubGVuZ3RoXG4gICAgICBpZiAoaSA8IDApIHtcbiAgICAgICAgaSArPSB0aGlzLmFuZ2xlcy5sZW5ndGhcbiAgICAgIH1cbiAgICAgIHJldHVybiBub3JtYWxpemVBbmdsZSh0aGlzLmFuZ2xlc1tpXSAtIHNpZ24gKiB0aGlzLm9wdGlvbnMuYm91bmRBbmdsZSlcbiAgICB9XG4gIH1cblxuICBkcmF3KCkge1xuICAgIGlmICghdGhpcy5pc0luaXQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMudXBkYXRlQW5nbGVzKClcbiAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMuYXJlYVJlY3RhbmdsZS5zaXplLngsIHRoaXMuYXJlYVJlY3RhbmdsZS5zaXplLnkpXG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKF9kcmFnZ2FibGUsIGluZGV4KSA9PiB7XG4gICAgICB0aGlzLmRyYXdBcmModGhpcy5jb250ZXh0LCB0aGlzLm9wdGlvbnMuY2VudGVyLCB0aGlzLm9wdGlvbnMucmFkaXVzLCBpbmRleClcbiAgICB9KVxuXG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKF9kcmFnZ2FibGUsIGluZGV4KSA9PiB7XG4gICAgICB0aGlzLmRyYXdMaW1pdEltZyhpbmRleClcbiAgICB9KVxuXG4gICAgdGhpcy5lbWl0KCdjaGFydDpkcmF3JylcbiAgfVxuXG4gIGNyZWF0ZUNsb25lKGVsZW1lbnQsIG9wdGlvbnMgPSB7fSkge1xuICAgIGlmICghdGhpcy5pc0luaXQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCByZWN0YW5nbGUgPSBSZWN0YW5nbGUuZnJvbUVsZW1lbnQoZWxlbWVudCwgZWxlbWVudClcbiAgICBjb25zdCBvcHRzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjZW50ZXI6IHJlY3RhbmdsZS5nZXRDZW50ZXIoKSxcbiAgICAgIHJhZGl1czogcmVjdGFuZ2xlLmdldE1pblNpZGUoKSAvIDIsXG4gICAgICBmaWxsU3R5bGVzOiB0aGlzLm9wdGlvbnMuZmlsbFN0eWxlc1xuICAgIH0sIG9wdGlvbnMpXG5cbiAgICBjb25zdCBjYW52YXMgPSBjcmVhdGVDYW52YXMoZWxlbWVudCwgcmVjdGFuZ2xlKVxuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuICAgIGNvbnN0IGNsb25lT2JqID0ge1xuICAgICAgZHJhdzogKCkgPT4ge1xuICAgICAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCByZWN0YW5nbGUuc2l6ZS54LCByZWN0YW5nbGUuc2l6ZS55KVxuICAgICAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoX2RyYWdnYWJsZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICB0aGlzLmRyYXdBcmMoY29udGV4dCwgb3B0cy5jZW50ZXIsIG9wdHMucmFkaXVzLCBpbmRleClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gICAgY2xvbmVPYmouZHJhdygpXG4gICAgcmV0dXJuIGNsb25lT2JqXG4gIH1cblxuICBnZXRGaWxsU3R5bGUoaW5kZXgpIHtcbiAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5maWxsU3R5bGVzW2luZGV4XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpcy5vcHRpb25zLmZpbGxTdHlsZXNbaW5kZXhdID0gdGhpcy5vcHRpb25zLmZpbGxTdHlsZXNbaW5kZXhdLmNhbGwodGhpcylcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5maWxsU3R5bGVzW2luZGV4XVxuICB9XG5cbiAgZHJhd0FyYyhjb250ZXh0LCBjZW50ZXIsIHJhZGl1cywgaW5kZXgpIHtcbiAgICBjb25zdCBzdGFydEFuZ2xlID0gdGhpcy5hbmdsZXNbaW5kZXhdXG4gICAgY29uc3QgZW5kQW5nbGUgPSB0aGlzLmFuZ2xlc1soaW5kZXgrMSkgJSB0aGlzLmFuZ2xlcy5sZW5ndGhdXG4gICAgY29uc3QgY29sb3IgPSB0aGlzLmdldEZpbGxTdHlsZShpbmRleClcblxuICAgIGNvbnRleHQuYmVnaW5QYXRoKClcbiAgICBjb250ZXh0Lm1vdmVUbyhjZW50ZXIueCwgY2VudGVyLnkpXG4gICAgY29udGV4dC5hcmMoY2VudGVyLngsIGNlbnRlci55LCByYWRpdXMsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlLCBmYWxzZSlcbiAgICBjb250ZXh0LmxpbmVUbyhjZW50ZXIueCwgY2VudGVyLnkpXG4gICAgY29udGV4dC5jbG9zZVBhdGgoKVxuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gY29sb3JcbiAgICBjb250ZXh0LmZpbGwoKVxuICB9XG5cbiAgZHJhd0xpbWl0SW1nKGluZGV4KSB7XG4gICAgbGV0IHBvaW50LCBpbWdcbiAgICBpZiAodGhpcy5vcHRpb25zLmxpbWl0SW1nKSB7XG4gICAgICBpbWcgPSB0aGlzLm9wdGlvbnMubGltaXRJbWcgaW5zdGFuY2VvZiBBcnJheSA/IHRoaXMub3B0aW9ucy5saW1pdEltZ1tpbmRleF0gOiB0aGlzLm9wdGlvbnMubGltaXRJbWdcbiAgICB9XG5cbiAgICBpZiAoaW1nKSB7XG4gICAgICBjb25zdCBhbmdsZSA9IG5vcm1hbGl6ZUFuZ2xlKHRoaXMuYW5nbGVzW2luZGV4XSlcbiAgICAgIHBvaW50ID0gbmV3IFBvaW50KDAsIC1pbWcuaGVpZ2h0IC8gMilcbiAgICAgIHBvaW50ID0gcG9pbnQuYWRkKHRoaXMub3B0aW9ucy5saW1pdEltZ09mZnNldClcbiAgICAgIHRoaXMuY29udGV4dC50cmFuc2xhdGUodGhpcy5hcmVhUmVjdGFuZ2xlLnNpemUueCAvIDIsIHRoaXMuYXJlYVJlY3RhbmdsZS5zaXplLnkgLyAyKVxuICAgICAgdGhpcy5jb250ZXh0LnJvdGF0ZShhbmdsZSlcbiAgICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UoaW1nLCBwb2ludC54LCBwb2ludC55KVxuICAgICAgdGhpcy5jb250ZXh0LnNldFRyYW5zZm9ybSgxLCAwLCAwLCAxLCAwLCAwKVxuICAgIH1cbiAgfVxuXG4gIGdldEFuZ2xlc0RpZmYoKSB7XG4gICAgY29uc3QgYW5nbGVzID0gdGhpcy5hbmdsZXMuc2xpY2UoMSlcbiAgICBsZXQgYmFzZUFuZ2xlID0gdGhpcy5hbmdsZXNbMF1cblxuICAgIGFuZ2xlcy5wdXNoKGJhc2VBbmdsZSlcbiAgICByZXR1cm4gYW5nbGVzLm1hcCgoYW5nbGUpID0+IHtcbiAgICAgIGNvbnN0IGRpZmZBbmdsZSA9IG5vcm1hbGl6ZUFuZ2xlKGFuZ2xlIC0gYmFzZUFuZ2xlKVxuICAgICAgYmFzZUFuZ2xlID0gYW5nbGVcbiAgICAgIHJldHVybiBkaWZmQW5nbGVcbiAgICB9KVxuICB9XG5cbiAgZ2V0UGVyY2VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRBbmdsZXNEaWZmKCkubWFwKChkaWZmQW5nbGUpID0+IGRpZmZBbmdsZSAvICgyICogTWF0aC5QSSkpXG4gIH1cblxuICBnZXRBcmNCaXNlY3RyaXhzKCkge1xuICAgIHJldHVybiB0aGlzLmdldEFuZ2xlc0RpZmYoKS5tYXAoKGRpZmZBbmdsZSwgaSkgPT4ge1xuICAgICAgcmV0dXJuIG5vcm1hbGl6ZUFuZ2xlKHRoaXMuYW5nbGVzW2ldICsgZGlmZkFuZ2xlIC8gMilcbiAgICB9KVxuICB9XG5cbiAgZ2V0QXJjT25Qb2ludChwb2ludCkge1xuICAgIGNvbnN0IGFuZ2xlID0gZ2V0QW5nbGUodGhpcy5vcHRpb25zLmNlbnRlciwgcG9pbnQpXG4gICAgY29uc3QgcmFkaXVzID0gZ2V0RGlzdGFuY2UodGhpcy5vcHRpb25zLmNlbnRlciwgcG9pbnQpXG5cbiAgICBpZiAocmFkaXVzID4gdGhpcy5vcHRpb25zLnJhZGl1cykge1xuICAgICAgcmV0dXJuIC0xXG4gICAgfVxuXG4gICAgbGV0IG9mZnNldCA9IC0xLCBpLCBqXG4gICAgZm9yIChpID0gMDsgaSA8IHRoaXMuYW5nbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAob2Zmc2V0ID09PSAtMSB8fCB0aGlzLmFuZ2xlc1tvZmZzZXRdID4gdGhpcy5hbmdsZXNbaV0pIHtcbiAgICAgICAgb2Zmc2V0ID0gaVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGkgPSAwLCBqID0gb2Zmc2V0OyBpIDwgdGhpcy5hbmdsZXMubGVuZ3RoOyBpKyssIGogPSAoaSArIG9mZnNldCkgJSB0aGlzLmFuZ2xlcy5sZW5ndGgpIHtcbiAgICAgIGlmIChhbmdsZSA8IHRoaXMuYW5nbGVzW2pdKSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuICAgIGlmICgtLWogPCAwKSB7XG4gICAgICBqICs9IHRoaXMuYW5nbGVzLmxlbmd0aFxuICAgIH1cbiAgICByZXR1cm4galxuICB9XG5cbiAgc2V0QW5nbGVzKGFuZ2xlcykge1xuICAgIHRoaXMuYW5nbGVzID0gYW5nbGVzXG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSwgaSkgPT4ge1xuICAgICAgY29uc3QgYW5nbGUgPSB0aGlzLmFuZ2xlc1tpXVxuICAgICAgY29uc3QgaGFsZlNpemUgPSBkcmFnZ2FibGUuZ2V0U2l6ZSgpLm11bHQoMC41KVxuICAgICAgY29uc3QgcG9zaXRpb24gPSBnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oXG4gICAgICAgIGFuZ2xlLFxuICAgICAgICB0aGlzLm9wdGlvbnMudG91Y2hSYWRpdXMsXG4gICAgICAgIHRoaXMub3B0aW9ucy5jZW50ZXIuc3ViKGhhbGZTaXplKVxuICAgICAgKVxuXG4gICAgICBkcmFnZ2FibGUubW92ZUFuZFNhdmUocG9zaXRpb24pXG4gICAgfSlcbiAgICB0aGlzLmRyYXcoKVxuICB9XG5cbiAgc2V0QWN0aXZlQXJjKGluZGV4KSB7XG4gICAgY29uc3QgZW5hYmxlSW5kZXhlcyA9IGdldEFycmF5V2l0aEJvdW5kSW5kZXhlcyhpbmRleCwgdGhpcy5kcmFnZ2FibGVzLmxlbmd0aClcbiAgICB0aGlzLmFjdGl2ZUFyY0luZGV4ID0gaW5kZXhcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlLCBpKSA9PiB7XG4gICAgICBkcmFnZ2FibGUuZW5hYmxlID0gZW5hYmxlSW5kZXhlcy5pbmRleE9mKGkpICE9PSAtMVxuICAgIH0pXG4gICAgdGhpcy5kcmF3KClcbiAgfVxufVxuIiwiaW1wb3J0IFBvaW50IGZyb20gJy4vZ2VvbWV0cnkvcG9pbnQnXG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gJy4vZ2VvbWV0cnkvcmVjdGFuZ2xlJ1xuaW1wb3J0IERyYWdnYWJsZSBmcm9tICcuL2RyYWdnYWJsZSdcbmltcG9ydCBMaXN0IGZyb20gJy4vbGlzdCdcbmltcG9ydCBCdWJibGluZ0xpc3QgZnJvbSAnLi9idWJibGluZ0xpc3QnXG5pbXBvcnQgVGFyZ2V0IGZyb20gJy4vdGFyZ2V0J1xuaW1wb3J0IHsgc2NvcGVzLCBkZWZhdWx0U2NvcGUsIFNjb3BlLCBzY29wZSB9IGZyb20gJy4vc2NvcGUnXG5pbXBvcnQgeyBOb3RDcm9zc2luZ1N0cmF0ZWd5LCBGbG9hdExlZnRTdHJhdGVneSwgRmxvYXRSaWdodFN0cmF0ZWd5IH0gZnJvbSAnLi9wb3NpdGlvbmluZydcbmltcG9ydCBTcGlkZXIgZnJvbSAnLi9zcGlkZXInXG5pbXBvcnQgQXJjU2xpZGVyIGZyb20gJy4vYXJjc2xpZGVyJ1xuaW1wb3J0IENoYXJ0IGZyb20gJy4vY2hhcnQnXG5pbXBvcnQgeyBnZXREaXN0YW5jZSwgZ2V0WERpZmZlcmVuY2UsIGdldFlEaWZmZXJlbmNlLCB0cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5LCBpbmRleE9mTmVhcmVzdFBvaW50IH0gZnJvbSAnLi9nZW9tZXRyeS9kaXN0YW5jZXMnXG5pbXBvcnQgeyBhZGRDbGFzcywgcmVtb3ZlQ2xhc3MgfSBmcm9tICcuL3V0aWxzL2NsYXNzZXMnXG5pbXBvcnQge1xuICBCb3VuZCxcbiAgQm91bmRUb1JlY3RhbmdsZSxcbiAgQm91bmRUb0VsZW1lbnQsXG4gIEJvdW5kVG9MaW5lWCxcbiAgQm91bmRUb0xpbmVZLFxuICBCb3VuZFRvTGluZSxcbiAgQm91bmRUb0NpcmNsZSxcbiAgQm91bmRUb0FyY1xufSBmcm9tICcuL2JvdW5kaW5nJ1xuXG5jb25zdCBib3VuZCA9IHtcbiAgQm91bmQsXG4gIEJvdW5kVG9SZWN0YW5nbGUsXG4gIEJvdW5kVG9FbGVtZW50LFxuICBCb3VuZFRvTGluZVgsXG4gIEJvdW5kVG9MaW5lWSxcbiAgQm91bmRUb0xpbmUsXG4gIEJvdW5kVG9DaXJjbGUsXG4gIEJvdW5kVG9BcmNcbn1cblxuY29uc3QgZGlzdGFuY2UgPSB7XG4gIGdldERpc3RhbmNlLFxuICBnZXRYRGlmZmVyZW5jZSxcbiAgZ2V0WURpZmZlcmVuY2UsXG4gIHRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3RvcnksXG4gIGluZGV4T2ZOZWFyZXN0UG9pbnRcbn1cblxuZXhwb3J0IHtcbiAgRHJhZ2dhYmxlLFxuICBQb2ludCwgUmVjdGFuZ2xlLFxuICBMaXN0LFxuICBCdWJibGluZ0xpc3QsXG4gIFRhcmdldCxcbiAgc2NvcGVzLCBkZWZhdWx0U2NvcGUsIFNjb3BlLCBzY29wZSxcbiAgTm90Q3Jvc3NpbmdTdHJhdGVneSwgRmxvYXRMZWZ0U3RyYXRlZ3ksIEZsb2F0UmlnaHRTdHJhdGVneSxcbiAgU3BpZGVyLFxuICBBcmNTbGlkZXIsXG4gIENoYXJ0LFxuICBib3VuZCxcbiAgZGlzdGFuY2UsXG4gIGFkZENsYXNzLCByZW1vdmVDbGFzc1xufVxuIl0sIm5hbWVzIjpbImdldFN1bVZhbHVlT2ZTdHlsZVJ1bGVzIiwiZWxlbWVudCIsInJ1bGVzIiwicmVkdWNlIiwic3VtIiwicnVsZSIsInBhcnNlSW50Iiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIlBvaW50IiwieCIsInkiLCJwIiwiayIsInBhcmVudCIsInBhcmVudE5vZGUiLCJlbGVtZW50UmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInBhcmVudFJlY3QiLCJsZWZ0IiwidG9wIiwiaXNDb250ZW50Qm94U2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwiUmVjdGFuZ2xlIiwicG9zaXRpb24iLCJzaXplIiwiYWRkIiwibXVsdCIsInJlY3QiLCJNYXRoIiwibWluIiwibWF4Iiwic3ViIiwicmVjdGFuZ2xlIiwiaW5jbHVkZVBvaW50IiwiZ2V0UDMiLCJheGlzIiwic2VsQXhpcyIsImNyb3NzUmVjdGFuZ2xlIiwiYW5kIiwidGhpc0NlbnRlciIsImdldENlbnRlciIsInJlY3RDZW50ZXIiLCJzaWduIiwib2Zmc2V0IiwiZWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzdHlsZSIsImlzQ29uc2lkZXJUcmFuc2xhdGUiLCJlbGVtZW50T2Zmc2V0IiwiZWxlbWVudFNpemUiLCJoYXNDbGFzcyIsImMiLCJyZSIsIlJlZ0V4cCIsInRlc3QiLCJjbGFzc05hbWUiLCJhZGRDbGFzcyIsInJlcGxhY2UiLCJyZW1vdmVDbGFzcyIsImdldERlZmF1bHRQYXJlbnQiLCJ0YWdOYW1lIiwiRXZlbnRFbWl0dGVyIiwiY29udGV4dCIsIm9wdGlvbnMiLCJldmVudHMiLCJvbiIsIk9iamVjdCIsImVudHJpZXMiLCJldmVudE5hbWUiLCJmbiIsImludGVycnVwdGVkIiwiYXJncyIsInNsaWNlIiwiY2FsbCIsImFyZ3VtZW50cyIsImZ1bmMiLCJhcHBseSIsInB1c2giLCJ1bnNoaWZ0IiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwiZ2V0RGlzdGFuY2UiLCJwMSIsInAyIiwiZHgiLCJkeSIsInNxcnQiLCJnZXRYRGlmZmVyZW5jZSIsImFicyIsImdldFlEaWZmZXJlbmNlIiwidHJhbnNmb3JtZWRTcGFjZURpc3RhbmNlRmFjdG9yeSIsInBvdyIsImluZGV4T2ZOZWFyZXN0UG9pbnQiLCJhcnIiLCJ2YWwiLCJyYWRpdXMiLCJnZXREaXN0YW5jZUZ1bmMiLCJpIiwidGVtcCIsImxlbmd0aCIsImRpcmVjdENyb3NzaW5nIiwiTDFQMSIsIkwxUDIiLCJMMlAxIiwiTDJQMiIsImsxIiwiazIiLCJiMSIsImIyIiwiYm91bmRUb0xpbmUiLCJBIiwiQiIsIlAiLCJBUCIsIkFCIiwiYWIyIiwiYXBfYWIiLCJ0IiwiZ2V0UG9pbnRPbkxpbmVCeUxlbmdodCIsIkxQMSIsIkxQMiIsImxlbmdodCIsInBlcmNlbnQiLCJhZGRQb2ludFRvQm91bmRQb2ludHMiLCJib3VuZHBvaW50cyIsInBvaW50IiwiaXNSaWdodCIsInJlc3VsdCIsImZpbHRlciIsImJQb2ludCIsImdldEFuZ2xlRGlmZiIsImFscGhhIiwiYmV0YSIsIm1pbkFuZ2xlIiwibWF4QW5nbGUiLCJQSSIsImdldEFuZ2xlIiwiZGlmZiIsIm5vcm1hbGl6ZUFuZ2xlIiwiYXRhbjIiLCJ0b1JhZGlhbiIsImFuZ2xlIiwiYm91bmRBbmdsZSIsImRtaW4iLCJkbWF4IiwiZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtIiwiY2VudGVyIiwiY29zIiwic2luIiwiQm91bmQiLCJfc2l6ZSIsIkJvdW5kVG9SZWN0YW5nbGUiLCJjYWxjUG9pbnQiLCJjbG9uZSIsInJlY3RQMiIsIkJvdW5kVG9FbGVtZW50IiwiZnJvbUVsZW1lbnQiLCJCb3VuZFRvTGluZVgiLCJzdGFydFkiLCJlbmRZIiwiQm91bmRUb0xpbmVZIiwic3RhcnRYIiwiZW5kWCIsIkJvdW5kVG9MaW5lIiwic3RhcnRQb2ludCIsImVuZFBvaW50Iiwic29tZUsiLCJjb3NCZXRhIiwic2luQmV0YSIsInBvaW50MiIsIm5ld0VuZFBvaW50IiwicG9pbnRDcm9zc2luZyIsIkJvdW5kVG9DaXJjbGUiLCJCb3VuZFRvQXJjIiwic3RhcnRBbmdsZSIsImVuZEFuZ2xlIiwiX3N0YXJ0QW5nbGUiLCJfZW5kQW5nbGUiLCJhcnJheSIsInJhbmdlIiwic3RhcnQiLCJzdG9wIiwic3RlcCIsIkJhc2ljU3RyYXRlZ3kiLCJOb3RDcm9zc2luZ1N0cmF0ZWd5IiwicmVjdGFuZ2xlTGlzdCIsImluZGV4ZXNPZk5ld3MiLCJzdGF0aWNSZWN0YW5nbGVJbmRleGVzIiwiaW5kZXhlcyIsIl9yZWN0IiwiZm9yRWFjaCIsInJlbW92YWJsZSIsImluZGV4T2ZTdGF0aWMiLCJzdGF0aWNSZWN0IiwibW92ZVRvQm91bmQiLCJzb21lIiwiYm91bmRSZWN0IiwiZ2V0U3F1YXJlIiwib2RsRHJhZ2dhYmxlc0xpc3QiLCJuZXdEcmFnZ2FibGVzIiwiaW5kZXhPZk5ld3MiLCJkcmFnZ2FibGVzIiwiY29uY2F0IiwiZHJhZ2dhYmxlIiwiRmxvYXRMZWZ0U3RyYXRlZ3kiLCJhc3NpZ24iLCJwYWRkaW5nVG9wTGVmdCIsInBhZGRpbmdCb3R0b21SaWdodCIsInlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyIsImdldFBvc2l0aW9uIiwiX2luZGV4ZXNPZk5ld3MiLCJnZXRQMiIsImJvdW5kYXJ5UG9pbnRzIiwicmVjdEluZGV4IiwiaXNWYWxpZCIsIm5ld0xpc3QiLCJsaXN0T2xkUG9zaXRpb24iLCJtYXAiLCJuZXdEcmFnZ2FibGUiLCJGbG9hdFJpZ2h0U3RyYXRlZ3kiLCJwYWRkaW5nVG9wUmlnaHQiLCJwYWRkaW5nQm90dG9tTGVmdCIsInBhZGRpbmdCb3R0b21OZWdMZWZ0IiwiZ2V0UDQiLCJhZGRUb0RlZmF1bHRTY29wZSIsInRhcmdldCIsImRlZmF1bHRTY29wZSIsImFkZFRhcmdldCIsIlRhcmdldCIsInVuZGVmaW5lZCIsInRpbWVFbmQiLCJ0aW1lRXhjYW5nZSIsInBvc2l0aW9uaW5nU3RyYXRlZ3kiLCJzdHJhdGVneSIsImdldFJlY3RhbmdsZSIsImJpbmQiLCJ0YXJnZXRzIiwiZW1pdHRlciIsImVtaXQiLCJpbml0IiwiaW5kZXhlc09mTmV3IiwicG9zaXRpb25pbmciLCJvbGREcmFnZ2FibGVzIiwic29ydGluZyIsInJlY3RhbmdsZXMiLCJpbm5lckRyYWdnYWJsZXMiLCJzZXRQb3NpdGlvbiIsImNhdGNoRHJhZ2dhYmxlIiwidGFyZ2V0UmVjdGFuZ2xlIiwiZHJhZ2dhYmxlU3F1YXJlIiwic2NvcGVzIiwic2NvcGUiLCJyZW1vdmVJdGVtIiwibmV3RHJhZ2dhYmxlc0luZGV4IiwiYWRkUmVtb3ZlT25Nb3ZlIiwidGltZSIsIm1vdmUiLCJpbml0aWFsUG9zaXRpb24iLCJwdXNoSW5uZXJEcmFnZ2FibGUiLCJyZW1vdmVIYW5kbGVyIiwicmVtb3ZlIiwidW5zdWJzY3JpYmUiLCJTY29wZSIsImRyYWdFbmRBY3Rpb24iLCJvbkVuZCIsInNob3RUYXJnZXRzIiwic29ydCIsImEiLCJiIiwicGluUG9zaXRpb24iLCJyZXNldCIsInJlZnJlc2giLCJwb3NpdGlvbnMiLCJtZXNzYWdlIiwidGFyZ2V0SW5kZXhlcyIsImN1cnJlbnRTY29wZSIsImFkZERyYWdnYWJsZVRvU2NvcGUiLCJhZGREcmFnZ2FibGUiLCJEcmFnZ2FibGUiLCJpbnRlcnJ1cHQiLCJhZGRUYXJnZXRUb1Njb3BlIiwicHJlcGVuZE9uIiwiY2hlY2tTdXBwb3J0UGFzc2l2ZUV2ZW50cyIsInBhc3NpdmVTdXBwb3J0ZWQiLCJkZWZpbmVQcm9wZXJ0eSIsImdldCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiX2VyciIsImlzU3VwcG9ydFBhc3NpdmVFdmVudHMiLCJpc1RvdWNoIiwibW91c2VFdmVudHMiLCJlbmQiLCJ0b3VjaEV2ZW50cyIsInRyYW5zZm9ybVByb3BlcnR5IiwiZ2V0U3R5bGVQcm9wZXJ0eSIsInRyYW5zaXRpb25Qcm9wZXJ0eSIsImdldFRvdWNoQnlJRCIsInRvdWNoSWQiLCJjaGFuZ2VkVG91Y2hlcyIsImlkZW50aWZpZXIiLCJwcmV2ZW50RG91YmxlSW5pdCIsImV4aXN0aW5nIiwiY29weVN0eWxlcyIsInNvdXJjZSIsImRlc3RpbmF0aW9uIiwiY3MiLCJrZXkiLCJjaGlsZHJlbiIsIl9lbmFibGUiLCJzdGFydFBvc2l0aW9uaW5nIiwic3RhcnRMaXN0ZW5pbmciLCJfc2V0RGVmYXVsdFRyYW5zaXRpb24iLCJwaW5uZWRQb3NpdGlvbiIsImJvdW5kaW5nIiwiX2RyYWdTdGFydCIsImV2ZW50IiwiZHJhZ1N0YXJ0IiwiX2RyYWdNb3ZlIiwiZHJhZ01vdmUiLCJfZHJhZ0VuZCIsImRyYWdFbmQiLCJfbmF0aXZlRHJhZ1N0YXJ0IiwibmF0aXZlRHJhZ1N0YXJ0IiwiX25hdGl2ZURyYWdPdmVyIiwibmF0aXZlRHJhZ092ZXIiLCJfbmF0aXZlRHJhZ0VuZCIsIm5hdGl2ZURyYWdFbmQiLCJfbmF0aXZlRHJvcCIsIm5hdGl2ZURyb3AiLCJfc2Nyb2xsIiwib25TY3JvbGwiLCJoYW5kbGVyIiwicGFzc2l2ZSIsIl90cmFuc2Zvcm1Qb3NpdGlvbiIsImdldFNpemUiLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbkNzcyIsInRyYW5zZm9ybSIsInRyYW5zbGF0ZUNzcyIsInVhIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwibXNpZSIsImlzU2lsZW50IiwiZGV0ZXJtaW5lRGlyZWN0aW9uIiwiX3NldFRyYW5zaXRpb24iLCJfc2V0VHJhbnNsYXRlIiwic2lsZW50IiwibGVmdERpcmVjdGlvbiIsInJpZ2h0RGlyZWN0aW9uIiwidXBEaXJlY3Rpb24iLCJkb3duRGlyZWN0aW9uIiwiY3VycmVudEV2ZW50IiwiaXNUb3VjaEV2ZW50IiwiVG91Y2hFdmVudCIsInRvdWNoUG9pbnQiLCJfc3RhcnRUb3VjaFBvaW50IiwicGFnZVgiLCJjbGllbnRYIiwicGFnZVkiLCJjbGllbnRZIiwiX3N0YXJ0UG9zaXRpb24iLCJfdG91Y2hJZCIsIl9zdGFydFNjcm9sbFBvaW50Iiwic2Nyb2xsWCIsInNjcm9sbFkiLCJzdG9wUHJvcGFnYXRpb24iLCJIVE1MSW5wdXRFbGVtZW50IiwiZm9jdXMiLCJuYXRpdmVEcmFnQW5kRHJvcCIsInByZXZlbnREZWZhdWx0IiwiaXNTYWZhcmkiLCJlbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3BPblRvdWNoIiwiZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wRm9yQWxsIiwiZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wIiwiaXNEcmFnZ2luZyIsInRvdWNoIiwic2Nyb2xsUG9pbnQiLCJib3VuZCIsInJlbW92ZUF0dHJpYnV0ZSIsIl9ldmVudCIsImRhdGFUcmFuc2ZlciIsInNldERhdGEiLCJlZmZlY3RBbGxvd2VkIiwiZHJvcEVmZmVjdCIsImNsb25lZEVsZW1lbnQiLCJjbG9uZU5vZGUiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJlbXVsYXRpb25EcmFnZ2FibGUiLCJwYXJlbnRSZWN0UG9pbnQiLCJkZXN0cm95IiwicmVtb3ZlQ2hpbGQiLCJyZXNldEVtaXR0ZXIiLCJfcGFyZW50IiwiX2JvdW5kaW5nIiwiX2hhbmRsZXIiLCJlbmFibGUiLCJMaXN0IiwiaW5pdERyYWdnYWJsZSIsIm9uTW92ZSIsInNvcnRlZERyYWdnYWJsZXMiLCJnZXRTb3J0ZWREcmFnZ2FibGVzIiwicGlubmVkUG9zaXRpb25zIiwiY3VycmVudEluZGV4IiwidGFyZ2V0SW5kZXgiLCJkaXN0YW5jZUZ1bmMiLCJyZXNldFBvc2l0aW9uVG9Jbml0aWFsIiwiQXJyYXkiLCJpbml0aWFsUG9zaXRpb25zIiwibGlzdCIsInJlc2V0T24iLCJqIiwiZHJhZ2dhYmxlQSIsImRyYWdnYWJsZUIiLCJnZXRDdXJyZW50UGlubmVkUG9zaXRpb25zIiwicGFyZW50RWxlbWVudCIsImVsZW1lbnRzIiwiZnJvbSIsIkJ1YmJsaW5nTGlzdCIsImF1dG9EZXRlY3RWZXJ0aWNhbEdhcCIsInNvcnRlZCIsInZlcnRpY2FsR2FwIiwic3RhcnRQb3NpdGlvbiIsImJ1YmxpbmciLCJjdXJyZW50RHJhZ2dhYmxlIiwiY3VycmVudFBvc2l0aW9uIiwiY29tcGFyZSIsInNldFN0eWxlIiwiY3NzVGV4dCIsImhhc093blByb3BlcnR5IiwiYXBwZW5kRmlyc3RDaGlsZCIsIm5vZGUiLCJmaXJzdENoaWxkIiwiaW5zZXJ0QmVmb3JlIiwiY3JlYXRlQ2FudmFzIiwiYXJlYSIsInJlY3RhZ2xlIiwiY2FudmFzIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsIlNwaWRlciIsImFyZWFSZWN0YW5nbGUiLCJkQW5nbGUiLCJzdGFydFJhZGl1cyIsImVuZFJhZGl1cyIsImdldE1pblNpZGUiLCJsaW5lV2lkdGgiLCJzdHJva2VTdHlsZSIsImZpbGxTdHlsZSIsImdldENvbnRleHQiLCJoYWxmU2l6ZSIsImRyYXciLCJpc0luaXQiLCJjbGVhclJlY3QiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJjbG9zZVBhdGgiLCJzdHJva2UiLCJmaWxsIiwiQXJjU2xpZGVyIiwiYW5nbGVzIiwic2hpZnRlZENlbnRlciIsImNoYW5nZSIsInVwZGF0ZUFuZ2xlIiwicm5kIiwicm91bmQiLCJyYW5kb20iLCJ0b0hleFN0cmluZyIsImRpZ2l0Iiwic3RyIiwidG9TdHJpbmciLCJyYW5kb21Db2xvciIsImdldEFycmF5V2l0aEJvdW5kSW5kZXhlcyIsInJldEluZGV4ZXMiLCJDaGFydCIsInRvdWNoUmFkaXVzIiwiZmlsbFN0eWxlcyIsImluaXRBbmdsZXMiLCJsaW1pdEltZyIsImxpbWl0SW1nT2Zmc2V0IiwiZ2V0Qm91bmRBbmdsZSIsImlzQ2xvc3NpbmciLCJ1cGRhdGVBbmdsZXMiLCJfZHJhZ2dhYmxlIiwiZHJhd0FyYyIsImRyYXdMaW1pdEltZyIsIm9wdHMiLCJjbG9uZU9iaiIsImNvbG9yIiwiZ2V0RmlsbFN0eWxlIiwiYXJjIiwiaW1nIiwidHJhbnNsYXRlIiwicm90YXRlIiwiZHJhd0ltYWdlIiwic2V0VHJhbnNmb3JtIiwiYmFzZUFuZ2xlIiwiZGlmZkFuZ2xlIiwiZ2V0QW5nbGVzRGlmZiIsIm1vdmVBbmRTYXZlIiwiZW5hYmxlSW5kZXhlcyIsImFjdGl2ZUFyY0luZGV4IiwiZGlzdGFuY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUFBLFNBQVNBLHVCQUFULENBQWlDQyxPQUFqQyxFQUEwQ0MsS0FBMUMsRUFBaUQ7RUFDL0MsU0FBT0EsS0FBSyxDQUFDQyxNQUFOLENBQWEsVUFBQ0MsR0FBRCxFQUFNQyxJQUFOLEVBQWU7RUFDakMsV0FBT0QsR0FBRyxHQUFHRSxRQUFRLENBQUNDLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0JQLE9BQXhCLEVBQWlDSSxJQUFqQyxLQUF3QyxDQUF6QyxDQUFyQjtFQUNELEdBRk0sRUFFSixDQUZJLENBQVA7RUFHRDs7TUFFb0JJOzs7RUFDbkIsaUJBQVlDLENBQVosRUFBZUMsQ0FBZixFQUFrQjtFQUFBOztFQUNoQixTQUFLRCxDQUFMLEdBQVNBLENBQVQ7RUFDQSxTQUFLQyxDQUFMLEdBQVNBLENBQVQ7RUFDRDs7OzswQkFFR0MsR0FBRztFQUNMLGFBQU8sSUFBSUgsS0FBSixDQUFVLEtBQUtDLENBQUwsR0FBU0UsQ0FBQyxDQUFDRixDQUFyQixFQUF3QixLQUFLQyxDQUFMLEdBQVNDLENBQUMsQ0FBQ0QsQ0FBbkMsQ0FBUDtFQUNEOzs7MEJBRUdDLEdBQUc7RUFDTCxhQUFPLElBQUlILEtBQUosQ0FBVSxLQUFLQyxDQUFMLEdBQVNFLENBQUMsQ0FB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
