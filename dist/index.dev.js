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
        if (this.stopPropagationOnDragStart) {
          event.stopPropagation();
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
        event.stopPropagation();
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
      key: "stopPropagationOnDragStart",
      get: function get() {
        return this.options.stopPropagationOnDragStart || false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZGV2LmpzIiwic291cmNlcyI6WyIuLi9zcmMvZ2VvbWV0cnkvcG9pbnQuanMiLCIuLi9zcmMvZ2VvbWV0cnkvcmVjdGFuZ2xlLmpzIiwiLi4vc3JjL3V0aWxzL2dldC1kZWZhdWx0LWNvbnRhaW5lci5qcyIsIi4uL3NyYy9ldmVudEVtaXR0ZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvZGVzYW5kcm8tZ2V0LXN0eWxlLXByb3BlcnR5L2dldC1zdHlsZS1wcm9wZXJ0eS5qcyIsIi4uL3NyYy9nZW9tZXRyeS9kaXN0YW5jZXMuanMiLCIuLi9zcmMvZ2VvbWV0cnkvYm91bmRzLmpzIiwiLi4vc3JjL2dlb21ldHJ5L2FuZ2xlcy5qcyIsIi4uL3NyYy9ib3VuZGluZy5qcyIsIi4uL3NyYy91dGlscy9yZW1vdmUtYXJyYXktaXRlbS5qcyIsIi4uL3NyYy91dGlscy9yYW5nZS5qcyIsIi4uL3NyYy9wb3NpdGlvbmluZy5qcyIsIi4uL3NyYy90YXJnZXQuanMiLCIuLi9zcmMvc2NvcGUuanMiLCIuLi9zcmMvdXRpbHMvaXMtc3VwcG9ydC1wYXNzaXZlLWV2ZW50cy5qcyIsIi4uL3NyYy91dGlscy90aHJvdHRsZS5qcyIsIi4uL3NyYy9kcmFnZ2FibGUuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL3V0aWxzL3Jlc2l6ZU9ic2VydmVycy5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvYWxnb3JpdGhtcy9oYXNBY3RpdmVPYnNlcnZhdGlvbnMuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL2FsZ29yaXRobXMvaGFzU2tpcHBlZE9ic2VydmF0aW9ucy5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvYWxnb3JpdGhtcy9kZWxpdmVyUmVzaXplTG9vcEVycm9yLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BqdWdnbGUvcmVzaXplLW9ic2VydmVyL2xpYi9SZXNpemVPYnNlcnZlckJveE9wdGlvbnMuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL3V0aWxzL2ZyZWV6ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvUmVzaXplT2JzZXJ2ZXJTaXplLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BqdWdnbGUvcmVzaXplLW9ic2VydmVyL2xpYi9ET01SZWN0UmVhZE9ubHkuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL3V0aWxzL2VsZW1lbnQuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL3V0aWxzL2dsb2JhbC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvYWxnb3JpdGhtcy9jYWxjdWxhdGVCb3hTaXplLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BqdWdnbGUvcmVzaXplLW9ic2VydmVyL2xpYi9SZXNpemVPYnNlcnZlckVudHJ5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BqdWdnbGUvcmVzaXplLW9ic2VydmVyL2xpYi9hbGdvcml0aG1zL2NhbGN1bGF0ZURlcHRoRm9yTm9kZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvYWxnb3JpdGhtcy9icm9hZGNhc3RBY3RpdmVPYnNlcnZhdGlvbnMuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL2FsZ29yaXRobXMvZ2F0aGVyQWN0aXZlT2JzZXJ2YXRpb25zQXREZXB0aC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvdXRpbHMvcHJvY2Vzcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvdXRpbHMvcXVldWVNaWNyb1Rhc2suanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL3V0aWxzL3F1ZXVlUmVzaXplT2JzZXJ2ZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL3V0aWxzL3NjaGVkdWxlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvUmVzaXplT2JzZXJ2YXRpb24uanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL1Jlc2l6ZU9ic2VydmVyRGV0YWlsLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BqdWdnbGUvcmVzaXplLW9ic2VydmVyL2xpYi9SZXNpemVPYnNlcnZlckNvbnRyb2xsZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL1Jlc2l6ZU9ic2VydmVyLmpzIiwiLi4vc3JjL3V0aWxzL2RlYm91bmNlLmpzIiwiLi4vc3JjL2xpc3QuanMiLCIuLi9zcmMvYnViYmxpbmdMaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKiBDbGFzcyByZXByZXNlbnRpbmcgYSBwb2ludC4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvaW50IHtcbiAgLyoqXG4gICogQ3JlYXRlIGEgcG9pbnQuXG4gICogQHBhcmFtIHtudW1iZXJ9IHggLSBUaGUgeCB2YWx1ZS5cbiAgKiBAcGFyYW0ge251bWJlcn0geSAtIFRoZSB5IHZhbHVlLlxuICAqL1xuICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgdGhpcy54ID0geFxuICAgIHRoaXMueSA9IHlcbiAgfVxuXG4gIGFkZChwKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnggKyBwLngsIHRoaXMueSArIHAueSlcbiAgfVxuXG4gIHN1YihwKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnggLSBwLngsIHRoaXMueSAtIHAueSlcbiAgfVxuXG4gIG11bHQoaykge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54ICogaywgdGhpcy55ICogaylcbiAgfVxuXG4gIG5lZ2F0aXZlKCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQoLXRoaXMueCwgLXRoaXMueSlcbiAgfVxuXG4gIGNvbXBhcmUocCkge1xuICAgIHJldHVybiAodGhpcy54ID09PSBwLnggJiYgdGhpcy55ID09PSBwLnkpXG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCwgdGhpcy55KVxuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIGB7eD0ke3RoaXMueH0seT0ke3RoaXMueX1gXG4gIH1cblxuICBzdGF0aWMgZWxlbWVudE9mZnNldChlbGVtZW50LCBwYXJlbnQpIHtcbiAgICBwYXJlbnQgPSBwYXJlbnQgfHwgZWxlbWVudC5wYXJlbnROb2RlXG4gICAgY29uc3QgZWxlbWVudFJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgY29uc3QgcGFyZW50UmVjdCA9IHBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIHJldHVybiBuZXcgUG9pbnQoXG4gICAgICBlbGVtZW50UmVjdC5sZWZ0IC0gcGFyZW50UmVjdC5sZWZ0LFxuICAgICAgZWxlbWVudFJlY3QudG9wIC0gcGFyZW50UmVjdC50b3BcbiAgICApXG4gIH1cblxuICBzdGF0aWMgZWxlbWVudFNpemUoZWxlbWVudCkge1xuICAgIGNvbnN0IGVsZW1lbnRSZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIHJldHVybiBuZXcgUG9pbnQoXG4gICAgICBlbGVtZW50UmVjdC53aWR0aCxcbiAgICAgIGVsZW1lbnRSZWN0LmhlaWdodFxuICAgIClcbiAgfVxufVxuIiwiaW1wb3J0IFBvaW50IGZyb20gJy4vcG9pbnQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY3RhbmdsZSB7XG4gIGNvbnN0cnVjdG9yKHBvc2l0aW9uLCBzaXplKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgdGhpcy5zaXplID0gc2l6ZVxuICB9XG5cbiAgZ2V0UDEoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25cbiAgfVxuXG4gIGdldFAyKCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHRoaXMucG9zaXRpb24ueSlcbiAgfVxuXG4gIGdldFAzKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLnNpemUpXG4gIH1cblxuICBnZXRQNCgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnkpXG4gIH1cblxuICBnZXRDZW50ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb24uYWRkKHRoaXMuc2l6ZS5tdWx0KDAuNSkpXG4gIH1cblxuICBvcihyZWN0KSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBuZXcgUG9pbnQoTWF0aC5taW4odGhpcy5wb3NpdGlvbi54LCByZWN0LnBvc2l0aW9uLngpLCBNYXRoLm1pbih0aGlzLnBvc2l0aW9uLnksIHJlY3QucG9zaXRpb24ueSkpXG4gICAgY29uc3Qgc2l6ZSA9IChuZXcgUG9pbnQoTWF0aC5tYXgodGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHJlY3QucG9zaXRpb24ueCArIHJlY3Quc2l6ZS54KSwgTWF0aC5tYXgodGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnksIHJlY3QucG9zaXRpb24ueSArIHJlY3Quc2l6ZS55KSkpLnN1Yihwb3NpdGlvbilcbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZShwb3NpdGlvbiwgc2l6ZSlcbiAgfVxuXG4gIGFuZChyZWN0KSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBuZXcgUG9pbnQoTWF0aC5tYXgodGhpcy5wb3NpdGlvbi54LCByZWN0LnBvc2l0aW9uLngpLCBNYXRoLm1heCh0aGlzLnBvc2l0aW9uLnksIHJlY3QucG9zaXRpb24ueSkpXG4gICAgY29uc3Qgc2l6ZSA9IChuZXcgUG9pbnQoTWF0aC5taW4odGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHJlY3QucG9zaXRpb24ueCArIHJlY3Quc2l6ZS54KSwgTWF0aC5taW4odGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnksIHJlY3QucG9zaXRpb24ueSArIHJlY3Quc2l6ZS55KSkpLnN1Yihwb3NpdGlvbilcbiAgICBpZiAoc2l6ZS54IDw9IDAgfHwgc2l6ZS55IDw9IDApIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHBvc2l0aW9uLCBzaXplKVxuICB9XG5cbiAgaW5jbHVkZVBvaW50KHApIHtcbiAgICByZXR1cm4gISh0aGlzLnBvc2l0aW9uLnggPiBwLnggfHwgdGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLnggPCBwLnggfHwgdGhpcy5wb3NpdGlvbi55ID4gcC55IHx8IHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55IDwgcC55KVxuICB9XG5cbiAgaW5jbHVkZVJlY3RhbmdsZShyZWN0YW5nbGUpIHtcbiAgICByZXR1cm4gdGhpcy5pbmNsdWRlUG9pbnQocmVjdGFuZ2xlLnBvc2l0aW9uKSAmJiB0aGlzLmluY2x1ZGVQb2ludChyZWN0YW5nbGUuZ2V0UDMoKSlcbiAgfVxuXG4gIG1vdmVUb0JvdW5kKHJlY3QsIGF4aXMpIHtcbiAgICBsZXQgc2VsQXhpcywgY3Jvc3NSZWN0YW5nbGVcbiAgICBpZiAoYXhpcykge1xuICAgICAgc2VsQXhpcyA9IGF4aXNcbiAgICB9IGVsc2Uge1xuICAgICAgY3Jvc3NSZWN0YW5nbGUgPSB0aGlzLmFuZChyZWN0KVxuICAgICAgaWYgKCFjcm9zc1JlY3RhbmdsZSkge1xuICAgICAgICByZXR1cm4gcmVjdFxuICAgICAgfVxuICAgICAgc2VsQXhpcyA9IGNyb3NzUmVjdGFuZ2xlLnNpemUueCA+IGNyb3NzUmVjdGFuZ2xlLnNpemUueSA/ICd5JyA6ICd4J1xuICAgIH1cbiAgICBjb25zdCB0aGlzQ2VudGVyID0gdGhpcy5nZXRDZW50ZXIoKVxuICAgIGNvbnN0IHJlY3RDZW50ZXIgPSByZWN0LmdldENlbnRlcigpXG4gICAgY29uc3Qgc2lnbiA9IHRoaXNDZW50ZXJbc2VsQXhpc10gPiByZWN0Q2VudGVyW3NlbEF4aXNdID8gLTEgOiAxXG4gICAgY29uc3Qgb2Zmc2V0ID0gc2lnbiA+IDAgPyB0aGlzLnBvc2l0aW9uW3NlbEF4aXNdICsgdGhpcy5zaXplW3NlbEF4aXNdIC0gcmVjdC5wb3NpdGlvbltzZWxBeGlzXSA6IHRoaXMucG9zaXRpb25bc2VsQXhpc10gLSAocmVjdC5wb3NpdGlvbltzZWxBeGlzXSArIHJlY3Quc2l6ZVtzZWxBeGlzXSlcbiAgICByZWN0LnBvc2l0aW9uW3NlbEF4aXNdID0gcmVjdC5wb3NpdGlvbltzZWxBeGlzXSArIG9mZnNldFxuICAgIHJldHVybiByZWN0XG4gIH1cblxuICBnZXRTcXVhcmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZS54ICogdGhpcy5zaXplLnlcbiAgfVxuXG4gIHN0eWxlQXBwbHkoZWwpIHtcbiAgICBlbCA9IGVsIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2luZCcpXG4gICAgZWwuc3R5bGUubGVmdCA9IHRoaXMucG9zaXRpb24ueCArICdweCdcbiAgICBlbC5zdHlsZS50b3AgPSB0aGlzLnBvc2l0aW9uLnkgKyAncHgnXG4gICAgZWwuc3R5bGUud2lkdGggPSB0aGlzLnNpemUueCArICdweCdcbiAgICBlbC5zdHlsZS5oZWlnaHQgPSB0aGlzLnNpemUueSArICdweCdcbiAgfVxuXG4gIGdyb3d0aChzaXplKSB7XG4gICAgdGhpcy5zaXplID0gdGhpcy5zaXplLmFkZChzaXplKVxuICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uLmFkZChzaXplLm11bHQoLTAuNSkpXG4gIH1cblxuICBnZXRNaW5TaWRlKCkge1xuICAgIHJldHVybiBNYXRoLm1pbih0aGlzLnNpemUueCwgdGhpcy5zaXplLnkpXG4gIH1cblxuICBzdGF0aWMgZnJvbUVsZW1lbnQoZWxlbWVudCwgcGFyZW50PWVsZW1lbnQucGFyZW50Tm9kZSwgaXNDb25zaWRlclRyYW5zbGF0ZT1mYWxzZSkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gUG9pbnQuZWxlbWVudE9mZnNldChlbGVtZW50LCBwYXJlbnQsIGlzQ29uc2lkZXJUcmFuc2xhdGUpXG4gICAgY29uc3Qgc2l6ZSA9IFBvaW50LmVsZW1lbnRTaXplKGVsZW1lbnQpXG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUocG9zaXRpb24sIHNpemUpXG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldERlZmF1bHRDb250YWluZXIoZWxlbWVudCkge1xuICBsZXQgY29udGFpbmVyID0gZWxlbWVudC5wYXJlbnROb2RlXG4gIHdoaWxlIChjb250YWluZXIucGFyZW50Tm9kZSAmJiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShjb250YWluZXIpWydwb3NpdGlvbiddID09PSAnc3RhdGljJyAmJiBjb250YWluZXIudGFnTmFtZSAhPT0gJ0JPRFknKSB7XG4gICAgY29udGFpbmVyID0gY29udGFpbmVyLnBhcmVudE5vZGVcbiAgfVxuICByZXR1cm4gY29udGFpbmVyXG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAob3B0aW9ucyA9IHt9KSB7XG4gICAgdGhpcy5ldmVudHMgPSB7fVxuXG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5vbikge1xuICAgICAgZm9yIChjb25zdCBbZXZlbnROYW1lLCBmbl0gb2YgT2JqZWN0LmVudHJpZXMob3B0aW9ucy5vbikpIHtcbiAgICAgICAgdGhpcy5vbihldmVudE5hbWUsIGZuKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGVtaXQoZXZlbnROYW1lKSB7XG4gICAgdGhpcy5pbnRlcnJ1cHRlZCA9IGZhbHNlXG4gICAgY29uc3QgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKVxuXG4gICAgaWYgKCF0aGlzLmV2ZW50c1tldmVudE5hbWVdKSByZXR1cm5cblxuICAgIGZvciAoY29uc3QgZnVuYyBvZiB0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICBmdW5jKC4uLmFyZ3MpXG4gICAgICBpZiAodGhpcy5pbnRlcnJ1cHRlZCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpbnRlcnJ1cHQoKSB7XG4gICAgdGhpcy5pbnRlcnJ1cHRlZCA9IHRydWVcbiAgfVxuXG4gIG9uKGV2ZW50TmFtZSwgZm4pIHtcbiAgICBpZiAoIXRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSBbXVxuICAgIH1cblxuICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0ucHVzaChmbilcbiAgfVxuXG4gIHByZXBlbmRPbihldmVudE5hbWUsIGZuKSB7XG4gICAgaWYgKCF0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdID0gW11cbiAgICB9XG5cbiAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLnVuc2hpZnQoZm4pXG4gIH1cblxuICB1bnN1YnNjcmliZShldmVudE5hbWUsIGZuKSB7XG4gICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5ldmVudHNbZXZlbnROYW1lXS5pbmRleE9mKGZuKVxuICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5zcGxpY2UoaW5kZXgsIDEpXG4gICAgfVxuICB9XG5cbiAgcmVzZXRFbWl0dGVyICgpIHtcbiAgICB0aGlzLmV2ZW50cyA9IHt9XG4gIH1cblxuICByZXNldE9uKGV2ZW50TmFtZSkge1xuICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSBbXVxuICB9XG59XG4iLCIvKiFcbiAqIGdldFN0eWxlUHJvcGVydHkgdjEuMC40XG4gKiBvcmlnaW5hbCBieSBrYW5nYXhcbiAqIGh0dHA6Ly9wZXJmZWN0aW9ua2lsbHMuY29tL2ZlYXR1cmUtdGVzdGluZy1jc3MtcHJvcGVydGllcy9cbiAqIE1JVCBsaWNlbnNlXG4gKi9cblxuLypqc2hpbnQgYnJvd3NlcjogdHJ1ZSwgc3RyaWN0OiB0cnVlLCB1bmRlZjogdHJ1ZSAqL1xuLypnbG9iYWwgZGVmaW5lOiBmYWxzZSwgZXhwb3J0czogZmFsc2UsIG1vZHVsZTogZmFsc2UgKi9cblxuKCBmdW5jdGlvbiggd2luZG93ICkge1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBwcmVmaXhlcyA9ICdXZWJraXQgTW96IG1zIE1zIE8nLnNwbGl0KCcgJyk7XG52YXIgZG9jRWxlbVN0eWxlID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlO1xuXG5mdW5jdGlvbiBnZXRTdHlsZVByb3BlcnR5KCBwcm9wTmFtZSApIHtcbiAgaWYgKCAhcHJvcE5hbWUgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gdGVzdCBzdGFuZGFyZCBwcm9wZXJ0eSBmaXJzdFxuICBpZiAoIHR5cGVvZiBkb2NFbGVtU3R5bGVbIHByb3BOYW1lIF0gPT09ICdzdHJpbmcnICkge1xuICAgIHJldHVybiBwcm9wTmFtZTtcbiAgfVxuXG4gIC8vIGNhcGl0YWxpemVcbiAgcHJvcE5hbWUgPSBwcm9wTmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHByb3BOYW1lLnNsaWNlKDEpO1xuXG4gIC8vIHRlc3QgdmVuZG9yIHNwZWNpZmljIHByb3BlcnRpZXNcbiAgdmFyIHByZWZpeGVkO1xuICBmb3IgKCB2YXIgaT0wLCBsZW4gPSBwcmVmaXhlcy5sZW5ndGg7IGkgPCBsZW47IGkrKyApIHtcbiAgICBwcmVmaXhlZCA9IHByZWZpeGVzW2ldICsgcHJvcE5hbWU7XG4gICAgaWYgKCB0eXBlb2YgZG9jRWxlbVN0eWxlWyBwcmVmaXhlZCBdID09PSAnc3RyaW5nJyApIHtcbiAgICAgIHJldHVybiBwcmVmaXhlZDtcbiAgICB9XG4gIH1cbn1cblxuLy8gdHJhbnNwb3J0XG5pZiAoIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcbiAgLy8gQU1EXG4gIGRlZmluZSggZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGdldFN0eWxlUHJvcGVydHk7XG4gIH0pO1xufSBlbHNlIGlmICggdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICkge1xuICAvLyBDb21tb25KUyBmb3IgQ29tcG9uZW50XG4gIG1vZHVsZS5leHBvcnRzID0gZ2V0U3R5bGVQcm9wZXJ0eTtcbn0gZWxzZSB7XG4gIC8vIGJyb3dzZXIgZ2xvYmFsXG4gIHdpbmRvdy5nZXRTdHlsZVByb3BlcnR5ID0gZ2V0U3R5bGVQcm9wZXJ0eTtcbn1cblxufSkoIHdpbmRvdyApO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldERpc3RhbmNlKHAxLCBwMikge1xuICBjb25zdCBkeCA9IHAxLnggLSBwMi54LCBkeSA9IHAxLnkgLSBwMi55XG4gIHJldHVybiBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRYRGlmZmVyZW5jZShwMSwgcDIpIHtcbiAgcmV0dXJuIE1hdGguYWJzKHAxLnggLSBwMi54KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0WURpZmZlcmVuY2UocDEsIHAyKSB7XG4gIHJldHVybiBNYXRoLmFicyhwMS55IC0gcDIueSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3Rvcnkob3B0aW9ucykge1xuICByZXR1cm4gKHAxLCBwMikgPT4ge1xuICAgIHJldHVybiBNYXRoLnNxcnQoXG4gICAgICBNYXRoLnBvdyhvcHRpb25zLnggKiBNYXRoLmFicyhwMS54IC0gcDIueCksIDIpICtcbiAgICAgIE1hdGgucG93KG9wdGlvbnMueSAqIE1hdGguYWJzKHAxLnkgLSBwMi55KSwgMilcbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluZGV4T2ZOZWFyZXN0UG9pbnQoYXJyLCB2YWwsIHJhZGl1cywgZ2V0RGlzdGFuY2VGdW5jPWdldERpc3RhbmNlKSB7XG4gIGxldCBzaXplLCBpbmRleCA9IDAsIGksIHRlbXBcbiAgaWYgKGFyci5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gLTFcbiAgfVxuICBzaXplID0gZ2V0RGlzdGFuY2VGdW5jKGFyclswXSwgdmFsKVxuICBmb3IgKGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgdGVtcCA9IGdldERpc3RhbmNlRnVuYyhhcnJbaV0sIHZhbClcbiAgICBpZiAodGVtcCA8IHNpemUpIHtcbiAgICAgIHNpemUgPSB0ZW1wXG4gICAgICBpbmRleCA9IGlcbiAgICB9XG4gIH1cbiAgaWYgKHJhZGl1cyA+PSAwICYmIHNpemUgPiByYWRpdXMpIHtcbiAgICByZXR1cm4gLTFcbiAgfVxuICByZXR1cm4gaW5kZXhcbn1cbiIsImltcG9ydCBQb2ludCBmcm9tICcuL3BvaW50J1xuaW1wb3J0IHsgZ2V0RGlzdGFuY2UgfSBmcm9tICcuL2Rpc3RhbmNlcydcblxuZXhwb3J0IGZ1bmN0aW9uIGNsYW1wKG1pbiwgbWF4LCB2YWwpIHtcbiAgcmV0dXJuIE1hdGgubWF4KG1pbiwgTWF0aC5taW4obWF4LCB2YWwpKVxufVxuXG4vL1JldHVybiBjcm9zc2luZyBwb2ludCBvZiB0d28gbGluZXNcbmV4cG9ydCBmdW5jdGlvbiBkaXJlY3RDcm9zc2luZyhMMVAxLCBMMVAyLCBMMlAxLCBMMlAyKSB7XG4gIGxldCB0ZW1wLCBrMSwgazIsIGIxLCBiMiwgeCwgeVxuICBpZiAoTDJQMS54ID09PSBMMlAyLngpIHtcbiAgICB0ZW1wID0gTDJQMVxuICAgIEwyUDEgPSBMMVAxXG4gICAgTDFQMSA9IHRlbXBcbiAgICB0ZW1wID0gTDJQMlxuICAgIEwyUDIgPSBMMVAyXG4gICAgTDFQMiA9IHRlbXBcbiAgfVxuICBpZiAoTDFQMS54ID09PSBMMVAyLngpIHtcbiAgICBrMiA9IChMMlAyLnkgLSBMMlAxLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICBiMiA9IChMMlAyLnggKiBMMlAxLnkgLSBMMlAxLnggKiBMMlAyLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICB4ID0gTDFQMS54XG4gICAgeSA9IHggKiBrMiArIGIyXG4gICAgcmV0dXJuIG5ldyBQb2ludCh4LCB5KVxuICB9IGVsc2Uge1xuICAgIGsxID0gKEwxUDIueSAtIEwxUDEueSkgLyAoTDFQMi54IC0gTDFQMS54KVxuICAgIGIxID0gKEwxUDIueCAqIEwxUDEueSAtIEwxUDEueCAqIEwxUDIueSkgLyAoTDFQMi54IC0gTDFQMS54KVxuICAgIGsyID0gKEwyUDIueSAtIEwyUDEueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgIGIyID0gKEwyUDIueCAqIEwyUDEueSAtIEwyUDEueCAqIEwyUDIueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgIHggPSAoYjEgLSBiMikgLyAoazIgLSBrMSlcbiAgICB5ID0geCAqIGsxICsgYjFcbiAgICByZXR1cm4gbmV3IFBvaW50KHgsIHkpXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kVG9TZWdtZW50KExQMSwgTFAyLCBQKSB7XG4gIGxldCB4LCB5XG4gIHggPSBjbGFtcChNYXRoLm1pbihMUDEueCwgTFAyLngpLCBNYXRoLm1heChMUDEueCwgTFAyLngpLCBQLngpXG4gIGlmICh4ICE9PSBQLngpIHtcbiAgICB5ID0gKHggPT09IExQMS54KSA/IExQMS55IDogTFAyLnlcbiAgICBQID0gbmV3IFBvaW50KHgsIHkpXG4gIH1cblxuICB5ID0gY2xhbXAoTWF0aC5taW4oTFAxLnksIExQMi55KSwgTWF0aC5tYXgoTFAxLnksIExQMi55KSwgUC55KVxuICBpZiAoeSAhPT0gUC55KSB7XG4gICAgeCA9ICh5ID09PSBMUDEueSkgPyBMUDEueCA6IExQMi54XG4gICAgUCA9IG5ldyBQb2ludCh4LCB5KVxuICB9XG5cbiAgcmV0dXJuIFBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kVG9MaW5lKEEsIEIsIFApIHtcbiAgY29uc3QgQVAgPSBuZXcgUG9pbnQoUC54IC0gQS54LCBQLnkgLSBBLnkpLFxuICAgIEFCID0gbmV3IFBvaW50KEIueCAtIEEueCwgQi55IC0gQS55KSxcbiAgICBhYjIgPSBBQi54ICogQUIueCArIEFCLnkgKiBBQi55LFxuICAgIGFwX2FiID0gQVAueCAqIEFCLnggKyBBUC55ICogQUIueSxcbiAgICB0ID0gYXBfYWIgLyBhYjJcbiAgcmV0dXJuIG5ldyBQb2ludChBLnggKyBBQi54ICogdCwgQS55ICsgQUIueSAqIHQpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb2ludE9uTGluZShMUDEsIExQMiwgcGVyY2VudCkge1xuICBjb25zdCBkeCA9IExQMi54IC0gTFAxLngsIGR5ID0gTFAyLnkgLSBMUDEueVxuICByZXR1cm4gbmV3IFBvaW50KExQMS54ICsgcGVyY2VudCAqIGR4LCBMUDEueSArIHBlcmNlbnQgKiBkeSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBvaW50T25MaW5lQnlMZW5naHQoTFAxLCBMUDIsIGxlbmdodCkge1xuICBjb25zdCBkeCA9IExQMi54IC0gTFAxLnhcbiAgY29uc3QgZHkgPSBMUDIueSAtIExQMS55XG4gIGNvbnN0IHBlcmNlbnQgPSBsZW5naHQgLyBnZXREaXN0YW5jZShMUDEsIExQMilcbiAgcmV0dXJuIG5ldyBQb2ludChMUDEueCArIHBlcmNlbnQgKiBkeCwgTFAxLnkgKyBwZXJjZW50ICogZHkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRQb2ludFRvQm91bmRQb2ludHMoYm91bmRwb2ludHMsIHBvaW50LCBpc1JpZ2h0KSB7XG4gIGNvbnN0IHJlc3VsdCA9IGJvdW5kcG9pbnRzLmZpbHRlcigoYlBvaW50KSA9PiB7XG4gICAgcmV0dXJuIGJQb2ludC55ID4gcG9pbnQueSB8fCAoaXNSaWdodCA/IGJQb2ludC54IDwgcG9pbnQueCA6IGJQb2ludC54ID4gcG9pbnQueClcbiAgfSlcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChwb2ludC55IDwgcmVzdWx0W2ldLnkpIHtcbiAgICAgIHJlc3VsdC5zcGxpY2UoaSwgMCwgcG9pbnQpXG4gICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxuICB9XG4gIHJlc3VsdC5wdXNoKHBvaW50KVxuICByZXR1cm4gcmVzdWx0XG59XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9wb2ludCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFuZ2xlRGlmZihhbHBoYSwgYmV0YSkge1xuICBjb25zdCBtaW5BbmdsZSA9IE1hdGgubWluKGFscGhhLCBiZXRhKVxuICBjb25zdCBtYXhBbmdsZSA9ICBNYXRoLm1heChhbHBoYSwgYmV0YSlcbiAgcmV0dXJuIE1hdGgubWluKG1heEFuZ2xlIC0gbWluQW5nbGUsIG1pbkFuZ2xlICsgTWF0aC5QSSoyIC0gbWF4QW5nbGUpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbmdsZShwMSwgcDIpIHtcbiAgY29uc3QgZGlmZiA9IHAyLnN1YihwMSlcbiAgcmV0dXJuIG5vcm1hbGl6ZUFuZ2xlKE1hdGguYXRhbjIoZGlmZi55LCBkaWZmLngpKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9SYWRpYW4oYW5nbGUpIHtcbiAgcmV0dXJuICgoYW5nbGUgJSAzNjApICogTWF0aC5QSSAvIDE4MClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvRGVncmVlKGFuZ2xlKSB7XG4gIHJldHVybiAoYW5nbGUgKiAxODAgLyBNYXRoLlBJKSAlIDM2MFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRBbmdsZShtaW4sIG1heCwgdmFsKSB7XG4gIGxldCBkbWluLCBkbWF4XG4gIGlmIChtaW4gPCBtYXggJiYgdmFsID4gbWluICYmIHZhbCA8IG1heCkge1xuICAgIHJldHVybiB2YWxcbiAgfSBlbHNlIGlmIChtYXggPCBtaW4gJiYgKHZhbCA8IG1heCB8fCB2YWwgPiBtaW4pKSB7XG4gICAgcmV0dXJuIHZhbFxuICB9IGVsc2Uge1xuICAgIGRtaW4gPSBnZXRBbmdsZURpZmYobWluLCB2YWwpXG4gICAgZG1heCA9IGdldEFuZ2xlRGlmZihtYXgsIHZhbClcbiAgICBpZiAoZG1pbiA8IGRtYXgpIHtcbiAgICAgIHJldHVybiBtaW5cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG1heFxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmVhcmVzdEFuZ2xlKGFyciwgYW5nbGUpIHtcbiAgbGV0IGksIHRlbXAsIGRpZmYgPSBNYXRoLlBJICogMiwgdmFsdWVcbiAgZm9yIChpID0gMDsgaSA8IGFyci5sZW5ndGg7aSsrKSB7XG4gICAgdGVtcCA9IGdldEFuZ2xlRGlmZihhcnJbaV0sIGFuZ2xlKVxuICAgIGlmIChkaWZmIDwgdGVtcCkge1xuICAgICAgZGlmZiA9IHRlbXBcbiAgICAgIHZhbHVlID0gYXJyW2ldXG4gICAgfVxuICB9XG4gIHJldHVybiB2YWx1ZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplQW5nbGUodmFsKSB7XG4gIHdoaWxlICh2YWwgPCAwKSB7XG4gICAgdmFsICs9IDIgKiBNYXRoLlBJXG4gIH1cbiAgd2hpbGUgKHZhbCA+IDIgKiBNYXRoLlBJKSB7XG4gICAgdmFsIC09IDIgKiBNYXRoLlBJXG4gIH1cbiAgcmV0dXJuIHZhbFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKGFuZ2xlLCBsZW5ndGgsIGNlbnRlcikge1xuICBjZW50ZXIgPSBjZW50ZXIgfHwgbmV3IFBvaW50KDAsIDApXG4gIHJldHVybiBjZW50ZXIuYWRkKG5ldyBQb2ludChsZW5ndGggKiBNYXRoLmNvcyhhbmdsZSksIGxlbmd0aCAqIE1hdGguc2luKGFuZ2xlKSkpXG59XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9nZW9tZXRyeS9wb2ludCdcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSAnLi9nZW9tZXRyeS9yZWN0YW5nbGUnXG5pbXBvcnQge1xuICBnZXRQb2ludE9uTGluZUJ5TGVuZ2h0LFxuICBkaXJlY3RDcm9zc2luZyxcbiAgYm91bmRUb0xpbmVcbn0gZnJvbSAnLi9nZW9tZXRyeS9ib3VuZHMnXG5cbmltcG9ydCB7XG4gIGdldEFuZ2xlLFxuICBub3JtYWxpemVBbmdsZSxcbiAgYm91bmRBbmdsZSxcbiAgZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtXG59IGZyb20gJy4vZ2VvbWV0cnkvYW5nbGVzJ1xuXG5leHBvcnQgY2xhc3MgQm91bmQge1xuICBjb25zdHJ1Y3RvciAoKSB7fVxuXG4gIGJvdW5kKHBvaW50LCBfc2l6ZSkge1xuICAgIHJldHVybiBwb2ludFxuICB9XG5cbiAgcmVmcmVzaCAoKSB7fVxuXG4gIHN0YXRpYyBib3VuZGluZygpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyB0aGlzKC4uLmFyZ3VtZW50cylcbiAgICByZXR1cm4gaW5zdGFuY2UuYm91bmQuYmluZChpbnN0YW5jZSlcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb1JlY3RhbmdsZSBleHRlbmRzIEJvdW5kIHtcbiAgY29uc3RydWN0b3IocmVjdGFuZ2xlKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMucmVjdGFuZ2xlID0gcmVjdGFuZ2xlXG4gIH1cblxuICBib3VuZChwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IGNhbGNQb2ludCA9IHBvaW50LmNsb25lKClcbiAgICBjb25zdCByZWN0UDIgPSB0aGlzLnJlY3RhbmdsZS5nZXRQMygpXG5cbiAgICBpZiAodGhpcy5yZWN0YW5nbGUucG9zaXRpb24ueCA+IGNhbGNQb2ludC54KSB7XG4gICAgICAoY2FsY1BvaW50LnggPSB0aGlzLnJlY3RhbmdsZS5wb3NpdGlvbi54KVxuICAgIH1cbiAgICBpZiAodGhpcy5yZWN0YW5nbGUucG9zaXRpb24ueSA+IGNhbGNQb2ludC55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHRoaXMucmVjdGFuZ2xlLnBvc2l0aW9uLnlcbiAgICB9XG4gICAgaWYgKHJlY3RQMi54IDwgY2FsY1BvaW50LnggKyBzaXplLngpIHtcbiAgICAgIGNhbGNQb2ludC54ID0gcmVjdFAyLnggLSBzaXplLnhcbiAgICB9XG4gICAgaWYgKHJlY3RQMi55IDwgY2FsY1BvaW50LnkgKyBzaXplLnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gcmVjdFAyLnkgLSBzaXplLnlcbiAgICB9XG5cbiAgICByZXR1cm4gY2FsY1BvaW50XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9FbGVtZW50IGV4dGVuZHMgQm91bmRUb1JlY3RhbmdsZSB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbnRhaW5lcikge1xuICAgIHN1cGVyKFJlY3RhbmdsZS5mcm9tRWxlbWVudChlbGVtZW50LCBjb250YWluZXIpKVxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lclxuICB9XG5cbiAgcmVmcmVzaCAoKSB7XG4gICAgdGhpcy5yZWN0YW5nbGUgPSBSZWN0YW5nbGUuZnJvbUVsZW1lbnQodGhpcy5lbGVtZW50LCB0aGlzLmNvbnRhaW5lcilcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb0xpbmVYIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3Rvcih4LCBzdGFydFksIGVuZFkpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy54ID0geFxuICAgIHRoaXMuc3RhcnRZID0gc3RhcnRZXG4gICAgdGhpcy5lbmRZID0gZW5kWVxuICB9XG5cbiAgYm91bmQocG9pbnQsIHNpemUpIHtcbiAgICBjb25zdCBjYWxjUG9pbnQgPSBwb2ludC5jbG9uZSgpXG5cbiAgICBjYWxjUG9pbnQueCA9IHRoaXMueFxuICAgIGlmICh0aGlzLnN0YXJ0WSA+IGNhbGNQb2ludC55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHRoaXMuc3RhcnRZXG4gICAgfVxuICAgIGlmICh0aGlzLmVuZFkgPCBjYWxjUG9pbnQueSArIHNpemUueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSB0aGlzLmVuZFkgLSBzaXplLnlcbiAgICB9XG5cbiAgICByZXR1cm4gY2FsY1BvaW50XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9MaW5lWSBleHRlbmRzIEJvdW5kIHtcbiAgY29uc3RydWN0b3IoeSwgc3RhcnRYLCBlbmRYKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMueSA9IHlcbiAgICB0aGlzLnN0YXJ0WCA9IHN0YXJ0WFxuICAgIHRoaXMuZW5kWCA9IGVuZFhcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgY2FsY1BvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIGNhbGNQb2ludC55ID0gdGhpcy55XG4gICAgaWYgKHRoaXMuc3RhcnRYID4gY2FsY1BvaW50LngpIHtcbiAgICAgIGNhbGNQb2ludC54ID0gdGhpcy5zdGFydFhcbiAgICB9XG4gICAgaWYgKHRoaXMuZW5kWCA8IGNhbGNQb2ludC54ICsgc2l6ZS54KSB7XG4gICAgICBjYWxjUG9pbnQueCA9IHRoaXMuZW5kWCAtIHNpemUueFxuICAgIH1cbiAgICByZXR1cm4gY2FsY1BvaW50XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9MaW5lIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3RvcihzdGFydFBvaW50LCBlbmRQb2ludCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnN0YXJ0UG9pbnQgPSBzdGFydFBvaW50XG4gICAgdGhpcy5lbmRQb2ludCA9IGVuZFBvaW50XG4gICAgY29uc3QgYWxwaGEgPSBNYXRoLmF0YW4yKGVuZFBvaW50LnkgLSBzdGFydFBvaW50LnksIGVuZFBvaW50LnggLSBzdGFydFBvaW50LngpXG4gICAgY29uc3QgYmV0YSA9IGFscGhhICsgTWF0aC5QSSAvIDJcbiAgICB0aGlzLnNvbWVLID0gMTBcbiAgICB0aGlzLmNvc0JldGEgPSBNYXRoLmNvcyhiZXRhKVxuICAgIHRoaXMuc2luQmV0YSA9IE1hdGguc2luKGJldGEpXG4gIH1cblxuICBib3VuZChwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IHBvaW50MiA9IG5ldyBQb2ludChcbiAgICAgIHBvaW50LnggKyB0aGlzLnNvbWVLICogdGhpcy5jb3NCZXRhLFxuICAgICAgcG9pbnQueSArIHRoaXMuc29tZUsgKiB0aGlzLnNpbkJldGFcbiAgICApXG5cbiAgICBjb25zdCBuZXdFbmRQb2ludCA9IGdldFBvaW50T25MaW5lQnlMZW5naHQodGhpcy5lbmRQb2ludCwgdGhpcy5zdGFydFBvaW50LCBzaXplLngpXG4gICAgY29uc3QgcG9pbnRDcm9zc2luZyA9IGRpcmVjdENyb3NzaW5nKHRoaXMuc3RhcnRQb2ludCwgdGhpcy5lbmRQb2ludCwgcG9pbnQsIHBvaW50MilcblxuICAgIHJldHVybiBib3VuZFRvTGluZSh0aGlzLnN0YXJ0UG9pbnQsIG5ld0VuZFBvaW50LCBwb2ludENyb3NzaW5nKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvQ2lyY2xlIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3RvcihjZW50ZXIsIHJhZGl1cykge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLmNlbnRlciA9IGNlbnRlclxuICAgIHRoaXMucmFkaXVzID0gcmFkaXVzXG4gIH1cblxuICBib3VuZChwb2ludCwgX3NpemUpIHtcbiAgICByZXR1cm4gZ2V0UG9pbnRPbkxpbmVCeUxlbmdodCh0aGlzLmNlbnRlciwgcG9pbnQsIHRoaXMucmFkaXVzKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvQXJjIGV4dGVuZHMgQm91bmRUb0NpcmNsZSB7XG4gIGNvbnN0cnVjdG9yKGNlbnRlciwgcmFkaXVzLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSkge1xuICAgIHN1cGVyKGNlbnRlciwgcmFkaXVzKVxuICAgIHRoaXMuX3N0YXJ0QW5nbGUgPSBzdGFydEFuZ2xlXG4gICAgdGhpcy5fZW5kQW5nbGUgPSBlbmRBbmdsZVxuICB9XG5cbiAgc3RhcnRBbmdsZSgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMuX3N0YXJ0QW5nbGUgPT09ICdmdW5jdGlvbicgPyB0aGlzLl9zdGFydEFuZ2xlKCkgOiB0aGlzLl9zdGFydEFuZ2xlXG4gIH1cblxuICBlbmRBbmdsZSgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMuX2VuZEFuZ2xlID09PSAnZnVuY3Rpb24nID8gdGhpcy5fZW5kQW5nbGUoKSA6IHRoaXMuX2VuZEFuZ2xlXG4gIH1cblxuICBib3VuZChwb2ludCwgX3NpemUpIHtcbiAgICBsZXQgYW5nbGUgPSBnZXRBbmdsZSh0aGlzLmNlbnRlciwgcG9pbnQpXG4gICAgYW5nbGUgPSBub3JtYWxpemVBbmdsZShhbmdsZSlcbiAgICBhbmdsZSA9IGJvdW5kQW5nbGUodGhpcy5zdGFydEFuZ2xlKCksIHRoaXMuZW5kQW5nbGUoKSwgYW5nbGUpXG4gICAgcmV0dXJuIGdldFBvaW50RnJvbVJhZGlhbFN5c3RlbShhbmdsZSwgdGhpcy5yYWRpdXMsIHRoaXMuY2VudGVyKVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhcnJheSwgdmFsKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoYXJyYXlbaV0gPT09IHZhbCkge1xuICAgICAgYXJyYXkuc3BsaWNlKGksIDEpXG4gICAgICBpLS1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycmF5XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByYW5nZShzdGFydCwgc3RvcCwgc3RlcCkge1xuICBjb25zdCByZXN1bHQgPSBbXVxuICBpZiAodHlwZW9mIHN0b3AgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgc3RvcCA9IHN0YXJ0XG4gICAgc3RhcnQgPSAwXG4gIH1cbiAgaWYgKHR5cGVvZiBzdGVwID09PSAndW5kZWZpbmVkJykge1xuICAgIHN0ZXAgPSAxXG4gIH1cbiAgaWYgKChzdGVwID4gMCAmJiBzdGFydCA+PSBzdG9wKSB8fCAoc3RlcCA8IDAgJiYgc3RhcnQgPD0gc3RvcCkpIHtcbiAgICByZXR1cm4gW11cbiAgfVxuICBmb3IgKGxldCBpID0gc3RhcnQ7IHN0ZXAgPiAwID8gaSA8IHN0b3AgOiBpID4gc3RvcDsgaSArPSBzdGVwKSB7XG4gICAgcmVzdWx0LnB1c2goaSlcbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9nZW9tZXRyeS9wb2ludCdcbmltcG9ydCB7IGFkZFBvaW50VG9Cb3VuZFBvaW50cyB9IGZyb20gJy4vZ2VvbWV0cnkvYm91bmRzJ1xuXG5pbXBvcnQge1xuICBpbmRleE9mTmVhcmVzdFBvaW50LFxuICBnZXREaXN0YW5jZVxufSBmcm9tICcuL2dlb21ldHJ5L2Rpc3RhbmNlcydcblxuY2xhc3MgQmFzaWNTdHJhdGVneSB7XG4gIGNvbnN0cnVjdG9yKHJlY3RhbmdsZSwgb3B0aW9ucz17fSkge1xuICAgIHRoaXMucmVjdGFuZ2xlID0gcmVjdGFuZ2xlXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9uc1xuICB9XG5cbiAgZ2V0IGJvdW5kUmVjdCAoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGlzLnJlY3RhbmdsZSA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMucmVjdGFuZ2xlKCkgOiB0aGlzLnJlY3RhbmdsZVxuICB9XG59XG5cbmNsYXNzIE5vdENyb3NzaW5nU3RyYXRlZ3kgZXh0ZW5kcyBCYXNpY1N0cmF0ZWd5IHtcbiAgcG9zaXRpb25pbmcgKHJlY3RhbmdsZUxpc3QsIGluZGV4ZXNPZk5ld3MpIHtcbiAgICBjb25zdCBzdGF0aWNSZWN0YW5nbGVJbmRleGVzID0gcmVjdGFuZ2xlTGlzdC5yZWR1Y2UoKGluZGV4ZXMsIF9yZWN0LCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGluZGV4ZXNPZk5ld3MuaW5kZXhPZihpbmRleCkgPT09IC0xKSB7XG4gICAgICAgIGluZGV4ZXMucHVzaChpbmRleClcbiAgICAgIH1cbiAgICAgIHJldHVybiBpbmRleGVzXG4gICAgfSwgW10pXG5cbiAgICBpbmRleGVzT2ZOZXdzLmZvckVhY2goKGluZGV4KSA9PiB7XG4gICAgICBsZXQgcmVjdCA9IHJlY3RhbmdsZUxpc3RbaW5kZXhdXG4gICAgICBsZXQgcmVtb3ZhYmxlID0gZmFsc2VcblxuICAgICAgc3RhdGljUmVjdGFuZ2xlSW5kZXhlcy5mb3JFYWNoKChpbmRleE9mU3RhdGljKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YXRpY1JlY3QgPSByZWN0YW5nbGVMaXN0W2luZGV4T2ZTdGF0aWNdXG4gICAgICAgIHJlY3QgPSBzdGF0aWNSZWN0Lm1vdmVUb0JvdW5kKHJlY3QpXG4gICAgICB9KVxuXG4gICAgICByZW1vdmFibGUgPSBzdGF0aWNSZWN0YW5nbGVJbmRleGVzLnNvbWUoKGluZGV4T2ZTdGF0aWMpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhdGljUmVjdCA9IHJlY3RhbmdsZUxpc3RbaW5kZXhPZlN0YXRpY11cbiAgICAgICAgcmV0dXJuICAhIXN0YXRpY1JlY3QuYW5kKHJlY3QpXG4gICAgICB9KSB8fCByZWN0LmFuZCh0aGlzLmJvdW5kUmVjdCkuZ2V0U3F1YXJlKCkgIT09IHJlY3QuZ2V0U3F1YXJlKClcblxuICAgICAgaWYgKHJlbW92YWJsZSkge1xuICAgICAgICByZWN0LnJlbW92YWJsZSA9IHRydWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMucHVzaChpbmRleClcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiByZWN0YW5nbGVMaXN0XG4gIH1cblxuICBzb3J0aW5nKG9kbERyYWdnYWJsZXNMaXN0LCBuZXdEcmFnZ2FibGVzLCBpbmRleE9mTmV3cykge1xuICAgIGNvbnN0IGRyYWdnYWJsZXMgPSBvZGxEcmFnZ2FibGVzTGlzdC5jb25jYXQobmV3RHJhZ2dhYmxlcylcbiAgICBuZXdEcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgaW5kZXhPZk5ld3MucHVzaChkcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSlcbiAgICB9KVxuICAgIHJldHVybiBkcmFnZ2FibGVzXG4gIH1cbn1cblxuY2xhc3MgRmxvYXRMZWZ0U3RyYXRlZ3kgZXh0ZW5kcyBCYXNpY1N0cmF0ZWd5IHtcbiAgY29uc3RydWN0b3IocmVjdGFuZ2xlLCBvcHRpb25zPXt9KSB7XG4gICAgc3VwZXIocmVjdGFuZ2xlLCBvcHRpb25zKVxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgcmVtb3ZhYmxlOiB0cnVlXG4gICAgfSwgb3B0aW9ucylcblxuICAgIHRoaXMucmFkaXVzID0gb3B0aW9ucy5yYWRpdXMgfHwgODBcblxuICAgIHRoaXMucGFkZGluZ1RvcExlZnQgPSBvcHRpb25zLnBhZGRpbmdUb3BMZWZ0IHx8IG5ldyBQb2ludCgwLCAwKVxuICAgIHRoaXMucGFkZGluZ0JvdHRvbVJpZ2h0ID0gb3B0aW9ucy5wYWRkaW5nQm90dG9tUmlnaHQgfHwgbmV3IFBvaW50KDAsIDApXG4gICAgdGhpcy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgPSBvcHRpb25zLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyB8fCAwXG5cbiAgICB0aGlzLmdldERpc3RhbmNlID0gb3B0aW9ucy5nZXREaXN0YW5jZSB8fCBnZXREaXN0YW5jZVxuICAgIHRoaXMuZ2V0UG9zaXRpb24gPSBvcHRpb25zLmdldFBvc2l0aW9uIHx8ICgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucG9zaXRpb24pXG4gIH1cblxuICBwb3NpdGlvbmluZyhyZWN0YW5nbGVMaXN0LCBfaW5kZXhlc09mTmV3cykge1xuICAgIGNvbnN0IGJvdW5kUmVjdCA9IHRoaXMuYm91bmRSZWN0XG4gICAgY29uc3QgcmVjdFAyID0gYm91bmRSZWN0LmdldFAyKClcbiAgICBsZXQgYm91bmRhcnlQb2ludHMgPSBbYm91bmRSZWN0LnBvc2l0aW9uXVxuXG4gICAgcmVjdGFuZ2xlTGlzdC5mb3JFYWNoKChyZWN0LCByZWN0SW5kZXgpID0+IHtcbiAgICAgIGxldCBwb3NpdGlvbiwgaXNWYWxpZCA9IGZhbHNlXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvdW5kYXJ5UG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHBvc2l0aW9uID0gbmV3IFBvaW50KFxuICAgICAgICAgIGJvdW5kYXJ5UG9pbnRzW2ldLnggKyB0aGlzLnBhZGRpbmdUb3BMZWZ0LngsXG4gICAgICAgICAgaSA+IDAgPyAoYm91bmRhcnlQb2ludHNbaSAtIDFdLnkgKyB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcykgOiAoYm91bmRSZWN0LnBvc2l0aW9uLnkgKyB0aGlzLnBhZGRpbmdUb3BMZWZ0LnkpXG4gICAgICAgIClcblxuICAgICAgICBpc1ZhbGlkID0gKHBvc2l0aW9uLnggKyByZWN0LnNpemUueCA8IHJlY3RQMi54KVxuXG4gICAgICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgcG9zaXRpb24gPSBuZXcgUG9pbnQoXG4gICAgICAgICAgYm91bmRSZWN0LnBvc2l0aW9uLnggKyB0aGlzLnBhZGRpbmdUb3BMZWZ0LngsXG4gICAgICAgICAgYm91bmRhcnlQb2ludHNbYm91bmRhcnlQb2ludHMubGVuZ3RoIC0gMV0ueSArIChyZWN0SW5kZXggPiAwID8gdGhpcy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgOiB0aGlzLnBhZGRpbmdUb3BMZWZ0LnkpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgcmVjdC5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnJlbW92YWJsZSAmJiByZWN0LmdldFAzKCkueSA+IGJvdW5kUmVjdC5nZXRQMygpLnkpIHtcbiAgICAgICAgcmVjdC5yZW1vdmFibGUgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGJvdW5kYXJ5UG9pbnRzID0gYWRkUG9pbnRUb0JvdW5kUG9pbnRzKGJvdW5kYXJ5UG9pbnRzLCByZWN0LmdldFAzKCkuYWRkKHRoaXMucGFkZGluZ0JvdHRvbVJpZ2h0KSlcbiAgICB9KVxuICAgIHJldHVybiByZWN0YW5nbGVMaXN0XG4gIH1cblxuICBzb3J0aW5nKG9kbERyYWdnYWJsZXNMaXN0LCBuZXdEcmFnZ2FibGVzLCBpbmRleE9mTmV3cykge1xuICAgIGNvbnN0IG5ld0xpc3QgPSBvZGxEcmFnZ2FibGVzTGlzdC5jb25jYXQoKVxuICAgIGNvbnN0IGxpc3RPbGRQb3NpdGlvbiA9IG9kbERyYWdnYWJsZXNMaXN0Lm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUuZ2V0UG9zaXRpb24oKSlcbiAgICBuZXdEcmFnZ2FibGVzLmZvckVhY2goKG5ld0RyYWdnYWJsZSkgPT4ge1xuICAgICAgbGV0IGluZGV4ID0gaW5kZXhPZk5lYXJlc3RQb2ludChsaXN0T2xkUG9zaXRpb24sIHRoaXMuZ2V0UG9zaXRpb24obmV3RHJhZ2dhYmxlKSwgdGhpcy5yYWRpdXMsIHRoaXMuZ2V0RGlzdGFuY2UpXG4gICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgIGluZGV4ID0gbmV3TGlzdC5sZW5ndGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluZGV4ID0gbmV3TGlzdC5pbmRleE9mKG9kbERyYWdnYWJsZXNMaXN0W2luZGV4XSlcbiAgICAgIH1cbiAgICAgIG5ld0xpc3Quc3BsaWNlKGluZGV4LCAwLCBuZXdEcmFnZ2FibGUpXG4gICAgfSlcbiAgICBuZXdEcmFnZ2FibGVzLmZvckVhY2goKG5ld0RyYWdnYWJsZSkgPT4ge1xuICAgICAgaW5kZXhPZk5ld3MucHVzaChuZXdMaXN0LmluZGV4T2YobmV3RHJhZ2dhYmxlKSlcbiAgICB9KVxuICAgIHJldHVybiBuZXdMaXN0XG4gIH1cbn1cblxuY2xhc3MgRmxvYXRSaWdodFN0cmF0ZWd5IGV4dGVuZHMgRmxvYXRMZWZ0U3RyYXRlZ3kge1xuICBjb25zdHJ1Y3RvcihyZWN0YW5nbGUsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcihyZWN0YW5nbGUsIG9wdGlvbnMpXG5cbiAgICB0aGlzLnBhZGRpbmdUb3BSaWdodCA9IG9wdGlvbnMucGFkZGluZ1RvcFJpZ2h0IHx8IG5ldyBQb2ludCg1LCA1KVxuICAgIHRoaXMucGFkZGluZ0JvdHRvbUxlZnQgPSBvcHRpb25zLnBhZGRpbmdCb3R0b21MZWZ0IHx8IG5ldyBQb2ludCgwLCAwKVxuICAgIHRoaXMueUdhcEJldHdlZW5EcmFnZ2FibGVzID0gb3B0aW9ucy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgfHwgMFxuXG4gICAgdGhpcy5wYWRkaW5nQm90dG9tTmVnTGVmdCA9IG5ldyBQb2ludCgtdGhpcy5wYWRkaW5nQm90dG9tTGVmdC54LCB0aGlzLnBhZGRpbmdCb3R0b21MZWZ0LnkpXG4gIH1cblxuICBwb3NpdGlvbmluZyhyZWN0YW5nbGVMaXN0LCBfaW5kZXhlc09mTmV3cykge1xuICAgIGNvbnN0IGJvdW5kUmVjdCA9IHRoaXMuYm91bmRSZWN0XG4gICAgbGV0IGJvdW5kYXJ5UG9pbnRzID0gW2JvdW5kUmVjdC5nZXRQMigpXVxuXG4gICAgcmVjdGFuZ2xlTGlzdC5mb3JFYWNoKChyZWN0LCByZWN0SW5kZXgpID0+IHtcbiAgICAgIGxldCBwb3NpdGlvbiwgaXNWYWxpZCA9IGZhbHNlXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvdW5kYXJ5UG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHBvc2l0aW9uID0gbmV3IFBvaW50KFxuICAgICAgICAgIGJvdW5kYXJ5UG9pbnRzW2ldLnggLSByZWN0LnNpemUueCAtIHRoaXMucGFkZGluZ1RvcFJpZ2h0LngsXG4gICAgICAgICAgaSA+IDAgPyAoYm91bmRhcnlQb2ludHNbaSAtIDFdLnkgKyB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcykgOiAoYm91bmRSZWN0LnBvc2l0aW9uLnkgKyB0aGlzLnBhZGRpbmdUb3BSaWdodC55KVxuICAgICAgICApXG5cbiAgICAgICAgaXNWYWxpZCA9IChwb3NpdGlvbi54ID4gcmVjdC5wb3NpdGlvbi54KVxuICAgICAgICBpZiAoaXNWYWxpZCkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICBwb3NpdGlvbiA9IG5ldyBQb2ludChcbiAgICAgICAgICBib3VuZFJlY3QuZ2V0UDIoKS54ICAtIHJlY3Quc2l6ZS54IC0gdGhpcy5wYWRkaW5nVG9wUmlnaHQueCxcbiAgICAgICAgICBib3VuZGFyeVBvaW50c1tib3VuZGFyeVBvaW50cy5sZW5ndGggLSAxXS55ICsgKHJlY3RJbmRleCA+IDAgPyB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyA6IHRoaXMucGFkZGluZ1RvcFJpZ2h0LnkpXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIHJlY3QucG9zaXRpb24gPSBwb3NpdGlvblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZW1vdmFibGUgJiYgcmVjdC5nZXRQNCgpLnkgPiBib3VuZFJlY3QuZ2V0UDQoKS55KSB7XG4gICAgICAgIHJlY3QucmVtb3ZhYmxlID0gdHJ1ZVxuICAgICAgfVxuICAgICAgYm91bmRhcnlQb2ludHMgPSBhZGRQb2ludFRvQm91bmRQb2ludHMoYm91bmRhcnlQb2ludHMsIHJlY3QuZ2V0UDQoKS5hZGQodGhpcy5wYWRkaW5nQm90dG9tTmVnTGVmdCksIHRydWUpXG4gICAgfSlcbiAgICByZXR1cm4gcmVjdGFuZ2xlTGlzdFxuICB9XG59XG5cbmV4cG9ydCB7IE5vdENyb3NzaW5nU3RyYXRlZ3ksIEZsb2F0TGVmdFN0cmF0ZWd5LCBGbG9hdFJpZ2h0U3RyYXRlZ3kgfVxuIiwiaW1wb3J0IHJhbmdlIGZyb20gJy4vdXRpbHMvcmFuZ2UuanMnXG5pbXBvcnQgcmVtb3ZlSXRlbSBmcm9tICcuL3V0aWxzL3JlbW92ZS1hcnJheS1pdGVtJ1xuaW1wb3J0IGdldERlZmF1bHRDb250YWluZXIgZnJvbSAnLi91dGlscy9nZXQtZGVmYXVsdC1jb250YWluZXInXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnRFbWl0dGVyJ1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tICcuL2dlb21ldHJ5L3JlY3RhbmdsZSdcbmltcG9ydCB7IHRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3RvcnkgfSBmcm9tICcuL2dlb21ldHJ5L2Rpc3RhbmNlcydcbmltcG9ydCB7IHNjb3BlcywgZGVmYXVsdFNjb3BlIH0gZnJvbSAnLi9zY29wZSdcblxuaW1wb3J0IHsgRmxvYXRMZWZ0U3RyYXRlZ3kgfSBmcm9tICcuL3Bvc2l0aW9uaW5nJ1xuaW1wb3J0IHsgQm91bmRUb0VsZW1lbnQgfSBmcm9tICcuL2JvdW5kaW5nJ1xuXG5jb25zdCBhZGRUb0RlZmF1bHRTY29wZSA9IGZ1bmN0aW9uKHRhcmdldCkge1xuICBkZWZhdWx0U2NvcGUuYWRkVGFyZ2V0KHRhcmdldClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFyZ2V0IGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgZHJhZ2dhYmxlcywgb3B0aW9ucyA9IHt9KSB7XG4gICAgc3VwZXIob3B0aW9ucylcbiAgICBjb25zdCB0YXJnZXQgPSB0aGlzXG5cbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHRpbWVFbmQ6IDIwMCxcbiAgICAgIHRpbWVFeGNhbmdlOiA0MDBcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGhpcy5wb3NpdGlvbmluZ1N0cmF0ZWd5ID0gb3B0aW9ucy5zdHJhdGVneSB8fCBuZXcgRmxvYXRMZWZ0U3RyYXRlZ3koXG4gICAgICB0aGlzLmdldFJlY3RhbmdsZS5iaW5kKHRoaXMpLFxuICAgICAge1xuICAgICAgICByYWRpdXM6IDgwLFxuICAgICAgICBnZXREaXN0YW5jZTogdHJhbnNmb3JtZWRTcGFjZURpc3RhbmNlRmFjdG9yeSh7IHg6IDEsIHk6IDQgfSksXG4gICAgICAgIHJlbW92YWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIClcblxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgICBkcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnRhcmdldHMucHVzaCh0YXJnZXQpKVxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZXNcblxuICAgIFRhcmdldC5lbWl0dGVyLmVtaXQoJ3RhcmdldDpjcmVhdGUnLCB0aGlzKVxuXG4gICAgdGhpcy5zdGFydEJvdW5kaW5nKClcbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgc3RhcnRCb3VuZGluZygpIHtcbiAgICB0aGlzLmJvdW5kID0gdGhpcy5vcHRpb25zLmJvdW5kIHx8IEJvdW5kVG9FbGVtZW50LmJvdW5kaW5nKHRoaXMuZWxlbWVudClcbiAgfVxuXG4gIHBvc2l0aW9uaW5nIChkcmFnZ2FibGVzLCBpbmRleGVzT2ZOZXcpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbmluZ1N0cmF0ZWd5LnBvc2l0aW9uaW5nKGRyYWdnYWJsZXMsIGluZGV4ZXNPZk5ldylcbiAgfVxuXG4gIHNvcnRpbmcgKG9sZERyYWdnYWJsZXMsIG5ld0RyYWdnYWJsZXMsIGluZGV4T2ZOZXdzKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25pbmdTdHJhdGVneS5zb3J0aW5nKG9sZERyYWdnYWJsZXMsIG5ld0RyYWdnYWJsZXMsIGluZGV4T2ZOZXdzKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBsZXQgcmVjdGFuZ2xlcywgaW5kZXhlc09mTmV3XG5cbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcyA9IHRoaXMuZHJhZ2dhYmxlcy5maWx0ZXIoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgbGV0IGVsZW1lbnQgPSBkcmFnZ2FibGUuZWxlbWVudC5wYXJlbnROb2RlXG4gICAgICB3aGlsZSAoZWxlbWVudCkge1xuICAgICAgICBpZiAoZWxlbWVudCA9PT0gdGhpcy5lbGVtZW50KSB7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlXG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9KVxuXG4gICAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmxlbmd0aCkge1xuICAgICAgaW5kZXhlc09mTmV3ID0gcmFuZ2UodGhpcy5pbm5lckRyYWdnYWJsZXMubGVuZ3RoKVxuICAgICAgcmVjdGFuZ2xlcyA9IHRoaXMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgICAgfSksIGluZGV4ZXNPZk5ldylcbiAgICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgaW5kZXhlc09mTmV3KVxuICAgICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB0aGlzLmVtaXQoJ3RhcmdldDphZGQnLCBkcmFnZ2FibGUpKVxuICAgIH1cbiAgfVxuXG4gIGdldFJlY3RhbmdsZSgpIHtcbiAgICByZXR1cm4gUmVjdGFuZ2xlLmZyb21FbGVtZW50KHRoaXMuZWxlbWVudCwgdGhpcy5jb250YWluZXIsIHRydWUpXG4gIH1cblxuICBjYXRjaERyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmNhdGNoRHJhZ2dhYmxlKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmNhdGNoRHJhZ2dhYmxlKHRoaXMsIGRyYWdnYWJsZSlcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGFyZ2V0UmVjdGFuZ2xlID0gdGhpcy5nZXRSZWN0YW5nbGUoKVxuICAgICAgY29uc3QgZHJhZ2dhYmxlU3F1YXJlID0gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpLmdldFNxdWFyZSgpXG5cbiAgICAgIHJldHVybiBkcmFnZ2FibGVTcXVhcmUgPCB0YXJnZXRSZWN0YW5nbGUuZ2V0U3F1YXJlKClcbiAgICAgICAgICAgICAgJiYgdGFyZ2V0UmVjdGFuZ2xlLmluY2x1ZGVQb2ludChkcmFnZ2FibGUuZ2V0Q2VudGVyKCkpXG4gICAgfVxuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UmVjdGFuZ2xlKCkucG9zaXRpb25cbiAgfVxuXG4gIGdldFNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UmVjdGFuZ2xlKCkuc2l6ZVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICBzY29wZXMuZm9yRWFjaCgoc2NvcGUpID0+IHJlbW92ZUl0ZW0oc2NvcGUudGFyZ2V0cywgdGhpcykpXG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgfSksIFtdKVxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgW10sIDApXG4gIH1cblxuICBvbkVuZChkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBuZXdEcmFnZ2FibGVzSW5kZXggPSBbXVxuXG4gICAgaWYgKHRoaXMuZ2V0UmVjdGFuZ2xlKCkuaW5jbHVkZVBvaW50KGRyYWdnYWJsZS5nZXRDZW50ZXIoKSkpIHtcbiAgICAgIGRyYWdnYWJsZS5wb3NpdGlvbiA9IHRoaXMuYm91bmQoZHJhZ2dhYmxlLnBvc2l0aW9uLCBkcmFnZ2FibGUuZ2V0U2l6ZSgpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICB0aGlzLmVtaXQoJ3RhcmdldDpiZWZvcmVBZGQnLCBkcmFnZ2FibGUpXG5cbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcyA9IHRoaXMuc29ydGluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcywgW2RyYWdnYWJsZV0sIG5ld0RyYWdnYWJsZXNJbmRleClcbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBuZXdEcmFnZ2FibGVzSW5kZXgpXG5cbiAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIG5ld0RyYWdnYWJsZXNJbmRleClcbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMSkge1xuICAgICAgdGhpcy5hZGRSZW1vdmVPbk1vdmUoZHJhZ2dhYmxlKVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgaW5kZXhlc09mTmV3LCB0aW1lKSB7XG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuc2xpY2UoMCkuZm9yRWFjaCgoZHJhZ2dhYmxlLCBpKSA9PiB7XG4gICAgICBjb25zdCByZWN0ID0gcmVjdGFuZ2xlc1tpXSxcbiAgICAgICAgdGltZUVuZCA9IHRpbWUgfHwgdGltZSA9PT0gMCA/IHRpbWUgOiBpbmRleGVzT2ZOZXcuaW5kZXhPZihpKSAhPT0gLTEgPyB0aGlzLm9wdGlvbnMudGltZUVuZCA6IHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZVxuXG4gICAgICBpZiAocmVjdC5yZW1vdmFibGUpIHtcbiAgICAgICAgZHJhZ2dhYmxlLm1vdmUoZHJhZ2dhYmxlLmluaXRpYWxQb3NpdGlvbiwgdGltZUVuZCwgdHJ1ZSwgdHJ1ZSlcbiAgICAgICAgcmVtb3ZlSXRlbSh0aGlzLmlubmVyRHJhZ2dhYmxlcywgZHJhZ2dhYmxlKVxuICAgICAgICB0aGlzLmVtaXQoJ3RhcmdldDpyZW1vdmUnLCBkcmFnZ2FibGUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkcmFnZ2FibGUubW92ZShyZWN0LnBvc2l0aW9uLCB0aW1lRW5kLCB0cnVlLCB0cnVlKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBhZGQoZHJhZ2dhYmxlLCB0aW1lKSB7XG4gICAgY29uc3QgbmV3RHJhZ2dhYmxlc0luZGV4ID0gdGhpcy5pbm5lckRyYWdnYWJsZXMubGVuZ3RoXG5cbiAgICB0aGlzLmVtaXQoJ3RhcmdldDpiZWZvcmVBZGQnLCBkcmFnZ2FibGUpXG5cbiAgICB0aGlzLnB1c2hJbm5lckRyYWdnYWJsZShkcmFnZ2FibGUpXG4gICAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgbmV3RHJhZ2dhYmxlc0luZGV4LCBkcmFnZ2FibGUpXG5cbiAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIFtuZXdEcmFnZ2FibGVzSW5kZXhdLCB0aW1lIHx8IDApXG4gICAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTEpIHtcbiAgICAgIHRoaXMuYWRkUmVtb3ZlT25Nb3ZlKGRyYWdnYWJsZSlcbiAgICB9XG4gIH1cblxuICBwdXNoSW5uZXJEcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKT09PS0xKSB7XG4gICAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5wdXNoKGRyYWdnYWJsZSlcbiAgICB9XG4gIH1cblxuICBhZGRSZW1vdmVPbk1vdmUoZHJhZ2dhYmxlKSB7XG4gICAgZHJhZ2dhYmxlLm9uKCdkcmFnOm1vdmUnLCB0aGlzLnJlbW92ZUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICB0aGlzLnJlbW92ZShkcmFnZ2FibGUpXG4gICAgfSlcblxuICAgIHRoaXMuZW1pdCgndGFyZ2V0OmFkZCcsIGRyYWdnYWJsZSlcbiAgfVxuXG4gIHJlbW92ZShkcmFnZ2FibGUpIHtcbiAgICBkcmFnZ2FibGUudW5zdWJzY3JpYmUoJ2RyYWc6bW92ZScsIHRoaXMucmVtb3ZlSGFuZGxlcilcblxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpXG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuc3BsaWNlKGluZGV4LCAxKVxuXG4gICAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgW10pXG5cbiAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIFtdKVxuICAgIHRoaXMuZW1pdCgndGFyZ2V0OnJlbW92ZScsIGRyYWdnYWJsZSlcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLm1vdmUoZHJhZ2dhYmxlLmluaXRpYWxQb3NpdGlvbiwgMCwgdHJ1ZSwgdHJ1ZSlcbiAgICAgIHRoaXMuZW1pdCgndGFyZ2V0OnJlbW92ZScsIGRyYWdnYWJsZSlcbiAgICB9KVxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzID0gW11cbiAgfVxuXG4gIGdldFNvcnRlZERyYWdnYWJsZXMoKSB7XG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuc2xpY2UoKVxuICB9XG5cbiAgZ2V0IGNvbnRhaW5lcigpIHtcbiAgICByZXR1cm4gKHRoaXMuX2NvbnRhaW5lciA9IHRoaXMuX2NvbnRhaW5lciB8fCB0aGlzLm9wdGlvbnMuY29udGFpbmVyIHx8IHRoaXMub3B0aW9ucy5wYXJlbnQgfHwgZ2V0RGVmYXVsdENvbnRhaW5lcih0aGlzLmVsZW1lbnQpKVxuICB9XG59XG5cblRhcmdldC5lbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcigpXG5UYXJnZXQuZW1pdHRlci5vbigndGFyZ2V0OmNyZWF0ZScsIGFkZFRvRGVmYXVsdFNjb3BlKVxuIiwiaW1wb3J0IHJlbW92ZUl0ZW0gZnJvbSAnLi91dGlscy9yZW1vdmUtYXJyYXktaXRlbSdcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudEVtaXR0ZXInXG5pbXBvcnQgRHJhZ2dhYmxlIGZyb20gJy4vZHJhZ2dhYmxlJ1xuaW1wb3J0IFRhcmdldCBmcm9tICcuL3RhcmdldCdcblxuY29uc3Qgc2NvcGVzID0gW11cblxuY2xhc3MgU2NvcGUgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvcihkcmFnZ2FibGVzLCB0YXJnZXRzLCBvcHRpb25zPXt9KSB7XG4gICAgc3VwZXIob3B0aW9ucylcbiAgICBzY29wZXMuZm9yRWFjaCgoc2NvcGUpID0+IHtcbiAgICAgIGlmIChkcmFnZ2FibGVzKSB7XG4gICAgICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICAgICAgcmVtb3ZlSXRlbShzY29wZS5kcmFnZ2FibGVzLCBkcmFnZ2FibGUpXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIGlmICh0YXJnZXRzKSB7XG4gICAgICAgIHRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB7XG4gICAgICAgICAgcmVtb3ZlSXRlbShzY29wZS50YXJnZXRzLCB0YXJnZXQpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZXMgfHwgW11cbiAgICB0aGlzLnRhcmdldHMgPSB0YXJnZXRzIHx8IFtdXG4gICAgc2NvcGVzLnB1c2godGhpcylcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICB0aW1lRW5kOiAob3B0aW9ucy50aW1lRW5kKSB8fCA0MDBcbiAgICB9XG5cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUuZHJhZ0VuZEFjdGlvbiA9ICgpID0+IHRoaXMub25FbmQoZHJhZ2dhYmxlKVxuICAgIH0pXG4gIH1cblxuICBhZGREcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxuICAgIGRyYWdnYWJsZS5kcmFnRW5kQWN0aW9uID0gKCkgPT4gdGhpcy5vbkVuZChkcmFnZ2FibGUpXG4gIH1cblxuICBhZGRUYXJnZXQodGFyZ2V0KSB7XG4gICAgdGhpcy50YXJnZXRzLnB1c2godGFyZ2V0KVxuICB9XG5cbiAgb25FbmQoZHJhZ2dhYmxlKSB7XG4gICAgY29uc3Qgc2hvdFRhcmdldHMgPSB0aGlzLnRhcmdldHMuZmlsdGVyKCh0YXJnZXQpID0+IHtcbiAgICAgIHJldHVybiB0YXJnZXQuZHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkgIT09IC0xXG4gICAgfSkuZmlsdGVyKCh0YXJnZXQpID0+IHtcbiAgICAgIHJldHVybiB0YXJnZXQuY2F0Y2hEcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICAgIH0pLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIHJldHVybiBhLmdldFJlY3RhbmdsZSgpLmdldFNxdWFyZSgpIC0gYi5nZXRSZWN0YW5nbGUoKS5nZXRTcXVhcmUoKVxuICAgIH0pXG5cbiAgICBpZiAoc2hvdFRhcmdldHMubGVuZ3RoKSB7XG4gICAgICBzaG90VGFyZ2V0c1swXS5vbkVuZChkcmFnZ2FibGUpXG4gICAgfSBlbHNlIGlmIChkcmFnZ2FibGUudGFyZ2V0cy5sZW5ndGgpIHtcbiAgICAgIGRyYWdnYWJsZS5waW5Qb3NpdGlvbihkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uLCB0aGlzLm9wdGlvbnMudGltZUVuZClcbiAgICB9XG5cbiAgICB0aGlzLmVtaXQoJ3Njb3BlOmNoYW5nZScpXG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLnRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB0YXJnZXQucmVzZXQoKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnJlZnJlc2goKSlcbiAgICB0aGlzLnRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB0YXJnZXQucmVmcmVzaCgpKVxuICB9XG5cbiAgZ2V0IHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXRzLm1hcCgodGFyZ2V0KSA9PiB7XG4gICAgICByZXR1cm4gdGFyZ2V0LmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4gdGhpcy5kcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSlcbiAgICB9KVxuICB9XG5cbiAgc2V0IHBvc2l0aW9ucyhwb3NpdGlvbnMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gJ3dyb25nIGFycmF5IGxlbmd0aCdcbiAgICBpZiAocG9zaXRpb25zLmxlbmd0aCA9PT0gdGhpcy50YXJnZXRzLmxlbmd0aCkge1xuICAgICAgdGhpcy50YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4gdGFyZ2V0LnJlc2V0KCkpXG5cbiAgICAgIHBvc2l0aW9ucy5mb3JFYWNoKCh0YXJnZXRJbmRleGVzLCBpKSA9PiB7XG4gICAgICAgIHRhcmdldEluZGV4ZXMuZm9yRWFjaCgoaW5kZXgpID0+IHtcbiAgICAgICAgICB0aGlzLnRhcmdldHNbaV0uYWRkKHRoaXMuZHJhZ2dhYmxlc1tpbmRleF0pXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBtZXNzYWdlXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IGRlZmF1bHRTY29wZSA9IG5ldyBTY29wZSgpXG5cbmZ1bmN0aW9uIHNjb3BlKGZuKSB7XG4gIGNvbnN0IGN1cnJlbnRTY29wZSA9IG5ldyBTY29wZSgpXG5cbiAgY29uc3QgYWRkRHJhZ2dhYmxlVG9TY29wZSA9IGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICAgIGN1cnJlbnRTY29wZS5hZGREcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICAgIERyYWdnYWJsZS5lbWl0dGVyLmludGVycnVwdCgpXG4gIH1cblxuICBjb25zdCBhZGRUYXJnZXRUb1Njb3BlID0gZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgY3VycmVudFNjb3BlLmFkZFRhcmdldCh0YXJnZXQpXG4gICAgRHJhZ2dhYmxlLmVtaXR0ZXIuaW50ZXJydXB0KClcbiAgfVxuXG4gIERyYWdnYWJsZS5lbWl0dGVyLnByZXBlbmRPbignZHJhZ2dhYmxlOmNyZWF0ZScsIGFkZERyYWdnYWJsZVRvU2NvcGUpXG4gIFRhcmdldC5lbWl0dGVyLnByZXBlbmRPbigndGFyZ2V0OmNyZWF0ZScsIGFkZFRhcmdldFRvU2NvcGUpXG4gIGZuLmNhbGwoKVxuICBEcmFnZ2FibGUuZW1pdHRlci51bnN1YnNjcmliZSgnZHJhZ2dhYmxlOmNyZWF0ZScsIGFkZERyYWdnYWJsZVRvU2NvcGUpXG4gIFRhcmdldC5lbWl0dGVyLnVuc3Vic2NyaWJlKCd0YXJnZXQ6Y3JlYXRlJywgYWRkVGFyZ2V0VG9TY29wZSlcbiAgcmV0dXJuIGN1cnJlbnRTY29wZVxufVxuXG5leHBvcnQgeyBzY29wZXMsIGRlZmF1bHRTY29wZSwgU2NvcGUsIHNjb3BlIH1cbiIsImZ1bmN0aW9uIGNoZWNrU3VwcG9ydFBhc3NpdmVFdmVudHMoKSB7XG4gIGxldCBwYXNzaXZlU3VwcG9ydGVkID0gZmFsc2VcblxuICB0cnkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdwYXNzaXZlJywge1xuICAgICAgZ2V0KCkge1xuICAgICAgICByZXR1cm4gKHBhc3NpdmVTdXBwb3J0ZWQgPSB0cnVlKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndGVzdCcsIG9wdGlvbnMsIG9wdGlvbnMpXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Rlc3QnLCBvcHRpb25zLCBvcHRpb25zKVxuICB9IGNhdGNoIChfZXJyKSB7XG4gICAgcGFzc2l2ZVN1cHBvcnRlZCA9IGZhbHNlXG4gIH1cblxuICByZXR1cm4gcGFzc2l2ZVN1cHBvcnRlZFxufVxuXG5leHBvcnQgY29uc3QgaXNTdXBwb3J0UGFzc2l2ZUV2ZW50cyA9IGNoZWNrU3VwcG9ydFBhc3NpdmVFdmVudHMoKVxuXG5mdW5jdGlvbiBldmVudE9wdGlvbnMob3B0aW9ucywgZmFsbGJhY2sgPSBmYWxzZSkge1xuICByZXR1cm4gaXNTdXBwb3J0UGFzc2l2ZUV2ZW50cyA/IG9wdGlvbnMgOiBmYWxsYmFja1xufVxuXG5leHBvcnQgeyBldmVudE9wdGlvbnMgfVxuXG5leHBvcnQgZGVmYXVsdCBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0aHJvdHRsZShmdW5jLCB3YWl0KSB7XG4gIGxldCBsYXN0VGltZSA9IDBcblxuICByZXR1cm4gZnVuY3Rpb24gZXhlY3V0ZWRGdW5jdGlvbigpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpc1xuICAgIGNvbnN0IGFyZ3MgPSBhcmd1bWVudHNcblxuICAgIGNvbnN0IG5vdyA9IERhdGUubm93KClcbiAgICBpZiAobm93IC0gbGFzdFRpbWUgPj0gd2FpdCkge1xuICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKVxuICAgICAgbGFzdFRpbWUgPSBub3dcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBnZXREZWZhdWx0Q29udGFpbmVyIGZyb20gJy4vdXRpbHMvZ2V0LWRlZmF1bHQtY29udGFpbmVyJ1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50RW1pdHRlcidcbmltcG9ydCBnZXRTdHlsZVByb3BlcnR5IGZyb20gJ2Rlc2FuZHJvLWdldC1zdHlsZS1wcm9wZXJ0eSdcbmltcG9ydCB7IEJvdW5kVG9FbGVtZW50IH0gZnJvbSAnLi9ib3VuZGluZydcbmltcG9ydCBQb2ludCBmcm9tICcuL2dlb21ldHJ5L3BvaW50J1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tICcuL2dlb21ldHJ5L3JlY3RhbmdsZSdcbmltcG9ydCB7IGRlZmF1bHRTY29wZSB9IGZyb20gJy4vc2NvcGUnXG5pbXBvcnQgaXNTdXBwb3J0UGFzc2l2ZUV2ZW50cyBmcm9tICcuL3V0aWxzL2lzLXN1cHBvcnQtcGFzc2l2ZS1ldmVudHMnXG5pbXBvcnQgdGhyb3R0bGUgZnJvbSAnLi91dGlscy90aHJvdHRsZSdcblxuY29uc3QgdGhyb3R0bGVkRHJhZ092ZXIgPSAoY2FsbGJhY2ssIGR1cmF0aW9uKSA9PiB7XG4gIGNvbnN0IHRocm90dGxlZENhbGxiYWNrID0gdGhyb3R0bGUoKGV2ZW50KSA9PiBjYWxsYmFjayhldmVudCksIGR1cmF0aW9uKVxuICByZXR1cm4gZXZlbnQgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB0aHJvdHRsZWRDYWxsYmFjayhldmVudClcbiAgfVxufVxuXG5jb25zdCBwYXNzaXZlRmFsc2UgPSBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzID8geyBwYXNzaXZlOiBmYWxzZSB9IDogZmFsc2VcblxuY29uc3QgaXNUb3VjaCA9ICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvd1xuY29uc3QgbW91c2VFdmVudHMgPSB7XG4gIHN0YXJ0OiAnbW91c2Vkb3duJyxcbiAgbW92ZTogJ21vdXNlbW92ZScsXG4gIGVuZDogJ21vdXNldXAnXG59XG5jb25zdCB0b3VjaEV2ZW50cyA9IHtcbiAgc3RhcnQ6ICd0b3VjaHN0YXJ0JyxcbiAgbW92ZTogJ3RvdWNobW92ZScsXG4gIGVuZDogJ3RvdWNoZW5kJ1xufVxuY29uc3QgZHJhZ2dhYmxlcyA9IFtdXG5jb25zdCB0cmFuc2Zvcm1Qcm9wZXJ0eSA9IGdldFN0eWxlUHJvcGVydHkoJ3RyYW5zZm9ybScpXG5jb25zdCB0cmFuc2l0aW9uUHJvcGVydHkgPSBnZXRTdHlsZVByb3BlcnR5KCd0cmFuc2l0aW9uJylcblxuZnVuY3Rpb24gZ2V0VG91Y2hCeUlEKGVsZW1lbnQsIHRvdWNoSWQpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50LmNoYW5nZWRUb3VjaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGVsZW1lbnQuY2hhbmdlZFRvdWNoZXNbaV0uaWRlbnRpZmllciA9PT0gdG91Y2hJZCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQuY2hhbmdlZFRvdWNoZXNbaV1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmZ1bmN0aW9uIHByZXZlbnREb3VibGVJbml0KGRyYWdnYWJsZSkge1xuICBjb25zdCBtZXNzYWdlID0gXCJmb3IgdGhpcyBlbGVtZW50IERyYWdlZS5EcmFnZ2FibGUgaXMgYWxyZWFkeSBleGlzdCwgZG9uJ3QgY3JlYXRlIGl0IHR3aWNlIFwiXG4gIGlmIChkcmFnZ2FibGVzLnNvbWUoKGV4aXN0aW5nKSA9PiBkcmFnZ2FibGUuZWxlbWVudCA9PT0gZXhpc3RpbmcuZWxlbWVudCkpIHtcbiAgICB0aHJvdyBtZXNzYWdlXG4gIH1cbiAgZHJhZ2dhYmxlcy5wdXNoKGRyYWdnYWJsZSlcbn1cblxuZnVuY3Rpb24gYWRkVG9EZWZhdWx0U2NvcGUoZHJhZ2dhYmxlKSB7XG4gIGRlZmF1bHRTY29wZS5hZGREcmFnZ2FibGUoZHJhZ2dhYmxlKVxufVxuXG5mdW5jdGlvbiBjb3B5U3R5bGVzKHNvdXJjZSwgZGVzdGluYXRpb24pIHtcbiAgY29uc3QgY3MgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShzb3VyY2UpXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGtleSA9IGNzW2ldXG4gICAgaWYgKChrZXkuaW5kZXhPZigndHJhbnNpdGlvbicpIDwgMCkgJiYgKGtleS5pbmRleE9mKCd0cmFuc2Zvcm0nKSA8IDApKSB7XG4gICAgICBkZXN0aW5hdGlvbi5zdHlsZVtrZXldID0gY3Nba2V5XVxuICAgIH1cbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc291cmNlLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgY29weVN0eWxlcyhzb3VyY2UuY2hpbGRyZW5baV0sIGRlc3RpbmF0aW9uLmNoaWxkcmVuW2ldKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYWdnYWJsZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcihvcHRpb25zKVxuICAgIHRoaXMudGFyZ2V0cyA9IFtdXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9uc1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgICBwcmV2ZW50RG91YmxlSW5pdCh0aGlzKVxuICAgIERyYWdnYWJsZS5lbWl0dGVyLmVtaXQoJ2RyYWdnYWJsZTpjcmVhdGUnLCB0aGlzKVxuICAgIHRoaXMuX2VuYWJsZSA9IHRydWVcbiAgICB0aGlzLnN0YXJ0Qm91bmRpbmcoKVxuICAgIHRoaXMuc3RhcnRQb3NpdGlvbmluZygpXG4gICAgdGhpcy5zdGFydExpc3RlbmluZygpXG4gIH1cblxuICBzdGFydEJvdW5kaW5nKCkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuYm91bmQpIHtcbiAgICAgIHRoaXMuYm91bmRpbmcgPSB7IGJvdW5kOiB0aGlzLm9wdGlvbnMuYm91bmQgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmJvdW5kaW5nID0gbmV3IEJvdW5kVG9FbGVtZW50KHRoaXMuY29udGFpbmVyLCB0aGlzLmNvbnRhaW5lcilcbiAgICB9XG4gIH1cblxuICBzdGFydFBvc2l0aW9uaW5nKCkge1xuICAgIHRoaXMuX3NldERlZmF1bHRUcmFuc2l0aW9uKClcbiAgICB0aGlzLm9mZnNldCA9IFBvaW50LmVsZW1lbnRPZmZzZXQodGhpcy5lbGVtZW50LCB0aGlzLmNvbnRhaW5lciwgdHJ1ZSlcbiAgICB0aGlzLnBpbm5lZFBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICB0aGlzLmluaXRpYWxQb3NpdGlvbiA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbiB8fCB0aGlzLm9mZnNldFxuXG4gICAgdGhpcy5waW5Qb3NpdGlvbih0aGlzLmluaXRpYWxQb3NpdGlvbilcblxuICAgIGlmICh0aGlzLmJvdW5kaW5nLnJlZnJlc2gpIHtcbiAgICAgIHRoaXMuYm91bmRpbmcucmVmcmVzaCgpXG4gICAgfVxuICB9XG5cbiAgc3RhcnRMaXN0ZW5pbmcoKSB7XG4gICAgdGhpcy5fZHJhZ1N0YXJ0ID0gKGV2ZW50KSA9PiB0aGlzLmRyYWdTdGFydChldmVudClcbiAgICB0aGlzLl9kcmFnTW92ZSA9IChldmVudCkgPT4gdGhpcy5kcmFnTW92ZShldmVudClcbiAgICB0aGlzLl9kcmFnRW5kID0gKGV2ZW50KSA9PiB0aGlzLmRyYWdFbmQoZXZlbnQpXG4gICAgdGhpcy5fbmF0aXZlRHJhZ1N0YXJ0ID0gKGV2ZW50KSA9PiB0aGlzLm5hdGl2ZURyYWdTdGFydChldmVudClcbiAgICB0aGlzLl9uYXRpdmVEcmFnT3ZlciA9IHRocm90dGxlZERyYWdPdmVyKChldmVudCkgPT4gdGhpcy5uYXRpdmVEcmFnT3ZlcihldmVudCksIHRoaXMuZHJhZ092ZXJUaHJvdHRsZUR1cmF0aW9uKVxuICAgIHRoaXMuX25hdGl2ZURyYWdFbmQgPSAoZXZlbnQpID0+IHRoaXMubmF0aXZlRHJhZ0VuZChldmVudClcbiAgICB0aGlzLl9uYXRpdmVEcm9wID0gKGV2ZW50KSA9PiB0aGlzLm5hdGl2ZURyb3AoZXZlbnQpXG4gICAgdGhpcy5fc2Nyb2xsID0gKGV2ZW50KSA9PiB0aGlzLm9uU2Nyb2xsKGV2ZW50KVxuXG4gICAgdGhpcy5oYW5kbGVyLmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydCwgcGFzc2l2ZUZhbHNlKVxuICAgIHRoaXMuaGFuZGxlci5hZGRFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQsIHBhc3NpdmVGYWxzZSlcbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgdGhpcy5fbmF0aXZlRHJhZ1N0YXJ0KVxuICB9XG5cbiAgZ2V0U2l6ZSgpIHtcbiAgICByZXR1cm4gUG9pbnQuZWxlbWVudFNpemUodGhpcy5lbGVtZW50KVxuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMub2Zmc2V0LmFkZCh0aGlzLl90cmFuc2Zvcm1Qb3NpdGlvbiB8fCBuZXcgUG9pbnQoMCwgMCkpXG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25cbiAgfVxuXG4gIGdldENlbnRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi5hZGQodGhpcy5nZXRTaXplKCkubXVsdCgwLjUpKVxuICB9XG5cbiAgX3NldERlZmF1bHRUcmFuc2l0aW9uICgpIHtcbiAgICBpZiAoIXRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNpdGlvblByb3BlcnR5XSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZWxlbWVudClbdHJhbnNpdGlvblByb3BlcnR5XVxuICAgIH1cbiAgfVxuXG4gIF9zZXRUcmFuc2l0aW9uKHRpbWUpIHtcbiAgICBsZXQgdHJhbnNpdGlvbiA9IHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldXG4gICAgY29uc3QgdHJhbnNpdGlvbkNzcyA9IGB0cmFuc2Zvcm0gJHt0aW1lfW1zYFxuXG4gICAgaWYgKCEvdHJhbnNmb3JtIFxcZCptP3MvLnRlc3QodHJhbnNpdGlvbikpIHtcbiAgICAgIGlmICh0cmFuc2l0aW9uKSB7XG4gICAgICAgIHRyYW5zaXRpb24gKz0gYCwgJHt0cmFuc2l0aW9uQ3NzfWBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyYW5zaXRpb24gPSB0cmFuc2l0aW9uQ3NzXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyYW5zaXRpb24gPSB0cmFuc2l0aW9uLnJlcGxhY2UoL3RyYW5zZm9ybSBcXGQqbT9zL2csIHRyYW5zaXRpb25Dc3MpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldICE9PSB0cmFuc2l0aW9uKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNpdGlvblByb3BlcnR5XSA9IHRyYW5zaXRpb25cbiAgICB9XG4gIH1cblxuICBfc2V0VHJhbnNsYXRlKHBvaW50KSB7XG4gICAgdGhpcy5fdHJhbnNmb3JtUG9zaXRpb24gPSBwb2ludFxuICAgIGNvbnN0IHRyYW5zbGF0ZUNzcyA9IGB0cmFuc2xhdGUzZCgke3BvaW50Lnh9cHgsICR7cG9pbnQueX1weCwgMHB4KWBcblxuICAgIGxldCB0cmFuc2Zvcm0gPSB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcGVydHldXG5cbiAgICBpZiAodGhpcy5zaG91bGRSZW1vdmVaZXJvVHJhbnNsYXRlICYmIHBvaW50LnggPT09IDAgJiYgcG9pbnQueSA9PT0gMCkge1xuICAgICAgdHJhbnNmb3JtID0gdHJhbnNmb3JtLnJlcGxhY2UoL3RyYW5zbGF0ZTNkXFwoW14pXStcXCkvLCAnJylcbiAgICB9IGVsc2UgaWYgKCEvdHJhbnNsYXRlM2RcXChbXildK1xcKS8udGVzdCh0cmFuc2Zvcm0pKSB7XG4gICAgICBpZiAodHJhbnNmb3JtKSB7XG4gICAgICAgIHRyYW5zZm9ybSArPSAnICdcbiAgICAgIH1cbiAgICAgIHRyYW5zZm9ybSArPSB0cmFuc2xhdGVDc3NcbiAgICB9IGVsc2Uge1xuICAgICAgdHJhbnNmb3JtID0gdHJhbnNmb3JtLnJlcGxhY2UoL3RyYW5zbGF0ZTNkXFwoW14pXStcXCkvLCB0cmFuc2xhdGVDc3MpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wZXJ0eV0gIT09IHRyYW5zZm9ybSkge1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BlcnR5XSA9IHRyYW5zZm9ybVxuICAgIH1cbiAgfVxuXG4gIG1vdmUocG9pbnQsIHRpbWU9MCwgaXNTaWxlbnQ9ZmFsc2UpIHtcbiAgICBwb2ludCA9IHBvaW50LmNsb25lKClcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9pbnRcblxuICAgIHRoaXMuX3NldFRyYW5zaXRpb24odGltZSlcbiAgICB0aGlzLl9zZXRUcmFuc2xhdGUocG9pbnQuc3ViKHRoaXMub2Zmc2V0KSlcblxuICAgIGlmICghaXNTaWxlbnQpIHtcbiAgICAgIHRoaXMuZW1pdCgnZHJhZzptb3ZlJylcbiAgICB9XG4gIH1cblxuICBwaW5Qb3NpdGlvbihwb2ludCwgdGltZT0wLCBzaWxlbnQ9dHJ1ZSkge1xuICAgIHRoaXMucGlubmVkUG9zaXRpb24gPSBwb2ludC5jbG9uZSgpXG4gICAgdGhpcy5tb3ZlKHRoaXMucGlubmVkUG9zaXRpb24sIHRpbWUsIHNpbGVudClcbiAgfVxuXG4gIHJlc2V0UG9zaXRpb25Ub0luaXRpYWwgKCkge1xuICAgIHRoaXMucGluUG9zaXRpb24odGhpcy5pbml0aWFsUG9zaXRpb24pXG4gIH1cblxuICByZWZyZXNoUG9zaXRpb24gKCkge1xuICAgIHRoaXMuc2V0UG9zaXRpb24odGhpcy5nZXRQb3NpdGlvbigpKVxuICB9XG5cbiAgc2V0UG9zaXRpb24ocG9pbnQpIHtcbiAgICBwb2ludCA9IHBvaW50LmNsb25lKClcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9pbnRcbiAgICB0aGlzLl9zZXRUcmFuc2l0aW9uKDApXG4gICAgdGhpcy5fc2V0VHJhbnNsYXRlKHBvaW50LnN1Yih0aGlzLm9mZnNldCkpXG4gIH1cblxuICBkZXRlcm1pbmVEaXJlY3Rpb24ocG9pbnQpIHtcbiAgICB0aGlzLl9wcmV2aW91c0RpcmVjdGlvblBvc2l0aW9uIHx8PSB0aGlzLl9zdGFydFBvc2l0aW9uXG5cbiAgICB0aGlzLmxlZnREaXJlY3Rpb24gPSAodGhpcy5fcHJldmlvdXNEaXJlY3Rpb25Qb3NpdGlvbi54IDwgcG9pbnQueClcbiAgICB0aGlzLnJpZ2h0RGlyZWN0aW9uID0gKHRoaXMuX3ByZXZpb3VzRGlyZWN0aW9uUG9zaXRpb24ueCA+IHBvaW50LngpXG4gICAgdGhpcy51cERpcmVjdGlvbiA9ICh0aGlzLl9wcmV2aW91c0RpcmVjdGlvblBvc2l0aW9uLnkgPiBwb2ludC55KVxuICAgIHRoaXMuZG93bkRpcmVjdGlvbiA9ICh0aGlzLl9wcmV2aW91c0RpcmVjdGlvblBvc2l0aW9uLnkgPCBwb2ludC55KVxuXG4gICAgdGhpcy5fcHJldmlvdXNEaXJlY3Rpb25Qb3NpdGlvbiA9IHBvaW50XG4gIH1cblxuICBzZWVtc1Njcm9sbGluZygpIHtcbiAgICByZXR1cm4gKCtuZXcgRGF0ZSgpIC0gdGhpcy5fc3RhcnRUb3VjaFRpbWVzdGFtcCkgPCB0aGlzLnRvdWNoRHJhZ2dpbmdUaHJlc2hvbGRcbiAgfVxuXG4gIHNob3VsZFVzZU5hdGl2ZURyYWdBbmREcm9wKCkge1xuICAgIGlmICh0aGlzLmlzVG91Y2hFdmVudCkge1xuICAgICAgcmV0dXJuIHRoaXMubmF0aXZlRHJhZ0FuZERyb3AgJiYgdGhpcy5lbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3BPblRvdWNoXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLm5hdGl2ZURyYWdBbmREcm9wXG4gICAgfVxuICB9XG5cbiAgZHJhZ1N0YXJ0KGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLl9lbmFibGUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLnN0b3BQcm9wYWdhdGlvbk9uRHJhZ1N0YXJ0KSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIH1cblxuICAgIHRoaXMuaXNUb3VjaEV2ZW50ID0gKGlzVG91Y2ggJiYgKGV2ZW50IGluc3RhbmNlb2Ygd2luZG93LlRvdWNoRXZlbnQpKVxuXG4gICAgdGhpcy50b3VjaFBvaW50ID0gdGhpcy5fc3RhcnRUb3VjaFBvaW50ID0gbmV3IFBvaW50KFxuICAgICAgdGhpcy5pc1RvdWNoRXZlbnQgPyBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCA6IGV2ZW50LmNsaWVudFgsXG4gICAgICB0aGlzLmlzVG91Y2hFdmVudCA/IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZIDogZXZlbnQuY2xpZW50WVxuICAgIClcblxuICAgIHRoaXMuX3N0YXJ0UG9zaXRpb24gPSB0aGlzLmdldFBvc2l0aW9uKClcbiAgICBpZiAodGhpcy5pc1RvdWNoRXZlbnQpIHtcbiAgICAgIHRoaXMuX3RvdWNoSWQgPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5pZGVudGlmaWVyXG4gICAgICB0aGlzLl9zdGFydFRvdWNoVGltZXN0YW1wID0gK25ldyBEYXRlKClcbiAgICB9XG5cbiAgICB0aGlzLl9zdGFydFdpbmRvd1Njcm9sbFBvaW50ID0gdGhpcy53aW5kb3dTY3JvbGxQb2ludFxuICAgIHRoaXMuX3N0YXJ0UGFyZW50c1Njcm9sbFBvaW50ID0gdGhpcy5wYXJlbnRzU2Nyb2xsUG9pbnRcblxuICAgIGlmIChldmVudC50YXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElucHV0RWxlbWVudCB8fFxuICAgICAgICAgIGV2ZW50LnRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSW5wdXRFbGVtZW50KSB7XG4gICAgICBldmVudC50YXJnZXQuZm9jdXMoKVxuICAgIH1cblxuICAgIGlmICh0aGlzLnNob3VsZFVzZU5hdGl2ZURyYWdBbmREcm9wKCkpIHtcbiAgICAgIGlmICh0aGlzLmlzVG91Y2hFdmVudCAmJiB0aGlzLmVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcE9uVG91Y2gpIHtcbiAgICAgICAgY29uc3QgZW11bGF0ZU9uRmlyc3RNb3ZlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuc2VlbXNTY3JvbGxpbmcoKSkge1xuICAgICAgICAgICAgdGhpcy5jYW5jZWxEcmFnZ2luZygpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wKGV2ZW50KVxuICAgICAgICAgIH1cbiAgICAgICAgICBjYW5jZWxFbXVsYXRpb24oKVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNhbmNlbEVtdWxhdGlvbiA9ICgpID0+IHtcbiAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIGVtdWxhdGVPbkZpcnN0TW92ZSlcbiAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgY2FuY2VsRW11bGF0aW9uKVxuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCBlbXVsYXRlT25GaXJzdE1vdmUsIHBhc3NpdmVGYWxzZSlcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIGNhbmNlbEVtdWxhdGlvbiwgcGFzc2l2ZUZhbHNlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmRyYWdnYWJsZSA9IHRydWVcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX25hdGl2ZURyYWdFbmQsIHBhc3NpdmVGYWxzZSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSwgcGFzc2l2ZUZhbHNlKVxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSwgcGFzc2l2ZUZhbHNlKVxuXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZCwgcGFzc2l2ZUZhbHNlKVxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQsIHBhc3NpdmVGYWxzZSlcbiAgICB9XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fc2Nyb2xsKVxuICAgIHRoaXMucGFyZW50cy5mb3JFYWNoKChwKSA9PiBwLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX3Njcm9sbCkpXG5cbiAgICB0aGlzLmVtaXQoJ2RyYWc6c3RhcnQnKVxuICB9XG5cbiAgZHJhZ01vdmUoZXZlbnQpIHtcbiAgICBsZXQgdG91Y2hcblxuICAgIHRoaXMuaXNEcmFnZ2luZyA9IHRydWVcblxuICAgIHRoaXMuaXNUb3VjaEV2ZW50ID0gKGlzVG91Y2ggJiYgKGV2ZW50IGluc3RhbmNlb2Ygd2luZG93LlRvdWNoRXZlbnQpKVxuICAgIGlmICh0aGlzLmlzVG91Y2hFdmVudCkge1xuICAgICAgdG91Y2ggPSBnZXRUb3VjaEJ5SUQoZXZlbnQsIHRoaXMuX3RvdWNoSWQpXG5cbiAgICAgIGlmICghdG91Y2gpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnNlZW1zU2Nyb2xsaW5nKCkpIHtcbiAgICAgICAgdGhpcy5jYW5jZWxEcmFnZ2luZygpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIHRoaXMudG91Y2hQb2ludCA9IG5ldyBQb2ludChcbiAgICAgIHRoaXMuaXNUb3VjaEV2ZW50ID8gdG91Y2gucGFnZVggOiBldmVudC5jbGllbnRYLFxuICAgICAgdGhpcy5pc1RvdWNoRXZlbnQgPyB0b3VjaC5wYWdlWSA6IGV2ZW50LmNsaWVudFlcbiAgICApXG5cbiAgICBsZXQgcG9pbnQgPSB0aGlzLl9zdGFydFBvc2l0aW9uLmFkZCh0aGlzLnRvdWNoUG9pbnQuc3ViKHRoaXMuX3N0YXJ0VG91Y2hQb2ludCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy53aW5kb3dTY3JvbGxQb2ludC5zdWIodGhpcy5fc3RhcnRXaW5kb3dTY3JvbGxQb2ludCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy5wYXJlbnRzU2Nyb2xsUG9pbnQuc3ViKHRoaXMuX3N0YXJ0UGFyZW50c1Njcm9sbFBvaW50KSlcblxuICAgIHBvaW50ID0gdGhpcy5ib3VuZGluZy5ib3VuZChwb2ludCwgdGhpcy5nZXRTaXplKCkpXG4gICAgdGhpcy5kZXRlcm1pbmVEaXJlY3Rpb24ocG9pbnQpXG4gICAgdGhpcy5tb3ZlKHBvaW50KVxuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkcmFnZWUtYWN0aXZlJylcbiAgfVxuXG4gIGRyYWdFbmQoZXZlbnQpIHtcbiAgICB0aGlzLmlzVG91Y2hFdmVudCA9IChpc1RvdWNoICYmIChldmVudCBpbnN0YW5jZW9mIHdpbmRvdy5Ub3VjaEV2ZW50KSlcblxuICAgIGlmICh0aGlzLmlzVG91Y2hFdmVudCAmJiAhZ2V0VG91Y2hCeUlEKGV2ZW50LCB0aGlzLl90b3VjaElkKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNEcmFnZ2luZykge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB9XG5cbiAgICB0aGlzLmRyYWdFbmRBY3Rpb24oKVxuICAgIHRoaXMuZW1pdCgnZHJhZzplbmQnKVxuICAgIHRoaXMuY2FuY2VsRHJhZ2dpbmcoKVxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2VlLWFjdGl2ZScpKVxuICB9XG5cbiAgb25TY3JvbGwoX2V2ZW50KSB7XG4gICAgbGV0IHBvaW50ID0gdGhpcy5fc3RhcnRQb3NpdGlvbi5hZGQodGhpcy50b3VjaFBvaW50LnN1Yih0aGlzLl9zdGFydFRvdWNoUG9pbnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMud2luZG93U2Nyb2xsUG9pbnQuc3ViKHRoaXMuX3N0YXJ0V2luZG93U2Nyb2xsUG9pbnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMucGFyZW50c1Njcm9sbFBvaW50LnN1Yih0aGlzLl9zdGFydFBhcmVudHNTY3JvbGxQb2ludCkpXG5cbiAgICBwb2ludCA9IHRoaXMuYm91bmRpbmcuYm91bmQocG9pbnQsIHRoaXMuZ2V0U2l6ZSgpKVxuICAgIGlmICghdGhpcy5uYXRpdmVEcmFnQW5kRHJvcCkge1xuICAgICAgdGhpcy5kZXRlcm1pbmVEaXJlY3Rpb24ocG9pbnQpXG4gICAgICB0aGlzLm1vdmUocG9pbnQpXG4gICAgfVxuICB9XG5cbiAgbmF0aXZlRHJhZ1N0YXJ0KGV2ZW50KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dCcsICdGaXJlRm94IGZpeCcpXG4gICAgZXZlbnQuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSAnbW92ZSdcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIHRoaXMuX25hdGl2ZURyYWdPdmVyKVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzLl9uYXRpdmVEcm9wKVxuICB9XG5cbiAgbmF0aXZlRHJhZ092ZXIoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZXZlbnQuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnbW92ZSdcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZHJhZ2VlLXBsYWNlaG9sZGVyJylcbiAgICBpZiAoZXZlbnQuY2xpZW50WCA9PT0gMCAmJiBldmVudC5jbGllbnRZID09PSAwKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLnRvdWNoUG9pbnQgPSBuZXcgUG9pbnQoZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSlcbiAgICBsZXQgcG9pbnQgPSB0aGlzLl9zdGFydFBvc2l0aW9uLmFkZCh0aGlzLnRvdWNoUG9pbnQuc3ViKHRoaXMuX3N0YXJ0VG91Y2hQb2ludCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy53aW5kb3dTY3JvbGxQb2ludC5zdWIodGhpcy5fc3RhcnRXaW5kb3dTY3JvbGxQb2ludCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy5wYXJlbnRzU2Nyb2xsUG9pbnQuc3ViKHRoaXMuX3N0YXJ0UGFyZW50c1Njcm9sbFBvaW50KSlcbiAgICBwb2ludCA9IHRoaXMuYm91bmRpbmcuYm91bmQocG9pbnQsIHRoaXMuZ2V0U2l6ZSgpKVxuICAgIHRoaXMuZGV0ZXJtaW5lRGlyZWN0aW9uKHBvaW50KVxuICAgIHRoaXMucG9zaXRpb24gPSBwb2ludFxuICAgIHRoaXMuZW1pdCgnZHJhZzptb3ZlJylcbiAgfVxuXG4gIG5hdGl2ZURyYWdFbmQoX2V2ZW50KSB7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdlZS1wbGFjZWhvbGRlcicpXG4gICAgdGhpcy5kcmFnRW5kQWN0aW9uKClcbiAgICB0aGlzLmVtaXQoJ2RyYWc6ZW5kJylcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIHRoaXMuX25hdGl2ZURyYWdPdmVyKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzLl9uYXRpdmVEcm9wKVxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9zY3JvbGwpXG4gICAgdGhpcy5wYXJlbnRzLmZvckVhY2goKHApID0+IHAucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fc2Nyb2xsKSlcbiAgICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZVxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2RyYWdnYWJsZScpXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdlZS1hY3RpdmUnKVxuICB9XG5cbiAgbmF0aXZlRHJvcChldmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgY2FuY2VsRHJhZ2dpbmcgKCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcblxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX25hdGl2ZURyYWdFbmQpXG5cbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fc2Nyb2xsKVxuICAgIHRoaXMucGFyZW50cy5mb3JFYWNoKChwKSA9PiBwLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX3Njcm9sbCkpXG5cbiAgICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZVxuICAgIHRoaXMuX3ByZXZpb3VzRGlyZWN0aW9uUG9zaXRpb24gPSBudWxsXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnZHJhZ2dhYmxlJylcbiAgfVxuXG4gIGNvcHlTdHlsZXMoc291cmNlLCBkZXN0aW5hdGlvbikge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuY29weVN0eWxlcykge1xuICAgICAgdGhpcy5vcHRpb25zLmNvcHlTdHlsZXMoc291cmNlLCBkZXN0aW5hdGlvbilcbiAgICB9IGVsc2Uge1xuICAgICAgY29weVN0eWxlcyhzb3VyY2UsIGRlc3RpbmF0aW9uKVxuICAgIH1cbiAgfVxuXG4gIGVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcChldmVudCkge1xuICAgIGNvbnN0IGNvbnRhaW5lclJlY3QgPSB0aGlzLmNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIGNvbnN0IGNsb25lZEVsZW1lbnQgPSB0aGlzLmVsZW1lbnQuY2xvbmVOb2RlKHRydWUpXG4gICAgY2xvbmVkRWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wZXJ0eV0gPSAnJ1xuICAgIHRoaXMuY29weVN0eWxlcyh0aGlzLmVsZW1lbnQsIGNsb25lZEVsZW1lbnQpXG4gICAgY2xvbmVkRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSdcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNsb25lZEVsZW1lbnQpXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RyYWdlZS1wbGFjZWhvbGRlcicpXG5cbiAgICBjb25zdCBlbXVsYXRpb25EcmFnZ2FibGUgPSBuZXcgRHJhZ2dhYmxlKGNsb25lZEVsZW1lbnQsIHtcbiAgICAgIGNvbnRhaW5lcjogZG9jdW1lbnQuYm9keSxcbiAgICAgIHRvdWNoRHJhZ2dpbmdUaHJlc2hvbGQ6IDAsXG4gICAgICBib3VuZChwb2ludCkge1xuICAgICAgICByZXR1cm4gcG9pbnRcbiAgICAgIH0sXG4gICAgICBvbjoge1xuICAgICAgICAnZHJhZzptb3ZlJzogKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNvbnRhaW5lclJlY3RQb2ludCA9IG5ldyBQb2ludChjb250YWluZXJSZWN0LmxlZnQsIGNvbnRhaW5lclJlY3QudG9wKVxuICAgICAgICAgIHRoaXMucG9zaXRpb24gPSBlbXVsYXRpb25EcmFnZ2FibGUucG9zaXRpb24uc3ViKGNvbnRhaW5lclJlY3RQb2ludClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN1Yih0aGlzLl9zdGFydFdpbmRvd1Njcm9sbFBvaW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMuX3N0YXJ0UGFyZW50c1Njcm9sbFBvaW50KVxuXG4gICAgICAgICAgdGhpcy5kZXRlcm1pbmVEaXJlY3Rpb24odGhpcy5wb3NpdGlvbilcbiAgICAgICAgICB0aGlzLmVtaXQoJ2RyYWc6bW92ZScpXG4gICAgICAgIH0sXG4gICAgICAgICdkcmFnOmVuZCc6ICgpID0+IHtcbiAgICAgICAgICBlbXVsYXRpb25EcmFnZ2FibGUuZGVzdHJveSgpXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChjbG9uZWRFbGVtZW50KVxuICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZWUtcGxhY2Vob2xkZXInKVxuICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZWUtYWN0aXZlJylcblxuICAgICAgICAgIHRoaXMuZW1pdCgnZHJhZzplbmQnKVxuICAgICAgICAgIHRoaXMuZHJhZ0VuZEFjdGlvbigpXG4gICAgICAgICAgdGhpcy5jYW5jZWxEcmFnZ2luZygpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgY29udGFpbmVyUmVjdFBvaW50ID0gbmV3IFBvaW50KGNvbnRhaW5lclJlY3QubGVmdCwgY29udGFpbmVyUmVjdC50b3ApXG4gICAgZW11bGF0aW9uRHJhZ2dhYmxlLl9zdGFydFdpbmRvd1Njcm9sbFBvaW50ID0gdGhpcy5fc3RhcnRXaW5kb3dTY3JvbGxQb2ludFxuXG4gICAgZW11bGF0aW9uRHJhZ2dhYmxlLm1vdmUoXG4gICAgICB0aGlzLnBpbm5lZFBvc2l0aW9uLmFkZChjb250YWluZXJSZWN0UG9pbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgLmFkZCh0aGlzLndpbmRvd1Njcm9sbFBvaW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgIC5zdWIodGhpcy5wYXJlbnRzU2Nyb2xsUG9pbnQpXG4gICAgKVxuXG4gICAgZW11bGF0aW9uRHJhZ2dhYmxlLmRyYWdTdGFydChldmVudClcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBkcmFnRW5kQWN0aW9uKCkge1xuICAgIHRoaXMucGluUG9zaXRpb24odGhpcy5wb3NpdGlvbilcbiAgfVxuXG4gIGdldFJlY3RhbmdsZSgpIHtcbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZSh0aGlzLnBvc2l0aW9uLCB0aGlzLmdldFNpemUoKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgaWYgKHRoaXMuYm91bmRpbmcucmVmcmVzaCkge1xuICAgICAgdGhpcy5ib3VuZGluZy5yZWZyZXNoKClcbiAgICB9XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuaGFuZGxlci5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQpXG4gICAgdGhpcy5oYW5kbGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydClcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgdGhpcy5fbmF0aXZlRHJhZ1N0YXJ0KVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIHRoaXMuX25hdGl2ZURyYWdPdmVyKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzLl9uYXRpdmVEcm9wKVxuICAgIHRoaXMucmVzZXRFbWl0dGVyKClcblxuICAgIGNvbnN0IGluZGV4ID0gZHJhZ2dhYmxlcy5pbmRleE9mKHRoaXMpXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIGRyYWdnYWJsZXMuc3BsaWNlKGluZGV4LCAxKVxuICAgIH1cbiAgfVxuXG4gIGdldCBjb250YWluZXIoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9jb250YWluZXIgPSB0aGlzLl9jb250YWluZXIgfHwgdGhpcy5vcHRpb25zLmNvbnRhaW5lciB8fCB0aGlzLm9wdGlvbnMucGFyZW50IHx8IGdldERlZmF1bHRDb250YWluZXIodGhpcy5lbGVtZW50KSlcbiAgfVxuXG4gIGdldCBoYW5kbGVyKCkge1xuICAgIGlmICghdGhpcy5faGFuZGxlcikge1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuaGFuZGxlciA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhpcy5faGFuZGxlciA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKHRoaXMub3B0aW9ucy5oYW5kbGVyKSB8fCB0aGlzLmVsZW1lbnRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZXIgPSB0aGlzLm9wdGlvbnMuaGFuZGxlciB8fCB0aGlzLmVsZW1lbnRcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5faGFuZGxlclxuICB9XG5cbiAgZ2V0IHN0b3BQcm9wYWdhdGlvbk9uRHJhZ1N0YXJ0KCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuc3RvcFByb3BhZ2F0aW9uT25EcmFnU3RhcnQgfHwgZmFsc2VcbiAgfVxuXG4gIGdldCBuYXRpdmVEcmFnQW5kRHJvcCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLm5hdGl2ZURyYWdBbmREcm9wIHx8IGZhbHNlXG4gIH1cblxuICBnZXQgZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wT25Ub3VjaCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcE9uVG91Y2ggfHwgZmFsc2VcbiAgfVxuXG4gIGdldCBzaG91bGRSZW1vdmVaZXJvVHJhbnNsYXRlKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuc2hvdWxkUmVtb3ZlWmVyb1RyYW5zbGF0ZSB8fCBmYWxzZVxuICB9XG5cbiAgZ2V0IHRvdWNoRHJhZ2dpbmdUaHJlc2hvbGQoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy50b3VjaERyYWdnaW5nVGhyZXNob2xkIHx8IDBcbiAgfVxuXG4gIGdldCBkcmFnT3ZlclRocm90dGxlRHVyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5kcmFnT3ZlclRocm90dGxlRHVyYXRpb24gfHwgMTZcbiAgfVxuXG4gIGdldCB3aW5kb3dTY3JvbGxQb2ludCgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHdpbmRvdy5zY3JvbGxYLCB3aW5kb3cuc2Nyb2xsWSlcbiAgfVxuXG4gIGdldCBwYXJlbnRzKCkge1xuICAgIGlmICh0aGlzLl9jYWNoZWRQYXJlbnRzKSByZXR1cm4gdGhpcy5fY2FjaGVkUGFyZW50c1xuXG4gICAgdGhpcy5fY2FjaGVkUGFyZW50cyA9IFtdXG4gICAgbGV0IGVsZW1lbnQgPSB0aGlzLmVsZW1lbnRcblxuICAgIHdoaWxlKGVsZW1lbnQucGFyZW50Tm9kZSAmJiBlbGVtZW50ICE9IHRoaXMuY29udGFpbmVyKSB7XG4gICAgICB0aGlzLl9jYWNoZWRQYXJlbnRzLnVuc2hpZnQoZWxlbWVudC5wYXJlbnROb2RlKTtcbiAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2NhY2hlZFBhcmVudHNcbiAgfVxuXG4gIGdldCBwYXJlbnRzU2Nyb2xsUG9pbnQoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludChcbiAgICAgIHRoaXMucGFyZW50cy5yZWR1Y2UoKHN1bSwgcCkgPT4gc3VtICsgcC5zY3JvbGxMZWZ0LCAwKSxcbiAgICAgIHRoaXMucGFyZW50cy5yZWR1Y2UoKHN1bSwgcCkgPT4gc3VtICsgcC5zY3JvbGxUb3AsIDApXG4gICAgKVxuICB9XG5cbiAgZ2V0IGVuYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlXG4gIH1cblxuICBzZXQgZW5hYmxlKGVuYWJsZSkge1xuICAgIGlmIChlbmFibGUpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZWUtZGlzYWJsZScpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkcmFnZWUtZGlzYWJsZScpXG4gICAgfVxuXG4gICAgdGhpcy5fZW5hYmxlID0gZW5hYmxlXG4gIH1cbn1cblxuRHJhZ2dhYmxlLmVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKClcbkRyYWdnYWJsZS5lbWl0dGVyLm9uKCdkcmFnZ2FibGU6Y3JlYXRlJywgYWRkVG9EZWZhdWx0U2NvcGUpXG4iLCJ2YXIgcmVzaXplT2JzZXJ2ZXJzID0gW107XG5leHBvcnQgeyByZXNpemVPYnNlcnZlcnMgfTtcbiIsImltcG9ydCB7IHJlc2l6ZU9ic2VydmVycyB9IGZyb20gJy4uL3V0aWxzL3Jlc2l6ZU9ic2VydmVycyc7XG52YXIgaGFzQWN0aXZlT2JzZXJ2YXRpb25zID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiByZXNpemVPYnNlcnZlcnMuc29tZShmdW5jdGlvbiAocm8pIHsgcmV0dXJuIHJvLmFjdGl2ZVRhcmdldHMubGVuZ3RoID4gMDsgfSk7XG59O1xuZXhwb3J0IHsgaGFzQWN0aXZlT2JzZXJ2YXRpb25zIH07XG4iLCJpbXBvcnQgeyByZXNpemVPYnNlcnZlcnMgfSBmcm9tICcuLi91dGlscy9yZXNpemVPYnNlcnZlcnMnO1xudmFyIGhhc1NraXBwZWRPYnNlcnZhdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHJlc2l6ZU9ic2VydmVycy5zb21lKGZ1bmN0aW9uIChybykgeyByZXR1cm4gcm8uc2tpcHBlZFRhcmdldHMubGVuZ3RoID4gMDsgfSk7XG59O1xuZXhwb3J0IHsgaGFzU2tpcHBlZE9ic2VydmF0aW9ucyB9O1xuIiwidmFyIG1zZyA9ICdSZXNpemVPYnNlcnZlciBsb29wIGNvbXBsZXRlZCB3aXRoIHVuZGVsaXZlcmVkIG5vdGlmaWNhdGlvbnMuJztcbnZhciBkZWxpdmVyUmVzaXplTG9vcEVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBldmVudDtcbiAgICBpZiAodHlwZW9mIEVycm9yRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZXZlbnQgPSBuZXcgRXJyb3JFdmVudCgnZXJyb3InLCB7XG4gICAgICAgICAgICBtZXNzYWdlOiBtc2dcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpO1xuICAgICAgICBldmVudC5pbml0RXZlbnQoJ2Vycm9yJywgZmFsc2UsIGZhbHNlKTtcbiAgICAgICAgZXZlbnQubWVzc2FnZSA9IG1zZztcbiAgICB9XG4gICAgd2luZG93LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xufTtcbmV4cG9ydCB7IGRlbGl2ZXJSZXNpemVMb29wRXJyb3IgfTtcbiIsInZhciBSZXNpemVPYnNlcnZlckJveE9wdGlvbnM7XG4oZnVuY3Rpb24gKFJlc2l6ZU9ic2VydmVyQm94T3B0aW9ucykge1xuICAgIFJlc2l6ZU9ic2VydmVyQm94T3B0aW9uc1tcIkJPUkRFUl9CT1hcIl0gPSBcImJvcmRlci1ib3hcIjtcbiAgICBSZXNpemVPYnNlcnZlckJveE9wdGlvbnNbXCJDT05URU5UX0JPWFwiXSA9IFwiY29udGVudC1ib3hcIjtcbiAgICBSZXNpemVPYnNlcnZlckJveE9wdGlvbnNbXCJERVZJQ0VfUElYRUxfQ09OVEVOVF9CT1hcIl0gPSBcImRldmljZS1waXhlbC1jb250ZW50LWJveFwiO1xufSkoUmVzaXplT2JzZXJ2ZXJCb3hPcHRpb25zIHx8IChSZXNpemVPYnNlcnZlckJveE9wdGlvbnMgPSB7fSkpO1xuZXhwb3J0IHsgUmVzaXplT2JzZXJ2ZXJCb3hPcHRpb25zIH07XG4iLCJleHBvcnQgdmFyIGZyZWV6ZSA9IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIE9iamVjdC5mcmVlemUob2JqKTsgfTtcbiIsImltcG9ydCB7IGZyZWV6ZSB9IGZyb20gJy4vdXRpbHMvZnJlZXplJztcbnZhciBSZXNpemVPYnNlcnZlclNpemUgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFJlc2l6ZU9ic2VydmVyU2l6ZShpbmxpbmVTaXplLCBibG9ja1NpemUpIHtcbiAgICAgICAgdGhpcy5pbmxpbmVTaXplID0gaW5saW5lU2l6ZTtcbiAgICAgICAgdGhpcy5ibG9ja1NpemUgPSBibG9ja1NpemU7XG4gICAgICAgIGZyZWV6ZSh0aGlzKTtcbiAgICB9XG4gICAgcmV0dXJuIFJlc2l6ZU9ic2VydmVyU2l6ZTtcbn0oKSk7XG5leHBvcnQgeyBSZXNpemVPYnNlcnZlclNpemUgfTtcbiIsImltcG9ydCB7IGZyZWV6ZSB9IGZyb20gJy4vdXRpbHMvZnJlZXplJztcbnZhciBET01SZWN0UmVhZE9ubHkgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIERPTVJlY3RSZWFkT25seSh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHRoaXMudG9wID0gdGhpcy55O1xuICAgICAgICB0aGlzLmxlZnQgPSB0aGlzLng7XG4gICAgICAgIHRoaXMuYm90dG9tID0gdGhpcy50b3AgKyB0aGlzLmhlaWdodDtcbiAgICAgICAgdGhpcy5yaWdodCA9IHRoaXMubGVmdCArIHRoaXMud2lkdGg7XG4gICAgICAgIHJldHVybiBmcmVlemUodGhpcyk7XG4gICAgfVxuICAgIERPTVJlY3RSZWFkT25seS5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2EgPSB0aGlzLCB4ID0gX2EueCwgeSA9IF9hLnksIHRvcCA9IF9hLnRvcCwgcmlnaHQgPSBfYS5yaWdodCwgYm90dG9tID0gX2EuYm90dG9tLCBsZWZ0ID0gX2EubGVmdCwgd2lkdGggPSBfYS53aWR0aCwgaGVpZ2h0ID0gX2EuaGVpZ2h0O1xuICAgICAgICByZXR1cm4geyB4OiB4LCB5OiB5LCB0b3A6IHRvcCwgcmlnaHQ6IHJpZ2h0LCBib3R0b206IGJvdHRvbSwgbGVmdDogbGVmdCwgd2lkdGg6IHdpZHRoLCBoZWlnaHQ6IGhlaWdodCB9O1xuICAgIH07XG4gICAgRE9NUmVjdFJlYWRPbmx5LmZyb21SZWN0ID0gZnVuY3Rpb24gKHJlY3RhbmdsZSkge1xuICAgICAgICByZXR1cm4gbmV3IERPTVJlY3RSZWFkT25seShyZWN0YW5nbGUueCwgcmVjdGFuZ2xlLnksIHJlY3RhbmdsZS53aWR0aCwgcmVjdGFuZ2xlLmhlaWdodCk7XG4gICAgfTtcbiAgICByZXR1cm4gRE9NUmVjdFJlYWRPbmx5O1xufSgpKTtcbmV4cG9ydCB7IERPTVJlY3RSZWFkT25seSB9O1xuIiwidmFyIGlzU1ZHID0gZnVuY3Rpb24gKHRhcmdldCkgeyByZXR1cm4gdGFyZ2V0IGluc3RhbmNlb2YgU1ZHRWxlbWVudCAmJiAnZ2V0QkJveCcgaW4gdGFyZ2V0OyB9O1xudmFyIGlzSGlkZGVuID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGlmIChpc1NWRyh0YXJnZXQpKSB7XG4gICAgICAgIHZhciBfYSA9IHRhcmdldC5nZXRCQm94KCksIHdpZHRoID0gX2Eud2lkdGgsIGhlaWdodCA9IF9hLmhlaWdodDtcbiAgICAgICAgcmV0dXJuICF3aWR0aCAmJiAhaGVpZ2h0O1xuICAgIH1cbiAgICB2YXIgX2IgPSB0YXJnZXQsIG9mZnNldFdpZHRoID0gX2Iub2Zmc2V0V2lkdGgsIG9mZnNldEhlaWdodCA9IF9iLm9mZnNldEhlaWdodDtcbiAgICByZXR1cm4gIShvZmZzZXRXaWR0aCB8fCBvZmZzZXRIZWlnaHQgfHwgdGFyZ2V0LmdldENsaWVudFJlY3RzKCkubGVuZ3RoKTtcbn07XG52YXIgaXNFbGVtZW50ID0gZnVuY3Rpb24gKG9iaikge1xuICAgIHZhciBfYTtcbiAgICBpZiAob2JqIGluc3RhbmNlb2YgRWxlbWVudCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgdmFyIHNjb3BlID0gKF9hID0gb2JqID09PSBudWxsIHx8IG9iaiA9PT0gdm9pZCAwID8gdm9pZCAwIDogb2JqLm93bmVyRG9jdW1lbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5kZWZhdWx0VmlldztcbiAgICByZXR1cm4gISEoc2NvcGUgJiYgb2JqIGluc3RhbmNlb2Ygc2NvcGUuRWxlbWVudCk7XG59O1xudmFyIGlzUmVwbGFjZWRFbGVtZW50ID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIHN3aXRjaCAodGFyZ2V0LnRhZ05hbWUpIHtcbiAgICAgICAgY2FzZSAnSU5QVVQnOlxuICAgICAgICAgICAgaWYgKHRhcmdldC50eXBlICE9PSAnaW1hZ2UnKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIGNhc2UgJ1ZJREVPJzpcbiAgICAgICAgY2FzZSAnQVVESU8nOlxuICAgICAgICBjYXNlICdFTUJFRCc6XG4gICAgICAgIGNhc2UgJ09CSkVDVCc6XG4gICAgICAgIGNhc2UgJ0NBTlZBUyc6XG4gICAgICAgIGNhc2UgJ0lGUkFNRSc6XG4gICAgICAgIGNhc2UgJ0lNRyc6XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufTtcbmV4cG9ydCB7IGlzU1ZHLCBpc0hpZGRlbiwgaXNFbGVtZW50LCBpc1JlcGxhY2VkRWxlbWVudCB9O1xuIiwiZXhwb3J0IHZhciBnbG9iYWwgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHt9O1xuIiwiaW1wb3J0IHsgUmVzaXplT2JzZXJ2ZXJCb3hPcHRpb25zIH0gZnJvbSAnLi4vUmVzaXplT2JzZXJ2ZXJCb3hPcHRpb25zJztcbmltcG9ydCB7IFJlc2l6ZU9ic2VydmVyU2l6ZSB9IGZyb20gJy4uL1Jlc2l6ZU9ic2VydmVyU2l6ZSc7XG5pbXBvcnQgeyBET01SZWN0UmVhZE9ubHkgfSBmcm9tICcuLi9ET01SZWN0UmVhZE9ubHknO1xuaW1wb3J0IHsgaXNTVkcsIGlzSGlkZGVuIH0gZnJvbSAnLi4vdXRpbHMvZWxlbWVudCc7XG5pbXBvcnQgeyBmcmVlemUgfSBmcm9tICcuLi91dGlscy9mcmVlemUnO1xuaW1wb3J0IHsgZ2xvYmFsIH0gZnJvbSAnLi4vdXRpbHMvZ2xvYmFsJztcbnZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG52YXIgc2Nyb2xsUmVnZXhwID0gL2F1dG98c2Nyb2xsLztcbnZhciB2ZXJ0aWNhbFJlZ2V4cCA9IC9edGJ8dmVydGljYWwvO1xudmFyIElFID0gKC9tc2llfHRyaWRlbnQvaSkudGVzdChnbG9iYWwubmF2aWdhdG9yICYmIGdsb2JhbC5uYXZpZ2F0b3IudXNlckFnZW50KTtcbnZhciBwYXJzZURpbWVuc2lvbiA9IGZ1bmN0aW9uIChwaXhlbCkgeyByZXR1cm4gcGFyc2VGbG9hdChwaXhlbCB8fCAnMCcpOyB9O1xudmFyIHNpemUgPSBmdW5jdGlvbiAoaW5saW5lU2l6ZSwgYmxvY2tTaXplLCBzd2l0Y2hTaXplcykge1xuICAgIGlmIChpbmxpbmVTaXplID09PSB2b2lkIDApIHsgaW5saW5lU2l6ZSA9IDA7IH1cbiAgICBpZiAoYmxvY2tTaXplID09PSB2b2lkIDApIHsgYmxvY2tTaXplID0gMDsgfVxuICAgIGlmIChzd2l0Y2hTaXplcyA9PT0gdm9pZCAwKSB7IHN3aXRjaFNpemVzID0gZmFsc2U7IH1cbiAgICByZXR1cm4gbmV3IFJlc2l6ZU9ic2VydmVyU2l6ZSgoc3dpdGNoU2l6ZXMgPyBibG9ja1NpemUgOiBpbmxpbmVTaXplKSB8fCAwLCAoc3dpdGNoU2l6ZXMgPyBpbmxpbmVTaXplIDogYmxvY2tTaXplKSB8fCAwKTtcbn07XG52YXIgemVyb0JveGVzID0gZnJlZXplKHtcbiAgICBkZXZpY2VQaXhlbENvbnRlbnRCb3hTaXplOiBzaXplKCksXG4gICAgYm9yZGVyQm94U2l6ZTogc2l6ZSgpLFxuICAgIGNvbnRlbnRCb3hTaXplOiBzaXplKCksXG4gICAgY29udGVudFJlY3Q6IG5ldyBET01SZWN0UmVhZE9ubHkoMCwgMCwgMCwgMClcbn0pO1xudmFyIGNhbGN1bGF0ZUJveFNpemVzID0gZnVuY3Rpb24gKHRhcmdldCwgZm9yY2VSZWNhbGN1bGF0aW9uKSB7XG4gICAgaWYgKGZvcmNlUmVjYWxjdWxhdGlvbiA9PT0gdm9pZCAwKSB7IGZvcmNlUmVjYWxjdWxhdGlvbiA9IGZhbHNlOyB9XG4gICAgaWYgKGNhY2hlLmhhcyh0YXJnZXQpICYmICFmb3JjZVJlY2FsY3VsYXRpb24pIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlLmdldCh0YXJnZXQpO1xuICAgIH1cbiAgICBpZiAoaXNIaWRkZW4odGFyZ2V0KSkge1xuICAgICAgICBjYWNoZS5zZXQodGFyZ2V0LCB6ZXJvQm94ZXMpO1xuICAgICAgICByZXR1cm4gemVyb0JveGVzO1xuICAgIH1cbiAgICB2YXIgY3MgPSBnZXRDb21wdXRlZFN0eWxlKHRhcmdldCk7XG4gICAgdmFyIHN2ZyA9IGlzU1ZHKHRhcmdldCkgJiYgdGFyZ2V0Lm93bmVyU1ZHRWxlbWVudCAmJiB0YXJnZXQuZ2V0QkJveCgpO1xuICAgIHZhciByZW1vdmVQYWRkaW5nID0gIUlFICYmIGNzLmJveFNpemluZyA9PT0gJ2JvcmRlci1ib3gnO1xuICAgIHZhciBzd2l0Y2hTaXplcyA9IHZlcnRpY2FsUmVnZXhwLnRlc3QoY3Mud3JpdGluZ01vZGUgfHwgJycpO1xuICAgIHZhciBjYW5TY3JvbGxWZXJ0aWNhbGx5ID0gIXN2ZyAmJiBzY3JvbGxSZWdleHAudGVzdChjcy5vdmVyZmxvd1kgfHwgJycpO1xuICAgIHZhciBjYW5TY3JvbGxIb3Jpem9udGFsbHkgPSAhc3ZnICYmIHNjcm9sbFJlZ2V4cC50ZXN0KGNzLm92ZXJmbG93WCB8fCAnJyk7XG4gICAgdmFyIHBhZGRpbmdUb3AgPSBzdmcgPyAwIDogcGFyc2VEaW1lbnNpb24oY3MucGFkZGluZ1RvcCk7XG4gICAgdmFyIHBhZGRpbmdSaWdodCA9IHN2ZyA/IDAgOiBwYXJzZURpbWVuc2lvbihjcy5wYWRkaW5nUmlnaHQpO1xuICAgIHZhciBwYWRkaW5nQm90dG9tID0gc3ZnID8gMCA6IHBhcnNlRGltZW5zaW9uKGNzLnBhZGRpbmdCb3R0b20pO1xuICAgIHZhciBwYWRkaW5nTGVmdCA9IHN2ZyA/IDAgOiBwYXJzZURpbWVuc2lvbihjcy5wYWRkaW5nTGVmdCk7XG4gICAgdmFyIGJvcmRlclRvcCA9IHN2ZyA/IDAgOiBwYXJzZURpbWVuc2lvbihjcy5ib3JkZXJUb3BXaWR0aCk7XG4gICAgdmFyIGJvcmRlclJpZ2h0ID0gc3ZnID8gMCA6IHBhcnNlRGltZW5zaW9uKGNzLmJvcmRlclJpZ2h0V2lkdGgpO1xuICAgIHZhciBib3JkZXJCb3R0b20gPSBzdmcgPyAwIDogcGFyc2VEaW1lbnNpb24oY3MuYm9yZGVyQm90dG9tV2lkdGgpO1xuICAgIHZhciBib3JkZXJMZWZ0ID0gc3ZnID8gMCA6IHBhcnNlRGltZW5zaW9uKGNzLmJvcmRlckxlZnRXaWR0aCk7XG4gICAgdmFyIGhvcml6b250YWxQYWRkaW5nID0gcGFkZGluZ0xlZnQgKyBwYWRkaW5nUmlnaHQ7XG4gICAgdmFyIHZlcnRpY2FsUGFkZGluZyA9IHBhZGRpbmdUb3AgKyBwYWRkaW5nQm90dG9tO1xuICAgIHZhciBob3Jpem9udGFsQm9yZGVyQXJlYSA9IGJvcmRlckxlZnQgKyBib3JkZXJSaWdodDtcbiAgICB2YXIgdmVydGljYWxCb3JkZXJBcmVhID0gYm9yZGVyVG9wICsgYm9yZGVyQm90dG9tO1xuICAgIHZhciBob3Jpem9udGFsU2Nyb2xsYmFyVGhpY2tuZXNzID0gIWNhblNjcm9sbEhvcml6b250YWxseSA/IDAgOiB0YXJnZXQub2Zmc2V0SGVpZ2h0IC0gdmVydGljYWxCb3JkZXJBcmVhIC0gdGFyZ2V0LmNsaWVudEhlaWdodDtcbiAgICB2YXIgdmVydGljYWxTY3JvbGxiYXJUaGlja25lc3MgPSAhY2FuU2Nyb2xsVmVydGljYWxseSA/IDAgOiB0YXJnZXQub2Zmc2V0V2lkdGggLSBob3Jpem9udGFsQm9yZGVyQXJlYSAtIHRhcmdldC5jbGllbnRXaWR0aDtcbiAgICB2YXIgd2lkdGhSZWR1Y3Rpb24gPSByZW1vdmVQYWRkaW5nID8gaG9yaXpvbnRhbFBhZGRpbmcgKyBob3Jpem9udGFsQm9yZGVyQXJlYSA6IDA7XG4gICAgdmFyIGhlaWdodFJlZHVjdGlvbiA9IHJlbW92ZVBhZGRpbmcgPyB2ZXJ0aWNhbFBhZGRpbmcgKyB2ZXJ0aWNhbEJvcmRlckFyZWEgOiAwO1xuICAgIHZhciBjb250ZW50V2lkdGggPSBzdmcgPyBzdmcud2lkdGggOiBwYXJzZURpbWVuc2lvbihjcy53aWR0aCkgLSB3aWR0aFJlZHVjdGlvbiAtIHZlcnRpY2FsU2Nyb2xsYmFyVGhpY2tuZXNzO1xuICAgIHZhciBjb250ZW50SGVpZ2h0ID0gc3ZnID8gc3ZnLmhlaWdodCA6IHBhcnNlRGltZW5zaW9uKGNzLmhlaWdodCkgLSBoZWlnaHRSZWR1Y3Rpb24gLSBob3Jpem9udGFsU2Nyb2xsYmFyVGhpY2tuZXNzO1xuICAgIHZhciBib3JkZXJCb3hXaWR0aCA9IGNvbnRlbnRXaWR0aCArIGhvcml6b250YWxQYWRkaW5nICsgdmVydGljYWxTY3JvbGxiYXJUaGlja25lc3MgKyBob3Jpem9udGFsQm9yZGVyQXJlYTtcbiAgICB2YXIgYm9yZGVyQm94SGVpZ2h0ID0gY29udGVudEhlaWdodCArIHZlcnRpY2FsUGFkZGluZyArIGhvcml6b250YWxTY3JvbGxiYXJUaGlja25lc3MgKyB2ZXJ0aWNhbEJvcmRlckFyZWE7XG4gICAgdmFyIGJveGVzID0gZnJlZXplKHtcbiAgICAgICAgZGV2aWNlUGl4ZWxDb250ZW50Qm94U2l6ZTogc2l6ZShNYXRoLnJvdW5kKGNvbnRlbnRXaWR0aCAqIGRldmljZVBpeGVsUmF0aW8pLCBNYXRoLnJvdW5kKGNvbnRlbnRIZWlnaHQgKiBkZXZpY2VQaXhlbFJhdGlvKSwgc3dpdGNoU2l6ZXMpLFxuICAgICAgICBib3JkZXJCb3hTaXplOiBzaXplKGJvcmRlckJveFdpZHRoLCBib3JkZXJCb3hIZWlnaHQsIHN3aXRjaFNpemVzKSxcbiAgICAgICAgY29udGVudEJveFNpemU6IHNpemUoY29udGVudFdpZHRoLCBjb250ZW50SGVpZ2h0LCBzd2l0Y2hTaXplcyksXG4gICAgICAgIGNvbnRlbnRSZWN0OiBuZXcgRE9NUmVjdFJlYWRPbmx5KHBhZGRpbmdMZWZ0LCBwYWRkaW5nVG9wLCBjb250ZW50V2lkdGgsIGNvbnRlbnRIZWlnaHQpXG4gICAgfSk7XG4gICAgY2FjaGUuc2V0KHRhcmdldCwgYm94ZXMpO1xuICAgIHJldHVybiBib3hlcztcbn07XG52YXIgY2FsY3VsYXRlQm94U2l6ZSA9IGZ1bmN0aW9uICh0YXJnZXQsIG9ic2VydmVkQm94LCBmb3JjZVJlY2FsY3VsYXRpb24pIHtcbiAgICB2YXIgX2EgPSBjYWxjdWxhdGVCb3hTaXplcyh0YXJnZXQsIGZvcmNlUmVjYWxjdWxhdGlvbiksIGJvcmRlckJveFNpemUgPSBfYS5ib3JkZXJCb3hTaXplLCBjb250ZW50Qm94U2l6ZSA9IF9hLmNvbnRlbnRCb3hTaXplLCBkZXZpY2VQaXhlbENvbnRlbnRCb3hTaXplID0gX2EuZGV2aWNlUGl4ZWxDb250ZW50Qm94U2l6ZTtcbiAgICBzd2l0Y2ggKG9ic2VydmVkQm94KSB7XG4gICAgICAgIGNhc2UgUmVzaXplT2JzZXJ2ZXJCb3hPcHRpb25zLkRFVklDRV9QSVhFTF9DT05URU5UX0JPWDpcbiAgICAgICAgICAgIHJldHVybiBkZXZpY2VQaXhlbENvbnRlbnRCb3hTaXplO1xuICAgICAgICBjYXNlIFJlc2l6ZU9ic2VydmVyQm94T3B0aW9ucy5CT1JERVJfQk9YOlxuICAgICAgICAgICAgcmV0dXJuIGJvcmRlckJveFNpemU7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gY29udGVudEJveFNpemU7XG4gICAgfVxufTtcbmV4cG9ydCB7IGNhbGN1bGF0ZUJveFNpemUsIGNhbGN1bGF0ZUJveFNpemVzIH07XG4iLCJpbXBvcnQgeyBjYWxjdWxhdGVCb3hTaXplcyB9IGZyb20gJy4vYWxnb3JpdGhtcy9jYWxjdWxhdGVCb3hTaXplJztcbmltcG9ydCB7IGZyZWV6ZSB9IGZyb20gJy4vdXRpbHMvZnJlZXplJztcbnZhciBSZXNpemVPYnNlcnZlckVudHJ5ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBSZXNpemVPYnNlcnZlckVudHJ5KHRhcmdldCkge1xuICAgICAgICB2YXIgYm94ZXMgPSBjYWxjdWxhdGVCb3hTaXplcyh0YXJnZXQpO1xuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgICAgICAgdGhpcy5jb250ZW50UmVjdCA9IGJveGVzLmNvbnRlbnRSZWN0O1xuICAgICAgICB0aGlzLmJvcmRlckJveFNpemUgPSBmcmVlemUoW2JveGVzLmJvcmRlckJveFNpemVdKTtcbiAgICAgICAgdGhpcy5jb250ZW50Qm94U2l6ZSA9IGZyZWV6ZShbYm94ZXMuY29udGVudEJveFNpemVdKTtcbiAgICAgICAgdGhpcy5kZXZpY2VQaXhlbENvbnRlbnRCb3hTaXplID0gZnJlZXplKFtib3hlcy5kZXZpY2VQaXhlbENvbnRlbnRCb3hTaXplXSk7XG4gICAgfVxuICAgIHJldHVybiBSZXNpemVPYnNlcnZlckVudHJ5O1xufSgpKTtcbmV4cG9ydCB7IFJlc2l6ZU9ic2VydmVyRW50cnkgfTtcbiIsImltcG9ydCB7IGlzSGlkZGVuIH0gZnJvbSAnLi4vdXRpbHMvZWxlbWVudCc7XG52YXIgY2FsY3VsYXRlRGVwdGhGb3JOb2RlID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICBpZiAoaXNIaWRkZW4obm9kZSkpIHtcbiAgICAgICAgcmV0dXJuIEluZmluaXR5O1xuICAgIH1cbiAgICB2YXIgZGVwdGggPSAwO1xuICAgIHZhciBwYXJlbnQgPSBub2RlLnBhcmVudE5vZGU7XG4gICAgd2hpbGUgKHBhcmVudCkge1xuICAgICAgICBkZXB0aCArPSAxO1xuICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50Tm9kZTtcbiAgICB9XG4gICAgcmV0dXJuIGRlcHRoO1xufTtcbmV4cG9ydCB7IGNhbGN1bGF0ZURlcHRoRm9yTm9kZSB9O1xuIiwiaW1wb3J0IHsgcmVzaXplT2JzZXJ2ZXJzIH0gZnJvbSAnLi4vdXRpbHMvcmVzaXplT2JzZXJ2ZXJzJztcbmltcG9ydCB7IFJlc2l6ZU9ic2VydmVyRW50cnkgfSBmcm9tICcuLi9SZXNpemVPYnNlcnZlckVudHJ5JztcbmltcG9ydCB7IGNhbGN1bGF0ZURlcHRoRm9yTm9kZSB9IGZyb20gJy4vY2FsY3VsYXRlRGVwdGhGb3JOb2RlJztcbmltcG9ydCB7IGNhbGN1bGF0ZUJveFNpemUgfSBmcm9tICcuL2NhbGN1bGF0ZUJveFNpemUnO1xudmFyIGJyb2FkY2FzdEFjdGl2ZU9ic2VydmF0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2hhbGxvd2VzdERlcHRoID0gSW5maW5pdHk7XG4gICAgdmFyIGNhbGxiYWNrcyA9IFtdO1xuICAgIHJlc2l6ZU9ic2VydmVycy5mb3JFYWNoKGZ1bmN0aW9uIHByb2Nlc3NPYnNlcnZlcihybykge1xuICAgICAgICBpZiAocm8uYWN0aXZlVGFyZ2V0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZW50cmllcyA9IFtdO1xuICAgICAgICByby5hY3RpdmVUYXJnZXRzLmZvckVhY2goZnVuY3Rpb24gcHJvY2Vzc1RhcmdldChvdCkge1xuICAgICAgICAgICAgdmFyIGVudHJ5ID0gbmV3IFJlc2l6ZU9ic2VydmVyRW50cnkob3QudGFyZ2V0KTtcbiAgICAgICAgICAgIHZhciB0YXJnZXREZXB0aCA9IGNhbGN1bGF0ZURlcHRoRm9yTm9kZShvdC50YXJnZXQpO1xuICAgICAgICAgICAgZW50cmllcy5wdXNoKGVudHJ5KTtcbiAgICAgICAgICAgIG90Lmxhc3RSZXBvcnRlZFNpemUgPSBjYWxjdWxhdGVCb3hTaXplKG90LnRhcmdldCwgb3Qub2JzZXJ2ZWRCb3gpO1xuICAgICAgICAgICAgaWYgKHRhcmdldERlcHRoIDwgc2hhbGxvd2VzdERlcHRoKSB7XG4gICAgICAgICAgICAgICAgc2hhbGxvd2VzdERlcHRoID0gdGFyZ2V0RGVwdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBjYWxsYmFja3MucHVzaChmdW5jdGlvbiByZXNpemVPYnNlcnZlckNhbGxiYWNrKCkge1xuICAgICAgICAgICAgcm8uY2FsbGJhY2suY2FsbChyby5vYnNlcnZlciwgZW50cmllcywgcm8ub2JzZXJ2ZXIpO1xuICAgICAgICB9KTtcbiAgICAgICAgcm8uYWN0aXZlVGFyZ2V0cy5zcGxpY2UoMCwgcm8uYWN0aXZlVGFyZ2V0cy5sZW5ndGgpO1xuICAgIH0pO1xuICAgIGZvciAodmFyIF9pID0gMCwgY2FsbGJhY2tzXzEgPSBjYWxsYmFja3M7IF9pIDwgY2FsbGJhY2tzXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IGNhbGxiYWNrc18xW19pXTtcbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICB9XG4gICAgcmV0dXJuIHNoYWxsb3dlc3REZXB0aDtcbn07XG5leHBvcnQgeyBicm9hZGNhc3RBY3RpdmVPYnNlcnZhdGlvbnMgfTtcbiIsImltcG9ydCB7IHJlc2l6ZU9ic2VydmVycyB9IGZyb20gJy4uL3V0aWxzL3Jlc2l6ZU9ic2VydmVycyc7XG5pbXBvcnQgeyBjYWxjdWxhdGVEZXB0aEZvck5vZGUgfSBmcm9tICcuL2NhbGN1bGF0ZURlcHRoRm9yTm9kZSc7XG52YXIgZ2F0aGVyQWN0aXZlT2JzZXJ2YXRpb25zQXREZXB0aCA9IGZ1bmN0aW9uIChkZXB0aCkge1xuICAgIHJlc2l6ZU9ic2VydmVycy5mb3JFYWNoKGZ1bmN0aW9uIHByb2Nlc3NPYnNlcnZlcihybykge1xuICAgICAgICByby5hY3RpdmVUYXJnZXRzLnNwbGljZSgwLCByby5hY3RpdmVUYXJnZXRzLmxlbmd0aCk7XG4gICAgICAgIHJvLnNraXBwZWRUYXJnZXRzLnNwbGljZSgwLCByby5za2lwcGVkVGFyZ2V0cy5sZW5ndGgpO1xuICAgICAgICByby5vYnNlcnZhdGlvblRhcmdldHMuZm9yRWFjaChmdW5jdGlvbiBwcm9jZXNzVGFyZ2V0KG90KSB7XG4gICAgICAgICAgICBpZiAob3QuaXNBY3RpdmUoKSkge1xuICAgICAgICAgICAgICAgIGlmIChjYWxjdWxhdGVEZXB0aEZvck5vZGUob3QudGFyZ2V0KSA+IGRlcHRoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJvLmFjdGl2ZVRhcmdldHMucHVzaChvdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByby5za2lwcGVkVGFyZ2V0cy5wdXNoKG90KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufTtcbmV4cG9ydCB7IGdhdGhlckFjdGl2ZU9ic2VydmF0aW9uc0F0RGVwdGggfTtcbiIsImltcG9ydCB7IGhhc0FjdGl2ZU9ic2VydmF0aW9ucyB9IGZyb20gJy4uL2FsZ29yaXRobXMvaGFzQWN0aXZlT2JzZXJ2YXRpb25zJztcbmltcG9ydCB7IGhhc1NraXBwZWRPYnNlcnZhdGlvbnMgfSBmcm9tICcuLi9hbGdvcml0aG1zL2hhc1NraXBwZWRPYnNlcnZhdGlvbnMnO1xuaW1wb3J0IHsgZGVsaXZlclJlc2l6ZUxvb3BFcnJvciB9IGZyb20gJy4uL2FsZ29yaXRobXMvZGVsaXZlclJlc2l6ZUxvb3BFcnJvcic7XG5pbXBvcnQgeyBicm9hZGNhc3RBY3RpdmVPYnNlcnZhdGlvbnMgfSBmcm9tICcuLi9hbGdvcml0aG1zL2Jyb2FkY2FzdEFjdGl2ZU9ic2VydmF0aW9ucyc7XG5pbXBvcnQgeyBnYXRoZXJBY3RpdmVPYnNlcnZhdGlvbnNBdERlcHRoIH0gZnJvbSAnLi4vYWxnb3JpdGhtcy9nYXRoZXJBY3RpdmVPYnNlcnZhdGlvbnNBdERlcHRoJztcbnZhciBwcm9jZXNzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBkZXB0aCA9IDA7XG4gICAgZ2F0aGVyQWN0aXZlT2JzZXJ2YXRpb25zQXREZXB0aChkZXB0aCk7XG4gICAgd2hpbGUgKGhhc0FjdGl2ZU9ic2VydmF0aW9ucygpKSB7XG4gICAgICAgIGRlcHRoID0gYnJvYWRjYXN0QWN0aXZlT2JzZXJ2YXRpb25zKCk7XG4gICAgICAgIGdhdGhlckFjdGl2ZU9ic2VydmF0aW9uc0F0RGVwdGgoZGVwdGgpO1xuICAgIH1cbiAgICBpZiAoaGFzU2tpcHBlZE9ic2VydmF0aW9ucygpKSB7XG4gICAgICAgIGRlbGl2ZXJSZXNpemVMb29wRXJyb3IoKTtcbiAgICB9XG4gICAgcmV0dXJuIGRlcHRoID4gMDtcbn07XG5leHBvcnQgeyBwcm9jZXNzIH07XG4iLCJ2YXIgdHJpZ2dlcjtcbnZhciBjYWxsYmFja3MgPSBbXTtcbnZhciBub3RpZnkgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBjYWxsYmFja3Muc3BsaWNlKDApLmZvckVhY2goZnVuY3Rpb24gKGNiKSB7IHJldHVybiBjYigpOyB9KTsgfTtcbnZhciBxdWV1ZU1pY3JvVGFzayA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgIGlmICghdHJpZ2dlcikge1xuICAgICAgICB2YXIgdG9nZ2xlXzEgPSAwO1xuICAgICAgICB2YXIgZWxfMSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICAgICAgdmFyIGNvbmZpZyA9IHsgY2hhcmFjdGVyRGF0YTogdHJ1ZSB9O1xuICAgICAgICBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAoKSB7IHJldHVybiBub3RpZnkoKTsgfSkub2JzZXJ2ZShlbF8xLCBjb25maWcpO1xuICAgICAgICB0cmlnZ2VyID0gZnVuY3Rpb24gKCkgeyBlbF8xLnRleHRDb250ZW50ID0gXCJcIi5jb25jYXQodG9nZ2xlXzEgPyB0b2dnbGVfMS0tIDogdG9nZ2xlXzErKyk7IH07XG4gICAgfVxuICAgIGNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcbiAgICB0cmlnZ2VyKCk7XG59O1xuZXhwb3J0IHsgcXVldWVNaWNyb1Rhc2sgfTtcbiIsImltcG9ydCB7IHF1ZXVlTWljcm9UYXNrIH0gZnJvbSAnLi9xdWV1ZU1pY3JvVGFzayc7XG52YXIgcXVldWVSZXNpemVPYnNlcnZlciA9IGZ1bmN0aW9uIChjYikge1xuICAgIHF1ZXVlTWljcm9UYXNrKGZ1bmN0aW9uIFJlc2l6ZU9ic2VydmVyKCkge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2IpO1xuICAgIH0pO1xufTtcbmV4cG9ydCB7IHF1ZXVlUmVzaXplT2JzZXJ2ZXIgfTtcbiIsImltcG9ydCB7IHByb2Nlc3MgfSBmcm9tICcuL3Byb2Nlc3MnO1xuaW1wb3J0IHsgZ2xvYmFsIH0gZnJvbSAnLi9nbG9iYWwnO1xuaW1wb3J0IHsgcXVldWVSZXNpemVPYnNlcnZlciB9IGZyb20gJy4vcXVldWVSZXNpemVPYnNlcnZlcic7XG52YXIgd2F0Y2hpbmcgPSAwO1xudmFyIGlzV2F0Y2hpbmcgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAhIXdhdGNoaW5nOyB9O1xudmFyIENBVENIX1BFUklPRCA9IDI1MDtcbnZhciBvYnNlcnZlckNvbmZpZyA9IHsgYXR0cmlidXRlczogdHJ1ZSwgY2hhcmFjdGVyRGF0YTogdHJ1ZSwgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH07XG52YXIgZXZlbnRzID0gW1xuICAgICdyZXNpemUnLFxuICAgICdsb2FkJyxcbiAgICAndHJhbnNpdGlvbmVuZCcsXG4gICAgJ2FuaW1hdGlvbmVuZCcsXG4gICAgJ2FuaW1hdGlvbnN0YXJ0JyxcbiAgICAnYW5pbWF0aW9uaXRlcmF0aW9uJyxcbiAgICAna2V5dXAnLFxuICAgICdrZXlkb3duJyxcbiAgICAnbW91c2V1cCcsXG4gICAgJ21vdXNlZG93bicsXG4gICAgJ21vdXNlb3ZlcicsXG4gICAgJ21vdXNlb3V0JyxcbiAgICAnYmx1cicsXG4gICAgJ2ZvY3VzJ1xuXTtcbnZhciB0aW1lID0gZnVuY3Rpb24gKHRpbWVvdXQpIHtcbiAgICBpZiAodGltZW91dCA9PT0gdm9pZCAwKSB7IHRpbWVvdXQgPSAwOyB9XG4gICAgcmV0dXJuIERhdGUubm93KCkgKyB0aW1lb3V0O1xufTtcbnZhciBzY2hlZHVsZWQgPSBmYWxzZTtcbnZhciBTY2hlZHVsZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNjaGVkdWxlcigpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5zdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5saXN0ZW5lciA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLnNjaGVkdWxlKCk7IH07XG4gICAgfVxuICAgIFNjaGVkdWxlci5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKHRpbWVvdXQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRpbWVvdXQgPT09IHZvaWQgMCkgeyB0aW1lb3V0ID0gQ0FUQ0hfUEVSSU9EOyB9XG4gICAgICAgIGlmIChzY2hlZHVsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzY2hlZHVsZWQgPSB0cnVlO1xuICAgICAgICB2YXIgdW50aWwgPSB0aW1lKHRpbWVvdXQpO1xuICAgICAgICBxdWV1ZVJlc2l6ZU9ic2VydmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBlbGVtZW50c0hhdmVSZXNpemVkID0gZmFsc2U7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnRzSGF2ZVJlc2l6ZWQgPSBwcm9jZXNzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICBzY2hlZHVsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aW1lb3V0ID0gdW50aWwgLSB0aW1lKCk7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1dhdGNoaW5nKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudHNIYXZlUmVzaXplZCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5ydW4oMTAwMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRpbWVvdXQgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnJ1bih0aW1lb3V0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFNjaGVkdWxlci5wcm90b3R5cGUuc2NoZWR1bGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICB0aGlzLnJ1bigpO1xuICAgIH07XG4gICAgU2NoZWR1bGVyLnByb3RvdHlwZS5vYnNlcnZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgY2IgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5vYnNlcnZlciAmJiBfdGhpcy5vYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmJvZHksIG9ic2VydmVyQ29uZmlnKTsgfTtcbiAgICAgICAgZG9jdW1lbnQuYm9keSA/IGNiKCkgOiBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGNiKTtcbiAgICB9O1xuICAgIFNjaGVkdWxlci5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLnN0b3BwZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcHBlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5vYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXMubGlzdGVuZXIpO1xuICAgICAgICAgICAgdGhpcy5vYnNlcnZlKCk7XG4gICAgICAgICAgICBldmVudHMuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgX3RoaXMubGlzdGVuZXIsIHRydWUpOyB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU2NoZWR1bGVyLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoIXRoaXMuc3RvcHBlZCkge1xuICAgICAgICAgICAgdGhpcy5vYnNlcnZlciAmJiB0aGlzLm9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIGV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBnbG9iYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihuYW1lLCBfdGhpcy5saXN0ZW5lciwgdHJ1ZSk7IH0pO1xuICAgICAgICAgICAgdGhpcy5zdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIFNjaGVkdWxlcjtcbn0oKSk7XG52YXIgc2NoZWR1bGVyID0gbmV3IFNjaGVkdWxlcigpO1xudmFyIHVwZGF0ZUNvdW50ID0gZnVuY3Rpb24gKG4pIHtcbiAgICAhd2F0Y2hpbmcgJiYgbiA+IDAgJiYgc2NoZWR1bGVyLnN0YXJ0KCk7XG4gICAgd2F0Y2hpbmcgKz0gbjtcbiAgICAhd2F0Y2hpbmcgJiYgc2NoZWR1bGVyLnN0b3AoKTtcbn07XG5leHBvcnQgeyBzY2hlZHVsZXIsIHVwZGF0ZUNvdW50IH07XG4iLCJpbXBvcnQgeyBSZXNpemVPYnNlcnZlckJveE9wdGlvbnMgfSBmcm9tICcuL1Jlc2l6ZU9ic2VydmVyQm94T3B0aW9ucyc7XG5pbXBvcnQgeyBjYWxjdWxhdGVCb3hTaXplIH0gZnJvbSAnLi9hbGdvcml0aG1zL2NhbGN1bGF0ZUJveFNpemUnO1xuaW1wb3J0IHsgaXNTVkcsIGlzUmVwbGFjZWRFbGVtZW50IH0gZnJvbSAnLi91dGlscy9lbGVtZW50JztcbnZhciBza2lwTm90aWZ5T25FbGVtZW50ID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIHJldHVybiAhaXNTVkcodGFyZ2V0KVxuICAgICAgICAmJiAhaXNSZXBsYWNlZEVsZW1lbnQodGFyZ2V0KVxuICAgICAgICAmJiBnZXRDb21wdXRlZFN0eWxlKHRhcmdldCkuZGlzcGxheSA9PT0gJ2lubGluZSc7XG59O1xudmFyIFJlc2l6ZU9ic2VydmF0aW9uID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBSZXNpemVPYnNlcnZhdGlvbih0YXJnZXQsIG9ic2VydmVkQm94KSB7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICB0aGlzLm9ic2VydmVkQm94ID0gb2JzZXJ2ZWRCb3ggfHwgUmVzaXplT2JzZXJ2ZXJCb3hPcHRpb25zLkNPTlRFTlRfQk9YO1xuICAgICAgICB0aGlzLmxhc3RSZXBvcnRlZFNpemUgPSB7XG4gICAgICAgICAgICBpbmxpbmVTaXplOiAwLFxuICAgICAgICAgICAgYmxvY2tTaXplOiAwXG4gICAgICAgIH07XG4gICAgfVxuICAgIFJlc2l6ZU9ic2VydmF0aW9uLnByb3RvdHlwZS5pc0FjdGl2ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHNpemUgPSBjYWxjdWxhdGVCb3hTaXplKHRoaXMudGFyZ2V0LCB0aGlzLm9ic2VydmVkQm94LCB0cnVlKTtcbiAgICAgICAgaWYgKHNraXBOb3RpZnlPbkVsZW1lbnQodGhpcy50YXJnZXQpKSB7XG4gICAgICAgICAgICB0aGlzLmxhc3RSZXBvcnRlZFNpemUgPSBzaXplO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmxhc3RSZXBvcnRlZFNpemUuaW5saW5lU2l6ZSAhPT0gc2l6ZS5pbmxpbmVTaXplXG4gICAgICAgICAgICB8fCB0aGlzLmxhc3RSZXBvcnRlZFNpemUuYmxvY2tTaXplICE9PSBzaXplLmJsb2NrU2l6ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgcmV0dXJuIFJlc2l6ZU9ic2VydmF0aW9uO1xufSgpKTtcbmV4cG9ydCB7IFJlc2l6ZU9ic2VydmF0aW9uIH07XG4iLCJ2YXIgUmVzaXplT2JzZXJ2ZXJEZXRhaWwgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFJlc2l6ZU9ic2VydmVyRGV0YWlsKHJlc2l6ZU9ic2VydmVyLCBjYWxsYmFjaykge1xuICAgICAgICB0aGlzLmFjdGl2ZVRhcmdldHMgPSBbXTtcbiAgICAgICAgdGhpcy5za2lwcGVkVGFyZ2V0cyA9IFtdO1xuICAgICAgICB0aGlzLm9ic2VydmF0aW9uVGFyZ2V0cyA9IFtdO1xuICAgICAgICB0aGlzLm9ic2VydmVyID0gcmVzaXplT2JzZXJ2ZXI7XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICB9XG4gICAgcmV0dXJuIFJlc2l6ZU9ic2VydmVyRGV0YWlsO1xufSgpKTtcbmV4cG9ydCB7IFJlc2l6ZU9ic2VydmVyRGV0YWlsIH07XG4iLCJpbXBvcnQgeyBzY2hlZHVsZXIsIHVwZGF0ZUNvdW50IH0gZnJvbSAnLi91dGlscy9zY2hlZHVsZXInO1xuaW1wb3J0IHsgUmVzaXplT2JzZXJ2YXRpb24gfSBmcm9tICcuL1Jlc2l6ZU9ic2VydmF0aW9uJztcbmltcG9ydCB7IFJlc2l6ZU9ic2VydmVyRGV0YWlsIH0gZnJvbSAnLi9SZXNpemVPYnNlcnZlckRldGFpbCc7XG5pbXBvcnQgeyByZXNpemVPYnNlcnZlcnMgfSBmcm9tICcuL3V0aWxzL3Jlc2l6ZU9ic2VydmVycyc7XG52YXIgb2JzZXJ2ZXJNYXAgPSBuZXcgV2Vha01hcCgpO1xudmFyIGdldE9ic2VydmF0aW9uSW5kZXggPSBmdW5jdGlvbiAob2JzZXJ2YXRpb25UYXJnZXRzLCB0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9ic2VydmF0aW9uVGFyZ2V0cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAob2JzZXJ2YXRpb25UYXJnZXRzW2ldLnRhcmdldCA9PT0gdGFyZ2V0KSB7XG4gICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gLTE7XG59O1xudmFyIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyKCkge1xuICAgIH1cbiAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIuY29ubmVjdCA9IGZ1bmN0aW9uIChyZXNpemVPYnNlcnZlciwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIGRldGFpbCA9IG5ldyBSZXNpemVPYnNlcnZlckRldGFpbChyZXNpemVPYnNlcnZlciwgY2FsbGJhY2spO1xuICAgICAgICBvYnNlcnZlck1hcC5zZXQocmVzaXplT2JzZXJ2ZXIsIGRldGFpbCk7XG4gICAgfTtcbiAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIub2JzZXJ2ZSA9IGZ1bmN0aW9uIChyZXNpemVPYnNlcnZlciwgdGFyZ2V0LCBvcHRpb25zKSB7XG4gICAgICAgIHZhciBkZXRhaWwgPSBvYnNlcnZlck1hcC5nZXQocmVzaXplT2JzZXJ2ZXIpO1xuICAgICAgICB2YXIgZmlyc3RPYnNlcnZhdGlvbiA9IGRldGFpbC5vYnNlcnZhdGlvblRhcmdldHMubGVuZ3RoID09PSAwO1xuICAgICAgICBpZiAoZ2V0T2JzZXJ2YXRpb25JbmRleChkZXRhaWwub2JzZXJ2YXRpb25UYXJnZXRzLCB0YXJnZXQpIDwgMCkge1xuICAgICAgICAgICAgZmlyc3RPYnNlcnZhdGlvbiAmJiByZXNpemVPYnNlcnZlcnMucHVzaChkZXRhaWwpO1xuICAgICAgICAgICAgZGV0YWlsLm9ic2VydmF0aW9uVGFyZ2V0cy5wdXNoKG5ldyBSZXNpemVPYnNlcnZhdGlvbih0YXJnZXQsIG9wdGlvbnMgJiYgb3B0aW9ucy5ib3gpKTtcbiAgICAgICAgICAgIHVwZGF0ZUNvdW50KDEpO1xuICAgICAgICAgICAgc2NoZWR1bGVyLnNjaGVkdWxlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci51bm9ic2VydmUgPSBmdW5jdGlvbiAocmVzaXplT2JzZXJ2ZXIsIHRhcmdldCkge1xuICAgICAgICB2YXIgZGV0YWlsID0gb2JzZXJ2ZXJNYXAuZ2V0KHJlc2l6ZU9ic2VydmVyKTtcbiAgICAgICAgdmFyIGluZGV4ID0gZ2V0T2JzZXJ2YXRpb25JbmRleChkZXRhaWwub2JzZXJ2YXRpb25UYXJnZXRzLCB0YXJnZXQpO1xuICAgICAgICB2YXIgbGFzdE9ic2VydmF0aW9uID0gZGV0YWlsLm9ic2VydmF0aW9uVGFyZ2V0cy5sZW5ndGggPT09IDE7XG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgICBsYXN0T2JzZXJ2YXRpb24gJiYgcmVzaXplT2JzZXJ2ZXJzLnNwbGljZShyZXNpemVPYnNlcnZlcnMuaW5kZXhPZihkZXRhaWwpLCAxKTtcbiAgICAgICAgICAgIGRldGFpbC5vYnNlcnZhdGlvblRhcmdldHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIHVwZGF0ZUNvdW50KC0xKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLmRpc2Nvbm5lY3QgPSBmdW5jdGlvbiAocmVzaXplT2JzZXJ2ZXIpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGRldGFpbCA9IG9ic2VydmVyTWFwLmdldChyZXNpemVPYnNlcnZlcik7XG4gICAgICAgIGRldGFpbC5vYnNlcnZhdGlvblRhcmdldHMuc2xpY2UoKS5mb3JFYWNoKGZ1bmN0aW9uIChvdCkgeyByZXR1cm4gX3RoaXMudW5vYnNlcnZlKHJlc2l6ZU9ic2VydmVyLCBvdC50YXJnZXQpOyB9KTtcbiAgICAgICAgZGV0YWlsLmFjdGl2ZVRhcmdldHMuc3BsaWNlKDAsIGRldGFpbC5hY3RpdmVUYXJnZXRzLmxlbmd0aCk7XG4gICAgfTtcbiAgICByZXR1cm4gUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyO1xufSgpKTtcbmV4cG9ydCB7IFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlciB9O1xuIiwiaW1wb3J0IHsgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyIH0gZnJvbSAnLi9SZXNpemVPYnNlcnZlckNvbnRyb2xsZXInO1xuaW1wb3J0IHsgaXNFbGVtZW50IH0gZnJvbSAnLi91dGlscy9lbGVtZW50JztcbnZhciBSZXNpemVPYnNlcnZlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUmVzaXplT2JzZXJ2ZXIoY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJGYWlsZWQgdG8gY29uc3RydWN0ICdSZXNpemVPYnNlcnZlcic6IDEgYXJndW1lbnQgcmVxdWlyZWQsIGJ1dCBvbmx5IDAgcHJlc2VudC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkZhaWxlZCB0byBjb25zdHJ1Y3QgJ1Jlc2l6ZU9ic2VydmVyJzogVGhlIGNhbGxiYWNrIHByb3ZpZGVkIGFzIHBhcmFtZXRlciAxIGlzIG5vdCBhIGZ1bmN0aW9uLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIuY29ubmVjdCh0aGlzLCBjYWxsYmFjayk7XG4gICAgfVxuICAgIFJlc2l6ZU9ic2VydmVyLnByb3RvdHlwZS5vYnNlcnZlID0gZnVuY3Rpb24gKHRhcmdldCwgb3B0aW9ucykge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkZhaWxlZCB0byBleGVjdXRlICdvYnNlcnZlJyBvbiAnUmVzaXplT2JzZXJ2ZXInOiAxIGFyZ3VtZW50IHJlcXVpcmVkLCBidXQgb25seSAwIHByZXNlbnQuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNFbGVtZW50KHRhcmdldCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJGYWlsZWQgdG8gZXhlY3V0ZSAnb2JzZXJ2ZScgb24gJ1Jlc2l6ZU9ic2VydmVyJzogcGFyYW1ldGVyIDEgaXMgbm90IG9mIHR5cGUgJ0VsZW1lbnRcIik7XG4gICAgICAgIH1cbiAgICAgICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLm9ic2VydmUodGhpcywgdGFyZ2V0LCBvcHRpb25zKTtcbiAgICB9O1xuICAgIFJlc2l6ZU9ic2VydmVyLnByb3RvdHlwZS51bm9ic2VydmUgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRmFpbGVkIHRvIGV4ZWN1dGUgJ3Vub2JzZXJ2ZScgb24gJ1Jlc2l6ZU9ic2VydmVyJzogMSBhcmd1bWVudCByZXF1aXJlZCwgYnV0IG9ubHkgMCBwcmVzZW50LlwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzRWxlbWVudCh0YXJnZXQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRmFpbGVkIHRvIGV4ZWN1dGUgJ3Vub2JzZXJ2ZScgb24gJ1Jlc2l6ZU9ic2VydmVyJzogcGFyYW1ldGVyIDEgaXMgbm90IG9mIHR5cGUgJ0VsZW1lbnRcIik7XG4gICAgICAgIH1cbiAgICAgICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLnVub2JzZXJ2ZSh0aGlzLCB0YXJnZXQpO1xuICAgIH07XG4gICAgUmVzaXplT2JzZXJ2ZXIucHJvdG90eXBlLmRpc2Nvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5kaXNjb25uZWN0KHRoaXMpO1xuICAgIH07XG4gICAgUmVzaXplT2JzZXJ2ZXIudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAnZnVuY3Rpb24gUmVzaXplT2JzZXJ2ZXIgKCkgeyBbcG9seWZpbGwgY29kZV0gfSc7XG4gICAgfTtcbiAgICByZXR1cm4gUmVzaXplT2JzZXJ2ZXI7XG59KCkpO1xuZXhwb3J0IHsgUmVzaXplT2JzZXJ2ZXIgfTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQsIGltbWVkaWF0ZSkge1xuICBsZXQgdGltZW91dFxuXG4gIHJldHVybiBmdW5jdGlvbiBleGVjdXRlZEZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzXG4gICAgY29uc3QgYXJncyA9IGFyZ3VtZW50c1xuXG4gICAgY29uc3QgbGF0ZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgIHRpbWVvdXQgPSBudWxsXG4gICAgICBpZiAoIWltbWVkaWF0ZSkgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKVxuICAgIH1cblxuICAgIGNvbnN0IGNhbGxOb3cgPSBpbW1lZGlhdGUgJiYgIXRpbWVvdXRcblxuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KVxuXG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpXG5cbiAgICBpZiAoY2FsbE5vdykgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKVxuICB9XG59XG4iLCJpbXBvcnQgeyBSZXNpemVPYnNlcnZlciBhcyBQb2x5ZmlsbCB9IGZyb20gJ0BqdWdnbGUvcmVzaXplLW9ic2VydmVyJ1xuY29uc3QgUmVzaXplT2JzZXJ2ZXIgPSB3aW5kb3cuUmVzaXplT2JzZXJ2ZXIgfHwgUG9seWZpbGxcbmltcG9ydCBkZWJvdW5jZSBmcm9tICcuL3V0aWxzL2RlYm91bmNlJ1xuXG5pbXBvcnQgcmVtb3ZlSXRlbSBmcm9tICcuL3V0aWxzL3JlbW92ZS1hcnJheS1pdGVtJ1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50RW1pdHRlcidcbmltcG9ydCB7XG4gIGdldERpc3RhbmNlLFxuICBpbmRleE9mTmVhcmVzdFBvaW50XG59IGZyb20gJy4vZ2VvbWV0cnkvZGlzdGFuY2VzJ1xuXG5pbXBvcnQgRHJhZ2dhYmxlIGZyb20gJy4vZHJhZ2dhYmxlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0IGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoZHJhZ2dhYmxlcywgb3B0aW9ucz17fSkge1xuICAgIHN1cGVyKG9wdGlvbnMpXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICB0aW1lRW5kOiAyMDAsXG4gICAgICB0aW1lRXhjYW5nZTogNDAwLFxuICAgICAgcmFkaXVzOiAzMFxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0aGlzLmNvbnRhaW5lciA9IG9wdGlvbnMuY29udGFpbmVyXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gZHJhZ2dhYmxlc1xuICAgIHRoaXMuY2hhbmdlZER1cmluZ0l0ZXJhdGlvbiA9IGZhbHNlXG5cbiAgICB0aGlzLnJlc2l6ZU9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKGRlYm91bmNlKHRoaXMub25SZXNpemUuYmluZCh0aGlzKSwgMTAwKSlcblxuICAgIGlmICh0aGlzLmNvbnRhaW5lcikge1xuICAgICAgdGhpcy5yZXNpemVPYnNlcnZlci5vYnNlcnZlKHRoaXMuY29udGFpbmVyKVxuICAgIH1cblxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBvblJlc2l6ZSgpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLnJlb3JkZXJPbkNoYW5nZSkgdGhpcy5yZXNldCgpXG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGQpID0+IGQuc3RhcnRQb3NpdGlvbmluZygpKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLl9lbmFibGUgPSB0cnVlXG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gdGhpcy5pbml0RHJhZ2dhYmxlKGRyYWdnYWJsZSkpXG4gIH1cblxuICBpbml0RHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIGRyYWdnYWJsZS5lbmFibGUgPSB0aGlzLl9lbmFibGVcbiAgICBkcmFnZ2FibGUub24oJ2RyYWc6bW92ZScsICgpID0+IHRoaXMub25Nb3ZlKGRyYWdnYWJsZSkpXG4gICAgZHJhZ2dhYmxlLmRyYWdFbmRBY3Rpb24gPSAoKSA9PiB7XG4gICAgICBkcmFnZ2FibGUucGluUG9zaXRpb24oZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uLCB0aGlzLm9wdGlvbnMudGltZUVuZClcbiAgICAgIHRoaXMub25FbmQoZHJhZ2dhYmxlKVxuICAgIH1cbiAgICB0aGlzLnJlc2l6ZU9ic2VydmVyLm9ic2VydmUoZHJhZ2dhYmxlLmVsZW1lbnQpXG4gIH1cblxuICByZWxlYXNlRHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIudW5vYnNlcnZlKGRyYWdnYWJsZS5lbGVtZW50KVxuICAgIGRyYWdnYWJsZS5yZXNldE9uKCdkcmFnOmVuZCcpXG4gICAgZHJhZ2dhYmxlLnJlc2V0T24oJ2RyYWc6bW92ZScpXG4gICAgcmVtb3ZlSXRlbSh0aGlzLmRyYWdnYWJsZXMsIGRyYWdnYWJsZSlcbiAgfVxuXG4gIG9uTW92ZShkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBzb3J0ZWREcmFnZ2FibGVzID0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcbiAgICBjb25zdCBwaW5uZWRQb3NpdGlvbnMgPSBzb3J0ZWREcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24pXG5cbiAgICBjb25zdCBjdXJyZW50SW5kZXggPSBzb3J0ZWREcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKVxuICAgIGNvbnN0IHRhcmdldEluZGV4ID0gaW5kZXhPZk5lYXJlc3RQb2ludChwaW5uZWRQb3NpdGlvbnMsIGRyYWdnYWJsZS5wb3NpdGlvbiwgdGhpcy5vcHRpb25zLnJhZGl1cywgdGhpcy5kaXN0YW5jZUZ1bmMpXG5cbiAgICBpZiAodGFyZ2V0SW5kZXggIT09IC0xICYmIGN1cnJlbnRJbmRleCAhPT0gdGFyZ2V0SW5kZXgpIHtcbiAgICAgIGlmICh0YXJnZXRJbmRleCA8IGN1cnJlbnRJbmRleCkge1xuICAgICAgICBmb3IgKGxldCBpPXRhcmdldEluZGV4OyBpPGN1cnJlbnRJbmRleDsgaSsrKSB7XG4gICAgICAgICAgc29ydGVkRHJhZ2dhYmxlc1tpXS5waW5Qb3NpdGlvbihwaW5uZWRQb3NpdGlvbnNbaSsxXSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGxldCBpPWN1cnJlbnRJbmRleDsgaTx0YXJnZXRJbmRleDsgaSsrKSB7XG4gICAgICAgICAgc29ydGVkRHJhZ2dhYmxlc1tpKzFdLnBpblBvc2l0aW9uKHBpbm5lZFBvc2l0aW9uc1tpXSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChkcmFnZ2FibGUubmF0aXZlRHJhZ0FuZERyb3ApIHtcbiAgICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKHBpbm5lZFBvc2l0aW9uc1t0YXJnZXRJbmRleF0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24gPSBwaW5uZWRQb3NpdGlvbnNbdGFyZ2V0SW5kZXhdXG4gICAgICB9XG5cbiAgICAgIHRoaXMuY2hhbmdlZER1cmluZ0l0ZXJhdGlvbiA9IHRydWVcbiAgICB9XG4gIH1cblxuICBvbkVuZChkcmFnZ2FibGUpIHtcbiAgICBpZiAodGhpcy5jaGFuZ2VkRHVyaW5nSXRlcmF0aW9uKSB7XG4gICAgICB0aGlzLmVtaXQoJ2xpc3Q6Y2hhbmdlJylcbiAgICAgIHRoaXMuY2hhbmdlZER1cmluZ0l0ZXJhdGlvbiA9IGZhbHNlXG5cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucmVvcmRlck9uQ2hhbmdlICYmIHRoaXMub3B0aW9ucy5jb250YWluZXIpIHtcbiAgICAgICAgdGhpcy5yZW9yZGVyRWxlbWVudHMoZHJhZ2dhYmxlKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlb3JkZXJFbGVtZW50cyhtb3ZlZERyYWdnYWJsZSkge1xuICAgIGNvbnN0IHNvcnRlZERyYWdnYWJsZXMgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuICAgIGNvbnN0IGluZGV4ID0gc29ydGVkRHJhZ2dhYmxlcy5pbmRleE9mKG1vdmVkRHJhZ2dhYmxlKVxuICAgIGNvbnN0IG5leHQgPSBzb3J0ZWREcmFnZ2FibGVzW2luZGV4ICsgMV1cblxuICAgIHRoaXMucmVzZXQoKVxuXG4gICAgaWYgKG5leHQpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmluc2VydEJlZm9yZShtb3ZlZERyYWdnYWJsZS5lbGVtZW50LCBuZXh0LmVsZW1lbnQpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKG1vdmVkRHJhZ2dhYmxlLmVsZW1lbnQpXG4gICAgfVxuXG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGQpID0+IGQuc3RhcnRQb3NpdGlvbmluZygpKVxuICAgIHRoaXMuZW1pdCgnbGlzdDpyZW9yZGVyZWQnKVxuICB9XG5cbiAgZ2V0Q3VycmVudFBpbm5lZFBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5kcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24uY2xvbmUoKSlcbiAgfVxuXG4gIGdldFNvcnRlZERyYWdnYWJsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJhZ2dhYmxlcy5zb3J0KHRoaXMuc29ydGluZy5iaW5kKHRoaXMpKVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnJlc2V0UG9zaXRpb25Ub0luaXRpYWwoKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnJlZnJlc2goKSlcbiAgfVxuXG4gIGFkZChkcmFnZ2FibGVzKSB7XG4gICAgaWYgKCEoZHJhZ2dhYmxlcyBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgZHJhZ2dhYmxlcyA9IFtkcmFnZ2FibGVzXVxuICAgIH1cbiAgICBkcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gdGhpcy5pbml0RHJhZ2dhYmxlKGRyYWdnYWJsZSkpXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gdGhpcy5kcmFnZ2FibGVzLmNvbmNhdChkcmFnZ2FibGVzKVxuICB9XG5cbiAgcmVtb3ZlKGRyYWdnYWJsZXMpIHtcbiAgICBjb25zdCBpbml0aWFsUG9zaXRpb25zID0gdGhpcy5kcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uKVxuICAgIGNvbnN0IGxpc3QgPSBbXVxuICAgIGNvbnN0IHNvcnRlZERyYWdnYWJsZXMgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuXG4gICAgaWYgKCEoZHJhZ2dhYmxlcyBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgZHJhZ2dhYmxlcyA9IFtkcmFnZ2FibGVzXVxuICAgIH1cblxuICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB0aGlzLnJlbGVhc2VEcmFnZ2FibGUoZHJhZ2dhYmxlKSlcblxuICAgIGxldCBqID0gMFxuICAgIHNvcnRlZERyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBpZiAodGhpcy5kcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTEpIHtcbiAgICAgICAgaWYgKGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbiAhPT0gaW5pdGlhbFBvc2l0aW9uc1tqXSkge1xuICAgICAgICAgIGRyYWdnYWJsZS5waW5Qb3NpdGlvbihpbml0aWFsUG9zaXRpb25zW2pdLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICAgIH1cbiAgICAgICAgZHJhZ2dhYmxlLmluaXRpYWxQb3NpdGlvbiA9IGluaXRpYWxQb3NpdGlvbnNbal1cbiAgICAgICAgaisrXG4gICAgICAgIGxpc3QucHVzaChkcmFnZ2FibGUpXG4gICAgICB9XG4gICAgfSlcbiAgICB0aGlzLmRyYWdnYWJsZXMgPSBsaXN0XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLnJlbW92ZSh0aGlzLmRyYWdnYWJsZXMuc2xpY2UoKSlcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLmRlc3Ryb3koKSlcbiAgICBpZiAodGhpcy5jb250YWluZXIpIHtcbiAgICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIudW5vYnNlcnZlKHRoaXMuY29udGFpbmVyKVxuICAgIH1cbiAgfVxuXG4gIHNvcnRpbmcoZHJhZ2dhYmxlQSwgZHJhZ2dhYmxlQikge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuc29ydGluZykge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5zb3J0aW5nKGRyYWdnYWJsZUEsIGRyYWdnYWJsZUIpXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChkcmFnZ2FibGVBLnBpbm5lZFBvc2l0aW9uLnkgPCBkcmFnZ2FibGVCLnBpbm5lZFBvc2l0aW9uLnkpIHJldHVybiAtMVxuICAgICAgaWYgKGRyYWdnYWJsZUEucGlubmVkUG9zaXRpb24ueSA+IGRyYWdnYWJsZUIucGlubmVkUG9zaXRpb24ueSkgcmV0dXJuIDFcbiAgICAgIGlmIChkcmFnZ2FibGVBLnBpbm5lZFBvc2l0aW9uLnggPCBkcmFnZ2FibGVCLnBpbm5lZFBvc2l0aW9uLngpIHJldHVybiAtMVxuICAgICAgaWYgKGRyYWdnYWJsZUEucGlubmVkUG9zaXRpb24ueCA+IGRyYWdnYWJsZUIucGlubmVkUG9zaXRpb24ueCkgcmV0dXJuIDFcbiAgICAgIHJldHVybiAwXG4gICAgfVxuICB9XG5cbiAgZ2V0IGRpc3RhbmNlRnVuYygpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmdldERpc3RhbmNlIHx8IGdldERpc3RhbmNlXG4gIH1cblxuICBnZXQgcG9zaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmdldEN1cnJlbnRQaW5uZWRQb3NpdGlvbnMoKVxuICB9XG5cbiAgc2V0IHBvc2l0aW9ucyhwb3NpdGlvbnMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gJ3dyb25nIGFycmF5IGxlbmd0aCdcbiAgICBpZiAocG9zaXRpb25zLmxlbmd0aCA9PT0gdGhpcy5kcmFnZ2FibGVzLmxlbmd0aCkge1xuICAgICAgcG9zaXRpb25zLmZvckVhY2goKHBvaW50LCBpKSA9PiB7XG4gICAgICAgIHRoaXMuZHJhZ2dhYmxlc1tpXS5waW5Qb3NpdGlvbihwb2ludClcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG1lc3NhZ2VcbiAgICB9XG4gIH1cblxuICBnZXQgZW5hYmxlKCkge1xuICAgIHJldHVybiB0aGlzLl9lbmFibGVcbiAgfVxuXG4gIHNldCBlbmFibGUoZW5hYmxlKSB7XG4gICAgdGhpcy5fZW5hYmxlID0gZW5hYmxlXG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLmVuYWJsZSA9IGVuYWJsZVxuICAgIH0pXG4gIH1cblxuICBzdGF0aWMgZmFjdG9yeShjb250YWluZXJFbGVtZW50LCBlbGVtZW50cywgb3B0aW9ucz17fSkge1xuICAgIGNvbnN0IGRyYWdnYWJsZXMgPSBBcnJheS5mcm9tKGVsZW1lbnRzKS5tYXAoKGVsZW1lbnQpID0+IHtcbiAgICAgIHJldHVybiBuZXcgRHJhZ2dhYmxlKGVsZW1lbnQsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBjb250YWluZXI6IGNvbnRhaW5lckVsZW1lbnRcbiAgICAgIH0sIG9wdGlvbnMuZHJhZ2dhYmxlIHx8IHt9KSlcbiAgICB9KVxuXG4gICAgcmV0dXJuIG5ldyBMaXN0KGRyYWdnYWJsZXMsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgY29udGFpbmVyOiBjb250YWluZXJFbGVtZW50XG4gICAgfSwgb3B0aW9ucy5saXN0IHx8IHt9KSlcbiAgfVxufVxuIiwiaW1wb3J0IExpc3QgZnJvbSAnLi9saXN0J1xuaW1wb3J0IHsgaW5kZXhPZk5lYXJlc3RQb2ludCwgZ2V0WURpZmZlcmVuY2UgfSBmcm9tICcuL2dlb21ldHJ5L2Rpc3RhbmNlcydcbmltcG9ydCBQb2ludCBmcm9tICcuL2dlb21ldHJ5L3BvaW50J1xuXG5pbXBvcnQgRHJhZ2dhYmxlIGZyb20gJy4vZHJhZ2dhYmxlJ1xuXG5jb25zdCBhcnJheU1vdmUgPSAoYXJyYXksIGZyb20sIHRvKSA9PiB7XG4gIGFycmF5LnNwbGljZSh0byA8IDAgPyBhcnJheS5sZW5ndGggKyB0byA6IHRvLCAwLCBhcnJheS5zcGxpY2UoZnJvbSwgMSlbMF0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1YmJsaW5nTGlzdCBleHRlbmRzIExpc3Qge1xuICBhdXRvRGV0ZWN0VmVydGljYWxHYXAoKSB7XG4gICAgaWYgKCF0aGlzLl92ZXJ0aWNhbEdhcCAmJiAhdGhpcy5vcHRpb25zLnZlcnRpY2FsR2FwICYmIHRoaXMuZHJhZ2dhYmxlcy5sZW5ndGggPj0gMikge1xuICAgICAgY29uc3Qgc29ydGVkID0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcbiAgICAgIHRoaXMuX3ZlcnRpY2FsR2FwID0gc29ydGVkWzFdLnBpbm5lZFBvc2l0aW9uLnkgLSBzb3J0ZWRbMF0ucGlubmVkUG9zaXRpb24ueSAtIHNvcnRlZFswXS5nZXRTaXplKCkueVxuICAgIH1cbiAgfVxuXG4gIGF1dG9EZXRlY3RTdGFydFBvc2l0aW9uKCkge1xuICAgIGlmICh0aGlzLmRyYWdnYWJsZXMubGVuZ3RoID49IDEgJiYgIXRoaXMuc3RhcnRQb3NpdGlvbikge1xuICAgICAgdGhpcy5zdGFydFBvc2l0aW9uID0gdGhpcy5kcmFnZ2FibGVzWzBdLnBpbm5lZFBvc2l0aW9uXG4gICAgfVxuICB9XG5cbiAgaW5pdERyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICBzdXBlci5pbml0RHJhZ2dhYmxlKGRyYWdnYWJsZSlcbiAgICBkcmFnZ2FibGUub24oJ2RyYWc6c3RhcnQnLCAoKSA9PiB0aGlzLm9uRHJhZ1N0YXJ0KGRyYWdnYWJsZSkpXG4gIH1cblxuICBvbkRyYWdTdGFydChkcmFnZ2FibGUpIHtcbiAgICB0aGlzLmF1dG9EZXRlY3RWZXJ0aWNhbEdhcCgpXG4gICAgdGhpcy5hdXRvRGV0ZWN0U3RhcnRQb3NpdGlvbigpXG4gICAgdGhpcy5jYWNoZWRTb3J0ZWREcmFnZ2FibGVzID0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcbiAgICB0aGlzLmluZGV4T2ZBY3RpdmVEcmFnZ2FibGUgPSB0aGlzLmNhY2hlZFNvcnRlZERyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpXG4gIH1cblxuICBvbk1vdmUoZHJhZ2dhYmxlKSB7XG4gICAgY29uc3QgcHJldkRyYWdnYWJsZSA9IHRoaXMuY2FjaGVkU29ydGVkRHJhZ2dhYmxlc1t0aGlzLmluZGV4T2ZBY3RpdmVEcmFnZ2FibGUgLSAxXVxuICAgIGNvbnN0IG5leHREcmFnZ2FibGUgPSB0aGlzLmNhY2hlZFNvcnRlZERyYWdnYWJsZXNbdGhpcy5pbmRleE9mQWN0aXZlRHJhZ2dhYmxlICsgMV1cbiAgICBjb25zdCBjdXJyZW50UG9zaXRpb24gPSBkcmFnZ2FibGUucGlubmVkUG9zaXRpb25cblxuICAgIGxldCBjdXJyZW50T3JkZXJcbiAgICBsZXQgdGFyZ2V0SW5kZXhcblxuICAgIGlmKGRyYWdnYWJsZS51cERpcmVjdGlvbiAmJiBwcmV2RHJhZ2dhYmxlKSB7XG4gICAgICBjdXJyZW50T3JkZXIgPSBbcHJldkRyYWdnYWJsZSwgZHJhZ2dhYmxlXS5tYXAoKGQpID0+IGQucGlubmVkUG9zaXRpb24pXG4gICAgICB0YXJnZXRJbmRleCA9IGluZGV4T2ZOZWFyZXN0UG9pbnQoY3VycmVudE9yZGVyLCBkcmFnZ2FibGUucG9zaXRpb24sIDEwMDAwLCB0aGlzLmRpc3RhbmNlRnVuYylcblxuICAgICAgaWYgKHRhcmdldEluZGV4ID09PSAwKSB7XG4gICAgICAgIGlmKGRyYWdnYWJsZS5zaG91bGRVc2VOYXRpdmVEcmFnQW5kRHJvcCgpKSB7XG4gICAgICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKHByZXZEcmFnZ2FibGUucGlubmVkUG9zaXRpb24pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uID0gcHJldkRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbi5jbG9uZSgpXG4gICAgICAgIH1cbiAgICAgICAgcHJldkRyYWdnYWJsZS5waW5Qb3NpdGlvbihuZXcgUG9pbnQoXG4gICAgICAgICAgY3VycmVudFBvc2l0aW9uLngsXG4gICAgICAgICAgZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uLnkgKyBkcmFnZ2FibGUuZ2V0U2l6ZSgpLnkgKyB0aGlzLnZlcnRpY2FsR2FwXG4gICAgICAgICksIHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSlcbiAgICAgICAgYXJyYXlNb3ZlKHRoaXMuY2FjaGVkU29ydGVkRHJhZ2dhYmxlcywgdGhpcy5pbmRleE9mQWN0aXZlRHJhZ2dhYmxlLS0sIHRoaXMuaW5kZXhPZkFjdGl2ZURyYWdnYWJsZSlcbiAgICAgICAgdGhpcy5vbk1vdmUoZHJhZ2dhYmxlKVxuICAgICAgICB0aGlzLmNoYW5nZWREdXJpbmdJdGVyYXRpb24gPSB0cnVlXG4gICAgICB9XG4gICAgfSBlbHNlIGlmKGRyYWdnYWJsZS5kb3duRGlyZWN0aW9uICYmIG5leHREcmFnZ2FibGUpIHtcbiAgICAgIGN1cnJlbnRPcmRlciA9IFtkcmFnZ2FibGUsIG5leHREcmFnZ2FibGVdLm1hcCgoZCkgPT4gZC5waW5uZWRQb3NpdGlvbilcbiAgICAgIHRhcmdldEluZGV4ID0gaW5kZXhPZk5lYXJlc3RQb2ludChjdXJyZW50T3JkZXIsIGRyYWdnYWJsZS5wb3NpdGlvbiwgMTAwMDAsIHRoaXMuZGlzdGFuY2VGdW5jKVxuXG4gICAgICBpZih0YXJnZXRJbmRleCA9PT0gMSkge1xuICAgICAgICBuZXh0RHJhZ2dhYmxlLnBpblBvc2l0aW9uKGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbiwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICBjb25zdCBkcmFnZ2FibGVOZXdQb3NpdGlvbiA9IG5ldyBQb2ludChcbiAgICAgICAgICBuZXh0RHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uLngsXG4gICAgICAgICAgbmV4dERyYWdnYWJsZS5waW5uZWRQb3NpdGlvbi55ICsgbmV4dERyYWdnYWJsZS5nZXRTaXplKCkueSArIHRoaXMudmVydGljYWxHYXBcbiAgICAgICAgKVxuICAgICAgICBpZihkcmFnZ2FibGUuc2hvdWxkVXNlTmF0aXZlRHJhZ0FuZERyb3AoKSkge1xuICAgICAgICAgIGRyYWdnYWJsZS5waW5Qb3NpdGlvbihkcmFnZ2FibGVOZXdQb3NpdGlvbilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24gPSBkcmFnZ2FibGVOZXdQb3NpdGlvblxuICAgICAgICB9XG4gICAgICAgIGFycmF5TW92ZSh0aGlzLmNhY2hlZFNvcnRlZERyYWdnYWJsZXMsIHRoaXMuaW5kZXhPZkFjdGl2ZURyYWdnYWJsZSsrLCB0aGlzLmluZGV4T2ZBY3RpdmVEcmFnZ2FibGUpXG4gICAgICAgIHRoaXMub25Nb3ZlKGRyYWdnYWJsZSlcbiAgICAgICAgdGhpcy5jaGFuZ2VkRHVyaW5nSXRlcmF0aW9uID0gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGJ1YmJsaW5nKHNvcnRlZERyYWdnYWJsZXMsIGN1cnJlbnREcmFnZ2FibGUpIHtcbiAgICBjb25zdCBjdXJyZW50UG9zaXRpb24gPSB0aGlzLnN0YXJ0UG9zaXRpb24uY2xvbmUoKVxuICAgIHNvcnRlZERyYWdnYWJsZXMgfHw9IHRoaXMuZ2V0U29ydGVkRHJhZ2dhYmxlcygpXG5cbiAgICBzb3J0ZWREcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgaWYgKCFkcmFnZ2FibGUucGlubmVkUG9zaXRpb24uY29tcGFyZShjdXJyZW50UG9zaXRpb24pKSB7XG4gICAgICAgIGlmIChkcmFnZ2FibGUgPT09IGN1cnJlbnREcmFnZ2FibGUgJiYgIWN1cnJlbnREcmFnZ2FibGUuc2hvdWxkVXNlTmF0aXZlRHJhZ0FuZERyb3AoKSkge1xuICAgICAgICAgIGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbiA9IGN1cnJlbnRQb3NpdGlvbi5jbG9uZSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKGN1cnJlbnRQb3NpdGlvbiwgKGRyYWdnYWJsZSA9PT0gY3VycmVudERyYWdnYWJsZSkgPyAwIDogdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGN1cnJlbnRQb3NpdGlvbi55ID0gY3VycmVudFBvc2l0aW9uLnkgKyBkcmFnZ2FibGUuZ2V0U2l6ZSgpLnkgKyB0aGlzLnZlcnRpY2FsR2FwXG4gICAgfSlcbiAgfVxuXG4gIHJlbW92ZShkcmFnZ2FibGVzKSB7XG4gICAgaWYgKCEoZHJhZ2dhYmxlcyBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgZHJhZ2dhYmxlcyA9IFtkcmFnZ2FibGVzXVxuICAgIH1cblxuICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB0aGlzLnJlbGVhc2VEcmFnZ2FibGUoZHJhZ2dhYmxlKSlcbiAgICB0aGlzLmRyYWdnYWJsZXMgPSB0aGlzLmRyYWdnYWJsZXMuZmlsdGVyKChkKSA9PiAhZHJhZ2dhYmxlcy5pbmNsdWRlcyhkKSlcblxuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkKSA9PiBkLnN0YXJ0UG9zaXRpb25pbmcoKSlcblxuICAgIGlmKHRoaXMuZHJhZ2dhYmxlcy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmF1dG9EZXRlY3RWZXJ0aWNhbEdhcCgpXG4gICAgICB0aGlzLmF1dG9EZXRlY3RTdGFydFBvc2l0aW9uKClcbiAgICAgIHRoaXMuYnViYmxpbmcoKVxuICAgIH1cbiAgfVxuXG4gIGdldCBkaXN0YW5jZUZ1bmMoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5nZXREaXN0YW5jZSB8fCBnZXRZRGlmZmVyZW5jZVxuICB9XG5cbiAgZ2V0IHZlcnRpY2FsR2FwKCkge1xuICAgIGlmKHRoaXMub3B0aW9ucy52ZXJ0aWNhbEdhcCkge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy52ZXJ0aWNhbEdhcFxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmF1dG9EZXRlY3RWZXJ0aWNhbEdhcCgpXG4gICAgICByZXR1cm4gdGhpcy5fdmVydGljYWxHYXAgfHwgMFxuICAgIH1cbiAgfVxuXG4gIHNldCB2ZXJ0aWNhbEdhcChnYXBWYWx1ZSkge1xuICAgIHRoaXMub3B0aW9ucy52ZXJ0aWNhbEdhcCA9IGdhcFZhbHVlXG4gIH1cblxuICBzdGF0aWMgZmFjdG9yeShjb250YWluZXJFbGVtZW50LCBlbGVtZW50cywgb3B0aW9ucz17fSkge1xuICAgIGNvbnN0IGRyYWdnYWJsZXMgPSBBcnJheS5mcm9tKGVsZW1lbnRzKS5tYXAoKGVsZW1lbnQpID0+IHtcbiAgICAgIHJldHVybiBuZXcgRHJhZ2dhYmxlKGVsZW1lbnQsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBjb250YWluZXI6IGNvbnRhaW5lckVsZW1lbnRcbiAgICAgIH0sIG9wdGlvbnMuZHJhZ2dhYmxlIHx8IHt9KSlcbiAgICB9KVxuXG4gICAgcmV0dXJuIG5ldyBCdWJibGluZ0xpc3QoZHJhZ2dhYmxlcywgT2JqZWN0LmFzc2lnbih7XG4gICAgICBjb250YWluZXI6IGNvbnRhaW5lckVsZW1lbnRcbiAgICB9LCBvcHRpb25zLmxpc3QgfHwge30pKVxuICB9XG59XG4iXSwibmFtZXMiOlsiUG9pbnQiLCJ4IiwieSIsInAiLCJrIiwiZWxlbWVudCIsInBhcmVudCIsInBhcmVudE5vZGUiLCJlbGVtZW50UmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInBhcmVudFJlY3QiLCJsZWZ0IiwidG9wIiwid2lkdGgiLCJoZWlnaHQiLCJSZWN0YW5nbGUiLCJwb3NpdGlvbiIsInNpemUiLCJhZGQiLCJtdWx0IiwicmVjdCIsIk1hdGgiLCJtaW4iLCJtYXgiLCJzdWIiLCJyZWN0YW5nbGUiLCJpbmNsdWRlUG9pbnQiLCJnZXRQMyIsImF4aXMiLCJzZWxBeGlzIiwiY3Jvc3NSZWN0YW5nbGUiLCJhbmQiLCJ0aGlzQ2VudGVyIiwiZ2V0Q2VudGVyIiwicmVjdENlbnRlciIsInNpZ24iLCJvZmZzZXQiLCJlbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInN0eWxlIiwiaXNDb25zaWRlclRyYW5zbGF0ZSIsImVsZW1lbnRPZmZzZXQiLCJlbGVtZW50U2l6ZSIsImdldERlZmF1bHRDb250YWluZXIiLCJjb250YWluZXIiLCJ3aW5kb3ciLCJnZXRDb21wdXRlZFN0eWxlIiwidGFnTmFtZSIsIkV2ZW50RW1pdHRlciIsIm9wdGlvbnMiLCJldmVudHMiLCJvbiIsIk9iamVjdCIsImVudHJpZXMiLCJldmVudE5hbWUiLCJmbiIsImludGVycnVwdGVkIiwiYXJncyIsInNsaWNlIiwiY2FsbCIsImFyZ3VtZW50cyIsImZ1bmMiLCJwdXNoIiwidW5zaGlmdCIsImluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsImdldERpc3RhbmNlIiwicDEiLCJwMiIsImR4IiwiZHkiLCJzcXJ0IiwiZ2V0WERpZmZlcmVuY2UiLCJhYnMiLCJnZXRZRGlmZmVyZW5jZSIsInRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3RvcnkiLCJwb3ciLCJpbmRleE9mTmVhcmVzdFBvaW50IiwiYXJyIiwidmFsIiwicmFkaXVzIiwiZ2V0RGlzdGFuY2VGdW5jIiwiaSIsInRlbXAiLCJsZW5ndGgiLCJkaXJlY3RDcm9zc2luZyIsIkwxUDEiLCJMMVAyIiwiTDJQMSIsIkwyUDIiLCJrMSIsImsyIiwiYjEiLCJiMiIsImJvdW5kVG9MaW5lIiwiQSIsIkIiLCJQIiwiQVAiLCJBQiIsImFiMiIsImFwX2FiIiwidCIsImdldFBvaW50T25MaW5lQnlMZW5naHQiLCJMUDEiLCJMUDIiLCJsZW5naHQiLCJwZXJjZW50IiwiYWRkUG9pbnRUb0JvdW5kUG9pbnRzIiwiYm91bmRwb2ludHMiLCJwb2ludCIsImlzUmlnaHQiLCJyZXN1bHQiLCJmaWx0ZXIiLCJiUG9pbnQiLCJnZXRBbmdsZURpZmYiLCJhbHBoYSIsImJldGEiLCJtaW5BbmdsZSIsIm1heEFuZ2xlIiwiUEkiLCJnZXRBbmdsZSIsImRpZmYiLCJub3JtYWxpemVBbmdsZSIsImF0YW4yIiwiYm91bmRBbmdsZSIsImRtaW4iLCJkbWF4IiwiZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtIiwiYW5nbGUiLCJjZW50ZXIiLCJjb3MiLCJzaW4iLCJCb3VuZCIsIl9zaXplIiwiaW5zdGFuY2UiLCJib3VuZCIsImJpbmQiLCJCb3VuZFRvUmVjdGFuZ2xlIiwiY2FsY1BvaW50IiwiY2xvbmUiLCJyZWN0UDIiLCJCb3VuZFRvRWxlbWVudCIsImZyb21FbGVtZW50IiwiQm91bmRUb0xpbmVYIiwic3RhcnRZIiwiZW5kWSIsIkJvdW5kVG9MaW5lWSIsInN0YXJ0WCIsImVuZFgiLCJCb3VuZFRvTGluZSIsInN0YXJ0UG9pbnQiLCJlbmRQb2ludCIsInNvbWVLIiwiY29zQmV0YSIsInNpbkJldGEiLCJwb2ludDIiLCJuZXdFbmRQb2ludCIsInBvaW50Q3Jvc3NpbmciLCJCb3VuZFRvQ2lyY2xlIiwiQm91bmRUb0FyYyIsInN0YXJ0QW5nbGUiLCJlbmRBbmdsZSIsIl9zdGFydEFuZ2xlIiwiX2VuZEFuZ2xlIiwiYXJyYXkiLCJyYW5nZSIsInN0YXJ0Iiwic3RvcCIsInN0ZXAiLCJCYXNpY1N0cmF0ZWd5IiwiTm90Q3Jvc3NpbmdTdHJhdGVneSIsInJlY3RhbmdsZUxpc3QiLCJpbmRleGVzT2ZOZXdzIiwic3RhdGljUmVjdGFuZ2xlSW5kZXhlcyIsInJlZHVjZSIsImluZGV4ZXMiLCJfcmVjdCIsImZvckVhY2giLCJyZW1vdmFibGUiLCJpbmRleE9mU3RhdGljIiwic3RhdGljUmVjdCIsIm1vdmVUb0JvdW5kIiwic29tZSIsImJvdW5kUmVjdCIsImdldFNxdWFyZSIsIm9kbERyYWdnYWJsZXNMaXN0IiwibmV3RHJhZ2dhYmxlcyIsImluZGV4T2ZOZXdzIiwiZHJhZ2dhYmxlcyIsImNvbmNhdCIsImRyYWdnYWJsZSIsIkZsb2F0TGVmdFN0cmF0ZWd5IiwiYXNzaWduIiwicGFkZGluZ1RvcExlZnQiLCJwYWRkaW5nQm90dG9tUmlnaHQiLCJ5R2FwQmV0d2VlbkRyYWdnYWJsZXMiLCJnZXRQb3NpdGlvbiIsIl9pbmRleGVzT2ZOZXdzIiwiZ2V0UDIiLCJib3VuZGFyeVBvaW50cyIsInJlY3RJbmRleCIsImlzVmFsaWQiLCJuZXdMaXN0IiwibGlzdE9sZFBvc2l0aW9uIiwibWFwIiwibmV3RHJhZ2dhYmxlIiwiRmxvYXRSaWdodFN0cmF0ZWd5IiwicGFkZGluZ1RvcFJpZ2h0IiwicGFkZGluZ0JvdHRvbUxlZnQiLCJwYWRkaW5nQm90dG9tTmVnTGVmdCIsImdldFA0IiwiYWRkVG9EZWZhdWx0U2NvcGUiLCJ0YXJnZXQiLCJkZWZhdWx0U2NvcGUiLCJhZGRUYXJnZXQiLCJUYXJnZXQiLCJ0aW1lRW5kIiwidGltZUV4Y2FuZ2UiLCJwb3NpdGlvbmluZ1N0cmF0ZWd5Iiwic3RyYXRlZ3kiLCJnZXRSZWN0YW5nbGUiLCJ0YXJnZXRzIiwiZW1pdHRlciIsImVtaXQiLCJzdGFydEJvdW5kaW5nIiwiaW5pdCIsImJvdW5kaW5nIiwiaW5kZXhlc09mTmV3IiwicG9zaXRpb25pbmciLCJvbGREcmFnZ2FibGVzIiwic29ydGluZyIsInJlY3RhbmdsZXMiLCJpbm5lckRyYWdnYWJsZXMiLCJzZXRQb3NpdGlvbiIsImNhdGNoRHJhZ2dhYmxlIiwidGFyZ2V0UmVjdGFuZ2xlIiwiZHJhZ2dhYmxlU3F1YXJlIiwic2NvcGVzIiwic2NvcGUiLCJyZW1vdmVJdGVtIiwibmV3RHJhZ2dhYmxlc0luZGV4IiwiZ2V0U2l6ZSIsImFkZFJlbW92ZU9uTW92ZSIsInRpbWUiLCJtb3ZlIiwiaW5pdGlhbFBvc2l0aW9uIiwicHVzaElubmVyRHJhZ2dhYmxlIiwicmVtb3ZlSGFuZGxlciIsInJlbW92ZSIsInVuc3Vic2NyaWJlIiwiX2NvbnRhaW5lciIsIlNjb3BlIiwiZHJhZ0VuZEFjdGlvbiIsIm9uRW5kIiwic2hvdFRhcmdldHMiLCJzb3J0IiwiYSIsImIiLCJwaW5Qb3NpdGlvbiIsInJlc2V0IiwicmVmcmVzaCIsInBvc2l0aW9ucyIsIm1lc3NhZ2UiLCJ0YXJnZXRJbmRleGVzIiwiY3VycmVudFNjb3BlIiwiYWRkRHJhZ2dhYmxlVG9TY29wZSIsImFkZERyYWdnYWJsZSIsIkRyYWdnYWJsZSIsImludGVycnVwdCIsImFkZFRhcmdldFRvU2NvcGUiLCJwcmVwZW5kT24iLCJjaGVja1N1cHBvcnRQYXNzaXZlRXZlbnRzIiwicGFzc2l2ZVN1cHBvcnRlZCIsImRlZmluZVByb3BlcnR5IiwiZ2V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJfZXJyIiwiaXNTdXBwb3J0UGFzc2l2ZUV2ZW50cyIsInRocm90dGxlIiwid2FpdCIsImxhc3RUaW1lIiwiZXhlY3V0ZWRGdW5jdGlvbiIsImNvbnRleHQiLCJub3ciLCJEYXRlIiwiYXBwbHkiLCJ0aHJvdHRsZWREcmFnT3ZlciIsImNhbGxiYWNrIiwiZHVyYXRpb24iLCJ0aHJvdHRsZWRDYWxsYmFjayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJwYXNzaXZlRmFsc2UiLCJwYXNzaXZlIiwiaXNUb3VjaCIsIm1vdXNlRXZlbnRzIiwiZW5kIiwidG91Y2hFdmVudHMiLCJ0cmFuc2Zvcm1Qcm9wZXJ0eSIsImdldFN0eWxlUHJvcGVydHkiLCJ0cmFuc2l0aW9uUHJvcGVydHkiLCJnZXRUb3VjaEJ5SUQiLCJ0b3VjaElkIiwiY2hhbmdlZFRvdWNoZXMiLCJpZGVudGlmaWVyIiwicHJldmVudERvdWJsZUluaXQiLCJleGlzdGluZyIsImNvcHlTdHlsZXMiLCJzb3VyY2UiLCJkZXN0aW5hdGlvbiIsImNzIiwia2V5IiwiY2hpbGRyZW4iLCJfZW5hYmxlIiwic3RhcnRQb3NpdGlvbmluZyIsInN0YXJ0TGlzdGVuaW5nIiwiX3NldERlZmF1bHRUcmFuc2l0aW9uIiwicGlubmVkUG9zaXRpb24iLCJfZHJhZ1N0YXJ0IiwiZHJhZ1N0YXJ0IiwiX2RyYWdNb3ZlIiwiZHJhZ01vdmUiLCJfZHJhZ0VuZCIsImRyYWdFbmQiLCJfbmF0aXZlRHJhZ1N0YXJ0IiwibmF0aXZlRHJhZ1N0YXJ0IiwiX25hdGl2ZURyYWdPdmVyIiwibmF0aXZlRHJhZ092ZXIiLCJkcmFnT3ZlclRocm90dGxlRHVyYXRpb24iLCJfbmF0aXZlRHJhZ0VuZCIsIm5hdGl2ZURyYWdFbmQiLCJfbmF0aXZlRHJvcCIsIm5hdGl2ZURyb3AiLCJfc2Nyb2xsIiwib25TY3JvbGwiLCJoYW5kbGVyIiwiX3RyYW5zZm9ybVBvc2l0aW9uIiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25Dc3MiLCJ0ZXN0IiwicmVwbGFjZSIsInRyYW5zbGF0ZUNzcyIsInRyYW5zZm9ybSIsInNob3VsZFJlbW92ZVplcm9UcmFuc2xhdGUiLCJpc1NpbGVudCIsIl9zZXRUcmFuc2l0aW9uIiwiX3NldFRyYW5zbGF0ZSIsInNpbGVudCIsIl9wcmV2aW91c0RpcmVjdGlvblBvc2l0aW9uIiwiX3N0YXJ0UG9zaXRpb24iLCJsZWZ0RGlyZWN0aW9uIiwicmlnaHREaXJlY3Rpb24iLCJ1cERpcmVjdGlvbiIsImRvd25EaXJlY3Rpb24iLCJfc3RhcnRUb3VjaFRpbWVzdGFtcCIsInRvdWNoRHJhZ2dpbmdUaHJlc2hvbGQiLCJpc1RvdWNoRXZlbnQiLCJuYXRpdmVEcmFnQW5kRHJvcCIsImVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcE9uVG91Y2giLCJzdG9wUHJvcGFnYXRpb25PbkRyYWdTdGFydCIsInN0b3BQcm9wYWdhdGlvbiIsIlRvdWNoRXZlbnQiLCJ0b3VjaFBvaW50IiwiX3N0YXJ0VG91Y2hQb2ludCIsInBhZ2VYIiwiY2xpZW50WCIsInBhZ2VZIiwiY2xpZW50WSIsIl90b3VjaElkIiwiX3N0YXJ0V2luZG93U2Nyb2xsUG9pbnQiLCJ3aW5kb3dTY3JvbGxQb2ludCIsIl9zdGFydFBhcmVudHNTY3JvbGxQb2ludCIsInBhcmVudHNTY3JvbGxQb2ludCIsIkhUTUxJbnB1dEVsZW1lbnQiLCJmb2N1cyIsInNob3VsZFVzZU5hdGl2ZURyYWdBbmREcm9wIiwiZW11bGF0ZU9uRmlyc3RNb3ZlIiwic2VlbXNTY3JvbGxpbmciLCJjYW5jZWxEcmFnZ2luZyIsImVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcCIsImNhbmNlbEVtdWxhdGlvbiIsInBhcmVudHMiLCJ0b3VjaCIsImlzRHJhZ2dpbmciLCJkZXRlcm1pbmVEaXJlY3Rpb24iLCJjbGFzc0xpc3QiLCJzZXRUaW1lb3V0IiwiX2V2ZW50IiwiZGF0YVRyYW5zZmVyIiwic2V0RGF0YSIsImVmZmVjdEFsbG93ZWQiLCJkcm9wRWZmZWN0IiwicmVtb3ZlQXR0cmlidXRlIiwiY29udGFpbmVyUmVjdCIsImNsb25lZEVsZW1lbnQiLCJjbG9uZU5vZGUiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJlbXVsYXRpb25EcmFnZ2FibGUiLCJjb250YWluZXJSZWN0UG9pbnQiLCJkZXN0cm95IiwicmVtb3ZlQ2hpbGQiLCJyZXNldEVtaXR0ZXIiLCJfaGFuZGxlciIsInNjcm9sbFgiLCJzY3JvbGxZIiwiX2NhY2hlZFBhcmVudHMiLCJzdW0iLCJzY3JvbGxMZWZ0Iiwic2Nyb2xsVG9wIiwiZW5hYmxlIiwiUmVzaXplT2JzZXJ2ZXIiLCJkZWJvdW5jZSIsImltbWVkaWF0ZSIsInRpbWVvdXQiLCJsYXRlciIsImNhbGxOb3ciLCJjbGVhclRpbWVvdXQiLCJQb2x5ZmlsbCIsIkxpc3QiLCJjaGFuZ2VkRHVyaW5nSXRlcmF0aW9uIiwicmVzaXplT2JzZXJ2ZXIiLCJvblJlc2l6ZSIsIm9ic2VydmUiLCJyZW9yZGVyT25DaGFuZ2UiLCJkIiwiaW5pdERyYWdnYWJsZSIsIm9uTW92ZSIsInVub2JzZXJ2ZSIsInJlc2V0T24iLCJzb3J0ZWREcmFnZ2FibGVzIiwiZ2V0U29ydGVkRHJhZ2dhYmxlcyIsInBpbm5lZFBvc2l0aW9ucyIsImN1cnJlbnRJbmRleCIsInRhcmdldEluZGV4IiwiZGlzdGFuY2VGdW5jIiwicmVvcmRlckVsZW1lbnRzIiwibW92ZWREcmFnZ2FibGUiLCJuZXh0IiwiaW5zZXJ0QmVmb3JlIiwicmVzZXRQb3NpdGlvblRvSW5pdGlhbCIsIkFycmF5IiwiaW5pdGlhbFBvc2l0aW9ucyIsImxpc3QiLCJyZWxlYXNlRHJhZ2dhYmxlIiwiaiIsImRyYWdnYWJsZUEiLCJkcmFnZ2FibGVCIiwiZ2V0Q3VycmVudFBpbm5lZFBvc2l0aW9ucyIsImNvbnRhaW5lckVsZW1lbnQiLCJlbGVtZW50cyIsImZyb20iLCJhcnJheU1vdmUiLCJ0byIsIkJ1YmJsaW5nTGlzdCIsIl92ZXJ0aWNhbEdhcCIsInZlcnRpY2FsR2FwIiwic29ydGVkIiwic3RhcnRQb3NpdGlvbiIsIm9uRHJhZ1N0YXJ0IiwiYXV0b0RldGVjdFZlcnRpY2FsR2FwIiwiYXV0b0RldGVjdFN0YXJ0UG9zaXRpb24iLCJjYWNoZWRTb3J0ZWREcmFnZ2FibGVzIiwiaW5kZXhPZkFjdGl2ZURyYWdnYWJsZSIsInByZXZEcmFnZ2FibGUiLCJuZXh0RHJhZ2dhYmxlIiwiY3VycmVudFBvc2l0aW9uIiwiY3VycmVudE9yZGVyIiwiZHJhZ2dhYmxlTmV3UG9zaXRpb24iLCJjdXJyZW50RHJhZ2dhYmxlIiwiY29tcGFyZSIsImluY2x1ZGVzIiwiYnViYmxpbmciLCJnYXBWYWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUFBO0FBQUEsTUFDcUJBLEtBQUssZ0JBQUEsWUFBQTtFQUN4QjtFQUNGO0VBQ0E7RUFDQTtFQUNBO0lBQ0UsU0FBWUMsS0FBQUEsQ0FBQUEsQ0FBQyxFQUFFQyxDQUFDLEVBQUU7RUFBQSxJQUFBLGVBQUEsQ0FBQSxJQUFBLEVBQUEsS0FBQSxDQUFBLENBQUE7TUFDaEIsSUFBSSxDQUFDRCxDQUFDLEdBQUdBLENBQUMsQ0FBQTtNQUNWLElBQUksQ0FBQ0MsQ0FBQyxHQUFHQSxDQUFDLENB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RUFBQyxPQUFBLENBQUEsT0FBQSxHQUFBLEVBQUE7RUFBQSxRQUFBLFNBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQSxDQUFBLENBQUE7RUFBQSxPQUFBLFNBQUE7RUFBQSxRQUFBLFNBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtFQUFBLE9BQUE7RUFDSCxLQUFBO0VBQUMsR0FBQSxFQUFBO0VBQUEsSUFBQSxHQUFBLEVBQUEsV0FBQTtFQUFBLElBQUEsS0FBQSxFQUVELFNBQVksU0FBQSxHQUFBO1FBQ1YsSUFBSSxDQUFDQSxXQUFXLEdBQUcsSUFBSSxDQUFBO0VBQ3pCLEtBQUE7RUFBQyxHQUFBLEVBQUE7RUFBQSxJQUFBLEdBQUEsRUFBQSxJQUFBO0VBQUEsSUFBQSxLQUFBLEVBRUQsU0FBR0YsRUFBQUEsQ0FBQUEsU0FBUyxFQUFFQyxFQUFFLEVBQUU7RUFDaEIsTUFBQSxJQUFJLENBQUMsSUFBSSxDQUFDTCxNQUFNLENBQUNJLFNBQVMsQ0FBQyxFQUFFO0VBQzNCLFFBQUEsSUFBSSxDQUFDSixNQUFNLENBQUNJLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQTtFQUM3QixPQUFBO1FBRUEsSUFBSSxDQUFDSixNQUFNLENBQUNJLFNBQVMsQ0FBQyxDQUFDUSxJQUFJLENBQUNQLEVBQUUsQ0FBQyxDQUFBO0VBQ2pDLEtBQUE7RUFBQyxHQUFBLEVBQUE7RUFBQSxJQUFBLEdBQUEsRUFBQSxXQUFBO0VBQUEsSUFBQSxLQUFBLEVBRUQsU0FBVUQsU0FBQUEsQ0FBQUEsU0FBUyxFQUFFQyxFQUFFLEVBQUU7RUFDdkIsTUFBQSxJQUFJLENBQUMsSUFBSSxDQUFDTCxNQUFNLENBQUNJLFNBQVMsQ0FBQyxFQUFFO0VBQzNCLFFBQUEsSUFBSSxDQUFDSixNQUFNLENBQUNJLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQTtFQUM3QixPQUFBO1FBRUEsSUFBSSxDQUFDSixNQUFNLENBQUNJLFNBQVMsQ0FBQyxDQUFDUyxPQUFPLENBQUNSLEVBQUUsQ0FBQyxDQUFBO0VBQ3BDLEtBQUE7RUFBQyxHQUFBLEVBQUE7RUFBQSxJ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
