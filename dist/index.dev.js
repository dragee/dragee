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

  exports.Bound = Bound;
  exports.BoundToArc = BoundToArc;
  exports.BoundToCircle = BoundToCircle;
  exports.BoundToElement = BoundToElement;
  exports.BoundToLine = BoundToLine;
  exports.BoundToLineX = BoundToLineX;
  exports.BoundToLineY = BoundToLineY;
  exports.BoundToRectangle = BoundToRectangle;
  exports.BubblingList = BubblingList;
  exports.Draggable = Draggable;
  exports.FloatLeftStrategy = FloatLeftStrategy;
  exports.FloatRightStrategy = FloatRightStrategy;
  exports.List = List;
  exports.NotCrossingStrategy = NotCrossingStrategy;
  exports.Point = Point;
  exports.Rectangle = Rectangle;
  exports.Scope = Scope;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZGV2LmpzIiwic291cmNlcyI6WyIuLi9zcmMvZ2VvbWV0cnkvcG9pbnQuanMiLCIuLi9zcmMvZ2VvbWV0cnkvcmVjdGFuZ2xlLmpzIiwiLi4vc3JjL3V0aWxzL2NsYXNzZXMuanMiLCIuLi9zcmMvdXRpbHMvZ2V0LWRlZmF1bHQtY29udGFpbmVyLmpzIiwiLi4vc3JjL2V2ZW50RW1pdHRlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9kZXNhbmRyby1nZXQtc3R5bGUtcHJvcGVydHkvZ2V0LXN0eWxlLXByb3BlcnR5LmpzIiwiLi4vc3JjL2dlb21ldHJ5L2Rpc3RhbmNlcy5qcyIsIi4uL3NyYy9nZW9tZXRyeS9ib3VuZHMuanMiLCIuLi9zcmMvZ2VvbWV0cnkvYW5nbGVzLmpzIiwiLi4vc3JjL2JvdW5kaW5nLmpzIiwiLi4vc3JjL3V0aWxzL3JlbW92ZS1hcnJheS1pdGVtLmpzIiwiLi4vc3JjL3V0aWxzL3JhbmdlLmpzIiwiLi4vc3JjL3Bvc2l0aW9uaW5nLmpzIiwiLi4vc3JjL3RhcmdldC5qcyIsIi4uL3NyYy9zY29wZS5qcyIsIi4uL3NyYy91dGlscy9pcy1zdXBwb3J0LXBhc3NpdmUtZXZlbnRzLmpzIiwiLi4vc3JjL2RyYWdnYWJsZS5qcyIsIi4uL3NyYy9saXN0LmpzIiwiLi4vc3JjL2J1YmJsaW5nTGlzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBnZXRTdW1WYWx1ZU9mU3R5bGVSdWxlcyhlbGVtZW50LCBydWxlcykge1xuICByZXR1cm4gcnVsZXMucmVkdWNlKChzdW0sIHJ1bGUpID0+IHtcbiAgICByZXR1cm4gc3VtICsgcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudClbcnVsZV18fDApXG4gIH0sIDApXG59XG5cbi8qKiBDbGFzcyByZXByZXNlbnRpbmcgYSBwb2ludC4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvaW50IHtcbiAgLyoqXG4gICogQ3JlYXRlIGEgcG9pbnQuXG4gICogQHBhcmFtIHtudW1iZXJ9IHggLSBUaGUgeCB2YWx1ZS5cbiAgKiBAcGFyYW0ge251bWJlcn0geSAtIFRoZSB5IHZhbHVlLlxuICAqL1xuICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgdGhpcy54ID0geFxuICAgIHRoaXMueSA9IHlcbiAgfVxuXG4gIGFkZChwKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnggKyBwLngsIHRoaXMueSArIHAueSlcbiAgfVxuXG4gIHN1YihwKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnggLSBwLngsIHRoaXMueSAtIHAueSlcbiAgfVxuXG4gIG11bHQoaykge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54ICogaywgdGhpcy55ICogaylcbiAgfVxuXG4gIG5lZ2F0aXZlKCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQoLXRoaXMueCwgLXRoaXMueSlcbiAgfVxuXG4gIGNvbXBhcmUocCkge1xuICAgIHJldHVybiAodGhpcy54ID09PSBwLnggJiYgdGhpcy55ID09PSBwLnkpXG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCwgdGhpcy55KVxuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIGB7eD0ke3RoaXMueH0seT0ke3RoaXMueX1gXG4gIH1cblxuICBzdGF0aWMgZWxlbWVudE9mZnNldChlbGVtZW50LCBwYXJlbnQpIHtcbiAgICBwYXJlbnQgPSBwYXJlbnQgfHwgZWxlbWVudC5wYXJlbnROb2RlXG4gICAgY29uc3QgZWxlbWVudFJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgY29uc3QgcGFyZW50UmVjdCA9IHBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIHJldHVybiBuZXcgUG9pbnQoXG4gICAgICBlbGVtZW50UmVjdC5sZWZ0IC0gcGFyZW50UmVjdC5sZWZ0LFxuICAgICAgZWxlbWVudFJlY3QudG9wIC0gcGFyZW50UmVjdC50b3BcbiAgICApXG4gIH1cblxuICBzdGF0aWMgZWxlbWVudFNpemUoZWxlbWVudCwgaXNDb250ZW50Qm94U2l6ZT1mYWxzZSkge1xuICAgIGxldCB3aWR0aCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpWyd3aWR0aCddKVxuICAgIGxldCBoZWlnaHQgPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KVsnaGVpZ2h0J10pXG4gICAgaWYgKCFpc0NvbnRlbnRCb3hTaXplKSB7XG4gICAgICB3aWR0aCArPSBnZXRTdW1WYWx1ZU9mU3R5bGVSdWxlcyhlbGVtZW50LCBbJ3BhZGRpbmctbGVmdCcsICdwYWRkaW5nLXJpZ2h0JywgJ2JvcmRlci1sZWZ0LXdpZHRoJywgJ2JvcmRlci1yaWdodC13aWR0aCddKVxuICAgICAgaGVpZ2h0ICs9IGdldFN1bVZhbHVlT2ZTdHlsZVJ1bGVzKGVsZW1lbnQsIFsncGFkZGluZy10b3AnLCAncGFkZGluZy1ib3R0b20nLCAnYm9yZGVyLXRvcC13aWR0aCcsICdib3JkZXItYm90dG9tLXdpZHRoJ10pXG4gICAgfVxuICAgIHJldHVybiBuZXcgUG9pbnQod2lkdGgsIGhlaWdodClcbiAgfVxufVxuIiwiaW1wb3J0IFBvaW50IGZyb20gJy4vcG9pbnQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY3RhbmdsZSB7XG4gIGNvbnN0cnVjdG9yKHBvc2l0aW9uLCBzaXplKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgdGhpcy5zaXplID0gc2l6ZVxuICB9XG5cbiAgZ2V0UDEoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25cbiAgfVxuXG4gIGdldFAyKCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHRoaXMucG9zaXRpb24ueSlcbiAgfVxuXG4gIGdldFAzKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLnNpemUpXG4gIH1cblxuICBnZXRQNCgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnkpXG4gIH1cblxuICBnZXRDZW50ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb24uYWRkKHRoaXMuc2l6ZS5tdWx0KDAuNSkpXG4gIH1cblxuICBvcihyZWN0KSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBuZXcgUG9pbnQoTWF0aC5taW4odGhpcy5wb3NpdGlvbi54LCByZWN0LnBvc2l0aW9uLngpLCBNYXRoLm1pbih0aGlzLnBvc2l0aW9uLnksIHJlY3QucG9zaXRpb24ueSkpXG4gICAgY29uc3Qgc2l6ZSA9IChuZXcgUG9pbnQoTWF0aC5tYXgodGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHJlY3QucG9zaXRpb24ueCArIHJlY3Quc2l6ZS54KSwgTWF0aC5tYXgodGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnksIHJlY3QucG9zaXRpb24ueSArIHJlY3Quc2l6ZS55KSkpLnN1Yihwb3NpdGlvbilcbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZShwb3NpdGlvbiwgc2l6ZSlcbiAgfVxuXG4gIGFuZChyZWN0KSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBuZXcgUG9pbnQoTWF0aC5tYXgodGhpcy5wb3NpdGlvbi54LCByZWN0LnBvc2l0aW9uLngpLCBNYXRoLm1heCh0aGlzLnBvc2l0aW9uLnksIHJlY3QucG9zaXRpb24ueSkpXG4gICAgY29uc3Qgc2l6ZSA9IChuZXcgUG9pbnQoTWF0aC5taW4odGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHJlY3QucG9zaXRpb24ueCArIHJlY3Quc2l6ZS54KSwgTWF0aC5taW4odGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnksIHJlY3QucG9zaXRpb24ueSArIHJlY3Quc2l6ZS55KSkpLnN1Yihwb3NpdGlvbilcbiAgICBpZiAoc2l6ZS54IDw9IDAgfHwgc2l6ZS55IDw9IDApIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHBvc2l0aW9uLCBzaXplKVxuICB9XG5cbiAgaW5jbHVkZVBvaW50KHApIHtcbiAgICByZXR1cm4gISh0aGlzLnBvc2l0aW9uLnggPiBwLnggfHwgdGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLnggPCBwLnggfHwgdGhpcy5wb3NpdGlvbi55ID4gcC55IHx8IHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55IDwgcC55KVxuICB9XG5cbiAgaW5jbHVkZVJlY3RhbmdsZShyZWN0YW5nbGUpIHtcbiAgICByZXR1cm4gdGhpcy5pbmNsdWRlUG9pbnQocmVjdGFuZ2xlLnBvc2l0aW9uKSAmJiB0aGlzLmluY2x1ZGVQb2ludChyZWN0YW5nbGUuZ2V0UDMoKSlcbiAgfVxuXG4gIG1vdmVUb0JvdW5kKHJlY3QsIGF4aXMpIHtcbiAgICBsZXQgc2VsQXhpcywgY3Jvc3NSZWN0YW5nbGVcbiAgICBpZiAoYXhpcykge1xuICAgICAgc2VsQXhpcyA9IGF4aXNcbiAgICB9IGVsc2Uge1xuICAgICAgY3Jvc3NSZWN0YW5nbGUgPSB0aGlzLmFuZChyZWN0KVxuICAgICAgaWYgKCFjcm9zc1JlY3RhbmdsZSkge1xuICAgICAgICByZXR1cm4gcmVjdFxuICAgICAgfVxuICAgICAgc2VsQXhpcyA9IGNyb3NzUmVjdGFuZ2xlLnNpemUueCA+IGNyb3NzUmVjdGFuZ2xlLnNpemUueSA/ICd5JyA6ICd4J1xuICAgIH1cbiAgICBjb25zdCB0aGlzQ2VudGVyID0gdGhpcy5nZXRDZW50ZXIoKVxuICAgIGNvbnN0IHJlY3RDZW50ZXIgPSByZWN0LmdldENlbnRlcigpXG4gICAgY29uc3Qgc2lnbiA9IHRoaXNDZW50ZXJbc2VsQXhpc10gPiByZWN0Q2VudGVyW3NlbEF4aXNdID8gLTEgOiAxXG4gICAgY29uc3Qgb2Zmc2V0ID0gc2lnbiA+IDAgPyB0aGlzLnBvc2l0aW9uW3NlbEF4aXNdICsgdGhpcy5zaXplW3NlbEF4aXNdIC0gcmVjdC5wb3NpdGlvbltzZWxBeGlzXSA6IHRoaXMucG9zaXRpb25bc2VsQXhpc10gLSAocmVjdC5wb3NpdGlvbltzZWxBeGlzXSArIHJlY3Quc2l6ZVtzZWxBeGlzXSlcbiAgICByZWN0LnBvc2l0aW9uW3NlbEF4aXNdID0gcmVjdC5wb3NpdGlvbltzZWxBeGlzXSArIG9mZnNldFxuICAgIHJldHVybiByZWN0XG4gIH1cblxuICBnZXRTcXVhcmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZS54ICogdGhpcy5zaXplLnlcbiAgfVxuXG4gIHN0eWxlQXBwbHkoZWwpIHtcbiAgICBlbCA9IGVsIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2luZCcpXG4gICAgZWwuc3R5bGUubGVmdCA9IHRoaXMucG9zaXRpb24ueCArICdweCdcbiAgICBlbC5zdHlsZS50b3AgPSB0aGlzLnBvc2l0aW9uLnkgKyAncHgnXG4gICAgZWwuc3R5bGUud2lkdGggPSB0aGlzLnNpemUueCArICdweCdcbiAgICBlbC5zdHlsZS5oZWlnaHQgPSB0aGlzLnNpemUueSArICdweCdcbiAgfVxuXG4gIGdyb3d0aChzaXplKSB7XG4gICAgdGhpcy5zaXplID0gdGhpcy5zaXplLmFkZChzaXplKVxuICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uLmFkZChzaXplLm11bHQoLTAuNSkpXG4gIH1cblxuICBnZXRNaW5TaWRlKCkge1xuICAgIHJldHVybiBNYXRoLm1pbih0aGlzLnNpemUueCwgdGhpcy5zaXplLnkpXG4gIH1cblxuICBzdGF0aWMgZnJvbUVsZW1lbnQoZWxlbWVudCwgcGFyZW50PWVsZW1lbnQucGFyZW50Tm9kZSwgaXNDb250ZW50Qm94U2l6ZT1mYWxzZSwgaXNDb25zaWRlclRyYW5zbGF0ZT1mYWxzZSkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gUG9pbnQuZWxlbWVudE9mZnNldChlbGVtZW50LCBwYXJlbnQsIGlzQ29uc2lkZXJUcmFuc2xhdGUpXG4gICAgY29uc3Qgc2l6ZSA9IFBvaW50LmVsZW1lbnRTaXplKGVsZW1lbnQsIGlzQ29udGVudEJveFNpemUpXG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUocG9zaXRpb24sIHNpemUpXG4gIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBoYXNDbGFzcyhlbGVtZW50LCBjKSB7XG4gIGNvbnN0IHJlID0gbmV3IFJlZ0V4cCgnKF58XFxcXHMpJyArIGMgKyAnKFxcXFxzfCQpJywgJ2cnKVxuICByZXR1cm4gKHJlLnRlc3QoZWxlbWVudC5jbGFzc05hbWUpKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQ2xhc3MoZWxlbWVudCwgYykge1xuICBpZiAoIWhhc0NsYXNzKGVsZW1lbnQsIGMpKSB7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSAoZWxlbWVudC5jbGFzc05hbWUgKyAnICcgKyBjKS5yZXBsYWNlKC9cXHMrL2csICcgJykucmVwbGFjZSgvKF4gfCAkKS9nLCAnJylcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoZWxlbWVudCwgYykge1xuICBjb25zdCByZSA9IG5ldyBSZWdFeHAoJyhefFxcXFxzKScgKyBjICsgJyhcXFxcc3wkKScsICdnJylcbiAgZWxlbWVudC5jbGFzc05hbWUgPSBlbGVtZW50LmNsYXNzTmFtZS5yZXBsYWNlKHJlLCAnJDEnKS5yZXBsYWNlKC9cXHMrL2csICcgJykucmVwbGFjZSgvKF4gfCAkKS9nLCAnJylcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldERlZmF1bHRDb250YWluZXIoZWxlbWVudCkge1xuICBsZXQgY29udGFpbmVyID0gZWxlbWVudC5wYXJlbnROb2RlXG4gIHdoaWxlIChjb250YWluZXIucGFyZW50Tm9kZSAmJiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShjb250YWluZXIpWydwb3NpdGlvbiddID09PSAnc3RhdGljJyAmJiBjb250YWluZXIudGFnTmFtZSAhPT0gJ0JPRFknKSB7XG4gICAgY29udGFpbmVyID0gY29udGFpbmVyLnBhcmVudE5vZGVcbiAgfVxuICByZXR1cm4gY29udGFpbmVyXG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAoY29udGV4dCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dCB8fCB0aGlzXG4gICAgdGhpcy5ldmVudHMgPSB7fVxuXG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5vbikge1xuICAgICAgZm9yIChjb25zdCBbZXZlbnROYW1lLCBmbl0gb2YgT2JqZWN0LmVudHJpZXMob3B0aW9ucy5vbikpIHtcbiAgICAgICAgdGhpcy5vbihldmVudE5hbWUsIGZuKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGVtaXQoZXZlbnROYW1lKSB7XG4gICAgdGhpcy5pbnRlcnJ1cHRlZCA9IGZhbHNlXG4gICAgY29uc3QgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKVxuXG4gICAgaWYgKCF0aGlzLmV2ZW50c1tldmVudE5hbWVdKSByZXR1cm5cblxuICAgIGZvciAoY29uc3QgZnVuYyBvZiB0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICBmdW5jLmFwcGx5KHRoaXMuY29udGV4dCwgYXJncylcbiAgICAgIGlmICh0aGlzLmludGVycnVwdGVkKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGludGVycnVwdCgpIHtcbiAgICB0aGlzLmludGVycnVwdGVkID0gdHJ1ZVxuICB9XG5cbiAgb24oZXZlbnROYW1lLCBmbikge1xuICAgIGlmICghdGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IFtdXG4gICAgfVxuXG4gICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5wdXNoKGZuKVxuICB9XG5cbiAgcHJlcGVuZE9uKGV2ZW50TmFtZSwgZm4pIHtcbiAgICBpZiAoIXRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSBbXVxuICAgIH1cblxuICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0udW5zaGlmdChmbilcbiAgfVxuXG4gIHVuc3Vic2NyaWJlKGV2ZW50TmFtZSwgZm4pIHtcbiAgICBpZiAodGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmV2ZW50c1tldmVudE5hbWVdLmluZGV4T2YoZm4pXG4gICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLnNwbGljZShpbmRleCwgMSlcbiAgICB9XG4gIH1cblxuICByZXNldEVtaXR0ZXIgKCkge1xuICAgIHRoaXMuZXZlbnRzID0ge31cbiAgfVxuXG4gIHJlc2V0T24oZXZlbnROYW1lKSB7XG4gICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IFtdXG4gIH1cbn1cbiIsIi8qIVxuICogZ2V0U3R5bGVQcm9wZXJ0eSB2MS4wLjRcbiAqIG9yaWdpbmFsIGJ5IGthbmdheFxuICogaHR0cDovL3BlcmZlY3Rpb25raWxscy5jb20vZmVhdHVyZS10ZXN0aW5nLWNzcy1wcm9wZXJ0aWVzL1xuICogTUlUIGxpY2Vuc2VcbiAqL1xuXG4vKmpzaGludCBicm93c2VyOiB0cnVlLCBzdHJpY3Q6IHRydWUsIHVuZGVmOiB0cnVlICovXG4vKmdsb2JhbCBkZWZpbmU6IGZhbHNlLCBleHBvcnRzOiBmYWxzZSwgbW9kdWxlOiBmYWxzZSAqL1xuXG4oIGZ1bmN0aW9uKCB3aW5kb3cgKSB7XG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHByZWZpeGVzID0gJ1dlYmtpdCBNb3ogbXMgTXMgTycuc3BsaXQoJyAnKTtcbnZhciBkb2NFbGVtU3R5bGUgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGU7XG5cbmZ1bmN0aW9uIGdldFN0eWxlUHJvcGVydHkoIHByb3BOYW1lICkge1xuICBpZiAoICFwcm9wTmFtZSApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyB0ZXN0IHN0YW5kYXJkIHByb3BlcnR5IGZpcnN0XG4gIGlmICggdHlwZW9mIGRvY0VsZW1TdHlsZVsgcHJvcE5hbWUgXSA9PT0gJ3N0cmluZycgKSB7XG4gICAgcmV0dXJuIHByb3BOYW1lO1xuICB9XG5cbiAgLy8gY2FwaXRhbGl6ZVxuICBwcm9wTmFtZSA9IHByb3BOYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcHJvcE5hbWUuc2xpY2UoMSk7XG5cbiAgLy8gdGVzdCB2ZW5kb3Igc3BlY2lmaWMgcHJvcGVydGllc1xuICB2YXIgcHJlZml4ZWQ7XG4gIGZvciAoIHZhciBpPTAsIGxlbiA9IHByZWZpeGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrICkge1xuICAgIHByZWZpeGVkID0gcHJlZml4ZXNbaV0gKyBwcm9wTmFtZTtcbiAgICBpZiAoIHR5cGVvZiBkb2NFbGVtU3R5bGVbIHByZWZpeGVkIF0gPT09ICdzdHJpbmcnICkge1xuICAgICAgcmV0dXJuIHByZWZpeGVkO1xuICAgIH1cbiAgfVxufVxuXG4vLyB0cmFuc3BvcnRcbmlmICggdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAvLyBBTURcbiAgZGVmaW5lKCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZ2V0U3R5bGVQcm9wZXJ0eTtcbiAgfSk7XG59IGVsc2UgaWYgKCB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgKSB7XG4gIC8vIENvbW1vbkpTIGZvciBDb21wb25lbnRcbiAgbW9kdWxlLmV4cG9ydHMgPSBnZXRTdHlsZVByb3BlcnR5O1xufSBlbHNlIHtcbiAgLy8gYnJvd3NlciBnbG9iYWxcbiAgd2luZG93LmdldFN0eWxlUHJvcGVydHkgPSBnZXRTdHlsZVByb3BlcnR5O1xufVxuXG59KSggd2luZG93ICk7XG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0RGlzdGFuY2UocDEsIHAyKSB7XG4gIGNvbnN0IGR4ID0gcDEueCAtIHAyLngsIGR5ID0gcDEueSAtIHAyLnlcbiAgcmV0dXJuIE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFhEaWZmZXJlbmNlKHAxLCBwMikge1xuICByZXR1cm4gTWF0aC5hYnMocDEueCAtIHAyLngpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRZRGlmZmVyZW5jZShwMSwgcDIpIHtcbiAgcmV0dXJuIE1hdGguYWJzKHAxLnkgLSBwMi55KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtZWRTcGFjZURpc3RhbmNlRmFjdG9yeShvcHRpb25zKSB7XG4gIHJldHVybiAocDEsIHAyKSA9PiB7XG4gICAgcmV0dXJuIE1hdGguc3FydChcbiAgICAgIE1hdGgucG93KG9wdGlvbnMueCAqIE1hdGguYWJzKHAxLnggLSBwMi54KSwgMikgK1xuICAgICAgTWF0aC5wb3cob3B0aW9ucy55ICogTWF0aC5hYnMocDEueSAtIHAyLnkpLCAyKVxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5kZXhPZk5lYXJlc3RQb2ludChhcnIsIHZhbCwgcmFkaXVzLCBnZXREaXN0YW5jZUZ1bmM9Z2V0RGlzdGFuY2UpIHtcbiAgbGV0IHNpemUsIGluZGV4ID0gMCwgaSwgdGVtcFxuICBpZiAoYXJyLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAtMVxuICB9XG4gIHNpemUgPSBnZXREaXN0YW5jZUZ1bmMoYXJyWzBdLCB2YWwpXG4gIGZvciAoaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICB0ZW1wID0gZ2V0RGlzdGFuY2VGdW5jKGFycltpXSwgdmFsKVxuICAgIGlmICh0ZW1wIDwgc2l6ZSkge1xuICAgICAgc2l6ZSA9IHRlbXBcbiAgICAgIGluZGV4ID0gaVxuICAgIH1cbiAgfVxuICBpZiAocmFkaXVzID49IDAgJiYgc2l6ZSA+IHJhZGl1cykge1xuICAgIHJldHVybiAtMVxuICB9XG4gIHJldHVybiBpbmRleFxufVxuIiwiaW1wb3J0IFBvaW50IGZyb20gJy4vcG9pbnQnXG5pbXBvcnQgeyBnZXREaXN0YW5jZSB9IGZyb20gJy4vZGlzdGFuY2VzJ1xuXG5leHBvcnQgZnVuY3Rpb24gY2xhbXAobWluLCBtYXgsIHZhbCkge1xuICByZXR1cm4gTWF0aC5tYXgobWluLCBNYXRoLm1pbihtYXgsIHZhbCkpXG59XG5cbi8vUmV0dXJuIGNyb3NzaW5nIHBvaW50IG9mIHR3byBsaW5lc1xuZXhwb3J0IGZ1bmN0aW9uIGRpcmVjdENyb3NzaW5nKEwxUDEsIEwxUDIsIEwyUDEsIEwyUDIpIHtcbiAgbGV0IHRlbXAsIGsxLCBrMiwgYjEsIGIyLCB4LCB5XG4gIGlmIChMMlAxLnggPT09IEwyUDIueCkge1xuICAgIHRlbXAgPSBMMlAxXG4gICAgTDJQMSA9IEwxUDFcbiAgICBMMVAxID0gdGVtcFxuICAgIHRlbXAgPSBMMlAyXG4gICAgTDJQMiA9IEwxUDJcbiAgICBMMVAyID0gdGVtcFxuICB9XG4gIGlmIChMMVAxLnggPT09IEwxUDIueCkge1xuICAgIGsyID0gKEwyUDIueSAtIEwyUDEueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgIGIyID0gKEwyUDIueCAqIEwyUDEueSAtIEwyUDEueCAqIEwyUDIueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgIHggPSBMMVAxLnhcbiAgICB5ID0geCAqIGsyICsgYjJcbiAgICByZXR1cm4gbmV3IFBvaW50KHgsIHkpXG4gIH0gZWxzZSB7XG4gICAgazEgPSAoTDFQMi55IC0gTDFQMS55KSAvIChMMVAyLnggLSBMMVAxLngpXG4gICAgYjEgPSAoTDFQMi54ICogTDFQMS55IC0gTDFQMS54ICogTDFQMi55KSAvIChMMVAyLnggLSBMMVAxLngpXG4gICAgazIgPSAoTDJQMi55IC0gTDJQMS55KSAvIChMMlAyLnggLSBMMlAxLngpXG4gICAgYjIgPSAoTDJQMi54ICogTDJQMS55IC0gTDJQMS54ICogTDJQMi55KSAvIChMMlAyLnggLSBMMlAxLngpXG4gICAgeCA9IChiMSAtIGIyKSAvIChrMiAtIGsxKVxuICAgIHkgPSB4ICogazEgKyBiMVxuICAgIHJldHVybiBuZXcgUG9pbnQoeCwgeSlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRUb1NlZ21lbnQoTFAxLCBMUDIsIFApIHtcbiAgbGV0IHgsIHlcbiAgeCA9IGNsYW1wKE1hdGgubWluKExQMS54LCBMUDIueCksIE1hdGgubWF4KExQMS54LCBMUDIueCksIFAueClcbiAgaWYgKHggIT09IFAueCkge1xuICAgIHkgPSAoeCA9PT0gTFAxLngpID8gTFAxLnkgOiBMUDIueVxuICAgIFAgPSBuZXcgUG9pbnQoeCwgeSlcbiAgfVxuXG4gIHkgPSBjbGFtcChNYXRoLm1pbihMUDEueSwgTFAyLnkpLCBNYXRoLm1heChMUDEueSwgTFAyLnkpLCBQLnkpXG4gIGlmICh5ICE9PSBQLnkpIHtcbiAgICB4ID0gKHkgPT09IExQMS55KSA/IExQMS54IDogTFAyLnhcbiAgICBQID0gbmV3IFBvaW50KHgsIHkpXG4gIH1cblxuICByZXR1cm4gUFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRUb0xpbmUoQSwgQiwgUCkge1xuICBjb25zdCBBUCA9IG5ldyBQb2ludChQLnggLSBBLngsIFAueSAtIEEueSksXG4gICAgQUIgPSBuZXcgUG9pbnQoQi54IC0gQS54LCBCLnkgLSBBLnkpLFxuICAgIGFiMiA9IEFCLnggKiBBQi54ICsgQUIueSAqIEFCLnksXG4gICAgYXBfYWIgPSBBUC54ICogQUIueCArIEFQLnkgKiBBQi55LFxuICAgIHQgPSBhcF9hYiAvIGFiMlxuICByZXR1cm4gbmV3IFBvaW50KEEueCArIEFCLnggKiB0LCBBLnkgKyBBQi55ICogdClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBvaW50T25MaW5lKExQMSwgTFAyLCBwZXJjZW50KSB7XG4gIGNvbnN0IGR4ID0gTFAyLnggLSBMUDEueCwgZHkgPSBMUDIueSAtIExQMS55XG4gIHJldHVybiBuZXcgUG9pbnQoTFAxLnggKyBwZXJjZW50ICogZHgsIExQMS55ICsgcGVyY2VudCAqIGR5KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9pbnRPbkxpbmVCeUxlbmdodChMUDEsIExQMiwgbGVuZ2h0KSB7XG4gIGNvbnN0IGR4ID0gTFAyLnggLSBMUDEueFxuICBjb25zdCBkeSA9IExQMi55IC0gTFAxLnlcbiAgY29uc3QgcGVyY2VudCA9IGxlbmdodCAvIGdldERpc3RhbmNlKExQMSwgTFAyKVxuICByZXR1cm4gbmV3IFBvaW50KExQMS54ICsgcGVyY2VudCAqIGR4LCBMUDEueSArIHBlcmNlbnQgKiBkeSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFBvaW50VG9Cb3VuZFBvaW50cyhib3VuZHBvaW50cywgcG9pbnQsIGlzUmlnaHQpIHtcbiAgY29uc3QgcmVzdWx0ID0gYm91bmRwb2ludHMuZmlsdGVyKChiUG9pbnQpID0+IHtcbiAgICByZXR1cm4gYlBvaW50LnkgPiBwb2ludC55IHx8IChpc1JpZ2h0ID8gYlBvaW50LnggPCBwb2ludC54IDogYlBvaW50LnggPiBwb2ludC54KVxuICB9KVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzdWx0Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHBvaW50LnkgPCByZXN1bHRbaV0ueSkge1xuICAgICAgcmVzdWx0LnNwbGljZShpLCAwLCBwb2ludClcbiAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG4gIH1cbiAgcmVzdWx0LnB1c2gocG9pbnQpXG4gIHJldHVybiByZXN1bHRcbn1cbiIsImltcG9ydCBQb2ludCBmcm9tICcuL3BvaW50J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QW5nbGVEaWZmKGFscGhhLCBiZXRhKSB7XG4gIGNvbnN0IG1pbkFuZ2xlID0gTWF0aC5taW4oYWxwaGEsIGJldGEpXG4gIGNvbnN0IG1heEFuZ2xlID0gIE1hdGgubWF4KGFscGhhLCBiZXRhKVxuICByZXR1cm4gTWF0aC5taW4obWF4QW5nbGUgLSBtaW5BbmdsZSwgbWluQW5nbGUgKyBNYXRoLlBJKjIgLSBtYXhBbmdsZSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFuZ2xlKHAxLCBwMikge1xuICBjb25zdCBkaWZmID0gcDIuc3ViKHAxKVxuICByZXR1cm4gbm9ybWFsaXplQW5nbGUoTWF0aC5hdGFuMihkaWZmLnksIGRpZmYueCkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b1JhZGlhbihhbmdsZSkge1xuICByZXR1cm4gKChhbmdsZSAlIDM2MCkgKiBNYXRoLlBJIC8gMTgwKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9EZWdyZWUoYW5nbGUpIHtcbiAgcmV0dXJuIChhbmdsZSAqIDE4MCAvIE1hdGguUEkpICUgMzYwXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZEFuZ2xlKG1pbiwgbWF4LCB2YWwpIHtcbiAgbGV0IGRtaW4sIGRtYXhcbiAgaWYgKG1pbiA8IG1heCAmJiB2YWwgPiBtaW4gJiYgdmFsIDwgbWF4KSB7XG4gICAgcmV0dXJuIHZhbFxuICB9IGVsc2UgaWYgKG1heCA8IG1pbiAmJiAodmFsIDwgbWF4IHx8IHZhbCA+IG1pbikpIHtcbiAgICByZXR1cm4gdmFsXG4gIH0gZWxzZSB7XG4gICAgZG1pbiA9IGdldEFuZ2xlRGlmZihtaW4sIHZhbClcbiAgICBkbWF4ID0gZ2V0QW5nbGVEaWZmKG1heCwgdmFsKVxuICAgIGlmIChkbWluIDwgZG1heCkge1xuICAgICAgcmV0dXJuIG1pblxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbWF4XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROZWFyZXN0QW5nbGUoYXJyLCBhbmdsZSkge1xuICBsZXQgaSwgdGVtcCwgZGlmZiA9IE1hdGguUEkgKiAyLCB2YWx1ZVxuICBmb3IgKGkgPSAwOyBpIDwgYXJyLmxlbmd0aDtpKyspIHtcbiAgICB0ZW1wID0gZ2V0QW5nbGVEaWZmKGFycltpXSwgYW5nbGUpXG4gICAgaWYgKGRpZmYgPCB0ZW1wKSB7XG4gICAgICBkaWZmID0gdGVtcFxuICAgICAgdmFsdWUgPSBhcnJbaV1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHZhbHVlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVBbmdsZSh2YWwpIHtcbiAgd2hpbGUgKHZhbCA8IDApIHtcbiAgICB2YWwgKz0gMiAqIE1hdGguUElcbiAgfVxuICB3aGlsZSAodmFsID4gMiAqIE1hdGguUEkpIHtcbiAgICB2YWwgLT0gMiAqIE1hdGguUElcbiAgfVxuICByZXR1cm4gdmFsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oYW5nbGUsIGxlbmd0aCwgY2VudGVyKSB7XG4gIGNlbnRlciA9IGNlbnRlciB8fCBuZXcgUG9pbnQoMCwgMClcbiAgcmV0dXJuIGNlbnRlci5hZGQobmV3IFBvaW50KGxlbmd0aCAqIE1hdGguY29zKGFuZ2xlKSwgbGVuZ3RoICogTWF0aC5zaW4oYW5nbGUpKSlcbn1cbiIsImltcG9ydCBQb2ludCBmcm9tICcuL2dlb21ldHJ5L3BvaW50J1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tICcuL2dlb21ldHJ5L3JlY3RhbmdsZSdcbmltcG9ydCB7XG4gIGdldFBvaW50T25MaW5lQnlMZW5naHQsXG4gIGRpcmVjdENyb3NzaW5nLFxuICBib3VuZFRvTGluZVxufSBmcm9tICcuL2dlb21ldHJ5L2JvdW5kcydcblxuaW1wb3J0IHtcbiAgZ2V0QW5nbGUsXG4gIG5vcm1hbGl6ZUFuZ2xlLFxuICBib3VuZEFuZ2xlLFxuICBnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW1cbn0gZnJvbSAnLi9nZW9tZXRyeS9hbmdsZXMnXG5cbmV4cG9ydCBjbGFzcyBCb3VuZCB7XG4gIGNvbnN0cnVjdG9yICgpIHt9XG5cbiAgYm91bmQocG9pbnQsIF9zaXplKSB7XG4gICAgcmV0dXJuIHBvaW50XG4gIH1cblxuICByZWZyZXNoICgpIHt9XG5cbiAgc3RhdGljIGJvdW5kaW5nKCkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IHRoaXMoLi4uYXJndW1lbnRzKVxuICAgIHJldHVybiBpbnN0YW5jZS5ib3VuZC5iaW5kKGluc3RhbmNlKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvUmVjdGFuZ2xlIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3RvcihyZWN0YW5nbGUpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5yZWN0YW5nbGUgPSByZWN0YW5nbGVcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgY2FsY1BvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIGNvbnN0IHJlY3RQMiA9IHRoaXMucmVjdGFuZ2xlLmdldFAzKClcblxuICAgIGlmICh0aGlzLnJlY3RhbmdsZS5wb3NpdGlvbi54ID4gY2FsY1BvaW50LngpIHtcbiAgICAgIChjYWxjUG9pbnQueCA9IHRoaXMucmVjdGFuZ2xlLnBvc2l0aW9uLngpXG4gICAgfVxuICAgIGlmICh0aGlzLnJlY3RhbmdsZS5wb3NpdGlvbi55ID4gY2FsY1BvaW50LnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gdGhpcy5yZWN0YW5nbGUucG9zaXRpb24ueVxuICAgIH1cbiAgICBpZiAocmVjdFAyLnggPCBjYWxjUG9pbnQueCArIHNpemUueCkge1xuICAgICAgY2FsY1BvaW50LnggPSByZWN0UDIueCAtIHNpemUueFxuICAgIH1cbiAgICBpZiAocmVjdFAyLnkgPCBjYWxjUG9pbnQueSArIHNpemUueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSByZWN0UDIueSAtIHNpemUueVxuICAgIH1cblxuICAgIHJldHVybiBjYWxjUG9pbnRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb0VsZW1lbnQgZXh0ZW5kcyBCb3VuZFRvUmVjdGFuZ2xlIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29udGFpbmVyKSB7XG4gICAgc3VwZXIoUmVjdGFuZ2xlLmZyb21FbGVtZW50KGVsZW1lbnQsIGNvbnRhaW5lcikpXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyXG4gIH1cblxuICByZWZyZXNoICgpIHtcbiAgICB0aGlzLnJlY3RhbmdsZSA9IFJlY3RhbmdsZS5mcm9tRWxlbWVudCh0aGlzLmVsZW1lbnQsIHRoaXMuY29udGFpbmVyKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvTGluZVggZXh0ZW5kcyBCb3VuZCB7XG4gIGNvbnN0cnVjdG9yKHgsIHN0YXJ0WSwgZW5kWSkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnggPSB4XG4gICAgdGhpcy5zdGFydFkgPSBzdGFydFlcbiAgICB0aGlzLmVuZFkgPSBlbmRZXG4gIH1cblxuICBib3VuZChwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IGNhbGNQb2ludCA9IHBvaW50LmNsb25lKClcblxuICAgIGNhbGNQb2ludC54ID0gdGhpcy54XG4gICAgaWYgKHRoaXMuc3RhcnRZID4gY2FsY1BvaW50LnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gdGhpcy5zdGFydFlcbiAgICB9XG4gICAgaWYgKHRoaXMuZW5kWSA8IGNhbGNQb2ludC55ICsgc2l6ZS55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHRoaXMuZW5kWSAtIHNpemUueVxuICAgIH1cblxuICAgIHJldHVybiBjYWxjUG9pbnRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb0xpbmVZIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3Rvcih5LCBzdGFydFgsIGVuZFgpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy55ID0geVxuICAgIHRoaXMuc3RhcnRYID0gc3RhcnRYXG4gICAgdGhpcy5lbmRYID0gZW5kWFxuICB9XG5cbiAgYm91bmQocG9pbnQsIHNpemUpIHtcbiAgICBjb25zdCBjYWxjUG9pbnQgPSBwb2ludC5jbG9uZSgpXG4gICAgY2FsY1BvaW50LnkgPSB0aGlzLnlcbiAgICBpZiAodGhpcy5zdGFydFggPiBjYWxjUG9pbnQueCkge1xuICAgICAgY2FsY1BvaW50LnggPSB0aGlzLnN0YXJ0WFxuICAgIH1cbiAgICBpZiAodGhpcy5lbmRYIDwgY2FsY1BvaW50LnggKyBzaXplLngpIHtcbiAgICAgIGNhbGNQb2ludC54ID0gdGhpcy5lbmRYIC0gc2l6ZS54XG4gICAgfVxuICAgIHJldHVybiBjYWxjUG9pbnRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb0xpbmUgZXh0ZW5kcyBCb3VuZCB7XG4gIGNvbnN0cnVjdG9yKHN0YXJ0UG9pbnQsIGVuZFBvaW50KSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuc3RhcnRQb2ludCA9IHN0YXJ0UG9pbnRcbiAgICB0aGlzLmVuZFBvaW50ID0gZW5kUG9pbnRcbiAgICBjb25zdCBhbHBoYSA9IE1hdGguYXRhbjIoZW5kUG9pbnQueSAtIHN0YXJ0UG9pbnQueSwgZW5kUG9pbnQueCAtIHN0YXJ0UG9pbnQueClcbiAgICBjb25zdCBiZXRhID0gYWxwaGEgKyBNYXRoLlBJIC8gMlxuICAgIHRoaXMuc29tZUsgPSAxMFxuICAgIHRoaXMuY29zQmV0YSA9IE1hdGguY29zKGJldGEpXG4gICAgdGhpcy5zaW5CZXRhID0gTWF0aC5zaW4oYmV0YSlcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgcG9pbnQyID0gbmV3IFBvaW50KFxuICAgICAgcG9pbnQueCArIHRoaXMuc29tZUsgKiB0aGlzLmNvc0JldGEsXG4gICAgICBwb2ludC55ICsgdGhpcy5zb21lSyAqIHRoaXMuc2luQmV0YVxuICAgIClcblxuICAgIGNvbnN0IG5ld0VuZFBvaW50ID0gZ2V0UG9pbnRPbkxpbmVCeUxlbmdodCh0aGlzLmVuZFBvaW50LCB0aGlzLnN0YXJ0UG9pbnQsIHNpemUueClcbiAgICBjb25zdCBwb2ludENyb3NzaW5nID0gZGlyZWN0Q3Jvc3NpbmcodGhpcy5zdGFydFBvaW50LCB0aGlzLmVuZFBvaW50LCBwb2ludCwgcG9pbnQyKVxuXG4gICAgcmV0dXJuIGJvdW5kVG9MaW5lKHRoaXMuc3RhcnRQb2ludCwgbmV3RW5kUG9pbnQsIHBvaW50Q3Jvc3NpbmcpXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9DaXJjbGUgZXh0ZW5kcyBCb3VuZCB7XG4gIGNvbnN0cnVjdG9yKGNlbnRlciwgcmFkaXVzKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuY2VudGVyID0gY2VudGVyXG4gICAgdGhpcy5yYWRpdXMgPSByYWRpdXNcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBfc2l6ZSkge1xuICAgIHJldHVybiBnZXRQb2ludE9uTGluZUJ5TGVuZ2h0KHRoaXMuY2VudGVyLCBwb2ludCwgdGhpcy5yYWRpdXMpXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9BcmMgZXh0ZW5kcyBCb3VuZFRvQ2lyY2xlIHtcbiAgY29uc3RydWN0b3IoY2VudGVyLCByYWRpdXMsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlKSB7XG4gICAgc3VwZXIoY2VudGVyLCByYWRpdXMpXG4gICAgdGhpcy5fc3RhcnRBbmdsZSA9IHN0YXJ0QW5nbGVcbiAgICB0aGlzLl9lbmRBbmdsZSA9IGVuZEFuZ2xlXG4gIH1cblxuICBzdGFydEFuZ2xlKCkge1xuICAgIHJldHVybiB0eXBlb2YgdGhpcy5fc3RhcnRBbmdsZSA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMuX3N0YXJ0QW5nbGUoKSA6IHRoaXMuX3N0YXJ0QW5nbGVcbiAgfVxuXG4gIGVuZEFuZ2xlKCkge1xuICAgIHJldHVybiB0eXBlb2YgdGhpcy5fZW5kQW5nbGUgPT09ICdmdW5jdGlvbicgPyB0aGlzLl9lbmRBbmdsZSgpIDogdGhpcy5fZW5kQW5nbGVcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBfc2l6ZSkge1xuICAgIGxldCBhbmdsZSA9IGdldEFuZ2xlKHRoaXMuY2VudGVyLCBwb2ludClcbiAgICBhbmdsZSA9IG5vcm1hbGl6ZUFuZ2xlKGFuZ2xlKVxuICAgIGFuZ2xlID0gYm91bmRBbmdsZSh0aGlzLnN0YXJ0QW5nbGUoKSwgdGhpcy5lbmRBbmdsZSgpLCBhbmdsZSlcbiAgICByZXR1cm4gZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKGFuZ2xlLCB0aGlzLnJhZGl1cywgdGhpcy5jZW50ZXIpXG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGFycmF5LCB2YWwpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChhcnJheVtpXSA9PT0gdmFsKSB7XG4gICAgICBhcnJheS5zcGxpY2UoaSwgMSlcbiAgICAgIGktLVxuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyYXlcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJhbmdlKHN0YXJ0LCBzdG9wLCBzdGVwKSB7XG4gIGNvbnN0IHJlc3VsdCA9IFtdXG4gIGlmICh0eXBlb2Ygc3RvcCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBzdG9wID0gc3RhcnRcbiAgICBzdGFydCA9IDBcbiAgfVxuICBpZiAodHlwZW9mIHN0ZXAgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgc3RlcCA9IDFcbiAgfVxuICBpZiAoKHN0ZXAgPiAwICYmIHN0YXJ0ID49IHN0b3ApIHx8IChzdGVwIDwgMCAmJiBzdGFydCA8PSBzdG9wKSkge1xuICAgIHJldHVybiBbXVxuICB9XG4gIGZvciAobGV0IGkgPSBzdGFydDsgc3RlcCA+IDAgPyBpIDwgc3RvcCA6IGkgPiBzdG9wOyBpICs9IHN0ZXApIHtcbiAgICByZXN1bHQucHVzaChpKVxuICB9XG4gIHJldHVybiByZXN1bHRcbn1cbiIsImltcG9ydCBQb2ludCBmcm9tICcuL2dlb21ldHJ5L3BvaW50J1xuaW1wb3J0IHsgYWRkUG9pbnRUb0JvdW5kUG9pbnRzIH0gZnJvbSAnLi9nZW9tZXRyeS9ib3VuZHMnXG5cbmltcG9ydCB7XG4gIGluZGV4T2ZOZWFyZXN0UG9pbnQsXG4gIGdldERpc3RhbmNlXG59IGZyb20gJy4vZ2VvbWV0cnkvZGlzdGFuY2VzJ1xuXG5jbGFzcyBCYXNpY1N0cmF0ZWd5IHtcbiAgY29uc3RydWN0b3IocmVjdGFuZ2xlLCBvcHRpb25zPXt9KSB7XG4gICAgdGhpcy5yZWN0YW5nbGUgPSByZWN0YW5nbGVcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zXG4gIH1cblxuICBnZXQgYm91bmRSZWN0ICgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMucmVjdGFuZ2xlID09PSAnZnVuY3Rpb24nID8gdGhpcy5yZWN0YW5nbGUoKSA6IHRoaXMucmVjdGFuZ2xlXG4gIH1cbn1cblxuY2xhc3MgTm90Q3Jvc3NpbmdTdHJhdGVneSBleHRlbmRzIEJhc2ljU3RyYXRlZ3kge1xuICBwb3NpdGlvbmluZyAocmVjdGFuZ2xlTGlzdCwgaW5kZXhlc09mTmV3cykge1xuICAgIGNvbnN0IHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMgPSByZWN0YW5nbGVMaXN0LnJlZHVjZSgoaW5kZXhlcywgX3JlY3QsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoaW5kZXhlc09mTmV3cy5pbmRleE9mKGluZGV4KSA9PT0gLTEpIHtcbiAgICAgICAgaW5kZXhlcy5wdXNoKGluZGV4KVxuICAgICAgfVxuICAgICAgcmV0dXJuIGluZGV4ZXNcbiAgICB9LCBbXSlcblxuICAgIGluZGV4ZXNPZk5ld3MuZm9yRWFjaCgoaW5kZXgpID0+IHtcbiAgICAgIGxldCByZWN0ID0gcmVjdGFuZ2xlTGlzdFtpbmRleF1cbiAgICAgIGxldCByZW1vdmFibGUgPSBmYWxzZVxuXG4gICAgICBzdGF0aWNSZWN0YW5nbGVJbmRleGVzLmZvckVhY2goKGluZGV4T2ZTdGF0aWMpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhdGljUmVjdCA9IHJlY3RhbmdsZUxpc3RbaW5kZXhPZlN0YXRpY11cbiAgICAgICAgcmVjdCA9IHN0YXRpY1JlY3QubW92ZVRvQm91bmQocmVjdClcbiAgICAgIH0pXG5cbiAgICAgIHJlbW92YWJsZSA9IHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMuc29tZSgoaW5kZXhPZlN0YXRpYykgPT4ge1xuICAgICAgICBjb25zdCBzdGF0aWNSZWN0ID0gcmVjdGFuZ2xlTGlzdFtpbmRleE9mU3RhdGljXVxuICAgICAgICByZXR1cm4gICEhc3RhdGljUmVjdC5hbmQocmVjdClcbiAgICAgIH0pIHx8IHJlY3QuYW5kKHRoaXMuYm91bmRSZWN0KS5nZXRTcXVhcmUoKSAhPT0gcmVjdC5nZXRTcXVhcmUoKVxuXG4gICAgICBpZiAocmVtb3ZhYmxlKSB7XG4gICAgICAgIHJlY3QucmVtb3ZhYmxlID0gdHJ1ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdGljUmVjdGFuZ2xlSW5kZXhlcy5wdXNoKGluZGV4KVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHJlY3RhbmdsZUxpc3RcbiAgfVxuXG4gIHNvcnRpbmcob2RsRHJhZ2dhYmxlc0xpc3QsIG5ld0RyYWdnYWJsZXMsIGluZGV4T2ZOZXdzKSB7XG4gICAgY29uc3QgZHJhZ2dhYmxlcyA9IG9kbERyYWdnYWJsZXNMaXN0LmNvbmNhdChuZXdEcmFnZ2FibGVzKVxuICAgIG5ld0RyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBpbmRleE9mTmV3cy5wdXNoKGRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpKVxuICAgIH0pXG4gICAgcmV0dXJuIGRyYWdnYWJsZXNcbiAgfVxufVxuXG5jbGFzcyBGbG9hdExlZnRTdHJhdGVneSBleHRlbmRzIEJhc2ljU3RyYXRlZ3kge1xuICBjb25zdHJ1Y3RvcihyZWN0YW5nbGUsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcihyZWN0YW5nbGUsIG9wdGlvbnMpXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICByZW1vdmFibGU6IHRydWVcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGhpcy5yYWRpdXMgPSBvcHRpb25zLnJhZGl1cyB8fCA4MFxuXG4gICAgdGhpcy5wYWRkaW5nVG9wTGVmdCA9IG9wdGlvbnMucGFkZGluZ1RvcExlZnQgfHwgbmV3IFBvaW50KDAsIDApXG4gICAgdGhpcy5wYWRkaW5nQm90dG9tUmlnaHQgPSBvcHRpb25zLnBhZGRpbmdCb3R0b21SaWdodCB8fCBuZXcgUG9pbnQoMCwgMClcbiAgICB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyA9IG9wdGlvbnMueUdhcEJldHdlZW5EcmFnZ2FibGVzIHx8IDBcblxuICAgIHRoaXMuZ2V0RGlzdGFuY2UgPSBvcHRpb25zLmdldERpc3RhbmNlIHx8IGdldERpc3RhbmNlXG4gICAgdGhpcy5nZXRQb3NpdGlvbiA9IG9wdGlvbnMuZ2V0UG9zaXRpb24gfHwgKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5wb3NpdGlvbilcbiAgfVxuXG4gIHBvc2l0aW9uaW5nKHJlY3RhbmdsZUxpc3QsIF9pbmRleGVzT2ZOZXdzKSB7XG4gICAgY29uc3QgYm91bmRSZWN0ID0gdGhpcy5ib3VuZFJlY3RcbiAgICBjb25zdCByZWN0UDIgPSBib3VuZFJlY3QuZ2V0UDIoKVxuICAgIGxldCBib3VuZGFyeVBvaW50cyA9IFtib3VuZFJlY3QucG9zaXRpb25dXG5cbiAgICByZWN0YW5nbGVMaXN0LmZvckVhY2goKHJlY3QsIHJlY3RJbmRleCkgPT4ge1xuICAgICAgbGV0IHBvc2l0aW9uLCBpc1ZhbGlkID0gZmFsc2VcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm91bmRhcnlQb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcG9zaXRpb24gPSBuZXcgUG9pbnQoXG4gICAgICAgICAgYm91bmRhcnlQb2ludHNbaV0ueCArIHRoaXMucGFkZGluZ1RvcExlZnQueCxcbiAgICAgICAgICBpID4gMCA/IChib3VuZGFyeVBvaW50c1tpIC0gMV0ueSArIHRoaXMueUdhcEJldHdlZW5EcmFnZ2FibGVzKSA6IChib3VuZFJlY3QucG9zaXRpb24ueSArIHRoaXMucGFkZGluZ1RvcExlZnQueSlcbiAgICAgICAgKVxuXG4gICAgICAgIGlzVmFsaWQgPSAocG9zaXRpb24ueCArIHJlY3Quc2l6ZS54IDwgcmVjdFAyLngpXG5cbiAgICAgICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICBwb3NpdGlvbiA9IG5ldyBQb2ludChcbiAgICAgICAgICBib3VuZFJlY3QucG9zaXRpb24ueCArIHRoaXMucGFkZGluZ1RvcExlZnQueCxcbiAgICAgICAgICBib3VuZGFyeVBvaW50c1tib3VuZGFyeVBvaW50cy5sZW5ndGggLSAxXS55ICsgKHJlY3RJbmRleCA+IDAgPyB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyA6IHRoaXMucGFkZGluZ1RvcExlZnQueSlcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICByZWN0LnBvc2l0aW9uID0gcG9zaXRpb25cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucmVtb3ZhYmxlICYmIHJlY3QuZ2V0UDMoKS55ID4gYm91bmRSZWN0LmdldFAzKCkueSkge1xuICAgICAgICByZWN0LnJlbW92YWJsZSA9IHRydWVcbiAgICAgIH1cblxuICAgICAgYm91bmRhcnlQb2ludHMgPSBhZGRQb2ludFRvQm91bmRQb2ludHMoYm91bmRhcnlQb2ludHMsIHJlY3QuZ2V0UDMoKS5hZGQodGhpcy5wYWRkaW5nQm90dG9tUmlnaHQpKVxuICAgIH0pXG4gICAgcmV0dXJuIHJlY3RhbmdsZUxpc3RcbiAgfVxuXG4gIHNvcnRpbmcob2RsRHJhZ2dhYmxlc0xpc3QsIG5ld0RyYWdnYWJsZXMsIGluZGV4T2ZOZXdzKSB7XG4gICAgY29uc3QgbmV3TGlzdCA9IG9kbERyYWdnYWJsZXNMaXN0LmNvbmNhdCgpXG4gICAgY29uc3QgbGlzdE9sZFBvc2l0aW9uID0gb2RsRHJhZ2dhYmxlc0xpc3QubWFwKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5nZXRQb3NpdGlvbigpKVxuICAgIG5ld0RyYWdnYWJsZXMuZm9yRWFjaCgobmV3RHJhZ2dhYmxlKSA9PiB7XG4gICAgICBsZXQgaW5kZXggPSBpbmRleE9mTmVhcmVzdFBvaW50KGxpc3RPbGRQb3NpdGlvbiwgdGhpcy5nZXRQb3NpdGlvbihuZXdEcmFnZ2FibGUpLCB0aGlzLnJhZGl1cywgdGhpcy5nZXREaXN0YW5jZSlcbiAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgaW5kZXggPSBuZXdMaXN0Lmxlbmd0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5kZXggPSBuZXdMaXN0LmluZGV4T2Yob2RsRHJhZ2dhYmxlc0xpc3RbaW5kZXhdKVxuICAgICAgfVxuICAgICAgbmV3TGlzdC5zcGxpY2UoaW5kZXgsIDAsIG5ld0RyYWdnYWJsZSlcbiAgICB9KVxuICAgIG5ld0RyYWdnYWJsZXMuZm9yRWFjaCgobmV3RHJhZ2dhYmxlKSA9PiB7XG4gICAgICBpbmRleE9mTmV3cy5wdXNoKG5ld0xpc3QuaW5kZXhPZihuZXdEcmFnZ2FibGUpKVxuICAgIH0pXG4gICAgcmV0dXJuIG5ld0xpc3RcbiAgfVxufVxuXG5jbGFzcyBGbG9hdFJpZ2h0U3RyYXRlZ3kgZXh0ZW5kcyBGbG9hdExlZnRTdHJhdGVneSB7XG4gIGNvbnN0cnVjdG9yKHJlY3RhbmdsZSwgb3B0aW9ucz17fSkge1xuICAgIHN1cGVyKHJlY3RhbmdsZSwgb3B0aW9ucylcblxuICAgIHRoaXMucGFkZGluZ1RvcFJpZ2h0ID0gb3B0aW9ucy5wYWRkaW5nVG9wUmlnaHQgfHwgbmV3IFBvaW50KDUsIDUpXG4gICAgdGhpcy5wYWRkaW5nQm90dG9tTGVmdCA9IG9wdGlvbnMucGFkZGluZ0JvdHRvbUxlZnQgfHwgbmV3IFBvaW50KDAsIDApXG4gICAgdGhpcy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgPSBvcHRpb25zLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyB8fCAwXG5cbiAgICB0aGlzLnBhZGRpbmdCb3R0b21OZWdMZWZ0ID0gbmV3IFBvaW50KC10aGlzLnBhZGRpbmdCb3R0b21MZWZ0LngsIHRoaXMucGFkZGluZ0JvdHRvbUxlZnQueSlcbiAgfVxuXG4gIHBvc2l0aW9uaW5nKHJlY3RhbmdsZUxpc3QsIF9pbmRleGVzT2ZOZXdzKSB7XG4gICAgY29uc3QgYm91bmRSZWN0ID0gdGhpcy5ib3VuZFJlY3RcbiAgICBsZXQgYm91bmRhcnlQb2ludHMgPSBbYm91bmRSZWN0LmdldFAyKCldXG5cbiAgICByZWN0YW5nbGVMaXN0LmZvckVhY2goKHJlY3QsIHJlY3RJbmRleCkgPT4ge1xuICAgICAgbGV0IHBvc2l0aW9uLCBpc1ZhbGlkID0gZmFsc2VcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm91bmRhcnlQb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcG9zaXRpb24gPSBuZXcgUG9pbnQoXG4gICAgICAgICAgYm91bmRhcnlQb2ludHNbaV0ueCAtIHJlY3Quc2l6ZS54IC0gdGhpcy5wYWRkaW5nVG9wUmlnaHQueCxcbiAgICAgICAgICBpID4gMCA/IChib3VuZGFyeVBvaW50c1tpIC0gMV0ueSArIHRoaXMueUdhcEJldHdlZW5EcmFnZ2FibGVzKSA6IChib3VuZFJlY3QucG9zaXRpb24ueSArIHRoaXMucGFkZGluZ1RvcFJpZ2h0LnkpXG4gICAgICAgIClcblxuICAgICAgICBpc1ZhbGlkID0gKHBvc2l0aW9uLnggPiByZWN0LnBvc2l0aW9uLngpXG4gICAgICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICAgIHBvc2l0aW9uID0gbmV3IFBvaW50KFxuICAgICAgICAgIGJvdW5kUmVjdC5nZXRQMigpLnggIC0gcmVjdC5zaXplLnggLSB0aGlzLnBhZGRpbmdUb3BSaWdodC54LFxuICAgICAgICAgIGJvdW5kYXJ5UG9pbnRzW2JvdW5kYXJ5UG9pbnRzLmxlbmd0aCAtIDFdLnkgKyAocmVjdEluZGV4ID4gMCA/IHRoaXMueUdhcEJldHdlZW5EcmFnZ2FibGVzIDogdGhpcy5wYWRkaW5nVG9wUmlnaHQueSlcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgcmVjdC5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnJlbW92YWJsZSAmJiByZWN0LmdldFA0KCkueSA+IGJvdW5kUmVjdC5nZXRQNCgpLnkpIHtcbiAgICAgICAgcmVjdC5yZW1vdmFibGUgPSB0cnVlXG4gICAgICB9XG4gICAgICBib3VuZGFyeVBvaW50cyA9IGFkZFBvaW50VG9Cb3VuZFBvaW50cyhib3VuZGFyeVBvaW50cywgcmVjdC5nZXRQNCgpLmFkZCh0aGlzLnBhZGRpbmdCb3R0b21OZWdMZWZ0KSwgdHJ1ZSlcbiAgICB9KVxuICAgIHJldHVybiByZWN0YW5nbGVMaXN0XG4gIH1cbn1cblxuZXhwb3J0IHsgTm90Q3Jvc3NpbmdTdHJhdGVneSwgRmxvYXRMZWZ0U3RyYXRlZ3ksIEZsb2F0UmlnaHRTdHJhdGVneSB9XG4iLCJpbXBvcnQgcmFuZ2UgZnJvbSAnLi91dGlscy9yYW5nZS5qcydcbmltcG9ydCByZW1vdmVJdGVtIGZyb20gJy4vdXRpbHMvcmVtb3ZlLWFycmF5LWl0ZW0nXG5pbXBvcnQgZ2V0RGVmYXVsdENvbnRhaW5lciBmcm9tICcuL3V0aWxzL2dldC1kZWZhdWx0LWNvbnRhaW5lcidcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudEVtaXR0ZXInXG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gJy4vZ2VvbWV0cnkvcmVjdGFuZ2xlJ1xuaW1wb3J0IHsgdHJhbnNmb3JtZWRTcGFjZURpc3RhbmNlRmFjdG9yeSB9IGZyb20gJy4vZ2VvbWV0cnkvZGlzdGFuY2VzJ1xuaW1wb3J0IHsgc2NvcGVzLCBkZWZhdWx0U2NvcGUgfSBmcm9tICcuL3Njb3BlJ1xuXG5pbXBvcnQgeyBGbG9hdExlZnRTdHJhdGVneSB9IGZyb20gJy4vcG9zaXRpb25pbmcnXG5pbXBvcnQgeyBCb3VuZFRvRWxlbWVudCB9IGZyb20gJy4vYm91bmRpbmcnXG5cbmNvbnN0IGFkZFRvRGVmYXVsdFNjb3BlID0gZnVuY3Rpb24odGFyZ2V0KSB7XG4gIGRlZmF1bHRTY29wZS5hZGRUYXJnZXQodGFyZ2V0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXJnZXQgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBkcmFnZ2FibGVzLCBvcHRpb25zID0ge30pIHtcbiAgICBzdXBlcih1bmRlZmluZWQsIG9wdGlvbnMpXG4gICAgY29uc3QgdGFyZ2V0ID0gdGhpc1xuXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICB0aW1lRW5kOiAyMDAsXG4gICAgICB0aW1lRXhjYW5nZTogNDAwXG4gICAgfSwgb3B0aW9ucylcblxuICAgIHRoaXMucG9zaXRpb25pbmdTdHJhdGVneSA9IG9wdGlvbnMuc3RyYXRlZ3kgfHwgbmV3IEZsb2F0TGVmdFN0cmF0ZWd5KFxuICAgICAgdGhpcy5nZXRSZWN0YW5nbGUuYmluZCh0aGlzKSxcbiAgICAgIHtcbiAgICAgICAgcmFkaXVzOiA4MCxcbiAgICAgICAgZ2V0RGlzdGFuY2U6IHRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3RvcnkoeyB4OiAxLCB5OiA0IH0pLFxuICAgICAgICByZW1vdmFibGU6IHRydWVcbiAgICAgIH1cbiAgICApXG5cbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG4gICAgZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS50YXJnZXRzLnB1c2godGFyZ2V0KSlcbiAgICB0aGlzLmRyYWdnYWJsZXMgPSBkcmFnZ2FibGVzXG5cbiAgICBUYXJnZXQuZW1pdHRlci5lbWl0KCd0YXJnZXQ6Y3JlYXRlJywgdGhpcylcblxuICAgIHRoaXMuc3RhcnRCb3VuZGluZygpXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIHN0YXJ0Qm91bmRpbmcoKSB7XG4gICAgdGhpcy5ib3VuZCA9IHRoaXMub3B0aW9ucy5ib3VuZCB8fCBCb3VuZFRvRWxlbWVudC5ib3VuZGluZyh0aGlzLmVsZW1lbnQpXG4gIH1cblxuICBwb3NpdGlvbmluZyAoZHJhZ2dhYmxlcywgaW5kZXhlc09mTmV3KSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25pbmdTdHJhdGVneS5wb3NpdGlvbmluZyhkcmFnZ2FibGVzLCBpbmRleGVzT2ZOZXcpXG4gIH1cblxuICBzb3J0aW5nIChvbGREcmFnZ2FibGVzLCBuZXdEcmFnZ2FibGVzLCBpbmRleE9mTmV3cykge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uaW5nU3RyYXRlZ3kuc29ydGluZyhvbGREcmFnZ2FibGVzLCBuZXdEcmFnZ2FibGVzLCBpbmRleE9mTmV3cylcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgbGV0IHJlY3RhbmdsZXMsIGluZGV4ZXNPZk5ld1xuXG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMgPSB0aGlzLmRyYWdnYWJsZXMuZmlsdGVyKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGxldCBlbGVtZW50ID0gZHJhZ2dhYmxlLmVsZW1lbnQucGFyZW50Tm9kZVxuICAgICAgd2hpbGUgKGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQgPT09IHRoaXMuZWxlbWVudCkge1xuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfSlcblxuICAgIGlmICh0aGlzLmlubmVyRHJhZ2dhYmxlcy5sZW5ndGgpIHtcbiAgICAgIGluZGV4ZXNPZk5ldyA9IHJhbmdlKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmxlbmd0aClcbiAgICAgIHJlY3RhbmdsZXMgPSB0aGlzLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICAgIH0pLCBpbmRleGVzT2ZOZXcpXG4gICAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIGluZGV4ZXNPZk5ldylcbiAgICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gdGhpcy5lbWl0KCd0YXJnZXQ6YWRkJywgZHJhZ2dhYmxlKSlcbiAgICB9XG4gIH1cblxuICBnZXRSZWN0YW5nbGUoKSB7XG4gICAgcmV0dXJuIFJlY3RhbmdsZS5mcm9tRWxlbWVudChcbiAgICAgIHRoaXMuZWxlbWVudCxcbiAgICAgIHRoaXMuY29udGFpbmVyLFxuICAgICAgdGhpcy5vcHRpb25zLmlzQ29udGVudEJveFNpemUsXG4gICAgICB0cnVlXG4gICAgKVxuICB9XG5cbiAgY2F0Y2hEcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5jYXRjaERyYWdnYWJsZSkge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5jYXRjaERyYWdnYWJsZSh0aGlzLCBkcmFnZ2FibGUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRhcmdldFJlY3RhbmdsZSA9IHRoaXMuZ2V0UmVjdGFuZ2xlKClcbiAgICAgIGNvbnN0IGRyYWdnYWJsZVNxdWFyZSA9IGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKS5nZXRTcXVhcmUoKVxuXG4gICAgICByZXR1cm4gZHJhZ2dhYmxlU3F1YXJlIDwgdGFyZ2V0UmVjdGFuZ2xlLmdldFNxdWFyZSgpXG4gICAgICAgICAgICAgICYmIHRhcmdldFJlY3RhbmdsZS5pbmNsdWRlUG9pbnQoZHJhZ2dhYmxlLmdldENlbnRlcigpKVxuICAgIH1cbiAgfVxuXG4gIGdldFBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFJlY3RhbmdsZSgpLnBvc2l0aW9uXG4gIH1cblxuICBnZXRTaXplKCkge1xuICAgIHJldHVybiB0aGlzLmdldFJlY3RhbmdsZSgpLnNpemVcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgc2NvcGVzLmZvckVhY2goKHNjb3BlKSA9PiByZW1vdmVJdGVtKHNjb3BlLnRhcmdldHMsIHRoaXMpKVxuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBbXSlcbiAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIFtdLCAwKVxuICB9XG5cbiAgb25FbmQoZHJhZ2dhYmxlKSB7XG4gICAgY29uc3QgbmV3RHJhZ2dhYmxlc0luZGV4ID0gW11cblxuICAgIGlmICh0aGlzLmdldFJlY3RhbmdsZSgpLmluY2x1ZGVQb2ludChkcmFnZ2FibGUuZ2V0Q2VudGVyKCkpKSB7XG4gICAgICBkcmFnZ2FibGUucG9zaXRpb24gPSB0aGlzLmJvdW5kKGRyYWdnYWJsZS5wb3NpdGlvbiwgZHJhZ2dhYmxlLmdldFNpemUoKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgdGhpcy5lbWl0KCd0YXJnZXQ6YmVmb3JlQWRkJywgZHJhZ2dhYmxlKVxuXG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMgPSB0aGlzLnNvcnRpbmcodGhpcy5pbm5lckRyYWdnYWJsZXMsIFtkcmFnZ2FibGVdLCBuZXdEcmFnZ2FibGVzSW5kZXgpXG4gICAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgbmV3RHJhZ2dhYmxlc0luZGV4KVxuXG4gICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBuZXdEcmFnZ2FibGVzSW5kZXgpXG4gICAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTEpIHtcbiAgICAgIHRoaXMuYWRkUmVtb3ZlT25Nb3ZlKGRyYWdnYWJsZSlcbiAgICB9XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIHNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIGluZGV4ZXNPZk5ldywgdGltZSkge1xuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnNsaWNlKDApLmZvckVhY2goKGRyYWdnYWJsZSwgaSkgPT4ge1xuICAgICAgY29uc3QgcmVjdCA9IHJlY3RhbmdsZXNbaV0sXG4gICAgICAgIHRpbWVFbmQgPSB0aW1lIHx8IHRpbWUgPT09IDAgPyB0aW1lIDogaW5kZXhlc09mTmV3LmluZGV4T2YoaSkgIT09IC0xID8gdGhpcy5vcHRpb25zLnRpbWVFbmQgOiB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2VcblxuICAgICAgaWYgKHJlY3QucmVtb3ZhYmxlKSB7XG4gICAgICAgIGRyYWdnYWJsZS5tb3ZlKGRyYWdnYWJsZS5pbml0aWFsUG9zaXRpb24sIHRpbWVFbmQsIHRydWUsIHRydWUpXG4gICAgICAgIHJlbW92ZUl0ZW0odGhpcy5pbm5lckRyYWdnYWJsZXMsIGRyYWdnYWJsZSlcbiAgICAgICAgdGhpcy5lbWl0KCd0YXJnZXQ6cmVtb3ZlJywgZHJhZ2dhYmxlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZHJhZ2dhYmxlLm1vdmUocmVjdC5wb3NpdGlvbiwgdGltZUVuZCwgdHJ1ZSwgdHJ1ZSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgYWRkKGRyYWdnYWJsZSwgdGltZSkge1xuICAgIGNvbnN0IG5ld0RyYWdnYWJsZXNJbmRleCA9IHRoaXMuaW5uZXJEcmFnZ2FibGVzLmxlbmd0aFxuXG4gICAgdGhpcy5lbWl0KCd0YXJnZXQ6YmVmb3JlQWRkJywgZHJhZ2dhYmxlKVxuXG4gICAgdGhpcy5wdXNoSW5uZXJEcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICAgIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgfSksIG5ld0RyYWdnYWJsZXNJbmRleCwgZHJhZ2dhYmxlKVxuXG4gICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBbbmV3RHJhZ2dhYmxlc0luZGV4XSwgdGltZSB8fCAwKVxuICAgIGlmICh0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkgIT09IC0xKSB7XG4gICAgICB0aGlzLmFkZFJlbW92ZU9uTW92ZShkcmFnZ2FibGUpXG4gICAgfVxuICB9XG5cbiAgcHVzaElubmVyRHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIGlmICh0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSk9PT0tMSkge1xuICAgICAgdGhpcy5pbm5lckRyYWdnYWJsZXMucHVzaChkcmFnZ2FibGUpXG4gICAgfVxuICB9XG5cbiAgYWRkUmVtb3ZlT25Nb3ZlKGRyYWdnYWJsZSkge1xuICAgIGRyYWdnYWJsZS5vbignZHJhZzptb3ZlJywgdGhpcy5yZW1vdmVIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgdGhpcy5yZW1vdmUoZHJhZ2dhYmxlKVxuICAgIH0pXG5cbiAgICB0aGlzLmVtaXQoJ3RhcmdldDphZGQnLCBkcmFnZ2FibGUpXG4gIH1cblxuICByZW1vdmUoZHJhZ2dhYmxlKSB7XG4gICAgZHJhZ2dhYmxlLnVuc3Vic2NyaWJlKCdkcmFnOm1vdmUnLCB0aGlzLnJlbW92ZUhhbmRsZXIpXG5cbiAgICBjb25zdCBpbmRleCA9IHRoaXMuaW5uZXJEcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKVxuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnNwbGljZShpbmRleCwgMSlcblxuICAgIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgfSksIFtdKVxuXG4gICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBbXSlcbiAgICB0aGlzLmVtaXQoJ3RhcmdldDpyZW1vdmUnLCBkcmFnZ2FibGUpXG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5tb3ZlKGRyYWdnYWJsZS5pbml0aWFsUG9zaXRpb24sIDAsIHRydWUsIHRydWUpXG4gICAgICB0aGlzLmVtaXQoJ3RhcmdldDpyZW1vdmUnLCBkcmFnZ2FibGUpXG4gICAgfSlcbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcyA9IFtdXG4gIH1cblxuICBnZXRTb3J0ZWREcmFnZ2FibGVzKCkge1xuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnNsaWNlKClcbiAgfVxuXG4gIGdldCBjb250YWluZXIoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9jb250YWluZXIgPSB0aGlzLl9jb250YWluZXIgfHwgdGhpcy5vcHRpb25zLmNvbnRhaW5lciB8fCB0aGlzLm9wdGlvbnMucGFyZW50IHx8IGdldERlZmF1bHRDb250YWluZXIodGhpcy5lbGVtZW50KSlcbiAgfVxufVxuXG5UYXJnZXQuZW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXIoVGFyZ2V0KVxuVGFyZ2V0LmVtaXR0ZXIub24oJ3RhcmdldDpjcmVhdGUnLCBhZGRUb0RlZmF1bHRTY29wZSlcbiIsImltcG9ydCByZW1vdmVJdGVtIGZyb20gJy4vdXRpbHMvcmVtb3ZlLWFycmF5LWl0ZW0nXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnRFbWl0dGVyJ1xuaW1wb3J0IERyYWdnYWJsZSBmcm9tICcuL2RyYWdnYWJsZSdcbmltcG9ydCBUYXJnZXQgZnJvbSAnLi90YXJnZXQnXG5cbmNvbnN0IHNjb3BlcyA9IFtdXG5cbmNsYXNzIFNjb3BlIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoZHJhZ2dhYmxlcywgdGFyZ2V0cywgb3B0aW9ucz17fSkge1xuICAgIHN1cGVyKHVuZGVmaW5lZCwgb3B0aW9ucylcbiAgICBzY29wZXMuZm9yRWFjaCgoc2NvcGUpID0+IHtcbiAgICAgIGlmIChkcmFnZ2FibGVzKSB7XG4gICAgICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICAgICAgcmVtb3ZlSXRlbShzY29wZS5kcmFnZ2FibGVzLCBkcmFnZ2FibGUpXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIGlmICh0YXJnZXRzKSB7XG4gICAgICAgIHRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB7XG4gICAgICAgICAgcmVtb3ZlSXRlbShzY29wZS50YXJnZXRzLCB0YXJnZXQpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZXMgfHwgW11cbiAgICB0aGlzLnRhcmdldHMgPSB0YXJnZXRzIHx8IFtdXG4gICAgc2NvcGVzLnB1c2godGhpcylcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICB0aW1lRW5kOiAob3B0aW9ucy50aW1lRW5kKSB8fCA0MDBcbiAgICB9XG5cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUuZHJhZ0VuZEFjdGlvbiA9ICgpID0+IHRoaXMub25FbmQoZHJhZ2dhYmxlKVxuICAgIH0pXG4gIH1cblxuICBhZGREcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxuICAgIGRyYWdnYWJsZS5kcmFnRW5kQWN0aW9uID0gKCkgPT4gdGhpcy5vbkVuZChkcmFnZ2FibGUpXG4gIH1cblxuICBhZGRUYXJnZXQodGFyZ2V0KSB7XG4gICAgdGhpcy50YXJnZXRzLnB1c2godGFyZ2V0KVxuICB9XG5cbiAgb25FbmQoZHJhZ2dhYmxlKSB7XG4gICAgY29uc3Qgc2hvdFRhcmdldHMgPSB0aGlzLnRhcmdldHMuZmlsdGVyKCh0YXJnZXQpID0+IHtcbiAgICAgIHJldHVybiB0YXJnZXQuZHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkgIT09IC0xXG4gICAgfSkuZmlsdGVyKCh0YXJnZXQpID0+IHtcbiAgICAgIHJldHVybiB0YXJnZXQuY2F0Y2hEcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICAgIH0pLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIHJldHVybiBhLmdldFJlY3RhbmdsZSgpLmdldFNxdWFyZSgpIC0gYi5nZXRSZWN0YW5nbGUoKS5nZXRTcXVhcmUoKVxuICAgIH0pXG5cbiAgICBpZiAoc2hvdFRhcmdldHMubGVuZ3RoKSB7XG4gICAgICBzaG90VGFyZ2V0c1swXS5vbkVuZChkcmFnZ2FibGUpXG4gICAgfSBlbHNlIGlmIChkcmFnZ2FibGUudGFyZ2V0cy5sZW5ndGgpIHtcbiAgICAgIGRyYWdnYWJsZS5waW5Qb3NpdGlvbihkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uLCB0aGlzLm9wdGlvbnMudGltZUVuZClcbiAgICB9XG5cbiAgICB0aGlzLmVtaXQoJ3Njb3BlOmNoYW5nZScpXG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLnRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB0YXJnZXQucmVzZXQoKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnJlZnJlc2goKSlcbiAgICB0aGlzLnRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB0YXJnZXQucmVmcmVzaCgpKVxuICB9XG5cbiAgZ2V0IHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXRzLm1hcCgodGFyZ2V0KSA9PiB7XG4gICAgICByZXR1cm4gdGFyZ2V0LmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4gdGhpcy5kcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSlcbiAgICB9KVxuICB9XG5cbiAgc2V0IHBvc2l0aW9ucyhwb3NpdGlvbnMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gJ3dyb25nIGFycmF5IGxlbmd0aCdcbiAgICBpZiAocG9zaXRpb25zLmxlbmd0aCA9PT0gdGhpcy50YXJnZXRzLmxlbmd0aCkge1xuICAgICAgdGhpcy50YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4gdGFyZ2V0LnJlc2V0KCkpXG5cbiAgICAgIHBvc2l0aW9ucy5mb3JFYWNoKCh0YXJnZXRJbmRleGVzLCBpKSA9PiB7XG4gICAgICAgIHRhcmdldEluZGV4ZXMuZm9yRWFjaCgoaW5kZXgpID0+IHtcbiAgICAgICAgICB0aGlzLnRhcmdldHNbaV0uYWRkKHRoaXMuZHJhZ2dhYmxlc1tpbmRleF0pXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBtZXNzYWdlXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IGRlZmF1bHRTY29wZSA9IG5ldyBTY29wZSgpXG5cbmZ1bmN0aW9uIHNjb3BlKGZuKSB7XG4gIGNvbnN0IGN1cnJlbnRTY29wZSA9IG5ldyBTY29wZSgpXG5cbiAgY29uc3QgYWRkRHJhZ2dhYmxlVG9TY29wZSA9IGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICAgIGN1cnJlbnRTY29wZS5hZGREcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICAgIERyYWdnYWJsZS5lbWl0dGVyLmludGVycnVwdCgpXG4gIH1cblxuICBjb25zdCBhZGRUYXJnZXRUb1Njb3BlID0gZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgY3VycmVudFNjb3BlLmFkZFRhcmdldCh0YXJnZXQpXG4gICAgRHJhZ2dhYmxlLmVtaXR0ZXIuaW50ZXJydXB0KClcbiAgfVxuXG4gIERyYWdnYWJsZS5lbWl0dGVyLnByZXBlbmRPbignZHJhZ2dhYmxlOmNyZWF0ZScsIGFkZERyYWdnYWJsZVRvU2NvcGUpXG4gIFRhcmdldC5lbWl0dGVyLnByZXBlbmRPbigndGFyZ2V0OmNyZWF0ZScsIGFkZFRhcmdldFRvU2NvcGUpXG4gIGZuLmNhbGwoKVxuICBEcmFnZ2FibGUuZW1pdHRlci51bnN1YnNjcmliZSgnZHJhZ2dhYmxlOmNyZWF0ZScsIGFkZERyYWdnYWJsZVRvU2NvcGUpXG4gIFRhcmdldC5lbWl0dGVyLnVuc3Vic2NyaWJlKCd0YXJnZXQ6Y3JlYXRlJywgYWRkVGFyZ2V0VG9TY29wZSlcbiAgcmV0dXJuIGN1cnJlbnRTY29wZVxufVxuXG5leHBvcnQgeyBzY29wZXMsIGRlZmF1bHRTY29wZSwgU2NvcGUsIHNjb3BlIH1cbiIsImZ1bmN0aW9uIGNoZWNrU3VwcG9ydFBhc3NpdmVFdmVudHMoKSB7XG4gIGxldCBwYXNzaXZlU3VwcG9ydGVkID0gZmFsc2VcblxuICB0cnkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdwYXNzaXZlJywge1xuICAgICAgZ2V0KCkge1xuICAgICAgICByZXR1cm4gKHBhc3NpdmVTdXBwb3J0ZWQgPSB0cnVlKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndGVzdCcsIG9wdGlvbnMsIG9wdGlvbnMpXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Rlc3QnLCBvcHRpb25zLCBvcHRpb25zKVxuICB9IGNhdGNoIChfZXJyKSB7XG4gICAgcGFzc2l2ZVN1cHBvcnRlZCA9IGZhbHNlXG4gIH1cblxuICByZXR1cm4gcGFzc2l2ZVN1cHBvcnRlZFxufVxuXG5leHBvcnQgY29uc3QgaXNTdXBwb3J0UGFzc2l2ZUV2ZW50cyA9IGNoZWNrU3VwcG9ydFBhc3NpdmVFdmVudHMoKVxuXG5mdW5jdGlvbiBldmVudE9wdGlvbnMob3B0aW9ucywgZmFsbGJhY2sgPSBmYWxzZSkge1xuICByZXR1cm4gaXNTdXBwb3J0UGFzc2l2ZUV2ZW50cyA/IG9wdGlvbnMgOiBmYWxsYmFja1xufVxuXG5leHBvcnQgeyBldmVudE9wdGlvbnMgfVxuXG5leHBvcnQgZGVmYXVsdCBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzXG4iLCJpbXBvcnQgeyBhZGRDbGFzcywgcmVtb3ZlQ2xhc3MgfSBmcm9tICcuL3V0aWxzL2NsYXNzZXMnXG5pbXBvcnQgZ2V0RGVmYXVsdENvbnRhaW5lciBmcm9tICcuL3V0aWxzL2dldC1kZWZhdWx0LWNvbnRhaW5lcidcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudEVtaXR0ZXInXG5pbXBvcnQgZ2V0U3R5bGVQcm9wZXJ0eSBmcm9tICdkZXNhbmRyby1nZXQtc3R5bGUtcHJvcGVydHknXG5pbXBvcnQgeyBCb3VuZFRvRWxlbWVudCB9IGZyb20gJy4vYm91bmRpbmcnXG5pbXBvcnQgUG9pbnQgZnJvbSAnLi9nZW9tZXRyeS9wb2ludCdcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSAnLi9nZW9tZXRyeS9yZWN0YW5nbGUnXG5pbXBvcnQgeyBkZWZhdWx0U2NvcGUgfSBmcm9tICcuL3Njb3BlJ1xuaW1wb3J0IGlzU3VwcG9ydFBhc3NpdmVFdmVudHMgZnJvbSAnLi91dGlscy9pcy1zdXBwb3J0LXBhc3NpdmUtZXZlbnRzJ1xuXG5jb25zdCBpc1RvdWNoID0gJ29udG91Y2hzdGFydCcgaW4gd2luZG93XG5jb25zdCBtb3VzZUV2ZW50cyA9IHtcbiAgc3RhcnQ6ICdtb3VzZWRvd24nLFxuICBtb3ZlOiAnbW91c2Vtb3ZlJyxcbiAgZW5kOiAnbW91c2V1cCdcbn1cbmNvbnN0IHRvdWNoRXZlbnRzID0ge1xuICBzdGFydDogJ3RvdWNoc3RhcnQnLFxuICBtb3ZlOiAndG91Y2htb3ZlJyxcbiAgZW5kOiAndG91Y2hlbmQnXG59XG5jb25zdCBkcmFnZ2FibGVzID0gW11cbmNvbnN0IHRyYW5zZm9ybVByb3BlcnR5ID0gZ2V0U3R5bGVQcm9wZXJ0eSgndHJhbnNmb3JtJylcbmNvbnN0IHRyYW5zaXRpb25Qcm9wZXJ0eSA9IGdldFN0eWxlUHJvcGVydHkoJ3RyYW5zaXRpb24nKVxuXG5mdW5jdGlvbiBnZXRUb3VjaEJ5SUQoZWxlbWVudCwgdG91Y2hJZCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnQuY2hhbmdlZFRvdWNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZWxlbWVudC5jaGFuZ2VkVG91Y2hlc1tpXS5pZGVudGlmaWVyID09PSB0b3VjaElkKSB7XG4gICAgICByZXR1cm4gZWxlbWVudC5jaGFuZ2VkVG91Y2hlc1tpXVxuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cblxuZnVuY3Rpb24gcHJldmVudERvdWJsZUluaXQoZHJhZ2dhYmxlKSB7XG4gIGNvbnN0IG1lc3NhZ2UgPSBcImZvciB0aGlzIGVsZW1lbnQgRHJhZ2VlLkRyYWdnYWJsZSBpcyBhbHJlYWR5IGV4aXN0LCBkb24ndCBjcmVhdGUgaXQgdHdpY2UgXCJcbiAgaWYgKGRyYWdnYWJsZXMuc29tZSgoZXhpc3RpbmcpID0+IGRyYWdnYWJsZS5lbGVtZW50ID09PSBleGlzdGluZy5lbGVtZW50KSkge1xuICAgIHRocm93IG1lc3NhZ2VcbiAgfVxuICBkcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxufVxuXG5mdW5jdGlvbiBhZGRUb0RlZmF1bHRTY29wZShkcmFnZ2FibGUpIHtcbiAgZGVmYXVsdFNjb3BlLmFkZERyYWdnYWJsZShkcmFnZ2FibGUpXG59XG5cbmZ1bmN0aW9uIGNvcHlTdHlsZXMoc291cmNlLCBkZXN0aW5hdGlvbikge1xuICBjb25zdCBjcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHNvdXJjZSlcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qga2V5ID0gY3NbaV1cbiAgICBpZiAoKGtleS5pbmRleE9mKCd0cmFuc2l0aW9uJykgPCAwKSAmJiAoa2V5LmluZGV4T2YoJ3RyYW5zZm9ybScpIDwgMCkpIHtcbiAgICAgIGRlc3RpbmF0aW9uLnN0eWxlW2tleV0gPSBjc1trZXldXG4gICAgfVxuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzb3VyY2UuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICBjb3B5U3R5bGVzKHNvdXJjZS5jaGlsZHJlbltpXSwgZGVzdGluYXRpb24uY2hpbGRyZW5baV0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhZ2dhYmxlIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgb3B0aW9ucz17fSkge1xuICAgIHN1cGVyKHVuZGVmaW5lZCwgb3B0aW9ucylcbiAgICB0aGlzLnRhcmdldHMgPSBbXVxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG4gICAgcHJldmVudERvdWJsZUluaXQodGhpcylcbiAgICBEcmFnZ2FibGUuZW1pdHRlci5lbWl0KCdkcmFnZ2FibGU6Y3JlYXRlJywgdGhpcylcbiAgICB0aGlzLl9lbmFibGUgPSB0cnVlXG4gICAgdGhpcy5zdGFydEJvdW5kaW5nKClcbiAgICB0aGlzLnN0YXJ0UG9zaXRpb25pbmcoKVxuICAgIHRoaXMuc3RhcnRMaXN0ZW5pbmcoKVxuICB9XG5cbiAgc3RhcnRCb3VuZGluZygpIHtcbiAgICB0aGlzLmJvdW5kID0gdGhpcy5vcHRpb25zLmJvdW5kIHx8IEJvdW5kVG9FbGVtZW50LmJvdW5kaW5nKHRoaXMuY29udGFpbmVyLCB0aGlzLmNvbnRhaW5lcilcbiAgfVxuXG4gIHN0YXJ0UG9zaXRpb25pbmcoKSB7XG4gICAgdGhpcy5fc2V0RGVmYXVsdFRyYW5zaXRpb24oKVxuICAgIHRoaXMub2Zmc2V0ID0gUG9pbnQuZWxlbWVudE9mZnNldCh0aGlzLmVsZW1lbnQsIHRoaXMuY29udGFpbmVyLCB0cnVlKVxuICAgIHRoaXMucGlubmVkUG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICAgIHRoaXMuaW5pdGlhbFBvc2l0aW9uID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uIHx8IHRoaXMub2Zmc2V0XG5cbiAgICB0aGlzLnBpblBvc2l0aW9uKHRoaXMuaW5pdGlhbFBvc2l0aW9uKVxuXG4gICAgaWYgKHRoaXMuYm91bmQucmVmcmVzaCkge1xuICAgICAgdGhpcy5ib3VuZC5yZWZyZXNoKClcbiAgICB9XG4gIH1cblxuICBzdGFydExpc3RlbmluZygpIHtcbiAgICB0aGlzLl9kcmFnU3RhcnQgPSAoZXZlbnQpID0+IHRoaXMuZHJhZ1N0YXJ0KGV2ZW50KVxuICAgIHRoaXMuX2RyYWdNb3ZlID0gKGV2ZW50KSA9PiB0aGlzLmRyYWdNb3ZlKGV2ZW50KVxuICAgIHRoaXMuX2RyYWdFbmQgPSAoZXZlbnQpID0+IHRoaXMuZHJhZ0VuZChldmVudClcbiAgICB0aGlzLl9uYXRpdmVEcmFnU3RhcnQgPSAoZXZlbnQpID0+IHRoaXMubmF0aXZlRHJhZ1N0YXJ0KGV2ZW50KVxuICAgIHRoaXMuX25hdGl2ZURyYWdPdmVyID0gKGV2ZW50KSA9PiB0aGlzLm5hdGl2ZURyYWdPdmVyKGV2ZW50KVxuICAgIHRoaXMuX25hdGl2ZURyYWdFbmQgPSAoZXZlbnQpID0+IHRoaXMubmF0aXZlRHJhZ0VuZChldmVudClcbiAgICB0aGlzLl9uYXRpdmVEcm9wID0gKGV2ZW50KSA9PiB0aGlzLm5hdGl2ZURyb3AoZXZlbnQpXG4gICAgdGhpcy5fc2Nyb2xsID0gKGV2ZW50KSA9PiB0aGlzLm9uU2Nyb2xsKGV2ZW50KVxuXG4gICAgdGhpcy5oYW5kbGVyLmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydCwgaXNTdXBwb3J0UGFzc2l2ZUV2ZW50cyA/IHsgcGFzc2l2ZTogZmFsc2UgfSA6IGZhbHNlKVxuICAgIHRoaXMuaGFuZGxlci5hZGRFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQsIGlzU3VwcG9ydFBhc3NpdmVFdmVudHMgPyB7IHBhc3NpdmU6IGZhbHNlIH0gOiBmYWxzZSlcbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgdGhpcy5fbmF0aXZlRHJhZ1N0YXJ0KVxuICB9XG5cbiAgZ2V0U2l6ZSgpIHtcbiAgICByZXR1cm4gUG9pbnQuZWxlbWVudFNpemUodGhpcy5lbGVtZW50LCB0aGlzLm9wdGlvbnMuaXNDb250ZW50Qm94U2l6ZSlcbiAgfVxuXG4gIGdldFBvc2l0aW9uKCkge1xuICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLm9mZnNldC5hZGQodGhpcy5fdHJhbnNmb3JtUG9zaXRpb24gfHwgbmV3IFBvaW50KDAsIDApKVxuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uXG4gIH1cblxuICBnZXRDZW50ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb24uYWRkKHRoaXMuZ2V0U2l6ZSgpLm11bHQoMC41KSlcbiAgfVxuXG4gIF9zZXREZWZhdWx0VHJhbnNpdGlvbiAoKSB7XG4gICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV0gPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsZW1lbnQpW3RyYW5zaXRpb25Qcm9wZXJ0eV1cbiAgfVxuXG4gIF9zZXRUcmFuc2l0aW9uKHRpbWUpIHtcbiAgICBsZXQgdHJhbnNpdGlvbiA9IHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldXG4gICAgY29uc3QgdHJhbnNpdGlvbkNzcyA9IGB0cmFuc2Zvcm0gJHt0aW1lfW1zYFxuXG4gICAgaWYgKCEvdHJhbnNmb3JtIFxcZCptP3MvLnRlc3QodHJhbnNpdGlvbikpIHtcbiAgICAgIGlmICh0cmFuc2l0aW9uKSB7XG4gICAgICAgIHRyYW5zaXRpb24gKz0gYCwgJHt0cmFuc2l0aW9uQ3NzfWBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyYW5zaXRpb24gPSB0cmFuc2l0aW9uQ3NzXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyYW5zaXRpb24gPSB0cmFuc2l0aW9uLnJlcGxhY2UoL3RyYW5zZm9ybSBcXGQqbT9zLywgdHJhbnNpdGlvbkNzcylcbiAgICB9XG5cbiAgICB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNpdGlvblByb3BlcnR5XSA9IHRyYW5zaXRpb25cbiAgfVxuXG4gIF9zZXRUcmFuc2xhdGUocG9pbnQpIHtcbiAgICB0aGlzLl90cmFuc2Zvcm1Qb3NpdGlvbiA9IHBvaW50XG4gICAgY29uc3QgdHJhbnNsYXRlQ3NzID0gYHRyYW5zbGF0ZTNkKCR7cG9pbnQueH1weCwgJHtwb2ludC55fXB4LCAwcHgpYFxuXG4gICAgbGV0IHRyYW5zZm9ybSA9IHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wZXJ0eV1cblxuICAgIGlmICh0aGlzLnNob3VsZFJlbW92ZVplcm9UcmFuc2xhdGUgJiYgcG9pbnQueCA9PT0gMCAmJiBwb2ludC55ID09PSAwKSB7XG4gICAgICB0cmFuc2Zvcm0gPSB0cmFuc2Zvcm0ucmVwbGFjZSgvdHJhbnNsYXRlM2RcXChbXildK1xcKS8sICcnKVxuICAgIH0gZWxzZSBpZiAoIS90cmFuc2xhdGUzZFxcKFteKV0rXFwpLy50ZXN0KHRyYW5zZm9ybSkpIHtcbiAgICAgIGlmICh0cmFuc2Zvcm0pIHtcbiAgICAgICAgdHJhbnNmb3JtICs9ICcgJ1xuICAgICAgfVxuICAgICAgdHJhbnNmb3JtICs9IHRyYW5zbGF0ZUNzc1xuICAgIH0gZWxzZSB7XG4gICAgICB0cmFuc2Zvcm0gPSB0cmFuc2Zvcm0ucmVwbGFjZSgvdHJhbnNsYXRlM2RcXChbXildK1xcKS8sIHRyYW5zbGF0ZUNzcylcbiAgICB9XG5cbiAgICB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcGVydHldID0gdHJhbnNmb3JtXG4gIH1cblxuICBtb3ZlKHBvaW50LCB0aW1lPTAsIGlzU2lsZW50PWZhbHNlKSB7XG4gICAgcG9pbnQgPSBwb2ludC5jbG9uZSgpXG5cbiAgICB0aGlzLmRldGVybWluZURpcmVjdGlvbihwb2ludClcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9pbnRcblxuICAgIHRoaXMuX3NldFRyYW5zaXRpb24odGltZSlcbiAgICB0aGlzLl9zZXRUcmFuc2xhdGUocG9pbnQuc3ViKHRoaXMub2Zmc2V0KSlcblxuICAgIGlmICghaXNTaWxlbnQpIHtcbiAgICAgIHRoaXMuZW1pdCgnZHJhZzptb3ZlJylcbiAgICB9XG4gIH1cblxuICBwaW5Qb3NpdGlvbihwb2ludCwgdGltZT0wLCBzaWxlbnQ9dHJ1ZSkge1xuICAgIHRoaXMucGlubmVkUG9zaXRpb24gPSBwb2ludC5jbG9uZSgpXG4gICAgdGhpcy5tb3ZlKHRoaXMucGlubmVkUG9zaXRpb24sIHRpbWUsIHNpbGVudClcbiAgfVxuXG4gIHJlc2V0UG9zaXRpb25Ub0luaXRpYWwgKCkge1xuICAgIHRoaXMucGluUG9zaXRpb24odGhpcy5pbml0aWFsUG9zaXRpb24pXG4gIH1cblxuICByZWZyZXNoUG9zaXRpb24gKCkge1xuICAgIHRoaXMuc2V0UG9zaXRpb24odGhpcy5nZXRQb3NpdGlvbigpKVxuICB9XG5cbiAgc2V0UG9zaXRpb24ocG9pbnQpIHtcbiAgICBwb2ludCA9IHBvaW50LmNsb25lKClcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9pbnRcbiAgICB0aGlzLl9zZXRUcmFuc2l0aW9uKDApXG4gICAgdGhpcy5fc2V0VHJhbnNsYXRlKHBvaW50LnN1Yih0aGlzLm9mZnNldCkpXG4gIH1cblxuICBkZXRlcm1pbmVEaXJlY3Rpb24ocG9pbnQpIHtcbiAgICB0aGlzLmxlZnREaXJlY3Rpb24gPSAodGhpcy5wb3NpdGlvbi54IDwgcG9pbnQueClcbiAgICB0aGlzLnJpZ2h0RGlyZWN0aW9uID0gKHRoaXMucG9zaXRpb24ueCA+IHBvaW50LngpXG4gICAgdGhpcy51cERpcmVjdGlvbiA9ICh0aGlzLnBvc2l0aW9uLnkgPiBwb2ludC55KVxuICAgIHRoaXMuZG93bkRpcmVjdGlvbiA9ICh0aGlzLnBvc2l0aW9uLnkgPCBwb2ludC55KVxuICB9XG5cbiAgZHJhZ1N0YXJ0KGV2ZW50KSB7XG4gICAgdGhpcy5jdXJyZW50RXZlbnQgPSBldmVudFxuICAgIGlmICghdGhpcy5fZW5hYmxlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBpc1RvdWNoRXZlbnQgPSAoaXNUb3VjaCAmJiAoZXZlbnQgaW5zdGFuY2VvZiB3aW5kb3cuVG91Y2hFdmVudCkpXG5cbiAgICB0aGlzLnRvdWNoUG9pbnQgPSB0aGlzLl9zdGFydFRvdWNoUG9pbnQgPSBuZXcgUG9pbnQoXG4gICAgICBpc1RvdWNoRXZlbnQgPyBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCA6IGV2ZW50LmNsaWVudFgsXG4gICAgICBpc1RvdWNoRXZlbnQgPyBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWSA6IGV2ZW50LmNsaWVudFlcbiAgICApXG5cbiAgICB0aGlzLl9zdGFydFBvc2l0aW9uID0gdGhpcy5nZXRQb3NpdGlvbigpXG4gICAgaWYgKGlzVG91Y2hFdmVudCkge1xuICAgICAgdGhpcy5fdG91Y2hJZCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmlkZW50aWZpZXJcbiAgICB9XG5cbiAgICB0aGlzLl9zdGFydFNjcm9sbFBvaW50ID0gbmV3IFBvaW50KHdpbmRvdy5zY3JvbGxYLCB3aW5kb3cuc2Nyb2xsWSlcblxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgaWYgKGV2ZW50LnRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSW5wdXRFbGVtZW50IHx8XG4gICAgICAgICAgZXZlbnQudGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJbnB1dEVsZW1lbnQpIHtcbiAgICAgIGV2ZW50LnRhcmdldC5mb2N1cygpXG4gICAgfVxuXG4gICAgaWYgKCEodGhpcy5uYXRpdmVEcmFnQW5kRHJvcCB8fFxuICAgICAgICAgICAgZXZlbnQudGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJbnB1dEVsZW1lbnQgfHxcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSW5wdXRFbGVtZW50KSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIH1cblxuICAgIGlmICh0aGlzLm5hdGl2ZURyYWdBbmREcm9wKSB7XG4gICAgICBjb25zdCBpc1NhZmFyaSA9IC92ZXJzaW9uXFwvKFxcZCspLis/c2FmYXJpL2kudGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudClcbiAgICAgIGlmICgoaXNUb3VjaEV2ZW50ICYmIHRoaXMuZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wT25Ub3VjaCkgfHxcbiAgICAgICAgICAgICBpc1NhZmFyaSB8fFxuICAgICAgICAgICAgIHRoaXMuZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wRm9yQWxsKSB7XG4gICAgICAgIHRoaXMuZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wKGV2ZW50KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmRyYWdnYWJsZSA9IHRydWVcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX25hdGl2ZURyYWdFbmQsIGlzU3VwcG9ydFBhc3NpdmVFdmVudHMgPyB7IHBhc3NpdmU6IGZhbHNlIH0gOiBmYWxzZSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSwgaXNTdXBwb3J0UGFzc2l2ZUV2ZW50cyA/IHsgcGFzc2l2ZTogZmFsc2UgfSA6IGZhbHNlKVxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSwgaXNTdXBwb3J0UGFzc2l2ZUV2ZW50cyA/IHsgcGFzc2l2ZTogZmFsc2UgfSA6IGZhbHNlKVxuXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZCwgaXNTdXBwb3J0UGFzc2l2ZUV2ZW50cyA/IHsgcGFzc2l2ZTogZmFsc2UgfSA6IGZhbHNlKVxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQsIGlzU3VwcG9ydFBhc3NpdmVFdmVudHMgPyB7IHBhc3NpdmU6IGZhbHNlIH0gOiBmYWxzZSlcbiAgICB9XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fc2Nyb2xsKVxuXG4gICAgdGhpcy5pc0RyYWdnaW5nID0gdHJ1ZVxuICAgIHRoaXMuZW1pdCgnZHJhZzpzdGFydCcpXG4gICAgYWRkQ2xhc3ModGhpcy5lbGVtZW50LCAnZHJhZ2VlLWFjdGl2ZScpXG4gICAgdGhpcy5lbWl0KCdkcmFnOm1vdmUnKVxuICB9XG5cbiAgc3RvcERyYWdnaW5nKCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIHRoaXMuX25hdGl2ZURyYWdPdmVyKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzLl9uYXRpdmVEcm9wKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzLl9uYXRpdmVEcm9wKVxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9zY3JvbGwpXG4gICAgdGhpcy5lbGVtZW50LmRyYWdnYWJsZSA9IGZhbHNlXG4gICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2VcbiAgICByZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnQsICdkcmFnZWUtYWN0aXZlJylcbiAgfVxuXG4gIGRyYWdNb3ZlKGV2ZW50KSB7XG4gICAgdGhpcy5jdXJyZW50RXZlbnQgPSBldmVudFxuICAgIGxldCB0b3VjaFxuXG4gICAgY29uc3QgaXNUb3VjaEV2ZW50ID0gKGlzVG91Y2ggJiYgKGV2ZW50IGluc3RhbmNlb2Ygd2luZG93LlRvdWNoRXZlbnQpKVxuICAgIGlmIChpc1RvdWNoRXZlbnQpIHtcbiAgICAgIHRvdWNoID0gZ2V0VG91Y2hCeUlEKGV2ZW50LCB0aGlzLl90b3VjaElkKVxuXG4gICAgICBpZiAoIXRvdWNoKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIHRoaXMudG91Y2hQb2ludCA9IG5ldyBQb2ludChcbiAgICAgIGlzVG91Y2hFdmVudCA/IHRvdWNoLnBhZ2VYIDogZXZlbnQuY2xpZW50WCxcbiAgICAgIGlzVG91Y2hFdmVudCA/IHRvdWNoLnBhZ2VZIDogZXZlbnQuY2xpZW50WVxuICAgIClcblxuICAgIGxldCBwb2ludCA9IHRoaXMuX3N0YXJ0UG9zaXRpb24uYWRkKHRoaXMudG91Y2hQb2ludC5zdWIodGhpcy5fc3RhcnRUb3VjaFBvaW50KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZCh0aGlzLnNjcm9sbFBvaW50LnN1Yih0aGlzLl9zdGFydFNjcm9sbFBvaW50KSlcblxuICAgIHBvaW50ID0gdGhpcy5ib3VuZChwb2ludCwgdGhpcy5nZXRTaXplKCkpXG4gICAgdGhpcy5tb3ZlKHBvaW50KVxuICB9XG5cbiAgZHJhZ0VuZChldmVudCkge1xuICAgIGNvbnN0IGlzVG91Y2hFdmVudCA9IChpc1RvdWNoICYmIChldmVudCBpbnN0YW5jZW9mIHdpbmRvdy5Ub3VjaEV2ZW50KSlcblxuICAgIGlmIChpc1RvdWNoRXZlbnQgJiYgIWdldFRvdWNoQnlJRChldmVudCwgdGhpcy5fdG91Y2hJZCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIHRoaXMuZHJhZ0VuZEFjdGlvbigpXG4gICAgdGhpcy5lbWl0KCdkcmFnOmVuZCcpXG5cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG5cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcblxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9zY3JvbGwpXG5cbiAgICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZVxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2RyYWdnYWJsZScpXG4gICAgcmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50LCAnZHJhZ2VlLWFjdGl2ZScpXG4gIH1cblxuICBvblNjcm9sbChfZXZlbnQpIHtcbiAgICBsZXQgcG9pbnQgPSB0aGlzLl9zdGFydFBvc2l0aW9uLmFkZCh0aGlzLnRvdWNoUG9pbnQuc3ViKHRoaXMuX3N0YXJ0VG91Y2hQb2ludCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy5zY3JvbGxQb2ludC5zdWIodGhpcy5fc3RhcnRTY3JvbGxQb2ludCkpXG5cbiAgICBwb2ludCA9IHRoaXMuYm91bmQocG9pbnQsIHRoaXMuZ2V0U2l6ZSgpKVxuICAgIGlmICghdGhpcy5uYXRpdmVEcmFnQW5kRHJvcCkge1xuICAgICAgdGhpcy5tb3ZlKHBvaW50KVxuICAgIH1cbiAgfVxuXG4gIG5hdGl2ZURyYWdTdGFydChldmVudCkge1xuICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0JywgJ0ZpcmVGb3ggZml4JylcbiAgICBldmVudC5kYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCA9ICdtb3ZlJ1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgdGhpcy5fbmF0aXZlRHJhZ092ZXIpXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIHRoaXMuX25hdGl2ZURyYWdFbmQpXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIHRoaXMuX25hdGl2ZURyb3ApXG4gIH1cblxuICBuYXRpdmVEcmFnT3ZlcihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBldmVudC5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9ICdtb3ZlJ1xuICAgIGFkZENsYXNzKHRoaXMuZWxlbWVudCwgJ2RyYWdlZS1wbGFjZWhvbGRlcicpXG4gICAgdGhpcy5jdXJyZW50RXZlbnQgPSBldmVudFxuICAgIGlmIChldmVudC5jbGllbnRYID09PSAwICYmIGV2ZW50LmNsaWVudFkgPT09IDApIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMudG91Y2hQb2ludCA9IG5ldyBQb2ludChldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZKVxuICAgIGxldCBwb2ludCA9IHRoaXMuX3N0YXJ0UG9zaXRpb24uYWRkKHRoaXMudG91Y2hQb2ludC5zdWIodGhpcy5fc3RhcnRUb3VjaFBvaW50KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZCh0aGlzLnNjcm9sbFBvaW50LnN1Yih0aGlzLl9zdGFydFNjcm9sbFBvaW50KSlcbiAgICBwb2ludCA9IHRoaXMuYm91bmQocG9pbnQsIHRoaXMuZ2V0U2l6ZSgpKVxuICAgIHRoaXMucG9zaXRpb24gPSBwb2ludFxuICAgIHRoaXMuZW1pdCgnZHJhZzptb3ZlJylcbiAgfVxuXG4gIG5hdGl2ZURyYWdFbmQoX2V2ZW50KSB7XG4gICAgcmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50LCAnZHJhZ2VlLXBsYWNlaG9sZGVyJylcbiAgICB0aGlzLmRyYWdFbmRBY3Rpb24oKVxuICAgIHRoaXMuZW1pdCgnZHJhZzplbmQnKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgdGhpcy5fbmF0aXZlRHJhZ092ZXIpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIHRoaXMuX25hdGl2ZURyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX25hdGl2ZURyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJvcCcsIHRoaXMuX25hdGl2ZURyb3ApXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX3Njcm9sbClcbiAgICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZVxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2RyYWdnYWJsZScpXG4gICAgcmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50LCAnZHJhZ2VlLWFjdGl2ZScpXG4gIH1cblxuICBuYXRpdmVEcm9wKGV2ZW50KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBlbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3AoZXZlbnQpIHtcbiAgICBjb25zdCBjb250YWluZXJSZWN0ID0gdGhpcy5jb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICBjb25zdCBjbG9uZWRFbGVtZW50ID0gdGhpcy5lbGVtZW50LmNsb25lTm9kZSh0cnVlKVxuICAgIGNsb25lZEVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcGVydHldID0gJydcbiAgICBjb3B5U3R5bGVzKHRoaXMuZWxlbWVudCwgY2xvbmVkRWxlbWVudClcbiAgICBjbG9uZWRFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJ1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2xvbmVkRWxlbWVudClcbiAgICBhZGRDbGFzcyh0aGlzLmVsZW1lbnQsICdkcmFnZWUtcGxhY2Vob2xkZXInKVxuXG4gICAgY29uc3QgZW11bGF0aW9uRHJhZ2dhYmxlID0gbmV3IERyYWdnYWJsZShjbG9uZWRFbGVtZW50LCB7XG4gICAgICBjb250YWluZXI6IGRvY3VtZW50LmJvZHksXG4gICAgICBib3VuZChwb2ludCkge1xuICAgICAgICByZXR1cm4gcG9pbnRcbiAgICAgIH0sXG4gICAgICBvbjoge1xuICAgICAgICAnZHJhZzptb3ZlJzogKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNvbnRhaW5lclJlY3RQb2ludCA9IG5ldyBQb2ludChjb250YWluZXJSZWN0LmxlZnQsIGNvbnRhaW5lclJlY3QudG9wKVxuICAgICAgICAgIHRoaXMucG9zaXRpb24gPSBlbXVsYXRpb25EcmFnZ2FibGUucG9zaXRpb24uc3ViKGNvbnRhaW5lclJlY3RQb2ludClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN1Yih0aGlzLl9zdGFydFNjcm9sbFBvaW50KVxuICAgICAgICAgIHRoaXMuZW1pdCgnZHJhZzptb3ZlJylcbiAgICAgICAgfSxcbiAgICAgICAgJ2RyYWc6ZW5kJzogKCkgPT4ge1xuICAgICAgICAgIGVtdWxhdGlvbkRyYWdnYWJsZS5kZXN0cm95KClcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGNsb25lZEVsZW1lbnQpXG4gICAgICAgICAgcmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50LCAnZHJhZ2VlLXBsYWNlaG9sZGVyJylcbiAgICAgICAgICByZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnQsICdkcmFnZWUtYWN0aXZlJylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBjb250YWluZXJSZWN0UG9pbnQgPSBuZXcgUG9pbnQoY29udGFpbmVyUmVjdC5sZWZ0LCBjb250YWluZXJSZWN0LnRvcClcbiAgICBlbXVsYXRpb25EcmFnZ2FibGUuX3N0YXJ0U2Nyb2xsUG9pbnQgPSB0aGlzLl9zdGFydFNjcm9sbFBvaW50XG5cbiAgICBlbXVsYXRpb25EcmFnZ2FibGUubW92ZShcbiAgICAgIHRoaXMucGlubmVkUG9zaXRpb24uYWRkKGNvbnRhaW5lclJlY3RQb2ludCkuYWRkKG5ldyBQb2ludCh3aW5kb3cuc2Nyb2xsWCwgd2luZG93LnNjcm9sbFkpKVxuICAgIClcblxuICAgIGVtdWxhdGlvbkRyYWdnYWJsZS5kcmFnU3RhcnQoZXZlbnQpXG4gIH1cblxuICBkcmFnRW5kQWN0aW9uKCkge1xuICAgIHRoaXMucGluUG9zaXRpb24odGhpcy5wb3NpdGlvbilcbiAgfVxuXG4gIGdldFJlY3RhbmdsZSgpIHtcbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZSh0aGlzLnBvc2l0aW9uLCB0aGlzLmdldFNpemUoKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgaWYgKHRoaXMuYm91bmQucmVmcmVzaCkge1xuICAgICAgdGhpcy5ib3VuZC5yZWZyZXNoKClcbiAgICB9XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuaGFuZGxlci5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQpXG4gICAgdGhpcy5oYW5kbGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydClcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgdGhpcy5fbmF0aXZlRHJhZ1N0YXJ0KVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIHRoaXMuX25hdGl2ZURyYWdPdmVyKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzLl9uYXRpdmVEcm9wKVxuICAgIHRoaXMucmVzZXRFbWl0dGVyKClcblxuICAgIGNvbnN0IGluZGV4ID0gZHJhZ2dhYmxlcy5pbmRleE9mKHRoaXMpXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIGRyYWdnYWJsZXMuc3BsaWNlKGluZGV4LCAxKVxuICAgIH1cbiAgfVxuXG4gIGdldCBjb250YWluZXIoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9jb250YWluZXIgPSB0aGlzLl9jb250YWluZXIgfHwgdGhpcy5vcHRpb25zLmNvbnRhaW5lciB8fCB0aGlzLm9wdGlvbnMucGFyZW50IHx8IGdldERlZmF1bHRDb250YWluZXIodGhpcy5lbGVtZW50KSlcbiAgfVxuXG4gIGdldCBoYW5kbGVyKCkge1xuICAgIGlmICghdGhpcy5faGFuZGxlcikge1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuaGFuZGxlciA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhpcy5faGFuZGxlciA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKHRoaXMub3B0aW9ucy5oYW5kbGVyKSB8fCB0aGlzLmVsZW1lbnRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZXIgPSB0aGlzLm9wdGlvbnMuaGFuZGxlciB8fCB0aGlzLmVsZW1lbnRcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5faGFuZGxlclxuICB9XG5cbiAgZ2V0IG5hdGl2ZURyYWdBbmREcm9wKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMubmF0aXZlRHJhZ0FuZERyb3AgfHwgZmFsc2VcbiAgfVxuXG4gIGdldCBlbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3BPblRvdWNoKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wT25Ub3VjaCB8fCB0cnVlXG4gIH1cblxuICBnZXQgZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wRm9yQWxsKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wRm9yQWxsIHx8IGZhbHNlXG4gIH1cblxuICBnZXQgc2hvdWxkUmVtb3ZlWmVyb1RyYW5zbGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLnNob3VsZFJlbW92ZVplcm9UcmFuc2xhdGUgfHwgZmFsc2VcbiAgfVxuXG4gIGdldCBzY3JvbGxQb2ludCgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHdpbmRvdy5zY3JvbGxYLCB3aW5kb3cuc2Nyb2xsWSlcbiAgfVxuXG4gIGdldCBlbmFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZVxuICB9XG5cbiAgc2V0IGVuYWJsZShlbmFibGUpIHtcbiAgICBpZiAoZW5hYmxlKSB7XG4gICAgICByZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnQsICdkcmFnZWUtZGlzYWJsZScpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFkZENsYXNzKHRoaXMuZWxlbWVudCwgJ2RyYWdlZS1kaXNhYmxlJylcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlID0gZW5hYmxlXG4gIH1cbn1cblxuRHJhZ2dhYmxlLmVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKERyYWdnYWJsZSlcbkRyYWdnYWJsZS5lbWl0dGVyLm9uKCdkcmFnZ2FibGU6Y3JlYXRlJywgYWRkVG9EZWZhdWx0U2NvcGUpXG4iLCJpbXBvcnQgcmVtb3ZlSXRlbSBmcm9tICcuL3V0aWxzL3JlbW92ZS1hcnJheS1pdGVtJ1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50RW1pdHRlcidcbmltcG9ydCB7XG4gIGdldERpc3RhbmNlLFxuICBpbmRleE9mTmVhcmVzdFBvaW50XG59IGZyb20gJy4vZ2VvbWV0cnkvZGlzdGFuY2VzJ1xuXG5pbXBvcnQgRHJhZ2dhYmxlIGZyb20gJy4vZHJhZ2dhYmxlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0IGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoZHJhZ2dhYmxlcywgb3B0aW9ucz17fSkge1xuICAgIHN1cGVyKHVuZGVmaW5lZCwgb3B0aW9ucylcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHRpbWVFbmQ6IDIwMCxcbiAgICAgIHRpbWVFeGNhbmdlOiA0MDAsXG4gICAgICByYWRpdXM6IDMwXG4gICAgfSwgb3B0aW9ucylcblxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZXNcbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLl9lbmFibGUgPSB0cnVlXG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2godGhpcy5pbml0RHJhZ2dhYmxlLCB0aGlzKVxuICB9XG5cbiAgaW5pdERyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICBkcmFnZ2FibGUuZW5hYmxlID0gdGhpcy5fZW5hYmxlXG4gICAgZHJhZ2dhYmxlLm9uKCdkcmFnOm1vdmUnLCAoKSA9PiB0aGlzLm9uTW92ZShkcmFnZ2FibGUpKVxuICAgIGRyYWdnYWJsZS5kcmFnRW5kQWN0aW9uID0gKCkgPT4gZHJhZ2dhYmxlLnBpblBvc2l0aW9uKGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbiwgdGhpcy5vcHRpb25zLnRpbWVFbmQpXG4gIH1cblxuICBvbk1vdmUoZHJhZ2dhYmxlKSB7XG4gICAgY29uc3Qgc29ydGVkRHJhZ2dhYmxlcyA9IHRoaXMuZ2V0U29ydGVkRHJhZ2dhYmxlcygpXG4gICAgY29uc3QgcGlubmVkUG9zaXRpb25zID0gc29ydGVkRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uKVxuXG4gICAgY29uc3QgY3VycmVudEluZGV4ID0gc29ydGVkRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSlcbiAgICBjb25zdCB0YXJnZXRJbmRleCA9IGluZGV4T2ZOZWFyZXN0UG9pbnQocGlubmVkUG9zaXRpb25zLCBkcmFnZ2FibGUucG9zaXRpb24sIHRoaXMub3B0aW9ucy5yYWRpdXMsIHRoaXMuZGlzdGFuY2VGdW5jKVxuXG4gICAgaWYgKHRhcmdldEluZGV4ICE9PSAtMSAmJiBjdXJyZW50SW5kZXggIT09IHRhcmdldEluZGV4KSB7XG4gICAgICBpZiAodGFyZ2V0SW5kZXggPCBjdXJyZW50SW5kZXgpIHtcbiAgICAgICAgZm9yIChsZXQgaT10YXJnZXRJbmRleDsgaTxjdXJyZW50SW5kZXg7IGkrKykge1xuICAgICAgICAgIHNvcnRlZERyYWdnYWJsZXNbaV0ucGluUG9zaXRpb24ocGlubmVkUG9zaXRpb25zW2krMV0sIHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChsZXQgaT1jdXJyZW50SW5kZXg7IGk8dGFyZ2V0SW5kZXg7IGkrKykge1xuICAgICAgICAgIHNvcnRlZERyYWdnYWJsZXNbaSsxXS5waW5Qb3NpdGlvbihwaW5uZWRQb3NpdGlvbnNbaV0sIHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZHJhZ2dhYmxlLm5hdGl2ZURyYWdBbmREcm9wKSB7XG4gICAgICAgIGRyYWdnYWJsZS5waW5Qb3NpdGlvbihwaW5uZWRQb3NpdGlvbnNbdGFyZ2V0SW5kZXhdKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uID0gcGlubmVkUG9zaXRpb25zW3RhcmdldEluZGV4XVxuICAgICAgfVxuXG4gICAgICB0aGlzLmVtaXQoJ2xpc3Q6Y2hhbmdlJylcbiAgICB9XG4gIH1cblxuICBnZXRDdXJyZW50UGlubmVkUG9zaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbi5jbG9uZSgpKVxuICB9XG5cbiAgZ2V0U29ydGVkRHJhZ2dhYmxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5kcmFnZ2FibGVzLnNvcnQodGhpcy5zb3J0aW5nLmJpbmQodGhpcykpXG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucmVzZXRQb3NpdGlvblRvSW5pdGlhbCgpKVxuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucmVmcmVzaCgpKVxuICB9XG5cbiAgYWRkKGRyYWdnYWJsZXMpIHtcbiAgICBpZiAoIShkcmFnZ2FibGVzIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgICBkcmFnZ2FibGVzID0gW2RyYWdnYWJsZXNdXG4gICAgfVxuICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB0aGlzLmluaXREcmFnZ2FibGUoZHJhZ2dhYmxlKSlcbiAgICB0aGlzLmRyYWdnYWJsZXMgPSB0aGlzLmRyYWdnYWJsZXMuY29uY2F0KGRyYWdnYWJsZXMpXG4gIH1cblxuICByZW1vdmUoZHJhZ2dhYmxlcykge1xuICAgIGNvbnN0IGluaXRpYWxQb3NpdGlvbnMgPSB0aGlzLmRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5pbml0aWFsUG9zaXRpb24pXG4gICAgY29uc3QgbGlzdCA9IFtdXG4gICAgY29uc3Qgc29ydGVkRHJhZ2dhYmxlcyA9IHRoaXMuZ2V0U29ydGVkRHJhZ2dhYmxlcygpXG5cbiAgICBpZiAoIShkcmFnZ2FibGVzIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgICBkcmFnZ2FibGVzID0gW2RyYWdnYWJsZXNdXG4gICAgfVxuXG4gICAgZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5yZXNldE9uKCdkcmFnOmVuZCcpXG4gICAgICBkcmFnZ2FibGUucmVzZXRPbignZHJhZzptb3ZlJylcbiAgICAgIHJlbW92ZUl0ZW0odGhpcy5kcmFnZ2FibGVzLCBkcmFnZ2FibGUpXG4gICAgfSlcblxuICAgIGxldCBqID0gMFxuICAgIHNvcnRlZERyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBpZiAodGhpcy5kcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTEpIHtcbiAgICAgICAgaWYgKGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbiAhPT0gaW5pdGlhbFBvc2l0aW9uc1tqXSkge1xuICAgICAgICAgIGRyYWdnYWJsZS5waW5Qb3NpdGlvbihpbml0aWFsUG9zaXRpb25zW2pdLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICAgIH1cbiAgICAgICAgZHJhZ2dhYmxlLmluaXRpYWxQb3NpdGlvbiA9IGluaXRpYWxQb3NpdGlvbnNbal1cbiAgICAgICAgaisrXG4gICAgICAgIGxpc3QucHVzaChkcmFnZ2FibGUpXG4gICAgICB9XG4gICAgfSlcbiAgICB0aGlzLmRyYWdnYWJsZXMgPSBsaXN0XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLnJlbW92ZSh0aGlzLmRyYWdnYWJsZXMuc2xpY2UoKSlcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLmRlc3Ryb3koKSlcbiAgfVxuXG4gIHNvcnRpbmcoZHJhZ2dhYmxlQSwgZHJhZ2dhYmxlQikge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuc29ydGluZykge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5zb3J0aW5nKGRyYWdnYWJsZUEsIGRyYWdnYWJsZUIpXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChkcmFnZ2FibGVBLnBpbm5lZFBvc2l0aW9uLnkgPCBkcmFnZ2FibGVCLnBpbm5lZFBvc2l0aW9uLnkpIHJldHVybiAtMVxuICAgICAgaWYgKGRyYWdnYWJsZUEucGlubmVkUG9zaXRpb24ueSA+IGRyYWdnYWJsZUIucGlubmVkUG9zaXRpb24ueSkgcmV0dXJuIDFcbiAgICAgIGlmIChkcmFnZ2FibGVBLnBpbm5lZFBvc2l0aW9uLnggPCBkcmFnZ2FibGVCLnBpbm5lZFBvc2l0aW9uLngpIHJldHVybiAtMVxuICAgICAgaWYgKGRyYWdnYWJsZUEucGlubmVkUG9zaXRpb24ueCA+IGRyYWdnYWJsZUIucGlubmVkUG9zaXRpb24ueCkgcmV0dXJuIDFcbiAgICAgIHJldHVybiAwXG4gICAgfVxuICB9XG5cbiAgZ2V0IGRpc3RhbmNlRnVuYygpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmdldERpc3RhbmNlIHx8IGdldERpc3RhbmNlXG4gIH1cblxuICBnZXQgcG9zaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmdldEN1cnJlbnRQaW5uZWRQb3NpdGlvbnMoKVxuICB9XG5cbiAgc2V0IHBvc2l0aW9ucyhwb3NpdGlvbnMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gJ3dyb25nIGFycmF5IGxlbmd0aCdcbiAgICBpZiAocG9zaXRpb25zLmxlbmd0aCA9PT0gdGhpcy5kcmFnZ2FibGVzLmxlbmd0aCkge1xuICAgICAgcG9zaXRpb25zLmZvckVhY2goKHBvaW50LCBpKSA9PiB7XG4gICAgICAgIHRoaXMuZHJhZ2dhYmxlc1tpXS5waW5Qb3NpdGlvbihwb2ludClcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG1lc3NhZ2VcbiAgICB9XG4gIH1cblxuICBnZXQgZW5hYmxlKCkge1xuICAgIHJldHVybiB0aGlzLl9lbmFibGVcbiAgfVxuXG4gIHNldCBlbmFibGUoZW5hYmxlKSB7XG4gICAgdGhpcy5fZW5hYmxlID0gZW5hYmxlXG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLmVuYWJsZSA9IGVuYWJsZVxuICAgIH0pXG4gIH1cblxuICBzdGF0aWMgZmFjdG9yeShjb250YWluZXJFbGVtZW50LCBlbGVtZW50cywgb3B0aW9ucz17fSkge1xuICAgIGNvbnN0IGRyYWdnYWJsZXMgPSBBcnJheS5mcm9tKGVsZW1lbnRzKS5tYXAoKGVsZW1lbnQpID0+IHtcbiAgICAgIHJldHVybiBuZXcgRHJhZ2dhYmxlKGVsZW1lbnQsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBjb250YWluZXI6IGNvbnRhaW5lckVsZW1lbnRcbiAgICAgIH0sIG9wdGlvbnMuZHJhZ2dhYmxlIHx8IHt9KSlcbiAgICB9KVxuICAgIHJldHVybiBuZXcgTGlzdChkcmFnZ2FibGVzLCBvcHRpb25zLmxpc3QgfHwge30pXG4gIH1cbn1cbiIsImltcG9ydCBMaXN0IGZyb20gJy4vbGlzdCdcbmltcG9ydCB7IGluZGV4T2ZOZWFyZXN0UG9pbnQsIGdldFlEaWZmZXJlbmNlIH0gZnJvbSAnLi9nZW9tZXRyeS9kaXN0YW5jZXMnXG5cbmltcG9ydCBEcmFnZ2FibGUgZnJvbSAnLi9kcmFnZ2FibGUnXG5cbmNvbnN0IGFycmF5TW92ZSA9IChhcnJheSwgZnJvbSwgdG8pID0+IHtcbiAgYXJyYXkuc3BsaWNlKHRvIDwgMCA/IGFycmF5Lmxlbmd0aCArIHRvIDogdG8sIDAsIGFycmF5LnNwbGljZShmcm9tLCAxKVswXSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnViYmxpbmdMaXN0IGV4dGVuZHMgTGlzdCB7XG4gIGNvbnN0cnVjdG9yKGRyYWdnYWJsZXMsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcihkcmFnZ2FibGVzLCBvcHRpb25zKVxuICB9XG5cbiAgaW5pdERyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICBkcmFnZ2FibGUub24oJ2RyYWc6c3RhcnQnLCAoKSA9PiB0aGlzLmF1dG9EZXRlY3RWZXJ0aWNhbEdhcChkcmFnZ2FibGUpKVxuICAgIHN1cGVyLmluaXREcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICB9XG5cbiAgYXV0b0RldGVjdFZlcnRpY2FsR2FwKCkge1xuICAgIGlmICh0aGlzLmRyYWdnYWJsZXMubGVuZ3RoID49IDIpIHtcbiAgICAgIGNvbnN0IHNvcnRlZCA9IHRoaXMuZ2V0U29ydGVkRHJhZ2dhYmxlcygpXG5cbiAgICAgIHRoaXMudmVydGljYWxHYXAgPSBzb3J0ZWRbMV0ucGlubmVkUG9zaXRpb24ueSAtIHNvcnRlZFswXS5waW5uZWRQb3NpdGlvbi55IC0gc29ydGVkWzBdLmdldFNpemUoKS55XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudmVydGljYWxHYXAgPSAwXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZHJhZ2dhYmxlcy5sZW5ndGggPj0gMSkge1xuICAgICAgdGhpcy5zdGFydFBvc2l0aW9uID0gdGhpcy5kcmFnZ2FibGVzWzBdLnBpbm5lZFBvc2l0aW9uXG4gICAgfVxuICB9XG5cbiAgb25Nb3ZlKGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IHNvcnRlZERyYWdnYWJsZXMgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuICAgIGNvbnN0IHBpbm5lZFBvc2l0aW9ucyA9IHNvcnRlZERyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbilcblxuICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IHNvcnRlZERyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpXG4gICAgY29uc3QgdGFyZ2V0SW5kZXggPSBpbmRleE9mTmVhcmVzdFBvaW50KHBpbm5lZFBvc2l0aW9ucywgZHJhZ2dhYmxlLnBvc2l0aW9uLCB0aGlzLm9wdGlvbnMucmFkaXVzLCB0aGlzLmRpc3RhbmNlRnVuYylcblxuICAgIGlmICh0YXJnZXRJbmRleCAhPT0gLTEgJiYgY3VycmVudEluZGV4ICE9PSB0YXJnZXRJbmRleCkge1xuICAgICAgYXJyYXlNb3ZlKHNvcnRlZERyYWdnYWJsZXMsIGN1cnJlbnRJbmRleCwgdGFyZ2V0SW5kZXgpXG4gICAgICB0aGlzLmJ1Ymxpbmcoc29ydGVkRHJhZ2dhYmxlcywgZHJhZ2dhYmxlKVxuICAgICAgdGhpcy5lbWl0KCdsaXN0OmNoYW5nZScpXG4gICAgfVxuICB9XG5cbiAgYnVibGluZyhzb3J0ZWREcmFnZ2FibGVzLCBjdXJyZW50RHJhZ2dhYmxlKSB7XG4gICAgY29uc3QgY3VycmVudFBvc2l0aW9uID0gdGhpcy5zdGFydFBvc2l0aW9uLmNsb25lKClcblxuICAgIHNvcnRlZERyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBpZiAoIWRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbi5jb21wYXJlKGN1cnJlbnRQb3NpdGlvbikpIHtcbiAgICAgICAgaWYgKGRyYWdnYWJsZSA9PT0gY3VycmVudERyYWdnYWJsZSAmJiAhY3VycmVudERyYWdnYWJsZS5uYXRpdmVEcmFnQW5kRHJvcCkge1xuICAgICAgICAgIGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbiA9IGN1cnJlbnRQb3NpdGlvbi5jbG9uZSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKGN1cnJlbnRQb3NpdGlvbiwgKGRyYWdnYWJsZSA9PT0gY3VycmVudERyYWdnYWJsZSkgPyAwIDogdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGN1cnJlbnRQb3NpdGlvbi55ID0gY3VycmVudFBvc2l0aW9uLnkgKyBkcmFnZ2FibGUuZ2V0U2l6ZSgpLnkgKyB0aGlzLnZlcnRpY2FsR2FwXG4gICAgfSlcbiAgfVxuXG4gIGdldCBkaXN0YW5jZUZ1bmMoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5nZXREaXN0YW5jZSB8fCBnZXRZRGlmZmVyZW5jZVxuICB9XG5cbiAgc3RhdGljIGZhY3RvcnkoY29udGFpbmVyRWxlbWVudCwgZWxlbWVudHMsIG9wdGlvbnM9e30pIHtcbiAgICBjb25zdCBkcmFnZ2FibGVzID0gQXJyYXkuZnJvbShlbGVtZW50cykubWFwKChlbGVtZW50KSA9PiB7XG4gICAgICByZXR1cm4gbmV3IERyYWdnYWJsZShlbGVtZW50LCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgY29udGFpbmVyOiBjb250YWluZXJFbGVtZW50XG4gICAgICB9LCBvcHRpb25zLmRyYWdnYWJsZSB8fCB7fSkpXG4gICAgfSlcbiAgICByZXR1cm4gbmV3IEJ1YmJsaW5nTGlzdChkcmFnZ2FibGVzLCBvcHRpb25zLmxpc3QgfHwge30pXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJnZXRTdW1WYWx1ZU9mU3R5bGVSdWxlcyIsImVsZW1lbnQiLCJydWxlcyIsInJlZHVjZSIsInN1bSIsInJ1bGUiLCJwYXJzZUludCIsIndpbmRvdyIsImdldENvbXB1dGVkU3R5bGUiLCJQb2ludCIsIngiLCJ5IiwicCIsImsiLCJwYXJlbnQiLCJwYXJlbnROb2RlIiwiZWxlbWVudFJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJwYXJlbnRSZWN0IiwibGVmdCIsInRvcCIsImlzQ29udGVudEJveFNpemUiLCJ3aWR0aCIsImhlaWdodCIsIlJlY3RhbmdsZSIsInBvc2l0aW9uIiwic2l6ZSIsImFkZCIsIm11bHQiLCJyZWN0IiwiTWF0aCIsIm1pbiIsIm1heCIsInN1YiIsInJlY3RhbmdsZSIsImluY2x1ZGVQb2ludCIsImdldFAzIiwiYXhpcyIsInNlbEF4aXMiLCJjcm9zc1JlY3RhbmdsZSIsImFuZCIsInRoaXNDZW50ZXIiLCJnZXRDZW50ZXIiLCJyZWN0Q2VudGVyIiwic2lnbiIsIm9mZnNldCIsImVsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic3R5bGUiLCJpc0NvbnNpZGVyVHJhbnNsYXRlIiwiZWxlbWVudE9mZnNldCIsImVsZW1lbnRTaXplIiwiaGFzQ2xhc3MiLCJjIiwicmUiLCJSZWdFeHAiLCJ0ZXN0IiwiY2xhc3NOYW1lIiwiYWRkQ2xhc3MiLCJyZXBsYWNlIiwicmVtb3ZlQ2xhc3MiLCJnZXREZWZhdWx0Q29udGFpbmVyIiwiY29udGFpbmVyIiwidGFnTmFtZSIsIkV2ZW50RW1pdHRlciIsImNvbnRleHQiLCJvcHRpb25zIiwiZXZlbnRzIiwib24iLCJPYmplY3QiLCJlbnRyaWVzIiwiZXZlbnROYW1lIiwiZm4iLCJpbnRlcnJ1cHRlZCIsImFyZ3MiLCJzbGljZSIsImNhbGwiLCJhcmd1bWVudHMiLCJmdW5jIiwiYXBwbHkiLCJwdXNoIiwidW5zaGlmdCIsImluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsImdldERpc3RhbmNlIiwicDEiLCJwMiIsImR4IiwiZHkiLCJzcXJ0IiwiZ2V0WERpZmZlcmVuY2UiLCJhYnMiLCJnZXRZRGlmZmVyZW5jZSIsInRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3RvcnkiLCJwb3ciLCJpbmRleE9mTmVhcmVzdFBvaW50IiwiYXJyIiwidmFsIiwicmFkaXVzIiwiZ2V0RGlzdGFuY2VGdW5jIiwiaSIsInRlbXAiLCJsZW5ndGgiLCJkaXJlY3RDcm9zc2luZyIsIkwxUDEiLCJMMVAyIiwiTDJQMSIsIkwyUDIiLCJrMSIsImsyIiwiYjEiLCJiMiIsImJvdW5kVG9MaW5lIiwiQSIsIkIiLCJQIiwiQVAiLCJBQiIsImFiMiIsImFwX2FiIiwidCIsImdldFBvaW50T25MaW5lQnlMZW5naHQiLCJMUDEiLCJMUDIiLCJsZW5naHQiLCJwZXJjZW50IiwiYWRkUG9pbnRUb0JvdW5kUG9pbnRzIiwiYm91bmRwb2ludHMiLCJwb2ludCIsImlzUmlnaHQiLCJyZXN1bHQiLCJmaWx0ZXIiLCJiUG9pbnQiLCJnZXRBbmdsZURpZmYiLCJhbHBoYSIsImJldGEiLCJtaW5BbmdsZSIsIm1heEFuZ2xlIiwiUEkiLCJnZXRBbmdsZSIsImRpZmYiLCJub3JtYWxpemVBbmdsZSIsImF0YW4yIiwiYm91bmRBbmdsZSIsImRtaW4iLCJkbWF4IiwiZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtIiwiYW5nbGUiLCJjZW50ZXIiLCJjb3MiLCJzaW4iLCJCb3VuZCIsIl9zaXplIiwiaW5zdGFuY2UiLCJib3VuZCIsImJpbmQiLCJCb3VuZFRvUmVjdGFuZ2xlIiwiY2FsY1BvaW50IiwiY2xvbmUiLCJyZWN0UDIiLCJCb3VuZFRvRWxlbWVudCIsImZyb21FbGVtZW50IiwiQm91bmRUb0xpbmVYIiwic3RhcnRZIiwiZW5kWSIsIkJvdW5kVG9MaW5lWSIsInN0YXJ0WCIsImVuZFgiLCJCb3VuZFRvTGluZSIsInN0YXJ0UG9pbnQiLCJlbmRQb2ludCIsInNvbWVLIiwiY29zQmV0YSIsInNpbkJldGEiLCJwb2ludDIiLCJuZXdFbmRQb2ludCIsInBvaW50Q3Jvc3NpbmciLCJCb3VuZFRvQ2lyY2xlIiwiQm91bmRUb0FyYyIsInN0YXJ0QW5nbGUiLCJlbmRBbmdsZSIsIl9zdGFydEFuZ2xlIiwiX2VuZEFuZ2xlIiwiYXJyYXkiLCJyYW5nZSIsInN0YXJ0Iiwic3RvcCIsInN0ZXAiLCJCYXNpY1N0cmF0ZWd5IiwiTm90Q3Jvc3NpbmdTdHJhdGVneSIsInJlY3RhbmdsZUxpc3QiLCJpbmRleGVzT2ZOZXdzIiwic3RhdGljUmVjdGFuZ2xlSW5kZXhlcyIsImluZGV4ZXMiLCJfcmVjdCIsImZvckVhY2giLCJyZW1vdmFibGUiLCJpbmRleE9mU3RhdGljIiwic3RhdGljUmVjdCIsIm1vdmVUb0JvdW5kIiwic29tZSIsImJvdW5kUmVjdCIsImdldFNxdWFyZSIsIm9kbERyYWdnYWJsZXNMaXN0IiwibmV3RHJhZ2dhYmxlcyIsImluZGV4T2ZOZXdzIiwiZHJhZ2dhYmxlcyIsImNvbmNhdCIsImRyYWdnYWJsZSIsIkZsb2F0TGVmdFN0cmF0ZWd5IiwiYXNzaWduIiwicGFkZGluZ1RvcExlZnQiLCJwYWRkaW5nQm90dG9tUmlnaHQiLCJ5R2FwQmV0d2VlbkRyYWdnYWJsZXMiLCJnZXRQb3NpdGlvbiIsIl9pbmRleGVzT2ZOZXdzIiwiZ2V0UDIiLCJib3VuZGFyeVBvaW50cyIsInJlY3RJbmRleCIsImlzVmFsaWQiLCJuZXdMaXN0IiwibGlzdE9sZFBvc2l0aW9uIiwibWFwIiwibmV3RHJhZ2dhYmxlIiwiRmxvYXRSaWdodFN0cmF0ZWd5IiwicGFkZGluZ1RvcFJpZ2h0IiwicGFkZGluZ0JvdHRvbUxlZnQiLCJwYWRkaW5nQm90dG9tTmVnTGVmdCIsImdldFA0IiwiYWRkVG9EZWZhdWx0U2NvcGUiLCJ0YXJnZXQiLCJkZWZhdWx0U2NvcGUiLCJhZGRUYXJnZXQiLCJUYXJnZXQiLCJ1bmRlZmluZWQiLCJ0aW1lRW5kIiwidGltZUV4Y2FuZ2UiLCJwb3NpdGlvbmluZ1N0cmF0ZWd5Iiwic3RyYXRlZ3kiLCJnZXRSZWN0YW5nbGUiLCJ0YXJnZXRzIiwiZW1pdHRlciIsImVtaXQiLCJzdGFydEJvdW5kaW5nIiwiaW5pdCIsImJvdW5kaW5nIiwiaW5kZXhlc09mTmV3IiwicG9zaXRpb25pbmciLCJvbGREcmFnZ2FibGVzIiwic29ydGluZyIsInJlY3RhbmdsZXMiLCJpbm5lckRyYWdnYWJsZXMiLCJzZXRQb3NpdGlvbiIsImNhdGNoRHJhZ2dhYmxlIiwidGFyZ2V0UmVjdGFuZ2xlIiwiZHJhZ2dhYmxlU3F1YXJlIiwic2NvcGVzIiwic2NvcGUiLCJyZW1vdmVJdGVtIiwibmV3RHJhZ2dhYmxlc0luZGV4IiwiZ2V0U2l6ZSIsImFkZFJlbW92ZU9uTW92ZSIsInRpbWUiLCJtb3ZlIiwiaW5pdGlhbFBvc2l0aW9uIiwicHVzaElubmVyRHJhZ2dhYmxlIiwicmVtb3ZlSGFuZGxlciIsInJlbW92ZSIsInVuc3Vic2NyaWJlIiwiX2NvbnRhaW5lciIsIlNjb3BlIiwiZHJhZ0VuZEFjdGlvbiIsIm9uRW5kIiwic2hvdFRhcmdldHMiLCJzb3J0IiwiYSIsImIiLCJwaW5Qb3NpdGlvbiIsInJlc2V0IiwicmVmcmVzaCIsInBvc2l0aW9ucyIsIm1lc3NhZ2UiLCJ0YXJnZXRJbmRleGVzIiwiY3VycmVudFNjb3BlIiwiYWRkRHJhZ2dhYmxlVG9TY29wZSIsImFkZERyYWdnYWJsZSIsIkRyYWdnYWJsZSIsImludGVycnVwdCIsImFkZFRhcmdldFRvU2NvcGUiLCJwcmVwZW5kT24iLCJjaGVja1N1cHBvcnRQYXNzaXZlRXZlbnRzIiwicGFzc2l2ZVN1cHBvcnRlZCIsImRlZmluZVByb3BlcnR5IiwiZ2V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJfZXJyIiwiaXNTdXBwb3J0UGFzc2l2ZUV2ZW50cyIsImlzVG91Y2giLCJtb3VzZUV2ZW50cyIsImVuZCIsInRvdWNoRXZlbnRzIiwidHJhbnNmb3JtUHJvcGVydHkiLCJnZXRTdHlsZVByb3BlcnR5IiwidHJhbnNpdGlvblByb3BlcnR5IiwiZ2V0VG91Y2hCeUlEIiwidG91Y2hJZCIsImNoYW5nZWRUb3VjaGVzIiwiaWRlbnRpZmllciIsInByZXZlbnREb3VibGVJbml0IiwiZXhpc3RpbmciLCJjb3B5U3R5bGVzIiwic291cmNlIiwiZGVzdGluYXRpb24iLCJjcyIsImtleSIsImNoaWxkcmVuIiwiX2VuYWJsZSIsInN0YXJ0UG9zaXRpb25pbmciLCJzdGFydExpc3RlbmluZyIsIl9zZXREZWZhdWx0VHJhbnNpdGlvbiIsInBpbm5lZFBvc2l0aW9uIiwiX2RyYWdTdGFydCIsImV2ZW50IiwiZHJhZ1N0YXJ0IiwiX2RyYWdNb3ZlIiwiZHJhZ01vdmUiLCJfZHJhZ0VuZCIsImRyYWdFbmQiLCJfbmF0aXZlRHJhZ1N0YXJ0IiwibmF0aXZlRHJhZ1N0YXJ0IiwiX25hdGl2ZURyYWdPdmVyIiwibmF0aXZlRHJhZ092ZXIiLCJfbmF0aXZlRHJhZ0VuZCIsIm5hdGl2ZURyYWdFbmQiLCJfbmF0aXZlRHJvcCIsIm5hdGl2ZURyb3AiLCJfc2Nyb2xsIiwib25TY3JvbGwiLCJoYW5kbGVyIiwicGFzc2l2ZSIsIl90cmFuc2Zvcm1Qb3NpdGlvbiIsInRyYW5zaXRpb24iLCJ0cmFuc2l0aW9uQ3NzIiwidHJhbnNsYXRlQ3NzIiwidHJhbnNmb3JtIiwic2hvdWxkUmVtb3ZlWmVyb1RyYW5zbGF0ZSIsImlzU2lsZW50IiwiZGV0ZXJtaW5lRGlyZWN0aW9uIiwiX3NldFRyYW5zaXRpb24iLCJfc2V0VHJhbnNsYXRlIiwic2lsZW50IiwibGVmdERpcmVjdGlvbiIsInJpZ2h0RGlyZWN0aW9uIiwidXBEaXJlY3Rpb24iLCJkb3duRGlyZWN0aW9uIiwiY3VycmVudEV2ZW50IiwiaXNUb3VjaEV2ZW50IiwiVG91Y2hFdmVudCIsInRvdWNoUG9pbnQiLCJfc3RhcnRUb3VjaFBvaW50IiwicGFnZVgiLCJjbGllbnRYIiwicGFnZVkiLCJjbGllbnRZIiwiX3N0YXJ0UG9zaXRpb24iLCJfdG91Y2hJZCIsIl9zdGFydFNjcm9sbFBvaW50Iiwic2Nyb2xsWCIsInNjcm9sbFkiLCJzdG9wUHJvcGFnYXRpb24iLCJIVE1MSW5wdXRFbGVtZW50IiwiZm9jdXMiLCJuYXRpdmVEcmFnQW5kRHJvcCIsInByZXZlbnREZWZhdWx0IiwiaXNTYWZhcmkiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJlbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3BPblRvdWNoIiwiZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wRm9yQWxsIiwiZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wIiwiaXNEcmFnZ2luZyIsInRvdWNoIiwic2Nyb2xsUG9pbnQiLCJyZW1vdmVBdHRyaWJ1dGUiLCJfZXZlbnQiLCJkYXRhVHJhbnNmZXIiLCJzZXREYXRhIiwiZWZmZWN0QWxsb3dlZCIsImRyb3BFZmZlY3QiLCJjb250YWluZXJSZWN0IiwiY2xvbmVkRWxlbWVudCIsImNsb25lTm9kZSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImVtdWxhdGlvbkRyYWdnYWJsZSIsImNvbnRhaW5lclJlY3RQb2ludCIsImRlc3Ryb3kiLCJyZW1vdmVDaGlsZCIsInJlc2V0RW1pdHRlciIsIl9oYW5kbGVyIiwiZW5hYmxlIiwiTGlzdCIsImluaXREcmFnZ2FibGUiLCJvbk1vdmUiLCJzb3J0ZWREcmFnZ2FibGVzIiwiZ2V0U29ydGVkRHJhZ2dhYmxlcyIsInBpbm5lZFBvc2l0aW9ucyIsImN1cnJlbnRJbmRleCIsInRhcmdldEluZGV4IiwiZGlzdGFuY2VGdW5jIiwicmVzZXRQb3NpdGlvblRvSW5pdGlhbCIsIkFycmF5IiwiaW5pdGlhbFBvc2l0aW9ucyIsImxpc3QiLCJyZXNldE9uIiwiaiIsImRyYWdnYWJsZUEiLCJkcmFnZ2FibGVCIiwiZ2V0Q3VycmVudFBpbm5lZFBvc2l0aW9ucyIsImNvbnRhaW5lckVsZW1lbnQiLCJlbGVtZW50cyIsImZyb20iLCJhcnJheU1vdmUiLCJ0byIsIkJ1YmJsaW5nTGlzdCIsImF1dG9EZXRlY3RWZXJ0aWNhbEdhcCIsInNvcnRlZCIsInZlcnRpY2FsR2FwIiwic3RhcnRQb3NpdGlvbiIsImJ1YmxpbmciLCJjdXJyZW50RHJhZ2dhYmxlIiwiY3VycmVudFBvc2l0aW9uIiwiY29tcGFyZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBQUEsU0FBU0EsdUJBQVQsQ0FBaUNDLE9BQWpDLEVBQTBDQyxLQUExQyxFQUFpRDtFQUMvQyxTQUFPQSxLQUFLLENBQUNDLE1BQU4sQ0FBYSxVQUFDQyxHQUFELEVBQU1DLElBQU4sRUFBZTtFQUNqQyxXQUFPRCxHQUFHLEdBQUdFLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QlAsT0FBeEIsRUFBaUNJLElBQWpD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
