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
        if (this.stopPropagationOnStart) {
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
        if (this.stopPropagationOnStart) {
          event.stopPropagation();
        }
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

      // It can be usefull for nested draggables
    }, {
      key: "stopPropagationOnStart",
      get: function get() {
        return this.options.stopPropagationOnStart || false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZGV2LmpzIiwic291cmNlcyI6WyIuLi9zcmMvZ2VvbWV0cnkvcG9pbnQuanMiLCIuLi9zcmMvZ2VvbWV0cnkvcmVjdGFuZ2xlLmpzIiwiLi4vc3JjL3V0aWxzL2dldC1kZWZhdWx0LWNvbnRhaW5lci5qcyIsIi4uL3NyYy9ldmVudEVtaXR0ZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvZGVzYW5kcm8tZ2V0LXN0eWxlLXByb3BlcnR5L2dldC1zdHlsZS1wcm9wZXJ0eS5qcyIsIi4uL3NyYy9nZW9tZXRyeS9kaXN0YW5jZXMuanMiLCIuLi9zcmMvZ2VvbWV0cnkvYm91bmRzLmpzIiwiLi4vc3JjL2dlb21ldHJ5L2FuZ2xlcy5qcyIsIi4uL3NyYy9ib3VuZGluZy5qcyIsIi4uL3NyYy91dGlscy9yZW1vdmUtYXJyYXktaXRlbS5qcyIsIi4uL3NyYy91dGlscy9yYW5nZS5qcyIsIi4uL3NyYy9wb3NpdGlvbmluZy5qcyIsIi4uL3NyYy90YXJnZXQuanMiLCIuLi9zcmMvc2NvcGUuanMiLCIuLi9zcmMvdXRpbHMvaXMtc3VwcG9ydC1wYXNzaXZlLWV2ZW50cy5qcyIsIi4uL3NyYy91dGlscy90aHJvdHRsZS5qcyIsIi4uL3NyYy9kcmFnZ2FibGUuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL3V0aWxzL3Jlc2l6ZU9ic2VydmVycy5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvYWxnb3JpdGhtcy9oYXNBY3RpdmVPYnNlcnZhdGlvbnMuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL2FsZ29yaXRobXMvaGFzU2tpcHBlZE9ic2VydmF0aW9ucy5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvYWxnb3JpdGhtcy9kZWxpdmVyUmVzaXplTG9vcEVycm9yLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BqdWdnbGUvcmVzaXplLW9ic2VydmVyL2xpYi9SZXNpemVPYnNlcnZlckJveE9wdGlvbnMuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL3V0aWxzL2ZyZWV6ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvUmVzaXplT2JzZXJ2ZXJTaXplLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BqdWdnbGUvcmVzaXplLW9ic2VydmVyL2xpYi9ET01SZWN0UmVhZE9ubHkuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL3V0aWxzL2VsZW1lbnQuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL3V0aWxzL2dsb2JhbC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvYWxnb3JpdGhtcy9jYWxjdWxhdGVCb3hTaXplLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BqdWdnbGUvcmVzaXplLW9ic2VydmVyL2xpYi9SZXNpemVPYnNlcnZlckVudHJ5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BqdWdnbGUvcmVzaXplLW9ic2VydmVyL2xpYi9hbGdvcml0aG1zL2NhbGN1bGF0ZURlcHRoRm9yTm9kZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvYWxnb3JpdGhtcy9icm9hZGNhc3RBY3RpdmVPYnNlcnZhdGlvbnMuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL2FsZ29yaXRobXMvZ2F0aGVyQWN0aXZlT2JzZXJ2YXRpb25zQXREZXB0aC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvdXRpbHMvcHJvY2Vzcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvdXRpbHMvcXVldWVNaWNyb1Rhc2suanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL3V0aWxzL3F1ZXVlUmVzaXplT2JzZXJ2ZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL3V0aWxzL3NjaGVkdWxlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvUmVzaXplT2JzZXJ2YXRpb24uanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL1Jlc2l6ZU9ic2VydmVyRGV0YWlsLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BqdWdnbGUvcmVzaXplLW9ic2VydmVyL2xpYi9SZXNpemVPYnNlcnZlckNvbnRyb2xsZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL1Jlc2l6ZU9ic2VydmVyLmpzIiwiLi4vc3JjL3V0aWxzL2RlYm91bmNlLmpzIiwiLi4vc3JjL2xpc3QuanMiLCIuLi9zcmMvYnViYmxpbmdMaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKiBDbGFzcyByZXByZXNlbnRpbmcgYSBwb2ludC4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvaW50IHtcbiAgLyoqXG4gICogQ3JlYXRlIGEgcG9pbnQuXG4gICogQHBhcmFtIHtudW1iZXJ9IHggLSBUaGUgeCB2YWx1ZS5cbiAgKiBAcGFyYW0ge251bWJlcn0geSAtIFRoZSB5IHZhbHVlLlxuICAqL1xuICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgdGhpcy54ID0geFxuICAgIHRoaXMueSA9IHlcbiAgfVxuXG4gIGFkZChwKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnggKyBwLngsIHRoaXMueSArIHAueSlcbiAgfVxuXG4gIHN1YihwKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnggLSBwLngsIHRoaXMueSAtIHAueSlcbiAgfVxuXG4gIG11bHQoaykge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54ICogaywgdGhpcy55ICogaylcbiAgfVxuXG4gIG5lZ2F0aXZlKCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQoLXRoaXMueCwgLXRoaXMueSlcbiAgfVxuXG4gIGNvbXBhcmUocCkge1xuICAgIHJldHVybiAodGhpcy54ID09PSBwLnggJiYgdGhpcy55ID09PSBwLnkpXG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCwgdGhpcy55KVxuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIGB7eD0ke3RoaXMueH0seT0ke3RoaXMueX1gXG4gIH1cblxuICBzdGF0aWMgZWxlbWVudE9mZnNldChlbGVtZW50LCBwYXJlbnQpIHtcbiAgICBwYXJlbnQgPSBwYXJlbnQgfHwgZWxlbWVudC5wYXJlbnROb2RlXG4gICAgY29uc3QgZWxlbWVudFJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgY29uc3QgcGFyZW50UmVjdCA9IHBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIHJldHVybiBuZXcgUG9pbnQoXG4gICAgICBlbGVtZW50UmVjdC5sZWZ0IC0gcGFyZW50UmVjdC5sZWZ0LFxuICAgICAgZWxlbWVudFJlY3QudG9wIC0gcGFyZW50UmVjdC50b3BcbiAgICApXG4gIH1cblxuICBzdGF0aWMgZWxlbWVudFNpemUoZWxlbWVudCkge1xuICAgIGNvbnN0IGVsZW1lbnRSZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIHJldHVybiBuZXcgUG9pbnQoXG4gICAgICBlbGVtZW50UmVjdC53aWR0aCxcbiAgICAgIGVsZW1lbnRSZWN0LmhlaWdodFxuICAgIClcbiAgfVxufVxuIiwiaW1wb3J0IFBvaW50IGZyb20gJy4vcG9pbnQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY3RhbmdsZSB7XG4gIGNvbnN0cnVjdG9yKHBvc2l0aW9uLCBzaXplKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgdGhpcy5zaXplID0gc2l6ZVxuICB9XG5cbiAgZ2V0UDEoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25cbiAgfVxuXG4gIGdldFAyKCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHRoaXMucG9zaXRpb24ueSlcbiAgfVxuXG4gIGdldFAzKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLnNpemUpXG4gIH1cblxuICBnZXRQNCgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnkpXG4gIH1cblxuICBnZXRDZW50ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb24uYWRkKHRoaXMuc2l6ZS5tdWx0KDAuNSkpXG4gIH1cblxuICBvcihyZWN0KSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBuZXcgUG9pbnQoTWF0aC5taW4odGhpcy5wb3NpdGlvbi54LCByZWN0LnBvc2l0aW9uLngpLCBNYXRoLm1pbih0aGlzLnBvc2l0aW9uLnksIHJlY3QucG9zaXRpb24ueSkpXG4gICAgY29uc3Qgc2l6ZSA9IChuZXcgUG9pbnQoTWF0aC5tYXgodGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHJlY3QucG9zaXRpb24ueCArIHJlY3Quc2l6ZS54KSwgTWF0aC5tYXgodGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnksIHJlY3QucG9zaXRpb24ueSArIHJlY3Quc2l6ZS55KSkpLnN1Yihwb3NpdGlvbilcbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZShwb3NpdGlvbiwgc2l6ZSlcbiAgfVxuXG4gIGFuZChyZWN0KSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBuZXcgUG9pbnQoTWF0aC5tYXgodGhpcy5wb3NpdGlvbi54LCByZWN0LnBvc2l0aW9uLngpLCBNYXRoLm1heCh0aGlzLnBvc2l0aW9uLnksIHJlY3QucG9zaXRpb24ueSkpXG4gICAgY29uc3Qgc2l6ZSA9IChuZXcgUG9pbnQoTWF0aC5taW4odGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHJlY3QucG9zaXRpb24ueCArIHJlY3Quc2l6ZS54KSwgTWF0aC5taW4odGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnksIHJlY3QucG9zaXRpb24ueSArIHJlY3Quc2l6ZS55KSkpLnN1Yihwb3NpdGlvbilcbiAgICBpZiAoc2l6ZS54IDw9IDAgfHwgc2l6ZS55IDw9IDApIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHBvc2l0aW9uLCBzaXplKVxuICB9XG5cbiAgaW5jbHVkZVBvaW50KHApIHtcbiAgICByZXR1cm4gISh0aGlzLnBvc2l0aW9uLnggPiBwLnggfHwgdGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLnggPCBwLnggfHwgdGhpcy5wb3NpdGlvbi55ID4gcC55IHx8IHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55IDwgcC55KVxuICB9XG5cbiAgaW5jbHVkZVJlY3RhbmdsZShyZWN0YW5nbGUpIHtcbiAgICByZXR1cm4gdGhpcy5pbmNsdWRlUG9pbnQocmVjdGFuZ2xlLnBvc2l0aW9uKSAmJiB0aGlzLmluY2x1ZGVQb2ludChyZWN0YW5nbGUuZ2V0UDMoKSlcbiAgfVxuXG4gIG1vdmVUb0JvdW5kKHJlY3QsIGF4aXMpIHtcbiAgICBsZXQgc2VsQXhpcywgY3Jvc3NSZWN0YW5nbGVcbiAgICBpZiAoYXhpcykge1xuICAgICAgc2VsQXhpcyA9IGF4aXNcbiAgICB9IGVsc2Uge1xuICAgICAgY3Jvc3NSZWN0YW5nbGUgPSB0aGlzLmFuZChyZWN0KVxuICAgICAgaWYgKCFjcm9zc1JlY3RhbmdsZSkge1xuICAgICAgICByZXR1cm4gcmVjdFxuICAgICAgfVxuICAgICAgc2VsQXhpcyA9IGNyb3NzUmVjdGFuZ2xlLnNpemUueCA+IGNyb3NzUmVjdGFuZ2xlLnNpemUueSA/ICd5JyA6ICd4J1xuICAgIH1cbiAgICBjb25zdCB0aGlzQ2VudGVyID0gdGhpcy5nZXRDZW50ZXIoKVxuICAgIGNvbnN0IHJlY3RDZW50ZXIgPSByZWN0LmdldENlbnRlcigpXG4gICAgY29uc3Qgc2lnbiA9IHRoaXNDZW50ZXJbc2VsQXhpc10gPiByZWN0Q2VudGVyW3NlbEF4aXNdID8gLTEgOiAxXG4gICAgY29uc3Qgb2Zmc2V0ID0gc2lnbiA+IDAgPyB0aGlzLnBvc2l0aW9uW3NlbEF4aXNdICsgdGhpcy5zaXplW3NlbEF4aXNdIC0gcmVjdC5wb3NpdGlvbltzZWxBeGlzXSA6IHRoaXMucG9zaXRpb25bc2VsQXhpc10gLSAocmVjdC5wb3NpdGlvbltzZWxBeGlzXSArIHJlY3Quc2l6ZVtzZWxBeGlzXSlcbiAgICByZWN0LnBvc2l0aW9uW3NlbEF4aXNdID0gcmVjdC5wb3NpdGlvbltzZWxBeGlzXSArIG9mZnNldFxuICAgIHJldHVybiByZWN0XG4gIH1cblxuICBnZXRTcXVhcmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZS54ICogdGhpcy5zaXplLnlcbiAgfVxuXG4gIHN0eWxlQXBwbHkoZWwpIHtcbiAgICBlbCA9IGVsIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2luZCcpXG4gICAgZWwuc3R5bGUubGVmdCA9IHRoaXMucG9zaXRpb24ueCArICdweCdcbiAgICBlbC5zdHlsZS50b3AgPSB0aGlzLnBvc2l0aW9uLnkgKyAncHgnXG4gICAgZWwuc3R5bGUud2lkdGggPSB0aGlzLnNpemUueCArICdweCdcbiAgICBlbC5zdHlsZS5oZWlnaHQgPSB0aGlzLnNpemUueSArICdweCdcbiAgfVxuXG4gIGdyb3d0aChzaXplKSB7XG4gICAgdGhpcy5zaXplID0gdGhpcy5zaXplLmFkZChzaXplKVxuICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uLmFkZChzaXplLm11bHQoLTAuNSkpXG4gIH1cblxuICBnZXRNaW5TaWRlKCkge1xuICAgIHJldHVybiBNYXRoLm1pbih0aGlzLnNpemUueCwgdGhpcy5zaXplLnkpXG4gIH1cblxuICBzdGF0aWMgZnJvbUVsZW1lbnQoZWxlbWVudCwgcGFyZW50PWVsZW1lbnQucGFyZW50Tm9kZSwgaXNDb25zaWRlclRyYW5zbGF0ZT1mYWxzZSkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gUG9pbnQuZWxlbWVudE9mZnNldChlbGVtZW50LCBwYXJlbnQsIGlzQ29uc2lkZXJUcmFuc2xhdGUpXG4gICAgY29uc3Qgc2l6ZSA9IFBvaW50LmVsZW1lbnRTaXplKGVsZW1lbnQpXG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUocG9zaXRpb24sIHNpemUpXG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldERlZmF1bHRDb250YWluZXIoZWxlbWVudCkge1xuICBsZXQgY29udGFpbmVyID0gZWxlbWVudC5wYXJlbnROb2RlXG4gIHdoaWxlIChjb250YWluZXIucGFyZW50Tm9kZSAmJiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShjb250YWluZXIpWydwb3NpdGlvbiddID09PSAnc3RhdGljJyAmJiBjb250YWluZXIudGFnTmFtZSAhPT0gJ0JPRFknKSB7XG4gICAgY29udGFpbmVyID0gY29udGFpbmVyLnBhcmVudE5vZGVcbiAgfVxuICByZXR1cm4gY29udGFpbmVyXG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAob3B0aW9ucyA9IHt9KSB7XG4gICAgdGhpcy5ldmVudHMgPSB7fVxuXG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5vbikge1xuICAgICAgZm9yIChjb25zdCBbZXZlbnROYW1lLCBmbl0gb2YgT2JqZWN0LmVudHJpZXMob3B0aW9ucy5vbikpIHtcbiAgICAgICAgdGhpcy5vbihldmVudE5hbWUsIGZuKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGVtaXQoZXZlbnROYW1lKSB7XG4gICAgdGhpcy5pbnRlcnJ1cHRlZCA9IGZhbHNlXG4gICAgY29uc3QgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKVxuXG4gICAgaWYgKCF0aGlzLmV2ZW50c1tldmVudE5hbWVdKSByZXR1cm5cblxuICAgIGZvciAoY29uc3QgZnVuYyBvZiB0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICBmdW5jKC4uLmFyZ3MpXG4gICAgICBpZiAodGhpcy5pbnRlcnJ1cHRlZCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpbnRlcnJ1cHQoKSB7XG4gICAgdGhpcy5pbnRlcnJ1cHRlZCA9IHRydWVcbiAgfVxuXG4gIG9uKGV2ZW50TmFtZSwgZm4pIHtcbiAgICBpZiAoIXRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSBbXVxuICAgIH1cblxuICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0ucHVzaChmbilcbiAgfVxuXG4gIHByZXBlbmRPbihldmVudE5hbWUsIGZuKSB7XG4gICAgaWYgKCF0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdID0gW11cbiAgICB9XG5cbiAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLnVuc2hpZnQoZm4pXG4gIH1cblxuICB1bnN1YnNjcmliZShldmVudE5hbWUsIGZuKSB7XG4gICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5ldmVudHNbZXZlbnROYW1lXS5pbmRleE9mKGZuKVxuICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5zcGxpY2UoaW5kZXgsIDEpXG4gICAgfVxuICB9XG5cbiAgcmVzZXRFbWl0dGVyICgpIHtcbiAgICB0aGlzLmV2ZW50cyA9IHt9XG4gIH1cblxuICByZXNldE9uKGV2ZW50TmFtZSkge1xuICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSBbXVxuICB9XG59XG4iLCIvKiFcbiAqIGdldFN0eWxlUHJvcGVydHkgdjEuMC40XG4gKiBvcmlnaW5hbCBieSBrYW5nYXhcbiAqIGh0dHA6Ly9wZXJmZWN0aW9ua2lsbHMuY29tL2ZlYXR1cmUtdGVzdGluZy1jc3MtcHJvcGVydGllcy9cbiAqIE1JVCBsaWNlbnNlXG4gKi9cblxuLypqc2hpbnQgYnJvd3NlcjogdHJ1ZSwgc3RyaWN0OiB0cnVlLCB1bmRlZjogdHJ1ZSAqL1xuLypnbG9iYWwgZGVmaW5lOiBmYWxzZSwgZXhwb3J0czogZmFsc2UsIG1vZHVsZTogZmFsc2UgKi9cblxuKCBmdW5jdGlvbiggd2luZG93ICkge1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBwcmVmaXhlcyA9ICdXZWJraXQgTW96IG1zIE1zIE8nLnNwbGl0KCcgJyk7XG52YXIgZG9jRWxlbVN0eWxlID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlO1xuXG5mdW5jdGlvbiBnZXRTdHlsZVByb3BlcnR5KCBwcm9wTmFtZSApIHtcbiAgaWYgKCAhcHJvcE5hbWUgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gdGVzdCBzdGFuZGFyZCBwcm9wZXJ0eSBmaXJzdFxuICBpZiAoIHR5cGVvZiBkb2NFbGVtU3R5bGVbIHByb3BOYW1lIF0gPT09ICdzdHJpbmcnICkge1xuICAgIHJldHVybiBwcm9wTmFtZTtcbiAgfVxuXG4gIC8vIGNhcGl0YWxpemVcbiAgcHJvcE5hbWUgPSBwcm9wTmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHByb3BOYW1lLnNsaWNlKDEpO1xuXG4gIC8vIHRlc3QgdmVuZG9yIHNwZWNpZmljIHByb3BlcnRpZXNcbiAgdmFyIHByZWZpeGVkO1xuICBmb3IgKCB2YXIgaT0wLCBsZW4gPSBwcmVmaXhlcy5sZW5ndGg7IGkgPCBsZW47IGkrKyApIHtcbiAgICBwcmVmaXhlZCA9IHByZWZpeGVzW2ldICsgcHJvcE5hbWU7XG4gICAgaWYgKCB0eXBlb2YgZG9jRWxlbVN0eWxlWyBwcmVmaXhlZCBdID09PSAnc3RyaW5nJyApIHtcbiAgICAgIHJldHVybiBwcmVmaXhlZDtcbiAgICB9XG4gIH1cbn1cblxuLy8gdHJhbnNwb3J0XG5pZiAoIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcbiAgLy8gQU1EXG4gIGRlZmluZSggZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGdldFN0eWxlUHJvcGVydHk7XG4gIH0pO1xufSBlbHNlIGlmICggdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICkge1xuICAvLyBDb21tb25KUyBmb3IgQ29tcG9uZW50XG4gIG1vZHVsZS5leHBvcnRzID0gZ2V0U3R5bGVQcm9wZXJ0eTtcbn0gZWxzZSB7XG4gIC8vIGJyb3dzZXIgZ2xvYmFsXG4gIHdpbmRvdy5nZXRTdHlsZVByb3BlcnR5ID0gZ2V0U3R5bGVQcm9wZXJ0eTtcbn1cblxufSkoIHdpbmRvdyApO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldERpc3RhbmNlKHAxLCBwMikge1xuICBjb25zdCBkeCA9IHAxLnggLSBwMi54LCBkeSA9IHAxLnkgLSBwMi55XG4gIHJldHVybiBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRYRGlmZmVyZW5jZShwMSwgcDIpIHtcbiAgcmV0dXJuIE1hdGguYWJzKHAxLnggLSBwMi54KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0WURpZmZlcmVuY2UocDEsIHAyKSB7XG4gIHJldHVybiBNYXRoLmFicyhwMS55IC0gcDIueSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3Rvcnkob3B0aW9ucykge1xuICByZXR1cm4gKHAxLCBwMikgPT4ge1xuICAgIHJldHVybiBNYXRoLnNxcnQoXG4gICAgICBNYXRoLnBvdyhvcHRpb25zLnggKiBNYXRoLmFicyhwMS54IC0gcDIueCksIDIpICtcbiAgICAgIE1hdGgucG93KG9wdGlvbnMueSAqIE1hdGguYWJzKHAxLnkgLSBwMi55KSwgMilcbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluZGV4T2ZOZWFyZXN0UG9pbnQoYXJyLCB2YWwsIHJhZGl1cywgZ2V0RGlzdGFuY2VGdW5jPWdldERpc3RhbmNlKSB7XG4gIGxldCBzaXplLCBpbmRleCA9IDAsIGksIHRlbXBcbiAgaWYgKGFyci5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gLTFcbiAgfVxuICBzaXplID0gZ2V0RGlzdGFuY2VGdW5jKGFyclswXSwgdmFsKVxuICBmb3IgKGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgdGVtcCA9IGdldERpc3RhbmNlRnVuYyhhcnJbaV0sIHZhbClcbiAgICBpZiAodGVtcCA8IHNpemUpIHtcbiAgICAgIHNpemUgPSB0ZW1wXG4gICAgICBpbmRleCA9IGlcbiAgICB9XG4gIH1cbiAgaWYgKHJhZGl1cyA+PSAwICYmIHNpemUgPiByYWRpdXMpIHtcbiAgICByZXR1cm4gLTFcbiAgfVxuICByZXR1cm4gaW5kZXhcbn1cbiIsImltcG9ydCBQb2ludCBmcm9tICcuL3BvaW50J1xuaW1wb3J0IHsgZ2V0RGlzdGFuY2UgfSBmcm9tICcuL2Rpc3RhbmNlcydcblxuZXhwb3J0IGZ1bmN0aW9uIGNsYW1wKG1pbiwgbWF4LCB2YWwpIHtcbiAgcmV0dXJuIE1hdGgubWF4KG1pbiwgTWF0aC5taW4obWF4LCB2YWwpKVxufVxuXG4vL1JldHVybiBjcm9zc2luZyBwb2ludCBvZiB0d28gbGluZXNcbmV4cG9ydCBmdW5jdGlvbiBkaXJlY3RDcm9zc2luZyhMMVAxLCBMMVAyLCBMMlAxLCBMMlAyKSB7XG4gIGxldCB0ZW1wLCBrMSwgazIsIGIxLCBiMiwgeCwgeVxuICBpZiAoTDJQMS54ID09PSBMMlAyLngpIHtcbiAgICB0ZW1wID0gTDJQMVxuICAgIEwyUDEgPSBMMVAxXG4gICAgTDFQMSA9IHRlbXBcbiAgICB0ZW1wID0gTDJQMlxuICAgIEwyUDIgPSBMMVAyXG4gICAgTDFQMiA9IHRlbXBcbiAgfVxuICBpZiAoTDFQMS54ID09PSBMMVAyLngpIHtcbiAgICBrMiA9IChMMlAyLnkgLSBMMlAxLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICBiMiA9IChMMlAyLnggKiBMMlAxLnkgLSBMMlAxLnggKiBMMlAyLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICB4ID0gTDFQMS54XG4gICAgeSA9IHggKiBrMiArIGIyXG4gICAgcmV0dXJuIG5ldyBQb2ludCh4LCB5KVxuICB9IGVsc2Uge1xuICAgIGsxID0gKEwxUDIueSAtIEwxUDEueSkgLyAoTDFQMi54IC0gTDFQMS54KVxuICAgIGIxID0gKEwxUDIueCAqIEwxUDEueSAtIEwxUDEueCAqIEwxUDIueSkgLyAoTDFQMi54IC0gTDFQMS54KVxuICAgIGsyID0gKEwyUDIueSAtIEwyUDEueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgIGIyID0gKEwyUDIueCAqIEwyUDEueSAtIEwyUDEueCAqIEwyUDIueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgIHggPSAoYjEgLSBiMikgLyAoazIgLSBrMSlcbiAgICB5ID0geCAqIGsxICsgYjFcbiAgICByZXR1cm4gbmV3IFBvaW50KHgsIHkpXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kVG9TZWdtZW50KExQMSwgTFAyLCBQKSB7XG4gIGxldCB4LCB5XG4gIHggPSBjbGFtcChNYXRoLm1pbihMUDEueCwgTFAyLngpLCBNYXRoLm1heChMUDEueCwgTFAyLngpLCBQLngpXG4gIGlmICh4ICE9PSBQLngpIHtcbiAgICB5ID0gKHggPT09IExQMS54KSA/IExQMS55IDogTFAyLnlcbiAgICBQID0gbmV3IFBvaW50KHgsIHkpXG4gIH1cblxuICB5ID0gY2xhbXAoTWF0aC5taW4oTFAxLnksIExQMi55KSwgTWF0aC5tYXgoTFAxLnksIExQMi55KSwgUC55KVxuICBpZiAoeSAhPT0gUC55KSB7XG4gICAgeCA9ICh5ID09PSBMUDEueSkgPyBMUDEueCA6IExQMi54XG4gICAgUCA9IG5ldyBQb2ludCh4LCB5KVxuICB9XG5cbiAgcmV0dXJuIFBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kVG9MaW5lKEEsIEIsIFApIHtcbiAgY29uc3QgQVAgPSBuZXcgUG9pbnQoUC54IC0gQS54LCBQLnkgLSBBLnkpLFxuICAgIEFCID0gbmV3IFBvaW50KEIueCAtIEEueCwgQi55IC0gQS55KSxcbiAgICBhYjIgPSBBQi54ICogQUIueCArIEFCLnkgKiBBQi55LFxuICAgIGFwX2FiID0gQVAueCAqIEFCLnggKyBBUC55ICogQUIueSxcbiAgICB0ID0gYXBfYWIgLyBhYjJcbiAgcmV0dXJuIG5ldyBQb2ludChBLnggKyBBQi54ICogdCwgQS55ICsgQUIueSAqIHQpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb2ludE9uTGluZShMUDEsIExQMiwgcGVyY2VudCkge1xuICBjb25zdCBkeCA9IExQMi54IC0gTFAxLngsIGR5ID0gTFAyLnkgLSBMUDEueVxuICByZXR1cm4gbmV3IFBvaW50KExQMS54ICsgcGVyY2VudCAqIGR4LCBMUDEueSArIHBlcmNlbnQgKiBkeSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBvaW50T25MaW5lQnlMZW5naHQoTFAxLCBMUDIsIGxlbmdodCkge1xuICBjb25zdCBkeCA9IExQMi54IC0gTFAxLnhcbiAgY29uc3QgZHkgPSBMUDIueSAtIExQMS55XG4gIGNvbnN0IHBlcmNlbnQgPSBsZW5naHQgLyBnZXREaXN0YW5jZShMUDEsIExQMilcbiAgcmV0dXJuIG5ldyBQb2ludChMUDEueCArIHBlcmNlbnQgKiBkeCwgTFAxLnkgKyBwZXJjZW50ICogZHkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRQb2ludFRvQm91bmRQb2ludHMoYm91bmRwb2ludHMsIHBvaW50LCBpc1JpZ2h0KSB7XG4gIGNvbnN0IHJlc3VsdCA9IGJvdW5kcG9pbnRzLmZpbHRlcigoYlBvaW50KSA9PiB7XG4gICAgcmV0dXJuIGJQb2ludC55ID4gcG9pbnQueSB8fCAoaXNSaWdodCA/IGJQb2ludC54IDwgcG9pbnQueCA6IGJQb2ludC54ID4gcG9pbnQueClcbiAgfSlcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChwb2ludC55IDwgcmVzdWx0W2ldLnkpIHtcbiAgICAgIHJlc3VsdC5zcGxpY2UoaSwgMCwgcG9pbnQpXG4gICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxuICB9XG4gIHJlc3VsdC5wdXNoKHBvaW50KVxuICByZXR1cm4gcmVzdWx0XG59XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9wb2ludCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFuZ2xlRGlmZihhbHBoYSwgYmV0YSkge1xuICBjb25zdCBtaW5BbmdsZSA9IE1hdGgubWluKGFscGhhLCBiZXRhKVxuICBjb25zdCBtYXhBbmdsZSA9ICBNYXRoLm1heChhbHBoYSwgYmV0YSlcbiAgcmV0dXJuIE1hdGgubWluKG1heEFuZ2xlIC0gbWluQW5nbGUsIG1pbkFuZ2xlICsgTWF0aC5QSSoyIC0gbWF4QW5nbGUpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbmdsZShwMSwgcDIpIHtcbiAgY29uc3QgZGlmZiA9IHAyLnN1YihwMSlcbiAgcmV0dXJuIG5vcm1hbGl6ZUFuZ2xlKE1hdGguYXRhbjIoZGlmZi55LCBkaWZmLngpKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9SYWRpYW4oYW5nbGUpIHtcbiAgcmV0dXJuICgoYW5nbGUgJSAzNjApICogTWF0aC5QSSAvIDE4MClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvRGVncmVlKGFuZ2xlKSB7XG4gIHJldHVybiAoYW5nbGUgKiAxODAgLyBNYXRoLlBJKSAlIDM2MFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRBbmdsZShtaW4sIG1heCwgdmFsKSB7XG4gIGxldCBkbWluLCBkbWF4XG4gIGlmIChtaW4gPCBtYXggJiYgdmFsID4gbWluICYmIHZhbCA8IG1heCkge1xuICAgIHJldHVybiB2YWxcbiAgfSBlbHNlIGlmIChtYXggPCBtaW4gJiYgKHZhbCA8IG1heCB8fCB2YWwgPiBtaW4pKSB7XG4gICAgcmV0dXJuIHZhbFxuICB9IGVsc2Uge1xuICAgIGRtaW4gPSBnZXRBbmdsZURpZmYobWluLCB2YWwpXG4gICAgZG1heCA9IGdldEFuZ2xlRGlmZihtYXgsIHZhbClcbiAgICBpZiAoZG1pbiA8IGRtYXgpIHtcbiAgICAgIHJldHVybiBtaW5cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG1heFxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmVhcmVzdEFuZ2xlKGFyciwgYW5nbGUpIHtcbiAgbGV0IGksIHRlbXAsIGRpZmYgPSBNYXRoLlBJICogMiwgdmFsdWVcbiAgZm9yIChpID0gMDsgaSA8IGFyci5sZW5ndGg7aSsrKSB7XG4gICAgdGVtcCA9IGdldEFuZ2xlRGlmZihhcnJbaV0sIGFuZ2xlKVxuICAgIGlmIChkaWZmIDwgdGVtcCkge1xuICAgICAgZGlmZiA9IHRlbXBcbiAgICAgIHZhbHVlID0gYXJyW2ldXG4gICAgfVxuICB9XG4gIHJldHVybiB2YWx1ZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplQW5nbGUodmFsKSB7XG4gIHdoaWxlICh2YWwgPCAwKSB7XG4gICAgdmFsICs9IDIgKiBNYXRoLlBJXG4gIH1cbiAgd2hpbGUgKHZhbCA+IDIgKiBNYXRoLlBJKSB7XG4gICAgdmFsIC09IDIgKiBNYXRoLlBJXG4gIH1cbiAgcmV0dXJuIHZhbFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKGFuZ2xlLCBsZW5ndGgsIGNlbnRlcikge1xuICBjZW50ZXIgPSBjZW50ZXIgfHwgbmV3IFBvaW50KDAsIDApXG4gIHJldHVybiBjZW50ZXIuYWRkKG5ldyBQb2ludChsZW5ndGggKiBNYXRoLmNvcyhhbmdsZSksIGxlbmd0aCAqIE1hdGguc2luKGFuZ2xlKSkpXG59XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9nZW9tZXRyeS9wb2ludCdcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSAnLi9nZW9tZXRyeS9yZWN0YW5nbGUnXG5pbXBvcnQge1xuICBnZXRQb2ludE9uTGluZUJ5TGVuZ2h0LFxuICBkaXJlY3RDcm9zc2luZyxcbiAgYm91bmRUb0xpbmVcbn0gZnJvbSAnLi9nZW9tZXRyeS9ib3VuZHMnXG5cbmltcG9ydCB7XG4gIGdldEFuZ2xlLFxuICBub3JtYWxpemVBbmdsZSxcbiAgYm91bmRBbmdsZSxcbiAgZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtXG59IGZyb20gJy4vZ2VvbWV0cnkvYW5nbGVzJ1xuXG5leHBvcnQgY2xhc3MgQm91bmQge1xuICBjb25zdHJ1Y3RvciAoKSB7fVxuXG4gIGJvdW5kKHBvaW50LCBfc2l6ZSkge1xuICAgIHJldHVybiBwb2ludFxuICB9XG5cbiAgcmVmcmVzaCAoKSB7fVxuXG4gIHN0YXRpYyBib3VuZGluZygpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyB0aGlzKC4uLmFyZ3VtZW50cylcbiAgICByZXR1cm4gaW5zdGFuY2UuYm91bmQuYmluZChpbnN0YW5jZSlcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb1JlY3RhbmdsZSBleHRlbmRzIEJvdW5kIHtcbiAgY29uc3RydWN0b3IocmVjdGFuZ2xlKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMucmVjdGFuZ2xlID0gcmVjdGFuZ2xlXG4gIH1cblxuICBib3VuZChwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IGNhbGNQb2ludCA9IHBvaW50LmNsb25lKClcbiAgICBjb25zdCByZWN0UDIgPSB0aGlzLnJlY3RhbmdsZS5nZXRQMygpXG5cbiAgICBpZiAodGhpcy5yZWN0YW5nbGUucG9zaXRpb24ueCA+IGNhbGNQb2ludC54KSB7XG4gICAgICAoY2FsY1BvaW50LnggPSB0aGlzLnJlY3RhbmdsZS5wb3NpdGlvbi54KVxuICAgIH1cbiAgICBpZiAodGhpcy5yZWN0YW5nbGUucG9zaXRpb24ueSA+IGNhbGNQb2ludC55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHRoaXMucmVjdGFuZ2xlLnBvc2l0aW9uLnlcbiAgICB9XG4gICAgaWYgKHJlY3RQMi54IDwgY2FsY1BvaW50LnggKyBzaXplLngpIHtcbiAgICAgIGNhbGNQb2ludC54ID0gcmVjdFAyLnggLSBzaXplLnhcbiAgICB9XG4gICAgaWYgKHJlY3RQMi55IDwgY2FsY1BvaW50LnkgKyBzaXplLnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gcmVjdFAyLnkgLSBzaXplLnlcbiAgICB9XG5cbiAgICByZXR1cm4gY2FsY1BvaW50XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9FbGVtZW50IGV4dGVuZHMgQm91bmRUb1JlY3RhbmdsZSB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbnRhaW5lcikge1xuICAgIHN1cGVyKFJlY3RhbmdsZS5mcm9tRWxlbWVudChlbGVtZW50LCBjb250YWluZXIpKVxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lclxuICB9XG5cbiAgcmVmcmVzaCAoKSB7XG4gICAgdGhpcy5yZWN0YW5nbGUgPSBSZWN0YW5nbGUuZnJvbUVsZW1lbnQodGhpcy5lbGVtZW50LCB0aGlzLmNvbnRhaW5lcilcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb0xpbmVYIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3Rvcih4LCBzdGFydFksIGVuZFkpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy54ID0geFxuICAgIHRoaXMuc3RhcnRZID0gc3RhcnRZXG4gICAgdGhpcy5lbmRZID0gZW5kWVxuICB9XG5cbiAgYm91bmQocG9pbnQsIHNpemUpIHtcbiAgICBjb25zdCBjYWxjUG9pbnQgPSBwb2ludC5jbG9uZSgpXG5cbiAgICBjYWxjUG9pbnQueCA9IHRoaXMueFxuICAgIGlmICh0aGlzLnN0YXJ0WSA+IGNhbGNQb2ludC55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHRoaXMuc3RhcnRZXG4gICAgfVxuICAgIGlmICh0aGlzLmVuZFkgPCBjYWxjUG9pbnQueSArIHNpemUueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSB0aGlzLmVuZFkgLSBzaXplLnlcbiAgICB9XG5cbiAgICByZXR1cm4gY2FsY1BvaW50XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9MaW5lWSBleHRlbmRzIEJvdW5kIHtcbiAgY29uc3RydWN0b3IoeSwgc3RhcnRYLCBlbmRYKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMueSA9IHlcbiAgICB0aGlzLnN0YXJ0WCA9IHN0YXJ0WFxuICAgIHRoaXMuZW5kWCA9IGVuZFhcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgY2FsY1BvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIGNhbGNQb2ludC55ID0gdGhpcy55XG4gICAgaWYgKHRoaXMuc3RhcnRYID4gY2FsY1BvaW50LngpIHtcbiAgICAgIGNhbGNQb2ludC54ID0gdGhpcy5zdGFydFhcbiAgICB9XG4gICAgaWYgKHRoaXMuZW5kWCA8IGNhbGNQb2ludC54ICsgc2l6ZS54KSB7XG4gICAgICBjYWxjUG9pbnQueCA9IHRoaXMuZW5kWCAtIHNpemUueFxuICAgIH1cbiAgICByZXR1cm4gY2FsY1BvaW50XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9MaW5lIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3RvcihzdGFydFBvaW50LCBlbmRQb2ludCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnN0YXJ0UG9pbnQgPSBzdGFydFBvaW50XG4gICAgdGhpcy5lbmRQb2ludCA9IGVuZFBvaW50XG4gICAgY29uc3QgYWxwaGEgPSBNYXRoLmF0YW4yKGVuZFBvaW50LnkgLSBzdGFydFBvaW50LnksIGVuZFBvaW50LnggLSBzdGFydFBvaW50LngpXG4gICAgY29uc3QgYmV0YSA9IGFscGhhICsgTWF0aC5QSSAvIDJcbiAgICB0aGlzLnNvbWVLID0gMTBcbiAgICB0aGlzLmNvc0JldGEgPSBNYXRoLmNvcyhiZXRhKVxuICAgIHRoaXMuc2luQmV0YSA9IE1hdGguc2luKGJldGEpXG4gIH1cblxuICBib3VuZChwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IHBvaW50MiA9IG5ldyBQb2ludChcbiAgICAgIHBvaW50LnggKyB0aGlzLnNvbWVLICogdGhpcy5jb3NCZXRhLFxuICAgICAgcG9pbnQueSArIHRoaXMuc29tZUsgKiB0aGlzLnNpbkJldGFcbiAgICApXG5cbiAgICBjb25zdCBuZXdFbmRQb2ludCA9IGdldFBvaW50T25MaW5lQnlMZW5naHQodGhpcy5lbmRQb2ludCwgdGhpcy5zdGFydFBvaW50LCBzaXplLngpXG4gICAgY29uc3QgcG9pbnRDcm9zc2luZyA9IGRpcmVjdENyb3NzaW5nKHRoaXMuc3RhcnRQb2ludCwgdGhpcy5lbmRQb2ludCwgcG9pbnQsIHBvaW50MilcblxuICAgIHJldHVybiBib3VuZFRvTGluZSh0aGlzLnN0YXJ0UG9pbnQsIG5ld0VuZFBvaW50LCBwb2ludENyb3NzaW5nKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvQ2lyY2xlIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3RvcihjZW50ZXIsIHJhZGl1cykge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLmNlbnRlciA9IGNlbnRlclxuICAgIHRoaXMucmFkaXVzID0gcmFkaXVzXG4gIH1cblxuICBib3VuZChwb2ludCwgX3NpemUpIHtcbiAgICByZXR1cm4gZ2V0UG9pbnRPbkxpbmVCeUxlbmdodCh0aGlzLmNlbnRlciwgcG9pbnQsIHRoaXMucmFkaXVzKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvQXJjIGV4dGVuZHMgQm91bmRUb0NpcmNsZSB7XG4gIGNvbnN0cnVjdG9yKGNlbnRlciwgcmFkaXVzLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSkge1xuICAgIHN1cGVyKGNlbnRlciwgcmFkaXVzKVxuICAgIHRoaXMuX3N0YXJ0QW5nbGUgPSBzdGFydEFuZ2xlXG4gICAgdGhpcy5fZW5kQW5nbGUgPSBlbmRBbmdsZVxuICB9XG5cbiAgc3RhcnRBbmdsZSgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMuX3N0YXJ0QW5nbGUgPT09ICdmdW5jdGlvbicgPyB0aGlzLl9zdGFydEFuZ2xlKCkgOiB0aGlzLl9zdGFydEFuZ2xlXG4gIH1cblxuICBlbmRBbmdsZSgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMuX2VuZEFuZ2xlID09PSAnZnVuY3Rpb24nID8gdGhpcy5fZW5kQW5nbGUoKSA6IHRoaXMuX2VuZEFuZ2xlXG4gIH1cblxuICBib3VuZChwb2ludCwgX3NpemUpIHtcbiAgICBsZXQgYW5nbGUgPSBnZXRBbmdsZSh0aGlzLmNlbnRlciwgcG9pbnQpXG4gICAgYW5nbGUgPSBub3JtYWxpemVBbmdsZShhbmdsZSlcbiAgICBhbmdsZSA9IGJvdW5kQW5nbGUodGhpcy5zdGFydEFuZ2xlKCksIHRoaXMuZW5kQW5nbGUoKSwgYW5nbGUpXG4gICAgcmV0dXJuIGdldFBvaW50RnJvbVJhZGlhbFN5c3RlbShhbmdsZSwgdGhpcy5yYWRpdXMsIHRoaXMuY2VudGVyKVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhcnJheSwgdmFsKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoYXJyYXlbaV0gPT09IHZhbCkge1xuICAgICAgYXJyYXkuc3BsaWNlKGksIDEpXG4gICAgICBpLS1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycmF5XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByYW5nZShzdGFydCwgc3RvcCwgc3RlcCkge1xuICBjb25zdCByZXN1bHQgPSBbXVxuICBpZiAodHlwZW9mIHN0b3AgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgc3RvcCA9IHN0YXJ0XG4gICAgc3RhcnQgPSAwXG4gIH1cbiAgaWYgKHR5cGVvZiBzdGVwID09PSAndW5kZWZpbmVkJykge1xuICAgIHN0ZXAgPSAxXG4gIH1cbiAgaWYgKChzdGVwID4gMCAmJiBzdGFydCA+PSBzdG9wKSB8fCAoc3RlcCA8IDAgJiYgc3RhcnQgPD0gc3RvcCkpIHtcbiAgICByZXR1cm4gW11cbiAgfVxuICBmb3IgKGxldCBpID0gc3RhcnQ7IHN0ZXAgPiAwID8gaSA8IHN0b3AgOiBpID4gc3RvcDsgaSArPSBzdGVwKSB7XG4gICAgcmVzdWx0LnB1c2goaSlcbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9nZW9tZXRyeS9wb2ludCdcbmltcG9ydCB7IGFkZFBvaW50VG9Cb3VuZFBvaW50cyB9IGZyb20gJy4vZ2VvbWV0cnkvYm91bmRzJ1xuXG5pbXBvcnQge1xuICBpbmRleE9mTmVhcmVzdFBvaW50LFxuICBnZXREaXN0YW5jZVxufSBmcm9tICcuL2dlb21ldHJ5L2Rpc3RhbmNlcydcblxuY2xhc3MgQmFzaWNTdHJhdGVneSB7XG4gIGNvbnN0cnVjdG9yKHJlY3RhbmdsZSwgb3B0aW9ucz17fSkge1xuICAgIHRoaXMucmVjdGFuZ2xlID0gcmVjdGFuZ2xlXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9uc1xuICB9XG5cbiAgZ2V0IGJvdW5kUmVjdCAoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGlzLnJlY3RhbmdsZSA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMucmVjdGFuZ2xlKCkgOiB0aGlzLnJlY3RhbmdsZVxuICB9XG59XG5cbmNsYXNzIE5vdENyb3NzaW5nU3RyYXRlZ3kgZXh0ZW5kcyBCYXNpY1N0cmF0ZWd5IHtcbiAgcG9zaXRpb25pbmcgKHJlY3RhbmdsZUxpc3QsIGluZGV4ZXNPZk5ld3MpIHtcbiAgICBjb25zdCBzdGF0aWNSZWN0YW5nbGVJbmRleGVzID0gcmVjdGFuZ2xlTGlzdC5yZWR1Y2UoKGluZGV4ZXMsIF9yZWN0LCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGluZGV4ZXNPZk5ld3MuaW5kZXhPZihpbmRleCkgPT09IC0xKSB7XG4gICAgICAgIGluZGV4ZXMucHVzaChpbmRleClcbiAgICAgIH1cbiAgICAgIHJldHVybiBpbmRleGVzXG4gICAgfSwgW10pXG5cbiAgICBpbmRleGVzT2ZOZXdzLmZvckVhY2goKGluZGV4KSA9PiB7XG4gICAgICBsZXQgcmVjdCA9IHJlY3RhbmdsZUxpc3RbaW5kZXhdXG4gICAgICBsZXQgcmVtb3ZhYmxlID0gZmFsc2VcblxuICAgICAgc3RhdGljUmVjdGFuZ2xlSW5kZXhlcy5mb3JFYWNoKChpbmRleE9mU3RhdGljKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YXRpY1JlY3QgPSByZWN0YW5nbGVMaXN0W2luZGV4T2ZTdGF0aWNdXG4gICAgICAgIHJlY3QgPSBzdGF0aWNSZWN0Lm1vdmVUb0JvdW5kKHJlY3QpXG4gICAgICB9KVxuXG4gICAgICByZW1vdmFibGUgPSBzdGF0aWNSZWN0YW5nbGVJbmRleGVzLnNvbWUoKGluZGV4T2ZTdGF0aWMpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhdGljUmVjdCA9IHJlY3RhbmdsZUxpc3RbaW5kZXhPZlN0YXRpY11cbiAgICAgICAgcmV0dXJuICAhIXN0YXRpY1JlY3QuYW5kKHJlY3QpXG4gICAgICB9KSB8fCByZWN0LmFuZCh0aGlzLmJvdW5kUmVjdCkuZ2V0U3F1YXJlKCkgIT09IHJlY3QuZ2V0U3F1YXJlKClcblxuICAgICAgaWYgKHJlbW92YWJsZSkge1xuICAgICAgICByZWN0LnJlbW92YWJsZSA9IHRydWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMucHVzaChpbmRleClcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiByZWN0YW5nbGVMaXN0XG4gIH1cblxuICBzb3J0aW5nKG9kbERyYWdnYWJsZXNMaXN0LCBuZXdEcmFnZ2FibGVzLCBpbmRleE9mTmV3cykge1xuICAgIGNvbnN0IGRyYWdnYWJsZXMgPSBvZGxEcmFnZ2FibGVzTGlzdC5jb25jYXQobmV3RHJhZ2dhYmxlcylcbiAgICBuZXdEcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgaW5kZXhPZk5ld3MucHVzaChkcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSlcbiAgICB9KVxuICAgIHJldHVybiBkcmFnZ2FibGVzXG4gIH1cbn1cblxuY2xhc3MgRmxvYXRMZWZ0U3RyYXRlZ3kgZXh0ZW5kcyBCYXNpY1N0cmF0ZWd5IHtcbiAgY29uc3RydWN0b3IocmVjdGFuZ2xlLCBvcHRpb25zPXt9KSB7XG4gICAgc3VwZXIocmVjdGFuZ2xlLCBvcHRpb25zKVxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgcmVtb3ZhYmxlOiB0cnVlXG4gICAgfSwgb3B0aW9ucylcblxuICAgIHRoaXMucmFkaXVzID0gb3B0aW9ucy5yYWRpdXMgfHwgODBcblxuICAgIHRoaXMucGFkZGluZ1RvcExlZnQgPSBvcHRpb25zLnBhZGRpbmdUb3BMZWZ0IHx8IG5ldyBQb2ludCgwLCAwKVxuICAgIHRoaXMucGFkZGluZ0JvdHRvbVJpZ2h0ID0gb3B0aW9ucy5wYWRkaW5nQm90dG9tUmlnaHQgfHwgbmV3IFBvaW50KDAsIDApXG4gICAgdGhpcy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgPSBvcHRpb25zLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyB8fCAwXG5cbiAgICB0aGlzLmdldERpc3RhbmNlID0gb3B0aW9ucy5nZXREaXN0YW5jZSB8fCBnZXREaXN0YW5jZVxuICAgIHRoaXMuZ2V0UG9zaXRpb24gPSBvcHRpb25zLmdldFBvc2l0aW9uIHx8ICgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucG9zaXRpb24pXG4gIH1cblxuICBwb3NpdGlvbmluZyhyZWN0YW5nbGVMaXN0LCBfaW5kZXhlc09mTmV3cykge1xuICAgIGNvbnN0IGJvdW5kUmVjdCA9IHRoaXMuYm91bmRSZWN0XG4gICAgY29uc3QgcmVjdFAyID0gYm91bmRSZWN0LmdldFAyKClcbiAgICBsZXQgYm91bmRhcnlQb2ludHMgPSBbYm91bmRSZWN0LnBvc2l0aW9uXVxuXG4gICAgcmVjdGFuZ2xlTGlzdC5mb3JFYWNoKChyZWN0LCByZWN0SW5kZXgpID0+IHtcbiAgICAgIGxldCBwb3NpdGlvbiwgaXNWYWxpZCA9IGZhbHNlXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvdW5kYXJ5UG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHBvc2l0aW9uID0gbmV3IFBvaW50KFxuICAgICAgICAgIGJvdW5kYXJ5UG9pbnRzW2ldLnggKyB0aGlzLnBhZGRpbmdUb3BMZWZ0LngsXG4gICAgICAgICAgaSA+IDAgPyAoYm91bmRhcnlQb2ludHNbaSAtIDFdLnkgKyB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcykgOiAoYm91bmRSZWN0LnBvc2l0aW9uLnkgKyB0aGlzLnBhZGRpbmdUb3BMZWZ0LnkpXG4gICAgICAgIClcblxuICAgICAgICBpc1ZhbGlkID0gKHBvc2l0aW9uLnggKyByZWN0LnNpemUueCA8IHJlY3RQMi54KVxuXG4gICAgICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgcG9zaXRpb24gPSBuZXcgUG9pbnQoXG4gICAgICAgICAgYm91bmRSZWN0LnBvc2l0aW9uLnggKyB0aGlzLnBhZGRpbmdUb3BMZWZ0LngsXG4gICAgICAgICAgYm91bmRhcnlQb2ludHNbYm91bmRhcnlQb2ludHMubGVuZ3RoIC0gMV0ueSArIChyZWN0SW5kZXggPiAwID8gdGhpcy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgOiB0aGlzLnBhZGRpbmdUb3BMZWZ0LnkpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgcmVjdC5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnJlbW92YWJsZSAmJiByZWN0LmdldFAzKCkueSA+IGJvdW5kUmVjdC5nZXRQMygpLnkpIHtcbiAgICAgICAgcmVjdC5yZW1vdmFibGUgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGJvdW5kYXJ5UG9pbnRzID0gYWRkUG9pbnRUb0JvdW5kUG9pbnRzKGJvdW5kYXJ5UG9pbnRzLCByZWN0LmdldFAzKCkuYWRkKHRoaXMucGFkZGluZ0JvdHRvbVJpZ2h0KSlcbiAgICB9KVxuICAgIHJldHVybiByZWN0YW5nbGVMaXN0XG4gIH1cblxuICBzb3J0aW5nKG9kbERyYWdnYWJsZXNMaXN0LCBuZXdEcmFnZ2FibGVzLCBpbmRleE9mTmV3cykge1xuICAgIGNvbnN0IG5ld0xpc3QgPSBvZGxEcmFnZ2FibGVzTGlzdC5jb25jYXQoKVxuICAgIGNvbnN0IGxpc3RPbGRQb3NpdGlvbiA9IG9kbERyYWdnYWJsZXNMaXN0Lm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUuZ2V0UG9zaXRpb24oKSlcbiAgICBuZXdEcmFnZ2FibGVzLmZvckVhY2goKG5ld0RyYWdnYWJsZSkgPT4ge1xuICAgICAgbGV0IGluZGV4ID0gaW5kZXhPZk5lYXJlc3RQb2ludChsaXN0T2xkUG9zaXRpb24sIHRoaXMuZ2V0UG9zaXRpb24obmV3RHJhZ2dhYmxlKSwgdGhpcy5yYWRpdXMsIHRoaXMuZ2V0RGlzdGFuY2UpXG4gICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgIGluZGV4ID0gbmV3TGlzdC5sZW5ndGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluZGV4ID0gbmV3TGlzdC5pbmRleE9mKG9kbERyYWdnYWJsZXNMaXN0W2luZGV4XSlcbiAgICAgIH1cbiAgICAgIG5ld0xpc3Quc3BsaWNlKGluZGV4LCAwLCBuZXdEcmFnZ2FibGUpXG4gICAgfSlcbiAgICBuZXdEcmFnZ2FibGVzLmZvckVhY2goKG5ld0RyYWdnYWJsZSkgPT4ge1xuICAgICAgaW5kZXhPZk5ld3MucHVzaChuZXdMaXN0LmluZGV4T2YobmV3RHJhZ2dhYmxlKSlcbiAgICB9KVxuICAgIHJldHVybiBuZXdMaXN0XG4gIH1cbn1cblxuY2xhc3MgRmxvYXRSaWdodFN0cmF0ZWd5IGV4dGVuZHMgRmxvYXRMZWZ0U3RyYXRlZ3kge1xuICBjb25zdHJ1Y3RvcihyZWN0YW5nbGUsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcihyZWN0YW5nbGUsIG9wdGlvbnMpXG5cbiAgICB0aGlzLnBhZGRpbmdUb3BSaWdodCA9IG9wdGlvbnMucGFkZGluZ1RvcFJpZ2h0IHx8IG5ldyBQb2ludCg1LCA1KVxuICAgIHRoaXMucGFkZGluZ0JvdHRvbUxlZnQgPSBvcHRpb25zLnBhZGRpbmdCb3R0b21MZWZ0IHx8IG5ldyBQb2ludCgwLCAwKVxuICAgIHRoaXMueUdhcEJldHdlZW5EcmFnZ2FibGVzID0gb3B0aW9ucy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgfHwgMFxuXG4gICAgdGhpcy5wYWRkaW5nQm90dG9tTmVnTGVmdCA9IG5ldyBQb2ludCgtdGhpcy5wYWRkaW5nQm90dG9tTGVmdC54LCB0aGlzLnBhZGRpbmdCb3R0b21MZWZ0LnkpXG4gIH1cblxuICBwb3NpdGlvbmluZyhyZWN0YW5nbGVMaXN0LCBfaW5kZXhlc09mTmV3cykge1xuICAgIGNvbnN0IGJvdW5kUmVjdCA9IHRoaXMuYm91bmRSZWN0XG4gICAgbGV0IGJvdW5kYXJ5UG9pbnRzID0gW2JvdW5kUmVjdC5nZXRQMigpXVxuXG4gICAgcmVjdGFuZ2xlTGlzdC5mb3JFYWNoKChyZWN0LCByZWN0SW5kZXgpID0+IHtcbiAgICAgIGxldCBwb3NpdGlvbiwgaXNWYWxpZCA9IGZhbHNlXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvdW5kYXJ5UG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHBvc2l0aW9uID0gbmV3IFBvaW50KFxuICAgICAgICAgIGJvdW5kYXJ5UG9pbnRzW2ldLnggLSByZWN0LnNpemUueCAtIHRoaXMucGFkZGluZ1RvcFJpZ2h0LngsXG4gICAgICAgICAgaSA+IDAgPyAoYm91bmRhcnlQb2ludHNbaSAtIDFdLnkgKyB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcykgOiAoYm91bmRSZWN0LnBvc2l0aW9uLnkgKyB0aGlzLnBhZGRpbmdUb3BSaWdodC55KVxuICAgICAgICApXG5cbiAgICAgICAgaXNWYWxpZCA9IChwb3NpdGlvbi54ID4gcmVjdC5wb3NpdGlvbi54KVxuICAgICAgICBpZiAoaXNWYWxpZCkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICBwb3NpdGlvbiA9IG5ldyBQb2ludChcbiAgICAgICAgICBib3VuZFJlY3QuZ2V0UDIoKS54ICAtIHJlY3Quc2l6ZS54IC0gdGhpcy5wYWRkaW5nVG9wUmlnaHQueCxcbiAgICAgICAgICBib3VuZGFyeVBvaW50c1tib3VuZGFyeVBvaW50cy5sZW5ndGggLSAxXS55ICsgKHJlY3RJbmRleCA+IDAgPyB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyA6IHRoaXMucGFkZGluZ1RvcFJpZ2h0LnkpXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIHJlY3QucG9zaXRpb24gPSBwb3NpdGlvblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZW1vdmFibGUgJiYgcmVjdC5nZXRQNCgpLnkgPiBib3VuZFJlY3QuZ2V0UDQoKS55KSB7XG4gICAgICAgIHJlY3QucmVtb3ZhYmxlID0gdHJ1ZVxuICAgICAgfVxuICAgICAgYm91bmRhcnlQb2ludHMgPSBhZGRQb2ludFRvQm91bmRQb2ludHMoYm91bmRhcnlQb2ludHMsIHJlY3QuZ2V0UDQoKS5hZGQodGhpcy5wYWRkaW5nQm90dG9tTmVnTGVmdCksIHRydWUpXG4gICAgfSlcbiAgICByZXR1cm4gcmVjdGFuZ2xlTGlzdFxuICB9XG59XG5cbmV4cG9ydCB7IE5vdENyb3NzaW5nU3RyYXRlZ3ksIEZsb2F0TGVmdFN0cmF0ZWd5LCBGbG9hdFJpZ2h0U3RyYXRlZ3kgfVxuIiwiaW1wb3J0IHJhbmdlIGZyb20gJy4vdXRpbHMvcmFuZ2UuanMnXG5pbXBvcnQgcmVtb3ZlSXRlbSBmcm9tICcuL3V0aWxzL3JlbW92ZS1hcnJheS1pdGVtJ1xuaW1wb3J0IGdldERlZmF1bHRDb250YWluZXIgZnJvbSAnLi91dGlscy9nZXQtZGVmYXVsdC1jb250YWluZXInXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnRFbWl0dGVyJ1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tICcuL2dlb21ldHJ5L3JlY3RhbmdsZSdcbmltcG9ydCB7IHRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3RvcnkgfSBmcm9tICcuL2dlb21ldHJ5L2Rpc3RhbmNlcydcbmltcG9ydCB7IHNjb3BlcywgZGVmYXVsdFNjb3BlIH0gZnJvbSAnLi9zY29wZSdcblxuaW1wb3J0IHsgRmxvYXRMZWZ0U3RyYXRlZ3kgfSBmcm9tICcuL3Bvc2l0aW9uaW5nJ1xuaW1wb3J0IHsgQm91bmRUb0VsZW1lbnQgfSBmcm9tICcuL2JvdW5kaW5nJ1xuXG5jb25zdCBhZGRUb0RlZmF1bHRTY29wZSA9IGZ1bmN0aW9uKHRhcmdldCkge1xuICBkZWZhdWx0U2NvcGUuYWRkVGFyZ2V0KHRhcmdldClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFyZ2V0IGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgZHJhZ2dhYmxlcywgb3B0aW9ucyA9IHt9KSB7XG4gICAgc3VwZXIob3B0aW9ucylcbiAgICBjb25zdCB0YXJnZXQgPSB0aGlzXG5cbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHRpbWVFbmQ6IDIwMCxcbiAgICAgIHRpbWVFeGNhbmdlOiA0MDBcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGhpcy5wb3NpdGlvbmluZ1N0cmF0ZWd5ID0gb3B0aW9ucy5zdHJhdGVneSB8fCBuZXcgRmxvYXRMZWZ0U3RyYXRlZ3koXG4gICAgICB0aGlzLmdldFJlY3RhbmdsZS5iaW5kKHRoaXMpLFxuICAgICAge1xuICAgICAgICByYWRpdXM6IDgwLFxuICAgICAgICBnZXREaXN0YW5jZTogdHJhbnNmb3JtZWRTcGFjZURpc3RhbmNlRmFjdG9yeSh7IHg6IDEsIHk6IDQgfSksXG4gICAgICAgIHJlbW92YWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIClcblxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgICBkcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnRhcmdldHMucHVzaCh0YXJnZXQpKVxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZXNcblxuICAgIFRhcmdldC5lbWl0dGVyLmVtaXQoJ3RhcmdldDpjcmVhdGUnLCB0aGlzKVxuXG4gICAgdGhpcy5zdGFydEJvdW5kaW5nKClcbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgc3RhcnRCb3VuZGluZygpIHtcbiAgICB0aGlzLmJvdW5kID0gdGhpcy5vcHRpb25zLmJvdW5kIHx8IEJvdW5kVG9FbGVtZW50LmJvdW5kaW5nKHRoaXMuZWxlbWVudClcbiAgfVxuXG4gIHBvc2l0aW9uaW5nIChkcmFnZ2FibGVzLCBpbmRleGVzT2ZOZXcpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbmluZ1N0cmF0ZWd5LnBvc2l0aW9uaW5nKGRyYWdnYWJsZXMsIGluZGV4ZXNPZk5ldylcbiAgfVxuXG4gIHNvcnRpbmcgKG9sZERyYWdnYWJsZXMsIG5ld0RyYWdnYWJsZXMsIGluZGV4T2ZOZXdzKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25pbmdTdHJhdGVneS5zb3J0aW5nKG9sZERyYWdnYWJsZXMsIG5ld0RyYWdnYWJsZXMsIGluZGV4T2ZOZXdzKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBsZXQgcmVjdGFuZ2xlcywgaW5kZXhlc09mTmV3XG5cbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcyA9IHRoaXMuZHJhZ2dhYmxlcy5maWx0ZXIoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgbGV0IGVsZW1lbnQgPSBkcmFnZ2FibGUuZWxlbWVudC5wYXJlbnROb2RlXG4gICAgICB3aGlsZSAoZWxlbWVudCkge1xuICAgICAgICBpZiAoZWxlbWVudCA9PT0gdGhpcy5lbGVtZW50KSB7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlXG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9KVxuXG4gICAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmxlbmd0aCkge1xuICAgICAgaW5kZXhlc09mTmV3ID0gcmFuZ2UodGhpcy5pbm5lckRyYWdnYWJsZXMubGVuZ3RoKVxuICAgICAgcmVjdGFuZ2xlcyA9IHRoaXMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgICAgfSksIGluZGV4ZXNPZk5ldylcbiAgICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgaW5kZXhlc09mTmV3KVxuICAgICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB0aGlzLmVtaXQoJ3RhcmdldDphZGQnLCBkcmFnZ2FibGUpKVxuICAgIH1cbiAgfVxuXG4gIGdldFJlY3RhbmdsZSgpIHtcbiAgICByZXR1cm4gUmVjdGFuZ2xlLmZyb21FbGVtZW50KHRoaXMuZWxlbWVudCwgdGhpcy5jb250YWluZXIsIHRydWUpXG4gIH1cblxuICBjYXRjaERyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmNhdGNoRHJhZ2dhYmxlKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmNhdGNoRHJhZ2dhYmxlKHRoaXMsIGRyYWdnYWJsZSlcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGFyZ2V0UmVjdGFuZ2xlID0gdGhpcy5nZXRSZWN0YW5nbGUoKVxuICAgICAgY29uc3QgZHJhZ2dhYmxlU3F1YXJlID0gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpLmdldFNxdWFyZSgpXG5cbiAgICAgIHJldHVybiBkcmFnZ2FibGVTcXVhcmUgPCB0YXJnZXRSZWN0YW5nbGUuZ2V0U3F1YXJlKClcbiAgICAgICAgICAgICAgJiYgdGFyZ2V0UmVjdGFuZ2xlLmluY2x1ZGVQb2ludChkcmFnZ2FibGUuZ2V0Q2VudGVyKCkpXG4gICAgfVxuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UmVjdGFuZ2xlKCkucG9zaXRpb25cbiAgfVxuXG4gIGdldFNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UmVjdGFuZ2xlKCkuc2l6ZVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICBzY29wZXMuZm9yRWFjaCgoc2NvcGUpID0+IHJlbW92ZUl0ZW0oc2NvcGUudGFyZ2V0cywgdGhpcykpXG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgfSksIFtdKVxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgW10sIDApXG4gIH1cblxuICBvbkVuZChkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBuZXdEcmFnZ2FibGVzSW5kZXggPSBbXVxuXG4gICAgaWYgKHRoaXMuZ2V0UmVjdGFuZ2xlKCkuaW5jbHVkZVBvaW50KGRyYWdnYWJsZS5nZXRDZW50ZXIoKSkpIHtcbiAgICAgIGRyYWdnYWJsZS5wb3NpdGlvbiA9IHRoaXMuYm91bmQoZHJhZ2dhYmxlLnBvc2l0aW9uLCBkcmFnZ2FibGUuZ2V0U2l6ZSgpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICB0aGlzLmVtaXQoJ3RhcmdldDpiZWZvcmVBZGQnLCBkcmFnZ2FibGUpXG5cbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcyA9IHRoaXMuc29ydGluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcywgW2RyYWdnYWJsZV0sIG5ld0RyYWdnYWJsZXNJbmRleClcbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBuZXdEcmFnZ2FibGVzSW5kZXgpXG5cbiAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIG5ld0RyYWdnYWJsZXNJbmRleClcbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMSkge1xuICAgICAgdGhpcy5hZGRSZW1vdmVPbk1vdmUoZHJhZ2dhYmxlKVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgaW5kZXhlc09mTmV3LCB0aW1lKSB7XG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuc2xpY2UoMCkuZm9yRWFjaCgoZHJhZ2dhYmxlLCBpKSA9PiB7XG4gICAgICBjb25zdCByZWN0ID0gcmVjdGFuZ2xlc1tpXSxcbiAgICAgICAgdGltZUVuZCA9IHRpbWUgfHwgdGltZSA9PT0gMCA/IHRpbWUgOiBpbmRleGVzT2ZOZXcuaW5kZXhPZihpKSAhPT0gLTEgPyB0aGlzLm9wdGlvbnMudGltZUVuZCA6IHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZVxuXG4gICAgICBpZiAocmVjdC5yZW1vdmFibGUpIHtcbiAgICAgICAgZHJhZ2dhYmxlLm1vdmUoZHJhZ2dhYmxlLmluaXRpYWxQb3NpdGlvbiwgdGltZUVuZCwgdHJ1ZSwgdHJ1ZSlcbiAgICAgICAgcmVtb3ZlSXRlbSh0aGlzLmlubmVyRHJhZ2dhYmxlcywgZHJhZ2dhYmxlKVxuICAgICAgICB0aGlzLmVtaXQoJ3RhcmdldDpyZW1vdmUnLCBkcmFnZ2FibGUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkcmFnZ2FibGUubW92ZShyZWN0LnBvc2l0aW9uLCB0aW1lRW5kLCB0cnVlLCB0cnVlKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBhZGQoZHJhZ2dhYmxlLCB0aW1lKSB7XG4gICAgY29uc3QgbmV3RHJhZ2dhYmxlc0luZGV4ID0gdGhpcy5pbm5lckRyYWdnYWJsZXMubGVuZ3RoXG5cbiAgICB0aGlzLmVtaXQoJ3RhcmdldDpiZWZvcmVBZGQnLCBkcmFnZ2FibGUpXG5cbiAgICB0aGlzLnB1c2hJbm5lckRyYWdnYWJsZShkcmFnZ2FibGUpXG4gICAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgbmV3RHJhZ2dhYmxlc0luZGV4LCBkcmFnZ2FibGUpXG5cbiAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIFtuZXdEcmFnZ2FibGVzSW5kZXhdLCB0aW1lIHx8IDApXG4gICAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTEpIHtcbiAgICAgIHRoaXMuYWRkUmVtb3ZlT25Nb3ZlKGRyYWdnYWJsZSlcbiAgICB9XG4gIH1cblxuICBwdXNoSW5uZXJEcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKT09PS0xKSB7XG4gICAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5wdXNoKGRyYWdnYWJsZSlcbiAgICB9XG4gIH1cblxuICBhZGRSZW1vdmVPbk1vdmUoZHJhZ2dhYmxlKSB7XG4gICAgZHJhZ2dhYmxlLm9uKCdkcmFnOm1vdmUnLCB0aGlzLnJlbW92ZUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICB0aGlzLnJlbW92ZShkcmFnZ2FibGUpXG4gICAgfSlcblxuICAgIHRoaXMuZW1pdCgndGFyZ2V0OmFkZCcsIGRyYWdnYWJsZSlcbiAgfVxuXG4gIHJlbW92ZShkcmFnZ2FibGUpIHtcbiAgICBkcmFnZ2FibGUudW5zdWJzY3JpYmUoJ2RyYWc6bW92ZScsIHRoaXMucmVtb3ZlSGFuZGxlcilcblxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpXG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuc3BsaWNlKGluZGV4LCAxKVxuXG4gICAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgW10pXG5cbiAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIFtdKVxuICAgIHRoaXMuZW1pdCgndGFyZ2V0OnJlbW92ZScsIGRyYWdnYWJsZSlcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLm1vdmUoZHJhZ2dhYmxlLmluaXRpYWxQb3NpdGlvbiwgMCwgdHJ1ZSwgdHJ1ZSlcbiAgICAgIHRoaXMuZW1pdCgndGFyZ2V0OnJlbW92ZScsIGRyYWdnYWJsZSlcbiAgICB9KVxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzID0gW11cbiAgfVxuXG4gIGdldFNvcnRlZERyYWdnYWJsZXMoKSB7XG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuc2xpY2UoKVxuICB9XG5cbiAgZ2V0IGNvbnRhaW5lcigpIHtcbiAgICByZXR1cm4gKHRoaXMuX2NvbnRhaW5lciA9IHRoaXMuX2NvbnRhaW5lciB8fCB0aGlzLm9wdGlvbnMuY29udGFpbmVyIHx8IHRoaXMub3B0aW9ucy5wYXJlbnQgfHwgZ2V0RGVmYXVsdENvbnRhaW5lcih0aGlzLmVsZW1lbnQpKVxuICB9XG59XG5cblRhcmdldC5lbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcigpXG5UYXJnZXQuZW1pdHRlci5vbigndGFyZ2V0OmNyZWF0ZScsIGFkZFRvRGVmYXVsdFNjb3BlKVxuIiwiaW1wb3J0IHJlbW92ZUl0ZW0gZnJvbSAnLi91dGlscy9yZW1vdmUtYXJyYXktaXRlbSdcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudEVtaXR0ZXInXG5pbXBvcnQgRHJhZ2dhYmxlIGZyb20gJy4vZHJhZ2dhYmxlJ1xuaW1wb3J0IFRhcmdldCBmcm9tICcuL3RhcmdldCdcblxuY29uc3Qgc2NvcGVzID0gW11cblxuY2xhc3MgU2NvcGUgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvcihkcmFnZ2FibGVzLCB0YXJnZXRzLCBvcHRpb25zPXt9KSB7XG4gICAgc3VwZXIob3B0aW9ucylcbiAgICBzY29wZXMuZm9yRWFjaCgoc2NvcGUpID0+IHtcbiAgICAgIGlmIChkcmFnZ2FibGVzKSB7XG4gICAgICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICAgICAgcmVtb3ZlSXRlbShzY29wZS5kcmFnZ2FibGVzLCBkcmFnZ2FibGUpXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIGlmICh0YXJnZXRzKSB7XG4gICAgICAgIHRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB7XG4gICAgICAgICAgcmVtb3ZlSXRlbShzY29wZS50YXJnZXRzLCB0YXJnZXQpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZXMgfHwgW11cbiAgICB0aGlzLnRhcmdldHMgPSB0YXJnZXRzIHx8IFtdXG4gICAgc2NvcGVzLnB1c2godGhpcylcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICB0aW1lRW5kOiAob3B0aW9ucy50aW1lRW5kKSB8fCA0MDBcbiAgICB9XG5cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUuZHJhZ0VuZEFjdGlvbiA9ICgpID0+IHRoaXMub25FbmQoZHJhZ2dhYmxlKVxuICAgIH0pXG4gIH1cblxuICBhZGREcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxuICAgIGRyYWdnYWJsZS5kcmFnRW5kQWN0aW9uID0gKCkgPT4gdGhpcy5vbkVuZChkcmFnZ2FibGUpXG4gIH1cblxuICBhZGRUYXJnZXQodGFyZ2V0KSB7XG4gICAgdGhpcy50YXJnZXRzLnB1c2godGFyZ2V0KVxuICB9XG5cbiAgb25FbmQoZHJhZ2dhYmxlKSB7XG4gICAgY29uc3Qgc2hvdFRhcmdldHMgPSB0aGlzLnRhcmdldHMuZmlsdGVyKCh0YXJnZXQpID0+IHtcbiAgICAgIHJldHVybiB0YXJnZXQuZHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkgIT09IC0xXG4gICAgfSkuZmlsdGVyKCh0YXJnZXQpID0+IHtcbiAgICAgIHJldHVybiB0YXJnZXQuY2F0Y2hEcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICAgIH0pLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIHJldHVybiBhLmdldFJlY3RhbmdsZSgpLmdldFNxdWFyZSgpIC0gYi5nZXRSZWN0YW5nbGUoKS5nZXRTcXVhcmUoKVxuICAgIH0pXG5cbiAgICBpZiAoc2hvdFRhcmdldHMubGVuZ3RoKSB7XG4gICAgICBzaG90VGFyZ2V0c1swXS5vbkVuZChkcmFnZ2FibGUpXG4gICAgfSBlbHNlIGlmIChkcmFnZ2FibGUudGFyZ2V0cy5sZW5ndGgpIHtcbiAgICAgIGRyYWdnYWJsZS5waW5Qb3NpdGlvbihkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uLCB0aGlzLm9wdGlvbnMudGltZUVuZClcbiAgICB9XG5cbiAgICB0aGlzLmVtaXQoJ3Njb3BlOmNoYW5nZScpXG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLnRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB0YXJnZXQucmVzZXQoKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnJlZnJlc2goKSlcbiAgICB0aGlzLnRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB0YXJnZXQucmVmcmVzaCgpKVxuICB9XG5cbiAgZ2V0IHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXRzLm1hcCgodGFyZ2V0KSA9PiB7XG4gICAgICByZXR1cm4gdGFyZ2V0LmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4gdGhpcy5kcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSlcbiAgICB9KVxuICB9XG5cbiAgc2V0IHBvc2l0aW9ucyhwb3NpdGlvbnMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gJ3dyb25nIGFycmF5IGxlbmd0aCdcbiAgICBpZiAocG9zaXRpb25zLmxlbmd0aCA9PT0gdGhpcy50YXJnZXRzLmxlbmd0aCkge1xuICAgICAgdGhpcy50YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4gdGFyZ2V0LnJlc2V0KCkpXG5cbiAgICAgIHBvc2l0aW9ucy5mb3JFYWNoKCh0YXJnZXRJbmRleGVzLCBpKSA9PiB7XG4gICAgICAgIHRhcmdldEluZGV4ZXMuZm9yRWFjaCgoaW5kZXgpID0+IHtcbiAgICAgICAgICB0aGlzLnRhcmdldHNbaV0uYWRkKHRoaXMuZHJhZ2dhYmxlc1tpbmRleF0pXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBtZXNzYWdlXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IGRlZmF1bHRTY29wZSA9IG5ldyBTY29wZSgpXG5cbmZ1bmN0aW9uIHNjb3BlKGZuKSB7XG4gIGNvbnN0IGN1cnJlbnRTY29wZSA9IG5ldyBTY29wZSgpXG5cbiAgY29uc3QgYWRkRHJhZ2dhYmxlVG9TY29wZSA9IGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICAgIGN1cnJlbnRTY29wZS5hZGREcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICAgIERyYWdnYWJsZS5lbWl0dGVyLmludGVycnVwdCgpXG4gIH1cblxuICBjb25zdCBhZGRUYXJnZXRUb1Njb3BlID0gZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgY3VycmVudFNjb3BlLmFkZFRhcmdldCh0YXJnZXQpXG4gICAgRHJhZ2dhYmxlLmVtaXR0ZXIuaW50ZXJydXB0KClcbiAgfVxuXG4gIERyYWdnYWJsZS5lbWl0dGVyLnByZXBlbmRPbignZHJhZ2dhYmxlOmNyZWF0ZScsIGFkZERyYWdnYWJsZVRvU2NvcGUpXG4gIFRhcmdldC5lbWl0dGVyLnByZXBlbmRPbigndGFyZ2V0OmNyZWF0ZScsIGFkZFRhcmdldFRvU2NvcGUpXG4gIGZuLmNhbGwoKVxuICBEcmFnZ2FibGUuZW1pdHRlci51bnN1YnNjcmliZSgnZHJhZ2dhYmxlOmNyZWF0ZScsIGFkZERyYWdnYWJsZVRvU2NvcGUpXG4gIFRhcmdldC5lbWl0dGVyLnVuc3Vic2NyaWJlKCd0YXJnZXQ6Y3JlYXRlJywgYWRkVGFyZ2V0VG9TY29wZSlcbiAgcmV0dXJuIGN1cnJlbnRTY29wZVxufVxuXG5leHBvcnQgeyBzY29wZXMsIGRlZmF1bHRTY29wZSwgU2NvcGUsIHNjb3BlIH1cbiIsImZ1bmN0aW9uIGNoZWNrU3VwcG9ydFBhc3NpdmVFdmVudHMoKSB7XG4gIGxldCBwYXNzaXZlU3VwcG9ydGVkID0gZmFsc2VcblxuICB0cnkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdwYXNzaXZlJywge1xuICAgICAgZ2V0KCkge1xuICAgICAgICByZXR1cm4gKHBhc3NpdmVTdXBwb3J0ZWQgPSB0cnVlKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndGVzdCcsIG9wdGlvbnMsIG9wdGlvbnMpXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Rlc3QnLCBvcHRpb25zLCBvcHRpb25zKVxuICB9IGNhdGNoIChfZXJyKSB7XG4gICAgcGFzc2l2ZVN1cHBvcnRlZCA9IGZhbHNlXG4gIH1cblxuICByZXR1cm4gcGFzc2l2ZVN1cHBvcnRlZFxufVxuXG5leHBvcnQgY29uc3QgaXNTdXBwb3J0UGFzc2l2ZUV2ZW50cyA9IGNoZWNrU3VwcG9ydFBhc3NpdmVFdmVudHMoKVxuXG5mdW5jdGlvbiBldmVudE9wdGlvbnMob3B0aW9ucywgZmFsbGJhY2sgPSBmYWxzZSkge1xuICByZXR1cm4gaXNTdXBwb3J0UGFzc2l2ZUV2ZW50cyA/IG9wdGlvbnMgOiBmYWxsYmFja1xufVxuXG5leHBvcnQgeyBldmVudE9wdGlvbnMgfVxuXG5leHBvcnQgZGVmYXVsdCBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0aHJvdHRsZShmdW5jLCB3YWl0KSB7XG4gIGxldCBsYXN0VGltZSA9IDBcblxuICByZXR1cm4gZnVuY3Rpb24gZXhlY3V0ZWRGdW5jdGlvbigpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpc1xuICAgIGNvbnN0IGFyZ3MgPSBhcmd1bWVudHNcblxuICAgIGNvbnN0IG5vdyA9IERhdGUubm93KClcbiAgICBpZiAobm93IC0gbGFzdFRpbWUgPj0gd2FpdCkge1xuICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKVxuICAgICAgbGFzdFRpbWUgPSBub3dcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBnZXREZWZhdWx0Q29udGFpbmVyIGZyb20gJy4vdXRpbHMvZ2V0LWRlZmF1bHQtY29udGFpbmVyJ1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50RW1pdHRlcidcbmltcG9ydCBnZXRTdHlsZVByb3BlcnR5IGZyb20gJ2Rlc2FuZHJvLWdldC1zdHlsZS1wcm9wZXJ0eSdcbmltcG9ydCB7IEJvdW5kVG9FbGVtZW50IH0gZnJvbSAnLi9ib3VuZGluZydcbmltcG9ydCBQb2ludCBmcm9tICcuL2dlb21ldHJ5L3BvaW50J1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tICcuL2dlb21ldHJ5L3JlY3RhbmdsZSdcbmltcG9ydCB7IGRlZmF1bHRTY29wZSB9IGZyb20gJy4vc2NvcGUnXG5pbXBvcnQgaXNTdXBwb3J0UGFzc2l2ZUV2ZW50cyBmcm9tICcuL3V0aWxzL2lzLXN1cHBvcnQtcGFzc2l2ZS1ldmVudHMnXG5pbXBvcnQgdGhyb3R0bGUgZnJvbSAnLi91dGlscy90aHJvdHRsZSdcblxuY29uc3QgdGhyb3R0bGVkRHJhZ092ZXIgPSAoY2FsbGJhY2ssIGR1cmF0aW9uKSA9PiB7XG4gIGNvbnN0IHRocm90dGxlZENhbGxiYWNrID0gdGhyb3R0bGUoKGV2ZW50KSA9PiBjYWxsYmFjayhldmVudCksIGR1cmF0aW9uKVxuICByZXR1cm4gZXZlbnQgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB0aHJvdHRsZWRDYWxsYmFjayhldmVudClcbiAgfVxufVxuXG5jb25zdCBwYXNzaXZlRmFsc2UgPSBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzID8geyBwYXNzaXZlOiBmYWxzZSB9IDogZmFsc2VcblxuY29uc3QgaXNUb3VjaCA9ICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvd1xuY29uc3QgbW91c2VFdmVudHMgPSB7XG4gIHN0YXJ0OiAnbW91c2Vkb3duJyxcbiAgbW92ZTogJ21vdXNlbW92ZScsXG4gIGVuZDogJ21vdXNldXAnXG59XG5jb25zdCB0b3VjaEV2ZW50cyA9IHtcbiAgc3RhcnQ6ICd0b3VjaHN0YXJ0JyxcbiAgbW92ZTogJ3RvdWNobW92ZScsXG4gIGVuZDogJ3RvdWNoZW5kJ1xufVxuY29uc3QgZHJhZ2dhYmxlcyA9IFtdXG5jb25zdCB0cmFuc2Zvcm1Qcm9wZXJ0eSA9IGdldFN0eWxlUHJvcGVydHkoJ3RyYW5zZm9ybScpXG5jb25zdCB0cmFuc2l0aW9uUHJvcGVydHkgPSBnZXRTdHlsZVByb3BlcnR5KCd0cmFuc2l0aW9uJylcblxuZnVuY3Rpb24gZ2V0VG91Y2hCeUlEKGVsZW1lbnQsIHRvdWNoSWQpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50LmNoYW5nZWRUb3VjaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGVsZW1lbnQuY2hhbmdlZFRvdWNoZXNbaV0uaWRlbnRpZmllciA9PT0gdG91Y2hJZCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQuY2hhbmdlZFRvdWNoZXNbaV1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmZ1bmN0aW9uIHByZXZlbnREb3VibGVJbml0KGRyYWdnYWJsZSkge1xuICBjb25zdCBtZXNzYWdlID0gXCJmb3IgdGhpcyBlbGVtZW50IERyYWdlZS5EcmFnZ2FibGUgaXMgYWxyZWFkeSBleGlzdCwgZG9uJ3QgY3JlYXRlIGl0IHR3aWNlIFwiXG4gIGlmIChkcmFnZ2FibGVzLnNvbWUoKGV4aXN0aW5nKSA9PiBkcmFnZ2FibGUuZWxlbWVudCA9PT0gZXhpc3RpbmcuZWxlbWVudCkpIHtcbiAgICB0aHJvdyBtZXNzYWdlXG4gIH1cbiAgZHJhZ2dhYmxlcy5wdXNoKGRyYWdnYWJsZSlcbn1cblxuZnVuY3Rpb24gYWRkVG9EZWZhdWx0U2NvcGUoZHJhZ2dhYmxlKSB7XG4gIGRlZmF1bHRTY29wZS5hZGREcmFnZ2FibGUoZHJhZ2dhYmxlKVxufVxuXG5mdW5jdGlvbiBjb3B5U3R5bGVzKHNvdXJjZSwgZGVzdGluYXRpb24pIHtcbiAgY29uc3QgY3MgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShzb3VyY2UpXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGtleSA9IGNzW2ldXG4gICAgaWYgKChrZXkuaW5kZXhPZigndHJhbnNpdGlvbicpIDwgMCkgJiYgKGtleS5pbmRleE9mKCd0cmFuc2Zvcm0nKSA8IDApKSB7XG4gICAgICBkZXN0aW5hdGlvbi5zdHlsZVtrZXldID0gY3Nba2V5XVxuICAgIH1cbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc291cmNlLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgY29weVN0eWxlcyhzb3VyY2UuY2hpbGRyZW5baV0sIGRlc3RpbmF0aW9uLmNoaWxkcmVuW2ldKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYWdnYWJsZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcihvcHRpb25zKVxuICAgIHRoaXMudGFyZ2V0cyA9IFtdXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9uc1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgICBwcmV2ZW50RG91YmxlSW5pdCh0aGlzKVxuICAgIERyYWdnYWJsZS5lbWl0dGVyLmVtaXQoJ2RyYWdnYWJsZTpjcmVhdGUnLCB0aGlzKVxuICAgIHRoaXMuX2VuYWJsZSA9IHRydWVcbiAgICB0aGlzLnN0YXJ0Qm91bmRpbmcoKVxuICAgIHRoaXMuc3RhcnRQb3NpdGlvbmluZygpXG4gICAgdGhpcy5zdGFydExpc3RlbmluZygpXG4gIH1cblxuICBzdGFydEJvdW5kaW5nKCkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuYm91bmQpIHtcbiAgICAgIHRoaXMuYm91bmRpbmcgPSB7IGJvdW5kOiB0aGlzLm9wdGlvbnMuYm91bmQgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmJvdW5kaW5nID0gbmV3IEJvdW5kVG9FbGVtZW50KHRoaXMuY29udGFpbmVyLCB0aGlzLmNvbnRhaW5lcilcbiAgICB9XG4gIH1cblxuICBzdGFydFBvc2l0aW9uaW5nKCkge1xuICAgIHRoaXMuX3NldERlZmF1bHRUcmFuc2l0aW9uKClcbiAgICB0aGlzLm9mZnNldCA9IFBvaW50LmVsZW1lbnRPZmZzZXQodGhpcy5lbGVtZW50LCB0aGlzLmNvbnRhaW5lciwgdHJ1ZSlcbiAgICB0aGlzLnBpbm5lZFBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICB0aGlzLmluaXRpYWxQb3NpdGlvbiA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbiB8fCB0aGlzLm9mZnNldFxuXG4gICAgdGhpcy5waW5Qb3NpdGlvbih0aGlzLmluaXRpYWxQb3NpdGlvbilcblxuICAgIGlmICh0aGlzLmJvdW5kaW5nLnJlZnJlc2gpIHtcbiAgICAgIHRoaXMuYm91bmRpbmcucmVmcmVzaCgpXG4gICAgfVxuICB9XG5cbiAgc3RhcnRMaXN0ZW5pbmcoKSB7XG4gICAgdGhpcy5fZHJhZ1N0YXJ0ID0gKGV2ZW50KSA9PiB0aGlzLmRyYWdTdGFydChldmVudClcbiAgICB0aGlzLl9kcmFnTW92ZSA9IChldmVudCkgPT4gdGhpcy5kcmFnTW92ZShldmVudClcbiAgICB0aGlzLl9kcmFnRW5kID0gKGV2ZW50KSA9PiB0aGlzLmRyYWdFbmQoZXZlbnQpXG4gICAgdGhpcy5fbmF0aXZlRHJhZ1N0YXJ0ID0gKGV2ZW50KSA9PiB0aGlzLm5hdGl2ZURyYWdTdGFydChldmVudClcbiAgICB0aGlzLl9uYXRpdmVEcmFnT3ZlciA9IHRocm90dGxlZERyYWdPdmVyKChldmVudCkgPT4gdGhpcy5uYXRpdmVEcmFnT3ZlcihldmVudCksIHRoaXMuZHJhZ092ZXJUaHJvdHRsZUR1cmF0aW9uKVxuICAgIHRoaXMuX25hdGl2ZURyYWdFbmQgPSAoZXZlbnQpID0+IHRoaXMubmF0aXZlRHJhZ0VuZChldmVudClcbiAgICB0aGlzLl9uYXRpdmVEcm9wID0gKGV2ZW50KSA9PiB0aGlzLm5hdGl2ZURyb3AoZXZlbnQpXG4gICAgdGhpcy5fc2Nyb2xsID0gKGV2ZW50KSA9PiB0aGlzLm9uU2Nyb2xsKGV2ZW50KVxuXG4gICAgdGhpcy5oYW5kbGVyLmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydCwgcGFzc2l2ZUZhbHNlKVxuICAgIHRoaXMuaGFuZGxlci5hZGRFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQsIHBhc3NpdmVGYWxzZSlcbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgdGhpcy5fbmF0aXZlRHJhZ1N0YXJ0KVxuICB9XG5cbiAgZ2V0U2l6ZSgpIHtcbiAgICByZXR1cm4gUG9pbnQuZWxlbWVudFNpemUodGhpcy5lbGVtZW50KVxuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMub2Zmc2V0LmFkZCh0aGlzLl90cmFuc2Zvcm1Qb3NpdGlvbiB8fCBuZXcgUG9pbnQoMCwgMCkpXG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25cbiAgfVxuXG4gIGdldENlbnRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi5hZGQodGhpcy5nZXRTaXplKCkubXVsdCgwLjUpKVxuICB9XG5cbiAgX3NldERlZmF1bHRUcmFuc2l0aW9uICgpIHtcbiAgICBpZiAoIXRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNpdGlvblByb3BlcnR5XSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZWxlbWVudClbdHJhbnNpdGlvblByb3BlcnR5XVxuICAgIH1cbiAgfVxuXG4gIF9zZXRUcmFuc2l0aW9uKHRpbWUpIHtcbiAgICBsZXQgdHJhbnNpdGlvbiA9IHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldXG4gICAgY29uc3QgdHJhbnNpdGlvbkNzcyA9IGB0cmFuc2Zvcm0gJHt0aW1lfW1zYFxuXG4gICAgaWYgKCEvdHJhbnNmb3JtIFxcZCptP3MvLnRlc3QodHJhbnNpdGlvbikpIHtcbiAgICAgIGlmICh0cmFuc2l0aW9uKSB7XG4gICAgICAgIHRyYW5zaXRpb24gKz0gYCwgJHt0cmFuc2l0aW9uQ3NzfWBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyYW5zaXRpb24gPSB0cmFuc2l0aW9uQ3NzXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyYW5zaXRpb24gPSB0cmFuc2l0aW9uLnJlcGxhY2UoL3RyYW5zZm9ybSBcXGQqbT9zL2csIHRyYW5zaXRpb25Dc3MpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldICE9PSB0cmFuc2l0aW9uKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNpdGlvblByb3BlcnR5XSA9IHRyYW5zaXRpb25cbiAgICB9XG4gIH1cblxuICBfc2V0VHJhbnNsYXRlKHBvaW50KSB7XG4gICAgdGhpcy5fdHJhbnNmb3JtUG9zaXRpb24gPSBwb2ludFxuICAgIGNvbnN0IHRyYW5zbGF0ZUNzcyA9IGB0cmFuc2xhdGUzZCgke3BvaW50Lnh9cHgsICR7cG9pbnQueX1weCwgMHB4KWBcblxuICAgIGxldCB0cmFuc2Zvcm0gPSB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcGVydHldXG5cbiAgICBpZiAodGhpcy5zaG91bGRSZW1vdmVaZXJvVHJhbnNsYXRlICYmIHBvaW50LnggPT09IDAgJiYgcG9pbnQueSA9PT0gMCkge1xuICAgICAgdHJhbnNmb3JtID0gdHJhbnNmb3JtLnJlcGxhY2UoL3RyYW5zbGF0ZTNkXFwoW14pXStcXCkvLCAnJylcbiAgICB9IGVsc2UgaWYgKCEvdHJhbnNsYXRlM2RcXChbXildK1xcKS8udGVzdCh0cmFuc2Zvcm0pKSB7XG4gICAgICBpZiAodHJhbnNmb3JtKSB7XG4gICAgICAgIHRyYW5zZm9ybSArPSAnICdcbiAgICAgIH1cbiAgICAgIHRyYW5zZm9ybSArPSB0cmFuc2xhdGVDc3NcbiAgICB9IGVsc2Uge1xuICAgICAgdHJhbnNmb3JtID0gdHJhbnNmb3JtLnJlcGxhY2UoL3RyYW5zbGF0ZTNkXFwoW14pXStcXCkvLCB0cmFuc2xhdGVDc3MpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wZXJ0eV0gIT09IHRyYW5zZm9ybSkge1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BlcnR5XSA9IHRyYW5zZm9ybVxuICAgIH1cbiAgfVxuXG4gIG1vdmUocG9pbnQsIHRpbWU9MCwgaXNTaWxlbnQ9ZmFsc2UpIHtcbiAgICBwb2ludCA9IHBvaW50LmNsb25lKClcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9pbnRcblxuICAgIHRoaXMuX3NldFRyYW5zaXRpb24odGltZSlcbiAgICB0aGlzLl9zZXRUcmFuc2xhdGUocG9pbnQuc3ViKHRoaXMub2Zmc2V0KSlcblxuICAgIGlmICghaXNTaWxlbnQpIHtcbiAgICAgIHRoaXMuZW1pdCgnZHJhZzptb3ZlJylcbiAgICB9XG4gIH1cblxuICBwaW5Qb3NpdGlvbihwb2ludCwgdGltZT0wLCBzaWxlbnQ9dHJ1ZSkge1xuICAgIHRoaXMucGlubmVkUG9zaXRpb24gPSBwb2ludC5jbG9uZSgpXG4gICAgdGhpcy5tb3ZlKHRoaXMucGlubmVkUG9zaXRpb24sIHRpbWUsIHNpbGVudClcbiAgfVxuXG4gIHJlc2V0UG9zaXRpb25Ub0luaXRpYWwgKCkge1xuICAgIHRoaXMucGluUG9zaXRpb24odGhpcy5pbml0aWFsUG9zaXRpb24pXG4gIH1cblxuICByZWZyZXNoUG9zaXRpb24gKCkge1xuICAgIHRoaXMuc2V0UG9zaXRpb24odGhpcy5nZXRQb3NpdGlvbigpKVxuICB9XG5cbiAgc2V0UG9zaXRpb24ocG9pbnQpIHtcbiAgICBwb2ludCA9IHBvaW50LmNsb25lKClcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9pbnRcbiAgICB0aGlzLl9zZXRUcmFuc2l0aW9uKDApXG4gICAgdGhpcy5fc2V0VHJhbnNsYXRlKHBvaW50LnN1Yih0aGlzLm9mZnNldCkpXG4gIH1cblxuICBkZXRlcm1pbmVEaXJlY3Rpb24ocG9pbnQpIHtcbiAgICB0aGlzLl9wcmV2aW91c0RpcmVjdGlvblBvc2l0aW9uIHx8PSB0aGlzLl9zdGFydFBvc2l0aW9uXG5cbiAgICB0aGlzLmxlZnREaXJlY3Rpb24gPSAodGhpcy5fcHJldmlvdXNEaXJlY3Rpb25Qb3NpdGlvbi54IDwgcG9pbnQueClcbiAgICB0aGlzLnJpZ2h0RGlyZWN0aW9uID0gKHRoaXMuX3ByZXZpb3VzRGlyZWN0aW9uUG9zaXRpb24ueCA+IHBvaW50LngpXG4gICAgdGhpcy51cERpcmVjdGlvbiA9ICh0aGlzLl9wcmV2aW91c0RpcmVjdGlvblBvc2l0aW9uLnkgPiBwb2ludC55KVxuICAgIHRoaXMuZG93bkRpcmVjdGlvbiA9ICh0aGlzLl9wcmV2aW91c0RpcmVjdGlvblBvc2l0aW9uLnkgPCBwb2ludC55KVxuXG4gICAgdGhpcy5fcHJldmlvdXNEaXJlY3Rpb25Qb3NpdGlvbiA9IHBvaW50XG4gIH1cblxuICBzZWVtc1Njcm9sbGluZygpIHtcbiAgICByZXR1cm4gKCtuZXcgRGF0ZSgpIC0gdGhpcy5fc3RhcnRUb3VjaFRpbWVzdGFtcCkgPCB0aGlzLnRvdWNoRHJhZ2dpbmdUaHJlc2hvbGRcbiAgfVxuXG4gIHNob3VsZFVzZU5hdGl2ZURyYWdBbmREcm9wKCkge1xuICAgIGlmICh0aGlzLmlzVG91Y2hFdmVudCkge1xuICAgICAgcmV0dXJuIHRoaXMubmF0aXZlRHJhZ0FuZERyb3AgJiYgdGhpcy5lbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3BPblRvdWNoXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLm5hdGl2ZURyYWdBbmREcm9wXG4gICAgfVxuICB9XG5cbiAgZHJhZ1N0YXJ0KGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLl9lbmFibGUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLnN0b3BQcm9wYWdhdGlvbk9uU3RhcnQpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgfVxuXG4gICAgdGhpcy5pc1RvdWNoRXZlbnQgPSAoaXNUb3VjaCAmJiAoZXZlbnQgaW5zdGFuY2VvZiB3aW5kb3cuVG91Y2hFdmVudCkpXG5cbiAgICB0aGlzLnRvdWNoUG9pbnQgPSB0aGlzLl9zdGFydFRvdWNoUG9pbnQgPSBuZXcgUG9pbnQoXG4gICAgICB0aGlzLmlzVG91Y2hFdmVudCA/IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYIDogZXZlbnQuY2xpZW50WCxcbiAgICAgIHRoaXMuaXNUb3VjaEV2ZW50ID8gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVkgOiBldmVudC5jbGllbnRZXG4gICAgKVxuXG4gICAgdGhpcy5fc3RhcnRQb3NpdGlvbiA9IHRoaXMuZ2V0UG9zaXRpb24oKVxuICAgIGlmICh0aGlzLmlzVG91Y2hFdmVudCkge1xuICAgICAgdGhpcy5fdG91Y2hJZCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmlkZW50aWZpZXJcbiAgICAgIHRoaXMuX3N0YXJ0VG91Y2hUaW1lc3RhbXAgPSArbmV3IERhdGUoKVxuICAgIH1cblxuICAgIHRoaXMuX3N0YXJ0V2luZG93U2Nyb2xsUG9pbnQgPSB0aGlzLndpbmRvd1Njcm9sbFBvaW50XG4gICAgdGhpcy5fc3RhcnRQYXJlbnRzU2Nyb2xsUG9pbnQgPSB0aGlzLnBhcmVudHNTY3JvbGxQb2ludFxuXG4gICAgaWYgKGV2ZW50LnRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSW5wdXRFbGVtZW50IHx8XG4gICAgICAgICAgZXZlbnQudGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJbnB1dEVsZW1lbnQpIHtcbiAgICAgIGV2ZW50LnRhcmdldC5mb2N1cygpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2hvdWxkVXNlTmF0aXZlRHJhZ0FuZERyb3AoKSkge1xuICAgICAgaWYgKHRoaXMuaXNUb3VjaEV2ZW50ICYmIHRoaXMuZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wT25Ub3VjaCkge1xuICAgICAgICBjb25zdCBlbXVsYXRlT25GaXJzdE1vdmUgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5zZWVtc1Njcm9sbGluZygpKSB7XG4gICAgICAgICAgICB0aGlzLmNhbmNlbERyYWdnaW5nKClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3AoZXZlbnQpXG4gICAgICAgICAgfVxuICAgICAgICAgIGNhbmNlbEVtdWxhdGlvbigpXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2FuY2VsRW11bGF0aW9uID0gKCkgPT4ge1xuICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgZW11bGF0ZU9uRmlyc3RNb3ZlKVxuICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCBjYW5jZWxFbXVsYXRpb24pXG4gICAgICAgIH1cblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIGVtdWxhdGVPbkZpcnN0TW92ZSwgcGFzc2l2ZUZhbHNlKVxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgY2FuY2VsRW11bGF0aW9uLCBwYXNzaXZlRmFsc2UpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsZW1lbnQuZHJhZ2dhYmxlID0gdHJ1ZVxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fbmF0aXZlRHJhZ0VuZCwgcGFzc2l2ZUZhbHNlKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlLCBwYXNzaXZlRmFsc2UpXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlLCBwYXNzaXZlRmFsc2UpXG5cbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kLCBwYXNzaXZlRmFsc2UpXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZCwgcGFzc2l2ZUZhbHNlKVxuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9zY3JvbGwpXG4gICAgdGhpcy5wYXJlbnRzLmZvckVhY2goKHApID0+IHAuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fc2Nyb2xsKSlcblxuICAgIHRoaXMuZW1pdCgnZHJhZzpzdGFydCcpXG4gIH1cblxuICBkcmFnTW92ZShldmVudCkge1xuICAgIGxldCB0b3VjaFxuXG4gICAgdGhpcy5pc0RyYWdnaW5nID0gdHJ1ZVxuXG4gICAgdGhpcy5pc1RvdWNoRXZlbnQgPSAoaXNUb3VjaCAmJiAoZXZlbnQgaW5zdGFuY2VvZiB3aW5kb3cuVG91Y2hFdmVudCkpXG4gICAgaWYgKHRoaXMuaXNUb3VjaEV2ZW50KSB7XG4gICAgICB0b3VjaCA9IGdldFRvdWNoQnlJRChldmVudCwgdGhpcy5fdG91Y2hJZClcblxuICAgICAgaWYgKCF0b3VjaCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuc2VlbXNTY3JvbGxpbmcoKSkge1xuICAgICAgICB0aGlzLmNhbmNlbERyYWdnaW5nKClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhpcy50b3VjaFBvaW50ID0gbmV3IFBvaW50KFxuICAgICAgdGhpcy5pc1RvdWNoRXZlbnQgPyB0b3VjaC5wYWdlWCA6IGV2ZW50LmNsaWVudFgsXG4gICAgICB0aGlzLmlzVG91Y2hFdmVudCA/IHRvdWNoLnBhZ2VZIDogZXZlbnQuY2xpZW50WVxuICAgIClcblxuICAgIGxldCBwb2ludCA9IHRoaXMuX3N0YXJ0UG9zaXRpb24uYWRkKHRoaXMudG91Y2hQb2ludC5zdWIodGhpcy5fc3RhcnRUb3VjaFBvaW50KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZCh0aGlzLndpbmRvd1Njcm9sbFBvaW50LnN1Yih0aGlzLl9zdGFydFdpbmRvd1Njcm9sbFBvaW50KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZCh0aGlzLnBhcmVudHNTY3JvbGxQb2ludC5zdWIodGhpcy5fc3RhcnRQYXJlbnRzU2Nyb2xsUG9pbnQpKVxuXG4gICAgcG9pbnQgPSB0aGlzLmJvdW5kaW5nLmJvdW5kKHBvaW50LCB0aGlzLmdldFNpemUoKSlcbiAgICB0aGlzLmRldGVybWluZURpcmVjdGlvbihwb2ludClcbiAgICB0aGlzLm1vdmUocG9pbnQpXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RyYWdlZS1hY3RpdmUnKVxuICB9XG5cbiAgZHJhZ0VuZChldmVudCkge1xuICAgIHRoaXMuaXNUb3VjaEV2ZW50ID0gKGlzVG91Y2ggJiYgKGV2ZW50IGluc3RhbmNlb2Ygd2luZG93LlRvdWNoRXZlbnQpKVxuXG4gICAgaWYgKHRoaXMuaXNUb3VjaEV2ZW50ICYmICFnZXRUb3VjaEJ5SUQoZXZlbnQsIHRoaXMuX3RvdWNoSWQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc0RyYWdnaW5nKSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIH1cblxuICAgIHRoaXMuZHJhZ0VuZEFjdGlvbigpXG4gICAgdGhpcy5lbWl0KCdkcmFnOmVuZCcpXG4gICAgdGhpcy5jYW5jZWxEcmFnZ2luZygpXG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZWUtYWN0aXZlJykpXG4gIH1cblxuICBvblNjcm9sbChfZXZlbnQpIHtcbiAgICBsZXQgcG9pbnQgPSB0aGlzLl9zdGFydFBvc2l0aW9uLmFkZCh0aGlzLnRvdWNoUG9pbnQuc3ViKHRoaXMuX3N0YXJ0VG91Y2hQb2ludCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy53aW5kb3dTY3JvbGxQb2ludC5zdWIodGhpcy5fc3RhcnRXaW5kb3dTY3JvbGxQb2ludCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy5wYXJlbnRzU2Nyb2xsUG9pbnQuc3ViKHRoaXMuX3N0YXJ0UGFyZW50c1Njcm9sbFBvaW50KSlcblxuICAgIHBvaW50ID0gdGhpcy5ib3VuZGluZy5ib3VuZChwb2ludCwgdGhpcy5nZXRTaXplKCkpXG4gICAgaWYgKCF0aGlzLm5hdGl2ZURyYWdBbmREcm9wKSB7XG4gICAgICB0aGlzLmRldGVybWluZURpcmVjdGlvbihwb2ludClcbiAgICAgIHRoaXMubW92ZShwb2ludClcbiAgICB9XG4gIH1cblxuICBuYXRpdmVEcmFnU3RhcnQoZXZlbnQpIHtcbiAgICBpZiAodGhpcy5zdG9wUHJvcGFnYXRpb25PblN0YXJ0KSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIH1cbiAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dCcsICdGaXJlRm94IGZpeCcpXG4gICAgZXZlbnQuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSAnbW92ZSdcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIHRoaXMuX25hdGl2ZURyYWdPdmVyKVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzLl9uYXRpdmVEcm9wKVxuICB9XG5cbiAgbmF0aXZlRHJhZ092ZXIoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZXZlbnQuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnbW92ZSdcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZHJhZ2VlLXBsYWNlaG9sZGVyJylcbiAgICBpZiAoZXZlbnQuY2xpZW50WCA9PT0gMCAmJiBldmVudC5jbGllbnRZID09PSAwKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLnRvdWNoUG9pbnQgPSBuZXcgUG9pbnQoZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSlcbiAgICBsZXQgcG9pbnQgPSB0aGlzLl9zdGFydFBvc2l0aW9uLmFkZCh0aGlzLnRvdWNoUG9pbnQuc3ViKHRoaXMuX3N0YXJ0VG91Y2hQb2ludCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy53aW5kb3dTY3JvbGxQb2ludC5zdWIodGhpcy5fc3RhcnRXaW5kb3dTY3JvbGxQb2ludCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy5wYXJlbnRzU2Nyb2xsUG9pbnQuc3ViKHRoaXMuX3N0YXJ0UGFyZW50c1Njcm9sbFBvaW50KSlcbiAgICBwb2ludCA9IHRoaXMuYm91bmRpbmcuYm91bmQocG9pbnQsIHRoaXMuZ2V0U2l6ZSgpKVxuICAgIHRoaXMuZGV0ZXJtaW5lRGlyZWN0aW9uKHBvaW50KVxuICAgIHRoaXMucG9zaXRpb24gPSBwb2ludFxuICAgIHRoaXMuZW1pdCgnZHJhZzptb3ZlJylcbiAgfVxuXG4gIG5hdGl2ZURyYWdFbmQoX2V2ZW50KSB7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdlZS1wbGFjZWhvbGRlcicpXG4gICAgdGhpcy5kcmFnRW5kQWN0aW9uKClcbiAgICB0aGlzLmVtaXQoJ2RyYWc6ZW5kJylcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIHRoaXMuX25hdGl2ZURyYWdPdmVyKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzLl9uYXRpdmVEcm9wKVxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9zY3JvbGwpXG4gICAgdGhpcy5wYXJlbnRzLmZvckVhY2goKHApID0+IHAucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fc2Nyb2xsKSlcbiAgICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZVxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2RyYWdnYWJsZScpXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdlZS1hY3RpdmUnKVxuICB9XG5cbiAgbmF0aXZlRHJvcChldmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgY2FuY2VsRHJhZ2dpbmcgKCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcblxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX25hdGl2ZURyYWdFbmQpXG5cbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fc2Nyb2xsKVxuICAgIHRoaXMucGFyZW50cy5mb3JFYWNoKChwKSA9PiBwLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX3Njcm9sbCkpXG5cbiAgICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZVxuICAgIHRoaXMuX3ByZXZpb3VzRGlyZWN0aW9uUG9zaXRpb24gPSBudWxsXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnZHJhZ2dhYmxlJylcbiAgfVxuXG4gIGNvcHlTdHlsZXMoc291cmNlLCBkZXN0aW5hdGlvbikge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuY29weVN0eWxlcykge1xuICAgICAgdGhpcy5vcHRpb25zLmNvcHlTdHlsZXMoc291cmNlLCBkZXN0aW5hdGlvbilcbiAgICB9IGVsc2Uge1xuICAgICAgY29weVN0eWxlcyhzb3VyY2UsIGRlc3RpbmF0aW9uKVxuICAgIH1cbiAgfVxuXG4gIGVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcChldmVudCkge1xuICAgIGNvbnN0IGNvbnRhaW5lclJlY3QgPSB0aGlzLmNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIGNvbnN0IGNsb25lZEVsZW1lbnQgPSB0aGlzLmVsZW1lbnQuY2xvbmVOb2RlKHRydWUpXG4gICAgY2xvbmVkRWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wZXJ0eV0gPSAnJ1xuICAgIHRoaXMuY29weVN0eWxlcyh0aGlzLmVsZW1lbnQsIGNsb25lZEVsZW1lbnQpXG4gICAgY2xvbmVkRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSdcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNsb25lZEVsZW1lbnQpXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RyYWdlZS1wbGFjZWhvbGRlcicpXG5cbiAgICBjb25zdCBlbXVsYXRpb25EcmFnZ2FibGUgPSBuZXcgRHJhZ2dhYmxlKGNsb25lZEVsZW1lbnQsIHtcbiAgICAgIGNvbnRhaW5lcjogZG9jdW1lbnQuYm9keSxcbiAgICAgIHRvdWNoRHJhZ2dpbmdUaHJlc2hvbGQ6IDAsXG4gICAgICBib3VuZChwb2ludCkge1xuICAgICAgICByZXR1cm4gcG9pbnRcbiAgICAgIH0sXG4gICAgICBvbjoge1xuICAgICAgICAnZHJhZzptb3ZlJzogKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNvbnRhaW5lclJlY3RQb2ludCA9IG5ldyBQb2ludChjb250YWluZXJSZWN0LmxlZnQsIGNvbnRhaW5lclJlY3QudG9wKVxuICAgICAgICAgIHRoaXMucG9zaXRpb24gPSBlbXVsYXRpb25EcmFnZ2FibGUucG9zaXRpb24uc3ViKGNvbnRhaW5lclJlY3RQb2ludClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN1Yih0aGlzLl9zdGFydFdpbmRvd1Njcm9sbFBvaW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMuX3N0YXJ0UGFyZW50c1Njcm9sbFBvaW50KVxuXG4gICAgICAgICAgdGhpcy5kZXRlcm1pbmVEaXJlY3Rpb24odGhpcy5wb3NpdGlvbilcbiAgICAgICAgICB0aGlzLmVtaXQoJ2RyYWc6bW92ZScpXG4gICAgICAgIH0sXG4gICAgICAgICdkcmFnOmVuZCc6ICgpID0+IHtcbiAgICAgICAgICBlbXVsYXRpb25EcmFnZ2FibGUuZGVzdHJveSgpXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChjbG9uZWRFbGVtZW50KVxuICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZWUtcGxhY2Vob2xkZXInKVxuICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZWUtYWN0aXZlJylcblxuICAgICAgICAgIHRoaXMuZW1pdCgnZHJhZzplbmQnKVxuICAgICAgICAgIHRoaXMuZHJhZ0VuZEFjdGlvbigpXG4gICAgICAgICAgdGhpcy5jYW5jZWxEcmFnZ2luZygpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgY29udGFpbmVyUmVjdFBvaW50ID0gbmV3IFBvaW50KGNvbnRhaW5lclJlY3QubGVmdCwgY29udGFpbmVyUmVjdC50b3ApXG4gICAgZW11bGF0aW9uRHJhZ2dhYmxlLl9zdGFydFdpbmRvd1Njcm9sbFBvaW50ID0gdGhpcy5fc3RhcnRXaW5kb3dTY3JvbGxQb2ludFxuXG4gICAgZW11bGF0aW9uRHJhZ2dhYmxlLm1vdmUoXG4gICAgICB0aGlzLnBpbm5lZFBvc2l0aW9uLmFkZChjb250YWluZXJSZWN0UG9pbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgLmFkZCh0aGlzLndpbmRvd1Njcm9sbFBvaW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgIC5zdWIodGhpcy5wYXJlbnRzU2Nyb2xsUG9pbnQpXG4gICAgKVxuXG4gICAgZW11bGF0aW9uRHJhZ2dhYmxlLmRyYWdTdGFydChldmVudClcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBkcmFnRW5kQWN0aW9uKCkge1xuICAgIHRoaXMucGluUG9zaXRpb24odGhpcy5wb3NpdGlvbilcbiAgfVxuXG4gIGdldFJlY3RhbmdsZSgpIHtcbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZSh0aGlzLnBvc2l0aW9uLCB0aGlzLmdldFNpemUoKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgaWYgKHRoaXMuYm91bmRpbmcucmVmcmVzaCkge1xuICAgICAgdGhpcy5ib3VuZGluZy5yZWZyZXNoKClcbiAgICB9XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuaGFuZGxlci5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQpXG4gICAgdGhpcy5oYW5kbGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydClcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgdGhpcy5fbmF0aXZlRHJhZ1N0YXJ0KVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIHRoaXMuX25hdGl2ZURyYWdPdmVyKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzLl9uYXRpdmVEcm9wKVxuICAgIHRoaXMucmVzZXRFbWl0dGVyKClcblxuICAgIGNvbnN0IGluZGV4ID0gZHJhZ2dhYmxlcy5pbmRleE9mKHRoaXMpXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIGRyYWdnYWJsZXMuc3BsaWNlKGluZGV4LCAxKVxuICAgIH1cbiAgfVxuXG4gIGdldCBjb250YWluZXIoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9jb250YWluZXIgPSB0aGlzLl9jb250YWluZXIgfHwgdGhpcy5vcHRpb25zLmNvbnRhaW5lciB8fCB0aGlzLm9wdGlvbnMucGFyZW50IHx8IGdldERlZmF1bHRDb250YWluZXIodGhpcy5lbGVtZW50KSlcbiAgfVxuXG4gIGdldCBoYW5kbGVyKCkge1xuICAgIGlmICghdGhpcy5faGFuZGxlcikge1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuaGFuZGxlciA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhpcy5faGFuZGxlciA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKHRoaXMub3B0aW9ucy5oYW5kbGVyKSB8fCB0aGlzLmVsZW1lbnRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZXIgPSB0aGlzLm9wdGlvbnMuaGFuZGxlciB8fCB0aGlzLmVsZW1lbnRcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5faGFuZGxlclxuICB9XG5cbiAgLy8gSXQgY2FuIGJlIHVzZWZ1bGwgZm9yIG5lc3RlZCBkcmFnZ2FibGVzXG4gIGdldCBzdG9wUHJvcGFnYXRpb25PblN0YXJ0KCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuc3RvcFByb3BhZ2F0aW9uT25TdGFydCB8fCBmYWxzZVxuICB9XG5cbiAgZ2V0IG5hdGl2ZURyYWdBbmREcm9wKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMubmF0aXZlRHJhZ0FuZERyb3AgfHwgZmFsc2VcbiAgfVxuXG4gIGdldCBlbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3BPblRvdWNoKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wT25Ub3VjaCB8fCBmYWxzZVxuICB9XG5cbiAgZ2V0IHNob3VsZFJlbW92ZVplcm9UcmFuc2xhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5zaG91bGRSZW1vdmVaZXJvVHJhbnNsYXRlIHx8IGZhbHNlXG4gIH1cblxuICBnZXQgdG91Y2hEcmFnZ2luZ1RocmVzaG9sZCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLnRvdWNoRHJhZ2dpbmdUaHJlc2hvbGQgfHwgMFxuICB9XG5cbiAgZ2V0IGRyYWdPdmVyVGhyb3R0bGVEdXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmRyYWdPdmVyVGhyb3R0bGVEdXJhdGlvbiB8fCAxNlxuICB9XG5cbiAgZ2V0IHdpbmRvd1Njcm9sbFBvaW50KCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQod2luZG93LnNjcm9sbFgsIHdpbmRvdy5zY3JvbGxZKVxuICB9XG5cbiAgZ2V0IHBhcmVudHMoKSB7XG4gICAgaWYgKHRoaXMuX2NhY2hlZFBhcmVudHMpIHJldHVybiB0aGlzLl9jYWNoZWRQYXJlbnRzXG5cbiAgICB0aGlzLl9jYWNoZWRQYXJlbnRzID0gW11cbiAgICBsZXQgZWxlbWVudCA9IHRoaXMuZWxlbWVudFxuXG4gICAgd2hpbGUoZWxlbWVudC5wYXJlbnROb2RlICYmIGVsZW1lbnQgIT0gdGhpcy5jb250YWluZXIpIHtcbiAgICAgIHRoaXMuX2NhY2hlZFBhcmVudHMudW5zaGlmdChlbGVtZW50LnBhcmVudE5vZGUpO1xuICAgICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fY2FjaGVkUGFyZW50c1xuICB9XG5cbiAgZ2V0IHBhcmVudHNTY3JvbGxQb2ludCgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KFxuICAgICAgdGhpcy5wYXJlbnRzLnJlZHVjZSgoc3VtLCBwKSA9PiBzdW0gKyBwLnNjcm9sbExlZnQsIDApLFxuICAgICAgdGhpcy5wYXJlbnRzLnJlZHVjZSgoc3VtLCBwKSA9PiBzdW0gKyBwLnNjcm9sbFRvcCwgMClcbiAgICApXG4gIH1cblxuICBnZXQgZW5hYmxlKCkge1xuICAgIHJldHVybiB0aGlzLl9lbmFibGVcbiAgfVxuXG4gIHNldCBlbmFibGUoZW5hYmxlKSB7XG4gICAgaWYgKGVuYWJsZSkge1xuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdlZS1kaXNhYmxlJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RyYWdlZS1kaXNhYmxlJylcbiAgICB9XG5cbiAgICB0aGlzLl9lbmFibGUgPSBlbmFibGVcbiAgfVxufVxuXG5EcmFnZ2FibGUuZW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuRHJhZ2dhYmxlLmVtaXR0ZXIub24oJ2RyYWdnYWJsZTpjcmVhdGUnLCBhZGRUb0RlZmF1bHRTY29wZSlcbiIsInZhciByZXNpemVPYnNlcnZlcnMgPSBbXTtcbmV4cG9ydCB7IHJlc2l6ZU9ic2VydmVycyB9O1xuIiwiaW1wb3J0IHsgcmVzaXplT2JzZXJ2ZXJzIH0gZnJvbSAnLi4vdXRpbHMvcmVzaXplT2JzZXJ2ZXJzJztcbnZhciBoYXNBY3RpdmVPYnNlcnZhdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHJlc2l6ZU9ic2VydmVycy5zb21lKGZ1bmN0aW9uIChybykgeyByZXR1cm4gcm8uYWN0aXZlVGFyZ2V0cy5sZW5ndGggPiAwOyB9KTtcbn07XG5leHBvcnQgeyBoYXNBY3RpdmVPYnNlcnZhdGlvbnMgfTtcbiIsImltcG9ydCB7IHJlc2l6ZU9ic2VydmVycyB9IGZyb20gJy4uL3V0aWxzL3Jlc2l6ZU9ic2VydmVycyc7XG52YXIgaGFzU2tpcHBlZE9ic2VydmF0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gcmVzaXplT2JzZXJ2ZXJzLnNvbWUoZnVuY3Rpb24gKHJvKSB7IHJldHVybiByby5za2lwcGVkVGFyZ2V0cy5sZW5ndGggPiAwOyB9KTtcbn07XG5leHBvcnQgeyBoYXNTa2lwcGVkT2JzZXJ2YXRpb25zIH07XG4iLCJ2YXIgbXNnID0gJ1Jlc2l6ZU9ic2VydmVyIGxvb3AgY29tcGxldGVkIHdpdGggdW5kZWxpdmVyZWQgbm90aWZpY2F0aW9ucy4nO1xudmFyIGRlbGl2ZXJSZXNpemVMb29wRXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV2ZW50O1xuICAgIGlmICh0eXBlb2YgRXJyb3JFdmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBldmVudCA9IG5ldyBFcnJvckV2ZW50KCdlcnJvcicsIHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1zZ1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50Jyk7XG4gICAgICAgIGV2ZW50LmluaXRFdmVudCgnZXJyb3InLCBmYWxzZSwgZmFsc2UpO1xuICAgICAgICBldmVudC5tZXNzYWdlID0gbXNnO1xuICAgIH1cbiAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChldmVudCk7XG59O1xuZXhwb3J0IHsgZGVsaXZlclJlc2l6ZUxvb3BFcnJvciB9O1xuIiwidmFyIFJlc2l6ZU9ic2VydmVyQm94T3B0aW9ucztcbihmdW5jdGlvbiAoUmVzaXplT2JzZXJ2ZXJCb3hPcHRpb25zKSB7XG4gICAgUmVzaXplT2JzZXJ2ZXJCb3hPcHRpb25zW1wiQk9SREVSX0JPWFwiXSA9IFwiYm9yZGVyLWJveFwiO1xuICAgIFJlc2l6ZU9ic2VydmVyQm94T3B0aW9uc1tcIkNPTlRFTlRfQk9YXCJdID0gXCJjb250ZW50LWJveFwiO1xuICAgIFJlc2l6ZU9ic2VydmVyQm94T3B0aW9uc1tcIkRFVklDRV9QSVhFTF9DT05URU5UX0JPWFwiXSA9IFwiZGV2aWNlLXBpeGVsLWNvbnRlbnQtYm94XCI7XG59KShSZXNpemVPYnNlcnZlckJveE9wdGlvbnMgfHwgKFJlc2l6ZU9ic2VydmVyQm94T3B0aW9ucyA9IHt9KSk7XG5leHBvcnQgeyBSZXNpemVPYnNlcnZlckJveE9wdGlvbnMgfTtcbiIsImV4cG9ydCB2YXIgZnJlZXplID0gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gT2JqZWN0LmZyZWV6ZShvYmopOyB9O1xuIiwiaW1wb3J0IHsgZnJlZXplIH0gZnJvbSAnLi91dGlscy9mcmVlemUnO1xudmFyIFJlc2l6ZU9ic2VydmVyU2l6ZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUmVzaXplT2JzZXJ2ZXJTaXplKGlubGluZVNpemUsIGJsb2NrU2l6ZSkge1xuICAgICAgICB0aGlzLmlubGluZVNpemUgPSBpbmxpbmVTaXplO1xuICAgICAgICB0aGlzLmJsb2NrU2l6ZSA9IGJsb2NrU2l6ZTtcbiAgICAgICAgZnJlZXplKHRoaXMpO1xuICAgIH1cbiAgICByZXR1cm4gUmVzaXplT2JzZXJ2ZXJTaXplO1xufSgpKTtcbmV4cG9ydCB7IFJlc2l6ZU9ic2VydmVyU2l6ZSB9O1xuIiwiaW1wb3J0IHsgZnJlZXplIH0gZnJvbSAnLi91dGlscy9mcmVlemUnO1xudmFyIERPTVJlY3RSZWFkT25seSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRE9NUmVjdFJlYWRPbmx5KHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdGhpcy50b3AgPSB0aGlzLnk7XG4gICAgICAgIHRoaXMubGVmdCA9IHRoaXMueDtcbiAgICAgICAgdGhpcy5ib3R0b20gPSB0aGlzLnRvcCArIHRoaXMuaGVpZ2h0O1xuICAgICAgICB0aGlzLnJpZ2h0ID0gdGhpcy5sZWZ0ICsgdGhpcy53aWR0aDtcbiAgICAgICAgcmV0dXJuIGZyZWV6ZSh0aGlzKTtcbiAgICB9XG4gICAgRE9NUmVjdFJlYWRPbmx5LnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYSA9IHRoaXMsIHggPSBfYS54LCB5ID0gX2EueSwgdG9wID0gX2EudG9wLCByaWdodCA9IF9hLnJpZ2h0LCBib3R0b20gPSBfYS5ib3R0b20sIGxlZnQgPSBfYS5sZWZ0LCB3aWR0aCA9IF9hLndpZHRoLCBoZWlnaHQgPSBfYS5oZWlnaHQ7XG4gICAgICAgIHJldHVybiB7IHg6IHgsIHk6IHksIHRvcDogdG9wLCByaWdodDogcmlnaHQsIGJvdHRvbTogYm90dG9tLCBsZWZ0OiBsZWZ0LCB3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0IH07XG4gICAgfTtcbiAgICBET01SZWN0UmVhZE9ubHkuZnJvbVJlY3QgPSBmdW5jdGlvbiAocmVjdGFuZ2xlKSB7XG4gICAgICAgIHJldHVybiBuZXcgRE9NUmVjdFJlYWRPbmx5KHJlY3RhbmdsZS54LCByZWN0YW5nbGUueSwgcmVjdGFuZ2xlLndpZHRoLCByZWN0YW5nbGUuaGVpZ2h0KTtcbiAgICB9O1xuICAgIHJldHVybiBET01SZWN0UmVhZE9ubHk7XG59KCkpO1xuZXhwb3J0IHsgRE9NUmVjdFJlYWRPbmx5IH07XG4iLCJ2YXIgaXNTVkcgPSBmdW5jdGlvbiAodGFyZ2V0KSB7IHJldHVybiB0YXJnZXQgaW5zdGFuY2VvZiBTVkdFbGVtZW50ICYmICdnZXRCQm94JyBpbiB0YXJnZXQ7IH07XG52YXIgaXNIaWRkZW4gPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgaWYgKGlzU1ZHKHRhcmdldCkpIHtcbiAgICAgICAgdmFyIF9hID0gdGFyZ2V0LmdldEJCb3goKSwgd2lkdGggPSBfYS53aWR0aCwgaGVpZ2h0ID0gX2EuaGVpZ2h0O1xuICAgICAgICByZXR1cm4gIXdpZHRoICYmICFoZWlnaHQ7XG4gICAgfVxuICAgIHZhciBfYiA9IHRhcmdldCwgb2Zmc2V0V2lkdGggPSBfYi5vZmZzZXRXaWR0aCwgb2Zmc2V0SGVpZ2h0ID0gX2Iub2Zmc2V0SGVpZ2h0O1xuICAgIHJldHVybiAhKG9mZnNldFdpZHRoIHx8IG9mZnNldEhlaWdodCB8fCB0YXJnZXQuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgpO1xufTtcbnZhciBpc0VsZW1lbnQgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgdmFyIF9hO1xuICAgIGlmIChvYmogaW5zdGFuY2VvZiBFbGVtZW50KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICB2YXIgc2NvcGUgPSAoX2EgPSBvYmogPT09IG51bGwgfHwgb2JqID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvYmoub3duZXJEb2N1bWVudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmRlZmF1bHRWaWV3O1xuICAgIHJldHVybiAhIShzY29wZSAmJiBvYmogaW5zdGFuY2VvZiBzY29wZS5FbGVtZW50KTtcbn07XG52YXIgaXNSZXBsYWNlZEVsZW1lbnQgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgc3dpdGNoICh0YXJnZXQudGFnTmFtZSkge1xuICAgICAgICBjYXNlICdJTlBVVCc6XG4gICAgICAgICAgICBpZiAodGFyZ2V0LnR5cGUgIT09ICdpbWFnZScpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgY2FzZSAnVklERU8nOlxuICAgICAgICBjYXNlICdBVURJTyc6XG4gICAgICAgIGNhc2UgJ0VNQkVEJzpcbiAgICAgICAgY2FzZSAnT0JKRUNUJzpcbiAgICAgICAgY2FzZSAnQ0FOVkFTJzpcbiAgICAgICAgY2FzZSAnSUZSQU1FJzpcbiAgICAgICAgY2FzZSAnSU1HJzpcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuZXhwb3J0IHsgaXNTVkcsIGlzSGlkZGVuLCBpc0VsZW1lbnQsIGlzUmVwbGFjZWRFbGVtZW50IH07XG4iLCJleHBvcnQgdmFyIGdsb2JhbCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDoge307XG4iLCJpbXBvcnQgeyBSZXNpemVPYnNlcnZlckJveE9wdGlvbnMgfSBmcm9tICcuLi9SZXNpemVPYnNlcnZlckJveE9wdGlvbnMnO1xuaW1wb3J0IHsgUmVzaXplT2JzZXJ2ZXJTaXplIH0gZnJvbSAnLi4vUmVzaXplT2JzZXJ2ZXJTaXplJztcbmltcG9ydCB7IERPTVJlY3RSZWFkT25seSB9IGZyb20gJy4uL0RPTVJlY3RSZWFkT25seSc7XG5pbXBvcnQgeyBpc1NWRywgaXNIaWRkZW4gfSBmcm9tICcuLi91dGlscy9lbGVtZW50JztcbmltcG9ydCB7IGZyZWV6ZSB9IGZyb20gJy4uL3V0aWxzL2ZyZWV6ZSc7XG5pbXBvcnQgeyBnbG9iYWwgfSBmcm9tICcuLi91dGlscy9nbG9iYWwnO1xudmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcbnZhciBzY3JvbGxSZWdleHAgPSAvYXV0b3xzY3JvbGwvO1xudmFyIHZlcnRpY2FsUmVnZXhwID0gL150Ynx2ZXJ0aWNhbC87XG52YXIgSUUgPSAoL21zaWV8dHJpZGVudC9pKS50ZXN0KGdsb2JhbC5uYXZpZ2F0b3IgJiYgZ2xvYmFsLm5hdmlnYXRvci51c2VyQWdlbnQpO1xudmFyIHBhcnNlRGltZW5zaW9uID0gZnVuY3Rpb24gKHBpeGVsKSB7IHJldHVybiBwYXJzZUZsb2F0KHBpeGVsIHx8ICcwJyk7IH07XG52YXIgc2l6ZSA9IGZ1bmN0aW9uIChpbmxpbmVTaXplLCBibG9ja1NpemUsIHN3aXRjaFNpemVzKSB7XG4gICAgaWYgKGlubGluZVNpemUgPT09IHZvaWQgMCkgeyBpbmxpbmVTaXplID0gMDsgfVxuICAgIGlmIChibG9ja1NpemUgPT09IHZvaWQgMCkgeyBibG9ja1NpemUgPSAwOyB9XG4gICAgaWYgKHN3aXRjaFNpemVzID09PSB2b2lkIDApIHsgc3dpdGNoU2l6ZXMgPSBmYWxzZTsgfVxuICAgIHJldHVybiBuZXcgUmVzaXplT2JzZXJ2ZXJTaXplKChzd2l0Y2hTaXplcyA/IGJsb2NrU2l6ZSA6IGlubGluZVNpemUpIHx8IDAsIChzd2l0Y2hTaXplcyA/IGlubGluZVNpemUgOiBibG9ja1NpemUpIHx8IDApO1xufTtcbnZhciB6ZXJvQm94ZXMgPSBmcmVlemUoe1xuICAgIGRldmljZVBpeGVsQ29udGVudEJveFNpemU6IHNpemUoKSxcbiAgICBib3JkZXJCb3hTaXplOiBzaXplKCksXG4gICAgY29udGVudEJveFNpemU6IHNpemUoKSxcbiAgICBjb250ZW50UmVjdDogbmV3IERPTVJlY3RSZWFkT25seSgwLCAwLCAwLCAwKVxufSk7XG52YXIgY2FsY3VsYXRlQm94U2l6ZXMgPSBmdW5jdGlvbiAodGFyZ2V0LCBmb3JjZVJlY2FsY3VsYXRpb24pIHtcbiAgICBpZiAoZm9yY2VSZWNhbGN1bGF0aW9uID09PSB2b2lkIDApIHsgZm9yY2VSZWNhbGN1bGF0aW9uID0gZmFsc2U7IH1cbiAgICBpZiAoY2FjaGUuaGFzKHRhcmdldCkgJiYgIWZvcmNlUmVjYWxjdWxhdGlvbikge1xuICAgICAgICByZXR1cm4gY2FjaGUuZ2V0KHRhcmdldCk7XG4gICAgfVxuICAgIGlmIChpc0hpZGRlbih0YXJnZXQpKSB7XG4gICAgICAgIGNhY2hlLnNldCh0YXJnZXQsIHplcm9Cb3hlcyk7XG4gICAgICAgIHJldHVybiB6ZXJvQm94ZXM7XG4gICAgfVxuICAgIHZhciBjcyA9IGdldENvbXB1dGVkU3R5bGUodGFyZ2V0KTtcbiAgICB2YXIgc3ZnID0gaXNTVkcodGFyZ2V0KSAmJiB0YXJnZXQub3duZXJTVkdFbGVtZW50ICYmIHRhcmdldC5nZXRCQm94KCk7XG4gICAgdmFyIHJlbW92ZVBhZGRpbmcgPSAhSUUgJiYgY3MuYm94U2l6aW5nID09PSAnYm9yZGVyLWJveCc7XG4gICAgdmFyIHN3aXRjaFNpemVzID0gdmVydGljYWxSZWdleHAudGVzdChjcy53cml0aW5nTW9kZSB8fCAnJyk7XG4gICAgdmFyIGNhblNjcm9sbFZlcnRpY2FsbHkgPSAhc3ZnICYmIHNjcm9sbFJlZ2V4cC50ZXN0KGNzLm92ZXJmbG93WSB8fCAnJyk7XG4gICAgdmFyIGNhblNjcm9sbEhvcml6b250YWxseSA9ICFzdmcgJiYgc2Nyb2xsUmVnZXhwLnRlc3QoY3Mub3ZlcmZsb3dYIHx8ICcnKTtcbiAgICB2YXIgcGFkZGluZ1RvcCA9IHN2ZyA/IDAgOiBwYXJzZURpbWVuc2lvbihjcy5wYWRkaW5nVG9wKTtcbiAgICB2YXIgcGFkZGluZ1JpZ2h0ID0gc3ZnID8gMCA6IHBhcnNlRGltZW5zaW9uKGNzLnBhZGRpbmdSaWdodCk7XG4gICAgdmFyIHBhZGRpbmdCb3R0b20gPSBzdmcgPyAwIDogcGFyc2VEaW1lbnNpb24oY3MucGFkZGluZ0JvdHRvbSk7XG4gICAgdmFyIHBhZGRpbmdMZWZ0ID0gc3ZnID8gMCA6IHBhcnNlRGltZW5zaW9uKGNzLnBhZGRpbmdMZWZ0KTtcbiAgICB2YXIgYm9yZGVyVG9wID0gc3ZnID8gMCA6IHBhcnNlRGltZW5zaW9uKGNzLmJvcmRlclRvcFdpZHRoKTtcbiAgICB2YXIgYm9yZGVyUmlnaHQgPSBzdmcgPyAwIDogcGFyc2VEaW1lbnNpb24oY3MuYm9yZGVyUmlnaHRXaWR0aCk7XG4gICAgdmFyIGJvcmRlckJvdHRvbSA9IHN2ZyA/IDAgOiBwYXJzZURpbWVuc2lvbihjcy5ib3JkZXJCb3R0b21XaWR0aCk7XG4gICAgdmFyIGJvcmRlckxlZnQgPSBzdmcgPyAwIDogcGFyc2VEaW1lbnNpb24oY3MuYm9yZGVyTGVmdFdpZHRoKTtcbiAgICB2YXIgaG9yaXpvbnRhbFBhZGRpbmcgPSBwYWRkaW5nTGVmdCArIHBhZGRpbmdSaWdodDtcbiAgICB2YXIgdmVydGljYWxQYWRkaW5nID0gcGFkZGluZ1RvcCArIHBhZGRpbmdCb3R0b207XG4gICAgdmFyIGhvcml6b250YWxCb3JkZXJBcmVhID0gYm9yZGVyTGVmdCArIGJvcmRlclJpZ2h0O1xuICAgIHZhciB2ZXJ0aWNhbEJvcmRlckFyZWEgPSBib3JkZXJUb3AgKyBib3JkZXJCb3R0b207XG4gICAgdmFyIGhvcml6b250YWxTY3JvbGxiYXJUaGlja25lc3MgPSAhY2FuU2Nyb2xsSG9yaXpvbnRhbGx5ID8gMCA6IHRhcmdldC5vZmZzZXRIZWlnaHQgLSB2ZXJ0aWNhbEJvcmRlckFyZWEgLSB0YXJnZXQuY2xpZW50SGVpZ2h0O1xuICAgIHZhciB2ZXJ0aWNhbFNjcm9sbGJhclRoaWNrbmVzcyA9ICFjYW5TY3JvbGxWZXJ0aWNhbGx5ID8gMCA6IHRhcmdldC5vZmZzZXRXaWR0aCAtIGhvcml6b250YWxCb3JkZXJBcmVhIC0gdGFyZ2V0LmNsaWVudFdpZHRoO1xuICAgIHZhciB3aWR0aFJlZHVjdGlvbiA9IHJlbW92ZVBhZGRpbmcgPyBob3Jpem9udGFsUGFkZGluZyArIGhvcml6b250YWxCb3JkZXJBcmVhIDogMDtcbiAgICB2YXIgaGVpZ2h0UmVkdWN0aW9uID0gcmVtb3ZlUGFkZGluZyA/IHZlcnRpY2FsUGFkZGluZyArIHZlcnRpY2FsQm9yZGVyQXJlYSA6IDA7XG4gICAgdmFyIGNvbnRlbnRXaWR0aCA9IHN2ZyA/IHN2Zy53aWR0aCA6IHBhcnNlRGltZW5zaW9uKGNzLndpZHRoKSAtIHdpZHRoUmVkdWN0aW9uIC0gdmVydGljYWxTY3JvbGxiYXJUaGlja25lc3M7XG4gICAgdmFyIGNvbnRlbnRIZWlnaHQgPSBzdmcgPyBzdmcuaGVpZ2h0IDogcGFyc2VEaW1lbnNpb24oY3MuaGVpZ2h0KSAtIGhlaWdodFJlZHVjdGlvbiAtIGhvcml6b250YWxTY3JvbGxiYXJUaGlja25lc3M7XG4gICAgdmFyIGJvcmRlckJveFdpZHRoID0gY29udGVudFdpZHRoICsgaG9yaXpvbnRhbFBhZGRpbmcgKyB2ZXJ0aWNhbFNjcm9sbGJhclRoaWNrbmVzcyArIGhvcml6b250YWxCb3JkZXJBcmVhO1xuICAgIHZhciBib3JkZXJCb3hIZWlnaHQgPSBjb250ZW50SGVpZ2h0ICsgdmVydGljYWxQYWRkaW5nICsgaG9yaXpvbnRhbFNjcm9sbGJhclRoaWNrbmVzcyArIHZlcnRpY2FsQm9yZGVyQXJlYTtcbiAgICB2YXIgYm94ZXMgPSBmcmVlemUoe1xuICAgICAgICBkZXZpY2VQaXhlbENvbnRlbnRCb3hTaXplOiBzaXplKE1hdGgucm91bmQoY29udGVudFdpZHRoICogZGV2aWNlUGl4ZWxSYXRpbyksIE1hdGgucm91bmQoY29udGVudEhlaWdodCAqIGRldmljZVBpeGVsUmF0aW8pLCBzd2l0Y2hTaXplcyksXG4gICAgICAgIGJvcmRlckJveFNpemU6IHNpemUoYm9yZGVyQm94V2lkdGgsIGJvcmRlckJveEhlaWdodCwgc3dpdGNoU2l6ZXMpLFxuICAgICAgICBjb250ZW50Qm94U2l6ZTogc2l6ZShjb250ZW50V2lkdGgsIGNvbnRlbnRIZWlnaHQsIHN3aXRjaFNpemVzKSxcbiAgICAgICAgY29udGVudFJlY3Q6IG5ldyBET01SZWN0UmVhZE9ubHkocGFkZGluZ0xlZnQsIHBhZGRpbmdUb3AsIGNvbnRlbnRXaWR0aCwgY29udGVudEhlaWdodClcbiAgICB9KTtcbiAgICBjYWNoZS5zZXQodGFyZ2V0LCBib3hlcyk7XG4gICAgcmV0dXJuIGJveGVzO1xufTtcbnZhciBjYWxjdWxhdGVCb3hTaXplID0gZnVuY3Rpb24gKHRhcmdldCwgb2JzZXJ2ZWRCb3gsIGZvcmNlUmVjYWxjdWxhdGlvbikge1xuICAgIHZhciBfYSA9IGNhbGN1bGF0ZUJveFNpemVzKHRhcmdldCwgZm9yY2VSZWNhbGN1bGF0aW9uKSwgYm9yZGVyQm94U2l6ZSA9IF9hLmJvcmRlckJveFNpemUsIGNvbnRlbnRCb3hTaXplID0gX2EuY29udGVudEJveFNpemUsIGRldmljZVBpeGVsQ29udGVudEJveFNpemUgPSBfYS5kZXZpY2VQaXhlbENvbnRlbnRCb3hTaXplO1xuICAgIHN3aXRjaCAob2JzZXJ2ZWRCb3gpIHtcbiAgICAgICAgY2FzZSBSZXNpemVPYnNlcnZlckJveE9wdGlvbnMuREVWSUNFX1BJWEVMX0NPTlRFTlRfQk9YOlxuICAgICAgICAgICAgcmV0dXJuIGRldmljZVBpeGVsQ29udGVudEJveFNpemU7XG4gICAgICAgIGNhc2UgUmVzaXplT2JzZXJ2ZXJCb3hPcHRpb25zLkJPUkRFUl9CT1g6XG4gICAgICAgICAgICByZXR1cm4gYm9yZGVyQm94U2l6ZTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBjb250ZW50Qm94U2l6ZTtcbiAgICB9XG59O1xuZXhwb3J0IHsgY2FsY3VsYXRlQm94U2l6ZSwgY2FsY3VsYXRlQm94U2l6ZXMgfTtcbiIsImltcG9ydCB7IGNhbGN1bGF0ZUJveFNpemVzIH0gZnJvbSAnLi9hbGdvcml0aG1zL2NhbGN1bGF0ZUJveFNpemUnO1xuaW1wb3J0IHsgZnJlZXplIH0gZnJvbSAnLi91dGlscy9mcmVlemUnO1xudmFyIFJlc2l6ZU9ic2VydmVyRW50cnkgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFJlc2l6ZU9ic2VydmVyRW50cnkodGFyZ2V0KSB7XG4gICAgICAgIHZhciBib3hlcyA9IGNhbGN1bGF0ZUJveFNpemVzKHRhcmdldCk7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICB0aGlzLmNvbnRlbnRSZWN0ID0gYm94ZXMuY29udGVudFJlY3Q7XG4gICAgICAgIHRoaXMuYm9yZGVyQm94U2l6ZSA9IGZyZWV6ZShbYm94ZXMuYm9yZGVyQm94U2l6ZV0pO1xuICAgICAgICB0aGlzLmNvbnRlbnRCb3hTaXplID0gZnJlZXplKFtib3hlcy5jb250ZW50Qm94U2l6ZV0pO1xuICAgICAgICB0aGlzLmRldmljZVBpeGVsQ29udGVudEJveFNpemUgPSBmcmVlemUoW2JveGVzLmRldmljZVBpeGVsQ29udGVudEJveFNpemVdKTtcbiAgICB9XG4gICAgcmV0dXJuIFJlc2l6ZU9ic2VydmVyRW50cnk7XG59KCkpO1xuZXhwb3J0IHsgUmVzaXplT2JzZXJ2ZXJFbnRyeSB9O1xuIiwiaW1wb3J0IHsgaXNIaWRkZW4gfSBmcm9tICcuLi91dGlscy9lbGVtZW50JztcbnZhciBjYWxjdWxhdGVEZXB0aEZvck5vZGUgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgIGlmIChpc0hpZGRlbihub2RlKSkge1xuICAgICAgICByZXR1cm4gSW5maW5pdHk7XG4gICAgfVxuICAgIHZhciBkZXB0aCA9IDA7XG4gICAgdmFyIHBhcmVudCA9IG5vZGUucGFyZW50Tm9kZTtcbiAgICB3aGlsZSAocGFyZW50KSB7XG4gICAgICAgIGRlcHRoICs9IDE7XG4gICAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlO1xuICAgIH1cbiAgICByZXR1cm4gZGVwdGg7XG59O1xuZXhwb3J0IHsgY2FsY3VsYXRlRGVwdGhGb3JOb2RlIH07XG4iLCJpbXBvcnQgeyByZXNpemVPYnNlcnZlcnMgfSBmcm9tICcuLi91dGlscy9yZXNpemVPYnNlcnZlcnMnO1xuaW1wb3J0IHsgUmVzaXplT2JzZXJ2ZXJFbnRyeSB9IGZyb20gJy4uL1Jlc2l6ZU9ic2VydmVyRW50cnknO1xuaW1wb3J0IHsgY2FsY3VsYXRlRGVwdGhGb3JOb2RlIH0gZnJvbSAnLi9jYWxjdWxhdGVEZXB0aEZvck5vZGUnO1xuaW1wb3J0IHsgY2FsY3VsYXRlQm94U2l6ZSB9IGZyb20gJy4vY2FsY3VsYXRlQm94U2l6ZSc7XG52YXIgYnJvYWRjYXN0QWN0aXZlT2JzZXJ2YXRpb25zID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzaGFsbG93ZXN0RGVwdGggPSBJbmZpbml0eTtcbiAgICB2YXIgY2FsbGJhY2tzID0gW107XG4gICAgcmVzaXplT2JzZXJ2ZXJzLmZvckVhY2goZnVuY3Rpb24gcHJvY2Vzc09ic2VydmVyKHJvKSB7XG4gICAgICAgIGlmIChyby5hY3RpdmVUYXJnZXRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlbnRyaWVzID0gW107XG4gICAgICAgIHJvLmFjdGl2ZVRhcmdldHMuZm9yRWFjaChmdW5jdGlvbiBwcm9jZXNzVGFyZ2V0KG90KSB7XG4gICAgICAgICAgICB2YXIgZW50cnkgPSBuZXcgUmVzaXplT2JzZXJ2ZXJFbnRyeShvdC50YXJnZXQpO1xuICAgICAgICAgICAgdmFyIHRhcmdldERlcHRoID0gY2FsY3VsYXRlRGVwdGhGb3JOb2RlKG90LnRhcmdldCk7XG4gICAgICAgICAgICBlbnRyaWVzLnB1c2goZW50cnkpO1xuICAgICAgICAgICAgb3QubGFzdFJlcG9ydGVkU2l6ZSA9IGNhbGN1bGF0ZUJveFNpemUob3QudGFyZ2V0LCBvdC5vYnNlcnZlZEJveCk7XG4gICAgICAgICAgICBpZiAodGFyZ2V0RGVwdGggPCBzaGFsbG93ZXN0RGVwdGgpIHtcbiAgICAgICAgICAgICAgICBzaGFsbG93ZXN0RGVwdGggPSB0YXJnZXREZXB0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNhbGxiYWNrcy5wdXNoKGZ1bmN0aW9uIHJlc2l6ZU9ic2VydmVyQ2FsbGJhY2soKSB7XG4gICAgICAgICAgICByby5jYWxsYmFjay5jYWxsKHJvLm9ic2VydmVyLCBlbnRyaWVzLCByby5vYnNlcnZlcik7XG4gICAgICAgIH0pO1xuICAgICAgICByby5hY3RpdmVUYXJnZXRzLnNwbGljZSgwLCByby5hY3RpdmVUYXJnZXRzLmxlbmd0aCk7XG4gICAgfSk7XG4gICAgZm9yICh2YXIgX2kgPSAwLCBjYWxsYmFja3NfMSA9IGNhbGxiYWNrczsgX2kgPCBjYWxsYmFja3NfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gY2FsbGJhY2tzXzFbX2ldO1xuICAgICAgICBjYWxsYmFjaygpO1xuICAgIH1cbiAgICByZXR1cm4gc2hhbGxvd2VzdERlcHRoO1xufTtcbmV4cG9ydCB7IGJyb2FkY2FzdEFjdGl2ZU9ic2VydmF0aW9ucyB9O1xuIiwiaW1wb3J0IHsgcmVzaXplT2JzZXJ2ZXJzIH0gZnJvbSAnLi4vdXRpbHMvcmVzaXplT2JzZXJ2ZXJzJztcbmltcG9ydCB7IGNhbGN1bGF0ZURlcHRoRm9yTm9kZSB9IGZyb20gJy4vY2FsY3VsYXRlRGVwdGhGb3JOb2RlJztcbnZhciBnYXRoZXJBY3RpdmVPYnNlcnZhdGlvbnNBdERlcHRoID0gZnVuY3Rpb24gKGRlcHRoKSB7XG4gICAgcmVzaXplT2JzZXJ2ZXJzLmZvckVhY2goZnVuY3Rpb24gcHJvY2Vzc09ic2VydmVyKHJvKSB7XG4gICAgICAgIHJvLmFjdGl2ZVRhcmdldHMuc3BsaWNlKDAsIHJvLmFjdGl2ZVRhcmdldHMubGVuZ3RoKTtcbiAgICAgICAgcm8uc2tpcHBlZFRhcmdldHMuc3BsaWNlKDAsIHJvLnNraXBwZWRUYXJnZXRzLmxlbmd0aCk7XG4gICAgICAgIHJvLm9ic2VydmF0aW9uVGFyZ2V0cy5mb3JFYWNoKGZ1bmN0aW9uIHByb2Nlc3NUYXJnZXQob3QpIHtcbiAgICAgICAgICAgIGlmIChvdC5pc0FjdGl2ZSgpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNhbGN1bGF0ZURlcHRoRm9yTm9kZShvdC50YXJnZXQpID4gZGVwdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgcm8uYWN0aXZlVGFyZ2V0cy5wdXNoKG90KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJvLnNraXBwZWRUYXJnZXRzLnB1c2gob3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59O1xuZXhwb3J0IHsgZ2F0aGVyQWN0aXZlT2JzZXJ2YXRpb25zQXREZXB0aCB9O1xuIiwiaW1wb3J0IHsgaGFzQWN0aXZlT2JzZXJ2YXRpb25zIH0gZnJvbSAnLi4vYWxnb3JpdGhtcy9oYXNBY3RpdmVPYnNlcnZhdGlvbnMnO1xuaW1wb3J0IHsgaGFzU2tpcHBlZE9ic2VydmF0aW9ucyB9IGZyb20gJy4uL2FsZ29yaXRobXMvaGFzU2tpcHBlZE9ic2VydmF0aW9ucyc7XG5pbXBvcnQgeyBkZWxpdmVyUmVzaXplTG9vcEVycm9yIH0gZnJvbSAnLi4vYWxnb3JpdGhtcy9kZWxpdmVyUmVzaXplTG9vcEVycm9yJztcbmltcG9ydCB7IGJyb2FkY2FzdEFjdGl2ZU9ic2VydmF0aW9ucyB9IGZyb20gJy4uL2FsZ29yaXRobXMvYnJvYWRjYXN0QWN0aXZlT2JzZXJ2YXRpb25zJztcbmltcG9ydCB7IGdhdGhlckFjdGl2ZU9ic2VydmF0aW9uc0F0RGVwdGggfSBmcm9tICcuLi9hbGdvcml0aG1zL2dhdGhlckFjdGl2ZU9ic2VydmF0aW9uc0F0RGVwdGgnO1xudmFyIHByb2Nlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGRlcHRoID0gMDtcbiAgICBnYXRoZXJBY3RpdmVPYnNlcnZhdGlvbnNBdERlcHRoKGRlcHRoKTtcbiAgICB3aGlsZSAoaGFzQWN0aXZlT2JzZXJ2YXRpb25zKCkpIHtcbiAgICAgICAgZGVwdGggPSBicm9hZGNhc3RBY3RpdmVPYnNlcnZhdGlvbnMoKTtcbiAgICAgICAgZ2F0aGVyQWN0aXZlT2JzZXJ2YXRpb25zQXREZXB0aChkZXB0aCk7XG4gICAgfVxuICAgIGlmIChoYXNTa2lwcGVkT2JzZXJ2YXRpb25zKCkpIHtcbiAgICAgICAgZGVsaXZlclJlc2l6ZUxvb3BFcnJvcigpO1xuICAgIH1cbiAgICByZXR1cm4gZGVwdGggPiAwO1xufTtcbmV4cG9ydCB7IHByb2Nlc3MgfTtcbiIsInZhciB0cmlnZ2VyO1xudmFyIGNhbGxiYWNrcyA9IFtdO1xudmFyIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNhbGxiYWNrcy5zcGxpY2UoMCkuZm9yRWFjaChmdW5jdGlvbiAoY2IpIHsgcmV0dXJuIGNiKCk7IH0pOyB9O1xudmFyIHF1ZXVlTWljcm9UYXNrID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgaWYgKCF0cmlnZ2VyKSB7XG4gICAgICAgIHZhciB0b2dnbGVfMSA9IDA7XG4gICAgICAgIHZhciBlbF8xID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuICAgICAgICB2YXIgY29uZmlnID0geyBjaGFyYWN0ZXJEYXRhOiB0cnVlIH07XG4gICAgICAgIG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vdGlmeSgpOyB9KS5vYnNlcnZlKGVsXzEsIGNvbmZpZyk7XG4gICAgICAgIHRyaWdnZXIgPSBmdW5jdGlvbiAoKSB7IGVsXzEudGV4dENvbnRlbnQgPSBcIlwiLmNvbmNhdCh0b2dnbGVfMSA/IHRvZ2dsZV8xLS0gOiB0b2dnbGVfMSsrKTsgfTtcbiAgICB9XG4gICAgY2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuICAgIHRyaWdnZXIoKTtcbn07XG5leHBvcnQgeyBxdWV1ZU1pY3JvVGFzayB9O1xuIiwiaW1wb3J0IHsgcXVldWVNaWNyb1Rhc2sgfSBmcm9tICcuL3F1ZXVlTWljcm9UYXNrJztcbnZhciBxdWV1ZVJlc2l6ZU9ic2VydmVyID0gZnVuY3Rpb24gKGNiKSB7XG4gICAgcXVldWVNaWNyb1Rhc2soZnVuY3Rpb24gUmVzaXplT2JzZXJ2ZXIoKSB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShjYik7XG4gICAgfSk7XG59O1xuZXhwb3J0IHsgcXVldWVSZXNpemVPYnNlcnZlciB9O1xuIiwiaW1wb3J0IHsgcHJvY2VzcyB9IGZyb20gJy4vcHJvY2Vzcyc7XG5pbXBvcnQgeyBnbG9iYWwgfSBmcm9tICcuL2dsb2JhbCc7XG5pbXBvcnQgeyBxdWV1ZVJlc2l6ZU9ic2VydmVyIH0gZnJvbSAnLi9xdWV1ZVJlc2l6ZU9ic2VydmVyJztcbnZhciB3YXRjaGluZyA9IDA7XG52YXIgaXNXYXRjaGluZyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICEhd2F0Y2hpbmc7IH07XG52YXIgQ0FUQ0hfUEVSSU9EID0gMjUwO1xudmFyIG9ic2VydmVyQ29uZmlnID0geyBhdHRyaWJ1dGVzOiB0cnVlLCBjaGFyYWN0ZXJEYXRhOiB0cnVlLCBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfTtcbnZhciBldmVudHMgPSBbXG4gICAgJ3Jlc2l6ZScsXG4gICAgJ2xvYWQnLFxuICAgICd0cmFuc2l0aW9uZW5kJyxcbiAgICAnYW5pbWF0aW9uZW5kJyxcbiAgICAnYW5pbWF0aW9uc3RhcnQnLFxuICAgICdhbmltYXRpb25pdGVyYXRpb24nLFxuICAgICdrZXl1cCcsXG4gICAgJ2tleWRvd24nLFxuICAgICdtb3VzZXVwJyxcbiAgICAnbW91c2Vkb3duJyxcbiAgICAnbW91c2VvdmVyJyxcbiAgICAnbW91c2VvdXQnLFxuICAgICdibHVyJyxcbiAgICAnZm9jdXMnXG5dO1xudmFyIHRpbWUgPSBmdW5jdGlvbiAodGltZW91dCkge1xuICAgIGlmICh0aW1lb3V0ID09PSB2b2lkIDApIHsgdGltZW91dCA9IDA7IH1cbiAgICByZXR1cm4gRGF0ZS5ub3coKSArIHRpbWVvdXQ7XG59O1xudmFyIHNjaGVkdWxlZCA9IGZhbHNlO1xudmFyIFNjaGVkdWxlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2NoZWR1bGVyKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLnN0b3BwZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmxpc3RlbmVyID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuc2NoZWR1bGUoKTsgfTtcbiAgICB9XG4gICAgU2NoZWR1bGVyLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAodGltZW91dCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAodGltZW91dCA9PT0gdm9pZCAwKSB7IHRpbWVvdXQgPSBDQVRDSF9QRVJJT0Q7IH1cbiAgICAgICAgaWYgKHNjaGVkdWxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHNjaGVkdWxlZCA9IHRydWU7XG4gICAgICAgIHZhciB1bnRpbCA9IHRpbWUodGltZW91dCk7XG4gICAgICAgIHF1ZXVlUmVzaXplT2JzZXJ2ZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGVsZW1lbnRzSGF2ZVJlc2l6ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudHNIYXZlUmVzaXplZCA9IHByb2Nlc3MoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIHNjaGVkdWxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRpbWVvdXQgPSB1bnRpbCAtIHRpbWUoKTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzV2F0Y2hpbmcoKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50c0hhdmVSZXNpemVkKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnJ1bigxMDAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGltZW91dCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMucnVuKHRpbWVvdXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgU2NoZWR1bGVyLnByb3RvdHlwZS5zY2hlZHVsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgIHRoaXMucnVuKCk7XG4gICAgfTtcbiAgICBTY2hlZHVsZXIucHJvdG90eXBlLm9ic2VydmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBjYiA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLm9ic2VydmVyICYmIF90aGlzLm9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuYm9keSwgb2JzZXJ2ZXJDb25maWcpOyB9O1xuICAgICAgICBkb2N1bWVudC5ib2R5ID8gY2IoKSA6IGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgY2IpO1xuICAgIH07XG4gICAgU2NoZWR1bGVyLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuc3RvcHBlZCkge1xuICAgICAgICAgICAgdGhpcy5zdG9wcGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLm9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIodGhpcy5saXN0ZW5lcik7XG4gICAgICAgICAgICB0aGlzLm9ic2VydmUoKTtcbiAgICAgICAgICAgIGV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcihuYW1lLCBfdGhpcy5saXN0ZW5lciwgdHJ1ZSk7IH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTY2hlZHVsZXIucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICghdGhpcy5zdG9wcGVkKSB7XG4gICAgICAgICAgICB0aGlzLm9ic2VydmVyICYmIHRoaXMub2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIGdsb2JhbC5yZW1vdmVFdmVudExpc3RlbmVyKG5hbWUsIF90aGlzLmxpc3RlbmVyLCB0cnVlKTsgfSk7XG4gICAgICAgICAgICB0aGlzLnN0b3BwZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gU2NoZWR1bGVyO1xufSgpKTtcbnZhciBzY2hlZHVsZXIgPSBuZXcgU2NoZWR1bGVyKCk7XG52YXIgdXBkYXRlQ291bnQgPSBmdW5jdGlvbiAobikge1xuICAgICF3YXRjaGluZyAmJiBuID4gMCAmJiBzY2hlZHVsZXIuc3RhcnQoKTtcbiAgICB3YXRjaGluZyArPSBuO1xuICAgICF3YXRjaGluZyAmJiBzY2hlZHVsZXIuc3RvcCgpO1xufTtcbmV4cG9ydCB7IHNjaGVkdWxlciwgdXBkYXRlQ291bnQgfTtcbiIsImltcG9ydCB7IFJlc2l6ZU9ic2VydmVyQm94T3B0aW9ucyB9IGZyb20gJy4vUmVzaXplT2JzZXJ2ZXJCb3hPcHRpb25zJztcbmltcG9ydCB7IGNhbGN1bGF0ZUJveFNpemUgfSBmcm9tICcuL2FsZ29yaXRobXMvY2FsY3VsYXRlQm94U2l6ZSc7XG5pbXBvcnQgeyBpc1NWRywgaXNSZXBsYWNlZEVsZW1lbnQgfSBmcm9tICcuL3V0aWxzL2VsZW1lbnQnO1xudmFyIHNraXBOb3RpZnlPbkVsZW1lbnQgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgcmV0dXJuICFpc1NWRyh0YXJnZXQpXG4gICAgICAgICYmICFpc1JlcGxhY2VkRWxlbWVudCh0YXJnZXQpXG4gICAgICAgICYmIGdldENvbXB1dGVkU3R5bGUodGFyZ2V0KS5kaXNwbGF5ID09PSAnaW5saW5lJztcbn07XG52YXIgUmVzaXplT2JzZXJ2YXRpb24gPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFJlc2l6ZU9ic2VydmF0aW9uKHRhcmdldCwgb2JzZXJ2ZWRCb3gpIHtcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgIHRoaXMub2JzZXJ2ZWRCb3ggPSBvYnNlcnZlZEJveCB8fCBSZXNpemVPYnNlcnZlckJveE9wdGlvbnMuQ09OVEVOVF9CT1g7XG4gICAgICAgIHRoaXMubGFzdFJlcG9ydGVkU2l6ZSA9IHtcbiAgICAgICAgICAgIGlubGluZVNpemU6IDAsXG4gICAgICAgICAgICBibG9ja1NpemU6IDBcbiAgICAgICAgfTtcbiAgICB9XG4gICAgUmVzaXplT2JzZXJ2YXRpb24ucHJvdG90eXBlLmlzQWN0aXZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc2l6ZSA9IGNhbGN1bGF0ZUJveFNpemUodGhpcy50YXJnZXQsIHRoaXMub2JzZXJ2ZWRCb3gsIHRydWUpO1xuICAgICAgICBpZiAoc2tpcE5vdGlmeU9uRWxlbWVudCh0aGlzLnRhcmdldCkpIHtcbiAgICAgICAgICAgIHRoaXMubGFzdFJlcG9ydGVkU2l6ZSA9IHNpemU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubGFzdFJlcG9ydGVkU2l6ZS5pbmxpbmVTaXplICE9PSBzaXplLmlubGluZVNpemVcbiAgICAgICAgICAgIHx8IHRoaXMubGFzdFJlcG9ydGVkU2l6ZS5ibG9ja1NpemUgIT09IHNpemUuYmxvY2tTaXplKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICByZXR1cm4gUmVzaXplT2JzZXJ2YXRpb247XG59KCkpO1xuZXhwb3J0IHsgUmVzaXplT2JzZXJ2YXRpb24gfTtcbiIsInZhciBSZXNpemVPYnNlcnZlckRldGFpbCA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUmVzaXplT2JzZXJ2ZXJEZXRhaWwocmVzaXplT2JzZXJ2ZXIsIGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlVGFyZ2V0cyA9IFtdO1xuICAgICAgICB0aGlzLnNraXBwZWRUYXJnZXRzID0gW107XG4gICAgICAgIHRoaXMub2JzZXJ2YXRpb25UYXJnZXRzID0gW107XG4gICAgICAgIHRoaXMub2JzZXJ2ZXIgPSByZXNpemVPYnNlcnZlcjtcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIH1cbiAgICByZXR1cm4gUmVzaXplT2JzZXJ2ZXJEZXRhaWw7XG59KCkpO1xuZXhwb3J0IHsgUmVzaXplT2JzZXJ2ZXJEZXRhaWwgfTtcbiIsImltcG9ydCB7IHNjaGVkdWxlciwgdXBkYXRlQ291bnQgfSBmcm9tICcuL3V0aWxzL3NjaGVkdWxlcic7XG5pbXBvcnQgeyBSZXNpemVPYnNlcnZhdGlvbiB9IGZyb20gJy4vUmVzaXplT2JzZXJ2YXRpb24nO1xuaW1wb3J0IHsgUmVzaXplT2JzZXJ2ZXJEZXRhaWwgfSBmcm9tICcuL1Jlc2l6ZU9ic2VydmVyRGV0YWlsJztcbmltcG9ydCB7IHJlc2l6ZU9ic2VydmVycyB9IGZyb20gJy4vdXRpbHMvcmVzaXplT2JzZXJ2ZXJzJztcbnZhciBvYnNlcnZlck1hcCA9IG5ldyBXZWFrTWFwKCk7XG52YXIgZ2V0T2JzZXJ2YXRpb25JbmRleCA9IGZ1bmN0aW9uIChvYnNlcnZhdGlvblRhcmdldHMsIHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JzZXJ2YXRpb25UYXJnZXRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChvYnNlcnZhdGlvblRhcmdldHNbaV0udGFyZ2V0ID09PSB0YXJnZXQpIHtcbiAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAtMTtcbn07XG52YXIgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIoKSB7XG4gICAgfVxuICAgIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5jb25uZWN0ID0gZnVuY3Rpb24gKHJlc2l6ZU9ic2VydmVyLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgZGV0YWlsID0gbmV3IFJlc2l6ZU9ic2VydmVyRGV0YWlsKHJlc2l6ZU9ic2VydmVyLCBjYWxsYmFjayk7XG4gICAgICAgIG9ic2VydmVyTWFwLnNldChyZXNpemVPYnNlcnZlciwgZGV0YWlsKTtcbiAgICB9O1xuICAgIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5vYnNlcnZlID0gZnVuY3Rpb24gKHJlc2l6ZU9ic2VydmVyLCB0YXJnZXQsIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIGRldGFpbCA9IG9ic2VydmVyTWFwLmdldChyZXNpemVPYnNlcnZlcik7XG4gICAgICAgIHZhciBmaXJzdE9ic2VydmF0aW9uID0gZGV0YWlsLm9ic2VydmF0aW9uVGFyZ2V0cy5sZW5ndGggPT09IDA7XG4gICAgICAgIGlmIChnZXRPYnNlcnZhdGlvbkluZGV4KGRldGFpbC5vYnNlcnZhdGlvblRhcmdldHMsIHRhcmdldCkgPCAwKSB7XG4gICAgICAgICAgICBmaXJzdE9ic2VydmF0aW9uICYmIHJlc2l6ZU9ic2VydmVycy5wdXNoKGRldGFpbCk7XG4gICAgICAgICAgICBkZXRhaWwub2JzZXJ2YXRpb25UYXJnZXRzLnB1c2gobmV3IFJlc2l6ZU9ic2VydmF0aW9uKHRhcmdldCwgb3B0aW9ucyAmJiBvcHRpb25zLmJveCkpO1xuICAgICAgICAgICAgdXBkYXRlQ291bnQoMSk7XG4gICAgICAgICAgICBzY2hlZHVsZXIuc2NoZWR1bGUoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLnVub2JzZXJ2ZSA9IGZ1bmN0aW9uIChyZXNpemVPYnNlcnZlciwgdGFyZ2V0KSB7XG4gICAgICAgIHZhciBkZXRhaWwgPSBvYnNlcnZlck1hcC5nZXQocmVzaXplT2JzZXJ2ZXIpO1xuICAgICAgICB2YXIgaW5kZXggPSBnZXRPYnNlcnZhdGlvbkluZGV4KGRldGFpbC5vYnNlcnZhdGlvblRhcmdldHMsIHRhcmdldCk7XG4gICAgICAgIHZhciBsYXN0T2JzZXJ2YXRpb24gPSBkZXRhaWwub2JzZXJ2YXRpb25UYXJnZXRzLmxlbmd0aCA9PT0gMTtcbiAgICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgICAgIGxhc3RPYnNlcnZhdGlvbiAmJiByZXNpemVPYnNlcnZlcnMuc3BsaWNlKHJlc2l6ZU9ic2VydmVycy5pbmRleE9mKGRldGFpbCksIDEpO1xuICAgICAgICAgICAgZGV0YWlsLm9ic2VydmF0aW9uVGFyZ2V0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgdXBkYXRlQ291bnQoLTEpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIuZGlzY29ubmVjdCA9IGZ1bmN0aW9uIChyZXNpemVPYnNlcnZlcikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgZGV0YWlsID0gb2JzZXJ2ZXJNYXAuZ2V0KHJlc2l6ZU9ic2VydmVyKTtcbiAgICAgICAgZGV0YWlsLm9ic2VydmF0aW9uVGFyZ2V0cy5zbGljZSgpLmZvckVhY2goZnVuY3Rpb24gKG90KSB7IHJldHVybiBfdGhpcy51bm9ic2VydmUocmVzaXplT2JzZXJ2ZXIsIG90LnRhcmdldCk7IH0pO1xuICAgICAgICBkZXRhaWwuYWN0aXZlVGFyZ2V0cy5zcGxpY2UoMCwgZGV0YWlsLmFjdGl2ZVRhcmdldHMubGVuZ3RoKTtcbiAgICB9O1xuICAgIHJldHVybiBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXI7XG59KCkpO1xuZXhwb3J0IHsgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyIH07XG4iLCJpbXBvcnQgeyBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIgfSBmcm9tICcuL1Jlc2l6ZU9ic2VydmVyQ29udHJvbGxlcic7XG5pbXBvcnQgeyBpc0VsZW1lbnQgfSBmcm9tICcuL3V0aWxzL2VsZW1lbnQnO1xudmFyIFJlc2l6ZU9ic2VydmVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBSZXNpemVPYnNlcnZlcihjYWxsYmFjaykge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkZhaWxlZCB0byBjb25zdHJ1Y3QgJ1Jlc2l6ZU9ic2VydmVyJzogMSBhcmd1bWVudCByZXF1aXJlZCwgYnV0IG9ubHkgMCBwcmVzZW50LlwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRmFpbGVkIHRvIGNvbnN0cnVjdCAnUmVzaXplT2JzZXJ2ZXInOiBUaGUgY2FsbGJhY2sgcHJvdmlkZWQgYXMgcGFyYW1ldGVyIDEgaXMgbm90IGEgZnVuY3Rpb24uXCIpO1xuICAgICAgICB9XG4gICAgICAgIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5jb25uZWN0KHRoaXMsIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgUmVzaXplT2JzZXJ2ZXIucHJvdG90eXBlLm9ic2VydmUgPSBmdW5jdGlvbiAodGFyZ2V0LCBvcHRpb25zKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRmFpbGVkIHRvIGV4ZWN1dGUgJ29ic2VydmUnIG9uICdSZXNpemVPYnNlcnZlcic6IDEgYXJndW1lbnQgcmVxdWlyZWQsIGJ1dCBvbmx5IDAgcHJlc2VudC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc0VsZW1lbnQodGFyZ2V0KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkZhaWxlZCB0byBleGVjdXRlICdvYnNlcnZlJyBvbiAnUmVzaXplT2JzZXJ2ZXInOiBwYXJhbWV0ZXIgMSBpcyBub3Qgb2YgdHlwZSAnRWxlbWVudFwiKTtcbiAgICAgICAgfVxuICAgICAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIub2JzZXJ2ZSh0aGlzLCB0YXJnZXQsIG9wdGlvbnMpO1xuICAgIH07XG4gICAgUmVzaXplT2JzZXJ2ZXIucHJvdG90eXBlLnVub2JzZXJ2ZSA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJGYWlsZWQgdG8gZXhlY3V0ZSAndW5vYnNlcnZlJyBvbiAnUmVzaXplT2JzZXJ2ZXInOiAxIGFyZ3VtZW50IHJlcXVpcmVkLCBidXQgb25seSAwIHByZXNlbnQuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNFbGVtZW50KHRhcmdldCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJGYWlsZWQgdG8gZXhlY3V0ZSAndW5vYnNlcnZlJyBvbiAnUmVzaXplT2JzZXJ2ZXInOiBwYXJhbWV0ZXIgMSBpcyBub3Qgb2YgdHlwZSAnRWxlbWVudFwiKTtcbiAgICAgICAgfVxuICAgICAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIudW5vYnNlcnZlKHRoaXMsIHRhcmdldCk7XG4gICAgfTtcbiAgICBSZXNpemVPYnNlcnZlci5wcm90b3R5cGUuZGlzY29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLmRpc2Nvbm5lY3QodGhpcyk7XG4gICAgfTtcbiAgICBSZXNpemVPYnNlcnZlci50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICdmdW5jdGlvbiBSZXNpemVPYnNlcnZlciAoKSB7IFtwb2x5ZmlsbCBjb2RlXSB9JztcbiAgICB9O1xuICAgIHJldHVybiBSZXNpemVPYnNlcnZlcjtcbn0oKSk7XG5leHBvcnQgeyBSZXNpemVPYnNlcnZlciB9O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCwgaW1tZWRpYXRlKSB7XG4gIGxldCB0aW1lb3V0XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGV4ZWN1dGVkRnVuY3Rpb24oKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXNcbiAgICBjb25zdCBhcmdzID0gYXJndW1lbnRzXG5cbiAgICBjb25zdCBsYXRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgdGltZW91dCA9IG51bGxcbiAgICAgIGlmICghaW1tZWRpYXRlKSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpXG4gICAgfVxuXG4gICAgY29uc3QgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dFxuXG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpXG5cbiAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdClcblxuICAgIGlmIChjYWxsTm93KSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpXG4gIH1cbn1cbiIsImltcG9ydCB7IFJlc2l6ZU9ic2VydmVyIGFzIFBvbHlmaWxsIH0gZnJvbSAnQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXInXG5jb25zdCBSZXNpemVPYnNlcnZlciA9IHdpbmRvdy5SZXNpemVPYnNlcnZlciB8fCBQb2x5ZmlsbFxuaW1wb3J0IGRlYm91bmNlIGZyb20gJy4vdXRpbHMvZGVib3VuY2UnXG5cbmltcG9ydCByZW1vdmVJdGVtIGZyb20gJy4vdXRpbHMvcmVtb3ZlLWFycmF5LWl0ZW0nXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnRFbWl0dGVyJ1xuaW1wb3J0IHtcbiAgZ2V0RGlzdGFuY2UsXG4gIGluZGV4T2ZOZWFyZXN0UG9pbnRcbn0gZnJvbSAnLi9nZW9tZXRyeS9kaXN0YW5jZXMnXG5cbmltcG9ydCBEcmFnZ2FibGUgZnJvbSAnLi9kcmFnZ2FibGUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3QgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvcihkcmFnZ2FibGVzLCBvcHRpb25zPXt9KSB7XG4gICAgc3VwZXIob3B0aW9ucylcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHRpbWVFbmQ6IDIwMCxcbiAgICAgIHRpbWVFeGNhbmdlOiA0MDAsXG4gICAgICByYWRpdXM6IDMwXG4gICAgfSwgb3B0aW9ucylcblxuICAgIHRoaXMuY29udGFpbmVyID0gb3B0aW9ucy5jb250YWluZXJcbiAgICB0aGlzLmRyYWdnYWJsZXMgPSBkcmFnZ2FibGVzXG4gICAgdGhpcy5jaGFuZ2VkRHVyaW5nSXRlcmF0aW9uID0gZmFsc2VcblxuICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoZGVib3VuY2UodGhpcy5vblJlc2l6ZS5iaW5kKHRoaXMpLCAxMDApKVxuXG4gICAgaWYgKHRoaXMuY29udGFpbmVyKSB7XG4gICAgICB0aGlzLnJlc2l6ZU9ic2VydmVyLm9ic2VydmUodGhpcy5jb250YWluZXIpXG4gICAgfVxuXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIG9uUmVzaXplKCkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMucmVvcmRlck9uQ2hhbmdlKSB0aGlzLnJlc2V0KClcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZCkgPT4gZC5zdGFydFBvc2l0aW9uaW5nKCkpXG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuX2VuYWJsZSA9IHRydWVcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB0aGlzLmluaXREcmFnZ2FibGUoZHJhZ2dhYmxlKSlcbiAgfVxuXG4gIGluaXREcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgZHJhZ2dhYmxlLmVuYWJsZSA9IHRoaXMuX2VuYWJsZVxuICAgIGRyYWdnYWJsZS5vbignZHJhZzptb3ZlJywgKCkgPT4gdGhpcy5vbk1vdmUoZHJhZ2dhYmxlKSlcbiAgICBkcmFnZ2FibGUuZHJhZ0VuZEFjdGlvbiA9ICgpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5waW5Qb3NpdGlvbihkcmFnZ2FibGUucGlubmVkUG9zaXRpb24sIHRoaXMub3B0aW9ucy50aW1lRW5kKVxuICAgICAgdGhpcy5vbkVuZChkcmFnZ2FibGUpXG4gICAgfVxuICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZShkcmFnZ2FibGUuZWxlbWVudClcbiAgfVxuXG4gIHJlbGVhc2VEcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgdGhpcy5yZXNpemVPYnNlcnZlci51bm9ic2VydmUoZHJhZ2dhYmxlLmVsZW1lbnQpXG4gICAgZHJhZ2dhYmxlLnJlc2V0T24oJ2RyYWc6ZW5kJylcbiAgICBkcmFnZ2FibGUucmVzZXRPbignZHJhZzptb3ZlJylcbiAgICByZW1vdmVJdGVtKHRoaXMuZHJhZ2dhYmxlcywgZHJhZ2dhYmxlKVxuICB9XG5cbiAgb25Nb3ZlKGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IHNvcnRlZERyYWdnYWJsZXMgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuICAgIGNvbnN0IHBpbm5lZFBvc2l0aW9ucyA9IHNvcnRlZERyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbilcblxuICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IHNvcnRlZERyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpXG4gICAgY29uc3QgdGFyZ2V0SW5kZXggPSBpbmRleE9mTmVhcmVzdFBvaW50KHBpbm5lZFBvc2l0aW9ucywgZHJhZ2dhYmxlLnBvc2l0aW9uLCB0aGlzLm9wdGlvbnMucmFkaXVzLCB0aGlzLmRpc3RhbmNlRnVuYylcblxuICAgIGlmICh0YXJnZXRJbmRleCAhPT0gLTEgJiYgY3VycmVudEluZGV4ICE9PSB0YXJnZXRJbmRleCkge1xuICAgICAgaWYgKHRhcmdldEluZGV4IDwgY3VycmVudEluZGV4KSB7XG4gICAgICAgIGZvciAobGV0IGk9dGFyZ2V0SW5kZXg7IGk8Y3VycmVudEluZGV4OyBpKyspIHtcbiAgICAgICAgICBzb3J0ZWREcmFnZ2FibGVzW2ldLnBpblBvc2l0aW9uKHBpbm5lZFBvc2l0aW9uc1tpKzFdLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAobGV0IGk9Y3VycmVudEluZGV4OyBpPHRhcmdldEluZGV4OyBpKyspIHtcbiAgICAgICAgICBzb3J0ZWREcmFnZ2FibGVzW2krMV0ucGluUG9zaXRpb24ocGlubmVkUG9zaXRpb25zW2ldLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGRyYWdnYWJsZS5uYXRpdmVEcmFnQW5kRHJvcCkge1xuICAgICAgICBkcmFnZ2FibGUucGluUG9zaXRpb24ocGlubmVkUG9zaXRpb25zW3RhcmdldEluZGV4XSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbiA9IHBpbm5lZFBvc2l0aW9uc1t0YXJnZXRJbmRleF1cbiAgICAgIH1cblxuICAgICAgdGhpcy5jaGFuZ2VkRHVyaW5nSXRlcmF0aW9uID0gdHJ1ZVxuICAgIH1cbiAgfVxuXG4gIG9uRW5kKGRyYWdnYWJsZSkge1xuICAgIGlmICh0aGlzLmNoYW5nZWREdXJpbmdJdGVyYXRpb24pIHtcbiAgICAgIHRoaXMuZW1pdCgnbGlzdDpjaGFuZ2UnKVxuICAgICAgdGhpcy5jaGFuZ2VkRHVyaW5nSXRlcmF0aW9uID0gZmFsc2VcblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZW9yZGVyT25DaGFuZ2UgJiYgdGhpcy5vcHRpb25zLmNvbnRhaW5lcikge1xuICAgICAgICB0aGlzLnJlb3JkZXJFbGVtZW50cyhkcmFnZ2FibGUpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVvcmRlckVsZW1lbnRzKG1vdmVkRHJhZ2dhYmxlKSB7XG4gICAgY29uc3Qgc29ydGVkRHJhZ2dhYmxlcyA9IHRoaXMuZ2V0U29ydGVkRHJhZ2dhYmxlcygpXG4gICAgY29uc3QgaW5kZXggPSBzb3J0ZWREcmFnZ2FibGVzLmluZGV4T2YobW92ZWREcmFnZ2FibGUpXG4gICAgY29uc3QgbmV4dCA9IHNvcnRlZERyYWdnYWJsZXNbaW5kZXggKyAxXVxuXG4gICAgdGhpcy5yZXNldCgpXG5cbiAgICBpZiAobmV4dCkge1xuICAgICAgdGhpcy5jb250YWluZXIuaW5zZXJ0QmVmb3JlKG1vdmVkRHJhZ2dhYmxlLmVsZW1lbnQsIG5leHQuZWxlbWVudClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQobW92ZWREcmFnZ2FibGUuZWxlbWVudClcbiAgICB9XG5cbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZCkgPT4gZC5zdGFydFBvc2l0aW9uaW5nKCkpXG4gICAgdGhpcy5lbWl0KCdsaXN0OnJlb3JkZXJlZCcpXG4gIH1cblxuICBnZXRDdXJyZW50UGlubmVkUG9zaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbi5jbG9uZSgpKVxuICB9XG5cbiAgZ2V0U29ydGVkRHJhZ2dhYmxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5kcmFnZ2FibGVzLnNvcnQodGhpcy5zb3J0aW5nLmJpbmQodGhpcykpXG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucmVzZXRQb3NpdGlvblRvSW5pdGlhbCgpKVxuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucmVmcmVzaCgpKVxuICB9XG5cbiAgYWRkKGRyYWdnYWJsZXMpIHtcbiAgICBpZiAoIShkcmFnZ2FibGVzIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgICBkcmFnZ2FibGVzID0gW2RyYWdnYWJsZXNdXG4gICAgfVxuICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB0aGlzLmluaXREcmFnZ2FibGUoZHJhZ2dhYmxlKSlcbiAgICB0aGlzLmRyYWdnYWJsZXMgPSB0aGlzLmRyYWdnYWJsZXMuY29uY2F0KGRyYWdnYWJsZXMpXG4gIH1cblxuICByZW1vdmUoZHJhZ2dhYmxlcykge1xuICAgIGNvbnN0IGluaXRpYWxQb3NpdGlvbnMgPSB0aGlzLmRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5pbml0aWFsUG9zaXRpb24pXG4gICAgY29uc3QgbGlzdCA9IFtdXG4gICAgY29uc3Qgc29ydGVkRHJhZ2dhYmxlcyA9IHRoaXMuZ2V0U29ydGVkRHJhZ2dhYmxlcygpXG5cbiAgICBpZiAoIShkcmFnZ2FibGVzIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgICBkcmFnZ2FibGVzID0gW2RyYWdnYWJsZXNdXG4gICAgfVxuXG4gICAgZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHRoaXMucmVsZWFzZURyYWdnYWJsZShkcmFnZ2FibGUpKVxuXG4gICAgbGV0IGogPSAwXG4gICAgc29ydGVkRHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGlmICh0aGlzLmRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMSkge1xuICAgICAgICBpZiAoZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uICE9PSBpbml0aWFsUG9zaXRpb25zW2pdKSB7XG4gICAgICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKGluaXRpYWxQb3NpdGlvbnNbal0sIHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSlcbiAgICAgICAgfVxuICAgICAgICBkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uID0gaW5pdGlhbFBvc2l0aW9uc1tqXVxuICAgICAgICBqKytcbiAgICAgICAgbGlzdC5wdXNoKGRyYWdnYWJsZSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGxpc3RcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMucmVtb3ZlKHRoaXMuZHJhZ2dhYmxlcy5zbGljZSgpKVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUuZGVzdHJveSgpKVxuICAgIGlmICh0aGlzLmNvbnRhaW5lcikge1xuICAgICAgdGhpcy5yZXNpemVPYnNlcnZlci51bm9ic2VydmUodGhpcy5jb250YWluZXIpXG4gICAgfVxuICB9XG5cbiAgc29ydGluZyhkcmFnZ2FibGVBLCBkcmFnZ2FibGVCKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5zb3J0aW5nKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLnNvcnRpbmcoZHJhZ2dhYmxlQSwgZHJhZ2dhYmxlQilcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGRyYWdnYWJsZUEucGlubmVkUG9zaXRpb24ueSA8IGRyYWdnYWJsZUIucGlubmVkUG9zaXRpb24ueSkgcmV0dXJuIC0xXG4gICAgICBpZiAoZHJhZ2dhYmxlQS5waW5uZWRQb3NpdGlvbi55ID4gZHJhZ2dhYmxlQi5waW5uZWRQb3NpdGlvbi55KSByZXR1cm4gMVxuICAgICAgaWYgKGRyYWdnYWJsZUEucGlubmVkUG9zaXRpb24ueCA8IGRyYWdnYWJsZUIucGlubmVkUG9zaXRpb24ueCkgcmV0dXJuIC0xXG4gICAgICBpZiAoZHJhZ2dhYmxlQS5waW5uZWRQb3NpdGlvbi54ID4gZHJhZ2dhYmxlQi5waW5uZWRQb3NpdGlvbi54KSByZXR1cm4gMVxuICAgICAgcmV0dXJuIDBcbiAgICB9XG4gIH1cblxuICBnZXQgZGlzdGFuY2VGdW5jKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZ2V0RGlzdGFuY2UgfHwgZ2V0RGlzdGFuY2VcbiAgfVxuXG4gIGdldCBwb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q3VycmVudFBpbm5lZFBvc2l0aW9ucygpXG4gIH1cblxuICBzZXQgcG9zaXRpb25zKHBvc2l0aW9ucykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSAnd3JvbmcgYXJyYXkgbGVuZ3RoJ1xuICAgIGlmIChwb3NpdGlvbnMubGVuZ3RoID09PSB0aGlzLmRyYWdnYWJsZXMubGVuZ3RoKSB7XG4gICAgICBwb3NpdGlvbnMuZm9yRWFjaCgocG9pbnQsIGkpID0+IHtcbiAgICAgICAgdGhpcy5kcmFnZ2FibGVzW2ldLnBpblBvc2l0aW9uKHBvaW50KVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbWVzc2FnZVxuICAgIH1cbiAgfVxuXG4gIGdldCBlbmFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZVxuICB9XG5cbiAgc2V0IGVuYWJsZShlbmFibGUpIHtcbiAgICB0aGlzLl9lbmFibGUgPSBlbmFibGVcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUuZW5hYmxlID0gZW5hYmxlXG4gICAgfSlcbiAgfVxuXG4gIHN0YXRpYyBmYWN0b3J5KGNvbnRhaW5lckVsZW1lbnQsIGVsZW1lbnRzLCBvcHRpb25zPXt9KSB7XG4gICAgY29uc3QgZHJhZ2dhYmxlcyA9IEFycmF5LmZyb20oZWxlbWVudHMpLm1hcCgoZWxlbWVudCkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBEcmFnZ2FibGUoZWxlbWVudCwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyRWxlbWVudFxuICAgICAgfSwgb3B0aW9ucy5kcmFnZ2FibGUgfHwge30pKVxuICAgIH0pXG5cbiAgICByZXR1cm4gbmV3IExpc3QoZHJhZ2dhYmxlcywgT2JqZWN0LmFzc2lnbih7XG4gICAgICBjb250YWluZXI6IGNvbnRhaW5lckVsZW1lbnRcbiAgICB9LCBvcHRpb25zLmxpc3QgfHwge30pKVxuICB9XG59XG4iLCJpbXBvcnQgTGlzdCBmcm9tICcuL2xpc3QnXG5pbXBvcnQgeyBpbmRleE9mTmVhcmVzdFBvaW50LCBnZXRZRGlmZmVyZW5jZSB9IGZyb20gJy4vZ2VvbWV0cnkvZGlzdGFuY2VzJ1xuaW1wb3J0IFBvaW50IGZyb20gJy4vZ2VvbWV0cnkvcG9pbnQnXG5cbmltcG9ydCBEcmFnZ2FibGUgZnJvbSAnLi9kcmFnZ2FibGUnXG5cbmNvbnN0IGFycmF5TW92ZSA9IChhcnJheSwgZnJvbSwgdG8pID0+IHtcbiAgYXJyYXkuc3BsaWNlKHRvIDwgMCA/IGFycmF5Lmxlbmd0aCArIHRvIDogdG8sIDAsIGFycmF5LnNwbGljZShmcm9tLCAxKVswXSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnViYmxpbmdMaXN0IGV4dGVuZHMgTGlzdCB7XG4gIGF1dG9EZXRlY3RWZXJ0aWNhbEdhcCgpIHtcbiAgICBpZiAoIXRoaXMuX3ZlcnRpY2FsR2FwICYmICF0aGlzLm9wdGlvbnMudmVydGljYWxHYXAgJiYgdGhpcy5kcmFnZ2FibGVzLmxlbmd0aCA+PSAyKSB7XG4gICAgICBjb25zdCBzb3J0ZWQgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuICAgICAgdGhpcy5fdmVydGljYWxHYXAgPSBzb3J0ZWRbMV0ucGlubmVkUG9zaXRpb24ueSAtIHNvcnRlZFswXS5waW5uZWRQb3NpdGlvbi55IC0gc29ydGVkWzBdLmdldFNpemUoKS55XG4gICAgfVxuICB9XG5cbiAgYXV0b0RldGVjdFN0YXJ0UG9zaXRpb24oKSB7XG4gICAgaWYgKHRoaXMuZHJhZ2dhYmxlcy5sZW5ndGggPj0gMSAmJiAhdGhpcy5zdGFydFBvc2l0aW9uKSB7XG4gICAgICB0aGlzLnN0YXJ0UG9zaXRpb24gPSB0aGlzLmRyYWdnYWJsZXNbMF0ucGlubmVkUG9zaXRpb25cbiAgICB9XG4gIH1cblxuICBpbml0RHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIHN1cGVyLmluaXREcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICAgIGRyYWdnYWJsZS5vbignZHJhZzpzdGFydCcsICgpID0+IHRoaXMub25EcmFnU3RhcnQoZHJhZ2dhYmxlKSlcbiAgfVxuXG4gIG9uRHJhZ1N0YXJ0KGRyYWdnYWJsZSkge1xuICAgIHRoaXMuYXV0b0RldGVjdFZlcnRpY2FsR2FwKClcbiAgICB0aGlzLmF1dG9EZXRlY3RTdGFydFBvc2l0aW9uKClcbiAgICB0aGlzLmNhY2hlZFNvcnRlZERyYWdnYWJsZXMgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuICAgIHRoaXMuaW5kZXhPZkFjdGl2ZURyYWdnYWJsZSA9IHRoaXMuY2FjaGVkU29ydGVkRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSlcbiAgfVxuXG4gIG9uTW92ZShkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBwcmV2RHJhZ2dhYmxlID0gdGhpcy5jYWNoZWRTb3J0ZWREcmFnZ2FibGVzW3RoaXMuaW5kZXhPZkFjdGl2ZURyYWdnYWJsZSAtIDFdXG4gICAgY29uc3QgbmV4dERyYWdnYWJsZSA9IHRoaXMuY2FjaGVkU29ydGVkRHJhZ2dhYmxlc1t0aGlzLmluZGV4T2ZBY3RpdmVEcmFnZ2FibGUgKyAxXVxuICAgIGNvbnN0IGN1cnJlbnRQb3NpdGlvbiA9IGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvblxuXG4gICAgbGV0IGN1cnJlbnRPcmRlclxuICAgIGxldCB0YXJnZXRJbmRleFxuXG4gICAgaWYoZHJhZ2dhYmxlLnVwRGlyZWN0aW9uICYmIHByZXZEcmFnZ2FibGUpIHtcbiAgICAgIGN1cnJlbnRPcmRlciA9IFtwcmV2RHJhZ2dhYmxlLCBkcmFnZ2FibGVdLm1hcCgoZCkgPT4gZC5waW5uZWRQb3NpdGlvbilcbiAgICAgIHRhcmdldEluZGV4ID0gaW5kZXhPZk5lYXJlc3RQb2ludChjdXJyZW50T3JkZXIsIGRyYWdnYWJsZS5wb3NpdGlvbiwgMTAwMDAsIHRoaXMuZGlzdGFuY2VGdW5jKVxuXG4gICAgICBpZiAodGFyZ2V0SW5kZXggPT09IDApIHtcbiAgICAgICAgaWYoZHJhZ2dhYmxlLnNob3VsZFVzZU5hdGl2ZURyYWdBbmREcm9wKCkpIHtcbiAgICAgICAgICBkcmFnZ2FibGUucGluUG9zaXRpb24ocHJldkRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24gPSBwcmV2RHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uLmNsb25lKClcbiAgICAgICAgfVxuICAgICAgICBwcmV2RHJhZ2dhYmxlLnBpblBvc2l0aW9uKG5ldyBQb2ludChcbiAgICAgICAgICBjdXJyZW50UG9zaXRpb24ueCxcbiAgICAgICAgICBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24ueSArIGRyYWdnYWJsZS5nZXRTaXplKCkueSArIHRoaXMudmVydGljYWxHYXBcbiAgICAgICAgKSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICBhcnJheU1vdmUodGhpcy5jYWNoZWRTb3J0ZWREcmFnZ2FibGVzLCB0aGlzLmluZGV4T2ZBY3RpdmVEcmFnZ2FibGUtLSwgdGhpcy5pbmRleE9mQWN0aXZlRHJhZ2dhYmxlKVxuICAgICAgICB0aGlzLm9uTW92ZShkcmFnZ2FibGUpXG4gICAgICAgIHRoaXMuY2hhbmdlZER1cmluZ0l0ZXJhdGlvbiA9IHRydWVcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYoZHJhZ2dhYmxlLmRvd25EaXJlY3Rpb24gJiYgbmV4dERyYWdnYWJsZSkge1xuICAgICAgY3VycmVudE9yZGVyID0gW2RyYWdnYWJsZSwgbmV4dERyYWdnYWJsZV0ubWFwKChkKSA9PiBkLnBpbm5lZFBvc2l0aW9uKVxuICAgICAgdGFyZ2V0SW5kZXggPSBpbmRleE9mTmVhcmVzdFBvaW50KGN1cnJlbnRPcmRlciwgZHJhZ2dhYmxlLnBvc2l0aW9uLCAxMDAwMCwgdGhpcy5kaXN0YW5jZUZ1bmMpXG5cbiAgICAgIGlmKHRhcmdldEluZGV4ID09PSAxKSB7XG4gICAgICAgIG5leHREcmFnZ2FibGUucGluUG9zaXRpb24oZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICAgIGNvbnN0IGRyYWdnYWJsZU5ld1Bvc2l0aW9uID0gbmV3IFBvaW50KFxuICAgICAgICAgIG5leHREcmFnZ2FibGUucGlubmVkUG9zaXRpb24ueCxcbiAgICAgICAgICBuZXh0RHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uLnkgKyBuZXh0RHJhZ2dhYmxlLmdldFNpemUoKS55ICsgdGhpcy52ZXJ0aWNhbEdhcFxuICAgICAgICApXG4gICAgICAgIGlmKGRyYWdnYWJsZS5zaG91bGRVc2VOYXRpdmVEcmFnQW5kRHJvcCgpKSB7XG4gICAgICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKGRyYWdnYWJsZU5ld1Bvc2l0aW9uKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbiA9IGRyYWdnYWJsZU5ld1Bvc2l0aW9uXG4gICAgICAgIH1cbiAgICAgICAgYXJyYXlNb3ZlKHRoaXMuY2FjaGVkU29ydGVkRHJhZ2dhYmxlcywgdGhpcy5pbmRleE9mQWN0aXZlRHJhZ2dhYmxlKyssIHRoaXMuaW5kZXhPZkFjdGl2ZURyYWdnYWJsZSlcbiAgICAgICAgdGhpcy5vbk1vdmUoZHJhZ2dhYmxlKVxuICAgICAgICB0aGlzLmNoYW5nZWREdXJpbmdJdGVyYXRpb24gPSB0cnVlXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYnViYmxpbmcoc29ydGVkRHJhZ2dhYmxlcywgY3VycmVudERyYWdnYWJsZSkge1xuICAgIGNvbnN0IGN1cnJlbnRQb3NpdGlvbiA9IHRoaXMuc3RhcnRQb3NpdGlvbi5jbG9uZSgpXG4gICAgc29ydGVkRHJhZ2dhYmxlcyB8fD0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcblxuICAgIHNvcnRlZERyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBpZiAoIWRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbi5jb21wYXJlKGN1cnJlbnRQb3NpdGlvbikpIHtcbiAgICAgICAgaWYgKGRyYWdnYWJsZSA9PT0gY3VycmVudERyYWdnYWJsZSAmJiAhY3VycmVudERyYWdnYWJsZS5zaG91bGRVc2VOYXRpdmVEcmFnQW5kRHJvcCgpKSB7XG4gICAgICAgICAgZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uID0gY3VycmVudFBvc2l0aW9uLmNsb25lKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkcmFnZ2FibGUucGluUG9zaXRpb24oY3VycmVudFBvc2l0aW9uLCAoZHJhZ2dhYmxlID09PSBjdXJyZW50RHJhZ2dhYmxlKSA/IDAgOiB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY3VycmVudFBvc2l0aW9uLnkgPSBjdXJyZW50UG9zaXRpb24ueSArIGRyYWdnYWJsZS5nZXRTaXplKCkueSArIHRoaXMudmVydGljYWxHYXBcbiAgICB9KVxuICB9XG5cbiAgcmVtb3ZlKGRyYWdnYWJsZXMpIHtcbiAgICBpZiAoIShkcmFnZ2FibGVzIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgICBkcmFnZ2FibGVzID0gW2RyYWdnYWJsZXNdXG4gICAgfVxuXG4gICAgZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHRoaXMucmVsZWFzZURyYWdnYWJsZShkcmFnZ2FibGUpKVxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IHRoaXMuZHJhZ2dhYmxlcy5maWx0ZXIoKGQpID0+ICFkcmFnZ2FibGVzLmluY2x1ZGVzKGQpKVxuXG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGQpID0+IGQuc3RhcnRQb3NpdGlvbmluZygpKVxuXG4gICAgaWYodGhpcy5kcmFnZ2FibGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuYXV0b0RldGVjdFZlcnRpY2FsR2FwKClcbiAgICAgIHRoaXMuYXV0b0RldGVjdFN0YXJ0UG9zaXRpb24oKVxuICAgICAgdGhpcy5idWJibGluZygpXG4gICAgfVxuICB9XG5cbiAgZ2V0IGRpc3RhbmNlRnVuYygpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmdldERpc3RhbmNlIHx8IGdldFlEaWZmZXJlbmNlXG4gIH1cblxuICBnZXQgdmVydGljYWxHYXAoKSB7XG4gICAgaWYodGhpcy5vcHRpb25zLnZlcnRpY2FsR2FwKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLnZlcnRpY2FsR2FwXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYXV0b0RldGVjdFZlcnRpY2FsR2FwKClcbiAgICAgIHJldHVybiB0aGlzLl92ZXJ0aWNhbEdhcCB8fCAwXG4gICAgfVxuICB9XG5cbiAgc2V0IHZlcnRpY2FsR2FwKGdhcFZhbHVlKSB7XG4gICAgdGhpcy5vcHRpb25zLnZlcnRpY2FsR2FwID0gZ2FwVmFsdWVcbiAgfVxuXG4gIHN0YXRpYyBmYWN0b3J5KGNvbnRhaW5lckVsZW1lbnQsIGVsZW1lbnRzLCBvcHRpb25zPXt9KSB7XG4gICAgY29uc3QgZHJhZ2dhYmxlcyA9IEFycmF5LmZyb20oZWxlbWVudHMpLm1hcCgoZWxlbWVudCkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBEcmFnZ2FibGUoZWxlbWVudCwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyRWxlbWVudFxuICAgICAgfSwgb3B0aW9ucy5kcmFnZ2FibGUgfHwge30pKVxuICAgIH0pXG5cbiAgICByZXR1cm4gbmV3IEJ1YmJsaW5nTGlzdChkcmFnZ2FibGVzLCBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyRWxlbWVudFxuICAgIH0sIG9wdGlvbnMubGlzdCB8fCB7fSkpXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJQb2ludCIsIngiLCJ5IiwicCIsImsiLCJlbGVtZW50IiwicGFyZW50IiwicGFyZW50Tm9kZSIsImVsZW1lbnRSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicGFyZW50UmVjdCIsImxlZnQiLCJ0b3AiLCJ3aWR0aCIsImhlaWdodCIsIlJlY3RhbmdsZSIsInBvc2l0aW9uIiwic2l6ZSIsImFkZCIsIm11bHQiLCJyZWN0IiwiTWF0aCIsIm1pbiIsIm1heCIsInN1YiIsInJlY3RhbmdsZSIsImluY2x1ZGVQb2ludCIsImdldFAzIiwiYXhpcyIsInNlbEF4aXMiLCJjcm9zc1JlY3RhbmdsZSIsImFuZCIsInRoaXNDZW50ZXIiLCJnZXRDZW50ZXIiLCJyZWN0Q2VudGVyIiwic2lnbiIsIm9mZnNldCIsImVsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic3R5bGUiLCJpc0NvbnNpZGVyVHJhbnNsYXRlIiwiZWxlbWVudE9mZnNldCIsImVsZW1lbnRTaXplIiwiZ2V0RGVmYXVsdENvbnRhaW5lciIsImNvbnRhaW5lciIsIndpbmRvdyIsImdldENvbXB1dGVkU3R5bGUiLCJ0YWdOYW1lIiwiRXZlbnRFbWl0dGVyIiwib3B0aW9ucyIsImV2ZW50cyIsIm9uIiwiT2JqZWN0IiwiZW50cmllcyIsImV2ZW50TmFtZSIsImZuIiwiaW50ZXJydXB0ZWQiLCJhcmdzIiwic2xpY2UiLCJjYWxsIiwiYXJndW1lbnRzIiwiZnVuYyIsInB1c2giLCJ1bnNoaWZ0IiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwiZ2V0RGlzdGFuY2UiLCJwMSIsInAyIiwiZHgiLCJkeSIsInNxcnQiLCJnZXRYRGlmZmVyZW5jZSIsImFicyIsImdldFlEaWZmZXJlbmNlIiwidHJhbnNmb3JtZWRTcGFjZURpc3RhbmNlRmFjdG9yeSIsInBvdyIsImluZGV4T2ZOZWFyZXN0UG9pbnQiLCJhcnIiLCJ2YWwiLCJyYWRpdXMiLCJnZXREaXN0YW5jZUZ1bmMiLCJpIiwidGVtcCIsImxlbmd0aCIsImRpcmVjdENyb3NzaW5nIiwiTDFQMSIsIkwxUDIiLCJMMlAxIiwiTDJQMiIsImsxIiwiazIiLCJiMSIsImIyIiwiYm91bmRUb0xpbmUiLCJBIiwiQiIsIlAiLCJBUCIsIkFCIiwiYWIyIiwiYXBfYWIiLCJ0IiwiZ2V0UG9pbnRPbkxpbmVCeUxlbmdodCIsIkxQMSIsIkxQMiIsImxlbmdodCIsInBlcmNlbnQiLCJhZGRQb2ludFRvQm91bmRQb2ludHMiLCJib3VuZHBvaW50cyIsInBvaW50IiwiaXNSaWdodCIsInJlc3VsdCIsImZpbHRlciIsImJQb2ludCIsImdldEFuZ2xlRGlmZiIsImFscGhhIiwiYmV0YSIsIm1pbkFuZ2xlIiwibWF4QW5nbGUiLCJQSSIsImdldEFuZ2xlIiwiZGlmZiIsIm5vcm1hbGl6ZUFuZ2xlIiwiYXRhbjIiLCJib3VuZEFuZ2xlIiwiZG1pbiIsImRtYXgiLCJnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0iLCJhbmdsZSIsImNlbnRlciIsImNvcyIsInNpbiIsIkJvdW5kIiwiX3NpemUiLCJpbnN0YW5jZSIsImJvdW5kIiwiYmluZCIsIkJvdW5kVG9SZWN0YW5nbGUiLCJjYWxjUG9pbnQiLCJjbG9uZSIsInJlY3RQMiIsIkJvdW5kVG9FbGVtZW50IiwiZnJvbUVsZW1lbnQiLCJCb3VuZFRvTGluZVgiLCJzdGFydFkiLCJlbmRZIiwiQm91bmRUb0xpbmVZIiwic3RhcnRYIiwiZW5kWCIsIkJvdW5kVG9MaW5lIiwic3RhcnRQb2ludCIsImVuZFBvaW50Iiwic29tZUsiLCJjb3NCZXRhIiwic2luQmV0YSIsInBvaW50MiIsIm5ld0VuZFBvaW50IiwicG9pbnRDcm9zc2luZyIsIkJvdW5kVG9DaXJjbGUiLCJCb3VuZFRvQXJjIiwic3RhcnRBbmdsZSIsImVuZEFuZ2xlIiwiX3N0YXJ0QW5nbGUiLCJfZW5kQW5nbGUiLCJhcnJheSIsInJhbmdlIiwic3RhcnQiLCJzdG9wIiwic3RlcCIsIkJhc2ljU3RyYXRlZ3kiLCJOb3RDcm9zc2luZ1N0cmF0ZWd5IiwicmVjdGFuZ2xlTGlzdCIsImluZGV4ZXNPZk5ld3MiLCJzdGF0aWNSZWN0YW5nbGVJbmRleGVzIiwicmVkdWNlIiwiaW5kZXhlcyIsIl9yZWN0IiwiZm9yRWFjaCIsInJlbW92YWJsZSIsImluZGV4T2ZTdGF0aWMiLCJzdGF0aWNSZWN0IiwibW92ZVRvQm91bmQiLCJzb21lIiwiYm91bmRSZWN0IiwiZ2V0U3F1YXJlIiwib2RsRHJhZ2dhYmxlc0xpc3QiLCJuZXdEcmFnZ2FibGVzIiwiaW5kZXhPZk5ld3MiLCJkcmFnZ2FibGVzIiwiY29uY2F0IiwiZHJhZ2dhYmxlIiwiRmxvYXRMZWZ0U3RyYXRlZ3kiLCJhc3NpZ24iLCJwYWRkaW5nVG9wTGVmdCIsInBhZGRpbmdCb3R0b21SaWdodCIsInlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyIsImdldFBvc2l0aW9uIiwiX2luZGV4ZXNPZk5ld3MiLCJnZXRQMiIsImJvdW5kYXJ5UG9pbnRzIiwicmVjdEluZGV4IiwiaXNWYWxpZCIsIm5ld0xpc3QiLCJsaXN0T2xkUG9zaXRpb24iLCJtYXAiLCJuZXdEcmFnZ2FibGUiLCJGbG9hdFJpZ2h0U3RyYXRlZ3kiLCJwYWRkaW5nVG9wUmlnaHQiLCJwYWRkaW5nQm90dG9tTGVmdCIsInBhZGRpbmdCb3R0b21OZWdMZWZ0IiwiZ2V0UDQiLCJhZGRUb0RlZmF1bHRTY29wZSIsInRhcmdldCIsImRlZmF1bHRTY29wZSIsImFkZFRhcmdldCIsIlRhcmdldCIsInRpbWVFbmQiLCJ0aW1lRXhjYW5nZSIsInBvc2l0aW9uaW5nU3RyYXRlZ3kiLCJzdHJhdGVneSIsImdldFJlY3RhbmdsZSIsInRhcmdldHMiLCJlbWl0dGVyIiwiZW1pdCIsInN0YXJ0Qm91bmRpbmciLCJpbml0IiwiYm91bmRpbmciLCJpbmRleGVzT2ZOZXciLCJwb3NpdGlvbmluZyIsIm9sZERyYWdnYWJsZXMiLCJzb3J0aW5nIiwicmVjdGFuZ2xlcyIsImlubmVyRHJhZ2dhYmxlcyIsInNldFBvc2l0aW9uIiwiY2F0Y2hEcmFnZ2FibGUiLCJ0YXJnZXRSZWN0YW5nbGUiLCJkcmFnZ2FibGVTcXVhcmUiLCJzY29wZXMiLCJzY29wZSIsInJlbW92ZUl0ZW0iLCJuZXdEcmFnZ2FibGVzSW5kZXgiLCJnZXRTaXplIiwiYWRkUmVtb3ZlT25Nb3ZlIiwidGltZSIsIm1vdmUiLCJpbml0aWFsUG9zaXRpb24iLCJwdXNoSW5uZXJEcmFnZ2FibGUiLCJyZW1vdmVIYW5kbGVyIiwicmVtb3ZlIiwidW5zdWJzY3JpYmUiLCJfY29udGFpbmVyIiwiU2NvcGUiLCJkcmFnRW5kQWN0aW9uIiwib25FbmQiLCJzaG90VGFyZ2V0cyIsInNvcnQiLCJhIiwiYiIsInBpblBvc2l0aW9uIiwicmVzZXQiLCJyZWZyZXNoIiwicG9zaXRpb25zIiwibWVzc2FnZSIsInRhcmdldEluZGV4ZXMiLCJjdXJyZW50U2NvcGUiLCJhZGREcmFnZ2FibGVUb1Njb3BlIiwiYWRkRHJhZ2dhYmxlIiwiRHJhZ2dhYmxlIiwiaW50ZXJydXB0IiwiYWRkVGFyZ2V0VG9TY29wZSIsInByZXBlbmRPbiIsImNoZWNrU3VwcG9ydFBhc3NpdmVFdmVudHMiLCJwYXNzaXZlU3VwcG9ydGVkIiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIl9lcnIiLCJpc1N1cHBvcnRQYXNzaXZlRXZlbnRzIiwidGhyb3R0bGUiLCJ3YWl0IiwibGFzdFRpbWUiLCJleGVjdXRlZEZ1bmN0aW9uIiwiY29udGV4dCIsIm5vdyIsIkRhdGUiLCJhcHBseSIsInRocm90dGxlZERyYWdPdmVyIiwiY2FsbGJhY2siLCJkdXJhdGlvbiIsInRocm90dGxlZENhbGxiYWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInBhc3NpdmVGYWxzZSIsInBhc3NpdmUiLCJpc1RvdWNoIiwibW91c2VFdmVudHMiLCJlbmQiLCJ0b3VjaEV2ZW50cyIsInRyYW5zZm9ybVByb3BlcnR5IiwiZ2V0U3R5bGVQcm9wZXJ0eSIsInRyYW5zaXRpb25Qcm9wZXJ0eSIsImdldFRvdWNoQnlJRCIsInRvdWNoSWQiLCJjaGFuZ2VkVG91Y2hlcyIsImlkZW50aWZpZXIiLCJwcmV2ZW50RG91YmxlSW5pdCIsImV4aXN0aW5nIiwiY29weVN0eWxlcyIsInNvdXJjZSIsImRlc3RpbmF0aW9uIiwiY3MiLCJrZXkiLCJjaGlsZHJlbiIsIl9lbmFibGUiLCJzdGFydFBvc2l0aW9uaW5nIiwic3RhcnRMaXN0ZW5pbmciLCJfc2V0RGVmYXVsdFRyYW5zaXRpb24iLCJwaW5uZWRQb3NpdGlvbiIsIl9kcmFnU3RhcnQiLCJkcmFnU3RhcnQiLCJfZHJhZ01vdmUiLCJkcmFnTW92ZSIsIl9kcmFnRW5kIiwiZHJhZ0VuZCIsIl9uYXRpdmVEcmFnU3RhcnQiLCJuYXRpdmVEcmFnU3RhcnQiLCJfbmF0aXZlRHJhZ092ZXIiLCJuYXRpdmVEcmFnT3ZlciIsImRyYWdPdmVyVGhyb3R0bGVEdXJhdGlvbiIsIl9uYXRpdmVEcmFnRW5kIiwibmF0aXZlRHJhZ0VuZCIsIl9uYXRpdmVEcm9wIiwibmF0aXZlRHJvcCIsIl9zY3JvbGwiLCJvblNjcm9sbCIsImhhbmRsZXIiLCJfdHJhbnNmb3JtUG9zaXRpb24iLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbkNzcyIsInRlc3QiLCJyZXBsYWNlIiwidHJhbnNsYXRlQ3NzIiwidHJhbnNmb3JtIiwic2hvdWxkUmVtb3ZlWmVyb1RyYW5zbGF0ZSIsImlzU2lsZW50IiwiX3NldFRyYW5zaXRpb24iLCJfc2V0VHJhbnNsYXRlIiwic2lsZW50IiwiX3ByZXZpb3VzRGlyZWN0aW9uUG9zaXRpb24iLCJfc3RhcnRQb3NpdGlvbiIsImxlZnREaXJlY3Rpb24iLCJyaWdodERpcmVjdGlvbiIsInVwRGlyZWN0aW9uIiwiZG93bkRpcmVjdGlvbiIsIl9zdGFydFRvdWNoVGltZXN0YW1wIiwidG91Y2hEcmFnZ2luZ1RocmVzaG9sZCIsImlzVG91Y2hFdmVudCIsIm5hdGl2ZURyYWdBbmREcm9wIiwiZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wT25Ub3VjaCIsInN0b3BQcm9wYWdhdGlvbk9uU3RhcnQiLCJzdG9wUHJvcGFnYXRpb24iLCJUb3VjaEV2ZW50IiwidG91Y2hQb2ludCIsIl9zdGFydFRvdWNoUG9pbnQiLCJwYWdlWCIsImNsaWVudFgiLCJwYWdlWSIsImNsaWVudFkiLCJfdG91Y2hJZCIsIl9zdGFydFdpbmRvd1Njcm9sbFBvaW50Iiwid2luZG93U2Nyb2xsUG9pbnQiLCJfc3RhcnRQYXJlbnRzU2Nyb2xsUG9pbnQiLCJwYXJlbnRzU2Nyb2xsUG9pbnQiLCJIVE1MSW5wdXRFbGVtZW50IiwiZm9jdXMiLCJzaG91bGRVc2VOYXRpdmVEcmFnQW5kRHJvcCIsImVtdWxhdGVPbkZpcnN0TW92ZSIsInNlZW1zU2Nyb2xsaW5nIiwiY2FuY2VsRHJhZ2dpbmciLCJlbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3AiLCJjYW5jZWxFbXVsYXRpb24iLCJwYXJlbnRzIiwidG91Y2giLCJpc0RyYWdnaW5nIiwiZGV0ZXJtaW5lRGlyZWN0aW9uIiwiY2xhc3NMaXN0Iiwic2V0VGltZW91dCIsIl9ldmVudCIsImRhdGFUcmFuc2ZlciIsInNldERhdGEiLCJlZmZlY3RBbGxvd2VkIiwiZHJvcEVmZmVjdCIsInJlbW92ZUF0dHJpYnV0ZSIsImNvbnRhaW5lclJlY3QiLCJjbG9uZWRFbGVtZW50IiwiY2xvbmVOb2RlIiwiYm9keSIsImFwcGVuZENoaWxkIiwiZW11bGF0aW9uRHJhZ2dhYmxlIiwiY29udGFpbmVyUmVjdFBvaW50IiwiZGVzdHJveSIsInJlbW92ZUNoaWxkIiwicmVzZXRFbWl0dGVyIiwiX2hhbmRsZXIiLCJzY3JvbGxYIiwic2Nyb2xsWSIsIl9jYWNoZWRQYXJlbnRzIiwic3VtIiwic2Nyb2xsTGVmdCIsInNjcm9sbFRvcCIsImVuYWJsZSIsIlJlc2l6ZU9ic2VydmVyIiwiZGVib3VuY2UiLCJpbW1lZGlhdGUiLCJ0aW1lb3V0IiwibGF0ZXIiLCJjYWxsTm93IiwiY2xlYXJUaW1lb3V0IiwiUG9seWZpbGwiLCJMaXN0IiwiY2hhbmdlZER1cmluZ0l0ZXJhdGlvbiIsInJlc2l6ZU9ic2VydmVyIiwib25SZXNpemUiLCJvYnNlcnZlIiwicmVvcmRlck9uQ2hhbmdlIiwiZCIsImluaXREcmFnZ2FibGUiLCJvbk1vdmUiLCJ1bm9ic2VydmUiLCJyZXNldE9uIiwic29ydGVkRHJhZ2dhYmxlcyIsImdldFNvcnRlZERyYWdnYWJsZXMiLCJwaW5uZWRQb3NpdGlvbnMiLCJjdXJyZW50SW5kZXgiLCJ0YXJnZXRJbmRleCIsImRpc3RhbmNlRnVuYyIsInJlb3JkZXJFbGVtZW50cyIsIm1vdmVkRHJhZ2dhYmxlIiwibmV4dCIsImluc2VydEJlZm9yZSIsInJlc2V0UG9zaXRpb25Ub0luaXRpYWwiLCJBcnJheSIsImluaXRpYWxQb3NpdGlvbnMiLCJsaXN0IiwicmVsZWFzZURyYWdnYWJsZSIsImoiLCJkcmFnZ2FibGVBIiwiZHJhZ2dhYmxlQiIsImdldEN1cnJlbnRQaW5uZWRQb3NpdGlvbnMiLCJjb250YWluZXJFbGVtZW50IiwiZWxlbWVudHMiLCJmcm9tIiwiYXJyYXlNb3ZlIiwidG8iLCJCdWJibGluZ0xpc3QiLCJfdmVydGljYWxHYXAiLCJ2ZXJ0aWNhbEdhcCIsInNvcnRlZCIsInN0YXJ0UG9zaXRpb24iLCJvbkRyYWdTdGFydCIsImF1dG9EZXRlY3RWZXJ0aWNhbEdhcCIsImF1dG9EZXRlY3RTdGFydFBvc2l0aW9uIiwiY2FjaGVkU29ydGVkRHJhZ2dhYmxlcyIsImluZGV4T2ZBY3RpdmVEcmFnZ2FibGUiLCJwcmV2RHJhZ2dhYmxlIiwibmV4dERyYWdnYWJsZSIsImN1cnJlbnRQb3NpdGlvbiIsImN1cnJlbnRPcmRlciIsImRyYWdnYWJsZU5ld1Bvc2l0aW9uIiwiY3VycmVudERyYWdnYWJsZSIsImNvbXBhcmUiLCJpbmNsdWRlcyIsImJ1YmJsaW5nIiwiZ2FwVmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFBQTtBQUFBLE1BQ3FCQSxLQUFLLGdCQUFBLFlBQUE7RUFDeEI7RUFDRjtFQUNBO0VBQ0E7RUFDQTtJQUNFLFNBQVlDLEtBQUFBLENBQUFBLENBQUMsRUFBRUMsQ0FBQyxFQUFFO0VBQUEsSUFBQSxlQUFBLENBQUEsSUFBQSxFQUFBLEtBQUEsQ0FB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
