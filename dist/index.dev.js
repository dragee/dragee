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
          if (this.isTouchEvent && this.emulateNativeDragAndDropOnTouch || this.emulateNativeDragAndDropOnAllDevices) {
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
      key: "emulateNativeDragAndDropOnAllDevices",
      get: function get() {
        return this.options.emulateNativeDragAndDropOnAllDevices || false;
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
        sortedDraggables || (sortedDraggables = this.getSortedDraggables());
        sortedDraggables.forEach(function (draggable) {
          if (!draggable.pinnedPosition.compare(currentPosition)) {
            if (draggable === currentDraggable && !currentDraggable.shouldUseNativeDragAndDrop()) {
              draggable.pinnedPosition = currentPosition.clone();
            } else {
              draggable.pinPosition(currentPosition, draggable === currentDraggable ? 0 : _this2.options.timeExcange);
            }
          }

          currentPosition.y = currentPosition.y + draggable.getSize().y + (_this2.verticalGap || 0);
        });
      }
    }, {
      key: "remove",
      value: function remove(draggables) {
        var _this3 = this;

        if (!(draggables instanceof Array)) {
          draggables = [draggables];
        }

        draggables.forEach(function (draggable) {
          return _this3.releaseDraggable(draggable);
        });
        this.draggables = this.draggables.filter(function (d) {
          return !draggables.includes(d);
        });
        this.draggables.forEach(function (d) {
          return d.startPositioning();
        });
        this.autoDetectStartPosition();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZGV2LmpzIiwic291cmNlcyI6WyIuLi9zcmMvZ2VvbWV0cnkvcG9pbnQuanMiLCIuLi9zcmMvZ2VvbWV0cnkvcmVjdGFuZ2xlLmpzIiwiLi4vc3JjL3V0aWxzL2dldC1kZWZhdWx0LWNvbnRhaW5lci5qcyIsIi4uL3NyYy9ldmVudEVtaXR0ZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvZGVzYW5kcm8tZ2V0LXN0eWxlLXByb3BlcnR5L2dldC1zdHlsZS1wcm9wZXJ0eS5qcyIsIi4uL3NyYy9nZW9tZXRyeS9kaXN0YW5jZXMuanMiLCIuLi9zcmMvZ2VvbWV0cnkvYm91bmRzLmpzIiwiLi4vc3JjL2dlb21ldHJ5L2FuZ2xlcy5qcyIsIi4uL3NyYy9ib3VuZGluZy5qcyIsIi4uL3NyYy91dGlscy9yZW1vdmUtYXJyYXktaXRlbS5qcyIsIi4uL3NyYy91dGlscy9yYW5nZS5qcyIsIi4uL3NyYy9wb3NpdGlvbmluZy5qcyIsIi4uL3NyYy90YXJnZXQuanMiLCIuLi9zcmMvc2NvcGUuanMiLCIuLi9zcmMvdXRpbHMvaXMtc3VwcG9ydC1wYXNzaXZlLWV2ZW50cy5qcyIsIi4uL3NyYy9kcmFnZ2FibGUuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL3V0aWxzL3Jlc2l6ZU9ic2VydmVycy5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvYWxnb3JpdGhtcy9oYXNBY3RpdmVPYnNlcnZhdGlvbnMuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL2FsZ29yaXRobXMvaGFzU2tpcHBlZE9ic2VydmF0aW9ucy5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvYWxnb3JpdGhtcy9kZWxpdmVyUmVzaXplTG9vcEVycm9yLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BqdWdnbGUvcmVzaXplLW9ic2VydmVyL2xpYi9SZXNpemVPYnNlcnZlckJveE9wdGlvbnMuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL3V0aWxzL2ZyZWV6ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvUmVzaXplT2JzZXJ2ZXJTaXplLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BqdWdnbGUvcmVzaXplLW9ic2VydmVyL2xpYi9ET01SZWN0UmVhZE9ubHkuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL3V0aWxzL2VsZW1lbnQuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL3V0aWxzL2dsb2JhbC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvYWxnb3JpdGhtcy9jYWxjdWxhdGVCb3hTaXplLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BqdWdnbGUvcmVzaXplLW9ic2VydmVyL2xpYi9SZXNpemVPYnNlcnZlckVudHJ5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BqdWdnbGUvcmVzaXplLW9ic2VydmVyL2xpYi9hbGdvcml0aG1zL2NhbGN1bGF0ZURlcHRoRm9yTm9kZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvYWxnb3JpdGhtcy9icm9hZGNhc3RBY3RpdmVPYnNlcnZhdGlvbnMuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL2FsZ29yaXRobXMvZ2F0aGVyQWN0aXZlT2JzZXJ2YXRpb25zQXREZXB0aC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvdXRpbHMvcHJvY2Vzcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvdXRpbHMvcXVldWVNaWNyb1Rhc2suanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL3V0aWxzL3F1ZXVlUmVzaXplT2JzZXJ2ZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL3V0aWxzL3NjaGVkdWxlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvUmVzaXplT2JzZXJ2YXRpb24uanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL1Jlc2l6ZU9ic2VydmVyRGV0YWlsLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BqdWdnbGUvcmVzaXplLW9ic2VydmVyL2xpYi9SZXNpemVPYnNlcnZlckNvbnRyb2xsZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL1Jlc2l6ZU9ic2VydmVyLmpzIiwiLi4vc3JjL3V0aWxzL2RlYm91bmNlLmpzIiwiLi4vc3JjL2xpc3QuanMiLCIuLi9zcmMvYnViYmxpbmdMaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGdldFN1bVZhbHVlT2ZTdHlsZVJ1bGVzKGVsZW1lbnQsIHJ1bGVzKSB7XG4gIHJldHVybiBydWxlcy5yZWR1Y2UoKHN1bSwgcnVsZSkgPT4ge1xuICAgIHJldHVybiBzdW0gKyBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KVtydWxlXXx8MClcbiAgfSwgMClcbn1cblxuLyoqIENsYXNzIHJlcHJlc2VudGluZyBhIHBvaW50LiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9pbnQge1xuICAvKipcbiAgKiBDcmVhdGUgYSBwb2ludC5cbiAgKiBAcGFyYW0ge251bWJlcn0geCAtIFRoZSB4IHZhbHVlLlxuICAqIEBwYXJhbSB7bnVtYmVyfSB5IC0gVGhlIHkgdmFsdWUuXG4gICovXG4gIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICB0aGlzLnggPSB4XG4gICAgdGhpcy55ID0geVxuICB9XG5cbiAgYWRkKHApIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCArIHAueCwgdGhpcy55ICsgcC55KVxuICB9XG5cbiAgc3ViKHApIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCAtIHAueCwgdGhpcy55IC0gcC55KVxuICB9XG5cbiAgbXVsdChrKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnggKiBrLCB0aGlzLnkgKiBrKVxuICB9XG5cbiAgbmVnYXRpdmUoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCgtdGhpcy54LCAtdGhpcy55KVxuICB9XG5cbiAgY29tcGFyZShwKSB7XG4gICAgcmV0dXJuICh0aGlzLnggPT09IHAueCAmJiB0aGlzLnkgPT09IHAueSlcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54LCB0aGlzLnkpXG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gYHt4PSR7dGhpcy54fSx5PSR7dGhpcy55fWBcbiAgfVxuXG4gIHN0YXRpYyBlbGVtZW50T2Zmc2V0KGVsZW1lbnQsIHBhcmVudCkge1xuICAgIHBhcmVudCA9IHBhcmVudCB8fCBlbGVtZW50LnBhcmVudE5vZGVcbiAgICBjb25zdCBlbGVtZW50UmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICBjb25zdCBwYXJlbnRSZWN0ID0gcGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgcmV0dXJuIG5ldyBQb2ludChcbiAgICAgIGVsZW1lbnRSZWN0LmxlZnQgLSBwYXJlbnRSZWN0LmxlZnQsXG4gICAgICBlbGVtZW50UmVjdC50b3AgLSBwYXJlbnRSZWN0LnRvcFxuICAgIClcbiAgfVxuXG4gIHN0YXRpYyBlbGVtZW50U2l6ZShlbGVtZW50LCBpc0NvbnRlbnRCb3hTaXplPWZhbHNlKSB7XG4gICAgbGV0IHdpZHRoID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudClbJ3dpZHRoJ10pXG4gICAgbGV0IGhlaWdodCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpWydoZWlnaHQnXSlcbiAgICBpZiAoIWlzQ29udGVudEJveFNpemUpIHtcbiAgICAgIHdpZHRoICs9IGdldFN1bVZhbHVlT2ZTdHlsZVJ1bGVzKGVsZW1lbnQsIFsncGFkZGluZy1sZWZ0JywgJ3BhZGRpbmctcmlnaHQnLCAnYm9yZGVyLWxlZnQtd2lkdGgnLCAnYm9yZGVyLXJpZ2h0LXdpZHRoJ10pXG4gICAgICBoZWlnaHQgKz0gZ2V0U3VtVmFsdWVPZlN0eWxlUnVsZXMoZWxlbWVudCwgWydwYWRkaW5nLXRvcCcsICdwYWRkaW5nLWJvdHRvbScsICdib3JkZXItdG9wLXdpZHRoJywgJ2JvcmRlci1ib3R0b20td2lkdGgnXSlcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBQb2ludCh3aWR0aCwgaGVpZ2h0KVxuICB9XG59XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9wb2ludCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVjdGFuZ2xlIHtcbiAgY29uc3RydWN0b3IocG9zaXRpb24sIHNpemUpIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb25cbiAgICB0aGlzLnNpemUgPSBzaXplXG4gIH1cblxuICBnZXRQMSgpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvblxuICB9XG5cbiAgZ2V0UDIoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnNpemUueCwgdGhpcy5wb3NpdGlvbi55KVxuICB9XG5cbiAgZ2V0UDMoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb24uYWRkKHRoaXMuc2l6ZSlcbiAgfVxuXG4gIGdldFA0KCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSlcbiAgfVxuXG4gIGdldENlbnRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi5hZGQodGhpcy5zaXplLm11bHQoMC41KSlcbiAgfVxuXG4gIG9yKHJlY3QpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IG5ldyBQb2ludChNYXRoLm1pbih0aGlzLnBvc2l0aW9uLngsIHJlY3QucG9zaXRpb24ueCksIE1hdGgubWluKHRoaXMucG9zaXRpb24ueSwgcmVjdC5wb3NpdGlvbi55KSlcbiAgICBjb25zdCBzaXplID0gKG5ldyBQb2ludChNYXRoLm1heCh0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnNpemUueCwgcmVjdC5wb3NpdGlvbi54ICsgcmVjdC5zaXplLngpLCBNYXRoLm1heCh0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSwgcmVjdC5wb3NpdGlvbi55ICsgcmVjdC5zaXplLnkpKSkuc3ViKHBvc2l0aW9uKVxuICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHBvc2l0aW9uLCBzaXplKVxuICB9XG5cbiAgYW5kKHJlY3QpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IG5ldyBQb2ludChNYXRoLm1heCh0aGlzLnBvc2l0aW9uLngsIHJlY3QucG9zaXRpb24ueCksIE1hdGgubWF4KHRoaXMucG9zaXRpb24ueSwgcmVjdC5wb3NpdGlvbi55KSlcbiAgICBjb25zdCBzaXplID0gKG5ldyBQb2ludChNYXRoLm1pbih0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnNpemUueCwgcmVjdC5wb3NpdGlvbi54ICsgcmVjdC5zaXplLngpLCBNYXRoLm1pbih0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSwgcmVjdC5wb3NpdGlvbi55ICsgcmVjdC5zaXplLnkpKSkuc3ViKHBvc2l0aW9uKVxuICAgIGlmIChzaXplLnggPD0gMCB8fCBzaXplLnkgPD0gMCkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUocG9zaXRpb24sIHNpemUpXG4gIH1cblxuICBpbmNsdWRlUG9pbnQocCkge1xuICAgIHJldHVybiAhKHRoaXMucG9zaXRpb24ueCA+IHAueCB8fCB0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnNpemUueCA8IHAueCB8fCB0aGlzLnBvc2l0aW9uLnkgPiBwLnkgfHwgdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnkgPCBwLnkpXG4gIH1cblxuICBpbmNsdWRlUmVjdGFuZ2xlKHJlY3RhbmdsZSkge1xuICAgIHJldHVybiB0aGlzLmluY2x1ZGVQb2ludChyZWN0YW5nbGUucG9zaXRpb24pICYmIHRoaXMuaW5jbHVkZVBvaW50KHJlY3RhbmdsZS5nZXRQMygpKVxuICB9XG5cbiAgbW92ZVRvQm91bmQocmVjdCwgYXhpcykge1xuICAgIGxldCBzZWxBeGlzLCBjcm9zc1JlY3RhbmdsZVxuICAgIGlmIChheGlzKSB7XG4gICAgICBzZWxBeGlzID0gYXhpc1xuICAgIH0gZWxzZSB7XG4gICAgICBjcm9zc1JlY3RhbmdsZSA9IHRoaXMuYW5kKHJlY3QpXG4gICAgICBpZiAoIWNyb3NzUmVjdGFuZ2xlKSB7XG4gICAgICAgIHJldHVybiByZWN0XG4gICAgICB9XG4gICAgICBzZWxBeGlzID0gY3Jvc3NSZWN0YW5nbGUuc2l6ZS54ID4gY3Jvc3NSZWN0YW5nbGUuc2l6ZS55ID8gJ3knIDogJ3gnXG4gICAgfVxuICAgIGNvbnN0IHRoaXNDZW50ZXIgPSB0aGlzLmdldENlbnRlcigpXG4gICAgY29uc3QgcmVjdENlbnRlciA9IHJlY3QuZ2V0Q2VudGVyKClcbiAgICBjb25zdCBzaWduID0gdGhpc0NlbnRlcltzZWxBeGlzXSA+IHJlY3RDZW50ZXJbc2VsQXhpc10gPyAtMSA6IDFcbiAgICBjb25zdCBvZmZzZXQgPSBzaWduID4gMCA/IHRoaXMucG9zaXRpb25bc2VsQXhpc10gKyB0aGlzLnNpemVbc2VsQXhpc10gLSByZWN0LnBvc2l0aW9uW3NlbEF4aXNdIDogdGhpcy5wb3NpdGlvbltzZWxBeGlzXSAtIChyZWN0LnBvc2l0aW9uW3NlbEF4aXNdICsgcmVjdC5zaXplW3NlbEF4aXNdKVxuICAgIHJlY3QucG9zaXRpb25bc2VsQXhpc10gPSByZWN0LnBvc2l0aW9uW3NlbEF4aXNdICsgb2Zmc2V0XG4gICAgcmV0dXJuIHJlY3RcbiAgfVxuXG4gIGdldFNxdWFyZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zaXplLnggKiB0aGlzLnNpemUueVxuICB9XG5cbiAgc3R5bGVBcHBseShlbCkge1xuICAgIGVsID0gZWwgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5kJylcbiAgICBlbC5zdHlsZS5sZWZ0ID0gdGhpcy5wb3NpdGlvbi54ICsgJ3B4J1xuICAgIGVsLnN0eWxlLnRvcCA9IHRoaXMucG9zaXRpb24ueSArICdweCdcbiAgICBlbC5zdHlsZS53aWR0aCA9IHRoaXMuc2l6ZS54ICsgJ3B4J1xuICAgIGVsLnN0eWxlLmhlaWdodCA9IHRoaXMuc2l6ZS55ICsgJ3B4J1xuICB9XG5cbiAgZ3Jvd3RoKHNpemUpIHtcbiAgICB0aGlzLnNpemUgPSB0aGlzLnNpemUuYWRkKHNpemUpXG4gICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMucG9zaXRpb24uYWRkKHNpemUubXVsdCgtMC41KSlcbiAgfVxuXG4gIGdldE1pblNpZGUoKSB7XG4gICAgcmV0dXJuIE1hdGgubWluKHRoaXMuc2l6ZS54LCB0aGlzLnNpemUueSlcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRWxlbWVudChlbGVtZW50LCBwYXJlbnQ9ZWxlbWVudC5wYXJlbnROb2RlLCBpc0NvbnRlbnRCb3hTaXplPWZhbHNlLCBpc0NvbnNpZGVyVHJhbnNsYXRlPWZhbHNlKSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBQb2ludC5lbGVtZW50T2Zmc2V0KGVsZW1lbnQsIHBhcmVudCwgaXNDb25zaWRlclRyYW5zbGF0ZSlcbiAgICBjb25zdCBzaXplID0gUG9pbnQuZWxlbWVudFNpemUoZWxlbWVudCwgaXNDb250ZW50Qm94U2l6ZSlcbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZShwb3NpdGlvbiwgc2l6ZSlcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0RGVmYXVsdENvbnRhaW5lcihlbGVtZW50KSB7XG4gIGxldCBjb250YWluZXIgPSBlbGVtZW50LnBhcmVudE5vZGVcbiAgd2hpbGUgKGNvbnRhaW5lci5wYXJlbnROb2RlICYmIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGNvbnRhaW5lcilbJ3Bvc2l0aW9uJ10gPT09ICdzdGF0aWMnICYmIGNvbnRhaW5lci50YWdOYW1lICE9PSAnQk9EWScpIHtcbiAgICBjb250YWluZXIgPSBjb250YWluZXIucGFyZW50Tm9kZVxuICB9XG4gIHJldHVybiBjb250YWluZXJcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yIChvcHRpb25zID0ge30pIHtcbiAgICB0aGlzLmV2ZW50cyA9IHt9XG5cbiAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLm9uKSB7XG4gICAgICBmb3IgKGNvbnN0IFtldmVudE5hbWUsIGZuXSBvZiBPYmplY3QuZW50cmllcyhvcHRpb25zLm9uKSkge1xuICAgICAgICB0aGlzLm9uKGV2ZW50TmFtZSwgZm4pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZW1pdChldmVudE5hbWUpIHtcbiAgICB0aGlzLmludGVycnVwdGVkID0gZmFsc2VcbiAgICBjb25zdCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpXG5cbiAgICBpZiAoIXRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHJldHVyblxuXG4gICAgZm9yIChjb25zdCBmdW5jIG9mIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIGZ1bmMoLi4uYXJncylcbiAgICAgIGlmICh0aGlzLmludGVycnVwdGVkKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGludGVycnVwdCgpIHtcbiAgICB0aGlzLmludGVycnVwdGVkID0gdHJ1ZVxuICB9XG5cbiAgb24oZXZlbnROYW1lLCBmbikge1xuICAgIGlmICghdGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IFtdXG4gICAgfVxuXG4gICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5wdXNoKGZuKVxuICB9XG5cbiAgcHJlcGVuZE9uKGV2ZW50TmFtZSwgZm4pIHtcbiAgICBpZiAoIXRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSBbXVxuICAgIH1cblxuICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0udW5zaGlmdChmbilcbiAgfVxuXG4gIHVuc3Vic2NyaWJlKGV2ZW50TmFtZSwgZm4pIHtcbiAgICBpZiAodGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmV2ZW50c1tldmVudE5hbWVdLmluZGV4T2YoZm4pXG4gICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLnNwbGljZShpbmRleCwgMSlcbiAgICB9XG4gIH1cblxuICByZXNldEVtaXR0ZXIgKCkge1xuICAgIHRoaXMuZXZlbnRzID0ge31cbiAgfVxuXG4gIHJlc2V0T24oZXZlbnROYW1lKSB7XG4gICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IFtdXG4gIH1cbn1cbiIsIi8qIVxuICogZ2V0U3R5bGVQcm9wZXJ0eSB2MS4wLjRcbiAqIG9yaWdpbmFsIGJ5IGthbmdheFxuICogaHR0cDovL3BlcmZlY3Rpb25raWxscy5jb20vZmVhdHVyZS10ZXN0aW5nLWNzcy1wcm9wZXJ0aWVzL1xuICogTUlUIGxpY2Vuc2VcbiAqL1xuXG4vKmpzaGludCBicm93c2VyOiB0cnVlLCBzdHJpY3Q6IHRydWUsIHVuZGVmOiB0cnVlICovXG4vKmdsb2JhbCBkZWZpbmU6IGZhbHNlLCBleHBvcnRzOiBmYWxzZSwgbW9kdWxlOiBmYWxzZSAqL1xuXG4oIGZ1bmN0aW9uKCB3aW5kb3cgKSB7XG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHByZWZpeGVzID0gJ1dlYmtpdCBNb3ogbXMgTXMgTycuc3BsaXQoJyAnKTtcbnZhciBkb2NFbGVtU3R5bGUgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGU7XG5cbmZ1bmN0aW9uIGdldFN0eWxlUHJvcGVydHkoIHByb3BOYW1lICkge1xuICBpZiAoICFwcm9wTmFtZSApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyB0ZXN0IHN0YW5kYXJkIHByb3BlcnR5IGZpcnN0XG4gIGlmICggdHlwZW9mIGRvY0VsZW1TdHlsZVsgcHJvcE5hbWUgXSA9PT0gJ3N0cmluZycgKSB7XG4gICAgcmV0dXJuIHByb3BOYW1lO1xuICB9XG5cbiAgLy8gY2FwaXRhbGl6ZVxuICBwcm9wTmFtZSA9IHByb3BOYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcHJvcE5hbWUuc2xpY2UoMSk7XG5cbiAgLy8gdGVzdCB2ZW5kb3Igc3BlY2lmaWMgcHJvcGVydGllc1xuICB2YXIgcHJlZml4ZWQ7XG4gIGZvciAoIHZhciBpPTAsIGxlbiA9IHByZWZpeGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrICkge1xuICAgIHByZWZpeGVkID0gcHJlZml4ZXNbaV0gKyBwcm9wTmFtZTtcbiAgICBpZiAoIHR5cGVvZiBkb2NFbGVtU3R5bGVbIHByZWZpeGVkIF0gPT09ICdzdHJpbmcnICkge1xuICAgICAgcmV0dXJuIHByZWZpeGVkO1xuICAgIH1cbiAgfVxufVxuXG4vLyB0cmFuc3BvcnRcbmlmICggdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAvLyBBTURcbiAgZGVmaW5lKCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZ2V0U3R5bGVQcm9wZXJ0eTtcbiAgfSk7XG59IGVsc2UgaWYgKCB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgKSB7XG4gIC8vIENvbW1vbkpTIGZvciBDb21wb25lbnRcbiAgbW9kdWxlLmV4cG9ydHMgPSBnZXRTdHlsZVByb3BlcnR5O1xufSBlbHNlIHtcbiAgLy8gYnJvd3NlciBnbG9iYWxcbiAgd2luZG93LmdldFN0eWxlUHJvcGVydHkgPSBnZXRTdHlsZVByb3BlcnR5O1xufVxuXG59KSggd2luZG93ICk7XG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0RGlzdGFuY2UocDEsIHAyKSB7XG4gIGNvbnN0IGR4ID0gcDEueCAtIHAyLngsIGR5ID0gcDEueSAtIHAyLnlcbiAgcmV0dXJuIE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFhEaWZmZXJlbmNlKHAxLCBwMikge1xuICByZXR1cm4gTWF0aC5hYnMocDEueCAtIHAyLngpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRZRGlmZmVyZW5jZShwMSwgcDIpIHtcbiAgcmV0dXJuIE1hdGguYWJzKHAxLnkgLSBwMi55KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtZWRTcGFjZURpc3RhbmNlRmFjdG9yeShvcHRpb25zKSB7XG4gIHJldHVybiAocDEsIHAyKSA9PiB7XG4gICAgcmV0dXJuIE1hdGguc3FydChcbiAgICAgIE1hdGgucG93KG9wdGlvbnMueCAqIE1hdGguYWJzKHAxLnggLSBwMi54KSwgMikgK1xuICAgICAgTWF0aC5wb3cob3B0aW9ucy55ICogTWF0aC5hYnMocDEueSAtIHAyLnkpLCAyKVxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5kZXhPZk5lYXJlc3RQb2ludChhcnIsIHZhbCwgcmFkaXVzLCBnZXREaXN0YW5jZUZ1bmM9Z2V0RGlzdGFuY2UpIHtcbiAgbGV0IHNpemUsIGluZGV4ID0gMCwgaSwgdGVtcFxuICBpZiAoYXJyLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAtMVxuICB9XG4gIHNpemUgPSBnZXREaXN0YW5jZUZ1bmMoYXJyWzBdLCB2YWwpXG4gIGZvciAoaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICB0ZW1wID0gZ2V0RGlzdGFuY2VGdW5jKGFycltpXSwgdmFsKVxuICAgIGlmICh0ZW1wIDwgc2l6ZSkge1xuICAgICAgc2l6ZSA9IHRlbXBcbiAgICAgIGluZGV4ID0gaVxuICAgIH1cbiAgfVxuICBpZiAocmFkaXVzID49IDAgJiYgc2l6ZSA+IHJhZGl1cykge1xuICAgIHJldHVybiAtMVxuICB9XG4gIHJldHVybiBpbmRleFxufVxuIiwiaW1wb3J0IFBvaW50IGZyb20gJy4vcG9pbnQnXG5pbXBvcnQgeyBnZXREaXN0YW5jZSB9IGZyb20gJy4vZGlzdGFuY2VzJ1xuXG5leHBvcnQgZnVuY3Rpb24gY2xhbXAobWluLCBtYXgsIHZhbCkge1xuICByZXR1cm4gTWF0aC5tYXgobWluLCBNYXRoLm1pbihtYXgsIHZhbCkpXG59XG5cbi8vUmV0dXJuIGNyb3NzaW5nIHBvaW50IG9mIHR3byBsaW5lc1xuZXhwb3J0IGZ1bmN0aW9uIGRpcmVjdENyb3NzaW5nKEwxUDEsIEwxUDIsIEwyUDEsIEwyUDIpIHtcbiAgbGV0IHRlbXAsIGsxLCBrMiwgYjEsIGIyLCB4LCB5XG4gIGlmIChMMlAxLnggPT09IEwyUDIueCkge1xuICAgIHRlbXAgPSBMMlAxXG4gICAgTDJQMSA9IEwxUDFcbiAgICBMMVAxID0gdGVtcFxuICAgIHRlbXAgPSBMMlAyXG4gICAgTDJQMiA9IEwxUDJcbiAgICBMMVAyID0gdGVtcFxuICB9XG4gIGlmIChMMVAxLnggPT09IEwxUDIueCkge1xuICAgIGsyID0gKEwyUDIueSAtIEwyUDEueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgIGIyID0gKEwyUDIueCAqIEwyUDEueSAtIEwyUDEueCAqIEwyUDIueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgIHggPSBMMVAxLnhcbiAgICB5ID0geCAqIGsyICsgYjJcbiAgICByZXR1cm4gbmV3IFBvaW50KHgsIHkpXG4gIH0gZWxzZSB7XG4gICAgazEgPSAoTDFQMi55IC0gTDFQMS55KSAvIChMMVAyLnggLSBMMVAxLngpXG4gICAgYjEgPSAoTDFQMi54ICogTDFQMS55IC0gTDFQMS54ICogTDFQMi55KSAvIChMMVAyLnggLSBMMVAxLngpXG4gICAgazIgPSAoTDJQMi55IC0gTDJQMS55KSAvIChMMlAyLnggLSBMMlAxLngpXG4gICAgYjIgPSAoTDJQMi54ICogTDJQMS55IC0gTDJQMS54ICogTDJQMi55KSAvIChMMlAyLnggLSBMMlAxLngpXG4gICAgeCA9IChiMSAtIGIyKSAvIChrMiAtIGsxKVxuICAgIHkgPSB4ICogazEgKyBiMVxuICAgIHJldHVybiBuZXcgUG9pbnQoeCwgeSlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRUb1NlZ21lbnQoTFAxLCBMUDIsIFApIHtcbiAgbGV0IHgsIHlcbiAgeCA9IGNsYW1wKE1hdGgubWluKExQMS54LCBMUDIueCksIE1hdGgubWF4KExQMS54LCBMUDIueCksIFAueClcbiAgaWYgKHggIT09IFAueCkge1xuICAgIHkgPSAoeCA9PT0gTFAxLngpID8gTFAxLnkgOiBMUDIueVxuICAgIFAgPSBuZXcgUG9pbnQoeCwgeSlcbiAgfVxuXG4gIHkgPSBjbGFtcChNYXRoLm1pbihMUDEueSwgTFAyLnkpLCBNYXRoLm1heChMUDEueSwgTFAyLnkpLCBQLnkpXG4gIGlmICh5ICE9PSBQLnkpIHtcbiAgICB4ID0gKHkgPT09IExQMS55KSA/IExQMS54IDogTFAyLnhcbiAgICBQID0gbmV3IFBvaW50KHgsIHkpXG4gIH1cblxuICByZXR1cm4gUFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRUb0xpbmUoQSwgQiwgUCkge1xuICBjb25zdCBBUCA9IG5ldyBQb2ludChQLnggLSBBLngsIFAueSAtIEEueSksXG4gICAgQUIgPSBuZXcgUG9pbnQoQi54IC0gQS54LCBCLnkgLSBBLnkpLFxuICAgIGFiMiA9IEFCLnggKiBBQi54ICsgQUIueSAqIEFCLnksXG4gICAgYXBfYWIgPSBBUC54ICogQUIueCArIEFQLnkgKiBBQi55LFxuICAgIHQgPSBhcF9hYiAvIGFiMlxuICByZXR1cm4gbmV3IFBvaW50KEEueCArIEFCLnggKiB0LCBBLnkgKyBBQi55ICogdClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBvaW50T25MaW5lKExQMSwgTFAyLCBwZXJjZW50KSB7XG4gIGNvbnN0IGR4ID0gTFAyLnggLSBMUDEueCwgZHkgPSBMUDIueSAtIExQMS55XG4gIHJldHVybiBuZXcgUG9pbnQoTFAxLnggKyBwZXJjZW50ICogZHgsIExQMS55ICsgcGVyY2VudCAqIGR5KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9pbnRPbkxpbmVCeUxlbmdodChMUDEsIExQMiwgbGVuZ2h0KSB7XG4gIGNvbnN0IGR4ID0gTFAyLnggLSBMUDEueFxuICBjb25zdCBkeSA9IExQMi55IC0gTFAxLnlcbiAgY29uc3QgcGVyY2VudCA9IGxlbmdodCAvIGdldERpc3RhbmNlKExQMSwgTFAyKVxuICByZXR1cm4gbmV3IFBvaW50KExQMS54ICsgcGVyY2VudCAqIGR4LCBMUDEueSArIHBlcmNlbnQgKiBkeSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFBvaW50VG9Cb3VuZFBvaW50cyhib3VuZHBvaW50cywgcG9pbnQsIGlzUmlnaHQpIHtcbiAgY29uc3QgcmVzdWx0ID0gYm91bmRwb2ludHMuZmlsdGVyKChiUG9pbnQpID0+IHtcbiAgICByZXR1cm4gYlBvaW50LnkgPiBwb2ludC55IHx8IChpc1JpZ2h0ID8gYlBvaW50LnggPCBwb2ludC54IDogYlBvaW50LnggPiBwb2ludC54KVxuICB9KVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzdWx0Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHBvaW50LnkgPCByZXN1bHRbaV0ueSkge1xuICAgICAgcmVzdWx0LnNwbGljZShpLCAwLCBwb2ludClcbiAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG4gIH1cbiAgcmVzdWx0LnB1c2gocG9pbnQpXG4gIHJldHVybiByZXN1bHRcbn1cbiIsImltcG9ydCBQb2ludCBmcm9tICcuL3BvaW50J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QW5nbGVEaWZmKGFscGhhLCBiZXRhKSB7XG4gIGNvbnN0IG1pbkFuZ2xlID0gTWF0aC5taW4oYWxwaGEsIGJldGEpXG4gIGNvbnN0IG1heEFuZ2xlID0gIE1hdGgubWF4KGFscGhhLCBiZXRhKVxuICByZXR1cm4gTWF0aC5taW4obWF4QW5nbGUgLSBtaW5BbmdsZSwgbWluQW5nbGUgKyBNYXRoLlBJKjIgLSBtYXhBbmdsZSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFuZ2xlKHAxLCBwMikge1xuICBjb25zdCBkaWZmID0gcDIuc3ViKHAxKVxuICByZXR1cm4gbm9ybWFsaXplQW5nbGUoTWF0aC5hdGFuMihkaWZmLnksIGRpZmYueCkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b1JhZGlhbihhbmdsZSkge1xuICByZXR1cm4gKChhbmdsZSAlIDM2MCkgKiBNYXRoLlBJIC8gMTgwKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9EZWdyZWUoYW5nbGUpIHtcbiAgcmV0dXJuIChhbmdsZSAqIDE4MCAvIE1hdGguUEkpICUgMzYwXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZEFuZ2xlKG1pbiwgbWF4LCB2YWwpIHtcbiAgbGV0IGRtaW4sIGRtYXhcbiAgaWYgKG1pbiA8IG1heCAmJiB2YWwgPiBtaW4gJiYgdmFsIDwgbWF4KSB7XG4gICAgcmV0dXJuIHZhbFxuICB9IGVsc2UgaWYgKG1heCA8IG1pbiAmJiAodmFsIDwgbWF4IHx8IHZhbCA+IG1pbikpIHtcbiAgICByZXR1cm4gdmFsXG4gIH0gZWxzZSB7XG4gICAgZG1pbiA9IGdldEFuZ2xlRGlmZihtaW4sIHZhbClcbiAgICBkbWF4ID0gZ2V0QW5nbGVEaWZmKG1heCwgdmFsKVxuICAgIGlmIChkbWluIDwgZG1heCkge1xuICAgICAgcmV0dXJuIG1pblxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbWF4XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROZWFyZXN0QW5nbGUoYXJyLCBhbmdsZSkge1xuICBsZXQgaSwgdGVtcCwgZGlmZiA9IE1hdGguUEkgKiAyLCB2YWx1ZVxuICBmb3IgKGkgPSAwOyBpIDwgYXJyLmxlbmd0aDtpKyspIHtcbiAgICB0ZW1wID0gZ2V0QW5nbGVEaWZmKGFycltpXSwgYW5nbGUpXG4gICAgaWYgKGRpZmYgPCB0ZW1wKSB7XG4gICAgICBkaWZmID0gdGVtcFxuICAgICAgdmFsdWUgPSBhcnJbaV1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHZhbHVlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVBbmdsZSh2YWwpIHtcbiAgd2hpbGUgKHZhbCA8IDApIHtcbiAgICB2YWwgKz0gMiAqIE1hdGguUElcbiAgfVxuICB3aGlsZSAodmFsID4gMiAqIE1hdGguUEkpIHtcbiAgICB2YWwgLT0gMiAqIE1hdGguUElcbiAgfVxuICByZXR1cm4gdmFsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oYW5nbGUsIGxlbmd0aCwgY2VudGVyKSB7XG4gIGNlbnRlciA9IGNlbnRlciB8fCBuZXcgUG9pbnQoMCwgMClcbiAgcmV0dXJuIGNlbnRlci5hZGQobmV3IFBvaW50KGxlbmd0aCAqIE1hdGguY29zKGFuZ2xlKSwgbGVuZ3RoICogTWF0aC5zaW4oYW5nbGUpKSlcbn1cbiIsImltcG9ydCBQb2ludCBmcm9tICcuL2dlb21ldHJ5L3BvaW50J1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tICcuL2dlb21ldHJ5L3JlY3RhbmdsZSdcbmltcG9ydCB7XG4gIGdldFBvaW50T25MaW5lQnlMZW5naHQsXG4gIGRpcmVjdENyb3NzaW5nLFxuICBib3VuZFRvTGluZVxufSBmcm9tICcuL2dlb21ldHJ5L2JvdW5kcydcblxuaW1wb3J0IHtcbiAgZ2V0QW5nbGUsXG4gIG5vcm1hbGl6ZUFuZ2xlLFxuICBib3VuZEFuZ2xlLFxuICBnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW1cbn0gZnJvbSAnLi9nZW9tZXRyeS9hbmdsZXMnXG5cbmV4cG9ydCBjbGFzcyBCb3VuZCB7XG4gIGNvbnN0cnVjdG9yICgpIHt9XG5cbiAgYm91bmQocG9pbnQsIF9zaXplKSB7XG4gICAgcmV0dXJuIHBvaW50XG4gIH1cblxuICByZWZyZXNoICgpIHt9XG5cbiAgc3RhdGljIGJvdW5kaW5nKCkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IHRoaXMoLi4uYXJndW1lbnRzKVxuICAgIHJldHVybiBpbnN0YW5jZS5ib3VuZC5iaW5kKGluc3RhbmNlKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvUmVjdGFuZ2xlIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3RvcihyZWN0YW5nbGUpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5yZWN0YW5nbGUgPSByZWN0YW5nbGVcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgY2FsY1BvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIGNvbnN0IHJlY3RQMiA9IHRoaXMucmVjdGFuZ2xlLmdldFAzKClcblxuICAgIGlmICh0aGlzLnJlY3RhbmdsZS5wb3NpdGlvbi54ID4gY2FsY1BvaW50LngpIHtcbiAgICAgIChjYWxjUG9pbnQueCA9IHRoaXMucmVjdGFuZ2xlLnBvc2l0aW9uLngpXG4gICAgfVxuICAgIGlmICh0aGlzLnJlY3RhbmdsZS5wb3NpdGlvbi55ID4gY2FsY1BvaW50LnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gdGhpcy5yZWN0YW5nbGUucG9zaXRpb24ueVxuICAgIH1cbiAgICBpZiAocmVjdFAyLnggPCBjYWxjUG9pbnQueCArIHNpemUueCkge1xuICAgICAgY2FsY1BvaW50LnggPSByZWN0UDIueCAtIHNpemUueFxuICAgIH1cbiAgICBpZiAocmVjdFAyLnkgPCBjYWxjUG9pbnQueSArIHNpemUueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSByZWN0UDIueSAtIHNpemUueVxuICAgIH1cblxuICAgIHJldHVybiBjYWxjUG9pbnRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb0VsZW1lbnQgZXh0ZW5kcyBCb3VuZFRvUmVjdGFuZ2xlIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29udGFpbmVyKSB7XG4gICAgc3VwZXIoUmVjdGFuZ2xlLmZyb21FbGVtZW50KGVsZW1lbnQsIGNvbnRhaW5lcikpXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyXG4gIH1cblxuICByZWZyZXNoICgpIHtcbiAgICB0aGlzLnJlY3RhbmdsZSA9IFJlY3RhbmdsZS5mcm9tRWxlbWVudCh0aGlzLmVsZW1lbnQsIHRoaXMuY29udGFpbmVyKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvTGluZVggZXh0ZW5kcyBCb3VuZCB7XG4gIGNvbnN0cnVjdG9yKHgsIHN0YXJ0WSwgZW5kWSkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnggPSB4XG4gICAgdGhpcy5zdGFydFkgPSBzdGFydFlcbiAgICB0aGlzLmVuZFkgPSBlbmRZXG4gIH1cblxuICBib3VuZChwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IGNhbGNQb2ludCA9IHBvaW50LmNsb25lKClcblxuICAgIGNhbGNQb2ludC54ID0gdGhpcy54XG4gICAgaWYgKHRoaXMuc3RhcnRZID4gY2FsY1BvaW50LnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gdGhpcy5zdGFydFlcbiAgICB9XG4gICAgaWYgKHRoaXMuZW5kWSA8IGNhbGNQb2ludC55ICsgc2l6ZS55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHRoaXMuZW5kWSAtIHNpemUueVxuICAgIH1cblxuICAgIHJldHVybiBjYWxjUG9pbnRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb0xpbmVZIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3Rvcih5LCBzdGFydFgsIGVuZFgpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy55ID0geVxuICAgIHRoaXMuc3RhcnRYID0gc3RhcnRYXG4gICAgdGhpcy5lbmRYID0gZW5kWFxuICB9XG5cbiAgYm91bmQocG9pbnQsIHNpemUpIHtcbiAgICBjb25zdCBjYWxjUG9pbnQgPSBwb2ludC5jbG9uZSgpXG4gICAgY2FsY1BvaW50LnkgPSB0aGlzLnlcbiAgICBpZiAodGhpcy5zdGFydFggPiBjYWxjUG9pbnQueCkge1xuICAgICAgY2FsY1BvaW50LnggPSB0aGlzLnN0YXJ0WFxuICAgIH1cbiAgICBpZiAodGhpcy5lbmRYIDwgY2FsY1BvaW50LnggKyBzaXplLngpIHtcbiAgICAgIGNhbGNQb2ludC54ID0gdGhpcy5lbmRYIC0gc2l6ZS54XG4gICAgfVxuICAgIHJldHVybiBjYWxjUG9pbnRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb0xpbmUgZXh0ZW5kcyBCb3VuZCB7XG4gIGNvbnN0cnVjdG9yKHN0YXJ0UG9pbnQsIGVuZFBvaW50KSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuc3RhcnRQb2ludCA9IHN0YXJ0UG9pbnRcbiAgICB0aGlzLmVuZFBvaW50ID0gZW5kUG9pbnRcbiAgICBjb25zdCBhbHBoYSA9IE1hdGguYXRhbjIoZW5kUG9pbnQueSAtIHN0YXJ0UG9pbnQueSwgZW5kUG9pbnQueCAtIHN0YXJ0UG9pbnQueClcbiAgICBjb25zdCBiZXRhID0gYWxwaGEgKyBNYXRoLlBJIC8gMlxuICAgIHRoaXMuc29tZUsgPSAxMFxuICAgIHRoaXMuY29zQmV0YSA9IE1hdGguY29zKGJldGEpXG4gICAgdGhpcy5zaW5CZXRhID0gTWF0aC5zaW4oYmV0YSlcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgcG9pbnQyID0gbmV3IFBvaW50KFxuICAgICAgcG9pbnQueCArIHRoaXMuc29tZUsgKiB0aGlzLmNvc0JldGEsXG4gICAgICBwb2ludC55ICsgdGhpcy5zb21lSyAqIHRoaXMuc2luQmV0YVxuICAgIClcblxuICAgIGNvbnN0IG5ld0VuZFBvaW50ID0gZ2V0UG9pbnRPbkxpbmVCeUxlbmdodCh0aGlzLmVuZFBvaW50LCB0aGlzLnN0YXJ0UG9pbnQsIHNpemUueClcbiAgICBjb25zdCBwb2ludENyb3NzaW5nID0gZGlyZWN0Q3Jvc3NpbmcodGhpcy5zdGFydFBvaW50LCB0aGlzLmVuZFBvaW50LCBwb2ludCwgcG9pbnQyKVxuXG4gICAgcmV0dXJuIGJvdW5kVG9MaW5lKHRoaXMuc3RhcnRQb2ludCwgbmV3RW5kUG9pbnQsIHBvaW50Q3Jvc3NpbmcpXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9DaXJjbGUgZXh0ZW5kcyBCb3VuZCB7XG4gIGNvbnN0cnVjdG9yKGNlbnRlciwgcmFkaXVzKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuY2VudGVyID0gY2VudGVyXG4gICAgdGhpcy5yYWRpdXMgPSByYWRpdXNcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBfc2l6ZSkge1xuICAgIHJldHVybiBnZXRQb2ludE9uTGluZUJ5TGVuZ2h0KHRoaXMuY2VudGVyLCBwb2ludCwgdGhpcy5yYWRpdXMpXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9BcmMgZXh0ZW5kcyBCb3VuZFRvQ2lyY2xlIHtcbiAgY29uc3RydWN0b3IoY2VudGVyLCByYWRpdXMsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlKSB7XG4gICAgc3VwZXIoY2VudGVyLCByYWRpdXMpXG4gICAgdGhpcy5fc3RhcnRBbmdsZSA9IHN0YXJ0QW5nbGVcbiAgICB0aGlzLl9lbmRBbmdsZSA9IGVuZEFuZ2xlXG4gIH1cblxuICBzdGFydEFuZ2xlKCkge1xuICAgIHJldHVybiB0eXBlb2YgdGhpcy5fc3RhcnRBbmdsZSA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMuX3N0YXJ0QW5nbGUoKSA6IHRoaXMuX3N0YXJ0QW5nbGVcbiAgfVxuXG4gIGVuZEFuZ2xlKCkge1xuICAgIHJldHVybiB0eXBlb2YgdGhpcy5fZW5kQW5nbGUgPT09ICdmdW5jdGlvbicgPyB0aGlzLl9lbmRBbmdsZSgpIDogdGhpcy5fZW5kQW5nbGVcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBfc2l6ZSkge1xuICAgIGxldCBhbmdsZSA9IGdldEFuZ2xlKHRoaXMuY2VudGVyLCBwb2ludClcbiAgICBhbmdsZSA9IG5vcm1hbGl6ZUFuZ2xlKGFuZ2xlKVxuICAgIGFuZ2xlID0gYm91bmRBbmdsZSh0aGlzLnN0YXJ0QW5nbGUoKSwgdGhpcy5lbmRBbmdsZSgpLCBhbmdsZSlcbiAgICByZXR1cm4gZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKGFuZ2xlLCB0aGlzLnJhZGl1cywgdGhpcy5jZW50ZXIpXG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGFycmF5LCB2YWwpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChhcnJheVtpXSA9PT0gdmFsKSB7XG4gICAgICBhcnJheS5zcGxpY2UoaSwgMSlcbiAgICAgIGktLVxuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyYXlcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJhbmdlKHN0YXJ0LCBzdG9wLCBzdGVwKSB7XG4gIGNvbnN0IHJlc3VsdCA9IFtdXG4gIGlmICh0eXBlb2Ygc3RvcCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBzdG9wID0gc3RhcnRcbiAgICBzdGFydCA9IDBcbiAgfVxuICBpZiAodHlwZW9mIHN0ZXAgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgc3RlcCA9IDFcbiAgfVxuICBpZiAoKHN0ZXAgPiAwICYmIHN0YXJ0ID49IHN0b3ApIHx8IChzdGVwIDwgMCAmJiBzdGFydCA8PSBzdG9wKSkge1xuICAgIHJldHVybiBbXVxuICB9XG4gIGZvciAobGV0IGkgPSBzdGFydDsgc3RlcCA+IDAgPyBpIDwgc3RvcCA6IGkgPiBzdG9wOyBpICs9IHN0ZXApIHtcbiAgICByZXN1bHQucHVzaChpKVxuICB9XG4gIHJldHVybiByZXN1bHRcbn1cbiIsImltcG9ydCBQb2ludCBmcm9tICcuL2dlb21ldHJ5L3BvaW50J1xuaW1wb3J0IHsgYWRkUG9pbnRUb0JvdW5kUG9pbnRzIH0gZnJvbSAnLi9nZW9tZXRyeS9ib3VuZHMnXG5cbmltcG9ydCB7XG4gIGluZGV4T2ZOZWFyZXN0UG9pbnQsXG4gIGdldERpc3RhbmNlXG59IGZyb20gJy4vZ2VvbWV0cnkvZGlzdGFuY2VzJ1xuXG5jbGFzcyBCYXNpY1N0cmF0ZWd5IHtcbiAgY29uc3RydWN0b3IocmVjdGFuZ2xlLCBvcHRpb25zPXt9KSB7XG4gICAgdGhpcy5yZWN0YW5nbGUgPSByZWN0YW5nbGVcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zXG4gIH1cblxuICBnZXQgYm91bmRSZWN0ICgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMucmVjdGFuZ2xlID09PSAnZnVuY3Rpb24nID8gdGhpcy5yZWN0YW5nbGUoKSA6IHRoaXMucmVjdGFuZ2xlXG4gIH1cbn1cblxuY2xhc3MgTm90Q3Jvc3NpbmdTdHJhdGVneSBleHRlbmRzIEJhc2ljU3RyYXRlZ3kge1xuICBwb3NpdGlvbmluZyAocmVjdGFuZ2xlTGlzdCwgaW5kZXhlc09mTmV3cykge1xuICAgIGNvbnN0IHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMgPSByZWN0YW5nbGVMaXN0LnJlZHVjZSgoaW5kZXhlcywgX3JlY3QsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoaW5kZXhlc09mTmV3cy5pbmRleE9mKGluZGV4KSA9PT0gLTEpIHtcbiAgICAgICAgaW5kZXhlcy5wdXNoKGluZGV4KVxuICAgICAgfVxuICAgICAgcmV0dXJuIGluZGV4ZXNcbiAgICB9LCBbXSlcblxuICAgIGluZGV4ZXNPZk5ld3MuZm9yRWFjaCgoaW5kZXgpID0+IHtcbiAgICAgIGxldCByZWN0ID0gcmVjdGFuZ2xlTGlzdFtpbmRleF1cbiAgICAgIGxldCByZW1vdmFibGUgPSBmYWxzZVxuXG4gICAgICBzdGF0aWNSZWN0YW5nbGVJbmRleGVzLmZvckVhY2goKGluZGV4T2ZTdGF0aWMpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhdGljUmVjdCA9IHJlY3RhbmdsZUxpc3RbaW5kZXhPZlN0YXRpY11cbiAgICAgICAgcmVjdCA9IHN0YXRpY1JlY3QubW92ZVRvQm91bmQocmVjdClcbiAgICAgIH0pXG5cbiAgICAgIHJlbW92YWJsZSA9IHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMuc29tZSgoaW5kZXhPZlN0YXRpYykgPT4ge1xuICAgICAgICBjb25zdCBzdGF0aWNSZWN0ID0gcmVjdGFuZ2xlTGlzdFtpbmRleE9mU3RhdGljXVxuICAgICAgICByZXR1cm4gICEhc3RhdGljUmVjdC5hbmQocmVjdClcbiAgICAgIH0pIHx8IHJlY3QuYW5kKHRoaXMuYm91bmRSZWN0KS5nZXRTcXVhcmUoKSAhPT0gcmVjdC5nZXRTcXVhcmUoKVxuXG4gICAgICBpZiAocmVtb3ZhYmxlKSB7XG4gICAgICAgIHJlY3QucmVtb3ZhYmxlID0gdHJ1ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdGljUmVjdGFuZ2xlSW5kZXhlcy5wdXNoKGluZGV4KVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHJlY3RhbmdsZUxpc3RcbiAgfVxuXG4gIHNvcnRpbmcob2RsRHJhZ2dhYmxlc0xpc3QsIG5ld0RyYWdnYWJsZXMsIGluZGV4T2ZOZXdzKSB7XG4gICAgY29uc3QgZHJhZ2dhYmxlcyA9IG9kbERyYWdnYWJsZXNMaXN0LmNvbmNhdChuZXdEcmFnZ2FibGVzKVxuICAgIG5ld0RyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBpbmRleE9mTmV3cy5wdXNoKGRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpKVxuICAgIH0pXG4gICAgcmV0dXJuIGRyYWdnYWJsZXNcbiAgfVxufVxuXG5jbGFzcyBGbG9hdExlZnRTdHJhdGVneSBleHRlbmRzIEJhc2ljU3RyYXRlZ3kge1xuICBjb25zdHJ1Y3RvcihyZWN0YW5nbGUsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcihyZWN0YW5nbGUsIG9wdGlvbnMpXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICByZW1vdmFibGU6IHRydWVcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGhpcy5yYWRpdXMgPSBvcHRpb25zLnJhZGl1cyB8fCA4MFxuXG4gICAgdGhpcy5wYWRkaW5nVG9wTGVmdCA9IG9wdGlvbnMucGFkZGluZ1RvcExlZnQgfHwgbmV3IFBvaW50KDAsIDApXG4gICAgdGhpcy5wYWRkaW5nQm90dG9tUmlnaHQgPSBvcHRpb25zLnBhZGRpbmdCb3R0b21SaWdodCB8fCBuZXcgUG9pbnQoMCwgMClcbiAgICB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyA9IG9wdGlvbnMueUdhcEJldHdlZW5EcmFnZ2FibGVzIHx8IDBcblxuICAgIHRoaXMuZ2V0RGlzdGFuY2UgPSBvcHRpb25zLmdldERpc3RhbmNlIHx8IGdldERpc3RhbmNlXG4gICAgdGhpcy5nZXRQb3NpdGlvbiA9IG9wdGlvbnMuZ2V0UG9zaXRpb24gfHwgKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5wb3NpdGlvbilcbiAgfVxuXG4gIHBvc2l0aW9uaW5nKHJlY3RhbmdsZUxpc3QsIF9pbmRleGVzT2ZOZXdzKSB7XG4gICAgY29uc3QgYm91bmRSZWN0ID0gdGhpcy5ib3VuZFJlY3RcbiAgICBjb25zdCByZWN0UDIgPSBib3VuZFJlY3QuZ2V0UDIoKVxuICAgIGxldCBib3VuZGFyeVBvaW50cyA9IFtib3VuZFJlY3QucG9zaXRpb25dXG5cbiAgICByZWN0YW5nbGVMaXN0LmZvckVhY2goKHJlY3QsIHJlY3RJbmRleCkgPT4ge1xuICAgICAgbGV0IHBvc2l0aW9uLCBpc1ZhbGlkID0gZmFsc2VcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm91bmRhcnlQb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcG9zaXRpb24gPSBuZXcgUG9pbnQoXG4gICAgICAgICAgYm91bmRhcnlQb2ludHNbaV0ueCArIHRoaXMucGFkZGluZ1RvcExlZnQueCxcbiAgICAgICAgICBpID4gMCA/IChib3VuZGFyeVBvaW50c1tpIC0gMV0ueSArIHRoaXMueUdhcEJldHdlZW5EcmFnZ2FibGVzKSA6IChib3VuZFJlY3QucG9zaXRpb24ueSArIHRoaXMucGFkZGluZ1RvcExlZnQueSlcbiAgICAgICAgKVxuXG4gICAgICAgIGlzVmFsaWQgPSAocG9zaXRpb24ueCArIHJlY3Quc2l6ZS54IDwgcmVjdFAyLngpXG5cbiAgICAgICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICBwb3NpdGlvbiA9IG5ldyBQb2ludChcbiAgICAgICAgICBib3VuZFJlY3QucG9zaXRpb24ueCArIHRoaXMucGFkZGluZ1RvcExlZnQueCxcbiAgICAgICAgICBib3VuZGFyeVBvaW50c1tib3VuZGFyeVBvaW50cy5sZW5ndGggLSAxXS55ICsgKHJlY3RJbmRleCA+IDAgPyB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyA6IHRoaXMucGFkZGluZ1RvcExlZnQueSlcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICByZWN0LnBvc2l0aW9uID0gcG9zaXRpb25cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucmVtb3ZhYmxlICYmIHJlY3QuZ2V0UDMoKS55ID4gYm91bmRSZWN0LmdldFAzKCkueSkge1xuICAgICAgICByZWN0LnJlbW92YWJsZSA9IHRydWVcbiAgICAgIH1cblxuICAgICAgYm91bmRhcnlQb2ludHMgPSBhZGRQb2ludFRvQm91bmRQb2ludHMoYm91bmRhcnlQb2ludHMsIHJlY3QuZ2V0UDMoKS5hZGQodGhpcy5wYWRkaW5nQm90dG9tUmlnaHQpKVxuICAgIH0pXG4gICAgcmV0dXJuIHJlY3RhbmdsZUxpc3RcbiAgfVxuXG4gIHNvcnRpbmcob2RsRHJhZ2dhYmxlc0xpc3QsIG5ld0RyYWdnYWJsZXMsIGluZGV4T2ZOZXdzKSB7XG4gICAgY29uc3QgbmV3TGlzdCA9IG9kbERyYWdnYWJsZXNMaXN0LmNvbmNhdCgpXG4gICAgY29uc3QgbGlzdE9sZFBvc2l0aW9uID0gb2RsRHJhZ2dhYmxlc0xpc3QubWFwKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5nZXRQb3NpdGlvbigpKVxuICAgIG5ld0RyYWdnYWJsZXMuZm9yRWFjaCgobmV3RHJhZ2dhYmxlKSA9PiB7XG4gICAgICBsZXQgaW5kZXggPSBpbmRleE9mTmVhcmVzdFBvaW50KGxpc3RPbGRQb3NpdGlvbiwgdGhpcy5nZXRQb3NpdGlvbihuZXdEcmFnZ2FibGUpLCB0aGlzLnJhZGl1cywgdGhpcy5nZXREaXN0YW5jZSlcbiAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgaW5kZXggPSBuZXdMaXN0Lmxlbmd0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5kZXggPSBuZXdMaXN0LmluZGV4T2Yob2RsRHJhZ2dhYmxlc0xpc3RbaW5kZXhdKVxuICAgICAgfVxuICAgICAgbmV3TGlzdC5zcGxpY2UoaW5kZXgsIDAsIG5ld0RyYWdnYWJsZSlcbiAgICB9KVxuICAgIG5ld0RyYWdnYWJsZXMuZm9yRWFjaCgobmV3RHJhZ2dhYmxlKSA9PiB7XG4gICAgICBpbmRleE9mTmV3cy5wdXNoKG5ld0xpc3QuaW5kZXhPZihuZXdEcmFnZ2FibGUpKVxuICAgIH0pXG4gICAgcmV0dXJuIG5ld0xpc3RcbiAgfVxufVxuXG5jbGFzcyBGbG9hdFJpZ2h0U3RyYXRlZ3kgZXh0ZW5kcyBGbG9hdExlZnRTdHJhdGVneSB7XG4gIGNvbnN0cnVjdG9yKHJlY3RhbmdsZSwgb3B0aW9ucz17fSkge1xuICAgIHN1cGVyKHJlY3RhbmdsZSwgb3B0aW9ucylcblxuICAgIHRoaXMucGFkZGluZ1RvcFJpZ2h0ID0gb3B0aW9ucy5wYWRkaW5nVG9wUmlnaHQgfHwgbmV3IFBvaW50KDUsIDUpXG4gICAgdGhpcy5wYWRkaW5nQm90dG9tTGVmdCA9IG9wdGlvbnMucGFkZGluZ0JvdHRvbUxlZnQgfHwgbmV3IFBvaW50KDAsIDApXG4gICAgdGhpcy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgPSBvcHRpb25zLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyB8fCAwXG5cbiAgICB0aGlzLnBhZGRpbmdCb3R0b21OZWdMZWZ0ID0gbmV3IFBvaW50KC10aGlzLnBhZGRpbmdCb3R0b21MZWZ0LngsIHRoaXMucGFkZGluZ0JvdHRvbUxlZnQueSlcbiAgfVxuXG4gIHBvc2l0aW9uaW5nKHJlY3RhbmdsZUxpc3QsIF9pbmRleGVzT2ZOZXdzKSB7XG4gICAgY29uc3QgYm91bmRSZWN0ID0gdGhpcy5ib3VuZFJlY3RcbiAgICBsZXQgYm91bmRhcnlQb2ludHMgPSBbYm91bmRSZWN0LmdldFAyKCldXG5cbiAgICByZWN0YW5nbGVMaXN0LmZvckVhY2goKHJlY3QsIHJlY3RJbmRleCkgPT4ge1xuICAgICAgbGV0IHBvc2l0aW9uLCBpc1ZhbGlkID0gZmFsc2VcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm91bmRhcnlQb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcG9zaXRpb24gPSBuZXcgUG9pbnQoXG4gICAgICAgICAgYm91bmRhcnlQb2ludHNbaV0ueCAtIHJlY3Quc2l6ZS54IC0gdGhpcy5wYWRkaW5nVG9wUmlnaHQueCxcbiAgICAgICAgICBpID4gMCA/IChib3VuZGFyeVBvaW50c1tpIC0gMV0ueSArIHRoaXMueUdhcEJldHdlZW5EcmFnZ2FibGVzKSA6IChib3VuZFJlY3QucG9zaXRpb24ueSArIHRoaXMucGFkZGluZ1RvcFJpZ2h0LnkpXG4gICAgICAgIClcblxuICAgICAgICBpc1ZhbGlkID0gKHBvc2l0aW9uLnggPiByZWN0LnBvc2l0aW9uLngpXG4gICAgICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICAgIHBvc2l0aW9uID0gbmV3IFBvaW50KFxuICAgICAgICAgIGJvdW5kUmVjdC5nZXRQMigpLnggIC0gcmVjdC5zaXplLnggLSB0aGlzLnBhZGRpbmdUb3BSaWdodC54LFxuICAgICAgICAgIGJvdW5kYXJ5UG9pbnRzW2JvdW5kYXJ5UG9pbnRzLmxlbmd0aCAtIDFdLnkgKyAocmVjdEluZGV4ID4gMCA/IHRoaXMueUdhcEJldHdlZW5EcmFnZ2FibGVzIDogdGhpcy5wYWRkaW5nVG9wUmlnaHQueSlcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgcmVjdC5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnJlbW92YWJsZSAmJiByZWN0LmdldFA0KCkueSA+IGJvdW5kUmVjdC5nZXRQNCgpLnkpIHtcbiAgICAgICAgcmVjdC5yZW1vdmFibGUgPSB0cnVlXG4gICAgICB9XG4gICAgICBib3VuZGFyeVBvaW50cyA9IGFkZFBvaW50VG9Cb3VuZFBvaW50cyhib3VuZGFyeVBvaW50cywgcmVjdC5nZXRQNCgpLmFkZCh0aGlzLnBhZGRpbmdCb3R0b21OZWdMZWZ0KSwgdHJ1ZSlcbiAgICB9KVxuICAgIHJldHVybiByZWN0YW5nbGVMaXN0XG4gIH1cbn1cblxuZXhwb3J0IHsgTm90Q3Jvc3NpbmdTdHJhdGVneSwgRmxvYXRMZWZ0U3RyYXRlZ3ksIEZsb2F0UmlnaHRTdHJhdGVneSB9XG4iLCJpbXBvcnQgcmFuZ2UgZnJvbSAnLi91dGlscy9yYW5nZS5qcydcbmltcG9ydCByZW1vdmVJdGVtIGZyb20gJy4vdXRpbHMvcmVtb3ZlLWFycmF5LWl0ZW0nXG5pbXBvcnQgZ2V0RGVmYXVsdENvbnRhaW5lciBmcm9tICcuL3V0aWxzL2dldC1kZWZhdWx0LWNvbnRhaW5lcidcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudEVtaXR0ZXInXG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gJy4vZ2VvbWV0cnkvcmVjdGFuZ2xlJ1xuaW1wb3J0IHsgdHJhbnNmb3JtZWRTcGFjZURpc3RhbmNlRmFjdG9yeSB9IGZyb20gJy4vZ2VvbWV0cnkvZGlzdGFuY2VzJ1xuaW1wb3J0IHsgc2NvcGVzLCBkZWZhdWx0U2NvcGUgfSBmcm9tICcuL3Njb3BlJ1xuXG5pbXBvcnQgeyBGbG9hdExlZnRTdHJhdGVneSB9IGZyb20gJy4vcG9zaXRpb25pbmcnXG5pbXBvcnQgeyBCb3VuZFRvRWxlbWVudCB9IGZyb20gJy4vYm91bmRpbmcnXG5cbmNvbnN0IGFkZFRvRGVmYXVsdFNjb3BlID0gZnVuY3Rpb24odGFyZ2V0KSB7XG4gIGRlZmF1bHRTY29wZS5hZGRUYXJnZXQodGFyZ2V0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXJnZXQgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBkcmFnZ2FibGVzLCBvcHRpb25zID0ge30pIHtcbiAgICBzdXBlcihvcHRpb25zKVxuICAgIGNvbnN0IHRhcmdldCA9IHRoaXNcblxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgdGltZUVuZDogMjAwLFxuICAgICAgdGltZUV4Y2FuZ2U6IDQwMFxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0aGlzLnBvc2l0aW9uaW5nU3RyYXRlZ3kgPSBvcHRpb25zLnN0cmF0ZWd5IHx8IG5ldyBGbG9hdExlZnRTdHJhdGVneShcbiAgICAgIHRoaXMuZ2V0UmVjdGFuZ2xlLmJpbmQodGhpcyksXG4gICAgICB7XG4gICAgICAgIHJhZGl1czogODAsXG4gICAgICAgIGdldERpc3RhbmNlOiB0cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5KHsgeDogMSwgeTogNCB9KSxcbiAgICAgICAgcmVtb3ZhYmxlOiB0cnVlXG4gICAgICB9XG4gICAgKVxuXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUudGFyZ2V0cy5wdXNoKHRhcmdldCkpXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gZHJhZ2dhYmxlc1xuXG4gICAgVGFyZ2V0LmVtaXR0ZXIuZW1pdCgndGFyZ2V0OmNyZWF0ZScsIHRoaXMpXG5cbiAgICB0aGlzLnN0YXJ0Qm91bmRpbmcoKVxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBzdGFydEJvdW5kaW5nKCkge1xuICAgIHRoaXMuYm91bmQgPSB0aGlzLm9wdGlvbnMuYm91bmQgfHwgQm91bmRUb0VsZW1lbnQuYm91bmRpbmcodGhpcy5lbGVtZW50KVxuICB9XG5cbiAgcG9zaXRpb25pbmcgKGRyYWdnYWJsZXMsIGluZGV4ZXNPZk5ldykge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uaW5nU3RyYXRlZ3kucG9zaXRpb25pbmcoZHJhZ2dhYmxlcywgaW5kZXhlc09mTmV3KVxuICB9XG5cbiAgc29ydGluZyAob2xkRHJhZ2dhYmxlcywgbmV3RHJhZ2dhYmxlcywgaW5kZXhPZk5ld3MpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbmluZ1N0cmF0ZWd5LnNvcnRpbmcob2xkRHJhZ2dhYmxlcywgbmV3RHJhZ2dhYmxlcywgaW5kZXhPZk5ld3MpXG4gIH1cblxuICBpbml0KCkge1xuICAgIGxldCByZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXdcblxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzID0gdGhpcy5kcmFnZ2FibGVzLmZpbHRlcigoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBsZXQgZWxlbWVudCA9IGRyYWdnYWJsZS5lbGVtZW50LnBhcmVudE5vZGVcbiAgICAgIHdoaWxlIChlbGVtZW50KSB7XG4gICAgICAgIGlmIChlbGVtZW50ID09PSB0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGVcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH0pXG5cbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMubGVuZ3RoKSB7XG4gICAgICBpbmRleGVzT2ZOZXcgPSByYW5nZSh0aGlzLmlubmVyRHJhZ2dhYmxlcy5sZW5ndGgpXG4gICAgICByZWN0YW5nbGVzID0gdGhpcy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgICB9KSwgaW5kZXhlc09mTmV3KVxuICAgICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXcpXG4gICAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHRoaXMuZW1pdCgndGFyZ2V0OmFkZCcsIGRyYWdnYWJsZSkpXG4gICAgfVxuICB9XG5cbiAgZ2V0UmVjdGFuZ2xlKCkge1xuICAgIHJldHVybiBSZWN0YW5nbGUuZnJvbUVsZW1lbnQoXG4gICAgICB0aGlzLmVsZW1lbnQsXG4gICAgICB0aGlzLmNvbnRhaW5lcixcbiAgICAgIHRoaXMub3B0aW9ucy5pc0NvbnRlbnRCb3hTaXplLFxuICAgICAgdHJ1ZVxuICAgIClcbiAgfVxuXG4gIGNhdGNoRHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuY2F0Y2hEcmFnZ2FibGUpIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuY2F0Y2hEcmFnZ2FibGUodGhpcywgZHJhZ2dhYmxlKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0YXJnZXRSZWN0YW5nbGUgPSB0aGlzLmdldFJlY3RhbmdsZSgpXG4gICAgICBjb25zdCBkcmFnZ2FibGVTcXVhcmUgPSBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKCkuZ2V0U3F1YXJlKClcblxuICAgICAgcmV0dXJuIGRyYWdnYWJsZVNxdWFyZSA8IHRhcmdldFJlY3RhbmdsZS5nZXRTcXVhcmUoKVxuICAgICAgICAgICAgICAmJiB0YXJnZXRSZWN0YW5nbGUuaW5jbHVkZVBvaW50KGRyYWdnYWJsZS5nZXRDZW50ZXIoKSlcbiAgICB9XG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRSZWN0YW5nbGUoKS5wb3NpdGlvblxuICB9XG5cbiAgZ2V0U2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRSZWN0YW5nbGUoKS5zaXplXG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHNjb3Blcy5mb3JFYWNoKChzY29wZSkgPT4gcmVtb3ZlSXRlbShzY29wZS50YXJnZXRzLCB0aGlzKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgW10pXG4gICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBbXSwgMClcbiAgfVxuXG4gIG9uRW5kKGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IG5ld0RyYWdnYWJsZXNJbmRleCA9IFtdXG5cbiAgICBpZiAodGhpcy5nZXRSZWN0YW5nbGUoKS5pbmNsdWRlUG9pbnQoZHJhZ2dhYmxlLmdldENlbnRlcigpKSkge1xuICAgICAgZHJhZ2dhYmxlLnBvc2l0aW9uID0gdGhpcy5ib3VuZChkcmFnZ2FibGUucG9zaXRpb24sIGRyYWdnYWJsZS5nZXRTaXplKCkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHRoaXMuZW1pdCgndGFyZ2V0OmJlZm9yZUFkZCcsIGRyYWdnYWJsZSlcblxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzID0gdGhpcy5zb3J0aW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLCBbZHJhZ2dhYmxlXSwgbmV3RHJhZ2dhYmxlc0luZGV4KVxuICAgIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgfSksIG5ld0RyYWdnYWJsZXNJbmRleClcblxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgbmV3RHJhZ2dhYmxlc0luZGV4KVxuICAgIGlmICh0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkgIT09IC0xKSB7XG4gICAgICB0aGlzLmFkZFJlbW92ZU9uTW92ZShkcmFnZ2FibGUpXG4gICAgfVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBzZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXcsIHRpbWUpIHtcbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5zbGljZSgwKS5mb3JFYWNoKChkcmFnZ2FibGUsIGkpID0+IHtcbiAgICAgIGNvbnN0IHJlY3QgPSByZWN0YW5nbGVzW2ldLFxuICAgICAgICB0aW1lRW5kID0gdGltZSB8fCB0aW1lID09PSAwID8gdGltZSA6IGluZGV4ZXNPZk5ldy5pbmRleE9mKGkpICE9PSAtMSA/IHRoaXMub3B0aW9ucy50aW1lRW5kIDogdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlXG5cbiAgICAgIGlmIChyZWN0LnJlbW92YWJsZSkge1xuICAgICAgICBkcmFnZ2FibGUubW92ZShkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uLCB0aW1lRW5kLCB0cnVlLCB0cnVlKVxuICAgICAgICByZW1vdmVJdGVtKHRoaXMuaW5uZXJEcmFnZ2FibGVzLCBkcmFnZ2FibGUpXG4gICAgICAgIHRoaXMuZW1pdCgndGFyZ2V0OnJlbW92ZScsIGRyYWdnYWJsZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRyYWdnYWJsZS5tb3ZlKHJlY3QucG9zaXRpb24sIHRpbWVFbmQsIHRydWUsIHRydWUpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGFkZChkcmFnZ2FibGUsIHRpbWUpIHtcbiAgICBjb25zdCBuZXdEcmFnZ2FibGVzSW5kZXggPSB0aGlzLmlubmVyRHJhZ2dhYmxlcy5sZW5ndGhcblxuICAgIHRoaXMuZW1pdCgndGFyZ2V0OmJlZm9yZUFkZCcsIGRyYWdnYWJsZSlcblxuICAgIHRoaXMucHVzaElubmVyRHJhZ2dhYmxlKGRyYWdnYWJsZSlcbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBuZXdEcmFnZ2FibGVzSW5kZXgsIGRyYWdnYWJsZSlcblxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgW25ld0RyYWdnYWJsZXNJbmRleF0sIHRpbWUgfHwgMClcbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMSkge1xuICAgICAgdGhpcy5hZGRSZW1vdmVPbk1vdmUoZHJhZ2dhYmxlKVxuICAgIH1cbiAgfVxuXG4gIHB1c2hJbm5lckRyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpPT09LTEpIHtcbiAgICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxuICAgIH1cbiAgfVxuXG4gIGFkZFJlbW92ZU9uTW92ZShkcmFnZ2FibGUpIHtcbiAgICBkcmFnZ2FibGUub24oJ2RyYWc6bW92ZScsIHRoaXMucmVtb3ZlSGFuZGxlciA9ICgpID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlKGRyYWdnYWJsZSlcbiAgICB9KVxuXG4gICAgdGhpcy5lbWl0KCd0YXJnZXQ6YWRkJywgZHJhZ2dhYmxlKVxuICB9XG5cbiAgcmVtb3ZlKGRyYWdnYWJsZSkge1xuICAgIGRyYWdnYWJsZS51bnN1YnNjcmliZSgnZHJhZzptb3ZlJywgdGhpcy5yZW1vdmVIYW5kbGVyKVxuXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSlcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5zcGxpY2UoaW5kZXgsIDEpXG5cbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBbXSlcblxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgW10pXG4gICAgdGhpcy5lbWl0KCd0YXJnZXQ6cmVtb3ZlJywgZHJhZ2dhYmxlKVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUubW92ZShkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uLCAwLCB0cnVlLCB0cnVlKVxuICAgICAgdGhpcy5lbWl0KCd0YXJnZXQ6cmVtb3ZlJywgZHJhZ2dhYmxlKVxuICAgIH0pXG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMgPSBbXVxuICB9XG5cbiAgZ2V0U29ydGVkRHJhZ2dhYmxlcygpIHtcbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5zbGljZSgpXG4gIH1cblxuICBnZXQgY29udGFpbmVyKCkge1xuICAgIHJldHVybiAodGhpcy5fY29udGFpbmVyID0gdGhpcy5fY29udGFpbmVyIHx8IHRoaXMub3B0aW9ucy5jb250YWluZXIgfHwgdGhpcy5vcHRpb25zLnBhcmVudCB8fCBnZXREZWZhdWx0Q29udGFpbmVyKHRoaXMuZWxlbWVudCkpXG4gIH1cbn1cblxuVGFyZ2V0LmVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKClcblRhcmdldC5lbWl0dGVyLm9uKCd0YXJnZXQ6Y3JlYXRlJywgYWRkVG9EZWZhdWx0U2NvcGUpXG4iLCJpbXBvcnQgcmVtb3ZlSXRlbSBmcm9tICcuL3V0aWxzL3JlbW92ZS1hcnJheS1pdGVtJ1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50RW1pdHRlcidcbmltcG9ydCBEcmFnZ2FibGUgZnJvbSAnLi9kcmFnZ2FibGUnXG5pbXBvcnQgVGFyZ2V0IGZyb20gJy4vdGFyZ2V0J1xuXG5jb25zdCBzY29wZXMgPSBbXVxuXG5jbGFzcyBTY29wZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKGRyYWdnYWJsZXMsIHRhcmdldHMsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcihvcHRpb25zKVxuICAgIHNjb3Blcy5mb3JFYWNoKChzY29wZSkgPT4ge1xuICAgICAgaWYgKGRyYWdnYWJsZXMpIHtcbiAgICAgICAgZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgICAgICByZW1vdmVJdGVtKHNjb3BlLmRyYWdnYWJsZXMsIGRyYWdnYWJsZSlcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgaWYgKHRhcmdldHMpIHtcbiAgICAgICAgdGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHtcbiAgICAgICAgICByZW1vdmVJdGVtKHNjb3BlLnRhcmdldHMsIHRhcmdldClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gZHJhZ2dhYmxlcyB8fCBbXVxuICAgIHRoaXMudGFyZ2V0cyA9IHRhcmdldHMgfHwgW11cbiAgICBzY29wZXMucHVzaCh0aGlzKVxuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgIHRpbWVFbmQ6IChvcHRpb25zLnRpbWVFbmQpIHx8IDQwMFxuICAgIH1cblxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5kcmFnRW5kQWN0aW9uID0gKCkgPT4gdGhpcy5vbkVuZChkcmFnZ2FibGUpXG4gICAgfSlcbiAgfVxuXG4gIGFkZERyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMucHVzaChkcmFnZ2FibGUpXG4gICAgZHJhZ2dhYmxlLmRyYWdFbmRBY3Rpb24gPSAoKSA9PiB0aGlzLm9uRW5kKGRyYWdnYWJsZSlcbiAgfVxuXG4gIGFkZFRhcmdldCh0YXJnZXQpIHtcbiAgICB0aGlzLnRhcmdldHMucHVzaCh0YXJnZXQpXG4gIH1cblxuICBvbkVuZChkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBzaG90VGFyZ2V0cyA9IHRoaXMudGFyZ2V0cy5maWx0ZXIoKHRhcmdldCkgPT4ge1xuICAgICAgcmV0dXJuIHRhcmdldC5kcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTFcbiAgICB9KS5maWx0ZXIoKHRhcmdldCkgPT4ge1xuICAgICAgcmV0dXJuIHRhcmdldC5jYXRjaERyYWdnYWJsZShkcmFnZ2FibGUpXG4gICAgfSkuc29ydCgoYSwgYikgPT4ge1xuICAgICAgcmV0dXJuIGEuZ2V0UmVjdGFuZ2xlKCkuZ2V0U3F1YXJlKCkgLSBiLmdldFJlY3RhbmdsZSgpLmdldFNxdWFyZSgpXG4gICAgfSlcblxuICAgIGlmIChzaG90VGFyZ2V0cy5sZW5ndGgpIHtcbiAgICAgIHNob3RUYXJnZXRzWzBdLm9uRW5kKGRyYWdnYWJsZSlcbiAgICB9IGVsc2UgaWYgKGRyYWdnYWJsZS50YXJnZXRzLmxlbmd0aCkge1xuICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKGRyYWdnYWJsZS5pbml0aWFsUG9zaXRpb24sIHRoaXMub3B0aW9ucy50aW1lRW5kKVxuICAgIH1cblxuICAgIHRoaXMuZW1pdCgnc2NvcGU6Y2hhbmdlJylcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMudGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHRhcmdldC5yZXNldCgpKVxuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucmVmcmVzaCgpKVxuICAgIHRoaXMudGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHRhcmdldC5yZWZyZXNoKCkpXG4gIH1cblxuICBnZXQgcG9zaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnRhcmdldHMubWFwKCh0YXJnZXQpID0+IHtcbiAgICAgIHJldHVybiB0YXJnZXQuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB0aGlzLmRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpKVxuICAgIH0pXG4gIH1cblxuICBzZXQgcG9zaXRpb25zKHBvc2l0aW9ucykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSAnd3JvbmcgYXJyYXkgbGVuZ3RoJ1xuICAgIGlmIChwb3NpdGlvbnMubGVuZ3RoID09PSB0aGlzLnRhcmdldHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB0YXJnZXQucmVzZXQoKSlcblxuICAgICAgcG9zaXRpb25zLmZvckVhY2goKHRhcmdldEluZGV4ZXMsIGkpID0+IHtcbiAgICAgICAgdGFyZ2V0SW5kZXhlcy5mb3JFYWNoKChpbmRleCkgPT4ge1xuICAgICAgICAgIHRoaXMudGFyZ2V0c1tpXS5hZGQodGhpcy5kcmFnZ2FibGVzW2luZGV4XSlcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG1lc3NhZ2VcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgZGVmYXVsdFNjb3BlID0gbmV3IFNjb3BlKClcblxuZnVuY3Rpb24gc2NvcGUoZm4pIHtcbiAgY29uc3QgY3VycmVudFNjb3BlID0gbmV3IFNjb3BlKClcblxuICBjb25zdCBhZGREcmFnZ2FibGVUb1Njb3BlID0gZnVuY3Rpb24oZHJhZ2dhYmxlKSB7XG4gICAgY3VycmVudFNjb3BlLmFkZERyYWdnYWJsZShkcmFnZ2FibGUpXG4gICAgRHJhZ2dhYmxlLmVtaXR0ZXIuaW50ZXJydXB0KClcbiAgfVxuXG4gIGNvbnN0IGFkZFRhcmdldFRvU2NvcGUgPSBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICBjdXJyZW50U2NvcGUuYWRkVGFyZ2V0KHRhcmdldClcbiAgICBEcmFnZ2FibGUuZW1pdHRlci5pbnRlcnJ1cHQoKVxuICB9XG5cbiAgRHJhZ2dhYmxlLmVtaXR0ZXIucHJlcGVuZE9uKCdkcmFnZ2FibGU6Y3JlYXRlJywgYWRkRHJhZ2dhYmxlVG9TY29wZSlcbiAgVGFyZ2V0LmVtaXR0ZXIucHJlcGVuZE9uKCd0YXJnZXQ6Y3JlYXRlJywgYWRkVGFyZ2V0VG9TY29wZSlcbiAgZm4uY2FsbCgpXG4gIERyYWdnYWJsZS5lbWl0dGVyLnVuc3Vic2NyaWJlKCdkcmFnZ2FibGU6Y3JlYXRlJywgYWRkRHJhZ2dhYmxlVG9TY29wZSlcbiAgVGFyZ2V0LmVtaXR0ZXIudW5zdWJzY3JpYmUoJ3RhcmdldDpjcmVhdGUnLCBhZGRUYXJnZXRUb1Njb3BlKVxuICByZXR1cm4gY3VycmVudFNjb3BlXG59XG5cbmV4cG9ydCB7IHNjb3BlcywgZGVmYXVsdFNjb3BlLCBTY29wZSwgc2NvcGUgfVxuIiwiZnVuY3Rpb24gY2hlY2tTdXBwb3J0UGFzc2l2ZUV2ZW50cygpIHtcbiAgbGV0IHBhc3NpdmVTdXBwb3J0ZWQgPSBmYWxzZVxuXG4gIHRyeSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ3Bhc3NpdmUnLCB7XG4gICAgICBnZXQoKSB7XG4gICAgICAgIHJldHVybiAocGFzc2l2ZVN1cHBvcnRlZCA9IHRydWUpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0ZXN0Jywgb3B0aW9ucywgb3B0aW9ucylcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndGVzdCcsIG9wdGlvbnMsIG9wdGlvbnMpXG4gIH0gY2F0Y2ggKF9lcnIpIHtcbiAgICBwYXNzaXZlU3VwcG9ydGVkID0gZmFsc2VcbiAgfVxuXG4gIHJldHVybiBwYXNzaXZlU3VwcG9ydGVkXG59XG5cbmV4cG9ydCBjb25zdCBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzID0gY2hlY2tTdXBwb3J0UGFzc2l2ZUV2ZW50cygpXG5cbmZ1bmN0aW9uIGV2ZW50T3B0aW9ucyhvcHRpb25zLCBmYWxsYmFjayA9IGZhbHNlKSB7XG4gIHJldHVybiBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzID8gb3B0aW9ucyA6IGZhbGxiYWNrXG59XG5cbmV4cG9ydCB7IGV2ZW50T3B0aW9ucyB9XG5cbmV4cG9ydCBkZWZhdWx0IGlzU3VwcG9ydFBhc3NpdmVFdmVudHNcbiIsImltcG9ydCBnZXREZWZhdWx0Q29udGFpbmVyIGZyb20gJy4vdXRpbHMvZ2V0LWRlZmF1bHQtY29udGFpbmVyJ1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50RW1pdHRlcidcbmltcG9ydCBnZXRTdHlsZVByb3BlcnR5IGZyb20gJ2Rlc2FuZHJvLWdldC1zdHlsZS1wcm9wZXJ0eSdcbmltcG9ydCB7IEJvdW5kVG9FbGVtZW50IH0gZnJvbSAnLi9ib3VuZGluZydcbmltcG9ydCBQb2ludCBmcm9tICcuL2dlb21ldHJ5L3BvaW50J1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tICcuL2dlb21ldHJ5L3JlY3RhbmdsZSdcbmltcG9ydCB7IGRlZmF1bHRTY29wZSB9IGZyb20gJy4vc2NvcGUnXG5pbXBvcnQgaXNTdXBwb3J0UGFzc2l2ZUV2ZW50cyBmcm9tICcuL3V0aWxzL2lzLXN1cHBvcnQtcGFzc2l2ZS1ldmVudHMnXG5cbmNvbnN0IHBhc3NpdmVGYWxzZSA9IGlzU3VwcG9ydFBhc3NpdmVFdmVudHMgPyB7IHBhc3NpdmU6IGZhbHNlIH0gOiBmYWxzZVxuXG5jb25zdCBpc1RvdWNoID0gJ29udG91Y2hzdGFydCcgaW4gd2luZG93XG5jb25zdCBtb3VzZUV2ZW50cyA9IHtcbiAgc3RhcnQ6ICdtb3VzZWRvd24nLFxuICBtb3ZlOiAnbW91c2Vtb3ZlJyxcbiAgZW5kOiAnbW91c2V1cCdcbn1cbmNvbnN0IHRvdWNoRXZlbnRzID0ge1xuICBzdGFydDogJ3RvdWNoc3RhcnQnLFxuICBtb3ZlOiAndG91Y2htb3ZlJyxcbiAgZW5kOiAndG91Y2hlbmQnXG59XG5jb25zdCBkcmFnZ2FibGVzID0gW11cbmNvbnN0IHRyYW5zZm9ybVByb3BlcnR5ID0gZ2V0U3R5bGVQcm9wZXJ0eSgndHJhbnNmb3JtJylcbmNvbnN0IHRyYW5zaXRpb25Qcm9wZXJ0eSA9IGdldFN0eWxlUHJvcGVydHkoJ3RyYW5zaXRpb24nKVxuXG5mdW5jdGlvbiBnZXRUb3VjaEJ5SUQoZWxlbWVudCwgdG91Y2hJZCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnQuY2hhbmdlZFRvdWNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZWxlbWVudC5jaGFuZ2VkVG91Y2hlc1tpXS5pZGVudGlmaWVyID09PSB0b3VjaElkKSB7XG4gICAgICByZXR1cm4gZWxlbWVudC5jaGFuZ2VkVG91Y2hlc1tpXVxuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cblxuZnVuY3Rpb24gcHJldmVudERvdWJsZUluaXQoZHJhZ2dhYmxlKSB7XG4gIGNvbnN0IG1lc3NhZ2UgPSBcImZvciB0aGlzIGVsZW1lbnQgRHJhZ2VlLkRyYWdnYWJsZSBpcyBhbHJlYWR5IGV4aXN0LCBkb24ndCBjcmVhdGUgaXQgdHdpY2UgXCJcbiAgaWYgKGRyYWdnYWJsZXMuc29tZSgoZXhpc3RpbmcpID0+IGRyYWdnYWJsZS5lbGVtZW50ID09PSBleGlzdGluZy5lbGVtZW50KSkge1xuICAgIHRocm93IG1lc3NhZ2VcbiAgfVxuICBkcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxufVxuXG5mdW5jdGlvbiBhZGRUb0RlZmF1bHRTY29wZShkcmFnZ2FibGUpIHtcbiAgZGVmYXVsdFNjb3BlLmFkZERyYWdnYWJsZShkcmFnZ2FibGUpXG59XG5cbmZ1bmN0aW9uIGNvcHlTdHlsZXMoc291cmNlLCBkZXN0aW5hdGlvbikge1xuICBjb25zdCBjcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHNvdXJjZSlcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qga2V5ID0gY3NbaV1cbiAgICBpZiAoKGtleS5pbmRleE9mKCd0cmFuc2l0aW9uJykgPCAwKSAmJiAoa2V5LmluZGV4T2YoJ3RyYW5zZm9ybScpIDwgMCkpIHtcbiAgICAgIGRlc3RpbmF0aW9uLnN0eWxlW2tleV0gPSBjc1trZXldXG4gICAgfVxuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzb3VyY2UuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICBjb3B5U3R5bGVzKHNvdXJjZS5jaGlsZHJlbltpXSwgZGVzdGluYXRpb24uY2hpbGRyZW5baV0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhZ2dhYmxlIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgb3B0aW9ucz17fSkge1xuICAgIHN1cGVyKG9wdGlvbnMpXG4gICAgdGhpcy50YXJnZXRzID0gW11cbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIHByZXZlbnREb3VibGVJbml0KHRoaXMpXG4gICAgRHJhZ2dhYmxlLmVtaXR0ZXIuZW1pdCgnZHJhZ2dhYmxlOmNyZWF0ZScsIHRoaXMpXG4gICAgdGhpcy5fZW5hYmxlID0gdHJ1ZVxuICAgIHRoaXMudG91Y2hEcmFnZ2luZ1RocmVzaG9sZCA9ICgndG91Y2hEcmFnZ2luZ1RocmVzaG9sZCcgaW4gdGhpcy5vcHRpb25zKSA/IHRoaXMub3B0aW9ucy50b3VjaERyYWdnaW5nVGhyZXNob2xkIDogMFxuXG4gICAgdGhpcy5zdGFydEJvdW5kaW5nKClcbiAgICB0aGlzLnN0YXJ0UG9zaXRpb25pbmcoKVxuICAgIHRoaXMuc3RhcnRMaXN0ZW5pbmcoKVxuICB9XG5cbiAgc3RhcnRCb3VuZGluZygpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmJvdW5kKSB7XG4gICAgICB0aGlzLmJvdW5kaW5nID0geyBib3VuZDogdGhpcy5vcHRpb25zLmJvdW5kIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ib3VuZGluZyA9IG5ldyBCb3VuZFRvRWxlbWVudCh0aGlzLmNvbnRhaW5lciwgdGhpcy5jb250YWluZXIpXG4gICAgfVxuICB9XG5cbiAgc3RhcnRQb3NpdGlvbmluZygpIHtcbiAgICB0aGlzLl9zZXREZWZhdWx0VHJhbnNpdGlvbigpXG4gICAgdGhpcy5vZmZzZXQgPSBQb2ludC5lbGVtZW50T2Zmc2V0KHRoaXMuZWxlbWVudCwgdGhpcy5jb250YWluZXIsIHRydWUpXG4gICAgdGhpcy5waW5uZWRQb3NpdGlvbiA9IHRoaXMub2Zmc2V0XG4gICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMub2Zmc2V0XG4gICAgdGhpcy5pbml0aWFsUG9zaXRpb24gPSB0aGlzLm9wdGlvbnMucG9zaXRpb24gfHwgdGhpcy5vZmZzZXRcblxuICAgIHRoaXMucGluUG9zaXRpb24odGhpcy5pbml0aWFsUG9zaXRpb24pXG5cbiAgICBpZiAodGhpcy5ib3VuZGluZy5yZWZyZXNoKSB7XG4gICAgICB0aGlzLmJvdW5kaW5nLnJlZnJlc2goKVxuICAgIH1cbiAgfVxuXG4gIHN0YXJ0TGlzdGVuaW5nKCkge1xuICAgIHRoaXMuX2RyYWdTdGFydCA9IChldmVudCkgPT4gdGhpcy5kcmFnU3RhcnQoZXZlbnQpXG4gICAgdGhpcy5fZHJhZ01vdmUgPSAoZXZlbnQpID0+IHRoaXMuZHJhZ01vdmUoZXZlbnQpXG4gICAgdGhpcy5fZHJhZ0VuZCA9IChldmVudCkgPT4gdGhpcy5kcmFnRW5kKGV2ZW50KVxuICAgIHRoaXMuX25hdGl2ZURyYWdTdGFydCA9IChldmVudCkgPT4gdGhpcy5uYXRpdmVEcmFnU3RhcnQoZXZlbnQpXG4gICAgdGhpcy5fbmF0aXZlRHJhZ092ZXIgPSAoZXZlbnQpID0+IHRoaXMubmF0aXZlRHJhZ092ZXIoZXZlbnQpXG4gICAgdGhpcy5fbmF0aXZlRHJhZ0VuZCA9IChldmVudCkgPT4gdGhpcy5uYXRpdmVEcmFnRW5kKGV2ZW50KVxuICAgIHRoaXMuX25hdGl2ZURyb3AgPSAoZXZlbnQpID0+IHRoaXMubmF0aXZlRHJvcChldmVudClcbiAgICB0aGlzLl9zY3JvbGwgPSAoZXZlbnQpID0+IHRoaXMub25TY3JvbGwoZXZlbnQpXG5cbiAgICB0aGlzLmhhbmRsZXIuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0LCBwYXNzaXZlRmFsc2UpXG4gICAgdGhpcy5oYW5kbGVyLmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydCwgcGFzc2l2ZUZhbHNlKVxuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCB0aGlzLl9uYXRpdmVEcmFnU3RhcnQpXG4gIH1cblxuICBnZXRTaXplKCkge1xuICAgIHJldHVybiBQb2ludC5lbGVtZW50U2l6ZSh0aGlzLmVsZW1lbnQsIHRoaXMub3B0aW9ucy5pc0NvbnRlbnRCb3hTaXplKVxuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMub2Zmc2V0LmFkZCh0aGlzLl90cmFuc2Zvcm1Qb3NpdGlvbiB8fCBuZXcgUG9pbnQoMCwgMCkpXG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25cbiAgfVxuXG4gIGdldENlbnRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi5hZGQodGhpcy5nZXRTaXplKCkubXVsdCgwLjUpKVxuICB9XG5cbiAgX3NldERlZmF1bHRUcmFuc2l0aW9uICgpIHtcbiAgICBpZiAoIXRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNpdGlvblByb3BlcnR5XSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZWxlbWVudClbdHJhbnNpdGlvblByb3BlcnR5XVxuICAgIH1cbiAgfVxuXG4gIF9zZXRUcmFuc2l0aW9uKHRpbWUpIHtcbiAgICBsZXQgdHJhbnNpdGlvbiA9IHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldXG4gICAgY29uc3QgdHJhbnNpdGlvbkNzcyA9IGB0cmFuc2Zvcm0gJHt0aW1lfW1zYFxuXG4gICAgaWYgKCEvdHJhbnNmb3JtIFxcZCptP3MvLnRlc3QodHJhbnNpdGlvbikpIHtcbiAgICAgIGlmICh0cmFuc2l0aW9uKSB7XG4gICAgICAgIHRyYW5zaXRpb24gKz0gYCwgJHt0cmFuc2l0aW9uQ3NzfWBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyYW5zaXRpb24gPSB0cmFuc2l0aW9uQ3NzXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyYW5zaXRpb24gPSB0cmFuc2l0aW9uLnJlcGxhY2UoL3RyYW5zZm9ybSBcXGQqbT9zL2csIHRyYW5zaXRpb25Dc3MpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldICE9PSB0cmFuc2l0aW9uKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNpdGlvblByb3BlcnR5XSA9IHRyYW5zaXRpb25cbiAgICB9XG4gIH1cblxuICBfc2V0VHJhbnNsYXRlKHBvaW50KSB7XG4gICAgdGhpcy5fdHJhbnNmb3JtUG9zaXRpb24gPSBwb2ludFxuICAgIGNvbnN0IHRyYW5zbGF0ZUNzcyA9IGB0cmFuc2xhdGUzZCgke3BvaW50Lnh9cHgsICR7cG9pbnQueX1weCwgMHB4KWBcblxuICAgIGxldCB0cmFuc2Zvcm0gPSB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcGVydHldXG5cbiAgICBpZiAodGhpcy5zaG91bGRSZW1vdmVaZXJvVHJhbnNsYXRlICYmIHBvaW50LnggPT09IDAgJiYgcG9pbnQueSA9PT0gMCkge1xuICAgICAgdHJhbnNmb3JtID0gdHJhbnNmb3JtLnJlcGxhY2UoL3RyYW5zbGF0ZTNkXFwoW14pXStcXCkvLCAnJylcbiAgICB9IGVsc2UgaWYgKCEvdHJhbnNsYXRlM2RcXChbXildK1xcKS8udGVzdCh0cmFuc2Zvcm0pKSB7XG4gICAgICBpZiAodHJhbnNmb3JtKSB7XG4gICAgICAgIHRyYW5zZm9ybSArPSAnICdcbiAgICAgIH1cbiAgICAgIHRyYW5zZm9ybSArPSB0cmFuc2xhdGVDc3NcbiAgICB9IGVsc2Uge1xuICAgICAgdHJhbnNmb3JtID0gdHJhbnNmb3JtLnJlcGxhY2UoL3RyYW5zbGF0ZTNkXFwoW14pXStcXCkvLCB0cmFuc2xhdGVDc3MpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wZXJ0eV0gIT09IHRyYW5zZm9ybSkge1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BlcnR5XSA9IHRyYW5zZm9ybVxuICAgIH1cbiAgfVxuXG4gIG1vdmUocG9pbnQsIHRpbWU9MCwgaXNTaWxlbnQ9ZmFsc2UpIHtcbiAgICBwb2ludCA9IHBvaW50LmNsb25lKClcblxuICAgIHRoaXMuZGV0ZXJtaW5lRGlyZWN0aW9uKHBvaW50KVxuICAgIHRoaXMucG9zaXRpb24gPSBwb2ludFxuXG4gICAgdGhpcy5fc2V0VHJhbnNpdGlvbih0aW1lKVxuICAgIHRoaXMuX3NldFRyYW5zbGF0ZShwb2ludC5zdWIodGhpcy5vZmZzZXQpKVxuXG4gICAgaWYgKCFpc1NpbGVudCkge1xuICAgICAgdGhpcy5lbWl0KCdkcmFnOm1vdmUnKVxuICAgIH1cbiAgfVxuXG4gIHBpblBvc2l0aW9uKHBvaW50LCB0aW1lPTAsIHNpbGVudD10cnVlKSB7XG4gICAgdGhpcy5waW5uZWRQb3NpdGlvbiA9IHBvaW50LmNsb25lKClcbiAgICB0aGlzLm1vdmUodGhpcy5waW5uZWRQb3NpdGlvbiwgdGltZSwgc2lsZW50KVxuICB9XG5cbiAgcmVzZXRQb3NpdGlvblRvSW5pdGlhbCAoKSB7XG4gICAgdGhpcy5waW5Qb3NpdGlvbih0aGlzLmluaXRpYWxQb3NpdGlvbilcbiAgfVxuXG4gIHJlZnJlc2hQb3NpdGlvbiAoKSB7XG4gICAgdGhpcy5zZXRQb3NpdGlvbih0aGlzLmdldFBvc2l0aW9uKCkpXG4gIH1cblxuICBzZXRQb3NpdGlvbihwb2ludCkge1xuICAgIHBvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIHRoaXMucG9zaXRpb24gPSBwb2ludFxuICAgIHRoaXMuX3NldFRyYW5zaXRpb24oMClcbiAgICB0aGlzLl9zZXRUcmFuc2xhdGUocG9pbnQuc3ViKHRoaXMub2Zmc2V0KSlcbiAgfVxuXG4gIGRldGVybWluZURpcmVjdGlvbihwb2ludCkge1xuICAgIHRoaXMubGVmdERpcmVjdGlvbiA9ICh0aGlzLnBvc2l0aW9uLnggPCBwb2ludC54KVxuICAgIHRoaXMucmlnaHREaXJlY3Rpb24gPSAodGhpcy5wb3NpdGlvbi54ID4gcG9pbnQueClcbiAgICB0aGlzLnVwRGlyZWN0aW9uID0gKHRoaXMucG9zaXRpb24ueSA+IHBvaW50LnkpXG4gICAgdGhpcy5kb3duRGlyZWN0aW9uID0gKHRoaXMucG9zaXRpb24ueSA8IHBvaW50LnkpXG4gIH1cblxuICBzZWVtc1Njcm9sbGluZygpIHtcbiAgICByZXR1cm4gKCtuZXcgRGF0ZSgpIC0gdGhpcy5fc3RhcnRUb3VjaFRpbWVzdGFtcCkgPCB0aGlzLnRvdWNoRHJhZ2dpbmdUaHJlc2hvbGRcbiAgfVxuXG4gIHNob3VsZFVzZU5hdGl2ZURyYWdBbmREcm9wKCkge1xuICAgIGlmICh0aGlzLmlzVG91Y2hFdmVudCkge1xuICAgICAgcmV0dXJuIHRoaXMubmF0aXZlRHJhZ0FuZERyb3AgJiYgdGhpcy5lbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3BPblRvdWNoXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLm5hdGl2ZURyYWdBbmREcm9wXG4gICAgfVxuICB9XG5cbiAgZHJhZ1N0YXJ0KGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLl9lbmFibGUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuaXNUb3VjaEV2ZW50ID0gKGlzVG91Y2ggJiYgKGV2ZW50IGluc3RhbmNlb2Ygd2luZG93LlRvdWNoRXZlbnQpKVxuXG4gICAgdGhpcy50b3VjaFBvaW50ID0gdGhpcy5fc3RhcnRUb3VjaFBvaW50ID0gbmV3IFBvaW50KFxuICAgICAgdGhpcy5pc1RvdWNoRXZlbnQgPyBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCA6IGV2ZW50LmNsaWVudFgsXG4gICAgICB0aGlzLmlzVG91Y2hFdmVudCA/IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZIDogZXZlbnQuY2xpZW50WVxuICAgIClcblxuICAgIHRoaXMuX3N0YXJ0UG9zaXRpb24gPSB0aGlzLmdldFBvc2l0aW9uKClcbiAgICBpZiAodGhpcy5pc1RvdWNoRXZlbnQpIHtcbiAgICAgIHRoaXMuX3RvdWNoSWQgPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5pZGVudGlmaWVyXG4gICAgICB0aGlzLl9zdGFydFRvdWNoVGltZXN0YW1wID0gK25ldyBEYXRlKClcbiAgICB9XG5cbiAgICB0aGlzLl9zdGFydFNjcm9sbFBvaW50ID0gbmV3IFBvaW50KHdpbmRvdy5zY3JvbGxYLCB3aW5kb3cuc2Nyb2xsWSlcblxuICAgIGlmIChldmVudC50YXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElucHV0RWxlbWVudCB8fFxuICAgICAgICAgIGV2ZW50LnRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSW5wdXRFbGVtZW50KSB7XG4gICAgICBldmVudC50YXJnZXQuZm9jdXMoKVxuICAgIH1cblxuICAgIGlmICh0aGlzLnNob3VsZFVzZU5hdGl2ZURyYWdBbmREcm9wKCkpIHtcbiAgICAgIGlmICgodGhpcy5pc1RvdWNoRXZlbnQgJiYgdGhpcy5lbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3BPblRvdWNoKSB8fFxuICAgICAgICAgICAgIHRoaXMuZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wT25BbGxEZXZpY2VzKSB7XG4gICAgICAgIGNvbnN0IGVtdWxhdGVPbkZpcnN0TW92ZSA9IChldmVudCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLnNlZW1zU2Nyb2xsaW5nKCkpIHtcbiAgICAgICAgICAgIHRoaXMuY2FuY2VsRHJhZ2dpbmcoKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcChldmVudClcbiAgICAgICAgICB9XG4gICAgICAgICAgY2FuY2VsRW11bGF0aW9uKClcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjYW5jZWxFbXVsYXRpb24gPSAoKSA9PiB7XG4gICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCBlbXVsYXRlT25GaXJzdE1vdmUpXG4gICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIGNhbmNlbEVtdWxhdGlvbilcbiAgICAgICAgfVxuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgZW11bGF0ZU9uRmlyc3RNb3ZlLCBwYXNzaXZlRmFsc2UpXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCBjYW5jZWxFbXVsYXRpb24sIHBhc3NpdmVGYWxzZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5kcmFnZ2FibGUgPSB0cnVlXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9uYXRpdmVEcmFnRW5kLCBwYXNzaXZlRmFsc2UpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUsIHBhc3NpdmVGYWxzZSlcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUsIHBhc3NpdmVGYWxzZSlcblxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQsIHBhc3NpdmVGYWxzZSlcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kLCBwYXNzaXZlRmFsc2UpXG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX3Njcm9sbClcblxuICAgIHRoaXMuZW1pdCgnZHJhZzpzdGFydCcpXG4gIH1cblxuICBkcmFnTW92ZShldmVudCkge1xuICAgIGxldCB0b3VjaFxuXG4gICAgdGhpcy5pc0RyYWdnaW5nID0gdHJ1ZVxuXG4gICAgdGhpcy5pc1RvdWNoRXZlbnQgPSAoaXNUb3VjaCAmJiAoZXZlbnQgaW5zdGFuY2VvZiB3aW5kb3cuVG91Y2hFdmVudCkpXG4gICAgaWYgKHRoaXMuaXNUb3VjaEV2ZW50KSB7XG4gICAgICB0b3VjaCA9IGdldFRvdWNoQnlJRChldmVudCwgdGhpcy5fdG91Y2hJZClcblxuICAgICAgaWYgKCF0b3VjaCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuc2VlbXNTY3JvbGxpbmcoKSkge1xuICAgICAgICB0aGlzLmNhbmNlbERyYWdnaW5nKClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhpcy50b3VjaFBvaW50ID0gbmV3IFBvaW50KFxuICAgICAgdGhpcy5pc1RvdWNoRXZlbnQgPyB0b3VjaC5wYWdlWCA6IGV2ZW50LmNsaWVudFgsXG4gICAgICB0aGlzLmlzVG91Y2hFdmVudCA/IHRvdWNoLnBhZ2VZIDogZXZlbnQuY2xpZW50WVxuICAgIClcblxuICAgIGxldCBwb2ludCA9IHRoaXMuX3N0YXJ0UG9zaXRpb24uYWRkKHRoaXMudG91Y2hQb2ludC5zdWIodGhpcy5fc3RhcnRUb3VjaFBvaW50KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZCh0aGlzLnNjcm9sbFBvaW50LnN1Yih0aGlzLl9zdGFydFNjcm9sbFBvaW50KSlcblxuICAgIHBvaW50ID0gdGhpcy5ib3VuZGluZy5ib3VuZChwb2ludCwgdGhpcy5nZXRTaXplKCkpXG4gICAgdGhpcy5tb3ZlKHBvaW50KVxuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkcmFnZWUtYWN0aXZlJylcbiAgfVxuXG4gIGRyYWdFbmQoZXZlbnQpIHtcbiAgICB0aGlzLmlzVG91Y2hFdmVudCA9IChpc1RvdWNoICYmIChldmVudCBpbnN0YW5jZW9mIHdpbmRvdy5Ub3VjaEV2ZW50KSlcblxuICAgIGlmICh0aGlzLmlzVG91Y2hFdmVudCAmJiAhZ2V0VG91Y2hCeUlEKGV2ZW50LCB0aGlzLl90b3VjaElkKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNEcmFnZ2luZykge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB9XG5cbiAgICB0aGlzLmRyYWdFbmRBY3Rpb24oKVxuICAgIHRoaXMuZW1pdCgnZHJhZzplbmQnKVxuICAgIHRoaXMuY2FuY2VsRHJhZ2dpbmcoKVxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2VlLWFjdGl2ZScpKVxuICB9XG5cbiAgb25TY3JvbGwoX2V2ZW50KSB7XG4gICAgbGV0IHBvaW50ID0gdGhpcy5fc3RhcnRQb3NpdGlvbi5hZGQodGhpcy50b3VjaFBvaW50LnN1Yih0aGlzLl9zdGFydFRvdWNoUG9pbnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMuc2Nyb2xsUG9pbnQuc3ViKHRoaXMuX3N0YXJ0U2Nyb2xsUG9pbnQpKVxuXG4gICAgcG9pbnQgPSB0aGlzLmJvdW5kaW5nLmJvdW5kKHBvaW50LCB0aGlzLmdldFNpemUoKSlcbiAgICBpZiAoIXRoaXMubmF0aXZlRHJhZ0FuZERyb3ApIHtcbiAgICAgIHRoaXMubW92ZShwb2ludClcbiAgICB9XG4gIH1cblxuICBuYXRpdmVEcmFnU3RhcnQoZXZlbnQpIHtcbiAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dCcsICdGaXJlRm94IGZpeCcpXG4gICAgZXZlbnQuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSAnbW92ZSdcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIHRoaXMuX25hdGl2ZURyYWdPdmVyKVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzLl9uYXRpdmVEcm9wKVxuICB9XG5cbiAgbmF0aXZlRHJhZ092ZXIoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZXZlbnQuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnbW92ZSdcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZHJhZ2VlLXBsYWNlaG9sZGVyJylcbiAgICBpZiAoZXZlbnQuY2xpZW50WCA9PT0gMCAmJiBldmVudC5jbGllbnRZID09PSAwKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLnRvdWNoUG9pbnQgPSBuZXcgUG9pbnQoZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSlcbiAgICBsZXQgcG9pbnQgPSB0aGlzLl9zdGFydFBvc2l0aW9uLmFkZCh0aGlzLnRvdWNoUG9pbnQuc3ViKHRoaXMuX3N0YXJ0VG91Y2hQb2ludCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy5zY3JvbGxQb2ludC5zdWIodGhpcy5fc3RhcnRTY3JvbGxQb2ludCkpXG4gICAgcG9pbnQgPSB0aGlzLmJvdW5kaW5nLmJvdW5kKHBvaW50LCB0aGlzLmdldFNpemUoKSlcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9pbnRcbiAgICB0aGlzLmVtaXQoJ2RyYWc6bW92ZScpXG4gIH1cblxuICBuYXRpdmVEcmFnRW5kKF9ldmVudCkge1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZWUtcGxhY2Vob2xkZXInKVxuICAgIHRoaXMuZHJhZ0VuZEFjdGlvbigpXG4gICAgdGhpcy5lbWl0KCdkcmFnOmVuZCcpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCB0aGlzLl9uYXRpdmVEcmFnT3ZlcilcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcm9wJywgdGhpcy5fbmF0aXZlRHJvcClcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fc2Nyb2xsKVxuICAgIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnZHJhZ2dhYmxlJylcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2VlLWFjdGl2ZScpXG4gIH1cblxuICBuYXRpdmVEcm9wKGV2ZW50KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBjYW5jZWxEcmFnZ2luZyAoKSB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG5cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fbmF0aXZlRHJhZ0VuZClcblxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9zY3JvbGwpXG5cbiAgICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZVxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2RyYWdnYWJsZScpXG4gIH1cblxuICBjb3B5U3R5bGVzKHNvdXJjZSwgZGVzdGluYXRpb24pIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmNvcHlTdHlsZXMpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5jb3B5U3R5bGVzKHNvdXJjZSwgZGVzdGluYXRpb24pXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvcHlTdHlsZXMoc291cmNlLCBkZXN0aW5hdGlvbilcbiAgICB9XG4gIH1cblxuICBlbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3AoZXZlbnQpIHtcbiAgICBjb25zdCBjb250YWluZXJSZWN0ID0gdGhpcy5jb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICBjb25zdCBjbG9uZWRFbGVtZW50ID0gdGhpcy5lbGVtZW50LmNsb25lTm9kZSh0cnVlKVxuICAgIGNsb25lZEVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcGVydHldID0gJydcbiAgICB0aGlzLmNvcHlTdHlsZXModGhpcy5lbGVtZW50LCBjbG9uZWRFbGVtZW50KVxuICAgIGNsb25lZEVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjbG9uZWRFbGVtZW50KVxuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkcmFnZWUtcGxhY2Vob2xkZXInKVxuXG4gICAgY29uc3QgZW11bGF0aW9uRHJhZ2dhYmxlID0gbmV3IERyYWdnYWJsZShjbG9uZWRFbGVtZW50LCB7XG4gICAgICBjb250YWluZXI6IGRvY3VtZW50LmJvZHksXG4gICAgICB0b3VjaERyYWdnaW5nVGhyZXNob2xkOiAwLFxuICAgICAgYm91bmQocG9pbnQpIHtcbiAgICAgICAgcmV0dXJuIHBvaW50XG4gICAgICB9LFxuICAgICAgb246IHtcbiAgICAgICAgJ2RyYWc6bW92ZSc6ICgpID0+IHtcbiAgICAgICAgICBjb25zdCBjb250YWluZXJSZWN0UG9pbnQgPSBuZXcgUG9pbnQoY29udGFpbmVyUmVjdC5sZWZ0LCBjb250YWluZXJSZWN0LnRvcClcbiAgICAgICAgICB0aGlzLnBvc2l0aW9uID0gZW11bGF0aW9uRHJhZ2dhYmxlLnBvc2l0aW9uLnN1Yihjb250YWluZXJSZWN0UG9pbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdWIodGhpcy5fc3RhcnRTY3JvbGxQb2ludClcbiAgICAgICAgICB0aGlzLmVtaXQoJ2RyYWc6bW92ZScpXG4gICAgICAgIH0sXG4gICAgICAgICdkcmFnOmVuZCc6ICgpID0+IHtcbiAgICAgICAgICBlbXVsYXRpb25EcmFnZ2FibGUuZGVzdHJveSgpXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChjbG9uZWRFbGVtZW50KVxuICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZWUtcGxhY2Vob2xkZXInKVxuICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZWUtYWN0aXZlJylcblxuICAgICAgICAgIHRoaXMuZW1pdCgnZHJhZzplbmQnKVxuICAgICAgICAgIHRoaXMuZHJhZ0VuZEFjdGlvbigpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgY29udGFpbmVyUmVjdFBvaW50ID0gbmV3IFBvaW50KGNvbnRhaW5lclJlY3QubGVmdCwgY29udGFpbmVyUmVjdC50b3ApXG4gICAgZW11bGF0aW9uRHJhZ2dhYmxlLl9zdGFydFNjcm9sbFBvaW50ID0gdGhpcy5fc3RhcnRTY3JvbGxQb2ludFxuXG4gICAgZW11bGF0aW9uRHJhZ2dhYmxlLm1vdmUoXG4gICAgICB0aGlzLnBpbm5lZFBvc2l0aW9uLmFkZChjb250YWluZXJSZWN0UG9pbnQpLmFkZChuZXcgUG9pbnQod2luZG93LnNjcm9sbFgsIHdpbmRvdy5zY3JvbGxZKSlcbiAgICApXG5cbiAgICBlbXVsYXRpb25EcmFnZ2FibGUuZHJhZ1N0YXJ0KGV2ZW50KVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIGRyYWdFbmRBY3Rpb24oKSB7XG4gICAgdGhpcy5waW5Qb3NpdGlvbih0aGlzLnBvc2l0aW9uKVxuICB9XG5cbiAgZ2V0UmVjdGFuZ2xlKCkge1xuICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHRoaXMucG9zaXRpb24sIHRoaXMuZ2V0U2l6ZSgpKVxuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICBpZiAodGhpcy5ib3VuZGluZy5yZWZyZXNoKSB7XG4gICAgICB0aGlzLmJvdW5kaW5nLnJlZnJlc2goKVxuICAgIH1cbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5oYW5kbGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydClcbiAgICB0aGlzLmhhbmRsZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0KVxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCB0aGlzLl9uYXRpdmVEcmFnU3RhcnQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgdGhpcy5fbmF0aXZlRHJhZ092ZXIpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIHRoaXMuX25hdGl2ZURyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX25hdGl2ZURyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJvcCcsIHRoaXMuX25hdGl2ZURyb3ApXG4gICAgdGhpcy5yZXNldEVtaXR0ZXIoKVxuXG4gICAgY29uc3QgaW5kZXggPSBkcmFnZ2FibGVzLmluZGV4T2YodGhpcylcbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgZHJhZ2dhYmxlcy5zcGxpY2UoaW5kZXgsIDEpXG4gICAgfVxuICB9XG5cbiAgZ2V0IGNvbnRhaW5lcigpIHtcbiAgICByZXR1cm4gKHRoaXMuX2NvbnRhaW5lciA9IHRoaXMuX2NvbnRhaW5lciB8fCB0aGlzLm9wdGlvbnMuY29udGFpbmVyIHx8IHRoaXMub3B0aW9ucy5wYXJlbnQgfHwgZ2V0RGVmYXVsdENvbnRhaW5lcih0aGlzLmVsZW1lbnQpKVxuICB9XG5cbiAgZ2V0IGhhbmRsZXIoKSB7XG4gICAgaWYgKCF0aGlzLl9oYW5kbGVyKSB7XG4gICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5oYW5kbGVyID09PSAnc3RyaW5nJykge1xuICAgICAgICB0aGlzLl9oYW5kbGVyID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5vcHRpb25zLmhhbmRsZXIpIHx8IHRoaXMuZWxlbWVudFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5faGFuZGxlciA9IHRoaXMub3B0aW9ucy5oYW5kbGVyIHx8IHRoaXMuZWxlbWVudFxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9oYW5kbGVyXG4gIH1cblxuICBnZXQgbmF0aXZlRHJhZ0FuZERyb3AoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5uYXRpdmVEcmFnQW5kRHJvcCB8fCBmYWxzZVxuICB9XG5cbiAgZ2V0IGVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcE9uVG91Y2goKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5lbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3BPblRvdWNoIHx8IGZhbHNlXG4gIH1cblxuICBnZXQgZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wT25BbGxEZXZpY2VzKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wT25BbGxEZXZpY2VzIHx8IGZhbHNlXG4gIH1cblxuICBnZXQgc2hvdWxkUmVtb3ZlWmVyb1RyYW5zbGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLnNob3VsZFJlbW92ZVplcm9UcmFuc2xhdGUgfHwgZmFsc2VcbiAgfVxuXG4gIGdldCBzY3JvbGxQb2ludCgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHdpbmRvdy5zY3JvbGxYLCB3aW5kb3cuc2Nyb2xsWSlcbiAgfVxuXG4gIGdldCBlbmFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZVxuICB9XG5cbiAgc2V0IGVuYWJsZShlbmFibGUpIHtcbiAgICBpZiAoZW5hYmxlKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2VlLWRpc2FibGUnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZHJhZ2VlLWRpc2FibGUnKVxuICAgIH1cblxuICAgIHRoaXMuX2VuYWJsZSA9IGVuYWJsZVxuICB9XG59XG5cbkRyYWdnYWJsZS5lbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcigpXG5EcmFnZ2FibGUuZW1pdHRlci5vbignZHJhZ2dhYmxlOmNyZWF0ZScsIGFkZFRvRGVmYXVsdFNjb3BlKVxuIiwidmFyIHJlc2l6ZU9ic2VydmVycyA9IFtdO1xuZXhwb3J0IHsgcmVzaXplT2JzZXJ2ZXJzIH07XG4iLCJpbXBvcnQgeyByZXNpemVPYnNlcnZlcnMgfSBmcm9tICcuLi91dGlscy9yZXNpemVPYnNlcnZlcnMnO1xudmFyIGhhc0FjdGl2ZU9ic2VydmF0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gcmVzaXplT2JzZXJ2ZXJzLnNvbWUoZnVuY3Rpb24gKHJvKSB7IHJldHVybiByby5hY3RpdmVUYXJnZXRzLmxlbmd0aCA+IDA7IH0pO1xufTtcbmV4cG9ydCB7IGhhc0FjdGl2ZU9ic2VydmF0aW9ucyB9O1xuIiwiaW1wb3J0IHsgcmVzaXplT2JzZXJ2ZXJzIH0gZnJvbSAnLi4vdXRpbHMvcmVzaXplT2JzZXJ2ZXJzJztcbnZhciBoYXNTa2lwcGVkT2JzZXJ2YXRpb25zID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiByZXNpemVPYnNlcnZlcnMuc29tZShmdW5jdGlvbiAocm8pIHsgcmV0dXJuIHJvLnNraXBwZWRUYXJnZXRzLmxlbmd0aCA+IDA7IH0pO1xufTtcbmV4cG9ydCB7IGhhc1NraXBwZWRPYnNlcnZhdGlvbnMgfTtcbiIsInZhciBtc2cgPSAnUmVzaXplT2JzZXJ2ZXIgbG9vcCBjb21wbGV0ZWQgd2l0aCB1bmRlbGl2ZXJlZCBub3RpZmljYXRpb25zLic7XG52YXIgZGVsaXZlclJlc2l6ZUxvb3BFcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXZlbnQ7XG4gICAgaWYgKHR5cGVvZiBFcnJvckV2ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGV2ZW50ID0gbmV3IEVycm9yRXZlbnQoJ2Vycm9yJywge1xuICAgICAgICAgICAgbWVzc2FnZTogbXNnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKTtcbiAgICAgICAgZXZlbnQuaW5pdEV2ZW50KCdlcnJvcicsIGZhbHNlLCBmYWxzZSk7XG4gICAgICAgIGV2ZW50Lm1lc3NhZ2UgPSBtc2c7XG4gICAgfVxuICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbn07XG5leHBvcnQgeyBkZWxpdmVyUmVzaXplTG9vcEVycm9yIH07XG4iLCJ2YXIgUmVzaXplT2JzZXJ2ZXJCb3hPcHRpb25zO1xuKGZ1bmN0aW9uIChSZXNpemVPYnNlcnZlckJveE9wdGlvbnMpIHtcbiAgICBSZXNpemVPYnNlcnZlckJveE9wdGlvbnNbXCJCT1JERVJfQk9YXCJdID0gXCJib3JkZXItYm94XCI7XG4gICAgUmVzaXplT2JzZXJ2ZXJCb3hPcHRpb25zW1wiQ09OVEVOVF9CT1hcIl0gPSBcImNvbnRlbnQtYm94XCI7XG4gICAgUmVzaXplT2JzZXJ2ZXJCb3hPcHRpb25zW1wiREVWSUNFX1BJWEVMX0NPTlRFTlRfQk9YXCJdID0gXCJkZXZpY2UtcGl4ZWwtY29udGVudC1ib3hcIjtcbn0pKFJlc2l6ZU9ic2VydmVyQm94T3B0aW9ucyB8fCAoUmVzaXplT2JzZXJ2ZXJCb3hPcHRpb25zID0ge30pKTtcbmV4cG9ydCB7IFJlc2l6ZU9ic2VydmVyQm94T3B0aW9ucyB9O1xuIiwiZXhwb3J0IHZhciBmcmVlemUgPSBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBPYmplY3QuZnJlZXplKG9iaik7IH07XG4iLCJpbXBvcnQgeyBmcmVlemUgfSBmcm9tICcuL3V0aWxzL2ZyZWV6ZSc7XG52YXIgUmVzaXplT2JzZXJ2ZXJTaXplID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBSZXNpemVPYnNlcnZlclNpemUoaW5saW5lU2l6ZSwgYmxvY2tTaXplKSB7XG4gICAgICAgIHRoaXMuaW5saW5lU2l6ZSA9IGlubGluZVNpemU7XG4gICAgICAgIHRoaXMuYmxvY2tTaXplID0gYmxvY2tTaXplO1xuICAgICAgICBmcmVlemUodGhpcyk7XG4gICAgfVxuICAgIHJldHVybiBSZXNpemVPYnNlcnZlclNpemU7XG59KCkpO1xuZXhwb3J0IHsgUmVzaXplT2JzZXJ2ZXJTaXplIH07XG4iLCJpbXBvcnQgeyBmcmVlemUgfSBmcm9tICcuL3V0aWxzL2ZyZWV6ZSc7XG52YXIgRE9NUmVjdFJlYWRPbmx5ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBET01SZWN0UmVhZE9ubHkoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICB0aGlzLnRvcCA9IHRoaXMueTtcbiAgICAgICAgdGhpcy5sZWZ0ID0gdGhpcy54O1xuICAgICAgICB0aGlzLmJvdHRvbSA9IHRoaXMudG9wICsgdGhpcy5oZWlnaHQ7XG4gICAgICAgIHRoaXMucmlnaHQgPSB0aGlzLmxlZnQgKyB0aGlzLndpZHRoO1xuICAgICAgICByZXR1cm4gZnJlZXplKHRoaXMpO1xuICAgIH1cbiAgICBET01SZWN0UmVhZE9ubHkucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hID0gdGhpcywgeCA9IF9hLngsIHkgPSBfYS55LCB0b3AgPSBfYS50b3AsIHJpZ2h0ID0gX2EucmlnaHQsIGJvdHRvbSA9IF9hLmJvdHRvbSwgbGVmdCA9IF9hLmxlZnQsIHdpZHRoID0gX2Eud2lkdGgsIGhlaWdodCA9IF9hLmhlaWdodDtcbiAgICAgICAgcmV0dXJuIHsgeDogeCwgeTogeSwgdG9wOiB0b3AsIHJpZ2h0OiByaWdodCwgYm90dG9tOiBib3R0b20sIGxlZnQ6IGxlZnQsIHdpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHQgfTtcbiAgICB9O1xuICAgIERPTVJlY3RSZWFkT25seS5mcm9tUmVjdCA9IGZ1bmN0aW9uIChyZWN0YW5nbGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBET01SZWN0UmVhZE9ubHkocmVjdGFuZ2xlLngsIHJlY3RhbmdsZS55LCByZWN0YW5nbGUud2lkdGgsIHJlY3RhbmdsZS5oZWlnaHQpO1xuICAgIH07XG4gICAgcmV0dXJuIERPTVJlY3RSZWFkT25seTtcbn0oKSk7XG5leHBvcnQgeyBET01SZWN0UmVhZE9ubHkgfTtcbiIsInZhciBpc1NWRyA9IGZ1bmN0aW9uICh0YXJnZXQpIHsgcmV0dXJuIHRhcmdldCBpbnN0YW5jZW9mIFNWR0VsZW1lbnQgJiYgJ2dldEJCb3gnIGluIHRhcmdldDsgfTtcbnZhciBpc0hpZGRlbiA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBpZiAoaXNTVkcodGFyZ2V0KSkge1xuICAgICAgICB2YXIgX2EgPSB0YXJnZXQuZ2V0QkJveCgpLCB3aWR0aCA9IF9hLndpZHRoLCBoZWlnaHQgPSBfYS5oZWlnaHQ7XG4gICAgICAgIHJldHVybiAhd2lkdGggJiYgIWhlaWdodDtcbiAgICB9XG4gICAgdmFyIF9iID0gdGFyZ2V0LCBvZmZzZXRXaWR0aCA9IF9iLm9mZnNldFdpZHRoLCBvZmZzZXRIZWlnaHQgPSBfYi5vZmZzZXRIZWlnaHQ7XG4gICAgcmV0dXJuICEob2Zmc2V0V2lkdGggfHwgb2Zmc2V0SGVpZ2h0IHx8IHRhcmdldC5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCk7XG59O1xudmFyIGlzRWxlbWVudCA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICB2YXIgX2EsIF9iO1xuICAgIGlmIChvYmogaW5zdGFuY2VvZiBFbGVtZW50KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICB2YXIgc2NvcGUgPSAoX2IgPSAoX2EgPSBvYmopID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5vd25lckRvY3VtZW50KSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuZGVmYXVsdFZpZXc7XG4gICAgcmV0dXJuICEhKHNjb3BlICYmIG9iaiBpbnN0YW5jZW9mIHNjb3BlLkVsZW1lbnQpO1xufTtcbnZhciBpc1JlcGxhY2VkRWxlbWVudCA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBzd2l0Y2ggKHRhcmdldC50YWdOYW1lKSB7XG4gICAgICAgIGNhc2UgJ0lOUFVUJzpcbiAgICAgICAgICAgIGlmICh0YXJnZXQudHlwZSAhPT0gJ2ltYWdlJykge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICBjYXNlICdWSURFTyc6XG4gICAgICAgIGNhc2UgJ0FVRElPJzpcbiAgICAgICAgY2FzZSAnRU1CRUQnOlxuICAgICAgICBjYXNlICdPQkpFQ1QnOlxuICAgICAgICBjYXNlICdDQU5WQVMnOlxuICAgICAgICBjYXNlICdJRlJBTUUnOlxuICAgICAgICBjYXNlICdJTUcnOlxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn07XG5leHBvcnQgeyBpc1NWRywgaXNIaWRkZW4sIGlzRWxlbWVudCwgaXNSZXBsYWNlZEVsZW1lbnQgfTtcbiIsImV4cG9ydCB2YXIgZ2xvYmFsID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB7fTtcbiIsImltcG9ydCB7IFJlc2l6ZU9ic2VydmVyQm94T3B0aW9ucyB9IGZyb20gJy4uL1Jlc2l6ZU9ic2VydmVyQm94T3B0aW9ucyc7XG5pbXBvcnQgeyBSZXNpemVPYnNlcnZlclNpemUgfSBmcm9tICcuLi9SZXNpemVPYnNlcnZlclNpemUnO1xuaW1wb3J0IHsgRE9NUmVjdFJlYWRPbmx5IH0gZnJvbSAnLi4vRE9NUmVjdFJlYWRPbmx5JztcbmltcG9ydCB7IGlzU1ZHLCBpc0hpZGRlbiB9IGZyb20gJy4uL3V0aWxzL2VsZW1lbnQnO1xuaW1wb3J0IHsgZnJlZXplIH0gZnJvbSAnLi4vdXRpbHMvZnJlZXplJztcbmltcG9ydCB7IGdsb2JhbCB9IGZyb20gJy4uL3V0aWxzL2dsb2JhbCc7XG52YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xudmFyIHNjcm9sbFJlZ2V4cCA9IC9hdXRvfHNjcm9sbC87XG52YXIgdmVydGljYWxSZWdleHAgPSAvXnRifHZlcnRpY2FsLztcbnZhciBJRSA9ICgvbXNpZXx0cmlkZW50L2kpLnRlc3QoZ2xvYmFsLm5hdmlnYXRvciAmJiBnbG9iYWwubmF2aWdhdG9yLnVzZXJBZ2VudCk7XG52YXIgcGFyc2VEaW1lbnNpb24gPSBmdW5jdGlvbiAocGl4ZWwpIHsgcmV0dXJuIHBhcnNlRmxvYXQocGl4ZWwgfHwgJzAnKTsgfTtcbnZhciBzaXplID0gZnVuY3Rpb24gKGlubGluZVNpemUsIGJsb2NrU2l6ZSwgc3dpdGNoU2l6ZXMpIHtcbiAgICBpZiAoaW5saW5lU2l6ZSA9PT0gdm9pZCAwKSB7IGlubGluZVNpemUgPSAwOyB9XG4gICAgaWYgKGJsb2NrU2l6ZSA9PT0gdm9pZCAwKSB7IGJsb2NrU2l6ZSA9IDA7IH1cbiAgICBpZiAoc3dpdGNoU2l6ZXMgPT09IHZvaWQgMCkgeyBzd2l0Y2hTaXplcyA9IGZhbHNlOyB9XG4gICAgcmV0dXJuIG5ldyBSZXNpemVPYnNlcnZlclNpemUoKHN3aXRjaFNpemVzID8gYmxvY2tTaXplIDogaW5saW5lU2l6ZSkgfHwgMCwgKHN3aXRjaFNpemVzID8gaW5saW5lU2l6ZSA6IGJsb2NrU2l6ZSkgfHwgMCk7XG59O1xudmFyIHplcm9Cb3hlcyA9IGZyZWV6ZSh7XG4gICAgZGV2aWNlUGl4ZWxDb250ZW50Qm94U2l6ZTogc2l6ZSgpLFxuICAgIGJvcmRlckJveFNpemU6IHNpemUoKSxcbiAgICBjb250ZW50Qm94U2l6ZTogc2l6ZSgpLFxuICAgIGNvbnRlbnRSZWN0OiBuZXcgRE9NUmVjdFJlYWRPbmx5KDAsIDAsIDAsIDApXG59KTtcbnZhciBjYWxjdWxhdGVCb3hTaXplcyA9IGZ1bmN0aW9uICh0YXJnZXQsIGZvcmNlUmVjYWxjdWxhdGlvbikge1xuICAgIGlmIChmb3JjZVJlY2FsY3VsYXRpb24gPT09IHZvaWQgMCkgeyBmb3JjZVJlY2FsY3VsYXRpb24gPSBmYWxzZTsgfVxuICAgIGlmIChjYWNoZS5oYXModGFyZ2V0KSAmJiAhZm9yY2VSZWNhbGN1bGF0aW9uKSB7XG4gICAgICAgIHJldHVybiBjYWNoZS5nZXQodGFyZ2V0KTtcbiAgICB9XG4gICAgaWYgKGlzSGlkZGVuKHRhcmdldCkpIHtcbiAgICAgICAgY2FjaGUuc2V0KHRhcmdldCwgemVyb0JveGVzKTtcbiAgICAgICAgcmV0dXJuIHplcm9Cb3hlcztcbiAgICB9XG4gICAgdmFyIGNzID0gZ2V0Q29tcHV0ZWRTdHlsZSh0YXJnZXQpO1xuICAgIHZhciBzdmcgPSBpc1NWRyh0YXJnZXQpICYmIHRhcmdldC5vd25lclNWR0VsZW1lbnQgJiYgdGFyZ2V0LmdldEJCb3goKTtcbiAgICB2YXIgcmVtb3ZlUGFkZGluZyA9ICFJRSAmJiBjcy5ib3hTaXppbmcgPT09ICdib3JkZXItYm94JztcbiAgICB2YXIgc3dpdGNoU2l6ZXMgPSB2ZXJ0aWNhbFJlZ2V4cC50ZXN0KGNzLndyaXRpbmdNb2RlIHx8ICcnKTtcbiAgICB2YXIgY2FuU2Nyb2xsVmVydGljYWxseSA9ICFzdmcgJiYgc2Nyb2xsUmVnZXhwLnRlc3QoY3Mub3ZlcmZsb3dZIHx8ICcnKTtcbiAgICB2YXIgY2FuU2Nyb2xsSG9yaXpvbnRhbGx5ID0gIXN2ZyAmJiBzY3JvbGxSZWdleHAudGVzdChjcy5vdmVyZmxvd1ggfHwgJycpO1xuICAgIHZhciBwYWRkaW5nVG9wID0gc3ZnID8gMCA6IHBhcnNlRGltZW5zaW9uKGNzLnBhZGRpbmdUb3ApO1xuICAgIHZhciBwYWRkaW5nUmlnaHQgPSBzdmcgPyAwIDogcGFyc2VEaW1lbnNpb24oY3MucGFkZGluZ1JpZ2h0KTtcbiAgICB2YXIgcGFkZGluZ0JvdHRvbSA9IHN2ZyA/IDAgOiBwYXJzZURpbWVuc2lvbihjcy5wYWRkaW5nQm90dG9tKTtcbiAgICB2YXIgcGFkZGluZ0xlZnQgPSBzdmcgPyAwIDogcGFyc2VEaW1lbnNpb24oY3MucGFkZGluZ0xlZnQpO1xuICAgIHZhciBib3JkZXJUb3AgPSBzdmcgPyAwIDogcGFyc2VEaW1lbnNpb24oY3MuYm9yZGVyVG9wV2lkdGgpO1xuICAgIHZhciBib3JkZXJSaWdodCA9IHN2ZyA/IDAgOiBwYXJzZURpbWVuc2lvbihjcy5ib3JkZXJSaWdodFdpZHRoKTtcbiAgICB2YXIgYm9yZGVyQm90dG9tID0gc3ZnID8gMCA6IHBhcnNlRGltZW5zaW9uKGNzLmJvcmRlckJvdHRvbVdpZHRoKTtcbiAgICB2YXIgYm9yZGVyTGVmdCA9IHN2ZyA/IDAgOiBwYXJzZURpbWVuc2lvbihjcy5ib3JkZXJMZWZ0V2lkdGgpO1xuICAgIHZhciBob3Jpem9udGFsUGFkZGluZyA9IHBhZGRpbmdMZWZ0ICsgcGFkZGluZ1JpZ2h0O1xuICAgIHZhciB2ZXJ0aWNhbFBhZGRpbmcgPSBwYWRkaW5nVG9wICsgcGFkZGluZ0JvdHRvbTtcbiAgICB2YXIgaG9yaXpvbnRhbEJvcmRlckFyZWEgPSBib3JkZXJMZWZ0ICsgYm9yZGVyUmlnaHQ7XG4gICAgdmFyIHZlcnRpY2FsQm9yZGVyQXJlYSA9IGJvcmRlclRvcCArIGJvcmRlckJvdHRvbTtcbiAgICB2YXIgaG9yaXpvbnRhbFNjcm9sbGJhclRoaWNrbmVzcyA9ICFjYW5TY3JvbGxIb3Jpem9udGFsbHkgPyAwIDogdGFyZ2V0Lm9mZnNldEhlaWdodCAtIHZlcnRpY2FsQm9yZGVyQXJlYSAtIHRhcmdldC5jbGllbnRIZWlnaHQ7XG4gICAgdmFyIHZlcnRpY2FsU2Nyb2xsYmFyVGhpY2tuZXNzID0gIWNhblNjcm9sbFZlcnRpY2FsbHkgPyAwIDogdGFyZ2V0Lm9mZnNldFdpZHRoIC0gaG9yaXpvbnRhbEJvcmRlckFyZWEgLSB0YXJnZXQuY2xpZW50V2lkdGg7XG4gICAgdmFyIHdpZHRoUmVkdWN0aW9uID0gcmVtb3ZlUGFkZGluZyA/IGhvcml6b250YWxQYWRkaW5nICsgaG9yaXpvbnRhbEJvcmRlckFyZWEgOiAwO1xuICAgIHZhciBoZWlnaHRSZWR1Y3Rpb24gPSByZW1vdmVQYWRkaW5nID8gdmVydGljYWxQYWRkaW5nICsgdmVydGljYWxCb3JkZXJBcmVhIDogMDtcbiAgICB2YXIgY29udGVudFdpZHRoID0gc3ZnID8gc3ZnLndpZHRoIDogcGFyc2VEaW1lbnNpb24oY3Mud2lkdGgpIC0gd2lkdGhSZWR1Y3Rpb24gLSB2ZXJ0aWNhbFNjcm9sbGJhclRoaWNrbmVzcztcbiAgICB2YXIgY29udGVudEhlaWdodCA9IHN2ZyA/IHN2Zy5oZWlnaHQgOiBwYXJzZURpbWVuc2lvbihjcy5oZWlnaHQpIC0gaGVpZ2h0UmVkdWN0aW9uIC0gaG9yaXpvbnRhbFNjcm9sbGJhclRoaWNrbmVzcztcbiAgICB2YXIgYm9yZGVyQm94V2lkdGggPSBjb250ZW50V2lkdGggKyBob3Jpem9udGFsUGFkZGluZyArIHZlcnRpY2FsU2Nyb2xsYmFyVGhpY2tuZXNzICsgaG9yaXpvbnRhbEJvcmRlckFyZWE7XG4gICAgdmFyIGJvcmRlckJveEhlaWdodCA9IGNvbnRlbnRIZWlnaHQgKyB2ZXJ0aWNhbFBhZGRpbmcgKyBob3Jpem9udGFsU2Nyb2xsYmFyVGhpY2tuZXNzICsgdmVydGljYWxCb3JkZXJBcmVhO1xuICAgIHZhciBib3hlcyA9IGZyZWV6ZSh7XG4gICAgICAgIGRldmljZVBpeGVsQ29udGVudEJveFNpemU6IHNpemUoTWF0aC5yb3VuZChjb250ZW50V2lkdGggKiBkZXZpY2VQaXhlbFJhdGlvKSwgTWF0aC5yb3VuZChjb250ZW50SGVpZ2h0ICogZGV2aWNlUGl4ZWxSYXRpbyksIHN3aXRjaFNpemVzKSxcbiAgICAgICAgYm9yZGVyQm94U2l6ZTogc2l6ZShib3JkZXJCb3hXaWR0aCwgYm9yZGVyQm94SGVpZ2h0LCBzd2l0Y2hTaXplcyksXG4gICAgICAgIGNvbnRlbnRCb3hTaXplOiBzaXplKGNvbnRlbnRXaWR0aCwgY29udGVudEhlaWdodCwgc3dpdGNoU2l6ZXMpLFxuICAgICAgICBjb250ZW50UmVjdDogbmV3IERPTVJlY3RSZWFkT25seShwYWRkaW5nTGVmdCwgcGFkZGluZ1RvcCwgY29udGVudFdpZHRoLCBjb250ZW50SGVpZ2h0KVxuICAgIH0pO1xuICAgIGNhY2hlLnNldCh0YXJnZXQsIGJveGVzKTtcbiAgICByZXR1cm4gYm94ZXM7XG59O1xudmFyIGNhbGN1bGF0ZUJveFNpemUgPSBmdW5jdGlvbiAodGFyZ2V0LCBvYnNlcnZlZEJveCwgZm9yY2VSZWNhbGN1bGF0aW9uKSB7XG4gICAgdmFyIF9hID0gY2FsY3VsYXRlQm94U2l6ZXModGFyZ2V0LCBmb3JjZVJlY2FsY3VsYXRpb24pLCBib3JkZXJCb3hTaXplID0gX2EuYm9yZGVyQm94U2l6ZSwgY29udGVudEJveFNpemUgPSBfYS5jb250ZW50Qm94U2l6ZSwgZGV2aWNlUGl4ZWxDb250ZW50Qm94U2l6ZSA9IF9hLmRldmljZVBpeGVsQ29udGVudEJveFNpemU7XG4gICAgc3dpdGNoIChvYnNlcnZlZEJveCkge1xuICAgICAgICBjYXNlIFJlc2l6ZU9ic2VydmVyQm94T3B0aW9ucy5ERVZJQ0VfUElYRUxfQ09OVEVOVF9CT1g6XG4gICAgICAgICAgICByZXR1cm4gZGV2aWNlUGl4ZWxDb250ZW50Qm94U2l6ZTtcbiAgICAgICAgY2FzZSBSZXNpemVPYnNlcnZlckJveE9wdGlvbnMuQk9SREVSX0JPWDpcbiAgICAgICAgICAgIHJldHVybiBib3JkZXJCb3hTaXplO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIGNvbnRlbnRCb3hTaXplO1xuICAgIH1cbn07XG5leHBvcnQgeyBjYWxjdWxhdGVCb3hTaXplLCBjYWxjdWxhdGVCb3hTaXplcyB9O1xuIiwiaW1wb3J0IHsgY2FsY3VsYXRlQm94U2l6ZXMgfSBmcm9tICcuL2FsZ29yaXRobXMvY2FsY3VsYXRlQm94U2l6ZSc7XG5pbXBvcnQgeyBmcmVlemUgfSBmcm9tICcuL3V0aWxzL2ZyZWV6ZSc7XG52YXIgUmVzaXplT2JzZXJ2ZXJFbnRyeSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUmVzaXplT2JzZXJ2ZXJFbnRyeSh0YXJnZXQpIHtcbiAgICAgICAgdmFyIGJveGVzID0gY2FsY3VsYXRlQm94U2l6ZXModGFyZ2V0KTtcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgIHRoaXMuY29udGVudFJlY3QgPSBib3hlcy5jb250ZW50UmVjdDtcbiAgICAgICAgdGhpcy5ib3JkZXJCb3hTaXplID0gZnJlZXplKFtib3hlcy5ib3JkZXJCb3hTaXplXSk7XG4gICAgICAgIHRoaXMuY29udGVudEJveFNpemUgPSBmcmVlemUoW2JveGVzLmNvbnRlbnRCb3hTaXplXSk7XG4gICAgICAgIHRoaXMuZGV2aWNlUGl4ZWxDb250ZW50Qm94U2l6ZSA9IGZyZWV6ZShbYm94ZXMuZGV2aWNlUGl4ZWxDb250ZW50Qm94U2l6ZV0pO1xuICAgIH1cbiAgICByZXR1cm4gUmVzaXplT2JzZXJ2ZXJFbnRyeTtcbn0oKSk7XG5leHBvcnQgeyBSZXNpemVPYnNlcnZlckVudHJ5IH07XG4iLCJpbXBvcnQgeyBpc0hpZGRlbiB9IGZyb20gJy4uL3V0aWxzL2VsZW1lbnQnO1xudmFyIGNhbGN1bGF0ZURlcHRoRm9yTm9kZSA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgaWYgKGlzSGlkZGVuKG5vZGUpKSB7XG4gICAgICAgIHJldHVybiBJbmZpbml0eTtcbiAgICB9XG4gICAgdmFyIGRlcHRoID0gMDtcbiAgICB2YXIgcGFyZW50ID0gbm9kZS5wYXJlbnROb2RlO1xuICAgIHdoaWxlIChwYXJlbnQpIHtcbiAgICAgICAgZGVwdGggKz0gMTtcbiAgICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGU7XG4gICAgfVxuICAgIHJldHVybiBkZXB0aDtcbn07XG5leHBvcnQgeyBjYWxjdWxhdGVEZXB0aEZvck5vZGUgfTtcbiIsImltcG9ydCB7IHJlc2l6ZU9ic2VydmVycyB9IGZyb20gJy4uL3V0aWxzL3Jlc2l6ZU9ic2VydmVycyc7XG5pbXBvcnQgeyBSZXNpemVPYnNlcnZlckVudHJ5IH0gZnJvbSAnLi4vUmVzaXplT2JzZXJ2ZXJFbnRyeSc7XG5pbXBvcnQgeyBjYWxjdWxhdGVEZXB0aEZvck5vZGUgfSBmcm9tICcuL2NhbGN1bGF0ZURlcHRoRm9yTm9kZSc7XG5pbXBvcnQgeyBjYWxjdWxhdGVCb3hTaXplIH0gZnJvbSAnLi9jYWxjdWxhdGVCb3hTaXplJztcbnZhciBicm9hZGNhc3RBY3RpdmVPYnNlcnZhdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNoYWxsb3dlc3REZXB0aCA9IEluZmluaXR5O1xuICAgIHZhciBjYWxsYmFja3MgPSBbXTtcbiAgICByZXNpemVPYnNlcnZlcnMuZm9yRWFjaChmdW5jdGlvbiBwcm9jZXNzT2JzZXJ2ZXIocm8pIHtcbiAgICAgICAgaWYgKHJvLmFjdGl2ZVRhcmdldHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVudHJpZXMgPSBbXTtcbiAgICAgICAgcm8uYWN0aXZlVGFyZ2V0cy5mb3JFYWNoKGZ1bmN0aW9uIHByb2Nlc3NUYXJnZXQob3QpIHtcbiAgICAgICAgICAgIHZhciBlbnRyeSA9IG5ldyBSZXNpemVPYnNlcnZlckVudHJ5KG90LnRhcmdldCk7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0RGVwdGggPSBjYWxjdWxhdGVEZXB0aEZvck5vZGUob3QudGFyZ2V0KTtcbiAgICAgICAgICAgIGVudHJpZXMucHVzaChlbnRyeSk7XG4gICAgICAgICAgICBvdC5sYXN0UmVwb3J0ZWRTaXplID0gY2FsY3VsYXRlQm94U2l6ZShvdC50YXJnZXQsIG90Lm9ic2VydmVkQm94KTtcbiAgICAgICAgICAgIGlmICh0YXJnZXREZXB0aCA8IHNoYWxsb3dlc3REZXB0aCkge1xuICAgICAgICAgICAgICAgIHNoYWxsb3dlc3REZXB0aCA9IHRhcmdldERlcHRoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY2FsbGJhY2tzLnB1c2goZnVuY3Rpb24gcmVzaXplT2JzZXJ2ZXJDYWxsYmFjaygpIHtcbiAgICAgICAgICAgIHJvLmNhbGxiYWNrLmNhbGwocm8ub2JzZXJ2ZXIsIGVudHJpZXMsIHJvLm9ic2VydmVyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJvLmFjdGl2ZVRhcmdldHMuc3BsaWNlKDAsIHJvLmFjdGl2ZVRhcmdldHMubGVuZ3RoKTtcbiAgICB9KTtcbiAgICBmb3IgKHZhciBfaSA9IDAsIGNhbGxiYWNrc18xID0gY2FsbGJhY2tzOyBfaSA8IGNhbGxiYWNrc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgY2FsbGJhY2sgPSBjYWxsYmFja3NfMVtfaV07XG4gICAgICAgIGNhbGxiYWNrKCk7XG4gICAgfVxuICAgIHJldHVybiBzaGFsbG93ZXN0RGVwdGg7XG59O1xuZXhwb3J0IHsgYnJvYWRjYXN0QWN0aXZlT2JzZXJ2YXRpb25zIH07XG4iLCJpbXBvcnQgeyByZXNpemVPYnNlcnZlcnMgfSBmcm9tICcuLi91dGlscy9yZXNpemVPYnNlcnZlcnMnO1xuaW1wb3J0IHsgY2FsY3VsYXRlRGVwdGhGb3JOb2RlIH0gZnJvbSAnLi9jYWxjdWxhdGVEZXB0aEZvck5vZGUnO1xudmFyIGdhdGhlckFjdGl2ZU9ic2VydmF0aW9uc0F0RGVwdGggPSBmdW5jdGlvbiAoZGVwdGgpIHtcbiAgICByZXNpemVPYnNlcnZlcnMuZm9yRWFjaChmdW5jdGlvbiBwcm9jZXNzT2JzZXJ2ZXIocm8pIHtcbiAgICAgICAgcm8uYWN0aXZlVGFyZ2V0cy5zcGxpY2UoMCwgcm8uYWN0aXZlVGFyZ2V0cy5sZW5ndGgpO1xuICAgICAgICByby5za2lwcGVkVGFyZ2V0cy5zcGxpY2UoMCwgcm8uc2tpcHBlZFRhcmdldHMubGVuZ3RoKTtcbiAgICAgICAgcm8ub2JzZXJ2YXRpb25UYXJnZXRzLmZvckVhY2goZnVuY3Rpb24gcHJvY2Vzc1RhcmdldChvdCkge1xuICAgICAgICAgICAgaWYgKG90LmlzQWN0aXZlKCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2FsY3VsYXRlRGVwdGhGb3JOb2RlKG90LnRhcmdldCkgPiBkZXB0aCkge1xuICAgICAgICAgICAgICAgICAgICByby5hY3RpdmVUYXJnZXRzLnB1c2gob3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcm8uc2tpcHBlZFRhcmdldHMucHVzaChvdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn07XG5leHBvcnQgeyBnYXRoZXJBY3RpdmVPYnNlcnZhdGlvbnNBdERlcHRoIH07XG4iLCJpbXBvcnQgeyBoYXNBY3RpdmVPYnNlcnZhdGlvbnMgfSBmcm9tICcuLi9hbGdvcml0aG1zL2hhc0FjdGl2ZU9ic2VydmF0aW9ucyc7XG5pbXBvcnQgeyBoYXNTa2lwcGVkT2JzZXJ2YXRpb25zIH0gZnJvbSAnLi4vYWxnb3JpdGhtcy9oYXNTa2lwcGVkT2JzZXJ2YXRpb25zJztcbmltcG9ydCB7IGRlbGl2ZXJSZXNpemVMb29wRXJyb3IgfSBmcm9tICcuLi9hbGdvcml0aG1zL2RlbGl2ZXJSZXNpemVMb29wRXJyb3InO1xuaW1wb3J0IHsgYnJvYWRjYXN0QWN0aXZlT2JzZXJ2YXRpb25zIH0gZnJvbSAnLi4vYWxnb3JpdGhtcy9icm9hZGNhc3RBY3RpdmVPYnNlcnZhdGlvbnMnO1xuaW1wb3J0IHsgZ2F0aGVyQWN0aXZlT2JzZXJ2YXRpb25zQXREZXB0aCB9IGZyb20gJy4uL2FsZ29yaXRobXMvZ2F0aGVyQWN0aXZlT2JzZXJ2YXRpb25zQXREZXB0aCc7XG52YXIgcHJvY2VzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZGVwdGggPSAwO1xuICAgIGdhdGhlckFjdGl2ZU9ic2VydmF0aW9uc0F0RGVwdGgoZGVwdGgpO1xuICAgIHdoaWxlIChoYXNBY3RpdmVPYnNlcnZhdGlvbnMoKSkge1xuICAgICAgICBkZXB0aCA9IGJyb2FkY2FzdEFjdGl2ZU9ic2VydmF0aW9ucygpO1xuICAgICAgICBnYXRoZXJBY3RpdmVPYnNlcnZhdGlvbnNBdERlcHRoKGRlcHRoKTtcbiAgICB9XG4gICAgaWYgKGhhc1NraXBwZWRPYnNlcnZhdGlvbnMoKSkge1xuICAgICAgICBkZWxpdmVyUmVzaXplTG9vcEVycm9yKCk7XG4gICAgfVxuICAgIHJldHVybiBkZXB0aCA+IDA7XG59O1xuZXhwb3J0IHsgcHJvY2VzcyB9O1xuIiwidmFyIHRyaWdnZXI7XG52YXIgY2FsbGJhY2tzID0gW107XG52YXIgbm90aWZ5ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gY2FsbGJhY2tzLnNwbGljZSgwKS5mb3JFYWNoKGZ1bmN0aW9uIChjYikgeyByZXR1cm4gY2IoKTsgfSk7IH07XG52YXIgcXVldWVNaWNyb1Rhc2sgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICBpZiAoIXRyaWdnZXIpIHtcbiAgICAgICAgdmFyIHRvZ2dsZV8xID0gMDtcbiAgICAgICAgdmFyIGVsXzEgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgICAgIHZhciBjb25maWcgPSB7IGNoYXJhY3RlckRhdGE6IHRydWUgfTtcbiAgICAgICAgbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKCkgeyByZXR1cm4gbm90aWZ5KCk7IH0pLm9ic2VydmUoZWxfMSwgY29uZmlnKTtcbiAgICAgICAgdHJpZ2dlciA9IGZ1bmN0aW9uICgpIHsgZWxfMS50ZXh0Q29udGVudCA9IFwiXCIgKyAodG9nZ2xlXzEgPyB0b2dnbGVfMS0tIDogdG9nZ2xlXzErKyk7IH07XG4gICAgfVxuICAgIGNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcbiAgICB0cmlnZ2VyKCk7XG59O1xuZXhwb3J0IHsgcXVldWVNaWNyb1Rhc2sgfTtcbiIsImltcG9ydCB7IHF1ZXVlTWljcm9UYXNrIH0gZnJvbSAnLi9xdWV1ZU1pY3JvVGFzayc7XG52YXIgcXVldWVSZXNpemVPYnNlcnZlciA9IGZ1bmN0aW9uIChjYikge1xuICAgIHF1ZXVlTWljcm9UYXNrKGZ1bmN0aW9uIFJlc2l6ZU9ic2VydmVyKCkge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2IpO1xuICAgIH0pO1xufTtcbmV4cG9ydCB7IHF1ZXVlUmVzaXplT2JzZXJ2ZXIgfTtcbiIsImltcG9ydCB7IHByb2Nlc3MgfSBmcm9tICcuL3Byb2Nlc3MnO1xuaW1wb3J0IHsgZ2xvYmFsIH0gZnJvbSAnLi9nbG9iYWwnO1xuaW1wb3J0IHsgcXVldWVSZXNpemVPYnNlcnZlciB9IGZyb20gJy4vcXVldWVSZXNpemVPYnNlcnZlcic7XG52YXIgd2F0Y2hpbmcgPSAwO1xudmFyIGlzV2F0Y2hpbmcgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAhIXdhdGNoaW5nOyB9O1xudmFyIENBVENIX1BFUklPRCA9IDI1MDtcbnZhciBvYnNlcnZlckNvbmZpZyA9IHsgYXR0cmlidXRlczogdHJ1ZSwgY2hhcmFjdGVyRGF0YTogdHJ1ZSwgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH07XG52YXIgZXZlbnRzID0gW1xuICAgICdyZXNpemUnLFxuICAgICdsb2FkJyxcbiAgICAndHJhbnNpdGlvbmVuZCcsXG4gICAgJ2FuaW1hdGlvbmVuZCcsXG4gICAgJ2FuaW1hdGlvbnN0YXJ0JyxcbiAgICAnYW5pbWF0aW9uaXRlcmF0aW9uJyxcbiAgICAna2V5dXAnLFxuICAgICdrZXlkb3duJyxcbiAgICAnbW91c2V1cCcsXG4gICAgJ21vdXNlZG93bicsXG4gICAgJ21vdXNlb3ZlcicsXG4gICAgJ21vdXNlb3V0JyxcbiAgICAnYmx1cicsXG4gICAgJ2ZvY3VzJ1xuXTtcbnZhciB0aW1lID0gZnVuY3Rpb24gKHRpbWVvdXQpIHtcbiAgICBpZiAodGltZW91dCA9PT0gdm9pZCAwKSB7IHRpbWVvdXQgPSAwOyB9XG4gICAgcmV0dXJuIERhdGUubm93KCkgKyB0aW1lb3V0O1xufTtcbnZhciBzY2hlZHVsZWQgPSBmYWxzZTtcbnZhciBTY2hlZHVsZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNjaGVkdWxlcigpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5zdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5saXN0ZW5lciA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLnNjaGVkdWxlKCk7IH07XG4gICAgfVxuICAgIFNjaGVkdWxlci5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKHRpbWVvdXQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRpbWVvdXQgPT09IHZvaWQgMCkgeyB0aW1lb3V0ID0gQ0FUQ0hfUEVSSU9EOyB9XG4gICAgICAgIGlmIChzY2hlZHVsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzY2hlZHVsZWQgPSB0cnVlO1xuICAgICAgICB2YXIgdW50aWwgPSB0aW1lKHRpbWVvdXQpO1xuICAgICAgICBxdWV1ZVJlc2l6ZU9ic2VydmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBlbGVtZW50c0hhdmVSZXNpemVkID0gZmFsc2U7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnRzSGF2ZVJlc2l6ZWQgPSBwcm9jZXNzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICBzY2hlZHVsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aW1lb3V0ID0gdW50aWwgLSB0aW1lKCk7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1dhdGNoaW5nKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudHNIYXZlUmVzaXplZCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5ydW4oMTAwMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRpbWVvdXQgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnJ1bih0aW1lb3V0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFNjaGVkdWxlci5wcm90b3R5cGUuc2NoZWR1bGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICB0aGlzLnJ1bigpO1xuICAgIH07XG4gICAgU2NoZWR1bGVyLnByb3RvdHlwZS5vYnNlcnZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgY2IgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5vYnNlcnZlciAmJiBfdGhpcy5vYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmJvZHksIG9ic2VydmVyQ29uZmlnKTsgfTtcbiAgICAgICAgZG9jdW1lbnQuYm9keSA/IGNiKCkgOiBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGNiKTtcbiAgICB9O1xuICAgIFNjaGVkdWxlci5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLnN0b3BwZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcHBlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5vYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXMubGlzdGVuZXIpO1xuICAgICAgICAgICAgdGhpcy5vYnNlcnZlKCk7XG4gICAgICAgICAgICBldmVudHMuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgX3RoaXMubGlzdGVuZXIsIHRydWUpOyB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU2NoZWR1bGVyLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoIXRoaXMuc3RvcHBlZCkge1xuICAgICAgICAgICAgdGhpcy5vYnNlcnZlciAmJiB0aGlzLm9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIGV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBnbG9iYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihuYW1lLCBfdGhpcy5saXN0ZW5lciwgdHJ1ZSk7IH0pO1xuICAgICAgICAgICAgdGhpcy5zdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIFNjaGVkdWxlcjtcbn0oKSk7XG52YXIgc2NoZWR1bGVyID0gbmV3IFNjaGVkdWxlcigpO1xudmFyIHVwZGF0ZUNvdW50ID0gZnVuY3Rpb24gKG4pIHtcbiAgICAhd2F0Y2hpbmcgJiYgbiA+IDAgJiYgc2NoZWR1bGVyLnN0YXJ0KCk7XG4gICAgd2F0Y2hpbmcgKz0gbjtcbiAgICAhd2F0Y2hpbmcgJiYgc2NoZWR1bGVyLnN0b3AoKTtcbn07XG5leHBvcnQgeyBzY2hlZHVsZXIsIHVwZGF0ZUNvdW50IH07XG4iLCJpbXBvcnQgeyBSZXNpemVPYnNlcnZlckJveE9wdGlvbnMgfSBmcm9tICcuL1Jlc2l6ZU9ic2VydmVyQm94T3B0aW9ucyc7XG5pbXBvcnQgeyBjYWxjdWxhdGVCb3hTaXplIH0gZnJvbSAnLi9hbGdvcml0aG1zL2NhbGN1bGF0ZUJveFNpemUnO1xuaW1wb3J0IHsgaXNTVkcsIGlzUmVwbGFjZWRFbGVtZW50IH0gZnJvbSAnLi91dGlscy9lbGVtZW50JztcbnZhciBza2lwTm90aWZ5T25FbGVtZW50ID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIHJldHVybiAhaXNTVkcodGFyZ2V0KVxuICAgICAgICAmJiAhaXNSZXBsYWNlZEVsZW1lbnQodGFyZ2V0KVxuICAgICAgICAmJiBnZXRDb21wdXRlZFN0eWxlKHRhcmdldCkuZGlzcGxheSA9PT0gJ2lubGluZSc7XG59O1xudmFyIFJlc2l6ZU9ic2VydmF0aW9uID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBSZXNpemVPYnNlcnZhdGlvbih0YXJnZXQsIG9ic2VydmVkQm94KSB7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICB0aGlzLm9ic2VydmVkQm94ID0gb2JzZXJ2ZWRCb3ggfHwgUmVzaXplT2JzZXJ2ZXJCb3hPcHRpb25zLkNPTlRFTlRfQk9YO1xuICAgICAgICB0aGlzLmxhc3RSZXBvcnRlZFNpemUgPSB7XG4gICAgICAgICAgICBpbmxpbmVTaXplOiAwLFxuICAgICAgICAgICAgYmxvY2tTaXplOiAwXG4gICAgICAgIH07XG4gICAgfVxuICAgIFJlc2l6ZU9ic2VydmF0aW9uLnByb3RvdHlwZS5pc0FjdGl2ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHNpemUgPSBjYWxjdWxhdGVCb3hTaXplKHRoaXMudGFyZ2V0LCB0aGlzLm9ic2VydmVkQm94LCB0cnVlKTtcbiAgICAgICAgaWYgKHNraXBOb3RpZnlPbkVsZW1lbnQodGhpcy50YXJnZXQpKSB7XG4gICAgICAgICAgICB0aGlzLmxhc3RSZXBvcnRlZFNpemUgPSBzaXplO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmxhc3RSZXBvcnRlZFNpemUuaW5saW5lU2l6ZSAhPT0gc2l6ZS5pbmxpbmVTaXplXG4gICAgICAgICAgICB8fCB0aGlzLmxhc3RSZXBvcnRlZFNpemUuYmxvY2tTaXplICE9PSBzaXplLmJsb2NrU2l6ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgcmV0dXJuIFJlc2l6ZU9ic2VydmF0aW9uO1xufSgpKTtcbmV4cG9ydCB7IFJlc2l6ZU9ic2VydmF0aW9uIH07XG4iLCJ2YXIgUmVzaXplT2JzZXJ2ZXJEZXRhaWwgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFJlc2l6ZU9ic2VydmVyRGV0YWlsKHJlc2l6ZU9ic2VydmVyLCBjYWxsYmFjaykge1xuICAgICAgICB0aGlzLmFjdGl2ZVRhcmdldHMgPSBbXTtcbiAgICAgICAgdGhpcy5za2lwcGVkVGFyZ2V0cyA9IFtdO1xuICAgICAgICB0aGlzLm9ic2VydmF0aW9uVGFyZ2V0cyA9IFtdO1xuICAgICAgICB0aGlzLm9ic2VydmVyID0gcmVzaXplT2JzZXJ2ZXI7XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICB9XG4gICAgcmV0dXJuIFJlc2l6ZU9ic2VydmVyRGV0YWlsO1xufSgpKTtcbmV4cG9ydCB7IFJlc2l6ZU9ic2VydmVyRGV0YWlsIH07XG4iLCJpbXBvcnQgeyBzY2hlZHVsZXIsIHVwZGF0ZUNvdW50IH0gZnJvbSAnLi91dGlscy9zY2hlZHVsZXInO1xuaW1wb3J0IHsgUmVzaXplT2JzZXJ2YXRpb24gfSBmcm9tICcuL1Jlc2l6ZU9ic2VydmF0aW9uJztcbmltcG9ydCB7IFJlc2l6ZU9ic2VydmVyRGV0YWlsIH0gZnJvbSAnLi9SZXNpemVPYnNlcnZlckRldGFpbCc7XG5pbXBvcnQgeyByZXNpemVPYnNlcnZlcnMgfSBmcm9tICcuL3V0aWxzL3Jlc2l6ZU9ic2VydmVycyc7XG52YXIgb2JzZXJ2ZXJNYXAgPSBuZXcgV2Vha01hcCgpO1xudmFyIGdldE9ic2VydmF0aW9uSW5kZXggPSBmdW5jdGlvbiAob2JzZXJ2YXRpb25UYXJnZXRzLCB0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9ic2VydmF0aW9uVGFyZ2V0cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAob2JzZXJ2YXRpb25UYXJnZXRzW2ldLnRhcmdldCA9PT0gdGFyZ2V0KSB7XG4gICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gLTE7XG59O1xudmFyIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyKCkge1xuICAgIH1cbiAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIuY29ubmVjdCA9IGZ1bmN0aW9uIChyZXNpemVPYnNlcnZlciwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIGRldGFpbCA9IG5ldyBSZXNpemVPYnNlcnZlckRldGFpbChyZXNpemVPYnNlcnZlciwgY2FsbGJhY2spO1xuICAgICAgICBvYnNlcnZlck1hcC5zZXQocmVzaXplT2JzZXJ2ZXIsIGRldGFpbCk7XG4gICAgfTtcbiAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIub2JzZXJ2ZSA9IGZ1bmN0aW9uIChyZXNpemVPYnNlcnZlciwgdGFyZ2V0LCBvcHRpb25zKSB7XG4gICAgICAgIHZhciBkZXRhaWwgPSBvYnNlcnZlck1hcC5nZXQocmVzaXplT2JzZXJ2ZXIpO1xuICAgICAgICB2YXIgZmlyc3RPYnNlcnZhdGlvbiA9IGRldGFpbC5vYnNlcnZhdGlvblRhcmdldHMubGVuZ3RoID09PSAwO1xuICAgICAgICBpZiAoZ2V0T2JzZXJ2YXRpb25JbmRleChkZXRhaWwub2JzZXJ2YXRpb25UYXJnZXRzLCB0YXJnZXQpIDwgMCkge1xuICAgICAgICAgICAgZmlyc3RPYnNlcnZhdGlvbiAmJiByZXNpemVPYnNlcnZlcnMucHVzaChkZXRhaWwpO1xuICAgICAgICAgICAgZGV0YWlsLm9ic2VydmF0aW9uVGFyZ2V0cy5wdXNoKG5ldyBSZXNpemVPYnNlcnZhdGlvbih0YXJnZXQsIG9wdGlvbnMgJiYgb3B0aW9ucy5ib3gpKTtcbiAgICAgICAgICAgIHVwZGF0ZUNvdW50KDEpO1xuICAgICAgICAgICAgc2NoZWR1bGVyLnNjaGVkdWxlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci51bm9ic2VydmUgPSBmdW5jdGlvbiAocmVzaXplT2JzZXJ2ZXIsIHRhcmdldCkge1xuICAgICAgICB2YXIgZGV0YWlsID0gb2JzZXJ2ZXJNYXAuZ2V0KHJlc2l6ZU9ic2VydmVyKTtcbiAgICAgICAgdmFyIGluZGV4ID0gZ2V0T2JzZXJ2YXRpb25JbmRleChkZXRhaWwub2JzZXJ2YXRpb25UYXJnZXRzLCB0YXJnZXQpO1xuICAgICAgICB2YXIgbGFzdE9ic2VydmF0aW9uID0gZGV0YWlsLm9ic2VydmF0aW9uVGFyZ2V0cy5sZW5ndGggPT09IDE7XG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgICBsYXN0T2JzZXJ2YXRpb24gJiYgcmVzaXplT2JzZXJ2ZXJzLnNwbGljZShyZXNpemVPYnNlcnZlcnMuaW5kZXhPZihkZXRhaWwpLCAxKTtcbiAgICAgICAgICAgIGRldGFpbC5vYnNlcnZhdGlvblRhcmdldHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIHVwZGF0ZUNvdW50KC0xKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLmRpc2Nvbm5lY3QgPSBmdW5jdGlvbiAocmVzaXplT2JzZXJ2ZXIpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGRldGFpbCA9IG9ic2VydmVyTWFwLmdldChyZXNpemVPYnNlcnZlcik7XG4gICAgICAgIGRldGFpbC5vYnNlcnZhdGlvblRhcmdldHMuc2xpY2UoKS5mb3JFYWNoKGZ1bmN0aW9uIChvdCkgeyByZXR1cm4gX3RoaXMudW5vYnNlcnZlKHJlc2l6ZU9ic2VydmVyLCBvdC50YXJnZXQpOyB9KTtcbiAgICAgICAgZGV0YWlsLmFjdGl2ZVRhcmdldHMuc3BsaWNlKDAsIGRldGFpbC5hY3RpdmVUYXJnZXRzLmxlbmd0aCk7XG4gICAgfTtcbiAgICByZXR1cm4gUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyO1xufSgpKTtcbmV4cG9ydCB7IFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlciB9O1xuIiwiaW1wb3J0IHsgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyIH0gZnJvbSAnLi9SZXNpemVPYnNlcnZlckNvbnRyb2xsZXInO1xuaW1wb3J0IHsgaXNFbGVtZW50IH0gZnJvbSAnLi91dGlscy9lbGVtZW50JztcbnZhciBSZXNpemVPYnNlcnZlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUmVzaXplT2JzZXJ2ZXIoY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJGYWlsZWQgdG8gY29uc3RydWN0ICdSZXNpemVPYnNlcnZlcic6IDEgYXJndW1lbnQgcmVxdWlyZWQsIGJ1dCBvbmx5IDAgcHJlc2VudC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkZhaWxlZCB0byBjb25zdHJ1Y3QgJ1Jlc2l6ZU9ic2VydmVyJzogVGhlIGNhbGxiYWNrIHByb3ZpZGVkIGFzIHBhcmFtZXRlciAxIGlzIG5vdCBhIGZ1bmN0aW9uLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIuY29ubmVjdCh0aGlzLCBjYWxsYmFjayk7XG4gICAgfVxuICAgIFJlc2l6ZU9ic2VydmVyLnByb3RvdHlwZS5vYnNlcnZlID0gZnVuY3Rpb24gKHRhcmdldCwgb3B0aW9ucykge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkZhaWxlZCB0byBleGVjdXRlICdvYnNlcnZlJyBvbiAnUmVzaXplT2JzZXJ2ZXInOiAxIGFyZ3VtZW50IHJlcXVpcmVkLCBidXQgb25seSAwIHByZXNlbnQuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNFbGVtZW50KHRhcmdldCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJGYWlsZWQgdG8gZXhlY3V0ZSAnb2JzZXJ2ZScgb24gJ1Jlc2l6ZU9ic2VydmVyJzogcGFyYW1ldGVyIDEgaXMgbm90IG9mIHR5cGUgJ0VsZW1lbnRcIik7XG4gICAgICAgIH1cbiAgICAgICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLm9ic2VydmUodGhpcywgdGFyZ2V0LCBvcHRpb25zKTtcbiAgICB9O1xuICAgIFJlc2l6ZU9ic2VydmVyLnByb3RvdHlwZS51bm9ic2VydmUgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRmFpbGVkIHRvIGV4ZWN1dGUgJ3Vub2JzZXJ2ZScgb24gJ1Jlc2l6ZU9ic2VydmVyJzogMSBhcmd1bWVudCByZXF1aXJlZCwgYnV0IG9ubHkgMCBwcmVzZW50LlwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzRWxlbWVudCh0YXJnZXQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRmFpbGVkIHRvIGV4ZWN1dGUgJ3Vub2JzZXJ2ZScgb24gJ1Jlc2l6ZU9ic2VydmVyJzogcGFyYW1ldGVyIDEgaXMgbm90IG9mIHR5cGUgJ0VsZW1lbnRcIik7XG4gICAgICAgIH1cbiAgICAgICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLnVub2JzZXJ2ZSh0aGlzLCB0YXJnZXQpO1xuICAgIH07XG4gICAgUmVzaXplT2JzZXJ2ZXIucHJvdG90eXBlLmRpc2Nvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5kaXNjb25uZWN0KHRoaXMpO1xuICAgIH07XG4gICAgUmVzaXplT2JzZXJ2ZXIudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAnZnVuY3Rpb24gUmVzaXplT2JzZXJ2ZXIgKCkgeyBbcG9seWZpbGwgY29kZV0gfSc7XG4gICAgfTtcbiAgICByZXR1cm4gUmVzaXplT2JzZXJ2ZXI7XG59KCkpO1xuZXhwb3J0IHsgUmVzaXplT2JzZXJ2ZXIgfTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQsIGltbWVkaWF0ZSkge1xuICBsZXQgdGltZW91dFxuXG4gIHJldHVybiBmdW5jdGlvbiBleGVjdXRlZEZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzXG4gICAgY29uc3QgYXJncyA9IGFyZ3VtZW50c1xuXG4gICAgY29uc3QgbGF0ZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgIHRpbWVvdXQgPSBudWxsXG4gICAgICBpZiAoIWltbWVkaWF0ZSkgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKVxuICAgIH1cblxuICAgIGNvbnN0IGNhbGxOb3cgPSBpbW1lZGlhdGUgJiYgIXRpbWVvdXRcblxuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KVxuXG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpXG5cbiAgICBpZiAoY2FsbE5vdykgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKVxuICB9XG59XG4iLCJpbXBvcnQgeyBSZXNpemVPYnNlcnZlciBhcyBQb2x5ZmlsbCB9IGZyb20gJ0BqdWdnbGUvcmVzaXplLW9ic2VydmVyJ1xuY29uc3QgUmVzaXplT2JzZXJ2ZXIgPSB3aW5kb3cuUmVzaXplT2JzZXJ2ZXIgfHwgUG9seWZpbGxcbmltcG9ydCBkZWJvdW5jZSBmcm9tICcuL3V0aWxzL2RlYm91bmNlJ1xuXG5pbXBvcnQgcmVtb3ZlSXRlbSBmcm9tICcuL3V0aWxzL3JlbW92ZS1hcnJheS1pdGVtJ1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50RW1pdHRlcidcbmltcG9ydCB7XG4gIGdldERpc3RhbmNlLFxuICBpbmRleE9mTmVhcmVzdFBvaW50XG59IGZyb20gJy4vZ2VvbWV0cnkvZGlzdGFuY2VzJ1xuXG5pbXBvcnQgRHJhZ2dhYmxlIGZyb20gJy4vZHJhZ2dhYmxlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0IGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoZHJhZ2dhYmxlcywgb3B0aW9ucz17fSkge1xuICAgIHN1cGVyKG9wdGlvbnMpXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICB0aW1lRW5kOiAyMDAsXG4gICAgICB0aW1lRXhjYW5nZTogNDAwLFxuICAgICAgcmFkaXVzOiAzMFxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0aGlzLmNvbnRhaW5lciA9IG9wdGlvbnMuY29udGFpbmVyXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gZHJhZ2dhYmxlc1xuICAgIHRoaXMuY2hhbmdlZER1cmluZ0l0ZXJhdGlvbiA9IGZhbHNlXG5cbiAgICB0aGlzLnJlc2l6ZU9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKGRlYm91bmNlKHRoaXMub25SZXNpemUuYmluZCh0aGlzKSwgMTAwKSlcblxuICAgIGlmICh0aGlzLmNvbnRhaW5lcikge1xuICAgICAgdGhpcy5yZXNpemVPYnNlcnZlci5vYnNlcnZlKHRoaXMuY29udGFpbmVyKVxuICAgIH1cblxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBvblJlc2l6ZSgpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLnJlb3JkZXJPbkNoYW5nZSkgdGhpcy5yZXNldCgpXG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGQpID0+IGQuc3RhcnRQb3NpdGlvbmluZygpKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLl9lbmFibGUgPSB0cnVlXG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gdGhpcy5pbml0RHJhZ2dhYmxlKGRyYWdnYWJsZSkpXG4gIH1cblxuICBpbml0RHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIGRyYWdnYWJsZS5lbmFibGUgPSB0aGlzLl9lbmFibGVcbiAgICBkcmFnZ2FibGUub24oJ2RyYWc6bW92ZScsICgpID0+IHRoaXMub25Nb3ZlKGRyYWdnYWJsZSkpXG4gICAgZHJhZ2dhYmxlLmRyYWdFbmRBY3Rpb24gPSAoKSA9PiB7XG4gICAgICBkcmFnZ2FibGUucGluUG9zaXRpb24oZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uLCB0aGlzLm9wdGlvbnMudGltZUVuZClcbiAgICAgIHRoaXMub25FbmQoZHJhZ2dhYmxlKVxuICAgIH1cbiAgICB0aGlzLnJlc2l6ZU9ic2VydmVyLm9ic2VydmUoZHJhZ2dhYmxlLmVsZW1lbnQpXG4gIH1cblxuICByZWxlYXNlRHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIudW5vYnNlcnZlKGRyYWdnYWJsZS5lbGVtZW50KVxuICAgIGRyYWdnYWJsZS5yZXNldE9uKCdkcmFnOmVuZCcpXG4gICAgZHJhZ2dhYmxlLnJlc2V0T24oJ2RyYWc6bW92ZScpXG4gICAgcmVtb3ZlSXRlbSh0aGlzLmRyYWdnYWJsZXMsIGRyYWdnYWJsZSlcbiAgfVxuXG4gIG9uTW92ZShkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBzb3J0ZWREcmFnZ2FibGVzID0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcbiAgICBjb25zdCBwaW5uZWRQb3NpdGlvbnMgPSBzb3J0ZWREcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24pXG5cbiAgICBjb25zdCBjdXJyZW50SW5kZXggPSBzb3J0ZWREcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKVxuICAgIGNvbnN0IHRhcmdldEluZGV4ID0gaW5kZXhPZk5lYXJlc3RQb2ludChwaW5uZWRQb3NpdGlvbnMsIGRyYWdnYWJsZS5wb3NpdGlvbiwgdGhpcy5vcHRpb25zLnJhZGl1cywgdGhpcy5kaXN0YW5jZUZ1bmMpXG5cbiAgICBpZiAodGFyZ2V0SW5kZXggIT09IC0xICYmIGN1cnJlbnRJbmRleCAhPT0gdGFyZ2V0SW5kZXgpIHtcbiAgICAgIGlmICh0YXJnZXRJbmRleCA8IGN1cnJlbnRJbmRleCkge1xuICAgICAgICBmb3IgKGxldCBpPXRhcmdldEluZGV4OyBpPGN1cnJlbnRJbmRleDsgaSsrKSB7XG4gICAgICAgICAgc29ydGVkRHJhZ2dhYmxlc1tpXS5waW5Qb3NpdGlvbihwaW5uZWRQb3NpdGlvbnNbaSsxXSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGxldCBpPWN1cnJlbnRJbmRleDsgaTx0YXJnZXRJbmRleDsgaSsrKSB7XG4gICAgICAgICAgc29ydGVkRHJhZ2dhYmxlc1tpKzFdLnBpblBvc2l0aW9uKHBpbm5lZFBvc2l0aW9uc1tpXSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChkcmFnZ2FibGUubmF0aXZlRHJhZ0FuZERyb3ApIHtcbiAgICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKHBpbm5lZFBvc2l0aW9uc1t0YXJnZXRJbmRleF0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24gPSBwaW5uZWRQb3NpdGlvbnNbdGFyZ2V0SW5kZXhdXG4gICAgICB9XG5cbiAgICAgIHRoaXMuY2hhbmdlZER1cmluZ0l0ZXJhdGlvbiA9IHRydWVcbiAgICB9XG4gIH1cblxuICBvbkVuZChkcmFnZ2FibGUpIHtcbiAgICBpZiAodGhpcy5jaGFuZ2VkRHVyaW5nSXRlcmF0aW9uKSB7XG4gICAgICB0aGlzLmVtaXQoJ2xpc3Q6Y2hhbmdlJylcbiAgICAgIHRoaXMuY2hhbmdlZER1cmluZ0l0ZXJhdGlvbiA9IGZhbHNlXG5cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucmVvcmRlck9uQ2hhbmdlICYmIHRoaXMub3B0aW9ucy5jb250YWluZXIpIHtcbiAgICAgICAgdGhpcy5yZW9yZGVyRWxlbWVudHMoZHJhZ2dhYmxlKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlb3JkZXJFbGVtZW50cyhtb3ZlZERyYWdnYWJsZSkge1xuICAgIGNvbnN0IHNvcnRlZERyYWdnYWJsZXMgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuICAgIGNvbnN0IGluZGV4ID0gc29ydGVkRHJhZ2dhYmxlcy5pbmRleE9mKG1vdmVkRHJhZ2dhYmxlKVxuICAgIGNvbnN0IG5leHQgPSBzb3J0ZWREcmFnZ2FibGVzW2luZGV4ICsgMV1cblxuICAgIHRoaXMucmVzZXQoKVxuXG4gICAgaWYgKG5leHQpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmluc2VydEJlZm9yZShtb3ZlZERyYWdnYWJsZS5lbGVtZW50LCBuZXh0LmVsZW1lbnQpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKG1vdmVkRHJhZ2dhYmxlLmVsZW1lbnQpXG4gICAgfVxuXG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGQpID0+IGQuc3RhcnRQb3NpdGlvbmluZygpKVxuICAgIHRoaXMuZW1pdCgnbGlzdDpyZW9yZGVyZWQnKVxuICB9XG5cbiAgZ2V0Q3VycmVudFBpbm5lZFBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5kcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24uY2xvbmUoKSlcbiAgfVxuXG4gIGdldFNvcnRlZERyYWdnYWJsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJhZ2dhYmxlcy5zb3J0KHRoaXMuc29ydGluZy5iaW5kKHRoaXMpKVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnJlc2V0UG9zaXRpb25Ub0luaXRpYWwoKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnJlZnJlc2goKSlcbiAgfVxuXG4gIGFkZChkcmFnZ2FibGVzKSB7XG4gICAgaWYgKCEoZHJhZ2dhYmxlcyBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgZHJhZ2dhYmxlcyA9IFtkcmFnZ2FibGVzXVxuICAgIH1cbiAgICBkcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gdGhpcy5pbml0RHJhZ2dhYmxlKGRyYWdnYWJsZSkpXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gdGhpcy5kcmFnZ2FibGVzLmNvbmNhdChkcmFnZ2FibGVzKVxuICB9XG5cbiAgcmVtb3ZlKGRyYWdnYWJsZXMpIHtcbiAgICBjb25zdCBpbml0aWFsUG9zaXRpb25zID0gdGhpcy5kcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uKVxuICAgIGNvbnN0IGxpc3QgPSBbXVxuICAgIGNvbnN0IHNvcnRlZERyYWdnYWJsZXMgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuXG4gICAgaWYgKCEoZHJhZ2dhYmxlcyBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgZHJhZ2dhYmxlcyA9IFtkcmFnZ2FibGVzXVxuICAgIH1cblxuICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB0aGlzLnJlbGVhc2VEcmFnZ2FibGUoZHJhZ2dhYmxlKSlcblxuICAgIGxldCBqID0gMFxuICAgIHNvcnRlZERyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBpZiAodGhpcy5kcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTEpIHtcbiAgICAgICAgaWYgKGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbiAhPT0gaW5pdGlhbFBvc2l0aW9uc1tqXSkge1xuICAgICAgICAgIGRyYWdnYWJsZS5waW5Qb3NpdGlvbihpbml0aWFsUG9zaXRpb25zW2pdLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICAgIH1cbiAgICAgICAgZHJhZ2dhYmxlLmluaXRpYWxQb3NpdGlvbiA9IGluaXRpYWxQb3NpdGlvbnNbal1cbiAgICAgICAgaisrXG4gICAgICAgIGxpc3QucHVzaChkcmFnZ2FibGUpXG4gICAgICB9XG4gICAgfSlcbiAgICB0aGlzLmRyYWdnYWJsZXMgPSBsaXN0XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLnJlbW92ZSh0aGlzLmRyYWdnYWJsZXMuc2xpY2UoKSlcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLmRlc3Ryb3koKSlcbiAgICBpZiAodGhpcy5jb250YWluZXIpIHtcbiAgICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIudW5vYnNlcnZlKHRoaXMuY29udGFpbmVyKVxuICAgIH1cbiAgfVxuXG4gIHNvcnRpbmcoZHJhZ2dhYmxlQSwgZHJhZ2dhYmxlQikge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuc29ydGluZykge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5zb3J0aW5nKGRyYWdnYWJsZUEsIGRyYWdnYWJsZUIpXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChkcmFnZ2FibGVBLnBpbm5lZFBvc2l0aW9uLnkgPCBkcmFnZ2FibGVCLnBpbm5lZFBvc2l0aW9uLnkpIHJldHVybiAtMVxuICAgICAgaWYgKGRyYWdnYWJsZUEucGlubmVkUG9zaXRpb24ueSA+IGRyYWdnYWJsZUIucGlubmVkUG9zaXRpb24ueSkgcmV0dXJuIDFcbiAgICAgIGlmIChkcmFnZ2FibGVBLnBpbm5lZFBvc2l0aW9uLnggPCBkcmFnZ2FibGVCLnBpbm5lZFBvc2l0aW9uLngpIHJldHVybiAtMVxuICAgICAgaWYgKGRyYWdnYWJsZUEucGlubmVkUG9zaXRpb24ueCA+IGRyYWdnYWJsZUIucGlubmVkUG9zaXRpb24ueCkgcmV0dXJuIDFcbiAgICAgIHJldHVybiAwXG4gICAgfVxuICB9XG5cbiAgZ2V0IGRpc3RhbmNlRnVuYygpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmdldERpc3RhbmNlIHx8IGdldERpc3RhbmNlXG4gIH1cblxuICBnZXQgcG9zaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmdldEN1cnJlbnRQaW5uZWRQb3NpdGlvbnMoKVxuICB9XG5cbiAgc2V0IHBvc2l0aW9ucyhwb3NpdGlvbnMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gJ3dyb25nIGFycmF5IGxlbmd0aCdcbiAgICBpZiAocG9zaXRpb25zLmxlbmd0aCA9PT0gdGhpcy5kcmFnZ2FibGVzLmxlbmd0aCkge1xuICAgICAgcG9zaXRpb25zLmZvckVhY2goKHBvaW50LCBpKSA9PiB7XG4gICAgICAgIHRoaXMuZHJhZ2dhYmxlc1tpXS5waW5Qb3NpdGlvbihwb2ludClcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG1lc3NhZ2VcbiAgICB9XG4gIH1cblxuICBnZXQgZW5hYmxlKCkge1xuICAgIHJldHVybiB0aGlzLl9lbmFibGVcbiAgfVxuXG4gIHNldCBlbmFibGUoZW5hYmxlKSB7XG4gICAgdGhpcy5fZW5hYmxlID0gZW5hYmxlXG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLmVuYWJsZSA9IGVuYWJsZVxuICAgIH0pXG4gIH1cblxuICBzdGF0aWMgZmFjdG9yeShjb250YWluZXJFbGVtZW50LCBlbGVtZW50cywgb3B0aW9ucz17fSkge1xuICAgIGNvbnN0IGRyYWdnYWJsZXMgPSBBcnJheS5mcm9tKGVsZW1lbnRzKS5tYXAoKGVsZW1lbnQpID0+IHtcbiAgICAgIHJldHVybiBuZXcgRHJhZ2dhYmxlKGVsZW1lbnQsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBjb250YWluZXI6IGNvbnRhaW5lckVsZW1lbnRcbiAgICAgIH0sIG9wdGlvbnMuZHJhZ2dhYmxlIHx8IHt9KSlcbiAgICB9KVxuXG4gICAgcmV0dXJuIG5ldyBMaXN0KGRyYWdnYWJsZXMsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgY29udGFpbmVyOiBjb250YWluZXJFbGVtZW50XG4gICAgfSwgb3B0aW9ucy5saXN0IHx8IHt9KSlcbiAgfVxufVxuIiwiaW1wb3J0IExpc3QgZnJvbSAnLi9saXN0J1xuaW1wb3J0IHsgaW5kZXhPZk5lYXJlc3RQb2ludCwgZ2V0WURpZmZlcmVuY2UgfSBmcm9tICcuL2dlb21ldHJ5L2Rpc3RhbmNlcydcblxuaW1wb3J0IERyYWdnYWJsZSBmcm9tICcuL2RyYWdnYWJsZSdcblxuY29uc3QgYXJyYXlNb3ZlID0gKGFycmF5LCBmcm9tLCB0bykgPT4ge1xuICBhcnJheS5zcGxpY2UodG8gPCAwID8gYXJyYXkubGVuZ3RoICsgdG8gOiB0bywgMCwgYXJyYXkuc3BsaWNlKGZyb20sIDEpWzBdKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdWJibGluZ0xpc3QgZXh0ZW5kcyBMaXN0IHtcbiAgY29uc3RydWN0b3IoZHJhZ2dhYmxlcywgb3B0aW9ucz17fSkge1xuICAgIHN1cGVyKGRyYWdnYWJsZXMsIG9wdGlvbnMpXG4gICAgdGhpcy5hdXRvRGV0ZWN0VmVydGljYWxHYXAoKVxuICAgIHRoaXMuYXV0b0RldGVjdFN0YXJ0UG9zaXRpb24oKVxuICB9XG5cbiAgYXV0b0RldGVjdFZlcnRpY2FsR2FwKCkge1xuICAgIGlmICh0aGlzLmRyYWdnYWJsZXMubGVuZ3RoID49IDIgJiYgIXRoaXMudmVydGljYWxHYXApIHtcbiAgICAgIGNvbnN0IHNvcnRlZCA9IHRoaXMuZ2V0U29ydGVkRHJhZ2dhYmxlcygpXG5cbiAgICAgIHRoaXMudmVydGljYWxHYXAgPSBzb3J0ZWRbMV0ucGlubmVkUG9zaXRpb24ueSAtIHNvcnRlZFswXS5waW5uZWRQb3NpdGlvbi55IC0gc29ydGVkWzBdLmdldFNpemUoKS55XG4gICAgfVxuICB9XG5cbiAgYXV0b0RldGVjdFN0YXJ0UG9zaXRpb24oKSB7XG4gICAgaWYgKHRoaXMuZHJhZ2dhYmxlcy5sZW5ndGggPj0gMSAmJiAhdGhpcy5zdGFydFBvc2l0aW9uKSB7XG4gICAgICB0aGlzLnN0YXJ0UG9zaXRpb24gPSB0aGlzLmRyYWdnYWJsZXNbMF0ucGlubmVkUG9zaXRpb25cbiAgICB9XG4gIH1cblxuICBvblJlc2l6ZSgpIHtcbiAgICBzdXBlci5vblJlc2l6ZSgpXG4gICAgdGhpcy5hdXRvRGV0ZWN0VmVydGljYWxHYXAoKVxuICB9XG5cbiAgYWRkKGRyYWdnYWJsZXMpIHtcbiAgICBzdXBlci5hZGQoZHJhZ2dhYmxlcylcbiAgICB0aGlzLmF1dG9EZXRlY3RTdGFydFBvc2l0aW9uKClcbiAgICB0aGlzLmF1dG9EZXRlY3RWZXJ0aWNhbEdhcCgpXG4gIH1cblxuICBvbk1vdmUoZHJhZ2dhYmxlKSB7XG4gICAgY29uc3Qgc29ydGVkRHJhZ2dhYmxlcyA9IHRoaXMuZ2V0U29ydGVkRHJhZ2dhYmxlcygpXG4gICAgY29uc3QgcGlubmVkUG9zaXRpb25zID0gc29ydGVkRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uKVxuXG4gICAgY29uc3QgY3VycmVudEluZGV4ID0gc29ydGVkRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSlcbiAgICBjb25zdCB0YXJnZXRJbmRleCA9IGluZGV4T2ZOZWFyZXN0UG9pbnQocGlubmVkUG9zaXRpb25zLCBkcmFnZ2FibGUucG9zaXRpb24sIHRoaXMub3B0aW9ucy5yYWRpdXMsIHRoaXMuZGlzdGFuY2VGdW5jKVxuXG4gICAgaWYgKHRhcmdldEluZGV4ICE9PSAtMSAmJiBjdXJyZW50SW5kZXggIT09IHRhcmdldEluZGV4KSB7XG4gICAgICBhcnJheU1vdmUoc29ydGVkRHJhZ2dhYmxlcywgY3VycmVudEluZGV4LCB0YXJnZXRJbmRleClcbiAgICAgIHRoaXMuYnViYmxpbmcoc29ydGVkRHJhZ2dhYmxlcywgZHJhZ2dhYmxlKVxuICAgICAgdGhpcy5jaGFuZ2VkRHVyaW5nSXRlcmF0aW9uID0gdHJ1ZVxuICAgIH1cbiAgfVxuXG4gIGJ1YmJsaW5nKHNvcnRlZERyYWdnYWJsZXMsIGN1cnJlbnREcmFnZ2FibGUpIHtcbiAgICBjb25zdCBjdXJyZW50UG9zaXRpb24gPSB0aGlzLnN0YXJ0UG9zaXRpb24uY2xvbmUoKVxuICAgIHNvcnRlZERyYWdnYWJsZXMgfHw9IHRoaXMuZ2V0U29ydGVkRHJhZ2dhYmxlcygpXG5cbiAgICBzb3J0ZWREcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgaWYgKCFkcmFnZ2FibGUucGlubmVkUG9zaXRpb24uY29tcGFyZShjdXJyZW50UG9zaXRpb24pKSB7XG4gICAgICAgIGlmIChkcmFnZ2FibGUgPT09IGN1cnJlbnREcmFnZ2FibGUgJiYgIWN1cnJlbnREcmFnZ2FibGUuc2hvdWxkVXNlTmF0aXZlRHJhZ0FuZERyb3AoKSkge1xuICAgICAgICAgIGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbiA9IGN1cnJlbnRQb3NpdGlvbi5jbG9uZSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKGN1cnJlbnRQb3NpdGlvbiwgKGRyYWdnYWJsZSA9PT0gY3VycmVudERyYWdnYWJsZSkgPyAwIDogdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGN1cnJlbnRQb3NpdGlvbi55ID0gY3VycmVudFBvc2l0aW9uLnkgKyBkcmFnZ2FibGUuZ2V0U2l6ZSgpLnkgKyAodGhpcy52ZXJ0aWNhbEdhcCB8fCAwKVxuICAgIH0pXG4gIH1cblxuICByZW1vdmUoZHJhZ2dhYmxlcykge1xuICAgIGlmICghKGRyYWdnYWJsZXMgaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICAgIGRyYWdnYWJsZXMgPSBbZHJhZ2dhYmxlc11cbiAgICB9XG5cbiAgICBkcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gdGhpcy5yZWxlYXNlRHJhZ2dhYmxlKGRyYWdnYWJsZSkpXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gdGhpcy5kcmFnZ2FibGVzLmZpbHRlcigoZCkgPT4gIWRyYWdnYWJsZXMuaW5jbHVkZXMoZCkpXG5cbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZCkgPT4gZC5zdGFydFBvc2l0aW9uaW5nKCkpXG5cbiAgICB0aGlzLmF1dG9EZXRlY3RTdGFydFBvc2l0aW9uKClcbiAgICB0aGlzLmJ1YmJsaW5nKClcbiAgfVxuXG4gIGdldCBkaXN0YW5jZUZ1bmMoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5nZXREaXN0YW5jZSB8fCBnZXRZRGlmZmVyZW5jZVxuICB9XG5cbiAgc3RhdGljIGZhY3RvcnkoY29udGFpbmVyRWxlbWVudCwgZWxlbWVudHMsIG9wdGlvbnM9e30pIHtcbiAgICBjb25zdCBkcmFnZ2FibGVzID0gQXJyYXkuZnJvbShlbGVtZW50cykubWFwKChlbGVtZW50KSA9PiB7XG4gICAgICByZXR1cm4gbmV3IERyYWdnYWJsZShlbGVtZW50LCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgY29udGFpbmVyOiBjb250YWluZXJFbGVtZW50XG4gICAgICB9LCBvcHRpb25zLmRyYWdnYWJsZSB8fCB7fSkpXG4gICAgfSlcblxuICAgIHJldHVybiBuZXcgQnViYmxpbmdMaXN0KGRyYWdnYWJsZXMsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgY29udGFpbmVyOiBjb250YWluZXJFbGVtZW50XG4gICAgfSwgb3B0aW9ucy5saXN0IHx8IHt9KSlcbiAgfVxufVxuIl0sIm5hbWVzIjpbImdldFN1bVZhbHVlT2ZTdHlsZVJ1bGVzIiwiZWxlbWVudCIsInJ1bGVzIiwicmVkdWNlIiwic3VtIiwicnVsZSIsInBhcnNlSW50Iiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIlBvaW50IiwieCIsInkiLCJwIiwiayIsInBhcmVudCIsInBhcmVudE5vZGUiLCJlbGVtZW50UmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInBhcmVudFJlY3QiLCJsZWZ0IiwidG9wIiwiaXNDb250ZW50Qm94U2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwiUmVjdGFuZ2xlIiwicG9zaXRpb24iLCJzaXplIiwiYWRkIiwibXVsdCIsInJlY3QiLCJNYXRoIiwibWluIiwibWF4Iiwic3ViIiwicmVjdGFuZ2xlIiwiaW5jbHVkZVBvaW50IiwiZ2V0UDMiLCJheGlzIiwic2VsQXhpcyIsImNyb3NzUmVjdGFuZ2xlIiwiYW5kIiwidGhpc0NlbnRlciIsImdldENlbnRlciIsInJlY3RDZW50ZXIiLCJzaWduIiwib2Zmc2V0IiwiZWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzdHlsZSIsImlzQ29uc2lkZXJUcmFuc2xhdGUiLCJlbGVtZW50T2Zmc2V0IiwiZWxlbWVudFNpemUiLCJnZXREZWZhdWx0Q29udGFpbmVyIiwiY29udGFpbmVyIiwidGFnTmFtZSIsIkV2ZW50RW1pdHRlciIsIm9wdGlvbnMiLCJldmVudHMiLCJvbiIsIk9iamVjdCIsImVudHJpZXMiLCJldmVudE5hbWUiLCJmbiIsImludGVycnVwdGVkIiwiYXJncyIsInNsaWNlIiwiY2FsbCIsImFyZ3VtZW50cyIsImZ1bmMiLCJwdXNoIiwidW5zaGlmdCIsImluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsImdldERpc3RhbmNlIiwicDEiLCJwMiIsImR4IiwiZHkiLCJzcXJ0IiwiZ2V0WERpZmZlcmVuY2UiLCJhYnMiLCJnZXRZRGlmZmVyZW5jZSIsInRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3RvcnkiLCJwb3ciLCJpbmRleE9mTmVhcmVzdFBvaW50IiwiYXJyIiwidmFsIiwicmFkaXVzIiwiZ2V0RGlzdGFuY2VGdW5jIiwiaSIsInRlbXAiLCJsZW5ndGgiLCJkaXJlY3RDcm9zc2luZyIsIkwxUDEiLCJMMVAyIiwiTDJQMSIsIkwyUDIiLCJrMSIsImsyIiwiYjEiLCJiMiIsImJvdW5kVG9MaW5lIiwiQSIsIkIiLCJQIiwiQVAiLCJBQiIsImFiMiIsImFwX2FiIiwidCIsImdldFBvaW50T25MaW5lQnlMZW5naHQiLCJMUDEiLCJMUDIiLCJsZW5naHQiLCJwZXJjZW50IiwiYWRkUG9pbnRUb0JvdW5kUG9pbnRzIiwiYm91bmRwb2ludHMiLCJwb2ludCIsImlzUmlnaHQiLCJyZXN1bHQiLCJmaWx0ZXIiLCJiUG9pbnQiLCJnZXRBbmdsZURpZmYiLCJhbHBoYSIsImJldGEiLCJtaW5BbmdsZSIsIm1heEFuZ2xlIiwiUEkiLCJnZXRBbmdsZSIsImRpZmYiLCJub3JtYWxpemVBbmdsZSIsImF0YW4yIiwiYm91bmRBbmdsZSIsImRtaW4iLCJkbWF4IiwiZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtIiwiYW5nbGUiLCJjZW50ZXIiLCJjb3MiLCJzaW4iLCJCb3VuZCIsIl9zaXplIiwiaW5zdGFuY2UiLCJib3VuZCIsImJpbmQiLCJCb3VuZFRvUmVjdGFuZ2xlIiwiY2FsY1BvaW50IiwiY2xvbmUiLCJyZWN0UDIiLCJCb3VuZFRvRWxlbWVudCIsImZyb21FbGVtZW50IiwiQm91bmRUb0xpbmVYIiwic3RhcnRZIiwiZW5kWSIsIkJvdW5kVG9MaW5lWSIsInN0YXJ0WCIsImVuZFgiLCJCb3VuZFRvTGluZSIsInN0YXJ0UG9pbnQiLCJlbmRQb2ludCIsInNvbWVLIiwiY29zQmV0YSIsInNpbkJldGEiLCJwb2ludDIiLCJuZXdFbmRQb2ludCIsInBvaW50Q3Jvc3NpbmciLCJCb3VuZFRvQ2lyY2xlIiwiQm91bmRUb0FyYyIsInN0YXJ0QW5nbGUiLCJlbmRBbmdsZSIsIl9zdGFydEFuZ2xlIiwiX2VuZEFuZ2xlIiwiYXJyYXkiLCJyYW5nZSIsInN0YXJ0Iiwic3RvcCIsInN0ZXAiLCJCYXNpY1N0cmF0ZWd5IiwiTm90Q3Jvc3NpbmdTdHJhdGVneSIsInJlY3RhbmdsZUxpc3QiLCJpbmRleGVzT2ZOZXdzIiwic3RhdGljUmVjdGFuZ2xlSW5kZXhlcyIsImluZGV4ZXMiLCJfcmVjdCIsImZvckVhY2giLCJyZW1vdmFibGUiLCJpbmRleE9mU3RhdGljIiwic3RhdGljUmVjdCIsIm1vdmVUb0JvdW5kIiwic29tZSIsImJvdW5kUmVjdCIsImdldFNxdWFyZSIsIm9kbERyYWdnYWJsZXNMaXN0IiwibmV3RHJhZ2dhYmxlcyIsImluZGV4T2ZOZXdzIiwiZHJhZ2dhYmxlcyIsImNvbmNhdCIsImRyYWdnYWJsZSIsIkZsb2F0TGVmdFN0cmF0ZWd5IiwiYXNzaWduIiwicGFkZGluZ1RvcExlZnQiLCJwYWRkaW5nQm90dG9tUmlnaHQiLCJ5R2FwQmV0d2VlbkRyYWdnYWJsZXMiLCJnZXRQb3NpdGlvbiIsIl9pbmRleGVzT2ZOZXdzIiwiZ2V0UDIiLCJib3VuZGFyeVBvaW50cyIsInJlY3RJbmRleCIsImlzVmFsaWQiLCJuZXdMaXN0IiwibGlzdE9sZFBvc2l0aW9uIiwibWFwIiwibmV3RHJhZ2dhYmxlIiwiRmxvYXRSaWdodFN0cmF0ZWd5IiwicGFkZGluZ1RvcFJpZ2h0IiwicGFkZGluZ0JvdHRvbUxlZnQiLCJwYWRkaW5nQm90dG9tTmVnTGVmdCIsImdldFA0IiwiYWRkVG9EZWZhdWx0U2NvcGUiLCJ0YXJnZXQiLCJkZWZhdWx0U2NvcGUiLCJhZGRUYXJnZXQiLCJUYXJnZXQiLCJ0aW1lRW5kIiwidGltZUV4Y2FuZ2UiLCJwb3NpdGlvbmluZ1N0cmF0ZWd5Iiwic3RyYXRlZ3kiLCJnZXRSZWN0YW5nbGUiLCJ0YXJnZXRzIiwiZW1pdHRlciIsImVtaXQiLCJzdGFydEJvdW5kaW5nIiwiaW5pdCIsImJvdW5kaW5nIiwiaW5kZXhlc09mTmV3IiwicG9zaXRpb25pbmciLCJvbGREcmFnZ2FibGVzIiwic29ydGluZyIsInJlY3RhbmdsZXMiLCJpbm5lckRyYWdnYWJsZXMiLCJzZXRQb3NpdGlvbiIsImNhdGNoRHJhZ2dhYmxlIiwidGFyZ2V0UmVjdGFuZ2xlIiwiZHJhZ2dhYmxlU3F1YXJlIiwic2NvcGVzIiwic2NvcGUiLCJyZW1vdmVJdGVtIiwibmV3RHJhZ2dhYmxlc0luZGV4IiwiZ2V0U2l6ZSIsImFkZFJlbW92ZU9uTW92ZSIsInRpbWUiLCJtb3ZlIiwiaW5pdGlhbFBvc2l0aW9uIiwicHVzaElubmVyRHJhZ2dhYmxlIiwicmVtb3ZlSGFuZGxlciIsInJlbW92ZSIsInVuc3Vic2NyaWJlIiwiX2NvbnRhaW5lciIsIlNjb3BlIiwiZHJhZ0VuZEFjdGlvbiIsIm9uRW5kIiwic2hvdFRhcmdldHMiLCJzb3J0IiwiYSIsImIiLCJwaW5Qb3NpdGlvbiIsInJlc2V0IiwicmVmcmVzaCIsInBvc2l0aW9ucyIsIm1lc3NhZ2UiLCJ0YXJnZXRJbmRleGVzIiwiY3VycmVudFNjb3BlIiwiYWRkRHJhZ2dhYmxlVG9TY29wZSIsImFkZERyYWdnYWJsZSIsIkRyYWdnYWJsZSIsImludGVycnVwdCIsImFkZFRhcmdldFRvU2NvcGUiLCJwcmVwZW5kT24iLCJjaGVja1N1cHBvcnRQYXNzaXZlRXZlbnRzIiwicGFzc2l2ZVN1cHBvcnRlZCIsImRlZmluZVByb3BlcnR5IiwiZ2V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJfZXJyIiwiaXNTdXBwb3J0UGFzc2l2ZUV2ZW50cyIsInBhc3NpdmVGYWxzZSIsInBhc3NpdmUiLCJpc1RvdWNoIiwibW91c2VFdmVudHMiLCJlbmQiLCJ0b3VjaEV2ZW50cyIsInRyYW5zZm9ybVByb3BlcnR5IiwiZ2V0U3R5bGVQcm9wZXJ0eSIsInRyYW5zaXRpb25Qcm9wZXJ0eSIsImdldFRvdWNoQnlJRCIsInRvdWNoSWQiLCJjaGFuZ2VkVG91Y2hlcyIsImlkZW50aWZpZXIiLCJwcmV2ZW50RG91YmxlSW5pdCIsImV4aXN0aW5nIiwiY29weVN0eWxlcyIsInNvdXJjZSIsImRlc3RpbmF0aW9uIiwiY3MiLCJrZXkiLCJjaGlsZHJlbiIsIl9lbmFibGUiLCJ0b3VjaERyYWdnaW5nVGhyZXNob2xkIiwic3RhcnRQb3NpdGlvbmluZyIsInN0YXJ0TGlzdGVuaW5nIiwiX3NldERlZmF1bHRUcmFuc2l0aW9uIiwicGlubmVkUG9zaXRpb24iLCJfZHJhZ1N0YXJ0IiwiZXZlbnQiLCJkcmFnU3RhcnQiLCJfZHJhZ01vdmUiLCJkcmFnTW92ZSIsIl9kcmFnRW5kIiwiZHJhZ0VuZCIsIl9uYXRpdmVEcmFnU3RhcnQiLCJuYXRpdmVEcmFnU3RhcnQiLCJfbmF0aXZlRHJhZ092ZXIiLCJuYXRpdmVEcmFnT3ZlciIsIl9uYXRpdmVEcmFnRW5kIiwibmF0aXZlRHJhZ0VuZCIsIl9uYXRpdmVEcm9wIiwibmF0aXZlRHJvcCIsIl9zY3JvbGwiLCJvblNjcm9sbCIsImhhbmRsZXIiLCJfdHJhbnNmb3JtUG9zaXRpb24iLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbkNzcyIsInRlc3QiLCJyZXBsYWNlIiwidHJhbnNsYXRlQ3NzIiwidHJhbnNmb3JtIiwic2hvdWxkUmVtb3ZlWmVyb1RyYW5zbGF0ZSIsImlzU2lsZW50IiwiZGV0ZXJtaW5lRGlyZWN0aW9uIiwiX3NldFRyYW5zaXRpb24iLCJfc2V0VHJhbnNsYXRlIiwic2lsZW50IiwibGVmdERpcmVjdGlvbiIsInJpZ2h0RGlyZWN0aW9uIiwidXBEaXJlY3Rpb24iLCJkb3duRGlyZWN0aW9uIiwiRGF0ZSIsIl9zdGFydFRvdWNoVGltZXN0YW1wIiwiaXNUb3VjaEV2ZW50IiwibmF0aXZlRHJhZ0FuZERyb3AiLCJlbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3BPblRvdWNoIiwiVG91Y2hFdmVudCIsInRvdWNoUG9pbnQiLCJfc3RhcnRUb3VjaFBvaW50IiwicGFnZVgiLCJjbGllbnRYIiwicGFnZVkiLCJjbGllbnRZIiwiX3N0YXJ0UG9zaXRpb24iLCJfdG91Y2hJZCIsIl9zdGFydFNjcm9sbFBvaW50Iiwic2Nyb2xsWCIsInNjcm9sbFkiLCJIVE1MSW5wdXRFbGVtZW50IiwiZm9jdXMiLCJzaG91bGRVc2VOYXRpdmVEcmFnQW5kRHJvcCIsImVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcE9uQWxsRGV2aWNlcyIsImVtdWxhdGVPbkZpcnN0TW92ZSIsInNlZW1zU2Nyb2xsaW5nIiwiY2FuY2VsRHJhZ2dpbmciLCJlbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3AiLCJjYW5jZWxFbXVsYXRpb24iLCJ0b3VjaCIsImlzRHJhZ2dpbmciLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsInNjcm9sbFBvaW50IiwiY2xhc3NMaXN0Iiwic2V0VGltZW91dCIsIl9ldmVudCIsImRhdGFUcmFuc2ZlciIsInNldERhdGEiLCJlZmZlY3RBbGxvd2VkIiwiZHJvcEVmZmVjdCIsInJlbW92ZUF0dHJpYnV0ZSIsImNvbnRhaW5lclJlY3QiLCJjbG9uZWRFbGVtZW50IiwiY2xvbmVOb2RlIiwiYm9keSIsImFwcGVuZENoaWxkIiwiZW11bGF0aW9uRHJhZ2dhYmxlIiwiY29udGFpbmVyUmVjdFBvaW50IiwiZGVzdHJveSIsInJlbW92ZUNoaWxkIiwicmVzZXRFbWl0dGVyIiwiX2hhbmRsZXIiLCJlbmFibGUiLCJSZXNpemVPYnNlcnZlciIsImRlYm91bmNlIiwid2FpdCIsImltbWVkaWF0ZSIsInRpbWVvdXQiLCJleGVjdXRlZEZ1bmN0aW9uIiwiY29udGV4dCIsImxhdGVyIiwiYXBwbHkiLCJjYWxsTm93IiwiY2xlYXJUaW1lb3V0IiwiUG9seWZpbGwiLCJMaXN0IiwiY2hhbmdlZER1cmluZ0l0ZXJhdGlvbiIsInJlc2l6ZU9ic2VydmVyIiwib25SZXNpemUiLCJvYnNlcnZlIiwicmVvcmRlck9uQ2hhbmdlIiwiZCIsImluaXREcmFnZ2FibGUiLCJvbk1vdmUiLCJ1bm9ic2VydmUiLCJyZXNldE9uIiwic29ydGVkRHJhZ2dhYmxlcyIsImdldFNvcnRlZERyYWdnYWJsZXMiLCJwaW5uZWRQb3NpdGlvbnMiLCJjdXJyZW50SW5kZXgiLCJ0YXJnZXRJbmRleCIsImRpc3RhbmNlRnVuYyIsInJlb3JkZXJFbGVtZW50cyIsIm1vdmVkRHJhZ2dhYmxlIiwibmV4dCIsImluc2VydEJlZm9yZSIsInJlc2V0UG9zaXRpb25Ub0luaXRpYWwiLCJBcnJheSIsImluaXRpYWxQb3NpdGlvbnMiLCJsaXN0IiwicmVsZWFzZURyYWdnYWJsZSIsImoiLCJkcmFnZ2FibGVBIiwiZHJhZ2dhYmxlQiIsImdldEN1cnJlbnRQaW5uZWRQb3NpdGlvbnMiLCJjb250YWluZXJFbGVtZW50IiwiZWxlbWVudHMiLCJmcm9tIiwiYXJyYXlNb3ZlIiwidG8iLCJCdWJibGluZ0xpc3QiLCJhdXRvRGV0ZWN0VmVydGljYWxHYXAiLCJhdXRvRGV0ZWN0U3RhcnRQb3NpdGlvbiIsInZlcnRpY2FsR2FwIiwic29ydGVkIiwic3RhcnRQb3NpdGlvbiIsImJ1YmJsaW5nIiwiY3VycmVudERyYWdnYWJsZSIsImN1cnJlbnRQb3NpdGlvbiIsImNvbXBhcmUiLCJpbmNsdWRlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFDLENBQUMsR0FBRyxDQUFDLENBQUM7RUFDbkIsUUFBUSxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztFQUMzQixRQUFRLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0VBQzdCLFFBQVEsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0VBQzFCLFFBQVEsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0VBQzNCLFFBQVEsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7RUFDN0MsUUFBUSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztFQUM1QyxRQUFRLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0VBQzVCLEtBQUs7RUFDTCxJQUFJLGVBQWUsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLFlBQVk7RUFDbkQsUUFBUSxJQUFJLEVBQUUsR0FBRyxJQUFJLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLEVBQUUsTUFBTSxHQUFHLEVBQUUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLEVBQUUsTUFBTSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUM7RUFDcEosUUFBUSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxF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
