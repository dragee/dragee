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

  function throttle(func, wait) {
    var lastTime = 0;
    return function executedFunction() {
      var context = this;
      var args = arguments;
      var now = Date.now();

      if (now - lastTime >= wait) {
        func.apply(context, args);
        lastTime = now;
      }
    };
  }

  var throttledDragOver = function throttledDragOver(callback, duration) {
    var throttledCallback = throttle(function (event) {
      return callback(event);
    }, duration);
    return function (event) {
      event.preventDefault();
      throttledCallback(event);
    };
  };

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

        this._nativeDragOver = throttledDragOver(function (event) {
          return _this2.nativeDragOver(event);
        }, this.dragOverThrottleDuration);

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
        this._previousDirectionPosition || (this._previousDirectionPosition = this._startPosition);
        this.leftDirection = this._previousDirectionPosition.x < point.x;
        this.rightDirection = this._previousDirectionPosition.x > point.x;
        this.upDirection = this._previousDirectionPosition.y > point.y;
        this.downDirection = this._previousDirectionPosition.y < point.y;
        this._previousDirectionPosition = point;
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
        this.determineDirection(point);
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
          this.determineDirection(point);
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
        this.determineDirection(point);
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
        this._previousDirectionPosition = null;
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

              _this5.determineDirection(_this5.position);

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
      key: "touchDraggingThreshold",
      get: function get() {
        return this.options.touchDraggingThreshold || 0;
      }
    }, {
      key: "dragOverThrottleDuration",
      get: function get() {
        return this.options.dragOverThrottleDuration || 16;
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

    function BubblingList() {
      _classCallCheck(this, BubblingList);

      return _super.apply(this, arguments);
    }

    _createClass(BubblingList, [{
      key: "autoDetectVerticalGap",
      value: function autoDetectVerticalGap() {
        if (!this._verticalGap && !this.options.verticalGap && this.draggables.length >= 2) {
          var sorted = this.getSortedDraggables();
          this._verticalGap = sorted[1].pinnedPosition.y - sorted[0].pinnedPosition.y - sorted[0].getSize().y;
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
        var _this = this;

        _get(_getPrototypeOf(BubblingList.prototype), "initDraggable", this).call(this, draggable);

        draggable.on('drag:start', function () {
          return _this.onDragStart(draggable);
        });
      }
    }, {
      key: "onDragStart",
      value: function onDragStart(draggable) {
        this.autoDetectVerticalGap();
        this.autoDetectStartPosition();
        this.cachedSortedDraggables = this.getSortedDraggables();
        this.indexOfActiveDraggable = this.cachedSortedDraggables.indexOf(draggable);
      }
    }, {
      key: "onMove",
      value: function onMove(draggable) {
        var prevDraggable = this.cachedSortedDraggables[this.indexOfActiveDraggable - 1];
        var nextDraggable = this.cachedSortedDraggables[this.indexOfActiveDraggable + 1];
        var currentPosition = draggable.pinnedPosition;
        var currentOrder;
        var targetIndex;

        if (draggable.upDirection && prevDraggable) {
          currentOrder = [prevDraggable, draggable].map(function (d) {
            return d.pinnedPosition;
          });
          targetIndex = indexOfNearestPoint(currentOrder, draggable.position, 10000, this.distanceFunc);

          if (targetIndex === 0) {
            if (draggable.shouldUseNativeDragAndDrop()) {
              draggable.pinPosition(prevDraggable.pinnedPosition);
            } else {
              draggable.pinnedPosition = prevDraggable.pinnedPosition.clone();
            }

            prevDraggable.pinPosition(new Point(currentPosition.x, draggable.pinnedPosition.y + draggable.getSize().y + this.verticalGap), this.options.timeExcange);
            arrayMove(this.cachedSortedDraggables, this.indexOfActiveDraggable--, this.indexOfActiveDraggable);
            this.onMove(draggable);
            this.changedDuringIteration = true;
          }
        } else if (draggable.downDirection && nextDraggable) {
          currentOrder = [draggable, nextDraggable].map(function (d) {
            return d.pinnedPosition;
          });
          targetIndex = indexOfNearestPoint(currentOrder, draggable.position, 10000, this.distanceFunc);

          if (targetIndex === 1) {
            nextDraggable.pinPosition(draggable.pinnedPosition, this.options.timeExcange);
            var draggableNewPosition = new Point(nextDraggable.pinnedPosition.x, nextDraggable.pinnedPosition.y + nextDraggable.getSize().y + this.verticalGap);

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

          currentPosition.y = currentPosition.y + draggable.getSize().y + _this2.verticalGap;
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

        if (this.draggables.length > 0) {
          this.autoDetectVerticalGap();
          this.autoDetectStartPosition();
          this.bubbling();
        }
      }
    }, {
      key: "distanceFunc",
      get: function get() {
        return this.options.getDistance || getYDifference;
      }
    }, {
      key: "verticalGap",
      get: function get() {
        if (this.options.verticalGap) {
          return this.options.verticalGap;
        } else {
          this.autoDetectVerticalGap();
          return this._verticalGap || 0;
        }
      },
      set: function set(gapValue) {
        this.options.verticalGap = gapValue;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZGV2LmpzIiwic291cmNlcyI6WyIuLi9zcmMvZ2VvbWV0cnkvcG9pbnQuanMiLCIuLi9zcmMvZ2VvbWV0cnkvcmVjdGFuZ2xlLmpzIiwiLi4vc3JjL3V0aWxzL2dldC1kZWZhdWx0LWNvbnRhaW5lci5qcyIsIi4uL3NyYy9ldmVudEVtaXR0ZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvZGVzYW5kcm8tZ2V0LXN0eWxlLXByb3BlcnR5L2dldC1zdHlsZS1wcm9wZXJ0eS5qcyIsIi4uL3NyYy9nZW9tZXRyeS9kaXN0YW5jZXMuanMiLCIuLi9zcmMvZ2VvbWV0cnkvYm91bmRzLmpzIiwiLi4vc3JjL2dlb21ldHJ5L2FuZ2xlcy5qcyIsIi4uL3NyYy9ib3VuZGluZy5qcyIsIi4uL3NyYy91dGlscy9yZW1vdmUtYXJyYXktaXRlbS5qcyIsIi4uL3NyYy91dGlscy9yYW5nZS5qcyIsIi4uL3NyYy9wb3NpdGlvbmluZy5qcyIsIi4uL3NyYy90YXJnZXQuanMiLCIuLi9zcmMvc2NvcGUuanMiLCIuLi9zcmMvdXRpbHMvaXMtc3VwcG9ydC1wYXNzaXZlLWV2ZW50cy5qcyIsIi4uL3NyYy91dGlscy90aHJvdHRsZS5qcyIsIi4uL3NyYy9kcmFnZ2FibGUuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL3V0aWxzL3Jlc2l6ZU9ic2VydmVycy5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvYWxnb3JpdGhtcy9oYXNBY3RpdmVPYnNlcnZhdGlvbnMuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL2FsZ29yaXRobXMvaGFzU2tpcHBlZE9ic2VydmF0aW9ucy5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvYWxnb3JpdGhtcy9kZWxpdmVyUmVzaXplTG9vcEVycm9yLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BqdWdnbGUvcmVzaXplLW9ic2VydmVyL2xpYi9SZXNpemVPYnNlcnZlckJveE9wdGlvbnMuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL3V0aWxzL2ZyZWV6ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvUmVzaXplT2JzZXJ2ZXJTaXplLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BqdWdnbGUvcmVzaXplLW9ic2VydmVyL2xpYi9ET01SZWN0UmVhZE9ubHkuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL3V0aWxzL2VsZW1lbnQuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL3V0aWxzL2dsb2JhbC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvYWxnb3JpdGhtcy9jYWxjdWxhdGVCb3hTaXplLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BqdWdnbGUvcmVzaXplLW9ic2VydmVyL2xpYi9SZXNpemVPYnNlcnZlckVudHJ5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BqdWdnbGUvcmVzaXplLW9ic2VydmVyL2xpYi9hbGdvcml0aG1zL2NhbGN1bGF0ZURlcHRoRm9yTm9kZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvYWxnb3JpdGhtcy9icm9hZGNhc3RBY3RpdmVPYnNlcnZhdGlvbnMuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL2FsZ29yaXRobXMvZ2F0aGVyQWN0aXZlT2JzZXJ2YXRpb25zQXREZXB0aC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvdXRpbHMvcHJvY2Vzcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvdXRpbHMvcXVldWVNaWNyb1Rhc2suanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL3V0aWxzL3F1ZXVlUmVzaXplT2JzZXJ2ZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL3V0aWxzL3NjaGVkdWxlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvUmVzaXplT2JzZXJ2YXRpb24uanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL1Jlc2l6ZU9ic2VydmVyRGV0YWlsLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BqdWdnbGUvcmVzaXplLW9ic2VydmVyL2xpYi9SZXNpemVPYnNlcnZlckNvbnRyb2xsZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL1Jlc2l6ZU9ic2VydmVyLmpzIiwiLi4vc3JjL3V0aWxzL2RlYm91bmNlLmpzIiwiLi4vc3JjL2xpc3QuanMiLCIuLi9zcmMvYnViYmxpbmdMaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGdldFN1bVZhbHVlT2ZTdHlsZVJ1bGVzKGVsZW1lbnQsIHJ1bGVzKSB7XG4gIHJldHVybiBydWxlcy5yZWR1Y2UoKHN1bSwgcnVsZSkgPT4ge1xuICAgIHJldHVybiBzdW0gKyBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KVtydWxlXXx8MClcbiAgfSwgMClcbn1cblxuLyoqIENsYXNzIHJlcHJlc2VudGluZyBhIHBvaW50LiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9pbnQge1xuICAvKipcbiAgKiBDcmVhdGUgYSBwb2ludC5cbiAgKiBAcGFyYW0ge251bWJlcn0geCAtIFRoZSB4IHZhbHVlLlxuICAqIEBwYXJhbSB7bnVtYmVyfSB5IC0gVGhlIHkgdmFsdWUuXG4gICovXG4gIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICB0aGlzLnggPSB4XG4gICAgdGhpcy55ID0geVxuICB9XG5cbiAgYWRkKHApIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCArIHAueCwgdGhpcy55ICsgcC55KVxuICB9XG5cbiAgc3ViKHApIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCAtIHAueCwgdGhpcy55IC0gcC55KVxuICB9XG5cbiAgbXVsdChrKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnggKiBrLCB0aGlzLnkgKiBrKVxuICB9XG5cbiAgbmVnYXRpdmUoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCgtdGhpcy54LCAtdGhpcy55KVxuICB9XG5cbiAgY29tcGFyZShwKSB7XG4gICAgcmV0dXJuICh0aGlzLnggPT09IHAueCAmJiB0aGlzLnkgPT09IHAueSlcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54LCB0aGlzLnkpXG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gYHt4PSR7dGhpcy54fSx5PSR7dGhpcy55fWBcbiAgfVxuXG4gIHN0YXRpYyBlbGVtZW50T2Zmc2V0KGVsZW1lbnQsIHBhcmVudCkge1xuICAgIHBhcmVudCA9IHBhcmVudCB8fCBlbGVtZW50LnBhcmVudE5vZGVcbiAgICBjb25zdCBlbGVtZW50UmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICBjb25zdCBwYXJlbnRSZWN0ID0gcGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgcmV0dXJuIG5ldyBQb2ludChcbiAgICAgIGVsZW1lbnRSZWN0LmxlZnQgLSBwYXJlbnRSZWN0LmxlZnQsXG4gICAgICBlbGVtZW50UmVjdC50b3AgLSBwYXJlbnRSZWN0LnRvcFxuICAgIClcbiAgfVxuXG4gIHN0YXRpYyBlbGVtZW50U2l6ZShlbGVtZW50LCBpc0NvbnRlbnRCb3hTaXplPWZhbHNlKSB7XG4gICAgbGV0IHdpZHRoID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudClbJ3dpZHRoJ10pXG4gICAgbGV0IGhlaWdodCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpWydoZWlnaHQnXSlcbiAgICBpZiAoIWlzQ29udGVudEJveFNpemUpIHtcbiAgICAgIHdpZHRoICs9IGdldFN1bVZhbHVlT2ZTdHlsZVJ1bGVzKGVsZW1lbnQsIFsncGFkZGluZy1sZWZ0JywgJ3BhZGRpbmctcmlnaHQnLCAnYm9yZGVyLWxlZnQtd2lkdGgnLCAnYm9yZGVyLXJpZ2h0LXdpZHRoJ10pXG4gICAgICBoZWlnaHQgKz0gZ2V0U3VtVmFsdWVPZlN0eWxlUnVsZXMoZWxlbWVudCwgWydwYWRkaW5nLXRvcCcsICdwYWRkaW5nLWJvdHRvbScsICdib3JkZXItdG9wLXdpZHRoJywgJ2JvcmRlci1ib3R0b20td2lkdGgnXSlcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBQb2ludCh3aWR0aCwgaGVpZ2h0KVxuICB9XG59XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9wb2ludCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVjdGFuZ2xlIHtcbiAgY29uc3RydWN0b3IocG9zaXRpb24sIHNpemUpIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb25cbiAgICB0aGlzLnNpemUgPSBzaXplXG4gIH1cblxuICBnZXRQMSgpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvblxuICB9XG5cbiAgZ2V0UDIoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnNpemUueCwgdGhpcy5wb3NpdGlvbi55KVxuICB9XG5cbiAgZ2V0UDMoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb24uYWRkKHRoaXMuc2l6ZSlcbiAgfVxuXG4gIGdldFA0KCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSlcbiAgfVxuXG4gIGdldENlbnRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi5hZGQodGhpcy5zaXplLm11bHQoMC41KSlcbiAgfVxuXG4gIG9yKHJlY3QpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IG5ldyBQb2ludChNYXRoLm1pbih0aGlzLnBvc2l0aW9uLngsIHJlY3QucG9zaXRpb24ueCksIE1hdGgubWluKHRoaXMucG9zaXRpb24ueSwgcmVjdC5wb3NpdGlvbi55KSlcbiAgICBjb25zdCBzaXplID0gKG5ldyBQb2ludChNYXRoLm1heCh0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnNpemUueCwgcmVjdC5wb3NpdGlvbi54ICsgcmVjdC5zaXplLngpLCBNYXRoLm1heCh0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSwgcmVjdC5wb3NpdGlvbi55ICsgcmVjdC5zaXplLnkpKSkuc3ViKHBvc2l0aW9uKVxuICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHBvc2l0aW9uLCBzaXplKVxuICB9XG5cbiAgYW5kKHJlY3QpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IG5ldyBQb2ludChNYXRoLm1heCh0aGlzLnBvc2l0aW9uLngsIHJlY3QucG9zaXRpb24ueCksIE1hdGgubWF4KHRoaXMucG9zaXRpb24ueSwgcmVjdC5wb3NpdGlvbi55KSlcbiAgICBjb25zdCBzaXplID0gKG5ldyBQb2ludChNYXRoLm1pbih0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnNpemUueCwgcmVjdC5wb3NpdGlvbi54ICsgcmVjdC5zaXplLngpLCBNYXRoLm1pbih0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSwgcmVjdC5wb3NpdGlvbi55ICsgcmVjdC5zaXplLnkpKSkuc3ViKHBvc2l0aW9uKVxuICAgIGlmIChzaXplLnggPD0gMCB8fCBzaXplLnkgPD0gMCkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUocG9zaXRpb24sIHNpemUpXG4gIH1cblxuICBpbmNsdWRlUG9pbnQocCkge1xuICAgIHJldHVybiAhKHRoaXMucG9zaXRpb24ueCA+IHAueCB8fCB0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnNpemUueCA8IHAueCB8fCB0aGlzLnBvc2l0aW9uLnkgPiBwLnkgfHwgdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnkgPCBwLnkpXG4gIH1cblxuICBpbmNsdWRlUmVjdGFuZ2xlKHJlY3RhbmdsZSkge1xuICAgIHJldHVybiB0aGlzLmluY2x1ZGVQb2ludChyZWN0YW5nbGUucG9zaXRpb24pICYmIHRoaXMuaW5jbHVkZVBvaW50KHJlY3RhbmdsZS5nZXRQMygpKVxuICB9XG5cbiAgbW92ZVRvQm91bmQocmVjdCwgYXhpcykge1xuICAgIGxldCBzZWxBeGlzLCBjcm9zc1JlY3RhbmdsZVxuICAgIGlmIChheGlzKSB7XG4gICAgICBzZWxBeGlzID0gYXhpc1xuICAgIH0gZWxzZSB7XG4gICAgICBjcm9zc1JlY3RhbmdsZSA9IHRoaXMuYW5kKHJlY3QpXG4gICAgICBpZiAoIWNyb3NzUmVjdGFuZ2xlKSB7XG4gICAgICAgIHJldHVybiByZWN0XG4gICAgICB9XG4gICAgICBzZWxBeGlzID0gY3Jvc3NSZWN0YW5nbGUuc2l6ZS54ID4gY3Jvc3NSZWN0YW5nbGUuc2l6ZS55ID8gJ3knIDogJ3gnXG4gICAgfVxuICAgIGNvbnN0IHRoaXNDZW50ZXIgPSB0aGlzLmdldENlbnRlcigpXG4gICAgY29uc3QgcmVjdENlbnRlciA9IHJlY3QuZ2V0Q2VudGVyKClcbiAgICBjb25zdCBzaWduID0gdGhpc0NlbnRlcltzZWxBeGlzXSA+IHJlY3RDZW50ZXJbc2VsQXhpc10gPyAtMSA6IDFcbiAgICBjb25zdCBvZmZzZXQgPSBzaWduID4gMCA/IHRoaXMucG9zaXRpb25bc2VsQXhpc10gKyB0aGlzLnNpemVbc2VsQXhpc10gLSByZWN0LnBvc2l0aW9uW3NlbEF4aXNdIDogdGhpcy5wb3NpdGlvbltzZWxBeGlzXSAtIChyZWN0LnBvc2l0aW9uW3NlbEF4aXNdICsgcmVjdC5zaXplW3NlbEF4aXNdKVxuICAgIHJlY3QucG9zaXRpb25bc2VsQXhpc10gPSByZWN0LnBvc2l0aW9uW3NlbEF4aXNdICsgb2Zmc2V0XG4gICAgcmV0dXJuIHJlY3RcbiAgfVxuXG4gIGdldFNxdWFyZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zaXplLnggKiB0aGlzLnNpemUueVxuICB9XG5cbiAgc3R5bGVBcHBseShlbCkge1xuICAgIGVsID0gZWwgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5kJylcbiAgICBlbC5zdHlsZS5sZWZ0ID0gdGhpcy5wb3NpdGlvbi54ICsgJ3B4J1xuICAgIGVsLnN0eWxlLnRvcCA9IHRoaXMucG9zaXRpb24ueSArICdweCdcbiAgICBlbC5zdHlsZS53aWR0aCA9IHRoaXMuc2l6ZS54ICsgJ3B4J1xuICAgIGVsLnN0eWxlLmhlaWdodCA9IHRoaXMuc2l6ZS55ICsgJ3B4J1xuICB9XG5cbiAgZ3Jvd3RoKHNpemUpIHtcbiAgICB0aGlzLnNpemUgPSB0aGlzLnNpemUuYWRkKHNpemUpXG4gICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMucG9zaXRpb24uYWRkKHNpemUubXVsdCgtMC41KSlcbiAgfVxuXG4gIGdldE1pblNpZGUoKSB7XG4gICAgcmV0dXJuIE1hdGgubWluKHRoaXMuc2l6ZS54LCB0aGlzLnNpemUueSlcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRWxlbWVudChlbGVtZW50LCBwYXJlbnQ9ZWxlbWVudC5wYXJlbnROb2RlLCBpc0NvbnRlbnRCb3hTaXplPWZhbHNlLCBpc0NvbnNpZGVyVHJhbnNsYXRlPWZhbHNlKSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBQb2ludC5lbGVtZW50T2Zmc2V0KGVsZW1lbnQsIHBhcmVudCwgaXNDb25zaWRlclRyYW5zbGF0ZSlcbiAgICBjb25zdCBzaXplID0gUG9pbnQuZWxlbWVudFNpemUoZWxlbWVudCwgaXNDb250ZW50Qm94U2l6ZSlcbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZShwb3NpdGlvbiwgc2l6ZSlcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0RGVmYXVsdENvbnRhaW5lcihlbGVtZW50KSB7XG4gIGxldCBjb250YWluZXIgPSBlbGVtZW50LnBhcmVudE5vZGVcbiAgd2hpbGUgKGNvbnRhaW5lci5wYXJlbnROb2RlICYmIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGNvbnRhaW5lcilbJ3Bvc2l0aW9uJ10gPT09ICdzdGF0aWMnICYmIGNvbnRhaW5lci50YWdOYW1lICE9PSAnQk9EWScpIHtcbiAgICBjb250YWluZXIgPSBjb250YWluZXIucGFyZW50Tm9kZVxuICB9XG4gIHJldHVybiBjb250YWluZXJcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yIChvcHRpb25zID0ge30pIHtcbiAgICB0aGlzLmV2ZW50cyA9IHt9XG5cbiAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLm9uKSB7XG4gICAgICBmb3IgKGNvbnN0IFtldmVudE5hbWUsIGZuXSBvZiBPYmplY3QuZW50cmllcyhvcHRpb25zLm9uKSkge1xuICAgICAgICB0aGlzLm9uKGV2ZW50TmFtZSwgZm4pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZW1pdChldmVudE5hbWUpIHtcbiAgICB0aGlzLmludGVycnVwdGVkID0gZmFsc2VcbiAgICBjb25zdCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpXG5cbiAgICBpZiAoIXRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHJldHVyblxuXG4gICAgZm9yIChjb25zdCBmdW5jIG9mIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIGZ1bmMoLi4uYXJncylcbiAgICAgIGlmICh0aGlzLmludGVycnVwdGVkKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGludGVycnVwdCgpIHtcbiAgICB0aGlzLmludGVycnVwdGVkID0gdHJ1ZVxuICB9XG5cbiAgb24oZXZlbnROYW1lLCBmbikge1xuICAgIGlmICghdGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IFtdXG4gICAgfVxuXG4gICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5wdXNoKGZuKVxuICB9XG5cbiAgcHJlcGVuZE9uKGV2ZW50TmFtZSwgZm4pIHtcbiAgICBpZiAoIXRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSBbXVxuICAgIH1cblxuICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0udW5zaGlmdChmbilcbiAgfVxuXG4gIHVuc3Vic2NyaWJlKGV2ZW50TmFtZSwgZm4pIHtcbiAgICBpZiAodGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmV2ZW50c1tldmVudE5hbWVdLmluZGV4T2YoZm4pXG4gICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLnNwbGljZShpbmRleCwgMSlcbiAgICB9XG4gIH1cblxuICByZXNldEVtaXR0ZXIgKCkge1xuICAgIHRoaXMuZXZlbnRzID0ge31cbiAgfVxuXG4gIHJlc2V0T24oZXZlbnROYW1lKSB7XG4gICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IFtdXG4gIH1cbn1cbiIsIi8qIVxuICogZ2V0U3R5bGVQcm9wZXJ0eSB2MS4wLjRcbiAqIG9yaWdpbmFsIGJ5IGthbmdheFxuICogaHR0cDovL3BlcmZlY3Rpb25raWxscy5jb20vZmVhdHVyZS10ZXN0aW5nLWNzcy1wcm9wZXJ0aWVzL1xuICogTUlUIGxpY2Vuc2VcbiAqL1xuXG4vKmpzaGludCBicm93c2VyOiB0cnVlLCBzdHJpY3Q6IHRydWUsIHVuZGVmOiB0cnVlICovXG4vKmdsb2JhbCBkZWZpbmU6IGZhbHNlLCBleHBvcnRzOiBmYWxzZSwgbW9kdWxlOiBmYWxzZSAqL1xuXG4oIGZ1bmN0aW9uKCB3aW5kb3cgKSB7XG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHByZWZpeGVzID0gJ1dlYmtpdCBNb3ogbXMgTXMgTycuc3BsaXQoJyAnKTtcbnZhciBkb2NFbGVtU3R5bGUgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGU7XG5cbmZ1bmN0aW9uIGdldFN0eWxlUHJvcGVydHkoIHByb3BOYW1lICkge1xuICBpZiAoICFwcm9wTmFtZSApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyB0ZXN0IHN0YW5kYXJkIHByb3BlcnR5IGZpcnN0XG4gIGlmICggdHlwZW9mIGRvY0VsZW1TdHlsZVsgcHJvcE5hbWUgXSA9PT0gJ3N0cmluZycgKSB7XG4gICAgcmV0dXJuIHByb3BOYW1lO1xuICB9XG5cbiAgLy8gY2FwaXRhbGl6ZVxuICBwcm9wTmFtZSA9IHByb3BOYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcHJvcE5hbWUuc2xpY2UoMSk7XG5cbiAgLy8gdGVzdCB2ZW5kb3Igc3BlY2lmaWMgcHJvcGVydGllc1xuICB2YXIgcHJlZml4ZWQ7XG4gIGZvciAoIHZhciBpPTAsIGxlbiA9IHByZWZpeGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrICkge1xuICAgIHByZWZpeGVkID0gcHJlZml4ZXNbaV0gKyBwcm9wTmFtZTtcbiAgICBpZiAoIHR5cGVvZiBkb2NFbGVtU3R5bGVbIHByZWZpeGVkIF0gPT09ICdzdHJpbmcnICkge1xuICAgICAgcmV0dXJuIHByZWZpeGVkO1xuICAgIH1cbiAgfVxufVxuXG4vLyB0cmFuc3BvcnRcbmlmICggdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAvLyBBTURcbiAgZGVmaW5lKCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZ2V0U3R5bGVQcm9wZXJ0eTtcbiAgfSk7XG59IGVsc2UgaWYgKCB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgKSB7XG4gIC8vIENvbW1vbkpTIGZvciBDb21wb25lbnRcbiAgbW9kdWxlLmV4cG9ydHMgPSBnZXRTdHlsZVByb3BlcnR5O1xufSBlbHNlIHtcbiAgLy8gYnJvd3NlciBnbG9iYWxcbiAgd2luZG93LmdldFN0eWxlUHJvcGVydHkgPSBnZXRTdHlsZVByb3BlcnR5O1xufVxuXG59KSggd2luZG93ICk7XG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0RGlzdGFuY2UocDEsIHAyKSB7XG4gIGNvbnN0IGR4ID0gcDEueCAtIHAyLngsIGR5ID0gcDEueSAtIHAyLnlcbiAgcmV0dXJuIE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFhEaWZmZXJlbmNlKHAxLCBwMikge1xuICByZXR1cm4gTWF0aC5hYnMocDEueCAtIHAyLngpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRZRGlmZmVyZW5jZShwMSwgcDIpIHtcbiAgcmV0dXJuIE1hdGguYWJzKHAxLnkgLSBwMi55KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtZWRTcGFjZURpc3RhbmNlRmFjdG9yeShvcHRpb25zKSB7XG4gIHJldHVybiAocDEsIHAyKSA9PiB7XG4gICAgcmV0dXJuIE1hdGguc3FydChcbiAgICAgIE1hdGgucG93KG9wdGlvbnMueCAqIE1hdGguYWJzKHAxLnggLSBwMi54KSwgMikgK1xuICAgICAgTWF0aC5wb3cob3B0aW9ucy55ICogTWF0aC5hYnMocDEueSAtIHAyLnkpLCAyKVxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5kZXhPZk5lYXJlc3RQb2ludChhcnIsIHZhbCwgcmFkaXVzLCBnZXREaXN0YW5jZUZ1bmM9Z2V0RGlzdGFuY2UpIHtcbiAgbGV0IHNpemUsIGluZGV4ID0gMCwgaSwgdGVtcFxuICBpZiAoYXJyLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAtMVxuICB9XG4gIHNpemUgPSBnZXREaXN0YW5jZUZ1bmMoYXJyWzBdLCB2YWwpXG4gIGZvciAoaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICB0ZW1wID0gZ2V0RGlzdGFuY2VGdW5jKGFycltpXSwgdmFsKVxuICAgIGlmICh0ZW1wIDwgc2l6ZSkge1xuICAgICAgc2l6ZSA9IHRlbXBcbiAgICAgIGluZGV4ID0gaVxuICAgIH1cbiAgfVxuICBpZiAocmFkaXVzID49IDAgJiYgc2l6ZSA+IHJhZGl1cykge1xuICAgIHJldHVybiAtMVxuICB9XG4gIHJldHVybiBpbmRleFxufVxuIiwiaW1wb3J0IFBvaW50IGZyb20gJy4vcG9pbnQnXG5pbXBvcnQgeyBnZXREaXN0YW5jZSB9IGZyb20gJy4vZGlzdGFuY2VzJ1xuXG5leHBvcnQgZnVuY3Rpb24gY2xhbXAobWluLCBtYXgsIHZhbCkge1xuICByZXR1cm4gTWF0aC5tYXgobWluLCBNYXRoLm1pbihtYXgsIHZhbCkpXG59XG5cbi8vUmV0dXJuIGNyb3NzaW5nIHBvaW50IG9mIHR3byBsaW5lc1xuZXhwb3J0IGZ1bmN0aW9uIGRpcmVjdENyb3NzaW5nKEwxUDEsIEwxUDIsIEwyUDEsIEwyUDIpIHtcbiAgbGV0IHRlbXAsIGsxLCBrMiwgYjEsIGIyLCB4LCB5XG4gIGlmIChMMlAxLnggPT09IEwyUDIueCkge1xuICAgIHRlbXAgPSBMMlAxXG4gICAgTDJQMSA9IEwxUDFcbiAgICBMMVAxID0gdGVtcFxuICAgIHRlbXAgPSBMMlAyXG4gICAgTDJQMiA9IEwxUDJcbiAgICBMMVAyID0gdGVtcFxuICB9XG4gIGlmIChMMVAxLnggPT09IEwxUDIueCkge1xuICAgIGsyID0gKEwyUDIueSAtIEwyUDEueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgIGIyID0gKEwyUDIueCAqIEwyUDEueSAtIEwyUDEueCAqIEwyUDIueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgIHggPSBMMVAxLnhcbiAgICB5ID0geCAqIGsyICsgYjJcbiAgICByZXR1cm4gbmV3IFBvaW50KHgsIHkpXG4gIH0gZWxzZSB7XG4gICAgazEgPSAoTDFQMi55IC0gTDFQMS55KSAvIChMMVAyLnggLSBMMVAxLngpXG4gICAgYjEgPSAoTDFQMi54ICogTDFQMS55IC0gTDFQMS54ICogTDFQMi55KSAvIChMMVAyLnggLSBMMVAxLngpXG4gICAgazIgPSAoTDJQMi55IC0gTDJQMS55KSAvIChMMlAyLnggLSBMMlAxLngpXG4gICAgYjIgPSAoTDJQMi54ICogTDJQMS55IC0gTDJQMS54ICogTDJQMi55KSAvIChMMlAyLnggLSBMMlAxLngpXG4gICAgeCA9IChiMSAtIGIyKSAvIChrMiAtIGsxKVxuICAgIHkgPSB4ICogazEgKyBiMVxuICAgIHJldHVybiBuZXcgUG9pbnQoeCwgeSlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRUb1NlZ21lbnQoTFAxLCBMUDIsIFApIHtcbiAgbGV0IHgsIHlcbiAgeCA9IGNsYW1wKE1hdGgubWluKExQMS54LCBMUDIueCksIE1hdGgubWF4KExQMS54LCBMUDIueCksIFAueClcbiAgaWYgKHggIT09IFAueCkge1xuICAgIHkgPSAoeCA9PT0gTFAxLngpID8gTFAxLnkgOiBMUDIueVxuICAgIFAgPSBuZXcgUG9pbnQoeCwgeSlcbiAgfVxuXG4gIHkgPSBjbGFtcChNYXRoLm1pbihMUDEueSwgTFAyLnkpLCBNYXRoLm1heChMUDEueSwgTFAyLnkpLCBQLnkpXG4gIGlmICh5ICE9PSBQLnkpIHtcbiAgICB4ID0gKHkgPT09IExQMS55KSA/IExQMS54IDogTFAyLnhcbiAgICBQID0gbmV3IFBvaW50KHgsIHkpXG4gIH1cblxuICByZXR1cm4gUFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRUb0xpbmUoQSwgQiwgUCkge1xuICBjb25zdCBBUCA9IG5ldyBQb2ludChQLnggLSBBLngsIFAueSAtIEEueSksXG4gICAgQUIgPSBuZXcgUG9pbnQoQi54IC0gQS54LCBCLnkgLSBBLnkpLFxuICAgIGFiMiA9IEFCLnggKiBBQi54ICsgQUIueSAqIEFCLnksXG4gICAgYXBfYWIgPSBBUC54ICogQUIueCArIEFQLnkgKiBBQi55LFxuICAgIHQgPSBhcF9hYiAvIGFiMlxuICByZXR1cm4gbmV3IFBvaW50KEEueCArIEFCLnggKiB0LCBBLnkgKyBBQi55ICogdClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBvaW50T25MaW5lKExQMSwgTFAyLCBwZXJjZW50KSB7XG4gIGNvbnN0IGR4ID0gTFAyLnggLSBMUDEueCwgZHkgPSBMUDIueSAtIExQMS55XG4gIHJldHVybiBuZXcgUG9pbnQoTFAxLnggKyBwZXJjZW50ICogZHgsIExQMS55ICsgcGVyY2VudCAqIGR5KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9pbnRPbkxpbmVCeUxlbmdodChMUDEsIExQMiwgbGVuZ2h0KSB7XG4gIGNvbnN0IGR4ID0gTFAyLnggLSBMUDEueFxuICBjb25zdCBkeSA9IExQMi55IC0gTFAxLnlcbiAgY29uc3QgcGVyY2VudCA9IGxlbmdodCAvIGdldERpc3RhbmNlKExQMSwgTFAyKVxuICByZXR1cm4gbmV3IFBvaW50KExQMS54ICsgcGVyY2VudCAqIGR4LCBMUDEueSArIHBlcmNlbnQgKiBkeSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFBvaW50VG9Cb3VuZFBvaW50cyhib3VuZHBvaW50cywgcG9pbnQsIGlzUmlnaHQpIHtcbiAgY29uc3QgcmVzdWx0ID0gYm91bmRwb2ludHMuZmlsdGVyKChiUG9pbnQpID0+IHtcbiAgICByZXR1cm4gYlBvaW50LnkgPiBwb2ludC55IHx8IChpc1JpZ2h0ID8gYlBvaW50LnggPCBwb2ludC54IDogYlBvaW50LnggPiBwb2ludC54KVxuICB9KVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzdWx0Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHBvaW50LnkgPCByZXN1bHRbaV0ueSkge1xuICAgICAgcmVzdWx0LnNwbGljZShpLCAwLCBwb2ludClcbiAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG4gIH1cbiAgcmVzdWx0LnB1c2gocG9pbnQpXG4gIHJldHVybiByZXN1bHRcbn1cbiIsImltcG9ydCBQb2ludCBmcm9tICcuL3BvaW50J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QW5nbGVEaWZmKGFscGhhLCBiZXRhKSB7XG4gIGNvbnN0IG1pbkFuZ2xlID0gTWF0aC5taW4oYWxwaGEsIGJldGEpXG4gIGNvbnN0IG1heEFuZ2xlID0gIE1hdGgubWF4KGFscGhhLCBiZXRhKVxuICByZXR1cm4gTWF0aC5taW4obWF4QW5nbGUgLSBtaW5BbmdsZSwgbWluQW5nbGUgKyBNYXRoLlBJKjIgLSBtYXhBbmdsZSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFuZ2xlKHAxLCBwMikge1xuICBjb25zdCBkaWZmID0gcDIuc3ViKHAxKVxuICByZXR1cm4gbm9ybWFsaXplQW5nbGUoTWF0aC5hdGFuMihkaWZmLnksIGRpZmYueCkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b1JhZGlhbihhbmdsZSkge1xuICByZXR1cm4gKChhbmdsZSAlIDM2MCkgKiBNYXRoLlBJIC8gMTgwKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9EZWdyZWUoYW5nbGUpIHtcbiAgcmV0dXJuIChhbmdsZSAqIDE4MCAvIE1hdGguUEkpICUgMzYwXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZEFuZ2xlKG1pbiwgbWF4LCB2YWwpIHtcbiAgbGV0IGRtaW4sIGRtYXhcbiAgaWYgKG1pbiA8IG1heCAmJiB2YWwgPiBtaW4gJiYgdmFsIDwgbWF4KSB7XG4gICAgcmV0dXJuIHZhbFxuICB9IGVsc2UgaWYgKG1heCA8IG1pbiAmJiAodmFsIDwgbWF4IHx8IHZhbCA+IG1pbikpIHtcbiAgICByZXR1cm4gdmFsXG4gIH0gZWxzZSB7XG4gICAgZG1pbiA9IGdldEFuZ2xlRGlmZihtaW4sIHZhbClcbiAgICBkbWF4ID0gZ2V0QW5nbGVEaWZmKG1heCwgdmFsKVxuICAgIGlmIChkbWluIDwgZG1heCkge1xuICAgICAgcmV0dXJuIG1pblxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbWF4XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROZWFyZXN0QW5nbGUoYXJyLCBhbmdsZSkge1xuICBsZXQgaSwgdGVtcCwgZGlmZiA9IE1hdGguUEkgKiAyLCB2YWx1ZVxuICBmb3IgKGkgPSAwOyBpIDwgYXJyLmxlbmd0aDtpKyspIHtcbiAgICB0ZW1wID0gZ2V0QW5nbGVEaWZmKGFycltpXSwgYW5nbGUpXG4gICAgaWYgKGRpZmYgPCB0ZW1wKSB7XG4gICAgICBkaWZmID0gdGVtcFxuICAgICAgdmFsdWUgPSBhcnJbaV1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHZhbHVlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVBbmdsZSh2YWwpIHtcbiAgd2hpbGUgKHZhbCA8IDApIHtcbiAgICB2YWwgKz0gMiAqIE1hdGguUElcbiAgfVxuICB3aGlsZSAodmFsID4gMiAqIE1hdGguUEkpIHtcbiAgICB2YWwgLT0gMiAqIE1hdGguUElcbiAgfVxuICByZXR1cm4gdmFsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oYW5nbGUsIGxlbmd0aCwgY2VudGVyKSB7XG4gIGNlbnRlciA9IGNlbnRlciB8fCBuZXcgUG9pbnQoMCwgMClcbiAgcmV0dXJuIGNlbnRlci5hZGQobmV3IFBvaW50KGxlbmd0aCAqIE1hdGguY29zKGFuZ2xlKSwgbGVuZ3RoICogTWF0aC5zaW4oYW5nbGUpKSlcbn1cbiIsImltcG9ydCBQb2ludCBmcm9tICcuL2dlb21ldHJ5L3BvaW50J1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tICcuL2dlb21ldHJ5L3JlY3RhbmdsZSdcbmltcG9ydCB7XG4gIGdldFBvaW50T25MaW5lQnlMZW5naHQsXG4gIGRpcmVjdENyb3NzaW5nLFxuICBib3VuZFRvTGluZVxufSBmcm9tICcuL2dlb21ldHJ5L2JvdW5kcydcblxuaW1wb3J0IHtcbiAgZ2V0QW5nbGUsXG4gIG5vcm1hbGl6ZUFuZ2xlLFxuICBib3VuZEFuZ2xlLFxuICBnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW1cbn0gZnJvbSAnLi9nZW9tZXRyeS9hbmdsZXMnXG5cbmV4cG9ydCBjbGFzcyBCb3VuZCB7XG4gIGNvbnN0cnVjdG9yICgpIHt9XG5cbiAgYm91bmQocG9pbnQsIF9zaXplKSB7XG4gICAgcmV0dXJuIHBvaW50XG4gIH1cblxuICByZWZyZXNoICgpIHt9XG5cbiAgc3RhdGljIGJvdW5kaW5nKCkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IHRoaXMoLi4uYXJndW1lbnRzKVxuICAgIHJldHVybiBpbnN0YW5jZS5ib3VuZC5iaW5kKGluc3RhbmNlKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvUmVjdGFuZ2xlIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3RvcihyZWN0YW5nbGUpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5yZWN0YW5nbGUgPSByZWN0YW5nbGVcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgY2FsY1BvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIGNvbnN0IHJlY3RQMiA9IHRoaXMucmVjdGFuZ2xlLmdldFAzKClcblxuICAgIGlmICh0aGlzLnJlY3RhbmdsZS5wb3NpdGlvbi54ID4gY2FsY1BvaW50LngpIHtcbiAgICAgIChjYWxjUG9pbnQueCA9IHRoaXMucmVjdGFuZ2xlLnBvc2l0aW9uLngpXG4gICAgfVxuICAgIGlmICh0aGlzLnJlY3RhbmdsZS5wb3NpdGlvbi55ID4gY2FsY1BvaW50LnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gdGhpcy5yZWN0YW5nbGUucG9zaXRpb24ueVxuICAgIH1cbiAgICBpZiAocmVjdFAyLnggPCBjYWxjUG9pbnQueCArIHNpemUueCkge1xuICAgICAgY2FsY1BvaW50LnggPSByZWN0UDIueCAtIHNpemUueFxuICAgIH1cbiAgICBpZiAocmVjdFAyLnkgPCBjYWxjUG9pbnQueSArIHNpemUueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSByZWN0UDIueSAtIHNpemUueVxuICAgIH1cblxuICAgIHJldHVybiBjYWxjUG9pbnRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb0VsZW1lbnQgZXh0ZW5kcyBCb3VuZFRvUmVjdGFuZ2xlIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29udGFpbmVyKSB7XG4gICAgc3VwZXIoUmVjdGFuZ2xlLmZyb21FbGVtZW50KGVsZW1lbnQsIGNvbnRhaW5lcikpXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyXG4gIH1cblxuICByZWZyZXNoICgpIHtcbiAgICB0aGlzLnJlY3RhbmdsZSA9IFJlY3RhbmdsZS5mcm9tRWxlbWVudCh0aGlzLmVsZW1lbnQsIHRoaXMuY29udGFpbmVyKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvTGluZVggZXh0ZW5kcyBCb3VuZCB7XG4gIGNvbnN0cnVjdG9yKHgsIHN0YXJ0WSwgZW5kWSkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnggPSB4XG4gICAgdGhpcy5zdGFydFkgPSBzdGFydFlcbiAgICB0aGlzLmVuZFkgPSBlbmRZXG4gIH1cblxuICBib3VuZChwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IGNhbGNQb2ludCA9IHBvaW50LmNsb25lKClcblxuICAgIGNhbGNQb2ludC54ID0gdGhpcy54XG4gICAgaWYgKHRoaXMuc3RhcnRZID4gY2FsY1BvaW50LnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gdGhpcy5zdGFydFlcbiAgICB9XG4gICAgaWYgKHRoaXMuZW5kWSA8IGNhbGNQb2ludC55ICsgc2l6ZS55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHRoaXMuZW5kWSAtIHNpemUueVxuICAgIH1cblxuICAgIHJldHVybiBjYWxjUG9pbnRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb0xpbmVZIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3Rvcih5LCBzdGFydFgsIGVuZFgpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy55ID0geVxuICAgIHRoaXMuc3RhcnRYID0gc3RhcnRYXG4gICAgdGhpcy5lbmRYID0gZW5kWFxuICB9XG5cbiAgYm91bmQocG9pbnQsIHNpemUpIHtcbiAgICBjb25zdCBjYWxjUG9pbnQgPSBwb2ludC5jbG9uZSgpXG4gICAgY2FsY1BvaW50LnkgPSB0aGlzLnlcbiAgICBpZiAodGhpcy5zdGFydFggPiBjYWxjUG9pbnQueCkge1xuICAgICAgY2FsY1BvaW50LnggPSB0aGlzLnN0YXJ0WFxuICAgIH1cbiAgICBpZiAodGhpcy5lbmRYIDwgY2FsY1BvaW50LnggKyBzaXplLngpIHtcbiAgICAgIGNhbGNQb2ludC54ID0gdGhpcy5lbmRYIC0gc2l6ZS54XG4gICAgfVxuICAgIHJldHVybiBjYWxjUG9pbnRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb0xpbmUgZXh0ZW5kcyBCb3VuZCB7XG4gIGNvbnN0cnVjdG9yKHN0YXJ0UG9pbnQsIGVuZFBvaW50KSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuc3RhcnRQb2ludCA9IHN0YXJ0UG9pbnRcbiAgICB0aGlzLmVuZFBvaW50ID0gZW5kUG9pbnRcbiAgICBjb25zdCBhbHBoYSA9IE1hdGguYXRhbjIoZW5kUG9pbnQueSAtIHN0YXJ0UG9pbnQueSwgZW5kUG9pbnQueCAtIHN0YXJ0UG9pbnQueClcbiAgICBjb25zdCBiZXRhID0gYWxwaGEgKyBNYXRoLlBJIC8gMlxuICAgIHRoaXMuc29tZUsgPSAxMFxuICAgIHRoaXMuY29zQmV0YSA9IE1hdGguY29zKGJldGEpXG4gICAgdGhpcy5zaW5CZXRhID0gTWF0aC5zaW4oYmV0YSlcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgcG9pbnQyID0gbmV3IFBvaW50KFxuICAgICAgcG9pbnQueCArIHRoaXMuc29tZUsgKiB0aGlzLmNvc0JldGEsXG4gICAgICBwb2ludC55ICsgdGhpcy5zb21lSyAqIHRoaXMuc2luQmV0YVxuICAgIClcblxuICAgIGNvbnN0IG5ld0VuZFBvaW50ID0gZ2V0UG9pbnRPbkxpbmVCeUxlbmdodCh0aGlzLmVuZFBvaW50LCB0aGlzLnN0YXJ0UG9pbnQsIHNpemUueClcbiAgICBjb25zdCBwb2ludENyb3NzaW5nID0gZGlyZWN0Q3Jvc3NpbmcodGhpcy5zdGFydFBvaW50LCB0aGlzLmVuZFBvaW50LCBwb2ludCwgcG9pbnQyKVxuXG4gICAgcmV0dXJuIGJvdW5kVG9MaW5lKHRoaXMuc3RhcnRQb2ludCwgbmV3RW5kUG9pbnQsIHBvaW50Q3Jvc3NpbmcpXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9DaXJjbGUgZXh0ZW5kcyBCb3VuZCB7XG4gIGNvbnN0cnVjdG9yKGNlbnRlciwgcmFkaXVzKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuY2VudGVyID0gY2VudGVyXG4gICAgdGhpcy5yYWRpdXMgPSByYWRpdXNcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBfc2l6ZSkge1xuICAgIHJldHVybiBnZXRQb2ludE9uTGluZUJ5TGVuZ2h0KHRoaXMuY2VudGVyLCBwb2ludCwgdGhpcy5yYWRpdXMpXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9BcmMgZXh0ZW5kcyBCb3VuZFRvQ2lyY2xlIHtcbiAgY29uc3RydWN0b3IoY2VudGVyLCByYWRpdXMsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlKSB7XG4gICAgc3VwZXIoY2VudGVyLCByYWRpdXMpXG4gICAgdGhpcy5fc3RhcnRBbmdsZSA9IHN0YXJ0QW5nbGVcbiAgICB0aGlzLl9lbmRBbmdsZSA9IGVuZEFuZ2xlXG4gIH1cblxuICBzdGFydEFuZ2xlKCkge1xuICAgIHJldHVybiB0eXBlb2YgdGhpcy5fc3RhcnRBbmdsZSA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMuX3N0YXJ0QW5nbGUoKSA6IHRoaXMuX3N0YXJ0QW5nbGVcbiAgfVxuXG4gIGVuZEFuZ2xlKCkge1xuICAgIHJldHVybiB0eXBlb2YgdGhpcy5fZW5kQW5nbGUgPT09ICdmdW5jdGlvbicgPyB0aGlzLl9lbmRBbmdsZSgpIDogdGhpcy5fZW5kQW5nbGVcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBfc2l6ZSkge1xuICAgIGxldCBhbmdsZSA9IGdldEFuZ2xlKHRoaXMuY2VudGVyLCBwb2ludClcbiAgICBhbmdsZSA9IG5vcm1hbGl6ZUFuZ2xlKGFuZ2xlKVxuICAgIGFuZ2xlID0gYm91bmRBbmdsZSh0aGlzLnN0YXJ0QW5nbGUoKSwgdGhpcy5lbmRBbmdsZSgpLCBhbmdsZSlcbiAgICByZXR1cm4gZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKGFuZ2xlLCB0aGlzLnJhZGl1cywgdGhpcy5jZW50ZXIpXG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGFycmF5LCB2YWwpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChhcnJheVtpXSA9PT0gdmFsKSB7XG4gICAgICBhcnJheS5zcGxpY2UoaSwgMSlcbiAgICAgIGktLVxuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyYXlcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJhbmdlKHN0YXJ0LCBzdG9wLCBzdGVwKSB7XG4gIGNvbnN0IHJlc3VsdCA9IFtdXG4gIGlmICh0eXBlb2Ygc3RvcCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBzdG9wID0gc3RhcnRcbiAgICBzdGFydCA9IDBcbiAgfVxuICBpZiAodHlwZW9mIHN0ZXAgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgc3RlcCA9IDFcbiAgfVxuICBpZiAoKHN0ZXAgPiAwICYmIHN0YXJ0ID49IHN0b3ApIHx8IChzdGVwIDwgMCAmJiBzdGFydCA8PSBzdG9wKSkge1xuICAgIHJldHVybiBbXVxuICB9XG4gIGZvciAobGV0IGkgPSBzdGFydDsgc3RlcCA+IDAgPyBpIDwgc3RvcCA6IGkgPiBzdG9wOyBpICs9IHN0ZXApIHtcbiAgICByZXN1bHQucHVzaChpKVxuICB9XG4gIHJldHVybiByZXN1bHRcbn1cbiIsImltcG9ydCBQb2ludCBmcm9tICcuL2dlb21ldHJ5L3BvaW50J1xuaW1wb3J0IHsgYWRkUG9pbnRUb0JvdW5kUG9pbnRzIH0gZnJvbSAnLi9nZW9tZXRyeS9ib3VuZHMnXG5cbmltcG9ydCB7XG4gIGluZGV4T2ZOZWFyZXN0UG9pbnQsXG4gIGdldERpc3RhbmNlXG59IGZyb20gJy4vZ2VvbWV0cnkvZGlzdGFuY2VzJ1xuXG5jbGFzcyBCYXNpY1N0cmF0ZWd5IHtcbiAgY29uc3RydWN0b3IocmVjdGFuZ2xlLCBvcHRpb25zPXt9KSB7XG4gICAgdGhpcy5yZWN0YW5nbGUgPSByZWN0YW5nbGVcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zXG4gIH1cblxuICBnZXQgYm91bmRSZWN0ICgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMucmVjdGFuZ2xlID09PSAnZnVuY3Rpb24nID8gdGhpcy5yZWN0YW5nbGUoKSA6IHRoaXMucmVjdGFuZ2xlXG4gIH1cbn1cblxuY2xhc3MgTm90Q3Jvc3NpbmdTdHJhdGVneSBleHRlbmRzIEJhc2ljU3RyYXRlZ3kge1xuICBwb3NpdGlvbmluZyAocmVjdGFuZ2xlTGlzdCwgaW5kZXhlc09mTmV3cykge1xuICAgIGNvbnN0IHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMgPSByZWN0YW5nbGVMaXN0LnJlZHVjZSgoaW5kZXhlcywgX3JlY3QsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoaW5kZXhlc09mTmV3cy5pbmRleE9mKGluZGV4KSA9PT0gLTEpIHtcbiAgICAgICAgaW5kZXhlcy5wdXNoKGluZGV4KVxuICAgICAgfVxuICAgICAgcmV0dXJuIGluZGV4ZXNcbiAgICB9LCBbXSlcblxuICAgIGluZGV4ZXNPZk5ld3MuZm9yRWFjaCgoaW5kZXgpID0+IHtcbiAgICAgIGxldCByZWN0ID0gcmVjdGFuZ2xlTGlzdFtpbmRleF1cbiAgICAgIGxldCByZW1vdmFibGUgPSBmYWxzZVxuXG4gICAgICBzdGF0aWNSZWN0YW5nbGVJbmRleGVzLmZvckVhY2goKGluZGV4T2ZTdGF0aWMpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhdGljUmVjdCA9IHJlY3RhbmdsZUxpc3RbaW5kZXhPZlN0YXRpY11cbiAgICAgICAgcmVjdCA9IHN0YXRpY1JlY3QubW92ZVRvQm91bmQocmVjdClcbiAgICAgIH0pXG5cbiAgICAgIHJlbW92YWJsZSA9IHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMuc29tZSgoaW5kZXhPZlN0YXRpYykgPT4ge1xuICAgICAgICBjb25zdCBzdGF0aWNSZWN0ID0gcmVjdGFuZ2xlTGlzdFtpbmRleE9mU3RhdGljXVxuICAgICAgICByZXR1cm4gICEhc3RhdGljUmVjdC5hbmQocmVjdClcbiAgICAgIH0pIHx8IHJlY3QuYW5kKHRoaXMuYm91bmRSZWN0KS5nZXRTcXVhcmUoKSAhPT0gcmVjdC5nZXRTcXVhcmUoKVxuXG4gICAgICBpZiAocmVtb3ZhYmxlKSB7XG4gICAgICAgIHJlY3QucmVtb3ZhYmxlID0gdHJ1ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdGljUmVjdGFuZ2xlSW5kZXhlcy5wdXNoKGluZGV4KVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHJlY3RhbmdsZUxpc3RcbiAgfVxuXG4gIHNvcnRpbmcob2RsRHJhZ2dhYmxlc0xpc3QsIG5ld0RyYWdnYWJsZXMsIGluZGV4T2ZOZXdzKSB7XG4gICAgY29uc3QgZHJhZ2dhYmxlcyA9IG9kbERyYWdnYWJsZXNMaXN0LmNvbmNhdChuZXdEcmFnZ2FibGVzKVxuICAgIG5ld0RyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBpbmRleE9mTmV3cy5wdXNoKGRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpKVxuICAgIH0pXG4gICAgcmV0dXJuIGRyYWdnYWJsZXNcbiAgfVxufVxuXG5jbGFzcyBGbG9hdExlZnRTdHJhdGVneSBleHRlbmRzIEJhc2ljU3RyYXRlZ3kge1xuICBjb25zdHJ1Y3RvcihyZWN0YW5nbGUsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcihyZWN0YW5nbGUsIG9wdGlvbnMpXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICByZW1vdmFibGU6IHRydWVcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGhpcy5yYWRpdXMgPSBvcHRpb25zLnJhZGl1cyB8fCA4MFxuXG4gICAgdGhpcy5wYWRkaW5nVG9wTGVmdCA9IG9wdGlvbnMucGFkZGluZ1RvcExlZnQgfHwgbmV3IFBvaW50KDAsIDApXG4gICAgdGhpcy5wYWRkaW5nQm90dG9tUmlnaHQgPSBvcHRpb25zLnBhZGRpbmdCb3R0b21SaWdodCB8fCBuZXcgUG9pbnQoMCwgMClcbiAgICB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyA9IG9wdGlvbnMueUdhcEJldHdlZW5EcmFnZ2FibGVzIHx8IDBcblxuICAgIHRoaXMuZ2V0RGlzdGFuY2UgPSBvcHRpb25zLmdldERpc3RhbmNlIHx8IGdldERpc3RhbmNlXG4gICAgdGhpcy5nZXRQb3NpdGlvbiA9IG9wdGlvbnMuZ2V0UG9zaXRpb24gfHwgKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5wb3NpdGlvbilcbiAgfVxuXG4gIHBvc2l0aW9uaW5nKHJlY3RhbmdsZUxpc3QsIF9pbmRleGVzT2ZOZXdzKSB7XG4gICAgY29uc3QgYm91bmRSZWN0ID0gdGhpcy5ib3VuZFJlY3RcbiAgICBjb25zdCByZWN0UDIgPSBib3VuZFJlY3QuZ2V0UDIoKVxuICAgIGxldCBib3VuZGFyeVBvaW50cyA9IFtib3VuZFJlY3QucG9zaXRpb25dXG5cbiAgICByZWN0YW5nbGVMaXN0LmZvckVhY2goKHJlY3QsIHJlY3RJbmRleCkgPT4ge1xuICAgICAgbGV0IHBvc2l0aW9uLCBpc1ZhbGlkID0gZmFsc2VcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm91bmRhcnlQb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcG9zaXRpb24gPSBuZXcgUG9pbnQoXG4gICAgICAgICAgYm91bmRhcnlQb2ludHNbaV0ueCArIHRoaXMucGFkZGluZ1RvcExlZnQueCxcbiAgICAgICAgICBpID4gMCA/IChib3VuZGFyeVBvaW50c1tpIC0gMV0ueSArIHRoaXMueUdhcEJldHdlZW5EcmFnZ2FibGVzKSA6IChib3VuZFJlY3QucG9zaXRpb24ueSArIHRoaXMucGFkZGluZ1RvcExlZnQueSlcbiAgICAgICAgKVxuXG4gICAgICAgIGlzVmFsaWQgPSAocG9zaXRpb24ueCArIHJlY3Quc2l6ZS54IDwgcmVjdFAyLngpXG5cbiAgICAgICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICBwb3NpdGlvbiA9IG5ldyBQb2ludChcbiAgICAgICAgICBib3VuZFJlY3QucG9zaXRpb24ueCArIHRoaXMucGFkZGluZ1RvcExlZnQueCxcbiAgICAgICAgICBib3VuZGFyeVBvaW50c1tib3VuZGFyeVBvaW50cy5sZW5ndGggLSAxXS55ICsgKHJlY3RJbmRleCA+IDAgPyB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyA6IHRoaXMucGFkZGluZ1RvcExlZnQueSlcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICByZWN0LnBvc2l0aW9uID0gcG9zaXRpb25cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucmVtb3ZhYmxlICYmIHJlY3QuZ2V0UDMoKS55ID4gYm91bmRSZWN0LmdldFAzKCkueSkge1xuICAgICAgICByZWN0LnJlbW92YWJsZSA9IHRydWVcbiAgICAgIH1cblxuICAgICAgYm91bmRhcnlQb2ludHMgPSBhZGRQb2ludFRvQm91bmRQb2ludHMoYm91bmRhcnlQb2ludHMsIHJlY3QuZ2V0UDMoKS5hZGQodGhpcy5wYWRkaW5nQm90dG9tUmlnaHQpKVxuICAgIH0pXG4gICAgcmV0dXJuIHJlY3RhbmdsZUxpc3RcbiAgfVxuXG4gIHNvcnRpbmcob2RsRHJhZ2dhYmxlc0xpc3QsIG5ld0RyYWdnYWJsZXMsIGluZGV4T2ZOZXdzKSB7XG4gICAgY29uc3QgbmV3TGlzdCA9IG9kbERyYWdnYWJsZXNMaXN0LmNvbmNhdCgpXG4gICAgY29uc3QgbGlzdE9sZFBvc2l0aW9uID0gb2RsRHJhZ2dhYmxlc0xpc3QubWFwKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5nZXRQb3NpdGlvbigpKVxuICAgIG5ld0RyYWdnYWJsZXMuZm9yRWFjaCgobmV3RHJhZ2dhYmxlKSA9PiB7XG4gICAgICBsZXQgaW5kZXggPSBpbmRleE9mTmVhcmVzdFBvaW50KGxpc3RPbGRQb3NpdGlvbiwgdGhpcy5nZXRQb3NpdGlvbihuZXdEcmFnZ2FibGUpLCB0aGlzLnJhZGl1cywgdGhpcy5nZXREaXN0YW5jZSlcbiAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgaW5kZXggPSBuZXdMaXN0Lmxlbmd0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5kZXggPSBuZXdMaXN0LmluZGV4T2Yob2RsRHJhZ2dhYmxlc0xpc3RbaW5kZXhdKVxuICAgICAgfVxuICAgICAgbmV3TGlzdC5zcGxpY2UoaW5kZXgsIDAsIG5ld0RyYWdnYWJsZSlcbiAgICB9KVxuICAgIG5ld0RyYWdnYWJsZXMuZm9yRWFjaCgobmV3RHJhZ2dhYmxlKSA9PiB7XG4gICAgICBpbmRleE9mTmV3cy5wdXNoKG5ld0xpc3QuaW5kZXhPZihuZXdEcmFnZ2FibGUpKVxuICAgIH0pXG4gICAgcmV0dXJuIG5ld0xpc3RcbiAgfVxufVxuXG5jbGFzcyBGbG9hdFJpZ2h0U3RyYXRlZ3kgZXh0ZW5kcyBGbG9hdExlZnRTdHJhdGVneSB7XG4gIGNvbnN0cnVjdG9yKHJlY3RhbmdsZSwgb3B0aW9ucz17fSkge1xuICAgIHN1cGVyKHJlY3RhbmdsZSwgb3B0aW9ucylcblxuICAgIHRoaXMucGFkZGluZ1RvcFJpZ2h0ID0gb3B0aW9ucy5wYWRkaW5nVG9wUmlnaHQgfHwgbmV3IFBvaW50KDUsIDUpXG4gICAgdGhpcy5wYWRkaW5nQm90dG9tTGVmdCA9IG9wdGlvbnMucGFkZGluZ0JvdHRvbUxlZnQgfHwgbmV3IFBvaW50KDAsIDApXG4gICAgdGhpcy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgPSBvcHRpb25zLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyB8fCAwXG5cbiAgICB0aGlzLnBhZGRpbmdCb3R0b21OZWdMZWZ0ID0gbmV3IFBvaW50KC10aGlzLnBhZGRpbmdCb3R0b21MZWZ0LngsIHRoaXMucGFkZGluZ0JvdHRvbUxlZnQueSlcbiAgfVxuXG4gIHBvc2l0aW9uaW5nKHJlY3RhbmdsZUxpc3QsIF9pbmRleGVzT2ZOZXdzKSB7XG4gICAgY29uc3QgYm91bmRSZWN0ID0gdGhpcy5ib3VuZFJlY3RcbiAgICBsZXQgYm91bmRhcnlQb2ludHMgPSBbYm91bmRSZWN0LmdldFAyKCldXG5cbiAgICByZWN0YW5nbGVMaXN0LmZvckVhY2goKHJlY3QsIHJlY3RJbmRleCkgPT4ge1xuICAgICAgbGV0IHBvc2l0aW9uLCBpc1ZhbGlkID0gZmFsc2VcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm91bmRhcnlQb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcG9zaXRpb24gPSBuZXcgUG9pbnQoXG4gICAgICAgICAgYm91bmRhcnlQb2ludHNbaV0ueCAtIHJlY3Quc2l6ZS54IC0gdGhpcy5wYWRkaW5nVG9wUmlnaHQueCxcbiAgICAgICAgICBpID4gMCA/IChib3VuZGFyeVBvaW50c1tpIC0gMV0ueSArIHRoaXMueUdhcEJldHdlZW5EcmFnZ2FibGVzKSA6IChib3VuZFJlY3QucG9zaXRpb24ueSArIHRoaXMucGFkZGluZ1RvcFJpZ2h0LnkpXG4gICAgICAgIClcblxuICAgICAgICBpc1ZhbGlkID0gKHBvc2l0aW9uLnggPiByZWN0LnBvc2l0aW9uLngpXG4gICAgICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICAgIHBvc2l0aW9uID0gbmV3IFBvaW50KFxuICAgICAgICAgIGJvdW5kUmVjdC5nZXRQMigpLnggIC0gcmVjdC5zaXplLnggLSB0aGlzLnBhZGRpbmdUb3BSaWdodC54LFxuICAgICAgICAgIGJvdW5kYXJ5UG9pbnRzW2JvdW5kYXJ5UG9pbnRzLmxlbmd0aCAtIDFdLnkgKyAocmVjdEluZGV4ID4gMCA/IHRoaXMueUdhcEJldHdlZW5EcmFnZ2FibGVzIDogdGhpcy5wYWRkaW5nVG9wUmlnaHQueSlcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgcmVjdC5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnJlbW92YWJsZSAmJiByZWN0LmdldFA0KCkueSA+IGJvdW5kUmVjdC5nZXRQNCgpLnkpIHtcbiAgICAgICAgcmVjdC5yZW1vdmFibGUgPSB0cnVlXG4gICAgICB9XG4gICAgICBib3VuZGFyeVBvaW50cyA9IGFkZFBvaW50VG9Cb3VuZFBvaW50cyhib3VuZGFyeVBvaW50cywgcmVjdC5nZXRQNCgpLmFkZCh0aGlzLnBhZGRpbmdCb3R0b21OZWdMZWZ0KSwgdHJ1ZSlcbiAgICB9KVxuICAgIHJldHVybiByZWN0YW5nbGVMaXN0XG4gIH1cbn1cblxuZXhwb3J0IHsgTm90Q3Jvc3NpbmdTdHJhdGVneSwgRmxvYXRMZWZ0U3RyYXRlZ3ksIEZsb2F0UmlnaHRTdHJhdGVneSB9XG4iLCJpbXBvcnQgcmFuZ2UgZnJvbSAnLi91dGlscy9yYW5nZS5qcydcbmltcG9ydCByZW1vdmVJdGVtIGZyb20gJy4vdXRpbHMvcmVtb3ZlLWFycmF5LWl0ZW0nXG5pbXBvcnQgZ2V0RGVmYXVsdENvbnRhaW5lciBmcm9tICcuL3V0aWxzL2dldC1kZWZhdWx0LWNvbnRhaW5lcidcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudEVtaXR0ZXInXG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gJy4vZ2VvbWV0cnkvcmVjdGFuZ2xlJ1xuaW1wb3J0IHsgdHJhbnNmb3JtZWRTcGFjZURpc3RhbmNlRmFjdG9yeSB9IGZyb20gJy4vZ2VvbWV0cnkvZGlzdGFuY2VzJ1xuaW1wb3J0IHsgc2NvcGVzLCBkZWZhdWx0U2NvcGUgfSBmcm9tICcuL3Njb3BlJ1xuXG5pbXBvcnQgeyBGbG9hdExlZnRTdHJhdGVneSB9IGZyb20gJy4vcG9zaXRpb25pbmcnXG5pbXBvcnQgeyBCb3VuZFRvRWxlbWVudCB9IGZyb20gJy4vYm91bmRpbmcnXG5cbmNvbnN0IGFkZFRvRGVmYXVsdFNjb3BlID0gZnVuY3Rpb24odGFyZ2V0KSB7XG4gIGRlZmF1bHRTY29wZS5hZGRUYXJnZXQodGFyZ2V0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXJnZXQgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBkcmFnZ2FibGVzLCBvcHRpb25zID0ge30pIHtcbiAgICBzdXBlcihvcHRpb25zKVxuICAgIGNvbnN0IHRhcmdldCA9IHRoaXNcblxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgdGltZUVuZDogMjAwLFxuICAgICAgdGltZUV4Y2FuZ2U6IDQwMFxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0aGlzLnBvc2l0aW9uaW5nU3RyYXRlZ3kgPSBvcHRpb25zLnN0cmF0ZWd5IHx8IG5ldyBGbG9hdExlZnRTdHJhdGVneShcbiAgICAgIHRoaXMuZ2V0UmVjdGFuZ2xlLmJpbmQodGhpcyksXG4gICAgICB7XG4gICAgICAgIHJhZGl1czogODAsXG4gICAgICAgIGdldERpc3RhbmNlOiB0cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5KHsgeDogMSwgeTogNCB9KSxcbiAgICAgICAgcmVtb3ZhYmxlOiB0cnVlXG4gICAgICB9XG4gICAgKVxuXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUudGFyZ2V0cy5wdXNoKHRhcmdldCkpXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gZHJhZ2dhYmxlc1xuXG4gICAgVGFyZ2V0LmVtaXR0ZXIuZW1pdCgndGFyZ2V0OmNyZWF0ZScsIHRoaXMpXG5cbiAgICB0aGlzLnN0YXJ0Qm91bmRpbmcoKVxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBzdGFydEJvdW5kaW5nKCkge1xuICAgIHRoaXMuYm91bmQgPSB0aGlzLm9wdGlvbnMuYm91bmQgfHwgQm91bmRUb0VsZW1lbnQuYm91bmRpbmcodGhpcy5lbGVtZW50KVxuICB9XG5cbiAgcG9zaXRpb25pbmcgKGRyYWdnYWJsZXMsIGluZGV4ZXNPZk5ldykge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uaW5nU3RyYXRlZ3kucG9zaXRpb25pbmcoZHJhZ2dhYmxlcywgaW5kZXhlc09mTmV3KVxuICB9XG5cbiAgc29ydGluZyAob2xkRHJhZ2dhYmxlcywgbmV3RHJhZ2dhYmxlcywgaW5kZXhPZk5ld3MpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbmluZ1N0cmF0ZWd5LnNvcnRpbmcob2xkRHJhZ2dhYmxlcywgbmV3RHJhZ2dhYmxlcywgaW5kZXhPZk5ld3MpXG4gIH1cblxuICBpbml0KCkge1xuICAgIGxldCByZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXdcblxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzID0gdGhpcy5kcmFnZ2FibGVzLmZpbHRlcigoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBsZXQgZWxlbWVudCA9IGRyYWdnYWJsZS5lbGVtZW50LnBhcmVudE5vZGVcbiAgICAgIHdoaWxlIChlbGVtZW50KSB7XG4gICAgICAgIGlmIChlbGVtZW50ID09PSB0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGVcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH0pXG5cbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMubGVuZ3RoKSB7XG4gICAgICBpbmRleGVzT2ZOZXcgPSByYW5nZSh0aGlzLmlubmVyRHJhZ2dhYmxlcy5sZW5ndGgpXG4gICAgICByZWN0YW5nbGVzID0gdGhpcy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgICB9KSwgaW5kZXhlc09mTmV3KVxuICAgICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXcpXG4gICAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHRoaXMuZW1pdCgndGFyZ2V0OmFkZCcsIGRyYWdnYWJsZSkpXG4gICAgfVxuICB9XG5cbiAgZ2V0UmVjdGFuZ2xlKCkge1xuICAgIHJldHVybiBSZWN0YW5nbGUuZnJvbUVsZW1lbnQoXG4gICAgICB0aGlzLmVsZW1lbnQsXG4gICAgICB0aGlzLmNvbnRhaW5lcixcbiAgICAgIHRoaXMub3B0aW9ucy5pc0NvbnRlbnRCb3hTaXplLFxuICAgICAgdHJ1ZVxuICAgIClcbiAgfVxuXG4gIGNhdGNoRHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuY2F0Y2hEcmFnZ2FibGUpIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuY2F0Y2hEcmFnZ2FibGUodGhpcywgZHJhZ2dhYmxlKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0YXJnZXRSZWN0YW5nbGUgPSB0aGlzLmdldFJlY3RhbmdsZSgpXG4gICAgICBjb25zdCBkcmFnZ2FibGVTcXVhcmUgPSBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKCkuZ2V0U3F1YXJlKClcblxuICAgICAgcmV0dXJuIGRyYWdnYWJsZVNxdWFyZSA8IHRhcmdldFJlY3RhbmdsZS5nZXRTcXVhcmUoKVxuICAgICAgICAgICAgICAmJiB0YXJnZXRSZWN0YW5nbGUuaW5jbHVkZVBvaW50KGRyYWdnYWJsZS5nZXRDZW50ZXIoKSlcbiAgICB9XG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRSZWN0YW5nbGUoKS5wb3NpdGlvblxuICB9XG5cbiAgZ2V0U2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRSZWN0YW5nbGUoKS5zaXplXG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHNjb3Blcy5mb3JFYWNoKChzY29wZSkgPT4gcmVtb3ZlSXRlbShzY29wZS50YXJnZXRzLCB0aGlzKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgW10pXG4gICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBbXSwgMClcbiAgfVxuXG4gIG9uRW5kKGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IG5ld0RyYWdnYWJsZXNJbmRleCA9IFtdXG5cbiAgICBpZiAodGhpcy5nZXRSZWN0YW5nbGUoKS5pbmNsdWRlUG9pbnQoZHJhZ2dhYmxlLmdldENlbnRlcigpKSkge1xuICAgICAgZHJhZ2dhYmxlLnBvc2l0aW9uID0gdGhpcy5ib3VuZChkcmFnZ2FibGUucG9zaXRpb24sIGRyYWdnYWJsZS5nZXRTaXplKCkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHRoaXMuZW1pdCgndGFyZ2V0OmJlZm9yZUFkZCcsIGRyYWdnYWJsZSlcblxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzID0gdGhpcy5zb3J0aW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLCBbZHJhZ2dhYmxlXSwgbmV3RHJhZ2dhYmxlc0luZGV4KVxuICAgIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgfSksIG5ld0RyYWdnYWJsZXNJbmRleClcblxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgbmV3RHJhZ2dhYmxlc0luZGV4KVxuICAgIGlmICh0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkgIT09IC0xKSB7XG4gICAgICB0aGlzLmFkZFJlbW92ZU9uTW92ZShkcmFnZ2FibGUpXG4gICAgfVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBzZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXcsIHRpbWUpIHtcbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5zbGljZSgwKS5mb3JFYWNoKChkcmFnZ2FibGUsIGkpID0+IHtcbiAgICAgIGNvbnN0IHJlY3QgPSByZWN0YW5nbGVzW2ldLFxuICAgICAgICB0aW1lRW5kID0gdGltZSB8fCB0aW1lID09PSAwID8gdGltZSA6IGluZGV4ZXNPZk5ldy5pbmRleE9mKGkpICE9PSAtMSA/IHRoaXMub3B0aW9ucy50aW1lRW5kIDogdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlXG5cbiAgICAgIGlmIChyZWN0LnJlbW92YWJsZSkge1xuICAgICAgICBkcmFnZ2FibGUubW92ZShkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uLCB0aW1lRW5kLCB0cnVlLCB0cnVlKVxuICAgICAgICByZW1vdmVJdGVtKHRoaXMuaW5uZXJEcmFnZ2FibGVzLCBkcmFnZ2FibGUpXG4gICAgICAgIHRoaXMuZW1pdCgndGFyZ2V0OnJlbW92ZScsIGRyYWdnYWJsZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRyYWdnYWJsZS5tb3ZlKHJlY3QucG9zaXRpb24sIHRpbWVFbmQsIHRydWUsIHRydWUpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGFkZChkcmFnZ2FibGUsIHRpbWUpIHtcbiAgICBjb25zdCBuZXdEcmFnZ2FibGVzSW5kZXggPSB0aGlzLmlubmVyRHJhZ2dhYmxlcy5sZW5ndGhcblxuICAgIHRoaXMuZW1pdCgndGFyZ2V0OmJlZm9yZUFkZCcsIGRyYWdnYWJsZSlcblxuICAgIHRoaXMucHVzaElubmVyRHJhZ2dhYmxlKGRyYWdnYWJsZSlcbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBuZXdEcmFnZ2FibGVzSW5kZXgsIGRyYWdnYWJsZSlcblxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgW25ld0RyYWdnYWJsZXNJbmRleF0sIHRpbWUgfHwgMClcbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMSkge1xuICAgICAgdGhpcy5hZGRSZW1vdmVPbk1vdmUoZHJhZ2dhYmxlKVxuICAgIH1cbiAgfVxuXG4gIHB1c2hJbm5lckRyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpPT09LTEpIHtcbiAgICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxuICAgIH1cbiAgfVxuXG4gIGFkZFJlbW92ZU9uTW92ZShkcmFnZ2FibGUpIHtcbiAgICBkcmFnZ2FibGUub24oJ2RyYWc6bW92ZScsIHRoaXMucmVtb3ZlSGFuZGxlciA9ICgpID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlKGRyYWdnYWJsZSlcbiAgICB9KVxuXG4gICAgdGhpcy5lbWl0KCd0YXJnZXQ6YWRkJywgZHJhZ2dhYmxlKVxuICB9XG5cbiAgcmVtb3ZlKGRyYWdnYWJsZSkge1xuICAgIGRyYWdnYWJsZS51bnN1YnNjcmliZSgnZHJhZzptb3ZlJywgdGhpcy5yZW1vdmVIYW5kbGVyKVxuXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSlcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5zcGxpY2UoaW5kZXgsIDEpXG5cbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBbXSlcblxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgW10pXG4gICAgdGhpcy5lbWl0KCd0YXJnZXQ6cmVtb3ZlJywgZHJhZ2dhYmxlKVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUubW92ZShkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uLCAwLCB0cnVlLCB0cnVlKVxuICAgICAgdGhpcy5lbWl0KCd0YXJnZXQ6cmVtb3ZlJywgZHJhZ2dhYmxlKVxuICAgIH0pXG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMgPSBbXVxuICB9XG5cbiAgZ2V0U29ydGVkRHJhZ2dhYmxlcygpIHtcbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5zbGljZSgpXG4gIH1cblxuICBnZXQgY29udGFpbmVyKCkge1xuICAgIHJldHVybiAodGhpcy5fY29udGFpbmVyID0gdGhpcy5fY29udGFpbmVyIHx8IHRoaXMub3B0aW9ucy5jb250YWluZXIgfHwgdGhpcy5vcHRpb25zLnBhcmVudCB8fCBnZXREZWZhdWx0Q29udGFpbmVyKHRoaXMuZWxlbWVudCkpXG4gIH1cbn1cblxuVGFyZ2V0LmVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKClcblRhcmdldC5lbWl0dGVyLm9uKCd0YXJnZXQ6Y3JlYXRlJywgYWRkVG9EZWZhdWx0U2NvcGUpXG4iLCJpbXBvcnQgcmVtb3ZlSXRlbSBmcm9tICcuL3V0aWxzL3JlbW92ZS1hcnJheS1pdGVtJ1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50RW1pdHRlcidcbmltcG9ydCBEcmFnZ2FibGUgZnJvbSAnLi9kcmFnZ2FibGUnXG5pbXBvcnQgVGFyZ2V0IGZyb20gJy4vdGFyZ2V0J1xuXG5jb25zdCBzY29wZXMgPSBbXVxuXG5jbGFzcyBTY29wZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKGRyYWdnYWJsZXMsIHRhcmdldHMsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcihvcHRpb25zKVxuICAgIHNjb3Blcy5mb3JFYWNoKChzY29wZSkgPT4ge1xuICAgICAgaWYgKGRyYWdnYWJsZXMpIHtcbiAgICAgICAgZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgICAgICByZW1vdmVJdGVtKHNjb3BlLmRyYWdnYWJsZXMsIGRyYWdnYWJsZSlcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgaWYgKHRhcmdldHMpIHtcbiAgICAgICAgdGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHtcbiAgICAgICAgICByZW1vdmVJdGVtKHNjb3BlLnRhcmdldHMsIHRhcmdldClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gZHJhZ2dhYmxlcyB8fCBbXVxuICAgIHRoaXMudGFyZ2V0cyA9IHRhcmdldHMgfHwgW11cbiAgICBzY29wZXMucHVzaCh0aGlzKVxuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgIHRpbWVFbmQ6IChvcHRpb25zLnRpbWVFbmQpIHx8IDQwMFxuICAgIH1cblxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5kcmFnRW5kQWN0aW9uID0gKCkgPT4gdGhpcy5vbkVuZChkcmFnZ2FibGUpXG4gICAgfSlcbiAgfVxuXG4gIGFkZERyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMucHVzaChkcmFnZ2FibGUpXG4gICAgZHJhZ2dhYmxlLmRyYWdFbmRBY3Rpb24gPSAoKSA9PiB0aGlzLm9uRW5kKGRyYWdnYWJsZSlcbiAgfVxuXG4gIGFkZFRhcmdldCh0YXJnZXQpIHtcbiAgICB0aGlzLnRhcmdldHMucHVzaCh0YXJnZXQpXG4gIH1cblxuICBvbkVuZChkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBzaG90VGFyZ2V0cyA9IHRoaXMudGFyZ2V0cy5maWx0ZXIoKHRhcmdldCkgPT4ge1xuICAgICAgcmV0dXJuIHRhcmdldC5kcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTFcbiAgICB9KS5maWx0ZXIoKHRhcmdldCkgPT4ge1xuICAgICAgcmV0dXJuIHRhcmdldC5jYXRjaERyYWdnYWJsZShkcmFnZ2FibGUpXG4gICAgfSkuc29ydCgoYSwgYikgPT4ge1xuICAgICAgcmV0dXJuIGEuZ2V0UmVjdGFuZ2xlKCkuZ2V0U3F1YXJlKCkgLSBiLmdldFJlY3RhbmdsZSgpLmdldFNxdWFyZSgpXG4gICAgfSlcblxuICAgIGlmIChzaG90VGFyZ2V0cy5sZW5ndGgpIHtcbiAgICAgIHNob3RUYXJnZXRzWzBdLm9uRW5kKGRyYWdnYWJsZSlcbiAgICB9IGVsc2UgaWYgKGRyYWdnYWJsZS50YXJnZXRzLmxlbmd0aCkge1xuICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKGRyYWdnYWJsZS5pbml0aWFsUG9zaXRpb24sIHRoaXMub3B0aW9ucy50aW1lRW5kKVxuICAgIH1cblxuICAgIHRoaXMuZW1pdCgnc2NvcGU6Y2hhbmdlJylcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMudGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHRhcmdldC5yZXNldCgpKVxuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucmVmcmVzaCgpKVxuICAgIHRoaXMudGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHRhcmdldC5yZWZyZXNoKCkpXG4gIH1cblxuICBnZXQgcG9zaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnRhcmdldHMubWFwKCh0YXJnZXQpID0+IHtcbiAgICAgIHJldHVybiB0YXJnZXQuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB0aGlzLmRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpKVxuICAgIH0pXG4gIH1cblxuICBzZXQgcG9zaXRpb25zKHBvc2l0aW9ucykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSAnd3JvbmcgYXJyYXkgbGVuZ3RoJ1xuICAgIGlmIChwb3NpdGlvbnMubGVuZ3RoID09PSB0aGlzLnRhcmdldHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB0YXJnZXQucmVzZXQoKSlcblxuICAgICAgcG9zaXRpb25zLmZvckVhY2goKHRhcmdldEluZGV4ZXMsIGkpID0+IHtcbiAgICAgICAgdGFyZ2V0SW5kZXhlcy5mb3JFYWNoKChpbmRleCkgPT4ge1xuICAgICAgICAgIHRoaXMudGFyZ2V0c1tpXS5hZGQodGhpcy5kcmFnZ2FibGVzW2luZGV4XSlcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG1lc3NhZ2VcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgZGVmYXVsdFNjb3BlID0gbmV3IFNjb3BlKClcblxuZnVuY3Rpb24gc2NvcGUoZm4pIHtcbiAgY29uc3QgY3VycmVudFNjb3BlID0gbmV3IFNjb3BlKClcblxuICBjb25zdCBhZGREcmFnZ2FibGVUb1Njb3BlID0gZnVuY3Rpb24oZHJhZ2dhYmxlKSB7XG4gICAgY3VycmVudFNjb3BlLmFkZERyYWdnYWJsZShkcmFnZ2FibGUpXG4gICAgRHJhZ2dhYmxlLmVtaXR0ZXIuaW50ZXJydXB0KClcbiAgfVxuXG4gIGNvbnN0IGFkZFRhcmdldFRvU2NvcGUgPSBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICBjdXJyZW50U2NvcGUuYWRkVGFyZ2V0KHRhcmdldClcbiAgICBEcmFnZ2FibGUuZW1pdHRlci5pbnRlcnJ1cHQoKVxuICB9XG5cbiAgRHJhZ2dhYmxlLmVtaXR0ZXIucHJlcGVuZE9uKCdkcmFnZ2FibGU6Y3JlYXRlJywgYWRkRHJhZ2dhYmxlVG9TY29wZSlcbiAgVGFyZ2V0LmVtaXR0ZXIucHJlcGVuZE9uKCd0YXJnZXQ6Y3JlYXRlJywgYWRkVGFyZ2V0VG9TY29wZSlcbiAgZm4uY2FsbCgpXG4gIERyYWdnYWJsZS5lbWl0dGVyLnVuc3Vic2NyaWJlKCdkcmFnZ2FibGU6Y3JlYXRlJywgYWRkRHJhZ2dhYmxlVG9TY29wZSlcbiAgVGFyZ2V0LmVtaXR0ZXIudW5zdWJzY3JpYmUoJ3RhcmdldDpjcmVhdGUnLCBhZGRUYXJnZXRUb1Njb3BlKVxuICByZXR1cm4gY3VycmVudFNjb3BlXG59XG5cbmV4cG9ydCB7IHNjb3BlcywgZGVmYXVsdFNjb3BlLCBTY29wZSwgc2NvcGUgfVxuIiwiZnVuY3Rpb24gY2hlY2tTdXBwb3J0UGFzc2l2ZUV2ZW50cygpIHtcbiAgbGV0IHBhc3NpdmVTdXBwb3J0ZWQgPSBmYWxzZVxuXG4gIHRyeSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ3Bhc3NpdmUnLCB7XG4gICAgICBnZXQoKSB7XG4gICAgICAgIHJldHVybiAocGFzc2l2ZVN1cHBvcnRlZCA9IHRydWUpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0ZXN0Jywgb3B0aW9ucywgb3B0aW9ucylcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndGVzdCcsIG9wdGlvbnMsIG9wdGlvbnMpXG4gIH0gY2F0Y2ggKF9lcnIpIHtcbiAgICBwYXNzaXZlU3VwcG9ydGVkID0gZmFsc2VcbiAgfVxuXG4gIHJldHVybiBwYXNzaXZlU3VwcG9ydGVkXG59XG5cbmV4cG9ydCBjb25zdCBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzID0gY2hlY2tTdXBwb3J0UGFzc2l2ZUV2ZW50cygpXG5cbmZ1bmN0aW9uIGV2ZW50T3B0aW9ucyhvcHRpb25zLCBmYWxsYmFjayA9IGZhbHNlKSB7XG4gIHJldHVybiBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzID8gb3B0aW9ucyA6IGZhbGxiYWNrXG59XG5cbmV4cG9ydCB7IGV2ZW50T3B0aW9ucyB9XG5cbmV4cG9ydCBkZWZhdWx0IGlzU3VwcG9ydFBhc3NpdmVFdmVudHNcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRocm90dGxlKGZ1bmMsIHdhaXQpIHtcbiAgbGV0IGxhc3RUaW1lID0gMFxuXG4gIHJldHVybiBmdW5jdGlvbiBleGVjdXRlZEZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzXG4gICAgY29uc3QgYXJncyA9IGFyZ3VtZW50c1xuXG4gICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKVxuICAgIGlmIChub3cgLSBsYXN0VGltZSA+PSB3YWl0KSB7XG4gICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpXG4gICAgICBsYXN0VGltZSA9IG5vd1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IGdldERlZmF1bHRDb250YWluZXIgZnJvbSAnLi91dGlscy9nZXQtZGVmYXVsdC1jb250YWluZXInXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnRFbWl0dGVyJ1xuaW1wb3J0IGdldFN0eWxlUHJvcGVydHkgZnJvbSAnZGVzYW5kcm8tZ2V0LXN0eWxlLXByb3BlcnR5J1xuaW1wb3J0IHsgQm91bmRUb0VsZW1lbnQgfSBmcm9tICcuL2JvdW5kaW5nJ1xuaW1wb3J0IFBvaW50IGZyb20gJy4vZ2VvbWV0cnkvcG9pbnQnXG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gJy4vZ2VvbWV0cnkvcmVjdGFuZ2xlJ1xuaW1wb3J0IHsgZGVmYXVsdFNjb3BlIH0gZnJvbSAnLi9zY29wZSdcbmltcG9ydCBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzIGZyb20gJy4vdXRpbHMvaXMtc3VwcG9ydC1wYXNzaXZlLWV2ZW50cydcbmltcG9ydCB0aHJvdHRsZSBmcm9tICcuL3V0aWxzL3Rocm90dGxlJ1xuXG5jb25zdCB0aHJvdHRsZWREcmFnT3ZlciA9IChjYWxsYmFjaywgZHVyYXRpb24pID0+IHtcbiAgY29uc3QgdGhyb3R0bGVkQ2FsbGJhY2sgPSB0aHJvdHRsZSgoZXZlbnQpID0+IGNhbGxiYWNrKGV2ZW50KSwgZHVyYXRpb24pXG4gIHJldHVybiBldmVudCA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIHRocm90dGxlZENhbGxiYWNrKGV2ZW50KVxuICB9XG59XG5cbmNvbnN0IHBhc3NpdmVGYWxzZSA9IGlzU3VwcG9ydFBhc3NpdmVFdmVudHMgPyB7IHBhc3NpdmU6IGZhbHNlIH0gOiBmYWxzZVxuXG5jb25zdCBpc1RvdWNoID0gJ29udG91Y2hzdGFydCcgaW4gd2luZG93XG5jb25zdCBtb3VzZUV2ZW50cyA9IHtcbiAgc3RhcnQ6ICdtb3VzZWRvd24nLFxuICBtb3ZlOiAnbW91c2Vtb3ZlJyxcbiAgZW5kOiAnbW91c2V1cCdcbn1cbmNvbnN0IHRvdWNoRXZlbnRzID0ge1xuICBzdGFydDogJ3RvdWNoc3RhcnQnLFxuICBtb3ZlOiAndG91Y2htb3ZlJyxcbiAgZW5kOiAndG91Y2hlbmQnXG59XG5jb25zdCBkcmFnZ2FibGVzID0gW11cbmNvbnN0IHRyYW5zZm9ybVByb3BlcnR5ID0gZ2V0U3R5bGVQcm9wZXJ0eSgndHJhbnNmb3JtJylcbmNvbnN0IHRyYW5zaXRpb25Qcm9wZXJ0eSA9IGdldFN0eWxlUHJvcGVydHkoJ3RyYW5zaXRpb24nKVxuXG5mdW5jdGlvbiBnZXRUb3VjaEJ5SUQoZWxlbWVudCwgdG91Y2hJZCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnQuY2hhbmdlZFRvdWNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZWxlbWVudC5jaGFuZ2VkVG91Y2hlc1tpXS5pZGVudGlmaWVyID09PSB0b3VjaElkKSB7XG4gICAgICByZXR1cm4gZWxlbWVudC5jaGFuZ2VkVG91Y2hlc1tpXVxuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cblxuZnVuY3Rpb24gcHJldmVudERvdWJsZUluaXQoZHJhZ2dhYmxlKSB7XG4gIGNvbnN0IG1lc3NhZ2UgPSBcImZvciB0aGlzIGVsZW1lbnQgRHJhZ2VlLkRyYWdnYWJsZSBpcyBhbHJlYWR5IGV4aXN0LCBkb24ndCBjcmVhdGUgaXQgdHdpY2UgXCJcbiAgaWYgKGRyYWdnYWJsZXMuc29tZSgoZXhpc3RpbmcpID0+IGRyYWdnYWJsZS5lbGVtZW50ID09PSBleGlzdGluZy5lbGVtZW50KSkge1xuICAgIHRocm93IG1lc3NhZ2VcbiAgfVxuICBkcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxufVxuXG5mdW5jdGlvbiBhZGRUb0RlZmF1bHRTY29wZShkcmFnZ2FibGUpIHtcbiAgZGVmYXVsdFNjb3BlLmFkZERyYWdnYWJsZShkcmFnZ2FibGUpXG59XG5cbmZ1bmN0aW9uIGNvcHlTdHlsZXMoc291cmNlLCBkZXN0aW5hdGlvbikge1xuICBjb25zdCBjcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHNvdXJjZSlcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qga2V5ID0gY3NbaV1cbiAgICBpZiAoKGtleS5pbmRleE9mKCd0cmFuc2l0aW9uJykgPCAwKSAmJiAoa2V5LmluZGV4T2YoJ3RyYW5zZm9ybScpIDwgMCkpIHtcbiAgICAgIGRlc3RpbmF0aW9uLnN0eWxlW2tleV0gPSBjc1trZXldXG4gICAgfVxuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzb3VyY2UuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICBjb3B5U3R5bGVzKHNvdXJjZS5jaGlsZHJlbltpXSwgZGVzdGluYXRpb24uY2hpbGRyZW5baV0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhZ2dhYmxlIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgb3B0aW9ucz17fSkge1xuICAgIHN1cGVyKG9wdGlvbnMpXG4gICAgdGhpcy50YXJnZXRzID0gW11cbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIHByZXZlbnREb3VibGVJbml0KHRoaXMpXG4gICAgRHJhZ2dhYmxlLmVtaXR0ZXIuZW1pdCgnZHJhZ2dhYmxlOmNyZWF0ZScsIHRoaXMpXG4gICAgdGhpcy5fZW5hYmxlID0gdHJ1ZVxuICAgIHRoaXMuc3RhcnRCb3VuZGluZygpXG4gICAgdGhpcy5zdGFydFBvc2l0aW9uaW5nKClcbiAgICB0aGlzLnN0YXJ0TGlzdGVuaW5nKClcbiAgfVxuXG4gIHN0YXJ0Qm91bmRpbmcoKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5ib3VuZCkge1xuICAgICAgdGhpcy5ib3VuZGluZyA9IHsgYm91bmQ6IHRoaXMub3B0aW9ucy5ib3VuZCB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYm91bmRpbmcgPSBuZXcgQm91bmRUb0VsZW1lbnQodGhpcy5jb250YWluZXIsIHRoaXMuY29udGFpbmVyKVxuICAgIH1cbiAgfVxuXG4gIHN0YXJ0UG9zaXRpb25pbmcoKSB7XG4gICAgdGhpcy5fc2V0RGVmYXVsdFRyYW5zaXRpb24oKVxuICAgIHRoaXMub2Zmc2V0ID0gUG9pbnQuZWxlbWVudE9mZnNldCh0aGlzLmVsZW1lbnQsIHRoaXMuY29udGFpbmVyLCB0cnVlKVxuICAgIHRoaXMucGlubmVkUG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICAgIHRoaXMuaW5pdGlhbFBvc2l0aW9uID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uIHx8IHRoaXMub2Zmc2V0XG5cbiAgICB0aGlzLnBpblBvc2l0aW9uKHRoaXMuaW5pdGlhbFBvc2l0aW9uKVxuXG4gICAgaWYgKHRoaXMuYm91bmRpbmcucmVmcmVzaCkge1xuICAgICAgdGhpcy5ib3VuZGluZy5yZWZyZXNoKClcbiAgICB9XG4gIH1cblxuICBzdGFydExpc3RlbmluZygpIHtcbiAgICB0aGlzLl9kcmFnU3RhcnQgPSAoZXZlbnQpID0+IHRoaXMuZHJhZ1N0YXJ0KGV2ZW50KVxuICAgIHRoaXMuX2RyYWdNb3ZlID0gKGV2ZW50KSA9PiB0aGlzLmRyYWdNb3ZlKGV2ZW50KVxuICAgIHRoaXMuX2RyYWdFbmQgPSAoZXZlbnQpID0+IHRoaXMuZHJhZ0VuZChldmVudClcbiAgICB0aGlzLl9uYXRpdmVEcmFnU3RhcnQgPSAoZXZlbnQpID0+IHRoaXMubmF0aXZlRHJhZ1N0YXJ0KGV2ZW50KVxuICAgIHRoaXMuX25hdGl2ZURyYWdPdmVyID0gdGhyb3R0bGVkRHJhZ092ZXIoKGV2ZW50KSA9PiB0aGlzLm5hdGl2ZURyYWdPdmVyKGV2ZW50KSwgdGhpcy5kcmFnT3ZlclRocm90dGxlRHVyYXRpb24pXG4gICAgdGhpcy5fbmF0aXZlRHJhZ0VuZCA9IChldmVudCkgPT4gdGhpcy5uYXRpdmVEcmFnRW5kKGV2ZW50KVxuICAgIHRoaXMuX25hdGl2ZURyb3AgPSAoZXZlbnQpID0+IHRoaXMubmF0aXZlRHJvcChldmVudClcbiAgICB0aGlzLl9zY3JvbGwgPSAoZXZlbnQpID0+IHRoaXMub25TY3JvbGwoZXZlbnQpXG5cbiAgICB0aGlzLmhhbmRsZXIuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0LCBwYXNzaXZlRmFsc2UpXG4gICAgdGhpcy5oYW5kbGVyLmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydCwgcGFzc2l2ZUZhbHNlKVxuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCB0aGlzLl9uYXRpdmVEcmFnU3RhcnQpXG4gIH1cblxuICBnZXRTaXplKCkge1xuICAgIHJldHVybiBQb2ludC5lbGVtZW50U2l6ZSh0aGlzLmVsZW1lbnQsIHRoaXMub3B0aW9ucy5pc0NvbnRlbnRCb3hTaXplKVxuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMub2Zmc2V0LmFkZCh0aGlzLl90cmFuc2Zvcm1Qb3NpdGlvbiB8fCBuZXcgUG9pbnQoMCwgMCkpXG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25cbiAgfVxuXG4gIGdldENlbnRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi5hZGQodGhpcy5nZXRTaXplKCkubXVsdCgwLjUpKVxuICB9XG5cbiAgX3NldERlZmF1bHRUcmFuc2l0aW9uICgpIHtcbiAgICBpZiAoIXRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNpdGlvblByb3BlcnR5XSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZWxlbWVudClbdHJhbnNpdGlvblByb3BlcnR5XVxuICAgIH1cbiAgfVxuXG4gIF9zZXRUcmFuc2l0aW9uKHRpbWUpIHtcbiAgICBsZXQgdHJhbnNpdGlvbiA9IHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldXG4gICAgY29uc3QgdHJhbnNpdGlvbkNzcyA9IGB0cmFuc2Zvcm0gJHt0aW1lfW1zYFxuXG4gICAgaWYgKCEvdHJhbnNmb3JtIFxcZCptP3MvLnRlc3QodHJhbnNpdGlvbikpIHtcbiAgICAgIGlmICh0cmFuc2l0aW9uKSB7XG4gICAgICAgIHRyYW5zaXRpb24gKz0gYCwgJHt0cmFuc2l0aW9uQ3NzfWBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyYW5zaXRpb24gPSB0cmFuc2l0aW9uQ3NzXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyYW5zaXRpb24gPSB0cmFuc2l0aW9uLnJlcGxhY2UoL3RyYW5zZm9ybSBcXGQqbT9zL2csIHRyYW5zaXRpb25Dc3MpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldICE9PSB0cmFuc2l0aW9uKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNpdGlvblByb3BlcnR5XSA9IHRyYW5zaXRpb25cbiAgICB9XG4gIH1cblxuICBfc2V0VHJhbnNsYXRlKHBvaW50KSB7XG4gICAgdGhpcy5fdHJhbnNmb3JtUG9zaXRpb24gPSBwb2ludFxuICAgIGNvbnN0IHRyYW5zbGF0ZUNzcyA9IGB0cmFuc2xhdGUzZCgke3BvaW50Lnh9cHgsICR7cG9pbnQueX1weCwgMHB4KWBcblxuICAgIGxldCB0cmFuc2Zvcm0gPSB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcGVydHldXG5cbiAgICBpZiAodGhpcy5zaG91bGRSZW1vdmVaZXJvVHJhbnNsYXRlICYmIHBvaW50LnggPT09IDAgJiYgcG9pbnQueSA9PT0gMCkge1xuICAgICAgdHJhbnNmb3JtID0gdHJhbnNmb3JtLnJlcGxhY2UoL3RyYW5zbGF0ZTNkXFwoW14pXStcXCkvLCAnJylcbiAgICB9IGVsc2UgaWYgKCEvdHJhbnNsYXRlM2RcXChbXildK1xcKS8udGVzdCh0cmFuc2Zvcm0pKSB7XG4gICAgICBpZiAodHJhbnNmb3JtKSB7XG4gICAgICAgIHRyYW5zZm9ybSArPSAnICdcbiAgICAgIH1cbiAgICAgIHRyYW5zZm9ybSArPSB0cmFuc2xhdGVDc3NcbiAgICB9IGVsc2Uge1xuICAgICAgdHJhbnNmb3JtID0gdHJhbnNmb3JtLnJlcGxhY2UoL3RyYW5zbGF0ZTNkXFwoW14pXStcXCkvLCB0cmFuc2xhdGVDc3MpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wZXJ0eV0gIT09IHRyYW5zZm9ybSkge1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BlcnR5XSA9IHRyYW5zZm9ybVxuICAgIH1cbiAgfVxuXG4gIG1vdmUocG9pbnQsIHRpbWU9MCwgaXNTaWxlbnQ9ZmFsc2UpIHtcbiAgICBwb2ludCA9IHBvaW50LmNsb25lKClcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9pbnRcblxuICAgIHRoaXMuX3NldFRyYW5zaXRpb24odGltZSlcbiAgICB0aGlzLl9zZXRUcmFuc2xhdGUocG9pbnQuc3ViKHRoaXMub2Zmc2V0KSlcblxuICAgIGlmICghaXNTaWxlbnQpIHtcbiAgICAgIHRoaXMuZW1pdCgnZHJhZzptb3ZlJylcbiAgICB9XG4gIH1cblxuICBwaW5Qb3NpdGlvbihwb2ludCwgdGltZT0wLCBzaWxlbnQ9dHJ1ZSkge1xuICAgIHRoaXMucGlubmVkUG9zaXRpb24gPSBwb2ludC5jbG9uZSgpXG4gICAgdGhpcy5tb3ZlKHRoaXMucGlubmVkUG9zaXRpb24sIHRpbWUsIHNpbGVudClcbiAgfVxuXG4gIHJlc2V0UG9zaXRpb25Ub0luaXRpYWwgKCkge1xuICAgIHRoaXMucGluUG9zaXRpb24odGhpcy5pbml0aWFsUG9zaXRpb24pXG4gIH1cblxuICByZWZyZXNoUG9zaXRpb24gKCkge1xuICAgIHRoaXMuc2V0UG9zaXRpb24odGhpcy5nZXRQb3NpdGlvbigpKVxuICB9XG5cbiAgc2V0UG9zaXRpb24ocG9pbnQpIHtcbiAgICBwb2ludCA9IHBvaW50LmNsb25lKClcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9pbnRcbiAgICB0aGlzLl9zZXRUcmFuc2l0aW9uKDApXG4gICAgdGhpcy5fc2V0VHJhbnNsYXRlKHBvaW50LnN1Yih0aGlzLm9mZnNldCkpXG4gIH1cblxuICBkZXRlcm1pbmVEaXJlY3Rpb24ocG9pbnQpIHtcbiAgICB0aGlzLl9wcmV2aW91c0RpcmVjdGlvblBvc2l0aW9uIHx8PSB0aGlzLl9zdGFydFBvc2l0aW9uXG5cbiAgICB0aGlzLmxlZnREaXJlY3Rpb24gPSAodGhpcy5fcHJldmlvdXNEaXJlY3Rpb25Qb3NpdGlvbi54IDwgcG9pbnQueClcbiAgICB0aGlzLnJpZ2h0RGlyZWN0aW9uID0gKHRoaXMuX3ByZXZpb3VzRGlyZWN0aW9uUG9zaXRpb24ueCA+IHBvaW50LngpXG4gICAgdGhpcy51cERpcmVjdGlvbiA9ICh0aGlzLl9wcmV2aW91c0RpcmVjdGlvblBvc2l0aW9uLnkgPiBwb2ludC55KVxuICAgIHRoaXMuZG93bkRpcmVjdGlvbiA9ICh0aGlzLl9wcmV2aW91c0RpcmVjdGlvblBvc2l0aW9uLnkgPCBwb2ludC55KVxuXG4gICAgdGhpcy5fcHJldmlvdXNEaXJlY3Rpb25Qb3NpdGlvbiA9IHBvaW50XG4gIH1cblxuICBzZWVtc1Njcm9sbGluZygpIHtcbiAgICByZXR1cm4gKCtuZXcgRGF0ZSgpIC0gdGhpcy5fc3RhcnRUb3VjaFRpbWVzdGFtcCkgPCB0aGlzLnRvdWNoRHJhZ2dpbmdUaHJlc2hvbGRcbiAgfVxuXG4gIHNob3VsZFVzZU5hdGl2ZURyYWdBbmREcm9wKCkge1xuICAgIGlmICh0aGlzLmlzVG91Y2hFdmVudCkge1xuICAgICAgcmV0dXJuIHRoaXMubmF0aXZlRHJhZ0FuZERyb3AgJiYgdGhpcy5lbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3BPblRvdWNoXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLm5hdGl2ZURyYWdBbmREcm9wXG4gICAgfVxuICB9XG5cbiAgZHJhZ1N0YXJ0KGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLl9lbmFibGUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuaXNUb3VjaEV2ZW50ID0gKGlzVG91Y2ggJiYgKGV2ZW50IGluc3RhbmNlb2Ygd2luZG93LlRvdWNoRXZlbnQpKVxuXG4gICAgdGhpcy50b3VjaFBvaW50ID0gdGhpcy5fc3RhcnRUb3VjaFBvaW50ID0gbmV3IFBvaW50KFxuICAgICAgdGhpcy5pc1RvdWNoRXZlbnQgPyBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCA6IGV2ZW50LmNsaWVudFgsXG4gICAgICB0aGlzLmlzVG91Y2hFdmVudCA/IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZIDogZXZlbnQuY2xpZW50WVxuICAgIClcblxuICAgIHRoaXMuX3N0YXJ0UG9zaXRpb24gPSB0aGlzLmdldFBvc2l0aW9uKClcbiAgICBpZiAodGhpcy5pc1RvdWNoRXZlbnQpIHtcbiAgICAgIHRoaXMuX3RvdWNoSWQgPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5pZGVudGlmaWVyXG4gICAgICB0aGlzLl9zdGFydFRvdWNoVGltZXN0YW1wID0gK25ldyBEYXRlKClcbiAgICB9XG5cbiAgICB0aGlzLl9zdGFydFNjcm9sbFBvaW50ID0gbmV3IFBvaW50KHdpbmRvdy5zY3JvbGxYLCB3aW5kb3cuc2Nyb2xsWSlcblxuICAgIGlmIChldmVudC50YXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElucHV0RWxlbWVudCB8fFxuICAgICAgICAgIGV2ZW50LnRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSW5wdXRFbGVtZW50KSB7XG4gICAgICBldmVudC50YXJnZXQuZm9jdXMoKVxuICAgIH1cblxuICAgIGlmICh0aGlzLnNob3VsZFVzZU5hdGl2ZURyYWdBbmREcm9wKCkpIHtcbiAgICAgIGlmICh0aGlzLmlzVG91Y2hFdmVudCAmJiB0aGlzLmVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcE9uVG91Y2gpIHtcbiAgICAgICAgY29uc3QgZW11bGF0ZU9uRmlyc3RNb3ZlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuc2VlbXNTY3JvbGxpbmcoKSkge1xuICAgICAgICAgICAgdGhpcy5jYW5jZWxEcmFnZ2luZygpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wKGV2ZW50KVxuICAgICAgICAgIH1cbiAgICAgICAgICBjYW5jZWxFbXVsYXRpb24oKVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNhbmNlbEVtdWxhdGlvbiA9ICgpID0+IHtcbiAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIGVtdWxhdGVPbkZpcnN0TW92ZSlcbiAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgY2FuY2VsRW11bGF0aW9uKVxuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCBlbXVsYXRlT25GaXJzdE1vdmUsIHBhc3NpdmVGYWxzZSlcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIGNhbmNlbEVtdWxhdGlvbiwgcGFzc2l2ZUZhbHNlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmRyYWdnYWJsZSA9IHRydWVcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX25hdGl2ZURyYWdFbmQsIHBhc3NpdmVGYWxzZSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSwgcGFzc2l2ZUZhbHNlKVxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSwgcGFzc2l2ZUZhbHNlKVxuXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZCwgcGFzc2l2ZUZhbHNlKVxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQsIHBhc3NpdmVGYWxzZSlcbiAgICB9XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fc2Nyb2xsKVxuXG4gICAgdGhpcy5lbWl0KCdkcmFnOnN0YXJ0JylcbiAgfVxuXG4gIGRyYWdNb3ZlKGV2ZW50KSB7XG4gICAgbGV0IHRvdWNoXG5cbiAgICB0aGlzLmlzRHJhZ2dpbmcgPSB0cnVlXG5cbiAgICB0aGlzLmlzVG91Y2hFdmVudCA9IChpc1RvdWNoICYmIChldmVudCBpbnN0YW5jZW9mIHdpbmRvdy5Ub3VjaEV2ZW50KSlcbiAgICBpZiAodGhpcy5pc1RvdWNoRXZlbnQpIHtcbiAgICAgIHRvdWNoID0gZ2V0VG91Y2hCeUlEKGV2ZW50LCB0aGlzLl90b3VjaElkKVxuXG4gICAgICBpZiAoIXRvdWNoKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5zZWVtc1Njcm9sbGluZygpKSB7XG4gICAgICAgIHRoaXMuY2FuY2VsRHJhZ2dpbmcoKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB0aGlzLnRvdWNoUG9pbnQgPSBuZXcgUG9pbnQoXG4gICAgICB0aGlzLmlzVG91Y2hFdmVudCA/IHRvdWNoLnBhZ2VYIDogZXZlbnQuY2xpZW50WCxcbiAgICAgIHRoaXMuaXNUb3VjaEV2ZW50ID8gdG91Y2gucGFnZVkgOiBldmVudC5jbGllbnRZXG4gICAgKVxuXG4gICAgbGV0IHBvaW50ID0gdGhpcy5fc3RhcnRQb3NpdGlvbi5hZGQodGhpcy50b3VjaFBvaW50LnN1Yih0aGlzLl9zdGFydFRvdWNoUG9pbnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMuc2Nyb2xsUG9pbnQuc3ViKHRoaXMuX3N0YXJ0U2Nyb2xsUG9pbnQpKVxuXG4gICAgcG9pbnQgPSB0aGlzLmJvdW5kaW5nLmJvdW5kKHBvaW50LCB0aGlzLmdldFNpemUoKSlcbiAgICB0aGlzLmRldGVybWluZURpcmVjdGlvbihwb2ludClcbiAgICB0aGlzLm1vdmUocG9pbnQpXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RyYWdlZS1hY3RpdmUnKVxuICB9XG5cbiAgZHJhZ0VuZChldmVudCkge1xuICAgIHRoaXMuaXNUb3VjaEV2ZW50ID0gKGlzVG91Y2ggJiYgKGV2ZW50IGluc3RhbmNlb2Ygd2luZG93LlRvdWNoRXZlbnQpKVxuXG4gICAgaWYgKHRoaXMuaXNUb3VjaEV2ZW50ICYmICFnZXRUb3VjaEJ5SUQoZXZlbnQsIHRoaXMuX3RvdWNoSWQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc0RyYWdnaW5nKSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIH1cblxuICAgIHRoaXMuZHJhZ0VuZEFjdGlvbigpXG4gICAgdGhpcy5lbWl0KCdkcmFnOmVuZCcpXG4gICAgdGhpcy5jYW5jZWxEcmFnZ2luZygpXG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZWUtYWN0aXZlJykpXG4gIH1cblxuICBvblNjcm9sbChfZXZlbnQpIHtcbiAgICBsZXQgcG9pbnQgPSB0aGlzLl9zdGFydFBvc2l0aW9uLmFkZCh0aGlzLnRvdWNoUG9pbnQuc3ViKHRoaXMuX3N0YXJ0VG91Y2hQb2ludCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy5zY3JvbGxQb2ludC5zdWIodGhpcy5fc3RhcnRTY3JvbGxQb2ludCkpXG5cbiAgICBwb2ludCA9IHRoaXMuYm91bmRpbmcuYm91bmQocG9pbnQsIHRoaXMuZ2V0U2l6ZSgpKVxuICAgIGlmICghdGhpcy5uYXRpdmVEcmFnQW5kRHJvcCkge1xuICAgICAgdGhpcy5kZXRlcm1pbmVEaXJlY3Rpb24ocG9pbnQpXG4gICAgICB0aGlzLm1vdmUocG9pbnQpXG4gICAgfVxuICB9XG5cbiAgbmF0aXZlRHJhZ1N0YXJ0KGV2ZW50KSB7XG4gICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQnLCAnRmlyZUZveCBmaXgnKVxuICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gJ21vdmUnXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCB0aGlzLl9uYXRpdmVEcmFnT3ZlcilcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgdGhpcy5fbmF0aXZlRHJvcClcbiAgfVxuXG4gIG5hdGl2ZURyYWdPdmVyKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gJ21vdmUnXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RyYWdlZS1wbGFjZWhvbGRlcicpXG4gICAgaWYgKGV2ZW50LmNsaWVudFggPT09IDAgJiYgZXZlbnQuY2xpZW50WSA9PT0gMCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy50b3VjaFBvaW50ID0gbmV3IFBvaW50KGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpXG4gICAgbGV0IHBvaW50ID0gdGhpcy5fc3RhcnRQb3NpdGlvbi5hZGQodGhpcy50b3VjaFBvaW50LnN1Yih0aGlzLl9zdGFydFRvdWNoUG9pbnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMuc2Nyb2xsUG9pbnQuc3ViKHRoaXMuX3N0YXJ0U2Nyb2xsUG9pbnQpKVxuICAgIHBvaW50ID0gdGhpcy5ib3VuZGluZy5ib3VuZChwb2ludCwgdGhpcy5nZXRTaXplKCkpXG4gICAgdGhpcy5kZXRlcm1pbmVEaXJlY3Rpb24ocG9pbnQpXG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvaW50XG4gICAgdGhpcy5lbWl0KCdkcmFnOm1vdmUnKVxuICB9XG5cbiAgbmF0aXZlRHJhZ0VuZChfZXZlbnQpIHtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2VlLXBsYWNlaG9sZGVyJylcbiAgICB0aGlzLmRyYWdFbmRBY3Rpb24oKVxuICAgIHRoaXMuZW1pdCgnZHJhZzplbmQnKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgdGhpcy5fbmF0aXZlRHJhZ092ZXIpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIHRoaXMuX25hdGl2ZURyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX25hdGl2ZURyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJvcCcsIHRoaXMuX25hdGl2ZURyb3ApXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX3Njcm9sbClcbiAgICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZVxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2RyYWdnYWJsZScpXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdlZS1hY3RpdmUnKVxuICB9XG5cbiAgbmF0aXZlRHJvcChldmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgY2FuY2VsRHJhZ2dpbmcgKCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcblxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX25hdGl2ZURyYWdFbmQpXG5cbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fc2Nyb2xsKVxuXG4gICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2VcbiAgICB0aGlzLl9wcmV2aW91c0RpcmVjdGlvblBvc2l0aW9uID0gbnVsbFxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2RyYWdnYWJsZScpXG4gIH1cblxuICBjb3B5U3R5bGVzKHNvdXJjZSwgZGVzdGluYXRpb24pIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmNvcHlTdHlsZXMpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5jb3B5U3R5bGVzKHNvdXJjZSwgZGVzdGluYXRpb24pXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvcHlTdHlsZXMoc291cmNlLCBkZXN0aW5hdGlvbilcbiAgICB9XG4gIH1cblxuICBlbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3AoZXZlbnQpIHtcbiAgICBjb25zdCBjb250YWluZXJSZWN0ID0gdGhpcy5jb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICBjb25zdCBjbG9uZWRFbGVtZW50ID0gdGhpcy5lbGVtZW50LmNsb25lTm9kZSh0cnVlKVxuICAgIGNsb25lZEVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcGVydHldID0gJydcbiAgICB0aGlzLmNvcHlTdHlsZXModGhpcy5lbGVtZW50LCBjbG9uZWRFbGVtZW50KVxuICAgIGNsb25lZEVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjbG9uZWRFbGVtZW50KVxuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkcmFnZWUtcGxhY2Vob2xkZXInKVxuXG4gICAgY29uc3QgZW11bGF0aW9uRHJhZ2dhYmxlID0gbmV3IERyYWdnYWJsZShjbG9uZWRFbGVtZW50LCB7XG4gICAgICBjb250YWluZXI6IGRvY3VtZW50LmJvZHksXG4gICAgICB0b3VjaERyYWdnaW5nVGhyZXNob2xkOiAwLFxuICAgICAgYm91bmQocG9pbnQpIHtcbiAgICAgICAgcmV0dXJuIHBvaW50XG4gICAgICB9LFxuICAgICAgb246IHtcbiAgICAgICAgJ2RyYWc6bW92ZSc6ICgpID0+IHtcbiAgICAgICAgICBjb25zdCBjb250YWluZXJSZWN0UG9pbnQgPSBuZXcgUG9pbnQoY29udGFpbmVyUmVjdC5sZWZ0LCBjb250YWluZXJSZWN0LnRvcClcbiAgICAgICAgICB0aGlzLnBvc2l0aW9uID0gZW11bGF0aW9uRHJhZ2dhYmxlLnBvc2l0aW9uLnN1Yihjb250YWluZXJSZWN0UG9pbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdWIodGhpcy5fc3RhcnRTY3JvbGxQb2ludClcblxuICAgICAgICAgIHRoaXMuZGV0ZXJtaW5lRGlyZWN0aW9uKHRoaXMucG9zaXRpb24pXG4gICAgICAgICAgdGhpcy5lbWl0KCdkcmFnOm1vdmUnKVxuICAgICAgICB9LFxuICAgICAgICAnZHJhZzplbmQnOiAoKSA9PiB7XG4gICAgICAgICAgZW11bGF0aW9uRHJhZ2dhYmxlLmRlc3Ryb3koKVxuICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoY2xvbmVkRWxlbWVudClcbiAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2VlLXBsYWNlaG9sZGVyJylcbiAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2VlLWFjdGl2ZScpXG5cbiAgICAgICAgICB0aGlzLmVtaXQoJ2RyYWc6ZW5kJylcbiAgICAgICAgICB0aGlzLmRyYWdFbmRBY3Rpb24oKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IGNvbnRhaW5lclJlY3RQb2ludCA9IG5ldyBQb2ludChjb250YWluZXJSZWN0LmxlZnQsIGNvbnRhaW5lclJlY3QudG9wKVxuICAgIGVtdWxhdGlvbkRyYWdnYWJsZS5fc3RhcnRTY3JvbGxQb2ludCA9IHRoaXMuX3N0YXJ0U2Nyb2xsUG9pbnRcblxuICAgIGVtdWxhdGlvbkRyYWdnYWJsZS5tb3ZlKFxuICAgICAgdGhpcy5waW5uZWRQb3NpdGlvbi5hZGQoY29udGFpbmVyUmVjdFBvaW50KS5hZGQobmV3IFBvaW50KHdpbmRvdy5zY3JvbGxYLCB3aW5kb3cuc2Nyb2xsWSkpXG4gICAgKVxuXG4gICAgZW11bGF0aW9uRHJhZ2dhYmxlLmRyYWdTdGFydChldmVudClcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBkcmFnRW5kQWN0aW9uKCkge1xuICAgIHRoaXMucGluUG9zaXRpb24odGhpcy5wb3NpdGlvbilcbiAgfVxuXG4gIGdldFJlY3RhbmdsZSgpIHtcbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZSh0aGlzLnBvc2l0aW9uLCB0aGlzLmdldFNpemUoKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgaWYgKHRoaXMuYm91bmRpbmcucmVmcmVzaCkge1xuICAgICAgdGhpcy5ib3VuZGluZy5yZWZyZXNoKClcbiAgICB9XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuaGFuZGxlci5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQpXG4gICAgdGhpcy5oYW5kbGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydClcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgdGhpcy5fbmF0aXZlRHJhZ1N0YXJ0KVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIHRoaXMuX25hdGl2ZURyYWdPdmVyKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzLl9uYXRpdmVEcm9wKVxuICAgIHRoaXMucmVzZXRFbWl0dGVyKClcblxuICAgIGNvbnN0IGluZGV4ID0gZHJhZ2dhYmxlcy5pbmRleE9mKHRoaXMpXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIGRyYWdnYWJsZXMuc3BsaWNlKGluZGV4LCAxKVxuICAgIH1cbiAgfVxuXG4gIGdldCBjb250YWluZXIoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9jb250YWluZXIgPSB0aGlzLl9jb250YWluZXIgfHwgdGhpcy5vcHRpb25zLmNvbnRhaW5lciB8fCB0aGlzLm9wdGlvbnMucGFyZW50IHx8IGdldERlZmF1bHRDb250YWluZXIodGhpcy5lbGVtZW50KSlcbiAgfVxuXG4gIGdldCBoYW5kbGVyKCkge1xuICAgIGlmICghdGhpcy5faGFuZGxlcikge1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuaGFuZGxlciA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhpcy5faGFuZGxlciA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKHRoaXMub3B0aW9ucy5oYW5kbGVyKSB8fCB0aGlzLmVsZW1lbnRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZXIgPSB0aGlzLm9wdGlvbnMuaGFuZGxlciB8fCB0aGlzLmVsZW1lbnRcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5faGFuZGxlclxuICB9XG5cbiAgZ2V0IG5hdGl2ZURyYWdBbmREcm9wKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMubmF0aXZlRHJhZ0FuZERyb3AgfHwgZmFsc2VcbiAgfVxuXG4gIGdldCBlbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3BPblRvdWNoKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wT25Ub3VjaCB8fCBmYWxzZVxuICB9XG5cbiAgZ2V0IHNob3VsZFJlbW92ZVplcm9UcmFuc2xhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5zaG91bGRSZW1vdmVaZXJvVHJhbnNsYXRlIHx8IGZhbHNlXG4gIH1cblxuICBnZXQgdG91Y2hEcmFnZ2luZ1RocmVzaG9sZCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLnRvdWNoRHJhZ2dpbmdUaHJlc2hvbGQgfHwgMFxuICB9XG5cbiAgZ2V0IGRyYWdPdmVyVGhyb3R0bGVEdXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmRyYWdPdmVyVGhyb3R0bGVEdXJhdGlvbiB8fCAxNlxuICB9XG5cbiAgZ2V0IHNjcm9sbFBvaW50KCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQod2luZG93LnNjcm9sbFgsIHdpbmRvdy5zY3JvbGxZKVxuICB9XG5cbiAgZ2V0IGVuYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlXG4gIH1cblxuICBzZXQgZW5hYmxlKGVuYWJsZSkge1xuICAgIGlmIChlbmFibGUpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZWUtZGlzYWJsZScpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkcmFnZWUtZGlzYWJsZScpXG4gICAgfVxuXG4gICAgdGhpcy5fZW5hYmxlID0gZW5hYmxlXG4gIH1cbn1cblxuRHJhZ2dhYmxlLmVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKClcbkRyYWdnYWJsZS5lbWl0dGVyLm9uKCdkcmFnZ2FibGU6Y3JlYXRlJywgYWRkVG9EZWZhdWx0U2NvcGUpXG4iLCJ2YXIgcmVzaXplT2JzZXJ2ZXJzID0gW107XG5leHBvcnQgeyByZXNpemVPYnNlcnZlcnMgfTtcbiIsImltcG9ydCB7IHJlc2l6ZU9ic2VydmVycyB9IGZyb20gJy4uL3V0aWxzL3Jlc2l6ZU9ic2VydmVycyc7XG52YXIgaGFzQWN0aXZlT2JzZXJ2YXRpb25zID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiByZXNpemVPYnNlcnZlcnMuc29tZShmdW5jdGlvbiAocm8pIHsgcmV0dXJuIHJvLmFjdGl2ZVRhcmdldHMubGVuZ3RoID4gMDsgfSk7XG59O1xuZXhwb3J0IHsgaGFzQWN0aXZlT2JzZXJ2YXRpb25zIH07XG4iLCJpbXBvcnQgeyByZXNpemVPYnNlcnZlcnMgfSBmcm9tICcuLi91dGlscy9yZXNpemVPYnNlcnZlcnMnO1xudmFyIGhhc1NraXBwZWRPYnNlcnZhdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHJlc2l6ZU9ic2VydmVycy5zb21lKGZ1bmN0aW9uIChybykgeyByZXR1cm4gcm8uc2tpcHBlZFRhcmdldHMubGVuZ3RoID4gMDsgfSk7XG59O1xuZXhwb3J0IHsgaGFzU2tpcHBlZE9ic2VydmF0aW9ucyB9O1xuIiwidmFyIG1zZyA9ICdSZXNpemVPYnNlcnZlciBsb29wIGNvbXBsZXRlZCB3aXRoIHVuZGVsaXZlcmVkIG5vdGlmaWNhdGlvbnMuJztcbnZhciBkZWxpdmVyUmVzaXplTG9vcEVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBldmVudDtcbiAgICBpZiAodHlwZW9mIEVycm9yRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZXZlbnQgPSBuZXcgRXJyb3JFdmVudCgnZXJyb3InLCB7XG4gICAgICAgICAgICBtZXNzYWdlOiBtc2dcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpO1xuICAgICAgICBldmVudC5pbml0RXZlbnQoJ2Vycm9yJywgZmFsc2UsIGZhbHNlKTtcbiAgICAgICAgZXZlbnQubWVzc2FnZSA9IG1zZztcbiAgICB9XG4gICAgd2luZG93LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xufTtcbmV4cG9ydCB7IGRlbGl2ZXJSZXNpemVMb29wRXJyb3IgfTtcbiIsInZhciBSZXNpemVPYnNlcnZlckJveE9wdGlvbnM7XG4oZnVuY3Rpb24gKFJlc2l6ZU9ic2VydmVyQm94T3B0aW9ucykge1xuICAgIFJlc2l6ZU9ic2VydmVyQm94T3B0aW9uc1tcIkJPUkRFUl9CT1hcIl0gPSBcImJvcmRlci1ib3hcIjtcbiAgICBSZXNpemVPYnNlcnZlckJveE9wdGlvbnNbXCJDT05URU5UX0JPWFwiXSA9IFwiY29udGVudC1ib3hcIjtcbiAgICBSZXNpemVPYnNlcnZlckJveE9wdGlvbnNbXCJERVZJQ0VfUElYRUxfQ09OVEVOVF9CT1hcIl0gPSBcImRldmljZS1waXhlbC1jb250ZW50LWJveFwiO1xufSkoUmVzaXplT2JzZXJ2ZXJCb3hPcHRpb25zIHx8IChSZXNpemVPYnNlcnZlckJveE9wdGlvbnMgPSB7fSkpO1xuZXhwb3J0IHsgUmVzaXplT2JzZXJ2ZXJCb3hPcHRpb25zIH07XG4iLCJleHBvcnQgdmFyIGZyZWV6ZSA9IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIE9iamVjdC5mcmVlemUob2JqKTsgfTtcbiIsImltcG9ydCB7IGZyZWV6ZSB9IGZyb20gJy4vdXRpbHMvZnJlZXplJztcbnZhciBSZXNpemVPYnNlcnZlclNpemUgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFJlc2l6ZU9ic2VydmVyU2l6ZShpbmxpbmVTaXplLCBibG9ja1NpemUpIHtcbiAgICAgICAgdGhpcy5pbmxpbmVTaXplID0gaW5saW5lU2l6ZTtcbiAgICAgICAgdGhpcy5ibG9ja1NpemUgPSBibG9ja1NpemU7XG4gICAgICAgIGZyZWV6ZSh0aGlzKTtcbiAgICB9XG4gICAgcmV0dXJuIFJlc2l6ZU9ic2VydmVyU2l6ZTtcbn0oKSk7XG5leHBvcnQgeyBSZXNpemVPYnNlcnZlclNpemUgfTtcbiIsImltcG9ydCB7IGZyZWV6ZSB9IGZyb20gJy4vdXRpbHMvZnJlZXplJztcbnZhciBET01SZWN0UmVhZE9ubHkgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIERPTVJlY3RSZWFkT25seSh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHRoaXMudG9wID0gdGhpcy55O1xuICAgICAgICB0aGlzLmxlZnQgPSB0aGlzLng7XG4gICAgICAgIHRoaXMuYm90dG9tID0gdGhpcy50b3AgKyB0aGlzLmhlaWdodDtcbiAgICAgICAgdGhpcy5yaWdodCA9IHRoaXMubGVmdCArIHRoaXMud2lkdGg7XG4gICAgICAgIHJldHVybiBmcmVlemUodGhpcyk7XG4gICAgfVxuICAgIERPTVJlY3RSZWFkT25seS5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2EgPSB0aGlzLCB4ID0gX2EueCwgeSA9IF9hLnksIHRvcCA9IF9hLnRvcCwgcmlnaHQgPSBfYS5yaWdodCwgYm90dG9tID0gX2EuYm90dG9tLCBsZWZ0ID0gX2EubGVmdCwgd2lkdGggPSBfYS53aWR0aCwgaGVpZ2h0ID0gX2EuaGVpZ2h0O1xuICAgICAgICByZXR1cm4geyB4OiB4LCB5OiB5LCB0b3A6IHRvcCwgcmlnaHQ6IHJpZ2h0LCBib3R0b206IGJvdHRvbSwgbGVmdDogbGVmdCwgd2lkdGg6IHdpZHRoLCBoZWlnaHQ6IGhlaWdodCB9O1xuICAgIH07XG4gICAgRE9NUmVjdFJlYWRPbmx5LmZyb21SZWN0ID0gZnVuY3Rpb24gKHJlY3RhbmdsZSkge1xuICAgICAgICByZXR1cm4gbmV3IERPTVJlY3RSZWFkT25seShyZWN0YW5nbGUueCwgcmVjdGFuZ2xlLnksIHJlY3RhbmdsZS53aWR0aCwgcmVjdGFuZ2xlLmhlaWdodCk7XG4gICAgfTtcbiAgICByZXR1cm4gRE9NUmVjdFJlYWRPbmx5O1xufSgpKTtcbmV4cG9ydCB7IERPTVJlY3RSZWFkT25seSB9O1xuIiwidmFyIGlzU1ZHID0gZnVuY3Rpb24gKHRhcmdldCkgeyByZXR1cm4gdGFyZ2V0IGluc3RhbmNlb2YgU1ZHRWxlbWVudCAmJiAnZ2V0QkJveCcgaW4gdGFyZ2V0OyB9O1xudmFyIGlzSGlkZGVuID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGlmIChpc1NWRyh0YXJnZXQpKSB7XG4gICAgICAgIHZhciBfYSA9IHRhcmdldC5nZXRCQm94KCksIHdpZHRoID0gX2Eud2lkdGgsIGhlaWdodCA9IF9hLmhlaWdodDtcbiAgICAgICAgcmV0dXJuICF3aWR0aCAmJiAhaGVpZ2h0O1xuICAgIH1cbiAgICB2YXIgX2IgPSB0YXJnZXQsIG9mZnNldFdpZHRoID0gX2Iub2Zmc2V0V2lkdGgsIG9mZnNldEhlaWdodCA9IF9iLm9mZnNldEhlaWdodDtcbiAgICByZXR1cm4gIShvZmZzZXRXaWR0aCB8fCBvZmZzZXRIZWlnaHQgfHwgdGFyZ2V0LmdldENsaWVudFJlY3RzKCkubGVuZ3RoKTtcbn07XG52YXIgaXNFbGVtZW50ID0gZnVuY3Rpb24gKG9iaikge1xuICAgIHZhciBfYSwgX2I7XG4gICAgaWYgKG9iaiBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHZhciBzY29wZSA9IChfYiA9IChfYSA9IG9iaikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLm93bmVyRG9jdW1lbnQpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5kZWZhdWx0VmlldztcbiAgICByZXR1cm4gISEoc2NvcGUgJiYgb2JqIGluc3RhbmNlb2Ygc2NvcGUuRWxlbWVudCk7XG59O1xudmFyIGlzUmVwbGFjZWRFbGVtZW50ID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIHN3aXRjaCAodGFyZ2V0LnRhZ05hbWUpIHtcbiAgICAgICAgY2FzZSAnSU5QVVQnOlxuICAgICAgICAgICAgaWYgKHRhcmdldC50eXBlICE9PSAnaW1hZ2UnKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIGNhc2UgJ1ZJREVPJzpcbiAgICAgICAgY2FzZSAnQVVESU8nOlxuICAgICAgICBjYXNlICdFTUJFRCc6XG4gICAgICAgIGNhc2UgJ09CSkVDVCc6XG4gICAgICAgIGNhc2UgJ0NBTlZBUyc6XG4gICAgICAgIGNhc2UgJ0lGUkFNRSc6XG4gICAgICAgIGNhc2UgJ0lNRyc6XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufTtcbmV4cG9ydCB7IGlzU1ZHLCBpc0hpZGRlbiwgaXNFbGVtZW50LCBpc1JlcGxhY2VkRWxlbWVudCB9O1xuIiwiZXhwb3J0IHZhciBnbG9iYWwgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHt9O1xuIiwiaW1wb3J0IHsgUmVzaXplT2JzZXJ2ZXJCb3hPcHRpb25zIH0gZnJvbSAnLi4vUmVzaXplT2JzZXJ2ZXJCb3hPcHRpb25zJztcbmltcG9ydCB7IFJlc2l6ZU9ic2VydmVyU2l6ZSB9IGZyb20gJy4uL1Jlc2l6ZU9ic2VydmVyU2l6ZSc7XG5pbXBvcnQgeyBET01SZWN0UmVhZE9ubHkgfSBmcm9tICcuLi9ET01SZWN0UmVhZE9ubHknO1xuaW1wb3J0IHsgaXNTVkcsIGlzSGlkZGVuIH0gZnJvbSAnLi4vdXRpbHMvZWxlbWVudCc7XG5pbXBvcnQgeyBmcmVlemUgfSBmcm9tICcuLi91dGlscy9mcmVlemUnO1xuaW1wb3J0IHsgZ2xvYmFsIH0gZnJvbSAnLi4vdXRpbHMvZ2xvYmFsJztcbnZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG52YXIgc2Nyb2xsUmVnZXhwID0gL2F1dG98c2Nyb2xsLztcbnZhciB2ZXJ0aWNhbFJlZ2V4cCA9IC9edGJ8dmVydGljYWwvO1xudmFyIElFID0gKC9tc2llfHRyaWRlbnQvaSkudGVzdChnbG9iYWwubmF2aWdhdG9yICYmIGdsb2JhbC5uYXZpZ2F0b3IudXNlckFnZW50KTtcbnZhciBwYXJzZURpbWVuc2lvbiA9IGZ1bmN0aW9uIChwaXhlbCkgeyByZXR1cm4gcGFyc2VGbG9hdChwaXhlbCB8fCAnMCcpOyB9O1xudmFyIHNpemUgPSBmdW5jdGlvbiAoaW5saW5lU2l6ZSwgYmxvY2tTaXplLCBzd2l0Y2hTaXplcykge1xuICAgIGlmIChpbmxpbmVTaXplID09PSB2b2lkIDApIHsgaW5saW5lU2l6ZSA9IDA7IH1cbiAgICBpZiAoYmxvY2tTaXplID09PSB2b2lkIDApIHsgYmxvY2tTaXplID0gMDsgfVxuICAgIGlmIChzd2l0Y2hTaXplcyA9PT0gdm9pZCAwKSB7IHN3aXRjaFNpemVzID0gZmFsc2U7IH1cbiAgICByZXR1cm4gbmV3IFJlc2l6ZU9ic2VydmVyU2l6ZSgoc3dpdGNoU2l6ZXMgPyBibG9ja1NpemUgOiBpbmxpbmVTaXplKSB8fCAwLCAoc3dpdGNoU2l6ZXMgPyBpbmxpbmVTaXplIDogYmxvY2tTaXplKSB8fCAwKTtcbn07XG52YXIgemVyb0JveGVzID0gZnJlZXplKHtcbiAgICBkZXZpY2VQaXhlbENvbnRlbnRCb3hTaXplOiBzaXplKCksXG4gICAgYm9yZGVyQm94U2l6ZTogc2l6ZSgpLFxuICAgIGNvbnRlbnRCb3hTaXplOiBzaXplKCksXG4gICAgY29udGVudFJlY3Q6IG5ldyBET01SZWN0UmVhZE9ubHkoMCwgMCwgMCwgMClcbn0pO1xudmFyIGNhbGN1bGF0ZUJveFNpemVzID0gZnVuY3Rpb24gKHRhcmdldCwgZm9yY2VSZWNhbGN1bGF0aW9uKSB7XG4gICAgaWYgKGZvcmNlUmVjYWxjdWxhdGlvbiA9PT0gdm9pZCAwKSB7IGZvcmNlUmVjYWxjdWxhdGlvbiA9IGZhbHNlOyB9XG4gICAgaWYgKGNhY2hlLmhhcyh0YXJnZXQpICYmICFmb3JjZVJlY2FsY3VsYXRpb24pIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlLmdldCh0YXJnZXQpO1xuICAgIH1cbiAgICBpZiAoaXNIaWRkZW4odGFyZ2V0KSkge1xuICAgICAgICBjYWNoZS5zZXQodGFyZ2V0LCB6ZXJvQm94ZXMpO1xuICAgICAgICByZXR1cm4gemVyb0JveGVzO1xuICAgIH1cbiAgICB2YXIgY3MgPSBnZXRDb21wdXRlZFN0eWxlKHRhcmdldCk7XG4gICAgdmFyIHN2ZyA9IGlzU1ZHKHRhcmdldCkgJiYgdGFyZ2V0Lm93bmVyU1ZHRWxlbWVudCAmJiB0YXJnZXQuZ2V0QkJveCgpO1xuICAgIHZhciByZW1vdmVQYWRkaW5nID0gIUlFICYmIGNzLmJveFNpemluZyA9PT0gJ2JvcmRlci1ib3gnO1xuICAgIHZhciBzd2l0Y2hTaXplcyA9IHZlcnRpY2FsUmVnZXhwLnRlc3QoY3Mud3JpdGluZ01vZGUgfHwgJycpO1xuICAgIHZhciBjYW5TY3JvbGxWZXJ0aWNhbGx5ID0gIXN2ZyAmJiBzY3JvbGxSZWdleHAudGVzdChjcy5vdmVyZmxvd1kgfHwgJycpO1xuICAgIHZhciBjYW5TY3JvbGxIb3Jpem9udGFsbHkgPSAhc3ZnICYmIHNjcm9sbFJlZ2V4cC50ZXN0KGNzLm92ZXJmbG93WCB8fCAnJyk7XG4gICAgdmFyIHBhZGRpbmdUb3AgPSBzdmcgPyAwIDogcGFyc2VEaW1lbnNpb24oY3MucGFkZGluZ1RvcCk7XG4gICAgdmFyIHBhZGRpbmdSaWdodCA9IHN2ZyA/IDAgOiBwYXJzZURpbWVuc2lvbihjcy5wYWRkaW5nUmlnaHQpO1xuICAgIHZhciBwYWRkaW5nQm90dG9tID0gc3ZnID8gMCA6IHBhcnNlRGltZW5zaW9uKGNzLnBhZGRpbmdCb3R0b20pO1xuICAgIHZhciBwYWRkaW5nTGVmdCA9IHN2ZyA/IDAgOiBwYXJzZURpbWVuc2lvbihjcy5wYWRkaW5nTGVmdCk7XG4gICAgdmFyIGJvcmRlclRvcCA9IHN2ZyA/IDAgOiBwYXJzZURpbWVuc2lvbihjcy5ib3JkZXJUb3BXaWR0aCk7XG4gICAgdmFyIGJvcmRlclJpZ2h0ID0gc3ZnID8gMCA6IHBhcnNlRGltZW5zaW9uKGNzLmJvcmRlclJpZ2h0V2lkdGgpO1xuICAgIHZhciBib3JkZXJCb3R0b20gPSBzdmcgPyAwIDogcGFyc2VEaW1lbnNpb24oY3MuYm9yZGVyQm90dG9tV2lkdGgpO1xuICAgIHZhciBib3JkZXJMZWZ0ID0gc3ZnID8gMCA6IHBhcnNlRGltZW5zaW9uKGNzLmJvcmRlckxlZnRXaWR0aCk7XG4gICAgdmFyIGhvcml6b250YWxQYWRkaW5nID0gcGFkZGluZ0xlZnQgKyBwYWRkaW5nUmlnaHQ7XG4gICAgdmFyIHZlcnRpY2FsUGFkZGluZyA9IHBhZGRpbmdUb3AgKyBwYWRkaW5nQm90dG9tO1xuICAgIHZhciBob3Jpem9udGFsQm9yZGVyQXJlYSA9IGJvcmRlckxlZnQgKyBib3JkZXJSaWdodDtcbiAgICB2YXIgdmVydGljYWxCb3JkZXJBcmVhID0gYm9yZGVyVG9wICsgYm9yZGVyQm90dG9tO1xuICAgIHZhciBob3Jpem9udGFsU2Nyb2xsYmFyVGhpY2tuZXNzID0gIWNhblNjcm9sbEhvcml6b250YWxseSA/IDAgOiB0YXJnZXQub2Zmc2V0SGVpZ2h0IC0gdmVydGljYWxCb3JkZXJBcmVhIC0gdGFyZ2V0LmNsaWVudEhlaWdodDtcbiAgICB2YXIgdmVydGljYWxTY3JvbGxiYXJUaGlja25lc3MgPSAhY2FuU2Nyb2xsVmVydGljYWxseSA/IDAgOiB0YXJnZXQub2Zmc2V0V2lkdGggLSBob3Jpem9udGFsQm9yZGVyQXJlYSAtIHRhcmdldC5jbGllbnRXaWR0aDtcbiAgICB2YXIgd2lkdGhSZWR1Y3Rpb24gPSByZW1vdmVQYWRkaW5nID8gaG9yaXpvbnRhbFBhZGRpbmcgKyBob3Jpem9udGFsQm9yZGVyQXJlYSA6IDA7XG4gICAgdmFyIGhlaWdodFJlZHVjdGlvbiA9IHJlbW92ZVBhZGRpbmcgPyB2ZXJ0aWNhbFBhZGRpbmcgKyB2ZXJ0aWNhbEJvcmRlckFyZWEgOiAwO1xuICAgIHZhciBjb250ZW50V2lkdGggPSBzdmcgPyBzdmcud2lkdGggOiBwYXJzZURpbWVuc2lvbihjcy53aWR0aCkgLSB3aWR0aFJlZHVjdGlvbiAtIHZlcnRpY2FsU2Nyb2xsYmFyVGhpY2tuZXNzO1xuICAgIHZhciBjb250ZW50SGVpZ2h0ID0gc3ZnID8gc3ZnLmhlaWdodCA6IHBhcnNlRGltZW5zaW9uKGNzLmhlaWdodCkgLSBoZWlnaHRSZWR1Y3Rpb24gLSBob3Jpem9udGFsU2Nyb2xsYmFyVGhpY2tuZXNzO1xuICAgIHZhciBib3JkZXJCb3hXaWR0aCA9IGNvbnRlbnRXaWR0aCArIGhvcml6b250YWxQYWRkaW5nICsgdmVydGljYWxTY3JvbGxiYXJUaGlja25lc3MgKyBob3Jpem9udGFsQm9yZGVyQXJlYTtcbiAgICB2YXIgYm9yZGVyQm94SGVpZ2h0ID0gY29udGVudEhlaWdodCArIHZlcnRpY2FsUGFkZGluZyArIGhvcml6b250YWxTY3JvbGxiYXJUaGlja25lc3MgKyB2ZXJ0aWNhbEJvcmRlckFyZWE7XG4gICAgdmFyIGJveGVzID0gZnJlZXplKHtcbiAgICAgICAgZGV2aWNlUGl4ZWxDb250ZW50Qm94U2l6ZTogc2l6ZShNYXRoLnJvdW5kKGNvbnRlbnRXaWR0aCAqIGRldmljZVBpeGVsUmF0aW8pLCBNYXRoLnJvdW5kKGNvbnRlbnRIZWlnaHQgKiBkZXZpY2VQaXhlbFJhdGlvKSwgc3dpdGNoU2l6ZXMpLFxuICAgICAgICBib3JkZXJCb3hTaXplOiBzaXplKGJvcmRlckJveFdpZHRoLCBib3JkZXJCb3hIZWlnaHQsIHN3aXRjaFNpemVzKSxcbiAgICAgICAgY29udGVudEJveFNpemU6IHNpemUoY29udGVudFdpZHRoLCBjb250ZW50SGVpZ2h0LCBzd2l0Y2hTaXplcyksXG4gICAgICAgIGNvbnRlbnRSZWN0OiBuZXcgRE9NUmVjdFJlYWRPbmx5KHBhZGRpbmdMZWZ0LCBwYWRkaW5nVG9wLCBjb250ZW50V2lkdGgsIGNvbnRlbnRIZWlnaHQpXG4gICAgfSk7XG4gICAgY2FjaGUuc2V0KHRhcmdldCwgYm94ZXMpO1xuICAgIHJldHVybiBib3hlcztcbn07XG52YXIgY2FsY3VsYXRlQm94U2l6ZSA9IGZ1bmN0aW9uICh0YXJnZXQsIG9ic2VydmVkQm94LCBmb3JjZVJlY2FsY3VsYXRpb24pIHtcbiAgICB2YXIgX2EgPSBjYWxjdWxhdGVCb3hTaXplcyh0YXJnZXQsIGZvcmNlUmVjYWxjdWxhdGlvbiksIGJvcmRlckJveFNpemUgPSBfYS5ib3JkZXJCb3hTaXplLCBjb250ZW50Qm94U2l6ZSA9IF9hLmNvbnRlbnRCb3hTaXplLCBkZXZpY2VQaXhlbENvbnRlbnRCb3hTaXplID0gX2EuZGV2aWNlUGl4ZWxDb250ZW50Qm94U2l6ZTtcbiAgICBzd2l0Y2ggKG9ic2VydmVkQm94KSB7XG4gICAgICAgIGNhc2UgUmVzaXplT2JzZXJ2ZXJCb3hPcHRpb25zLkRFVklDRV9QSVhFTF9DT05URU5UX0JPWDpcbiAgICAgICAgICAgIHJldHVybiBkZXZpY2VQaXhlbENvbnRlbnRCb3hTaXplO1xuICAgICAgICBjYXNlIFJlc2l6ZU9ic2VydmVyQm94T3B0aW9ucy5CT1JERVJfQk9YOlxuICAgICAgICAgICAgcmV0dXJuIGJvcmRlckJveFNpemU7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gY29udGVudEJveFNpemU7XG4gICAgfVxufTtcbmV4cG9ydCB7IGNhbGN1bGF0ZUJveFNpemUsIGNhbGN1bGF0ZUJveFNpemVzIH07XG4iLCJpbXBvcnQgeyBjYWxjdWxhdGVCb3hTaXplcyB9IGZyb20gJy4vYWxnb3JpdGhtcy9jYWxjdWxhdGVCb3hTaXplJztcbmltcG9ydCB7IGZyZWV6ZSB9IGZyb20gJy4vdXRpbHMvZnJlZXplJztcbnZhciBSZXNpemVPYnNlcnZlckVudHJ5ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBSZXNpemVPYnNlcnZlckVudHJ5KHRhcmdldCkge1xuICAgICAgICB2YXIgYm94ZXMgPSBjYWxjdWxhdGVCb3hTaXplcyh0YXJnZXQpO1xuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgICAgICAgdGhpcy5jb250ZW50UmVjdCA9IGJveGVzLmNvbnRlbnRSZWN0O1xuICAgICAgICB0aGlzLmJvcmRlckJveFNpemUgPSBmcmVlemUoW2JveGVzLmJvcmRlckJveFNpemVdKTtcbiAgICAgICAgdGhpcy5jb250ZW50Qm94U2l6ZSA9IGZyZWV6ZShbYm94ZXMuY29udGVudEJveFNpemVdKTtcbiAgICAgICAgdGhpcy5kZXZpY2VQaXhlbENvbnRlbnRCb3hTaXplID0gZnJlZXplKFtib3hlcy5kZXZpY2VQaXhlbENvbnRlbnRCb3hTaXplXSk7XG4gICAgfVxuICAgIHJldHVybiBSZXNpemVPYnNlcnZlckVudHJ5O1xufSgpKTtcbmV4cG9ydCB7IFJlc2l6ZU9ic2VydmVyRW50cnkgfTtcbiIsImltcG9ydCB7IGlzSGlkZGVuIH0gZnJvbSAnLi4vdXRpbHMvZWxlbWVudCc7XG52YXIgY2FsY3VsYXRlRGVwdGhGb3JOb2RlID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICBpZiAoaXNIaWRkZW4obm9kZSkpIHtcbiAgICAgICAgcmV0dXJuIEluZmluaXR5O1xuICAgIH1cbiAgICB2YXIgZGVwdGggPSAwO1xuICAgIHZhciBwYXJlbnQgPSBub2RlLnBhcmVudE5vZGU7XG4gICAgd2hpbGUgKHBhcmVudCkge1xuICAgICAgICBkZXB0aCArPSAxO1xuICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50Tm9kZTtcbiAgICB9XG4gICAgcmV0dXJuIGRlcHRoO1xufTtcbmV4cG9ydCB7IGNhbGN1bGF0ZURlcHRoRm9yTm9kZSB9O1xuIiwiaW1wb3J0IHsgcmVzaXplT2JzZXJ2ZXJzIH0gZnJvbSAnLi4vdXRpbHMvcmVzaXplT2JzZXJ2ZXJzJztcbmltcG9ydCB7IFJlc2l6ZU9ic2VydmVyRW50cnkgfSBmcm9tICcuLi9SZXNpemVPYnNlcnZlckVudHJ5JztcbmltcG9ydCB7IGNhbGN1bGF0ZURlcHRoRm9yTm9kZSB9IGZyb20gJy4vY2FsY3VsYXRlRGVwdGhGb3JOb2RlJztcbmltcG9ydCB7IGNhbGN1bGF0ZUJveFNpemUgfSBmcm9tICcuL2NhbGN1bGF0ZUJveFNpemUnO1xudmFyIGJyb2FkY2FzdEFjdGl2ZU9ic2VydmF0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2hhbGxvd2VzdERlcHRoID0gSW5maW5pdHk7XG4gICAgdmFyIGNhbGxiYWNrcyA9IFtdO1xuICAgIHJlc2l6ZU9ic2VydmVycy5mb3JFYWNoKGZ1bmN0aW9uIHByb2Nlc3NPYnNlcnZlcihybykge1xuICAgICAgICBpZiAocm8uYWN0aXZlVGFyZ2V0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZW50cmllcyA9IFtdO1xuICAgICAgICByby5hY3RpdmVUYXJnZXRzLmZvckVhY2goZnVuY3Rpb24gcHJvY2Vzc1RhcmdldChvdCkge1xuICAgICAgICAgICAgdmFyIGVudHJ5ID0gbmV3IFJlc2l6ZU9ic2VydmVyRW50cnkob3QudGFyZ2V0KTtcbiAgICAgICAgICAgIHZhciB0YXJnZXREZXB0aCA9IGNhbGN1bGF0ZURlcHRoRm9yTm9kZShvdC50YXJnZXQpO1xuICAgICAgICAgICAgZW50cmllcy5wdXNoKGVudHJ5KTtcbiAgICAgICAgICAgIG90Lmxhc3RSZXBvcnRlZFNpemUgPSBjYWxjdWxhdGVCb3hTaXplKG90LnRhcmdldCwgb3Qub2JzZXJ2ZWRCb3gpO1xuICAgICAgICAgICAgaWYgKHRhcmdldERlcHRoIDwgc2hhbGxvd2VzdERlcHRoKSB7XG4gICAgICAgICAgICAgICAgc2hhbGxvd2VzdERlcHRoID0gdGFyZ2V0RGVwdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBjYWxsYmFja3MucHVzaChmdW5jdGlvbiByZXNpemVPYnNlcnZlckNhbGxiYWNrKCkge1xuICAgICAgICAgICAgcm8uY2FsbGJhY2suY2FsbChyby5vYnNlcnZlciwgZW50cmllcywgcm8ub2JzZXJ2ZXIpO1xuICAgICAgICB9KTtcbiAgICAgICAgcm8uYWN0aXZlVGFyZ2V0cy5zcGxpY2UoMCwgcm8uYWN0aXZlVGFyZ2V0cy5sZW5ndGgpO1xuICAgIH0pO1xuICAgIGZvciAodmFyIF9pID0gMCwgY2FsbGJhY2tzXzEgPSBjYWxsYmFja3M7IF9pIDwgY2FsbGJhY2tzXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IGNhbGxiYWNrc18xW19pXTtcbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICB9XG4gICAgcmV0dXJuIHNoYWxsb3dlc3REZXB0aDtcbn07XG5leHBvcnQgeyBicm9hZGNhc3RBY3RpdmVPYnNlcnZhdGlvbnMgfTtcbiIsImltcG9ydCB7IHJlc2l6ZU9ic2VydmVycyB9IGZyb20gJy4uL3V0aWxzL3Jlc2l6ZU9ic2VydmVycyc7XG5pbXBvcnQgeyBjYWxjdWxhdGVEZXB0aEZvck5vZGUgfSBmcm9tICcuL2NhbGN1bGF0ZURlcHRoRm9yTm9kZSc7XG52YXIgZ2F0aGVyQWN0aXZlT2JzZXJ2YXRpb25zQXREZXB0aCA9IGZ1bmN0aW9uIChkZXB0aCkge1xuICAgIHJlc2l6ZU9ic2VydmVycy5mb3JFYWNoKGZ1bmN0aW9uIHByb2Nlc3NPYnNlcnZlcihybykge1xuICAgICAgICByby5hY3RpdmVUYXJnZXRzLnNwbGljZSgwLCByby5hY3RpdmVUYXJnZXRzLmxlbmd0aCk7XG4gICAgICAgIHJvLnNraXBwZWRUYXJnZXRzLnNwbGljZSgwLCByby5za2lwcGVkVGFyZ2V0cy5sZW5ndGgpO1xuICAgICAgICByby5vYnNlcnZhdGlvblRhcmdldHMuZm9yRWFjaChmdW5jdGlvbiBwcm9jZXNzVGFyZ2V0KG90KSB7XG4gICAgICAgICAgICBpZiAob3QuaXNBY3RpdmUoKSkge1xuICAgICAgICAgICAgICAgIGlmIChjYWxjdWxhdGVEZXB0aEZvck5vZGUob3QudGFyZ2V0KSA+IGRlcHRoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJvLmFjdGl2ZVRhcmdldHMucHVzaChvdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByby5za2lwcGVkVGFyZ2V0cy5wdXNoKG90KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufTtcbmV4cG9ydCB7IGdhdGhlckFjdGl2ZU9ic2VydmF0aW9uc0F0RGVwdGggfTtcbiIsImltcG9ydCB7IGhhc0FjdGl2ZU9ic2VydmF0aW9ucyB9IGZyb20gJy4uL2FsZ29yaXRobXMvaGFzQWN0aXZlT2JzZXJ2YXRpb25zJztcbmltcG9ydCB7IGhhc1NraXBwZWRPYnNlcnZhdGlvbnMgfSBmcm9tICcuLi9hbGdvcml0aG1zL2hhc1NraXBwZWRPYnNlcnZhdGlvbnMnO1xuaW1wb3J0IHsgZGVsaXZlclJlc2l6ZUxvb3BFcnJvciB9IGZyb20gJy4uL2FsZ29yaXRobXMvZGVsaXZlclJlc2l6ZUxvb3BFcnJvcic7XG5pbXBvcnQgeyBicm9hZGNhc3RBY3RpdmVPYnNlcnZhdGlvbnMgfSBmcm9tICcuLi9hbGdvcml0aG1zL2Jyb2FkY2FzdEFjdGl2ZU9ic2VydmF0aW9ucyc7XG5pbXBvcnQgeyBnYXRoZXJBY3RpdmVPYnNlcnZhdGlvbnNBdERlcHRoIH0gZnJvbSAnLi4vYWxnb3JpdGhtcy9nYXRoZXJBY3RpdmVPYnNlcnZhdGlvbnNBdERlcHRoJztcbnZhciBwcm9jZXNzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBkZXB0aCA9IDA7XG4gICAgZ2F0aGVyQWN0aXZlT2JzZXJ2YXRpb25zQXREZXB0aChkZXB0aCk7XG4gICAgd2hpbGUgKGhhc0FjdGl2ZU9ic2VydmF0aW9ucygpKSB7XG4gICAgICAgIGRlcHRoID0gYnJvYWRjYXN0QWN0aXZlT2JzZXJ2YXRpb25zKCk7XG4gICAgICAgIGdhdGhlckFjdGl2ZU9ic2VydmF0aW9uc0F0RGVwdGgoZGVwdGgpO1xuICAgIH1cbiAgICBpZiAoaGFzU2tpcHBlZE9ic2VydmF0aW9ucygpKSB7XG4gICAgICAgIGRlbGl2ZXJSZXNpemVMb29wRXJyb3IoKTtcbiAgICB9XG4gICAgcmV0dXJuIGRlcHRoID4gMDtcbn07XG5leHBvcnQgeyBwcm9jZXNzIH07XG4iLCJ2YXIgdHJpZ2dlcjtcbnZhciBjYWxsYmFja3MgPSBbXTtcbnZhciBub3RpZnkgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBjYWxsYmFja3Muc3BsaWNlKDApLmZvckVhY2goZnVuY3Rpb24gKGNiKSB7IHJldHVybiBjYigpOyB9KTsgfTtcbnZhciBxdWV1ZU1pY3JvVGFzayA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgIGlmICghdHJpZ2dlcikge1xuICAgICAgICB2YXIgdG9nZ2xlXzEgPSAwO1xuICAgICAgICB2YXIgZWxfMSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICAgICAgdmFyIGNvbmZpZyA9IHsgY2hhcmFjdGVyRGF0YTogdHJ1ZSB9O1xuICAgICAgICBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAoKSB7IHJldHVybiBub3RpZnkoKTsgfSkub2JzZXJ2ZShlbF8xLCBjb25maWcpO1xuICAgICAgICB0cmlnZ2VyID0gZnVuY3Rpb24gKCkgeyBlbF8xLnRleHRDb250ZW50ID0gXCJcIiArICh0b2dnbGVfMSA/IHRvZ2dsZV8xLS0gOiB0b2dnbGVfMSsrKTsgfTtcbiAgICB9XG4gICAgY2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuICAgIHRyaWdnZXIoKTtcbn07XG5leHBvcnQgeyBxdWV1ZU1pY3JvVGFzayB9O1xuIiwiaW1wb3J0IHsgcXVldWVNaWNyb1Rhc2sgfSBmcm9tICcuL3F1ZXVlTWljcm9UYXNrJztcbnZhciBxdWV1ZVJlc2l6ZU9ic2VydmVyID0gZnVuY3Rpb24gKGNiKSB7XG4gICAgcXVldWVNaWNyb1Rhc2soZnVuY3Rpb24gUmVzaXplT2JzZXJ2ZXIoKSB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShjYik7XG4gICAgfSk7XG59O1xuZXhwb3J0IHsgcXVldWVSZXNpemVPYnNlcnZlciB9O1xuIiwiaW1wb3J0IHsgcHJvY2VzcyB9IGZyb20gJy4vcHJvY2Vzcyc7XG5pbXBvcnQgeyBnbG9iYWwgfSBmcm9tICcuL2dsb2JhbCc7XG5pbXBvcnQgeyBxdWV1ZVJlc2l6ZU9ic2VydmVyIH0gZnJvbSAnLi9xdWV1ZVJlc2l6ZU9ic2VydmVyJztcbnZhciB3YXRjaGluZyA9IDA7XG52YXIgaXNXYXRjaGluZyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICEhd2F0Y2hpbmc7IH07XG52YXIgQ0FUQ0hfUEVSSU9EID0gMjUwO1xudmFyIG9ic2VydmVyQ29uZmlnID0geyBhdHRyaWJ1dGVzOiB0cnVlLCBjaGFyYWN0ZXJEYXRhOiB0cnVlLCBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfTtcbnZhciBldmVudHMgPSBbXG4gICAgJ3Jlc2l6ZScsXG4gICAgJ2xvYWQnLFxuICAgICd0cmFuc2l0aW9uZW5kJyxcbiAgICAnYW5pbWF0aW9uZW5kJyxcbiAgICAnYW5pbWF0aW9uc3RhcnQnLFxuICAgICdhbmltYXRpb25pdGVyYXRpb24nLFxuICAgICdrZXl1cCcsXG4gICAgJ2tleWRvd24nLFxuICAgICdtb3VzZXVwJyxcbiAgICAnbW91c2Vkb3duJyxcbiAgICAnbW91c2VvdmVyJyxcbiAgICAnbW91c2VvdXQnLFxuICAgICdibHVyJyxcbiAgICAnZm9jdXMnXG5dO1xudmFyIHRpbWUgPSBmdW5jdGlvbiAodGltZW91dCkge1xuICAgIGlmICh0aW1lb3V0ID09PSB2b2lkIDApIHsgdGltZW91dCA9IDA7IH1cbiAgICByZXR1cm4gRGF0ZS5ub3coKSArIHRpbWVvdXQ7XG59O1xudmFyIHNjaGVkdWxlZCA9IGZhbHNlO1xudmFyIFNjaGVkdWxlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2NoZWR1bGVyKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLnN0b3BwZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmxpc3RlbmVyID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuc2NoZWR1bGUoKTsgfTtcbiAgICB9XG4gICAgU2NoZWR1bGVyLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAodGltZW91dCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAodGltZW91dCA9PT0gdm9pZCAwKSB7IHRpbWVvdXQgPSBDQVRDSF9QRVJJT0Q7IH1cbiAgICAgICAgaWYgKHNjaGVkdWxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHNjaGVkdWxlZCA9IHRydWU7XG4gICAgICAgIHZhciB1bnRpbCA9IHRpbWUodGltZW91dCk7XG4gICAgICAgIHF1ZXVlUmVzaXplT2JzZXJ2ZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGVsZW1lbnRzSGF2ZVJlc2l6ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudHNIYXZlUmVzaXplZCA9IHByb2Nlc3MoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIHNjaGVkdWxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRpbWVvdXQgPSB1bnRpbCAtIHRpbWUoKTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzV2F0Y2hpbmcoKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50c0hhdmVSZXNpemVkKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnJ1bigxMDAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGltZW91dCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMucnVuKHRpbWVvdXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgU2NoZWR1bGVyLnByb3RvdHlwZS5zY2hlZHVsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgIHRoaXMucnVuKCk7XG4gICAgfTtcbiAgICBTY2hlZHVsZXIucHJvdG90eXBlLm9ic2VydmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBjYiA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLm9ic2VydmVyICYmIF90aGlzLm9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuYm9keSwgb2JzZXJ2ZXJDb25maWcpOyB9O1xuICAgICAgICBkb2N1bWVudC5ib2R5ID8gY2IoKSA6IGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgY2IpO1xuICAgIH07XG4gICAgU2NoZWR1bGVyLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuc3RvcHBlZCkge1xuICAgICAgICAgICAgdGhpcy5zdG9wcGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLm9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIodGhpcy5saXN0ZW5lcik7XG4gICAgICAgICAgICB0aGlzLm9ic2VydmUoKTtcbiAgICAgICAgICAgIGV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcihuYW1lLCBfdGhpcy5saXN0ZW5lciwgdHJ1ZSk7IH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTY2hlZHVsZXIucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICghdGhpcy5zdG9wcGVkKSB7XG4gICAgICAgICAgICB0aGlzLm9ic2VydmVyICYmIHRoaXMub2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIGdsb2JhbC5yZW1vdmVFdmVudExpc3RlbmVyKG5hbWUsIF90aGlzLmxpc3RlbmVyLCB0cnVlKTsgfSk7XG4gICAgICAgICAgICB0aGlzLnN0b3BwZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gU2NoZWR1bGVyO1xufSgpKTtcbnZhciBzY2hlZHVsZXIgPSBuZXcgU2NoZWR1bGVyKCk7XG52YXIgdXBkYXRlQ291bnQgPSBmdW5jdGlvbiAobikge1xuICAgICF3YXRjaGluZyAmJiBuID4gMCAmJiBzY2hlZHVsZXIuc3RhcnQoKTtcbiAgICB3YXRjaGluZyArPSBuO1xuICAgICF3YXRjaGluZyAmJiBzY2hlZHVsZXIuc3RvcCgpO1xufTtcbmV4cG9ydCB7IHNjaGVkdWxlciwgdXBkYXRlQ291bnQgfTtcbiIsImltcG9ydCB7IFJlc2l6ZU9ic2VydmVyQm94T3B0aW9ucyB9IGZyb20gJy4vUmVzaXplT2JzZXJ2ZXJCb3hPcHRpb25zJztcbmltcG9ydCB7IGNhbGN1bGF0ZUJveFNpemUgfSBmcm9tICcuL2FsZ29yaXRobXMvY2FsY3VsYXRlQm94U2l6ZSc7XG5pbXBvcnQgeyBpc1NWRywgaXNSZXBsYWNlZEVsZW1lbnQgfSBmcm9tICcuL3V0aWxzL2VsZW1lbnQnO1xudmFyIHNraXBOb3RpZnlPbkVsZW1lbnQgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgcmV0dXJuICFpc1NWRyh0YXJnZXQpXG4gICAgICAgICYmICFpc1JlcGxhY2VkRWxlbWVudCh0YXJnZXQpXG4gICAgICAgICYmIGdldENvbXB1dGVkU3R5bGUodGFyZ2V0KS5kaXNwbGF5ID09PSAnaW5saW5lJztcbn07XG52YXIgUmVzaXplT2JzZXJ2YXRpb24gPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFJlc2l6ZU9ic2VydmF0aW9uKHRhcmdldCwgb2JzZXJ2ZWRCb3gpIHtcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgIHRoaXMub2JzZXJ2ZWRCb3ggPSBvYnNlcnZlZEJveCB8fCBSZXNpemVPYnNlcnZlckJveE9wdGlvbnMuQ09OVEVOVF9CT1g7XG4gICAgICAgIHRoaXMubGFzdFJlcG9ydGVkU2l6ZSA9IHtcbiAgICAgICAgICAgIGlubGluZVNpemU6IDAsXG4gICAgICAgICAgICBibG9ja1NpemU6IDBcbiAgICAgICAgfTtcbiAgICB9XG4gICAgUmVzaXplT2JzZXJ2YXRpb24ucHJvdG90eXBlLmlzQWN0aXZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc2l6ZSA9IGNhbGN1bGF0ZUJveFNpemUodGhpcy50YXJnZXQsIHRoaXMub2JzZXJ2ZWRCb3gsIHRydWUpO1xuICAgICAgICBpZiAoc2tpcE5vdGlmeU9uRWxlbWVudCh0aGlzLnRhcmdldCkpIHtcbiAgICAgICAgICAgIHRoaXMubGFzdFJlcG9ydGVkU2l6ZSA9IHNpemU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubGFzdFJlcG9ydGVkU2l6ZS5pbmxpbmVTaXplICE9PSBzaXplLmlubGluZVNpemVcbiAgICAgICAgICAgIHx8IHRoaXMubGFzdFJlcG9ydGVkU2l6ZS5ibG9ja1NpemUgIT09IHNpemUuYmxvY2tTaXplKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICByZXR1cm4gUmVzaXplT2JzZXJ2YXRpb247XG59KCkpO1xuZXhwb3J0IHsgUmVzaXplT2JzZXJ2YXRpb24gfTtcbiIsInZhciBSZXNpemVPYnNlcnZlckRldGFpbCA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUmVzaXplT2JzZXJ2ZXJEZXRhaWwocmVzaXplT2JzZXJ2ZXIsIGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlVGFyZ2V0cyA9IFtdO1xuICAgICAgICB0aGlzLnNraXBwZWRUYXJnZXRzID0gW107XG4gICAgICAgIHRoaXMub2JzZXJ2YXRpb25UYXJnZXRzID0gW107XG4gICAgICAgIHRoaXMub2JzZXJ2ZXIgPSByZXNpemVPYnNlcnZlcjtcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIH1cbiAgICByZXR1cm4gUmVzaXplT2JzZXJ2ZXJEZXRhaWw7XG59KCkpO1xuZXhwb3J0IHsgUmVzaXplT2JzZXJ2ZXJEZXRhaWwgfTtcbiIsImltcG9ydCB7IHNjaGVkdWxlciwgdXBkYXRlQ291bnQgfSBmcm9tICcuL3V0aWxzL3NjaGVkdWxlcic7XG5pbXBvcnQgeyBSZXNpemVPYnNlcnZhdGlvbiB9IGZyb20gJy4vUmVzaXplT2JzZXJ2YXRpb24nO1xuaW1wb3J0IHsgUmVzaXplT2JzZXJ2ZXJEZXRhaWwgfSBmcm9tICcuL1Jlc2l6ZU9ic2VydmVyRGV0YWlsJztcbmltcG9ydCB7IHJlc2l6ZU9ic2VydmVycyB9IGZyb20gJy4vdXRpbHMvcmVzaXplT2JzZXJ2ZXJzJztcbnZhciBvYnNlcnZlck1hcCA9IG5ldyBXZWFrTWFwKCk7XG52YXIgZ2V0T2JzZXJ2YXRpb25JbmRleCA9IGZ1bmN0aW9uIChvYnNlcnZhdGlvblRhcmdldHMsIHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JzZXJ2YXRpb25UYXJnZXRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChvYnNlcnZhdGlvblRhcmdldHNbaV0udGFyZ2V0ID09PSB0YXJnZXQpIHtcbiAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAtMTtcbn07XG52YXIgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIoKSB7XG4gICAgfVxuICAgIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5jb25uZWN0ID0gZnVuY3Rpb24gKHJlc2l6ZU9ic2VydmVyLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgZGV0YWlsID0gbmV3IFJlc2l6ZU9ic2VydmVyRGV0YWlsKHJlc2l6ZU9ic2VydmVyLCBjYWxsYmFjayk7XG4gICAgICAgIG9ic2VydmVyTWFwLnNldChyZXNpemVPYnNlcnZlciwgZGV0YWlsKTtcbiAgICB9O1xuICAgIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5vYnNlcnZlID0gZnVuY3Rpb24gKHJlc2l6ZU9ic2VydmVyLCB0YXJnZXQsIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIGRldGFpbCA9IG9ic2VydmVyTWFwLmdldChyZXNpemVPYnNlcnZlcik7XG4gICAgICAgIHZhciBmaXJzdE9ic2VydmF0aW9uID0gZGV0YWlsLm9ic2VydmF0aW9uVGFyZ2V0cy5sZW5ndGggPT09IDA7XG4gICAgICAgIGlmIChnZXRPYnNlcnZhdGlvbkluZGV4KGRldGFpbC5vYnNlcnZhdGlvblRhcmdldHMsIHRhcmdldCkgPCAwKSB7XG4gICAgICAgICAgICBmaXJzdE9ic2VydmF0aW9uICYmIHJlc2l6ZU9ic2VydmVycy5wdXNoKGRldGFpbCk7XG4gICAgICAgICAgICBkZXRhaWwub2JzZXJ2YXRpb25UYXJnZXRzLnB1c2gobmV3IFJlc2l6ZU9ic2VydmF0aW9uKHRhcmdldCwgb3B0aW9ucyAmJiBvcHRpb25zLmJveCkpO1xuICAgICAgICAgICAgdXBkYXRlQ291bnQoMSk7XG4gICAgICAgICAgICBzY2hlZHVsZXIuc2NoZWR1bGUoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLnVub2JzZXJ2ZSA9IGZ1bmN0aW9uIChyZXNpemVPYnNlcnZlciwgdGFyZ2V0KSB7XG4gICAgICAgIHZhciBkZXRhaWwgPSBvYnNlcnZlck1hcC5nZXQocmVzaXplT2JzZXJ2ZXIpO1xuICAgICAgICB2YXIgaW5kZXggPSBnZXRPYnNlcnZhdGlvbkluZGV4KGRldGFpbC5vYnNlcnZhdGlvblRhcmdldHMsIHRhcmdldCk7XG4gICAgICAgIHZhciBsYXN0T2JzZXJ2YXRpb24gPSBkZXRhaWwub2JzZXJ2YXRpb25UYXJnZXRzLmxlbmd0aCA9PT0gMTtcbiAgICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgICAgIGxhc3RPYnNlcnZhdGlvbiAmJiByZXNpemVPYnNlcnZlcnMuc3BsaWNlKHJlc2l6ZU9ic2VydmVycy5pbmRleE9mKGRldGFpbCksIDEpO1xuICAgICAgICAgICAgZGV0YWlsLm9ic2VydmF0aW9uVGFyZ2V0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgdXBkYXRlQ291bnQoLTEpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIuZGlzY29ubmVjdCA9IGZ1bmN0aW9uIChyZXNpemVPYnNlcnZlcikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgZGV0YWlsID0gb2JzZXJ2ZXJNYXAuZ2V0KHJlc2l6ZU9ic2VydmVyKTtcbiAgICAgICAgZGV0YWlsLm9ic2VydmF0aW9uVGFyZ2V0cy5zbGljZSgpLmZvckVhY2goZnVuY3Rpb24gKG90KSB7IHJldHVybiBfdGhpcy51bm9ic2VydmUocmVzaXplT2JzZXJ2ZXIsIG90LnRhcmdldCk7IH0pO1xuICAgICAgICBkZXRhaWwuYWN0aXZlVGFyZ2V0cy5zcGxpY2UoMCwgZGV0YWlsLmFjdGl2ZVRhcmdldHMubGVuZ3RoKTtcbiAgICB9O1xuICAgIHJldHVybiBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXI7XG59KCkpO1xuZXhwb3J0IHsgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyIH07XG4iLCJpbXBvcnQgeyBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIgfSBmcm9tICcuL1Jlc2l6ZU9ic2VydmVyQ29udHJvbGxlcic7XG5pbXBvcnQgeyBpc0VsZW1lbnQgfSBmcm9tICcuL3V0aWxzL2VsZW1lbnQnO1xudmFyIFJlc2l6ZU9ic2VydmVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBSZXNpemVPYnNlcnZlcihjYWxsYmFjaykge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkZhaWxlZCB0byBjb25zdHJ1Y3QgJ1Jlc2l6ZU9ic2VydmVyJzogMSBhcmd1bWVudCByZXF1aXJlZCwgYnV0IG9ubHkgMCBwcmVzZW50LlwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRmFpbGVkIHRvIGNvbnN0cnVjdCAnUmVzaXplT2JzZXJ2ZXInOiBUaGUgY2FsbGJhY2sgcHJvdmlkZWQgYXMgcGFyYW1ldGVyIDEgaXMgbm90IGEgZnVuY3Rpb24uXCIpO1xuICAgICAgICB9XG4gICAgICAgIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5jb25uZWN0KHRoaXMsIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgUmVzaXplT2JzZXJ2ZXIucHJvdG90eXBlLm9ic2VydmUgPSBmdW5jdGlvbiAodGFyZ2V0LCBvcHRpb25zKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRmFpbGVkIHRvIGV4ZWN1dGUgJ29ic2VydmUnIG9uICdSZXNpemVPYnNlcnZlcic6IDEgYXJndW1lbnQgcmVxdWlyZWQsIGJ1dCBvbmx5IDAgcHJlc2VudC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc0VsZW1lbnQodGFyZ2V0KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkZhaWxlZCB0byBleGVjdXRlICdvYnNlcnZlJyBvbiAnUmVzaXplT2JzZXJ2ZXInOiBwYXJhbWV0ZXIgMSBpcyBub3Qgb2YgdHlwZSAnRWxlbWVudFwiKTtcbiAgICAgICAgfVxuICAgICAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIub2JzZXJ2ZSh0aGlzLCB0YXJnZXQsIG9wdGlvbnMpO1xuICAgIH07XG4gICAgUmVzaXplT2JzZXJ2ZXIucHJvdG90eXBlLnVub2JzZXJ2ZSA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJGYWlsZWQgdG8gZXhlY3V0ZSAndW5vYnNlcnZlJyBvbiAnUmVzaXplT2JzZXJ2ZXInOiAxIGFyZ3VtZW50IHJlcXVpcmVkLCBidXQgb25seSAwIHByZXNlbnQuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNFbGVtZW50KHRhcmdldCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJGYWlsZWQgdG8gZXhlY3V0ZSAndW5vYnNlcnZlJyBvbiAnUmVzaXplT2JzZXJ2ZXInOiBwYXJhbWV0ZXIgMSBpcyBub3Qgb2YgdHlwZSAnRWxlbWVudFwiKTtcbiAgICAgICAgfVxuICAgICAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIudW5vYnNlcnZlKHRoaXMsIHRhcmdldCk7XG4gICAgfTtcbiAgICBSZXNpemVPYnNlcnZlci5wcm90b3R5cGUuZGlzY29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLmRpc2Nvbm5lY3QodGhpcyk7XG4gICAgfTtcbiAgICBSZXNpemVPYnNlcnZlci50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICdmdW5jdGlvbiBSZXNpemVPYnNlcnZlciAoKSB7IFtwb2x5ZmlsbCBjb2RlXSB9JztcbiAgICB9O1xuICAgIHJldHVybiBSZXNpemVPYnNlcnZlcjtcbn0oKSk7XG5leHBvcnQgeyBSZXNpemVPYnNlcnZlciB9O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCwgaW1tZWRpYXRlKSB7XG4gIGxldCB0aW1lb3V0XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGV4ZWN1dGVkRnVuY3Rpb24oKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXNcbiAgICBjb25zdCBhcmdzID0gYXJndW1lbnRzXG5cbiAgICBjb25zdCBsYXRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgdGltZW91dCA9IG51bGxcbiAgICAgIGlmICghaW1tZWRpYXRlKSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpXG4gICAgfVxuXG4gICAgY29uc3QgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dFxuXG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpXG5cbiAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdClcblxuICAgIGlmIChjYWxsTm93KSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpXG4gIH1cbn1cbiIsImltcG9ydCB7IFJlc2l6ZU9ic2VydmVyIGFzIFBvbHlmaWxsIH0gZnJvbSAnQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXInXG5jb25zdCBSZXNpemVPYnNlcnZlciA9IHdpbmRvdy5SZXNpemVPYnNlcnZlciB8fCBQb2x5ZmlsbFxuaW1wb3J0IGRlYm91bmNlIGZyb20gJy4vdXRpbHMvZGVib3VuY2UnXG5cbmltcG9ydCByZW1vdmVJdGVtIGZyb20gJy4vdXRpbHMvcmVtb3ZlLWFycmF5LWl0ZW0nXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnRFbWl0dGVyJ1xuaW1wb3J0IHtcbiAgZ2V0RGlzdGFuY2UsXG4gIGluZGV4T2ZOZWFyZXN0UG9pbnRcbn0gZnJvbSAnLi9nZW9tZXRyeS9kaXN0YW5jZXMnXG5cbmltcG9ydCBEcmFnZ2FibGUgZnJvbSAnLi9kcmFnZ2FibGUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3QgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvcihkcmFnZ2FibGVzLCBvcHRpb25zPXt9KSB7XG4gICAgc3VwZXIob3B0aW9ucylcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHRpbWVFbmQ6IDIwMCxcbiAgICAgIHRpbWVFeGNhbmdlOiA0MDAsXG4gICAgICByYWRpdXM6IDMwXG4gICAgfSwgb3B0aW9ucylcblxuICAgIHRoaXMuY29udGFpbmVyID0gb3B0aW9ucy5jb250YWluZXJcbiAgICB0aGlzLmRyYWdnYWJsZXMgPSBkcmFnZ2FibGVzXG4gICAgdGhpcy5jaGFuZ2VkRHVyaW5nSXRlcmF0aW9uID0gZmFsc2VcblxuICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoZGVib3VuY2UodGhpcy5vblJlc2l6ZS5iaW5kKHRoaXMpLCAxMDApKVxuXG4gICAgaWYgKHRoaXMuY29udGFpbmVyKSB7XG4gICAgICB0aGlzLnJlc2l6ZU9ic2VydmVyLm9ic2VydmUodGhpcy5jb250YWluZXIpXG4gICAgfVxuXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIG9uUmVzaXplKCkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMucmVvcmRlck9uQ2hhbmdlKSB0aGlzLnJlc2V0KClcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZCkgPT4gZC5zdGFydFBvc2l0aW9uaW5nKCkpXG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuX2VuYWJsZSA9IHRydWVcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB0aGlzLmluaXREcmFnZ2FibGUoZHJhZ2dhYmxlKSlcbiAgfVxuXG4gIGluaXREcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgZHJhZ2dhYmxlLmVuYWJsZSA9IHRoaXMuX2VuYWJsZVxuICAgIGRyYWdnYWJsZS5vbignZHJhZzptb3ZlJywgKCkgPT4gdGhpcy5vbk1vdmUoZHJhZ2dhYmxlKSlcbiAgICBkcmFnZ2FibGUuZHJhZ0VuZEFjdGlvbiA9ICgpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5waW5Qb3NpdGlvbihkcmFnZ2FibGUucGlubmVkUG9zaXRpb24sIHRoaXMub3B0aW9ucy50aW1lRW5kKVxuICAgICAgdGhpcy5vbkVuZChkcmFnZ2FibGUpXG4gICAgfVxuICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZShkcmFnZ2FibGUuZWxlbWVudClcbiAgfVxuXG4gIHJlbGVhc2VEcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgdGhpcy5yZXNpemVPYnNlcnZlci51bm9ic2VydmUoZHJhZ2dhYmxlLmVsZW1lbnQpXG4gICAgZHJhZ2dhYmxlLnJlc2V0T24oJ2RyYWc6ZW5kJylcbiAgICBkcmFnZ2FibGUucmVzZXRPbignZHJhZzptb3ZlJylcbiAgICByZW1vdmVJdGVtKHRoaXMuZHJhZ2dhYmxlcywgZHJhZ2dhYmxlKVxuICB9XG5cbiAgb25Nb3ZlKGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IHNvcnRlZERyYWdnYWJsZXMgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuICAgIGNvbnN0IHBpbm5lZFBvc2l0aW9ucyA9IHNvcnRlZERyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbilcblxuICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IHNvcnRlZERyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpXG4gICAgY29uc3QgdGFyZ2V0SW5kZXggPSBpbmRleE9mTmVhcmVzdFBvaW50KHBpbm5lZFBvc2l0aW9ucywgZHJhZ2dhYmxlLnBvc2l0aW9uLCB0aGlzLm9wdGlvbnMucmFkaXVzLCB0aGlzLmRpc3RhbmNlRnVuYylcblxuICAgIGlmICh0YXJnZXRJbmRleCAhPT0gLTEgJiYgY3VycmVudEluZGV4ICE9PSB0YXJnZXRJbmRleCkge1xuICAgICAgaWYgKHRhcmdldEluZGV4IDwgY3VycmVudEluZGV4KSB7XG4gICAgICAgIGZvciAobGV0IGk9dGFyZ2V0SW5kZXg7IGk8Y3VycmVudEluZGV4OyBpKyspIHtcbiAgICAgICAgICBzb3J0ZWREcmFnZ2FibGVzW2ldLnBpblBvc2l0aW9uKHBpbm5lZFBvc2l0aW9uc1tpKzFdLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAobGV0IGk9Y3VycmVudEluZGV4OyBpPHRhcmdldEluZGV4OyBpKyspIHtcbiAgICAgICAgICBzb3J0ZWREcmFnZ2FibGVzW2krMV0ucGluUG9zaXRpb24ocGlubmVkUG9zaXRpb25zW2ldLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGRyYWdnYWJsZS5uYXRpdmVEcmFnQW5kRHJvcCkge1xuICAgICAgICBkcmFnZ2FibGUucGluUG9zaXRpb24ocGlubmVkUG9zaXRpb25zW3RhcmdldEluZGV4XSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbiA9IHBpbm5lZFBvc2l0aW9uc1t0YXJnZXRJbmRleF1cbiAgICAgIH1cblxuICAgICAgdGhpcy5jaGFuZ2VkRHVyaW5nSXRlcmF0aW9uID0gdHJ1ZVxuICAgIH1cbiAgfVxuXG4gIG9uRW5kKGRyYWdnYWJsZSkge1xuICAgIGlmICh0aGlzLmNoYW5nZWREdXJpbmdJdGVyYXRpb24pIHtcbiAgICAgIHRoaXMuZW1pdCgnbGlzdDpjaGFuZ2UnKVxuICAgICAgdGhpcy5jaGFuZ2VkRHVyaW5nSXRlcmF0aW9uID0gZmFsc2VcblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZW9yZGVyT25DaGFuZ2UgJiYgdGhpcy5vcHRpb25zLmNvbnRhaW5lcikge1xuICAgICAgICB0aGlzLnJlb3JkZXJFbGVtZW50cyhkcmFnZ2FibGUpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVvcmRlckVsZW1lbnRzKG1vdmVkRHJhZ2dhYmxlKSB7XG4gICAgY29uc3Qgc29ydGVkRHJhZ2dhYmxlcyA9IHRoaXMuZ2V0U29ydGVkRHJhZ2dhYmxlcygpXG4gICAgY29uc3QgaW5kZXggPSBzb3J0ZWREcmFnZ2FibGVzLmluZGV4T2YobW92ZWREcmFnZ2FibGUpXG4gICAgY29uc3QgbmV4dCA9IHNvcnRlZERyYWdnYWJsZXNbaW5kZXggKyAxXVxuXG4gICAgdGhpcy5yZXNldCgpXG5cbiAgICBpZiAobmV4dCkge1xuICAgICAgdGhpcy5jb250YWluZXIuaW5zZXJ0QmVmb3JlKG1vdmVkRHJhZ2dhYmxlLmVsZW1lbnQsIG5leHQuZWxlbWVudClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQobW92ZWREcmFnZ2FibGUuZWxlbWVudClcbiAgICB9XG5cbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZCkgPT4gZC5zdGFydFBvc2l0aW9uaW5nKCkpXG4gICAgdGhpcy5lbWl0KCdsaXN0OnJlb3JkZXJlZCcpXG4gIH1cblxuICBnZXRDdXJyZW50UGlubmVkUG9zaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbi5jbG9uZSgpKVxuICB9XG5cbiAgZ2V0U29ydGVkRHJhZ2dhYmxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5kcmFnZ2FibGVzLnNvcnQodGhpcy5zb3J0aW5nLmJpbmQodGhpcykpXG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucmVzZXRQb3NpdGlvblRvSW5pdGlhbCgpKVxuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucmVmcmVzaCgpKVxuICB9XG5cbiAgYWRkKGRyYWdnYWJsZXMpIHtcbiAgICBpZiAoIShkcmFnZ2FibGVzIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgICBkcmFnZ2FibGVzID0gW2RyYWdnYWJsZXNdXG4gICAgfVxuICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB0aGlzLmluaXREcmFnZ2FibGUoZHJhZ2dhYmxlKSlcbiAgICB0aGlzLmRyYWdnYWJsZXMgPSB0aGlzLmRyYWdnYWJsZXMuY29uY2F0KGRyYWdnYWJsZXMpXG4gIH1cblxuICByZW1vdmUoZHJhZ2dhYmxlcykge1xuICAgIGNvbnN0IGluaXRpYWxQb3NpdGlvbnMgPSB0aGlzLmRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5pbml0aWFsUG9zaXRpb24pXG4gICAgY29uc3QgbGlzdCA9IFtdXG4gICAgY29uc3Qgc29ydGVkRHJhZ2dhYmxlcyA9IHRoaXMuZ2V0U29ydGVkRHJhZ2dhYmxlcygpXG5cbiAgICBpZiAoIShkcmFnZ2FibGVzIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgICBkcmFnZ2FibGVzID0gW2RyYWdnYWJsZXNdXG4gICAgfVxuXG4gICAgZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHRoaXMucmVsZWFzZURyYWdnYWJsZShkcmFnZ2FibGUpKVxuXG4gICAgbGV0IGogPSAwXG4gICAgc29ydGVkRHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGlmICh0aGlzLmRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMSkge1xuICAgICAgICBpZiAoZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uICE9PSBpbml0aWFsUG9zaXRpb25zW2pdKSB7XG4gICAgICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKGluaXRpYWxQb3NpdGlvbnNbal0sIHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSlcbiAgICAgICAgfVxuICAgICAgICBkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uID0gaW5pdGlhbFBvc2l0aW9uc1tqXVxuICAgICAgICBqKytcbiAgICAgICAgbGlzdC5wdXNoKGRyYWdnYWJsZSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGxpc3RcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMucmVtb3ZlKHRoaXMuZHJhZ2dhYmxlcy5zbGljZSgpKVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUuZGVzdHJveSgpKVxuICAgIGlmICh0aGlzLmNvbnRhaW5lcikge1xuICAgICAgdGhpcy5yZXNpemVPYnNlcnZlci51bm9ic2VydmUodGhpcy5jb250YWluZXIpXG4gICAgfVxuICB9XG5cbiAgc29ydGluZyhkcmFnZ2FibGVBLCBkcmFnZ2FibGVCKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5zb3J0aW5nKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLnNvcnRpbmcoZHJhZ2dhYmxlQSwgZHJhZ2dhYmxlQilcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGRyYWdnYWJsZUEucGlubmVkUG9zaXRpb24ueSA8IGRyYWdnYWJsZUIucGlubmVkUG9zaXRpb24ueSkgcmV0dXJuIC0xXG4gICAgICBpZiAoZHJhZ2dhYmxlQS5waW5uZWRQb3NpdGlvbi55ID4gZHJhZ2dhYmxlQi5waW5uZWRQb3NpdGlvbi55KSByZXR1cm4gMVxuICAgICAgaWYgKGRyYWdnYWJsZUEucGlubmVkUG9zaXRpb24ueCA8IGRyYWdnYWJsZUIucGlubmVkUG9zaXRpb24ueCkgcmV0dXJuIC0xXG4gICAgICBpZiAoZHJhZ2dhYmxlQS5waW5uZWRQb3NpdGlvbi54ID4gZHJhZ2dhYmxlQi5waW5uZWRQb3NpdGlvbi54KSByZXR1cm4gMVxuICAgICAgcmV0dXJuIDBcbiAgICB9XG4gIH1cblxuICBnZXQgZGlzdGFuY2VGdW5jKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZ2V0RGlzdGFuY2UgfHwgZ2V0RGlzdGFuY2VcbiAgfVxuXG4gIGdldCBwb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q3VycmVudFBpbm5lZFBvc2l0aW9ucygpXG4gIH1cblxuICBzZXQgcG9zaXRpb25zKHBvc2l0aW9ucykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSAnd3JvbmcgYXJyYXkgbGVuZ3RoJ1xuICAgIGlmIChwb3NpdGlvbnMubGVuZ3RoID09PSB0aGlzLmRyYWdnYWJsZXMubGVuZ3RoKSB7XG4gICAgICBwb3NpdGlvbnMuZm9yRWFjaCgocG9pbnQsIGkpID0+IHtcbiAgICAgICAgdGhpcy5kcmFnZ2FibGVzW2ldLnBpblBvc2l0aW9uKHBvaW50KVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbWVzc2FnZVxuICAgIH1cbiAgfVxuXG4gIGdldCBlbmFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZVxuICB9XG5cbiAgc2V0IGVuYWJsZShlbmFibGUpIHtcbiAgICB0aGlzLl9lbmFibGUgPSBlbmFibGVcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUuZW5hYmxlID0gZW5hYmxlXG4gICAgfSlcbiAgfVxuXG4gIHN0YXRpYyBmYWN0b3J5KGNvbnRhaW5lckVsZW1lbnQsIGVsZW1lbnRzLCBvcHRpb25zPXt9KSB7XG4gICAgY29uc3QgZHJhZ2dhYmxlcyA9IEFycmF5LmZyb20oZWxlbWVudHMpLm1hcCgoZWxlbWVudCkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBEcmFnZ2FibGUoZWxlbWVudCwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyRWxlbWVudFxuICAgICAgfSwgb3B0aW9ucy5kcmFnZ2FibGUgfHwge30pKVxuICAgIH0pXG5cbiAgICByZXR1cm4gbmV3IExpc3QoZHJhZ2dhYmxlcywgT2JqZWN0LmFzc2lnbih7XG4gICAgICBjb250YWluZXI6IGNvbnRhaW5lckVsZW1lbnRcbiAgICB9LCBvcHRpb25zLmxpc3QgfHwge30pKVxuICB9XG59XG4iLCJpbXBvcnQgTGlzdCBmcm9tICcuL2xpc3QnXG5pbXBvcnQgeyBpbmRleE9mTmVhcmVzdFBvaW50LCBnZXRZRGlmZmVyZW5jZSB9IGZyb20gJy4vZ2VvbWV0cnkvZGlzdGFuY2VzJ1xuaW1wb3J0IFBvaW50IGZyb20gJy4vZ2VvbWV0cnkvcG9pbnQnXG5cbmltcG9ydCBEcmFnZ2FibGUgZnJvbSAnLi9kcmFnZ2FibGUnXG5cbmNvbnN0IGFycmF5TW92ZSA9IChhcnJheSwgZnJvbSwgdG8pID0+IHtcbiAgYXJyYXkuc3BsaWNlKHRvIDwgMCA/IGFycmF5Lmxlbmd0aCArIHRvIDogdG8sIDAsIGFycmF5LnNwbGljZShmcm9tLCAxKVswXSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnViYmxpbmdMaXN0IGV4dGVuZHMgTGlzdCB7XG4gIGF1dG9EZXRlY3RWZXJ0aWNhbEdhcCgpIHtcbiAgICBpZiAoIXRoaXMuX3ZlcnRpY2FsR2FwICYmICF0aGlzLm9wdGlvbnMudmVydGljYWxHYXAgJiYgdGhpcy5kcmFnZ2FibGVzLmxlbmd0aCA+PSAyKSB7XG4gICAgICBjb25zdCBzb3J0ZWQgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuICAgICAgdGhpcy5fdmVydGljYWxHYXAgPSBzb3J0ZWRbMV0ucGlubmVkUG9zaXRpb24ueSAtIHNvcnRlZFswXS5waW5uZWRQb3NpdGlvbi55IC0gc29ydGVkWzBdLmdldFNpemUoKS55XG4gICAgfVxuICB9XG5cbiAgYXV0b0RldGVjdFN0YXJ0UG9zaXRpb24oKSB7XG4gICAgaWYgKHRoaXMuZHJhZ2dhYmxlcy5sZW5ndGggPj0gMSAmJiAhdGhpcy5zdGFydFBvc2l0aW9uKSB7XG4gICAgICB0aGlzLnN0YXJ0UG9zaXRpb24gPSB0aGlzLmRyYWdnYWJsZXNbMF0ucGlubmVkUG9zaXRpb25cbiAgICB9XG4gIH1cblxuICBpbml0RHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIHN1cGVyLmluaXREcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICAgIGRyYWdnYWJsZS5vbignZHJhZzpzdGFydCcsICgpID0+IHRoaXMub25EcmFnU3RhcnQoZHJhZ2dhYmxlKSlcbiAgfVxuXG4gIG9uRHJhZ1N0YXJ0KGRyYWdnYWJsZSkge1xuICAgIHRoaXMuYXV0b0RldGVjdFZlcnRpY2FsR2FwKClcbiAgICB0aGlzLmF1dG9EZXRlY3RTdGFydFBvc2l0aW9uKClcbiAgICB0aGlzLmNhY2hlZFNvcnRlZERyYWdnYWJsZXMgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuICAgIHRoaXMuaW5kZXhPZkFjdGl2ZURyYWdnYWJsZSA9IHRoaXMuY2FjaGVkU29ydGVkRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSlcbiAgfVxuXG4gIG9uTW92ZShkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBwcmV2RHJhZ2dhYmxlID0gdGhpcy5jYWNoZWRTb3J0ZWREcmFnZ2FibGVzW3RoaXMuaW5kZXhPZkFjdGl2ZURyYWdnYWJsZSAtIDFdXG4gICAgY29uc3QgbmV4dERyYWdnYWJsZSA9IHRoaXMuY2FjaGVkU29ydGVkRHJhZ2dhYmxlc1t0aGlzLmluZGV4T2ZBY3RpdmVEcmFnZ2FibGUgKyAxXVxuICAgIGNvbnN0IGN1cnJlbnRQb3NpdGlvbiA9IGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvblxuXG4gICAgbGV0IGN1cnJlbnRPcmRlclxuICAgIGxldCB0YXJnZXRJbmRleFxuXG4gICAgaWYoZHJhZ2dhYmxlLnVwRGlyZWN0aW9uICYmIHByZXZEcmFnZ2FibGUpIHtcbiAgICAgIGN1cnJlbnRPcmRlciA9IFtwcmV2RHJhZ2dhYmxlLCBkcmFnZ2FibGVdLm1hcCgoZCkgPT4gZC5waW5uZWRQb3NpdGlvbilcbiAgICAgIHRhcmdldEluZGV4ID0gaW5kZXhPZk5lYXJlc3RQb2ludChjdXJyZW50T3JkZXIsIGRyYWdnYWJsZS5wb3NpdGlvbiwgMTAwMDAsIHRoaXMuZGlzdGFuY2VGdW5jKVxuXG4gICAgICBpZiAodGFyZ2V0SW5kZXggPT09IDApIHtcbiAgICAgICAgaWYoZHJhZ2dhYmxlLnNob3VsZFVzZU5hdGl2ZURyYWdBbmREcm9wKCkpIHtcbiAgICAgICAgICBkcmFnZ2FibGUucGluUG9zaXRpb24ocHJldkRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24gPSBwcmV2RHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uLmNsb25lKClcbiAgICAgICAgfVxuICAgICAgICBwcmV2RHJhZ2dhYmxlLnBpblBvc2l0aW9uKG5ldyBQb2ludChcbiAgICAgICAgICBjdXJyZW50UG9zaXRpb24ueCxcbiAgICAgICAgICBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24ueSArIGRyYWdnYWJsZS5nZXRTaXplKCkueSArIHRoaXMudmVydGljYWxHYXBcbiAgICAgICAgKSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICBhcnJheU1vdmUodGhpcy5jYWNoZWRTb3J0ZWREcmFnZ2FibGVzLCB0aGlzLmluZGV4T2ZBY3RpdmVEcmFnZ2FibGUtLSwgdGhpcy5pbmRleE9mQWN0aXZlRHJhZ2dhYmxlKVxuICAgICAgICB0aGlzLm9uTW92ZShkcmFnZ2FibGUpXG4gICAgICAgIHRoaXMuY2hhbmdlZER1cmluZ0l0ZXJhdGlvbiA9IHRydWVcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYoZHJhZ2dhYmxlLmRvd25EaXJlY3Rpb24gJiYgbmV4dERyYWdnYWJsZSkge1xuICAgICAgY3VycmVudE9yZGVyID0gW2RyYWdnYWJsZSwgbmV4dERyYWdnYWJsZV0ubWFwKChkKSA9PiBkLnBpbm5lZFBvc2l0aW9uKVxuICAgICAgdGFyZ2V0SW5kZXggPSBpbmRleE9mTmVhcmVzdFBvaW50KGN1cnJlbnRPcmRlciwgZHJhZ2dhYmxlLnBvc2l0aW9uLCAxMDAwMCwgdGhpcy5kaXN0YW5jZUZ1bmMpXG5cbiAgICAgIGlmKHRhcmdldEluZGV4ID09PSAxKSB7XG4gICAgICAgIG5leHREcmFnZ2FibGUucGluUG9zaXRpb24oZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICAgIGNvbnN0IGRyYWdnYWJsZU5ld1Bvc2l0aW9uID0gbmV3IFBvaW50KFxuICAgICAgICAgIG5leHREcmFnZ2FibGUucGlubmVkUG9zaXRpb24ueCxcbiAgICAgICAgICBuZXh0RHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uLnkgKyBuZXh0RHJhZ2dhYmxlLmdldFNpemUoKS55ICsgdGhpcy52ZXJ0aWNhbEdhcFxuICAgICAgICApXG4gICAgICAgIGlmKGRyYWdnYWJsZS5zaG91bGRVc2VOYXRpdmVEcmFnQW5kRHJvcCgpKSB7XG4gICAgICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKGRyYWdnYWJsZU5ld1Bvc2l0aW9uKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbiA9IGRyYWdnYWJsZU5ld1Bvc2l0aW9uXG4gICAgICAgIH1cbiAgICAgICAgYXJyYXlNb3ZlKHRoaXMuY2FjaGVkU29ydGVkRHJhZ2dhYmxlcywgdGhpcy5pbmRleE9mQWN0aXZlRHJhZ2dhYmxlKyssIHRoaXMuaW5kZXhPZkFjdGl2ZURyYWdnYWJsZSlcbiAgICAgICAgdGhpcy5vbk1vdmUoZHJhZ2dhYmxlKVxuICAgICAgICB0aGlzLmNoYW5nZWREdXJpbmdJdGVyYXRpb24gPSB0cnVlXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYnViYmxpbmcoc29ydGVkRHJhZ2dhYmxlcywgY3VycmVudERyYWdnYWJsZSkge1xuICAgIGNvbnN0IGN1cnJlbnRQb3NpdGlvbiA9IHRoaXMuc3RhcnRQb3NpdGlvbi5jbG9uZSgpXG4gICAgc29ydGVkRHJhZ2dhYmxlcyB8fD0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcblxuICAgIHNvcnRlZERyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBpZiAoIWRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbi5jb21wYXJlKGN1cnJlbnRQb3NpdGlvbikpIHtcbiAgICAgICAgaWYgKGRyYWdnYWJsZSA9PT0gY3VycmVudERyYWdnYWJsZSAmJiAhY3VycmVudERyYWdnYWJsZS5zaG91bGRVc2VOYXRpdmVEcmFnQW5kRHJvcCgpKSB7XG4gICAgICAgICAgZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uID0gY3VycmVudFBvc2l0aW9uLmNsb25lKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkcmFnZ2FibGUucGluUG9zaXRpb24oY3VycmVudFBvc2l0aW9uLCAoZHJhZ2dhYmxlID09PSBjdXJyZW50RHJhZ2dhYmxlKSA/IDAgOiB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY3VycmVudFBvc2l0aW9uLnkgPSBjdXJyZW50UG9zaXRpb24ueSArIGRyYWdnYWJsZS5nZXRTaXplKCkueSArIHRoaXMudmVydGljYWxHYXBcbiAgICB9KVxuICB9XG5cbiAgcmVtb3ZlKGRyYWdnYWJsZXMpIHtcbiAgICBpZiAoIShkcmFnZ2FibGVzIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgICBkcmFnZ2FibGVzID0gW2RyYWdnYWJsZXNdXG4gICAgfVxuXG4gICAgZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHRoaXMucmVsZWFzZURyYWdnYWJsZShkcmFnZ2FibGUpKVxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IHRoaXMuZHJhZ2dhYmxlcy5maWx0ZXIoKGQpID0+ICFkcmFnZ2FibGVzLmluY2x1ZGVzKGQpKVxuXG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGQpID0+IGQuc3RhcnRQb3NpdGlvbmluZygpKVxuXG4gICAgaWYodGhpcy5kcmFnZ2FibGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuYXV0b0RldGVjdFZlcnRpY2FsR2FwKClcbiAgICAgIHRoaXMuYXV0b0RldGVjdFN0YXJ0UG9zaXRpb24oKVxuICAgICAgdGhpcy5idWJibGluZygpXG4gICAgfVxuICB9XG5cbiAgZ2V0IGRpc3RhbmNlRnVuYygpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmdldERpc3RhbmNlIHx8IGdldFlEaWZmZXJlbmNlXG4gIH1cblxuICBnZXQgdmVydGljYWxHYXAoKSB7XG4gICAgaWYodGhpcy5vcHRpb25zLnZlcnRpY2FsR2FwKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLnZlcnRpY2FsR2FwXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYXV0b0RldGVjdFZlcnRpY2FsR2FwKClcbiAgICAgIHJldHVybiB0aGlzLl92ZXJ0aWNhbEdhcCB8fCAwXG4gICAgfVxuICB9XG5cbiAgc2V0IHZlcnRpY2FsR2FwKGdhcFZhbHVlKSB7XG4gICAgdGhpcy5vcHRpb25zLnZlcnRpY2FsR2FwID0gZ2FwVmFsdWVcbiAgfVxuXG4gIHN0YXRpYyBmYWN0b3J5KGNvbnRhaW5lckVsZW1lbnQsIGVsZW1lbnRzLCBvcHRpb25zPXt9KSB7XG4gICAgY29uc3QgZHJhZ2dhYmxlcyA9IEFycmF5LmZyb20oZWxlbWVudHMpLm1hcCgoZWxlbWVudCkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBEcmFnZ2FibGUoZWxlbWVudCwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyRWxlbWVudFxuICAgICAgfSwgb3B0aW9ucy5kcmFnZ2FibGUgfHwge30pKVxuICAgIH0pXG5cbiAgICByZXR1cm4gbmV3IEJ1YmJsaW5nTGlzdChkcmFnZ2FibGVzLCBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyRWxlbWVudFxuICAgIH0sIG9wdGlvbnMubGlzdCB8fCB7fSkpXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJnZXRTdW1WYWx1ZU9mU3R5bGVSdWxlcyIsImVsZW1lbnQiLCJydWxlcyIsInJlZHVjZSIsInN1bSIsInJ1bGUiLCJwYXJzZUludCIsIndpbmRvdyIsImdldENvbXB1dGVkU3R5bGUiLCJQb2ludCIsIngiLCJ5IiwicCIsImsiLCJwYXJlbnQiLCJwYXJlbnROb2RlIiwiZWxlbWVudFJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJwYXJlbnRSZWN0IiwibGVmdCIsInRvcCIsImlzQ29udGVudEJveFNpemUiLCJ3aWR0aCIsImhlaWdodCIsIlJlY3RhbmdsZSIsInBvc2l0aW9uIiwic2l6ZSIsImFkZCIsIm11bHQiLCJyZWN0IiwiTWF0aCIsIm1pbiIsIm1heCIsInN1YiIsInJlY3RhbmdsZSIsImluY2x1ZGVQb2ludCIsImdldFAzIiwiYXhpcyIsInNlbEF4aXMiLCJjcm9zc1JlY3RhbmdsZSIsImFuZCIsInRoaXNDZW50ZXIiLCJnZXRDZW50ZXIiLCJyZWN0Q2VudGVyIiwic2lnbiIsIm9mZnNldCIsImVsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic3R5bGUiLCJpc0NvbnNpZGVyVHJhbnNsYXRlIiwiZWxlbWVudE9mZnNldCIsImVsZW1lbnRTaXplIiwiZ2V0RGVmYXVsdENvbnRhaW5lciIsImNvbnRhaW5lciIsInRhZ05hbWUiLCJFdmVudEVtaXR0ZXIiLCJvcHRpb25zIiwiZXZlbnRzIiwib24iLCJPYmplY3QiLCJlbnRyaWVzIiwiZXZlbnROYW1lIiwiZm4iLCJpbnRlcnJ1cHRlZCIsImFyZ3MiLCJzbGljZSIsImNhbGwiLCJhcmd1bWVudHMiLCJmdW5jIiwicHVzaCIsInVuc2hpZnQiLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJnZXREaXN0YW5jZSIsInAxIiwicDIiLCJkeCIsImR5Iiwic3FydCIsImdldFhEaWZmZXJlbmNlIiwiYWJzIiwiZ2V0WURpZmZlcmVuY2UiLCJ0cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5IiwicG93IiwiaW5kZXhPZk5lYXJlc3RQb2ludCIsImFyciIsInZhbCIsInJhZGl1cyIsImdldERpc3RhbmNlRnVuYyIsImkiLCJ0ZW1wIiwibGVuZ3RoIiwiZGlyZWN0Q3Jvc3NpbmciLCJMMVAxIiwiTDFQMiIsIkwyUDEiLCJMMlAyIiwiazEiLCJrMiIsImIxIiwiYjIiLCJib3VuZFRvTGluZSIsIkEiLCJCIiwiUCIsIkFQIiwiQUIiLCJhYjIiLCJhcF9hYiIsInQiLCJnZXRQb2ludE9uTGluZUJ5TGVuZ2h0IiwiTFAxIiwiTFAyIiwibGVuZ2h0IiwicGVyY2VudCIsImFkZFBvaW50VG9Cb3VuZFBvaW50cyIsImJvdW5kcG9pbnRzIiwicG9pbnQiLCJpc1JpZ2h0IiwicmVzdWx0IiwiZmlsdGVyIiwiYlBvaW50IiwiZ2V0QW5nbGVEaWZmIiwiYWxwaGEiLCJiZXRhIiwibWluQW5nbGUiLCJtYXhBbmdsZSIsIlBJIiwiZ2V0QW5nbGUiLCJkaWZmIiwibm9ybWFsaXplQW5nbGUiLCJhdGFuMiIsImJvdW5kQW5nbGUiLCJkbWluIiwiZG1heCIsImdldFBvaW50RnJvbVJhZGlhbFN5c3RlbSIsImFuZ2xlIiwiY2VudGVyIiwiY29zIiwic2luIiwiQm91bmQiLCJfc2l6ZSIsImluc3RhbmNlIiwiYm91bmQiLCJiaW5kIiwiQm91bmRUb1JlY3RhbmdsZSIsImNhbGNQb2ludCIsImNsb25lIiwicmVjdFAyIiwiQm91bmRUb0VsZW1lbnQiLCJmcm9tRWxlbWVudCIsIkJvdW5kVG9MaW5lWCIsInN0YXJ0WSIsImVuZFkiLCJCb3VuZFRvTGluZVkiLCJzdGFydFgiLCJlbmRYIiwiQm91bmRUb0xpbmUiLCJzdGFydFBvaW50IiwiZW5kUG9pbnQiLCJzb21lSyIsImNvc0JldGEiLCJzaW5CZXRhIiwicG9pbnQyIiwibmV3RW5kUG9pbnQiLCJwb2ludENyb3NzaW5nIiwiQm91bmRUb0NpcmNsZSIsIkJvdW5kVG9BcmMiLCJzdGFydEFuZ2xlIiwiZW5kQW5nbGUiLCJfc3RhcnRBbmdsZSIsIl9lbmRBbmdsZSIsImFycmF5IiwicmFuZ2UiLCJzdGFydCIsInN0b3AiLCJzdGVwIiwiQmFzaWNTdHJhdGVneSIsIk5vdENyb3NzaW5nU3RyYXRlZ3kiLCJyZWN0YW5nbGVMaXN0IiwiaW5kZXhlc09mTmV3cyIsInN0YXRpY1JlY3RhbmdsZUluZGV4ZXMiLCJpbmRleGVzIiwiX3JlY3QiLCJmb3JFYWNoIiwicmVtb3ZhYmxlIiwiaW5kZXhPZlN0YXRpYyIsInN0YXRpY1JlY3QiLCJtb3ZlVG9Cb3VuZCIsInNvbWUiLCJib3VuZFJlY3QiLCJnZXRTcXVhcmUiLCJvZGxEcmFnZ2FibGVzTGlzdCIsIm5ld0RyYWdnYWJsZXMiLCJpbmRleE9mTmV3cyIsImRyYWdnYWJsZXMiLCJjb25jYXQiLCJkcmFnZ2FibGUiLCJGbG9hdExlZnRTdHJhdGVneSIsImFzc2lnbiIsInBhZGRpbmdUb3BMZWZ0IiwicGFkZGluZ0JvdHRvbVJpZ2h0IiwieUdhcEJldHdlZW5EcmFnZ2FibGVzIiwiZ2V0UG9zaXRpb24iLCJfaW5kZXhlc09mTmV3cyIsImdldFAyIiwiYm91bmRhcnlQb2ludHMiLCJyZWN0SW5kZXgiLCJpc1ZhbGlkIiwibmV3TGlzdCIsImxpc3RPbGRQb3NpdGlvbiIsIm1hcCIsIm5ld0RyYWdnYWJsZSIsIkZsb2F0UmlnaHRTdHJhdGVneSIsInBhZGRpbmdUb3BSaWdodCIsInBhZGRpbmdCb3R0b21MZWZ0IiwicGFkZGluZ0JvdHRvbU5lZ0xlZnQiLCJnZXRQNCIsImFkZFRvRGVmYXVsdFNjb3BlIiwidGFyZ2V0IiwiZGVmYXVsdFNjb3BlIiwiYWRkVGFyZ2V0IiwiVGFyZ2V0IiwidGltZUVuZCIsInRpbWVFeGNhbmdlIiwicG9zaXRpb25pbmdTdHJhdGVneSIsInN0cmF0ZWd5IiwiZ2V0UmVjdGFuZ2xlIiwidGFyZ2V0cyIsImVtaXR0ZXIiLCJlbWl0Iiwic3RhcnRCb3VuZGluZyIsImluaXQiLCJib3VuZGluZyIsImluZGV4ZXNPZk5ldyIsInBvc2l0aW9uaW5nIiwib2xkRHJhZ2dhYmxlcyIsInNvcnRpbmciLCJyZWN0YW5nbGVzIiwiaW5uZXJEcmFnZ2FibGVzIiwic2V0UG9zaXRpb24iLCJjYXRjaERyYWdnYWJsZSIsInRhcmdldFJlY3RhbmdsZSIsImRyYWdnYWJsZVNxdWFyZSIsInNjb3BlcyIsInNjb3BlIiwicmVtb3ZlSXRlbSIsIm5ld0RyYWdnYWJsZXNJbmRleCIsImdldFNpemUiLCJhZGRSZW1vdmVPbk1vdmUiLCJ0aW1lIiwibW92ZSIsImluaXRpYWxQb3NpdGlvbiIsInB1c2hJbm5lckRyYWdnYWJsZSIsInJlbW92ZUhhbmRsZXIiLCJyZW1vdmUiLCJ1bnN1YnNjcmliZSIsIl9jb250YWluZXIiLCJTY29wZSIsImRyYWdFbmRBY3Rpb24iLCJvbkVuZCIsInNob3RUYXJnZXRzIiwic29ydCIsImEiLCJiIiwicGluUG9zaXRpb24iLCJyZXNldCIsInJlZnJlc2giLCJwb3NpdGlvbnMiLCJtZXNzYWdlIiwidGFyZ2V0SW5kZXhlcyIsImN1cnJlbnRTY29wZSIsImFkZERyYWdnYWJsZVRvU2NvcGUiLCJhZGREcmFnZ2FibGUiLCJEcmFnZ2FibGUiLCJpbnRlcnJ1cHQiLCJhZGRUYXJnZXRUb1Njb3BlIiwicHJlcGVuZE9uIiwiY2hlY2tTdXBwb3J0UGFzc2l2ZUV2ZW50cyIsInBhc3NpdmVTdXBwb3J0ZWQiLCJkZWZpbmVQcm9wZXJ0eSIsImdldCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiX2VyciIsImlzU3VwcG9ydFBhc3NpdmVFdmVudHMiLCJ0aHJvdHRsZSIsIndhaXQiLCJsYXN0VGltZSIsImV4ZWN1dGVkRnVuY3Rpb24iLCJjb250ZXh0Iiwibm93IiwiRGF0ZSIsImFwcGx5IiwidGhyb3R0bGVkRHJhZ092ZXIiLCJjYWxsYmFjayIsImR1cmF0aW9uIiwidGhyb3R0bGVkQ2FsbGJhY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicGFzc2l2ZUZhbHNlIiwicGFzc2l2ZSIsImlzVG91Y2giLCJtb3VzZUV2ZW50cyIsImVuZCIsInRvdWNoRXZlbnRzIiwidHJhbnNmb3JtUHJvcGVydHkiLCJnZXRTdHlsZVByb3BlcnR5IiwidHJhbnNpdGlvblByb3BlcnR5IiwiZ2V0VG91Y2hCeUlEIiwidG91Y2hJZCIsImNoYW5nZWRUb3VjaGVzIiwiaWRlbnRpZmllciIsInByZXZlbnREb3VibGVJbml0IiwiZXhpc3RpbmciLCJjb3B5U3R5bGVzIiwic291cmNlIiwiZGVzdGluYXRpb24iLCJjcyIsImtleSIsImNoaWxkcmVuIiwiX2VuYWJsZSIsInN0YXJ0UG9zaXRpb25pbmciLCJzdGFydExpc3RlbmluZyIsIl9zZXREZWZhdWx0VHJhbnNpdGlvbiIsInBpbm5lZFBvc2l0aW9uIiwiX2RyYWdTdGFydCIsImRyYWdTdGFydCIsIl9kcmFnTW92ZSIsImRyYWdNb3ZlIiwiX2RyYWdFbmQiLCJkcmFnRW5kIiwiX25hdGl2ZURyYWdTdGFydCIsIm5hdGl2ZURyYWdTdGFydCIsIl9uYXRpdmVEcmFnT3ZlciIsIm5hdGl2ZURyYWdPdmVyIiwiZHJhZ092ZXJUaHJvdHRsZUR1cmF0aW9uIiwiX25hdGl2ZURyYWdFbmQiLCJuYXRpdmVEcmFnRW5kIiwiX25hdGl2ZURyb3AiLCJuYXRpdmVEcm9wIiwiX3Njcm9sbCIsIm9uU2Nyb2xsIiwiaGFuZGxlciIsIl90cmFuc2Zvcm1Qb3NpdGlvbiIsInRyYW5zaXRpb24iLCJ0cmFuc2l0aW9uQ3NzIiwidGVzdCIsInJlcGxhY2UiLCJ0cmFuc2xhdGVDc3MiLCJ0cmFuc2Zvcm0iLCJzaG91bGRSZW1vdmVaZXJvVHJhbnNsYXRlIiwiaXNTaWxlbnQiLCJfc2V0VHJhbnNpdGlvbiIsIl9zZXRUcmFuc2xhdGUiLCJzaWxlbnQiLCJfcHJldmlvdXNEaXJlY3Rpb25Qb3NpdGlvbiIsIl9zdGFydFBvc2l0aW9uIiwibGVmdERpcmVjdGlvbiIsInJpZ2h0RGlyZWN0aW9uIiwidXBEaXJlY3Rpb24iLCJkb3duRGlyZWN0aW9uIiwiX3N0YXJ0VG91Y2hUaW1lc3RhbXAiLCJ0b3VjaERyYWdnaW5nVGhyZXNob2xkIiwiaXNUb3VjaEV2ZW50IiwibmF0aXZlRHJhZ0FuZERyb3AiLCJlbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3BPblRvdWNoIiwiVG91Y2hFdmVudCIsInRvdWNoUG9pbnQiLCJfc3RhcnRUb3VjaFBvaW50IiwicGFnZVgiLCJjbGllbnRYIiwicGFnZVkiLCJjbGllbnRZIiwiX3RvdWNoSWQiLCJfc3RhcnRTY3JvbGxQb2ludCIsInNjcm9sbFgiLCJzY3JvbGxZIiwiSFRNTElucHV0RWxlbWVudCIsImZvY3VzIiwic2hvdWxkVXNlTmF0aXZlRHJhZ0FuZERyb3AiLCJlbXVsYXRlT25GaXJzdE1vdmUiLCJzZWVtc1Njcm9sbGluZyIsImNhbmNlbERyYWdnaW5nIiwiZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wIiwiY2FuY2VsRW11bGF0aW9uIiwidG91Y2giLCJpc0RyYWdnaW5nIiwic3RvcFByb3BhZ2F0aW9uIiwic2Nyb2xsUG9pbnQiLCJkZXRlcm1pbmVEaXJlY3Rpb24iLCJjbGFzc0xpc3QiLCJzZXRUaW1lb3V0IiwiX2V2ZW50IiwiZGF0YVRyYW5zZmVyIiwic2V0RGF0YSIsImVmZmVjdEFsbG93ZWQiLCJkcm9wRWZmZWN0IiwicmVtb3ZlQXR0cmlidXRlIiwiY29udGFpbmVyUmVjdCIsImNsb25lZEVsZW1lbnQiLCJjbG9uZU5vZGUiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJlbXVsYXRpb25EcmFnZ2FibGUiLCJjb250YWluZXJSZWN0UG9pbnQiLCJkZXN0cm95IiwicmVtb3ZlQ2hpbGQiLCJyZXNldEVtaXR0ZXIiLCJfaGFuZGxlciIsImVuYWJsZSIsIlJlc2l6ZU9ic2VydmVyIiwiZGVib3VuY2UiLCJpbW1lZGlhdGUiLCJ0aW1lb3V0IiwibGF0ZXIiLCJjYWxsTm93IiwiY2xlYXJUaW1lb3V0IiwiUG9seWZpbGwiLCJMaXN0IiwiY2hhbmdlZER1cmluZ0l0ZXJhdGlvbiIsInJlc2l6ZU9ic2VydmVyIiwib25SZXNpemUiLCJvYnNlcnZlIiwicmVvcmRlck9uQ2hhbmdlIiwiZCIsImluaXREcmFnZ2FibGUiLCJvbk1vdmUiLCJ1bm9ic2VydmUiLCJyZXNldE9uIiwic29ydGVkRHJhZ2dhYmxlcyIsImdldFNvcnRlZERyYWdnYWJsZXMiLCJwaW5uZWRQb3NpdGlvbnMiLCJjdXJyZW50SW5kZXgiLCJ0YXJnZXRJbmRleCIsImRpc3RhbmNlRnVuYyIsInJlb3JkZXJFbGVtZW50cyIsIm1vdmVkRHJhZ2dhYmxlIiwibmV4dCIsImluc2VydEJlZm9yZSIsInJlc2V0UG9zaXRpb25Ub0luaXRpYWwiLCJBcnJheSIsImluaXRpYWxQb3NpdGlvbnMiLCJsaXN0IiwicmVsZWFzZURyYWdnYWJsZSIsImoiLCJkcmFnZ2FibGVBIiwiZHJhZ2dhYmxlQiIsImdldEN1cnJlbnRQaW5uZWRQb3NpdGlvbnMiLCJjb250YWluZXJFbGVtZW50IiwiZWxlbWVudHMiLCJmcm9tIiwiYXJyYXlNb3ZlIiwidG8iLCJCdWJibGluZ0xpc3QiLCJfdmVydGljYWxHYXAiLCJ2ZXJ0aWNhbEdhcCIsInNvcnRlZCIsInN0YXJ0UG9zaXRpb24iLCJvbkRyYWdTdGFydCIsImF1dG9EZXRlY3RWZXJ0aWNhbEdhcCIsImF1dG9EZXRlY3RTdGFydFBvc2l0aW9uIiwiY2FjaGVkU29ydGVkRHJhZ2dhYmxlcyIsImluZGV4T2ZBY3RpdmVEcmFnZ2FibGUiLCJwcmV2RHJhZ2dhYmxlIiwibmV4dERyYWdnYWJsZSIsImN1cnJlbnRQb3NpdGlvbiIsImN1cnJlbnRPcmRlciIsImRyYWdnYWJsZU5ld1Bvc2l0aW9uIiwiY3VycmVudERyYWdnYWJsZSIsImNvbXBhcmUiLCJpbmNsdWRlcyIsImJ1YmJsaW5nIiwiZ2FwVmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUFBLFNBQVNBLHVCQUFULENBQWlDQyxPQUFqQyxFQUEwQ0MsS0FBMUMsRUFBaUQ7RUFDL0MsRUFBT0EsT0FBQUEsS0FBSyxDQUFDQyxNQUFOLENBQWEsVUFBQ0MsR0FBRCxFQUFNQyxJQUFOLEVBQWU7RUFDakMsSUFBQSxPQUFPRCxHQUFHLEdBQUdFLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QlAsT0FBeEIsQ0FBQSxDQUFpQ0ksSUFBakMsQ0FBQSxJQUF3QyxDQUF6QyxDQUFyQixDQUFBO0VBQ0QsR0FGTSxFQUVKLENBRkksQ0FBUCxD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
