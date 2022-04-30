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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZGV2LmpzIiwic291cmNlcyI6WyIuLi9zcmMvZ2VvbWV0cnkvcG9pbnQuanMiLCIuLi9zcmMvZ2VvbWV0cnkvcmVjdGFuZ2xlLmpzIiwiLi4vc3JjL3V0aWxzL2dldC1kZWZhdWx0LWNvbnRhaW5lci5qcyIsIi4uL3NyYy9ldmVudEVtaXR0ZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvZGVzYW5kcm8tZ2V0LXN0eWxlLXByb3BlcnR5L2dldC1zdHlsZS1wcm9wZXJ0eS5qcyIsIi4uL3NyYy9nZW9tZXRyeS9kaXN0YW5jZXMuanMiLCIuLi9zcmMvZ2VvbWV0cnkvYm91bmRzLmpzIiwiLi4vc3JjL2dlb21ldHJ5L2FuZ2xlcy5qcyIsIi4uL3NyYy9ib3VuZGluZy5qcyIsIi4uL3NyYy91dGlscy9yZW1vdmUtYXJyYXktaXRlbS5qcyIsIi4uL3NyYy91dGlscy9yYW5nZS5qcyIsIi4uL3NyYy9wb3NpdGlvbmluZy5qcyIsIi4uL3NyYy90YXJnZXQuanMiLCIuLi9zcmMvc2NvcGUuanMiLCIuLi9zcmMvdXRpbHMvaXMtc3VwcG9ydC1wYXNzaXZlLWV2ZW50cy5qcyIsIi4uL3NyYy9kcmFnZ2FibGUuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL3V0aWxzL3Jlc2l6ZU9ic2VydmVycy5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvYWxnb3JpdGhtcy9oYXNBY3RpdmVPYnNlcnZhdGlvbnMuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL2FsZ29yaXRobXMvaGFzU2tpcHBlZE9ic2VydmF0aW9ucy5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvYWxnb3JpdGhtcy9kZWxpdmVyUmVzaXplTG9vcEVycm9yLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BqdWdnbGUvcmVzaXplLW9ic2VydmVyL2xpYi9SZXNpemVPYnNlcnZlckJveE9wdGlvbnMuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL3V0aWxzL2ZyZWV6ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvUmVzaXplT2JzZXJ2ZXJTaXplLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BqdWdnbGUvcmVzaXplLW9ic2VydmVyL2xpYi9ET01SZWN0UmVhZE9ubHkuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL3V0aWxzL2VsZW1lbnQuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL3V0aWxzL2dsb2JhbC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvYWxnb3JpdGhtcy9jYWxjdWxhdGVCb3hTaXplLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BqdWdnbGUvcmVzaXplLW9ic2VydmVyL2xpYi9SZXNpemVPYnNlcnZlckVudHJ5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BqdWdnbGUvcmVzaXplLW9ic2VydmVyL2xpYi9hbGdvcml0aG1zL2NhbGN1bGF0ZURlcHRoRm9yTm9kZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvYWxnb3JpdGhtcy9icm9hZGNhc3RBY3RpdmVPYnNlcnZhdGlvbnMuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL2FsZ29yaXRobXMvZ2F0aGVyQWN0aXZlT2JzZXJ2YXRpb25zQXREZXB0aC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvdXRpbHMvcHJvY2Vzcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvdXRpbHMvcXVldWVNaWNyb1Rhc2suanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL3V0aWxzL3F1ZXVlUmVzaXplT2JzZXJ2ZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL3V0aWxzL3NjaGVkdWxlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvUmVzaXplT2JzZXJ2YXRpb24uanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL1Jlc2l6ZU9ic2VydmVyRGV0YWlsLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BqdWdnbGUvcmVzaXplLW9ic2VydmVyL2xpYi9SZXNpemVPYnNlcnZlckNvbnRyb2xsZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL1Jlc2l6ZU9ic2VydmVyLmpzIiwiLi4vc3JjL2xpc3QuanMiLCIuLi9zcmMvYnViYmxpbmdMaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGdldFN1bVZhbHVlT2ZTdHlsZVJ1bGVzKGVsZW1lbnQsIHJ1bGVzKSB7XG4gIHJldHVybiBydWxlcy5yZWR1Y2UoKHN1bSwgcnVsZSkgPT4ge1xuICAgIHJldHVybiBzdW0gKyBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KVtydWxlXXx8MClcbiAgfSwgMClcbn1cblxuLyoqIENsYXNzIHJlcHJlc2VudGluZyBhIHBvaW50LiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9pbnQge1xuICAvKipcbiAgKiBDcmVhdGUgYSBwb2ludC5cbiAgKiBAcGFyYW0ge251bWJlcn0geCAtIFRoZSB4IHZhbHVlLlxuICAqIEBwYXJhbSB7bnVtYmVyfSB5IC0gVGhlIHkgdmFsdWUuXG4gICovXG4gIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICB0aGlzLnggPSB4XG4gICAgdGhpcy55ID0geVxuICB9XG5cbiAgYWRkKHApIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCArIHAueCwgdGhpcy55ICsgcC55KVxuICB9XG5cbiAgc3ViKHApIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCAtIHAueCwgdGhpcy55IC0gcC55KVxuICB9XG5cbiAgbXVsdChrKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnggKiBrLCB0aGlzLnkgKiBrKVxuICB9XG5cbiAgbmVnYXRpdmUoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCgtdGhpcy54LCAtdGhpcy55KVxuICB9XG5cbiAgY29tcGFyZShwKSB7XG4gICAgcmV0dXJuICh0aGlzLnggPT09IHAueCAmJiB0aGlzLnkgPT09IHAueSlcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54LCB0aGlzLnkpXG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gYHt4PSR7dGhpcy54fSx5PSR7dGhpcy55fWBcbiAgfVxuXG4gIHN0YXRpYyBlbGVtZW50T2Zmc2V0KGVsZW1lbnQsIHBhcmVudCkge1xuICAgIHBhcmVudCA9IHBhcmVudCB8fCBlbGVtZW50LnBhcmVudE5vZGVcbiAgICBjb25zdCBlbGVtZW50UmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICBjb25zdCBwYXJlbnRSZWN0ID0gcGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgcmV0dXJuIG5ldyBQb2ludChcbiAgICAgIGVsZW1lbnRSZWN0LmxlZnQgLSBwYXJlbnRSZWN0LmxlZnQsXG4gICAgICBlbGVtZW50UmVjdC50b3AgLSBwYXJlbnRSZWN0LnRvcFxuICAgIClcbiAgfVxuXG4gIHN0YXRpYyBlbGVtZW50U2l6ZShlbGVtZW50LCBpc0NvbnRlbnRCb3hTaXplPWZhbHNlKSB7XG4gICAgbGV0IHdpZHRoID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudClbJ3dpZHRoJ10pXG4gICAgbGV0IGhlaWdodCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpWydoZWlnaHQnXSlcbiAgICBpZiAoIWlzQ29udGVudEJveFNpemUpIHtcbiAgICAgIHdpZHRoICs9IGdldFN1bVZhbHVlT2ZTdHlsZVJ1bGVzKGVsZW1lbnQsIFsncGFkZGluZy1sZWZ0JywgJ3BhZGRpbmctcmlnaHQnLCAnYm9yZGVyLWxlZnQtd2lkdGgnLCAnYm9yZGVyLXJpZ2h0LXdpZHRoJ10pXG4gICAgICBoZWlnaHQgKz0gZ2V0U3VtVmFsdWVPZlN0eWxlUnVsZXMoZWxlbWVudCwgWydwYWRkaW5nLXRvcCcsICdwYWRkaW5nLWJvdHRvbScsICdib3JkZXItdG9wLXdpZHRoJywgJ2JvcmRlci1ib3R0b20td2lkdGgnXSlcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBQb2ludCh3aWR0aCwgaGVpZ2h0KVxuICB9XG59XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9wb2ludCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVjdGFuZ2xlIHtcbiAgY29uc3RydWN0b3IocG9zaXRpb24sIHNpemUpIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb25cbiAgICB0aGlzLnNpemUgPSBzaXplXG4gIH1cblxuICBnZXRQMSgpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvblxuICB9XG5cbiAgZ2V0UDIoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnNpemUueCwgdGhpcy5wb3NpdGlvbi55KVxuICB9XG5cbiAgZ2V0UDMoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb24uYWRkKHRoaXMuc2l6ZSlcbiAgfVxuXG4gIGdldFA0KCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSlcbiAgfVxuXG4gIGdldENlbnRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi5hZGQodGhpcy5zaXplLm11bHQoMC41KSlcbiAgfVxuXG4gIG9yKHJlY3QpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IG5ldyBQb2ludChNYXRoLm1pbih0aGlzLnBvc2l0aW9uLngsIHJlY3QucG9zaXRpb24ueCksIE1hdGgubWluKHRoaXMucG9zaXRpb24ueSwgcmVjdC5wb3NpdGlvbi55KSlcbiAgICBjb25zdCBzaXplID0gKG5ldyBQb2ludChNYXRoLm1heCh0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnNpemUueCwgcmVjdC5wb3NpdGlvbi54ICsgcmVjdC5zaXplLngpLCBNYXRoLm1heCh0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSwgcmVjdC5wb3NpdGlvbi55ICsgcmVjdC5zaXplLnkpKSkuc3ViKHBvc2l0aW9uKVxuICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHBvc2l0aW9uLCBzaXplKVxuICB9XG5cbiAgYW5kKHJlY3QpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IG5ldyBQb2ludChNYXRoLm1heCh0aGlzLnBvc2l0aW9uLngsIHJlY3QucG9zaXRpb24ueCksIE1hdGgubWF4KHRoaXMucG9zaXRpb24ueSwgcmVjdC5wb3NpdGlvbi55KSlcbiAgICBjb25zdCBzaXplID0gKG5ldyBQb2ludChNYXRoLm1pbih0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnNpemUueCwgcmVjdC5wb3NpdGlvbi54ICsgcmVjdC5zaXplLngpLCBNYXRoLm1pbih0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSwgcmVjdC5wb3NpdGlvbi55ICsgcmVjdC5zaXplLnkpKSkuc3ViKHBvc2l0aW9uKVxuICAgIGlmIChzaXplLnggPD0gMCB8fCBzaXplLnkgPD0gMCkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUocG9zaXRpb24sIHNpemUpXG4gIH1cblxuICBpbmNsdWRlUG9pbnQocCkge1xuICAgIHJldHVybiAhKHRoaXMucG9zaXRpb24ueCA+IHAueCB8fCB0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnNpemUueCA8IHAueCB8fCB0aGlzLnBvc2l0aW9uLnkgPiBwLnkgfHwgdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnkgPCBwLnkpXG4gIH1cblxuICBpbmNsdWRlUmVjdGFuZ2xlKHJlY3RhbmdsZSkge1xuICAgIHJldHVybiB0aGlzLmluY2x1ZGVQb2ludChyZWN0YW5nbGUucG9zaXRpb24pICYmIHRoaXMuaW5jbHVkZVBvaW50KHJlY3RhbmdsZS5nZXRQMygpKVxuICB9XG5cbiAgbW92ZVRvQm91bmQocmVjdCwgYXhpcykge1xuICAgIGxldCBzZWxBeGlzLCBjcm9zc1JlY3RhbmdsZVxuICAgIGlmIChheGlzKSB7XG4gICAgICBzZWxBeGlzID0gYXhpc1xuICAgIH0gZWxzZSB7XG4gICAgICBjcm9zc1JlY3RhbmdsZSA9IHRoaXMuYW5kKHJlY3QpXG4gICAgICBpZiAoIWNyb3NzUmVjdGFuZ2xlKSB7XG4gICAgICAgIHJldHVybiByZWN0XG4gICAgICB9XG4gICAgICBzZWxBeGlzID0gY3Jvc3NSZWN0YW5nbGUuc2l6ZS54ID4gY3Jvc3NSZWN0YW5nbGUuc2l6ZS55ID8gJ3knIDogJ3gnXG4gICAgfVxuICAgIGNvbnN0IHRoaXNDZW50ZXIgPSB0aGlzLmdldENlbnRlcigpXG4gICAgY29uc3QgcmVjdENlbnRlciA9IHJlY3QuZ2V0Q2VudGVyKClcbiAgICBjb25zdCBzaWduID0gdGhpc0NlbnRlcltzZWxBeGlzXSA+IHJlY3RDZW50ZXJbc2VsQXhpc10gPyAtMSA6IDFcbiAgICBjb25zdCBvZmZzZXQgPSBzaWduID4gMCA/IHRoaXMucG9zaXRpb25bc2VsQXhpc10gKyB0aGlzLnNpemVbc2VsQXhpc10gLSByZWN0LnBvc2l0aW9uW3NlbEF4aXNdIDogdGhpcy5wb3NpdGlvbltzZWxBeGlzXSAtIChyZWN0LnBvc2l0aW9uW3NlbEF4aXNdICsgcmVjdC5zaXplW3NlbEF4aXNdKVxuICAgIHJlY3QucG9zaXRpb25bc2VsQXhpc10gPSByZWN0LnBvc2l0aW9uW3NlbEF4aXNdICsgb2Zmc2V0XG4gICAgcmV0dXJuIHJlY3RcbiAgfVxuXG4gIGdldFNxdWFyZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zaXplLnggKiB0aGlzLnNpemUueVxuICB9XG5cbiAgc3R5bGVBcHBseShlbCkge1xuICAgIGVsID0gZWwgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5kJylcbiAgICBlbC5zdHlsZS5sZWZ0ID0gdGhpcy5wb3NpdGlvbi54ICsgJ3B4J1xuICAgIGVsLnN0eWxlLnRvcCA9IHRoaXMucG9zaXRpb24ueSArICdweCdcbiAgICBlbC5zdHlsZS53aWR0aCA9IHRoaXMuc2l6ZS54ICsgJ3B4J1xuICAgIGVsLnN0eWxlLmhlaWdodCA9IHRoaXMuc2l6ZS55ICsgJ3B4J1xuICB9XG5cbiAgZ3Jvd3RoKHNpemUpIHtcbiAgICB0aGlzLnNpemUgPSB0aGlzLnNpemUuYWRkKHNpemUpXG4gICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMucG9zaXRpb24uYWRkKHNpemUubXVsdCgtMC41KSlcbiAgfVxuXG4gIGdldE1pblNpZGUoKSB7XG4gICAgcmV0dXJuIE1hdGgubWluKHRoaXMuc2l6ZS54LCB0aGlzLnNpemUueSlcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRWxlbWVudChlbGVtZW50LCBwYXJlbnQ9ZWxlbWVudC5wYXJlbnROb2RlLCBpc0NvbnRlbnRCb3hTaXplPWZhbHNlLCBpc0NvbnNpZGVyVHJhbnNsYXRlPWZhbHNlKSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBQb2ludC5lbGVtZW50T2Zmc2V0KGVsZW1lbnQsIHBhcmVudCwgaXNDb25zaWRlclRyYW5zbGF0ZSlcbiAgICBjb25zdCBzaXplID0gUG9pbnQuZWxlbWVudFNpemUoZWxlbWVudCwgaXNDb250ZW50Qm94U2l6ZSlcbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZShwb3NpdGlvbiwgc2l6ZSlcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0RGVmYXVsdENvbnRhaW5lcihlbGVtZW50KSB7XG4gIGxldCBjb250YWluZXIgPSBlbGVtZW50LnBhcmVudE5vZGVcbiAgd2hpbGUgKGNvbnRhaW5lci5wYXJlbnROb2RlICYmIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGNvbnRhaW5lcilbJ3Bvc2l0aW9uJ10gPT09ICdzdGF0aWMnICYmIGNvbnRhaW5lci50YWdOYW1lICE9PSAnQk9EWScpIHtcbiAgICBjb250YWluZXIgPSBjb250YWluZXIucGFyZW50Tm9kZVxuICB9XG4gIHJldHVybiBjb250YWluZXJcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yIChvcHRpb25zID0ge30pIHtcbiAgICB0aGlzLmV2ZW50cyA9IHt9XG5cbiAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLm9uKSB7XG4gICAgICBmb3IgKGNvbnN0IFtldmVudE5hbWUsIGZuXSBvZiBPYmplY3QuZW50cmllcyhvcHRpb25zLm9uKSkge1xuICAgICAgICB0aGlzLm9uKGV2ZW50TmFtZSwgZm4pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZW1pdChldmVudE5hbWUpIHtcbiAgICB0aGlzLmludGVycnVwdGVkID0gZmFsc2VcbiAgICBjb25zdCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpXG5cbiAgICBpZiAoIXRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHJldHVyblxuXG4gICAgZm9yIChjb25zdCBmdW5jIG9mIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIGZ1bmMoLi4uYXJncylcbiAgICAgIGlmICh0aGlzLmludGVycnVwdGVkKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGludGVycnVwdCgpIHtcbiAgICB0aGlzLmludGVycnVwdGVkID0gdHJ1ZVxuICB9XG5cbiAgb24oZXZlbnROYW1lLCBmbikge1xuICAgIGlmICghdGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IFtdXG4gICAgfVxuXG4gICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5wdXNoKGZuKVxuICB9XG5cbiAgcHJlcGVuZE9uKGV2ZW50TmFtZSwgZm4pIHtcbiAgICBpZiAoIXRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSBbXVxuICAgIH1cblxuICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0udW5zaGlmdChmbilcbiAgfVxuXG4gIHVuc3Vic2NyaWJlKGV2ZW50TmFtZSwgZm4pIHtcbiAgICBpZiAodGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmV2ZW50c1tldmVudE5hbWVdLmluZGV4T2YoZm4pXG4gICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLnNwbGljZShpbmRleCwgMSlcbiAgICB9XG4gIH1cblxuICByZXNldEVtaXR0ZXIgKCkge1xuICAgIHRoaXMuZXZlbnRzID0ge31cbiAgfVxuXG4gIHJlc2V0T24oZXZlbnROYW1lKSB7XG4gICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IFtdXG4gIH1cbn1cbiIsIi8qIVxuICogZ2V0U3R5bGVQcm9wZXJ0eSB2MS4wLjRcbiAqIG9yaWdpbmFsIGJ5IGthbmdheFxuICogaHR0cDovL3BlcmZlY3Rpb25raWxscy5jb20vZmVhdHVyZS10ZXN0aW5nLWNzcy1wcm9wZXJ0aWVzL1xuICogTUlUIGxpY2Vuc2VcbiAqL1xuXG4vKmpzaGludCBicm93c2VyOiB0cnVlLCBzdHJpY3Q6IHRydWUsIHVuZGVmOiB0cnVlICovXG4vKmdsb2JhbCBkZWZpbmU6IGZhbHNlLCBleHBvcnRzOiBmYWxzZSwgbW9kdWxlOiBmYWxzZSAqL1xuXG4oIGZ1bmN0aW9uKCB3aW5kb3cgKSB7XG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHByZWZpeGVzID0gJ1dlYmtpdCBNb3ogbXMgTXMgTycuc3BsaXQoJyAnKTtcbnZhciBkb2NFbGVtU3R5bGUgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGU7XG5cbmZ1bmN0aW9uIGdldFN0eWxlUHJvcGVydHkoIHByb3BOYW1lICkge1xuICBpZiAoICFwcm9wTmFtZSApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyB0ZXN0IHN0YW5kYXJkIHByb3BlcnR5IGZpcnN0XG4gIGlmICggdHlwZW9mIGRvY0VsZW1TdHlsZVsgcHJvcE5hbWUgXSA9PT0gJ3N0cmluZycgKSB7XG4gICAgcmV0dXJuIHByb3BOYW1lO1xuICB9XG5cbiAgLy8gY2FwaXRhbGl6ZVxuICBwcm9wTmFtZSA9IHByb3BOYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcHJvcE5hbWUuc2xpY2UoMSk7XG5cbiAgLy8gdGVzdCB2ZW5kb3Igc3BlY2lmaWMgcHJvcGVydGllc1xuICB2YXIgcHJlZml4ZWQ7XG4gIGZvciAoIHZhciBpPTAsIGxlbiA9IHByZWZpeGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrICkge1xuICAgIHByZWZpeGVkID0gcHJlZml4ZXNbaV0gKyBwcm9wTmFtZTtcbiAgICBpZiAoIHR5cGVvZiBkb2NFbGVtU3R5bGVbIHByZWZpeGVkIF0gPT09ICdzdHJpbmcnICkge1xuICAgICAgcmV0dXJuIHByZWZpeGVkO1xuICAgIH1cbiAgfVxufVxuXG4vLyB0cmFuc3BvcnRcbmlmICggdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAvLyBBTURcbiAgZGVmaW5lKCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZ2V0U3R5bGVQcm9wZXJ0eTtcbiAgfSk7XG59IGVsc2UgaWYgKCB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgKSB7XG4gIC8vIENvbW1vbkpTIGZvciBDb21wb25lbnRcbiAgbW9kdWxlLmV4cG9ydHMgPSBnZXRTdHlsZVByb3BlcnR5O1xufSBlbHNlIHtcbiAgLy8gYnJvd3NlciBnbG9iYWxcbiAgd2luZG93LmdldFN0eWxlUHJvcGVydHkgPSBnZXRTdHlsZVByb3BlcnR5O1xufVxuXG59KSggd2luZG93ICk7XG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0RGlzdGFuY2UocDEsIHAyKSB7XG4gIGNvbnN0IGR4ID0gcDEueCAtIHAyLngsIGR5ID0gcDEueSAtIHAyLnlcbiAgcmV0dXJuIE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFhEaWZmZXJlbmNlKHAxLCBwMikge1xuICByZXR1cm4gTWF0aC5hYnMocDEueCAtIHAyLngpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRZRGlmZmVyZW5jZShwMSwgcDIpIHtcbiAgcmV0dXJuIE1hdGguYWJzKHAxLnkgLSBwMi55KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtZWRTcGFjZURpc3RhbmNlRmFjdG9yeShvcHRpb25zKSB7XG4gIHJldHVybiAocDEsIHAyKSA9PiB7XG4gICAgcmV0dXJuIE1hdGguc3FydChcbiAgICAgIE1hdGgucG93KG9wdGlvbnMueCAqIE1hdGguYWJzKHAxLnggLSBwMi54KSwgMikgK1xuICAgICAgTWF0aC5wb3cob3B0aW9ucy55ICogTWF0aC5hYnMocDEueSAtIHAyLnkpLCAyKVxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5kZXhPZk5lYXJlc3RQb2ludChhcnIsIHZhbCwgcmFkaXVzLCBnZXREaXN0YW5jZUZ1bmM9Z2V0RGlzdGFuY2UpIHtcbiAgbGV0IHNpemUsIGluZGV4ID0gMCwgaSwgdGVtcFxuICBpZiAoYXJyLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAtMVxuICB9XG4gIHNpemUgPSBnZXREaXN0YW5jZUZ1bmMoYXJyWzBdLCB2YWwpXG4gIGZvciAoaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICB0ZW1wID0gZ2V0RGlzdGFuY2VGdW5jKGFycltpXSwgdmFsKVxuICAgIGlmICh0ZW1wIDwgc2l6ZSkge1xuICAgICAgc2l6ZSA9IHRlbXBcbiAgICAgIGluZGV4ID0gaVxuICAgIH1cbiAgfVxuICBpZiAocmFkaXVzID49IDAgJiYgc2l6ZSA+IHJhZGl1cykge1xuICAgIHJldHVybiAtMVxuICB9XG4gIHJldHVybiBpbmRleFxufVxuIiwiaW1wb3J0IFBvaW50IGZyb20gJy4vcG9pbnQnXG5pbXBvcnQgeyBnZXREaXN0YW5jZSB9IGZyb20gJy4vZGlzdGFuY2VzJ1xuXG5leHBvcnQgZnVuY3Rpb24gY2xhbXAobWluLCBtYXgsIHZhbCkge1xuICByZXR1cm4gTWF0aC5tYXgobWluLCBNYXRoLm1pbihtYXgsIHZhbCkpXG59XG5cbi8vUmV0dXJuIGNyb3NzaW5nIHBvaW50IG9mIHR3byBsaW5lc1xuZXhwb3J0IGZ1bmN0aW9uIGRpcmVjdENyb3NzaW5nKEwxUDEsIEwxUDIsIEwyUDEsIEwyUDIpIHtcbiAgbGV0IHRlbXAsIGsxLCBrMiwgYjEsIGIyLCB4LCB5XG4gIGlmIChMMlAxLnggPT09IEwyUDIueCkge1xuICAgIHRlbXAgPSBMMlAxXG4gICAgTDJQMSA9IEwxUDFcbiAgICBMMVAxID0gdGVtcFxuICAgIHRlbXAgPSBMMlAyXG4gICAgTDJQMiA9IEwxUDJcbiAgICBMMVAyID0gdGVtcFxuICB9XG4gIGlmIChMMVAxLnggPT09IEwxUDIueCkge1xuICAgIGsyID0gKEwyUDIueSAtIEwyUDEueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgIGIyID0gKEwyUDIueCAqIEwyUDEueSAtIEwyUDEueCAqIEwyUDIueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgIHggPSBMMVAxLnhcbiAgICB5ID0geCAqIGsyICsgYjJcbiAgICByZXR1cm4gbmV3IFBvaW50KHgsIHkpXG4gIH0gZWxzZSB7XG4gICAgazEgPSAoTDFQMi55IC0gTDFQMS55KSAvIChMMVAyLnggLSBMMVAxLngpXG4gICAgYjEgPSAoTDFQMi54ICogTDFQMS55IC0gTDFQMS54ICogTDFQMi55KSAvIChMMVAyLnggLSBMMVAxLngpXG4gICAgazIgPSAoTDJQMi55IC0gTDJQMS55KSAvIChMMlAyLnggLSBMMlAxLngpXG4gICAgYjIgPSAoTDJQMi54ICogTDJQMS55IC0gTDJQMS54ICogTDJQMi55KSAvIChMMlAyLnggLSBMMlAxLngpXG4gICAgeCA9IChiMSAtIGIyKSAvIChrMiAtIGsxKVxuICAgIHkgPSB4ICogazEgKyBiMVxuICAgIHJldHVybiBuZXcgUG9pbnQoeCwgeSlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRUb1NlZ21lbnQoTFAxLCBMUDIsIFApIHtcbiAgbGV0IHgsIHlcbiAgeCA9IGNsYW1wKE1hdGgubWluKExQMS54LCBMUDIueCksIE1hdGgubWF4KExQMS54LCBMUDIueCksIFAueClcbiAgaWYgKHggIT09IFAueCkge1xuICAgIHkgPSAoeCA9PT0gTFAxLngpID8gTFAxLnkgOiBMUDIueVxuICAgIFAgPSBuZXcgUG9pbnQoeCwgeSlcbiAgfVxuXG4gIHkgPSBjbGFtcChNYXRoLm1pbihMUDEueSwgTFAyLnkpLCBNYXRoLm1heChMUDEueSwgTFAyLnkpLCBQLnkpXG4gIGlmICh5ICE9PSBQLnkpIHtcbiAgICB4ID0gKHkgPT09IExQMS55KSA/IExQMS54IDogTFAyLnhcbiAgICBQID0gbmV3IFBvaW50KHgsIHkpXG4gIH1cblxuICByZXR1cm4gUFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRUb0xpbmUoQSwgQiwgUCkge1xuICBjb25zdCBBUCA9IG5ldyBQb2ludChQLnggLSBBLngsIFAueSAtIEEueSksXG4gICAgQUIgPSBuZXcgUG9pbnQoQi54IC0gQS54LCBCLnkgLSBBLnkpLFxuICAgIGFiMiA9IEFCLnggKiBBQi54ICsgQUIueSAqIEFCLnksXG4gICAgYXBfYWIgPSBBUC54ICogQUIueCArIEFQLnkgKiBBQi55LFxuICAgIHQgPSBhcF9hYiAvIGFiMlxuICByZXR1cm4gbmV3IFBvaW50KEEueCArIEFCLnggKiB0LCBBLnkgKyBBQi55ICogdClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBvaW50T25MaW5lKExQMSwgTFAyLCBwZXJjZW50KSB7XG4gIGNvbnN0IGR4ID0gTFAyLnggLSBMUDEueCwgZHkgPSBMUDIueSAtIExQMS55XG4gIHJldHVybiBuZXcgUG9pbnQoTFAxLnggKyBwZXJjZW50ICogZHgsIExQMS55ICsgcGVyY2VudCAqIGR5KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9pbnRPbkxpbmVCeUxlbmdodChMUDEsIExQMiwgbGVuZ2h0KSB7XG4gIGNvbnN0IGR4ID0gTFAyLnggLSBMUDEueFxuICBjb25zdCBkeSA9IExQMi55IC0gTFAxLnlcbiAgY29uc3QgcGVyY2VudCA9IGxlbmdodCAvIGdldERpc3RhbmNlKExQMSwgTFAyKVxuICByZXR1cm4gbmV3IFBvaW50KExQMS54ICsgcGVyY2VudCAqIGR4LCBMUDEueSArIHBlcmNlbnQgKiBkeSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFBvaW50VG9Cb3VuZFBvaW50cyhib3VuZHBvaW50cywgcG9pbnQsIGlzUmlnaHQpIHtcbiAgY29uc3QgcmVzdWx0ID0gYm91bmRwb2ludHMuZmlsdGVyKChiUG9pbnQpID0+IHtcbiAgICByZXR1cm4gYlBvaW50LnkgPiBwb2ludC55IHx8IChpc1JpZ2h0ID8gYlBvaW50LnggPCBwb2ludC54IDogYlBvaW50LnggPiBwb2ludC54KVxuICB9KVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzdWx0Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHBvaW50LnkgPCByZXN1bHRbaV0ueSkge1xuICAgICAgcmVzdWx0LnNwbGljZShpLCAwLCBwb2ludClcbiAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG4gIH1cbiAgcmVzdWx0LnB1c2gocG9pbnQpXG4gIHJldHVybiByZXN1bHRcbn1cbiIsImltcG9ydCBQb2ludCBmcm9tICcuL3BvaW50J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QW5nbGVEaWZmKGFscGhhLCBiZXRhKSB7XG4gIGNvbnN0IG1pbkFuZ2xlID0gTWF0aC5taW4oYWxwaGEsIGJldGEpXG4gIGNvbnN0IG1heEFuZ2xlID0gIE1hdGgubWF4KGFscGhhLCBiZXRhKVxuICByZXR1cm4gTWF0aC5taW4obWF4QW5nbGUgLSBtaW5BbmdsZSwgbWluQW5nbGUgKyBNYXRoLlBJKjIgLSBtYXhBbmdsZSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFuZ2xlKHAxLCBwMikge1xuICBjb25zdCBkaWZmID0gcDIuc3ViKHAxKVxuICByZXR1cm4gbm9ybWFsaXplQW5nbGUoTWF0aC5hdGFuMihkaWZmLnksIGRpZmYueCkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b1JhZGlhbihhbmdsZSkge1xuICByZXR1cm4gKChhbmdsZSAlIDM2MCkgKiBNYXRoLlBJIC8gMTgwKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9EZWdyZWUoYW5nbGUpIHtcbiAgcmV0dXJuIChhbmdsZSAqIDE4MCAvIE1hdGguUEkpICUgMzYwXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZEFuZ2xlKG1pbiwgbWF4LCB2YWwpIHtcbiAgbGV0IGRtaW4sIGRtYXhcbiAgaWYgKG1pbiA8IG1heCAmJiB2YWwgPiBtaW4gJiYgdmFsIDwgbWF4KSB7XG4gICAgcmV0dXJuIHZhbFxuICB9IGVsc2UgaWYgKG1heCA8IG1pbiAmJiAodmFsIDwgbWF4IHx8IHZhbCA+IG1pbikpIHtcbiAgICByZXR1cm4gdmFsXG4gIH0gZWxzZSB7XG4gICAgZG1pbiA9IGdldEFuZ2xlRGlmZihtaW4sIHZhbClcbiAgICBkbWF4ID0gZ2V0QW5nbGVEaWZmKG1heCwgdmFsKVxuICAgIGlmIChkbWluIDwgZG1heCkge1xuICAgICAgcmV0dXJuIG1pblxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbWF4XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROZWFyZXN0QW5nbGUoYXJyLCBhbmdsZSkge1xuICBsZXQgaSwgdGVtcCwgZGlmZiA9IE1hdGguUEkgKiAyLCB2YWx1ZVxuICBmb3IgKGkgPSAwOyBpIDwgYXJyLmxlbmd0aDtpKyspIHtcbiAgICB0ZW1wID0gZ2V0QW5nbGVEaWZmKGFycltpXSwgYW5nbGUpXG4gICAgaWYgKGRpZmYgPCB0ZW1wKSB7XG4gICAgICBkaWZmID0gdGVtcFxuICAgICAgdmFsdWUgPSBhcnJbaV1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHZhbHVlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVBbmdsZSh2YWwpIHtcbiAgd2hpbGUgKHZhbCA8IDApIHtcbiAgICB2YWwgKz0gMiAqIE1hdGguUElcbiAgfVxuICB3aGlsZSAodmFsID4gMiAqIE1hdGguUEkpIHtcbiAgICB2YWwgLT0gMiAqIE1hdGguUElcbiAgfVxuICByZXR1cm4gdmFsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oYW5nbGUsIGxlbmd0aCwgY2VudGVyKSB7XG4gIGNlbnRlciA9IGNlbnRlciB8fCBuZXcgUG9pbnQoMCwgMClcbiAgcmV0dXJuIGNlbnRlci5hZGQobmV3IFBvaW50KGxlbmd0aCAqIE1hdGguY29zKGFuZ2xlKSwgbGVuZ3RoICogTWF0aC5zaW4oYW5nbGUpKSlcbn1cbiIsImltcG9ydCBQb2ludCBmcm9tICcuL2dlb21ldHJ5L3BvaW50J1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tICcuL2dlb21ldHJ5L3JlY3RhbmdsZSdcbmltcG9ydCB7XG4gIGdldFBvaW50T25MaW5lQnlMZW5naHQsXG4gIGRpcmVjdENyb3NzaW5nLFxuICBib3VuZFRvTGluZVxufSBmcm9tICcuL2dlb21ldHJ5L2JvdW5kcydcblxuaW1wb3J0IHtcbiAgZ2V0QW5nbGUsXG4gIG5vcm1hbGl6ZUFuZ2xlLFxuICBib3VuZEFuZ2xlLFxuICBnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW1cbn0gZnJvbSAnLi9nZW9tZXRyeS9hbmdsZXMnXG5cbmV4cG9ydCBjbGFzcyBCb3VuZCB7XG4gIGNvbnN0cnVjdG9yICgpIHt9XG5cbiAgYm91bmQocG9pbnQsIF9zaXplKSB7XG4gICAgcmV0dXJuIHBvaW50XG4gIH1cblxuICByZWZyZXNoICgpIHt9XG5cbiAgc3RhdGljIGJvdW5kaW5nKCkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IHRoaXMoLi4uYXJndW1lbnRzKVxuICAgIHJldHVybiBpbnN0YW5jZS5ib3VuZC5iaW5kKGluc3RhbmNlKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvUmVjdGFuZ2xlIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3RvcihyZWN0YW5nbGUpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5yZWN0YW5nbGUgPSByZWN0YW5nbGVcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgY2FsY1BvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIGNvbnN0IHJlY3RQMiA9IHRoaXMucmVjdGFuZ2xlLmdldFAzKClcblxuICAgIGlmICh0aGlzLnJlY3RhbmdsZS5wb3NpdGlvbi54ID4gY2FsY1BvaW50LngpIHtcbiAgICAgIChjYWxjUG9pbnQueCA9IHRoaXMucmVjdGFuZ2xlLnBvc2l0aW9uLngpXG4gICAgfVxuICAgIGlmICh0aGlzLnJlY3RhbmdsZS5wb3NpdGlvbi55ID4gY2FsY1BvaW50LnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gdGhpcy5yZWN0YW5nbGUucG9zaXRpb24ueVxuICAgIH1cbiAgICBpZiAocmVjdFAyLnggPCBjYWxjUG9pbnQueCArIHNpemUueCkge1xuICAgICAgY2FsY1BvaW50LnggPSByZWN0UDIueCAtIHNpemUueFxuICAgIH1cbiAgICBpZiAocmVjdFAyLnkgPCBjYWxjUG9pbnQueSArIHNpemUueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSByZWN0UDIueSAtIHNpemUueVxuICAgIH1cblxuICAgIHJldHVybiBjYWxjUG9pbnRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb0VsZW1lbnQgZXh0ZW5kcyBCb3VuZFRvUmVjdGFuZ2xlIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29udGFpbmVyKSB7XG4gICAgc3VwZXIoUmVjdGFuZ2xlLmZyb21FbGVtZW50KGVsZW1lbnQsIGNvbnRhaW5lcikpXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyXG4gIH1cblxuICByZWZyZXNoICgpIHtcbiAgICB0aGlzLnJlY3RhbmdsZSA9IFJlY3RhbmdsZS5mcm9tRWxlbWVudCh0aGlzLmVsZW1lbnQsIHRoaXMuY29udGFpbmVyKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvTGluZVggZXh0ZW5kcyBCb3VuZCB7XG4gIGNvbnN0cnVjdG9yKHgsIHN0YXJ0WSwgZW5kWSkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnggPSB4XG4gICAgdGhpcy5zdGFydFkgPSBzdGFydFlcbiAgICB0aGlzLmVuZFkgPSBlbmRZXG4gIH1cblxuICBib3VuZChwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IGNhbGNQb2ludCA9IHBvaW50LmNsb25lKClcblxuICAgIGNhbGNQb2ludC54ID0gdGhpcy54XG4gICAgaWYgKHRoaXMuc3RhcnRZID4gY2FsY1BvaW50LnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gdGhpcy5zdGFydFlcbiAgICB9XG4gICAgaWYgKHRoaXMuZW5kWSA8IGNhbGNQb2ludC55ICsgc2l6ZS55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHRoaXMuZW5kWSAtIHNpemUueVxuICAgIH1cblxuICAgIHJldHVybiBjYWxjUG9pbnRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb0xpbmVZIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3Rvcih5LCBzdGFydFgsIGVuZFgpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy55ID0geVxuICAgIHRoaXMuc3RhcnRYID0gc3RhcnRYXG4gICAgdGhpcy5lbmRYID0gZW5kWFxuICB9XG5cbiAgYm91bmQocG9pbnQsIHNpemUpIHtcbiAgICBjb25zdCBjYWxjUG9pbnQgPSBwb2ludC5jbG9uZSgpXG4gICAgY2FsY1BvaW50LnkgPSB0aGlzLnlcbiAgICBpZiAodGhpcy5zdGFydFggPiBjYWxjUG9pbnQueCkge1xuICAgICAgY2FsY1BvaW50LnggPSB0aGlzLnN0YXJ0WFxuICAgIH1cbiAgICBpZiAodGhpcy5lbmRYIDwgY2FsY1BvaW50LnggKyBzaXplLngpIHtcbiAgICAgIGNhbGNQb2ludC54ID0gdGhpcy5lbmRYIC0gc2l6ZS54XG4gICAgfVxuICAgIHJldHVybiBjYWxjUG9pbnRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb0xpbmUgZXh0ZW5kcyBCb3VuZCB7XG4gIGNvbnN0cnVjdG9yKHN0YXJ0UG9pbnQsIGVuZFBvaW50KSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuc3RhcnRQb2ludCA9IHN0YXJ0UG9pbnRcbiAgICB0aGlzLmVuZFBvaW50ID0gZW5kUG9pbnRcbiAgICBjb25zdCBhbHBoYSA9IE1hdGguYXRhbjIoZW5kUG9pbnQueSAtIHN0YXJ0UG9pbnQueSwgZW5kUG9pbnQueCAtIHN0YXJ0UG9pbnQueClcbiAgICBjb25zdCBiZXRhID0gYWxwaGEgKyBNYXRoLlBJIC8gMlxuICAgIHRoaXMuc29tZUsgPSAxMFxuICAgIHRoaXMuY29zQmV0YSA9IE1hdGguY29zKGJldGEpXG4gICAgdGhpcy5zaW5CZXRhID0gTWF0aC5zaW4oYmV0YSlcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgcG9pbnQyID0gbmV3IFBvaW50KFxuICAgICAgcG9pbnQueCArIHRoaXMuc29tZUsgKiB0aGlzLmNvc0JldGEsXG4gICAgICBwb2ludC55ICsgdGhpcy5zb21lSyAqIHRoaXMuc2luQmV0YVxuICAgIClcblxuICAgIGNvbnN0IG5ld0VuZFBvaW50ID0gZ2V0UG9pbnRPbkxpbmVCeUxlbmdodCh0aGlzLmVuZFBvaW50LCB0aGlzLnN0YXJ0UG9pbnQsIHNpemUueClcbiAgICBjb25zdCBwb2ludENyb3NzaW5nID0gZGlyZWN0Q3Jvc3NpbmcodGhpcy5zdGFydFBvaW50LCB0aGlzLmVuZFBvaW50LCBwb2ludCwgcG9pbnQyKVxuXG4gICAgcmV0dXJuIGJvdW5kVG9MaW5lKHRoaXMuc3RhcnRQb2ludCwgbmV3RW5kUG9pbnQsIHBvaW50Q3Jvc3NpbmcpXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9DaXJjbGUgZXh0ZW5kcyBCb3VuZCB7XG4gIGNvbnN0cnVjdG9yKGNlbnRlciwgcmFkaXVzKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuY2VudGVyID0gY2VudGVyXG4gICAgdGhpcy5yYWRpdXMgPSByYWRpdXNcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBfc2l6ZSkge1xuICAgIHJldHVybiBnZXRQb2ludE9uTGluZUJ5TGVuZ2h0KHRoaXMuY2VudGVyLCBwb2ludCwgdGhpcy5yYWRpdXMpXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9BcmMgZXh0ZW5kcyBCb3VuZFRvQ2lyY2xlIHtcbiAgY29uc3RydWN0b3IoY2VudGVyLCByYWRpdXMsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlKSB7XG4gICAgc3VwZXIoY2VudGVyLCByYWRpdXMpXG4gICAgdGhpcy5fc3RhcnRBbmdsZSA9IHN0YXJ0QW5nbGVcbiAgICB0aGlzLl9lbmRBbmdsZSA9IGVuZEFuZ2xlXG4gIH1cblxuICBzdGFydEFuZ2xlKCkge1xuICAgIHJldHVybiB0eXBlb2YgdGhpcy5fc3RhcnRBbmdsZSA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMuX3N0YXJ0QW5nbGUoKSA6IHRoaXMuX3N0YXJ0QW5nbGVcbiAgfVxuXG4gIGVuZEFuZ2xlKCkge1xuICAgIHJldHVybiB0eXBlb2YgdGhpcy5fZW5kQW5nbGUgPT09ICdmdW5jdGlvbicgPyB0aGlzLl9lbmRBbmdsZSgpIDogdGhpcy5fZW5kQW5nbGVcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBfc2l6ZSkge1xuICAgIGxldCBhbmdsZSA9IGdldEFuZ2xlKHRoaXMuY2VudGVyLCBwb2ludClcbiAgICBhbmdsZSA9IG5vcm1hbGl6ZUFuZ2xlKGFuZ2xlKVxuICAgIGFuZ2xlID0gYm91bmRBbmdsZSh0aGlzLnN0YXJ0QW5nbGUoKSwgdGhpcy5lbmRBbmdsZSgpLCBhbmdsZSlcbiAgICByZXR1cm4gZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKGFuZ2xlLCB0aGlzLnJhZGl1cywgdGhpcy5jZW50ZXIpXG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGFycmF5LCB2YWwpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChhcnJheVtpXSA9PT0gdmFsKSB7XG4gICAgICBhcnJheS5zcGxpY2UoaSwgMSlcbiAgICAgIGktLVxuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyYXlcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJhbmdlKHN0YXJ0LCBzdG9wLCBzdGVwKSB7XG4gIGNvbnN0IHJlc3VsdCA9IFtdXG4gIGlmICh0eXBlb2Ygc3RvcCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBzdG9wID0gc3RhcnRcbiAgICBzdGFydCA9IDBcbiAgfVxuICBpZiAodHlwZW9mIHN0ZXAgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgc3RlcCA9IDFcbiAgfVxuICBpZiAoKHN0ZXAgPiAwICYmIHN0YXJ0ID49IHN0b3ApIHx8IChzdGVwIDwgMCAmJiBzdGFydCA8PSBzdG9wKSkge1xuICAgIHJldHVybiBbXVxuICB9XG4gIGZvciAobGV0IGkgPSBzdGFydDsgc3RlcCA+IDAgPyBpIDwgc3RvcCA6IGkgPiBzdG9wOyBpICs9IHN0ZXApIHtcbiAgICByZXN1bHQucHVzaChpKVxuICB9XG4gIHJldHVybiByZXN1bHRcbn1cbiIsImltcG9ydCBQb2ludCBmcm9tICcuL2dlb21ldHJ5L3BvaW50J1xuaW1wb3J0IHsgYWRkUG9pbnRUb0JvdW5kUG9pbnRzIH0gZnJvbSAnLi9nZW9tZXRyeS9ib3VuZHMnXG5cbmltcG9ydCB7XG4gIGluZGV4T2ZOZWFyZXN0UG9pbnQsXG4gIGdldERpc3RhbmNlXG59IGZyb20gJy4vZ2VvbWV0cnkvZGlzdGFuY2VzJ1xuXG5jbGFzcyBCYXNpY1N0cmF0ZWd5IHtcbiAgY29uc3RydWN0b3IocmVjdGFuZ2xlLCBvcHRpb25zPXt9KSB7XG4gICAgdGhpcy5yZWN0YW5nbGUgPSByZWN0YW5nbGVcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zXG4gIH1cblxuICBnZXQgYm91bmRSZWN0ICgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMucmVjdGFuZ2xlID09PSAnZnVuY3Rpb24nID8gdGhpcy5yZWN0YW5nbGUoKSA6IHRoaXMucmVjdGFuZ2xlXG4gIH1cbn1cblxuY2xhc3MgTm90Q3Jvc3NpbmdTdHJhdGVneSBleHRlbmRzIEJhc2ljU3RyYXRlZ3kge1xuICBwb3NpdGlvbmluZyAocmVjdGFuZ2xlTGlzdCwgaW5kZXhlc09mTmV3cykge1xuICAgIGNvbnN0IHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMgPSByZWN0YW5nbGVMaXN0LnJlZHVjZSgoaW5kZXhlcywgX3JlY3QsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoaW5kZXhlc09mTmV3cy5pbmRleE9mKGluZGV4KSA9PT0gLTEpIHtcbiAgICAgICAgaW5kZXhlcy5wdXNoKGluZGV4KVxuICAgICAgfVxuICAgICAgcmV0dXJuIGluZGV4ZXNcbiAgICB9LCBbXSlcblxuICAgIGluZGV4ZXNPZk5ld3MuZm9yRWFjaCgoaW5kZXgpID0+IHtcbiAgICAgIGxldCByZWN0ID0gcmVjdGFuZ2xlTGlzdFtpbmRleF1cbiAgICAgIGxldCByZW1vdmFibGUgPSBmYWxzZVxuXG4gICAgICBzdGF0aWNSZWN0YW5nbGVJbmRleGVzLmZvckVhY2goKGluZGV4T2ZTdGF0aWMpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhdGljUmVjdCA9IHJlY3RhbmdsZUxpc3RbaW5kZXhPZlN0YXRpY11cbiAgICAgICAgcmVjdCA9IHN0YXRpY1JlY3QubW92ZVRvQm91bmQocmVjdClcbiAgICAgIH0pXG5cbiAgICAgIHJlbW92YWJsZSA9IHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMuc29tZSgoaW5kZXhPZlN0YXRpYykgPT4ge1xuICAgICAgICBjb25zdCBzdGF0aWNSZWN0ID0gcmVjdGFuZ2xlTGlzdFtpbmRleE9mU3RhdGljXVxuICAgICAgICByZXR1cm4gICEhc3RhdGljUmVjdC5hbmQocmVjdClcbiAgICAgIH0pIHx8IHJlY3QuYW5kKHRoaXMuYm91bmRSZWN0KS5nZXRTcXVhcmUoKSAhPT0gcmVjdC5nZXRTcXVhcmUoKVxuXG4gICAgICBpZiAocmVtb3ZhYmxlKSB7XG4gICAgICAgIHJlY3QucmVtb3ZhYmxlID0gdHJ1ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdGljUmVjdGFuZ2xlSW5kZXhlcy5wdXNoKGluZGV4KVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHJlY3RhbmdsZUxpc3RcbiAgfVxuXG4gIHNvcnRpbmcob2RsRHJhZ2dhYmxlc0xpc3QsIG5ld0RyYWdnYWJsZXMsIGluZGV4T2ZOZXdzKSB7XG4gICAgY29uc3QgZHJhZ2dhYmxlcyA9IG9kbERyYWdnYWJsZXNMaXN0LmNvbmNhdChuZXdEcmFnZ2FibGVzKVxuICAgIG5ld0RyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBpbmRleE9mTmV3cy5wdXNoKGRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpKVxuICAgIH0pXG4gICAgcmV0dXJuIGRyYWdnYWJsZXNcbiAgfVxufVxuXG5jbGFzcyBGbG9hdExlZnRTdHJhdGVneSBleHRlbmRzIEJhc2ljU3RyYXRlZ3kge1xuICBjb25zdHJ1Y3RvcihyZWN0YW5nbGUsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcihyZWN0YW5nbGUsIG9wdGlvbnMpXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICByZW1vdmFibGU6IHRydWVcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGhpcy5yYWRpdXMgPSBvcHRpb25zLnJhZGl1cyB8fCA4MFxuXG4gICAgdGhpcy5wYWRkaW5nVG9wTGVmdCA9IG9wdGlvbnMucGFkZGluZ1RvcExlZnQgfHwgbmV3IFBvaW50KDAsIDApXG4gICAgdGhpcy5wYWRkaW5nQm90dG9tUmlnaHQgPSBvcHRpb25zLnBhZGRpbmdCb3R0b21SaWdodCB8fCBuZXcgUG9pbnQoMCwgMClcbiAgICB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyA9IG9wdGlvbnMueUdhcEJldHdlZW5EcmFnZ2FibGVzIHx8IDBcblxuICAgIHRoaXMuZ2V0RGlzdGFuY2UgPSBvcHRpb25zLmdldERpc3RhbmNlIHx8IGdldERpc3RhbmNlXG4gICAgdGhpcy5nZXRQb3NpdGlvbiA9IG9wdGlvbnMuZ2V0UG9zaXRpb24gfHwgKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5wb3NpdGlvbilcbiAgfVxuXG4gIHBvc2l0aW9uaW5nKHJlY3RhbmdsZUxpc3QsIF9pbmRleGVzT2ZOZXdzKSB7XG4gICAgY29uc3QgYm91bmRSZWN0ID0gdGhpcy5ib3VuZFJlY3RcbiAgICBjb25zdCByZWN0UDIgPSBib3VuZFJlY3QuZ2V0UDIoKVxuICAgIGxldCBib3VuZGFyeVBvaW50cyA9IFtib3VuZFJlY3QucG9zaXRpb25dXG5cbiAgICByZWN0YW5nbGVMaXN0LmZvckVhY2goKHJlY3QsIHJlY3RJbmRleCkgPT4ge1xuICAgICAgbGV0IHBvc2l0aW9uLCBpc1ZhbGlkID0gZmFsc2VcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm91bmRhcnlQb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcG9zaXRpb24gPSBuZXcgUG9pbnQoXG4gICAgICAgICAgYm91bmRhcnlQb2ludHNbaV0ueCArIHRoaXMucGFkZGluZ1RvcExlZnQueCxcbiAgICAgICAgICBpID4gMCA/IChib3VuZGFyeVBvaW50c1tpIC0gMV0ueSArIHRoaXMueUdhcEJldHdlZW5EcmFnZ2FibGVzKSA6IChib3VuZFJlY3QucG9zaXRpb24ueSArIHRoaXMucGFkZGluZ1RvcExlZnQueSlcbiAgICAgICAgKVxuXG4gICAgICAgIGlzVmFsaWQgPSAocG9zaXRpb24ueCArIHJlY3Quc2l6ZS54IDwgcmVjdFAyLngpXG5cbiAgICAgICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICBwb3NpdGlvbiA9IG5ldyBQb2ludChcbiAgICAgICAgICBib3VuZFJlY3QucG9zaXRpb24ueCArIHRoaXMucGFkZGluZ1RvcExlZnQueCxcbiAgICAgICAgICBib3VuZGFyeVBvaW50c1tib3VuZGFyeVBvaW50cy5sZW5ndGggLSAxXS55ICsgKHJlY3RJbmRleCA+IDAgPyB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyA6IHRoaXMucGFkZGluZ1RvcExlZnQueSlcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICByZWN0LnBvc2l0aW9uID0gcG9zaXRpb25cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucmVtb3ZhYmxlICYmIHJlY3QuZ2V0UDMoKS55ID4gYm91bmRSZWN0LmdldFAzKCkueSkge1xuICAgICAgICByZWN0LnJlbW92YWJsZSA9IHRydWVcbiAgICAgIH1cblxuICAgICAgYm91bmRhcnlQb2ludHMgPSBhZGRQb2ludFRvQm91bmRQb2ludHMoYm91bmRhcnlQb2ludHMsIHJlY3QuZ2V0UDMoKS5hZGQodGhpcy5wYWRkaW5nQm90dG9tUmlnaHQpKVxuICAgIH0pXG4gICAgcmV0dXJuIHJlY3RhbmdsZUxpc3RcbiAgfVxuXG4gIHNvcnRpbmcob2RsRHJhZ2dhYmxlc0xpc3QsIG5ld0RyYWdnYWJsZXMsIGluZGV4T2ZOZXdzKSB7XG4gICAgY29uc3QgbmV3TGlzdCA9IG9kbERyYWdnYWJsZXNMaXN0LmNvbmNhdCgpXG4gICAgY29uc3QgbGlzdE9sZFBvc2l0aW9uID0gb2RsRHJhZ2dhYmxlc0xpc3QubWFwKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5nZXRQb3NpdGlvbigpKVxuICAgIG5ld0RyYWdnYWJsZXMuZm9yRWFjaCgobmV3RHJhZ2dhYmxlKSA9PiB7XG4gICAgICBsZXQgaW5kZXggPSBpbmRleE9mTmVhcmVzdFBvaW50KGxpc3RPbGRQb3NpdGlvbiwgdGhpcy5nZXRQb3NpdGlvbihuZXdEcmFnZ2FibGUpLCB0aGlzLnJhZGl1cywgdGhpcy5nZXREaXN0YW5jZSlcbiAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgaW5kZXggPSBuZXdMaXN0Lmxlbmd0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5kZXggPSBuZXdMaXN0LmluZGV4T2Yob2RsRHJhZ2dhYmxlc0xpc3RbaW5kZXhdKVxuICAgICAgfVxuICAgICAgbmV3TGlzdC5zcGxpY2UoaW5kZXgsIDAsIG5ld0RyYWdnYWJsZSlcbiAgICB9KVxuICAgIG5ld0RyYWdnYWJsZXMuZm9yRWFjaCgobmV3RHJhZ2dhYmxlKSA9PiB7XG4gICAgICBpbmRleE9mTmV3cy5wdXNoKG5ld0xpc3QuaW5kZXhPZihuZXdEcmFnZ2FibGUpKVxuICAgIH0pXG4gICAgcmV0dXJuIG5ld0xpc3RcbiAgfVxufVxuXG5jbGFzcyBGbG9hdFJpZ2h0U3RyYXRlZ3kgZXh0ZW5kcyBGbG9hdExlZnRTdHJhdGVneSB7XG4gIGNvbnN0cnVjdG9yKHJlY3RhbmdsZSwgb3B0aW9ucz17fSkge1xuICAgIHN1cGVyKHJlY3RhbmdsZSwgb3B0aW9ucylcblxuICAgIHRoaXMucGFkZGluZ1RvcFJpZ2h0ID0gb3B0aW9ucy5wYWRkaW5nVG9wUmlnaHQgfHwgbmV3IFBvaW50KDUsIDUpXG4gICAgdGhpcy5wYWRkaW5nQm90dG9tTGVmdCA9IG9wdGlvbnMucGFkZGluZ0JvdHRvbUxlZnQgfHwgbmV3IFBvaW50KDAsIDApXG4gICAgdGhpcy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgPSBvcHRpb25zLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyB8fCAwXG5cbiAgICB0aGlzLnBhZGRpbmdCb3R0b21OZWdMZWZ0ID0gbmV3IFBvaW50KC10aGlzLnBhZGRpbmdCb3R0b21MZWZ0LngsIHRoaXMucGFkZGluZ0JvdHRvbUxlZnQueSlcbiAgfVxuXG4gIHBvc2l0aW9uaW5nKHJlY3RhbmdsZUxpc3QsIF9pbmRleGVzT2ZOZXdzKSB7XG4gICAgY29uc3QgYm91bmRSZWN0ID0gdGhpcy5ib3VuZFJlY3RcbiAgICBsZXQgYm91bmRhcnlQb2ludHMgPSBbYm91bmRSZWN0LmdldFAyKCldXG5cbiAgICByZWN0YW5nbGVMaXN0LmZvckVhY2goKHJlY3QsIHJlY3RJbmRleCkgPT4ge1xuICAgICAgbGV0IHBvc2l0aW9uLCBpc1ZhbGlkID0gZmFsc2VcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm91bmRhcnlQb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcG9zaXRpb24gPSBuZXcgUG9pbnQoXG4gICAgICAgICAgYm91bmRhcnlQb2ludHNbaV0ueCAtIHJlY3Quc2l6ZS54IC0gdGhpcy5wYWRkaW5nVG9wUmlnaHQueCxcbiAgICAgICAgICBpID4gMCA/IChib3VuZGFyeVBvaW50c1tpIC0gMV0ueSArIHRoaXMueUdhcEJldHdlZW5EcmFnZ2FibGVzKSA6IChib3VuZFJlY3QucG9zaXRpb24ueSArIHRoaXMucGFkZGluZ1RvcFJpZ2h0LnkpXG4gICAgICAgIClcblxuICAgICAgICBpc1ZhbGlkID0gKHBvc2l0aW9uLnggPiByZWN0LnBvc2l0aW9uLngpXG4gICAgICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICAgIHBvc2l0aW9uID0gbmV3IFBvaW50KFxuICAgICAgICAgIGJvdW5kUmVjdC5nZXRQMigpLnggIC0gcmVjdC5zaXplLnggLSB0aGlzLnBhZGRpbmdUb3BSaWdodC54LFxuICAgICAgICAgIGJvdW5kYXJ5UG9pbnRzW2JvdW5kYXJ5UG9pbnRzLmxlbmd0aCAtIDFdLnkgKyAocmVjdEluZGV4ID4gMCA/IHRoaXMueUdhcEJldHdlZW5EcmFnZ2FibGVzIDogdGhpcy5wYWRkaW5nVG9wUmlnaHQueSlcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgcmVjdC5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnJlbW92YWJsZSAmJiByZWN0LmdldFA0KCkueSA+IGJvdW5kUmVjdC5nZXRQNCgpLnkpIHtcbiAgICAgICAgcmVjdC5yZW1vdmFibGUgPSB0cnVlXG4gICAgICB9XG4gICAgICBib3VuZGFyeVBvaW50cyA9IGFkZFBvaW50VG9Cb3VuZFBvaW50cyhib3VuZGFyeVBvaW50cywgcmVjdC5nZXRQNCgpLmFkZCh0aGlzLnBhZGRpbmdCb3R0b21OZWdMZWZ0KSwgdHJ1ZSlcbiAgICB9KVxuICAgIHJldHVybiByZWN0YW5nbGVMaXN0XG4gIH1cbn1cblxuZXhwb3J0IHsgTm90Q3Jvc3NpbmdTdHJhdGVneSwgRmxvYXRMZWZ0U3RyYXRlZ3ksIEZsb2F0UmlnaHRTdHJhdGVneSB9XG4iLCJpbXBvcnQgcmFuZ2UgZnJvbSAnLi91dGlscy9yYW5nZS5qcydcbmltcG9ydCByZW1vdmVJdGVtIGZyb20gJy4vdXRpbHMvcmVtb3ZlLWFycmF5LWl0ZW0nXG5pbXBvcnQgZ2V0RGVmYXVsdENvbnRhaW5lciBmcm9tICcuL3V0aWxzL2dldC1kZWZhdWx0LWNvbnRhaW5lcidcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudEVtaXR0ZXInXG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gJy4vZ2VvbWV0cnkvcmVjdGFuZ2xlJ1xuaW1wb3J0IHsgdHJhbnNmb3JtZWRTcGFjZURpc3RhbmNlRmFjdG9yeSB9IGZyb20gJy4vZ2VvbWV0cnkvZGlzdGFuY2VzJ1xuaW1wb3J0IHsgc2NvcGVzLCBkZWZhdWx0U2NvcGUgfSBmcm9tICcuL3Njb3BlJ1xuXG5pbXBvcnQgeyBGbG9hdExlZnRTdHJhdGVneSB9IGZyb20gJy4vcG9zaXRpb25pbmcnXG5pbXBvcnQgeyBCb3VuZFRvRWxlbWVudCB9IGZyb20gJy4vYm91bmRpbmcnXG5cbmNvbnN0IGFkZFRvRGVmYXVsdFNjb3BlID0gZnVuY3Rpb24odGFyZ2V0KSB7XG4gIGRlZmF1bHRTY29wZS5hZGRUYXJnZXQodGFyZ2V0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXJnZXQgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBkcmFnZ2FibGVzLCBvcHRpb25zID0ge30pIHtcbiAgICBzdXBlcihvcHRpb25zKVxuICAgIGNvbnN0IHRhcmdldCA9IHRoaXNcblxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgdGltZUVuZDogMjAwLFxuICAgICAgdGltZUV4Y2FuZ2U6IDQwMFxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0aGlzLnBvc2l0aW9uaW5nU3RyYXRlZ3kgPSBvcHRpb25zLnN0cmF0ZWd5IHx8IG5ldyBGbG9hdExlZnRTdHJhdGVneShcbiAgICAgIHRoaXMuZ2V0UmVjdGFuZ2xlLmJpbmQodGhpcyksXG4gICAgICB7XG4gICAgICAgIHJhZGl1czogODAsXG4gICAgICAgIGdldERpc3RhbmNlOiB0cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5KHsgeDogMSwgeTogNCB9KSxcbiAgICAgICAgcmVtb3ZhYmxlOiB0cnVlXG4gICAgICB9XG4gICAgKVxuXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUudGFyZ2V0cy5wdXNoKHRhcmdldCkpXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gZHJhZ2dhYmxlc1xuXG4gICAgVGFyZ2V0LmVtaXR0ZXIuZW1pdCgndGFyZ2V0OmNyZWF0ZScsIHRoaXMpXG5cbiAgICB0aGlzLnN0YXJ0Qm91bmRpbmcoKVxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBzdGFydEJvdW5kaW5nKCkge1xuICAgIHRoaXMuYm91bmQgPSB0aGlzLm9wdGlvbnMuYm91bmQgfHwgQm91bmRUb0VsZW1lbnQuYm91bmRpbmcodGhpcy5lbGVtZW50KVxuICB9XG5cbiAgcG9zaXRpb25pbmcgKGRyYWdnYWJsZXMsIGluZGV4ZXNPZk5ldykge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uaW5nU3RyYXRlZ3kucG9zaXRpb25pbmcoZHJhZ2dhYmxlcywgaW5kZXhlc09mTmV3KVxuICB9XG5cbiAgc29ydGluZyAob2xkRHJhZ2dhYmxlcywgbmV3RHJhZ2dhYmxlcywgaW5kZXhPZk5ld3MpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbmluZ1N0cmF0ZWd5LnNvcnRpbmcob2xkRHJhZ2dhYmxlcywgbmV3RHJhZ2dhYmxlcywgaW5kZXhPZk5ld3MpXG4gIH1cblxuICBpbml0KCkge1xuICAgIGxldCByZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXdcblxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzID0gdGhpcy5kcmFnZ2FibGVzLmZpbHRlcigoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBsZXQgZWxlbWVudCA9IGRyYWdnYWJsZS5lbGVtZW50LnBhcmVudE5vZGVcbiAgICAgIHdoaWxlIChlbGVtZW50KSB7XG4gICAgICAgIGlmIChlbGVtZW50ID09PSB0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGVcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH0pXG5cbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMubGVuZ3RoKSB7XG4gICAgICBpbmRleGVzT2ZOZXcgPSByYW5nZSh0aGlzLmlubmVyRHJhZ2dhYmxlcy5sZW5ndGgpXG4gICAgICByZWN0YW5nbGVzID0gdGhpcy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgICB9KSwgaW5kZXhlc09mTmV3KVxuICAgICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXcpXG4gICAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHRoaXMuZW1pdCgndGFyZ2V0OmFkZCcsIGRyYWdnYWJsZSkpXG4gICAgfVxuICB9XG5cbiAgZ2V0UmVjdGFuZ2xlKCkge1xuICAgIHJldHVybiBSZWN0YW5nbGUuZnJvbUVsZW1lbnQoXG4gICAgICB0aGlzLmVsZW1lbnQsXG4gICAgICB0aGlzLmNvbnRhaW5lcixcbiAgICAgIHRoaXMub3B0aW9ucy5pc0NvbnRlbnRCb3hTaXplLFxuICAgICAgdHJ1ZVxuICAgIClcbiAgfVxuXG4gIGNhdGNoRHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuY2F0Y2hEcmFnZ2FibGUpIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuY2F0Y2hEcmFnZ2FibGUodGhpcywgZHJhZ2dhYmxlKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0YXJnZXRSZWN0YW5nbGUgPSB0aGlzLmdldFJlY3RhbmdsZSgpXG4gICAgICBjb25zdCBkcmFnZ2FibGVTcXVhcmUgPSBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKCkuZ2V0U3F1YXJlKClcblxuICAgICAgcmV0dXJuIGRyYWdnYWJsZVNxdWFyZSA8IHRhcmdldFJlY3RhbmdsZS5nZXRTcXVhcmUoKVxuICAgICAgICAgICAgICAmJiB0YXJnZXRSZWN0YW5nbGUuaW5jbHVkZVBvaW50KGRyYWdnYWJsZS5nZXRDZW50ZXIoKSlcbiAgICB9XG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRSZWN0YW5nbGUoKS5wb3NpdGlvblxuICB9XG5cbiAgZ2V0U2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRSZWN0YW5nbGUoKS5zaXplXG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHNjb3Blcy5mb3JFYWNoKChzY29wZSkgPT4gcmVtb3ZlSXRlbShzY29wZS50YXJnZXRzLCB0aGlzKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgW10pXG4gICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBbXSwgMClcbiAgfVxuXG4gIG9uRW5kKGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IG5ld0RyYWdnYWJsZXNJbmRleCA9IFtdXG5cbiAgICBpZiAodGhpcy5nZXRSZWN0YW5nbGUoKS5pbmNsdWRlUG9pbnQoZHJhZ2dhYmxlLmdldENlbnRlcigpKSkge1xuICAgICAgZHJhZ2dhYmxlLnBvc2l0aW9uID0gdGhpcy5ib3VuZChkcmFnZ2FibGUucG9zaXRpb24sIGRyYWdnYWJsZS5nZXRTaXplKCkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHRoaXMuZW1pdCgndGFyZ2V0OmJlZm9yZUFkZCcsIGRyYWdnYWJsZSlcblxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzID0gdGhpcy5zb3J0aW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLCBbZHJhZ2dhYmxlXSwgbmV3RHJhZ2dhYmxlc0luZGV4KVxuICAgIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgfSksIG5ld0RyYWdnYWJsZXNJbmRleClcblxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgbmV3RHJhZ2dhYmxlc0luZGV4KVxuICAgIGlmICh0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkgIT09IC0xKSB7XG4gICAgICB0aGlzLmFkZFJlbW92ZU9uTW92ZShkcmFnZ2FibGUpXG4gICAgfVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBzZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXcsIHRpbWUpIHtcbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5zbGljZSgwKS5mb3JFYWNoKChkcmFnZ2FibGUsIGkpID0+IHtcbiAgICAgIGNvbnN0IHJlY3QgPSByZWN0YW5nbGVzW2ldLFxuICAgICAgICB0aW1lRW5kID0gdGltZSB8fCB0aW1lID09PSAwID8gdGltZSA6IGluZGV4ZXNPZk5ldy5pbmRleE9mKGkpICE9PSAtMSA/IHRoaXMub3B0aW9ucy50aW1lRW5kIDogdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlXG5cbiAgICAgIGlmIChyZWN0LnJlbW92YWJsZSkge1xuICAgICAgICBkcmFnZ2FibGUubW92ZShkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uLCB0aW1lRW5kLCB0cnVlLCB0cnVlKVxuICAgICAgICByZW1vdmVJdGVtKHRoaXMuaW5uZXJEcmFnZ2FibGVzLCBkcmFnZ2FibGUpXG4gICAgICAgIHRoaXMuZW1pdCgndGFyZ2V0OnJlbW92ZScsIGRyYWdnYWJsZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRyYWdnYWJsZS5tb3ZlKHJlY3QucG9zaXRpb24sIHRpbWVFbmQsIHRydWUsIHRydWUpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGFkZChkcmFnZ2FibGUsIHRpbWUpIHtcbiAgICBjb25zdCBuZXdEcmFnZ2FibGVzSW5kZXggPSB0aGlzLmlubmVyRHJhZ2dhYmxlcy5sZW5ndGhcblxuICAgIHRoaXMuZW1pdCgndGFyZ2V0OmJlZm9yZUFkZCcsIGRyYWdnYWJsZSlcblxuICAgIHRoaXMucHVzaElubmVyRHJhZ2dhYmxlKGRyYWdnYWJsZSlcbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBuZXdEcmFnZ2FibGVzSW5kZXgsIGRyYWdnYWJsZSlcblxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgW25ld0RyYWdnYWJsZXNJbmRleF0sIHRpbWUgfHwgMClcbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMSkge1xuICAgICAgdGhpcy5hZGRSZW1vdmVPbk1vdmUoZHJhZ2dhYmxlKVxuICAgIH1cbiAgfVxuXG4gIHB1c2hJbm5lckRyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpPT09LTEpIHtcbiAgICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxuICAgIH1cbiAgfVxuXG4gIGFkZFJlbW92ZU9uTW92ZShkcmFnZ2FibGUpIHtcbiAgICBkcmFnZ2FibGUub24oJ2RyYWc6bW92ZScsIHRoaXMucmVtb3ZlSGFuZGxlciA9ICgpID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlKGRyYWdnYWJsZSlcbiAgICB9KVxuXG4gICAgdGhpcy5lbWl0KCd0YXJnZXQ6YWRkJywgZHJhZ2dhYmxlKVxuICB9XG5cbiAgcmVtb3ZlKGRyYWdnYWJsZSkge1xuICAgIGRyYWdnYWJsZS51bnN1YnNjcmliZSgnZHJhZzptb3ZlJywgdGhpcy5yZW1vdmVIYW5kbGVyKVxuXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSlcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5zcGxpY2UoaW5kZXgsIDEpXG5cbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBbXSlcblxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgW10pXG4gICAgdGhpcy5lbWl0KCd0YXJnZXQ6cmVtb3ZlJywgZHJhZ2dhYmxlKVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUubW92ZShkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uLCAwLCB0cnVlLCB0cnVlKVxuICAgICAgdGhpcy5lbWl0KCd0YXJnZXQ6cmVtb3ZlJywgZHJhZ2dhYmxlKVxuICAgIH0pXG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMgPSBbXVxuICB9XG5cbiAgZ2V0U29ydGVkRHJhZ2dhYmxlcygpIHtcbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5zbGljZSgpXG4gIH1cblxuICBnZXQgY29udGFpbmVyKCkge1xuICAgIHJldHVybiAodGhpcy5fY29udGFpbmVyID0gdGhpcy5fY29udGFpbmVyIHx8IHRoaXMub3B0aW9ucy5jb250YWluZXIgfHwgdGhpcy5vcHRpb25zLnBhcmVudCB8fCBnZXREZWZhdWx0Q29udGFpbmVyKHRoaXMuZWxlbWVudCkpXG4gIH1cbn1cblxuVGFyZ2V0LmVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKClcblRhcmdldC5lbWl0dGVyLm9uKCd0YXJnZXQ6Y3JlYXRlJywgYWRkVG9EZWZhdWx0U2NvcGUpXG4iLCJpbXBvcnQgcmVtb3ZlSXRlbSBmcm9tICcuL3V0aWxzL3JlbW92ZS1hcnJheS1pdGVtJ1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50RW1pdHRlcidcbmltcG9ydCBEcmFnZ2FibGUgZnJvbSAnLi9kcmFnZ2FibGUnXG5pbXBvcnQgVGFyZ2V0IGZyb20gJy4vdGFyZ2V0J1xuXG5jb25zdCBzY29wZXMgPSBbXVxuXG5jbGFzcyBTY29wZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKGRyYWdnYWJsZXMsIHRhcmdldHMsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcihvcHRpb25zKVxuICAgIHNjb3Blcy5mb3JFYWNoKChzY29wZSkgPT4ge1xuICAgICAgaWYgKGRyYWdnYWJsZXMpIHtcbiAgICAgICAgZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgICAgICByZW1vdmVJdGVtKHNjb3BlLmRyYWdnYWJsZXMsIGRyYWdnYWJsZSlcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgaWYgKHRhcmdldHMpIHtcbiAgICAgICAgdGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHtcbiAgICAgICAgICByZW1vdmVJdGVtKHNjb3BlLnRhcmdldHMsIHRhcmdldClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gZHJhZ2dhYmxlcyB8fCBbXVxuICAgIHRoaXMudGFyZ2V0cyA9IHRhcmdldHMgfHwgW11cbiAgICBzY29wZXMucHVzaCh0aGlzKVxuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgIHRpbWVFbmQ6IChvcHRpb25zLnRpbWVFbmQpIHx8IDQwMFxuICAgIH1cblxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5kcmFnRW5kQWN0aW9uID0gKCkgPT4gdGhpcy5vbkVuZChkcmFnZ2FibGUpXG4gICAgfSlcbiAgfVxuXG4gIGFkZERyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMucHVzaChkcmFnZ2FibGUpXG4gICAgZHJhZ2dhYmxlLmRyYWdFbmRBY3Rpb24gPSAoKSA9PiB0aGlzLm9uRW5kKGRyYWdnYWJsZSlcbiAgfVxuXG4gIGFkZFRhcmdldCh0YXJnZXQpIHtcbiAgICB0aGlzLnRhcmdldHMucHVzaCh0YXJnZXQpXG4gIH1cblxuICBvbkVuZChkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBzaG90VGFyZ2V0cyA9IHRoaXMudGFyZ2V0cy5maWx0ZXIoKHRhcmdldCkgPT4ge1xuICAgICAgcmV0dXJuIHRhcmdldC5kcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTFcbiAgICB9KS5maWx0ZXIoKHRhcmdldCkgPT4ge1xuICAgICAgcmV0dXJuIHRhcmdldC5jYXRjaERyYWdnYWJsZShkcmFnZ2FibGUpXG4gICAgfSkuc29ydCgoYSwgYikgPT4ge1xuICAgICAgcmV0dXJuIGEuZ2V0UmVjdGFuZ2xlKCkuZ2V0U3F1YXJlKCkgLSBiLmdldFJlY3RhbmdsZSgpLmdldFNxdWFyZSgpXG4gICAgfSlcblxuICAgIGlmIChzaG90VGFyZ2V0cy5sZW5ndGgpIHtcbiAgICAgIHNob3RUYXJnZXRzWzBdLm9uRW5kKGRyYWdnYWJsZSlcbiAgICB9IGVsc2UgaWYgKGRyYWdnYWJsZS50YXJnZXRzLmxlbmd0aCkge1xuICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKGRyYWdnYWJsZS5pbml0aWFsUG9zaXRpb24sIHRoaXMub3B0aW9ucy50aW1lRW5kKVxuICAgIH1cblxuICAgIHRoaXMuZW1pdCgnc2NvcGU6Y2hhbmdlJylcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMudGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHRhcmdldC5yZXNldCgpKVxuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucmVmcmVzaCgpKVxuICAgIHRoaXMudGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHRhcmdldC5yZWZyZXNoKCkpXG4gIH1cblxuICBnZXQgcG9zaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnRhcmdldHMubWFwKCh0YXJnZXQpID0+IHtcbiAgICAgIHJldHVybiB0YXJnZXQuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB0aGlzLmRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpKVxuICAgIH0pXG4gIH1cblxuICBzZXQgcG9zaXRpb25zKHBvc2l0aW9ucykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSAnd3JvbmcgYXJyYXkgbGVuZ3RoJ1xuICAgIGlmIChwb3NpdGlvbnMubGVuZ3RoID09PSB0aGlzLnRhcmdldHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB0YXJnZXQucmVzZXQoKSlcblxuICAgICAgcG9zaXRpb25zLmZvckVhY2goKHRhcmdldEluZGV4ZXMsIGkpID0+IHtcbiAgICAgICAgdGFyZ2V0SW5kZXhlcy5mb3JFYWNoKChpbmRleCkgPT4ge1xuICAgICAgICAgIHRoaXMudGFyZ2V0c1tpXS5hZGQodGhpcy5kcmFnZ2FibGVzW2luZGV4XSlcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG1lc3NhZ2VcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgZGVmYXVsdFNjb3BlID0gbmV3IFNjb3BlKClcblxuZnVuY3Rpb24gc2NvcGUoZm4pIHtcbiAgY29uc3QgY3VycmVudFNjb3BlID0gbmV3IFNjb3BlKClcblxuICBjb25zdCBhZGREcmFnZ2FibGVUb1Njb3BlID0gZnVuY3Rpb24oZHJhZ2dhYmxlKSB7XG4gICAgY3VycmVudFNjb3BlLmFkZERyYWdnYWJsZShkcmFnZ2FibGUpXG4gICAgRHJhZ2dhYmxlLmVtaXR0ZXIuaW50ZXJydXB0KClcbiAgfVxuXG4gIGNvbnN0IGFkZFRhcmdldFRvU2NvcGUgPSBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICBjdXJyZW50U2NvcGUuYWRkVGFyZ2V0KHRhcmdldClcbiAgICBEcmFnZ2FibGUuZW1pdHRlci5pbnRlcnJ1cHQoKVxuICB9XG5cbiAgRHJhZ2dhYmxlLmVtaXR0ZXIucHJlcGVuZE9uKCdkcmFnZ2FibGU6Y3JlYXRlJywgYWRkRHJhZ2dhYmxlVG9TY29wZSlcbiAgVGFyZ2V0LmVtaXR0ZXIucHJlcGVuZE9uKCd0YXJnZXQ6Y3JlYXRlJywgYWRkVGFyZ2V0VG9TY29wZSlcbiAgZm4uY2FsbCgpXG4gIERyYWdnYWJsZS5lbWl0dGVyLnVuc3Vic2NyaWJlKCdkcmFnZ2FibGU6Y3JlYXRlJywgYWRkRHJhZ2dhYmxlVG9TY29wZSlcbiAgVGFyZ2V0LmVtaXR0ZXIudW5zdWJzY3JpYmUoJ3RhcmdldDpjcmVhdGUnLCBhZGRUYXJnZXRUb1Njb3BlKVxuICByZXR1cm4gY3VycmVudFNjb3BlXG59XG5cbmV4cG9ydCB7IHNjb3BlcywgZGVmYXVsdFNjb3BlLCBTY29wZSwgc2NvcGUgfVxuIiwiZnVuY3Rpb24gY2hlY2tTdXBwb3J0UGFzc2l2ZUV2ZW50cygpIHtcbiAgbGV0IHBhc3NpdmVTdXBwb3J0ZWQgPSBmYWxzZVxuXG4gIHRyeSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ3Bhc3NpdmUnLCB7XG4gICAgICBnZXQoKSB7XG4gICAgICAgIHJldHVybiAocGFzc2l2ZVN1cHBvcnRlZCA9IHRydWUpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0ZXN0Jywgb3B0aW9ucywgb3B0aW9ucylcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndGVzdCcsIG9wdGlvbnMsIG9wdGlvbnMpXG4gIH0gY2F0Y2ggKF9lcnIpIHtcbiAgICBwYXNzaXZlU3VwcG9ydGVkID0gZmFsc2VcbiAgfVxuXG4gIHJldHVybiBwYXNzaXZlU3VwcG9ydGVkXG59XG5cbmV4cG9ydCBjb25zdCBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzID0gY2hlY2tTdXBwb3J0UGFzc2l2ZUV2ZW50cygpXG5cbmZ1bmN0aW9uIGV2ZW50T3B0aW9ucyhvcHRpb25zLCBmYWxsYmFjayA9IGZhbHNlKSB7XG4gIHJldHVybiBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzID8gb3B0aW9ucyA6IGZhbGxiYWNrXG59XG5cbmV4cG9ydCB7IGV2ZW50T3B0aW9ucyB9XG5cbmV4cG9ydCBkZWZhdWx0IGlzU3VwcG9ydFBhc3NpdmVFdmVudHNcbiIsImltcG9ydCBnZXREZWZhdWx0Q29udGFpbmVyIGZyb20gJy4vdXRpbHMvZ2V0LWRlZmF1bHQtY29udGFpbmVyJ1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50RW1pdHRlcidcbmltcG9ydCBnZXRTdHlsZVByb3BlcnR5IGZyb20gJ2Rlc2FuZHJvLWdldC1zdHlsZS1wcm9wZXJ0eSdcbmltcG9ydCB7IEJvdW5kVG9FbGVtZW50IH0gZnJvbSAnLi9ib3VuZGluZydcbmltcG9ydCBQb2ludCBmcm9tICcuL2dlb21ldHJ5L3BvaW50J1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tICcuL2dlb21ldHJ5L3JlY3RhbmdsZSdcbmltcG9ydCB7IGRlZmF1bHRTY29wZSB9IGZyb20gJy4vc2NvcGUnXG5pbXBvcnQgaXNTdXBwb3J0UGFzc2l2ZUV2ZW50cyBmcm9tICcuL3V0aWxzL2lzLXN1cHBvcnQtcGFzc2l2ZS1ldmVudHMnXG5cbmNvbnN0IGlzVG91Y2ggPSAnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3dcbmNvbnN0IG1vdXNlRXZlbnRzID0ge1xuICBzdGFydDogJ21vdXNlZG93bicsXG4gIG1vdmU6ICdtb3VzZW1vdmUnLFxuICBlbmQ6ICdtb3VzZXVwJ1xufVxuY29uc3QgdG91Y2hFdmVudHMgPSB7XG4gIHN0YXJ0OiAndG91Y2hzdGFydCcsXG4gIG1vdmU6ICd0b3VjaG1vdmUnLFxuICBlbmQ6ICd0b3VjaGVuZCdcbn1cbmNvbnN0IGRyYWdnYWJsZXMgPSBbXVxuY29uc3QgdHJhbnNmb3JtUHJvcGVydHkgPSBnZXRTdHlsZVByb3BlcnR5KCd0cmFuc2Zvcm0nKVxuY29uc3QgdHJhbnNpdGlvblByb3BlcnR5ID0gZ2V0U3R5bGVQcm9wZXJ0eSgndHJhbnNpdGlvbicpXG5cbmZ1bmN0aW9uIGdldFRvdWNoQnlJRChlbGVtZW50LCB0b3VjaElkKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudC5jaGFuZ2VkVG91Y2hlcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChlbGVtZW50LmNoYW5nZWRUb3VjaGVzW2ldLmlkZW50aWZpZXIgPT09IHRvdWNoSWQpIHtcbiAgICAgIHJldHVybiBlbGVtZW50LmNoYW5nZWRUb3VjaGVzW2ldXG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZVxufVxuXG5mdW5jdGlvbiBwcmV2ZW50RG91YmxlSW5pdChkcmFnZ2FibGUpIHtcbiAgY29uc3QgbWVzc2FnZSA9IFwiZm9yIHRoaXMgZWxlbWVudCBEcmFnZWUuRHJhZ2dhYmxlIGlzIGFscmVhZHkgZXhpc3QsIGRvbid0IGNyZWF0ZSBpdCB0d2ljZSBcIlxuICBpZiAoZHJhZ2dhYmxlcy5zb21lKChleGlzdGluZykgPT4gZHJhZ2dhYmxlLmVsZW1lbnQgPT09IGV4aXN0aW5nLmVsZW1lbnQpKSB7XG4gICAgdGhyb3cgbWVzc2FnZVxuICB9XG4gIGRyYWdnYWJsZXMucHVzaChkcmFnZ2FibGUpXG59XG5cbmZ1bmN0aW9uIGFkZFRvRGVmYXVsdFNjb3BlKGRyYWdnYWJsZSkge1xuICBkZWZhdWx0U2NvcGUuYWRkRHJhZ2dhYmxlKGRyYWdnYWJsZSlcbn1cblxuZnVuY3Rpb24gY29weVN0eWxlcyhzb3VyY2UsIGRlc3RpbmF0aW9uKSB7XG4gIGNvbnN0IGNzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoc291cmNlKVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY3MubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBrZXkgPSBjc1tpXVxuICAgIGlmICgoa2V5LmluZGV4T2YoJ3RyYW5zaXRpb24nKSA8IDApICYmIChrZXkuaW5kZXhPZigndHJhbnNmb3JtJykgPCAwKSkge1xuICAgICAgZGVzdGluYXRpb24uc3R5bGVba2V5XSA9IGNzW2tleV1cbiAgICB9XG4gIH1cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNvdXJjZS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgIGNvcHlTdHlsZXMoc291cmNlLmNoaWxkcmVuW2ldLCBkZXN0aW5hdGlvbi5jaGlsZHJlbltpXSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcmFnZ2FibGUgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBvcHRpb25zPXt9KSB7XG4gICAgc3VwZXIob3B0aW9ucylcbiAgICB0aGlzLnRhcmdldHMgPSBbXVxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG4gICAgcHJldmVudERvdWJsZUluaXQodGhpcylcbiAgICBEcmFnZ2FibGUuZW1pdHRlci5lbWl0KCdkcmFnZ2FibGU6Y3JlYXRlJywgdGhpcylcbiAgICB0aGlzLl9lbmFibGUgPSB0cnVlXG5cbiAgICB0aGlzLnN0YXJ0Qm91bmRpbmcoKVxuICAgIHRoaXMuc3RhcnRQb3NpdGlvbmluZygpXG4gICAgdGhpcy5zdGFydExpc3RlbmluZygpXG4gIH1cblxuICBzdGFydEJvdW5kaW5nKCkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuYm91bmQpIHtcbiAgICAgIHRoaXMuYm91bmRpbmcgPSB7IGJvdW5kOiB0aGlzLm9wdGlvbnMuYm91bmQgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmJvdW5kaW5nID0gbmV3IEJvdW5kVG9FbGVtZW50KHRoaXMuY29udGFpbmVyLCB0aGlzLmNvbnRhaW5lcilcbiAgICB9XG4gIH1cblxuICBzdGFydFBvc2l0aW9uaW5nKCkge1xuICAgIHRoaXMuX3NldERlZmF1bHRUcmFuc2l0aW9uKClcbiAgICB0aGlzLm9mZnNldCA9IFBvaW50LmVsZW1lbnRPZmZzZXQodGhpcy5lbGVtZW50LCB0aGlzLmNvbnRhaW5lciwgdHJ1ZSlcbiAgICB0aGlzLnBpbm5lZFBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICB0aGlzLmluaXRpYWxQb3NpdGlvbiA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbiB8fCB0aGlzLm9mZnNldFxuXG4gICAgdGhpcy5waW5Qb3NpdGlvbih0aGlzLmluaXRpYWxQb3NpdGlvbilcblxuICAgIGlmICh0aGlzLmJvdW5kaW5nLnJlZnJlc2gpIHtcbiAgICAgIHRoaXMuYm91bmRpbmcucmVmcmVzaCgpXG4gICAgfVxuICB9XG5cbiAgc3RhcnRMaXN0ZW5pbmcoKSB7XG4gICAgdGhpcy5fZHJhZ1N0YXJ0ID0gKGV2ZW50KSA9PiB0aGlzLmRyYWdTdGFydChldmVudClcbiAgICB0aGlzLl9kcmFnTW92ZSA9IChldmVudCkgPT4gdGhpcy5kcmFnTW92ZShldmVudClcbiAgICB0aGlzLl9kcmFnRW5kID0gKGV2ZW50KSA9PiB0aGlzLmRyYWdFbmQoZXZlbnQpXG4gICAgdGhpcy5fbmF0aXZlRHJhZ1N0YXJ0ID0gKGV2ZW50KSA9PiB0aGlzLm5hdGl2ZURyYWdTdGFydChldmVudClcbiAgICB0aGlzLl9uYXRpdmVEcmFnT3ZlciA9IChldmVudCkgPT4gdGhpcy5uYXRpdmVEcmFnT3ZlcihldmVudClcbiAgICB0aGlzLl9uYXRpdmVEcmFnRW5kID0gKGV2ZW50KSA9PiB0aGlzLm5hdGl2ZURyYWdFbmQoZXZlbnQpXG4gICAgdGhpcy5fbmF0aXZlRHJvcCA9IChldmVudCkgPT4gdGhpcy5uYXRpdmVEcm9wKGV2ZW50KVxuICAgIHRoaXMuX3Njcm9sbCA9IChldmVudCkgPT4gdGhpcy5vblNjcm9sbChldmVudClcblxuICAgIHRoaXMuaGFuZGxlci5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQsIGlzU3VwcG9ydFBhc3NpdmVFdmVudHMgPyB7IHBhc3NpdmU6IGZhbHNlIH0gOiBmYWxzZSlcbiAgICB0aGlzLmhhbmRsZXIuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0LCBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzID8geyBwYXNzaXZlOiBmYWxzZSB9IDogZmFsc2UpXG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIHRoaXMuX25hdGl2ZURyYWdTdGFydClcbiAgfVxuXG4gIGdldFNpemUoKSB7XG4gICAgcmV0dXJuIFBvaW50LmVsZW1lbnRTaXplKHRoaXMuZWxlbWVudCwgdGhpcy5vcHRpb25zLmlzQ29udGVudEJveFNpemUpXG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5vZmZzZXQuYWRkKHRoaXMuX3RyYW5zZm9ybVBvc2l0aW9uIHx8IG5ldyBQb2ludCgwLCAwKSlcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvblxuICB9XG5cbiAgZ2V0Q2VudGVyKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLmdldFNpemUoKS5tdWx0KDAuNSkpXG4gIH1cblxuICBfc2V0RGVmYXVsdFRyYW5zaXRpb24gKCkge1xuICAgIHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5lbGVtZW50KVt0cmFuc2l0aW9uUHJvcGVydHldXG4gIH1cblxuICBfc2V0VHJhbnNpdGlvbih0aW1lKSB7XG4gICAgbGV0IHRyYW5zaXRpb24gPSB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNpdGlvblByb3BlcnR5XVxuICAgIGNvbnN0IHRyYW5zaXRpb25Dc3MgPSBgdHJhbnNmb3JtICR7dGltZX1tc2BcblxuICAgIGlmICghL3RyYW5zZm9ybSBcXGQqbT9zLy50ZXN0KHRyYW5zaXRpb24pKSB7XG4gICAgICBpZiAodHJhbnNpdGlvbikge1xuICAgICAgICB0cmFuc2l0aW9uICs9IGAsICR7dHJhbnNpdGlvbkNzc31gXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cmFuc2l0aW9uID0gdHJhbnNpdGlvbkNzc1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0cmFuc2l0aW9uID0gdHJhbnNpdGlvbi5yZXBsYWNlKC90cmFuc2Zvcm0gXFxkKm0/cy8sIHRyYW5zaXRpb25Dc3MpXG4gICAgfVxuXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV0gPSB0cmFuc2l0aW9uXG4gIH1cblxuICBfc2V0VHJhbnNsYXRlKHBvaW50KSB7XG4gICAgdGhpcy5fdHJhbnNmb3JtUG9zaXRpb24gPSBwb2ludFxuICAgIGNvbnN0IHRyYW5zbGF0ZUNzcyA9IGB0cmFuc2xhdGUzZCgke3BvaW50Lnh9cHgsICR7cG9pbnQueX1weCwgMHB4KWBcblxuICAgIGxldCB0cmFuc2Zvcm0gPSB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcGVydHldXG5cbiAgICBpZiAodGhpcy5zaG91bGRSZW1vdmVaZXJvVHJhbnNsYXRlICYmIHBvaW50LnggPT09IDAgJiYgcG9pbnQueSA9PT0gMCkge1xuICAgICAgdHJhbnNmb3JtID0gdHJhbnNmb3JtLnJlcGxhY2UoL3RyYW5zbGF0ZTNkXFwoW14pXStcXCkvLCAnJylcbiAgICB9IGVsc2UgaWYgKCEvdHJhbnNsYXRlM2RcXChbXildK1xcKS8udGVzdCh0cmFuc2Zvcm0pKSB7XG4gICAgICBpZiAodHJhbnNmb3JtKSB7XG4gICAgICAgIHRyYW5zZm9ybSArPSAnICdcbiAgICAgIH1cbiAgICAgIHRyYW5zZm9ybSArPSB0cmFuc2xhdGVDc3NcbiAgICB9IGVsc2Uge1xuICAgICAgdHJhbnNmb3JtID0gdHJhbnNmb3JtLnJlcGxhY2UoL3RyYW5zbGF0ZTNkXFwoW14pXStcXCkvLCB0cmFuc2xhdGVDc3MpXG4gICAgfVxuXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BlcnR5XSA9IHRyYW5zZm9ybVxuICB9XG5cbiAgbW92ZShwb2ludCwgdGltZT0wLCBpc1NpbGVudD1mYWxzZSkge1xuICAgIHBvaW50ID0gcG9pbnQuY2xvbmUoKVxuXG4gICAgdGhpcy5kZXRlcm1pbmVEaXJlY3Rpb24ocG9pbnQpXG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvaW50XG5cbiAgICB0aGlzLl9zZXRUcmFuc2l0aW9uKHRpbWUpXG4gICAgdGhpcy5fc2V0VHJhbnNsYXRlKHBvaW50LnN1Yih0aGlzLm9mZnNldCkpXG5cbiAgICBpZiAoIWlzU2lsZW50KSB7XG4gICAgICB0aGlzLmVtaXQoJ2RyYWc6bW92ZScpXG4gICAgfVxuICB9XG5cbiAgcGluUG9zaXRpb24ocG9pbnQsIHRpbWU9MCwgc2lsZW50PXRydWUpIHtcbiAgICB0aGlzLnBpbm5lZFBvc2l0aW9uID0gcG9pbnQuY2xvbmUoKVxuICAgIHRoaXMubW92ZSh0aGlzLnBpbm5lZFBvc2l0aW9uLCB0aW1lLCBzaWxlbnQpXG4gIH1cblxuICByZXNldFBvc2l0aW9uVG9Jbml0aWFsICgpIHtcbiAgICB0aGlzLnBpblBvc2l0aW9uKHRoaXMuaW5pdGlhbFBvc2l0aW9uKVxuICB9XG5cbiAgcmVmcmVzaFBvc2l0aW9uICgpIHtcbiAgICB0aGlzLnNldFBvc2l0aW9uKHRoaXMuZ2V0UG9zaXRpb24oKSlcbiAgfVxuXG4gIHNldFBvc2l0aW9uKHBvaW50KSB7XG4gICAgcG9pbnQgPSBwb2ludC5jbG9uZSgpXG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvaW50XG4gICAgdGhpcy5fc2V0VHJhbnNpdGlvbigwKVxuICAgIHRoaXMuX3NldFRyYW5zbGF0ZShwb2ludC5zdWIodGhpcy5vZmZzZXQpKVxuICB9XG5cbiAgZGV0ZXJtaW5lRGlyZWN0aW9uKHBvaW50KSB7XG4gICAgdGhpcy5sZWZ0RGlyZWN0aW9uID0gKHRoaXMucG9zaXRpb24ueCA8IHBvaW50LngpXG4gICAgdGhpcy5yaWdodERpcmVjdGlvbiA9ICh0aGlzLnBvc2l0aW9uLnggPiBwb2ludC54KVxuICAgIHRoaXMudXBEaXJlY3Rpb24gPSAodGhpcy5wb3NpdGlvbi55ID4gcG9pbnQueSlcbiAgICB0aGlzLmRvd25EaXJlY3Rpb24gPSAodGhpcy5wb3NpdGlvbi55IDwgcG9pbnQueSlcbiAgfVxuXG4gIGRyYWdTdGFydChldmVudCkge1xuICAgIHRoaXMuY3VycmVudEV2ZW50ID0gZXZlbnRcbiAgICBpZiAoIXRoaXMuX2VuYWJsZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaXNUb3VjaEV2ZW50ID0gKGlzVG91Y2ggJiYgKGV2ZW50IGluc3RhbmNlb2Ygd2luZG93LlRvdWNoRXZlbnQpKVxuXG4gICAgdGhpcy50b3VjaFBvaW50ID0gdGhpcy5fc3RhcnRUb3VjaFBvaW50ID0gbmV3IFBvaW50KFxuICAgICAgaXNUb3VjaEV2ZW50ID8gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVggOiBldmVudC5jbGllbnRYLFxuICAgICAgaXNUb3VjaEV2ZW50ID8gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVkgOiBldmVudC5jbGllbnRZXG4gICAgKVxuXG4gICAgdGhpcy5fc3RhcnRQb3NpdGlvbiA9IHRoaXMuZ2V0UG9zaXRpb24oKVxuICAgIGlmIChpc1RvdWNoRXZlbnQpIHtcbiAgICAgIHRoaXMuX3RvdWNoSWQgPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5pZGVudGlmaWVyXG4gICAgfVxuXG4gICAgdGhpcy5fc3RhcnRTY3JvbGxQb2ludCA9IG5ldyBQb2ludCh3aW5kb3cuc2Nyb2xsWCwgd2luZG93LnNjcm9sbFkpXG5cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGlmIChldmVudC50YXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElucHV0RWxlbWVudCB8fFxuICAgICAgICAgIGV2ZW50LnRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSW5wdXRFbGVtZW50KSB7XG4gICAgICBldmVudC50YXJnZXQuZm9jdXMoKVxuICAgIH1cblxuICAgIGlmICghKHRoaXMubmF0aXZlRHJhZ0FuZERyb3AgfHxcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSW5wdXRFbGVtZW50IHx8XG4gICAgICAgICAgICBldmVudC50YXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElucHV0RWxlbWVudCkpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB9XG5cbiAgICBpZiAodGhpcy5uYXRpdmVEcmFnQW5kRHJvcCkge1xuICAgICAgY29uc3QgaXNTYWZhcmkgPSAvdmVyc2lvblxcLyhcXGQrKS4rP3NhZmFyaS9pLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpXG4gICAgICBpZiAoKGlzVG91Y2hFdmVudCAmJiB0aGlzLmVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcE9uVG91Y2gpIHx8XG4gICAgICAgICAgICAgaXNTYWZhcmkgfHxcbiAgICAgICAgICAgICB0aGlzLmVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcEZvckFsbCkge1xuICAgICAgICB0aGlzLmVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcChldmVudClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5kcmFnZ2FibGUgPSB0cnVlXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9uYXRpdmVEcmFnRW5kLCBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzID8geyBwYXNzaXZlOiBmYWxzZSB9IDogZmFsc2UpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUsIGlzU3VwcG9ydFBhc3NpdmVFdmVudHMgPyB7IHBhc3NpdmU6IGZhbHNlIH0gOiBmYWxzZSlcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUsIGlzU3VwcG9ydFBhc3NpdmVFdmVudHMgPyB7IHBhc3NpdmU6IGZhbHNlIH0gOiBmYWxzZSlcblxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQsIGlzU3VwcG9ydFBhc3NpdmVFdmVudHMgPyB7IHBhc3NpdmU6IGZhbHNlIH0gOiBmYWxzZSlcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kLCBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzID8geyBwYXNzaXZlOiBmYWxzZSB9IDogZmFsc2UpXG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX3Njcm9sbClcblxuICAgIHRoaXMuaXNEcmFnZ2luZyA9IHRydWVcbiAgICB0aGlzLmVtaXQoJ2RyYWc6c3RhcnQnKVxuICB9XG5cbiAgc3RvcERyYWdnaW5nKCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIHRoaXMuX25hdGl2ZURyYWdPdmVyKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzLl9uYXRpdmVEcm9wKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzLl9uYXRpdmVEcm9wKVxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9zY3JvbGwpXG4gICAgdGhpcy5lbGVtZW50LmRyYWdnYWJsZSA9IGZhbHNlXG4gICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2VcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2VlLWFjdGl2ZScpXG4gIH1cblxuICBkcmFnTW92ZShldmVudCkge1xuICAgIHRoaXMuY3VycmVudEV2ZW50ID0gZXZlbnRcbiAgICBsZXQgdG91Y2hcblxuICAgIGNvbnN0IGlzVG91Y2hFdmVudCA9IChpc1RvdWNoICYmIChldmVudCBpbnN0YW5jZW9mIHdpbmRvdy5Ub3VjaEV2ZW50KSlcbiAgICBpZiAoaXNUb3VjaEV2ZW50KSB7XG4gICAgICB0b3VjaCA9IGdldFRvdWNoQnlJRChldmVudCwgdGhpcy5fdG91Y2hJZClcblxuICAgICAgaWYgKCF0b3VjaCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB0aGlzLnRvdWNoUG9pbnQgPSBuZXcgUG9pbnQoXG4gICAgICBpc1RvdWNoRXZlbnQgPyB0b3VjaC5wYWdlWCA6IGV2ZW50LmNsaWVudFgsXG4gICAgICBpc1RvdWNoRXZlbnQgPyB0b3VjaC5wYWdlWSA6IGV2ZW50LmNsaWVudFlcbiAgICApXG5cbiAgICBsZXQgcG9pbnQgPSB0aGlzLl9zdGFydFBvc2l0aW9uLmFkZCh0aGlzLnRvdWNoUG9pbnQuc3ViKHRoaXMuX3N0YXJ0VG91Y2hQb2ludCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy5zY3JvbGxQb2ludC5zdWIodGhpcy5fc3RhcnRTY3JvbGxQb2ludCkpXG5cbiAgICBwb2ludCA9IHRoaXMuYm91bmRpbmcuYm91bmQocG9pbnQsIHRoaXMuZ2V0U2l6ZSgpKVxuICAgIHRoaXMubW92ZShwb2ludClcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZHJhZ2VlLWFjdGl2ZScpXG4gIH1cblxuICBkcmFnRW5kKGV2ZW50KSB7XG4gICAgY29uc3QgaXNUb3VjaEV2ZW50ID0gKGlzVG91Y2ggJiYgKGV2ZW50IGluc3RhbmNlb2Ygd2luZG93LlRvdWNoRXZlbnQpKVxuXG4gICAgaWYgKGlzVG91Y2hFdmVudCAmJiAhZ2V0VG91Y2hCeUlEKGV2ZW50LCB0aGlzLl90b3VjaElkKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhpcy5kcmFnRW5kQWN0aW9uKClcbiAgICB0aGlzLmVtaXQoJ2RyYWc6ZW5kJylcblxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcblxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX3Njcm9sbClcblxuICAgIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnZHJhZ2dhYmxlJylcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZWUtYWN0aXZlJykpXG4gIH1cblxuICBvblNjcm9sbChfZXZlbnQpIHtcbiAgICBsZXQgcG9pbnQgPSB0aGlzLl9zdGFydFBvc2l0aW9uLmFkZCh0aGlzLnRvdWNoUG9pbnQuc3ViKHRoaXMuX3N0YXJ0VG91Y2hQb2ludCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy5zY3JvbGxQb2ludC5zdWIodGhpcy5fc3RhcnRTY3JvbGxQb2ludCkpXG5cbiAgICBwb2ludCA9IHRoaXMuYm91bmRpbmcuYm91bmQocG9pbnQsIHRoaXMuZ2V0U2l6ZSgpKVxuICAgIGlmICghdGhpcy5uYXRpdmVEcmFnQW5kRHJvcCkge1xuICAgICAgdGhpcy5tb3ZlKHBvaW50KVxuICAgIH1cbiAgfVxuXG4gIG5hdGl2ZURyYWdTdGFydChldmVudCkge1xuICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0JywgJ0ZpcmVGb3ggZml4JylcbiAgICBldmVudC5kYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCA9ICdtb3ZlJ1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgdGhpcy5fbmF0aXZlRHJhZ092ZXIpXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIHRoaXMuX25hdGl2ZURyYWdFbmQpXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIHRoaXMuX25hdGl2ZURyb3ApXG4gIH1cblxuICBuYXRpdmVEcmFnT3ZlcihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBldmVudC5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9ICdtb3ZlJ1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkcmFnZWUtcGxhY2Vob2xkZXInKVxuICAgIHRoaXMuY3VycmVudEV2ZW50ID0gZXZlbnRcbiAgICBpZiAoZXZlbnQuY2xpZW50WCA9PT0gMCAmJiBldmVudC5jbGllbnRZID09PSAwKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLnRvdWNoUG9pbnQgPSBuZXcgUG9pbnQoZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSlcbiAgICBsZXQgcG9pbnQgPSB0aGlzLl9zdGFydFBvc2l0aW9uLmFkZCh0aGlzLnRvdWNoUG9pbnQuc3ViKHRoaXMuX3N0YXJ0VG91Y2hQb2ludCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy5zY3JvbGxQb2ludC5zdWIodGhpcy5fc3RhcnRTY3JvbGxQb2ludCkpXG4gICAgcG9pbnQgPSB0aGlzLmJvdW5kaW5nLmJvdW5kKHBvaW50LCB0aGlzLmdldFNpemUoKSlcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9pbnRcbiAgICB0aGlzLmVtaXQoJ2RyYWc6bW92ZScpXG4gIH1cblxuICBuYXRpdmVEcmFnRW5kKF9ldmVudCkge1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZWUtcGxhY2Vob2xkZXInKVxuICAgIHRoaXMuZHJhZ0VuZEFjdGlvbigpXG4gICAgdGhpcy5lbWl0KCdkcmFnOmVuZCcpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCB0aGlzLl9uYXRpdmVEcmFnT3ZlcilcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcm9wJywgdGhpcy5fbmF0aXZlRHJvcClcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fc2Nyb2xsKVxuICAgIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnZHJhZ2dhYmxlJylcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2VlLWFjdGl2ZScpXG4gIH1cblxuICBuYXRpdmVEcm9wKGV2ZW50KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBlbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3AoZXZlbnQpIHtcbiAgICBjb25zdCBjb250YWluZXJSZWN0ID0gdGhpcy5jb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICBjb25zdCBjbG9uZWRFbGVtZW50ID0gdGhpcy5lbGVtZW50LmNsb25lTm9kZSh0cnVlKVxuICAgIGNsb25lZEVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcGVydHldID0gJydcbiAgICBjb3B5U3R5bGVzKHRoaXMuZWxlbWVudCwgY2xvbmVkRWxlbWVudClcbiAgICBjbG9uZWRFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJ1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2xvbmVkRWxlbWVudClcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZHJhZ2VlLXBsYWNlaG9sZGVyJylcblxuICAgIGNvbnN0IGVtdWxhdGlvbkRyYWdnYWJsZSA9IG5ldyBEcmFnZ2FibGUoY2xvbmVkRWxlbWVudCwge1xuICAgICAgY29udGFpbmVyOiBkb2N1bWVudC5ib2R5LFxuICAgICAgYm91bmQocG9pbnQpIHtcbiAgICAgICAgcmV0dXJuIHBvaW50XG4gICAgICB9LFxuICAgICAgb246IHtcbiAgICAgICAgJ2RyYWc6bW92ZSc6ICgpID0+IHtcbiAgICAgICAgICBjb25zdCBjb250YWluZXJSZWN0UG9pbnQgPSBuZXcgUG9pbnQoY29udGFpbmVyUmVjdC5sZWZ0LCBjb250YWluZXJSZWN0LnRvcClcbiAgICAgICAgICB0aGlzLnBvc2l0aW9uID0gZW11bGF0aW9uRHJhZ2dhYmxlLnBvc2l0aW9uLnN1Yihjb250YWluZXJSZWN0UG9pbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdWIodGhpcy5fc3RhcnRTY3JvbGxQb2ludClcbiAgICAgICAgICB0aGlzLmVtaXQoJ2RyYWc6bW92ZScpXG4gICAgICAgIH0sXG4gICAgICAgICdkcmFnOmVuZCc6ICgpID0+IHtcbiAgICAgICAgICBlbXVsYXRpb25EcmFnZ2FibGUuZGVzdHJveSgpXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChjbG9uZWRFbGVtZW50KVxuICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZWUtcGxhY2Vob2xkZXInKVxuICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZWUtYWN0aXZlJylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBjb250YWluZXJSZWN0UG9pbnQgPSBuZXcgUG9pbnQoY29udGFpbmVyUmVjdC5sZWZ0LCBjb250YWluZXJSZWN0LnRvcClcbiAgICBlbXVsYXRpb25EcmFnZ2FibGUuX3N0YXJ0U2Nyb2xsUG9pbnQgPSB0aGlzLl9zdGFydFNjcm9sbFBvaW50XG5cbiAgICBlbXVsYXRpb25EcmFnZ2FibGUubW92ZShcbiAgICAgIHRoaXMucGlubmVkUG9zaXRpb24uYWRkKGNvbnRhaW5lclJlY3RQb2ludCkuYWRkKG5ldyBQb2ludCh3aW5kb3cuc2Nyb2xsWCwgd2luZG93LnNjcm9sbFkpKVxuICAgIClcblxuICAgIGVtdWxhdGlvbkRyYWdnYWJsZS5kcmFnU3RhcnQoZXZlbnQpXG4gIH1cblxuICBkcmFnRW5kQWN0aW9uKCkge1xuICAgIHRoaXMucGluUG9zaXRpb24odGhpcy5wb3NpdGlvbilcbiAgfVxuXG4gIGdldFJlY3RhbmdsZSgpIHtcbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZSh0aGlzLnBvc2l0aW9uLCB0aGlzLmdldFNpemUoKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgaWYgKHRoaXMuYm91bmRpbmcucmVmcmVzaCkge1xuICAgICAgdGhpcy5ib3VuZGluZy5yZWZyZXNoKClcbiAgICB9XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuaGFuZGxlci5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQpXG4gICAgdGhpcy5oYW5kbGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydClcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgdGhpcy5fbmF0aXZlRHJhZ1N0YXJ0KVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIHRoaXMuX25hdGl2ZURyYWdPdmVyKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzLl9uYXRpdmVEcm9wKVxuICAgIHRoaXMucmVzZXRFbWl0dGVyKClcblxuICAgIGNvbnN0IGluZGV4ID0gZHJhZ2dhYmxlcy5pbmRleE9mKHRoaXMpXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIGRyYWdnYWJsZXMuc3BsaWNlKGluZGV4LCAxKVxuICAgIH1cbiAgfVxuXG4gIGdldCBjb250YWluZXIoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9jb250YWluZXIgPSB0aGlzLl9jb250YWluZXIgfHwgdGhpcy5vcHRpb25zLmNvbnRhaW5lciB8fCB0aGlzLm9wdGlvbnMucGFyZW50IHx8IGdldERlZmF1bHRDb250YWluZXIodGhpcy5lbGVtZW50KSlcbiAgfVxuXG4gIGdldCBoYW5kbGVyKCkge1xuICAgIGlmICghdGhpcy5faGFuZGxlcikge1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuaGFuZGxlciA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhpcy5faGFuZGxlciA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKHRoaXMub3B0aW9ucy5oYW5kbGVyKSB8fCB0aGlzLmVsZW1lbnRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZXIgPSB0aGlzLm9wdGlvbnMuaGFuZGxlciB8fCB0aGlzLmVsZW1lbnRcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5faGFuZGxlclxuICB9XG5cbiAgZ2V0IG5hdGl2ZURyYWdBbmREcm9wKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMubmF0aXZlRHJhZ0FuZERyb3AgfHwgZmFsc2VcbiAgfVxuXG4gIGdldCBlbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3BPblRvdWNoKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wT25Ub3VjaCB8fCB0cnVlXG4gIH1cblxuICBnZXQgZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wRm9yQWxsKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wRm9yQWxsIHx8IGZhbHNlXG4gIH1cblxuICBnZXQgc2hvdWxkUmVtb3ZlWmVyb1RyYW5zbGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLnNob3VsZFJlbW92ZVplcm9UcmFuc2xhdGUgfHwgZmFsc2VcbiAgfVxuXG4gIGdldCBzY3JvbGxQb2ludCgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHdpbmRvdy5zY3JvbGxYLCB3aW5kb3cuc2Nyb2xsWSlcbiAgfVxuXG4gIGdldCBlbmFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZVxuICB9XG5cbiAgc2V0IGVuYWJsZShlbmFibGUpIHtcbiAgICBpZiAoZW5hYmxlKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2VlLWRpc2FibGUnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZHJhZ2VlLWRpc2FibGUnKVxuICAgIH1cblxuICAgIHRoaXMuX2VuYWJsZSA9IGVuYWJsZVxuICB9XG59XG5cbkRyYWdnYWJsZS5lbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcigpXG5EcmFnZ2FibGUuZW1pdHRlci5vbignZHJhZ2dhYmxlOmNyZWF0ZScsIGFkZFRvRGVmYXVsdFNjb3BlKVxuIiwidmFyIHJlc2l6ZU9ic2VydmVycyA9IFtdO1xuZXhwb3J0IHsgcmVzaXplT2JzZXJ2ZXJzIH07XG4iLCJpbXBvcnQgeyByZXNpemVPYnNlcnZlcnMgfSBmcm9tICcuLi91dGlscy9yZXNpemVPYnNlcnZlcnMnO1xudmFyIGhhc0FjdGl2ZU9ic2VydmF0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gcmVzaXplT2JzZXJ2ZXJzLnNvbWUoZnVuY3Rpb24gKHJvKSB7IHJldHVybiByby5hY3RpdmVUYXJnZXRzLmxlbmd0aCA+IDA7IH0pO1xufTtcbmV4cG9ydCB7IGhhc0FjdGl2ZU9ic2VydmF0aW9ucyB9O1xuIiwiaW1wb3J0IHsgcmVzaXplT2JzZXJ2ZXJzIH0gZnJvbSAnLi4vdXRpbHMvcmVzaXplT2JzZXJ2ZXJzJztcbnZhciBoYXNTa2lwcGVkT2JzZXJ2YXRpb25zID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiByZXNpemVPYnNlcnZlcnMuc29tZShmdW5jdGlvbiAocm8pIHsgcmV0dXJuIHJvLnNraXBwZWRUYXJnZXRzLmxlbmd0aCA+IDA7IH0pO1xufTtcbmV4cG9ydCB7IGhhc1NraXBwZWRPYnNlcnZhdGlvbnMgfTtcbiIsInZhciBtc2cgPSAnUmVzaXplT2JzZXJ2ZXIgbG9vcCBjb21wbGV0ZWQgd2l0aCB1bmRlbGl2ZXJlZCBub3RpZmljYXRpb25zLic7XG52YXIgZGVsaXZlclJlc2l6ZUxvb3BFcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXZlbnQ7XG4gICAgaWYgKHR5cGVvZiBFcnJvckV2ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGV2ZW50ID0gbmV3IEVycm9yRXZlbnQoJ2Vycm9yJywge1xuICAgICAgICAgICAgbWVzc2FnZTogbXNnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKTtcbiAgICAgICAgZXZlbnQuaW5pdEV2ZW50KCdlcnJvcicsIGZhbHNlLCBmYWxzZSk7XG4gICAgICAgIGV2ZW50Lm1lc3NhZ2UgPSBtc2c7XG4gICAgfVxuICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbn07XG5leHBvcnQgeyBkZWxpdmVyUmVzaXplTG9vcEVycm9yIH07XG4iLCJ2YXIgUmVzaXplT2JzZXJ2ZXJCb3hPcHRpb25zO1xuKGZ1bmN0aW9uIChSZXNpemVPYnNlcnZlckJveE9wdGlvbnMpIHtcbiAgICBSZXNpemVPYnNlcnZlckJveE9wdGlvbnNbXCJCT1JERVJfQk9YXCJdID0gXCJib3JkZXItYm94XCI7XG4gICAgUmVzaXplT2JzZXJ2ZXJCb3hPcHRpb25zW1wiQ09OVEVOVF9CT1hcIl0gPSBcImNvbnRlbnQtYm94XCI7XG4gICAgUmVzaXplT2JzZXJ2ZXJCb3hPcHRpb25zW1wiREVWSUNFX1BJWEVMX0NPTlRFTlRfQk9YXCJdID0gXCJkZXZpY2UtcGl4ZWwtY29udGVudC1ib3hcIjtcbn0pKFJlc2l6ZU9ic2VydmVyQm94T3B0aW9ucyB8fCAoUmVzaXplT2JzZXJ2ZXJCb3hPcHRpb25zID0ge30pKTtcbmV4cG9ydCB7IFJlc2l6ZU9ic2VydmVyQm94T3B0aW9ucyB9O1xuIiwiZXhwb3J0IHZhciBmcmVlemUgPSBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBPYmplY3QuZnJlZXplKG9iaik7IH07XG4iLCJpbXBvcnQgeyBmcmVlemUgfSBmcm9tICcuL3V0aWxzL2ZyZWV6ZSc7XG52YXIgUmVzaXplT2JzZXJ2ZXJTaXplID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBSZXNpemVPYnNlcnZlclNpemUoaW5saW5lU2l6ZSwgYmxvY2tTaXplKSB7XG4gICAgICAgIHRoaXMuaW5saW5lU2l6ZSA9IGlubGluZVNpemU7XG4gICAgICAgIHRoaXMuYmxvY2tTaXplID0gYmxvY2tTaXplO1xuICAgICAgICBmcmVlemUodGhpcyk7XG4gICAgfVxuICAgIHJldHVybiBSZXNpemVPYnNlcnZlclNpemU7XG59KCkpO1xuZXhwb3J0IHsgUmVzaXplT2JzZXJ2ZXJTaXplIH07XG4iLCJpbXBvcnQgeyBmcmVlemUgfSBmcm9tICcuL3V0aWxzL2ZyZWV6ZSc7XG52YXIgRE9NUmVjdFJlYWRPbmx5ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBET01SZWN0UmVhZE9ubHkoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICB0aGlzLnRvcCA9IHRoaXMueTtcbiAgICAgICAgdGhpcy5sZWZ0ID0gdGhpcy54O1xuICAgICAgICB0aGlzLmJvdHRvbSA9IHRoaXMudG9wICsgdGhpcy5oZWlnaHQ7XG4gICAgICAgIHRoaXMucmlnaHQgPSB0aGlzLmxlZnQgKyB0aGlzLndpZHRoO1xuICAgICAgICByZXR1cm4gZnJlZXplKHRoaXMpO1xuICAgIH1cbiAgICBET01SZWN0UmVhZE9ubHkucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hID0gdGhpcywgeCA9IF9hLngsIHkgPSBfYS55LCB0b3AgPSBfYS50b3AsIHJpZ2h0ID0gX2EucmlnaHQsIGJvdHRvbSA9IF9hLmJvdHRvbSwgbGVmdCA9IF9hLmxlZnQsIHdpZHRoID0gX2Eud2lkdGgsIGhlaWdodCA9IF9hLmhlaWdodDtcbiAgICAgICAgcmV0dXJuIHsgeDogeCwgeTogeSwgdG9wOiB0b3AsIHJpZ2h0OiByaWdodCwgYm90dG9tOiBib3R0b20sIGxlZnQ6IGxlZnQsIHdpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHQgfTtcbiAgICB9O1xuICAgIERPTVJlY3RSZWFkT25seS5mcm9tUmVjdCA9IGZ1bmN0aW9uIChyZWN0YW5nbGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBET01SZWN0UmVhZE9ubHkocmVjdGFuZ2xlLngsIHJlY3RhbmdsZS55LCByZWN0YW5nbGUud2lkdGgsIHJlY3RhbmdsZS5oZWlnaHQpO1xuICAgIH07XG4gICAgcmV0dXJuIERPTVJlY3RSZWFkT25seTtcbn0oKSk7XG5leHBvcnQgeyBET01SZWN0UmVhZE9ubHkgfTtcbiIsInZhciBpc1NWRyA9IGZ1bmN0aW9uICh0YXJnZXQpIHsgcmV0dXJuIHRhcmdldCBpbnN0YW5jZW9mIFNWR0VsZW1lbnQgJiYgJ2dldEJCb3gnIGluIHRhcmdldDsgfTtcbnZhciBpc0hpZGRlbiA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBpZiAoaXNTVkcodGFyZ2V0KSkge1xuICAgICAgICB2YXIgX2EgPSB0YXJnZXQuZ2V0QkJveCgpLCB3aWR0aCA9IF9hLndpZHRoLCBoZWlnaHQgPSBfYS5oZWlnaHQ7XG4gICAgICAgIHJldHVybiAhd2lkdGggJiYgIWhlaWdodDtcbiAgICB9XG4gICAgdmFyIF9iID0gdGFyZ2V0LCBvZmZzZXRXaWR0aCA9IF9iLm9mZnNldFdpZHRoLCBvZmZzZXRIZWlnaHQgPSBfYi5vZmZzZXRIZWlnaHQ7XG4gICAgcmV0dXJuICEob2Zmc2V0V2lkdGggfHwgb2Zmc2V0SGVpZ2h0IHx8IHRhcmdldC5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCk7XG59O1xudmFyIGlzRWxlbWVudCA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICB2YXIgX2EsIF9iO1xuICAgIGlmIChvYmogaW5zdGFuY2VvZiBFbGVtZW50KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICB2YXIgc2NvcGUgPSAoX2IgPSAoX2EgPSBvYmopID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5vd25lckRvY3VtZW50KSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuZGVmYXVsdFZpZXc7XG4gICAgcmV0dXJuICEhKHNjb3BlICYmIG9iaiBpbnN0YW5jZW9mIHNjb3BlLkVsZW1lbnQpO1xufTtcbnZhciBpc1JlcGxhY2VkRWxlbWVudCA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBzd2l0Y2ggKHRhcmdldC50YWdOYW1lKSB7XG4gICAgICAgIGNhc2UgJ0lOUFVUJzpcbiAgICAgICAgICAgIGlmICh0YXJnZXQudHlwZSAhPT0gJ2ltYWdlJykge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICBjYXNlICdWSURFTyc6XG4gICAgICAgIGNhc2UgJ0FVRElPJzpcbiAgICAgICAgY2FzZSAnRU1CRUQnOlxuICAgICAgICBjYXNlICdPQkpFQ1QnOlxuICAgICAgICBjYXNlICdDQU5WQVMnOlxuICAgICAgICBjYXNlICdJRlJBTUUnOlxuICAgICAgICBjYXNlICdJTUcnOlxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn07XG5leHBvcnQgeyBpc1NWRywgaXNIaWRkZW4sIGlzRWxlbWVudCwgaXNSZXBsYWNlZEVsZW1lbnQgfTtcbiIsImV4cG9ydCB2YXIgZ2xvYmFsID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB7fTtcbiIsImltcG9ydCB7IFJlc2l6ZU9ic2VydmVyQm94T3B0aW9ucyB9IGZyb20gJy4uL1Jlc2l6ZU9ic2VydmVyQm94T3B0aW9ucyc7XG5pbXBvcnQgeyBSZXNpemVPYnNlcnZlclNpemUgfSBmcm9tICcuLi9SZXNpemVPYnNlcnZlclNpemUnO1xuaW1wb3J0IHsgRE9NUmVjdFJlYWRPbmx5IH0gZnJvbSAnLi4vRE9NUmVjdFJlYWRPbmx5JztcbmltcG9ydCB7IGlzU1ZHLCBpc0hpZGRlbiB9IGZyb20gJy4uL3V0aWxzL2VsZW1lbnQnO1xuaW1wb3J0IHsgZnJlZXplIH0gZnJvbSAnLi4vdXRpbHMvZnJlZXplJztcbmltcG9ydCB7IGdsb2JhbCB9IGZyb20gJy4uL3V0aWxzL2dsb2JhbCc7XG52YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xudmFyIHNjcm9sbFJlZ2V4cCA9IC9hdXRvfHNjcm9sbC87XG52YXIgdmVydGljYWxSZWdleHAgPSAvXnRifHZlcnRpY2FsLztcbnZhciBJRSA9ICgvbXNpZXx0cmlkZW50L2kpLnRlc3QoZ2xvYmFsLm5hdmlnYXRvciAmJiBnbG9iYWwubmF2aWdhdG9yLnVzZXJBZ2VudCk7XG52YXIgcGFyc2VEaW1lbnNpb24gPSBmdW5jdGlvbiAocGl4ZWwpIHsgcmV0dXJuIHBhcnNlRmxvYXQocGl4ZWwgfHwgJzAnKTsgfTtcbnZhciBzaXplID0gZnVuY3Rpb24gKGlubGluZVNpemUsIGJsb2NrU2l6ZSwgc3dpdGNoU2l6ZXMpIHtcbiAgICBpZiAoaW5saW5lU2l6ZSA9PT0gdm9pZCAwKSB7IGlubGluZVNpemUgPSAwOyB9XG4gICAgaWYgKGJsb2NrU2l6ZSA9PT0gdm9pZCAwKSB7IGJsb2NrU2l6ZSA9IDA7IH1cbiAgICBpZiAoc3dpdGNoU2l6ZXMgPT09IHZvaWQgMCkgeyBzd2l0Y2hTaXplcyA9IGZhbHNlOyB9XG4gICAgcmV0dXJuIG5ldyBSZXNpemVPYnNlcnZlclNpemUoKHN3aXRjaFNpemVzID8gYmxvY2tTaXplIDogaW5saW5lU2l6ZSkgfHwgMCwgKHN3aXRjaFNpemVzID8gaW5saW5lU2l6ZSA6IGJsb2NrU2l6ZSkgfHwgMCk7XG59O1xudmFyIHplcm9Cb3hlcyA9IGZyZWV6ZSh7XG4gICAgZGV2aWNlUGl4ZWxDb250ZW50Qm94U2l6ZTogc2l6ZSgpLFxuICAgIGJvcmRlckJveFNpemU6IHNpemUoKSxcbiAgICBjb250ZW50Qm94U2l6ZTogc2l6ZSgpLFxuICAgIGNvbnRlbnRSZWN0OiBuZXcgRE9NUmVjdFJlYWRPbmx5KDAsIDAsIDAsIDApXG59KTtcbnZhciBjYWxjdWxhdGVCb3hTaXplcyA9IGZ1bmN0aW9uICh0YXJnZXQsIGZvcmNlUmVjYWxjdWxhdGlvbikge1xuICAgIGlmIChmb3JjZVJlY2FsY3VsYXRpb24gPT09IHZvaWQgMCkgeyBmb3JjZVJlY2FsY3VsYXRpb24gPSBmYWxzZTsgfVxuICAgIGlmIChjYWNoZS5oYXModGFyZ2V0KSAmJiAhZm9yY2VSZWNhbGN1bGF0aW9uKSB7XG4gICAgICAgIHJldHVybiBjYWNoZS5nZXQodGFyZ2V0KTtcbiAgICB9XG4gICAgaWYgKGlzSGlkZGVuKHRhcmdldCkpIHtcbiAgICAgICAgY2FjaGUuc2V0KHRhcmdldCwgemVyb0JveGVzKTtcbiAgICAgICAgcmV0dXJuIHplcm9Cb3hlcztcbiAgICB9XG4gICAgdmFyIGNzID0gZ2V0Q29tcHV0ZWRTdHlsZSh0YXJnZXQpO1xuICAgIHZhciBzdmcgPSBpc1NWRyh0YXJnZXQpICYmIHRhcmdldC5vd25lclNWR0VsZW1lbnQgJiYgdGFyZ2V0LmdldEJCb3goKTtcbiAgICB2YXIgcmVtb3ZlUGFkZGluZyA9ICFJRSAmJiBjcy5ib3hTaXppbmcgPT09ICdib3JkZXItYm94JztcbiAgICB2YXIgc3dpdGNoU2l6ZXMgPSB2ZXJ0aWNhbFJlZ2V4cC50ZXN0KGNzLndyaXRpbmdNb2RlIHx8ICcnKTtcbiAgICB2YXIgY2FuU2Nyb2xsVmVydGljYWxseSA9ICFzdmcgJiYgc2Nyb2xsUmVnZXhwLnRlc3QoY3Mub3ZlcmZsb3dZIHx8ICcnKTtcbiAgICB2YXIgY2FuU2Nyb2xsSG9yaXpvbnRhbGx5ID0gIXN2ZyAmJiBzY3JvbGxSZWdleHAudGVzdChjcy5vdmVyZmxvd1ggfHwgJycpO1xuICAgIHZhciBwYWRkaW5nVG9wID0gc3ZnID8gMCA6IHBhcnNlRGltZW5zaW9uKGNzLnBhZGRpbmdUb3ApO1xuICAgIHZhciBwYWRkaW5nUmlnaHQgPSBzdmcgPyAwIDogcGFyc2VEaW1lbnNpb24oY3MucGFkZGluZ1JpZ2h0KTtcbiAgICB2YXIgcGFkZGluZ0JvdHRvbSA9IHN2ZyA/IDAgOiBwYXJzZURpbWVuc2lvbihjcy5wYWRkaW5nQm90dG9tKTtcbiAgICB2YXIgcGFkZGluZ0xlZnQgPSBzdmcgPyAwIDogcGFyc2VEaW1lbnNpb24oY3MucGFkZGluZ0xlZnQpO1xuICAgIHZhciBib3JkZXJUb3AgPSBzdmcgPyAwIDogcGFyc2VEaW1lbnNpb24oY3MuYm9yZGVyVG9wV2lkdGgpO1xuICAgIHZhciBib3JkZXJSaWdodCA9IHN2ZyA/IDAgOiBwYXJzZURpbWVuc2lvbihjcy5ib3JkZXJSaWdodFdpZHRoKTtcbiAgICB2YXIgYm9yZGVyQm90dG9tID0gc3ZnID8gMCA6IHBhcnNlRGltZW5zaW9uKGNzLmJvcmRlckJvdHRvbVdpZHRoKTtcbiAgICB2YXIgYm9yZGVyTGVmdCA9IHN2ZyA/IDAgOiBwYXJzZURpbWVuc2lvbihjcy5ib3JkZXJMZWZ0V2lkdGgpO1xuICAgIHZhciBob3Jpem9udGFsUGFkZGluZyA9IHBhZGRpbmdMZWZ0ICsgcGFkZGluZ1JpZ2h0O1xuICAgIHZhciB2ZXJ0aWNhbFBhZGRpbmcgPSBwYWRkaW5nVG9wICsgcGFkZGluZ0JvdHRvbTtcbiAgICB2YXIgaG9yaXpvbnRhbEJvcmRlckFyZWEgPSBib3JkZXJMZWZ0ICsgYm9yZGVyUmlnaHQ7XG4gICAgdmFyIHZlcnRpY2FsQm9yZGVyQXJlYSA9IGJvcmRlclRvcCArIGJvcmRlckJvdHRvbTtcbiAgICB2YXIgaG9yaXpvbnRhbFNjcm9sbGJhclRoaWNrbmVzcyA9ICFjYW5TY3JvbGxIb3Jpem9udGFsbHkgPyAwIDogdGFyZ2V0Lm9mZnNldEhlaWdodCAtIHZlcnRpY2FsQm9yZGVyQXJlYSAtIHRhcmdldC5jbGllbnRIZWlnaHQ7XG4gICAgdmFyIHZlcnRpY2FsU2Nyb2xsYmFyVGhpY2tuZXNzID0gIWNhblNjcm9sbFZlcnRpY2FsbHkgPyAwIDogdGFyZ2V0Lm9mZnNldFdpZHRoIC0gaG9yaXpvbnRhbEJvcmRlckFyZWEgLSB0YXJnZXQuY2xpZW50V2lkdGg7XG4gICAgdmFyIHdpZHRoUmVkdWN0aW9uID0gcmVtb3ZlUGFkZGluZyA/IGhvcml6b250YWxQYWRkaW5nICsgaG9yaXpvbnRhbEJvcmRlckFyZWEgOiAwO1xuICAgIHZhciBoZWlnaHRSZWR1Y3Rpb24gPSByZW1vdmVQYWRkaW5nID8gdmVydGljYWxQYWRkaW5nICsgdmVydGljYWxCb3JkZXJBcmVhIDogMDtcbiAgICB2YXIgY29udGVudFdpZHRoID0gc3ZnID8gc3ZnLndpZHRoIDogcGFyc2VEaW1lbnNpb24oY3Mud2lkdGgpIC0gd2lkdGhSZWR1Y3Rpb24gLSB2ZXJ0aWNhbFNjcm9sbGJhclRoaWNrbmVzcztcbiAgICB2YXIgY29udGVudEhlaWdodCA9IHN2ZyA/IHN2Zy5oZWlnaHQgOiBwYXJzZURpbWVuc2lvbihjcy5oZWlnaHQpIC0gaGVpZ2h0UmVkdWN0aW9uIC0gaG9yaXpvbnRhbFNjcm9sbGJhclRoaWNrbmVzcztcbiAgICB2YXIgYm9yZGVyQm94V2lkdGggPSBjb250ZW50V2lkdGggKyBob3Jpem9udGFsUGFkZGluZyArIHZlcnRpY2FsU2Nyb2xsYmFyVGhpY2tuZXNzICsgaG9yaXpvbnRhbEJvcmRlckFyZWE7XG4gICAgdmFyIGJvcmRlckJveEhlaWdodCA9IGNvbnRlbnRIZWlnaHQgKyB2ZXJ0aWNhbFBhZGRpbmcgKyBob3Jpem9udGFsU2Nyb2xsYmFyVGhpY2tuZXNzICsgdmVydGljYWxCb3JkZXJBcmVhO1xuICAgIHZhciBib3hlcyA9IGZyZWV6ZSh7XG4gICAgICAgIGRldmljZVBpeGVsQ29udGVudEJveFNpemU6IHNpemUoTWF0aC5yb3VuZChjb250ZW50V2lkdGggKiBkZXZpY2VQaXhlbFJhdGlvKSwgTWF0aC5yb3VuZChjb250ZW50SGVpZ2h0ICogZGV2aWNlUGl4ZWxSYXRpbyksIHN3aXRjaFNpemVzKSxcbiAgICAgICAgYm9yZGVyQm94U2l6ZTogc2l6ZShib3JkZXJCb3hXaWR0aCwgYm9yZGVyQm94SGVpZ2h0LCBzd2l0Y2hTaXplcyksXG4gICAgICAgIGNvbnRlbnRCb3hTaXplOiBzaXplKGNvbnRlbnRXaWR0aCwgY29udGVudEhlaWdodCwgc3dpdGNoU2l6ZXMpLFxuICAgICAgICBjb250ZW50UmVjdDogbmV3IERPTVJlY3RSZWFkT25seShwYWRkaW5nTGVmdCwgcGFkZGluZ1RvcCwgY29udGVudFdpZHRoLCBjb250ZW50SGVpZ2h0KVxuICAgIH0pO1xuICAgIGNhY2hlLnNldCh0YXJnZXQsIGJveGVzKTtcbiAgICByZXR1cm4gYm94ZXM7XG59O1xudmFyIGNhbGN1bGF0ZUJveFNpemUgPSBmdW5jdGlvbiAodGFyZ2V0LCBvYnNlcnZlZEJveCwgZm9yY2VSZWNhbGN1bGF0aW9uKSB7XG4gICAgdmFyIF9hID0gY2FsY3VsYXRlQm94U2l6ZXModGFyZ2V0LCBmb3JjZVJlY2FsY3VsYXRpb24pLCBib3JkZXJCb3hTaXplID0gX2EuYm9yZGVyQm94U2l6ZSwgY29udGVudEJveFNpemUgPSBfYS5jb250ZW50Qm94U2l6ZSwgZGV2aWNlUGl4ZWxDb250ZW50Qm94U2l6ZSA9IF9hLmRldmljZVBpeGVsQ29udGVudEJveFNpemU7XG4gICAgc3dpdGNoIChvYnNlcnZlZEJveCkge1xuICAgICAgICBjYXNlIFJlc2l6ZU9ic2VydmVyQm94T3B0aW9ucy5ERVZJQ0VfUElYRUxfQ09OVEVOVF9CT1g6XG4gICAgICAgICAgICByZXR1cm4gZGV2aWNlUGl4ZWxDb250ZW50Qm94U2l6ZTtcbiAgICAgICAgY2FzZSBSZXNpemVPYnNlcnZlckJveE9wdGlvbnMuQk9SREVSX0JPWDpcbiAgICAgICAgICAgIHJldHVybiBib3JkZXJCb3hTaXplO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIGNvbnRlbnRCb3hTaXplO1xuICAgIH1cbn07XG5leHBvcnQgeyBjYWxjdWxhdGVCb3hTaXplLCBjYWxjdWxhdGVCb3hTaXplcyB9O1xuIiwiaW1wb3J0IHsgY2FsY3VsYXRlQm94U2l6ZXMgfSBmcm9tICcuL2FsZ29yaXRobXMvY2FsY3VsYXRlQm94U2l6ZSc7XG5pbXBvcnQgeyBmcmVlemUgfSBmcm9tICcuL3V0aWxzL2ZyZWV6ZSc7XG52YXIgUmVzaXplT2JzZXJ2ZXJFbnRyeSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUmVzaXplT2JzZXJ2ZXJFbnRyeSh0YXJnZXQpIHtcbiAgICAgICAgdmFyIGJveGVzID0gY2FsY3VsYXRlQm94U2l6ZXModGFyZ2V0KTtcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgIHRoaXMuY29udGVudFJlY3QgPSBib3hlcy5jb250ZW50UmVjdDtcbiAgICAgICAgdGhpcy5ib3JkZXJCb3hTaXplID0gZnJlZXplKFtib3hlcy5ib3JkZXJCb3hTaXplXSk7XG4gICAgICAgIHRoaXMuY29udGVudEJveFNpemUgPSBmcmVlemUoW2JveGVzLmNvbnRlbnRCb3hTaXplXSk7XG4gICAgICAgIHRoaXMuZGV2aWNlUGl4ZWxDb250ZW50Qm94U2l6ZSA9IGZyZWV6ZShbYm94ZXMuZGV2aWNlUGl4ZWxDb250ZW50Qm94U2l6ZV0pO1xuICAgIH1cbiAgICByZXR1cm4gUmVzaXplT2JzZXJ2ZXJFbnRyeTtcbn0oKSk7XG5leHBvcnQgeyBSZXNpemVPYnNlcnZlckVudHJ5IH07XG4iLCJpbXBvcnQgeyBpc0hpZGRlbiB9IGZyb20gJy4uL3V0aWxzL2VsZW1lbnQnO1xudmFyIGNhbGN1bGF0ZURlcHRoRm9yTm9kZSA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgaWYgKGlzSGlkZGVuKG5vZGUpKSB7XG4gICAgICAgIHJldHVybiBJbmZpbml0eTtcbiAgICB9XG4gICAgdmFyIGRlcHRoID0gMDtcbiAgICB2YXIgcGFyZW50ID0gbm9kZS5wYXJlbnROb2RlO1xuICAgIHdoaWxlIChwYXJlbnQpIHtcbiAgICAgICAgZGVwdGggKz0gMTtcbiAgICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGU7XG4gICAgfVxuICAgIHJldHVybiBkZXB0aDtcbn07XG5leHBvcnQgeyBjYWxjdWxhdGVEZXB0aEZvck5vZGUgfTtcbiIsImltcG9ydCB7IHJlc2l6ZU9ic2VydmVycyB9IGZyb20gJy4uL3V0aWxzL3Jlc2l6ZU9ic2VydmVycyc7XG5pbXBvcnQgeyBSZXNpemVPYnNlcnZlckVudHJ5IH0gZnJvbSAnLi4vUmVzaXplT2JzZXJ2ZXJFbnRyeSc7XG5pbXBvcnQgeyBjYWxjdWxhdGVEZXB0aEZvck5vZGUgfSBmcm9tICcuL2NhbGN1bGF0ZURlcHRoRm9yTm9kZSc7XG5pbXBvcnQgeyBjYWxjdWxhdGVCb3hTaXplIH0gZnJvbSAnLi9jYWxjdWxhdGVCb3hTaXplJztcbnZhciBicm9hZGNhc3RBY3RpdmVPYnNlcnZhdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNoYWxsb3dlc3REZXB0aCA9IEluZmluaXR5O1xuICAgIHZhciBjYWxsYmFja3MgPSBbXTtcbiAgICByZXNpemVPYnNlcnZlcnMuZm9yRWFjaChmdW5jdGlvbiBwcm9jZXNzT2JzZXJ2ZXIocm8pIHtcbiAgICAgICAgaWYgKHJvLmFjdGl2ZVRhcmdldHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVudHJpZXMgPSBbXTtcbiAgICAgICAgcm8uYWN0aXZlVGFyZ2V0cy5mb3JFYWNoKGZ1bmN0aW9uIHByb2Nlc3NUYXJnZXQob3QpIHtcbiAgICAgICAgICAgIHZhciBlbnRyeSA9IG5ldyBSZXNpemVPYnNlcnZlckVudHJ5KG90LnRhcmdldCk7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0RGVwdGggPSBjYWxjdWxhdGVEZXB0aEZvck5vZGUob3QudGFyZ2V0KTtcbiAgICAgICAgICAgIGVudHJpZXMucHVzaChlbnRyeSk7XG4gICAgICAgICAgICBvdC5sYXN0UmVwb3J0ZWRTaXplID0gY2FsY3VsYXRlQm94U2l6ZShvdC50YXJnZXQsIG90Lm9ic2VydmVkQm94KTtcbiAgICAgICAgICAgIGlmICh0YXJnZXREZXB0aCA8IHNoYWxsb3dlc3REZXB0aCkge1xuICAgICAgICAgICAgICAgIHNoYWxsb3dlc3REZXB0aCA9IHRhcmdldERlcHRoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY2FsbGJhY2tzLnB1c2goZnVuY3Rpb24gcmVzaXplT2JzZXJ2ZXJDYWxsYmFjaygpIHtcbiAgICAgICAgICAgIHJvLmNhbGxiYWNrLmNhbGwocm8ub2JzZXJ2ZXIsIGVudHJpZXMsIHJvLm9ic2VydmVyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJvLmFjdGl2ZVRhcmdldHMuc3BsaWNlKDAsIHJvLmFjdGl2ZVRhcmdldHMubGVuZ3RoKTtcbiAgICB9KTtcbiAgICBmb3IgKHZhciBfaSA9IDAsIGNhbGxiYWNrc18xID0gY2FsbGJhY2tzOyBfaSA8IGNhbGxiYWNrc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgY2FsbGJhY2sgPSBjYWxsYmFja3NfMVtfaV07XG4gICAgICAgIGNhbGxiYWNrKCk7XG4gICAgfVxuICAgIHJldHVybiBzaGFsbG93ZXN0RGVwdGg7XG59O1xuZXhwb3J0IHsgYnJvYWRjYXN0QWN0aXZlT2JzZXJ2YXRpb25zIH07XG4iLCJpbXBvcnQgeyByZXNpemVPYnNlcnZlcnMgfSBmcm9tICcuLi91dGlscy9yZXNpemVPYnNlcnZlcnMnO1xuaW1wb3J0IHsgY2FsY3VsYXRlRGVwdGhGb3JOb2RlIH0gZnJvbSAnLi9jYWxjdWxhdGVEZXB0aEZvck5vZGUnO1xudmFyIGdhdGhlckFjdGl2ZU9ic2VydmF0aW9uc0F0RGVwdGggPSBmdW5jdGlvbiAoZGVwdGgpIHtcbiAgICByZXNpemVPYnNlcnZlcnMuZm9yRWFjaChmdW5jdGlvbiBwcm9jZXNzT2JzZXJ2ZXIocm8pIHtcbiAgICAgICAgcm8uYWN0aXZlVGFyZ2V0cy5zcGxpY2UoMCwgcm8uYWN0aXZlVGFyZ2V0cy5sZW5ndGgpO1xuICAgICAgICByby5za2lwcGVkVGFyZ2V0cy5zcGxpY2UoMCwgcm8uc2tpcHBlZFRhcmdldHMubGVuZ3RoKTtcbiAgICAgICAgcm8ub2JzZXJ2YXRpb25UYXJnZXRzLmZvckVhY2goZnVuY3Rpb24gcHJvY2Vzc1RhcmdldChvdCkge1xuICAgICAgICAgICAgaWYgKG90LmlzQWN0aXZlKCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2FsY3VsYXRlRGVwdGhGb3JOb2RlKG90LnRhcmdldCkgPiBkZXB0aCkge1xuICAgICAgICAgICAgICAgICAgICByby5hY3RpdmVUYXJnZXRzLnB1c2gob3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcm8uc2tpcHBlZFRhcmdldHMucHVzaChvdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn07XG5leHBvcnQgeyBnYXRoZXJBY3RpdmVPYnNlcnZhdGlvbnNBdERlcHRoIH07XG4iLCJpbXBvcnQgeyBoYXNBY3RpdmVPYnNlcnZhdGlvbnMgfSBmcm9tICcuLi9hbGdvcml0aG1zL2hhc0FjdGl2ZU9ic2VydmF0aW9ucyc7XG5pbXBvcnQgeyBoYXNTa2lwcGVkT2JzZXJ2YXRpb25zIH0gZnJvbSAnLi4vYWxnb3JpdGhtcy9oYXNTa2lwcGVkT2JzZXJ2YXRpb25zJztcbmltcG9ydCB7IGRlbGl2ZXJSZXNpemVMb29wRXJyb3IgfSBmcm9tICcuLi9hbGdvcml0aG1zL2RlbGl2ZXJSZXNpemVMb29wRXJyb3InO1xuaW1wb3J0IHsgYnJvYWRjYXN0QWN0aXZlT2JzZXJ2YXRpb25zIH0gZnJvbSAnLi4vYWxnb3JpdGhtcy9icm9hZGNhc3RBY3RpdmVPYnNlcnZhdGlvbnMnO1xuaW1wb3J0IHsgZ2F0aGVyQWN0aXZlT2JzZXJ2YXRpb25zQXREZXB0aCB9IGZyb20gJy4uL2FsZ29yaXRobXMvZ2F0aGVyQWN0aXZlT2JzZXJ2YXRpb25zQXREZXB0aCc7XG52YXIgcHJvY2VzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZGVwdGggPSAwO1xuICAgIGdhdGhlckFjdGl2ZU9ic2VydmF0aW9uc0F0RGVwdGgoZGVwdGgpO1xuICAgIHdoaWxlIChoYXNBY3RpdmVPYnNlcnZhdGlvbnMoKSkge1xuICAgICAgICBkZXB0aCA9IGJyb2FkY2FzdEFjdGl2ZU9ic2VydmF0aW9ucygpO1xuICAgICAgICBnYXRoZXJBY3RpdmVPYnNlcnZhdGlvbnNBdERlcHRoKGRlcHRoKTtcbiAgICB9XG4gICAgaWYgKGhhc1NraXBwZWRPYnNlcnZhdGlvbnMoKSkge1xuICAgICAgICBkZWxpdmVyUmVzaXplTG9vcEVycm9yKCk7XG4gICAgfVxuICAgIHJldHVybiBkZXB0aCA+IDA7XG59O1xuZXhwb3J0IHsgcHJvY2VzcyB9O1xuIiwidmFyIHRyaWdnZXI7XG52YXIgY2FsbGJhY2tzID0gW107XG52YXIgbm90aWZ5ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gY2FsbGJhY2tzLnNwbGljZSgwKS5mb3JFYWNoKGZ1bmN0aW9uIChjYikgeyByZXR1cm4gY2IoKTsgfSk7IH07XG52YXIgcXVldWVNaWNyb1Rhc2sgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICBpZiAoIXRyaWdnZXIpIHtcbiAgICAgICAgdmFyIHRvZ2dsZV8xID0gMDtcbiAgICAgICAgdmFyIGVsXzEgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgICAgIHZhciBjb25maWcgPSB7IGNoYXJhY3RlckRhdGE6IHRydWUgfTtcbiAgICAgICAgbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKCkgeyByZXR1cm4gbm90aWZ5KCk7IH0pLm9ic2VydmUoZWxfMSwgY29uZmlnKTtcbiAgICAgICAgdHJpZ2dlciA9IGZ1bmN0aW9uICgpIHsgZWxfMS50ZXh0Q29udGVudCA9IFwiXCIgKyAodG9nZ2xlXzEgPyB0b2dnbGVfMS0tIDogdG9nZ2xlXzErKyk7IH07XG4gICAgfVxuICAgIGNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcbiAgICB0cmlnZ2VyKCk7XG59O1xuZXhwb3J0IHsgcXVldWVNaWNyb1Rhc2sgfTtcbiIsImltcG9ydCB7IHF1ZXVlTWljcm9UYXNrIH0gZnJvbSAnLi9xdWV1ZU1pY3JvVGFzayc7XG52YXIgcXVldWVSZXNpemVPYnNlcnZlciA9IGZ1bmN0aW9uIChjYikge1xuICAgIHF1ZXVlTWljcm9UYXNrKGZ1bmN0aW9uIFJlc2l6ZU9ic2VydmVyKCkge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2IpO1xuICAgIH0pO1xufTtcbmV4cG9ydCB7IHF1ZXVlUmVzaXplT2JzZXJ2ZXIgfTtcbiIsImltcG9ydCB7IHByb2Nlc3MgfSBmcm9tICcuL3Byb2Nlc3MnO1xuaW1wb3J0IHsgZ2xvYmFsIH0gZnJvbSAnLi9nbG9iYWwnO1xuaW1wb3J0IHsgcXVldWVSZXNpemVPYnNlcnZlciB9IGZyb20gJy4vcXVldWVSZXNpemVPYnNlcnZlcic7XG52YXIgd2F0Y2hpbmcgPSAwO1xudmFyIGlzV2F0Y2hpbmcgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAhIXdhdGNoaW5nOyB9O1xudmFyIENBVENIX1BFUklPRCA9IDI1MDtcbnZhciBvYnNlcnZlckNvbmZpZyA9IHsgYXR0cmlidXRlczogdHJ1ZSwgY2hhcmFjdGVyRGF0YTogdHJ1ZSwgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH07XG52YXIgZXZlbnRzID0gW1xuICAgICdyZXNpemUnLFxuICAgICdsb2FkJyxcbiAgICAndHJhbnNpdGlvbmVuZCcsXG4gICAgJ2FuaW1hdGlvbmVuZCcsXG4gICAgJ2FuaW1hdGlvbnN0YXJ0JyxcbiAgICAnYW5pbWF0aW9uaXRlcmF0aW9uJyxcbiAgICAna2V5dXAnLFxuICAgICdrZXlkb3duJyxcbiAgICAnbW91c2V1cCcsXG4gICAgJ21vdXNlZG93bicsXG4gICAgJ21vdXNlb3ZlcicsXG4gICAgJ21vdXNlb3V0JyxcbiAgICAnYmx1cicsXG4gICAgJ2ZvY3VzJ1xuXTtcbnZhciB0aW1lID0gZnVuY3Rpb24gKHRpbWVvdXQpIHtcbiAgICBpZiAodGltZW91dCA9PT0gdm9pZCAwKSB7IHRpbWVvdXQgPSAwOyB9XG4gICAgcmV0dXJuIERhdGUubm93KCkgKyB0aW1lb3V0O1xufTtcbnZhciBzY2hlZHVsZWQgPSBmYWxzZTtcbnZhciBTY2hlZHVsZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNjaGVkdWxlcigpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5zdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5saXN0ZW5lciA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLnNjaGVkdWxlKCk7IH07XG4gICAgfVxuICAgIFNjaGVkdWxlci5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKHRpbWVvdXQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRpbWVvdXQgPT09IHZvaWQgMCkgeyB0aW1lb3V0ID0gQ0FUQ0hfUEVSSU9EOyB9XG4gICAgICAgIGlmIChzY2hlZHVsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzY2hlZHVsZWQgPSB0cnVlO1xuICAgICAgICB2YXIgdW50aWwgPSB0aW1lKHRpbWVvdXQpO1xuICAgICAgICBxdWV1ZVJlc2l6ZU9ic2VydmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBlbGVtZW50c0hhdmVSZXNpemVkID0gZmFsc2U7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnRzSGF2ZVJlc2l6ZWQgPSBwcm9jZXNzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICBzY2hlZHVsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aW1lb3V0ID0gdW50aWwgLSB0aW1lKCk7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1dhdGNoaW5nKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudHNIYXZlUmVzaXplZCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5ydW4oMTAwMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRpbWVvdXQgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnJ1bih0aW1lb3V0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFNjaGVkdWxlci5wcm90b3R5cGUuc2NoZWR1bGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICB0aGlzLnJ1bigpO1xuICAgIH07XG4gICAgU2NoZWR1bGVyLnByb3RvdHlwZS5vYnNlcnZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgY2IgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5vYnNlcnZlciAmJiBfdGhpcy5vYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmJvZHksIG9ic2VydmVyQ29uZmlnKTsgfTtcbiAgICAgICAgZG9jdW1lbnQuYm9keSA/IGNiKCkgOiBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGNiKTtcbiAgICB9O1xuICAgIFNjaGVkdWxlci5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLnN0b3BwZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcHBlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5vYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXMubGlzdGVuZXIpO1xuICAgICAgICAgICAgdGhpcy5vYnNlcnZlKCk7XG4gICAgICAgICAgICBldmVudHMuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgX3RoaXMubGlzdGVuZXIsIHRydWUpOyB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU2NoZWR1bGVyLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoIXRoaXMuc3RvcHBlZCkge1xuICAgICAgICAgICAgdGhpcy5vYnNlcnZlciAmJiB0aGlzLm9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIGV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBnbG9iYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihuYW1lLCBfdGhpcy5saXN0ZW5lciwgdHJ1ZSk7IH0pO1xuICAgICAgICAgICAgdGhpcy5zdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIFNjaGVkdWxlcjtcbn0oKSk7XG52YXIgc2NoZWR1bGVyID0gbmV3IFNjaGVkdWxlcigpO1xudmFyIHVwZGF0ZUNvdW50ID0gZnVuY3Rpb24gKG4pIHtcbiAgICAhd2F0Y2hpbmcgJiYgbiA+IDAgJiYgc2NoZWR1bGVyLnN0YXJ0KCk7XG4gICAgd2F0Y2hpbmcgKz0gbjtcbiAgICAhd2F0Y2hpbmcgJiYgc2NoZWR1bGVyLnN0b3AoKTtcbn07XG5leHBvcnQgeyBzY2hlZHVsZXIsIHVwZGF0ZUNvdW50IH07XG4iLCJpbXBvcnQgeyBSZXNpemVPYnNlcnZlckJveE9wdGlvbnMgfSBmcm9tICcuL1Jlc2l6ZU9ic2VydmVyQm94T3B0aW9ucyc7XG5pbXBvcnQgeyBjYWxjdWxhdGVCb3hTaXplIH0gZnJvbSAnLi9hbGdvcml0aG1zL2NhbGN1bGF0ZUJveFNpemUnO1xuaW1wb3J0IHsgaXNTVkcsIGlzUmVwbGFjZWRFbGVtZW50IH0gZnJvbSAnLi91dGlscy9lbGVtZW50JztcbnZhciBza2lwTm90aWZ5T25FbGVtZW50ID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIHJldHVybiAhaXNTVkcodGFyZ2V0KVxuICAgICAgICAmJiAhaXNSZXBsYWNlZEVsZW1lbnQodGFyZ2V0KVxuICAgICAgICAmJiBnZXRDb21wdXRlZFN0eWxlKHRhcmdldCkuZGlzcGxheSA9PT0gJ2lubGluZSc7XG59O1xudmFyIFJlc2l6ZU9ic2VydmF0aW9uID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBSZXNpemVPYnNlcnZhdGlvbih0YXJnZXQsIG9ic2VydmVkQm94KSB7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICB0aGlzLm9ic2VydmVkQm94ID0gb2JzZXJ2ZWRCb3ggfHwgUmVzaXplT2JzZXJ2ZXJCb3hPcHRpb25zLkNPTlRFTlRfQk9YO1xuICAgICAgICB0aGlzLmxhc3RSZXBvcnRlZFNpemUgPSB7XG4gICAgICAgICAgICBpbmxpbmVTaXplOiAwLFxuICAgICAgICAgICAgYmxvY2tTaXplOiAwXG4gICAgICAgIH07XG4gICAgfVxuICAgIFJlc2l6ZU9ic2VydmF0aW9uLnByb3RvdHlwZS5pc0FjdGl2ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHNpemUgPSBjYWxjdWxhdGVCb3hTaXplKHRoaXMudGFyZ2V0LCB0aGlzLm9ic2VydmVkQm94LCB0cnVlKTtcbiAgICAgICAgaWYgKHNraXBOb3RpZnlPbkVsZW1lbnQodGhpcy50YXJnZXQpKSB7XG4gICAgICAgICAgICB0aGlzLmxhc3RSZXBvcnRlZFNpemUgPSBzaXplO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmxhc3RSZXBvcnRlZFNpemUuaW5saW5lU2l6ZSAhPT0gc2l6ZS5pbmxpbmVTaXplXG4gICAgICAgICAgICB8fCB0aGlzLmxhc3RSZXBvcnRlZFNpemUuYmxvY2tTaXplICE9PSBzaXplLmJsb2NrU2l6ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgcmV0dXJuIFJlc2l6ZU9ic2VydmF0aW9uO1xufSgpKTtcbmV4cG9ydCB7IFJlc2l6ZU9ic2VydmF0aW9uIH07XG4iLCJ2YXIgUmVzaXplT2JzZXJ2ZXJEZXRhaWwgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFJlc2l6ZU9ic2VydmVyRGV0YWlsKHJlc2l6ZU9ic2VydmVyLCBjYWxsYmFjaykge1xuICAgICAgICB0aGlzLmFjdGl2ZVRhcmdldHMgPSBbXTtcbiAgICAgICAgdGhpcy5za2lwcGVkVGFyZ2V0cyA9IFtdO1xuICAgICAgICB0aGlzLm9ic2VydmF0aW9uVGFyZ2V0cyA9IFtdO1xuICAgICAgICB0aGlzLm9ic2VydmVyID0gcmVzaXplT2JzZXJ2ZXI7XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICB9XG4gICAgcmV0dXJuIFJlc2l6ZU9ic2VydmVyRGV0YWlsO1xufSgpKTtcbmV4cG9ydCB7IFJlc2l6ZU9ic2VydmVyRGV0YWlsIH07XG4iLCJpbXBvcnQgeyBzY2hlZHVsZXIsIHVwZGF0ZUNvdW50IH0gZnJvbSAnLi91dGlscy9zY2hlZHVsZXInO1xuaW1wb3J0IHsgUmVzaXplT2JzZXJ2YXRpb24gfSBmcm9tICcuL1Jlc2l6ZU9ic2VydmF0aW9uJztcbmltcG9ydCB7IFJlc2l6ZU9ic2VydmVyRGV0YWlsIH0gZnJvbSAnLi9SZXNpemVPYnNlcnZlckRldGFpbCc7XG5pbXBvcnQgeyByZXNpemVPYnNlcnZlcnMgfSBmcm9tICcuL3V0aWxzL3Jlc2l6ZU9ic2VydmVycyc7XG52YXIgb2JzZXJ2ZXJNYXAgPSBuZXcgV2Vha01hcCgpO1xudmFyIGdldE9ic2VydmF0aW9uSW5kZXggPSBmdW5jdGlvbiAob2JzZXJ2YXRpb25UYXJnZXRzLCB0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9ic2VydmF0aW9uVGFyZ2V0cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAob2JzZXJ2YXRpb25UYXJnZXRzW2ldLnRhcmdldCA9PT0gdGFyZ2V0KSB7XG4gICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gLTE7XG59O1xudmFyIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyKCkge1xuICAgIH1cbiAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIuY29ubmVjdCA9IGZ1bmN0aW9uIChyZXNpemVPYnNlcnZlciwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIGRldGFpbCA9IG5ldyBSZXNpemVPYnNlcnZlckRldGFpbChyZXNpemVPYnNlcnZlciwgY2FsbGJhY2spO1xuICAgICAgICBvYnNlcnZlck1hcC5zZXQocmVzaXplT2JzZXJ2ZXIsIGRldGFpbCk7XG4gICAgfTtcbiAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIub2JzZXJ2ZSA9IGZ1bmN0aW9uIChyZXNpemVPYnNlcnZlciwgdGFyZ2V0LCBvcHRpb25zKSB7XG4gICAgICAgIHZhciBkZXRhaWwgPSBvYnNlcnZlck1hcC5nZXQocmVzaXplT2JzZXJ2ZXIpO1xuICAgICAgICB2YXIgZmlyc3RPYnNlcnZhdGlvbiA9IGRldGFpbC5vYnNlcnZhdGlvblRhcmdldHMubGVuZ3RoID09PSAwO1xuICAgICAgICBpZiAoZ2V0T2JzZXJ2YXRpb25JbmRleChkZXRhaWwub2JzZXJ2YXRpb25UYXJnZXRzLCB0YXJnZXQpIDwgMCkge1xuICAgICAgICAgICAgZmlyc3RPYnNlcnZhdGlvbiAmJiByZXNpemVPYnNlcnZlcnMucHVzaChkZXRhaWwpO1xuICAgICAgICAgICAgZGV0YWlsLm9ic2VydmF0aW9uVGFyZ2V0cy5wdXNoKG5ldyBSZXNpemVPYnNlcnZhdGlvbih0YXJnZXQsIG9wdGlvbnMgJiYgb3B0aW9ucy5ib3gpKTtcbiAgICAgICAgICAgIHVwZGF0ZUNvdW50KDEpO1xuICAgICAgICAgICAgc2NoZWR1bGVyLnNjaGVkdWxlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci51bm9ic2VydmUgPSBmdW5jdGlvbiAocmVzaXplT2JzZXJ2ZXIsIHRhcmdldCkge1xuICAgICAgICB2YXIgZGV0YWlsID0gb2JzZXJ2ZXJNYXAuZ2V0KHJlc2l6ZU9ic2VydmVyKTtcbiAgICAgICAgdmFyIGluZGV4ID0gZ2V0T2JzZXJ2YXRpb25JbmRleChkZXRhaWwub2JzZXJ2YXRpb25UYXJnZXRzLCB0YXJnZXQpO1xuICAgICAgICB2YXIgbGFzdE9ic2VydmF0aW9uID0gZGV0YWlsLm9ic2VydmF0aW9uVGFyZ2V0cy5sZW5ndGggPT09IDE7XG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgICBsYXN0T2JzZXJ2YXRpb24gJiYgcmVzaXplT2JzZXJ2ZXJzLnNwbGljZShyZXNpemVPYnNlcnZlcnMuaW5kZXhPZihkZXRhaWwpLCAxKTtcbiAgICAgICAgICAgIGRldGFpbC5vYnNlcnZhdGlvblRhcmdldHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIHVwZGF0ZUNvdW50KC0xKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLmRpc2Nvbm5lY3QgPSBmdW5jdGlvbiAocmVzaXplT2JzZXJ2ZXIpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGRldGFpbCA9IG9ic2VydmVyTWFwLmdldChyZXNpemVPYnNlcnZlcik7XG4gICAgICAgIGRldGFpbC5vYnNlcnZhdGlvblRhcmdldHMuc2xpY2UoKS5mb3JFYWNoKGZ1bmN0aW9uIChvdCkgeyByZXR1cm4gX3RoaXMudW5vYnNlcnZlKHJlc2l6ZU9ic2VydmVyLCBvdC50YXJnZXQpOyB9KTtcbiAgICAgICAgZGV0YWlsLmFjdGl2ZVRhcmdldHMuc3BsaWNlKDAsIGRldGFpbC5hY3RpdmVUYXJnZXRzLmxlbmd0aCk7XG4gICAgfTtcbiAgICByZXR1cm4gUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyO1xufSgpKTtcbmV4cG9ydCB7IFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlciB9O1xuIiwiaW1wb3J0IHsgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyIH0gZnJvbSAnLi9SZXNpemVPYnNlcnZlckNvbnRyb2xsZXInO1xuaW1wb3J0IHsgaXNFbGVtZW50IH0gZnJvbSAnLi91dGlscy9lbGVtZW50JztcbnZhciBSZXNpemVPYnNlcnZlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUmVzaXplT2JzZXJ2ZXIoY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJGYWlsZWQgdG8gY29uc3RydWN0ICdSZXNpemVPYnNlcnZlcic6IDEgYXJndW1lbnQgcmVxdWlyZWQsIGJ1dCBvbmx5IDAgcHJlc2VudC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkZhaWxlZCB0byBjb25zdHJ1Y3QgJ1Jlc2l6ZU9ic2VydmVyJzogVGhlIGNhbGxiYWNrIHByb3ZpZGVkIGFzIHBhcmFtZXRlciAxIGlzIG5vdCBhIGZ1bmN0aW9uLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIuY29ubmVjdCh0aGlzLCBjYWxsYmFjayk7XG4gICAgfVxuICAgIFJlc2l6ZU9ic2VydmVyLnByb3RvdHlwZS5vYnNlcnZlID0gZnVuY3Rpb24gKHRhcmdldCwgb3B0aW9ucykge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkZhaWxlZCB0byBleGVjdXRlICdvYnNlcnZlJyBvbiAnUmVzaXplT2JzZXJ2ZXInOiAxIGFyZ3VtZW50IHJlcXVpcmVkLCBidXQgb25seSAwIHByZXNlbnQuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNFbGVtZW50KHRhcmdldCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJGYWlsZWQgdG8gZXhlY3V0ZSAnb2JzZXJ2ZScgb24gJ1Jlc2l6ZU9ic2VydmVyJzogcGFyYW1ldGVyIDEgaXMgbm90IG9mIHR5cGUgJ0VsZW1lbnRcIik7XG4gICAgICAgIH1cbiAgICAgICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLm9ic2VydmUodGhpcywgdGFyZ2V0LCBvcHRpb25zKTtcbiAgICB9O1xuICAgIFJlc2l6ZU9ic2VydmVyLnByb3RvdHlwZS51bm9ic2VydmUgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRmFpbGVkIHRvIGV4ZWN1dGUgJ3Vub2JzZXJ2ZScgb24gJ1Jlc2l6ZU9ic2VydmVyJzogMSBhcmd1bWVudCByZXF1aXJlZCwgYnV0IG9ubHkgMCBwcmVzZW50LlwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzRWxlbWVudCh0YXJnZXQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRmFpbGVkIHRvIGV4ZWN1dGUgJ3Vub2JzZXJ2ZScgb24gJ1Jlc2l6ZU9ic2VydmVyJzogcGFyYW1ldGVyIDEgaXMgbm90IG9mIHR5cGUgJ0VsZW1lbnRcIik7XG4gICAgICAgIH1cbiAgICAgICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLnVub2JzZXJ2ZSh0aGlzLCB0YXJnZXQpO1xuICAgIH07XG4gICAgUmVzaXplT2JzZXJ2ZXIucHJvdG90eXBlLmRpc2Nvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5kaXNjb25uZWN0KHRoaXMpO1xuICAgIH07XG4gICAgUmVzaXplT2JzZXJ2ZXIudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAnZnVuY3Rpb24gUmVzaXplT2JzZXJ2ZXIgKCkgeyBbcG9seWZpbGwgY29kZV0gfSc7XG4gICAgfTtcbiAgICByZXR1cm4gUmVzaXplT2JzZXJ2ZXI7XG59KCkpO1xuZXhwb3J0IHsgUmVzaXplT2JzZXJ2ZXIgfTtcbiIsImltcG9ydCB7IFJlc2l6ZU9ic2VydmVyIGFzIFBvbHlmaWxsIH0gZnJvbSAnQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXInXG5jb25zdCBSZXNpemVPYnNlcnZlciA9IHdpbmRvdy5SZXNpemVPYnNlcnZlciB8fCBQb2x5ZmlsbFxuXG5pbXBvcnQgcmVtb3ZlSXRlbSBmcm9tICcuL3V0aWxzL3JlbW92ZS1hcnJheS1pdGVtJ1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50RW1pdHRlcidcbmltcG9ydCB7XG4gIGdldERpc3RhbmNlLFxuICBpbmRleE9mTmVhcmVzdFBvaW50XG59IGZyb20gJy4vZ2VvbWV0cnkvZGlzdGFuY2VzJ1xuXG5pbXBvcnQgRHJhZ2dhYmxlIGZyb20gJy4vZHJhZ2dhYmxlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0IGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoZHJhZ2dhYmxlcywgb3B0aW9ucz17fSkge1xuICAgIHN1cGVyKG9wdGlvbnMpXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICB0aW1lRW5kOiAyMDAsXG4gICAgICB0aW1lRXhjYW5nZTogNDAwLFxuICAgICAgcmFkaXVzOiAzMFxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0aGlzLmNvbnRhaW5lciA9IG9wdGlvbnMuY29udGFpbmVyXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gZHJhZ2dhYmxlc1xuICAgIHRoaXMuY2hhbmdlZER1cmluZ0l0ZXJhdGlvbiA9IGZhbHNlXG5cbiAgICB0aGlzLnJlc2l6ZU9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKCgpID0+IHtcbiAgICAgIGlmKHRoaXMub3B0aW9ucy5yZW9yZGVyT25DaGFuZ2UpIHRoaXMucmVzZXQoKVxuICAgICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGQpID0+IGQuc3RhcnRQb3NpdGlvbmluZygpKVxuICAgIH0pXG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGQpID0+IHRoaXMucmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZShkLmVsZW1lbnQpKVxuXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5fZW5hYmxlID0gdHJ1ZVxuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKHRoaXMuaW5pdERyYWdnYWJsZSwgdGhpcylcbiAgfVxuXG4gIGluaXREcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgZHJhZ2dhYmxlLmVuYWJsZSA9IHRoaXMuX2VuYWJsZVxuICAgIGRyYWdnYWJsZS5vbignZHJhZzptb3ZlJywgKCkgPT4gdGhpcy5vbk1vdmUoZHJhZ2dhYmxlKSlcbiAgICBkcmFnZ2FibGUuZHJhZ0VuZEFjdGlvbiA9ICgpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5waW5Qb3NpdGlvbihkcmFnZ2FibGUucGlubmVkUG9zaXRpb24sIHRoaXMub3B0aW9ucy50aW1lRW5kKVxuICAgICAgdGhpcy5vbkVuZChkcmFnZ2FibGUpXG4gICAgfVxuICB9XG5cbiAgb25Nb3ZlKGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IHNvcnRlZERyYWdnYWJsZXMgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuICAgIGNvbnN0IHBpbm5lZFBvc2l0aW9ucyA9IHNvcnRlZERyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbilcblxuICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IHNvcnRlZERyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpXG4gICAgY29uc3QgdGFyZ2V0SW5kZXggPSBpbmRleE9mTmVhcmVzdFBvaW50KHBpbm5lZFBvc2l0aW9ucywgZHJhZ2dhYmxlLnBvc2l0aW9uLCB0aGlzLm9wdGlvbnMucmFkaXVzLCB0aGlzLmRpc3RhbmNlRnVuYylcblxuICAgIGlmICh0YXJnZXRJbmRleCAhPT0gLTEgJiYgY3VycmVudEluZGV4ICE9PSB0YXJnZXRJbmRleCkge1xuICAgICAgaWYgKHRhcmdldEluZGV4IDwgY3VycmVudEluZGV4KSB7XG4gICAgICAgIGZvciAobGV0IGk9dGFyZ2V0SW5kZXg7IGk8Y3VycmVudEluZGV4OyBpKyspIHtcbiAgICAgICAgICBzb3J0ZWREcmFnZ2FibGVzW2ldLnBpblBvc2l0aW9uKHBpbm5lZFBvc2l0aW9uc1tpKzFdLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAobGV0IGk9Y3VycmVudEluZGV4OyBpPHRhcmdldEluZGV4OyBpKyspIHtcbiAgICAgICAgICBzb3J0ZWREcmFnZ2FibGVzW2krMV0ucGluUG9zaXRpb24ocGlubmVkUG9zaXRpb25zW2ldLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGRyYWdnYWJsZS5uYXRpdmVEcmFnQW5kRHJvcCkge1xuICAgICAgICBkcmFnZ2FibGUucGluUG9zaXRpb24ocGlubmVkUG9zaXRpb25zW3RhcmdldEluZGV4XSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbiA9IHBpbm5lZFBvc2l0aW9uc1t0YXJnZXRJbmRleF1cbiAgICAgIH1cblxuICAgICAgdGhpcy5jaGFuZ2VkRHVyaW5nSXRlcmF0aW9uID0gdHJ1ZVxuICAgIH1cbiAgfVxuXG4gIG9uRW5kKCkge1xuICAgIGlmKHRoaXMuY2hhbmdlZER1cmluZ0l0ZXJhdGlvbikge1xuICAgICAgdGhpcy5lbWl0KCdsaXN0OmNoYW5nZScpXG4gICAgICB0aGlzLmNoYW5nZWREdXJpbmdJdGVyYXRpb24gPSBmYWxzZVxuXG4gICAgICBpZih0aGlzLm9wdGlvbnMucmVvcmRlck9uQ2hhbmdlICYmIHRoaXMub3B0aW9ucy5jb250YWluZXIpIHtcbiAgICAgICAgdGhpcy5yZW9yZGVyRWxlbWVudHMoKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlb3JkZXJFbGVtZW50cygpIHtcbiAgICBjb25zdCBvcmRlcmVkRWxlbWVudHMgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKS5tYXAoKGQpID0+IGQuZWxlbWVudClcbiAgICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKVxuICAgIG9yZGVyZWRFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiBmcmFnbWVudC5hcHBlbmRDaGlsZChlbGVtZW50KSlcblxuICAgIHRoaXMucmVzZXQoKVxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGZyYWdtZW50KVxuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkKSA9PiBkLnN0YXJ0UG9zaXRpb25pbmcoKSlcblxuICAgIHRoaXMuZW1pdCgnbGlzdDpyZW9yZGVyZWQnKVxuICB9XG5cbiAgZ2V0Q3VycmVudFBpbm5lZFBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5kcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24uY2xvbmUoKSlcbiAgfVxuXG4gIGdldFNvcnRlZERyYWdnYWJsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJhZ2dhYmxlcy5zb3J0KHRoaXMuc29ydGluZy5iaW5kKHRoaXMpKVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnJlc2V0UG9zaXRpb25Ub0luaXRpYWwoKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnJlZnJlc2goKSlcbiAgfVxuXG4gIGFkZChkcmFnZ2FibGVzKSB7XG4gICAgaWYgKCEoZHJhZ2dhYmxlcyBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgZHJhZ2dhYmxlcyA9IFtkcmFnZ2FibGVzXVxuICAgIH1cbiAgICBkcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gdGhpcy5pbml0RHJhZ2dhYmxlKGRyYWdnYWJsZSkpXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gdGhpcy5kcmFnZ2FibGVzLmNvbmNhdChkcmFnZ2FibGVzKVxuICB9XG5cbiAgcmVtb3ZlKGRyYWdnYWJsZXMpIHtcbiAgICBjb25zdCBpbml0aWFsUG9zaXRpb25zID0gdGhpcy5kcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uKVxuICAgIGNvbnN0IGxpc3QgPSBbXVxuICAgIGNvbnN0IHNvcnRlZERyYWdnYWJsZXMgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuXG4gICAgaWYgKCEoZHJhZ2dhYmxlcyBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgZHJhZ2dhYmxlcyA9IFtkcmFnZ2FibGVzXVxuICAgIH1cblxuICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUucmVzZXRPbignZHJhZzplbmQnKVxuICAgICAgZHJhZ2dhYmxlLnJlc2V0T24oJ2RyYWc6bW92ZScpXG4gICAgICByZW1vdmVJdGVtKHRoaXMuZHJhZ2dhYmxlcywgZHJhZ2dhYmxlKVxuICAgIH0pXG5cbiAgICBsZXQgaiA9IDBcbiAgICBzb3J0ZWREcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgaWYgKHRoaXMuZHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkgIT09IC0xKSB7XG4gICAgICAgIGlmIChkcmFnZ2FibGUucGlubmVkUG9zaXRpb24gIT09IGluaXRpYWxQb3NpdGlvbnNbal0pIHtcbiAgICAgICAgICBkcmFnZ2FibGUucGluUG9zaXRpb24oaW5pdGlhbFBvc2l0aW9uc1tqXSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICB9XG4gICAgICAgIGRyYWdnYWJsZS5pbml0aWFsUG9zaXRpb24gPSBpbml0aWFsUG9zaXRpb25zW2pdXG4gICAgICAgIGorK1xuICAgICAgICBsaXN0LnB1c2goZHJhZ2dhYmxlKVxuICAgICAgfVxuICAgIH0pXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gbGlzdFxuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5yZW1vdmUodGhpcy5kcmFnZ2FibGVzLnNsaWNlKCkpXG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5kZXN0cm95KCkpXG4gIH1cblxuICBzb3J0aW5nKGRyYWdnYWJsZUEsIGRyYWdnYWJsZUIpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLnNvcnRpbmcpIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuc29ydGluZyhkcmFnZ2FibGVBLCBkcmFnZ2FibGVCKVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZHJhZ2dhYmxlQS5waW5uZWRQb3NpdGlvbi55IDwgZHJhZ2dhYmxlQi5waW5uZWRQb3NpdGlvbi55KSByZXR1cm4gLTFcbiAgICAgIGlmIChkcmFnZ2FibGVBLnBpbm5lZFBvc2l0aW9uLnkgPiBkcmFnZ2FibGVCLnBpbm5lZFBvc2l0aW9uLnkpIHJldHVybiAxXG4gICAgICBpZiAoZHJhZ2dhYmxlQS5waW5uZWRQb3NpdGlvbi54IDwgZHJhZ2dhYmxlQi5waW5uZWRQb3NpdGlvbi54KSByZXR1cm4gLTFcbiAgICAgIGlmIChkcmFnZ2FibGVBLnBpbm5lZFBvc2l0aW9uLnggPiBkcmFnZ2FibGVCLnBpbm5lZFBvc2l0aW9uLngpIHJldHVybiAxXG4gICAgICByZXR1cm4gMFxuICAgIH1cbiAgfVxuXG4gIGdldCBkaXN0YW5jZUZ1bmMoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5nZXREaXN0YW5jZSB8fCBnZXREaXN0YW5jZVxuICB9XG5cbiAgZ2V0IHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDdXJyZW50UGlubmVkUG9zaXRpb25zKClcbiAgfVxuXG4gIHNldCBwb3NpdGlvbnMocG9zaXRpb25zKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9ICd3cm9uZyBhcnJheSBsZW5ndGgnXG4gICAgaWYgKHBvc2l0aW9ucy5sZW5ndGggPT09IHRoaXMuZHJhZ2dhYmxlcy5sZW5ndGgpIHtcbiAgICAgIHBvc2l0aW9ucy5mb3JFYWNoKChwb2ludCwgaSkgPT4ge1xuICAgICAgICB0aGlzLmRyYWdnYWJsZXNbaV0ucGluUG9zaXRpb24ocG9pbnQpXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBtZXNzYWdlXG4gICAgfVxuICB9XG5cbiAgZ2V0IGVuYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlXG4gIH1cblxuICBzZXQgZW5hYmxlKGVuYWJsZSkge1xuICAgIHRoaXMuX2VuYWJsZSA9IGVuYWJsZVxuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5lbmFibGUgPSBlbmFibGVcbiAgICB9KVxuICB9XG5cbiAgc3RhdGljIGZhY3RvcnkoY29udGFpbmVyRWxlbWVudCwgZWxlbWVudHMsIG9wdGlvbnM9e30pIHtcbiAgICBjb25zdCBkcmFnZ2FibGVzID0gQXJyYXkuZnJvbShlbGVtZW50cykubWFwKChlbGVtZW50KSA9PiB7XG4gICAgICByZXR1cm4gbmV3IERyYWdnYWJsZShlbGVtZW50LCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgY29udGFpbmVyOiBjb250YWluZXJFbGVtZW50XG4gICAgICB9LCBvcHRpb25zLmRyYWdnYWJsZSB8fCB7fSkpXG4gICAgfSlcblxuICAgIHJldHVybiBuZXcgTGlzdChkcmFnZ2FibGVzLCBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyRWxlbWVudFxuICAgIH0sIG9wdGlvbnMubGlzdCB8fCB7fSkpXG4gIH1cbn1cbiIsImltcG9ydCBMaXN0IGZyb20gJy4vbGlzdCdcbmltcG9ydCB7IGluZGV4T2ZOZWFyZXN0UG9pbnQsIGdldFlEaWZmZXJlbmNlIH0gZnJvbSAnLi9nZW9tZXRyeS9kaXN0YW5jZXMnXG5cbmltcG9ydCBEcmFnZ2FibGUgZnJvbSAnLi9kcmFnZ2FibGUnXG5cbmNvbnN0IGFycmF5TW92ZSA9IChhcnJheSwgZnJvbSwgdG8pID0+IHtcbiAgYXJyYXkuc3BsaWNlKHRvIDwgMCA/IGFycmF5Lmxlbmd0aCArIHRvIDogdG8sIDAsIGFycmF5LnNwbGljZShmcm9tLCAxKVswXSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnViYmxpbmdMaXN0IGV4dGVuZHMgTGlzdCB7XG4gIGNvbnN0cnVjdG9yKGRyYWdnYWJsZXMsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcihkcmFnZ2FibGVzLCBvcHRpb25zKVxuICB9XG5cbiAgaW5pdERyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICBkcmFnZ2FibGUub24oJ2RyYWc6c3RhcnQnLCAoKSA9PiB0aGlzLmF1dG9EZXRlY3RWZXJ0aWNhbEdhcChkcmFnZ2FibGUpKVxuICAgIHN1cGVyLmluaXREcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICB9XG5cbiAgYXV0b0RldGVjdFZlcnRpY2FsR2FwKCkge1xuICAgIGlmICh0aGlzLmRyYWdnYWJsZXMubGVuZ3RoID49IDIpIHtcbiAgICAgIGNvbnN0IHNvcnRlZCA9IHRoaXMuZ2V0U29ydGVkRHJhZ2dhYmxlcygpXG5cbiAgICAgIHRoaXMudmVydGljYWxHYXAgPSBzb3J0ZWRbMV0ucGlubmVkUG9zaXRpb24ueSAtIHNvcnRlZFswXS5waW5uZWRQb3NpdGlvbi55IC0gc29ydGVkWzBdLmdldFNpemUoKS55XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudmVydGljYWxHYXAgPSAwXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZHJhZ2dhYmxlcy5sZW5ndGggPj0gMSkge1xuICAgICAgdGhpcy5zdGFydFBvc2l0aW9uID0gdGhpcy5kcmFnZ2FibGVzWzBdLnBpbm5lZFBvc2l0aW9uXG4gICAgfVxuICB9XG5cbiAgb25Nb3ZlKGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IHNvcnRlZERyYWdnYWJsZXMgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuICAgIGNvbnN0IHBpbm5lZFBvc2l0aW9ucyA9IHNvcnRlZERyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbilcblxuICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IHNvcnRlZERyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpXG4gICAgY29uc3QgdGFyZ2V0SW5kZXggPSBpbmRleE9mTmVhcmVzdFBvaW50KHBpbm5lZFBvc2l0aW9ucywgZHJhZ2dhYmxlLnBvc2l0aW9uLCB0aGlzLm9wdGlvbnMucmFkaXVzLCB0aGlzLmRpc3RhbmNlRnVuYylcblxuICAgIGlmICh0YXJnZXRJbmRleCAhPT0gLTEgJiYgY3VycmVudEluZGV4ICE9PSB0YXJnZXRJbmRleCkge1xuICAgICAgYXJyYXlNb3ZlKHNvcnRlZERyYWdnYWJsZXMsIGN1cnJlbnRJbmRleCwgdGFyZ2V0SW5kZXgpXG4gICAgICB0aGlzLmJ1YmJsaW5nKHNvcnRlZERyYWdnYWJsZXMsIGRyYWdnYWJsZSlcbiAgICAgIHRoaXMuY2hhbmdlZER1cmluZ0l0ZXJhdGlvbiA9IHRydWVcbiAgICB9XG4gIH1cblxuICBidWJibGluZyhzb3J0ZWREcmFnZ2FibGVzLCBjdXJyZW50RHJhZ2dhYmxlKSB7XG4gICAgY29uc3QgY3VycmVudFBvc2l0aW9uID0gdGhpcy5zdGFydFBvc2l0aW9uLmNsb25lKClcblxuICAgIHNvcnRlZERyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBpZiAoIWRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbi5jb21wYXJlKGN1cnJlbnRQb3NpdGlvbikpIHtcbiAgICAgICAgaWYgKGRyYWdnYWJsZSA9PT0gY3VycmVudERyYWdnYWJsZSAmJiAhY3VycmVudERyYWdnYWJsZS5uYXRpdmVEcmFnQW5kRHJvcCkge1xuICAgICAgICAgIGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbiA9IGN1cnJlbnRQb3NpdGlvbi5jbG9uZSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKGN1cnJlbnRQb3NpdGlvbiwgKGRyYWdnYWJsZSA9PT0gY3VycmVudERyYWdnYWJsZSkgPyAwIDogdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGN1cnJlbnRQb3NpdGlvbi55ID0gY3VycmVudFBvc2l0aW9uLnkgKyBkcmFnZ2FibGUuZ2V0U2l6ZSgpLnkgKyB0aGlzLnZlcnRpY2FsR2FwXG4gICAgfSlcbiAgfVxuXG4gIGdldCBkaXN0YW5jZUZ1bmMoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5nZXREaXN0YW5jZSB8fCBnZXRZRGlmZmVyZW5jZVxuICB9XG5cbiAgc3RhdGljIGZhY3RvcnkoY29udGFpbmVyRWxlbWVudCwgZWxlbWVudHMsIG9wdGlvbnM9e30pIHtcbiAgICBjb25zdCBkcmFnZ2FibGVzID0gQXJyYXkuZnJvbShlbGVtZW50cykubWFwKChlbGVtZW50KSA9PiB7XG4gICAgICByZXR1cm4gbmV3IERyYWdnYWJsZShlbGVtZW50LCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgY29udGFpbmVyOiBjb250YWluZXJFbGVtZW50XG4gICAgICB9LCBvcHRpb25zLmRyYWdnYWJsZSB8fCB7fSkpXG4gICAgfSlcblxuICAgIHJldHVybiBuZXcgQnViYmxpbmdMaXN0KGRyYWdnYWJsZXMsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgY29udGFpbmVyOiBjb250YWluZXJFbGVtZW50XG4gICAgfSwgb3B0aW9ucy5saXN0IHx8IHt9KSlcbiAgfVxufVxuIl0sIm5hbWVzIjpbImdldFN1bVZhbHVlT2ZTdHlsZVJ1bGVzIiwiZWxlbWVudCIsInJ1bGVzIiwicmVkdWNlIiwic3VtIiwicnVsZSIsInBhcnNlSW50Iiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIlBvaW50IiwieCIsInkiLCJwIiwiayIsInBhcmVudCIsInBhcmVudE5vZGUiLCJlbGVtZW50UmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInBhcmVudFJlY3QiLCJsZWZ0IiwidG9wIiwiaXNDb250ZW50Qm94U2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwiUmVjdGFuZ2xlIiwicG9zaXRpb24iLCJzaXplIiwiYWRkIiwibXVsdCIsInJlY3QiLCJNYXRoIiwibWluIiwibWF4Iiwic3ViIiwicmVjdGFuZ2xlIiwiaW5jbHVkZVBvaW50IiwiZ2V0UDMiLCJheGlzIiwic2VsQXhpcyIsImNyb3NzUmVjdGFuZ2xlIiwiYW5kIiwidGhpc0NlbnRlciIsImdldENlbnRlciIsInJlY3RDZW50ZXIiLCJzaWduIiwib2Zmc2V0IiwiZWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzdHlsZSIsImlzQ29uc2lkZXJUcmFuc2xhdGUiLCJlbGVtZW50T2Zmc2V0IiwiZWxlbWVudFNpemUiLCJnZXREZWZhdWx0Q29udGFpbmVyIiwiY29udGFpbmVyIiwidGFnTmFtZSIsIkV2ZW50RW1pdHRlciIsIm9wdGlvbnMiLCJldmVudHMiLCJvbiIsIk9iamVjdCIsImVudHJpZXMiLCJldmVudE5hbWUiLCJmbiIsImludGVycnVwdGVkIiwiYXJncyIsInNsaWNlIiwiY2FsbCIsImFyZ3VtZW50cyIsImZ1bmMiLCJwdXNoIiwidW5zaGlmdCIsImluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsImdldERpc3RhbmNlIiwicDEiLCJwMiIsImR4IiwiZHkiLCJzcXJ0IiwiZ2V0WERpZmZlcmVuY2UiLCJhYnMiLCJnZXRZRGlmZmVyZW5jZSIsInRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3RvcnkiLCJwb3ciLCJpbmRleE9mTmVhcmVzdFBvaW50IiwiYXJyIiwidmFsIiwicmFkaXVzIiwiZ2V0RGlzdGFuY2VGdW5jIiwiaSIsInRlbXAiLCJsZW5ndGgiLCJkaXJlY3RDcm9zc2luZyIsIkwxUDEiLCJMMVAyIiwiTDJQMSIsIkwyUDIiLCJrMSIsImsyIiwiYjEiLCJiMiIsImJvdW5kVG9MaW5lIiwiQSIsIkIiLCJQIiwiQVAiLCJBQiIsImFiMiIsImFwX2FiIiwidCIsImdldFBvaW50T25MaW5lQnlMZW5naHQiLCJMUDEiLCJMUDIiLCJsZW5naHQiLCJwZXJjZW50IiwiYWRkUG9pbnRUb0JvdW5kUG9pbnRzIiwiYm91bmRwb2ludHMiLCJwb2ludCIsImlzUmlnaHQiLCJyZXN1bHQiLCJmaWx0ZXIiLCJiUG9pbnQiLCJnZXRBbmdsZURpZmYiLCJhbHBoYSIsImJldGEiLCJtaW5BbmdsZSIsIm1heEFuZ2xlIiwiUEkiLCJnZXRBbmdsZSIsImRpZmYiLCJub3JtYWxpemVBbmdsZSIsImF0YW4yIiwiYm91bmRBbmdsZSIsImRtaW4iLCJkbWF4IiwiZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtIiwiYW5nbGUiLCJjZW50ZXIiLCJjb3MiLCJzaW4iLCJCb3VuZCIsIl9zaXplIiwiaW5zdGFuY2UiLCJib3VuZCIsImJpbmQiLCJCb3VuZFRvUmVjdGFuZ2xlIiwiY2FsY1BvaW50IiwiY2xvbmUiLCJyZWN0UDIiLCJCb3VuZFRvRWxlbWVudCIsImZyb21FbGVtZW50IiwiQm91bmRUb0xpbmVYIiwic3RhcnRZIiwiZW5kWSIsIkJvdW5kVG9MaW5lWSIsInN0YXJ0WCIsImVuZFgiLCJCb3VuZFRvTGluZSIsInN0YXJ0UG9pbnQiLCJlbmRQb2ludCIsInNvbWVLIiwiY29zQmV0YSIsInNpbkJldGEiLCJwb2ludDIiLCJuZXdFbmRQb2ludCIsInBvaW50Q3Jvc3NpbmciLCJCb3VuZFRvQ2lyY2xlIiwiQm91bmRUb0FyYyIsInN0YXJ0QW5nbGUiLCJlbmRBbmdsZSIsIl9zdGFydEFuZ2xlIiwiX2VuZEFuZ2xlIiwiYXJyYXkiLCJyYW5nZSIsInN0YXJ0Iiwic3RvcCIsInN0ZXAiLCJCYXNpY1N0cmF0ZWd5IiwiTm90Q3Jvc3NpbmdTdHJhdGVneSIsInJlY3RhbmdsZUxpc3QiLCJpbmRleGVzT2ZOZXdzIiwic3RhdGljUmVjdGFuZ2xlSW5kZXhlcyIsImluZGV4ZXMiLCJfcmVjdCIsImZvckVhY2giLCJyZW1vdmFibGUiLCJpbmRleE9mU3RhdGljIiwic3RhdGljUmVjdCIsIm1vdmVUb0JvdW5kIiwic29tZSIsImJvdW5kUmVjdCIsImdldFNxdWFyZSIsIm9kbERyYWdnYWJsZXNMaXN0IiwibmV3RHJhZ2dhYmxlcyIsImluZGV4T2ZOZXdzIiwiZHJhZ2dhYmxlcyIsImNvbmNhdCIsImRyYWdnYWJsZSIsIkZsb2F0TGVmdFN0cmF0ZWd5IiwiYXNzaWduIiwicGFkZGluZ1RvcExlZnQiLCJwYWRkaW5nQm90dG9tUmlnaHQiLCJ5R2FwQmV0d2VlbkRyYWdnYWJsZXMiLCJnZXRQb3NpdGlvbiIsIl9pbmRleGVzT2ZOZXdzIiwiZ2V0UDIiLCJib3VuZGFyeVBvaW50cyIsInJlY3RJbmRleCIsImlzVmFsaWQiLCJuZXdMaXN0IiwibGlzdE9sZFBvc2l0aW9uIiwibWFwIiwibmV3RHJhZ2dhYmxlIiwiRmxvYXRSaWdodFN0cmF0ZWd5IiwicGFkZGluZ1RvcFJpZ2h0IiwicGFkZGluZ0JvdHRvbUxlZnQiLCJwYWRkaW5nQm90dG9tTmVnTGVmdCIsImdldFA0IiwiYWRkVG9EZWZhdWx0U2NvcGUiLCJ0YXJnZXQiLCJkZWZhdWx0U2NvcGUiLCJhZGRUYXJnZXQiLCJUYXJnZXQiLCJ0aW1lRW5kIiwidGltZUV4Y2FuZ2UiLCJwb3NpdGlvbmluZ1N0cmF0ZWd5Iiwic3RyYXRlZ3kiLCJnZXRSZWN0YW5nbGUiLCJ0YXJnZXRzIiwiZW1pdHRlciIsImVtaXQiLCJzdGFydEJvdW5kaW5nIiwiaW5pdCIsImJvdW5kaW5nIiwiaW5kZXhlc09mTmV3IiwicG9zaXRpb25pbmciLCJvbGREcmFnZ2FibGVzIiwic29ydGluZyIsInJlY3RhbmdsZXMiLCJpbm5lckRyYWdnYWJsZXMiLCJzZXRQb3NpdGlvbiIsImNhdGNoRHJhZ2dhYmxlIiwidGFyZ2V0UmVjdGFuZ2xlIiwiZHJhZ2dhYmxlU3F1YXJlIiwic2NvcGVzIiwic2NvcGUiLCJyZW1vdmVJdGVtIiwibmV3RHJhZ2dhYmxlc0luZGV4IiwiZ2V0U2l6ZSIsImFkZFJlbW92ZU9uTW92ZSIsInRpbWUiLCJtb3ZlIiwiaW5pdGlhbFBvc2l0aW9uIiwicHVzaElubmVyRHJhZ2dhYmxlIiwicmVtb3ZlSGFuZGxlciIsInJlbW92ZSIsInVuc3Vic2NyaWJlIiwiX2NvbnRhaW5lciIsIlNjb3BlIiwiZHJhZ0VuZEFjdGlvbiIsIm9uRW5kIiwic2hvdFRhcmdldHMiLCJzb3J0IiwiYSIsImIiLCJwaW5Qb3NpdGlvbiIsInJlc2V0IiwicmVmcmVzaCIsInBvc2l0aW9ucyIsIm1lc3NhZ2UiLCJ0YXJnZXRJbmRleGVzIiwiY3VycmVudFNjb3BlIiwiYWRkRHJhZ2dhYmxlVG9TY29wZSIsImFkZERyYWdnYWJsZSIsIkRyYWdnYWJsZSIsImludGVycnVwdCIsImFkZFRhcmdldFRvU2NvcGUiLCJwcmVwZW5kT24iLCJjaGVja1N1cHBvcnRQYXNzaXZlRXZlbnRzIiwicGFzc2l2ZVN1cHBvcnRlZCIsImRlZmluZVByb3BlcnR5IiwiZ2V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJfZXJyIiwiaXNTdXBwb3J0UGFzc2l2ZUV2ZW50cyIsImlzVG91Y2giLCJtb3VzZUV2ZW50cyIsImVuZCIsInRvdWNoRXZlbnRzIiwidHJhbnNmb3JtUHJvcGVydHkiLCJnZXRTdHlsZVByb3BlcnR5IiwidHJhbnNpdGlvblByb3BlcnR5IiwiZ2V0VG91Y2hCeUlEIiwidG91Y2hJZCIsImNoYW5nZWRUb3VjaGVzIiwiaWRlbnRpZmllciIsInByZXZlbnREb3VibGVJbml0IiwiZXhpc3RpbmciLCJjb3B5U3R5bGVzIiwic291cmNlIiwiZGVzdGluYXRpb24iLCJjcyIsImtleSIsImNoaWxkcmVuIiwiX2VuYWJsZSIsInN0YXJ0UG9zaXRpb25pbmciLCJzdGFydExpc3RlbmluZyIsIl9zZXREZWZhdWx0VHJhbnNpdGlvbiIsInBpbm5lZFBvc2l0aW9uIiwiX2RyYWdTdGFydCIsImV2ZW50IiwiZHJhZ1N0YXJ0IiwiX2RyYWdNb3ZlIiwiZHJhZ01vdmUiLCJfZHJhZ0VuZCIsImRyYWdFbmQiLCJfbmF0aXZlRHJhZ1N0YXJ0IiwibmF0aXZlRHJhZ1N0YXJ0IiwiX25hdGl2ZURyYWdPdmVyIiwibmF0aXZlRHJhZ092ZXIiLCJfbmF0aXZlRHJhZ0VuZCIsIm5hdGl2ZURyYWdFbmQiLCJfbmF0aXZlRHJvcCIsIm5hdGl2ZURyb3AiLCJfc2Nyb2xsIiwib25TY3JvbGwiLCJoYW5kbGVyIiwicGFzc2l2ZSIsIl90cmFuc2Zvcm1Qb3NpdGlvbiIsInRyYW5zaXRpb24iLCJ0cmFuc2l0aW9uQ3NzIiwidGVzdCIsInJlcGxhY2UiLCJ0cmFuc2xhdGVDc3MiLCJ0cmFuc2Zvcm0iLCJzaG91bGRSZW1vdmVaZXJvVHJhbnNsYXRlIiwiaXNTaWxlbnQiLCJkZXRlcm1pbmVEaXJlY3Rpb24iLCJfc2V0VHJhbnNpdGlvbiIsIl9zZXRUcmFuc2xhdGUiLCJzaWxlbnQiLCJsZWZ0RGlyZWN0aW9uIiwicmlnaHREaXJlY3Rpb24iLCJ1cERpcmVjdGlvbiIsImRvd25EaXJlY3Rpb24iLCJjdXJyZW50RXZlbnQiLCJpc1RvdWNoRXZlbnQiLCJUb3VjaEV2ZW50IiwidG91Y2hQb2ludCIsIl9zdGFydFRvdWNoUG9pbnQiLCJwYWdlWCIsImNsaWVudFgiLCJwYWdlWSIsImNsaWVudFkiLCJfc3RhcnRQb3NpdGlvbiIsIl90b3VjaElkIiwiX3N0YXJ0U2Nyb2xsUG9pbnQiLCJzY3JvbGxYIiwic2Nyb2xsWSIsInN0b3BQcm9wYWdhdGlvbiIsIkhUTUxJbnB1dEVsZW1lbnQiLCJmb2N1cyIsIm5hdGl2ZURyYWdBbmREcm9wIiwicHJldmVudERlZmF1bHQiLCJpc1NhZmFyaSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcE9uVG91Y2giLCJlbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3BGb3JBbGwiLCJlbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3AiLCJpc0RyYWdnaW5nIiwiY2xhc3NMaXN0IiwidG91Y2giLCJzY3JvbGxQb2ludCIsInJlbW92ZUF0dHJpYnV0ZSIsInNldFRpbWVvdXQiLCJfZXZlbnQiLCJkYXRhVHJhbnNmZXIiLCJzZXREYXRhIiwiZWZmZWN0QWxsb3dlZCIsImRyb3BFZmZlY3QiLCJjb250YWluZXJSZWN0IiwiY2xvbmVkRWxlbWVudCIsImNsb25lTm9kZSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImVtdWxhdGlvbkRyYWdnYWJsZSIsImNvbnRhaW5lclJlY3RQb2ludCIsImRlc3Ryb3kiLCJyZW1vdmVDaGlsZCIsInJlc2V0RW1pdHRlciIsIl9oYW5kbGVyIiwiZW5hYmxlIiwiUmVzaXplT2JzZXJ2ZXIiLCJQb2x5ZmlsbCIsIkxpc3QiLCJjaGFuZ2VkRHVyaW5nSXRlcmF0aW9uIiwicmVzaXplT2JzZXJ2ZXIiLCJyZW9yZGVyT25DaGFuZ2UiLCJkIiwib2JzZXJ2ZSIsImluaXREcmFnZ2FibGUiLCJvbk1vdmUiLCJzb3J0ZWREcmFnZ2FibGVzIiwiZ2V0U29ydGVkRHJhZ2dhYmxlcyIsInBpbm5lZFBvc2l0aW9ucyIsImN1cnJlbnRJbmRleCIsInRhcmdldEluZGV4IiwiZGlzdGFuY2VGdW5jIiwicmVvcmRlckVsZW1lbnRzIiwib3JkZXJlZEVsZW1lbnRzIiwiZnJhZ21lbnQiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwicmVzZXRQb3NpdGlvblRvSW5pdGlhbCIsIkFycmF5IiwiaW5pdGlhbFBvc2l0aW9ucyIsImxpc3QiLCJyZXNldE9uIiwiaiIsImRyYWdnYWJsZUEiLCJkcmFnZ2FibGVCIiwiZ2V0Q3VycmVudFBpbm5lZFBvc2l0aW9ucyIsImNvbnRhaW5lckVsZW1lbnQiLCJlbGVtZW50cyIsImZyb20iLCJhcnJheU1vdmUiLCJ0byIsIkJ1YmJsaW5nTGlzdCIsImF1dG9EZXRlY3RWZXJ0aWNhbEdhcCIsInNvcnRlZCIsInZlcnRpY2FsR2FwIiwic3RhcnRQb3NpdGlvbiIsImJ1YmJsaW5nIiwiY3VycmVudERyYWdnYWJsZSIsImN1cnJlbnRQb3NpdGlvbiIsImNvbXBhcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUFBLFNBQVNBLHVCQUFULENBQWlDQyxPQUFqQyxFQUEwQ0MsS0FBMUMsRUFBaUQ7RUFDL0MsRUFBT0EsT0FBQUEsS0FBSyxDQUFDQyxNQUFOLENBQWEsVUFBQ0MsR0FBRCxFQUFNQyxJQUFOLEVBQWU7RUFDakMsSUFBQSxPQUFPRCxHQUFHLEdBQUdFLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QlAsT0FBeEIsQ0FBQSxDQUFpQ0ksSUFBakMsQ0FBQSxJQUF3QyxDQUF6QyxDQUFyQixDQUFBO0VBQ0QsR0FGTSxFQUVKLENBRkksQ0FBUCxDQUFBO0VBR0QsQ0FBQTtFQUVEOzs7TUFDcUJJO0VBQ25CO0VBQ0Y7RUFDQTtFQUNBO0VBQ0E7RUFDRSxFQUFZQyxTQUFBQSxLQUFBQSxDQUFBQSxDQUFaLEVBQWVDLENBQWYsRUFBa0I7RUFBQSxJQUFBLGVBQUEsQ0FBQSxJ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
