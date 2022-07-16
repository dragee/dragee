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

  var passiveFalse = isSupportPassiveEvents$1 ? {
    passive: false
  } : false;
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

  function _copyStyles(source, destination) {
    var cs = window.getComputedStyle(source);

    for (var i = 0; i < cs.length; i++) {
      var key = cs[i];

      if (key.indexOf('transition') < 0 && key.indexOf('transform') < 0) {
        destination.style[key] = cs[key];
      }
    }

    for (var _i = 0; _i < source.children.length; _i++) {
      _copyStyles(source.children[_i], destination.children[_i]);
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
      _this.touchDraggingThreshold = 'touchDraggingThreshold' in _this.options ? _this.options.touchDraggingThreshold : 0;

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

        this.handler.addEventListener(touchEvents.start, this._dragStart, passiveFalse);
        this.handler.addEventListener(mouseEvents.start, this._dragStart, passiveFalse);
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
        if (!this.element.style[transitionProperty]) {
          this.element.style[transitionProperty] = window.getComputedStyle(this.element)[transitionProperty];
        }
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
          transition = transition.replace(/transform \d*m?s/g, transitionCss);
        }

        if (this.element.style[transitionProperty] !== transition) {
          this.element.style[transitionProperty] = transition;
        }
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

        if (this.element.style[transformProperty] !== transform) {
          this.element.style[transformProperty] = transform;
        }
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
      key: "seemsScrolling",
      value: function seemsScrolling() {
        return +new Date() - this._startTouchTimestamp < this.touchDraggingThreshold;
      }
    }, {
      key: "shouldUseNativeDragAndDrop",
      value: function shouldUseNativeDragAndDrop() {
        if (this.isTouchEvent) {
          return this.nativeDragAndDrop && this.emulateNativeDragAndDropOnTouch;
        } else {
          return this.nativeDragAndDrop;
        }
      }
    }, {
      key: "dragStart",
      value: function dragStart(event) {
        var _this3 = this;

        if (!this._enable) {
          return;
        }

        this.isTouchEvent = isTouch && event instanceof window.TouchEvent;
        this.touchPoint = this._startTouchPoint = new Point(this.isTouchEvent ? event.changedTouches[0].pageX : event.clientX, this.isTouchEvent ? event.changedTouches[0].pageY : event.clientY);
        this._startPosition = this.getPosition();

        if (this.isTouchEvent) {
          this._touchId = event.changedTouches[0].identifier;
          this._startTouchTimestamp = +new Date();
        }

        this._startScrollPoint = new Point(window.scrollX, window.scrollY);

        if (event.target instanceof window.HTMLInputElement || event.target instanceof window.HTMLInputElement) {
          event.target.focus();
        }

        if (this.shouldUseNativeDragAndDrop()) {
          if (this.isTouchEvent && this.emulateNativeDragAndDropOnTouch) {
            var emulateOnFirstMove = function emulateOnFirstMove(event) {
              if (_this3.seemsScrolling()) {
                _this3.cancelDragging();
              } else {
                _this3.emulateNativeDragAndDrop(event);
              }

              cancelEmulation();
            };

            var cancelEmulation = function cancelEmulation() {
              document.removeEventListener(touchEvents.move, emulateOnFirstMove);
              document.removeEventListener(touchEvents.end, cancelEmulation);
            };

            document.addEventListener(touchEvents.move, emulateOnFirstMove, passiveFalse);
            document.addEventListener(touchEvents.end, cancelEmulation, passiveFalse);
          } else {
            this.element.draggable = true;
            document.addEventListener(mouseEvents.end, this._nativeDragEnd, passiveFalse);
          }
        } else {
          document.addEventListener(touchEvents.move, this._dragMove, passiveFalse);
          document.addEventListener(mouseEvents.move, this._dragMove, passiveFalse);
          document.addEventListener(touchEvents.end, this._dragEnd, passiveFalse);
          document.addEventListener(mouseEvents.end, this._dragEnd, passiveFalse);
        }

        window.addEventListener('scroll', this._scroll);
        this.emit('drag:start');
      }
    }, {
      key: "dragMove",
      value: function dragMove(event) {
        var touch;
        this.isDragging = true;
        this.isTouchEvent = isTouch && event instanceof window.TouchEvent;

        if (this.isTouchEvent) {
          touch = getTouchByID(event, this._touchId);

          if (!touch) {
            return;
          }

          if (this.seemsScrolling()) {
            this.cancelDragging();
            return;
          }
        }

        event.stopPropagation();
        event.preventDefault();
        this.touchPoint = new Point(this.isTouchEvent ? touch.pageX : event.clientX, this.isTouchEvent ? touch.pageY : event.clientY);

        var point = this._startPosition.add(this.touchPoint.sub(this._startTouchPoint)).add(this.scrollPoint.sub(this._startScrollPoint));

        point = this.bounding.bound(point, this.getSize());
        this.move(point);
        this.element.classList.add('dragee-active');
      }
    }, {
      key: "dragEnd",
      value: function dragEnd(event) {
        var _this4 = this;

        this.isTouchEvent = isTouch && event instanceof window.TouchEvent;

        if (this.isTouchEvent && !getTouchByID(event, this._touchId)) {
          return;
        }

        if (this.isDragging) {
          event.stopPropagation();
          event.preventDefault();
        }

        this.dragEndAction();
        this.emit('drag:end');
        this.cancelDragging();
        setTimeout(function () {
          return _this4.element.classList.remove('dragee-active');
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
      key: "cancelDragging",
      value: function cancelDragging() {
        document.removeEventListener(touchEvents.move, this._dragMove);
        document.removeEventListener(mouseEvents.move, this._dragMove);
        document.removeEventListener(touchEvents.end, this._dragEnd);
        document.removeEventListener(mouseEvents.end, this._dragEnd);
        document.removeEventListener(mouseEvents.end, this._nativeDragEnd);
        window.removeEventListener('scroll', this._scroll);
        this.isDragging = false;
        this.element.removeAttribute('draggable');
      }
    }, {
      key: "copyStyles",
      value: function copyStyles(source, destination) {
        if (this.options.copyStyles) {
          this.options.copyStyles(source, destination);
        } else {
          _copyStyles(source, destination);
        }
      }
    }, {
      key: "emulateNativeDragAndDrop",
      value: function emulateNativeDragAndDrop(event) {
        var _this5 = this;

        var containerRect = this.container.getBoundingClientRect();
        var clonedElement = this.element.cloneNode(true);
        clonedElement.style[transformProperty] = '';
        this.copyStyles(this.element, clonedElement);
        clonedElement.style.position = 'absolute';
        document.body.appendChild(clonedElement);
        this.element.classList.add('dragee-placeholder');
        var emulationDraggable = new Draggable(clonedElement, {
          container: document.body,
          touchDraggingThreshold: 0,
          bound: function bound(point) {
            return point;
          },
          on: {
            'drag:move': function dragMove() {
              var containerRectPoint = new Point(containerRect.left, containerRect.top);
              _this5.position = emulationDraggable.position.sub(containerRectPoint).sub(_this5._startScrollPoint);

              _this5.emit('drag:move');
            },
            'drag:end': function dragEnd() {
              emulationDraggable.destroy();
              document.body.removeChild(clonedElement);

              _this5.element.classList.remove('dragee-placeholder');

              _this5.element.classList.remove('dragee-active');

              _this5.emit('drag:end');

              _this5.dragEndAction();
            }
          }
        });
        var containerRectPoint = new Point(containerRect.left, containerRect.top);
        emulationDraggable._startScrollPoint = this._startScrollPoint;
        emulationDraggable.move(this.pinnedPosition.add(containerRectPoint).add(new Point(window.scrollX, window.scrollY)));
        emulationDraggable.dragStart(event);
        event.preventDefault();
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
        return this.options.emulateNativeDragAndDropOnTouch || false;
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

  var resizeObservers = [];

  var hasActiveObservations = function () {
      return resizeObservers.some(function (ro) { return ro.activeTargets.length > 0; });
  };

  var hasSkippedObservations = function () {
      return resizeObservers.some(function (ro) { return ro.skippedTargets.length > 0; });
  };

  var msg = 'ResizeObserver loop completed with undelivered notifications.';
  var deliverResizeLoopError = function () {
      var event;
      if (typeof ErrorEvent === 'function') {
          event = new ErrorEvent('error', {
              message: msg
          });
      }
      else {
          event = document.createEvent('Event');
          event.initEvent('error', false, false);
          event.message = msg;
      }
      window.dispatchEvent(event);
  };

  var ResizeObserverBoxOptions;
  (function (ResizeObserverBoxOptions) {
      ResizeObserverBoxOptions["BORDER_BOX"] = "border-box";
      ResizeObserverBoxOptions["CONTENT_BOX"] = "content-box";
      ResizeObserverBoxOptions["DEVICE_PIXEL_CONTENT_BOX"] = "device-pixel-content-box";
  })(ResizeObserverBoxOptions || (ResizeObserverBoxOptions = {}));

  var freeze = function (obj) { return Object.freeze(obj); };

  var ResizeObserverSize = (function () {
      function ResizeObserverSize(inlineSize, blockSize) {
          this.inlineSize = inlineSize;
          this.blockSize = blockSize;
          freeze(this);
      }
      return ResizeObserverSize;
  }());

  var DOMRectReadOnly = (function () {
      function DOMRectReadOnly(x, y, width, height) {
          this.x = x;
          this.y = y;
          this.width = width;
          this.height = height;
          this.top = this.y;
          this.left = this.x;
          this.bottom = this.top + this.height;
          this.right = this.left + this.width;
          return freeze(this);
      }
      DOMRectReadOnly.prototype.toJSON = function () {
          var _a = this, x = _a.x, y = _a.y, top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left, width = _a.width, height = _a.height;
          return { x: x, y: y, top: top, right: right, bottom: bottom, left: left, width: width, height: height };
      };
      DOMRectReadOnly.fromRect = function (rectangle) {
          return new DOMRectReadOnly(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
      };
      return DOMRectReadOnly;
  }());

  var isSVG = function (target) { return target instanceof SVGElement && 'getBBox' in target; };
  var isHidden = function (target) {
      if (isSVG(target)) {
          var _a = target.getBBox(), width = _a.width, height = _a.height;
          return !width && !height;
      }
      var _b = target, offsetWidth = _b.offsetWidth, offsetHeight = _b.offsetHeight;
      return !(offsetWidth || offsetHeight || target.getClientRects().length);
  };
  var isElement = function (obj) {
      var _a, _b;
      if (obj instanceof Element) {
          return true;
      }
      var scope = (_b = (_a = obj) === null || _a === void 0 ? void 0 : _a.ownerDocument) === null || _b === void 0 ? void 0 : _b.defaultView;
      return !!(scope && obj instanceof scope.Element);
  };
  var isReplacedElement = function (target) {
      switch (target.tagName) {
          case 'INPUT':
              if (target.type !== 'image') {
                  break;
              }
          case 'VIDEO':
          case 'AUDIO':
          case 'EMBED':
          case 'OBJECT':
          case 'CANVAS':
          case 'IFRAME':
          case 'IMG':
              return true;
      }
      return false;
  };

  var global = typeof window !== 'undefined' ? window : {};

  var cache = new WeakMap();
  var scrollRegexp = /auto|scroll/;
  var verticalRegexp = /^tb|vertical/;
  var IE = (/msie|trident/i).test(global.navigator && global.navigator.userAgent);
  var parseDimension = function (pixel) { return parseFloat(pixel || '0'); };
  var size = function (inlineSize, blockSize, switchSizes) {
      if (inlineSize === void 0) { inlineSize = 0; }
      if (blockSize === void 0) { blockSize = 0; }
      if (switchSizes === void 0) { switchSizes = false; }
      return new ResizeObserverSize((switchSizes ? blockSize : inlineSize) || 0, (switchSizes ? inlineSize : blockSize) || 0);
  };
  var zeroBoxes = freeze({
      devicePixelContentBoxSize: size(),
      borderBoxSize: size(),
      contentBoxSize: size(),
      contentRect: new DOMRectReadOnly(0, 0, 0, 0)
  });
  var calculateBoxSizes = function (target, forceRecalculation) {
      if (forceRecalculation === void 0) { forceRecalculation = false; }
      if (cache.has(target) && !forceRecalculation) {
          return cache.get(target);
      }
      if (isHidden(target)) {
          cache.set(target, zeroBoxes);
          return zeroBoxes;
      }
      var cs = getComputedStyle(target);
      var svg = isSVG(target) && target.ownerSVGElement && target.getBBox();
      var removePadding = !IE && cs.boxSizing === 'border-box';
      var switchSizes = verticalRegexp.test(cs.writingMode || '');
      var canScrollVertically = !svg && scrollRegexp.test(cs.overflowY || '');
      var canScrollHorizontally = !svg && scrollRegexp.test(cs.overflowX || '');
      var paddingTop = svg ? 0 : parseDimension(cs.paddingTop);
      var paddingRight = svg ? 0 : parseDimension(cs.paddingRight);
      var paddingBottom = svg ? 0 : parseDimension(cs.paddingBottom);
      var paddingLeft = svg ? 0 : parseDimension(cs.paddingLeft);
      var borderTop = svg ? 0 : parseDimension(cs.borderTopWidth);
      var borderRight = svg ? 0 : parseDimension(cs.borderRightWidth);
      var borderBottom = svg ? 0 : parseDimension(cs.borderBottomWidth);
      var borderLeft = svg ? 0 : parseDimension(cs.borderLeftWidth);
      var horizontalPadding = paddingLeft + paddingRight;
      var verticalPadding = paddingTop + paddingBottom;
      var horizontalBorderArea = borderLeft + borderRight;
      var verticalBorderArea = borderTop + borderBottom;
      var horizontalScrollbarThickness = !canScrollHorizontally ? 0 : target.offsetHeight - verticalBorderArea - target.clientHeight;
      var verticalScrollbarThickness = !canScrollVertically ? 0 : target.offsetWidth - horizontalBorderArea - target.clientWidth;
      var widthReduction = removePadding ? horizontalPadding + horizontalBorderArea : 0;
      var heightReduction = removePadding ? verticalPadding + verticalBorderArea : 0;
      var contentWidth = svg ? svg.width : parseDimension(cs.width) - widthReduction - verticalScrollbarThickness;
      var contentHeight = svg ? svg.height : parseDimension(cs.height) - heightReduction - horizontalScrollbarThickness;
      var borderBoxWidth = contentWidth + horizontalPadding + verticalScrollbarThickness + horizontalBorderArea;
      var borderBoxHeight = contentHeight + verticalPadding + horizontalScrollbarThickness + verticalBorderArea;
      var boxes = freeze({
          devicePixelContentBoxSize: size(Math.round(contentWidth * devicePixelRatio), Math.round(contentHeight * devicePixelRatio), switchSizes),
          borderBoxSize: size(borderBoxWidth, borderBoxHeight, switchSizes),
          contentBoxSize: size(contentWidth, contentHeight, switchSizes),
          contentRect: new DOMRectReadOnly(paddingLeft, paddingTop, contentWidth, contentHeight)
      });
      cache.set(target, boxes);
      return boxes;
  };
  var calculateBoxSize = function (target, observedBox, forceRecalculation) {
      var _a = calculateBoxSizes(target, forceRecalculation), borderBoxSize = _a.borderBoxSize, contentBoxSize = _a.contentBoxSize, devicePixelContentBoxSize = _a.devicePixelContentBoxSize;
      switch (observedBox) {
          case ResizeObserverBoxOptions.DEVICE_PIXEL_CONTENT_BOX:
              return devicePixelContentBoxSize;
          case ResizeObserverBoxOptions.BORDER_BOX:
              return borderBoxSize;
          default:
              return contentBoxSize;
      }
  };

  var ResizeObserverEntry = (function () {
      function ResizeObserverEntry(target) {
          var boxes = calculateBoxSizes(target);
          this.target = target;
          this.contentRect = boxes.contentRect;
          this.borderBoxSize = freeze([boxes.borderBoxSize]);
          this.contentBoxSize = freeze([boxes.contentBoxSize]);
          this.devicePixelContentBoxSize = freeze([boxes.devicePixelContentBoxSize]);
      }
      return ResizeObserverEntry;
  }());

  var calculateDepthForNode = function (node) {
      if (isHidden(node)) {
          return Infinity;
      }
      var depth = 0;
      var parent = node.parentNode;
      while (parent) {
          depth += 1;
          parent = parent.parentNode;
      }
      return depth;
  };

  var broadcastActiveObservations = function () {
      var shallowestDepth = Infinity;
      var callbacks = [];
      resizeObservers.forEach(function processObserver(ro) {
          if (ro.activeTargets.length === 0) {
              return;
          }
          var entries = [];
          ro.activeTargets.forEach(function processTarget(ot) {
              var entry = new ResizeObserverEntry(ot.target);
              var targetDepth = calculateDepthForNode(ot.target);
              entries.push(entry);
              ot.lastReportedSize = calculateBoxSize(ot.target, ot.observedBox);
              if (targetDepth < shallowestDepth) {
                  shallowestDepth = targetDepth;
              }
          });
          callbacks.push(function resizeObserverCallback() {
              ro.callback.call(ro.observer, entries, ro.observer);
          });
          ro.activeTargets.splice(0, ro.activeTargets.length);
      });
      for (var _i = 0, callbacks_1 = callbacks; _i < callbacks_1.length; _i++) {
          var callback = callbacks_1[_i];
          callback();
      }
      return shallowestDepth;
  };

  var gatherActiveObservationsAtDepth = function (depth) {
      resizeObservers.forEach(function processObserver(ro) {
          ro.activeTargets.splice(0, ro.activeTargets.length);
          ro.skippedTargets.splice(0, ro.skippedTargets.length);
          ro.observationTargets.forEach(function processTarget(ot) {
              if (ot.isActive()) {
                  if (calculateDepthForNode(ot.target) > depth) {
                      ro.activeTargets.push(ot);
                  }
                  else {
                      ro.skippedTargets.push(ot);
                  }
              }
          });
      });
  };

  var process = function () {
      var depth = 0;
      gatherActiveObservationsAtDepth(depth);
      while (hasActiveObservations()) {
          depth = broadcastActiveObservations();
          gatherActiveObservationsAtDepth(depth);
      }
      if (hasSkippedObservations()) {
          deliverResizeLoopError();
      }
      return depth > 0;
  };

  var trigger;
  var callbacks = [];
  var notify = function () { return callbacks.splice(0).forEach(function (cb) { return cb(); }); };
  var queueMicroTask = function (callback) {
      if (!trigger) {
          var toggle_1 = 0;
          var el_1 = document.createTextNode('');
          var config = { characterData: true };
          new MutationObserver(function () { return notify(); }).observe(el_1, config);
          trigger = function () { el_1.textContent = "" + (toggle_1 ? toggle_1-- : toggle_1++); };
      }
      callbacks.push(callback);
      trigger();
  };

  var queueResizeObserver = function (cb) {
      queueMicroTask(function ResizeObserver() {
          requestAnimationFrame(cb);
      });
  };

  var watching = 0;
  var isWatching = function () { return !!watching; };
  var CATCH_PERIOD = 250;
  var observerConfig = { attributes: true, characterData: true, childList: true, subtree: true };
  var events = [
      'resize',
      'load',
      'transitionend',
      'animationend',
      'animationstart',
      'animationiteration',
      'keyup',
      'keydown',
      'mouseup',
      'mousedown',
      'mouseover',
      'mouseout',
      'blur',
      'focus'
  ];
  var time = function (timeout) {
      if (timeout === void 0) { timeout = 0; }
      return Date.now() + timeout;
  };
  var scheduled = false;
  var Scheduler = (function () {
      function Scheduler() {
          var _this = this;
          this.stopped = true;
          this.listener = function () { return _this.schedule(); };
      }
      Scheduler.prototype.run = function (timeout) {
          var _this = this;
          if (timeout === void 0) { timeout = CATCH_PERIOD; }
          if (scheduled) {
              return;
          }
          scheduled = true;
          var until = time(timeout);
          queueResizeObserver(function () {
              var elementsHaveResized = false;
              try {
                  elementsHaveResized = process();
              }
              finally {
                  scheduled = false;
                  timeout = until - time();
                  if (!isWatching()) {
                      return;
                  }
                  if (elementsHaveResized) {
                      _this.run(1000);
                  }
                  else if (timeout > 0) {
                      _this.run(timeout);
                  }
                  else {
                      _this.start();
                  }
              }
          });
      };
      Scheduler.prototype.schedule = function () {
          this.stop();
          this.run();
      };
      Scheduler.prototype.observe = function () {
          var _this = this;
          var cb = function () { return _this.observer && _this.observer.observe(document.body, observerConfig); };
          document.body ? cb() : global.addEventListener('DOMContentLoaded', cb);
      };
      Scheduler.prototype.start = function () {
          var _this = this;
          if (this.stopped) {
              this.stopped = false;
              this.observer = new MutationObserver(this.listener);
              this.observe();
              events.forEach(function (name) { return global.addEventListener(name, _this.listener, true); });
          }
      };
      Scheduler.prototype.stop = function () {
          var _this = this;
          if (!this.stopped) {
              this.observer && this.observer.disconnect();
              events.forEach(function (name) { return global.removeEventListener(name, _this.listener, true); });
              this.stopped = true;
          }
      };
      return Scheduler;
  }());
  var scheduler = new Scheduler();
  var updateCount = function (n) {
      !watching && n > 0 && scheduler.start();
      watching += n;
      !watching && scheduler.stop();
  };

  var skipNotifyOnElement = function (target) {
      return !isSVG(target)
          && !isReplacedElement(target)
          && getComputedStyle(target).display === 'inline';
  };
  var ResizeObservation = (function () {
      function ResizeObservation(target, observedBox) {
          this.target = target;
          this.observedBox = observedBox || ResizeObserverBoxOptions.CONTENT_BOX;
          this.lastReportedSize = {
              inlineSize: 0,
              blockSize: 0
          };
      }
      ResizeObservation.prototype.isActive = function () {
          var size = calculateBoxSize(this.target, this.observedBox, true);
          if (skipNotifyOnElement(this.target)) {
              this.lastReportedSize = size;
          }
          if (this.lastReportedSize.inlineSize !== size.inlineSize
              || this.lastReportedSize.blockSize !== size.blockSize) {
              return true;
          }
          return false;
      };
      return ResizeObservation;
  }());

  var ResizeObserverDetail = (function () {
      function ResizeObserverDetail(resizeObserver, callback) {
          this.activeTargets = [];
          this.skippedTargets = [];
          this.observationTargets = [];
          this.observer = resizeObserver;
          this.callback = callback;
      }
      return ResizeObserverDetail;
  }());

  var observerMap = new WeakMap();
  var getObservationIndex = function (observationTargets, target) {
      for (var i = 0; i < observationTargets.length; i += 1) {
          if (observationTargets[i].target === target) {
              return i;
          }
      }
      return -1;
  };
  var ResizeObserverController = (function () {
      function ResizeObserverController() {
      }
      ResizeObserverController.connect = function (resizeObserver, callback) {
          var detail = new ResizeObserverDetail(resizeObserver, callback);
          observerMap.set(resizeObserver, detail);
      };
      ResizeObserverController.observe = function (resizeObserver, target, options) {
          var detail = observerMap.get(resizeObserver);
          var firstObservation = detail.observationTargets.length === 0;
          if (getObservationIndex(detail.observationTargets, target) < 0) {
              firstObservation && resizeObservers.push(detail);
              detail.observationTargets.push(new ResizeObservation(target, options && options.box));
              updateCount(1);
              scheduler.schedule();
          }
      };
      ResizeObserverController.unobserve = function (resizeObserver, target) {
          var detail = observerMap.get(resizeObserver);
          var index = getObservationIndex(detail.observationTargets, target);
          var lastObservation = detail.observationTargets.length === 1;
          if (index >= 0) {
              lastObservation && resizeObservers.splice(resizeObservers.indexOf(detail), 1);
              detail.observationTargets.splice(index, 1);
              updateCount(-1);
          }
      };
      ResizeObserverController.disconnect = function (resizeObserver) {
          var _this = this;
          var detail = observerMap.get(resizeObserver);
          detail.observationTargets.slice().forEach(function (ot) { return _this.unobserve(resizeObserver, ot.target); });
          detail.activeTargets.splice(0, detail.activeTargets.length);
      };
      return ResizeObserverController;
  }());

  var ResizeObserver$1 = (function () {
      function ResizeObserver(callback) {
          if (arguments.length === 0) {
              throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
          }
          if (typeof callback !== 'function') {
              throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
          }
          ResizeObserverController.connect(this, callback);
      }
      ResizeObserver.prototype.observe = function (target, options) {
          if (arguments.length === 0) {
              throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
          }
          if (!isElement(target)) {
              throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
          }
          ResizeObserverController.observe(this, target, options);
      };
      ResizeObserver.prototype.unobserve = function (target) {
          if (arguments.length === 0) {
              throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
          }
          if (!isElement(target)) {
              throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
          }
          ResizeObserverController.unobserve(this, target);
      };
      ResizeObserver.prototype.disconnect = function () {
          ResizeObserverController.disconnect(this);
      };
      ResizeObserver.toString = function () {
          return 'function ResizeObserver () { [polyfill code] }';
      };
      return ResizeObserver;
  }());

  function debounce(func, wait, immediate) {
    var timeout;
    return function executedFunction() {
      var context = this;
      var args = arguments;

      var later = function later() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };

      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  var ResizeObserver = window.ResizeObserver || ResizeObserver$1;

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
      _this.container = options.container;
      _this.draggables = draggables;
      _this.changedDuringIteration = false;
      _this.resizeObserver = new ResizeObserver(debounce(_this.onResize.bind(_assertThisInitialized(_this)), 100));

      if (_this.container) {
        _this.resizeObserver.observe(_this.container);
      }

      _this.init();

      return _this;
    }

    _createClass(List, [{
      key: "onResize",
      value: function onResize() {
        if (this.options.reorderOnChange) this.reset();
        this.draggables.forEach(function (d) {
          return d.startPositioning();
        });
      }
    }, {
      key: "init",
      value: function init() {
        var _this2 = this;

        this._enable = true;
        this.draggables.forEach(function (draggable) {
          return _this2.initDraggable(draggable);
        });
      }
    }, {
      key: "initDraggable",
      value: function initDraggable(draggable) {
        var _this3 = this;

        draggable.enable = this._enable;
        draggable.on('drag:move', function () {
          return _this3.onMove(draggable);
        });

        draggable.dragEndAction = function () {
          draggable.pinPosition(draggable.pinnedPosition, _this3.options.timeEnd);

          _this3.onEnd(draggable);
        };

        this.resizeObserver.observe(draggable.element);
      }
    }, {
      key: "releaseDraggable",
      value: function releaseDraggable(draggable) {
        this.resizeObserver.unobserve(draggable.element);
        draggable.resetOn('drag:end');
        draggable.resetOn('drag:move');
        removeItem(this.draggables, draggable);
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

          if (this.options.reorderOnChange && this.options.container) {
            this.reorderElements(draggable);
          }
        }
      }
    }, {
      key: "reorderElements",
      value: function reorderElements(movedDraggable) {
        var sortedDraggables = this.getSortedDraggables();
        var index = sortedDraggables.indexOf(movedDraggable);
        var next = sortedDraggables[index + 1];
        this.reset();

        if (next) {
          this.container.insertBefore(movedDraggable.element, next.element);
        } else {
          this.container.appendChild(movedDraggable.element);
        }

        this.draggables.forEach(function (d) {
          return d.startPositioning();
        });
        this.emit('list:reordered');
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
          return _this5.releaseDraggable(draggable);
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

        if (this.container) {
          this.resizeObserver.unobserve(this.container);
        }
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
      value: function factory(containerElement, elements) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var draggables = Array.from(elements).map(function (element) {
          return new Draggable(element, Object.assign({
            container: containerElement
          }, options.draggable || {}));
        });
        return new List(draggables, Object.assign({
          container: containerElement
        }, options.list || {}));
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
      var _this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, BubblingList);

      _this = _super.call(this, draggables, options);

      _this.autoDetectVerticalGap();

      _this.autoDetectStartPosition();

      return _this;
    }

    _createClass(BubblingList, [{
      key: "autoDetectVerticalGap",
      value: function autoDetectVerticalGap() {
        if (this.draggables.length >= 2 && !this.verticalGap) {
          var sorted = this.getSortedDraggables();
          this.verticalGap = sorted[1].pinnedPosition.y - sorted[0].pinnedPosition.y - sorted[0].getSize().y;
        }
      }
    }, {
      key: "autoDetectStartPosition",
      value: function autoDetectStartPosition() {
        if (this.draggables.length >= 1 && !this.startPosition) {
          this.startPosition = this.draggables[0].pinnedPosition;
        }
      }
    }, {
      key: "initDraggable",
      value: function initDraggable(draggable) {
        var _this2 = this;

        _get(_getPrototypeOf(BubblingList.prototype), "initDraggable", this).call(this, draggable);

        draggable.on('drag:start', function () {
          return _this2.onDragStart(draggable);
        });
      }
    }, {
      key: "onResize",
      value: function onResize() {
        _get(_getPrototypeOf(BubblingList.prototype), "onResize", this).call(this);

        this.autoDetectVerticalGap();
      }
    }, {
      key: "add",
      value: function add(draggables) {
        _get(_getPrototypeOf(BubblingList.prototype), "add", this).call(this, draggables);

        this.autoDetectStartPosition();
        this.autoDetectVerticalGap();
      }
    }, {
      key: "onDragStart",
      value: function onDragStart(draggable) {
        this.cachedSortedDraggables = this.getSortedDraggables();
        this.indexOfActiveDraggable = this.cachedSortedDraggables.indexOf(draggable);
      }
    }, {
      key: "onMove",
      value: function onMove(draggable) {
        var prevDraggable = this.cachedSortedDraggables[this.indexOfActiveDraggable - 1];
        var nextDraggable = this.cachedSortedDraggables[this.indexOfActiveDraggable + 1];
        var currentOrder = [prevDraggable, draggable, nextDraggable].filter(Boolean).map(function (d) {
          return d.pinnedPosition;
        });
        var currentPosition = draggable.pinnedPosition;
        var targetIndex = indexOfNearestPoint(currentOrder, draggable.position, 10000, this.distanceFunc);

        if (prevDraggable && targetIndex === 0) {
          if (draggable.shouldUseNativeDragAndDrop()) {
            draggable.pinPosition(prevDraggable.pinnedPosition);
          } else {
            draggable.pinnedPosition = prevDraggable.pinnedPosition.clone();
          }

          prevDraggable.pinPosition(new Point(currentPosition.x, draggable.pinnedPosition.y + draggable.getSize().y + (this.verticalGap || 0)), this.options.timeExcange);
          arrayMove(this.cachedSortedDraggables, this.indexOfActiveDraggable--, this.indexOfActiveDraggable);
          this.onMove(draggable);
          this.changedDuringIteration = true;
        } else if (nextDraggable && (targetIndex === 2 || targetIndex === 1 && !prevDraggable)) {
          nextDraggable.pinPosition(draggable.pinnedPosition, this.options.timeExcange);
          var draggableNewPosition = new Point(nextDraggable.pinnedPosition.x, nextDraggable.pinnedPosition.y + nextDraggable.getSize().y + (this.verticalGap || 0));

          if (draggable.shouldUseNativeDragAndDrop()) {
            draggable.pinPosition(draggableNewPosition);
          } else {
            draggable.pinnedPosition = draggableNewPosition;
          }

          arrayMove(this.cachedSortedDraggables, this.indexOfActiveDraggable++, this.indexOfActiveDraggable);
          this.onMove(draggable);
          this.changedDuringIteration = true;
        }
      }
    }, {
      key: "bubbling",
      value: function bubbling(sortedDraggables, currentDraggable) {
        var _this3 = this;

        var currentPosition = this.startPosition.clone();
        sortedDraggables || (sortedDraggables = this.getSortedDraggables());
        sortedDraggables.forEach(function (draggable) {
          if (!draggable.pinnedPosition.compare(currentPosition)) {
            if (draggable === currentDraggable && !currentDraggable.shouldUseNativeDragAndDrop()) {
              draggable.pinnedPosition = currentPosition.clone();
            } else {
              draggable.pinPosition(currentPosition, draggable === currentDraggable ? 0 : _this3.options.timeExcange);
            }
          }

          currentPosition.y = currentPosition.y + draggable.getSize().y + (_this3.verticalGap || 0);
        });
      }
    }, {
      key: "remove",
      value: function remove(draggables) {
        var _this4 = this;

        if (!(draggables instanceof Array)) {
          draggables = [draggables];
        }

        draggables.forEach(function (draggable) {
          return _this4.releaseDraggable(draggable);
        });
        this.draggables = this.draggables.filter(function (d) {
          return !draggables.includes(d);
        });
        this.draggables.forEach(function (d) {
          return d.startPositioning();
        });
        this.bubbling();
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
        return new BubblingList(draggables, Object.assign({
          container: containerElement
        }, options.list || {}));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZGV2LmpzIiwic291cmNlcyI6WyIuLi9zcmMvZ2VvbWV0cnkvcG9pbnQuanMiLCIuLi9zcmMvZ2VvbWV0cnkvcmVjdGFuZ2xlLmpzIiwiLi4vc3JjL3V0aWxzL2dldC1kZWZhdWx0LWNvbnRhaW5lci5qcyIsIi4uL3NyYy9ldmVudEVtaXR0ZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvZGVzYW5kcm8tZ2V0LXN0eWxlLXByb3BlcnR5L2dldC1zdHlsZS1wcm9wZXJ0eS5qcyIsIi4uL3NyYy9nZW9tZXRyeS9kaXN0YW5jZXMuanMiLCIuLi9zcmMvZ2VvbWV0cnkvYm91bmRzLmpzIiwiLi4vc3JjL2dlb21ldHJ5L2FuZ2xlcy5qcyIsIi4uL3NyYy9ib3VuZGluZy5qcyIsIi4uL3NyYy91dGlscy9yZW1vdmUtYXJyYXktaXRlbS5qcyIsIi4uL3NyYy91dGlscy9yYW5nZS5qcyIsIi4uL3NyYy9wb3NpdGlvbmluZy5qcyIsIi4uL3NyYy90YXJnZXQuanMiLCIuLi9zcmMvc2NvcGUuanMiLCIuLi9zcmMvdXRpbHMvaXMtc3VwcG9ydC1wYXNzaXZlLWV2ZW50cy5qcyIsIi4uL3NyYy9kcmFnZ2FibGUuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL3V0aWxzL3Jlc2l6ZU9ic2VydmVycy5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvYWxnb3JpdGhtcy9oYXNBY3RpdmVPYnNlcnZhdGlvbnMuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL2FsZ29yaXRobXMvaGFzU2tpcHBlZE9ic2VydmF0aW9ucy5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvYWxnb3JpdGhtcy9kZWxpdmVyUmVzaXplTG9vcEVycm9yLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BqdWdnbGUvcmVzaXplLW9ic2VydmVyL2xpYi9SZXNpemVPYnNlcnZlckJveE9wdGlvbnMuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL3V0aWxzL2ZyZWV6ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvUmVzaXplT2JzZXJ2ZXJTaXplLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BqdWdnbGUvcmVzaXplLW9ic2VydmVyL2xpYi9ET01SZWN0UmVhZE9ubHkuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL3V0aWxzL2VsZW1lbnQuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL3V0aWxzL2dsb2JhbC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvYWxnb3JpdGhtcy9jYWxjdWxhdGVCb3hTaXplLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BqdWdnbGUvcmVzaXplLW9ic2VydmVyL2xpYi9SZXNpemVPYnNlcnZlckVudHJ5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BqdWdnbGUvcmVzaXplLW9ic2VydmVyL2xpYi9hbGdvcml0aG1zL2NhbGN1bGF0ZURlcHRoRm9yTm9kZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvYWxnb3JpdGhtcy9icm9hZGNhc3RBY3RpdmVPYnNlcnZhdGlvbnMuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL2FsZ29yaXRobXMvZ2F0aGVyQWN0aXZlT2JzZXJ2YXRpb25zQXREZXB0aC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvdXRpbHMvcHJvY2Vzcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvdXRpbHMvcXVldWVNaWNyb1Rhc2suanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL3V0aWxzL3F1ZXVlUmVzaXplT2JzZXJ2ZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL3V0aWxzL3NjaGVkdWxlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvUmVzaXplT2JzZXJ2YXRpb24uanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL1Jlc2l6ZU9ic2VydmVyRGV0YWlsLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BqdWdnbGUvcmVzaXplLW9ic2VydmVyL2xpYi9SZXNpemVPYnNlcnZlckNvbnRyb2xsZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL1Jlc2l6ZU9ic2VydmVyLmpzIiwiLi4vc3JjL3V0aWxzL2RlYm91bmNlLmpzIiwiLi4vc3JjL2xpc3QuanMiLCIuLi9zcmMvYnViYmxpbmdMaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGdldFN1bVZhbHVlT2ZTdHlsZVJ1bGVzKGVsZW1lbnQsIHJ1bGVzKSB7XG4gIHJldHVybiBydWxlcy5yZWR1Y2UoKHN1bSwgcnVsZSkgPT4ge1xuICAgIHJldHVybiBzdW0gKyBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KVtydWxlXXx8MClcbiAgfSwgMClcbn1cblxuLyoqIENsYXNzIHJlcHJlc2VudGluZyBhIHBvaW50LiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9pbnQge1xuICAvKipcbiAgKiBDcmVhdGUgYSBwb2ludC5cbiAgKiBAcGFyYW0ge251bWJlcn0geCAtIFRoZSB4IHZhbHVlLlxuICAqIEBwYXJhbSB7bnVtYmVyfSB5IC0gVGhlIHkgdmFsdWUuXG4gICovXG4gIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICB0aGlzLnggPSB4XG4gICAgdGhpcy55ID0geVxuICB9XG5cbiAgYWRkKHApIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCArIHAueCwgdGhpcy55ICsgcC55KVxuICB9XG5cbiAgc3ViKHApIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCAtIHAueCwgdGhpcy55IC0gcC55KVxuICB9XG5cbiAgbXVsdChrKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnggKiBrLCB0aGlzLnkgKiBrKVxuICB9XG5cbiAgbmVnYXRpdmUoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCgtdGhpcy54LCAtdGhpcy55KVxuICB9XG5cbiAgY29tcGFyZShwKSB7XG4gICAgcmV0dXJuICh0aGlzLnggPT09IHAueCAmJiB0aGlzLnkgPT09IHAueSlcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54LCB0aGlzLnkpXG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gYHt4PSR7dGhpcy54fSx5PSR7dGhpcy55fWBcbiAgfVxuXG4gIHN0YXRpYyBlbGVtZW50T2Zmc2V0KGVsZW1lbnQsIHBhcmVudCkge1xuICAgIHBhcmVudCA9IHBhcmVudCB8fCBlbGVtZW50LnBhcmVudE5vZGVcbiAgICBjb25zdCBlbGVtZW50UmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICBjb25zdCBwYXJlbnRSZWN0ID0gcGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgcmV0dXJuIG5ldyBQb2ludChcbiAgICAgIGVsZW1lbnRSZWN0LmxlZnQgLSBwYXJlbnRSZWN0LmxlZnQsXG4gICAgICBlbGVtZW50UmVjdC50b3AgLSBwYXJlbnRSZWN0LnRvcFxuICAgIClcbiAgfVxuXG4gIHN0YXRpYyBlbGVtZW50U2l6ZShlbGVtZW50LCBpc0NvbnRlbnRCb3hTaXplPWZhbHNlKSB7XG4gICAgbGV0IHdpZHRoID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudClbJ3dpZHRoJ10pXG4gICAgbGV0IGhlaWdodCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpWydoZWlnaHQnXSlcbiAgICBpZiAoIWlzQ29udGVudEJveFNpemUpIHtcbiAgICAgIHdpZHRoICs9IGdldFN1bVZhbHVlT2ZTdHlsZVJ1bGVzKGVsZW1lbnQsIFsncGFkZGluZy1sZWZ0JywgJ3BhZGRpbmctcmlnaHQnLCAnYm9yZGVyLWxlZnQtd2lkdGgnLCAnYm9yZGVyLXJpZ2h0LXdpZHRoJ10pXG4gICAgICBoZWlnaHQgKz0gZ2V0U3VtVmFsdWVPZlN0eWxlUnVsZXMoZWxlbWVudCwgWydwYWRkaW5nLXRvcCcsICdwYWRkaW5nLWJvdHRvbScsICdib3JkZXItdG9wLXdpZHRoJywgJ2JvcmRlci1ib3R0b20td2lkdGgnXSlcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBQb2ludCh3aWR0aCwgaGVpZ2h0KVxuICB9XG59XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9wb2ludCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVjdGFuZ2xlIHtcbiAgY29uc3RydWN0b3IocG9zaXRpb24sIHNpemUpIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb25cbiAgICB0aGlzLnNpemUgPSBzaXplXG4gIH1cblxuICBnZXRQMSgpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvblxuICB9XG5cbiAgZ2V0UDIoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnNpemUueCwgdGhpcy5wb3NpdGlvbi55KVxuICB9XG5cbiAgZ2V0UDMoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb24uYWRkKHRoaXMuc2l6ZSlcbiAgfVxuXG4gIGdldFA0KCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSlcbiAgfVxuXG4gIGdldENlbnRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi5hZGQodGhpcy5zaXplLm11bHQoMC41KSlcbiAgfVxuXG4gIG9yKHJlY3QpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IG5ldyBQb2ludChNYXRoLm1pbih0aGlzLnBvc2l0aW9uLngsIHJlY3QucG9zaXRpb24ueCksIE1hdGgubWluKHRoaXMucG9zaXRpb24ueSwgcmVjdC5wb3NpdGlvbi55KSlcbiAgICBjb25zdCBzaXplID0gKG5ldyBQb2ludChNYXRoLm1heCh0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnNpemUueCwgcmVjdC5wb3NpdGlvbi54ICsgcmVjdC5zaXplLngpLCBNYXRoLm1heCh0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSwgcmVjdC5wb3NpdGlvbi55ICsgcmVjdC5zaXplLnkpKSkuc3ViKHBvc2l0aW9uKVxuICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHBvc2l0aW9uLCBzaXplKVxuICB9XG5cbiAgYW5kKHJlY3QpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IG5ldyBQb2ludChNYXRoLm1heCh0aGlzLnBvc2l0aW9uLngsIHJlY3QucG9zaXRpb24ueCksIE1hdGgubWF4KHRoaXMucG9zaXRpb24ueSwgcmVjdC5wb3NpdGlvbi55KSlcbiAgICBjb25zdCBzaXplID0gKG5ldyBQb2ludChNYXRoLm1pbih0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnNpemUueCwgcmVjdC5wb3NpdGlvbi54ICsgcmVjdC5zaXplLngpLCBNYXRoLm1pbih0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSwgcmVjdC5wb3NpdGlvbi55ICsgcmVjdC5zaXplLnkpKSkuc3ViKHBvc2l0aW9uKVxuICAgIGlmIChzaXplLnggPD0gMCB8fCBzaXplLnkgPD0gMCkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUocG9zaXRpb24sIHNpemUpXG4gIH1cblxuICBpbmNsdWRlUG9pbnQocCkge1xuICAgIHJldHVybiAhKHRoaXMucG9zaXRpb24ueCA+IHAueCB8fCB0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnNpemUueCA8IHAueCB8fCB0aGlzLnBvc2l0aW9uLnkgPiBwLnkgfHwgdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnkgPCBwLnkpXG4gIH1cblxuICBpbmNsdWRlUmVjdGFuZ2xlKHJlY3RhbmdsZSkge1xuICAgIHJldHVybiB0aGlzLmluY2x1ZGVQb2ludChyZWN0YW5nbGUucG9zaXRpb24pICYmIHRoaXMuaW5jbHVkZVBvaW50KHJlY3RhbmdsZS5nZXRQMygpKVxuICB9XG5cbiAgbW92ZVRvQm91bmQocmVjdCwgYXhpcykge1xuICAgIGxldCBzZWxBeGlzLCBjcm9zc1JlY3RhbmdsZVxuICAgIGlmIChheGlzKSB7XG4gICAgICBzZWxBeGlzID0gYXhpc1xuICAgIH0gZWxzZSB7XG4gICAgICBjcm9zc1JlY3RhbmdsZSA9IHRoaXMuYW5kKHJlY3QpXG4gICAgICBpZiAoIWNyb3NzUmVjdGFuZ2xlKSB7XG4gICAgICAgIHJldHVybiByZWN0XG4gICAgICB9XG4gICAgICBzZWxBeGlzID0gY3Jvc3NSZWN0YW5nbGUuc2l6ZS54ID4gY3Jvc3NSZWN0YW5nbGUuc2l6ZS55ID8gJ3knIDogJ3gnXG4gICAgfVxuICAgIGNvbnN0IHRoaXNDZW50ZXIgPSB0aGlzLmdldENlbnRlcigpXG4gICAgY29uc3QgcmVjdENlbnRlciA9IHJlY3QuZ2V0Q2VudGVyKClcbiAgICBjb25zdCBzaWduID0gdGhpc0NlbnRlcltzZWxBeGlzXSA+IHJlY3RDZW50ZXJbc2VsQXhpc10gPyAtMSA6IDFcbiAgICBjb25zdCBvZmZzZXQgPSBzaWduID4gMCA/IHRoaXMucG9zaXRpb25bc2VsQXhpc10gKyB0aGlzLnNpemVbc2VsQXhpc10gLSByZWN0LnBvc2l0aW9uW3NlbEF4aXNdIDogdGhpcy5wb3NpdGlvbltzZWxBeGlzXSAtIChyZWN0LnBvc2l0aW9uW3NlbEF4aXNdICsgcmVjdC5zaXplW3NlbEF4aXNdKVxuICAgIHJlY3QucG9zaXRpb25bc2VsQXhpc10gPSByZWN0LnBvc2l0aW9uW3NlbEF4aXNdICsgb2Zmc2V0XG4gICAgcmV0dXJuIHJlY3RcbiAgfVxuXG4gIGdldFNxdWFyZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zaXplLnggKiB0aGlzLnNpemUueVxuICB9XG5cbiAgc3R5bGVBcHBseShlbCkge1xuICAgIGVsID0gZWwgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5kJylcbiAgICBlbC5zdHlsZS5sZWZ0ID0gdGhpcy5wb3NpdGlvbi54ICsgJ3B4J1xuICAgIGVsLnN0eWxlLnRvcCA9IHRoaXMucG9zaXRpb24ueSArICdweCdcbiAgICBlbC5zdHlsZS53aWR0aCA9IHRoaXMuc2l6ZS54ICsgJ3B4J1xuICAgIGVsLnN0eWxlLmhlaWdodCA9IHRoaXMuc2l6ZS55ICsgJ3B4J1xuICB9XG5cbiAgZ3Jvd3RoKHNpemUpIHtcbiAgICB0aGlzLnNpemUgPSB0aGlzLnNpemUuYWRkKHNpemUpXG4gICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMucG9zaXRpb24uYWRkKHNpemUubXVsdCgtMC41KSlcbiAgfVxuXG4gIGdldE1pblNpZGUoKSB7XG4gICAgcmV0dXJuIE1hdGgubWluKHRoaXMuc2l6ZS54LCB0aGlzLnNpemUueSlcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRWxlbWVudChlbGVtZW50LCBwYXJlbnQ9ZWxlbWVudC5wYXJlbnROb2RlLCBpc0NvbnRlbnRCb3hTaXplPWZhbHNlLCBpc0NvbnNpZGVyVHJhbnNsYXRlPWZhbHNlKSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBQb2ludC5lbGVtZW50T2Zmc2V0KGVsZW1lbnQsIHBhcmVudCwgaXNDb25zaWRlclRyYW5zbGF0ZSlcbiAgICBjb25zdCBzaXplID0gUG9pbnQuZWxlbWVudFNpemUoZWxlbWVudCwgaXNDb250ZW50Qm94U2l6ZSlcbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZShwb3NpdGlvbiwgc2l6ZSlcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0RGVmYXVsdENvbnRhaW5lcihlbGVtZW50KSB7XG4gIGxldCBjb250YWluZXIgPSBlbGVtZW50LnBhcmVudE5vZGVcbiAgd2hpbGUgKGNvbnRhaW5lci5wYXJlbnROb2RlICYmIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGNvbnRhaW5lcilbJ3Bvc2l0aW9uJ10gPT09ICdzdGF0aWMnICYmIGNvbnRhaW5lci50YWdOYW1lICE9PSAnQk9EWScpIHtcbiAgICBjb250YWluZXIgPSBjb250YWluZXIucGFyZW50Tm9kZVxuICB9XG4gIHJldHVybiBjb250YWluZXJcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yIChvcHRpb25zID0ge30pIHtcbiAgICB0aGlzLmV2ZW50cyA9IHt9XG5cbiAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLm9uKSB7XG4gICAgICBmb3IgKGNvbnN0IFtldmVudE5hbWUsIGZuXSBvZiBPYmplY3QuZW50cmllcyhvcHRpb25zLm9uKSkge1xuICAgICAgICB0aGlzLm9uKGV2ZW50TmFtZSwgZm4pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZW1pdChldmVudE5hbWUpIHtcbiAgICB0aGlzLmludGVycnVwdGVkID0gZmFsc2VcbiAgICBjb25zdCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpXG5cbiAgICBpZiAoIXRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHJldHVyblxuXG4gICAgZm9yIChjb25zdCBmdW5jIG9mIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIGZ1bmMoLi4uYXJncylcbiAgICAgIGlmICh0aGlzLmludGVycnVwdGVkKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGludGVycnVwdCgpIHtcbiAgICB0aGlzLmludGVycnVwdGVkID0gdHJ1ZVxuICB9XG5cbiAgb24oZXZlbnROYW1lLCBmbikge1xuICAgIGlmICghdGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IFtdXG4gICAgfVxuXG4gICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5wdXNoKGZuKVxuICB9XG5cbiAgcHJlcGVuZE9uKGV2ZW50TmFtZSwgZm4pIHtcbiAgICBpZiAoIXRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSBbXVxuICAgIH1cblxuICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0udW5zaGlmdChmbilcbiAgfVxuXG4gIHVuc3Vic2NyaWJlKGV2ZW50TmFtZSwgZm4pIHtcbiAgICBpZiAodGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmV2ZW50c1tldmVudE5hbWVdLmluZGV4T2YoZm4pXG4gICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLnNwbGljZShpbmRleCwgMSlcbiAgICB9XG4gIH1cblxuICByZXNldEVtaXR0ZXIgKCkge1xuICAgIHRoaXMuZXZlbnRzID0ge31cbiAgfVxuXG4gIHJlc2V0T24oZXZlbnROYW1lKSB7XG4gICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IFtdXG4gIH1cbn1cbiIsIi8qIVxuICogZ2V0U3R5bGVQcm9wZXJ0eSB2MS4wLjRcbiAqIG9yaWdpbmFsIGJ5IGthbmdheFxuICogaHR0cDovL3BlcmZlY3Rpb25raWxscy5jb20vZmVhdHVyZS10ZXN0aW5nLWNzcy1wcm9wZXJ0aWVzL1xuICogTUlUIGxpY2Vuc2VcbiAqL1xuXG4vKmpzaGludCBicm93c2VyOiB0cnVlLCBzdHJpY3Q6IHRydWUsIHVuZGVmOiB0cnVlICovXG4vKmdsb2JhbCBkZWZpbmU6IGZhbHNlLCBleHBvcnRzOiBmYWxzZSwgbW9kdWxlOiBmYWxzZSAqL1xuXG4oIGZ1bmN0aW9uKCB3aW5kb3cgKSB7XG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHByZWZpeGVzID0gJ1dlYmtpdCBNb3ogbXMgTXMgTycuc3BsaXQoJyAnKTtcbnZhciBkb2NFbGVtU3R5bGUgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGU7XG5cbmZ1bmN0aW9uIGdldFN0eWxlUHJvcGVydHkoIHByb3BOYW1lICkge1xuICBpZiAoICFwcm9wTmFtZSApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyB0ZXN0IHN0YW5kYXJkIHByb3BlcnR5IGZpcnN0XG4gIGlmICggdHlwZW9mIGRvY0VsZW1TdHlsZVsgcHJvcE5hbWUgXSA9PT0gJ3N0cmluZycgKSB7XG4gICAgcmV0dXJuIHByb3BOYW1lO1xuICB9XG5cbiAgLy8gY2FwaXRhbGl6ZVxuICBwcm9wTmFtZSA9IHByb3BOYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcHJvcE5hbWUuc2xpY2UoMSk7XG5cbiAgLy8gdGVzdCB2ZW5kb3Igc3BlY2lmaWMgcHJvcGVydGllc1xuICB2YXIgcHJlZml4ZWQ7XG4gIGZvciAoIHZhciBpPTAsIGxlbiA9IHByZWZpeGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrICkge1xuICAgIHByZWZpeGVkID0gcHJlZml4ZXNbaV0gKyBwcm9wTmFtZTtcbiAgICBpZiAoIHR5cGVvZiBkb2NFbGVtU3R5bGVbIHByZWZpeGVkIF0gPT09ICdzdHJpbmcnICkge1xuICAgICAgcmV0dXJuIHByZWZpeGVkO1xuICAgIH1cbiAgfVxufVxuXG4vLyB0cmFuc3BvcnRcbmlmICggdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAvLyBBTURcbiAgZGVmaW5lKCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZ2V0U3R5bGVQcm9wZXJ0eTtcbiAgfSk7XG59IGVsc2UgaWYgKCB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgKSB7XG4gIC8vIENvbW1vbkpTIGZvciBDb21wb25lbnRcbiAgbW9kdWxlLmV4cG9ydHMgPSBnZXRTdHlsZVByb3BlcnR5O1xufSBlbHNlIHtcbiAgLy8gYnJvd3NlciBnbG9iYWxcbiAgd2luZG93LmdldFN0eWxlUHJvcGVydHkgPSBnZXRTdHlsZVByb3BlcnR5O1xufVxuXG59KSggd2luZG93ICk7XG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0RGlzdGFuY2UocDEsIHAyKSB7XG4gIGNvbnN0IGR4ID0gcDEueCAtIHAyLngsIGR5ID0gcDEueSAtIHAyLnlcbiAgcmV0dXJuIE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFhEaWZmZXJlbmNlKHAxLCBwMikge1xuICByZXR1cm4gTWF0aC5hYnMocDEueCAtIHAyLngpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRZRGlmZmVyZW5jZShwMSwgcDIpIHtcbiAgcmV0dXJuIE1hdGguYWJzKHAxLnkgLSBwMi55KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtZWRTcGFjZURpc3RhbmNlRmFjdG9yeShvcHRpb25zKSB7XG4gIHJldHVybiAocDEsIHAyKSA9PiB7XG4gICAgcmV0dXJuIE1hdGguc3FydChcbiAgICAgIE1hdGgucG93KG9wdGlvbnMueCAqIE1hdGguYWJzKHAxLnggLSBwMi54KSwgMikgK1xuICAgICAgTWF0aC5wb3cob3B0aW9ucy55ICogTWF0aC5hYnMocDEueSAtIHAyLnkpLCAyKVxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5kZXhPZk5lYXJlc3RQb2ludChhcnIsIHZhbCwgcmFkaXVzLCBnZXREaXN0YW5jZUZ1bmM9Z2V0RGlzdGFuY2UpIHtcbiAgbGV0IHNpemUsIGluZGV4ID0gMCwgaSwgdGVtcFxuICBpZiAoYXJyLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAtMVxuICB9XG4gIHNpemUgPSBnZXREaXN0YW5jZUZ1bmMoYXJyWzBdLCB2YWwpXG4gIGZvciAoaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICB0ZW1wID0gZ2V0RGlzdGFuY2VGdW5jKGFycltpXSwgdmFsKVxuICAgIGlmICh0ZW1wIDwgc2l6ZSkge1xuICAgICAgc2l6ZSA9IHRlbXBcbiAgICAgIGluZGV4ID0gaVxuICAgIH1cbiAgfVxuICBpZiAocmFkaXVzID49IDAgJiYgc2l6ZSA+IHJhZGl1cykge1xuICAgIHJldHVybiAtMVxuICB9XG4gIHJldHVybiBpbmRleFxufVxuIiwiaW1wb3J0IFBvaW50IGZyb20gJy4vcG9pbnQnXG5pbXBvcnQgeyBnZXREaXN0YW5jZSB9IGZyb20gJy4vZGlzdGFuY2VzJ1xuXG5leHBvcnQgZnVuY3Rpb24gY2xhbXAobWluLCBtYXgsIHZhbCkge1xuICByZXR1cm4gTWF0aC5tYXgobWluLCBNYXRoLm1pbihtYXgsIHZhbCkpXG59XG5cbi8vUmV0dXJuIGNyb3NzaW5nIHBvaW50IG9mIHR3byBsaW5lc1xuZXhwb3J0IGZ1bmN0aW9uIGRpcmVjdENyb3NzaW5nKEwxUDEsIEwxUDIsIEwyUDEsIEwyUDIpIHtcbiAgbGV0IHRlbXAsIGsxLCBrMiwgYjEsIGIyLCB4LCB5XG4gIGlmIChMMlAxLnggPT09IEwyUDIueCkge1xuICAgIHRlbXAgPSBMMlAxXG4gICAgTDJQMSA9IEwxUDFcbiAgICBMMVAxID0gdGVtcFxuICAgIHRlbXAgPSBMMlAyXG4gICAgTDJQMiA9IEwxUDJcbiAgICBMMVAyID0gdGVtcFxuICB9XG4gIGlmIChMMVAxLnggPT09IEwxUDIueCkge1xuICAgIGsyID0gKEwyUDIueSAtIEwyUDEueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgIGIyID0gKEwyUDIueCAqIEwyUDEueSAtIEwyUDEueCAqIEwyUDIueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgIHggPSBMMVAxLnhcbiAgICB5ID0geCAqIGsyICsgYjJcbiAgICByZXR1cm4gbmV3IFBvaW50KHgsIHkpXG4gIH0gZWxzZSB7XG4gICAgazEgPSAoTDFQMi55IC0gTDFQMS55KSAvIChMMVAyLnggLSBMMVAxLngpXG4gICAgYjEgPSAoTDFQMi54ICogTDFQMS55IC0gTDFQMS54ICogTDFQMi55KSAvIChMMVAyLnggLSBMMVAxLngpXG4gICAgazIgPSAoTDJQMi55IC0gTDJQMS55KSAvIChMMlAyLnggLSBMMlAxLngpXG4gICAgYjIgPSAoTDJQMi54ICogTDJQMS55IC0gTDJQMS54ICogTDJQMi55KSAvIChMMlAyLnggLSBMMlAxLngpXG4gICAgeCA9IChiMSAtIGIyKSAvIChrMiAtIGsxKVxuICAgIHkgPSB4ICogazEgKyBiMVxuICAgIHJldHVybiBuZXcgUG9pbnQoeCwgeSlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRUb1NlZ21lbnQoTFAxLCBMUDIsIFApIHtcbiAgbGV0IHgsIHlcbiAgeCA9IGNsYW1wKE1hdGgubWluKExQMS54LCBMUDIueCksIE1hdGgubWF4KExQMS54LCBMUDIueCksIFAueClcbiAgaWYgKHggIT09IFAueCkge1xuICAgIHkgPSAoeCA9PT0gTFAxLngpID8gTFAxLnkgOiBMUDIueVxuICAgIFAgPSBuZXcgUG9pbnQoeCwgeSlcbiAgfVxuXG4gIHkgPSBjbGFtcChNYXRoLm1pbihMUDEueSwgTFAyLnkpLCBNYXRoLm1heChMUDEueSwgTFAyLnkpLCBQLnkpXG4gIGlmICh5ICE9PSBQLnkpIHtcbiAgICB4ID0gKHkgPT09IExQMS55KSA/IExQMS54IDogTFAyLnhcbiAgICBQID0gbmV3IFBvaW50KHgsIHkpXG4gIH1cblxuICByZXR1cm4gUFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRUb0xpbmUoQSwgQiwgUCkge1xuICBjb25zdCBBUCA9IG5ldyBQb2ludChQLnggLSBBLngsIFAueSAtIEEueSksXG4gICAgQUIgPSBuZXcgUG9pbnQoQi54IC0gQS54LCBCLnkgLSBBLnkpLFxuICAgIGFiMiA9IEFCLnggKiBBQi54ICsgQUIueSAqIEFCLnksXG4gICAgYXBfYWIgPSBBUC54ICogQUIueCArIEFQLnkgKiBBQi55LFxuICAgIHQgPSBhcF9hYiAvIGFiMlxuICByZXR1cm4gbmV3IFBvaW50KEEueCArIEFCLnggKiB0LCBBLnkgKyBBQi55ICogdClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBvaW50T25MaW5lKExQMSwgTFAyLCBwZXJjZW50KSB7XG4gIGNvbnN0IGR4ID0gTFAyLnggLSBMUDEueCwgZHkgPSBMUDIueSAtIExQMS55XG4gIHJldHVybiBuZXcgUG9pbnQoTFAxLnggKyBwZXJjZW50ICogZHgsIExQMS55ICsgcGVyY2VudCAqIGR5KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9pbnRPbkxpbmVCeUxlbmdodChMUDEsIExQMiwgbGVuZ2h0KSB7XG4gIGNvbnN0IGR4ID0gTFAyLnggLSBMUDEueFxuICBjb25zdCBkeSA9IExQMi55IC0gTFAxLnlcbiAgY29uc3QgcGVyY2VudCA9IGxlbmdodCAvIGdldERpc3RhbmNlKExQMSwgTFAyKVxuICByZXR1cm4gbmV3IFBvaW50KExQMS54ICsgcGVyY2VudCAqIGR4LCBMUDEueSArIHBlcmNlbnQgKiBkeSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFBvaW50VG9Cb3VuZFBvaW50cyhib3VuZHBvaW50cywgcG9pbnQsIGlzUmlnaHQpIHtcbiAgY29uc3QgcmVzdWx0ID0gYm91bmRwb2ludHMuZmlsdGVyKChiUG9pbnQpID0+IHtcbiAgICByZXR1cm4gYlBvaW50LnkgPiBwb2ludC55IHx8IChpc1JpZ2h0ID8gYlBvaW50LnggPCBwb2ludC54IDogYlBvaW50LnggPiBwb2ludC54KVxuICB9KVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzdWx0Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHBvaW50LnkgPCByZXN1bHRbaV0ueSkge1xuICAgICAgcmVzdWx0LnNwbGljZShpLCAwLCBwb2ludClcbiAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG4gIH1cbiAgcmVzdWx0LnB1c2gocG9pbnQpXG4gIHJldHVybiByZXN1bHRcbn1cbiIsImltcG9ydCBQb2ludCBmcm9tICcuL3BvaW50J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QW5nbGVEaWZmKGFscGhhLCBiZXRhKSB7XG4gIGNvbnN0IG1pbkFuZ2xlID0gTWF0aC5taW4oYWxwaGEsIGJldGEpXG4gIGNvbnN0IG1heEFuZ2xlID0gIE1hdGgubWF4KGFscGhhLCBiZXRhKVxuICByZXR1cm4gTWF0aC5taW4obWF4QW5nbGUgLSBtaW5BbmdsZSwgbWluQW5nbGUgKyBNYXRoLlBJKjIgLSBtYXhBbmdsZSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFuZ2xlKHAxLCBwMikge1xuICBjb25zdCBkaWZmID0gcDIuc3ViKHAxKVxuICByZXR1cm4gbm9ybWFsaXplQW5nbGUoTWF0aC5hdGFuMihkaWZmLnksIGRpZmYueCkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b1JhZGlhbihhbmdsZSkge1xuICByZXR1cm4gKChhbmdsZSAlIDM2MCkgKiBNYXRoLlBJIC8gMTgwKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9EZWdyZWUoYW5nbGUpIHtcbiAgcmV0dXJuIChhbmdsZSAqIDE4MCAvIE1hdGguUEkpICUgMzYwXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZEFuZ2xlKG1pbiwgbWF4LCB2YWwpIHtcbiAgbGV0IGRtaW4sIGRtYXhcbiAgaWYgKG1pbiA8IG1heCAmJiB2YWwgPiBtaW4gJiYgdmFsIDwgbWF4KSB7XG4gICAgcmV0dXJuIHZhbFxuICB9IGVsc2UgaWYgKG1heCA8IG1pbiAmJiAodmFsIDwgbWF4IHx8IHZhbCA+IG1pbikpIHtcbiAgICByZXR1cm4gdmFsXG4gIH0gZWxzZSB7XG4gICAgZG1pbiA9IGdldEFuZ2xlRGlmZihtaW4sIHZhbClcbiAgICBkbWF4ID0gZ2V0QW5nbGVEaWZmKG1heCwgdmFsKVxuICAgIGlmIChkbWluIDwgZG1heCkge1xuICAgICAgcmV0dXJuIG1pblxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbWF4XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROZWFyZXN0QW5nbGUoYXJyLCBhbmdsZSkge1xuICBsZXQgaSwgdGVtcCwgZGlmZiA9IE1hdGguUEkgKiAyLCB2YWx1ZVxuICBmb3IgKGkgPSAwOyBpIDwgYXJyLmxlbmd0aDtpKyspIHtcbiAgICB0ZW1wID0gZ2V0QW5nbGVEaWZmKGFycltpXSwgYW5nbGUpXG4gICAgaWYgKGRpZmYgPCB0ZW1wKSB7XG4gICAgICBkaWZmID0gdGVtcFxuICAgICAgdmFsdWUgPSBhcnJbaV1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHZhbHVlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVBbmdsZSh2YWwpIHtcbiAgd2hpbGUgKHZhbCA8IDApIHtcbiAgICB2YWwgKz0gMiAqIE1hdGguUElcbiAgfVxuICB3aGlsZSAodmFsID4gMiAqIE1hdGguUEkpIHtcbiAgICB2YWwgLT0gMiAqIE1hdGguUElcbiAgfVxuICByZXR1cm4gdmFsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oYW5nbGUsIGxlbmd0aCwgY2VudGVyKSB7XG4gIGNlbnRlciA9IGNlbnRlciB8fCBuZXcgUG9pbnQoMCwgMClcbiAgcmV0dXJuIGNlbnRlci5hZGQobmV3IFBvaW50KGxlbmd0aCAqIE1hdGguY29zKGFuZ2xlKSwgbGVuZ3RoICogTWF0aC5zaW4oYW5nbGUpKSlcbn1cbiIsImltcG9ydCBQb2ludCBmcm9tICcuL2dlb21ldHJ5L3BvaW50J1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tICcuL2dlb21ldHJ5L3JlY3RhbmdsZSdcbmltcG9ydCB7XG4gIGdldFBvaW50T25MaW5lQnlMZW5naHQsXG4gIGRpcmVjdENyb3NzaW5nLFxuICBib3VuZFRvTGluZVxufSBmcm9tICcuL2dlb21ldHJ5L2JvdW5kcydcblxuaW1wb3J0IHtcbiAgZ2V0QW5nbGUsXG4gIG5vcm1hbGl6ZUFuZ2xlLFxuICBib3VuZEFuZ2xlLFxuICBnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW1cbn0gZnJvbSAnLi9nZW9tZXRyeS9hbmdsZXMnXG5cbmV4cG9ydCBjbGFzcyBCb3VuZCB7XG4gIGNvbnN0cnVjdG9yICgpIHt9XG5cbiAgYm91bmQocG9pbnQsIF9zaXplKSB7XG4gICAgcmV0dXJuIHBvaW50XG4gIH1cblxuICByZWZyZXNoICgpIHt9XG5cbiAgc3RhdGljIGJvdW5kaW5nKCkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IHRoaXMoLi4uYXJndW1lbnRzKVxuICAgIHJldHVybiBpbnN0YW5jZS5ib3VuZC5iaW5kKGluc3RhbmNlKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvUmVjdGFuZ2xlIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3RvcihyZWN0YW5nbGUpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5yZWN0YW5nbGUgPSByZWN0YW5nbGVcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgY2FsY1BvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIGNvbnN0IHJlY3RQMiA9IHRoaXMucmVjdGFuZ2xlLmdldFAzKClcblxuICAgIGlmICh0aGlzLnJlY3RhbmdsZS5wb3NpdGlvbi54ID4gY2FsY1BvaW50LngpIHtcbiAgICAgIChjYWxjUG9pbnQueCA9IHRoaXMucmVjdGFuZ2xlLnBvc2l0aW9uLngpXG4gICAgfVxuICAgIGlmICh0aGlzLnJlY3RhbmdsZS5wb3NpdGlvbi55ID4gY2FsY1BvaW50LnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gdGhpcy5yZWN0YW5nbGUucG9zaXRpb24ueVxuICAgIH1cbiAgICBpZiAocmVjdFAyLnggPCBjYWxjUG9pbnQueCArIHNpemUueCkge1xuICAgICAgY2FsY1BvaW50LnggPSByZWN0UDIueCAtIHNpemUueFxuICAgIH1cbiAgICBpZiAocmVjdFAyLnkgPCBjYWxjUG9pbnQueSArIHNpemUueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSByZWN0UDIueSAtIHNpemUueVxuICAgIH1cblxuICAgIHJldHVybiBjYWxjUG9pbnRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb0VsZW1lbnQgZXh0ZW5kcyBCb3VuZFRvUmVjdGFuZ2xlIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29udGFpbmVyKSB7XG4gICAgc3VwZXIoUmVjdGFuZ2xlLmZyb21FbGVtZW50KGVsZW1lbnQsIGNvbnRhaW5lcikpXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyXG4gIH1cblxuICByZWZyZXNoICgpIHtcbiAgICB0aGlzLnJlY3RhbmdsZSA9IFJlY3RhbmdsZS5mcm9tRWxlbWVudCh0aGlzLmVsZW1lbnQsIHRoaXMuY29udGFpbmVyKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvTGluZVggZXh0ZW5kcyBCb3VuZCB7XG4gIGNvbnN0cnVjdG9yKHgsIHN0YXJ0WSwgZW5kWSkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnggPSB4XG4gICAgdGhpcy5zdGFydFkgPSBzdGFydFlcbiAgICB0aGlzLmVuZFkgPSBlbmRZXG4gIH1cblxuICBib3VuZChwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IGNhbGNQb2ludCA9IHBvaW50LmNsb25lKClcblxuICAgIGNhbGNQb2ludC54ID0gdGhpcy54XG4gICAgaWYgKHRoaXMuc3RhcnRZID4gY2FsY1BvaW50LnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gdGhpcy5zdGFydFlcbiAgICB9XG4gICAgaWYgKHRoaXMuZW5kWSA8IGNhbGNQb2ludC55ICsgc2l6ZS55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHRoaXMuZW5kWSAtIHNpemUueVxuICAgIH1cblxuICAgIHJldHVybiBjYWxjUG9pbnRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb0xpbmVZIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3Rvcih5LCBzdGFydFgsIGVuZFgpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy55ID0geVxuICAgIHRoaXMuc3RhcnRYID0gc3RhcnRYXG4gICAgdGhpcy5lbmRYID0gZW5kWFxuICB9XG5cbiAgYm91bmQocG9pbnQsIHNpemUpIHtcbiAgICBjb25zdCBjYWxjUG9pbnQgPSBwb2ludC5jbG9uZSgpXG4gICAgY2FsY1BvaW50LnkgPSB0aGlzLnlcbiAgICBpZiAodGhpcy5zdGFydFggPiBjYWxjUG9pbnQueCkge1xuICAgICAgY2FsY1BvaW50LnggPSB0aGlzLnN0YXJ0WFxuICAgIH1cbiAgICBpZiAodGhpcy5lbmRYIDwgY2FsY1BvaW50LnggKyBzaXplLngpIHtcbiAgICAgIGNhbGNQb2ludC54ID0gdGhpcy5lbmRYIC0gc2l6ZS54XG4gICAgfVxuICAgIHJldHVybiBjYWxjUG9pbnRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb0xpbmUgZXh0ZW5kcyBCb3VuZCB7XG4gIGNvbnN0cnVjdG9yKHN0YXJ0UG9pbnQsIGVuZFBvaW50KSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuc3RhcnRQb2ludCA9IHN0YXJ0UG9pbnRcbiAgICB0aGlzLmVuZFBvaW50ID0gZW5kUG9pbnRcbiAgICBjb25zdCBhbHBoYSA9IE1hdGguYXRhbjIoZW5kUG9pbnQueSAtIHN0YXJ0UG9pbnQueSwgZW5kUG9pbnQueCAtIHN0YXJ0UG9pbnQueClcbiAgICBjb25zdCBiZXRhID0gYWxwaGEgKyBNYXRoLlBJIC8gMlxuICAgIHRoaXMuc29tZUsgPSAxMFxuICAgIHRoaXMuY29zQmV0YSA9IE1hdGguY29zKGJldGEpXG4gICAgdGhpcy5zaW5CZXRhID0gTWF0aC5zaW4oYmV0YSlcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgcG9pbnQyID0gbmV3IFBvaW50KFxuICAgICAgcG9pbnQueCArIHRoaXMuc29tZUsgKiB0aGlzLmNvc0JldGEsXG4gICAgICBwb2ludC55ICsgdGhpcy5zb21lSyAqIHRoaXMuc2luQmV0YVxuICAgIClcblxuICAgIGNvbnN0IG5ld0VuZFBvaW50ID0gZ2V0UG9pbnRPbkxpbmVCeUxlbmdodCh0aGlzLmVuZFBvaW50LCB0aGlzLnN0YXJ0UG9pbnQsIHNpemUueClcbiAgICBjb25zdCBwb2ludENyb3NzaW5nID0gZGlyZWN0Q3Jvc3NpbmcodGhpcy5zdGFydFBvaW50LCB0aGlzLmVuZFBvaW50LCBwb2ludCwgcG9pbnQyKVxuXG4gICAgcmV0dXJuIGJvdW5kVG9MaW5lKHRoaXMuc3RhcnRQb2ludCwgbmV3RW5kUG9pbnQsIHBvaW50Q3Jvc3NpbmcpXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9DaXJjbGUgZXh0ZW5kcyBCb3VuZCB7XG4gIGNvbnN0cnVjdG9yKGNlbnRlciwgcmFkaXVzKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuY2VudGVyID0gY2VudGVyXG4gICAgdGhpcy5yYWRpdXMgPSByYWRpdXNcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBfc2l6ZSkge1xuICAgIHJldHVybiBnZXRQb2ludE9uTGluZUJ5TGVuZ2h0KHRoaXMuY2VudGVyLCBwb2ludCwgdGhpcy5yYWRpdXMpXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9BcmMgZXh0ZW5kcyBCb3VuZFRvQ2lyY2xlIHtcbiAgY29uc3RydWN0b3IoY2VudGVyLCByYWRpdXMsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlKSB7XG4gICAgc3VwZXIoY2VudGVyLCByYWRpdXMpXG4gICAgdGhpcy5fc3RhcnRBbmdsZSA9IHN0YXJ0QW5nbGVcbiAgICB0aGlzLl9lbmRBbmdsZSA9IGVuZEFuZ2xlXG4gIH1cblxuICBzdGFydEFuZ2xlKCkge1xuICAgIHJldHVybiB0eXBlb2YgdGhpcy5fc3RhcnRBbmdsZSA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMuX3N0YXJ0QW5nbGUoKSA6IHRoaXMuX3N0YXJ0QW5nbGVcbiAgfVxuXG4gIGVuZEFuZ2xlKCkge1xuICAgIHJldHVybiB0eXBlb2YgdGhpcy5fZW5kQW5nbGUgPT09ICdmdW5jdGlvbicgPyB0aGlzLl9lbmRBbmdsZSgpIDogdGhpcy5fZW5kQW5nbGVcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBfc2l6ZSkge1xuICAgIGxldCBhbmdsZSA9IGdldEFuZ2xlKHRoaXMuY2VudGVyLCBwb2ludClcbiAgICBhbmdsZSA9IG5vcm1hbGl6ZUFuZ2xlKGFuZ2xlKVxuICAgIGFuZ2xlID0gYm91bmRBbmdsZSh0aGlzLnN0YXJ0QW5nbGUoKSwgdGhpcy5lbmRBbmdsZSgpLCBhbmdsZSlcbiAgICByZXR1cm4gZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKGFuZ2xlLCB0aGlzLnJhZGl1cywgdGhpcy5jZW50ZXIpXG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGFycmF5LCB2YWwpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChhcnJheVtpXSA9PT0gdmFsKSB7XG4gICAgICBhcnJheS5zcGxpY2UoaSwgMSlcbiAgICAgIGktLVxuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyYXlcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJhbmdlKHN0YXJ0LCBzdG9wLCBzdGVwKSB7XG4gIGNvbnN0IHJlc3VsdCA9IFtdXG4gIGlmICh0eXBlb2Ygc3RvcCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBzdG9wID0gc3RhcnRcbiAgICBzdGFydCA9IDBcbiAgfVxuICBpZiAodHlwZW9mIHN0ZXAgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgc3RlcCA9IDFcbiAgfVxuICBpZiAoKHN0ZXAgPiAwICYmIHN0YXJ0ID49IHN0b3ApIHx8IChzdGVwIDwgMCAmJiBzdGFydCA8PSBzdG9wKSkge1xuICAgIHJldHVybiBbXVxuICB9XG4gIGZvciAobGV0IGkgPSBzdGFydDsgc3RlcCA+IDAgPyBpIDwgc3RvcCA6IGkgPiBzdG9wOyBpICs9IHN0ZXApIHtcbiAgICByZXN1bHQucHVzaChpKVxuICB9XG4gIHJldHVybiByZXN1bHRcbn1cbiIsImltcG9ydCBQb2ludCBmcm9tICcuL2dlb21ldHJ5L3BvaW50J1xuaW1wb3J0IHsgYWRkUG9pbnRUb0JvdW5kUG9pbnRzIH0gZnJvbSAnLi9nZW9tZXRyeS9ib3VuZHMnXG5cbmltcG9ydCB7XG4gIGluZGV4T2ZOZWFyZXN0UG9pbnQsXG4gIGdldERpc3RhbmNlXG59IGZyb20gJy4vZ2VvbWV0cnkvZGlzdGFuY2VzJ1xuXG5jbGFzcyBCYXNpY1N0cmF0ZWd5IHtcbiAgY29uc3RydWN0b3IocmVjdGFuZ2xlLCBvcHRpb25zPXt9KSB7XG4gICAgdGhpcy5yZWN0YW5nbGUgPSByZWN0YW5nbGVcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zXG4gIH1cblxuICBnZXQgYm91bmRSZWN0ICgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMucmVjdGFuZ2xlID09PSAnZnVuY3Rpb24nID8gdGhpcy5yZWN0YW5nbGUoKSA6IHRoaXMucmVjdGFuZ2xlXG4gIH1cbn1cblxuY2xhc3MgTm90Q3Jvc3NpbmdTdHJhdGVneSBleHRlbmRzIEJhc2ljU3RyYXRlZ3kge1xuICBwb3NpdGlvbmluZyAocmVjdGFuZ2xlTGlzdCwgaW5kZXhlc09mTmV3cykge1xuICAgIGNvbnN0IHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMgPSByZWN0YW5nbGVMaXN0LnJlZHVjZSgoaW5kZXhlcywgX3JlY3QsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoaW5kZXhlc09mTmV3cy5pbmRleE9mKGluZGV4KSA9PT0gLTEpIHtcbiAgICAgICAgaW5kZXhlcy5wdXNoKGluZGV4KVxuICAgICAgfVxuICAgICAgcmV0dXJuIGluZGV4ZXNcbiAgICB9LCBbXSlcblxuICAgIGluZGV4ZXNPZk5ld3MuZm9yRWFjaCgoaW5kZXgpID0+IHtcbiAgICAgIGxldCByZWN0ID0gcmVjdGFuZ2xlTGlzdFtpbmRleF1cbiAgICAgIGxldCByZW1vdmFibGUgPSBmYWxzZVxuXG4gICAgICBzdGF0aWNSZWN0YW5nbGVJbmRleGVzLmZvckVhY2goKGluZGV4T2ZTdGF0aWMpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhdGljUmVjdCA9IHJlY3RhbmdsZUxpc3RbaW5kZXhPZlN0YXRpY11cbiAgICAgICAgcmVjdCA9IHN0YXRpY1JlY3QubW92ZVRvQm91bmQocmVjdClcbiAgICAgIH0pXG5cbiAgICAgIHJlbW92YWJsZSA9IHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMuc29tZSgoaW5kZXhPZlN0YXRpYykgPT4ge1xuICAgICAgICBjb25zdCBzdGF0aWNSZWN0ID0gcmVjdGFuZ2xlTGlzdFtpbmRleE9mU3RhdGljXVxuICAgICAgICByZXR1cm4gICEhc3RhdGljUmVjdC5hbmQocmVjdClcbiAgICAgIH0pIHx8IHJlY3QuYW5kKHRoaXMuYm91bmRSZWN0KS5nZXRTcXVhcmUoKSAhPT0gcmVjdC5nZXRTcXVhcmUoKVxuXG4gICAgICBpZiAocmVtb3ZhYmxlKSB7XG4gICAgICAgIHJlY3QucmVtb3ZhYmxlID0gdHJ1ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdGljUmVjdGFuZ2xlSW5kZXhlcy5wdXNoKGluZGV4KVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHJlY3RhbmdsZUxpc3RcbiAgfVxuXG4gIHNvcnRpbmcob2RsRHJhZ2dhYmxlc0xpc3QsIG5ld0RyYWdnYWJsZXMsIGluZGV4T2ZOZXdzKSB7XG4gICAgY29uc3QgZHJhZ2dhYmxlcyA9IG9kbERyYWdnYWJsZXNMaXN0LmNvbmNhdChuZXdEcmFnZ2FibGVzKVxuICAgIG5ld0RyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBpbmRleE9mTmV3cy5wdXNoKGRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpKVxuICAgIH0pXG4gICAgcmV0dXJuIGRyYWdnYWJsZXNcbiAgfVxufVxuXG5jbGFzcyBGbG9hdExlZnRTdHJhdGVneSBleHRlbmRzIEJhc2ljU3RyYXRlZ3kge1xuICBjb25zdHJ1Y3RvcihyZWN0YW5nbGUsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcihyZWN0YW5nbGUsIG9wdGlvbnMpXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICByZW1vdmFibGU6IHRydWVcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGhpcy5yYWRpdXMgPSBvcHRpb25zLnJhZGl1cyB8fCA4MFxuXG4gICAgdGhpcy5wYWRkaW5nVG9wTGVmdCA9IG9wdGlvbnMucGFkZGluZ1RvcExlZnQgfHwgbmV3IFBvaW50KDAsIDApXG4gICAgdGhpcy5wYWRkaW5nQm90dG9tUmlnaHQgPSBvcHRpb25zLnBhZGRpbmdCb3R0b21SaWdodCB8fCBuZXcgUG9pbnQoMCwgMClcbiAgICB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyA9IG9wdGlvbnMueUdhcEJldHdlZW5EcmFnZ2FibGVzIHx8IDBcblxuICAgIHRoaXMuZ2V0RGlzdGFuY2UgPSBvcHRpb25zLmdldERpc3RhbmNlIHx8IGdldERpc3RhbmNlXG4gICAgdGhpcy5nZXRQb3NpdGlvbiA9IG9wdGlvbnMuZ2V0UG9zaXRpb24gfHwgKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5wb3NpdGlvbilcbiAgfVxuXG4gIHBvc2l0aW9uaW5nKHJlY3RhbmdsZUxpc3QsIF9pbmRleGVzT2ZOZXdzKSB7XG4gICAgY29uc3QgYm91bmRSZWN0ID0gdGhpcy5ib3VuZFJlY3RcbiAgICBjb25zdCByZWN0UDIgPSBib3VuZFJlY3QuZ2V0UDIoKVxuICAgIGxldCBib3VuZGFyeVBvaW50cyA9IFtib3VuZFJlY3QucG9zaXRpb25dXG5cbiAgICByZWN0YW5nbGVMaXN0LmZvckVhY2goKHJlY3QsIHJlY3RJbmRleCkgPT4ge1xuICAgICAgbGV0IHBvc2l0aW9uLCBpc1ZhbGlkID0gZmFsc2VcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm91bmRhcnlQb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcG9zaXRpb24gPSBuZXcgUG9pbnQoXG4gICAgICAgICAgYm91bmRhcnlQb2ludHNbaV0ueCArIHRoaXMucGFkZGluZ1RvcExlZnQueCxcbiAgICAgICAgICBpID4gMCA/IChib3VuZGFyeVBvaW50c1tpIC0gMV0ueSArIHRoaXMueUdhcEJldHdlZW5EcmFnZ2FibGVzKSA6IChib3VuZFJlY3QucG9zaXRpb24ueSArIHRoaXMucGFkZGluZ1RvcExlZnQueSlcbiAgICAgICAgKVxuXG4gICAgICAgIGlzVmFsaWQgPSAocG9zaXRpb24ueCArIHJlY3Quc2l6ZS54IDwgcmVjdFAyLngpXG5cbiAgICAgICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICBwb3NpdGlvbiA9IG5ldyBQb2ludChcbiAgICAgICAgICBib3VuZFJlY3QucG9zaXRpb24ueCArIHRoaXMucGFkZGluZ1RvcExlZnQueCxcbiAgICAgICAgICBib3VuZGFyeVBvaW50c1tib3VuZGFyeVBvaW50cy5sZW5ndGggLSAxXS55ICsgKHJlY3RJbmRleCA+IDAgPyB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyA6IHRoaXMucGFkZGluZ1RvcExlZnQueSlcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICByZWN0LnBvc2l0aW9uID0gcG9zaXRpb25cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucmVtb3ZhYmxlICYmIHJlY3QuZ2V0UDMoKS55ID4gYm91bmRSZWN0LmdldFAzKCkueSkge1xuICAgICAgICByZWN0LnJlbW92YWJsZSA9IHRydWVcbiAgICAgIH1cblxuICAgICAgYm91bmRhcnlQb2ludHMgPSBhZGRQb2ludFRvQm91bmRQb2ludHMoYm91bmRhcnlQb2ludHMsIHJlY3QuZ2V0UDMoKS5hZGQodGhpcy5wYWRkaW5nQm90dG9tUmlnaHQpKVxuICAgIH0pXG4gICAgcmV0dXJuIHJlY3RhbmdsZUxpc3RcbiAgfVxuXG4gIHNvcnRpbmcob2RsRHJhZ2dhYmxlc0xpc3QsIG5ld0RyYWdnYWJsZXMsIGluZGV4T2ZOZXdzKSB7XG4gICAgY29uc3QgbmV3TGlzdCA9IG9kbERyYWdnYWJsZXNMaXN0LmNvbmNhdCgpXG4gICAgY29uc3QgbGlzdE9sZFBvc2l0aW9uID0gb2RsRHJhZ2dhYmxlc0xpc3QubWFwKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5nZXRQb3NpdGlvbigpKVxuICAgIG5ld0RyYWdnYWJsZXMuZm9yRWFjaCgobmV3RHJhZ2dhYmxlKSA9PiB7XG4gICAgICBsZXQgaW5kZXggPSBpbmRleE9mTmVhcmVzdFBvaW50KGxpc3RPbGRQb3NpdGlvbiwgdGhpcy5nZXRQb3NpdGlvbihuZXdEcmFnZ2FibGUpLCB0aGlzLnJhZGl1cywgdGhpcy5nZXREaXN0YW5jZSlcbiAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgaW5kZXggPSBuZXdMaXN0Lmxlbmd0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5kZXggPSBuZXdMaXN0LmluZGV4T2Yob2RsRHJhZ2dhYmxlc0xpc3RbaW5kZXhdKVxuICAgICAgfVxuICAgICAgbmV3TGlzdC5zcGxpY2UoaW5kZXgsIDAsIG5ld0RyYWdnYWJsZSlcbiAgICB9KVxuICAgIG5ld0RyYWdnYWJsZXMuZm9yRWFjaCgobmV3RHJhZ2dhYmxlKSA9PiB7XG4gICAgICBpbmRleE9mTmV3cy5wdXNoKG5ld0xpc3QuaW5kZXhPZihuZXdEcmFnZ2FibGUpKVxuICAgIH0pXG4gICAgcmV0dXJuIG5ld0xpc3RcbiAgfVxufVxuXG5jbGFzcyBGbG9hdFJpZ2h0U3RyYXRlZ3kgZXh0ZW5kcyBGbG9hdExlZnRTdHJhdGVneSB7XG4gIGNvbnN0cnVjdG9yKHJlY3RhbmdsZSwgb3B0aW9ucz17fSkge1xuICAgIHN1cGVyKHJlY3RhbmdsZSwgb3B0aW9ucylcblxuICAgIHRoaXMucGFkZGluZ1RvcFJpZ2h0ID0gb3B0aW9ucy5wYWRkaW5nVG9wUmlnaHQgfHwgbmV3IFBvaW50KDUsIDUpXG4gICAgdGhpcy5wYWRkaW5nQm90dG9tTGVmdCA9IG9wdGlvbnMucGFkZGluZ0JvdHRvbUxlZnQgfHwgbmV3IFBvaW50KDAsIDApXG4gICAgdGhpcy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgPSBvcHRpb25zLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyB8fCAwXG5cbiAgICB0aGlzLnBhZGRpbmdCb3R0b21OZWdMZWZ0ID0gbmV3IFBvaW50KC10aGlzLnBhZGRpbmdCb3R0b21MZWZ0LngsIHRoaXMucGFkZGluZ0JvdHRvbUxlZnQueSlcbiAgfVxuXG4gIHBvc2l0aW9uaW5nKHJlY3RhbmdsZUxpc3QsIF9pbmRleGVzT2ZOZXdzKSB7XG4gICAgY29uc3QgYm91bmRSZWN0ID0gdGhpcy5ib3VuZFJlY3RcbiAgICBsZXQgYm91bmRhcnlQb2ludHMgPSBbYm91bmRSZWN0LmdldFAyKCldXG5cbiAgICByZWN0YW5nbGVMaXN0LmZvckVhY2goKHJlY3QsIHJlY3RJbmRleCkgPT4ge1xuICAgICAgbGV0IHBvc2l0aW9uLCBpc1ZhbGlkID0gZmFsc2VcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm91bmRhcnlQb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcG9zaXRpb24gPSBuZXcgUG9pbnQoXG4gICAgICAgICAgYm91bmRhcnlQb2ludHNbaV0ueCAtIHJlY3Quc2l6ZS54IC0gdGhpcy5wYWRkaW5nVG9wUmlnaHQueCxcbiAgICAgICAgICBpID4gMCA/IChib3VuZGFyeVBvaW50c1tpIC0gMV0ueSArIHRoaXMueUdhcEJldHdlZW5EcmFnZ2FibGVzKSA6IChib3VuZFJlY3QucG9zaXRpb24ueSArIHRoaXMucGFkZGluZ1RvcFJpZ2h0LnkpXG4gICAgICAgIClcblxuICAgICAgICBpc1ZhbGlkID0gKHBvc2l0aW9uLnggPiByZWN0LnBvc2l0aW9uLngpXG4gICAgICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICAgIHBvc2l0aW9uID0gbmV3IFBvaW50KFxuICAgICAgICAgIGJvdW5kUmVjdC5nZXRQMigpLnggIC0gcmVjdC5zaXplLnggLSB0aGlzLnBhZGRpbmdUb3BSaWdodC54LFxuICAgICAgICAgIGJvdW5kYXJ5UG9pbnRzW2JvdW5kYXJ5UG9pbnRzLmxlbmd0aCAtIDFdLnkgKyAocmVjdEluZGV4ID4gMCA/IHRoaXMueUdhcEJldHdlZW5EcmFnZ2FibGVzIDogdGhpcy5wYWRkaW5nVG9wUmlnaHQueSlcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgcmVjdC5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnJlbW92YWJsZSAmJiByZWN0LmdldFA0KCkueSA+IGJvdW5kUmVjdC5nZXRQNCgpLnkpIHtcbiAgICAgICAgcmVjdC5yZW1vdmFibGUgPSB0cnVlXG4gICAgICB9XG4gICAgICBib3VuZGFyeVBvaW50cyA9IGFkZFBvaW50VG9Cb3VuZFBvaW50cyhib3VuZGFyeVBvaW50cywgcmVjdC5nZXRQNCgpLmFkZCh0aGlzLnBhZGRpbmdCb3R0b21OZWdMZWZ0KSwgdHJ1ZSlcbiAgICB9KVxuICAgIHJldHVybiByZWN0YW5nbGVMaXN0XG4gIH1cbn1cblxuZXhwb3J0IHsgTm90Q3Jvc3NpbmdTdHJhdGVneSwgRmxvYXRMZWZ0U3RyYXRlZ3ksIEZsb2F0UmlnaHRTdHJhdGVneSB9XG4iLCJpbXBvcnQgcmFuZ2UgZnJvbSAnLi91dGlscy9yYW5nZS5qcydcbmltcG9ydCByZW1vdmVJdGVtIGZyb20gJy4vdXRpbHMvcmVtb3ZlLWFycmF5LWl0ZW0nXG5pbXBvcnQgZ2V0RGVmYXVsdENvbnRhaW5lciBmcm9tICcuL3V0aWxzL2dldC1kZWZhdWx0LWNvbnRhaW5lcidcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudEVtaXR0ZXInXG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gJy4vZ2VvbWV0cnkvcmVjdGFuZ2xlJ1xuaW1wb3J0IHsgdHJhbnNmb3JtZWRTcGFjZURpc3RhbmNlRmFjdG9yeSB9IGZyb20gJy4vZ2VvbWV0cnkvZGlzdGFuY2VzJ1xuaW1wb3J0IHsgc2NvcGVzLCBkZWZhdWx0U2NvcGUgfSBmcm9tICcuL3Njb3BlJ1xuXG5pbXBvcnQgeyBGbG9hdExlZnRTdHJhdGVneSB9IGZyb20gJy4vcG9zaXRpb25pbmcnXG5pbXBvcnQgeyBCb3VuZFRvRWxlbWVudCB9IGZyb20gJy4vYm91bmRpbmcnXG5cbmNvbnN0IGFkZFRvRGVmYXVsdFNjb3BlID0gZnVuY3Rpb24odGFyZ2V0KSB7XG4gIGRlZmF1bHRTY29wZS5hZGRUYXJnZXQodGFyZ2V0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXJnZXQgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBkcmFnZ2FibGVzLCBvcHRpb25zID0ge30pIHtcbiAgICBzdXBlcihvcHRpb25zKVxuICAgIGNvbnN0IHRhcmdldCA9IHRoaXNcblxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgdGltZUVuZDogMjAwLFxuICAgICAgdGltZUV4Y2FuZ2U6IDQwMFxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0aGlzLnBvc2l0aW9uaW5nU3RyYXRlZ3kgPSBvcHRpb25zLnN0cmF0ZWd5IHx8IG5ldyBGbG9hdExlZnRTdHJhdGVneShcbiAgICAgIHRoaXMuZ2V0UmVjdGFuZ2xlLmJpbmQodGhpcyksXG4gICAgICB7XG4gICAgICAgIHJhZGl1czogODAsXG4gICAgICAgIGdldERpc3RhbmNlOiB0cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5KHsgeDogMSwgeTogNCB9KSxcbiAgICAgICAgcmVtb3ZhYmxlOiB0cnVlXG4gICAgICB9XG4gICAgKVxuXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUudGFyZ2V0cy5wdXNoKHRhcmdldCkpXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gZHJhZ2dhYmxlc1xuXG4gICAgVGFyZ2V0LmVtaXR0ZXIuZW1pdCgndGFyZ2V0OmNyZWF0ZScsIHRoaXMpXG5cbiAgICB0aGlzLnN0YXJ0Qm91bmRpbmcoKVxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBzdGFydEJvdW5kaW5nKCkge1xuICAgIHRoaXMuYm91bmQgPSB0aGlzLm9wdGlvbnMuYm91bmQgfHwgQm91bmRUb0VsZW1lbnQuYm91bmRpbmcodGhpcy5lbGVtZW50KVxuICB9XG5cbiAgcG9zaXRpb25pbmcgKGRyYWdnYWJsZXMsIGluZGV4ZXNPZk5ldykge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uaW5nU3RyYXRlZ3kucG9zaXRpb25pbmcoZHJhZ2dhYmxlcywgaW5kZXhlc09mTmV3KVxuICB9XG5cbiAgc29ydGluZyAob2xkRHJhZ2dhYmxlcywgbmV3RHJhZ2dhYmxlcywgaW5kZXhPZk5ld3MpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbmluZ1N0cmF0ZWd5LnNvcnRpbmcob2xkRHJhZ2dhYmxlcywgbmV3RHJhZ2dhYmxlcywgaW5kZXhPZk5ld3MpXG4gIH1cblxuICBpbml0KCkge1xuICAgIGxldCByZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXdcblxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzID0gdGhpcy5kcmFnZ2FibGVzLmZpbHRlcigoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBsZXQgZWxlbWVudCA9IGRyYWdnYWJsZS5lbGVtZW50LnBhcmVudE5vZGVcbiAgICAgIHdoaWxlIChlbGVtZW50KSB7XG4gICAgICAgIGlmIChlbGVtZW50ID09PSB0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGVcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH0pXG5cbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMubGVuZ3RoKSB7XG4gICAgICBpbmRleGVzT2ZOZXcgPSByYW5nZSh0aGlzLmlubmVyRHJhZ2dhYmxlcy5sZW5ndGgpXG4gICAgICByZWN0YW5nbGVzID0gdGhpcy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgICB9KSwgaW5kZXhlc09mTmV3KVxuICAgICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXcpXG4gICAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHRoaXMuZW1pdCgndGFyZ2V0OmFkZCcsIGRyYWdnYWJsZSkpXG4gICAgfVxuICB9XG5cbiAgZ2V0UmVjdGFuZ2xlKCkge1xuICAgIHJldHVybiBSZWN0YW5nbGUuZnJvbUVsZW1lbnQoXG4gICAgICB0aGlzLmVsZW1lbnQsXG4gICAgICB0aGlzLmNvbnRhaW5lcixcbiAgICAgIHRoaXMub3B0aW9ucy5pc0NvbnRlbnRCb3hTaXplLFxuICAgICAgdHJ1ZVxuICAgIClcbiAgfVxuXG4gIGNhdGNoRHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuY2F0Y2hEcmFnZ2FibGUpIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuY2F0Y2hEcmFnZ2FibGUodGhpcywgZHJhZ2dhYmxlKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0YXJnZXRSZWN0YW5nbGUgPSB0aGlzLmdldFJlY3RhbmdsZSgpXG4gICAgICBjb25zdCBkcmFnZ2FibGVTcXVhcmUgPSBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKCkuZ2V0U3F1YXJlKClcblxuICAgICAgcmV0dXJuIGRyYWdnYWJsZVNxdWFyZSA8IHRhcmdldFJlY3RhbmdsZS5nZXRTcXVhcmUoKVxuICAgICAgICAgICAgICAmJiB0YXJnZXRSZWN0YW5nbGUuaW5jbHVkZVBvaW50KGRyYWdnYWJsZS5nZXRDZW50ZXIoKSlcbiAgICB9XG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRSZWN0YW5nbGUoKS5wb3NpdGlvblxuICB9XG5cbiAgZ2V0U2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRSZWN0YW5nbGUoKS5zaXplXG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHNjb3Blcy5mb3JFYWNoKChzY29wZSkgPT4gcmVtb3ZlSXRlbShzY29wZS50YXJnZXRzLCB0aGlzKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgW10pXG4gICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBbXSwgMClcbiAgfVxuXG4gIG9uRW5kKGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IG5ld0RyYWdnYWJsZXNJbmRleCA9IFtdXG5cbiAgICBpZiAodGhpcy5nZXRSZWN0YW5nbGUoKS5pbmNsdWRlUG9pbnQoZHJhZ2dhYmxlLmdldENlbnRlcigpKSkge1xuICAgICAgZHJhZ2dhYmxlLnBvc2l0aW9uID0gdGhpcy5ib3VuZChkcmFnZ2FibGUucG9zaXRpb24sIGRyYWdnYWJsZS5nZXRTaXplKCkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHRoaXMuZW1pdCgndGFyZ2V0OmJlZm9yZUFkZCcsIGRyYWdnYWJsZSlcblxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzID0gdGhpcy5zb3J0aW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLCBbZHJhZ2dhYmxlXSwgbmV3RHJhZ2dhYmxlc0luZGV4KVxuICAgIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgfSksIG5ld0RyYWdnYWJsZXNJbmRleClcblxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgbmV3RHJhZ2dhYmxlc0luZGV4KVxuICAgIGlmICh0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkgIT09IC0xKSB7XG4gICAgICB0aGlzLmFkZFJlbW92ZU9uTW92ZShkcmFnZ2FibGUpXG4gICAgfVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBzZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXcsIHRpbWUpIHtcbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5zbGljZSgwKS5mb3JFYWNoKChkcmFnZ2FibGUsIGkpID0+IHtcbiAgICAgIGNvbnN0IHJlY3QgPSByZWN0YW5nbGVzW2ldLFxuICAgICAgICB0aW1lRW5kID0gdGltZSB8fCB0aW1lID09PSAwID8gdGltZSA6IGluZGV4ZXNPZk5ldy5pbmRleE9mKGkpICE9PSAtMSA/IHRoaXMub3B0aW9ucy50aW1lRW5kIDogdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlXG5cbiAgICAgIGlmIChyZWN0LnJlbW92YWJsZSkge1xuICAgICAgICBkcmFnZ2FibGUubW92ZShkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uLCB0aW1lRW5kLCB0cnVlLCB0cnVlKVxuICAgICAgICByZW1vdmVJdGVtKHRoaXMuaW5uZXJEcmFnZ2FibGVzLCBkcmFnZ2FibGUpXG4gICAgICAgIHRoaXMuZW1pdCgndGFyZ2V0OnJlbW92ZScsIGRyYWdnYWJsZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRyYWdnYWJsZS5tb3ZlKHJlY3QucG9zaXRpb24sIHRpbWVFbmQsIHRydWUsIHRydWUpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGFkZChkcmFnZ2FibGUsIHRpbWUpIHtcbiAgICBjb25zdCBuZXdEcmFnZ2FibGVzSW5kZXggPSB0aGlzLmlubmVyRHJhZ2dhYmxlcy5sZW5ndGhcblxuICAgIHRoaXMuZW1pdCgndGFyZ2V0OmJlZm9yZUFkZCcsIGRyYWdnYWJsZSlcblxuICAgIHRoaXMucHVzaElubmVyRHJhZ2dhYmxlKGRyYWdnYWJsZSlcbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBuZXdEcmFnZ2FibGVzSW5kZXgsIGRyYWdnYWJsZSlcblxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgW25ld0RyYWdnYWJsZXNJbmRleF0sIHRpbWUgfHwgMClcbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMSkge1xuICAgICAgdGhpcy5hZGRSZW1vdmVPbk1vdmUoZHJhZ2dhYmxlKVxuICAgIH1cbiAgfVxuXG4gIHB1c2hJbm5lckRyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpPT09LTEpIHtcbiAgICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxuICAgIH1cbiAgfVxuXG4gIGFkZFJlbW92ZU9uTW92ZShkcmFnZ2FibGUpIHtcbiAgICBkcmFnZ2FibGUub24oJ2RyYWc6bW92ZScsIHRoaXMucmVtb3ZlSGFuZGxlciA9ICgpID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlKGRyYWdnYWJsZSlcbiAgICB9KVxuXG4gICAgdGhpcy5lbWl0KCd0YXJnZXQ6YWRkJywgZHJhZ2dhYmxlKVxuICB9XG5cbiAgcmVtb3ZlKGRyYWdnYWJsZSkge1xuICAgIGRyYWdnYWJsZS51bnN1YnNjcmliZSgnZHJhZzptb3ZlJywgdGhpcy5yZW1vdmVIYW5kbGVyKVxuXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSlcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5zcGxpY2UoaW5kZXgsIDEpXG5cbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBbXSlcblxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgW10pXG4gICAgdGhpcy5lbWl0KCd0YXJnZXQ6cmVtb3ZlJywgZHJhZ2dhYmxlKVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUubW92ZShkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uLCAwLCB0cnVlLCB0cnVlKVxuICAgICAgdGhpcy5lbWl0KCd0YXJnZXQ6cmVtb3ZlJywgZHJhZ2dhYmxlKVxuICAgIH0pXG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMgPSBbXVxuICB9XG5cbiAgZ2V0U29ydGVkRHJhZ2dhYmxlcygpIHtcbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5zbGljZSgpXG4gIH1cblxuICBnZXQgY29udGFpbmVyKCkge1xuICAgIHJldHVybiAodGhpcy5fY29udGFpbmVyID0gdGhpcy5fY29udGFpbmVyIHx8IHRoaXMub3B0aW9ucy5jb250YWluZXIgfHwgdGhpcy5vcHRpb25zLnBhcmVudCB8fCBnZXREZWZhdWx0Q29udGFpbmVyKHRoaXMuZWxlbWVudCkpXG4gIH1cbn1cblxuVGFyZ2V0LmVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKClcblRhcmdldC5lbWl0dGVyLm9uKCd0YXJnZXQ6Y3JlYXRlJywgYWRkVG9EZWZhdWx0U2NvcGUpXG4iLCJpbXBvcnQgcmVtb3ZlSXRlbSBmcm9tICcuL3V0aWxzL3JlbW92ZS1hcnJheS1pdGVtJ1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50RW1pdHRlcidcbmltcG9ydCBEcmFnZ2FibGUgZnJvbSAnLi9kcmFnZ2FibGUnXG5pbXBvcnQgVGFyZ2V0IGZyb20gJy4vdGFyZ2V0J1xuXG5jb25zdCBzY29wZXMgPSBbXVxuXG5jbGFzcyBTY29wZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKGRyYWdnYWJsZXMsIHRhcmdldHMsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcihvcHRpb25zKVxuICAgIHNjb3Blcy5mb3JFYWNoKChzY29wZSkgPT4ge1xuICAgICAgaWYgKGRyYWdnYWJsZXMpIHtcbiAgICAgICAgZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgICAgICByZW1vdmVJdGVtKHNjb3BlLmRyYWdnYWJsZXMsIGRyYWdnYWJsZSlcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgaWYgKHRhcmdldHMpIHtcbiAgICAgICAgdGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHtcbiAgICAgICAgICByZW1vdmVJdGVtKHNjb3BlLnRhcmdldHMsIHRhcmdldClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gZHJhZ2dhYmxlcyB8fCBbXVxuICAgIHRoaXMudGFyZ2V0cyA9IHRhcmdldHMgfHwgW11cbiAgICBzY29wZXMucHVzaCh0aGlzKVxuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgIHRpbWVFbmQ6IChvcHRpb25zLnRpbWVFbmQpIHx8IDQwMFxuICAgIH1cblxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5kcmFnRW5kQWN0aW9uID0gKCkgPT4gdGhpcy5vbkVuZChkcmFnZ2FibGUpXG4gICAgfSlcbiAgfVxuXG4gIGFkZERyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMucHVzaChkcmFnZ2FibGUpXG4gICAgZHJhZ2dhYmxlLmRyYWdFbmRBY3Rpb24gPSAoKSA9PiB0aGlzLm9uRW5kKGRyYWdnYWJsZSlcbiAgfVxuXG4gIGFkZFRhcmdldCh0YXJnZXQpIHtcbiAgICB0aGlzLnRhcmdldHMucHVzaCh0YXJnZXQpXG4gIH1cblxuICBvbkVuZChkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBzaG90VGFyZ2V0cyA9IHRoaXMudGFyZ2V0cy5maWx0ZXIoKHRhcmdldCkgPT4ge1xuICAgICAgcmV0dXJuIHRhcmdldC5kcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTFcbiAgICB9KS5maWx0ZXIoKHRhcmdldCkgPT4ge1xuICAgICAgcmV0dXJuIHRhcmdldC5jYXRjaERyYWdnYWJsZShkcmFnZ2FibGUpXG4gICAgfSkuc29ydCgoYSwgYikgPT4ge1xuICAgICAgcmV0dXJuIGEuZ2V0UmVjdGFuZ2xlKCkuZ2V0U3F1YXJlKCkgLSBiLmdldFJlY3RhbmdsZSgpLmdldFNxdWFyZSgpXG4gICAgfSlcblxuICAgIGlmIChzaG90VGFyZ2V0cy5sZW5ndGgpIHtcbiAgICAgIHNob3RUYXJnZXRzWzBdLm9uRW5kKGRyYWdnYWJsZSlcbiAgICB9IGVsc2UgaWYgKGRyYWdnYWJsZS50YXJnZXRzLmxlbmd0aCkge1xuICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKGRyYWdnYWJsZS5pbml0aWFsUG9zaXRpb24sIHRoaXMub3B0aW9ucy50aW1lRW5kKVxuICAgIH1cblxuICAgIHRoaXMuZW1pdCgnc2NvcGU6Y2hhbmdlJylcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMudGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHRhcmdldC5yZXNldCgpKVxuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucmVmcmVzaCgpKVxuICAgIHRoaXMudGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHRhcmdldC5yZWZyZXNoKCkpXG4gIH1cblxuICBnZXQgcG9zaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnRhcmdldHMubWFwKCh0YXJnZXQpID0+IHtcbiAgICAgIHJldHVybiB0YXJnZXQuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB0aGlzLmRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpKVxuICAgIH0pXG4gIH1cblxuICBzZXQgcG9zaXRpb25zKHBvc2l0aW9ucykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSAnd3JvbmcgYXJyYXkgbGVuZ3RoJ1xuICAgIGlmIChwb3NpdGlvbnMubGVuZ3RoID09PSB0aGlzLnRhcmdldHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB0YXJnZXQucmVzZXQoKSlcblxuICAgICAgcG9zaXRpb25zLmZvckVhY2goKHRhcmdldEluZGV4ZXMsIGkpID0+IHtcbiAgICAgICAgdGFyZ2V0SW5kZXhlcy5mb3JFYWNoKChpbmRleCkgPT4ge1xuICAgICAgICAgIHRoaXMudGFyZ2V0c1tpXS5hZGQodGhpcy5kcmFnZ2FibGVzW2luZGV4XSlcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG1lc3NhZ2VcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgZGVmYXVsdFNjb3BlID0gbmV3IFNjb3BlKClcblxuZnVuY3Rpb24gc2NvcGUoZm4pIHtcbiAgY29uc3QgY3VycmVudFNjb3BlID0gbmV3IFNjb3BlKClcblxuICBjb25zdCBhZGREcmFnZ2FibGVUb1Njb3BlID0gZnVuY3Rpb24oZHJhZ2dhYmxlKSB7XG4gICAgY3VycmVudFNjb3BlLmFkZERyYWdnYWJsZShkcmFnZ2FibGUpXG4gICAgRHJhZ2dhYmxlLmVtaXR0ZXIuaW50ZXJydXB0KClcbiAgfVxuXG4gIGNvbnN0IGFkZFRhcmdldFRvU2NvcGUgPSBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICBjdXJyZW50U2NvcGUuYWRkVGFyZ2V0KHRhcmdldClcbiAgICBEcmFnZ2FibGUuZW1pdHRlci5pbnRlcnJ1cHQoKVxuICB9XG5cbiAgRHJhZ2dhYmxlLmVtaXR0ZXIucHJlcGVuZE9uKCdkcmFnZ2FibGU6Y3JlYXRlJywgYWRkRHJhZ2dhYmxlVG9TY29wZSlcbiAgVGFyZ2V0LmVtaXR0ZXIucHJlcGVuZE9uKCd0YXJnZXQ6Y3JlYXRlJywgYWRkVGFyZ2V0VG9TY29wZSlcbiAgZm4uY2FsbCgpXG4gIERyYWdnYWJsZS5lbWl0dGVyLnVuc3Vic2NyaWJlKCdkcmFnZ2FibGU6Y3JlYXRlJywgYWRkRHJhZ2dhYmxlVG9TY29wZSlcbiAgVGFyZ2V0LmVtaXR0ZXIudW5zdWJzY3JpYmUoJ3RhcmdldDpjcmVhdGUnLCBhZGRUYXJnZXRUb1Njb3BlKVxuICByZXR1cm4gY3VycmVudFNjb3BlXG59XG5cbmV4cG9ydCB7IHNjb3BlcywgZGVmYXVsdFNjb3BlLCBTY29wZSwgc2NvcGUgfVxuIiwiZnVuY3Rpb24gY2hlY2tTdXBwb3J0UGFzc2l2ZUV2ZW50cygpIHtcbiAgbGV0IHBhc3NpdmVTdXBwb3J0ZWQgPSBmYWxzZVxuXG4gIHRyeSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ3Bhc3NpdmUnLCB7XG4gICAgICBnZXQoKSB7XG4gICAgICAgIHJldHVybiAocGFzc2l2ZVN1cHBvcnRlZCA9IHRydWUpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0ZXN0Jywgb3B0aW9ucywgb3B0aW9ucylcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndGVzdCcsIG9wdGlvbnMsIG9wdGlvbnMpXG4gIH0gY2F0Y2ggKF9lcnIpIHtcbiAgICBwYXNzaXZlU3VwcG9ydGVkID0gZmFsc2VcbiAgfVxuXG4gIHJldHVybiBwYXNzaXZlU3VwcG9ydGVkXG59XG5cbmV4cG9ydCBjb25zdCBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzID0gY2hlY2tTdXBwb3J0UGFzc2l2ZUV2ZW50cygpXG5cbmZ1bmN0aW9uIGV2ZW50T3B0aW9ucyhvcHRpb25zLCBmYWxsYmFjayA9IGZhbHNlKSB7XG4gIHJldHVybiBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzID8gb3B0aW9ucyA6IGZhbGxiYWNrXG59XG5cbmV4cG9ydCB7IGV2ZW50T3B0aW9ucyB9XG5cbmV4cG9ydCBkZWZhdWx0IGlzU3VwcG9ydFBhc3NpdmVFdmVudHNcbiIsImltcG9ydCBnZXREZWZhdWx0Q29udGFpbmVyIGZyb20gJy4vdXRpbHMvZ2V0LWRlZmF1bHQtY29udGFpbmVyJ1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50RW1pdHRlcidcbmltcG9ydCBnZXRTdHlsZVByb3BlcnR5IGZyb20gJ2Rlc2FuZHJvLWdldC1zdHlsZS1wcm9wZXJ0eSdcbmltcG9ydCB7IEJvdW5kVG9FbGVtZW50IH0gZnJvbSAnLi9ib3VuZGluZydcbmltcG9ydCBQb2ludCBmcm9tICcuL2dlb21ldHJ5L3BvaW50J1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tICcuL2dlb21ldHJ5L3JlY3RhbmdsZSdcbmltcG9ydCB7IGRlZmF1bHRTY29wZSB9IGZyb20gJy4vc2NvcGUnXG5pbXBvcnQgaXNTdXBwb3J0UGFzc2l2ZUV2ZW50cyBmcm9tICcuL3V0aWxzL2lzLXN1cHBvcnQtcGFzc2l2ZS1ldmVudHMnXG5cbmNvbnN0IHBhc3NpdmVGYWxzZSA9IGlzU3VwcG9ydFBhc3NpdmVFdmVudHMgPyB7IHBhc3NpdmU6IGZhbHNlIH0gOiBmYWxzZVxuXG5jb25zdCBpc1RvdWNoID0gJ29udG91Y2hzdGFydCcgaW4gd2luZG93XG5jb25zdCBtb3VzZUV2ZW50cyA9IHtcbiAgc3RhcnQ6ICdtb3VzZWRvd24nLFxuICBtb3ZlOiAnbW91c2Vtb3ZlJyxcbiAgZW5kOiAnbW91c2V1cCdcbn1cbmNvbnN0IHRvdWNoRXZlbnRzID0ge1xuICBzdGFydDogJ3RvdWNoc3RhcnQnLFxuICBtb3ZlOiAndG91Y2htb3ZlJyxcbiAgZW5kOiAndG91Y2hlbmQnXG59XG5jb25zdCBkcmFnZ2FibGVzID0gW11cbmNvbnN0IHRyYW5zZm9ybVByb3BlcnR5ID0gZ2V0U3R5bGVQcm9wZXJ0eSgndHJhbnNmb3JtJylcbmNvbnN0IHRyYW5zaXRpb25Qcm9wZXJ0eSA9IGdldFN0eWxlUHJvcGVydHkoJ3RyYW5zaXRpb24nKVxuXG5mdW5jdGlvbiBnZXRUb3VjaEJ5SUQoZWxlbWVudCwgdG91Y2hJZCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnQuY2hhbmdlZFRvdWNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZWxlbWVudC5jaGFuZ2VkVG91Y2hlc1tpXS5pZGVudGlmaWVyID09PSB0b3VjaElkKSB7XG4gICAgICByZXR1cm4gZWxlbWVudC5jaGFuZ2VkVG91Y2hlc1tpXVxuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cblxuZnVuY3Rpb24gcHJldmVudERvdWJsZUluaXQoZHJhZ2dhYmxlKSB7XG4gIGNvbnN0IG1lc3NhZ2UgPSBcImZvciB0aGlzIGVsZW1lbnQgRHJhZ2VlLkRyYWdnYWJsZSBpcyBhbHJlYWR5IGV4aXN0LCBkb24ndCBjcmVhdGUgaXQgdHdpY2UgXCJcbiAgaWYgKGRyYWdnYWJsZXMuc29tZSgoZXhpc3RpbmcpID0+IGRyYWdnYWJsZS5lbGVtZW50ID09PSBleGlzdGluZy5lbGVtZW50KSkge1xuICAgIHRocm93IG1lc3NhZ2VcbiAgfVxuICBkcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxufVxuXG5mdW5jdGlvbiBhZGRUb0RlZmF1bHRTY29wZShkcmFnZ2FibGUpIHtcbiAgZGVmYXVsdFNjb3BlLmFkZERyYWdnYWJsZShkcmFnZ2FibGUpXG59XG5cbmZ1bmN0aW9uIGNvcHlTdHlsZXMoc291cmNlLCBkZXN0aW5hdGlvbikge1xuICBjb25zdCBjcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHNvdXJjZSlcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qga2V5ID0gY3NbaV1cbiAgICBpZiAoKGtleS5pbmRleE9mKCd0cmFuc2l0aW9uJykgPCAwKSAmJiAoa2V5LmluZGV4T2YoJ3RyYW5zZm9ybScpIDwgMCkpIHtcbiAgICAgIGRlc3RpbmF0aW9uLnN0eWxlW2tleV0gPSBjc1trZXldXG4gICAgfVxuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzb3VyY2UuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICBjb3B5U3R5bGVzKHNvdXJjZS5jaGlsZHJlbltpXSwgZGVzdGluYXRpb24uY2hpbGRyZW5baV0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhZ2dhYmxlIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgb3B0aW9ucz17fSkge1xuICAgIHN1cGVyKG9wdGlvbnMpXG4gICAgdGhpcy50YXJnZXRzID0gW11cbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIHByZXZlbnREb3VibGVJbml0KHRoaXMpXG4gICAgRHJhZ2dhYmxlLmVtaXR0ZXIuZW1pdCgnZHJhZ2dhYmxlOmNyZWF0ZScsIHRoaXMpXG4gICAgdGhpcy5fZW5hYmxlID0gdHJ1ZVxuICAgIHRoaXMudG91Y2hEcmFnZ2luZ1RocmVzaG9sZCA9ICgndG91Y2hEcmFnZ2luZ1RocmVzaG9sZCcgaW4gdGhpcy5vcHRpb25zKSA/IHRoaXMub3B0aW9ucy50b3VjaERyYWdnaW5nVGhyZXNob2xkIDogMFxuXG4gICAgdGhpcy5zdGFydEJvdW5kaW5nKClcbiAgICB0aGlzLnN0YXJ0UG9zaXRpb25pbmcoKVxuICAgIHRoaXMuc3RhcnRMaXN0ZW5pbmcoKVxuICB9XG5cbiAgc3RhcnRCb3VuZGluZygpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmJvdW5kKSB7XG4gICAgICB0aGlzLmJvdW5kaW5nID0geyBib3VuZDogdGhpcy5vcHRpb25zLmJvdW5kIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ib3VuZGluZyA9IG5ldyBCb3VuZFRvRWxlbWVudCh0aGlzLmNvbnRhaW5lciwgdGhpcy5jb250YWluZXIpXG4gICAgfVxuICB9XG5cbiAgc3RhcnRQb3NpdGlvbmluZygpIHtcbiAgICB0aGlzLl9zZXREZWZhdWx0VHJhbnNpdGlvbigpXG4gICAgdGhpcy5vZmZzZXQgPSBQb2ludC5lbGVtZW50T2Zmc2V0KHRoaXMuZWxlbWVudCwgdGhpcy5jb250YWluZXIsIHRydWUpXG4gICAgdGhpcy5waW5uZWRQb3NpdGlvbiA9IHRoaXMub2Zmc2V0XG4gICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMub2Zmc2V0XG4gICAgdGhpcy5pbml0aWFsUG9zaXRpb24gPSB0aGlzLm9wdGlvbnMucG9zaXRpb24gfHwgdGhpcy5vZmZzZXRcblxuICAgIHRoaXMucGluUG9zaXRpb24odGhpcy5pbml0aWFsUG9zaXRpb24pXG5cbiAgICBpZiAodGhpcy5ib3VuZGluZy5yZWZyZXNoKSB7XG4gICAgICB0aGlzLmJvdW5kaW5nLnJlZnJlc2goKVxuICAgIH1cbiAgfVxuXG4gIHN0YXJ0TGlzdGVuaW5nKCkge1xuICAgIHRoaXMuX2RyYWdTdGFydCA9IChldmVudCkgPT4gdGhpcy5kcmFnU3RhcnQoZXZlbnQpXG4gICAgdGhpcy5fZHJhZ01vdmUgPSAoZXZlbnQpID0+IHRoaXMuZHJhZ01vdmUoZXZlbnQpXG4gICAgdGhpcy5fZHJhZ0VuZCA9IChldmVudCkgPT4gdGhpcy5kcmFnRW5kKGV2ZW50KVxuICAgIHRoaXMuX25hdGl2ZURyYWdTdGFydCA9IChldmVudCkgPT4gdGhpcy5uYXRpdmVEcmFnU3RhcnQoZXZlbnQpXG4gICAgdGhpcy5fbmF0aXZlRHJhZ092ZXIgPSAoZXZlbnQpID0+IHRoaXMubmF0aXZlRHJhZ092ZXIoZXZlbnQpXG4gICAgdGhpcy5fbmF0aXZlRHJhZ0VuZCA9IChldmVudCkgPT4gdGhpcy5uYXRpdmVEcmFnRW5kKGV2ZW50KVxuICAgIHRoaXMuX25hdGl2ZURyb3AgPSAoZXZlbnQpID0+IHRoaXMubmF0aXZlRHJvcChldmVudClcbiAgICB0aGlzLl9zY3JvbGwgPSAoZXZlbnQpID0+IHRoaXMub25TY3JvbGwoZXZlbnQpXG5cbiAgICB0aGlzLmhhbmRsZXIuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0LCBwYXNzaXZlRmFsc2UpXG4gICAgdGhpcy5oYW5kbGVyLmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydCwgcGFzc2l2ZUZhbHNlKVxuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCB0aGlzLl9uYXRpdmVEcmFnU3RhcnQpXG4gIH1cblxuICBnZXRTaXplKCkge1xuICAgIHJldHVybiBQb2ludC5lbGVtZW50U2l6ZSh0aGlzLmVsZW1lbnQsIHRoaXMub3B0aW9ucy5pc0NvbnRlbnRCb3hTaXplKVxuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMub2Zmc2V0LmFkZCh0aGlzLl90cmFuc2Zvcm1Qb3NpdGlvbiB8fCBuZXcgUG9pbnQoMCwgMCkpXG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25cbiAgfVxuXG4gIGdldENlbnRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi5hZGQodGhpcy5nZXRTaXplKCkubXVsdCgwLjUpKVxuICB9XG5cbiAgX3NldERlZmF1bHRUcmFuc2l0aW9uICgpIHtcbiAgICBpZiAoIXRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNpdGlvblByb3BlcnR5XSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZWxlbWVudClbdHJhbnNpdGlvblByb3BlcnR5XVxuICAgIH1cbiAgfVxuXG4gIF9zZXRUcmFuc2l0aW9uKHRpbWUpIHtcbiAgICBsZXQgdHJhbnNpdGlvbiA9IHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldXG4gICAgY29uc3QgdHJhbnNpdGlvbkNzcyA9IGB0cmFuc2Zvcm0gJHt0aW1lfW1zYFxuXG4gICAgaWYgKCEvdHJhbnNmb3JtIFxcZCptP3MvLnRlc3QodHJhbnNpdGlvbikpIHtcbiAgICAgIGlmICh0cmFuc2l0aW9uKSB7XG4gICAgICAgIHRyYW5zaXRpb24gKz0gYCwgJHt0cmFuc2l0aW9uQ3NzfWBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyYW5zaXRpb24gPSB0cmFuc2l0aW9uQ3NzXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyYW5zaXRpb24gPSB0cmFuc2l0aW9uLnJlcGxhY2UoL3RyYW5zZm9ybSBcXGQqbT9zL2csIHRyYW5zaXRpb25Dc3MpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldICE9PSB0cmFuc2l0aW9uKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNpdGlvblByb3BlcnR5XSA9IHRyYW5zaXRpb25cbiAgICB9XG4gIH1cblxuICBfc2V0VHJhbnNsYXRlKHBvaW50KSB7XG4gICAgdGhpcy5fdHJhbnNmb3JtUG9zaXRpb24gPSBwb2ludFxuICAgIGNvbnN0IHRyYW5zbGF0ZUNzcyA9IGB0cmFuc2xhdGUzZCgke3BvaW50Lnh9cHgsICR7cG9pbnQueX1weCwgMHB4KWBcblxuICAgIGxldCB0cmFuc2Zvcm0gPSB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcGVydHldXG5cbiAgICBpZiAodGhpcy5zaG91bGRSZW1vdmVaZXJvVHJhbnNsYXRlICYmIHBvaW50LnggPT09IDAgJiYgcG9pbnQueSA9PT0gMCkge1xuICAgICAgdHJhbnNmb3JtID0gdHJhbnNmb3JtLnJlcGxhY2UoL3RyYW5zbGF0ZTNkXFwoW14pXStcXCkvLCAnJylcbiAgICB9IGVsc2UgaWYgKCEvdHJhbnNsYXRlM2RcXChbXildK1xcKS8udGVzdCh0cmFuc2Zvcm0pKSB7XG4gICAgICBpZiAodHJhbnNmb3JtKSB7XG4gICAgICAgIHRyYW5zZm9ybSArPSAnICdcbiAgICAgIH1cbiAgICAgIHRyYW5zZm9ybSArPSB0cmFuc2xhdGVDc3NcbiAgICB9IGVsc2Uge1xuICAgICAgdHJhbnNmb3JtID0gdHJhbnNmb3JtLnJlcGxhY2UoL3RyYW5zbGF0ZTNkXFwoW14pXStcXCkvLCB0cmFuc2xhdGVDc3MpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wZXJ0eV0gIT09IHRyYW5zZm9ybSkge1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BlcnR5XSA9IHRyYW5zZm9ybVxuICAgIH1cbiAgfVxuXG4gIG1vdmUocG9pbnQsIHRpbWU9MCwgaXNTaWxlbnQ9ZmFsc2UpIHtcbiAgICBwb2ludCA9IHBvaW50LmNsb25lKClcblxuICAgIHRoaXMuZGV0ZXJtaW5lRGlyZWN0aW9uKHBvaW50KVxuICAgIHRoaXMucG9zaXRpb24gPSBwb2ludFxuXG4gICAgdGhpcy5fc2V0VHJhbnNpdGlvbih0aW1lKVxuICAgIHRoaXMuX3NldFRyYW5zbGF0ZShwb2ludC5zdWIodGhpcy5vZmZzZXQpKVxuXG4gICAgaWYgKCFpc1NpbGVudCkge1xuICAgICAgdGhpcy5lbWl0KCdkcmFnOm1vdmUnKVxuICAgIH1cbiAgfVxuXG4gIHBpblBvc2l0aW9uKHBvaW50LCB0aW1lPTAsIHNpbGVudD10cnVlKSB7XG4gICAgdGhpcy5waW5uZWRQb3NpdGlvbiA9IHBvaW50LmNsb25lKClcbiAgICB0aGlzLm1vdmUodGhpcy5waW5uZWRQb3NpdGlvbiwgdGltZSwgc2lsZW50KVxuICB9XG5cbiAgcmVzZXRQb3NpdGlvblRvSW5pdGlhbCAoKSB7XG4gICAgdGhpcy5waW5Qb3NpdGlvbih0aGlzLmluaXRpYWxQb3NpdGlvbilcbiAgfVxuXG4gIHJlZnJlc2hQb3NpdGlvbiAoKSB7XG4gICAgdGhpcy5zZXRQb3NpdGlvbih0aGlzLmdldFBvc2l0aW9uKCkpXG4gIH1cblxuICBzZXRQb3NpdGlvbihwb2ludCkge1xuICAgIHBvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIHRoaXMucG9zaXRpb24gPSBwb2ludFxuICAgIHRoaXMuX3NldFRyYW5zaXRpb24oMClcbiAgICB0aGlzLl9zZXRUcmFuc2xhdGUocG9pbnQuc3ViKHRoaXMub2Zmc2V0KSlcbiAgfVxuXG4gIGRldGVybWluZURpcmVjdGlvbihwb2ludCkge1xuICAgIHRoaXMubGVmdERpcmVjdGlvbiA9ICh0aGlzLnBvc2l0aW9uLnggPCBwb2ludC54KVxuICAgIHRoaXMucmlnaHREaXJlY3Rpb24gPSAodGhpcy5wb3NpdGlvbi54ID4gcG9pbnQueClcbiAgICB0aGlzLnVwRGlyZWN0aW9uID0gKHRoaXMucG9zaXRpb24ueSA+IHBvaW50LnkpXG4gICAgdGhpcy5kb3duRGlyZWN0aW9uID0gKHRoaXMucG9zaXRpb24ueSA8IHBvaW50LnkpXG4gIH1cblxuICBzZWVtc1Njcm9sbGluZygpIHtcbiAgICByZXR1cm4gKCtuZXcgRGF0ZSgpIC0gdGhpcy5fc3RhcnRUb3VjaFRpbWVzdGFtcCkgPCB0aGlzLnRvdWNoRHJhZ2dpbmdUaHJlc2hvbGRcbiAgfVxuXG4gIHNob3VsZFVzZU5hdGl2ZURyYWdBbmREcm9wKCkge1xuICAgIGlmICh0aGlzLmlzVG91Y2hFdmVudCkge1xuICAgICAgcmV0dXJuIHRoaXMubmF0aXZlRHJhZ0FuZERyb3AgJiYgdGhpcy5lbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3BPblRvdWNoXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLm5hdGl2ZURyYWdBbmREcm9wXG4gICAgfVxuICB9XG5cbiAgZHJhZ1N0YXJ0KGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLl9lbmFibGUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuaXNUb3VjaEV2ZW50ID0gKGlzVG91Y2ggJiYgKGV2ZW50IGluc3RhbmNlb2Ygd2luZG93LlRvdWNoRXZlbnQpKVxuXG4gICAgdGhpcy50b3VjaFBvaW50ID0gdGhpcy5fc3RhcnRUb3VjaFBvaW50ID0gbmV3IFBvaW50KFxuICAgICAgdGhpcy5pc1RvdWNoRXZlbnQgPyBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCA6IGV2ZW50LmNsaWVudFgsXG4gICAgICB0aGlzLmlzVG91Y2hFdmVudCA/IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZIDogZXZlbnQuY2xpZW50WVxuICAgIClcblxuICAgIHRoaXMuX3N0YXJ0UG9zaXRpb24gPSB0aGlzLmdldFBvc2l0aW9uKClcbiAgICBpZiAodGhpcy5pc1RvdWNoRXZlbnQpIHtcbiAgICAgIHRoaXMuX3RvdWNoSWQgPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5pZGVudGlmaWVyXG4gICAgICB0aGlzLl9zdGFydFRvdWNoVGltZXN0YW1wID0gK25ldyBEYXRlKClcbiAgICB9XG5cbiAgICB0aGlzLl9zdGFydFNjcm9sbFBvaW50ID0gbmV3IFBvaW50KHdpbmRvdy5zY3JvbGxYLCB3aW5kb3cuc2Nyb2xsWSlcblxuICAgIGlmIChldmVudC50YXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElucHV0RWxlbWVudCB8fFxuICAgICAgICAgIGV2ZW50LnRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSW5wdXRFbGVtZW50KSB7XG4gICAgICBldmVudC50YXJnZXQuZm9jdXMoKVxuICAgIH1cblxuICAgIGlmICh0aGlzLnNob3VsZFVzZU5hdGl2ZURyYWdBbmREcm9wKCkpIHtcbiAgICAgIGlmICh0aGlzLmlzVG91Y2hFdmVudCAmJiB0aGlzLmVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcE9uVG91Y2gpIHtcbiAgICAgICAgY29uc3QgZW11bGF0ZU9uRmlyc3RNb3ZlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuc2VlbXNTY3JvbGxpbmcoKSkge1xuICAgICAgICAgICAgdGhpcy5jYW5jZWxEcmFnZ2luZygpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wKGV2ZW50KVxuICAgICAgICAgIH1cbiAgICAgICAgICBjYW5jZWxFbXVsYXRpb24oKVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNhbmNlbEVtdWxhdGlvbiA9ICgpID0+IHtcbiAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIGVtdWxhdGVPbkZpcnN0TW92ZSlcbiAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgY2FuY2VsRW11bGF0aW9uKVxuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCBlbXVsYXRlT25GaXJzdE1vdmUsIHBhc3NpdmVGYWxzZSlcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIGNhbmNlbEVtdWxhdGlvbiwgcGFzc2l2ZUZhbHNlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmRyYWdnYWJsZSA9IHRydWVcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX25hdGl2ZURyYWdFbmQsIHBhc3NpdmVGYWxzZSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSwgcGFzc2l2ZUZhbHNlKVxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSwgcGFzc2l2ZUZhbHNlKVxuXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZCwgcGFzc2l2ZUZhbHNlKVxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQsIHBhc3NpdmVGYWxzZSlcbiAgICB9XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fc2Nyb2xsKVxuXG4gICAgdGhpcy5lbWl0KCdkcmFnOnN0YXJ0JylcbiAgfVxuXG4gIGRyYWdNb3ZlKGV2ZW50KSB7XG4gICAgbGV0IHRvdWNoXG5cbiAgICB0aGlzLmlzRHJhZ2dpbmcgPSB0cnVlXG5cbiAgICB0aGlzLmlzVG91Y2hFdmVudCA9IChpc1RvdWNoICYmIChldmVudCBpbnN0YW5jZW9mIHdpbmRvdy5Ub3VjaEV2ZW50KSlcbiAgICBpZiAodGhpcy5pc1RvdWNoRXZlbnQpIHtcbiAgICAgIHRvdWNoID0gZ2V0VG91Y2hCeUlEKGV2ZW50LCB0aGlzLl90b3VjaElkKVxuXG4gICAgICBpZiAoIXRvdWNoKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5zZWVtc1Njcm9sbGluZygpKSB7XG4gICAgICAgIHRoaXMuY2FuY2VsRHJhZ2dpbmcoKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB0aGlzLnRvdWNoUG9pbnQgPSBuZXcgUG9pbnQoXG4gICAgICB0aGlzLmlzVG91Y2hFdmVudCA/IHRvdWNoLnBhZ2VYIDogZXZlbnQuY2xpZW50WCxcbiAgICAgIHRoaXMuaXNUb3VjaEV2ZW50ID8gdG91Y2gucGFnZVkgOiBldmVudC5jbGllbnRZXG4gICAgKVxuXG4gICAgbGV0IHBvaW50ID0gdGhpcy5fc3RhcnRQb3NpdGlvbi5hZGQodGhpcy50b3VjaFBvaW50LnN1Yih0aGlzLl9zdGFydFRvdWNoUG9pbnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMuc2Nyb2xsUG9pbnQuc3ViKHRoaXMuX3N0YXJ0U2Nyb2xsUG9pbnQpKVxuXG4gICAgcG9pbnQgPSB0aGlzLmJvdW5kaW5nLmJvdW5kKHBvaW50LCB0aGlzLmdldFNpemUoKSlcbiAgICB0aGlzLm1vdmUocG9pbnQpXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RyYWdlZS1hY3RpdmUnKVxuICB9XG5cbiAgZHJhZ0VuZChldmVudCkge1xuICAgIHRoaXMuaXNUb3VjaEV2ZW50ID0gKGlzVG91Y2ggJiYgKGV2ZW50IGluc3RhbmNlb2Ygd2luZG93LlRvdWNoRXZlbnQpKVxuXG4gICAgaWYgKHRoaXMuaXNUb3VjaEV2ZW50ICYmICFnZXRUb3VjaEJ5SUQoZXZlbnQsIHRoaXMuX3RvdWNoSWQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc0RyYWdnaW5nKSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIH1cblxuICAgIHRoaXMuZHJhZ0VuZEFjdGlvbigpXG4gICAgdGhpcy5lbWl0KCdkcmFnOmVuZCcpXG4gICAgdGhpcy5jYW5jZWxEcmFnZ2luZygpXG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZWUtYWN0aXZlJykpXG4gIH1cblxuICBvblNjcm9sbChfZXZlbnQpIHtcbiAgICBsZXQgcG9pbnQgPSB0aGlzLl9zdGFydFBvc2l0aW9uLmFkZCh0aGlzLnRvdWNoUG9pbnQuc3ViKHRoaXMuX3N0YXJ0VG91Y2hQb2ludCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy5zY3JvbGxQb2ludC5zdWIodGhpcy5fc3RhcnRTY3JvbGxQb2ludCkpXG5cbiAgICBwb2ludCA9IHRoaXMuYm91bmRpbmcuYm91bmQocG9pbnQsIHRoaXMuZ2V0U2l6ZSgpKVxuICAgIGlmICghdGhpcy5uYXRpdmVEcmFnQW5kRHJvcCkge1xuICAgICAgdGhpcy5tb3ZlKHBvaW50KVxuICAgIH1cbiAgfVxuXG4gIG5hdGl2ZURyYWdTdGFydChldmVudCkge1xuICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0JywgJ0ZpcmVGb3ggZml4JylcbiAgICBldmVudC5kYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCA9ICdtb3ZlJ1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgdGhpcy5fbmF0aXZlRHJhZ092ZXIpXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIHRoaXMuX25hdGl2ZURyYWdFbmQpXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIHRoaXMuX25hdGl2ZURyb3ApXG4gIH1cblxuICBuYXRpdmVEcmFnT3ZlcihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBldmVudC5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9ICdtb3ZlJ1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkcmFnZWUtcGxhY2Vob2xkZXInKVxuICAgIGlmIChldmVudC5jbGllbnRYID09PSAwICYmIGV2ZW50LmNsaWVudFkgPT09IDApIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMudG91Y2hQb2ludCA9IG5ldyBQb2ludChldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZKVxuICAgIGxldCBwb2ludCA9IHRoaXMuX3N0YXJ0UG9zaXRpb24uYWRkKHRoaXMudG91Y2hQb2ludC5zdWIodGhpcy5fc3RhcnRUb3VjaFBvaW50KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZCh0aGlzLnNjcm9sbFBvaW50LnN1Yih0aGlzLl9zdGFydFNjcm9sbFBvaW50KSlcbiAgICBwb2ludCA9IHRoaXMuYm91bmRpbmcuYm91bmQocG9pbnQsIHRoaXMuZ2V0U2l6ZSgpKVxuICAgIHRoaXMucG9zaXRpb24gPSBwb2ludFxuICAgIHRoaXMuZW1pdCgnZHJhZzptb3ZlJylcbiAgfVxuXG4gIG5hdGl2ZURyYWdFbmQoX2V2ZW50KSB7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdlZS1wbGFjZWhvbGRlcicpXG4gICAgdGhpcy5kcmFnRW5kQWN0aW9uKClcbiAgICB0aGlzLmVtaXQoJ2RyYWc6ZW5kJylcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIHRoaXMuX25hdGl2ZURyYWdPdmVyKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzLl9uYXRpdmVEcm9wKVxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9zY3JvbGwpXG4gICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2VcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkcmFnZ2FibGUnKVxuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZWUtYWN0aXZlJylcbiAgfVxuXG4gIG5hdGl2ZURyb3AoZXZlbnQpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIGNhbmNlbERyYWdnaW5nICgpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG5cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcblxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX3Njcm9sbClcblxuICAgIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnZHJhZ2dhYmxlJylcbiAgfVxuXG4gIGNvcHlTdHlsZXMoc291cmNlLCBkZXN0aW5hdGlvbikge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuY29weVN0eWxlcykge1xuICAgICAgdGhpcy5vcHRpb25zLmNvcHlTdHlsZXMoc291cmNlLCBkZXN0aW5hdGlvbilcbiAgICB9IGVsc2Uge1xuICAgICAgY29weVN0eWxlcyhzb3VyY2UsIGRlc3RpbmF0aW9uKVxuICAgIH1cbiAgfVxuXG4gIGVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcChldmVudCkge1xuICAgIGNvbnN0IGNvbnRhaW5lclJlY3QgPSB0aGlzLmNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIGNvbnN0IGNsb25lZEVsZW1lbnQgPSB0aGlzLmVsZW1lbnQuY2xvbmVOb2RlKHRydWUpXG4gICAgY2xvbmVkRWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wZXJ0eV0gPSAnJ1xuICAgIHRoaXMuY29weVN0eWxlcyh0aGlzLmVsZW1lbnQsIGNsb25lZEVsZW1lbnQpXG4gICAgY2xvbmVkRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSdcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNsb25lZEVsZW1lbnQpXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RyYWdlZS1wbGFjZWhvbGRlcicpXG5cbiAgICBjb25zdCBlbXVsYXRpb25EcmFnZ2FibGUgPSBuZXcgRHJhZ2dhYmxlKGNsb25lZEVsZW1lbnQsIHtcbiAgICAgIGNvbnRhaW5lcjogZG9jdW1lbnQuYm9keSxcbiAgICAgIHRvdWNoRHJhZ2dpbmdUaHJlc2hvbGQ6IDAsXG4gICAgICBib3VuZChwb2ludCkge1xuICAgICAgICByZXR1cm4gcG9pbnRcbiAgICAgIH0sXG4gICAgICBvbjoge1xuICAgICAgICAnZHJhZzptb3ZlJzogKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNvbnRhaW5lclJlY3RQb2ludCA9IG5ldyBQb2ludChjb250YWluZXJSZWN0LmxlZnQsIGNvbnRhaW5lclJlY3QudG9wKVxuICAgICAgICAgIHRoaXMucG9zaXRpb24gPSBlbXVsYXRpb25EcmFnZ2FibGUucG9zaXRpb24uc3ViKGNvbnRhaW5lclJlY3RQb2ludClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN1Yih0aGlzLl9zdGFydFNjcm9sbFBvaW50KVxuICAgICAgICAgIHRoaXMuZW1pdCgnZHJhZzptb3ZlJylcbiAgICAgICAgfSxcbiAgICAgICAgJ2RyYWc6ZW5kJzogKCkgPT4ge1xuICAgICAgICAgIGVtdWxhdGlvbkRyYWdnYWJsZS5kZXN0cm95KClcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGNsb25lZEVsZW1lbnQpXG4gICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdlZS1wbGFjZWhvbGRlcicpXG4gICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdlZS1hY3RpdmUnKVxuXG4gICAgICAgICAgdGhpcy5lbWl0KCdkcmFnOmVuZCcpXG4gICAgICAgICAgdGhpcy5kcmFnRW5kQWN0aW9uKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBjb250YWluZXJSZWN0UG9pbnQgPSBuZXcgUG9pbnQoY29udGFpbmVyUmVjdC5sZWZ0LCBjb250YWluZXJSZWN0LnRvcClcbiAgICBlbXVsYXRpb25EcmFnZ2FibGUuX3N0YXJ0U2Nyb2xsUG9pbnQgPSB0aGlzLl9zdGFydFNjcm9sbFBvaW50XG5cbiAgICBlbXVsYXRpb25EcmFnZ2FibGUubW92ZShcbiAgICAgIHRoaXMucGlubmVkUG9zaXRpb24uYWRkKGNvbnRhaW5lclJlY3RQb2ludCkuYWRkKG5ldyBQb2ludCh3aW5kb3cuc2Nyb2xsWCwgd2luZG93LnNjcm9sbFkpKVxuICAgIClcblxuICAgIGVtdWxhdGlvbkRyYWdnYWJsZS5kcmFnU3RhcnQoZXZlbnQpXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgZHJhZ0VuZEFjdGlvbigpIHtcbiAgICB0aGlzLnBpblBvc2l0aW9uKHRoaXMucG9zaXRpb24pXG4gIH1cblxuICBnZXRSZWN0YW5nbGUoKSB7XG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUodGhpcy5wb3NpdGlvbiwgdGhpcy5nZXRTaXplKCkpXG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIGlmICh0aGlzLmJvdW5kaW5nLnJlZnJlc2gpIHtcbiAgICAgIHRoaXMuYm91bmRpbmcucmVmcmVzaCgpXG4gICAgfVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmhhbmRsZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0KVxuICAgIHRoaXMuaGFuZGxlci5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQpXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIHRoaXMuX25hdGl2ZURyYWdTdGFydClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCB0aGlzLl9uYXRpdmVEcmFnT3ZlcilcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcm9wJywgdGhpcy5fbmF0aXZlRHJvcClcbiAgICB0aGlzLnJlc2V0RW1pdHRlcigpXG5cbiAgICBjb25zdCBpbmRleCA9IGRyYWdnYWJsZXMuaW5kZXhPZih0aGlzKVxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICBkcmFnZ2FibGVzLnNwbGljZShpbmRleCwgMSlcbiAgICB9XG4gIH1cblxuICBnZXQgY29udGFpbmVyKCkge1xuICAgIHJldHVybiAodGhpcy5fY29udGFpbmVyID0gdGhpcy5fY29udGFpbmVyIHx8IHRoaXMub3B0aW9ucy5jb250YWluZXIgfHwgdGhpcy5vcHRpb25zLnBhcmVudCB8fCBnZXREZWZhdWx0Q29udGFpbmVyKHRoaXMuZWxlbWVudCkpXG4gIH1cblxuICBnZXQgaGFuZGxlcigpIHtcbiAgICBpZiAoIXRoaXMuX2hhbmRsZXIpIHtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmhhbmRsZXIgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZXIgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLm9wdGlvbnMuaGFuZGxlcikgfHwgdGhpcy5lbGVtZW50XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9oYW5kbGVyID0gdGhpcy5vcHRpb25zLmhhbmRsZXIgfHwgdGhpcy5lbGVtZW50XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2hhbmRsZXJcbiAgfVxuXG4gIGdldCBuYXRpdmVEcmFnQW5kRHJvcCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLm5hdGl2ZURyYWdBbmREcm9wIHx8IGZhbHNlXG4gIH1cblxuICBnZXQgZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wT25Ub3VjaCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcE9uVG91Y2ggfHwgZmFsc2VcbiAgfVxuXG4gIGdldCBzaG91bGRSZW1vdmVaZXJvVHJhbnNsYXRlKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuc2hvdWxkUmVtb3ZlWmVyb1RyYW5zbGF0ZSB8fCBmYWxzZVxuICB9XG5cbiAgZ2V0IHNjcm9sbFBvaW50KCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQod2luZG93LnNjcm9sbFgsIHdpbmRvdy5zY3JvbGxZKVxuICB9XG5cbiAgZ2V0IGVuYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlXG4gIH1cblxuICBzZXQgZW5hYmxlKGVuYWJsZSkge1xuICAgIGlmIChlbmFibGUpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZWUtZGlzYWJsZScpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkcmFnZWUtZGlzYWJsZScpXG4gICAgfVxuXG4gICAgdGhpcy5fZW5hYmxlID0gZW5hYmxlXG4gIH1cbn1cblxuRHJhZ2dhYmxlLmVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKClcbkRyYWdnYWJsZS5lbWl0dGVyLm9uKCdkcmFnZ2FibGU6Y3JlYXRlJywgYWRkVG9EZWZhdWx0U2NvcGUpXG4iLCJ2YXIgcmVzaXplT2JzZXJ2ZXJzID0gW107XG5leHBvcnQgeyByZXNpemVPYnNlcnZlcnMgfTtcbiIsImltcG9ydCB7IHJlc2l6ZU9ic2VydmVycyB9IGZyb20gJy4uL3V0aWxzL3Jlc2l6ZU9ic2VydmVycyc7XG52YXIgaGFzQWN0aXZlT2JzZXJ2YXRpb25zID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiByZXNpemVPYnNlcnZlcnMuc29tZShmdW5jdGlvbiAocm8pIHsgcmV0dXJuIHJvLmFjdGl2ZVRhcmdldHMubGVuZ3RoID4gMDsgfSk7XG59O1xuZXhwb3J0IHsgaGFzQWN0aXZlT2JzZXJ2YXRpb25zIH07XG4iLCJpbXBvcnQgeyByZXNpemVPYnNlcnZlcnMgfSBmcm9tICcuLi91dGlscy9yZXNpemVPYnNlcnZlcnMnO1xudmFyIGhhc1NraXBwZWRPYnNlcnZhdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHJlc2l6ZU9ic2VydmVycy5zb21lKGZ1bmN0aW9uIChybykgeyByZXR1cm4gcm8uc2tpcHBlZFRhcmdldHMubGVuZ3RoID4gMDsgfSk7XG59O1xuZXhwb3J0IHsgaGFzU2tpcHBlZE9ic2VydmF0aW9ucyB9O1xuIiwidmFyIG1zZyA9ICdSZXNpemVPYnNlcnZlciBsb29wIGNvbXBsZXRlZCB3aXRoIHVuZGVsaXZlcmVkIG5vdGlmaWNhdGlvbnMuJztcbnZhciBkZWxpdmVyUmVzaXplTG9vcEVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBldmVudDtcbiAgICBpZiAodHlwZW9mIEVycm9yRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZXZlbnQgPSBuZXcgRXJyb3JFdmVudCgnZXJyb3InLCB7XG4gICAgICAgICAgICBtZXNzYWdlOiBtc2dcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpO1xuICAgICAgICBldmVudC5pbml0RXZlbnQoJ2Vycm9yJywgZmFsc2UsIGZhbHNlKTtcbiAgICAgICAgZXZlbnQubWVzc2FnZSA9IG1zZztcbiAgICB9XG4gICAgd2luZG93LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xufTtcbmV4cG9ydCB7IGRlbGl2ZXJSZXNpemVMb29wRXJyb3IgfTtcbiIsInZhciBSZXNpemVPYnNlcnZlckJveE9wdGlvbnM7XG4oZnVuY3Rpb24gKFJlc2l6ZU9ic2VydmVyQm94T3B0aW9ucykge1xuICAgIFJlc2l6ZU9ic2VydmVyQm94T3B0aW9uc1tcIkJPUkRFUl9CT1hcIl0gPSBcImJvcmRlci1ib3hcIjtcbiAgICBSZXNpemVPYnNlcnZlckJveE9wdGlvbnNbXCJDT05URU5UX0JPWFwiXSA9IFwiY29udGVudC1ib3hcIjtcbiAgICBSZXNpemVPYnNlcnZlckJveE9wdGlvbnNbXCJERVZJQ0VfUElYRUxfQ09OVEVOVF9CT1hcIl0gPSBcImRldmljZS1waXhlbC1jb250ZW50LWJveFwiO1xufSkoUmVzaXplT2JzZXJ2ZXJCb3hPcHRpb25zIHx8IChSZXNpemVPYnNlcnZlckJveE9wdGlvbnMgPSB7fSkpO1xuZXhwb3J0IHsgUmVzaXplT2JzZXJ2ZXJCb3hPcHRpb25zIH07XG4iLCJleHBvcnQgdmFyIGZyZWV6ZSA9IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIE9iamVjdC5mcmVlemUob2JqKTsgfTtcbiIsImltcG9ydCB7IGZyZWV6ZSB9IGZyb20gJy4vdXRpbHMvZnJlZXplJztcbnZhciBSZXNpemVPYnNlcnZlclNpemUgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFJlc2l6ZU9ic2VydmVyU2l6ZShpbmxpbmVTaXplLCBibG9ja1NpemUpIHtcbiAgICAgICAgdGhpcy5pbmxpbmVTaXplID0gaW5saW5lU2l6ZTtcbiAgICAgICAgdGhpcy5ibG9ja1NpemUgPSBibG9ja1NpemU7XG4gICAgICAgIGZyZWV6ZSh0aGlzKTtcbiAgICB9XG4gICAgcmV0dXJuIFJlc2l6ZU9ic2VydmVyU2l6ZTtcbn0oKSk7XG5leHBvcnQgeyBSZXNpemVPYnNlcnZlclNpemUgfTtcbiIsImltcG9ydCB7IGZyZWV6ZSB9IGZyb20gJy4vdXRpbHMvZnJlZXplJztcbnZhciBET01SZWN0UmVhZE9ubHkgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIERPTVJlY3RSZWFkT25seSh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHRoaXMudG9wID0gdGhpcy55O1xuICAgICAgICB0aGlzLmxlZnQgPSB0aGlzLng7XG4gICAgICAgIHRoaXMuYm90dG9tID0gdGhpcy50b3AgKyB0aGlzLmhlaWdodDtcbiAgICAgICAgdGhpcy5yaWdodCA9IHRoaXMubGVmdCArIHRoaXMud2lkdGg7XG4gICAgICAgIHJldHVybiBmcmVlemUodGhpcyk7XG4gICAgfVxuICAgIERPTVJlY3RSZWFkT25seS5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2EgPSB0aGlzLCB4ID0gX2EueCwgeSA9IF9hLnksIHRvcCA9IF9hLnRvcCwgcmlnaHQgPSBfYS5yaWdodCwgYm90dG9tID0gX2EuYm90dG9tLCBsZWZ0ID0gX2EubGVmdCwgd2lkdGggPSBfYS53aWR0aCwgaGVpZ2h0ID0gX2EuaGVpZ2h0O1xuICAgICAgICByZXR1cm4geyB4OiB4LCB5OiB5LCB0b3A6IHRvcCwgcmlnaHQ6IHJpZ2h0LCBib3R0b206IGJvdHRvbSwgbGVmdDogbGVmdCwgd2lkdGg6IHdpZHRoLCBoZWlnaHQ6IGhlaWdodCB9O1xuICAgIH07XG4gICAgRE9NUmVjdFJlYWRPbmx5LmZyb21SZWN0ID0gZnVuY3Rpb24gKHJlY3RhbmdsZSkge1xuICAgICAgICByZXR1cm4gbmV3IERPTVJlY3RSZWFkT25seShyZWN0YW5nbGUueCwgcmVjdGFuZ2xlLnksIHJlY3RhbmdsZS53aWR0aCwgcmVjdGFuZ2xlLmhlaWdodCk7XG4gICAgfTtcbiAgICByZXR1cm4gRE9NUmVjdFJlYWRPbmx5O1xufSgpKTtcbmV4cG9ydCB7IERPTVJlY3RSZWFkT25seSB9O1xuIiwidmFyIGlzU1ZHID0gZnVuY3Rpb24gKHRhcmdldCkgeyByZXR1cm4gdGFyZ2V0IGluc3RhbmNlb2YgU1ZHRWxlbWVudCAmJiAnZ2V0QkJveCcgaW4gdGFyZ2V0OyB9O1xudmFyIGlzSGlkZGVuID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGlmIChpc1NWRyh0YXJnZXQpKSB7XG4gICAgICAgIHZhciBfYSA9IHRhcmdldC5nZXRCQm94KCksIHdpZHRoID0gX2Eud2lkdGgsIGhlaWdodCA9IF9hLmhlaWdodDtcbiAgICAgICAgcmV0dXJuICF3aWR0aCAmJiAhaGVpZ2h0O1xuICAgIH1cbiAgICB2YXIgX2IgPSB0YXJnZXQsIG9mZnNldFdpZHRoID0gX2Iub2Zmc2V0V2lkdGgsIG9mZnNldEhlaWdodCA9IF9iLm9mZnNldEhlaWdodDtcbiAgICByZXR1cm4gIShvZmZzZXRXaWR0aCB8fCBvZmZzZXRIZWlnaHQgfHwgdGFyZ2V0LmdldENsaWVudFJlY3RzKCkubGVuZ3RoKTtcbn07XG52YXIgaXNFbGVtZW50ID0gZnVuY3Rpb24gKG9iaikge1xuICAgIHZhciBfYSwgX2I7XG4gICAgaWYgKG9iaiBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHZhciBzY29wZSA9IChfYiA9IChfYSA9IG9iaikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLm93bmVyRG9jdW1lbnQpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5kZWZhdWx0VmlldztcbiAgICByZXR1cm4gISEoc2NvcGUgJiYgb2JqIGluc3RhbmNlb2Ygc2NvcGUuRWxlbWVudCk7XG59O1xudmFyIGlzUmVwbGFjZWRFbGVtZW50ID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIHN3aXRjaCAodGFyZ2V0LnRhZ05hbWUpIHtcbiAgICAgICAgY2FzZSAnSU5QVVQnOlxuICAgICAgICAgICAgaWYgKHRhcmdldC50eXBlICE9PSAnaW1hZ2UnKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIGNhc2UgJ1ZJREVPJzpcbiAgICAgICAgY2FzZSAnQVVESU8nOlxuICAgICAgICBjYXNlICdFTUJFRCc6XG4gICAgICAgIGNhc2UgJ09CSkVDVCc6XG4gICAgICAgIGNhc2UgJ0NBTlZBUyc6XG4gICAgICAgIGNhc2UgJ0lGUkFNRSc6XG4gICAgICAgIGNhc2UgJ0lNRyc6XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufTtcbmV4cG9ydCB7IGlzU1ZHLCBpc0hpZGRlbiwgaXNFbGVtZW50LCBpc1JlcGxhY2VkRWxlbWVudCB9O1xuIiwiZXhwb3J0IHZhciBnbG9iYWwgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHt9O1xuIiwiaW1wb3J0IHsgUmVzaXplT2JzZXJ2ZXJCb3hPcHRpb25zIH0gZnJvbSAnLi4vUmVzaXplT2JzZXJ2ZXJCb3hPcHRpb25zJztcbmltcG9ydCB7IFJlc2l6ZU9ic2VydmVyU2l6ZSB9IGZyb20gJy4uL1Jlc2l6ZU9ic2VydmVyU2l6ZSc7XG5pbXBvcnQgeyBET01SZWN0UmVhZE9ubHkgfSBmcm9tICcuLi9ET01SZWN0UmVhZE9ubHknO1xuaW1wb3J0IHsgaXNTVkcsIGlzSGlkZGVuIH0gZnJvbSAnLi4vdXRpbHMvZWxlbWVudCc7XG5pbXBvcnQgeyBmcmVlemUgfSBmcm9tICcuLi91dGlscy9mcmVlemUnO1xuaW1wb3J0IHsgZ2xvYmFsIH0gZnJvbSAnLi4vdXRpbHMvZ2xvYmFsJztcbnZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG52YXIgc2Nyb2xsUmVnZXhwID0gL2F1dG98c2Nyb2xsLztcbnZhciB2ZXJ0aWNhbFJlZ2V4cCA9IC9edGJ8dmVydGljYWwvO1xudmFyIElFID0gKC9tc2llfHRyaWRlbnQvaSkudGVzdChnbG9iYWwubmF2aWdhdG9yICYmIGdsb2JhbC5uYXZpZ2F0b3IudXNlckFnZW50KTtcbnZhciBwYXJzZURpbWVuc2lvbiA9IGZ1bmN0aW9uIChwaXhlbCkgeyByZXR1cm4gcGFyc2VGbG9hdChwaXhlbCB8fCAnMCcpOyB9O1xudmFyIHNpemUgPSBmdW5jdGlvbiAoaW5saW5lU2l6ZSwgYmxvY2tTaXplLCBzd2l0Y2hTaXplcykge1xuICAgIGlmIChpbmxpbmVTaXplID09PSB2b2lkIDApIHsgaW5saW5lU2l6ZSA9IDA7IH1cbiAgICBpZiAoYmxvY2tTaXplID09PSB2b2lkIDApIHsgYmxvY2tTaXplID0gMDsgfVxuICAgIGlmIChzd2l0Y2hTaXplcyA9PT0gdm9pZCAwKSB7IHN3aXRjaFNpemVzID0gZmFsc2U7IH1cbiAgICByZXR1cm4gbmV3IFJlc2l6ZU9ic2VydmVyU2l6ZSgoc3dpdGNoU2l6ZXMgPyBibG9ja1NpemUgOiBpbmxpbmVTaXplKSB8fCAwLCAoc3dpdGNoU2l6ZXMgPyBpbmxpbmVTaXplIDogYmxvY2tTaXplKSB8fCAwKTtcbn07XG52YXIgemVyb0JveGVzID0gZnJlZXplKHtcbiAgICBkZXZpY2VQaXhlbENvbnRlbnRCb3hTaXplOiBzaXplKCksXG4gICAgYm9yZGVyQm94U2l6ZTogc2l6ZSgpLFxuICAgIGNvbnRlbnRCb3hTaXplOiBzaXplKCksXG4gICAgY29udGVudFJlY3Q6IG5ldyBET01SZWN0UmVhZE9ubHkoMCwgMCwgMCwgMClcbn0pO1xudmFyIGNhbGN1bGF0ZUJveFNpemVzID0gZnVuY3Rpb24gKHRhcmdldCwgZm9yY2VSZWNhbGN1bGF0aW9uKSB7XG4gICAgaWYgKGZvcmNlUmVjYWxjdWxhdGlvbiA9PT0gdm9pZCAwKSB7IGZvcmNlUmVjYWxjdWxhdGlvbiA9IGZhbHNlOyB9XG4gICAgaWYgKGNhY2hlLmhhcyh0YXJnZXQpICYmICFmb3JjZVJlY2FsY3VsYXRpb24pIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlLmdldCh0YXJnZXQpO1xuICAgIH1cbiAgICBpZiAoaXNIaWRkZW4odGFyZ2V0KSkge1xuICAgICAgICBjYWNoZS5zZXQodGFyZ2V0LCB6ZXJvQm94ZXMpO1xuICAgICAgICByZXR1cm4gemVyb0JveGVzO1xuICAgIH1cbiAgICB2YXIgY3MgPSBnZXRDb21wdXRlZFN0eWxlKHRhcmdldCk7XG4gICAgdmFyIHN2ZyA9IGlzU1ZHKHRhcmdldCkgJiYgdGFyZ2V0Lm93bmVyU1ZHRWxlbWVudCAmJiB0YXJnZXQuZ2V0QkJveCgpO1xuICAgIHZhciByZW1vdmVQYWRkaW5nID0gIUlFICYmIGNzLmJveFNpemluZyA9PT0gJ2JvcmRlci1ib3gnO1xuICAgIHZhciBzd2l0Y2hTaXplcyA9IHZlcnRpY2FsUmVnZXhwLnRlc3QoY3Mud3JpdGluZ01vZGUgfHwgJycpO1xuICAgIHZhciBjYW5TY3JvbGxWZXJ0aWNhbGx5ID0gIXN2ZyAmJiBzY3JvbGxSZWdleHAudGVzdChjcy5vdmVyZmxvd1kgfHwgJycpO1xuICAgIHZhciBjYW5TY3JvbGxIb3Jpem9udGFsbHkgPSAhc3ZnICYmIHNjcm9sbFJlZ2V4cC50ZXN0KGNzLm92ZXJmbG93WCB8fCAnJyk7XG4gICAgdmFyIHBhZGRpbmdUb3AgPSBzdmcgPyAwIDogcGFyc2VEaW1lbnNpb24oY3MucGFkZGluZ1RvcCk7XG4gICAgdmFyIHBhZGRpbmdSaWdodCA9IHN2ZyA/IDAgOiBwYXJzZURpbWVuc2lvbihjcy5wYWRkaW5nUmlnaHQpO1xuICAgIHZhciBwYWRkaW5nQm90dG9tID0gc3ZnID8gMCA6IHBhcnNlRGltZW5zaW9uKGNzLnBhZGRpbmdCb3R0b20pO1xuICAgIHZhciBwYWRkaW5nTGVmdCA9IHN2ZyA/IDAgOiBwYXJzZURpbWVuc2lvbihjcy5wYWRkaW5nTGVmdCk7XG4gICAgdmFyIGJvcmRlclRvcCA9IHN2ZyA/IDAgOiBwYXJzZURpbWVuc2lvbihjcy5ib3JkZXJUb3BXaWR0aCk7XG4gICAgdmFyIGJvcmRlclJpZ2h0ID0gc3ZnID8gMCA6IHBhcnNlRGltZW5zaW9uKGNzLmJvcmRlclJpZ2h0V2lkdGgpO1xuICAgIHZhciBib3JkZXJCb3R0b20gPSBzdmcgPyAwIDogcGFyc2VEaW1lbnNpb24oY3MuYm9yZGVyQm90dG9tV2lkdGgpO1xuICAgIHZhciBib3JkZXJMZWZ0ID0gc3ZnID8gMCA6IHBhcnNlRGltZW5zaW9uKGNzLmJvcmRlckxlZnRXaWR0aCk7XG4gICAgdmFyIGhvcml6b250YWxQYWRkaW5nID0gcGFkZGluZ0xlZnQgKyBwYWRkaW5nUmlnaHQ7XG4gICAgdmFyIHZlcnRpY2FsUGFkZGluZyA9IHBhZGRpbmdUb3AgKyBwYWRkaW5nQm90dG9tO1xuICAgIHZhciBob3Jpem9udGFsQm9yZGVyQXJlYSA9IGJvcmRlckxlZnQgKyBib3JkZXJSaWdodDtcbiAgICB2YXIgdmVydGljYWxCb3JkZXJBcmVhID0gYm9yZGVyVG9wICsgYm9yZGVyQm90dG9tO1xuICAgIHZhciBob3Jpem9udGFsU2Nyb2xsYmFyVGhpY2tuZXNzID0gIWNhblNjcm9sbEhvcml6b250YWxseSA/IDAgOiB0YXJnZXQub2Zmc2V0SGVpZ2h0IC0gdmVydGljYWxCb3JkZXJBcmVhIC0gdGFyZ2V0LmNsaWVudEhlaWdodDtcbiAgICB2YXIgdmVydGljYWxTY3JvbGxiYXJUaGlja25lc3MgPSAhY2FuU2Nyb2xsVmVydGljYWxseSA/IDAgOiB0YXJnZXQub2Zmc2V0V2lkdGggLSBob3Jpem9udGFsQm9yZGVyQXJlYSAtIHRhcmdldC5jbGllbnRXaWR0aDtcbiAgICB2YXIgd2lkdGhSZWR1Y3Rpb24gPSByZW1vdmVQYWRkaW5nID8gaG9yaXpvbnRhbFBhZGRpbmcgKyBob3Jpem9udGFsQm9yZGVyQXJlYSA6IDA7XG4gICAgdmFyIGhlaWdodFJlZHVjdGlvbiA9IHJlbW92ZVBhZGRpbmcgPyB2ZXJ0aWNhbFBhZGRpbmcgKyB2ZXJ0aWNhbEJvcmRlckFyZWEgOiAwO1xuICAgIHZhciBjb250ZW50V2lkdGggPSBzdmcgPyBzdmcud2lkdGggOiBwYXJzZURpbWVuc2lvbihjcy53aWR0aCkgLSB3aWR0aFJlZHVjdGlvbiAtIHZlcnRpY2FsU2Nyb2xsYmFyVGhpY2tuZXNzO1xuICAgIHZhciBjb250ZW50SGVpZ2h0ID0gc3ZnID8gc3ZnLmhlaWdodCA6IHBhcnNlRGltZW5zaW9uKGNzLmhlaWdodCkgLSBoZWlnaHRSZWR1Y3Rpb24gLSBob3Jpem9udGFsU2Nyb2xsYmFyVGhpY2tuZXNzO1xuICAgIHZhciBib3JkZXJCb3hXaWR0aCA9IGNvbnRlbnRXaWR0aCArIGhvcml6b250YWxQYWRkaW5nICsgdmVydGljYWxTY3JvbGxiYXJUaGlja25lc3MgKyBob3Jpem9udGFsQm9yZGVyQXJlYTtcbiAgICB2YXIgYm9yZGVyQm94SGVpZ2h0ID0gY29udGVudEhlaWdodCArIHZlcnRpY2FsUGFkZGluZyArIGhvcml6b250YWxTY3JvbGxiYXJUaGlja25lc3MgKyB2ZXJ0aWNhbEJvcmRlckFyZWE7XG4gICAgdmFyIGJveGVzID0gZnJlZXplKHtcbiAgICAgICAgZGV2aWNlUGl4ZWxDb250ZW50Qm94U2l6ZTogc2l6ZShNYXRoLnJvdW5kKGNvbnRlbnRXaWR0aCAqIGRldmljZVBpeGVsUmF0aW8pLCBNYXRoLnJvdW5kKGNvbnRlbnRIZWlnaHQgKiBkZXZpY2VQaXhlbFJhdGlvKSwgc3dpdGNoU2l6ZXMpLFxuICAgICAgICBib3JkZXJCb3hTaXplOiBzaXplKGJvcmRlckJveFdpZHRoLCBib3JkZXJCb3hIZWlnaHQsIHN3aXRjaFNpemVzKSxcbiAgICAgICAgY29udGVudEJveFNpemU6IHNpemUoY29udGVudFdpZHRoLCBjb250ZW50SGVpZ2h0LCBzd2l0Y2hTaXplcyksXG4gICAgICAgIGNvbnRlbnRSZWN0OiBuZXcgRE9NUmVjdFJlYWRPbmx5KHBhZGRpbmdMZWZ0LCBwYWRkaW5nVG9wLCBjb250ZW50V2lkdGgsIGNvbnRlbnRIZWlnaHQpXG4gICAgfSk7XG4gICAgY2FjaGUuc2V0KHRhcmdldCwgYm94ZXMpO1xuICAgIHJldHVybiBib3hlcztcbn07XG52YXIgY2FsY3VsYXRlQm94U2l6ZSA9IGZ1bmN0aW9uICh0YXJnZXQsIG9ic2VydmVkQm94LCBmb3JjZVJlY2FsY3VsYXRpb24pIHtcbiAgICB2YXIgX2EgPSBjYWxjdWxhdGVCb3hTaXplcyh0YXJnZXQsIGZvcmNlUmVjYWxjdWxhdGlvbiksIGJvcmRlckJveFNpemUgPSBfYS5ib3JkZXJCb3hTaXplLCBjb250ZW50Qm94U2l6ZSA9IF9hLmNvbnRlbnRCb3hTaXplLCBkZXZpY2VQaXhlbENvbnRlbnRCb3hTaXplID0gX2EuZGV2aWNlUGl4ZWxDb250ZW50Qm94U2l6ZTtcbiAgICBzd2l0Y2ggKG9ic2VydmVkQm94KSB7XG4gICAgICAgIGNhc2UgUmVzaXplT2JzZXJ2ZXJCb3hPcHRpb25zLkRFVklDRV9QSVhFTF9DT05URU5UX0JPWDpcbiAgICAgICAgICAgIHJldHVybiBkZXZpY2VQaXhlbENvbnRlbnRCb3hTaXplO1xuICAgICAgICBjYXNlIFJlc2l6ZU9ic2VydmVyQm94T3B0aW9ucy5CT1JERVJfQk9YOlxuICAgICAgICAgICAgcmV0dXJuIGJvcmRlckJveFNpemU7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gY29udGVudEJveFNpemU7XG4gICAgfVxufTtcbmV4cG9ydCB7IGNhbGN1bGF0ZUJveFNpemUsIGNhbGN1bGF0ZUJveFNpemVzIH07XG4iLCJpbXBvcnQgeyBjYWxjdWxhdGVCb3hTaXplcyB9IGZyb20gJy4vYWxnb3JpdGhtcy9jYWxjdWxhdGVCb3hTaXplJztcbmltcG9ydCB7IGZyZWV6ZSB9IGZyb20gJy4vdXRpbHMvZnJlZXplJztcbnZhciBSZXNpemVPYnNlcnZlckVudHJ5ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBSZXNpemVPYnNlcnZlckVudHJ5KHRhcmdldCkge1xuICAgICAgICB2YXIgYm94ZXMgPSBjYWxjdWxhdGVCb3hTaXplcyh0YXJnZXQpO1xuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgICAgICAgdGhpcy5jb250ZW50UmVjdCA9IGJveGVzLmNvbnRlbnRSZWN0O1xuICAgICAgICB0aGlzLmJvcmRlckJveFNpemUgPSBmcmVlemUoW2JveGVzLmJvcmRlckJveFNpemVdKTtcbiAgICAgICAgdGhpcy5jb250ZW50Qm94U2l6ZSA9IGZyZWV6ZShbYm94ZXMuY29udGVudEJveFNpemVdKTtcbiAgICAgICAgdGhpcy5kZXZpY2VQaXhlbENvbnRlbnRCb3hTaXplID0gZnJlZXplKFtib3hlcy5kZXZpY2VQaXhlbENvbnRlbnRCb3hTaXplXSk7XG4gICAgfVxuICAgIHJldHVybiBSZXNpemVPYnNlcnZlckVudHJ5O1xufSgpKTtcbmV4cG9ydCB7IFJlc2l6ZU9ic2VydmVyRW50cnkgfTtcbiIsImltcG9ydCB7IGlzSGlkZGVuIH0gZnJvbSAnLi4vdXRpbHMvZWxlbWVudCc7XG52YXIgY2FsY3VsYXRlRGVwdGhGb3JOb2RlID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICBpZiAoaXNIaWRkZW4obm9kZSkpIHtcbiAgICAgICAgcmV0dXJuIEluZmluaXR5O1xuICAgIH1cbiAgICB2YXIgZGVwdGggPSAwO1xuICAgIHZhciBwYXJlbnQgPSBub2RlLnBhcmVudE5vZGU7XG4gICAgd2hpbGUgKHBhcmVudCkge1xuICAgICAgICBkZXB0aCArPSAxO1xuICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50Tm9kZTtcbiAgICB9XG4gICAgcmV0dXJuIGRlcHRoO1xufTtcbmV4cG9ydCB7IGNhbGN1bGF0ZURlcHRoRm9yTm9kZSB9O1xuIiwiaW1wb3J0IHsgcmVzaXplT2JzZXJ2ZXJzIH0gZnJvbSAnLi4vdXRpbHMvcmVzaXplT2JzZXJ2ZXJzJztcbmltcG9ydCB7IFJlc2l6ZU9ic2VydmVyRW50cnkgfSBmcm9tICcuLi9SZXNpemVPYnNlcnZlckVudHJ5JztcbmltcG9ydCB7IGNhbGN1bGF0ZURlcHRoRm9yTm9kZSB9IGZyb20gJy4vY2FsY3VsYXRlRGVwdGhGb3JOb2RlJztcbmltcG9ydCB7IGNhbGN1bGF0ZUJveFNpemUgfSBmcm9tICcuL2NhbGN1bGF0ZUJveFNpemUnO1xudmFyIGJyb2FkY2FzdEFjdGl2ZU9ic2VydmF0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2hhbGxvd2VzdERlcHRoID0gSW5maW5pdHk7XG4gICAgdmFyIGNhbGxiYWNrcyA9IFtdO1xuICAgIHJlc2l6ZU9ic2VydmVycy5mb3JFYWNoKGZ1bmN0aW9uIHByb2Nlc3NPYnNlcnZlcihybykge1xuICAgICAgICBpZiAocm8uYWN0aXZlVGFyZ2V0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZW50cmllcyA9IFtdO1xuICAgICAgICByby5hY3RpdmVUYXJnZXRzLmZvckVhY2goZnVuY3Rpb24gcHJvY2Vzc1RhcmdldChvdCkge1xuICAgICAgICAgICAgdmFyIGVudHJ5ID0gbmV3IFJlc2l6ZU9ic2VydmVyRW50cnkob3QudGFyZ2V0KTtcbiAgICAgICAgICAgIHZhciB0YXJnZXREZXB0aCA9IGNhbGN1bGF0ZURlcHRoRm9yTm9kZShvdC50YXJnZXQpO1xuICAgICAgICAgICAgZW50cmllcy5wdXNoKGVudHJ5KTtcbiAgICAgICAgICAgIG90Lmxhc3RSZXBvcnRlZFNpemUgPSBjYWxjdWxhdGVCb3hTaXplKG90LnRhcmdldCwgb3Qub2JzZXJ2ZWRCb3gpO1xuICAgICAgICAgICAgaWYgKHRhcmdldERlcHRoIDwgc2hhbGxvd2VzdERlcHRoKSB7XG4gICAgICAgICAgICAgICAgc2hhbGxvd2VzdERlcHRoID0gdGFyZ2V0RGVwdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBjYWxsYmFja3MucHVzaChmdW5jdGlvbiByZXNpemVPYnNlcnZlckNhbGxiYWNrKCkge1xuICAgICAgICAgICAgcm8uY2FsbGJhY2suY2FsbChyby5vYnNlcnZlciwgZW50cmllcywgcm8ub2JzZXJ2ZXIpO1xuICAgICAgICB9KTtcbiAgICAgICAgcm8uYWN0aXZlVGFyZ2V0cy5zcGxpY2UoMCwgcm8uYWN0aXZlVGFyZ2V0cy5sZW5ndGgpO1xuICAgIH0pO1xuICAgIGZvciAodmFyIF9pID0gMCwgY2FsbGJhY2tzXzEgPSBjYWxsYmFja3M7IF9pIDwgY2FsbGJhY2tzXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IGNhbGxiYWNrc18xW19pXTtcbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICB9XG4gICAgcmV0dXJuIHNoYWxsb3dlc3REZXB0aDtcbn07XG5leHBvcnQgeyBicm9hZGNhc3RBY3RpdmVPYnNlcnZhdGlvbnMgfTtcbiIsImltcG9ydCB7IHJlc2l6ZU9ic2VydmVycyB9IGZyb20gJy4uL3V0aWxzL3Jlc2l6ZU9ic2VydmVycyc7XG5pbXBvcnQgeyBjYWxjdWxhdGVEZXB0aEZvck5vZGUgfSBmcm9tICcuL2NhbGN1bGF0ZURlcHRoRm9yTm9kZSc7XG52YXIgZ2F0aGVyQWN0aXZlT2JzZXJ2YXRpb25zQXREZXB0aCA9IGZ1bmN0aW9uIChkZXB0aCkge1xuICAgIHJlc2l6ZU9ic2VydmVycy5mb3JFYWNoKGZ1bmN0aW9uIHByb2Nlc3NPYnNlcnZlcihybykge1xuICAgICAgICByby5hY3RpdmVUYXJnZXRzLnNwbGljZSgwLCByby5hY3RpdmVUYXJnZXRzLmxlbmd0aCk7XG4gICAgICAgIHJvLnNraXBwZWRUYXJnZXRzLnNwbGljZSgwLCByby5za2lwcGVkVGFyZ2V0cy5sZW5ndGgpO1xuICAgICAgICByby5vYnNlcnZhdGlvblRhcmdldHMuZm9yRWFjaChmdW5jdGlvbiBwcm9jZXNzVGFyZ2V0KG90KSB7XG4gICAgICAgICAgICBpZiAob3QuaXNBY3RpdmUoKSkge1xuICAgICAgICAgICAgICAgIGlmIChjYWxjdWxhdGVEZXB0aEZvck5vZGUob3QudGFyZ2V0KSA+IGRlcHRoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJvLmFjdGl2ZVRhcmdldHMucHVzaChvdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByby5za2lwcGVkVGFyZ2V0cy5wdXNoKG90KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufTtcbmV4cG9ydCB7IGdhdGhlckFjdGl2ZU9ic2VydmF0aW9uc0F0RGVwdGggfTtcbiIsImltcG9ydCB7IGhhc0FjdGl2ZU9ic2VydmF0aW9ucyB9IGZyb20gJy4uL2FsZ29yaXRobXMvaGFzQWN0aXZlT2JzZXJ2YXRpb25zJztcbmltcG9ydCB7IGhhc1NraXBwZWRPYnNlcnZhdGlvbnMgfSBmcm9tICcuLi9hbGdvcml0aG1zL2hhc1NraXBwZWRPYnNlcnZhdGlvbnMnO1xuaW1wb3J0IHsgZGVsaXZlclJlc2l6ZUxvb3BFcnJvciB9IGZyb20gJy4uL2FsZ29yaXRobXMvZGVsaXZlclJlc2l6ZUxvb3BFcnJvcic7XG5pbXBvcnQgeyBicm9hZGNhc3RBY3RpdmVPYnNlcnZhdGlvbnMgfSBmcm9tICcuLi9hbGdvcml0aG1zL2Jyb2FkY2FzdEFjdGl2ZU9ic2VydmF0aW9ucyc7XG5pbXBvcnQgeyBnYXRoZXJBY3RpdmVPYnNlcnZhdGlvbnNBdERlcHRoIH0gZnJvbSAnLi4vYWxnb3JpdGhtcy9nYXRoZXJBY3RpdmVPYnNlcnZhdGlvbnNBdERlcHRoJztcbnZhciBwcm9jZXNzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBkZXB0aCA9IDA7XG4gICAgZ2F0aGVyQWN0aXZlT2JzZXJ2YXRpb25zQXREZXB0aChkZXB0aCk7XG4gICAgd2hpbGUgKGhhc0FjdGl2ZU9ic2VydmF0aW9ucygpKSB7XG4gICAgICAgIGRlcHRoID0gYnJvYWRjYXN0QWN0aXZlT2JzZXJ2YXRpb25zKCk7XG4gICAgICAgIGdhdGhlckFjdGl2ZU9ic2VydmF0aW9uc0F0RGVwdGgoZGVwdGgpO1xuICAgIH1cbiAgICBpZiAoaGFzU2tpcHBlZE9ic2VydmF0aW9ucygpKSB7XG4gICAgICAgIGRlbGl2ZXJSZXNpemVMb29wRXJyb3IoKTtcbiAgICB9XG4gICAgcmV0dXJuIGRlcHRoID4gMDtcbn07XG5leHBvcnQgeyBwcm9jZXNzIH07XG4iLCJ2YXIgdHJpZ2dlcjtcbnZhciBjYWxsYmFja3MgPSBbXTtcbnZhciBub3RpZnkgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBjYWxsYmFja3Muc3BsaWNlKDApLmZvckVhY2goZnVuY3Rpb24gKGNiKSB7IHJldHVybiBjYigpOyB9KTsgfTtcbnZhciBxdWV1ZU1pY3JvVGFzayA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgIGlmICghdHJpZ2dlcikge1xuICAgICAgICB2YXIgdG9nZ2xlXzEgPSAwO1xuICAgICAgICB2YXIgZWxfMSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICAgICAgdmFyIGNvbmZpZyA9IHsgY2hhcmFjdGVyRGF0YTogdHJ1ZSB9O1xuICAgICAgICBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAoKSB7IHJldHVybiBub3RpZnkoKTsgfSkub2JzZXJ2ZShlbF8xLCBjb25maWcpO1xuICAgICAgICB0cmlnZ2VyID0gZnVuY3Rpb24gKCkgeyBlbF8xLnRleHRDb250ZW50ID0gXCJcIiArICh0b2dnbGVfMSA/IHRvZ2dsZV8xLS0gOiB0b2dnbGVfMSsrKTsgfTtcbiAgICB9XG4gICAgY2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuICAgIHRyaWdnZXIoKTtcbn07XG5leHBvcnQgeyBxdWV1ZU1pY3JvVGFzayB9O1xuIiwiaW1wb3J0IHsgcXVldWVNaWNyb1Rhc2sgfSBmcm9tICcuL3F1ZXVlTWljcm9UYXNrJztcbnZhciBxdWV1ZVJlc2l6ZU9ic2VydmVyID0gZnVuY3Rpb24gKGNiKSB7XG4gICAgcXVldWVNaWNyb1Rhc2soZnVuY3Rpb24gUmVzaXplT2JzZXJ2ZXIoKSB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShjYik7XG4gICAgfSk7XG59O1xuZXhwb3J0IHsgcXVldWVSZXNpemVPYnNlcnZlciB9O1xuIiwiaW1wb3J0IHsgcHJvY2VzcyB9IGZyb20gJy4vcHJvY2Vzcyc7XG5pbXBvcnQgeyBnbG9iYWwgfSBmcm9tICcuL2dsb2JhbCc7XG5pbXBvcnQgeyBxdWV1ZVJlc2l6ZU9ic2VydmVyIH0gZnJvbSAnLi9xdWV1ZVJlc2l6ZU9ic2VydmVyJztcbnZhciB3YXRjaGluZyA9IDA7XG52YXIgaXNXYXRjaGluZyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICEhd2F0Y2hpbmc7IH07XG52YXIgQ0FUQ0hfUEVSSU9EID0gMjUwO1xudmFyIG9ic2VydmVyQ29uZmlnID0geyBhdHRyaWJ1dGVzOiB0cnVlLCBjaGFyYWN0ZXJEYXRhOiB0cnVlLCBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfTtcbnZhciBldmVudHMgPSBbXG4gICAgJ3Jlc2l6ZScsXG4gICAgJ2xvYWQnLFxuICAgICd0cmFuc2l0aW9uZW5kJyxcbiAgICAnYW5pbWF0aW9uZW5kJyxcbiAgICAnYW5pbWF0aW9uc3RhcnQnLFxuICAgICdhbmltYXRpb25pdGVyYXRpb24nLFxuICAgICdrZXl1cCcsXG4gICAgJ2tleWRvd24nLFxuICAgICdtb3VzZXVwJyxcbiAgICAnbW91c2Vkb3duJyxcbiAgICAnbW91c2VvdmVyJyxcbiAgICAnbW91c2VvdXQnLFxuICAgICdibHVyJyxcbiAgICAnZm9jdXMnXG5dO1xudmFyIHRpbWUgPSBmdW5jdGlvbiAodGltZW91dCkge1xuICAgIGlmICh0aW1lb3V0ID09PSB2b2lkIDApIHsgdGltZW91dCA9IDA7IH1cbiAgICByZXR1cm4gRGF0ZS5ub3coKSArIHRpbWVvdXQ7XG59O1xudmFyIHNjaGVkdWxlZCA9IGZhbHNlO1xudmFyIFNjaGVkdWxlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2NoZWR1bGVyKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLnN0b3BwZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmxpc3RlbmVyID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuc2NoZWR1bGUoKTsgfTtcbiAgICB9XG4gICAgU2NoZWR1bGVyLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAodGltZW91dCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAodGltZW91dCA9PT0gdm9pZCAwKSB7IHRpbWVvdXQgPSBDQVRDSF9QRVJJT0Q7IH1cbiAgICAgICAgaWYgKHNjaGVkdWxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHNjaGVkdWxlZCA9IHRydWU7XG4gICAgICAgIHZhciB1bnRpbCA9IHRpbWUodGltZW91dCk7XG4gICAgICAgIHF1ZXVlUmVzaXplT2JzZXJ2ZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGVsZW1lbnRzSGF2ZVJlc2l6ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudHNIYXZlUmVzaXplZCA9IHByb2Nlc3MoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIHNjaGVkdWxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRpbWVvdXQgPSB1bnRpbCAtIHRpbWUoKTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzV2F0Y2hpbmcoKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50c0hhdmVSZXNpemVkKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnJ1bigxMDAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGltZW91dCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMucnVuKHRpbWVvdXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgU2NoZWR1bGVyLnByb3RvdHlwZS5zY2hlZHVsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgIHRoaXMucnVuKCk7XG4gICAgfTtcbiAgICBTY2hlZHVsZXIucHJvdG90eXBlLm9ic2VydmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBjYiA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLm9ic2VydmVyICYmIF90aGlzLm9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuYm9keSwgb2JzZXJ2ZXJDb25maWcpOyB9O1xuICAgICAgICBkb2N1bWVudC5ib2R5ID8gY2IoKSA6IGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgY2IpO1xuICAgIH07XG4gICAgU2NoZWR1bGVyLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuc3RvcHBlZCkge1xuICAgICAgICAgICAgdGhpcy5zdG9wcGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLm9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIodGhpcy5saXN0ZW5lcik7XG4gICAgICAgICAgICB0aGlzLm9ic2VydmUoKTtcbiAgICAgICAgICAgIGV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcihuYW1lLCBfdGhpcy5saXN0ZW5lciwgdHJ1ZSk7IH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTY2hlZHVsZXIucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICghdGhpcy5zdG9wcGVkKSB7XG4gICAgICAgICAgICB0aGlzLm9ic2VydmVyICYmIHRoaXMub2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIGdsb2JhbC5yZW1vdmVFdmVudExpc3RlbmVyKG5hbWUsIF90aGlzLmxpc3RlbmVyLCB0cnVlKTsgfSk7XG4gICAgICAgICAgICB0aGlzLnN0b3BwZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gU2NoZWR1bGVyO1xufSgpKTtcbnZhciBzY2hlZHVsZXIgPSBuZXcgU2NoZWR1bGVyKCk7XG52YXIgdXBkYXRlQ291bnQgPSBmdW5jdGlvbiAobikge1xuICAgICF3YXRjaGluZyAmJiBuID4gMCAmJiBzY2hlZHVsZXIuc3RhcnQoKTtcbiAgICB3YXRjaGluZyArPSBuO1xuICAgICF3YXRjaGluZyAmJiBzY2hlZHVsZXIuc3RvcCgpO1xufTtcbmV4cG9ydCB7IHNjaGVkdWxlciwgdXBkYXRlQ291bnQgfTtcbiIsImltcG9ydCB7IFJlc2l6ZU9ic2VydmVyQm94T3B0aW9ucyB9IGZyb20gJy4vUmVzaXplT2JzZXJ2ZXJCb3hPcHRpb25zJztcbmltcG9ydCB7IGNhbGN1bGF0ZUJveFNpemUgfSBmcm9tICcuL2FsZ29yaXRobXMvY2FsY3VsYXRlQm94U2l6ZSc7XG5pbXBvcnQgeyBpc1NWRywgaXNSZXBsYWNlZEVsZW1lbnQgfSBmcm9tICcuL3V0aWxzL2VsZW1lbnQnO1xudmFyIHNraXBOb3RpZnlPbkVsZW1lbnQgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgcmV0dXJuICFpc1NWRyh0YXJnZXQpXG4gICAgICAgICYmICFpc1JlcGxhY2VkRWxlbWVudCh0YXJnZXQpXG4gICAgICAgICYmIGdldENvbXB1dGVkU3R5bGUodGFyZ2V0KS5kaXNwbGF5ID09PSAnaW5saW5lJztcbn07XG52YXIgUmVzaXplT2JzZXJ2YXRpb24gPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFJlc2l6ZU9ic2VydmF0aW9uKHRhcmdldCwgb2JzZXJ2ZWRCb3gpIHtcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgIHRoaXMub2JzZXJ2ZWRCb3ggPSBvYnNlcnZlZEJveCB8fCBSZXNpemVPYnNlcnZlckJveE9wdGlvbnMuQ09OVEVOVF9CT1g7XG4gICAgICAgIHRoaXMubGFzdFJlcG9ydGVkU2l6ZSA9IHtcbiAgICAgICAgICAgIGlubGluZVNpemU6IDAsXG4gICAgICAgICAgICBibG9ja1NpemU6IDBcbiAgICAgICAgfTtcbiAgICB9XG4gICAgUmVzaXplT2JzZXJ2YXRpb24ucHJvdG90eXBlLmlzQWN0aXZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc2l6ZSA9IGNhbGN1bGF0ZUJveFNpemUodGhpcy50YXJnZXQsIHRoaXMub2JzZXJ2ZWRCb3gsIHRydWUpO1xuICAgICAgICBpZiAoc2tpcE5vdGlmeU9uRWxlbWVudCh0aGlzLnRhcmdldCkpIHtcbiAgICAgICAgICAgIHRoaXMubGFzdFJlcG9ydGVkU2l6ZSA9IHNpemU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubGFzdFJlcG9ydGVkU2l6ZS5pbmxpbmVTaXplICE9PSBzaXplLmlubGluZVNpemVcbiAgICAgICAgICAgIHx8IHRoaXMubGFzdFJlcG9ydGVkU2l6ZS5ibG9ja1NpemUgIT09IHNpemUuYmxvY2tTaXplKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICByZXR1cm4gUmVzaXplT2JzZXJ2YXRpb247XG59KCkpO1xuZXhwb3J0IHsgUmVzaXplT2JzZXJ2YXRpb24gfTtcbiIsInZhciBSZXNpemVPYnNlcnZlckRldGFpbCA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUmVzaXplT2JzZXJ2ZXJEZXRhaWwocmVzaXplT2JzZXJ2ZXIsIGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlVGFyZ2V0cyA9IFtdO1xuICAgICAgICB0aGlzLnNraXBwZWRUYXJnZXRzID0gW107XG4gICAgICAgIHRoaXMub2JzZXJ2YXRpb25UYXJnZXRzID0gW107XG4gICAgICAgIHRoaXMub2JzZXJ2ZXIgPSByZXNpemVPYnNlcnZlcjtcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIH1cbiAgICByZXR1cm4gUmVzaXplT2JzZXJ2ZXJEZXRhaWw7XG59KCkpO1xuZXhwb3J0IHsgUmVzaXplT2JzZXJ2ZXJEZXRhaWwgfTtcbiIsImltcG9ydCB7IHNjaGVkdWxlciwgdXBkYXRlQ291bnQgfSBmcm9tICcuL3V0aWxzL3NjaGVkdWxlcic7XG5pbXBvcnQgeyBSZXNpemVPYnNlcnZhdGlvbiB9IGZyb20gJy4vUmVzaXplT2JzZXJ2YXRpb24nO1xuaW1wb3J0IHsgUmVzaXplT2JzZXJ2ZXJEZXRhaWwgfSBmcm9tICcuL1Jlc2l6ZU9ic2VydmVyRGV0YWlsJztcbmltcG9ydCB7IHJlc2l6ZU9ic2VydmVycyB9IGZyb20gJy4vdXRpbHMvcmVzaXplT2JzZXJ2ZXJzJztcbnZhciBvYnNlcnZlck1hcCA9IG5ldyBXZWFrTWFwKCk7XG52YXIgZ2V0T2JzZXJ2YXRpb25JbmRleCA9IGZ1bmN0aW9uIChvYnNlcnZhdGlvblRhcmdldHMsIHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JzZXJ2YXRpb25UYXJnZXRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChvYnNlcnZhdGlvblRhcmdldHNbaV0udGFyZ2V0ID09PSB0YXJnZXQpIHtcbiAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAtMTtcbn07XG52YXIgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIoKSB7XG4gICAgfVxuICAgIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5jb25uZWN0ID0gZnVuY3Rpb24gKHJlc2l6ZU9ic2VydmVyLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgZGV0YWlsID0gbmV3IFJlc2l6ZU9ic2VydmVyRGV0YWlsKHJlc2l6ZU9ic2VydmVyLCBjYWxsYmFjayk7XG4gICAgICAgIG9ic2VydmVyTWFwLnNldChyZXNpemVPYnNlcnZlciwgZGV0YWlsKTtcbiAgICB9O1xuICAgIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5vYnNlcnZlID0gZnVuY3Rpb24gKHJlc2l6ZU9ic2VydmVyLCB0YXJnZXQsIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIGRldGFpbCA9IG9ic2VydmVyTWFwLmdldChyZXNpemVPYnNlcnZlcik7XG4gICAgICAgIHZhciBmaXJzdE9ic2VydmF0aW9uID0gZGV0YWlsLm9ic2VydmF0aW9uVGFyZ2V0cy5sZW5ndGggPT09IDA7XG4gICAgICAgIGlmIChnZXRPYnNlcnZhdGlvbkluZGV4KGRldGFpbC5vYnNlcnZhdGlvblRhcmdldHMsIHRhcmdldCkgPCAwKSB7XG4gICAgICAgICAgICBmaXJzdE9ic2VydmF0aW9uICYmIHJlc2l6ZU9ic2VydmVycy5wdXNoKGRldGFpbCk7XG4gICAgICAgICAgICBkZXRhaWwub2JzZXJ2YXRpb25UYXJnZXRzLnB1c2gobmV3IFJlc2l6ZU9ic2VydmF0aW9uKHRhcmdldCwgb3B0aW9ucyAmJiBvcHRpb25zLmJveCkpO1xuICAgICAgICAgICAgdXBkYXRlQ291bnQoMSk7XG4gICAgICAgICAgICBzY2hlZHVsZXIuc2NoZWR1bGUoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLnVub2JzZXJ2ZSA9IGZ1bmN0aW9uIChyZXNpemVPYnNlcnZlciwgdGFyZ2V0KSB7XG4gICAgICAgIHZhciBkZXRhaWwgPSBvYnNlcnZlck1hcC5nZXQocmVzaXplT2JzZXJ2ZXIpO1xuICAgICAgICB2YXIgaW5kZXggPSBnZXRPYnNlcnZhdGlvbkluZGV4KGRldGFpbC5vYnNlcnZhdGlvblRhcmdldHMsIHRhcmdldCk7XG4gICAgICAgIHZhciBsYXN0T2JzZXJ2YXRpb24gPSBkZXRhaWwub2JzZXJ2YXRpb25UYXJnZXRzLmxlbmd0aCA9PT0gMTtcbiAgICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgICAgIGxhc3RPYnNlcnZhdGlvbiAmJiByZXNpemVPYnNlcnZlcnMuc3BsaWNlKHJlc2l6ZU9ic2VydmVycy5pbmRleE9mKGRldGFpbCksIDEpO1xuICAgICAgICAgICAgZGV0YWlsLm9ic2VydmF0aW9uVGFyZ2V0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgdXBkYXRlQ291bnQoLTEpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIuZGlzY29ubmVjdCA9IGZ1bmN0aW9uIChyZXNpemVPYnNlcnZlcikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgZGV0YWlsID0gb2JzZXJ2ZXJNYXAuZ2V0KHJlc2l6ZU9ic2VydmVyKTtcbiAgICAgICAgZGV0YWlsLm9ic2VydmF0aW9uVGFyZ2V0cy5zbGljZSgpLmZvckVhY2goZnVuY3Rpb24gKG90KSB7IHJldHVybiBfdGhpcy51bm9ic2VydmUocmVzaXplT2JzZXJ2ZXIsIG90LnRhcmdldCk7IH0pO1xuICAgICAgICBkZXRhaWwuYWN0aXZlVGFyZ2V0cy5zcGxpY2UoMCwgZGV0YWlsLmFjdGl2ZVRhcmdldHMubGVuZ3RoKTtcbiAgICB9O1xuICAgIHJldHVybiBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXI7XG59KCkpO1xuZXhwb3J0IHsgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyIH07XG4iLCJpbXBvcnQgeyBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIgfSBmcm9tICcuL1Jlc2l6ZU9ic2VydmVyQ29udHJvbGxlcic7XG5pbXBvcnQgeyBpc0VsZW1lbnQgfSBmcm9tICcuL3V0aWxzL2VsZW1lbnQnO1xudmFyIFJlc2l6ZU9ic2VydmVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBSZXNpemVPYnNlcnZlcihjYWxsYmFjaykge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkZhaWxlZCB0byBjb25zdHJ1Y3QgJ1Jlc2l6ZU9ic2VydmVyJzogMSBhcmd1bWVudCByZXF1aXJlZCwgYnV0IG9ubHkgMCBwcmVzZW50LlwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRmFpbGVkIHRvIGNvbnN0cnVjdCAnUmVzaXplT2JzZXJ2ZXInOiBUaGUgY2FsbGJhY2sgcHJvdmlkZWQgYXMgcGFyYW1ldGVyIDEgaXMgbm90IGEgZnVuY3Rpb24uXCIpO1xuICAgICAgICB9XG4gICAgICAgIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5jb25uZWN0KHRoaXMsIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgUmVzaXplT2JzZXJ2ZXIucHJvdG90eXBlLm9ic2VydmUgPSBmdW5jdGlvbiAodGFyZ2V0LCBvcHRpb25zKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRmFpbGVkIHRvIGV4ZWN1dGUgJ29ic2VydmUnIG9uICdSZXNpemVPYnNlcnZlcic6IDEgYXJndW1lbnQgcmVxdWlyZWQsIGJ1dCBvbmx5IDAgcHJlc2VudC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc0VsZW1lbnQodGFyZ2V0KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkZhaWxlZCB0byBleGVjdXRlICdvYnNlcnZlJyBvbiAnUmVzaXplT2JzZXJ2ZXInOiBwYXJhbWV0ZXIgMSBpcyBub3Qgb2YgdHlwZSAnRWxlbWVudFwiKTtcbiAgICAgICAgfVxuICAgICAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIub2JzZXJ2ZSh0aGlzLCB0YXJnZXQsIG9wdGlvbnMpO1xuICAgIH07XG4gICAgUmVzaXplT2JzZXJ2ZXIucHJvdG90eXBlLnVub2JzZXJ2ZSA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJGYWlsZWQgdG8gZXhlY3V0ZSAndW5vYnNlcnZlJyBvbiAnUmVzaXplT2JzZXJ2ZXInOiAxIGFyZ3VtZW50IHJlcXVpcmVkLCBidXQgb25seSAwIHByZXNlbnQuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNFbGVtZW50KHRhcmdldCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJGYWlsZWQgdG8gZXhlY3V0ZSAndW5vYnNlcnZlJyBvbiAnUmVzaXplT2JzZXJ2ZXInOiBwYXJhbWV0ZXIgMSBpcyBub3Qgb2YgdHlwZSAnRWxlbWVudFwiKTtcbiAgICAgICAgfVxuICAgICAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIudW5vYnNlcnZlKHRoaXMsIHRhcmdldCk7XG4gICAgfTtcbiAgICBSZXNpemVPYnNlcnZlci5wcm90b3R5cGUuZGlzY29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLmRpc2Nvbm5lY3QodGhpcyk7XG4gICAgfTtcbiAgICBSZXNpemVPYnNlcnZlci50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICdmdW5jdGlvbiBSZXNpemVPYnNlcnZlciAoKSB7IFtwb2x5ZmlsbCBjb2RlXSB9JztcbiAgICB9O1xuICAgIHJldHVybiBSZXNpemVPYnNlcnZlcjtcbn0oKSk7XG5leHBvcnQgeyBSZXNpemVPYnNlcnZlciB9O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCwgaW1tZWRpYXRlKSB7XG4gIGxldCB0aW1lb3V0XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGV4ZWN1dGVkRnVuY3Rpb24oKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXNcbiAgICBjb25zdCBhcmdzID0gYXJndW1lbnRzXG5cbiAgICBjb25zdCBsYXRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgdGltZW91dCA9IG51bGxcbiAgICAgIGlmICghaW1tZWRpYXRlKSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpXG4gICAgfVxuXG4gICAgY29uc3QgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dFxuXG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpXG5cbiAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdClcblxuICAgIGlmIChjYWxsTm93KSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpXG4gIH1cbn1cbiIsImltcG9ydCB7IFJlc2l6ZU9ic2VydmVyIGFzIFBvbHlmaWxsIH0gZnJvbSAnQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXInXG5jb25zdCBSZXNpemVPYnNlcnZlciA9IHdpbmRvdy5SZXNpemVPYnNlcnZlciB8fCBQb2x5ZmlsbFxuaW1wb3J0IGRlYm91bmNlIGZyb20gJy4vdXRpbHMvZGVib3VuY2UnXG5cbmltcG9ydCByZW1vdmVJdGVtIGZyb20gJy4vdXRpbHMvcmVtb3ZlLWFycmF5LWl0ZW0nXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnRFbWl0dGVyJ1xuaW1wb3J0IHtcbiAgZ2V0RGlzdGFuY2UsXG4gIGluZGV4T2ZOZWFyZXN0UG9pbnRcbn0gZnJvbSAnLi9nZW9tZXRyeS9kaXN0YW5jZXMnXG5cbmltcG9ydCBEcmFnZ2FibGUgZnJvbSAnLi9kcmFnZ2FibGUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3QgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvcihkcmFnZ2FibGVzLCBvcHRpb25zPXt9KSB7XG4gICAgc3VwZXIob3B0aW9ucylcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHRpbWVFbmQ6IDIwMCxcbiAgICAgIHRpbWVFeGNhbmdlOiA0MDAsXG4gICAgICByYWRpdXM6IDMwXG4gICAgfSwgb3B0aW9ucylcblxuICAgIHRoaXMuY29udGFpbmVyID0gb3B0aW9ucy5jb250YWluZXJcbiAgICB0aGlzLmRyYWdnYWJsZXMgPSBkcmFnZ2FibGVzXG4gICAgdGhpcy5jaGFuZ2VkRHVyaW5nSXRlcmF0aW9uID0gZmFsc2VcblxuICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoZGVib3VuY2UodGhpcy5vblJlc2l6ZS5iaW5kKHRoaXMpLCAxMDApKVxuXG4gICAgaWYgKHRoaXMuY29udGFpbmVyKSB7XG4gICAgICB0aGlzLnJlc2l6ZU9ic2VydmVyLm9ic2VydmUodGhpcy5jb250YWluZXIpXG4gICAgfVxuXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIG9uUmVzaXplKCkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMucmVvcmRlck9uQ2hhbmdlKSB0aGlzLnJlc2V0KClcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZCkgPT4gZC5zdGFydFBvc2l0aW9uaW5nKCkpXG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuX2VuYWJsZSA9IHRydWVcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB0aGlzLmluaXREcmFnZ2FibGUoZHJhZ2dhYmxlKSlcbiAgfVxuXG4gIGluaXREcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgZHJhZ2dhYmxlLmVuYWJsZSA9IHRoaXMuX2VuYWJsZVxuICAgIGRyYWdnYWJsZS5vbignZHJhZzptb3ZlJywgKCkgPT4gdGhpcy5vbk1vdmUoZHJhZ2dhYmxlKSlcbiAgICBkcmFnZ2FibGUuZHJhZ0VuZEFjdGlvbiA9ICgpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5waW5Qb3NpdGlvbihkcmFnZ2FibGUucGlubmVkUG9zaXRpb24sIHRoaXMub3B0aW9ucy50aW1lRW5kKVxuICAgICAgdGhpcy5vbkVuZChkcmFnZ2FibGUpXG4gICAgfVxuICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZShkcmFnZ2FibGUuZWxlbWVudClcbiAgfVxuXG4gIHJlbGVhc2VEcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgdGhpcy5yZXNpemVPYnNlcnZlci51bm9ic2VydmUoZHJhZ2dhYmxlLmVsZW1lbnQpXG4gICAgZHJhZ2dhYmxlLnJlc2V0T24oJ2RyYWc6ZW5kJylcbiAgICBkcmFnZ2FibGUucmVzZXRPbignZHJhZzptb3ZlJylcbiAgICByZW1vdmVJdGVtKHRoaXMuZHJhZ2dhYmxlcywgZHJhZ2dhYmxlKVxuICB9XG5cbiAgb25Nb3ZlKGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IHNvcnRlZERyYWdnYWJsZXMgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuICAgIGNvbnN0IHBpbm5lZFBvc2l0aW9ucyA9IHNvcnRlZERyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbilcblxuICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IHNvcnRlZERyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpXG4gICAgY29uc3QgdGFyZ2V0SW5kZXggPSBpbmRleE9mTmVhcmVzdFBvaW50KHBpbm5lZFBvc2l0aW9ucywgZHJhZ2dhYmxlLnBvc2l0aW9uLCB0aGlzLm9wdGlvbnMucmFkaXVzLCB0aGlzLmRpc3RhbmNlRnVuYylcblxuICAgIGlmICh0YXJnZXRJbmRleCAhPT0gLTEgJiYgY3VycmVudEluZGV4ICE9PSB0YXJnZXRJbmRleCkge1xuICAgICAgaWYgKHRhcmdldEluZGV4IDwgY3VycmVudEluZGV4KSB7XG4gICAgICAgIGZvciAobGV0IGk9dGFyZ2V0SW5kZXg7IGk8Y3VycmVudEluZGV4OyBpKyspIHtcbiAgICAgICAgICBzb3J0ZWREcmFnZ2FibGVzW2ldLnBpblBvc2l0aW9uKHBpbm5lZFBvc2l0aW9uc1tpKzFdLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAobGV0IGk9Y3VycmVudEluZGV4OyBpPHRhcmdldEluZGV4OyBpKyspIHtcbiAgICAgICAgICBzb3J0ZWREcmFnZ2FibGVzW2krMV0ucGluUG9zaXRpb24ocGlubmVkUG9zaXRpb25zW2ldLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGRyYWdnYWJsZS5uYXRpdmVEcmFnQW5kRHJvcCkge1xuICAgICAgICBkcmFnZ2FibGUucGluUG9zaXRpb24ocGlubmVkUG9zaXRpb25zW3RhcmdldEluZGV4XSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbiA9IHBpbm5lZFBvc2l0aW9uc1t0YXJnZXRJbmRleF1cbiAgICAgIH1cblxuICAgICAgdGhpcy5jaGFuZ2VkRHVyaW5nSXRlcmF0aW9uID0gdHJ1ZVxuICAgIH1cbiAgfVxuXG4gIG9uRW5kKGRyYWdnYWJsZSkge1xuICAgIGlmICh0aGlzLmNoYW5nZWREdXJpbmdJdGVyYXRpb24pIHtcbiAgICAgIHRoaXMuZW1pdCgnbGlzdDpjaGFuZ2UnKVxuICAgICAgdGhpcy5jaGFuZ2VkRHVyaW5nSXRlcmF0aW9uID0gZmFsc2VcblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZW9yZGVyT25DaGFuZ2UgJiYgdGhpcy5vcHRpb25zLmNvbnRhaW5lcikge1xuICAgICAgICB0aGlzLnJlb3JkZXJFbGVtZW50cyhkcmFnZ2FibGUpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVvcmRlckVsZW1lbnRzKG1vdmVkRHJhZ2dhYmxlKSB7XG4gICAgY29uc3Qgc29ydGVkRHJhZ2dhYmxlcyA9IHRoaXMuZ2V0U29ydGVkRHJhZ2dhYmxlcygpXG4gICAgY29uc3QgaW5kZXggPSBzb3J0ZWREcmFnZ2FibGVzLmluZGV4T2YobW92ZWREcmFnZ2FibGUpXG4gICAgY29uc3QgbmV4dCA9IHNvcnRlZERyYWdnYWJsZXNbaW5kZXggKyAxXVxuXG4gICAgdGhpcy5yZXNldCgpXG5cbiAgICBpZiAobmV4dCkge1xuICAgICAgdGhpcy5jb250YWluZXIuaW5zZXJ0QmVmb3JlKG1vdmVkRHJhZ2dhYmxlLmVsZW1lbnQsIG5leHQuZWxlbWVudClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQobW92ZWREcmFnZ2FibGUuZWxlbWVudClcbiAgICB9XG5cbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZCkgPT4gZC5zdGFydFBvc2l0aW9uaW5nKCkpXG4gICAgdGhpcy5lbWl0KCdsaXN0OnJlb3JkZXJlZCcpXG4gIH1cblxuICBnZXRDdXJyZW50UGlubmVkUG9zaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbi5jbG9uZSgpKVxuICB9XG5cbiAgZ2V0U29ydGVkRHJhZ2dhYmxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5kcmFnZ2FibGVzLnNvcnQodGhpcy5zb3J0aW5nLmJpbmQodGhpcykpXG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucmVzZXRQb3NpdGlvblRvSW5pdGlhbCgpKVxuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucmVmcmVzaCgpKVxuICB9XG5cbiAgYWRkKGRyYWdnYWJsZXMpIHtcbiAgICBpZiAoIShkcmFnZ2FibGVzIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgICBkcmFnZ2FibGVzID0gW2RyYWdnYWJsZXNdXG4gICAgfVxuICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB0aGlzLmluaXREcmFnZ2FibGUoZHJhZ2dhYmxlKSlcbiAgICB0aGlzLmRyYWdnYWJsZXMgPSB0aGlzLmRyYWdnYWJsZXMuY29uY2F0KGRyYWdnYWJsZXMpXG4gIH1cblxuICByZW1vdmUoZHJhZ2dhYmxlcykge1xuICAgIGNvbnN0IGluaXRpYWxQb3NpdGlvbnMgPSB0aGlzLmRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5pbml0aWFsUG9zaXRpb24pXG4gICAgY29uc3QgbGlzdCA9IFtdXG4gICAgY29uc3Qgc29ydGVkRHJhZ2dhYmxlcyA9IHRoaXMuZ2V0U29ydGVkRHJhZ2dhYmxlcygpXG5cbiAgICBpZiAoIShkcmFnZ2FibGVzIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgICBkcmFnZ2FibGVzID0gW2RyYWdnYWJsZXNdXG4gICAgfVxuXG4gICAgZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHRoaXMucmVsZWFzZURyYWdnYWJsZShkcmFnZ2FibGUpKVxuXG4gICAgbGV0IGogPSAwXG4gICAgc29ydGVkRHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGlmICh0aGlzLmRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMSkge1xuICAgICAgICBpZiAoZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uICE9PSBpbml0aWFsUG9zaXRpb25zW2pdKSB7XG4gICAgICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKGluaXRpYWxQb3NpdGlvbnNbal0sIHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSlcbiAgICAgICAgfVxuICAgICAgICBkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uID0gaW5pdGlhbFBvc2l0aW9uc1tqXVxuICAgICAgICBqKytcbiAgICAgICAgbGlzdC5wdXNoKGRyYWdnYWJsZSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGxpc3RcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMucmVtb3ZlKHRoaXMuZHJhZ2dhYmxlcy5zbGljZSgpKVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUuZGVzdHJveSgpKVxuICAgIGlmICh0aGlzLmNvbnRhaW5lcikge1xuICAgICAgdGhpcy5yZXNpemVPYnNlcnZlci51bm9ic2VydmUodGhpcy5jb250YWluZXIpXG4gICAgfVxuICB9XG5cbiAgc29ydGluZyhkcmFnZ2FibGVBLCBkcmFnZ2FibGVCKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5zb3J0aW5nKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLnNvcnRpbmcoZHJhZ2dhYmxlQSwgZHJhZ2dhYmxlQilcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGRyYWdnYWJsZUEucGlubmVkUG9zaXRpb24ueSA8IGRyYWdnYWJsZUIucGlubmVkUG9zaXRpb24ueSkgcmV0dXJuIC0xXG4gICAgICBpZiAoZHJhZ2dhYmxlQS5waW5uZWRQb3NpdGlvbi55ID4gZHJhZ2dhYmxlQi5waW5uZWRQb3NpdGlvbi55KSByZXR1cm4gMVxuICAgICAgaWYgKGRyYWdnYWJsZUEucGlubmVkUG9zaXRpb24ueCA8IGRyYWdnYWJsZUIucGlubmVkUG9zaXRpb24ueCkgcmV0dXJuIC0xXG4gICAgICBpZiAoZHJhZ2dhYmxlQS5waW5uZWRQb3NpdGlvbi54ID4gZHJhZ2dhYmxlQi5waW5uZWRQb3NpdGlvbi54KSByZXR1cm4gMVxuICAgICAgcmV0dXJuIDBcbiAgICB9XG4gIH1cblxuICBnZXQgZGlzdGFuY2VGdW5jKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZ2V0RGlzdGFuY2UgfHwgZ2V0RGlzdGFuY2VcbiAgfVxuXG4gIGdldCBwb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q3VycmVudFBpbm5lZFBvc2l0aW9ucygpXG4gIH1cblxuICBzZXQgcG9zaXRpb25zKHBvc2l0aW9ucykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSAnd3JvbmcgYXJyYXkgbGVuZ3RoJ1xuICAgIGlmIChwb3NpdGlvbnMubGVuZ3RoID09PSB0aGlzLmRyYWdnYWJsZXMubGVuZ3RoKSB7XG4gICAgICBwb3NpdGlvbnMuZm9yRWFjaCgocG9pbnQsIGkpID0+IHtcbiAgICAgICAgdGhpcy5kcmFnZ2FibGVzW2ldLnBpblBvc2l0aW9uKHBvaW50KVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbWVzc2FnZVxuICAgIH1cbiAgfVxuXG4gIGdldCBlbmFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZVxuICB9XG5cbiAgc2V0IGVuYWJsZShlbmFibGUpIHtcbiAgICB0aGlzLl9lbmFibGUgPSBlbmFibGVcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUuZW5hYmxlID0gZW5hYmxlXG4gICAgfSlcbiAgfVxuXG4gIHN0YXRpYyBmYWN0b3J5KGNvbnRhaW5lckVsZW1lbnQsIGVsZW1lbnRzLCBvcHRpb25zPXt9KSB7XG4gICAgY29uc3QgZHJhZ2dhYmxlcyA9IEFycmF5LmZyb20oZWxlbWVudHMpLm1hcCgoZWxlbWVudCkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBEcmFnZ2FibGUoZWxlbWVudCwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyRWxlbWVudFxuICAgICAgfSwgb3B0aW9ucy5kcmFnZ2FibGUgfHwge30pKVxuICAgIH0pXG5cbiAgICByZXR1cm4gbmV3IExpc3QoZHJhZ2dhYmxlcywgT2JqZWN0LmFzc2lnbih7XG4gICAgICBjb250YWluZXI6IGNvbnRhaW5lckVsZW1lbnRcbiAgICB9LCBvcHRpb25zLmxpc3QgfHwge30pKVxuICB9XG59XG4iLCJpbXBvcnQgTGlzdCBmcm9tICcuL2xpc3QnXG5pbXBvcnQgeyBpbmRleE9mTmVhcmVzdFBvaW50LCBnZXRZRGlmZmVyZW5jZSB9IGZyb20gJy4vZ2VvbWV0cnkvZGlzdGFuY2VzJ1xuaW1wb3J0IFBvaW50IGZyb20gJy4vZ2VvbWV0cnkvcG9pbnQnXG5cbmltcG9ydCBEcmFnZ2FibGUgZnJvbSAnLi9kcmFnZ2FibGUnXG5cbmNvbnN0IGFycmF5TW92ZSA9IChhcnJheSwgZnJvbSwgdG8pID0+IHtcbiAgYXJyYXkuc3BsaWNlKHRvIDwgMCA/IGFycmF5Lmxlbmd0aCArIHRvIDogdG8sIDAsIGFycmF5LnNwbGljZShmcm9tLCAxKVswXSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnViYmxpbmdMaXN0IGV4dGVuZHMgTGlzdCB7XG4gIGNvbnN0cnVjdG9yKGRyYWdnYWJsZXMsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcihkcmFnZ2FibGVzLCBvcHRpb25zKVxuICAgIHRoaXMuYXV0b0RldGVjdFZlcnRpY2FsR2FwKClcbiAgICB0aGlzLmF1dG9EZXRlY3RTdGFydFBvc2l0aW9uKClcbiAgfVxuXG4gIGF1dG9EZXRlY3RWZXJ0aWNhbEdhcCgpIHtcbiAgICBpZiAodGhpcy5kcmFnZ2FibGVzLmxlbmd0aCA+PSAyICYmICF0aGlzLnZlcnRpY2FsR2FwKSB7XG4gICAgICBjb25zdCBzb3J0ZWQgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuXG4gICAgICB0aGlzLnZlcnRpY2FsR2FwID0gc29ydGVkWzFdLnBpbm5lZFBvc2l0aW9uLnkgLSBzb3J0ZWRbMF0ucGlubmVkUG9zaXRpb24ueSAtIHNvcnRlZFswXS5nZXRTaXplKCkueVxuICAgIH1cbiAgfVxuXG4gIGF1dG9EZXRlY3RTdGFydFBvc2l0aW9uKCkge1xuICAgIGlmICh0aGlzLmRyYWdnYWJsZXMubGVuZ3RoID49IDEgJiYgIXRoaXMuc3RhcnRQb3NpdGlvbikge1xuICAgICAgdGhpcy5zdGFydFBvc2l0aW9uID0gdGhpcy5kcmFnZ2FibGVzWzBdLnBpbm5lZFBvc2l0aW9uXG4gICAgfVxuICB9XG5cbiAgaW5pdERyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICBzdXBlci5pbml0RHJhZ2dhYmxlKGRyYWdnYWJsZSlcbiAgICBkcmFnZ2FibGUub24oJ2RyYWc6c3RhcnQnLCAoKSA9PiB0aGlzLm9uRHJhZ1N0YXJ0KGRyYWdnYWJsZSkpXG4gIH1cblxuICBvblJlc2l6ZSgpIHtcbiAgICBzdXBlci5vblJlc2l6ZSgpXG4gICAgdGhpcy5hdXRvRGV0ZWN0VmVydGljYWxHYXAoKVxuICB9XG5cbiAgYWRkKGRyYWdnYWJsZXMpIHtcbiAgICBzdXBlci5hZGQoZHJhZ2dhYmxlcylcbiAgICB0aGlzLmF1dG9EZXRlY3RTdGFydFBvc2l0aW9uKClcbiAgICB0aGlzLmF1dG9EZXRlY3RWZXJ0aWNhbEdhcCgpXG4gIH1cblxuICBvbkRyYWdTdGFydChkcmFnZ2FibGUpIHtcbiAgICB0aGlzLmNhY2hlZFNvcnRlZERyYWdnYWJsZXMgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuICAgIHRoaXMuaW5kZXhPZkFjdGl2ZURyYWdnYWJsZSA9IHRoaXMuY2FjaGVkU29ydGVkRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSlcbiAgfVxuXG4gIG9uTW92ZShkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBwcmV2RHJhZ2dhYmxlID0gdGhpcy5jYWNoZWRTb3J0ZWREcmFnZ2FibGVzW3RoaXMuaW5kZXhPZkFjdGl2ZURyYWdnYWJsZSAtIDFdXG4gICAgY29uc3QgbmV4dERyYWdnYWJsZSA9IHRoaXMuY2FjaGVkU29ydGVkRHJhZ2dhYmxlc1t0aGlzLmluZGV4T2ZBY3RpdmVEcmFnZ2FibGUgKyAxXVxuICAgIGNvbnN0IGN1cnJlbnRPcmRlciA9IFtwcmV2RHJhZ2dhYmxlLCBkcmFnZ2FibGUsIG5leHREcmFnZ2FibGVdLmZpbHRlcihCb29sZWFuKS5tYXAoKGQpID0+IGQucGlubmVkUG9zaXRpb24pXG4gICAgY29uc3QgY3VycmVudFBvc2l0aW9uID0gZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uXG5cbiAgICBjb25zdCB0YXJnZXRJbmRleCA9IGluZGV4T2ZOZWFyZXN0UG9pbnQoY3VycmVudE9yZGVyLCBkcmFnZ2FibGUucG9zaXRpb24sIDEwMDAwLCB0aGlzLmRpc3RhbmNlRnVuYylcblxuICAgIGlmKHByZXZEcmFnZ2FibGUgJiYgdGFyZ2V0SW5kZXggPT09IDApIHtcbiAgICAgIGlmKGRyYWdnYWJsZS5zaG91bGRVc2VOYXRpdmVEcmFnQW5kRHJvcCgpKSB7XG4gICAgICAgIGRyYWdnYWJsZS5waW5Qb3NpdGlvbihwcmV2RHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uID0gcHJldkRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbi5jbG9uZSgpXG4gICAgICB9XG4gICAgICBwcmV2RHJhZ2dhYmxlLnBpblBvc2l0aW9uKG5ldyBQb2ludChcbiAgICAgICAgY3VycmVudFBvc2l0aW9uLngsXG4gICAgICAgIGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbi55ICsgZHJhZ2dhYmxlLmdldFNpemUoKS55ICsgKHRoaXMudmVydGljYWxHYXAgfHwgMClcbiAgICAgICksIHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSlcbiAgICAgIGFycmF5TW92ZSh0aGlzLmNhY2hlZFNvcnRlZERyYWdnYWJsZXMsIHRoaXMuaW5kZXhPZkFjdGl2ZURyYWdnYWJsZS0tLCB0aGlzLmluZGV4T2ZBY3RpdmVEcmFnZ2FibGUpXG4gICAgICB0aGlzLm9uTW92ZShkcmFnZ2FibGUpXG4gICAgICB0aGlzLmNoYW5nZWREdXJpbmdJdGVyYXRpb24gPSB0cnVlXG4gICAgfSBlbHNlIGlmKG5leHREcmFnZ2FibGUgJiYgKHRhcmdldEluZGV4ID09PSAyIHx8ICh0YXJnZXRJbmRleCA9PT0gMSAmJiAhcHJldkRyYWdnYWJsZSkpKSB7XG4gICAgICBuZXh0RHJhZ2dhYmxlLnBpblBvc2l0aW9uKGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbiwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgY29uc3QgZHJhZ2dhYmxlTmV3UG9zaXRpb24gPSBuZXcgUG9pbnQoXG4gICAgICAgIG5leHREcmFnZ2FibGUucGlubmVkUG9zaXRpb24ueCxcbiAgICAgICAgbmV4dERyYWdnYWJsZS5waW5uZWRQb3NpdGlvbi55ICsgbmV4dERyYWdnYWJsZS5nZXRTaXplKCkueSArICh0aGlzLnZlcnRpY2FsR2FwIHx8IDApXG4gICAgICApXG4gICAgICBpZihkcmFnZ2FibGUuc2hvdWxkVXNlTmF0aXZlRHJhZ0FuZERyb3AoKSkge1xuICAgICAgICBkcmFnZ2FibGUucGluUG9zaXRpb24oZHJhZ2dhYmxlTmV3UG9zaXRpb24pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24gPSBkcmFnZ2FibGVOZXdQb3NpdGlvblxuICAgICAgfVxuICAgICAgYXJyYXlNb3ZlKHRoaXMuY2FjaGVkU29ydGVkRHJhZ2dhYmxlcywgdGhpcy5pbmRleE9mQWN0aXZlRHJhZ2dhYmxlKyssIHRoaXMuaW5kZXhPZkFjdGl2ZURyYWdnYWJsZSlcbiAgICAgIHRoaXMub25Nb3ZlKGRyYWdnYWJsZSlcbiAgICAgIHRoaXMuY2hhbmdlZER1cmluZ0l0ZXJhdGlvbiA9IHRydWVcbiAgICB9XG4gIH1cblxuICBidWJibGluZyhzb3J0ZWREcmFnZ2FibGVzLCBjdXJyZW50RHJhZ2dhYmxlKSB7XG4gICAgY29uc3QgY3VycmVudFBvc2l0aW9uID0gdGhpcy5zdGFydFBvc2l0aW9uLmNsb25lKClcbiAgICBzb3J0ZWREcmFnZ2FibGVzIHx8PSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuXG4gICAgc29ydGVkRHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGlmICghZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uLmNvbXBhcmUoY3VycmVudFBvc2l0aW9uKSkge1xuICAgICAgICBpZiAoZHJhZ2dhYmxlID09PSBjdXJyZW50RHJhZ2dhYmxlICYmICFjdXJyZW50RHJhZ2dhYmxlLnNob3VsZFVzZU5hdGl2ZURyYWdBbmREcm9wKCkpIHtcbiAgICAgICAgICBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24gPSBjdXJyZW50UG9zaXRpb24uY2xvbmUoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRyYWdnYWJsZS5waW5Qb3NpdGlvbihjdXJyZW50UG9zaXRpb24sIChkcmFnZ2FibGUgPT09IGN1cnJlbnREcmFnZ2FibGUpID8gMCA6IHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjdXJyZW50UG9zaXRpb24ueSA9IGN1cnJlbnRQb3NpdGlvbi55ICsgZHJhZ2dhYmxlLmdldFNpemUoKS55ICsgKHRoaXMudmVydGljYWxHYXAgfHwgMClcbiAgICB9KVxuICB9XG5cbiAgcmVtb3ZlKGRyYWdnYWJsZXMpIHtcbiAgICBpZiAoIShkcmFnZ2FibGVzIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgICBkcmFnZ2FibGVzID0gW2RyYWdnYWJsZXNdXG4gICAgfVxuXG4gICAgZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHRoaXMucmVsZWFzZURyYWdnYWJsZShkcmFnZ2FibGUpKVxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IHRoaXMuZHJhZ2dhYmxlcy5maWx0ZXIoKGQpID0+ICFkcmFnZ2FibGVzLmluY2x1ZGVzKGQpKVxuXG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGQpID0+IGQuc3RhcnRQb3NpdGlvbmluZygpKVxuICAgIHRoaXMuYnViYmxpbmcoKVxuICB9XG5cbiAgZ2V0IGRpc3RhbmNlRnVuYygpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmdldERpc3RhbmNlIHx8IGdldFlEaWZmZXJlbmNlXG4gIH1cblxuICBzdGF0aWMgZmFjdG9yeShjb250YWluZXJFbGVtZW50LCBlbGVtZW50cywgb3B0aW9ucz17fSkge1xuICAgIGNvbnN0IGRyYWdnYWJsZXMgPSBBcnJheS5mcm9tKGVsZW1lbnRzKS5tYXAoKGVsZW1lbnQpID0+IHtcbiAgICAgIHJldHVybiBuZXcgRHJhZ2dhYmxlKGVsZW1lbnQsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBjb250YWluZXI6IGNvbnRhaW5lckVsZW1lbnRcbiAgICAgIH0sIG9wdGlvbnMuZHJhZ2dhYmxlIHx8IHt9KSlcbiAgICB9KVxuXG4gICAgcmV0dXJuIG5ldyBCdWJibGluZ0xpc3QoZHJhZ2dhYmxlcywgT2JqZWN0LmFzc2lnbih7XG4gICAgICBjb250YWluZXI6IGNvbnRhaW5lckVsZW1lbnRcbiAgICB9LCBvcHRpb25zLmxpc3QgfHwge30pKVxuICB9XG59XG4iXSwibmFtZXMiOlsiZ2V0U3VtVmFsdWVPZlN0eWxlUnVsZXMiLCJlbGVtZW50IiwicnVsZXMiLCJyZWR1Y2UiLCJzdW0iLCJydWxlIiwicGFyc2VJbnQiLCJ3aW5kb3ciLCJnZXRDb21wdXRlZFN0eWxlIiwiUG9pbnQiLCJ4IiwieSIsInAiLCJrIiwicGFyZW50IiwicGFyZW50Tm9kZSIsImVsZW1lbnRSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicGFyZW50UmVjdCIsImxlZnQiLCJ0b3AiLCJpc0NvbnRlbnRCb3hTaXplIiwid2lkdGgiLCJoZWlnaHQiLCJSZWN0YW5nbGUiLCJwb3NpdGlvbiIsInNpemUiLCJhZGQiLCJtdWx0IiwicmVjdCIsIk1hdGgiLCJtaW4iLCJtYXgiLCJzdWIiLCJyZWN0YW5nbGUiLCJpbmNsdWRlUG9pbnQiLCJnZXRQMyIsImF4aXMiLCJzZWxBeGlzIiwiY3Jvc3NSZWN0YW5nbGUiLCJhbmQiLCJ0aGlzQ2VudGVyIiwiZ2V0Q2VudGVyIiwicmVjdENlbnRlciIsInNpZ24iLCJvZmZzZXQiLCJlbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInN0eWxlIiwiaXNDb25zaWRlclRyYW5zbGF0ZSIsImVsZW1lbnRPZmZzZXQiLCJlbGVtZW50U2l6ZSIsImdldERlZmF1bHRDb250YWluZXIiLCJjb250YWluZXIiLCJ0YWdOYW1lIiwiRXZlbnRFbWl0dGVyIiwib3B0aW9ucyIsImV2ZW50cyIsIm9uIiwiT2JqZWN0IiwiZW50cmllcyIsImV2ZW50TmFtZSIsImZuIiwiaW50ZXJydXB0ZWQiLCJhcmdzIiwic2xpY2UiLCJjYWxsIiwiYXJndW1lbnRzIiwiZnVuYyIsInB1c2giLCJ1bnNoaWZ0IiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwiZ2V0RGlzdGFuY2UiLCJwMSIsInAyIiwiZHgiLCJkeSIsInNxcnQiLCJnZXRYRGlmZmVyZW5jZSIsImFicyIsImdldFlEaWZmZXJlbmNlIiwidHJhbnNmb3JtZWRTcGFjZURpc3RhbmNlRmFjdG9yeSIsInBvdyIsImluZGV4T2ZOZWFyZXN0UG9pbnQiLCJhcnIiLCJ2YWwiLCJyYWRpdXMiLCJnZXREaXN0YW5jZUZ1bmMiLCJpIiwidGVtcCIsImxlbmd0aCIsImRpcmVjdENyb3NzaW5nIiwiTDFQMSIsIkwxUDIiLCJMMlAxIiwiTDJQMiIsImsxIiwiazIiLCJiMSIsImIyIiwiYm91bmRUb0xpbmUiLCJBIiwiQiIsIlAiLCJBUCIsIkFCIiwiYWIyIiwiYXBfYWIiLCJ0IiwiZ2V0UG9pbnRPbkxpbmVCeUxlbmdodCIsIkxQMSIsIkxQMiIsImxlbmdodCIsInBlcmNlbnQiLCJhZGRQb2ludFRvQm91bmRQb2ludHMiLCJib3VuZHBvaW50cyIsInBvaW50IiwiaXNSaWdodCIsInJlc3VsdCIsImZpbHRlciIsImJQb2ludCIsImdldEFuZ2xlRGlmZiIsImFscGhhIiwiYmV0YSIsIm1pbkFuZ2xlIiwibWF4QW5nbGUiLCJQSSIsImdldEFuZ2xlIiwiZGlmZiIsIm5vcm1hbGl6ZUFuZ2xlIiwiYXRhbjIiLCJib3VuZEFuZ2xlIiwiZG1pbiIsImRtYXgiLCJnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0iLCJhbmdsZSIsImNlbnRlciIsImNvcyIsInNpbiIsIkJvdW5kIiwiX3NpemUiLCJpbnN0YW5jZSIsImJvdW5kIiwiYmluZCIsIkJvdW5kVG9SZWN0YW5nbGUiLCJjYWxjUG9pbnQiLCJjbG9uZSIsInJlY3RQMiIsIkJvdW5kVG9FbGVtZW50IiwiZnJvbUVsZW1lbnQiLCJCb3VuZFRvTGluZVgiLCJzdGFydFkiLCJlbmRZIiwiQm91bmRUb0xpbmVZIiwic3RhcnRYIiwiZW5kWCIsIkJvdW5kVG9MaW5lIiwic3RhcnRQb2ludCIsImVuZFBvaW50Iiwic29tZUsiLCJjb3NCZXRhIiwic2luQmV0YSIsInBvaW50MiIsIm5ld0VuZFBvaW50IiwicG9pbnRDcm9zc2luZyIsIkJvdW5kVG9DaXJjbGUiLCJCb3VuZFRvQXJjIiwic3RhcnRBbmdsZSIsImVuZEFuZ2xlIiwiX3N0YXJ0QW5nbGUiLCJfZW5kQW5nbGUiLCJhcnJheSIsInJhbmdlIiwic3RhcnQiLCJzdG9wIiwic3RlcCIsIkJhc2ljU3RyYXRlZ3kiLCJOb3RDcm9zc2luZ1N0cmF0ZWd5IiwicmVjdGFuZ2xlTGlzdCIsImluZGV4ZXNPZk5ld3MiLCJzdGF0aWNSZWN0YW5nbGVJbmRleGVzIiwiaW5kZXhlcyIsIl9yZWN0IiwiZm9yRWFjaCIsInJlbW92YWJsZSIsImluZGV4T2ZTdGF0aWMiLCJzdGF0aWNSZWN0IiwibW92ZVRvQm91bmQiLCJzb21lIiwiYm91bmRSZWN0IiwiZ2V0U3F1YXJlIiwib2RsRHJhZ2dhYmxlc0xpc3QiLCJuZXdEcmFnZ2FibGVzIiwiaW5kZXhPZk5ld3MiLCJkcmFnZ2FibGVzIiwiY29uY2F0IiwiZHJhZ2dhYmxlIiwiRmxvYXRMZWZ0U3RyYXRlZ3kiLCJhc3NpZ24iLCJwYWRkaW5nVG9wTGVmdCIsInBhZGRpbmdCb3R0b21SaWdodCIsInlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyIsImdldFBvc2l0aW9uIiwiX2luZGV4ZXNPZk5ld3MiLCJnZXRQMiIsImJvdW5kYXJ5UG9pbnRzIiwicmVjdEluZGV4IiwiaXNWYWxpZCIsIm5ld0xpc3QiLCJsaXN0T2xkUG9zaXRpb24iLCJtYXAiLCJuZXdEcmFnZ2FibGUiLCJGbG9hdFJpZ2h0U3RyYXRlZ3kiLCJwYWRkaW5nVG9wUmlnaHQiLCJwYWRkaW5nQm90dG9tTGVmdCIsInBhZGRpbmdCb3R0b21OZWdMZWZ0IiwiZ2V0UDQiLCJhZGRUb0RlZmF1bHRTY29wZSIsInRhcmdldCIsImRlZmF1bHRTY29wZSIsImFkZFRhcmdldCIsIlRhcmdldCIsInRpbWVFbmQiLCJ0aW1lRXhjYW5nZSIsInBvc2l0aW9uaW5nU3RyYXRlZ3kiLCJzdHJhdGVneSIsImdldFJlY3RhbmdsZSIsInRhcmdldHMiLCJlbWl0dGVyIiwiZW1pdCIsInN0YXJ0Qm91bmRpbmciLCJpbml0IiwiYm91bmRpbmciLCJpbmRleGVzT2ZOZXciLCJwb3NpdGlvbmluZyIsIm9sZERyYWdnYWJsZXMiLCJzb3J0aW5nIiwicmVjdGFuZ2xlcyIsImlubmVyRHJhZ2dhYmxlcyIsInNldFBvc2l0aW9uIiwiY2F0Y2hEcmFnZ2FibGUiLCJ0YXJnZXRSZWN0YW5nbGUiLCJkcmFnZ2FibGVTcXVhcmUiLCJzY29wZXMiLCJzY29wZSIsInJlbW92ZUl0ZW0iLCJuZXdEcmFnZ2FibGVzSW5kZXgiLCJnZXRTaXplIiwiYWRkUmVtb3ZlT25Nb3ZlIiwidGltZSIsIm1vdmUiLCJpbml0aWFsUG9zaXRpb24iLCJwdXNoSW5uZXJEcmFnZ2FibGUiLCJyZW1vdmVIYW5kbGVyIiwicmVtb3ZlIiwidW5zdWJzY3JpYmUiLCJfY29udGFpbmVyIiwiU2NvcGUiLCJkcmFnRW5kQWN0aW9uIiwib25FbmQiLCJzaG90VGFyZ2V0cyIsInNvcnQiLCJhIiwiYiIsInBpblBvc2l0aW9uIiwicmVzZXQiLCJyZWZyZXNoIiwicG9zaXRpb25zIiwibWVzc2FnZSIsInRhcmdldEluZGV4ZXMiLCJjdXJyZW50U2NvcGUiLCJhZGREcmFnZ2FibGVUb1Njb3BlIiwiYWRkRHJhZ2dhYmxlIiwiRHJhZ2dhYmxlIiwiaW50ZXJydXB0IiwiYWRkVGFyZ2V0VG9TY29wZSIsInByZXBlbmRPbiIsImNoZWNrU3VwcG9ydFBhc3NpdmVFdmVudHMiLCJwYXNzaXZlU3VwcG9ydGVkIiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIl9lcnIiLCJpc1N1cHBvcnRQYXNzaXZlRXZlbnRzIiwicGFzc2l2ZUZhbHNlIiwicGFzc2l2ZSIsImlzVG91Y2giLCJtb3VzZUV2ZW50cyIsImVuZCIsInRvdWNoRXZlbnRzIiwidHJhbnNmb3JtUHJvcGVydHkiLCJnZXRTdHlsZVByb3BlcnR5IiwidHJhbnNpdGlvblByb3BlcnR5IiwiZ2V0VG91Y2hCeUlEIiwidG91Y2hJZCIsImNoYW5nZWRUb3VjaGVzIiwiaWRlbnRpZmllciIsInByZXZlbnREb3VibGVJbml0IiwiZXhpc3RpbmciLCJjb3B5U3R5bGVzIiwic291cmNlIiwiZGVzdGluYXRpb24iLCJjcyIsImtleSIsImNoaWxkcmVuIiwiX2VuYWJsZSIsInRvdWNoRHJhZ2dpbmdUaHJlc2hvbGQiLCJzdGFydFBvc2l0aW9uaW5nIiwic3RhcnRMaXN0ZW5pbmciLCJfc2V0RGVmYXVsdFRyYW5zaXRpb24iLCJwaW5uZWRQb3NpdGlvbiIsIl9kcmFnU3RhcnQiLCJldmVudCIsImRyYWdTdGFydCIsIl9kcmFnTW92ZSIsImRyYWdNb3ZlIiwiX2RyYWdFbmQiLCJkcmFnRW5kIiwiX25hdGl2ZURyYWdTdGFydCIsIm5hdGl2ZURyYWdTdGFydCIsIl9uYXRpdmVEcmFnT3ZlciIsIm5hdGl2ZURyYWdPdmVyIiwiX25hdGl2ZURyYWdFbmQiLCJuYXRpdmVEcmFnRW5kIiwiX25hdGl2ZURyb3AiLCJuYXRpdmVEcm9wIiwiX3Njcm9sbCIsIm9uU2Nyb2xsIiwiaGFuZGxlciIsIl90cmFuc2Zvcm1Qb3NpdGlvbiIsInRyYW5zaXRpb24iLCJ0cmFuc2l0aW9uQ3NzIiwidGVzdCIsInJlcGxhY2UiLCJ0cmFuc2xhdGVDc3MiLCJ0cmFuc2Zvcm0iLCJzaG91bGRSZW1vdmVaZXJvVHJhbnNsYXRlIiwiaXNTaWxlbnQiLCJkZXRlcm1pbmVEaXJlY3Rpb24iLCJfc2V0VHJhbnNpdGlvbiIsIl9zZXRUcmFuc2xhdGUiLCJzaWxlbnQiLCJsZWZ0RGlyZWN0aW9uIiwicmlnaHREaXJlY3Rpb24iLCJ1cERpcmVjdGlvbiIsImRvd25EaXJlY3Rpb24iLCJEYXRlIiwiX3N0YXJ0VG91Y2hUaW1lc3RhbXAiLCJpc1RvdWNoRXZlbnQiLCJuYXRpdmVEcmFnQW5kRHJvcCIsImVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcE9uVG91Y2giLCJUb3VjaEV2ZW50IiwidG91Y2hQb2ludCIsIl9zdGFydFRvdWNoUG9pbnQiLCJwYWdlWCIsImNsaWVudFgiLCJwYWdlWSIsImNsaWVudFkiLCJfc3RhcnRQb3NpdGlvbiIsIl90b3VjaElkIiwiX3N0YXJ0U2Nyb2xsUG9pbnQiLCJzY3JvbGxYIiwic2Nyb2xsWSIsIkhUTUxJbnB1dEVsZW1lbnQiLCJmb2N1cyIsInNob3VsZFVzZU5hdGl2ZURyYWdBbmREcm9wIiwiZW11bGF0ZU9uRmlyc3RNb3ZlIiwic2VlbXNTY3JvbGxpbmciLCJjYW5jZWxEcmFnZ2luZyIsImVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcCIsImNhbmNlbEVtdWxhdGlvbiIsInRvdWNoIiwiaXNEcmFnZ2luZyIsInN0b3BQcm9wYWdhdGlvbiIsInByZXZlbnREZWZhdWx0Iiwic2Nyb2xsUG9pbnQiLCJjbGFzc0xpc3QiLCJzZXRUaW1lb3V0IiwiX2V2ZW50IiwiZGF0YVRyYW5zZmVyIiwic2V0RGF0YSIsImVmZmVjdEFsbG93ZWQiLCJkcm9wRWZmZWN0IiwicmVtb3ZlQXR0cmlidXRlIiwiY29udGFpbmVyUmVjdCIsImNsb25lZEVsZW1lbnQiLCJjbG9uZU5vZGUiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJlbXVsYXRpb25EcmFnZ2FibGUiLCJjb250YWluZXJSZWN0UG9pbnQiLCJkZXN0cm95IiwicmVtb3ZlQ2hpbGQiLCJyZXNldEVtaXR0ZXIiLCJfaGFuZGxlciIsImVuYWJsZSIsIlJlc2l6ZU9ic2VydmVyIiwiZGVib3VuY2UiLCJ3YWl0IiwiaW1tZWRpYXRlIiwidGltZW91dCIsImV4ZWN1dGVkRnVuY3Rpb24iLCJjb250ZXh0IiwibGF0ZXIiLCJhcHBseSIsImNhbGxOb3ciLCJjbGVhclRpbWVvdXQiLCJQb2x5ZmlsbCIsIkxpc3QiLCJjaGFuZ2VkRHVyaW5nSXRlcmF0aW9uIiwicmVzaXplT2JzZXJ2ZXIiLCJvblJlc2l6ZSIsIm9ic2VydmUiLCJyZW9yZGVyT25DaGFuZ2UiLCJkIiwiaW5pdERyYWdnYWJsZSIsIm9uTW92ZSIsInVub2JzZXJ2ZSIsInJlc2V0T24iLCJzb3J0ZWREcmFnZ2FibGVzIiwiZ2V0U29ydGVkRHJhZ2dhYmxlcyIsInBpbm5lZFBvc2l0aW9ucyIsImN1cnJlbnRJbmRleCIsInRhcmdldEluZGV4IiwiZGlzdGFuY2VGdW5jIiwicmVvcmRlckVsZW1lbnRzIiwibW92ZWREcmFnZ2FibGUiLCJuZXh0IiwiaW5zZXJ0QmVmb3JlIiwicmVzZXRQb3NpdGlvblRvSW5pdGlhbCIsIkFycmF5IiwiaW5pdGlhbFBvc2l0aW9ucyIsImxpc3QiLCJyZWxlYXNlRHJhZ2dhYmxlIiwiaiIsImRyYWdnYWJsZUEiLCJkcmFnZ2FibGVCIiwiZ2V0Q3VycmVudFBpbm5lZFBvc2l0aW9ucyIsImNvbnRhaW5lckVsZW1lbnQiLCJlbGVtZW50cyIsImZyb20iLCJhcnJheU1vdmUiLCJ0byIsIkJ1YmJsaW5nTGlzdCIsImF1dG9EZXRlY3RWZXJ0aWNhbEdhcCIsImF1dG9EZXRlY3RTdGFydFBvc2l0aW9uIiwidmVydGljYWxHYXAiLCJzb3J0ZWQiLCJzdGFydFBvc2l0aW9uIiwib25EcmFnU3RhcnQiLCJjYWNoZWRTb3J0ZWREcmFnZ2FibGVzIiwiaW5kZXhPZkFjdGl2ZURyYWdnYWJsZSIsInByZXZEcmFnZ2FibGUiLCJuZXh0RHJhZ2dhYmxlIiwiY3VycmVudE9yZGVyIiwiQm9vbGVhbiIsImN1cnJlbnRQb3NpdGlvbiIsImRyYWdnYWJsZU5ld1Bvc2l0aW9uIiwiY3VycmVudERyYWdnYWJsZSIsImNvbXBhcmUiLCJpbmNsdWRlcyIsImJ1YmJsaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFBQSxTQUFTQSx1QkFBVCxDQUFpQ0MsT0FBakMsRUFBMENDLEtBQTFDLEVBQWlEO0VBQy9DLEVBQU9BLE9BQUFBLEtBQUssQ0FBQ0MsTUFBTixDQUFh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Q0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLFlBQVk7RUFDbkQsUUFBUSxJQUFJLEVBQUUsR0FBRyxJQUFJLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLEVBQUUsTUFBTSxHQUFHLEVBQUUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLEVBQUUsTUFBTSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUM7RUFDcEosUUFBUSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUM7RUFDaEgsS0FBSyxDQUFDO0VBQ04sSUFBSSxlQUFlLENBQUMsUUFBUSxHQUFHLFVBQVUsU0FBUyxFQUFFO0VBQ3BELFFBQVEsT0FBTyxJQUFJLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7RUFDaEcsS0FBSyxDQUFDO0VBQ04sSUFBSSxPQUFPLGVBQWUsQ0FBQztFQUMzQixDQUFDLEVBQUUsQ0FBQzs7RUNyQkosSUFBSSxLQUFLLEdBQUcsVUFBVSxNQUFNLEVBQUUsRUFBRSxPQUFPLE1BQU0sWUFBWSxVQUFVLElBQUksU0FBUyxJQUFJLE1BQU0sQ0FBQyxFQUFFLENBQUM7RUFDOUYsSUFBSSxRQUFRLEdBQUcsVUFBVSxNQUFNLEVBQUU7RUFDakMsSUFBSSxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMs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
