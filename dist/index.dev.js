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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZGV2LmpzIiwic291cmNlcyI6WyIuLi9zcmMvZ2VvbWV0cnkvcG9pbnQuanMiLCIuLi9zcmMvZ2VvbWV0cnkvcmVjdGFuZ2xlLmpzIiwiLi4vc3JjL3V0aWxzL2dldC1kZWZhdWx0LWNvbnRhaW5lci5qcyIsIi4uL3NyYy9ldmVudEVtaXR0ZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvZGVzYW5kcm8tZ2V0LXN0eWxlLXByb3BlcnR5L2dldC1zdHlsZS1wcm9wZXJ0eS5qcyIsIi4uL3NyYy9nZW9tZXRyeS9kaXN0YW5jZXMuanMiLCIuLi9zcmMvZ2VvbWV0cnkvYm91bmRzLmpzIiwiLi4vc3JjL2dlb21ldHJ5L2FuZ2xlcy5qcyIsIi4uL3NyYy9ib3VuZGluZy5qcyIsIi4uL3NyYy91dGlscy9yZW1vdmUtYXJyYXktaXRlbS5qcyIsIi4uL3NyYy91dGlscy9yYW5nZS5qcyIsIi4uL3NyYy9wb3NpdGlvbmluZy5qcyIsIi4uL3NyYy90YXJnZXQuanMiLCIuLi9zcmMvc2NvcGUuanMiLCIuLi9zcmMvdXRpbHMvaXMtc3VwcG9ydC1wYXNzaXZlLWV2ZW50cy5qcyIsIi4uL3NyYy91dGlscy90aHJvdHRsZS5qcyIsIi4uL3NyYy9kcmFnZ2FibGUuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL3V0aWxzL3Jlc2l6ZU9ic2VydmVycy5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvYWxnb3JpdGhtcy9oYXNBY3RpdmVPYnNlcnZhdGlvbnMuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL2FsZ29yaXRobXMvaGFzU2tpcHBlZE9ic2VydmF0aW9ucy5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvYWxnb3JpdGhtcy9kZWxpdmVyUmVzaXplTG9vcEVycm9yLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BqdWdnbGUvcmVzaXplLW9ic2VydmVyL2xpYi9SZXNpemVPYnNlcnZlckJveE9wdGlvbnMuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL3V0aWxzL2ZyZWV6ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvUmVzaXplT2JzZXJ2ZXJTaXplLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BqdWdnbGUvcmVzaXplLW9ic2VydmVyL2xpYi9ET01SZWN0UmVhZE9ubHkuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL3V0aWxzL2VsZW1lbnQuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL3V0aWxzL2dsb2JhbC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvYWxnb3JpdGhtcy9jYWxjdWxhdGVCb3hTaXplLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BqdWdnbGUvcmVzaXplLW9ic2VydmVyL2xpYi9SZXNpemVPYnNlcnZlckVudHJ5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BqdWdnbGUvcmVzaXplLW9ic2VydmVyL2xpYi9hbGdvcml0aG1zL2NhbGN1bGF0ZURlcHRoRm9yTm9kZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvYWxnb3JpdGhtcy9icm9hZGNhc3RBY3RpdmVPYnNlcnZhdGlvbnMuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL2FsZ29yaXRobXMvZ2F0aGVyQWN0aXZlT2JzZXJ2YXRpb25zQXREZXB0aC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvdXRpbHMvcHJvY2Vzcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvdXRpbHMvcXVldWVNaWNyb1Rhc2suanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL3V0aWxzL3F1ZXVlUmVzaXplT2JzZXJ2ZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL3V0aWxzL3NjaGVkdWxlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvUmVzaXplT2JzZXJ2YXRpb24uanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL1Jlc2l6ZU9ic2VydmVyRGV0YWlsLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BqdWdnbGUvcmVzaXplLW9ic2VydmVyL2xpYi9SZXNpemVPYnNlcnZlckNvbnRyb2xsZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL1Jlc2l6ZU9ic2VydmVyLmpzIiwiLi4vc3JjL3V0aWxzL2RlYm91bmNlLmpzIiwiLi4vc3JjL2xpc3QuanMiLCIuLi9zcmMvYnViYmxpbmdMaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKiBDbGFzcyByZXByZXNlbnRpbmcgYSBwb2ludC4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvaW50IHtcbiAgLyoqXG4gICogQ3JlYXRlIGEgcG9pbnQuXG4gICogQHBhcmFtIHtudW1iZXJ9IHggLSBUaGUgeCB2YWx1ZS5cbiAgKiBAcGFyYW0ge251bWJlcn0geSAtIFRoZSB5IHZhbHVlLlxuICAqL1xuICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgdGhpcy54ID0geFxuICAgIHRoaXMueSA9IHlcbiAgfVxuXG4gIGFkZChwKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnggKyBwLngsIHRoaXMueSArIHAueSlcbiAgfVxuXG4gIHN1YihwKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnggLSBwLngsIHRoaXMueSAtIHAueSlcbiAgfVxuXG4gIG11bHQoaykge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54ICogaywgdGhpcy55ICogaylcbiAgfVxuXG4gIG5lZ2F0aXZlKCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQoLXRoaXMueCwgLXRoaXMueSlcbiAgfVxuXG4gIGNvbXBhcmUocCkge1xuICAgIHJldHVybiAodGhpcy54ID09PSBwLnggJiYgdGhpcy55ID09PSBwLnkpXG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCwgdGhpcy55KVxuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIGB7eD0ke3RoaXMueH0seT0ke3RoaXMueX1gXG4gIH1cblxuICBzdGF0aWMgZWxlbWVudE9mZnNldChlbGVtZW50LCBwYXJlbnQpIHtcbiAgICBwYXJlbnQgPSBwYXJlbnQgfHwgZWxlbWVudC5wYXJlbnROb2RlXG4gICAgY29uc3QgZWxlbWVudFJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgY29uc3QgcGFyZW50UmVjdCA9IHBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIHJldHVybiBuZXcgUG9pbnQoXG4gICAgICBlbGVtZW50UmVjdC5sZWZ0IC0gcGFyZW50UmVjdC5sZWZ0LFxuICAgICAgZWxlbWVudFJlY3QudG9wIC0gcGFyZW50UmVjdC50b3BcbiAgICApXG4gIH1cblxuICBzdGF0aWMgZWxlbWVudFNpemUoZWxlbWVudCkge1xuICAgIGNvbnN0IGVsZW1lbnRSZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIHJldHVybiBuZXcgUG9pbnQoXG4gICAgICBlbGVtZW50UmVjdC53aWR0aCxcbiAgICAgIGVsZW1lbnRSZWN0LmhlaWdodFxuICAgIClcbiAgfVxufVxuIiwiaW1wb3J0IFBvaW50IGZyb20gJy4vcG9pbnQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY3RhbmdsZSB7XG4gIGNvbnN0cnVjdG9yKHBvc2l0aW9uLCBzaXplKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgdGhpcy5zaXplID0gc2l6ZVxuICB9XG5cbiAgZ2V0UDEoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25cbiAgfVxuXG4gIGdldFAyKCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHRoaXMucG9zaXRpb24ueSlcbiAgfVxuXG4gIGdldFAzKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLnNpemUpXG4gIH1cblxuICBnZXRQNCgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnkpXG4gIH1cblxuICBnZXRDZW50ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb24uYWRkKHRoaXMuc2l6ZS5tdWx0KDAuNSkpXG4gIH1cblxuICBvcihyZWN0KSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBuZXcgUG9pbnQoTWF0aC5taW4odGhpcy5wb3NpdGlvbi54LCByZWN0LnBvc2l0aW9uLngpLCBNYXRoLm1pbih0aGlzLnBvc2l0aW9uLnksIHJlY3QucG9zaXRpb24ueSkpXG4gICAgY29uc3Qgc2l6ZSA9IChuZXcgUG9pbnQoTWF0aC5tYXgodGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHJlY3QucG9zaXRpb24ueCArIHJlY3Quc2l6ZS54KSwgTWF0aC5tYXgodGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnksIHJlY3QucG9zaXRpb24ueSArIHJlY3Quc2l6ZS55KSkpLnN1Yihwb3NpdGlvbilcbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZShwb3NpdGlvbiwgc2l6ZSlcbiAgfVxuXG4gIGFuZChyZWN0KSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBuZXcgUG9pbnQoTWF0aC5tYXgodGhpcy5wb3NpdGlvbi54LCByZWN0LnBvc2l0aW9uLngpLCBNYXRoLm1heCh0aGlzLnBvc2l0aW9uLnksIHJlY3QucG9zaXRpb24ueSkpXG4gICAgY29uc3Qgc2l6ZSA9IChuZXcgUG9pbnQoTWF0aC5taW4odGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHJlY3QucG9zaXRpb24ueCArIHJlY3Quc2l6ZS54KSwgTWF0aC5taW4odGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnksIHJlY3QucG9zaXRpb24ueSArIHJlY3Quc2l6ZS55KSkpLnN1Yihwb3NpdGlvbilcbiAgICBpZiAoc2l6ZS54IDw9IDAgfHwgc2l6ZS55IDw9IDApIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHBvc2l0aW9uLCBzaXplKVxuICB9XG5cbiAgaW5jbHVkZVBvaW50KHApIHtcbiAgICByZXR1cm4gISh0aGlzLnBvc2l0aW9uLnggPiBwLnggfHwgdGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLnggPCBwLnggfHwgdGhpcy5wb3NpdGlvbi55ID4gcC55IHx8IHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55IDwgcC55KVxuICB9XG5cbiAgaW5jbHVkZVJlY3RhbmdsZShyZWN0YW5nbGUpIHtcbiAgICByZXR1cm4gdGhpcy5pbmNsdWRlUG9pbnQocmVjdGFuZ2xlLnBvc2l0aW9uKSAmJiB0aGlzLmluY2x1ZGVQb2ludChyZWN0YW5nbGUuZ2V0UDMoKSlcbiAgfVxuXG4gIG1vdmVUb0JvdW5kKHJlY3QsIGF4aXMpIHtcbiAgICBsZXQgc2VsQXhpcywgY3Jvc3NSZWN0YW5nbGVcbiAgICBpZiAoYXhpcykge1xuICAgICAgc2VsQXhpcyA9IGF4aXNcbiAgICB9IGVsc2Uge1xuICAgICAgY3Jvc3NSZWN0YW5nbGUgPSB0aGlzLmFuZChyZWN0KVxuICAgICAgaWYgKCFjcm9zc1JlY3RhbmdsZSkge1xuICAgICAgICByZXR1cm4gcmVjdFxuICAgICAgfVxuICAgICAgc2VsQXhpcyA9IGNyb3NzUmVjdGFuZ2xlLnNpemUueCA+IGNyb3NzUmVjdGFuZ2xlLnNpemUueSA/ICd5JyA6ICd4J1xuICAgIH1cbiAgICBjb25zdCB0aGlzQ2VudGVyID0gdGhpcy5nZXRDZW50ZXIoKVxuICAgIGNvbnN0IHJlY3RDZW50ZXIgPSByZWN0LmdldENlbnRlcigpXG4gICAgY29uc3Qgc2lnbiA9IHRoaXNDZW50ZXJbc2VsQXhpc10gPiByZWN0Q2VudGVyW3NlbEF4aXNdID8gLTEgOiAxXG4gICAgY29uc3Qgb2Zmc2V0ID0gc2lnbiA+IDAgPyB0aGlzLnBvc2l0aW9uW3NlbEF4aXNdICsgdGhpcy5zaXplW3NlbEF4aXNdIC0gcmVjdC5wb3NpdGlvbltzZWxBeGlzXSA6IHRoaXMucG9zaXRpb25bc2VsQXhpc10gLSAocmVjdC5wb3NpdGlvbltzZWxBeGlzXSArIHJlY3Quc2l6ZVtzZWxBeGlzXSlcbiAgICByZWN0LnBvc2l0aW9uW3NlbEF4aXNdID0gcmVjdC5wb3NpdGlvbltzZWxBeGlzXSArIG9mZnNldFxuICAgIHJldHVybiByZWN0XG4gIH1cblxuICBnZXRTcXVhcmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZS54ICogdGhpcy5zaXplLnlcbiAgfVxuXG4gIHN0eWxlQXBwbHkoZWwpIHtcbiAgICBlbCA9IGVsIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2luZCcpXG4gICAgZWwuc3R5bGUubGVmdCA9IHRoaXMucG9zaXRpb24ueCArICdweCdcbiAgICBlbC5zdHlsZS50b3AgPSB0aGlzLnBvc2l0aW9uLnkgKyAncHgnXG4gICAgZWwuc3R5bGUud2lkdGggPSB0aGlzLnNpemUueCArICdweCdcbiAgICBlbC5zdHlsZS5oZWlnaHQgPSB0aGlzLnNpemUueSArICdweCdcbiAgfVxuXG4gIGdyb3d0aChzaXplKSB7XG4gICAgdGhpcy5zaXplID0gdGhpcy5zaXplLmFkZChzaXplKVxuICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uLmFkZChzaXplLm11bHQoLTAuNSkpXG4gIH1cblxuICBnZXRNaW5TaWRlKCkge1xuICAgIHJldHVybiBNYXRoLm1pbih0aGlzLnNpemUueCwgdGhpcy5zaXplLnkpXG4gIH1cblxuICBzdGF0aWMgZnJvbUVsZW1lbnQoZWxlbWVudCwgcGFyZW50PWVsZW1lbnQucGFyZW50Tm9kZSwgaXNDb25zaWRlclRyYW5zbGF0ZT1mYWxzZSkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gUG9pbnQuZWxlbWVudE9mZnNldChlbGVtZW50LCBwYXJlbnQsIGlzQ29uc2lkZXJUcmFuc2xhdGUpXG4gICAgY29uc3Qgc2l6ZSA9IFBvaW50LmVsZW1lbnRTaXplKGVsZW1lbnQpXG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUocG9zaXRpb24sIHNpemUpXG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldERlZmF1bHRDb250YWluZXIoZWxlbWVudCkge1xuICBsZXQgY29udGFpbmVyID0gZWxlbWVudC5wYXJlbnROb2RlXG4gIHdoaWxlIChjb250YWluZXIucGFyZW50Tm9kZSAmJiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShjb250YWluZXIpWydwb3NpdGlvbiddID09PSAnc3RhdGljJyAmJiBjb250YWluZXIudGFnTmFtZSAhPT0gJ0JPRFknKSB7XG4gICAgY29udGFpbmVyID0gY29udGFpbmVyLnBhcmVudE5vZGVcbiAgfVxuICByZXR1cm4gY29udGFpbmVyXG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAob3B0aW9ucyA9IHt9KSB7XG4gICAgdGhpcy5ldmVudHMgPSB7fVxuXG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5vbikge1xuICAgICAgZm9yIChjb25zdCBbZXZlbnROYW1lLCBmbl0gb2YgT2JqZWN0LmVudHJpZXMob3B0aW9ucy5vbikpIHtcbiAgICAgICAgdGhpcy5vbihldmVudE5hbWUsIGZuKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGVtaXQoZXZlbnROYW1lKSB7XG4gICAgdGhpcy5pbnRlcnJ1cHRlZCA9IGZhbHNlXG4gICAgY29uc3QgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKVxuXG4gICAgaWYgKCF0aGlzLmV2ZW50c1tldmVudE5hbWVdKSByZXR1cm5cblxuICAgIGZvciAoY29uc3QgZnVuYyBvZiB0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICBmdW5jKC4uLmFyZ3MpXG4gICAgICBpZiAodGhpcy5pbnRlcnJ1cHRlZCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpbnRlcnJ1cHQoKSB7XG4gICAgdGhpcy5pbnRlcnJ1cHRlZCA9IHRydWVcbiAgfVxuXG4gIG9uKGV2ZW50TmFtZSwgZm4pIHtcbiAgICBpZiAoIXRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSBbXVxuICAgIH1cblxuICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0ucHVzaChmbilcbiAgfVxuXG4gIHByZXBlbmRPbihldmVudE5hbWUsIGZuKSB7XG4gICAgaWYgKCF0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdID0gW11cbiAgICB9XG5cbiAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLnVuc2hpZnQoZm4pXG4gIH1cblxuICB1bnN1YnNjcmliZShldmVudE5hbWUsIGZuKSB7XG4gICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5ldmVudHNbZXZlbnROYW1lXS5pbmRleE9mKGZuKVxuICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5zcGxpY2UoaW5kZXgsIDEpXG4gICAgfVxuICB9XG5cbiAgcmVzZXRFbWl0dGVyICgpIHtcbiAgICB0aGlzLmV2ZW50cyA9IHt9XG4gIH1cblxuICByZXNldE9uKGV2ZW50TmFtZSkge1xuICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSBbXVxuICB9XG59XG4iLCIvKiFcbiAqIGdldFN0eWxlUHJvcGVydHkgdjEuMC40XG4gKiBvcmlnaW5hbCBieSBrYW5nYXhcbiAqIGh0dHA6Ly9wZXJmZWN0aW9ua2lsbHMuY29tL2ZlYXR1cmUtdGVzdGluZy1jc3MtcHJvcGVydGllcy9cbiAqIE1JVCBsaWNlbnNlXG4gKi9cblxuLypqc2hpbnQgYnJvd3NlcjogdHJ1ZSwgc3RyaWN0OiB0cnVlLCB1bmRlZjogdHJ1ZSAqL1xuLypnbG9iYWwgZGVmaW5lOiBmYWxzZSwgZXhwb3J0czogZmFsc2UsIG1vZHVsZTogZmFsc2UgKi9cblxuKCBmdW5jdGlvbiggd2luZG93ICkge1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBwcmVmaXhlcyA9ICdXZWJraXQgTW96IG1zIE1zIE8nLnNwbGl0KCcgJyk7XG52YXIgZG9jRWxlbVN0eWxlID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlO1xuXG5mdW5jdGlvbiBnZXRTdHlsZVByb3BlcnR5KCBwcm9wTmFtZSApIHtcbiAgaWYgKCAhcHJvcE5hbWUgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gdGVzdCBzdGFuZGFyZCBwcm9wZXJ0eSBmaXJzdFxuICBpZiAoIHR5cGVvZiBkb2NFbGVtU3R5bGVbIHByb3BOYW1lIF0gPT09ICdzdHJpbmcnICkge1xuICAgIHJldHVybiBwcm9wTmFtZTtcbiAgfVxuXG4gIC8vIGNhcGl0YWxpemVcbiAgcHJvcE5hbWUgPSBwcm9wTmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHByb3BOYW1lLnNsaWNlKDEpO1xuXG4gIC8vIHRlc3QgdmVuZG9yIHNwZWNpZmljIHByb3BlcnRpZXNcbiAgdmFyIHByZWZpeGVkO1xuICBmb3IgKCB2YXIgaT0wLCBsZW4gPSBwcmVmaXhlcy5sZW5ndGg7IGkgPCBsZW47IGkrKyApIHtcbiAgICBwcmVmaXhlZCA9IHByZWZpeGVzW2ldICsgcHJvcE5hbWU7XG4gICAgaWYgKCB0eXBlb2YgZG9jRWxlbVN0eWxlWyBwcmVmaXhlZCBdID09PSAnc3RyaW5nJyApIHtcbiAgICAgIHJldHVybiBwcmVmaXhlZDtcbiAgICB9XG4gIH1cbn1cblxuLy8gdHJhbnNwb3J0XG5pZiAoIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcbiAgLy8gQU1EXG4gIGRlZmluZSggZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGdldFN0eWxlUHJvcGVydHk7XG4gIH0pO1xufSBlbHNlIGlmICggdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICkge1xuICAvLyBDb21tb25KUyBmb3IgQ29tcG9uZW50XG4gIG1vZHVsZS5leHBvcnRzID0gZ2V0U3R5bGVQcm9wZXJ0eTtcbn0gZWxzZSB7XG4gIC8vIGJyb3dzZXIgZ2xvYmFsXG4gIHdpbmRvdy5nZXRTdHlsZVByb3BlcnR5ID0gZ2V0U3R5bGVQcm9wZXJ0eTtcbn1cblxufSkoIHdpbmRvdyApO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldERpc3RhbmNlKHAxLCBwMikge1xuICBjb25zdCBkeCA9IHAxLnggLSBwMi54LCBkeSA9IHAxLnkgLSBwMi55XG4gIHJldHVybiBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRYRGlmZmVyZW5jZShwMSwgcDIpIHtcbiAgcmV0dXJuIE1hdGguYWJzKHAxLnggLSBwMi54KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0WURpZmZlcmVuY2UocDEsIHAyKSB7XG4gIHJldHVybiBNYXRoLmFicyhwMS55IC0gcDIueSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3Rvcnkob3B0aW9ucykge1xuICByZXR1cm4gKHAxLCBwMikgPT4ge1xuICAgIHJldHVybiBNYXRoLnNxcnQoXG4gICAgICBNYXRoLnBvdyhvcHRpb25zLnggKiBNYXRoLmFicyhwMS54IC0gcDIueCksIDIpICtcbiAgICAgIE1hdGgucG93KG9wdGlvbnMueSAqIE1hdGguYWJzKHAxLnkgLSBwMi55KSwgMilcbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluZGV4T2ZOZWFyZXN0UG9pbnQoYXJyLCB2YWwsIHJhZGl1cywgZ2V0RGlzdGFuY2VGdW5jPWdldERpc3RhbmNlKSB7XG4gIGxldCBzaXplLCBpbmRleCA9IDAsIGksIHRlbXBcbiAgaWYgKGFyci5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gLTFcbiAgfVxuICBzaXplID0gZ2V0RGlzdGFuY2VGdW5jKGFyclswXSwgdmFsKVxuICBmb3IgKGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgdGVtcCA9IGdldERpc3RhbmNlRnVuYyhhcnJbaV0sIHZhbClcbiAgICBpZiAodGVtcCA8IHNpemUpIHtcbiAgICAgIHNpemUgPSB0ZW1wXG4gICAgICBpbmRleCA9IGlcbiAgICB9XG4gIH1cbiAgaWYgKHJhZGl1cyA+PSAwICYmIHNpemUgPiByYWRpdXMpIHtcbiAgICByZXR1cm4gLTFcbiAgfVxuICByZXR1cm4gaW5kZXhcbn1cbiIsImltcG9ydCBQb2ludCBmcm9tICcuL3BvaW50J1xuaW1wb3J0IHsgZ2V0RGlzdGFuY2UgfSBmcm9tICcuL2Rpc3RhbmNlcydcblxuZXhwb3J0IGZ1bmN0aW9uIGNsYW1wKG1pbiwgbWF4LCB2YWwpIHtcbiAgcmV0dXJuIE1hdGgubWF4KG1pbiwgTWF0aC5taW4obWF4LCB2YWwpKVxufVxuXG4vL1JldHVybiBjcm9zc2luZyBwb2ludCBvZiB0d28gbGluZXNcbmV4cG9ydCBmdW5jdGlvbiBkaXJlY3RDcm9zc2luZyhMMVAxLCBMMVAyLCBMMlAxLCBMMlAyKSB7XG4gIGxldCB0ZW1wLCBrMSwgazIsIGIxLCBiMiwgeCwgeVxuICBpZiAoTDJQMS54ID09PSBMMlAyLngpIHtcbiAgICB0ZW1wID0gTDJQMVxuICAgIEwyUDEgPSBMMVAxXG4gICAgTDFQMSA9IHRlbXBcbiAgICB0ZW1wID0gTDJQMlxuICAgIEwyUDIgPSBMMVAyXG4gICAgTDFQMiA9IHRlbXBcbiAgfVxuICBpZiAoTDFQMS54ID09PSBMMVAyLngpIHtcbiAgICBrMiA9IChMMlAyLnkgLSBMMlAxLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICBiMiA9IChMMlAyLnggKiBMMlAxLnkgLSBMMlAxLnggKiBMMlAyLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICB4ID0gTDFQMS54XG4gICAgeSA9IHggKiBrMiArIGIyXG4gICAgcmV0dXJuIG5ldyBQb2ludCh4LCB5KVxuICB9IGVsc2Uge1xuICAgIGsxID0gKEwxUDIueSAtIEwxUDEueSkgLyAoTDFQMi54IC0gTDFQMS54KVxuICAgIGIxID0gKEwxUDIueCAqIEwxUDEueSAtIEwxUDEueCAqIEwxUDIueSkgLyAoTDFQMi54IC0gTDFQMS54KVxuICAgIGsyID0gKEwyUDIueSAtIEwyUDEueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgIGIyID0gKEwyUDIueCAqIEwyUDEueSAtIEwyUDEueCAqIEwyUDIueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgIHggPSAoYjEgLSBiMikgLyAoazIgLSBrMSlcbiAgICB5ID0geCAqIGsxICsgYjFcbiAgICByZXR1cm4gbmV3IFBvaW50KHgsIHkpXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kVG9TZWdtZW50KExQMSwgTFAyLCBQKSB7XG4gIGxldCB4LCB5XG4gIHggPSBjbGFtcChNYXRoLm1pbihMUDEueCwgTFAyLngpLCBNYXRoLm1heChMUDEueCwgTFAyLngpLCBQLngpXG4gIGlmICh4ICE9PSBQLngpIHtcbiAgICB5ID0gKHggPT09IExQMS54KSA/IExQMS55IDogTFAyLnlcbiAgICBQID0gbmV3IFBvaW50KHgsIHkpXG4gIH1cblxuICB5ID0gY2xhbXAoTWF0aC5taW4oTFAxLnksIExQMi55KSwgTWF0aC5tYXgoTFAxLnksIExQMi55KSwgUC55KVxuICBpZiAoeSAhPT0gUC55KSB7XG4gICAgeCA9ICh5ID09PSBMUDEueSkgPyBMUDEueCA6IExQMi54XG4gICAgUCA9IG5ldyBQb2ludCh4LCB5KVxuICB9XG5cbiAgcmV0dXJuIFBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kVG9MaW5lKEEsIEIsIFApIHtcbiAgY29uc3QgQVAgPSBuZXcgUG9pbnQoUC54IC0gQS54LCBQLnkgLSBBLnkpLFxuICAgIEFCID0gbmV3IFBvaW50KEIueCAtIEEueCwgQi55IC0gQS55KSxcbiAgICBhYjIgPSBBQi54ICogQUIueCArIEFCLnkgKiBBQi55LFxuICAgIGFwX2FiID0gQVAueCAqIEFCLnggKyBBUC55ICogQUIueSxcbiAgICB0ID0gYXBfYWIgLyBhYjJcbiAgcmV0dXJuIG5ldyBQb2ludChBLnggKyBBQi54ICogdCwgQS55ICsgQUIueSAqIHQpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb2ludE9uTGluZShMUDEsIExQMiwgcGVyY2VudCkge1xuICBjb25zdCBkeCA9IExQMi54IC0gTFAxLngsIGR5ID0gTFAyLnkgLSBMUDEueVxuICByZXR1cm4gbmV3IFBvaW50KExQMS54ICsgcGVyY2VudCAqIGR4LCBMUDEueSArIHBlcmNlbnQgKiBkeSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBvaW50T25MaW5lQnlMZW5naHQoTFAxLCBMUDIsIGxlbmdodCkge1xuICBjb25zdCBkeCA9IExQMi54IC0gTFAxLnhcbiAgY29uc3QgZHkgPSBMUDIueSAtIExQMS55XG4gIGNvbnN0IHBlcmNlbnQgPSBsZW5naHQgLyBnZXREaXN0YW5jZShMUDEsIExQMilcbiAgcmV0dXJuIG5ldyBQb2ludChMUDEueCArIHBlcmNlbnQgKiBkeCwgTFAxLnkgKyBwZXJjZW50ICogZHkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRQb2ludFRvQm91bmRQb2ludHMoYm91bmRwb2ludHMsIHBvaW50LCBpc1JpZ2h0KSB7XG4gIGNvbnN0IHJlc3VsdCA9IGJvdW5kcG9pbnRzLmZpbHRlcigoYlBvaW50KSA9PiB7XG4gICAgcmV0dXJuIGJQb2ludC55ID4gcG9pbnQueSB8fCAoaXNSaWdodCA/IGJQb2ludC54IDwgcG9pbnQueCA6IGJQb2ludC54ID4gcG9pbnQueClcbiAgfSlcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChwb2ludC55IDwgcmVzdWx0W2ldLnkpIHtcbiAgICAgIHJlc3VsdC5zcGxpY2UoaSwgMCwgcG9pbnQpXG4gICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxuICB9XG4gIHJlc3VsdC5wdXNoKHBvaW50KVxuICByZXR1cm4gcmVzdWx0XG59XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9wb2ludCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFuZ2xlRGlmZihhbHBoYSwgYmV0YSkge1xuICBjb25zdCBtaW5BbmdsZSA9IE1hdGgubWluKGFscGhhLCBiZXRhKVxuICBjb25zdCBtYXhBbmdsZSA9ICBNYXRoLm1heChhbHBoYSwgYmV0YSlcbiAgcmV0dXJuIE1hdGgubWluKG1heEFuZ2xlIC0gbWluQW5nbGUsIG1pbkFuZ2xlICsgTWF0aC5QSSoyIC0gbWF4QW5nbGUpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbmdsZShwMSwgcDIpIHtcbiAgY29uc3QgZGlmZiA9IHAyLnN1YihwMSlcbiAgcmV0dXJuIG5vcm1hbGl6ZUFuZ2xlKE1hdGguYXRhbjIoZGlmZi55LCBkaWZmLngpKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9SYWRpYW4oYW5nbGUpIHtcbiAgcmV0dXJuICgoYW5nbGUgJSAzNjApICogTWF0aC5QSSAvIDE4MClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvRGVncmVlKGFuZ2xlKSB7XG4gIHJldHVybiAoYW5nbGUgKiAxODAgLyBNYXRoLlBJKSAlIDM2MFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRBbmdsZShtaW4sIG1heCwgdmFsKSB7XG4gIGxldCBkbWluLCBkbWF4XG4gIGlmIChtaW4gPCBtYXggJiYgdmFsID4gbWluICYmIHZhbCA8IG1heCkge1xuICAgIHJldHVybiB2YWxcbiAgfSBlbHNlIGlmIChtYXggPCBtaW4gJiYgKHZhbCA8IG1heCB8fCB2YWwgPiBtaW4pKSB7XG4gICAgcmV0dXJuIHZhbFxuICB9IGVsc2Uge1xuICAgIGRtaW4gPSBnZXRBbmdsZURpZmYobWluLCB2YWwpXG4gICAgZG1heCA9IGdldEFuZ2xlRGlmZihtYXgsIHZhbClcbiAgICBpZiAoZG1pbiA8IGRtYXgpIHtcbiAgICAgIHJldHVybiBtaW5cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG1heFxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmVhcmVzdEFuZ2xlKGFyciwgYW5nbGUpIHtcbiAgbGV0IGksIHRlbXAsIGRpZmYgPSBNYXRoLlBJICogMiwgdmFsdWVcbiAgZm9yIChpID0gMDsgaSA8IGFyci5sZW5ndGg7aSsrKSB7XG4gICAgdGVtcCA9IGdldEFuZ2xlRGlmZihhcnJbaV0sIGFuZ2xlKVxuICAgIGlmIChkaWZmIDwgdGVtcCkge1xuICAgICAgZGlmZiA9IHRlbXBcbiAgICAgIHZhbHVlID0gYXJyW2ldXG4gICAgfVxuICB9XG4gIHJldHVybiB2YWx1ZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplQW5nbGUodmFsKSB7XG4gIHdoaWxlICh2YWwgPCAwKSB7XG4gICAgdmFsICs9IDIgKiBNYXRoLlBJXG4gIH1cbiAgd2hpbGUgKHZhbCA+IDIgKiBNYXRoLlBJKSB7XG4gICAgdmFsIC09IDIgKiBNYXRoLlBJXG4gIH1cbiAgcmV0dXJuIHZhbFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKGFuZ2xlLCBsZW5ndGgsIGNlbnRlcikge1xuICBjZW50ZXIgPSBjZW50ZXIgfHwgbmV3IFBvaW50KDAsIDApXG4gIHJldHVybiBjZW50ZXIuYWRkKG5ldyBQb2ludChsZW5ndGggKiBNYXRoLmNvcyhhbmdsZSksIGxlbmd0aCAqIE1hdGguc2luKGFuZ2xlKSkpXG59XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9nZW9tZXRyeS9wb2ludCdcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSAnLi9nZW9tZXRyeS9yZWN0YW5nbGUnXG5pbXBvcnQge1xuICBnZXRQb2ludE9uTGluZUJ5TGVuZ2h0LFxuICBkaXJlY3RDcm9zc2luZyxcbiAgYm91bmRUb0xpbmVcbn0gZnJvbSAnLi9nZW9tZXRyeS9ib3VuZHMnXG5cbmltcG9ydCB7XG4gIGdldEFuZ2xlLFxuICBub3JtYWxpemVBbmdsZSxcbiAgYm91bmRBbmdsZSxcbiAgZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtXG59IGZyb20gJy4vZ2VvbWV0cnkvYW5nbGVzJ1xuXG5leHBvcnQgY2xhc3MgQm91bmQge1xuICBjb25zdHJ1Y3RvciAoKSB7fVxuXG4gIGJvdW5kKHBvaW50LCBfc2l6ZSkge1xuICAgIHJldHVybiBwb2ludFxuICB9XG5cbiAgcmVmcmVzaCAoKSB7fVxuXG4gIHN0YXRpYyBib3VuZGluZygpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyB0aGlzKC4uLmFyZ3VtZW50cylcbiAgICByZXR1cm4gaW5zdGFuY2UuYm91bmQuYmluZChpbnN0YW5jZSlcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb1JlY3RhbmdsZSBleHRlbmRzIEJvdW5kIHtcbiAgY29uc3RydWN0b3IocmVjdGFuZ2xlKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMucmVjdGFuZ2xlID0gcmVjdGFuZ2xlXG4gIH1cblxuICBib3VuZChwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IGNhbGNQb2ludCA9IHBvaW50LmNsb25lKClcbiAgICBjb25zdCByZWN0UDIgPSB0aGlzLnJlY3RhbmdsZS5nZXRQMygpXG5cbiAgICBpZiAodGhpcy5yZWN0YW5nbGUucG9zaXRpb24ueCA+IGNhbGNQb2ludC54KSB7XG4gICAgICAoY2FsY1BvaW50LnggPSB0aGlzLnJlY3RhbmdsZS5wb3NpdGlvbi54KVxuICAgIH1cbiAgICBpZiAodGhpcy5yZWN0YW5nbGUucG9zaXRpb24ueSA+IGNhbGNQb2ludC55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHRoaXMucmVjdGFuZ2xlLnBvc2l0aW9uLnlcbiAgICB9XG4gICAgaWYgKHJlY3RQMi54IDwgY2FsY1BvaW50LnggKyBzaXplLngpIHtcbiAgICAgIGNhbGNQb2ludC54ID0gcmVjdFAyLnggLSBzaXplLnhcbiAgICB9XG4gICAgaWYgKHJlY3RQMi55IDwgY2FsY1BvaW50LnkgKyBzaXplLnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gcmVjdFAyLnkgLSBzaXplLnlcbiAgICB9XG5cbiAgICByZXR1cm4gY2FsY1BvaW50XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9FbGVtZW50IGV4dGVuZHMgQm91bmRUb1JlY3RhbmdsZSB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbnRhaW5lcikge1xuICAgIHN1cGVyKFJlY3RhbmdsZS5mcm9tRWxlbWVudChlbGVtZW50LCBjb250YWluZXIpKVxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lclxuICB9XG5cbiAgcmVmcmVzaCAoKSB7XG4gICAgdGhpcy5yZWN0YW5nbGUgPSBSZWN0YW5nbGUuZnJvbUVsZW1lbnQodGhpcy5lbGVtZW50LCB0aGlzLmNvbnRhaW5lcilcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb0xpbmVYIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3Rvcih4LCBzdGFydFksIGVuZFkpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy54ID0geFxuICAgIHRoaXMuc3RhcnRZID0gc3RhcnRZXG4gICAgdGhpcy5lbmRZID0gZW5kWVxuICB9XG5cbiAgYm91bmQocG9pbnQsIHNpemUpIHtcbiAgICBjb25zdCBjYWxjUG9pbnQgPSBwb2ludC5jbG9uZSgpXG5cbiAgICBjYWxjUG9pbnQueCA9IHRoaXMueFxuICAgIGlmICh0aGlzLnN0YXJ0WSA+IGNhbGNQb2ludC55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHRoaXMuc3RhcnRZXG4gICAgfVxuICAgIGlmICh0aGlzLmVuZFkgPCBjYWxjUG9pbnQueSArIHNpemUueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSB0aGlzLmVuZFkgLSBzaXplLnlcbiAgICB9XG5cbiAgICByZXR1cm4gY2FsY1BvaW50XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9MaW5lWSBleHRlbmRzIEJvdW5kIHtcbiAgY29uc3RydWN0b3IoeSwgc3RhcnRYLCBlbmRYKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMueSA9IHlcbiAgICB0aGlzLnN0YXJ0WCA9IHN0YXJ0WFxuICAgIHRoaXMuZW5kWCA9IGVuZFhcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgY2FsY1BvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIGNhbGNQb2ludC55ID0gdGhpcy55XG4gICAgaWYgKHRoaXMuc3RhcnRYID4gY2FsY1BvaW50LngpIHtcbiAgICAgIGNhbGNQb2ludC54ID0gdGhpcy5zdGFydFhcbiAgICB9XG4gICAgaWYgKHRoaXMuZW5kWCA8IGNhbGNQb2ludC54ICsgc2l6ZS54KSB7XG4gICAgICBjYWxjUG9pbnQueCA9IHRoaXMuZW5kWCAtIHNpemUueFxuICAgIH1cbiAgICByZXR1cm4gY2FsY1BvaW50XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9MaW5lIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3RvcihzdGFydFBvaW50LCBlbmRQb2ludCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnN0YXJ0UG9pbnQgPSBzdGFydFBvaW50XG4gICAgdGhpcy5lbmRQb2ludCA9IGVuZFBvaW50XG4gICAgY29uc3QgYWxwaGEgPSBNYXRoLmF0YW4yKGVuZFBvaW50LnkgLSBzdGFydFBvaW50LnksIGVuZFBvaW50LnggLSBzdGFydFBvaW50LngpXG4gICAgY29uc3QgYmV0YSA9IGFscGhhICsgTWF0aC5QSSAvIDJcbiAgICB0aGlzLnNvbWVLID0gMTBcbiAgICB0aGlzLmNvc0JldGEgPSBNYXRoLmNvcyhiZXRhKVxuICAgIHRoaXMuc2luQmV0YSA9IE1hdGguc2luKGJldGEpXG4gIH1cblxuICBib3VuZChwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IHBvaW50MiA9IG5ldyBQb2ludChcbiAgICAgIHBvaW50LnggKyB0aGlzLnNvbWVLICogdGhpcy5jb3NCZXRhLFxuICAgICAgcG9pbnQueSArIHRoaXMuc29tZUsgKiB0aGlzLnNpbkJldGFcbiAgICApXG5cbiAgICBjb25zdCBuZXdFbmRQb2ludCA9IGdldFBvaW50T25MaW5lQnlMZW5naHQodGhpcy5lbmRQb2ludCwgdGhpcy5zdGFydFBvaW50LCBzaXplLngpXG4gICAgY29uc3QgcG9pbnRDcm9zc2luZyA9IGRpcmVjdENyb3NzaW5nKHRoaXMuc3RhcnRQb2ludCwgdGhpcy5lbmRQb2ludCwgcG9pbnQsIHBvaW50MilcblxuICAgIHJldHVybiBib3VuZFRvTGluZSh0aGlzLnN0YXJ0UG9pbnQsIG5ld0VuZFBvaW50LCBwb2ludENyb3NzaW5nKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvQ2lyY2xlIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3RvcihjZW50ZXIsIHJhZGl1cykge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLmNlbnRlciA9IGNlbnRlclxuICAgIHRoaXMucmFkaXVzID0gcmFkaXVzXG4gIH1cblxuICBib3VuZChwb2ludCwgX3NpemUpIHtcbiAgICByZXR1cm4gZ2V0UG9pbnRPbkxpbmVCeUxlbmdodCh0aGlzLmNlbnRlciwgcG9pbnQsIHRoaXMucmFkaXVzKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvQXJjIGV4dGVuZHMgQm91bmRUb0NpcmNsZSB7XG4gIGNvbnN0cnVjdG9yKGNlbnRlciwgcmFkaXVzLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSkge1xuICAgIHN1cGVyKGNlbnRlciwgcmFkaXVzKVxuICAgIHRoaXMuX3N0YXJ0QW5nbGUgPSBzdGFydEFuZ2xlXG4gICAgdGhpcy5fZW5kQW5nbGUgPSBlbmRBbmdsZVxuICB9XG5cbiAgc3RhcnRBbmdsZSgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMuX3N0YXJ0QW5nbGUgPT09ICdmdW5jdGlvbicgPyB0aGlzLl9zdGFydEFuZ2xlKCkgOiB0aGlzLl9zdGFydEFuZ2xlXG4gIH1cblxuICBlbmRBbmdsZSgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMuX2VuZEFuZ2xlID09PSAnZnVuY3Rpb24nID8gdGhpcy5fZW5kQW5nbGUoKSA6IHRoaXMuX2VuZEFuZ2xlXG4gIH1cblxuICBib3VuZChwb2ludCwgX3NpemUpIHtcbiAgICBsZXQgYW5nbGUgPSBnZXRBbmdsZSh0aGlzLmNlbnRlciwgcG9pbnQpXG4gICAgYW5nbGUgPSBub3JtYWxpemVBbmdsZShhbmdsZSlcbiAgICBhbmdsZSA9IGJvdW5kQW5nbGUodGhpcy5zdGFydEFuZ2xlKCksIHRoaXMuZW5kQW5nbGUoKSwgYW5nbGUpXG4gICAgcmV0dXJuIGdldFBvaW50RnJvbVJhZGlhbFN5c3RlbShhbmdsZSwgdGhpcy5yYWRpdXMsIHRoaXMuY2VudGVyKVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhcnJheSwgdmFsKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoYXJyYXlbaV0gPT09IHZhbCkge1xuICAgICAgYXJyYXkuc3BsaWNlKGksIDEpXG4gICAgICBpLS1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycmF5XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByYW5nZShzdGFydCwgc3RvcCwgc3RlcCkge1xuICBjb25zdCByZXN1bHQgPSBbXVxuICBpZiAodHlwZW9mIHN0b3AgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgc3RvcCA9IHN0YXJ0XG4gICAgc3RhcnQgPSAwXG4gIH1cbiAgaWYgKHR5cGVvZiBzdGVwID09PSAndW5kZWZpbmVkJykge1xuICAgIHN0ZXAgPSAxXG4gIH1cbiAgaWYgKChzdGVwID4gMCAmJiBzdGFydCA+PSBzdG9wKSB8fCAoc3RlcCA8IDAgJiYgc3RhcnQgPD0gc3RvcCkpIHtcbiAgICByZXR1cm4gW11cbiAgfVxuICBmb3IgKGxldCBpID0gc3RhcnQ7IHN0ZXAgPiAwID8gaSA8IHN0b3AgOiBpID4gc3RvcDsgaSArPSBzdGVwKSB7XG4gICAgcmVzdWx0LnB1c2goaSlcbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9nZW9tZXRyeS9wb2ludCdcbmltcG9ydCB7IGFkZFBvaW50VG9Cb3VuZFBvaW50cyB9IGZyb20gJy4vZ2VvbWV0cnkvYm91bmRzJ1xuXG5pbXBvcnQge1xuICBpbmRleE9mTmVhcmVzdFBvaW50LFxuICBnZXREaXN0YW5jZVxufSBmcm9tICcuL2dlb21ldHJ5L2Rpc3RhbmNlcydcblxuY2xhc3MgQmFzaWNTdHJhdGVneSB7XG4gIGNvbnN0cnVjdG9yKHJlY3RhbmdsZSwgb3B0aW9ucz17fSkge1xuICAgIHRoaXMucmVjdGFuZ2xlID0gcmVjdGFuZ2xlXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9uc1xuICB9XG5cbiAgZ2V0IGJvdW5kUmVjdCAoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGlzLnJlY3RhbmdsZSA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMucmVjdGFuZ2xlKCkgOiB0aGlzLnJlY3RhbmdsZVxuICB9XG59XG5cbmNsYXNzIE5vdENyb3NzaW5nU3RyYXRlZ3kgZXh0ZW5kcyBCYXNpY1N0cmF0ZWd5IHtcbiAgcG9zaXRpb25pbmcgKHJlY3RhbmdsZUxpc3QsIGluZGV4ZXNPZk5ld3MpIHtcbiAgICBjb25zdCBzdGF0aWNSZWN0YW5nbGVJbmRleGVzID0gcmVjdGFuZ2xlTGlzdC5yZWR1Y2UoKGluZGV4ZXMsIF9yZWN0LCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGluZGV4ZXNPZk5ld3MuaW5kZXhPZihpbmRleCkgPT09IC0xKSB7XG4gICAgICAgIGluZGV4ZXMucHVzaChpbmRleClcbiAgICAgIH1cbiAgICAgIHJldHVybiBpbmRleGVzXG4gICAgfSwgW10pXG5cbiAgICBpbmRleGVzT2ZOZXdzLmZvckVhY2goKGluZGV4KSA9PiB7XG4gICAgICBsZXQgcmVjdCA9IHJlY3RhbmdsZUxpc3RbaW5kZXhdXG4gICAgICBsZXQgcmVtb3ZhYmxlID0gZmFsc2VcblxuICAgICAgc3RhdGljUmVjdGFuZ2xlSW5kZXhlcy5mb3JFYWNoKChpbmRleE9mU3RhdGljKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YXRpY1JlY3QgPSByZWN0YW5nbGVMaXN0W2luZGV4T2ZTdGF0aWNdXG4gICAgICAgIHJlY3QgPSBzdGF0aWNSZWN0Lm1vdmVUb0JvdW5kKHJlY3QpXG4gICAgICB9KVxuXG4gICAgICByZW1vdmFibGUgPSBzdGF0aWNSZWN0YW5nbGVJbmRleGVzLnNvbWUoKGluZGV4T2ZTdGF0aWMpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhdGljUmVjdCA9IHJlY3RhbmdsZUxpc3RbaW5kZXhPZlN0YXRpY11cbiAgICAgICAgcmV0dXJuICAhIXN0YXRpY1JlY3QuYW5kKHJlY3QpXG4gICAgICB9KSB8fCByZWN0LmFuZCh0aGlzLmJvdW5kUmVjdCkuZ2V0U3F1YXJlKCkgIT09IHJlY3QuZ2V0U3F1YXJlKClcblxuICAgICAgaWYgKHJlbW92YWJsZSkge1xuICAgICAgICByZWN0LnJlbW92YWJsZSA9IHRydWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMucHVzaChpbmRleClcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiByZWN0YW5nbGVMaXN0XG4gIH1cblxuICBzb3J0aW5nKG9kbERyYWdnYWJsZXNMaXN0LCBuZXdEcmFnZ2FibGVzLCBpbmRleE9mTmV3cykge1xuICAgIGNvbnN0IGRyYWdnYWJsZXMgPSBvZGxEcmFnZ2FibGVzTGlzdC5jb25jYXQobmV3RHJhZ2dhYmxlcylcbiAgICBuZXdEcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgaW5kZXhPZk5ld3MucHVzaChkcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSlcbiAgICB9KVxuICAgIHJldHVybiBkcmFnZ2FibGVzXG4gIH1cbn1cblxuY2xhc3MgRmxvYXRMZWZ0U3RyYXRlZ3kgZXh0ZW5kcyBCYXNpY1N0cmF0ZWd5IHtcbiAgY29uc3RydWN0b3IocmVjdGFuZ2xlLCBvcHRpb25zPXt9KSB7XG4gICAgc3VwZXIocmVjdGFuZ2xlLCBvcHRpb25zKVxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgcmVtb3ZhYmxlOiB0cnVlXG4gICAgfSwgb3B0aW9ucylcblxuICAgIHRoaXMucmFkaXVzID0gb3B0aW9ucy5yYWRpdXMgfHwgODBcblxuICAgIHRoaXMucGFkZGluZ1RvcExlZnQgPSBvcHRpb25zLnBhZGRpbmdUb3BMZWZ0IHx8IG5ldyBQb2ludCgwLCAwKVxuICAgIHRoaXMucGFkZGluZ0JvdHRvbVJpZ2h0ID0gb3B0aW9ucy5wYWRkaW5nQm90dG9tUmlnaHQgfHwgbmV3IFBvaW50KDAsIDApXG4gICAgdGhpcy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgPSBvcHRpb25zLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyB8fCAwXG5cbiAgICB0aGlzLmdldERpc3RhbmNlID0gb3B0aW9ucy5nZXREaXN0YW5jZSB8fCBnZXREaXN0YW5jZVxuICAgIHRoaXMuZ2V0UG9zaXRpb24gPSBvcHRpb25zLmdldFBvc2l0aW9uIHx8ICgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucG9zaXRpb24pXG4gIH1cblxuICBwb3NpdGlvbmluZyhyZWN0YW5nbGVMaXN0LCBfaW5kZXhlc09mTmV3cykge1xuICAgIGNvbnN0IGJvdW5kUmVjdCA9IHRoaXMuYm91bmRSZWN0XG4gICAgY29uc3QgcmVjdFAyID0gYm91bmRSZWN0LmdldFAyKClcbiAgICBsZXQgYm91bmRhcnlQb2ludHMgPSBbYm91bmRSZWN0LnBvc2l0aW9uXVxuXG4gICAgcmVjdGFuZ2xlTGlzdC5mb3JFYWNoKChyZWN0LCByZWN0SW5kZXgpID0+IHtcbiAgICAgIGxldCBwb3NpdGlvbiwgaXNWYWxpZCA9IGZhbHNlXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvdW5kYXJ5UG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHBvc2l0aW9uID0gbmV3IFBvaW50KFxuICAgICAgICAgIGJvdW5kYXJ5UG9pbnRzW2ldLnggKyB0aGlzLnBhZGRpbmdUb3BMZWZ0LngsXG4gICAgICAgICAgaSA+IDAgPyAoYm91bmRhcnlQb2ludHNbaSAtIDFdLnkgKyB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcykgOiAoYm91bmRSZWN0LnBvc2l0aW9uLnkgKyB0aGlzLnBhZGRpbmdUb3BMZWZ0LnkpXG4gICAgICAgIClcblxuICAgICAgICBpc1ZhbGlkID0gKHBvc2l0aW9uLnggKyByZWN0LnNpemUueCA8IHJlY3RQMi54KVxuXG4gICAgICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgcG9zaXRpb24gPSBuZXcgUG9pbnQoXG4gICAgICAgICAgYm91bmRSZWN0LnBvc2l0aW9uLnggKyB0aGlzLnBhZGRpbmdUb3BMZWZ0LngsXG4gICAgICAgICAgYm91bmRhcnlQb2ludHNbYm91bmRhcnlQb2ludHMubGVuZ3RoIC0gMV0ueSArIChyZWN0SW5kZXggPiAwID8gdGhpcy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgOiB0aGlzLnBhZGRpbmdUb3BMZWZ0LnkpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgcmVjdC5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnJlbW92YWJsZSAmJiByZWN0LmdldFAzKCkueSA+IGJvdW5kUmVjdC5nZXRQMygpLnkpIHtcbiAgICAgICAgcmVjdC5yZW1vdmFibGUgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGJvdW5kYXJ5UG9pbnRzID0gYWRkUG9pbnRUb0JvdW5kUG9pbnRzKGJvdW5kYXJ5UG9pbnRzLCByZWN0LmdldFAzKCkuYWRkKHRoaXMucGFkZGluZ0JvdHRvbVJpZ2h0KSlcbiAgICB9KVxuICAgIHJldHVybiByZWN0YW5nbGVMaXN0XG4gIH1cblxuICBzb3J0aW5nKG9kbERyYWdnYWJsZXNMaXN0LCBuZXdEcmFnZ2FibGVzLCBpbmRleE9mTmV3cykge1xuICAgIGNvbnN0IG5ld0xpc3QgPSBvZGxEcmFnZ2FibGVzTGlzdC5jb25jYXQoKVxuICAgIGNvbnN0IGxpc3RPbGRQb3NpdGlvbiA9IG9kbERyYWdnYWJsZXNMaXN0Lm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUuZ2V0UG9zaXRpb24oKSlcbiAgICBuZXdEcmFnZ2FibGVzLmZvckVhY2goKG5ld0RyYWdnYWJsZSkgPT4ge1xuICAgICAgbGV0IGluZGV4ID0gaW5kZXhPZk5lYXJlc3RQb2ludChsaXN0T2xkUG9zaXRpb24sIHRoaXMuZ2V0UG9zaXRpb24obmV3RHJhZ2dhYmxlKSwgdGhpcy5yYWRpdXMsIHRoaXMuZ2V0RGlzdGFuY2UpXG4gICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgIGluZGV4ID0gbmV3TGlzdC5sZW5ndGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluZGV4ID0gbmV3TGlzdC5pbmRleE9mKG9kbERyYWdnYWJsZXNMaXN0W2luZGV4XSlcbiAgICAgIH1cbiAgICAgIG5ld0xpc3Quc3BsaWNlKGluZGV4LCAwLCBuZXdEcmFnZ2FibGUpXG4gICAgfSlcbiAgICBuZXdEcmFnZ2FibGVzLmZvckVhY2goKG5ld0RyYWdnYWJsZSkgPT4ge1xuICAgICAgaW5kZXhPZk5ld3MucHVzaChuZXdMaXN0LmluZGV4T2YobmV3RHJhZ2dhYmxlKSlcbiAgICB9KVxuICAgIHJldHVybiBuZXdMaXN0XG4gIH1cbn1cblxuY2xhc3MgRmxvYXRSaWdodFN0cmF0ZWd5IGV4dGVuZHMgRmxvYXRMZWZ0U3RyYXRlZ3kge1xuICBjb25zdHJ1Y3RvcihyZWN0YW5nbGUsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcihyZWN0YW5nbGUsIG9wdGlvbnMpXG5cbiAgICB0aGlzLnBhZGRpbmdUb3BSaWdodCA9IG9wdGlvbnMucGFkZGluZ1RvcFJpZ2h0IHx8IG5ldyBQb2ludCg1LCA1KVxuICAgIHRoaXMucGFkZGluZ0JvdHRvbUxlZnQgPSBvcHRpb25zLnBhZGRpbmdCb3R0b21MZWZ0IHx8IG5ldyBQb2ludCgwLCAwKVxuICAgIHRoaXMueUdhcEJldHdlZW5EcmFnZ2FibGVzID0gb3B0aW9ucy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgfHwgMFxuXG4gICAgdGhpcy5wYWRkaW5nQm90dG9tTmVnTGVmdCA9IG5ldyBQb2ludCgtdGhpcy5wYWRkaW5nQm90dG9tTGVmdC54LCB0aGlzLnBhZGRpbmdCb3R0b21MZWZ0LnkpXG4gIH1cblxuICBwb3NpdGlvbmluZyhyZWN0YW5nbGVMaXN0LCBfaW5kZXhlc09mTmV3cykge1xuICAgIGNvbnN0IGJvdW5kUmVjdCA9IHRoaXMuYm91bmRSZWN0XG4gICAgbGV0IGJvdW5kYXJ5UG9pbnRzID0gW2JvdW5kUmVjdC5nZXRQMigpXVxuXG4gICAgcmVjdGFuZ2xlTGlzdC5mb3JFYWNoKChyZWN0LCByZWN0SW5kZXgpID0+IHtcbiAgICAgIGxldCBwb3NpdGlvbiwgaXNWYWxpZCA9IGZhbHNlXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvdW5kYXJ5UG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHBvc2l0aW9uID0gbmV3IFBvaW50KFxuICAgICAgICAgIGJvdW5kYXJ5UG9pbnRzW2ldLnggLSByZWN0LnNpemUueCAtIHRoaXMucGFkZGluZ1RvcFJpZ2h0LngsXG4gICAgICAgICAgaSA+IDAgPyAoYm91bmRhcnlQb2ludHNbaSAtIDFdLnkgKyB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcykgOiAoYm91bmRSZWN0LnBvc2l0aW9uLnkgKyB0aGlzLnBhZGRpbmdUb3BSaWdodC55KVxuICAgICAgICApXG5cbiAgICAgICAgaXNWYWxpZCA9IChwb3NpdGlvbi54ID4gcmVjdC5wb3NpdGlvbi54KVxuICAgICAgICBpZiAoaXNWYWxpZCkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICBwb3NpdGlvbiA9IG5ldyBQb2ludChcbiAgICAgICAgICBib3VuZFJlY3QuZ2V0UDIoKS54ICAtIHJlY3Quc2l6ZS54IC0gdGhpcy5wYWRkaW5nVG9wUmlnaHQueCxcbiAgICAgICAgICBib3VuZGFyeVBvaW50c1tib3VuZGFyeVBvaW50cy5sZW5ndGggLSAxXS55ICsgKHJlY3RJbmRleCA+IDAgPyB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyA6IHRoaXMucGFkZGluZ1RvcFJpZ2h0LnkpXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIHJlY3QucG9zaXRpb24gPSBwb3NpdGlvblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZW1vdmFibGUgJiYgcmVjdC5nZXRQNCgpLnkgPiBib3VuZFJlY3QuZ2V0UDQoKS55KSB7XG4gICAgICAgIHJlY3QucmVtb3ZhYmxlID0gdHJ1ZVxuICAgICAgfVxuICAgICAgYm91bmRhcnlQb2ludHMgPSBhZGRQb2ludFRvQm91bmRQb2ludHMoYm91bmRhcnlQb2ludHMsIHJlY3QuZ2V0UDQoKS5hZGQodGhpcy5wYWRkaW5nQm90dG9tTmVnTGVmdCksIHRydWUpXG4gICAgfSlcbiAgICByZXR1cm4gcmVjdGFuZ2xlTGlzdFxuICB9XG59XG5cbmV4cG9ydCB7IE5vdENyb3NzaW5nU3RyYXRlZ3ksIEZsb2F0TGVmdFN0cmF0ZWd5LCBGbG9hdFJpZ2h0U3RyYXRlZ3kgfVxuIiwiaW1wb3J0IHJhbmdlIGZyb20gJy4vdXRpbHMvcmFuZ2UuanMnXG5pbXBvcnQgcmVtb3ZlSXRlbSBmcm9tICcuL3V0aWxzL3JlbW92ZS1hcnJheS1pdGVtJ1xuaW1wb3J0IGdldERlZmF1bHRDb250YWluZXIgZnJvbSAnLi91dGlscy9nZXQtZGVmYXVsdC1jb250YWluZXInXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnRFbWl0dGVyJ1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tICcuL2dlb21ldHJ5L3JlY3RhbmdsZSdcbmltcG9ydCB7IHRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3RvcnkgfSBmcm9tICcuL2dlb21ldHJ5L2Rpc3RhbmNlcydcbmltcG9ydCB7IHNjb3BlcywgZGVmYXVsdFNjb3BlIH0gZnJvbSAnLi9zY29wZSdcblxuaW1wb3J0IHsgRmxvYXRMZWZ0U3RyYXRlZ3kgfSBmcm9tICcuL3Bvc2l0aW9uaW5nJ1xuaW1wb3J0IHsgQm91bmRUb0VsZW1lbnQgfSBmcm9tICcuL2JvdW5kaW5nJ1xuXG5jb25zdCBhZGRUb0RlZmF1bHRTY29wZSA9IGZ1bmN0aW9uKHRhcmdldCkge1xuICBkZWZhdWx0U2NvcGUuYWRkVGFyZ2V0KHRhcmdldClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFyZ2V0IGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgZHJhZ2dhYmxlcywgb3B0aW9ucyA9IHt9KSB7XG4gICAgc3VwZXIob3B0aW9ucylcbiAgICBjb25zdCB0YXJnZXQgPSB0aGlzXG5cbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHRpbWVFbmQ6IDIwMCxcbiAgICAgIHRpbWVFeGNhbmdlOiA0MDBcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGhpcy5wb3NpdGlvbmluZ1N0cmF0ZWd5ID0gb3B0aW9ucy5zdHJhdGVneSB8fCBuZXcgRmxvYXRMZWZ0U3RyYXRlZ3koXG4gICAgICB0aGlzLmdldFJlY3RhbmdsZS5iaW5kKHRoaXMpLFxuICAgICAge1xuICAgICAgICByYWRpdXM6IDgwLFxuICAgICAgICBnZXREaXN0YW5jZTogdHJhbnNmb3JtZWRTcGFjZURpc3RhbmNlRmFjdG9yeSh7IHg6IDEsIHk6IDQgfSksXG4gICAgICAgIHJlbW92YWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIClcblxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgICBkcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnRhcmdldHMucHVzaCh0YXJnZXQpKVxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZXNcblxuICAgIFRhcmdldC5lbWl0dGVyLmVtaXQoJ3RhcmdldDpjcmVhdGUnLCB0aGlzKVxuXG4gICAgdGhpcy5zdGFydEJvdW5kaW5nKClcbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgc3RhcnRCb3VuZGluZygpIHtcbiAgICB0aGlzLmJvdW5kID0gdGhpcy5vcHRpb25zLmJvdW5kIHx8IEJvdW5kVG9FbGVtZW50LmJvdW5kaW5nKHRoaXMuZWxlbWVudClcbiAgfVxuXG4gIHBvc2l0aW9uaW5nIChkcmFnZ2FibGVzLCBpbmRleGVzT2ZOZXcpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbmluZ1N0cmF0ZWd5LnBvc2l0aW9uaW5nKGRyYWdnYWJsZXMsIGluZGV4ZXNPZk5ldylcbiAgfVxuXG4gIHNvcnRpbmcgKG9sZERyYWdnYWJsZXMsIG5ld0RyYWdnYWJsZXMsIGluZGV4T2ZOZXdzKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25pbmdTdHJhdGVneS5zb3J0aW5nKG9sZERyYWdnYWJsZXMsIG5ld0RyYWdnYWJsZXMsIGluZGV4T2ZOZXdzKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBsZXQgcmVjdGFuZ2xlcywgaW5kZXhlc09mTmV3XG5cbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcyA9IHRoaXMuZHJhZ2dhYmxlcy5maWx0ZXIoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgbGV0IGVsZW1lbnQgPSBkcmFnZ2FibGUuZWxlbWVudC5wYXJlbnROb2RlXG4gICAgICB3aGlsZSAoZWxlbWVudCkge1xuICAgICAgICBpZiAoZWxlbWVudCA9PT0gdGhpcy5lbGVtZW50KSB7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlXG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9KVxuXG4gICAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmxlbmd0aCkge1xuICAgICAgaW5kZXhlc09mTmV3ID0gcmFuZ2UodGhpcy5pbm5lckRyYWdnYWJsZXMubGVuZ3RoKVxuICAgICAgcmVjdGFuZ2xlcyA9IHRoaXMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgICAgfSksIGluZGV4ZXNPZk5ldylcbiAgICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgaW5kZXhlc09mTmV3KVxuICAgICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB0aGlzLmVtaXQoJ3RhcmdldDphZGQnLCBkcmFnZ2FibGUpKVxuICAgIH1cbiAgfVxuXG4gIGdldFJlY3RhbmdsZSgpIHtcbiAgICByZXR1cm4gUmVjdGFuZ2xlLmZyb21FbGVtZW50KHRoaXMuZWxlbWVudCwgdGhpcy5jb250YWluZXIsIHRydWUpXG4gIH1cblxuICBjYXRjaERyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmNhdGNoRHJhZ2dhYmxlKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmNhdGNoRHJhZ2dhYmxlKHRoaXMsIGRyYWdnYWJsZSlcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGFyZ2V0UmVjdGFuZ2xlID0gdGhpcy5nZXRSZWN0YW5nbGUoKVxuICAgICAgY29uc3QgZHJhZ2dhYmxlU3F1YXJlID0gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpLmdldFNxdWFyZSgpXG5cbiAgICAgIHJldHVybiBkcmFnZ2FibGVTcXVhcmUgPCB0YXJnZXRSZWN0YW5nbGUuZ2V0U3F1YXJlKClcbiAgICAgICAgICAgICAgJiYgdGFyZ2V0UmVjdGFuZ2xlLmluY2x1ZGVQb2ludChkcmFnZ2FibGUuZ2V0Q2VudGVyKCkpXG4gICAgfVxuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UmVjdGFuZ2xlKCkucG9zaXRpb25cbiAgfVxuXG4gIGdldFNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UmVjdGFuZ2xlKCkuc2l6ZVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICBzY29wZXMuZm9yRWFjaCgoc2NvcGUpID0+IHJlbW92ZUl0ZW0oc2NvcGUudGFyZ2V0cywgdGhpcykpXG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgfSksIFtdKVxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgW10sIDApXG4gIH1cblxuICBvbkVuZChkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBuZXdEcmFnZ2FibGVzSW5kZXggPSBbXVxuXG4gICAgaWYgKHRoaXMuZ2V0UmVjdGFuZ2xlKCkuaW5jbHVkZVBvaW50KGRyYWdnYWJsZS5nZXRDZW50ZXIoKSkpIHtcbiAgICAgIGRyYWdnYWJsZS5wb3NpdGlvbiA9IHRoaXMuYm91bmQoZHJhZ2dhYmxlLnBvc2l0aW9uLCBkcmFnZ2FibGUuZ2V0U2l6ZSgpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICB0aGlzLmVtaXQoJ3RhcmdldDpiZWZvcmVBZGQnLCBkcmFnZ2FibGUpXG5cbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcyA9IHRoaXMuc29ydGluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcywgW2RyYWdnYWJsZV0sIG5ld0RyYWdnYWJsZXNJbmRleClcbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBuZXdEcmFnZ2FibGVzSW5kZXgpXG5cbiAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIG5ld0RyYWdnYWJsZXNJbmRleClcbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMSkge1xuICAgICAgdGhpcy5hZGRSZW1vdmVPbk1vdmUoZHJhZ2dhYmxlKVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgaW5kZXhlc09mTmV3LCB0aW1lKSB7XG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuc2xpY2UoMCkuZm9yRWFjaCgoZHJhZ2dhYmxlLCBpKSA9PiB7XG4gICAgICBjb25zdCByZWN0ID0gcmVjdGFuZ2xlc1tpXSxcbiAgICAgICAgdGltZUVuZCA9IHRpbWUgfHwgdGltZSA9PT0gMCA/IHRpbWUgOiBpbmRleGVzT2ZOZXcuaW5kZXhPZihpKSAhPT0gLTEgPyB0aGlzLm9wdGlvbnMudGltZUVuZCA6IHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZVxuXG4gICAgICBpZiAocmVjdC5yZW1vdmFibGUpIHtcbiAgICAgICAgZHJhZ2dhYmxlLm1vdmUoZHJhZ2dhYmxlLmluaXRpYWxQb3NpdGlvbiwgdGltZUVuZCwgdHJ1ZSwgdHJ1ZSlcbiAgICAgICAgcmVtb3ZlSXRlbSh0aGlzLmlubmVyRHJhZ2dhYmxlcywgZHJhZ2dhYmxlKVxuICAgICAgICB0aGlzLmVtaXQoJ3RhcmdldDpyZW1vdmUnLCBkcmFnZ2FibGUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkcmFnZ2FibGUubW92ZShyZWN0LnBvc2l0aW9uLCB0aW1lRW5kLCB0cnVlLCB0cnVlKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBhZGQoZHJhZ2dhYmxlLCB0aW1lKSB7XG4gICAgY29uc3QgbmV3RHJhZ2dhYmxlc0luZGV4ID0gdGhpcy5pbm5lckRyYWdnYWJsZXMubGVuZ3RoXG5cbiAgICB0aGlzLmVtaXQoJ3RhcmdldDpiZWZvcmVBZGQnLCBkcmFnZ2FibGUpXG5cbiAgICB0aGlzLnB1c2hJbm5lckRyYWdnYWJsZShkcmFnZ2FibGUpXG4gICAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgbmV3RHJhZ2dhYmxlc0luZGV4LCBkcmFnZ2FibGUpXG5cbiAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIFtuZXdEcmFnZ2FibGVzSW5kZXhdLCB0aW1lIHx8IDApXG4gICAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTEpIHtcbiAgICAgIHRoaXMuYWRkUmVtb3ZlT25Nb3ZlKGRyYWdnYWJsZSlcbiAgICB9XG4gIH1cblxuICBwdXNoSW5uZXJEcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKT09PS0xKSB7XG4gICAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5wdXNoKGRyYWdnYWJsZSlcbiAgICB9XG4gIH1cblxuICBhZGRSZW1vdmVPbk1vdmUoZHJhZ2dhYmxlKSB7XG4gICAgZHJhZ2dhYmxlLm9uKCdkcmFnOm1vdmUnLCB0aGlzLnJlbW92ZUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICB0aGlzLnJlbW92ZShkcmFnZ2FibGUpXG4gICAgfSlcblxuICAgIHRoaXMuZW1pdCgndGFyZ2V0OmFkZCcsIGRyYWdnYWJsZSlcbiAgfVxuXG4gIHJlbW92ZShkcmFnZ2FibGUpIHtcbiAgICBkcmFnZ2FibGUudW5zdWJzY3JpYmUoJ2RyYWc6bW92ZScsIHRoaXMucmVtb3ZlSGFuZGxlcilcblxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpXG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuc3BsaWNlKGluZGV4LCAxKVxuXG4gICAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgW10pXG5cbiAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIFtdKVxuICAgIHRoaXMuZW1pdCgndGFyZ2V0OnJlbW92ZScsIGRyYWdnYWJsZSlcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLm1vdmUoZHJhZ2dhYmxlLmluaXRpYWxQb3NpdGlvbiwgMCwgdHJ1ZSwgdHJ1ZSlcbiAgICAgIHRoaXMuZW1pdCgndGFyZ2V0OnJlbW92ZScsIGRyYWdnYWJsZSlcbiAgICB9KVxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzID0gW11cbiAgfVxuXG4gIGdldFNvcnRlZERyYWdnYWJsZXMoKSB7XG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuc2xpY2UoKVxuICB9XG5cbiAgZ2V0IGNvbnRhaW5lcigpIHtcbiAgICByZXR1cm4gKHRoaXMuX2NvbnRhaW5lciA9IHRoaXMuX2NvbnRhaW5lciB8fCB0aGlzLm9wdGlvbnMuY29udGFpbmVyIHx8IHRoaXMub3B0aW9ucy5wYXJlbnQgfHwgZ2V0RGVmYXVsdENvbnRhaW5lcih0aGlzLmVsZW1lbnQpKVxuICB9XG59XG5cblRhcmdldC5lbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcigpXG5UYXJnZXQuZW1pdHRlci5vbigndGFyZ2V0OmNyZWF0ZScsIGFkZFRvRGVmYXVsdFNjb3BlKVxuIiwiaW1wb3J0IHJlbW92ZUl0ZW0gZnJvbSAnLi91dGlscy9yZW1vdmUtYXJyYXktaXRlbSdcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudEVtaXR0ZXInXG5pbXBvcnQgRHJhZ2dhYmxlIGZyb20gJy4vZHJhZ2dhYmxlJ1xuaW1wb3J0IFRhcmdldCBmcm9tICcuL3RhcmdldCdcblxuY29uc3Qgc2NvcGVzID0gW11cblxuY2xhc3MgU2NvcGUgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvcihkcmFnZ2FibGVzLCB0YXJnZXRzLCBvcHRpb25zPXt9KSB7XG4gICAgc3VwZXIob3B0aW9ucylcbiAgICBzY29wZXMuZm9yRWFjaCgoc2NvcGUpID0+IHtcbiAgICAgIGlmIChkcmFnZ2FibGVzKSB7XG4gICAgICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICAgICAgcmVtb3ZlSXRlbShzY29wZS5kcmFnZ2FibGVzLCBkcmFnZ2FibGUpXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIGlmICh0YXJnZXRzKSB7XG4gICAgICAgIHRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB7XG4gICAgICAgICAgcmVtb3ZlSXRlbShzY29wZS50YXJnZXRzLCB0YXJnZXQpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZXMgfHwgW11cbiAgICB0aGlzLnRhcmdldHMgPSB0YXJnZXRzIHx8IFtdXG4gICAgc2NvcGVzLnB1c2godGhpcylcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICB0aW1lRW5kOiAob3B0aW9ucy50aW1lRW5kKSB8fCA0MDBcbiAgICB9XG5cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUuZHJhZ0VuZEFjdGlvbiA9ICgpID0+IHRoaXMub25FbmQoZHJhZ2dhYmxlKVxuICAgIH0pXG4gIH1cblxuICBhZGREcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxuICAgIGRyYWdnYWJsZS5kcmFnRW5kQWN0aW9uID0gKCkgPT4gdGhpcy5vbkVuZChkcmFnZ2FibGUpXG4gIH1cblxuICBhZGRUYXJnZXQodGFyZ2V0KSB7XG4gICAgdGhpcy50YXJnZXRzLnB1c2godGFyZ2V0KVxuICB9XG5cbiAgb25FbmQoZHJhZ2dhYmxlKSB7XG4gICAgY29uc3Qgc2hvdFRhcmdldHMgPSB0aGlzLnRhcmdldHMuZmlsdGVyKCh0YXJnZXQpID0+IHtcbiAgICAgIHJldHVybiB0YXJnZXQuZHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkgIT09IC0xXG4gICAgfSkuZmlsdGVyKCh0YXJnZXQpID0+IHtcbiAgICAgIHJldHVybiB0YXJnZXQuY2F0Y2hEcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICAgIH0pLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIHJldHVybiBhLmdldFJlY3RhbmdsZSgpLmdldFNxdWFyZSgpIC0gYi5nZXRSZWN0YW5nbGUoKS5nZXRTcXVhcmUoKVxuICAgIH0pXG5cbiAgICBpZiAoc2hvdFRhcmdldHMubGVuZ3RoKSB7XG4gICAgICBzaG90VGFyZ2V0c1swXS5vbkVuZChkcmFnZ2FibGUpXG4gICAgfSBlbHNlIGlmIChkcmFnZ2FibGUudGFyZ2V0cy5sZW5ndGgpIHtcbiAgICAgIGRyYWdnYWJsZS5waW5Qb3NpdGlvbihkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uLCB0aGlzLm9wdGlvbnMudGltZUVuZClcbiAgICB9XG5cbiAgICB0aGlzLmVtaXQoJ3Njb3BlOmNoYW5nZScpXG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLnRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB0YXJnZXQucmVzZXQoKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnJlZnJlc2goKSlcbiAgICB0aGlzLnRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB0YXJnZXQucmVmcmVzaCgpKVxuICB9XG5cbiAgZ2V0IHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXRzLm1hcCgodGFyZ2V0KSA9PiB7XG4gICAgICByZXR1cm4gdGFyZ2V0LmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4gdGhpcy5kcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSlcbiAgICB9KVxuICB9XG5cbiAgc2V0IHBvc2l0aW9ucyhwb3NpdGlvbnMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gJ3dyb25nIGFycmF5IGxlbmd0aCdcbiAgICBpZiAocG9zaXRpb25zLmxlbmd0aCA9PT0gdGhpcy50YXJnZXRzLmxlbmd0aCkge1xuICAgICAgdGhpcy50YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4gdGFyZ2V0LnJlc2V0KCkpXG5cbiAgICAgIHBvc2l0aW9ucy5mb3JFYWNoKCh0YXJnZXRJbmRleGVzLCBpKSA9PiB7XG4gICAgICAgIHRhcmdldEluZGV4ZXMuZm9yRWFjaCgoaW5kZXgpID0+IHtcbiAgICAgICAgICB0aGlzLnRhcmdldHNbaV0uYWRkKHRoaXMuZHJhZ2dhYmxlc1tpbmRleF0pXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBtZXNzYWdlXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IGRlZmF1bHRTY29wZSA9IG5ldyBTY29wZSgpXG5cbmZ1bmN0aW9uIHNjb3BlKGZuKSB7XG4gIGNvbnN0IGN1cnJlbnRTY29wZSA9IG5ldyBTY29wZSgpXG5cbiAgY29uc3QgYWRkRHJhZ2dhYmxlVG9TY29wZSA9IGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICAgIGN1cnJlbnRTY29wZS5hZGREcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICAgIERyYWdnYWJsZS5lbWl0dGVyLmludGVycnVwdCgpXG4gIH1cblxuICBjb25zdCBhZGRUYXJnZXRUb1Njb3BlID0gZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgY3VycmVudFNjb3BlLmFkZFRhcmdldCh0YXJnZXQpXG4gICAgRHJhZ2dhYmxlLmVtaXR0ZXIuaW50ZXJydXB0KClcbiAgfVxuXG4gIERyYWdnYWJsZS5lbWl0dGVyLnByZXBlbmRPbignZHJhZ2dhYmxlOmNyZWF0ZScsIGFkZERyYWdnYWJsZVRvU2NvcGUpXG4gIFRhcmdldC5lbWl0dGVyLnByZXBlbmRPbigndGFyZ2V0OmNyZWF0ZScsIGFkZFRhcmdldFRvU2NvcGUpXG4gIGZuLmNhbGwoKVxuICBEcmFnZ2FibGUuZW1pdHRlci51bnN1YnNjcmliZSgnZHJhZ2dhYmxlOmNyZWF0ZScsIGFkZERyYWdnYWJsZVRvU2NvcGUpXG4gIFRhcmdldC5lbWl0dGVyLnVuc3Vic2NyaWJlKCd0YXJnZXQ6Y3JlYXRlJywgYWRkVGFyZ2V0VG9TY29wZSlcbiAgcmV0dXJuIGN1cnJlbnRTY29wZVxufVxuXG5leHBvcnQgeyBzY29wZXMsIGRlZmF1bHRTY29wZSwgU2NvcGUsIHNjb3BlIH1cbiIsImZ1bmN0aW9uIGNoZWNrU3VwcG9ydFBhc3NpdmVFdmVudHMoKSB7XG4gIGxldCBwYXNzaXZlU3VwcG9ydGVkID0gZmFsc2VcblxuICB0cnkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdwYXNzaXZlJywge1xuICAgICAgZ2V0KCkge1xuICAgICAgICByZXR1cm4gKHBhc3NpdmVTdXBwb3J0ZWQgPSB0cnVlKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndGVzdCcsIG9wdGlvbnMsIG9wdGlvbnMpXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Rlc3QnLCBvcHRpb25zLCBvcHRpb25zKVxuICB9IGNhdGNoIChfZXJyKSB7XG4gICAgcGFzc2l2ZVN1cHBvcnRlZCA9IGZhbHNlXG4gIH1cblxuICByZXR1cm4gcGFzc2l2ZVN1cHBvcnRlZFxufVxuXG5leHBvcnQgY29uc3QgaXNTdXBwb3J0UGFzc2l2ZUV2ZW50cyA9IGNoZWNrU3VwcG9ydFBhc3NpdmVFdmVudHMoKVxuXG5mdW5jdGlvbiBldmVudE9wdGlvbnMob3B0aW9ucywgZmFsbGJhY2sgPSBmYWxzZSkge1xuICByZXR1cm4gaXNTdXBwb3J0UGFzc2l2ZUV2ZW50cyA/IG9wdGlvbnMgOiBmYWxsYmFja1xufVxuXG5leHBvcnQgeyBldmVudE9wdGlvbnMgfVxuXG5leHBvcnQgZGVmYXVsdCBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0aHJvdHRsZShmdW5jLCB3YWl0KSB7XG4gIGxldCBsYXN0VGltZSA9IDBcblxuICByZXR1cm4gZnVuY3Rpb24gZXhlY3V0ZWRGdW5jdGlvbigpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpc1xuICAgIGNvbnN0IGFyZ3MgPSBhcmd1bWVudHNcblxuICAgIGNvbnN0IG5vdyA9IERhdGUubm93KClcbiAgICBpZiAobm93IC0gbGFzdFRpbWUgPj0gd2FpdCkge1xuICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKVxuICAgICAgbGFzdFRpbWUgPSBub3dcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBnZXREZWZhdWx0Q29udGFpbmVyIGZyb20gJy4vdXRpbHMvZ2V0LWRlZmF1bHQtY29udGFpbmVyJ1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50RW1pdHRlcidcbmltcG9ydCBnZXRTdHlsZVByb3BlcnR5IGZyb20gJ2Rlc2FuZHJvLWdldC1zdHlsZS1wcm9wZXJ0eSdcbmltcG9ydCB7IEJvdW5kVG9FbGVtZW50IH0gZnJvbSAnLi9ib3VuZGluZydcbmltcG9ydCBQb2ludCBmcm9tICcuL2dlb21ldHJ5L3BvaW50J1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tICcuL2dlb21ldHJ5L3JlY3RhbmdsZSdcbmltcG9ydCB7IGRlZmF1bHRTY29wZSB9IGZyb20gJy4vc2NvcGUnXG5pbXBvcnQgaXNTdXBwb3J0UGFzc2l2ZUV2ZW50cyBmcm9tICcuL3V0aWxzL2lzLXN1cHBvcnQtcGFzc2l2ZS1ldmVudHMnXG5pbXBvcnQgdGhyb3R0bGUgZnJvbSAnLi91dGlscy90aHJvdHRsZSdcblxuY29uc3QgdGhyb3R0bGVkRHJhZ092ZXIgPSAoY2FsbGJhY2ssIGR1cmF0aW9uKSA9PiB7XG4gIGNvbnN0IHRocm90dGxlZENhbGxiYWNrID0gdGhyb3R0bGUoKGV2ZW50KSA9PiBjYWxsYmFjayhldmVudCksIGR1cmF0aW9uKVxuICByZXR1cm4gZXZlbnQgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB0aHJvdHRsZWRDYWxsYmFjayhldmVudClcbiAgfVxufVxuXG5jb25zdCBwYXNzaXZlRmFsc2UgPSBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzID8geyBwYXNzaXZlOiBmYWxzZSB9IDogZmFsc2VcblxuY29uc3QgaXNUb3VjaCA9ICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvd1xuY29uc3QgbW91c2VFdmVudHMgPSB7XG4gIHN0YXJ0OiAnbW91c2Vkb3duJyxcbiAgbW92ZTogJ21vdXNlbW92ZScsXG4gIGVuZDogJ21vdXNldXAnXG59XG5jb25zdCB0b3VjaEV2ZW50cyA9IHtcbiAgc3RhcnQ6ICd0b3VjaHN0YXJ0JyxcbiAgbW92ZTogJ3RvdWNobW92ZScsXG4gIGVuZDogJ3RvdWNoZW5kJ1xufVxuY29uc3QgZHJhZ2dhYmxlcyA9IFtdXG5jb25zdCB0cmFuc2Zvcm1Qcm9wZXJ0eSA9IGdldFN0eWxlUHJvcGVydHkoJ3RyYW5zZm9ybScpXG5jb25zdCB0cmFuc2l0aW9uUHJvcGVydHkgPSBnZXRTdHlsZVByb3BlcnR5KCd0cmFuc2l0aW9uJylcblxuZnVuY3Rpb24gZ2V0VG91Y2hCeUlEKGVsZW1lbnQsIHRvdWNoSWQpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50LmNoYW5nZWRUb3VjaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGVsZW1lbnQuY2hhbmdlZFRvdWNoZXNbaV0uaWRlbnRpZmllciA9PT0gdG91Y2hJZCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQuY2hhbmdlZFRvdWNoZXNbaV1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmZ1bmN0aW9uIHByZXZlbnREb3VibGVJbml0KGRyYWdnYWJsZSkge1xuICBjb25zdCBtZXNzYWdlID0gXCJmb3IgdGhpcyBlbGVtZW50IERyYWdlZS5EcmFnZ2FibGUgaXMgYWxyZWFkeSBleGlzdCwgZG9uJ3QgY3JlYXRlIGl0IHR3aWNlIFwiXG4gIGlmIChkcmFnZ2FibGVzLnNvbWUoKGV4aXN0aW5nKSA9PiBkcmFnZ2FibGUuZWxlbWVudCA9PT0gZXhpc3RpbmcuZWxlbWVudCkpIHtcbiAgICB0aHJvdyBtZXNzYWdlXG4gIH1cbiAgZHJhZ2dhYmxlcy5wdXNoKGRyYWdnYWJsZSlcbn1cblxuZnVuY3Rpb24gYWRkVG9EZWZhdWx0U2NvcGUoZHJhZ2dhYmxlKSB7XG4gIGRlZmF1bHRTY29wZS5hZGREcmFnZ2FibGUoZHJhZ2dhYmxlKVxufVxuXG5mdW5jdGlvbiBjb3B5U3R5bGVzKHNvdXJjZSwgZGVzdGluYXRpb24pIHtcbiAgY29uc3QgY3MgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShzb3VyY2UpXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGtleSA9IGNzW2ldXG4gICAgaWYgKChrZXkuaW5kZXhPZigndHJhbnNpdGlvbicpIDwgMCkgJiYgKGtleS5pbmRleE9mKCd0cmFuc2Zvcm0nKSA8IDApKSB7XG4gICAgICBkZXN0aW5hdGlvbi5zdHlsZVtrZXldID0gY3Nba2V5XVxuICAgIH1cbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc291cmNlLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgY29weVN0eWxlcyhzb3VyY2UuY2hpbGRyZW5baV0sIGRlc3RpbmF0aW9uLmNoaWxkcmVuW2ldKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYWdnYWJsZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcihvcHRpb25zKVxuICAgIHRoaXMudGFyZ2V0cyA9IFtdXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9uc1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgICBwcmV2ZW50RG91YmxlSW5pdCh0aGlzKVxuICAgIERyYWdnYWJsZS5lbWl0dGVyLmVtaXQoJ2RyYWdnYWJsZTpjcmVhdGUnLCB0aGlzKVxuICAgIHRoaXMuX2VuYWJsZSA9IHRydWVcbiAgICB0aGlzLnN0YXJ0Qm91bmRpbmcoKVxuICAgIHRoaXMuc3RhcnRQb3NpdGlvbmluZygpXG4gICAgdGhpcy5zdGFydExpc3RlbmluZygpXG4gIH1cblxuICBzdGFydEJvdW5kaW5nKCkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuYm91bmQpIHtcbiAgICAgIHRoaXMuYm91bmRpbmcgPSB7IGJvdW5kOiB0aGlzLm9wdGlvbnMuYm91bmQgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmJvdW5kaW5nID0gbmV3IEJvdW5kVG9FbGVtZW50KHRoaXMuY29udGFpbmVyLCB0aGlzLmNvbnRhaW5lcilcbiAgICB9XG4gIH1cblxuICBzdGFydFBvc2l0aW9uaW5nKCkge1xuICAgIHRoaXMuX3NldERlZmF1bHRUcmFuc2l0aW9uKClcbiAgICB0aGlzLm9mZnNldCA9IFBvaW50LmVsZW1lbnRPZmZzZXQodGhpcy5lbGVtZW50LCB0aGlzLmNvbnRhaW5lciwgdHJ1ZSlcbiAgICB0aGlzLnBpbm5lZFBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICB0aGlzLmluaXRpYWxQb3NpdGlvbiA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbiB8fCB0aGlzLm9mZnNldFxuXG4gICAgdGhpcy5waW5Qb3NpdGlvbih0aGlzLmluaXRpYWxQb3NpdGlvbilcblxuICAgIGlmICh0aGlzLmJvdW5kaW5nLnJlZnJlc2gpIHtcbiAgICAgIHRoaXMuYm91bmRpbmcucmVmcmVzaCgpXG4gICAgfVxuICB9XG5cbiAgc3RhcnRMaXN0ZW5pbmcoKSB7XG4gICAgdGhpcy5fZHJhZ1N0YXJ0ID0gKGV2ZW50KSA9PiB0aGlzLmRyYWdTdGFydChldmVudClcbiAgICB0aGlzLl9kcmFnTW92ZSA9IChldmVudCkgPT4gdGhpcy5kcmFnTW92ZShldmVudClcbiAgICB0aGlzLl9kcmFnRW5kID0gKGV2ZW50KSA9PiB0aGlzLmRyYWdFbmQoZXZlbnQpXG4gICAgdGhpcy5fbmF0aXZlRHJhZ1N0YXJ0ID0gKGV2ZW50KSA9PiB0aGlzLm5hdGl2ZURyYWdTdGFydChldmVudClcbiAgICB0aGlzLl9uYXRpdmVEcmFnT3ZlciA9IHRocm90dGxlZERyYWdPdmVyKChldmVudCkgPT4gdGhpcy5uYXRpdmVEcmFnT3ZlcihldmVudCksIHRoaXMuZHJhZ092ZXJUaHJvdHRsZUR1cmF0aW9uKVxuICAgIHRoaXMuX25hdGl2ZURyYWdFbmQgPSAoZXZlbnQpID0+IHRoaXMubmF0aXZlRHJhZ0VuZChldmVudClcbiAgICB0aGlzLl9uYXRpdmVEcm9wID0gKGV2ZW50KSA9PiB0aGlzLm5hdGl2ZURyb3AoZXZlbnQpXG4gICAgdGhpcy5fc2Nyb2xsID0gKGV2ZW50KSA9PiB0aGlzLm9uU2Nyb2xsKGV2ZW50KVxuXG4gICAgdGhpcy5oYW5kbGVyLmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydCwgcGFzc2l2ZUZhbHNlKVxuICAgIHRoaXMuaGFuZGxlci5hZGRFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQsIHBhc3NpdmVGYWxzZSlcbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgdGhpcy5fbmF0aXZlRHJhZ1N0YXJ0KVxuICB9XG5cbiAgZ2V0U2l6ZSgpIHtcbiAgICByZXR1cm4gUG9pbnQuZWxlbWVudFNpemUodGhpcy5lbGVtZW50KVxuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMub2Zmc2V0LmFkZCh0aGlzLl90cmFuc2Zvcm1Qb3NpdGlvbiB8fCBuZXcgUG9pbnQoMCwgMCkpXG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25cbiAgfVxuXG4gIGdldENlbnRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi5hZGQodGhpcy5nZXRTaXplKCkubXVsdCgwLjUpKVxuICB9XG5cbiAgX3NldERlZmF1bHRUcmFuc2l0aW9uICgpIHtcbiAgICBpZiAoIXRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNpdGlvblByb3BlcnR5XSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZWxlbWVudClbdHJhbnNpdGlvblByb3BlcnR5XVxuICAgIH1cbiAgfVxuXG4gIF9zZXRUcmFuc2l0aW9uKHRpbWUpIHtcbiAgICBsZXQgdHJhbnNpdGlvbiA9IHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldXG4gICAgY29uc3QgdHJhbnNpdGlvbkNzcyA9IGB0cmFuc2Zvcm0gJHt0aW1lfW1zYFxuXG4gICAgaWYgKCEvdHJhbnNmb3JtIFxcZCptP3MvLnRlc3QodHJhbnNpdGlvbikpIHtcbiAgICAgIGlmICh0cmFuc2l0aW9uKSB7XG4gICAgICAgIHRyYW5zaXRpb24gKz0gYCwgJHt0cmFuc2l0aW9uQ3NzfWBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyYW5zaXRpb24gPSB0cmFuc2l0aW9uQ3NzXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyYW5zaXRpb24gPSB0cmFuc2l0aW9uLnJlcGxhY2UoL3RyYW5zZm9ybSBcXGQqbT9zL2csIHRyYW5zaXRpb25Dc3MpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldICE9PSB0cmFuc2l0aW9uKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNpdGlvblByb3BlcnR5XSA9IHRyYW5zaXRpb25cbiAgICB9XG4gIH1cblxuICBfc2V0VHJhbnNsYXRlKHBvaW50KSB7XG4gICAgdGhpcy5fdHJhbnNmb3JtUG9zaXRpb24gPSBwb2ludFxuICAgIGNvbnN0IHRyYW5zbGF0ZUNzcyA9IGB0cmFuc2xhdGUzZCgke3BvaW50Lnh9cHgsICR7cG9pbnQueX1weCwgMHB4KWBcblxuICAgIGxldCB0cmFuc2Zvcm0gPSB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcGVydHldXG5cbiAgICBpZiAodGhpcy5zaG91bGRSZW1vdmVaZXJvVHJhbnNsYXRlICYmIHBvaW50LnggPT09IDAgJiYgcG9pbnQueSA9PT0gMCkge1xuICAgICAgdHJhbnNmb3JtID0gdHJhbnNmb3JtLnJlcGxhY2UoL3RyYW5zbGF0ZTNkXFwoW14pXStcXCkvLCAnJylcbiAgICB9IGVsc2UgaWYgKCEvdHJhbnNsYXRlM2RcXChbXildK1xcKS8udGVzdCh0cmFuc2Zvcm0pKSB7XG4gICAgICBpZiAodHJhbnNmb3JtKSB7XG4gICAgICAgIHRyYW5zZm9ybSArPSAnICdcbiAgICAgIH1cbiAgICAgIHRyYW5zZm9ybSArPSB0cmFuc2xhdGVDc3NcbiAgICB9IGVsc2Uge1xuICAgICAgdHJhbnNmb3JtID0gdHJhbnNmb3JtLnJlcGxhY2UoL3RyYW5zbGF0ZTNkXFwoW14pXStcXCkvLCB0cmFuc2xhdGVDc3MpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wZXJ0eV0gIT09IHRyYW5zZm9ybSkge1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BlcnR5XSA9IHRyYW5zZm9ybVxuICAgIH1cbiAgfVxuXG4gIG1vdmUocG9pbnQsIHRpbWU9MCwgaXNTaWxlbnQ9ZmFsc2UpIHtcbiAgICBwb2ludCA9IHBvaW50LmNsb25lKClcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9pbnRcblxuICAgIHRoaXMuX3NldFRyYW5zaXRpb24odGltZSlcbiAgICB0aGlzLl9zZXRUcmFuc2xhdGUocG9pbnQuc3ViKHRoaXMub2Zmc2V0KSlcblxuICAgIGlmICghaXNTaWxlbnQpIHtcbiAgICAgIHRoaXMuZW1pdCgnZHJhZzptb3ZlJylcbiAgICB9XG4gIH1cblxuICBwaW5Qb3NpdGlvbihwb2ludCwgdGltZT0wLCBzaWxlbnQ9dHJ1ZSkge1xuICAgIHRoaXMucGlubmVkUG9zaXRpb24gPSBwb2ludC5jbG9uZSgpXG4gICAgdGhpcy5tb3ZlKHRoaXMucGlubmVkUG9zaXRpb24sIHRpbWUsIHNpbGVudClcbiAgfVxuXG4gIHJlc2V0UG9zaXRpb25Ub0luaXRpYWwgKCkge1xuICAgIHRoaXMucGluUG9zaXRpb24odGhpcy5pbml0aWFsUG9zaXRpb24pXG4gIH1cblxuICByZWZyZXNoUG9zaXRpb24gKCkge1xuICAgIHRoaXMuc2V0UG9zaXRpb24odGhpcy5nZXRQb3NpdGlvbigpKVxuICB9XG5cbiAgc2V0UG9zaXRpb24ocG9pbnQpIHtcbiAgICBwb2ludCA9IHBvaW50LmNsb25lKClcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9pbnRcbiAgICB0aGlzLl9zZXRUcmFuc2l0aW9uKDApXG4gICAgdGhpcy5fc2V0VHJhbnNsYXRlKHBvaW50LnN1Yih0aGlzLm9mZnNldCkpXG4gIH1cblxuICBkZXRlcm1pbmVEaXJlY3Rpb24ocG9pbnQpIHtcbiAgICB0aGlzLl9wcmV2aW91c0RpcmVjdGlvblBvc2l0aW9uIHx8PSB0aGlzLl9zdGFydFBvc2l0aW9uXG5cbiAgICB0aGlzLmxlZnREaXJlY3Rpb24gPSAodGhpcy5fcHJldmlvdXNEaXJlY3Rpb25Qb3NpdGlvbi54IDwgcG9pbnQueClcbiAgICB0aGlzLnJpZ2h0RGlyZWN0aW9uID0gKHRoaXMuX3ByZXZpb3VzRGlyZWN0aW9uUG9zaXRpb24ueCA+IHBvaW50LngpXG4gICAgdGhpcy51cERpcmVjdGlvbiA9ICh0aGlzLl9wcmV2aW91c0RpcmVjdGlvblBvc2l0aW9uLnkgPiBwb2ludC55KVxuICAgIHRoaXMuZG93bkRpcmVjdGlvbiA9ICh0aGlzLl9wcmV2aW91c0RpcmVjdGlvblBvc2l0aW9uLnkgPCBwb2ludC55KVxuXG4gICAgdGhpcy5fcHJldmlvdXNEaXJlY3Rpb25Qb3NpdGlvbiA9IHBvaW50XG4gIH1cblxuICBzZWVtc1Njcm9sbGluZygpIHtcbiAgICByZXR1cm4gKCtuZXcgRGF0ZSgpIC0gdGhpcy5fc3RhcnRUb3VjaFRpbWVzdGFtcCkgPCB0aGlzLnRvdWNoRHJhZ2dpbmdUaHJlc2hvbGRcbiAgfVxuXG4gIHNob3VsZFVzZU5hdGl2ZURyYWdBbmREcm9wKCkge1xuICAgIGlmICh0aGlzLmlzVG91Y2hFdmVudCkge1xuICAgICAgcmV0dXJuIHRoaXMubmF0aXZlRHJhZ0FuZERyb3AgJiYgdGhpcy5lbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3BPblRvdWNoXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLm5hdGl2ZURyYWdBbmREcm9wXG4gICAgfVxuICB9XG5cbiAgZHJhZ1N0YXJ0KGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLl9lbmFibGUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuaXNUb3VjaEV2ZW50ID0gKGlzVG91Y2ggJiYgKGV2ZW50IGluc3RhbmNlb2Ygd2luZG93LlRvdWNoRXZlbnQpKVxuXG4gICAgdGhpcy50b3VjaFBvaW50ID0gdGhpcy5fc3RhcnRUb3VjaFBvaW50ID0gbmV3IFBvaW50KFxuICAgICAgdGhpcy5pc1RvdWNoRXZlbnQgPyBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCA6IGV2ZW50LmNsaWVudFgsXG4gICAgICB0aGlzLmlzVG91Y2hFdmVudCA/IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZIDogZXZlbnQuY2xpZW50WVxuICAgIClcblxuICAgIHRoaXMuX3N0YXJ0UG9zaXRpb24gPSB0aGlzLmdldFBvc2l0aW9uKClcbiAgICBpZiAodGhpcy5pc1RvdWNoRXZlbnQpIHtcbiAgICAgIHRoaXMuX3RvdWNoSWQgPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5pZGVudGlmaWVyXG4gICAgICB0aGlzLl9zdGFydFRvdWNoVGltZXN0YW1wID0gK25ldyBEYXRlKClcbiAgICB9XG5cbiAgICB0aGlzLl9zdGFydFNjcm9sbFBvaW50ID0gbmV3IFBvaW50KHdpbmRvdy5zY3JvbGxYLCB3aW5kb3cuc2Nyb2xsWSlcblxuICAgIGlmIChldmVudC50YXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElucHV0RWxlbWVudCB8fFxuICAgICAgICAgIGV2ZW50LnRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSW5wdXRFbGVtZW50KSB7XG4gICAgICBldmVudC50YXJnZXQuZm9jdXMoKVxuICAgIH1cblxuICAgIGlmICh0aGlzLnNob3VsZFVzZU5hdGl2ZURyYWdBbmREcm9wKCkpIHtcbiAgICAgIGlmICh0aGlzLmlzVG91Y2hFdmVudCAmJiB0aGlzLmVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcE9uVG91Y2gpIHtcbiAgICAgICAgY29uc3QgZW11bGF0ZU9uRmlyc3RNb3ZlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuc2VlbXNTY3JvbGxpbmcoKSkge1xuICAgICAgICAgICAgdGhpcy5jYW5jZWxEcmFnZ2luZygpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wKGV2ZW50KVxuICAgICAgICAgIH1cbiAgICAgICAgICBjYW5jZWxFbXVsYXRpb24oKVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNhbmNlbEVtdWxhdGlvbiA9ICgpID0+IHtcbiAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIGVtdWxhdGVPbkZpcnN0TW92ZSlcbiAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgY2FuY2VsRW11bGF0aW9uKVxuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCBlbXVsYXRlT25GaXJzdE1vdmUsIHBhc3NpdmVGYWxzZSlcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIGNhbmNlbEVtdWxhdGlvbiwgcGFzc2l2ZUZhbHNlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmRyYWdnYWJsZSA9IHRydWVcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX25hdGl2ZURyYWdFbmQsIHBhc3NpdmVGYWxzZSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSwgcGFzc2l2ZUZhbHNlKVxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSwgcGFzc2l2ZUZhbHNlKVxuXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZCwgcGFzc2l2ZUZhbHNlKVxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQsIHBhc3NpdmVGYWxzZSlcbiAgICB9XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fc2Nyb2xsKVxuXG4gICAgdGhpcy5lbWl0KCdkcmFnOnN0YXJ0JylcbiAgfVxuXG4gIGRyYWdNb3ZlKGV2ZW50KSB7XG4gICAgbGV0IHRvdWNoXG5cbiAgICB0aGlzLmlzRHJhZ2dpbmcgPSB0cnVlXG5cbiAgICB0aGlzLmlzVG91Y2hFdmVudCA9IChpc1RvdWNoICYmIChldmVudCBpbnN0YW5jZW9mIHdpbmRvdy5Ub3VjaEV2ZW50KSlcbiAgICBpZiAodGhpcy5pc1RvdWNoRXZlbnQpIHtcbiAgICAgIHRvdWNoID0gZ2V0VG91Y2hCeUlEKGV2ZW50LCB0aGlzLl90b3VjaElkKVxuXG4gICAgICBpZiAoIXRvdWNoKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5zZWVtc1Njcm9sbGluZygpKSB7XG4gICAgICAgIHRoaXMuY2FuY2VsRHJhZ2dpbmcoKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB0aGlzLnRvdWNoUG9pbnQgPSBuZXcgUG9pbnQoXG4gICAgICB0aGlzLmlzVG91Y2hFdmVudCA/IHRvdWNoLnBhZ2VYIDogZXZlbnQuY2xpZW50WCxcbiAgICAgIHRoaXMuaXNUb3VjaEV2ZW50ID8gdG91Y2gucGFnZVkgOiBldmVudC5jbGllbnRZXG4gICAgKVxuXG4gICAgbGV0IHBvaW50ID0gdGhpcy5fc3RhcnRQb3NpdGlvbi5hZGQodGhpcy50b3VjaFBvaW50LnN1Yih0aGlzLl9zdGFydFRvdWNoUG9pbnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMuc2Nyb2xsUG9pbnQuc3ViKHRoaXMuX3N0YXJ0U2Nyb2xsUG9pbnQpKVxuXG4gICAgcG9pbnQgPSB0aGlzLmJvdW5kaW5nLmJvdW5kKHBvaW50LCB0aGlzLmdldFNpemUoKSlcbiAgICB0aGlzLmRldGVybWluZURpcmVjdGlvbihwb2ludClcbiAgICB0aGlzLm1vdmUocG9pbnQpXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RyYWdlZS1hY3RpdmUnKVxuICB9XG5cbiAgZHJhZ0VuZChldmVudCkge1xuICAgIHRoaXMuaXNUb3VjaEV2ZW50ID0gKGlzVG91Y2ggJiYgKGV2ZW50IGluc3RhbmNlb2Ygd2luZG93LlRvdWNoRXZlbnQpKVxuXG4gICAgaWYgKHRoaXMuaXNUb3VjaEV2ZW50ICYmICFnZXRUb3VjaEJ5SUQoZXZlbnQsIHRoaXMuX3RvdWNoSWQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc0RyYWdnaW5nKSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIH1cblxuICAgIHRoaXMuZHJhZ0VuZEFjdGlvbigpXG4gICAgdGhpcy5lbWl0KCdkcmFnOmVuZCcpXG4gICAgdGhpcy5jYW5jZWxEcmFnZ2luZygpXG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZWUtYWN0aXZlJykpXG4gIH1cblxuICBvblNjcm9sbChfZXZlbnQpIHtcbiAgICBsZXQgcG9pbnQgPSB0aGlzLl9zdGFydFBvc2l0aW9uLmFkZCh0aGlzLnRvdWNoUG9pbnQuc3ViKHRoaXMuX3N0YXJ0VG91Y2hQb2ludCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy5zY3JvbGxQb2ludC5zdWIodGhpcy5fc3RhcnRTY3JvbGxQb2ludCkpXG5cbiAgICBwb2ludCA9IHRoaXMuYm91bmRpbmcuYm91bmQocG9pbnQsIHRoaXMuZ2V0U2l6ZSgpKVxuICAgIGlmICghdGhpcy5uYXRpdmVEcmFnQW5kRHJvcCkge1xuICAgICAgdGhpcy5kZXRlcm1pbmVEaXJlY3Rpb24ocG9pbnQpXG4gICAgICB0aGlzLm1vdmUocG9pbnQpXG4gICAgfVxuICB9XG5cbiAgbmF0aXZlRHJhZ1N0YXJ0KGV2ZW50KSB7XG4gICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQnLCAnRmlyZUZveCBmaXgnKVxuICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gJ21vdmUnXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCB0aGlzLl9uYXRpdmVEcmFnT3ZlcilcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgdGhpcy5fbmF0aXZlRHJvcClcbiAgfVxuXG4gIG5hdGl2ZURyYWdPdmVyKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gJ21vdmUnXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RyYWdlZS1wbGFjZWhvbGRlcicpXG4gICAgaWYgKGV2ZW50LmNsaWVudFggPT09IDAgJiYgZXZlbnQuY2xpZW50WSA9PT0gMCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy50b3VjaFBvaW50ID0gbmV3IFBvaW50KGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpXG4gICAgbGV0IHBvaW50ID0gdGhpcy5fc3RhcnRQb3NpdGlvbi5hZGQodGhpcy50b3VjaFBvaW50LnN1Yih0aGlzLl9zdGFydFRvdWNoUG9pbnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMuc2Nyb2xsUG9pbnQuc3ViKHRoaXMuX3N0YXJ0U2Nyb2xsUG9pbnQpKVxuICAgIHBvaW50ID0gdGhpcy5ib3VuZGluZy5ib3VuZChwb2ludCwgdGhpcy5nZXRTaXplKCkpXG4gICAgdGhpcy5kZXRlcm1pbmVEaXJlY3Rpb24ocG9pbnQpXG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvaW50XG4gICAgdGhpcy5lbWl0KCdkcmFnOm1vdmUnKVxuICB9XG5cbiAgbmF0aXZlRHJhZ0VuZChfZXZlbnQpIHtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2VlLXBsYWNlaG9sZGVyJylcbiAgICB0aGlzLmRyYWdFbmRBY3Rpb24oKVxuICAgIHRoaXMuZW1pdCgnZHJhZzplbmQnKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgdGhpcy5fbmF0aXZlRHJhZ092ZXIpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIHRoaXMuX25hdGl2ZURyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX25hdGl2ZURyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJvcCcsIHRoaXMuX25hdGl2ZURyb3ApXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX3Njcm9sbClcbiAgICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZVxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2RyYWdnYWJsZScpXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdlZS1hY3RpdmUnKVxuICB9XG5cbiAgbmF0aXZlRHJvcChldmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgY2FuY2VsRHJhZ2dpbmcgKCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcblxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX25hdGl2ZURyYWdFbmQpXG5cbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fc2Nyb2xsKVxuXG4gICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2VcbiAgICB0aGlzLl9wcmV2aW91c0RpcmVjdGlvblBvc2l0aW9uID0gbnVsbFxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2RyYWdnYWJsZScpXG4gIH1cblxuICBjb3B5U3R5bGVzKHNvdXJjZSwgZGVzdGluYXRpb24pIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmNvcHlTdHlsZXMpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5jb3B5U3R5bGVzKHNvdXJjZSwgZGVzdGluYXRpb24pXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvcHlTdHlsZXMoc291cmNlLCBkZXN0aW5hdGlvbilcbiAgICB9XG4gIH1cblxuICBlbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3AoZXZlbnQpIHtcbiAgICBjb25zdCBjb250YWluZXJSZWN0ID0gdGhpcy5jb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICBjb25zdCBjbG9uZWRFbGVtZW50ID0gdGhpcy5lbGVtZW50LmNsb25lTm9kZSh0cnVlKVxuICAgIGNsb25lZEVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcGVydHldID0gJydcbiAgICB0aGlzLmNvcHlTdHlsZXModGhpcy5lbGVtZW50LCBjbG9uZWRFbGVtZW50KVxuICAgIGNsb25lZEVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjbG9uZWRFbGVtZW50KVxuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkcmFnZWUtcGxhY2Vob2xkZXInKVxuXG4gICAgY29uc3QgZW11bGF0aW9uRHJhZ2dhYmxlID0gbmV3IERyYWdnYWJsZShjbG9uZWRFbGVtZW50LCB7XG4gICAgICBjb250YWluZXI6IGRvY3VtZW50LmJvZHksXG4gICAgICB0b3VjaERyYWdnaW5nVGhyZXNob2xkOiAwLFxuICAgICAgYm91bmQocG9pbnQpIHtcbiAgICAgICAgcmV0dXJuIHBvaW50XG4gICAgICB9LFxuICAgICAgb246IHtcbiAgICAgICAgJ2RyYWc6bW92ZSc6ICgpID0+IHtcbiAgICAgICAgICBjb25zdCBjb250YWluZXJSZWN0UG9pbnQgPSBuZXcgUG9pbnQoY29udGFpbmVyUmVjdC5sZWZ0LCBjb250YWluZXJSZWN0LnRvcClcbiAgICAgICAgICB0aGlzLnBvc2l0aW9uID0gZW11bGF0aW9uRHJhZ2dhYmxlLnBvc2l0aW9uLnN1Yihjb250YWluZXJSZWN0UG9pbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdWIodGhpcy5fc3RhcnRTY3JvbGxQb2ludClcblxuICAgICAgICAgIHRoaXMuZGV0ZXJtaW5lRGlyZWN0aW9uKHRoaXMucG9zaXRpb24pXG4gICAgICAgICAgdGhpcy5lbWl0KCdkcmFnOm1vdmUnKVxuICAgICAgICB9LFxuICAgICAgICAnZHJhZzplbmQnOiAoKSA9PiB7XG4gICAgICAgICAgZW11bGF0aW9uRHJhZ2dhYmxlLmRlc3Ryb3koKVxuICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoY2xvbmVkRWxlbWVudClcbiAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2VlLXBsYWNlaG9sZGVyJylcbiAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2VlLWFjdGl2ZScpXG5cbiAgICAgICAgICB0aGlzLmVtaXQoJ2RyYWc6ZW5kJylcbiAgICAgICAgICB0aGlzLmRyYWdFbmRBY3Rpb24oKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IGNvbnRhaW5lclJlY3RQb2ludCA9IG5ldyBQb2ludChjb250YWluZXJSZWN0LmxlZnQsIGNvbnRhaW5lclJlY3QudG9wKVxuICAgIGVtdWxhdGlvbkRyYWdnYWJsZS5fc3RhcnRTY3JvbGxQb2ludCA9IHRoaXMuX3N0YXJ0U2Nyb2xsUG9pbnRcblxuICAgIGVtdWxhdGlvbkRyYWdnYWJsZS5tb3ZlKFxuICAgICAgdGhpcy5waW5uZWRQb3NpdGlvbi5hZGQoY29udGFpbmVyUmVjdFBvaW50KS5hZGQobmV3IFBvaW50KHdpbmRvdy5zY3JvbGxYLCB3aW5kb3cuc2Nyb2xsWSkpXG4gICAgKVxuXG4gICAgZW11bGF0aW9uRHJhZ2dhYmxlLmRyYWdTdGFydChldmVudClcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBkcmFnRW5kQWN0aW9uKCkge1xuICAgIHRoaXMucGluUG9zaXRpb24odGhpcy5wb3NpdGlvbilcbiAgfVxuXG4gIGdldFJlY3RhbmdsZSgpIHtcbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZSh0aGlzLnBvc2l0aW9uLCB0aGlzLmdldFNpemUoKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgaWYgKHRoaXMuYm91bmRpbmcucmVmcmVzaCkge1xuICAgICAgdGhpcy5ib3VuZGluZy5yZWZyZXNoKClcbiAgICB9XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuaGFuZGxlci5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQpXG4gICAgdGhpcy5oYW5kbGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydClcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgdGhpcy5fbmF0aXZlRHJhZ1N0YXJ0KVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIHRoaXMuX25hdGl2ZURyYWdPdmVyKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzLl9uYXRpdmVEcm9wKVxuICAgIHRoaXMucmVzZXRFbWl0dGVyKClcblxuICAgIGNvbnN0IGluZGV4ID0gZHJhZ2dhYmxlcy5pbmRleE9mKHRoaXMpXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIGRyYWdnYWJsZXMuc3BsaWNlKGluZGV4LCAxKVxuICAgIH1cbiAgfVxuXG4gIGdldCBjb250YWluZXIoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9jb250YWluZXIgPSB0aGlzLl9jb250YWluZXIgfHwgdGhpcy5vcHRpb25zLmNvbnRhaW5lciB8fCB0aGlzLm9wdGlvbnMucGFyZW50IHx8IGdldERlZmF1bHRDb250YWluZXIodGhpcy5lbGVtZW50KSlcbiAgfVxuXG4gIGdldCBoYW5kbGVyKCkge1xuICAgIGlmICghdGhpcy5faGFuZGxlcikge1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuaGFuZGxlciA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhpcy5faGFuZGxlciA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKHRoaXMub3B0aW9ucy5oYW5kbGVyKSB8fCB0aGlzLmVsZW1lbnRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZXIgPSB0aGlzLm9wdGlvbnMuaGFuZGxlciB8fCB0aGlzLmVsZW1lbnRcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5faGFuZGxlclxuICB9XG5cbiAgZ2V0IG5hdGl2ZURyYWdBbmREcm9wKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMubmF0aXZlRHJhZ0FuZERyb3AgfHwgZmFsc2VcbiAgfVxuXG4gIGdldCBlbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3BPblRvdWNoKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wT25Ub3VjaCB8fCBmYWxzZVxuICB9XG5cbiAgZ2V0IHNob3VsZFJlbW92ZVplcm9UcmFuc2xhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5zaG91bGRSZW1vdmVaZXJvVHJhbnNsYXRlIHx8IGZhbHNlXG4gIH1cblxuICBnZXQgdG91Y2hEcmFnZ2luZ1RocmVzaG9sZCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLnRvdWNoRHJhZ2dpbmdUaHJlc2hvbGQgfHwgMFxuICB9XG5cbiAgZ2V0IGRyYWdPdmVyVGhyb3R0bGVEdXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmRyYWdPdmVyVGhyb3R0bGVEdXJhdGlvbiB8fCAxNlxuICB9XG5cbiAgZ2V0IHNjcm9sbFBvaW50KCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQod2luZG93LnNjcm9sbFgsIHdpbmRvdy5zY3JvbGxZKVxuICB9XG5cbiAgZ2V0IGVuYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlXG4gIH1cblxuICBzZXQgZW5hYmxlKGVuYWJsZSkge1xuICAgIGlmIChlbmFibGUpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZWUtZGlzYWJsZScpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkcmFnZWUtZGlzYWJsZScpXG4gICAgfVxuXG4gICAgdGhpcy5fZW5hYmxlID0gZW5hYmxlXG4gIH1cbn1cblxuRHJhZ2dhYmxlLmVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKClcbkRyYWdnYWJsZS5lbWl0dGVyLm9uKCdkcmFnZ2FibGU6Y3JlYXRlJywgYWRkVG9EZWZhdWx0U2NvcGUpXG4iLCJ2YXIgcmVzaXplT2JzZXJ2ZXJzID0gW107XG5leHBvcnQgeyByZXNpemVPYnNlcnZlcnMgfTtcbiIsImltcG9ydCB7IHJlc2l6ZU9ic2VydmVycyB9IGZyb20gJy4uL3V0aWxzL3Jlc2l6ZU9ic2VydmVycyc7XG52YXIgaGFzQWN0aXZlT2JzZXJ2YXRpb25zID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiByZXNpemVPYnNlcnZlcnMuc29tZShmdW5jdGlvbiAocm8pIHsgcmV0dXJuIHJvLmFjdGl2ZVRhcmdldHMubGVuZ3RoID4gMDsgfSk7XG59O1xuZXhwb3J0IHsgaGFzQWN0aXZlT2JzZXJ2YXRpb25zIH07XG4iLCJpbXBvcnQgeyByZXNpemVPYnNlcnZlcnMgfSBmcm9tICcuLi91dGlscy9yZXNpemVPYnNlcnZlcnMnO1xudmFyIGhhc1NraXBwZWRPYnNlcnZhdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHJlc2l6ZU9ic2VydmVycy5zb21lKGZ1bmN0aW9uIChybykgeyByZXR1cm4gcm8uc2tpcHBlZFRhcmdldHMubGVuZ3RoID4gMDsgfSk7XG59O1xuZXhwb3J0IHsgaGFzU2tpcHBlZE9ic2VydmF0aW9ucyB9O1xuIiwidmFyIG1zZyA9ICdSZXNpemVPYnNlcnZlciBsb29wIGNvbXBsZXRlZCB3aXRoIHVuZGVsaXZlcmVkIG5vdGlmaWNhdGlvbnMuJztcbnZhciBkZWxpdmVyUmVzaXplTG9vcEVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBldmVudDtcbiAgICBpZiAodHlwZW9mIEVycm9yRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZXZlbnQgPSBuZXcgRXJyb3JFdmVudCgnZXJyb3InLCB7XG4gICAgICAgICAgICBtZXNzYWdlOiBtc2dcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpO1xuICAgICAgICBldmVudC5pbml0RXZlbnQoJ2Vycm9yJywgZmFsc2UsIGZhbHNlKTtcbiAgICAgICAgZXZlbnQubWVzc2FnZSA9IG1zZztcbiAgICB9XG4gICAgd2luZG93LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xufTtcbmV4cG9ydCB7IGRlbGl2ZXJSZXNpemVMb29wRXJyb3IgfTtcbiIsInZhciBSZXNpemVPYnNlcnZlckJveE9wdGlvbnM7XG4oZnVuY3Rpb24gKFJlc2l6ZU9ic2VydmVyQm94T3B0aW9ucykge1xuICAgIFJlc2l6ZU9ic2VydmVyQm94T3B0aW9uc1tcIkJPUkRFUl9CT1hcIl0gPSBcImJvcmRlci1ib3hcIjtcbiAgICBSZXNpemVPYnNlcnZlckJveE9wdGlvbnNbXCJDT05URU5UX0JPWFwiXSA9IFwiY29udGVudC1ib3hcIjtcbiAgICBSZXNpemVPYnNlcnZlckJveE9wdGlvbnNbXCJERVZJQ0VfUElYRUxfQ09OVEVOVF9CT1hcIl0gPSBcImRldmljZS1waXhlbC1jb250ZW50LWJveFwiO1xufSkoUmVzaXplT2JzZXJ2ZXJCb3hPcHRpb25zIHx8IChSZXNpemVPYnNlcnZlckJveE9wdGlvbnMgPSB7fSkpO1xuZXhwb3J0IHsgUmVzaXplT2JzZXJ2ZXJCb3hPcHRpb25zIH07XG4iLCJleHBvcnQgdmFyIGZyZWV6ZSA9IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIE9iamVjdC5mcmVlemUob2JqKTsgfTtcbiIsImltcG9ydCB7IGZyZWV6ZSB9IGZyb20gJy4vdXRpbHMvZnJlZXplJztcbnZhciBSZXNpemVPYnNlcnZlclNpemUgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFJlc2l6ZU9ic2VydmVyU2l6ZShpbmxpbmVTaXplLCBibG9ja1NpemUpIHtcbiAgICAgICAgdGhpcy5pbmxpbmVTaXplID0gaW5saW5lU2l6ZTtcbiAgICAgICAgdGhpcy5ibG9ja1NpemUgPSBibG9ja1NpemU7XG4gICAgICAgIGZyZWV6ZSh0aGlzKTtcbiAgICB9XG4gICAgcmV0dXJuIFJlc2l6ZU9ic2VydmVyU2l6ZTtcbn0oKSk7XG5leHBvcnQgeyBSZXNpemVPYnNlcnZlclNpemUgfTtcbiIsImltcG9ydCB7IGZyZWV6ZSB9IGZyb20gJy4vdXRpbHMvZnJlZXplJztcbnZhciBET01SZWN0UmVhZE9ubHkgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIERPTVJlY3RSZWFkT25seSh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHRoaXMudG9wID0gdGhpcy55O1xuICAgICAgICB0aGlzLmxlZnQgPSB0aGlzLng7XG4gICAgICAgIHRoaXMuYm90dG9tID0gdGhpcy50b3AgKyB0aGlzLmhlaWdodDtcbiAgICAgICAgdGhpcy5yaWdodCA9IHRoaXMubGVmdCArIHRoaXMud2lkdGg7XG4gICAgICAgIHJldHVybiBmcmVlemUodGhpcyk7XG4gICAgfVxuICAgIERPTVJlY3RSZWFkT25seS5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2EgPSB0aGlzLCB4ID0gX2EueCwgeSA9IF9hLnksIHRvcCA9IF9hLnRvcCwgcmlnaHQgPSBfYS5yaWdodCwgYm90dG9tID0gX2EuYm90dG9tLCBsZWZ0ID0gX2EubGVmdCwgd2lkdGggPSBfYS53aWR0aCwgaGVpZ2h0ID0gX2EuaGVpZ2h0O1xuICAgICAgICByZXR1cm4geyB4OiB4LCB5OiB5LCB0b3A6IHRvcCwgcmlnaHQ6IHJpZ2h0LCBib3R0b206IGJvdHRvbSwgbGVmdDogbGVmdCwgd2lkdGg6IHdpZHRoLCBoZWlnaHQ6IGhlaWdodCB9O1xuICAgIH07XG4gICAgRE9NUmVjdFJlYWRPbmx5LmZyb21SZWN0ID0gZnVuY3Rpb24gKHJlY3RhbmdsZSkge1xuICAgICAgICByZXR1cm4gbmV3IERPTVJlY3RSZWFkT25seShyZWN0YW5nbGUueCwgcmVjdGFuZ2xlLnksIHJlY3RhbmdsZS53aWR0aCwgcmVjdGFuZ2xlLmhlaWdodCk7XG4gICAgfTtcbiAgICByZXR1cm4gRE9NUmVjdFJlYWRPbmx5O1xufSgpKTtcbmV4cG9ydCB7IERPTVJlY3RSZWFkT25seSB9O1xuIiwidmFyIGlzU1ZHID0gZnVuY3Rpb24gKHRhcmdldCkgeyByZXR1cm4gdGFyZ2V0IGluc3RhbmNlb2YgU1ZHRWxlbWVudCAmJiAnZ2V0QkJveCcgaW4gdGFyZ2V0OyB9O1xudmFyIGlzSGlkZGVuID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGlmIChpc1NWRyh0YXJnZXQpKSB7XG4gICAgICAgIHZhciBfYSA9IHRhcmdldC5nZXRCQm94KCksIHdpZHRoID0gX2Eud2lkdGgsIGhlaWdodCA9IF9hLmhlaWdodDtcbiAgICAgICAgcmV0dXJuICF3aWR0aCAmJiAhaGVpZ2h0O1xuICAgIH1cbiAgICB2YXIgX2IgPSB0YXJnZXQsIG9mZnNldFdpZHRoID0gX2Iub2Zmc2V0V2lkdGgsIG9mZnNldEhlaWdodCA9IF9iLm9mZnNldEhlaWdodDtcbiAgICByZXR1cm4gIShvZmZzZXRXaWR0aCB8fCBvZmZzZXRIZWlnaHQgfHwgdGFyZ2V0LmdldENsaWVudFJlY3RzKCkubGVuZ3RoKTtcbn07XG52YXIgaXNFbGVtZW50ID0gZnVuY3Rpb24gKG9iaikge1xuICAgIHZhciBfYSwgX2I7XG4gICAgaWYgKG9iaiBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHZhciBzY29wZSA9IChfYiA9IChfYSA9IG9iaikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLm93bmVyRG9jdW1lbnQpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5kZWZhdWx0VmlldztcbiAgICByZXR1cm4gISEoc2NvcGUgJiYgb2JqIGluc3RhbmNlb2Ygc2NvcGUuRWxlbWVudCk7XG59O1xudmFyIGlzUmVwbGFjZWRFbGVtZW50ID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIHN3aXRjaCAodGFyZ2V0LnRhZ05hbWUpIHtcbiAgICAgICAgY2FzZSAnSU5QVVQnOlxuICAgICAgICAgICAgaWYgKHRhcmdldC50eXBlICE9PSAnaW1hZ2UnKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIGNhc2UgJ1ZJREVPJzpcbiAgICAgICAgY2FzZSAnQVVESU8nOlxuICAgICAgICBjYXNlICdFTUJFRCc6XG4gICAgICAgIGNhc2UgJ09CSkVDVCc6XG4gICAgICAgIGNhc2UgJ0NBTlZBUyc6XG4gICAgICAgIGNhc2UgJ0lGUkFNRSc6XG4gICAgICAgIGNhc2UgJ0lNRyc6XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufTtcbmV4cG9ydCB7IGlzU1ZHLCBpc0hpZGRlbiwgaXNFbGVtZW50LCBpc1JlcGxhY2VkRWxlbWVudCB9O1xuIiwiZXhwb3J0IHZhciBnbG9iYWwgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHt9O1xuIiwiaW1wb3J0IHsgUmVzaXplT2JzZXJ2ZXJCb3hPcHRpb25zIH0gZnJvbSAnLi4vUmVzaXplT2JzZXJ2ZXJCb3hPcHRpb25zJztcbmltcG9ydCB7IFJlc2l6ZU9ic2VydmVyU2l6ZSB9IGZyb20gJy4uL1Jlc2l6ZU9ic2VydmVyU2l6ZSc7XG5pbXBvcnQgeyBET01SZWN0UmVhZE9ubHkgfSBmcm9tICcuLi9ET01SZWN0UmVhZE9ubHknO1xuaW1wb3J0IHsgaXNTVkcsIGlzSGlkZGVuIH0gZnJvbSAnLi4vdXRpbHMvZWxlbWVudCc7XG5pbXBvcnQgeyBmcmVlemUgfSBmcm9tICcuLi91dGlscy9mcmVlemUnO1xuaW1wb3J0IHsgZ2xvYmFsIH0gZnJvbSAnLi4vdXRpbHMvZ2xvYmFsJztcbnZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG52YXIgc2Nyb2xsUmVnZXhwID0gL2F1dG98c2Nyb2xsLztcbnZhciB2ZXJ0aWNhbFJlZ2V4cCA9IC9edGJ8dmVydGljYWwvO1xudmFyIElFID0gKC9tc2llfHRyaWRlbnQvaSkudGVzdChnbG9iYWwubmF2aWdhdG9yICYmIGdsb2JhbC5uYXZpZ2F0b3IudXNlckFnZW50KTtcbnZhciBwYXJzZURpbWVuc2lvbiA9IGZ1bmN0aW9uIChwaXhlbCkgeyByZXR1cm4gcGFyc2VGbG9hdChwaXhlbCB8fCAnMCcpOyB9O1xudmFyIHNpemUgPSBmdW5jdGlvbiAoaW5saW5lU2l6ZSwgYmxvY2tTaXplLCBzd2l0Y2hTaXplcykge1xuICAgIGlmIChpbmxpbmVTaXplID09PSB2b2lkIDApIHsgaW5saW5lU2l6ZSA9IDA7IH1cbiAgICBpZiAoYmxvY2tTaXplID09PSB2b2lkIDApIHsgYmxvY2tTaXplID0gMDsgfVxuICAgIGlmIChzd2l0Y2hTaXplcyA9PT0gdm9pZCAwKSB7IHN3aXRjaFNpemVzID0gZmFsc2U7IH1cbiAgICByZXR1cm4gbmV3IFJlc2l6ZU9ic2VydmVyU2l6ZSgoc3dpdGNoU2l6ZXMgPyBibG9ja1NpemUgOiBpbmxpbmVTaXplKSB8fCAwLCAoc3dpdGNoU2l6ZXMgPyBpbmxpbmVTaXplIDogYmxvY2tTaXplKSB8fCAwKTtcbn07XG52YXIgemVyb0JveGVzID0gZnJlZXplKHtcbiAgICBkZXZpY2VQaXhlbENvbnRlbnRCb3hTaXplOiBzaXplKCksXG4gICAgYm9yZGVyQm94U2l6ZTogc2l6ZSgpLFxuICAgIGNvbnRlbnRCb3hTaXplOiBzaXplKCksXG4gICAgY29udGVudFJlY3Q6IG5ldyBET01SZWN0UmVhZE9ubHkoMCwgMCwgMCwgMClcbn0pO1xudmFyIGNhbGN1bGF0ZUJveFNpemVzID0gZnVuY3Rpb24gKHRhcmdldCwgZm9yY2VSZWNhbGN1bGF0aW9uKSB7XG4gICAgaWYgKGZvcmNlUmVjYWxjdWxhdGlvbiA9PT0gdm9pZCAwKSB7IGZvcmNlUmVjYWxjdWxhdGlvbiA9IGZhbHNlOyB9XG4gICAgaWYgKGNhY2hlLmhhcyh0YXJnZXQpICYmICFmb3JjZVJlY2FsY3VsYXRpb24pIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlLmdldCh0YXJnZXQpO1xuICAgIH1cbiAgICBpZiAoaXNIaWRkZW4odGFyZ2V0KSkge1xuICAgICAgICBjYWNoZS5zZXQodGFyZ2V0LCB6ZXJvQm94ZXMpO1xuICAgICAgICByZXR1cm4gemVyb0JveGVzO1xuICAgIH1cbiAgICB2YXIgY3MgPSBnZXRDb21wdXRlZFN0eWxlKHRhcmdldCk7XG4gICAgdmFyIHN2ZyA9IGlzU1ZHKHRhcmdldCkgJiYgdGFyZ2V0Lm93bmVyU1ZHRWxlbWVudCAmJiB0YXJnZXQuZ2V0QkJveCgpO1xuICAgIHZhciByZW1vdmVQYWRkaW5nID0gIUlFICYmIGNzLmJveFNpemluZyA9PT0gJ2JvcmRlci1ib3gnO1xuICAgIHZhciBzd2l0Y2hTaXplcyA9IHZlcnRpY2FsUmVnZXhwLnRlc3QoY3Mud3JpdGluZ01vZGUgfHwgJycpO1xuICAgIHZhciBjYW5TY3JvbGxWZXJ0aWNhbGx5ID0gIXN2ZyAmJiBzY3JvbGxSZWdleHAudGVzdChjcy5vdmVyZmxvd1kgfHwgJycpO1xuICAgIHZhciBjYW5TY3JvbGxIb3Jpem9udGFsbHkgPSAhc3ZnICYmIHNjcm9sbFJlZ2V4cC50ZXN0KGNzLm92ZXJmbG93WCB8fCAnJyk7XG4gICAgdmFyIHBhZGRpbmdUb3AgPSBzdmcgPyAwIDogcGFyc2VEaW1lbnNpb24oY3MucGFkZGluZ1RvcCk7XG4gICAgdmFyIHBhZGRpbmdSaWdodCA9IHN2ZyA/IDAgOiBwYXJzZURpbWVuc2lvbihjcy5wYWRkaW5nUmlnaHQpO1xuICAgIHZhciBwYWRkaW5nQm90dG9tID0gc3ZnID8gMCA6IHBhcnNlRGltZW5zaW9uKGNzLnBhZGRpbmdCb3R0b20pO1xuICAgIHZhciBwYWRkaW5nTGVmdCA9IHN2ZyA/IDAgOiBwYXJzZURpbWVuc2lvbihjcy5wYWRkaW5nTGVmdCk7XG4gICAgdmFyIGJvcmRlclRvcCA9IHN2ZyA/IDAgOiBwYXJzZURpbWVuc2lvbihjcy5ib3JkZXJUb3BXaWR0aCk7XG4gICAgdmFyIGJvcmRlclJpZ2h0ID0gc3ZnID8gMCA6IHBhcnNlRGltZW5zaW9uKGNzLmJvcmRlclJpZ2h0V2lkdGgpO1xuICAgIHZhciBib3JkZXJCb3R0b20gPSBzdmcgPyAwIDogcGFyc2VEaW1lbnNpb24oY3MuYm9yZGVyQm90dG9tV2lkdGgpO1xuICAgIHZhciBib3JkZXJMZWZ0ID0gc3ZnID8gMCA6IHBhcnNlRGltZW5zaW9uKGNzLmJvcmRlckxlZnRXaWR0aCk7XG4gICAgdmFyIGhvcml6b250YWxQYWRkaW5nID0gcGFkZGluZ0xlZnQgKyBwYWRkaW5nUmlnaHQ7XG4gICAgdmFyIHZlcnRpY2FsUGFkZGluZyA9IHBhZGRpbmdUb3AgKyBwYWRkaW5nQm90dG9tO1xuICAgIHZhciBob3Jpem9udGFsQm9yZGVyQXJlYSA9IGJvcmRlckxlZnQgKyBib3JkZXJSaWdodDtcbiAgICB2YXIgdmVydGljYWxCb3JkZXJBcmVhID0gYm9yZGVyVG9wICsgYm9yZGVyQm90dG9tO1xuICAgIHZhciBob3Jpem9udGFsU2Nyb2xsYmFyVGhpY2tuZXNzID0gIWNhblNjcm9sbEhvcml6b250YWxseSA/IDAgOiB0YXJnZXQub2Zmc2V0SGVpZ2h0IC0gdmVydGljYWxCb3JkZXJBcmVhIC0gdGFyZ2V0LmNsaWVudEhlaWdodDtcbiAgICB2YXIgdmVydGljYWxTY3JvbGxiYXJUaGlja25lc3MgPSAhY2FuU2Nyb2xsVmVydGljYWxseSA/IDAgOiB0YXJnZXQub2Zmc2V0V2lkdGggLSBob3Jpem9udGFsQm9yZGVyQXJlYSAtIHRhcmdldC5jbGllbnRXaWR0aDtcbiAgICB2YXIgd2lkdGhSZWR1Y3Rpb24gPSByZW1vdmVQYWRkaW5nID8gaG9yaXpvbnRhbFBhZGRpbmcgKyBob3Jpem9udGFsQm9yZGVyQXJlYSA6IDA7XG4gICAgdmFyIGhlaWdodFJlZHVjdGlvbiA9IHJlbW92ZVBhZGRpbmcgPyB2ZXJ0aWNhbFBhZGRpbmcgKyB2ZXJ0aWNhbEJvcmRlckFyZWEgOiAwO1xuICAgIHZhciBjb250ZW50V2lkdGggPSBzdmcgPyBzdmcud2lkdGggOiBwYXJzZURpbWVuc2lvbihjcy53aWR0aCkgLSB3aWR0aFJlZHVjdGlvbiAtIHZlcnRpY2FsU2Nyb2xsYmFyVGhpY2tuZXNzO1xuICAgIHZhciBjb250ZW50SGVpZ2h0ID0gc3ZnID8gc3ZnLmhlaWdodCA6IHBhcnNlRGltZW5zaW9uKGNzLmhlaWdodCkgLSBoZWlnaHRSZWR1Y3Rpb24gLSBob3Jpem9udGFsU2Nyb2xsYmFyVGhpY2tuZXNzO1xuICAgIHZhciBib3JkZXJCb3hXaWR0aCA9IGNvbnRlbnRXaWR0aCArIGhvcml6b250YWxQYWRkaW5nICsgdmVydGljYWxTY3JvbGxiYXJUaGlja25lc3MgKyBob3Jpem9udGFsQm9yZGVyQXJlYTtcbiAgICB2YXIgYm9yZGVyQm94SGVpZ2h0ID0gY29udGVudEhlaWdodCArIHZlcnRpY2FsUGFkZGluZyArIGhvcml6b250YWxTY3JvbGxiYXJUaGlja25lc3MgKyB2ZXJ0aWNhbEJvcmRlckFyZWE7XG4gICAgdmFyIGJveGVzID0gZnJlZXplKHtcbiAgICAgICAgZGV2aWNlUGl4ZWxDb250ZW50Qm94U2l6ZTogc2l6ZShNYXRoLnJvdW5kKGNvbnRlbnRXaWR0aCAqIGRldmljZVBpeGVsUmF0aW8pLCBNYXRoLnJvdW5kKGNvbnRlbnRIZWlnaHQgKiBkZXZpY2VQaXhlbFJhdGlvKSwgc3dpdGNoU2l6ZXMpLFxuICAgICAgICBib3JkZXJCb3hTaXplOiBzaXplKGJvcmRlckJveFdpZHRoLCBib3JkZXJCb3hIZWlnaHQsIHN3aXRjaFNpemVzKSxcbiAgICAgICAgY29udGVudEJveFNpemU6IHNpemUoY29udGVudFdpZHRoLCBjb250ZW50SGVpZ2h0LCBzd2l0Y2hTaXplcyksXG4gICAgICAgIGNvbnRlbnRSZWN0OiBuZXcgRE9NUmVjdFJlYWRPbmx5KHBhZGRpbmdMZWZ0LCBwYWRkaW5nVG9wLCBjb250ZW50V2lkdGgsIGNvbnRlbnRIZWlnaHQpXG4gICAgfSk7XG4gICAgY2FjaGUuc2V0KHRhcmdldCwgYm94ZXMpO1xuICAgIHJldHVybiBib3hlcztcbn07XG52YXIgY2FsY3VsYXRlQm94U2l6ZSA9IGZ1bmN0aW9uICh0YXJnZXQsIG9ic2VydmVkQm94LCBmb3JjZVJlY2FsY3VsYXRpb24pIHtcbiAgICB2YXIgX2EgPSBjYWxjdWxhdGVCb3hTaXplcyh0YXJnZXQsIGZvcmNlUmVjYWxjdWxhdGlvbiksIGJvcmRlckJveFNpemUgPSBfYS5ib3JkZXJCb3hTaXplLCBjb250ZW50Qm94U2l6ZSA9IF9hLmNvbnRlbnRCb3hTaXplLCBkZXZpY2VQaXhlbENvbnRlbnRCb3hTaXplID0gX2EuZGV2aWNlUGl4ZWxDb250ZW50Qm94U2l6ZTtcbiAgICBzd2l0Y2ggKG9ic2VydmVkQm94KSB7XG4gICAgICAgIGNhc2UgUmVzaXplT2JzZXJ2ZXJCb3hPcHRpb25zLkRFVklDRV9QSVhFTF9DT05URU5UX0JPWDpcbiAgICAgICAgICAgIHJldHVybiBkZXZpY2VQaXhlbENvbnRlbnRCb3hTaXplO1xuICAgICAgICBjYXNlIFJlc2l6ZU9ic2VydmVyQm94T3B0aW9ucy5CT1JERVJfQk9YOlxuICAgICAgICAgICAgcmV0dXJuIGJvcmRlckJveFNpemU7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gY29udGVudEJveFNpemU7XG4gICAgfVxufTtcbmV4cG9ydCB7IGNhbGN1bGF0ZUJveFNpemUsIGNhbGN1bGF0ZUJveFNpemVzIH07XG4iLCJpbXBvcnQgeyBjYWxjdWxhdGVCb3hTaXplcyB9IGZyb20gJy4vYWxnb3JpdGhtcy9jYWxjdWxhdGVCb3hTaXplJztcbmltcG9ydCB7IGZyZWV6ZSB9IGZyb20gJy4vdXRpbHMvZnJlZXplJztcbnZhciBSZXNpemVPYnNlcnZlckVudHJ5ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBSZXNpemVPYnNlcnZlckVudHJ5KHRhcmdldCkge1xuICAgICAgICB2YXIgYm94ZXMgPSBjYWxjdWxhdGVCb3hTaXplcyh0YXJnZXQpO1xuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgICAgICAgdGhpcy5jb250ZW50UmVjdCA9IGJveGVzLmNvbnRlbnRSZWN0O1xuICAgICAgICB0aGlzLmJvcmRlckJveFNpemUgPSBmcmVlemUoW2JveGVzLmJvcmRlckJveFNpemVdKTtcbiAgICAgICAgdGhpcy5jb250ZW50Qm94U2l6ZSA9IGZyZWV6ZShbYm94ZXMuY29udGVudEJveFNpemVdKTtcbiAgICAgICAgdGhpcy5kZXZpY2VQaXhlbENvbnRlbnRCb3hTaXplID0gZnJlZXplKFtib3hlcy5kZXZpY2VQaXhlbENvbnRlbnRCb3hTaXplXSk7XG4gICAgfVxuICAgIHJldHVybiBSZXNpemVPYnNlcnZlckVudHJ5O1xufSgpKTtcbmV4cG9ydCB7IFJlc2l6ZU9ic2VydmVyRW50cnkgfTtcbiIsImltcG9ydCB7IGlzSGlkZGVuIH0gZnJvbSAnLi4vdXRpbHMvZWxlbWVudCc7XG52YXIgY2FsY3VsYXRlRGVwdGhGb3JOb2RlID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICBpZiAoaXNIaWRkZW4obm9kZSkpIHtcbiAgICAgICAgcmV0dXJuIEluZmluaXR5O1xuICAgIH1cbiAgICB2YXIgZGVwdGggPSAwO1xuICAgIHZhciBwYXJlbnQgPSBub2RlLnBhcmVudE5vZGU7XG4gICAgd2hpbGUgKHBhcmVudCkge1xuICAgICAgICBkZXB0aCArPSAxO1xuICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50Tm9kZTtcbiAgICB9XG4gICAgcmV0dXJuIGRlcHRoO1xufTtcbmV4cG9ydCB7IGNhbGN1bGF0ZURlcHRoRm9yTm9kZSB9O1xuIiwiaW1wb3J0IHsgcmVzaXplT2JzZXJ2ZXJzIH0gZnJvbSAnLi4vdXRpbHMvcmVzaXplT2JzZXJ2ZXJzJztcbmltcG9ydCB7IFJlc2l6ZU9ic2VydmVyRW50cnkgfSBmcm9tICcuLi9SZXNpemVPYnNlcnZlckVudHJ5JztcbmltcG9ydCB7IGNhbGN1bGF0ZURlcHRoRm9yTm9kZSB9IGZyb20gJy4vY2FsY3VsYXRlRGVwdGhGb3JOb2RlJztcbmltcG9ydCB7IGNhbGN1bGF0ZUJveFNpemUgfSBmcm9tICcuL2NhbGN1bGF0ZUJveFNpemUnO1xudmFyIGJyb2FkY2FzdEFjdGl2ZU9ic2VydmF0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2hhbGxvd2VzdERlcHRoID0gSW5maW5pdHk7XG4gICAgdmFyIGNhbGxiYWNrcyA9IFtdO1xuICAgIHJlc2l6ZU9ic2VydmVycy5mb3JFYWNoKGZ1bmN0aW9uIHByb2Nlc3NPYnNlcnZlcihybykge1xuICAgICAgICBpZiAocm8uYWN0aXZlVGFyZ2V0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZW50cmllcyA9IFtdO1xuICAgICAgICByby5hY3RpdmVUYXJnZXRzLmZvckVhY2goZnVuY3Rpb24gcHJvY2Vzc1RhcmdldChvdCkge1xuICAgICAgICAgICAgdmFyIGVudHJ5ID0gbmV3IFJlc2l6ZU9ic2VydmVyRW50cnkob3QudGFyZ2V0KTtcbiAgICAgICAgICAgIHZhciB0YXJnZXREZXB0aCA9IGNhbGN1bGF0ZURlcHRoRm9yTm9kZShvdC50YXJnZXQpO1xuICAgICAgICAgICAgZW50cmllcy5wdXNoKGVudHJ5KTtcbiAgICAgICAgICAgIG90Lmxhc3RSZXBvcnRlZFNpemUgPSBjYWxjdWxhdGVCb3hTaXplKG90LnRhcmdldCwgb3Qub2JzZXJ2ZWRCb3gpO1xuICAgICAgICAgICAgaWYgKHRhcmdldERlcHRoIDwgc2hhbGxvd2VzdERlcHRoKSB7XG4gICAgICAgICAgICAgICAgc2hhbGxvd2VzdERlcHRoID0gdGFyZ2V0RGVwdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBjYWxsYmFja3MucHVzaChmdW5jdGlvbiByZXNpemVPYnNlcnZlckNhbGxiYWNrKCkge1xuICAgICAgICAgICAgcm8uY2FsbGJhY2suY2FsbChyby5vYnNlcnZlciwgZW50cmllcywgcm8ub2JzZXJ2ZXIpO1xuICAgICAgICB9KTtcbiAgICAgICAgcm8uYWN0aXZlVGFyZ2V0cy5zcGxpY2UoMCwgcm8uYWN0aXZlVGFyZ2V0cy5sZW5ndGgpO1xuICAgIH0pO1xuICAgIGZvciAodmFyIF9pID0gMCwgY2FsbGJhY2tzXzEgPSBjYWxsYmFja3M7IF9pIDwgY2FsbGJhY2tzXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IGNhbGxiYWNrc18xW19pXTtcbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICB9XG4gICAgcmV0dXJuIHNoYWxsb3dlc3REZXB0aDtcbn07XG5leHBvcnQgeyBicm9hZGNhc3RBY3RpdmVPYnNlcnZhdGlvbnMgfTtcbiIsImltcG9ydCB7IHJlc2l6ZU9ic2VydmVycyB9IGZyb20gJy4uL3V0aWxzL3Jlc2l6ZU9ic2VydmVycyc7XG5pbXBvcnQgeyBjYWxjdWxhdGVEZXB0aEZvck5vZGUgfSBmcm9tICcuL2NhbGN1bGF0ZURlcHRoRm9yTm9kZSc7XG52YXIgZ2F0aGVyQWN0aXZlT2JzZXJ2YXRpb25zQXREZXB0aCA9IGZ1bmN0aW9uIChkZXB0aCkge1xuICAgIHJlc2l6ZU9ic2VydmVycy5mb3JFYWNoKGZ1bmN0aW9uIHByb2Nlc3NPYnNlcnZlcihybykge1xuICAgICAgICByby5hY3RpdmVUYXJnZXRzLnNwbGljZSgwLCByby5hY3RpdmVUYXJnZXRzLmxlbmd0aCk7XG4gICAgICAgIHJvLnNraXBwZWRUYXJnZXRzLnNwbGljZSgwLCByby5za2lwcGVkVGFyZ2V0cy5sZW5ndGgpO1xuICAgICAgICByby5vYnNlcnZhdGlvblRhcmdldHMuZm9yRWFjaChmdW5jdGlvbiBwcm9jZXNzVGFyZ2V0KG90KSB7XG4gICAgICAgICAgICBpZiAob3QuaXNBY3RpdmUoKSkge1xuICAgICAgICAgICAgICAgIGlmIChjYWxjdWxhdGVEZXB0aEZvck5vZGUob3QudGFyZ2V0KSA+IGRlcHRoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJvLmFjdGl2ZVRhcmdldHMucHVzaChvdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByby5za2lwcGVkVGFyZ2V0cy5wdXNoKG90KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufTtcbmV4cG9ydCB7IGdhdGhlckFjdGl2ZU9ic2VydmF0aW9uc0F0RGVwdGggfTtcbiIsImltcG9ydCB7IGhhc0FjdGl2ZU9ic2VydmF0aW9ucyB9IGZyb20gJy4uL2FsZ29yaXRobXMvaGFzQWN0aXZlT2JzZXJ2YXRpb25zJztcbmltcG9ydCB7IGhhc1NraXBwZWRPYnNlcnZhdGlvbnMgfSBmcm9tICcuLi9hbGdvcml0aG1zL2hhc1NraXBwZWRPYnNlcnZhdGlvbnMnO1xuaW1wb3J0IHsgZGVsaXZlclJlc2l6ZUxvb3BFcnJvciB9IGZyb20gJy4uL2FsZ29yaXRobXMvZGVsaXZlclJlc2l6ZUxvb3BFcnJvcic7XG5pbXBvcnQgeyBicm9hZGNhc3RBY3RpdmVPYnNlcnZhdGlvbnMgfSBmcm9tICcuLi9hbGdvcml0aG1zL2Jyb2FkY2FzdEFjdGl2ZU9ic2VydmF0aW9ucyc7XG5pbXBvcnQgeyBnYXRoZXJBY3RpdmVPYnNlcnZhdGlvbnNBdERlcHRoIH0gZnJvbSAnLi4vYWxnb3JpdGhtcy9nYXRoZXJBY3RpdmVPYnNlcnZhdGlvbnNBdERlcHRoJztcbnZhciBwcm9jZXNzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBkZXB0aCA9IDA7XG4gICAgZ2F0aGVyQWN0aXZlT2JzZXJ2YXRpb25zQXREZXB0aChkZXB0aCk7XG4gICAgd2hpbGUgKGhhc0FjdGl2ZU9ic2VydmF0aW9ucygpKSB7XG4gICAgICAgIGRlcHRoID0gYnJvYWRjYXN0QWN0aXZlT2JzZXJ2YXRpb25zKCk7XG4gICAgICAgIGdhdGhlckFjdGl2ZU9ic2VydmF0aW9uc0F0RGVwdGgoZGVwdGgpO1xuICAgIH1cbiAgICBpZiAoaGFzU2tpcHBlZE9ic2VydmF0aW9ucygpKSB7XG4gICAgICAgIGRlbGl2ZXJSZXNpemVMb29wRXJyb3IoKTtcbiAgICB9XG4gICAgcmV0dXJuIGRlcHRoID4gMDtcbn07XG5leHBvcnQgeyBwcm9jZXNzIH07XG4iLCJ2YXIgdHJpZ2dlcjtcbnZhciBjYWxsYmFja3MgPSBbXTtcbnZhciBub3RpZnkgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBjYWxsYmFja3Muc3BsaWNlKDApLmZvckVhY2goZnVuY3Rpb24gKGNiKSB7IHJldHVybiBjYigpOyB9KTsgfTtcbnZhciBxdWV1ZU1pY3JvVGFzayA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgIGlmICghdHJpZ2dlcikge1xuICAgICAgICB2YXIgdG9nZ2xlXzEgPSAwO1xuICAgICAgICB2YXIgZWxfMSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICAgICAgdmFyIGNvbmZpZyA9IHsgY2hhcmFjdGVyRGF0YTogdHJ1ZSB9O1xuICAgICAgICBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAoKSB7IHJldHVybiBub3RpZnkoKTsgfSkub2JzZXJ2ZShlbF8xLCBjb25maWcpO1xuICAgICAgICB0cmlnZ2VyID0gZnVuY3Rpb24gKCkgeyBlbF8xLnRleHRDb250ZW50ID0gXCJcIiArICh0b2dnbGVfMSA/IHRvZ2dsZV8xLS0gOiB0b2dnbGVfMSsrKTsgfTtcbiAgICB9XG4gICAgY2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuICAgIHRyaWdnZXIoKTtcbn07XG5leHBvcnQgeyBxdWV1ZU1pY3JvVGFzayB9O1xuIiwiaW1wb3J0IHsgcXVldWVNaWNyb1Rhc2sgfSBmcm9tICcuL3F1ZXVlTWljcm9UYXNrJztcbnZhciBxdWV1ZVJlc2l6ZU9ic2VydmVyID0gZnVuY3Rpb24gKGNiKSB7XG4gICAgcXVldWVNaWNyb1Rhc2soZnVuY3Rpb24gUmVzaXplT2JzZXJ2ZXIoKSB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShjYik7XG4gICAgfSk7XG59O1xuZXhwb3J0IHsgcXVldWVSZXNpemVPYnNlcnZlciB9O1xuIiwiaW1wb3J0IHsgcHJvY2VzcyB9IGZyb20gJy4vcHJvY2Vzcyc7XG5pbXBvcnQgeyBnbG9iYWwgfSBmcm9tICcuL2dsb2JhbCc7XG5pbXBvcnQgeyBxdWV1ZVJlc2l6ZU9ic2VydmVyIH0gZnJvbSAnLi9xdWV1ZVJlc2l6ZU9ic2VydmVyJztcbnZhciB3YXRjaGluZyA9IDA7XG52YXIgaXNXYXRjaGluZyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICEhd2F0Y2hpbmc7IH07XG52YXIgQ0FUQ0hfUEVSSU9EID0gMjUwO1xudmFyIG9ic2VydmVyQ29uZmlnID0geyBhdHRyaWJ1dGVzOiB0cnVlLCBjaGFyYWN0ZXJEYXRhOiB0cnVlLCBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfTtcbnZhciBldmVudHMgPSBbXG4gICAgJ3Jlc2l6ZScsXG4gICAgJ2xvYWQnLFxuICAgICd0cmFuc2l0aW9uZW5kJyxcbiAgICAnYW5pbWF0aW9uZW5kJyxcbiAgICAnYW5pbWF0aW9uc3RhcnQnLFxuICAgICdhbmltYXRpb25pdGVyYXRpb24nLFxuICAgICdrZXl1cCcsXG4gICAgJ2tleWRvd24nLFxuICAgICdtb3VzZXVwJyxcbiAgICAnbW91c2Vkb3duJyxcbiAgICAnbW91c2VvdmVyJyxcbiAgICAnbW91c2VvdXQnLFxuICAgICdibHVyJyxcbiAgICAnZm9jdXMnXG5dO1xudmFyIHRpbWUgPSBmdW5jdGlvbiAodGltZW91dCkge1xuICAgIGlmICh0aW1lb3V0ID09PSB2b2lkIDApIHsgdGltZW91dCA9IDA7IH1cbiAgICByZXR1cm4gRGF0ZS5ub3coKSArIHRpbWVvdXQ7XG59O1xudmFyIHNjaGVkdWxlZCA9IGZhbHNlO1xudmFyIFNjaGVkdWxlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2NoZWR1bGVyKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLnN0b3BwZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmxpc3RlbmVyID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuc2NoZWR1bGUoKTsgfTtcbiAgICB9XG4gICAgU2NoZWR1bGVyLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAodGltZW91dCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAodGltZW91dCA9PT0gdm9pZCAwKSB7IHRpbWVvdXQgPSBDQVRDSF9QRVJJT0Q7IH1cbiAgICAgICAgaWYgKHNjaGVkdWxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHNjaGVkdWxlZCA9IHRydWU7XG4gICAgICAgIHZhciB1bnRpbCA9IHRpbWUodGltZW91dCk7XG4gICAgICAgIHF1ZXVlUmVzaXplT2JzZXJ2ZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGVsZW1lbnRzSGF2ZVJlc2l6ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudHNIYXZlUmVzaXplZCA9IHByb2Nlc3MoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIHNjaGVkdWxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRpbWVvdXQgPSB1bnRpbCAtIHRpbWUoKTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzV2F0Y2hpbmcoKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50c0hhdmVSZXNpemVkKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnJ1bigxMDAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGltZW91dCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMucnVuKHRpbWVvdXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgU2NoZWR1bGVyLnByb3RvdHlwZS5zY2hlZHVsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgIHRoaXMucnVuKCk7XG4gICAgfTtcbiAgICBTY2hlZHVsZXIucHJvdG90eXBlLm9ic2VydmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBjYiA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLm9ic2VydmVyICYmIF90aGlzLm9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuYm9keSwgb2JzZXJ2ZXJDb25maWcpOyB9O1xuICAgICAgICBkb2N1bWVudC5ib2R5ID8gY2IoKSA6IGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgY2IpO1xuICAgIH07XG4gICAgU2NoZWR1bGVyLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuc3RvcHBlZCkge1xuICAgICAgICAgICAgdGhpcy5zdG9wcGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLm9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIodGhpcy5saXN0ZW5lcik7XG4gICAgICAgICAgICB0aGlzLm9ic2VydmUoKTtcbiAgICAgICAgICAgIGV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcihuYW1lLCBfdGhpcy5saXN0ZW5lciwgdHJ1ZSk7IH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTY2hlZHVsZXIucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICghdGhpcy5zdG9wcGVkKSB7XG4gICAgICAgICAgICB0aGlzLm9ic2VydmVyICYmIHRoaXMub2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIGdsb2JhbC5yZW1vdmVFdmVudExpc3RlbmVyKG5hbWUsIF90aGlzLmxpc3RlbmVyLCB0cnVlKTsgfSk7XG4gICAgICAgICAgICB0aGlzLnN0b3BwZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gU2NoZWR1bGVyO1xufSgpKTtcbnZhciBzY2hlZHVsZXIgPSBuZXcgU2NoZWR1bGVyKCk7XG52YXIgdXBkYXRlQ291bnQgPSBmdW5jdGlvbiAobikge1xuICAgICF3YXRjaGluZyAmJiBuID4gMCAmJiBzY2hlZHVsZXIuc3RhcnQoKTtcbiAgICB3YXRjaGluZyArPSBuO1xuICAgICF3YXRjaGluZyAmJiBzY2hlZHVsZXIuc3RvcCgpO1xufTtcbmV4cG9ydCB7IHNjaGVkdWxlciwgdXBkYXRlQ291bnQgfTtcbiIsImltcG9ydCB7IFJlc2l6ZU9ic2VydmVyQm94T3B0aW9ucyB9IGZyb20gJy4vUmVzaXplT2JzZXJ2ZXJCb3hPcHRpb25zJztcbmltcG9ydCB7IGNhbGN1bGF0ZUJveFNpemUgfSBmcm9tICcuL2FsZ29yaXRobXMvY2FsY3VsYXRlQm94U2l6ZSc7XG5pbXBvcnQgeyBpc1NWRywgaXNSZXBsYWNlZEVsZW1lbnQgfSBmcm9tICcuL3V0aWxzL2VsZW1lbnQnO1xudmFyIHNraXBOb3RpZnlPbkVsZW1lbnQgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgcmV0dXJuICFpc1NWRyh0YXJnZXQpXG4gICAgICAgICYmICFpc1JlcGxhY2VkRWxlbWVudCh0YXJnZXQpXG4gICAgICAgICYmIGdldENvbXB1dGVkU3R5bGUodGFyZ2V0KS5kaXNwbGF5ID09PSAnaW5saW5lJztcbn07XG52YXIgUmVzaXplT2JzZXJ2YXRpb24gPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFJlc2l6ZU9ic2VydmF0aW9uKHRhcmdldCwgb2JzZXJ2ZWRCb3gpIHtcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgIHRoaXMub2JzZXJ2ZWRCb3ggPSBvYnNlcnZlZEJveCB8fCBSZXNpemVPYnNlcnZlckJveE9wdGlvbnMuQ09OVEVOVF9CT1g7XG4gICAgICAgIHRoaXMubGFzdFJlcG9ydGVkU2l6ZSA9IHtcbiAgICAgICAgICAgIGlubGluZVNpemU6IDAsXG4gICAgICAgICAgICBibG9ja1NpemU6IDBcbiAgICAgICAgfTtcbiAgICB9XG4gICAgUmVzaXplT2JzZXJ2YXRpb24ucHJvdG90eXBlLmlzQWN0aXZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc2l6ZSA9IGNhbGN1bGF0ZUJveFNpemUodGhpcy50YXJnZXQsIHRoaXMub2JzZXJ2ZWRCb3gsIHRydWUpO1xuICAgICAgICBpZiAoc2tpcE5vdGlmeU9uRWxlbWVudCh0aGlzLnRhcmdldCkpIHtcbiAgICAgICAgICAgIHRoaXMubGFzdFJlcG9ydGVkU2l6ZSA9IHNpemU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubGFzdFJlcG9ydGVkU2l6ZS5pbmxpbmVTaXplICE9PSBzaXplLmlubGluZVNpemVcbiAgICAgICAgICAgIHx8IHRoaXMubGFzdFJlcG9ydGVkU2l6ZS5ibG9ja1NpemUgIT09IHNpemUuYmxvY2tTaXplKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICByZXR1cm4gUmVzaXplT2JzZXJ2YXRpb247XG59KCkpO1xuZXhwb3J0IHsgUmVzaXplT2JzZXJ2YXRpb24gfTtcbiIsInZhciBSZXNpemVPYnNlcnZlckRldGFpbCA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUmVzaXplT2JzZXJ2ZXJEZXRhaWwocmVzaXplT2JzZXJ2ZXIsIGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlVGFyZ2V0cyA9IFtdO1xuICAgICAgICB0aGlzLnNraXBwZWRUYXJnZXRzID0gW107XG4gICAgICAgIHRoaXMub2JzZXJ2YXRpb25UYXJnZXRzID0gW107XG4gICAgICAgIHRoaXMub2JzZXJ2ZXIgPSByZXNpemVPYnNlcnZlcjtcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIH1cbiAgICByZXR1cm4gUmVzaXplT2JzZXJ2ZXJEZXRhaWw7XG59KCkpO1xuZXhwb3J0IHsgUmVzaXplT2JzZXJ2ZXJEZXRhaWwgfTtcbiIsImltcG9ydCB7IHNjaGVkdWxlciwgdXBkYXRlQ291bnQgfSBmcm9tICcuL3V0aWxzL3NjaGVkdWxlcic7XG5pbXBvcnQgeyBSZXNpemVPYnNlcnZhdGlvbiB9IGZyb20gJy4vUmVzaXplT2JzZXJ2YXRpb24nO1xuaW1wb3J0IHsgUmVzaXplT2JzZXJ2ZXJEZXRhaWwgfSBmcm9tICcuL1Jlc2l6ZU9ic2VydmVyRGV0YWlsJztcbmltcG9ydCB7IHJlc2l6ZU9ic2VydmVycyB9IGZyb20gJy4vdXRpbHMvcmVzaXplT2JzZXJ2ZXJzJztcbnZhciBvYnNlcnZlck1hcCA9IG5ldyBXZWFrTWFwKCk7XG52YXIgZ2V0T2JzZXJ2YXRpb25JbmRleCA9IGZ1bmN0aW9uIChvYnNlcnZhdGlvblRhcmdldHMsIHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JzZXJ2YXRpb25UYXJnZXRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChvYnNlcnZhdGlvblRhcmdldHNbaV0udGFyZ2V0ID09PSB0YXJnZXQpIHtcbiAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAtMTtcbn07XG52YXIgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIoKSB7XG4gICAgfVxuICAgIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5jb25uZWN0ID0gZnVuY3Rpb24gKHJlc2l6ZU9ic2VydmVyLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgZGV0YWlsID0gbmV3IFJlc2l6ZU9ic2VydmVyRGV0YWlsKHJlc2l6ZU9ic2VydmVyLCBjYWxsYmFjayk7XG4gICAgICAgIG9ic2VydmVyTWFwLnNldChyZXNpemVPYnNlcnZlciwgZGV0YWlsKTtcbiAgICB9O1xuICAgIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5vYnNlcnZlID0gZnVuY3Rpb24gKHJlc2l6ZU9ic2VydmVyLCB0YXJnZXQsIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIGRldGFpbCA9IG9ic2VydmVyTWFwLmdldChyZXNpemVPYnNlcnZlcik7XG4gICAgICAgIHZhciBmaXJzdE9ic2VydmF0aW9uID0gZGV0YWlsLm9ic2VydmF0aW9uVGFyZ2V0cy5sZW5ndGggPT09IDA7XG4gICAgICAgIGlmIChnZXRPYnNlcnZhdGlvbkluZGV4KGRldGFpbC5vYnNlcnZhdGlvblRhcmdldHMsIHRhcmdldCkgPCAwKSB7XG4gICAgICAgICAgICBmaXJzdE9ic2VydmF0aW9uICYmIHJlc2l6ZU9ic2VydmVycy5wdXNoKGRldGFpbCk7XG4gICAgICAgICAgICBkZXRhaWwub2JzZXJ2YXRpb25UYXJnZXRzLnB1c2gobmV3IFJlc2l6ZU9ic2VydmF0aW9uKHRhcmdldCwgb3B0aW9ucyAmJiBvcHRpb25zLmJveCkpO1xuICAgICAgICAgICAgdXBkYXRlQ291bnQoMSk7XG4gICAgICAgICAgICBzY2hlZHVsZXIuc2NoZWR1bGUoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLnVub2JzZXJ2ZSA9IGZ1bmN0aW9uIChyZXNpemVPYnNlcnZlciwgdGFyZ2V0KSB7XG4gICAgICAgIHZhciBkZXRhaWwgPSBvYnNlcnZlck1hcC5nZXQocmVzaXplT2JzZXJ2ZXIpO1xuICAgICAgICB2YXIgaW5kZXggPSBnZXRPYnNlcnZhdGlvbkluZGV4KGRldGFpbC5vYnNlcnZhdGlvblRhcmdldHMsIHRhcmdldCk7XG4gICAgICAgIHZhciBsYXN0T2JzZXJ2YXRpb24gPSBkZXRhaWwub2JzZXJ2YXRpb25UYXJnZXRzLmxlbmd0aCA9PT0gMTtcbiAgICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgICAgIGxhc3RPYnNlcnZhdGlvbiAmJiByZXNpemVPYnNlcnZlcnMuc3BsaWNlKHJlc2l6ZU9ic2VydmVycy5pbmRleE9mKGRldGFpbCksIDEpO1xuICAgICAgICAgICAgZGV0YWlsLm9ic2VydmF0aW9uVGFyZ2V0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgdXBkYXRlQ291bnQoLTEpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIuZGlzY29ubmVjdCA9IGZ1bmN0aW9uIChyZXNpemVPYnNlcnZlcikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgZGV0YWlsID0gb2JzZXJ2ZXJNYXAuZ2V0KHJlc2l6ZU9ic2VydmVyKTtcbiAgICAgICAgZGV0YWlsLm9ic2VydmF0aW9uVGFyZ2V0cy5zbGljZSgpLmZvckVhY2goZnVuY3Rpb24gKG90KSB7IHJldHVybiBfdGhpcy51bm9ic2VydmUocmVzaXplT2JzZXJ2ZXIsIG90LnRhcmdldCk7IH0pO1xuICAgICAgICBkZXRhaWwuYWN0aXZlVGFyZ2V0cy5zcGxpY2UoMCwgZGV0YWlsLmFjdGl2ZVRhcmdldHMubGVuZ3RoKTtcbiAgICB9O1xuICAgIHJldHVybiBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXI7XG59KCkpO1xuZXhwb3J0IHsgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyIH07XG4iLCJpbXBvcnQgeyBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIgfSBmcm9tICcuL1Jlc2l6ZU9ic2VydmVyQ29udHJvbGxlcic7XG5pbXBvcnQgeyBpc0VsZW1lbnQgfSBmcm9tICcuL3V0aWxzL2VsZW1lbnQnO1xudmFyIFJlc2l6ZU9ic2VydmVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBSZXNpemVPYnNlcnZlcihjYWxsYmFjaykge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkZhaWxlZCB0byBjb25zdHJ1Y3QgJ1Jlc2l6ZU9ic2VydmVyJzogMSBhcmd1bWVudCByZXF1aXJlZCwgYnV0IG9ubHkgMCBwcmVzZW50LlwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRmFpbGVkIHRvIGNvbnN0cnVjdCAnUmVzaXplT2JzZXJ2ZXInOiBUaGUgY2FsbGJhY2sgcHJvdmlkZWQgYXMgcGFyYW1ldGVyIDEgaXMgbm90IGEgZnVuY3Rpb24uXCIpO1xuICAgICAgICB9XG4gICAgICAgIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5jb25uZWN0KHRoaXMsIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgUmVzaXplT2JzZXJ2ZXIucHJvdG90eXBlLm9ic2VydmUgPSBmdW5jdGlvbiAodGFyZ2V0LCBvcHRpb25zKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRmFpbGVkIHRvIGV4ZWN1dGUgJ29ic2VydmUnIG9uICdSZXNpemVPYnNlcnZlcic6IDEgYXJndW1lbnQgcmVxdWlyZWQsIGJ1dCBvbmx5IDAgcHJlc2VudC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc0VsZW1lbnQodGFyZ2V0KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkZhaWxlZCB0byBleGVjdXRlICdvYnNlcnZlJyBvbiAnUmVzaXplT2JzZXJ2ZXInOiBwYXJhbWV0ZXIgMSBpcyBub3Qgb2YgdHlwZSAnRWxlbWVudFwiKTtcbiAgICAgICAgfVxuICAgICAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIub2JzZXJ2ZSh0aGlzLCB0YXJnZXQsIG9wdGlvbnMpO1xuICAgIH07XG4gICAgUmVzaXplT2JzZXJ2ZXIucHJvdG90eXBlLnVub2JzZXJ2ZSA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJGYWlsZWQgdG8gZXhlY3V0ZSAndW5vYnNlcnZlJyBvbiAnUmVzaXplT2JzZXJ2ZXInOiAxIGFyZ3VtZW50IHJlcXVpcmVkLCBidXQgb25seSAwIHByZXNlbnQuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNFbGVtZW50KHRhcmdldCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJGYWlsZWQgdG8gZXhlY3V0ZSAndW5vYnNlcnZlJyBvbiAnUmVzaXplT2JzZXJ2ZXInOiBwYXJhbWV0ZXIgMSBpcyBub3Qgb2YgdHlwZSAnRWxlbWVudFwiKTtcbiAgICAgICAgfVxuICAgICAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIudW5vYnNlcnZlKHRoaXMsIHRhcmdldCk7XG4gICAgfTtcbiAgICBSZXNpemVPYnNlcnZlci5wcm90b3R5cGUuZGlzY29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLmRpc2Nvbm5lY3QodGhpcyk7XG4gICAgfTtcbiAgICBSZXNpemVPYnNlcnZlci50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICdmdW5jdGlvbiBSZXNpemVPYnNlcnZlciAoKSB7IFtwb2x5ZmlsbCBjb2RlXSB9JztcbiAgICB9O1xuICAgIHJldHVybiBSZXNpemVPYnNlcnZlcjtcbn0oKSk7XG5leHBvcnQgeyBSZXNpemVPYnNlcnZlciB9O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCwgaW1tZWRpYXRlKSB7XG4gIGxldCB0aW1lb3V0XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGV4ZWN1dGVkRnVuY3Rpb24oKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXNcbiAgICBjb25zdCBhcmdzID0gYXJndW1lbnRzXG5cbiAgICBjb25zdCBsYXRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgdGltZW91dCA9IG51bGxcbiAgICAgIGlmICghaW1tZWRpYXRlKSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpXG4gICAgfVxuXG4gICAgY29uc3QgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dFxuXG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpXG5cbiAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdClcblxuICAgIGlmIChjYWxsTm93KSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpXG4gIH1cbn1cbiIsImltcG9ydCB7IFJlc2l6ZU9ic2VydmVyIGFzIFBvbHlmaWxsIH0gZnJvbSAnQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXInXG5jb25zdCBSZXNpemVPYnNlcnZlciA9IHdpbmRvdy5SZXNpemVPYnNlcnZlciB8fCBQb2x5ZmlsbFxuaW1wb3J0IGRlYm91bmNlIGZyb20gJy4vdXRpbHMvZGVib3VuY2UnXG5cbmltcG9ydCByZW1vdmVJdGVtIGZyb20gJy4vdXRpbHMvcmVtb3ZlLWFycmF5LWl0ZW0nXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnRFbWl0dGVyJ1xuaW1wb3J0IHtcbiAgZ2V0RGlzdGFuY2UsXG4gIGluZGV4T2ZOZWFyZXN0UG9pbnRcbn0gZnJvbSAnLi9nZW9tZXRyeS9kaXN0YW5jZXMnXG5cbmltcG9ydCBEcmFnZ2FibGUgZnJvbSAnLi9kcmFnZ2FibGUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3QgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvcihkcmFnZ2FibGVzLCBvcHRpb25zPXt9KSB7XG4gICAgc3VwZXIob3B0aW9ucylcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHRpbWVFbmQ6IDIwMCxcbiAgICAgIHRpbWVFeGNhbmdlOiA0MDAsXG4gICAgICByYWRpdXM6IDMwXG4gICAgfSwgb3B0aW9ucylcblxuICAgIHRoaXMuY29udGFpbmVyID0gb3B0aW9ucy5jb250YWluZXJcbiAgICB0aGlzLmRyYWdnYWJsZXMgPSBkcmFnZ2FibGVzXG4gICAgdGhpcy5jaGFuZ2VkRHVyaW5nSXRlcmF0aW9uID0gZmFsc2VcblxuICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoZGVib3VuY2UodGhpcy5vblJlc2l6ZS5iaW5kKHRoaXMpLCAxMDApKVxuXG4gICAgaWYgKHRoaXMuY29udGFpbmVyKSB7XG4gICAgICB0aGlzLnJlc2l6ZU9ic2VydmVyLm9ic2VydmUodGhpcy5jb250YWluZXIpXG4gICAgfVxuXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIG9uUmVzaXplKCkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMucmVvcmRlck9uQ2hhbmdlKSB0aGlzLnJlc2V0KClcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZCkgPT4gZC5zdGFydFBvc2l0aW9uaW5nKCkpXG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuX2VuYWJsZSA9IHRydWVcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB0aGlzLmluaXREcmFnZ2FibGUoZHJhZ2dhYmxlKSlcbiAgfVxuXG4gIGluaXREcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgZHJhZ2dhYmxlLmVuYWJsZSA9IHRoaXMuX2VuYWJsZVxuICAgIGRyYWdnYWJsZS5vbignZHJhZzptb3ZlJywgKCkgPT4gdGhpcy5vbk1vdmUoZHJhZ2dhYmxlKSlcbiAgICBkcmFnZ2FibGUuZHJhZ0VuZEFjdGlvbiA9ICgpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5waW5Qb3NpdGlvbihkcmFnZ2FibGUucGlubmVkUG9zaXRpb24sIHRoaXMub3B0aW9ucy50aW1lRW5kKVxuICAgICAgdGhpcy5vbkVuZChkcmFnZ2FibGUpXG4gICAgfVxuICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZShkcmFnZ2FibGUuZWxlbWVudClcbiAgfVxuXG4gIHJlbGVhc2VEcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgdGhpcy5yZXNpemVPYnNlcnZlci51bm9ic2VydmUoZHJhZ2dhYmxlLmVsZW1lbnQpXG4gICAgZHJhZ2dhYmxlLnJlc2V0T24oJ2RyYWc6ZW5kJylcbiAgICBkcmFnZ2FibGUucmVzZXRPbignZHJhZzptb3ZlJylcbiAgICByZW1vdmVJdGVtKHRoaXMuZHJhZ2dhYmxlcywgZHJhZ2dhYmxlKVxuICB9XG5cbiAgb25Nb3ZlKGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IHNvcnRlZERyYWdnYWJsZXMgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuICAgIGNvbnN0IHBpbm5lZFBvc2l0aW9ucyA9IHNvcnRlZERyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbilcblxuICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IHNvcnRlZERyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpXG4gICAgY29uc3QgdGFyZ2V0SW5kZXggPSBpbmRleE9mTmVhcmVzdFBvaW50KHBpbm5lZFBvc2l0aW9ucywgZHJhZ2dhYmxlLnBvc2l0aW9uLCB0aGlzLm9wdGlvbnMucmFkaXVzLCB0aGlzLmRpc3RhbmNlRnVuYylcblxuICAgIGlmICh0YXJnZXRJbmRleCAhPT0gLTEgJiYgY3VycmVudEluZGV4ICE9PSB0YXJnZXRJbmRleCkge1xuICAgICAgaWYgKHRhcmdldEluZGV4IDwgY3VycmVudEluZGV4KSB7XG4gICAgICAgIGZvciAobGV0IGk9dGFyZ2V0SW5kZXg7IGk8Y3VycmVudEluZGV4OyBpKyspIHtcbiAgICAgICAgICBzb3J0ZWREcmFnZ2FibGVzW2ldLnBpblBvc2l0aW9uKHBpbm5lZFBvc2l0aW9uc1tpKzFdLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAobGV0IGk9Y3VycmVudEluZGV4OyBpPHRhcmdldEluZGV4OyBpKyspIHtcbiAgICAgICAgICBzb3J0ZWREcmFnZ2FibGVzW2krMV0ucGluUG9zaXRpb24ocGlubmVkUG9zaXRpb25zW2ldLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGRyYWdnYWJsZS5uYXRpdmVEcmFnQW5kRHJvcCkge1xuICAgICAgICBkcmFnZ2FibGUucGluUG9zaXRpb24ocGlubmVkUG9zaXRpb25zW3RhcmdldEluZGV4XSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbiA9IHBpbm5lZFBvc2l0aW9uc1t0YXJnZXRJbmRleF1cbiAgICAgIH1cblxuICAgICAgdGhpcy5jaGFuZ2VkRHVyaW5nSXRlcmF0aW9uID0gdHJ1ZVxuICAgIH1cbiAgfVxuXG4gIG9uRW5kKGRyYWdnYWJsZSkge1xuICAgIGlmICh0aGlzLmNoYW5nZWREdXJpbmdJdGVyYXRpb24pIHtcbiAgICAgIHRoaXMuZW1pdCgnbGlzdDpjaGFuZ2UnKVxuICAgICAgdGhpcy5jaGFuZ2VkRHVyaW5nSXRlcmF0aW9uID0gZmFsc2VcblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZW9yZGVyT25DaGFuZ2UgJiYgdGhpcy5vcHRpb25zLmNvbnRhaW5lcikge1xuICAgICAgICB0aGlzLnJlb3JkZXJFbGVtZW50cyhkcmFnZ2FibGUpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVvcmRlckVsZW1lbnRzKG1vdmVkRHJhZ2dhYmxlKSB7XG4gICAgY29uc3Qgc29ydGVkRHJhZ2dhYmxlcyA9IHRoaXMuZ2V0U29ydGVkRHJhZ2dhYmxlcygpXG4gICAgY29uc3QgaW5kZXggPSBzb3J0ZWREcmFnZ2FibGVzLmluZGV4T2YobW92ZWREcmFnZ2FibGUpXG4gICAgY29uc3QgbmV4dCA9IHNvcnRlZERyYWdnYWJsZXNbaW5kZXggKyAxXVxuXG4gICAgdGhpcy5yZXNldCgpXG5cbiAgICBpZiAobmV4dCkge1xuICAgICAgdGhpcy5jb250YWluZXIuaW5zZXJ0QmVmb3JlKG1vdmVkRHJhZ2dhYmxlLmVsZW1lbnQsIG5leHQuZWxlbWVudClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQobW92ZWREcmFnZ2FibGUuZWxlbWVudClcbiAgICB9XG5cbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZCkgPT4gZC5zdGFydFBvc2l0aW9uaW5nKCkpXG4gICAgdGhpcy5lbWl0KCdsaXN0OnJlb3JkZXJlZCcpXG4gIH1cblxuICBnZXRDdXJyZW50UGlubmVkUG9zaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbi5jbG9uZSgpKVxuICB9XG5cbiAgZ2V0U29ydGVkRHJhZ2dhYmxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5kcmFnZ2FibGVzLnNvcnQodGhpcy5zb3J0aW5nLmJpbmQodGhpcykpXG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucmVzZXRQb3NpdGlvblRvSW5pdGlhbCgpKVxuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucmVmcmVzaCgpKVxuICB9XG5cbiAgYWRkKGRyYWdnYWJsZXMpIHtcbiAgICBpZiAoIShkcmFnZ2FibGVzIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgICBkcmFnZ2FibGVzID0gW2RyYWdnYWJsZXNdXG4gICAgfVxuICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB0aGlzLmluaXREcmFnZ2FibGUoZHJhZ2dhYmxlKSlcbiAgICB0aGlzLmRyYWdnYWJsZXMgPSB0aGlzLmRyYWdnYWJsZXMuY29uY2F0KGRyYWdnYWJsZXMpXG4gIH1cblxuICByZW1vdmUoZHJhZ2dhYmxlcykge1xuICAgIGNvbnN0IGluaXRpYWxQb3NpdGlvbnMgPSB0aGlzLmRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5pbml0aWFsUG9zaXRpb24pXG4gICAgY29uc3QgbGlzdCA9IFtdXG4gICAgY29uc3Qgc29ydGVkRHJhZ2dhYmxlcyA9IHRoaXMuZ2V0U29ydGVkRHJhZ2dhYmxlcygpXG5cbiAgICBpZiAoIShkcmFnZ2FibGVzIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgICBkcmFnZ2FibGVzID0gW2RyYWdnYWJsZXNdXG4gICAgfVxuXG4gICAgZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHRoaXMucmVsZWFzZURyYWdnYWJsZShkcmFnZ2FibGUpKVxuXG4gICAgbGV0IGogPSAwXG4gICAgc29ydGVkRHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGlmICh0aGlzLmRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMSkge1xuICAgICAgICBpZiAoZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uICE9PSBpbml0aWFsUG9zaXRpb25zW2pdKSB7XG4gICAgICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKGluaXRpYWxQb3NpdGlvbnNbal0sIHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSlcbiAgICAgICAgfVxuICAgICAgICBkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uID0gaW5pdGlhbFBvc2l0aW9uc1tqXVxuICAgICAgICBqKytcbiAgICAgICAgbGlzdC5wdXNoKGRyYWdnYWJsZSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGxpc3RcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMucmVtb3ZlKHRoaXMuZHJhZ2dhYmxlcy5zbGljZSgpKVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUuZGVzdHJveSgpKVxuICAgIGlmICh0aGlzLmNvbnRhaW5lcikge1xuICAgICAgdGhpcy5yZXNpemVPYnNlcnZlci51bm9ic2VydmUodGhpcy5jb250YWluZXIpXG4gICAgfVxuICB9XG5cbiAgc29ydGluZyhkcmFnZ2FibGVBLCBkcmFnZ2FibGVCKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5zb3J0aW5nKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLnNvcnRpbmcoZHJhZ2dhYmxlQSwgZHJhZ2dhYmxlQilcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGRyYWdnYWJsZUEucGlubmVkUG9zaXRpb24ueSA8IGRyYWdnYWJsZUIucGlubmVkUG9zaXRpb24ueSkgcmV0dXJuIC0xXG4gICAgICBpZiAoZHJhZ2dhYmxlQS5waW5uZWRQb3NpdGlvbi55ID4gZHJhZ2dhYmxlQi5waW5uZWRQb3NpdGlvbi55KSByZXR1cm4gMVxuICAgICAgaWYgKGRyYWdnYWJsZUEucGlubmVkUG9zaXRpb24ueCA8IGRyYWdnYWJsZUIucGlubmVkUG9zaXRpb24ueCkgcmV0dXJuIC0xXG4gICAgICBpZiAoZHJhZ2dhYmxlQS5waW5uZWRQb3NpdGlvbi54ID4gZHJhZ2dhYmxlQi5waW5uZWRQb3NpdGlvbi54KSByZXR1cm4gMVxuICAgICAgcmV0dXJuIDBcbiAgICB9XG4gIH1cblxuICBnZXQgZGlzdGFuY2VGdW5jKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZ2V0RGlzdGFuY2UgfHwgZ2V0RGlzdGFuY2VcbiAgfVxuXG4gIGdldCBwb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q3VycmVudFBpbm5lZFBvc2l0aW9ucygpXG4gIH1cblxuICBzZXQgcG9zaXRpb25zKHBvc2l0aW9ucykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSAnd3JvbmcgYXJyYXkgbGVuZ3RoJ1xuICAgIGlmIChwb3NpdGlvbnMubGVuZ3RoID09PSB0aGlzLmRyYWdnYWJsZXMubGVuZ3RoKSB7XG4gICAgICBwb3NpdGlvbnMuZm9yRWFjaCgocG9pbnQsIGkpID0+IHtcbiAgICAgICAgdGhpcy5kcmFnZ2FibGVzW2ldLnBpblBvc2l0aW9uKHBvaW50KVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbWVzc2FnZVxuICAgIH1cbiAgfVxuXG4gIGdldCBlbmFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZVxuICB9XG5cbiAgc2V0IGVuYWJsZShlbmFibGUpIHtcbiAgICB0aGlzLl9lbmFibGUgPSBlbmFibGVcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUuZW5hYmxlID0gZW5hYmxlXG4gICAgfSlcbiAgfVxuXG4gIHN0YXRpYyBmYWN0b3J5KGNvbnRhaW5lckVsZW1lbnQsIGVsZW1lbnRzLCBvcHRpb25zPXt9KSB7XG4gICAgY29uc3QgZHJhZ2dhYmxlcyA9IEFycmF5LmZyb20oZWxlbWVudHMpLm1hcCgoZWxlbWVudCkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBEcmFnZ2FibGUoZWxlbWVudCwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyRWxlbWVudFxuICAgICAgfSwgb3B0aW9ucy5kcmFnZ2FibGUgfHwge30pKVxuICAgIH0pXG5cbiAgICByZXR1cm4gbmV3IExpc3QoZHJhZ2dhYmxlcywgT2JqZWN0LmFzc2lnbih7XG4gICAgICBjb250YWluZXI6IGNvbnRhaW5lckVsZW1lbnRcbiAgICB9LCBvcHRpb25zLmxpc3QgfHwge30pKVxuICB9XG59XG4iLCJpbXBvcnQgTGlzdCBmcm9tICcuL2xpc3QnXG5pbXBvcnQgeyBpbmRleE9mTmVhcmVzdFBvaW50LCBnZXRZRGlmZmVyZW5jZSB9IGZyb20gJy4vZ2VvbWV0cnkvZGlzdGFuY2VzJ1xuaW1wb3J0IFBvaW50IGZyb20gJy4vZ2VvbWV0cnkvcG9pbnQnXG5cbmltcG9ydCBEcmFnZ2FibGUgZnJvbSAnLi9kcmFnZ2FibGUnXG5cbmNvbnN0IGFycmF5TW92ZSA9IChhcnJheSwgZnJvbSwgdG8pID0+IHtcbiAgYXJyYXkuc3BsaWNlKHRvIDwgMCA/IGFycmF5Lmxlbmd0aCArIHRvIDogdG8sIDAsIGFycmF5LnNwbGljZShmcm9tLCAxKVswXSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnViYmxpbmdMaXN0IGV4dGVuZHMgTGlzdCB7XG4gIGF1dG9EZXRlY3RWZXJ0aWNhbEdhcCgpIHtcbiAgICBpZiAoIXRoaXMuX3ZlcnRpY2FsR2FwICYmICF0aGlzLm9wdGlvbnMudmVydGljYWxHYXAgJiYgdGhpcy5kcmFnZ2FibGVzLmxlbmd0aCA+PSAyKSB7XG4gICAgICBjb25zdCBzb3J0ZWQgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuICAgICAgdGhpcy5fdmVydGljYWxHYXAgPSBzb3J0ZWRbMV0ucGlubmVkUG9zaXRpb24ueSAtIHNvcnRlZFswXS5waW5uZWRQb3NpdGlvbi55IC0gc29ydGVkWzBdLmdldFNpemUoKS55XG4gICAgfVxuICB9XG5cbiAgYXV0b0RldGVjdFN0YXJ0UG9zaXRpb24oKSB7XG4gICAgaWYgKHRoaXMuZHJhZ2dhYmxlcy5sZW5ndGggPj0gMSAmJiAhdGhpcy5zdGFydFBvc2l0aW9uKSB7XG4gICAgICB0aGlzLnN0YXJ0UG9zaXRpb24gPSB0aGlzLmRyYWdnYWJsZXNbMF0ucGlubmVkUG9zaXRpb25cbiAgICB9XG4gIH1cblxuICBpbml0RHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIHN1cGVyLmluaXREcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICAgIGRyYWdnYWJsZS5vbignZHJhZzpzdGFydCcsICgpID0+IHRoaXMub25EcmFnU3RhcnQoZHJhZ2dhYmxlKSlcbiAgfVxuXG4gIG9uRHJhZ1N0YXJ0KGRyYWdnYWJsZSkge1xuICAgIHRoaXMuYXV0b0RldGVjdFZlcnRpY2FsR2FwKClcbiAgICB0aGlzLmF1dG9EZXRlY3RTdGFydFBvc2l0aW9uKClcbiAgICB0aGlzLmNhY2hlZFNvcnRlZERyYWdnYWJsZXMgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuICAgIHRoaXMuaW5kZXhPZkFjdGl2ZURyYWdnYWJsZSA9IHRoaXMuY2FjaGVkU29ydGVkRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSlcbiAgfVxuXG4gIG9uTW92ZShkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBwcmV2RHJhZ2dhYmxlID0gdGhpcy5jYWNoZWRTb3J0ZWREcmFnZ2FibGVzW3RoaXMuaW5kZXhPZkFjdGl2ZURyYWdnYWJsZSAtIDFdXG4gICAgY29uc3QgbmV4dERyYWdnYWJsZSA9IHRoaXMuY2FjaGVkU29ydGVkRHJhZ2dhYmxlc1t0aGlzLmluZGV4T2ZBY3RpdmVEcmFnZ2FibGUgKyAxXVxuICAgIGNvbnN0IGN1cnJlbnRQb3NpdGlvbiA9IGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvblxuXG4gICAgbGV0IGN1cnJlbnRPcmRlclxuICAgIGxldCB0YXJnZXRJbmRleFxuXG4gICAgaWYoZHJhZ2dhYmxlLnVwRGlyZWN0aW9uICYmIHByZXZEcmFnZ2FibGUpIHtcbiAgICAgIGN1cnJlbnRPcmRlciA9IFtwcmV2RHJhZ2dhYmxlLCBkcmFnZ2FibGVdLm1hcCgoZCkgPT4gZC5waW5uZWRQb3NpdGlvbilcbiAgICAgIHRhcmdldEluZGV4ID0gaW5kZXhPZk5lYXJlc3RQb2ludChjdXJyZW50T3JkZXIsIGRyYWdnYWJsZS5wb3NpdGlvbiwgMTAwMDAsIHRoaXMuZGlzdGFuY2VGdW5jKVxuXG4gICAgICBpZiAodGFyZ2V0SW5kZXggPT09IDApIHtcbiAgICAgICAgaWYoZHJhZ2dhYmxlLnNob3VsZFVzZU5hdGl2ZURyYWdBbmREcm9wKCkpIHtcbiAgICAgICAgICBkcmFnZ2FibGUucGluUG9zaXRpb24ocHJldkRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24gPSBwcmV2RHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uLmNsb25lKClcbiAgICAgICAgfVxuICAgICAgICBwcmV2RHJhZ2dhYmxlLnBpblBvc2l0aW9uKG5ldyBQb2ludChcbiAgICAgICAgICBjdXJyZW50UG9zaXRpb24ueCxcbiAgICAgICAgICBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24ueSArIGRyYWdnYWJsZS5nZXRTaXplKCkueSArIHRoaXMudmVydGljYWxHYXBcbiAgICAgICAgKSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICBhcnJheU1vdmUodGhpcy5jYWNoZWRTb3J0ZWREcmFnZ2FibGVzLCB0aGlzLmluZGV4T2ZBY3RpdmVEcmFnZ2FibGUtLSwgdGhpcy5pbmRleE9mQWN0aXZlRHJhZ2dhYmxlKVxuICAgICAgICB0aGlzLm9uTW92ZShkcmFnZ2FibGUpXG4gICAgICAgIHRoaXMuY2hhbmdlZER1cmluZ0l0ZXJhdGlvbiA9IHRydWVcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYoZHJhZ2dhYmxlLmRvd25EaXJlY3Rpb24gJiYgbmV4dERyYWdnYWJsZSkge1xuICAgICAgY3VycmVudE9yZGVyID0gW2RyYWdnYWJsZSwgbmV4dERyYWdnYWJsZV0ubWFwKChkKSA9PiBkLnBpbm5lZFBvc2l0aW9uKVxuICAgICAgdGFyZ2V0SW5kZXggPSBpbmRleE9mTmVhcmVzdFBvaW50KGN1cnJlbnRPcmRlciwgZHJhZ2dhYmxlLnBvc2l0aW9uLCAxMDAwMCwgdGhpcy5kaXN0YW5jZUZ1bmMpXG5cbiAgICAgIGlmKHRhcmdldEluZGV4ID09PSAxKSB7XG4gICAgICAgIG5leHREcmFnZ2FibGUucGluUG9zaXRpb24oZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICAgIGNvbnN0IGRyYWdnYWJsZU5ld1Bvc2l0aW9uID0gbmV3IFBvaW50KFxuICAgICAgICAgIG5leHREcmFnZ2FibGUucGlubmVkUG9zaXRpb24ueCxcbiAgICAgICAgICBuZXh0RHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uLnkgKyBuZXh0RHJhZ2dhYmxlLmdldFNpemUoKS55ICsgdGhpcy52ZXJ0aWNhbEdhcFxuICAgICAgICApXG4gICAgICAgIGlmKGRyYWdnYWJsZS5zaG91bGRVc2VOYXRpdmVEcmFnQW5kRHJvcCgpKSB7XG4gICAgICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKGRyYWdnYWJsZU5ld1Bvc2l0aW9uKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbiA9IGRyYWdnYWJsZU5ld1Bvc2l0aW9uXG4gICAgICAgIH1cbiAgICAgICAgYXJyYXlNb3ZlKHRoaXMuY2FjaGVkU29ydGVkRHJhZ2dhYmxlcywgdGhpcy5pbmRleE9mQWN0aXZlRHJhZ2dhYmxlKyssIHRoaXMuaW5kZXhPZkFjdGl2ZURyYWdnYWJsZSlcbiAgICAgICAgdGhpcy5vbk1vdmUoZHJhZ2dhYmxlKVxuICAgICAgICB0aGlzLmNoYW5nZWREdXJpbmdJdGVyYXRpb24gPSB0cnVlXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYnViYmxpbmcoc29ydGVkRHJhZ2dhYmxlcywgY3VycmVudERyYWdnYWJsZSkge1xuICAgIGNvbnN0IGN1cnJlbnRQb3NpdGlvbiA9IHRoaXMuc3RhcnRQb3NpdGlvbi5jbG9uZSgpXG4gICAgc29ydGVkRHJhZ2dhYmxlcyB8fD0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcblxuICAgIHNvcnRlZERyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBpZiAoIWRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbi5jb21wYXJlKGN1cnJlbnRQb3NpdGlvbikpIHtcbiAgICAgICAgaWYgKGRyYWdnYWJsZSA9PT0gY3VycmVudERyYWdnYWJsZSAmJiAhY3VycmVudERyYWdnYWJsZS5zaG91bGRVc2VOYXRpdmVEcmFnQW5kRHJvcCgpKSB7XG4gICAgICAgICAgZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uID0gY3VycmVudFBvc2l0aW9uLmNsb25lKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkcmFnZ2FibGUucGluUG9zaXRpb24oY3VycmVudFBvc2l0aW9uLCAoZHJhZ2dhYmxlID09PSBjdXJyZW50RHJhZ2dhYmxlKSA/IDAgOiB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY3VycmVudFBvc2l0aW9uLnkgPSBjdXJyZW50UG9zaXRpb24ueSArIGRyYWdnYWJsZS5nZXRTaXplKCkueSArIHRoaXMudmVydGljYWxHYXBcbiAgICB9KVxuICB9XG5cbiAgcmVtb3ZlKGRyYWdnYWJsZXMpIHtcbiAgICBpZiAoIShkcmFnZ2FibGVzIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgICBkcmFnZ2FibGVzID0gW2RyYWdnYWJsZXNdXG4gICAgfVxuXG4gICAgZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHRoaXMucmVsZWFzZURyYWdnYWJsZShkcmFnZ2FibGUpKVxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IHRoaXMuZHJhZ2dhYmxlcy5maWx0ZXIoKGQpID0+ICFkcmFnZ2FibGVzLmluY2x1ZGVzKGQpKVxuXG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGQpID0+IGQuc3RhcnRQb3NpdGlvbmluZygpKVxuXG4gICAgaWYodGhpcy5kcmFnZ2FibGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuYXV0b0RldGVjdFZlcnRpY2FsR2FwKClcbiAgICAgIHRoaXMuYXV0b0RldGVjdFN0YXJ0UG9zaXRpb24oKVxuICAgICAgdGhpcy5idWJibGluZygpXG4gICAgfVxuICB9XG5cbiAgZ2V0IGRpc3RhbmNlRnVuYygpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmdldERpc3RhbmNlIHx8IGdldFlEaWZmZXJlbmNlXG4gIH1cblxuICBnZXQgdmVydGljYWxHYXAoKSB7XG4gICAgaWYodGhpcy5vcHRpb25zLnZlcnRpY2FsR2FwKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLnZlcnRpY2FsR2FwXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYXV0b0RldGVjdFZlcnRpY2FsR2FwKClcbiAgICAgIHJldHVybiB0aGlzLl92ZXJ0aWNhbEdhcCB8fCAwXG4gICAgfVxuICB9XG5cbiAgc2V0IHZlcnRpY2FsR2FwKGdhcFZhbHVlKSB7XG4gICAgdGhpcy5vcHRpb25zLnZlcnRpY2FsR2FwID0gZ2FwVmFsdWVcbiAgfVxuXG4gIHN0YXRpYyBmYWN0b3J5KGNvbnRhaW5lckVsZW1lbnQsIGVsZW1lbnRzLCBvcHRpb25zPXt9KSB7XG4gICAgY29uc3QgZHJhZ2dhYmxlcyA9IEFycmF5LmZyb20oZWxlbWVudHMpLm1hcCgoZWxlbWVudCkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBEcmFnZ2FibGUoZWxlbWVudCwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyRWxlbWVudFxuICAgICAgfSwgb3B0aW9ucy5kcmFnZ2FibGUgfHwge30pKVxuICAgIH0pXG5cbiAgICByZXR1cm4gbmV3IEJ1YmJsaW5nTGlzdChkcmFnZ2FibGVzLCBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyRWxlbWVudFxuICAgIH0sIG9wdGlvbnMubGlzdCB8fCB7fSkpXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJQb2ludCIsIngiLCJ5IiwicCIsImsiLCJlbGVtZW50IiwicGFyZW50IiwicGFyZW50Tm9kZSIsImVsZW1lbnRSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicGFyZW50UmVjdCIsImxlZnQiLCJ0b3AiLCJ3aWR0aCIsImhlaWdodCIsIlJlY3RhbmdsZSIsInBvc2l0aW9uIiwic2l6ZSIsImFkZCIsIm11bHQiLCJyZWN0IiwiTWF0aCIsIm1pbiIsIm1heCIsInN1YiIsInJlY3RhbmdsZSIsImluY2x1ZGVQb2ludCIsImdldFAzIiwiYXhpcyIsInNlbEF4aXMiLCJjcm9zc1JlY3RhbmdsZSIsImFuZCIsInRoaXNDZW50ZXIiLCJnZXRDZW50ZXIiLCJyZWN0Q2VudGVyIiwic2lnbiIsIm9mZnNldCIsImVsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic3R5bGUiLCJpc0NvbnNpZGVyVHJhbnNsYXRlIiwiZWxlbWVudE9mZnNldCIsImVsZW1lbnRTaXplIiwiZ2V0RGVmYXVsdENvbnRhaW5lciIsImNvbnRhaW5lciIsIndpbmRvdyIsImdldENvbXB1dGVkU3R5bGUiLCJ0YWdOYW1lIiwiRXZlbnRFbWl0dGVyIiwib3B0aW9ucyIsImV2ZW50cyIsIm9uIiwiT2JqZWN0IiwiZW50cmllcyIsImV2ZW50TmFtZSIsImZuIiwiaW50ZXJydXB0ZWQiLCJhcmdzIiwic2xpY2UiLCJjYWxsIiwiYXJndW1lbnRzIiwiZnVuYyIsInB1c2giLCJ1bnNoaWZ0IiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwiZ2V0RGlzdGFuY2UiLCJwMSIsInAyIiwiZHgiLCJkeSIsInNxcnQiLCJnZXRYRGlmZmVyZW5jZSIsImFicyIsImdldFlEaWZmZXJlbmNlIiwidHJhbnNmb3JtZWRTcGFjZURpc3RhbmNlRmFjdG9yeSIsInBvdyIsImluZGV4T2ZOZWFyZXN0UG9pbnQiLCJhcnIiLCJ2YWwiLCJyYWRpdXMiLCJnZXREaXN0YW5jZUZ1bmMiLCJpIiwidGVtcCIsImxlbmd0aCIsImRpcmVjdENyb3NzaW5nIiwiTDFQMSIsIkwxUDIiLCJMMlAxIiwiTDJQMiIsImsxIiwiazIiLCJiMSIsImIyIiwiYm91bmRUb0xpbmUiLCJBIiwiQiIsIlAiLCJBUCIsIkFCIiwiYWIyIiwiYXBfYWIiLCJ0IiwiZ2V0UG9pbnRPbkxpbmVCeUxlbmdodCIsIkxQMSIsIkxQMiIsImxlbmdodCIsInBlcmNlbnQiLCJhZGRQb2ludFRvQm91bmRQb2ludHMiLCJib3VuZHBvaW50cyIsInBvaW50IiwiaXNSaWdodCIsInJlc3VsdCIsImZpbHRlciIsImJQb2ludCIsImdldEFuZ2xlRGlmZiIsImFscGhhIiwiYmV0YSIsIm1pbkFuZ2xlIiwibWF4QW5nbGUiLCJQSSIsImdldEFuZ2xlIiwiZGlmZiIsIm5vcm1hbGl6ZUFuZ2xlIiwiYXRhbjIiLCJib3VuZEFuZ2xlIiwiZG1pbiIsImRtYXgiLCJnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0iLCJhbmdsZSIsImNlbnRlciIsImNvcyIsInNpbiIsIkJvdW5kIiwiX3NpemUiLCJpbnN0YW5jZSIsImJvdW5kIiwiYmluZCIsIkJvdW5kVG9SZWN0YW5nbGUiLCJjYWxjUG9pbnQiLCJjbG9uZSIsInJlY3RQMiIsIkJvdW5kVG9FbGVtZW50IiwiZnJvbUVsZW1lbnQiLCJCb3VuZFRvTGluZVgiLCJzdGFydFkiLCJlbmRZIiwiQm91bmRUb0xpbmVZIiwic3RhcnRYIiwiZW5kWCIsIkJvdW5kVG9MaW5lIiwic3RhcnRQb2ludCIsImVuZFBvaW50Iiwic29tZUsiLCJjb3NCZXRhIiwic2luQmV0YSIsInBvaW50MiIsIm5ld0VuZFBvaW50IiwicG9pbnRDcm9zc2luZyIsIkJvdW5kVG9DaXJjbGUiLCJCb3VuZFRvQXJjIiwic3RhcnRBbmdsZSIsImVuZEFuZ2xlIiwiX3N0YXJ0QW5nbGUiLCJfZW5kQW5nbGUiLCJhcnJheSIsInJhbmdlIiwic3RhcnQiLCJzdG9wIiwic3RlcCIsIkJhc2ljU3RyYXRlZ3kiLCJOb3RDcm9zc2luZ1N0cmF0ZWd5IiwicmVjdGFuZ2xlTGlzdCIsImluZGV4ZXNPZk5ld3MiLCJzdGF0aWNSZWN0YW5nbGVJbmRleGVzIiwicmVkdWNlIiwiaW5kZXhlcyIsIl9yZWN0IiwiZm9yRWFjaCIsInJlbW92YWJsZSIsImluZGV4T2ZTdGF0aWMiLCJzdGF0aWNSZWN0IiwibW92ZVRvQm91bmQiLCJzb21lIiwiYm91bmRSZWN0IiwiZ2V0U3F1YXJlIiwib2RsRHJhZ2dhYmxlc0xpc3QiLCJuZXdEcmFnZ2FibGVzIiwiaW5kZXhPZk5ld3MiLCJkcmFnZ2FibGVzIiwiY29uY2F0IiwiZHJhZ2dhYmxlIiwiRmxvYXRMZWZ0U3RyYXRlZ3kiLCJhc3NpZ24iLCJwYWRkaW5nVG9wTGVmdCIsInBhZGRpbmdCb3R0b21SaWdodCIsInlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyIsImdldFBvc2l0aW9uIiwiX2luZGV4ZXNPZk5ld3MiLCJnZXRQMiIsImJvdW5kYXJ5UG9pbnRzIiwicmVjdEluZGV4IiwiaXNWYWxpZCIsIm5ld0xpc3QiLCJsaXN0T2xkUG9zaXRpb24iLCJtYXAiLCJuZXdEcmFnZ2FibGUiLCJGbG9hdFJpZ2h0U3RyYXRlZ3kiLCJwYWRkaW5nVG9wUmlnaHQiLCJwYWRkaW5nQm90dG9tTGVmdCIsInBhZGRpbmdCb3R0b21OZWdMZWZ0IiwiZ2V0UDQiLCJhZGRUb0RlZmF1bHRTY29wZSIsInRhcmdldCIsImRlZmF1bHRTY29wZSIsImFkZFRhcmdldCIsIlRhcmdldCIsInRpbWVFbmQiLCJ0aW1lRXhjYW5nZSIsInBvc2l0aW9uaW5nU3RyYXRlZ3kiLCJzdHJhdGVneSIsImdldFJlY3RhbmdsZSIsInRhcmdldHMiLCJlbWl0dGVyIiwiZW1pdCIsInN0YXJ0Qm91bmRpbmciLCJpbml0IiwiYm91bmRpbmciLCJpbmRleGVzT2ZOZXciLCJwb3NpdGlvbmluZyIsIm9sZERyYWdnYWJsZXMiLCJzb3J0aW5nIiwicmVjdGFuZ2xlcyIsImlubmVyRHJhZ2dhYmxlcyIsInNldFBvc2l0aW9uIiwiY2F0Y2hEcmFnZ2FibGUiLCJ0YXJnZXRSZWN0YW5nbGUiLCJkcmFnZ2FibGVTcXVhcmUiLCJzY29wZXMiLCJzY29wZSIsInJlbW92ZUl0ZW0iLCJuZXdEcmFnZ2FibGVzSW5kZXgiLCJnZXRTaXplIiwiYWRkUmVtb3ZlT25Nb3ZlIiwidGltZSIsIm1vdmUiLCJpbml0aWFsUG9zaXRpb24iLCJwdXNoSW5uZXJEcmFnZ2FibGUiLCJyZW1vdmVIYW5kbGVyIiwicmVtb3ZlIiwidW5zdWJzY3JpYmUiLCJfY29udGFpbmVyIiwiU2NvcGUiLCJkcmFnRW5kQWN0aW9uIiwib25FbmQiLCJzaG90VGFyZ2V0cyIsInNvcnQiLCJhIiwiYiIsInBpblBvc2l0aW9uIiwicmVzZXQiLCJyZWZyZXNoIiwicG9zaXRpb25zIiwibWVzc2FnZSIsInRhcmdldEluZGV4ZXMiLCJjdXJyZW50U2NvcGUiLCJhZGREcmFnZ2FibGVUb1Njb3BlIiwiYWRkRHJhZ2dhYmxlIiwiRHJhZ2dhYmxlIiwiaW50ZXJydXB0IiwiYWRkVGFyZ2V0VG9TY29wZSIsInByZXBlbmRPbiIsImNoZWNrU3VwcG9ydFBhc3NpdmVFdmVudHMiLCJwYXNzaXZlU3VwcG9ydGVkIiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIl9lcnIiLCJpc1N1cHBvcnRQYXNzaXZlRXZlbnRzIiwidGhyb3R0bGUiLCJ3YWl0IiwibGFzdFRpbWUiLCJleGVjdXRlZEZ1bmN0aW9uIiwiY29udGV4dCIsIm5vdyIsIkRhdGUiLCJhcHBseSIsInRocm90dGxlZERyYWdPdmVyIiwiY2FsbGJhY2siLCJkdXJhdGlvbiIsInRocm90dGxlZENhbGxiYWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInBhc3NpdmVGYWxzZSIsInBhc3NpdmUiLCJpc1RvdWNoIiwibW91c2VFdmVudHMiLCJlbmQiLCJ0b3VjaEV2ZW50cyIsInRyYW5zZm9ybVByb3BlcnR5IiwiZ2V0U3R5bGVQcm9wZXJ0eSIsInRyYW5zaXRpb25Qcm9wZXJ0eSIsImdldFRvdWNoQnlJRCIsInRvdWNoSWQiLCJjaGFuZ2VkVG91Y2hlcyIsImlkZW50aWZpZXIiLCJwcmV2ZW50RG91YmxlSW5pdCIsImV4aXN0aW5nIiwiY29weVN0eWxlcyIsInNvdXJjZSIsImRlc3RpbmF0aW9uIiwiY3MiLCJrZXkiLCJjaGlsZHJlbiIsIl9lbmFibGUiLCJzdGFydFBvc2l0aW9uaW5nIiwic3RhcnRMaXN0ZW5pbmciLCJfc2V0RGVmYXVsdFRyYW5zaXRpb24iLCJwaW5uZWRQb3NpdGlvbiIsIl9kcmFnU3RhcnQiLCJkcmFnU3RhcnQiLCJfZHJhZ01vdmUiLCJkcmFnTW92ZSIsIl9kcmFnRW5kIiwiZHJhZ0VuZCIsIl9uYXRpdmVEcmFnU3RhcnQiLCJuYXRpdmVEcmFnU3RhcnQiLCJfbmF0aXZlRHJhZ092ZXIiLCJuYXRpdmVEcmFnT3ZlciIsImRyYWdPdmVyVGhyb3R0bGVEdXJhdGlvbiIsIl9uYXRpdmVEcmFnRW5kIiwibmF0aXZlRHJhZ0VuZCIsIl9uYXRpdmVEcm9wIiwibmF0aXZlRHJvcCIsIl9zY3JvbGwiLCJvblNjcm9sbCIsImhhbmRsZXIiLCJfdHJhbnNmb3JtUG9zaXRpb24iLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbkNzcyIsInRlc3QiLCJyZXBsYWNlIiwidHJhbnNsYXRlQ3NzIiwidHJhbnNmb3JtIiwic2hvdWxkUmVtb3ZlWmVyb1RyYW5zbGF0ZSIsImlzU2lsZW50IiwiX3NldFRyYW5zaXRpb24iLCJfc2V0VHJhbnNsYXRlIiwic2lsZW50IiwiX3ByZXZpb3VzRGlyZWN0aW9uUG9zaXRpb24iLCJfc3RhcnRQb3NpdGlvbiIsImxlZnREaXJlY3Rpb24iLCJyaWdodERpcmVjdGlvbiIsInVwRGlyZWN0aW9uIiwiZG93bkRpcmVjdGlvbiIsIl9zdGFydFRvdWNoVGltZXN0YW1wIiwidG91Y2hEcmFnZ2luZ1RocmVzaG9sZCIsImlzVG91Y2hFdmVudCIsIm5hdGl2ZURyYWdBbmREcm9wIiwiZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wT25Ub3VjaCIsIlRvdWNoRXZlbnQiLCJ0b3VjaFBvaW50IiwiX3N0YXJ0VG91Y2hQb2ludCIsInBhZ2VYIiwiY2xpZW50WCIsInBhZ2VZIiwiY2xpZW50WSIsIl90b3VjaElkIiwiX3N0YXJ0U2Nyb2xsUG9pbnQiLCJzY3JvbGxYIiwic2Nyb2xsWSIsIkhUTUxJbnB1dEVsZW1lbnQiLCJmb2N1cyIsInNob3VsZFVzZU5hdGl2ZURyYWdBbmREcm9wIiwiZW11bGF0ZU9uRmlyc3RNb3ZlIiwic2VlbXNTY3JvbGxpbmciLCJjYW5jZWxEcmFnZ2luZyIsImVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcCIsImNhbmNlbEVtdWxhdGlvbiIsInRvdWNoIiwiaXNEcmFnZ2luZyIsInN0b3BQcm9wYWdhdGlvbiIsInNjcm9sbFBvaW50IiwiZGV0ZXJtaW5lRGlyZWN0aW9uIiwiY2xhc3NMaXN0Iiwic2V0VGltZW91dCIsIl9ldmVudCIsImRhdGFUcmFuc2ZlciIsInNldERhdGEiLCJlZmZlY3RBbGxvd2VkIiwiZHJvcEVmZmVjdCIsInJlbW92ZUF0dHJpYnV0ZSIsImNvbnRhaW5lclJlY3QiLCJjbG9uZWRFbGVtZW50IiwiY2xvbmVOb2RlIiwiYm9keSIsImFwcGVuZENoaWxkIiwiZW11bGF0aW9uRHJhZ2dhYmxlIiwiY29udGFpbmVyUmVjdFBvaW50IiwiZGVzdHJveSIsInJlbW92ZUNoaWxkIiwicmVzZXRFbWl0dGVyIiwiX2hhbmRsZXIiLCJlbmFibGUiLCJSZXNpemVPYnNlcnZlciIsImRlYm91bmNlIiwiaW1tZWRpYXRlIiwidGltZW91dCIsImxhdGVyIiwiY2FsbE5vdyIsImNsZWFyVGltZW91dCIsIlBvbHlmaWxsIiwiTGlzdCIsImNoYW5nZWREdXJpbmdJdGVyYXRpb24iLCJyZXNpemVPYnNlcnZlciIsIm9uUmVzaXplIiwib2JzZXJ2ZSIsInJlb3JkZXJPbkNoYW5nZSIsImQiLCJpbml0RHJhZ2dhYmxlIiwib25Nb3ZlIiwidW5vYnNlcnZlIiwicmVzZXRPbiIsInNvcnRlZERyYWdnYWJsZXMiLCJnZXRTb3J0ZWREcmFnZ2FibGVzIiwicGlubmVkUG9zaXRpb25zIiwiY3VycmVudEluZGV4IiwidGFyZ2V0SW5kZXgiLCJkaXN0YW5jZUZ1bmMiLCJyZW9yZGVyRWxlbWVudHMiLCJtb3ZlZERyYWdnYWJsZSIsIm5leHQiLCJpbnNlcnRCZWZvcmUiLCJyZXNldFBvc2l0aW9uVG9Jbml0aWFsIiwiQXJyYXkiLCJpbml0aWFsUG9zaXRpb25zIiwibGlzdCIsInJlbGVhc2VEcmFnZ2FibGUiLCJqIiwiZHJhZ2dhYmxlQSIsImRyYWdnYWJsZUIiLCJnZXRDdXJyZW50UGlubmVkUG9zaXRpb25zIiwiY29udGFpbmVyRWxlbWVudCIsImVsZW1lbnRzIiwiZnJvbSIsImFycmF5TW92ZSIsInRvIiwiQnViYmxpbmdMaXN0IiwiX3ZlcnRpY2FsR2FwIiwidmVydGljYWxHYXAiLCJzb3J0ZWQiLCJzdGFydFBvc2l0aW9uIiwib25EcmFnU3RhcnQiLCJhdXRvRGV0ZWN0VmVydGljYWxHYXAiLCJhdXRvRGV0ZWN0U3RhcnRQb3NpdGlvbiIsImNhY2hlZFNvcnRlZERyYWdnYWJsZXMiLCJpbmRleE9mQWN0aXZlRHJhZ2dhYmxlIiwicHJldkRyYWdnYWJsZSIsIm5leHREcmFnZ2FibGUiLCJjdXJyZW50UG9zaXRpb24iLCJjdXJyZW50T3JkZXIiLCJkcmFnZ2FibGVOZXdQb3NpdGlvbiIsImN1cnJlbnREcmFnZ2FibGUiLCJjb21wYXJlIiwiaW5jbHVkZXMiLCJidWJibGluZyIsImdhcFZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFBQTtNQUNxQkE7RUFDbkI7RUFDRjtFQUNBO0VBQ0E7RUFDQTtFQUNFLEVBQVlDLFNBQUFBLEtBQUFBLENBQUFBLENBQVosRUFBZUMsQ0FBZixFQUFrQjtFQUFBLElBQUEsZUFB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LENBQUMsQ0FBQztFQUNuQixRQUFRLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0VBQ25CLFFBQVEsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7RUFDM0IsUUFBUSxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztFQUM3QixRQUFRLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztFQUMxQixRQUFRLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztFQUMzQixRQUFRLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0VBQzdDLFFBQVEsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7RUFDNUMsUUFBUSxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztFQUM1QixLQUFLO0VBQ0wsSUFBSSxlQUFlLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxZQUFZO0VBQ25ELFFBQVEsSUFBSSxFQUFFLEdBQUcsSUFBSSxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxFQUFFLE1BQU0sR0FBRyxFQUFFLENBQUMsTUFBTSxFQUFFLElBQUksR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFFLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxFQUFFLE1BQU0sR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDO0VBQ3BKLFFBQVEsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFB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
