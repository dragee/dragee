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
        var elementRect = element.getBoundingClientRect();
        return new Point(elementRect.width, elementRect.height);
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
        var isConsiderTranslate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var position = Point.elementOffset(element, parent, isConsiderTranslate);
        var size = Point.elementSize(element);
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
        return Rectangle.fromElement(this.element, this.container, true);
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
        return Point.elementSize(this.element);
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

        this._startWindowScrollPoint = this.windowScrollPoint;
        this._startParentsScrollPoint = this.parentsScrollPoint;

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
        this.parents.forEach(function (p) {
          return p.addEventListener('scroll', _this3._scroll);
        });
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

        var point = this._startPosition.add(this.touchPoint.sub(this._startTouchPoint)).add(this.windowScrollPoint.sub(this._startWindowScrollPoint)).add(this.parentsScrollPoint.sub(this._startParentsScrollPoint));

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
        var point = this._startPosition.add(this.touchPoint.sub(this._startTouchPoint)).add(this.windowScrollPoint.sub(this._startWindowScrollPoint)).add(this.parentsScrollPoint.sub(this._startParentsScrollPoint));

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

        var point = this._startPosition.add(this.touchPoint.sub(this._startTouchPoint)).add(this.windowScrollPoint.sub(this._startWindowScrollPoint)).add(this.parentsScrollPoint.sub(this._startParentsScrollPoint));

        point = this.bounding.bound(point, this.getSize());
        this.determineDirection(point);
        this.position = point;
        this.emit('drag:move');
      }
    }, {
      key: "nativeDragEnd",
      value: function nativeDragEnd(_event) {
        var _this5 = this;

        this.element.classList.remove('dragee-placeholder');
        this.dragEndAction();
        this.emit('drag:end');
        document.removeEventListener('dragover', this._nativeDragOver);
        document.removeEventListener('dragend', this._nativeDragEnd);
        document.removeEventListener(mouseEvents.end, this._nativeDragEnd);
        document.removeEventListener('drop', this._nativeDrop);
        window.removeEventListener('scroll', this._scroll);
        this.parents.forEach(function (p) {
          return p.removeEventListener('scroll', _this5._scroll);
        });
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
        var _this6 = this;

        document.removeEventListener(touchEvents.move, this._dragMove);
        document.removeEventListener(mouseEvents.move, this._dragMove);
        document.removeEventListener(touchEvents.end, this._dragEnd);
        document.removeEventListener(mouseEvents.end, this._dragEnd);
        document.removeEventListener(mouseEvents.end, this._nativeDragEnd);
        window.removeEventListener('scroll', this._scroll);
        this.parents.forEach(function (p) {
          return p.removeEventListener('scroll', _this6._scroll);
        });
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
        var _this7 = this;

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
              _this7.position = emulationDraggable.position.sub(containerRectPoint).sub(_this7._startWindowScrollPoint).add(_this7._startParentsScrollPoint);

              _this7.determineDirection(_this7.position);

              _this7.emit('drag:move');
            },
            'drag:end': function dragEnd() {
              emulationDraggable.destroy();
              document.body.removeChild(clonedElement);

              _this7.element.classList.remove('dragee-placeholder');

              _this7.element.classList.remove('dragee-active');

              _this7.emit('drag:end');

              _this7.dragEndAction();

              _this7.cancelDragging();
            }
          }
        });
        var containerRectPoint = new Point(containerRect.left, containerRect.top);
        emulationDraggable._startWindowScrollPoint = this._startWindowScrollPoint;
        emulationDraggable.move(this.pinnedPosition.add(containerRectPoint).add(this.windowScrollPoint).sub(this.parentsScrollPoint));
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
      key: "windowScrollPoint",
      get: function get() {
        return new Point(window.scrollX, window.scrollY);
      }
    }, {
      key: "parents",
      get: function get() {
        if (this._cachedParents) return this._cachedParents;
        this._cachedParents = [];
        var element = this.element;

        while (element.parentNode && element != this.container) {
          this._cachedParents.unshift(element.parentNode);

          element = element.parentNode;
        }

        return this._cachedParents;
      }
    }, {
      key: "parentsScrollPoint",
      get: function get() {
        return new Point(this.parents.reduce(function (sum, p) {
          return sum + p.scrollLeft;
        }, 0), this.parents.reduce(function (sum, p) {
          return sum + p.scrollTop;
        }, 0));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZGV2LmpzIiwic291cmNlcyI6WyIuLi9zcmMvZ2VvbWV0cnkvcG9pbnQuanMiLCIuLi9zcmMvZ2VvbWV0cnkvcmVjdGFuZ2xlLmpzIiwiLi4vc3JjL3V0aWxzL2dldC1kZWZhdWx0LWNvbnRhaW5lci5qcyIsIi4uL3NyYy9ldmVudEVtaXR0ZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvZGVzYW5kcm8tZ2V0LXN0eWxlLXByb3BlcnR5L2dldC1zdHlsZS1wcm9wZXJ0eS5qcyIsIi4uL3NyYy9nZW9tZXRyeS9kaXN0YW5jZXMuanMiLCIuLi9zcmMvZ2VvbWV0cnkvYm91bmRzLmpzIiwiLi4vc3JjL2dlb21ldHJ5L2FuZ2xlcy5qcyIsIi4uL3NyYy9ib3VuZGluZy5qcyIsIi4uL3NyYy91dGlscy9yZW1vdmUtYXJyYXktaXRlbS5qcyIsIi4uL3NyYy91dGlscy9yYW5nZS5qcyIsIi4uL3NyYy9wb3NpdGlvbmluZy5qcyIsIi4uL3NyYy90YXJnZXQuanMiLCIuLi9zcmMvc2NvcGUuanMiLCIuLi9zcmMvdXRpbHMvaXMtc3VwcG9ydC1wYXNzaXZlLWV2ZW50cy5qcyIsIi4uL3NyYy91dGlscy90aHJvdHRsZS5qcyIsIi4uL3NyYy9kcmFnZ2FibGUuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL3V0aWxzL3Jlc2l6ZU9ic2VydmVycy5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvYWxnb3JpdGhtcy9oYXNBY3RpdmVPYnNlcnZhdGlvbnMuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL2FsZ29yaXRobXMvaGFzU2tpcHBlZE9ic2VydmF0aW9ucy5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvYWxnb3JpdGhtcy9kZWxpdmVyUmVzaXplTG9vcEVycm9yLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BqdWdnbGUvcmVzaXplLW9ic2VydmVyL2xpYi9SZXNpemVPYnNlcnZlckJveE9wdGlvbnMuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL3V0aWxzL2ZyZWV6ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvUmVzaXplT2JzZXJ2ZXJTaXplLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BqdWdnbGUvcmVzaXplLW9ic2VydmVyL2xpYi9ET01SZWN0UmVhZE9ubHkuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL3V0aWxzL2VsZW1lbnQuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL3V0aWxzL2dsb2JhbC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvYWxnb3JpdGhtcy9jYWxjdWxhdGVCb3hTaXplLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BqdWdnbGUvcmVzaXplLW9ic2VydmVyL2xpYi9SZXNpemVPYnNlcnZlckVudHJ5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BqdWdnbGUvcmVzaXplLW9ic2VydmVyL2xpYi9hbGdvcml0aG1zL2NhbGN1bGF0ZURlcHRoRm9yTm9kZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvYWxnb3JpdGhtcy9icm9hZGNhc3RBY3RpdmVPYnNlcnZhdGlvbnMuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL2FsZ29yaXRobXMvZ2F0aGVyQWN0aXZlT2JzZXJ2YXRpb25zQXREZXB0aC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvdXRpbHMvcHJvY2Vzcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvdXRpbHMvcXVldWVNaWNyb1Rhc2suanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL3V0aWxzL3F1ZXVlUmVzaXplT2JzZXJ2ZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL3V0aWxzL3NjaGVkdWxlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvUmVzaXplT2JzZXJ2YXRpb24uanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL1Jlc2l6ZU9ic2VydmVyRGV0YWlsLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BqdWdnbGUvcmVzaXplLW9ic2VydmVyL2xpYi9SZXNpemVPYnNlcnZlckNvbnRyb2xsZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL1Jlc2l6ZU9ic2VydmVyLmpzIiwiLi4vc3JjL3V0aWxzL2RlYm91bmNlLmpzIiwiLi4vc3JjL2xpc3QuanMiLCIuLi9zcmMvYnViYmxpbmdMaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKiBDbGFzcyByZXByZXNlbnRpbmcgYSBwb2ludC4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvaW50IHtcbiAgLyoqXG4gICogQ3JlYXRlIGEgcG9pbnQuXG4gICogQHBhcmFtIHtudW1iZXJ9IHggLSBUaGUgeCB2YWx1ZS5cbiAgKiBAcGFyYW0ge251bWJlcn0geSAtIFRoZSB5IHZhbHVlLlxuICAqL1xuICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgdGhpcy54ID0geFxuICAgIHRoaXMueSA9IHlcbiAgfVxuXG4gIGFkZChwKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnggKyBwLngsIHRoaXMueSArIHAueSlcbiAgfVxuXG4gIHN1YihwKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnggLSBwLngsIHRoaXMueSAtIHAueSlcbiAgfVxuXG4gIG11bHQoaykge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54ICogaywgdGhpcy55ICogaylcbiAgfVxuXG4gIG5lZ2F0aXZlKCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQoLXRoaXMueCwgLXRoaXMueSlcbiAgfVxuXG4gIGNvbXBhcmUocCkge1xuICAgIHJldHVybiAodGhpcy54ID09PSBwLnggJiYgdGhpcy55ID09PSBwLnkpXG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCwgdGhpcy55KVxuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIGB7eD0ke3RoaXMueH0seT0ke3RoaXMueX1gXG4gIH1cblxuICBzdGF0aWMgZWxlbWVudE9mZnNldChlbGVtZW50LCBwYXJlbnQpIHtcbiAgICBwYXJlbnQgPSBwYXJlbnQgfHwgZWxlbWVudC5wYXJlbnROb2RlXG4gICAgY29uc3QgZWxlbWVudFJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgY29uc3QgcGFyZW50UmVjdCA9IHBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIHJldHVybiBuZXcgUG9pbnQoXG4gICAgICBlbGVtZW50UmVjdC5sZWZ0IC0gcGFyZW50UmVjdC5sZWZ0LFxuICAgICAgZWxlbWVudFJlY3QudG9wIC0gcGFyZW50UmVjdC50b3BcbiAgICApXG4gIH1cblxuICBzdGF0aWMgZWxlbWVudFNpemUoZWxlbWVudCkge1xuICAgIGNvbnN0IGVsZW1lbnRSZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIHJldHVybiBuZXcgUG9pbnQoXG4gICAgICBlbGVtZW50UmVjdC53aWR0aCxcbiAgICAgIGVsZW1lbnRSZWN0LmhlaWdodFxuICAgIClcbiAgfVxufVxuIiwiaW1wb3J0IFBvaW50IGZyb20gJy4vcG9pbnQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY3RhbmdsZSB7XG4gIGNvbnN0cnVjdG9yKHBvc2l0aW9uLCBzaXplKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgdGhpcy5zaXplID0gc2l6ZVxuICB9XG5cbiAgZ2V0UDEoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25cbiAgfVxuXG4gIGdldFAyKCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHRoaXMucG9zaXRpb24ueSlcbiAgfVxuXG4gIGdldFAzKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLnNpemUpXG4gIH1cblxuICBnZXRQNCgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnkpXG4gIH1cblxuICBnZXRDZW50ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb24uYWRkKHRoaXMuc2l6ZS5tdWx0KDAuNSkpXG4gIH1cblxuICBvcihyZWN0KSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBuZXcgUG9pbnQoTWF0aC5taW4odGhpcy5wb3NpdGlvbi54LCByZWN0LnBvc2l0aW9uLngpLCBNYXRoLm1pbih0aGlzLnBvc2l0aW9uLnksIHJlY3QucG9zaXRpb24ueSkpXG4gICAgY29uc3Qgc2l6ZSA9IChuZXcgUG9pbnQoTWF0aC5tYXgodGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHJlY3QucG9zaXRpb24ueCArIHJlY3Quc2l6ZS54KSwgTWF0aC5tYXgodGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnksIHJlY3QucG9zaXRpb24ueSArIHJlY3Quc2l6ZS55KSkpLnN1Yihwb3NpdGlvbilcbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZShwb3NpdGlvbiwgc2l6ZSlcbiAgfVxuXG4gIGFuZChyZWN0KSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBuZXcgUG9pbnQoTWF0aC5tYXgodGhpcy5wb3NpdGlvbi54LCByZWN0LnBvc2l0aW9uLngpLCBNYXRoLm1heCh0aGlzLnBvc2l0aW9uLnksIHJlY3QucG9zaXRpb24ueSkpXG4gICAgY29uc3Qgc2l6ZSA9IChuZXcgUG9pbnQoTWF0aC5taW4odGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHJlY3QucG9zaXRpb24ueCArIHJlY3Quc2l6ZS54KSwgTWF0aC5taW4odGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnksIHJlY3QucG9zaXRpb24ueSArIHJlY3Quc2l6ZS55KSkpLnN1Yihwb3NpdGlvbilcbiAgICBpZiAoc2l6ZS54IDw9IDAgfHwgc2l6ZS55IDw9IDApIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHBvc2l0aW9uLCBzaXplKVxuICB9XG5cbiAgaW5jbHVkZVBvaW50KHApIHtcbiAgICByZXR1cm4gISh0aGlzLnBvc2l0aW9uLnggPiBwLnggfHwgdGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLnggPCBwLnggfHwgdGhpcy5wb3NpdGlvbi55ID4gcC55IHx8IHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55IDwgcC55KVxuICB9XG5cbiAgaW5jbHVkZVJlY3RhbmdsZShyZWN0YW5nbGUpIHtcbiAgICByZXR1cm4gdGhpcy5pbmNsdWRlUG9pbnQocmVjdGFuZ2xlLnBvc2l0aW9uKSAmJiB0aGlzLmluY2x1ZGVQb2ludChyZWN0YW5nbGUuZ2V0UDMoKSlcbiAgfVxuXG4gIG1vdmVUb0JvdW5kKHJlY3QsIGF4aXMpIHtcbiAgICBsZXQgc2VsQXhpcywgY3Jvc3NSZWN0YW5nbGVcbiAgICBpZiAoYXhpcykge1xuICAgICAgc2VsQXhpcyA9IGF4aXNcbiAgICB9IGVsc2Uge1xuICAgICAgY3Jvc3NSZWN0YW5nbGUgPSB0aGlzLmFuZChyZWN0KVxuICAgICAgaWYgKCFjcm9zc1JlY3RhbmdsZSkge1xuICAgICAgICByZXR1cm4gcmVjdFxuICAgICAgfVxuICAgICAgc2VsQXhpcyA9IGNyb3NzUmVjdGFuZ2xlLnNpemUueCA+IGNyb3NzUmVjdGFuZ2xlLnNpemUueSA/ICd5JyA6ICd4J1xuICAgIH1cbiAgICBjb25zdCB0aGlzQ2VudGVyID0gdGhpcy5nZXRDZW50ZXIoKVxuICAgIGNvbnN0IHJlY3RDZW50ZXIgPSByZWN0LmdldENlbnRlcigpXG4gICAgY29uc3Qgc2lnbiA9IHRoaXNDZW50ZXJbc2VsQXhpc10gPiByZWN0Q2VudGVyW3NlbEF4aXNdID8gLTEgOiAxXG4gICAgY29uc3Qgb2Zmc2V0ID0gc2lnbiA+IDAgPyB0aGlzLnBvc2l0aW9uW3NlbEF4aXNdICsgdGhpcy5zaXplW3NlbEF4aXNdIC0gcmVjdC5wb3NpdGlvbltzZWxBeGlzXSA6IHRoaXMucG9zaXRpb25bc2VsQXhpc10gLSAocmVjdC5wb3NpdGlvbltzZWxBeGlzXSArIHJlY3Quc2l6ZVtzZWxBeGlzXSlcbiAgICByZWN0LnBvc2l0aW9uW3NlbEF4aXNdID0gcmVjdC5wb3NpdGlvbltzZWxBeGlzXSArIG9mZnNldFxuICAgIHJldHVybiByZWN0XG4gIH1cblxuICBnZXRTcXVhcmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZS54ICogdGhpcy5zaXplLnlcbiAgfVxuXG4gIHN0eWxlQXBwbHkoZWwpIHtcbiAgICBlbCA9IGVsIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2luZCcpXG4gICAgZWwuc3R5bGUubGVmdCA9IHRoaXMucG9zaXRpb24ueCArICdweCdcbiAgICBlbC5zdHlsZS50b3AgPSB0aGlzLnBvc2l0aW9uLnkgKyAncHgnXG4gICAgZWwuc3R5bGUud2lkdGggPSB0aGlzLnNpemUueCArICdweCdcbiAgICBlbC5zdHlsZS5oZWlnaHQgPSB0aGlzLnNpemUueSArICdweCdcbiAgfVxuXG4gIGdyb3d0aChzaXplKSB7XG4gICAgdGhpcy5zaXplID0gdGhpcy5zaXplLmFkZChzaXplKVxuICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uLmFkZChzaXplLm11bHQoLTAuNSkpXG4gIH1cblxuICBnZXRNaW5TaWRlKCkge1xuICAgIHJldHVybiBNYXRoLm1pbih0aGlzLnNpemUueCwgdGhpcy5zaXplLnkpXG4gIH1cblxuICBzdGF0aWMgZnJvbUVsZW1lbnQoZWxlbWVudCwgcGFyZW50PWVsZW1lbnQucGFyZW50Tm9kZSwgaXNDb25zaWRlclRyYW5zbGF0ZT1mYWxzZSkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gUG9pbnQuZWxlbWVudE9mZnNldChlbGVtZW50LCBwYXJlbnQsIGlzQ29uc2lkZXJUcmFuc2xhdGUpXG4gICAgY29uc3Qgc2l6ZSA9IFBvaW50LmVsZW1lbnRTaXplKGVsZW1lbnQpXG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUocG9zaXRpb24sIHNpemUpXG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldERlZmF1bHRDb250YWluZXIoZWxlbWVudCkge1xuICBsZXQgY29udGFpbmVyID0gZWxlbWVudC5wYXJlbnROb2RlXG4gIHdoaWxlIChjb250YWluZXIucGFyZW50Tm9kZSAmJiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShjb250YWluZXIpWydwb3NpdGlvbiddID09PSAnc3RhdGljJyAmJiBjb250YWluZXIudGFnTmFtZSAhPT0gJ0JPRFknKSB7XG4gICAgY29udGFpbmVyID0gY29udGFpbmVyLnBhcmVudE5vZGVcbiAgfVxuICByZXR1cm4gY29udGFpbmVyXG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAob3B0aW9ucyA9IHt9KSB7XG4gICAgdGhpcy5ldmVudHMgPSB7fVxuXG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5vbikge1xuICAgICAgZm9yIChjb25zdCBbZXZlbnROYW1lLCBmbl0gb2YgT2JqZWN0LmVudHJpZXMob3B0aW9ucy5vbikpIHtcbiAgICAgICAgdGhpcy5vbihldmVudE5hbWUsIGZuKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGVtaXQoZXZlbnROYW1lKSB7XG4gICAgdGhpcy5pbnRlcnJ1cHRlZCA9IGZhbHNlXG4gICAgY29uc3QgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKVxuXG4gICAgaWYgKCF0aGlzLmV2ZW50c1tldmVudE5hbWVdKSByZXR1cm5cblxuICAgIGZvciAoY29uc3QgZnVuYyBvZiB0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICBmdW5jKC4uLmFyZ3MpXG4gICAgICBpZiAodGhpcy5pbnRlcnJ1cHRlZCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpbnRlcnJ1cHQoKSB7XG4gICAgdGhpcy5pbnRlcnJ1cHRlZCA9IHRydWVcbiAgfVxuXG4gIG9uKGV2ZW50TmFtZSwgZm4pIHtcbiAgICBpZiAoIXRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSBbXVxuICAgIH1cblxuICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0ucHVzaChmbilcbiAgfVxuXG4gIHByZXBlbmRPbihldmVudE5hbWUsIGZuKSB7XG4gICAgaWYgKCF0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdID0gW11cbiAgICB9XG5cbiAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLnVuc2hpZnQoZm4pXG4gIH1cblxuICB1bnN1YnNjcmliZShldmVudE5hbWUsIGZuKSB7XG4gICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5ldmVudHNbZXZlbnROYW1lXS5pbmRleE9mKGZuKVxuICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5zcGxpY2UoaW5kZXgsIDEpXG4gICAgfVxuICB9XG5cbiAgcmVzZXRFbWl0dGVyICgpIHtcbiAgICB0aGlzLmV2ZW50cyA9IHt9XG4gIH1cblxuICByZXNldE9uKGV2ZW50TmFtZSkge1xuICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSBbXVxuICB9XG59XG4iLCIvKiFcbiAqIGdldFN0eWxlUHJvcGVydHkgdjEuMC40XG4gKiBvcmlnaW5hbCBieSBrYW5nYXhcbiAqIGh0dHA6Ly9wZXJmZWN0aW9ua2lsbHMuY29tL2ZlYXR1cmUtdGVzdGluZy1jc3MtcHJvcGVydGllcy9cbiAqIE1JVCBsaWNlbnNlXG4gKi9cblxuLypqc2hpbnQgYnJvd3NlcjogdHJ1ZSwgc3RyaWN0OiB0cnVlLCB1bmRlZjogdHJ1ZSAqL1xuLypnbG9iYWwgZGVmaW5lOiBmYWxzZSwgZXhwb3J0czogZmFsc2UsIG1vZHVsZTogZmFsc2UgKi9cblxuKCBmdW5jdGlvbiggd2luZG93ICkge1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBwcmVmaXhlcyA9ICdXZWJraXQgTW96IG1zIE1zIE8nLnNwbGl0KCcgJyk7XG52YXIgZG9jRWxlbVN0eWxlID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlO1xuXG5mdW5jdGlvbiBnZXRTdHlsZVByb3BlcnR5KCBwcm9wTmFtZSApIHtcbiAgaWYgKCAhcHJvcE5hbWUgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gdGVzdCBzdGFuZGFyZCBwcm9wZXJ0eSBmaXJzdFxuICBpZiAoIHR5cGVvZiBkb2NFbGVtU3R5bGVbIHByb3BOYW1lIF0gPT09ICdzdHJpbmcnICkge1xuICAgIHJldHVybiBwcm9wTmFtZTtcbiAgfVxuXG4gIC8vIGNhcGl0YWxpemVcbiAgcHJvcE5hbWUgPSBwcm9wTmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHByb3BOYW1lLnNsaWNlKDEpO1xuXG4gIC8vIHRlc3QgdmVuZG9yIHNwZWNpZmljIHByb3BlcnRpZXNcbiAgdmFyIHByZWZpeGVkO1xuICBmb3IgKCB2YXIgaT0wLCBsZW4gPSBwcmVmaXhlcy5sZW5ndGg7IGkgPCBsZW47IGkrKyApIHtcbiAgICBwcmVmaXhlZCA9IHByZWZpeGVzW2ldICsgcHJvcE5hbWU7XG4gICAgaWYgKCB0eXBlb2YgZG9jRWxlbVN0eWxlWyBwcmVmaXhlZCBdID09PSAnc3RyaW5nJyApIHtcbiAgICAgIHJldHVybiBwcmVmaXhlZDtcbiAgICB9XG4gIH1cbn1cblxuLy8gdHJhbnNwb3J0XG5pZiAoIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcbiAgLy8gQU1EXG4gIGRlZmluZSggZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGdldFN0eWxlUHJvcGVydHk7XG4gIH0pO1xufSBlbHNlIGlmICggdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICkge1xuICAvLyBDb21tb25KUyBmb3IgQ29tcG9uZW50XG4gIG1vZHVsZS5leHBvcnRzID0gZ2V0U3R5bGVQcm9wZXJ0eTtcbn0gZWxzZSB7XG4gIC8vIGJyb3dzZXIgZ2xvYmFsXG4gIHdpbmRvdy5nZXRTdHlsZVByb3BlcnR5ID0gZ2V0U3R5bGVQcm9wZXJ0eTtcbn1cblxufSkoIHdpbmRvdyApO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldERpc3RhbmNlKHAxLCBwMikge1xuICBjb25zdCBkeCA9IHAxLnggLSBwMi54LCBkeSA9IHAxLnkgLSBwMi55XG4gIHJldHVybiBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRYRGlmZmVyZW5jZShwMSwgcDIpIHtcbiAgcmV0dXJuIE1hdGguYWJzKHAxLnggLSBwMi54KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0WURpZmZlcmVuY2UocDEsIHAyKSB7XG4gIHJldHVybiBNYXRoLmFicyhwMS55IC0gcDIueSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3Rvcnkob3B0aW9ucykge1xuICByZXR1cm4gKHAxLCBwMikgPT4ge1xuICAgIHJldHVybiBNYXRoLnNxcnQoXG4gICAgICBNYXRoLnBvdyhvcHRpb25zLnggKiBNYXRoLmFicyhwMS54IC0gcDIueCksIDIpICtcbiAgICAgIE1hdGgucG93KG9wdGlvbnMueSAqIE1hdGguYWJzKHAxLnkgLSBwMi55KSwgMilcbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluZGV4T2ZOZWFyZXN0UG9pbnQoYXJyLCB2YWwsIHJhZGl1cywgZ2V0RGlzdGFuY2VGdW5jPWdldERpc3RhbmNlKSB7XG4gIGxldCBzaXplLCBpbmRleCA9IDAsIGksIHRlbXBcbiAgaWYgKGFyci5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gLTFcbiAgfVxuICBzaXplID0gZ2V0RGlzdGFuY2VGdW5jKGFyclswXSwgdmFsKVxuICBmb3IgKGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgdGVtcCA9IGdldERpc3RhbmNlRnVuYyhhcnJbaV0sIHZhbClcbiAgICBpZiAodGVtcCA8IHNpemUpIHtcbiAgICAgIHNpemUgPSB0ZW1wXG4gICAgICBpbmRleCA9IGlcbiAgICB9XG4gIH1cbiAgaWYgKHJhZGl1cyA+PSAwICYmIHNpemUgPiByYWRpdXMpIHtcbiAgICByZXR1cm4gLTFcbiAgfVxuICByZXR1cm4gaW5kZXhcbn1cbiIsImltcG9ydCBQb2ludCBmcm9tICcuL3BvaW50J1xuaW1wb3J0IHsgZ2V0RGlzdGFuY2UgfSBmcm9tICcuL2Rpc3RhbmNlcydcblxuZXhwb3J0IGZ1bmN0aW9uIGNsYW1wKG1pbiwgbWF4LCB2YWwpIHtcbiAgcmV0dXJuIE1hdGgubWF4KG1pbiwgTWF0aC5taW4obWF4LCB2YWwpKVxufVxuXG4vL1JldHVybiBjcm9zc2luZyBwb2ludCBvZiB0d28gbGluZXNcbmV4cG9ydCBmdW5jdGlvbiBkaXJlY3RDcm9zc2luZyhMMVAxLCBMMVAyLCBMMlAxLCBMMlAyKSB7XG4gIGxldCB0ZW1wLCBrMSwgazIsIGIxLCBiMiwgeCwgeVxuICBpZiAoTDJQMS54ID09PSBMMlAyLngpIHtcbiAgICB0ZW1wID0gTDJQMVxuICAgIEwyUDEgPSBMMVAxXG4gICAgTDFQMSA9IHRlbXBcbiAgICB0ZW1wID0gTDJQMlxuICAgIEwyUDIgPSBMMVAyXG4gICAgTDFQMiA9IHRlbXBcbiAgfVxuICBpZiAoTDFQMS54ID09PSBMMVAyLngpIHtcbiAgICBrMiA9IChMMlAyLnkgLSBMMlAxLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICBiMiA9IChMMlAyLnggKiBMMlAxLnkgLSBMMlAxLnggKiBMMlAyLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICB4ID0gTDFQMS54XG4gICAgeSA9IHggKiBrMiArIGIyXG4gICAgcmV0dXJuIG5ldyBQb2ludCh4LCB5KVxuICB9IGVsc2Uge1xuICAgIGsxID0gKEwxUDIueSAtIEwxUDEueSkgLyAoTDFQMi54IC0gTDFQMS54KVxuICAgIGIxID0gKEwxUDIueCAqIEwxUDEueSAtIEwxUDEueCAqIEwxUDIueSkgLyAoTDFQMi54IC0gTDFQMS54KVxuICAgIGsyID0gKEwyUDIueSAtIEwyUDEueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgIGIyID0gKEwyUDIueCAqIEwyUDEueSAtIEwyUDEueCAqIEwyUDIueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgIHggPSAoYjEgLSBiMikgLyAoazIgLSBrMSlcbiAgICB5ID0geCAqIGsxICsgYjFcbiAgICByZXR1cm4gbmV3IFBvaW50KHgsIHkpXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kVG9TZWdtZW50KExQMSwgTFAyLCBQKSB7XG4gIGxldCB4LCB5XG4gIHggPSBjbGFtcChNYXRoLm1pbihMUDEueCwgTFAyLngpLCBNYXRoLm1heChMUDEueCwgTFAyLngpLCBQLngpXG4gIGlmICh4ICE9PSBQLngpIHtcbiAgICB5ID0gKHggPT09IExQMS54KSA/IExQMS55IDogTFAyLnlcbiAgICBQID0gbmV3IFBvaW50KHgsIHkpXG4gIH1cblxuICB5ID0gY2xhbXAoTWF0aC5taW4oTFAxLnksIExQMi55KSwgTWF0aC5tYXgoTFAxLnksIExQMi55KSwgUC55KVxuICBpZiAoeSAhPT0gUC55KSB7XG4gICAgeCA9ICh5ID09PSBMUDEueSkgPyBMUDEueCA6IExQMi54XG4gICAgUCA9IG5ldyBQb2ludCh4LCB5KVxuICB9XG5cbiAgcmV0dXJuIFBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kVG9MaW5lKEEsIEIsIFApIHtcbiAgY29uc3QgQVAgPSBuZXcgUG9pbnQoUC54IC0gQS54LCBQLnkgLSBBLnkpLFxuICAgIEFCID0gbmV3IFBvaW50KEIueCAtIEEueCwgQi55IC0gQS55KSxcbiAgICBhYjIgPSBBQi54ICogQUIueCArIEFCLnkgKiBBQi55LFxuICAgIGFwX2FiID0gQVAueCAqIEFCLnggKyBBUC55ICogQUIueSxcbiAgICB0ID0gYXBfYWIgLyBhYjJcbiAgcmV0dXJuIG5ldyBQb2ludChBLnggKyBBQi54ICogdCwgQS55ICsgQUIueSAqIHQpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb2ludE9uTGluZShMUDEsIExQMiwgcGVyY2VudCkge1xuICBjb25zdCBkeCA9IExQMi54IC0gTFAxLngsIGR5ID0gTFAyLnkgLSBMUDEueVxuICByZXR1cm4gbmV3IFBvaW50KExQMS54ICsgcGVyY2VudCAqIGR4LCBMUDEueSArIHBlcmNlbnQgKiBkeSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBvaW50T25MaW5lQnlMZW5naHQoTFAxLCBMUDIsIGxlbmdodCkge1xuICBjb25zdCBkeCA9IExQMi54IC0gTFAxLnhcbiAgY29uc3QgZHkgPSBMUDIueSAtIExQMS55XG4gIGNvbnN0IHBlcmNlbnQgPSBsZW5naHQgLyBnZXREaXN0YW5jZShMUDEsIExQMilcbiAgcmV0dXJuIG5ldyBQb2ludChMUDEueCArIHBlcmNlbnQgKiBkeCwgTFAxLnkgKyBwZXJjZW50ICogZHkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRQb2ludFRvQm91bmRQb2ludHMoYm91bmRwb2ludHMsIHBvaW50LCBpc1JpZ2h0KSB7XG4gIGNvbnN0IHJlc3VsdCA9IGJvdW5kcG9pbnRzLmZpbHRlcigoYlBvaW50KSA9PiB7XG4gICAgcmV0dXJuIGJQb2ludC55ID4gcG9pbnQueSB8fCAoaXNSaWdodCA/IGJQb2ludC54IDwgcG9pbnQueCA6IGJQb2ludC54ID4gcG9pbnQueClcbiAgfSlcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChwb2ludC55IDwgcmVzdWx0W2ldLnkpIHtcbiAgICAgIHJlc3VsdC5zcGxpY2UoaSwgMCwgcG9pbnQpXG4gICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxuICB9XG4gIHJlc3VsdC5wdXNoKHBvaW50KVxuICByZXR1cm4gcmVzdWx0XG59XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9wb2ludCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFuZ2xlRGlmZihhbHBoYSwgYmV0YSkge1xuICBjb25zdCBtaW5BbmdsZSA9IE1hdGgubWluKGFscGhhLCBiZXRhKVxuICBjb25zdCBtYXhBbmdsZSA9ICBNYXRoLm1heChhbHBoYSwgYmV0YSlcbiAgcmV0dXJuIE1hdGgubWluKG1heEFuZ2xlIC0gbWluQW5nbGUsIG1pbkFuZ2xlICsgTWF0aC5QSSoyIC0gbWF4QW5nbGUpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbmdsZShwMSwgcDIpIHtcbiAgY29uc3QgZGlmZiA9IHAyLnN1YihwMSlcbiAgcmV0dXJuIG5vcm1hbGl6ZUFuZ2xlKE1hdGguYXRhbjIoZGlmZi55LCBkaWZmLngpKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9SYWRpYW4oYW5nbGUpIHtcbiAgcmV0dXJuICgoYW5nbGUgJSAzNjApICogTWF0aC5QSSAvIDE4MClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvRGVncmVlKGFuZ2xlKSB7XG4gIHJldHVybiAoYW5nbGUgKiAxODAgLyBNYXRoLlBJKSAlIDM2MFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRBbmdsZShtaW4sIG1heCwgdmFsKSB7XG4gIGxldCBkbWluLCBkbWF4XG4gIGlmIChtaW4gPCBtYXggJiYgdmFsID4gbWluICYmIHZhbCA8IG1heCkge1xuICAgIHJldHVybiB2YWxcbiAgfSBlbHNlIGlmIChtYXggPCBtaW4gJiYgKHZhbCA8IG1heCB8fCB2YWwgPiBtaW4pKSB7XG4gICAgcmV0dXJuIHZhbFxuICB9IGVsc2Uge1xuICAgIGRtaW4gPSBnZXRBbmdsZURpZmYobWluLCB2YWwpXG4gICAgZG1heCA9IGdldEFuZ2xlRGlmZihtYXgsIHZhbClcbiAgICBpZiAoZG1pbiA8IGRtYXgpIHtcbiAgICAgIHJldHVybiBtaW5cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG1heFxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmVhcmVzdEFuZ2xlKGFyciwgYW5nbGUpIHtcbiAgbGV0IGksIHRlbXAsIGRpZmYgPSBNYXRoLlBJICogMiwgdmFsdWVcbiAgZm9yIChpID0gMDsgaSA8IGFyci5sZW5ndGg7aSsrKSB7XG4gICAgdGVtcCA9IGdldEFuZ2xlRGlmZihhcnJbaV0sIGFuZ2xlKVxuICAgIGlmIChkaWZmIDwgdGVtcCkge1xuICAgICAgZGlmZiA9IHRlbXBcbiAgICAgIHZhbHVlID0gYXJyW2ldXG4gICAgfVxuICB9XG4gIHJldHVybiB2YWx1ZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplQW5nbGUodmFsKSB7XG4gIHdoaWxlICh2YWwgPCAwKSB7XG4gICAgdmFsICs9IDIgKiBNYXRoLlBJXG4gIH1cbiAgd2hpbGUgKHZhbCA+IDIgKiBNYXRoLlBJKSB7XG4gICAgdmFsIC09IDIgKiBNYXRoLlBJXG4gIH1cbiAgcmV0dXJuIHZhbFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKGFuZ2xlLCBsZW5ndGgsIGNlbnRlcikge1xuICBjZW50ZXIgPSBjZW50ZXIgfHwgbmV3IFBvaW50KDAsIDApXG4gIHJldHVybiBjZW50ZXIuYWRkKG5ldyBQb2ludChsZW5ndGggKiBNYXRoLmNvcyhhbmdsZSksIGxlbmd0aCAqIE1hdGguc2luKGFuZ2xlKSkpXG59XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9nZW9tZXRyeS9wb2ludCdcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSAnLi9nZW9tZXRyeS9yZWN0YW5nbGUnXG5pbXBvcnQge1xuICBnZXRQb2ludE9uTGluZUJ5TGVuZ2h0LFxuICBkaXJlY3RDcm9zc2luZyxcbiAgYm91bmRUb0xpbmVcbn0gZnJvbSAnLi9nZW9tZXRyeS9ib3VuZHMnXG5cbmltcG9ydCB7XG4gIGdldEFuZ2xlLFxuICBub3JtYWxpemVBbmdsZSxcbiAgYm91bmRBbmdsZSxcbiAgZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtXG59IGZyb20gJy4vZ2VvbWV0cnkvYW5nbGVzJ1xuXG5leHBvcnQgY2xhc3MgQm91bmQge1xuICBjb25zdHJ1Y3RvciAoKSB7fVxuXG4gIGJvdW5kKHBvaW50LCBfc2l6ZSkge1xuICAgIHJldHVybiBwb2ludFxuICB9XG5cbiAgcmVmcmVzaCAoKSB7fVxuXG4gIHN0YXRpYyBib3VuZGluZygpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyB0aGlzKC4uLmFyZ3VtZW50cylcbiAgICByZXR1cm4gaW5zdGFuY2UuYm91bmQuYmluZChpbnN0YW5jZSlcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb1JlY3RhbmdsZSBleHRlbmRzIEJvdW5kIHtcbiAgY29uc3RydWN0b3IocmVjdGFuZ2xlKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMucmVjdGFuZ2xlID0gcmVjdGFuZ2xlXG4gIH1cblxuICBib3VuZChwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IGNhbGNQb2ludCA9IHBvaW50LmNsb25lKClcbiAgICBjb25zdCByZWN0UDIgPSB0aGlzLnJlY3RhbmdsZS5nZXRQMygpXG5cbiAgICBpZiAodGhpcy5yZWN0YW5nbGUucG9zaXRpb24ueCA+IGNhbGNQb2ludC54KSB7XG4gICAgICAoY2FsY1BvaW50LnggPSB0aGlzLnJlY3RhbmdsZS5wb3NpdGlvbi54KVxuICAgIH1cbiAgICBpZiAodGhpcy5yZWN0YW5nbGUucG9zaXRpb24ueSA+IGNhbGNQb2ludC55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHRoaXMucmVjdGFuZ2xlLnBvc2l0aW9uLnlcbiAgICB9XG4gICAgaWYgKHJlY3RQMi54IDwgY2FsY1BvaW50LnggKyBzaXplLngpIHtcbiAgICAgIGNhbGNQb2ludC54ID0gcmVjdFAyLnggLSBzaXplLnhcbiAgICB9XG4gICAgaWYgKHJlY3RQMi55IDwgY2FsY1BvaW50LnkgKyBzaXplLnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gcmVjdFAyLnkgLSBzaXplLnlcbiAgICB9XG5cbiAgICByZXR1cm4gY2FsY1BvaW50XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9FbGVtZW50IGV4dGVuZHMgQm91bmRUb1JlY3RhbmdsZSB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbnRhaW5lcikge1xuICAgIHN1cGVyKFJlY3RhbmdsZS5mcm9tRWxlbWVudChlbGVtZW50LCBjb250YWluZXIpKVxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lclxuICB9XG5cbiAgcmVmcmVzaCAoKSB7XG4gICAgdGhpcy5yZWN0YW5nbGUgPSBSZWN0YW5nbGUuZnJvbUVsZW1lbnQodGhpcy5lbGVtZW50LCB0aGlzLmNvbnRhaW5lcilcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb0xpbmVYIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3Rvcih4LCBzdGFydFksIGVuZFkpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy54ID0geFxuICAgIHRoaXMuc3RhcnRZID0gc3RhcnRZXG4gICAgdGhpcy5lbmRZID0gZW5kWVxuICB9XG5cbiAgYm91bmQocG9pbnQsIHNpemUpIHtcbiAgICBjb25zdCBjYWxjUG9pbnQgPSBwb2ludC5jbG9uZSgpXG5cbiAgICBjYWxjUG9pbnQueCA9IHRoaXMueFxuICAgIGlmICh0aGlzLnN0YXJ0WSA+IGNhbGNQb2ludC55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHRoaXMuc3RhcnRZXG4gICAgfVxuICAgIGlmICh0aGlzLmVuZFkgPCBjYWxjUG9pbnQueSArIHNpemUueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSB0aGlzLmVuZFkgLSBzaXplLnlcbiAgICB9XG5cbiAgICByZXR1cm4gY2FsY1BvaW50XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9MaW5lWSBleHRlbmRzIEJvdW5kIHtcbiAgY29uc3RydWN0b3IoeSwgc3RhcnRYLCBlbmRYKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMueSA9IHlcbiAgICB0aGlzLnN0YXJ0WCA9IHN0YXJ0WFxuICAgIHRoaXMuZW5kWCA9IGVuZFhcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgY2FsY1BvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIGNhbGNQb2ludC55ID0gdGhpcy55XG4gICAgaWYgKHRoaXMuc3RhcnRYID4gY2FsY1BvaW50LngpIHtcbiAgICAgIGNhbGNQb2ludC54ID0gdGhpcy5zdGFydFhcbiAgICB9XG4gICAgaWYgKHRoaXMuZW5kWCA8IGNhbGNQb2ludC54ICsgc2l6ZS54KSB7XG4gICAgICBjYWxjUG9pbnQueCA9IHRoaXMuZW5kWCAtIHNpemUueFxuICAgIH1cbiAgICByZXR1cm4gY2FsY1BvaW50XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9MaW5lIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3RvcihzdGFydFBvaW50LCBlbmRQb2ludCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnN0YXJ0UG9pbnQgPSBzdGFydFBvaW50XG4gICAgdGhpcy5lbmRQb2ludCA9IGVuZFBvaW50XG4gICAgY29uc3QgYWxwaGEgPSBNYXRoLmF0YW4yKGVuZFBvaW50LnkgLSBzdGFydFBvaW50LnksIGVuZFBvaW50LnggLSBzdGFydFBvaW50LngpXG4gICAgY29uc3QgYmV0YSA9IGFscGhhICsgTWF0aC5QSSAvIDJcbiAgICB0aGlzLnNvbWVLID0gMTBcbiAgICB0aGlzLmNvc0JldGEgPSBNYXRoLmNvcyhiZXRhKVxuICAgIHRoaXMuc2luQmV0YSA9IE1hdGguc2luKGJldGEpXG4gIH1cblxuICBib3VuZChwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IHBvaW50MiA9IG5ldyBQb2ludChcbiAgICAgIHBvaW50LnggKyB0aGlzLnNvbWVLICogdGhpcy5jb3NCZXRhLFxuICAgICAgcG9pbnQueSArIHRoaXMuc29tZUsgKiB0aGlzLnNpbkJldGFcbiAgICApXG5cbiAgICBjb25zdCBuZXdFbmRQb2ludCA9IGdldFBvaW50T25MaW5lQnlMZW5naHQodGhpcy5lbmRQb2ludCwgdGhpcy5zdGFydFBvaW50LCBzaXplLngpXG4gICAgY29uc3QgcG9pbnRDcm9zc2luZyA9IGRpcmVjdENyb3NzaW5nKHRoaXMuc3RhcnRQb2ludCwgdGhpcy5lbmRQb2ludCwgcG9pbnQsIHBvaW50MilcblxuICAgIHJldHVybiBib3VuZFRvTGluZSh0aGlzLnN0YXJ0UG9pbnQsIG5ld0VuZFBvaW50LCBwb2ludENyb3NzaW5nKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvQ2lyY2xlIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3RvcihjZW50ZXIsIHJhZGl1cykge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLmNlbnRlciA9IGNlbnRlclxuICAgIHRoaXMucmFkaXVzID0gcmFkaXVzXG4gIH1cblxuICBib3VuZChwb2ludCwgX3NpemUpIHtcbiAgICByZXR1cm4gZ2V0UG9pbnRPbkxpbmVCeUxlbmdodCh0aGlzLmNlbnRlciwgcG9pbnQsIHRoaXMucmFkaXVzKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvQXJjIGV4dGVuZHMgQm91bmRUb0NpcmNsZSB7XG4gIGNvbnN0cnVjdG9yKGNlbnRlciwgcmFkaXVzLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSkge1xuICAgIHN1cGVyKGNlbnRlciwgcmFkaXVzKVxuICAgIHRoaXMuX3N0YXJ0QW5nbGUgPSBzdGFydEFuZ2xlXG4gICAgdGhpcy5fZW5kQW5nbGUgPSBlbmRBbmdsZVxuICB9XG5cbiAgc3RhcnRBbmdsZSgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMuX3N0YXJ0QW5nbGUgPT09ICdmdW5jdGlvbicgPyB0aGlzLl9zdGFydEFuZ2xlKCkgOiB0aGlzLl9zdGFydEFuZ2xlXG4gIH1cblxuICBlbmRBbmdsZSgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMuX2VuZEFuZ2xlID09PSAnZnVuY3Rpb24nID8gdGhpcy5fZW5kQW5nbGUoKSA6IHRoaXMuX2VuZEFuZ2xlXG4gIH1cblxuICBib3VuZChwb2ludCwgX3NpemUpIHtcbiAgICBsZXQgYW5nbGUgPSBnZXRBbmdsZSh0aGlzLmNlbnRlciwgcG9pbnQpXG4gICAgYW5nbGUgPSBub3JtYWxpemVBbmdsZShhbmdsZSlcbiAgICBhbmdsZSA9IGJvdW5kQW5nbGUodGhpcy5zdGFydEFuZ2xlKCksIHRoaXMuZW5kQW5nbGUoKSwgYW5nbGUpXG4gICAgcmV0dXJuIGdldFBvaW50RnJvbVJhZGlhbFN5c3RlbShhbmdsZSwgdGhpcy5yYWRpdXMsIHRoaXMuY2VudGVyKVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhcnJheSwgdmFsKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoYXJyYXlbaV0gPT09IHZhbCkge1xuICAgICAgYXJyYXkuc3BsaWNlKGksIDEpXG4gICAgICBpLS1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycmF5XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByYW5nZShzdGFydCwgc3RvcCwgc3RlcCkge1xuICBjb25zdCByZXN1bHQgPSBbXVxuICBpZiAodHlwZW9mIHN0b3AgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgc3RvcCA9IHN0YXJ0XG4gICAgc3RhcnQgPSAwXG4gIH1cbiAgaWYgKHR5cGVvZiBzdGVwID09PSAndW5kZWZpbmVkJykge1xuICAgIHN0ZXAgPSAxXG4gIH1cbiAgaWYgKChzdGVwID4gMCAmJiBzdGFydCA+PSBzdG9wKSB8fCAoc3RlcCA8IDAgJiYgc3RhcnQgPD0gc3RvcCkpIHtcbiAgICByZXR1cm4gW11cbiAgfVxuICBmb3IgKGxldCBpID0gc3RhcnQ7IHN0ZXAgPiAwID8gaSA8IHN0b3AgOiBpID4gc3RvcDsgaSArPSBzdGVwKSB7XG4gICAgcmVzdWx0LnB1c2goaSlcbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9nZW9tZXRyeS9wb2ludCdcbmltcG9ydCB7IGFkZFBvaW50VG9Cb3VuZFBvaW50cyB9IGZyb20gJy4vZ2VvbWV0cnkvYm91bmRzJ1xuXG5pbXBvcnQge1xuICBpbmRleE9mTmVhcmVzdFBvaW50LFxuICBnZXREaXN0YW5jZVxufSBmcm9tICcuL2dlb21ldHJ5L2Rpc3RhbmNlcydcblxuY2xhc3MgQmFzaWNTdHJhdGVneSB7XG4gIGNvbnN0cnVjdG9yKHJlY3RhbmdsZSwgb3B0aW9ucz17fSkge1xuICAgIHRoaXMucmVjdGFuZ2xlID0gcmVjdGFuZ2xlXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9uc1xuICB9XG5cbiAgZ2V0IGJvdW5kUmVjdCAoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGlzLnJlY3RhbmdsZSA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMucmVjdGFuZ2xlKCkgOiB0aGlzLnJlY3RhbmdsZVxuICB9XG59XG5cbmNsYXNzIE5vdENyb3NzaW5nU3RyYXRlZ3kgZXh0ZW5kcyBCYXNpY1N0cmF0ZWd5IHtcbiAgcG9zaXRpb25pbmcgKHJlY3RhbmdsZUxpc3QsIGluZGV4ZXNPZk5ld3MpIHtcbiAgICBjb25zdCBzdGF0aWNSZWN0YW5nbGVJbmRleGVzID0gcmVjdGFuZ2xlTGlzdC5yZWR1Y2UoKGluZGV4ZXMsIF9yZWN0LCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGluZGV4ZXNPZk5ld3MuaW5kZXhPZihpbmRleCkgPT09IC0xKSB7XG4gICAgICAgIGluZGV4ZXMucHVzaChpbmRleClcbiAgICAgIH1cbiAgICAgIHJldHVybiBpbmRleGVzXG4gICAgfSwgW10pXG5cbiAgICBpbmRleGVzT2ZOZXdzLmZvckVhY2goKGluZGV4KSA9PiB7XG4gICAgICBsZXQgcmVjdCA9IHJlY3RhbmdsZUxpc3RbaW5kZXhdXG4gICAgICBsZXQgcmVtb3ZhYmxlID0gZmFsc2VcblxuICAgICAgc3RhdGljUmVjdGFuZ2xlSW5kZXhlcy5mb3JFYWNoKChpbmRleE9mU3RhdGljKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YXRpY1JlY3QgPSByZWN0YW5nbGVMaXN0W2luZGV4T2ZTdGF0aWNdXG4gICAgICAgIHJlY3QgPSBzdGF0aWNSZWN0Lm1vdmVUb0JvdW5kKHJlY3QpXG4gICAgICB9KVxuXG4gICAgICByZW1vdmFibGUgPSBzdGF0aWNSZWN0YW5nbGVJbmRleGVzLnNvbWUoKGluZGV4T2ZTdGF0aWMpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhdGljUmVjdCA9IHJlY3RhbmdsZUxpc3RbaW5kZXhPZlN0YXRpY11cbiAgICAgICAgcmV0dXJuICAhIXN0YXRpY1JlY3QuYW5kKHJlY3QpXG4gICAgICB9KSB8fCByZWN0LmFuZCh0aGlzLmJvdW5kUmVjdCkuZ2V0U3F1YXJlKCkgIT09IHJlY3QuZ2V0U3F1YXJlKClcblxuICAgICAgaWYgKHJlbW92YWJsZSkge1xuICAgICAgICByZWN0LnJlbW92YWJsZSA9IHRydWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMucHVzaChpbmRleClcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiByZWN0YW5nbGVMaXN0XG4gIH1cblxuICBzb3J0aW5nKG9kbERyYWdnYWJsZXNMaXN0LCBuZXdEcmFnZ2FibGVzLCBpbmRleE9mTmV3cykge1xuICAgIGNvbnN0IGRyYWdnYWJsZXMgPSBvZGxEcmFnZ2FibGVzTGlzdC5jb25jYXQobmV3RHJhZ2dhYmxlcylcbiAgICBuZXdEcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgaW5kZXhPZk5ld3MucHVzaChkcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSlcbiAgICB9KVxuICAgIHJldHVybiBkcmFnZ2FibGVzXG4gIH1cbn1cblxuY2xhc3MgRmxvYXRMZWZ0U3RyYXRlZ3kgZXh0ZW5kcyBCYXNpY1N0cmF0ZWd5IHtcbiAgY29uc3RydWN0b3IocmVjdGFuZ2xlLCBvcHRpb25zPXt9KSB7XG4gICAgc3VwZXIocmVjdGFuZ2xlLCBvcHRpb25zKVxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgcmVtb3ZhYmxlOiB0cnVlXG4gICAgfSwgb3B0aW9ucylcblxuICAgIHRoaXMucmFkaXVzID0gb3B0aW9ucy5yYWRpdXMgfHwgODBcblxuICAgIHRoaXMucGFkZGluZ1RvcExlZnQgPSBvcHRpb25zLnBhZGRpbmdUb3BMZWZ0IHx8IG5ldyBQb2ludCgwLCAwKVxuICAgIHRoaXMucGFkZGluZ0JvdHRvbVJpZ2h0ID0gb3B0aW9ucy5wYWRkaW5nQm90dG9tUmlnaHQgfHwgbmV3IFBvaW50KDAsIDApXG4gICAgdGhpcy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgPSBvcHRpb25zLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyB8fCAwXG5cbiAgICB0aGlzLmdldERpc3RhbmNlID0gb3B0aW9ucy5nZXREaXN0YW5jZSB8fCBnZXREaXN0YW5jZVxuICAgIHRoaXMuZ2V0UG9zaXRpb24gPSBvcHRpb25zLmdldFBvc2l0aW9uIHx8ICgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucG9zaXRpb24pXG4gIH1cblxuICBwb3NpdGlvbmluZyhyZWN0YW5nbGVMaXN0LCBfaW5kZXhlc09mTmV3cykge1xuICAgIGNvbnN0IGJvdW5kUmVjdCA9IHRoaXMuYm91bmRSZWN0XG4gICAgY29uc3QgcmVjdFAyID0gYm91bmRSZWN0LmdldFAyKClcbiAgICBsZXQgYm91bmRhcnlQb2ludHMgPSBbYm91bmRSZWN0LnBvc2l0aW9uXVxuXG4gICAgcmVjdGFuZ2xlTGlzdC5mb3JFYWNoKChyZWN0LCByZWN0SW5kZXgpID0+IHtcbiAgICAgIGxldCBwb3NpdGlvbiwgaXNWYWxpZCA9IGZhbHNlXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvdW5kYXJ5UG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHBvc2l0aW9uID0gbmV3IFBvaW50KFxuICAgICAgICAgIGJvdW5kYXJ5UG9pbnRzW2ldLnggKyB0aGlzLnBhZGRpbmdUb3BMZWZ0LngsXG4gICAgICAgICAgaSA+IDAgPyAoYm91bmRhcnlQb2ludHNbaSAtIDFdLnkgKyB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcykgOiAoYm91bmRSZWN0LnBvc2l0aW9uLnkgKyB0aGlzLnBhZGRpbmdUb3BMZWZ0LnkpXG4gICAgICAgIClcblxuICAgICAgICBpc1ZhbGlkID0gKHBvc2l0aW9uLnggKyByZWN0LnNpemUueCA8IHJlY3RQMi54KVxuXG4gICAgICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgcG9zaXRpb24gPSBuZXcgUG9pbnQoXG4gICAgICAgICAgYm91bmRSZWN0LnBvc2l0aW9uLnggKyB0aGlzLnBhZGRpbmdUb3BMZWZ0LngsXG4gICAgICAgICAgYm91bmRhcnlQb2ludHNbYm91bmRhcnlQb2ludHMubGVuZ3RoIC0gMV0ueSArIChyZWN0SW5kZXggPiAwID8gdGhpcy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgOiB0aGlzLnBhZGRpbmdUb3BMZWZ0LnkpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgcmVjdC5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnJlbW92YWJsZSAmJiByZWN0LmdldFAzKCkueSA+IGJvdW5kUmVjdC5nZXRQMygpLnkpIHtcbiAgICAgICAgcmVjdC5yZW1vdmFibGUgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGJvdW5kYXJ5UG9pbnRzID0gYWRkUG9pbnRUb0JvdW5kUG9pbnRzKGJvdW5kYXJ5UG9pbnRzLCByZWN0LmdldFAzKCkuYWRkKHRoaXMucGFkZGluZ0JvdHRvbVJpZ2h0KSlcbiAgICB9KVxuICAgIHJldHVybiByZWN0YW5nbGVMaXN0XG4gIH1cblxuICBzb3J0aW5nKG9kbERyYWdnYWJsZXNMaXN0LCBuZXdEcmFnZ2FibGVzLCBpbmRleE9mTmV3cykge1xuICAgIGNvbnN0IG5ld0xpc3QgPSBvZGxEcmFnZ2FibGVzTGlzdC5jb25jYXQoKVxuICAgIGNvbnN0IGxpc3RPbGRQb3NpdGlvbiA9IG9kbERyYWdnYWJsZXNMaXN0Lm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUuZ2V0UG9zaXRpb24oKSlcbiAgICBuZXdEcmFnZ2FibGVzLmZvckVhY2goKG5ld0RyYWdnYWJsZSkgPT4ge1xuICAgICAgbGV0IGluZGV4ID0gaW5kZXhPZk5lYXJlc3RQb2ludChsaXN0T2xkUG9zaXRpb24sIHRoaXMuZ2V0UG9zaXRpb24obmV3RHJhZ2dhYmxlKSwgdGhpcy5yYWRpdXMsIHRoaXMuZ2V0RGlzdGFuY2UpXG4gICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgIGluZGV4ID0gbmV3TGlzdC5sZW5ndGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluZGV4ID0gbmV3TGlzdC5pbmRleE9mKG9kbERyYWdnYWJsZXNMaXN0W2luZGV4XSlcbiAgICAgIH1cbiAgICAgIG5ld0xpc3Quc3BsaWNlKGluZGV4LCAwLCBuZXdEcmFnZ2FibGUpXG4gICAgfSlcbiAgICBuZXdEcmFnZ2FibGVzLmZvckVhY2goKG5ld0RyYWdnYWJsZSkgPT4ge1xuICAgICAgaW5kZXhPZk5ld3MucHVzaChuZXdMaXN0LmluZGV4T2YobmV3RHJhZ2dhYmxlKSlcbiAgICB9KVxuICAgIHJldHVybiBuZXdMaXN0XG4gIH1cbn1cblxuY2xhc3MgRmxvYXRSaWdodFN0cmF0ZWd5IGV4dGVuZHMgRmxvYXRMZWZ0U3RyYXRlZ3kge1xuICBjb25zdHJ1Y3RvcihyZWN0YW5nbGUsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcihyZWN0YW5nbGUsIG9wdGlvbnMpXG5cbiAgICB0aGlzLnBhZGRpbmdUb3BSaWdodCA9IG9wdGlvbnMucGFkZGluZ1RvcFJpZ2h0IHx8IG5ldyBQb2ludCg1LCA1KVxuICAgIHRoaXMucGFkZGluZ0JvdHRvbUxlZnQgPSBvcHRpb25zLnBhZGRpbmdCb3R0b21MZWZ0IHx8IG5ldyBQb2ludCgwLCAwKVxuICAgIHRoaXMueUdhcEJldHdlZW5EcmFnZ2FibGVzID0gb3B0aW9ucy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgfHwgMFxuXG4gICAgdGhpcy5wYWRkaW5nQm90dG9tTmVnTGVmdCA9IG5ldyBQb2ludCgtdGhpcy5wYWRkaW5nQm90dG9tTGVmdC54LCB0aGlzLnBhZGRpbmdCb3R0b21MZWZ0LnkpXG4gIH1cblxuICBwb3NpdGlvbmluZyhyZWN0YW5nbGVMaXN0LCBfaW5kZXhlc09mTmV3cykge1xuICAgIGNvbnN0IGJvdW5kUmVjdCA9IHRoaXMuYm91bmRSZWN0XG4gICAgbGV0IGJvdW5kYXJ5UG9pbnRzID0gW2JvdW5kUmVjdC5nZXRQMigpXVxuXG4gICAgcmVjdGFuZ2xlTGlzdC5mb3JFYWNoKChyZWN0LCByZWN0SW5kZXgpID0+IHtcbiAgICAgIGxldCBwb3NpdGlvbiwgaXNWYWxpZCA9IGZhbHNlXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvdW5kYXJ5UG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHBvc2l0aW9uID0gbmV3IFBvaW50KFxuICAgICAgICAgIGJvdW5kYXJ5UG9pbnRzW2ldLnggLSByZWN0LnNpemUueCAtIHRoaXMucGFkZGluZ1RvcFJpZ2h0LngsXG4gICAgICAgICAgaSA+IDAgPyAoYm91bmRhcnlQb2ludHNbaSAtIDFdLnkgKyB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcykgOiAoYm91bmRSZWN0LnBvc2l0aW9uLnkgKyB0aGlzLnBhZGRpbmdUb3BSaWdodC55KVxuICAgICAgICApXG5cbiAgICAgICAgaXNWYWxpZCA9IChwb3NpdGlvbi54ID4gcmVjdC5wb3NpdGlvbi54KVxuICAgICAgICBpZiAoaXNWYWxpZCkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICBwb3NpdGlvbiA9IG5ldyBQb2ludChcbiAgICAgICAgICBib3VuZFJlY3QuZ2V0UDIoKS54ICAtIHJlY3Quc2l6ZS54IC0gdGhpcy5wYWRkaW5nVG9wUmlnaHQueCxcbiAgICAgICAgICBib3VuZGFyeVBvaW50c1tib3VuZGFyeVBvaW50cy5sZW5ndGggLSAxXS55ICsgKHJlY3RJbmRleCA+IDAgPyB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyA6IHRoaXMucGFkZGluZ1RvcFJpZ2h0LnkpXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIHJlY3QucG9zaXRpb24gPSBwb3NpdGlvblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZW1vdmFibGUgJiYgcmVjdC5nZXRQNCgpLnkgPiBib3VuZFJlY3QuZ2V0UDQoKS55KSB7XG4gICAgICAgIHJlY3QucmVtb3ZhYmxlID0gdHJ1ZVxuICAgICAgfVxuICAgICAgYm91bmRhcnlQb2ludHMgPSBhZGRQb2ludFRvQm91bmRQb2ludHMoYm91bmRhcnlQb2ludHMsIHJlY3QuZ2V0UDQoKS5hZGQodGhpcy5wYWRkaW5nQm90dG9tTmVnTGVmdCksIHRydWUpXG4gICAgfSlcbiAgICByZXR1cm4gcmVjdGFuZ2xlTGlzdFxuICB9XG59XG5cbmV4cG9ydCB7IE5vdENyb3NzaW5nU3RyYXRlZ3ksIEZsb2F0TGVmdFN0cmF0ZWd5LCBGbG9hdFJpZ2h0U3RyYXRlZ3kgfVxuIiwiaW1wb3J0IHJhbmdlIGZyb20gJy4vdXRpbHMvcmFuZ2UuanMnXG5pbXBvcnQgcmVtb3ZlSXRlbSBmcm9tICcuL3V0aWxzL3JlbW92ZS1hcnJheS1pdGVtJ1xuaW1wb3J0IGdldERlZmF1bHRDb250YWluZXIgZnJvbSAnLi91dGlscy9nZXQtZGVmYXVsdC1jb250YWluZXInXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnRFbWl0dGVyJ1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tICcuL2dlb21ldHJ5L3JlY3RhbmdsZSdcbmltcG9ydCB7IHRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3RvcnkgfSBmcm9tICcuL2dlb21ldHJ5L2Rpc3RhbmNlcydcbmltcG9ydCB7IHNjb3BlcywgZGVmYXVsdFNjb3BlIH0gZnJvbSAnLi9zY29wZSdcblxuaW1wb3J0IHsgRmxvYXRMZWZ0U3RyYXRlZ3kgfSBmcm9tICcuL3Bvc2l0aW9uaW5nJ1xuaW1wb3J0IHsgQm91bmRUb0VsZW1lbnQgfSBmcm9tICcuL2JvdW5kaW5nJ1xuXG5jb25zdCBhZGRUb0RlZmF1bHRTY29wZSA9IGZ1bmN0aW9uKHRhcmdldCkge1xuICBkZWZhdWx0U2NvcGUuYWRkVGFyZ2V0KHRhcmdldClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFyZ2V0IGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgZHJhZ2dhYmxlcywgb3B0aW9ucyA9IHt9KSB7XG4gICAgc3VwZXIob3B0aW9ucylcbiAgICBjb25zdCB0YXJnZXQgPSB0aGlzXG5cbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHRpbWVFbmQ6IDIwMCxcbiAgICAgIHRpbWVFeGNhbmdlOiA0MDBcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGhpcy5wb3NpdGlvbmluZ1N0cmF0ZWd5ID0gb3B0aW9ucy5zdHJhdGVneSB8fCBuZXcgRmxvYXRMZWZ0U3RyYXRlZ3koXG4gICAgICB0aGlzLmdldFJlY3RhbmdsZS5iaW5kKHRoaXMpLFxuICAgICAge1xuICAgICAgICByYWRpdXM6IDgwLFxuICAgICAgICBnZXREaXN0YW5jZTogdHJhbnNmb3JtZWRTcGFjZURpc3RhbmNlRmFjdG9yeSh7IHg6IDEsIHk6IDQgfSksXG4gICAgICAgIHJlbW92YWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIClcblxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgICBkcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnRhcmdldHMucHVzaCh0YXJnZXQpKVxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZXNcblxuICAgIFRhcmdldC5lbWl0dGVyLmVtaXQoJ3RhcmdldDpjcmVhdGUnLCB0aGlzKVxuXG4gICAgdGhpcy5zdGFydEJvdW5kaW5nKClcbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgc3RhcnRCb3VuZGluZygpIHtcbiAgICB0aGlzLmJvdW5kID0gdGhpcy5vcHRpb25zLmJvdW5kIHx8IEJvdW5kVG9FbGVtZW50LmJvdW5kaW5nKHRoaXMuZWxlbWVudClcbiAgfVxuXG4gIHBvc2l0aW9uaW5nIChkcmFnZ2FibGVzLCBpbmRleGVzT2ZOZXcpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbmluZ1N0cmF0ZWd5LnBvc2l0aW9uaW5nKGRyYWdnYWJsZXMsIGluZGV4ZXNPZk5ldylcbiAgfVxuXG4gIHNvcnRpbmcgKG9sZERyYWdnYWJsZXMsIG5ld0RyYWdnYWJsZXMsIGluZGV4T2ZOZXdzKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25pbmdTdHJhdGVneS5zb3J0aW5nKG9sZERyYWdnYWJsZXMsIG5ld0RyYWdnYWJsZXMsIGluZGV4T2ZOZXdzKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBsZXQgcmVjdGFuZ2xlcywgaW5kZXhlc09mTmV3XG5cbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcyA9IHRoaXMuZHJhZ2dhYmxlcy5maWx0ZXIoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgbGV0IGVsZW1lbnQgPSBkcmFnZ2FibGUuZWxlbWVudC5wYXJlbnROb2RlXG4gICAgICB3aGlsZSAoZWxlbWVudCkge1xuICAgICAgICBpZiAoZWxlbWVudCA9PT0gdGhpcy5lbGVtZW50KSB7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlXG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9KVxuXG4gICAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmxlbmd0aCkge1xuICAgICAgaW5kZXhlc09mTmV3ID0gcmFuZ2UodGhpcy5pbm5lckRyYWdnYWJsZXMubGVuZ3RoKVxuICAgICAgcmVjdGFuZ2xlcyA9IHRoaXMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgICAgfSksIGluZGV4ZXNPZk5ldylcbiAgICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgaW5kZXhlc09mTmV3KVxuICAgICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB0aGlzLmVtaXQoJ3RhcmdldDphZGQnLCBkcmFnZ2FibGUpKVxuICAgIH1cbiAgfVxuXG4gIGdldFJlY3RhbmdsZSgpIHtcbiAgICByZXR1cm4gUmVjdGFuZ2xlLmZyb21FbGVtZW50KHRoaXMuZWxlbWVudCwgdGhpcy5jb250YWluZXIsIHRydWUpXG4gIH1cblxuICBjYXRjaERyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmNhdGNoRHJhZ2dhYmxlKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmNhdGNoRHJhZ2dhYmxlKHRoaXMsIGRyYWdnYWJsZSlcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGFyZ2V0UmVjdGFuZ2xlID0gdGhpcy5nZXRSZWN0YW5nbGUoKVxuICAgICAgY29uc3QgZHJhZ2dhYmxlU3F1YXJlID0gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpLmdldFNxdWFyZSgpXG5cbiAgICAgIHJldHVybiBkcmFnZ2FibGVTcXVhcmUgPCB0YXJnZXRSZWN0YW5nbGUuZ2V0U3F1YXJlKClcbiAgICAgICAgICAgICAgJiYgdGFyZ2V0UmVjdGFuZ2xlLmluY2x1ZGVQb2ludChkcmFnZ2FibGUuZ2V0Q2VudGVyKCkpXG4gICAgfVxuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UmVjdGFuZ2xlKCkucG9zaXRpb25cbiAgfVxuXG4gIGdldFNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UmVjdGFuZ2xlKCkuc2l6ZVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICBzY29wZXMuZm9yRWFjaCgoc2NvcGUpID0+IHJlbW92ZUl0ZW0oc2NvcGUudGFyZ2V0cywgdGhpcykpXG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgfSksIFtdKVxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgW10sIDApXG4gIH1cblxuICBvbkVuZChkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBuZXdEcmFnZ2FibGVzSW5kZXggPSBbXVxuXG4gICAgaWYgKHRoaXMuZ2V0UmVjdGFuZ2xlKCkuaW5jbHVkZVBvaW50KGRyYWdnYWJsZS5nZXRDZW50ZXIoKSkpIHtcbiAgICAgIGRyYWdnYWJsZS5wb3NpdGlvbiA9IHRoaXMuYm91bmQoZHJhZ2dhYmxlLnBvc2l0aW9uLCBkcmFnZ2FibGUuZ2V0U2l6ZSgpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICB0aGlzLmVtaXQoJ3RhcmdldDpiZWZvcmVBZGQnLCBkcmFnZ2FibGUpXG5cbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcyA9IHRoaXMuc29ydGluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcywgW2RyYWdnYWJsZV0sIG5ld0RyYWdnYWJsZXNJbmRleClcbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBuZXdEcmFnZ2FibGVzSW5kZXgpXG5cbiAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIG5ld0RyYWdnYWJsZXNJbmRleClcbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMSkge1xuICAgICAgdGhpcy5hZGRSZW1vdmVPbk1vdmUoZHJhZ2dhYmxlKVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgaW5kZXhlc09mTmV3LCB0aW1lKSB7XG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuc2xpY2UoMCkuZm9yRWFjaCgoZHJhZ2dhYmxlLCBpKSA9PiB7XG4gICAgICBjb25zdCByZWN0ID0gcmVjdGFuZ2xlc1tpXSxcbiAgICAgICAgdGltZUVuZCA9IHRpbWUgfHwgdGltZSA9PT0gMCA/IHRpbWUgOiBpbmRleGVzT2ZOZXcuaW5kZXhPZihpKSAhPT0gLTEgPyB0aGlzLm9wdGlvbnMudGltZUVuZCA6IHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZVxuXG4gICAgICBpZiAocmVjdC5yZW1vdmFibGUpIHtcbiAgICAgICAgZHJhZ2dhYmxlLm1vdmUoZHJhZ2dhYmxlLmluaXRpYWxQb3NpdGlvbiwgdGltZUVuZCwgdHJ1ZSwgdHJ1ZSlcbiAgICAgICAgcmVtb3ZlSXRlbSh0aGlzLmlubmVyRHJhZ2dhYmxlcywgZHJhZ2dhYmxlKVxuICAgICAgICB0aGlzLmVtaXQoJ3RhcmdldDpyZW1vdmUnLCBkcmFnZ2FibGUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkcmFnZ2FibGUubW92ZShyZWN0LnBvc2l0aW9uLCB0aW1lRW5kLCB0cnVlLCB0cnVlKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBhZGQoZHJhZ2dhYmxlLCB0aW1lKSB7XG4gICAgY29uc3QgbmV3RHJhZ2dhYmxlc0luZGV4ID0gdGhpcy5pbm5lckRyYWdnYWJsZXMubGVuZ3RoXG5cbiAgICB0aGlzLmVtaXQoJ3RhcmdldDpiZWZvcmVBZGQnLCBkcmFnZ2FibGUpXG5cbiAgICB0aGlzLnB1c2hJbm5lckRyYWdnYWJsZShkcmFnZ2FibGUpXG4gICAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgbmV3RHJhZ2dhYmxlc0luZGV4LCBkcmFnZ2FibGUpXG5cbiAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIFtuZXdEcmFnZ2FibGVzSW5kZXhdLCB0aW1lIHx8IDApXG4gICAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTEpIHtcbiAgICAgIHRoaXMuYWRkUmVtb3ZlT25Nb3ZlKGRyYWdnYWJsZSlcbiAgICB9XG4gIH1cblxuICBwdXNoSW5uZXJEcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKT09PS0xKSB7XG4gICAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5wdXNoKGRyYWdnYWJsZSlcbiAgICB9XG4gIH1cblxuICBhZGRSZW1vdmVPbk1vdmUoZHJhZ2dhYmxlKSB7XG4gICAgZHJhZ2dhYmxlLm9uKCdkcmFnOm1vdmUnLCB0aGlzLnJlbW92ZUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICB0aGlzLnJlbW92ZShkcmFnZ2FibGUpXG4gICAgfSlcblxuICAgIHRoaXMuZW1pdCgndGFyZ2V0OmFkZCcsIGRyYWdnYWJsZSlcbiAgfVxuXG4gIHJlbW92ZShkcmFnZ2FibGUpIHtcbiAgICBkcmFnZ2FibGUudW5zdWJzY3JpYmUoJ2RyYWc6bW92ZScsIHRoaXMucmVtb3ZlSGFuZGxlcilcblxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpXG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuc3BsaWNlKGluZGV4LCAxKVxuXG4gICAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgW10pXG5cbiAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIFtdKVxuICAgIHRoaXMuZW1pdCgndGFyZ2V0OnJlbW92ZScsIGRyYWdnYWJsZSlcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLm1vdmUoZHJhZ2dhYmxlLmluaXRpYWxQb3NpdGlvbiwgMCwgdHJ1ZSwgdHJ1ZSlcbiAgICAgIHRoaXMuZW1pdCgndGFyZ2V0OnJlbW92ZScsIGRyYWdnYWJsZSlcbiAgICB9KVxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzID0gW11cbiAgfVxuXG4gIGdldFNvcnRlZERyYWdnYWJsZXMoKSB7XG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuc2xpY2UoKVxuICB9XG5cbiAgZ2V0IGNvbnRhaW5lcigpIHtcbiAgICByZXR1cm4gKHRoaXMuX2NvbnRhaW5lciA9IHRoaXMuX2NvbnRhaW5lciB8fCB0aGlzLm9wdGlvbnMuY29udGFpbmVyIHx8IHRoaXMub3B0aW9ucy5wYXJlbnQgfHwgZ2V0RGVmYXVsdENvbnRhaW5lcih0aGlzLmVsZW1lbnQpKVxuICB9XG59XG5cblRhcmdldC5lbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcigpXG5UYXJnZXQuZW1pdHRlci5vbigndGFyZ2V0OmNyZWF0ZScsIGFkZFRvRGVmYXVsdFNjb3BlKVxuIiwiaW1wb3J0IHJlbW92ZUl0ZW0gZnJvbSAnLi91dGlscy9yZW1vdmUtYXJyYXktaXRlbSdcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudEVtaXR0ZXInXG5pbXBvcnQgRHJhZ2dhYmxlIGZyb20gJy4vZHJhZ2dhYmxlJ1xuaW1wb3J0IFRhcmdldCBmcm9tICcuL3RhcmdldCdcblxuY29uc3Qgc2NvcGVzID0gW11cblxuY2xhc3MgU2NvcGUgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvcihkcmFnZ2FibGVzLCB0YXJnZXRzLCBvcHRpb25zPXt9KSB7XG4gICAgc3VwZXIob3B0aW9ucylcbiAgICBzY29wZXMuZm9yRWFjaCgoc2NvcGUpID0+IHtcbiAgICAgIGlmIChkcmFnZ2FibGVzKSB7XG4gICAgICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICAgICAgcmVtb3ZlSXRlbShzY29wZS5kcmFnZ2FibGVzLCBkcmFnZ2FibGUpXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIGlmICh0YXJnZXRzKSB7XG4gICAgICAgIHRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB7XG4gICAgICAgICAgcmVtb3ZlSXRlbShzY29wZS50YXJnZXRzLCB0YXJnZXQpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZXMgfHwgW11cbiAgICB0aGlzLnRhcmdldHMgPSB0YXJnZXRzIHx8IFtdXG4gICAgc2NvcGVzLnB1c2godGhpcylcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICB0aW1lRW5kOiAob3B0aW9ucy50aW1lRW5kKSB8fCA0MDBcbiAgICB9XG5cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUuZHJhZ0VuZEFjdGlvbiA9ICgpID0+IHRoaXMub25FbmQoZHJhZ2dhYmxlKVxuICAgIH0pXG4gIH1cblxuICBhZGREcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxuICAgIGRyYWdnYWJsZS5kcmFnRW5kQWN0aW9uID0gKCkgPT4gdGhpcy5vbkVuZChkcmFnZ2FibGUpXG4gIH1cblxuICBhZGRUYXJnZXQodGFyZ2V0KSB7XG4gICAgdGhpcy50YXJnZXRzLnB1c2godGFyZ2V0KVxuICB9XG5cbiAgb25FbmQoZHJhZ2dhYmxlKSB7XG4gICAgY29uc3Qgc2hvdFRhcmdldHMgPSB0aGlzLnRhcmdldHMuZmlsdGVyKCh0YXJnZXQpID0+IHtcbiAgICAgIHJldHVybiB0YXJnZXQuZHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkgIT09IC0xXG4gICAgfSkuZmlsdGVyKCh0YXJnZXQpID0+IHtcbiAgICAgIHJldHVybiB0YXJnZXQuY2F0Y2hEcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICAgIH0pLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIHJldHVybiBhLmdldFJlY3RhbmdsZSgpLmdldFNxdWFyZSgpIC0gYi5nZXRSZWN0YW5nbGUoKS5nZXRTcXVhcmUoKVxuICAgIH0pXG5cbiAgICBpZiAoc2hvdFRhcmdldHMubGVuZ3RoKSB7XG4gICAgICBzaG90VGFyZ2V0c1swXS5vbkVuZChkcmFnZ2FibGUpXG4gICAgfSBlbHNlIGlmIChkcmFnZ2FibGUudGFyZ2V0cy5sZW5ndGgpIHtcbiAgICAgIGRyYWdnYWJsZS5waW5Qb3NpdGlvbihkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uLCB0aGlzLm9wdGlvbnMudGltZUVuZClcbiAgICB9XG5cbiAgICB0aGlzLmVtaXQoJ3Njb3BlOmNoYW5nZScpXG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLnRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB0YXJnZXQucmVzZXQoKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnJlZnJlc2goKSlcbiAgICB0aGlzLnRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB0YXJnZXQucmVmcmVzaCgpKVxuICB9XG5cbiAgZ2V0IHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXRzLm1hcCgodGFyZ2V0KSA9PiB7XG4gICAgICByZXR1cm4gdGFyZ2V0LmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4gdGhpcy5kcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSlcbiAgICB9KVxuICB9XG5cbiAgc2V0IHBvc2l0aW9ucyhwb3NpdGlvbnMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gJ3dyb25nIGFycmF5IGxlbmd0aCdcbiAgICBpZiAocG9zaXRpb25zLmxlbmd0aCA9PT0gdGhpcy50YXJnZXRzLmxlbmd0aCkge1xuICAgICAgdGhpcy50YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4gdGFyZ2V0LnJlc2V0KCkpXG5cbiAgICAgIHBvc2l0aW9ucy5mb3JFYWNoKCh0YXJnZXRJbmRleGVzLCBpKSA9PiB7XG4gICAgICAgIHRhcmdldEluZGV4ZXMuZm9yRWFjaCgoaW5kZXgpID0+IHtcbiAgICAgICAgICB0aGlzLnRhcmdldHNbaV0uYWRkKHRoaXMuZHJhZ2dhYmxlc1tpbmRleF0pXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBtZXNzYWdlXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IGRlZmF1bHRTY29wZSA9IG5ldyBTY29wZSgpXG5cbmZ1bmN0aW9uIHNjb3BlKGZuKSB7XG4gIGNvbnN0IGN1cnJlbnRTY29wZSA9IG5ldyBTY29wZSgpXG5cbiAgY29uc3QgYWRkRHJhZ2dhYmxlVG9TY29wZSA9IGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICAgIGN1cnJlbnRTY29wZS5hZGREcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICAgIERyYWdnYWJsZS5lbWl0dGVyLmludGVycnVwdCgpXG4gIH1cblxuICBjb25zdCBhZGRUYXJnZXRUb1Njb3BlID0gZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgY3VycmVudFNjb3BlLmFkZFRhcmdldCh0YXJnZXQpXG4gICAgRHJhZ2dhYmxlLmVtaXR0ZXIuaW50ZXJydXB0KClcbiAgfVxuXG4gIERyYWdnYWJsZS5lbWl0dGVyLnByZXBlbmRPbignZHJhZ2dhYmxlOmNyZWF0ZScsIGFkZERyYWdnYWJsZVRvU2NvcGUpXG4gIFRhcmdldC5lbWl0dGVyLnByZXBlbmRPbigndGFyZ2V0OmNyZWF0ZScsIGFkZFRhcmdldFRvU2NvcGUpXG4gIGZuLmNhbGwoKVxuICBEcmFnZ2FibGUuZW1pdHRlci51bnN1YnNjcmliZSgnZHJhZ2dhYmxlOmNyZWF0ZScsIGFkZERyYWdnYWJsZVRvU2NvcGUpXG4gIFRhcmdldC5lbWl0dGVyLnVuc3Vic2NyaWJlKCd0YXJnZXQ6Y3JlYXRlJywgYWRkVGFyZ2V0VG9TY29wZSlcbiAgcmV0dXJuIGN1cnJlbnRTY29wZVxufVxuXG5leHBvcnQgeyBzY29wZXMsIGRlZmF1bHRTY29wZSwgU2NvcGUsIHNjb3BlIH1cbiIsImZ1bmN0aW9uIGNoZWNrU3VwcG9ydFBhc3NpdmVFdmVudHMoKSB7XG4gIGxldCBwYXNzaXZlU3VwcG9ydGVkID0gZmFsc2VcblxuICB0cnkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdwYXNzaXZlJywge1xuICAgICAgZ2V0KCkge1xuICAgICAgICByZXR1cm4gKHBhc3NpdmVTdXBwb3J0ZWQgPSB0cnVlKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndGVzdCcsIG9wdGlvbnMsIG9wdGlvbnMpXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Rlc3QnLCBvcHRpb25zLCBvcHRpb25zKVxuICB9IGNhdGNoIChfZXJyKSB7XG4gICAgcGFzc2l2ZVN1cHBvcnRlZCA9IGZhbHNlXG4gIH1cblxuICByZXR1cm4gcGFzc2l2ZVN1cHBvcnRlZFxufVxuXG5leHBvcnQgY29uc3QgaXNTdXBwb3J0UGFzc2l2ZUV2ZW50cyA9IGNoZWNrU3VwcG9ydFBhc3NpdmVFdmVudHMoKVxuXG5mdW5jdGlvbiBldmVudE9wdGlvbnMob3B0aW9ucywgZmFsbGJhY2sgPSBmYWxzZSkge1xuICByZXR1cm4gaXNTdXBwb3J0UGFzc2l2ZUV2ZW50cyA/IG9wdGlvbnMgOiBmYWxsYmFja1xufVxuXG5leHBvcnQgeyBldmVudE9wdGlvbnMgfVxuXG5leHBvcnQgZGVmYXVsdCBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0aHJvdHRsZShmdW5jLCB3YWl0KSB7XG4gIGxldCBsYXN0VGltZSA9IDBcblxuICByZXR1cm4gZnVuY3Rpb24gZXhlY3V0ZWRGdW5jdGlvbigpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpc1xuICAgIGNvbnN0IGFyZ3MgPSBhcmd1bWVudHNcblxuICAgIGNvbnN0IG5vdyA9IERhdGUubm93KClcbiAgICBpZiAobm93IC0gbGFzdFRpbWUgPj0gd2FpdCkge1xuICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKVxuICAgICAgbGFzdFRpbWUgPSBub3dcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBnZXREZWZhdWx0Q29udGFpbmVyIGZyb20gJy4vdXRpbHMvZ2V0LWRlZmF1bHQtY29udGFpbmVyJ1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50RW1pdHRlcidcbmltcG9ydCBnZXRTdHlsZVByb3BlcnR5IGZyb20gJ2Rlc2FuZHJvLWdldC1zdHlsZS1wcm9wZXJ0eSdcbmltcG9ydCB7IEJvdW5kVG9FbGVtZW50IH0gZnJvbSAnLi9ib3VuZGluZydcbmltcG9ydCBQb2ludCBmcm9tICcuL2dlb21ldHJ5L3BvaW50J1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tICcuL2dlb21ldHJ5L3JlY3RhbmdsZSdcbmltcG9ydCB7IGRlZmF1bHRTY29wZSB9IGZyb20gJy4vc2NvcGUnXG5pbXBvcnQgaXNTdXBwb3J0UGFzc2l2ZUV2ZW50cyBmcm9tICcuL3V0aWxzL2lzLXN1cHBvcnQtcGFzc2l2ZS1ldmVudHMnXG5pbXBvcnQgdGhyb3R0bGUgZnJvbSAnLi91dGlscy90aHJvdHRsZSdcblxuY29uc3QgdGhyb3R0bGVkRHJhZ092ZXIgPSAoY2FsbGJhY2ssIGR1cmF0aW9uKSA9PiB7XG4gIGNvbnN0IHRocm90dGxlZENhbGxiYWNrID0gdGhyb3R0bGUoKGV2ZW50KSA9PiBjYWxsYmFjayhldmVudCksIGR1cmF0aW9uKVxuICByZXR1cm4gZXZlbnQgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB0aHJvdHRsZWRDYWxsYmFjayhldmVudClcbiAgfVxufVxuXG5jb25zdCBwYXNzaXZlRmFsc2UgPSBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzID8geyBwYXNzaXZlOiBmYWxzZSB9IDogZmFsc2VcblxuY29uc3QgaXNUb3VjaCA9ICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvd1xuY29uc3QgbW91c2VFdmVudHMgPSB7XG4gIHN0YXJ0OiAnbW91c2Vkb3duJyxcbiAgbW92ZTogJ21vdXNlbW92ZScsXG4gIGVuZDogJ21vdXNldXAnXG59XG5jb25zdCB0b3VjaEV2ZW50cyA9IHtcbiAgc3RhcnQ6ICd0b3VjaHN0YXJ0JyxcbiAgbW92ZTogJ3RvdWNobW92ZScsXG4gIGVuZDogJ3RvdWNoZW5kJ1xufVxuY29uc3QgZHJhZ2dhYmxlcyA9IFtdXG5jb25zdCB0cmFuc2Zvcm1Qcm9wZXJ0eSA9IGdldFN0eWxlUHJvcGVydHkoJ3RyYW5zZm9ybScpXG5jb25zdCB0cmFuc2l0aW9uUHJvcGVydHkgPSBnZXRTdHlsZVByb3BlcnR5KCd0cmFuc2l0aW9uJylcblxuZnVuY3Rpb24gZ2V0VG91Y2hCeUlEKGVsZW1lbnQsIHRvdWNoSWQpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50LmNoYW5nZWRUb3VjaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGVsZW1lbnQuY2hhbmdlZFRvdWNoZXNbaV0uaWRlbnRpZmllciA9PT0gdG91Y2hJZCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQuY2hhbmdlZFRvdWNoZXNbaV1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmZ1bmN0aW9uIHByZXZlbnREb3VibGVJbml0KGRyYWdnYWJsZSkge1xuICBjb25zdCBtZXNzYWdlID0gXCJmb3IgdGhpcyBlbGVtZW50IERyYWdlZS5EcmFnZ2FibGUgaXMgYWxyZWFkeSBleGlzdCwgZG9uJ3QgY3JlYXRlIGl0IHR3aWNlIFwiXG4gIGlmIChkcmFnZ2FibGVzLnNvbWUoKGV4aXN0aW5nKSA9PiBkcmFnZ2FibGUuZWxlbWVudCA9PT0gZXhpc3RpbmcuZWxlbWVudCkpIHtcbiAgICB0aHJvdyBtZXNzYWdlXG4gIH1cbiAgZHJhZ2dhYmxlcy5wdXNoKGRyYWdnYWJsZSlcbn1cblxuZnVuY3Rpb24gYWRkVG9EZWZhdWx0U2NvcGUoZHJhZ2dhYmxlKSB7XG4gIGRlZmF1bHRTY29wZS5hZGREcmFnZ2FibGUoZHJhZ2dhYmxlKVxufVxuXG5mdW5jdGlvbiBjb3B5U3R5bGVzKHNvdXJjZSwgZGVzdGluYXRpb24pIHtcbiAgY29uc3QgY3MgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShzb3VyY2UpXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGtleSA9IGNzW2ldXG4gICAgaWYgKChrZXkuaW5kZXhPZigndHJhbnNpdGlvbicpIDwgMCkgJiYgKGtleS5pbmRleE9mKCd0cmFuc2Zvcm0nKSA8IDApKSB7XG4gICAgICBkZXN0aW5hdGlvbi5zdHlsZVtrZXldID0gY3Nba2V5XVxuICAgIH1cbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc291cmNlLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgY29weVN0eWxlcyhzb3VyY2UuY2hpbGRyZW5baV0sIGRlc3RpbmF0aW9uLmNoaWxkcmVuW2ldKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYWdnYWJsZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcihvcHRpb25zKVxuICAgIHRoaXMudGFyZ2V0cyA9IFtdXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9uc1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgICBwcmV2ZW50RG91YmxlSW5pdCh0aGlzKVxuICAgIERyYWdnYWJsZS5lbWl0dGVyLmVtaXQoJ2RyYWdnYWJsZTpjcmVhdGUnLCB0aGlzKVxuICAgIHRoaXMuX2VuYWJsZSA9IHRydWVcbiAgICB0aGlzLnN0YXJ0Qm91bmRpbmcoKVxuICAgIHRoaXMuc3RhcnRQb3NpdGlvbmluZygpXG4gICAgdGhpcy5zdGFydExpc3RlbmluZygpXG4gIH1cblxuICBzdGFydEJvdW5kaW5nKCkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuYm91bmQpIHtcbiAgICAgIHRoaXMuYm91bmRpbmcgPSB7IGJvdW5kOiB0aGlzLm9wdGlvbnMuYm91bmQgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmJvdW5kaW5nID0gbmV3IEJvdW5kVG9FbGVtZW50KHRoaXMuY29udGFpbmVyLCB0aGlzLmNvbnRhaW5lcilcbiAgICB9XG4gIH1cblxuICBzdGFydFBvc2l0aW9uaW5nKCkge1xuICAgIHRoaXMuX3NldERlZmF1bHRUcmFuc2l0aW9uKClcbiAgICB0aGlzLm9mZnNldCA9IFBvaW50LmVsZW1lbnRPZmZzZXQodGhpcy5lbGVtZW50LCB0aGlzLmNvbnRhaW5lciwgdHJ1ZSlcbiAgICB0aGlzLnBpbm5lZFBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICB0aGlzLmluaXRpYWxQb3NpdGlvbiA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbiB8fCB0aGlzLm9mZnNldFxuXG4gICAgdGhpcy5waW5Qb3NpdGlvbih0aGlzLmluaXRpYWxQb3NpdGlvbilcblxuICAgIGlmICh0aGlzLmJvdW5kaW5nLnJlZnJlc2gpIHtcbiAgICAgIHRoaXMuYm91bmRpbmcucmVmcmVzaCgpXG4gICAgfVxuICB9XG5cbiAgc3RhcnRMaXN0ZW5pbmcoKSB7XG4gICAgdGhpcy5fZHJhZ1N0YXJ0ID0gKGV2ZW50KSA9PiB0aGlzLmRyYWdTdGFydChldmVudClcbiAgICB0aGlzLl9kcmFnTW92ZSA9IChldmVudCkgPT4gdGhpcy5kcmFnTW92ZShldmVudClcbiAgICB0aGlzLl9kcmFnRW5kID0gKGV2ZW50KSA9PiB0aGlzLmRyYWdFbmQoZXZlbnQpXG4gICAgdGhpcy5fbmF0aXZlRHJhZ1N0YXJ0ID0gKGV2ZW50KSA9PiB0aGlzLm5hdGl2ZURyYWdTdGFydChldmVudClcbiAgICB0aGlzLl9uYXRpdmVEcmFnT3ZlciA9IHRocm90dGxlZERyYWdPdmVyKChldmVudCkgPT4gdGhpcy5uYXRpdmVEcmFnT3ZlcihldmVudCksIHRoaXMuZHJhZ092ZXJUaHJvdHRsZUR1cmF0aW9uKVxuICAgIHRoaXMuX25hdGl2ZURyYWdFbmQgPSAoZXZlbnQpID0+IHRoaXMubmF0aXZlRHJhZ0VuZChldmVudClcbiAgICB0aGlzLl9uYXRpdmVEcm9wID0gKGV2ZW50KSA9PiB0aGlzLm5hdGl2ZURyb3AoZXZlbnQpXG4gICAgdGhpcy5fc2Nyb2xsID0gKGV2ZW50KSA9PiB0aGlzLm9uU2Nyb2xsKGV2ZW50KVxuXG4gICAgdGhpcy5oYW5kbGVyLmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydCwgcGFzc2l2ZUZhbHNlKVxuICAgIHRoaXMuaGFuZGxlci5hZGRFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQsIHBhc3NpdmVGYWxzZSlcbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgdGhpcy5fbmF0aXZlRHJhZ1N0YXJ0KVxuICB9XG5cbiAgZ2V0U2l6ZSgpIHtcbiAgICByZXR1cm4gUG9pbnQuZWxlbWVudFNpemUodGhpcy5lbGVtZW50KVxuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMub2Zmc2V0LmFkZCh0aGlzLl90cmFuc2Zvcm1Qb3NpdGlvbiB8fCBuZXcgUG9pbnQoMCwgMCkpXG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25cbiAgfVxuXG4gIGdldENlbnRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi5hZGQodGhpcy5nZXRTaXplKCkubXVsdCgwLjUpKVxuICB9XG5cbiAgX3NldERlZmF1bHRUcmFuc2l0aW9uICgpIHtcbiAgICBpZiAoIXRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNpdGlvblByb3BlcnR5XSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZWxlbWVudClbdHJhbnNpdGlvblByb3BlcnR5XVxuICAgIH1cbiAgfVxuXG4gIF9zZXRUcmFuc2l0aW9uKHRpbWUpIHtcbiAgICBsZXQgdHJhbnNpdGlvbiA9IHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldXG4gICAgY29uc3QgdHJhbnNpdGlvbkNzcyA9IGB0cmFuc2Zvcm0gJHt0aW1lfW1zYFxuXG4gICAgaWYgKCEvdHJhbnNmb3JtIFxcZCptP3MvLnRlc3QodHJhbnNpdGlvbikpIHtcbiAgICAgIGlmICh0cmFuc2l0aW9uKSB7XG4gICAgICAgIHRyYW5zaXRpb24gKz0gYCwgJHt0cmFuc2l0aW9uQ3NzfWBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyYW5zaXRpb24gPSB0cmFuc2l0aW9uQ3NzXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyYW5zaXRpb24gPSB0cmFuc2l0aW9uLnJlcGxhY2UoL3RyYW5zZm9ybSBcXGQqbT9zL2csIHRyYW5zaXRpb25Dc3MpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldICE9PSB0cmFuc2l0aW9uKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNpdGlvblByb3BlcnR5XSA9IHRyYW5zaXRpb25cbiAgICB9XG4gIH1cblxuICBfc2V0VHJhbnNsYXRlKHBvaW50KSB7XG4gICAgdGhpcy5fdHJhbnNmb3JtUG9zaXRpb24gPSBwb2ludFxuICAgIGNvbnN0IHRyYW5zbGF0ZUNzcyA9IGB0cmFuc2xhdGUzZCgke3BvaW50Lnh9cHgsICR7cG9pbnQueX1weCwgMHB4KWBcblxuICAgIGxldCB0cmFuc2Zvcm0gPSB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcGVydHldXG5cbiAgICBpZiAodGhpcy5zaG91bGRSZW1vdmVaZXJvVHJhbnNsYXRlICYmIHBvaW50LnggPT09IDAgJiYgcG9pbnQueSA9PT0gMCkge1xuICAgICAgdHJhbnNmb3JtID0gdHJhbnNmb3JtLnJlcGxhY2UoL3RyYW5zbGF0ZTNkXFwoW14pXStcXCkvLCAnJylcbiAgICB9IGVsc2UgaWYgKCEvdHJhbnNsYXRlM2RcXChbXildK1xcKS8udGVzdCh0cmFuc2Zvcm0pKSB7XG4gICAgICBpZiAodHJhbnNmb3JtKSB7XG4gICAgICAgIHRyYW5zZm9ybSArPSAnICdcbiAgICAgIH1cbiAgICAgIHRyYW5zZm9ybSArPSB0cmFuc2xhdGVDc3NcbiAgICB9IGVsc2Uge1xuICAgICAgdHJhbnNmb3JtID0gdHJhbnNmb3JtLnJlcGxhY2UoL3RyYW5zbGF0ZTNkXFwoW14pXStcXCkvLCB0cmFuc2xhdGVDc3MpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wZXJ0eV0gIT09IHRyYW5zZm9ybSkge1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BlcnR5XSA9IHRyYW5zZm9ybVxuICAgIH1cbiAgfVxuXG4gIG1vdmUocG9pbnQsIHRpbWU9MCwgaXNTaWxlbnQ9ZmFsc2UpIHtcbiAgICBwb2ludCA9IHBvaW50LmNsb25lKClcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9pbnRcblxuICAgIHRoaXMuX3NldFRyYW5zaXRpb24odGltZSlcbiAgICB0aGlzLl9zZXRUcmFuc2xhdGUocG9pbnQuc3ViKHRoaXMub2Zmc2V0KSlcblxuICAgIGlmICghaXNTaWxlbnQpIHtcbiAgICAgIHRoaXMuZW1pdCgnZHJhZzptb3ZlJylcbiAgICB9XG4gIH1cblxuICBwaW5Qb3NpdGlvbihwb2ludCwgdGltZT0wLCBzaWxlbnQ9dHJ1ZSkge1xuICAgIHRoaXMucGlubmVkUG9zaXRpb24gPSBwb2ludC5jbG9uZSgpXG4gICAgdGhpcy5tb3ZlKHRoaXMucGlubmVkUG9zaXRpb24sIHRpbWUsIHNpbGVudClcbiAgfVxuXG4gIHJlc2V0UG9zaXRpb25Ub0luaXRpYWwgKCkge1xuICAgIHRoaXMucGluUG9zaXRpb24odGhpcy5pbml0aWFsUG9zaXRpb24pXG4gIH1cblxuICByZWZyZXNoUG9zaXRpb24gKCkge1xuICAgIHRoaXMuc2V0UG9zaXRpb24odGhpcy5nZXRQb3NpdGlvbigpKVxuICB9XG5cbiAgc2V0UG9zaXRpb24ocG9pbnQpIHtcbiAgICBwb2ludCA9IHBvaW50LmNsb25lKClcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9pbnRcbiAgICB0aGlzLl9zZXRUcmFuc2l0aW9uKDApXG4gICAgdGhpcy5fc2V0VHJhbnNsYXRlKHBvaW50LnN1Yih0aGlzLm9mZnNldCkpXG4gIH1cblxuICBkZXRlcm1pbmVEaXJlY3Rpb24ocG9pbnQpIHtcbiAgICB0aGlzLl9wcmV2aW91c0RpcmVjdGlvblBvc2l0aW9uIHx8PSB0aGlzLl9zdGFydFBvc2l0aW9uXG5cbiAgICB0aGlzLmxlZnREaXJlY3Rpb24gPSAodGhpcy5fcHJldmlvdXNEaXJlY3Rpb25Qb3NpdGlvbi54IDwgcG9pbnQueClcbiAgICB0aGlzLnJpZ2h0RGlyZWN0aW9uID0gKHRoaXMuX3ByZXZpb3VzRGlyZWN0aW9uUG9zaXRpb24ueCA+IHBvaW50LngpXG4gICAgdGhpcy51cERpcmVjdGlvbiA9ICh0aGlzLl9wcmV2aW91c0RpcmVjdGlvblBvc2l0aW9uLnkgPiBwb2ludC55KVxuICAgIHRoaXMuZG93bkRpcmVjdGlvbiA9ICh0aGlzLl9wcmV2aW91c0RpcmVjdGlvblBvc2l0aW9uLnkgPCBwb2ludC55KVxuXG4gICAgdGhpcy5fcHJldmlvdXNEaXJlY3Rpb25Qb3NpdGlvbiA9IHBvaW50XG4gIH1cblxuICBzZWVtc1Njcm9sbGluZygpIHtcbiAgICByZXR1cm4gKCtuZXcgRGF0ZSgpIC0gdGhpcy5fc3RhcnRUb3VjaFRpbWVzdGFtcCkgPCB0aGlzLnRvdWNoRHJhZ2dpbmdUaHJlc2hvbGRcbiAgfVxuXG4gIHNob3VsZFVzZU5hdGl2ZURyYWdBbmREcm9wKCkge1xuICAgIGlmICh0aGlzLmlzVG91Y2hFdmVudCkge1xuICAgICAgcmV0dXJuIHRoaXMubmF0aXZlRHJhZ0FuZERyb3AgJiYgdGhpcy5lbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3BPblRvdWNoXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLm5hdGl2ZURyYWdBbmREcm9wXG4gICAgfVxuICB9XG5cbiAgZHJhZ1N0YXJ0KGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLl9lbmFibGUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuaXNUb3VjaEV2ZW50ID0gKGlzVG91Y2ggJiYgKGV2ZW50IGluc3RhbmNlb2Ygd2luZG93LlRvdWNoRXZlbnQpKVxuXG4gICAgdGhpcy50b3VjaFBvaW50ID0gdGhpcy5fc3RhcnRUb3VjaFBvaW50ID0gbmV3IFBvaW50KFxuICAgICAgdGhpcy5pc1RvdWNoRXZlbnQgPyBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCA6IGV2ZW50LmNsaWVudFgsXG4gICAgICB0aGlzLmlzVG91Y2hFdmVudCA/IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZIDogZXZlbnQuY2xpZW50WVxuICAgIClcblxuICAgIHRoaXMuX3N0YXJ0UG9zaXRpb24gPSB0aGlzLmdldFBvc2l0aW9uKClcbiAgICBpZiAodGhpcy5pc1RvdWNoRXZlbnQpIHtcbiAgICAgIHRoaXMuX3RvdWNoSWQgPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5pZGVudGlmaWVyXG4gICAgICB0aGlzLl9zdGFydFRvdWNoVGltZXN0YW1wID0gK25ldyBEYXRlKClcbiAgICB9XG5cbiAgICB0aGlzLl9zdGFydFdpbmRvd1Njcm9sbFBvaW50ID0gdGhpcy53aW5kb3dTY3JvbGxQb2ludFxuICAgIHRoaXMuX3N0YXJ0UGFyZW50c1Njcm9sbFBvaW50ID0gdGhpcy5wYXJlbnRzU2Nyb2xsUG9pbnRcblxuICAgIGlmIChldmVudC50YXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElucHV0RWxlbWVudCB8fFxuICAgICAgICAgIGV2ZW50LnRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSW5wdXRFbGVtZW50KSB7XG4gICAgICBldmVudC50YXJnZXQuZm9jdXMoKVxuICAgIH1cblxuICAgIGlmICh0aGlzLnNob3VsZFVzZU5hdGl2ZURyYWdBbmREcm9wKCkpIHtcbiAgICAgIGlmICh0aGlzLmlzVG91Y2hFdmVudCAmJiB0aGlzLmVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcE9uVG91Y2gpIHtcbiAgICAgICAgY29uc3QgZW11bGF0ZU9uRmlyc3RNb3ZlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuc2VlbXNTY3JvbGxpbmcoKSkge1xuICAgICAgICAgICAgdGhpcy5jYW5jZWxEcmFnZ2luZygpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wKGV2ZW50KVxuICAgICAgICAgIH1cbiAgICAgICAgICBjYW5jZWxFbXVsYXRpb24oKVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNhbmNlbEVtdWxhdGlvbiA9ICgpID0+IHtcbiAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIGVtdWxhdGVPbkZpcnN0TW92ZSlcbiAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgY2FuY2VsRW11bGF0aW9uKVxuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCBlbXVsYXRlT25GaXJzdE1vdmUsIHBhc3NpdmVGYWxzZSlcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIGNhbmNlbEVtdWxhdGlvbiwgcGFzc2l2ZUZhbHNlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmRyYWdnYWJsZSA9IHRydWVcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX25hdGl2ZURyYWdFbmQsIHBhc3NpdmVGYWxzZSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSwgcGFzc2l2ZUZhbHNlKVxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSwgcGFzc2l2ZUZhbHNlKVxuXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZCwgcGFzc2l2ZUZhbHNlKVxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQsIHBhc3NpdmVGYWxzZSlcbiAgICB9XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fc2Nyb2xsKVxuICAgIHRoaXMucGFyZW50cy5mb3JFYWNoKChwKSA9PiBwLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX3Njcm9sbCkpXG5cbiAgICB0aGlzLmVtaXQoJ2RyYWc6c3RhcnQnKVxuICB9XG5cbiAgZHJhZ01vdmUoZXZlbnQpIHtcbiAgICBsZXQgdG91Y2hcblxuICAgIHRoaXMuaXNEcmFnZ2luZyA9IHRydWVcblxuICAgIHRoaXMuaXNUb3VjaEV2ZW50ID0gKGlzVG91Y2ggJiYgKGV2ZW50IGluc3RhbmNlb2Ygd2luZG93LlRvdWNoRXZlbnQpKVxuICAgIGlmICh0aGlzLmlzVG91Y2hFdmVudCkge1xuICAgICAgdG91Y2ggPSBnZXRUb3VjaEJ5SUQoZXZlbnQsIHRoaXMuX3RvdWNoSWQpXG5cbiAgICAgIGlmICghdG91Y2gpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnNlZW1zU2Nyb2xsaW5nKCkpIHtcbiAgICAgICAgdGhpcy5jYW5jZWxEcmFnZ2luZygpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIHRoaXMudG91Y2hQb2ludCA9IG5ldyBQb2ludChcbiAgICAgIHRoaXMuaXNUb3VjaEV2ZW50ID8gdG91Y2gucGFnZVggOiBldmVudC5jbGllbnRYLFxuICAgICAgdGhpcy5pc1RvdWNoRXZlbnQgPyB0b3VjaC5wYWdlWSA6IGV2ZW50LmNsaWVudFlcbiAgICApXG5cbiAgICBsZXQgcG9pbnQgPSB0aGlzLl9zdGFydFBvc2l0aW9uLmFkZCh0aGlzLnRvdWNoUG9pbnQuc3ViKHRoaXMuX3N0YXJ0VG91Y2hQb2ludCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy53aW5kb3dTY3JvbGxQb2ludC5zdWIodGhpcy5fc3RhcnRXaW5kb3dTY3JvbGxQb2ludCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy5wYXJlbnRzU2Nyb2xsUG9pbnQuc3ViKHRoaXMuX3N0YXJ0UGFyZW50c1Njcm9sbFBvaW50KSlcblxuICAgIHBvaW50ID0gdGhpcy5ib3VuZGluZy5ib3VuZChwb2ludCwgdGhpcy5nZXRTaXplKCkpXG4gICAgdGhpcy5kZXRlcm1pbmVEaXJlY3Rpb24ocG9pbnQpXG4gICAgdGhpcy5tb3ZlKHBvaW50KVxuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkcmFnZWUtYWN0aXZlJylcbiAgfVxuXG4gIGRyYWdFbmQoZXZlbnQpIHtcbiAgICB0aGlzLmlzVG91Y2hFdmVudCA9IChpc1RvdWNoICYmIChldmVudCBpbnN0YW5jZW9mIHdpbmRvdy5Ub3VjaEV2ZW50KSlcblxuICAgIGlmICh0aGlzLmlzVG91Y2hFdmVudCAmJiAhZ2V0VG91Y2hCeUlEKGV2ZW50LCB0aGlzLl90b3VjaElkKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNEcmFnZ2luZykge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB9XG5cbiAgICB0aGlzLmRyYWdFbmRBY3Rpb24oKVxuICAgIHRoaXMuZW1pdCgnZHJhZzplbmQnKVxuICAgIHRoaXMuY2FuY2VsRHJhZ2dpbmcoKVxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2VlLWFjdGl2ZScpKVxuICB9XG5cbiAgb25TY3JvbGwoX2V2ZW50KSB7XG4gICAgbGV0IHBvaW50ID0gdGhpcy5fc3RhcnRQb3NpdGlvbi5hZGQodGhpcy50b3VjaFBvaW50LnN1Yih0aGlzLl9zdGFydFRvdWNoUG9pbnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMud2luZG93U2Nyb2xsUG9pbnQuc3ViKHRoaXMuX3N0YXJ0V2luZG93U2Nyb2xsUG9pbnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMucGFyZW50c1Njcm9sbFBvaW50LnN1Yih0aGlzLl9zdGFydFBhcmVudHNTY3JvbGxQb2ludCkpXG5cbiAgICBwb2ludCA9IHRoaXMuYm91bmRpbmcuYm91bmQocG9pbnQsIHRoaXMuZ2V0U2l6ZSgpKVxuICAgIGlmICghdGhpcy5uYXRpdmVEcmFnQW5kRHJvcCkge1xuICAgICAgdGhpcy5kZXRlcm1pbmVEaXJlY3Rpb24ocG9pbnQpXG4gICAgICB0aGlzLm1vdmUocG9pbnQpXG4gICAgfVxuICB9XG5cbiAgbmF0aXZlRHJhZ1N0YXJ0KGV2ZW50KSB7XG4gICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQnLCAnRmlyZUZveCBmaXgnKVxuICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gJ21vdmUnXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCB0aGlzLl9uYXRpdmVEcmFnT3ZlcilcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgdGhpcy5fbmF0aXZlRHJvcClcbiAgfVxuXG4gIG5hdGl2ZURyYWdPdmVyKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gJ21vdmUnXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RyYWdlZS1wbGFjZWhvbGRlcicpXG4gICAgaWYgKGV2ZW50LmNsaWVudFggPT09IDAgJiYgZXZlbnQuY2xpZW50WSA9PT0gMCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy50b3VjaFBvaW50ID0gbmV3IFBvaW50KGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpXG4gICAgbGV0IHBvaW50ID0gdGhpcy5fc3RhcnRQb3NpdGlvbi5hZGQodGhpcy50b3VjaFBvaW50LnN1Yih0aGlzLl9zdGFydFRvdWNoUG9pbnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMud2luZG93U2Nyb2xsUG9pbnQuc3ViKHRoaXMuX3N0YXJ0V2luZG93U2Nyb2xsUG9pbnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMucGFyZW50c1Njcm9sbFBvaW50LnN1Yih0aGlzLl9zdGFydFBhcmVudHNTY3JvbGxQb2ludCkpXG4gICAgcG9pbnQgPSB0aGlzLmJvdW5kaW5nLmJvdW5kKHBvaW50LCB0aGlzLmdldFNpemUoKSlcbiAgICB0aGlzLmRldGVybWluZURpcmVjdGlvbihwb2ludClcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9pbnRcbiAgICB0aGlzLmVtaXQoJ2RyYWc6bW92ZScpXG4gIH1cblxuICBuYXRpdmVEcmFnRW5kKF9ldmVudCkge1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZWUtcGxhY2Vob2xkZXInKVxuICAgIHRoaXMuZHJhZ0VuZEFjdGlvbigpXG4gICAgdGhpcy5lbWl0KCdkcmFnOmVuZCcpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCB0aGlzLl9uYXRpdmVEcmFnT3ZlcilcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcm9wJywgdGhpcy5fbmF0aXZlRHJvcClcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fc2Nyb2xsKVxuICAgIHRoaXMucGFyZW50cy5mb3JFYWNoKChwKSA9PiBwLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX3Njcm9sbCkpXG4gICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2VcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkcmFnZ2FibGUnKVxuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZWUtYWN0aXZlJylcbiAgfVxuXG4gIG5hdGl2ZURyb3AoZXZlbnQpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIGNhbmNlbERyYWdnaW5nICgpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG5cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcblxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX3Njcm9sbClcbiAgICB0aGlzLnBhcmVudHMuZm9yRWFjaCgocCkgPT4gcC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9zY3JvbGwpKVxuXG4gICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2VcbiAgICB0aGlzLl9wcmV2aW91c0RpcmVjdGlvblBvc2l0aW9uID0gbnVsbFxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2RyYWdnYWJsZScpXG4gIH1cblxuICBjb3B5U3R5bGVzKHNvdXJjZSwgZGVzdGluYXRpb24pIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmNvcHlTdHlsZXMpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5jb3B5U3R5bGVzKHNvdXJjZSwgZGVzdGluYXRpb24pXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvcHlTdHlsZXMoc291cmNlLCBkZXN0aW5hdGlvbilcbiAgICB9XG4gIH1cblxuICBlbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3AoZXZlbnQpIHtcbiAgICBjb25zdCBjb250YWluZXJSZWN0ID0gdGhpcy5jb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICBjb25zdCBjbG9uZWRFbGVtZW50ID0gdGhpcy5lbGVtZW50LmNsb25lTm9kZSh0cnVlKVxuICAgIGNsb25lZEVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcGVydHldID0gJydcbiAgICB0aGlzLmNvcHlTdHlsZXModGhpcy5lbGVtZW50LCBjbG9uZWRFbGVtZW50KVxuICAgIGNsb25lZEVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjbG9uZWRFbGVtZW50KVxuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkcmFnZWUtcGxhY2Vob2xkZXInKVxuXG4gICAgY29uc3QgZW11bGF0aW9uRHJhZ2dhYmxlID0gbmV3IERyYWdnYWJsZShjbG9uZWRFbGVtZW50LCB7XG4gICAgICBjb250YWluZXI6IGRvY3VtZW50LmJvZHksXG4gICAgICB0b3VjaERyYWdnaW5nVGhyZXNob2xkOiAwLFxuICAgICAgYm91bmQocG9pbnQpIHtcbiAgICAgICAgcmV0dXJuIHBvaW50XG4gICAgICB9LFxuICAgICAgb246IHtcbiAgICAgICAgJ2RyYWc6bW92ZSc6ICgpID0+IHtcbiAgICAgICAgICBjb25zdCBjb250YWluZXJSZWN0UG9pbnQgPSBuZXcgUG9pbnQoY29udGFpbmVyUmVjdC5sZWZ0LCBjb250YWluZXJSZWN0LnRvcClcbiAgICAgICAgICB0aGlzLnBvc2l0aW9uID0gZW11bGF0aW9uRHJhZ2dhYmxlLnBvc2l0aW9uLnN1Yihjb250YWluZXJSZWN0UG9pbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdWIodGhpcy5fc3RhcnRXaW5kb3dTY3JvbGxQb2ludClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZCh0aGlzLl9zdGFydFBhcmVudHNTY3JvbGxQb2ludClcblxuICAgICAgICAgIHRoaXMuZGV0ZXJtaW5lRGlyZWN0aW9uKHRoaXMucG9zaXRpb24pXG4gICAgICAgICAgdGhpcy5lbWl0KCdkcmFnOm1vdmUnKVxuICAgICAgICB9LFxuICAgICAgICAnZHJhZzplbmQnOiAoKSA9PiB7XG4gICAgICAgICAgZW11bGF0aW9uRHJhZ2dhYmxlLmRlc3Ryb3koKVxuICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoY2xvbmVkRWxlbWVudClcbiAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2VlLXBsYWNlaG9sZGVyJylcbiAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2VlLWFjdGl2ZScpXG5cbiAgICAgICAgICB0aGlzLmVtaXQoJ2RyYWc6ZW5kJylcbiAgICAgICAgICB0aGlzLmRyYWdFbmRBY3Rpb24oKVxuICAgICAgICAgIHRoaXMuY2FuY2VsRHJhZ2dpbmcoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IGNvbnRhaW5lclJlY3RQb2ludCA9IG5ldyBQb2ludChjb250YWluZXJSZWN0LmxlZnQsIGNvbnRhaW5lclJlY3QudG9wKVxuICAgIGVtdWxhdGlvbkRyYWdnYWJsZS5fc3RhcnRXaW5kb3dTY3JvbGxQb2ludCA9IHRoaXMuX3N0YXJ0V2luZG93U2Nyb2xsUG9pbnRcblxuICAgIGVtdWxhdGlvbkRyYWdnYWJsZS5tb3ZlKFxuICAgICAgdGhpcy5waW5uZWRQb3NpdGlvbi5hZGQoY29udGFpbmVyUmVjdFBvaW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy53aW5kb3dTY3JvbGxQb2ludClcbiAgICAgICAgICAgICAgICAgICAgICAgICAuc3ViKHRoaXMucGFyZW50c1Njcm9sbFBvaW50KVxuICAgIClcblxuICAgIGVtdWxhdGlvbkRyYWdnYWJsZS5kcmFnU3RhcnQoZXZlbnQpXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgZHJhZ0VuZEFjdGlvbigpIHtcbiAgICB0aGlzLnBpblBvc2l0aW9uKHRoaXMucG9zaXRpb24pXG4gIH1cblxuICBnZXRSZWN0YW5nbGUoKSB7XG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUodGhpcy5wb3NpdGlvbiwgdGhpcy5nZXRTaXplKCkpXG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIGlmICh0aGlzLmJvdW5kaW5nLnJlZnJlc2gpIHtcbiAgICAgIHRoaXMuYm91bmRpbmcucmVmcmVzaCgpXG4gICAgfVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmhhbmRsZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0KVxuICAgIHRoaXMuaGFuZGxlci5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQpXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIHRoaXMuX25hdGl2ZURyYWdTdGFydClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCB0aGlzLl9uYXRpdmVEcmFnT3ZlcilcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcm9wJywgdGhpcy5fbmF0aXZlRHJvcClcbiAgICB0aGlzLnJlc2V0RW1pdHRlcigpXG5cbiAgICBjb25zdCBpbmRleCA9IGRyYWdnYWJsZXMuaW5kZXhPZih0aGlzKVxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICBkcmFnZ2FibGVzLnNwbGljZShpbmRleCwgMSlcbiAgICB9XG4gIH1cblxuICBnZXQgY29udGFpbmVyKCkge1xuICAgIHJldHVybiAodGhpcy5fY29udGFpbmVyID0gdGhpcy5fY29udGFpbmVyIHx8IHRoaXMub3B0aW9ucy5jb250YWluZXIgfHwgdGhpcy5vcHRpb25zLnBhcmVudCB8fCBnZXREZWZhdWx0Q29udGFpbmVyKHRoaXMuZWxlbWVudCkpXG4gIH1cblxuICBnZXQgaGFuZGxlcigpIHtcbiAgICBpZiAoIXRoaXMuX2hhbmRsZXIpIHtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmhhbmRsZXIgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZXIgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLm9wdGlvbnMuaGFuZGxlcikgfHwgdGhpcy5lbGVtZW50XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9oYW5kbGVyID0gdGhpcy5vcHRpb25zLmhhbmRsZXIgfHwgdGhpcy5lbGVtZW50XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2hhbmRsZXJcbiAgfVxuXG4gIGdldCBuYXRpdmVEcmFnQW5kRHJvcCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLm5hdGl2ZURyYWdBbmREcm9wIHx8IGZhbHNlXG4gIH1cblxuICBnZXQgZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wT25Ub3VjaCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcE9uVG91Y2ggfHwgZmFsc2VcbiAgfVxuXG4gIGdldCBzaG91bGRSZW1vdmVaZXJvVHJhbnNsYXRlKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuc2hvdWxkUmVtb3ZlWmVyb1RyYW5zbGF0ZSB8fCBmYWxzZVxuICB9XG5cbiAgZ2V0IHRvdWNoRHJhZ2dpbmdUaHJlc2hvbGQoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy50b3VjaERyYWdnaW5nVGhyZXNob2xkIHx8IDBcbiAgfVxuXG4gIGdldCBkcmFnT3ZlclRocm90dGxlRHVyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5kcmFnT3ZlclRocm90dGxlRHVyYXRpb24gfHwgMTZcbiAgfVxuXG4gIGdldCB3aW5kb3dTY3JvbGxQb2ludCgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHdpbmRvdy5zY3JvbGxYLCB3aW5kb3cuc2Nyb2xsWSlcbiAgfVxuXG4gIGdldCBwYXJlbnRzKCkge1xuICAgIGlmICh0aGlzLl9jYWNoZWRQYXJlbnRzKSByZXR1cm4gdGhpcy5fY2FjaGVkUGFyZW50c1xuXG4gICAgdGhpcy5fY2FjaGVkUGFyZW50cyA9IFtdXG4gICAgbGV0IGVsZW1lbnQgPSB0aGlzLmVsZW1lbnRcblxuICAgIHdoaWxlKGVsZW1lbnQucGFyZW50Tm9kZSAmJiBlbGVtZW50ICE9IHRoaXMuY29udGFpbmVyKSB7XG4gICAgICB0aGlzLl9jYWNoZWRQYXJlbnRzLnVuc2hpZnQoZWxlbWVudC5wYXJlbnROb2RlKTtcbiAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2NhY2hlZFBhcmVudHNcbiAgfVxuXG4gIGdldCBwYXJlbnRzU2Nyb2xsUG9pbnQoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludChcbiAgICAgIHRoaXMucGFyZW50cy5yZWR1Y2UoKHN1bSwgcCkgPT4gc3VtICsgcC5zY3JvbGxMZWZ0LCAwKSxcbiAgICAgIHRoaXMucGFyZW50cy5yZWR1Y2UoKHN1bSwgcCkgPT4gc3VtICsgcC5zY3JvbGxUb3AsIDApXG4gICAgKVxuICB9XG5cbiAgZ2V0IGVuYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlXG4gIH1cblxuICBzZXQgZW5hYmxlKGVuYWJsZSkge1xuICAgIGlmIChlbmFibGUpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZWUtZGlzYWJsZScpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkcmFnZWUtZGlzYWJsZScpXG4gICAgfVxuXG4gICAgdGhpcy5fZW5hYmxlID0gZW5hYmxlXG4gIH1cbn1cblxuRHJhZ2dhYmxlLmVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKClcbkRyYWdnYWJsZS5lbWl0dGVyLm9uKCdkcmFnZ2FibGU6Y3JlYXRlJywgYWRkVG9EZWZhdWx0U2NvcGUpXG4iLCJ2YXIgcmVzaXplT2JzZXJ2ZXJzID0gW107XG5leHBvcnQgeyByZXNpemVPYnNlcnZlcnMgfTtcbiIsImltcG9ydCB7IHJlc2l6ZU9ic2VydmVycyB9IGZyb20gJy4uL3V0aWxzL3Jlc2l6ZU9ic2VydmVycyc7XG52YXIgaGFzQWN0aXZlT2JzZXJ2YXRpb25zID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiByZXNpemVPYnNlcnZlcnMuc29tZShmdW5jdGlvbiAocm8pIHsgcmV0dXJuIHJvLmFjdGl2ZVRhcmdldHMubGVuZ3RoID4gMDsgfSk7XG59O1xuZXhwb3J0IHsgaGFzQWN0aXZlT2JzZXJ2YXRpb25zIH07XG4iLCJpbXBvcnQgeyByZXNpemVPYnNlcnZlcnMgfSBmcm9tICcuLi91dGlscy9yZXNpemVPYnNlcnZlcnMnO1xudmFyIGhhc1NraXBwZWRPYnNlcnZhdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHJlc2l6ZU9ic2VydmVycy5zb21lKGZ1bmN0aW9uIChybykgeyByZXR1cm4gcm8uc2tpcHBlZFRhcmdldHMubGVuZ3RoID4gMDsgfSk7XG59O1xuZXhwb3J0IHsgaGFzU2tpcHBlZE9ic2VydmF0aW9ucyB9O1xuIiwidmFyIG1zZyA9ICdSZXNpemVPYnNlcnZlciBsb29wIGNvbXBsZXRlZCB3aXRoIHVuZGVsaXZlcmVkIG5vdGlmaWNhdGlvbnMuJztcbnZhciBkZWxpdmVyUmVzaXplTG9vcEVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBldmVudDtcbiAgICBpZiAodHlwZW9mIEVycm9yRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZXZlbnQgPSBuZXcgRXJyb3JFdmVudCgnZXJyb3InLCB7XG4gICAgICAgICAgICBtZXNzYWdlOiBtc2dcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpO1xuICAgICAgICBldmVudC5pbml0RXZlbnQoJ2Vycm9yJywgZmFsc2UsIGZhbHNlKTtcbiAgICAgICAgZXZlbnQubWVzc2FnZSA9IG1zZztcbiAgICB9XG4gICAgd2luZG93LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xufTtcbmV4cG9ydCB7IGRlbGl2ZXJSZXNpemVMb29wRXJyb3IgfTtcbiIsInZhciBSZXNpemVPYnNlcnZlckJveE9wdGlvbnM7XG4oZnVuY3Rpb24gKFJlc2l6ZU9ic2VydmVyQm94T3B0aW9ucykge1xuICAgIFJlc2l6ZU9ic2VydmVyQm94T3B0aW9uc1tcIkJPUkRFUl9CT1hcIl0gPSBcImJvcmRlci1ib3hcIjtcbiAgICBSZXNpemVPYnNlcnZlckJveE9wdGlvbnNbXCJDT05URU5UX0JPWFwiXSA9IFwiY29udGVudC1ib3hcIjtcbiAgICBSZXNpemVPYnNlcnZlckJveE9wdGlvbnNbXCJERVZJQ0VfUElYRUxfQ09OVEVOVF9CT1hcIl0gPSBcImRldmljZS1waXhlbC1jb250ZW50LWJveFwiO1xufSkoUmVzaXplT2JzZXJ2ZXJCb3hPcHRpb25zIHx8IChSZXNpemVPYnNlcnZlckJveE9wdGlvbnMgPSB7fSkpO1xuZXhwb3J0IHsgUmVzaXplT2JzZXJ2ZXJCb3hPcHRpb25zIH07XG4iLCJleHBvcnQgdmFyIGZyZWV6ZSA9IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIE9iamVjdC5mcmVlemUob2JqKTsgfTtcbiIsImltcG9ydCB7IGZyZWV6ZSB9IGZyb20gJy4vdXRpbHMvZnJlZXplJztcbnZhciBSZXNpemVPYnNlcnZlclNpemUgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFJlc2l6ZU9ic2VydmVyU2l6ZShpbmxpbmVTaXplLCBibG9ja1NpemUpIHtcbiAgICAgICAgdGhpcy5pbmxpbmVTaXplID0gaW5saW5lU2l6ZTtcbiAgICAgICAgdGhpcy5ibG9ja1NpemUgPSBibG9ja1NpemU7XG4gICAgICAgIGZyZWV6ZSh0aGlzKTtcbiAgICB9XG4gICAgcmV0dXJuIFJlc2l6ZU9ic2VydmVyU2l6ZTtcbn0oKSk7XG5leHBvcnQgeyBSZXNpemVPYnNlcnZlclNpemUgfTtcbiIsImltcG9ydCB7IGZyZWV6ZSB9IGZyb20gJy4vdXRpbHMvZnJlZXplJztcbnZhciBET01SZWN0UmVhZE9ubHkgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIERPTVJlY3RSZWFkT25seSh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHRoaXMudG9wID0gdGhpcy55O1xuICAgICAgICB0aGlzLmxlZnQgPSB0aGlzLng7XG4gICAgICAgIHRoaXMuYm90dG9tID0gdGhpcy50b3AgKyB0aGlzLmhlaWdodDtcbiAgICAgICAgdGhpcy5yaWdodCA9IHRoaXMubGVmdCArIHRoaXMud2lkdGg7XG4gICAgICAgIHJldHVybiBmcmVlemUodGhpcyk7XG4gICAgfVxuICAgIERPTVJlY3RSZWFkT25seS5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2EgPSB0aGlzLCB4ID0gX2EueCwgeSA9IF9hLnksIHRvcCA9IF9hLnRvcCwgcmlnaHQgPSBfYS5yaWdodCwgYm90dG9tID0gX2EuYm90dG9tLCBsZWZ0ID0gX2EubGVmdCwgd2lkdGggPSBfYS53aWR0aCwgaGVpZ2h0ID0gX2EuaGVpZ2h0O1xuICAgICAgICByZXR1cm4geyB4OiB4LCB5OiB5LCB0b3A6IHRvcCwgcmlnaHQ6IHJpZ2h0LCBib3R0b206IGJvdHRvbSwgbGVmdDogbGVmdCwgd2lkdGg6IHdpZHRoLCBoZWlnaHQ6IGhlaWdodCB9O1xuICAgIH07XG4gICAgRE9NUmVjdFJlYWRPbmx5LmZyb21SZWN0ID0gZnVuY3Rpb24gKHJlY3RhbmdsZSkge1xuICAgICAgICByZXR1cm4gbmV3IERPTVJlY3RSZWFkT25seShyZWN0YW5nbGUueCwgcmVjdGFuZ2xlLnksIHJlY3RhbmdsZS53aWR0aCwgcmVjdGFuZ2xlLmhlaWdodCk7XG4gICAgfTtcbiAgICByZXR1cm4gRE9NUmVjdFJlYWRPbmx5O1xufSgpKTtcbmV4cG9ydCB7IERPTVJlY3RSZWFkT25seSB9O1xuIiwidmFyIGlzU1ZHID0gZnVuY3Rpb24gKHRhcmdldCkgeyByZXR1cm4gdGFyZ2V0IGluc3RhbmNlb2YgU1ZHRWxlbWVudCAmJiAnZ2V0QkJveCcgaW4gdGFyZ2V0OyB9O1xudmFyIGlzSGlkZGVuID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGlmIChpc1NWRyh0YXJnZXQpKSB7XG4gICAgICAgIHZhciBfYSA9IHRhcmdldC5nZXRCQm94KCksIHdpZHRoID0gX2Eud2lkdGgsIGhlaWdodCA9IF9hLmhlaWdodDtcbiAgICAgICAgcmV0dXJuICF3aWR0aCAmJiAhaGVpZ2h0O1xuICAgIH1cbiAgICB2YXIgX2IgPSB0YXJnZXQsIG9mZnNldFdpZHRoID0gX2Iub2Zmc2V0V2lkdGgsIG9mZnNldEhlaWdodCA9IF9iLm9mZnNldEhlaWdodDtcbiAgICByZXR1cm4gIShvZmZzZXRXaWR0aCB8fCBvZmZzZXRIZWlnaHQgfHwgdGFyZ2V0LmdldENsaWVudFJlY3RzKCkubGVuZ3RoKTtcbn07XG52YXIgaXNFbGVtZW50ID0gZnVuY3Rpb24gKG9iaikge1xuICAgIHZhciBfYSwgX2I7XG4gICAgaWYgKG9iaiBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHZhciBzY29wZSA9IChfYiA9IChfYSA9IG9iaikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLm93bmVyRG9jdW1lbnQpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5kZWZhdWx0VmlldztcbiAgICByZXR1cm4gISEoc2NvcGUgJiYgb2JqIGluc3RhbmNlb2Ygc2NvcGUuRWxlbWVudCk7XG59O1xudmFyIGlzUmVwbGFjZWRFbGVtZW50ID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIHN3aXRjaCAodGFyZ2V0LnRhZ05hbWUpIHtcbiAgICAgICAgY2FzZSAnSU5QVVQnOlxuICAgICAgICAgICAgaWYgKHRhcmdldC50eXBlICE9PSAnaW1hZ2UnKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIGNhc2UgJ1ZJREVPJzpcbiAgICAgICAgY2FzZSAnQVVESU8nOlxuICAgICAgICBjYXNlICdFTUJFRCc6XG4gICAgICAgIGNhc2UgJ09CSkVDVCc6XG4gICAgICAgIGNhc2UgJ0NBTlZBUyc6XG4gICAgICAgIGNhc2UgJ0lGUkFNRSc6XG4gICAgICAgIGNhc2UgJ0lNRyc6XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufTtcbmV4cG9ydCB7IGlzU1ZHLCBpc0hpZGRlbiwgaXNFbGVtZW50LCBpc1JlcGxhY2VkRWxlbWVudCB9O1xuIiwiZXhwb3J0IHZhciBnbG9iYWwgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHt9O1xuIiwiaW1wb3J0IHsgUmVzaXplT2JzZXJ2ZXJCb3hPcHRpb25zIH0gZnJvbSAnLi4vUmVzaXplT2JzZXJ2ZXJCb3hPcHRpb25zJztcbmltcG9ydCB7IFJlc2l6ZU9ic2VydmVyU2l6ZSB9IGZyb20gJy4uL1Jlc2l6ZU9ic2VydmVyU2l6ZSc7XG5pbXBvcnQgeyBET01SZWN0UmVhZE9ubHkgfSBmcm9tICcuLi9ET01SZWN0UmVhZE9ubHknO1xuaW1wb3J0IHsgaXNTVkcsIGlzSGlkZGVuIH0gZnJvbSAnLi4vdXRpbHMvZWxlbWVudCc7XG5pbXBvcnQgeyBmcmVlemUgfSBmcm9tICcuLi91dGlscy9mcmVlemUnO1xuaW1wb3J0IHsgZ2xvYmFsIH0gZnJvbSAnLi4vdXRpbHMvZ2xvYmFsJztcbnZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG52YXIgc2Nyb2xsUmVnZXhwID0gL2F1dG98c2Nyb2xsLztcbnZhciB2ZXJ0aWNhbFJlZ2V4cCA9IC9edGJ8dmVydGljYWwvO1xudmFyIElFID0gKC9tc2llfHRyaWRlbnQvaSkudGVzdChnbG9iYWwubmF2aWdhdG9yICYmIGdsb2JhbC5uYXZpZ2F0b3IudXNlckFnZW50KTtcbnZhciBwYXJzZURpbWVuc2lvbiA9IGZ1bmN0aW9uIChwaXhlbCkgeyByZXR1cm4gcGFyc2VGbG9hdChwaXhlbCB8fCAnMCcpOyB9O1xudmFyIHNpemUgPSBmdW5jdGlvbiAoaW5saW5lU2l6ZSwgYmxvY2tTaXplLCBzd2l0Y2hTaXplcykge1xuICAgIGlmIChpbmxpbmVTaXplID09PSB2b2lkIDApIHsgaW5saW5lU2l6ZSA9IDA7IH1cbiAgICBpZiAoYmxvY2tTaXplID09PSB2b2lkIDApIHsgYmxvY2tTaXplID0gMDsgfVxuICAgIGlmIChzd2l0Y2hTaXplcyA9PT0gdm9pZCAwKSB7IHN3aXRjaFNpemVzID0gZmFsc2U7IH1cbiAgICByZXR1cm4gbmV3IFJlc2l6ZU9ic2VydmVyU2l6ZSgoc3dpdGNoU2l6ZXMgPyBibG9ja1NpemUgOiBpbmxpbmVTaXplKSB8fCAwLCAoc3dpdGNoU2l6ZXMgPyBpbmxpbmVTaXplIDogYmxvY2tTaXplKSB8fCAwKTtcbn07XG52YXIgemVyb0JveGVzID0gZnJlZXplKHtcbiAgICBkZXZpY2VQaXhlbENvbnRlbnRCb3hTaXplOiBzaXplKCksXG4gICAgYm9yZGVyQm94U2l6ZTogc2l6ZSgpLFxuICAgIGNvbnRlbnRCb3hTaXplOiBzaXplKCksXG4gICAgY29udGVudFJlY3Q6IG5ldyBET01SZWN0UmVhZE9ubHkoMCwgMCwgMCwgMClcbn0pO1xudmFyIGNhbGN1bGF0ZUJveFNpemVzID0gZnVuY3Rpb24gKHRhcmdldCwgZm9yY2VSZWNhbGN1bGF0aW9uKSB7XG4gICAgaWYgKGZvcmNlUmVjYWxjdWxhdGlvbiA9PT0gdm9pZCAwKSB7IGZvcmNlUmVjYWxjdWxhdGlvbiA9IGZhbHNlOyB9XG4gICAgaWYgKGNhY2hlLmhhcyh0YXJnZXQpICYmICFmb3JjZVJlY2FsY3VsYXRpb24pIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlLmdldCh0YXJnZXQpO1xuICAgIH1cbiAgICBpZiAoaXNIaWRkZW4odGFyZ2V0KSkge1xuICAgICAgICBjYWNoZS5zZXQodGFyZ2V0LCB6ZXJvQm94ZXMpO1xuICAgICAgICByZXR1cm4gemVyb0JveGVzO1xuICAgIH1cbiAgICB2YXIgY3MgPSBnZXRDb21wdXRlZFN0eWxlKHRhcmdldCk7XG4gICAgdmFyIHN2ZyA9IGlzU1ZHKHRhcmdldCkgJiYgdGFyZ2V0Lm93bmVyU1ZHRWxlbWVudCAmJiB0YXJnZXQuZ2V0QkJveCgpO1xuICAgIHZhciByZW1vdmVQYWRkaW5nID0gIUlFICYmIGNzLmJveFNpemluZyA9PT0gJ2JvcmRlci1ib3gnO1xuICAgIHZhciBzd2l0Y2hTaXplcyA9IHZlcnRpY2FsUmVnZXhwLnRlc3QoY3Mud3JpdGluZ01vZGUgfHwgJycpO1xuICAgIHZhciBjYW5TY3JvbGxWZXJ0aWNhbGx5ID0gIXN2ZyAmJiBzY3JvbGxSZWdleHAudGVzdChjcy5vdmVyZmxvd1kgfHwgJycpO1xuICAgIHZhciBjYW5TY3JvbGxIb3Jpem9udGFsbHkgPSAhc3ZnICYmIHNjcm9sbFJlZ2V4cC50ZXN0KGNzLm92ZXJmbG93WCB8fCAnJyk7XG4gICAgdmFyIHBhZGRpbmdUb3AgPSBzdmcgPyAwIDogcGFyc2VEaW1lbnNpb24oY3MucGFkZGluZ1RvcCk7XG4gICAgdmFyIHBhZGRpbmdSaWdodCA9IHN2ZyA/IDAgOiBwYXJzZURpbWVuc2lvbihjcy5wYWRkaW5nUmlnaHQpO1xuICAgIHZhciBwYWRkaW5nQm90dG9tID0gc3ZnID8gMCA6IHBhcnNlRGltZW5zaW9uKGNzLnBhZGRpbmdCb3R0b20pO1xuICAgIHZhciBwYWRkaW5nTGVmdCA9IHN2ZyA/IDAgOiBwYXJzZURpbWVuc2lvbihjcy5wYWRkaW5nTGVmdCk7XG4gICAgdmFyIGJvcmRlclRvcCA9IHN2ZyA/IDAgOiBwYXJzZURpbWVuc2lvbihjcy5ib3JkZXJUb3BXaWR0aCk7XG4gICAgdmFyIGJvcmRlclJpZ2h0ID0gc3ZnID8gMCA6IHBhcnNlRGltZW5zaW9uKGNzLmJvcmRlclJpZ2h0V2lkdGgpO1xuICAgIHZhciBib3JkZXJCb3R0b20gPSBzdmcgPyAwIDogcGFyc2VEaW1lbnNpb24oY3MuYm9yZGVyQm90dG9tV2lkdGgpO1xuICAgIHZhciBib3JkZXJMZWZ0ID0gc3ZnID8gMCA6IHBhcnNlRGltZW5zaW9uKGNzLmJvcmRlckxlZnRXaWR0aCk7XG4gICAgdmFyIGhvcml6b250YWxQYWRkaW5nID0gcGFkZGluZ0xlZnQgKyBwYWRkaW5nUmlnaHQ7XG4gICAgdmFyIHZlcnRpY2FsUGFkZGluZyA9IHBhZGRpbmdUb3AgKyBwYWRkaW5nQm90dG9tO1xuICAgIHZhciBob3Jpem9udGFsQm9yZGVyQXJlYSA9IGJvcmRlckxlZnQgKyBib3JkZXJSaWdodDtcbiAgICB2YXIgdmVydGljYWxCb3JkZXJBcmVhID0gYm9yZGVyVG9wICsgYm9yZGVyQm90dG9tO1xuICAgIHZhciBob3Jpem9udGFsU2Nyb2xsYmFyVGhpY2tuZXNzID0gIWNhblNjcm9sbEhvcml6b250YWxseSA/IDAgOiB0YXJnZXQub2Zmc2V0SGVpZ2h0IC0gdmVydGljYWxCb3JkZXJBcmVhIC0gdGFyZ2V0LmNsaWVudEhlaWdodDtcbiAgICB2YXIgdmVydGljYWxTY3JvbGxiYXJUaGlja25lc3MgPSAhY2FuU2Nyb2xsVmVydGljYWxseSA/IDAgOiB0YXJnZXQub2Zmc2V0V2lkdGggLSBob3Jpem9udGFsQm9yZGVyQXJlYSAtIHRhcmdldC5jbGllbnRXaWR0aDtcbiAgICB2YXIgd2lkdGhSZWR1Y3Rpb24gPSByZW1vdmVQYWRkaW5nID8gaG9yaXpvbnRhbFBhZGRpbmcgKyBob3Jpem9udGFsQm9yZGVyQXJlYSA6IDA7XG4gICAgdmFyIGhlaWdodFJlZHVjdGlvbiA9IHJlbW92ZVBhZGRpbmcgPyB2ZXJ0aWNhbFBhZGRpbmcgKyB2ZXJ0aWNhbEJvcmRlckFyZWEgOiAwO1xuICAgIHZhciBjb250ZW50V2lkdGggPSBzdmcgPyBzdmcud2lkdGggOiBwYXJzZURpbWVuc2lvbihjcy53aWR0aCkgLSB3aWR0aFJlZHVjdGlvbiAtIHZlcnRpY2FsU2Nyb2xsYmFyVGhpY2tuZXNzO1xuICAgIHZhciBjb250ZW50SGVpZ2h0ID0gc3ZnID8gc3ZnLmhlaWdodCA6IHBhcnNlRGltZW5zaW9uKGNzLmhlaWdodCkgLSBoZWlnaHRSZWR1Y3Rpb24gLSBob3Jpem9udGFsU2Nyb2xsYmFyVGhpY2tuZXNzO1xuICAgIHZhciBib3JkZXJCb3hXaWR0aCA9IGNvbnRlbnRXaWR0aCArIGhvcml6b250YWxQYWRkaW5nICsgdmVydGljYWxTY3JvbGxiYXJUaGlja25lc3MgKyBob3Jpem9udGFsQm9yZGVyQXJlYTtcbiAgICB2YXIgYm9yZGVyQm94SGVpZ2h0ID0gY29udGVudEhlaWdodCArIHZlcnRpY2FsUGFkZGluZyArIGhvcml6b250YWxTY3JvbGxiYXJUaGlja25lc3MgKyB2ZXJ0aWNhbEJvcmRlckFyZWE7XG4gICAgdmFyIGJveGVzID0gZnJlZXplKHtcbiAgICAgICAgZGV2aWNlUGl4ZWxDb250ZW50Qm94U2l6ZTogc2l6ZShNYXRoLnJvdW5kKGNvbnRlbnRXaWR0aCAqIGRldmljZVBpeGVsUmF0aW8pLCBNYXRoLnJvdW5kKGNvbnRlbnRIZWlnaHQgKiBkZXZpY2VQaXhlbFJhdGlvKSwgc3dpdGNoU2l6ZXMpLFxuICAgICAgICBib3JkZXJCb3hTaXplOiBzaXplKGJvcmRlckJveFdpZHRoLCBib3JkZXJCb3hIZWlnaHQsIHN3aXRjaFNpemVzKSxcbiAgICAgICAgY29udGVudEJveFNpemU6IHNpemUoY29udGVudFdpZHRoLCBjb250ZW50SGVpZ2h0LCBzd2l0Y2hTaXplcyksXG4gICAgICAgIGNvbnRlbnRSZWN0OiBuZXcgRE9NUmVjdFJlYWRPbmx5KHBhZGRpbmdMZWZ0LCBwYWRkaW5nVG9wLCBjb250ZW50V2lkdGgsIGNvbnRlbnRIZWlnaHQpXG4gICAgfSk7XG4gICAgY2FjaGUuc2V0KHRhcmdldCwgYm94ZXMpO1xuICAgIHJldHVybiBib3hlcztcbn07XG52YXIgY2FsY3VsYXRlQm94U2l6ZSA9IGZ1bmN0aW9uICh0YXJnZXQsIG9ic2VydmVkQm94LCBmb3JjZVJlY2FsY3VsYXRpb24pIHtcbiAgICB2YXIgX2EgPSBjYWxjdWxhdGVCb3hTaXplcyh0YXJnZXQsIGZvcmNlUmVjYWxjdWxhdGlvbiksIGJvcmRlckJveFNpemUgPSBfYS5ib3JkZXJCb3hTaXplLCBjb250ZW50Qm94U2l6ZSA9IF9hLmNvbnRlbnRCb3hTaXplLCBkZXZpY2VQaXhlbENvbnRlbnRCb3hTaXplID0gX2EuZGV2aWNlUGl4ZWxDb250ZW50Qm94U2l6ZTtcbiAgICBzd2l0Y2ggKG9ic2VydmVkQm94KSB7XG4gICAgICAgIGNhc2UgUmVzaXplT2JzZXJ2ZXJCb3hPcHRpb25zLkRFVklDRV9QSVhFTF9DT05URU5UX0JPWDpcbiAgICAgICAgICAgIHJldHVybiBkZXZpY2VQaXhlbENvbnRlbnRCb3hTaXplO1xuICAgICAgICBjYXNlIFJlc2l6ZU9ic2VydmVyQm94T3B0aW9ucy5CT1JERVJfQk9YOlxuICAgICAgICAgICAgcmV0dXJuIGJvcmRlckJveFNpemU7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gY29udGVudEJveFNpemU7XG4gICAgfVxufTtcbmV4cG9ydCB7IGNhbGN1bGF0ZUJveFNpemUsIGNhbGN1bGF0ZUJveFNpemVzIH07XG4iLCJpbXBvcnQgeyBjYWxjdWxhdGVCb3hTaXplcyB9IGZyb20gJy4vYWxnb3JpdGhtcy9jYWxjdWxhdGVCb3hTaXplJztcbmltcG9ydCB7IGZyZWV6ZSB9IGZyb20gJy4vdXRpbHMvZnJlZXplJztcbnZhciBSZXNpemVPYnNlcnZlckVudHJ5ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBSZXNpemVPYnNlcnZlckVudHJ5KHRhcmdldCkge1xuICAgICAgICB2YXIgYm94ZXMgPSBjYWxjdWxhdGVCb3hTaXplcyh0YXJnZXQpO1xuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgICAgICAgdGhpcy5jb250ZW50UmVjdCA9IGJveGVzLmNvbnRlbnRSZWN0O1xuICAgICAgICB0aGlzLmJvcmRlckJveFNpemUgPSBmcmVlemUoW2JveGVzLmJvcmRlckJveFNpemVdKTtcbiAgICAgICAgdGhpcy5jb250ZW50Qm94U2l6ZSA9IGZyZWV6ZShbYm94ZXMuY29udGVudEJveFNpemVdKTtcbiAgICAgICAgdGhpcy5kZXZpY2VQaXhlbENvbnRlbnRCb3hTaXplID0gZnJlZXplKFtib3hlcy5kZXZpY2VQaXhlbENvbnRlbnRCb3hTaXplXSk7XG4gICAgfVxuICAgIHJldHVybiBSZXNpemVPYnNlcnZlckVudHJ5O1xufSgpKTtcbmV4cG9ydCB7IFJlc2l6ZU9ic2VydmVyRW50cnkgfTtcbiIsImltcG9ydCB7IGlzSGlkZGVuIH0gZnJvbSAnLi4vdXRpbHMvZWxlbWVudCc7XG52YXIgY2FsY3VsYXRlRGVwdGhGb3JOb2RlID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICBpZiAoaXNIaWRkZW4obm9kZSkpIHtcbiAgICAgICAgcmV0dXJuIEluZmluaXR5O1xuICAgIH1cbiAgICB2YXIgZGVwdGggPSAwO1xuICAgIHZhciBwYXJlbnQgPSBub2RlLnBhcmVudE5vZGU7XG4gICAgd2hpbGUgKHBhcmVudCkge1xuICAgICAgICBkZXB0aCArPSAxO1xuICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50Tm9kZTtcbiAgICB9XG4gICAgcmV0dXJuIGRlcHRoO1xufTtcbmV4cG9ydCB7IGNhbGN1bGF0ZURlcHRoRm9yTm9kZSB9O1xuIiwiaW1wb3J0IHsgcmVzaXplT2JzZXJ2ZXJzIH0gZnJvbSAnLi4vdXRpbHMvcmVzaXplT2JzZXJ2ZXJzJztcbmltcG9ydCB7IFJlc2l6ZU9ic2VydmVyRW50cnkgfSBmcm9tICcuLi9SZXNpemVPYnNlcnZlckVudHJ5JztcbmltcG9ydCB7IGNhbGN1bGF0ZURlcHRoRm9yTm9kZSB9IGZyb20gJy4vY2FsY3VsYXRlRGVwdGhGb3JOb2RlJztcbmltcG9ydCB7IGNhbGN1bGF0ZUJveFNpemUgfSBmcm9tICcuL2NhbGN1bGF0ZUJveFNpemUnO1xudmFyIGJyb2FkY2FzdEFjdGl2ZU9ic2VydmF0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2hhbGxvd2VzdERlcHRoID0gSW5maW5pdHk7XG4gICAgdmFyIGNhbGxiYWNrcyA9IFtdO1xuICAgIHJlc2l6ZU9ic2VydmVycy5mb3JFYWNoKGZ1bmN0aW9uIHByb2Nlc3NPYnNlcnZlcihybykge1xuICAgICAgICBpZiAocm8uYWN0aXZlVGFyZ2V0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZW50cmllcyA9IFtdO1xuICAgICAgICByby5hY3RpdmVUYXJnZXRzLmZvckVhY2goZnVuY3Rpb24gcHJvY2Vzc1RhcmdldChvdCkge1xuICAgICAgICAgICAgdmFyIGVudHJ5ID0gbmV3IFJlc2l6ZU9ic2VydmVyRW50cnkob3QudGFyZ2V0KTtcbiAgICAgICAgICAgIHZhciB0YXJnZXREZXB0aCA9IGNhbGN1bGF0ZURlcHRoRm9yTm9kZShvdC50YXJnZXQpO1xuICAgICAgICAgICAgZW50cmllcy5wdXNoKGVudHJ5KTtcbiAgICAgICAgICAgIG90Lmxhc3RSZXBvcnRlZFNpemUgPSBjYWxjdWxhdGVCb3hTaXplKG90LnRhcmdldCwgb3Qub2JzZXJ2ZWRCb3gpO1xuICAgICAgICAgICAgaWYgKHRhcmdldERlcHRoIDwgc2hhbGxvd2VzdERlcHRoKSB7XG4gICAgICAgICAgICAgICAgc2hhbGxvd2VzdERlcHRoID0gdGFyZ2V0RGVwdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBjYWxsYmFja3MucHVzaChmdW5jdGlvbiByZXNpemVPYnNlcnZlckNhbGxiYWNrKCkge1xuICAgICAgICAgICAgcm8uY2FsbGJhY2suY2FsbChyby5vYnNlcnZlciwgZW50cmllcywgcm8ub2JzZXJ2ZXIpO1xuICAgICAgICB9KTtcbiAgICAgICAgcm8uYWN0aXZlVGFyZ2V0cy5zcGxpY2UoMCwgcm8uYWN0aXZlVGFyZ2V0cy5sZW5ndGgpO1xuICAgIH0pO1xuICAgIGZvciAodmFyIF9pID0gMCwgY2FsbGJhY2tzXzEgPSBjYWxsYmFja3M7IF9pIDwgY2FsbGJhY2tzXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IGNhbGxiYWNrc18xW19pXTtcbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICB9XG4gICAgcmV0dXJuIHNoYWxsb3dlc3REZXB0aDtcbn07XG5leHBvcnQgeyBicm9hZGNhc3RBY3RpdmVPYnNlcnZhdGlvbnMgfTtcbiIsImltcG9ydCB7IHJlc2l6ZU9ic2VydmVycyB9IGZyb20gJy4uL3V0aWxzL3Jlc2l6ZU9ic2VydmVycyc7XG5pbXBvcnQgeyBjYWxjdWxhdGVEZXB0aEZvck5vZGUgfSBmcm9tICcuL2NhbGN1bGF0ZURlcHRoRm9yTm9kZSc7XG52YXIgZ2F0aGVyQWN0aXZlT2JzZXJ2YXRpb25zQXREZXB0aCA9IGZ1bmN0aW9uIChkZXB0aCkge1xuICAgIHJlc2l6ZU9ic2VydmVycy5mb3JFYWNoKGZ1bmN0aW9uIHByb2Nlc3NPYnNlcnZlcihybykge1xuICAgICAgICByby5hY3RpdmVUYXJnZXRzLnNwbGljZSgwLCByby5hY3RpdmVUYXJnZXRzLmxlbmd0aCk7XG4gICAgICAgIHJvLnNraXBwZWRUYXJnZXRzLnNwbGljZSgwLCByby5za2lwcGVkVGFyZ2V0cy5sZW5ndGgpO1xuICAgICAgICByby5vYnNlcnZhdGlvblRhcmdldHMuZm9yRWFjaChmdW5jdGlvbiBwcm9jZXNzVGFyZ2V0KG90KSB7XG4gICAgICAgICAgICBpZiAob3QuaXNBY3RpdmUoKSkge1xuICAgICAgICAgICAgICAgIGlmIChjYWxjdWxhdGVEZXB0aEZvck5vZGUob3QudGFyZ2V0KSA+IGRlcHRoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJvLmFjdGl2ZVRhcmdldHMucHVzaChvdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByby5za2lwcGVkVGFyZ2V0cy5wdXNoKG90KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufTtcbmV4cG9ydCB7IGdhdGhlckFjdGl2ZU9ic2VydmF0aW9uc0F0RGVwdGggfTtcbiIsImltcG9ydCB7IGhhc0FjdGl2ZU9ic2VydmF0aW9ucyB9IGZyb20gJy4uL2FsZ29yaXRobXMvaGFzQWN0aXZlT2JzZXJ2YXRpb25zJztcbmltcG9ydCB7IGhhc1NraXBwZWRPYnNlcnZhdGlvbnMgfSBmcm9tICcuLi9hbGdvcml0aG1zL2hhc1NraXBwZWRPYnNlcnZhdGlvbnMnO1xuaW1wb3J0IHsgZGVsaXZlclJlc2l6ZUxvb3BFcnJvciB9IGZyb20gJy4uL2FsZ29yaXRobXMvZGVsaXZlclJlc2l6ZUxvb3BFcnJvcic7XG5pbXBvcnQgeyBicm9hZGNhc3RBY3RpdmVPYnNlcnZhdGlvbnMgfSBmcm9tICcuLi9hbGdvcml0aG1zL2Jyb2FkY2FzdEFjdGl2ZU9ic2VydmF0aW9ucyc7XG5pbXBvcnQgeyBnYXRoZXJBY3RpdmVPYnNlcnZhdGlvbnNBdERlcHRoIH0gZnJvbSAnLi4vYWxnb3JpdGhtcy9nYXRoZXJBY3RpdmVPYnNlcnZhdGlvbnNBdERlcHRoJztcbnZhciBwcm9jZXNzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBkZXB0aCA9IDA7XG4gICAgZ2F0aGVyQWN0aXZlT2JzZXJ2YXRpb25zQXREZXB0aChkZXB0aCk7XG4gICAgd2hpbGUgKGhhc0FjdGl2ZU9ic2VydmF0aW9ucygpKSB7XG4gICAgICAgIGRlcHRoID0gYnJvYWRjYXN0QWN0aXZlT2JzZXJ2YXRpb25zKCk7XG4gICAgICAgIGdhdGhlckFjdGl2ZU9ic2VydmF0aW9uc0F0RGVwdGgoZGVwdGgpO1xuICAgIH1cbiAgICBpZiAoaGFzU2tpcHBlZE9ic2VydmF0aW9ucygpKSB7XG4gICAgICAgIGRlbGl2ZXJSZXNpemVMb29wRXJyb3IoKTtcbiAgICB9XG4gICAgcmV0dXJuIGRlcHRoID4gMDtcbn07XG5leHBvcnQgeyBwcm9jZXNzIH07XG4iLCJ2YXIgdHJpZ2dlcjtcbnZhciBjYWxsYmFja3MgPSBbXTtcbnZhciBub3RpZnkgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBjYWxsYmFja3Muc3BsaWNlKDApLmZvckVhY2goZnVuY3Rpb24gKGNiKSB7IHJldHVybiBjYigpOyB9KTsgfTtcbnZhciBxdWV1ZU1pY3JvVGFzayA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgIGlmICghdHJpZ2dlcikge1xuICAgICAgICB2YXIgdG9nZ2xlXzEgPSAwO1xuICAgICAgICB2YXIgZWxfMSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICAgICAgdmFyIGNvbmZpZyA9IHsgY2hhcmFjdGVyRGF0YTogdHJ1ZSB9O1xuICAgICAgICBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAoKSB7IHJldHVybiBub3RpZnkoKTsgfSkub2JzZXJ2ZShlbF8xLCBjb25maWcpO1xuICAgICAgICB0cmlnZ2VyID0gZnVuY3Rpb24gKCkgeyBlbF8xLnRleHRDb250ZW50ID0gXCJcIiArICh0b2dnbGVfMSA/IHRvZ2dsZV8xLS0gOiB0b2dnbGVfMSsrKTsgfTtcbiAgICB9XG4gICAgY2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuICAgIHRyaWdnZXIoKTtcbn07XG5leHBvcnQgeyBxdWV1ZU1pY3JvVGFzayB9O1xuIiwiaW1wb3J0IHsgcXVldWVNaWNyb1Rhc2sgfSBmcm9tICcuL3F1ZXVlTWljcm9UYXNrJztcbnZhciBxdWV1ZVJlc2l6ZU9ic2VydmVyID0gZnVuY3Rpb24gKGNiKSB7XG4gICAgcXVldWVNaWNyb1Rhc2soZnVuY3Rpb24gUmVzaXplT2JzZXJ2ZXIoKSB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShjYik7XG4gICAgfSk7XG59O1xuZXhwb3J0IHsgcXVldWVSZXNpemVPYnNlcnZlciB9O1xuIiwiaW1wb3J0IHsgcHJvY2VzcyB9IGZyb20gJy4vcHJvY2Vzcyc7XG5pbXBvcnQgeyBnbG9iYWwgfSBmcm9tICcuL2dsb2JhbCc7XG5pbXBvcnQgeyBxdWV1ZVJlc2l6ZU9ic2VydmVyIH0gZnJvbSAnLi9xdWV1ZVJlc2l6ZU9ic2VydmVyJztcbnZhciB3YXRjaGluZyA9IDA7XG52YXIgaXNXYXRjaGluZyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICEhd2F0Y2hpbmc7IH07XG52YXIgQ0FUQ0hfUEVSSU9EID0gMjUwO1xudmFyIG9ic2VydmVyQ29uZmlnID0geyBhdHRyaWJ1dGVzOiB0cnVlLCBjaGFyYWN0ZXJEYXRhOiB0cnVlLCBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfTtcbnZhciBldmVudHMgPSBbXG4gICAgJ3Jlc2l6ZScsXG4gICAgJ2xvYWQnLFxuICAgICd0cmFuc2l0aW9uZW5kJyxcbiAgICAnYW5pbWF0aW9uZW5kJyxcbiAgICAnYW5pbWF0aW9uc3RhcnQnLFxuICAgICdhbmltYXRpb25pdGVyYXRpb24nLFxuICAgICdrZXl1cCcsXG4gICAgJ2tleWRvd24nLFxuICAgICdtb3VzZXVwJyxcbiAgICAnbW91c2Vkb3duJyxcbiAgICAnbW91c2VvdmVyJyxcbiAgICAnbW91c2VvdXQnLFxuICAgICdibHVyJyxcbiAgICAnZm9jdXMnXG5dO1xudmFyIHRpbWUgPSBmdW5jdGlvbiAodGltZW91dCkge1xuICAgIGlmICh0aW1lb3V0ID09PSB2b2lkIDApIHsgdGltZW91dCA9IDA7IH1cbiAgICByZXR1cm4gRGF0ZS5ub3coKSArIHRpbWVvdXQ7XG59O1xudmFyIHNjaGVkdWxlZCA9IGZhbHNlO1xudmFyIFNjaGVkdWxlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2NoZWR1bGVyKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLnN0b3BwZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmxpc3RlbmVyID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuc2NoZWR1bGUoKTsgfTtcbiAgICB9XG4gICAgU2NoZWR1bGVyLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAodGltZW91dCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAodGltZW91dCA9PT0gdm9pZCAwKSB7IHRpbWVvdXQgPSBDQVRDSF9QRVJJT0Q7IH1cbiAgICAgICAgaWYgKHNjaGVkdWxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHNjaGVkdWxlZCA9IHRydWU7XG4gICAgICAgIHZhciB1bnRpbCA9IHRpbWUodGltZW91dCk7XG4gICAgICAgIHF1ZXVlUmVzaXplT2JzZXJ2ZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGVsZW1lbnRzSGF2ZVJlc2l6ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudHNIYXZlUmVzaXplZCA9IHByb2Nlc3MoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIHNjaGVkdWxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRpbWVvdXQgPSB1bnRpbCAtIHRpbWUoKTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzV2F0Y2hpbmcoKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50c0hhdmVSZXNpemVkKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnJ1bigxMDAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGltZW91dCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMucnVuKHRpbWVvdXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgU2NoZWR1bGVyLnByb3RvdHlwZS5zY2hlZHVsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgIHRoaXMucnVuKCk7XG4gICAgfTtcbiAgICBTY2hlZHVsZXIucHJvdG90eXBlLm9ic2VydmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBjYiA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLm9ic2VydmVyICYmIF90aGlzLm9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuYm9keSwgb2JzZXJ2ZXJDb25maWcpOyB9O1xuICAgICAgICBkb2N1bWVudC5ib2R5ID8gY2IoKSA6IGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgY2IpO1xuICAgIH07XG4gICAgU2NoZWR1bGVyLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuc3RvcHBlZCkge1xuICAgICAgICAgICAgdGhpcy5zdG9wcGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLm9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIodGhpcy5saXN0ZW5lcik7XG4gICAgICAgICAgICB0aGlzLm9ic2VydmUoKTtcbiAgICAgICAgICAgIGV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcihuYW1lLCBfdGhpcy5saXN0ZW5lciwgdHJ1ZSk7IH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTY2hlZHVsZXIucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICghdGhpcy5zdG9wcGVkKSB7XG4gICAgICAgICAgICB0aGlzLm9ic2VydmVyICYmIHRoaXMub2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIGdsb2JhbC5yZW1vdmVFdmVudExpc3RlbmVyKG5hbWUsIF90aGlzLmxpc3RlbmVyLCB0cnVlKTsgfSk7XG4gICAgICAgICAgICB0aGlzLnN0b3BwZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gU2NoZWR1bGVyO1xufSgpKTtcbnZhciBzY2hlZHVsZXIgPSBuZXcgU2NoZWR1bGVyKCk7XG52YXIgdXBkYXRlQ291bnQgPSBmdW5jdGlvbiAobikge1xuICAgICF3YXRjaGluZyAmJiBuID4gMCAmJiBzY2hlZHVsZXIuc3RhcnQoKTtcbiAgICB3YXRjaGluZyArPSBuO1xuICAgICF3YXRjaGluZyAmJiBzY2hlZHVsZXIuc3RvcCgpO1xufTtcbmV4cG9ydCB7IHNjaGVkdWxlciwgdXBkYXRlQ291bnQgfTtcbiIsImltcG9ydCB7IFJlc2l6ZU9ic2VydmVyQm94T3B0aW9ucyB9IGZyb20gJy4vUmVzaXplT2JzZXJ2ZXJCb3hPcHRpb25zJztcbmltcG9ydCB7IGNhbGN1bGF0ZUJveFNpemUgfSBmcm9tICcuL2FsZ29yaXRobXMvY2FsY3VsYXRlQm94U2l6ZSc7XG5pbXBvcnQgeyBpc1NWRywgaXNSZXBsYWNlZEVsZW1lbnQgfSBmcm9tICcuL3V0aWxzL2VsZW1lbnQnO1xudmFyIHNraXBOb3RpZnlPbkVsZW1lbnQgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgcmV0dXJuICFpc1NWRyh0YXJnZXQpXG4gICAgICAgICYmICFpc1JlcGxhY2VkRWxlbWVudCh0YXJnZXQpXG4gICAgICAgICYmIGdldENvbXB1dGVkU3R5bGUodGFyZ2V0KS5kaXNwbGF5ID09PSAnaW5saW5lJztcbn07XG52YXIgUmVzaXplT2JzZXJ2YXRpb24gPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFJlc2l6ZU9ic2VydmF0aW9uKHRhcmdldCwgb2JzZXJ2ZWRCb3gpIHtcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgIHRoaXMub2JzZXJ2ZWRCb3ggPSBvYnNlcnZlZEJveCB8fCBSZXNpemVPYnNlcnZlckJveE9wdGlvbnMuQ09OVEVOVF9CT1g7XG4gICAgICAgIHRoaXMubGFzdFJlcG9ydGVkU2l6ZSA9IHtcbiAgICAgICAgICAgIGlubGluZVNpemU6IDAsXG4gICAgICAgICAgICBibG9ja1NpemU6IDBcbiAgICAgICAgfTtcbiAgICB9XG4gICAgUmVzaXplT2JzZXJ2YXRpb24ucHJvdG90eXBlLmlzQWN0aXZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc2l6ZSA9IGNhbGN1bGF0ZUJveFNpemUodGhpcy50YXJnZXQsIHRoaXMub2JzZXJ2ZWRCb3gsIHRydWUpO1xuICAgICAgICBpZiAoc2tpcE5vdGlmeU9uRWxlbWVudCh0aGlzLnRhcmdldCkpIHtcbiAgICAgICAgICAgIHRoaXMubGFzdFJlcG9ydGVkU2l6ZSA9IHNpemU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubGFzdFJlcG9ydGVkU2l6ZS5pbmxpbmVTaXplICE9PSBzaXplLmlubGluZVNpemVcbiAgICAgICAgICAgIHx8IHRoaXMubGFzdFJlcG9ydGVkU2l6ZS5ibG9ja1NpemUgIT09IHNpemUuYmxvY2tTaXplKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICByZXR1cm4gUmVzaXplT2JzZXJ2YXRpb247XG59KCkpO1xuZXhwb3J0IHsgUmVzaXplT2JzZXJ2YXRpb24gfTtcbiIsInZhciBSZXNpemVPYnNlcnZlckRldGFpbCA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUmVzaXplT2JzZXJ2ZXJEZXRhaWwocmVzaXplT2JzZXJ2ZXIsIGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlVGFyZ2V0cyA9IFtdO1xuICAgICAgICB0aGlzLnNraXBwZWRUYXJnZXRzID0gW107XG4gICAgICAgIHRoaXMub2JzZXJ2YXRpb25UYXJnZXRzID0gW107XG4gICAgICAgIHRoaXMub2JzZXJ2ZXIgPSByZXNpemVPYnNlcnZlcjtcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIH1cbiAgICByZXR1cm4gUmVzaXplT2JzZXJ2ZXJEZXRhaWw7XG59KCkpO1xuZXhwb3J0IHsgUmVzaXplT2JzZXJ2ZXJEZXRhaWwgfTtcbiIsImltcG9ydCB7IHNjaGVkdWxlciwgdXBkYXRlQ291bnQgfSBmcm9tICcuL3V0aWxzL3NjaGVkdWxlcic7XG5pbXBvcnQgeyBSZXNpemVPYnNlcnZhdGlvbiB9IGZyb20gJy4vUmVzaXplT2JzZXJ2YXRpb24nO1xuaW1wb3J0IHsgUmVzaXplT2JzZXJ2ZXJEZXRhaWwgfSBmcm9tICcuL1Jlc2l6ZU9ic2VydmVyRGV0YWlsJztcbmltcG9ydCB7IHJlc2l6ZU9ic2VydmVycyB9IGZyb20gJy4vdXRpbHMvcmVzaXplT2JzZXJ2ZXJzJztcbnZhciBvYnNlcnZlck1hcCA9IG5ldyBXZWFrTWFwKCk7XG52YXIgZ2V0T2JzZXJ2YXRpb25JbmRleCA9IGZ1bmN0aW9uIChvYnNlcnZhdGlvblRhcmdldHMsIHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JzZXJ2YXRpb25UYXJnZXRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChvYnNlcnZhdGlvblRhcmdldHNbaV0udGFyZ2V0ID09PSB0YXJnZXQpIHtcbiAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAtMTtcbn07XG52YXIgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIoKSB7XG4gICAgfVxuICAgIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5jb25uZWN0ID0gZnVuY3Rpb24gKHJlc2l6ZU9ic2VydmVyLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgZGV0YWlsID0gbmV3IFJlc2l6ZU9ic2VydmVyRGV0YWlsKHJlc2l6ZU9ic2VydmVyLCBjYWxsYmFjayk7XG4gICAgICAgIG9ic2VydmVyTWFwLnNldChyZXNpemVPYnNlcnZlciwgZGV0YWlsKTtcbiAgICB9O1xuICAgIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5vYnNlcnZlID0gZnVuY3Rpb24gKHJlc2l6ZU9ic2VydmVyLCB0YXJnZXQsIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIGRldGFpbCA9IG9ic2VydmVyTWFwLmdldChyZXNpemVPYnNlcnZlcik7XG4gICAgICAgIHZhciBmaXJzdE9ic2VydmF0aW9uID0gZGV0YWlsLm9ic2VydmF0aW9uVGFyZ2V0cy5sZW5ndGggPT09IDA7XG4gICAgICAgIGlmIChnZXRPYnNlcnZhdGlvbkluZGV4KGRldGFpbC5vYnNlcnZhdGlvblRhcmdldHMsIHRhcmdldCkgPCAwKSB7XG4gICAgICAgICAgICBmaXJzdE9ic2VydmF0aW9uICYmIHJlc2l6ZU9ic2VydmVycy5wdXNoKGRldGFpbCk7XG4gICAgICAgICAgICBkZXRhaWwub2JzZXJ2YXRpb25UYXJnZXRzLnB1c2gobmV3IFJlc2l6ZU9ic2VydmF0aW9uKHRhcmdldCwgb3B0aW9ucyAmJiBvcHRpb25zLmJveCkpO1xuICAgICAgICAgICAgdXBkYXRlQ291bnQoMSk7XG4gICAgICAgICAgICBzY2hlZHVsZXIuc2NoZWR1bGUoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLnVub2JzZXJ2ZSA9IGZ1bmN0aW9uIChyZXNpemVPYnNlcnZlciwgdGFyZ2V0KSB7XG4gICAgICAgIHZhciBkZXRhaWwgPSBvYnNlcnZlck1hcC5nZXQocmVzaXplT2JzZXJ2ZXIpO1xuICAgICAgICB2YXIgaW5kZXggPSBnZXRPYnNlcnZhdGlvbkluZGV4KGRldGFpbC5vYnNlcnZhdGlvblRhcmdldHMsIHRhcmdldCk7XG4gICAgICAgIHZhciBsYXN0T2JzZXJ2YXRpb24gPSBkZXRhaWwub2JzZXJ2YXRpb25UYXJnZXRzLmxlbmd0aCA9PT0gMTtcbiAgICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgICAgIGxhc3RPYnNlcnZhdGlvbiAmJiByZXNpemVPYnNlcnZlcnMuc3BsaWNlKHJlc2l6ZU9ic2VydmVycy5pbmRleE9mKGRldGFpbCksIDEpO1xuICAgICAgICAgICAgZGV0YWlsLm9ic2VydmF0aW9uVGFyZ2V0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgdXBkYXRlQ291bnQoLTEpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIuZGlzY29ubmVjdCA9IGZ1bmN0aW9uIChyZXNpemVPYnNlcnZlcikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgZGV0YWlsID0gb2JzZXJ2ZXJNYXAuZ2V0KHJlc2l6ZU9ic2VydmVyKTtcbiAgICAgICAgZGV0YWlsLm9ic2VydmF0aW9uVGFyZ2V0cy5zbGljZSgpLmZvckVhY2goZnVuY3Rpb24gKG90KSB7IHJldHVybiBfdGhpcy51bm9ic2VydmUocmVzaXplT2JzZXJ2ZXIsIG90LnRhcmdldCk7IH0pO1xuICAgICAgICBkZXRhaWwuYWN0aXZlVGFyZ2V0cy5zcGxpY2UoMCwgZGV0YWlsLmFjdGl2ZVRhcmdldHMubGVuZ3RoKTtcbiAgICB9O1xuICAgIHJldHVybiBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXI7XG59KCkpO1xuZXhwb3J0IHsgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyIH07XG4iLCJpbXBvcnQgeyBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIgfSBmcm9tICcuL1Jlc2l6ZU9ic2VydmVyQ29udHJvbGxlcic7XG5pbXBvcnQgeyBpc0VsZW1lbnQgfSBmcm9tICcuL3V0aWxzL2VsZW1lbnQnO1xudmFyIFJlc2l6ZU9ic2VydmVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBSZXNpemVPYnNlcnZlcihjYWxsYmFjaykge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkZhaWxlZCB0byBjb25zdHJ1Y3QgJ1Jlc2l6ZU9ic2VydmVyJzogMSBhcmd1bWVudCByZXF1aXJlZCwgYnV0IG9ubHkgMCBwcmVzZW50LlwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRmFpbGVkIHRvIGNvbnN0cnVjdCAnUmVzaXplT2JzZXJ2ZXInOiBUaGUgY2FsbGJhY2sgcHJvdmlkZWQgYXMgcGFyYW1ldGVyIDEgaXMgbm90IGEgZnVuY3Rpb24uXCIpO1xuICAgICAgICB9XG4gICAgICAgIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5jb25uZWN0KHRoaXMsIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgUmVzaXplT2JzZXJ2ZXIucHJvdG90eXBlLm9ic2VydmUgPSBmdW5jdGlvbiAodGFyZ2V0LCBvcHRpb25zKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRmFpbGVkIHRvIGV4ZWN1dGUgJ29ic2VydmUnIG9uICdSZXNpemVPYnNlcnZlcic6IDEgYXJndW1lbnQgcmVxdWlyZWQsIGJ1dCBvbmx5IDAgcHJlc2VudC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc0VsZW1lbnQodGFyZ2V0KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkZhaWxlZCB0byBleGVjdXRlICdvYnNlcnZlJyBvbiAnUmVzaXplT2JzZXJ2ZXInOiBwYXJhbWV0ZXIgMSBpcyBub3Qgb2YgdHlwZSAnRWxlbWVudFwiKTtcbiAgICAgICAgfVxuICAgICAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIub2JzZXJ2ZSh0aGlzLCB0YXJnZXQsIG9wdGlvbnMpO1xuICAgIH07XG4gICAgUmVzaXplT2JzZXJ2ZXIucHJvdG90eXBlLnVub2JzZXJ2ZSA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJGYWlsZWQgdG8gZXhlY3V0ZSAndW5vYnNlcnZlJyBvbiAnUmVzaXplT2JzZXJ2ZXInOiAxIGFyZ3VtZW50IHJlcXVpcmVkLCBidXQgb25seSAwIHByZXNlbnQuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNFbGVtZW50KHRhcmdldCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJGYWlsZWQgdG8gZXhlY3V0ZSAndW5vYnNlcnZlJyBvbiAnUmVzaXplT2JzZXJ2ZXInOiBwYXJhbWV0ZXIgMSBpcyBub3Qgb2YgdHlwZSAnRWxlbWVudFwiKTtcbiAgICAgICAgfVxuICAgICAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIudW5vYnNlcnZlKHRoaXMsIHRhcmdldCk7XG4gICAgfTtcbiAgICBSZXNpemVPYnNlcnZlci5wcm90b3R5cGUuZGlzY29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLmRpc2Nvbm5lY3QodGhpcyk7XG4gICAgfTtcbiAgICBSZXNpemVPYnNlcnZlci50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICdmdW5jdGlvbiBSZXNpemVPYnNlcnZlciAoKSB7IFtwb2x5ZmlsbCBjb2RlXSB9JztcbiAgICB9O1xuICAgIHJldHVybiBSZXNpemVPYnNlcnZlcjtcbn0oKSk7XG5leHBvcnQgeyBSZXNpemVPYnNlcnZlciB9O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCwgaW1tZWRpYXRlKSB7XG4gIGxldCB0aW1lb3V0XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGV4ZWN1dGVkRnVuY3Rpb24oKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXNcbiAgICBjb25zdCBhcmdzID0gYXJndW1lbnRzXG5cbiAgICBjb25zdCBsYXRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgdGltZW91dCA9IG51bGxcbiAgICAgIGlmICghaW1tZWRpYXRlKSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpXG4gICAgfVxuXG4gICAgY29uc3QgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dFxuXG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpXG5cbiAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdClcblxuICAgIGlmIChjYWxsTm93KSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpXG4gIH1cbn1cbiIsImltcG9ydCB7IFJlc2l6ZU9ic2VydmVyIGFzIFBvbHlmaWxsIH0gZnJvbSAnQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXInXG5jb25zdCBSZXNpemVPYnNlcnZlciA9IHdpbmRvdy5SZXNpemVPYnNlcnZlciB8fCBQb2x5ZmlsbFxuaW1wb3J0IGRlYm91bmNlIGZyb20gJy4vdXRpbHMvZGVib3VuY2UnXG5cbmltcG9ydCByZW1vdmVJdGVtIGZyb20gJy4vdXRpbHMvcmVtb3ZlLWFycmF5LWl0ZW0nXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnRFbWl0dGVyJ1xuaW1wb3J0IHtcbiAgZ2V0RGlzdGFuY2UsXG4gIGluZGV4T2ZOZWFyZXN0UG9pbnRcbn0gZnJvbSAnLi9nZW9tZXRyeS9kaXN0YW5jZXMnXG5cbmltcG9ydCBEcmFnZ2FibGUgZnJvbSAnLi9kcmFnZ2FibGUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3QgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvcihkcmFnZ2FibGVzLCBvcHRpb25zPXt9KSB7XG4gICAgc3VwZXIob3B0aW9ucylcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHRpbWVFbmQ6IDIwMCxcbiAgICAgIHRpbWVFeGNhbmdlOiA0MDAsXG4gICAgICByYWRpdXM6IDMwXG4gICAgfSwgb3B0aW9ucylcblxuICAgIHRoaXMuY29udGFpbmVyID0gb3B0aW9ucy5jb250YWluZXJcbiAgICB0aGlzLmRyYWdnYWJsZXMgPSBkcmFnZ2FibGVzXG4gICAgdGhpcy5jaGFuZ2VkRHVyaW5nSXRlcmF0aW9uID0gZmFsc2VcblxuICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoZGVib3VuY2UodGhpcy5vblJlc2l6ZS5iaW5kKHRoaXMpLCAxMDApKVxuXG4gICAgaWYgKHRoaXMuY29udGFpbmVyKSB7XG4gICAgICB0aGlzLnJlc2l6ZU9ic2VydmVyLm9ic2VydmUodGhpcy5jb250YWluZXIpXG4gICAgfVxuXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIG9uUmVzaXplKCkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMucmVvcmRlck9uQ2hhbmdlKSB0aGlzLnJlc2V0KClcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZCkgPT4gZC5zdGFydFBvc2l0aW9uaW5nKCkpXG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuX2VuYWJsZSA9IHRydWVcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB0aGlzLmluaXREcmFnZ2FibGUoZHJhZ2dhYmxlKSlcbiAgfVxuXG4gIGluaXREcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgZHJhZ2dhYmxlLmVuYWJsZSA9IHRoaXMuX2VuYWJsZVxuICAgIGRyYWdnYWJsZS5vbignZHJhZzptb3ZlJywgKCkgPT4gdGhpcy5vbk1vdmUoZHJhZ2dhYmxlKSlcbiAgICBkcmFnZ2FibGUuZHJhZ0VuZEFjdGlvbiA9ICgpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5waW5Qb3NpdGlvbihkcmFnZ2FibGUucGlubmVkUG9zaXRpb24sIHRoaXMub3B0aW9ucy50aW1lRW5kKVxuICAgICAgdGhpcy5vbkVuZChkcmFnZ2FibGUpXG4gICAgfVxuICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZShkcmFnZ2FibGUuZWxlbWVudClcbiAgfVxuXG4gIHJlbGVhc2VEcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgdGhpcy5yZXNpemVPYnNlcnZlci51bm9ic2VydmUoZHJhZ2dhYmxlLmVsZW1lbnQpXG4gICAgZHJhZ2dhYmxlLnJlc2V0T24oJ2RyYWc6ZW5kJylcbiAgICBkcmFnZ2FibGUucmVzZXRPbignZHJhZzptb3ZlJylcbiAgICByZW1vdmVJdGVtKHRoaXMuZHJhZ2dhYmxlcywgZHJhZ2dhYmxlKVxuICB9XG5cbiAgb25Nb3ZlKGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IHNvcnRlZERyYWdnYWJsZXMgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuICAgIGNvbnN0IHBpbm5lZFBvc2l0aW9ucyA9IHNvcnRlZERyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbilcblxuICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IHNvcnRlZERyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpXG4gICAgY29uc3QgdGFyZ2V0SW5kZXggPSBpbmRleE9mTmVhcmVzdFBvaW50KHBpbm5lZFBvc2l0aW9ucywgZHJhZ2dhYmxlLnBvc2l0aW9uLCB0aGlzLm9wdGlvbnMucmFkaXVzLCB0aGlzLmRpc3RhbmNlRnVuYylcblxuICAgIGlmICh0YXJnZXRJbmRleCAhPT0gLTEgJiYgY3VycmVudEluZGV4ICE9PSB0YXJnZXRJbmRleCkge1xuICAgICAgaWYgKHRhcmdldEluZGV4IDwgY3VycmVudEluZGV4KSB7XG4gICAgICAgIGZvciAobGV0IGk9dGFyZ2V0SW5kZXg7IGk8Y3VycmVudEluZGV4OyBpKyspIHtcbiAgICAgICAgICBzb3J0ZWREcmFnZ2FibGVzW2ldLnBpblBvc2l0aW9uKHBpbm5lZFBvc2l0aW9uc1tpKzFdLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAobGV0IGk9Y3VycmVudEluZGV4OyBpPHRhcmdldEluZGV4OyBpKyspIHtcbiAgICAgICAgICBzb3J0ZWREcmFnZ2FibGVzW2krMV0ucGluUG9zaXRpb24ocGlubmVkUG9zaXRpb25zW2ldLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGRyYWdnYWJsZS5uYXRpdmVEcmFnQW5kRHJvcCkge1xuICAgICAgICBkcmFnZ2FibGUucGluUG9zaXRpb24ocGlubmVkUG9zaXRpb25zW3RhcmdldEluZGV4XSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbiA9IHBpbm5lZFBvc2l0aW9uc1t0YXJnZXRJbmRleF1cbiAgICAgIH1cblxuICAgICAgdGhpcy5jaGFuZ2VkRHVyaW5nSXRlcmF0aW9uID0gdHJ1ZVxuICAgIH1cbiAgfVxuXG4gIG9uRW5kKGRyYWdnYWJsZSkge1xuICAgIGlmICh0aGlzLmNoYW5nZWREdXJpbmdJdGVyYXRpb24pIHtcbiAgICAgIHRoaXMuZW1pdCgnbGlzdDpjaGFuZ2UnKVxuICAgICAgdGhpcy5jaGFuZ2VkRHVyaW5nSXRlcmF0aW9uID0gZmFsc2VcblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZW9yZGVyT25DaGFuZ2UgJiYgdGhpcy5vcHRpb25zLmNvbnRhaW5lcikge1xuICAgICAgICB0aGlzLnJlb3JkZXJFbGVtZW50cyhkcmFnZ2FibGUpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVvcmRlckVsZW1lbnRzKG1vdmVkRHJhZ2dhYmxlKSB7XG4gICAgY29uc3Qgc29ydGVkRHJhZ2dhYmxlcyA9IHRoaXMuZ2V0U29ydGVkRHJhZ2dhYmxlcygpXG4gICAgY29uc3QgaW5kZXggPSBzb3J0ZWREcmFnZ2FibGVzLmluZGV4T2YobW92ZWREcmFnZ2FibGUpXG4gICAgY29uc3QgbmV4dCA9IHNvcnRlZERyYWdnYWJsZXNbaW5kZXggKyAxXVxuXG4gICAgdGhpcy5yZXNldCgpXG5cbiAgICBpZiAobmV4dCkge1xuICAgICAgdGhpcy5jb250YWluZXIuaW5zZXJ0QmVmb3JlKG1vdmVkRHJhZ2dhYmxlLmVsZW1lbnQsIG5leHQuZWxlbWVudClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQobW92ZWREcmFnZ2FibGUuZWxlbWVudClcbiAgICB9XG5cbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZCkgPT4gZC5zdGFydFBvc2l0aW9uaW5nKCkpXG4gICAgdGhpcy5lbWl0KCdsaXN0OnJlb3JkZXJlZCcpXG4gIH1cblxuICBnZXRDdXJyZW50UGlubmVkUG9zaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbi5jbG9uZSgpKVxuICB9XG5cbiAgZ2V0U29ydGVkRHJhZ2dhYmxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5kcmFnZ2FibGVzLnNvcnQodGhpcy5zb3J0aW5nLmJpbmQodGhpcykpXG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucmVzZXRQb3NpdGlvblRvSW5pdGlhbCgpKVxuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucmVmcmVzaCgpKVxuICB9XG5cbiAgYWRkKGRyYWdnYWJsZXMpIHtcbiAgICBpZiAoIShkcmFnZ2FibGVzIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgICBkcmFnZ2FibGVzID0gW2RyYWdnYWJsZXNdXG4gICAgfVxuICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB0aGlzLmluaXREcmFnZ2FibGUoZHJhZ2dhYmxlKSlcbiAgICB0aGlzLmRyYWdnYWJsZXMgPSB0aGlzLmRyYWdnYWJsZXMuY29uY2F0KGRyYWdnYWJsZXMpXG4gIH1cblxuICByZW1vdmUoZHJhZ2dhYmxlcykge1xuICAgIGNvbnN0IGluaXRpYWxQb3NpdGlvbnMgPSB0aGlzLmRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5pbml0aWFsUG9zaXRpb24pXG4gICAgY29uc3QgbGlzdCA9IFtdXG4gICAgY29uc3Qgc29ydGVkRHJhZ2dhYmxlcyA9IHRoaXMuZ2V0U29ydGVkRHJhZ2dhYmxlcygpXG5cbiAgICBpZiAoIShkcmFnZ2FibGVzIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgICBkcmFnZ2FibGVzID0gW2RyYWdnYWJsZXNdXG4gICAgfVxuXG4gICAgZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHRoaXMucmVsZWFzZURyYWdnYWJsZShkcmFnZ2FibGUpKVxuXG4gICAgbGV0IGogPSAwXG4gICAgc29ydGVkRHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGlmICh0aGlzLmRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMSkge1xuICAgICAgICBpZiAoZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uICE9PSBpbml0aWFsUG9zaXRpb25zW2pdKSB7XG4gICAgICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKGluaXRpYWxQb3NpdGlvbnNbal0sIHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSlcbiAgICAgICAgfVxuICAgICAgICBkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uID0gaW5pdGlhbFBvc2l0aW9uc1tqXVxuICAgICAgICBqKytcbiAgICAgICAgbGlzdC5wdXNoKGRyYWdnYWJsZSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGxpc3RcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMucmVtb3ZlKHRoaXMuZHJhZ2dhYmxlcy5zbGljZSgpKVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUuZGVzdHJveSgpKVxuICAgIGlmICh0aGlzLmNvbnRhaW5lcikge1xuICAgICAgdGhpcy5yZXNpemVPYnNlcnZlci51bm9ic2VydmUodGhpcy5jb250YWluZXIpXG4gICAgfVxuICB9XG5cbiAgc29ydGluZyhkcmFnZ2FibGVBLCBkcmFnZ2FibGVCKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5zb3J0aW5nKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLnNvcnRpbmcoZHJhZ2dhYmxlQSwgZHJhZ2dhYmxlQilcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGRyYWdnYWJsZUEucGlubmVkUG9zaXRpb24ueSA8IGRyYWdnYWJsZUIucGlubmVkUG9zaXRpb24ueSkgcmV0dXJuIC0xXG4gICAgICBpZiAoZHJhZ2dhYmxlQS5waW5uZWRQb3NpdGlvbi55ID4gZHJhZ2dhYmxlQi5waW5uZWRQb3NpdGlvbi55KSByZXR1cm4gMVxuICAgICAgaWYgKGRyYWdnYWJsZUEucGlubmVkUG9zaXRpb24ueCA8IGRyYWdnYWJsZUIucGlubmVkUG9zaXRpb24ueCkgcmV0dXJuIC0xXG4gICAgICBpZiAoZHJhZ2dhYmxlQS5waW5uZWRQb3NpdGlvbi54ID4gZHJhZ2dhYmxlQi5waW5uZWRQb3NpdGlvbi54KSByZXR1cm4gMVxuICAgICAgcmV0dXJuIDBcbiAgICB9XG4gIH1cblxuICBnZXQgZGlzdGFuY2VGdW5jKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZ2V0RGlzdGFuY2UgfHwgZ2V0RGlzdGFuY2VcbiAgfVxuXG4gIGdldCBwb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q3VycmVudFBpbm5lZFBvc2l0aW9ucygpXG4gIH1cblxuICBzZXQgcG9zaXRpb25zKHBvc2l0aW9ucykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSAnd3JvbmcgYXJyYXkgbGVuZ3RoJ1xuICAgIGlmIChwb3NpdGlvbnMubGVuZ3RoID09PSB0aGlzLmRyYWdnYWJsZXMubGVuZ3RoKSB7XG4gICAgICBwb3NpdGlvbnMuZm9yRWFjaCgocG9pbnQsIGkpID0+IHtcbiAgICAgICAgdGhpcy5kcmFnZ2FibGVzW2ldLnBpblBvc2l0aW9uKHBvaW50KVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbWVzc2FnZVxuICAgIH1cbiAgfVxuXG4gIGdldCBlbmFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZVxuICB9XG5cbiAgc2V0IGVuYWJsZShlbmFibGUpIHtcbiAgICB0aGlzLl9lbmFibGUgPSBlbmFibGVcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUuZW5hYmxlID0gZW5hYmxlXG4gICAgfSlcbiAgfVxuXG4gIHN0YXRpYyBmYWN0b3J5KGNvbnRhaW5lckVsZW1lbnQsIGVsZW1lbnRzLCBvcHRpb25zPXt9KSB7XG4gICAgY29uc3QgZHJhZ2dhYmxlcyA9IEFycmF5LmZyb20oZWxlbWVudHMpLm1hcCgoZWxlbWVudCkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBEcmFnZ2FibGUoZWxlbWVudCwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyRWxlbWVudFxuICAgICAgfSwgb3B0aW9ucy5kcmFnZ2FibGUgfHwge30pKVxuICAgIH0pXG5cbiAgICByZXR1cm4gbmV3IExpc3QoZHJhZ2dhYmxlcywgT2JqZWN0LmFzc2lnbih7XG4gICAgICBjb250YWluZXI6IGNvbnRhaW5lckVsZW1lbnRcbiAgICB9LCBvcHRpb25zLmxpc3QgfHwge30pKVxuICB9XG59XG4iLCJpbXBvcnQgTGlzdCBmcm9tICcuL2xpc3QnXG5pbXBvcnQgeyBpbmRleE9mTmVhcmVzdFBvaW50LCBnZXRZRGlmZmVyZW5jZSB9IGZyb20gJy4vZ2VvbWV0cnkvZGlzdGFuY2VzJ1xuaW1wb3J0IFBvaW50IGZyb20gJy4vZ2VvbWV0cnkvcG9pbnQnXG5cbmltcG9ydCBEcmFnZ2FibGUgZnJvbSAnLi9kcmFnZ2FibGUnXG5cbmNvbnN0IGFycmF5TW92ZSA9IChhcnJheSwgZnJvbSwgdG8pID0+IHtcbiAgYXJyYXkuc3BsaWNlKHRvIDwgMCA/IGFycmF5Lmxlbmd0aCArIHRvIDogdG8sIDAsIGFycmF5LnNwbGljZShmcm9tLCAxKVswXSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnViYmxpbmdMaXN0IGV4dGVuZHMgTGlzdCB7XG4gIGF1dG9EZXRlY3RWZXJ0aWNhbEdhcCgpIHtcbiAgICBpZiAoIXRoaXMuX3ZlcnRpY2FsR2FwICYmICF0aGlzLm9wdGlvbnMudmVydGljYWxHYXAgJiYgdGhpcy5kcmFnZ2FibGVzLmxlbmd0aCA+PSAyKSB7XG4gICAgICBjb25zdCBzb3J0ZWQgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuICAgICAgdGhpcy5fdmVydGljYWxHYXAgPSBzb3J0ZWRbMV0ucGlubmVkUG9zaXRpb24ueSAtIHNvcnRlZFswXS5waW5uZWRQb3NpdGlvbi55IC0gc29ydGVkWzBdLmdldFNpemUoKS55XG4gICAgfVxuICB9XG5cbiAgYXV0b0RldGVjdFN0YXJ0UG9zaXRpb24oKSB7XG4gICAgaWYgKHRoaXMuZHJhZ2dhYmxlcy5sZW5ndGggPj0gMSAmJiAhdGhpcy5zdGFydFBvc2l0aW9uKSB7XG4gICAgICB0aGlzLnN0YXJ0UG9zaXRpb24gPSB0aGlzLmRyYWdnYWJsZXNbMF0ucGlubmVkUG9zaXRpb25cbiAgICB9XG4gIH1cblxuICBpbml0RHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIHN1cGVyLmluaXREcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICAgIGRyYWdnYWJsZS5vbignZHJhZzpzdGFydCcsICgpID0+IHRoaXMub25EcmFnU3RhcnQoZHJhZ2dhYmxlKSlcbiAgfVxuXG4gIG9uRHJhZ1N0YXJ0KGRyYWdnYWJsZSkge1xuICAgIHRoaXMuYXV0b0RldGVjdFZlcnRpY2FsR2FwKClcbiAgICB0aGlzLmF1dG9EZXRlY3RTdGFydFBvc2l0aW9uKClcbiAgICB0aGlzLmNhY2hlZFNvcnRlZERyYWdnYWJsZXMgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuICAgIHRoaXMuaW5kZXhPZkFjdGl2ZURyYWdnYWJsZSA9IHRoaXMuY2FjaGVkU29ydGVkRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSlcbiAgfVxuXG4gIG9uTW92ZShkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBwcmV2RHJhZ2dhYmxlID0gdGhpcy5jYWNoZWRTb3J0ZWREcmFnZ2FibGVzW3RoaXMuaW5kZXhPZkFjdGl2ZURyYWdnYWJsZSAtIDFdXG4gICAgY29uc3QgbmV4dERyYWdnYWJsZSA9IHRoaXMuY2FjaGVkU29ydGVkRHJhZ2dhYmxlc1t0aGlzLmluZGV4T2ZBY3RpdmVEcmFnZ2FibGUgKyAxXVxuICAgIGNvbnN0IGN1cnJlbnRQb3NpdGlvbiA9IGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvblxuXG4gICAgbGV0IGN1cnJlbnRPcmRlclxuICAgIGxldCB0YXJnZXRJbmRleFxuXG4gICAgaWYoZHJhZ2dhYmxlLnVwRGlyZWN0aW9uICYmIHByZXZEcmFnZ2FibGUpIHtcbiAgICAgIGN1cnJlbnRPcmRlciA9IFtwcmV2RHJhZ2dhYmxlLCBkcmFnZ2FibGVdLm1hcCgoZCkgPT4gZC5waW5uZWRQb3NpdGlvbilcbiAgICAgIHRhcmdldEluZGV4ID0gaW5kZXhPZk5lYXJlc3RQb2ludChjdXJyZW50T3JkZXIsIGRyYWdnYWJsZS5wb3NpdGlvbiwgMTAwMDAsIHRoaXMuZGlzdGFuY2VGdW5jKVxuXG4gICAgICBpZiAodGFyZ2V0SW5kZXggPT09IDApIHtcbiAgICAgICAgaWYoZHJhZ2dhYmxlLnNob3VsZFVzZU5hdGl2ZURyYWdBbmREcm9wKCkpIHtcbiAgICAgICAgICBkcmFnZ2FibGUucGluUG9zaXRpb24ocHJldkRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24gPSBwcmV2RHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uLmNsb25lKClcbiAgICAgICAgfVxuICAgICAgICBwcmV2RHJhZ2dhYmxlLnBpblBvc2l0aW9uKG5ldyBQb2ludChcbiAgICAgICAgICBjdXJyZW50UG9zaXRpb24ueCxcbiAgICAgICAgICBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24ueSArIGRyYWdnYWJsZS5nZXRTaXplKCkueSArIHRoaXMudmVydGljYWxHYXBcbiAgICAgICAgKSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICBhcnJheU1vdmUodGhpcy5jYWNoZWRTb3J0ZWREcmFnZ2FibGVzLCB0aGlzLmluZGV4T2ZBY3RpdmVEcmFnZ2FibGUtLSwgdGhpcy5pbmRleE9mQWN0aXZlRHJhZ2dhYmxlKVxuICAgICAgICB0aGlzLm9uTW92ZShkcmFnZ2FibGUpXG4gICAgICAgIHRoaXMuY2hhbmdlZER1cmluZ0l0ZXJhdGlvbiA9IHRydWVcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYoZHJhZ2dhYmxlLmRvd25EaXJlY3Rpb24gJiYgbmV4dERyYWdnYWJsZSkge1xuICAgICAgY3VycmVudE9yZGVyID0gW2RyYWdnYWJsZSwgbmV4dERyYWdnYWJsZV0ubWFwKChkKSA9PiBkLnBpbm5lZFBvc2l0aW9uKVxuICAgICAgdGFyZ2V0SW5kZXggPSBpbmRleE9mTmVhcmVzdFBvaW50KGN1cnJlbnRPcmRlciwgZHJhZ2dhYmxlLnBvc2l0aW9uLCAxMDAwMCwgdGhpcy5kaXN0YW5jZUZ1bmMpXG5cbiAgICAgIGlmKHRhcmdldEluZGV4ID09PSAxKSB7XG4gICAgICAgIG5leHREcmFnZ2FibGUucGluUG9zaXRpb24oZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICAgIGNvbnN0IGRyYWdnYWJsZU5ld1Bvc2l0aW9uID0gbmV3IFBvaW50KFxuICAgICAgICAgIG5leHREcmFnZ2FibGUucGlubmVkUG9zaXRpb24ueCxcbiAgICAgICAgICBuZXh0RHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uLnkgKyBuZXh0RHJhZ2dhYmxlLmdldFNpemUoKS55ICsgdGhpcy52ZXJ0aWNhbEdhcFxuICAgICAgICApXG4gICAgICAgIGlmKGRyYWdnYWJsZS5zaG91bGRVc2VOYXRpdmVEcmFnQW5kRHJvcCgpKSB7XG4gICAgICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKGRyYWdnYWJsZU5ld1Bvc2l0aW9uKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbiA9IGRyYWdnYWJsZU5ld1Bvc2l0aW9uXG4gICAgICAgIH1cbiAgICAgICAgYXJyYXlNb3ZlKHRoaXMuY2FjaGVkU29ydGVkRHJhZ2dhYmxlcywgdGhpcy5pbmRleE9mQWN0aXZlRHJhZ2dhYmxlKyssIHRoaXMuaW5kZXhPZkFjdGl2ZURyYWdnYWJsZSlcbiAgICAgICAgdGhpcy5vbk1vdmUoZHJhZ2dhYmxlKVxuICAgICAgICB0aGlzLmNoYW5nZWREdXJpbmdJdGVyYXRpb24gPSB0cnVlXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYnViYmxpbmcoc29ydGVkRHJhZ2dhYmxlcywgY3VycmVudERyYWdnYWJsZSkge1xuICAgIGNvbnN0IGN1cnJlbnRQb3NpdGlvbiA9IHRoaXMuc3RhcnRQb3NpdGlvbi5jbG9uZSgpXG4gICAgc29ydGVkRHJhZ2dhYmxlcyB8fD0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcblxuICAgIHNvcnRlZERyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBpZiAoIWRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbi5jb21wYXJlKGN1cnJlbnRQb3NpdGlvbikpIHtcbiAgICAgICAgaWYgKGRyYWdnYWJsZSA9PT0gY3VycmVudERyYWdnYWJsZSAmJiAhY3VycmVudERyYWdnYWJsZS5zaG91bGRVc2VOYXRpdmVEcmFnQW5kRHJvcCgpKSB7XG4gICAgICAgICAgZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uID0gY3VycmVudFBvc2l0aW9uLmNsb25lKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkcmFnZ2FibGUucGluUG9zaXRpb24oY3VycmVudFBvc2l0aW9uLCAoZHJhZ2dhYmxlID09PSBjdXJyZW50RHJhZ2dhYmxlKSA/IDAgOiB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY3VycmVudFBvc2l0aW9uLnkgPSBjdXJyZW50UG9zaXRpb24ueSArIGRyYWdnYWJsZS5nZXRTaXplKCkueSArIHRoaXMudmVydGljYWxHYXBcbiAgICB9KVxuICB9XG5cbiAgcmVtb3ZlKGRyYWdnYWJsZXMpIHtcbiAgICBpZiAoIShkcmFnZ2FibGVzIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgICBkcmFnZ2FibGVzID0gW2RyYWdnYWJsZXNdXG4gICAgfVxuXG4gICAgZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHRoaXMucmVsZWFzZURyYWdnYWJsZShkcmFnZ2FibGUpKVxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IHRoaXMuZHJhZ2dhYmxlcy5maWx0ZXIoKGQpID0+ICFkcmFnZ2FibGVzLmluY2x1ZGVzKGQpKVxuXG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGQpID0+IGQuc3RhcnRQb3NpdGlvbmluZygpKVxuXG4gICAgaWYodGhpcy5kcmFnZ2FibGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuYXV0b0RldGVjdFZlcnRpY2FsR2FwKClcbiAgICAgIHRoaXMuYXV0b0RldGVjdFN0YXJ0UG9zaXRpb24oKVxuICAgICAgdGhpcy5idWJibGluZygpXG4gICAgfVxuICB9XG5cbiAgZ2V0IGRpc3RhbmNlRnVuYygpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmdldERpc3RhbmNlIHx8IGdldFlEaWZmZXJlbmNlXG4gIH1cblxuICBnZXQgdmVydGljYWxHYXAoKSB7XG4gICAgaWYodGhpcy5vcHRpb25zLnZlcnRpY2FsR2FwKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLnZlcnRpY2FsR2FwXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYXV0b0RldGVjdFZlcnRpY2FsR2FwKClcbiAgICAgIHJldHVybiB0aGlzLl92ZXJ0aWNhbEdhcCB8fCAwXG4gICAgfVxuICB9XG5cbiAgc2V0IHZlcnRpY2FsR2FwKGdhcFZhbHVlKSB7XG4gICAgdGhpcy5vcHRpb25zLnZlcnRpY2FsR2FwID0gZ2FwVmFsdWVcbiAgfVxuXG4gIHN0YXRpYyBmYWN0b3J5KGNvbnRhaW5lckVsZW1lbnQsIGVsZW1lbnRzLCBvcHRpb25zPXt9KSB7XG4gICAgY29uc3QgZHJhZ2dhYmxlcyA9IEFycmF5LmZyb20oZWxlbWVudHMpLm1hcCgoZWxlbWVudCkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBEcmFnZ2FibGUoZWxlbWVudCwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyRWxlbWVudFxuICAgICAgfSwgb3B0aW9ucy5kcmFnZ2FibGUgfHwge30pKVxuICAgIH0pXG5cbiAgICByZXR1cm4gbmV3IEJ1YmJsaW5nTGlzdChkcmFnZ2FibGVzLCBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyRWxlbWVudFxuICAgIH0sIG9wdGlvbnMubGlzdCB8fCB7fSkpXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJQb2ludCIsIngiLCJ5IiwicCIsImsiLCJlbGVtZW50IiwicGFyZW50IiwicGFyZW50Tm9kZSIsImVsZW1lbnRSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicGFyZW50UmVjdCIsImxlZnQiLCJ0b3AiLCJ3aWR0aCIsImhlaWdodCIsIlJlY3RhbmdsZSIsInBvc2l0aW9uIiwic2l6ZSIsImFkZCIsIm11bHQiLCJyZWN0IiwiTWF0aCIsIm1pbiIsIm1heCIsInN1YiIsInJlY3RhbmdsZSIsImluY2x1ZGVQb2ludCIsImdldFAzIiwiYXhpcyIsInNlbEF4aXMiLCJjcm9zc1JlY3RhbmdsZSIsImFuZCIsInRoaXNDZW50ZXIiLCJnZXRDZW50ZXIiLCJyZWN0Q2VudGVyIiwic2lnbiIsIm9mZnNldCIsImVsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic3R5bGUiLCJpc0NvbnNpZGVyVHJhbnNsYXRlIiwiZWxlbWVudE9mZnNldCIsImVsZW1lbnRTaXplIiwiZ2V0RGVmYXVsdENvbnRhaW5lciIsImNvbnRhaW5lciIsIndpbmRvdyIsImdldENvbXB1dGVkU3R5bGUiLCJ0YWdOYW1lIiwiRXZlbnRFbWl0dGVyIiwib3B0aW9ucyIsImV2ZW50cyIsIm9uIiwiT2JqZWN0IiwiZW50cmllcyIsImV2ZW50TmFtZSIsImZuIiwiaW50ZXJydXB0ZWQiLCJhcmdzIiwic2xpY2UiLCJjYWxsIiwiYXJndW1lbnRzIiwiZnVuYyIsInB1c2giLCJ1bnNoaWZ0IiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwiZ2V0RGlzdGFuY2UiLCJwMSIsInAyIiwiZHgiLCJkeSIsInNxcnQiLCJnZXRYRGlmZmVyZW5jZSIsImFicyIsImdldFlEaWZmZXJlbmNlIiwidHJhbnNmb3JtZWRTcGFjZURpc3RhbmNlRmFjdG9yeSIsInBvdyIsImluZGV4T2ZOZWFyZXN0UG9pbnQiLCJhcnIiLCJ2YWwiLCJyYWRpdXMiLCJnZXREaXN0YW5jZUZ1bmMiLCJpIiwidGVtcCIsImxlbmd0aCIsImRpcmVjdENyb3NzaW5nIiwiTDFQMSIsIkwxUDIiLCJMMlAxIiwiTDJQMiIsImsxIiwiazIiLCJiMSIsImIyIiwiYm91bmRUb0xpbmUiLCJBIiwiQiIsIlAiLCJBUCIsIkFCIiwiYWIyIiwiYXBfYWIiLCJ0IiwiZ2V0UG9pbnRPbkxpbmVCeUxlbmdodCIsIkxQMSIsIkxQMiIsImxlbmdodCIsInBlcmNlbnQiLCJhZGRQb2ludFRvQm91bmRQb2ludHMiLCJib3VuZHBvaW50cyIsInBvaW50IiwiaXNSaWdodCIsInJlc3VsdCIsImZpbHRlciIsImJQb2ludCIsImdldEFuZ2xlRGlmZiIsImFscGhhIiwiYmV0YSIsIm1pbkFuZ2xlIiwibWF4QW5nbGUiLCJQSSIsImdldEFuZ2xlIiwiZGlmZiIsIm5vcm1hbGl6ZUFuZ2xlIiwiYXRhbjIiLCJib3VuZEFuZ2xlIiwiZG1pbiIsImRtYXgiLCJnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0iLCJhbmdsZSIsImNlbnRlciIsImNvcyIsInNpbiIsIkJvdW5kIiwiX3NpemUiLCJpbnN0YW5jZSIsImJvdW5kIiwiYmluZCIsIkJvdW5kVG9SZWN0YW5nbGUiLCJjYWxjUG9pbnQiLCJjbG9uZSIsInJlY3RQMiIsIkJvdW5kVG9FbGVtZW50IiwiZnJvbUVsZW1lbnQiLCJCb3VuZFRvTGluZVgiLCJzdGFydFkiLCJlbmRZIiwiQm91bmRUb0xpbmVZIiwic3RhcnRYIiwiZW5kWCIsIkJvdW5kVG9MaW5lIiwic3RhcnRQb2ludCIsImVuZFBvaW50Iiwic29tZUsiLCJjb3NCZXRhIiwic2luQmV0YSIsInBvaW50MiIsIm5ld0VuZFBvaW50IiwicG9pbnRDcm9zc2luZyIsIkJvdW5kVG9DaXJjbGUiLCJCb3VuZFRvQXJjIiwic3RhcnRBbmdsZSIsImVuZEFuZ2xlIiwiX3N0YXJ0QW5nbGUiLCJfZW5kQW5nbGUiLCJhcnJheSIsInJhbmdlIiwic3RhcnQiLCJzdG9wIiwic3RlcCIsIkJhc2ljU3RyYXRlZ3kiLCJOb3RDcm9zc2luZ1N0cmF0ZWd5IiwicmVjdGFuZ2xlTGlzdCIsImluZGV4ZXNPZk5ld3MiLCJzdGF0aWNSZWN0YW5nbGVJbmRleGVzIiwicmVkdWNlIiwiaW5kZXhlcyIsIl9yZWN0IiwiZm9yRWFjaCIsInJlbW92YWJsZSIsImluZGV4T2ZTdGF0aWMiLCJzdGF0aWNSZWN0IiwibW92ZVRvQm91bmQiLCJzb21lIiwiYm91bmRSZWN0IiwiZ2V0U3F1YXJlIiwib2RsRHJhZ2dhYmxlc0xpc3QiLCJuZXdEcmFnZ2FibGVzIiwiaW5kZXhPZk5ld3MiLCJkcmFnZ2FibGVzIiwiY29uY2F0IiwiZHJhZ2dhYmxlIiwiRmxvYXRMZWZ0U3RyYXRlZ3kiLCJhc3NpZ24iLCJwYWRkaW5nVG9wTGVmdCIsInBhZGRpbmdCb3R0b21SaWdodCIsInlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyIsImdldFBvc2l0aW9uIiwiX2luZGV4ZXNPZk5ld3MiLCJnZXRQMiIsImJvdW5kYXJ5UG9pbnRzIiwicmVjdEluZGV4IiwiaXNWYWxpZCIsIm5ld0xpc3QiLCJsaXN0T2xkUG9zaXRpb24iLCJtYXAiLCJuZXdEcmFnZ2FibGUiLCJGbG9hdFJpZ2h0U3RyYXRlZ3kiLCJwYWRkaW5nVG9wUmlnaHQiLCJwYWRkaW5nQm90dG9tTGVmdCIsInBhZGRpbmdCb3R0b21OZWdMZWZ0IiwiZ2V0UDQiLCJhZGRUb0RlZmF1bHRTY29wZSIsInRhcmdldCIsImRlZmF1bHRTY29wZSIsImFkZFRhcmdldCIsIlRhcmdldCIsInRpbWVFbmQiLCJ0aW1lRXhjYW5nZSIsInBvc2l0aW9uaW5nU3RyYXRlZ3kiLCJzdHJhdGVneSIsImdldFJlY3RhbmdsZSIsInRhcmdldHMiLCJlbWl0dGVyIiwiZW1pdCIsInN0YXJ0Qm91bmRpbmciLCJpbml0IiwiYm91bmRpbmciLCJpbmRleGVzT2ZOZXciLCJwb3NpdGlvbmluZyIsIm9sZERyYWdnYWJsZXMiLCJzb3J0aW5nIiwicmVjdGFuZ2xlcyIsImlubmVyRHJhZ2dhYmxlcyIsInNldFBvc2l0aW9uIiwiY2F0Y2hEcmFnZ2FibGUiLCJ0YXJnZXRSZWN0YW5nbGUiLCJkcmFnZ2FibGVTcXVhcmUiLCJzY29wZXMiLCJzY29wZSIsInJlbW92ZUl0ZW0iLCJuZXdEcmFnZ2FibGVzSW5kZXgiLCJnZXRTaXplIiwiYWRkUmVtb3ZlT25Nb3ZlIiwidGltZSIsIm1vdmUiLCJpbml0aWFsUG9zaXRpb24iLCJwdXNoSW5uZXJEcmFnZ2FibGUiLCJyZW1vdmVIYW5kbGVyIiwicmVtb3ZlIiwidW5zdWJzY3JpYmUiLCJfY29udGFpbmVyIiwiU2NvcGUiLCJkcmFnRW5kQWN0aW9uIiwib25FbmQiLCJzaG90VGFyZ2V0cyIsInNvcnQiLCJhIiwiYiIsInBpblBvc2l0aW9uIiwicmVzZXQiLCJyZWZyZXNoIiwicG9zaXRpb25zIiwibWVzc2FnZSIsInRhcmdldEluZGV4ZXMiLCJjdXJyZW50U2NvcGUiLCJhZGREcmFnZ2FibGVUb1Njb3BlIiwiYWRkRHJhZ2dhYmxlIiwiRHJhZ2dhYmxlIiwiaW50ZXJydXB0IiwiYWRkVGFyZ2V0VG9TY29wZSIsInByZXBlbmRPbiIsImNoZWNrU3VwcG9ydFBhc3NpdmVFdmVudHMiLCJwYXNzaXZlU3VwcG9ydGVkIiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIl9lcnIiLCJpc1N1cHBvcnRQYXNzaXZlRXZlbnRzIiwidGhyb3R0bGUiLCJ3YWl0IiwibGFzdFRpbWUiLCJleGVjdXRlZEZ1bmN0aW9uIiwiY29udGV4dCIsIm5vdyIsIkRhdGUiLCJhcHBseSIsInRocm90dGxlZERyYWdPdmVyIiwiY2FsbGJhY2siLCJkdXJhdGlvbiIsInRocm90dGxlZENhbGxiYWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInBhc3NpdmVGYWxzZSIsInBhc3NpdmUiLCJpc1RvdWNoIiwibW91c2VFdmVudHMiLCJlbmQiLCJ0b3VjaEV2ZW50cyIsInRyYW5zZm9ybVByb3BlcnR5IiwiZ2V0U3R5bGVQcm9wZXJ0eSIsInRyYW5zaXRpb25Qcm9wZXJ0eSIsImdldFRvdWNoQnlJRCIsInRvdWNoSWQiLCJjaGFuZ2VkVG91Y2hlcyIsImlkZW50aWZpZXIiLCJwcmV2ZW50RG91YmxlSW5pdCIsImV4aXN0aW5nIiwiY29weVN0eWxlcyIsInNvdXJjZSIsImRlc3RpbmF0aW9uIiwiY3MiLCJrZXkiLCJjaGlsZHJlbiIsIl9lbmFibGUiLCJzdGFydFBvc2l0aW9uaW5nIiwic3RhcnRMaXN0ZW5pbmciLCJfc2V0RGVmYXVsdFRyYW5zaXRpb24iLCJwaW5uZWRQb3NpdGlvbiIsIl9kcmFnU3RhcnQiLCJkcmFnU3RhcnQiLCJfZHJhZ01vdmUiLCJkcmFnTW92ZSIsIl9kcmFnRW5kIiwiZHJhZ0VuZCIsIl9uYXRpdmVEcmFnU3RhcnQiLCJuYXRpdmVEcmFnU3RhcnQiLCJfbmF0aXZlRHJhZ092ZXIiLCJuYXRpdmVEcmFnT3ZlciIsImRyYWdPdmVyVGhyb3R0bGVEdXJhdGlvbiIsIl9uYXRpdmVEcmFnRW5kIiwibmF0aXZlRHJhZ0VuZCIsIl9uYXRpdmVEcm9wIiwibmF0aXZlRHJvcCIsIl9zY3JvbGwiLCJvblNjcm9sbCIsImhhbmRsZXIiLCJfdHJhbnNmb3JtUG9zaXRpb24iLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbkNzcyIsInRlc3QiLCJyZXBsYWNlIiwidHJhbnNsYXRlQ3NzIiwidHJhbnNmb3JtIiwic2hvdWxkUmVtb3ZlWmVyb1RyYW5zbGF0ZSIsImlzU2lsZW50IiwiX3NldFRyYW5zaXRpb24iLCJfc2V0VHJhbnNsYXRlIiwic2lsZW50IiwiX3ByZXZpb3VzRGlyZWN0aW9uUG9zaXRpb24iLCJfc3RhcnRQb3NpdGlvbiIsImxlZnREaXJlY3Rpb24iLCJyaWdodERpcmVjdGlvbiIsInVwRGlyZWN0aW9uIiwiZG93bkRpcmVjdGlvbiIsIl9zdGFydFRvdWNoVGltZXN0YW1wIiwidG91Y2hEcmFnZ2luZ1RocmVzaG9sZCIsImlzVG91Y2hFdmVudCIsIm5hdGl2ZURyYWdBbmREcm9wIiwiZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wT25Ub3VjaCIsIlRvdWNoRXZlbnQiLCJ0b3VjaFBvaW50IiwiX3N0YXJ0VG91Y2hQb2ludCIsInBhZ2VYIiwiY2xpZW50WCIsInBhZ2VZIiwiY2xpZW50WSIsIl90b3VjaElkIiwiX3N0YXJ0V2luZG93U2Nyb2xsUG9pbnQiLCJ3aW5kb3dTY3JvbGxQb2ludCIsIl9zdGFydFBhcmVudHNTY3JvbGxQb2ludCIsInBhcmVudHNTY3JvbGxQb2ludCIsIkhUTUxJbnB1dEVsZW1lbnQiLCJmb2N1cyIsInNob3VsZFVzZU5hdGl2ZURyYWdBbmREcm9wIiwiZW11bGF0ZU9uRmlyc3RNb3ZlIiwic2VlbXNTY3JvbGxpbmciLCJjYW5jZWxEcmFnZ2luZyIsImVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcCIsImNhbmNlbEVtdWxhdGlvbiIsInBhcmVudHMiLCJ0b3VjaCIsImlzRHJhZ2dpbmciLCJzdG9wUHJvcGFnYXRpb24iLCJkZXRlcm1pbmVEaXJlY3Rpb24iLCJjbGFzc0xpc3QiLCJzZXRUaW1lb3V0IiwiX2V2ZW50IiwiZGF0YVRyYW5zZmVyIiwic2V0RGF0YSIsImVmZmVjdEFsbG93ZWQiLCJkcm9wRWZmZWN0IiwicmVtb3ZlQXR0cmlidXRlIiwiY29udGFpbmVyUmVjdCIsImNsb25lZEVsZW1lbnQiLCJjbG9uZU5vZGUiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJlbXVsYXRpb25EcmFnZ2FibGUiLCJjb250YWluZXJSZWN0UG9pbnQiLCJkZXN0cm95IiwicmVtb3ZlQ2hpbGQiLCJyZXNldEVtaXR0ZXIiLCJfaGFuZGxlciIsInNjcm9sbFgiLCJzY3JvbGxZIiwiX2NhY2hlZFBhcmVudHMiLCJzdW0iLCJzY3JvbGxMZWZ0Iiwic2Nyb2xsVG9wIiwiZW5hYmxlIiwiUmVzaXplT2JzZXJ2ZXIiLCJkZWJvdW5jZSIsImltbWVkaWF0ZSIsInRpbWVvdXQiLCJsYXRlciIsImNhbGxOb3ciLCJjbGVhclRpbWVvdXQiLCJQb2x5ZmlsbCIsIkxpc3QiLCJjaGFuZ2VkRHVyaW5nSXRlcmF0aW9uIiwicmVzaXplT2JzZXJ2ZXIiLCJvblJlc2l6ZSIsIm9ic2VydmUiLCJyZW9yZGVyT25DaGFuZ2UiLCJkIiwiaW5pdERyYWdnYWJsZSIsIm9uTW92ZSIsInVub2JzZXJ2ZSIsInJlc2V0T24iLCJzb3J0ZWREcmFnZ2FibGVzIiwiZ2V0U29ydGVkRHJhZ2dhYmxlcyIsInBpbm5lZFBvc2l0aW9ucyIsImN1cnJlbnRJbmRleCIsInRhcmdldEluZGV4IiwiZGlzdGFuY2VGdW5jIiwicmVvcmRlckVsZW1lbnRzIiwibW92ZWREcmFnZ2FibGUiLCJuZXh0IiwiaW5zZXJ0QmVmb3JlIiwicmVzZXRQb3NpdGlvblRvSW5pdGlhbCIsIkFycmF5IiwiaW5pdGlhbFBvc2l0aW9ucyIsImxpc3QiLCJyZWxlYXNlRHJhZ2dhYmxlIiwiaiIsImRyYWdnYWJsZUEiLCJkcmFnZ2FibGVCIiwiZ2V0Q3VycmVudFBpbm5lZFBvc2l0aW9ucyIsImNvbnRhaW5lckVsZW1lbnQiLCJlbGVtZW50cyIsImZyb20iLCJhcnJheU1vdmUiLCJ0byIsIkJ1YmJsaW5nTGlzdCIsIl92ZXJ0aWNhbEdhcCIsInZlcnRpY2FsR2FwIiwic29ydGVkIiwic3RhcnRQb3NpdGlvbiIsIm9uRHJhZ1N0YXJ0IiwiYXV0b0RldGVjdFZlcnRpY2FsR2FwIiwiYXV0b0RldGVjdFN0YXJ0UG9zaXRpb24iLCJjYWNoZWRTb3J0ZWREcmFnZ2FibGVzIiwiaW5kZXhPZkFjdGl2ZURyYWdnYWJsZSIsInByZXZEcmFnZ2FibGUiLCJuZXh0RHJhZ2dhYmxlIiwiY3VycmVudFBvc2l0aW9uIiwiY3VycmVudE9yZGVyIiwiZHJhZ2dhYmxlTmV3UG9zaXRpb24iLCJjdXJyZW50RHJhZ2dhYmxlIiwiY29tcGFyZSIsImluY2x1ZGVzIiwiYnViYmxpbmciLCJnYXBWYWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBQUE7TUFDcUJBO0VBQ25CO0VBQ0Y7RUFDQTtFQUNBO0VBQ0E7RUFDRSxFQUFZQyxTQUFBQSxLQUFBQSxDQUFBQSxDQUFaLEVBQWVDLENBQWYsRUFBa0I7RUFBQSxJQUFBLGVBQUEsQ0FBQSxJQUFBLEVBQUEsS0FBQSxDQUFBLENBQUE7O0VBQ2hCLElBQUtELElBQUFBLENBQUFBLENBQUwsR0FBU0EsQ0FBVCxDQUFBO0VBQ0EsSUFBS0MsSUFBQUEsQ0FBQUEsQ0FBTCxHQUFTQSxDQUFULENBQUE7RUFDRCxHQUFBOzs7O0VBRUQsSUFBQSxLQUFBLEVBQUEsU0FBQSxHQUFBLENBQUlDLENBQUosRUFBTztFQUNMLE1BQUEsT0FBTyxJQUFJSCxLQUFKLENBQVUsSUFBS0MsQ0FBQUEsQ0FBTCxHQUFTRSxDQUFDLENBQUNGLENBQXJCLEVBQXdCLEtBQUtDLENBQUwsR0FBU0MsQ0FBQyxDQUFDRCxDQUFuQyxDQUFQLENBQUE7RUFDRCxLQUFB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TUFBTSxDQUFDLElBQUksTUFBTSxDQUFDLGVBQWUsSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7RUFDMUUsSUFBSSxJQUFJLGFBQWEsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsU0FBUyxLQUFLLFlBQVksQ0FBQztFQUM3RCxJQUFJLElBQUksV0FBVyxHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsSUFBSSxFQUFFLENBQUMsQ0FBQztFQUNoRSxJQUFJLElBQUksbUJBQW1CLEdBQUcsQ0FBQyxHQUFHLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0VBQzVFLElBQUksSUFBSSxxQkFBcUIsR0FBRyxDQUFDLEdBQUcsSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDLENBQUM7RUFDOUUsSUFBSSxJQUFJLFVBQVUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLGNBQWMsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUM7RUFDN0QsSUFBSSxJQUFJLFlBQVksR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLGNBQWMsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUM7RUFDakUsSUFBSSxJQUFJLGFBQWEsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLGNBQWMsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUM7RUFDbkUsSUFBSSxJQUFJLFdBQVcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLGNBQWMsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7RUFDL0QsSUFBSSxJQUFJLFNBQVMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLGNBQWMsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUM7RUFDaEUsSUFBSSxJQUFJLFdBQVcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLGNBQWMsQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztFQUNw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
