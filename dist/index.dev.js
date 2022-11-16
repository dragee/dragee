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
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
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
      _construct = Reflect.construct.bind();
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
      _get = Reflect.get.bind();
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

  //Return crossing point of two lines
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
      var _a;
      if (obj instanceof Element) {
          return true;
      }
      var scope = (_a = obj === null || obj === void 0 ? void 0 : obj.ownerDocument) === null || _a === void 0 ? void 0 : _a.defaultView;
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
          trigger = function () { el_1.textContent = "".concat(toggle_1 ? toggle_1-- : toggle_1++); };
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

  return exports;

})({});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZGV2LmpzIiwic291cmNlcyI6WyIuLi9zcmMvZ2VvbWV0cnkvcG9pbnQuanMiLCIuLi9zcmMvZ2VvbWV0cnkvcmVjdGFuZ2xlLmpzIiwiLi4vc3JjL3V0aWxzL2dldC1kZWZhdWx0LWNvbnRhaW5lci5qcyIsIi4uL3NyYy9ldmVudEVtaXR0ZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvZGVzYW5kcm8tZ2V0LXN0eWxlLXByb3BlcnR5L2dldC1zdHlsZS1wcm9wZXJ0eS5qcyIsIi4uL3NyYy9nZW9tZXRyeS9kaXN0YW5jZXMuanMiLCIuLi9zcmMvZ2VvbWV0cnkvYm91bmRzLmpzIiwiLi4vc3JjL2dlb21ldHJ5L2FuZ2xlcy5qcyIsIi4uL3NyYy9ib3VuZGluZy5qcyIsIi4uL3NyYy91dGlscy9yZW1vdmUtYXJyYXktaXRlbS5qcyIsIi4uL3NyYy91dGlscy9yYW5nZS5qcyIsIi4uL3NyYy9wb3NpdGlvbmluZy5qcyIsIi4uL3NyYy90YXJnZXQuanMiLCIuLi9zcmMvc2NvcGUuanMiLCIuLi9zcmMvdXRpbHMvaXMtc3VwcG9ydC1wYXNzaXZlLWV2ZW50cy5qcyIsIi4uL3NyYy91dGlscy90aHJvdHRsZS5qcyIsIi4uL3NyYy9kcmFnZ2FibGUuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL3V0aWxzL3Jlc2l6ZU9ic2VydmVycy5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvYWxnb3JpdGhtcy9oYXNBY3RpdmVPYnNlcnZhdGlvbnMuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL2FsZ29yaXRobXMvaGFzU2tpcHBlZE9ic2VydmF0aW9ucy5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvYWxnb3JpdGhtcy9kZWxpdmVyUmVzaXplTG9vcEVycm9yLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BqdWdnbGUvcmVzaXplLW9ic2VydmVyL2xpYi9SZXNpemVPYnNlcnZlckJveE9wdGlvbnMuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL3V0aWxzL2ZyZWV6ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvUmVzaXplT2JzZXJ2ZXJTaXplLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BqdWdnbGUvcmVzaXplLW9ic2VydmVyL2xpYi9ET01SZWN0UmVhZE9ubHkuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL3V0aWxzL2VsZW1lbnQuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL3V0aWxzL2dsb2JhbC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvYWxnb3JpdGhtcy9jYWxjdWxhdGVCb3hTaXplLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BqdWdnbGUvcmVzaXplLW9ic2VydmVyL2xpYi9SZXNpemVPYnNlcnZlckVudHJ5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BqdWdnbGUvcmVzaXplLW9ic2VydmVyL2xpYi9hbGdvcml0aG1zL2NhbGN1bGF0ZURlcHRoRm9yTm9kZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvYWxnb3JpdGhtcy9icm9hZGNhc3RBY3RpdmVPYnNlcnZhdGlvbnMuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL2FsZ29yaXRobXMvZ2F0aGVyQWN0aXZlT2JzZXJ2YXRpb25zQXREZXB0aC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvdXRpbHMvcHJvY2Vzcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvdXRpbHMvcXVldWVNaWNyb1Rhc2suanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL3V0aWxzL3F1ZXVlUmVzaXplT2JzZXJ2ZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL3V0aWxzL3NjaGVkdWxlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvUmVzaXplT2JzZXJ2YXRpb24uanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL1Jlc2l6ZU9ic2VydmVyRGV0YWlsLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BqdWdnbGUvcmVzaXplLW9ic2VydmVyL2xpYi9SZXNpemVPYnNlcnZlckNvbnRyb2xsZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL1Jlc2l6ZU9ic2VydmVyLmpzIiwiLi4vc3JjL3V0aWxzL2RlYm91bmNlLmpzIiwiLi4vc3JjL2xpc3QuanMiLCIuLi9zcmMvYnViYmxpbmdMaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKiBDbGFzcyByZXByZXNlbnRpbmcgYSBwb2ludC4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvaW50IHtcbiAgLyoqXG4gICogQ3JlYXRlIGEgcG9pbnQuXG4gICogQHBhcmFtIHtudW1iZXJ9IHggLSBUaGUgeCB2YWx1ZS5cbiAgKiBAcGFyYW0ge251bWJlcn0geSAtIFRoZSB5IHZhbHVlLlxuICAqL1xuICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgdGhpcy54ID0geFxuICAgIHRoaXMueSA9IHlcbiAgfVxuXG4gIGFkZChwKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnggKyBwLngsIHRoaXMueSArIHAueSlcbiAgfVxuXG4gIHN1YihwKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnggLSBwLngsIHRoaXMueSAtIHAueSlcbiAgfVxuXG4gIG11bHQoaykge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54ICogaywgdGhpcy55ICogaylcbiAgfVxuXG4gIG5lZ2F0aXZlKCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQoLXRoaXMueCwgLXRoaXMueSlcbiAgfVxuXG4gIGNvbXBhcmUocCkge1xuICAgIHJldHVybiAodGhpcy54ID09PSBwLnggJiYgdGhpcy55ID09PSBwLnkpXG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCwgdGhpcy55KVxuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIGB7eD0ke3RoaXMueH0seT0ke3RoaXMueX1gXG4gIH1cblxuICBzdGF0aWMgZWxlbWVudE9mZnNldChlbGVtZW50LCBwYXJlbnQpIHtcbiAgICBwYXJlbnQgPSBwYXJlbnQgfHwgZWxlbWVudC5wYXJlbnROb2RlXG4gICAgY29uc3QgZWxlbWVudFJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgY29uc3QgcGFyZW50UmVjdCA9IHBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIHJldHVybiBuZXcgUG9pbnQoXG4gICAgICBlbGVtZW50UmVjdC5sZWZ0IC0gcGFyZW50UmVjdC5sZWZ0LFxuICAgICAgZWxlbWVudFJlY3QudG9wIC0gcGFyZW50UmVjdC50b3BcbiAgICApXG4gIH1cblxuICBzdGF0aWMgZWxlbWVudFNpemUoZWxlbWVudCkge1xuICAgIGNvbnN0IGVsZW1lbnRSZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIHJldHVybiBuZXcgUG9pbnQoXG4gICAgICBlbGVtZW50UmVjdC53aWR0aCxcbiAgICAgIGVsZW1lbnRSZWN0LmhlaWdodFxuICAgIClcbiAgfVxufVxuIiwiaW1wb3J0IFBvaW50IGZyb20gJy4vcG9pbnQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY3RhbmdsZSB7XG4gIGNvbnN0cnVjdG9yKHBvc2l0aW9uLCBzaXplKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgdGhpcy5zaXplID0gc2l6ZVxuICB9XG5cbiAgZ2V0UDEoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25cbiAgfVxuXG4gIGdldFAyKCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHRoaXMucG9zaXRpb24ueSlcbiAgfVxuXG4gIGdldFAzKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLnNpemUpXG4gIH1cblxuICBnZXRQNCgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnkpXG4gIH1cblxuICBnZXRDZW50ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb24uYWRkKHRoaXMuc2l6ZS5tdWx0KDAuNSkpXG4gIH1cblxuICBvcihyZWN0KSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBuZXcgUG9pbnQoTWF0aC5taW4odGhpcy5wb3NpdGlvbi54LCByZWN0LnBvc2l0aW9uLngpLCBNYXRoLm1pbih0aGlzLnBvc2l0aW9uLnksIHJlY3QucG9zaXRpb24ueSkpXG4gICAgY29uc3Qgc2l6ZSA9IChuZXcgUG9pbnQoTWF0aC5tYXgodGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHJlY3QucG9zaXRpb24ueCArIHJlY3Quc2l6ZS54KSwgTWF0aC5tYXgodGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnksIHJlY3QucG9zaXRpb24ueSArIHJlY3Quc2l6ZS55KSkpLnN1Yihwb3NpdGlvbilcbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZShwb3NpdGlvbiwgc2l6ZSlcbiAgfVxuXG4gIGFuZChyZWN0KSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBuZXcgUG9pbnQoTWF0aC5tYXgodGhpcy5wb3NpdGlvbi54LCByZWN0LnBvc2l0aW9uLngpLCBNYXRoLm1heCh0aGlzLnBvc2l0aW9uLnksIHJlY3QucG9zaXRpb24ueSkpXG4gICAgY29uc3Qgc2l6ZSA9IChuZXcgUG9pbnQoTWF0aC5taW4odGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHJlY3QucG9zaXRpb24ueCArIHJlY3Quc2l6ZS54KSwgTWF0aC5taW4odGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnksIHJlY3QucG9zaXRpb24ueSArIHJlY3Quc2l6ZS55KSkpLnN1Yihwb3NpdGlvbilcbiAgICBpZiAoc2l6ZS54IDw9IDAgfHwgc2l6ZS55IDw9IDApIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHBvc2l0aW9uLCBzaXplKVxuICB9XG5cbiAgaW5jbHVkZVBvaW50KHApIHtcbiAgICByZXR1cm4gISh0aGlzLnBvc2l0aW9uLnggPiBwLnggfHwgdGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLnggPCBwLnggfHwgdGhpcy5wb3NpdGlvbi55ID4gcC55IHx8IHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55IDwgcC55KVxuICB9XG5cbiAgaW5jbHVkZVJlY3RhbmdsZShyZWN0YW5nbGUpIHtcbiAgICByZXR1cm4gdGhpcy5pbmNsdWRlUG9pbnQocmVjdGFuZ2xlLnBvc2l0aW9uKSAmJiB0aGlzLmluY2x1ZGVQb2ludChyZWN0YW5nbGUuZ2V0UDMoKSlcbiAgfVxuXG4gIG1vdmVUb0JvdW5kKHJlY3QsIGF4aXMpIHtcbiAgICBsZXQgc2VsQXhpcywgY3Jvc3NSZWN0YW5nbGVcbiAgICBpZiAoYXhpcykge1xuICAgICAgc2VsQXhpcyA9IGF4aXNcbiAgICB9IGVsc2Uge1xuICAgICAgY3Jvc3NSZWN0YW5nbGUgPSB0aGlzLmFuZChyZWN0KVxuICAgICAgaWYgKCFjcm9zc1JlY3RhbmdsZSkge1xuICAgICAgICByZXR1cm4gcmVjdFxuICAgICAgfVxuICAgICAgc2VsQXhpcyA9IGNyb3NzUmVjdGFuZ2xlLnNpemUueCA+IGNyb3NzUmVjdGFuZ2xlLnNpemUueSA/ICd5JyA6ICd4J1xuICAgIH1cbiAgICBjb25zdCB0aGlzQ2VudGVyID0gdGhpcy5nZXRDZW50ZXIoKVxuICAgIGNvbnN0IHJlY3RDZW50ZXIgPSByZWN0LmdldENlbnRlcigpXG4gICAgY29uc3Qgc2lnbiA9IHRoaXNDZW50ZXJbc2VsQXhpc10gPiByZWN0Q2VudGVyW3NlbEF4aXNdID8gLTEgOiAxXG4gICAgY29uc3Qgb2Zmc2V0ID0gc2lnbiA+IDAgPyB0aGlzLnBvc2l0aW9uW3NlbEF4aXNdICsgdGhpcy5zaXplW3NlbEF4aXNdIC0gcmVjdC5wb3NpdGlvbltzZWxBeGlzXSA6IHRoaXMucG9zaXRpb25bc2VsQXhpc10gLSAocmVjdC5wb3NpdGlvbltzZWxBeGlzXSArIHJlY3Quc2l6ZVtzZWxBeGlzXSlcbiAgICByZWN0LnBvc2l0aW9uW3NlbEF4aXNdID0gcmVjdC5wb3NpdGlvbltzZWxBeGlzXSArIG9mZnNldFxuICAgIHJldHVybiByZWN0XG4gIH1cblxuICBnZXRTcXVhcmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZS54ICogdGhpcy5zaXplLnlcbiAgfVxuXG4gIHN0eWxlQXBwbHkoZWwpIHtcbiAgICBlbCA9IGVsIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2luZCcpXG4gICAgZWwuc3R5bGUubGVmdCA9IHRoaXMucG9zaXRpb24ueCArICdweCdcbiAgICBlbC5zdHlsZS50b3AgPSB0aGlzLnBvc2l0aW9uLnkgKyAncHgnXG4gICAgZWwuc3R5bGUud2lkdGggPSB0aGlzLnNpemUueCArICdweCdcbiAgICBlbC5zdHlsZS5oZWlnaHQgPSB0aGlzLnNpemUueSArICdweCdcbiAgfVxuXG4gIGdyb3d0aChzaXplKSB7XG4gICAgdGhpcy5zaXplID0gdGhpcy5zaXplLmFkZChzaXplKVxuICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uLmFkZChzaXplLm11bHQoLTAuNSkpXG4gIH1cblxuICBnZXRNaW5TaWRlKCkge1xuICAgIHJldHVybiBNYXRoLm1pbih0aGlzLnNpemUueCwgdGhpcy5zaXplLnkpXG4gIH1cblxuICBzdGF0aWMgZnJvbUVsZW1lbnQoZWxlbWVudCwgcGFyZW50PWVsZW1lbnQucGFyZW50Tm9kZSwgaXNDb25zaWRlclRyYW5zbGF0ZT1mYWxzZSkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gUG9pbnQuZWxlbWVudE9mZnNldChlbGVtZW50LCBwYXJlbnQsIGlzQ29uc2lkZXJUcmFuc2xhdGUpXG4gICAgY29uc3Qgc2l6ZSA9IFBvaW50LmVsZW1lbnRTaXplKGVsZW1lbnQpXG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUocG9zaXRpb24sIHNpemUpXG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldERlZmF1bHRDb250YWluZXIoZWxlbWVudCkge1xuICBsZXQgY29udGFpbmVyID0gZWxlbWVudC5wYXJlbnROb2RlXG4gIHdoaWxlIChjb250YWluZXIucGFyZW50Tm9kZSAmJiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShjb250YWluZXIpWydwb3NpdGlvbiddID09PSAnc3RhdGljJyAmJiBjb250YWluZXIudGFnTmFtZSAhPT0gJ0JPRFknKSB7XG4gICAgY29udGFpbmVyID0gY29udGFpbmVyLnBhcmVudE5vZGVcbiAgfVxuICByZXR1cm4gY29udGFpbmVyXG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAob3B0aW9ucyA9IHt9KSB7XG4gICAgdGhpcy5ldmVudHMgPSB7fVxuXG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5vbikge1xuICAgICAgZm9yIChjb25zdCBbZXZlbnROYW1lLCBmbl0gb2YgT2JqZWN0LmVudHJpZXMob3B0aW9ucy5vbikpIHtcbiAgICAgICAgdGhpcy5vbihldmVudE5hbWUsIGZuKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGVtaXQoZXZlbnROYW1lKSB7XG4gICAgdGhpcy5pbnRlcnJ1cHRlZCA9IGZhbHNlXG4gICAgY29uc3QgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKVxuXG4gICAgaWYgKCF0aGlzLmV2ZW50c1tldmVudE5hbWVdKSByZXR1cm5cblxuICAgIGZvciAoY29uc3QgZnVuYyBvZiB0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICBmdW5jKC4uLmFyZ3MpXG4gICAgICBpZiAodGhpcy5pbnRlcnJ1cHRlZCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpbnRlcnJ1cHQoKSB7XG4gICAgdGhpcy5pbnRlcnJ1cHRlZCA9IHRydWVcbiAgfVxuXG4gIG9uKGV2ZW50TmFtZSwgZm4pIHtcbiAgICBpZiAoIXRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSBbXVxuICAgIH1cblxuICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0ucHVzaChmbilcbiAgfVxuXG4gIHByZXBlbmRPbihldmVudE5hbWUsIGZuKSB7XG4gICAgaWYgKCF0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdID0gW11cbiAgICB9XG5cbiAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLnVuc2hpZnQoZm4pXG4gIH1cblxuICB1bnN1YnNjcmliZShldmVudE5hbWUsIGZuKSB7XG4gICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5ldmVudHNbZXZlbnROYW1lXS5pbmRleE9mKGZuKVxuICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5zcGxpY2UoaW5kZXgsIDEpXG4gICAgfVxuICB9XG5cbiAgcmVzZXRFbWl0dGVyICgpIHtcbiAgICB0aGlzLmV2ZW50cyA9IHt9XG4gIH1cblxuICByZXNldE9uKGV2ZW50TmFtZSkge1xuICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSBbXVxuICB9XG59XG4iLCIvKiFcbiAqIGdldFN0eWxlUHJvcGVydHkgdjEuMC40XG4gKiBvcmlnaW5hbCBieSBrYW5nYXhcbiAqIGh0dHA6Ly9wZXJmZWN0aW9ua2lsbHMuY29tL2ZlYXR1cmUtdGVzdGluZy1jc3MtcHJvcGVydGllcy9cbiAqIE1JVCBsaWNlbnNlXG4gKi9cblxuLypqc2hpbnQgYnJvd3NlcjogdHJ1ZSwgc3RyaWN0OiB0cnVlLCB1bmRlZjogdHJ1ZSAqL1xuLypnbG9iYWwgZGVmaW5lOiBmYWxzZSwgZXhwb3J0czogZmFsc2UsIG1vZHVsZTogZmFsc2UgKi9cblxuKCBmdW5jdGlvbiggd2luZG93ICkge1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBwcmVmaXhlcyA9ICdXZWJraXQgTW96IG1zIE1zIE8nLnNwbGl0KCcgJyk7XG52YXIgZG9jRWxlbVN0eWxlID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlO1xuXG5mdW5jdGlvbiBnZXRTdHlsZVByb3BlcnR5KCBwcm9wTmFtZSApIHtcbiAgaWYgKCAhcHJvcE5hbWUgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gdGVzdCBzdGFuZGFyZCBwcm9wZXJ0eSBmaXJzdFxuICBpZiAoIHR5cGVvZiBkb2NFbGVtU3R5bGVbIHByb3BOYW1lIF0gPT09ICdzdHJpbmcnICkge1xuICAgIHJldHVybiBwcm9wTmFtZTtcbiAgfVxuXG4gIC8vIGNhcGl0YWxpemVcbiAgcHJvcE5hbWUgPSBwcm9wTmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHByb3BOYW1lLnNsaWNlKDEpO1xuXG4gIC8vIHRlc3QgdmVuZG9yIHNwZWNpZmljIHByb3BlcnRpZXNcbiAgdmFyIHByZWZpeGVkO1xuICBmb3IgKCB2YXIgaT0wLCBsZW4gPSBwcmVmaXhlcy5sZW5ndGg7IGkgPCBsZW47IGkrKyApIHtcbiAgICBwcmVmaXhlZCA9IHByZWZpeGVzW2ldICsgcHJvcE5hbWU7XG4gICAgaWYgKCB0eXBlb2YgZG9jRWxlbVN0eWxlWyBwcmVmaXhlZCBdID09PSAnc3RyaW5nJyApIHtcbiAgICAgIHJldHVybiBwcmVmaXhlZDtcbiAgICB9XG4gIH1cbn1cblxuLy8gdHJhbnNwb3J0XG5pZiAoIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcbiAgLy8gQU1EXG4gIGRlZmluZSggZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGdldFN0eWxlUHJvcGVydHk7XG4gIH0pO1xufSBlbHNlIGlmICggdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICkge1xuICAvLyBDb21tb25KUyBmb3IgQ29tcG9uZW50XG4gIG1vZHVsZS5leHBvcnRzID0gZ2V0U3R5bGVQcm9wZXJ0eTtcbn0gZWxzZSB7XG4gIC8vIGJyb3dzZXIgZ2xvYmFsXG4gIHdpbmRvdy5nZXRTdHlsZVByb3BlcnR5ID0gZ2V0U3R5bGVQcm9wZXJ0eTtcbn1cblxufSkoIHdpbmRvdyApO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldERpc3RhbmNlKHAxLCBwMikge1xuICBjb25zdCBkeCA9IHAxLnggLSBwMi54LCBkeSA9IHAxLnkgLSBwMi55XG4gIHJldHVybiBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRYRGlmZmVyZW5jZShwMSwgcDIpIHtcbiAgcmV0dXJuIE1hdGguYWJzKHAxLnggLSBwMi54KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0WURpZmZlcmVuY2UocDEsIHAyKSB7XG4gIHJldHVybiBNYXRoLmFicyhwMS55IC0gcDIueSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3Rvcnkob3B0aW9ucykge1xuICByZXR1cm4gKHAxLCBwMikgPT4ge1xuICAgIHJldHVybiBNYXRoLnNxcnQoXG4gICAgICBNYXRoLnBvdyhvcHRpb25zLnggKiBNYXRoLmFicyhwMS54IC0gcDIueCksIDIpICtcbiAgICAgIE1hdGgucG93KG9wdGlvbnMueSAqIE1hdGguYWJzKHAxLnkgLSBwMi55KSwgMilcbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluZGV4T2ZOZWFyZXN0UG9pbnQoYXJyLCB2YWwsIHJhZGl1cywgZ2V0RGlzdGFuY2VGdW5jPWdldERpc3RhbmNlKSB7XG4gIGxldCBzaXplLCBpbmRleCA9IDAsIGksIHRlbXBcbiAgaWYgKGFyci5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gLTFcbiAgfVxuICBzaXplID0gZ2V0RGlzdGFuY2VGdW5jKGFyclswXSwgdmFsKVxuICBmb3IgKGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgdGVtcCA9IGdldERpc3RhbmNlRnVuYyhhcnJbaV0sIHZhbClcbiAgICBpZiAodGVtcCA8IHNpemUpIHtcbiAgICAgIHNpemUgPSB0ZW1wXG4gICAgICBpbmRleCA9IGlcbiAgICB9XG4gIH1cbiAgaWYgKHJhZGl1cyA+PSAwICYmIHNpemUgPiByYWRpdXMpIHtcbiAgICByZXR1cm4gLTFcbiAgfVxuICByZXR1cm4gaW5kZXhcbn1cbiIsImltcG9ydCBQb2ludCBmcm9tICcuL3BvaW50J1xuaW1wb3J0IHsgZ2V0RGlzdGFuY2UgfSBmcm9tICcuL2Rpc3RhbmNlcydcblxuZXhwb3J0IGZ1bmN0aW9uIGNsYW1wKG1pbiwgbWF4LCB2YWwpIHtcbiAgcmV0dXJuIE1hdGgubWF4KG1pbiwgTWF0aC5taW4obWF4LCB2YWwpKVxufVxuXG4vL1JldHVybiBjcm9zc2luZyBwb2ludCBvZiB0d28gbGluZXNcbmV4cG9ydCBmdW5jdGlvbiBkaXJlY3RDcm9zc2luZyhMMVAxLCBMMVAyLCBMMlAxLCBMMlAyKSB7XG4gIGxldCB0ZW1wLCBrMSwgazIsIGIxLCBiMiwgeCwgeVxuICBpZiAoTDJQMS54ID09PSBMMlAyLngpIHtcbiAgICB0ZW1wID0gTDJQMVxuICAgIEwyUDEgPSBMMVAxXG4gICAgTDFQMSA9IHRlbXBcbiAgICB0ZW1wID0gTDJQMlxuICAgIEwyUDIgPSBMMVAyXG4gICAgTDFQMiA9IHRlbXBcbiAgfVxuICBpZiAoTDFQMS54ID09PSBMMVAyLngpIHtcbiAgICBrMiA9IChMMlAyLnkgLSBMMlAxLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICBiMiA9IChMMlAyLnggKiBMMlAxLnkgLSBMMlAxLnggKiBMMlAyLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICB4ID0gTDFQMS54XG4gICAgeSA9IHggKiBrMiArIGIyXG4gICAgcmV0dXJuIG5ldyBQb2ludCh4LCB5KVxuICB9IGVsc2Uge1xuICAgIGsxID0gKEwxUDIueSAtIEwxUDEueSkgLyAoTDFQMi54IC0gTDFQMS54KVxuICAgIGIxID0gKEwxUDIueCAqIEwxUDEueSAtIEwxUDEueCAqIEwxUDIueSkgLyAoTDFQMi54IC0gTDFQMS54KVxuICAgIGsyID0gKEwyUDIueSAtIEwyUDEueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgIGIyID0gKEwyUDIueCAqIEwyUDEueSAtIEwyUDEueCAqIEwyUDIueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgIHggPSAoYjEgLSBiMikgLyAoazIgLSBrMSlcbiAgICB5ID0geCAqIGsxICsgYjFcbiAgICByZXR1cm4gbmV3IFBvaW50KHgsIHkpXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kVG9TZWdtZW50KExQMSwgTFAyLCBQKSB7XG4gIGxldCB4LCB5XG4gIHggPSBjbGFtcChNYXRoLm1pbihMUDEueCwgTFAyLngpLCBNYXRoLm1heChMUDEueCwgTFAyLngpLCBQLngpXG4gIGlmICh4ICE9PSBQLngpIHtcbiAgICB5ID0gKHggPT09IExQMS54KSA/IExQMS55IDogTFAyLnlcbiAgICBQID0gbmV3IFBvaW50KHgsIHkpXG4gIH1cblxuICB5ID0gY2xhbXAoTWF0aC5taW4oTFAxLnksIExQMi55KSwgTWF0aC5tYXgoTFAxLnksIExQMi55KSwgUC55KVxuICBpZiAoeSAhPT0gUC55KSB7XG4gICAgeCA9ICh5ID09PSBMUDEueSkgPyBMUDEueCA6IExQMi54XG4gICAgUCA9IG5ldyBQb2ludCh4LCB5KVxuICB9XG5cbiAgcmV0dXJuIFBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kVG9MaW5lKEEsIEIsIFApIHtcbiAgY29uc3QgQVAgPSBuZXcgUG9pbnQoUC54IC0gQS54LCBQLnkgLSBBLnkpLFxuICAgIEFCID0gbmV3IFBvaW50KEIueCAtIEEueCwgQi55IC0gQS55KSxcbiAgICBhYjIgPSBBQi54ICogQUIueCArIEFCLnkgKiBBQi55LFxuICAgIGFwX2FiID0gQVAueCAqIEFCLnggKyBBUC55ICogQUIueSxcbiAgICB0ID0gYXBfYWIgLyBhYjJcbiAgcmV0dXJuIG5ldyBQb2ludChBLnggKyBBQi54ICogdCwgQS55ICsgQUIueSAqIHQpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb2ludE9uTGluZShMUDEsIExQMiwgcGVyY2VudCkge1xuICBjb25zdCBkeCA9IExQMi54IC0gTFAxLngsIGR5ID0gTFAyLnkgLSBMUDEueVxuICByZXR1cm4gbmV3IFBvaW50KExQMS54ICsgcGVyY2VudCAqIGR4LCBMUDEueSArIHBlcmNlbnQgKiBkeSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBvaW50T25MaW5lQnlMZW5naHQoTFAxLCBMUDIsIGxlbmdodCkge1xuICBjb25zdCBkeCA9IExQMi54IC0gTFAxLnhcbiAgY29uc3QgZHkgPSBMUDIueSAtIExQMS55XG4gIGNvbnN0IHBlcmNlbnQgPSBsZW5naHQgLyBnZXREaXN0YW5jZShMUDEsIExQMilcbiAgcmV0dXJuIG5ldyBQb2ludChMUDEueCArIHBlcmNlbnQgKiBkeCwgTFAxLnkgKyBwZXJjZW50ICogZHkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRQb2ludFRvQm91bmRQb2ludHMoYm91bmRwb2ludHMsIHBvaW50LCBpc1JpZ2h0KSB7XG4gIGNvbnN0IHJlc3VsdCA9IGJvdW5kcG9pbnRzLmZpbHRlcigoYlBvaW50KSA9PiB7XG4gICAgcmV0dXJuIGJQb2ludC55ID4gcG9pbnQueSB8fCAoaXNSaWdodCA/IGJQb2ludC54IDwgcG9pbnQueCA6IGJQb2ludC54ID4gcG9pbnQueClcbiAgfSlcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChwb2ludC55IDwgcmVzdWx0W2ldLnkpIHtcbiAgICAgIHJlc3VsdC5zcGxpY2UoaSwgMCwgcG9pbnQpXG4gICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxuICB9XG4gIHJlc3VsdC5wdXNoKHBvaW50KVxuICByZXR1cm4gcmVzdWx0XG59XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9wb2ludCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFuZ2xlRGlmZihhbHBoYSwgYmV0YSkge1xuICBjb25zdCBtaW5BbmdsZSA9IE1hdGgubWluKGFscGhhLCBiZXRhKVxuICBjb25zdCBtYXhBbmdsZSA9ICBNYXRoLm1heChhbHBoYSwgYmV0YSlcbiAgcmV0dXJuIE1hdGgubWluKG1heEFuZ2xlIC0gbWluQW5nbGUsIG1pbkFuZ2xlICsgTWF0aC5QSSoyIC0gbWF4QW5nbGUpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbmdsZShwMSwgcDIpIHtcbiAgY29uc3QgZGlmZiA9IHAyLnN1YihwMSlcbiAgcmV0dXJuIG5vcm1hbGl6ZUFuZ2xlKE1hdGguYXRhbjIoZGlmZi55LCBkaWZmLngpKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9SYWRpYW4oYW5nbGUpIHtcbiAgcmV0dXJuICgoYW5nbGUgJSAzNjApICogTWF0aC5QSSAvIDE4MClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvRGVncmVlKGFuZ2xlKSB7XG4gIHJldHVybiAoYW5nbGUgKiAxODAgLyBNYXRoLlBJKSAlIDM2MFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRBbmdsZShtaW4sIG1heCwgdmFsKSB7XG4gIGxldCBkbWluLCBkbWF4XG4gIGlmIChtaW4gPCBtYXggJiYgdmFsID4gbWluICYmIHZhbCA8IG1heCkge1xuICAgIHJldHVybiB2YWxcbiAgfSBlbHNlIGlmIChtYXggPCBtaW4gJiYgKHZhbCA8IG1heCB8fCB2YWwgPiBtaW4pKSB7XG4gICAgcmV0dXJuIHZhbFxuICB9IGVsc2Uge1xuICAgIGRtaW4gPSBnZXRBbmdsZURpZmYobWluLCB2YWwpXG4gICAgZG1heCA9IGdldEFuZ2xlRGlmZihtYXgsIHZhbClcbiAgICBpZiAoZG1pbiA8IGRtYXgpIHtcbiAgICAgIHJldHVybiBtaW5cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG1heFxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmVhcmVzdEFuZ2xlKGFyciwgYW5nbGUpIHtcbiAgbGV0IGksIHRlbXAsIGRpZmYgPSBNYXRoLlBJICogMiwgdmFsdWVcbiAgZm9yIChpID0gMDsgaSA8IGFyci5sZW5ndGg7aSsrKSB7XG4gICAgdGVtcCA9IGdldEFuZ2xlRGlmZihhcnJbaV0sIGFuZ2xlKVxuICAgIGlmIChkaWZmIDwgdGVtcCkge1xuICAgICAgZGlmZiA9IHRlbXBcbiAgICAgIHZhbHVlID0gYXJyW2ldXG4gICAgfVxuICB9XG4gIHJldHVybiB2YWx1ZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplQW5nbGUodmFsKSB7XG4gIHdoaWxlICh2YWwgPCAwKSB7XG4gICAgdmFsICs9IDIgKiBNYXRoLlBJXG4gIH1cbiAgd2hpbGUgKHZhbCA+IDIgKiBNYXRoLlBJKSB7XG4gICAgdmFsIC09IDIgKiBNYXRoLlBJXG4gIH1cbiAgcmV0dXJuIHZhbFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKGFuZ2xlLCBsZW5ndGgsIGNlbnRlcikge1xuICBjZW50ZXIgPSBjZW50ZXIgfHwgbmV3IFBvaW50KDAsIDApXG4gIHJldHVybiBjZW50ZXIuYWRkKG5ldyBQb2ludChsZW5ndGggKiBNYXRoLmNvcyhhbmdsZSksIGxlbmd0aCAqIE1hdGguc2luKGFuZ2xlKSkpXG59XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9nZW9tZXRyeS9wb2ludCdcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSAnLi9nZW9tZXRyeS9yZWN0YW5nbGUnXG5pbXBvcnQge1xuICBnZXRQb2ludE9uTGluZUJ5TGVuZ2h0LFxuICBkaXJlY3RDcm9zc2luZyxcbiAgYm91bmRUb0xpbmVcbn0gZnJvbSAnLi9nZW9tZXRyeS9ib3VuZHMnXG5cbmltcG9ydCB7XG4gIGdldEFuZ2xlLFxuICBub3JtYWxpemVBbmdsZSxcbiAgYm91bmRBbmdsZSxcbiAgZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtXG59IGZyb20gJy4vZ2VvbWV0cnkvYW5nbGVzJ1xuXG5leHBvcnQgY2xhc3MgQm91bmQge1xuICBjb25zdHJ1Y3RvciAoKSB7fVxuXG4gIGJvdW5kKHBvaW50LCBfc2l6ZSkge1xuICAgIHJldHVybiBwb2ludFxuICB9XG5cbiAgcmVmcmVzaCAoKSB7fVxuXG4gIHN0YXRpYyBib3VuZGluZygpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyB0aGlzKC4uLmFyZ3VtZW50cylcbiAgICByZXR1cm4gaW5zdGFuY2UuYm91bmQuYmluZChpbnN0YW5jZSlcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb1JlY3RhbmdsZSBleHRlbmRzIEJvdW5kIHtcbiAgY29uc3RydWN0b3IocmVjdGFuZ2xlKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMucmVjdGFuZ2xlID0gcmVjdGFuZ2xlXG4gIH1cblxuICBib3VuZChwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IGNhbGNQb2ludCA9IHBvaW50LmNsb25lKClcbiAgICBjb25zdCByZWN0UDIgPSB0aGlzLnJlY3RhbmdsZS5nZXRQMygpXG5cbiAgICBpZiAodGhpcy5yZWN0YW5nbGUucG9zaXRpb24ueCA+IGNhbGNQb2ludC54KSB7XG4gICAgICAoY2FsY1BvaW50LnggPSB0aGlzLnJlY3RhbmdsZS5wb3NpdGlvbi54KVxuICAgIH1cbiAgICBpZiAodGhpcy5yZWN0YW5nbGUucG9zaXRpb24ueSA+IGNhbGNQb2ludC55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHRoaXMucmVjdGFuZ2xlLnBvc2l0aW9uLnlcbiAgICB9XG4gICAgaWYgKHJlY3RQMi54IDwgY2FsY1BvaW50LnggKyBzaXplLngpIHtcbiAgICAgIGNhbGNQb2ludC54ID0gcmVjdFAyLnggLSBzaXplLnhcbiAgICB9XG4gICAgaWYgKHJlY3RQMi55IDwgY2FsY1BvaW50LnkgKyBzaXplLnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gcmVjdFAyLnkgLSBzaXplLnlcbiAgICB9XG5cbiAgICByZXR1cm4gY2FsY1BvaW50XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9FbGVtZW50IGV4dGVuZHMgQm91bmRUb1JlY3RhbmdsZSB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbnRhaW5lcikge1xuICAgIHN1cGVyKFJlY3RhbmdsZS5mcm9tRWxlbWVudChlbGVtZW50LCBjb250YWluZXIpKVxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lclxuICB9XG5cbiAgcmVmcmVzaCAoKSB7XG4gICAgdGhpcy5yZWN0YW5nbGUgPSBSZWN0YW5nbGUuZnJvbUVsZW1lbnQodGhpcy5lbGVtZW50LCB0aGlzLmNvbnRhaW5lcilcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb0xpbmVYIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3Rvcih4LCBzdGFydFksIGVuZFkpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy54ID0geFxuICAgIHRoaXMuc3RhcnRZID0gc3RhcnRZXG4gICAgdGhpcy5lbmRZID0gZW5kWVxuICB9XG5cbiAgYm91bmQocG9pbnQsIHNpemUpIHtcbiAgICBjb25zdCBjYWxjUG9pbnQgPSBwb2ludC5jbG9uZSgpXG5cbiAgICBjYWxjUG9pbnQueCA9IHRoaXMueFxuICAgIGlmICh0aGlzLnN0YXJ0WSA+IGNhbGNQb2ludC55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHRoaXMuc3RhcnRZXG4gICAgfVxuICAgIGlmICh0aGlzLmVuZFkgPCBjYWxjUG9pbnQueSArIHNpemUueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSB0aGlzLmVuZFkgLSBzaXplLnlcbiAgICB9XG5cbiAgICByZXR1cm4gY2FsY1BvaW50XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9MaW5lWSBleHRlbmRzIEJvdW5kIHtcbiAgY29uc3RydWN0b3IoeSwgc3RhcnRYLCBlbmRYKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMueSA9IHlcbiAgICB0aGlzLnN0YXJ0WCA9IHN0YXJ0WFxuICAgIHRoaXMuZW5kWCA9IGVuZFhcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgY2FsY1BvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIGNhbGNQb2ludC55ID0gdGhpcy55XG4gICAgaWYgKHRoaXMuc3RhcnRYID4gY2FsY1BvaW50LngpIHtcbiAgICAgIGNhbGNQb2ludC54ID0gdGhpcy5zdGFydFhcbiAgICB9XG4gICAgaWYgKHRoaXMuZW5kWCA8IGNhbGNQb2ludC54ICsgc2l6ZS54KSB7XG4gICAgICBjYWxjUG9pbnQueCA9IHRoaXMuZW5kWCAtIHNpemUueFxuICAgIH1cbiAgICByZXR1cm4gY2FsY1BvaW50XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9MaW5lIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3RvcihzdGFydFBvaW50LCBlbmRQb2ludCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnN0YXJ0UG9pbnQgPSBzdGFydFBvaW50XG4gICAgdGhpcy5lbmRQb2ludCA9IGVuZFBvaW50XG4gICAgY29uc3QgYWxwaGEgPSBNYXRoLmF0YW4yKGVuZFBvaW50LnkgLSBzdGFydFBvaW50LnksIGVuZFBvaW50LnggLSBzdGFydFBvaW50LngpXG4gICAgY29uc3QgYmV0YSA9IGFscGhhICsgTWF0aC5QSSAvIDJcbiAgICB0aGlzLnNvbWVLID0gMTBcbiAgICB0aGlzLmNvc0JldGEgPSBNYXRoLmNvcyhiZXRhKVxuICAgIHRoaXMuc2luQmV0YSA9IE1hdGguc2luKGJldGEpXG4gIH1cblxuICBib3VuZChwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IHBvaW50MiA9IG5ldyBQb2ludChcbiAgICAgIHBvaW50LnggKyB0aGlzLnNvbWVLICogdGhpcy5jb3NCZXRhLFxuICAgICAgcG9pbnQueSArIHRoaXMuc29tZUsgKiB0aGlzLnNpbkJldGFcbiAgICApXG5cbiAgICBjb25zdCBuZXdFbmRQb2ludCA9IGdldFBvaW50T25MaW5lQnlMZW5naHQodGhpcy5lbmRQb2ludCwgdGhpcy5zdGFydFBvaW50LCBzaXplLngpXG4gICAgY29uc3QgcG9pbnRDcm9zc2luZyA9IGRpcmVjdENyb3NzaW5nKHRoaXMuc3RhcnRQb2ludCwgdGhpcy5lbmRQb2ludCwgcG9pbnQsIHBvaW50MilcblxuICAgIHJldHVybiBib3VuZFRvTGluZSh0aGlzLnN0YXJ0UG9pbnQsIG5ld0VuZFBvaW50LCBwb2ludENyb3NzaW5nKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvQ2lyY2xlIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3RvcihjZW50ZXIsIHJhZGl1cykge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLmNlbnRlciA9IGNlbnRlclxuICAgIHRoaXMucmFkaXVzID0gcmFkaXVzXG4gIH1cblxuICBib3VuZChwb2ludCwgX3NpemUpIHtcbiAgICByZXR1cm4gZ2V0UG9pbnRPbkxpbmVCeUxlbmdodCh0aGlzLmNlbnRlciwgcG9pbnQsIHRoaXMucmFkaXVzKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvQXJjIGV4dGVuZHMgQm91bmRUb0NpcmNsZSB7XG4gIGNvbnN0cnVjdG9yKGNlbnRlciwgcmFkaXVzLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSkge1xuICAgIHN1cGVyKGNlbnRlciwgcmFkaXVzKVxuICAgIHRoaXMuX3N0YXJ0QW5nbGUgPSBzdGFydEFuZ2xlXG4gICAgdGhpcy5fZW5kQW5nbGUgPSBlbmRBbmdsZVxuICB9XG5cbiAgc3RhcnRBbmdsZSgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMuX3N0YXJ0QW5nbGUgPT09ICdmdW5jdGlvbicgPyB0aGlzLl9zdGFydEFuZ2xlKCkgOiB0aGlzLl9zdGFydEFuZ2xlXG4gIH1cblxuICBlbmRBbmdsZSgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMuX2VuZEFuZ2xlID09PSAnZnVuY3Rpb24nID8gdGhpcy5fZW5kQW5nbGUoKSA6IHRoaXMuX2VuZEFuZ2xlXG4gIH1cblxuICBib3VuZChwb2ludCwgX3NpemUpIHtcbiAgICBsZXQgYW5nbGUgPSBnZXRBbmdsZSh0aGlzLmNlbnRlciwgcG9pbnQpXG4gICAgYW5nbGUgPSBub3JtYWxpemVBbmdsZShhbmdsZSlcbiAgICBhbmdsZSA9IGJvdW5kQW5nbGUodGhpcy5zdGFydEFuZ2xlKCksIHRoaXMuZW5kQW5nbGUoKSwgYW5nbGUpXG4gICAgcmV0dXJuIGdldFBvaW50RnJvbVJhZGlhbFN5c3RlbShhbmdsZSwgdGhpcy5yYWRpdXMsIHRoaXMuY2VudGVyKVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhcnJheSwgdmFsKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoYXJyYXlbaV0gPT09IHZhbCkge1xuICAgICAgYXJyYXkuc3BsaWNlKGksIDEpXG4gICAgICBpLS1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycmF5XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByYW5nZShzdGFydCwgc3RvcCwgc3RlcCkge1xuICBjb25zdCByZXN1bHQgPSBbXVxuICBpZiAodHlwZW9mIHN0b3AgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgc3RvcCA9IHN0YXJ0XG4gICAgc3RhcnQgPSAwXG4gIH1cbiAgaWYgKHR5cGVvZiBzdGVwID09PSAndW5kZWZpbmVkJykge1xuICAgIHN0ZXAgPSAxXG4gIH1cbiAgaWYgKChzdGVwID4gMCAmJiBzdGFydCA+PSBzdG9wKSB8fCAoc3RlcCA8IDAgJiYgc3RhcnQgPD0gc3RvcCkpIHtcbiAgICByZXR1cm4gW11cbiAgfVxuICBmb3IgKGxldCBpID0gc3RhcnQ7IHN0ZXAgPiAwID8gaSA8IHN0b3AgOiBpID4gc3RvcDsgaSArPSBzdGVwKSB7XG4gICAgcmVzdWx0LnB1c2goaSlcbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9nZW9tZXRyeS9wb2ludCdcbmltcG9ydCB7IGFkZFBvaW50VG9Cb3VuZFBvaW50cyB9IGZyb20gJy4vZ2VvbWV0cnkvYm91bmRzJ1xuXG5pbXBvcnQge1xuICBpbmRleE9mTmVhcmVzdFBvaW50LFxuICBnZXREaXN0YW5jZVxufSBmcm9tICcuL2dlb21ldHJ5L2Rpc3RhbmNlcydcblxuY2xhc3MgQmFzaWNTdHJhdGVneSB7XG4gIGNvbnN0cnVjdG9yKHJlY3RhbmdsZSwgb3B0aW9ucz17fSkge1xuICAgIHRoaXMucmVjdGFuZ2xlID0gcmVjdGFuZ2xlXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9uc1xuICB9XG5cbiAgZ2V0IGJvdW5kUmVjdCAoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGlzLnJlY3RhbmdsZSA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMucmVjdGFuZ2xlKCkgOiB0aGlzLnJlY3RhbmdsZVxuICB9XG59XG5cbmNsYXNzIE5vdENyb3NzaW5nU3RyYXRlZ3kgZXh0ZW5kcyBCYXNpY1N0cmF0ZWd5IHtcbiAgcG9zaXRpb25pbmcgKHJlY3RhbmdsZUxpc3QsIGluZGV4ZXNPZk5ld3MpIHtcbiAgICBjb25zdCBzdGF0aWNSZWN0YW5nbGVJbmRleGVzID0gcmVjdGFuZ2xlTGlzdC5yZWR1Y2UoKGluZGV4ZXMsIF9yZWN0LCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGluZGV4ZXNPZk5ld3MuaW5kZXhPZihpbmRleCkgPT09IC0xKSB7XG4gICAgICAgIGluZGV4ZXMucHVzaChpbmRleClcbiAgICAgIH1cbiAgICAgIHJldHVybiBpbmRleGVzXG4gICAgfSwgW10pXG5cbiAgICBpbmRleGVzT2ZOZXdzLmZvckVhY2goKGluZGV4KSA9PiB7XG4gICAgICBsZXQgcmVjdCA9IHJlY3RhbmdsZUxpc3RbaW5kZXhdXG4gICAgICBsZXQgcmVtb3ZhYmxlID0gZmFsc2VcblxuICAgICAgc3RhdGljUmVjdGFuZ2xlSW5kZXhlcy5mb3JFYWNoKChpbmRleE9mU3RhdGljKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YXRpY1JlY3QgPSByZWN0YW5nbGVMaXN0W2luZGV4T2ZTdGF0aWNdXG4gICAgICAgIHJlY3QgPSBzdGF0aWNSZWN0Lm1vdmVUb0JvdW5kKHJlY3QpXG4gICAgICB9KVxuXG4gICAgICByZW1vdmFibGUgPSBzdGF0aWNSZWN0YW5nbGVJbmRleGVzLnNvbWUoKGluZGV4T2ZTdGF0aWMpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhdGljUmVjdCA9IHJlY3RhbmdsZUxpc3RbaW5kZXhPZlN0YXRpY11cbiAgICAgICAgcmV0dXJuICAhIXN0YXRpY1JlY3QuYW5kKHJlY3QpXG4gICAgICB9KSB8fCByZWN0LmFuZCh0aGlzLmJvdW5kUmVjdCkuZ2V0U3F1YXJlKCkgIT09IHJlY3QuZ2V0U3F1YXJlKClcblxuICAgICAgaWYgKHJlbW92YWJsZSkge1xuICAgICAgICByZWN0LnJlbW92YWJsZSA9IHRydWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMucHVzaChpbmRleClcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiByZWN0YW5nbGVMaXN0XG4gIH1cblxuICBzb3J0aW5nKG9kbERyYWdnYWJsZXNMaXN0LCBuZXdEcmFnZ2FibGVzLCBpbmRleE9mTmV3cykge1xuICAgIGNvbnN0IGRyYWdnYWJsZXMgPSBvZGxEcmFnZ2FibGVzTGlzdC5jb25jYXQobmV3RHJhZ2dhYmxlcylcbiAgICBuZXdEcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgaW5kZXhPZk5ld3MucHVzaChkcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSlcbiAgICB9KVxuICAgIHJldHVybiBkcmFnZ2FibGVzXG4gIH1cbn1cblxuY2xhc3MgRmxvYXRMZWZ0U3RyYXRlZ3kgZXh0ZW5kcyBCYXNpY1N0cmF0ZWd5IHtcbiAgY29uc3RydWN0b3IocmVjdGFuZ2xlLCBvcHRpb25zPXt9KSB7XG4gICAgc3VwZXIocmVjdGFuZ2xlLCBvcHRpb25zKVxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgcmVtb3ZhYmxlOiB0cnVlXG4gICAgfSwgb3B0aW9ucylcblxuICAgIHRoaXMucmFkaXVzID0gb3B0aW9ucy5yYWRpdXMgfHwgODBcblxuICAgIHRoaXMucGFkZGluZ1RvcExlZnQgPSBvcHRpb25zLnBhZGRpbmdUb3BMZWZ0IHx8IG5ldyBQb2ludCgwLCAwKVxuICAgIHRoaXMucGFkZGluZ0JvdHRvbVJpZ2h0ID0gb3B0aW9ucy5wYWRkaW5nQm90dG9tUmlnaHQgfHwgbmV3IFBvaW50KDAsIDApXG4gICAgdGhpcy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgPSBvcHRpb25zLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyB8fCAwXG5cbiAgICB0aGlzLmdldERpc3RhbmNlID0gb3B0aW9ucy5nZXREaXN0YW5jZSB8fCBnZXREaXN0YW5jZVxuICAgIHRoaXMuZ2V0UG9zaXRpb24gPSBvcHRpb25zLmdldFBvc2l0aW9uIHx8ICgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucG9zaXRpb24pXG4gIH1cblxuICBwb3NpdGlvbmluZyhyZWN0YW5nbGVMaXN0LCBfaW5kZXhlc09mTmV3cykge1xuICAgIGNvbnN0IGJvdW5kUmVjdCA9IHRoaXMuYm91bmRSZWN0XG4gICAgY29uc3QgcmVjdFAyID0gYm91bmRSZWN0LmdldFAyKClcbiAgICBsZXQgYm91bmRhcnlQb2ludHMgPSBbYm91bmRSZWN0LnBvc2l0aW9uXVxuXG4gICAgcmVjdGFuZ2xlTGlzdC5mb3JFYWNoKChyZWN0LCByZWN0SW5kZXgpID0+IHtcbiAgICAgIGxldCBwb3NpdGlvbiwgaXNWYWxpZCA9IGZhbHNlXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvdW5kYXJ5UG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHBvc2l0aW9uID0gbmV3IFBvaW50KFxuICAgICAgICAgIGJvdW5kYXJ5UG9pbnRzW2ldLnggKyB0aGlzLnBhZGRpbmdUb3BMZWZ0LngsXG4gICAgICAgICAgaSA+IDAgPyAoYm91bmRhcnlQb2ludHNbaSAtIDFdLnkgKyB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcykgOiAoYm91bmRSZWN0LnBvc2l0aW9uLnkgKyB0aGlzLnBhZGRpbmdUb3BMZWZ0LnkpXG4gICAgICAgIClcblxuICAgICAgICBpc1ZhbGlkID0gKHBvc2l0aW9uLnggKyByZWN0LnNpemUueCA8IHJlY3RQMi54KVxuXG4gICAgICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgcG9zaXRpb24gPSBuZXcgUG9pbnQoXG4gICAgICAgICAgYm91bmRSZWN0LnBvc2l0aW9uLnggKyB0aGlzLnBhZGRpbmdUb3BMZWZ0LngsXG4gICAgICAgICAgYm91bmRhcnlQb2ludHNbYm91bmRhcnlQb2ludHMubGVuZ3RoIC0gMV0ueSArIChyZWN0SW5kZXggPiAwID8gdGhpcy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgOiB0aGlzLnBhZGRpbmdUb3BMZWZ0LnkpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgcmVjdC5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnJlbW92YWJsZSAmJiByZWN0LmdldFAzKCkueSA+IGJvdW5kUmVjdC5nZXRQMygpLnkpIHtcbiAgICAgICAgcmVjdC5yZW1vdmFibGUgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGJvdW5kYXJ5UG9pbnRzID0gYWRkUG9pbnRUb0JvdW5kUG9pbnRzKGJvdW5kYXJ5UG9pbnRzLCByZWN0LmdldFAzKCkuYWRkKHRoaXMucGFkZGluZ0JvdHRvbVJpZ2h0KSlcbiAgICB9KVxuICAgIHJldHVybiByZWN0YW5nbGVMaXN0XG4gIH1cblxuICBzb3J0aW5nKG9kbERyYWdnYWJsZXNMaXN0LCBuZXdEcmFnZ2FibGVzLCBpbmRleE9mTmV3cykge1xuICAgIGNvbnN0IG5ld0xpc3QgPSBvZGxEcmFnZ2FibGVzTGlzdC5jb25jYXQoKVxuICAgIGNvbnN0IGxpc3RPbGRQb3NpdGlvbiA9IG9kbERyYWdnYWJsZXNMaXN0Lm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUuZ2V0UG9zaXRpb24oKSlcbiAgICBuZXdEcmFnZ2FibGVzLmZvckVhY2goKG5ld0RyYWdnYWJsZSkgPT4ge1xuICAgICAgbGV0IGluZGV4ID0gaW5kZXhPZk5lYXJlc3RQb2ludChsaXN0T2xkUG9zaXRpb24sIHRoaXMuZ2V0UG9zaXRpb24obmV3RHJhZ2dhYmxlKSwgdGhpcy5yYWRpdXMsIHRoaXMuZ2V0RGlzdGFuY2UpXG4gICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgIGluZGV4ID0gbmV3TGlzdC5sZW5ndGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluZGV4ID0gbmV3TGlzdC5pbmRleE9mKG9kbERyYWdnYWJsZXNMaXN0W2luZGV4XSlcbiAgICAgIH1cbiAgICAgIG5ld0xpc3Quc3BsaWNlKGluZGV4LCAwLCBuZXdEcmFnZ2FibGUpXG4gICAgfSlcbiAgICBuZXdEcmFnZ2FibGVzLmZvckVhY2goKG5ld0RyYWdnYWJsZSkgPT4ge1xuICAgICAgaW5kZXhPZk5ld3MucHVzaChuZXdMaXN0LmluZGV4T2YobmV3RHJhZ2dhYmxlKSlcbiAgICB9KVxuICAgIHJldHVybiBuZXdMaXN0XG4gIH1cbn1cblxuY2xhc3MgRmxvYXRSaWdodFN0cmF0ZWd5IGV4dGVuZHMgRmxvYXRMZWZ0U3RyYXRlZ3kge1xuICBjb25zdHJ1Y3RvcihyZWN0YW5nbGUsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcihyZWN0YW5nbGUsIG9wdGlvbnMpXG5cbiAgICB0aGlzLnBhZGRpbmdUb3BSaWdodCA9IG9wdGlvbnMucGFkZGluZ1RvcFJpZ2h0IHx8IG5ldyBQb2ludCg1LCA1KVxuICAgIHRoaXMucGFkZGluZ0JvdHRvbUxlZnQgPSBvcHRpb25zLnBhZGRpbmdCb3R0b21MZWZ0IHx8IG5ldyBQb2ludCgwLCAwKVxuICAgIHRoaXMueUdhcEJldHdlZW5EcmFnZ2FibGVzID0gb3B0aW9ucy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgfHwgMFxuXG4gICAgdGhpcy5wYWRkaW5nQm90dG9tTmVnTGVmdCA9IG5ldyBQb2ludCgtdGhpcy5wYWRkaW5nQm90dG9tTGVmdC54LCB0aGlzLnBhZGRpbmdCb3R0b21MZWZ0LnkpXG4gIH1cblxuICBwb3NpdGlvbmluZyhyZWN0YW5nbGVMaXN0LCBfaW5kZXhlc09mTmV3cykge1xuICAgIGNvbnN0IGJvdW5kUmVjdCA9IHRoaXMuYm91bmRSZWN0XG4gICAgbGV0IGJvdW5kYXJ5UG9pbnRzID0gW2JvdW5kUmVjdC5nZXRQMigpXVxuXG4gICAgcmVjdGFuZ2xlTGlzdC5mb3JFYWNoKChyZWN0LCByZWN0SW5kZXgpID0+IHtcbiAgICAgIGxldCBwb3NpdGlvbiwgaXNWYWxpZCA9IGZhbHNlXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvdW5kYXJ5UG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHBvc2l0aW9uID0gbmV3IFBvaW50KFxuICAgICAgICAgIGJvdW5kYXJ5UG9pbnRzW2ldLnggLSByZWN0LnNpemUueCAtIHRoaXMucGFkZGluZ1RvcFJpZ2h0LngsXG4gICAgICAgICAgaSA+IDAgPyAoYm91bmRhcnlQb2ludHNbaSAtIDFdLnkgKyB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcykgOiAoYm91bmRSZWN0LnBvc2l0aW9uLnkgKyB0aGlzLnBhZGRpbmdUb3BSaWdodC55KVxuICAgICAgICApXG5cbiAgICAgICAgaXNWYWxpZCA9IChwb3NpdGlvbi54ID4gcmVjdC5wb3NpdGlvbi54KVxuICAgICAgICBpZiAoaXNWYWxpZCkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICBwb3NpdGlvbiA9IG5ldyBQb2ludChcbiAgICAgICAgICBib3VuZFJlY3QuZ2V0UDIoKS54ICAtIHJlY3Quc2l6ZS54IC0gdGhpcy5wYWRkaW5nVG9wUmlnaHQueCxcbiAgICAgICAgICBib3VuZGFyeVBvaW50c1tib3VuZGFyeVBvaW50cy5sZW5ndGggLSAxXS55ICsgKHJlY3RJbmRleCA+IDAgPyB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyA6IHRoaXMucGFkZGluZ1RvcFJpZ2h0LnkpXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIHJlY3QucG9zaXRpb24gPSBwb3NpdGlvblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZW1vdmFibGUgJiYgcmVjdC5nZXRQNCgpLnkgPiBib3VuZFJlY3QuZ2V0UDQoKS55KSB7XG4gICAgICAgIHJlY3QucmVtb3ZhYmxlID0gdHJ1ZVxuICAgICAgfVxuICAgICAgYm91bmRhcnlQb2ludHMgPSBhZGRQb2ludFRvQm91bmRQb2ludHMoYm91bmRhcnlQb2ludHMsIHJlY3QuZ2V0UDQoKS5hZGQodGhpcy5wYWRkaW5nQm90dG9tTmVnTGVmdCksIHRydWUpXG4gICAgfSlcbiAgICByZXR1cm4gcmVjdGFuZ2xlTGlzdFxuICB9XG59XG5cbmV4cG9ydCB7IE5vdENyb3NzaW5nU3RyYXRlZ3ksIEZsb2F0TGVmdFN0cmF0ZWd5LCBGbG9hdFJpZ2h0U3RyYXRlZ3kgfVxuIiwiaW1wb3J0IHJhbmdlIGZyb20gJy4vdXRpbHMvcmFuZ2UuanMnXG5pbXBvcnQgcmVtb3ZlSXRlbSBmcm9tICcuL3V0aWxzL3JlbW92ZS1hcnJheS1pdGVtJ1xuaW1wb3J0IGdldERlZmF1bHRDb250YWluZXIgZnJvbSAnLi91dGlscy9nZXQtZGVmYXVsdC1jb250YWluZXInXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnRFbWl0dGVyJ1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tICcuL2dlb21ldHJ5L3JlY3RhbmdsZSdcbmltcG9ydCB7IHRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3RvcnkgfSBmcm9tICcuL2dlb21ldHJ5L2Rpc3RhbmNlcydcbmltcG9ydCB7IHNjb3BlcywgZGVmYXVsdFNjb3BlIH0gZnJvbSAnLi9zY29wZSdcblxuaW1wb3J0IHsgRmxvYXRMZWZ0U3RyYXRlZ3kgfSBmcm9tICcuL3Bvc2l0aW9uaW5nJ1xuaW1wb3J0IHsgQm91bmRUb0VsZW1lbnQgfSBmcm9tICcuL2JvdW5kaW5nJ1xuXG5jb25zdCBhZGRUb0RlZmF1bHRTY29wZSA9IGZ1bmN0aW9uKHRhcmdldCkge1xuICBkZWZhdWx0U2NvcGUuYWRkVGFyZ2V0KHRhcmdldClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFyZ2V0IGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgZHJhZ2dhYmxlcywgb3B0aW9ucyA9IHt9KSB7XG4gICAgc3VwZXIob3B0aW9ucylcbiAgICBjb25zdCB0YXJnZXQgPSB0aGlzXG5cbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHRpbWVFbmQ6IDIwMCxcbiAgICAgIHRpbWVFeGNhbmdlOiA0MDBcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGhpcy5wb3NpdGlvbmluZ1N0cmF0ZWd5ID0gb3B0aW9ucy5zdHJhdGVneSB8fCBuZXcgRmxvYXRMZWZ0U3RyYXRlZ3koXG4gICAgICB0aGlzLmdldFJlY3RhbmdsZS5iaW5kKHRoaXMpLFxuICAgICAge1xuICAgICAgICByYWRpdXM6IDgwLFxuICAgICAgICBnZXREaXN0YW5jZTogdHJhbnNmb3JtZWRTcGFjZURpc3RhbmNlRmFjdG9yeSh7IHg6IDEsIHk6IDQgfSksXG4gICAgICAgIHJlbW92YWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIClcblxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgICBkcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnRhcmdldHMucHVzaCh0YXJnZXQpKVxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZXNcblxuICAgIFRhcmdldC5lbWl0dGVyLmVtaXQoJ3RhcmdldDpjcmVhdGUnLCB0aGlzKVxuXG4gICAgdGhpcy5zdGFydEJvdW5kaW5nKClcbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgc3RhcnRCb3VuZGluZygpIHtcbiAgICB0aGlzLmJvdW5kID0gdGhpcy5vcHRpb25zLmJvdW5kIHx8IEJvdW5kVG9FbGVtZW50LmJvdW5kaW5nKHRoaXMuZWxlbWVudClcbiAgfVxuXG4gIHBvc2l0aW9uaW5nIChkcmFnZ2FibGVzLCBpbmRleGVzT2ZOZXcpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbmluZ1N0cmF0ZWd5LnBvc2l0aW9uaW5nKGRyYWdnYWJsZXMsIGluZGV4ZXNPZk5ldylcbiAgfVxuXG4gIHNvcnRpbmcgKG9sZERyYWdnYWJsZXMsIG5ld0RyYWdnYWJsZXMsIGluZGV4T2ZOZXdzKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25pbmdTdHJhdGVneS5zb3J0aW5nKG9sZERyYWdnYWJsZXMsIG5ld0RyYWdnYWJsZXMsIGluZGV4T2ZOZXdzKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBsZXQgcmVjdGFuZ2xlcywgaW5kZXhlc09mTmV3XG5cbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcyA9IHRoaXMuZHJhZ2dhYmxlcy5maWx0ZXIoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgbGV0IGVsZW1lbnQgPSBkcmFnZ2FibGUuZWxlbWVudC5wYXJlbnROb2RlXG4gICAgICB3aGlsZSAoZWxlbWVudCkge1xuICAgICAgICBpZiAoZWxlbWVudCA9PT0gdGhpcy5lbGVtZW50KSB7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlXG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9KVxuXG4gICAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmxlbmd0aCkge1xuICAgICAgaW5kZXhlc09mTmV3ID0gcmFuZ2UodGhpcy5pbm5lckRyYWdnYWJsZXMubGVuZ3RoKVxuICAgICAgcmVjdGFuZ2xlcyA9IHRoaXMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgICAgfSksIGluZGV4ZXNPZk5ldylcbiAgICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgaW5kZXhlc09mTmV3KVxuICAgICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB0aGlzLmVtaXQoJ3RhcmdldDphZGQnLCBkcmFnZ2FibGUpKVxuICAgIH1cbiAgfVxuXG4gIGdldFJlY3RhbmdsZSgpIHtcbiAgICByZXR1cm4gUmVjdGFuZ2xlLmZyb21FbGVtZW50KHRoaXMuZWxlbWVudCwgdGhpcy5jb250YWluZXIsIHRydWUpXG4gIH1cblxuICBjYXRjaERyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmNhdGNoRHJhZ2dhYmxlKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmNhdGNoRHJhZ2dhYmxlKHRoaXMsIGRyYWdnYWJsZSlcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGFyZ2V0UmVjdGFuZ2xlID0gdGhpcy5nZXRSZWN0YW5nbGUoKVxuICAgICAgY29uc3QgZHJhZ2dhYmxlU3F1YXJlID0gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpLmdldFNxdWFyZSgpXG5cbiAgICAgIHJldHVybiBkcmFnZ2FibGVTcXVhcmUgPCB0YXJnZXRSZWN0YW5nbGUuZ2V0U3F1YXJlKClcbiAgICAgICAgICAgICAgJiYgdGFyZ2V0UmVjdGFuZ2xlLmluY2x1ZGVQb2ludChkcmFnZ2FibGUuZ2V0Q2VudGVyKCkpXG4gICAgfVxuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UmVjdGFuZ2xlKCkucG9zaXRpb25cbiAgfVxuXG4gIGdldFNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UmVjdGFuZ2xlKCkuc2l6ZVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICBzY29wZXMuZm9yRWFjaCgoc2NvcGUpID0+IHJlbW92ZUl0ZW0oc2NvcGUudGFyZ2V0cywgdGhpcykpXG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgfSksIFtdKVxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgW10sIDApXG4gIH1cblxuICBvbkVuZChkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBuZXdEcmFnZ2FibGVzSW5kZXggPSBbXVxuXG4gICAgaWYgKHRoaXMuZ2V0UmVjdGFuZ2xlKCkuaW5jbHVkZVBvaW50KGRyYWdnYWJsZS5nZXRDZW50ZXIoKSkpIHtcbiAgICAgIGRyYWdnYWJsZS5wb3NpdGlvbiA9IHRoaXMuYm91bmQoZHJhZ2dhYmxlLnBvc2l0aW9uLCBkcmFnZ2FibGUuZ2V0U2l6ZSgpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICB0aGlzLmVtaXQoJ3RhcmdldDpiZWZvcmVBZGQnLCBkcmFnZ2FibGUpXG5cbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcyA9IHRoaXMuc29ydGluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcywgW2RyYWdnYWJsZV0sIG5ld0RyYWdnYWJsZXNJbmRleClcbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBuZXdEcmFnZ2FibGVzSW5kZXgpXG5cbiAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIG5ld0RyYWdnYWJsZXNJbmRleClcbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMSkge1xuICAgICAgdGhpcy5hZGRSZW1vdmVPbk1vdmUoZHJhZ2dhYmxlKVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgaW5kZXhlc09mTmV3LCB0aW1lKSB7XG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuc2xpY2UoMCkuZm9yRWFjaCgoZHJhZ2dhYmxlLCBpKSA9PiB7XG4gICAgICBjb25zdCByZWN0ID0gcmVjdGFuZ2xlc1tpXSxcbiAgICAgICAgdGltZUVuZCA9IHRpbWUgfHwgdGltZSA9PT0gMCA/IHRpbWUgOiBpbmRleGVzT2ZOZXcuaW5kZXhPZihpKSAhPT0gLTEgPyB0aGlzLm9wdGlvbnMudGltZUVuZCA6IHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZVxuXG4gICAgICBpZiAocmVjdC5yZW1vdmFibGUpIHtcbiAgICAgICAgZHJhZ2dhYmxlLm1vdmUoZHJhZ2dhYmxlLmluaXRpYWxQb3NpdGlvbiwgdGltZUVuZCwgdHJ1ZSwgdHJ1ZSlcbiAgICAgICAgcmVtb3ZlSXRlbSh0aGlzLmlubmVyRHJhZ2dhYmxlcywgZHJhZ2dhYmxlKVxuICAgICAgICB0aGlzLmVtaXQoJ3RhcmdldDpyZW1vdmUnLCBkcmFnZ2FibGUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkcmFnZ2FibGUubW92ZShyZWN0LnBvc2l0aW9uLCB0aW1lRW5kLCB0cnVlLCB0cnVlKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBhZGQoZHJhZ2dhYmxlLCB0aW1lKSB7XG4gICAgY29uc3QgbmV3RHJhZ2dhYmxlc0luZGV4ID0gdGhpcy5pbm5lckRyYWdnYWJsZXMubGVuZ3RoXG5cbiAgICB0aGlzLmVtaXQoJ3RhcmdldDpiZWZvcmVBZGQnLCBkcmFnZ2FibGUpXG5cbiAgICB0aGlzLnB1c2hJbm5lckRyYWdnYWJsZShkcmFnZ2FibGUpXG4gICAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgbmV3RHJhZ2dhYmxlc0luZGV4LCBkcmFnZ2FibGUpXG5cbiAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIFtuZXdEcmFnZ2FibGVzSW5kZXhdLCB0aW1lIHx8IDApXG4gICAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTEpIHtcbiAgICAgIHRoaXMuYWRkUmVtb3ZlT25Nb3ZlKGRyYWdnYWJsZSlcbiAgICB9XG4gIH1cblxuICBwdXNoSW5uZXJEcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKT09PS0xKSB7XG4gICAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5wdXNoKGRyYWdnYWJsZSlcbiAgICB9XG4gIH1cblxuICBhZGRSZW1vdmVPbk1vdmUoZHJhZ2dhYmxlKSB7XG4gICAgZHJhZ2dhYmxlLm9uKCdkcmFnOm1vdmUnLCB0aGlzLnJlbW92ZUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICB0aGlzLnJlbW92ZShkcmFnZ2FibGUpXG4gICAgfSlcblxuICAgIHRoaXMuZW1pdCgndGFyZ2V0OmFkZCcsIGRyYWdnYWJsZSlcbiAgfVxuXG4gIHJlbW92ZShkcmFnZ2FibGUpIHtcbiAgICBkcmFnZ2FibGUudW5zdWJzY3JpYmUoJ2RyYWc6bW92ZScsIHRoaXMucmVtb3ZlSGFuZGxlcilcblxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpXG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuc3BsaWNlKGluZGV4LCAxKVxuXG4gICAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgW10pXG5cbiAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIFtdKVxuICAgIHRoaXMuZW1pdCgndGFyZ2V0OnJlbW92ZScsIGRyYWdnYWJsZSlcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLm1vdmUoZHJhZ2dhYmxlLmluaXRpYWxQb3NpdGlvbiwgMCwgdHJ1ZSwgdHJ1ZSlcbiAgICAgIHRoaXMuZW1pdCgndGFyZ2V0OnJlbW92ZScsIGRyYWdnYWJsZSlcbiAgICB9KVxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzID0gW11cbiAgfVxuXG4gIGdldFNvcnRlZERyYWdnYWJsZXMoKSB7XG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuc2xpY2UoKVxuICB9XG5cbiAgZ2V0IGNvbnRhaW5lcigpIHtcbiAgICByZXR1cm4gKHRoaXMuX2NvbnRhaW5lciA9IHRoaXMuX2NvbnRhaW5lciB8fCB0aGlzLm9wdGlvbnMuY29udGFpbmVyIHx8IHRoaXMub3B0aW9ucy5wYXJlbnQgfHwgZ2V0RGVmYXVsdENvbnRhaW5lcih0aGlzLmVsZW1lbnQpKVxuICB9XG59XG5cblRhcmdldC5lbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcigpXG5UYXJnZXQuZW1pdHRlci5vbigndGFyZ2V0OmNyZWF0ZScsIGFkZFRvRGVmYXVsdFNjb3BlKVxuIiwiaW1wb3J0IHJlbW92ZUl0ZW0gZnJvbSAnLi91dGlscy9yZW1vdmUtYXJyYXktaXRlbSdcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudEVtaXR0ZXInXG5pbXBvcnQgRHJhZ2dhYmxlIGZyb20gJy4vZHJhZ2dhYmxlJ1xuaW1wb3J0IFRhcmdldCBmcm9tICcuL3RhcmdldCdcblxuY29uc3Qgc2NvcGVzID0gW11cblxuY2xhc3MgU2NvcGUgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvcihkcmFnZ2FibGVzLCB0YXJnZXRzLCBvcHRpb25zPXt9KSB7XG4gICAgc3VwZXIob3B0aW9ucylcbiAgICBzY29wZXMuZm9yRWFjaCgoc2NvcGUpID0+IHtcbiAgICAgIGlmIChkcmFnZ2FibGVzKSB7XG4gICAgICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICAgICAgcmVtb3ZlSXRlbShzY29wZS5kcmFnZ2FibGVzLCBkcmFnZ2FibGUpXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIGlmICh0YXJnZXRzKSB7XG4gICAgICAgIHRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB7XG4gICAgICAgICAgcmVtb3ZlSXRlbShzY29wZS50YXJnZXRzLCB0YXJnZXQpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZXMgfHwgW11cbiAgICB0aGlzLnRhcmdldHMgPSB0YXJnZXRzIHx8IFtdXG4gICAgc2NvcGVzLnB1c2godGhpcylcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICB0aW1lRW5kOiAob3B0aW9ucy50aW1lRW5kKSB8fCA0MDBcbiAgICB9XG5cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUuZHJhZ0VuZEFjdGlvbiA9ICgpID0+IHRoaXMub25FbmQoZHJhZ2dhYmxlKVxuICAgIH0pXG4gIH1cblxuICBhZGREcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxuICAgIGRyYWdnYWJsZS5kcmFnRW5kQWN0aW9uID0gKCkgPT4gdGhpcy5vbkVuZChkcmFnZ2FibGUpXG4gIH1cblxuICBhZGRUYXJnZXQodGFyZ2V0KSB7XG4gICAgdGhpcy50YXJnZXRzLnB1c2godGFyZ2V0KVxuICB9XG5cbiAgb25FbmQoZHJhZ2dhYmxlKSB7XG4gICAgY29uc3Qgc2hvdFRhcmdldHMgPSB0aGlzLnRhcmdldHMuZmlsdGVyKCh0YXJnZXQpID0+IHtcbiAgICAgIHJldHVybiB0YXJnZXQuZHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkgIT09IC0xXG4gICAgfSkuZmlsdGVyKCh0YXJnZXQpID0+IHtcbiAgICAgIHJldHVybiB0YXJnZXQuY2F0Y2hEcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICAgIH0pLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIHJldHVybiBhLmdldFJlY3RhbmdsZSgpLmdldFNxdWFyZSgpIC0gYi5nZXRSZWN0YW5nbGUoKS5nZXRTcXVhcmUoKVxuICAgIH0pXG5cbiAgICBpZiAoc2hvdFRhcmdldHMubGVuZ3RoKSB7XG4gICAgICBzaG90VGFyZ2V0c1swXS5vbkVuZChkcmFnZ2FibGUpXG4gICAgfSBlbHNlIGlmIChkcmFnZ2FibGUudGFyZ2V0cy5sZW5ndGgpIHtcbiAgICAgIGRyYWdnYWJsZS5waW5Qb3NpdGlvbihkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uLCB0aGlzLm9wdGlvbnMudGltZUVuZClcbiAgICB9XG5cbiAgICB0aGlzLmVtaXQoJ3Njb3BlOmNoYW5nZScpXG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLnRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB0YXJnZXQucmVzZXQoKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnJlZnJlc2goKSlcbiAgICB0aGlzLnRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB0YXJnZXQucmVmcmVzaCgpKVxuICB9XG5cbiAgZ2V0IHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXRzLm1hcCgodGFyZ2V0KSA9PiB7XG4gICAgICByZXR1cm4gdGFyZ2V0LmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4gdGhpcy5kcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSlcbiAgICB9KVxuICB9XG5cbiAgc2V0IHBvc2l0aW9ucyhwb3NpdGlvbnMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gJ3dyb25nIGFycmF5IGxlbmd0aCdcbiAgICBpZiAocG9zaXRpb25zLmxlbmd0aCA9PT0gdGhpcy50YXJnZXRzLmxlbmd0aCkge1xuICAgICAgdGhpcy50YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4gdGFyZ2V0LnJlc2V0KCkpXG5cbiAgICAgIHBvc2l0aW9ucy5mb3JFYWNoKCh0YXJnZXRJbmRleGVzLCBpKSA9PiB7XG4gICAgICAgIHRhcmdldEluZGV4ZXMuZm9yRWFjaCgoaW5kZXgpID0+IHtcbiAgICAgICAgICB0aGlzLnRhcmdldHNbaV0uYWRkKHRoaXMuZHJhZ2dhYmxlc1tpbmRleF0pXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBtZXNzYWdlXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IGRlZmF1bHRTY29wZSA9IG5ldyBTY29wZSgpXG5cbmZ1bmN0aW9uIHNjb3BlKGZuKSB7XG4gIGNvbnN0IGN1cnJlbnRTY29wZSA9IG5ldyBTY29wZSgpXG5cbiAgY29uc3QgYWRkRHJhZ2dhYmxlVG9TY29wZSA9IGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICAgIGN1cnJlbnRTY29wZS5hZGREcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICAgIERyYWdnYWJsZS5lbWl0dGVyLmludGVycnVwdCgpXG4gIH1cblxuICBjb25zdCBhZGRUYXJnZXRUb1Njb3BlID0gZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgY3VycmVudFNjb3BlLmFkZFRhcmdldCh0YXJnZXQpXG4gICAgRHJhZ2dhYmxlLmVtaXR0ZXIuaW50ZXJydXB0KClcbiAgfVxuXG4gIERyYWdnYWJsZS5lbWl0dGVyLnByZXBlbmRPbignZHJhZ2dhYmxlOmNyZWF0ZScsIGFkZERyYWdnYWJsZVRvU2NvcGUpXG4gIFRhcmdldC5lbWl0dGVyLnByZXBlbmRPbigndGFyZ2V0OmNyZWF0ZScsIGFkZFRhcmdldFRvU2NvcGUpXG4gIGZuLmNhbGwoKVxuICBEcmFnZ2FibGUuZW1pdHRlci51bnN1YnNjcmliZSgnZHJhZ2dhYmxlOmNyZWF0ZScsIGFkZERyYWdnYWJsZVRvU2NvcGUpXG4gIFRhcmdldC5lbWl0dGVyLnVuc3Vic2NyaWJlKCd0YXJnZXQ6Y3JlYXRlJywgYWRkVGFyZ2V0VG9TY29wZSlcbiAgcmV0dXJuIGN1cnJlbnRTY29wZVxufVxuXG5leHBvcnQgeyBzY29wZXMsIGRlZmF1bHRTY29wZSwgU2NvcGUsIHNjb3BlIH1cbiIsImZ1bmN0aW9uIGNoZWNrU3VwcG9ydFBhc3NpdmVFdmVudHMoKSB7XG4gIGxldCBwYXNzaXZlU3VwcG9ydGVkID0gZmFsc2VcblxuICB0cnkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdwYXNzaXZlJywge1xuICAgICAgZ2V0KCkge1xuICAgICAgICByZXR1cm4gKHBhc3NpdmVTdXBwb3J0ZWQgPSB0cnVlKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndGVzdCcsIG9wdGlvbnMsIG9wdGlvbnMpXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Rlc3QnLCBvcHRpb25zLCBvcHRpb25zKVxuICB9IGNhdGNoIChfZXJyKSB7XG4gICAgcGFzc2l2ZVN1cHBvcnRlZCA9IGZhbHNlXG4gIH1cblxuICByZXR1cm4gcGFzc2l2ZVN1cHBvcnRlZFxufVxuXG5leHBvcnQgY29uc3QgaXNTdXBwb3J0UGFzc2l2ZUV2ZW50cyA9IGNoZWNrU3VwcG9ydFBhc3NpdmVFdmVudHMoKVxuXG5mdW5jdGlvbiBldmVudE9wdGlvbnMob3B0aW9ucywgZmFsbGJhY2sgPSBmYWxzZSkge1xuICByZXR1cm4gaXNTdXBwb3J0UGFzc2l2ZUV2ZW50cyA/IG9wdGlvbnMgOiBmYWxsYmFja1xufVxuXG5leHBvcnQgeyBldmVudE9wdGlvbnMgfVxuXG5leHBvcnQgZGVmYXVsdCBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0aHJvdHRsZShmdW5jLCB3YWl0KSB7XG4gIGxldCBsYXN0VGltZSA9IDBcblxuICByZXR1cm4gZnVuY3Rpb24gZXhlY3V0ZWRGdW5jdGlvbigpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpc1xuICAgIGNvbnN0IGFyZ3MgPSBhcmd1bWVudHNcblxuICAgIGNvbnN0IG5vdyA9IERhdGUubm93KClcbiAgICBpZiAobm93IC0gbGFzdFRpbWUgPj0gd2FpdCkge1xuICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKVxuICAgICAgbGFzdFRpbWUgPSBub3dcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBnZXREZWZhdWx0Q29udGFpbmVyIGZyb20gJy4vdXRpbHMvZ2V0LWRlZmF1bHQtY29udGFpbmVyJ1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50RW1pdHRlcidcbmltcG9ydCBnZXRTdHlsZVByb3BlcnR5IGZyb20gJ2Rlc2FuZHJvLWdldC1zdHlsZS1wcm9wZXJ0eSdcbmltcG9ydCB7IEJvdW5kVG9FbGVtZW50IH0gZnJvbSAnLi9ib3VuZGluZydcbmltcG9ydCBQb2ludCBmcm9tICcuL2dlb21ldHJ5L3BvaW50J1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tICcuL2dlb21ldHJ5L3JlY3RhbmdsZSdcbmltcG9ydCB7IGRlZmF1bHRTY29wZSB9IGZyb20gJy4vc2NvcGUnXG5pbXBvcnQgaXNTdXBwb3J0UGFzc2l2ZUV2ZW50cyBmcm9tICcuL3V0aWxzL2lzLXN1cHBvcnQtcGFzc2l2ZS1ldmVudHMnXG5pbXBvcnQgdGhyb3R0bGUgZnJvbSAnLi91dGlscy90aHJvdHRsZSdcblxuY29uc3QgdGhyb3R0bGVkRHJhZ092ZXIgPSAoY2FsbGJhY2ssIGR1cmF0aW9uKSA9PiB7XG4gIGNvbnN0IHRocm90dGxlZENhbGxiYWNrID0gdGhyb3R0bGUoKGV2ZW50KSA9PiBjYWxsYmFjayhldmVudCksIGR1cmF0aW9uKVxuICByZXR1cm4gZXZlbnQgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB0aHJvdHRsZWRDYWxsYmFjayhldmVudClcbiAgfVxufVxuXG5jb25zdCBwYXNzaXZlRmFsc2UgPSBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzID8geyBwYXNzaXZlOiBmYWxzZSB9IDogZmFsc2VcblxuY29uc3QgaXNUb3VjaCA9ICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvd1xuY29uc3QgbW91c2VFdmVudHMgPSB7XG4gIHN0YXJ0OiAnbW91c2Vkb3duJyxcbiAgbW92ZTogJ21vdXNlbW92ZScsXG4gIGVuZDogJ21vdXNldXAnXG59XG5jb25zdCB0b3VjaEV2ZW50cyA9IHtcbiAgc3RhcnQ6ICd0b3VjaHN0YXJ0JyxcbiAgbW92ZTogJ3RvdWNobW92ZScsXG4gIGVuZDogJ3RvdWNoZW5kJ1xufVxuY29uc3QgZHJhZ2dhYmxlcyA9IFtdXG5jb25zdCB0cmFuc2Zvcm1Qcm9wZXJ0eSA9IGdldFN0eWxlUHJvcGVydHkoJ3RyYW5zZm9ybScpXG5jb25zdCB0cmFuc2l0aW9uUHJvcGVydHkgPSBnZXRTdHlsZVByb3BlcnR5KCd0cmFuc2l0aW9uJylcblxuZnVuY3Rpb24gZ2V0VG91Y2hCeUlEKGVsZW1lbnQsIHRvdWNoSWQpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50LmNoYW5nZWRUb3VjaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGVsZW1lbnQuY2hhbmdlZFRvdWNoZXNbaV0uaWRlbnRpZmllciA9PT0gdG91Y2hJZCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQuY2hhbmdlZFRvdWNoZXNbaV1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmZ1bmN0aW9uIHByZXZlbnREb3VibGVJbml0KGRyYWdnYWJsZSkge1xuICBjb25zdCBtZXNzYWdlID0gXCJmb3IgdGhpcyBlbGVtZW50IERyYWdlZS5EcmFnZ2FibGUgaXMgYWxyZWFkeSBleGlzdCwgZG9uJ3QgY3JlYXRlIGl0IHR3aWNlIFwiXG4gIGlmIChkcmFnZ2FibGVzLnNvbWUoKGV4aXN0aW5nKSA9PiBkcmFnZ2FibGUuZWxlbWVudCA9PT0gZXhpc3RpbmcuZWxlbWVudCkpIHtcbiAgICB0aHJvdyBtZXNzYWdlXG4gIH1cbiAgZHJhZ2dhYmxlcy5wdXNoKGRyYWdnYWJsZSlcbn1cblxuZnVuY3Rpb24gYWRkVG9EZWZhdWx0U2NvcGUoZHJhZ2dhYmxlKSB7XG4gIGRlZmF1bHRTY29wZS5hZGREcmFnZ2FibGUoZHJhZ2dhYmxlKVxufVxuXG5mdW5jdGlvbiBjb3B5U3R5bGVzKHNvdXJjZSwgZGVzdGluYXRpb24pIHtcbiAgY29uc3QgY3MgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShzb3VyY2UpXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGtleSA9IGNzW2ldXG4gICAgaWYgKChrZXkuaW5kZXhPZigndHJhbnNpdGlvbicpIDwgMCkgJiYgKGtleS5pbmRleE9mKCd0cmFuc2Zvcm0nKSA8IDApKSB7XG4gICAgICBkZXN0aW5hdGlvbi5zdHlsZVtrZXldID0gY3Nba2V5XVxuICAgIH1cbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc291cmNlLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgY29weVN0eWxlcyhzb3VyY2UuY2hpbGRyZW5baV0sIGRlc3RpbmF0aW9uLmNoaWxkcmVuW2ldKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYWdnYWJsZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcihvcHRpb25zKVxuICAgIHRoaXMudGFyZ2V0cyA9IFtdXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9uc1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgICBwcmV2ZW50RG91YmxlSW5pdCh0aGlzKVxuICAgIERyYWdnYWJsZS5lbWl0dGVyLmVtaXQoJ2RyYWdnYWJsZTpjcmVhdGUnLCB0aGlzKVxuICAgIHRoaXMuX2VuYWJsZSA9IHRydWVcbiAgICB0aGlzLnN0YXJ0Qm91bmRpbmcoKVxuICAgIHRoaXMuc3RhcnRQb3NpdGlvbmluZygpXG4gICAgdGhpcy5zdGFydExpc3RlbmluZygpXG4gIH1cblxuICBzdGFydEJvdW5kaW5nKCkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuYm91bmQpIHtcbiAgICAgIHRoaXMuYm91bmRpbmcgPSB7IGJvdW5kOiB0aGlzLm9wdGlvbnMuYm91bmQgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmJvdW5kaW5nID0gbmV3IEJvdW5kVG9FbGVtZW50KHRoaXMuY29udGFpbmVyLCB0aGlzLmNvbnRhaW5lcilcbiAgICB9XG4gIH1cblxuICBzdGFydFBvc2l0aW9uaW5nKCkge1xuICAgIHRoaXMuX3NldERlZmF1bHRUcmFuc2l0aW9uKClcbiAgICB0aGlzLm9mZnNldCA9IFBvaW50LmVsZW1lbnRPZmZzZXQodGhpcy5lbGVtZW50LCB0aGlzLmNvbnRhaW5lciwgdHJ1ZSlcbiAgICB0aGlzLnBpbm5lZFBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICB0aGlzLmluaXRpYWxQb3NpdGlvbiA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbiB8fCB0aGlzLm9mZnNldFxuXG4gICAgdGhpcy5waW5Qb3NpdGlvbih0aGlzLmluaXRpYWxQb3NpdGlvbilcblxuICAgIGlmICh0aGlzLmJvdW5kaW5nLnJlZnJlc2gpIHtcbiAgICAgIHRoaXMuYm91bmRpbmcucmVmcmVzaCgpXG4gICAgfVxuICB9XG5cbiAgc3RhcnRMaXN0ZW5pbmcoKSB7XG4gICAgdGhpcy5fZHJhZ1N0YXJ0ID0gKGV2ZW50KSA9PiB0aGlzLmRyYWdTdGFydChldmVudClcbiAgICB0aGlzLl9kcmFnTW92ZSA9IChldmVudCkgPT4gdGhpcy5kcmFnTW92ZShldmVudClcbiAgICB0aGlzLl9kcmFnRW5kID0gKGV2ZW50KSA9PiB0aGlzLmRyYWdFbmQoZXZlbnQpXG4gICAgdGhpcy5fbmF0aXZlRHJhZ1N0YXJ0ID0gKGV2ZW50KSA9PiB0aGlzLm5hdGl2ZURyYWdTdGFydChldmVudClcbiAgICB0aGlzLl9uYXRpdmVEcmFnT3ZlciA9IHRocm90dGxlZERyYWdPdmVyKChldmVudCkgPT4gdGhpcy5uYXRpdmVEcmFnT3ZlcihldmVudCksIHRoaXMuZHJhZ092ZXJUaHJvdHRsZUR1cmF0aW9uKVxuICAgIHRoaXMuX25hdGl2ZURyYWdFbmQgPSAoZXZlbnQpID0+IHRoaXMubmF0aXZlRHJhZ0VuZChldmVudClcbiAgICB0aGlzLl9uYXRpdmVEcm9wID0gKGV2ZW50KSA9PiB0aGlzLm5hdGl2ZURyb3AoZXZlbnQpXG4gICAgdGhpcy5fc2Nyb2xsID0gKGV2ZW50KSA9PiB0aGlzLm9uU2Nyb2xsKGV2ZW50KVxuXG4gICAgdGhpcy5oYW5kbGVyLmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydCwgcGFzc2l2ZUZhbHNlKVxuICAgIHRoaXMuaGFuZGxlci5hZGRFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQsIHBhc3NpdmVGYWxzZSlcbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgdGhpcy5fbmF0aXZlRHJhZ1N0YXJ0KVxuICB9XG5cbiAgZ2V0U2l6ZSgpIHtcbiAgICByZXR1cm4gUG9pbnQuZWxlbWVudFNpemUodGhpcy5lbGVtZW50KVxuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMub2Zmc2V0LmFkZCh0aGlzLl90cmFuc2Zvcm1Qb3NpdGlvbiB8fCBuZXcgUG9pbnQoMCwgMCkpXG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25cbiAgfVxuXG4gIGdldENlbnRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi5hZGQodGhpcy5nZXRTaXplKCkubXVsdCgwLjUpKVxuICB9XG5cbiAgX3NldERlZmF1bHRUcmFuc2l0aW9uICgpIHtcbiAgICBpZiAoIXRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNpdGlvblByb3BlcnR5XSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZWxlbWVudClbdHJhbnNpdGlvblByb3BlcnR5XVxuICAgIH1cbiAgfVxuXG4gIF9zZXRUcmFuc2l0aW9uKHRpbWUpIHtcbiAgICBsZXQgdHJhbnNpdGlvbiA9IHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldXG4gICAgY29uc3QgdHJhbnNpdGlvbkNzcyA9IGB0cmFuc2Zvcm0gJHt0aW1lfW1zYFxuXG4gICAgaWYgKCEvdHJhbnNmb3JtIFxcZCptP3MvLnRlc3QodHJhbnNpdGlvbikpIHtcbiAgICAgIGlmICh0cmFuc2l0aW9uKSB7XG4gICAgICAgIHRyYW5zaXRpb24gKz0gYCwgJHt0cmFuc2l0aW9uQ3NzfWBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyYW5zaXRpb24gPSB0cmFuc2l0aW9uQ3NzXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyYW5zaXRpb24gPSB0cmFuc2l0aW9uLnJlcGxhY2UoL3RyYW5zZm9ybSBcXGQqbT9zL2csIHRyYW5zaXRpb25Dc3MpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldICE9PSB0cmFuc2l0aW9uKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNpdGlvblByb3BlcnR5XSA9IHRyYW5zaXRpb25cbiAgICB9XG4gIH1cblxuICBfc2V0VHJhbnNsYXRlKHBvaW50KSB7XG4gICAgdGhpcy5fdHJhbnNmb3JtUG9zaXRpb24gPSBwb2ludFxuICAgIGNvbnN0IHRyYW5zbGF0ZUNzcyA9IGB0cmFuc2xhdGUzZCgke3BvaW50Lnh9cHgsICR7cG9pbnQueX1weCwgMHB4KWBcblxuICAgIGxldCB0cmFuc2Zvcm0gPSB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcGVydHldXG5cbiAgICBpZiAodGhpcy5zaG91bGRSZW1vdmVaZXJvVHJhbnNsYXRlICYmIHBvaW50LnggPT09IDAgJiYgcG9pbnQueSA9PT0gMCkge1xuICAgICAgdHJhbnNmb3JtID0gdHJhbnNmb3JtLnJlcGxhY2UoL3RyYW5zbGF0ZTNkXFwoW14pXStcXCkvLCAnJylcbiAgICB9IGVsc2UgaWYgKCEvdHJhbnNsYXRlM2RcXChbXildK1xcKS8udGVzdCh0cmFuc2Zvcm0pKSB7XG4gICAgICBpZiAodHJhbnNmb3JtKSB7XG4gICAgICAgIHRyYW5zZm9ybSArPSAnICdcbiAgICAgIH1cbiAgICAgIHRyYW5zZm9ybSArPSB0cmFuc2xhdGVDc3NcbiAgICB9IGVsc2Uge1xuICAgICAgdHJhbnNmb3JtID0gdHJhbnNmb3JtLnJlcGxhY2UoL3RyYW5zbGF0ZTNkXFwoW14pXStcXCkvLCB0cmFuc2xhdGVDc3MpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wZXJ0eV0gIT09IHRyYW5zZm9ybSkge1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BlcnR5XSA9IHRyYW5zZm9ybVxuICAgIH1cbiAgfVxuXG4gIG1vdmUocG9pbnQsIHRpbWU9MCwgaXNTaWxlbnQ9ZmFsc2UpIHtcbiAgICBwb2ludCA9IHBvaW50LmNsb25lKClcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9pbnRcblxuICAgIHRoaXMuX3NldFRyYW5zaXRpb24odGltZSlcbiAgICB0aGlzLl9zZXRUcmFuc2xhdGUocG9pbnQuc3ViKHRoaXMub2Zmc2V0KSlcblxuICAgIGlmICghaXNTaWxlbnQpIHtcbiAgICAgIHRoaXMuZW1pdCgnZHJhZzptb3ZlJylcbiAgICB9XG4gIH1cblxuICBwaW5Qb3NpdGlvbihwb2ludCwgdGltZT0wLCBzaWxlbnQ9dHJ1ZSkge1xuICAgIHRoaXMucGlubmVkUG9zaXRpb24gPSBwb2ludC5jbG9uZSgpXG4gICAgdGhpcy5tb3ZlKHRoaXMucGlubmVkUG9zaXRpb24sIHRpbWUsIHNpbGVudClcbiAgfVxuXG4gIHJlc2V0UG9zaXRpb25Ub0luaXRpYWwgKCkge1xuICAgIHRoaXMucGluUG9zaXRpb24odGhpcy5pbml0aWFsUG9zaXRpb24pXG4gIH1cblxuICByZWZyZXNoUG9zaXRpb24gKCkge1xuICAgIHRoaXMuc2V0UG9zaXRpb24odGhpcy5nZXRQb3NpdGlvbigpKVxuICB9XG5cbiAgc2V0UG9zaXRpb24ocG9pbnQpIHtcbiAgICBwb2ludCA9IHBvaW50LmNsb25lKClcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9pbnRcbiAgICB0aGlzLl9zZXRUcmFuc2l0aW9uKDApXG4gICAgdGhpcy5fc2V0VHJhbnNsYXRlKHBvaW50LnN1Yih0aGlzLm9mZnNldCkpXG4gIH1cblxuICBkZXRlcm1pbmVEaXJlY3Rpb24ocG9pbnQpIHtcbiAgICB0aGlzLl9wcmV2aW91c0RpcmVjdGlvblBvc2l0aW9uIHx8PSB0aGlzLl9zdGFydFBvc2l0aW9uXG5cbiAgICB0aGlzLmxlZnREaXJlY3Rpb24gPSAodGhpcy5fcHJldmlvdXNEaXJlY3Rpb25Qb3NpdGlvbi54IDwgcG9pbnQueClcbiAgICB0aGlzLnJpZ2h0RGlyZWN0aW9uID0gKHRoaXMuX3ByZXZpb3VzRGlyZWN0aW9uUG9zaXRpb24ueCA+IHBvaW50LngpXG4gICAgdGhpcy51cERpcmVjdGlvbiA9ICh0aGlzLl9wcmV2aW91c0RpcmVjdGlvblBvc2l0aW9uLnkgPiBwb2ludC55KVxuICAgIHRoaXMuZG93bkRpcmVjdGlvbiA9ICh0aGlzLl9wcmV2aW91c0RpcmVjdGlvblBvc2l0aW9uLnkgPCBwb2ludC55KVxuXG4gICAgdGhpcy5fcHJldmlvdXNEaXJlY3Rpb25Qb3NpdGlvbiA9IHBvaW50XG4gIH1cblxuICBzZWVtc1Njcm9sbGluZygpIHtcbiAgICByZXR1cm4gKCtuZXcgRGF0ZSgpIC0gdGhpcy5fc3RhcnRUb3VjaFRpbWVzdGFtcCkgPCB0aGlzLnRvdWNoRHJhZ2dpbmdUaHJlc2hvbGRcbiAgfVxuXG4gIHNob3VsZFVzZU5hdGl2ZURyYWdBbmREcm9wKCkge1xuICAgIGlmICh0aGlzLmlzVG91Y2hFdmVudCkge1xuICAgICAgcmV0dXJuIHRoaXMubmF0aXZlRHJhZ0FuZERyb3AgJiYgdGhpcy5lbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3BPblRvdWNoXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLm5hdGl2ZURyYWdBbmREcm9wXG4gICAgfVxuICB9XG5cbiAgZHJhZ1N0YXJ0KGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLl9lbmFibGUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuaXNUb3VjaEV2ZW50ID0gKGlzVG91Y2ggJiYgKGV2ZW50IGluc3RhbmNlb2Ygd2luZG93LlRvdWNoRXZlbnQpKVxuXG4gICAgdGhpcy50b3VjaFBvaW50ID0gdGhpcy5fc3RhcnRUb3VjaFBvaW50ID0gbmV3IFBvaW50KFxuICAgICAgdGhpcy5pc1RvdWNoRXZlbnQgPyBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCA6IGV2ZW50LmNsaWVudFgsXG4gICAgICB0aGlzLmlzVG91Y2hFdmVudCA/IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZIDogZXZlbnQuY2xpZW50WVxuICAgIClcblxuICAgIHRoaXMuX3N0YXJ0UG9zaXRpb24gPSB0aGlzLmdldFBvc2l0aW9uKClcbiAgICBpZiAodGhpcy5pc1RvdWNoRXZlbnQpIHtcbiAgICAgIHRoaXMuX3RvdWNoSWQgPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5pZGVudGlmaWVyXG4gICAgICB0aGlzLl9zdGFydFRvdWNoVGltZXN0YW1wID0gK25ldyBEYXRlKClcbiAgICB9XG5cbiAgICB0aGlzLl9zdGFydFdpbmRvd1Njcm9sbFBvaW50ID0gdGhpcy53aW5kb3dTY3JvbGxQb2ludFxuICAgIHRoaXMuX3N0YXJ0UGFyZW50c1Njcm9sbFBvaW50ID0gdGhpcy5wYXJlbnRzU2Nyb2xsUG9pbnRcblxuICAgIGlmIChldmVudC50YXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElucHV0RWxlbWVudCB8fFxuICAgICAgICAgIGV2ZW50LnRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSW5wdXRFbGVtZW50KSB7XG4gICAgICBldmVudC50YXJnZXQuZm9jdXMoKVxuICAgIH1cblxuICAgIGlmICh0aGlzLnNob3VsZFVzZU5hdGl2ZURyYWdBbmREcm9wKCkpIHtcbiAgICAgIGlmICh0aGlzLmlzVG91Y2hFdmVudCAmJiB0aGlzLmVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcE9uVG91Y2gpIHtcbiAgICAgICAgY29uc3QgZW11bGF0ZU9uRmlyc3RNb3ZlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuc2VlbXNTY3JvbGxpbmcoKSkge1xuICAgICAgICAgICAgdGhpcy5jYW5jZWxEcmFnZ2luZygpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wKGV2ZW50KVxuICAgICAgICAgIH1cbiAgICAgICAgICBjYW5jZWxFbXVsYXRpb24oKVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNhbmNlbEVtdWxhdGlvbiA9ICgpID0+IHtcbiAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIGVtdWxhdGVPbkZpcnN0TW92ZSlcbiAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgY2FuY2VsRW11bGF0aW9uKVxuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCBlbXVsYXRlT25GaXJzdE1vdmUsIHBhc3NpdmVGYWxzZSlcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIGNhbmNlbEVtdWxhdGlvbiwgcGFzc2l2ZUZhbHNlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmRyYWdnYWJsZSA9IHRydWVcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX25hdGl2ZURyYWdFbmQsIHBhc3NpdmVGYWxzZSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSwgcGFzc2l2ZUZhbHNlKVxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSwgcGFzc2l2ZUZhbHNlKVxuXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZCwgcGFzc2l2ZUZhbHNlKVxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQsIHBhc3NpdmVGYWxzZSlcbiAgICB9XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fc2Nyb2xsKVxuICAgIHRoaXMucGFyZW50cy5mb3JFYWNoKChwKSA9PiBwLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX3Njcm9sbCkpXG5cbiAgICB0aGlzLmVtaXQoJ2RyYWc6c3RhcnQnKVxuICB9XG5cbiAgZHJhZ01vdmUoZXZlbnQpIHtcbiAgICBsZXQgdG91Y2hcblxuICAgIHRoaXMuaXNEcmFnZ2luZyA9IHRydWVcblxuICAgIHRoaXMuaXNUb3VjaEV2ZW50ID0gKGlzVG91Y2ggJiYgKGV2ZW50IGluc3RhbmNlb2Ygd2luZG93LlRvdWNoRXZlbnQpKVxuICAgIGlmICh0aGlzLmlzVG91Y2hFdmVudCkge1xuICAgICAgdG91Y2ggPSBnZXRUb3VjaEJ5SUQoZXZlbnQsIHRoaXMuX3RvdWNoSWQpXG5cbiAgICAgIGlmICghdG91Y2gpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnNlZW1zU2Nyb2xsaW5nKCkpIHtcbiAgICAgICAgdGhpcy5jYW5jZWxEcmFnZ2luZygpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIHRoaXMudG91Y2hQb2ludCA9IG5ldyBQb2ludChcbiAgICAgIHRoaXMuaXNUb3VjaEV2ZW50ID8gdG91Y2gucGFnZVggOiBldmVudC5jbGllbnRYLFxuICAgICAgdGhpcy5pc1RvdWNoRXZlbnQgPyB0b3VjaC5wYWdlWSA6IGV2ZW50LmNsaWVudFlcbiAgICApXG5cbiAgICBsZXQgcG9pbnQgPSB0aGlzLl9zdGFydFBvc2l0aW9uLmFkZCh0aGlzLnRvdWNoUG9pbnQuc3ViKHRoaXMuX3N0YXJ0VG91Y2hQb2ludCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy53aW5kb3dTY3JvbGxQb2ludC5zdWIodGhpcy5fc3RhcnRXaW5kb3dTY3JvbGxQb2ludCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy5wYXJlbnRzU2Nyb2xsUG9pbnQuc3ViKHRoaXMuX3N0YXJ0UGFyZW50c1Njcm9sbFBvaW50KSlcblxuICAgIHBvaW50ID0gdGhpcy5ib3VuZGluZy5ib3VuZChwb2ludCwgdGhpcy5nZXRTaXplKCkpXG4gICAgdGhpcy5kZXRlcm1pbmVEaXJlY3Rpb24ocG9pbnQpXG4gICAgdGhpcy5tb3ZlKHBvaW50KVxuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkcmFnZWUtYWN0aXZlJylcbiAgfVxuXG4gIGRyYWdFbmQoZXZlbnQpIHtcbiAgICB0aGlzLmlzVG91Y2hFdmVudCA9IChpc1RvdWNoICYmIChldmVudCBpbnN0YW5jZW9mIHdpbmRvdy5Ub3VjaEV2ZW50KSlcblxuICAgIGlmICh0aGlzLmlzVG91Y2hFdmVudCAmJiAhZ2V0VG91Y2hCeUlEKGV2ZW50LCB0aGlzLl90b3VjaElkKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNEcmFnZ2luZykge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB9XG5cbiAgICB0aGlzLmRyYWdFbmRBY3Rpb24oKVxuICAgIHRoaXMuZW1pdCgnZHJhZzplbmQnKVxuICAgIHRoaXMuY2FuY2VsRHJhZ2dpbmcoKVxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2VlLWFjdGl2ZScpKVxuICB9XG5cbiAgb25TY3JvbGwoX2V2ZW50KSB7XG4gICAgbGV0IHBvaW50ID0gdGhpcy5fc3RhcnRQb3NpdGlvbi5hZGQodGhpcy50b3VjaFBvaW50LnN1Yih0aGlzLl9zdGFydFRvdWNoUG9pbnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMud2luZG93U2Nyb2xsUG9pbnQuc3ViKHRoaXMuX3N0YXJ0V2luZG93U2Nyb2xsUG9pbnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMucGFyZW50c1Njcm9sbFBvaW50LnN1Yih0aGlzLl9zdGFydFBhcmVudHNTY3JvbGxQb2ludCkpXG5cbiAgICBwb2ludCA9IHRoaXMuYm91bmRpbmcuYm91bmQocG9pbnQsIHRoaXMuZ2V0U2l6ZSgpKVxuICAgIGlmICghdGhpcy5uYXRpdmVEcmFnQW5kRHJvcCkge1xuICAgICAgdGhpcy5kZXRlcm1pbmVEaXJlY3Rpb24ocG9pbnQpXG4gICAgICB0aGlzLm1vdmUocG9pbnQpXG4gICAgfVxuICB9XG5cbiAgbmF0aXZlRHJhZ1N0YXJ0KGV2ZW50KSB7XG4gICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQnLCAnRmlyZUZveCBmaXgnKVxuICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gJ21vdmUnXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCB0aGlzLl9uYXRpdmVEcmFnT3ZlcilcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgdGhpcy5fbmF0aXZlRHJvcClcbiAgfVxuXG4gIG5hdGl2ZURyYWdPdmVyKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gJ21vdmUnXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RyYWdlZS1wbGFjZWhvbGRlcicpXG4gICAgaWYgKGV2ZW50LmNsaWVudFggPT09IDAgJiYgZXZlbnQuY2xpZW50WSA9PT0gMCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy50b3VjaFBvaW50ID0gbmV3IFBvaW50KGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpXG4gICAgbGV0IHBvaW50ID0gdGhpcy5fc3RhcnRQb3NpdGlvbi5hZGQodGhpcy50b3VjaFBvaW50LnN1Yih0aGlzLl9zdGFydFRvdWNoUG9pbnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMud2luZG93U2Nyb2xsUG9pbnQuc3ViKHRoaXMuX3N0YXJ0V2luZG93U2Nyb2xsUG9pbnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMucGFyZW50c1Njcm9sbFBvaW50LnN1Yih0aGlzLl9zdGFydFBhcmVudHNTY3JvbGxQb2ludCkpXG4gICAgcG9pbnQgPSB0aGlzLmJvdW5kaW5nLmJvdW5kKHBvaW50LCB0aGlzLmdldFNpemUoKSlcbiAgICB0aGlzLmRldGVybWluZURpcmVjdGlvbihwb2ludClcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9pbnRcbiAgICB0aGlzLmVtaXQoJ2RyYWc6bW92ZScpXG4gIH1cblxuICBuYXRpdmVEcmFnRW5kKF9ldmVudCkge1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZWUtcGxhY2Vob2xkZXInKVxuICAgIHRoaXMuZHJhZ0VuZEFjdGlvbigpXG4gICAgdGhpcy5lbWl0KCdkcmFnOmVuZCcpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCB0aGlzLl9uYXRpdmVEcmFnT3ZlcilcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcm9wJywgdGhpcy5fbmF0aXZlRHJvcClcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fc2Nyb2xsKVxuICAgIHRoaXMucGFyZW50cy5mb3JFYWNoKChwKSA9PiBwLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX3Njcm9sbCkpXG4gICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2VcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkcmFnZ2FibGUnKVxuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZWUtYWN0aXZlJylcbiAgfVxuXG4gIG5hdGl2ZURyb3AoZXZlbnQpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIGNhbmNlbERyYWdnaW5nICgpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG5cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcblxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX3Njcm9sbClcbiAgICB0aGlzLnBhcmVudHMuZm9yRWFjaCgocCkgPT4gcC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9zY3JvbGwpKVxuXG4gICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2VcbiAgICB0aGlzLl9wcmV2aW91c0RpcmVjdGlvblBvc2l0aW9uID0gbnVsbFxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2RyYWdnYWJsZScpXG4gIH1cblxuICBjb3B5U3R5bGVzKHNvdXJjZSwgZGVzdGluYXRpb24pIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmNvcHlTdHlsZXMpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5jb3B5U3R5bGVzKHNvdXJjZSwgZGVzdGluYXRpb24pXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvcHlTdHlsZXMoc291cmNlLCBkZXN0aW5hdGlvbilcbiAgICB9XG4gIH1cblxuICBlbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3AoZXZlbnQpIHtcbiAgICBjb25zdCBjb250YWluZXJSZWN0ID0gdGhpcy5jb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICBjb25zdCBjbG9uZWRFbGVtZW50ID0gdGhpcy5lbGVtZW50LmNsb25lTm9kZSh0cnVlKVxuICAgIGNsb25lZEVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcGVydHldID0gJydcbiAgICB0aGlzLmNvcHlTdHlsZXModGhpcy5lbGVtZW50LCBjbG9uZWRFbGVtZW50KVxuICAgIGNsb25lZEVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjbG9uZWRFbGVtZW50KVxuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkcmFnZWUtcGxhY2Vob2xkZXInKVxuXG4gICAgY29uc3QgZW11bGF0aW9uRHJhZ2dhYmxlID0gbmV3IERyYWdnYWJsZShjbG9uZWRFbGVtZW50LCB7XG4gICAgICBjb250YWluZXI6IGRvY3VtZW50LmJvZHksXG4gICAgICB0b3VjaERyYWdnaW5nVGhyZXNob2xkOiAwLFxuICAgICAgYm91bmQocG9pbnQpIHtcbiAgICAgICAgcmV0dXJuIHBvaW50XG4gICAgICB9LFxuICAgICAgb246IHtcbiAgICAgICAgJ2RyYWc6bW92ZSc6ICgpID0+IHtcbiAgICAgICAgICBjb25zdCBjb250YWluZXJSZWN0UG9pbnQgPSBuZXcgUG9pbnQoY29udGFpbmVyUmVjdC5sZWZ0LCBjb250YWluZXJSZWN0LnRvcClcbiAgICAgICAgICB0aGlzLnBvc2l0aW9uID0gZW11bGF0aW9uRHJhZ2dhYmxlLnBvc2l0aW9uLnN1Yihjb250YWluZXJSZWN0UG9pbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdWIodGhpcy5fc3RhcnRXaW5kb3dTY3JvbGxQb2ludClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZCh0aGlzLl9zdGFydFBhcmVudHNTY3JvbGxQb2ludClcblxuICAgICAgICAgIHRoaXMuZGV0ZXJtaW5lRGlyZWN0aW9uKHRoaXMucG9zaXRpb24pXG4gICAgICAgICAgdGhpcy5lbWl0KCdkcmFnOm1vdmUnKVxuICAgICAgICB9LFxuICAgICAgICAnZHJhZzplbmQnOiAoKSA9PiB7XG4gICAgICAgICAgZW11bGF0aW9uRHJhZ2dhYmxlLmRlc3Ryb3koKVxuICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoY2xvbmVkRWxlbWVudClcbiAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2VlLXBsYWNlaG9sZGVyJylcbiAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2VlLWFjdGl2ZScpXG5cbiAgICAgICAgICB0aGlzLmVtaXQoJ2RyYWc6ZW5kJylcbiAgICAgICAgICB0aGlzLmRyYWdFbmRBY3Rpb24oKVxuICAgICAgICAgIHRoaXMuY2FuY2VsRHJhZ2dpbmcoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IGNvbnRhaW5lclJlY3RQb2ludCA9IG5ldyBQb2ludChjb250YWluZXJSZWN0LmxlZnQsIGNvbnRhaW5lclJlY3QudG9wKVxuICAgIGVtdWxhdGlvbkRyYWdnYWJsZS5fc3RhcnRXaW5kb3dTY3JvbGxQb2ludCA9IHRoaXMuX3N0YXJ0V2luZG93U2Nyb2xsUG9pbnRcblxuICAgIGVtdWxhdGlvbkRyYWdnYWJsZS5tb3ZlKFxuICAgICAgdGhpcy5waW5uZWRQb3NpdGlvbi5hZGQoY29udGFpbmVyUmVjdFBvaW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy53aW5kb3dTY3JvbGxQb2ludClcbiAgICAgICAgICAgICAgICAgICAgICAgICAuc3ViKHRoaXMucGFyZW50c1Njcm9sbFBvaW50KVxuICAgIClcblxuICAgIGVtdWxhdGlvbkRyYWdnYWJsZS5kcmFnU3RhcnQoZXZlbnQpXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgZHJhZ0VuZEFjdGlvbigpIHtcbiAgICB0aGlzLnBpblBvc2l0aW9uKHRoaXMucG9zaXRpb24pXG4gIH1cblxuICBnZXRSZWN0YW5nbGUoKSB7XG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUodGhpcy5wb3NpdGlvbiwgdGhpcy5nZXRTaXplKCkpXG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIGlmICh0aGlzLmJvdW5kaW5nLnJlZnJlc2gpIHtcbiAgICAgIHRoaXMuYm91bmRpbmcucmVmcmVzaCgpXG4gICAgfVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmhhbmRsZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0KVxuICAgIHRoaXMuaGFuZGxlci5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQpXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIHRoaXMuX25hdGl2ZURyYWdTdGFydClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCB0aGlzLl9uYXRpdmVEcmFnT3ZlcilcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcm9wJywgdGhpcy5fbmF0aXZlRHJvcClcbiAgICB0aGlzLnJlc2V0RW1pdHRlcigpXG5cbiAgICBjb25zdCBpbmRleCA9IGRyYWdnYWJsZXMuaW5kZXhPZih0aGlzKVxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICBkcmFnZ2FibGVzLnNwbGljZShpbmRleCwgMSlcbiAgICB9XG4gIH1cblxuICBnZXQgY29udGFpbmVyKCkge1xuICAgIHJldHVybiAodGhpcy5fY29udGFpbmVyID0gdGhpcy5fY29udGFpbmVyIHx8IHRoaXMub3B0aW9ucy5jb250YWluZXIgfHwgdGhpcy5vcHRpb25zLnBhcmVudCB8fCBnZXREZWZhdWx0Q29udGFpbmVyKHRoaXMuZWxlbWVudCkpXG4gIH1cblxuICBnZXQgaGFuZGxlcigpIHtcbiAgICBpZiAoIXRoaXMuX2hhbmRsZXIpIHtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmhhbmRsZXIgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZXIgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLm9wdGlvbnMuaGFuZGxlcikgfHwgdGhpcy5lbGVtZW50XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9oYW5kbGVyID0gdGhpcy5vcHRpb25zLmhhbmRsZXIgfHwgdGhpcy5lbGVtZW50XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2hhbmRsZXJcbiAgfVxuXG4gIGdldCBuYXRpdmVEcmFnQW5kRHJvcCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLm5hdGl2ZURyYWdBbmREcm9wIHx8IGZhbHNlXG4gIH1cblxuICBnZXQgZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wT25Ub3VjaCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcE9uVG91Y2ggfHwgZmFsc2VcbiAgfVxuXG4gIGdldCBzaG91bGRSZW1vdmVaZXJvVHJhbnNsYXRlKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuc2hvdWxkUmVtb3ZlWmVyb1RyYW5zbGF0ZSB8fCBmYWxzZVxuICB9XG5cbiAgZ2V0IHRvdWNoRHJhZ2dpbmdUaHJlc2hvbGQoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy50b3VjaERyYWdnaW5nVGhyZXNob2xkIHx8IDBcbiAgfVxuXG4gIGdldCBkcmFnT3ZlclRocm90dGxlRHVyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5kcmFnT3ZlclRocm90dGxlRHVyYXRpb24gfHwgMTZcbiAgfVxuXG4gIGdldCB3aW5kb3dTY3JvbGxQb2ludCgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHdpbmRvdy5zY3JvbGxYLCB3aW5kb3cuc2Nyb2xsWSlcbiAgfVxuXG4gIGdldCBwYXJlbnRzKCkge1xuICAgIGlmICh0aGlzLl9jYWNoZWRQYXJlbnRzKSByZXR1cm4gdGhpcy5fY2FjaGVkUGFyZW50c1xuXG4gICAgdGhpcy5fY2FjaGVkUGFyZW50cyA9IFtdXG4gICAgbGV0IGVsZW1lbnQgPSB0aGlzLmVsZW1lbnRcblxuICAgIHdoaWxlKGVsZW1lbnQucGFyZW50Tm9kZSAmJiBlbGVtZW50ICE9IHRoaXMuY29udGFpbmVyKSB7XG4gICAgICB0aGlzLl9jYWNoZWRQYXJlbnRzLnVuc2hpZnQoZWxlbWVudC5wYXJlbnROb2RlKTtcbiAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2NhY2hlZFBhcmVudHNcbiAgfVxuXG4gIGdldCBwYXJlbnRzU2Nyb2xsUG9pbnQoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludChcbiAgICAgIHRoaXMucGFyZW50cy5yZWR1Y2UoKHN1bSwgcCkgPT4gc3VtICsgcC5zY3JvbGxMZWZ0LCAwKSxcbiAgICAgIHRoaXMucGFyZW50cy5yZWR1Y2UoKHN1bSwgcCkgPT4gc3VtICsgcC5zY3JvbGxUb3AsIDApXG4gICAgKVxuICB9XG5cbiAgZ2V0IGVuYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlXG4gIH1cblxuICBzZXQgZW5hYmxlKGVuYWJsZSkge1xuICAgIGlmIChlbmFibGUpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZWUtZGlzYWJsZScpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkcmFnZWUtZGlzYWJsZScpXG4gICAgfVxuXG4gICAgdGhpcy5fZW5hYmxlID0gZW5hYmxlXG4gIH1cbn1cblxuRHJhZ2dhYmxlLmVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKClcbkRyYWdnYWJsZS5lbWl0dGVyLm9uKCdkcmFnZ2FibGU6Y3JlYXRlJywgYWRkVG9EZWZhdWx0U2NvcGUpXG4iLCJ2YXIgcmVzaXplT2JzZXJ2ZXJzID0gW107XG5leHBvcnQgeyByZXNpemVPYnNlcnZlcnMgfTtcbiIsImltcG9ydCB7IHJlc2l6ZU9ic2VydmVycyB9IGZyb20gJy4uL3V0aWxzL3Jlc2l6ZU9ic2VydmVycyc7XG52YXIgaGFzQWN0aXZlT2JzZXJ2YXRpb25zID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiByZXNpemVPYnNlcnZlcnMuc29tZShmdW5jdGlvbiAocm8pIHsgcmV0dXJuIHJvLmFjdGl2ZVRhcmdldHMubGVuZ3RoID4gMDsgfSk7XG59O1xuZXhwb3J0IHsgaGFzQWN0aXZlT2JzZXJ2YXRpb25zIH07XG4iLCJpbXBvcnQgeyByZXNpemVPYnNlcnZlcnMgfSBmcm9tICcuLi91dGlscy9yZXNpemVPYnNlcnZlcnMnO1xudmFyIGhhc1NraXBwZWRPYnNlcnZhdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHJlc2l6ZU9ic2VydmVycy5zb21lKGZ1bmN0aW9uIChybykgeyByZXR1cm4gcm8uc2tpcHBlZFRhcmdldHMubGVuZ3RoID4gMDsgfSk7XG59O1xuZXhwb3J0IHsgaGFzU2tpcHBlZE9ic2VydmF0aW9ucyB9O1xuIiwidmFyIG1zZyA9ICdSZXNpemVPYnNlcnZlciBsb29wIGNvbXBsZXRlZCB3aXRoIHVuZGVsaXZlcmVkIG5vdGlmaWNhdGlvbnMuJztcbnZhciBkZWxpdmVyUmVzaXplTG9vcEVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBldmVudDtcbiAgICBpZiAodHlwZW9mIEVycm9yRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZXZlbnQgPSBuZXcgRXJyb3JFdmVudCgnZXJyb3InLCB7XG4gICAgICAgICAgICBtZXNzYWdlOiBtc2dcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpO1xuICAgICAgICBldmVudC5pbml0RXZlbnQoJ2Vycm9yJywgZmFsc2UsIGZhbHNlKTtcbiAgICAgICAgZXZlbnQubWVzc2FnZSA9IG1zZztcbiAgICB9XG4gICAgd2luZG93LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xufTtcbmV4cG9ydCB7IGRlbGl2ZXJSZXNpemVMb29wRXJyb3IgfTtcbiIsInZhciBSZXNpemVPYnNlcnZlckJveE9wdGlvbnM7XG4oZnVuY3Rpb24gKFJlc2l6ZU9ic2VydmVyQm94T3B0aW9ucykge1xuICAgIFJlc2l6ZU9ic2VydmVyQm94T3B0aW9uc1tcIkJPUkRFUl9CT1hcIl0gPSBcImJvcmRlci1ib3hcIjtcbiAgICBSZXNpemVPYnNlcnZlckJveE9wdGlvbnNbXCJDT05URU5UX0JPWFwiXSA9IFwiY29udGVudC1ib3hcIjtcbiAgICBSZXNpemVPYnNlcnZlckJveE9wdGlvbnNbXCJERVZJQ0VfUElYRUxfQ09OVEVOVF9CT1hcIl0gPSBcImRldmljZS1waXhlbC1jb250ZW50LWJveFwiO1xufSkoUmVzaXplT2JzZXJ2ZXJCb3hPcHRpb25zIHx8IChSZXNpemVPYnNlcnZlckJveE9wdGlvbnMgPSB7fSkpO1xuZXhwb3J0IHsgUmVzaXplT2JzZXJ2ZXJCb3hPcHRpb25zIH07XG4iLCJleHBvcnQgdmFyIGZyZWV6ZSA9IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIE9iamVjdC5mcmVlemUob2JqKTsgfTtcbiIsImltcG9ydCB7IGZyZWV6ZSB9IGZyb20gJy4vdXRpbHMvZnJlZXplJztcbnZhciBSZXNpemVPYnNlcnZlclNpemUgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFJlc2l6ZU9ic2VydmVyU2l6ZShpbmxpbmVTaXplLCBibG9ja1NpemUpIHtcbiAgICAgICAgdGhpcy5pbmxpbmVTaXplID0gaW5saW5lU2l6ZTtcbiAgICAgICAgdGhpcy5ibG9ja1NpemUgPSBibG9ja1NpemU7XG4gICAgICAgIGZyZWV6ZSh0aGlzKTtcbiAgICB9XG4gICAgcmV0dXJuIFJlc2l6ZU9ic2VydmVyU2l6ZTtcbn0oKSk7XG5leHBvcnQgeyBSZXNpemVPYnNlcnZlclNpemUgfTtcbiIsImltcG9ydCB7IGZyZWV6ZSB9IGZyb20gJy4vdXRpbHMvZnJlZXplJztcbnZhciBET01SZWN0UmVhZE9ubHkgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIERPTVJlY3RSZWFkT25seSh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHRoaXMudG9wID0gdGhpcy55O1xuICAgICAgICB0aGlzLmxlZnQgPSB0aGlzLng7XG4gICAgICAgIHRoaXMuYm90dG9tID0gdGhpcy50b3AgKyB0aGlzLmhlaWdodDtcbiAgICAgICAgdGhpcy5yaWdodCA9IHRoaXMubGVmdCArIHRoaXMud2lkdGg7XG4gICAgICAgIHJldHVybiBmcmVlemUodGhpcyk7XG4gICAgfVxuICAgIERPTVJlY3RSZWFkT25seS5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2EgPSB0aGlzLCB4ID0gX2EueCwgeSA9IF9hLnksIHRvcCA9IF9hLnRvcCwgcmlnaHQgPSBfYS5yaWdodCwgYm90dG9tID0gX2EuYm90dG9tLCBsZWZ0ID0gX2EubGVmdCwgd2lkdGggPSBfYS53aWR0aCwgaGVpZ2h0ID0gX2EuaGVpZ2h0O1xuICAgICAgICByZXR1cm4geyB4OiB4LCB5OiB5LCB0b3A6IHRvcCwgcmlnaHQ6IHJpZ2h0LCBib3R0b206IGJvdHRvbSwgbGVmdDogbGVmdCwgd2lkdGg6IHdpZHRoLCBoZWlnaHQ6IGhlaWdodCB9O1xuICAgIH07XG4gICAgRE9NUmVjdFJlYWRPbmx5LmZyb21SZWN0ID0gZnVuY3Rpb24gKHJlY3RhbmdsZSkge1xuICAgICAgICByZXR1cm4gbmV3IERPTVJlY3RSZWFkT25seShyZWN0YW5nbGUueCwgcmVjdGFuZ2xlLnksIHJlY3RhbmdsZS53aWR0aCwgcmVjdGFuZ2xlLmhlaWdodCk7XG4gICAgfTtcbiAgICByZXR1cm4gRE9NUmVjdFJlYWRPbmx5O1xufSgpKTtcbmV4cG9ydCB7IERPTVJlY3RSZWFkT25seSB9O1xuIiwidmFyIGlzU1ZHID0gZnVuY3Rpb24gKHRhcmdldCkgeyByZXR1cm4gdGFyZ2V0IGluc3RhbmNlb2YgU1ZHRWxlbWVudCAmJiAnZ2V0QkJveCcgaW4gdGFyZ2V0OyB9O1xudmFyIGlzSGlkZGVuID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGlmIChpc1NWRyh0YXJnZXQpKSB7XG4gICAgICAgIHZhciBfYSA9IHRhcmdldC5nZXRCQm94KCksIHdpZHRoID0gX2Eud2lkdGgsIGhlaWdodCA9IF9hLmhlaWdodDtcbiAgICAgICAgcmV0dXJuICF3aWR0aCAmJiAhaGVpZ2h0O1xuICAgIH1cbiAgICB2YXIgX2IgPSB0YXJnZXQsIG9mZnNldFdpZHRoID0gX2Iub2Zmc2V0V2lkdGgsIG9mZnNldEhlaWdodCA9IF9iLm9mZnNldEhlaWdodDtcbiAgICByZXR1cm4gIShvZmZzZXRXaWR0aCB8fCBvZmZzZXRIZWlnaHQgfHwgdGFyZ2V0LmdldENsaWVudFJlY3RzKCkubGVuZ3RoKTtcbn07XG52YXIgaXNFbGVtZW50ID0gZnVuY3Rpb24gKG9iaikge1xuICAgIHZhciBfYTtcbiAgICBpZiAob2JqIGluc3RhbmNlb2YgRWxlbWVudCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgdmFyIHNjb3BlID0gKF9hID0gb2JqID09PSBudWxsIHx8IG9iaiA9PT0gdm9pZCAwID8gdm9pZCAwIDogb2JqLm93bmVyRG9jdW1lbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5kZWZhdWx0VmlldztcbiAgICByZXR1cm4gISEoc2NvcGUgJiYgb2JqIGluc3RhbmNlb2Ygc2NvcGUuRWxlbWVudCk7XG59O1xudmFyIGlzUmVwbGFjZWRFbGVtZW50ID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIHN3aXRjaCAodGFyZ2V0LnRhZ05hbWUpIHtcbiAgICAgICAgY2FzZSAnSU5QVVQnOlxuICAgICAgICAgICAgaWYgKHRhcmdldC50eXBlICE9PSAnaW1hZ2UnKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIGNhc2UgJ1ZJREVPJzpcbiAgICAgICAgY2FzZSAnQVVESU8nOlxuICAgICAgICBjYXNlICdFTUJFRCc6XG4gICAgICAgIGNhc2UgJ09CSkVDVCc6XG4gICAgICAgIGNhc2UgJ0NBTlZBUyc6XG4gICAgICAgIGNhc2UgJ0lGUkFNRSc6XG4gICAgICAgIGNhc2UgJ0lNRyc6XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufTtcbmV4cG9ydCB7IGlzU1ZHLCBpc0hpZGRlbiwgaXNFbGVtZW50LCBpc1JlcGxhY2VkRWxlbWVudCB9O1xuIiwiZXhwb3J0IHZhciBnbG9iYWwgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHt9O1xuIiwiaW1wb3J0IHsgUmVzaXplT2JzZXJ2ZXJCb3hPcHRpb25zIH0gZnJvbSAnLi4vUmVzaXplT2JzZXJ2ZXJCb3hPcHRpb25zJztcbmltcG9ydCB7IFJlc2l6ZU9ic2VydmVyU2l6ZSB9IGZyb20gJy4uL1Jlc2l6ZU9ic2VydmVyU2l6ZSc7XG5pbXBvcnQgeyBET01SZWN0UmVhZE9ubHkgfSBmcm9tICcuLi9ET01SZWN0UmVhZE9ubHknO1xuaW1wb3J0IHsgaXNTVkcsIGlzSGlkZGVuIH0gZnJvbSAnLi4vdXRpbHMvZWxlbWVudCc7XG5pbXBvcnQgeyBmcmVlemUgfSBmcm9tICcuLi91dGlscy9mcmVlemUnO1xuaW1wb3J0IHsgZ2xvYmFsIH0gZnJvbSAnLi4vdXRpbHMvZ2xvYmFsJztcbnZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG52YXIgc2Nyb2xsUmVnZXhwID0gL2F1dG98c2Nyb2xsLztcbnZhciB2ZXJ0aWNhbFJlZ2V4cCA9IC9edGJ8dmVydGljYWwvO1xudmFyIElFID0gKC9tc2llfHRyaWRlbnQvaSkudGVzdChnbG9iYWwubmF2aWdhdG9yICYmIGdsb2JhbC5uYXZpZ2F0b3IudXNlckFnZW50KTtcbnZhciBwYXJzZURpbWVuc2lvbiA9IGZ1bmN0aW9uIChwaXhlbCkgeyByZXR1cm4gcGFyc2VGbG9hdChwaXhlbCB8fCAnMCcpOyB9O1xudmFyIHNpemUgPSBmdW5jdGlvbiAoaW5saW5lU2l6ZSwgYmxvY2tTaXplLCBzd2l0Y2hTaXplcykge1xuICAgIGlmIChpbmxpbmVTaXplID09PSB2b2lkIDApIHsgaW5saW5lU2l6ZSA9IDA7IH1cbiAgICBpZiAoYmxvY2tTaXplID09PSB2b2lkIDApIHsgYmxvY2tTaXplID0gMDsgfVxuICAgIGlmIChzd2l0Y2hTaXplcyA9PT0gdm9pZCAwKSB7IHN3aXRjaFNpemVzID0gZmFsc2U7IH1cbiAgICByZXR1cm4gbmV3IFJlc2l6ZU9ic2VydmVyU2l6ZSgoc3dpdGNoU2l6ZXMgPyBibG9ja1NpemUgOiBpbmxpbmVTaXplKSB8fCAwLCAoc3dpdGNoU2l6ZXMgPyBpbmxpbmVTaXplIDogYmxvY2tTaXplKSB8fCAwKTtcbn07XG52YXIgemVyb0JveGVzID0gZnJlZXplKHtcbiAgICBkZXZpY2VQaXhlbENvbnRlbnRCb3hTaXplOiBzaXplKCksXG4gICAgYm9yZGVyQm94U2l6ZTogc2l6ZSgpLFxuICAgIGNvbnRlbnRCb3hTaXplOiBzaXplKCksXG4gICAgY29udGVudFJlY3Q6IG5ldyBET01SZWN0UmVhZE9ubHkoMCwgMCwgMCwgMClcbn0pO1xudmFyIGNhbGN1bGF0ZUJveFNpemVzID0gZnVuY3Rpb24gKHRhcmdldCwgZm9yY2VSZWNhbGN1bGF0aW9uKSB7XG4gICAgaWYgKGZvcmNlUmVjYWxjdWxhdGlvbiA9PT0gdm9pZCAwKSB7IGZvcmNlUmVjYWxjdWxhdGlvbiA9IGZhbHNlOyB9XG4gICAgaWYgKGNhY2hlLmhhcyh0YXJnZXQpICYmICFmb3JjZVJlY2FsY3VsYXRpb24pIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlLmdldCh0YXJnZXQpO1xuICAgIH1cbiAgICBpZiAoaXNIaWRkZW4odGFyZ2V0KSkge1xuICAgICAgICBjYWNoZS5zZXQodGFyZ2V0LCB6ZXJvQm94ZXMpO1xuICAgICAgICByZXR1cm4gemVyb0JveGVzO1xuICAgIH1cbiAgICB2YXIgY3MgPSBnZXRDb21wdXRlZFN0eWxlKHRhcmdldCk7XG4gICAgdmFyIHN2ZyA9IGlzU1ZHKHRhcmdldCkgJiYgdGFyZ2V0Lm93bmVyU1ZHRWxlbWVudCAmJiB0YXJnZXQuZ2V0QkJveCgpO1xuICAgIHZhciByZW1vdmVQYWRkaW5nID0gIUlFICYmIGNzLmJveFNpemluZyA9PT0gJ2JvcmRlci1ib3gnO1xuICAgIHZhciBzd2l0Y2hTaXplcyA9IHZlcnRpY2FsUmVnZXhwLnRlc3QoY3Mud3JpdGluZ01vZGUgfHwgJycpO1xuICAgIHZhciBjYW5TY3JvbGxWZXJ0aWNhbGx5ID0gIXN2ZyAmJiBzY3JvbGxSZWdleHAudGVzdChjcy5vdmVyZmxvd1kgfHwgJycpO1xuICAgIHZhciBjYW5TY3JvbGxIb3Jpem9udGFsbHkgPSAhc3ZnICYmIHNjcm9sbFJlZ2V4cC50ZXN0KGNzLm92ZXJmbG93WCB8fCAnJyk7XG4gICAgdmFyIHBhZGRpbmdUb3AgPSBzdmcgPyAwIDogcGFyc2VEaW1lbnNpb24oY3MucGFkZGluZ1RvcCk7XG4gICAgdmFyIHBhZGRpbmdSaWdodCA9IHN2ZyA/IDAgOiBwYXJzZURpbWVuc2lvbihjcy5wYWRkaW5nUmlnaHQpO1xuICAgIHZhciBwYWRkaW5nQm90dG9tID0gc3ZnID8gMCA6IHBhcnNlRGltZW5zaW9uKGNzLnBhZGRpbmdCb3R0b20pO1xuICAgIHZhciBwYWRkaW5nTGVmdCA9IHN2ZyA/IDAgOiBwYXJzZURpbWVuc2lvbihjcy5wYWRkaW5nTGVmdCk7XG4gICAgdmFyIGJvcmRlclRvcCA9IHN2ZyA/IDAgOiBwYXJzZURpbWVuc2lvbihjcy5ib3JkZXJUb3BXaWR0aCk7XG4gICAgdmFyIGJvcmRlclJpZ2h0ID0gc3ZnID8gMCA6IHBhcnNlRGltZW5zaW9uKGNzLmJvcmRlclJpZ2h0V2lkdGgpO1xuICAgIHZhciBib3JkZXJCb3R0b20gPSBzdmcgPyAwIDogcGFyc2VEaW1lbnNpb24oY3MuYm9yZGVyQm90dG9tV2lkdGgpO1xuICAgIHZhciBib3JkZXJMZWZ0ID0gc3ZnID8gMCA6IHBhcnNlRGltZW5zaW9uKGNzLmJvcmRlckxlZnRXaWR0aCk7XG4gICAgdmFyIGhvcml6b250YWxQYWRkaW5nID0gcGFkZGluZ0xlZnQgKyBwYWRkaW5nUmlnaHQ7XG4gICAgdmFyIHZlcnRpY2FsUGFkZGluZyA9IHBhZGRpbmdUb3AgKyBwYWRkaW5nQm90dG9tO1xuICAgIHZhciBob3Jpem9udGFsQm9yZGVyQXJlYSA9IGJvcmRlckxlZnQgKyBib3JkZXJSaWdodDtcbiAgICB2YXIgdmVydGljYWxCb3JkZXJBcmVhID0gYm9yZGVyVG9wICsgYm9yZGVyQm90dG9tO1xuICAgIHZhciBob3Jpem9udGFsU2Nyb2xsYmFyVGhpY2tuZXNzID0gIWNhblNjcm9sbEhvcml6b250YWxseSA/IDAgOiB0YXJnZXQub2Zmc2V0SGVpZ2h0IC0gdmVydGljYWxCb3JkZXJBcmVhIC0gdGFyZ2V0LmNsaWVudEhlaWdodDtcbiAgICB2YXIgdmVydGljYWxTY3JvbGxiYXJUaGlja25lc3MgPSAhY2FuU2Nyb2xsVmVydGljYWxseSA/IDAgOiB0YXJnZXQub2Zmc2V0V2lkdGggLSBob3Jpem9udGFsQm9yZGVyQXJlYSAtIHRhcmdldC5jbGllbnRXaWR0aDtcbiAgICB2YXIgd2lkdGhSZWR1Y3Rpb24gPSByZW1vdmVQYWRkaW5nID8gaG9yaXpvbnRhbFBhZGRpbmcgKyBob3Jpem9udGFsQm9yZGVyQXJlYSA6IDA7XG4gICAgdmFyIGhlaWdodFJlZHVjdGlvbiA9IHJlbW92ZVBhZGRpbmcgPyB2ZXJ0aWNhbFBhZGRpbmcgKyB2ZXJ0aWNhbEJvcmRlckFyZWEgOiAwO1xuICAgIHZhciBjb250ZW50V2lkdGggPSBzdmcgPyBzdmcud2lkdGggOiBwYXJzZURpbWVuc2lvbihjcy53aWR0aCkgLSB3aWR0aFJlZHVjdGlvbiAtIHZlcnRpY2FsU2Nyb2xsYmFyVGhpY2tuZXNzO1xuICAgIHZhciBjb250ZW50SGVpZ2h0ID0gc3ZnID8gc3ZnLmhlaWdodCA6IHBhcnNlRGltZW5zaW9uKGNzLmhlaWdodCkgLSBoZWlnaHRSZWR1Y3Rpb24gLSBob3Jpem9udGFsU2Nyb2xsYmFyVGhpY2tuZXNzO1xuICAgIHZhciBib3JkZXJCb3hXaWR0aCA9IGNvbnRlbnRXaWR0aCArIGhvcml6b250YWxQYWRkaW5nICsgdmVydGljYWxTY3JvbGxiYXJUaGlja25lc3MgKyBob3Jpem9udGFsQm9yZGVyQXJlYTtcbiAgICB2YXIgYm9yZGVyQm94SGVpZ2h0ID0gY29udGVudEhlaWdodCArIHZlcnRpY2FsUGFkZGluZyArIGhvcml6b250YWxTY3JvbGxiYXJUaGlja25lc3MgKyB2ZXJ0aWNhbEJvcmRlckFyZWE7XG4gICAgdmFyIGJveGVzID0gZnJlZXplKHtcbiAgICAgICAgZGV2aWNlUGl4ZWxDb250ZW50Qm94U2l6ZTogc2l6ZShNYXRoLnJvdW5kKGNvbnRlbnRXaWR0aCAqIGRldmljZVBpeGVsUmF0aW8pLCBNYXRoLnJvdW5kKGNvbnRlbnRIZWlnaHQgKiBkZXZpY2VQaXhlbFJhdGlvKSwgc3dpdGNoU2l6ZXMpLFxuICAgICAgICBib3JkZXJCb3hTaXplOiBzaXplKGJvcmRlckJveFdpZHRoLCBib3JkZXJCb3hIZWlnaHQsIHN3aXRjaFNpemVzKSxcbiAgICAgICAgY29udGVudEJveFNpemU6IHNpemUoY29udGVudFdpZHRoLCBjb250ZW50SGVpZ2h0LCBzd2l0Y2hTaXplcyksXG4gICAgICAgIGNvbnRlbnRSZWN0OiBuZXcgRE9NUmVjdFJlYWRPbmx5KHBhZGRpbmdMZWZ0LCBwYWRkaW5nVG9wLCBjb250ZW50V2lkdGgsIGNvbnRlbnRIZWlnaHQpXG4gICAgfSk7XG4gICAgY2FjaGUuc2V0KHRhcmdldCwgYm94ZXMpO1xuICAgIHJldHVybiBib3hlcztcbn07XG52YXIgY2FsY3VsYXRlQm94U2l6ZSA9IGZ1bmN0aW9uICh0YXJnZXQsIG9ic2VydmVkQm94LCBmb3JjZVJlY2FsY3VsYXRpb24pIHtcbiAgICB2YXIgX2EgPSBjYWxjdWxhdGVCb3hTaXplcyh0YXJnZXQsIGZvcmNlUmVjYWxjdWxhdGlvbiksIGJvcmRlckJveFNpemUgPSBfYS5ib3JkZXJCb3hTaXplLCBjb250ZW50Qm94U2l6ZSA9IF9hLmNvbnRlbnRCb3hTaXplLCBkZXZpY2VQaXhlbENvbnRlbnRCb3hTaXplID0gX2EuZGV2aWNlUGl4ZWxDb250ZW50Qm94U2l6ZTtcbiAgICBzd2l0Y2ggKG9ic2VydmVkQm94KSB7XG4gICAgICAgIGNhc2UgUmVzaXplT2JzZXJ2ZXJCb3hPcHRpb25zLkRFVklDRV9QSVhFTF9DT05URU5UX0JPWDpcbiAgICAgICAgICAgIHJldHVybiBkZXZpY2VQaXhlbENvbnRlbnRCb3hTaXplO1xuICAgICAgICBjYXNlIFJlc2l6ZU9ic2VydmVyQm94T3B0aW9ucy5CT1JERVJfQk9YOlxuICAgICAgICAgICAgcmV0dXJuIGJvcmRlckJveFNpemU7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gY29udGVudEJveFNpemU7XG4gICAgfVxufTtcbmV4cG9ydCB7IGNhbGN1bGF0ZUJveFNpemUsIGNhbGN1bGF0ZUJveFNpemVzIH07XG4iLCJpbXBvcnQgeyBjYWxjdWxhdGVCb3hTaXplcyB9IGZyb20gJy4vYWxnb3JpdGhtcy9jYWxjdWxhdGVCb3hTaXplJztcbmltcG9ydCB7IGZyZWV6ZSB9IGZyb20gJy4vdXRpbHMvZnJlZXplJztcbnZhciBSZXNpemVPYnNlcnZlckVudHJ5ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBSZXNpemVPYnNlcnZlckVudHJ5KHRhcmdldCkge1xuICAgICAgICB2YXIgYm94ZXMgPSBjYWxjdWxhdGVCb3hTaXplcyh0YXJnZXQpO1xuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgICAgICAgdGhpcy5jb250ZW50UmVjdCA9IGJveGVzLmNvbnRlbnRSZWN0O1xuICAgICAgICB0aGlzLmJvcmRlckJveFNpemUgPSBmcmVlemUoW2JveGVzLmJvcmRlckJveFNpemVdKTtcbiAgICAgICAgdGhpcy5jb250ZW50Qm94U2l6ZSA9IGZyZWV6ZShbYm94ZXMuY29udGVudEJveFNpemVdKTtcbiAgICAgICAgdGhpcy5kZXZpY2VQaXhlbENvbnRlbnRCb3hTaXplID0gZnJlZXplKFtib3hlcy5kZXZpY2VQaXhlbENvbnRlbnRCb3hTaXplXSk7XG4gICAgfVxuICAgIHJldHVybiBSZXNpemVPYnNlcnZlckVudHJ5O1xufSgpKTtcbmV4cG9ydCB7IFJlc2l6ZU9ic2VydmVyRW50cnkgfTtcbiIsImltcG9ydCB7IGlzSGlkZGVuIH0gZnJvbSAnLi4vdXRpbHMvZWxlbWVudCc7XG52YXIgY2FsY3VsYXRlRGVwdGhGb3JOb2RlID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICBpZiAoaXNIaWRkZW4obm9kZSkpIHtcbiAgICAgICAgcmV0dXJuIEluZmluaXR5O1xuICAgIH1cbiAgICB2YXIgZGVwdGggPSAwO1xuICAgIHZhciBwYXJlbnQgPSBub2RlLnBhcmVudE5vZGU7XG4gICAgd2hpbGUgKHBhcmVudCkge1xuICAgICAgICBkZXB0aCArPSAxO1xuICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50Tm9kZTtcbiAgICB9XG4gICAgcmV0dXJuIGRlcHRoO1xufTtcbmV4cG9ydCB7IGNhbGN1bGF0ZURlcHRoRm9yTm9kZSB9O1xuIiwiaW1wb3J0IHsgcmVzaXplT2JzZXJ2ZXJzIH0gZnJvbSAnLi4vdXRpbHMvcmVzaXplT2JzZXJ2ZXJzJztcbmltcG9ydCB7IFJlc2l6ZU9ic2VydmVyRW50cnkgfSBmcm9tICcuLi9SZXNpemVPYnNlcnZlckVudHJ5JztcbmltcG9ydCB7IGNhbGN1bGF0ZURlcHRoRm9yTm9kZSB9IGZyb20gJy4vY2FsY3VsYXRlRGVwdGhGb3JOb2RlJztcbmltcG9ydCB7IGNhbGN1bGF0ZUJveFNpemUgfSBmcm9tICcuL2NhbGN1bGF0ZUJveFNpemUnO1xudmFyIGJyb2FkY2FzdEFjdGl2ZU9ic2VydmF0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2hhbGxvd2VzdERlcHRoID0gSW5maW5pdHk7XG4gICAgdmFyIGNhbGxiYWNrcyA9IFtdO1xuICAgIHJlc2l6ZU9ic2VydmVycy5mb3JFYWNoKGZ1bmN0aW9uIHByb2Nlc3NPYnNlcnZlcihybykge1xuICAgICAgICBpZiAocm8uYWN0aXZlVGFyZ2V0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZW50cmllcyA9IFtdO1xuICAgICAgICByby5hY3RpdmVUYXJnZXRzLmZvckVhY2goZnVuY3Rpb24gcHJvY2Vzc1RhcmdldChvdCkge1xuICAgICAgICAgICAgdmFyIGVudHJ5ID0gbmV3IFJlc2l6ZU9ic2VydmVyRW50cnkob3QudGFyZ2V0KTtcbiAgICAgICAgICAgIHZhciB0YXJnZXREZXB0aCA9IGNhbGN1bGF0ZURlcHRoRm9yTm9kZShvdC50YXJnZXQpO1xuICAgICAgICAgICAgZW50cmllcy5wdXNoKGVudHJ5KTtcbiAgICAgICAgICAgIG90Lmxhc3RSZXBvcnRlZFNpemUgPSBjYWxjdWxhdGVCb3hTaXplKG90LnRhcmdldCwgb3Qub2JzZXJ2ZWRCb3gpO1xuICAgICAgICAgICAgaWYgKHRhcmdldERlcHRoIDwgc2hhbGxvd2VzdERlcHRoKSB7XG4gICAgICAgICAgICAgICAgc2hhbGxvd2VzdERlcHRoID0gdGFyZ2V0RGVwdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBjYWxsYmFja3MucHVzaChmdW5jdGlvbiByZXNpemVPYnNlcnZlckNhbGxiYWNrKCkge1xuICAgICAgICAgICAgcm8uY2FsbGJhY2suY2FsbChyby5vYnNlcnZlciwgZW50cmllcywgcm8ub2JzZXJ2ZXIpO1xuICAgICAgICB9KTtcbiAgICAgICAgcm8uYWN0aXZlVGFyZ2V0cy5zcGxpY2UoMCwgcm8uYWN0aXZlVGFyZ2V0cy5sZW5ndGgpO1xuICAgIH0pO1xuICAgIGZvciAodmFyIF9pID0gMCwgY2FsbGJhY2tzXzEgPSBjYWxsYmFja3M7IF9pIDwgY2FsbGJhY2tzXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IGNhbGxiYWNrc18xW19pXTtcbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICB9XG4gICAgcmV0dXJuIHNoYWxsb3dlc3REZXB0aDtcbn07XG5leHBvcnQgeyBicm9hZGNhc3RBY3RpdmVPYnNlcnZhdGlvbnMgfTtcbiIsImltcG9ydCB7IHJlc2l6ZU9ic2VydmVycyB9IGZyb20gJy4uL3V0aWxzL3Jlc2l6ZU9ic2VydmVycyc7XG5pbXBvcnQgeyBjYWxjdWxhdGVEZXB0aEZvck5vZGUgfSBmcm9tICcuL2NhbGN1bGF0ZURlcHRoRm9yTm9kZSc7XG52YXIgZ2F0aGVyQWN0aXZlT2JzZXJ2YXRpb25zQXREZXB0aCA9IGZ1bmN0aW9uIChkZXB0aCkge1xuICAgIHJlc2l6ZU9ic2VydmVycy5mb3JFYWNoKGZ1bmN0aW9uIHByb2Nlc3NPYnNlcnZlcihybykge1xuICAgICAgICByby5hY3RpdmVUYXJnZXRzLnNwbGljZSgwLCByby5hY3RpdmVUYXJnZXRzLmxlbmd0aCk7XG4gICAgICAgIHJvLnNraXBwZWRUYXJnZXRzLnNwbGljZSgwLCByby5za2lwcGVkVGFyZ2V0cy5sZW5ndGgpO1xuICAgICAgICByby5vYnNlcnZhdGlvblRhcmdldHMuZm9yRWFjaChmdW5jdGlvbiBwcm9jZXNzVGFyZ2V0KG90KSB7XG4gICAgICAgICAgICBpZiAob3QuaXNBY3RpdmUoKSkge1xuICAgICAgICAgICAgICAgIGlmIChjYWxjdWxhdGVEZXB0aEZvck5vZGUob3QudGFyZ2V0KSA+IGRlcHRoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJvLmFjdGl2ZVRhcmdldHMucHVzaChvdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByby5za2lwcGVkVGFyZ2V0cy5wdXNoKG90KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufTtcbmV4cG9ydCB7IGdhdGhlckFjdGl2ZU9ic2VydmF0aW9uc0F0RGVwdGggfTtcbiIsImltcG9ydCB7IGhhc0FjdGl2ZU9ic2VydmF0aW9ucyB9IGZyb20gJy4uL2FsZ29yaXRobXMvaGFzQWN0aXZlT2JzZXJ2YXRpb25zJztcbmltcG9ydCB7IGhhc1NraXBwZWRPYnNlcnZhdGlvbnMgfSBmcm9tICcuLi9hbGdvcml0aG1zL2hhc1NraXBwZWRPYnNlcnZhdGlvbnMnO1xuaW1wb3J0IHsgZGVsaXZlclJlc2l6ZUxvb3BFcnJvciB9IGZyb20gJy4uL2FsZ29yaXRobXMvZGVsaXZlclJlc2l6ZUxvb3BFcnJvcic7XG5pbXBvcnQgeyBicm9hZGNhc3RBY3RpdmVPYnNlcnZhdGlvbnMgfSBmcm9tICcuLi9hbGdvcml0aG1zL2Jyb2FkY2FzdEFjdGl2ZU9ic2VydmF0aW9ucyc7XG5pbXBvcnQgeyBnYXRoZXJBY3RpdmVPYnNlcnZhdGlvbnNBdERlcHRoIH0gZnJvbSAnLi4vYWxnb3JpdGhtcy9nYXRoZXJBY3RpdmVPYnNlcnZhdGlvbnNBdERlcHRoJztcbnZhciBwcm9jZXNzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBkZXB0aCA9IDA7XG4gICAgZ2F0aGVyQWN0aXZlT2JzZXJ2YXRpb25zQXREZXB0aChkZXB0aCk7XG4gICAgd2hpbGUgKGhhc0FjdGl2ZU9ic2VydmF0aW9ucygpKSB7XG4gICAgICAgIGRlcHRoID0gYnJvYWRjYXN0QWN0aXZlT2JzZXJ2YXRpb25zKCk7XG4gICAgICAgIGdhdGhlckFjdGl2ZU9ic2VydmF0aW9uc0F0RGVwdGgoZGVwdGgpO1xuICAgIH1cbiAgICBpZiAoaGFzU2tpcHBlZE9ic2VydmF0aW9ucygpKSB7XG4gICAgICAgIGRlbGl2ZXJSZXNpemVMb29wRXJyb3IoKTtcbiAgICB9XG4gICAgcmV0dXJuIGRlcHRoID4gMDtcbn07XG5leHBvcnQgeyBwcm9jZXNzIH07XG4iLCJ2YXIgdHJpZ2dlcjtcbnZhciBjYWxsYmFja3MgPSBbXTtcbnZhciBub3RpZnkgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBjYWxsYmFja3Muc3BsaWNlKDApLmZvckVhY2goZnVuY3Rpb24gKGNiKSB7IHJldHVybiBjYigpOyB9KTsgfTtcbnZhciBxdWV1ZU1pY3JvVGFzayA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgIGlmICghdHJpZ2dlcikge1xuICAgICAgICB2YXIgdG9nZ2xlXzEgPSAwO1xuICAgICAgICB2YXIgZWxfMSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICAgICAgdmFyIGNvbmZpZyA9IHsgY2hhcmFjdGVyRGF0YTogdHJ1ZSB9O1xuICAgICAgICBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAoKSB7IHJldHVybiBub3RpZnkoKTsgfSkub2JzZXJ2ZShlbF8xLCBjb25maWcpO1xuICAgICAgICB0cmlnZ2VyID0gZnVuY3Rpb24gKCkgeyBlbF8xLnRleHRDb250ZW50ID0gXCJcIi5jb25jYXQodG9nZ2xlXzEgPyB0b2dnbGVfMS0tIDogdG9nZ2xlXzErKyk7IH07XG4gICAgfVxuICAgIGNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcbiAgICB0cmlnZ2VyKCk7XG59O1xuZXhwb3J0IHsgcXVldWVNaWNyb1Rhc2sgfTtcbiIsImltcG9ydCB7IHF1ZXVlTWljcm9UYXNrIH0gZnJvbSAnLi9xdWV1ZU1pY3JvVGFzayc7XG52YXIgcXVldWVSZXNpemVPYnNlcnZlciA9IGZ1bmN0aW9uIChjYikge1xuICAgIHF1ZXVlTWljcm9UYXNrKGZ1bmN0aW9uIFJlc2l6ZU9ic2VydmVyKCkge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2IpO1xuICAgIH0pO1xufTtcbmV4cG9ydCB7IHF1ZXVlUmVzaXplT2JzZXJ2ZXIgfTtcbiIsImltcG9ydCB7IHByb2Nlc3MgfSBmcm9tICcuL3Byb2Nlc3MnO1xuaW1wb3J0IHsgZ2xvYmFsIH0gZnJvbSAnLi9nbG9iYWwnO1xuaW1wb3J0IHsgcXVldWVSZXNpemVPYnNlcnZlciB9IGZyb20gJy4vcXVldWVSZXNpemVPYnNlcnZlcic7XG52YXIgd2F0Y2hpbmcgPSAwO1xudmFyIGlzV2F0Y2hpbmcgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAhIXdhdGNoaW5nOyB9O1xudmFyIENBVENIX1BFUklPRCA9IDI1MDtcbnZhciBvYnNlcnZlckNvbmZpZyA9IHsgYXR0cmlidXRlczogdHJ1ZSwgY2hhcmFjdGVyRGF0YTogdHJ1ZSwgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH07XG52YXIgZXZlbnRzID0gW1xuICAgICdyZXNpemUnLFxuICAgICdsb2FkJyxcbiAgICAndHJhbnNpdGlvbmVuZCcsXG4gICAgJ2FuaW1hdGlvbmVuZCcsXG4gICAgJ2FuaW1hdGlvbnN0YXJ0JyxcbiAgICAnYW5pbWF0aW9uaXRlcmF0aW9uJyxcbiAgICAna2V5dXAnLFxuICAgICdrZXlkb3duJyxcbiAgICAnbW91c2V1cCcsXG4gICAgJ21vdXNlZG93bicsXG4gICAgJ21vdXNlb3ZlcicsXG4gICAgJ21vdXNlb3V0JyxcbiAgICAnYmx1cicsXG4gICAgJ2ZvY3VzJ1xuXTtcbnZhciB0aW1lID0gZnVuY3Rpb24gKHRpbWVvdXQpIHtcbiAgICBpZiAodGltZW91dCA9PT0gdm9pZCAwKSB7IHRpbWVvdXQgPSAwOyB9XG4gICAgcmV0dXJuIERhdGUubm93KCkgKyB0aW1lb3V0O1xufTtcbnZhciBzY2hlZHVsZWQgPSBmYWxzZTtcbnZhciBTY2hlZHVsZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNjaGVkdWxlcigpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5zdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5saXN0ZW5lciA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLnNjaGVkdWxlKCk7IH07XG4gICAgfVxuICAgIFNjaGVkdWxlci5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKHRpbWVvdXQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRpbWVvdXQgPT09IHZvaWQgMCkgeyB0aW1lb3V0ID0gQ0FUQ0hfUEVSSU9EOyB9XG4gICAgICAgIGlmIChzY2hlZHVsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzY2hlZHVsZWQgPSB0cnVlO1xuICAgICAgICB2YXIgdW50aWwgPSB0aW1lKHRpbWVvdXQpO1xuICAgICAgICBxdWV1ZVJlc2l6ZU9ic2VydmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBlbGVtZW50c0hhdmVSZXNpemVkID0gZmFsc2U7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnRzSGF2ZVJlc2l6ZWQgPSBwcm9jZXNzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICBzY2hlZHVsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aW1lb3V0ID0gdW50aWwgLSB0aW1lKCk7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1dhdGNoaW5nKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudHNIYXZlUmVzaXplZCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5ydW4oMTAwMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRpbWVvdXQgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnJ1bih0aW1lb3V0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFNjaGVkdWxlci5wcm90b3R5cGUuc2NoZWR1bGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICB0aGlzLnJ1bigpO1xuICAgIH07XG4gICAgU2NoZWR1bGVyLnByb3RvdHlwZS5vYnNlcnZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgY2IgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5vYnNlcnZlciAmJiBfdGhpcy5vYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmJvZHksIG9ic2VydmVyQ29uZmlnKTsgfTtcbiAgICAgICAgZG9jdW1lbnQuYm9keSA/IGNiKCkgOiBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGNiKTtcbiAgICB9O1xuICAgIFNjaGVkdWxlci5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLnN0b3BwZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcHBlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5vYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXMubGlzdGVuZXIpO1xuICAgICAgICAgICAgdGhpcy5vYnNlcnZlKCk7XG4gICAgICAgICAgICBldmVudHMuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgX3RoaXMubGlzdGVuZXIsIHRydWUpOyB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU2NoZWR1bGVyLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoIXRoaXMuc3RvcHBlZCkge1xuICAgICAgICAgICAgdGhpcy5vYnNlcnZlciAmJiB0aGlzLm9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIGV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBnbG9iYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihuYW1lLCBfdGhpcy5saXN0ZW5lciwgdHJ1ZSk7IH0pO1xuICAgICAgICAgICAgdGhpcy5zdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIFNjaGVkdWxlcjtcbn0oKSk7XG52YXIgc2NoZWR1bGVyID0gbmV3IFNjaGVkdWxlcigpO1xudmFyIHVwZGF0ZUNvdW50ID0gZnVuY3Rpb24gKG4pIHtcbiAgICAhd2F0Y2hpbmcgJiYgbiA+IDAgJiYgc2NoZWR1bGVyLnN0YXJ0KCk7XG4gICAgd2F0Y2hpbmcgKz0gbjtcbiAgICAhd2F0Y2hpbmcgJiYgc2NoZWR1bGVyLnN0b3AoKTtcbn07XG5leHBvcnQgeyBzY2hlZHVsZXIsIHVwZGF0ZUNvdW50IH07XG4iLCJpbXBvcnQgeyBSZXNpemVPYnNlcnZlckJveE9wdGlvbnMgfSBmcm9tICcuL1Jlc2l6ZU9ic2VydmVyQm94T3B0aW9ucyc7XG5pbXBvcnQgeyBjYWxjdWxhdGVCb3hTaXplIH0gZnJvbSAnLi9hbGdvcml0aG1zL2NhbGN1bGF0ZUJveFNpemUnO1xuaW1wb3J0IHsgaXNTVkcsIGlzUmVwbGFjZWRFbGVtZW50IH0gZnJvbSAnLi91dGlscy9lbGVtZW50JztcbnZhciBza2lwTm90aWZ5T25FbGVtZW50ID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIHJldHVybiAhaXNTVkcodGFyZ2V0KVxuICAgICAgICAmJiAhaXNSZXBsYWNlZEVsZW1lbnQodGFyZ2V0KVxuICAgICAgICAmJiBnZXRDb21wdXRlZFN0eWxlKHRhcmdldCkuZGlzcGxheSA9PT0gJ2lubGluZSc7XG59O1xudmFyIFJlc2l6ZU9ic2VydmF0aW9uID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBSZXNpemVPYnNlcnZhdGlvbih0YXJnZXQsIG9ic2VydmVkQm94KSB7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICB0aGlzLm9ic2VydmVkQm94ID0gb2JzZXJ2ZWRCb3ggfHwgUmVzaXplT2JzZXJ2ZXJCb3hPcHRpb25zLkNPTlRFTlRfQk9YO1xuICAgICAgICB0aGlzLmxhc3RSZXBvcnRlZFNpemUgPSB7XG4gICAgICAgICAgICBpbmxpbmVTaXplOiAwLFxuICAgICAgICAgICAgYmxvY2tTaXplOiAwXG4gICAgICAgIH07XG4gICAgfVxuICAgIFJlc2l6ZU9ic2VydmF0aW9uLnByb3RvdHlwZS5pc0FjdGl2ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHNpemUgPSBjYWxjdWxhdGVCb3hTaXplKHRoaXMudGFyZ2V0LCB0aGlzLm9ic2VydmVkQm94LCB0cnVlKTtcbiAgICAgICAgaWYgKHNraXBOb3RpZnlPbkVsZW1lbnQodGhpcy50YXJnZXQpKSB7XG4gICAgICAgICAgICB0aGlzLmxhc3RSZXBvcnRlZFNpemUgPSBzaXplO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmxhc3RSZXBvcnRlZFNpemUuaW5saW5lU2l6ZSAhPT0gc2l6ZS5pbmxpbmVTaXplXG4gICAgICAgICAgICB8fCB0aGlzLmxhc3RSZXBvcnRlZFNpemUuYmxvY2tTaXplICE9PSBzaXplLmJsb2NrU2l6ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgcmV0dXJuIFJlc2l6ZU9ic2VydmF0aW9uO1xufSgpKTtcbmV4cG9ydCB7IFJlc2l6ZU9ic2VydmF0aW9uIH07XG4iLCJ2YXIgUmVzaXplT2JzZXJ2ZXJEZXRhaWwgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFJlc2l6ZU9ic2VydmVyRGV0YWlsKHJlc2l6ZU9ic2VydmVyLCBjYWxsYmFjaykge1xuICAgICAgICB0aGlzLmFjdGl2ZVRhcmdldHMgPSBbXTtcbiAgICAgICAgdGhpcy5za2lwcGVkVGFyZ2V0cyA9IFtdO1xuICAgICAgICB0aGlzLm9ic2VydmF0aW9uVGFyZ2V0cyA9IFtdO1xuICAgICAgICB0aGlzLm9ic2VydmVyID0gcmVzaXplT2JzZXJ2ZXI7XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICB9XG4gICAgcmV0dXJuIFJlc2l6ZU9ic2VydmVyRGV0YWlsO1xufSgpKTtcbmV4cG9ydCB7IFJlc2l6ZU9ic2VydmVyRGV0YWlsIH07XG4iLCJpbXBvcnQgeyBzY2hlZHVsZXIsIHVwZGF0ZUNvdW50IH0gZnJvbSAnLi91dGlscy9zY2hlZHVsZXInO1xuaW1wb3J0IHsgUmVzaXplT2JzZXJ2YXRpb24gfSBmcm9tICcuL1Jlc2l6ZU9ic2VydmF0aW9uJztcbmltcG9ydCB7IFJlc2l6ZU9ic2VydmVyRGV0YWlsIH0gZnJvbSAnLi9SZXNpemVPYnNlcnZlckRldGFpbCc7XG5pbXBvcnQgeyByZXNpemVPYnNlcnZlcnMgfSBmcm9tICcuL3V0aWxzL3Jlc2l6ZU9ic2VydmVycyc7XG52YXIgb2JzZXJ2ZXJNYXAgPSBuZXcgV2Vha01hcCgpO1xudmFyIGdldE9ic2VydmF0aW9uSW5kZXggPSBmdW5jdGlvbiAob2JzZXJ2YXRpb25UYXJnZXRzLCB0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9ic2VydmF0aW9uVGFyZ2V0cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAob2JzZXJ2YXRpb25UYXJnZXRzW2ldLnRhcmdldCA9PT0gdGFyZ2V0KSB7XG4gICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gLTE7XG59O1xudmFyIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyKCkge1xuICAgIH1cbiAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIuY29ubmVjdCA9IGZ1bmN0aW9uIChyZXNpemVPYnNlcnZlciwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIGRldGFpbCA9IG5ldyBSZXNpemVPYnNlcnZlckRldGFpbChyZXNpemVPYnNlcnZlciwgY2FsbGJhY2spO1xuICAgICAgICBvYnNlcnZlck1hcC5zZXQocmVzaXplT2JzZXJ2ZXIsIGRldGFpbCk7XG4gICAgfTtcbiAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIub2JzZXJ2ZSA9IGZ1bmN0aW9uIChyZXNpemVPYnNlcnZlciwgdGFyZ2V0LCBvcHRpb25zKSB7XG4gICAgICAgIHZhciBkZXRhaWwgPSBvYnNlcnZlck1hcC5nZXQocmVzaXplT2JzZXJ2ZXIpO1xuICAgICAgICB2YXIgZmlyc3RPYnNlcnZhdGlvbiA9IGRldGFpbC5vYnNlcnZhdGlvblRhcmdldHMubGVuZ3RoID09PSAwO1xuICAgICAgICBpZiAoZ2V0T2JzZXJ2YXRpb25JbmRleChkZXRhaWwub2JzZXJ2YXRpb25UYXJnZXRzLCB0YXJnZXQpIDwgMCkge1xuICAgICAgICAgICAgZmlyc3RPYnNlcnZhdGlvbiAmJiByZXNpemVPYnNlcnZlcnMucHVzaChkZXRhaWwpO1xuICAgICAgICAgICAgZGV0YWlsLm9ic2VydmF0aW9uVGFyZ2V0cy5wdXNoKG5ldyBSZXNpemVPYnNlcnZhdGlvbih0YXJnZXQsIG9wdGlvbnMgJiYgb3B0aW9ucy5ib3gpKTtcbiAgICAgICAgICAgIHVwZGF0ZUNvdW50KDEpO1xuICAgICAgICAgICAgc2NoZWR1bGVyLnNjaGVkdWxlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci51bm9ic2VydmUgPSBmdW5jdGlvbiAocmVzaXplT2JzZXJ2ZXIsIHRhcmdldCkge1xuICAgICAgICB2YXIgZGV0YWlsID0gb2JzZXJ2ZXJNYXAuZ2V0KHJlc2l6ZU9ic2VydmVyKTtcbiAgICAgICAgdmFyIGluZGV4ID0gZ2V0T2JzZXJ2YXRpb25JbmRleChkZXRhaWwub2JzZXJ2YXRpb25UYXJnZXRzLCB0YXJnZXQpO1xuICAgICAgICB2YXIgbGFzdE9ic2VydmF0aW9uID0gZGV0YWlsLm9ic2VydmF0aW9uVGFyZ2V0cy5sZW5ndGggPT09IDE7XG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgICBsYXN0T2JzZXJ2YXRpb24gJiYgcmVzaXplT2JzZXJ2ZXJzLnNwbGljZShyZXNpemVPYnNlcnZlcnMuaW5kZXhPZihkZXRhaWwpLCAxKTtcbiAgICAgICAgICAgIGRldGFpbC5vYnNlcnZhdGlvblRhcmdldHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIHVwZGF0ZUNvdW50KC0xKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLmRpc2Nvbm5lY3QgPSBmdW5jdGlvbiAocmVzaXplT2JzZXJ2ZXIpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGRldGFpbCA9IG9ic2VydmVyTWFwLmdldChyZXNpemVPYnNlcnZlcik7XG4gICAgICAgIGRldGFpbC5vYnNlcnZhdGlvblRhcmdldHMuc2xpY2UoKS5mb3JFYWNoKGZ1bmN0aW9uIChvdCkgeyByZXR1cm4gX3RoaXMudW5vYnNlcnZlKHJlc2l6ZU9ic2VydmVyLCBvdC50YXJnZXQpOyB9KTtcbiAgICAgICAgZGV0YWlsLmFjdGl2ZVRhcmdldHMuc3BsaWNlKDAsIGRldGFpbC5hY3RpdmVUYXJnZXRzLmxlbmd0aCk7XG4gICAgfTtcbiAgICByZXR1cm4gUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyO1xufSgpKTtcbmV4cG9ydCB7IFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlciB9O1xuIiwiaW1wb3J0IHsgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyIH0gZnJvbSAnLi9SZXNpemVPYnNlcnZlckNvbnRyb2xsZXInO1xuaW1wb3J0IHsgaXNFbGVtZW50IH0gZnJvbSAnLi91dGlscy9lbGVtZW50JztcbnZhciBSZXNpemVPYnNlcnZlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUmVzaXplT2JzZXJ2ZXIoY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJGYWlsZWQgdG8gY29uc3RydWN0ICdSZXNpemVPYnNlcnZlcic6IDEgYXJndW1lbnQgcmVxdWlyZWQsIGJ1dCBvbmx5IDAgcHJlc2VudC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkZhaWxlZCB0byBjb25zdHJ1Y3QgJ1Jlc2l6ZU9ic2VydmVyJzogVGhlIGNhbGxiYWNrIHByb3ZpZGVkIGFzIHBhcmFtZXRlciAxIGlzIG5vdCBhIGZ1bmN0aW9uLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIuY29ubmVjdCh0aGlzLCBjYWxsYmFjayk7XG4gICAgfVxuICAgIFJlc2l6ZU9ic2VydmVyLnByb3RvdHlwZS5vYnNlcnZlID0gZnVuY3Rpb24gKHRhcmdldCwgb3B0aW9ucykge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkZhaWxlZCB0byBleGVjdXRlICdvYnNlcnZlJyBvbiAnUmVzaXplT2JzZXJ2ZXInOiAxIGFyZ3VtZW50IHJlcXVpcmVkLCBidXQgb25seSAwIHByZXNlbnQuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNFbGVtZW50KHRhcmdldCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJGYWlsZWQgdG8gZXhlY3V0ZSAnb2JzZXJ2ZScgb24gJ1Jlc2l6ZU9ic2VydmVyJzogcGFyYW1ldGVyIDEgaXMgbm90IG9mIHR5cGUgJ0VsZW1lbnRcIik7XG4gICAgICAgIH1cbiAgICAgICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLm9ic2VydmUodGhpcywgdGFyZ2V0LCBvcHRpb25zKTtcbiAgICB9O1xuICAgIFJlc2l6ZU9ic2VydmVyLnByb3RvdHlwZS51bm9ic2VydmUgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRmFpbGVkIHRvIGV4ZWN1dGUgJ3Vub2JzZXJ2ZScgb24gJ1Jlc2l6ZU9ic2VydmVyJzogMSBhcmd1bWVudCByZXF1aXJlZCwgYnV0IG9ubHkgMCBwcmVzZW50LlwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzRWxlbWVudCh0YXJnZXQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRmFpbGVkIHRvIGV4ZWN1dGUgJ3Vub2JzZXJ2ZScgb24gJ1Jlc2l6ZU9ic2VydmVyJzogcGFyYW1ldGVyIDEgaXMgbm90IG9mIHR5cGUgJ0VsZW1lbnRcIik7XG4gICAgICAgIH1cbiAgICAgICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLnVub2JzZXJ2ZSh0aGlzLCB0YXJnZXQpO1xuICAgIH07XG4gICAgUmVzaXplT2JzZXJ2ZXIucHJvdG90eXBlLmRpc2Nvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5kaXNjb25uZWN0KHRoaXMpO1xuICAgIH07XG4gICAgUmVzaXplT2JzZXJ2ZXIudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAnZnVuY3Rpb24gUmVzaXplT2JzZXJ2ZXIgKCkgeyBbcG9seWZpbGwgY29kZV0gfSc7XG4gICAgfTtcbiAgICByZXR1cm4gUmVzaXplT2JzZXJ2ZXI7XG59KCkpO1xuZXhwb3J0IHsgUmVzaXplT2JzZXJ2ZXIgfTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQsIGltbWVkaWF0ZSkge1xuICBsZXQgdGltZW91dFxuXG4gIHJldHVybiBmdW5jdGlvbiBleGVjdXRlZEZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzXG4gICAgY29uc3QgYXJncyA9IGFyZ3VtZW50c1xuXG4gICAgY29uc3QgbGF0ZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgIHRpbWVvdXQgPSBudWxsXG4gICAgICBpZiAoIWltbWVkaWF0ZSkgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKVxuICAgIH1cblxuICAgIGNvbnN0IGNhbGxOb3cgPSBpbW1lZGlhdGUgJiYgIXRpbWVvdXRcblxuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KVxuXG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpXG5cbiAgICBpZiAoY2FsbE5vdykgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKVxuICB9XG59XG4iLCJpbXBvcnQgeyBSZXNpemVPYnNlcnZlciBhcyBQb2x5ZmlsbCB9IGZyb20gJ0BqdWdnbGUvcmVzaXplLW9ic2VydmVyJ1xuY29uc3QgUmVzaXplT2JzZXJ2ZXIgPSB3aW5kb3cuUmVzaXplT2JzZXJ2ZXIgfHwgUG9seWZpbGxcbmltcG9ydCBkZWJvdW5jZSBmcm9tICcuL3V0aWxzL2RlYm91bmNlJ1xuXG5pbXBvcnQgcmVtb3ZlSXRlbSBmcm9tICcuL3V0aWxzL3JlbW92ZS1hcnJheS1pdGVtJ1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50RW1pdHRlcidcbmltcG9ydCB7XG4gIGdldERpc3RhbmNlLFxuICBpbmRleE9mTmVhcmVzdFBvaW50XG59IGZyb20gJy4vZ2VvbWV0cnkvZGlzdGFuY2VzJ1xuXG5pbXBvcnQgRHJhZ2dhYmxlIGZyb20gJy4vZHJhZ2dhYmxlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0IGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoZHJhZ2dhYmxlcywgb3B0aW9ucz17fSkge1xuICAgIHN1cGVyKG9wdGlvbnMpXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICB0aW1lRW5kOiAyMDAsXG4gICAgICB0aW1lRXhjYW5nZTogNDAwLFxuICAgICAgcmFkaXVzOiAzMFxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0aGlzLmNvbnRhaW5lciA9IG9wdGlvbnMuY29udGFpbmVyXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gZHJhZ2dhYmxlc1xuICAgIHRoaXMuY2hhbmdlZER1cmluZ0l0ZXJhdGlvbiA9IGZhbHNlXG5cbiAgICB0aGlzLnJlc2l6ZU9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKGRlYm91bmNlKHRoaXMub25SZXNpemUuYmluZCh0aGlzKSwgMTAwKSlcblxuICAgIGlmICh0aGlzLmNvbnRhaW5lcikge1xuICAgICAgdGhpcy5yZXNpemVPYnNlcnZlci5vYnNlcnZlKHRoaXMuY29udGFpbmVyKVxuICAgIH1cblxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBvblJlc2l6ZSgpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLnJlb3JkZXJPbkNoYW5nZSkgdGhpcy5yZXNldCgpXG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGQpID0+IGQuc3RhcnRQb3NpdGlvbmluZygpKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLl9lbmFibGUgPSB0cnVlXG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gdGhpcy5pbml0RHJhZ2dhYmxlKGRyYWdnYWJsZSkpXG4gIH1cblxuICBpbml0RHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIGRyYWdnYWJsZS5lbmFibGUgPSB0aGlzLl9lbmFibGVcbiAgICBkcmFnZ2FibGUub24oJ2RyYWc6bW92ZScsICgpID0+IHRoaXMub25Nb3ZlKGRyYWdnYWJsZSkpXG4gICAgZHJhZ2dhYmxlLmRyYWdFbmRBY3Rpb24gPSAoKSA9PiB7XG4gICAgICBkcmFnZ2FibGUucGluUG9zaXRpb24oZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uLCB0aGlzLm9wdGlvbnMudGltZUVuZClcbiAgICAgIHRoaXMub25FbmQoZHJhZ2dhYmxlKVxuICAgIH1cbiAgICB0aGlzLnJlc2l6ZU9ic2VydmVyLm9ic2VydmUoZHJhZ2dhYmxlLmVsZW1lbnQpXG4gIH1cblxuICByZWxlYXNlRHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIudW5vYnNlcnZlKGRyYWdnYWJsZS5lbGVtZW50KVxuICAgIGRyYWdnYWJsZS5yZXNldE9uKCdkcmFnOmVuZCcpXG4gICAgZHJhZ2dhYmxlLnJlc2V0T24oJ2RyYWc6bW92ZScpXG4gICAgcmVtb3ZlSXRlbSh0aGlzLmRyYWdnYWJsZXMsIGRyYWdnYWJsZSlcbiAgfVxuXG4gIG9uTW92ZShkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBzb3J0ZWREcmFnZ2FibGVzID0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcbiAgICBjb25zdCBwaW5uZWRQb3NpdGlvbnMgPSBzb3J0ZWREcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24pXG5cbiAgICBjb25zdCBjdXJyZW50SW5kZXggPSBzb3J0ZWREcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKVxuICAgIGNvbnN0IHRhcmdldEluZGV4ID0gaW5kZXhPZk5lYXJlc3RQb2ludChwaW5uZWRQb3NpdGlvbnMsIGRyYWdnYWJsZS5wb3NpdGlvbiwgdGhpcy5vcHRpb25zLnJhZGl1cywgdGhpcy5kaXN0YW5jZUZ1bmMpXG5cbiAgICBpZiAodGFyZ2V0SW5kZXggIT09IC0xICYmIGN1cnJlbnRJbmRleCAhPT0gdGFyZ2V0SW5kZXgpIHtcbiAgICAgIGlmICh0YXJnZXRJbmRleCA8IGN1cnJlbnRJbmRleCkge1xuICAgICAgICBmb3IgKGxldCBpPXRhcmdldEluZGV4OyBpPGN1cnJlbnRJbmRleDsgaSsrKSB7XG4gICAgICAgICAgc29ydGVkRHJhZ2dhYmxlc1tpXS5waW5Qb3NpdGlvbihwaW5uZWRQb3NpdGlvbnNbaSsxXSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGxldCBpPWN1cnJlbnRJbmRleDsgaTx0YXJnZXRJbmRleDsgaSsrKSB7XG4gICAgICAgICAgc29ydGVkRHJhZ2dhYmxlc1tpKzFdLnBpblBvc2l0aW9uKHBpbm5lZFBvc2l0aW9uc1tpXSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChkcmFnZ2FibGUubmF0aXZlRHJhZ0FuZERyb3ApIHtcbiAgICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKHBpbm5lZFBvc2l0aW9uc1t0YXJnZXRJbmRleF0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24gPSBwaW5uZWRQb3NpdGlvbnNbdGFyZ2V0SW5kZXhdXG4gICAgICB9XG5cbiAgICAgIHRoaXMuY2hhbmdlZER1cmluZ0l0ZXJhdGlvbiA9IHRydWVcbiAgICB9XG4gIH1cblxuICBvbkVuZChkcmFnZ2FibGUpIHtcbiAgICBpZiAodGhpcy5jaGFuZ2VkRHVyaW5nSXRlcmF0aW9uKSB7XG4gICAgICB0aGlzLmVtaXQoJ2xpc3Q6Y2hhbmdlJylcbiAgICAgIHRoaXMuY2hhbmdlZER1cmluZ0l0ZXJhdGlvbiA9IGZhbHNlXG5cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucmVvcmRlck9uQ2hhbmdlICYmIHRoaXMub3B0aW9ucy5jb250YWluZXIpIHtcbiAgICAgICAgdGhpcy5yZW9yZGVyRWxlbWVudHMoZHJhZ2dhYmxlKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlb3JkZXJFbGVtZW50cyhtb3ZlZERyYWdnYWJsZSkge1xuICAgIGNvbnN0IHNvcnRlZERyYWdnYWJsZXMgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuICAgIGNvbnN0IGluZGV4ID0gc29ydGVkRHJhZ2dhYmxlcy5pbmRleE9mKG1vdmVkRHJhZ2dhYmxlKVxuICAgIGNvbnN0IG5leHQgPSBzb3J0ZWREcmFnZ2FibGVzW2luZGV4ICsgMV1cblxuICAgIHRoaXMucmVzZXQoKVxuXG4gICAgaWYgKG5leHQpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmluc2VydEJlZm9yZShtb3ZlZERyYWdnYWJsZS5lbGVtZW50LCBuZXh0LmVsZW1lbnQpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKG1vdmVkRHJhZ2dhYmxlLmVsZW1lbnQpXG4gICAgfVxuXG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGQpID0+IGQuc3RhcnRQb3NpdGlvbmluZygpKVxuICAgIHRoaXMuZW1pdCgnbGlzdDpyZW9yZGVyZWQnKVxuICB9XG5cbiAgZ2V0Q3VycmVudFBpbm5lZFBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5kcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24uY2xvbmUoKSlcbiAgfVxuXG4gIGdldFNvcnRlZERyYWdnYWJsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJhZ2dhYmxlcy5zb3J0KHRoaXMuc29ydGluZy5iaW5kKHRoaXMpKVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnJlc2V0UG9zaXRpb25Ub0luaXRpYWwoKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnJlZnJlc2goKSlcbiAgfVxuXG4gIGFkZChkcmFnZ2FibGVzKSB7XG4gICAgaWYgKCEoZHJhZ2dhYmxlcyBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgZHJhZ2dhYmxlcyA9IFtkcmFnZ2FibGVzXVxuICAgIH1cbiAgICBkcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gdGhpcy5pbml0RHJhZ2dhYmxlKGRyYWdnYWJsZSkpXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gdGhpcy5kcmFnZ2FibGVzLmNvbmNhdChkcmFnZ2FibGVzKVxuICB9XG5cbiAgcmVtb3ZlKGRyYWdnYWJsZXMpIHtcbiAgICBjb25zdCBpbml0aWFsUG9zaXRpb25zID0gdGhpcy5kcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uKVxuICAgIGNvbnN0IGxpc3QgPSBbXVxuICAgIGNvbnN0IHNvcnRlZERyYWdnYWJsZXMgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuXG4gICAgaWYgKCEoZHJhZ2dhYmxlcyBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgZHJhZ2dhYmxlcyA9IFtkcmFnZ2FibGVzXVxuICAgIH1cblxuICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB0aGlzLnJlbGVhc2VEcmFnZ2FibGUoZHJhZ2dhYmxlKSlcblxuICAgIGxldCBqID0gMFxuICAgIHNvcnRlZERyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBpZiAodGhpcy5kcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTEpIHtcbiAgICAgICAgaWYgKGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbiAhPT0gaW5pdGlhbFBvc2l0aW9uc1tqXSkge1xuICAgICAgICAgIGRyYWdnYWJsZS5waW5Qb3NpdGlvbihpbml0aWFsUG9zaXRpb25zW2pdLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICAgIH1cbiAgICAgICAgZHJhZ2dhYmxlLmluaXRpYWxQb3NpdGlvbiA9IGluaXRpYWxQb3NpdGlvbnNbal1cbiAgICAgICAgaisrXG4gICAgICAgIGxpc3QucHVzaChkcmFnZ2FibGUpXG4gICAgICB9XG4gICAgfSlcbiAgICB0aGlzLmRyYWdnYWJsZXMgPSBsaXN0XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLnJlbW92ZSh0aGlzLmRyYWdnYWJsZXMuc2xpY2UoKSlcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLmRlc3Ryb3koKSlcbiAgICBpZiAodGhpcy5jb250YWluZXIpIHtcbiAgICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIudW5vYnNlcnZlKHRoaXMuY29udGFpbmVyKVxuICAgIH1cbiAgfVxuXG4gIHNvcnRpbmcoZHJhZ2dhYmxlQSwgZHJhZ2dhYmxlQikge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuc29ydGluZykge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5zb3J0aW5nKGRyYWdnYWJsZUEsIGRyYWdnYWJsZUIpXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChkcmFnZ2FibGVBLnBpbm5lZFBvc2l0aW9uLnkgPCBkcmFnZ2FibGVCLnBpbm5lZFBvc2l0aW9uLnkpIHJldHVybiAtMVxuICAgICAgaWYgKGRyYWdnYWJsZUEucGlubmVkUG9zaXRpb24ueSA+IGRyYWdnYWJsZUIucGlubmVkUG9zaXRpb24ueSkgcmV0dXJuIDFcbiAgICAgIGlmIChkcmFnZ2FibGVBLnBpbm5lZFBvc2l0aW9uLnggPCBkcmFnZ2FibGVCLnBpbm5lZFBvc2l0aW9uLngpIHJldHVybiAtMVxuICAgICAgaWYgKGRyYWdnYWJsZUEucGlubmVkUG9zaXRpb24ueCA+IGRyYWdnYWJsZUIucGlubmVkUG9zaXRpb24ueCkgcmV0dXJuIDFcbiAgICAgIHJldHVybiAwXG4gICAgfVxuICB9XG5cbiAgZ2V0IGRpc3RhbmNlRnVuYygpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmdldERpc3RhbmNlIHx8IGdldERpc3RhbmNlXG4gIH1cblxuICBnZXQgcG9zaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmdldEN1cnJlbnRQaW5uZWRQb3NpdGlvbnMoKVxuICB9XG5cbiAgc2V0IHBvc2l0aW9ucyhwb3NpdGlvbnMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gJ3dyb25nIGFycmF5IGxlbmd0aCdcbiAgICBpZiAocG9zaXRpb25zLmxlbmd0aCA9PT0gdGhpcy5kcmFnZ2FibGVzLmxlbmd0aCkge1xuICAgICAgcG9zaXRpb25zLmZvckVhY2goKHBvaW50LCBpKSA9PiB7XG4gICAgICAgIHRoaXMuZHJhZ2dhYmxlc1tpXS5waW5Qb3NpdGlvbihwb2ludClcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG1lc3NhZ2VcbiAgICB9XG4gIH1cblxuICBnZXQgZW5hYmxlKCkge1xuICAgIHJldHVybiB0aGlzLl9lbmFibGVcbiAgfVxuXG4gIHNldCBlbmFibGUoZW5hYmxlKSB7XG4gICAgdGhpcy5fZW5hYmxlID0gZW5hYmxlXG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLmVuYWJsZSA9IGVuYWJsZVxuICAgIH0pXG4gIH1cblxuICBzdGF0aWMgZmFjdG9yeShjb250YWluZXJFbGVtZW50LCBlbGVtZW50cywgb3B0aW9ucz17fSkge1xuICAgIGNvbnN0IGRyYWdnYWJsZXMgPSBBcnJheS5mcm9tKGVsZW1lbnRzKS5tYXAoKGVsZW1lbnQpID0+IHtcbiAgICAgIHJldHVybiBuZXcgRHJhZ2dhYmxlKGVsZW1lbnQsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBjb250YWluZXI6IGNvbnRhaW5lckVsZW1lbnRcbiAgICAgIH0sIG9wdGlvbnMuZHJhZ2dhYmxlIHx8IHt9KSlcbiAgICB9KVxuXG4gICAgcmV0dXJuIG5ldyBMaXN0KGRyYWdnYWJsZXMsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgY29udGFpbmVyOiBjb250YWluZXJFbGVtZW50XG4gICAgfSwgb3B0aW9ucy5saXN0IHx8IHt9KSlcbiAgfVxufVxuIiwiaW1wb3J0IExpc3QgZnJvbSAnLi9saXN0J1xuaW1wb3J0IHsgaW5kZXhPZk5lYXJlc3RQb2ludCwgZ2V0WURpZmZlcmVuY2UgfSBmcm9tICcuL2dlb21ldHJ5L2Rpc3RhbmNlcydcbmltcG9ydCBQb2ludCBmcm9tICcuL2dlb21ldHJ5L3BvaW50J1xuXG5pbXBvcnQgRHJhZ2dhYmxlIGZyb20gJy4vZHJhZ2dhYmxlJ1xuXG5jb25zdCBhcnJheU1vdmUgPSAoYXJyYXksIGZyb20sIHRvKSA9PiB7XG4gIGFycmF5LnNwbGljZSh0byA8IDAgPyBhcnJheS5sZW5ndGggKyB0byA6IHRvLCAwLCBhcnJheS5zcGxpY2UoZnJvbSwgMSlbMF0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1YmJsaW5nTGlzdCBleHRlbmRzIExpc3Qge1xuICBhdXRvRGV0ZWN0VmVydGljYWxHYXAoKSB7XG4gICAgaWYgKCF0aGlzLl92ZXJ0aWNhbEdhcCAmJiAhdGhpcy5vcHRpb25zLnZlcnRpY2FsR2FwICYmIHRoaXMuZHJhZ2dhYmxlcy5sZW5ndGggPj0gMikge1xuICAgICAgY29uc3Qgc29ydGVkID0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcbiAgICAgIHRoaXMuX3ZlcnRpY2FsR2FwID0gc29ydGVkWzFdLnBpbm5lZFBvc2l0aW9uLnkgLSBzb3J0ZWRbMF0ucGlubmVkUG9zaXRpb24ueSAtIHNvcnRlZFswXS5nZXRTaXplKCkueVxuICAgIH1cbiAgfVxuXG4gIGF1dG9EZXRlY3RTdGFydFBvc2l0aW9uKCkge1xuICAgIGlmICh0aGlzLmRyYWdnYWJsZXMubGVuZ3RoID49IDEgJiYgIXRoaXMuc3RhcnRQb3NpdGlvbikge1xuICAgICAgdGhpcy5zdGFydFBvc2l0aW9uID0gdGhpcy5kcmFnZ2FibGVzWzBdLnBpbm5lZFBvc2l0aW9uXG4gICAgfVxuICB9XG5cbiAgaW5pdERyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICBzdXBlci5pbml0RHJhZ2dhYmxlKGRyYWdnYWJsZSlcbiAgICBkcmFnZ2FibGUub24oJ2RyYWc6c3RhcnQnLCAoKSA9PiB0aGlzLm9uRHJhZ1N0YXJ0KGRyYWdnYWJsZSkpXG4gIH1cblxuICBvbkRyYWdTdGFydChkcmFnZ2FibGUpIHtcbiAgICB0aGlzLmF1dG9EZXRlY3RWZXJ0aWNhbEdhcCgpXG4gICAgdGhpcy5hdXRvRGV0ZWN0U3RhcnRQb3NpdGlvbigpXG4gICAgdGhpcy5jYWNoZWRTb3J0ZWREcmFnZ2FibGVzID0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcbiAgICB0aGlzLmluZGV4T2ZBY3RpdmVEcmFnZ2FibGUgPSB0aGlzLmNhY2hlZFNvcnRlZERyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpXG4gIH1cblxuICBvbk1vdmUoZHJhZ2dhYmxlKSB7XG4gICAgY29uc3QgcHJldkRyYWdnYWJsZSA9IHRoaXMuY2FjaGVkU29ydGVkRHJhZ2dhYmxlc1t0aGlzLmluZGV4T2ZBY3RpdmVEcmFnZ2FibGUgLSAxXVxuICAgIGNvbnN0IG5leHREcmFnZ2FibGUgPSB0aGlzLmNhY2hlZFNvcnRlZERyYWdnYWJsZXNbdGhpcy5pbmRleE9mQWN0aXZlRHJhZ2dhYmxlICsgMV1cbiAgICBjb25zdCBjdXJyZW50UG9zaXRpb24gPSBkcmFnZ2FibGUucGlubmVkUG9zaXRpb25cblxuICAgIGxldCBjdXJyZW50T3JkZXJcbiAgICBsZXQgdGFyZ2V0SW5kZXhcblxuICAgIGlmKGRyYWdnYWJsZS51cERpcmVjdGlvbiAmJiBwcmV2RHJhZ2dhYmxlKSB7XG4gICAgICBjdXJyZW50T3JkZXIgPSBbcHJldkRyYWdnYWJsZSwgZHJhZ2dhYmxlXS5tYXAoKGQpID0+IGQucGlubmVkUG9zaXRpb24pXG4gICAgICB0YXJnZXRJbmRleCA9IGluZGV4T2ZOZWFyZXN0UG9pbnQoY3VycmVudE9yZGVyLCBkcmFnZ2FibGUucG9zaXRpb24sIDEwMDAwLCB0aGlzLmRpc3RhbmNlRnVuYylcblxuICAgICAgaWYgKHRhcmdldEluZGV4ID09PSAwKSB7XG4gICAgICAgIGlmKGRyYWdnYWJsZS5zaG91bGRVc2VOYXRpdmVEcmFnQW5kRHJvcCgpKSB7XG4gICAgICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKHByZXZEcmFnZ2FibGUucGlubmVkUG9zaXRpb24pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uID0gcHJldkRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbi5jbG9uZSgpXG4gICAgICAgIH1cbiAgICAgICAgcHJldkRyYWdnYWJsZS5waW5Qb3NpdGlvbihuZXcgUG9pbnQoXG4gICAgICAgICAgY3VycmVudFBvc2l0aW9uLngsXG4gICAgICAgICAgZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uLnkgKyBkcmFnZ2FibGUuZ2V0U2l6ZSgpLnkgKyB0aGlzLnZlcnRpY2FsR2FwXG4gICAgICAgICksIHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSlcbiAgICAgICAgYXJyYXlNb3ZlKHRoaXMuY2FjaGVkU29ydGVkRHJhZ2dhYmxlcywgdGhpcy5pbmRleE9mQWN0aXZlRHJhZ2dhYmxlLS0sIHRoaXMuaW5kZXhPZkFjdGl2ZURyYWdnYWJsZSlcbiAgICAgICAgdGhpcy5vbk1vdmUoZHJhZ2dhYmxlKVxuICAgICAgICB0aGlzLmNoYW5nZWREdXJpbmdJdGVyYXRpb24gPSB0cnVlXG4gICAgICB9XG4gICAgfSBlbHNlIGlmKGRyYWdnYWJsZS5kb3duRGlyZWN0aW9uICYmIG5leHREcmFnZ2FibGUpIHtcbiAgICAgIGN1cnJlbnRPcmRlciA9IFtkcmFnZ2FibGUsIG5leHREcmFnZ2FibGVdLm1hcCgoZCkgPT4gZC5waW5uZWRQb3NpdGlvbilcbiAgICAgIHRhcmdldEluZGV4ID0gaW5kZXhPZk5lYXJlc3RQb2ludChjdXJyZW50T3JkZXIsIGRyYWdnYWJsZS5wb3NpdGlvbiwgMTAwMDAsIHRoaXMuZGlzdGFuY2VGdW5jKVxuXG4gICAgICBpZih0YXJnZXRJbmRleCA9PT0gMSkge1xuICAgICAgICBuZXh0RHJhZ2dhYmxlLnBpblBvc2l0aW9uKGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbiwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICBjb25zdCBkcmFnZ2FibGVOZXdQb3NpdGlvbiA9IG5ldyBQb2ludChcbiAgICAgICAgICBuZXh0RHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uLngsXG4gICAgICAgICAgbmV4dERyYWdnYWJsZS5waW5uZWRQb3NpdGlvbi55ICsgbmV4dERyYWdnYWJsZS5nZXRTaXplKCkueSArIHRoaXMudmVydGljYWxHYXBcbiAgICAgICAgKVxuICAgICAgICBpZihkcmFnZ2FibGUuc2hvdWxkVXNlTmF0aXZlRHJhZ0FuZERyb3AoKSkge1xuICAgICAgICAgIGRyYWdnYWJsZS5waW5Qb3NpdGlvbihkcmFnZ2FibGVOZXdQb3NpdGlvbilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24gPSBkcmFnZ2FibGVOZXdQb3NpdGlvblxuICAgICAgICB9XG4gICAgICAgIGFycmF5TW92ZSh0aGlzLmNhY2hlZFNvcnRlZERyYWdnYWJsZXMsIHRoaXMuaW5kZXhPZkFjdGl2ZURyYWdnYWJsZSsrLCB0aGlzLmluZGV4T2ZBY3RpdmVEcmFnZ2FibGUpXG4gICAgICAgIHRoaXMub25Nb3ZlKGRyYWdnYWJsZSlcbiAgICAgICAgdGhpcy5jaGFuZ2VkRHVyaW5nSXRlcmF0aW9uID0gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGJ1YmJsaW5nKHNvcnRlZERyYWdnYWJsZXMsIGN1cnJlbnREcmFnZ2FibGUpIHtcbiAgICBjb25zdCBjdXJyZW50UG9zaXRpb24gPSB0aGlzLnN0YXJ0UG9zaXRpb24uY2xvbmUoKVxuICAgIHNvcnRlZERyYWdnYWJsZXMgfHw9IHRoaXMuZ2V0U29ydGVkRHJhZ2dhYmxlcygpXG5cbiAgICBzb3J0ZWREcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgaWYgKCFkcmFnZ2FibGUucGlubmVkUG9zaXRpb24uY29tcGFyZShjdXJyZW50UG9zaXRpb24pKSB7XG4gICAgICAgIGlmIChkcmFnZ2FibGUgPT09IGN1cnJlbnREcmFnZ2FibGUgJiYgIWN1cnJlbnREcmFnZ2FibGUuc2hvdWxkVXNlTmF0aXZlRHJhZ0FuZERyb3AoKSkge1xuICAgICAgICAgIGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbiA9IGN1cnJlbnRQb3NpdGlvbi5jbG9uZSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKGN1cnJlbnRQb3NpdGlvbiwgKGRyYWdnYWJsZSA9PT0gY3VycmVudERyYWdnYWJsZSkgPyAwIDogdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGN1cnJlbnRQb3NpdGlvbi55ID0gY3VycmVudFBvc2l0aW9uLnkgKyBkcmFnZ2FibGUuZ2V0U2l6ZSgpLnkgKyB0aGlzLnZlcnRpY2FsR2FwXG4gICAgfSlcbiAgfVxuXG4gIHJlbW92ZShkcmFnZ2FibGVzKSB7XG4gICAgaWYgKCEoZHJhZ2dhYmxlcyBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgZHJhZ2dhYmxlcyA9IFtkcmFnZ2FibGVzXVxuICAgIH1cblxuICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB0aGlzLnJlbGVhc2VEcmFnZ2FibGUoZHJhZ2dhYmxlKSlcbiAgICB0aGlzLmRyYWdnYWJsZXMgPSB0aGlzLmRyYWdnYWJsZXMuZmlsdGVyKChkKSA9PiAhZHJhZ2dhYmxlcy5pbmNsdWRlcyhkKSlcblxuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkKSA9PiBkLnN0YXJ0UG9zaXRpb25pbmcoKSlcblxuICAgIGlmKHRoaXMuZHJhZ2dhYmxlcy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmF1dG9EZXRlY3RWZXJ0aWNhbEdhcCgpXG4gICAgICB0aGlzLmF1dG9EZXRlY3RTdGFydFBvc2l0aW9uKClcbiAgICAgIHRoaXMuYnViYmxpbmcoKVxuICAgIH1cbiAgfVxuXG4gIGdldCBkaXN0YW5jZUZ1bmMoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5nZXREaXN0YW5jZSB8fCBnZXRZRGlmZmVyZW5jZVxuICB9XG5cbiAgZ2V0IHZlcnRpY2FsR2FwKCkge1xuICAgIGlmKHRoaXMub3B0aW9ucy52ZXJ0aWNhbEdhcCkge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy52ZXJ0aWNhbEdhcFxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmF1dG9EZXRlY3RWZXJ0aWNhbEdhcCgpXG4gICAgICByZXR1cm4gdGhpcy5fdmVydGljYWxHYXAgfHwgMFxuICAgIH1cbiAgfVxuXG4gIHNldCB2ZXJ0aWNhbEdhcChnYXBWYWx1ZSkge1xuICAgIHRoaXMub3B0aW9ucy52ZXJ0aWNhbEdhcCA9IGdhcFZhbHVlXG4gIH1cblxuICBzdGF0aWMgZmFjdG9yeShjb250YWluZXJFbGVtZW50LCBlbGVtZW50cywgb3B0aW9ucz17fSkge1xuICAgIGNvbnN0IGRyYWdnYWJsZXMgPSBBcnJheS5mcm9tKGVsZW1lbnRzKS5tYXAoKGVsZW1lbnQpID0+IHtcbiAgICAgIHJldHVybiBuZXcgRHJhZ2dhYmxlKGVsZW1lbnQsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBjb250YWluZXI6IGNvbnRhaW5lckVsZW1lbnRcbiAgICAgIH0sIG9wdGlvbnMuZHJhZ2dhYmxlIHx8IHt9KSlcbiAgICB9KVxuXG4gICAgcmV0dXJuIG5ldyBCdWJibGluZ0xpc3QoZHJhZ2dhYmxlcywgT2JqZWN0LmFzc2lnbih7XG4gICAgICBjb250YWluZXI6IGNvbnRhaW5lckVsZW1lbnRcbiAgICB9LCBvcHRpb25zLmxpc3QgfHwge30pKVxuICB9XG59XG4iXSwibmFtZXMiOlsiUG9pbnQiLCJ4IiwieSIsInAiLCJrIiwiZWxlbWVudCIsInBhcmVudCIsInBhcmVudE5vZGUiLCJlbGVtZW50UmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInBhcmVudFJlY3QiLCJsZWZ0IiwidG9wIiwid2lkdGgiLCJoZWlnaHQiLCJSZWN0YW5nbGUiLCJwb3NpdGlvbiIsInNpemUiLCJhZGQiLCJtdWx0IiwicmVjdCIsIk1hdGgiLCJtaW4iLCJtYXgiLCJzdWIiLCJyZWN0YW5nbGUiLCJpbmNsdWRlUG9pbnQiLCJnZXRQMyIsImF4aXMiLCJzZWxBeGlzIiwiY3Jvc3NSZWN0YW5nbGUiLCJhbmQiLCJ0aGlzQ2VudGVyIiwiZ2V0Q2VudGVyIiwicmVjdENlbnRlciIsInNpZ24iLCJvZmZzZXQiLCJlbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInN0eWxlIiwiaXNDb25zaWRlclRyYW5zbGF0ZSIsImVsZW1lbnRPZmZzZXQiLCJlbGVtZW50U2l6ZSIsImdldERlZmF1bHRDb250YWluZXIiLCJjb250YWluZXIiLCJ3aW5kb3ciLCJnZXRDb21wdXRlZFN0eWxlIiwidGFnTmFtZSIsIkV2ZW50RW1pdHRlciIsIm9wdGlvbnMiLCJldmVudHMiLCJvbiIsIk9iamVjdCIsImVudHJpZXMiLCJldmVudE5hbWUiLCJmbiIsImludGVycnVwdGVkIiwiYXJncyIsInNsaWNlIiwiY2FsbCIsImFyZ3VtZW50cyIsImZ1bmMiLCJwdXNoIiwidW5zaGlmdCIsImluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsImdldERpc3RhbmNlIiwicDEiLCJwMiIsImR4IiwiZHkiLCJzcXJ0IiwiZ2V0WERpZmZlcmVuY2UiLCJhYnMiLCJnZXRZRGlmZmVyZW5jZSIsInRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3RvcnkiLCJwb3ciLCJpbmRleE9mTmVhcmVzdFBvaW50IiwiYXJyIiwidmFsIiwicmFkaXVzIiwiZ2V0RGlzdGFuY2VGdW5jIiwiaSIsInRlbXAiLCJsZW5ndGgiLCJkaXJlY3RDcm9zc2luZyIsIkwxUDEiLCJMMVAyIiwiTDJQMSIsIkwyUDIiLCJrMSIsImsyIiwiYjEiLCJiMiIsImJvdW5kVG9MaW5lIiwiQSIsIkIiLCJQIiwiQVAiLCJBQiIsImFiMiIsImFwX2FiIiwidCIsImdldFBvaW50T25MaW5lQnlMZW5naHQiLCJMUDEiLCJMUDIiLCJsZW5naHQiLCJwZXJjZW50IiwiYWRkUG9pbnRUb0JvdW5kUG9pbnRzIiwiYm91bmRwb2ludHMiLCJwb2ludCIsImlzUmlnaHQiLCJyZXN1bHQiLCJmaWx0ZXIiLCJiUG9pbnQiLCJnZXRBbmdsZURpZmYiLCJhbHBoYSIsImJldGEiLCJtaW5BbmdsZSIsIm1heEFuZ2xlIiwiUEkiLCJnZXRBbmdsZSIsImRpZmYiLCJub3JtYWxpemVBbmdsZSIsImF0YW4yIiwiYm91bmRBbmdsZSIsImRtaW4iLCJkbWF4IiwiZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtIiwiYW5nbGUiLCJjZW50ZXIiLCJjb3MiLCJzaW4iLCJCb3VuZCIsIl9zaXplIiwiaW5zdGFuY2UiLCJib3VuZCIsImJpbmQiLCJCb3VuZFRvUmVjdGFuZ2xlIiwiY2FsY1BvaW50IiwiY2xvbmUiLCJyZWN0UDIiLCJCb3VuZFRvRWxlbWVudCIsImZyb21FbGVtZW50IiwiQm91bmRUb0xpbmVYIiwic3RhcnRZIiwiZW5kWSIsIkJvdW5kVG9MaW5lWSIsInN0YXJ0WCIsImVuZFgiLCJCb3VuZFRvTGluZSIsInN0YXJ0UG9pbnQiLCJlbmRQb2ludCIsInNvbWVLIiwiY29zQmV0YSIsInNpbkJldGEiLCJwb2ludDIiLCJuZXdFbmRQb2ludCIsInBvaW50Q3Jvc3NpbmciLCJCb3VuZFRvQ2lyY2xlIiwiQm91bmRUb0FyYyIsInN0YXJ0QW5nbGUiLCJlbmRBbmdsZSIsIl9zdGFydEFuZ2xlIiwiX2VuZEFuZ2xlIiwiYXJyYXkiLCJyYW5nZSIsInN0YXJ0Iiwic3RvcCIsInN0ZXAiLCJCYXNpY1N0cmF0ZWd5IiwiTm90Q3Jvc3NpbmdTdHJhdGVneSIsInJlY3RhbmdsZUxpc3QiLCJpbmRleGVzT2ZOZXdzIiwic3RhdGljUmVjdGFuZ2xlSW5kZXhlcyIsInJlZHVjZSIsImluZGV4ZXMiLCJfcmVjdCIsImZvckVhY2giLCJyZW1vdmFibGUiLCJpbmRleE9mU3RhdGljIiwic3RhdGljUmVjdCIsIm1vdmVUb0JvdW5kIiwic29tZSIsImJvdW5kUmVjdCIsImdldFNxdWFyZSIsIm9kbERyYWdnYWJsZXNMaXN0IiwibmV3RHJhZ2dhYmxlcyIsImluZGV4T2ZOZXdzIiwiZHJhZ2dhYmxlcyIsImNvbmNhdCIsImRyYWdnYWJsZSIsIkZsb2F0TGVmdFN0cmF0ZWd5IiwiYXNzaWduIiwicGFkZGluZ1RvcExlZnQiLCJwYWRkaW5nQm90dG9tUmlnaHQiLCJ5R2FwQmV0d2VlbkRyYWdnYWJsZXMiLCJnZXRQb3NpdGlvbiIsIl9pbmRleGVzT2ZOZXdzIiwiZ2V0UDIiLCJib3VuZGFyeVBvaW50cyIsInJlY3RJbmRleCIsImlzVmFsaWQiLCJuZXdMaXN0IiwibGlzdE9sZFBvc2l0aW9uIiwibWFwIiwibmV3RHJhZ2dhYmxlIiwiRmxvYXRSaWdodFN0cmF0ZWd5IiwicGFkZGluZ1RvcFJpZ2h0IiwicGFkZGluZ0JvdHRvbUxlZnQiLCJwYWRkaW5nQm90dG9tTmVnTGVmdCIsImdldFA0IiwiYWRkVG9EZWZhdWx0U2NvcGUiLCJ0YXJnZXQiLCJkZWZhdWx0U2NvcGUiLCJhZGRUYXJnZXQiLCJUYXJnZXQiLCJ0aW1lRW5kIiwidGltZUV4Y2FuZ2UiLCJwb3NpdGlvbmluZ1N0cmF0ZWd5Iiwic3RyYXRlZ3kiLCJnZXRSZWN0YW5nbGUiLCJ0YXJnZXRzIiwiZW1pdHRlciIsImVtaXQiLCJzdGFydEJvdW5kaW5nIiwiaW5pdCIsImJvdW5kaW5nIiwiaW5kZXhlc09mTmV3IiwicG9zaXRpb25pbmciLCJvbGREcmFnZ2FibGVzIiwic29ydGluZyIsInJlY3RhbmdsZXMiLCJpbm5lckRyYWdnYWJsZXMiLCJzZXRQb3NpdGlvbiIsImNhdGNoRHJhZ2dhYmxlIiwidGFyZ2V0UmVjdGFuZ2xlIiwiZHJhZ2dhYmxlU3F1YXJlIiwic2NvcGVzIiwic2NvcGUiLCJyZW1vdmVJdGVtIiwibmV3RHJhZ2dhYmxlc0luZGV4IiwiZ2V0U2l6ZSIsImFkZFJlbW92ZU9uTW92ZSIsInRpbWUiLCJtb3ZlIiwiaW5pdGlhbFBvc2l0aW9uIiwicHVzaElubmVyRHJhZ2dhYmxlIiwicmVtb3ZlSGFuZGxlciIsInJlbW92ZSIsInVuc3Vic2NyaWJlIiwiX2NvbnRhaW5lciIsIlNjb3BlIiwiZHJhZ0VuZEFjdGlvbiIsIm9uRW5kIiwic2hvdFRhcmdldHMiLCJzb3J0IiwiYSIsImIiLCJwaW5Qb3NpdGlvbiIsInJlc2V0IiwicmVmcmVzaCIsInBvc2l0aW9ucyIsIm1lc3NhZ2UiLCJ0YXJnZXRJbmRleGVzIiwiY3VycmVudFNjb3BlIiwiYWRkRHJhZ2dhYmxlVG9TY29wZSIsImFkZERyYWdnYWJsZSIsIkRyYWdnYWJsZSIsImludGVycnVwdCIsImFkZFRhcmdldFRvU2NvcGUiLCJwcmVwZW5kT24iLCJjaGVja1N1cHBvcnRQYXNzaXZlRXZlbnRzIiwicGFzc2l2ZVN1cHBvcnRlZCIsImRlZmluZVByb3BlcnR5IiwiZ2V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJfZXJyIiwiaXNTdXBwb3J0UGFzc2l2ZUV2ZW50cyIsInRocm90dGxlIiwid2FpdCIsImxhc3RUaW1lIiwiZXhlY3V0ZWRGdW5jdGlvbiIsImNvbnRleHQiLCJub3ciLCJEYXRlIiwiYXBwbHkiLCJ0aHJvdHRsZWREcmFnT3ZlciIsImNhbGxiYWNrIiwiZHVyYXRpb24iLCJ0aHJvdHRsZWRDYWxsYmFjayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJwYXNzaXZlRmFsc2UiLCJwYXNzaXZlIiwiaXNUb3VjaCIsIm1vdXNlRXZlbnRzIiwiZW5kIiwidG91Y2hFdmVudHMiLCJ0cmFuc2Zvcm1Qcm9wZXJ0eSIsImdldFN0eWxlUHJvcGVydHkiLCJ0cmFuc2l0aW9uUHJvcGVydHkiLCJnZXRUb3VjaEJ5SUQiLCJ0b3VjaElkIiwiY2hhbmdlZFRvdWNoZXMiLCJpZGVudGlmaWVyIiwicHJldmVudERvdWJsZUluaXQiLCJleGlzdGluZyIsImNvcHlTdHlsZXMiLCJzb3VyY2UiLCJkZXN0aW5hdGlvbiIsImNzIiwia2V5IiwiY2hpbGRyZW4iLCJfZW5hYmxlIiwic3RhcnRQb3NpdGlvbmluZyIsInN0YXJ0TGlzdGVuaW5nIiwiX3NldERlZmF1bHRUcmFuc2l0aW9uIiwicGlubmVkUG9zaXRpb24iLCJfZHJhZ1N0YXJ0IiwiZHJhZ1N0YXJ0IiwiX2RyYWdNb3ZlIiwiZHJhZ01vdmUiLCJfZHJhZ0VuZCIsImRyYWdFbmQiLCJfbmF0aXZlRHJhZ1N0YXJ0IiwibmF0aXZlRHJhZ1N0YXJ0IiwiX25hdGl2ZURyYWdPdmVyIiwibmF0aXZlRHJhZ092ZXIiLCJkcmFnT3ZlclRocm90dGxlRHVyYXRpb24iLCJfbmF0aXZlRHJhZ0VuZCIsIm5hdGl2ZURyYWdFbmQiLCJfbmF0aXZlRHJvcCIsIm5hdGl2ZURyb3AiLCJfc2Nyb2xsIiwib25TY3JvbGwiLCJoYW5kbGVyIiwiX3RyYW5zZm9ybVBvc2l0aW9uIiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25Dc3MiLCJ0ZXN0IiwicmVwbGFjZSIsInRyYW5zbGF0ZUNzcyIsInRyYW5zZm9ybSIsInNob3VsZFJlbW92ZVplcm9UcmFuc2xhdGUiLCJpc1NpbGVudCIsIl9zZXRUcmFuc2l0aW9uIiwiX3NldFRyYW5zbGF0ZSIsInNpbGVudCIsIl9wcmV2aW91c0RpcmVjdGlvblBvc2l0aW9uIiwiX3N0YXJ0UG9zaXRpb24iLCJsZWZ0RGlyZWN0aW9uIiwicmlnaHREaXJlY3Rpb24iLCJ1cERpcmVjdGlvbiIsImRvd25EaXJlY3Rpb24iLCJfc3RhcnRUb3VjaFRpbWVzdGFtcCIsInRvdWNoRHJhZ2dpbmdUaHJlc2hvbGQiLCJpc1RvdWNoRXZlbnQiLCJuYXRpdmVEcmFnQW5kRHJvcCIsImVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcE9uVG91Y2giLCJUb3VjaEV2ZW50IiwidG91Y2hQb2ludCIsIl9zdGFydFRvdWNoUG9pbnQiLCJwYWdlWCIsImNsaWVudFgiLCJwYWdlWSIsImNsaWVudFkiLCJfdG91Y2hJZCIsIl9zdGFydFdpbmRvd1Njcm9sbFBvaW50Iiwid2luZG93U2Nyb2xsUG9pbnQiLCJfc3RhcnRQYXJlbnRzU2Nyb2xsUG9pbnQiLCJwYXJlbnRzU2Nyb2xsUG9pbnQiLCJIVE1MSW5wdXRFbGVtZW50IiwiZm9jdXMiLCJzaG91bGRVc2VOYXRpdmVEcmFnQW5kRHJvcCIsImVtdWxhdGVPbkZpcnN0TW92ZSIsInNlZW1zU2Nyb2xsaW5nIiwiY2FuY2VsRHJhZ2dpbmciLCJlbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3AiLCJjYW5jZWxFbXVsYXRpb24iLCJwYXJlbnRzIiwidG91Y2giLCJpc0RyYWdnaW5nIiwic3RvcFByb3BhZ2F0aW9uIiwiZGV0ZXJtaW5lRGlyZWN0aW9uIiwiY2xhc3NMaXN0Iiwic2V0VGltZW91dCIsIl9ldmVudCIsImRhdGFUcmFuc2ZlciIsInNldERhdGEiLCJlZmZlY3RBbGxvd2VkIiwiZHJvcEVmZmVjdCIsInJlbW92ZUF0dHJpYnV0ZSIsImNvbnRhaW5lclJlY3QiLCJjbG9uZWRFbGVtZW50IiwiY2xvbmVOb2RlIiwiYm9keSIsImFwcGVuZENoaWxkIiwiZW11bGF0aW9uRHJhZ2dhYmxlIiwiY29udGFpbmVyUmVjdFBvaW50IiwiZGVzdHJveSIsInJlbW92ZUNoaWxkIiwicmVzZXRFbWl0dGVyIiwiX2hhbmRsZXIiLCJzY3JvbGxYIiwic2Nyb2xsWSIsIl9jYWNoZWRQYXJlbnRzIiwic3VtIiwic2Nyb2xsTGVmdCIsInNjcm9sbFRvcCIsImVuYWJsZSIsIlJlc2l6ZU9ic2VydmVyIiwiZGVib3VuY2UiLCJpbW1lZGlhdGUiLCJ0aW1lb3V0IiwibGF0ZXIiLCJjYWxsTm93IiwiY2xlYXJUaW1lb3V0IiwiUG9seWZpbGwiLCJMaXN0IiwiY2hhbmdlZER1cmluZ0l0ZXJhdGlvbiIsInJlc2l6ZU9ic2VydmVyIiwib25SZXNpemUiLCJvYnNlcnZlIiwicmVvcmRlck9uQ2hhbmdlIiwiZCIsImluaXREcmFnZ2FibGUiLCJvbk1vdmUiLCJ1bm9ic2VydmUiLCJyZXNldE9uIiwic29ydGVkRHJhZ2dhYmxlcyIsImdldFNvcnRlZERyYWdnYWJsZXMiLCJwaW5uZWRQb3NpdGlvbnMiLCJjdXJyZW50SW5kZXgiLCJ0YXJnZXRJbmRleCIsImRpc3RhbmNlRnVuYyIsInJlb3JkZXJFbGVtZW50cyIsIm1vdmVkRHJhZ2dhYmxlIiwibmV4dCIsImluc2VydEJlZm9yZSIsInJlc2V0UG9zaXRpb25Ub0luaXRpYWwiLCJBcnJheSIsImluaXRpYWxQb3NpdGlvbnMiLCJsaXN0IiwicmVsZWFzZURyYWdnYWJsZSIsImoiLCJkcmFnZ2FibGVBIiwiZHJhZ2dhYmxlQiIsImdldEN1cnJlbnRQaW5uZWRQb3NpdGlvbnMiLCJjb250YWluZXJFbGVtZW50IiwiZWxlbWVudHMiLCJmcm9tIiwiYXJyYXlNb3ZlIiwidG8iLCJCdWJibGluZ0xpc3QiLCJfdmVydGljYWxHYXAiLCJ2ZXJ0aWNhbEdhcCIsInNvcnRlZCIsInN0YXJ0UG9zaXRpb24iLCJvbkRyYWdTdGFydCIsImF1dG9EZXRlY3RWZXJ0aWNhbEdhcCIsImF1dG9EZXRlY3RTdGFydFBvc2l0aW9uIiwiY2FjaGVkU29ydGVkRHJhZ2dhYmxlcyIsImluZGV4T2ZBY3RpdmVEcmFnZ2FibGUiLCJwcmV2RHJhZ2dhYmxlIiwibmV4dERyYWdnYWJsZSIsImN1cnJlbnRQb3NpdGlvbiIsImN1cnJlbnRPcmRlciIsImRyYWdnYWJsZU5ld1Bvc2l0aW9uIiwiY3VycmVudERyYWdnYWJsZSIsImNvbXBhcmUiLCJpbmNsdWRlcyIsImJ1YmJsaW5nIiwiZ2FwVmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFBQTtBQUFBLE1BQ3FCQSxLQUFLLGdCQUFBLFlBQUE7RUFDeEI7RUFDRjtFQUNBO0VBQ0E7RUFDQTtJQUNFLFNBQVlDLEtBQUFBLENBQUFBLENBQUMsRUFBRUMsQ0FBQyxFQUFFO0VBQUEsSUFBQSxlQUFBLENBQUEsSUFBQSxFQUFBLEtBQUEsQ0FBQSxDQUFBO01BQ2hCLElBQUksQ0FBQ0QsQ0FBQyxHQUFHQSxDQUFDLENBQUE7TUFDVixJQUFJLENBQUNDLENBQUMsR0FBR0EsQ0FBQyxDQUFBO0VBQ1osR0FBQTtFQUFDLEVBQUEsWUFBQSxDQUFBLEtBQUEsRUFBQSxDQUFBO0VBQUEsSUFBQSxHQUFBLEVBQUEsS0FBQTtNQUFBLEtBRUQsRUFBQSxTQUFBLEdBQUEsQ0FBSUMsQ0FBQyxFQUFFO0VBQ0wsTUFBQSxPQUFPLElBQUlILEtBQUssQ0FBQyxJQUFJLENBQUNDLENBQUMsR0FBR0UsQ0FBQyxDQUFDRixDQUFDLEVBQUUsSUFBSSxDQUFDQyxDQUFDLEdBQUdDLENBQUMsQ0FBQ0QsQ0FBQyxDQUFDLENBQUE7RUFDOUMsS0FBQTtFQUFDLEdBQUEsRUFBQTtFQUFBLElBQUEsR0FBQSxFQUFBLEtBQUE7TUFBQSxLQUVELEVBQUEsU0FBQSxHQUFBLENBQUlDLENBQUMsRUFBRTtFQUNMLE1BQUEsT0FBTyxJQUFJSCxLQUFLLENBQUMsSUFBSSxDQUFDQyxDQUFDLEdBQUdFLENBQUMsQ0FBQ0YsQ0FBQyxFQUFFLElBQUksQ0FBQ0MsQ0FBQyxHQUFHQyxDQUFDLENBQUNELENBQUMsQ0FBQyxDQUFBO0VBQzlDLEtBQUE7RUFBQyxHQUFBLEVBQUE7RUFBQSxJQUFBLEdBQUEsRUFBQSxNQUFBO01BQUEsS0FFRCxFQUFBLFNBQUEsSUFBQSxDQUFLRSxDQUFDLEVBQUU7RUFDTixNQUFBLE9BQU8sSUFBSUosS0FBSyxDQUFDLElBQUksQ0FBQ0MsQ0FBQyxHQUFHRyxDQUFDLEVBQUUsSUFBSSxDQUFDRixDQUFDLEdBQUdFLENBQUMsQ0FBQyxDQUFBO0VBQzFDLEtBQUE7RUFBQyxHQUFBLEVBQUE7RUFBQSxJQUFBLEdBQUEsRUFBQSxVQUFBO0VBQUEsSUFBQSxLQUFBLEVBRUQsU0FBVyxRQUFBLEdBQUE7RUFDVCxNQUFBLE9BQU8sSUFBSUosS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUNDLENBQUMsQ0FBQyxDQUFBO0VBQ3BDLEtBQUE7RUFBQyxHQUFBLEVBQUE7RUFBQSxJQUFBLEdBQUEsRUFBQSxTQUFBO01BQUEsS0FFRCxFQUFBLFNBQUEsT0FBQSxDQUFRQyxDQUFDLEVBQUU7RUFDVCxNQUFBLE9BQVEsSUFBSSxDQUFDRixDQUFDLEtBQUtFLENBQUMsQ0FBQ0YsQ0FBQyxJQUFJLElBQUksQ0FBQ0MsQ0FBQyxLQUFLQyxDQUFDLENBQUNELENBQUMsQ0FBQTtFQUMxQyxLQUFBO0VBQUMsR0FBQSxFQUFBO0VBQUEsSUFBQSxHQUFBLEVBQUEsT0FBQTtFQUFBLElBQUEsS0FBQSxFQUVELFNBQVEsS0FBQSxHQUFBO1FBQ04sT0FBTyxJQUFJRixLQUFLLENBQUMsSUFBSSxDQUFDQyxDQUFDLEVBQUUsSUFBSSxD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
