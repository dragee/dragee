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
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
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
    Object.defineProperty(subClass, "prototype", {
      writable: false
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

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
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
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get() {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(arguments.length < 3 ? target : receiver);
        }

        return desc.value;
      };
    }

    return _get.apply(this, arguments);
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;

    var _s, _e;

    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
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

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

    if (!it) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;

        var F = function () {};

        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function () {
        it = it.call(o);
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  function getSumValueOfStyleRules(element, rules) {
    return rules.reduce(function (sum, rule) {
      return sum + parseInt(window.getComputedStyle(element)[rule] || 0);
    }, 0);
  }
  /** Class representing a point. */


  var Point = /*#__PURE__*/function () {
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

  var Rectangle = /*#__PURE__*/function () {
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

  function getDefaultContainer(element) {
    var container = element.parentNode;

    while (container.parentNode && window.getComputedStyle(container)['position'] === 'static' && container.tagName !== 'BODY') {
      container = container.parentNode;
    }

    return container;
  }

  var EventEmitter = /*#__PURE__*/function () {
    function EventEmitter() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, EventEmitter);

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

        var _iterator = _createForOfIteratorHelper(this.events[eventName]),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var func = _step.value;
            func.apply(void 0, _toConsumableArray(args));

            if (this.interrupted) {
              return;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
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

  var Bound = /*#__PURE__*/function () {
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
  var BoundToRectangle = /*#__PURE__*/function (_Bound) {
    _inherits(BoundToRectangle, _Bound);

    var _super = _createSuper(BoundToRectangle);

    function BoundToRectangle(rectangle) {
      var _this;

      _classCallCheck(this, BoundToRectangle);

      _this = _super.call(this);
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
  var BoundToElement = /*#__PURE__*/function (_BoundToRectangle) {
    _inherits(BoundToElement, _BoundToRectangle);

    var _super2 = _createSuper(BoundToElement);

    function BoundToElement(element, container) {
      var _this2;

      _classCallCheck(this, BoundToElement);

      _this2 = _super2.call(this, Rectangle.fromElement(element, container));
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
  var BoundToLineX = /*#__PURE__*/function (_Bound2) {
    _inherits(BoundToLineX, _Bound2);

    var _super3 = _createSuper(BoundToLineX);

    function BoundToLineX(x, startY, endY) {
      var _this3;

      _classCallCheck(this, BoundToLineX);

      _this3 = _super3.call(this);
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
  var BoundToLineY = /*#__PURE__*/function (_Bound3) {
    _inherits(BoundToLineY, _Bound3);

    var _super4 = _createSuper(BoundToLineY);

    function BoundToLineY(y, startX, endX) {
      var _this4;

      _classCallCheck(this, BoundToLineY);

      _this4 = _super4.call(this);
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
  var BoundToLine = /*#__PURE__*/function (_Bound4) {
    _inherits(BoundToLine, _Bound4);

    var _super5 = _createSuper(BoundToLine);

    function BoundToLine(startPoint, endPoint) {
      var _this5;

      _classCallCheck(this, BoundToLine);

      _this5 = _super5.call(this);
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
  var BoundToCircle = /*#__PURE__*/function (_Bound5) {
    _inherits(BoundToCircle, _Bound5);

    var _super6 = _createSuper(BoundToCircle);

    function BoundToCircle(center, radius) {
      var _this6;

      _classCallCheck(this, BoundToCircle);

      _this6 = _super6.call(this);
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
  var BoundToArc = /*#__PURE__*/function (_BoundToCircle) {
    _inherits(BoundToArc, _BoundToCircle);

    var _super7 = _createSuper(BoundToArc);

    function BoundToArc(center, radius, startAngle, endAngle) {
      var _this7;

      _classCallCheck(this, BoundToArc);

      _this7 = _super7.call(this, center, radius);
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

  var BasicStrategy = /*#__PURE__*/function () {
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

  var NotCrossingStrategy = /*#__PURE__*/function (_BasicStrategy) {
    _inherits(NotCrossingStrategy, _BasicStrategy);

    var _super = _createSuper(NotCrossingStrategy);

    function NotCrossingStrategy() {
      _classCallCheck(this, NotCrossingStrategy);

      return _super.apply(this, arguments);
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

  var FloatLeftStrategy = /*#__PURE__*/function (_BasicStrategy2) {
    _inherits(FloatLeftStrategy, _BasicStrategy2);

    var _super2 = _createSuper(FloatLeftStrategy);

    function FloatLeftStrategy(rectangle) {
      var _this2;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, FloatLeftStrategy);

      _this2 = _super2.call(this, rectangle, options);
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

  var FloatRightStrategy = /*#__PURE__*/function (_FloatLeftStrategy) {
    _inherits(FloatRightStrategy, _FloatLeftStrategy);

    var _super3 = _createSuper(FloatRightStrategy);

    function FloatRightStrategy(rectangle) {
      var _this5;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, FloatRightStrategy);

      _this5 = _super3.call(this, rectangle, options);
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

  var addToDefaultScope$1 = function addToDefaultScope(target) {
    defaultScope.addTarget(target);
  };

  var Target = /*#__PURE__*/function (_EventEmitter) {
    _inherits(Target, _EventEmitter);

    var _super = _createSuper(Target);

    function Target(element, draggables) {
      var _this;

      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      _classCallCheck(this, Target);

      _this = _super.call(this, options);

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
  Target.emitter = new EventEmitter();
  Target.emitter.on('target:create', addToDefaultScope$1);

  var scopes = [];

  var Scope = /*#__PURE__*/function (_EventEmitter) {
    _inherits(Scope, _EventEmitter);

    var _super = _createSuper(Scope);

    function Scope(draggables, targets) {
      var _this;

      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      _classCallCheck(this, Scope);

      _this = _super.call(this, options);
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
  var isSupportPassiveEvents$1 = isSupportPassiveEvents;

  var isTouch = ('ontouchstart' in window);
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

  function addToDefaultScope(draggable) {
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

  var Draggable = /*#__PURE__*/function (_EventEmitter) {
    _inherits(Draggable, _EventEmitter);

    var _super = _createSuper(Draggable);

    function Draggable(element) {
      var _this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, Draggable);

      _this = _super.call(this, options);
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
        if (this.options.bound) {
          this.bounding = {
            bound: this.options.bound
          };
        } else {
          this.bounding = new BoundToElement(this.container, this.container);
        }
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

        this.handler.addEventListener(touchEvents.start, this._dragStart, isSupportPassiveEvents$1 ? {
          passive: false
        } : false);
        this.handler.addEventListener(mouseEvents.start, this._dragStart, isSupportPassiveEvents$1 ? {
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
            document.addEventListener(mouseEvents.end, this._nativeDragEnd, isSupportPassiveEvents$1 ? {
              passive: false
            } : false);
          }
        } else {
          document.addEventListener(touchEvents.move, this._dragMove, isSupportPassiveEvents$1 ? {
            passive: false
          } : false);
          document.addEventListener(mouseEvents.move, this._dragMove, isSupportPassiveEvents$1 ? {
            passive: false
          } : false);
          document.addEventListener(touchEvents.end, this._dragEnd, isSupportPassiveEvents$1 ? {
            passive: false
          } : false);
          document.addEventListener(mouseEvents.end, this._dragEnd, isSupportPassiveEvents$1 ? {
            passive: false
          } : false);
        }

        window.addEventListener('scroll', this._scroll);
        this.isDragging = true;
        this.emit('drag:start');
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
        this.element.classList.remove('dragee-active');
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
        this.element.classList.add('dragee-active');
      }
    }, {
      key: "dragEnd",
      value: function dragEnd(event) {
        var _this3 = this;

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
        setTimeout(function () {
          return _this3.element.classList.remove('dragee-active');
        });
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
        this.element.classList.add('dragee-placeholder');
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
        this.element.classList.remove('dragee-placeholder');
        this.dragEndAction();
        this.emit('drag:end');
        document.removeEventListener('dragover', this._nativeDragOver);
        document.removeEventListener('dragend', this._nativeDragEnd);
        document.removeEventListener(mouseEvents.end, this._nativeDragEnd);
        document.removeEventListener('drop', this._nativeDrop);
        window.removeEventListener('scroll', this._scroll);
        this.isDragging = false;
        this.element.removeAttribute('draggable');
        this.element.classList.remove('dragee-active');
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
        var _this4 = this;

        var containerRect = this.container.getBoundingClientRect();
        var clonedElement = this.element.cloneNode(true);
        clonedElement.style[transformProperty] = '';
        copyStyles(this.element, clonedElement);
        clonedElement.style.position = 'absolute';
        document.body.appendChild(clonedElement);
        this.element.classList.add('dragee-placeholder');
        var emulationDraggable = new Draggable(clonedElement, {
          container: document.body,
          bound: function bound(point) {
            return point;
          },
          on: {
            'drag:move': function dragMove() {
              var containerRectPoint = new Point(containerRect.left, containerRect.top);
              _this4.position = emulationDraggable.position.sub(containerRectPoint).sub(_this4._startScrollPoint);

              _this4.emit('drag:move');
            },
            'drag:end': function dragEnd() {
              emulationDraggable.destroy();
              document.body.removeChild(clonedElement);

              _this4.element.classList.remove('dragee-placeholder');

              _this4.element.classList.remove('dragee-active');
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
          this.element.classList.remove('dragee-disable');
        } else {
          this.element.classList.add('dragee-disable');
        }

        this._enable = enable;
      }
    }]);

    return Draggable;
  }(EventEmitter);
  Draggable.emitter = new EventEmitter();
  Draggable.emitter.on('draggable:create', addToDefaultScope);

  var List = /*#__PURE__*/function (_EventEmitter) {
    _inherits(List, _EventEmitter);

    var _super = _createSuper(List);

    function List(draggables) {
      var _this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, List);

      _this = _super.call(this, options);
      _this.options = Object.assign({
        timeEnd: 200,
        timeExcange: 400,
        radius: 30
      }, options);
      _this.draggables = draggables;
      _this.changedDuringIteration = false;
      _this.resizeObserver = new ResizeObserver(function () {
        return _this.draggables.forEach(function (d) {
          return d.startPositioning();
        });
      });

      _this.draggables.forEach(function (d) {
        return _this.resizeObserver.observe(d.element);
      });

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
          draggable.pinPosition(draggable.pinnedPosition, _this2.options.timeEnd);

          _this2.onEnd(draggable);
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

          this.changedDuringIteration = true;
        }
      }
    }, {
      key: "onEnd",
      value: function onEnd(draggable) {
        if (this.changedDuringIteration) {
          this.emit('list:change');
          this.changedDuringIteration = false;
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

  var BubblingList = /*#__PURE__*/function (_List) {
    _inherits(BubblingList, _List);

    var _super = _createSuper(BubblingList);

    function BubblingList(draggables) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, BubblingList);

      return _super.call(this, draggables, options);
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
          this.bubbling(sortedDraggables, draggable);
          this.changedDuringIteration = true;
        }
      }
    }, {
      key: "bubbling",
      value: function bubbling(sortedDraggables, currentDraggable) {
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
        var bubblingList = new BubblingList(draggables, options.list || {});

        if (options.reorderOnChange) {
          bubblingList.on("list:change", function () {
            var orderedElements = bubblingList.getSortedDraggables().map(function (d) {
              return d.element;
            });
            bubblingList.reset();
            orderedElements.forEach(function (element) {
              containerElement.appendChild(element);
            });
            draggables.forEach(function (d) {
              return d.startPositioning();
            });
          });
        }

        return bubblingList;
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
  exports.defaultScope = defaultScope;
  exports.getDistance = getDistance;
  exports.getXDifference = getXDifference;
  exports.getYDifference = getYDifference;
  exports.indexOfNearestPoint = indexOfNearestPoint;
  exports.scope = scope;
  exports.scopes = scopes;
  exports.transformedSpaceDistanceFactory = transformedSpaceDistanceFactory;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

})({});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZGV2LmpzIiwic291cmNlcyI6WyIuLi9zcmMvZ2VvbWV0cnkvcG9pbnQuanMiLCIuLi9zcmMvZ2VvbWV0cnkvcmVjdGFuZ2xlLmpzIiwiLi4vc3JjL3V0aWxzL2dldC1kZWZhdWx0LWNvbnRhaW5lci5qcyIsIi4uL3NyYy9ldmVudEVtaXR0ZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvZGVzYW5kcm8tZ2V0LXN0eWxlLXByb3BlcnR5L2dldC1zdHlsZS1wcm9wZXJ0eS5qcyIsIi4uL3NyYy9nZW9tZXRyeS9kaXN0YW5jZXMuanMiLCIuLi9zcmMvZ2VvbWV0cnkvYm91bmRzLmpzIiwiLi4vc3JjL2dlb21ldHJ5L2FuZ2xlcy5qcyIsIi4uL3NyYy9ib3VuZGluZy5qcyIsIi4uL3NyYy91dGlscy9yZW1vdmUtYXJyYXktaXRlbS5qcyIsIi4uL3NyYy91dGlscy9yYW5nZS5qcyIsIi4uL3NyYy9wb3NpdGlvbmluZy5qcyIsIi4uL3NyYy90YXJnZXQuanMiLCIuLi9zcmMvc2NvcGUuanMiLCIuLi9zcmMvdXRpbHMvaXMtc3VwcG9ydC1wYXNzaXZlLWV2ZW50cy5qcyIsIi4uL3NyYy9kcmFnZ2FibGUuanMiLCIuLi9zcmMvbGlzdC5qcyIsIi4uL3NyYy9idWJibGluZ0xpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gZ2V0U3VtVmFsdWVPZlN0eWxlUnVsZXMoZWxlbWVudCwgcnVsZXMpIHtcbiAgcmV0dXJuIHJ1bGVzLnJlZHVjZSgoc3VtLCBydWxlKSA9PiB7XG4gICAgcmV0dXJuIHN1bSArIHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpW3J1bGVdfHwwKVxuICB9LCAwKVxufVxuXG4vKiogQ2xhc3MgcmVwcmVzZW50aW5nIGEgcG9pbnQuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2ludCB7XG4gIC8qKlxuICAqIENyZWF0ZSBhIHBvaW50LlxuICAqIEBwYXJhbSB7bnVtYmVyfSB4IC0gVGhlIHggdmFsdWUuXG4gICogQHBhcmFtIHtudW1iZXJ9IHkgLSBUaGUgeSB2YWx1ZS5cbiAgKi9cbiAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgIHRoaXMueCA9IHhcbiAgICB0aGlzLnkgPSB5XG4gIH1cblxuICBhZGQocCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54ICsgcC54LCB0aGlzLnkgKyBwLnkpXG4gIH1cblxuICBzdWIocCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54IC0gcC54LCB0aGlzLnkgLSBwLnkpXG4gIH1cblxuICBtdWx0KGspIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCAqIGssIHRoaXMueSAqIGspXG4gIH1cblxuICBuZWdhdGl2ZSgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KC10aGlzLngsIC10aGlzLnkpXG4gIH1cblxuICBjb21wYXJlKHApIHtcbiAgICByZXR1cm4gKHRoaXMueCA9PT0gcC54ICYmIHRoaXMueSA9PT0gcC55KVxuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLngsIHRoaXMueSlcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiBge3g9JHt0aGlzLnh9LHk9JHt0aGlzLnl9YFxuICB9XG5cbiAgc3RhdGljIGVsZW1lbnRPZmZzZXQoZWxlbWVudCwgcGFyZW50KSB7XG4gICAgcGFyZW50ID0gcGFyZW50IHx8IGVsZW1lbnQucGFyZW50Tm9kZVxuICAgIGNvbnN0IGVsZW1lbnRSZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIGNvbnN0IHBhcmVudFJlY3QgPSBwYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICByZXR1cm4gbmV3IFBvaW50KFxuICAgICAgZWxlbWVudFJlY3QubGVmdCAtIHBhcmVudFJlY3QubGVmdCxcbiAgICAgIGVsZW1lbnRSZWN0LnRvcCAtIHBhcmVudFJlY3QudG9wXG4gICAgKVxuICB9XG5cbiAgc3RhdGljIGVsZW1lbnRTaXplKGVsZW1lbnQsIGlzQ29udGVudEJveFNpemU9ZmFsc2UpIHtcbiAgICBsZXQgd2lkdGggPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KVsnd2lkdGgnXSlcbiAgICBsZXQgaGVpZ2h0ID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudClbJ2hlaWdodCddKVxuICAgIGlmICghaXNDb250ZW50Qm94U2l6ZSkge1xuICAgICAgd2lkdGggKz0gZ2V0U3VtVmFsdWVPZlN0eWxlUnVsZXMoZWxlbWVudCwgWydwYWRkaW5nLWxlZnQnLCAncGFkZGluZy1yaWdodCcsICdib3JkZXItbGVmdC13aWR0aCcsICdib3JkZXItcmlnaHQtd2lkdGgnXSlcbiAgICAgIGhlaWdodCArPSBnZXRTdW1WYWx1ZU9mU3R5bGVSdWxlcyhlbGVtZW50LCBbJ3BhZGRpbmctdG9wJywgJ3BhZGRpbmctYm90dG9tJywgJ2JvcmRlci10b3Atd2lkdGgnLCAnYm9yZGVyLWJvdHRvbS13aWR0aCddKVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFBvaW50KHdpZHRoLCBoZWlnaHQpXG4gIH1cbn1cbiIsImltcG9ydCBQb2ludCBmcm9tICcuL3BvaW50J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWN0YW5nbGUge1xuICBjb25zdHJ1Y3Rvcihwb3NpdGlvbiwgc2l6ZSkge1xuICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvblxuICAgIHRoaXMuc2l6ZSA9IHNpemVcbiAgfVxuXG4gIGdldFAxKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uXG4gIH1cblxuICBnZXRQMigpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54LCB0aGlzLnBvc2l0aW9uLnkpXG4gIH1cblxuICBnZXRQMygpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi5hZGQodGhpcy5zaXplKVxuICB9XG5cbiAgZ2V0UDQoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55KVxuICB9XG5cbiAgZ2V0Q2VudGVyKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLnNpemUubXVsdCgwLjUpKVxuICB9XG5cbiAgb3IocmVjdCkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gbmV3IFBvaW50KE1hdGgubWluKHRoaXMucG9zaXRpb24ueCwgcmVjdC5wb3NpdGlvbi54KSwgTWF0aC5taW4odGhpcy5wb3NpdGlvbi55LCByZWN0LnBvc2l0aW9uLnkpKVxuICAgIGNvbnN0IHNpemUgPSAobmV3IFBvaW50KE1hdGgubWF4KHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54LCByZWN0LnBvc2l0aW9uLnggKyByZWN0LnNpemUueCksIE1hdGgubWF4KHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55LCByZWN0LnBvc2l0aW9uLnkgKyByZWN0LnNpemUueSkpKS5zdWIocG9zaXRpb24pXG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUocG9zaXRpb24sIHNpemUpXG4gIH1cblxuICBhbmQocmVjdCkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gbmV3IFBvaW50KE1hdGgubWF4KHRoaXMucG9zaXRpb24ueCwgcmVjdC5wb3NpdGlvbi54KSwgTWF0aC5tYXgodGhpcy5wb3NpdGlvbi55LCByZWN0LnBvc2l0aW9uLnkpKVxuICAgIGNvbnN0IHNpemUgPSAobmV3IFBvaW50KE1hdGgubWluKHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54LCByZWN0LnBvc2l0aW9uLnggKyByZWN0LnNpemUueCksIE1hdGgubWluKHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55LCByZWN0LnBvc2l0aW9uLnkgKyByZWN0LnNpemUueSkpKS5zdWIocG9zaXRpb24pXG4gICAgaWYgKHNpemUueCA8PSAwIHx8IHNpemUueSA8PSAwKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZShwb3NpdGlvbiwgc2l6ZSlcbiAgfVxuXG4gIGluY2x1ZGVQb2ludChwKSB7XG4gICAgcmV0dXJuICEodGhpcy5wb3NpdGlvbi54ID4gcC54IHx8IHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54IDwgcC54IHx8IHRoaXMucG9zaXRpb24ueSA+IHAueSB8fCB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSA8IHAueSlcbiAgfVxuXG4gIGluY2x1ZGVSZWN0YW5nbGUocmVjdGFuZ2xlKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5jbHVkZVBvaW50KHJlY3RhbmdsZS5wb3NpdGlvbikgJiYgdGhpcy5pbmNsdWRlUG9pbnQocmVjdGFuZ2xlLmdldFAzKCkpXG4gIH1cblxuICBtb3ZlVG9Cb3VuZChyZWN0LCBheGlzKSB7XG4gICAgbGV0IHNlbEF4aXMsIGNyb3NzUmVjdGFuZ2xlXG4gICAgaWYgKGF4aXMpIHtcbiAgICAgIHNlbEF4aXMgPSBheGlzXG4gICAgfSBlbHNlIHtcbiAgICAgIGNyb3NzUmVjdGFuZ2xlID0gdGhpcy5hbmQocmVjdClcbiAgICAgIGlmICghY3Jvc3NSZWN0YW5nbGUpIHtcbiAgICAgICAgcmV0dXJuIHJlY3RcbiAgICAgIH1cbiAgICAgIHNlbEF4aXMgPSBjcm9zc1JlY3RhbmdsZS5zaXplLnggPiBjcm9zc1JlY3RhbmdsZS5zaXplLnkgPyAneScgOiAneCdcbiAgICB9XG4gICAgY29uc3QgdGhpc0NlbnRlciA9IHRoaXMuZ2V0Q2VudGVyKClcbiAgICBjb25zdCByZWN0Q2VudGVyID0gcmVjdC5nZXRDZW50ZXIoKVxuICAgIGNvbnN0IHNpZ24gPSB0aGlzQ2VudGVyW3NlbEF4aXNdID4gcmVjdENlbnRlcltzZWxBeGlzXSA/IC0xIDogMVxuICAgIGNvbnN0IG9mZnNldCA9IHNpZ24gPiAwID8gdGhpcy5wb3NpdGlvbltzZWxBeGlzXSArIHRoaXMuc2l6ZVtzZWxBeGlzXSAtIHJlY3QucG9zaXRpb25bc2VsQXhpc10gOiB0aGlzLnBvc2l0aW9uW3NlbEF4aXNdIC0gKHJlY3QucG9zaXRpb25bc2VsQXhpc10gKyByZWN0LnNpemVbc2VsQXhpc10pXG4gICAgcmVjdC5wb3NpdGlvbltzZWxBeGlzXSA9IHJlY3QucG9zaXRpb25bc2VsQXhpc10gKyBvZmZzZXRcbiAgICByZXR1cm4gcmVjdFxuICB9XG5cbiAgZ2V0U3F1YXJlKCkge1xuICAgIHJldHVybiB0aGlzLnNpemUueCAqIHRoaXMuc2l6ZS55XG4gIH1cblxuICBzdHlsZUFwcGx5KGVsKSB7XG4gICAgZWwgPSBlbCB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbmQnKVxuICAgIGVsLnN0eWxlLmxlZnQgPSB0aGlzLnBvc2l0aW9uLnggKyAncHgnXG4gICAgZWwuc3R5bGUudG9wID0gdGhpcy5wb3NpdGlvbi55ICsgJ3B4J1xuICAgIGVsLnN0eWxlLndpZHRoID0gdGhpcy5zaXplLnggKyAncHgnXG4gICAgZWwuc3R5bGUuaGVpZ2h0ID0gdGhpcy5zaXplLnkgKyAncHgnXG4gIH1cblxuICBncm93dGgoc2l6ZSkge1xuICAgIHRoaXMuc2l6ZSA9IHRoaXMuc2l6ZS5hZGQoc2l6ZSlcbiAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbi5hZGQoc2l6ZS5tdWx0KC0wLjUpKVxuICB9XG5cbiAgZ2V0TWluU2lkZSgpIHtcbiAgICByZXR1cm4gTWF0aC5taW4odGhpcy5zaXplLngsIHRoaXMuc2l6ZS55KVxuICB9XG5cbiAgc3RhdGljIGZyb21FbGVtZW50KGVsZW1lbnQsIHBhcmVudD1lbGVtZW50LnBhcmVudE5vZGUsIGlzQ29udGVudEJveFNpemU9ZmFsc2UsIGlzQ29uc2lkZXJUcmFuc2xhdGU9ZmFsc2UpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IFBvaW50LmVsZW1lbnRPZmZzZXQoZWxlbWVudCwgcGFyZW50LCBpc0NvbnNpZGVyVHJhbnNsYXRlKVxuICAgIGNvbnN0IHNpemUgPSBQb2ludC5lbGVtZW50U2l6ZShlbGVtZW50LCBpc0NvbnRlbnRCb3hTaXplKVxuICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHBvc2l0aW9uLCBzaXplKVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXREZWZhdWx0Q29udGFpbmVyKGVsZW1lbnQpIHtcbiAgbGV0IGNvbnRhaW5lciA9IGVsZW1lbnQucGFyZW50Tm9kZVxuICB3aGlsZSAoY29udGFpbmVyLnBhcmVudE5vZGUgJiYgd2luZG93LmdldENvbXB1dGVkU3R5bGUoY29udGFpbmVyKVsncG9zaXRpb24nXSA9PT0gJ3N0YXRpYycgJiYgY29udGFpbmVyLnRhZ05hbWUgIT09ICdCT0RZJykge1xuICAgIGNvbnRhaW5lciA9IGNvbnRhaW5lci5wYXJlbnROb2RlXG4gIH1cbiAgcmV0dXJuIGNvbnRhaW5lclxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKG9wdGlvbnMgPSB7fSkge1xuICAgIHRoaXMuZXZlbnRzID0ge31cblxuICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMub24pIHtcbiAgICAgIGZvciAoY29uc3QgW2V2ZW50TmFtZSwgZm5dIG9mIE9iamVjdC5lbnRyaWVzKG9wdGlvbnMub24pKSB7XG4gICAgICAgIHRoaXMub24oZXZlbnROYW1lLCBmbilcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBlbWl0KGV2ZW50TmFtZSkge1xuICAgIHRoaXMuaW50ZXJydXB0ZWQgPSBmYWxzZVxuICAgIGNvbnN0IGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSlcblxuICAgIGlmICghdGhpcy5ldmVudHNbZXZlbnROYW1lXSkgcmV0dXJuXG5cbiAgICBmb3IgKGNvbnN0IGZ1bmMgb2YgdGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgZnVuYyguLi5hcmdzKVxuICAgICAgaWYgKHRoaXMuaW50ZXJydXB0ZWQpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaW50ZXJydXB0KCkge1xuICAgIHRoaXMuaW50ZXJydXB0ZWQgPSB0cnVlXG4gIH1cblxuICBvbihldmVudE5hbWUsIGZuKSB7XG4gICAgaWYgKCF0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdID0gW11cbiAgICB9XG5cbiAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLnB1c2goZm4pXG4gIH1cblxuICBwcmVwZW5kT24oZXZlbnROYW1lLCBmbikge1xuICAgIGlmICghdGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IFtdXG4gICAgfVxuXG4gICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS51bnNoaWZ0KGZuKVxuICB9XG5cbiAgdW5zdWJzY3JpYmUoZXZlbnROYW1lLCBmbikge1xuICAgIGlmICh0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0uaW5kZXhPZihmbilcbiAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0uc3BsaWNlKGluZGV4LCAxKVxuICAgIH1cbiAgfVxuXG4gIHJlc2V0RW1pdHRlciAoKSB7XG4gICAgdGhpcy5ldmVudHMgPSB7fVxuICB9XG5cbiAgcmVzZXRPbihldmVudE5hbWUpIHtcbiAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdID0gW11cbiAgfVxufVxuIiwiLyohXG4gKiBnZXRTdHlsZVByb3BlcnR5IHYxLjAuNFxuICogb3JpZ2luYWwgYnkga2FuZ2F4XG4gKiBodHRwOi8vcGVyZmVjdGlvbmtpbGxzLmNvbS9mZWF0dXJlLXRlc3RpbmctY3NzLXByb3BlcnRpZXMvXG4gKiBNSVQgbGljZW5zZVxuICovXG5cbi8qanNoaW50IGJyb3dzZXI6IHRydWUsIHN0cmljdDogdHJ1ZSwgdW5kZWY6IHRydWUgKi9cbi8qZ2xvYmFsIGRlZmluZTogZmFsc2UsIGV4cG9ydHM6IGZhbHNlLCBtb2R1bGU6IGZhbHNlICovXG5cbiggZnVuY3Rpb24oIHdpbmRvdyApIHtcblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgcHJlZml4ZXMgPSAnV2Via2l0IE1veiBtcyBNcyBPJy5zcGxpdCgnICcpO1xudmFyIGRvY0VsZW1TdHlsZSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZTtcblxuZnVuY3Rpb24gZ2V0U3R5bGVQcm9wZXJ0eSggcHJvcE5hbWUgKSB7XG4gIGlmICggIXByb3BOYW1lICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIHRlc3Qgc3RhbmRhcmQgcHJvcGVydHkgZmlyc3RcbiAgaWYgKCB0eXBlb2YgZG9jRWxlbVN0eWxlWyBwcm9wTmFtZSBdID09PSAnc3RyaW5nJyApIHtcbiAgICByZXR1cm4gcHJvcE5hbWU7XG4gIH1cblxuICAvLyBjYXBpdGFsaXplXG4gIHByb3BOYW1lID0gcHJvcE5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBwcm9wTmFtZS5zbGljZSgxKTtcblxuICAvLyB0ZXN0IHZlbmRvciBzcGVjaWZpYyBwcm9wZXJ0aWVzXG4gIHZhciBwcmVmaXhlZDtcbiAgZm9yICggdmFyIGk9MCwgbGVuID0gcHJlZml4ZXMubGVuZ3RoOyBpIDwgbGVuOyBpKysgKSB7XG4gICAgcHJlZml4ZWQgPSBwcmVmaXhlc1tpXSArIHByb3BOYW1lO1xuICAgIGlmICggdHlwZW9mIGRvY0VsZW1TdHlsZVsgcHJlZml4ZWQgXSA9PT0gJ3N0cmluZycgKSB7XG4gICAgICByZXR1cm4gcHJlZml4ZWQ7XG4gICAgfVxuICB9XG59XG5cbi8vIHRyYW5zcG9ydFxuaWYgKCB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gIC8vIEFNRFxuICBkZWZpbmUoIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBnZXRTdHlsZVByb3BlcnR5O1xuICB9KTtcbn0gZWxzZSBpZiAoIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyApIHtcbiAgLy8gQ29tbW9uSlMgZm9yIENvbXBvbmVudFxuICBtb2R1bGUuZXhwb3J0cyA9IGdldFN0eWxlUHJvcGVydHk7XG59IGVsc2Uge1xuICAvLyBicm93c2VyIGdsb2JhbFxuICB3aW5kb3cuZ2V0U3R5bGVQcm9wZXJ0eSA9IGdldFN0eWxlUHJvcGVydHk7XG59XG5cbn0pKCB3aW5kb3cgKTtcbiIsImV4cG9ydCBmdW5jdGlvbiBnZXREaXN0YW5jZShwMSwgcDIpIHtcbiAgY29uc3QgZHggPSBwMS54IC0gcDIueCwgZHkgPSBwMS55IC0gcDIueVxuICByZXR1cm4gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0WERpZmZlcmVuY2UocDEsIHAyKSB7XG4gIHJldHVybiBNYXRoLmFicyhwMS54IC0gcDIueClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFlEaWZmZXJlbmNlKHAxLCBwMikge1xuICByZXR1cm4gTWF0aC5hYnMocDEueSAtIHAyLnkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5KG9wdGlvbnMpIHtcbiAgcmV0dXJuIChwMSwgcDIpID0+IHtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KFxuICAgICAgTWF0aC5wb3cob3B0aW9ucy54ICogTWF0aC5hYnMocDEueCAtIHAyLngpLCAyKSArXG4gICAgICBNYXRoLnBvdyhvcHRpb25zLnkgKiBNYXRoLmFicyhwMS55IC0gcDIueSksIDIpXG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmRleE9mTmVhcmVzdFBvaW50KGFyciwgdmFsLCByYWRpdXMsIGdldERpc3RhbmNlRnVuYz1nZXREaXN0YW5jZSkge1xuICBsZXQgc2l6ZSwgaW5kZXggPSAwLCBpLCB0ZW1wXG4gIGlmIChhcnIubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIC0xXG4gIH1cbiAgc2l6ZSA9IGdldERpc3RhbmNlRnVuYyhhcnJbMF0sIHZhbClcbiAgZm9yIChpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgIHRlbXAgPSBnZXREaXN0YW5jZUZ1bmMoYXJyW2ldLCB2YWwpXG4gICAgaWYgKHRlbXAgPCBzaXplKSB7XG4gICAgICBzaXplID0gdGVtcFxuICAgICAgaW5kZXggPSBpXG4gICAgfVxuICB9XG4gIGlmIChyYWRpdXMgPj0gMCAmJiBzaXplID4gcmFkaXVzKSB7XG4gICAgcmV0dXJuIC0xXG4gIH1cbiAgcmV0dXJuIGluZGV4XG59XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9wb2ludCdcbmltcG9ydCB7IGdldERpc3RhbmNlIH0gZnJvbSAnLi9kaXN0YW5jZXMnXG5cbmV4cG9ydCBmdW5jdGlvbiBjbGFtcChtaW4sIG1heCwgdmFsKSB7XG4gIHJldHVybiBNYXRoLm1heChtaW4sIE1hdGgubWluKG1heCwgdmFsKSlcbn1cblxuLy9SZXR1cm4gY3Jvc3NpbmcgcG9pbnQgb2YgdHdvIGxpbmVzXG5leHBvcnQgZnVuY3Rpb24gZGlyZWN0Q3Jvc3NpbmcoTDFQMSwgTDFQMiwgTDJQMSwgTDJQMikge1xuICBsZXQgdGVtcCwgazEsIGsyLCBiMSwgYjIsIHgsIHlcbiAgaWYgKEwyUDEueCA9PT0gTDJQMi54KSB7XG4gICAgdGVtcCA9IEwyUDFcbiAgICBMMlAxID0gTDFQMVxuICAgIEwxUDEgPSB0ZW1wXG4gICAgdGVtcCA9IEwyUDJcbiAgICBMMlAyID0gTDFQMlxuICAgIEwxUDIgPSB0ZW1wXG4gIH1cbiAgaWYgKEwxUDEueCA9PT0gTDFQMi54KSB7XG4gICAgazIgPSAoTDJQMi55IC0gTDJQMS55KSAvIChMMlAyLnggLSBMMlAxLngpXG4gICAgYjIgPSAoTDJQMi54ICogTDJQMS55IC0gTDJQMS54ICogTDJQMi55KSAvIChMMlAyLnggLSBMMlAxLngpXG4gICAgeCA9IEwxUDEueFxuICAgIHkgPSB4ICogazIgKyBiMlxuICAgIHJldHVybiBuZXcgUG9pbnQoeCwgeSlcbiAgfSBlbHNlIHtcbiAgICBrMSA9IChMMVAyLnkgLSBMMVAxLnkpIC8gKEwxUDIueCAtIEwxUDEueClcbiAgICBiMSA9IChMMVAyLnggKiBMMVAxLnkgLSBMMVAxLnggKiBMMVAyLnkpIC8gKEwxUDIueCAtIEwxUDEueClcbiAgICBrMiA9IChMMlAyLnkgLSBMMlAxLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICBiMiA9IChMMlAyLnggKiBMMlAxLnkgLSBMMlAxLnggKiBMMlAyLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICB4ID0gKGIxIC0gYjIpIC8gKGsyIC0gazEpXG4gICAgeSA9IHggKiBrMSArIGIxXG4gICAgcmV0dXJuIG5ldyBQb2ludCh4LCB5KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZFRvU2VnbWVudChMUDEsIExQMiwgUCkge1xuICBsZXQgeCwgeVxuICB4ID0gY2xhbXAoTWF0aC5taW4oTFAxLngsIExQMi54KSwgTWF0aC5tYXgoTFAxLngsIExQMi54KSwgUC54KVxuICBpZiAoeCAhPT0gUC54KSB7XG4gICAgeSA9ICh4ID09PSBMUDEueCkgPyBMUDEueSA6IExQMi55XG4gICAgUCA9IG5ldyBQb2ludCh4LCB5KVxuICB9XG5cbiAgeSA9IGNsYW1wKE1hdGgubWluKExQMS55LCBMUDIueSksIE1hdGgubWF4KExQMS55LCBMUDIueSksIFAueSlcbiAgaWYgKHkgIT09IFAueSkge1xuICAgIHggPSAoeSA9PT0gTFAxLnkpID8gTFAxLnggOiBMUDIueFxuICAgIFAgPSBuZXcgUG9pbnQoeCwgeSlcbiAgfVxuXG4gIHJldHVybiBQXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZFRvTGluZShBLCBCLCBQKSB7XG4gIGNvbnN0IEFQID0gbmV3IFBvaW50KFAueCAtIEEueCwgUC55IC0gQS55KSxcbiAgICBBQiA9IG5ldyBQb2ludChCLnggLSBBLngsIEIueSAtIEEueSksXG4gICAgYWIyID0gQUIueCAqIEFCLnggKyBBQi55ICogQUIueSxcbiAgICBhcF9hYiA9IEFQLnggKiBBQi54ICsgQVAueSAqIEFCLnksXG4gICAgdCA9IGFwX2FiIC8gYWIyXG4gIHJldHVybiBuZXcgUG9pbnQoQS54ICsgQUIueCAqIHQsIEEueSArIEFCLnkgKiB0KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9pbnRPbkxpbmUoTFAxLCBMUDIsIHBlcmNlbnQpIHtcbiAgY29uc3QgZHggPSBMUDIueCAtIExQMS54LCBkeSA9IExQMi55IC0gTFAxLnlcbiAgcmV0dXJuIG5ldyBQb2ludChMUDEueCArIHBlcmNlbnQgKiBkeCwgTFAxLnkgKyBwZXJjZW50ICogZHkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb2ludE9uTGluZUJ5TGVuZ2h0KExQMSwgTFAyLCBsZW5naHQpIHtcbiAgY29uc3QgZHggPSBMUDIueCAtIExQMS54XG4gIGNvbnN0IGR5ID0gTFAyLnkgLSBMUDEueVxuICBjb25zdCBwZXJjZW50ID0gbGVuZ2h0IC8gZ2V0RGlzdGFuY2UoTFAxLCBMUDIpXG4gIHJldHVybiBuZXcgUG9pbnQoTFAxLnggKyBwZXJjZW50ICogZHgsIExQMS55ICsgcGVyY2VudCAqIGR5KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkUG9pbnRUb0JvdW5kUG9pbnRzKGJvdW5kcG9pbnRzLCBwb2ludCwgaXNSaWdodCkge1xuICBjb25zdCByZXN1bHQgPSBib3VuZHBvaW50cy5maWx0ZXIoKGJQb2ludCkgPT4ge1xuICAgIHJldHVybiBiUG9pbnQueSA+IHBvaW50LnkgfHwgKGlzUmlnaHQgPyBiUG9pbnQueCA8IHBvaW50LnggOiBiUG9pbnQueCA+IHBvaW50LngpXG4gIH0pXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHQubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAocG9pbnQueSA8IHJlc3VsdFtpXS55KSB7XG4gICAgICByZXN1bHQuc3BsaWNlKGksIDAsIHBvaW50KVxuICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbiAgfVxuICByZXN1bHQucHVzaChwb2ludClcbiAgcmV0dXJuIHJlc3VsdFxufVxuIiwiaW1wb3J0IFBvaW50IGZyb20gJy4vcG9pbnQnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbmdsZURpZmYoYWxwaGEsIGJldGEpIHtcbiAgY29uc3QgbWluQW5nbGUgPSBNYXRoLm1pbihhbHBoYSwgYmV0YSlcbiAgY29uc3QgbWF4QW5nbGUgPSAgTWF0aC5tYXgoYWxwaGEsIGJldGEpXG4gIHJldHVybiBNYXRoLm1pbihtYXhBbmdsZSAtIG1pbkFuZ2xlLCBtaW5BbmdsZSArIE1hdGguUEkqMiAtIG1heEFuZ2xlKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QW5nbGUocDEsIHAyKSB7XG4gIGNvbnN0IGRpZmYgPSBwMi5zdWIocDEpXG4gIHJldHVybiBub3JtYWxpemVBbmdsZShNYXRoLmF0YW4yKGRpZmYueSwgZGlmZi54KSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvUmFkaWFuKGFuZ2xlKSB7XG4gIHJldHVybiAoKGFuZ2xlICUgMzYwKSAqIE1hdGguUEkgLyAxODApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0RlZ3JlZShhbmdsZSkge1xuICByZXR1cm4gKGFuZ2xlICogMTgwIC8gTWF0aC5QSSkgJSAzNjBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kQW5nbGUobWluLCBtYXgsIHZhbCkge1xuICBsZXQgZG1pbiwgZG1heFxuICBpZiAobWluIDwgbWF4ICYmIHZhbCA+IG1pbiAmJiB2YWwgPCBtYXgpIHtcbiAgICByZXR1cm4gdmFsXG4gIH0gZWxzZSBpZiAobWF4IDwgbWluICYmICh2YWwgPCBtYXggfHwgdmFsID4gbWluKSkge1xuICAgIHJldHVybiB2YWxcbiAgfSBlbHNlIHtcbiAgICBkbWluID0gZ2V0QW5nbGVEaWZmKG1pbiwgdmFsKVxuICAgIGRtYXggPSBnZXRBbmdsZURpZmYobWF4LCB2YWwpXG4gICAgaWYgKGRtaW4gPCBkbWF4KSB7XG4gICAgICByZXR1cm4gbWluXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBtYXhcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE5lYXJlc3RBbmdsZShhcnIsIGFuZ2xlKSB7XG4gIGxldCBpLCB0ZW1wLCBkaWZmID0gTWF0aC5QSSAqIDIsIHZhbHVlXG4gIGZvciAoaSA9IDA7IGkgPCBhcnIubGVuZ3RoO2krKykge1xuICAgIHRlbXAgPSBnZXRBbmdsZURpZmYoYXJyW2ldLCBhbmdsZSlcbiAgICBpZiAoZGlmZiA8IHRlbXApIHtcbiAgICAgIGRpZmYgPSB0ZW1wXG4gICAgICB2YWx1ZSA9IGFycltpXVxuICAgIH1cbiAgfVxuICByZXR1cm4gdmFsdWVcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZUFuZ2xlKHZhbCkge1xuICB3aGlsZSAodmFsIDwgMCkge1xuICAgIHZhbCArPSAyICogTWF0aC5QSVxuICB9XG4gIHdoaWxlICh2YWwgPiAyICogTWF0aC5QSSkge1xuICAgIHZhbCAtPSAyICogTWF0aC5QSVxuICB9XG4gIHJldHVybiB2YWxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBvaW50RnJvbVJhZGlhbFN5c3RlbShhbmdsZSwgbGVuZ3RoLCBjZW50ZXIpIHtcbiAgY2VudGVyID0gY2VudGVyIHx8IG5ldyBQb2ludCgwLCAwKVxuICByZXR1cm4gY2VudGVyLmFkZChuZXcgUG9pbnQobGVuZ3RoICogTWF0aC5jb3MoYW5nbGUpLCBsZW5ndGggKiBNYXRoLnNpbihhbmdsZSkpKVxufVxuIiwiaW1wb3J0IFBvaW50IGZyb20gJy4vZ2VvbWV0cnkvcG9pbnQnXG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gJy4vZ2VvbWV0cnkvcmVjdGFuZ2xlJ1xuaW1wb3J0IHtcbiAgZ2V0UG9pbnRPbkxpbmVCeUxlbmdodCxcbiAgZGlyZWN0Q3Jvc3NpbmcsXG4gIGJvdW5kVG9MaW5lXG59IGZyb20gJy4vZ2VvbWV0cnkvYm91bmRzJ1xuXG5pbXBvcnQge1xuICBnZXRBbmdsZSxcbiAgbm9ybWFsaXplQW5nbGUsXG4gIGJvdW5kQW5nbGUsXG4gIGdldFBvaW50RnJvbVJhZGlhbFN5c3RlbVxufSBmcm9tICcuL2dlb21ldHJ5L2FuZ2xlcydcblxuZXhwb3J0IGNsYXNzIEJvdW5kIHtcbiAgY29uc3RydWN0b3IgKCkge31cblxuICBib3VuZChwb2ludCwgX3NpemUpIHtcbiAgICByZXR1cm4gcG9pbnRcbiAgfVxuXG4gIHJlZnJlc2ggKCkge31cblxuICBzdGF0aWMgYm91bmRpbmcoKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgdGhpcyguLi5hcmd1bWVudHMpXG4gICAgcmV0dXJuIGluc3RhbmNlLmJvdW5kLmJpbmQoaW5zdGFuY2UpXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9SZWN0YW5nbGUgZXh0ZW5kcyBCb3VuZCB7XG4gIGNvbnN0cnVjdG9yKHJlY3RhbmdsZSkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnJlY3RhbmdsZSA9IHJlY3RhbmdsZVxuICB9XG5cbiAgYm91bmQocG9pbnQsIHNpemUpIHtcbiAgICBjb25zdCBjYWxjUG9pbnQgPSBwb2ludC5jbG9uZSgpXG4gICAgY29uc3QgcmVjdFAyID0gdGhpcy5yZWN0YW5nbGUuZ2V0UDMoKVxuXG4gICAgaWYgKHRoaXMucmVjdGFuZ2xlLnBvc2l0aW9uLnggPiBjYWxjUG9pbnQueCkge1xuICAgICAgKGNhbGNQb2ludC54ID0gdGhpcy5yZWN0YW5nbGUucG9zaXRpb24ueClcbiAgICB9XG4gICAgaWYgKHRoaXMucmVjdGFuZ2xlLnBvc2l0aW9uLnkgPiBjYWxjUG9pbnQueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSB0aGlzLnJlY3RhbmdsZS5wb3NpdGlvbi55XG4gICAgfVxuICAgIGlmIChyZWN0UDIueCA8IGNhbGNQb2ludC54ICsgc2l6ZS54KSB7XG4gICAgICBjYWxjUG9pbnQueCA9IHJlY3RQMi54IC0gc2l6ZS54XG4gICAgfVxuICAgIGlmIChyZWN0UDIueSA8IGNhbGNQb2ludC55ICsgc2l6ZS55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHJlY3RQMi55IC0gc2l6ZS55XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhbGNQb2ludFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvRWxlbWVudCBleHRlbmRzIEJvdW5kVG9SZWN0YW5nbGUge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb250YWluZXIpIHtcbiAgICBzdXBlcihSZWN0YW5nbGUuZnJvbUVsZW1lbnQoZWxlbWVudCwgY29udGFpbmVyKSlcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG4gICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXJcbiAgfVxuXG4gIHJlZnJlc2ggKCkge1xuICAgIHRoaXMucmVjdGFuZ2xlID0gUmVjdGFuZ2xlLmZyb21FbGVtZW50KHRoaXMuZWxlbWVudCwgdGhpcy5jb250YWluZXIpXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9MaW5lWCBleHRlbmRzIEJvdW5kIHtcbiAgY29uc3RydWN0b3IoeCwgc3RhcnRZLCBlbmRZKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMueCA9IHhcbiAgICB0aGlzLnN0YXJ0WSA9IHN0YXJ0WVxuICAgIHRoaXMuZW5kWSA9IGVuZFlcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgY2FsY1BvaW50ID0gcG9pbnQuY2xvbmUoKVxuXG4gICAgY2FsY1BvaW50LnggPSB0aGlzLnhcbiAgICBpZiAodGhpcy5zdGFydFkgPiBjYWxjUG9pbnQueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSB0aGlzLnN0YXJ0WVxuICAgIH1cbiAgICBpZiAodGhpcy5lbmRZIDwgY2FsY1BvaW50LnkgKyBzaXplLnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gdGhpcy5lbmRZIC0gc2l6ZS55XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhbGNQb2ludFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvTGluZVkgZXh0ZW5kcyBCb3VuZCB7XG4gIGNvbnN0cnVjdG9yKHksIHN0YXJ0WCwgZW5kWCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnkgPSB5XG4gICAgdGhpcy5zdGFydFggPSBzdGFydFhcbiAgICB0aGlzLmVuZFggPSBlbmRYXG4gIH1cblxuICBib3VuZChwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IGNhbGNQb2ludCA9IHBvaW50LmNsb25lKClcbiAgICBjYWxjUG9pbnQueSA9IHRoaXMueVxuICAgIGlmICh0aGlzLnN0YXJ0WCA+IGNhbGNQb2ludC54KSB7XG4gICAgICBjYWxjUG9pbnQueCA9IHRoaXMuc3RhcnRYXG4gICAgfVxuICAgIGlmICh0aGlzLmVuZFggPCBjYWxjUG9pbnQueCArIHNpemUueCkge1xuICAgICAgY2FsY1BvaW50LnggPSB0aGlzLmVuZFggLSBzaXplLnhcbiAgICB9XG4gICAgcmV0dXJuIGNhbGNQb2ludFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvTGluZSBleHRlbmRzIEJvdW5kIHtcbiAgY29uc3RydWN0b3Ioc3RhcnRQb2ludCwgZW5kUG9pbnQpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5zdGFydFBvaW50ID0gc3RhcnRQb2ludFxuICAgIHRoaXMuZW5kUG9pbnQgPSBlbmRQb2ludFxuICAgIGNvbnN0IGFscGhhID0gTWF0aC5hdGFuMihlbmRQb2ludC55IC0gc3RhcnRQb2ludC55LCBlbmRQb2ludC54IC0gc3RhcnRQb2ludC54KVxuICAgIGNvbnN0IGJldGEgPSBhbHBoYSArIE1hdGguUEkgLyAyXG4gICAgdGhpcy5zb21lSyA9IDEwXG4gICAgdGhpcy5jb3NCZXRhID0gTWF0aC5jb3MoYmV0YSlcbiAgICB0aGlzLnNpbkJldGEgPSBNYXRoLnNpbihiZXRhKVxuICB9XG5cbiAgYm91bmQocG9pbnQsIHNpemUpIHtcbiAgICBjb25zdCBwb2ludDIgPSBuZXcgUG9pbnQoXG4gICAgICBwb2ludC54ICsgdGhpcy5zb21lSyAqIHRoaXMuY29zQmV0YSxcbiAgICAgIHBvaW50LnkgKyB0aGlzLnNvbWVLICogdGhpcy5zaW5CZXRhXG4gICAgKVxuXG4gICAgY29uc3QgbmV3RW5kUG9pbnQgPSBnZXRQb2ludE9uTGluZUJ5TGVuZ2h0KHRoaXMuZW5kUG9pbnQsIHRoaXMuc3RhcnRQb2ludCwgc2l6ZS54KVxuICAgIGNvbnN0IHBvaW50Q3Jvc3NpbmcgPSBkaXJlY3RDcm9zc2luZyh0aGlzLnN0YXJ0UG9pbnQsIHRoaXMuZW5kUG9pbnQsIHBvaW50LCBwb2ludDIpXG5cbiAgICByZXR1cm4gYm91bmRUb0xpbmUodGhpcy5zdGFydFBvaW50LCBuZXdFbmRQb2ludCwgcG9pbnRDcm9zc2luZylcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb0NpcmNsZSBleHRlbmRzIEJvdW5kIHtcbiAgY29uc3RydWN0b3IoY2VudGVyLCByYWRpdXMpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5jZW50ZXIgPSBjZW50ZXJcbiAgICB0aGlzLnJhZGl1cyA9IHJhZGl1c1xuICB9XG5cbiAgYm91bmQocG9pbnQsIF9zaXplKSB7XG4gICAgcmV0dXJuIGdldFBvaW50T25MaW5lQnlMZW5naHQodGhpcy5jZW50ZXIsIHBvaW50LCB0aGlzLnJhZGl1cylcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb0FyYyBleHRlbmRzIEJvdW5kVG9DaXJjbGUge1xuICBjb25zdHJ1Y3RvcihjZW50ZXIsIHJhZGl1cywgc3RhcnRBbmdsZSwgZW5kQW5nbGUpIHtcbiAgICBzdXBlcihjZW50ZXIsIHJhZGl1cylcbiAgICB0aGlzLl9zdGFydEFuZ2xlID0gc3RhcnRBbmdsZVxuICAgIHRoaXMuX2VuZEFuZ2xlID0gZW5kQW5nbGVcbiAgfVxuXG4gIHN0YXJ0QW5nbGUoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGlzLl9zdGFydEFuZ2xlID09PSAnZnVuY3Rpb24nID8gdGhpcy5fc3RhcnRBbmdsZSgpIDogdGhpcy5fc3RhcnRBbmdsZVxuICB9XG5cbiAgZW5kQW5nbGUoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGlzLl9lbmRBbmdsZSA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMuX2VuZEFuZ2xlKCkgOiB0aGlzLl9lbmRBbmdsZVxuICB9XG5cbiAgYm91bmQocG9pbnQsIF9zaXplKSB7XG4gICAgbGV0IGFuZ2xlID0gZ2V0QW5nbGUodGhpcy5jZW50ZXIsIHBvaW50KVxuICAgIGFuZ2xlID0gbm9ybWFsaXplQW5nbGUoYW5nbGUpXG4gICAgYW5nbGUgPSBib3VuZEFuZ2xlKHRoaXMuc3RhcnRBbmdsZSgpLCB0aGlzLmVuZEFuZ2xlKCksIGFuZ2xlKVxuICAgIHJldHVybiBnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oYW5nbGUsIHRoaXMucmFkaXVzLCB0aGlzLmNlbnRlcilcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oYXJyYXksIHZhbCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGFycmF5W2ldID09PSB2YWwpIHtcbiAgICAgIGFycmF5LnNwbGljZShpLCAxKVxuICAgICAgaS0tXG4gICAgfVxuICB9XG4gIHJldHVybiBhcnJheVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmFuZ2Uoc3RhcnQsIHN0b3AsIHN0ZXApIHtcbiAgY29uc3QgcmVzdWx0ID0gW11cbiAgaWYgKHR5cGVvZiBzdG9wID09PSAndW5kZWZpbmVkJykge1xuICAgIHN0b3AgPSBzdGFydFxuICAgIHN0YXJ0ID0gMFxuICB9XG4gIGlmICh0eXBlb2Ygc3RlcCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBzdGVwID0gMVxuICB9XG4gIGlmICgoc3RlcCA+IDAgJiYgc3RhcnQgPj0gc3RvcCkgfHwgKHN0ZXAgPCAwICYmIHN0YXJ0IDw9IHN0b3ApKSB7XG4gICAgcmV0dXJuIFtdXG4gIH1cbiAgZm9yIChsZXQgaSA9IHN0YXJ0OyBzdGVwID4gMCA/IGkgPCBzdG9wIDogaSA+IHN0b3A7IGkgKz0gc3RlcCkge1xuICAgIHJlc3VsdC5wdXNoKGkpXG4gIH1cbiAgcmV0dXJuIHJlc3VsdFxufVxuIiwiaW1wb3J0IFBvaW50IGZyb20gJy4vZ2VvbWV0cnkvcG9pbnQnXG5pbXBvcnQgeyBhZGRQb2ludFRvQm91bmRQb2ludHMgfSBmcm9tICcuL2dlb21ldHJ5L2JvdW5kcydcblxuaW1wb3J0IHtcbiAgaW5kZXhPZk5lYXJlc3RQb2ludCxcbiAgZ2V0RGlzdGFuY2Vcbn0gZnJvbSAnLi9nZW9tZXRyeS9kaXN0YW5jZXMnXG5cbmNsYXNzIEJhc2ljU3RyYXRlZ3kge1xuICBjb25zdHJ1Y3RvcihyZWN0YW5nbGUsIG9wdGlvbnM9e30pIHtcbiAgICB0aGlzLnJlY3RhbmdsZSA9IHJlY3RhbmdsZVxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNcbiAgfVxuXG4gIGdldCBib3VuZFJlY3QgKCkge1xuICAgIHJldHVybiB0eXBlb2YgdGhpcy5yZWN0YW5nbGUgPT09ICdmdW5jdGlvbicgPyB0aGlzLnJlY3RhbmdsZSgpIDogdGhpcy5yZWN0YW5nbGVcbiAgfVxufVxuXG5jbGFzcyBOb3RDcm9zc2luZ1N0cmF0ZWd5IGV4dGVuZHMgQmFzaWNTdHJhdGVneSB7XG4gIHBvc2l0aW9uaW5nIChyZWN0YW5nbGVMaXN0LCBpbmRleGVzT2ZOZXdzKSB7XG4gICAgY29uc3Qgc3RhdGljUmVjdGFuZ2xlSW5kZXhlcyA9IHJlY3RhbmdsZUxpc3QucmVkdWNlKChpbmRleGVzLCBfcmVjdCwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChpbmRleGVzT2ZOZXdzLmluZGV4T2YoaW5kZXgpID09PSAtMSkge1xuICAgICAgICBpbmRleGVzLnB1c2goaW5kZXgpXG4gICAgICB9XG4gICAgICByZXR1cm4gaW5kZXhlc1xuICAgIH0sIFtdKVxuXG4gICAgaW5kZXhlc09mTmV3cy5mb3JFYWNoKChpbmRleCkgPT4ge1xuICAgICAgbGV0IHJlY3QgPSByZWN0YW5nbGVMaXN0W2luZGV4XVxuICAgICAgbGV0IHJlbW92YWJsZSA9IGZhbHNlXG5cbiAgICAgIHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMuZm9yRWFjaCgoaW5kZXhPZlN0YXRpYykgPT4ge1xuICAgICAgICBjb25zdCBzdGF0aWNSZWN0ID0gcmVjdGFuZ2xlTGlzdFtpbmRleE9mU3RhdGljXVxuICAgICAgICByZWN0ID0gc3RhdGljUmVjdC5tb3ZlVG9Cb3VuZChyZWN0KVxuICAgICAgfSlcblxuICAgICAgcmVtb3ZhYmxlID0gc3RhdGljUmVjdGFuZ2xlSW5kZXhlcy5zb21lKChpbmRleE9mU3RhdGljKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YXRpY1JlY3QgPSByZWN0YW5nbGVMaXN0W2luZGV4T2ZTdGF0aWNdXG4gICAgICAgIHJldHVybiAgISFzdGF0aWNSZWN0LmFuZChyZWN0KVxuICAgICAgfSkgfHwgcmVjdC5hbmQodGhpcy5ib3VuZFJlY3QpLmdldFNxdWFyZSgpICE9PSByZWN0LmdldFNxdWFyZSgpXG5cbiAgICAgIGlmIChyZW1vdmFibGUpIHtcbiAgICAgICAgcmVjdC5yZW1vdmFibGUgPSB0cnVlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0aWNSZWN0YW5nbGVJbmRleGVzLnB1c2goaW5kZXgpXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcmVjdGFuZ2xlTGlzdFxuICB9XG5cbiAgc29ydGluZyhvZGxEcmFnZ2FibGVzTGlzdCwgbmV3RHJhZ2dhYmxlcywgaW5kZXhPZk5ld3MpIHtcbiAgICBjb25zdCBkcmFnZ2FibGVzID0gb2RsRHJhZ2dhYmxlc0xpc3QuY29uY2F0KG5ld0RyYWdnYWJsZXMpXG4gICAgbmV3RHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGluZGV4T2ZOZXdzLnB1c2goZHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkpXG4gICAgfSlcbiAgICByZXR1cm4gZHJhZ2dhYmxlc1xuICB9XG59XG5cbmNsYXNzIEZsb2F0TGVmdFN0cmF0ZWd5IGV4dGVuZHMgQmFzaWNTdHJhdGVneSB7XG4gIGNvbnN0cnVjdG9yKHJlY3RhbmdsZSwgb3B0aW9ucz17fSkge1xuICAgIHN1cGVyKHJlY3RhbmdsZSwgb3B0aW9ucylcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHJlbW92YWJsZTogdHJ1ZVxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0aGlzLnJhZGl1cyA9IG9wdGlvbnMucmFkaXVzIHx8IDgwXG5cbiAgICB0aGlzLnBhZGRpbmdUb3BMZWZ0ID0gb3B0aW9ucy5wYWRkaW5nVG9wTGVmdCB8fCBuZXcgUG9pbnQoMCwgMClcbiAgICB0aGlzLnBhZGRpbmdCb3R0b21SaWdodCA9IG9wdGlvbnMucGFkZGluZ0JvdHRvbVJpZ2h0IHx8IG5ldyBQb2ludCgwLCAwKVxuICAgIHRoaXMueUdhcEJldHdlZW5EcmFnZ2FibGVzID0gb3B0aW9ucy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgfHwgMFxuXG4gICAgdGhpcy5nZXREaXN0YW5jZSA9IG9wdGlvbnMuZ2V0RGlzdGFuY2UgfHwgZ2V0RGlzdGFuY2VcbiAgICB0aGlzLmdldFBvc2l0aW9uID0gb3B0aW9ucy5nZXRQb3NpdGlvbiB8fCAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnBvc2l0aW9uKVxuICB9XG5cbiAgcG9zaXRpb25pbmcocmVjdGFuZ2xlTGlzdCwgX2luZGV4ZXNPZk5ld3MpIHtcbiAgICBjb25zdCBib3VuZFJlY3QgPSB0aGlzLmJvdW5kUmVjdFxuICAgIGNvbnN0IHJlY3RQMiA9IGJvdW5kUmVjdC5nZXRQMigpXG4gICAgbGV0IGJvdW5kYXJ5UG9pbnRzID0gW2JvdW5kUmVjdC5wb3NpdGlvbl1cblxuICAgIHJlY3RhbmdsZUxpc3QuZm9yRWFjaCgocmVjdCwgcmVjdEluZGV4KSA9PiB7XG4gICAgICBsZXQgcG9zaXRpb24sIGlzVmFsaWQgPSBmYWxzZVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib3VuZGFyeVBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBwb3NpdGlvbiA9IG5ldyBQb2ludChcbiAgICAgICAgICBib3VuZGFyeVBvaW50c1tpXS54ICsgdGhpcy5wYWRkaW5nVG9wTGVmdC54LFxuICAgICAgICAgIGkgPiAwID8gKGJvdW5kYXJ5UG9pbnRzW2kgLSAxXS55ICsgdGhpcy55R2FwQmV0d2VlbkRyYWdnYWJsZXMpIDogKGJvdW5kUmVjdC5wb3NpdGlvbi55ICsgdGhpcy5wYWRkaW5nVG9wTGVmdC55KVxuICAgICAgICApXG5cbiAgICAgICAgaXNWYWxpZCA9IChwb3NpdGlvbi54ICsgcmVjdC5zaXplLnggPCByZWN0UDIueClcblxuICAgICAgICBpZiAoaXNWYWxpZCkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICAgIHBvc2l0aW9uID0gbmV3IFBvaW50KFxuICAgICAgICAgIGJvdW5kUmVjdC5wb3NpdGlvbi54ICsgdGhpcy5wYWRkaW5nVG9wTGVmdC54LFxuICAgICAgICAgIGJvdW5kYXJ5UG9pbnRzW2JvdW5kYXJ5UG9pbnRzLmxlbmd0aCAtIDFdLnkgKyAocmVjdEluZGV4ID4gMCA/IHRoaXMueUdhcEJldHdlZW5EcmFnZ2FibGVzIDogdGhpcy5wYWRkaW5nVG9wTGVmdC55KVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHJlY3QucG9zaXRpb24gPSBwb3NpdGlvblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZW1vdmFibGUgJiYgcmVjdC5nZXRQMygpLnkgPiBib3VuZFJlY3QuZ2V0UDMoKS55KSB7XG4gICAgICAgIHJlY3QucmVtb3ZhYmxlID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBib3VuZGFyeVBvaW50cyA9IGFkZFBvaW50VG9Cb3VuZFBvaW50cyhib3VuZGFyeVBvaW50cywgcmVjdC5nZXRQMygpLmFkZCh0aGlzLnBhZGRpbmdCb3R0b21SaWdodCkpXG4gICAgfSlcbiAgICByZXR1cm4gcmVjdGFuZ2xlTGlzdFxuICB9XG5cbiAgc29ydGluZyhvZGxEcmFnZ2FibGVzTGlzdCwgbmV3RHJhZ2dhYmxlcywgaW5kZXhPZk5ld3MpIHtcbiAgICBjb25zdCBuZXdMaXN0ID0gb2RsRHJhZ2dhYmxlc0xpc3QuY29uY2F0KClcbiAgICBjb25zdCBsaXN0T2xkUG9zaXRpb24gPSBvZGxEcmFnZ2FibGVzTGlzdC5tYXAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLmdldFBvc2l0aW9uKCkpXG4gICAgbmV3RHJhZ2dhYmxlcy5mb3JFYWNoKChuZXdEcmFnZ2FibGUpID0+IHtcbiAgICAgIGxldCBpbmRleCA9IGluZGV4T2ZOZWFyZXN0UG9pbnQobGlzdE9sZFBvc2l0aW9uLCB0aGlzLmdldFBvc2l0aW9uKG5ld0RyYWdnYWJsZSksIHRoaXMucmFkaXVzLCB0aGlzLmdldERpc3RhbmNlKVxuICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICBpbmRleCA9IG5ld0xpc3QubGVuZ3RoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbmRleCA9IG5ld0xpc3QuaW5kZXhPZihvZGxEcmFnZ2FibGVzTGlzdFtpbmRleF0pXG4gICAgICB9XG4gICAgICBuZXdMaXN0LnNwbGljZShpbmRleCwgMCwgbmV3RHJhZ2dhYmxlKVxuICAgIH0pXG4gICAgbmV3RHJhZ2dhYmxlcy5mb3JFYWNoKChuZXdEcmFnZ2FibGUpID0+IHtcbiAgICAgIGluZGV4T2ZOZXdzLnB1c2gobmV3TGlzdC5pbmRleE9mKG5ld0RyYWdnYWJsZSkpXG4gICAgfSlcbiAgICByZXR1cm4gbmV3TGlzdFxuICB9XG59XG5cbmNsYXNzIEZsb2F0UmlnaHRTdHJhdGVneSBleHRlbmRzIEZsb2F0TGVmdFN0cmF0ZWd5IHtcbiAgY29uc3RydWN0b3IocmVjdGFuZ2xlLCBvcHRpb25zPXt9KSB7XG4gICAgc3VwZXIocmVjdGFuZ2xlLCBvcHRpb25zKVxuXG4gICAgdGhpcy5wYWRkaW5nVG9wUmlnaHQgPSBvcHRpb25zLnBhZGRpbmdUb3BSaWdodCB8fCBuZXcgUG9pbnQoNSwgNSlcbiAgICB0aGlzLnBhZGRpbmdCb3R0b21MZWZ0ID0gb3B0aW9ucy5wYWRkaW5nQm90dG9tTGVmdCB8fCBuZXcgUG9pbnQoMCwgMClcbiAgICB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyA9IG9wdGlvbnMueUdhcEJldHdlZW5EcmFnZ2FibGVzIHx8IDBcblxuICAgIHRoaXMucGFkZGluZ0JvdHRvbU5lZ0xlZnQgPSBuZXcgUG9pbnQoLXRoaXMucGFkZGluZ0JvdHRvbUxlZnQueCwgdGhpcy5wYWRkaW5nQm90dG9tTGVmdC55KVxuICB9XG5cbiAgcG9zaXRpb25pbmcocmVjdGFuZ2xlTGlzdCwgX2luZGV4ZXNPZk5ld3MpIHtcbiAgICBjb25zdCBib3VuZFJlY3QgPSB0aGlzLmJvdW5kUmVjdFxuICAgIGxldCBib3VuZGFyeVBvaW50cyA9IFtib3VuZFJlY3QuZ2V0UDIoKV1cblxuICAgIHJlY3RhbmdsZUxpc3QuZm9yRWFjaCgocmVjdCwgcmVjdEluZGV4KSA9PiB7XG4gICAgICBsZXQgcG9zaXRpb24sIGlzVmFsaWQgPSBmYWxzZVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib3VuZGFyeVBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBwb3NpdGlvbiA9IG5ldyBQb2ludChcbiAgICAgICAgICBib3VuZGFyeVBvaW50c1tpXS54IC0gcmVjdC5zaXplLnggLSB0aGlzLnBhZGRpbmdUb3BSaWdodC54LFxuICAgICAgICAgIGkgPiAwID8gKGJvdW5kYXJ5UG9pbnRzW2kgLSAxXS55ICsgdGhpcy55R2FwQmV0d2VlbkRyYWdnYWJsZXMpIDogKGJvdW5kUmVjdC5wb3NpdGlvbi55ICsgdGhpcy5wYWRkaW5nVG9wUmlnaHQueSlcbiAgICAgICAgKVxuXG4gICAgICAgIGlzVmFsaWQgPSAocG9zaXRpb24ueCA+IHJlY3QucG9zaXRpb24ueClcbiAgICAgICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgcG9zaXRpb24gPSBuZXcgUG9pbnQoXG4gICAgICAgICAgYm91bmRSZWN0LmdldFAyKCkueCAgLSByZWN0LnNpemUueCAtIHRoaXMucGFkZGluZ1RvcFJpZ2h0LngsXG4gICAgICAgICAgYm91bmRhcnlQb2ludHNbYm91bmRhcnlQb2ludHMubGVuZ3RoIC0gMV0ueSArIChyZWN0SW5kZXggPiAwID8gdGhpcy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgOiB0aGlzLnBhZGRpbmdUb3BSaWdodC55KVxuICAgICAgICApXG4gICAgICB9XG4gICAgICByZWN0LnBvc2l0aW9uID0gcG9zaXRpb25cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucmVtb3ZhYmxlICYmIHJlY3QuZ2V0UDQoKS55ID4gYm91bmRSZWN0LmdldFA0KCkueSkge1xuICAgICAgICByZWN0LnJlbW92YWJsZSA9IHRydWVcbiAgICAgIH1cbiAgICAgIGJvdW5kYXJ5UG9pbnRzID0gYWRkUG9pbnRUb0JvdW5kUG9pbnRzKGJvdW5kYXJ5UG9pbnRzLCByZWN0LmdldFA0KCkuYWRkKHRoaXMucGFkZGluZ0JvdHRvbU5lZ0xlZnQpLCB0cnVlKVxuICAgIH0pXG4gICAgcmV0dXJuIHJlY3RhbmdsZUxpc3RcbiAgfVxufVxuXG5leHBvcnQgeyBOb3RDcm9zc2luZ1N0cmF0ZWd5LCBGbG9hdExlZnRTdHJhdGVneSwgRmxvYXRSaWdodFN0cmF0ZWd5IH1cbiIsImltcG9ydCByYW5nZSBmcm9tICcuL3V0aWxzL3JhbmdlLmpzJ1xuaW1wb3J0IHJlbW92ZUl0ZW0gZnJvbSAnLi91dGlscy9yZW1vdmUtYXJyYXktaXRlbSdcbmltcG9ydCBnZXREZWZhdWx0Q29udGFpbmVyIGZyb20gJy4vdXRpbHMvZ2V0LWRlZmF1bHQtY29udGFpbmVyJ1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50RW1pdHRlcidcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSAnLi9nZW9tZXRyeS9yZWN0YW5nbGUnXG5pbXBvcnQgeyB0cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5IH0gZnJvbSAnLi9nZW9tZXRyeS9kaXN0YW5jZXMnXG5pbXBvcnQgeyBzY29wZXMsIGRlZmF1bHRTY29wZSB9IGZyb20gJy4vc2NvcGUnXG5cbmltcG9ydCB7IEZsb2F0TGVmdFN0cmF0ZWd5IH0gZnJvbSAnLi9wb3NpdGlvbmluZydcbmltcG9ydCB7IEJvdW5kVG9FbGVtZW50IH0gZnJvbSAnLi9ib3VuZGluZydcblxuY29uc3QgYWRkVG9EZWZhdWx0U2NvcGUgPSBmdW5jdGlvbih0YXJnZXQpIHtcbiAgZGVmYXVsdFNjb3BlLmFkZFRhcmdldCh0YXJnZXQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhcmdldCBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGRyYWdnYWJsZXMsIG9wdGlvbnMgPSB7fSkge1xuICAgIHN1cGVyKG9wdGlvbnMpXG4gICAgY29uc3QgdGFyZ2V0ID0gdGhpc1xuXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICB0aW1lRW5kOiAyMDAsXG4gICAgICB0aW1lRXhjYW5nZTogNDAwXG4gICAgfSwgb3B0aW9ucylcblxuICAgIHRoaXMucG9zaXRpb25pbmdTdHJhdGVneSA9IG9wdGlvbnMuc3RyYXRlZ3kgfHwgbmV3IEZsb2F0TGVmdFN0cmF0ZWd5KFxuICAgICAgdGhpcy5nZXRSZWN0YW5nbGUuYmluZCh0aGlzKSxcbiAgICAgIHtcbiAgICAgICAgcmFkaXVzOiA4MCxcbiAgICAgICAgZ2V0RGlzdGFuY2U6IHRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3RvcnkoeyB4OiAxLCB5OiA0IH0pLFxuICAgICAgICByZW1vdmFibGU6IHRydWVcbiAgICAgIH1cbiAgICApXG5cbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG4gICAgZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS50YXJnZXRzLnB1c2godGFyZ2V0KSlcbiAgICB0aGlzLmRyYWdnYWJsZXMgPSBkcmFnZ2FibGVzXG5cbiAgICBUYXJnZXQuZW1pdHRlci5lbWl0KCd0YXJnZXQ6Y3JlYXRlJywgdGhpcylcblxuICAgIHRoaXMuc3RhcnRCb3VuZGluZygpXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIHN0YXJ0Qm91bmRpbmcoKSB7XG4gICAgdGhpcy5ib3VuZCA9IHRoaXMub3B0aW9ucy5ib3VuZCB8fCBCb3VuZFRvRWxlbWVudC5ib3VuZGluZyh0aGlzLmVsZW1lbnQpXG4gIH1cblxuICBwb3NpdGlvbmluZyAoZHJhZ2dhYmxlcywgaW5kZXhlc09mTmV3KSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25pbmdTdHJhdGVneS5wb3NpdGlvbmluZyhkcmFnZ2FibGVzLCBpbmRleGVzT2ZOZXcpXG4gIH1cblxuICBzb3J0aW5nIChvbGREcmFnZ2FibGVzLCBuZXdEcmFnZ2FibGVzLCBpbmRleE9mTmV3cykge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uaW5nU3RyYXRlZ3kuc29ydGluZyhvbGREcmFnZ2FibGVzLCBuZXdEcmFnZ2FibGVzLCBpbmRleE9mTmV3cylcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgbGV0IHJlY3RhbmdsZXMsIGluZGV4ZXNPZk5ld1xuXG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMgPSB0aGlzLmRyYWdnYWJsZXMuZmlsdGVyKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGxldCBlbGVtZW50ID0gZHJhZ2dhYmxlLmVsZW1lbnQucGFyZW50Tm9kZVxuICAgICAgd2hpbGUgKGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQgPT09IHRoaXMuZWxlbWVudCkge1xuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfSlcblxuICAgIGlmICh0aGlzLmlubmVyRHJhZ2dhYmxlcy5sZW5ndGgpIHtcbiAgICAgIGluZGV4ZXNPZk5ldyA9IHJhbmdlKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmxlbmd0aClcbiAgICAgIHJlY3RhbmdsZXMgPSB0aGlzLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICAgIH0pLCBpbmRleGVzT2ZOZXcpXG4gICAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIGluZGV4ZXNPZk5ldylcbiAgICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gdGhpcy5lbWl0KCd0YXJnZXQ6YWRkJywgZHJhZ2dhYmxlKSlcbiAgICB9XG4gIH1cblxuICBnZXRSZWN0YW5nbGUoKSB7XG4gICAgcmV0dXJuIFJlY3RhbmdsZS5mcm9tRWxlbWVudChcbiAgICAgIHRoaXMuZWxlbWVudCxcbiAgICAgIHRoaXMuY29udGFpbmVyLFxuICAgICAgdGhpcy5vcHRpb25zLmlzQ29udGVudEJveFNpemUsXG4gICAgICB0cnVlXG4gICAgKVxuICB9XG5cbiAgY2F0Y2hEcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5jYXRjaERyYWdnYWJsZSkge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5jYXRjaERyYWdnYWJsZSh0aGlzLCBkcmFnZ2FibGUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRhcmdldFJlY3RhbmdsZSA9IHRoaXMuZ2V0UmVjdGFuZ2xlKClcbiAgICAgIGNvbnN0IGRyYWdnYWJsZVNxdWFyZSA9IGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKS5nZXRTcXVhcmUoKVxuXG4gICAgICByZXR1cm4gZHJhZ2dhYmxlU3F1YXJlIDwgdGFyZ2V0UmVjdGFuZ2xlLmdldFNxdWFyZSgpXG4gICAgICAgICAgICAgICYmIHRhcmdldFJlY3RhbmdsZS5pbmNsdWRlUG9pbnQoZHJhZ2dhYmxlLmdldENlbnRlcigpKVxuICAgIH1cbiAgfVxuXG4gIGdldFBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFJlY3RhbmdsZSgpLnBvc2l0aW9uXG4gIH1cblxuICBnZXRTaXplKCkge1xuICAgIHJldHVybiB0aGlzLmdldFJlY3RhbmdsZSgpLnNpemVcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgc2NvcGVzLmZvckVhY2goKHNjb3BlKSA9PiByZW1vdmVJdGVtKHNjb3BlLnRhcmdldHMsIHRoaXMpKVxuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBbXSlcbiAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIFtdLCAwKVxuICB9XG5cbiAgb25FbmQoZHJhZ2dhYmxlKSB7XG4gICAgY29uc3QgbmV3RHJhZ2dhYmxlc0luZGV4ID0gW11cblxuICAgIGlmICh0aGlzLmdldFJlY3RhbmdsZSgpLmluY2x1ZGVQb2ludChkcmFnZ2FibGUuZ2V0Q2VudGVyKCkpKSB7XG4gICAgICBkcmFnZ2FibGUucG9zaXRpb24gPSB0aGlzLmJvdW5kKGRyYWdnYWJsZS5wb3NpdGlvbiwgZHJhZ2dhYmxlLmdldFNpemUoKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgdGhpcy5lbWl0KCd0YXJnZXQ6YmVmb3JlQWRkJywgZHJhZ2dhYmxlKVxuXG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMgPSB0aGlzLnNvcnRpbmcodGhpcy5pbm5lckRyYWdnYWJsZXMsIFtkcmFnZ2FibGVdLCBuZXdEcmFnZ2FibGVzSW5kZXgpXG4gICAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgbmV3RHJhZ2dhYmxlc0luZGV4KVxuXG4gICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBuZXdEcmFnZ2FibGVzSW5kZXgpXG4gICAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTEpIHtcbiAgICAgIHRoaXMuYWRkUmVtb3ZlT25Nb3ZlKGRyYWdnYWJsZSlcbiAgICB9XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIHNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIGluZGV4ZXNPZk5ldywgdGltZSkge1xuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnNsaWNlKDApLmZvckVhY2goKGRyYWdnYWJsZSwgaSkgPT4ge1xuICAgICAgY29uc3QgcmVjdCA9IHJlY3RhbmdsZXNbaV0sXG4gICAgICAgIHRpbWVFbmQgPSB0aW1lIHx8IHRpbWUgPT09IDAgPyB0aW1lIDogaW5kZXhlc09mTmV3LmluZGV4T2YoaSkgIT09IC0xID8gdGhpcy5vcHRpb25zLnRpbWVFbmQgOiB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2VcblxuICAgICAgaWYgKHJlY3QucmVtb3ZhYmxlKSB7XG4gICAgICAgIGRyYWdnYWJsZS5tb3ZlKGRyYWdnYWJsZS5pbml0aWFsUG9zaXRpb24sIHRpbWVFbmQsIHRydWUsIHRydWUpXG4gICAgICAgIHJlbW92ZUl0ZW0odGhpcy5pbm5lckRyYWdnYWJsZXMsIGRyYWdnYWJsZSlcbiAgICAgICAgdGhpcy5lbWl0KCd0YXJnZXQ6cmVtb3ZlJywgZHJhZ2dhYmxlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZHJhZ2dhYmxlLm1vdmUocmVjdC5wb3NpdGlvbiwgdGltZUVuZCwgdHJ1ZSwgdHJ1ZSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgYWRkKGRyYWdnYWJsZSwgdGltZSkge1xuICAgIGNvbnN0IG5ld0RyYWdnYWJsZXNJbmRleCA9IHRoaXMuaW5uZXJEcmFnZ2FibGVzLmxlbmd0aFxuXG4gICAgdGhpcy5lbWl0KCd0YXJnZXQ6YmVmb3JlQWRkJywgZHJhZ2dhYmxlKVxuXG4gICAgdGhpcy5wdXNoSW5uZXJEcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICAgIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgfSksIG5ld0RyYWdnYWJsZXNJbmRleCwgZHJhZ2dhYmxlKVxuXG4gICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBbbmV3RHJhZ2dhYmxlc0luZGV4XSwgdGltZSB8fCAwKVxuICAgIGlmICh0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkgIT09IC0xKSB7XG4gICAgICB0aGlzLmFkZFJlbW92ZU9uTW92ZShkcmFnZ2FibGUpXG4gICAgfVxuICB9XG5cbiAgcHVzaElubmVyRHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIGlmICh0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSk9PT0tMSkge1xuICAgICAgdGhpcy5pbm5lckRyYWdnYWJsZXMucHVzaChkcmFnZ2FibGUpXG4gICAgfVxuICB9XG5cbiAgYWRkUmVtb3ZlT25Nb3ZlKGRyYWdnYWJsZSkge1xuICAgIGRyYWdnYWJsZS5vbignZHJhZzptb3ZlJywgdGhpcy5yZW1vdmVIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgdGhpcy5yZW1vdmUoZHJhZ2dhYmxlKVxuICAgIH0pXG5cbiAgICB0aGlzLmVtaXQoJ3RhcmdldDphZGQnLCBkcmFnZ2FibGUpXG4gIH1cblxuICByZW1vdmUoZHJhZ2dhYmxlKSB7XG4gICAgZHJhZ2dhYmxlLnVuc3Vic2NyaWJlKCdkcmFnOm1vdmUnLCB0aGlzLnJlbW92ZUhhbmRsZXIpXG5cbiAgICBjb25zdCBpbmRleCA9IHRoaXMuaW5uZXJEcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKVxuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnNwbGljZShpbmRleCwgMSlcblxuICAgIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgfSksIFtdKVxuXG4gICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBbXSlcbiAgICB0aGlzLmVtaXQoJ3RhcmdldDpyZW1vdmUnLCBkcmFnZ2FibGUpXG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5tb3ZlKGRyYWdnYWJsZS5pbml0aWFsUG9zaXRpb24sIDAsIHRydWUsIHRydWUpXG4gICAgICB0aGlzLmVtaXQoJ3RhcmdldDpyZW1vdmUnLCBkcmFnZ2FibGUpXG4gICAgfSlcbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcyA9IFtdXG4gIH1cblxuICBnZXRTb3J0ZWREcmFnZ2FibGVzKCkge1xuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnNsaWNlKClcbiAgfVxuXG4gIGdldCBjb250YWluZXIoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9jb250YWluZXIgPSB0aGlzLl9jb250YWluZXIgfHwgdGhpcy5vcHRpb25zLmNvbnRhaW5lciB8fCB0aGlzLm9wdGlvbnMucGFyZW50IHx8IGdldERlZmF1bHRDb250YWluZXIodGhpcy5lbGVtZW50KSlcbiAgfVxufVxuXG5UYXJnZXQuZW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuVGFyZ2V0LmVtaXR0ZXIub24oJ3RhcmdldDpjcmVhdGUnLCBhZGRUb0RlZmF1bHRTY29wZSlcbiIsImltcG9ydCByZW1vdmVJdGVtIGZyb20gJy4vdXRpbHMvcmVtb3ZlLWFycmF5LWl0ZW0nXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnRFbWl0dGVyJ1xuaW1wb3J0IERyYWdnYWJsZSBmcm9tICcuL2RyYWdnYWJsZSdcbmltcG9ydCBUYXJnZXQgZnJvbSAnLi90YXJnZXQnXG5cbmNvbnN0IHNjb3BlcyA9IFtdXG5cbmNsYXNzIFNjb3BlIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoZHJhZ2dhYmxlcywgdGFyZ2V0cywgb3B0aW9ucz17fSkge1xuICAgIHN1cGVyKG9wdGlvbnMpXG4gICAgc2NvcGVzLmZvckVhY2goKHNjb3BlKSA9PiB7XG4gICAgICBpZiAoZHJhZ2dhYmxlcykge1xuICAgICAgICBkcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgICAgIHJlbW92ZUl0ZW0oc2NvcGUuZHJhZ2dhYmxlcywgZHJhZ2dhYmxlKVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICBpZiAodGFyZ2V0cykge1xuICAgICAgICB0YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4ge1xuICAgICAgICAgIHJlbW92ZUl0ZW0oc2NvcGUudGFyZ2V0cywgdGFyZ2V0KVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLmRyYWdnYWJsZXMgPSBkcmFnZ2FibGVzIHx8IFtdXG4gICAgdGhpcy50YXJnZXRzID0gdGFyZ2V0cyB8fCBbXVxuICAgIHNjb3Blcy5wdXNoKHRoaXMpXG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgdGltZUVuZDogKG9wdGlvbnMudGltZUVuZCkgfHwgNDAwXG4gICAgfVxuXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLmRyYWdFbmRBY3Rpb24gPSAoKSA9PiB0aGlzLm9uRW5kKGRyYWdnYWJsZSlcbiAgICB9KVxuICB9XG5cbiAgYWRkRHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5wdXNoKGRyYWdnYWJsZSlcbiAgICBkcmFnZ2FibGUuZHJhZ0VuZEFjdGlvbiA9ICgpID0+IHRoaXMub25FbmQoZHJhZ2dhYmxlKVxuICB9XG5cbiAgYWRkVGFyZ2V0KHRhcmdldCkge1xuICAgIHRoaXMudGFyZ2V0cy5wdXNoKHRhcmdldClcbiAgfVxuXG4gIG9uRW5kKGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IHNob3RUYXJnZXRzID0gdGhpcy50YXJnZXRzLmZpbHRlcigodGFyZ2V0KSA9PiB7XG4gICAgICByZXR1cm4gdGFyZ2V0LmRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMVxuICAgIH0pLmZpbHRlcigodGFyZ2V0KSA9PiB7XG4gICAgICByZXR1cm4gdGFyZ2V0LmNhdGNoRHJhZ2dhYmxlKGRyYWdnYWJsZSlcbiAgICB9KS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICByZXR1cm4gYS5nZXRSZWN0YW5nbGUoKS5nZXRTcXVhcmUoKSAtIGIuZ2V0UmVjdGFuZ2xlKCkuZ2V0U3F1YXJlKClcbiAgICB9KVxuXG4gICAgaWYgKHNob3RUYXJnZXRzLmxlbmd0aCkge1xuICAgICAgc2hvdFRhcmdldHNbMF0ub25FbmQoZHJhZ2dhYmxlKVxuICAgIH0gZWxzZSBpZiAoZHJhZ2dhYmxlLnRhcmdldHMubGVuZ3RoKSB7XG4gICAgICBkcmFnZ2FibGUucGluUG9zaXRpb24oZHJhZ2dhYmxlLmluaXRpYWxQb3NpdGlvbiwgdGhpcy5vcHRpb25zLnRpbWVFbmQpXG4gICAgfVxuXG4gICAgdGhpcy5lbWl0KCdzY29wZTpjaGFuZ2UnKVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy50YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4gdGFyZ2V0LnJlc2V0KCkpXG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5yZWZyZXNoKCkpXG4gICAgdGhpcy50YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4gdGFyZ2V0LnJlZnJlc2goKSlcbiAgfVxuXG4gIGdldCBwb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0cy5tYXAoKHRhcmdldCkgPT4ge1xuICAgICAgcmV0dXJuIHRhcmdldC5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHRoaXMuZHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkpXG4gICAgfSlcbiAgfVxuXG4gIHNldCBwb3NpdGlvbnMocG9zaXRpb25zKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9ICd3cm9uZyBhcnJheSBsZW5ndGgnXG4gICAgaWYgKHBvc2l0aW9ucy5sZW5ndGggPT09IHRoaXMudGFyZ2V0cy5sZW5ndGgpIHtcbiAgICAgIHRoaXMudGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHRhcmdldC5yZXNldCgpKVxuXG4gICAgICBwb3NpdGlvbnMuZm9yRWFjaCgodGFyZ2V0SW5kZXhlcywgaSkgPT4ge1xuICAgICAgICB0YXJnZXRJbmRleGVzLmZvckVhY2goKGluZGV4KSA9PiB7XG4gICAgICAgICAgdGhpcy50YXJnZXRzW2ldLmFkZCh0aGlzLmRyYWdnYWJsZXNbaW5kZXhdKVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbWVzc2FnZVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBkZWZhdWx0U2NvcGUgPSBuZXcgU2NvcGUoKVxuXG5mdW5jdGlvbiBzY29wZShmbikge1xuICBjb25zdCBjdXJyZW50U2NvcGUgPSBuZXcgU2NvcGUoKVxuXG4gIGNvbnN0IGFkZERyYWdnYWJsZVRvU2NvcGUgPSBmdW5jdGlvbihkcmFnZ2FibGUpIHtcbiAgICBjdXJyZW50U2NvcGUuYWRkRHJhZ2dhYmxlKGRyYWdnYWJsZSlcbiAgICBEcmFnZ2FibGUuZW1pdHRlci5pbnRlcnJ1cHQoKVxuICB9XG5cbiAgY29uc3QgYWRkVGFyZ2V0VG9TY29wZSA9IGZ1bmN0aW9uKHRhcmdldCkge1xuICAgIGN1cnJlbnRTY29wZS5hZGRUYXJnZXQodGFyZ2V0KVxuICAgIERyYWdnYWJsZS5lbWl0dGVyLmludGVycnVwdCgpXG4gIH1cblxuICBEcmFnZ2FibGUuZW1pdHRlci5wcmVwZW5kT24oJ2RyYWdnYWJsZTpjcmVhdGUnLCBhZGREcmFnZ2FibGVUb1Njb3BlKVxuICBUYXJnZXQuZW1pdHRlci5wcmVwZW5kT24oJ3RhcmdldDpjcmVhdGUnLCBhZGRUYXJnZXRUb1Njb3BlKVxuICBmbi5jYWxsKClcbiAgRHJhZ2dhYmxlLmVtaXR0ZXIudW5zdWJzY3JpYmUoJ2RyYWdnYWJsZTpjcmVhdGUnLCBhZGREcmFnZ2FibGVUb1Njb3BlKVxuICBUYXJnZXQuZW1pdHRlci51bnN1YnNjcmliZSgndGFyZ2V0OmNyZWF0ZScsIGFkZFRhcmdldFRvU2NvcGUpXG4gIHJldHVybiBjdXJyZW50U2NvcGVcbn1cblxuZXhwb3J0IHsgc2NvcGVzLCBkZWZhdWx0U2NvcGUsIFNjb3BlLCBzY29wZSB9XG4iLCJmdW5jdGlvbiBjaGVja1N1cHBvcnRQYXNzaXZlRXZlbnRzKCkge1xuICBsZXQgcGFzc2l2ZVN1cHBvcnRlZCA9IGZhbHNlXG5cbiAgdHJ5IHtcbiAgICBjb25zdCBvcHRpb25zID0gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAncGFzc2l2ZScsIHtcbiAgICAgIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIChwYXNzaXZlU3VwcG9ydGVkID0gdHJ1ZSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3QnLCBvcHRpb25zLCBvcHRpb25zKVxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0ZXN0Jywgb3B0aW9ucywgb3B0aW9ucylcbiAgfSBjYXRjaCAoX2Vycikge1xuICAgIHBhc3NpdmVTdXBwb3J0ZWQgPSBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIHBhc3NpdmVTdXBwb3J0ZWRcbn1cblxuZXhwb3J0IGNvbnN0IGlzU3VwcG9ydFBhc3NpdmVFdmVudHMgPSBjaGVja1N1cHBvcnRQYXNzaXZlRXZlbnRzKClcblxuZnVuY3Rpb24gZXZlbnRPcHRpb25zKG9wdGlvbnMsIGZhbGxiYWNrID0gZmFsc2UpIHtcbiAgcmV0dXJuIGlzU3VwcG9ydFBhc3NpdmVFdmVudHMgPyBvcHRpb25zIDogZmFsbGJhY2tcbn1cblxuZXhwb3J0IHsgZXZlbnRPcHRpb25zIH1cblxuZXhwb3J0IGRlZmF1bHQgaXNTdXBwb3J0UGFzc2l2ZUV2ZW50c1xuIiwiaW1wb3J0IGdldERlZmF1bHRDb250YWluZXIgZnJvbSAnLi91dGlscy9nZXQtZGVmYXVsdC1jb250YWluZXInXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnRFbWl0dGVyJ1xuaW1wb3J0IGdldFN0eWxlUHJvcGVydHkgZnJvbSAnZGVzYW5kcm8tZ2V0LXN0eWxlLXByb3BlcnR5J1xuaW1wb3J0IHsgQm91bmRUb0VsZW1lbnQgfSBmcm9tICcuL2JvdW5kaW5nJ1xuaW1wb3J0IFBvaW50IGZyb20gJy4vZ2VvbWV0cnkvcG9pbnQnXG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gJy4vZ2VvbWV0cnkvcmVjdGFuZ2xlJ1xuaW1wb3J0IHsgZGVmYXVsdFNjb3BlIH0gZnJvbSAnLi9zY29wZSdcbmltcG9ydCBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzIGZyb20gJy4vdXRpbHMvaXMtc3VwcG9ydC1wYXNzaXZlLWV2ZW50cydcblxuY29uc3QgaXNUb3VjaCA9ICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvd1xuY29uc3QgbW91c2VFdmVudHMgPSB7XG4gIHN0YXJ0OiAnbW91c2Vkb3duJyxcbiAgbW92ZTogJ21vdXNlbW92ZScsXG4gIGVuZDogJ21vdXNldXAnXG59XG5jb25zdCB0b3VjaEV2ZW50cyA9IHtcbiAgc3RhcnQ6ICd0b3VjaHN0YXJ0JyxcbiAgbW92ZTogJ3RvdWNobW92ZScsXG4gIGVuZDogJ3RvdWNoZW5kJ1xufVxuY29uc3QgZHJhZ2dhYmxlcyA9IFtdXG5jb25zdCB0cmFuc2Zvcm1Qcm9wZXJ0eSA9IGdldFN0eWxlUHJvcGVydHkoJ3RyYW5zZm9ybScpXG5jb25zdCB0cmFuc2l0aW9uUHJvcGVydHkgPSBnZXRTdHlsZVByb3BlcnR5KCd0cmFuc2l0aW9uJylcblxuZnVuY3Rpb24gZ2V0VG91Y2hCeUlEKGVsZW1lbnQsIHRvdWNoSWQpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50LmNoYW5nZWRUb3VjaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGVsZW1lbnQuY2hhbmdlZFRvdWNoZXNbaV0uaWRlbnRpZmllciA9PT0gdG91Y2hJZCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQuY2hhbmdlZFRvdWNoZXNbaV1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmZ1bmN0aW9uIHByZXZlbnREb3VibGVJbml0KGRyYWdnYWJsZSkge1xuICBjb25zdCBtZXNzYWdlID0gXCJmb3IgdGhpcyBlbGVtZW50IERyYWdlZS5EcmFnZ2FibGUgaXMgYWxyZWFkeSBleGlzdCwgZG9uJ3QgY3JlYXRlIGl0IHR3aWNlIFwiXG4gIGlmIChkcmFnZ2FibGVzLnNvbWUoKGV4aXN0aW5nKSA9PiBkcmFnZ2FibGUuZWxlbWVudCA9PT0gZXhpc3RpbmcuZWxlbWVudCkpIHtcbiAgICB0aHJvdyBtZXNzYWdlXG4gIH1cbiAgZHJhZ2dhYmxlcy5wdXNoKGRyYWdnYWJsZSlcbn1cblxuZnVuY3Rpb24gYWRkVG9EZWZhdWx0U2NvcGUoZHJhZ2dhYmxlKSB7XG4gIGRlZmF1bHRTY29wZS5hZGREcmFnZ2FibGUoZHJhZ2dhYmxlKVxufVxuXG5mdW5jdGlvbiBjb3B5U3R5bGVzKHNvdXJjZSwgZGVzdGluYXRpb24pIHtcbiAgY29uc3QgY3MgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShzb3VyY2UpXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGtleSA9IGNzW2ldXG4gICAgaWYgKChrZXkuaW5kZXhPZigndHJhbnNpdGlvbicpIDwgMCkgJiYgKGtleS5pbmRleE9mKCd0cmFuc2Zvcm0nKSA8IDApKSB7XG4gICAgICBkZXN0aW5hdGlvbi5zdHlsZVtrZXldID0gY3Nba2V5XVxuICAgIH1cbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc291cmNlLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgY29weVN0eWxlcyhzb3VyY2UuY2hpbGRyZW5baV0sIGRlc3RpbmF0aW9uLmNoaWxkcmVuW2ldKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYWdnYWJsZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcihvcHRpb25zKVxuICAgIHRoaXMudGFyZ2V0cyA9IFtdXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9uc1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgICBwcmV2ZW50RG91YmxlSW5pdCh0aGlzKVxuICAgIERyYWdnYWJsZS5lbWl0dGVyLmVtaXQoJ2RyYWdnYWJsZTpjcmVhdGUnLCB0aGlzKVxuICAgIHRoaXMuX2VuYWJsZSA9IHRydWVcblxuICAgIHRoaXMuc3RhcnRCb3VuZGluZygpXG4gICAgdGhpcy5zdGFydFBvc2l0aW9uaW5nKClcbiAgICB0aGlzLnN0YXJ0TGlzdGVuaW5nKClcbiAgfVxuXG4gIHN0YXJ0Qm91bmRpbmcoKSB7XG4gICAgaWYodGhpcy5vcHRpb25zLmJvdW5kKSB7XG4gICAgICB0aGlzLmJvdW5kaW5nID0geyBib3VuZDogdGhpcy5vcHRpb25zLmJvdW5kIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ib3VuZGluZyA9IG5ldyBCb3VuZFRvRWxlbWVudCh0aGlzLmNvbnRhaW5lciwgdGhpcy5jb250YWluZXIpXG4gICAgfVxuICB9XG5cbiAgc3RhcnRQb3NpdGlvbmluZygpIHtcbiAgICB0aGlzLl9zZXREZWZhdWx0VHJhbnNpdGlvbigpXG4gICAgdGhpcy5vZmZzZXQgPSBQb2ludC5lbGVtZW50T2Zmc2V0KHRoaXMuZWxlbWVudCwgdGhpcy5jb250YWluZXIsIHRydWUpXG4gICAgdGhpcy5waW5uZWRQb3NpdGlvbiA9IHRoaXMub2Zmc2V0XG4gICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMub2Zmc2V0XG4gICAgdGhpcy5pbml0aWFsUG9zaXRpb24gPSB0aGlzLm9wdGlvbnMucG9zaXRpb24gfHwgdGhpcy5vZmZzZXRcblxuICAgIHRoaXMucGluUG9zaXRpb24odGhpcy5pbml0aWFsUG9zaXRpb24pXG5cbiAgICBpZiAodGhpcy5ib3VuZGluZy5yZWZyZXNoKSB7XG4gICAgICB0aGlzLmJvdW5kaW5nLnJlZnJlc2goKVxuICAgIH1cbiAgfVxuXG4gIHN0YXJ0TGlzdGVuaW5nKCkge1xuICAgIHRoaXMuX2RyYWdTdGFydCA9IChldmVudCkgPT4gdGhpcy5kcmFnU3RhcnQoZXZlbnQpXG4gICAgdGhpcy5fZHJhZ01vdmUgPSAoZXZlbnQpID0+IHRoaXMuZHJhZ01vdmUoZXZlbnQpXG4gICAgdGhpcy5fZHJhZ0VuZCA9IChldmVudCkgPT4gdGhpcy5kcmFnRW5kKGV2ZW50KVxuICAgIHRoaXMuX25hdGl2ZURyYWdTdGFydCA9IChldmVudCkgPT4gdGhpcy5uYXRpdmVEcmFnU3RhcnQoZXZlbnQpXG4gICAgdGhpcy5fbmF0aXZlRHJhZ092ZXIgPSAoZXZlbnQpID0+IHRoaXMubmF0aXZlRHJhZ092ZXIoZXZlbnQpXG4gICAgdGhpcy5fbmF0aXZlRHJhZ0VuZCA9IChldmVudCkgPT4gdGhpcy5uYXRpdmVEcmFnRW5kKGV2ZW50KVxuICAgIHRoaXMuX25hdGl2ZURyb3AgPSAoZXZlbnQpID0+IHRoaXMubmF0aXZlRHJvcChldmVudClcbiAgICB0aGlzLl9zY3JvbGwgPSAoZXZlbnQpID0+IHRoaXMub25TY3JvbGwoZXZlbnQpXG5cbiAgICB0aGlzLmhhbmRsZXIuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0LCBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzID8geyBwYXNzaXZlOiBmYWxzZSB9IDogZmFsc2UpXG4gICAgdGhpcy5oYW5kbGVyLmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydCwgaXNTdXBwb3J0UGFzc2l2ZUV2ZW50cyA/IHsgcGFzc2l2ZTogZmFsc2UgfSA6IGZhbHNlKVxuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCB0aGlzLl9uYXRpdmVEcmFnU3RhcnQpXG4gIH1cblxuICBnZXRTaXplKCkge1xuICAgIHJldHVybiBQb2ludC5lbGVtZW50U2l6ZSh0aGlzLmVsZW1lbnQsIHRoaXMub3B0aW9ucy5pc0NvbnRlbnRCb3hTaXplKVxuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMub2Zmc2V0LmFkZCh0aGlzLl90cmFuc2Zvcm1Qb3NpdGlvbiB8fCBuZXcgUG9pbnQoMCwgMCkpXG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25cbiAgfVxuXG4gIGdldENlbnRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi5hZGQodGhpcy5nZXRTaXplKCkubXVsdCgwLjUpKVxuICB9XG5cbiAgX3NldERlZmF1bHRUcmFuc2l0aW9uICgpIHtcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNpdGlvblByb3BlcnR5XSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZWxlbWVudClbdHJhbnNpdGlvblByb3BlcnR5XVxuICB9XG5cbiAgX3NldFRyYW5zaXRpb24odGltZSkge1xuICAgIGxldCB0cmFuc2l0aW9uID0gdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV1cbiAgICBjb25zdCB0cmFuc2l0aW9uQ3NzID0gYHRyYW5zZm9ybSAke3RpbWV9bXNgXG5cbiAgICBpZiAoIS90cmFuc2Zvcm0gXFxkKm0/cy8udGVzdCh0cmFuc2l0aW9uKSkge1xuICAgICAgaWYgKHRyYW5zaXRpb24pIHtcbiAgICAgICAgdHJhbnNpdGlvbiArPSBgLCAke3RyYW5zaXRpb25Dc3N9YFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJhbnNpdGlvbiA9IHRyYW5zaXRpb25Dc3NcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdHJhbnNpdGlvbiA9IHRyYW5zaXRpb24ucmVwbGFjZSgvdHJhbnNmb3JtIFxcZCptP3MvLCB0cmFuc2l0aW9uQ3NzKVxuICAgIH1cblxuICAgIHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldID0gdHJhbnNpdGlvblxuICB9XG5cbiAgX3NldFRyYW5zbGF0ZShwb2ludCkge1xuICAgIHRoaXMuX3RyYW5zZm9ybVBvc2l0aW9uID0gcG9pbnRcbiAgICBjb25zdCB0cmFuc2xhdGVDc3MgPSBgdHJhbnNsYXRlM2QoJHtwb2ludC54fXB4LCAke3BvaW50Lnl9cHgsIDBweClgXG5cbiAgICBsZXQgdHJhbnNmb3JtID0gdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BlcnR5XVxuXG4gICAgaWYgKHRoaXMuc2hvdWxkUmVtb3ZlWmVyb1RyYW5zbGF0ZSAmJiBwb2ludC54ID09PSAwICYmIHBvaW50LnkgPT09IDApIHtcbiAgICAgIHRyYW5zZm9ybSA9IHRyYW5zZm9ybS5yZXBsYWNlKC90cmFuc2xhdGUzZFxcKFteKV0rXFwpLywgJycpXG4gICAgfSBlbHNlIGlmICghL3RyYW5zbGF0ZTNkXFwoW14pXStcXCkvLnRlc3QodHJhbnNmb3JtKSkge1xuICAgICAgaWYgKHRyYW5zZm9ybSkge1xuICAgICAgICB0cmFuc2Zvcm0gKz0gJyAnXG4gICAgICB9XG4gICAgICB0cmFuc2Zvcm0gKz0gdHJhbnNsYXRlQ3NzXG4gICAgfSBlbHNlIHtcbiAgICAgIHRyYW5zZm9ybSA9IHRyYW5zZm9ybS5yZXBsYWNlKC90cmFuc2xhdGUzZFxcKFteKV0rXFwpLywgdHJhbnNsYXRlQ3NzKVxuICAgIH1cblxuICAgIHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wZXJ0eV0gPSB0cmFuc2Zvcm1cbiAgfVxuXG4gIG1vdmUocG9pbnQsIHRpbWU9MCwgaXNTaWxlbnQ9ZmFsc2UpIHtcbiAgICBwb2ludCA9IHBvaW50LmNsb25lKClcblxuICAgIHRoaXMuZGV0ZXJtaW5lRGlyZWN0aW9uKHBvaW50KVxuICAgIHRoaXMucG9zaXRpb24gPSBwb2ludFxuXG4gICAgdGhpcy5fc2V0VHJhbnNpdGlvbih0aW1lKVxuICAgIHRoaXMuX3NldFRyYW5zbGF0ZShwb2ludC5zdWIodGhpcy5vZmZzZXQpKVxuXG4gICAgaWYgKCFpc1NpbGVudCkge1xuICAgICAgdGhpcy5lbWl0KCdkcmFnOm1vdmUnKVxuICAgIH1cbiAgfVxuXG4gIHBpblBvc2l0aW9uKHBvaW50LCB0aW1lPTAsIHNpbGVudD10cnVlKSB7XG4gICAgdGhpcy5waW5uZWRQb3NpdGlvbiA9IHBvaW50LmNsb25lKClcbiAgICB0aGlzLm1vdmUodGhpcy5waW5uZWRQb3NpdGlvbiwgdGltZSwgc2lsZW50KVxuICB9XG5cbiAgcmVzZXRQb3NpdGlvblRvSW5pdGlhbCAoKSB7XG4gICAgdGhpcy5waW5Qb3NpdGlvbih0aGlzLmluaXRpYWxQb3NpdGlvbilcbiAgfVxuXG4gIHJlZnJlc2hQb3NpdGlvbiAoKSB7XG4gICAgdGhpcy5zZXRQb3NpdGlvbih0aGlzLmdldFBvc2l0aW9uKCkpXG4gIH1cblxuICBzZXRQb3NpdGlvbihwb2ludCkge1xuICAgIHBvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIHRoaXMucG9zaXRpb24gPSBwb2ludFxuICAgIHRoaXMuX3NldFRyYW5zaXRpb24oMClcbiAgICB0aGlzLl9zZXRUcmFuc2xhdGUocG9pbnQuc3ViKHRoaXMub2Zmc2V0KSlcbiAgfVxuXG4gIGRldGVybWluZURpcmVjdGlvbihwb2ludCkge1xuICAgIHRoaXMubGVmdERpcmVjdGlvbiA9ICh0aGlzLnBvc2l0aW9uLnggPCBwb2ludC54KVxuICAgIHRoaXMucmlnaHREaXJlY3Rpb24gPSAodGhpcy5wb3NpdGlvbi54ID4gcG9pbnQueClcbiAgICB0aGlzLnVwRGlyZWN0aW9uID0gKHRoaXMucG9zaXRpb24ueSA+IHBvaW50LnkpXG4gICAgdGhpcy5kb3duRGlyZWN0aW9uID0gKHRoaXMucG9zaXRpb24ueSA8IHBvaW50LnkpXG4gIH1cblxuICBkcmFnU3RhcnQoZXZlbnQpIHtcbiAgICB0aGlzLmN1cnJlbnRFdmVudCA9IGV2ZW50XG4gICAgaWYgKCF0aGlzLl9lbmFibGUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGlzVG91Y2hFdmVudCA9IChpc1RvdWNoICYmIChldmVudCBpbnN0YW5jZW9mIHdpbmRvdy5Ub3VjaEV2ZW50KSlcblxuICAgIHRoaXMudG91Y2hQb2ludCA9IHRoaXMuX3N0YXJ0VG91Y2hQb2ludCA9IG5ldyBQb2ludChcbiAgICAgIGlzVG91Y2hFdmVudCA/IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYIDogZXZlbnQuY2xpZW50WCxcbiAgICAgIGlzVG91Y2hFdmVudCA/IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZIDogZXZlbnQuY2xpZW50WVxuICAgIClcblxuICAgIHRoaXMuX3N0YXJ0UG9zaXRpb24gPSB0aGlzLmdldFBvc2l0aW9uKClcbiAgICBpZiAoaXNUb3VjaEV2ZW50KSB7XG4gICAgICB0aGlzLl90b3VjaElkID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uaWRlbnRpZmllclxuICAgIH1cblxuICAgIHRoaXMuX3N0YXJ0U2Nyb2xsUG9pbnQgPSBuZXcgUG9pbnQod2luZG93LnNjcm9sbFgsIHdpbmRvdy5zY3JvbGxZKVxuXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBpZiAoZXZlbnQudGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJbnB1dEVsZW1lbnQgfHxcbiAgICAgICAgICBldmVudC50YXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElucHV0RWxlbWVudCkge1xuICAgICAgZXZlbnQudGFyZ2V0LmZvY3VzKClcbiAgICB9XG5cbiAgICBpZiAoISh0aGlzLm5hdGl2ZURyYWdBbmREcm9wIHx8XG4gICAgICAgICAgICBldmVudC50YXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElucHV0RWxlbWVudCB8fFxuICAgICAgICAgICAgZXZlbnQudGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJbnB1dEVsZW1lbnQpKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMubmF0aXZlRHJhZ0FuZERyb3ApIHtcbiAgICAgIGNvbnN0IGlzU2FmYXJpID0gL3ZlcnNpb25cXC8oXFxkKykuKz9zYWZhcmkvaS50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KVxuICAgICAgaWYgKChpc1RvdWNoRXZlbnQgJiYgdGhpcy5lbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3BPblRvdWNoKSB8fFxuICAgICAgICAgICAgIGlzU2FmYXJpIHx8XG4gICAgICAgICAgICAgdGhpcy5lbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3BGb3JBbGwpIHtcbiAgICAgICAgdGhpcy5lbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3AoZXZlbnQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsZW1lbnQuZHJhZ2dhYmxlID0gdHJ1ZVxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fbmF0aXZlRHJhZ0VuZCwgaXNTdXBwb3J0UGFzc2l2ZUV2ZW50cyA/IHsgcGFzc2l2ZTogZmFsc2UgfSA6IGZhbHNlKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlLCBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzID8geyBwYXNzaXZlOiBmYWxzZSB9IDogZmFsc2UpXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlLCBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzID8geyBwYXNzaXZlOiBmYWxzZSB9IDogZmFsc2UpXG5cbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kLCBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzID8geyBwYXNzaXZlOiBmYWxzZSB9IDogZmFsc2UpXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZCwgaXNTdXBwb3J0UGFzc2l2ZUV2ZW50cyA/IHsgcGFzc2l2ZTogZmFsc2UgfSA6IGZhbHNlKVxuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9zY3JvbGwpXG5cbiAgICB0aGlzLmlzRHJhZ2dpbmcgPSB0cnVlXG4gICAgdGhpcy5lbWl0KCdkcmFnOnN0YXJ0JylcbiAgfVxuXG4gIHN0b3BEcmFnZ2luZygpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCB0aGlzLl9uYXRpdmVEcmFnT3ZlcilcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcm9wJywgdGhpcy5fbmF0aXZlRHJvcClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcm9wJywgdGhpcy5fbmF0aXZlRHJvcClcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fc2Nyb2xsKVxuICAgIHRoaXMuZWxlbWVudC5kcmFnZ2FibGUgPSBmYWxzZVxuICAgIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdlZS1hY3RpdmUnKVxuICB9XG5cbiAgZHJhZ01vdmUoZXZlbnQpIHtcbiAgICB0aGlzLmN1cnJlbnRFdmVudCA9IGV2ZW50XG4gICAgbGV0IHRvdWNoXG5cbiAgICBjb25zdCBpc1RvdWNoRXZlbnQgPSAoaXNUb3VjaCAmJiAoZXZlbnQgaW5zdGFuY2VvZiB3aW5kb3cuVG91Y2hFdmVudCkpXG4gICAgaWYgKGlzVG91Y2hFdmVudCkge1xuICAgICAgdG91Y2ggPSBnZXRUb3VjaEJ5SUQoZXZlbnQsIHRoaXMuX3RvdWNoSWQpXG5cbiAgICAgIGlmICghdG91Y2gpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhpcy50b3VjaFBvaW50ID0gbmV3IFBvaW50KFxuICAgICAgaXNUb3VjaEV2ZW50ID8gdG91Y2gucGFnZVggOiBldmVudC5jbGllbnRYLFxuICAgICAgaXNUb3VjaEV2ZW50ID8gdG91Y2gucGFnZVkgOiBldmVudC5jbGllbnRZXG4gICAgKVxuXG4gICAgbGV0IHBvaW50ID0gdGhpcy5fc3RhcnRQb3NpdGlvbi5hZGQodGhpcy50b3VjaFBvaW50LnN1Yih0aGlzLl9zdGFydFRvdWNoUG9pbnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMuc2Nyb2xsUG9pbnQuc3ViKHRoaXMuX3N0YXJ0U2Nyb2xsUG9pbnQpKVxuXG4gICAgcG9pbnQgPSB0aGlzLmJvdW5kaW5nLmJvdW5kKHBvaW50LCB0aGlzLmdldFNpemUoKSlcbiAgICB0aGlzLm1vdmUocG9pbnQpXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RyYWdlZS1hY3RpdmUnKVxuICB9XG5cbiAgZHJhZ0VuZChldmVudCkge1xuICAgIGNvbnN0IGlzVG91Y2hFdmVudCA9IChpc1RvdWNoICYmIChldmVudCBpbnN0YW5jZW9mIHdpbmRvdy5Ub3VjaEV2ZW50KSlcblxuICAgIGlmIChpc1RvdWNoRXZlbnQgJiYgIWdldFRvdWNoQnlJRChldmVudCwgdGhpcy5fdG91Y2hJZCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIHRoaXMuZHJhZ0VuZEFjdGlvbigpXG4gICAgdGhpcy5lbWl0KCdkcmFnOmVuZCcpXG5cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG5cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcblxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9zY3JvbGwpXG5cbiAgICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZVxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2RyYWdnYWJsZScpXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2VlLWFjdGl2ZScpKVxuICB9XG5cbiAgb25TY3JvbGwoX2V2ZW50KSB7XG4gICAgbGV0IHBvaW50ID0gdGhpcy5fc3RhcnRQb3NpdGlvbi5hZGQodGhpcy50b3VjaFBvaW50LnN1Yih0aGlzLl9zdGFydFRvdWNoUG9pbnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMuc2Nyb2xsUG9pbnQuc3ViKHRoaXMuX3N0YXJ0U2Nyb2xsUG9pbnQpKVxuXG4gICAgcG9pbnQgPSB0aGlzLmJvdW5kaW5nLmJvdW5kKHBvaW50LCB0aGlzLmdldFNpemUoKSlcbiAgICBpZiAoIXRoaXMubmF0aXZlRHJhZ0FuZERyb3ApIHtcbiAgICAgIHRoaXMubW92ZShwb2ludClcbiAgICB9XG4gIH1cblxuICBuYXRpdmVEcmFnU3RhcnQoZXZlbnQpIHtcbiAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dCcsICdGaXJlRm94IGZpeCcpXG4gICAgZXZlbnQuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSAnbW92ZSdcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIHRoaXMuX25hdGl2ZURyYWdPdmVyKVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzLl9uYXRpdmVEcm9wKVxuICB9XG5cbiAgbmF0aXZlRHJhZ092ZXIoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZXZlbnQuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnbW92ZSdcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZHJhZ2VlLXBsYWNlaG9sZGVyJylcbiAgICB0aGlzLmN1cnJlbnRFdmVudCA9IGV2ZW50XG4gICAgaWYgKGV2ZW50LmNsaWVudFggPT09IDAgJiYgZXZlbnQuY2xpZW50WSA9PT0gMCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy50b3VjaFBvaW50ID0gbmV3IFBvaW50KGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpXG4gICAgbGV0IHBvaW50ID0gdGhpcy5fc3RhcnRQb3NpdGlvbi5hZGQodGhpcy50b3VjaFBvaW50LnN1Yih0aGlzLl9zdGFydFRvdWNoUG9pbnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMuc2Nyb2xsUG9pbnQuc3ViKHRoaXMuX3N0YXJ0U2Nyb2xsUG9pbnQpKVxuICAgIHBvaW50ID0gdGhpcy5ib3VuZGluZy5ib3VuZChwb2ludCwgdGhpcy5nZXRTaXplKCkpXG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvaW50XG4gICAgdGhpcy5lbWl0KCdkcmFnOm1vdmUnKVxuICB9XG5cbiAgbmF0aXZlRHJhZ0VuZChfZXZlbnQpIHtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2VlLXBsYWNlaG9sZGVyJylcbiAgICB0aGlzLmRyYWdFbmRBY3Rpb24oKVxuICAgIHRoaXMuZW1pdCgnZHJhZzplbmQnKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgdGhpcy5fbmF0aXZlRHJhZ092ZXIpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIHRoaXMuX25hdGl2ZURyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX25hdGl2ZURyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJvcCcsIHRoaXMuX25hdGl2ZURyb3ApXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX3Njcm9sbClcbiAgICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZVxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2RyYWdnYWJsZScpXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdlZS1hY3RpdmUnKVxuICB9XG5cbiAgbmF0aXZlRHJvcChldmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wKGV2ZW50KSB7XG4gICAgY29uc3QgY29udGFpbmVyUmVjdCA9IHRoaXMuY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgY29uc3QgY2xvbmVkRWxlbWVudCA9IHRoaXMuZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSlcbiAgICBjbG9uZWRFbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BlcnR5XSA9ICcnXG4gICAgY29weVN0eWxlcyh0aGlzLmVsZW1lbnQsIGNsb25lZEVsZW1lbnQpXG4gICAgY2xvbmVkRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSdcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNsb25lZEVsZW1lbnQpXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RyYWdlZS1wbGFjZWhvbGRlcicpXG5cbiAgICBjb25zdCBlbXVsYXRpb25EcmFnZ2FibGUgPSBuZXcgRHJhZ2dhYmxlKGNsb25lZEVsZW1lbnQsIHtcbiAgICAgIGNvbnRhaW5lcjogZG9jdW1lbnQuYm9keSxcbiAgICAgIGJvdW5kKHBvaW50KSB7XG4gICAgICAgIHJldHVybiBwb2ludFxuICAgICAgfSxcbiAgICAgIG9uOiB7XG4gICAgICAgICdkcmFnOm1vdmUnOiAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgY29udGFpbmVyUmVjdFBvaW50ID0gbmV3IFBvaW50KGNvbnRhaW5lclJlY3QubGVmdCwgY29udGFpbmVyUmVjdC50b3ApXG4gICAgICAgICAgdGhpcy5wb3NpdGlvbiA9IGVtdWxhdGlvbkRyYWdnYWJsZS5wb3NpdGlvbi5zdWIoY29udGFpbmVyUmVjdFBvaW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3ViKHRoaXMuX3N0YXJ0U2Nyb2xsUG9pbnQpXG4gICAgICAgICAgdGhpcy5lbWl0KCdkcmFnOm1vdmUnKVxuICAgICAgICB9LFxuICAgICAgICAnZHJhZzplbmQnOiAoKSA9PiB7XG4gICAgICAgICAgZW11bGF0aW9uRHJhZ2dhYmxlLmRlc3Ryb3koKVxuICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoY2xvbmVkRWxlbWVudClcbiAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2VlLXBsYWNlaG9sZGVyJylcbiAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2VlLWFjdGl2ZScpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgY29udGFpbmVyUmVjdFBvaW50ID0gbmV3IFBvaW50KGNvbnRhaW5lclJlY3QubGVmdCwgY29udGFpbmVyUmVjdC50b3ApXG4gICAgZW11bGF0aW9uRHJhZ2dhYmxlLl9zdGFydFNjcm9sbFBvaW50ID0gdGhpcy5fc3RhcnRTY3JvbGxQb2ludFxuXG4gICAgZW11bGF0aW9uRHJhZ2dhYmxlLm1vdmUoXG4gICAgICB0aGlzLnBpbm5lZFBvc2l0aW9uLmFkZChjb250YWluZXJSZWN0UG9pbnQpLmFkZChuZXcgUG9pbnQod2luZG93LnNjcm9sbFgsIHdpbmRvdy5zY3JvbGxZKSlcbiAgICApXG5cbiAgICBlbXVsYXRpb25EcmFnZ2FibGUuZHJhZ1N0YXJ0KGV2ZW50KVxuICB9XG5cbiAgZHJhZ0VuZEFjdGlvbigpIHtcbiAgICB0aGlzLnBpblBvc2l0aW9uKHRoaXMucG9zaXRpb24pXG4gIH1cblxuICBnZXRSZWN0YW5nbGUoKSB7XG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUodGhpcy5wb3NpdGlvbiwgdGhpcy5nZXRTaXplKCkpXG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIGlmICh0aGlzLmJvdW5kaW5nLnJlZnJlc2gpIHtcbiAgICAgIHRoaXMuYm91bmRpbmcucmVmcmVzaCgpXG4gICAgfVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmhhbmRsZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0KVxuICAgIHRoaXMuaGFuZGxlci5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQpXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIHRoaXMuX25hdGl2ZURyYWdTdGFydClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCB0aGlzLl9uYXRpdmVEcmFnT3ZlcilcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcm9wJywgdGhpcy5fbmF0aXZlRHJvcClcbiAgICB0aGlzLnJlc2V0RW1pdHRlcigpXG5cbiAgICBjb25zdCBpbmRleCA9IGRyYWdnYWJsZXMuaW5kZXhPZih0aGlzKVxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICBkcmFnZ2FibGVzLnNwbGljZShpbmRleCwgMSlcbiAgICB9XG4gIH1cblxuICBnZXQgY29udGFpbmVyKCkge1xuICAgIHJldHVybiAodGhpcy5fY29udGFpbmVyID0gdGhpcy5fY29udGFpbmVyIHx8IHRoaXMub3B0aW9ucy5jb250YWluZXIgfHwgdGhpcy5vcHRpb25zLnBhcmVudCB8fCBnZXREZWZhdWx0Q29udGFpbmVyKHRoaXMuZWxlbWVudCkpXG4gIH1cblxuICBnZXQgaGFuZGxlcigpIHtcbiAgICBpZiAoIXRoaXMuX2hhbmRsZXIpIHtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmhhbmRsZXIgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZXIgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLm9wdGlvbnMuaGFuZGxlcikgfHwgdGhpcy5lbGVtZW50XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9oYW5kbGVyID0gdGhpcy5vcHRpb25zLmhhbmRsZXIgfHwgdGhpcy5lbGVtZW50XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2hhbmRsZXJcbiAgfVxuXG4gIGdldCBuYXRpdmVEcmFnQW5kRHJvcCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLm5hdGl2ZURyYWdBbmREcm9wIHx8IGZhbHNlXG4gIH1cblxuICBnZXQgZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wT25Ub3VjaCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcE9uVG91Y2ggfHwgdHJ1ZVxuICB9XG5cbiAgZ2V0IGVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcEZvckFsbCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcEZvckFsbCB8fCBmYWxzZVxuICB9XG5cbiAgZ2V0IHNob3VsZFJlbW92ZVplcm9UcmFuc2xhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5zaG91bGRSZW1vdmVaZXJvVHJhbnNsYXRlIHx8IGZhbHNlXG4gIH1cblxuICBnZXQgc2Nyb2xsUG9pbnQoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh3aW5kb3cuc2Nyb2xsWCwgd2luZG93LnNjcm9sbFkpXG4gIH1cblxuICBnZXQgZW5hYmxlKCkge1xuICAgIHJldHVybiB0aGlzLl9lbmFibGVcbiAgfVxuXG4gIHNldCBlbmFibGUoZW5hYmxlKSB7XG4gICAgaWYgKGVuYWJsZSkge1xuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdlZS1kaXNhYmxlJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RyYWdlZS1kaXNhYmxlJylcbiAgICB9XG5cbiAgICB0aGlzLl9lbmFibGUgPSBlbmFibGVcbiAgfVxufVxuXG5EcmFnZ2FibGUuZW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuRHJhZ2dhYmxlLmVtaXR0ZXIub24oJ2RyYWdnYWJsZTpjcmVhdGUnLCBhZGRUb0RlZmF1bHRTY29wZSlcbiIsImltcG9ydCByZW1vdmVJdGVtIGZyb20gJy4vdXRpbHMvcmVtb3ZlLWFycmF5LWl0ZW0nXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnRFbWl0dGVyJ1xuaW1wb3J0IHtcbiAgZ2V0RGlzdGFuY2UsXG4gIGluZGV4T2ZOZWFyZXN0UG9pbnRcbn0gZnJvbSAnLi9nZW9tZXRyeS9kaXN0YW5jZXMnXG5cbmltcG9ydCBEcmFnZ2FibGUgZnJvbSAnLi9kcmFnZ2FibGUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3QgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvcihkcmFnZ2FibGVzLCBvcHRpb25zPXt9KSB7XG4gICAgc3VwZXIob3B0aW9ucylcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHRpbWVFbmQ6IDIwMCxcbiAgICAgIHRpbWVFeGNhbmdlOiA0MDAsXG4gICAgICByYWRpdXM6IDMwXG4gICAgfSwgb3B0aW9ucylcblxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZXNcbiAgICB0aGlzLmNoYW5nZWREdXJpbmdJdGVyYXRpb24gPSBmYWxzZVxuXG4gICAgdGhpcy5yZXNpemVPYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoKSA9PiB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZCkgPT4gZC5zdGFydFBvc2l0aW9uaW5nKCkpKVxuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkKSA9PiB0aGlzLnJlc2l6ZU9ic2VydmVyLm9ic2VydmUoZC5lbGVtZW50KSlcblxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuX2VuYWJsZSA9IHRydWVcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCh0aGlzLmluaXREcmFnZ2FibGUsIHRoaXMpXG4gIH1cblxuICBpbml0RHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIGRyYWdnYWJsZS5lbmFibGUgPSB0aGlzLl9lbmFibGVcbiAgICBkcmFnZ2FibGUub24oJ2RyYWc6bW92ZScsICgpID0+IHRoaXMub25Nb3ZlKGRyYWdnYWJsZSkpXG4gICAgZHJhZ2dhYmxlLmRyYWdFbmRBY3Rpb24gPSAoKSA9PiB7XG4gICAgICBkcmFnZ2FibGUucGluUG9zaXRpb24oZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uLCB0aGlzLm9wdGlvbnMudGltZUVuZClcbiAgICAgIHRoaXMub25FbmQoZHJhZ2dhYmxlKVxuICAgIH1cbiAgfVxuXG4gIG9uTW92ZShkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBzb3J0ZWREcmFnZ2FibGVzID0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcbiAgICBjb25zdCBwaW5uZWRQb3NpdGlvbnMgPSBzb3J0ZWREcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24pXG5cbiAgICBjb25zdCBjdXJyZW50SW5kZXggPSBzb3J0ZWREcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKVxuICAgIGNvbnN0IHRhcmdldEluZGV4ID0gaW5kZXhPZk5lYXJlc3RQb2ludChwaW5uZWRQb3NpdGlvbnMsIGRyYWdnYWJsZS5wb3NpdGlvbiwgdGhpcy5vcHRpb25zLnJhZGl1cywgdGhpcy5kaXN0YW5jZUZ1bmMpXG5cbiAgICBpZiAodGFyZ2V0SW5kZXggIT09IC0xICYmIGN1cnJlbnRJbmRleCAhPT0gdGFyZ2V0SW5kZXgpIHtcbiAgICAgIGlmICh0YXJnZXRJbmRleCA8IGN1cnJlbnRJbmRleCkge1xuICAgICAgICBmb3IgKGxldCBpPXRhcmdldEluZGV4OyBpPGN1cnJlbnRJbmRleDsgaSsrKSB7XG4gICAgICAgICAgc29ydGVkRHJhZ2dhYmxlc1tpXS5waW5Qb3NpdGlvbihwaW5uZWRQb3NpdGlvbnNbaSsxXSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGxldCBpPWN1cnJlbnRJbmRleDsgaTx0YXJnZXRJbmRleDsgaSsrKSB7XG4gICAgICAgICAgc29ydGVkRHJhZ2dhYmxlc1tpKzFdLnBpblBvc2l0aW9uKHBpbm5lZFBvc2l0aW9uc1tpXSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChkcmFnZ2FibGUubmF0aXZlRHJhZ0FuZERyb3ApIHtcbiAgICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKHBpbm5lZFBvc2l0aW9uc1t0YXJnZXRJbmRleF0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24gPSBwaW5uZWRQb3NpdGlvbnNbdGFyZ2V0SW5kZXhdXG4gICAgICB9XG5cbiAgICAgIHRoaXMuY2hhbmdlZER1cmluZ0l0ZXJhdGlvbiA9IHRydWVcbiAgICB9XG4gIH1cblxuICBvbkVuZChkcmFnZ2FibGUpIHtcbiAgICBpZiAodGhpcy5jaGFuZ2VkRHVyaW5nSXRlcmF0aW9uKSB7XG4gICAgICB0aGlzLmVtaXQoJ2xpc3Q6Y2hhbmdlJylcbiAgICAgIHRoaXMuY2hhbmdlZER1cmluZ0l0ZXJhdGlvbiA9IGZhbHNlXG4gICAgfVxuICB9XG5cbiAgZ2V0Q3VycmVudFBpbm5lZFBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5kcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24uY2xvbmUoKSlcbiAgfVxuXG4gIGdldFNvcnRlZERyYWdnYWJsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJhZ2dhYmxlcy5zb3J0KHRoaXMuc29ydGluZy5iaW5kKHRoaXMpKVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnJlc2V0UG9zaXRpb25Ub0luaXRpYWwoKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnJlZnJlc2goKSlcbiAgfVxuXG4gIGFkZChkcmFnZ2FibGVzKSB7XG4gICAgaWYgKCEoZHJhZ2dhYmxlcyBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgZHJhZ2dhYmxlcyA9IFtkcmFnZ2FibGVzXVxuICAgIH1cbiAgICBkcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gdGhpcy5pbml0RHJhZ2dhYmxlKGRyYWdnYWJsZSkpXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gdGhpcy5kcmFnZ2FibGVzLmNvbmNhdChkcmFnZ2FibGVzKVxuICB9XG5cbiAgcmVtb3ZlKGRyYWdnYWJsZXMpIHtcbiAgICBjb25zdCBpbml0aWFsUG9zaXRpb25zID0gdGhpcy5kcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uKVxuICAgIGNvbnN0IGxpc3QgPSBbXVxuICAgIGNvbnN0IHNvcnRlZERyYWdnYWJsZXMgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuXG4gICAgaWYgKCEoZHJhZ2dhYmxlcyBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgZHJhZ2dhYmxlcyA9IFtkcmFnZ2FibGVzXVxuICAgIH1cblxuICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUucmVzZXRPbignZHJhZzplbmQnKVxuICAgICAgZHJhZ2dhYmxlLnJlc2V0T24oJ2RyYWc6bW92ZScpXG4gICAgICByZW1vdmVJdGVtKHRoaXMuZHJhZ2dhYmxlcywgZHJhZ2dhYmxlKVxuICAgIH0pXG5cbiAgICBsZXQgaiA9IDBcbiAgICBzb3J0ZWREcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgaWYgKHRoaXMuZHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkgIT09IC0xKSB7XG4gICAgICAgIGlmIChkcmFnZ2FibGUucGlubmVkUG9zaXRpb24gIT09IGluaXRpYWxQb3NpdGlvbnNbal0pIHtcbiAgICAgICAgICBkcmFnZ2FibGUucGluUG9zaXRpb24oaW5pdGlhbFBvc2l0aW9uc1tqXSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICB9XG4gICAgICAgIGRyYWdnYWJsZS5pbml0aWFsUG9zaXRpb24gPSBpbml0aWFsUG9zaXRpb25zW2pdXG4gICAgICAgIGorK1xuICAgICAgICBsaXN0LnB1c2goZHJhZ2dhYmxlKVxuICAgICAgfVxuICAgIH0pXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gbGlzdFxuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5yZW1vdmUodGhpcy5kcmFnZ2FibGVzLnNsaWNlKCkpXG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5kZXN0cm95KCkpXG4gIH1cblxuICBzb3J0aW5nKGRyYWdnYWJsZUEsIGRyYWdnYWJsZUIpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLnNvcnRpbmcpIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuc29ydGluZyhkcmFnZ2FibGVBLCBkcmFnZ2FibGVCKVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZHJhZ2dhYmxlQS5waW5uZWRQb3NpdGlvbi55IDwgZHJhZ2dhYmxlQi5waW5uZWRQb3NpdGlvbi55KSByZXR1cm4gLTFcbiAgICAgIGlmIChkcmFnZ2FibGVBLnBpbm5lZFBvc2l0aW9uLnkgPiBkcmFnZ2FibGVCLnBpbm5lZFBvc2l0aW9uLnkpIHJldHVybiAxXG4gICAgICBpZiAoZHJhZ2dhYmxlQS5waW5uZWRQb3NpdGlvbi54IDwgZHJhZ2dhYmxlQi5waW5uZWRQb3NpdGlvbi54KSByZXR1cm4gLTFcbiAgICAgIGlmIChkcmFnZ2FibGVBLnBpbm5lZFBvc2l0aW9uLnggPiBkcmFnZ2FibGVCLnBpbm5lZFBvc2l0aW9uLngpIHJldHVybiAxXG4gICAgICByZXR1cm4gMFxuICAgIH1cbiAgfVxuXG4gIGdldCBkaXN0YW5jZUZ1bmMoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5nZXREaXN0YW5jZSB8fCBnZXREaXN0YW5jZVxuICB9XG5cbiAgZ2V0IHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDdXJyZW50UGlubmVkUG9zaXRpb25zKClcbiAgfVxuXG4gIHNldCBwb3NpdGlvbnMocG9zaXRpb25zKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9ICd3cm9uZyBhcnJheSBsZW5ndGgnXG4gICAgaWYgKHBvc2l0aW9ucy5sZW5ndGggPT09IHRoaXMuZHJhZ2dhYmxlcy5sZW5ndGgpIHtcbiAgICAgIHBvc2l0aW9ucy5mb3JFYWNoKChwb2ludCwgaSkgPT4ge1xuICAgICAgICB0aGlzLmRyYWdnYWJsZXNbaV0ucGluUG9zaXRpb24ocG9pbnQpXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBtZXNzYWdlXG4gICAgfVxuICB9XG5cbiAgZ2V0IGVuYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlXG4gIH1cblxuICBzZXQgZW5hYmxlKGVuYWJsZSkge1xuICAgIHRoaXMuX2VuYWJsZSA9IGVuYWJsZVxuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5lbmFibGUgPSBlbmFibGVcbiAgICB9KVxuICB9XG5cbiAgc3RhdGljIGZhY3RvcnkoY29udGFpbmVyRWxlbWVudCwgZWxlbWVudHMsIG9wdGlvbnM9e30pIHtcbiAgICBjb25zdCBkcmFnZ2FibGVzID0gQXJyYXkuZnJvbShlbGVtZW50cykubWFwKChlbGVtZW50KSA9PiB7XG4gICAgICByZXR1cm4gbmV3IERyYWdnYWJsZShlbGVtZW50LCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgY29udGFpbmVyOiBjb250YWluZXJFbGVtZW50XG4gICAgICB9LCBvcHRpb25zLmRyYWdnYWJsZSB8fCB7fSkpXG4gICAgfSlcbiAgICByZXR1cm4gbmV3IExpc3QoZHJhZ2dhYmxlcywgb3B0aW9ucy5saXN0IHx8IHt9KVxuICB9XG59XG4iLCJpbXBvcnQgTGlzdCBmcm9tICcuL2xpc3QnXG5pbXBvcnQgeyBpbmRleE9mTmVhcmVzdFBvaW50LCBnZXRZRGlmZmVyZW5jZSB9IGZyb20gJy4vZ2VvbWV0cnkvZGlzdGFuY2VzJ1xuXG5pbXBvcnQgRHJhZ2dhYmxlIGZyb20gJy4vZHJhZ2dhYmxlJ1xuXG5jb25zdCBhcnJheU1vdmUgPSAoYXJyYXksIGZyb20sIHRvKSA9PiB7XG4gIGFycmF5LnNwbGljZSh0byA8IDAgPyBhcnJheS5sZW5ndGggKyB0byA6IHRvLCAwLCBhcnJheS5zcGxpY2UoZnJvbSwgMSlbMF0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1YmJsaW5nTGlzdCBleHRlbmRzIExpc3Qge1xuICBjb25zdHJ1Y3RvcihkcmFnZ2FibGVzLCBvcHRpb25zPXt9KSB7XG4gICAgc3VwZXIoZHJhZ2dhYmxlcywgb3B0aW9ucylcbiAgfVxuXG4gIGluaXREcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgZHJhZ2dhYmxlLm9uKCdkcmFnOnN0YXJ0JywgKCkgPT4gdGhpcy5hdXRvRGV0ZWN0VmVydGljYWxHYXAoZHJhZ2dhYmxlKSlcbiAgICBzdXBlci5pbml0RHJhZ2dhYmxlKGRyYWdnYWJsZSlcbiAgfVxuXG4gIGF1dG9EZXRlY3RWZXJ0aWNhbEdhcCgpIHtcbiAgICBpZiAodGhpcy5kcmFnZ2FibGVzLmxlbmd0aCA+PSAyKSB7XG4gICAgICBjb25zdCBzb3J0ZWQgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuXG4gICAgICB0aGlzLnZlcnRpY2FsR2FwID0gc29ydGVkWzFdLnBpbm5lZFBvc2l0aW9uLnkgLSBzb3J0ZWRbMF0ucGlubmVkUG9zaXRpb24ueSAtIHNvcnRlZFswXS5nZXRTaXplKCkueVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZlcnRpY2FsR2FwID0gMFxuICAgIH1cblxuICAgIGlmICh0aGlzLmRyYWdnYWJsZXMubGVuZ3RoID49IDEpIHtcbiAgICAgIHRoaXMuc3RhcnRQb3NpdGlvbiA9IHRoaXMuZHJhZ2dhYmxlc1swXS5waW5uZWRQb3NpdGlvblxuICAgIH1cbiAgfVxuXG4gIG9uTW92ZShkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBzb3J0ZWREcmFnZ2FibGVzID0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcbiAgICBjb25zdCBwaW5uZWRQb3NpdGlvbnMgPSBzb3J0ZWREcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24pXG5cbiAgICBjb25zdCBjdXJyZW50SW5kZXggPSBzb3J0ZWREcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKVxuICAgIGNvbnN0IHRhcmdldEluZGV4ID0gaW5kZXhPZk5lYXJlc3RQb2ludChwaW5uZWRQb3NpdGlvbnMsIGRyYWdnYWJsZS5wb3NpdGlvbiwgdGhpcy5vcHRpb25zLnJhZGl1cywgdGhpcy5kaXN0YW5jZUZ1bmMpXG5cbiAgICBpZiAodGFyZ2V0SW5kZXggIT09IC0xICYmIGN1cnJlbnRJbmRleCAhPT0gdGFyZ2V0SW5kZXgpIHtcbiAgICAgIGFycmF5TW92ZShzb3J0ZWREcmFnZ2FibGVzLCBjdXJyZW50SW5kZXgsIHRhcmdldEluZGV4KVxuICAgICAgdGhpcy5idWJibGluZyhzb3J0ZWREcmFnZ2FibGVzLCBkcmFnZ2FibGUpXG4gICAgICB0aGlzLmNoYW5nZWREdXJpbmdJdGVyYXRpb24gPSB0cnVlXG4gICAgfVxuICB9XG5cbiAgYnViYmxpbmcoc29ydGVkRHJhZ2dhYmxlcywgY3VycmVudERyYWdnYWJsZSkge1xuICAgIGNvbnN0IGN1cnJlbnRQb3NpdGlvbiA9IHRoaXMuc3RhcnRQb3NpdGlvbi5jbG9uZSgpXG5cbiAgICBzb3J0ZWREcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgaWYgKCFkcmFnZ2FibGUucGlubmVkUG9zaXRpb24uY29tcGFyZShjdXJyZW50UG9zaXRpb24pKSB7XG4gICAgICAgIGlmIChkcmFnZ2FibGUgPT09IGN1cnJlbnREcmFnZ2FibGUgJiYgIWN1cnJlbnREcmFnZ2FibGUubmF0aXZlRHJhZ0FuZERyb3ApIHtcbiAgICAgICAgICBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24gPSBjdXJyZW50UG9zaXRpb24uY2xvbmUoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRyYWdnYWJsZS5waW5Qb3NpdGlvbihjdXJyZW50UG9zaXRpb24sIChkcmFnZ2FibGUgPT09IGN1cnJlbnREcmFnZ2FibGUpID8gMCA6IHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjdXJyZW50UG9zaXRpb24ueSA9IGN1cnJlbnRQb3NpdGlvbi55ICsgZHJhZ2dhYmxlLmdldFNpemUoKS55ICsgdGhpcy52ZXJ0aWNhbEdhcFxuICAgIH0pXG4gIH1cblxuICBnZXQgZGlzdGFuY2VGdW5jKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZ2V0RGlzdGFuY2UgfHwgZ2V0WURpZmZlcmVuY2VcbiAgfVxuXG4gIHN0YXRpYyBmYWN0b3J5KGNvbnRhaW5lckVsZW1lbnQsIGVsZW1lbnRzLCBvcHRpb25zPXt9KSB7XG4gICAgY29uc3QgZHJhZ2dhYmxlcyA9IEFycmF5LmZyb20oZWxlbWVudHMpLm1hcCgoZWxlbWVudCkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBEcmFnZ2FibGUoZWxlbWVudCwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyRWxlbWVudFxuICAgICAgfSwgb3B0aW9ucy5kcmFnZ2FibGUgfHwge30pKVxuICAgIH0pXG4gICAgY29uc3QgYnViYmxpbmdMaXN0ID0gbmV3IEJ1YmJsaW5nTGlzdChkcmFnZ2FibGVzLCBvcHRpb25zLmxpc3QgfHwge30pXG5cbiAgICBpZihvcHRpb25zLnJlb3JkZXJPbkNoYW5nZSkge1xuICAgICAgYnViYmxpbmdMaXN0Lm9uKFwibGlzdDpjaGFuZ2VcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCBvcmRlcmVkRWxlbWVudHMgPSBidWJibGluZ0xpc3QuZ2V0U29ydGVkRHJhZ2dhYmxlcygpLm1hcCgoZCkgPT4gZC5lbGVtZW50KVxuICAgICAgICBidWJibGluZ0xpc3QucmVzZXQoKVxuICAgICAgICBvcmRlcmVkRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgIGNvbnRhaW5lckVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbWVudClcbiAgICAgICAgfSlcblxuICAgICAgICBkcmFnZ2FibGVzLmZvckVhY2goKGQpID0+IGQuc3RhcnRQb3NpdGlvbmluZygpKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gYnViYmxpbmdMaXN0XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJnZXRTdW1WYWx1ZU9mU3R5bGVSdWxlcyIsImVsZW1lbnQiLCJydWxlcyIsInJlZHVjZSIsInN1bSIsInJ1bGUiLCJwYXJzZUludCIsIndpbmRvdyIsImdldENvbXB1dGVkU3R5bGUiLCJQb2ludCIsIngiLCJ5IiwicCIsImsiLCJwYXJlbnQiLCJwYXJlbnROb2RlIiwiZWxlbWVudFJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJwYXJlbnRSZWN0IiwibGVmdCIsInRvcCIsImlzQ29udGVudEJveFNpemUiLCJ3aWR0aCIsImhlaWdodCIsIlJlY3RhbmdsZSIsInBvc2l0aW9uIiwic2l6ZSIsImFkZCIsIm11bHQiLCJyZWN0IiwiTWF0aCIsIm1pbiIsIm1heCIsInN1YiIsInJlY3RhbmdsZSIsImluY2x1ZGVQb2ludCIsImdldFAzIiwiYXhpcyIsInNlbEF4aXMiLCJjcm9zc1JlY3RhbmdsZSIsImFuZCIsInRoaXNDZW50ZXIiLCJnZXRDZW50ZXIiLCJyZWN0Q2VudGVyIiwic2lnbiIsIm9mZnNldCIsImVsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic3R5bGUiLCJpc0NvbnNpZGVyVHJhbnNsYXRlIiwiZWxlbWVudE9mZnNldCIsImVsZW1lbnRTaXplIiwiZ2V0RGVmYXVsdENvbnRhaW5lciIsImNvbnRhaW5lciIsInRhZ05hbWUiLCJFdmVudEVtaXR0ZXIiLCJvcHRpb25zIiwiZXZlbnRzIiwib24iLCJPYmplY3QiLCJlbnRyaWVzIiwiZXZlbnROYW1lIiwiZm4iLCJpbnRlcnJ1cHRlZCIsImFyZ3MiLCJzbGljZSIsImNhbGwiLCJhcmd1bWVudHMiLCJmdW5jIiwicHVzaCIsInVuc2hpZnQiLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJnZXREaXN0YW5jZSIsInAxIiwicDIiLCJkeCIsImR5Iiwic3FydCIsImdldFhEaWZmZXJlbmNlIiwiYWJzIiwiZ2V0WURpZmZlcmVuY2UiLCJ0cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5IiwicG93IiwiaW5kZXhPZk5lYXJlc3RQb2ludCIsImFyciIsInZhbCIsInJhZGl1cyIsImdldERpc3RhbmNlRnVuYyIsImkiLCJ0ZW1wIiwibGVuZ3RoIiwiZGlyZWN0Q3Jvc3NpbmciLCJMMVAxIiwiTDFQMiIsIkwyUDEiLCJMMlAyIiwiazEiLCJrMiIsImIxIiwiYjIiLCJib3VuZFRvTGluZSIsIkEiLCJCIiwiUCIsIkFQIiwiQUIiLCJhYjIiLCJhcF9hYiIsInQiLCJnZXRQb2ludE9uTGluZUJ5TGVuZ2h0IiwiTFAxIiwiTFAyIiwibGVuZ2h0IiwicGVyY2VudCIsImFkZFBvaW50VG9Cb3VuZFBvaW50cyIsImJvdW5kcG9pbnRzIiwicG9pbnQiLCJpc1JpZ2h0IiwicmVzdWx0IiwiZmlsdGVyIiwiYlBvaW50IiwiZ2V0QW5nbGVEaWZmIiwiYWxwaGEiLCJiZXRhIiwibWluQW5nbGUiLCJtYXhBbmdsZSIsIlBJIiwiZ2V0QW5nbGUiLCJkaWZmIiwibm9ybWFsaXplQW5nbGUiLCJhdGFuMiIsImJvdW5kQW5nbGUiLCJkbWluIiwiZG1heCIsImdldFBvaW50RnJvbVJhZGlhbFN5c3RlbSIsImFuZ2xlIiwiY2VudGVyIiwiY29zIiwic2luIiwiQm91bmQiLCJfc2l6ZSIsImluc3RhbmNlIiwiYm91bmQiLCJiaW5kIiwiQm91bmRUb1JlY3RhbmdsZSIsImNhbGNQb2ludCIsImNsb25lIiwicmVjdFAyIiwiQm91bmRUb0VsZW1lbnQiLCJmcm9tRWxlbWVudCIsIkJvdW5kVG9MaW5lWCIsInN0YXJ0WSIsImVuZFkiLCJCb3VuZFRvTGluZVkiLCJzdGFydFgiLCJlbmRYIiwiQm91bmRUb0xpbmUiLCJzdGFydFBvaW50IiwiZW5kUG9pbnQiLCJzb21lSyIsImNvc0JldGEiLCJzaW5CZXRhIiwicG9pbnQyIiwibmV3RW5kUG9pbnQiLCJwb2ludENyb3NzaW5nIiwiQm91bmRUb0NpcmNsZSIsIkJvdW5kVG9BcmMiLCJzdGFydEFuZ2xlIiwiZW5kQW5nbGUiLCJfc3RhcnRBbmdsZSIsIl9lbmRBbmdsZSIsImFycmF5IiwicmFuZ2UiLCJzdGFydCIsInN0b3AiLCJzdGVwIiwiQmFzaWNTdHJhdGVneSIsIk5vdENyb3NzaW5nU3RyYXRlZ3kiLCJyZWN0YW5nbGVMaXN0IiwiaW5kZXhlc09mTmV3cyIsInN0YXRpY1JlY3RhbmdsZUluZGV4ZXMiLCJpbmRleGVzIiwiX3JlY3QiLCJmb3JFYWNoIiwicmVtb3ZhYmxlIiwiaW5kZXhPZlN0YXRpYyIsInN0YXRpY1JlY3QiLCJtb3ZlVG9Cb3VuZCIsInNvbWUiLCJib3VuZFJlY3QiLCJnZXRTcXVhcmUiLCJvZGxEcmFnZ2FibGVzTGlzdCIsIm5ld0RyYWdnYWJsZXMiLCJpbmRleE9mTmV3cyIsImRyYWdnYWJsZXMiLCJjb25jYXQiLCJkcmFnZ2FibGUiLCJGbG9hdExlZnRTdHJhdGVneSIsImFzc2lnbiIsInBhZGRpbmdUb3BMZWZ0IiwicGFkZGluZ0JvdHRvbVJpZ2h0IiwieUdhcEJldHdlZW5EcmFnZ2FibGVzIiwiZ2V0UG9zaXRpb24iLCJfaW5kZXhlc09mTmV3cyIsImdldFAyIiwiYm91bmRhcnlQb2ludHMiLCJyZWN0SW5kZXgiLCJpc1ZhbGlkIiwibmV3TGlzdCIsImxpc3RPbGRQb3NpdGlvbiIsIm1hcCIsIm5ld0RyYWdnYWJsZSIsIkZsb2F0UmlnaHRTdHJhdGVneSIsInBhZGRpbmdUb3BSaWdodCIsInBhZGRpbmdCb3R0b21MZWZ0IiwicGFkZGluZ0JvdHRvbU5lZ0xlZnQiLCJnZXRQNCIsImFkZFRvRGVmYXVsdFNjb3BlIiwidGFyZ2V0IiwiZGVmYXVsdFNjb3BlIiwiYWRkVGFyZ2V0IiwiVGFyZ2V0IiwidGltZUVuZCIsInRpbWVFeGNhbmdlIiwicG9zaXRpb25pbmdTdHJhdGVneSIsInN0cmF0ZWd5IiwiZ2V0UmVjdGFuZ2xlIiwidGFyZ2V0cyIsImVtaXR0ZXIiLCJlbWl0Iiwic3RhcnRCb3VuZGluZyIsImluaXQiLCJib3VuZGluZyIsImluZGV4ZXNPZk5ldyIsInBvc2l0aW9uaW5nIiwib2xkRHJhZ2dhYmxlcyIsInNvcnRpbmciLCJyZWN0YW5nbGVzIiwiaW5uZXJEcmFnZ2FibGVzIiwic2V0UG9zaXRpb24iLCJjYXRjaERyYWdnYWJsZSIsInRhcmdldFJlY3RhbmdsZSIsImRyYWdnYWJsZVNxdWFyZSIsInNjb3BlcyIsInNjb3BlIiwicmVtb3ZlSXRlbSIsIm5ld0RyYWdnYWJsZXNJbmRleCIsImdldFNpemUiLCJhZGRSZW1vdmVPbk1vdmUiLCJ0aW1lIiwibW92ZSIsImluaXRpYWxQb3NpdGlvbiIsInB1c2hJbm5lckRyYWdnYWJsZSIsInJlbW92ZUhhbmRsZXIiLCJyZW1vdmUiLCJ1bnN1YnNjcmliZSIsIl9jb250YWluZXIiLCJTY29wZSIsImRyYWdFbmRBY3Rpb24iLCJvbkVuZCIsInNob3RUYXJnZXRzIiwic29ydCIsImEiLCJiIiwicGluUG9zaXRpb24iLCJyZXNldCIsInJlZnJlc2giLCJwb3NpdGlvbnMiLCJtZXNzYWdlIiwidGFyZ2V0SW5kZXhlcyIsImN1cnJlbnRTY29wZSIsImFkZERyYWdnYWJsZVRvU2NvcGUiLCJhZGREcmFnZ2FibGUiLCJEcmFnZ2FibGUiLCJpbnRlcnJ1cHQiLCJhZGRUYXJnZXRUb1Njb3BlIiwicHJlcGVuZE9uIiwiY2hlY2tTdXBwb3J0UGFzc2l2ZUV2ZW50cyIsInBhc3NpdmVTdXBwb3J0ZWQiLCJkZWZpbmVQcm9wZXJ0eSIsImdldCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiX2VyciIsImlzU3VwcG9ydFBhc3NpdmVFdmVudHMiLCJpc1RvdWNoIiwibW91c2VFdmVudHMiLCJlbmQiLCJ0b3VjaEV2ZW50cyIsInRyYW5zZm9ybVByb3BlcnR5IiwiZ2V0U3R5bGVQcm9wZXJ0eSIsInRyYW5zaXRpb25Qcm9wZXJ0eSIsImdldFRvdWNoQnlJRCIsInRvdWNoSWQiLCJjaGFuZ2VkVG91Y2hlcyIsImlkZW50aWZpZXIiLCJwcmV2ZW50RG91YmxlSW5pdCIsImV4aXN0aW5nIiwiY29weVN0eWxlcyIsInNvdXJjZSIsImRlc3RpbmF0aW9uIiwiY3MiLCJrZXkiLCJjaGlsZHJlbiIsIl9lbmFibGUiLCJzdGFydFBvc2l0aW9uaW5nIiwic3RhcnRMaXN0ZW5pbmciLCJfc2V0RGVmYXVsdFRyYW5zaXRpb24iLCJwaW5uZWRQb3NpdGlvbiIsIl9kcmFnU3RhcnQiLCJldmVudCIsImRyYWdTdGFydCIsIl9kcmFnTW92ZSIsImRyYWdNb3ZlIiwiX2RyYWdFbmQiLCJkcmFnRW5kIiwiX25hdGl2ZURyYWdTdGFydCIsIm5hdGl2ZURyYWdTdGFydCIsIl9uYXRpdmVEcmFnT3ZlciIsIm5hdGl2ZURyYWdPdmVyIiwiX25hdGl2ZURyYWdFbmQiLCJuYXRpdmVEcmFnRW5kIiwiX25hdGl2ZURyb3AiLCJuYXRpdmVEcm9wIiwiX3Njcm9sbCIsIm9uU2Nyb2xsIiwiaGFuZGxlciIsInBhc3NpdmUiLCJfdHJhbnNmb3JtUG9zaXRpb24iLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbkNzcyIsInRlc3QiLCJyZXBsYWNlIiwidHJhbnNsYXRlQ3NzIiwidHJhbnNmb3JtIiwic2hvdWxkUmVtb3ZlWmVyb1RyYW5zbGF0ZSIsImlzU2lsZW50IiwiZGV0ZXJtaW5lRGlyZWN0aW9uIiwiX3NldFRyYW5zaXRpb24iLCJfc2V0VHJhbnNsYXRlIiwic2lsZW50IiwibGVmdERpcmVjdGlvbiIsInJpZ2h0RGlyZWN0aW9uIiwidXBEaXJlY3Rpb24iLCJkb3duRGlyZWN0aW9uIiwiY3VycmVudEV2ZW50IiwiaXNUb3VjaEV2ZW50IiwiVG91Y2hFdmVudCIsInRvdWNoUG9pbnQiLCJfc3RhcnRUb3VjaFBvaW50IiwicGFnZVgiLCJjbGllbnRYIiwicGFnZVkiLCJjbGllbnRZIiwiX3N0YXJ0UG9zaXRpb24iLCJfdG91Y2hJZCIsIl9zdGFydFNjcm9sbFBvaW50Iiwic2Nyb2xsWCIsInNjcm9sbFkiLCJzdG9wUHJvcGFnYXRpb24iLCJIVE1MSW5wdXRFbGVtZW50IiwiZm9jdXMiLCJuYXRpdmVEcmFnQW5kRHJvcCIsInByZXZlbnREZWZhdWx0IiwiaXNTYWZhcmkiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJlbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3BPblRvdWNoIiwiZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wRm9yQWxsIiwiZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wIiwiaXNEcmFnZ2luZyIsImNsYXNzTGlzdCIsInRvdWNoIiwic2Nyb2xsUG9pbnQiLCJyZW1vdmVBdHRyaWJ1dGUiLCJzZXRUaW1lb3V0IiwiX2V2ZW50IiwiZGF0YVRyYW5zZmVyIiwic2V0RGF0YSIsImVmZmVjdEFsbG93ZWQiLCJkcm9wRWZmZWN0IiwiY29udGFpbmVyUmVjdCIsImNsb25lZEVsZW1lbnQiLCJjbG9uZU5vZGUiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJlbXVsYXRpb25EcmFnZ2FibGUiLCJjb250YWluZXJSZWN0UG9pbnQiLCJkZXN0cm95IiwicmVtb3ZlQ2hpbGQiLCJyZXNldEVtaXR0ZXIiLCJfaGFuZGxlciIsImVuYWJsZSIsIkxpc3QiLCJjaGFuZ2VkRHVyaW5nSXRlcmF0aW9uIiwicmVzaXplT2JzZXJ2ZXIiLCJSZXNpemVPYnNlcnZlciIsImQiLCJvYnNlcnZlIiwiaW5pdERyYWdnYWJsZSIsIm9uTW92ZSIsInNvcnRlZERyYWdnYWJsZXMiLCJnZXRTb3J0ZWREcmFnZ2FibGVzIiwicGlubmVkUG9zaXRpb25zIiwiY3VycmVudEluZGV4IiwidGFyZ2V0SW5kZXgiLCJkaXN0YW5jZUZ1bmMiLCJyZXNldFBvc2l0aW9uVG9Jbml0aWFsIiwiQXJyYXkiLCJpbml0aWFsUG9zaXRpb25zIiwibGlzdCIsInJlc2V0T24iLCJqIiwiZHJhZ2dhYmxlQSIsImRyYWdnYWJsZUIiLCJnZXRDdXJyZW50UGlubmVkUG9zaXRpb25zIiwiY29udGFpbmVyRWxlbWVudCIsImVsZW1lbnRzIiwiZnJvbSIsImFycmF5TW92ZSIsInRvIiwiQnViYmxpbmdMaXN0IiwiYXV0b0RldGVjdFZlcnRpY2FsR2FwIiwic29ydGVkIiwidmVydGljYWxHYXAiLCJzdGFydFBvc2l0aW9uIiwiYnViYmxpbmciLCJjdXJyZW50RHJhZ2dhYmxlIiwiY3VycmVudFBvc2l0aW9uIiwiY29tcGFyZSIsImJ1YmJsaW5nTGlzdCIsInJlb3JkZXJPbkNoYW5nZSIsIm9yZGVyZWRFbGVtZW50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBQUEsU0FBU0EsdUJBQVQsQ0FBaUNDLE9BQWpDLEVBQTBDQyxLQUExQyxFQUFpRDtFQUMvQyxFQUFPQSxPQUFBQSxLQUFLLENBQUNDLE1BQU4sQ0FBYSxVQUFDQyxHQUFELEVBQU1DLElBQU4sRUFBZTtFQUNqQyxJQUFBLE9BQU9ELEdBQUcsR0FBR0UsUUFBUSxDQUFDQyxNQUFNLENBQUNDLGdCQUFQLENBQXdCUCxPQUF4QixDQUFBLENBQWlDSSxJQUFqQyxDQUFBLElBQXdDLENBQXpDLENBQXJCLENBQUE7RUFDRCxHQUZNLEVBRUosQ0FGSSxDQUFQLENBQUE7RUFHRCxDQUFBO0VBRUQ7OztNQUNxQkk7RUFDbkI7RUFDRjtFQUNBO0VBQ0E7RUFDQTtFQUNFLEVBQVlDLFNBQUFBLEtBQUFBLENBQUFBLENBQVosRUFBZUMsQ0FBZixFQUFrQjtFQUFBLElBQUEsZUFBQSxDQUFBLElBQUEsRUFBQSxLQUFBLENBQUEsQ0FBQTs7RUFDaEIsSUFBS0QsSUFBQUEsQ0FBQUEsQ0FBTCxHQUFTQSxDQUFULENBQUE7RUFDQSxJQUFLQyxJQUFBQSxDQUFBQSxDQUFMLEdBQVNBLENBQVQsQ0FBQTtFQUNELEdBQUE7Ozs7RUFFRCxJQUFBLEtBQUEsRUFBQSxTQUFBLEdBQUEsQ0FBSUMsQ0FBSixFQUFPO0VBQ0wsTUFBQSxPQUFPLElBQUlILEtBQUosQ0FBVSxJQUFLQyxDQUFBQSxDQUFMLEdBQVNFLENBQUMsQ0FBQ0YsQ0FBckIsRUFBd0IsS0FBS0MsQ0FBTCxHQUFTQyxDQUFDLENBQUNELENBQW5DLENBQVAsQ0FBQTtFQUNELEtBQUE7OztFQUVELElBQUEsS0FBQSxFQUFBLFNBQUEsR0FBQSxDQUFJQyxDQUFKLEVBQU87RUFDTCxNQUFBLE9BQU8sSUFBSUgsS0FBSixDQUFVLElBQUtDLENBQUFBLENBQUwsR0FBU0UsQ0FBQyxDQUFDRixDQUFyQixFQUF3QixLQUFLQyxDQUFMLEdBQVNDLENBQUMsQ0FBQ0QsQ0FBbkMsQ0FBUCxDQUFBO0VBQ0QsS0FBQTs7O0VBRUQsSUFBQSxLQUFBLEVBQUEsU0FBQSxJQUFBLENBQUtFLENBQUwsRUFBUTtFQUNOLE1BQUEsT0FBTyxJQUFJSixLQUFKLENBQVUsSUFBQSxDQUFLQyxDQUFMLEdBQVNHLENBQW5CLEVBQXNCLElBQUtGLENBQUFBLENBQUwsR0FBU0UsQ0FBL0IsQ0FBUCxDQUFBO0VBQ0QsS0FBQTs7O2FBRUQsU0FBVyxRQUFBLEdBQUE7RUFDVCxNQUFPLE9BQUEsSUFBSUosS0FBSixDQUFVLENBQUMsSUFBQSxDQUFLQyxDQUFoQixFQUFtQixDQUFDLElBQUtDLENBQUFBLENBQXpCLENBQVAsQ0FBQTtFQUNELEtBQUE7OztFQUVELElBQUEsS0FBQSxFQUFBLFNBQUEsT0FBQSxDQUFRQyxDQUFSLEVBQVc7RUFDVCxNQUFBLE9BQVEsSUFBS0YsQ0FBQUEsQ0FBTCxLQUFXRSxDQUFDLENBQUNGLENBQWIsSUFBa0IsSUFBQSxDQUFLQyxDQUFMLEtBQVdDLENBQUMsQ0FBQ0QsQ0FBdkMsQ0FBQTtFQUNELEtBQUE7OzthQUVELFNBQVEsS0FBQSxHQUFBO0VBQ04sTUFBTyxPQUFBLElBQUlGLEtBQUosQ0FBVSxJQUFBLENBQUtDLENBQWYsRUFBa0IsSUFBQSxDQUFLQyxDQUF2QixDQUFQLENBQUE7RUFDRCxLQUFBOzs7YUFFRCxTQUFXLFFBQUEsR0FBQTtFQUNULE1BQUEsT0FBQSxLQUFBLENBQUEsTUFBQSxDQUFhLElBQUtELENBQUFBLENBQWxCLEVBQXlCLEtBQUEsQ0FBQSxDQUFBLE1BQUEsQ0FBQSxJQUFBLENBQUtDLENBQTlCLENBQUEsQ0FBQTtFQUNELEtBQUE7OzthQUVELFNBQXFCVixhQUFBQSxDQUFBQSxPQUFyQixFQUE4QmEsTUFBOUIsRUFBc0M7RUFDcENBLE1BQUFBLE1BQU0sR0FBR0EsTUFBTSxJQUFJYixPQUFPLENBQUNjLFVBQTNCLENBQUE7RUFDQSxNQUFBLElBQU1DLFdBQVcsR0FBR2YsT0FBTyxDQUFDZ0IscUJBQVIsRUFBcEIsQ0FBQTtFQUNBLE1BQUEsSUFBTUMsVUFBVSxHQUFHSixNQUFNLENBQUNHLHFCQUFQLEVBQW5CLENBQUE7RUFDQSxNQUFBLE9BQU8sSUFBSVIsS0FBSixDQUNMTyxXQUFXLENBQUNHLElBQVosR0FBbUJELFVBQVUsQ0FBQ0MsSUFEekIsRUFFTEgsV0FBVyxDQUFDSSxHQUFaLEdBQWtCRixVQUFVLENBQUNFLEdBRnhCLENBQVAsQ0FBQTtFQUlELEtBQUE7OztFQUVELElBQUEsS0FBQSxFQUFBLFNBQUEsV0FBQSxDQUFtQm5CLE9BQW5CLEVBQW9EO0VBQUEsTUFBeEJvQixJQUFBQSxnQkFBd0IsdUVBQVAsS0FBTyxDQUFBO0VBQ2xELE1BQUEsSUFBSUMsS0FBSyxHQUFHaEIsUUFBUSxDQUFDQyxNQUFNLENBQUNDLGdCQUFQLENBQXdCUCxPQUF4QixDQUFBLENBQWlDLE9BQWpDLENBQUQsQ0FBcEIsQ0FBQTtFQUNBLE1BQUEsSUFBSXNCLE1BQU0sR0FBR2pCLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QlAsT0FBeEIsQ0FBQSxDQUFpQyxRQUFqQyxDQUFELENBQXJCLENBQUE7O0VBQ0EsTUFBSSxJQUFBLENBQUNvQixnQkFBTCxFQUF1QjtFQUNyQkMsUUFBQUEsS0FBSyxJQUFJdEIsdUJBQXVCLENBQUNDLE9BQUQsRUFBVSxDQUFDLGNBQUQsRUFBaUIsZUFBakIsRUFBa0MsbUJBQWxDLEVBQXVELG9CQUF2RCxDQUFWLENBQWhDLENBQUE7RUFDQXNCLFFBQUFBLE1BQU0sSUFBSXZCLHVCQUF1QixDQUFDQyxPQUFELEVBQVUsQ0FBQyxhQUFELEVBQWdCLGdCQUFoQixFQUFrQyxrQkFBbEMsRUFBc0QscUJBQXRELENBQVYsQ0FBakMsQ0FBQTtFQUNELE9BQUE7O0VBQ0QsTUFBQSxPQUFPLElBQUlRLEtBQUosQ0FBVWEsS0FBVixFQUFpQkMsTUFBakIsQ0FBUCxDQUFBO0VBQ0QsS0FBQTs7Ozs7O01DOURrQkM7RUFDbkIsRUFBWUMsU0FBQUEsU0FBQUEsQ0FBQUEsUUFBWixFQUFzQkMsSUFBdEIsRUFBNEI7RUFBQSxJQUFBLGVBQUEsQ0FBQSxJQUFBLEVBQUEsU0FBQSxDQUFBLENBQUE7O0VBQzFCLElBQUtELElBQUFBLENBQUFBLFFBQUwsR0FBZ0JBLFFBQWhCLENBQUE7RUFDQSxJQUFLQyxJQUFBQSxDQUFBQSxJQUFMLEdBQVlBLElBQVosQ0FBQTtFQUNELEdBQUE7Ozs7YUFFRCxTQUFRLEtBQUEsR0FBQTtFQUNOLE1BQUEsT0FBTyxLQUFLRCxRQUFaLENBQUE7RUFDRCxLQUFBOzs7YUFFRCxTQUFRLEtBQUEsR0FBQTtFQUNOLE1BQUEsT0FBTyxJQUFJaEIsS0FBSixDQUFVLElBQUtnQixDQUFBQSxRQUFMLENBQWNmLENBQWQsR0FBa0IsSUFBS2dCLENBQUFBLElBQUwsQ0FBVWhCLENBQXRDLEVBQXlDLEtBQUtlLFFBQUwsQ0FBY2QsQ0FBdkQsQ0FBUCxDQUFBO0VBQ0QsS0FBQTs7O2FBRUQsU0FBUSxLQUFBLEdBQUE7RUFDTixNQUFBLE9BQU8sS0FBS2MsUUFBTCxDQUFjRSxHQUFkLENBQWtCLElBQUEsQ0FBS0QsSUFBdkIsQ0FBUCxDQUFBO0VBQ0QsS0FBQTs7O2FBRUQsU0FBUSxLQUFBLEdBQUE7RUFDTixNQUFBLE9BQU8sSUFBSWpCLEtBQUosQ0FBVSxJQUFLZ0IsQ0FBQUEsUUFBTCxDQUFjZixDQUF4QixFQUEyQixJQUFLZSxDQUFBQSxRQUFMLENBQWNkLENBQWQsR0FBa0IsS0FBS2UsSUFBTCxDQUFVZixDQUF2RCxDQUFQLENBQUE7RUFDRCxLQUFBOzs7YUFFRCxTQUFZLFNBQUEsR0FBQTtFQUNWLE1BQUEsT0FBTyxJQUFLYyxDQUFBQSxRQUFMLENBQWNFLEdBQWQsQ0FBa0IsSUFBQSxDQUFLRCxJQUFMLENBQVVFLElBQVYsQ0FBZSxHQUFmLENBQWxCLENBQVAsQ0FBQTtFQUNELEtBQUE7OztFQUVELElBQUEsS0FBQSxFQUFBLFNBQUEsRUFBQSxDQUFHQyxJQUFILEVBQVM7RUFDUCxNQUFBLElBQU1KLFFBQVEsR0FBRyxJQUFJaEIsS0FBSixDQUFVcUIsSUFBSSxDQUFDQyxHQUFMLENBQVMsSUFBQSxDQUFLTixRQUFMLENBQWNmLENBQXZCLEVBQTBCbUIsSUFBSSxDQUFDSixRQUFMLENBQWNmLENBQXhDLENBQVYsRUFBc0RvQixJQUFJLENBQUNDLEdBQUwsQ0FBUyxLQUFLTixRQUFMLENBQWNkLENBQXZCLEVBQTBCa0IsSUFBSSxDQUFDSixRQUFMLENBQWNkLENBQXhDLENBQXRELENBQWpCLENBQUE7RUFDQSxNQUFBLElBQU1lLElBQUksR0FBSSxJQUFJakIsS0FBSixDQUFVcUIsSUFBSSxDQUFDRSxHQUFMLENBQVMsSUFBQSxDQUFLUCxRQUFMLENBQWNmLENBQWQsR0FBa0IsSUFBS2dCLENBQUFBLElBQUwsQ0FBVWhCLENBQXJDLEVBQXdDbUIsSUFBSSxDQUFDSixRQUFMLENBQWNmLENBQWQsR0FBa0JtQixJQUFJLENBQUNILElBQUwsQ0FBVWhCLENBQXBFLENBQVYsRUFBa0ZvQixJQUFJLENBQUNFLEdBQUwsQ0FBUyxJQUFBLENBQUtQLFFBQUwsQ0FBY2QsQ0FBZCxHQUFrQixJQUFLZSxDQUFBQSxJQUFMLENBQVVmLENBQXJDLEVBQXdDa0IsSUFBSSxDQUFDSixRQUFMLENBQWNkLENBQWQsR0FBa0JrQixJQUFJLENBQUNILElBQUwsQ0FBVWYsQ0FBcEUsQ0FBbEYsQ0FBRCxDQUE0SnNCLEdBQTVKLENBQWdLUixRQUFoSyxDQUFiLENBQUE7RUFDQSxNQUFBLE9BQU8sSUFBSUQsU0FBSixDQUFjQyxRQUFkLEVBQXdCQyxJQUF4QixDQUFQLENBQUE7RUFDRCxLQUFBOzs7RUFFRCxJQUFBLEtBQUEsRUFBQSxTQUFBLEdBQUEsQ0FBSUcsSUFBSixFQUFVO0VBQ1IsTUFBQSxJQUFNSixRQUFRLEdBQUcsSUFBSWhCLEtBQUosQ0FBVXFCLElBQUksQ0FBQ0UsR0FBTCxDQUFTLElBQUEsQ0FBS1AsUUFBTCxDQUFjZixDQUF2QixFQUEwQm1CLElBQUksQ0FBQ0osUUFBTCxDQUFjZixDQUF4QyxDQUFWLEVBQXNEb0IsSUFBSSxDQUFDRSxHQUFMLENBQVMsS0FBS1AsUUFBTCxDQUFjZCxDQUF2QixFQUEwQmtCLElBQUksQ0FBQ0osUUFBTCxDQUFjZCxDQUF4QyxDQUF0RCxDQUFqQixDQUFBO0VBQ0EsTUFBQSxJQUFNZSxJQUFJLEdBQUksSUFBSWpCLEtBQUosQ0FBVXFCLElBQUksQ0FBQ0MsR0FBTCxDQUFTLElBQUEsQ0FBS04sUUFBTCxDQUFjZixDQUFkLEdBQWtCLElBQUtnQixDQUFBQSxJQUFMLENBQVVoQixDQUFyQyxFQUF3Q21CLElBQUksQ0FBQ0osUUFBTCxDQUFjZixDQUFkLEdBQWtCbUIsSUFBSSxDQUFDSCxJQUFMLENBQVVoQixDQUFwRSxDQUFWLEVBQWtGb0IsSUFBSSxDQUFDQyxHQUFMLENBQVMsSUFBQSxDQUFLTixRQUFMLENBQWNkLENBQWQsR0FBa0IsSUFBS2UsQ0FBQUEsSUFBTCxDQUFVZixDQUFyQyxFQUF3Q2tCLElBQUksQ0FBQ0osUUFBTCxDQUFjZCxDQUFkLEdBQWtCa0IsSUFBSSxDQUFDSCxJQUFMLENBQVVmLENBQXBFLENBQWxGLENBQUQsQ0FBNEpzQixHQUE1SixDQUFnS1IsUUFBaEssQ0FBYixDQUFBOztFQUNBLE1BQUlDLElBQUFBLElBQUksQ0FBQ2hCLENBQUwsSUFBVSxDQUFWLElBQWVnQixJQUFJLENBQUNmLENBQUwsSUFBVSxDQUE3QixFQUFnQztFQUM5QixRQUFBLE9BQU8sSUFBUCxDQUFBO0VBQ0QsT0FBQTs7RUFDRCxNQUFBLE9BQU8sSUFBSWEsU0FBSixDQUFjQyxRQUFkLEVBQXdCQyxJQUF4QixDQUFQLENBQUE7RUFDRCxLQUFBOzs7RUFFRCxJQUFBLEtBQUEsRUFBQSxTQUFBLFlBQUEsQ0FBYWQsQ0FBYixFQUFnQjtFQUNkLE1BQU8sT0FBQSxFQUFFLEtBQUthLFFBQUwsQ0FBY2YsQ0FBZCxHQUFrQkUsQ0FBQyxDQUFDRixDQUFwQixJQUF5QixLQUFLZSxRQUFMLENBQWNmLENBQWQsR0FBa0IsSUFBQSxDQUFLZ0IsSUFBTCxDQUFVaEIsQ0FBNUIsR0FBZ0NFLENBQUMsQ0FBQ0YsQ0FBM0QsSUFBZ0UsSUFBS2UsQ0FBQUEsUUFBTCxDQUFjZCxDQUFkLEdBQWtCQyxDQUFDLENBQUNELENBQXBGLElBQXlGLElBQUtjLENBQUFBLFFBQUwsQ0FBY2QsQ0FBZCxHQUFrQixLQUFLZSxJQUFMLENBQVVmLENBQTVCLEdBQWdDQyxDQUFDLENBQUNELENBQTdILENBQVAsQ0FBQTtFQUNELEtBQUE7OztFQUVELElBQUEsS0FBQSxFQUFBLFNBQUEsZ0JBQUEsQ0FBaUJ1QixTQUFqQixFQUE0QjtFQUMxQixNQUFBLE9BQU8sSUFBS0MsQ0FBQUEsWUFBTCxDQUFrQkQsU0FBUyxDQUFDVCxRQUE1QixDQUFBLElBQXlDLElBQUtVLENBQUFBLFlBQUwsQ0FBa0JELFNBQVMsQ0FBQ0UsS0FBVixFQUFsQixDQUFoRCxDQUFBO0VBQ0QsS0FBQTs7O2FBRUQsU0FBWVAsV0FBQUEsQ0FBQUEsSUFBWixFQUFrQlEsSUFBbEIsRUFBd0I7RUFDdEIsTUFBSUMsSUFBQUEsT0FBSixFQUFhQyxjQUFiLENBQUE7O0VBQ0EsTUFBQSxJQUFJRixJQUFKLEVBQVU7RUFDUkMsUUFBQUEsT0FBTyxHQUFHRCxJQUFWLENBQUE7RUFDRCxPQUZELE1BRU87RUFDTEUsUUFBQUEsY0FBYyxHQUFHLElBQUEsQ0FBS0MsR0FBTCxDQUFTWCxJQUFULENBQWpCLENBQUE7O0VBQ0EsUUFBSSxJQUFBLENBQUNVLGNBQUwsRUFBcUI7RUFDbkIsVUFBQSxPQUFPVixJQUFQLENBQUE7RUFDRCxTQUFBOztFQUNEUyxRQUFBQSxPQUFPLEdBQUdDLGNBQWMsQ0FBQ2IsSUFBZixDQUFvQmhCLENBQXBCLEdBQXdCNkIsY0FBYyxDQUFDYixJQUFmLENBQW9CZixDQUE1QyxHQUFnRCxHQUFoRCxHQUFzRCxHQUFoRSxDQUFBO0VBQ0QsT0FBQTs7RUFDRCxNQUFBLElBQU04QixVQUFVLEdBQUcsSUFBS0MsQ0FBQUEsU0FBTCxFQUFuQixDQUFBO0VBQ0EsTUFBQSxJQUFNQyxVQUFVLEdBQUdkLElBQUksQ0FBQ2EsU0FBTCxFQUFuQixDQUFBO0VBQ0EsTUFBQSxJQUFNRSxJQUFJLEdBQUdILFVBQVUsQ0FBQ0gsT0FBRCxDQUFWLEdBQXNCSyxVQUFVLENBQUNMLE9BQUQsQ0FBaEMsR0FBNEMsQ0FBQyxDQUE3QyxHQUFpRCxDQUE5RCxDQUFBO0VBQ0EsTUFBQSxJQUFNTyxNQUFNLEdBQUdELElBQUksR0FBRyxDQUFQLEdBQVcsS0FBS25CLFFBQUwsQ0FBY2EsT0FBZCxDQUFBLEdBQXlCLEtBQUtaLElBQUwsQ0FBVVksT0FBVixDQUF6QixHQUE4Q1QsSUFBSSxDQUFDSixRQUFMLENBQWNhLE9BQWQsQ0FBekQsR0FBa0YsSUFBQSxDQUFLYixRQUFMLENBQWNhLE9BQWQsS0FBMEJULElBQUksQ0FBQ0osUUFBTCxDQUFjYSxPQUFkLElBQXlCVCxJQUFJLENBQUNILElBQUwsQ0FBVVksT0FBVixDQUFuRCxDQUFqRyxDQUFBO0VBQ0FULE1BQUFBLElBQUksQ0FBQ0osUUFBTCxDQUFjYSxPQUFkLENBQUEsR0FBeUJULElBQUksQ0FBQ0osUUFBTCxDQUFjYSxPQUFkLENBQUEsR0FBeUJPLE1BQWxELENBQUE7RUFDQSxNQUFBLE9BQU9oQixJQUFQLENBQUE7RUFDRCxLQUFBOzs7YUFFRCxTQUFZLFNBQUEsR0FBQTtFQUNWLE1BQU8sT0FBQSxJQUFBLENBQUtILElBQUwsQ0FBVWhCLENBQVYsR0FBYyxJQUFLZ0IsQ0FBQUEsSUFBTCxDQUFVZixDQUEvQixDQUFBO0VBQ0QsS0FBQTs7O0VBRUQsSUFBQSxLQUFBLEVBQUEsU0FBQSxVQUFBLENBQVdtQyxFQUFYLEVBQWU7RUFDYkEsTUFBQUEsRUFBRSxHQUFHQSxFQUFFLElBQUlDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFYLENBQUE7RUFDQUYsTUFBQUEsRUFBRSxDQUFDRyxLQUFILENBQVM5QixJQUFULEdBQWdCLElBQUEsQ0FBS00sUUFBTCxDQUFjZixDQUFkLEdBQWtCLElBQWxDLENBQUE7RUFDQW9DLE1BQUFBLEVBQUUsQ0FBQ0csS0FBSCxDQUFTN0IsR0FBVCxHQUFlLElBQUEsQ0FBS0ssUUFBTCxDQUFjZCxDQUFkLEdBQWtCLElBQWpDLENBQUE7RUFDQW1DLE1BQUFBLEVBQUUsQ0FBQ0csS0FBSCxDQUFTM0IsS0FBVCxHQUFpQixJQUFBLENBQUtJLElBQUwsQ0FBVWhCLENBQVYsR0FBYyxJQUEvQixDQUFBO0VBQ0FvQyxNQUFBQSxFQUFFLENBQUNHLEtBQUgsQ0FBUzFCLE1BQVQsR0FBa0IsSUFBQSxDQUFLRyxJQUFMLENBQVVmLENBQVYsR0FBYyxJQUFoQyxDQUFBO0VBQ0QsS0FBQTs7O0VBRUQsSUFBQSxLQUFBLEVBQUEsU0FBQSxNQUFBLENBQU9lLElBQVAsRUFBYTtFQUNYLE1BQUtBLElBQUFBLENBQUFBLElBQUwsR0FBWSxJQUFLQSxDQUFBQSxJQUFMLENBQVVDLEdBQVYsQ0FBY0QsSUFBZCxDQUFaLENBQUE7RUFDQSxNQUFBLElBQUEsQ0FBS0QsUUFBTCxHQUFnQixJQUFLQSxDQUFBQSxRQUFMLENBQWNFLEdBQWQsQ0FBa0JELElBQUksQ0FBQ0UsSUFBTCxDQUFVLENBQUMsR0FBWCxDQUFsQixDQUFoQixDQUFBO0VBQ0QsS0FBQTs7O2FBRUQsU0FBYSxVQUFBLEdBQUE7RUFDWCxNQUFBLE9BQU9FLElBQUksQ0FBQ0MsR0FBTCxDQUFTLElBQUtMLENBQUFBLElBQUwsQ0FBVWhCLENBQW5CLEVBQXNCLElBQUEsQ0FBS2dCLElBQUwsQ0FBVWYsQ0FBaEMsQ0FBUCxDQUFBO0VBQ0QsS0FBQTs7O0VBRUQsSUFBQSxLQUFBLEVBQUEsU0FBQSxXQUFBLENBQW1CVixPQUFuQixFQUEwRztFQUFBLE1BQUEsSUFBOUVhLE1BQThFLEdBQUEsU0FBQSxDQUFBLE1BQUEsR0FBQSxDQUFBLElBQUEsU0FBQSxDQUFBLENBQUEsQ0FBQSxLQUFBLFNBQUEsR0FBQSxTQUFBLENBQUEsQ0FBQSxDQUFBLEdBQXZFYixPQUFPLENBQUNjLFVBQStELENBQUE7RUFBQSxNQUFuRE0sSUFBQUEsZ0JBQW1ELHVFQUFsQyxLQUFrQyxDQUFBO0VBQUEsTUFBM0I2QixJQUFBQSxtQkFBMkIsdUVBQVAsS0FBTyxDQUFBO0VBQ3hHLE1BQU16QixJQUFBQSxRQUFRLEdBQUdoQixLQUFLLENBQUMwQyxhQUFOLENBQW9CbEQsT0FBcEIsRUFBNkJhLE1BQTdCLEVBQXFDb0MsbUJBQXJDLENBQWpCLENBQUE7RUFDQSxNQUFNeEIsSUFBQUEsSUFBSSxHQUFHakIsS0FBSyxDQUFDMkMsV0FBTixDQUFrQm5ELE9BQWxCLEVBQTJCb0IsZ0JBQTNCLENBQWIsQ0FBQTtFQUNBLE1BQUEsT0FBTyxJQUFJRyxTQUFKLENBQWNDLFFBQWQsRUFBd0JDLElBQXhCLENBQVAsQ0FBQTtFQUNELEtBQUE7Ozs7OztFQy9GWSxTQUFTMkIsbUJBQVQsQ0FBNkJwRCxPQUE3QixFQUFzQztFQUNuRCxFQUFBLElBQUlxRCxTQUFTLEdBQUdyRCxPQUFPLENBQUNjLFVBQXhCLENBQUE7O0VBQ0EsRUFBQSxPQUFPdUMsU0FBUyxDQUFDdkMsVUFBVixJQUF3QlIsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QjhDLFNBQXhCLEVBQW1DLFVBQW5DLENBQUEsS0FBbUQsUUFBM0UsSUFBdUZBLFNBQVMsQ0FBQ0MsT0FBVixLQUFzQixNQUFwSCxFQUE0SDtFQUMxSEQsSUFBQUEsU0FBUyxHQUFHQSxTQUFTLENBQUN2QyxVQUF0QixDQUFBO0VBQ0QsR0FBQTs7RUFDRCxFQUFBLE9BQU91QyxTQUFQLENBQUE7RUFDRDs7TUNOb0JFO0VBQ25CLEVBQTJCLFNBQUEsWUFBQSxHQUFBO0VBQUEsSUFBZEMsSUFBQUEsT0FBYyx1RUFBSixFQUFJLENBQUE7O0VBQUEsSUFBQSxlQUFBLENBQUEsSUFBQSxFQUFBLFlBQUEsQ0FBQSxDQUFBOztFQUN6QixJQUFLQyxJQUFBQSxDQUFBQSxNQUFMLEdBQWMsRUFBZCxDQUFBOztFQUVBLElBQUEsSUFBSUQsT0FBTyxJQUFJQSxPQUFPLENBQUNFLEVBQXZCLEVBQTJCO0VBQ3pCLE1BQThCQyxLQUFBQSxJQUFBQSxFQUFBQSxHQUFBQSxDQUFBQSxFQUFBQSxlQUFBQSxHQUFBQSxNQUFNLENBQUNDLE9BQVAsQ0FBZUosT0FBTyxDQUFDRSxFQUF2QixDQUE5QixFQUEwRCxFQUFBLEdBQUEsZUFBQSxDQUFBLE1BQUEsRUFBQSxFQUFBLEVBQUEsRUFBQTtFQUFyRCxRQUFBLElBQUEsa0JBQUEsR0FBQSxjQUFBLENBQUEsZUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsQ0FBQTtFQUFBLFlBQU9HLFNBQVAsR0FBQSxrQkFBQSxDQUFBLENBQUEsQ0FBQTtFQUFBLFlBQWtCQyxFQUFsQixHQUFBLGtCQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7O0VBQ0gsUUFBQSxJQUFBLENBQUtKLEVBQUwsQ0FBUUcsU0FBUixFQUFtQkMsRUFBbkIsQ0FBQSxDQUFBO0VBQ0QsT0FBQTtFQUNGLEtBQUE7RUFDRixHQUFBOzs7O0VBRUQsSUFBQSxLQUFBLEVBQUEsU0FBQSxJQUFBLENBQUtELFNBQUwsRUFBZ0I7RUFDZCxNQUFLRSxJQUFBQSxDQUFBQSxXQUFMLEdBQW1CLEtBQW5CLENBQUE7RUFDQSxNQUFNQyxJQUFBQSxJQUFJLEdBQUcsRUFBQSxDQUFHQyxLQUFILENBQVNDLElBQVQsQ0FBY0MsU0FBZCxFQUF5QixDQUF6QixDQUFiLENBQUE7RUFFQSxNQUFBLElBQUksQ0FBQyxJQUFLVixDQUFBQSxNQUFMLENBQVlJLFNBQVosQ0FBTCxFQUE2QixPQUFBOztFQUpmLE1BQUEsSUFBQSxTQUFBLEdBQUEsMEJBQUEsQ0FNSyxJQUFLSixDQUFBQSxNQUFMLENBQVlJLFNBQVosQ0FOTCxDQUFBO0VBQUEsVUFBQSxLQUFBLENBQUE7O0VBQUEsTUFBQSxJQUFBO0VBTWQsUUFBMkMsS0FBQSxTQUFBLENBQUEsQ0FBQSxFQUFBLEVBQUEsQ0FBQSxDQUFBLEtBQUEsR0FBQSxTQUFBLENBQUEsQ0FBQSxFQUFBLEVBQUEsSUFBQSxHQUFBO0VBQUEsVUFBQSxJQUFoQ08sSUFBZ0MsR0FBQSxLQUFBLENBQUEsS0FBQSxDQUFBO0VBQ3pDQSxVQUFBQSxJQUFJLENBQUosS0FBQSxDQUFBLEtBQUEsQ0FBQSxFQUFBLGtCQUFBLENBQVFKLElBQVIsQ0FBQSxDQUFBLENBQUE7O0VBQ0EsVUFBSSxJQUFBLElBQUEsQ0FBS0QsV0FBVCxFQUFzQjtFQUNwQixZQUFBLE9BQUE7RUFDRCxXQUFBO0VBQ0YsU0FBQTtFQVhhLE9BQUEsQ0FBQSxPQUFBLEdBQUEsRUFBQTtFQUFBLFFBQUEsU0FBQSxDQUFBLENBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQTtFQUFBLE9BQUEsU0FBQTtFQUFBLFFBQUEsU0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBO0VBQUEsT0FBQTtFQVlmLEtBQUE7OzthQUVELFNBQVksU0FBQSxHQUFBO0VBQ1YsTUFBS0EsSUFBQUEsQ0FBQUEsV0FBTCxHQUFtQixJQUFuQixDQUFBO0VBQ0QsS0FBQTs7O2FBRUQsU0FBR0YsRUFBQUEsQ0FBQUEsU0FBSCxFQUFjQyxFQUFkLEVBQWtCO0VBQ2hCLE1BQUEsSUFBSSxDQUFDLElBQUtMLENBQUFBLE1BQUwsQ0FBWUksU0FBWixDQUFMLEVBQTZCO0VBQzNCLFFBQUEsSUFBQSxDQUFLSixNQUFMLENBQVlJLFNBQVosQ0FBQSxHQUF5QixFQUF6QixDQUFBO0VBQ0QsT0FBQTs7RUFFRCxNQUFBLElBQUEsQ0FBS0osTUFBTCxDQUFZSSxTQUFaLENBQXVCUSxDQUFBQSxJQUF2QixDQUE0QlAsRUFBNUIsQ0FBQSxDQUFBO0VBQ0QsS0FBQTs7O2FBRUQsU0FBVUQsU0FBQUEsQ0FBQUEsU0FBVixFQUFxQkMsRUFBckIsRUFBeUI7RUFDdkIsTUFBQSxJQUFJLENBQUMsSUFBS0wsQ0FBQUEsTUFBTCxDQUFZSSxTQUFaLENBQUwsRUFBNkI7RUFDM0IsUUFBQSxJQUFBLENBQUtKLE1BQUwsQ0FBWUksU0FBWixDQUFBLEdBQXlCLEVBQXpCLENBQUE7RUFDRCxPQUFBOztFQUVELE1BQUEsSUFBQSxDQUFLSixNQUFMLENBQVlJLFNBQVosQ0FBdUJTLENBQUFBLE9BQXZCLENBQStCUixFQUEvQixDQUFBLENBQUE7RUFDRCxLQUFBOzs7YUFFRCxTQUFZRCxXQUFBQSxDQUFBQSxTQUFaLEVBQXVCQyxFQUF2QixFQUEyQjtFQUN6QixNQUFBLElBQUksSUFBS0wsQ0FBQUEsTUFBTCxDQUFZSSxTQUFaLENBQUosRUFBNEI7RUFDMUIsUUFBTVUsSUFBQUEsS0FBSyxHQUFHLElBQUEsQ0FBS2QsTUFBTCxDQUFZSSxTQUFaLENBQXVCVyxDQUFBQSxPQUF2QixDQUErQlYsRUFBL0IsQ0FBZCxDQUFBO0VBQ0EsUUFBS0wsSUFBQUEsQ0FBQUEsTUFBTCxDQUFZSSxTQUFaLENBQUEsQ0FBdUJZLE1BQXZCLENBQThCRixLQUE5QixFQUFxQyxDQUFyQyxDQUFBLENBQUE7RUFDRCxPQUFBO0VBQ0YsS0FBQTs7O2FBRUQsU0FBZ0IsWUFBQSxHQUFBO0VBQ2QsTUFBS2QsSUFBQUEsQ0FBQUEsTUFBTCxHQUFjLEVBQWQsQ0FBQTtFQUNELEtBQUE7OztFQUVELElBQUEsS0FBQSxFQUFBLFNBQUEsT0FBQSxDQUFRSSxTQUFSLEVBQW1CO0VBQ2pCLE1BQUEsSUFBQSxDQUFLSixNQUFMLENBQVlJLFNBQVosQ0FBQSxHQUF5QixFQUF6QixDQUFBO0VBQ0QsS0FBQTs7Ozs7Ozs7Ozs7RUMxREg7Ozs7Ozs7Ozs7RUFVQSxFQUFFLFVBQVUsTUFBTSxHQUFHOztFQUlyQixJQUFJLFFBQVEsR0FBRyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7RUFDL0MsSUFBSSxZQUFZLEdBQUcsUUFBUSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUM7O0VBRWxELFNBQVMsZ0JBQWdCLEVBQUUsUUFBUSxHQUFHO0lBQ3BDLEtBQUssQ0FBQyxRQUFRLEdBQUc7TUFDZixPQUFPO0VBQ1IsR0FBQTs7O0VBR0QsRUFBQSxLQUFLLE9BQU8sWUFBWSxFQUFFLFFBQVEsRUFBRSxLQUFLLFFBQVEsR0FBRztFQUNsRCxJQUFBLE9BQU8sUUFBUSxDQUFDO0VBQ2pCLEdBQUE7OztFQUdELEVBQUEsUUFBUSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzs7O0VBR2hFLEVBQUEsSUFBSSxRQUFRLENBQUM7RUFDYixFQUFBLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUc7RUFDbkQsSUFBQSxRQUFRLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQztFQUNsQyxJQUFBLEtBQUssT0FBTyxZQUFZLEVBQUUsUUFBUSxFQUFFLEtBQUssUUFBUSxHQUFHO0VBQ2xELE1BQUEsT0FBTyxRQUFRLENBQUM7RUFDakIsS0FBQTtFQUNGLEdBQUE7RUFDRixDQUFBOzs7RUFReUM7O0lBRXhDLE1BQWMsQ0FBQSxPQUFBLEdBQUcsZ0JBQWdCLENBQUM7R0FJbkM7O0dBRUEsR0FBVyxDQUFDOzs7RUN0RE4sU0FBU2EsV0FBVCxDQUFxQkMsRUFBckIsRUFBeUJDLEVBQXpCLEVBQTZCO0VBQ2xDLEVBQU1DLElBQUFBLEVBQUUsR0FBR0YsRUFBRSxDQUFDbEUsQ0FBSCxHQUFPbUUsRUFBRSxDQUFDbkUsQ0FBckI7RUFBQSxNQUF3QnFFLEVBQUUsR0FBR0gsRUFBRSxDQUFDakUsQ0FBSCxHQUFPa0UsRUFBRSxDQUFDbEUsQ0FBdkMsQ0FBQTtFQUNBLEVBQU9tQixPQUFBQSxJQUFJLENBQUNrRCxJQUFMLENBQVVGLEVBQUUsR0FBR0EsRUFBTCxHQUFVQyxFQUFFLEdBQUdBLEVBQXpCLENBQVAsQ0FBQTtFQUNELENBQUE7RUFFTSxTQUFTRSxjQUFULENBQXdCTCxFQUF4QixFQUE0QkMsRUFBNUIsRUFBZ0M7RUFDckMsRUFBTy9DLE9BQUFBLElBQUksQ0FBQ29ELEdBQUwsQ0FBU04sRUFBRSxDQUFDbEUsQ0FBSCxHQUFPbUUsRUFBRSxDQUFDbkUsQ0FBbkIsQ0FBUCxDQUFBO0VBQ0QsQ0FBQTtFQUVNLFNBQVN5RSxjQUFULENBQXdCUCxFQUF4QixFQUE0QkMsRUFBNUIsRUFBZ0M7RUFDckMsRUFBTy9DLE9BQUFBLElBQUksQ0FBQ29ELEdBQUwsQ0FBU04sRUFBRSxDQUFDakUsQ0FBSCxHQUFPa0UsRUFBRSxDQUFDbEUsQ0FBbkIsQ0FBUCxDQUFBO0VBQ0QsQ0FBQTtFQUVNLFNBQVN5RSwrQkFBVCxDQUF5QzNCLE9BQXpDLEVBQWtEO0VBQ3ZELEVBQUEsT0FBTyxVQUFDbUIsRUFBRCxFQUFLQyxFQUFMLEVBQVk7RUFDakIsSUFBTy9DLE9BQUFBLElBQUksQ0FBQ2tELElBQUwsQ0FDTGxELElBQUksQ0FBQ3VELEdBQUwsQ0FBUzVCLE9BQU8sQ0FBQy9DLENBQVIsR0FBWW9CLElBQUksQ0FBQ29ELEdBQUwsQ0FBU04sRUFBRSxDQUFDbEUsQ0FBSCxHQUFPbUUsRUFBRSxDQUFDbkUsQ0FBbkIsQ0FBckIsRUFBNEMsQ0FBNUMsQ0FDQW9CLEdBQUFBLElBQUksQ0FBQ3VELEdBQUwsQ0FBUzVCLE9BQU8sQ0FBQzlDLENBQVIsR0FBWW1CLElBQUksQ0FBQ29ELEdBQUwsQ0FBU04sRUFBRSxDQUFDakUsQ0FBSCxHQUFPa0UsRUFBRSxDQUFDbEUsQ0FBbkIsQ0FBckIsRUFBNEMsQ0FBNUMsQ0FGSyxDQUFQLENBQUE7RUFJRCxHQUxELENBQUE7RUFNRCxDQUFBO0VBRU0sU0FBUzJFLG1CQUFULENBQTZCQyxHQUE3QixFQUFrQ0MsR0FBbEMsRUFBdUNDLE1BQXZDLEVBQTRFO0VBQUEsRUFBN0JDLElBQUFBLGVBQTZCLHVFQUFiZixXQUFhLENBQUE7RUFDakYsRUFBQSxJQUFJakQsSUFBSjtFQUFBLE1BQVU4QyxLQUFLLEdBQUcsQ0FBbEI7RUFBQSxNQUFxQm1CLENBQXJCO0VBQUEsTUFBd0JDLElBQXhCLENBQUE7O0VBQ0EsRUFBQSxJQUFJTCxHQUFHLENBQUNNLE1BQUosS0FBZSxDQUFuQixFQUFzQjtFQUNwQixJQUFBLE9BQU8sQ0FBQyxDQUFSLENBQUE7RUFDRCxHQUFBOztFQUNEbkUsRUFBQUEsSUFBSSxHQUFHZ0UsZUFBZSxDQUFDSCxHQUFHLENBQUMsQ0FBRCxDQUFKLEVBQVNDLEdBQVQsQ0FBdEIsQ0FBQTs7RUFDQSxFQUFBLEtBQUtHLENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsR0FBR0osR0FBRyxDQUFDTSxNQUFwQixFQUE0QkYsQ0FBQyxFQUE3QixFQUFpQztFQUMvQkMsSUFBQUEsSUFBSSxHQUFHRixlQUFlLENBQUNILEdBQUcsQ0FBQ0ksQ0FBRCxDQUFKLEVBQVNILEdBQVQsQ0FBdEIsQ0FBQTs7RUFDQSxJQUFJSSxJQUFBQSxJQUFJLEdBQUdsRSxJQUFYLEVBQWlCO0VBQ2ZBLE1BQUFBLElBQUksR0FBR2tFLElBQVAsQ0FBQTtFQUNBcEIsTUFBQUEsS0FBSyxHQUFHbUIsQ0FBUixDQUFBO0VBQ0QsS0FBQTtFQUNGLEdBQUE7O0VBQ0QsRUFBQSxJQUFJRixNQUFNLElBQUksQ0FBVixJQUFlL0QsSUFBSSxHQUFHK0QsTUFBMUIsRUFBa0M7RUFDaEMsSUFBQSxPQUFPLENBQUMsQ0FBUixDQUFBO0VBQ0QsR0FBQTs7RUFDRCxFQUFBLE9BQU9qQixLQUFQLENBQUE7RUFDRDs7RUMvQk0sU0FBU3NCLGNBQVQsQ0FBd0JDLElBQXhCLEVBQThCQyxJQUE5QixFQUFvQ0MsSUFBcEMsRUFBMENDLElBQTFDLEVBQWdEO0VBQ3JELEVBQUEsSUFBSU4sSUFBSixFQUFVTyxFQUFWLEVBQWNDLEVBQWQsRUFBa0JDLEVBQWxCLEVBQXNCQyxFQUF0QixFQUEwQjVGLENBQTFCLEVBQTZCQyxDQUE3QixDQUFBOztFQUNBLEVBQUEsSUFBSXNGLElBQUksQ0FBQ3ZGLENBQUwsS0FBV3dGLElBQUksQ0FBQ3hGLENBQXBCLEVBQXVCO0VBQ3JCa0YsSUFBQUEsSUFBSSxHQUFHSyxJQUFQLENBQUE7RUFDQUEsSUFBQUEsSUFBSSxHQUFHRixJQUFQLENBQUE7RUFDQUEsSUFBQUEsSUFBSSxHQUFHSCxJQUFQLENBQUE7RUFDQUEsSUFBQUEsSUFBSSxHQUFHTSxJQUFQLENBQUE7RUFDQUEsSUFBQUEsSUFBSSxHQUFHRixJQUFQLENBQUE7RUFDQUEsSUFBQUEsSUFBSSxHQUFHSixJQUFQLENBQUE7RUFDRCxHQUFBOztFQUNELEVBQUEsSUFBSUcsSUFBSSxDQUFDckYsQ0FBTCxLQUFXc0YsSUFBSSxDQUFDdEYsQ0FBcEIsRUFBdUI7RUFDckIwRixJQUFBQSxFQUFFLEdBQUcsQ0FBQ0YsSUFBSSxDQUFDdkYsQ0FBTCxHQUFTc0YsSUFBSSxDQUFDdEYsQ0FBZixLQUFxQnVGLElBQUksQ0FBQ3hGLENBQUwsR0FBU3VGLElBQUksQ0FBQ3ZGLENBQW5DLENBQUwsQ0FBQTtFQUNBNEYsSUFBQUEsRUFBRSxHQUFHLENBQUNKLElBQUksQ0FBQ3hGLENBQUwsR0FBU3VGLElBQUksQ0FBQ3RGLENBQWQsR0FBa0JzRixJQUFJLENBQUN2RixDQUFMLEdBQVN3RixJQUFJLENBQUN2RixDQUFqQyxLQUF1Q3VGLElBQUksQ0FBQ3hGLENBQUwsR0FBU3VGLElBQUksQ0FBQ3ZGLENBQXJELENBQUwsQ0FBQTtFQUNBQSxJQUFBQSxDQUFDLEdBQUdxRixJQUFJLENBQUNyRixDQUFULENBQUE7RUFDQUMsSUFBQUEsQ0FBQyxHQUFHRCxDQUFDLEdBQUcwRixFQUFKLEdBQVNFLEVBQWIsQ0FBQTtFQUNBLElBQUEsT0FBTyxJQUFJN0YsS0FBSixDQUFVQyxDQUFWLEVBQWFDLENBQWIsQ0FBUCxDQUFBO0VBQ0QsR0FORCxNQU1PO0VBQ0x3RixJQUFBQSxFQUFFLEdBQUcsQ0FBQ0gsSUFBSSxDQUFDckYsQ0FBTCxHQUFTb0YsSUFBSSxDQUFDcEYsQ0FBZixLQUFxQnFGLElBQUksQ0FBQ3RGLENBQUwsR0FBU3FGLElBQUksQ0FBQ3JGLENBQW5DLENBQUwsQ0FBQTtFQUNBMkYsSUFBQUEsRUFBRSxHQUFHLENBQUNMLElBQUksQ0FBQ3RGLENBQUwsR0FBU3FGLElBQUksQ0FBQ3BGLENBQWQsR0FBa0JvRixJQUFJLENBQUNyRixDQUFMLEdBQVNzRixJQUFJLENBQUNyRixDQUFqQyxLQUF1Q3FGLElBQUksQ0FBQ3RGLENBQUwsR0FBU3FGLElBQUksQ0FBQ3JGLENBQXJELENBQUwsQ0FBQTtFQUNBMEYsSUFBQUEsRUFBRSxHQUFHLENBQUNGLElBQUksQ0FBQ3ZGLENBQUwsR0FBU3NGLElBQUksQ0FBQ3RGLENBQWYsS0FBcUJ1RixJQUFJLENBQUN4RixDQUFMLEdBQVN1RixJQUFJLENBQUN2RixDQUFuQyxDQUFMLENBQUE7RUFDQTRGLElBQUFBLEVBQUUsR0FBRyxDQUFDSixJQUFJLENBQUN4RixDQUFMLEdBQVN1RixJQUFJLENBQUN0RixDQUFkLEdBQWtCc0YsSUFBSSxDQUFDdkYsQ0FBTCxHQUFTd0YsSUFBSSxDQUFDdkYsQ0FBakMsS0FBdUN1RixJQUFJLENBQUN4RixDQUFMLEdBQVN1RixJQUFJLENBQUN2RixDQUFyRCxDQUFMLENBQUE7RUFDQUEsSUFBQUEsQ0FBQyxHQUFHLENBQUMyRixFQUFFLEdBQUdDLEVBQU4sS0FBYUYsRUFBRSxHQUFHRCxFQUFsQixDQUFKLENBQUE7RUFDQXhGLElBQUFBLENBQUMsR0FBR0QsQ0FBQyxHQUFHeUYsRUFBSixHQUFTRSxFQUFiLENBQUE7RUFDQSxJQUFBLE9BQU8sSUFBSTVGLEtBQUosQ0FBVUMsQ0FBVixFQUFhQyxDQUFiLENBQVAsQ0FBQTtFQUNELEdBQUE7RUFDRixDQUFBO0VBbUJNLFNBQVM0RixXQUFULENBQXFCQyxDQUFyQixFQUF3QkMsQ0FBeEIsRUFBMkJDLENBQTNCLEVBQThCO0VBQ25DLEVBQU1DLElBQUFBLEVBQUUsR0FBRyxJQUFJbEcsS0FBSixDQUFVaUcsQ0FBQyxDQUFDaEcsQ0FBRixHQUFNOEYsQ0FBQyxDQUFDOUYsQ0FBbEIsRUFBcUJnRyxDQUFDLENBQUMvRixDQUFGLEdBQU02RixDQUFDLENBQUM3RixDQUE3QixDQUFYO0VBQUEsTUFDRWlHLEVBQUUsR0FBRyxJQUFJbkcsS0FBSixDQUFVZ0csQ0FBQyxDQUFDL0YsQ0FBRixHQUFNOEYsQ0FBQyxDQUFDOUYsQ0FBbEIsRUFBcUIrRixDQUFDLENBQUM5RixDQUFGLEdBQU02RixDQUFDLENBQUM3RixDQUE3QixDQURQO0VBQUEsTUFFRWtHLEdBQUcsR0FBR0QsRUFBRSxDQUFDbEcsQ0FBSCxHQUFPa0csRUFBRSxDQUFDbEcsQ0FBVixHQUFja0csRUFBRSxDQUFDakcsQ0FBSCxHQUFPaUcsRUFBRSxDQUFDakcsQ0FGaEM7RUFBQSxNQUdFbUcsS0FBSyxHQUFHSCxFQUFFLENBQUNqRyxDQUFILEdBQU9rRyxFQUFFLENBQUNsRyxDQUFWLEdBQWNpRyxFQUFFLENBQUNoRyxDQUFILEdBQU9pRyxFQUFFLENBQUNqRyxDQUhsQztFQUFBLE1BSUVvRyxDQUFDLEdBQUdELEtBQUssR0FBR0QsR0FKZCxDQUFBO0VBS0EsRUFBTyxPQUFBLElBQUlwRyxLQUFKLENBQVUrRixDQUFDLENBQUM5RixDQUFGLEdBQU1rRyxFQUFFLENBQUNsRyxDQUFILEdBQU9xRyxDQUF2QixFQUEwQlAsQ0FBQyxDQUFDN0YsQ0FBRixHQUFNaUcsRUFBRSxDQUFDakcsQ0FBSCxHQUFPb0csQ0FBdkMsQ0FBUCxDQUFBO0VBQ0QsQ0FBQTtFQU9NLFNBQVNDLHNCQUFULENBQWdDQyxHQUFoQyxFQUFxQ0MsR0FBckMsRUFBMENDLE1BQTFDLEVBQWtEO0VBQ3ZELEVBQU1yQyxJQUFBQSxFQUFFLEdBQUdvQyxHQUFHLENBQUN4RyxDQUFKLEdBQVF1RyxHQUFHLENBQUN2RyxDQUF2QixDQUFBO0VBQ0EsRUFBTXFFLElBQUFBLEVBQUUsR0FBR21DLEdBQUcsQ0FBQ3ZHLENBQUosR0FBUXNHLEdBQUcsQ0FBQ3RHLENBQXZCLENBQUE7RUFDQSxFQUFNeUcsSUFBQUEsT0FBTyxHQUFHRCxNQUFNLEdBQUd4QyxXQUFXLENBQUNzQyxHQUFELEVBQU1DLEdBQU4sQ0FBcEMsQ0FBQTtFQUNBLEVBQUEsT0FBTyxJQUFJekcsS0FBSixDQUFVd0csR0FBRyxDQUFDdkcsQ0FBSixHQUFRMEcsT0FBTyxHQUFHdEMsRUFBNUIsRUFBZ0NtQyxHQUFHLENBQUN0RyxDQUFKLEdBQVF5RyxPQUFPLEdBQUdyQyxFQUFsRCxDQUFQLENBQUE7RUFDRCxDQUFBO0VBRU0sU0FBU3NDLHFCQUFULENBQStCQyxXQUEvQixFQUE0Q0MsS0FBNUMsRUFBbURDLE9BQW5ELEVBQTREO0VBQ2pFLEVBQU1DLElBQUFBLE1BQU0sR0FBR0gsV0FBVyxDQUFDSSxNQUFaLENBQW1CLFVBQUNDLE1BQUQsRUFBWTtFQUM1QyxJQUFPQSxPQUFBQSxNQUFNLENBQUNoSCxDQUFQLEdBQVc0RyxLQUFLLENBQUM1RyxDQUFqQixLQUF1QjZHLE9BQU8sR0FBR0csTUFBTSxDQUFDakgsQ0FBUCxHQUFXNkcsS0FBSyxDQUFDN0csQ0FBcEIsR0FBd0JpSCxNQUFNLENBQUNqSCxDQUFQLEdBQVc2RyxLQUFLLENBQUM3RyxDQUF2RSxDQUFQLENBQUE7RUFDRCxHQUZjLENBQWYsQ0FBQTs7RUFJQSxFQUFBLEtBQUssSUFBSWlGLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUc4QixNQUFNLENBQUM1QixNQUEzQixFQUFtQ0YsQ0FBQyxFQUFwQyxFQUF3QztFQUN0QyxJQUFJNEIsSUFBQUEsS0FBSyxDQUFDNUcsQ0FBTixHQUFVOEcsTUFBTSxDQUFDOUIsQ0FBRCxDQUFOLENBQVVoRixDQUF4QixFQUEyQjtFQUN6QjhHLE1BQUFBLE1BQU0sQ0FBQy9DLE1BQVAsQ0FBY2lCLENBQWQsRUFBaUIsQ0FBakIsRUFBb0I0QixLQUFwQixDQUFBLENBQUE7RUFDQSxNQUFBLE9BQU9FLE1BQVAsQ0FBQTtFQUNELEtBQUE7RUFDRixHQUFBOztFQUNEQSxFQUFBQSxNQUFNLENBQUNuRCxJQUFQLENBQVlpRCxLQUFaLENBQUEsQ0FBQTtFQUNBLEVBQUEsT0FBT0UsTUFBUCxDQUFBO0VBQ0Q7O0VDcEZNLFNBQVNHLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQTZCQyxJQUE3QixFQUFtQztFQUN4QyxFQUFNQyxJQUFBQSxRQUFRLEdBQUdqRyxJQUFJLENBQUNDLEdBQUwsQ0FBUzhGLEtBQVQsRUFBZ0JDLElBQWhCLENBQWpCLENBQUE7RUFDQSxFQUFNRSxJQUFBQSxRQUFRLEdBQUlsRyxJQUFJLENBQUNFLEdBQUwsQ0FBUzZGLEtBQVQsRUFBZ0JDLElBQWhCLENBQWxCLENBQUE7RUFDQSxFQUFBLE9BQU9oRyxJQUFJLENBQUNDLEdBQUwsQ0FBU2lHLFFBQVEsR0FBR0QsUUFBcEIsRUFBOEJBLFFBQVEsR0FBR2pHLElBQUksQ0FBQ21HLEVBQUwsR0FBUSxDQUFuQixHQUF1QkQsUUFBckQsQ0FBUCxDQUFBO0VBQ0QsQ0FBQTtFQUVNLFNBQVNFLFFBQVQsQ0FBa0J0RCxFQUFsQixFQUFzQkMsRUFBdEIsRUFBMEI7RUFDL0IsRUFBQSxJQUFNc0QsSUFBSSxHQUFHdEQsRUFBRSxDQUFDNUMsR0FBSCxDQUFPMkMsRUFBUCxDQUFiLENBQUE7RUFDQSxFQUFBLE9BQU93RCxjQUFjLENBQUN0RyxJQUFJLENBQUN1RyxLQUFMLENBQVdGLElBQUksQ0FBQ3hILENBQWhCLEVBQW1Cd0gsSUFBSSxDQUFDekgsQ0FBeEIsQ0FBRCxDQUFyQixDQUFBO0VBQ0QsQ0FBQTtFQVVNLFNBQVM0SCxVQUFULENBQW9CdkcsR0FBcEIsRUFBeUJDLEdBQXpCLEVBQThCd0QsR0FBOUIsRUFBbUM7RUFDeEMsRUFBSStDLElBQUFBLElBQUosRUFBVUMsSUFBVixDQUFBOztFQUNBLEVBQUl6RyxJQUFBQSxHQUFHLEdBQUdDLEdBQU4sSUFBYXdELEdBQUcsR0FBR3pELEdBQW5CLElBQTBCeUQsR0FBRyxHQUFHeEQsR0FBcEMsRUFBeUM7RUFDdkMsSUFBQSxPQUFPd0QsR0FBUCxDQUFBO0VBQ0QsR0FGRCxNQUVPLElBQUl4RCxHQUFHLEdBQUdELEdBQU4sS0FBY3lELEdBQUcsR0FBR3hELEdBQU4sSUFBYXdELEdBQUcsR0FBR3pELEdBQWpDLENBQUosRUFBMkM7RUFDaEQsSUFBQSxPQUFPeUQsR0FBUCxDQUFBO0VBQ0QsR0FGTSxNQUVBO0VBQ0wrQyxJQUFBQSxJQUFJLEdBQUdYLFlBQVksQ0FBQzdGLEdBQUQsRUFBTXlELEdBQU4sQ0FBbkIsQ0FBQTtFQUNBZ0QsSUFBQUEsSUFBSSxHQUFHWixZQUFZLENBQUM1RixHQUFELEVBQU13RCxHQUFOLENBQW5CLENBQUE7O0VBQ0EsSUFBSStDLElBQUFBLElBQUksR0FBR0MsSUFBWCxFQUFpQjtFQUNmLE1BQUEsT0FBT3pHLEdBQVAsQ0FBQTtFQUNELEtBRkQsTUFFTztFQUNMLE1BQUEsT0FBT0MsR0FBUCxDQUFBO0VBQ0QsS0FBQTtFQUNGLEdBQUE7RUFDRixDQUFBO0VBY00sU0FBU29HLGNBQVQsQ0FBd0I1QyxHQUF4QixFQUE2QjtFQUNsQyxFQUFPQSxPQUFBQSxHQUFHLEdBQUcsQ0FBYixFQUFnQjtFQUNkQSxJQUFBQSxHQUFHLElBQUksQ0FBSTFELEdBQUFBLElBQUksQ0FBQ21HLEVBQWhCLENBQUE7RUFDRCxHQUFBOztFQUNELEVBQUEsT0FBT3pDLEdBQUcsR0FBRyxDQUFBLEdBQUkxRCxJQUFJLENBQUNtRyxFQUF0QixFQUEwQjtFQUN4QnpDLElBQUFBLEdBQUcsSUFBSSxDQUFJMUQsR0FBQUEsSUFBSSxDQUFDbUcsRUFBaEIsQ0FBQTtFQUNELEdBQUE7O0VBQ0QsRUFBQSxPQUFPekMsR0FBUCxDQUFBO0VBQ0QsQ0FBQTtFQUVNLFNBQVNpRCx3QkFBVCxDQUFrQ0MsS0FBbEMsRUFBeUM3QyxNQUF6QyxFQUFpRDhDLE1BQWpELEVBQXlEO0VBQzlEQSxFQUFBQSxNQUFNLEdBQUdBLE1BQU0sSUFBSSxJQUFJbEksS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLENBQW5CLENBQUE7RUFDQSxFQUFPa0ksT0FBQUEsTUFBTSxDQUFDaEgsR0FBUCxDQUFXLElBQUlsQixLQUFKLENBQVVvRixNQUFNLEdBQUcvRCxJQUFJLENBQUM4RyxHQUFMLENBQVNGLEtBQVQsQ0FBbkIsRUFBb0M3QyxNQUFNLEdBQUcvRCxJQUFJLENBQUMrRyxHQUFMLENBQVNILEtBQVQsQ0FBN0MsQ0FBWCxDQUFQLENBQUE7RUFDRDs7QUNoREQsTUFBYUksS0FBYixnQkFBQSxZQUFBO0VBQ0UsRUFBZSxTQUFBLEtBQUEsR0FBQTtFQUFBLElBQUEsZUFBQSxDQUFBLElBQUEsRUFBQSxLQUFBLENBQUEsQ0FBQTtFQUFFLEdBQUE7O0VBRG5CLEVBQUEsWUFBQSxDQUFBLEtBQUEsRUFBQSxDQUFBO0VBQUEsSUFBQSxHQUFBLEVBQUEsT0FBQTtFQUFBLElBQUEsS0FBQSxFQUdFLFNBQU12QixLQUFBQSxDQUFBQSxLQUFOLEVBQWF3QixLQUFiLEVBQW9CO0VBQ2xCLE1BQUEsT0FBT3hCLEtBQVAsQ0FBQTtFQUNELEtBQUE7RUFMSCxHQUFBLEVBQUE7RUFBQSxJQUFBLEdBQUEsRUFBQSxTQUFBO0VBQUEsSUFBQSxLQUFBLEVBT0UsbUJBQVcsRUFBRTtFQVBmLEdBQUEsQ0FBQSxFQUFBLENBQUE7RUFBQSxJQUFBLEdBQUEsRUFBQSxVQUFBO0VBQUEsSUFBQSxLQUFBLEVBU0UsU0FBa0IsUUFBQSxHQUFBO0VBQ2hCLE1BQUEsSUFBTXlCLFFBQVEsR0FBQSxVQUFBLENBQU8sSUFBUCxFQUFBLEtBQUEsQ0FBQSxTQUFBLENBQUEsS0FBQSxDQUFBLElBQUEsQ0FBZTVFLFNBQWYsQ0FBZCxDQUFBLENBQUE7O0VBQ0EsTUFBQSxPQUFPNEUsUUFBUSxDQUFDQyxLQUFULENBQWVDLElBQWYsQ0FBb0JGLFFBQXBCLENBQVAsQ0FBQTtFQUNELEtBQUE7RUFaSCxHQUFBLENBQUEsQ0FBQSxDQUFBOztFQUFBLEVBQUEsT0FBQSxLQUFBLENBQUE7RUFBQSxDQUFBLEdBQUE7QUFlQSxNQUFhRyxnQkFBYixnQkFBQSxVQUFBLE1BQUEsRUFBQTtFQUFBLEVBQUEsU0FBQSxDQUFBLGdCQUFBLEVBQUEsTUFBQSxDQUFBLENBQUE7O0VBQUEsRUFBQSxJQUFBLE1BQUEsR0FBQSxZQUFBLENBQUEsZ0JBQUEsQ0FBQSxDQUFBOztFQUNFLEVBQUEsU0FBQSxnQkFBQSxDQUFZakgsU0FBWixFQUF1QjtFQUFBLElBQUEsSUFBQSxLQUFBLENBQUE7O0VBQUEsSUFBQSxlQUFBLENBQUEsSUFBQSxFQUFBLGdCQUFBLENBQUEsQ0FBQTs7RUFDckIsSUFBQSxLQUFBLEdBQUEsTUFBQSxDQUFBLElBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQTtFQUNBLElBQUtBLEtBQUFBLENBQUFBLFNBQUwsR0FBaUJBLFNBQWpCLENBQUE7RUFGcUIsSUFBQSxPQUFBLEtBQUEsQ0FBQTtFQUd0QixHQUFBOztFQUpILEVBQUEsWUFBQSxDQUFBLGdCQUFBLEVBQUEsQ0FBQTtFQUFBLElBQUEsR0FBQSxFQUFBLE9BQUE7RUFBQSxJQUFBLEtBQUEsRUFNRSxTQUFNcUYsS0FBQUEsQ0FBQUEsS0FBTixFQUFhN0YsSUFBYixFQUFtQjtFQUNqQixNQUFBLElBQU0wSCxTQUFTLEdBQUc3QixLQUFLLENBQUM4QixLQUFOLEVBQWxCLENBQUE7RUFDQSxNQUFBLElBQU1DLE1BQU0sR0FBRyxJQUFBLENBQUtwSCxTQUFMLENBQWVFLEtBQWYsRUFBZixDQUFBOztFQUVBLE1BQUksSUFBQSxJQUFBLENBQUtGLFNBQUwsQ0FBZVQsUUFBZixDQUF3QmYsQ0FBeEIsR0FBNEIwSSxTQUFTLENBQUMxSSxDQUExQyxFQUE2QztFQUMxQzBJLFFBQUFBLFNBQVMsQ0FBQzFJLENBQVYsR0FBYyxLQUFLd0IsU0FBTCxDQUFlVCxRQUFmLENBQXdCZixDQUF2QyxDQUFBO0VBQ0QsT0FBQTs7RUFDRCxNQUFJLElBQUEsSUFBQSxDQUFLd0IsU0FBTCxDQUFlVCxRQUFmLENBQXdCZCxDQUF4QixHQUE0QnlJLFNBQVMsQ0FBQ3pJLENBQTFDLEVBQTZDO0VBQzNDeUksUUFBQUEsU0FBUyxDQUFDekksQ0FBVixHQUFjLEtBQUt1QixTQUFMLENBQWVULFFBQWYsQ0FBd0JkLENBQXRDLENBQUE7RUFDRCxPQUFBOztFQUNELE1BQUkySSxJQUFBQSxNQUFNLENBQUM1SSxDQUFQLEdBQVcwSSxTQUFTLENBQUMxSSxDQUFWLEdBQWNnQixJQUFJLENBQUNoQixDQUFsQyxFQUFxQztFQUNuQzBJLFFBQUFBLFNBQVMsQ0FBQzFJLENBQVYsR0FBYzRJLE1BQU0sQ0FBQzVJLENBQVAsR0FBV2dCLElBQUksQ0FBQ2hCLENBQTlCLENBQUE7RUFDRCxPQUFBOztFQUNELE1BQUk0SSxJQUFBQSxNQUFNLENBQUMzSSxDQUFQLEdBQVd5SSxTQUFTLENBQUN6SSxDQUFWLEdBQWNlLElBQUksQ0FBQ2YsQ0FBbEMsRUFBcUM7RUFDbkN5SSxRQUFBQSxTQUFTLENBQUN6SSxDQUFWLEdBQWMySSxNQUFNLENBQUMzSSxDQUFQLEdBQVdlLElBQUksQ0FBQ2YsQ0FBOUIsQ0FBQTtFQUNELE9BQUE7O0VBRUQsTUFBQSxPQUFPeUksU0FBUCxDQUFBO0VBQ0QsS0FBQTtFQXhCSCxHQUFBLENBQUEsQ0FBQSxDQUFBOztFQUFBLEVBQUEsT0FBQSxnQkFBQSxDQUFBO0VBQUEsQ0FBQSxDQUFzQ04sS0FBdEMsRUFBQTtBQTJCQSxNQUFhUyxjQUFiLGdCQUFBLFVBQUEsaUJBQUEsRUFBQTtFQUFBLEVBQUEsU0FBQSxDQUFBLGNBQUEsRUFBQSxpQkFBQSxDQUFBLENBQUE7O0VBQUEsRUFBQSxJQUFBLE9BQUEsR0FBQSxZQUFBLENBQUEsY0FBQSxDQUFBLENBQUE7O0VBQ0UsRUFBWXRKLFNBQUFBLGNBQUFBLENBQUFBLE9BQVosRUFBcUJxRCxTQUFyQixFQUFnQztFQUFBLElBQUEsSUFBQSxNQUFBLENBQUE7O0VBQUEsSUFBQSxlQUFBLENBQUEsSUFBQSxFQUFBLGNBQUEsQ0FBQSxDQUFBOztFQUM5QixJQUFBLE1BQUEsR0FBQSxPQUFBLENBQUEsSUFBQSxDQUFBLElBQUEsRUFBTTlCLFNBQVMsQ0FBQ2dJLFdBQVYsQ0FBc0J2SixPQUF0QixFQUErQnFELFNBQS9CLENBQU4sQ0FBQSxDQUFBO0VBQ0EsSUFBS3JELE1BQUFBLENBQUFBLE9BQUwsR0FBZUEsT0FBZixDQUFBO0VBQ0EsSUFBS3FELE1BQUFBLENBQUFBLFNBQUwsR0FBaUJBLFNBQWpCLENBQUE7RUFIOEIsSUFBQSxPQUFBLE1BQUEsQ0FBQTtFQUkvQixHQUFBOztFQUxILEVBQUEsWUFBQSxDQUFBLGNBQUEsRUFBQSxDQUFBO0VBQUEsSUFBQSxHQUFBLEVBQUEsU0FBQTtFQUFBLElBQUEsS0FBQSxFQU9FLFNBQVcsT0FBQSxHQUFBO0VBQ1QsTUFBS3BCLElBQUFBLENBQUFBLFNBQUwsR0FBaUJWLFNBQVMsQ0FBQ2dJLFdBQVYsQ0FBc0IsSUFBQSxDQUFLdkosT0FBM0IsRUFBb0MsSUFBS3FELENBQUFBLFNBQXpDLENBQWpCLENBQUE7RUFDRCxLQUFBO0VBVEgsR0FBQSxDQUFBLENBQUEsQ0FBQTs7RUFBQSxFQUFBLE9BQUEsY0FBQSxDQUFBO0VBQUEsQ0FBQSxDQUFvQzZGLGdCQUFwQyxFQUFBO0FBWUEsTUFBYU0sWUFBYixnQkFBQSxVQUFBLE9BQUEsRUFBQTtFQUFBLEVBQUEsU0FBQSxDQUFBLFlBQUEsRUFBQSxPQUFBLENBQUEsQ0FBQTs7RUFBQSxFQUFBLElBQUEsT0FBQSxHQUFBLFlBQUEsQ0FBQSxZQUFBLENBQUEsQ0FBQTs7RUFDRSxFQUFBLFNBQUEsWUFBQSxDQUFZL0ksQ0FBWixFQUFlZ0osTUFBZixFQUF1QkMsSUFBdkIsRUFBNkI7RUFBQSxJQUFBLElBQUEsTUFBQSxDQUFBOztFQUFBLElBQUEsZUFBQSxDQUFBLElBQUEsRUFBQSxZQUFBLENBQUEsQ0FBQTs7RUFDM0IsSUFBQSxNQUFBLEdBQUEsT0FBQSxDQUFBLElBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQTtFQUNBLElBQUtqSixNQUFBQSxDQUFBQSxDQUFMLEdBQVNBLENBQVQsQ0FBQTtFQUNBLElBQUtnSixNQUFBQSxDQUFBQSxNQUFMLEdBQWNBLE1BQWQsQ0FBQTtFQUNBLElBQUtDLE1BQUFBLENBQUFBLElBQUwsR0FBWUEsSUFBWixDQUFBO0VBSjJCLElBQUEsT0FBQSxNQUFBLENBQUE7RUFLNUIsR0FBQTs7RUFOSCxFQUFBLFlBQUEsQ0FBQSxZQUFBLEVBQUEsQ0FBQTtFQUFBLElBQUEsR0FBQSxFQUFBLE9BQUE7RUFBQSxJQUFBLEtBQUEsRUFRRSxTQUFNcEMsS0FBQUEsQ0FBQUEsS0FBTixFQUFhN0YsSUFBYixFQUFtQjtFQUNqQixNQUFBLElBQU0wSCxTQUFTLEdBQUc3QixLQUFLLENBQUM4QixLQUFOLEVBQWxCLENBQUE7RUFFQUQsTUFBQUEsU0FBUyxDQUFDMUksQ0FBVixHQUFjLEtBQUtBLENBQW5CLENBQUE7O0VBQ0EsTUFBQSxJQUFJLEtBQUtnSixNQUFMLEdBQWNOLFNBQVMsQ0FBQ3pJLENBQTVCLEVBQStCO0VBQzdCeUksUUFBQUEsU0FBUyxDQUFDekksQ0FBVixHQUFjLEtBQUsrSSxNQUFuQixDQUFBO0VBQ0QsT0FBQTs7RUFDRCxNQUFJLElBQUEsSUFBQSxDQUFLQyxJQUFMLEdBQVlQLFNBQVMsQ0FBQ3pJLENBQVYsR0FBY2UsSUFBSSxDQUFDZixDQUFuQyxFQUFzQztFQUNwQ3lJLFFBQUFBLFNBQVMsQ0FBQ3pJLENBQVYsR0FBYyxLQUFLZ0osSUFBTCxHQUFZakksSUFBSSxDQUFDZixDQUEvQixDQUFBO0VBQ0QsT0FBQTs7RUFFRCxNQUFBLE9BQU95SSxTQUFQLENBQUE7RUFDRCxLQUFBO0VBcEJILEdBQUEsQ0FBQSxDQUFBLENBQUE7O0VBQUEsRUFBQSxPQUFBLFlBQUEsQ0FBQTtFQUFBLENBQUEsQ0FBa0NOLEtBQWxDLEVBQUE7QUF1QkEsTUFBYWMsWUFBYixnQkFBQSxVQUFBLE9BQUEsRUFBQTtFQUFBLEVBQUEsU0FBQSxDQUFBLFlBQUEsRUFBQSxPQUFBLENBQUEsQ0FBQTs7RUFBQSxFQUFBLElBQUEsT0FBQSxHQUFBLFlBQUEsQ0FBQSxZQUFBLENBQUEsQ0FBQTs7RUFDRSxFQUFBLFNBQUEsWUFBQSxDQUFZakosQ0FBWixFQUFla0osTUFBZixFQUF1QkMsSUFBdkIsRUFBNkI7RUFBQSxJQUFBLElBQUEsTUFBQSxDQUFBOztFQUFBLElBQUEsZUFBQSxDQUFBLElBQUEsRUFBQSxZQUFBLENBQUEsQ0FBQTs7RUFDM0IsSUFBQSxNQUFBLEdBQUEsT0FBQSxDQUFBLElBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQTtFQUNBLElBQUtuSixNQUFBQSxDQUFBQSxDQUFMLEdBQVNBLENBQVQsQ0FBQTtFQUNBLElBQUtrSixNQUFBQSxDQUFBQSxNQUFMLEdBQWNBLE1BQWQsQ0FBQTtFQUNBLElBQUtDLE1BQUFBLENBQUFBLElBQUwsR0FBWUEsSUFBWixDQUFBO0VBSjJCLElBQUEsT0FBQSxNQUFBLENBQUE7RUFLNUIsR0FBQTs7RUFOSCxFQUFBLFlBQUEsQ0FBQSxZQUFBLEVBQUEsQ0FBQTtFQUFBLElBQUEsR0FBQSxFQUFBLE9BQUE7RUFBQSxJQUFBLEtBQUEsRUFRRSxTQUFNdkMsS0FBQUEsQ0FBQUEsS0FBTixFQUFhN0YsSUFBYixFQUFtQjtFQUNqQixNQUFBLElBQU0wSCxTQUFTLEdBQUc3QixLQUFLLENBQUM4QixLQUFOLEVBQWxCLENBQUE7RUFDQUQsTUFBQUEsU0FBUyxDQUFDekksQ0FBVixHQUFjLEtBQUtBLENBQW5CLENBQUE7O0VBQ0EsTUFBQSxJQUFJLEtBQUtrSixNQUFMLEdBQWNULFNBQVMsQ0FBQzFJLENBQTVCLEVBQStCO0VBQzdCMEksUUFBQUEsU0FBUyxDQUFDMUksQ0FBVixHQUFjLEtBQUttSixNQUFuQixDQUFBO0VBQ0QsT0FBQTs7RUFDRCxNQUFJLElBQUEsSUFBQSxDQUFLQyxJQUFMLEdBQVlWLFNBQVMsQ0FBQzFJLENBQVYsR0FBY2dCLElBQUksQ0FBQ2hCLENBQW5DLEVBQXNDO0VBQ3BDMEksUUFBQUEsU0FBUyxDQUFDMUksQ0FBVixHQUFjLEtBQUtvSixJQUFMLEdBQVlwSSxJQUFJLENBQUNoQixDQUEvQixDQUFBO0VBQ0QsT0FBQTs7RUFDRCxNQUFBLE9BQU8wSSxTQUFQLENBQUE7RUFDRCxLQUFBO0VBbEJILEdBQUEsQ0FBQSxDQUFBLENBQUE7O0VBQUEsRUFBQSxPQUFBLFlBQUEsQ0FBQTtFQUFBLENBQUEsQ0FBa0NOLEtBQWxDLEVBQUE7QUFxQkEsTUFBYWlCLFdBQWIsZ0JBQUEsVUFBQSxPQUFBLEVBQUE7RUFBQSxFQUFBLFNBQUEsQ0FBQSxXQUFBLEVBQUEsT0FBQSxDQUFBLENBQUE7O0VBQUEsRUFBQSxJQUFBLE9BQUEsR0FBQSxZQUFBLENBQUEsV0FBQSxDQUFBLENBQUE7O0VBQ0UsRUFBWUMsU0FBQUEsV0FBQUEsQ0FBQUEsVUFBWixFQUF3QkMsUUFBeEIsRUFBa0M7RUFBQSxJQUFBLElBQUEsTUFBQSxDQUFBOztFQUFBLElBQUEsZUFBQSxDQUFBLElBQUEsRUFBQSxXQUFBLENBQUEsQ0FBQTs7RUFDaEMsSUFBQSxNQUFBLEdBQUEsT0FBQSxDQUFBLElBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQTtFQUNBLElBQUtELE1BQUFBLENBQUFBLFVBQUwsR0FBa0JBLFVBQWxCLENBQUE7RUFDQSxJQUFLQyxNQUFBQSxDQUFBQSxRQUFMLEdBQWdCQSxRQUFoQixDQUFBO0VBQ0EsSUFBTXBDLElBQUFBLEtBQUssR0FBRy9GLElBQUksQ0FBQ3VHLEtBQUwsQ0FBVzRCLFFBQVEsQ0FBQ3RKLENBQVQsR0FBYXFKLFVBQVUsQ0FBQ3JKLENBQW5DLEVBQXNDc0osUUFBUSxDQUFDdkosQ0FBVCxHQUFhc0osVUFBVSxDQUFDdEosQ0FBOUQsQ0FBZCxDQUFBO0VBQ0EsSUFBTW9ILElBQUFBLElBQUksR0FBR0QsS0FBSyxHQUFHL0YsSUFBSSxDQUFDbUcsRUFBTCxHQUFVLENBQS9CLENBQUE7RUFDQSxJQUFLaUMsTUFBQUEsQ0FBQUEsS0FBTCxHQUFhLEVBQWIsQ0FBQTtFQUNBLElBQUEsTUFBQSxDQUFLQyxPQUFMLEdBQWVySSxJQUFJLENBQUM4RyxHQUFMLENBQVNkLElBQVQsQ0FBZixDQUFBO0VBQ0EsSUFBQSxNQUFBLENBQUtzQyxPQUFMLEdBQWV0SSxJQUFJLENBQUMrRyxHQUFMLENBQVNmLElBQVQsQ0FBZixDQUFBO0VBUmdDLElBQUEsT0FBQSxNQUFBLENBQUE7RUFTakMsR0FBQTs7RUFWSCxFQUFBLFlBQUEsQ0FBQSxXQUFBLEVBQUEsQ0FBQTtFQUFBLElBQUEsR0FBQSxFQUFBLE9BQUE7RUFBQSxJQUFBLEtBQUEsRUFZRSxTQUFNUCxLQUFBQSxDQUFBQSxLQUFOLEVBQWE3RixJQUFiLEVBQW1CO0VBQ2pCLE1BQU0ySSxJQUFBQSxNQUFNLEdBQUcsSUFBSTVKLEtBQUosQ0FDYjhHLEtBQUssQ0FBQzdHLENBQU4sR0FBVSxJQUFBLENBQUt3SixLQUFMLEdBQWEsS0FBS0MsT0FEZixFQUViNUMsS0FBSyxDQUFDNUcsQ0FBTixHQUFVLEtBQUt1SixLQUFMLEdBQWEsSUFBS0UsQ0FBQUEsT0FGZixDQUFmLENBQUE7RUFLQSxNQUFBLElBQU1FLFdBQVcsR0FBR3RELHNCQUFzQixDQUFDLElBQUtpRCxDQUFBQSxRQUFOLEVBQWdCLElBQUEsQ0FBS0QsVUFBckIsRUFBaUN0SSxJQUFJLENBQUNoQixDQUF0QyxDQUExQyxDQUFBO0VBQ0EsTUFBQSxJQUFNNkosYUFBYSxHQUFHekUsY0FBYyxDQUFDLElBQUtrRSxDQUFBQSxVQUFOLEVBQWtCLElBQUEsQ0FBS0MsUUFBdkIsRUFBaUMxQyxLQUFqQyxFQUF3QzhDLE1BQXhDLENBQXBDLENBQUE7RUFFQSxNQUFPOUQsT0FBQUEsV0FBVyxDQUFDLElBQUt5RCxDQUFBQSxVQUFOLEVBQWtCTSxXQUFsQixFQUErQkMsYUFBL0IsQ0FBbEIsQ0FBQTtFQUNELEtBQUE7RUF0QkgsR0FBQSxDQUFBLENBQUEsQ0FBQTs7RUFBQSxFQUFBLE9BQUEsV0FBQSxDQUFBO0VBQUEsQ0FBQSxDQUFpQ3pCLEtBQWpDLEVBQUE7QUF5QkEsTUFBYTBCLGFBQWIsZ0JBQUEsVUFBQSxPQUFBLEVBQUE7RUFBQSxFQUFBLFNBQUEsQ0FBQSxhQUFBLEVBQUEsT0FBQSxDQUFBLENBQUE7O0VBQUEsRUFBQSxJQUFBLE9BQUEsR0FBQSxZQUFBLENBQUEsYUFBQSxDQUFBLENBQUE7O0VBQ0UsRUFBWTdCLFNBQUFBLGFBQUFBLENBQUFBLE1BQVosRUFBb0JsRCxNQUFwQixFQUE0QjtFQUFBLElBQUEsSUFBQSxNQUFBLENBQUE7O0VBQUEsSUFBQSxlQUFBLENBQUEsSUFBQSxFQUFBLGFBQUEsQ0FBQSxDQUFBOztFQUMxQixJQUFBLE1BQUEsR0FBQSxPQUFBLENBQUEsSUFBQSxDQUFBLElBQUEsQ0FBQSxDQUFBO0VBQ0EsSUFBS2tELE1BQUFBLENBQUFBLE1BQUwsR0FBY0EsTUFBZCxDQUFBO0VBQ0EsSUFBS2xELE1BQUFBLENBQUFBLE1BQUwsR0FBY0EsTUFBZCxDQUFBO0VBSDBCLElBQUEsT0FBQSxNQUFBLENBQUE7RUFJM0IsR0FBQTs7RUFMSCxFQUFBLFlBQUEsQ0FBQSxhQUFBLEVBQUEsQ0FBQTtFQUFBLElBQUEsR0FBQSxFQUFBLE9BQUE7RUFBQSxJQUFBLEtBQUEsRUFPRSxTQUFNOEIsS0FBQUEsQ0FBQUEsS0FBTixFQUFhd0IsS0FBYixFQUFvQjtFQUNsQixNQUFPL0IsT0FBQUEsc0JBQXNCLENBQUMsSUFBSzJCLENBQUFBLE1BQU4sRUFBY3BCLEtBQWQsRUFBcUIsSUFBSzlCLENBQUFBLE1BQTFCLENBQTdCLENBQUE7RUFDRCxLQUFBO0VBVEgsR0FBQSxDQUFBLENBQUEsQ0FBQTs7RUFBQSxFQUFBLE9BQUEsYUFBQSxDQUFBO0VBQUEsQ0FBQSxDQUFtQ3FELEtBQW5DLEVBQUE7QUFZQSxNQUFhMkIsVUFBYixnQkFBQSxVQUFBLGNBQUEsRUFBQTtFQUFBLEVBQUEsU0FBQSxDQUFBLFVBQUEsRUFBQSxjQUFBLENBQUEsQ0FBQTs7RUFBQSxFQUFBLElBQUEsT0FBQSxHQUFBLFlBQUEsQ0FBQSxVQUFBLENBQUEsQ0FBQTs7RUFDRSxFQUFBLFNBQUEsVUFBQSxDQUFZOUIsTUFBWixFQUFvQmxELE1BQXBCLEVBQTRCaUYsVUFBNUIsRUFBd0NDLFFBQXhDLEVBQWtEO0VBQUEsSUFBQSxJQUFBLE1BQUEsQ0FBQTs7RUFBQSxJQUFBLGVBQUEsQ0FBQSxJQUFBLEVBQUEsVUFBQSxDQUFBLENBQUE7O0VBQ2hELElBQU1oQyxNQUFBQSxHQUFBQSxPQUFBQSxDQUFBQSxJQUFBQSxDQUFBQSxJQUFBQSxFQUFBQSxNQUFOLEVBQWNsRCxNQUFkLENBQUEsQ0FBQTtFQUNBLElBQUttRixNQUFBQSxDQUFBQSxXQUFMLEdBQW1CRixVQUFuQixDQUFBO0VBQ0EsSUFBS0csTUFBQUEsQ0FBQUEsU0FBTCxHQUFpQkYsUUFBakIsQ0FBQTtFQUhnRCxJQUFBLE9BQUEsTUFBQSxDQUFBO0VBSWpELEdBQUE7O0VBTEgsRUFBQSxZQUFBLENBQUEsVUFBQSxFQUFBLENBQUE7RUFBQSxJQUFBLEdBQUEsRUFBQSxZQUFBO0VBQUEsSUFBQSxLQUFBLEVBT0UsU0FBYSxVQUFBLEdBQUE7RUFDWCxNQUFPLE9BQUEsT0FBTyxJQUFLQyxDQUFBQSxXQUFaLEtBQTRCLFVBQTVCLEdBQXlDLElBQUEsQ0FBS0EsV0FBTCxFQUF6QyxHQUE4RCxJQUFBLENBQUtBLFdBQTFFLENBQUE7RUFDRCxLQUFBO0VBVEgsR0FBQSxFQUFBO0VBQUEsSUFBQSxHQUFBLEVBQUEsVUFBQTtFQUFBLElBQUEsS0FBQSxFQVdFLFNBQVcsUUFBQSxHQUFBO0VBQ1QsTUFBTyxPQUFBLE9BQU8sSUFBS0MsQ0FBQUEsU0FBWixLQUEwQixVQUExQixHQUF1QyxJQUFBLENBQUtBLFNBQUwsRUFBdkMsR0FBMEQsSUFBQSxDQUFLQSxTQUF0RSxDQUFBO0VBQ0QsS0FBQTtFQWJILEdBQUEsRUFBQTtFQUFBLElBQUEsR0FBQSxFQUFBLE9BQUE7RUFBQSxJQUFBLEtBQUEsRUFlRSxTQUFNdEQsS0FBQUEsQ0FBQUEsS0FBTixFQUFhd0IsS0FBYixFQUFvQjtFQUNsQixNQUFJTCxJQUFBQSxLQUFLLEdBQUdSLFFBQVEsQ0FBQyxLQUFLUyxNQUFOLEVBQWNwQixLQUFkLENBQXBCLENBQUE7RUFDQW1CLE1BQUFBLEtBQUssR0FBR04sY0FBYyxDQUFDTSxLQUFELENBQXRCLENBQUE7RUFDQUEsTUFBQUEsS0FBSyxHQUFHSixVQUFVLENBQUMsSUFBS29DLENBQUFBLFVBQUwsRUFBRCxFQUFvQixJQUFLQyxDQUFBQSxRQUFMLEVBQXBCLEVBQXFDakMsS0FBckMsQ0FBbEIsQ0FBQTtFQUNBLE1BQU9ELE9BQUFBLHdCQUF3QixDQUFDQyxLQUFELEVBQVEsS0FBS2pELE1BQWIsRUFBcUIsSUFBS2tELENBQUFBLE1BQTFCLENBQS9CLENBQUE7RUFDRCxLQUFBO0VBcEJILEdBQUEsQ0FBQSxDQUFBLENBQUE7O0VBQUEsRUFBQSxPQUFBLFVBQUEsQ0FBQTtFQUFBLENBQUEsQ0FBZ0M2QixhQUFoQzs7RUN0SmUsbUJBQVNNLEVBQUFBLEtBQVQsRUFBZ0J0RixHQUFoQixFQUFxQjtFQUNsQyxFQUFBLEtBQUssSUFBSUcsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR21GLEtBQUssQ0FBQ2pGLE1BQTFCLEVBQWtDRixDQUFDLEVBQW5DLEVBQXVDO0VBQ3JDLElBQUEsSUFBSW1GLEtBQUssQ0FBQ25GLENBQUQsQ0FBTCxLQUFhSCxHQUFqQixFQUFzQjtFQUNwQnNGLE1BQUFBLEtBQUssQ0FBQ3BHLE1BQU4sQ0FBYWlCLENBQWIsRUFBZ0IsQ0FBaEIsQ0FBQSxDQUFBO0VBQ0FBLE1BQUFBLENBQUMsRUFBQSxDQUFBO0VBQ0YsS0FBQTtFQUNGLEdBQUE7O0VBQ0QsRUFBQSxPQUFPbUYsS0FBUCxDQUFBO0VBQ0Q7O0VDUmMsU0FBU0MsS0FBVCxDQUFlQyxLQUFmLEVBQXNCQyxJQUF0QixFQUE0QkMsSUFBNUIsRUFBa0M7RUFDL0MsRUFBTXpELElBQUFBLE1BQU0sR0FBRyxFQUFmLENBQUE7O0VBQ0EsRUFBQSxJQUFJLE9BQU93RCxJQUFQLEtBQWdCLFdBQXBCLEVBQWlDO0VBQy9CQSxJQUFBQSxJQUFJLEdBQUdELEtBQVAsQ0FBQTtFQUNBQSxJQUFBQSxLQUFLLEdBQUcsQ0FBUixDQUFBO0VBQ0QsR0FBQTs7RUFDRCxFQUFBLElBQUksT0FBT0UsSUFBUCxLQUFnQixXQUFwQixFQUFpQztFQUMvQkEsSUFBQUEsSUFBSSxHQUFHLENBQVAsQ0FBQTtFQUNELEdBQUE7O0VBQ0QsRUFBQSxJQUFLQSxJQUFJLEdBQUcsQ0FBUCxJQUFZRixLQUFLLElBQUlDLElBQXRCLElBQWdDQyxJQUFJLEdBQUcsQ0FBUCxJQUFZRixLQUFLLElBQUlDLElBQXpELEVBQWdFO0VBQzlELElBQUEsT0FBTyxFQUFQLENBQUE7RUFDRCxHQUFBOztFQUNELEVBQUssS0FBQSxJQUFJdEYsQ0FBQyxHQUFHcUYsS0FBYixFQUFvQkUsSUFBSSxHQUFHLENBQVAsR0FBV3ZGLENBQUMsR0FBR3NGLElBQWYsR0FBc0J0RixDQUFDLEdBQUdzRixJQUE5QyxFQUFvRHRGLENBQUMsSUFBSXVGLElBQXpELEVBQStEO0VBQzdEekQsSUFBQUEsTUFBTSxDQUFDbkQsSUFBUCxDQUFZcUIsQ0FBWixDQUFBLENBQUE7RUFDRCxHQUFBOztFQUNELEVBQUEsT0FBTzhCLE1BQVAsQ0FBQTtFQUNEOztNQ1JLMEQ7RUFDSixFQUFBLFNBQUEsYUFBQSxDQUFZakosU0FBWixFQUFtQztFQUFBLElBQVp1QixJQUFBQSxPQUFZLHVFQUFKLEVBQUksQ0FBQTs7RUFBQSxJQUFBLGVBQUEsQ0FBQSxJQUFBLEVBQUEsYUFBQSxDQUFBLENBQUE7O0VBQ2pDLElBQUt2QixJQUFBQSxDQUFBQSxTQUFMLEdBQWlCQSxTQUFqQixDQUFBO0VBQ0EsSUFBS3VCLElBQUFBLENBQUFBLE9BQUwsR0FBZUEsT0FBZixDQUFBO0VBQ0QsR0FBQTs7OztXQUVELFNBQWlCLEdBQUEsR0FBQTtFQUNmLE1BQU8sT0FBQSxPQUFPLElBQUt2QixDQUFBQSxTQUFaLEtBQTBCLFVBQTFCLEdBQXVDLElBQUEsQ0FBS0EsU0FBTCxFQUF2QyxHQUEwRCxJQUFBLENBQUtBLFNBQXRFLENBQUE7RUFDRCxLQUFBOzs7Ozs7TUFHR2tKOzs7Ozs7Ozs7Ozs7O2FBQ0osU0FBYUMsV0FBQUEsQ0FBQUEsYUFBYixFQUE0QkMsYUFBNUIsRUFBMkM7RUFBQSxNQUFBLElBQUEsS0FBQSxHQUFBLElBQUEsQ0FBQTs7RUFDekMsTUFBQSxJQUFNQyxzQkFBc0IsR0FBR0YsYUFBYSxDQUFDbEwsTUFBZCxDQUFxQixVQUFDcUwsT0FBRCxFQUFVQyxLQUFWLEVBQWlCakgsS0FBakIsRUFBMkI7RUFDN0UsUUFBSThHLElBQUFBLGFBQWEsQ0FBQzdHLE9BQWQsQ0FBc0JELEtBQXRCLENBQWlDLEtBQUEsQ0FBQyxDQUF0QyxFQUF5QztFQUN2Q2dILFVBQUFBLE9BQU8sQ0FBQ2xILElBQVIsQ0FBYUUsS0FBYixDQUFBLENBQUE7RUFDRCxTQUFBOztFQUNELFFBQUEsT0FBT2dILE9BQVAsQ0FBQTtFQUNELE9BTDhCLEVBSzVCLEVBTDRCLENBQS9CLENBQUE7RUFPQUYsTUFBQUEsYUFBYSxDQUFDSSxPQUFkLENBQXNCLFVBQUNsSCxLQUFELEVBQVc7RUFDL0IsUUFBQSxJQUFJM0MsSUFBSSxHQUFHd0osYUFBYSxDQUFDN0csS0FBRCxDQUF4QixDQUFBO0VBQ0EsUUFBSW1ILElBQUFBLFNBQVMsR0FBRyxLQUFoQixDQUFBO0VBRUFKLFFBQUFBLHNCQUFzQixDQUFDRyxPQUF2QixDQUErQixVQUFDRSxhQUFELEVBQW1CO0VBQ2hELFVBQUEsSUFBTUMsVUFBVSxHQUFHUixhQUFhLENBQUNPLGFBQUQsQ0FBaEMsQ0FBQTtFQUNBL0osVUFBQUEsSUFBSSxHQUFHZ0ssVUFBVSxDQUFDQyxXQUFYLENBQXVCakssSUFBdkIsQ0FBUCxDQUFBO0VBQ0QsU0FIRCxDQUFBLENBQUE7RUFLQThKLFFBQUFBLFNBQVMsR0FBR0osc0JBQXNCLENBQUNRLElBQXZCLENBQTRCLFVBQUNILGFBQUQsRUFBbUI7RUFDekQsVUFBQSxJQUFNQyxVQUFVLEdBQUdSLGFBQWEsQ0FBQ08sYUFBRCxDQUFoQyxDQUFBO0VBQ0EsVUFBQSxPQUFRLENBQUMsQ0FBQ0MsVUFBVSxDQUFDckosR0FBWCxDQUFlWCxJQUFmLENBQVYsQ0FBQTtFQUNELFNBSFcsQ0FHTkEsSUFBQUEsSUFBSSxDQUFDVyxHQUFMLENBQVMsS0FBSSxDQUFDd0osU0FBZCxDQUFBLENBQXlCQyxTQUF6QixFQUFBLEtBQXlDcEssSUFBSSxDQUFDb0ssU0FBTCxFQUgvQyxDQUFBOztFQUtBLFFBQUEsSUFBSU4sU0FBSixFQUFlO0VBQ2I5SixVQUFBQSxJQUFJLENBQUM4SixTQUFMLEdBQWlCLElBQWpCLENBQUE7RUFDRCxTQUZELE1BRU87RUFDTEosVUFBQUEsc0JBQXNCLENBQUNqSCxJQUF2QixDQUE0QkUsS0FBNUIsQ0FBQSxDQUFBO0VBQ0QsU0FBQTtFQUNGLE9BbkJELENBQUEsQ0FBQTtFQW9CQSxNQUFBLE9BQU82RyxhQUFQLENBQUE7RUFDRCxLQUFBOzs7RUFFRCxJQUFBLEtBQUEsRUFBQSxTQUFBLE9BQUEsQ0FBUWEsaUJBQVIsRUFBMkJDLGFBQTNCLEVBQTBDQyxXQUExQyxFQUF1RDtFQUNyRCxNQUFBLElBQU1DLFVBQVUsR0FBR0gsaUJBQWlCLENBQUNJLE1BQWxCLENBQXlCSCxhQUF6QixDQUFuQixDQUFBO0VBQ0FBLE1BQUFBLGFBQWEsQ0FBQ1QsT0FBZCxDQUFzQixVQUFDYSxTQUFELEVBQWU7RUFDbkNILFFBQUFBLFdBQVcsQ0FBQzlILElBQVosQ0FBaUIrSCxVQUFVLENBQUM1SCxPQUFYLENBQW1COEgsU0FBbkIsQ0FBakIsQ0FBQSxDQUFBO0VBQ0QsT0FGRCxDQUFBLENBQUE7RUFHQSxNQUFBLE9BQU9GLFVBQVAsQ0FBQTtFQUNELEtBQUE7Ozs7SUF0QytCbEI7O01BeUM1QnFCOzs7OztFQUNKLEVBQUEsU0FBQSxpQkFBQSxDQUFZdEssU0FBWixFQUFtQztFQUFBLElBQUEsSUFBQSxNQUFBLENBQUE7O0VBQUEsSUFBWnVCLElBQUFBLE9BQVksdUVBQUosRUFBSSxDQUFBOztFQUFBLElBQUEsZUFBQSxDQUFBLElBQUEsRUFBQSxpQkFBQSxDQUFBLENBQUE7O0VBQ2pDLElBQU12QixNQUFBQSxHQUFBQSxPQUFBQSxDQUFBQSxJQUFBQSxDQUFBQSxJQUFBQSxFQUFBQSxTQUFOLEVBQWlCdUIsT0FBakIsQ0FBQSxDQUFBO0VBQ0EsSUFBQSxNQUFBLENBQUtBLE9BQUwsR0FBZUcsTUFBTSxDQUFDNkksTUFBUCxDQUFjO0VBQzNCZCxNQUFBQSxTQUFTLEVBQUUsSUFBQTtFQURnQixLQUFkLEVBRVpsSSxPQUZZLENBQWYsQ0FBQTtFQUlBLElBQUEsTUFBQSxDQUFLZ0MsTUFBTCxHQUFjaEMsT0FBTyxDQUFDZ0MsTUFBUixJQUFrQixFQUFoQyxDQUFBO0VBRUEsSUFBQSxNQUFBLENBQUtpSCxjQUFMLEdBQXNCakosT0FBTyxDQUFDaUosY0FBUixJQUEwQixJQUFJak0sS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLENBQWhELENBQUE7RUFDQSxJQUFBLE1BQUEsQ0FBS2tNLGtCQUFMLEdBQTBCbEosT0FBTyxDQUFDa0osa0JBQVIsSUFBOEIsSUFBSWxNLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixDQUF4RCxDQUFBO0VBQ0EsSUFBQSxNQUFBLENBQUttTSxxQkFBTCxHQUE2Qm5KLE9BQU8sQ0FBQ21KLHFCQUFSLElBQWlDLENBQTlELENBQUE7RUFFQSxJQUFBLE1BQUEsQ0FBS2pJLFdBQUwsR0FBbUJsQixPQUFPLENBQUNrQixXQUFSLElBQXVCQSxXQUExQyxDQUFBOztFQUNBLElBQUEsTUFBQSxDQUFLa0ksV0FBTCxHQUFtQnBKLE9BQU8sQ0FBQ29KLFdBQVIsSUFBd0IsVUFBQ04sU0FBRCxFQUFBO0VBQUEsTUFBZUEsT0FBQUEsU0FBUyxDQUFDOUssUUFBekIsQ0FBQTtFQUFBLEtBQTNDLENBQUE7O0VBYmlDLElBQUEsT0FBQSxNQUFBLENBQUE7RUFjbEMsR0FBQTs7OzthQUVELFNBQVk0SixXQUFBQSxDQUFBQSxhQUFaLEVBQTJCeUIsY0FBM0IsRUFBMkM7RUFBQSxNQUFBLElBQUEsTUFBQSxHQUFBLElBQUEsQ0FBQTs7RUFDekMsTUFBTWQsSUFBQUEsU0FBUyxHQUFHLElBQUEsQ0FBS0EsU0FBdkIsQ0FBQTtFQUNBLE1BQUEsSUFBTTFDLE1BQU0sR0FBRzBDLFNBQVMsQ0FBQ2UsS0FBVixFQUFmLENBQUE7RUFDQSxNQUFBLElBQUlDLGNBQWMsR0FBRyxDQUFDaEIsU0FBUyxDQUFDdkssUUFBWCxDQUFyQixDQUFBO0VBRUE0SixNQUFBQSxhQUFhLENBQUNLLE9BQWQsQ0FBc0IsVUFBQzdKLElBQUQsRUFBT29MLFNBQVAsRUFBcUI7RUFDekMsUUFBQSxJQUFJeEwsUUFBSjtFQUFBLFlBQWN5TCxPQUFPLEdBQUcsS0FBeEIsQ0FBQTs7RUFDQSxRQUFBLEtBQUssSUFBSXZILENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdxSCxjQUFjLENBQUNuSCxNQUFuQyxFQUEyQ0YsQ0FBQyxFQUE1QyxFQUFnRDtFQUM5Q2xFLFVBQUFBLFFBQVEsR0FBRyxJQUFJaEIsS0FBSixDQUNUdU0sY0FBYyxDQUFDckgsQ0FBRCxDQUFkLENBQWtCakYsQ0FBbEIsR0FBc0IsTUFBSSxDQUFDZ00sY0FBTCxDQUFvQmhNLENBRGpDLEVBRVRpRixDQUFDLEdBQUcsQ0FBSixHQUFTcUgsY0FBYyxDQUFDckgsQ0FBQyxHQUFHLENBQUwsQ0FBZCxDQUFzQmhGLENBQXRCLEdBQTBCLE1BQUksQ0FBQ2lNLHFCQUF4QyxHQUFrRVosU0FBUyxDQUFDdkssUUFBVixDQUFtQmQsQ0FBbkIsR0FBdUIsTUFBSSxDQUFDK0wsY0FBTCxDQUFvQi9MLENBRnBHLENBQVgsQ0FBQTtFQUtBdU0sVUFBQUEsT0FBTyxHQUFJekwsUUFBUSxDQUFDZixDQUFULEdBQWFtQixJQUFJLENBQUNILElBQUwsQ0FBVWhCLENBQXZCLEdBQTJCNEksTUFBTSxDQUFDNUksQ0FBN0MsQ0FBQTs7RUFFQSxVQUFBLElBQUl3TSxPQUFKLEVBQWE7RUFDWCxZQUFBLE1BQUE7RUFDRCxXQUFBO0VBQ0YsU0FBQTs7RUFFRCxRQUFJLElBQUEsQ0FBQ0EsT0FBTCxFQUFjO0VBQ1p6TCxVQUFBQSxRQUFRLEdBQUcsSUFBSWhCLEtBQUosQ0FDVHVMLFNBQVMsQ0FBQ3ZLLFFBQVYsQ0FBbUJmLENBQW5CLEdBQXVCLE1BQUksQ0FBQ2dNLGNBQUwsQ0FBb0JoTSxDQURsQyxFQUVUc00sY0FBYyxDQUFDQSxjQUFjLENBQUNuSCxNQUFmLEdBQXdCLENBQXpCLENBQWQsQ0FBMENsRixDQUExQyxJQUErQ3NNLFNBQVMsR0FBRyxDQUFaLEdBQWdCLE1BQUksQ0FBQ0wscUJBQXJCLEdBQTZDLE1BQUksQ0FBQ0YsY0FBTCxDQUFvQi9MLENBQWhILENBRlMsQ0FBWCxDQUFBO0VBSUQsU0FBQTs7RUFFRGtCLFFBQUFBLElBQUksQ0FBQ0osUUFBTCxHQUFnQkEsUUFBaEIsQ0FBQTs7RUFDQSxRQUFBLElBQUksTUFBSSxDQUFDZ0MsT0FBTCxDQUFha0ksU0FBYixJQUEwQjlKLElBQUksQ0FBQ08sS0FBTCxFQUFBLENBQWF6QixDQUFiLEdBQWlCcUwsU0FBUyxDQUFDNUosS0FBVixFQUFBLENBQWtCekIsQ0FBakUsRUFBb0U7RUFDbEVrQixVQUFBQSxJQUFJLENBQUM4SixTQUFMLEdBQWlCLElBQWpCLENBQUE7RUFDRCxTQUFBOztFQUVEcUIsUUFBQUEsY0FBYyxHQUFHM0YscUJBQXFCLENBQUMyRixjQUFELEVBQWlCbkwsSUFBSSxDQUFDTyxLQUFMLEVBQUEsQ0FBYVQsR0FBYixDQUFpQixNQUFJLENBQUNnTCxrQkFBdEIsQ0FBakIsQ0FBdEMsQ0FBQTtFQUNELE9BNUJELENBQUEsQ0FBQTtFQTZCQSxNQUFBLE9BQU90QixhQUFQLENBQUE7RUFDRCxLQUFBOzs7RUFFRCxJQUFBLEtBQUEsRUFBQSxTQUFBLE9BQUEsQ0FBUWEsaUJBQVIsRUFBMkJDLGFBQTNCLEVBQTBDQyxXQUExQyxFQUF1RDtFQUFBLE1BQUEsSUFBQSxNQUFBLEdBQUEsSUFBQSxDQUFBOztFQUNyRCxNQUFBLElBQU1lLE9BQU8sR0FBR2pCLGlCQUFpQixDQUFDSSxNQUFsQixFQUFoQixDQUFBO0VBQ0EsTUFBQSxJQUFNYyxlQUFlLEdBQUdsQixpQkFBaUIsQ0FBQ21CLEdBQWxCLENBQXNCLFVBQUNkLFNBQUQsRUFBQTtFQUFBLFFBQWVBLE9BQUFBLFNBQVMsQ0FBQ00sV0FBVixFQUFmLENBQUE7RUFBQSxPQUF0QixDQUF4QixDQUFBO0VBQ0FWLE1BQUFBLGFBQWEsQ0FBQ1QsT0FBZCxDQUFzQixVQUFDNEIsWUFBRCxFQUFrQjtFQUN0QyxRQUFJOUksSUFBQUEsS0FBSyxHQUFHYyxtQkFBbUIsQ0FBQzhILGVBQUQsRUFBa0IsTUFBSSxDQUFDUCxXQUFMLENBQWlCUyxZQUFqQixDQUFsQixFQUFrRCxNQUFJLENBQUM3SCxNQUF2RCxFQUErRCxNQUFJLENBQUNkLFdBQXBFLENBQS9CLENBQUE7O0VBQ0EsUUFBQSxJQUFJSCxLQUFLLEtBQUssQ0FBQyxDQUFmLEVBQWtCO0VBQ2hCQSxVQUFBQSxLQUFLLEdBQUcySSxPQUFPLENBQUN0SCxNQUFoQixDQUFBO0VBQ0QsU0FGRCxNQUVPO0VBQ0xyQixVQUFBQSxLQUFLLEdBQUcySSxPQUFPLENBQUMxSSxPQUFSLENBQWdCeUgsaUJBQWlCLENBQUMxSCxLQUFELENBQWpDLENBQVIsQ0FBQTtFQUNELFNBQUE7O0VBQ0QySSxRQUFBQSxPQUFPLENBQUN6SSxNQUFSLENBQWVGLEtBQWYsRUFBc0IsQ0FBdEIsRUFBeUI4SSxZQUF6QixDQUFBLENBQUE7RUFDRCxPQVJELENBQUEsQ0FBQTtFQVNBbkIsTUFBQUEsYUFBYSxDQUFDVCxPQUFkLENBQXNCLFVBQUM0QixZQUFELEVBQWtCO0VBQ3RDbEIsUUFBQUEsV0FBVyxDQUFDOUgsSUFBWixDQUFpQjZJLE9BQU8sQ0FBQzFJLE9BQVIsQ0FBZ0I2SSxZQUFoQixDQUFqQixDQUFBLENBQUE7RUFDRCxPQUZELENBQUEsQ0FBQTtFQUdBLE1BQUEsT0FBT0gsT0FBUCxDQUFBO0VBQ0QsS0FBQTs7OztJQXRFNkJoQzs7TUF5RTFCb0M7Ozs7O0VBQ0osRUFBQSxTQUFBLGtCQUFBLENBQVlyTCxTQUFaLEVBQW1DO0VBQUEsSUFBQSxJQUFBLE1BQUEsQ0FBQTs7RUFBQSxJQUFadUIsSUFBQUEsT0FBWSx1RUFBSixFQUFJLENBQUE7O0VBQUEsSUFBQSxlQUFBLENBQUEsSUFBQSxFQUFBLGtCQUFBLENBQUEsQ0FBQTs7RUFDakMsSUFBTXZCLE1BQUFBLEdBQUFBLE9BQUFBLENBQUFBLElBQUFBLENBQUFBLElBQUFBLEVBQUFBLFNBQU4sRUFBaUJ1QixPQUFqQixDQUFBLENBQUE7RUFFQSxJQUFBLE1BQUEsQ0FBSytKLGVBQUwsR0FBdUIvSixPQUFPLENBQUMrSixlQUFSLElBQTJCLElBQUkvTSxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsQ0FBbEQsQ0FBQTtFQUNBLElBQUEsTUFBQSxDQUFLZ04saUJBQUwsR0FBeUJoSyxPQUFPLENBQUNnSyxpQkFBUixJQUE2QixJQUFJaE4sS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLENBQXRELENBQUE7RUFDQSxJQUFBLE1BQUEsQ0FBS21NLHFCQUFMLEdBQTZCbkosT0FBTyxDQUFDbUoscUJBQVIsSUFBaUMsQ0FBOUQsQ0FBQTtFQUVBLElBQUEsTUFBQSxDQUFLYyxvQkFBTCxHQUE0QixJQUFJak4sS0FBSixDQUFVLENBQUMsTUFBQSxDQUFLZ04saUJBQUwsQ0FBdUIvTSxDQUFsQyxFQUFxQyxNQUFBLENBQUsrTSxpQkFBTCxDQUF1QjlNLENBQTVELENBQTVCLENBQUE7RUFQaUMsSUFBQSxPQUFBLE1BQUEsQ0FBQTtFQVFsQyxHQUFBOzs7O2FBRUQsU0FBWTBLLFdBQUFBLENBQUFBLGFBQVosRUFBMkJ5QixjQUEzQixFQUEyQztFQUFBLE1BQUEsSUFBQSxNQUFBLEdBQUEsSUFBQSxDQUFBOztFQUN6QyxNQUFNZCxJQUFBQSxTQUFTLEdBQUcsSUFBQSxDQUFLQSxTQUF2QixDQUFBO0VBQ0EsTUFBQSxJQUFJZ0IsY0FBYyxHQUFHLENBQUNoQixTQUFTLENBQUNlLEtBQVYsRUFBRCxDQUFyQixDQUFBO0VBRUExQixNQUFBQSxhQUFhLENBQUNLLE9BQWQsQ0FBc0IsVUFBQzdKLElBQUQsRUFBT29MLFNBQVAsRUFBcUI7RUFDekMsUUFBQSxJQUFJeEwsUUFBSjtFQUFBLFlBQWN5TCxPQUFPLEdBQUcsS0FBeEIsQ0FBQTs7RUFDQSxRQUFBLEtBQUssSUFBSXZILENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdxSCxjQUFjLENBQUNuSCxNQUFuQyxFQUEyQ0YsQ0FBQyxFQUE1QyxFQUFnRDtFQUM5Q2xFLFVBQUFBLFFBQVEsR0FBRyxJQUFJaEIsS0FBSixDQUNUdU0sY0FBYyxDQUFDckgsQ0FBRCxDQUFkLENBQWtCakYsQ0FBbEIsR0FBc0JtQixJQUFJLENBQUNILElBQUwsQ0FBVWhCLENBQWhDLEdBQW9DLE1BQUksQ0FBQzhNLGVBQUwsQ0FBcUI5TSxDQURoRCxFQUVUaUYsQ0FBQyxHQUFHLENBQUosR0FBU3FILGNBQWMsQ0FBQ3JILENBQUMsR0FBRyxDQUFMLENBQWQsQ0FBc0JoRixDQUF0QixHQUEwQixNQUFJLENBQUNpTSxxQkFBeEMsR0FBa0VaLFNBQVMsQ0FBQ3ZLLFFBQVYsQ0FBbUJkLENBQW5CLEdBQXVCLE1BQUksQ0FBQzZNLGVBQUwsQ0FBcUI3TSxDQUZyRyxDQUFYLENBQUE7RUFLQXVNLFVBQUFBLE9BQU8sR0FBSXpMLFFBQVEsQ0FBQ2YsQ0FBVCxHQUFhbUIsSUFBSSxDQUFDSixRQUFMLENBQWNmLENBQXRDLENBQUE7O0VBQ0EsVUFBQSxJQUFJd00sT0FBSixFQUFhO0VBQ1gsWUFBQSxNQUFBO0VBQ0QsV0FBQTtFQUNGLFNBQUE7O0VBQ0QsUUFBSSxJQUFBLENBQUNBLE9BQUwsRUFBYztFQUNaekwsVUFBQUEsUUFBUSxHQUFHLElBQUloQixLQUFKLENBQ1R1TCxTQUFTLENBQUNlLEtBQVYsRUFBQSxDQUFrQnJNLENBQWxCLEdBQXVCbUIsSUFBSSxDQUFDSCxJQUFMLENBQVVoQixDQUFqQyxHQUFxQyxNQUFJLENBQUM4TSxlQUFMLENBQXFCOU0sQ0FEakQsRUFFVHNNLGNBQWMsQ0FBQ0EsY0FBYyxDQUFDbkgsTUFBZixHQUF3QixDQUF6QixDQUFkLENBQTBDbEYsQ0FBMUMsSUFBK0NzTSxTQUFTLEdBQUcsQ0FBWixHQUFnQixNQUFJLENBQUNMLHFCQUFyQixHQUE2QyxNQUFJLENBQUNZLGVBQUwsQ0FBcUI3TSxDQUFqSCxDQUZTLENBQVgsQ0FBQTtFQUlELFNBQUE7O0VBQ0RrQixRQUFBQSxJQUFJLENBQUNKLFFBQUwsR0FBZ0JBLFFBQWhCLENBQUE7O0VBQ0EsUUFBQSxJQUFJLE1BQUksQ0FBQ2dDLE9BQUwsQ0FBYWtJLFNBQWIsSUFBMEI5SixJQUFJLENBQUM4TCxLQUFMLEVBQUEsQ0FBYWhOLENBQWIsR0FBaUJxTCxTQUFTLENBQUMyQixLQUFWLEVBQUEsQ0FBa0JoTixDQUFqRSxFQUFvRTtFQUNsRWtCLFVBQUFBLElBQUksQ0FBQzhKLFNBQUwsR0FBaUIsSUFBakIsQ0FBQTtFQUNELFNBQUE7O0VBQ0RxQixRQUFBQSxjQUFjLEdBQUczRixxQkFBcUIsQ0FBQzJGLGNBQUQsRUFBaUJuTCxJQUFJLENBQUM4TCxLQUFMLEVBQWFoTSxDQUFBQSxHQUFiLENBQWlCLE1BQUksQ0FBQytMLG9CQUF0QixDQUFqQixFQUE4RCxJQUE5RCxDQUF0QyxDQUFBO0VBQ0QsT0F4QkQsQ0FBQSxDQUFBO0VBeUJBLE1BQUEsT0FBT3JDLGFBQVAsQ0FBQTtFQUNELEtBQUE7Ozs7SUF6QzhCbUI7O0VDMUhqQyxJQUFNb0IsbUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFTQyxNQUFULEVBQWlCO0VBQ3pDQyxFQUFBQSxZQUFZLENBQUNDLFNBQWIsQ0FBdUJGLE1BQXZCLENBQUEsQ0FBQTtFQUNELENBRkQsQ0FBQTs7TUFJcUJHOzs7OztFQUNuQixFQUFZL04sU0FBQUEsTUFBQUEsQ0FBQUEsT0FBWixFQUFxQm9NLFVBQXJCLEVBQStDO0VBQUEsSUFBQSxJQUFBLEtBQUEsQ0FBQTs7RUFBQSxJQUFkNUksSUFBQUEsT0FBYyx1RUFBSixFQUFJLENBQUE7O0VBQUEsSUFBQSxlQUFBLENBQUEsSUFBQSxFQUFBLE1BQUEsQ0FBQSxDQUFBOztFQUM3QyxJQUFBLEtBQUEsR0FBQSxNQUFBLENBQUEsSUFBQSxDQUFBLElBQUEsRUFBTUEsT0FBTixDQUFBLENBQUE7O0VBQ0EsSUFBQSxJQUFNb0ssTUFBTSxHQUFaLHNCQUFBLENBQUEsS0FBQSxDQUFBLENBQUE7O0VBRUEsSUFBQSxLQUFBLENBQUtwSyxPQUFMLEdBQWVHLE1BQU0sQ0FBQzZJLE1BQVAsQ0FBYztFQUMzQndCLE1BQUFBLE9BQU8sRUFBRSxHQURrQjtFQUUzQkMsTUFBQUEsV0FBVyxFQUFFLEdBQUE7RUFGYyxLQUFkLEVBR1p6SyxPQUhZLENBQWYsQ0FBQTtFQUtBLElBQUEsS0FBQSxDQUFLMEssbUJBQUwsR0FBMkIxSyxPQUFPLENBQUMySyxRQUFSLElBQW9CLElBQUk1QixpQkFBSixDQUM3QyxLQUFLNkIsQ0FBQUEsWUFBTCxDQUFrQm5GLElBQWxCLCtCQUQ2QyxFQUU3QztFQUNFekQsTUFBQUEsTUFBTSxFQUFFLEVBRFY7RUFFRWQsTUFBQUEsV0FBVyxFQUFFUywrQkFBK0IsQ0FBQztFQUFFMUUsUUFBQUEsQ0FBQyxFQUFFLENBQUw7RUFBUUMsUUFBQUEsQ0FBQyxFQUFFLENBQUE7RUFBWCxPQUFELENBRjlDO0VBR0VnTCxNQUFBQSxTQUFTLEVBQUUsSUFBQTtFQUhiLEtBRjZDLENBQS9DLENBQUE7RUFTQSxJQUFLMUwsS0FBQUEsQ0FBQUEsT0FBTCxHQUFlQSxPQUFmLENBQUE7RUFDQW9NLElBQUFBLFVBQVUsQ0FBQ1gsT0FBWCxDQUFtQixVQUFDYSxTQUFELEVBQUE7RUFBQSxNQUFBLE9BQWVBLFNBQVMsQ0FBQytCLE9BQVYsQ0FBa0JoSyxJQUFsQixDQUF1QnVKLE1BQXZCLENBQWYsQ0FBQTtFQUFBLEtBQW5CLENBQUEsQ0FBQTtFQUNBLElBQUt4QixLQUFBQSxDQUFBQSxVQUFMLEdBQWtCQSxVQUFsQixDQUFBO0VBRUEyQixJQUFBQSxNQUFNLENBQUNPLE9BQVAsQ0FBZUMsSUFBZixDQUFvQixlQUFwQixFQUFBLHNCQUFBLENBQUEsS0FBQSxDQUFBLENBQUEsQ0FBQTs7RUFFQSxJQUFBLEtBQUEsQ0FBS0MsYUFBTCxFQUFBLENBQUE7O0VBQ0EsSUFBQSxLQUFBLENBQUtDLElBQUwsRUFBQSxDQUFBOztFQXpCNkMsSUFBQSxPQUFBLEtBQUEsQ0FBQTtFQTBCOUMsR0FBQTs7OzthQUVELFNBQWdCLGFBQUEsR0FBQTtFQUNkLE1BQUEsSUFBQSxDQUFLekYsS0FBTCxHQUFhLElBQUt4RixDQUFBQSxPQUFMLENBQWF3RixLQUFiLElBQXNCTSxjQUFjLENBQUNvRixRQUFmLENBQXdCLElBQUEsQ0FBSzFPLE9BQTdCLENBQW5DLENBQUE7RUFDRCxLQUFBOzs7YUFFRCxTQUFhb00sV0FBQUEsQ0FBQUEsVUFBYixFQUF5QnVDLFlBQXpCLEVBQXVDO0VBQ3JDLE1BQU8sT0FBQSxJQUFBLENBQUtULG1CQUFMLENBQXlCVSxXQUF6QixDQUFxQ3hDLFVBQXJDLEVBQWlEdUMsWUFBakQsQ0FBUCxDQUFBO0VBQ0QsS0FBQTs7O0VBRUQsSUFBQSxLQUFBLEVBQUEsU0FBQSxPQUFBLENBQVNFLGFBQVQsRUFBd0IzQyxhQUF4QixFQUF1Q0MsV0FBdkMsRUFBb0Q7RUFDbEQsTUFBTyxPQUFBLElBQUEsQ0FBSytCLG1CQUFMLENBQXlCWSxPQUF6QixDQUFpQ0QsYUFBakMsRUFBZ0QzQyxhQUFoRCxFQUErREMsV0FBL0QsQ0FBUCxDQUFBO0VBQ0QsS0FBQTs7O2FBRUQsU0FBTyxJQUFBLEdBQUE7RUFBQSxNQUFBLElBQUEsTUFBQSxHQUFBLElBQUEsQ0FBQTs7RUFDTCxNQUFJNEMsSUFBQUEsVUFBSixFQUFnQkosWUFBaEIsQ0FBQTtFQUVBLE1BQUtLLElBQUFBLENBQUFBLGVBQUwsR0FBdUIsSUFBSzVDLENBQUFBLFVBQUwsQ0FBZ0IzRSxNQUFoQixDQUF1QixVQUFDNkUsU0FBRCxFQUFlO0VBQzNELFFBQUEsSUFBSXRNLE9BQU8sR0FBR3NNLFNBQVMsQ0FBQ3RNLE9BQVYsQ0FBa0JjLFVBQWhDLENBQUE7O0VBQ0EsUUFBQSxPQUFPZCxPQUFQLEVBQWdCO0VBQ2QsVUFBQSxJQUFJQSxPQUFPLEtBQUssTUFBSSxDQUFDQSxPQUFyQixFQUE4QjtFQUM1QixZQUFBLE9BQU8sSUFBUCxDQUFBO0VBQ0QsV0FBQTs7RUFDREEsVUFBQUEsT0FBTyxHQUFHQSxPQUFPLENBQUNjLFVBQWxCLENBQUE7RUFDRCxTQUFBOztFQUNELFFBQUEsT0FBTyxLQUFQLENBQUE7RUFDRCxPQVRzQixDQUF2QixDQUFBOztFQVdBLE1BQUEsSUFBSSxJQUFLa08sQ0FBQUEsZUFBTCxDQUFxQnBKLE1BQXpCLEVBQWlDO0VBQy9CK0ksUUFBQUEsWUFBWSxHQUFHN0QsS0FBSyxDQUFDLEtBQUtrRSxlQUFMLENBQXFCcEosTUFBdEIsQ0FBcEIsQ0FBQTtFQUNBbUosUUFBQUEsVUFBVSxHQUFHLElBQUtILENBQUFBLFdBQUwsQ0FBaUIsSUFBQSxDQUFLSSxlQUFMLENBQXFCNUIsR0FBckIsQ0FBeUIsVUFBQ2QsU0FBRCxFQUFlO0VBQ3BFLFVBQU9BLE9BQUFBLFNBQVMsQ0FBQzhCLFlBQVYsRUFBUCxDQUFBO0VBQ0QsU0FGNkIsQ0FBakIsRUFFVE8sWUFGUyxDQUFiLENBQUE7RUFHQSxRQUFBLElBQUEsQ0FBS00sV0FBTCxDQUFpQkYsVUFBakIsRUFBNkJKLFlBQTdCLENBQUEsQ0FBQTtFQUNBLFFBQUEsSUFBQSxDQUFLSyxlQUFMLENBQXFCdkQsT0FBckIsQ0FBNkIsVUFBQ2EsU0FBRCxFQUFBO0VBQUEsVUFBQSxPQUFlLE1BQUksQ0FBQ2lDLElBQUwsQ0FBVSxZQUFWLEVBQXdCakMsU0FBeEIsQ0FBZixDQUFBO0VBQUEsU0FBN0IsQ0FBQSxDQUFBO0VBQ0QsT0FBQTtFQUNGLEtBQUE7OzthQUVELFNBQWUsWUFBQSxHQUFBO0VBQ2IsTUFBQSxPQUFPL0ssU0FBUyxDQUFDZ0ksV0FBVixDQUNMLElBQUEsQ0FBS3ZKLE9BREEsRUFFTCxJQUFBLENBQUtxRCxTQUZBLEVBR0wsS0FBS0csT0FBTCxDQUFhcEMsZ0JBSFIsRUFJTCxJQUpLLENBQVAsQ0FBQTtFQU1ELEtBQUE7OztFQUVELElBQUEsS0FBQSxFQUFBLFNBQUEsY0FBQSxDQUFla0wsU0FBZixFQUEwQjtFQUN4QixNQUFBLElBQUksSUFBSzlJLENBQUFBLE9BQUwsQ0FBYTBMLGNBQWpCLEVBQWlDO0VBQy9CLFFBQU8sT0FBQSxJQUFBLENBQUsxTCxPQUFMLENBQWEwTCxjQUFiLENBQTRCLElBQTVCLEVBQWtDNUMsU0FBbEMsQ0FBUCxDQUFBO0VBQ0QsT0FGRCxNQUVPO0VBQ0wsUUFBQSxJQUFNNkMsZUFBZSxHQUFHLElBQUtmLENBQUFBLFlBQUwsRUFBeEIsQ0FBQTtFQUNBLFFBQUEsSUFBTWdCLGVBQWUsR0FBRzlDLFNBQVMsQ0FBQzhCLFlBQVYsRUFBQSxDQUF5QnBDLFNBQXpCLEVBQXhCLENBQUE7RUFFQSxRQUFBLE9BQU9vRCxlQUFlLEdBQUdELGVBQWUsQ0FBQ25ELFNBQWhCLEVBQWxCLElBQ0ltRCxlQUFlLENBQUNqTixZQUFoQixDQUE2Qm9LLFNBQVMsQ0FBQzdKLFNBQVYsRUFBN0IsQ0FEWCxDQUFBO0VBRUQsT0FBQTtFQUNGLEtBQUE7OzthQUVELFNBQWMsV0FBQSxHQUFBO0VBQ1osTUFBTyxPQUFBLElBQUEsQ0FBSzJMLFlBQUwsRUFBQSxDQUFvQjVNLFFBQTNCLENBQUE7RUFDRCxLQUFBOzs7YUFFRCxTQUFVLE9BQUEsR0FBQTtFQUNSLE1BQU8sT0FBQSxJQUFBLENBQUs0TSxZQUFMLEVBQUEsQ0FBb0IzTSxJQUEzQixDQUFBO0VBQ0QsS0FBQTs7O2FBRUQsU0FBVSxPQUFBLEdBQUE7RUFBQSxNQUFBLElBQUEsTUFBQSxHQUFBLElBQUEsQ0FBQTs7RUFDUjROLE1BQUFBLE1BQU0sQ0FBQzVELE9BQVAsQ0FBZSxVQUFDNkQsS0FBRCxFQUFBO0VBQUEsUUFBQSxPQUFXQyxVQUFVLENBQUNELEtBQUssQ0FBQ2pCLE9BQVAsRUFBZ0IsTUFBaEIsQ0FBckIsQ0FBQTtFQUFBLE9BQWYsQ0FBQSxDQUFBO0VBQ0QsS0FBQTs7O2FBRUQsU0FBVSxPQUFBLEdBQUE7RUFDUixNQUFBLElBQU1VLFVBQVUsR0FBRyxJQUFLSCxDQUFBQSxXQUFMLENBQWlCLElBQUEsQ0FBS0ksZUFBTCxDQUFxQjVCLEdBQXJCLENBQXlCLFVBQUNkLFNBQUQsRUFBZTtFQUMxRSxRQUFPQSxPQUFBQSxTQUFTLENBQUM4QixZQUFWLEVBQVAsQ0FBQTtFQUNELE9BRm1DLENBQWpCLEVBRWYsRUFGZSxDQUFuQixDQUFBO0VBR0EsTUFBQSxJQUFBLENBQUthLFdBQUwsQ0FBaUJGLFVBQWpCLEVBQTZCLEVBQTdCLEVBQWlDLENBQWpDLENBQUEsQ0FBQTtFQUNELEtBQUE7OztFQUVELElBQUEsS0FBQSxFQUFBLFNBQUEsS0FBQSxDQUFNekMsU0FBTixFQUFpQjtFQUNmLE1BQU1rRCxJQUFBQSxrQkFBa0IsR0FBRyxFQUEzQixDQUFBOztFQUVBLE1BQUksSUFBQSxJQUFBLENBQUtwQixZQUFMLEVBQUEsQ0FBb0JsTSxZQUFwQixDQUFpQ29LLFNBQVMsQ0FBQzdKLFNBQVYsRUFBakMsQ0FBSixFQUE2RDtFQUMzRDZKLFFBQUFBLFNBQVMsQ0FBQzlLLFFBQVYsR0FBcUIsS0FBS3dILEtBQUwsQ0FBV3NELFNBQVMsQ0FBQzlLLFFBQXJCLEVBQStCOEssU0FBUyxDQUFDbUQsT0FBVixFQUEvQixDQUFyQixDQUFBO0VBQ0QsT0FGRCxNQUVPO0VBQ0wsUUFBQSxPQUFPLEtBQVAsQ0FBQTtFQUNELE9BQUE7O0VBRUQsTUFBQSxJQUFBLENBQUtsQixJQUFMLENBQVUsa0JBQVYsRUFBOEJqQyxTQUE5QixDQUFBLENBQUE7RUFFQSxNQUFBLElBQUEsQ0FBSzBDLGVBQUwsR0FBdUIsSUFBS0YsQ0FBQUEsT0FBTCxDQUFhLElBQUEsQ0FBS0UsZUFBbEIsRUFBbUMsQ0FBQzFDLFNBQUQsQ0FBbkMsRUFBZ0RrRCxrQkFBaEQsQ0FBdkIsQ0FBQTtFQUNBLE1BQUEsSUFBTVQsVUFBVSxHQUFHLElBQUtILENBQUFBLFdBQUwsQ0FBaUIsSUFBQSxDQUFLSSxlQUFMLENBQXFCNUIsR0FBckIsQ0FBeUIsVUFBQ2QsU0FBRCxFQUFlO0VBQzFFLFFBQU9BLE9BQUFBLFNBQVMsQ0FBQzhCLFlBQVYsRUFBUCxDQUFBO0VBQ0QsT0FGbUMsQ0FBakIsRUFFZm9CLGtCQUZlLENBQW5CLENBQUE7RUFJQSxNQUFBLElBQUEsQ0FBS1AsV0FBTCxDQUFpQkYsVUFBakIsRUFBNkJTLGtCQUE3QixDQUFBLENBQUE7O0VBQ0EsTUFBSSxJQUFBLElBQUEsQ0FBS1IsZUFBTCxDQUFxQnhLLE9BQXJCLENBQTZCOEgsU0FBN0IsQ0FBQSxLQUE0QyxDQUFDLENBQWpELEVBQW9EO0VBQ2xELFFBQUtvRCxJQUFBQSxDQUFBQSxlQUFMLENBQXFCcEQsU0FBckIsQ0FBQSxDQUFBO0VBQ0QsT0FBQTs7RUFDRCxNQUFBLE9BQU8sSUFBUCxDQUFBO0VBQ0QsS0FBQTs7O0VBRUQsSUFBQSxLQUFBLEVBQUEsU0FBQSxXQUFBLENBQVl5QyxVQUFaLEVBQXdCSixZQUF4QixFQUFzQ2dCLElBQXRDLEVBQTRDO0VBQUEsTUFBQSxJQUFBLE1BQUEsR0FBQSxJQUFBLENBQUE7O0VBQzFDLE1BQUEsSUFBQSxDQUFLWCxlQUFMLENBQXFCL0ssS0FBckIsQ0FBMkIsQ0FBM0IsQ0FBQSxDQUE4QndILE9BQTlCLENBQXNDLFVBQUNhLFNBQUQsRUFBWTVHLENBQVosRUFBa0I7RUFDdEQsUUFBQSxJQUFNOUQsSUFBSSxHQUFHbU4sVUFBVSxDQUFDckosQ0FBRCxDQUF2QjtFQUFBLFlBQ0VzSSxPQUFPLEdBQUcyQixJQUFJLElBQUlBLElBQUksS0FBSyxDQUFqQixHQUFxQkEsSUFBckIsR0FBNEJoQixZQUFZLENBQUNuSyxPQUFiLENBQXFCa0IsQ0FBckIsQ0FBQSxLQUE0QixDQUFDLENBQTdCLEdBQWlDLE1BQUksQ0FBQ2xDLE9BQUwsQ0FBYXdLLE9BQTlDLEdBQXdELE1BQUksQ0FBQ3hLLE9BQUwsQ0FBYXlLLFdBRDdHLENBQUE7O0VBR0EsUUFBSXJNLElBQUFBLElBQUksQ0FBQzhKLFNBQVQsRUFBb0I7RUFDbEJZLFVBQUFBLFNBQVMsQ0FBQ3NELElBQVYsQ0FBZXRELFNBQVMsQ0FBQ3VELGVBQXpCLEVBQTBDN0IsT0FBMUMsRUFBbUQsSUFBbkQsRUFBeUQsSUFBekQsQ0FBQSxDQUFBO0VBQ0F1QixVQUFBQSxVQUFVLENBQUMsTUFBSSxDQUFDUCxlQUFOLEVBQXVCMUMsU0FBdkIsQ0FBVixDQUFBOztFQUNBLFVBQUEsTUFBSSxDQUFDaUMsSUFBTCxDQUFVLGVBQVYsRUFBMkJqQyxTQUEzQixDQUFBLENBQUE7RUFDRCxTQUpELE1BSU87RUFDTEEsVUFBQUEsU0FBUyxDQUFDc0QsSUFBVixDQUFlaE8sSUFBSSxDQUFDSixRQUFwQixFQUE4QndNLE9BQTlCLEVBQXVDLElBQXZDLEVBQTZDLElBQTdDLENBQUEsQ0FBQTtFQUNELFNBQUE7RUFDRixPQVhELENBQUEsQ0FBQTtFQVlELEtBQUE7OzthQUVELFNBQUkxQixHQUFBQSxDQUFBQSxTQUFKLEVBQWVxRCxJQUFmLEVBQXFCO0VBQ25CLE1BQUEsSUFBTUgsa0JBQWtCLEdBQUcsSUFBS1IsQ0FBQUEsZUFBTCxDQUFxQnBKLE1BQWhELENBQUE7RUFFQSxNQUFBLElBQUEsQ0FBSzJJLElBQUwsQ0FBVSxrQkFBVixFQUE4QmpDLFNBQTlCLENBQUEsQ0FBQTtFQUVBLE1BQUt3RCxJQUFBQSxDQUFBQSxrQkFBTCxDQUF3QnhELFNBQXhCLENBQUEsQ0FBQTtFQUNBLE1BQUEsSUFBTXlDLFVBQVUsR0FBRyxJQUFLSCxDQUFBQSxXQUFMLENBQWlCLElBQUEsQ0FBS0ksZUFBTCxDQUFxQjVCLEdBQXJCLENBQXlCLFVBQUNkLFNBQUQsRUFBZTtFQUMxRSxRQUFPQSxPQUFBQSxTQUFTLENBQUM4QixZQUFWLEVBQVAsQ0FBQTtFQUNELE9BRm1DLENBQWpCLEVBRWZvQixrQkFGZSxFQUVLbEQsU0FGTCxDQUFuQixDQUFBO0VBSUEsTUFBSzJDLElBQUFBLENBQUFBLFdBQUwsQ0FBaUJGLFVBQWpCLEVBQTZCLENBQUNTLGtCQUFELENBQTdCLEVBQW1ERyxJQUFJLElBQUksQ0FBM0QsQ0FBQSxDQUFBOztFQUNBLE1BQUksSUFBQSxJQUFBLENBQUtYLGVBQUwsQ0FBcUJ4SyxPQUFyQixDQUE2QjhILFNBQTdCLENBQUEsS0FBNEMsQ0FBQyxDQUFqRCxFQUFvRDtFQUNsRCxRQUFLb0QsSUFBQUEsQ0FBQUEsZUFBTCxDQUFxQnBELFNBQXJCLENBQUEsQ0FBQTtFQUNELE9BQUE7RUFDRixLQUFBOzs7RUFFRCxJQUFBLEtBQUEsRUFBQSxTQUFBLGtCQUFBLENBQW1CQSxTQUFuQixFQUE4QjtFQUM1QixNQUFJLElBQUEsSUFBQSxDQUFLMEMsZUFBTCxDQUFxQnhLLE9BQXJCLENBQTZCOEgsU0FBN0IsQ0FBQSxLQUEwQyxDQUFDLENBQS9DLEVBQWtEO0VBQ2hELFFBQUEsSUFBQSxDQUFLMEMsZUFBTCxDQUFxQjNLLElBQXJCLENBQTBCaUksU0FBMUIsQ0FBQSxDQUFBO0VBQ0QsT0FBQTtFQUNGLEtBQUE7OztFQUVELElBQUEsS0FBQSxFQUFBLFNBQUEsZUFBQSxDQUFnQkEsU0FBaEIsRUFBMkI7RUFBQSxNQUFBLElBQUEsTUFBQSxHQUFBLElBQUEsQ0FBQTs7RUFDekJBLE1BQUFBLFNBQVMsQ0FBQzVJLEVBQVYsQ0FBYSxXQUFiLEVBQTBCLElBQUEsQ0FBS3FNLGFBQUwsR0FBcUIsWUFBTTtFQUNuRCxRQUFBLE1BQUksQ0FBQ0MsTUFBTCxDQUFZMUQsU0FBWixDQUFBLENBQUE7RUFDRCxPQUZELENBQUEsQ0FBQTtFQUlBLE1BQUEsSUFBQSxDQUFLaUMsSUFBTCxDQUFVLFlBQVYsRUFBd0JqQyxTQUF4QixDQUFBLENBQUE7RUFDRCxLQUFBOzs7RUFFRCxJQUFBLEtBQUEsRUFBQSxTQUFBLE1BQUEsQ0FBT0EsU0FBUCxFQUFrQjtFQUNoQkEsTUFBQUEsU0FBUyxDQUFDMkQsV0FBVixDQUFzQixXQUF0QixFQUFtQyxLQUFLRixhQUF4QyxDQUFBLENBQUE7RUFFQSxNQUFNeEwsSUFBQUEsS0FBSyxHQUFHLElBQUt5SyxDQUFBQSxlQUFMLENBQXFCeEssT0FBckIsQ0FBNkI4SCxTQUE3QixDQUFkLENBQUE7O0VBQ0EsTUFBQSxJQUFJL0gsS0FBSyxLQUFLLENBQUMsQ0FBZixFQUFrQjtFQUNoQixRQUFBLE9BQUE7RUFDRCxPQUFBOztFQUVELE1BQUEsSUFBQSxDQUFLeUssZUFBTCxDQUFxQnZLLE1BQXJCLENBQTRCRixLQUE1QixFQUFtQyxDQUFuQyxDQUFBLENBQUE7RUFFQSxNQUFBLElBQU13SyxVQUFVLEdBQUcsSUFBS0gsQ0FBQUEsV0FBTCxDQUFpQixJQUFBLENBQUtJLGVBQUwsQ0FBcUI1QixHQUFyQixDQUF5QixVQUFDZCxTQUFELEVBQWU7RUFDMUUsUUFBT0EsT0FBQUEsU0FBUyxDQUFDOEIsWUFBVixFQUFQLENBQUE7RUFDRCxPQUZtQyxDQUFqQixFQUVmLEVBRmUsQ0FBbkIsQ0FBQTtFQUlBLE1BQUEsSUFBQSxDQUFLYSxXQUFMLENBQWlCRixVQUFqQixFQUE2QixFQUE3QixDQUFBLENBQUE7RUFDQSxNQUFBLElBQUEsQ0FBS1IsSUFBTCxDQUFVLGVBQVYsRUFBMkJqQyxTQUEzQixDQUFBLENBQUE7RUFDRCxLQUFBOzs7YUFFRCxTQUFRLEtBQUEsR0FBQTtFQUFBLE1BQUEsSUFBQSxNQUFBLEdBQUEsSUFBQSxDQUFBOztFQUNOLE1BQUEsSUFBQSxDQUFLMEMsZUFBTCxDQUFxQnZELE9BQXJCLENBQTZCLFVBQUNhLFNBQUQsRUFBZTtFQUMxQ0EsUUFBQUEsU0FBUyxDQUFDc0QsSUFBVixDQUFldEQsU0FBUyxDQUFDdUQsZUFBekIsRUFBMEMsQ0FBMUMsRUFBNkMsSUFBN0MsRUFBbUQsSUFBbkQsQ0FBQSxDQUFBOztFQUNBLFFBQUEsTUFBSSxDQUFDdEIsSUFBTCxDQUFVLGVBQVYsRUFBMkJqQyxTQUEzQixDQUFBLENBQUE7RUFDRCxPQUhELENBQUEsQ0FBQTtFQUlBLE1BQUswQyxJQUFBQSxDQUFBQSxlQUFMLEdBQXVCLEVBQXZCLENBQUE7RUFDRCxLQUFBOzs7YUFFRCxTQUFzQixtQkFBQSxHQUFBO0VBQ3BCLE1BQUtBLElBQUFBLENBQUFBLGVBQUwsQ0FBcUIvSyxLQUFyQixFQUFBLENBQUE7RUFDRCxLQUFBOzs7V0FFRCxTQUFnQixHQUFBLEdBQUE7RUFDZCxNQUFRLE9BQUEsSUFBQSxDQUFLaU0sVUFBTCxHQUFrQixJQUFBLENBQUtBLFVBQUwsSUFBbUIsSUFBQSxDQUFLMU0sT0FBTCxDQUFhSCxTQUFoQyxJQUE2QyxJQUFLRyxDQUFBQSxPQUFMLENBQWEzQyxNQUExRCxJQUFvRXVDLG1CQUFtQixDQUFDLElBQUEsQ0FBS3BELE9BQU4sQ0FBakgsQ0FBQTtFQUNELEtBQUE7Ozs7SUE3TWlDdUQ7RUFnTnBDd0ssTUFBTSxDQUFDTyxPQUFQLEdBQWlCLElBQUkvSyxZQUFKLEVBQWpCLENBQUE7RUFDQXdLLE1BQU0sQ0FBQ08sT0FBUCxDQUFlNUssRUFBZixDQUFrQixlQUFsQixFQUFtQ2lLLG1CQUFuQyxDQUFBOztBQzNOTTBCLE1BQUFBLE1BQU0sR0FBRyxHQUFmOztNQUVNYzs7Ozs7RUFDSixFQUFZL0QsU0FBQUEsS0FBQUEsQ0FBQUEsVUFBWixFQUF3QmlDLE9BQXhCLEVBQTZDO0VBQUEsSUFBQSxJQUFBLEtBQUEsQ0FBQTs7RUFBQSxJQUFaN0ssSUFBQUEsT0FBWSx1RUFBSixFQUFJLENBQUE7O0VBQUEsSUFBQSxlQUFBLENBQUEsSUFBQSxFQUFBLEtBQUEsQ0FBQSxDQUFBOztFQUMzQyxJQUFBLEtBQUEsR0FBQSxNQUFBLENBQUEsSUFBQSxDQUFBLElBQUEsRUFBTUEsT0FBTixDQUFBLENBQUE7RUFDQTZMLElBQUFBLE1BQU0sQ0FBQzVELE9BQVAsQ0FBZSxVQUFDNkQsS0FBRCxFQUFXO0VBQ3hCLE1BQUEsSUFBSWxELFVBQUosRUFBZ0I7RUFDZEEsUUFBQUEsVUFBVSxDQUFDWCxPQUFYLENBQW1CLFVBQUNhLFNBQUQsRUFBZTtFQUNoQ2lELFVBQUFBLFVBQVUsQ0FBQ0QsS0FBSyxDQUFDbEQsVUFBUCxFQUFtQkUsU0FBbkIsQ0FBVixDQUFBO0VBQ0QsU0FGRCxDQUFBLENBQUE7RUFHRCxPQUFBOztFQUVELE1BQUEsSUFBSStCLE9BQUosRUFBYTtFQUNYQSxRQUFBQSxPQUFPLENBQUM1QyxPQUFSLENBQWdCLFVBQUNtQyxNQUFELEVBQVk7RUFDMUIyQixVQUFBQSxVQUFVLENBQUNELEtBQUssQ0FBQ2pCLE9BQVAsRUFBZ0JULE1BQWhCLENBQVYsQ0FBQTtFQUNELFNBRkQsQ0FBQSxDQUFBO0VBR0QsT0FBQTtFQUNGLEtBWkQsQ0FBQSxDQUFBO0VBY0EsSUFBQSxLQUFBLENBQUt4QixVQUFMLEdBQWtCQSxVQUFVLElBQUksRUFBaEMsQ0FBQTtFQUNBLElBQUEsS0FBQSxDQUFLaUMsT0FBTCxHQUFlQSxPQUFPLElBQUksRUFBMUIsQ0FBQTtFQUNBZ0IsSUFBQUEsTUFBTSxDQUFDaEwsSUFBUCxDQUFBLHNCQUFBLENBQUEsS0FBQSxDQUFBLENBQUEsQ0FBQTtFQUNBLElBQUEsS0FBQSxDQUFLYixPQUFMLEdBQWU7RUFDYndLLE1BQUFBLE9BQU8sRUFBR3hLLE9BQU8sQ0FBQ3dLLE9BQVQsSUFBcUIsR0FBQTtFQURqQixLQUFmLENBQUE7O0VBSUEsSUFBQSxLQUFBLENBQUtTLElBQUwsRUFBQSxDQUFBOztFQXZCMkMsSUFBQSxPQUFBLEtBQUEsQ0FBQTtFQXdCNUMsR0FBQTs7OzthQUVELFNBQU8sSUFBQSxHQUFBO0VBQUEsTUFBQSxJQUFBLE1BQUEsR0FBQSxJQUFBLENBQUE7O0VBQ0wsTUFBQSxJQUFBLENBQUtyQyxVQUFMLENBQWdCWCxPQUFoQixDQUF3QixVQUFDYSxTQUFELEVBQWU7RUFDckNBLFFBQUFBLFNBQVMsQ0FBQzhELGFBQVYsR0FBMEIsWUFBQTtFQUFBLFVBQUEsT0FBTSxNQUFJLENBQUNDLEtBQUwsQ0FBVy9ELFNBQVgsQ0FBTixDQUFBO0VBQUEsU0FBMUIsQ0FBQTtFQUNELE9BRkQsQ0FBQSxDQUFBO0VBR0QsS0FBQTs7O0VBRUQsSUFBQSxLQUFBLEVBQUEsU0FBQSxZQUFBLENBQWFBLFNBQWIsRUFBd0I7RUFBQSxNQUFBLElBQUEsTUFBQSxHQUFBLElBQUEsQ0FBQTs7RUFDdEIsTUFBQSxJQUFBLENBQUtGLFVBQUwsQ0FBZ0IvSCxJQUFoQixDQUFxQmlJLFNBQXJCLENBQUEsQ0FBQTs7RUFDQUEsTUFBQUEsU0FBUyxDQUFDOEQsYUFBVixHQUEwQixZQUFBO0VBQUEsUUFBQSxPQUFNLE1BQUksQ0FBQ0MsS0FBTCxDQUFXL0QsU0FBWCxDQUFOLENBQUE7RUFBQSxPQUExQixDQUFBO0VBQ0QsS0FBQTs7O0VBRUQsSUFBQSxLQUFBLEVBQUEsU0FBQSxTQUFBLENBQVVzQixNQUFWLEVBQWtCO0VBQ2hCLE1BQUEsSUFBQSxDQUFLUyxPQUFMLENBQWFoSyxJQUFiLENBQWtCdUosTUFBbEIsQ0FBQSxDQUFBO0VBQ0QsS0FBQTs7O0VBRUQsSUFBQSxLQUFBLEVBQUEsU0FBQSxLQUFBLENBQU10QixTQUFOLEVBQWlCO0VBQ2YsTUFBTWdFLElBQUFBLFdBQVcsR0FBRyxJQUFLakMsQ0FBQUEsT0FBTCxDQUFhNUcsTUFBYixDQUFvQixVQUFDbUcsTUFBRCxFQUFZO0VBQ2xELFFBQU9BLE9BQUFBLE1BQU0sQ0FBQ3hCLFVBQVAsQ0FBa0I1SCxPQUFsQixDQUEwQjhILFNBQTFCLENBQXlDLEtBQUEsQ0FBQyxDQUFqRCxDQUFBO0VBQ0QsT0FGbUIsQ0FFakI3RSxDQUFBQSxNQUZpQixDQUVWLFVBQUNtRyxNQUFELEVBQVk7RUFDcEIsUUFBQSxPQUFPQSxNQUFNLENBQUNzQixjQUFQLENBQXNCNUMsU0FBdEIsQ0FBUCxDQUFBO0VBQ0QsT0FKbUIsRUFJakJpRSxJQUppQixDQUlaLFVBQUNDLENBQUQsRUFBSUMsQ0FBSixFQUFVO0VBQ2hCLFFBQU9ELE9BQUFBLENBQUMsQ0FBQ3BDLFlBQUYsRUFBaUJwQyxDQUFBQSxTQUFqQixFQUErQnlFLEdBQUFBLENBQUMsQ0FBQ3JDLFlBQUYsRUFBaUJwQyxDQUFBQSxTQUFqQixFQUF0QyxDQUFBO0VBQ0QsT0FObUIsQ0FBcEIsQ0FBQTs7RUFRQSxNQUFJc0UsSUFBQUEsV0FBVyxDQUFDMUssTUFBaEIsRUFBd0I7RUFDdEIwSyxRQUFBQSxXQUFXLENBQUMsQ0FBRCxDQUFYLENBQWVELEtBQWYsQ0FBcUIvRCxTQUFyQixDQUFBLENBQUE7RUFDRCxPQUZELE1BRU8sSUFBSUEsU0FBUyxDQUFDK0IsT0FBVixDQUFrQnpJLE1BQXRCLEVBQThCO0VBQ25DMEcsUUFBQUEsU0FBUyxDQUFDb0UsV0FBVixDQUFzQnBFLFNBQVMsQ0FBQ3VELGVBQWhDLEVBQWlELElBQUEsQ0FBS3JNLE9BQUwsQ0FBYXdLLE9BQTlELENBQUEsQ0FBQTtFQUNELE9BQUE7O0VBRUQsTUFBS08sSUFBQUEsQ0FBQUEsSUFBTCxDQUFVLGNBQVYsQ0FBQSxDQUFBO0VBQ0QsS0FBQTs7O2FBRUQsU0FBUSxLQUFBLEdBQUE7RUFDTixNQUFBLElBQUEsQ0FBS0YsT0FBTCxDQUFhNUMsT0FBYixDQUFxQixVQUFDbUMsTUFBRCxFQUFBO0VBQUEsUUFBWUEsT0FBQUEsTUFBTSxDQUFDK0MsS0FBUCxFQUFaLENBQUE7RUFBQSxPQUFyQixDQUFBLENBQUE7RUFDRCxLQUFBOzs7YUFFRCxTQUFVLE9BQUEsR0FBQTtFQUNSLE1BQUEsSUFBQSxDQUFLdkUsVUFBTCxDQUFnQlgsT0FBaEIsQ0FBd0IsVUFBQ2EsU0FBRCxFQUFBO0VBQUEsUUFBZUEsT0FBQUEsU0FBUyxDQUFDc0UsT0FBVixFQUFmLENBQUE7RUFBQSxPQUF4QixDQUFBLENBQUE7RUFDQSxNQUFBLElBQUEsQ0FBS3ZDLE9BQUwsQ0FBYTVDLE9BQWIsQ0FBcUIsVUFBQ21DLE1BQUQsRUFBQTtFQUFBLFFBQVlBLE9BQUFBLE1BQU0sQ0FBQ2dELE9BQVAsRUFBWixDQUFBO0VBQUEsT0FBckIsQ0FBQSxDQUFBO0VBQ0QsS0FBQTs7O1dBRUQsU0FBZ0IsR0FBQSxHQUFBO0VBQUEsTUFBQSxJQUFBLE1BQUEsR0FBQSxJQUFBLENBQUE7O0VBQ2QsTUFBQSxPQUFPLEtBQUt2QyxPQUFMLENBQWFqQixHQUFiLENBQWlCLFVBQUNRLE1BQUQsRUFBWTtFQUNsQyxRQUFBLE9BQU9BLE1BQU0sQ0FBQ29CLGVBQVAsQ0FBdUI1QixHQUF2QixDQUEyQixVQUFDZCxTQUFELEVBQUE7RUFBQSxVQUFBLE9BQWUsTUFBSSxDQUFDRixVQUFMLENBQWdCNUgsT0FBaEIsQ0FBd0I4SCxTQUF4QixDQUFmLENBQUE7RUFBQSxTQUEzQixDQUFQLENBQUE7RUFDRCxPQUZNLENBQVAsQ0FBQTtFQUdEO0VBRUQsSUFBQSxHQUFBLEVBQUEsU0FBQSxHQUFBLENBQWN1RSxTQUFkLEVBQXlCO0VBQUEsTUFBQSxJQUFBLE1BQUEsR0FBQSxJQUFBLENBQUE7O0VBQ3ZCLE1BQU1DLElBQUFBLE9BQU8sR0FBRyxvQkFBaEIsQ0FBQTs7RUFDQSxNQUFJRCxJQUFBQSxTQUFTLENBQUNqTCxNQUFWLEtBQXFCLEtBQUt5SSxPQUFMLENBQWF6SSxNQUF0QyxFQUE4QztFQUM1QyxRQUFBLElBQUEsQ0FBS3lJLE9BQUwsQ0FBYTVDLE9BQWIsQ0FBcUIsVUFBQ21DLE1BQUQsRUFBQTtFQUFBLFVBQVlBLE9BQUFBLE1BQU0sQ0FBQytDLEtBQVAsRUFBWixDQUFBO0VBQUEsU0FBckIsQ0FBQSxDQUFBO0VBRUFFLFFBQUFBLFNBQVMsQ0FBQ3BGLE9BQVYsQ0FBa0IsVUFBQ3NGLGFBQUQsRUFBZ0JyTCxDQUFoQixFQUFzQjtFQUN0Q3FMLFVBQUFBLGFBQWEsQ0FBQ3RGLE9BQWQsQ0FBc0IsVUFBQ2xILEtBQUQsRUFBVztFQUMvQixZQUFBLE1BQUksQ0FBQzhKLE9BQUwsQ0FBYTNJLENBQWIsQ0FBQSxDQUFnQmhFLEdBQWhCLENBQW9CLE1BQUksQ0FBQzBLLFVBQUwsQ0FBZ0I3SCxLQUFoQixDQUFwQixDQUFBLENBQUE7RUFDRCxXQUZELENBQUEsQ0FBQTtFQUdELFNBSkQsQ0FBQSxDQUFBO0VBS0QsT0FSRCxNQVFPO0VBQ0wsUUFBQSxNQUFNdU0sT0FBTixDQUFBO0VBQ0QsT0FBQTtFQUNGLEtBQUE7Ozs7SUF4RmlCdk47O0FBMkZwQixNQUFNc0ssWUFBWSxHQUFHLElBQUlzQyxLQUFKLEdBQXJCOztFQUVBLFNBQVNiLEtBQVQsQ0FBZXhMLEVBQWYsRUFBbUI7RUFDakIsRUFBQSxJQUFNa04sWUFBWSxHQUFHLElBQUliLEtBQUosRUFBckIsQ0FBQTs7RUFFQSxFQUFBLElBQU1jLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBUzNFLFNBQVQsRUFBb0I7RUFDOUMwRSxJQUFBQSxZQUFZLENBQUNFLFlBQWIsQ0FBMEI1RSxTQUExQixDQUFBLENBQUE7RUFDQTZFLElBQUFBLFNBQVMsQ0FBQzdDLE9BQVYsQ0FBa0I4QyxTQUFsQixFQUFBLENBQUE7RUFDRCxHQUhELENBQUE7O0VBS0EsRUFBQSxJQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQVN6RCxNQUFULEVBQWlCO0VBQ3hDb0QsSUFBQUEsWUFBWSxDQUFDbEQsU0FBYixDQUF1QkYsTUFBdkIsQ0FBQSxDQUFBO0VBQ0F1RCxJQUFBQSxTQUFTLENBQUM3QyxPQUFWLENBQWtCOEMsU0FBbEIsRUFBQSxDQUFBO0VBQ0QsR0FIRCxDQUFBOztFQUtBRCxFQUFBQSxTQUFTLENBQUM3QyxPQUFWLENBQWtCZ0QsU0FBbEIsQ0FBNEIsa0JBQTVCLEVBQWdETCxtQkFBaEQsQ0FBQSxDQUFBO0VBQ0FsRCxFQUFBQSxNQUFNLENBQUNPLE9BQVAsQ0FBZWdELFNBQWYsQ0FBeUIsZUFBekIsRUFBMENELGdCQUExQyxDQUFBLENBQUE7RUFDQXZOLEVBQUFBLEVBQUUsQ0FBQ0ksSUFBSCxFQUFBLENBQUE7RUFDQWlOLEVBQUFBLFNBQVMsQ0FBQzdDLE9BQVYsQ0FBa0IyQixXQUFsQixDQUE4QixrQkFBOUIsRUFBa0RnQixtQkFBbEQsQ0FBQSxDQUFBO0VBQ0FsRCxFQUFBQSxNQUFNLENBQUNPLE9BQVAsQ0FBZTJCLFdBQWYsQ0FBMkIsZUFBM0IsRUFBNENvQixnQkFBNUMsQ0FBQSxDQUFBO0VBQ0EsRUFBQSxPQUFPTCxZQUFQLENBQUE7RUFDRDs7RUN2SEQsU0FBU08seUJBQVQsR0FBcUM7RUFDbkMsRUFBSUMsSUFBQUEsZ0JBQWdCLEdBQUcsS0FBdkIsQ0FBQTs7RUFFQSxFQUFJLElBQUE7RUFDRixJQUFNaE8sSUFBQUEsT0FBTyxHQUFHRyxNQUFNLENBQUM4TixjQUFQLENBQXNCLEVBQXRCLEVBQTBCLFNBQTFCLEVBQXFDO0VBQ25EQyxNQUFBQSxHQURtRCxFQUM3QyxTQUFBLEdBQUEsR0FBQTtFQUNKLFFBQVFGLE9BQUFBLGdCQUFnQixHQUFHLElBQTNCLENBQUE7RUFDRCxPQUFBO0VBSGtELEtBQXJDLENBQWhCLENBQUE7RUFNQWxSLElBQUFBLE1BQU0sQ0FBQ3FSLGdCQUFQLENBQXdCLE1BQXhCLEVBQWdDbk8sT0FBaEMsRUFBeUNBLE9BQXpDLENBQUEsQ0FBQTtFQUNBbEQsSUFBQUEsTUFBTSxDQUFDc1IsbUJBQVAsQ0FBMkIsTUFBM0IsRUFBbUNwTyxPQUFuQyxFQUE0Q0EsT0FBNUMsQ0FBQSxDQUFBO0VBQ0QsR0FURCxDQVNFLE9BQU9xTyxJQUFQLEVBQWE7RUFDYkwsSUFBQUEsZ0JBQWdCLEdBQUcsS0FBbkIsQ0FBQTtFQUNELEdBQUE7O0VBRUQsRUFBQSxPQUFPQSxnQkFBUCxDQUFBO0VBQ0QsQ0FBQTs7RUFFTSxJQUFNTSxzQkFBc0IsR0FBR1AseUJBQXlCLEVBQXhELENBQUE7QUFRUCxpQ0FBZU8sc0JBQWY7O0VDbEJBLElBQU1DLE9BQU8sSUFBRyxjQUFrQnpSLElBQUFBLE1BQXJCLENBQWIsQ0FBQTtFQUNBLElBQU0wUixXQUFXLEdBQUc7RUFDbEJqSCxFQUFBQSxLQUFLLEVBQUUsV0FEVztFQUVsQjZFLEVBQUFBLElBQUksRUFBRSxXQUZZO0VBR2xCcUMsRUFBQUEsR0FBRyxFQUFFLFNBQUE7RUFIYSxDQUFwQixDQUFBO0VBS0EsSUFBTUMsV0FBVyxHQUFHO0VBQ2xCbkgsRUFBQUEsS0FBSyxFQUFFLFlBRFc7RUFFbEI2RSxFQUFBQSxJQUFJLEVBQUUsV0FGWTtFQUdsQnFDLEVBQUFBLEdBQUcsRUFBRSxVQUFBO0VBSGEsQ0FBcEIsQ0FBQTtFQUtBLElBQU03RixVQUFVLEdBQUcsRUFBbkIsQ0FBQTtFQUNBLElBQU0rRixpQkFBaUIsR0FBR0MsZ0JBQWdCLENBQUMsV0FBRCxDQUExQyxDQUFBO0VBQ0EsSUFBTUMsa0JBQWtCLEdBQUdELGdCQUFnQixDQUFDLFlBQUQsQ0FBM0MsQ0FBQTs7RUFFQSxTQUFTRSxZQUFULENBQXNCdFMsT0FBdEIsRUFBK0J1UyxPQUEvQixFQUF3QztFQUN0QyxFQUFBLEtBQUssSUFBSTdNLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcxRixPQUFPLENBQUN3UyxjQUFSLENBQXVCNU0sTUFBM0MsRUFBbURGLENBQUMsRUFBcEQsRUFBd0Q7RUFDdEQsSUFBSTFGLElBQUFBLE9BQU8sQ0FBQ3dTLGNBQVIsQ0FBdUI5TSxDQUF2QixDQUEwQitNLENBQUFBLFVBQTFCLEtBQXlDRixPQUE3QyxFQUFzRDtFQUNwRCxNQUFBLE9BQU92UyxPQUFPLENBQUN3UyxjQUFSLENBQXVCOU0sQ0FBdkIsQ0FBUCxDQUFBO0VBQ0QsS0FBQTtFQUNGLEdBQUE7O0VBQ0QsRUFBQSxPQUFPLEtBQVAsQ0FBQTtFQUNELENBQUE7O0VBRUQsU0FBU2dOLGlCQUFULENBQTJCcEcsU0FBM0IsRUFBc0M7RUFDcEMsRUFBTXdFLElBQUFBLE9BQU8sR0FBRyw0RUFBaEIsQ0FBQTs7RUFDQSxFQUFBLElBQUkxRSxVQUFVLENBQUNOLElBQVgsQ0FBZ0IsVUFBQzZHLFFBQUQsRUFBQTtFQUFBLElBQUEsT0FBY3JHLFNBQVMsQ0FBQ3RNLE9BQVYsS0FBc0IyUyxRQUFRLENBQUMzUyxPQUE3QyxDQUFBO0VBQUEsR0FBaEIsQ0FBSixFQUEyRTtFQUN6RSxJQUFBLE1BQU04USxPQUFOLENBQUE7RUFDRCxHQUFBOztFQUNEMUUsRUFBQUEsVUFBVSxDQUFDL0gsSUFBWCxDQUFnQmlJLFNBQWhCLENBQUEsQ0FBQTtFQUNELENBQUE7O0VBRUQsU0FBU3FCLGlCQUFULENBQTJCckIsU0FBM0IsRUFBc0M7RUFDcEN1QixFQUFBQSxZQUFZLENBQUNxRCxZQUFiLENBQTBCNUUsU0FBMUIsQ0FBQSxDQUFBO0VBQ0QsQ0FBQTs7RUFFRCxTQUFTc0csVUFBVCxDQUFvQkMsTUFBcEIsRUFBNEJDLFdBQTVCLEVBQXlDO0VBQ3ZDLEVBQUEsSUFBTUMsRUFBRSxHQUFHelMsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QnNTLE1BQXhCLENBQVgsQ0FBQTs7RUFFQSxFQUFBLEtBQUssSUFBSW5OLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdxTixFQUFFLENBQUNuTixNQUF2QixFQUErQkYsQ0FBQyxFQUFoQyxFQUFvQztFQUNsQyxJQUFBLElBQU1zTixHQUFHLEdBQUdELEVBQUUsQ0FBQ3JOLENBQUQsQ0FBZCxDQUFBOztFQUNBLElBQUEsSUFBS3NOLEdBQUcsQ0FBQ3hPLE9BQUosQ0FBWSxZQUFaLENBQTRCLEdBQUEsQ0FBN0IsSUFBb0N3TyxHQUFHLENBQUN4TyxPQUFKLENBQVksV0FBWixDQUFBLEdBQTJCLENBQW5FLEVBQXVFO0VBQ3JFc08sTUFBQUEsV0FBVyxDQUFDOVAsS0FBWixDQUFrQmdRLEdBQWxCLENBQXlCRCxHQUFBQSxFQUFFLENBQUNDLEdBQUQsQ0FBM0IsQ0FBQTtFQUNELEtBQUE7RUFDRixHQUFBOztFQUVELEVBQUEsS0FBSyxJQUFJdE4sRUFBQyxHQUFHLENBQWIsRUFBZ0JBLEVBQUMsR0FBR21OLE1BQU0sQ0FBQ0ksUUFBUCxDQUFnQnJOLE1BQXBDLEVBQTRDRixFQUFDLEVBQTdDLEVBQWlEO0VBQy9Da04sSUFBQUEsVUFBVSxDQUFDQyxNQUFNLENBQUNJLFFBQVAsQ0FBZ0J2TixFQUFoQixDQUFELEVBQXFCb04sV0FBVyxDQUFDRyxRQUFaLENBQXFCdk4sRUFBckIsQ0FBckIsQ0FBVixDQUFBO0VBQ0QsR0FBQTtFQUNGLENBQUE7O01BRW9CeUw7Ozs7O0VBQ25CLEVBQUEsU0FBQSxTQUFBLENBQVluUixPQUFaLEVBQWlDO0VBQUEsSUFBQSxJQUFBLEtBQUEsQ0FBQTs7RUFBQSxJQUFad0QsSUFBQUEsT0FBWSx1RUFBSixFQUFJLENBQUE7O0VBQUEsSUFBQSxlQUFBLENBQUEsSUFBQSxFQUFBLFNBQUEsQ0FBQSxDQUFBOztFQUMvQixJQUFBLEtBQUEsR0FBQSxNQUFBLENBQUEsSUFBQSxDQUFBLElBQUEsRUFBTUEsT0FBTixDQUFBLENBQUE7RUFDQSxJQUFLNkssS0FBQUEsQ0FBQUEsT0FBTCxHQUFlLEVBQWYsQ0FBQTtFQUNBLElBQUs3SyxLQUFBQSxDQUFBQSxPQUFMLEdBQWVBLE9BQWYsQ0FBQTtFQUNBLElBQUt4RCxLQUFBQSxDQUFBQSxPQUFMLEdBQWVBLE9BQWYsQ0FBQTtFQUNBMFMsSUFBQUEsaUJBQWlCLENBQWpCLHNCQUFBLENBQUEsS0FBQSxDQUFBLENBQUEsQ0FBQTtFQUNBdkIsSUFBQUEsU0FBUyxDQUFDN0MsT0FBVixDQUFrQkMsSUFBbEIsQ0FBdUIsa0JBQXZCLEVBQUEsc0JBQUEsQ0FBQSxLQUFBLENBQUEsQ0FBQSxDQUFBO0VBQ0EsSUFBSzJFLEtBQUFBLENBQUFBLE9BQUwsR0FBZSxJQUFmLENBQUE7O0VBRUEsSUFBQSxLQUFBLENBQUsxRSxhQUFMLEVBQUEsQ0FBQTs7RUFDQSxJQUFBLEtBQUEsQ0FBSzJFLGdCQUFMLEVBQUEsQ0FBQTs7RUFDQSxJQUFBLEtBQUEsQ0FBS0MsY0FBTCxFQUFBLENBQUE7O0VBWCtCLElBQUEsT0FBQSxLQUFBLENBQUE7RUFZaEMsR0FBQTs7OzthQUVELFNBQWdCLGFBQUEsR0FBQTtFQUNkLE1BQUEsSUFBRyxJQUFLNVAsQ0FBQUEsT0FBTCxDQUFhd0YsS0FBaEIsRUFBdUI7RUFDckIsUUFBQSxJQUFBLENBQUswRixRQUFMLEdBQWdCO0VBQUUxRixVQUFBQSxLQUFLLEVBQUUsSUFBS3hGLENBQUFBLE9BQUwsQ0FBYXdGLEtBQUFBO0VBQXRCLFNBQWhCLENBQUE7RUFDRCxPQUZELE1BRU87RUFDTCxRQUFLMEYsSUFBQUEsQ0FBQUEsUUFBTCxHQUFnQixJQUFJcEYsY0FBSixDQUFtQixLQUFLakcsU0FBeEIsRUFBbUMsSUFBS0EsQ0FBQUEsU0FBeEMsQ0FBaEIsQ0FBQTtFQUNELE9BQUE7RUFDRixLQUFBOzs7YUFFRCxTQUFtQixnQkFBQSxHQUFBO0VBQ2pCLE1BQUEsSUFBQSxDQUFLZ1EscUJBQUwsRUFBQSxDQUFBOztFQUNBLE1BQUEsSUFBQSxDQUFLelEsTUFBTCxHQUFjcEMsS0FBSyxDQUFDMEMsYUFBTixDQUFvQixJQUFLbEQsQ0FBQUEsT0FBekIsRUFBa0MsSUFBQSxDQUFLcUQsU0FBdkMsRUFBa0QsSUFBbEQsQ0FBZCxDQUFBO0VBQ0EsTUFBS2lRLElBQUFBLENBQUFBLGNBQUwsR0FBc0IsSUFBQSxDQUFLMVEsTUFBM0IsQ0FBQTtFQUNBLE1BQUtwQixJQUFBQSxDQUFBQSxRQUFMLEdBQWdCLElBQUEsQ0FBS29CLE1BQXJCLENBQUE7RUFDQSxNQUFLaU4sSUFBQUEsQ0FBQUEsZUFBTCxHQUF1QixJQUFLck0sQ0FBQUEsT0FBTCxDQUFhaEMsUUFBYixJQUF5QixLQUFLb0IsTUFBckQsQ0FBQTtFQUVBLE1BQUs4TixJQUFBQSxDQUFBQSxXQUFMLENBQWlCLElBQUEsQ0FBS2IsZUFBdEIsQ0FBQSxDQUFBOztFQUVBLE1BQUEsSUFBSSxJQUFLbkIsQ0FBQUEsUUFBTCxDQUFja0MsT0FBbEIsRUFBMkI7RUFDekIsUUFBS2xDLElBQUFBLENBQUFBLFFBQUwsQ0FBY2tDLE9BQWQsRUFBQSxDQUFBO0VBQ0QsT0FBQTtFQUNGLEtBQUE7OzthQUVELFNBQWlCLGNBQUEsR0FBQTtFQUFBLE1BQUEsSUFBQSxNQUFBLEdBQUEsSUFBQSxDQUFBOztFQUNmLE1BQUsyQyxJQUFBQSxDQUFBQSxVQUFMLEdBQWtCLFVBQUNDLEtBQUQsRUFBQTtFQUFBLFFBQUEsT0FBVyxNQUFJLENBQUNDLFNBQUwsQ0FBZUQsS0FBZixDQUFYLENBQUE7RUFBQSxPQUFsQixDQUFBOztFQUNBLE1BQUtFLElBQUFBLENBQUFBLFNBQUwsR0FBaUIsVUFBQ0YsS0FBRCxFQUFBO0VBQUEsUUFBQSxPQUFXLE1BQUksQ0FBQ0csUUFBTCxDQUFjSCxLQUFkLENBQVgsQ0FBQTtFQUFBLE9BQWpCLENBQUE7O0VBQ0EsTUFBS0ksSUFBQUEsQ0FBQUEsUUFBTCxHQUFnQixVQUFDSixLQUFELEVBQUE7RUFBQSxRQUFBLE9BQVcsTUFBSSxDQUFDSyxPQUFMLENBQWFMLEtBQWIsQ0FBWCxDQUFBO0VBQUEsT0FBaEIsQ0FBQTs7RUFDQSxNQUFLTSxJQUFBQSxDQUFBQSxnQkFBTCxHQUF3QixVQUFDTixLQUFELEVBQUE7RUFBQSxRQUFBLE9BQVcsTUFBSSxDQUFDTyxlQUFMLENBQXFCUCxLQUFyQixDQUFYLENBQUE7RUFBQSxPQUF4QixDQUFBOztFQUNBLE1BQUtRLElBQUFBLENBQUFBLGVBQUwsR0FBdUIsVUFBQ1IsS0FBRCxFQUFBO0VBQUEsUUFBQSxPQUFXLE1BQUksQ0FBQ1MsY0FBTCxDQUFvQlQsS0FBcEIsQ0FBWCxDQUFBO0VBQUEsT0FBdkIsQ0FBQTs7RUFDQSxNQUFLVSxJQUFBQSxDQUFBQSxjQUFMLEdBQXNCLFVBQUNWLEtBQUQsRUFBQTtFQUFBLFFBQUEsT0FBVyxNQUFJLENBQUNXLGFBQUwsQ0FBbUJYLEtBQW5CLENBQVgsQ0FBQTtFQUFBLE9BQXRCLENBQUE7O0VBQ0EsTUFBS1ksSUFBQUEsQ0FBQUEsV0FBTCxHQUFtQixVQUFDWixLQUFELEVBQUE7RUFBQSxRQUFBLE9BQVcsTUFBSSxDQUFDYSxVQUFMLENBQWdCYixLQUFoQixDQUFYLENBQUE7RUFBQSxPQUFuQixDQUFBOztFQUNBLE1BQUtjLElBQUFBLENBQUFBLE9BQUwsR0FBZSxVQUFDZCxLQUFELEVBQUE7RUFBQSxRQUFBLE9BQVcsTUFBSSxDQUFDZSxRQUFMLENBQWNmLEtBQWQsQ0FBWCxDQUFBO0VBQUEsT0FBZixDQUFBOztFQUVBLE1BQUEsSUFBQSxDQUFLZ0IsT0FBTCxDQUFhN0MsZ0JBQWIsQ0FBOEJPLFdBQVcsQ0FBQ25ILEtBQTFDLEVBQWlELElBQUt3SSxDQUFBQSxVQUF0RCxFQUFrRXpCLHdCQUFzQixHQUFHO0VBQUUyQyxRQUFBQSxPQUFPLEVBQUUsS0FBQTtFQUFYLE9BQUgsR0FBd0IsS0FBaEgsQ0FBQSxDQUFBO0VBQ0EsTUFBQSxJQUFBLENBQUtELE9BQUwsQ0FBYTdDLGdCQUFiLENBQThCSyxXQUFXLENBQUNqSCxLQUExQyxFQUFpRCxJQUFLd0ksQ0FBQUEsVUFBdEQsRUFBa0V6Qix3QkFBc0IsR0FBRztFQUFFMkMsUUFBQUEsT0FBTyxFQUFFLEtBQUE7RUFBWCxPQUFILEdBQXdCLEtBQWhILENBQUEsQ0FBQTtFQUNBLE1BQUEsSUFBQSxDQUFLelUsT0FBTCxDQUFhMlIsZ0JBQWIsQ0FBOEIsV0FBOUIsRUFBMkMsS0FBS21DLGdCQUFoRCxDQUFBLENBQUE7RUFDRCxLQUFBOzs7YUFFRCxTQUFVLE9BQUEsR0FBQTtFQUNSLE1BQU90VCxPQUFBQSxLQUFLLENBQUMyQyxXQUFOLENBQWtCLElBQUEsQ0FBS25ELE9BQXZCLEVBQWdDLElBQUt3RCxDQUFBQSxPQUFMLENBQWFwQyxnQkFBN0MsQ0FBUCxDQUFBO0VBQ0QsS0FBQTs7O2FBRUQsU0FBYyxXQUFBLEdBQUE7RUFDWixNQUFBLElBQUEsQ0FBS0ksUUFBTCxHQUFnQixJQUFBLENBQUtvQixNQUFMLENBQVlsQixHQUFaLENBQWdCLElBQUEsQ0FBS2dULGtCQUFMLElBQTJCLElBQUlsVSxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsQ0FBM0MsQ0FBaEIsQ0FBQTtFQUNBLE1BQUEsT0FBTyxLQUFLZ0IsUUFBWixDQUFBO0VBQ0QsS0FBQTs7O2FBRUQsU0FBWSxTQUFBLEdBQUE7RUFDVixNQUFBLE9BQU8sSUFBS0EsQ0FBQUEsUUFBTCxDQUFjRSxHQUFkLENBQWtCLElBQUEsQ0FBSytOLE9BQUwsRUFBQSxDQUFlOU4sSUFBZixDQUFvQixHQUFwQixDQUFsQixDQUFQLENBQUE7RUFDRCxLQUFBOzs7YUFFRCxTQUF5QixxQkFBQSxHQUFBO0VBQ3ZCLE1BQUEsSUFBQSxDQUFLM0IsT0FBTCxDQUFhZ0QsS0FBYixDQUFtQnFQLGtCQUFuQixDQUF5Qy9SLEdBQUFBLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsSUFBQSxDQUFLUCxPQUE3QixDQUFBLENBQXNDcVMsa0JBQXRDLENBQXpDLENBQUE7RUFDRCxLQUFBOzs7RUFFRCxJQUFBLEtBQUEsRUFBQSxTQUFBLGNBQUEsQ0FBZTFDLElBQWYsRUFBcUI7RUFDbkIsTUFBSWdGLElBQUFBLFVBQVUsR0FBRyxJQUFLM1UsQ0FBQUEsT0FBTCxDQUFhZ0QsS0FBYixDQUFtQnFQLGtCQUFuQixDQUFqQixDQUFBO0VBQ0EsTUFBTXVDLElBQUFBLGFBQWEsR0FBZ0JqRixZQUFBQSxDQUFBQSxNQUFBQSxDQUFBQSxJQUFoQixFQUFuQixJQUFBLENBQUEsQ0FBQTs7RUFFQSxNQUFBLElBQUksQ0FBQyxrQkFBbUJrRixDQUFBQSxJQUFuQixDQUF3QkYsVUFBeEIsQ0FBTCxFQUEwQztFQUN4QyxRQUFBLElBQUlBLFVBQUosRUFBZ0I7RUFDZEEsVUFBQUEsVUFBVSxJQUFTQyxJQUFBQSxDQUFBQSxNQUFBQSxDQUFBQSxhQUFULENBQVYsQ0FBQTtFQUNELFNBRkQsTUFFTztFQUNMRCxVQUFBQSxVQUFVLEdBQUdDLGFBQWIsQ0FBQTtFQUNELFNBQUE7RUFDRixPQU5ELE1BTU87RUFDTEQsUUFBQUEsVUFBVSxHQUFHQSxVQUFVLENBQUNHLE9BQVgsQ0FBbUIsa0JBQW5CLEVBQXVDRixhQUF2QyxDQUFiLENBQUE7RUFDRCxPQUFBOztFQUVELE1BQUEsSUFBQSxDQUFLNVUsT0FBTCxDQUFhZ0QsS0FBYixDQUFtQnFQLGtCQUFuQixJQUF5Q3NDLFVBQXpDLENBQUE7RUFDRCxLQUFBOzs7RUFFRCxJQUFBLEtBQUEsRUFBQSxTQUFBLGFBQUEsQ0FBY3JOLEtBQWQsRUFBcUI7RUFDbkIsTUFBS29OLElBQUFBLENBQUFBLGtCQUFMLEdBQTBCcE4sS0FBMUIsQ0FBQTtFQUNBLE1BQU15TixJQUFBQSxZQUFZLHlCQUFrQnpOLEtBQUssQ0FBQzdHLENBQXhCLEVBQWdDNkcsTUFBQUEsQ0FBQUEsQ0FBQUEsTUFBQUEsQ0FBQUEsS0FBSyxDQUFDNUcsQ0FBdEMsRUFBbEIsVUFBQSxDQUFBLENBQUE7RUFFQSxNQUFJc1UsSUFBQUEsU0FBUyxHQUFHLElBQUtoVixDQUFBQSxPQUFMLENBQWFnRCxLQUFiLENBQW1CbVAsaUJBQW5CLENBQWhCLENBQUE7O0VBRUEsTUFBQSxJQUFJLElBQUs4QyxDQUFBQSx5QkFBTCxJQUFrQzNOLEtBQUssQ0FBQzdHLENBQU4sS0FBWSxDQUE5QyxJQUFtRDZHLEtBQUssQ0FBQzVHLENBQU4sS0FBWSxDQUFuRSxFQUFzRTtFQUNwRXNVLFFBQUFBLFNBQVMsR0FBR0EsU0FBUyxDQUFDRixPQUFWLENBQWtCLHNCQUFsQixFQUEwQyxFQUExQyxDQUFaLENBQUE7RUFDRCxPQUZELE1BRU8sSUFBSSxDQUFDLHNCQUFBLENBQXVCRCxJQUF2QixDQUE0QkcsU0FBNUIsQ0FBTCxFQUE2QztFQUNsRCxRQUFBLElBQUlBLFNBQUosRUFBZTtFQUNiQSxVQUFBQSxTQUFTLElBQUksR0FBYixDQUFBO0VBQ0QsU0FBQTs7RUFDREEsUUFBQUEsU0FBUyxJQUFJRCxZQUFiLENBQUE7RUFDRCxPQUxNLE1BS0E7RUFDTEMsUUFBQUEsU0FBUyxHQUFHQSxTQUFTLENBQUNGLE9BQVYsQ0FBa0Isc0JBQWxCLEVBQTBDQyxZQUExQyxDQUFaLENBQUE7RUFDRCxPQUFBOztFQUVELE1BQUEsSUFBQSxDQUFLL1UsT0FBTCxDQUFhZ0QsS0FBYixDQUFtQm1QLGlCQUFuQixJQUF3QzZDLFNBQXhDLENBQUE7RUFDRCxLQUFBOzs7RUFFRCxJQUFBLEtBQUEsRUFBQSxTQUFBLElBQUEsQ0FBSzFOLEtBQUwsRUFBb0M7RUFBQSxNQUF4QnFJLElBQUFBLElBQXdCLHVFQUFuQixDQUFtQixDQUFBO0VBQUEsTUFBaEJ1RixJQUFBQSxRQUFnQix1RUFBUCxLQUFPLENBQUE7RUFDbEM1TixNQUFBQSxLQUFLLEdBQUdBLEtBQUssQ0FBQzhCLEtBQU4sRUFBUixDQUFBO0VBRUEsTUFBSytMLElBQUFBLENBQUFBLGtCQUFMLENBQXdCN04sS0FBeEIsQ0FBQSxDQUFBO0VBQ0EsTUFBSzlGLElBQUFBLENBQUFBLFFBQUwsR0FBZ0I4RixLQUFoQixDQUFBOztFQUVBLE1BQUs4TixJQUFBQSxDQUFBQSxjQUFMLENBQW9CekYsSUFBcEIsQ0FBQSxDQUFBOztFQUNBLE1BQUswRixJQUFBQSxDQUFBQSxhQUFMLENBQW1CL04sS0FBSyxDQUFDdEYsR0FBTixDQUFVLElBQUEsQ0FBS1ksTUFBZixDQUFuQixDQUFBLENBQUE7O0VBRUEsTUFBSSxJQUFBLENBQUNzUyxRQUFMLEVBQWU7RUFDYixRQUFLM0csSUFBQUEsQ0FBQUEsSUFBTCxDQUFVLFdBQVYsQ0FBQSxDQUFBO0VBQ0QsT0FBQTtFQUNGLEtBQUE7OztFQUVELElBQUEsS0FBQSxFQUFBLFNBQUEsV0FBQSxDQUFZakgsS0FBWixFQUF3QztFQUFBLE1BQXJCcUksSUFBQUEsSUFBcUIsdUVBQWhCLENBQWdCLENBQUE7RUFBQSxNQUFiMkYsSUFBQUEsTUFBYSx1RUFBTixJQUFNLENBQUE7RUFDdEMsTUFBQSxJQUFBLENBQUtoQyxjQUFMLEdBQXNCaE0sS0FBSyxDQUFDOEIsS0FBTixFQUF0QixDQUFBO0VBQ0EsTUFBQSxJQUFBLENBQUt3RyxJQUFMLENBQVUsSUFBQSxDQUFLMEQsY0FBZixFQUErQjNELElBQS9CLEVBQXFDMkYsTUFBckMsQ0FBQSxDQUFBO0VBQ0QsS0FBQTs7O2FBRUQsU0FBMEIsc0JBQUEsR0FBQTtFQUN4QixNQUFLNUUsSUFBQUEsQ0FBQUEsV0FBTCxDQUFpQixJQUFBLENBQUtiLGVBQXRCLENBQUEsQ0FBQTtFQUNELEtBQUE7OzthQUVELFNBQW1CLGVBQUEsR0FBQTtFQUNqQixNQUFBLElBQUEsQ0FBS1osV0FBTCxDQUFpQixJQUFLckMsQ0FBQUEsV0FBTCxFQUFqQixDQUFBLENBQUE7RUFDRCxLQUFBOzs7RUFFRCxJQUFBLEtBQUEsRUFBQSxTQUFBLFdBQUEsQ0FBWXRGLEtBQVosRUFBbUI7RUFDakJBLE1BQUFBLEtBQUssR0FBR0EsS0FBSyxDQUFDOEIsS0FBTixFQUFSLENBQUE7RUFDQSxNQUFLNUgsSUFBQUEsQ0FBQUEsUUFBTCxHQUFnQjhGLEtBQWhCLENBQUE7O0VBQ0EsTUFBSzhOLElBQUFBLENBQUFBLGNBQUwsQ0FBb0IsQ0FBcEIsQ0FBQSxDQUFBOztFQUNBLE1BQUtDLElBQUFBLENBQUFBLGFBQUwsQ0FBbUIvTixLQUFLLENBQUN0RixHQUFOLENBQVUsSUFBQSxDQUFLWSxNQUFmLENBQW5CLENBQUEsQ0FBQTtFQUNELEtBQUE7OztFQUVELElBQUEsS0FBQSxFQUFBLFNBQUEsa0JBQUEsQ0FBbUIwRSxLQUFuQixFQUEwQjtFQUN4QixNQUFLaU8sSUFBQUEsQ0FBQUEsYUFBTCxHQUFzQixJQUFLL1QsQ0FBQUEsUUFBTCxDQUFjZixDQUFkLEdBQWtCNkcsS0FBSyxDQUFDN0csQ0FBOUMsQ0FBQTtFQUNBLE1BQUsrVSxJQUFBQSxDQUFBQSxjQUFMLEdBQXVCLElBQUtoVSxDQUFBQSxRQUFMLENBQWNmLENBQWQsR0FBa0I2RyxLQUFLLENBQUM3RyxDQUEvQyxDQUFBO0VBQ0EsTUFBS2dWLElBQUFBLENBQUFBLFdBQUwsR0FBb0IsSUFBS2pVLENBQUFBLFFBQUwsQ0FBY2QsQ0FBZCxHQUFrQjRHLEtBQUssQ0FBQzVHLENBQTVDLENBQUE7RUFDQSxNQUFLZ1YsSUFBQUEsQ0FBQUEsYUFBTCxHQUFzQixJQUFLbFUsQ0FBQUEsUUFBTCxDQUFjZCxDQUFkLEdBQWtCNEcsS0FBSyxDQUFDNUcsQ0FBOUMsQ0FBQTtFQUNELEtBQUE7OztFQUVELElBQUEsS0FBQSxFQUFBLFNBQUEsU0FBQSxDQUFVOFMsS0FBVixFQUFpQjtFQUNmLE1BQUttQyxJQUFBQSxDQUFBQSxZQUFMLEdBQW9CbkMsS0FBcEIsQ0FBQTs7RUFDQSxNQUFJLElBQUEsQ0FBQyxJQUFLTixDQUFBQSxPQUFWLEVBQW1CO0VBQ2pCLFFBQUEsT0FBQTtFQUNELE9BQUE7O0VBRUQsTUFBTTBDLElBQUFBLFlBQVksR0FBSTdELE9BQU8sSUFBS3lCLEtBQUssWUFBWWxULE1BQU0sQ0FBQ3VWLFVBQTFELENBQUE7RUFFQSxNQUFBLElBQUEsQ0FBS0MsVUFBTCxHQUFrQixJQUFLQyxDQUFBQSxnQkFBTCxHQUF3QixJQUFJdlYsS0FBSixDQUN4Q29WLFlBQVksR0FBR3BDLEtBQUssQ0FBQ2hCLGNBQU4sQ0FBcUIsQ0FBckIsQ0FBd0J3RCxDQUFBQSxLQUEzQixHQUFtQ3hDLEtBQUssQ0FBQ3lDLE9BRGIsRUFFeENMLFlBQVksR0FBR3BDLEtBQUssQ0FBQ2hCLGNBQU4sQ0FBcUIsQ0FBckIsRUFBd0IwRCxLQUEzQixHQUFtQzFDLEtBQUssQ0FBQzJDLE9BRmIsQ0FBMUMsQ0FBQTtFQUtBLE1BQUEsSUFBQSxDQUFLQyxjQUFMLEdBQXNCLElBQUt4SixDQUFBQSxXQUFMLEVBQXRCLENBQUE7O0VBQ0EsTUFBQSxJQUFJZ0osWUFBSixFQUFrQjtFQUNoQixRQUFLUyxJQUFBQSxDQUFBQSxRQUFMLEdBQWdCN0MsS0FBSyxDQUFDaEIsY0FBTixDQUFxQixDQUFyQixFQUF3QkMsVUFBeEMsQ0FBQTtFQUNELE9BQUE7O0VBRUQsTUFBQSxJQUFBLENBQUs2RCxpQkFBTCxHQUF5QixJQUFJOVYsS0FBSixDQUFVRixNQUFNLENBQUNpVyxPQUFqQixFQUEwQmpXLE1BQU0sQ0FBQ2tXLE9BQWpDLENBQXpCLENBQUE7RUFFQWhELE1BQUFBLEtBQUssQ0FBQ2lELGVBQU4sRUFBQSxDQUFBOztFQUNBLE1BQUEsSUFBSWpELEtBQUssQ0FBQzVGLE1BQU4sWUFBd0J0TixNQUFNLENBQUNvVyxnQkFBL0IsSUFDRWxELEtBQUssQ0FBQzVGLE1BQU4sWUFBd0J0TixNQUFNLENBQUNvVyxnQkFEckMsRUFDdUQ7RUFDckRsRCxRQUFBQSxLQUFLLENBQUM1RixNQUFOLENBQWErSSxLQUFiLEVBQUEsQ0FBQTtFQUNELE9BQUE7O0VBRUQsTUFBSSxJQUFBLEVBQUUsS0FBS0MsaUJBQUwsSUFDRXBELEtBQUssQ0FBQzVGLE1BQU4sWUFBd0J0TixNQUFNLENBQUNvVyxnQkFEakMsSUFFRWxELEtBQUssQ0FBQzVGLE1BQU4sWUFBd0J0TixNQUFNLENBQUNvVyxnQkFGbkMsQ0FBSixFQUUwRDtFQUN4RGxELFFBQUFBLEtBQUssQ0FBQ3FELGNBQU4sRUFBQSxDQUFBO0VBQ0QsT0FBQTs7RUFFRCxNQUFJLElBQUEsSUFBQSxDQUFLRCxpQkFBVCxFQUE0QjtFQUMxQixRQUFNRSxJQUFBQSxRQUFRLEdBQUcsMEJBQUEsQ0FBMkJqQyxJQUEzQixDQUFnQ3ZVLE1BQU0sQ0FBQ3lXLFNBQVAsQ0FBaUJDLFNBQWpELENBQWpCLENBQUE7O0VBQ0EsUUFBS3BCLElBQUFBLFlBQVksSUFBSSxJQUFLcUIsQ0FBQUEsK0JBQXRCLElBQ0dILFFBREgsSUFFRyxJQUFLSSxDQUFBQSw4QkFGWixFQUU0QztFQUMxQyxVQUFLQyxJQUFBQSxDQUFBQSx3QkFBTCxDQUE4QjNELEtBQTlCLENBQUEsQ0FBQTtFQUNELFNBSkQsTUFJTztFQUNMLFVBQUEsSUFBQSxDQUFLeFQsT0FBTCxDQUFhc00sU0FBYixHQUF5QixJQUF6QixDQUFBO0VBQ0F4SixVQUFBQSxRQUFRLENBQUM2TyxnQkFBVCxDQUEwQkssV0FBVyxDQUFDQyxHQUF0QyxFQUEyQyxJQUFLaUMsQ0FBQUEsY0FBaEQsRUFBZ0VwQyx3QkFBc0IsR0FBRztFQUFFMkMsWUFBQUEsT0FBTyxFQUFFLEtBQUE7RUFBWCxXQUFILEdBQXdCLEtBQTlHLENBQUEsQ0FBQTtFQUNELFNBQUE7RUFDRixPQVZELE1BVU87RUFDTDNSLFFBQUFBLFFBQVEsQ0FBQzZPLGdCQUFULENBQTBCTyxXQUFXLENBQUN0QyxJQUF0QyxFQUE0QyxJQUFLOEQsQ0FBQUEsU0FBakQsRUFBNEQ1Qix3QkFBc0IsR0FBRztFQUFFMkMsVUFBQUEsT0FBTyxFQUFFLEtBQUE7RUFBWCxTQUFILEdBQXdCLEtBQTFHLENBQUEsQ0FBQTtFQUNBM1IsUUFBQUEsUUFBUSxDQUFDNk8sZ0JBQVQsQ0FBMEJLLFdBQVcsQ0FBQ3BDLElBQXRDLEVBQTRDLElBQUs4RCxDQUFBQSxTQUFqRCxFQUE0RDVCLHdCQUFzQixHQUFHO0VBQUUyQyxVQUFBQSxPQUFPLEVBQUUsS0FBQTtFQUFYLFNBQUgsR0FBd0IsS0FBMUcsQ0FBQSxDQUFBO0VBRUEzUixRQUFBQSxRQUFRLENBQUM2TyxnQkFBVCxDQUEwQk8sV0FBVyxDQUFDRCxHQUF0QyxFQUEyQyxJQUFLMkIsQ0FBQUEsUUFBaEQsRUFBMEQ5Qix3QkFBc0IsR0FBRztFQUFFMkMsVUFBQUEsT0FBTyxFQUFFLEtBQUE7RUFBWCxTQUFILEdBQXdCLEtBQXhHLENBQUEsQ0FBQTtFQUNBM1IsUUFBQUEsUUFBUSxDQUFDNk8sZ0JBQVQsQ0FBMEJLLFdBQVcsQ0FBQ0MsR0FBdEMsRUFBMkMsSUFBSzJCLENBQUFBLFFBQWhELEVBQTBEOUIsd0JBQXNCLEdBQUc7RUFBRTJDLFVBQUFBLE9BQU8sRUFBRSxLQUFBO0VBQVgsU0FBSCxHQUF3QixLQUF4RyxDQUFBLENBQUE7RUFDRCxPQUFBOztFQUVEblUsTUFBQUEsTUFBTSxDQUFDcVIsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsS0FBSzJDLE9BQXZDLENBQUEsQ0FBQTtFQUVBLE1BQUs4QyxJQUFBQSxDQUFBQSxVQUFMLEdBQWtCLElBQWxCLENBQUE7RUFDQSxNQUFLN0ksSUFBQUEsQ0FBQUEsSUFBTCxDQUFVLFlBQVYsQ0FBQSxDQUFBO0VBQ0QsS0FBQTs7O2FBRUQsU0FBZSxZQUFBLEdBQUE7RUFDYnpMLE1BQUFBLFFBQVEsQ0FBQzhPLG1CQUFULENBQTZCTSxXQUFXLENBQUN0QyxJQUF6QyxFQUErQyxJQUFBLENBQUs4RCxTQUFwRCxDQUFBLENBQUE7RUFDQTVRLE1BQUFBLFFBQVEsQ0FBQzhPLG1CQUFULENBQTZCSSxXQUFXLENBQUNwQyxJQUF6QyxFQUErQyxJQUFBLENBQUs4RCxTQUFwRCxDQUFBLENBQUE7RUFDQTVRLE1BQUFBLFFBQVEsQ0FBQzhPLG1CQUFULENBQTZCTSxXQUFXLENBQUNELEdBQXpDLEVBQThDLElBQUEsQ0FBSzJCLFFBQW5ELENBQUEsQ0FBQTtFQUNBOVEsTUFBQUEsUUFBUSxDQUFDOE8sbUJBQVQsQ0FBNkJJLFdBQVcsQ0FBQ0MsR0FBekMsRUFBOEMsSUFBQSxDQUFLMkIsUUFBbkQsQ0FBQSxDQUFBO0VBQ0E5USxNQUFBQSxRQUFRLENBQUM4TyxtQkFBVCxDQUE2QixVQUE3QixFQUF5QyxLQUFLb0MsZUFBOUMsQ0FBQSxDQUFBO0VBQ0FsUixNQUFBQSxRQUFRLENBQUM4TyxtQkFBVCxDQUE2QixTQUE3QixFQUF3QyxLQUFLc0MsY0FBN0MsQ0FBQSxDQUFBO0VBQ0FwUixNQUFBQSxRQUFRLENBQUM4TyxtQkFBVCxDQUE2QkksV0FBVyxDQUFDQyxHQUF6QyxFQUE4QyxJQUFBLENBQUtpQyxjQUFuRCxDQUFBLENBQUE7RUFDQXBSLE1BQUFBLFFBQVEsQ0FBQzhPLG1CQUFULENBQTZCLE1BQTdCLEVBQXFDLEtBQUt3QyxXQUExQyxDQUFBLENBQUE7RUFDQXRSLE1BQUFBLFFBQVEsQ0FBQzhPLG1CQUFULENBQTZCLE1BQTdCLEVBQXFDLEtBQUt3QyxXQUExQyxDQUFBLENBQUE7RUFDQTlULE1BQUFBLE1BQU0sQ0FBQ3NSLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDLEtBQUswQyxPQUExQyxDQUFBLENBQUE7RUFDQSxNQUFBLElBQUEsQ0FBS3RVLE9BQUwsQ0FBYXNNLFNBQWIsR0FBeUIsS0FBekIsQ0FBQTtFQUNBLE1BQUs4SyxJQUFBQSxDQUFBQSxVQUFMLEdBQWtCLEtBQWxCLENBQUE7RUFDQSxNQUFBLElBQUEsQ0FBS3BYLE9BQUwsQ0FBYXFYLFNBQWIsQ0FBdUJySCxNQUF2QixDQUE4QixlQUE5QixDQUFBLENBQUE7RUFDRCxLQUFBOzs7RUFFRCxJQUFBLEtBQUEsRUFBQSxTQUFBLFFBQUEsQ0FBU3dELEtBQVQsRUFBZ0I7RUFDZCxNQUFLbUMsSUFBQUEsQ0FBQUEsWUFBTCxHQUFvQm5DLEtBQXBCLENBQUE7RUFDQSxNQUFBLElBQUk4RCxLQUFKLENBQUE7RUFFQSxNQUFNMUIsSUFBQUEsWUFBWSxHQUFJN0QsT0FBTyxJQUFLeUIsS0FBSyxZQUFZbFQsTUFBTSxDQUFDdVYsVUFBMUQsQ0FBQTs7RUFDQSxNQUFBLElBQUlELFlBQUosRUFBa0I7RUFDaEIwQixRQUFBQSxLQUFLLEdBQUdoRixZQUFZLENBQUNrQixLQUFELEVBQVEsSUFBQSxDQUFLNkMsUUFBYixDQUFwQixDQUFBOztFQUVBLFFBQUksSUFBQSxDQUFDaUIsS0FBTCxFQUFZO0VBQ1YsVUFBQSxPQUFBO0VBQ0QsU0FBQTtFQUNGLE9BQUE7O0VBRUQ5RCxNQUFBQSxLQUFLLENBQUNpRCxlQUFOLEVBQUEsQ0FBQTtFQUNBakQsTUFBQUEsS0FBSyxDQUFDcUQsY0FBTixFQUFBLENBQUE7RUFDQSxNQUFLZixJQUFBQSxDQUFBQSxVQUFMLEdBQWtCLElBQUl0VixLQUFKLENBQ2hCb1YsWUFBWSxHQUFHMEIsS0FBSyxDQUFDdEIsS0FBVCxHQUFpQnhDLEtBQUssQ0FBQ3lDLE9BRG5CLEVBRWhCTCxZQUFZLEdBQUcwQixLQUFLLENBQUNwQixLQUFULEdBQWlCMUMsS0FBSyxDQUFDMkMsT0FGbkIsQ0FBbEIsQ0FBQTs7RUFLQSxNQUFJN08sSUFBQUEsS0FBSyxHQUFHLElBQUEsQ0FBSzhPLGNBQUwsQ0FBb0IxVSxHQUFwQixDQUF3QixJQUFLb1UsQ0FBQUEsVUFBTCxDQUFnQjlULEdBQWhCLENBQW9CLElBQUEsQ0FBSytULGdCQUF6QixDQUF4QixDQUFBLENBQ29CclUsR0FEcEIsQ0FDd0IsSUFBSzZWLENBQUFBLFdBQUwsQ0FBaUJ2VixHQUFqQixDQUFxQixJQUFBLENBQUtzVSxpQkFBMUIsQ0FEeEIsQ0FBWixDQUFBOztFQUdBaFAsTUFBQUEsS0FBSyxHQUFHLElBQUtvSCxDQUFBQSxRQUFMLENBQWMxRixLQUFkLENBQW9CMUIsS0FBcEIsRUFBMkIsSUFBQSxDQUFLbUksT0FBTCxFQUEzQixDQUFSLENBQUE7RUFDQSxNQUFLRyxJQUFBQSxDQUFBQSxJQUFMLENBQVV0SSxLQUFWLENBQUEsQ0FBQTtFQUNBLE1BQUEsSUFBQSxDQUFLdEgsT0FBTCxDQUFhcVgsU0FBYixDQUF1QjNWLEdBQXZCLENBQTJCLGVBQTNCLENBQUEsQ0FBQTtFQUNELEtBQUE7OztFQUVELElBQUEsS0FBQSxFQUFBLFNBQUEsT0FBQSxDQUFROFIsS0FBUixFQUFlO0VBQUEsTUFBQSxJQUFBLE1BQUEsR0FBQSxJQUFBLENBQUE7O0VBQ2IsTUFBTW9DLElBQUFBLFlBQVksR0FBSTdELE9BQU8sSUFBS3lCLEtBQUssWUFBWWxULE1BQU0sQ0FBQ3VWLFVBQTFELENBQUE7O0VBRUEsTUFBSUQsSUFBQUEsWUFBWSxJQUFJLENBQUN0RCxZQUFZLENBQUNrQixLQUFELEVBQVEsSUFBQSxDQUFLNkMsUUFBYixDQUFqQyxFQUF5RDtFQUN2RCxRQUFBLE9BQUE7RUFDRCxPQUFBOztFQUVEN0MsTUFBQUEsS0FBSyxDQUFDaUQsZUFBTixFQUFBLENBQUE7RUFDQWpELE1BQUFBLEtBQUssQ0FBQ3FELGNBQU4sRUFBQSxDQUFBO0VBQ0EsTUFBQSxJQUFBLENBQUt6RyxhQUFMLEVBQUEsQ0FBQTtFQUNBLE1BQUs3QixJQUFBQSxDQUFBQSxJQUFMLENBQVUsVUFBVixDQUFBLENBQUE7RUFFQXpMLE1BQUFBLFFBQVEsQ0FBQzhPLG1CQUFULENBQTZCTSxXQUFXLENBQUN0QyxJQUF6QyxFQUErQyxJQUFBLENBQUs4RCxTQUFwRCxDQUFBLENBQUE7RUFDQTVRLE1BQUFBLFFBQVEsQ0FBQzhPLG1CQUFULENBQTZCSSxXQUFXLENBQUNwQyxJQUF6QyxFQUErQyxJQUFBLENBQUs4RCxTQUFwRCxDQUFBLENBQUE7RUFFQTVRLE1BQUFBLFFBQVEsQ0FBQzhPLG1CQUFULENBQTZCTSxXQUFXLENBQUNELEdBQXpDLEVBQThDLElBQUEsQ0FBSzJCLFFBQW5ELENBQUEsQ0FBQTtFQUNBOVEsTUFBQUEsUUFBUSxDQUFDOE8sbUJBQVQsQ0FBNkJJLFdBQVcsQ0FBQ0MsR0FBekMsRUFBOEMsSUFBQSxDQUFLMkIsUUFBbkQsQ0FBQSxDQUFBO0VBRUF0VCxNQUFBQSxNQUFNLENBQUNzUixtQkFBUCxDQUEyQixRQUEzQixFQUFxQyxLQUFLMEMsT0FBMUMsQ0FBQSxDQUFBO0VBRUEsTUFBSzhDLElBQUFBLENBQUFBLFVBQUwsR0FBa0IsS0FBbEIsQ0FBQTtFQUNBLE1BQUEsSUFBQSxDQUFLcFgsT0FBTCxDQUFhd1gsZUFBYixDQUE2QixXQUE3QixDQUFBLENBQUE7RUFDQUMsTUFBQUEsVUFBVSxDQUFDLFlBQUE7RUFBQSxRQUFNLE9BQUEsTUFBSSxDQUFDelgsT0FBTCxDQUFhcVgsU0FBYixDQUF1QnJILE1BQXZCLENBQThCLGVBQTlCLENBQU4sQ0FBQTtFQUFBLE9BQUQsQ0FBVixDQUFBO0VBQ0QsS0FBQTs7O0VBRUQsSUFBQSxLQUFBLEVBQUEsU0FBQSxRQUFBLENBQVMwSCxNQUFULEVBQWlCO0VBQ2YsTUFBSXBRLElBQUFBLEtBQUssR0FBRyxJQUFBLENBQUs4TyxjQUFMLENBQW9CMVUsR0FBcEIsQ0FBd0IsSUFBS29VLENBQUFBLFVBQUwsQ0FBZ0I5VCxHQUFoQixDQUFvQixJQUFBLENBQUsrVCxnQkFBekIsQ0FBeEIsQ0FBQSxDQUNvQnJVLEdBRHBCLENBQ3dCLElBQUs2VixDQUFBQSxXQUFMLENBQWlCdlYsR0FBakIsQ0FBcUIsSUFBQSxDQUFLc1UsaUJBQTFCLENBRHhCLENBQVosQ0FBQTs7RUFHQWhQLE1BQUFBLEtBQUssR0FBRyxJQUFLb0gsQ0FBQUEsUUFBTCxDQUFjMUYsS0FBZCxDQUFvQjFCLEtBQXBCLEVBQTJCLElBQUEsQ0FBS21JLE9BQUwsRUFBM0IsQ0FBUixDQUFBOztFQUNBLE1BQUksSUFBQSxDQUFDLElBQUttSCxDQUFBQSxpQkFBVixFQUE2QjtFQUMzQixRQUFLaEgsSUFBQUEsQ0FBQUEsSUFBTCxDQUFVdEksS0FBVixDQUFBLENBQUE7RUFDRCxPQUFBO0VBQ0YsS0FBQTs7O0VBRUQsSUFBQSxLQUFBLEVBQUEsU0FBQSxlQUFBLENBQWdCa00sS0FBaEIsRUFBdUI7RUFDckJBLE1BQUFBLEtBQUssQ0FBQ21FLFlBQU4sQ0FBbUJDLE9BQW5CLENBQTJCLE1BQTNCLEVBQW1DLGFBQW5DLENBQUEsQ0FBQTtFQUNBcEUsTUFBQUEsS0FBSyxDQUFDbUUsWUFBTixDQUFtQkUsYUFBbkIsR0FBbUMsTUFBbkMsQ0FBQTtFQUNBL1UsTUFBQUEsUUFBUSxDQUFDNk8sZ0JBQVQsQ0FBMEIsVUFBMUIsRUFBc0MsS0FBS3FDLGVBQTNDLENBQUEsQ0FBQTtFQUNBbFIsTUFBQUEsUUFBUSxDQUFDNk8sZ0JBQVQsQ0FBMEIsU0FBMUIsRUFBcUMsS0FBS3VDLGNBQTFDLENBQUEsQ0FBQTtFQUNBcFIsTUFBQUEsUUFBUSxDQUFDNk8sZ0JBQVQsQ0FBMEIsTUFBMUIsRUFBa0MsS0FBS3lDLFdBQXZDLENBQUEsQ0FBQTtFQUNELEtBQUE7OztFQUVELElBQUEsS0FBQSxFQUFBLFNBQUEsY0FBQSxDQUFlWixLQUFmLEVBQXNCO0VBQ3BCQSxNQUFBQSxLQUFLLENBQUNxRCxjQUFOLEVBQUEsQ0FBQTtFQUNBckQsTUFBQUEsS0FBSyxDQUFDbUUsWUFBTixDQUFtQkcsVUFBbkIsR0FBZ0MsTUFBaEMsQ0FBQTtFQUNBLE1BQUEsSUFBQSxDQUFLOVgsT0FBTCxDQUFhcVgsU0FBYixDQUF1QjNWLEdBQXZCLENBQTJCLG9CQUEzQixDQUFBLENBQUE7RUFDQSxNQUFLaVUsSUFBQUEsQ0FBQUEsWUFBTCxHQUFvQm5DLEtBQXBCLENBQUE7O0VBQ0EsTUFBSUEsSUFBQUEsS0FBSyxDQUFDeUMsT0FBTixLQUFrQixDQUFsQixJQUF1QnpDLEtBQUssQ0FBQzJDLE9BQU4sS0FBa0IsQ0FBN0MsRUFBZ0Q7RUFDOUMsUUFBQSxPQUFBO0VBQ0QsT0FBQTs7RUFFRCxNQUFBLElBQUEsQ0FBS0wsVUFBTCxHQUFrQixJQUFJdFYsS0FBSixDQUFVZ1QsS0FBSyxDQUFDeUMsT0FBaEIsRUFBeUJ6QyxLQUFLLENBQUMyQyxPQUEvQixDQUFsQixDQUFBOztFQUNBLE1BQUk3TyxJQUFBQSxLQUFLLEdBQUcsSUFBQSxDQUFLOE8sY0FBTCxDQUFvQjFVLEdBQXBCLENBQXdCLElBQUtvVSxDQUFBQSxVQUFMLENBQWdCOVQsR0FBaEIsQ0FBb0IsSUFBQSxDQUFLK1QsZ0JBQXpCLENBQXhCLENBQUEsQ0FDb0JyVSxHQURwQixDQUN3QixJQUFLNlYsQ0FBQUEsV0FBTCxDQUFpQnZWLEdBQWpCLENBQXFCLElBQUEsQ0FBS3NVLGlCQUExQixDQUR4QixDQUFaLENBQUE7O0VBRUFoUCxNQUFBQSxLQUFLLEdBQUcsSUFBS29ILENBQUFBLFFBQUwsQ0FBYzFGLEtBQWQsQ0FBb0IxQixLQUFwQixFQUEyQixJQUFBLENBQUttSSxPQUFMLEVBQTNCLENBQVIsQ0FBQTtFQUNBLE1BQUtqTyxJQUFBQSxDQUFBQSxRQUFMLEdBQWdCOEYsS0FBaEIsQ0FBQTtFQUNBLE1BQUtpSCxJQUFBQSxDQUFBQSxJQUFMLENBQVUsV0FBVixDQUFBLENBQUE7RUFDRCxLQUFBOzs7RUFFRCxJQUFBLEtBQUEsRUFBQSxTQUFBLGFBQUEsQ0FBY21KLE1BQWQsRUFBc0I7RUFDcEIsTUFBQSxJQUFBLENBQUsxWCxPQUFMLENBQWFxWCxTQUFiLENBQXVCckgsTUFBdkIsQ0FBOEIsb0JBQTlCLENBQUEsQ0FBQTtFQUNBLE1BQUEsSUFBQSxDQUFLSSxhQUFMLEVBQUEsQ0FBQTtFQUNBLE1BQUs3QixJQUFBQSxDQUFBQSxJQUFMLENBQVUsVUFBVixDQUFBLENBQUE7RUFDQXpMLE1BQUFBLFFBQVEsQ0FBQzhPLG1CQUFULENBQTZCLFVBQTdCLEVBQXlDLEtBQUtvQyxlQUE5QyxDQUFBLENBQUE7RUFDQWxSLE1BQUFBLFFBQVEsQ0FBQzhPLG1CQUFULENBQTZCLFNBQTdCLEVBQXdDLEtBQUtzQyxjQUE3QyxDQUFBLENBQUE7RUFDQXBSLE1BQUFBLFFBQVEsQ0FBQzhPLG1CQUFULENBQTZCSSxXQUFXLENBQUNDLEdBQXpDLEVBQThDLElBQUEsQ0FBS2lDLGNBQW5ELENBQUEsQ0FBQTtFQUNBcFIsTUFBQUEsUUFBUSxDQUFDOE8sbUJBQVQsQ0FBNkIsTUFBN0IsRUFBcUMsS0FBS3dDLFdBQTFDLENBQUEsQ0FBQTtFQUNBOVQsTUFBQUEsTUFBTSxDQUFDc1IsbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUMsS0FBSzBDLE9BQTFDLENBQUEsQ0FBQTtFQUNBLE1BQUs4QyxJQUFBQSxDQUFBQSxVQUFMLEdBQWtCLEtBQWxCLENBQUE7RUFDQSxNQUFBLElBQUEsQ0FBS3BYLE9BQUwsQ0FBYXdYLGVBQWIsQ0FBNkIsV0FBN0IsQ0FBQSxDQUFBO0VBQ0EsTUFBQSxJQUFBLENBQUt4WCxPQUFMLENBQWFxWCxTQUFiLENBQXVCckgsTUFBdkIsQ0FBOEIsZUFBOUIsQ0FBQSxDQUFBO0VBQ0QsS0FBQTs7O0VBRUQsSUFBQSxLQUFBLEVBQUEsU0FBQSxVQUFBLENBQVd3RCxLQUFYLEVBQWtCO0VBQ2hCQSxNQUFBQSxLQUFLLENBQUNpRCxlQUFOLEVBQUEsQ0FBQTtFQUNBakQsTUFBQUEsS0FBSyxDQUFDcUQsY0FBTixFQUFBLENBQUE7RUFDRCxLQUFBOzs7RUFFRCxJQUFBLEtBQUEsRUFBQSxTQUFBLHdCQUFBLENBQXlCckQsS0FBekIsRUFBZ0M7RUFBQSxNQUFBLElBQUEsTUFBQSxHQUFBLElBQUEsQ0FBQTs7RUFDOUIsTUFBQSxJQUFNdUUsYUFBYSxHQUFHLElBQUEsQ0FBSzFVLFNBQUwsQ0FBZXJDLHFCQUFmLEVBQXRCLENBQUE7RUFDQSxNQUFNZ1gsSUFBQUEsYUFBYSxHQUFHLElBQUtoWSxDQUFBQSxPQUFMLENBQWFpWSxTQUFiLENBQXVCLElBQXZCLENBQXRCLENBQUE7RUFDQUQsTUFBQUEsYUFBYSxDQUFDaFYsS0FBZCxDQUFvQm1QLGlCQUFwQixJQUF5QyxFQUF6QyxDQUFBO0VBQ0FTLE1BQUFBLFVBQVUsQ0FBQyxJQUFBLENBQUs1UyxPQUFOLEVBQWVnWSxhQUFmLENBQVYsQ0FBQTtFQUNBQSxNQUFBQSxhQUFhLENBQUNoVixLQUFkLENBQW9CeEIsUUFBcEIsR0FBK0IsVUFBL0IsQ0FBQTtFQUNBc0IsTUFBQUEsUUFBUSxDQUFDb1YsSUFBVCxDQUFjQyxXQUFkLENBQTBCSCxhQUExQixDQUFBLENBQUE7RUFDQSxNQUFBLElBQUEsQ0FBS2hZLE9BQUwsQ0FBYXFYLFNBQWIsQ0FBdUIzVixHQUF2QixDQUEyQixvQkFBM0IsQ0FBQSxDQUFBO0VBRUEsTUFBQSxJQUFNMFcsa0JBQWtCLEdBQUcsSUFBSWpILFNBQUosQ0FBYzZHLGFBQWQsRUFBNkI7RUFDdEQzVSxRQUFBQSxTQUFTLEVBQUVQLFFBQVEsQ0FBQ29WLElBRGtDO0VBRXREbFAsUUFBQUEsS0FGc0QsRUFFaEQxQixTQUFBQSxLQUFBQSxDQUFBQSxLQUZnRCxFQUV6QztFQUNYLFVBQUEsT0FBT0EsS0FBUCxDQUFBO0VBQ0QsU0FKcUQ7RUFLdEQ1RCxRQUFBQSxFQUFFLEVBQUU7RUFDRixVQUFBLFdBQUEsRUFBYSxTQUFNLFFBQUEsR0FBQTtFQUNqQixZQUFBLElBQU0yVSxrQkFBa0IsR0FBRyxJQUFJN1gsS0FBSixDQUFVdVgsYUFBYSxDQUFDN1csSUFBeEIsRUFBOEI2VyxhQUFhLENBQUM1VyxHQUE1QyxDQUEzQixDQUFBO0VBQ0EsWUFBQSxNQUFJLENBQUNLLFFBQUwsR0FBZ0I0VyxrQkFBa0IsQ0FBQzVXLFFBQW5CLENBQTRCUSxHQUE1QixDQUFnQ3FXLGtCQUFoQyxDQUM0QnJXLENBQUFBLEdBRDVCLENBQ2dDLE1BQUksQ0FBQ3NVLGlCQURyQyxDQUFoQixDQUFBOztFQUVBLFlBQUEsTUFBSSxDQUFDL0gsSUFBTCxDQUFVLFdBQVYsQ0FBQSxDQUFBO0VBQ0QsV0FOQztFQU9GLFVBQUEsVUFBQSxFQUFZLFNBQU0sT0FBQSxHQUFBO0VBQ2hCNkosWUFBQUEsa0JBQWtCLENBQUNFLE9BQW5CLEVBQUEsQ0FBQTtFQUNBeFYsWUFBQUEsUUFBUSxDQUFDb1YsSUFBVCxDQUFjSyxXQUFkLENBQTBCUCxhQUExQixDQUFBLENBQUE7O0VBQ0EsWUFBQSxNQUFJLENBQUNoWSxPQUFMLENBQWFxWCxTQUFiLENBQXVCckgsTUFBdkIsQ0FBOEIsb0JBQTlCLENBQUEsQ0FBQTs7RUFDQSxZQUFBLE1BQUksQ0FBQ2hRLE9BQUwsQ0FBYXFYLFNBQWIsQ0FBdUJySCxNQUF2QixDQUE4QixlQUE5QixDQUFBLENBQUE7RUFDRCxXQUFBO0VBWkMsU0FBQTtFQUxrRCxPQUE3QixDQUEzQixDQUFBO0VBcUJBLE1BQUEsSUFBTXFJLGtCQUFrQixHQUFHLElBQUk3WCxLQUFKLENBQVV1WCxhQUFhLENBQUM3VyxJQUF4QixFQUE4QjZXLGFBQWEsQ0FBQzVXLEdBQTVDLENBQTNCLENBQUE7RUFDQWlYLE1BQUFBLGtCQUFrQixDQUFDOUIsaUJBQW5CLEdBQXVDLEtBQUtBLGlCQUE1QyxDQUFBO0VBRUE4QixNQUFBQSxrQkFBa0IsQ0FBQ3hJLElBQW5CLENBQ0UsSUFBQSxDQUFLMEQsY0FBTCxDQUFvQjVSLEdBQXBCLENBQXdCMlcsa0JBQXhCLENBQTRDM1csQ0FBQUEsR0FBNUMsQ0FBZ0QsSUFBSWxCLEtBQUosQ0FBVUYsTUFBTSxDQUFDaVcsT0FBakIsRUFBMEJqVyxNQUFNLENBQUNrVyxPQUFqQyxDQUFoRCxDQURGLENBQUEsQ0FBQTtFQUlBNEIsTUFBQUEsa0JBQWtCLENBQUMzRSxTQUFuQixDQUE2QkQsS0FBN0IsQ0FBQSxDQUFBO0VBQ0QsS0FBQTs7O2FBRUQsU0FBZ0IsYUFBQSxHQUFBO0VBQ2QsTUFBSzlDLElBQUFBLENBQUFBLFdBQUwsQ0FBaUIsSUFBQSxDQUFLbFAsUUFBdEIsQ0FBQSxDQUFBO0VBQ0QsS0FBQTs7O2FBRUQsU0FBZSxZQUFBLEdBQUE7RUFDYixNQUFPLE9BQUEsSUFBSUQsU0FBSixDQUFjLElBQUEsQ0FBS0MsUUFBbkIsRUFBNkIsSUFBQSxDQUFLaU8sT0FBTCxFQUE3QixDQUFQLENBQUE7RUFDRCxLQUFBOzs7YUFFRCxTQUFVLE9BQUEsR0FBQTtFQUNSLE1BQUEsSUFBSSxJQUFLZixDQUFBQSxRQUFMLENBQWNrQyxPQUFsQixFQUEyQjtFQUN6QixRQUFLbEMsSUFBQUEsQ0FBQUEsUUFBTCxDQUFja0MsT0FBZCxFQUFBLENBQUE7RUFDRCxPQUFBO0VBQ0YsS0FBQTs7O2FBRUQsU0FBVSxPQUFBLEdBQUE7RUFDUixNQUFLNEQsSUFBQUEsQ0FBQUEsT0FBTCxDQUFhNUMsbUJBQWIsQ0FBaUNNLFdBQVcsQ0FBQ25ILEtBQTdDLEVBQW9ELElBQUEsQ0FBS3dJLFVBQXpELENBQUEsQ0FBQTtFQUNBLE1BQUtpQixJQUFBQSxDQUFBQSxPQUFMLENBQWE1QyxtQkFBYixDQUFpQ0ksV0FBVyxDQUFDakgsS0FBN0MsRUFBb0QsSUFBQSxDQUFLd0ksVUFBekQsQ0FBQSxDQUFBO0VBQ0EsTUFBQSxJQUFBLENBQUt2VCxPQUFMLENBQWE0UixtQkFBYixDQUFpQyxXQUFqQyxFQUE4QyxLQUFLa0MsZ0JBQW5ELENBQUEsQ0FBQTtFQUNBaFIsTUFBQUEsUUFBUSxDQUFDOE8sbUJBQVQsQ0FBNkJNLFdBQVcsQ0FBQ3RDLElBQXpDLEVBQStDLElBQUEsQ0FBSzhELFNBQXBELENBQUEsQ0FBQTtFQUNBNVEsTUFBQUEsUUFBUSxDQUFDOE8sbUJBQVQsQ0FBNkJJLFdBQVcsQ0FBQ3BDLElBQXpDLEVBQStDLElBQUEsQ0FBSzhELFNBQXBELENBQUEsQ0FBQTtFQUNBNVEsTUFBQUEsUUFBUSxDQUFDOE8sbUJBQVQsQ0FBNkJNLFdBQVcsQ0FBQ0QsR0FBekMsRUFBOEMsSUFBQSxDQUFLMkIsUUFBbkQsQ0FBQSxDQUFBO0VBQ0E5USxNQUFBQSxRQUFRLENBQUM4TyxtQkFBVCxDQUE2QkksV0FBVyxDQUFDQyxHQUF6QyxFQUE4QyxJQUFBLENBQUsyQixRQUFuRCxDQUFBLENBQUE7RUFDQTlRLE1BQUFBLFFBQVEsQ0FBQzhPLG1CQUFULENBQTZCLFVBQTdCLEVBQXlDLEtBQUtvQyxlQUE5QyxDQUFBLENBQUE7RUFDQWxSLE1BQUFBLFFBQVEsQ0FBQzhPLG1CQUFULENBQTZCLFNBQTdCLEVBQXdDLEtBQUtzQyxjQUE3QyxDQUFBLENBQUE7RUFDQXBSLE1BQUFBLFFBQVEsQ0FBQzhPLG1CQUFULENBQTZCSSxXQUFXLENBQUNDLEdBQXpDLEVBQThDLElBQUEsQ0FBS2lDLGNBQW5ELENBQUEsQ0FBQTtFQUNBcFIsTUFBQUEsUUFBUSxDQUFDOE8sbUJBQVQsQ0FBNkIsTUFBN0IsRUFBcUMsS0FBS3dDLFdBQTFDLENBQUEsQ0FBQTtFQUNBLE1BQUEsSUFBQSxDQUFLb0UsWUFBTCxFQUFBLENBQUE7RUFFQSxNQUFBLElBQU1qVSxLQUFLLEdBQUc2SCxVQUFVLENBQUM1SCxPQUFYLENBQW1CLElBQW5CLENBQWQsQ0FBQTs7RUFDQSxNQUFBLElBQUlELEtBQUssR0FBRyxDQUFDLENBQWIsRUFBZ0I7RUFDZDZILFFBQUFBLFVBQVUsQ0FBQzNILE1BQVgsQ0FBa0JGLEtBQWxCLEVBQXlCLENBQXpCLENBQUEsQ0FBQTtFQUNELE9BQUE7RUFDRixLQUFBOzs7V0FFRCxTQUFnQixHQUFBLEdBQUE7RUFDZCxNQUFRLE9BQUEsSUFBQSxDQUFLMkwsVUFBTCxHQUFrQixJQUFBLENBQUtBLFVBQUwsSUFBbUIsSUFBQSxDQUFLMU0sT0FBTCxDQUFhSCxTQUFoQyxJQUE2QyxJQUFLRyxDQUFBQSxPQUFMLENBQWEzQyxNQUExRCxJQUFvRXVDLG1CQUFtQixDQUFDLElBQUEsQ0FBS3BELE9BQU4sQ0FBakgsQ0FBQTtFQUNELEtBQUE7OztXQUVELFNBQWMsR0FBQSxHQUFBO0VBQ1osTUFBSSxJQUFBLENBQUMsSUFBS3lZLENBQUFBLFFBQVYsRUFBb0I7RUFDbEIsUUFBQSxJQUFJLE9BQU8sSUFBS2pWLENBQUFBLE9BQUwsQ0FBYWdSLE9BQXBCLEtBQWdDLFFBQXBDLEVBQThDO0VBQzVDLFVBQUEsSUFBQSxDQUFLaUUsUUFBTCxHQUFnQixJQUFLelksQ0FBQUEsT0FBTCxDQUFhK0MsYUFBYixDQUEyQixJQUFBLENBQUtTLE9BQUwsQ0FBYWdSLE9BQXhDLENBQUEsSUFBb0QsS0FBS3hVLE9BQXpFLENBQUE7RUFDRCxTQUZELE1BRU87RUFDTCxVQUFLeVksSUFBQUEsQ0FBQUEsUUFBTCxHQUFnQixJQUFLalYsQ0FBQUEsT0FBTCxDQUFhZ1IsT0FBYixJQUF3QixLQUFLeFUsT0FBN0MsQ0FBQTtFQUNELFNBQUE7RUFDRixPQUFBOztFQUVELE1BQUEsT0FBTyxLQUFLeVksUUFBWixDQUFBO0VBQ0QsS0FBQTs7O1dBRUQsU0FBd0IsR0FBQSxHQUFBO0VBQ3RCLE1BQUEsT0FBTyxJQUFLalYsQ0FBQUEsT0FBTCxDQUFhb1QsaUJBQWIsSUFBa0MsS0FBekMsQ0FBQTtFQUNELEtBQUE7OztXQUVELFNBQXNDLEdBQUEsR0FBQTtFQUNwQyxNQUFBLE9BQU8sSUFBS3BULENBQUFBLE9BQUwsQ0FBYXlULCtCQUFiLElBQWdELElBQXZELENBQUE7RUFDRCxLQUFBOzs7V0FFRCxTQUFxQyxHQUFBLEdBQUE7RUFDbkMsTUFBQSxPQUFPLElBQUt6VCxDQUFBQSxPQUFMLENBQWEwVCw4QkFBYixJQUErQyxLQUF0RCxDQUFBO0VBQ0QsS0FBQTs7O1dBRUQsU0FBZ0MsR0FBQSxHQUFBO0VBQzlCLE1BQUEsT0FBTyxJQUFLMVQsQ0FBQUEsT0FBTCxDQUFheVIseUJBQWIsSUFBMEMsS0FBakQsQ0FBQTtFQUNELEtBQUE7OztXQUVELFNBQWtCLEdBQUEsR0FBQTtFQUNoQixNQUFPLE9BQUEsSUFBSXpVLEtBQUosQ0FBVUYsTUFBTSxDQUFDaVcsT0FBakIsRUFBMEJqVyxNQUFNLENBQUNrVyxPQUFqQyxDQUFQLENBQUE7RUFDRCxLQUFBOzs7V0FFRCxTQUFhLEdBQUEsR0FBQTtFQUNYLE1BQUEsT0FBTyxLQUFLdEQsT0FBWixDQUFBO0VBQ0Q7RUFFRCxJQUFBLEdBQUEsRUFBQSxTQUFBLEdBQUEsQ0FBV3dGLE1BQVgsRUFBbUI7RUFDakIsTUFBQSxJQUFJQSxNQUFKLEVBQVk7RUFDVixRQUFBLElBQUEsQ0FBSzFZLE9BQUwsQ0FBYXFYLFNBQWIsQ0FBdUJySCxNQUF2QixDQUE4QixnQkFBOUIsQ0FBQSxDQUFBO0VBQ0QsT0FGRCxNQUVPO0VBQ0wsUUFBQSxJQUFBLENBQUtoUSxPQUFMLENBQWFxWCxTQUFiLENBQXVCM1YsR0FBdkIsQ0FBMkIsZ0JBQTNCLENBQUEsQ0FBQTtFQUNELE9BQUE7O0VBRUQsTUFBS3dSLElBQUFBLENBQUFBLE9BQUwsR0FBZXdGLE1BQWYsQ0FBQTtFQUNELEtBQUE7Ozs7SUFoY29DblY7RUFtY3ZDNE4sU0FBUyxDQUFDN0MsT0FBVixHQUFvQixJQUFJL0ssWUFBSixFQUFwQixDQUFBO0VBQ0E0TixTQUFTLENBQUM3QyxPQUFWLENBQWtCNUssRUFBbEIsQ0FBcUIsa0JBQXJCLEVBQXlDaUssaUJBQXpDLENBQUE7O01DdmZxQmdMOzs7OztFQUNuQixFQUFBLFNBQUEsSUFBQSxDQUFZdk0sVUFBWixFQUFvQztFQUFBLElBQUEsSUFBQSxLQUFBLENBQUE7O0VBQUEsSUFBWjVJLElBQUFBLE9BQVksdUVBQUosRUFBSSxDQUFBOztFQUFBLElBQUEsZUFBQSxDQUFBLElBQUEsRUFBQSxJQUFBLENBQUEsQ0FBQTs7RUFDbEMsSUFBQSxLQUFBLEdBQUEsTUFBQSxDQUFBLElBQUEsQ0FBQSxJQUFBLEVBQU1BLE9BQU4sQ0FBQSxDQUFBO0VBQ0EsSUFBQSxLQUFBLENBQUtBLE9BQUwsR0FBZUcsTUFBTSxDQUFDNkksTUFBUCxDQUFjO0VBQzNCd0IsTUFBQUEsT0FBTyxFQUFFLEdBRGtCO0VBRTNCQyxNQUFBQSxXQUFXLEVBQUUsR0FGYztFQUczQnpJLE1BQUFBLE1BQU0sRUFBRSxFQUFBO0VBSG1CLEtBQWQsRUFJWmhDLE9BSlksQ0FBZixDQUFBO0VBTUEsSUFBSzRJLEtBQUFBLENBQUFBLFVBQUwsR0FBa0JBLFVBQWxCLENBQUE7RUFDQSxJQUFLd00sS0FBQUEsQ0FBQUEsc0JBQUwsR0FBOEIsS0FBOUIsQ0FBQTtFQUVBLElBQUEsS0FBQSxDQUFLQyxjQUFMLEdBQXNCLElBQUlDLGNBQUosQ0FBbUIsWUFBQTtFQUFBLE1BQUEsT0FBTSxNQUFLMU0sVUFBTCxDQUFnQlgsT0FBaEIsQ0FBd0IsVUFBQ3NOLENBQUQsRUFBQTtFQUFBLFFBQU9BLE9BQUFBLENBQUMsQ0FBQzVGLGdCQUFGLEVBQVAsQ0FBQTtFQUFBLE9BQXhCLENBQU4sQ0FBQTtFQUFBLEtBQW5CLENBQXRCLENBQUE7O0VBQ0EsSUFBQSxLQUFBLENBQUsvRyxVQUFMLENBQWdCWCxPQUFoQixDQUF3QixVQUFDc04sQ0FBRCxFQUFBO0VBQUEsTUFBTyxPQUFBLEtBQUEsQ0FBS0YsY0FBTCxDQUFvQkcsT0FBcEIsQ0FBNEJELENBQUMsQ0FBQy9ZLE9BQTlCLENBQVAsQ0FBQTtFQUFBLEtBQXhCLENBQUEsQ0FBQTs7RUFFQSxJQUFBLEtBQUEsQ0FBS3lPLElBQUwsRUFBQSxDQUFBOztFQWRrQyxJQUFBLE9BQUEsS0FBQSxDQUFBO0VBZW5DLEdBQUE7Ozs7YUFFRCxTQUFPLElBQUEsR0FBQTtFQUNMLE1BQUt5RSxJQUFBQSxDQUFBQSxPQUFMLEdBQWUsSUFBZixDQUFBO0VBQ0EsTUFBQSxJQUFBLENBQUs5RyxVQUFMLENBQWdCWCxPQUFoQixDQUF3QixJQUFLd04sQ0FBQUEsYUFBN0IsRUFBNEMsSUFBNUMsQ0FBQSxDQUFBO0VBQ0QsS0FBQTs7O0VBRUQsSUFBQSxLQUFBLEVBQUEsU0FBQSxhQUFBLENBQWMzTSxTQUFkLEVBQXlCO0VBQUEsTUFBQSxJQUFBLE1BQUEsR0FBQSxJQUFBLENBQUE7O0VBQ3ZCQSxNQUFBQSxTQUFTLENBQUNvTSxNQUFWLEdBQW1CLEtBQUt4RixPQUF4QixDQUFBO0VBQ0E1RyxNQUFBQSxTQUFTLENBQUM1SSxFQUFWLENBQWEsV0FBYixFQUEwQixZQUFBO0VBQUEsUUFBQSxPQUFNLE1BQUksQ0FBQ3dWLE1BQUwsQ0FBWTVNLFNBQVosQ0FBTixDQUFBO0VBQUEsT0FBMUIsQ0FBQSxDQUFBOztFQUNBQSxNQUFBQSxTQUFTLENBQUM4RCxhQUFWLEdBQTBCLFlBQU07RUFDOUI5RCxRQUFBQSxTQUFTLENBQUNvRSxXQUFWLENBQXNCcEUsU0FBUyxDQUFDZ0gsY0FBaEMsRUFBZ0QsTUFBSSxDQUFDOVAsT0FBTCxDQUFhd0ssT0FBN0QsQ0FBQSxDQUFBOztFQUNBLFFBQUEsTUFBSSxDQUFDcUMsS0FBTCxDQUFXL0QsU0FBWCxDQUFBLENBQUE7RUFDRCxPQUhELENBQUE7RUFJRCxLQUFBOzs7RUFFRCxJQUFBLEtBQUEsRUFBQSxTQUFBLE1BQUEsQ0FBT0EsU0FBUCxFQUFrQjtFQUNoQixNQUFBLElBQU02TSxnQkFBZ0IsR0FBRyxJQUFLQyxDQUFBQSxtQkFBTCxFQUF6QixDQUFBO0VBQ0EsTUFBQSxJQUFNQyxlQUFlLEdBQUdGLGdCQUFnQixDQUFDL0wsR0FBakIsQ0FBcUIsVUFBQ2QsU0FBRCxFQUFBO0VBQUEsUUFBZUEsT0FBQUEsU0FBUyxDQUFDZ0gsY0FBekIsQ0FBQTtFQUFBLE9BQXJCLENBQXhCLENBQUE7RUFFQSxNQUFBLElBQU1nRyxZQUFZLEdBQUdILGdCQUFnQixDQUFDM1UsT0FBakIsQ0FBeUI4SCxTQUF6QixDQUFyQixDQUFBO0VBQ0EsTUFBQSxJQUFNaU4sV0FBVyxHQUFHbFUsbUJBQW1CLENBQUNnVSxlQUFELEVBQWtCL00sU0FBUyxDQUFDOUssUUFBNUIsRUFBc0MsS0FBS2dDLE9BQUwsQ0FBYWdDLE1BQW5ELEVBQTJELElBQUEsQ0FBS2dVLFlBQWhFLENBQXZDLENBQUE7O0VBRUEsTUFBSUQsSUFBQUEsV0FBVyxLQUFLLENBQUMsQ0FBakIsSUFBc0JELFlBQVksS0FBS0MsV0FBM0MsRUFBd0Q7RUFDdEQsUUFBSUEsSUFBQUEsV0FBVyxHQUFHRCxZQUFsQixFQUFnQztFQUM5QixVQUFLLEtBQUEsSUFBSTVULENBQUMsR0FBQzZULFdBQVgsRUFBd0I3VCxDQUFDLEdBQUM0VCxZQUExQixFQUF3QzVULENBQUMsRUFBekMsRUFBNkM7RUFDM0N5VCxZQUFBQSxnQkFBZ0IsQ0FBQ3pULENBQUQsQ0FBaEIsQ0FBb0JnTCxXQUFwQixDQUFnQzJJLGVBQWUsQ0FBQzNULENBQUMsR0FBQyxDQUFILENBQS9DLEVBQXNELElBQUtsQyxDQUFBQSxPQUFMLENBQWF5SyxXQUFuRSxDQUFBLENBQUE7RUFDRCxXQUFBO0VBQ0YsU0FKRCxNQUlPO0VBQ0wsVUFBSyxLQUFBLElBQUl2SSxFQUFDLEdBQUM0VCxZQUFYLEVBQXlCNVQsRUFBQyxHQUFDNlQsV0FBM0IsRUFBd0M3VCxFQUFDLEVBQXpDLEVBQTZDO0VBQzNDeVQsWUFBQUEsZ0JBQWdCLENBQUN6VCxFQUFDLEdBQUMsQ0FBSCxDQUFoQixDQUFzQmdMLFdBQXRCLENBQWtDMkksZUFBZSxDQUFDM1QsRUFBRCxDQUFqRCxFQUFzRCxJQUFLbEMsQ0FBQUEsT0FBTCxDQUFheUssV0FBbkUsQ0FBQSxDQUFBO0VBQ0QsV0FBQTtFQUNGLFNBQUE7O0VBRUQsUUFBSTNCLElBQUFBLFNBQVMsQ0FBQ3NLLGlCQUFkLEVBQWlDO0VBQy9CdEssVUFBQUEsU0FBUyxDQUFDb0UsV0FBVixDQUFzQjJJLGVBQWUsQ0FBQ0UsV0FBRCxDQUFyQyxDQUFBLENBQUE7RUFDRCxTQUZELE1BRU87RUFDTGpOLFVBQUFBLFNBQVMsQ0FBQ2dILGNBQVYsR0FBMkIrRixlQUFlLENBQUNFLFdBQUQsQ0FBMUMsQ0FBQTtFQUNELFNBQUE7O0VBRUQsUUFBS1gsSUFBQUEsQ0FBQUEsc0JBQUwsR0FBOEIsSUFBOUIsQ0FBQTtFQUNELE9BQUE7RUFDRixLQUFBOzs7RUFFRCxJQUFBLEtBQUEsRUFBQSxTQUFBLEtBQUEsQ0FBTXRNLFNBQU4sRUFBaUI7RUFDZixNQUFJLElBQUEsSUFBQSxDQUFLc00sc0JBQVQsRUFBaUM7RUFDL0IsUUFBS3JLLElBQUFBLENBQUFBLElBQUwsQ0FBVSxhQUFWLENBQUEsQ0FBQTtFQUNBLFFBQUtxSyxJQUFBQSxDQUFBQSxzQkFBTCxHQUE4QixLQUE5QixDQUFBO0VBQ0QsT0FBQTtFQUNGLEtBQUE7OzthQUVELFNBQTRCLHlCQUFBLEdBQUE7RUFDMUIsTUFBQSxPQUFPLEtBQUt4TSxVQUFMLENBQWdCZ0IsR0FBaEIsQ0FBb0IsVUFBQ2QsU0FBRCxFQUFBO0VBQUEsUUFBQSxPQUFlQSxTQUFTLENBQUNnSCxjQUFWLENBQXlCbEssS0FBekIsRUFBZixDQUFBO0VBQUEsT0FBcEIsQ0FBUCxDQUFBO0VBQ0QsS0FBQTs7O2FBRUQsU0FBc0IsbUJBQUEsR0FBQTtFQUNwQixNQUFBLE9BQU8sSUFBS2dELENBQUFBLFVBQUwsQ0FBZ0JtRSxJQUFoQixDQUFxQixJQUFBLENBQUt6QixPQUFMLENBQWE3RixJQUFiLENBQWtCLElBQWxCLENBQXJCLENBQVAsQ0FBQTtFQUNELEtBQUE7OzthQUVELFNBQVEsS0FBQSxHQUFBO0VBQ04sTUFBQSxJQUFBLENBQUttRCxVQUFMLENBQWdCWCxPQUFoQixDQUF3QixVQUFDYSxTQUFELEVBQUE7RUFBQSxRQUFlQSxPQUFBQSxTQUFTLENBQUNtTixzQkFBVixFQUFmLENBQUE7RUFBQSxPQUF4QixDQUFBLENBQUE7RUFDRCxLQUFBOzs7YUFFRCxTQUFVLE9BQUEsR0FBQTtFQUNSLE1BQUEsSUFBQSxDQUFLck4sVUFBTCxDQUFnQlgsT0FBaEIsQ0FBd0IsVUFBQ2EsU0FBRCxFQUFBO0VBQUEsUUFBZUEsT0FBQUEsU0FBUyxDQUFDc0UsT0FBVixFQUFmLENBQUE7RUFBQSxPQUF4QixDQUFBLENBQUE7RUFDRCxLQUFBOzs7RUFFRCxJQUFBLEtBQUEsRUFBQSxTQUFBLEdBQUEsQ0FBSXhFLFVBQUosRUFBZ0I7RUFBQSxNQUFBLElBQUEsTUFBQSxHQUFBLElBQUEsQ0FBQTs7RUFDZCxNQUFBLElBQUksRUFBRUEsVUFBVSxZQUFZc04sS0FBeEIsQ0FBSixFQUFvQztFQUNsQ3ROLFFBQUFBLFVBQVUsR0FBRyxDQUFDQSxVQUFELENBQWIsQ0FBQTtFQUNELE9BQUE7O0VBQ0RBLE1BQUFBLFVBQVUsQ0FBQ1gsT0FBWCxDQUFtQixVQUFDYSxTQUFELEVBQUE7RUFBQSxRQUFBLE9BQWUsTUFBSSxDQUFDMk0sYUFBTCxDQUFtQjNNLFNBQW5CLENBQWYsQ0FBQTtFQUFBLE9BQW5CLENBQUEsQ0FBQTtFQUNBLE1BQUtGLElBQUFBLENBQUFBLFVBQUwsR0FBa0IsSUFBS0EsQ0FBQUEsVUFBTCxDQUFnQkMsTUFBaEIsQ0FBdUJELFVBQXZCLENBQWxCLENBQUE7RUFDRCxLQUFBOzs7RUFFRCxJQUFBLEtBQUEsRUFBQSxTQUFBLE1BQUEsQ0FBT0EsVUFBUCxFQUFtQjtFQUFBLE1BQUEsSUFBQSxNQUFBLEdBQUEsSUFBQSxDQUFBOztFQUNqQixNQUFNdU4sSUFBQUEsZ0JBQWdCLEdBQUcsSUFBS3ZOLENBQUFBLFVBQUwsQ0FBZ0JnQixHQUFoQixDQUFvQixVQUFDZCxTQUFELEVBQUE7RUFBQSxRQUFlQSxPQUFBQSxTQUFTLENBQUN1RCxlQUF6QixDQUFBO0VBQUEsT0FBcEIsQ0FBekIsQ0FBQTtFQUNBLE1BQU0rSixJQUFBQSxJQUFJLEdBQUcsRUFBYixDQUFBO0VBQ0EsTUFBQSxJQUFNVCxnQkFBZ0IsR0FBRyxJQUFLQyxDQUFBQSxtQkFBTCxFQUF6QixDQUFBOztFQUVBLE1BQUEsSUFBSSxFQUFFaE4sVUFBVSxZQUFZc04sS0FBeEIsQ0FBSixFQUFvQztFQUNsQ3ROLFFBQUFBLFVBQVUsR0FBRyxDQUFDQSxVQUFELENBQWIsQ0FBQTtFQUNELE9BQUE7O0VBRURBLE1BQUFBLFVBQVUsQ0FBQ1gsT0FBWCxDQUFtQixVQUFDYSxTQUFELEVBQWU7RUFDaENBLFFBQUFBLFNBQVMsQ0FBQ3VOLE9BQVYsQ0FBa0IsVUFBbEIsQ0FBQSxDQUFBO0VBQ0F2TixRQUFBQSxTQUFTLENBQUN1TixPQUFWLENBQWtCLFdBQWxCLENBQUEsQ0FBQTtFQUNBdEssUUFBQUEsVUFBVSxDQUFDLE1BQUksQ0FBQ25ELFVBQU4sRUFBa0JFLFNBQWxCLENBQVYsQ0FBQTtFQUNELE9BSkQsQ0FBQSxDQUFBO0VBTUEsTUFBSXdOLElBQUFBLENBQUMsR0FBRyxDQUFSLENBQUE7RUFDQVgsTUFBQUEsZ0JBQWdCLENBQUMxTixPQUFqQixDQUF5QixVQUFDYSxTQUFELEVBQWU7RUFDdEMsUUFBSSxJQUFBLE1BQUksQ0FBQ0YsVUFBTCxDQUFnQjVILE9BQWhCLENBQXdCOEgsU0FBeEIsQ0FBQSxLQUF1QyxDQUFDLENBQTVDLEVBQStDO0VBQzdDLFVBQUlBLElBQUFBLFNBQVMsQ0FBQ2dILGNBQVYsS0FBNkJxRyxnQkFBZ0IsQ0FBQ0csQ0FBRCxDQUFqRCxFQUFzRDtFQUNwRHhOLFlBQUFBLFNBQVMsQ0FBQ29FLFdBQVYsQ0FBc0JpSixnQkFBZ0IsQ0FBQ0csQ0FBRCxDQUF0QyxFQUEyQyxNQUFJLENBQUN0VyxPQUFMLENBQWF5SyxXQUF4RCxDQUFBLENBQUE7RUFDRCxXQUFBOztFQUNEM0IsVUFBQUEsU0FBUyxDQUFDdUQsZUFBVixHQUE0QjhKLGdCQUFnQixDQUFDRyxDQUFELENBQTVDLENBQUE7RUFDQUEsVUFBQUEsQ0FBQyxFQUFBLENBQUE7RUFDREYsVUFBQUEsSUFBSSxDQUFDdlYsSUFBTCxDQUFVaUksU0FBVixDQUFBLENBQUE7RUFDRCxTQUFBO0VBQ0YsT0FURCxDQUFBLENBQUE7RUFVQSxNQUFLRixJQUFBQSxDQUFBQSxVQUFMLEdBQWtCd04sSUFBbEIsQ0FBQTtFQUNELEtBQUE7OzthQUVELFNBQVEsS0FBQSxHQUFBO0VBQ04sTUFBQSxJQUFBLENBQUs1SixNQUFMLENBQVksSUFBQSxDQUFLNUQsVUFBTCxDQUFnQm5JLEtBQWhCLEVBQVosQ0FBQSxDQUFBO0VBQ0QsS0FBQTs7O2FBRUQsU0FBVSxPQUFBLEdBQUE7RUFDUixNQUFBLElBQUEsQ0FBS21JLFVBQUwsQ0FBZ0JYLE9BQWhCLENBQXdCLFVBQUNhLFNBQUQsRUFBQTtFQUFBLFFBQWVBLE9BQUFBLFNBQVMsQ0FBQ2dNLE9BQVYsRUFBZixDQUFBO0VBQUEsT0FBeEIsQ0FBQSxDQUFBO0VBQ0QsS0FBQTs7O2FBRUQsU0FBUXlCLE9BQUFBLENBQUFBLFVBQVIsRUFBb0JDLFVBQXBCLEVBQWdDO0VBQzlCLE1BQUEsSUFBSSxJQUFLeFcsQ0FBQUEsT0FBTCxDQUFhc0wsT0FBakIsRUFBMEI7RUFDeEIsUUFBTyxPQUFBLElBQUEsQ0FBS3RMLE9BQUwsQ0FBYXNMLE9BQWIsQ0FBcUJpTCxVQUFyQixFQUFpQ0MsVUFBakMsQ0FBUCxDQUFBO0VBQ0QsT0FGRCxNQUVPO0VBQ0wsUUFBQSxJQUFJRCxVQUFVLENBQUN6RyxjQUFYLENBQTBCNVMsQ0FBMUIsR0FBOEJzWixVQUFVLENBQUMxRyxjQUFYLENBQTBCNVMsQ0FBNUQsRUFBK0QsT0FBTyxDQUFDLENBQVIsQ0FBQTtFQUMvRCxRQUFBLElBQUlxWixVQUFVLENBQUN6RyxjQUFYLENBQTBCNVMsQ0FBMUIsR0FBOEJzWixVQUFVLENBQUMxRyxjQUFYLENBQTBCNVMsQ0FBNUQsRUFBK0QsT0FBTyxDQUFQLENBQUE7RUFDL0QsUUFBQSxJQUFJcVosVUFBVSxDQUFDekcsY0FBWCxDQUEwQjdTLENBQTFCLEdBQThCdVosVUFBVSxDQUFDMUcsY0FBWCxDQUEwQjdTLENBQTVELEVBQStELE9BQU8sQ0FBQyxDQUFSLENBQUE7RUFDL0QsUUFBQSxJQUFJc1osVUFBVSxDQUFDekcsY0FBWCxDQUEwQjdTLENBQTFCLEdBQThCdVosVUFBVSxDQUFDMUcsY0FBWCxDQUEwQjdTLENBQTVELEVBQStELE9BQU8sQ0FBUCxDQUFBO0VBQy9ELFFBQUEsT0FBTyxDQUFQLENBQUE7RUFDRCxPQUFBO0VBQ0YsS0FBQTs7O1dBRUQsU0FBbUIsR0FBQSxHQUFBO0VBQ2pCLE1BQUEsT0FBTyxJQUFLK0MsQ0FBQUEsT0FBTCxDQUFha0IsV0FBYixJQUE0QkEsV0FBbkMsQ0FBQTtFQUNELEtBQUE7OztXQUVELFNBQWdCLEdBQUEsR0FBQTtFQUNkLE1BQU8sT0FBQSxJQUFBLENBQUt1Vix5QkFBTCxFQUFQLENBQUE7RUFDRDtFQUVELElBQUEsR0FBQSxFQUFBLFNBQUEsR0FBQSxDQUFjcEosU0FBZCxFQUF5QjtFQUFBLE1BQUEsSUFBQSxNQUFBLEdBQUEsSUFBQSxDQUFBOztFQUN2QixNQUFNQyxJQUFBQSxPQUFPLEdBQUcsb0JBQWhCLENBQUE7O0VBQ0EsTUFBSUQsSUFBQUEsU0FBUyxDQUFDakwsTUFBVixLQUFxQixLQUFLd0csVUFBTCxDQUFnQnhHLE1BQXpDLEVBQWlEO0VBQy9DaUwsUUFBQUEsU0FBUyxDQUFDcEYsT0FBVixDQUFrQixVQUFDbkUsS0FBRCxFQUFRNUIsQ0FBUixFQUFjO0VBQzlCLFVBQUEsTUFBSSxDQUFDMEcsVUFBTCxDQUFnQjFHLENBQWhCLENBQW1CZ0wsQ0FBQUEsV0FBbkIsQ0FBK0JwSixLQUEvQixDQUFBLENBQUE7RUFDRCxTQUZELENBQUEsQ0FBQTtFQUdELE9BSkQsTUFJTztFQUNMLFFBQUEsTUFBTXdKLE9BQU4sQ0FBQTtFQUNELE9BQUE7RUFDRixLQUFBOzs7V0FFRCxTQUFhLEdBQUEsR0FBQTtFQUNYLE1BQUEsT0FBTyxLQUFLb0MsT0FBWixDQUFBO0VBQ0Q7RUFFRCxJQUFBLEdBQUEsRUFBQSxTQUFBLEdBQUEsQ0FBV3dGLE1BQVgsRUFBbUI7RUFDakIsTUFBS3hGLElBQUFBLENBQUFBLE9BQUwsR0FBZXdGLE1BQWYsQ0FBQTtFQUNBLE1BQUEsSUFBQSxDQUFLdE0sVUFBTCxDQUFnQlgsT0FBaEIsQ0FBd0IsVUFBQ2EsU0FBRCxFQUFlO0VBQ3JDQSxRQUFBQSxTQUFTLENBQUNvTSxNQUFWLEdBQW1CQSxNQUFuQixDQUFBO0VBQ0QsT0FGRCxDQUFBLENBQUE7RUFHRCxLQUFBOzs7YUFFRCxTQUFld0IsT0FBQUEsQ0FBQUEsZ0JBQWYsRUFBaUNDLFFBQWpDLEVBQXVEO0VBQUEsTUFBWjNXLElBQUFBLE9BQVksdUVBQUosRUFBSSxDQUFBO0VBQ3JELE1BQUEsSUFBTTRJLFVBQVUsR0FBR3NOLEtBQUssQ0FBQ1UsSUFBTixDQUFXRCxRQUFYLENBQUEsQ0FBcUIvTSxHQUFyQixDQUF5QixVQUFDcE4sT0FBRCxFQUFhO0VBQ3ZELFFBQU8sT0FBQSxJQUFJbVIsU0FBSixDQUFjblIsT0FBZCxFQUF1QjJELE1BQU0sQ0FBQzZJLE1BQVAsQ0FBYztFQUMxQ25KLFVBQUFBLFNBQVMsRUFBRTZXLGdCQUFBQTtFQUQrQixTQUFkLEVBRTNCMVcsT0FBTyxDQUFDOEksU0FBUixJQUFxQixFQUZNLENBQXZCLENBQVAsQ0FBQTtFQUdELE9BSmtCLENBQW5CLENBQUE7RUFLQSxNQUFPLE9BQUEsSUFBSXFNLElBQUosQ0FBU3ZNLFVBQVQsRUFBcUI1SSxPQUFPLENBQUNvVyxJQUFSLElBQWdCLEVBQXJDLENBQVAsQ0FBQTtFQUNELEtBQUE7Ozs7SUFqTCtCclc7O0VDSmxDLElBQU04VyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDeFAsS0FBRCxFQUFRdVAsSUFBUixFQUFjRSxFQUFkLEVBQXFCO0VBQ3JDelAsRUFBQUEsS0FBSyxDQUFDcEcsTUFBTixDQUFhNlYsRUFBRSxHQUFHLENBQUwsR0FBU3pQLEtBQUssQ0FBQ2pGLE1BQU4sR0FBZTBVLEVBQXhCLEdBQTZCQSxFQUExQyxFQUE4QyxDQUE5QyxFQUFpRHpQLEtBQUssQ0FBQ3BHLE1BQU4sQ0FBYTJWLElBQWIsRUFBbUIsQ0FBbkIsQ0FBc0IsQ0FBQSxDQUF0QixDQUFqRCxDQUFBLENBQUE7RUFDRCxDQUZELENBQUE7O01BSXFCRzs7Ozs7RUFDbkIsRUFBQSxTQUFBLFlBQUEsQ0FBWW5PLFVBQVosRUFBb0M7RUFBQSxJQUFaNUksSUFBQUEsT0FBWSx1RUFBSixFQUFJLENBQUE7O0VBQUEsSUFBQSxlQUFBLENBQUEsSUFBQSxFQUFBLFlBQUEsQ0FBQSxDQUFBOztFQUFBLElBQzVCNEksT0FBQUEsTUFBQUEsQ0FBQUEsSUFBQUEsQ0FBQUEsSUFBQUEsRUFBQUEsVUFENEIsRUFDaEI1SSxPQURnQixDQUFBLENBQUE7RUFFbkMsR0FBQTs7OztFQUVELElBQUEsS0FBQSxFQUFBLFNBQUEsYUFBQSxDQUFjOEksU0FBZCxFQUF5QjtFQUFBLE1BQUEsSUFBQSxLQUFBLEdBQUEsSUFBQSxDQUFBOztFQUN2QkEsTUFBQUEsU0FBUyxDQUFDNUksRUFBVixDQUFhLFlBQWIsRUFBMkIsWUFBQTtFQUFBLFFBQUEsT0FBTSxLQUFJLENBQUM4VyxxQkFBTCxDQUEyQmxPLFNBQTNCLENBQU4sQ0FBQTtFQUFBLE9BQTNCLENBQUEsQ0FBQTs7RUFDQSxNQUFBLElBQUEsQ0FBQSxlQUFBLENBQUEsWUFBQSxDQUFBLFNBQUEsQ0FBQSxFQUFBLGVBQUEsRUFBQSxJQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsSUFBQSxFQUFvQkEsU0FBcEIsQ0FBQSxDQUFBO0VBQ0QsS0FBQTs7O2FBRUQsU0FBd0IscUJBQUEsR0FBQTtFQUN0QixNQUFBLElBQUksS0FBS0YsVUFBTCxDQUFnQnhHLE1BQWhCLElBQTBCLENBQTlCLEVBQWlDO0VBQy9CLFFBQUEsSUFBTTZVLE1BQU0sR0FBRyxJQUFLckIsQ0FBQUEsbUJBQUwsRUFBZixDQUFBO0VBRUEsUUFBS3NCLElBQUFBLENBQUFBLFdBQUwsR0FBbUJELE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVW5ILGNBQVYsQ0FBeUI1UyxDQUF6QixHQUE2QitaLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVW5ILGNBQVYsQ0FBeUI1UyxDQUF0RCxHQUEwRCtaLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVWhMLE9BQVYsRUFBQSxDQUFvQi9PLENBQWpHLENBQUE7RUFDRCxPQUpELE1BSU87RUFDTCxRQUFLZ2EsSUFBQUEsQ0FBQUEsV0FBTCxHQUFtQixDQUFuQixDQUFBO0VBQ0QsT0FBQTs7RUFFRCxNQUFBLElBQUksS0FBS3RPLFVBQUwsQ0FBZ0J4RyxNQUFoQixJQUEwQixDQUE5QixFQUFpQztFQUMvQixRQUFBLElBQUEsQ0FBSytVLGFBQUwsR0FBcUIsSUFBQSxDQUFLdk8sVUFBTCxDQUFnQixDQUFoQixFQUFtQmtILGNBQXhDLENBQUE7RUFDRCxPQUFBO0VBQ0YsS0FBQTs7O0VBRUQsSUFBQSxLQUFBLEVBQUEsU0FBQSxNQUFBLENBQU9oSCxTQUFQLEVBQWtCO0VBQ2hCLE1BQUEsSUFBTTZNLGdCQUFnQixHQUFHLElBQUtDLENBQUFBLG1CQUFMLEVBQXpCLENBQUE7RUFDQSxNQUFBLElBQU1DLGVBQWUsR0FBR0YsZ0JBQWdCLENBQUMvTCxHQUFqQixDQUFxQixVQUFDZCxTQUFELEVBQUE7RUFBQSxRQUFlQSxPQUFBQSxTQUFTLENBQUNnSCxjQUF6QixDQUFBO0VBQUEsT0FBckIsQ0FBeEIsQ0FBQTtFQUVBLE1BQUEsSUFBTWdHLFlBQVksR0FBR0gsZ0JBQWdCLENBQUMzVSxPQUFqQixDQUF5QjhILFNBQXpCLENBQXJCLENBQUE7RUFDQSxNQUFBLElBQU1pTixXQUFXLEdBQUdsVSxtQkFBbUIsQ0FBQ2dVLGVBQUQsRUFBa0IvTSxTQUFTLENBQUM5SyxRQUE1QixFQUFzQyxLQUFLZ0MsT0FBTCxDQUFhZ0MsTUFBbkQsRUFBMkQsSUFBQSxDQUFLZ1UsWUFBaEUsQ0FBdkMsQ0FBQTs7RUFFQSxNQUFJRCxJQUFBQSxXQUFXLEtBQUssQ0FBQyxDQUFqQixJQUFzQkQsWUFBWSxLQUFLQyxXQUEzQyxFQUF3RDtFQUN0RGMsUUFBQUEsU0FBUyxDQUFDbEIsZ0JBQUQsRUFBbUJHLFlBQW5CLEVBQWlDQyxXQUFqQyxDQUFULENBQUE7RUFDQSxRQUFBLElBQUEsQ0FBS3FCLFFBQUwsQ0FBY3pCLGdCQUFkLEVBQWdDN00sU0FBaEMsQ0FBQSxDQUFBO0VBQ0EsUUFBS3NNLElBQUFBLENBQUFBLHNCQUFMLEdBQThCLElBQTlCLENBQUE7RUFDRCxPQUFBO0VBQ0YsS0FBQTs7O2FBRUQsU0FBU08sUUFBQUEsQ0FBQUEsZ0JBQVQsRUFBMkIwQixnQkFBM0IsRUFBNkM7RUFBQSxNQUFBLElBQUEsTUFBQSxHQUFBLElBQUEsQ0FBQTs7RUFDM0MsTUFBQSxJQUFNQyxlQUFlLEdBQUcsSUFBQSxDQUFLSCxhQUFMLENBQW1CdlIsS0FBbkIsRUFBeEIsQ0FBQTtFQUVBK1AsTUFBQUEsZ0JBQWdCLENBQUMxTixPQUFqQixDQUF5QixVQUFDYSxTQUFELEVBQWU7RUFDdEMsUUFBSSxJQUFBLENBQUNBLFNBQVMsQ0FBQ2dILGNBQVYsQ0FBeUJ5SCxPQUF6QixDQUFpQ0QsZUFBakMsQ0FBTCxFQUF3RDtFQUN0RCxVQUFJeE8sSUFBQUEsU0FBUyxLQUFLdU8sZ0JBQWQsSUFBa0MsQ0FBQ0EsZ0JBQWdCLENBQUNqRSxpQkFBeEQsRUFBMkU7RUFDekV0SyxZQUFBQSxTQUFTLENBQUNnSCxjQUFWLEdBQTJCd0gsZUFBZSxDQUFDMVIsS0FBaEIsRUFBM0IsQ0FBQTtFQUNELFdBRkQsTUFFTztFQUNMa0QsWUFBQUEsU0FBUyxDQUFDb0UsV0FBVixDQUFzQm9LLGVBQXRCLEVBQXdDeE8sU0FBUyxLQUFLdU8sZ0JBQWYsR0FBbUMsQ0FBbkMsR0FBdUMsTUFBSSxDQUFDclgsT0FBTCxDQUFheUssV0FBM0YsQ0FBQSxDQUFBO0VBQ0QsV0FBQTtFQUNGLFNBQUE7O0VBRUQ2TSxRQUFBQSxlQUFlLENBQUNwYSxDQUFoQixHQUFvQm9hLGVBQWUsQ0FBQ3BhLENBQWhCLEdBQW9CNEwsU0FBUyxDQUFDbUQsT0FBVixFQUFvQi9PLENBQUFBLENBQXhDLEdBQTRDLE1BQUksQ0FBQ2dhLFdBQXJFLENBQUE7RUFDRCxPQVZELENBQUEsQ0FBQTtFQVdELEtBQUE7OztXQUVELFNBQW1CLEdBQUEsR0FBQTtFQUNqQixNQUFBLE9BQU8sSUFBS2xYLENBQUFBLE9BQUwsQ0FBYWtCLFdBQWIsSUFBNEJRLGNBQW5DLENBQUE7RUFDRCxLQUFBOzs7YUFFRCxTQUFlZ1YsT0FBQUEsQ0FBQUEsZ0JBQWYsRUFBaUNDLFFBQWpDLEVBQXVEO0VBQUEsTUFBWjNXLElBQUFBLE9BQVksdUVBQUosRUFBSSxDQUFBO0VBQ3JELE1BQUEsSUFBTTRJLFVBQVUsR0FBR3NOLEtBQUssQ0FBQ1UsSUFBTixDQUFXRCxRQUFYLENBQUEsQ0FBcUIvTSxHQUFyQixDQUF5QixVQUFDcE4sT0FBRCxFQUFhO0VBQ3ZELFFBQU8sT0FBQSxJQUFJbVIsU0FBSixDQUFjblIsT0FBZCxFQUF1QjJELE1BQU0sQ0FBQzZJLE1BQVAsQ0FBYztFQUMxQ25KLFVBQUFBLFNBQVMsRUFBRTZXLGdCQUFBQTtFQUQrQixTQUFkLEVBRTNCMVcsT0FBTyxDQUFDOEksU0FBUixJQUFxQixFQUZNLENBQXZCLENBQVAsQ0FBQTtFQUdELE9BSmtCLENBQW5CLENBQUE7RUFLQSxNQUFBLElBQU0wTyxZQUFZLEdBQUcsSUFBSVQsWUFBSixDQUFpQm5PLFVBQWpCLEVBQTZCNUksT0FBTyxDQUFDb1csSUFBUixJQUFnQixFQUE3QyxDQUFyQixDQUFBOztFQUVBLE1BQUdwVyxJQUFBQSxPQUFPLENBQUN5WCxlQUFYLEVBQTRCO0VBQzFCRCxRQUFBQSxZQUFZLENBQUN0WCxFQUFiLENBQWdCLGFBQWhCLEVBQStCLFlBQU07RUFDbkMsVUFBTXdYLElBQUFBLGVBQWUsR0FBR0YsWUFBWSxDQUFDNUIsbUJBQWIsRUFBbUNoTSxDQUFBQSxHQUFuQyxDQUF1QyxVQUFDMkwsQ0FBRCxFQUFBO0VBQUEsWUFBT0EsT0FBQUEsQ0FBQyxDQUFDL1ksT0FBVCxDQUFBO0VBQUEsV0FBdkMsQ0FBeEIsQ0FBQTtFQUNBZ2IsVUFBQUEsWUFBWSxDQUFDckssS0FBYixFQUFBLENBQUE7RUFDQXVLLFVBQUFBLGVBQWUsQ0FBQ3pQLE9BQWhCLENBQXdCLFVBQUN6TCxPQUFELEVBQWE7RUFDbkNrYSxZQUFBQSxnQkFBZ0IsQ0FBQy9CLFdBQWpCLENBQTZCblksT0FBN0IsQ0FBQSxDQUFBO0VBQ0QsV0FGRCxDQUFBLENBQUE7RUFJQW9NLFVBQUFBLFVBQVUsQ0FBQ1gsT0FBWCxDQUFtQixVQUFDc04sQ0FBRCxFQUFBO0VBQUEsWUFBT0EsT0FBQUEsQ0FBQyxDQUFDNUYsZ0JBQUYsRUFBUCxDQUFBO0VBQUEsV0FBbkIsQ0FBQSxDQUFBO0VBQ0QsU0FSRCxDQUFBLENBQUE7RUFTRCxPQUFBOztFQUVELE1BQUEsT0FBTzZILFlBQVAsQ0FBQTtFQUNELEtBQUE7Ozs7SUEvRXVDckM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
