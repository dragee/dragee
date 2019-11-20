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

  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
      _construct = Reflect.construct;
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
  /** Class representing a point. */


  var Point =
  /*#__PURE__*/
  function () {
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

  function getDefaultContainer(element) {
    var container = element.parentNode;

    while (container.parentNode && window.getComputedStyle(container)['position'] === 'static' && container.tagName !== 'BODY') {
      container = container.parentNode;
    }

    return container;
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
    }], [{
      key: "bounding",
      value: function bounding() {
        var instance = _construct(this, Array.prototype.slice.call(arguments));

        return instance.bound.bind(instance);
      }
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

    function BoundToElement(element, container) {
      var _this2;

      _classCallCheck(this, BoundToElement);

      _this2 = _possibleConstructorReturn(this, _getPrototypeOf(BoundToElement).call(this, Rectangle.fromElement(element, container)));
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
        return Rectangle.fromElement(this.element, this.container, this.options.isContentBoxSize, true);
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
    }, {
      key: "container",
      get: function get() {
        return this._container = this._container || this.options.container || this.options.parent || getDefaultContainer(this.element);
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

      _this.startBounding();

      _this.startPositioning();

      _this.startListening();

      return _this;
    }

    _createClass(Draggable, [{
      key: "startBounding",
      value: function startBounding() {
        this.bound = this.options.bound || BoundToElement.bounding(this.container, this.container);
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

        if (this.bound.refresh) {
          this.bound.refresh();
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

        point = this.bound(point, this.getSize());
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

        point = this.bound(point, this.getSize());

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

        point = this.bound(point, this.getSize());
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

        var containerRect = this.container.getBoundingClientRect();
        var clonedElement = this.element.cloneNode(true);
        clonedElement.style[transformProperty] = '';
        copyStyles(this.element, clonedElement);
        clonedElement.style.position = 'absolute';
        document.body.appendChild(clonedElement);
        addClass(this.element, 'dragee-placeholder');
        var emulationDraggable = new Draggable(clonedElement, {
          container: document.body,
          bound: function bound(point) {
            return point;
          },
          on: {
            'drag:move': function dragMove() {
              var containerRectPoint = new Point(containerRect.left, containerRect.top);
              _this3.position = emulationDraggable.position.sub(containerRectPoint).sub(_this3._startScrollPoint);

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
        var containerRectPoint = new Point(containerRect.left, containerRect.top);
        emulationDraggable._startScrollPoint = this._startScrollPoint;
        emulationDraggable.move(this.pinnedPosition.add(containerRectPoint).add(new Point(window.scrollX, window.scrollY)));
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
        if (this.bound.refresh) {
          this.bound.refresh();
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
        return this.options.emulateNativeDragAndDropOnTouch || true;
      }
    }, {
      key: "emulateNativeDragAndDropForAll",
      get: function get() {
        return this.options.emulateNativeDragAndDropForAll || false;
      }
    }, {
      key: "shouldRemoveZeroTranslate",
      get: function get() {
        return this.options.shouldRemoveZeroTranslate || false;
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
      value: function factory(containerElement, elements) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var draggables = Array.from(elements).map(function (element) {
          return new Draggable(element, Object.assign({
            container: containerElement
          }, options.draggable || {}));
        });
        return new List(draggables, options.list || {});
      }
    }]);

    return List;
  }(EventEmitter);

  var arrayMove = function arrayMove(array, from, to) {
    array.splice(to < 0 ? array.length + to : to, 0, array.splice(from, 1)[0]);
  };

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
          arrayMove(sortedDraggables, currentIndex, targetIndex);
          this.bubling(sortedDraggables, draggable);
          this.emit('list:change');
        }
      }
    }, {
      key: "bubling",
      value: function bubling(sortedDraggables, currentDraggable) {
        var _this2 = this;

        var currentPosition = this.startPosition.clone();
        sortedDraggables.forEach(function (draggable) {
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
      value: function factory(containerElement, elements) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var draggables = Array.from(elements).map(function (element) {
          return new Draggable(element, Object.assign({
            container: containerElement
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
            container: _this.area,
            bound: BoundToLine.bounding(start, end),
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
          container: this.area,
          bound: BoundToArc.bounding(this.shiftedCenter, this.options.radius, this.options.startAngle, this.options.endAngle),
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
            container: _this2.area,
            bound: BoundToArc.bounding(_this2.options.center.sub(halfSize), _this2.options.touchRadius, _this2.getBoundAngle(i, false), _this2.getBoundAngle(i, true)),
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

  exports.ArcSlider = ArcSlider;
  exports.Bound = Bound;
  exports.BoundToArc = BoundToArc;
  exports.BoundToCircle = BoundToCircle;
  exports.BoundToElement = BoundToElement;
  exports.BoundToLine = BoundToLine;
  exports.BoundToLineX = BoundToLineX;
  exports.BoundToLineY = BoundToLineY;
  exports.BoundToRectangle = BoundToRectangle;
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
  exports.defaultScope = defaultScope;
  exports.getDistance = getDistance;
  exports.getXDifference = getXDifference;
  exports.getYDifference = getYDifference;
  exports.indexOfNearestPoint = indexOfNearestPoint;
  exports.removeClass = removeClass;
  exports.scope = scope;
  exports.scopes = scopes;
  exports.transformedSpaceDistanceFactory = transformedSpaceDistanceFactory;

  return exports;

}({}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZGV2LmpzIiwic291cmNlcyI6WyIuLi9zcmMvZ2VvbWV0cnkvcG9pbnQuanMiLCIuLi9zcmMvZ2VvbWV0cnkvcmVjdGFuZ2xlLmpzIiwiLi4vc3JjL3V0aWxzL2NsYXNzZXMuanMiLCIuLi9zcmMvdXRpbHMvZ2V0LWRlZmF1bHQtY29udGFpbmVyLmpzIiwiLi4vc3JjL2V2ZW50RW1pdHRlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9kZXNhbmRyby1nZXQtc3R5bGUtcHJvcGVydHkvZ2V0LXN0eWxlLXByb3BlcnR5LmpzIiwiLi4vc3JjL2dlb21ldHJ5L2Rpc3RhbmNlcy5qcyIsIi4uL3NyYy9nZW9tZXRyeS9ib3VuZHMuanMiLCIuLi9zcmMvZ2VvbWV0cnkvYW5nbGVzLmpzIiwiLi4vc3JjL2JvdW5kaW5nLmpzIiwiLi4vc3JjL3V0aWxzL3JlbW92ZS1hcnJheS1pdGVtLmpzIiwiLi4vc3JjL3V0aWxzL3JhbmdlLmpzIiwiLi4vc3JjL3Bvc2l0aW9uaW5nLmpzIiwiLi4vc3JjL3RhcmdldC5qcyIsIi4uL3NyYy9zY29wZS5qcyIsIi4uL3NyYy91dGlscy9pcy1zdXBwb3J0LXBhc3NpdmUtZXZlbnRzLmpzIiwiLi4vc3JjL2RyYWdnYWJsZS5qcyIsIi4uL3NyYy9saXN0LmpzIiwiLi4vc3JjL2J1YmJsaW5nTGlzdC5qcyIsIi4uL3NyYy91dGlscy9jcmVhdGUtY2FudmFzLmpzIiwiLi4vc3JjL3NwaWRlci5qcyIsIi4uL3NyYy9hcmNzbGlkZXIuanMiLCIuLi9zcmMvY2hhcnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gZ2V0U3VtVmFsdWVPZlN0eWxlUnVsZXMoZWxlbWVudCwgcnVsZXMpIHtcbiAgcmV0dXJuIHJ1bGVzLnJlZHVjZSgoc3VtLCBydWxlKSA9PiB7XG4gICAgcmV0dXJuIHN1bSArIHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpW3J1bGVdfHwwKVxuICB9LCAwKVxufVxuXG4vKiogQ2xhc3MgcmVwcmVzZW50aW5nIGEgcG9pbnQuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2ludCB7XG4gIC8qKlxuICAqIENyZWF0ZSBhIHBvaW50LlxuICAqIEBwYXJhbSB7bnVtYmVyfSB4IC0gVGhlIHggdmFsdWUuXG4gICogQHBhcmFtIHtudW1iZXJ9IHkgLSBUaGUgeSB2YWx1ZS5cbiAgKi9cbiAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgIHRoaXMueCA9IHhcbiAgICB0aGlzLnkgPSB5XG4gIH1cblxuICBhZGQocCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54ICsgcC54LCB0aGlzLnkgKyBwLnkpXG4gIH1cblxuICBzdWIocCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54IC0gcC54LCB0aGlzLnkgLSBwLnkpXG4gIH1cblxuICBtdWx0KGspIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCAqIGssIHRoaXMueSAqIGspXG4gIH1cblxuICBuZWdhdGl2ZSgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KC10aGlzLngsIC10aGlzLnkpXG4gIH1cblxuICBjb21wYXJlKHApIHtcbiAgICByZXR1cm4gKHRoaXMueCA9PT0gcC54ICYmIHRoaXMueSA9PT0gcC55KVxuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLngsIHRoaXMueSlcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiBge3g9JHt0aGlzLnh9LHk9JHt0aGlzLnl9YFxuICB9XG5cbiAgc3RhdGljIGVsZW1lbnRPZmZzZXQoZWxlbWVudCwgcGFyZW50KSB7XG4gICAgcGFyZW50ID0gcGFyZW50IHx8IGVsZW1lbnQucGFyZW50Tm9kZVxuICAgIGNvbnN0IGVsZW1lbnRSZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIGNvbnN0IHBhcmVudFJlY3QgPSBwYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICByZXR1cm4gbmV3IFBvaW50KFxuICAgICAgZWxlbWVudFJlY3QubGVmdCAtIHBhcmVudFJlY3QubGVmdCxcbiAgICAgIGVsZW1lbnRSZWN0LnRvcCAtIHBhcmVudFJlY3QudG9wXG4gICAgKVxuICB9XG5cbiAgc3RhdGljIGVsZW1lbnRTaXplKGVsZW1lbnQsIGlzQ29udGVudEJveFNpemU9ZmFsc2UpIHtcbiAgICBsZXQgd2lkdGggPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KVsnd2lkdGgnXSlcbiAgICBsZXQgaGVpZ2h0ID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudClbJ2hlaWdodCddKVxuICAgIGlmICghaXNDb250ZW50Qm94U2l6ZSkge1xuICAgICAgd2lkdGggKz0gZ2V0U3VtVmFsdWVPZlN0eWxlUnVsZXMoZWxlbWVudCwgWydwYWRkaW5nLWxlZnQnLCAncGFkZGluZy1yaWdodCcsICdib3JkZXItbGVmdC13aWR0aCcsICdib3JkZXItcmlnaHQtd2lkdGgnXSlcbiAgICAgIGhlaWdodCArPSBnZXRTdW1WYWx1ZU9mU3R5bGVSdWxlcyhlbGVtZW50LCBbJ3BhZGRpbmctdG9wJywgJ3BhZGRpbmctYm90dG9tJywgJ2JvcmRlci10b3Atd2lkdGgnLCAnYm9yZGVyLWJvdHRvbS13aWR0aCddKVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFBvaW50KHdpZHRoLCBoZWlnaHQpXG4gIH1cbn1cbiIsImltcG9ydCBQb2ludCBmcm9tICcuL3BvaW50J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWN0YW5nbGUge1xuICBjb25zdHJ1Y3Rvcihwb3NpdGlvbiwgc2l6ZSkge1xuICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvblxuICAgIHRoaXMuc2l6ZSA9IHNpemVcbiAgfVxuXG4gIGdldFAxKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uXG4gIH1cblxuICBnZXRQMigpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54LCB0aGlzLnBvc2l0aW9uLnkpXG4gIH1cblxuICBnZXRQMygpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi5hZGQodGhpcy5zaXplKVxuICB9XG5cbiAgZ2V0UDQoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55KVxuICB9XG5cbiAgZ2V0Q2VudGVyKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLnNpemUubXVsdCgwLjUpKVxuICB9XG5cbiAgb3IocmVjdCkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gbmV3IFBvaW50KE1hdGgubWluKHRoaXMucG9zaXRpb24ueCwgcmVjdC5wb3NpdGlvbi54KSwgTWF0aC5taW4odGhpcy5wb3NpdGlvbi55LCByZWN0LnBvc2l0aW9uLnkpKVxuICAgIGNvbnN0IHNpemUgPSAobmV3IFBvaW50KE1hdGgubWF4KHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54LCByZWN0LnBvc2l0aW9uLnggKyByZWN0LnNpemUueCksIE1hdGgubWF4KHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55LCByZWN0LnBvc2l0aW9uLnkgKyByZWN0LnNpemUueSkpKS5zdWIocG9zaXRpb24pXG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUocG9zaXRpb24sIHNpemUpXG4gIH1cblxuICBhbmQocmVjdCkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gbmV3IFBvaW50KE1hdGgubWF4KHRoaXMucG9zaXRpb24ueCwgcmVjdC5wb3NpdGlvbi54KSwgTWF0aC5tYXgodGhpcy5wb3NpdGlvbi55LCByZWN0LnBvc2l0aW9uLnkpKVxuICAgIGNvbnN0IHNpemUgPSAobmV3IFBvaW50KE1hdGgubWluKHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54LCByZWN0LnBvc2l0aW9uLnggKyByZWN0LnNpemUueCksIE1hdGgubWluKHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55LCByZWN0LnBvc2l0aW9uLnkgKyByZWN0LnNpemUueSkpKS5zdWIocG9zaXRpb24pXG4gICAgaWYgKHNpemUueCA8PSAwIHx8IHNpemUueSA8PSAwKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZShwb3NpdGlvbiwgc2l6ZSlcbiAgfVxuXG4gIGluY2x1ZGVQb2ludChwKSB7XG4gICAgcmV0dXJuICEodGhpcy5wb3NpdGlvbi54ID4gcC54IHx8IHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54IDwgcC54IHx8IHRoaXMucG9zaXRpb24ueSA+IHAueSB8fCB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSA8IHAueSlcbiAgfVxuXG4gIGluY2x1ZGVSZWN0YW5nbGUocmVjdGFuZ2xlKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5jbHVkZVBvaW50KHJlY3RhbmdsZS5wb3NpdGlvbikgJiYgdGhpcy5pbmNsdWRlUG9pbnQocmVjdGFuZ2xlLmdldFAzKCkpXG4gIH1cblxuICBtb3ZlVG9Cb3VuZChyZWN0LCBheGlzKSB7XG4gICAgbGV0IHNlbEF4aXMsIGNyb3NzUmVjdGFuZ2xlXG4gICAgaWYgKGF4aXMpIHtcbiAgICAgIHNlbEF4aXMgPSBheGlzXG4gICAgfSBlbHNlIHtcbiAgICAgIGNyb3NzUmVjdGFuZ2xlID0gdGhpcy5hbmQocmVjdClcbiAgICAgIGlmICghY3Jvc3NSZWN0YW5nbGUpIHtcbiAgICAgICAgcmV0dXJuIHJlY3RcbiAgICAgIH1cbiAgICAgIHNlbEF4aXMgPSBjcm9zc1JlY3RhbmdsZS5zaXplLnggPiBjcm9zc1JlY3RhbmdsZS5zaXplLnkgPyAneScgOiAneCdcbiAgICB9XG4gICAgY29uc3QgdGhpc0NlbnRlciA9IHRoaXMuZ2V0Q2VudGVyKClcbiAgICBjb25zdCByZWN0Q2VudGVyID0gcmVjdC5nZXRDZW50ZXIoKVxuICAgIGNvbnN0IHNpZ24gPSB0aGlzQ2VudGVyW3NlbEF4aXNdID4gcmVjdENlbnRlcltzZWxBeGlzXSA/IC0xIDogMVxuICAgIGNvbnN0IG9mZnNldCA9IHNpZ24gPiAwID8gdGhpcy5wb3NpdGlvbltzZWxBeGlzXSArIHRoaXMuc2l6ZVtzZWxBeGlzXSAtIHJlY3QucG9zaXRpb25bc2VsQXhpc10gOiB0aGlzLnBvc2l0aW9uW3NlbEF4aXNdIC0gKHJlY3QucG9zaXRpb25bc2VsQXhpc10gKyByZWN0LnNpemVbc2VsQXhpc10pXG4gICAgcmVjdC5wb3NpdGlvbltzZWxBeGlzXSA9IHJlY3QucG9zaXRpb25bc2VsQXhpc10gKyBvZmZzZXRcbiAgICByZXR1cm4gcmVjdFxuICB9XG5cbiAgZ2V0U3F1YXJlKCkge1xuICAgIHJldHVybiB0aGlzLnNpemUueCAqIHRoaXMuc2l6ZS55XG4gIH1cblxuICBzdHlsZUFwcGx5KGVsKSB7XG4gICAgZWwgPSBlbCB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbmQnKVxuICAgIGVsLnN0eWxlLmxlZnQgPSB0aGlzLnBvc2l0aW9uLnggKyAncHgnXG4gICAgZWwuc3R5bGUudG9wID0gdGhpcy5wb3NpdGlvbi55ICsgJ3B4J1xuICAgIGVsLnN0eWxlLndpZHRoID0gdGhpcy5zaXplLnggKyAncHgnXG4gICAgZWwuc3R5bGUuaGVpZ2h0ID0gdGhpcy5zaXplLnkgKyAncHgnXG4gIH1cblxuICBncm93dGgoc2l6ZSkge1xuICAgIHRoaXMuc2l6ZSA9IHRoaXMuc2l6ZS5hZGQoc2l6ZSlcbiAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbi5hZGQoc2l6ZS5tdWx0KC0wLjUpKVxuICB9XG5cbiAgZ2V0TWluU2lkZSgpIHtcbiAgICByZXR1cm4gTWF0aC5taW4odGhpcy5zaXplLngsIHRoaXMuc2l6ZS55KVxuICB9XG5cbiAgc3RhdGljIGZyb21FbGVtZW50KGVsZW1lbnQsIHBhcmVudD1lbGVtZW50LnBhcmVudE5vZGUsIGlzQ29udGVudEJveFNpemU9ZmFsc2UsIGlzQ29uc2lkZXJUcmFuc2xhdGU9ZmFsc2UpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IFBvaW50LmVsZW1lbnRPZmZzZXQoZWxlbWVudCwgcGFyZW50LCBpc0NvbnNpZGVyVHJhbnNsYXRlKVxuICAgIGNvbnN0IHNpemUgPSBQb2ludC5lbGVtZW50U2l6ZShlbGVtZW50LCBpc0NvbnRlbnRCb3hTaXplKVxuICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHBvc2l0aW9uLCBzaXplKVxuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gaGFzQ2xhc3MoZWxlbWVudCwgYykge1xuICBjb25zdCByZSA9IG5ldyBSZWdFeHAoJyhefFxcXFxzKScgKyBjICsgJyhcXFxcc3wkKScsICdnJylcbiAgcmV0dXJuIChyZS50ZXN0KGVsZW1lbnQuY2xhc3NOYW1lKSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZENsYXNzKGVsZW1lbnQsIGMpIHtcbiAgaWYgKCFoYXNDbGFzcyhlbGVtZW50LCBjKSkge1xuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gKGVsZW1lbnQuY2xhc3NOYW1lICsgJyAnICsgYykucmVwbGFjZSgvXFxzKy9nLCAnICcpLnJlcGxhY2UoLyheIHwgJCkvZywgJycpXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNsYXNzKGVsZW1lbnQsIGMpIHtcbiAgY29uc3QgcmUgPSBuZXcgUmVnRXhwKCcoXnxcXFxccyknICsgYyArICcoXFxcXHN8JCknLCAnZycpXG4gIGVsZW1lbnQuY2xhc3NOYW1lID0gZWxlbWVudC5jbGFzc05hbWUucmVwbGFjZShyZSwgJyQxJykucmVwbGFjZSgvXFxzKy9nLCAnICcpLnJlcGxhY2UoLyheIHwgJCkvZywgJycpXG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXREZWZhdWx0Q29udGFpbmVyKGVsZW1lbnQpIHtcbiAgbGV0IGNvbnRhaW5lciA9IGVsZW1lbnQucGFyZW50Tm9kZVxuICB3aGlsZSAoY29udGFpbmVyLnBhcmVudE5vZGUgJiYgd2luZG93LmdldENvbXB1dGVkU3R5bGUoY29udGFpbmVyKVsncG9zaXRpb24nXSA9PT0gJ3N0YXRpYycgJiYgY29udGFpbmVyLnRhZ05hbWUgIT09ICdCT0RZJykge1xuICAgIGNvbnRhaW5lciA9IGNvbnRhaW5lci5wYXJlbnROb2RlXG4gIH1cbiAgcmV0dXJuIGNvbnRhaW5lclxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKGNvbnRleHQsIG9wdGlvbnMgPSB7fSkge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQgfHwgdGhpc1xuICAgIHRoaXMuZXZlbnRzID0ge31cblxuICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMub24pIHtcbiAgICAgIGZvciAoY29uc3QgW2V2ZW50TmFtZSwgZm5dIG9mIE9iamVjdC5lbnRyaWVzKG9wdGlvbnMub24pKSB7XG4gICAgICAgIHRoaXMub24oZXZlbnROYW1lLCBmbilcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBlbWl0KGV2ZW50TmFtZSkge1xuICAgIHRoaXMuaW50ZXJydXB0ZWQgPSBmYWxzZVxuICAgIGNvbnN0IGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSlcblxuICAgIGlmICghdGhpcy5ldmVudHNbZXZlbnROYW1lXSkgcmV0dXJuXG5cbiAgICBmb3IgKGNvbnN0IGZ1bmMgb2YgdGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgZnVuYy5hcHBseSh0aGlzLmNvbnRleHQsIGFyZ3MpXG4gICAgICBpZiAodGhpcy5pbnRlcnJ1cHRlZCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpbnRlcnJ1cHQoKSB7XG4gICAgdGhpcy5pbnRlcnJ1cHRlZCA9IHRydWVcbiAgfVxuXG4gIG9uKGV2ZW50TmFtZSwgZm4pIHtcbiAgICBpZiAoIXRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSBbXVxuICAgIH1cblxuICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0ucHVzaChmbilcbiAgfVxuXG4gIHByZXBlbmRPbihldmVudE5hbWUsIGZuKSB7XG4gICAgaWYgKCF0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdID0gW11cbiAgICB9XG5cbiAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLnVuc2hpZnQoZm4pXG4gIH1cblxuICB1bnN1YnNjcmliZShldmVudE5hbWUsIGZuKSB7XG4gICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5ldmVudHNbZXZlbnROYW1lXS5pbmRleE9mKGZuKVxuICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5zcGxpY2UoaW5kZXgsIDEpXG4gICAgfVxuICB9XG5cbiAgcmVzZXRFbWl0dGVyICgpIHtcbiAgICB0aGlzLmV2ZW50cyA9IHt9XG4gIH1cblxuICByZXNldE9uKGV2ZW50TmFtZSkge1xuICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSBbXVxuICB9XG59XG4iLCIvKiFcbiAqIGdldFN0eWxlUHJvcGVydHkgdjEuMC40XG4gKiBvcmlnaW5hbCBieSBrYW5nYXhcbiAqIGh0dHA6Ly9wZXJmZWN0aW9ua2lsbHMuY29tL2ZlYXR1cmUtdGVzdGluZy1jc3MtcHJvcGVydGllcy9cbiAqIE1JVCBsaWNlbnNlXG4gKi9cblxuLypqc2hpbnQgYnJvd3NlcjogdHJ1ZSwgc3RyaWN0OiB0cnVlLCB1bmRlZjogdHJ1ZSAqL1xuLypnbG9iYWwgZGVmaW5lOiBmYWxzZSwgZXhwb3J0czogZmFsc2UsIG1vZHVsZTogZmFsc2UgKi9cblxuKCBmdW5jdGlvbiggd2luZG93ICkge1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBwcmVmaXhlcyA9ICdXZWJraXQgTW96IG1zIE1zIE8nLnNwbGl0KCcgJyk7XG52YXIgZG9jRWxlbVN0eWxlID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlO1xuXG5mdW5jdGlvbiBnZXRTdHlsZVByb3BlcnR5KCBwcm9wTmFtZSApIHtcbiAgaWYgKCAhcHJvcE5hbWUgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gdGVzdCBzdGFuZGFyZCBwcm9wZXJ0eSBmaXJzdFxuICBpZiAoIHR5cGVvZiBkb2NFbGVtU3R5bGVbIHByb3BOYW1lIF0gPT09ICdzdHJpbmcnICkge1xuICAgIHJldHVybiBwcm9wTmFtZTtcbiAgfVxuXG4gIC8vIGNhcGl0YWxpemVcbiAgcHJvcE5hbWUgPSBwcm9wTmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHByb3BOYW1lLnNsaWNlKDEpO1xuXG4gIC8vIHRlc3QgdmVuZG9yIHNwZWNpZmljIHByb3BlcnRpZXNcbiAgdmFyIHByZWZpeGVkO1xuICBmb3IgKCB2YXIgaT0wLCBsZW4gPSBwcmVmaXhlcy5sZW5ndGg7IGkgPCBsZW47IGkrKyApIHtcbiAgICBwcmVmaXhlZCA9IHByZWZpeGVzW2ldICsgcHJvcE5hbWU7XG4gICAgaWYgKCB0eXBlb2YgZG9jRWxlbVN0eWxlWyBwcmVmaXhlZCBdID09PSAnc3RyaW5nJyApIHtcbiAgICAgIHJldHVybiBwcmVmaXhlZDtcbiAgICB9XG4gIH1cbn1cblxuLy8gdHJhbnNwb3J0XG5pZiAoIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcbiAgLy8gQU1EXG4gIGRlZmluZSggZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGdldFN0eWxlUHJvcGVydHk7XG4gIH0pO1xufSBlbHNlIGlmICggdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICkge1xuICAvLyBDb21tb25KUyBmb3IgQ29tcG9uZW50XG4gIG1vZHVsZS5leHBvcnRzID0gZ2V0U3R5bGVQcm9wZXJ0eTtcbn0gZWxzZSB7XG4gIC8vIGJyb3dzZXIgZ2xvYmFsXG4gIHdpbmRvdy5nZXRTdHlsZVByb3BlcnR5ID0gZ2V0U3R5bGVQcm9wZXJ0eTtcbn1cblxufSkoIHdpbmRvdyApO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldERpc3RhbmNlKHAxLCBwMikge1xuICBjb25zdCBkeCA9IHAxLnggLSBwMi54LCBkeSA9IHAxLnkgLSBwMi55XG4gIHJldHVybiBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRYRGlmZmVyZW5jZShwMSwgcDIpIHtcbiAgcmV0dXJuIE1hdGguYWJzKHAxLnggLSBwMi54KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0WURpZmZlcmVuY2UocDEsIHAyKSB7XG4gIHJldHVybiBNYXRoLmFicyhwMS55IC0gcDIueSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3Rvcnkob3B0aW9ucykge1xuICByZXR1cm4gKHAxLCBwMikgPT4ge1xuICAgIHJldHVybiBNYXRoLnNxcnQoXG4gICAgICBNYXRoLnBvdyhvcHRpb25zLnggKiBNYXRoLmFicyhwMS54IC0gcDIueCksIDIpICtcbiAgICAgIE1hdGgucG93KG9wdGlvbnMueSAqIE1hdGguYWJzKHAxLnkgLSBwMi55KSwgMilcbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluZGV4T2ZOZWFyZXN0UG9pbnQoYXJyLCB2YWwsIHJhZGl1cywgZ2V0RGlzdGFuY2VGdW5jPWdldERpc3RhbmNlKSB7XG4gIGxldCBzaXplLCBpbmRleCA9IDAsIGksIHRlbXBcbiAgaWYgKGFyci5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gLTFcbiAgfVxuICBzaXplID0gZ2V0RGlzdGFuY2VGdW5jKGFyclswXSwgdmFsKVxuICBmb3IgKGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgdGVtcCA9IGdldERpc3RhbmNlRnVuYyhhcnJbaV0sIHZhbClcbiAgICBpZiAodGVtcCA8IHNpemUpIHtcbiAgICAgIHNpemUgPSB0ZW1wXG4gICAgICBpbmRleCA9IGlcbiAgICB9XG4gIH1cbiAgaWYgKHJhZGl1cyA+PSAwICYmIHNpemUgPiByYWRpdXMpIHtcbiAgICByZXR1cm4gLTFcbiAgfVxuICByZXR1cm4gaW5kZXhcbn1cbiIsImltcG9ydCBQb2ludCBmcm9tICcuL3BvaW50J1xuaW1wb3J0IHsgZ2V0RGlzdGFuY2UgfSBmcm9tICcuL2Rpc3RhbmNlcydcblxuZXhwb3J0IGZ1bmN0aW9uIGNsYW1wKG1pbiwgbWF4LCB2YWwpIHtcbiAgcmV0dXJuIE1hdGgubWF4KG1pbiwgTWF0aC5taW4obWF4LCB2YWwpKVxufVxuXG4vL1JldHVybiBjcm9zc2luZyBwb2ludCBvZiB0d28gbGluZXNcbmV4cG9ydCBmdW5jdGlvbiBkaXJlY3RDcm9zc2luZyhMMVAxLCBMMVAyLCBMMlAxLCBMMlAyKSB7XG4gIGxldCB0ZW1wLCBrMSwgazIsIGIxLCBiMiwgeCwgeVxuICBpZiAoTDJQMS54ID09PSBMMlAyLngpIHtcbiAgICB0ZW1wID0gTDJQMVxuICAgIEwyUDEgPSBMMVAxXG4gICAgTDFQMSA9IHRlbXBcbiAgICB0ZW1wID0gTDJQMlxuICAgIEwyUDIgPSBMMVAyXG4gICAgTDFQMiA9IHRlbXBcbiAgfVxuICBpZiAoTDFQMS54ID09PSBMMVAyLngpIHtcbiAgICBrMiA9IChMMlAyLnkgLSBMMlAxLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICBiMiA9IChMMlAyLnggKiBMMlAxLnkgLSBMMlAxLnggKiBMMlAyLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICB4ID0gTDFQMS54XG4gICAgeSA9IHggKiBrMiArIGIyXG4gICAgcmV0dXJuIG5ldyBQb2ludCh4LCB5KVxuICB9IGVsc2Uge1xuICAgIGsxID0gKEwxUDIueSAtIEwxUDEueSkgLyAoTDFQMi54IC0gTDFQMS54KVxuICAgIGIxID0gKEwxUDIueCAqIEwxUDEueSAtIEwxUDEueCAqIEwxUDIueSkgLyAoTDFQMi54IC0gTDFQMS54KVxuICAgIGsyID0gKEwyUDIueSAtIEwyUDEueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgIGIyID0gKEwyUDIueCAqIEwyUDEueSAtIEwyUDEueCAqIEwyUDIueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgIHggPSAoYjEgLSBiMikgLyAoazIgLSBrMSlcbiAgICB5ID0geCAqIGsxICsgYjFcbiAgICByZXR1cm4gbmV3IFBvaW50KHgsIHkpXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kVG9TZWdtZW50KExQMSwgTFAyLCBQKSB7XG4gIGxldCB4LCB5XG4gIHggPSBjbGFtcChNYXRoLm1pbihMUDEueCwgTFAyLngpLCBNYXRoLm1heChMUDEueCwgTFAyLngpLCBQLngpXG4gIGlmICh4ICE9PSBQLngpIHtcbiAgICB5ID0gKHggPT09IExQMS54KSA/IExQMS55IDogTFAyLnlcbiAgICBQID0gbmV3IFBvaW50KHgsIHkpXG4gIH1cblxuICB5ID0gY2xhbXAoTWF0aC5taW4oTFAxLnksIExQMi55KSwgTWF0aC5tYXgoTFAxLnksIExQMi55KSwgUC55KVxuICBpZiAoeSAhPT0gUC55KSB7XG4gICAgeCA9ICh5ID09PSBMUDEueSkgPyBMUDEueCA6IExQMi54XG4gICAgUCA9IG5ldyBQb2ludCh4LCB5KVxuICB9XG5cbiAgcmV0dXJuIFBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kVG9MaW5lKEEsIEIsIFApIHtcbiAgY29uc3QgQVAgPSBuZXcgUG9pbnQoUC54IC0gQS54LCBQLnkgLSBBLnkpLFxuICAgIEFCID0gbmV3IFBvaW50KEIueCAtIEEueCwgQi55IC0gQS55KSxcbiAgICBhYjIgPSBBQi54ICogQUIueCArIEFCLnkgKiBBQi55LFxuICAgIGFwX2FiID0gQVAueCAqIEFCLnggKyBBUC55ICogQUIueSxcbiAgICB0ID0gYXBfYWIgLyBhYjJcbiAgcmV0dXJuIG5ldyBQb2ludChBLnggKyBBQi54ICogdCwgQS55ICsgQUIueSAqIHQpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb2ludE9uTGluZShMUDEsIExQMiwgcGVyY2VudCkge1xuICBjb25zdCBkeCA9IExQMi54IC0gTFAxLngsIGR5ID0gTFAyLnkgLSBMUDEueVxuICByZXR1cm4gbmV3IFBvaW50KExQMS54ICsgcGVyY2VudCAqIGR4LCBMUDEueSArIHBlcmNlbnQgKiBkeSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBvaW50T25MaW5lQnlMZW5naHQoTFAxLCBMUDIsIGxlbmdodCkge1xuICBjb25zdCBkeCA9IExQMi54IC0gTFAxLnhcbiAgY29uc3QgZHkgPSBMUDIueSAtIExQMS55XG4gIGNvbnN0IHBlcmNlbnQgPSBsZW5naHQgLyBnZXREaXN0YW5jZShMUDEsIExQMilcbiAgcmV0dXJuIG5ldyBQb2ludChMUDEueCArIHBlcmNlbnQgKiBkeCwgTFAxLnkgKyBwZXJjZW50ICogZHkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRQb2ludFRvQm91bmRQb2ludHMoYm91bmRwb2ludHMsIHBvaW50LCBpc1JpZ2h0KSB7XG4gIGNvbnN0IHJlc3VsdCA9IGJvdW5kcG9pbnRzLmZpbHRlcigoYlBvaW50KSA9PiB7XG4gICAgcmV0dXJuIGJQb2ludC55ID4gcG9pbnQueSB8fCAoaXNSaWdodCA/IGJQb2ludC54IDwgcG9pbnQueCA6IGJQb2ludC54ID4gcG9pbnQueClcbiAgfSlcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChwb2ludC55IDwgcmVzdWx0W2ldLnkpIHtcbiAgICAgIHJlc3VsdC5zcGxpY2UoaSwgMCwgcG9pbnQpXG4gICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxuICB9XG4gIHJlc3VsdC5wdXNoKHBvaW50KVxuICByZXR1cm4gcmVzdWx0XG59XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9wb2ludCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFuZ2xlRGlmZihhbHBoYSwgYmV0YSkge1xuICBjb25zdCBtaW5BbmdsZSA9IE1hdGgubWluKGFscGhhLCBiZXRhKVxuICBjb25zdCBtYXhBbmdsZSA9ICBNYXRoLm1heChhbHBoYSwgYmV0YSlcbiAgcmV0dXJuIE1hdGgubWluKG1heEFuZ2xlIC0gbWluQW5nbGUsIG1pbkFuZ2xlICsgTWF0aC5QSSoyIC0gbWF4QW5nbGUpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbmdsZShwMSwgcDIpIHtcbiAgY29uc3QgZGlmZiA9IHAyLnN1YihwMSlcbiAgcmV0dXJuIG5vcm1hbGl6ZUFuZ2xlKE1hdGguYXRhbjIoZGlmZi55LCBkaWZmLngpKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9SYWRpYW4oYW5nbGUpIHtcbiAgcmV0dXJuICgoYW5nbGUgJSAzNjApICogTWF0aC5QSSAvIDE4MClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvRGVncmVlKGFuZ2xlKSB7XG4gIHJldHVybiAoYW5nbGUgKiAxODAgLyBNYXRoLlBJKSAlIDM2MFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRBbmdsZShtaW4sIG1heCwgdmFsKSB7XG4gIGxldCBkbWluLCBkbWF4XG4gIGlmIChtaW4gPCBtYXggJiYgdmFsID4gbWluICYmIHZhbCA8IG1heCkge1xuICAgIHJldHVybiB2YWxcbiAgfSBlbHNlIGlmIChtYXggPCBtaW4gJiYgKHZhbCA8IG1heCB8fCB2YWwgPiBtaW4pKSB7XG4gICAgcmV0dXJuIHZhbFxuICB9IGVsc2Uge1xuICAgIGRtaW4gPSBnZXRBbmdsZURpZmYobWluLCB2YWwpXG4gICAgZG1heCA9IGdldEFuZ2xlRGlmZihtYXgsIHZhbClcbiAgICBpZiAoZG1pbiA8IGRtYXgpIHtcbiAgICAgIHJldHVybiBtaW5cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG1heFxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmVhcmVzdEFuZ2xlKGFyciwgYW5nbGUpIHtcbiAgbGV0IGksIHRlbXAsIGRpZmYgPSBNYXRoLlBJICogMiwgdmFsdWVcbiAgZm9yIChpID0gMDsgaSA8IGFyci5sZW5ndGg7aSsrKSB7XG4gICAgdGVtcCA9IGdldEFuZ2xlRGlmZihhcnJbaV0sIGFuZ2xlKVxuICAgIGlmIChkaWZmIDwgdGVtcCkge1xuICAgICAgZGlmZiA9IHRlbXBcbiAgICAgIHZhbHVlID0gYXJyW2ldXG4gICAgfVxuICB9XG4gIHJldHVybiB2YWx1ZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplQW5nbGUodmFsKSB7XG4gIHdoaWxlICh2YWwgPCAwKSB7XG4gICAgdmFsICs9IDIgKiBNYXRoLlBJXG4gIH1cbiAgd2hpbGUgKHZhbCA+IDIgKiBNYXRoLlBJKSB7XG4gICAgdmFsIC09IDIgKiBNYXRoLlBJXG4gIH1cbiAgcmV0dXJuIHZhbFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKGFuZ2xlLCBsZW5ndGgsIGNlbnRlcikge1xuICBjZW50ZXIgPSBjZW50ZXIgfHwgbmV3IFBvaW50KDAsIDApXG4gIHJldHVybiBjZW50ZXIuYWRkKG5ldyBQb2ludChsZW5ndGggKiBNYXRoLmNvcyhhbmdsZSksIGxlbmd0aCAqIE1hdGguc2luKGFuZ2xlKSkpXG59XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9nZW9tZXRyeS9wb2ludCdcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSAnLi9nZW9tZXRyeS9yZWN0YW5nbGUnXG5pbXBvcnQge1xuICBnZXRQb2ludE9uTGluZUJ5TGVuZ2h0LFxuICBkaXJlY3RDcm9zc2luZyxcbiAgYm91bmRUb0xpbmVcbn0gZnJvbSAnLi9nZW9tZXRyeS9ib3VuZHMnXG5cbmltcG9ydCB7XG4gIGdldEFuZ2xlLFxuICBub3JtYWxpemVBbmdsZSxcbiAgYm91bmRBbmdsZSxcbiAgZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtXG59IGZyb20gJy4vZ2VvbWV0cnkvYW5nbGVzJ1xuXG5leHBvcnQgY2xhc3MgQm91bmQge1xuICBjb25zdHJ1Y3RvciAoKSB7fVxuXG4gIGJvdW5kKHBvaW50LCBfc2l6ZSkge1xuICAgIHJldHVybiBwb2ludFxuICB9XG5cbiAgcmVmcmVzaCAoKSB7fVxuXG4gIHN0YXRpYyBib3VuZGluZygpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyB0aGlzKC4uLmFyZ3VtZW50cylcbiAgICByZXR1cm4gaW5zdGFuY2UuYm91bmQuYmluZChpbnN0YW5jZSlcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb1JlY3RhbmdsZSBleHRlbmRzIEJvdW5kIHtcbiAgY29uc3RydWN0b3IocmVjdGFuZ2xlKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMucmVjdGFuZ2xlID0gcmVjdGFuZ2xlXG4gIH1cblxuICBib3VuZChwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IGNhbGNQb2ludCA9IHBvaW50LmNsb25lKClcbiAgICBjb25zdCByZWN0UDIgPSB0aGlzLnJlY3RhbmdsZS5nZXRQMygpXG5cbiAgICBpZiAodGhpcy5yZWN0YW5nbGUucG9zaXRpb24ueCA+IGNhbGNQb2ludC54KSB7XG4gICAgICAoY2FsY1BvaW50LnggPSB0aGlzLnJlY3RhbmdsZS5wb3NpdGlvbi54KVxuICAgIH1cbiAgICBpZiAodGhpcy5yZWN0YW5nbGUucG9zaXRpb24ueSA+IGNhbGNQb2ludC55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHRoaXMucmVjdGFuZ2xlLnBvc2l0aW9uLnlcbiAgICB9XG4gICAgaWYgKHJlY3RQMi54IDwgY2FsY1BvaW50LnggKyBzaXplLngpIHtcbiAgICAgIGNhbGNQb2ludC54ID0gcmVjdFAyLnggLSBzaXplLnhcbiAgICB9XG4gICAgaWYgKHJlY3RQMi55IDwgY2FsY1BvaW50LnkgKyBzaXplLnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gcmVjdFAyLnkgLSBzaXplLnlcbiAgICB9XG5cbiAgICByZXR1cm4gY2FsY1BvaW50XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9FbGVtZW50IGV4dGVuZHMgQm91bmRUb1JlY3RhbmdsZSB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbnRhaW5lcikge1xuICAgIHN1cGVyKFJlY3RhbmdsZS5mcm9tRWxlbWVudChlbGVtZW50LCBjb250YWluZXIpKVxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lclxuICB9XG5cbiAgcmVmcmVzaCAoKSB7XG4gICAgdGhpcy5yZWN0YW5nbGUgPSBSZWN0YW5nbGUuZnJvbUVsZW1lbnQodGhpcy5lbGVtZW50LCB0aGlzLmNvbnRhaW5lcilcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb0xpbmVYIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3Rvcih4LCBzdGFydFksIGVuZFkpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy54ID0geFxuICAgIHRoaXMuc3RhcnRZID0gc3RhcnRZXG4gICAgdGhpcy5lbmRZID0gZW5kWVxuICB9XG5cbiAgYm91bmQocG9pbnQsIHNpemUpIHtcbiAgICBjb25zdCBjYWxjUG9pbnQgPSBwb2ludC5jbG9uZSgpXG5cbiAgICBjYWxjUG9pbnQueCA9IHRoaXMueFxuICAgIGlmICh0aGlzLnN0YXJ0WSA+IGNhbGNQb2ludC55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHRoaXMuc3RhcnRZXG4gICAgfVxuICAgIGlmICh0aGlzLmVuZFkgPCBjYWxjUG9pbnQueSArIHNpemUueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSB0aGlzLmVuZFkgLSBzaXplLnlcbiAgICB9XG5cbiAgICByZXR1cm4gY2FsY1BvaW50XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9MaW5lWSBleHRlbmRzIEJvdW5kIHtcbiAgY29uc3RydWN0b3IoeSwgc3RhcnRYLCBlbmRYKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMueSA9IHlcbiAgICB0aGlzLnN0YXJ0WCA9IHN0YXJ0WFxuICAgIHRoaXMuZW5kWCA9IGVuZFhcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgY2FsY1BvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIGNhbGNQb2ludC55ID0gdGhpcy55XG4gICAgaWYgKHRoaXMuc3RhcnRYID4gY2FsY1BvaW50LngpIHtcbiAgICAgIGNhbGNQb2ludC54ID0gdGhpcy5zdGFydFhcbiAgICB9XG4gICAgaWYgKHRoaXMuZW5kWCA8IGNhbGNQb2ludC54ICsgc2l6ZS54KSB7XG4gICAgICBjYWxjUG9pbnQueCA9IHRoaXMuZW5kWCAtIHNpemUueFxuICAgIH1cbiAgICByZXR1cm4gY2FsY1BvaW50XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9MaW5lIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3RvcihzdGFydFBvaW50LCBlbmRQb2ludCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnN0YXJ0UG9pbnQgPSBzdGFydFBvaW50XG4gICAgdGhpcy5lbmRQb2ludCA9IGVuZFBvaW50XG4gICAgY29uc3QgYWxwaGEgPSBNYXRoLmF0YW4yKGVuZFBvaW50LnkgLSBzdGFydFBvaW50LnksIGVuZFBvaW50LnggLSBzdGFydFBvaW50LngpXG4gICAgY29uc3QgYmV0YSA9IGFscGhhICsgTWF0aC5QSSAvIDJcbiAgICB0aGlzLnNvbWVLID0gMTBcbiAgICB0aGlzLmNvc0JldGEgPSBNYXRoLmNvcyhiZXRhKVxuICAgIHRoaXMuc2luQmV0YSA9IE1hdGguc2luKGJldGEpXG4gIH1cblxuICBib3VuZChwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IHBvaW50MiA9IG5ldyBQb2ludChcbiAgICAgIHBvaW50LnggKyB0aGlzLnNvbWVLICogdGhpcy5jb3NCZXRhLFxuICAgICAgcG9pbnQueSArIHRoaXMuc29tZUsgKiB0aGlzLnNpbkJldGFcbiAgICApXG5cbiAgICBjb25zdCBuZXdFbmRQb2ludCA9IGdldFBvaW50T25MaW5lQnlMZW5naHQodGhpcy5lbmRQb2ludCwgdGhpcy5zdGFydFBvaW50LCBzaXplLngpXG4gICAgY29uc3QgcG9pbnRDcm9zc2luZyA9IGRpcmVjdENyb3NzaW5nKHRoaXMuc3RhcnRQb2ludCwgdGhpcy5lbmRQb2ludCwgcG9pbnQsIHBvaW50MilcblxuICAgIHJldHVybiBib3VuZFRvTGluZSh0aGlzLnN0YXJ0UG9pbnQsIG5ld0VuZFBvaW50LCBwb2ludENyb3NzaW5nKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvQ2lyY2xlIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3RvcihjZW50ZXIsIHJhZGl1cykge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLmNlbnRlciA9IGNlbnRlclxuICAgIHRoaXMucmFkaXVzID0gcmFkaXVzXG4gIH1cblxuICBib3VuZChwb2ludCwgX3NpemUpIHtcbiAgICByZXR1cm4gZ2V0UG9pbnRPbkxpbmVCeUxlbmdodCh0aGlzLmNlbnRlciwgcG9pbnQsIHRoaXMucmFkaXVzKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvQXJjIGV4dGVuZHMgQm91bmRUb0NpcmNsZSB7XG4gIGNvbnN0cnVjdG9yKGNlbnRlciwgcmFkaXVzLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSkge1xuICAgIHN1cGVyKGNlbnRlciwgcmFkaXVzKVxuICAgIHRoaXMuX3N0YXJ0QW5nbGUgPSBzdGFydEFuZ2xlXG4gICAgdGhpcy5fZW5kQW5nbGUgPSBlbmRBbmdsZVxuICB9XG5cbiAgc3RhcnRBbmdsZSgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMuX3N0YXJ0QW5nbGUgPT09ICdmdW5jdGlvbicgPyB0aGlzLl9zdGFydEFuZ2xlKCkgOiB0aGlzLl9zdGFydEFuZ2xlXG4gIH1cblxuICBlbmRBbmdsZSgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMuX2VuZEFuZ2xlID09PSAnZnVuY3Rpb24nID8gdGhpcy5fZW5kQW5nbGUoKSA6IHRoaXMuX2VuZEFuZ2xlXG4gIH1cblxuICBib3VuZChwb2ludCwgX3NpemUpIHtcbiAgICBsZXQgYW5nbGUgPSBnZXRBbmdsZSh0aGlzLmNlbnRlciwgcG9pbnQpXG4gICAgYW5nbGUgPSBub3JtYWxpemVBbmdsZShhbmdsZSlcbiAgICBhbmdsZSA9IGJvdW5kQW5nbGUodGhpcy5zdGFydEFuZ2xlKCksIHRoaXMuZW5kQW5nbGUoKSwgYW5nbGUpXG4gICAgcmV0dXJuIGdldFBvaW50RnJvbVJhZGlhbFN5c3RlbShhbmdsZSwgdGhpcy5yYWRpdXMsIHRoaXMuY2VudGVyKVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhcnJheSwgdmFsKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoYXJyYXlbaV0gPT09IHZhbCkge1xuICAgICAgYXJyYXkuc3BsaWNlKGksIDEpXG4gICAgICBpLS1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycmF5XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByYW5nZShzdGFydCwgc3RvcCwgc3RlcCkge1xuICBjb25zdCByZXN1bHQgPSBbXVxuICBpZiAodHlwZW9mIHN0b3AgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgc3RvcCA9IHN0YXJ0XG4gICAgc3RhcnQgPSAwXG4gIH1cbiAgaWYgKHR5cGVvZiBzdGVwID09PSAndW5kZWZpbmVkJykge1xuICAgIHN0ZXAgPSAxXG4gIH1cbiAgaWYgKChzdGVwID4gMCAmJiBzdGFydCA+PSBzdG9wKSB8fCAoc3RlcCA8IDAgJiYgc3RhcnQgPD0gc3RvcCkpIHtcbiAgICByZXR1cm4gW11cbiAgfVxuICBmb3IgKGxldCBpID0gc3RhcnQ7IHN0ZXAgPiAwID8gaSA8IHN0b3AgOiBpID4gc3RvcDsgaSArPSBzdGVwKSB7XG4gICAgcmVzdWx0LnB1c2goaSlcbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9nZW9tZXRyeS9wb2ludCdcbmltcG9ydCB7IGFkZFBvaW50VG9Cb3VuZFBvaW50cyB9IGZyb20gJy4vZ2VvbWV0cnkvYm91bmRzJ1xuXG5pbXBvcnQge1xuICBpbmRleE9mTmVhcmVzdFBvaW50LFxuICBnZXREaXN0YW5jZVxufSBmcm9tICcuL2dlb21ldHJ5L2Rpc3RhbmNlcydcblxuY2xhc3MgQmFzaWNTdHJhdGVneSB7XG4gIGNvbnN0cnVjdG9yKHJlY3RhbmdsZSwgb3B0aW9ucz17fSkge1xuICAgIHRoaXMucmVjdGFuZ2xlID0gcmVjdGFuZ2xlXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9uc1xuICB9XG5cbiAgZ2V0IGJvdW5kUmVjdCAoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGlzLnJlY3RhbmdsZSA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMucmVjdGFuZ2xlKCkgOiB0aGlzLnJlY3RhbmdsZVxuICB9XG59XG5cbmNsYXNzIE5vdENyb3NzaW5nU3RyYXRlZ3kgZXh0ZW5kcyBCYXNpY1N0cmF0ZWd5IHtcbiAgcG9zaXRpb25pbmcgKHJlY3RhbmdsZUxpc3QsIGluZGV4ZXNPZk5ld3MpIHtcbiAgICBjb25zdCBzdGF0aWNSZWN0YW5nbGVJbmRleGVzID0gcmVjdGFuZ2xlTGlzdC5yZWR1Y2UoKGluZGV4ZXMsIF9yZWN0LCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGluZGV4ZXNPZk5ld3MuaW5kZXhPZihpbmRleCkgPT09IC0xKSB7XG4gICAgICAgIGluZGV4ZXMucHVzaChpbmRleClcbiAgICAgIH1cbiAgICAgIHJldHVybiBpbmRleGVzXG4gICAgfSwgW10pXG5cbiAgICBpbmRleGVzT2ZOZXdzLmZvckVhY2goKGluZGV4KSA9PiB7XG4gICAgICBsZXQgcmVjdCA9IHJlY3RhbmdsZUxpc3RbaW5kZXhdXG4gICAgICBsZXQgcmVtb3ZhYmxlID0gZmFsc2VcblxuICAgICAgc3RhdGljUmVjdGFuZ2xlSW5kZXhlcy5mb3JFYWNoKChpbmRleE9mU3RhdGljKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YXRpY1JlY3QgPSByZWN0YW5nbGVMaXN0W2luZGV4T2ZTdGF0aWNdXG4gICAgICAgIHJlY3QgPSBzdGF0aWNSZWN0Lm1vdmVUb0JvdW5kKHJlY3QpXG4gICAgICB9KVxuXG4gICAgICByZW1vdmFibGUgPSBzdGF0aWNSZWN0YW5nbGVJbmRleGVzLnNvbWUoKGluZGV4T2ZTdGF0aWMpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhdGljUmVjdCA9IHJlY3RhbmdsZUxpc3RbaW5kZXhPZlN0YXRpY11cbiAgICAgICAgcmV0dXJuICAhIXN0YXRpY1JlY3QuYW5kKHJlY3QpXG4gICAgICB9KSB8fCByZWN0LmFuZCh0aGlzLmJvdW5kUmVjdCkuZ2V0U3F1YXJlKCkgIT09IHJlY3QuZ2V0U3F1YXJlKClcblxuICAgICAgaWYgKHJlbW92YWJsZSkge1xuICAgICAgICByZWN0LnJlbW92YWJsZSA9IHRydWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMucHVzaChpbmRleClcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiByZWN0YW5nbGVMaXN0XG4gIH1cblxuICBzb3J0aW5nKG9kbERyYWdnYWJsZXNMaXN0LCBuZXdEcmFnZ2FibGVzLCBpbmRleE9mTmV3cykge1xuICAgIGNvbnN0IGRyYWdnYWJsZXMgPSBvZGxEcmFnZ2FibGVzTGlzdC5jb25jYXQobmV3RHJhZ2dhYmxlcylcbiAgICBuZXdEcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgaW5kZXhPZk5ld3MucHVzaChkcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSlcbiAgICB9KVxuICAgIHJldHVybiBkcmFnZ2FibGVzXG4gIH1cbn1cblxuY2xhc3MgRmxvYXRMZWZ0U3RyYXRlZ3kgZXh0ZW5kcyBCYXNpY1N0cmF0ZWd5IHtcbiAgY29uc3RydWN0b3IocmVjdGFuZ2xlLCBvcHRpb25zPXt9KSB7XG4gICAgc3VwZXIocmVjdGFuZ2xlLCBvcHRpb25zKVxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgcmVtb3ZhYmxlOiB0cnVlXG4gICAgfSwgb3B0aW9ucylcblxuICAgIHRoaXMucmFkaXVzID0gb3B0aW9ucy5yYWRpdXMgfHwgODBcblxuICAgIHRoaXMucGFkZGluZ1RvcExlZnQgPSBvcHRpb25zLnBhZGRpbmdUb3BMZWZ0IHx8IG5ldyBQb2ludCgwLCAwKVxuICAgIHRoaXMucGFkZGluZ0JvdHRvbVJpZ2h0ID0gb3B0aW9ucy5wYWRkaW5nQm90dG9tUmlnaHQgfHwgbmV3IFBvaW50KDAsIDApXG4gICAgdGhpcy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgPSBvcHRpb25zLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyB8fCAwXG5cbiAgICB0aGlzLmdldERpc3RhbmNlID0gb3B0aW9ucy5nZXREaXN0YW5jZSB8fCBnZXREaXN0YW5jZVxuICAgIHRoaXMuZ2V0UG9zaXRpb24gPSBvcHRpb25zLmdldFBvc2l0aW9uIHx8ICgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucG9zaXRpb24pXG4gIH1cblxuICBwb3NpdGlvbmluZyhyZWN0YW5nbGVMaXN0LCBfaW5kZXhlc09mTmV3cykge1xuICAgIGNvbnN0IGJvdW5kUmVjdCA9IHRoaXMuYm91bmRSZWN0XG4gICAgY29uc3QgcmVjdFAyID0gYm91bmRSZWN0LmdldFAyKClcbiAgICBsZXQgYm91bmRhcnlQb2ludHMgPSBbYm91bmRSZWN0LnBvc2l0aW9uXVxuXG4gICAgcmVjdGFuZ2xlTGlzdC5mb3JFYWNoKChyZWN0LCByZWN0SW5kZXgpID0+IHtcbiAgICAgIGxldCBwb3NpdGlvbiwgaXNWYWxpZCA9IGZhbHNlXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvdW5kYXJ5UG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHBvc2l0aW9uID0gbmV3IFBvaW50KFxuICAgICAgICAgIGJvdW5kYXJ5UG9pbnRzW2ldLnggKyB0aGlzLnBhZGRpbmdUb3BMZWZ0LngsXG4gICAgICAgICAgaSA+IDAgPyAoYm91bmRhcnlQb2ludHNbaSAtIDFdLnkgKyB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcykgOiAoYm91bmRSZWN0LnBvc2l0aW9uLnkgKyB0aGlzLnBhZGRpbmdUb3BMZWZ0LnkpXG4gICAgICAgIClcblxuICAgICAgICBpc1ZhbGlkID0gKHBvc2l0aW9uLnggKyByZWN0LnNpemUueCA8IHJlY3RQMi54KVxuXG4gICAgICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgcG9zaXRpb24gPSBuZXcgUG9pbnQoXG4gICAgICAgICAgYm91bmRSZWN0LnBvc2l0aW9uLnggKyB0aGlzLnBhZGRpbmdUb3BMZWZ0LngsXG4gICAgICAgICAgYm91bmRhcnlQb2ludHNbYm91bmRhcnlQb2ludHMubGVuZ3RoIC0gMV0ueSArIChyZWN0SW5kZXggPiAwID8gdGhpcy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgOiB0aGlzLnBhZGRpbmdUb3BMZWZ0LnkpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgcmVjdC5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnJlbW92YWJsZSAmJiByZWN0LmdldFAzKCkueSA+IGJvdW5kUmVjdC5nZXRQMygpLnkpIHtcbiAgICAgICAgcmVjdC5yZW1vdmFibGUgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGJvdW5kYXJ5UG9pbnRzID0gYWRkUG9pbnRUb0JvdW5kUG9pbnRzKGJvdW5kYXJ5UG9pbnRzLCByZWN0LmdldFAzKCkuYWRkKHRoaXMucGFkZGluZ0JvdHRvbVJpZ2h0KSlcbiAgICB9KVxuICAgIHJldHVybiByZWN0YW5nbGVMaXN0XG4gIH1cblxuICBzb3J0aW5nKG9kbERyYWdnYWJsZXNMaXN0LCBuZXdEcmFnZ2FibGVzLCBpbmRleE9mTmV3cykge1xuICAgIGNvbnN0IG5ld0xpc3QgPSBvZGxEcmFnZ2FibGVzTGlzdC5jb25jYXQoKVxuICAgIGNvbnN0IGxpc3RPbGRQb3NpdGlvbiA9IG9kbERyYWdnYWJsZXNMaXN0Lm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUuZ2V0UG9zaXRpb24oKSlcbiAgICBuZXdEcmFnZ2FibGVzLmZvckVhY2goKG5ld0RyYWdnYWJsZSkgPT4ge1xuICAgICAgbGV0IGluZGV4ID0gaW5kZXhPZk5lYXJlc3RQb2ludChsaXN0T2xkUG9zaXRpb24sIHRoaXMuZ2V0UG9zaXRpb24obmV3RHJhZ2dhYmxlKSwgdGhpcy5yYWRpdXMsIHRoaXMuZ2V0RGlzdGFuY2UpXG4gICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgIGluZGV4ID0gbmV3TGlzdC5sZW5ndGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluZGV4ID0gbmV3TGlzdC5pbmRleE9mKG9kbERyYWdnYWJsZXNMaXN0W2luZGV4XSlcbiAgICAgIH1cbiAgICAgIG5ld0xpc3Quc3BsaWNlKGluZGV4LCAwLCBuZXdEcmFnZ2FibGUpXG4gICAgfSlcbiAgICBuZXdEcmFnZ2FibGVzLmZvckVhY2goKG5ld0RyYWdnYWJsZSkgPT4ge1xuICAgICAgaW5kZXhPZk5ld3MucHVzaChuZXdMaXN0LmluZGV4T2YobmV3RHJhZ2dhYmxlKSlcbiAgICB9KVxuICAgIHJldHVybiBuZXdMaXN0XG4gIH1cbn1cblxuY2xhc3MgRmxvYXRSaWdodFN0cmF0ZWd5IGV4dGVuZHMgRmxvYXRMZWZ0U3RyYXRlZ3kge1xuICBjb25zdHJ1Y3RvcihyZWN0YW5nbGUsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcihyZWN0YW5nbGUsIG9wdGlvbnMpXG5cbiAgICB0aGlzLnBhZGRpbmdUb3BSaWdodCA9IG9wdGlvbnMucGFkZGluZ1RvcFJpZ2h0IHx8IG5ldyBQb2ludCg1LCA1KVxuICAgIHRoaXMucGFkZGluZ0JvdHRvbUxlZnQgPSBvcHRpb25zLnBhZGRpbmdCb3R0b21MZWZ0IHx8IG5ldyBQb2ludCgwLCAwKVxuICAgIHRoaXMueUdhcEJldHdlZW5EcmFnZ2FibGVzID0gb3B0aW9ucy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgfHwgMFxuXG4gICAgdGhpcy5wYWRkaW5nQm90dG9tTmVnTGVmdCA9IG5ldyBQb2ludCgtdGhpcy5wYWRkaW5nQm90dG9tTGVmdC54LCB0aGlzLnBhZGRpbmdCb3R0b21MZWZ0LnkpXG4gIH1cblxuICBwb3NpdGlvbmluZyhyZWN0YW5nbGVMaXN0LCBfaW5kZXhlc09mTmV3cykge1xuICAgIGNvbnN0IGJvdW5kUmVjdCA9IHRoaXMuYm91bmRSZWN0XG4gICAgbGV0IGJvdW5kYXJ5UG9pbnRzID0gW2JvdW5kUmVjdC5nZXRQMigpXVxuXG4gICAgcmVjdGFuZ2xlTGlzdC5mb3JFYWNoKChyZWN0LCByZWN0SW5kZXgpID0+IHtcbiAgICAgIGxldCBwb3NpdGlvbiwgaXNWYWxpZCA9IGZhbHNlXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvdW5kYXJ5UG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHBvc2l0aW9uID0gbmV3IFBvaW50KFxuICAgICAgICAgIGJvdW5kYXJ5UG9pbnRzW2ldLnggLSByZWN0LnNpemUueCAtIHRoaXMucGFkZGluZ1RvcFJpZ2h0LngsXG4gICAgICAgICAgaSA+IDAgPyAoYm91bmRhcnlQb2ludHNbaSAtIDFdLnkgKyB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcykgOiAoYm91bmRSZWN0LnBvc2l0aW9uLnkgKyB0aGlzLnBhZGRpbmdUb3BSaWdodC55KVxuICAgICAgICApXG5cbiAgICAgICAgaXNWYWxpZCA9IChwb3NpdGlvbi54ID4gcmVjdC5wb3NpdGlvbi54KVxuICAgICAgICBpZiAoaXNWYWxpZCkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICBwb3NpdGlvbiA9IG5ldyBQb2ludChcbiAgICAgICAgICBib3VuZFJlY3QuZ2V0UDIoKS54ICAtIHJlY3Quc2l6ZS54IC0gdGhpcy5wYWRkaW5nVG9wUmlnaHQueCxcbiAgICAgICAgICBib3VuZGFyeVBvaW50c1tib3VuZGFyeVBvaW50cy5sZW5ndGggLSAxXS55ICsgKHJlY3RJbmRleCA+IDAgPyB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyA6IHRoaXMucGFkZGluZ1RvcFJpZ2h0LnkpXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIHJlY3QucG9zaXRpb24gPSBwb3NpdGlvblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZW1vdmFibGUgJiYgcmVjdC5nZXRQNCgpLnkgPiBib3VuZFJlY3QuZ2V0UDQoKS55KSB7XG4gICAgICAgIHJlY3QucmVtb3ZhYmxlID0gdHJ1ZVxuICAgICAgfVxuICAgICAgYm91bmRhcnlQb2ludHMgPSBhZGRQb2ludFRvQm91bmRQb2ludHMoYm91bmRhcnlQb2ludHMsIHJlY3QuZ2V0UDQoKS5hZGQodGhpcy5wYWRkaW5nQm90dG9tTmVnTGVmdCksIHRydWUpXG4gICAgfSlcbiAgICByZXR1cm4gcmVjdGFuZ2xlTGlzdFxuICB9XG59XG5cbmV4cG9ydCB7IE5vdENyb3NzaW5nU3RyYXRlZ3ksIEZsb2F0TGVmdFN0cmF0ZWd5LCBGbG9hdFJpZ2h0U3RyYXRlZ3kgfVxuIiwiaW1wb3J0IHJhbmdlIGZyb20gJy4vdXRpbHMvcmFuZ2UuanMnXG5pbXBvcnQgcmVtb3ZlSXRlbSBmcm9tICcuL3V0aWxzL3JlbW92ZS1hcnJheS1pdGVtJ1xuaW1wb3J0IGdldERlZmF1bHRDb250YWluZXIgZnJvbSAnLi91dGlscy9nZXQtZGVmYXVsdC1jb250YWluZXInXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnRFbWl0dGVyJ1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tICcuL2dlb21ldHJ5L3JlY3RhbmdsZSdcbmltcG9ydCB7IHRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3RvcnkgfSBmcm9tICcuL2dlb21ldHJ5L2Rpc3RhbmNlcydcbmltcG9ydCB7IHNjb3BlcywgZGVmYXVsdFNjb3BlIH0gZnJvbSAnLi9zY29wZSdcblxuaW1wb3J0IHsgRmxvYXRMZWZ0U3RyYXRlZ3kgfSBmcm9tICcuL3Bvc2l0aW9uaW5nJ1xuXG5jb25zdCBhZGRUb0RlZmF1bHRTY29wZSA9IGZ1bmN0aW9uKHRhcmdldCkge1xuICBkZWZhdWx0U2NvcGUuYWRkVGFyZ2V0KHRhcmdldClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFyZ2V0IGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgZHJhZ2dhYmxlcywgb3B0aW9ucyA9IHt9KSB7XG4gICAgc3VwZXIodW5kZWZpbmVkLCBvcHRpb25zKVxuICAgIGNvbnN0IHRhcmdldCA9IHRoaXNcblxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgdGltZUVuZDogMjAwLFxuICAgICAgdGltZUV4Y2FuZ2U6IDQwMFxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0aGlzLnBvc2l0aW9uaW5nU3RyYXRlZ3kgPSBvcHRpb25zLnN0cmF0ZWd5IHx8IG5ldyBGbG9hdExlZnRTdHJhdGVneShcbiAgICAgIHRoaXMuZ2V0UmVjdGFuZ2xlLmJpbmQodGhpcyksXG4gICAgICB7XG4gICAgICAgIHJhZGl1czogODAsXG4gICAgICAgIGdldERpc3RhbmNlOiB0cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5KHsgeDogMSwgeTogNCB9KSxcbiAgICAgICAgcmVtb3ZhYmxlOiB0cnVlXG4gICAgICB9XG4gICAgKVxuXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUudGFyZ2V0cy5wdXNoKHRhcmdldCkpXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gZHJhZ2dhYmxlc1xuXG4gICAgVGFyZ2V0LmVtaXR0ZXIuZW1pdCgndGFyZ2V0OmNyZWF0ZScsIHRoaXMpXG5cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgcG9zaXRpb25pbmcgKGRyYWdnYWJsZXMsIGluZGV4ZXNPZk5ldykge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uaW5nU3RyYXRlZ3kucG9zaXRpb25pbmcoZHJhZ2dhYmxlcywgaW5kZXhlc09mTmV3KVxuICB9XG5cbiAgc29ydGluZyAob2xkRHJhZ2dhYmxlcywgbmV3RHJhZ2dhYmxlcywgaW5kZXhPZk5ld3MpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbmluZ1N0cmF0ZWd5LnNvcnRpbmcob2xkRHJhZ2dhYmxlcywgbmV3RHJhZ2dhYmxlcywgaW5kZXhPZk5ld3MpXG4gIH1cblxuICBpbml0KCkge1xuICAgIGxldCByZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXdcblxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzID0gdGhpcy5kcmFnZ2FibGVzLmZpbHRlcigoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBsZXQgZWxlbWVudCA9IGRyYWdnYWJsZS5lbGVtZW50LnBhcmVudE5vZGVcbiAgICAgIHdoaWxlIChlbGVtZW50KSB7XG4gICAgICAgIGlmIChlbGVtZW50ID09PSB0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGVcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH0pXG5cbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMubGVuZ3RoKSB7XG4gICAgICBpbmRleGVzT2ZOZXcgPSByYW5nZSh0aGlzLmlubmVyRHJhZ2dhYmxlcy5sZW5ndGgpXG4gICAgICByZWN0YW5nbGVzID0gdGhpcy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgICB9KSwgaW5kZXhlc09mTmV3KVxuICAgICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXcpXG4gICAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHRoaXMuZW1pdCgndGFyZ2V0OmFkZCcsIGRyYWdnYWJsZSkpXG4gICAgfVxuICB9XG5cbiAgZ2V0UmVjdGFuZ2xlKCkge1xuICAgIHJldHVybiBSZWN0YW5nbGUuZnJvbUVsZW1lbnQoXG4gICAgICB0aGlzLmVsZW1lbnQsXG4gICAgICB0aGlzLmNvbnRhaW5lcixcbiAgICAgIHRoaXMub3B0aW9ucy5pc0NvbnRlbnRCb3hTaXplLFxuICAgICAgdHJ1ZVxuICAgIClcbiAgfVxuXG4gIGNhdGNoRHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuY2F0Y2hEcmFnZ2FibGUpIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuY2F0Y2hEcmFnZ2FibGUodGhpcywgZHJhZ2dhYmxlKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0YXJnZXRSZWN0YW5nbGUgPSB0aGlzLmdldFJlY3RhbmdsZSgpXG4gICAgICBjb25zdCBkcmFnZ2FibGVTcXVhcmUgPSBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKCkuZ2V0U3F1YXJlKClcblxuICAgICAgcmV0dXJuIGRyYWdnYWJsZVNxdWFyZSA8IHRhcmdldFJlY3RhbmdsZS5nZXRTcXVhcmUoKVxuICAgICAgICAgICAgICAmJiB0YXJnZXRSZWN0YW5nbGUuaW5jbHVkZVBvaW50KGRyYWdnYWJsZS5nZXRDZW50ZXIoKSlcbiAgICB9XG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRSZWN0YW5nbGUoKS5wb3NpdGlvblxuICB9XG5cbiAgZ2V0U2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRSZWN0YW5nbGUoKS5zaXplXG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHNjb3Blcy5mb3JFYWNoKChzY29wZSkgPT4gcmVtb3ZlSXRlbShzY29wZS50YXJnZXRzLCB0aGlzKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgW10pXG4gICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBbXSwgMClcbiAgfVxuXG4gIG9uRW5kKGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IG5ld0RyYWdnYWJsZXNJbmRleCA9IFtdXG4gICAgY29uc3QgaW5jbHVkZVBvaW50ID0gdGhpcy5nZXRSZWN0YW5nbGUoKS5pbmNsdWRlUG9pbnQoZHJhZ2dhYmxlLmdldFBvc2l0aW9uKCkpXG5cbiAgICBpZiAoIWluY2x1ZGVQb2ludCkge1xuICAgICAgaWYgKHRoaXMuZ2V0UmVjdGFuZ2xlKCkuaW5jbHVkZVBvaW50KGRyYWdnYWJsZS5nZXRDZW50ZXIoKSkpIHtcbiAgICAgICAgZHJhZ2dhYmxlLnBvc2l0aW9uID0gZHJhZ2dhYmxlLmdldENlbnRlcigpLmNsb25lKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuZW1pdCgndGFyZ2V0OmJlZm9yZUFkZCcsIGRyYWdnYWJsZSlcblxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzID0gdGhpcy5zb3J0aW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLCBbZHJhZ2dhYmxlXSwgbmV3RHJhZ2dhYmxlc0luZGV4KVxuICAgIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgfSksIG5ld0RyYWdnYWJsZXNJbmRleClcblxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgbmV3RHJhZ2dhYmxlc0luZGV4KVxuICAgIGlmICh0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkgIT09IC0xKSB7XG4gICAgICB0aGlzLmFkZFJlbW92ZU9uTW92ZShkcmFnZ2FibGUpXG4gICAgfVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBzZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXcsIHRpbWUpIHtcbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5zbGljZSgwKS5mb3JFYWNoKChkcmFnZ2FibGUsIGkpID0+IHtcbiAgICAgIGNvbnN0IHJlY3QgPSByZWN0YW5nbGVzW2ldLFxuICAgICAgICB0aW1lRW5kID0gdGltZSB8fCB0aW1lID09PSAwID8gdGltZSA6IGluZGV4ZXNPZk5ldy5pbmRleE9mKGkpICE9PSAtMSA/IHRoaXMub3B0aW9ucy50aW1lRW5kIDogdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlXG5cbiAgICAgIGlmIChyZWN0LnJlbW92YWJsZSkge1xuICAgICAgICBkcmFnZ2FibGUubW92ZShkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uLCB0aW1lRW5kLCB0cnVlLCB0cnVlKVxuICAgICAgICByZW1vdmVJdGVtKHRoaXMuaW5uZXJEcmFnZ2FibGVzLCBkcmFnZ2FibGUpXG4gICAgICAgIHRoaXMuZW1pdCgndGFyZ2V0OnJlbW92ZScsIGRyYWdnYWJsZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRyYWdnYWJsZS5tb3ZlKHJlY3QucG9zaXRpb24sIHRpbWVFbmQsIHRydWUsIHRydWUpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGFkZChkcmFnZ2FibGUsIHRpbWUpIHtcbiAgICBjb25zdCBuZXdEcmFnZ2FibGVzSW5kZXggPSB0aGlzLmlubmVyRHJhZ2dhYmxlcy5sZW5ndGhcblxuICAgIHRoaXMuZW1pdCgndGFyZ2V0OmJlZm9yZUFkZCcsIGRyYWdnYWJsZSlcblxuICAgIHRoaXMucHVzaElubmVyRHJhZ2dhYmxlKGRyYWdnYWJsZSlcbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBuZXdEcmFnZ2FibGVzSW5kZXgsIGRyYWdnYWJsZSlcblxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgW25ld0RyYWdnYWJsZXNJbmRleF0sIHRpbWUgfHwgMClcbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMSkge1xuICAgICAgdGhpcy5hZGRSZW1vdmVPbk1vdmUoZHJhZ2dhYmxlKVxuICAgIH1cbiAgfVxuXG4gIHB1c2hJbm5lckRyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpPT09LTEpIHtcbiAgICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxuICAgIH1cbiAgfVxuXG4gIGFkZFJlbW92ZU9uTW92ZShkcmFnZ2FibGUpIHtcbiAgICBkcmFnZ2FibGUub24oJ2RyYWc6bW92ZScsIHRoaXMucmVtb3ZlSGFuZGxlciA9ICgpID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlKGRyYWdnYWJsZSlcbiAgICB9KVxuXG4gICAgdGhpcy5lbWl0KCd0YXJnZXQ6YWRkJywgZHJhZ2dhYmxlKVxuICB9XG5cbiAgcmVtb3ZlKGRyYWdnYWJsZSkge1xuICAgIGRyYWdnYWJsZS51bnN1YnNjcmliZSgnZHJhZzptb3ZlJywgdGhpcy5yZW1vdmVIYW5kbGVyKVxuXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSlcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5zcGxpY2UoaW5kZXgsIDEpXG5cbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBbXSlcblxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgW10pXG4gICAgdGhpcy5lbWl0KCd0YXJnZXQ6cmVtb3ZlJywgZHJhZ2dhYmxlKVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUubW92ZShkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uLCAwLCB0cnVlLCB0cnVlKVxuICAgICAgdGhpcy5lbWl0KCd0YXJnZXQ6cmVtb3ZlJywgZHJhZ2dhYmxlKVxuICAgIH0pXG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMgPSBbXVxuICB9XG5cbiAgZ2V0U29ydGVkRHJhZ2dhYmxlcygpIHtcbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5zbGljZSgpXG4gIH1cblxuICBnZXQgY29udGFpbmVyKCkge1xuICAgIHJldHVybiAodGhpcy5fY29udGFpbmVyID0gdGhpcy5fY29udGFpbmVyIHx8IHRoaXMub3B0aW9ucy5jb250YWluZXIgfHwgdGhpcy5vcHRpb25zLnBhcmVudCB8fCBnZXREZWZhdWx0Q29udGFpbmVyKHRoaXMuZWxlbWVudCkpXG4gIH1cbn1cblxuVGFyZ2V0LmVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKFRhcmdldClcblRhcmdldC5lbWl0dGVyLm9uKCd0YXJnZXQ6Y3JlYXRlJywgYWRkVG9EZWZhdWx0U2NvcGUpXG4iLCJpbXBvcnQgcmVtb3ZlSXRlbSBmcm9tICcuL3V0aWxzL3JlbW92ZS1hcnJheS1pdGVtJ1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50RW1pdHRlcidcbmltcG9ydCBEcmFnZ2FibGUgZnJvbSAnLi9kcmFnZ2FibGUnXG5pbXBvcnQgVGFyZ2V0IGZyb20gJy4vdGFyZ2V0J1xuXG5jb25zdCBzY29wZXMgPSBbXVxuXG5jbGFzcyBTY29wZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKGRyYWdnYWJsZXMsIHRhcmdldHMsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcih1bmRlZmluZWQsIG9wdGlvbnMpXG4gICAgc2NvcGVzLmZvckVhY2goKHNjb3BlKSA9PiB7XG4gICAgICBpZiAoZHJhZ2dhYmxlcykge1xuICAgICAgICBkcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgICAgIHJlbW92ZUl0ZW0oc2NvcGUuZHJhZ2dhYmxlcywgZHJhZ2dhYmxlKVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICBpZiAodGFyZ2V0cykge1xuICAgICAgICB0YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4ge1xuICAgICAgICAgIHJlbW92ZUl0ZW0oc2NvcGUudGFyZ2V0cywgdGFyZ2V0KVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLmRyYWdnYWJsZXMgPSBkcmFnZ2FibGVzIHx8IFtdXG4gICAgdGhpcy50YXJnZXRzID0gdGFyZ2V0cyB8fCBbXVxuICAgIHNjb3Blcy5wdXNoKHRoaXMpXG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgdGltZUVuZDogKG9wdGlvbnMudGltZUVuZCkgfHwgNDAwXG4gICAgfVxuXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLmRyYWdFbmRBY3Rpb24gPSAoKSA9PiB0aGlzLm9uRW5kKGRyYWdnYWJsZSlcbiAgICB9KVxuICB9XG5cbiAgYWRkRHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5wdXNoKGRyYWdnYWJsZSlcbiAgICBkcmFnZ2FibGUuZHJhZ0VuZEFjdGlvbiA9ICgpID0+IHRoaXMub25FbmQoZHJhZ2dhYmxlKVxuICB9XG5cbiAgYWRkVGFyZ2V0KHRhcmdldCkge1xuICAgIHRoaXMudGFyZ2V0cy5wdXNoKHRhcmdldClcbiAgfVxuXG4gIG9uRW5kKGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IHNob3RUYXJnZXRzID0gdGhpcy50YXJnZXRzLmZpbHRlcigodGFyZ2V0KSA9PiB7XG4gICAgICByZXR1cm4gdGFyZ2V0LmRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMVxuICAgIH0pLmZpbHRlcigodGFyZ2V0KSA9PiB7XG4gICAgICByZXR1cm4gdGFyZ2V0LmNhdGNoRHJhZ2dhYmxlKGRyYWdnYWJsZSlcbiAgICB9KS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICByZXR1cm4gYS5nZXRSZWN0YW5nbGUoKS5nZXRTcXVhcmUoKSAtIGIuZ2V0UmVjdGFuZ2xlKCkuZ2V0U3F1YXJlKClcbiAgICB9KVxuXG4gICAgaWYgKHNob3RUYXJnZXRzLmxlbmd0aCkge1xuICAgICAgc2hvdFRhcmdldHNbMF0ub25FbmQoZHJhZ2dhYmxlKVxuICAgIH0gZWxzZSBpZiAoZHJhZ2dhYmxlLnRhcmdldHMubGVuZ3RoKSB7XG4gICAgICBkcmFnZ2FibGUucGluUG9zaXRpb24oZHJhZ2dhYmxlLmluaXRpYWxQb3NpdGlvbiwgdGhpcy5vcHRpb25zLnRpbWVFbmQpXG4gICAgfVxuXG4gICAgdGhpcy5lbWl0KCdzY29wZTpjaGFuZ2UnKVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy50YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4gdGFyZ2V0LnJlc2V0KCkpXG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5yZWZyZXNoKCkpXG4gICAgdGhpcy50YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4gdGFyZ2V0LnJlZnJlc2goKSlcbiAgfVxuXG4gIGdldCBwb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0cy5tYXAoKHRhcmdldCkgPT4ge1xuICAgICAgcmV0dXJuIHRhcmdldC5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHRoaXMuZHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkpXG4gICAgfSlcbiAgfVxuXG4gIHNldCBwb3NpdGlvbnMocG9zaXRpb25zKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9ICd3cm9uZyBhcnJheSBsZW5ndGgnXG4gICAgaWYgKHBvc2l0aW9ucy5sZW5ndGggPT09IHRoaXMudGFyZ2V0cy5sZW5ndGgpIHtcbiAgICAgIHRoaXMudGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHRhcmdldC5yZXNldCgpKVxuXG4gICAgICBwb3NpdGlvbnMuZm9yRWFjaCgodGFyZ2V0SW5kZXhlcywgaSkgPT4ge1xuICAgICAgICB0YXJnZXRJbmRleGVzLmZvckVhY2goKGluZGV4KSA9PiB7XG4gICAgICAgICAgdGhpcy50YXJnZXRzW2ldLmFkZCh0aGlzLmRyYWdnYWJsZXNbaW5kZXhdKVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbWVzc2FnZVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBkZWZhdWx0U2NvcGUgPSBuZXcgU2NvcGUoKVxuXG5mdW5jdGlvbiBzY29wZShmbikge1xuICBjb25zdCBjdXJyZW50U2NvcGUgPSBuZXcgU2NvcGUoKVxuXG4gIGNvbnN0IGFkZERyYWdnYWJsZVRvU2NvcGUgPSBmdW5jdGlvbihkcmFnZ2FibGUpIHtcbiAgICBjdXJyZW50U2NvcGUuYWRkRHJhZ2dhYmxlKGRyYWdnYWJsZSlcbiAgICBEcmFnZ2FibGUuZW1pdHRlci5pbnRlcnJ1cHQoKVxuICB9XG5cbiAgY29uc3QgYWRkVGFyZ2V0VG9TY29wZSA9IGZ1bmN0aW9uKHRhcmdldCkge1xuICAgIGN1cnJlbnRTY29wZS5hZGRUYXJnZXQodGFyZ2V0KVxuICAgIERyYWdnYWJsZS5lbWl0dGVyLmludGVycnVwdCgpXG4gIH1cblxuICBEcmFnZ2FibGUuZW1pdHRlci5wcmVwZW5kT24oJ2RyYWdnYWJsZTpjcmVhdGUnLCBhZGREcmFnZ2FibGVUb1Njb3BlKVxuICBUYXJnZXQuZW1pdHRlci5wcmVwZW5kT24oJ3RhcmdldDpjcmVhdGUnLCBhZGRUYXJnZXRUb1Njb3BlKVxuICBmbi5jYWxsKClcbiAgRHJhZ2dhYmxlLmVtaXR0ZXIudW5zdWJzY3JpYmUoJ2RyYWdnYWJsZTpjcmVhdGUnLCBhZGREcmFnZ2FibGVUb1Njb3BlKVxuICBUYXJnZXQuZW1pdHRlci51bnN1YnNjcmliZSgndGFyZ2V0OmNyZWF0ZScsIGFkZFRhcmdldFRvU2NvcGUpXG4gIHJldHVybiBjdXJyZW50U2NvcGVcbn1cblxuZXhwb3J0IHsgc2NvcGVzLCBkZWZhdWx0U2NvcGUsIFNjb3BlLCBzY29wZSB9XG4iLCJmdW5jdGlvbiBjaGVja1N1cHBvcnRQYXNzaXZlRXZlbnRzKCkge1xuICBsZXQgcGFzc2l2ZVN1cHBvcnRlZCA9IGZhbHNlXG5cbiAgdHJ5IHtcbiAgICBjb25zdCBvcHRpb25zID0gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAncGFzc2l2ZScsIHtcbiAgICAgIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIChwYXNzaXZlU3VwcG9ydGVkID0gdHJ1ZSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3QnLCBvcHRpb25zLCBvcHRpb25zKVxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0ZXN0Jywgb3B0aW9ucywgb3B0aW9ucylcbiAgfSBjYXRjaCAoX2Vycikge1xuICAgIHBhc3NpdmVTdXBwb3J0ZWQgPSBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIHBhc3NpdmVTdXBwb3J0ZWRcbn1cblxuZXhwb3J0IGNvbnN0IGlzU3VwcG9ydFBhc3NpdmVFdmVudHMgPSBjaGVja1N1cHBvcnRQYXNzaXZlRXZlbnRzKClcblxuZnVuY3Rpb24gZXZlbnRPcHRpb25zKG9wdGlvbnMsIGZhbGxiYWNrID0gZmFsc2UpIHtcbiAgcmV0dXJuIGlzU3VwcG9ydFBhc3NpdmVFdmVudHMgPyBvcHRpb25zIDogZmFsbGJhY2tcbn1cblxuZXhwb3J0IHsgZXZlbnRPcHRpb25zIH1cblxuZXhwb3J0IGRlZmF1bHQgaXNTdXBwb3J0UGFzc2l2ZUV2ZW50c1xuIiwiaW1wb3J0IHsgYWRkQ2xhc3MsIHJlbW92ZUNsYXNzIH0gZnJvbSAnLi91dGlscy9jbGFzc2VzJ1xuaW1wb3J0IGdldERlZmF1bHRDb250YWluZXIgZnJvbSAnLi91dGlscy9nZXQtZGVmYXVsdC1jb250YWluZXInXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnRFbWl0dGVyJ1xuaW1wb3J0IGdldFN0eWxlUHJvcGVydHkgZnJvbSAnZGVzYW5kcm8tZ2V0LXN0eWxlLXByb3BlcnR5J1xuaW1wb3J0IHsgQm91bmRUb0VsZW1lbnQgfSBmcm9tICcuL2JvdW5kaW5nJ1xuaW1wb3J0IFBvaW50IGZyb20gJy4vZ2VvbWV0cnkvcG9pbnQnXG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gJy4vZ2VvbWV0cnkvcmVjdGFuZ2xlJ1xuaW1wb3J0IHsgZGVmYXVsdFNjb3BlIH0gZnJvbSAnLi9zY29wZSdcbmltcG9ydCBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzIGZyb20gJy4vdXRpbHMvaXMtc3VwcG9ydC1wYXNzaXZlLWV2ZW50cydcblxuY29uc3QgaXNUb3VjaCA9ICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvd1xuY29uc3QgbW91c2VFdmVudHMgPSB7XG4gIHN0YXJ0OiAnbW91c2Vkb3duJyxcbiAgbW92ZTogJ21vdXNlbW92ZScsXG4gIGVuZDogJ21vdXNldXAnXG59XG5jb25zdCB0b3VjaEV2ZW50cyA9IHtcbiAgc3RhcnQ6ICd0b3VjaHN0YXJ0JyxcbiAgbW92ZTogJ3RvdWNobW92ZScsXG4gIGVuZDogJ3RvdWNoZW5kJ1xufVxuY29uc3QgZHJhZ2dhYmxlcyA9IFtdXG5jb25zdCB0cmFuc2Zvcm1Qcm9wZXJ0eSA9IGdldFN0eWxlUHJvcGVydHkoJ3RyYW5zZm9ybScpXG5jb25zdCB0cmFuc2l0aW9uUHJvcGVydHkgPSBnZXRTdHlsZVByb3BlcnR5KCd0cmFuc2l0aW9uJylcblxuZnVuY3Rpb24gZ2V0VG91Y2hCeUlEKGVsZW1lbnQsIHRvdWNoSWQpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50LmNoYW5nZWRUb3VjaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGVsZW1lbnQuY2hhbmdlZFRvdWNoZXNbaV0uaWRlbnRpZmllciA9PT0gdG91Y2hJZCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQuY2hhbmdlZFRvdWNoZXNbaV1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmZ1bmN0aW9uIHByZXZlbnREb3VibGVJbml0KGRyYWdnYWJsZSkge1xuICBjb25zdCBtZXNzYWdlID0gXCJmb3IgdGhpcyBlbGVtZW50IERyYWdlZS5EcmFnZ2FibGUgaXMgYWxyZWFkeSBleGlzdCwgZG9uJ3QgY3JlYXRlIGl0IHR3aWNlIFwiXG4gIGlmIChkcmFnZ2FibGVzLnNvbWUoKGV4aXN0aW5nKSA9PiBkcmFnZ2FibGUuZWxlbWVudCA9PT0gZXhpc3RpbmcuZWxlbWVudCkpIHtcbiAgICB0aHJvdyBtZXNzYWdlXG4gIH1cbiAgZHJhZ2dhYmxlcy5wdXNoKGRyYWdnYWJsZSlcbn1cblxuZnVuY3Rpb24gYWRkVG9EZWZhdWx0U2NvcGUoZHJhZ2dhYmxlKSB7XG4gIGRlZmF1bHRTY29wZS5hZGREcmFnZ2FibGUoZHJhZ2dhYmxlKVxufVxuXG5mdW5jdGlvbiBjb3B5U3R5bGVzKHNvdXJjZSwgZGVzdGluYXRpb24pIHtcbiAgY29uc3QgY3MgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShzb3VyY2UpXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGtleSA9IGNzW2ldXG4gICAgaWYgKChrZXkuaW5kZXhPZigndHJhbnNpdGlvbicpIDwgMCkgJiYgKGtleS5pbmRleE9mKCd0cmFuc2Zvcm0nKSA8IDApKSB7XG4gICAgICBkZXN0aW5hdGlvbi5zdHlsZVtrZXldID0gY3Nba2V5XVxuICAgIH1cbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc291cmNlLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgY29weVN0eWxlcyhzb3VyY2UuY2hpbGRyZW5baV0sIGRlc3RpbmF0aW9uLmNoaWxkcmVuW2ldKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYWdnYWJsZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcih1bmRlZmluZWQsIG9wdGlvbnMpXG4gICAgdGhpcy50YXJnZXRzID0gW11cbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIHByZXZlbnREb3VibGVJbml0KHRoaXMpXG4gICAgRHJhZ2dhYmxlLmVtaXR0ZXIuZW1pdCgnZHJhZ2dhYmxlOmNyZWF0ZScsIHRoaXMpXG4gICAgdGhpcy5fZW5hYmxlID0gdHJ1ZVxuICAgIHRoaXMuc3RhcnRCb3VuZGluZygpXG4gICAgdGhpcy5zdGFydFBvc2l0aW9uaW5nKClcbiAgICB0aGlzLnN0YXJ0TGlzdGVuaW5nKClcbiAgfVxuXG4gIHN0YXJ0Qm91bmRpbmcoKSB7XG4gICAgdGhpcy5ib3VuZCA9IHRoaXMub3B0aW9ucy5ib3VuZCB8fCBCb3VuZFRvRWxlbWVudC5ib3VuZGluZyh0aGlzLmNvbnRhaW5lciwgdGhpcy5jb250YWluZXIpXG4gIH1cblxuICBzdGFydFBvc2l0aW9uaW5nKCkge1xuICAgIHRoaXMuX3NldERlZmF1bHRUcmFuc2l0aW9uKClcbiAgICB0aGlzLm9mZnNldCA9IFBvaW50LmVsZW1lbnRPZmZzZXQodGhpcy5lbGVtZW50LCB0aGlzLmNvbnRhaW5lciwgdHJ1ZSlcbiAgICB0aGlzLnBpbm5lZFBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICB0aGlzLmluaXRpYWxQb3NpdGlvbiA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbiB8fCB0aGlzLm9mZnNldFxuXG4gICAgdGhpcy5waW5Qb3NpdGlvbih0aGlzLmluaXRpYWxQb3NpdGlvbilcblxuICAgIGlmICh0aGlzLmJvdW5kLnJlZnJlc2gpIHtcbiAgICAgIHRoaXMuYm91bmQucmVmcmVzaCgpXG4gICAgfVxuICB9XG5cbiAgc3RhcnRMaXN0ZW5pbmcoKSB7XG4gICAgdGhpcy5fZHJhZ1N0YXJ0ID0gKGV2ZW50KSA9PiB0aGlzLmRyYWdTdGFydChldmVudClcbiAgICB0aGlzLl9kcmFnTW92ZSA9IChldmVudCkgPT4gdGhpcy5kcmFnTW92ZShldmVudClcbiAgICB0aGlzLl9kcmFnRW5kID0gKGV2ZW50KSA9PiB0aGlzLmRyYWdFbmQoZXZlbnQpXG4gICAgdGhpcy5fbmF0aXZlRHJhZ1N0YXJ0ID0gKGV2ZW50KSA9PiB0aGlzLm5hdGl2ZURyYWdTdGFydChldmVudClcbiAgICB0aGlzLl9uYXRpdmVEcmFnT3ZlciA9IChldmVudCkgPT4gdGhpcy5uYXRpdmVEcmFnT3ZlcihldmVudClcbiAgICB0aGlzLl9uYXRpdmVEcmFnRW5kID0gKGV2ZW50KSA9PiB0aGlzLm5hdGl2ZURyYWdFbmQoZXZlbnQpXG4gICAgdGhpcy5fbmF0aXZlRHJvcCA9IChldmVudCkgPT4gdGhpcy5uYXRpdmVEcm9wKGV2ZW50KVxuICAgIHRoaXMuX3Njcm9sbCA9IChldmVudCkgPT4gdGhpcy5vblNjcm9sbChldmVudClcblxuICAgIHRoaXMuaGFuZGxlci5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQsIGlzU3VwcG9ydFBhc3NpdmVFdmVudHMgPyB7IHBhc3NpdmU6IGZhbHNlIH0gOiBmYWxzZSlcbiAgICB0aGlzLmhhbmRsZXIuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0LCBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzID8geyBwYXNzaXZlOiBmYWxzZSB9IDogZmFsc2UpXG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIHRoaXMuX25hdGl2ZURyYWdTdGFydClcbiAgfVxuXG4gIGdldFNpemUoKSB7XG4gICAgcmV0dXJuIFBvaW50LmVsZW1lbnRTaXplKHRoaXMuZWxlbWVudCwgdGhpcy5vcHRpb25zLmlzQ29udGVudEJveFNpemUpXG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5vZmZzZXQuYWRkKHRoaXMuX3RyYW5zZm9ybVBvc2l0aW9uIHx8IG5ldyBQb2ludCgwLCAwKSlcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvblxuICB9XG5cbiAgZ2V0Q2VudGVyKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLmdldFNpemUoKS5tdWx0KDAuNSkpXG4gIH1cblxuICBfc2V0RGVmYXVsdFRyYW5zaXRpb24gKCkge1xuICAgIHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5lbGVtZW50KVt0cmFuc2l0aW9uUHJvcGVydHldXG4gIH1cblxuICBfc2V0VHJhbnNpdGlvbih0aW1lKSB7XG4gICAgbGV0IHRyYW5zaXRpb24gPSB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNpdGlvblByb3BlcnR5XVxuICAgIGNvbnN0IHRyYW5zaXRpb25Dc3MgPSBgdHJhbnNmb3JtICR7dGltZX1tc2BcblxuICAgIGlmICghL3RyYW5zZm9ybSBcXGQqbT9zLy50ZXN0KHRyYW5zaXRpb24pKSB7XG4gICAgICBpZiAodHJhbnNpdGlvbikge1xuICAgICAgICB0cmFuc2l0aW9uICs9IGAsICR7dHJhbnNpdGlvbkNzc31gXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cmFuc2l0aW9uID0gdHJhbnNpdGlvbkNzc1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0cmFuc2l0aW9uID0gdHJhbnNpdGlvbi5yZXBsYWNlKC90cmFuc2Zvcm0gXFxkKm0/cy8sIHRyYW5zaXRpb25Dc3MpXG4gICAgfVxuXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV0gPSB0cmFuc2l0aW9uXG4gIH1cblxuICBfc2V0VHJhbnNsYXRlKHBvaW50KSB7XG4gICAgdGhpcy5fdHJhbnNmb3JtUG9zaXRpb24gPSBwb2ludFxuICAgIGNvbnN0IHRyYW5zbGF0ZUNzcyA9IGB0cmFuc2xhdGUzZCgke3BvaW50Lnh9cHgsICR7cG9pbnQueX1weCwgMHB4KWBcblxuICAgIGxldCB0cmFuc2Zvcm0gPSB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcGVydHldXG5cbiAgICBpZiAodGhpcy5zaG91bGRSZW1vdmVaZXJvVHJhbnNsYXRlICYmIHBvaW50LnggPT09IDAgJiYgcG9pbnQueSA9PT0gMCkge1xuICAgICAgdHJhbnNmb3JtID0gdHJhbnNmb3JtLnJlcGxhY2UoL3RyYW5zbGF0ZTNkXFwoW14pXStcXCkvLCAnJylcbiAgICB9IGVsc2UgaWYgKCEvdHJhbnNsYXRlM2RcXChbXildK1xcKS8udGVzdCh0cmFuc2Zvcm0pKSB7XG4gICAgICBpZiAodHJhbnNmb3JtKSB7XG4gICAgICAgIHRyYW5zZm9ybSArPSAnICdcbiAgICAgIH1cbiAgICAgIHRyYW5zZm9ybSArPSB0cmFuc2xhdGVDc3NcbiAgICB9IGVsc2Uge1xuICAgICAgdHJhbnNmb3JtID0gdHJhbnNmb3JtLnJlcGxhY2UoL3RyYW5zbGF0ZTNkXFwoW14pXStcXCkvLCB0cmFuc2xhdGVDc3MpXG4gICAgfVxuXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BlcnR5XSA9IHRyYW5zZm9ybVxuICB9XG5cbiAgbW92ZShwb2ludCwgdGltZT0wLCBpc1NpbGVudD1mYWxzZSkge1xuICAgIHBvaW50ID0gcG9pbnQuY2xvbmUoKVxuXG4gICAgdGhpcy5kZXRlcm1pbmVEaXJlY3Rpb24ocG9pbnQpXG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvaW50XG5cbiAgICB0aGlzLl9zZXRUcmFuc2l0aW9uKHRpbWUpXG4gICAgdGhpcy5fc2V0VHJhbnNsYXRlKHBvaW50LnN1Yih0aGlzLm9mZnNldCkpXG5cbiAgICBpZiAoIWlzU2lsZW50KSB7XG4gICAgICB0aGlzLmVtaXQoJ2RyYWc6bW92ZScpXG4gICAgfVxuICB9XG5cbiAgcGluUG9zaXRpb24ocG9pbnQsIHRpbWU9MCwgc2lsZW50PXRydWUpIHtcbiAgICB0aGlzLnBpbm5lZFBvc2l0aW9uID0gcG9pbnQuY2xvbmUoKVxuICAgIHRoaXMubW92ZSh0aGlzLnBpbm5lZFBvc2l0aW9uLCB0aW1lLCBzaWxlbnQpXG4gIH1cblxuICByZXNldFBvc2l0aW9uVG9Jbml0aWFsICgpIHtcbiAgICB0aGlzLnBpblBvc2l0aW9uKHRoaXMuaW5pdGlhbFBvc2l0aW9uKVxuICB9XG5cbiAgcmVmcmVzaFBvc2l0aW9uICgpIHtcbiAgICB0aGlzLnNldFBvc2l0aW9uKHRoaXMuZ2V0UG9zaXRpb24oKSlcbiAgfVxuXG4gIHNldFBvc2l0aW9uKHBvaW50KSB7XG4gICAgcG9pbnQgPSBwb2ludC5jbG9uZSgpXG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvaW50XG4gICAgdGhpcy5fc2V0VHJhbnNpdGlvbigwKVxuICAgIHRoaXMuX3NldFRyYW5zbGF0ZShwb2ludC5zdWIodGhpcy5vZmZzZXQpKVxuICB9XG5cbiAgZGV0ZXJtaW5lRGlyZWN0aW9uKHBvaW50KSB7XG4gICAgdGhpcy5sZWZ0RGlyZWN0aW9uID0gKHRoaXMucG9zaXRpb24ueCA8IHBvaW50LngpXG4gICAgdGhpcy5yaWdodERpcmVjdGlvbiA9ICh0aGlzLnBvc2l0aW9uLnggPiBwb2ludC54KVxuICAgIHRoaXMudXBEaXJlY3Rpb24gPSAodGhpcy5wb3NpdGlvbi55ID4gcG9pbnQueSlcbiAgICB0aGlzLmRvd25EaXJlY3Rpb24gPSAodGhpcy5wb3NpdGlvbi55IDwgcG9pbnQueSlcbiAgfVxuXG4gIGRyYWdTdGFydChldmVudCkge1xuICAgIHRoaXMuY3VycmVudEV2ZW50ID0gZXZlbnRcbiAgICBpZiAoIXRoaXMuX2VuYWJsZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaXNUb3VjaEV2ZW50ID0gKGlzVG91Y2ggJiYgKGV2ZW50IGluc3RhbmNlb2Ygd2luZG93LlRvdWNoRXZlbnQpKVxuXG4gICAgdGhpcy50b3VjaFBvaW50ID0gdGhpcy5fc3RhcnRUb3VjaFBvaW50ID0gbmV3IFBvaW50KFxuICAgICAgaXNUb3VjaEV2ZW50ID8gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVggOiBldmVudC5jbGllbnRYLFxuICAgICAgaXNUb3VjaEV2ZW50ID8gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVkgOiBldmVudC5jbGllbnRZXG4gICAgKVxuXG4gICAgdGhpcy5fc3RhcnRQb3NpdGlvbiA9IHRoaXMuZ2V0UG9zaXRpb24oKVxuICAgIGlmIChpc1RvdWNoRXZlbnQpIHtcbiAgICAgIHRoaXMuX3RvdWNoSWQgPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5pZGVudGlmaWVyXG4gICAgfVxuXG4gICAgdGhpcy5fc3RhcnRTY3JvbGxQb2ludCA9IG5ldyBQb2ludCh3aW5kb3cuc2Nyb2xsWCwgd2luZG93LnNjcm9sbFkpXG5cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGlmIChldmVudC50YXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElucHV0RWxlbWVudCB8fFxuICAgICAgICAgIGV2ZW50LnRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSW5wdXRFbGVtZW50KSB7XG4gICAgICBldmVudC50YXJnZXQuZm9jdXMoKVxuICAgIH1cblxuICAgIGlmICghKHRoaXMubmF0aXZlRHJhZ0FuZERyb3AgfHxcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSW5wdXRFbGVtZW50IHx8XG4gICAgICAgICAgICBldmVudC50YXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElucHV0RWxlbWVudCkpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB9XG5cbiAgICBpZiAodGhpcy5uYXRpdmVEcmFnQW5kRHJvcCkge1xuICAgICAgY29uc3QgaXNTYWZhcmkgPSAvdmVyc2lvblxcLyhcXGQrKS4rP3NhZmFyaS9pLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpXG4gICAgICBpZiAoKGlzVG91Y2hFdmVudCAmJiB0aGlzLmVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcE9uVG91Y2gpIHx8XG4gICAgICAgICAgICAgaXNTYWZhcmkgfHxcbiAgICAgICAgICAgICB0aGlzLmVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcEZvckFsbCkge1xuICAgICAgICB0aGlzLmVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcChldmVudClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5kcmFnZ2FibGUgPSB0cnVlXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9uYXRpdmVEcmFnRW5kLCBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzID8geyBwYXNzaXZlOiBmYWxzZSB9IDogZmFsc2UpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUsIGlzU3VwcG9ydFBhc3NpdmVFdmVudHMgPyB7IHBhc3NpdmU6IGZhbHNlIH0gOiBmYWxzZSlcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUsIGlzU3VwcG9ydFBhc3NpdmVFdmVudHMgPyB7IHBhc3NpdmU6IGZhbHNlIH0gOiBmYWxzZSlcblxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQsIGlzU3VwcG9ydFBhc3NpdmVFdmVudHMgPyB7IHBhc3NpdmU6IGZhbHNlIH0gOiBmYWxzZSlcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kLCBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzID8geyBwYXNzaXZlOiBmYWxzZSB9IDogZmFsc2UpXG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX3Njcm9sbClcblxuICAgIHRoaXMuaXNEcmFnZ2luZyA9IHRydWVcbiAgICB0aGlzLmVtaXQoJ2RyYWc6c3RhcnQnKVxuICAgIGFkZENsYXNzKHRoaXMuZWxlbWVudCwgJ2RyYWdlZS1hY3RpdmUnKVxuICAgIHRoaXMuZW1pdCgnZHJhZzptb3ZlJylcbiAgfVxuXG4gIHN0b3BEcmFnZ2luZygpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCB0aGlzLl9uYXRpdmVEcmFnT3ZlcilcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcm9wJywgdGhpcy5fbmF0aXZlRHJvcClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcm9wJywgdGhpcy5fbmF0aXZlRHJvcClcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fc2Nyb2xsKVxuICAgIHRoaXMuZWxlbWVudC5kcmFnZ2FibGUgPSBmYWxzZVxuICAgIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlXG4gICAgcmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50LCAnZHJhZ2VlLWFjdGl2ZScpXG4gIH1cblxuICBkcmFnTW92ZShldmVudCkge1xuICAgIHRoaXMuY3VycmVudEV2ZW50ID0gZXZlbnRcbiAgICBsZXQgdG91Y2hcblxuICAgIGNvbnN0IGlzVG91Y2hFdmVudCA9IChpc1RvdWNoICYmIChldmVudCBpbnN0YW5jZW9mIHdpbmRvdy5Ub3VjaEV2ZW50KSlcbiAgICBpZiAoaXNUb3VjaEV2ZW50KSB7XG4gICAgICB0b3VjaCA9IGdldFRvdWNoQnlJRChldmVudCwgdGhpcy5fdG91Y2hJZClcblxuICAgICAgaWYgKCF0b3VjaCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB0aGlzLnRvdWNoUG9pbnQgPSBuZXcgUG9pbnQoXG4gICAgICBpc1RvdWNoRXZlbnQgPyB0b3VjaC5wYWdlWCA6IGV2ZW50LmNsaWVudFgsXG4gICAgICBpc1RvdWNoRXZlbnQgPyB0b3VjaC5wYWdlWSA6IGV2ZW50LmNsaWVudFlcbiAgICApXG5cbiAgICBsZXQgcG9pbnQgPSB0aGlzLl9zdGFydFBvc2l0aW9uLmFkZCh0aGlzLnRvdWNoUG9pbnQuc3ViKHRoaXMuX3N0YXJ0VG91Y2hQb2ludCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy5zY3JvbGxQb2ludC5zdWIodGhpcy5fc3RhcnRTY3JvbGxQb2ludCkpXG5cbiAgICBwb2ludCA9IHRoaXMuYm91bmQocG9pbnQsIHRoaXMuZ2V0U2l6ZSgpKVxuICAgIHRoaXMubW92ZShwb2ludClcbiAgfVxuXG4gIGRyYWdFbmQoZXZlbnQpIHtcbiAgICBjb25zdCBpc1RvdWNoRXZlbnQgPSAoaXNUb3VjaCAmJiAoZXZlbnQgaW5zdGFuY2VvZiB3aW5kb3cuVG91Y2hFdmVudCkpXG5cbiAgICBpZiAoaXNUb3VjaEV2ZW50ICYmICFnZXRUb3VjaEJ5SUQoZXZlbnQsIHRoaXMuX3RvdWNoSWQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB0aGlzLmRyYWdFbmRBY3Rpb24oKVxuICAgIHRoaXMuZW1pdCgnZHJhZzplbmQnKVxuXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG5cbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fc2Nyb2xsKVxuXG4gICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2VcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkcmFnZ2FibGUnKVxuICAgIHJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudCwgJ2RyYWdlZS1hY3RpdmUnKVxuICB9XG5cbiAgb25TY3JvbGwoX2V2ZW50KSB7XG4gICAgbGV0IHBvaW50ID0gdGhpcy5fc3RhcnRQb3NpdGlvbi5hZGQodGhpcy50b3VjaFBvaW50LnN1Yih0aGlzLl9zdGFydFRvdWNoUG9pbnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMuc2Nyb2xsUG9pbnQuc3ViKHRoaXMuX3N0YXJ0U2Nyb2xsUG9pbnQpKVxuXG4gICAgcG9pbnQgPSB0aGlzLmJvdW5kKHBvaW50LCB0aGlzLmdldFNpemUoKSlcbiAgICBpZiAoIXRoaXMubmF0aXZlRHJhZ0FuZERyb3ApIHtcbiAgICAgIHRoaXMubW92ZShwb2ludClcbiAgICB9XG4gIH1cblxuICBuYXRpdmVEcmFnU3RhcnQoZXZlbnQpIHtcbiAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dCcsICdGaXJlRm94IGZpeCcpXG4gICAgZXZlbnQuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSAnbW92ZSdcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIHRoaXMuX25hdGl2ZURyYWdPdmVyKVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzLl9uYXRpdmVEcm9wKVxuICB9XG5cbiAgbmF0aXZlRHJhZ092ZXIoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZXZlbnQuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnbW92ZSdcbiAgICBhZGRDbGFzcyh0aGlzLmVsZW1lbnQsICdkcmFnZWUtcGxhY2Vob2xkZXInKVxuICAgIHRoaXMuY3VycmVudEV2ZW50ID0gZXZlbnRcbiAgICBpZiAoZXZlbnQuY2xpZW50WCA9PT0gMCAmJiBldmVudC5jbGllbnRZID09PSAwKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLnRvdWNoUG9pbnQgPSBuZXcgUG9pbnQoZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSlcbiAgICBsZXQgcG9pbnQgPSB0aGlzLl9zdGFydFBvc2l0aW9uLmFkZCh0aGlzLnRvdWNoUG9pbnQuc3ViKHRoaXMuX3N0YXJ0VG91Y2hQb2ludCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy5zY3JvbGxQb2ludC5zdWIodGhpcy5fc3RhcnRTY3JvbGxQb2ludCkpXG4gICAgcG9pbnQgPSB0aGlzLmJvdW5kKHBvaW50LCB0aGlzLmdldFNpemUoKSlcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9pbnRcbiAgICB0aGlzLmVtaXQoJ2RyYWc6bW92ZScpXG4gIH1cblxuICBuYXRpdmVEcmFnRW5kKF9ldmVudCkge1xuICAgIHJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudCwgJ2RyYWdlZS1wbGFjZWhvbGRlcicpXG4gICAgdGhpcy5kcmFnRW5kQWN0aW9uKClcbiAgICB0aGlzLmVtaXQoJ2RyYWc6ZW5kJylcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIHRoaXMuX25hdGl2ZURyYWdPdmVyKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzLl9uYXRpdmVEcm9wKVxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9zY3JvbGwpXG4gICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2VcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkcmFnZ2FibGUnKVxuICAgIHJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudCwgJ2RyYWdlZS1hY3RpdmUnKVxuICB9XG5cbiAgbmF0aXZlRHJvcChldmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wKGV2ZW50KSB7XG4gICAgY29uc3QgY29udGFpbmVyUmVjdCA9IHRoaXMuY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgY29uc3QgY2xvbmVkRWxlbWVudCA9IHRoaXMuZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSlcbiAgICBjbG9uZWRFbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BlcnR5XSA9ICcnXG4gICAgY29weVN0eWxlcyh0aGlzLmVsZW1lbnQsIGNsb25lZEVsZW1lbnQpXG4gICAgY2xvbmVkRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSdcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNsb25lZEVsZW1lbnQpXG4gICAgYWRkQ2xhc3ModGhpcy5lbGVtZW50LCAnZHJhZ2VlLXBsYWNlaG9sZGVyJylcblxuICAgIGNvbnN0IGVtdWxhdGlvbkRyYWdnYWJsZSA9IG5ldyBEcmFnZ2FibGUoY2xvbmVkRWxlbWVudCwge1xuICAgICAgY29udGFpbmVyOiBkb2N1bWVudC5ib2R5LFxuICAgICAgYm91bmQocG9pbnQpIHtcbiAgICAgICAgcmV0dXJuIHBvaW50XG4gICAgICB9LFxuICAgICAgb246IHtcbiAgICAgICAgJ2RyYWc6bW92ZSc6ICgpID0+IHtcbiAgICAgICAgICBjb25zdCBjb250YWluZXJSZWN0UG9pbnQgPSBuZXcgUG9pbnQoY29udGFpbmVyUmVjdC5sZWZ0LCBjb250YWluZXJSZWN0LnRvcClcbiAgICAgICAgICB0aGlzLnBvc2l0aW9uID0gZW11bGF0aW9uRHJhZ2dhYmxlLnBvc2l0aW9uLnN1Yihjb250YWluZXJSZWN0UG9pbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdWIodGhpcy5fc3RhcnRTY3JvbGxQb2ludClcbiAgICAgICAgICB0aGlzLmVtaXQoJ2RyYWc6bW92ZScpXG4gICAgICAgIH0sXG4gICAgICAgICdkcmFnOmVuZCc6ICgpID0+IHtcbiAgICAgICAgICBlbXVsYXRpb25EcmFnZ2FibGUuZGVzdHJveSgpXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChjbG9uZWRFbGVtZW50KVxuICAgICAgICAgIHJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudCwgJ2RyYWdlZS1wbGFjZWhvbGRlcicpXG4gICAgICAgICAgcmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50LCAnZHJhZ2VlLWFjdGl2ZScpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgY29udGFpbmVyUmVjdFBvaW50ID0gbmV3IFBvaW50KGNvbnRhaW5lclJlY3QubGVmdCwgY29udGFpbmVyUmVjdC50b3ApXG4gICAgZW11bGF0aW9uRHJhZ2dhYmxlLl9zdGFydFNjcm9sbFBvaW50ID0gdGhpcy5fc3RhcnRTY3JvbGxQb2ludFxuXG4gICAgZW11bGF0aW9uRHJhZ2dhYmxlLm1vdmUoXG4gICAgICB0aGlzLnBpbm5lZFBvc2l0aW9uLmFkZChjb250YWluZXJSZWN0UG9pbnQpLmFkZChuZXcgUG9pbnQod2luZG93LnNjcm9sbFgsIHdpbmRvdy5zY3JvbGxZKSlcbiAgICApXG5cbiAgICBlbXVsYXRpb25EcmFnZ2FibGUuZHJhZ1N0YXJ0KGV2ZW50KVxuICB9XG5cbiAgZHJhZ0VuZEFjdGlvbigpIHtcbiAgICB0aGlzLnBpblBvc2l0aW9uKHRoaXMucG9zaXRpb24pXG4gIH1cblxuICBnZXRSZWN0YW5nbGUoKSB7XG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUodGhpcy5wb3NpdGlvbiwgdGhpcy5nZXRTaXplKCkpXG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIGlmICh0aGlzLmJvdW5kLnJlZnJlc2gpIHtcbiAgICAgIHRoaXMuYm91bmQucmVmcmVzaCgpXG4gICAgfVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmhhbmRsZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0KVxuICAgIHRoaXMuaGFuZGxlci5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQpXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIHRoaXMuX25hdGl2ZURyYWdTdGFydClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCB0aGlzLl9uYXRpdmVEcmFnT3ZlcilcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcm9wJywgdGhpcy5fbmF0aXZlRHJvcClcbiAgICB0aGlzLnJlc2V0RW1pdHRlcigpXG5cbiAgICBjb25zdCBpbmRleCA9IGRyYWdnYWJsZXMuaW5kZXhPZih0aGlzKVxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICBkcmFnZ2FibGVzLnNwbGljZShpbmRleCwgMSlcbiAgICB9XG4gIH1cblxuICBnZXQgY29udGFpbmVyKCkge1xuICAgIHJldHVybiAodGhpcy5fY29udGFpbmVyID0gdGhpcy5fY29udGFpbmVyIHx8IHRoaXMub3B0aW9ucy5jb250YWluZXIgfHwgdGhpcy5vcHRpb25zLnBhcmVudCB8fCBnZXREZWZhdWx0Q29udGFpbmVyKHRoaXMuZWxlbWVudCkpXG4gIH1cblxuICBnZXQgaGFuZGxlcigpIHtcbiAgICBpZiAoIXRoaXMuX2hhbmRsZXIpIHtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmhhbmRsZXIgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZXIgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLm9wdGlvbnMuaGFuZGxlcikgfHwgdGhpcy5lbGVtZW50XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9oYW5kbGVyID0gdGhpcy5vcHRpb25zLmhhbmRsZXIgfHwgdGhpcy5lbGVtZW50XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2hhbmRsZXJcbiAgfVxuXG4gIGdldCBuYXRpdmVEcmFnQW5kRHJvcCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLm5hdGl2ZURyYWdBbmREcm9wIHx8IGZhbHNlXG4gIH1cblxuICBnZXQgZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wT25Ub3VjaCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcE9uVG91Y2ggfHwgdHJ1ZVxuICB9XG5cbiAgZ2V0IGVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcEZvckFsbCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcEZvckFsbCB8fCBmYWxzZVxuICB9XG5cbiAgZ2V0IHNob3VsZFJlbW92ZVplcm9UcmFuc2xhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5zaG91bGRSZW1vdmVaZXJvVHJhbnNsYXRlIHx8IGZhbHNlXG4gIH1cblxuICBnZXQgc2Nyb2xsUG9pbnQoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh3aW5kb3cuc2Nyb2xsWCwgd2luZG93LnNjcm9sbFkpXG4gIH1cblxuICBnZXQgZW5hYmxlKCkge1xuICAgIHJldHVybiB0aGlzLl9lbmFibGVcbiAgfVxuXG4gIHNldCBlbmFibGUoZW5hYmxlKSB7XG4gICAgaWYgKGVuYWJsZSkge1xuICAgICAgcmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50LCAnZHJhZ2VlLWRpc2FibGUnKVxuICAgIH0gZWxzZSB7XG4gICAgICBhZGRDbGFzcyh0aGlzLmVsZW1lbnQsICdkcmFnZWUtZGlzYWJsZScpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZSA9IGVuYWJsZVxuICB9XG59XG5cbkRyYWdnYWJsZS5lbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcihEcmFnZ2FibGUpXG5EcmFnZ2FibGUuZW1pdHRlci5vbignZHJhZ2dhYmxlOmNyZWF0ZScsIGFkZFRvRGVmYXVsdFNjb3BlKVxuIiwiaW1wb3J0IHJlbW92ZUl0ZW0gZnJvbSAnLi91dGlscy9yZW1vdmUtYXJyYXktaXRlbSdcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudEVtaXR0ZXInXG5pbXBvcnQge1xuICBnZXREaXN0YW5jZSxcbiAgaW5kZXhPZk5lYXJlc3RQb2ludFxufSBmcm9tICcuL2dlb21ldHJ5L2Rpc3RhbmNlcydcblxuaW1wb3J0IERyYWdnYWJsZSBmcm9tICcuL2RyYWdnYWJsZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdCBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKGRyYWdnYWJsZXMsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcih1bmRlZmluZWQsIG9wdGlvbnMpXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICB0aW1lRW5kOiAyMDAsXG4gICAgICB0aW1lRXhjYW5nZTogNDAwLFxuICAgICAgcmFkaXVzOiAzMFxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0aGlzLmRyYWdnYWJsZXMgPSBkcmFnZ2FibGVzXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5fZW5hYmxlID0gdHJ1ZVxuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKHRoaXMuaW5pdERyYWdnYWJsZSwgdGhpcylcbiAgfVxuXG4gIGluaXREcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgZHJhZ2dhYmxlLmVuYWJsZSA9IHRoaXMuX2VuYWJsZVxuICAgIGRyYWdnYWJsZS5vbignZHJhZzptb3ZlJywgKCkgPT4gdGhpcy5vbk1vdmUoZHJhZ2dhYmxlKSlcbiAgICBkcmFnZ2FibGUuZHJhZ0VuZEFjdGlvbiA9ICgpID0+IGRyYWdnYWJsZS5waW5Qb3NpdGlvbihkcmFnZ2FibGUucGlubmVkUG9zaXRpb24sIHRoaXMub3B0aW9ucy50aW1lRW5kKVxuICB9XG5cbiAgb25Nb3ZlKGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IHNvcnRlZERyYWdnYWJsZXMgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuICAgIGNvbnN0IHBpbm5lZFBvc2l0aW9ucyA9IHNvcnRlZERyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbilcblxuICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IHNvcnRlZERyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpXG4gICAgY29uc3QgdGFyZ2V0SW5kZXggPSBpbmRleE9mTmVhcmVzdFBvaW50KHBpbm5lZFBvc2l0aW9ucywgZHJhZ2dhYmxlLnBvc2l0aW9uLCB0aGlzLm9wdGlvbnMucmFkaXVzLCB0aGlzLmRpc3RhbmNlRnVuYylcblxuICAgIGlmICh0YXJnZXRJbmRleCAhPT0gLTEgJiYgY3VycmVudEluZGV4ICE9PSB0YXJnZXRJbmRleCkge1xuICAgICAgaWYgKHRhcmdldEluZGV4IDwgY3VycmVudEluZGV4KSB7XG4gICAgICAgIGZvciAobGV0IGk9dGFyZ2V0SW5kZXg7IGk8Y3VycmVudEluZGV4OyBpKyspIHtcbiAgICAgICAgICBzb3J0ZWREcmFnZ2FibGVzW2ldLnBpblBvc2l0aW9uKHBpbm5lZFBvc2l0aW9uc1tpKzFdLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAobGV0IGk9Y3VycmVudEluZGV4OyBpPHRhcmdldEluZGV4OyBpKyspIHtcbiAgICAgICAgICBzb3J0ZWREcmFnZ2FibGVzW2krMV0ucGluUG9zaXRpb24ocGlubmVkUG9zaXRpb25zW2ldLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGRyYWdnYWJsZS5uYXRpdmVEcmFnQW5kRHJvcCkge1xuICAgICAgICBkcmFnZ2FibGUucGluUG9zaXRpb24ocGlubmVkUG9zaXRpb25zW3RhcmdldEluZGV4XSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbiA9IHBpbm5lZFBvc2l0aW9uc1t0YXJnZXRJbmRleF1cbiAgICAgIH1cblxuICAgICAgdGhpcy5lbWl0KCdsaXN0OmNoYW5nZScpXG4gICAgfVxuICB9XG5cbiAgZ2V0Q3VycmVudFBpbm5lZFBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5kcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24uY2xvbmUoKSlcbiAgfVxuXG4gIGdldFNvcnRlZERyYWdnYWJsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJhZ2dhYmxlcy5zb3J0KHRoaXMuc29ydGluZy5iaW5kKHRoaXMpKVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnJlc2V0UG9zaXRpb25Ub0luaXRpYWwoKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnJlZnJlc2goKSlcbiAgfVxuXG4gIGFkZChkcmFnZ2FibGVzKSB7XG4gICAgaWYgKCEoZHJhZ2dhYmxlcyBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgZHJhZ2dhYmxlcyA9IFtkcmFnZ2FibGVzXVxuICAgIH1cbiAgICBkcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gdGhpcy5pbml0RHJhZ2dhYmxlKGRyYWdnYWJsZSkpXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gdGhpcy5kcmFnZ2FibGVzLmNvbmNhdChkcmFnZ2FibGVzKVxuICB9XG5cbiAgcmVtb3ZlKGRyYWdnYWJsZXMpIHtcbiAgICBjb25zdCBpbml0aWFsUG9zaXRpb25zID0gdGhpcy5kcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uKVxuICAgIGNvbnN0IGxpc3QgPSBbXVxuICAgIGNvbnN0IHNvcnRlZERyYWdnYWJsZXMgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuXG4gICAgaWYgKCEoZHJhZ2dhYmxlcyBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgZHJhZ2dhYmxlcyA9IFtkcmFnZ2FibGVzXVxuICAgIH1cblxuICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUucmVzZXRPbignZHJhZzplbmQnKVxuICAgICAgZHJhZ2dhYmxlLnJlc2V0T24oJ2RyYWc6bW92ZScpXG4gICAgICByZW1vdmVJdGVtKHRoaXMuZHJhZ2dhYmxlcywgZHJhZ2dhYmxlKVxuICAgIH0pXG5cbiAgICBsZXQgaiA9IDBcbiAgICBzb3J0ZWREcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgaWYgKHRoaXMuZHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkgIT09IC0xKSB7XG4gICAgICAgIGlmIChkcmFnZ2FibGUucGlubmVkUG9zaXRpb24gIT09IGluaXRpYWxQb3NpdGlvbnNbal0pIHtcbiAgICAgICAgICBkcmFnZ2FibGUucGluUG9zaXRpb24oaW5pdGlhbFBvc2l0aW9uc1tqXSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICB9XG4gICAgICAgIGRyYWdnYWJsZS5pbml0aWFsUG9zaXRpb24gPSBpbml0aWFsUG9zaXRpb25zW2pdXG4gICAgICAgIGorK1xuICAgICAgICBsaXN0LnB1c2goZHJhZ2dhYmxlKVxuICAgICAgfVxuICAgIH0pXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gbGlzdFxuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5yZW1vdmUodGhpcy5kcmFnZ2FibGVzLnNsaWNlKCkpXG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5kZXN0cm95KCkpXG4gIH1cblxuICBzb3J0aW5nKGRyYWdnYWJsZUEsIGRyYWdnYWJsZUIpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLnNvcnRpbmcpIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuc29ydGluZyhkcmFnZ2FibGVBLCBkcmFnZ2FibGVCKVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZHJhZ2dhYmxlQS5waW5uZWRQb3NpdGlvbi55IDwgZHJhZ2dhYmxlQi5waW5uZWRQb3NpdGlvbi55KSByZXR1cm4gLTFcbiAgICAgIGlmIChkcmFnZ2FibGVBLnBpbm5lZFBvc2l0aW9uLnkgPiBkcmFnZ2FibGVCLnBpbm5lZFBvc2l0aW9uLnkpIHJldHVybiAxXG4gICAgICBpZiAoZHJhZ2dhYmxlQS5waW5uZWRQb3NpdGlvbi54IDwgZHJhZ2dhYmxlQi5waW5uZWRQb3NpdGlvbi54KSByZXR1cm4gLTFcbiAgICAgIGlmIChkcmFnZ2FibGVBLnBpbm5lZFBvc2l0aW9uLnggPiBkcmFnZ2FibGVCLnBpbm5lZFBvc2l0aW9uLngpIHJldHVybiAxXG4gICAgICByZXR1cm4gMFxuICAgIH1cbiAgfVxuXG4gIGdldCBkaXN0YW5jZUZ1bmMoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5nZXREaXN0YW5jZSB8fCBnZXREaXN0YW5jZVxuICB9XG5cbiAgZ2V0IHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDdXJyZW50UGlubmVkUG9zaXRpb25zKClcbiAgfVxuXG4gIHNldCBwb3NpdGlvbnMocG9zaXRpb25zKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9ICd3cm9uZyBhcnJheSBsZW5ndGgnXG4gICAgaWYgKHBvc2l0aW9ucy5sZW5ndGggPT09IHRoaXMuZHJhZ2dhYmxlcy5sZW5ndGgpIHtcbiAgICAgIHBvc2l0aW9ucy5mb3JFYWNoKChwb2ludCwgaSkgPT4ge1xuICAgICAgICB0aGlzLmRyYWdnYWJsZXNbaV0ucGluUG9zaXRpb24ocG9pbnQpXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBtZXNzYWdlXG4gICAgfVxuICB9XG5cbiAgZ2V0IGVuYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlXG4gIH1cblxuICBzZXQgZW5hYmxlKGVuYWJsZSkge1xuICAgIHRoaXMuX2VuYWJsZSA9IGVuYWJsZVxuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5lbmFibGUgPSBlbmFibGVcbiAgICB9KVxuICB9XG5cbiAgc3RhdGljIGZhY3RvcnkoY29udGFpbmVyRWxlbWVudCwgZWxlbWVudHMsIG9wdGlvbnM9e30pIHtcbiAgICBjb25zdCBkcmFnZ2FibGVzID0gQXJyYXkuZnJvbShlbGVtZW50cykubWFwKChlbGVtZW50KSA9PiB7XG4gICAgICByZXR1cm4gbmV3IERyYWdnYWJsZShlbGVtZW50LCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgY29udGFpbmVyOiBjb250YWluZXJFbGVtZW50XG4gICAgICB9LCBvcHRpb25zLmRyYWdnYWJsZSB8fCB7fSkpXG4gICAgfSlcbiAgICByZXR1cm4gbmV3IExpc3QoZHJhZ2dhYmxlcywgb3B0aW9ucy5saXN0IHx8IHt9KVxuICB9XG59XG4iLCJpbXBvcnQgTGlzdCBmcm9tICcuL2xpc3QnXG5pbXBvcnQgeyBpbmRleE9mTmVhcmVzdFBvaW50LCBnZXRZRGlmZmVyZW5jZSB9IGZyb20gJy4vZ2VvbWV0cnkvZGlzdGFuY2VzJ1xuXG5pbXBvcnQgRHJhZ2dhYmxlIGZyb20gJy4vZHJhZ2dhYmxlJ1xuXG5jb25zdCBhcnJheU1vdmUgPSAoYXJyYXksIGZyb20sIHRvKSA9PiB7XG4gIGFycmF5LnNwbGljZSh0byA8IDAgPyBhcnJheS5sZW5ndGggKyB0byA6IHRvLCAwLCBhcnJheS5zcGxpY2UoZnJvbSwgMSlbMF0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1YmJsaW5nTGlzdCBleHRlbmRzIExpc3Qge1xuICBjb25zdHJ1Y3RvcihkcmFnZ2FibGVzLCBvcHRpb25zPXt9KSB7XG4gICAgc3VwZXIoZHJhZ2dhYmxlcywgb3B0aW9ucylcbiAgfVxuXG4gIGluaXREcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgZHJhZ2dhYmxlLm9uKCdkcmFnOnN0YXJ0JywgKCkgPT4gdGhpcy5hdXRvRGV0ZWN0VmVydGljYWxHYXAoZHJhZ2dhYmxlKSlcbiAgICBzdXBlci5pbml0RHJhZ2dhYmxlKGRyYWdnYWJsZSlcbiAgfVxuXG4gIGF1dG9EZXRlY3RWZXJ0aWNhbEdhcCgpIHtcbiAgICBpZiAodGhpcy5kcmFnZ2FibGVzLmxlbmd0aCA+PSAyKSB7XG4gICAgICBjb25zdCBzb3J0ZWQgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuXG4gICAgICB0aGlzLnZlcnRpY2FsR2FwID0gc29ydGVkWzFdLnBpbm5lZFBvc2l0aW9uLnkgLSBzb3J0ZWRbMF0ucGlubmVkUG9zaXRpb24ueSAtIHNvcnRlZFswXS5nZXRTaXplKCkueVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZlcnRpY2FsR2FwID0gMFxuICAgIH1cblxuICAgIGlmICh0aGlzLmRyYWdnYWJsZXMubGVuZ3RoID49IDEpIHtcbiAgICAgIHRoaXMuc3RhcnRQb3NpdGlvbiA9IHRoaXMuZHJhZ2dhYmxlc1swXS5waW5uZWRQb3NpdGlvblxuICAgIH1cbiAgfVxuXG4gIG9uTW92ZShkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBzb3J0ZWREcmFnZ2FibGVzID0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcbiAgICBjb25zdCBwaW5uZWRQb3NpdGlvbnMgPSBzb3J0ZWREcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24pXG5cbiAgICBjb25zdCBjdXJyZW50SW5kZXggPSBzb3J0ZWREcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKVxuICAgIGNvbnN0IHRhcmdldEluZGV4ID0gaW5kZXhPZk5lYXJlc3RQb2ludChwaW5uZWRQb3NpdGlvbnMsIGRyYWdnYWJsZS5wb3NpdGlvbiwgdGhpcy5vcHRpb25zLnJhZGl1cywgdGhpcy5kaXN0YW5jZUZ1bmMpXG5cbiAgICBpZiAodGFyZ2V0SW5kZXggIT09IC0xICYmIGN1cnJlbnRJbmRleCAhPT0gdGFyZ2V0SW5kZXgpIHtcbiAgICAgIGFycmF5TW92ZShzb3J0ZWREcmFnZ2FibGVzLCBjdXJyZW50SW5kZXgsIHRhcmdldEluZGV4KVxuICAgICAgdGhpcy5idWJsaW5nKHNvcnRlZERyYWdnYWJsZXMsIGRyYWdnYWJsZSlcbiAgICAgIHRoaXMuZW1pdCgnbGlzdDpjaGFuZ2UnKVxuICAgIH1cbiAgfVxuXG4gIGJ1Ymxpbmcoc29ydGVkRHJhZ2dhYmxlcywgY3VycmVudERyYWdnYWJsZSkge1xuICAgIGNvbnN0IGN1cnJlbnRQb3NpdGlvbiA9IHRoaXMuc3RhcnRQb3NpdGlvbi5jbG9uZSgpXG5cbiAgICBzb3J0ZWREcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgaWYgKCFkcmFnZ2FibGUucGlubmVkUG9zaXRpb24uY29tcGFyZShjdXJyZW50UG9zaXRpb24pKSB7XG4gICAgICAgIGlmIChkcmFnZ2FibGUgPT09IGN1cnJlbnREcmFnZ2FibGUgJiYgIWN1cnJlbnREcmFnZ2FibGUubmF0aXZlRHJhZ0FuZERyb3ApIHtcbiAgICAgICAgICBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24gPSBjdXJyZW50UG9zaXRpb24uY2xvbmUoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRyYWdnYWJsZS5waW5Qb3NpdGlvbihjdXJyZW50UG9zaXRpb24sIChkcmFnZ2FibGUgPT09IGN1cnJlbnREcmFnZ2FibGUpID8gMCA6IHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjdXJyZW50UG9zaXRpb24ueSA9IGN1cnJlbnRQb3NpdGlvbi55ICsgZHJhZ2dhYmxlLmdldFNpemUoKS55ICsgdGhpcy52ZXJ0aWNhbEdhcFxuICAgIH0pXG4gIH1cblxuICBnZXQgZGlzdGFuY2VGdW5jKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZ2V0RGlzdGFuY2UgfHwgZ2V0WURpZmZlcmVuY2VcbiAgfVxuXG4gIHN0YXRpYyBmYWN0b3J5KGNvbnRhaW5lckVsZW1lbnQsIGVsZW1lbnRzLCBvcHRpb25zPXt9KSB7XG4gICAgY29uc3QgZHJhZ2dhYmxlcyA9IEFycmF5LmZyb20oZWxlbWVudHMpLm1hcCgoZWxlbWVudCkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBEcmFnZ2FibGUoZWxlbWVudCwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyRWxlbWVudFxuICAgICAgfSwgb3B0aW9ucy5kcmFnZ2FibGUgfHwge30pKVxuICAgIH0pXG4gICAgcmV0dXJuIG5ldyBCdWJibGluZ0xpc3QoZHJhZ2dhYmxlcywgb3B0aW9ucy5saXN0IHx8IHt9KVxuICB9XG59XG4iLCJmdW5jdGlvbiBzZXRTdHlsZShlbGVtZW50LCBzdHlsZSkge1xuICBzdHlsZSA9IHN0eWxlIHx8IHt9XG4gIGxldCBjc3NUZXh0ID0gJydcbiAgZm9yIChjb25zdCBrZXkgaW4gc3R5bGUpIHtcbiAgICBpZiAoc3R5bGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgY3NzVGV4dCArPSBrZXkgKyAnOiAnICsgc3R5bGVba2V5XSArICc7ICdcbiAgICB9XG4gIH1cblxuICBlbGVtZW50LnN0eWxlLmNzc1RleHQgPSBjc3NUZXh0XG59XG5cbmZ1bmN0aW9uIGFwcGVuZEZpcnN0Q2hpbGQoZWxlbWVudCwgbm9kZSkge1xuICBpZiAoZWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgZWxlbWVudC5pbnNlcnRCZWZvcmUobm9kZSwgZWxlbWVudC5maXJzdENoaWxkKVxuICB9IGVsc2Uge1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQobm9kZSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVDYW52YXMoYXJlYSwgcmVjdGFnbGUpIHtcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJylcbiAgaWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGFyZWEpLnBvc2l0aW9uID09PSAnc3RhdGljJykge1xuICAgIGFyZWEuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnXG4gIH1cblxuICBjYW52YXMuc2V0QXR0cmlidXRlKCd3aWR0aCcsIHJlY3RhZ2xlLnNpemUueCArICdweCcpXG4gIGNhbnZhcy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIHJlY3RhZ2xlLnNpemUueSArICdweCcpXG4gIHNldFN0eWxlKGNhbnZhcywge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGxlZnQ6IHJlY3RhZ2xlLnBvc2l0aW9uLnkgKyAncHgnLFxuICAgIHRvcDogcmVjdGFnbGUucG9zaXRpb24ueSArICdweCcsXG4gICAgd2lkdGg6IHJlY3RhZ2xlLnNpemUueCArICdweCcsXG4gICAgaGVpZ2h0OiByZWN0YWdsZS5zaXplLnkgKyAncHgnXG4gIH0pXG4gIGFwcGVuZEZpcnN0Q2hpbGQoYXJlYSwgY2FudmFzKVxuICByZXR1cm4gY2FudmFzXG59XG4iLCJpbXBvcnQgY3JlYXRlQ2FudmFzIGZyb20gJy4vdXRpbHMvY3JlYXRlLWNhbnZhcydcbmltcG9ydCBQb2ludCBmcm9tICcuL2dlb21ldHJ5L3BvaW50J1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tICcuL2dlb21ldHJ5L3JlY3RhbmdsZSdcblxuaW1wb3J0IHsgZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtIH0gZnJvbSAnLi9nZW9tZXRyeS9hbmdsZXMnXG5pbXBvcnQgeyBCb3VuZFRvTGluZSB9IGZyb20gJy4vYm91bmRpbmcnXG5pbXBvcnQgRHJhZ2dhYmxlIGZyb20gJy4vZHJhZ2dhYmxlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTcGlkZXIge1xuICBjb25zdHJ1Y3RvcihhcmVhLCBlbGVtZW50cywgb3B0aW9ucz17fSkge1xuICAgIGNvbnN0IGFyZWFSZWN0YW5nbGUgPSBSZWN0YW5nbGUuZnJvbUVsZW1lbnQoYXJlYSwgYXJlYSlcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGFuZ2xlOiAwLFxuICAgICAgZEFuZ2xlOiAyICogTWF0aC5QSSAvIGVsZW1lbnRzLmxlbmd0aCxcbiAgICAgIGNlbnRlcjogYXJlYVJlY3RhbmdsZS5nZXRDZW50ZXIoKSxcbiAgICAgIHN0YXJ0UmFkaXVzOiA1MCxcbiAgICAgIGVuZFJhZGl1czogYXJlYVJlY3RhbmdsZS5nZXRNaW5TaWRlKCkgLyAyLFxuICAgICAgbGluZVdpZHRoOiAyLFxuICAgICAgc3Ryb2tlU3R5bGU6ICcjZmY1NTc3JyxcbiAgICAgIGZpbGxTdHlsZTogJ3JnYmEoMTUwLDI1NSw1MCwwLjgpJ1xuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0aGlzLmFyZWEgPSBhcmVhXG4gICAgdGhpcy5hcmVhUmVjdGFuZ2xlID0gYXJlYVJlY3RhbmdsZVxuICAgIHRoaXMuaW5pdChlbGVtZW50cylcbiAgfVxuXG4gIGluaXQoZWxlbWVudHMpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNyZWF0ZUNhbnZhcyh0aGlzLmFyZWEsIHRoaXMuYXJlYVJlY3RhbmdsZSlcbiAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG5cbiAgICB0aGlzLmRyYWdnYWJsZXMgPSBlbGVtZW50cy5tYXAoKGVsZW1lbnQsIGkpID0+IHtcbiAgICAgIGNvbnN0IGFuZ2xlID0gdGhpcy5vcHRpb25zLmFuZ2xlICsgaSAqIHRoaXMub3B0aW9ucy5kQW5nbGVcbiAgICAgIGNvbnN0IGhhbGZTaXplID0gUG9pbnQuZWxlbWVudFNpemUoZWxlbWVudCkubXVsdCgwLjUpXG4gICAgICBjb25zdCBzdGFydCA9IGdldFBvaW50RnJvbVJhZGlhbFN5c3RlbShhbmdsZSwgdGhpcy5vcHRpb25zLnN0YXJ0UmFkaXVzLCB0aGlzLm9wdGlvbnMuY2VudGVyKS5zdWIoaGFsZlNpemUpXG4gICAgICBjb25zdCBlbmQgPSBnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oYW5nbGUsIHRoaXMub3B0aW9ucy5lbmRSYWRpdXMsIHRoaXMub3B0aW9ucy5jZW50ZXIpLnN1YihoYWxmU2l6ZSlcblxuICAgICAgcmV0dXJuIG5ldyBEcmFnZ2FibGUoZWxlbWVudCwge1xuICAgICAgICBjb250YWluZXI6IHRoaXMuYXJlYSxcbiAgICAgICAgYm91bmQ6IEJvdW5kVG9MaW5lLmJvdW5kaW5nKHN0YXJ0LCBlbmQpLFxuICAgICAgICBwb3NpdGlvbjogc3RhcnQsXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgJ2RyYWc6bW92ZSc6ICgpID0+IHRoaXMuZHJhdygpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcblxuICAgIHRoaXMuaXNJbml0ID0gdHJ1ZVxuICAgIHRoaXMuZHJhdygpXG4gIH1cblxuICBkcmF3KCkge1xuICAgIGlmICghdGhpcy5pc0luaXQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMuYXJlYVJlY3RhbmdsZS5zaXplLngsIHRoaXMuYXJlYVJlY3RhbmdsZS5zaXplLnkpXG4gICAgdGhpcy5jb250ZXh0LmJlZ2luUGF0aCgpXG5cbiAgICBsZXQgcG9pbnQgPSB0aGlzLmRyYWdnYWJsZXNbMF0uZ2V0Q2VudGVyKClcbiAgICB0aGlzLmNvbnRleHQubW92ZVRvKHBvaW50LngsIHBvaW50LnkpXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZHJhZ2dhYmxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgcG9pbnQgPSB0aGlzLmRyYWdnYWJsZXNbaV0uZ2V0Q2VudGVyKClcbiAgICAgIHRoaXMuY29udGV4dC5saW5lVG8ocG9pbnQueCwgcG9pbnQueSlcbiAgICB9XG4gICAgdGhpcy5jb250ZXh0LmNsb3NlUGF0aCgpXG4gICAgdGhpcy5jb250ZXh0LmxpbmVXaWR0aCA9IHRoaXMub3B0aW9ucy5saW5lV2lkdGhcbiAgICB0aGlzLmNvbnRleHQuc3Ryb2tlU3R5bGUgPSB0aGlzLm9wdGlvbnMuc3Ryb2tlU3R5bGVcbiAgICB0aGlzLmNvbnRleHQuc3Ryb2tlKClcbiAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5vcHRpb25zLmZpbGxTdHlsZVxuICAgIHRoaXMuY29udGV4dC5maWxsKClcbiAgfVxufVxuIiwiaW1wb3J0IERyYWdnYWJsZSBmcm9tICcuL2RyYWdnYWJsZSdcbmltcG9ydCB7IEJvdW5kVG9BcmMgfSBmcm9tICcuL2JvdW5kaW5nJ1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50RW1pdHRlcidcblxuaW1wb3J0IFJlY3RhbmdsZSBmcm9tICcuL2dlb21ldHJ5L3JlY3RhbmdsZSdcbmltcG9ydCB7XG4gIGdldFBvaW50RnJvbVJhZGlhbFN5c3RlbSxcbiAgZ2V0QW5nbGUsXG4gIG5vcm1hbGl6ZUFuZ2xlXG59IGZyb20gJy4vZ2VvbWV0cnkvYW5nbGVzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcmNTbGlkZXIgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvcihhcmVhLCBlbGVtZW50LCBvcHRpb25zPXt9KSB7XG4gICAgc3VwZXIodW5kZWZpbmVkLCBvcHRpb25zKVxuICAgIGNvbnN0IGFyZWFSZWN0YW5nbGUgPSBSZWN0YW5nbGUuZnJvbUVsZW1lbnQoYXJlYSwgYXJlYSlcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNlbnRlcjogYXJlYVJlY3RhbmdsZS5nZXRDZW50ZXIoKSxcbiAgICAgIHJhZGl1czogYXJlYVJlY3RhbmdsZS5nZXRNaW5TaWRlKCkgLyAyLFxuICAgICAgc3RhcnRBbmdsZTogTWF0aC5QSSxcbiAgICAgIGVuZEFuZ2xlOiAwLFxuICAgICAgYW5nbGVzOiBbTWF0aC5QSSwgLU1hdGguUEkgLyA0LCAwLCBNYXRoLlBJIC8gNCwgTWF0aC5QSSAvIDJdLFxuICAgICAgdGltZTogNTAwXG4gICAgfSwgb3B0aW9ucylcblxuICAgIHRoaXMuc2hpZnRlZENlbnRlciA9IHRoaXMub3B0aW9ucy5jZW50ZXJcbiAgICB0aGlzLmFyZWEgPSBhcmVhXG4gICAgdGhpcy5pbml0KGVsZW1lbnQpXG4gIH1cblxuICBpbml0KGVsZW1lbnQpIHtcbiAgICBjb25zdCBhbmdsZSA9IHRoaXMub3B0aW9ucy5zdGFydEFuZ2xlXG4gICAgY29uc3QgcG9zaXRpb24gPSBnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oXG4gICAgICBhbmdsZSxcbiAgICAgIHRoaXMub3B0aW9ucy5yYWRpdXMsXG4gICAgICB0aGlzLnNoaWZ0ZWRDZW50ZXJcbiAgICApXG5cbiAgICB0aGlzLmFuZ2xlID0gYW5nbGVcbiAgICB0aGlzLmRyYWdnYWJsZSA9IG5ldyBEcmFnZ2FibGUoZWxlbWVudCwge1xuICAgICAgY29udGFpbmVyOiB0aGlzLmFyZWEsXG4gICAgICBib3VuZDogQm91bmRUb0FyYy5ib3VuZGluZyhcbiAgICAgICAgdGhpcy5zaGlmdGVkQ2VudGVyLFxuICAgICAgICB0aGlzLm9wdGlvbnMucmFkaXVzLFxuICAgICAgICB0aGlzLm9wdGlvbnMuc3RhcnRBbmdsZSxcbiAgICAgICAgdGhpcy5vcHRpb25zLmVuZEFuZ2xlXG4gICAgICApLFxuICAgICAgcG9zaXRpb246IHBvc2l0aW9uLFxuICAgICAgb246IHtcbiAgICAgICAgJ2RyYWc6bW92ZSc6ICgpID0+IHRoaXMuY2hhbmdlKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgdXBkYXRlQW5nbGUoKSB7XG4gICAgdGhpcy5hbmdsZSA9IGdldEFuZ2xlKHRoaXMuc2hpZnRlZENlbnRlciwgdGhpcy5kcmFnZ2FibGUucG9zaXRpb24pXG4gIH1cblxuICBjaGFuZ2UoKSB7XG4gICAgdGhpcy51cGRhdGVBbmdsZSgpXG4gICAgLy8gICAgICB2YXIgYW5nbGUgPSBHZW9tZXRyeS5nZXROZWFyZXN0QW5nbGUodGhpcy5vcHRpb25zLmFuZ2xlcywgdGhpcy5hbmdsZSk7XG4gICAgLy8gICAgICB0aGlzLnNldEFuZ2xlKGFuZ2xlLHRoaXMub3B0aW9ucy50aW1lKTtcbiAgICB0aGlzLmVtaXQoJ2FyY3NsaWRlcjpjaGFuZ2UnLCB7IGFuZ2xlOiB0aGlzLmFuZ2xlIH0pXG4gIH1cblxuICBzZXRBbmdsZShhbmdsZSwgdGltZSkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKFxuICAgICAgdGhpcy5hbmdsZSxcbiAgICAgIHRoaXMub3B0aW9ucy5yYWRpdXMsXG4gICAgICB0aGlzLnNoaWZ0ZWRDZW50ZXJcbiAgICApXG4gICAgdGhpcy5hbmdsZSA9IG5vcm1hbGl6ZUFuZ2xlKGFuZ2xlLCBwb3NpdGlvbilcbiAgICB0aGlzLmRyYWdnYWJsZS5waW5Qb3NpdGlvbihwb3NpdGlvbiwgdGltZXx8MClcbiAgICB0aGlzLmVtaXQoJ2FyY3NsaWRlcjpjaGFuZ2UnLCB0aGlzLmFuZ2xlKVxuICB9XG59XG4iLCJpbXBvcnQgY3JlYXRlQ2FudmFzIGZyb20gJy4vdXRpbHMvY3JlYXRlLWNhbnZhcydcbmltcG9ydCByYW5nZSBmcm9tICcuL3V0aWxzL3JhbmdlJ1xuaW1wb3J0IFBvaW50IGZyb20gJy4vZ2VvbWV0cnkvcG9pbnQnXG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gJy4vZ2VvbWV0cnkvcmVjdGFuZ2xlJ1xuXG5pbXBvcnQgeyBnZXREaXN0YW5jZSB9IGZyb20gJy4vZ2VvbWV0cnkvZGlzdGFuY2VzJ1xuXG5pbXBvcnQge1xuICB0b1JhZGlhbixcbiAgZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtLFxuICBnZXRBbmdsZSxcbiAgbm9ybWFsaXplQW5nbGVcbn0gZnJvbSAnLi9nZW9tZXRyeS9hbmdsZXMnXG5cbmltcG9ydCBEcmFnZ2FibGUgZnJvbSAnLi9kcmFnZ2FibGUnXG5pbXBvcnQgeyBCb3VuZFRvQXJjIH0gZnJvbSAnLi9ib3VuZGluZydcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudEVtaXR0ZXInXG5cbmNvbnN0IHJuZCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKjI1NSlcbn1cblxuY29uc3QgdG9IZXhTdHJpbmcgPSBmdW5jdGlvbihkaWdpdCkge1xuICBsZXQgc3RyID0gZGlnaXQudG9TdHJpbmcoMTYpXG4gIHdoaWxlIChzdHIubGVuZ3RoIDwgMikge1xuICAgIHN0ciA9ICcwJyArIHN0clxuICB9XG4gIHJldHVybiBzdHJcbn1cblxuZnVuY3Rpb24gcmFuZG9tQ29sb3IoKSB7XG4gIHJldHVybiBgIyR7dG9IZXhTdHJpbmcocm5kKCkpfSR7dG9IZXhTdHJpbmcocm5kKCkpfSR7dG9IZXhTdHJpbmcocm5kKCkpfWBcbn1cblxuZnVuY3Rpb24gZ2V0QXJyYXlXaXRoQm91bmRJbmRleGVzKGluZGV4LCBsZW5ndGgpIHtcbiAgY29uc3QgcmV0SW5kZXhlcyA9IFtdXG4gIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICByZXRJbmRleGVzLnB1c2goaW5kZXgpXG4gICAgcmV0SW5kZXhlcy5wdXNoKChpbmRleCArIDEpICUgbGVuZ3RoKVxuICB9XG5cbiAgcmV0dXJuIHJldEluZGV4ZXNcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhcnQgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAoYXJlYSwgZWxlbWVudHMsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcih1bmRlZmluZWQsIG9wdGlvbnMpXG4gICAgY29uc3QgYXJlYVJlY3RhbmdsZSA9IFJlY3RhbmdsZS5mcm9tRWxlbWVudChhcmVhLCBhcmVhKVxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY2VudGVyOiBhcmVhUmVjdGFuZ2xlLmdldENlbnRlcigpLFxuICAgICAgcmFkaXVzOiBhcmVhUmVjdGFuZ2xlLmdldE1pblNpZGUoKSAvIDIsXG4gICAgICB0b3VjaFJhZGl1czogYXJlYVJlY3RhbmdsZS5nZXRNaW5TaWRlKCkgLyAyLFxuICAgICAgYm91bmRBbmdsZTogTWF0aC5QSSAvIDksXG4gICAgICBmaWxsU3R5bGVzOiByYW5nZSgwLCBlbGVtZW50cy5sZW5ndGgpLm1hcCgoKSA9PiByYW5kb21Db2xvcigpKSxcbiAgICAgIGluaXRBbmdsZXM6IHJhbmdlKC05MCwgMjcwLCAzNjAgLyBlbGVtZW50cy5sZW5ndGgpLm1hcCgoYW5nbGUpID0+IHRvUmFkaWFuKGFuZ2xlKSksXG4gICAgICBsaW1pdEltZzogbnVsbCxcbiAgICAgIGxpbWl0SW1nT2Zmc2V0OiBuZXcgUG9pbnQoMCwgMClcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGhpcy5hcmVhID0gYXJlYVxuICAgIHRoaXMuYXJlYVJlY3RhbmdsZSA9IGFyZWFSZWN0YW5nbGVcbiAgICB0aGlzLmluaXQoZWxlbWVudHMpXG4gIH1cblxuICBpbml0KGVsZW1lbnRzKSB7XG4gICAgdGhpcy5jYW52YXMgPSBjcmVhdGVDYW52YXModGhpcy5hcmVhLCB0aGlzLmFyZWFSZWN0YW5nbGUpXG4gICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGVsZW1lbnRzLm1hcCgoZWxlbWVudCwgaSkgPT4ge1xuICAgICAgY29uc3QgYW5nbGUgPSB0aGlzLm9wdGlvbnMuaW5pdEFuZ2xlc1tpXVxuICAgICAgY29uc3QgaGFsZlNpemUgPSBQb2ludC5lbGVtZW50U2l6ZShlbGVtZW50KS5tdWx0KDAuNSlcbiAgICAgIGNvbnN0IHBvc2l0aW9uID0gZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKFxuICAgICAgICBhbmdsZSxcbiAgICAgICAgdGhpcy5vcHRpb25zLnRvdWNoUmFkaXVzLFxuICAgICAgICB0aGlzLm9wdGlvbnMuY2VudGVyLnN1YihoYWxmU2l6ZSlcbiAgICAgIClcblxuICAgICAgcmV0dXJuIG5ldyBEcmFnZ2FibGUoZWxlbWVudCwge1xuICAgICAgICBjb250YWluZXI6IHRoaXMuYXJlYSxcbiAgICAgICAgYm91bmQ6IEJvdW5kVG9BcmMuYm91bmRpbmcoXG4gICAgICAgICAgdGhpcy5vcHRpb25zLmNlbnRlci5zdWIoaGFsZlNpemUpLFxuICAgICAgICAgIHRoaXMub3B0aW9ucy50b3VjaFJhZGl1cyxcbiAgICAgICAgICB0aGlzLmdldEJvdW5kQW5nbGUoaSwgZmFsc2UpLFxuICAgICAgICAgIHRoaXMuZ2V0Qm91bmRBbmdsZShpLCB0cnVlKVxuICAgICAgICApLFxuICAgICAgICBwb3NpdGlvbjogcG9zaXRpb24sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgJ2RyYWc6bW92ZSc6ICgpID0+IHRoaXMuZHJhdygpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcblxuICAgIHRoaXMuaXNJbml0ID0gdHJ1ZVxuICAgIHRoaXMuZHJhdygpXG4gIH1cblxuICB1cGRhdGVBbmdsZXMoKSB7XG4gICAgdGhpcy5hbmdsZXMgPSB0aGlzLmRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGNvbnN0IGhhbGZTaXplID0gZHJhZ2dhYmxlLmdldFNpemUoKS5tdWx0KDAuNSlcbiAgICAgIHJldHVybiBnZXRBbmdsZSh0aGlzLm9wdGlvbnMuY2VudGVyLnN1YihoYWxmU2l6ZSksIGRyYWdnYWJsZS5wb3NpdGlvbilcbiAgICB9KVxuICB9XG5cbiAgZ2V0Qm91bmRBbmdsZShpbmRleCwgaXNDbG9zc2luZykge1xuICAgIGNvbnN0IHNpZ24gPSBpc0Nsb3NzaW5nID8gMSA6IC0xXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgbGV0IGkgPSAoaW5kZXggKyBzaWduKSAlIHRoaXMuYW5nbGVzLmxlbmd0aFxuICAgICAgaWYgKGkgPCAwKSB7XG4gICAgICAgIGkgKz0gdGhpcy5hbmdsZXMubGVuZ3RoXG4gICAgICB9XG4gICAgICByZXR1cm4gbm9ybWFsaXplQW5nbGUodGhpcy5hbmdsZXNbaV0gLSBzaWduICogdGhpcy5vcHRpb25zLmJvdW5kQW5nbGUpXG4gICAgfVxuICB9XG5cbiAgZHJhdygpIHtcbiAgICBpZiAoIXRoaXMuaXNJbml0KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZUFuZ2xlcygpXG4gICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmFyZWFSZWN0YW5nbGUuc2l6ZS54LCB0aGlzLmFyZWFSZWN0YW5nbGUuc2l6ZS55KVxuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChfZHJhZ2dhYmxlLCBpbmRleCkgPT4ge1xuICAgICAgdGhpcy5kcmF3QXJjKHRoaXMuY29udGV4dCwgdGhpcy5vcHRpb25zLmNlbnRlciwgdGhpcy5vcHRpb25zLnJhZGl1cywgaW5kZXgpXG4gICAgfSlcblxuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChfZHJhZ2dhYmxlLCBpbmRleCkgPT4ge1xuICAgICAgdGhpcy5kcmF3TGltaXRJbWcoaW5kZXgpXG4gICAgfSlcblxuICAgIHRoaXMuZW1pdCgnY2hhcnQ6ZHJhdycpXG4gIH1cblxuICBjcmVhdGVDbG9uZShlbGVtZW50LCBvcHRpb25zID0ge30pIHtcbiAgICBpZiAoIXRoaXMuaXNJbml0KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3QgcmVjdGFuZ2xlID0gUmVjdGFuZ2xlLmZyb21FbGVtZW50KGVsZW1lbnQsIGVsZW1lbnQpXG4gICAgY29uc3Qgb3B0cyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY2VudGVyOiByZWN0YW5nbGUuZ2V0Q2VudGVyKCksXG4gICAgICByYWRpdXM6IHJlY3RhbmdsZS5nZXRNaW5TaWRlKCkgLyAyLFxuICAgICAgZmlsbFN0eWxlczogdGhpcy5vcHRpb25zLmZpbGxTdHlsZXNcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgY29uc3QgY2FudmFzID0gY3JlYXRlQ2FudmFzKGVsZW1lbnQsIHJlY3RhbmdsZSlcbiAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJylcbiAgICBjb25zdCBjbG9uZU9iaiA9IHtcbiAgICAgIGRyYXc6ICgpID0+IHtcbiAgICAgICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgcmVjdGFuZ2xlLnNpemUueCwgcmVjdGFuZ2xlLnNpemUueSlcbiAgICAgICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKF9kcmFnZ2FibGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgdGhpcy5kcmF3QXJjKGNvbnRleHQsIG9wdHMuY2VudGVyLCBvcHRzLnJhZGl1cywgaW5kZXgpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICAgIGNsb25lT2JqLmRyYXcoKVxuICAgIHJldHVybiBjbG9uZU9ialxuICB9XG5cbiAgZ2V0RmlsbFN0eWxlKGluZGV4KSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuZmlsbFN0eWxlc1tpbmRleF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5maWxsU3R5bGVzW2luZGV4XSA9IHRoaXMub3B0aW9ucy5maWxsU3R5bGVzW2luZGV4XS5jYWxsKHRoaXMpXG4gICAgfVxuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZmlsbFN0eWxlc1tpbmRleF1cbiAgfVxuXG4gIGRyYXdBcmMoY29udGV4dCwgY2VudGVyLCByYWRpdXMsIGluZGV4KSB7XG4gICAgY29uc3Qgc3RhcnRBbmdsZSA9IHRoaXMuYW5nbGVzW2luZGV4XVxuICAgIGNvbnN0IGVuZEFuZ2xlID0gdGhpcy5hbmdsZXNbKGluZGV4KzEpICUgdGhpcy5hbmdsZXMubGVuZ3RoXVxuICAgIGNvbnN0IGNvbG9yID0gdGhpcy5nZXRGaWxsU3R5bGUoaW5kZXgpXG5cbiAgICBjb250ZXh0LmJlZ2luUGF0aCgpXG4gICAgY29udGV4dC5tb3ZlVG8oY2VudGVyLngsIGNlbnRlci55KVxuICAgIGNvbnRleHQuYXJjKGNlbnRlci54LCBjZW50ZXIueSwgcmFkaXVzLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSwgZmFsc2UpXG4gICAgY29udGV4dC5saW5lVG8oY2VudGVyLngsIGNlbnRlci55KVxuICAgIGNvbnRleHQuY2xvc2VQYXRoKClcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yXG4gICAgY29udGV4dC5maWxsKClcbiAgfVxuXG4gIGRyYXdMaW1pdEltZyhpbmRleCkge1xuICAgIGxldCBwb2ludCwgaW1nXG4gICAgaWYgKHRoaXMub3B0aW9ucy5saW1pdEltZykge1xuICAgICAgaW1nID0gdGhpcy5vcHRpb25zLmxpbWl0SW1nIGluc3RhbmNlb2YgQXJyYXkgPyB0aGlzLm9wdGlvbnMubGltaXRJbWdbaW5kZXhdIDogdGhpcy5vcHRpb25zLmxpbWl0SW1nXG4gICAgfVxuXG4gICAgaWYgKGltZykge1xuICAgICAgY29uc3QgYW5nbGUgPSBub3JtYWxpemVBbmdsZSh0aGlzLmFuZ2xlc1tpbmRleF0pXG4gICAgICBwb2ludCA9IG5ldyBQb2ludCgwLCAtaW1nLmhlaWdodCAvIDIpXG4gICAgICBwb2ludCA9IHBvaW50LmFkZCh0aGlzLm9wdGlvbnMubGltaXRJbWdPZmZzZXQpXG4gICAgICB0aGlzLmNvbnRleHQudHJhbnNsYXRlKHRoaXMuYXJlYVJlY3RhbmdsZS5zaXplLnggLyAyLCB0aGlzLmFyZWFSZWN0YW5nbGUuc2l6ZS55IC8gMilcbiAgICAgIHRoaXMuY29udGV4dC5yb3RhdGUoYW5nbGUpXG4gICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKGltZywgcG9pbnQueCwgcG9pbnQueSlcbiAgICAgIHRoaXMuY29udGV4dC5zZXRUcmFuc2Zvcm0oMSwgMCwgMCwgMSwgMCwgMClcbiAgICB9XG4gIH1cblxuICBnZXRBbmdsZXNEaWZmKCkge1xuICAgIGNvbnN0IGFuZ2xlcyA9IHRoaXMuYW5nbGVzLnNsaWNlKDEpXG4gICAgbGV0IGJhc2VBbmdsZSA9IHRoaXMuYW5nbGVzWzBdXG5cbiAgICBhbmdsZXMucHVzaChiYXNlQW5nbGUpXG4gICAgcmV0dXJuIGFuZ2xlcy5tYXAoKGFuZ2xlKSA9PiB7XG4gICAgICBjb25zdCBkaWZmQW5nbGUgPSBub3JtYWxpemVBbmdsZShhbmdsZSAtIGJhc2VBbmdsZSlcbiAgICAgIGJhc2VBbmdsZSA9IGFuZ2xlXG4gICAgICByZXR1cm4gZGlmZkFuZ2xlXG4gICAgfSlcbiAgfVxuXG4gIGdldFBlcmNlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0QW5nbGVzRGlmZigpLm1hcCgoZGlmZkFuZ2xlKSA9PiBkaWZmQW5nbGUgLyAoMiAqIE1hdGguUEkpKVxuICB9XG5cbiAgZ2V0QXJjQmlzZWN0cml4cygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRBbmdsZXNEaWZmKCkubWFwKChkaWZmQW5nbGUsIGkpID0+IHtcbiAgICAgIHJldHVybiBub3JtYWxpemVBbmdsZSh0aGlzLmFuZ2xlc1tpXSArIGRpZmZBbmdsZSAvIDIpXG4gICAgfSlcbiAgfVxuXG4gIGdldEFyY09uUG9pbnQocG9pbnQpIHtcbiAgICBjb25zdCBhbmdsZSA9IGdldEFuZ2xlKHRoaXMub3B0aW9ucy5jZW50ZXIsIHBvaW50KVxuICAgIGNvbnN0IHJhZGl1cyA9IGdldERpc3RhbmNlKHRoaXMub3B0aW9ucy5jZW50ZXIsIHBvaW50KVxuXG4gICAgaWYgKHJhZGl1cyA+IHRoaXMub3B0aW9ucy5yYWRpdXMpIHtcbiAgICAgIHJldHVybiAtMVxuICAgIH1cblxuICAgIGxldCBvZmZzZXQgPSAtMSwgaSwgalxuICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLmFuZ2xlcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKG9mZnNldCA9PT0gLTEgfHwgdGhpcy5hbmdsZXNbb2Zmc2V0XSA+IHRoaXMuYW5nbGVzW2ldKSB7XG4gICAgICAgIG9mZnNldCA9IGlcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChpID0gMCwgaiA9IG9mZnNldDsgaSA8IHRoaXMuYW5nbGVzLmxlbmd0aDsgaSsrLCBqID0gKGkgKyBvZmZzZXQpICUgdGhpcy5hbmdsZXMubGVuZ3RoKSB7XG4gICAgICBpZiAoYW5nbGUgPCB0aGlzLmFuZ2xlc1tqXSkge1xuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoLS1qIDwgMCkge1xuICAgICAgaiArPSB0aGlzLmFuZ2xlcy5sZW5ndGhcbiAgICB9XG4gICAgcmV0dXJuIGpcbiAgfVxuXG4gIHNldEFuZ2xlcyhhbmdsZXMpIHtcbiAgICB0aGlzLmFuZ2xlcyA9IGFuZ2xlc1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUsIGkpID0+IHtcbiAgICAgIGNvbnN0IGFuZ2xlID0gdGhpcy5hbmdsZXNbaV1cbiAgICAgIGNvbnN0IGhhbGZTaXplID0gZHJhZ2dhYmxlLmdldFNpemUoKS5tdWx0KDAuNSlcbiAgICAgIGNvbnN0IHBvc2l0aW9uID0gZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKFxuICAgICAgICBhbmdsZSxcbiAgICAgICAgdGhpcy5vcHRpb25zLnRvdWNoUmFkaXVzLFxuICAgICAgICB0aGlzLm9wdGlvbnMuY2VudGVyLnN1YihoYWxmU2l6ZSlcbiAgICAgIClcblxuICAgICAgZHJhZ2dhYmxlLm1vdmVBbmRTYXZlKHBvc2l0aW9uKVxuICAgIH0pXG4gICAgdGhpcy5kcmF3KClcbiAgfVxuXG4gIHNldEFjdGl2ZUFyYyhpbmRleCkge1xuICAgIGNvbnN0IGVuYWJsZUluZGV4ZXMgPSBnZXRBcnJheVdpdGhCb3VuZEluZGV4ZXMoaW5kZXgsIHRoaXMuZHJhZ2dhYmxlcy5sZW5ndGgpXG4gICAgdGhpcy5hY3RpdmVBcmNJbmRleCA9IGluZGV4XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSwgaSkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLmVuYWJsZSA9IGVuYWJsZUluZGV4ZXMuaW5kZXhPZihpKSAhPT0gLTFcbiAgICB9KVxuICAgIHRoaXMuZHJhdygpXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJnZXRTdW1WYWx1ZU9mU3R5bGVSdWxlcyIsImVsZW1lbnQiLCJydWxlcyIsInJlZHVjZSIsInN1bSIsInJ1bGUiLCJwYXJzZUludCIsIndpbmRvdyIsImdldENvbXB1dGVkU3R5bGUiLCJQb2ludCIsIngiLCJ5IiwicCIsImsiLCJwYXJlbnQiLCJwYXJlbnROb2RlIiwiZWxlbWVudFJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJwYXJlbnRSZWN0IiwibGVmdCIsInRvcCIsImlzQ29udGVudEJveFNpemUiLCJ3aWR0aCIsImhlaWdodCIsIlJlY3RhbmdsZSIsInBvc2l0aW9uIiwic2l6ZSIsImFkZCIsIm11bHQiLCJyZWN0IiwiTWF0aCIsIm1pbiIsIm1heCIsInN1YiIsInJlY3RhbmdsZSIsImluY2x1ZGVQb2ludCIsImdldFAzIiwiYXhpcyIsInNlbEF4aXMiLCJjcm9zc1JlY3RhbmdsZSIsImFuZCIsInRoaXNDZW50ZXIiLCJnZXRDZW50ZXIiLCJyZWN0Q2VudGVyIiwic2lnbiIsIm9mZnNldCIsImVsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic3R5bGUiLCJpc0NvbnNpZGVyVHJhbnNsYXRlIiwiZWxlbWVudE9mZnNldCIsImVsZW1lbnRTaXplIiwiaGFzQ2xhc3MiLCJjIiwicmUiLCJSZWdFeHAiLCJ0ZXN0IiwiY2xhc3NOYW1lIiwiYWRkQ2xhc3MiLCJyZXBsYWNlIiwicmVtb3ZlQ2xhc3MiLCJnZXREZWZhdWx0Q29udGFpbmVyIiwiY29udGFpbmVyIiwidGFnTmFtZSIsIkV2ZW50RW1pdHRlciIsImNvbnRleHQiLCJvcHRpb25zIiwiZXZlbnRzIiwib24iLCJPYmplY3QiLCJlbnRyaWVzIiwiZXZlbnROYW1lIiwiZm4iLCJpbnRlcnJ1cHRlZCIsImFyZ3MiLCJzbGljZSIsImNhbGwiLCJhcmd1bWVudHMiLCJmdW5jIiwiYXBwbHkiLCJwdXNoIiwidW5zaGlmdCIsImluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsImdldERpc3RhbmNlIiwicDEiLCJwMiIsImR4IiwiZHkiLCJzcXJ0IiwiZ2V0WERpZmZlcmVuY2UiLCJhYnMiLCJnZXRZRGlmZmVyZW5jZSIsInRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3RvcnkiLCJwb3ciLCJpbmRleE9mTmVhcmVzdFBvaW50IiwiYXJyIiwidmFsIiwicmFkaXVzIiwiZ2V0RGlzdGFuY2VGdW5jIiwiaSIsInRlbXAiLCJsZW5ndGgiLCJkaXJlY3RDcm9zc2luZyIsIkwxUDEiLCJMMVAyIiwiTDJQMSIsIkwyUDIiLCJrMSIsImsyIiwiYjEiLCJiMiIsImJvdW5kVG9MaW5lIiwiQSIsIkIiLCJQIiwiQVAiLCJBQiIsImFiMiIsImFwX2FiIiwidCIsImdldFBvaW50T25MaW5lQnlMZW5naHQiLCJMUDEiLCJMUDIiLCJsZW5naHQiLCJwZXJjZW50IiwiYWRkUG9pbnRUb0JvdW5kUG9pbnRzIiwiYm91bmRwb2ludHMiLCJwb2ludCIsImlzUmlnaHQiLCJyZXN1bHQiLCJmaWx0ZXIiLCJiUG9pbnQiLCJnZXRBbmdsZURpZmYiLCJhbHBoYSIsImJldGEiLCJtaW5BbmdsZSIsIm1heEFuZ2xlIiwiUEkiLCJnZXRBbmdsZSIsImRpZmYiLCJub3JtYWxpemVBbmdsZSIsImF0YW4yIiwidG9SYWRpYW4iLCJhbmdsZSIsImJvdW5kQW5nbGUiLCJkbWluIiwiZG1heCIsImdldFBvaW50RnJvbVJhZGlhbFN5c3RlbSIsImNlbnRlciIsImNvcyIsInNpbiIsIkJvdW5kIiwiX3NpemUiLCJpbnN0YW5jZSIsImJvdW5kIiwiYmluZCIsIkJvdW5kVG9SZWN0YW5nbGUiLCJjYWxjUG9pbnQiLCJjbG9uZSIsInJlY3RQMiIsIkJvdW5kVG9FbGVtZW50IiwiZnJvbUVsZW1lbnQiLCJCb3VuZFRvTGluZVgiLCJzdGFydFkiLCJlbmRZIiwiQm91bmRUb0xpbmVZIiwic3RhcnRYIiwiZW5kWCIsIkJvdW5kVG9MaW5lIiwic3RhcnRQb2ludCIsImVuZFBvaW50Iiwic29tZUsiLCJjb3NCZXRhIiwic2luQmV0YSIsInBvaW50MiIsIm5ld0VuZFBvaW50IiwicG9pbnRDcm9zc2luZyIsIkJvdW5kVG9DaXJjbGUiLCJCb3VuZFRvQXJjIiwic3RhcnRBbmdsZSIsImVuZEFuZ2xlIiwiX3N0YXJ0QW5nbGUiLCJfZW5kQW5nbGUiLCJhcnJheSIsInJhbmdlIiwic3RhcnQiLCJzdG9wIiwic3RlcCIsIkJhc2ljU3RyYXRlZ3kiLCJOb3RDcm9zc2luZ1N0cmF0ZWd5IiwicmVjdGFuZ2xlTGlzdCIsImluZGV4ZXNPZk5ld3MiLCJzdGF0aWNSZWN0YW5nbGVJbmRleGVzIiwiaW5kZXhlcyIsIl9yZWN0IiwiZm9yRWFjaCIsInJlbW92YWJsZSIsImluZGV4T2ZTdGF0aWMiLCJzdGF0aWNSZWN0IiwibW92ZVRvQm91bmQiLCJzb21lIiwiYm91bmRSZWN0IiwiZ2V0U3F1YXJlIiwib2RsRHJhZ2dhYmxlc0xpc3QiLCJuZXdEcmFnZ2FibGVzIiwiaW5kZXhPZk5ld3MiLCJkcmFnZ2FibGVzIiwiY29uY2F0IiwiZHJhZ2dhYmxlIiwiRmxvYXRMZWZ0U3RyYXRlZ3kiLCJhc3NpZ24iLCJwYWRkaW5nVG9wTGVmdCIsInBhZGRpbmdCb3R0b21SaWdodCIsInlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyIsImdldFBvc2l0aW9uIiwiX2luZGV4ZXNPZk5ld3MiLCJnZXRQMiIsImJvdW5kYXJ5UG9pbnRzIiwicmVjdEluZGV4IiwiaXNWYWxpZCIsIm5ld0xpc3QiLCJsaXN0T2xkUG9zaXRpb24iLCJtYXAiLCJuZXdEcmFnZ2FibGUiLCJGbG9hdFJpZ2h0U3RyYXRlZ3kiLCJwYWRkaW5nVG9wUmlnaHQiLCJwYWRkaW5nQm90dG9tTGVmdCIsInBhZGRpbmdCb3R0b21OZWdMZWZ0IiwiZ2V0UDQiLCJhZGRUb0RlZmF1bHRTY29wZSIsInRhcmdldCIsImRlZmF1bHRTY29wZSIsImFkZFRhcmdldCIsIlRhcmdldCIsInVuZGVmaW5lZCIsInRpbWVFbmQiLCJ0aW1lRXhjYW5nZSIsInBvc2l0aW9uaW5nU3RyYXRlZ3kiLCJzdHJhdGVneSIsImdldFJlY3RhbmdsZSIsInRhcmdldHMiLCJlbWl0dGVyIiwiZW1pdCIsImluaXQiLCJpbmRleGVzT2ZOZXciLCJwb3NpdGlvbmluZyIsIm9sZERyYWdnYWJsZXMiLCJzb3J0aW5nIiwicmVjdGFuZ2xlcyIsImlubmVyRHJhZ2dhYmxlcyIsInNldFBvc2l0aW9uIiwiY2F0Y2hEcmFnZ2FibGUiLCJ0YXJnZXRSZWN0YW5nbGUiLCJkcmFnZ2FibGVTcXVhcmUiLCJzY29wZXMiLCJzY29wZSIsInJlbW92ZUl0ZW0iLCJuZXdEcmFnZ2FibGVzSW5kZXgiLCJhZGRSZW1vdmVPbk1vdmUiLCJ0aW1lIiwibW92ZSIsImluaXRpYWxQb3NpdGlvbiIsInB1c2hJbm5lckRyYWdnYWJsZSIsInJlbW92ZUhhbmRsZXIiLCJyZW1vdmUiLCJ1bnN1YnNjcmliZSIsIl9jb250YWluZXIiLCJTY29wZSIsImRyYWdFbmRBY3Rpb24iLCJvbkVuZCIsInNob3RUYXJnZXRzIiwic29ydCIsImEiLCJiIiwicGluUG9zaXRpb24iLCJyZXNldCIsInJlZnJlc2giLCJwb3NpdGlvbnMiLCJtZXNzYWdlIiwidGFyZ2V0SW5kZXhlcyIsImN1cnJlbnRTY29wZSIsImFkZERyYWdnYWJsZVRvU2NvcGUiLCJhZGREcmFnZ2FibGUiLCJEcmFnZ2FibGUiLCJpbnRlcnJ1cHQiLCJhZGRUYXJnZXRUb1Njb3BlIiwicHJlcGVuZE9uIiwiY2hlY2tTdXBwb3J0UGFzc2l2ZUV2ZW50cyIsInBhc3NpdmVTdXBwb3J0ZWQiLCJkZWZpbmVQcm9wZXJ0eSIsImdldCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiX2VyciIsImlzU3VwcG9ydFBhc3NpdmVFdmVudHMiLCJpc1RvdWNoIiwibW91c2VFdmVudHMiLCJlbmQiLCJ0b3VjaEV2ZW50cyIsInRyYW5zZm9ybVByb3BlcnR5IiwiZ2V0U3R5bGVQcm9wZXJ0eSIsInRyYW5zaXRpb25Qcm9wZXJ0eSIsImdldFRvdWNoQnlJRCIsInRvdWNoSWQiLCJjaGFuZ2VkVG91Y2hlcyIsImlkZW50aWZpZXIiLCJwcmV2ZW50RG91YmxlSW5pdCIsImV4aXN0aW5nIiwiY29weVN0eWxlcyIsInNvdXJjZSIsImRlc3RpbmF0aW9uIiwiY3MiLCJrZXkiLCJjaGlsZHJlbiIsIl9lbmFibGUiLCJzdGFydEJvdW5kaW5nIiwic3RhcnRQb3NpdGlvbmluZyIsInN0YXJ0TGlzdGVuaW5nIiwiYm91bmRpbmciLCJfc2V0RGVmYXVsdFRyYW5zaXRpb24iLCJwaW5uZWRQb3NpdGlvbiIsIl9kcmFnU3RhcnQiLCJldmVudCIsImRyYWdTdGFydCIsIl9kcmFnTW92ZSIsImRyYWdNb3ZlIiwiX2RyYWdFbmQiLCJkcmFnRW5kIiwiX25hdGl2ZURyYWdTdGFydCIsIm5hdGl2ZURyYWdTdGFydCIsIl9uYXRpdmVEcmFnT3ZlciIsIm5hdGl2ZURyYWdPdmVyIiwiX25hdGl2ZURyYWdFbmQiLCJuYXRpdmVEcmFnRW5kIiwiX25hdGl2ZURyb3AiLCJuYXRpdmVEcm9wIiwiX3Njcm9sbCIsIm9uU2Nyb2xsIiwiaGFuZGxlciIsInBhc3NpdmUiLCJfdHJhbnNmb3JtUG9zaXRpb24iLCJnZXRTaXplIiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25Dc3MiLCJ0cmFuc2xhdGVDc3MiLCJ0cmFuc2Zvcm0iLCJzaG91bGRSZW1vdmVaZXJvVHJhbnNsYXRlIiwiaXNTaWxlbnQiLCJkZXRlcm1pbmVEaXJlY3Rpb24iLCJfc2V0VHJhbnNpdGlvbiIsIl9zZXRUcmFuc2xhdGUiLCJzaWxlbnQiLCJsZWZ0RGlyZWN0aW9uIiwicmlnaHREaXJlY3Rpb24iLCJ1cERpcmVjdGlvbiIsImRvd25EaXJlY3Rpb24iLCJjdXJyZW50RXZlbnQiLCJpc1RvdWNoRXZlbnQiLCJUb3VjaEV2ZW50IiwidG91Y2hQb2ludCIsIl9zdGFydFRvdWNoUG9pbnQiLCJwYWdlWCIsImNsaWVudFgiLCJwYWdlWSIsImNsaWVudFkiLCJfc3RhcnRQb3NpdGlvbiIsIl90b3VjaElkIiwiX3N0YXJ0U2Nyb2xsUG9pbnQiLCJzY3JvbGxYIiwic2Nyb2xsWSIsInN0b3BQcm9wYWdhdGlvbiIsIkhUTUxJbnB1dEVsZW1lbnQiLCJmb2N1cyIsIm5hdGl2ZURyYWdBbmREcm9wIiwicHJldmVudERlZmF1bHQiLCJpc1NhZmFyaSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcE9uVG91Y2giLCJlbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3BGb3JBbGwiLCJlbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3AiLCJpc0RyYWdnaW5nIiwidG91Y2giLCJzY3JvbGxQb2ludCIsInJlbW92ZUF0dHJpYnV0ZSIsIl9ldmVudCIsImRhdGFUcmFuc2ZlciIsInNldERhdGEiLCJlZmZlY3RBbGxvd2VkIiwiZHJvcEVmZmVjdCIsImNvbnRhaW5lclJlY3QiLCJjbG9uZWRFbGVtZW50IiwiY2xvbmVOb2RlIiwiYm9keSIsImFwcGVuZENoaWxkIiwiZW11bGF0aW9uRHJhZ2dhYmxlIiwiY29udGFpbmVyUmVjdFBvaW50IiwiZGVzdHJveSIsInJlbW92ZUNoaWxkIiwicmVzZXRFbWl0dGVyIiwiX2hhbmRsZXIiLCJlbmFibGUiLCJMaXN0IiwiaW5pdERyYWdnYWJsZSIsIm9uTW92ZSIsInNvcnRlZERyYWdnYWJsZXMiLCJnZXRTb3J0ZWREcmFnZ2FibGVzIiwicGlubmVkUG9zaXRpb25zIiwiY3VycmVudEluZGV4IiwidGFyZ2V0SW5kZXgiLCJkaXN0YW5jZUZ1bmMiLCJyZXNldFBvc2l0aW9uVG9Jbml0aWFsIiwiQXJyYXkiLCJpbml0aWFsUG9zaXRpb25zIiwibGlzdCIsInJlc2V0T24iLCJqIiwiZHJhZ2dhYmxlQSIsImRyYWdnYWJsZUIiLCJnZXRDdXJyZW50UGlubmVkUG9zaXRpb25zIiwiY29udGFpbmVyRWxlbWVudCIsImVsZW1lbnRzIiwiZnJvbSIsImFycmF5TW92ZSIsInRvIiwiQnViYmxpbmdMaXN0IiwiYXV0b0RldGVjdFZlcnRpY2FsR2FwIiwic29ydGVkIiwidmVydGljYWxHYXAiLCJzdGFydFBvc2l0aW9uIiwiYnVibGluZyIsImN1cnJlbnREcmFnZ2FibGUiLCJjdXJyZW50UG9zaXRpb24iLCJjb21wYXJlIiwic2V0U3R5bGUiLCJjc3NUZXh0IiwiaGFzT3duUHJvcGVydHkiLCJhcHBlbmRGaXJzdENoaWxkIiwibm9kZSIsImZpcnN0Q2hpbGQiLCJpbnNlcnRCZWZvcmUiLCJjcmVhdGVDYW52YXMiLCJhcmVhIiwicmVjdGFnbGUiLCJjYW52YXMiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiU3BpZGVyIiwiYXJlYVJlY3RhbmdsZSIsImRBbmdsZSIsInN0YXJ0UmFkaXVzIiwiZW5kUmFkaXVzIiwiZ2V0TWluU2lkZSIsImxpbmVXaWR0aCIsInN0cm9rZVN0eWxlIiwiZmlsbFN0eWxlIiwiZ2V0Q29udGV4dCIsImhhbGZTaXplIiwiZHJhdyIsImlzSW5pdCIsImNsZWFyUmVjdCIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsImNsb3NlUGF0aCIsInN0cm9rZSIsImZpbGwiLCJBcmNTbGlkZXIiLCJhbmdsZXMiLCJzaGlmdGVkQ2VudGVyIiwiY2hhbmdlIiwidXBkYXRlQW5nbGUiLCJybmQiLCJyb3VuZCIsInJhbmRvbSIsInRvSGV4U3RyaW5nIiwiZGlnaXQiLCJzdHIiLCJ0b1N0cmluZyIsInJhbmRvbUNvbG9yIiwiZ2V0QXJyYXlXaXRoQm91bmRJbmRleGVzIiwicmV0SW5kZXhlcyIsIkNoYXJ0IiwidG91Y2hSYWRpdXMiLCJmaWxsU3R5bGVzIiwiaW5pdEFuZ2xlcyIsImxpbWl0SW1nIiwibGltaXRJbWdPZmZzZXQiLCJnZXRCb3VuZEFuZ2xlIiwiaXNDbG9zc2luZyIsInVwZGF0ZUFuZ2xlcyIsIl9kcmFnZ2FibGUiLCJkcmF3QXJjIiwiZHJhd0xpbWl0SW1nIiwib3B0cyIsImNsb25lT2JqIiwiY29sb3IiLCJnZXRGaWxsU3R5bGUiLCJhcmMiLCJpbWciLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJkcmF3SW1hZ2UiLCJzZXRUcmFuc2Zvcm0iLCJiYXNlQW5nbGUiLCJkaWZmQW5nbGUiLCJnZXRBbmdsZXNEaWZmIiwibW92ZUFuZFNhdmUiLCJlbmFibGVJbmRleGVzIiwiYWN0aXZlQXJjSW5kZXgiXSwibWFw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
