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
      _this.resizeObserver = new ResizeObserver(function () {
        if (_this.options.reorderOnChange) _this.reset();

        _this.draggables.forEach(function (d) {
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
      value: function onEnd() {
        if (this.changedDuringIteration) {
          this.emit('list:change');
          this.changedDuringIteration = false;

          if (this.options.reorderOnChange && this.options.container) {
            this.reorderElements();
          }
        }
      }
    }, {
      key: "reorderElements",
      value: function reorderElements() {
        var orderedElements = this.getSortedDraggables().map(function (d) {
          return d.element;
        });
        var fragment = document.createDocumentFragment();
        orderedElements.forEach(function (element) {
          return fragment.appendChild(element);
        });
        this.reset();
        this.container.appendChild(fragment);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZGV2LmpzIiwic291cmNlcyI6WyIuLi9zcmMvZ2VvbWV0cnkvcG9pbnQuanMiLCIuLi9zcmMvZ2VvbWV0cnkvcmVjdGFuZ2xlLmpzIiwiLi4vc3JjL3V0aWxzL2dldC1kZWZhdWx0LWNvbnRhaW5lci5qcyIsIi4uL3NyYy9ldmVudEVtaXR0ZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvZGVzYW5kcm8tZ2V0LXN0eWxlLXByb3BlcnR5L2dldC1zdHlsZS1wcm9wZXJ0eS5qcyIsIi4uL3NyYy9nZW9tZXRyeS9kaXN0YW5jZXMuanMiLCIuLi9zcmMvZ2VvbWV0cnkvYm91bmRzLmpzIiwiLi4vc3JjL2dlb21ldHJ5L2FuZ2xlcy5qcyIsIi4uL3NyYy9ib3VuZGluZy5qcyIsIi4uL3NyYy91dGlscy9yZW1vdmUtYXJyYXktaXRlbS5qcyIsIi4uL3NyYy91dGlscy9yYW5nZS5qcyIsIi4uL3NyYy9wb3NpdGlvbmluZy5qcyIsIi4uL3NyYy90YXJnZXQuanMiLCIuLi9zcmMvc2NvcGUuanMiLCIuLi9zcmMvdXRpbHMvaXMtc3VwcG9ydC1wYXNzaXZlLWV2ZW50cy5qcyIsIi4uL3NyYy9kcmFnZ2FibGUuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL3V0aWxzL3Jlc2l6ZU9ic2VydmVycy5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvYWxnb3JpdGhtcy9oYXNBY3RpdmVPYnNlcnZhdGlvbnMuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL2FsZ29yaXRobXMvaGFzU2tpcHBlZE9ic2VydmF0aW9ucy5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvYWxnb3JpdGhtcy9kZWxpdmVyUmVzaXplTG9vcEVycm9yLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BqdWdnbGUvcmVzaXplLW9ic2VydmVyL2xpYi9SZXNpemVPYnNlcnZlckJveE9wdGlvbnMuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL3V0aWxzL2ZyZWV6ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvUmVzaXplT2JzZXJ2ZXJTaXplLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BqdWdnbGUvcmVzaXplLW9ic2VydmVyL2xpYi9ET01SZWN0UmVhZE9ubHkuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL3V0aWxzL2VsZW1lbnQuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL3V0aWxzL2dsb2JhbC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvYWxnb3JpdGhtcy9jYWxjdWxhdGVCb3hTaXplLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BqdWdnbGUvcmVzaXplLW9ic2VydmVyL2xpYi9SZXNpemVPYnNlcnZlckVudHJ5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BqdWdnbGUvcmVzaXplLW9ic2VydmVyL2xpYi9hbGdvcml0aG1zL2NhbGN1bGF0ZURlcHRoRm9yTm9kZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvYWxnb3JpdGhtcy9icm9hZGNhc3RBY3RpdmVPYnNlcnZhdGlvbnMuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL2FsZ29yaXRobXMvZ2F0aGVyQWN0aXZlT2JzZXJ2YXRpb25zQXREZXB0aC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvdXRpbHMvcHJvY2Vzcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvdXRpbHMvcXVldWVNaWNyb1Rhc2suanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL3V0aWxzL3F1ZXVlUmVzaXplT2JzZXJ2ZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL3V0aWxzL3NjaGVkdWxlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvUmVzaXplT2JzZXJ2YXRpb24uanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL1Jlc2l6ZU9ic2VydmVyRGV0YWlsLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BqdWdnbGUvcmVzaXplLW9ic2VydmVyL2xpYi9SZXNpemVPYnNlcnZlckNvbnRyb2xsZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL1Jlc2l6ZU9ic2VydmVyLmpzIiwiLi4vc3JjL2xpc3QuanMiLCIuLi9zcmMvYnViYmxpbmdMaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGdldFN1bVZhbHVlT2ZTdHlsZVJ1bGVzKGVsZW1lbnQsIHJ1bGVzKSB7XG4gIHJldHVybiBydWxlcy5yZWR1Y2UoKHN1bSwgcnVsZSkgPT4ge1xuICAgIHJldHVybiBzdW0gKyBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KVtydWxlXXx8MClcbiAgfSwgMClcbn1cblxuLyoqIENsYXNzIHJlcHJlc2VudGluZyBhIHBvaW50LiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9pbnQge1xuICAvKipcbiAgKiBDcmVhdGUgYSBwb2ludC5cbiAgKiBAcGFyYW0ge251bWJlcn0geCAtIFRoZSB4IHZhbHVlLlxuICAqIEBwYXJhbSB7bnVtYmVyfSB5IC0gVGhlIHkgdmFsdWUuXG4gICovXG4gIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICB0aGlzLnggPSB4XG4gICAgdGhpcy55ID0geVxuICB9XG5cbiAgYWRkKHApIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCArIHAueCwgdGhpcy55ICsgcC55KVxuICB9XG5cbiAgc3ViKHApIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCAtIHAueCwgdGhpcy55IC0gcC55KVxuICB9XG5cbiAgbXVsdChrKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnggKiBrLCB0aGlzLnkgKiBrKVxuICB9XG5cbiAgbmVnYXRpdmUoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCgtdGhpcy54LCAtdGhpcy55KVxuICB9XG5cbiAgY29tcGFyZShwKSB7XG4gICAgcmV0dXJuICh0aGlzLnggPT09IHAueCAmJiB0aGlzLnkgPT09IHAueSlcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54LCB0aGlzLnkpXG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gYHt4PSR7dGhpcy54fSx5PSR7dGhpcy55fWBcbiAgfVxuXG4gIHN0YXRpYyBlbGVtZW50T2Zmc2V0KGVsZW1lbnQsIHBhcmVudCkge1xuICAgIHBhcmVudCA9IHBhcmVudCB8fCBlbGVtZW50LnBhcmVudE5vZGVcbiAgICBjb25zdCBlbGVtZW50UmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICBjb25zdCBwYXJlbnRSZWN0ID0gcGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgcmV0dXJuIG5ldyBQb2ludChcbiAgICAgIGVsZW1lbnRSZWN0LmxlZnQgLSBwYXJlbnRSZWN0LmxlZnQsXG4gICAgICBlbGVtZW50UmVjdC50b3AgLSBwYXJlbnRSZWN0LnRvcFxuICAgIClcbiAgfVxuXG4gIHN0YXRpYyBlbGVtZW50U2l6ZShlbGVtZW50LCBpc0NvbnRlbnRCb3hTaXplPWZhbHNlKSB7XG4gICAgbGV0IHdpZHRoID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudClbJ3dpZHRoJ10pXG4gICAgbGV0IGhlaWdodCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpWydoZWlnaHQnXSlcbiAgICBpZiAoIWlzQ29udGVudEJveFNpemUpIHtcbiAgICAgIHdpZHRoICs9IGdldFN1bVZhbHVlT2ZTdHlsZVJ1bGVzKGVsZW1lbnQsIFsncGFkZGluZy1sZWZ0JywgJ3BhZGRpbmctcmlnaHQnLCAnYm9yZGVyLWxlZnQtd2lkdGgnLCAnYm9yZGVyLXJpZ2h0LXdpZHRoJ10pXG4gICAgICBoZWlnaHQgKz0gZ2V0U3VtVmFsdWVPZlN0eWxlUnVsZXMoZWxlbWVudCwgWydwYWRkaW5nLXRvcCcsICdwYWRkaW5nLWJvdHRvbScsICdib3JkZXItdG9wLXdpZHRoJywgJ2JvcmRlci1ib3R0b20td2lkdGgnXSlcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBQb2ludCh3aWR0aCwgaGVpZ2h0KVxuICB9XG59XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9wb2ludCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVjdGFuZ2xlIHtcbiAgY29uc3RydWN0b3IocG9zaXRpb24sIHNpemUpIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb25cbiAgICB0aGlzLnNpemUgPSBzaXplXG4gIH1cblxuICBnZXRQMSgpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvblxuICB9XG5cbiAgZ2V0UDIoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnNpemUueCwgdGhpcy5wb3NpdGlvbi55KVxuICB9XG5cbiAgZ2V0UDMoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb24uYWRkKHRoaXMuc2l6ZSlcbiAgfVxuXG4gIGdldFA0KCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSlcbiAgfVxuXG4gIGdldENlbnRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi5hZGQodGhpcy5zaXplLm11bHQoMC41KSlcbiAgfVxuXG4gIG9yKHJlY3QpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IG5ldyBQb2ludChNYXRoLm1pbih0aGlzLnBvc2l0aW9uLngsIHJlY3QucG9zaXRpb24ueCksIE1hdGgubWluKHRoaXMucG9zaXRpb24ueSwgcmVjdC5wb3NpdGlvbi55KSlcbiAgICBjb25zdCBzaXplID0gKG5ldyBQb2ludChNYXRoLm1heCh0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnNpemUueCwgcmVjdC5wb3NpdGlvbi54ICsgcmVjdC5zaXplLngpLCBNYXRoLm1heCh0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSwgcmVjdC5wb3NpdGlvbi55ICsgcmVjdC5zaXplLnkpKSkuc3ViKHBvc2l0aW9uKVxuICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHBvc2l0aW9uLCBzaXplKVxuICB9XG5cbiAgYW5kKHJlY3QpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IG5ldyBQb2ludChNYXRoLm1heCh0aGlzLnBvc2l0aW9uLngsIHJlY3QucG9zaXRpb24ueCksIE1hdGgubWF4KHRoaXMucG9zaXRpb24ueSwgcmVjdC5wb3NpdGlvbi55KSlcbiAgICBjb25zdCBzaXplID0gKG5ldyBQb2ludChNYXRoLm1pbih0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnNpemUueCwgcmVjdC5wb3NpdGlvbi54ICsgcmVjdC5zaXplLngpLCBNYXRoLm1pbih0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSwgcmVjdC5wb3NpdGlvbi55ICsgcmVjdC5zaXplLnkpKSkuc3ViKHBvc2l0aW9uKVxuICAgIGlmIChzaXplLnggPD0gMCB8fCBzaXplLnkgPD0gMCkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUocG9zaXRpb24sIHNpemUpXG4gIH1cblxuICBpbmNsdWRlUG9pbnQocCkge1xuICAgIHJldHVybiAhKHRoaXMucG9zaXRpb24ueCA+IHAueCB8fCB0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnNpemUueCA8IHAueCB8fCB0aGlzLnBvc2l0aW9uLnkgPiBwLnkgfHwgdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnkgPCBwLnkpXG4gIH1cblxuICBpbmNsdWRlUmVjdGFuZ2xlKHJlY3RhbmdsZSkge1xuICAgIHJldHVybiB0aGlzLmluY2x1ZGVQb2ludChyZWN0YW5nbGUucG9zaXRpb24pICYmIHRoaXMuaW5jbHVkZVBvaW50KHJlY3RhbmdsZS5nZXRQMygpKVxuICB9XG5cbiAgbW92ZVRvQm91bmQocmVjdCwgYXhpcykge1xuICAgIGxldCBzZWxBeGlzLCBjcm9zc1JlY3RhbmdsZVxuICAgIGlmIChheGlzKSB7XG4gICAgICBzZWxBeGlzID0gYXhpc1xuICAgIH0gZWxzZSB7XG4gICAgICBjcm9zc1JlY3RhbmdsZSA9IHRoaXMuYW5kKHJlY3QpXG4gICAgICBpZiAoIWNyb3NzUmVjdGFuZ2xlKSB7XG4gICAgICAgIHJldHVybiByZWN0XG4gICAgICB9XG4gICAgICBzZWxBeGlzID0gY3Jvc3NSZWN0YW5nbGUuc2l6ZS54ID4gY3Jvc3NSZWN0YW5nbGUuc2l6ZS55ID8gJ3knIDogJ3gnXG4gICAgfVxuICAgIGNvbnN0IHRoaXNDZW50ZXIgPSB0aGlzLmdldENlbnRlcigpXG4gICAgY29uc3QgcmVjdENlbnRlciA9IHJlY3QuZ2V0Q2VudGVyKClcbiAgICBjb25zdCBzaWduID0gdGhpc0NlbnRlcltzZWxBeGlzXSA+IHJlY3RDZW50ZXJbc2VsQXhpc10gPyAtMSA6IDFcbiAgICBjb25zdCBvZmZzZXQgPSBzaWduID4gMCA/IHRoaXMucG9zaXRpb25bc2VsQXhpc10gKyB0aGlzLnNpemVbc2VsQXhpc10gLSByZWN0LnBvc2l0aW9uW3NlbEF4aXNdIDogdGhpcy5wb3NpdGlvbltzZWxBeGlzXSAtIChyZWN0LnBvc2l0aW9uW3NlbEF4aXNdICsgcmVjdC5zaXplW3NlbEF4aXNdKVxuICAgIHJlY3QucG9zaXRpb25bc2VsQXhpc10gPSByZWN0LnBvc2l0aW9uW3NlbEF4aXNdICsgb2Zmc2V0XG4gICAgcmV0dXJuIHJlY3RcbiAgfVxuXG4gIGdldFNxdWFyZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zaXplLnggKiB0aGlzLnNpemUueVxuICB9XG5cbiAgc3R5bGVBcHBseShlbCkge1xuICAgIGVsID0gZWwgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5kJylcbiAgICBlbC5zdHlsZS5sZWZ0ID0gdGhpcy5wb3NpdGlvbi54ICsgJ3B4J1xuICAgIGVsLnN0eWxlLnRvcCA9IHRoaXMucG9zaXRpb24ueSArICdweCdcbiAgICBlbC5zdHlsZS53aWR0aCA9IHRoaXMuc2l6ZS54ICsgJ3B4J1xuICAgIGVsLnN0eWxlLmhlaWdodCA9IHRoaXMuc2l6ZS55ICsgJ3B4J1xuICB9XG5cbiAgZ3Jvd3RoKHNpemUpIHtcbiAgICB0aGlzLnNpemUgPSB0aGlzLnNpemUuYWRkKHNpemUpXG4gICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMucG9zaXRpb24uYWRkKHNpemUubXVsdCgtMC41KSlcbiAgfVxuXG4gIGdldE1pblNpZGUoKSB7XG4gICAgcmV0dXJuIE1hdGgubWluKHRoaXMuc2l6ZS54LCB0aGlzLnNpemUueSlcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRWxlbWVudChlbGVtZW50LCBwYXJlbnQ9ZWxlbWVudC5wYXJlbnROb2RlLCBpc0NvbnRlbnRCb3hTaXplPWZhbHNlLCBpc0NvbnNpZGVyVHJhbnNsYXRlPWZhbHNlKSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBQb2ludC5lbGVtZW50T2Zmc2V0KGVsZW1lbnQsIHBhcmVudCwgaXNDb25zaWRlclRyYW5zbGF0ZSlcbiAgICBjb25zdCBzaXplID0gUG9pbnQuZWxlbWVudFNpemUoZWxlbWVudCwgaXNDb250ZW50Qm94U2l6ZSlcbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZShwb3NpdGlvbiwgc2l6ZSlcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0RGVmYXVsdENvbnRhaW5lcihlbGVtZW50KSB7XG4gIGxldCBjb250YWluZXIgPSBlbGVtZW50LnBhcmVudE5vZGVcbiAgd2hpbGUgKGNvbnRhaW5lci5wYXJlbnROb2RlICYmIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGNvbnRhaW5lcilbJ3Bvc2l0aW9uJ10gPT09ICdzdGF0aWMnICYmIGNvbnRhaW5lci50YWdOYW1lICE9PSAnQk9EWScpIHtcbiAgICBjb250YWluZXIgPSBjb250YWluZXIucGFyZW50Tm9kZVxuICB9XG4gIHJldHVybiBjb250YWluZXJcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yIChvcHRpb25zID0ge30pIHtcbiAgICB0aGlzLmV2ZW50cyA9IHt9XG5cbiAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLm9uKSB7XG4gICAgICBmb3IgKGNvbnN0IFtldmVudE5hbWUsIGZuXSBvZiBPYmplY3QuZW50cmllcyhvcHRpb25zLm9uKSkge1xuICAgICAgICB0aGlzLm9uKGV2ZW50TmFtZSwgZm4pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZW1pdChldmVudE5hbWUpIHtcbiAgICB0aGlzLmludGVycnVwdGVkID0gZmFsc2VcbiAgICBjb25zdCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpXG5cbiAgICBpZiAoIXRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHJldHVyblxuXG4gICAgZm9yIChjb25zdCBmdW5jIG9mIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIGZ1bmMoLi4uYXJncylcbiAgICAgIGlmICh0aGlzLmludGVycnVwdGVkKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGludGVycnVwdCgpIHtcbiAgICB0aGlzLmludGVycnVwdGVkID0gdHJ1ZVxuICB9XG5cbiAgb24oZXZlbnROYW1lLCBmbikge1xuICAgIGlmICghdGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IFtdXG4gICAgfVxuXG4gICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5wdXNoKGZuKVxuICB9XG5cbiAgcHJlcGVuZE9uKGV2ZW50TmFtZSwgZm4pIHtcbiAgICBpZiAoIXRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSBbXVxuICAgIH1cblxuICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0udW5zaGlmdChmbilcbiAgfVxuXG4gIHVuc3Vic2NyaWJlKGV2ZW50TmFtZSwgZm4pIHtcbiAgICBpZiAodGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmV2ZW50c1tldmVudE5hbWVdLmluZGV4T2YoZm4pXG4gICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLnNwbGljZShpbmRleCwgMSlcbiAgICB9XG4gIH1cblxuICByZXNldEVtaXR0ZXIgKCkge1xuICAgIHRoaXMuZXZlbnRzID0ge31cbiAgfVxuXG4gIHJlc2V0T24oZXZlbnROYW1lKSB7XG4gICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IFtdXG4gIH1cbn1cbiIsIi8qIVxuICogZ2V0U3R5bGVQcm9wZXJ0eSB2MS4wLjRcbiAqIG9yaWdpbmFsIGJ5IGthbmdheFxuICogaHR0cDovL3BlcmZlY3Rpb25raWxscy5jb20vZmVhdHVyZS10ZXN0aW5nLWNzcy1wcm9wZXJ0aWVzL1xuICogTUlUIGxpY2Vuc2VcbiAqL1xuXG4vKmpzaGludCBicm93c2VyOiB0cnVlLCBzdHJpY3Q6IHRydWUsIHVuZGVmOiB0cnVlICovXG4vKmdsb2JhbCBkZWZpbmU6IGZhbHNlLCBleHBvcnRzOiBmYWxzZSwgbW9kdWxlOiBmYWxzZSAqL1xuXG4oIGZ1bmN0aW9uKCB3aW5kb3cgKSB7XG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHByZWZpeGVzID0gJ1dlYmtpdCBNb3ogbXMgTXMgTycuc3BsaXQoJyAnKTtcbnZhciBkb2NFbGVtU3R5bGUgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGU7XG5cbmZ1bmN0aW9uIGdldFN0eWxlUHJvcGVydHkoIHByb3BOYW1lICkge1xuICBpZiAoICFwcm9wTmFtZSApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyB0ZXN0IHN0YW5kYXJkIHByb3BlcnR5IGZpcnN0XG4gIGlmICggdHlwZW9mIGRvY0VsZW1TdHlsZVsgcHJvcE5hbWUgXSA9PT0gJ3N0cmluZycgKSB7XG4gICAgcmV0dXJuIHByb3BOYW1lO1xuICB9XG5cbiAgLy8gY2FwaXRhbGl6ZVxuICBwcm9wTmFtZSA9IHByb3BOYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcHJvcE5hbWUuc2xpY2UoMSk7XG5cbiAgLy8gdGVzdCB2ZW5kb3Igc3BlY2lmaWMgcHJvcGVydGllc1xuICB2YXIgcHJlZml4ZWQ7XG4gIGZvciAoIHZhciBpPTAsIGxlbiA9IHByZWZpeGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrICkge1xuICAgIHByZWZpeGVkID0gcHJlZml4ZXNbaV0gKyBwcm9wTmFtZTtcbiAgICBpZiAoIHR5cGVvZiBkb2NFbGVtU3R5bGVbIHByZWZpeGVkIF0gPT09ICdzdHJpbmcnICkge1xuICAgICAgcmV0dXJuIHByZWZpeGVkO1xuICAgIH1cbiAgfVxufVxuXG4vLyB0cmFuc3BvcnRcbmlmICggdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAvLyBBTURcbiAgZGVmaW5lKCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZ2V0U3R5bGVQcm9wZXJ0eTtcbiAgfSk7XG59IGVsc2UgaWYgKCB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgKSB7XG4gIC8vIENvbW1vbkpTIGZvciBDb21wb25lbnRcbiAgbW9kdWxlLmV4cG9ydHMgPSBnZXRTdHlsZVByb3BlcnR5O1xufSBlbHNlIHtcbiAgLy8gYnJvd3NlciBnbG9iYWxcbiAgd2luZG93LmdldFN0eWxlUHJvcGVydHkgPSBnZXRTdHlsZVByb3BlcnR5O1xufVxuXG59KSggd2luZG93ICk7XG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0RGlzdGFuY2UocDEsIHAyKSB7XG4gIGNvbnN0IGR4ID0gcDEueCAtIHAyLngsIGR5ID0gcDEueSAtIHAyLnlcbiAgcmV0dXJuIE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFhEaWZmZXJlbmNlKHAxLCBwMikge1xuICByZXR1cm4gTWF0aC5hYnMocDEueCAtIHAyLngpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRZRGlmZmVyZW5jZShwMSwgcDIpIHtcbiAgcmV0dXJuIE1hdGguYWJzKHAxLnkgLSBwMi55KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtZWRTcGFjZURpc3RhbmNlRmFjdG9yeShvcHRpb25zKSB7XG4gIHJldHVybiAocDEsIHAyKSA9PiB7XG4gICAgcmV0dXJuIE1hdGguc3FydChcbiAgICAgIE1hdGgucG93KG9wdGlvbnMueCAqIE1hdGguYWJzKHAxLnggLSBwMi54KSwgMikgK1xuICAgICAgTWF0aC5wb3cob3B0aW9ucy55ICogTWF0aC5hYnMocDEueSAtIHAyLnkpLCAyKVxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5kZXhPZk5lYXJlc3RQb2ludChhcnIsIHZhbCwgcmFkaXVzLCBnZXREaXN0YW5jZUZ1bmM9Z2V0RGlzdGFuY2UpIHtcbiAgbGV0IHNpemUsIGluZGV4ID0gMCwgaSwgdGVtcFxuICBpZiAoYXJyLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAtMVxuICB9XG4gIHNpemUgPSBnZXREaXN0YW5jZUZ1bmMoYXJyWzBdLCB2YWwpXG4gIGZvciAoaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICB0ZW1wID0gZ2V0RGlzdGFuY2VGdW5jKGFycltpXSwgdmFsKVxuICAgIGlmICh0ZW1wIDwgc2l6ZSkge1xuICAgICAgc2l6ZSA9IHRlbXBcbiAgICAgIGluZGV4ID0gaVxuICAgIH1cbiAgfVxuICBpZiAocmFkaXVzID49IDAgJiYgc2l6ZSA+IHJhZGl1cykge1xuICAgIHJldHVybiAtMVxuICB9XG4gIHJldHVybiBpbmRleFxufVxuIiwiaW1wb3J0IFBvaW50IGZyb20gJy4vcG9pbnQnXG5pbXBvcnQgeyBnZXREaXN0YW5jZSB9IGZyb20gJy4vZGlzdGFuY2VzJ1xuXG5leHBvcnQgZnVuY3Rpb24gY2xhbXAobWluLCBtYXgsIHZhbCkge1xuICByZXR1cm4gTWF0aC5tYXgobWluLCBNYXRoLm1pbihtYXgsIHZhbCkpXG59XG5cbi8vUmV0dXJuIGNyb3NzaW5nIHBvaW50IG9mIHR3byBsaW5lc1xuZXhwb3J0IGZ1bmN0aW9uIGRpcmVjdENyb3NzaW5nKEwxUDEsIEwxUDIsIEwyUDEsIEwyUDIpIHtcbiAgbGV0IHRlbXAsIGsxLCBrMiwgYjEsIGIyLCB4LCB5XG4gIGlmIChMMlAxLnggPT09IEwyUDIueCkge1xuICAgIHRlbXAgPSBMMlAxXG4gICAgTDJQMSA9IEwxUDFcbiAgICBMMVAxID0gdGVtcFxuICAgIHRlbXAgPSBMMlAyXG4gICAgTDJQMiA9IEwxUDJcbiAgICBMMVAyID0gdGVtcFxuICB9XG4gIGlmIChMMVAxLnggPT09IEwxUDIueCkge1xuICAgIGsyID0gKEwyUDIueSAtIEwyUDEueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgIGIyID0gKEwyUDIueCAqIEwyUDEueSAtIEwyUDEueCAqIEwyUDIueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgIHggPSBMMVAxLnhcbiAgICB5ID0geCAqIGsyICsgYjJcbiAgICByZXR1cm4gbmV3IFBvaW50KHgsIHkpXG4gIH0gZWxzZSB7XG4gICAgazEgPSAoTDFQMi55IC0gTDFQMS55KSAvIChMMVAyLnggLSBMMVAxLngpXG4gICAgYjEgPSAoTDFQMi54ICogTDFQMS55IC0gTDFQMS54ICogTDFQMi55KSAvIChMMVAyLnggLSBMMVAxLngpXG4gICAgazIgPSAoTDJQMi55IC0gTDJQMS55KSAvIChMMlAyLnggLSBMMlAxLngpXG4gICAgYjIgPSAoTDJQMi54ICogTDJQMS55IC0gTDJQMS54ICogTDJQMi55KSAvIChMMlAyLnggLSBMMlAxLngpXG4gICAgeCA9IChiMSAtIGIyKSAvIChrMiAtIGsxKVxuICAgIHkgPSB4ICogazEgKyBiMVxuICAgIHJldHVybiBuZXcgUG9pbnQoeCwgeSlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRUb1NlZ21lbnQoTFAxLCBMUDIsIFApIHtcbiAgbGV0IHgsIHlcbiAgeCA9IGNsYW1wKE1hdGgubWluKExQMS54LCBMUDIueCksIE1hdGgubWF4KExQMS54LCBMUDIueCksIFAueClcbiAgaWYgKHggIT09IFAueCkge1xuICAgIHkgPSAoeCA9PT0gTFAxLngpID8gTFAxLnkgOiBMUDIueVxuICAgIFAgPSBuZXcgUG9pbnQoeCwgeSlcbiAgfVxuXG4gIHkgPSBjbGFtcChNYXRoLm1pbihMUDEueSwgTFAyLnkpLCBNYXRoLm1heChMUDEueSwgTFAyLnkpLCBQLnkpXG4gIGlmICh5ICE9PSBQLnkpIHtcbiAgICB4ID0gKHkgPT09IExQMS55KSA/IExQMS54IDogTFAyLnhcbiAgICBQID0gbmV3IFBvaW50KHgsIHkpXG4gIH1cblxuICByZXR1cm4gUFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRUb0xpbmUoQSwgQiwgUCkge1xuICBjb25zdCBBUCA9IG5ldyBQb2ludChQLnggLSBBLngsIFAueSAtIEEueSksXG4gICAgQUIgPSBuZXcgUG9pbnQoQi54IC0gQS54LCBCLnkgLSBBLnkpLFxuICAgIGFiMiA9IEFCLnggKiBBQi54ICsgQUIueSAqIEFCLnksXG4gICAgYXBfYWIgPSBBUC54ICogQUIueCArIEFQLnkgKiBBQi55LFxuICAgIHQgPSBhcF9hYiAvIGFiMlxuICByZXR1cm4gbmV3IFBvaW50KEEueCArIEFCLnggKiB0LCBBLnkgKyBBQi55ICogdClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBvaW50T25MaW5lKExQMSwgTFAyLCBwZXJjZW50KSB7XG4gIGNvbnN0IGR4ID0gTFAyLnggLSBMUDEueCwgZHkgPSBMUDIueSAtIExQMS55XG4gIHJldHVybiBuZXcgUG9pbnQoTFAxLnggKyBwZXJjZW50ICogZHgsIExQMS55ICsgcGVyY2VudCAqIGR5KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9pbnRPbkxpbmVCeUxlbmdodChMUDEsIExQMiwgbGVuZ2h0KSB7XG4gIGNvbnN0IGR4ID0gTFAyLnggLSBMUDEueFxuICBjb25zdCBkeSA9IExQMi55IC0gTFAxLnlcbiAgY29uc3QgcGVyY2VudCA9IGxlbmdodCAvIGdldERpc3RhbmNlKExQMSwgTFAyKVxuICByZXR1cm4gbmV3IFBvaW50KExQMS54ICsgcGVyY2VudCAqIGR4LCBMUDEueSArIHBlcmNlbnQgKiBkeSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFBvaW50VG9Cb3VuZFBvaW50cyhib3VuZHBvaW50cywgcG9pbnQsIGlzUmlnaHQpIHtcbiAgY29uc3QgcmVzdWx0ID0gYm91bmRwb2ludHMuZmlsdGVyKChiUG9pbnQpID0+IHtcbiAgICByZXR1cm4gYlBvaW50LnkgPiBwb2ludC55IHx8IChpc1JpZ2h0ID8gYlBvaW50LnggPCBwb2ludC54IDogYlBvaW50LnggPiBwb2ludC54KVxuICB9KVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzdWx0Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHBvaW50LnkgPCByZXN1bHRbaV0ueSkge1xuICAgICAgcmVzdWx0LnNwbGljZShpLCAwLCBwb2ludClcbiAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG4gIH1cbiAgcmVzdWx0LnB1c2gocG9pbnQpXG4gIHJldHVybiByZXN1bHRcbn1cbiIsImltcG9ydCBQb2ludCBmcm9tICcuL3BvaW50J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QW5nbGVEaWZmKGFscGhhLCBiZXRhKSB7XG4gIGNvbnN0IG1pbkFuZ2xlID0gTWF0aC5taW4oYWxwaGEsIGJldGEpXG4gIGNvbnN0IG1heEFuZ2xlID0gIE1hdGgubWF4KGFscGhhLCBiZXRhKVxuICByZXR1cm4gTWF0aC5taW4obWF4QW5nbGUgLSBtaW5BbmdsZSwgbWluQW5nbGUgKyBNYXRoLlBJKjIgLSBtYXhBbmdsZSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFuZ2xlKHAxLCBwMikge1xuICBjb25zdCBkaWZmID0gcDIuc3ViKHAxKVxuICByZXR1cm4gbm9ybWFsaXplQW5nbGUoTWF0aC5hdGFuMihkaWZmLnksIGRpZmYueCkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b1JhZGlhbihhbmdsZSkge1xuICByZXR1cm4gKChhbmdsZSAlIDM2MCkgKiBNYXRoLlBJIC8gMTgwKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9EZWdyZWUoYW5nbGUpIHtcbiAgcmV0dXJuIChhbmdsZSAqIDE4MCAvIE1hdGguUEkpICUgMzYwXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZEFuZ2xlKG1pbiwgbWF4LCB2YWwpIHtcbiAgbGV0IGRtaW4sIGRtYXhcbiAgaWYgKG1pbiA8IG1heCAmJiB2YWwgPiBtaW4gJiYgdmFsIDwgbWF4KSB7XG4gICAgcmV0dXJuIHZhbFxuICB9IGVsc2UgaWYgKG1heCA8IG1pbiAmJiAodmFsIDwgbWF4IHx8IHZhbCA+IG1pbikpIHtcbiAgICByZXR1cm4gdmFsXG4gIH0gZWxzZSB7XG4gICAgZG1pbiA9IGdldEFuZ2xlRGlmZihtaW4sIHZhbClcbiAgICBkbWF4ID0gZ2V0QW5nbGVEaWZmKG1heCwgdmFsKVxuICAgIGlmIChkbWluIDwgZG1heCkge1xuICAgICAgcmV0dXJuIG1pblxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbWF4XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROZWFyZXN0QW5nbGUoYXJyLCBhbmdsZSkge1xuICBsZXQgaSwgdGVtcCwgZGlmZiA9IE1hdGguUEkgKiAyLCB2YWx1ZVxuICBmb3IgKGkgPSAwOyBpIDwgYXJyLmxlbmd0aDtpKyspIHtcbiAgICB0ZW1wID0gZ2V0QW5nbGVEaWZmKGFycltpXSwgYW5nbGUpXG4gICAgaWYgKGRpZmYgPCB0ZW1wKSB7XG4gICAgICBkaWZmID0gdGVtcFxuICAgICAgdmFsdWUgPSBhcnJbaV1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHZhbHVlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVBbmdsZSh2YWwpIHtcbiAgd2hpbGUgKHZhbCA8IDApIHtcbiAgICB2YWwgKz0gMiAqIE1hdGguUElcbiAgfVxuICB3aGlsZSAodmFsID4gMiAqIE1hdGguUEkpIHtcbiAgICB2YWwgLT0gMiAqIE1hdGguUElcbiAgfVxuICByZXR1cm4gdmFsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oYW5nbGUsIGxlbmd0aCwgY2VudGVyKSB7XG4gIGNlbnRlciA9IGNlbnRlciB8fCBuZXcgUG9pbnQoMCwgMClcbiAgcmV0dXJuIGNlbnRlci5hZGQobmV3IFBvaW50KGxlbmd0aCAqIE1hdGguY29zKGFuZ2xlKSwgbGVuZ3RoICogTWF0aC5zaW4oYW5nbGUpKSlcbn1cbiIsImltcG9ydCBQb2ludCBmcm9tICcuL2dlb21ldHJ5L3BvaW50J1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tICcuL2dlb21ldHJ5L3JlY3RhbmdsZSdcbmltcG9ydCB7XG4gIGdldFBvaW50T25MaW5lQnlMZW5naHQsXG4gIGRpcmVjdENyb3NzaW5nLFxuICBib3VuZFRvTGluZVxufSBmcm9tICcuL2dlb21ldHJ5L2JvdW5kcydcblxuaW1wb3J0IHtcbiAgZ2V0QW5nbGUsXG4gIG5vcm1hbGl6ZUFuZ2xlLFxuICBib3VuZEFuZ2xlLFxuICBnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW1cbn0gZnJvbSAnLi9nZW9tZXRyeS9hbmdsZXMnXG5cbmV4cG9ydCBjbGFzcyBCb3VuZCB7XG4gIGNvbnN0cnVjdG9yICgpIHt9XG5cbiAgYm91bmQocG9pbnQsIF9zaXplKSB7XG4gICAgcmV0dXJuIHBvaW50XG4gIH1cblxuICByZWZyZXNoICgpIHt9XG5cbiAgc3RhdGljIGJvdW5kaW5nKCkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IHRoaXMoLi4uYXJndW1lbnRzKVxuICAgIHJldHVybiBpbnN0YW5jZS5ib3VuZC5iaW5kKGluc3RhbmNlKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvUmVjdGFuZ2xlIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3RvcihyZWN0YW5nbGUpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5yZWN0YW5nbGUgPSByZWN0YW5nbGVcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgY2FsY1BvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIGNvbnN0IHJlY3RQMiA9IHRoaXMucmVjdGFuZ2xlLmdldFAzKClcblxuICAgIGlmICh0aGlzLnJlY3RhbmdsZS5wb3NpdGlvbi54ID4gY2FsY1BvaW50LngpIHtcbiAgICAgIChjYWxjUG9pbnQueCA9IHRoaXMucmVjdGFuZ2xlLnBvc2l0aW9uLngpXG4gICAgfVxuICAgIGlmICh0aGlzLnJlY3RhbmdsZS5wb3NpdGlvbi55ID4gY2FsY1BvaW50LnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gdGhpcy5yZWN0YW5nbGUucG9zaXRpb24ueVxuICAgIH1cbiAgICBpZiAocmVjdFAyLnggPCBjYWxjUG9pbnQueCArIHNpemUueCkge1xuICAgICAgY2FsY1BvaW50LnggPSByZWN0UDIueCAtIHNpemUueFxuICAgIH1cbiAgICBpZiAocmVjdFAyLnkgPCBjYWxjUG9pbnQueSArIHNpemUueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSByZWN0UDIueSAtIHNpemUueVxuICAgIH1cblxuICAgIHJldHVybiBjYWxjUG9pbnRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb0VsZW1lbnQgZXh0ZW5kcyBCb3VuZFRvUmVjdGFuZ2xlIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29udGFpbmVyKSB7XG4gICAgc3VwZXIoUmVjdGFuZ2xlLmZyb21FbGVtZW50KGVsZW1lbnQsIGNvbnRhaW5lcikpXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyXG4gIH1cblxuICByZWZyZXNoICgpIHtcbiAgICB0aGlzLnJlY3RhbmdsZSA9IFJlY3RhbmdsZS5mcm9tRWxlbWVudCh0aGlzLmVsZW1lbnQsIHRoaXMuY29udGFpbmVyKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvTGluZVggZXh0ZW5kcyBCb3VuZCB7XG4gIGNvbnN0cnVjdG9yKHgsIHN0YXJ0WSwgZW5kWSkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnggPSB4XG4gICAgdGhpcy5zdGFydFkgPSBzdGFydFlcbiAgICB0aGlzLmVuZFkgPSBlbmRZXG4gIH1cblxuICBib3VuZChwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IGNhbGNQb2ludCA9IHBvaW50LmNsb25lKClcblxuICAgIGNhbGNQb2ludC54ID0gdGhpcy54XG4gICAgaWYgKHRoaXMuc3RhcnRZID4gY2FsY1BvaW50LnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gdGhpcy5zdGFydFlcbiAgICB9XG4gICAgaWYgKHRoaXMuZW5kWSA8IGNhbGNQb2ludC55ICsgc2l6ZS55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHRoaXMuZW5kWSAtIHNpemUueVxuICAgIH1cblxuICAgIHJldHVybiBjYWxjUG9pbnRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb0xpbmVZIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3Rvcih5LCBzdGFydFgsIGVuZFgpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy55ID0geVxuICAgIHRoaXMuc3RhcnRYID0gc3RhcnRYXG4gICAgdGhpcy5lbmRYID0gZW5kWFxuICB9XG5cbiAgYm91bmQocG9pbnQsIHNpemUpIHtcbiAgICBjb25zdCBjYWxjUG9pbnQgPSBwb2ludC5jbG9uZSgpXG4gICAgY2FsY1BvaW50LnkgPSB0aGlzLnlcbiAgICBpZiAodGhpcy5zdGFydFggPiBjYWxjUG9pbnQueCkge1xuICAgICAgY2FsY1BvaW50LnggPSB0aGlzLnN0YXJ0WFxuICAgIH1cbiAgICBpZiAodGhpcy5lbmRYIDwgY2FsY1BvaW50LnggKyBzaXplLngpIHtcbiAgICAgIGNhbGNQb2ludC54ID0gdGhpcy5lbmRYIC0gc2l6ZS54XG4gICAgfVxuICAgIHJldHVybiBjYWxjUG9pbnRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb0xpbmUgZXh0ZW5kcyBCb3VuZCB7XG4gIGNvbnN0cnVjdG9yKHN0YXJ0UG9pbnQsIGVuZFBvaW50KSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuc3RhcnRQb2ludCA9IHN0YXJ0UG9pbnRcbiAgICB0aGlzLmVuZFBvaW50ID0gZW5kUG9pbnRcbiAgICBjb25zdCBhbHBoYSA9IE1hdGguYXRhbjIoZW5kUG9pbnQueSAtIHN0YXJ0UG9pbnQueSwgZW5kUG9pbnQueCAtIHN0YXJ0UG9pbnQueClcbiAgICBjb25zdCBiZXRhID0gYWxwaGEgKyBNYXRoLlBJIC8gMlxuICAgIHRoaXMuc29tZUsgPSAxMFxuICAgIHRoaXMuY29zQmV0YSA9IE1hdGguY29zKGJldGEpXG4gICAgdGhpcy5zaW5CZXRhID0gTWF0aC5zaW4oYmV0YSlcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgcG9pbnQyID0gbmV3IFBvaW50KFxuICAgICAgcG9pbnQueCArIHRoaXMuc29tZUsgKiB0aGlzLmNvc0JldGEsXG4gICAgICBwb2ludC55ICsgdGhpcy5zb21lSyAqIHRoaXMuc2luQmV0YVxuICAgIClcblxuICAgIGNvbnN0IG5ld0VuZFBvaW50ID0gZ2V0UG9pbnRPbkxpbmVCeUxlbmdodCh0aGlzLmVuZFBvaW50LCB0aGlzLnN0YXJ0UG9pbnQsIHNpemUueClcbiAgICBjb25zdCBwb2ludENyb3NzaW5nID0gZGlyZWN0Q3Jvc3NpbmcodGhpcy5zdGFydFBvaW50LCB0aGlzLmVuZFBvaW50LCBwb2ludCwgcG9pbnQyKVxuXG4gICAgcmV0dXJuIGJvdW5kVG9MaW5lKHRoaXMuc3RhcnRQb2ludCwgbmV3RW5kUG9pbnQsIHBvaW50Q3Jvc3NpbmcpXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9DaXJjbGUgZXh0ZW5kcyBCb3VuZCB7XG4gIGNvbnN0cnVjdG9yKGNlbnRlciwgcmFkaXVzKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuY2VudGVyID0gY2VudGVyXG4gICAgdGhpcy5yYWRpdXMgPSByYWRpdXNcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBfc2l6ZSkge1xuICAgIHJldHVybiBnZXRQb2ludE9uTGluZUJ5TGVuZ2h0KHRoaXMuY2VudGVyLCBwb2ludCwgdGhpcy5yYWRpdXMpXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9BcmMgZXh0ZW5kcyBCb3VuZFRvQ2lyY2xlIHtcbiAgY29uc3RydWN0b3IoY2VudGVyLCByYWRpdXMsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlKSB7XG4gICAgc3VwZXIoY2VudGVyLCByYWRpdXMpXG4gICAgdGhpcy5fc3RhcnRBbmdsZSA9IHN0YXJ0QW5nbGVcbiAgICB0aGlzLl9lbmRBbmdsZSA9IGVuZEFuZ2xlXG4gIH1cblxuICBzdGFydEFuZ2xlKCkge1xuICAgIHJldHVybiB0eXBlb2YgdGhpcy5fc3RhcnRBbmdsZSA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMuX3N0YXJ0QW5nbGUoKSA6IHRoaXMuX3N0YXJ0QW5nbGVcbiAgfVxuXG4gIGVuZEFuZ2xlKCkge1xuICAgIHJldHVybiB0eXBlb2YgdGhpcy5fZW5kQW5nbGUgPT09ICdmdW5jdGlvbicgPyB0aGlzLl9lbmRBbmdsZSgpIDogdGhpcy5fZW5kQW5nbGVcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBfc2l6ZSkge1xuICAgIGxldCBhbmdsZSA9IGdldEFuZ2xlKHRoaXMuY2VudGVyLCBwb2ludClcbiAgICBhbmdsZSA9IG5vcm1hbGl6ZUFuZ2xlKGFuZ2xlKVxuICAgIGFuZ2xlID0gYm91bmRBbmdsZSh0aGlzLnN0YXJ0QW5nbGUoKSwgdGhpcy5lbmRBbmdsZSgpLCBhbmdsZSlcbiAgICByZXR1cm4gZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKGFuZ2xlLCB0aGlzLnJhZGl1cywgdGhpcy5jZW50ZXIpXG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGFycmF5LCB2YWwpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChhcnJheVtpXSA9PT0gdmFsKSB7XG4gICAgICBhcnJheS5zcGxpY2UoaSwgMSlcbiAgICAgIGktLVxuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyYXlcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJhbmdlKHN0YXJ0LCBzdG9wLCBzdGVwKSB7XG4gIGNvbnN0IHJlc3VsdCA9IFtdXG4gIGlmICh0eXBlb2Ygc3RvcCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBzdG9wID0gc3RhcnRcbiAgICBzdGFydCA9IDBcbiAgfVxuICBpZiAodHlwZW9mIHN0ZXAgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgc3RlcCA9IDFcbiAgfVxuICBpZiAoKHN0ZXAgPiAwICYmIHN0YXJ0ID49IHN0b3ApIHx8IChzdGVwIDwgMCAmJiBzdGFydCA8PSBzdG9wKSkge1xuICAgIHJldHVybiBbXVxuICB9XG4gIGZvciAobGV0IGkgPSBzdGFydDsgc3RlcCA+IDAgPyBpIDwgc3RvcCA6IGkgPiBzdG9wOyBpICs9IHN0ZXApIHtcbiAgICByZXN1bHQucHVzaChpKVxuICB9XG4gIHJldHVybiByZXN1bHRcbn1cbiIsImltcG9ydCBQb2ludCBmcm9tICcuL2dlb21ldHJ5L3BvaW50J1xuaW1wb3J0IHsgYWRkUG9pbnRUb0JvdW5kUG9pbnRzIH0gZnJvbSAnLi9nZW9tZXRyeS9ib3VuZHMnXG5cbmltcG9ydCB7XG4gIGluZGV4T2ZOZWFyZXN0UG9pbnQsXG4gIGdldERpc3RhbmNlXG59IGZyb20gJy4vZ2VvbWV0cnkvZGlzdGFuY2VzJ1xuXG5jbGFzcyBCYXNpY1N0cmF0ZWd5IHtcbiAgY29uc3RydWN0b3IocmVjdGFuZ2xlLCBvcHRpb25zPXt9KSB7XG4gICAgdGhpcy5yZWN0YW5nbGUgPSByZWN0YW5nbGVcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zXG4gIH1cblxuICBnZXQgYm91bmRSZWN0ICgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMucmVjdGFuZ2xlID09PSAnZnVuY3Rpb24nID8gdGhpcy5yZWN0YW5nbGUoKSA6IHRoaXMucmVjdGFuZ2xlXG4gIH1cbn1cblxuY2xhc3MgTm90Q3Jvc3NpbmdTdHJhdGVneSBleHRlbmRzIEJhc2ljU3RyYXRlZ3kge1xuICBwb3NpdGlvbmluZyAocmVjdGFuZ2xlTGlzdCwgaW5kZXhlc09mTmV3cykge1xuICAgIGNvbnN0IHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMgPSByZWN0YW5nbGVMaXN0LnJlZHVjZSgoaW5kZXhlcywgX3JlY3QsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoaW5kZXhlc09mTmV3cy5pbmRleE9mKGluZGV4KSA9PT0gLTEpIHtcbiAgICAgICAgaW5kZXhlcy5wdXNoKGluZGV4KVxuICAgICAgfVxuICAgICAgcmV0dXJuIGluZGV4ZXNcbiAgICB9LCBbXSlcblxuICAgIGluZGV4ZXNPZk5ld3MuZm9yRWFjaCgoaW5kZXgpID0+IHtcbiAgICAgIGxldCByZWN0ID0gcmVjdGFuZ2xlTGlzdFtpbmRleF1cbiAgICAgIGxldCByZW1vdmFibGUgPSBmYWxzZVxuXG4gICAgICBzdGF0aWNSZWN0YW5nbGVJbmRleGVzLmZvckVhY2goKGluZGV4T2ZTdGF0aWMpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhdGljUmVjdCA9IHJlY3RhbmdsZUxpc3RbaW5kZXhPZlN0YXRpY11cbiAgICAgICAgcmVjdCA9IHN0YXRpY1JlY3QubW92ZVRvQm91bmQocmVjdClcbiAgICAgIH0pXG5cbiAgICAgIHJlbW92YWJsZSA9IHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMuc29tZSgoaW5kZXhPZlN0YXRpYykgPT4ge1xuICAgICAgICBjb25zdCBzdGF0aWNSZWN0ID0gcmVjdGFuZ2xlTGlzdFtpbmRleE9mU3RhdGljXVxuICAgICAgICByZXR1cm4gICEhc3RhdGljUmVjdC5hbmQocmVjdClcbiAgICAgIH0pIHx8IHJlY3QuYW5kKHRoaXMuYm91bmRSZWN0KS5nZXRTcXVhcmUoKSAhPT0gcmVjdC5nZXRTcXVhcmUoKVxuXG4gICAgICBpZiAocmVtb3ZhYmxlKSB7XG4gICAgICAgIHJlY3QucmVtb3ZhYmxlID0gdHJ1ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdGljUmVjdGFuZ2xlSW5kZXhlcy5wdXNoKGluZGV4KVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHJlY3RhbmdsZUxpc3RcbiAgfVxuXG4gIHNvcnRpbmcob2RsRHJhZ2dhYmxlc0xpc3QsIG5ld0RyYWdnYWJsZXMsIGluZGV4T2ZOZXdzKSB7XG4gICAgY29uc3QgZHJhZ2dhYmxlcyA9IG9kbERyYWdnYWJsZXNMaXN0LmNvbmNhdChuZXdEcmFnZ2FibGVzKVxuICAgIG5ld0RyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBpbmRleE9mTmV3cy5wdXNoKGRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpKVxuICAgIH0pXG4gICAgcmV0dXJuIGRyYWdnYWJsZXNcbiAgfVxufVxuXG5jbGFzcyBGbG9hdExlZnRTdHJhdGVneSBleHRlbmRzIEJhc2ljU3RyYXRlZ3kge1xuICBjb25zdHJ1Y3RvcihyZWN0YW5nbGUsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcihyZWN0YW5nbGUsIG9wdGlvbnMpXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICByZW1vdmFibGU6IHRydWVcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGhpcy5yYWRpdXMgPSBvcHRpb25zLnJhZGl1cyB8fCA4MFxuXG4gICAgdGhpcy5wYWRkaW5nVG9wTGVmdCA9IG9wdGlvbnMucGFkZGluZ1RvcExlZnQgfHwgbmV3IFBvaW50KDAsIDApXG4gICAgdGhpcy5wYWRkaW5nQm90dG9tUmlnaHQgPSBvcHRpb25zLnBhZGRpbmdCb3R0b21SaWdodCB8fCBuZXcgUG9pbnQoMCwgMClcbiAgICB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyA9IG9wdGlvbnMueUdhcEJldHdlZW5EcmFnZ2FibGVzIHx8IDBcblxuICAgIHRoaXMuZ2V0RGlzdGFuY2UgPSBvcHRpb25zLmdldERpc3RhbmNlIHx8IGdldERpc3RhbmNlXG4gICAgdGhpcy5nZXRQb3NpdGlvbiA9IG9wdGlvbnMuZ2V0UG9zaXRpb24gfHwgKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5wb3NpdGlvbilcbiAgfVxuXG4gIHBvc2l0aW9uaW5nKHJlY3RhbmdsZUxpc3QsIF9pbmRleGVzT2ZOZXdzKSB7XG4gICAgY29uc3QgYm91bmRSZWN0ID0gdGhpcy5ib3VuZFJlY3RcbiAgICBjb25zdCByZWN0UDIgPSBib3VuZFJlY3QuZ2V0UDIoKVxuICAgIGxldCBib3VuZGFyeVBvaW50cyA9IFtib3VuZFJlY3QucG9zaXRpb25dXG5cbiAgICByZWN0YW5nbGVMaXN0LmZvckVhY2goKHJlY3QsIHJlY3RJbmRleCkgPT4ge1xuICAgICAgbGV0IHBvc2l0aW9uLCBpc1ZhbGlkID0gZmFsc2VcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm91bmRhcnlQb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcG9zaXRpb24gPSBuZXcgUG9pbnQoXG4gICAgICAgICAgYm91bmRhcnlQb2ludHNbaV0ueCArIHRoaXMucGFkZGluZ1RvcExlZnQueCxcbiAgICAgICAgICBpID4gMCA/IChib3VuZGFyeVBvaW50c1tpIC0gMV0ueSArIHRoaXMueUdhcEJldHdlZW5EcmFnZ2FibGVzKSA6IChib3VuZFJlY3QucG9zaXRpb24ueSArIHRoaXMucGFkZGluZ1RvcExlZnQueSlcbiAgICAgICAgKVxuXG4gICAgICAgIGlzVmFsaWQgPSAocG9zaXRpb24ueCArIHJlY3Quc2l6ZS54IDwgcmVjdFAyLngpXG5cbiAgICAgICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICBwb3NpdGlvbiA9IG5ldyBQb2ludChcbiAgICAgICAgICBib3VuZFJlY3QucG9zaXRpb24ueCArIHRoaXMucGFkZGluZ1RvcExlZnQueCxcbiAgICAgICAgICBib3VuZGFyeVBvaW50c1tib3VuZGFyeVBvaW50cy5sZW5ndGggLSAxXS55ICsgKHJlY3RJbmRleCA+IDAgPyB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyA6IHRoaXMucGFkZGluZ1RvcExlZnQueSlcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICByZWN0LnBvc2l0aW9uID0gcG9zaXRpb25cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucmVtb3ZhYmxlICYmIHJlY3QuZ2V0UDMoKS55ID4gYm91bmRSZWN0LmdldFAzKCkueSkge1xuICAgICAgICByZWN0LnJlbW92YWJsZSA9IHRydWVcbiAgICAgIH1cblxuICAgICAgYm91bmRhcnlQb2ludHMgPSBhZGRQb2ludFRvQm91bmRQb2ludHMoYm91bmRhcnlQb2ludHMsIHJlY3QuZ2V0UDMoKS5hZGQodGhpcy5wYWRkaW5nQm90dG9tUmlnaHQpKVxuICAgIH0pXG4gICAgcmV0dXJuIHJlY3RhbmdsZUxpc3RcbiAgfVxuXG4gIHNvcnRpbmcob2RsRHJhZ2dhYmxlc0xpc3QsIG5ld0RyYWdnYWJsZXMsIGluZGV4T2ZOZXdzKSB7XG4gICAgY29uc3QgbmV3TGlzdCA9IG9kbERyYWdnYWJsZXNMaXN0LmNvbmNhdCgpXG4gICAgY29uc3QgbGlzdE9sZFBvc2l0aW9uID0gb2RsRHJhZ2dhYmxlc0xpc3QubWFwKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5nZXRQb3NpdGlvbigpKVxuICAgIG5ld0RyYWdnYWJsZXMuZm9yRWFjaCgobmV3RHJhZ2dhYmxlKSA9PiB7XG4gICAgICBsZXQgaW5kZXggPSBpbmRleE9mTmVhcmVzdFBvaW50KGxpc3RPbGRQb3NpdGlvbiwgdGhpcy5nZXRQb3NpdGlvbihuZXdEcmFnZ2FibGUpLCB0aGlzLnJhZGl1cywgdGhpcy5nZXREaXN0YW5jZSlcbiAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgaW5kZXggPSBuZXdMaXN0Lmxlbmd0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5kZXggPSBuZXdMaXN0LmluZGV4T2Yob2RsRHJhZ2dhYmxlc0xpc3RbaW5kZXhdKVxuICAgICAgfVxuICAgICAgbmV3TGlzdC5zcGxpY2UoaW5kZXgsIDAsIG5ld0RyYWdnYWJsZSlcbiAgICB9KVxuICAgIG5ld0RyYWdnYWJsZXMuZm9yRWFjaCgobmV3RHJhZ2dhYmxlKSA9PiB7XG4gICAgICBpbmRleE9mTmV3cy5wdXNoKG5ld0xpc3QuaW5kZXhPZihuZXdEcmFnZ2FibGUpKVxuICAgIH0pXG4gICAgcmV0dXJuIG5ld0xpc3RcbiAgfVxufVxuXG5jbGFzcyBGbG9hdFJpZ2h0U3RyYXRlZ3kgZXh0ZW5kcyBGbG9hdExlZnRTdHJhdGVneSB7XG4gIGNvbnN0cnVjdG9yKHJlY3RhbmdsZSwgb3B0aW9ucz17fSkge1xuICAgIHN1cGVyKHJlY3RhbmdsZSwgb3B0aW9ucylcblxuICAgIHRoaXMucGFkZGluZ1RvcFJpZ2h0ID0gb3B0aW9ucy5wYWRkaW5nVG9wUmlnaHQgfHwgbmV3IFBvaW50KDUsIDUpXG4gICAgdGhpcy5wYWRkaW5nQm90dG9tTGVmdCA9IG9wdGlvbnMucGFkZGluZ0JvdHRvbUxlZnQgfHwgbmV3IFBvaW50KDAsIDApXG4gICAgdGhpcy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgPSBvcHRpb25zLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyB8fCAwXG5cbiAgICB0aGlzLnBhZGRpbmdCb3R0b21OZWdMZWZ0ID0gbmV3IFBvaW50KC10aGlzLnBhZGRpbmdCb3R0b21MZWZ0LngsIHRoaXMucGFkZGluZ0JvdHRvbUxlZnQueSlcbiAgfVxuXG4gIHBvc2l0aW9uaW5nKHJlY3RhbmdsZUxpc3QsIF9pbmRleGVzT2ZOZXdzKSB7XG4gICAgY29uc3QgYm91bmRSZWN0ID0gdGhpcy5ib3VuZFJlY3RcbiAgICBsZXQgYm91bmRhcnlQb2ludHMgPSBbYm91bmRSZWN0LmdldFAyKCldXG5cbiAgICByZWN0YW5nbGVMaXN0LmZvckVhY2goKHJlY3QsIHJlY3RJbmRleCkgPT4ge1xuICAgICAgbGV0IHBvc2l0aW9uLCBpc1ZhbGlkID0gZmFsc2VcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm91bmRhcnlQb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcG9zaXRpb24gPSBuZXcgUG9pbnQoXG4gICAgICAgICAgYm91bmRhcnlQb2ludHNbaV0ueCAtIHJlY3Quc2l6ZS54IC0gdGhpcy5wYWRkaW5nVG9wUmlnaHQueCxcbiAgICAgICAgICBpID4gMCA/IChib3VuZGFyeVBvaW50c1tpIC0gMV0ueSArIHRoaXMueUdhcEJldHdlZW5EcmFnZ2FibGVzKSA6IChib3VuZFJlY3QucG9zaXRpb24ueSArIHRoaXMucGFkZGluZ1RvcFJpZ2h0LnkpXG4gICAgICAgIClcblxuICAgICAgICBpc1ZhbGlkID0gKHBvc2l0aW9uLnggPiByZWN0LnBvc2l0aW9uLngpXG4gICAgICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICAgIHBvc2l0aW9uID0gbmV3IFBvaW50KFxuICAgICAgICAgIGJvdW5kUmVjdC5nZXRQMigpLnggIC0gcmVjdC5zaXplLnggLSB0aGlzLnBhZGRpbmdUb3BSaWdodC54LFxuICAgICAgICAgIGJvdW5kYXJ5UG9pbnRzW2JvdW5kYXJ5UG9pbnRzLmxlbmd0aCAtIDFdLnkgKyAocmVjdEluZGV4ID4gMCA/IHRoaXMueUdhcEJldHdlZW5EcmFnZ2FibGVzIDogdGhpcy5wYWRkaW5nVG9wUmlnaHQueSlcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgcmVjdC5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnJlbW92YWJsZSAmJiByZWN0LmdldFA0KCkueSA+IGJvdW5kUmVjdC5nZXRQNCgpLnkpIHtcbiAgICAgICAgcmVjdC5yZW1vdmFibGUgPSB0cnVlXG4gICAgICB9XG4gICAgICBib3VuZGFyeVBvaW50cyA9IGFkZFBvaW50VG9Cb3VuZFBvaW50cyhib3VuZGFyeVBvaW50cywgcmVjdC5nZXRQNCgpLmFkZCh0aGlzLnBhZGRpbmdCb3R0b21OZWdMZWZ0KSwgdHJ1ZSlcbiAgICB9KVxuICAgIHJldHVybiByZWN0YW5nbGVMaXN0XG4gIH1cbn1cblxuZXhwb3J0IHsgTm90Q3Jvc3NpbmdTdHJhdGVneSwgRmxvYXRMZWZ0U3RyYXRlZ3ksIEZsb2F0UmlnaHRTdHJhdGVneSB9XG4iLCJpbXBvcnQgcmFuZ2UgZnJvbSAnLi91dGlscy9yYW5nZS5qcydcbmltcG9ydCByZW1vdmVJdGVtIGZyb20gJy4vdXRpbHMvcmVtb3ZlLWFycmF5LWl0ZW0nXG5pbXBvcnQgZ2V0RGVmYXVsdENvbnRhaW5lciBmcm9tICcuL3V0aWxzL2dldC1kZWZhdWx0LWNvbnRhaW5lcidcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudEVtaXR0ZXInXG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gJy4vZ2VvbWV0cnkvcmVjdGFuZ2xlJ1xuaW1wb3J0IHsgdHJhbnNmb3JtZWRTcGFjZURpc3RhbmNlRmFjdG9yeSB9IGZyb20gJy4vZ2VvbWV0cnkvZGlzdGFuY2VzJ1xuaW1wb3J0IHsgc2NvcGVzLCBkZWZhdWx0U2NvcGUgfSBmcm9tICcuL3Njb3BlJ1xuXG5pbXBvcnQgeyBGbG9hdExlZnRTdHJhdGVneSB9IGZyb20gJy4vcG9zaXRpb25pbmcnXG5pbXBvcnQgeyBCb3VuZFRvRWxlbWVudCB9IGZyb20gJy4vYm91bmRpbmcnXG5cbmNvbnN0IGFkZFRvRGVmYXVsdFNjb3BlID0gZnVuY3Rpb24odGFyZ2V0KSB7XG4gIGRlZmF1bHRTY29wZS5hZGRUYXJnZXQodGFyZ2V0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXJnZXQgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBkcmFnZ2FibGVzLCBvcHRpb25zID0ge30pIHtcbiAgICBzdXBlcihvcHRpb25zKVxuICAgIGNvbnN0IHRhcmdldCA9IHRoaXNcblxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgdGltZUVuZDogMjAwLFxuICAgICAgdGltZUV4Y2FuZ2U6IDQwMFxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0aGlzLnBvc2l0aW9uaW5nU3RyYXRlZ3kgPSBvcHRpb25zLnN0cmF0ZWd5IHx8IG5ldyBGbG9hdExlZnRTdHJhdGVneShcbiAgICAgIHRoaXMuZ2V0UmVjdGFuZ2xlLmJpbmQodGhpcyksXG4gICAgICB7XG4gICAgICAgIHJhZGl1czogODAsXG4gICAgICAgIGdldERpc3RhbmNlOiB0cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5KHsgeDogMSwgeTogNCB9KSxcbiAgICAgICAgcmVtb3ZhYmxlOiB0cnVlXG4gICAgICB9XG4gICAgKVxuXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUudGFyZ2V0cy5wdXNoKHRhcmdldCkpXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gZHJhZ2dhYmxlc1xuXG4gICAgVGFyZ2V0LmVtaXR0ZXIuZW1pdCgndGFyZ2V0OmNyZWF0ZScsIHRoaXMpXG5cbiAgICB0aGlzLnN0YXJ0Qm91bmRpbmcoKVxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBzdGFydEJvdW5kaW5nKCkge1xuICAgIHRoaXMuYm91bmQgPSB0aGlzLm9wdGlvbnMuYm91bmQgfHwgQm91bmRUb0VsZW1lbnQuYm91bmRpbmcodGhpcy5lbGVtZW50KVxuICB9XG5cbiAgcG9zaXRpb25pbmcgKGRyYWdnYWJsZXMsIGluZGV4ZXNPZk5ldykge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uaW5nU3RyYXRlZ3kucG9zaXRpb25pbmcoZHJhZ2dhYmxlcywgaW5kZXhlc09mTmV3KVxuICB9XG5cbiAgc29ydGluZyAob2xkRHJhZ2dhYmxlcywgbmV3RHJhZ2dhYmxlcywgaW5kZXhPZk5ld3MpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbmluZ1N0cmF0ZWd5LnNvcnRpbmcob2xkRHJhZ2dhYmxlcywgbmV3RHJhZ2dhYmxlcywgaW5kZXhPZk5ld3MpXG4gIH1cblxuICBpbml0KCkge1xuICAgIGxldCByZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXdcblxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzID0gdGhpcy5kcmFnZ2FibGVzLmZpbHRlcigoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBsZXQgZWxlbWVudCA9IGRyYWdnYWJsZS5lbGVtZW50LnBhcmVudE5vZGVcbiAgICAgIHdoaWxlIChlbGVtZW50KSB7XG4gICAgICAgIGlmIChlbGVtZW50ID09PSB0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGVcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH0pXG5cbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMubGVuZ3RoKSB7XG4gICAgICBpbmRleGVzT2ZOZXcgPSByYW5nZSh0aGlzLmlubmVyRHJhZ2dhYmxlcy5sZW5ndGgpXG4gICAgICByZWN0YW5nbGVzID0gdGhpcy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgICB9KSwgaW5kZXhlc09mTmV3KVxuICAgICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXcpXG4gICAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHRoaXMuZW1pdCgndGFyZ2V0OmFkZCcsIGRyYWdnYWJsZSkpXG4gICAgfVxuICB9XG5cbiAgZ2V0UmVjdGFuZ2xlKCkge1xuICAgIHJldHVybiBSZWN0YW5nbGUuZnJvbUVsZW1lbnQoXG4gICAgICB0aGlzLmVsZW1lbnQsXG4gICAgICB0aGlzLmNvbnRhaW5lcixcbiAgICAgIHRoaXMub3B0aW9ucy5pc0NvbnRlbnRCb3hTaXplLFxuICAgICAgdHJ1ZVxuICAgIClcbiAgfVxuXG4gIGNhdGNoRHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuY2F0Y2hEcmFnZ2FibGUpIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuY2F0Y2hEcmFnZ2FibGUodGhpcywgZHJhZ2dhYmxlKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0YXJnZXRSZWN0YW5nbGUgPSB0aGlzLmdldFJlY3RhbmdsZSgpXG4gICAgICBjb25zdCBkcmFnZ2FibGVTcXVhcmUgPSBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKCkuZ2V0U3F1YXJlKClcblxuICAgICAgcmV0dXJuIGRyYWdnYWJsZVNxdWFyZSA8IHRhcmdldFJlY3RhbmdsZS5nZXRTcXVhcmUoKVxuICAgICAgICAgICAgICAmJiB0YXJnZXRSZWN0YW5nbGUuaW5jbHVkZVBvaW50KGRyYWdnYWJsZS5nZXRDZW50ZXIoKSlcbiAgICB9XG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRSZWN0YW5nbGUoKS5wb3NpdGlvblxuICB9XG5cbiAgZ2V0U2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRSZWN0YW5nbGUoKS5zaXplXG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHNjb3Blcy5mb3JFYWNoKChzY29wZSkgPT4gcmVtb3ZlSXRlbShzY29wZS50YXJnZXRzLCB0aGlzKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgW10pXG4gICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBbXSwgMClcbiAgfVxuXG4gIG9uRW5kKGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IG5ld0RyYWdnYWJsZXNJbmRleCA9IFtdXG5cbiAgICBpZiAodGhpcy5nZXRSZWN0YW5nbGUoKS5pbmNsdWRlUG9pbnQoZHJhZ2dhYmxlLmdldENlbnRlcigpKSkge1xuICAgICAgZHJhZ2dhYmxlLnBvc2l0aW9uID0gdGhpcy5ib3VuZChkcmFnZ2FibGUucG9zaXRpb24sIGRyYWdnYWJsZS5nZXRTaXplKCkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHRoaXMuZW1pdCgndGFyZ2V0OmJlZm9yZUFkZCcsIGRyYWdnYWJsZSlcblxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzID0gdGhpcy5zb3J0aW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLCBbZHJhZ2dhYmxlXSwgbmV3RHJhZ2dhYmxlc0luZGV4KVxuICAgIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgfSksIG5ld0RyYWdnYWJsZXNJbmRleClcblxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgbmV3RHJhZ2dhYmxlc0luZGV4KVxuICAgIGlmICh0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkgIT09IC0xKSB7XG4gICAgICB0aGlzLmFkZFJlbW92ZU9uTW92ZShkcmFnZ2FibGUpXG4gICAgfVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBzZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXcsIHRpbWUpIHtcbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5zbGljZSgwKS5mb3JFYWNoKChkcmFnZ2FibGUsIGkpID0+IHtcbiAgICAgIGNvbnN0IHJlY3QgPSByZWN0YW5nbGVzW2ldLFxuICAgICAgICB0aW1lRW5kID0gdGltZSB8fCB0aW1lID09PSAwID8gdGltZSA6IGluZGV4ZXNPZk5ldy5pbmRleE9mKGkpICE9PSAtMSA/IHRoaXMub3B0aW9ucy50aW1lRW5kIDogdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlXG5cbiAgICAgIGlmIChyZWN0LnJlbW92YWJsZSkge1xuICAgICAgICBkcmFnZ2FibGUubW92ZShkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uLCB0aW1lRW5kLCB0cnVlLCB0cnVlKVxuICAgICAgICByZW1vdmVJdGVtKHRoaXMuaW5uZXJEcmFnZ2FibGVzLCBkcmFnZ2FibGUpXG4gICAgICAgIHRoaXMuZW1pdCgndGFyZ2V0OnJlbW92ZScsIGRyYWdnYWJsZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRyYWdnYWJsZS5tb3ZlKHJlY3QucG9zaXRpb24sIHRpbWVFbmQsIHRydWUsIHRydWUpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGFkZChkcmFnZ2FibGUsIHRpbWUpIHtcbiAgICBjb25zdCBuZXdEcmFnZ2FibGVzSW5kZXggPSB0aGlzLmlubmVyRHJhZ2dhYmxlcy5sZW5ndGhcblxuICAgIHRoaXMuZW1pdCgndGFyZ2V0OmJlZm9yZUFkZCcsIGRyYWdnYWJsZSlcblxuICAgIHRoaXMucHVzaElubmVyRHJhZ2dhYmxlKGRyYWdnYWJsZSlcbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBuZXdEcmFnZ2FibGVzSW5kZXgsIGRyYWdnYWJsZSlcblxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgW25ld0RyYWdnYWJsZXNJbmRleF0sIHRpbWUgfHwgMClcbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMSkge1xuICAgICAgdGhpcy5hZGRSZW1vdmVPbk1vdmUoZHJhZ2dhYmxlKVxuICAgIH1cbiAgfVxuXG4gIHB1c2hJbm5lckRyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpPT09LTEpIHtcbiAgICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxuICAgIH1cbiAgfVxuXG4gIGFkZFJlbW92ZU9uTW92ZShkcmFnZ2FibGUpIHtcbiAgICBkcmFnZ2FibGUub24oJ2RyYWc6bW92ZScsIHRoaXMucmVtb3ZlSGFuZGxlciA9ICgpID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlKGRyYWdnYWJsZSlcbiAgICB9KVxuXG4gICAgdGhpcy5lbWl0KCd0YXJnZXQ6YWRkJywgZHJhZ2dhYmxlKVxuICB9XG5cbiAgcmVtb3ZlKGRyYWdnYWJsZSkge1xuICAgIGRyYWdnYWJsZS51bnN1YnNjcmliZSgnZHJhZzptb3ZlJywgdGhpcy5yZW1vdmVIYW5kbGVyKVxuXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSlcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5zcGxpY2UoaW5kZXgsIDEpXG5cbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBbXSlcblxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgW10pXG4gICAgdGhpcy5lbWl0KCd0YXJnZXQ6cmVtb3ZlJywgZHJhZ2dhYmxlKVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUubW92ZShkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uLCAwLCB0cnVlLCB0cnVlKVxuICAgICAgdGhpcy5lbWl0KCd0YXJnZXQ6cmVtb3ZlJywgZHJhZ2dhYmxlKVxuICAgIH0pXG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMgPSBbXVxuICB9XG5cbiAgZ2V0U29ydGVkRHJhZ2dhYmxlcygpIHtcbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5zbGljZSgpXG4gIH1cblxuICBnZXQgY29udGFpbmVyKCkge1xuICAgIHJldHVybiAodGhpcy5fY29udGFpbmVyID0gdGhpcy5fY29udGFpbmVyIHx8IHRoaXMub3B0aW9ucy5jb250YWluZXIgfHwgdGhpcy5vcHRpb25zLnBhcmVudCB8fCBnZXREZWZhdWx0Q29udGFpbmVyKHRoaXMuZWxlbWVudCkpXG4gIH1cbn1cblxuVGFyZ2V0LmVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKClcblRhcmdldC5lbWl0dGVyLm9uKCd0YXJnZXQ6Y3JlYXRlJywgYWRkVG9EZWZhdWx0U2NvcGUpXG4iLCJpbXBvcnQgcmVtb3ZlSXRlbSBmcm9tICcuL3V0aWxzL3JlbW92ZS1hcnJheS1pdGVtJ1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50RW1pdHRlcidcbmltcG9ydCBEcmFnZ2FibGUgZnJvbSAnLi9kcmFnZ2FibGUnXG5pbXBvcnQgVGFyZ2V0IGZyb20gJy4vdGFyZ2V0J1xuXG5jb25zdCBzY29wZXMgPSBbXVxuXG5jbGFzcyBTY29wZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKGRyYWdnYWJsZXMsIHRhcmdldHMsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcihvcHRpb25zKVxuICAgIHNjb3Blcy5mb3JFYWNoKChzY29wZSkgPT4ge1xuICAgICAgaWYgKGRyYWdnYWJsZXMpIHtcbiAgICAgICAgZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgICAgICByZW1vdmVJdGVtKHNjb3BlLmRyYWdnYWJsZXMsIGRyYWdnYWJsZSlcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgaWYgKHRhcmdldHMpIHtcbiAgICAgICAgdGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHtcbiAgICAgICAgICByZW1vdmVJdGVtKHNjb3BlLnRhcmdldHMsIHRhcmdldClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gZHJhZ2dhYmxlcyB8fCBbXVxuICAgIHRoaXMudGFyZ2V0cyA9IHRhcmdldHMgfHwgW11cbiAgICBzY29wZXMucHVzaCh0aGlzKVxuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgIHRpbWVFbmQ6IChvcHRpb25zLnRpbWVFbmQpIHx8IDQwMFxuICAgIH1cblxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5kcmFnRW5kQWN0aW9uID0gKCkgPT4gdGhpcy5vbkVuZChkcmFnZ2FibGUpXG4gICAgfSlcbiAgfVxuXG4gIGFkZERyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMucHVzaChkcmFnZ2FibGUpXG4gICAgZHJhZ2dhYmxlLmRyYWdFbmRBY3Rpb24gPSAoKSA9PiB0aGlzLm9uRW5kKGRyYWdnYWJsZSlcbiAgfVxuXG4gIGFkZFRhcmdldCh0YXJnZXQpIHtcbiAgICB0aGlzLnRhcmdldHMucHVzaCh0YXJnZXQpXG4gIH1cblxuICBvbkVuZChkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBzaG90VGFyZ2V0cyA9IHRoaXMudGFyZ2V0cy5maWx0ZXIoKHRhcmdldCkgPT4ge1xuICAgICAgcmV0dXJuIHRhcmdldC5kcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTFcbiAgICB9KS5maWx0ZXIoKHRhcmdldCkgPT4ge1xuICAgICAgcmV0dXJuIHRhcmdldC5jYXRjaERyYWdnYWJsZShkcmFnZ2FibGUpXG4gICAgfSkuc29ydCgoYSwgYikgPT4ge1xuICAgICAgcmV0dXJuIGEuZ2V0UmVjdGFuZ2xlKCkuZ2V0U3F1YXJlKCkgLSBiLmdldFJlY3RhbmdsZSgpLmdldFNxdWFyZSgpXG4gICAgfSlcblxuICAgIGlmIChzaG90VGFyZ2V0cy5sZW5ndGgpIHtcbiAgICAgIHNob3RUYXJnZXRzWzBdLm9uRW5kKGRyYWdnYWJsZSlcbiAgICB9IGVsc2UgaWYgKGRyYWdnYWJsZS50YXJnZXRzLmxlbmd0aCkge1xuICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKGRyYWdnYWJsZS5pbml0aWFsUG9zaXRpb24sIHRoaXMub3B0aW9ucy50aW1lRW5kKVxuICAgIH1cblxuICAgIHRoaXMuZW1pdCgnc2NvcGU6Y2hhbmdlJylcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMudGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHRhcmdldC5yZXNldCgpKVxuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucmVmcmVzaCgpKVxuICAgIHRoaXMudGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHRhcmdldC5yZWZyZXNoKCkpXG4gIH1cblxuICBnZXQgcG9zaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnRhcmdldHMubWFwKCh0YXJnZXQpID0+IHtcbiAgICAgIHJldHVybiB0YXJnZXQuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB0aGlzLmRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpKVxuICAgIH0pXG4gIH1cblxuICBzZXQgcG9zaXRpb25zKHBvc2l0aW9ucykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSAnd3JvbmcgYXJyYXkgbGVuZ3RoJ1xuICAgIGlmIChwb3NpdGlvbnMubGVuZ3RoID09PSB0aGlzLnRhcmdldHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB0YXJnZXQucmVzZXQoKSlcblxuICAgICAgcG9zaXRpb25zLmZvckVhY2goKHRhcmdldEluZGV4ZXMsIGkpID0+IHtcbiAgICAgICAgdGFyZ2V0SW5kZXhlcy5mb3JFYWNoKChpbmRleCkgPT4ge1xuICAgICAgICAgIHRoaXMudGFyZ2V0c1tpXS5hZGQodGhpcy5kcmFnZ2FibGVzW2luZGV4XSlcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG1lc3NhZ2VcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgZGVmYXVsdFNjb3BlID0gbmV3IFNjb3BlKClcblxuZnVuY3Rpb24gc2NvcGUoZm4pIHtcbiAgY29uc3QgY3VycmVudFNjb3BlID0gbmV3IFNjb3BlKClcblxuICBjb25zdCBhZGREcmFnZ2FibGVUb1Njb3BlID0gZnVuY3Rpb24oZHJhZ2dhYmxlKSB7XG4gICAgY3VycmVudFNjb3BlLmFkZERyYWdnYWJsZShkcmFnZ2FibGUpXG4gICAgRHJhZ2dhYmxlLmVtaXR0ZXIuaW50ZXJydXB0KClcbiAgfVxuXG4gIGNvbnN0IGFkZFRhcmdldFRvU2NvcGUgPSBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICBjdXJyZW50U2NvcGUuYWRkVGFyZ2V0KHRhcmdldClcbiAgICBEcmFnZ2FibGUuZW1pdHRlci5pbnRlcnJ1cHQoKVxuICB9XG5cbiAgRHJhZ2dhYmxlLmVtaXR0ZXIucHJlcGVuZE9uKCdkcmFnZ2FibGU6Y3JlYXRlJywgYWRkRHJhZ2dhYmxlVG9TY29wZSlcbiAgVGFyZ2V0LmVtaXR0ZXIucHJlcGVuZE9uKCd0YXJnZXQ6Y3JlYXRlJywgYWRkVGFyZ2V0VG9TY29wZSlcbiAgZm4uY2FsbCgpXG4gIERyYWdnYWJsZS5lbWl0dGVyLnVuc3Vic2NyaWJlKCdkcmFnZ2FibGU6Y3JlYXRlJywgYWRkRHJhZ2dhYmxlVG9TY29wZSlcbiAgVGFyZ2V0LmVtaXR0ZXIudW5zdWJzY3JpYmUoJ3RhcmdldDpjcmVhdGUnLCBhZGRUYXJnZXRUb1Njb3BlKVxuICByZXR1cm4gY3VycmVudFNjb3BlXG59XG5cbmV4cG9ydCB7IHNjb3BlcywgZGVmYXVsdFNjb3BlLCBTY29wZSwgc2NvcGUgfVxuIiwiZnVuY3Rpb24gY2hlY2tTdXBwb3J0UGFzc2l2ZUV2ZW50cygpIHtcbiAgbGV0IHBhc3NpdmVTdXBwb3J0ZWQgPSBmYWxzZVxuXG4gIHRyeSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ3Bhc3NpdmUnLCB7XG4gICAgICBnZXQoKSB7XG4gICAgICAgIHJldHVybiAocGFzc2l2ZVN1cHBvcnRlZCA9IHRydWUpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0ZXN0Jywgb3B0aW9ucywgb3B0aW9ucylcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndGVzdCcsIG9wdGlvbnMsIG9wdGlvbnMpXG4gIH0gY2F0Y2ggKF9lcnIpIHtcbiAgICBwYXNzaXZlU3VwcG9ydGVkID0gZmFsc2VcbiAgfVxuXG4gIHJldHVybiBwYXNzaXZlU3VwcG9ydGVkXG59XG5cbmV4cG9ydCBjb25zdCBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzID0gY2hlY2tTdXBwb3J0UGFzc2l2ZUV2ZW50cygpXG5cbmZ1bmN0aW9uIGV2ZW50T3B0aW9ucyhvcHRpb25zLCBmYWxsYmFjayA9IGZhbHNlKSB7XG4gIHJldHVybiBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzID8gb3B0aW9ucyA6IGZhbGxiYWNrXG59XG5cbmV4cG9ydCB7IGV2ZW50T3B0aW9ucyB9XG5cbmV4cG9ydCBkZWZhdWx0IGlzU3VwcG9ydFBhc3NpdmVFdmVudHNcbiIsImltcG9ydCBnZXREZWZhdWx0Q29udGFpbmVyIGZyb20gJy4vdXRpbHMvZ2V0LWRlZmF1bHQtY29udGFpbmVyJ1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50RW1pdHRlcidcbmltcG9ydCBnZXRTdHlsZVByb3BlcnR5IGZyb20gJ2Rlc2FuZHJvLWdldC1zdHlsZS1wcm9wZXJ0eSdcbmltcG9ydCB7IEJvdW5kVG9FbGVtZW50IH0gZnJvbSAnLi9ib3VuZGluZydcbmltcG9ydCBQb2ludCBmcm9tICcuL2dlb21ldHJ5L3BvaW50J1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tICcuL2dlb21ldHJ5L3JlY3RhbmdsZSdcbmltcG9ydCB7IGRlZmF1bHRTY29wZSB9IGZyb20gJy4vc2NvcGUnXG5pbXBvcnQgaXNTdXBwb3J0UGFzc2l2ZUV2ZW50cyBmcm9tICcuL3V0aWxzL2lzLXN1cHBvcnQtcGFzc2l2ZS1ldmVudHMnXG5cbmNvbnN0IGlzVG91Y2ggPSAnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3dcbmNvbnN0IG1vdXNlRXZlbnRzID0ge1xuICBzdGFydDogJ21vdXNlZG93bicsXG4gIG1vdmU6ICdtb3VzZW1vdmUnLFxuICBlbmQ6ICdtb3VzZXVwJ1xufVxuY29uc3QgdG91Y2hFdmVudHMgPSB7XG4gIHN0YXJ0OiAndG91Y2hzdGFydCcsXG4gIG1vdmU6ICd0b3VjaG1vdmUnLFxuICBlbmQ6ICd0b3VjaGVuZCdcbn1cbmNvbnN0IGRyYWdnYWJsZXMgPSBbXVxuY29uc3QgdHJhbnNmb3JtUHJvcGVydHkgPSBnZXRTdHlsZVByb3BlcnR5KCd0cmFuc2Zvcm0nKVxuY29uc3QgdHJhbnNpdGlvblByb3BlcnR5ID0gZ2V0U3R5bGVQcm9wZXJ0eSgndHJhbnNpdGlvbicpXG5cbmZ1bmN0aW9uIGdldFRvdWNoQnlJRChlbGVtZW50LCB0b3VjaElkKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudC5jaGFuZ2VkVG91Y2hlcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChlbGVtZW50LmNoYW5nZWRUb3VjaGVzW2ldLmlkZW50aWZpZXIgPT09IHRvdWNoSWQpIHtcbiAgICAgIHJldHVybiBlbGVtZW50LmNoYW5nZWRUb3VjaGVzW2ldXG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZVxufVxuXG5mdW5jdGlvbiBwcmV2ZW50RG91YmxlSW5pdChkcmFnZ2FibGUpIHtcbiAgY29uc3QgbWVzc2FnZSA9IFwiZm9yIHRoaXMgZWxlbWVudCBEcmFnZWUuRHJhZ2dhYmxlIGlzIGFscmVhZHkgZXhpc3QsIGRvbid0IGNyZWF0ZSBpdCB0d2ljZSBcIlxuICBpZiAoZHJhZ2dhYmxlcy5zb21lKChleGlzdGluZykgPT4gZHJhZ2dhYmxlLmVsZW1lbnQgPT09IGV4aXN0aW5nLmVsZW1lbnQpKSB7XG4gICAgdGhyb3cgbWVzc2FnZVxuICB9XG4gIGRyYWdnYWJsZXMucHVzaChkcmFnZ2FibGUpXG59XG5cbmZ1bmN0aW9uIGFkZFRvRGVmYXVsdFNjb3BlKGRyYWdnYWJsZSkge1xuICBkZWZhdWx0U2NvcGUuYWRkRHJhZ2dhYmxlKGRyYWdnYWJsZSlcbn1cblxuZnVuY3Rpb24gY29weVN0eWxlcyhzb3VyY2UsIGRlc3RpbmF0aW9uKSB7XG4gIGNvbnN0IGNzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoc291cmNlKVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY3MubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBrZXkgPSBjc1tpXVxuICAgIGlmICgoa2V5LmluZGV4T2YoJ3RyYW5zaXRpb24nKSA8IDApICYmIChrZXkuaW5kZXhPZigndHJhbnNmb3JtJykgPCAwKSkge1xuICAgICAgZGVzdGluYXRpb24uc3R5bGVba2V5XSA9IGNzW2tleV1cbiAgICB9XG4gIH1cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNvdXJjZS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgIGNvcHlTdHlsZXMoc291cmNlLmNoaWxkcmVuW2ldLCBkZXN0aW5hdGlvbi5jaGlsZHJlbltpXSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcmFnZ2FibGUgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBvcHRpb25zPXt9KSB7XG4gICAgc3VwZXIob3B0aW9ucylcbiAgICB0aGlzLnRhcmdldHMgPSBbXVxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG4gICAgcHJldmVudERvdWJsZUluaXQodGhpcylcbiAgICBEcmFnZ2FibGUuZW1pdHRlci5lbWl0KCdkcmFnZ2FibGU6Y3JlYXRlJywgdGhpcylcbiAgICB0aGlzLl9lbmFibGUgPSB0cnVlXG5cbiAgICB0aGlzLnN0YXJ0Qm91bmRpbmcoKVxuICAgIHRoaXMuc3RhcnRQb3NpdGlvbmluZygpXG4gICAgdGhpcy5zdGFydExpc3RlbmluZygpXG4gIH1cblxuICBzdGFydEJvdW5kaW5nKCkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuYm91bmQpIHtcbiAgICAgIHRoaXMuYm91bmRpbmcgPSB7IGJvdW5kOiB0aGlzLm9wdGlvbnMuYm91bmQgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmJvdW5kaW5nID0gbmV3IEJvdW5kVG9FbGVtZW50KHRoaXMuY29udGFpbmVyLCB0aGlzLmNvbnRhaW5lcilcbiAgICB9XG4gIH1cblxuICBzdGFydFBvc2l0aW9uaW5nKCkge1xuICAgIHRoaXMuX3NldERlZmF1bHRUcmFuc2l0aW9uKClcbiAgICB0aGlzLm9mZnNldCA9IFBvaW50LmVsZW1lbnRPZmZzZXQodGhpcy5lbGVtZW50LCB0aGlzLmNvbnRhaW5lciwgdHJ1ZSlcbiAgICB0aGlzLnBpbm5lZFBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICB0aGlzLmluaXRpYWxQb3NpdGlvbiA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbiB8fCB0aGlzLm9mZnNldFxuXG4gICAgdGhpcy5waW5Qb3NpdGlvbih0aGlzLmluaXRpYWxQb3NpdGlvbilcblxuICAgIGlmICh0aGlzLmJvdW5kaW5nLnJlZnJlc2gpIHtcbiAgICAgIHRoaXMuYm91bmRpbmcucmVmcmVzaCgpXG4gICAgfVxuICB9XG5cbiAgc3RhcnRMaXN0ZW5pbmcoKSB7XG4gICAgdGhpcy5fZHJhZ1N0YXJ0ID0gKGV2ZW50KSA9PiB0aGlzLmRyYWdTdGFydChldmVudClcbiAgICB0aGlzLl9kcmFnTW92ZSA9IChldmVudCkgPT4gdGhpcy5kcmFnTW92ZShldmVudClcbiAgICB0aGlzLl9kcmFnRW5kID0gKGV2ZW50KSA9PiB0aGlzLmRyYWdFbmQoZXZlbnQpXG4gICAgdGhpcy5fbmF0aXZlRHJhZ1N0YXJ0ID0gKGV2ZW50KSA9PiB0aGlzLm5hdGl2ZURyYWdTdGFydChldmVudClcbiAgICB0aGlzLl9uYXRpdmVEcmFnT3ZlciA9IChldmVudCkgPT4gdGhpcy5uYXRpdmVEcmFnT3ZlcihldmVudClcbiAgICB0aGlzLl9uYXRpdmVEcmFnRW5kID0gKGV2ZW50KSA9PiB0aGlzLm5hdGl2ZURyYWdFbmQoZXZlbnQpXG4gICAgdGhpcy5fbmF0aXZlRHJvcCA9IChldmVudCkgPT4gdGhpcy5uYXRpdmVEcm9wKGV2ZW50KVxuICAgIHRoaXMuX3Njcm9sbCA9IChldmVudCkgPT4gdGhpcy5vblNjcm9sbChldmVudClcblxuICAgIHRoaXMuaGFuZGxlci5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQsIGlzU3VwcG9ydFBhc3NpdmVFdmVudHMgPyB7IHBhc3NpdmU6IGZhbHNlIH0gOiBmYWxzZSlcbiAgICB0aGlzLmhhbmRsZXIuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0LCBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzID8geyBwYXNzaXZlOiBmYWxzZSB9IDogZmFsc2UpXG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIHRoaXMuX25hdGl2ZURyYWdTdGFydClcbiAgfVxuXG4gIGdldFNpemUoKSB7XG4gICAgcmV0dXJuIFBvaW50LmVsZW1lbnRTaXplKHRoaXMuZWxlbWVudCwgdGhpcy5vcHRpb25zLmlzQ29udGVudEJveFNpemUpXG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5vZmZzZXQuYWRkKHRoaXMuX3RyYW5zZm9ybVBvc2l0aW9uIHx8IG5ldyBQb2ludCgwLCAwKSlcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvblxuICB9XG5cbiAgZ2V0Q2VudGVyKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLmdldFNpemUoKS5tdWx0KDAuNSkpXG4gIH1cblxuICBfc2V0RGVmYXVsdFRyYW5zaXRpb24gKCkge1xuICAgIHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5lbGVtZW50KVt0cmFuc2l0aW9uUHJvcGVydHldXG4gIH1cblxuICBfc2V0VHJhbnNpdGlvbih0aW1lKSB7XG4gICAgbGV0IHRyYW5zaXRpb24gPSB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNpdGlvblByb3BlcnR5XVxuICAgIGNvbnN0IHRyYW5zaXRpb25Dc3MgPSBgdHJhbnNmb3JtICR7dGltZX1tc2BcblxuICAgIGlmICghL3RyYW5zZm9ybSBcXGQqbT9zLy50ZXN0KHRyYW5zaXRpb24pKSB7XG4gICAgICBpZiAodHJhbnNpdGlvbikge1xuICAgICAgICB0cmFuc2l0aW9uICs9IGAsICR7dHJhbnNpdGlvbkNzc31gXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cmFuc2l0aW9uID0gdHJhbnNpdGlvbkNzc1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0cmFuc2l0aW9uID0gdHJhbnNpdGlvbi5yZXBsYWNlKC90cmFuc2Zvcm0gXFxkKm0/cy8sIHRyYW5zaXRpb25Dc3MpXG4gICAgfVxuXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV0gPSB0cmFuc2l0aW9uXG4gIH1cblxuICBfc2V0VHJhbnNsYXRlKHBvaW50KSB7XG4gICAgdGhpcy5fdHJhbnNmb3JtUG9zaXRpb24gPSBwb2ludFxuICAgIGNvbnN0IHRyYW5zbGF0ZUNzcyA9IGB0cmFuc2xhdGUzZCgke3BvaW50Lnh9cHgsICR7cG9pbnQueX1weCwgMHB4KWBcblxuICAgIGxldCB0cmFuc2Zvcm0gPSB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcGVydHldXG5cbiAgICBpZiAodGhpcy5zaG91bGRSZW1vdmVaZXJvVHJhbnNsYXRlICYmIHBvaW50LnggPT09IDAgJiYgcG9pbnQueSA9PT0gMCkge1xuICAgICAgdHJhbnNmb3JtID0gdHJhbnNmb3JtLnJlcGxhY2UoL3RyYW5zbGF0ZTNkXFwoW14pXStcXCkvLCAnJylcbiAgICB9IGVsc2UgaWYgKCEvdHJhbnNsYXRlM2RcXChbXildK1xcKS8udGVzdCh0cmFuc2Zvcm0pKSB7XG4gICAgICBpZiAodHJhbnNmb3JtKSB7XG4gICAgICAgIHRyYW5zZm9ybSArPSAnICdcbiAgICAgIH1cbiAgICAgIHRyYW5zZm9ybSArPSB0cmFuc2xhdGVDc3NcbiAgICB9IGVsc2Uge1xuICAgICAgdHJhbnNmb3JtID0gdHJhbnNmb3JtLnJlcGxhY2UoL3RyYW5zbGF0ZTNkXFwoW14pXStcXCkvLCB0cmFuc2xhdGVDc3MpXG4gICAgfVxuXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BlcnR5XSA9IHRyYW5zZm9ybVxuICB9XG5cbiAgbW92ZShwb2ludCwgdGltZT0wLCBpc1NpbGVudD1mYWxzZSkge1xuICAgIHBvaW50ID0gcG9pbnQuY2xvbmUoKVxuXG4gICAgdGhpcy5kZXRlcm1pbmVEaXJlY3Rpb24ocG9pbnQpXG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvaW50XG5cbiAgICB0aGlzLl9zZXRUcmFuc2l0aW9uKHRpbWUpXG4gICAgdGhpcy5fc2V0VHJhbnNsYXRlKHBvaW50LnN1Yih0aGlzLm9mZnNldCkpXG5cbiAgICBpZiAoIWlzU2lsZW50KSB7XG4gICAgICB0aGlzLmVtaXQoJ2RyYWc6bW92ZScpXG4gICAgfVxuICB9XG5cbiAgcGluUG9zaXRpb24ocG9pbnQsIHRpbWU9MCwgc2lsZW50PXRydWUpIHtcbiAgICB0aGlzLnBpbm5lZFBvc2l0aW9uID0gcG9pbnQuY2xvbmUoKVxuICAgIHRoaXMubW92ZSh0aGlzLnBpbm5lZFBvc2l0aW9uLCB0aW1lLCBzaWxlbnQpXG4gIH1cblxuICByZXNldFBvc2l0aW9uVG9Jbml0aWFsICgpIHtcbiAgICB0aGlzLnBpblBvc2l0aW9uKHRoaXMuaW5pdGlhbFBvc2l0aW9uKVxuICB9XG5cbiAgcmVmcmVzaFBvc2l0aW9uICgpIHtcbiAgICB0aGlzLnNldFBvc2l0aW9uKHRoaXMuZ2V0UG9zaXRpb24oKSlcbiAgfVxuXG4gIHNldFBvc2l0aW9uKHBvaW50KSB7XG4gICAgcG9pbnQgPSBwb2ludC5jbG9uZSgpXG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvaW50XG4gICAgdGhpcy5fc2V0VHJhbnNpdGlvbigwKVxuICAgIHRoaXMuX3NldFRyYW5zbGF0ZShwb2ludC5zdWIodGhpcy5vZmZzZXQpKVxuICB9XG5cbiAgZGV0ZXJtaW5lRGlyZWN0aW9uKHBvaW50KSB7XG4gICAgdGhpcy5sZWZ0RGlyZWN0aW9uID0gKHRoaXMucG9zaXRpb24ueCA8IHBvaW50LngpXG4gICAgdGhpcy5yaWdodERpcmVjdGlvbiA9ICh0aGlzLnBvc2l0aW9uLnggPiBwb2ludC54KVxuICAgIHRoaXMudXBEaXJlY3Rpb24gPSAodGhpcy5wb3NpdGlvbi55ID4gcG9pbnQueSlcbiAgICB0aGlzLmRvd25EaXJlY3Rpb24gPSAodGhpcy5wb3NpdGlvbi55IDwgcG9pbnQueSlcbiAgfVxuXG4gIGRyYWdTdGFydChldmVudCkge1xuICAgIHRoaXMuY3VycmVudEV2ZW50ID0gZXZlbnRcbiAgICBpZiAoIXRoaXMuX2VuYWJsZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaXNUb3VjaEV2ZW50ID0gKGlzVG91Y2ggJiYgKGV2ZW50IGluc3RhbmNlb2Ygd2luZG93LlRvdWNoRXZlbnQpKVxuXG4gICAgdGhpcy50b3VjaFBvaW50ID0gdGhpcy5fc3RhcnRUb3VjaFBvaW50ID0gbmV3IFBvaW50KFxuICAgICAgaXNUb3VjaEV2ZW50ID8gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVggOiBldmVudC5jbGllbnRYLFxuICAgICAgaXNUb3VjaEV2ZW50ID8gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVkgOiBldmVudC5jbGllbnRZXG4gICAgKVxuXG4gICAgdGhpcy5fc3RhcnRQb3NpdGlvbiA9IHRoaXMuZ2V0UG9zaXRpb24oKVxuICAgIGlmIChpc1RvdWNoRXZlbnQpIHtcbiAgICAgIHRoaXMuX3RvdWNoSWQgPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5pZGVudGlmaWVyXG4gICAgfVxuXG4gICAgdGhpcy5fc3RhcnRTY3JvbGxQb2ludCA9IG5ldyBQb2ludCh3aW5kb3cuc2Nyb2xsWCwgd2luZG93LnNjcm9sbFkpXG5cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGlmIChldmVudC50YXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElucHV0RWxlbWVudCB8fFxuICAgICAgICAgIGV2ZW50LnRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSW5wdXRFbGVtZW50KSB7XG4gICAgICBldmVudC50YXJnZXQuZm9jdXMoKVxuICAgIH1cblxuICAgIGlmICghKHRoaXMubmF0aXZlRHJhZ0FuZERyb3AgfHxcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSW5wdXRFbGVtZW50IHx8XG4gICAgICAgICAgICBldmVudC50YXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElucHV0RWxlbWVudCkpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB9XG5cbiAgICBpZiAodGhpcy5uYXRpdmVEcmFnQW5kRHJvcCkge1xuICAgICAgY29uc3QgaXNTYWZhcmkgPSAvdmVyc2lvblxcLyhcXGQrKS4rP3NhZmFyaS9pLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpXG4gICAgICBpZiAoKGlzVG91Y2hFdmVudCAmJiB0aGlzLmVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcE9uVG91Y2gpIHx8XG4gICAgICAgICAgICAgaXNTYWZhcmkgfHxcbiAgICAgICAgICAgICB0aGlzLmVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcEZvckFsbCkge1xuICAgICAgICB0aGlzLmVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcChldmVudClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5kcmFnZ2FibGUgPSB0cnVlXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9uYXRpdmVEcmFnRW5kLCBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzID8geyBwYXNzaXZlOiBmYWxzZSB9IDogZmFsc2UpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUsIGlzU3VwcG9ydFBhc3NpdmVFdmVudHMgPyB7IHBhc3NpdmU6IGZhbHNlIH0gOiBmYWxzZSlcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUsIGlzU3VwcG9ydFBhc3NpdmVFdmVudHMgPyB7IHBhc3NpdmU6IGZhbHNlIH0gOiBmYWxzZSlcblxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQsIGlzU3VwcG9ydFBhc3NpdmVFdmVudHMgPyB7IHBhc3NpdmU6IGZhbHNlIH0gOiBmYWxzZSlcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kLCBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzID8geyBwYXNzaXZlOiBmYWxzZSB9IDogZmFsc2UpXG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX3Njcm9sbClcblxuICAgIHRoaXMuaXNEcmFnZ2luZyA9IHRydWVcbiAgICB0aGlzLmVtaXQoJ2RyYWc6c3RhcnQnKVxuICB9XG5cbiAgZHJhZ01vdmUoZXZlbnQpIHtcbiAgICB0aGlzLmN1cnJlbnRFdmVudCA9IGV2ZW50XG4gICAgbGV0IHRvdWNoXG5cbiAgICBjb25zdCBpc1RvdWNoRXZlbnQgPSAoaXNUb3VjaCAmJiAoZXZlbnQgaW5zdGFuY2VvZiB3aW5kb3cuVG91Y2hFdmVudCkpXG4gICAgaWYgKGlzVG91Y2hFdmVudCkge1xuICAgICAgdG91Y2ggPSBnZXRUb3VjaEJ5SUQoZXZlbnQsIHRoaXMuX3RvdWNoSWQpXG5cbiAgICAgIGlmICghdG91Y2gpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhpcy50b3VjaFBvaW50ID0gbmV3IFBvaW50KFxuICAgICAgaXNUb3VjaEV2ZW50ID8gdG91Y2gucGFnZVggOiBldmVudC5jbGllbnRYLFxuICAgICAgaXNUb3VjaEV2ZW50ID8gdG91Y2gucGFnZVkgOiBldmVudC5jbGllbnRZXG4gICAgKVxuXG4gICAgbGV0IHBvaW50ID0gdGhpcy5fc3RhcnRQb3NpdGlvbi5hZGQodGhpcy50b3VjaFBvaW50LnN1Yih0aGlzLl9zdGFydFRvdWNoUG9pbnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMuc2Nyb2xsUG9pbnQuc3ViKHRoaXMuX3N0YXJ0U2Nyb2xsUG9pbnQpKVxuXG4gICAgcG9pbnQgPSB0aGlzLmJvdW5kaW5nLmJvdW5kKHBvaW50LCB0aGlzLmdldFNpemUoKSlcbiAgICB0aGlzLm1vdmUocG9pbnQpXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RyYWdlZS1hY3RpdmUnKVxuICB9XG5cbiAgZHJhZ0VuZChldmVudCkge1xuICAgIGNvbnN0IGlzVG91Y2hFdmVudCA9IChpc1RvdWNoICYmIChldmVudCBpbnN0YW5jZW9mIHdpbmRvdy5Ub3VjaEV2ZW50KSlcblxuICAgIGlmIChpc1RvdWNoRXZlbnQgJiYgIWdldFRvdWNoQnlJRChldmVudCwgdGhpcy5fdG91Y2hJZCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIHRoaXMuZHJhZ0VuZEFjdGlvbigpXG4gICAgdGhpcy5lbWl0KCdkcmFnOmVuZCcpXG5cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG5cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcblxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9zY3JvbGwpXG5cbiAgICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZVxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2RyYWdnYWJsZScpXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2VlLWFjdGl2ZScpKVxuICB9XG5cbiAgb25TY3JvbGwoX2V2ZW50KSB7XG4gICAgbGV0IHBvaW50ID0gdGhpcy5fc3RhcnRQb3NpdGlvbi5hZGQodGhpcy50b3VjaFBvaW50LnN1Yih0aGlzLl9zdGFydFRvdWNoUG9pbnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMuc2Nyb2xsUG9pbnQuc3ViKHRoaXMuX3N0YXJ0U2Nyb2xsUG9pbnQpKVxuXG4gICAgcG9pbnQgPSB0aGlzLmJvdW5kaW5nLmJvdW5kKHBvaW50LCB0aGlzLmdldFNpemUoKSlcbiAgICBpZiAoIXRoaXMubmF0aXZlRHJhZ0FuZERyb3ApIHtcbiAgICAgIHRoaXMubW92ZShwb2ludClcbiAgICB9XG4gIH1cblxuICBuYXRpdmVEcmFnU3RhcnQoZXZlbnQpIHtcbiAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dCcsICdGaXJlRm94IGZpeCcpXG4gICAgZXZlbnQuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSAnbW92ZSdcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIHRoaXMuX25hdGl2ZURyYWdPdmVyKVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzLl9uYXRpdmVEcm9wKVxuICB9XG5cbiAgbmF0aXZlRHJhZ092ZXIoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZXZlbnQuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnbW92ZSdcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZHJhZ2VlLXBsYWNlaG9sZGVyJylcbiAgICB0aGlzLmN1cnJlbnRFdmVudCA9IGV2ZW50XG4gICAgaWYgKGV2ZW50LmNsaWVudFggPT09IDAgJiYgZXZlbnQuY2xpZW50WSA9PT0gMCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy50b3VjaFBvaW50ID0gbmV3IFBvaW50KGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpXG4gICAgbGV0IHBvaW50ID0gdGhpcy5fc3RhcnRQb3NpdGlvbi5hZGQodGhpcy50b3VjaFBvaW50LnN1Yih0aGlzLl9zdGFydFRvdWNoUG9pbnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMuc2Nyb2xsUG9pbnQuc3ViKHRoaXMuX3N0YXJ0U2Nyb2xsUG9pbnQpKVxuICAgIHBvaW50ID0gdGhpcy5ib3VuZGluZy5ib3VuZChwb2ludCwgdGhpcy5nZXRTaXplKCkpXG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvaW50XG4gICAgdGhpcy5lbWl0KCdkcmFnOm1vdmUnKVxuICB9XG5cbiAgbmF0aXZlRHJhZ0VuZChfZXZlbnQpIHtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2VlLXBsYWNlaG9sZGVyJylcbiAgICB0aGlzLmRyYWdFbmRBY3Rpb24oKVxuICAgIHRoaXMuZW1pdCgnZHJhZzplbmQnKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgdGhpcy5fbmF0aXZlRHJhZ092ZXIpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIHRoaXMuX25hdGl2ZURyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX25hdGl2ZURyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJvcCcsIHRoaXMuX25hdGl2ZURyb3ApXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX3Njcm9sbClcbiAgICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZVxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2RyYWdnYWJsZScpXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdlZS1hY3RpdmUnKVxuICB9XG5cbiAgbmF0aXZlRHJvcChldmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wKGV2ZW50KSB7XG4gICAgY29uc3QgY29udGFpbmVyUmVjdCA9IHRoaXMuY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgY29uc3QgY2xvbmVkRWxlbWVudCA9IHRoaXMuZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSlcbiAgICBjbG9uZWRFbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BlcnR5XSA9ICcnXG4gICAgY29weVN0eWxlcyh0aGlzLmVsZW1lbnQsIGNsb25lZEVsZW1lbnQpXG4gICAgY2xvbmVkRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSdcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNsb25lZEVsZW1lbnQpXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RyYWdlZS1wbGFjZWhvbGRlcicpXG5cbiAgICBjb25zdCBlbXVsYXRpb25EcmFnZ2FibGUgPSBuZXcgRHJhZ2dhYmxlKGNsb25lZEVsZW1lbnQsIHtcbiAgICAgIGNvbnRhaW5lcjogZG9jdW1lbnQuYm9keSxcbiAgICAgIGJvdW5kKHBvaW50KSB7XG4gICAgICAgIHJldHVybiBwb2ludFxuICAgICAgfSxcbiAgICAgIG9uOiB7XG4gICAgICAgICdkcmFnOm1vdmUnOiAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgY29udGFpbmVyUmVjdFBvaW50ID0gbmV3IFBvaW50KGNvbnRhaW5lclJlY3QubGVmdCwgY29udGFpbmVyUmVjdC50b3ApXG4gICAgICAgICAgdGhpcy5wb3NpdGlvbiA9IGVtdWxhdGlvbkRyYWdnYWJsZS5wb3NpdGlvbi5zdWIoY29udGFpbmVyUmVjdFBvaW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3ViKHRoaXMuX3N0YXJ0U2Nyb2xsUG9pbnQpXG4gICAgICAgICAgdGhpcy5lbWl0KCdkcmFnOm1vdmUnKVxuICAgICAgICB9LFxuICAgICAgICAnZHJhZzplbmQnOiAoKSA9PiB7XG4gICAgICAgICAgZW11bGF0aW9uRHJhZ2dhYmxlLmRlc3Ryb3koKVxuICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoY2xvbmVkRWxlbWVudClcbiAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2VlLXBsYWNlaG9sZGVyJylcbiAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2VlLWFjdGl2ZScpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgY29udGFpbmVyUmVjdFBvaW50ID0gbmV3IFBvaW50KGNvbnRhaW5lclJlY3QubGVmdCwgY29udGFpbmVyUmVjdC50b3ApXG4gICAgZW11bGF0aW9uRHJhZ2dhYmxlLl9zdGFydFNjcm9sbFBvaW50ID0gdGhpcy5fc3RhcnRTY3JvbGxQb2ludFxuXG4gICAgZW11bGF0aW9uRHJhZ2dhYmxlLm1vdmUoXG4gICAgICB0aGlzLnBpbm5lZFBvc2l0aW9uLmFkZChjb250YWluZXJSZWN0UG9pbnQpLmFkZChuZXcgUG9pbnQod2luZG93LnNjcm9sbFgsIHdpbmRvdy5zY3JvbGxZKSlcbiAgICApXG5cbiAgICBlbXVsYXRpb25EcmFnZ2FibGUuZHJhZ1N0YXJ0KGV2ZW50KVxuICB9XG5cbiAgZHJhZ0VuZEFjdGlvbigpIHtcbiAgICB0aGlzLnBpblBvc2l0aW9uKHRoaXMucG9zaXRpb24pXG4gIH1cblxuICBnZXRSZWN0YW5nbGUoKSB7XG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUodGhpcy5wb3NpdGlvbiwgdGhpcy5nZXRTaXplKCkpXG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIGlmICh0aGlzLmJvdW5kaW5nLnJlZnJlc2gpIHtcbiAgICAgIHRoaXMuYm91bmRpbmcucmVmcmVzaCgpXG4gICAgfVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmhhbmRsZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0KVxuICAgIHRoaXMuaGFuZGxlci5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQpXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIHRoaXMuX25hdGl2ZURyYWdTdGFydClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCB0aGlzLl9uYXRpdmVEcmFnT3ZlcilcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcm9wJywgdGhpcy5fbmF0aXZlRHJvcClcbiAgICB0aGlzLnJlc2V0RW1pdHRlcigpXG5cbiAgICBjb25zdCBpbmRleCA9IGRyYWdnYWJsZXMuaW5kZXhPZih0aGlzKVxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICBkcmFnZ2FibGVzLnNwbGljZShpbmRleCwgMSlcbiAgICB9XG4gIH1cblxuICBnZXQgY29udGFpbmVyKCkge1xuICAgIHJldHVybiAodGhpcy5fY29udGFpbmVyID0gdGhpcy5fY29udGFpbmVyIHx8IHRoaXMub3B0aW9ucy5jb250YWluZXIgfHwgdGhpcy5vcHRpb25zLnBhcmVudCB8fCBnZXREZWZhdWx0Q29udGFpbmVyKHRoaXMuZWxlbWVudCkpXG4gIH1cblxuICBnZXQgaGFuZGxlcigpIHtcbiAgICBpZiAoIXRoaXMuX2hhbmRsZXIpIHtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmhhbmRsZXIgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZXIgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLm9wdGlvbnMuaGFuZGxlcikgfHwgdGhpcy5lbGVtZW50XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9oYW5kbGVyID0gdGhpcy5vcHRpb25zLmhhbmRsZXIgfHwgdGhpcy5lbGVtZW50XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2hhbmRsZXJcbiAgfVxuXG4gIGdldCBuYXRpdmVEcmFnQW5kRHJvcCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLm5hdGl2ZURyYWdBbmREcm9wIHx8IGZhbHNlXG4gIH1cblxuICBnZXQgZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wT25Ub3VjaCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcE9uVG91Y2ggfHwgdHJ1ZVxuICB9XG5cbiAgZ2V0IGVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcEZvckFsbCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcEZvckFsbCB8fCBmYWxzZVxuICB9XG5cbiAgZ2V0IHNob3VsZFJlbW92ZVplcm9UcmFuc2xhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5zaG91bGRSZW1vdmVaZXJvVHJhbnNsYXRlIHx8IGZhbHNlXG4gIH1cblxuICBnZXQgc2Nyb2xsUG9pbnQoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh3aW5kb3cuc2Nyb2xsWCwgd2luZG93LnNjcm9sbFkpXG4gIH1cblxuICBnZXQgZW5hYmxlKCkge1xuICAgIHJldHVybiB0aGlzLl9lbmFibGVcbiAgfVxuXG4gIHNldCBlbmFibGUoZW5hYmxlKSB7XG4gICAgaWYgKGVuYWJsZSkge1xuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdlZS1kaXNhYmxlJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RyYWdlZS1kaXNhYmxlJylcbiAgICB9XG5cbiAgICB0aGlzLl9lbmFibGUgPSBlbmFibGVcbiAgfVxufVxuXG5EcmFnZ2FibGUuZW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuRHJhZ2dhYmxlLmVtaXR0ZXIub24oJ2RyYWdnYWJsZTpjcmVhdGUnLCBhZGRUb0RlZmF1bHRTY29wZSlcbiIsInZhciByZXNpemVPYnNlcnZlcnMgPSBbXTtcbmV4cG9ydCB7IHJlc2l6ZU9ic2VydmVycyB9O1xuIiwiaW1wb3J0IHsgcmVzaXplT2JzZXJ2ZXJzIH0gZnJvbSAnLi4vdXRpbHMvcmVzaXplT2JzZXJ2ZXJzJztcbnZhciBoYXNBY3RpdmVPYnNlcnZhdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHJlc2l6ZU9ic2VydmVycy5zb21lKGZ1bmN0aW9uIChybykgeyByZXR1cm4gcm8uYWN0aXZlVGFyZ2V0cy5sZW5ndGggPiAwOyB9KTtcbn07XG5leHBvcnQgeyBoYXNBY3RpdmVPYnNlcnZhdGlvbnMgfTtcbiIsImltcG9ydCB7IHJlc2l6ZU9ic2VydmVycyB9IGZyb20gJy4uL3V0aWxzL3Jlc2l6ZU9ic2VydmVycyc7XG52YXIgaGFzU2tpcHBlZE9ic2VydmF0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gcmVzaXplT2JzZXJ2ZXJzLnNvbWUoZnVuY3Rpb24gKHJvKSB7IHJldHVybiByby5za2lwcGVkVGFyZ2V0cy5sZW5ndGggPiAwOyB9KTtcbn07XG5leHBvcnQgeyBoYXNTa2lwcGVkT2JzZXJ2YXRpb25zIH07XG4iLCJ2YXIgbXNnID0gJ1Jlc2l6ZU9ic2VydmVyIGxvb3AgY29tcGxldGVkIHdpdGggdW5kZWxpdmVyZWQgbm90aWZpY2F0aW9ucy4nO1xudmFyIGRlbGl2ZXJSZXNpemVMb29wRXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV2ZW50O1xuICAgIGlmICh0eXBlb2YgRXJyb3JFdmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBldmVudCA9IG5ldyBFcnJvckV2ZW50KCdlcnJvcicsIHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1zZ1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50Jyk7XG4gICAgICAgIGV2ZW50LmluaXRFdmVudCgnZXJyb3InLCBmYWxzZSwgZmFsc2UpO1xuICAgICAgICBldmVudC5tZXNzYWdlID0gbXNnO1xuICAgIH1cbiAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChldmVudCk7XG59O1xuZXhwb3J0IHsgZGVsaXZlclJlc2l6ZUxvb3BFcnJvciB9O1xuIiwidmFyIFJlc2l6ZU9ic2VydmVyQm94T3B0aW9ucztcbihmdW5jdGlvbiAoUmVzaXplT2JzZXJ2ZXJCb3hPcHRpb25zKSB7XG4gICAgUmVzaXplT2JzZXJ2ZXJCb3hPcHRpb25zW1wiQk9SREVSX0JPWFwiXSA9IFwiYm9yZGVyLWJveFwiO1xuICAgIFJlc2l6ZU9ic2VydmVyQm94T3B0aW9uc1tcIkNPTlRFTlRfQk9YXCJdID0gXCJjb250ZW50LWJveFwiO1xuICAgIFJlc2l6ZU9ic2VydmVyQm94T3B0aW9uc1tcIkRFVklDRV9QSVhFTF9DT05URU5UX0JPWFwiXSA9IFwiZGV2aWNlLXBpeGVsLWNvbnRlbnQtYm94XCI7XG59KShSZXNpemVPYnNlcnZlckJveE9wdGlvbnMgfHwgKFJlc2l6ZU9ic2VydmVyQm94T3B0aW9ucyA9IHt9KSk7XG5leHBvcnQgeyBSZXNpemVPYnNlcnZlckJveE9wdGlvbnMgfTtcbiIsImV4cG9ydCB2YXIgZnJlZXplID0gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gT2JqZWN0LmZyZWV6ZShvYmopOyB9O1xuIiwiaW1wb3J0IHsgZnJlZXplIH0gZnJvbSAnLi91dGlscy9mcmVlemUnO1xudmFyIFJlc2l6ZU9ic2VydmVyU2l6ZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUmVzaXplT2JzZXJ2ZXJTaXplKGlubGluZVNpemUsIGJsb2NrU2l6ZSkge1xuICAgICAgICB0aGlzLmlubGluZVNpemUgPSBpbmxpbmVTaXplO1xuICAgICAgICB0aGlzLmJsb2NrU2l6ZSA9IGJsb2NrU2l6ZTtcbiAgICAgICAgZnJlZXplKHRoaXMpO1xuICAgIH1cbiAgICByZXR1cm4gUmVzaXplT2JzZXJ2ZXJTaXplO1xufSgpKTtcbmV4cG9ydCB7IFJlc2l6ZU9ic2VydmVyU2l6ZSB9O1xuIiwiaW1wb3J0IHsgZnJlZXplIH0gZnJvbSAnLi91dGlscy9mcmVlemUnO1xudmFyIERPTVJlY3RSZWFkT25seSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRE9NUmVjdFJlYWRPbmx5KHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdGhpcy50b3AgPSB0aGlzLnk7XG4gICAgICAgIHRoaXMubGVmdCA9IHRoaXMueDtcbiAgICAgICAgdGhpcy5ib3R0b20gPSB0aGlzLnRvcCArIHRoaXMuaGVpZ2h0O1xuICAgICAgICB0aGlzLnJpZ2h0ID0gdGhpcy5sZWZ0ICsgdGhpcy53aWR0aDtcbiAgICAgICAgcmV0dXJuIGZyZWV6ZSh0aGlzKTtcbiAgICB9XG4gICAgRE9NUmVjdFJlYWRPbmx5LnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYSA9IHRoaXMsIHggPSBfYS54LCB5ID0gX2EueSwgdG9wID0gX2EudG9wLCByaWdodCA9IF9hLnJpZ2h0LCBib3R0b20gPSBfYS5ib3R0b20sIGxlZnQgPSBfYS5sZWZ0LCB3aWR0aCA9IF9hLndpZHRoLCBoZWlnaHQgPSBfYS5oZWlnaHQ7XG4gICAgICAgIHJldHVybiB7IHg6IHgsIHk6IHksIHRvcDogdG9wLCByaWdodDogcmlnaHQsIGJvdHRvbTogYm90dG9tLCBsZWZ0OiBsZWZ0LCB3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0IH07XG4gICAgfTtcbiAgICBET01SZWN0UmVhZE9ubHkuZnJvbVJlY3QgPSBmdW5jdGlvbiAocmVjdGFuZ2xlKSB7XG4gICAgICAgIHJldHVybiBuZXcgRE9NUmVjdFJlYWRPbmx5KHJlY3RhbmdsZS54LCByZWN0YW5nbGUueSwgcmVjdGFuZ2xlLndpZHRoLCByZWN0YW5nbGUuaGVpZ2h0KTtcbiAgICB9O1xuICAgIHJldHVybiBET01SZWN0UmVhZE9ubHk7XG59KCkpO1xuZXhwb3J0IHsgRE9NUmVjdFJlYWRPbmx5IH07XG4iLCJ2YXIgaXNTVkcgPSBmdW5jdGlvbiAodGFyZ2V0KSB7IHJldHVybiB0YXJnZXQgaW5zdGFuY2VvZiBTVkdFbGVtZW50ICYmICdnZXRCQm94JyBpbiB0YXJnZXQ7IH07XG52YXIgaXNIaWRkZW4gPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgaWYgKGlzU1ZHKHRhcmdldCkpIHtcbiAgICAgICAgdmFyIF9hID0gdGFyZ2V0LmdldEJCb3goKSwgd2lkdGggPSBfYS53aWR0aCwgaGVpZ2h0ID0gX2EuaGVpZ2h0O1xuICAgICAgICByZXR1cm4gIXdpZHRoICYmICFoZWlnaHQ7XG4gICAgfVxuICAgIHZhciBfYiA9IHRhcmdldCwgb2Zmc2V0V2lkdGggPSBfYi5vZmZzZXRXaWR0aCwgb2Zmc2V0SGVpZ2h0ID0gX2Iub2Zmc2V0SGVpZ2h0O1xuICAgIHJldHVybiAhKG9mZnNldFdpZHRoIHx8IG9mZnNldEhlaWdodCB8fCB0YXJnZXQuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgpO1xufTtcbnZhciBpc0VsZW1lbnQgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgdmFyIF9hLCBfYjtcbiAgICBpZiAob2JqIGluc3RhbmNlb2YgRWxlbWVudCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgdmFyIHNjb3BlID0gKF9iID0gKF9hID0gb2JqKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Eub3duZXJEb2N1bWVudCkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmRlZmF1bHRWaWV3O1xuICAgIHJldHVybiAhIShzY29wZSAmJiBvYmogaW5zdGFuY2VvZiBzY29wZS5FbGVtZW50KTtcbn07XG52YXIgaXNSZXBsYWNlZEVsZW1lbnQgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgc3dpdGNoICh0YXJnZXQudGFnTmFtZSkge1xuICAgICAgICBjYXNlICdJTlBVVCc6XG4gICAgICAgICAgICBpZiAodGFyZ2V0LnR5cGUgIT09ICdpbWFnZScpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgY2FzZSAnVklERU8nOlxuICAgICAgICBjYXNlICdBVURJTyc6XG4gICAgICAgIGNhc2UgJ0VNQkVEJzpcbiAgICAgICAgY2FzZSAnT0JKRUNUJzpcbiAgICAgICAgY2FzZSAnQ0FOVkFTJzpcbiAgICAgICAgY2FzZSAnSUZSQU1FJzpcbiAgICAgICAgY2FzZSAnSU1HJzpcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuZXhwb3J0IHsgaXNTVkcsIGlzSGlkZGVuLCBpc0VsZW1lbnQsIGlzUmVwbGFjZWRFbGVtZW50IH07XG4iLCJleHBvcnQgdmFyIGdsb2JhbCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDoge307XG4iLCJpbXBvcnQgeyBSZXNpemVPYnNlcnZlckJveE9wdGlvbnMgfSBmcm9tICcuLi9SZXNpemVPYnNlcnZlckJveE9wdGlvbnMnO1xuaW1wb3J0IHsgUmVzaXplT2JzZXJ2ZXJTaXplIH0gZnJvbSAnLi4vUmVzaXplT2JzZXJ2ZXJTaXplJztcbmltcG9ydCB7IERPTVJlY3RSZWFkT25seSB9IGZyb20gJy4uL0RPTVJlY3RSZWFkT25seSc7XG5pbXBvcnQgeyBpc1NWRywgaXNIaWRkZW4gfSBmcm9tICcuLi91dGlscy9lbGVtZW50JztcbmltcG9ydCB7IGZyZWV6ZSB9IGZyb20gJy4uL3V0aWxzL2ZyZWV6ZSc7XG5pbXBvcnQgeyBnbG9iYWwgfSBmcm9tICcuLi91dGlscy9nbG9iYWwnO1xudmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcbnZhciBzY3JvbGxSZWdleHAgPSAvYXV0b3xzY3JvbGwvO1xudmFyIHZlcnRpY2FsUmVnZXhwID0gL150Ynx2ZXJ0aWNhbC87XG52YXIgSUUgPSAoL21zaWV8dHJpZGVudC9pKS50ZXN0KGdsb2JhbC5uYXZpZ2F0b3IgJiYgZ2xvYmFsLm5hdmlnYXRvci51c2VyQWdlbnQpO1xudmFyIHBhcnNlRGltZW5zaW9uID0gZnVuY3Rpb24gKHBpeGVsKSB7IHJldHVybiBwYXJzZUZsb2F0KHBpeGVsIHx8ICcwJyk7IH07XG52YXIgc2l6ZSA9IGZ1bmN0aW9uIChpbmxpbmVTaXplLCBibG9ja1NpemUsIHN3aXRjaFNpemVzKSB7XG4gICAgaWYgKGlubGluZVNpemUgPT09IHZvaWQgMCkgeyBpbmxpbmVTaXplID0gMDsgfVxuICAgIGlmIChibG9ja1NpemUgPT09IHZvaWQgMCkgeyBibG9ja1NpemUgPSAwOyB9XG4gICAgaWYgKHN3aXRjaFNpemVzID09PSB2b2lkIDApIHsgc3dpdGNoU2l6ZXMgPSBmYWxzZTsgfVxuICAgIHJldHVybiBuZXcgUmVzaXplT2JzZXJ2ZXJTaXplKChzd2l0Y2hTaXplcyA/IGJsb2NrU2l6ZSA6IGlubGluZVNpemUpIHx8IDAsIChzd2l0Y2hTaXplcyA/IGlubGluZVNpemUgOiBibG9ja1NpemUpIHx8IDApO1xufTtcbnZhciB6ZXJvQm94ZXMgPSBmcmVlemUoe1xuICAgIGRldmljZVBpeGVsQ29udGVudEJveFNpemU6IHNpemUoKSxcbiAgICBib3JkZXJCb3hTaXplOiBzaXplKCksXG4gICAgY29udGVudEJveFNpemU6IHNpemUoKSxcbiAgICBjb250ZW50UmVjdDogbmV3IERPTVJlY3RSZWFkT25seSgwLCAwLCAwLCAwKVxufSk7XG52YXIgY2FsY3VsYXRlQm94U2l6ZXMgPSBmdW5jdGlvbiAodGFyZ2V0LCBmb3JjZVJlY2FsY3VsYXRpb24pIHtcbiAgICBpZiAoZm9yY2VSZWNhbGN1bGF0aW9uID09PSB2b2lkIDApIHsgZm9yY2VSZWNhbGN1bGF0aW9uID0gZmFsc2U7IH1cbiAgICBpZiAoY2FjaGUuaGFzKHRhcmdldCkgJiYgIWZvcmNlUmVjYWxjdWxhdGlvbikge1xuICAgICAgICByZXR1cm4gY2FjaGUuZ2V0KHRhcmdldCk7XG4gICAgfVxuICAgIGlmIChpc0hpZGRlbih0YXJnZXQpKSB7XG4gICAgICAgIGNhY2hlLnNldCh0YXJnZXQsIHplcm9Cb3hlcyk7XG4gICAgICAgIHJldHVybiB6ZXJvQm94ZXM7XG4gICAgfVxuICAgIHZhciBjcyA9IGdldENvbXB1dGVkU3R5bGUodGFyZ2V0KTtcbiAgICB2YXIgc3ZnID0gaXNTVkcodGFyZ2V0KSAmJiB0YXJnZXQub3duZXJTVkdFbGVtZW50ICYmIHRhcmdldC5nZXRCQm94KCk7XG4gICAgdmFyIHJlbW92ZVBhZGRpbmcgPSAhSUUgJiYgY3MuYm94U2l6aW5nID09PSAnYm9yZGVyLWJveCc7XG4gICAgdmFyIHN3aXRjaFNpemVzID0gdmVydGljYWxSZWdleHAudGVzdChjcy53cml0aW5nTW9kZSB8fCAnJyk7XG4gICAgdmFyIGNhblNjcm9sbFZlcnRpY2FsbHkgPSAhc3ZnICYmIHNjcm9sbFJlZ2V4cC50ZXN0KGNzLm92ZXJmbG93WSB8fCAnJyk7XG4gICAgdmFyIGNhblNjcm9sbEhvcml6b250YWxseSA9ICFzdmcgJiYgc2Nyb2xsUmVnZXhwLnRlc3QoY3Mub3ZlcmZsb3dYIHx8ICcnKTtcbiAgICB2YXIgcGFkZGluZ1RvcCA9IHN2ZyA/IDAgOiBwYXJzZURpbWVuc2lvbihjcy5wYWRkaW5nVG9wKTtcbiAgICB2YXIgcGFkZGluZ1JpZ2h0ID0gc3ZnID8gMCA6IHBhcnNlRGltZW5zaW9uKGNzLnBhZGRpbmdSaWdodCk7XG4gICAgdmFyIHBhZGRpbmdCb3R0b20gPSBzdmcgPyAwIDogcGFyc2VEaW1lbnNpb24oY3MucGFkZGluZ0JvdHRvbSk7XG4gICAgdmFyIHBhZGRpbmdMZWZ0ID0gc3ZnID8gMCA6IHBhcnNlRGltZW5zaW9uKGNzLnBhZGRpbmdMZWZ0KTtcbiAgICB2YXIgYm9yZGVyVG9wID0gc3ZnID8gMCA6IHBhcnNlRGltZW5zaW9uKGNzLmJvcmRlclRvcFdpZHRoKTtcbiAgICB2YXIgYm9yZGVyUmlnaHQgPSBzdmcgPyAwIDogcGFyc2VEaW1lbnNpb24oY3MuYm9yZGVyUmlnaHRXaWR0aCk7XG4gICAgdmFyIGJvcmRlckJvdHRvbSA9IHN2ZyA/IDAgOiBwYXJzZURpbWVuc2lvbihjcy5ib3JkZXJCb3R0b21XaWR0aCk7XG4gICAgdmFyIGJvcmRlckxlZnQgPSBzdmcgPyAwIDogcGFyc2VEaW1lbnNpb24oY3MuYm9yZGVyTGVmdFdpZHRoKTtcbiAgICB2YXIgaG9yaXpvbnRhbFBhZGRpbmcgPSBwYWRkaW5nTGVmdCArIHBhZGRpbmdSaWdodDtcbiAgICB2YXIgdmVydGljYWxQYWRkaW5nID0gcGFkZGluZ1RvcCArIHBhZGRpbmdCb3R0b207XG4gICAgdmFyIGhvcml6b250YWxCb3JkZXJBcmVhID0gYm9yZGVyTGVmdCArIGJvcmRlclJpZ2h0O1xuICAgIHZhciB2ZXJ0aWNhbEJvcmRlckFyZWEgPSBib3JkZXJUb3AgKyBib3JkZXJCb3R0b207XG4gICAgdmFyIGhvcml6b250YWxTY3JvbGxiYXJUaGlja25lc3MgPSAhY2FuU2Nyb2xsSG9yaXpvbnRhbGx5ID8gMCA6IHRhcmdldC5vZmZzZXRIZWlnaHQgLSB2ZXJ0aWNhbEJvcmRlckFyZWEgLSB0YXJnZXQuY2xpZW50SGVpZ2h0O1xuICAgIHZhciB2ZXJ0aWNhbFNjcm9sbGJhclRoaWNrbmVzcyA9ICFjYW5TY3JvbGxWZXJ0aWNhbGx5ID8gMCA6IHRhcmdldC5vZmZzZXRXaWR0aCAtIGhvcml6b250YWxCb3JkZXJBcmVhIC0gdGFyZ2V0LmNsaWVudFdpZHRoO1xuICAgIHZhciB3aWR0aFJlZHVjdGlvbiA9IHJlbW92ZVBhZGRpbmcgPyBob3Jpem9udGFsUGFkZGluZyArIGhvcml6b250YWxCb3JkZXJBcmVhIDogMDtcbiAgICB2YXIgaGVpZ2h0UmVkdWN0aW9uID0gcmVtb3ZlUGFkZGluZyA/IHZlcnRpY2FsUGFkZGluZyArIHZlcnRpY2FsQm9yZGVyQXJlYSA6IDA7XG4gICAgdmFyIGNvbnRlbnRXaWR0aCA9IHN2ZyA/IHN2Zy53aWR0aCA6IHBhcnNlRGltZW5zaW9uKGNzLndpZHRoKSAtIHdpZHRoUmVkdWN0aW9uIC0gdmVydGljYWxTY3JvbGxiYXJUaGlja25lc3M7XG4gICAgdmFyIGNvbnRlbnRIZWlnaHQgPSBzdmcgPyBzdmcuaGVpZ2h0IDogcGFyc2VEaW1lbnNpb24oY3MuaGVpZ2h0KSAtIGhlaWdodFJlZHVjdGlvbiAtIGhvcml6b250YWxTY3JvbGxiYXJUaGlja25lc3M7XG4gICAgdmFyIGJvcmRlckJveFdpZHRoID0gY29udGVudFdpZHRoICsgaG9yaXpvbnRhbFBhZGRpbmcgKyB2ZXJ0aWNhbFNjcm9sbGJhclRoaWNrbmVzcyArIGhvcml6b250YWxCb3JkZXJBcmVhO1xuICAgIHZhciBib3JkZXJCb3hIZWlnaHQgPSBjb250ZW50SGVpZ2h0ICsgdmVydGljYWxQYWRkaW5nICsgaG9yaXpvbnRhbFNjcm9sbGJhclRoaWNrbmVzcyArIHZlcnRpY2FsQm9yZGVyQXJlYTtcbiAgICB2YXIgYm94ZXMgPSBmcmVlemUoe1xuICAgICAgICBkZXZpY2VQaXhlbENvbnRlbnRCb3hTaXplOiBzaXplKE1hdGgucm91bmQoY29udGVudFdpZHRoICogZGV2aWNlUGl4ZWxSYXRpbyksIE1hdGgucm91bmQoY29udGVudEhlaWdodCAqIGRldmljZVBpeGVsUmF0aW8pLCBzd2l0Y2hTaXplcyksXG4gICAgICAgIGJvcmRlckJveFNpemU6IHNpemUoYm9yZGVyQm94V2lkdGgsIGJvcmRlckJveEhlaWdodCwgc3dpdGNoU2l6ZXMpLFxuICAgICAgICBjb250ZW50Qm94U2l6ZTogc2l6ZShjb250ZW50V2lkdGgsIGNvbnRlbnRIZWlnaHQsIHN3aXRjaFNpemVzKSxcbiAgICAgICAgY29udGVudFJlY3Q6IG5ldyBET01SZWN0UmVhZE9ubHkocGFkZGluZ0xlZnQsIHBhZGRpbmdUb3AsIGNvbnRlbnRXaWR0aCwgY29udGVudEhlaWdodClcbiAgICB9KTtcbiAgICBjYWNoZS5zZXQodGFyZ2V0LCBib3hlcyk7XG4gICAgcmV0dXJuIGJveGVzO1xufTtcbnZhciBjYWxjdWxhdGVCb3hTaXplID0gZnVuY3Rpb24gKHRhcmdldCwgb2JzZXJ2ZWRCb3gsIGZvcmNlUmVjYWxjdWxhdGlvbikge1xuICAgIHZhciBfYSA9IGNhbGN1bGF0ZUJveFNpemVzKHRhcmdldCwgZm9yY2VSZWNhbGN1bGF0aW9uKSwgYm9yZGVyQm94U2l6ZSA9IF9hLmJvcmRlckJveFNpemUsIGNvbnRlbnRCb3hTaXplID0gX2EuY29udGVudEJveFNpemUsIGRldmljZVBpeGVsQ29udGVudEJveFNpemUgPSBfYS5kZXZpY2VQaXhlbENvbnRlbnRCb3hTaXplO1xuICAgIHN3aXRjaCAob2JzZXJ2ZWRCb3gpIHtcbiAgICAgICAgY2FzZSBSZXNpemVPYnNlcnZlckJveE9wdGlvbnMuREVWSUNFX1BJWEVMX0NPTlRFTlRfQk9YOlxuICAgICAgICAgICAgcmV0dXJuIGRldmljZVBpeGVsQ29udGVudEJveFNpemU7XG4gICAgICAgIGNhc2UgUmVzaXplT2JzZXJ2ZXJCb3hPcHRpb25zLkJPUkRFUl9CT1g6XG4gICAgICAgICAgICByZXR1cm4gYm9yZGVyQm94U2l6ZTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBjb250ZW50Qm94U2l6ZTtcbiAgICB9XG59O1xuZXhwb3J0IHsgY2FsY3VsYXRlQm94U2l6ZSwgY2FsY3VsYXRlQm94U2l6ZXMgfTtcbiIsImltcG9ydCB7IGNhbGN1bGF0ZUJveFNpemVzIH0gZnJvbSAnLi9hbGdvcml0aG1zL2NhbGN1bGF0ZUJveFNpemUnO1xuaW1wb3J0IHsgZnJlZXplIH0gZnJvbSAnLi91dGlscy9mcmVlemUnO1xudmFyIFJlc2l6ZU9ic2VydmVyRW50cnkgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFJlc2l6ZU9ic2VydmVyRW50cnkodGFyZ2V0KSB7XG4gICAgICAgIHZhciBib3hlcyA9IGNhbGN1bGF0ZUJveFNpemVzKHRhcmdldCk7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICB0aGlzLmNvbnRlbnRSZWN0ID0gYm94ZXMuY29udGVudFJlY3Q7XG4gICAgICAgIHRoaXMuYm9yZGVyQm94U2l6ZSA9IGZyZWV6ZShbYm94ZXMuYm9yZGVyQm94U2l6ZV0pO1xuICAgICAgICB0aGlzLmNvbnRlbnRCb3hTaXplID0gZnJlZXplKFtib3hlcy5jb250ZW50Qm94U2l6ZV0pO1xuICAgICAgICB0aGlzLmRldmljZVBpeGVsQ29udGVudEJveFNpemUgPSBmcmVlemUoW2JveGVzLmRldmljZVBpeGVsQ29udGVudEJveFNpemVdKTtcbiAgICB9XG4gICAgcmV0dXJuIFJlc2l6ZU9ic2VydmVyRW50cnk7XG59KCkpO1xuZXhwb3J0IHsgUmVzaXplT2JzZXJ2ZXJFbnRyeSB9O1xuIiwiaW1wb3J0IHsgaXNIaWRkZW4gfSBmcm9tICcuLi91dGlscy9lbGVtZW50JztcbnZhciBjYWxjdWxhdGVEZXB0aEZvck5vZGUgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgIGlmIChpc0hpZGRlbihub2RlKSkge1xuICAgICAgICByZXR1cm4gSW5maW5pdHk7XG4gICAgfVxuICAgIHZhciBkZXB0aCA9IDA7XG4gICAgdmFyIHBhcmVudCA9IG5vZGUucGFyZW50Tm9kZTtcbiAgICB3aGlsZSAocGFyZW50KSB7XG4gICAgICAgIGRlcHRoICs9IDE7XG4gICAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlO1xuICAgIH1cbiAgICByZXR1cm4gZGVwdGg7XG59O1xuZXhwb3J0IHsgY2FsY3VsYXRlRGVwdGhGb3JOb2RlIH07XG4iLCJpbXBvcnQgeyByZXNpemVPYnNlcnZlcnMgfSBmcm9tICcuLi91dGlscy9yZXNpemVPYnNlcnZlcnMnO1xuaW1wb3J0IHsgUmVzaXplT2JzZXJ2ZXJFbnRyeSB9IGZyb20gJy4uL1Jlc2l6ZU9ic2VydmVyRW50cnknO1xuaW1wb3J0IHsgY2FsY3VsYXRlRGVwdGhGb3JOb2RlIH0gZnJvbSAnLi9jYWxjdWxhdGVEZXB0aEZvck5vZGUnO1xuaW1wb3J0IHsgY2FsY3VsYXRlQm94U2l6ZSB9IGZyb20gJy4vY2FsY3VsYXRlQm94U2l6ZSc7XG52YXIgYnJvYWRjYXN0QWN0aXZlT2JzZXJ2YXRpb25zID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzaGFsbG93ZXN0RGVwdGggPSBJbmZpbml0eTtcbiAgICB2YXIgY2FsbGJhY2tzID0gW107XG4gICAgcmVzaXplT2JzZXJ2ZXJzLmZvckVhY2goZnVuY3Rpb24gcHJvY2Vzc09ic2VydmVyKHJvKSB7XG4gICAgICAgIGlmIChyby5hY3RpdmVUYXJnZXRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlbnRyaWVzID0gW107XG4gICAgICAgIHJvLmFjdGl2ZVRhcmdldHMuZm9yRWFjaChmdW5jdGlvbiBwcm9jZXNzVGFyZ2V0KG90KSB7XG4gICAgICAgICAgICB2YXIgZW50cnkgPSBuZXcgUmVzaXplT2JzZXJ2ZXJFbnRyeShvdC50YXJnZXQpO1xuICAgICAgICAgICAgdmFyIHRhcmdldERlcHRoID0gY2FsY3VsYXRlRGVwdGhGb3JOb2RlKG90LnRhcmdldCk7XG4gICAgICAgICAgICBlbnRyaWVzLnB1c2goZW50cnkpO1xuICAgICAgICAgICAgb3QubGFzdFJlcG9ydGVkU2l6ZSA9IGNhbGN1bGF0ZUJveFNpemUob3QudGFyZ2V0LCBvdC5vYnNlcnZlZEJveCk7XG4gICAgICAgICAgICBpZiAodGFyZ2V0RGVwdGggPCBzaGFsbG93ZXN0RGVwdGgpIHtcbiAgICAgICAgICAgICAgICBzaGFsbG93ZXN0RGVwdGggPSB0YXJnZXREZXB0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNhbGxiYWNrcy5wdXNoKGZ1bmN0aW9uIHJlc2l6ZU9ic2VydmVyQ2FsbGJhY2soKSB7XG4gICAgICAgICAgICByby5jYWxsYmFjay5jYWxsKHJvLm9ic2VydmVyLCBlbnRyaWVzLCByby5vYnNlcnZlcik7XG4gICAgICAgIH0pO1xuICAgICAgICByby5hY3RpdmVUYXJnZXRzLnNwbGljZSgwLCByby5hY3RpdmVUYXJnZXRzLmxlbmd0aCk7XG4gICAgfSk7XG4gICAgZm9yICh2YXIgX2kgPSAwLCBjYWxsYmFja3NfMSA9IGNhbGxiYWNrczsgX2kgPCBjYWxsYmFja3NfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gY2FsbGJhY2tzXzFbX2ldO1xuICAgICAgICBjYWxsYmFjaygpO1xuICAgIH1cbiAgICByZXR1cm4gc2hhbGxvd2VzdERlcHRoO1xufTtcbmV4cG9ydCB7IGJyb2FkY2FzdEFjdGl2ZU9ic2VydmF0aW9ucyB9O1xuIiwiaW1wb3J0IHsgcmVzaXplT2JzZXJ2ZXJzIH0gZnJvbSAnLi4vdXRpbHMvcmVzaXplT2JzZXJ2ZXJzJztcbmltcG9ydCB7IGNhbGN1bGF0ZURlcHRoRm9yTm9kZSB9IGZyb20gJy4vY2FsY3VsYXRlRGVwdGhGb3JOb2RlJztcbnZhciBnYXRoZXJBY3RpdmVPYnNlcnZhdGlvbnNBdERlcHRoID0gZnVuY3Rpb24gKGRlcHRoKSB7XG4gICAgcmVzaXplT2JzZXJ2ZXJzLmZvckVhY2goZnVuY3Rpb24gcHJvY2Vzc09ic2VydmVyKHJvKSB7XG4gICAgICAgIHJvLmFjdGl2ZVRhcmdldHMuc3BsaWNlKDAsIHJvLmFjdGl2ZVRhcmdldHMubGVuZ3RoKTtcbiAgICAgICAgcm8uc2tpcHBlZFRhcmdldHMuc3BsaWNlKDAsIHJvLnNraXBwZWRUYXJnZXRzLmxlbmd0aCk7XG4gICAgICAgIHJvLm9ic2VydmF0aW9uVGFyZ2V0cy5mb3JFYWNoKGZ1bmN0aW9uIHByb2Nlc3NUYXJnZXQob3QpIHtcbiAgICAgICAgICAgIGlmIChvdC5pc0FjdGl2ZSgpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNhbGN1bGF0ZURlcHRoRm9yTm9kZShvdC50YXJnZXQpID4gZGVwdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgcm8uYWN0aXZlVGFyZ2V0cy5wdXNoKG90KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJvLnNraXBwZWRUYXJnZXRzLnB1c2gob3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59O1xuZXhwb3J0IHsgZ2F0aGVyQWN0aXZlT2JzZXJ2YXRpb25zQXREZXB0aCB9O1xuIiwiaW1wb3J0IHsgaGFzQWN0aXZlT2JzZXJ2YXRpb25zIH0gZnJvbSAnLi4vYWxnb3JpdGhtcy9oYXNBY3RpdmVPYnNlcnZhdGlvbnMnO1xuaW1wb3J0IHsgaGFzU2tpcHBlZE9ic2VydmF0aW9ucyB9IGZyb20gJy4uL2FsZ29yaXRobXMvaGFzU2tpcHBlZE9ic2VydmF0aW9ucyc7XG5pbXBvcnQgeyBkZWxpdmVyUmVzaXplTG9vcEVycm9yIH0gZnJvbSAnLi4vYWxnb3JpdGhtcy9kZWxpdmVyUmVzaXplTG9vcEVycm9yJztcbmltcG9ydCB7IGJyb2FkY2FzdEFjdGl2ZU9ic2VydmF0aW9ucyB9IGZyb20gJy4uL2FsZ29yaXRobXMvYnJvYWRjYXN0QWN0aXZlT2JzZXJ2YXRpb25zJztcbmltcG9ydCB7IGdhdGhlckFjdGl2ZU9ic2VydmF0aW9uc0F0RGVwdGggfSBmcm9tICcuLi9hbGdvcml0aG1zL2dhdGhlckFjdGl2ZU9ic2VydmF0aW9uc0F0RGVwdGgnO1xudmFyIHByb2Nlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGRlcHRoID0gMDtcbiAgICBnYXRoZXJBY3RpdmVPYnNlcnZhdGlvbnNBdERlcHRoKGRlcHRoKTtcbiAgICB3aGlsZSAoaGFzQWN0aXZlT2JzZXJ2YXRpb25zKCkpIHtcbiAgICAgICAgZGVwdGggPSBicm9hZGNhc3RBY3RpdmVPYnNlcnZhdGlvbnMoKTtcbiAgICAgICAgZ2F0aGVyQWN0aXZlT2JzZXJ2YXRpb25zQXREZXB0aChkZXB0aCk7XG4gICAgfVxuICAgIGlmIChoYXNTa2lwcGVkT2JzZXJ2YXRpb25zKCkpIHtcbiAgICAgICAgZGVsaXZlclJlc2l6ZUxvb3BFcnJvcigpO1xuICAgIH1cbiAgICByZXR1cm4gZGVwdGggPiAwO1xufTtcbmV4cG9ydCB7IHByb2Nlc3MgfTtcbiIsInZhciB0cmlnZ2VyO1xudmFyIGNhbGxiYWNrcyA9IFtdO1xudmFyIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNhbGxiYWNrcy5zcGxpY2UoMCkuZm9yRWFjaChmdW5jdGlvbiAoY2IpIHsgcmV0dXJuIGNiKCk7IH0pOyB9O1xudmFyIHF1ZXVlTWljcm9UYXNrID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgaWYgKCF0cmlnZ2VyKSB7XG4gICAgICAgIHZhciB0b2dnbGVfMSA9IDA7XG4gICAgICAgIHZhciBlbF8xID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuICAgICAgICB2YXIgY29uZmlnID0geyBjaGFyYWN0ZXJEYXRhOiB0cnVlIH07XG4gICAgICAgIG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vdGlmeSgpOyB9KS5vYnNlcnZlKGVsXzEsIGNvbmZpZyk7XG4gICAgICAgIHRyaWdnZXIgPSBmdW5jdGlvbiAoKSB7IGVsXzEudGV4dENvbnRlbnQgPSBcIlwiICsgKHRvZ2dsZV8xID8gdG9nZ2xlXzEtLSA6IHRvZ2dsZV8xKyspOyB9O1xuICAgIH1cbiAgICBjYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG4gICAgdHJpZ2dlcigpO1xufTtcbmV4cG9ydCB7IHF1ZXVlTWljcm9UYXNrIH07XG4iLCJpbXBvcnQgeyBxdWV1ZU1pY3JvVGFzayB9IGZyb20gJy4vcXVldWVNaWNyb1Rhc2snO1xudmFyIHF1ZXVlUmVzaXplT2JzZXJ2ZXIgPSBmdW5jdGlvbiAoY2IpIHtcbiAgICBxdWV1ZU1pY3JvVGFzayhmdW5jdGlvbiBSZXNpemVPYnNlcnZlcigpIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNiKTtcbiAgICB9KTtcbn07XG5leHBvcnQgeyBxdWV1ZVJlc2l6ZU9ic2VydmVyIH07XG4iLCJpbXBvcnQgeyBwcm9jZXNzIH0gZnJvbSAnLi9wcm9jZXNzJztcbmltcG9ydCB7IGdsb2JhbCB9IGZyb20gJy4vZ2xvYmFsJztcbmltcG9ydCB7IHF1ZXVlUmVzaXplT2JzZXJ2ZXIgfSBmcm9tICcuL3F1ZXVlUmVzaXplT2JzZXJ2ZXInO1xudmFyIHdhdGNoaW5nID0gMDtcbnZhciBpc1dhdGNoaW5nID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gISF3YXRjaGluZzsgfTtcbnZhciBDQVRDSF9QRVJJT0QgPSAyNTA7XG52YXIgb2JzZXJ2ZXJDb25maWcgPSB7IGF0dHJpYnV0ZXM6IHRydWUsIGNoYXJhY3RlckRhdGE6IHRydWUsIGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9O1xudmFyIGV2ZW50cyA9IFtcbiAgICAncmVzaXplJyxcbiAgICAnbG9hZCcsXG4gICAgJ3RyYW5zaXRpb25lbmQnLFxuICAgICdhbmltYXRpb25lbmQnLFxuICAgICdhbmltYXRpb25zdGFydCcsXG4gICAgJ2FuaW1hdGlvbml0ZXJhdGlvbicsXG4gICAgJ2tleXVwJyxcbiAgICAna2V5ZG93bicsXG4gICAgJ21vdXNldXAnLFxuICAgICdtb3VzZWRvd24nLFxuICAgICdtb3VzZW92ZXInLFxuICAgICdtb3VzZW91dCcsXG4gICAgJ2JsdXInLFxuICAgICdmb2N1cydcbl07XG52YXIgdGltZSA9IGZ1bmN0aW9uICh0aW1lb3V0KSB7XG4gICAgaWYgKHRpbWVvdXQgPT09IHZvaWQgMCkgeyB0aW1lb3V0ID0gMDsgfVxuICAgIHJldHVybiBEYXRlLm5vdygpICsgdGltZW91dDtcbn07XG52YXIgc2NoZWR1bGVkID0gZmFsc2U7XG52YXIgU2NoZWR1bGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTY2hlZHVsZXIoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuc3RvcHBlZCA9IHRydWU7XG4gICAgICAgIHRoaXMubGlzdGVuZXIgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5zY2hlZHVsZSgpOyB9O1xuICAgIH1cbiAgICBTY2hlZHVsZXIucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICh0aW1lb3V0KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh0aW1lb3V0ID09PSB2b2lkIDApIHsgdGltZW91dCA9IENBVENIX1BFUklPRDsgfVxuICAgICAgICBpZiAoc2NoZWR1bGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc2NoZWR1bGVkID0gdHJ1ZTtcbiAgICAgICAgdmFyIHVudGlsID0gdGltZSh0aW1lb3V0KTtcbiAgICAgICAgcXVldWVSZXNpemVPYnNlcnZlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZWxlbWVudHNIYXZlUmVzaXplZCA9IGZhbHNlO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBlbGVtZW50c0hhdmVSZXNpemVkID0gcHJvY2VzcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgc2NoZWR1bGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGltZW91dCA9IHVudGlsIC0gdGltZSgpO1xuICAgICAgICAgICAgICAgIGlmICghaXNXYXRjaGluZygpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnRzSGF2ZVJlc2l6ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMucnVuKDEwMDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aW1lb3V0ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5ydW4odGltZW91dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5zdGFydCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBTY2hlZHVsZXIucHJvdG90eXBlLnNjaGVkdWxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgdGhpcy5ydW4oKTtcbiAgICB9O1xuICAgIFNjaGVkdWxlci5wcm90b3R5cGUub2JzZXJ2ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGNiID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMub2JzZXJ2ZXIgJiYgX3RoaXMub2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5ib2R5LCBvYnNlcnZlckNvbmZpZyk7IH07XG4gICAgICAgIGRvY3VtZW50LmJvZHkgPyBjYigpIDogZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBjYik7XG4gICAgfTtcbiAgICBTY2hlZHVsZXIucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy5zdG9wcGVkKSB7XG4gICAgICAgICAgICB0aGlzLnN0b3BwZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzLmxpc3RlbmVyKTtcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZSgpO1xuICAgICAgICAgICAgZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKG5hbWUsIF90aGlzLmxpc3RlbmVyLCB0cnVlKTsgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFNjaGVkdWxlci5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKCF0aGlzLnN0b3BwZWQpIHtcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXIgJiYgdGhpcy5vYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICBldmVudHMuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gZ2xvYmFsLnJlbW92ZUV2ZW50TGlzdGVuZXIobmFtZSwgX3RoaXMubGlzdGVuZXIsIHRydWUpOyB9KTtcbiAgICAgICAgICAgIHRoaXMuc3RvcHBlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBTY2hlZHVsZXI7XG59KCkpO1xudmFyIHNjaGVkdWxlciA9IG5ldyBTY2hlZHVsZXIoKTtcbnZhciB1cGRhdGVDb3VudCA9IGZ1bmN0aW9uIChuKSB7XG4gICAgIXdhdGNoaW5nICYmIG4gPiAwICYmIHNjaGVkdWxlci5zdGFydCgpO1xuICAgIHdhdGNoaW5nICs9IG47XG4gICAgIXdhdGNoaW5nICYmIHNjaGVkdWxlci5zdG9wKCk7XG59O1xuZXhwb3J0IHsgc2NoZWR1bGVyLCB1cGRhdGVDb3VudCB9O1xuIiwiaW1wb3J0IHsgUmVzaXplT2JzZXJ2ZXJCb3hPcHRpb25zIH0gZnJvbSAnLi9SZXNpemVPYnNlcnZlckJveE9wdGlvbnMnO1xuaW1wb3J0IHsgY2FsY3VsYXRlQm94U2l6ZSB9IGZyb20gJy4vYWxnb3JpdGhtcy9jYWxjdWxhdGVCb3hTaXplJztcbmltcG9ydCB7IGlzU1ZHLCBpc1JlcGxhY2VkRWxlbWVudCB9IGZyb20gJy4vdXRpbHMvZWxlbWVudCc7XG52YXIgc2tpcE5vdGlmeU9uRWxlbWVudCA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICByZXR1cm4gIWlzU1ZHKHRhcmdldClcbiAgICAgICAgJiYgIWlzUmVwbGFjZWRFbGVtZW50KHRhcmdldClcbiAgICAgICAgJiYgZ2V0Q29tcHV0ZWRTdHlsZSh0YXJnZXQpLmRpc3BsYXkgPT09ICdpbmxpbmUnO1xufTtcbnZhciBSZXNpemVPYnNlcnZhdGlvbiA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUmVzaXplT2JzZXJ2YXRpb24odGFyZ2V0LCBvYnNlcnZlZEJveCkge1xuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgICAgICAgdGhpcy5vYnNlcnZlZEJveCA9IG9ic2VydmVkQm94IHx8IFJlc2l6ZU9ic2VydmVyQm94T3B0aW9ucy5DT05URU5UX0JPWDtcbiAgICAgICAgdGhpcy5sYXN0UmVwb3J0ZWRTaXplID0ge1xuICAgICAgICAgICAgaW5saW5lU2l6ZTogMCxcbiAgICAgICAgICAgIGJsb2NrU2l6ZTogMFxuICAgICAgICB9O1xuICAgIH1cbiAgICBSZXNpemVPYnNlcnZhdGlvbi5wcm90b3R5cGUuaXNBY3RpdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzaXplID0gY2FsY3VsYXRlQm94U2l6ZSh0aGlzLnRhcmdldCwgdGhpcy5vYnNlcnZlZEJveCwgdHJ1ZSk7XG4gICAgICAgIGlmIChza2lwTm90aWZ5T25FbGVtZW50KHRoaXMudGFyZ2V0KSkge1xuICAgICAgICAgICAgdGhpcy5sYXN0UmVwb3J0ZWRTaXplID0gc2l6ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5sYXN0UmVwb3J0ZWRTaXplLmlubGluZVNpemUgIT09IHNpemUuaW5saW5lU2l6ZVxuICAgICAgICAgICAgfHwgdGhpcy5sYXN0UmVwb3J0ZWRTaXplLmJsb2NrU2l6ZSAhPT0gc2l6ZS5ibG9ja1NpemUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIHJldHVybiBSZXNpemVPYnNlcnZhdGlvbjtcbn0oKSk7XG5leHBvcnQgeyBSZXNpemVPYnNlcnZhdGlvbiB9O1xuIiwidmFyIFJlc2l6ZU9ic2VydmVyRGV0YWlsID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBSZXNpemVPYnNlcnZlckRldGFpbChyZXNpemVPYnNlcnZlciwgY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5hY3RpdmVUYXJnZXRzID0gW107XG4gICAgICAgIHRoaXMuc2tpcHBlZFRhcmdldHMgPSBbXTtcbiAgICAgICAgdGhpcy5vYnNlcnZhdGlvblRhcmdldHMgPSBbXTtcbiAgICAgICAgdGhpcy5vYnNlcnZlciA9IHJlc2l6ZU9ic2VydmVyO1xuICAgICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgfVxuICAgIHJldHVybiBSZXNpemVPYnNlcnZlckRldGFpbDtcbn0oKSk7XG5leHBvcnQgeyBSZXNpemVPYnNlcnZlckRldGFpbCB9O1xuIiwiaW1wb3J0IHsgc2NoZWR1bGVyLCB1cGRhdGVDb3VudCB9IGZyb20gJy4vdXRpbHMvc2NoZWR1bGVyJztcbmltcG9ydCB7IFJlc2l6ZU9ic2VydmF0aW9uIH0gZnJvbSAnLi9SZXNpemVPYnNlcnZhdGlvbic7XG5pbXBvcnQgeyBSZXNpemVPYnNlcnZlckRldGFpbCB9IGZyb20gJy4vUmVzaXplT2JzZXJ2ZXJEZXRhaWwnO1xuaW1wb3J0IHsgcmVzaXplT2JzZXJ2ZXJzIH0gZnJvbSAnLi91dGlscy9yZXNpemVPYnNlcnZlcnMnO1xudmFyIG9ic2VydmVyTWFwID0gbmV3IFdlYWtNYXAoKTtcbnZhciBnZXRPYnNlcnZhdGlvbkluZGV4ID0gZnVuY3Rpb24gKG9ic2VydmF0aW9uVGFyZ2V0cywgdGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvYnNlcnZhdGlvblRhcmdldHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKG9ic2VydmF0aW9uVGFyZ2V0c1tpXS50YXJnZXQgPT09IHRhcmdldCkge1xuICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIC0xO1xufTtcbnZhciBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlcigpIHtcbiAgICB9XG4gICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLmNvbm5lY3QgPSBmdW5jdGlvbiAocmVzaXplT2JzZXJ2ZXIsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBkZXRhaWwgPSBuZXcgUmVzaXplT2JzZXJ2ZXJEZXRhaWwocmVzaXplT2JzZXJ2ZXIsIGNhbGxiYWNrKTtcbiAgICAgICAgb2JzZXJ2ZXJNYXAuc2V0KHJlc2l6ZU9ic2VydmVyLCBkZXRhaWwpO1xuICAgIH07XG4gICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLm9ic2VydmUgPSBmdW5jdGlvbiAocmVzaXplT2JzZXJ2ZXIsIHRhcmdldCwgb3B0aW9ucykge1xuICAgICAgICB2YXIgZGV0YWlsID0gb2JzZXJ2ZXJNYXAuZ2V0KHJlc2l6ZU9ic2VydmVyKTtcbiAgICAgICAgdmFyIGZpcnN0T2JzZXJ2YXRpb24gPSBkZXRhaWwub2JzZXJ2YXRpb25UYXJnZXRzLmxlbmd0aCA9PT0gMDtcbiAgICAgICAgaWYgKGdldE9ic2VydmF0aW9uSW5kZXgoZGV0YWlsLm9ic2VydmF0aW9uVGFyZ2V0cywgdGFyZ2V0KSA8IDApIHtcbiAgICAgICAgICAgIGZpcnN0T2JzZXJ2YXRpb24gJiYgcmVzaXplT2JzZXJ2ZXJzLnB1c2goZGV0YWlsKTtcbiAgICAgICAgICAgIGRldGFpbC5vYnNlcnZhdGlvblRhcmdldHMucHVzaChuZXcgUmVzaXplT2JzZXJ2YXRpb24odGFyZ2V0LCBvcHRpb25zICYmIG9wdGlvbnMuYm94KSk7XG4gICAgICAgICAgICB1cGRhdGVDb3VudCgxKTtcbiAgICAgICAgICAgIHNjaGVkdWxlci5zY2hlZHVsZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIudW5vYnNlcnZlID0gZnVuY3Rpb24gKHJlc2l6ZU9ic2VydmVyLCB0YXJnZXQpIHtcbiAgICAgICAgdmFyIGRldGFpbCA9IG9ic2VydmVyTWFwLmdldChyZXNpemVPYnNlcnZlcik7XG4gICAgICAgIHZhciBpbmRleCA9IGdldE9ic2VydmF0aW9uSW5kZXgoZGV0YWlsLm9ic2VydmF0aW9uVGFyZ2V0cywgdGFyZ2V0KTtcbiAgICAgICAgdmFyIGxhc3RPYnNlcnZhdGlvbiA9IGRldGFpbC5vYnNlcnZhdGlvblRhcmdldHMubGVuZ3RoID09PSAxO1xuICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICAgICAgbGFzdE9ic2VydmF0aW9uICYmIHJlc2l6ZU9ic2VydmVycy5zcGxpY2UocmVzaXplT2JzZXJ2ZXJzLmluZGV4T2YoZGV0YWlsKSwgMSk7XG4gICAgICAgICAgICBkZXRhaWwub2JzZXJ2YXRpb25UYXJnZXRzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB1cGRhdGVDb3VudCgtMSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5kaXNjb25uZWN0ID0gZnVuY3Rpb24gKHJlc2l6ZU9ic2VydmVyKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBkZXRhaWwgPSBvYnNlcnZlck1hcC5nZXQocmVzaXplT2JzZXJ2ZXIpO1xuICAgICAgICBkZXRhaWwub2JzZXJ2YXRpb25UYXJnZXRzLnNsaWNlKCkuZm9yRWFjaChmdW5jdGlvbiAob3QpIHsgcmV0dXJuIF90aGlzLnVub2JzZXJ2ZShyZXNpemVPYnNlcnZlciwgb3QudGFyZ2V0KTsgfSk7XG4gICAgICAgIGRldGFpbC5hY3RpdmVUYXJnZXRzLnNwbGljZSgwLCBkZXRhaWwuYWN0aXZlVGFyZ2V0cy5sZW5ndGgpO1xuICAgIH07XG4gICAgcmV0dXJuIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlcjtcbn0oKSk7XG5leHBvcnQgeyBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIgfTtcbiIsImltcG9ydCB7IFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlciB9IGZyb20gJy4vUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyJztcbmltcG9ydCB7IGlzRWxlbWVudCB9IGZyb20gJy4vdXRpbHMvZWxlbWVudCc7XG52YXIgUmVzaXplT2JzZXJ2ZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFJlc2l6ZU9ic2VydmVyKGNhbGxiYWNrKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRmFpbGVkIHRvIGNvbnN0cnVjdCAnUmVzaXplT2JzZXJ2ZXInOiAxIGFyZ3VtZW50IHJlcXVpcmVkLCBidXQgb25seSAwIHByZXNlbnQuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJGYWlsZWQgdG8gY29uc3RydWN0ICdSZXNpemVPYnNlcnZlcic6IFRoZSBjYWxsYmFjayBwcm92aWRlZCBhcyBwYXJhbWV0ZXIgMSBpcyBub3QgYSBmdW5jdGlvbi5cIik7XG4gICAgICAgIH1cbiAgICAgICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLmNvbm5lY3QodGhpcywgY2FsbGJhY2spO1xuICAgIH1cbiAgICBSZXNpemVPYnNlcnZlci5wcm90b3R5cGUub2JzZXJ2ZSA9IGZ1bmN0aW9uICh0YXJnZXQsIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJGYWlsZWQgdG8gZXhlY3V0ZSAnb2JzZXJ2ZScgb24gJ1Jlc2l6ZU9ic2VydmVyJzogMSBhcmd1bWVudCByZXF1aXJlZCwgYnV0IG9ubHkgMCBwcmVzZW50LlwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzRWxlbWVudCh0YXJnZXQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRmFpbGVkIHRvIGV4ZWN1dGUgJ29ic2VydmUnIG9uICdSZXNpemVPYnNlcnZlcic6IHBhcmFtZXRlciAxIGlzIG5vdCBvZiB0eXBlICdFbGVtZW50XCIpO1xuICAgICAgICB9XG4gICAgICAgIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5vYnNlcnZlKHRoaXMsIHRhcmdldCwgb3B0aW9ucyk7XG4gICAgfTtcbiAgICBSZXNpemVPYnNlcnZlci5wcm90b3R5cGUudW5vYnNlcnZlID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkZhaWxlZCB0byBleGVjdXRlICd1bm9ic2VydmUnIG9uICdSZXNpemVPYnNlcnZlcic6IDEgYXJndW1lbnQgcmVxdWlyZWQsIGJ1dCBvbmx5IDAgcHJlc2VudC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc0VsZW1lbnQodGFyZ2V0KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkZhaWxlZCB0byBleGVjdXRlICd1bm9ic2VydmUnIG9uICdSZXNpemVPYnNlcnZlcic6IHBhcmFtZXRlciAxIGlzIG5vdCBvZiB0eXBlICdFbGVtZW50XCIpO1xuICAgICAgICB9XG4gICAgICAgIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci51bm9ic2VydmUodGhpcywgdGFyZ2V0KTtcbiAgICB9O1xuICAgIFJlc2l6ZU9ic2VydmVyLnByb3RvdHlwZS5kaXNjb25uZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIuZGlzY29ubmVjdCh0aGlzKTtcbiAgICB9O1xuICAgIFJlc2l6ZU9ic2VydmVyLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gJ2Z1bmN0aW9uIFJlc2l6ZU9ic2VydmVyICgpIHsgW3BvbHlmaWxsIGNvZGVdIH0nO1xuICAgIH07XG4gICAgcmV0dXJuIFJlc2l6ZU9ic2VydmVyO1xufSgpKTtcbmV4cG9ydCB7IFJlc2l6ZU9ic2VydmVyIH07XG4iLCJpbXBvcnQgeyBSZXNpemVPYnNlcnZlciBhcyBQb2x5ZmlsbCB9IGZyb20gJ0BqdWdnbGUvcmVzaXplLW9ic2VydmVyJ1xuY29uc3QgUmVzaXplT2JzZXJ2ZXIgPSB3aW5kb3cuUmVzaXplT2JzZXJ2ZXIgfHwgUG9seWZpbGxcblxuaW1wb3J0IHJlbW92ZUl0ZW0gZnJvbSAnLi91dGlscy9yZW1vdmUtYXJyYXktaXRlbSdcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudEVtaXR0ZXInXG5pbXBvcnQge1xuICBnZXREaXN0YW5jZSxcbiAgaW5kZXhPZk5lYXJlc3RQb2ludFxufSBmcm9tICcuL2dlb21ldHJ5L2Rpc3RhbmNlcydcblxuaW1wb3J0IERyYWdnYWJsZSBmcm9tICcuL2RyYWdnYWJsZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdCBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKGRyYWdnYWJsZXMsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcihvcHRpb25zKVxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgdGltZUVuZDogMjAwLFxuICAgICAgdGltZUV4Y2FuZ2U6IDQwMCxcbiAgICAgIHJhZGl1czogMzBcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGhpcy5jb250YWluZXIgPSBvcHRpb25zLmNvbnRhaW5lclxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZXNcbiAgICB0aGlzLmNoYW5nZWREdXJpbmdJdGVyYXRpb24gPSBmYWxzZVxuXG4gICAgdGhpcy5yZXNpemVPYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoKSA9PiB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLnJlb3JkZXJPbkNoYW5nZSkgdGhpcy5yZXNldCgpXG4gICAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZCkgPT4gZC5zdGFydFBvc2l0aW9uaW5nKCkpXG4gICAgfSlcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZCkgPT4gdGhpcy5yZXNpemVPYnNlcnZlci5vYnNlcnZlKGQuZWxlbWVudCkpXG5cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLl9lbmFibGUgPSB0cnVlXG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2godGhpcy5pbml0RHJhZ2dhYmxlLCB0aGlzKVxuICB9XG5cbiAgaW5pdERyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICBkcmFnZ2FibGUuZW5hYmxlID0gdGhpcy5fZW5hYmxlXG4gICAgZHJhZ2dhYmxlLm9uKCdkcmFnOm1vdmUnLCAoKSA9PiB0aGlzLm9uTW92ZShkcmFnZ2FibGUpKVxuICAgIGRyYWdnYWJsZS5kcmFnRW5kQWN0aW9uID0gKCkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbiwgdGhpcy5vcHRpb25zLnRpbWVFbmQpXG4gICAgICB0aGlzLm9uRW5kKGRyYWdnYWJsZSlcbiAgICB9XG4gIH1cblxuICBvbk1vdmUoZHJhZ2dhYmxlKSB7XG4gICAgY29uc3Qgc29ydGVkRHJhZ2dhYmxlcyA9IHRoaXMuZ2V0U29ydGVkRHJhZ2dhYmxlcygpXG4gICAgY29uc3QgcGlubmVkUG9zaXRpb25zID0gc29ydGVkRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uKVxuXG4gICAgY29uc3QgY3VycmVudEluZGV4ID0gc29ydGVkRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSlcbiAgICBjb25zdCB0YXJnZXRJbmRleCA9IGluZGV4T2ZOZWFyZXN0UG9pbnQocGlubmVkUG9zaXRpb25zLCBkcmFnZ2FibGUucG9zaXRpb24sIHRoaXMub3B0aW9ucy5yYWRpdXMsIHRoaXMuZGlzdGFuY2VGdW5jKVxuXG4gICAgaWYgKHRhcmdldEluZGV4ICE9PSAtMSAmJiBjdXJyZW50SW5kZXggIT09IHRhcmdldEluZGV4KSB7XG4gICAgICBpZiAodGFyZ2V0SW5kZXggPCBjdXJyZW50SW5kZXgpIHtcbiAgICAgICAgZm9yIChsZXQgaT10YXJnZXRJbmRleDsgaTxjdXJyZW50SW5kZXg7IGkrKykge1xuICAgICAgICAgIHNvcnRlZERyYWdnYWJsZXNbaV0ucGluUG9zaXRpb24ocGlubmVkUG9zaXRpb25zW2krMV0sIHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChsZXQgaT1jdXJyZW50SW5kZXg7IGk8dGFyZ2V0SW5kZXg7IGkrKykge1xuICAgICAgICAgIHNvcnRlZERyYWdnYWJsZXNbaSsxXS5waW5Qb3NpdGlvbihwaW5uZWRQb3NpdGlvbnNbaV0sIHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZHJhZ2dhYmxlLm5hdGl2ZURyYWdBbmREcm9wKSB7XG4gICAgICAgIGRyYWdnYWJsZS5waW5Qb3NpdGlvbihwaW5uZWRQb3NpdGlvbnNbdGFyZ2V0SW5kZXhdKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uID0gcGlubmVkUG9zaXRpb25zW3RhcmdldEluZGV4XVxuICAgICAgfVxuXG4gICAgICB0aGlzLmNoYW5nZWREdXJpbmdJdGVyYXRpb24gPSB0cnVlXG4gICAgfVxuICB9XG5cbiAgb25FbmQoKSB7XG4gICAgaWYgKHRoaXMuY2hhbmdlZER1cmluZ0l0ZXJhdGlvbikge1xuICAgICAgdGhpcy5lbWl0KCdsaXN0OmNoYW5nZScpXG4gICAgICB0aGlzLmNoYW5nZWREdXJpbmdJdGVyYXRpb24gPSBmYWxzZVxuXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnJlb3JkZXJPbkNoYW5nZSAmJiB0aGlzLm9wdGlvbnMuY29udGFpbmVyKSB7XG4gICAgICAgIHRoaXMucmVvcmRlckVsZW1lbnRzKClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW9yZGVyRWxlbWVudHMoKSB7XG4gICAgY29uc3Qgb3JkZXJlZEVsZW1lbnRzID0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKCkubWFwKChkKSA9PiBkLmVsZW1lbnQpXG4gICAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KClcbiAgICBvcmRlcmVkRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4gZnJhZ21lbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCkpXG5cbiAgICB0aGlzLnJlc2V0KClcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChmcmFnbWVudClcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZCkgPT4gZC5zdGFydFBvc2l0aW9uaW5nKCkpXG5cbiAgICB0aGlzLmVtaXQoJ2xpc3Q6cmVvcmRlcmVkJylcbiAgfVxuXG4gIGdldEN1cnJlbnRQaW5uZWRQb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uLmNsb25lKCkpXG4gIH1cblxuICBnZXRTb3J0ZWREcmFnZ2FibGVzKCkge1xuICAgIHJldHVybiB0aGlzLmRyYWdnYWJsZXMuc29ydCh0aGlzLnNvcnRpbmcuYmluZCh0aGlzKSlcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5yZXNldFBvc2l0aW9uVG9Jbml0aWFsKCkpXG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5yZWZyZXNoKCkpXG4gIH1cblxuICBhZGQoZHJhZ2dhYmxlcykge1xuICAgIGlmICghKGRyYWdnYWJsZXMgaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICAgIGRyYWdnYWJsZXMgPSBbZHJhZ2dhYmxlc11cbiAgICB9XG4gICAgZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHRoaXMuaW5pdERyYWdnYWJsZShkcmFnZ2FibGUpKVxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IHRoaXMuZHJhZ2dhYmxlcy5jb25jYXQoZHJhZ2dhYmxlcylcbiAgfVxuXG4gIHJlbW92ZShkcmFnZ2FibGVzKSB7XG4gICAgY29uc3QgaW5pdGlhbFBvc2l0aW9ucyA9IHRoaXMuZHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLmluaXRpYWxQb3NpdGlvbilcbiAgICBjb25zdCBsaXN0ID0gW11cbiAgICBjb25zdCBzb3J0ZWREcmFnZ2FibGVzID0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcblxuICAgIGlmICghKGRyYWdnYWJsZXMgaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICAgIGRyYWdnYWJsZXMgPSBbZHJhZ2dhYmxlc11cbiAgICB9XG5cbiAgICBkcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLnJlc2V0T24oJ2RyYWc6ZW5kJylcbiAgICAgIGRyYWdnYWJsZS5yZXNldE9uKCdkcmFnOm1vdmUnKVxuICAgICAgcmVtb3ZlSXRlbSh0aGlzLmRyYWdnYWJsZXMsIGRyYWdnYWJsZSlcbiAgICB9KVxuXG4gICAgbGV0IGogPSAwXG4gICAgc29ydGVkRHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGlmICh0aGlzLmRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMSkge1xuICAgICAgICBpZiAoZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uICE9PSBpbml0aWFsUG9zaXRpb25zW2pdKSB7XG4gICAgICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKGluaXRpYWxQb3NpdGlvbnNbal0sIHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSlcbiAgICAgICAgfVxuICAgICAgICBkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uID0gaW5pdGlhbFBvc2l0aW9uc1tqXVxuICAgICAgICBqKytcbiAgICAgICAgbGlzdC5wdXNoKGRyYWdnYWJsZSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGxpc3RcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMucmVtb3ZlKHRoaXMuZHJhZ2dhYmxlcy5zbGljZSgpKVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUuZGVzdHJveSgpKVxuICB9XG5cbiAgc29ydGluZyhkcmFnZ2FibGVBLCBkcmFnZ2FibGVCKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5zb3J0aW5nKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLnNvcnRpbmcoZHJhZ2dhYmxlQSwgZHJhZ2dhYmxlQilcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGRyYWdnYWJsZUEucGlubmVkUG9zaXRpb24ueSA8IGRyYWdnYWJsZUIucGlubmVkUG9zaXRpb24ueSkgcmV0dXJuIC0xXG4gICAgICBpZiAoZHJhZ2dhYmxlQS5waW5uZWRQb3NpdGlvbi55ID4gZHJhZ2dhYmxlQi5waW5uZWRQb3NpdGlvbi55KSByZXR1cm4gMVxuICAgICAgaWYgKGRyYWdnYWJsZUEucGlubmVkUG9zaXRpb24ueCA8IGRyYWdnYWJsZUIucGlubmVkUG9zaXRpb24ueCkgcmV0dXJuIC0xXG4gICAgICBpZiAoZHJhZ2dhYmxlQS5waW5uZWRQb3NpdGlvbi54ID4gZHJhZ2dhYmxlQi5waW5uZWRQb3NpdGlvbi54KSByZXR1cm4gMVxuICAgICAgcmV0dXJuIDBcbiAgICB9XG4gIH1cblxuICBnZXQgZGlzdGFuY2VGdW5jKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZ2V0RGlzdGFuY2UgfHwgZ2V0RGlzdGFuY2VcbiAgfVxuXG4gIGdldCBwb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q3VycmVudFBpbm5lZFBvc2l0aW9ucygpXG4gIH1cblxuICBzZXQgcG9zaXRpb25zKHBvc2l0aW9ucykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSAnd3JvbmcgYXJyYXkgbGVuZ3RoJ1xuICAgIGlmIChwb3NpdGlvbnMubGVuZ3RoID09PSB0aGlzLmRyYWdnYWJsZXMubGVuZ3RoKSB7XG4gICAgICBwb3NpdGlvbnMuZm9yRWFjaCgocG9pbnQsIGkpID0+IHtcbiAgICAgICAgdGhpcy5kcmFnZ2FibGVzW2ldLnBpblBvc2l0aW9uKHBvaW50KVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbWVzc2FnZVxuICAgIH1cbiAgfVxuXG4gIGdldCBlbmFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZVxuICB9XG5cbiAgc2V0IGVuYWJsZShlbmFibGUpIHtcbiAgICB0aGlzLl9lbmFibGUgPSBlbmFibGVcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUuZW5hYmxlID0gZW5hYmxlXG4gICAgfSlcbiAgfVxuXG4gIHN0YXRpYyBmYWN0b3J5KGNvbnRhaW5lckVsZW1lbnQsIGVsZW1lbnRzLCBvcHRpb25zPXt9KSB7XG4gICAgY29uc3QgZHJhZ2dhYmxlcyA9IEFycmF5LmZyb20oZWxlbWVudHMpLm1hcCgoZWxlbWVudCkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBEcmFnZ2FibGUoZWxlbWVudCwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyRWxlbWVudFxuICAgICAgfSwgb3B0aW9ucy5kcmFnZ2FibGUgfHwge30pKVxuICAgIH0pXG5cbiAgICByZXR1cm4gbmV3IExpc3QoZHJhZ2dhYmxlcywgT2JqZWN0LmFzc2lnbih7XG4gICAgICBjb250YWluZXI6IGNvbnRhaW5lckVsZW1lbnRcbiAgICB9LCBvcHRpb25zLmxpc3QgfHwge30pKVxuICB9XG59XG4iLCJpbXBvcnQgTGlzdCBmcm9tICcuL2xpc3QnXG5pbXBvcnQgeyBpbmRleE9mTmVhcmVzdFBvaW50LCBnZXRZRGlmZmVyZW5jZSB9IGZyb20gJy4vZ2VvbWV0cnkvZGlzdGFuY2VzJ1xuXG5pbXBvcnQgRHJhZ2dhYmxlIGZyb20gJy4vZHJhZ2dhYmxlJ1xuXG5jb25zdCBhcnJheU1vdmUgPSAoYXJyYXksIGZyb20sIHRvKSA9PiB7XG4gIGFycmF5LnNwbGljZSh0byA8IDAgPyBhcnJheS5sZW5ndGggKyB0byA6IHRvLCAwLCBhcnJheS5zcGxpY2UoZnJvbSwgMSlbMF0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1YmJsaW5nTGlzdCBleHRlbmRzIExpc3Qge1xuICBjb25zdHJ1Y3RvcihkcmFnZ2FibGVzLCBvcHRpb25zPXt9KSB7XG4gICAgc3VwZXIoZHJhZ2dhYmxlcywgb3B0aW9ucylcbiAgfVxuXG4gIGluaXREcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgZHJhZ2dhYmxlLm9uKCdkcmFnOnN0YXJ0JywgKCkgPT4gdGhpcy5hdXRvRGV0ZWN0VmVydGljYWxHYXAoZHJhZ2dhYmxlKSlcbiAgICBzdXBlci5pbml0RHJhZ2dhYmxlKGRyYWdnYWJsZSlcbiAgfVxuXG4gIGF1dG9EZXRlY3RWZXJ0aWNhbEdhcCgpIHtcbiAgICBpZiAodGhpcy5kcmFnZ2FibGVzLmxlbmd0aCA+PSAyKSB7XG4gICAgICBjb25zdCBzb3J0ZWQgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuXG4gICAgICB0aGlzLnZlcnRpY2FsR2FwID0gc29ydGVkWzFdLnBpbm5lZFBvc2l0aW9uLnkgLSBzb3J0ZWRbMF0ucGlubmVkUG9zaXRpb24ueSAtIHNvcnRlZFswXS5nZXRTaXplKCkueVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZlcnRpY2FsR2FwID0gMFxuICAgIH1cblxuICAgIGlmICh0aGlzLmRyYWdnYWJsZXMubGVuZ3RoID49IDEpIHtcbiAgICAgIHRoaXMuc3RhcnRQb3NpdGlvbiA9IHRoaXMuZHJhZ2dhYmxlc1swXS5waW5uZWRQb3NpdGlvblxuICAgIH1cbiAgfVxuXG4gIG9uTW92ZShkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBzb3J0ZWREcmFnZ2FibGVzID0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcbiAgICBjb25zdCBwaW5uZWRQb3NpdGlvbnMgPSBzb3J0ZWREcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24pXG5cbiAgICBjb25zdCBjdXJyZW50SW5kZXggPSBzb3J0ZWREcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKVxuICAgIGNvbnN0IHRhcmdldEluZGV4ID0gaW5kZXhPZk5lYXJlc3RQb2ludChwaW5uZWRQb3NpdGlvbnMsIGRyYWdnYWJsZS5wb3NpdGlvbiwgdGhpcy5vcHRpb25zLnJhZGl1cywgdGhpcy5kaXN0YW5jZUZ1bmMpXG5cbiAgICBpZiAodGFyZ2V0SW5kZXggIT09IC0xICYmIGN1cnJlbnRJbmRleCAhPT0gdGFyZ2V0SW5kZXgpIHtcbiAgICAgIGFycmF5TW92ZShzb3J0ZWREcmFnZ2FibGVzLCBjdXJyZW50SW5kZXgsIHRhcmdldEluZGV4KVxuICAgICAgdGhpcy5idWJibGluZyhzb3J0ZWREcmFnZ2FibGVzLCBkcmFnZ2FibGUpXG4gICAgICB0aGlzLmNoYW5nZWREdXJpbmdJdGVyYXRpb24gPSB0cnVlXG4gICAgfVxuICB9XG5cbiAgYnViYmxpbmcoc29ydGVkRHJhZ2dhYmxlcywgY3VycmVudERyYWdnYWJsZSkge1xuICAgIGNvbnN0IGN1cnJlbnRQb3NpdGlvbiA9IHRoaXMuc3RhcnRQb3NpdGlvbi5jbG9uZSgpXG5cbiAgICBzb3J0ZWREcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgaWYgKCFkcmFnZ2FibGUucGlubmVkUG9zaXRpb24uY29tcGFyZShjdXJyZW50UG9zaXRpb24pKSB7XG4gICAgICAgIGlmIChkcmFnZ2FibGUgPT09IGN1cnJlbnREcmFnZ2FibGUgJiYgIWN1cnJlbnREcmFnZ2FibGUubmF0aXZlRHJhZ0FuZERyb3ApIHtcbiAgICAgICAgICBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24gPSBjdXJyZW50UG9zaXRpb24uY2xvbmUoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRyYWdnYWJsZS5waW5Qb3NpdGlvbihjdXJyZW50UG9zaXRpb24sIChkcmFnZ2FibGUgPT09IGN1cnJlbnREcmFnZ2FibGUpID8gMCA6IHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjdXJyZW50UG9zaXRpb24ueSA9IGN1cnJlbnRQb3NpdGlvbi55ICsgZHJhZ2dhYmxlLmdldFNpemUoKS55ICsgdGhpcy52ZXJ0aWNhbEdhcFxuICAgIH0pXG4gIH1cblxuICBnZXQgZGlzdGFuY2VGdW5jKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZ2V0RGlzdGFuY2UgfHwgZ2V0WURpZmZlcmVuY2VcbiAgfVxuXG4gIHN0YXRpYyBmYWN0b3J5KGNvbnRhaW5lckVsZW1lbnQsIGVsZW1lbnRzLCBvcHRpb25zPXt9KSB7XG4gICAgY29uc3QgZHJhZ2dhYmxlcyA9IEFycmF5LmZyb20oZWxlbWVudHMpLm1hcCgoZWxlbWVudCkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBEcmFnZ2FibGUoZWxlbWVudCwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyRWxlbWVudFxuICAgICAgfSwgb3B0aW9ucy5kcmFnZ2FibGUgfHwge30pKVxuICAgIH0pXG5cbiAgICByZXR1cm4gbmV3IEJ1YmJsaW5nTGlzdChkcmFnZ2FibGVzLCBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyRWxlbWVudFxuICAgIH0sIG9wdGlvbnMubGlzdCB8fCB7fSkpXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJnZXRTdW1WYWx1ZU9mU3R5bGVSdWxlcyIsImVsZW1lbnQiLCJydWxlcyIsInJlZHVjZSIsInN1bSIsInJ1bGUiLCJwYXJzZUludCIsIndpbmRvdyIsImdldENvbXB1dGVkU3R5bGUiLCJQb2ludCIsIngiLCJ5IiwicCIsImsiLCJwYXJlbnQiLCJwYXJlbnROb2RlIiwiZWxlbWVudFJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJwYXJlbnRSZWN0IiwibGVmdCIsInRvcCIsImlzQ29udGVudEJveFNpemUiLCJ3aWR0aCIsImhlaWdodCIsIlJlY3RhbmdsZSIsInBvc2l0aW9uIiwic2l6ZSIsImFkZCIsIm11bHQiLCJyZWN0IiwiTWF0aCIsIm1pbiIsIm1heCIsInN1YiIsInJlY3RhbmdsZSIsImluY2x1ZGVQb2ludCIsImdldFAzIiwiYXhpcyIsInNlbEF4aXMiLCJjcm9zc1JlY3RhbmdsZSIsImFuZCIsInRoaXNDZW50ZXIiLCJnZXRDZW50ZXIiLCJyZWN0Q2VudGVyIiwic2lnbiIsIm9mZnNldCIsImVsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic3R5bGUiLCJpc0NvbnNpZGVyVHJhbnNsYXRlIiwiZWxlbWVudE9mZnNldCIsImVsZW1lbnRTaXplIiwiZ2V0RGVmYXVsdENvbnRhaW5lciIsImNvbnRhaW5lciIsInRhZ05hbWUiLCJFdmVudEVtaXR0ZXIiLCJvcHRpb25zIiwiZXZlbnRzIiwib24iLCJPYmplY3QiLCJlbnRyaWVzIiwiZXZlbnROYW1lIiwiZm4iLCJpbnRlcnJ1cHRlZCIsImFyZ3MiLCJzbGljZSIsImNhbGwiLCJhcmd1bWVudHMiLCJmdW5jIiwicHVzaCIsInVuc2hpZnQiLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJnZXREaXN0YW5jZSIsInAxIiwicDIiLCJkeCIsImR5Iiwic3FydCIsImdldFhEaWZmZXJlbmNlIiwiYWJzIiwiZ2V0WURpZmZlcmVuY2UiLCJ0cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5IiwicG93IiwiaW5kZXhPZk5lYXJlc3RQb2ludCIsImFyciIsInZhbCIsInJhZGl1cyIsImdldERpc3RhbmNlRnVuYyIsImkiLCJ0ZW1wIiwibGVuZ3RoIiwiZGlyZWN0Q3Jvc3NpbmciLCJMMVAxIiwiTDFQMiIsIkwyUDEiLCJMMlAyIiwiazEiLCJrMiIsImIxIiwiYjIiLCJib3VuZFRvTGluZSIsIkEiLCJCIiwiUCIsIkFQIiwiQUIiLCJhYjIiLCJhcF9hYiIsInQiLCJnZXRQb2ludE9uTGluZUJ5TGVuZ2h0IiwiTFAxIiwiTFAyIiwibGVuZ2h0IiwicGVyY2VudCIsImFkZFBvaW50VG9Cb3VuZFBvaW50cyIsImJvdW5kcG9pbnRzIiwicG9pbnQiLCJpc1JpZ2h0IiwicmVzdWx0IiwiZmlsdGVyIiwiYlBvaW50IiwiZ2V0QW5nbGVEaWZmIiwiYWxwaGEiLCJiZXRhIiwibWluQW5nbGUiLCJtYXhBbmdsZSIsIlBJIiwiZ2V0QW5nbGUiLCJkaWZmIiwibm9ybWFsaXplQW5nbGUiLCJhdGFuMiIsImJvdW5kQW5nbGUiLCJkbWluIiwiZG1heCIsImdldFBvaW50RnJvbVJhZGlhbFN5c3RlbSIsImFuZ2xlIiwiY2VudGVyIiwiY29zIiwic2luIiwiQm91bmQiLCJfc2l6ZSIsImluc3RhbmNlIiwiYm91bmQiLCJiaW5kIiwiQm91bmRUb1JlY3RhbmdsZSIsImNhbGNQb2ludCIsImNsb25lIiwicmVjdFAyIiwiQm91bmRUb0VsZW1lbnQiLCJmcm9tRWxlbWVudCIsIkJvdW5kVG9MaW5lWCIsInN0YXJ0WSIsImVuZFkiLCJCb3VuZFRvTGluZVkiLCJzdGFydFgiLCJlbmRYIiwiQm91bmRUb0xpbmUiLCJzdGFydFBvaW50IiwiZW5kUG9pbnQiLCJzb21lSyIsImNvc0JldGEiLCJzaW5CZXRhIiwicG9pbnQyIiwibmV3RW5kUG9pbnQiLCJwb2ludENyb3NzaW5nIiwiQm91bmRUb0NpcmNsZSIsIkJvdW5kVG9BcmMiLCJzdGFydEFuZ2xlIiwiZW5kQW5nbGUiLCJfc3RhcnRBbmdsZSIsIl9lbmRBbmdsZSIsImFycmF5IiwicmFuZ2UiLCJzdGFydCIsInN0b3AiLCJzdGVwIiwiQmFzaWNTdHJhdGVneSIsIk5vdENyb3NzaW5nU3RyYXRlZ3kiLCJyZWN0YW5nbGVMaXN0IiwiaW5kZXhlc09mTmV3cyIsInN0YXRpY1JlY3RhbmdsZUluZGV4ZXMiLCJpbmRleGVzIiwiX3JlY3QiLCJmb3JFYWNoIiwicmVtb3ZhYmxlIiwiaW5kZXhPZlN0YXRpYyIsInN0YXRpY1JlY3QiLCJtb3ZlVG9Cb3VuZCIsInNvbWUiLCJib3VuZFJlY3QiLCJnZXRTcXVhcmUiLCJvZGxEcmFnZ2FibGVzTGlzdCIsIm5ld0RyYWdnYWJsZXMiLCJpbmRleE9mTmV3cyIsImRyYWdnYWJsZXMiLCJjb25jYXQiLCJkcmFnZ2FibGUiLCJGbG9hdExlZnRTdHJhdGVneSIsImFzc2lnbiIsInBhZGRpbmdUb3BMZWZ0IiwicGFkZGluZ0JvdHRvbVJpZ2h0IiwieUdhcEJldHdlZW5EcmFnZ2FibGVzIiwiZ2V0UG9zaXRpb24iLCJfaW5kZXhlc09mTmV3cyIsImdldFAyIiwiYm91bmRhcnlQb2ludHMiLCJyZWN0SW5kZXgiLCJpc1ZhbGlkIiwibmV3TGlzdCIsImxpc3RPbGRQb3NpdGlvbiIsIm1hcCIsIm5ld0RyYWdnYWJsZSIsIkZsb2F0UmlnaHRTdHJhdGVneSIsInBhZGRpbmdUb3BSaWdodCIsInBhZGRpbmdCb3R0b21MZWZ0IiwicGFkZGluZ0JvdHRvbU5lZ0xlZnQiLCJnZXRQNCIsImFkZFRvRGVmYXVsdFNjb3BlIiwidGFyZ2V0IiwiZGVmYXVsdFNjb3BlIiwiYWRkVGFyZ2V0IiwiVGFyZ2V0IiwidGltZUVuZCIsInRpbWVFeGNhbmdlIiwicG9zaXRpb25pbmdTdHJhdGVneSIsInN0cmF0ZWd5IiwiZ2V0UmVjdGFuZ2xlIiwidGFyZ2V0cyIsImVtaXR0ZXIiLCJlbWl0Iiwic3RhcnRCb3VuZGluZyIsImluaXQiLCJib3VuZGluZyIsImluZGV4ZXNPZk5ldyIsInBvc2l0aW9uaW5nIiwib2xkRHJhZ2dhYmxlcyIsInNvcnRpbmciLCJyZWN0YW5nbGVzIiwiaW5uZXJEcmFnZ2FibGVzIiwic2V0UG9zaXRpb24iLCJjYXRjaERyYWdnYWJsZSIsInRhcmdldFJlY3RhbmdsZSIsImRyYWdnYWJsZVNxdWFyZSIsInNjb3BlcyIsInNjb3BlIiwicmVtb3ZlSXRlbSIsIm5ld0RyYWdnYWJsZXNJbmRleCIsImdldFNpemUiLCJhZGRSZW1vdmVPbk1vdmUiLCJ0aW1lIiwibW92ZSIsImluaXRpYWxQb3NpdGlvbiIsInB1c2hJbm5lckRyYWdnYWJsZSIsInJlbW92ZUhhbmRsZXIiLCJyZW1vdmUiLCJ1bnN1YnNjcmliZSIsIl9jb250YWluZXIiLCJTY29wZSIsImRyYWdFbmRBY3Rpb24iLCJvbkVuZCIsInNob3RUYXJnZXRzIiwic29ydCIsImEiLCJiIiwicGluUG9zaXRpb24iLCJyZXNldCIsInJlZnJlc2giLCJwb3NpdGlvbnMiLCJtZXNzYWdlIiwidGFyZ2V0SW5kZXhlcyIsImN1cnJlbnRTY29wZSIsImFkZERyYWdnYWJsZVRvU2NvcGUiLCJhZGREcmFnZ2FibGUiLCJEcmFnZ2FibGUiLCJpbnRlcnJ1cHQiLCJhZGRUYXJnZXRUb1Njb3BlIiwicHJlcGVuZE9uIiwiY2hlY2tTdXBwb3J0UGFzc2l2ZUV2ZW50cyIsInBhc3NpdmVTdXBwb3J0ZWQiLCJkZWZpbmVQcm9wZXJ0eSIsImdldCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiX2VyciIsImlzU3VwcG9ydFBhc3NpdmVFdmVudHMiLCJpc1RvdWNoIiwibW91c2VFdmVudHMiLCJlbmQiLCJ0b3VjaEV2ZW50cyIsInRyYW5zZm9ybVByb3BlcnR5IiwiZ2V0U3R5bGVQcm9wZXJ0eSIsInRyYW5zaXRpb25Qcm9wZXJ0eSIsImdldFRvdWNoQnlJRCIsInRvdWNoSWQiLCJjaGFuZ2VkVG91Y2hlcyIsImlkZW50aWZpZXIiLCJwcmV2ZW50RG91YmxlSW5pdCIsImV4aXN0aW5nIiwiY29weVN0eWxlcyIsInNvdXJjZSIsImRlc3RpbmF0aW9uIiwiY3MiLCJrZXkiLCJjaGlsZHJlbiIsIl9lbmFibGUiLCJzdGFydFBvc2l0aW9uaW5nIiwic3RhcnRMaXN0ZW5pbmciLCJfc2V0RGVmYXVsdFRyYW5zaXRpb24iLCJwaW5uZWRQb3NpdGlvbiIsIl9kcmFnU3RhcnQiLCJldmVudCIsImRyYWdTdGFydCIsIl9kcmFnTW92ZSIsImRyYWdNb3ZlIiwiX2RyYWdFbmQiLCJkcmFnRW5kIiwiX25hdGl2ZURyYWdTdGFydCIsIm5hdGl2ZURyYWdTdGFydCIsIl9uYXRpdmVEcmFnT3ZlciIsIm5hdGl2ZURyYWdPdmVyIiwiX25hdGl2ZURyYWdFbmQiLCJuYXRpdmVEcmFnRW5kIiwiX25hdGl2ZURyb3AiLCJuYXRpdmVEcm9wIiwiX3Njcm9sbCIsIm9uU2Nyb2xsIiwiaGFuZGxlciIsInBhc3NpdmUiLCJfdHJhbnNmb3JtUG9zaXRpb24iLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbkNzcyIsInRlc3QiLCJyZXBsYWNlIiwidHJhbnNsYXRlQ3NzIiwidHJhbnNmb3JtIiwic2hvdWxkUmVtb3ZlWmVyb1RyYW5zbGF0ZSIsImlzU2lsZW50IiwiZGV0ZXJtaW5lRGlyZWN0aW9uIiwiX3NldFRyYW5zaXRpb24iLCJfc2V0VHJhbnNsYXRlIiwic2lsZW50IiwibGVmdERpcmVjdGlvbiIsInJpZ2h0RGlyZWN0aW9uIiwidXBEaXJlY3Rpb24iLCJkb3duRGlyZWN0aW9uIiwiY3VycmVudEV2ZW50IiwiaXNUb3VjaEV2ZW50IiwiVG91Y2hFdmVudCIsInRvdWNoUG9pbnQiLCJfc3RhcnRUb3VjaFBvaW50IiwicGFnZVgiLCJjbGllbnRYIiwicGFnZVkiLCJjbGllbnRZIiwiX3N0YXJ0UG9zaXRpb24iLCJfdG91Y2hJZCIsIl9zdGFydFNjcm9sbFBvaW50Iiwic2Nyb2xsWCIsInNjcm9sbFkiLCJzdG9wUHJvcGFnYXRpb24iLCJIVE1MSW5wdXRFbGVtZW50IiwiZm9jdXMiLCJuYXRpdmVEcmFnQW5kRHJvcCIsInByZXZlbnREZWZhdWx0IiwiaXNTYWZhcmkiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJlbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3BPblRvdWNoIiwiZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wRm9yQWxsIiwiZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wIiwiaXNEcmFnZ2luZyIsInRvdWNoIiwic2Nyb2xsUG9pbnQiLCJjbGFzc0xpc3QiLCJyZW1vdmVBdHRyaWJ1dGUiLCJzZXRUaW1lb3V0IiwiX2V2ZW50IiwiZGF0YVRyYW5zZmVyIiwic2V0RGF0YSIsImVmZmVjdEFsbG93ZWQiLCJkcm9wRWZmZWN0IiwiY29udGFpbmVyUmVjdCIsImNsb25lZEVsZW1lbnQiLCJjbG9uZU5vZGUiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJlbXVsYXRpb25EcmFnZ2FibGUiLCJjb250YWluZXJSZWN0UG9pbnQiLCJkZXN0cm95IiwicmVtb3ZlQ2hpbGQiLCJyZXNldEVtaXR0ZXIiLCJfaGFuZGxlciIsImVuYWJsZSIsIlJlc2l6ZU9ic2VydmVyIiwiUG9seWZpbGwiLCJMaXN0IiwiY2hhbmdlZER1cmluZ0l0ZXJhdGlvbiIsInJlc2l6ZU9ic2VydmVyIiwicmVvcmRlck9uQ2hhbmdlIiwiZCIsIm9ic2VydmUiLCJpbml0RHJhZ2dhYmxlIiwib25Nb3ZlIiwic29ydGVkRHJhZ2dhYmxlcyIsImdldFNvcnRlZERyYWdnYWJsZXMiLCJwaW5uZWRQb3NpdGlvbnMiLCJjdXJyZW50SW5kZXgiLCJ0YXJnZXRJbmRleCIsImRpc3RhbmNlRnVuYyIsInJlb3JkZXJFbGVtZW50cyIsIm9yZGVyZWRFbGVtZW50cyIsImZyYWdtZW50IiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsInJlc2V0UG9zaXRpb25Ub0luaXRpYWwiLCJBcnJheSIsImluaXRpYWxQb3NpdGlvbnMiLCJsaXN0IiwicmVzZXRPbiIsImoiLCJkcmFnZ2FibGVBIiwiZHJhZ2dhYmxlQiIsImdldEN1cnJlbnRQaW5uZWRQb3NpdGlvbnMiLCJjb250YWluZXJFbGVtZW50IiwiZWxlbWVudHMiLCJmcm9tIiwiYXJyYXlNb3ZlIiwidG8iLCJCdWJibGluZ0xpc3QiLCJhdXRvRGV0ZWN0VmVydGljYWxHYXAiLCJzb3J0ZWQiLCJ2ZXJ0aWNhbEdhcCIsInN0YXJ0UG9zaXRpb24iLCJidWJibGluZyIsImN1cnJlbnREcmFnZ2FibGUiLCJjdXJyZW50UG9zaXRpb24iLCJjb21wYXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFBQSxTQUFTQSx1QkFBVCxDQUFpQ0MsT0FBakMsRUFBMENDLEtBQTFDLEVBQWlEO0VBQy9DLEVBQU9BLE9BQUFBLEtBQUssQ0FBQ0MsTUFBTixDQUFhLFVBQUNDLEdBQUQsRUFBTUMsSUFBTixFQUFlO0VBQ2pDLElBQUEsT0FBT0QsR0FBRyxHQUFHRSxRQUFRLENBQUNDLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0JQLE9BQXhCLENBQUEsQ0FBaUNJLElBQWpDLENBQUEsSUFBd0MsQ0FBekMsQ0FBckIsQ0FBQTtFQUNELEdBRk0sRUFFSixDQUZJLENBQVAsQ0FBQTtFQUdELENBQUE7RUFF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
