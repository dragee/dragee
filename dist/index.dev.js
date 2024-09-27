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
            this.element.addEventListener('dragstart', this._nativeDragStart);
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
        this.element.removeEventListener('dragstart', this._nativeDragStart);
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
        this.element.removeEventListener('dragstart', this._nativeDragStart);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZGV2LmpzIiwic291cmNlcyI6WyIuLi9zcmMvZ2VvbWV0cnkvcG9pbnQuanMiLCIuLi9zcmMvZ2VvbWV0cnkvcmVjdGFuZ2xlLmpzIiwiLi4vc3JjL3V0aWxzL2dldC1kZWZhdWx0LWNvbnRhaW5lci5qcyIsIi4uL3NyYy9ldmVudEVtaXR0ZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvZGVzYW5kcm8tZ2V0LXN0eWxlLXByb3BlcnR5L2dldC1zdHlsZS1wcm9wZXJ0eS5qcyIsIi4uL3NyYy9nZW9tZXRyeS9kaXN0YW5jZXMuanMiLCIuLi9zcmMvZ2VvbWV0cnkvYm91bmRzLmpzIiwiLi4vc3JjL2dlb21ldHJ5L2FuZ2xlcy5qcyIsIi4uL3NyYy9ib3VuZGluZy5qcyIsIi4uL3NyYy91dGlscy9yZW1vdmUtYXJyYXktaXRlbS5qcyIsIi4uL3NyYy91dGlscy9yYW5nZS5qcyIsIi4uL3NyYy9wb3NpdGlvbmluZy5qcyIsIi4uL3NyYy90YXJnZXQuanMiLCIuLi9zcmMvc2NvcGUuanMiLCIuLi9zcmMvdXRpbHMvaXMtc3VwcG9ydC1wYXNzaXZlLWV2ZW50cy5qcyIsIi4uL3NyYy91dGlscy90aHJvdHRsZS5qcyIsIi4uL3NyYy9kcmFnZ2FibGUuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL3V0aWxzL3Jlc2l6ZU9ic2VydmVycy5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvYWxnb3JpdGhtcy9oYXNBY3RpdmVPYnNlcnZhdGlvbnMuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL2FsZ29yaXRobXMvaGFzU2tpcHBlZE9ic2VydmF0aW9ucy5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvYWxnb3JpdGhtcy9kZWxpdmVyUmVzaXplTG9vcEVycm9yLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BqdWdnbGUvcmVzaXplLW9ic2VydmVyL2xpYi9SZXNpemVPYnNlcnZlckJveE9wdGlvbnMuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL3V0aWxzL2ZyZWV6ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvUmVzaXplT2JzZXJ2ZXJTaXplLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BqdWdnbGUvcmVzaXplLW9ic2VydmVyL2xpYi9ET01SZWN0UmVhZE9ubHkuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL3V0aWxzL2VsZW1lbnQuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL3V0aWxzL2dsb2JhbC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvYWxnb3JpdGhtcy9jYWxjdWxhdGVCb3hTaXplLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BqdWdnbGUvcmVzaXplLW9ic2VydmVyL2xpYi9SZXNpemVPYnNlcnZlckVudHJ5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BqdWdnbGUvcmVzaXplLW9ic2VydmVyL2xpYi9hbGdvcml0aG1zL2NhbGN1bGF0ZURlcHRoRm9yTm9kZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvYWxnb3JpdGhtcy9icm9hZGNhc3RBY3RpdmVPYnNlcnZhdGlvbnMuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL2FsZ29yaXRobXMvZ2F0aGVyQWN0aXZlT2JzZXJ2YXRpb25zQXREZXB0aC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvdXRpbHMvcHJvY2Vzcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvdXRpbHMvcXVldWVNaWNyb1Rhc2suanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL3V0aWxzL3F1ZXVlUmVzaXplT2JzZXJ2ZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL3V0aWxzL3NjaGVkdWxlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvUmVzaXplT2JzZXJ2YXRpb24uanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL1Jlc2l6ZU9ic2VydmVyRGV0YWlsLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BqdWdnbGUvcmVzaXplLW9ic2VydmVyL2xpYi9SZXNpemVPYnNlcnZlckNvbnRyb2xsZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL1Jlc2l6ZU9ic2VydmVyLmpzIiwiLi4vc3JjL3V0aWxzL2RlYm91bmNlLmpzIiwiLi4vc3JjL2xpc3QuanMiLCIuLi9zcmMvYnViYmxpbmdMaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKiBDbGFzcyByZXByZXNlbnRpbmcgYSBwb2ludC4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvaW50IHtcbiAgLyoqXG4gICogQ3JlYXRlIGEgcG9pbnQuXG4gICogQHBhcmFtIHtudW1iZXJ9IHggLSBUaGUgeCB2YWx1ZS5cbiAgKiBAcGFyYW0ge251bWJlcn0geSAtIFRoZSB5IHZhbHVlLlxuICAqL1xuICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgdGhpcy54ID0geFxuICAgIHRoaXMueSA9IHlcbiAgfVxuXG4gIGFkZChwKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnggKyBwLngsIHRoaXMueSArIHAueSlcbiAgfVxuXG4gIHN1YihwKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnggLSBwLngsIHRoaXMueSAtIHAueSlcbiAgfVxuXG4gIG11bHQoaykge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54ICogaywgdGhpcy55ICogaylcbiAgfVxuXG4gIG5lZ2F0aXZlKCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQoLXRoaXMueCwgLXRoaXMueSlcbiAgfVxuXG4gIGNvbXBhcmUocCkge1xuICAgIHJldHVybiAodGhpcy54ID09PSBwLnggJiYgdGhpcy55ID09PSBwLnkpXG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCwgdGhpcy55KVxuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIGB7eD0ke3RoaXMueH0seT0ke3RoaXMueX1gXG4gIH1cblxuICBzdGF0aWMgZWxlbWVudE9mZnNldChlbGVtZW50LCBwYXJlbnQpIHtcbiAgICBwYXJlbnQgPSBwYXJlbnQgfHwgZWxlbWVudC5wYXJlbnROb2RlXG4gICAgY29uc3QgZWxlbWVudFJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgY29uc3QgcGFyZW50UmVjdCA9IHBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIHJldHVybiBuZXcgUG9pbnQoXG4gICAgICBlbGVtZW50UmVjdC5sZWZ0IC0gcGFyZW50UmVjdC5sZWZ0LFxuICAgICAgZWxlbWVudFJlY3QudG9wIC0gcGFyZW50UmVjdC50b3BcbiAgICApXG4gIH1cblxuICBzdGF0aWMgZWxlbWVudFNpemUoZWxlbWVudCkge1xuICAgIGNvbnN0IGVsZW1lbnRSZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIHJldHVybiBuZXcgUG9pbnQoXG4gICAgICBlbGVtZW50UmVjdC53aWR0aCxcbiAgICAgIGVsZW1lbnRSZWN0LmhlaWdodFxuICAgIClcbiAgfVxufVxuIiwiaW1wb3J0IFBvaW50IGZyb20gJy4vcG9pbnQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY3RhbmdsZSB7XG4gIGNvbnN0cnVjdG9yKHBvc2l0aW9uLCBzaXplKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgdGhpcy5zaXplID0gc2l6ZVxuICB9XG5cbiAgZ2V0UDEoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25cbiAgfVxuXG4gIGdldFAyKCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHRoaXMucG9zaXRpb24ueSlcbiAgfVxuXG4gIGdldFAzKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLnNpemUpXG4gIH1cblxuICBnZXRQNCgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnkpXG4gIH1cblxuICBnZXRDZW50ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb24uYWRkKHRoaXMuc2l6ZS5tdWx0KDAuNSkpXG4gIH1cblxuICBvcihyZWN0KSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBuZXcgUG9pbnQoTWF0aC5taW4odGhpcy5wb3NpdGlvbi54LCByZWN0LnBvc2l0aW9uLngpLCBNYXRoLm1pbih0aGlzLnBvc2l0aW9uLnksIHJlY3QucG9zaXRpb24ueSkpXG4gICAgY29uc3Qgc2l6ZSA9IChuZXcgUG9pbnQoTWF0aC5tYXgodGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHJlY3QucG9zaXRpb24ueCArIHJlY3Quc2l6ZS54KSwgTWF0aC5tYXgodGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnksIHJlY3QucG9zaXRpb24ueSArIHJlY3Quc2l6ZS55KSkpLnN1Yihwb3NpdGlvbilcbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZShwb3NpdGlvbiwgc2l6ZSlcbiAgfVxuXG4gIGFuZChyZWN0KSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBuZXcgUG9pbnQoTWF0aC5tYXgodGhpcy5wb3NpdGlvbi54LCByZWN0LnBvc2l0aW9uLngpLCBNYXRoLm1heCh0aGlzLnBvc2l0aW9uLnksIHJlY3QucG9zaXRpb24ueSkpXG4gICAgY29uc3Qgc2l6ZSA9IChuZXcgUG9pbnQoTWF0aC5taW4odGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHJlY3QucG9zaXRpb24ueCArIHJlY3Quc2l6ZS54KSwgTWF0aC5taW4odGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnksIHJlY3QucG9zaXRpb24ueSArIHJlY3Quc2l6ZS55KSkpLnN1Yihwb3NpdGlvbilcbiAgICBpZiAoc2l6ZS54IDw9IDAgfHwgc2l6ZS55IDw9IDApIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHBvc2l0aW9uLCBzaXplKVxuICB9XG5cbiAgaW5jbHVkZVBvaW50KHApIHtcbiAgICByZXR1cm4gISh0aGlzLnBvc2l0aW9uLnggPiBwLnggfHwgdGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLnggPCBwLnggfHwgdGhpcy5wb3NpdGlvbi55ID4gcC55IHx8IHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55IDwgcC55KVxuICB9XG5cbiAgaW5jbHVkZVJlY3RhbmdsZShyZWN0YW5nbGUpIHtcbiAgICByZXR1cm4gdGhpcy5pbmNsdWRlUG9pbnQocmVjdGFuZ2xlLnBvc2l0aW9uKSAmJiB0aGlzLmluY2x1ZGVQb2ludChyZWN0YW5nbGUuZ2V0UDMoKSlcbiAgfVxuXG4gIG1vdmVUb0JvdW5kKHJlY3QsIGF4aXMpIHtcbiAgICBsZXQgc2VsQXhpcywgY3Jvc3NSZWN0YW5nbGVcbiAgICBpZiAoYXhpcykge1xuICAgICAgc2VsQXhpcyA9IGF4aXNcbiAgICB9IGVsc2Uge1xuICAgICAgY3Jvc3NSZWN0YW5nbGUgPSB0aGlzLmFuZChyZWN0KVxuICAgICAgaWYgKCFjcm9zc1JlY3RhbmdsZSkge1xuICAgICAgICByZXR1cm4gcmVjdFxuICAgICAgfVxuICAgICAgc2VsQXhpcyA9IGNyb3NzUmVjdGFuZ2xlLnNpemUueCA+IGNyb3NzUmVjdGFuZ2xlLnNpemUueSA/ICd5JyA6ICd4J1xuICAgIH1cbiAgICBjb25zdCB0aGlzQ2VudGVyID0gdGhpcy5nZXRDZW50ZXIoKVxuICAgIGNvbnN0IHJlY3RDZW50ZXIgPSByZWN0LmdldENlbnRlcigpXG4gICAgY29uc3Qgc2lnbiA9IHRoaXNDZW50ZXJbc2VsQXhpc10gPiByZWN0Q2VudGVyW3NlbEF4aXNdID8gLTEgOiAxXG4gICAgY29uc3Qgb2Zmc2V0ID0gc2lnbiA+IDAgPyB0aGlzLnBvc2l0aW9uW3NlbEF4aXNdICsgdGhpcy5zaXplW3NlbEF4aXNdIC0gcmVjdC5wb3NpdGlvbltzZWxBeGlzXSA6IHRoaXMucG9zaXRpb25bc2VsQXhpc10gLSAocmVjdC5wb3NpdGlvbltzZWxBeGlzXSArIHJlY3Quc2l6ZVtzZWxBeGlzXSlcbiAgICByZWN0LnBvc2l0aW9uW3NlbEF4aXNdID0gcmVjdC5wb3NpdGlvbltzZWxBeGlzXSArIG9mZnNldFxuICAgIHJldHVybiByZWN0XG4gIH1cblxuICBnZXRTcXVhcmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZS54ICogdGhpcy5zaXplLnlcbiAgfVxuXG4gIHN0eWxlQXBwbHkoZWwpIHtcbiAgICBlbCA9IGVsIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2luZCcpXG4gICAgZWwuc3R5bGUubGVmdCA9IHRoaXMucG9zaXRpb24ueCArICdweCdcbiAgICBlbC5zdHlsZS50b3AgPSB0aGlzLnBvc2l0aW9uLnkgKyAncHgnXG4gICAgZWwuc3R5bGUud2lkdGggPSB0aGlzLnNpemUueCArICdweCdcbiAgICBlbC5zdHlsZS5oZWlnaHQgPSB0aGlzLnNpemUueSArICdweCdcbiAgfVxuXG4gIGdyb3d0aChzaXplKSB7XG4gICAgdGhpcy5zaXplID0gdGhpcy5zaXplLmFkZChzaXplKVxuICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uLmFkZChzaXplLm11bHQoLTAuNSkpXG4gIH1cblxuICBnZXRNaW5TaWRlKCkge1xuICAgIHJldHVybiBNYXRoLm1pbih0aGlzLnNpemUueCwgdGhpcy5zaXplLnkpXG4gIH1cblxuICBzdGF0aWMgZnJvbUVsZW1lbnQoZWxlbWVudCwgcGFyZW50PWVsZW1lbnQucGFyZW50Tm9kZSwgaXNDb25zaWRlclRyYW5zbGF0ZT1mYWxzZSkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gUG9pbnQuZWxlbWVudE9mZnNldChlbGVtZW50LCBwYXJlbnQsIGlzQ29uc2lkZXJUcmFuc2xhdGUpXG4gICAgY29uc3Qgc2l6ZSA9IFBvaW50LmVsZW1lbnRTaXplKGVsZW1lbnQpXG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUocG9zaXRpb24sIHNpemUpXG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldERlZmF1bHRDb250YWluZXIoZWxlbWVudCkge1xuICBsZXQgY29udGFpbmVyID0gZWxlbWVudC5wYXJlbnROb2RlXG4gIHdoaWxlIChjb250YWluZXIucGFyZW50Tm9kZSAmJiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShjb250YWluZXIpWydwb3NpdGlvbiddID09PSAnc3RhdGljJyAmJiBjb250YWluZXIudGFnTmFtZSAhPT0gJ0JPRFknKSB7XG4gICAgY29udGFpbmVyID0gY29udGFpbmVyLnBhcmVudE5vZGVcbiAgfVxuICByZXR1cm4gY29udGFpbmVyXG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAob3B0aW9ucyA9IHt9KSB7XG4gICAgdGhpcy5ldmVudHMgPSB7fVxuXG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5vbikge1xuICAgICAgZm9yIChjb25zdCBbZXZlbnROYW1lLCBmbl0gb2YgT2JqZWN0LmVudHJpZXMob3B0aW9ucy5vbikpIHtcbiAgICAgICAgdGhpcy5vbihldmVudE5hbWUsIGZuKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGVtaXQoZXZlbnROYW1lKSB7XG4gICAgdGhpcy5pbnRlcnJ1cHRlZCA9IGZhbHNlXG4gICAgY29uc3QgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKVxuXG4gICAgaWYgKCF0aGlzLmV2ZW50c1tldmVudE5hbWVdKSByZXR1cm5cblxuICAgIGZvciAoY29uc3QgZnVuYyBvZiB0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICBmdW5jKC4uLmFyZ3MpXG4gICAgICBpZiAodGhpcy5pbnRlcnJ1cHRlZCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpbnRlcnJ1cHQoKSB7XG4gICAgdGhpcy5pbnRlcnJ1cHRlZCA9IHRydWVcbiAgfVxuXG4gIG9uKGV2ZW50TmFtZSwgZm4pIHtcbiAgICBpZiAoIXRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSBbXVxuICAgIH1cblxuICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0ucHVzaChmbilcbiAgfVxuXG4gIHByZXBlbmRPbihldmVudE5hbWUsIGZuKSB7XG4gICAgaWYgKCF0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdID0gW11cbiAgICB9XG5cbiAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLnVuc2hpZnQoZm4pXG4gIH1cblxuICB1bnN1YnNjcmliZShldmVudE5hbWUsIGZuKSB7XG4gICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5ldmVudHNbZXZlbnROYW1lXS5pbmRleE9mKGZuKVxuICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5zcGxpY2UoaW5kZXgsIDEpXG4gICAgfVxuICB9XG5cbiAgcmVzZXRFbWl0dGVyICgpIHtcbiAgICB0aGlzLmV2ZW50cyA9IHt9XG4gIH1cblxuICByZXNldE9uKGV2ZW50TmFtZSkge1xuICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSBbXVxuICB9XG59XG4iLCIvKiFcbiAqIGdldFN0eWxlUHJvcGVydHkgdjEuMC40XG4gKiBvcmlnaW5hbCBieSBrYW5nYXhcbiAqIGh0dHA6Ly9wZXJmZWN0aW9ua2lsbHMuY29tL2ZlYXR1cmUtdGVzdGluZy1jc3MtcHJvcGVydGllcy9cbiAqIE1JVCBsaWNlbnNlXG4gKi9cblxuLypqc2hpbnQgYnJvd3NlcjogdHJ1ZSwgc3RyaWN0OiB0cnVlLCB1bmRlZjogdHJ1ZSAqL1xuLypnbG9iYWwgZGVmaW5lOiBmYWxzZSwgZXhwb3J0czogZmFsc2UsIG1vZHVsZTogZmFsc2UgKi9cblxuKCBmdW5jdGlvbiggd2luZG93ICkge1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBwcmVmaXhlcyA9ICdXZWJraXQgTW96IG1zIE1zIE8nLnNwbGl0KCcgJyk7XG52YXIgZG9jRWxlbVN0eWxlID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlO1xuXG5mdW5jdGlvbiBnZXRTdHlsZVByb3BlcnR5KCBwcm9wTmFtZSApIHtcbiAgaWYgKCAhcHJvcE5hbWUgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gdGVzdCBzdGFuZGFyZCBwcm9wZXJ0eSBmaXJzdFxuICBpZiAoIHR5cGVvZiBkb2NFbGVtU3R5bGVbIHByb3BOYW1lIF0gPT09ICdzdHJpbmcnICkge1xuICAgIHJldHVybiBwcm9wTmFtZTtcbiAgfVxuXG4gIC8vIGNhcGl0YWxpemVcbiAgcHJvcE5hbWUgPSBwcm9wTmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHByb3BOYW1lLnNsaWNlKDEpO1xuXG4gIC8vIHRlc3QgdmVuZG9yIHNwZWNpZmljIHByb3BlcnRpZXNcbiAgdmFyIHByZWZpeGVkO1xuICBmb3IgKCB2YXIgaT0wLCBsZW4gPSBwcmVmaXhlcy5sZW5ndGg7IGkgPCBsZW47IGkrKyApIHtcbiAgICBwcmVmaXhlZCA9IHByZWZpeGVzW2ldICsgcHJvcE5hbWU7XG4gICAgaWYgKCB0eXBlb2YgZG9jRWxlbVN0eWxlWyBwcmVmaXhlZCBdID09PSAnc3RyaW5nJyApIHtcbiAgICAgIHJldHVybiBwcmVmaXhlZDtcbiAgICB9XG4gIH1cbn1cblxuLy8gdHJhbnNwb3J0XG5pZiAoIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcbiAgLy8gQU1EXG4gIGRlZmluZSggZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGdldFN0eWxlUHJvcGVydHk7XG4gIH0pO1xufSBlbHNlIGlmICggdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICkge1xuICAvLyBDb21tb25KUyBmb3IgQ29tcG9uZW50XG4gIG1vZHVsZS5leHBvcnRzID0gZ2V0U3R5bGVQcm9wZXJ0eTtcbn0gZWxzZSB7XG4gIC8vIGJyb3dzZXIgZ2xvYmFsXG4gIHdpbmRvdy5nZXRTdHlsZVByb3BlcnR5ID0gZ2V0U3R5bGVQcm9wZXJ0eTtcbn1cblxufSkoIHdpbmRvdyApO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldERpc3RhbmNlKHAxLCBwMikge1xuICBjb25zdCBkeCA9IHAxLnggLSBwMi54LCBkeSA9IHAxLnkgLSBwMi55XG4gIHJldHVybiBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRYRGlmZmVyZW5jZShwMSwgcDIpIHtcbiAgcmV0dXJuIE1hdGguYWJzKHAxLnggLSBwMi54KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0WURpZmZlcmVuY2UocDEsIHAyKSB7XG4gIHJldHVybiBNYXRoLmFicyhwMS55IC0gcDIueSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3Rvcnkob3B0aW9ucykge1xuICByZXR1cm4gKHAxLCBwMikgPT4ge1xuICAgIHJldHVybiBNYXRoLnNxcnQoXG4gICAgICBNYXRoLnBvdyhvcHRpb25zLnggKiBNYXRoLmFicyhwMS54IC0gcDIueCksIDIpICtcbiAgICAgIE1hdGgucG93KG9wdGlvbnMueSAqIE1hdGguYWJzKHAxLnkgLSBwMi55KSwgMilcbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluZGV4T2ZOZWFyZXN0UG9pbnQoYXJyLCB2YWwsIHJhZGl1cywgZ2V0RGlzdGFuY2VGdW5jPWdldERpc3RhbmNlKSB7XG4gIGxldCBzaXplLCBpbmRleCA9IDAsIGksIHRlbXBcbiAgaWYgKGFyci5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gLTFcbiAgfVxuICBzaXplID0gZ2V0RGlzdGFuY2VGdW5jKGFyclswXSwgdmFsKVxuICBmb3IgKGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgdGVtcCA9IGdldERpc3RhbmNlRnVuYyhhcnJbaV0sIHZhbClcbiAgICBpZiAodGVtcCA8IHNpemUpIHtcbiAgICAgIHNpemUgPSB0ZW1wXG4gICAgICBpbmRleCA9IGlcbiAgICB9XG4gIH1cbiAgaWYgKHJhZGl1cyA+PSAwICYmIHNpemUgPiByYWRpdXMpIHtcbiAgICByZXR1cm4gLTFcbiAgfVxuICByZXR1cm4gaW5kZXhcbn1cbiIsImltcG9ydCBQb2ludCBmcm9tICcuL3BvaW50J1xuaW1wb3J0IHsgZ2V0RGlzdGFuY2UgfSBmcm9tICcuL2Rpc3RhbmNlcydcblxuZXhwb3J0IGZ1bmN0aW9uIGNsYW1wKG1pbiwgbWF4LCB2YWwpIHtcbiAgcmV0dXJuIE1hdGgubWF4KG1pbiwgTWF0aC5taW4obWF4LCB2YWwpKVxufVxuXG4vL1JldHVybiBjcm9zc2luZyBwb2ludCBvZiB0d28gbGluZXNcbmV4cG9ydCBmdW5jdGlvbiBkaXJlY3RDcm9zc2luZyhMMVAxLCBMMVAyLCBMMlAxLCBMMlAyKSB7XG4gIGxldCB0ZW1wLCBrMSwgazIsIGIxLCBiMiwgeCwgeVxuICBpZiAoTDJQMS54ID09PSBMMlAyLngpIHtcbiAgICB0ZW1wID0gTDJQMVxuICAgIEwyUDEgPSBMMVAxXG4gICAgTDFQMSA9IHRlbXBcbiAgICB0ZW1wID0gTDJQMlxuICAgIEwyUDIgPSBMMVAyXG4gICAgTDFQMiA9IHRlbXBcbiAgfVxuICBpZiAoTDFQMS54ID09PSBMMVAyLngpIHtcbiAgICBrMiA9IChMMlAyLnkgLSBMMlAxLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICBiMiA9IChMMlAyLnggKiBMMlAxLnkgLSBMMlAxLnggKiBMMlAyLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICB4ID0gTDFQMS54XG4gICAgeSA9IHggKiBrMiArIGIyXG4gICAgcmV0dXJuIG5ldyBQb2ludCh4LCB5KVxuICB9IGVsc2Uge1xuICAgIGsxID0gKEwxUDIueSAtIEwxUDEueSkgLyAoTDFQMi54IC0gTDFQMS54KVxuICAgIGIxID0gKEwxUDIueCAqIEwxUDEueSAtIEwxUDEueCAqIEwxUDIueSkgLyAoTDFQMi54IC0gTDFQMS54KVxuICAgIGsyID0gKEwyUDIueSAtIEwyUDEueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgIGIyID0gKEwyUDIueCAqIEwyUDEueSAtIEwyUDEueCAqIEwyUDIueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgIHggPSAoYjEgLSBiMikgLyAoazIgLSBrMSlcbiAgICB5ID0geCAqIGsxICsgYjFcbiAgICByZXR1cm4gbmV3IFBvaW50KHgsIHkpXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kVG9TZWdtZW50KExQMSwgTFAyLCBQKSB7XG4gIGxldCB4LCB5XG4gIHggPSBjbGFtcChNYXRoLm1pbihMUDEueCwgTFAyLngpLCBNYXRoLm1heChMUDEueCwgTFAyLngpLCBQLngpXG4gIGlmICh4ICE9PSBQLngpIHtcbiAgICB5ID0gKHggPT09IExQMS54KSA/IExQMS55IDogTFAyLnlcbiAgICBQID0gbmV3IFBvaW50KHgsIHkpXG4gIH1cblxuICB5ID0gY2xhbXAoTWF0aC5taW4oTFAxLnksIExQMi55KSwgTWF0aC5tYXgoTFAxLnksIExQMi55KSwgUC55KVxuICBpZiAoeSAhPT0gUC55KSB7XG4gICAgeCA9ICh5ID09PSBMUDEueSkgPyBMUDEueCA6IExQMi54XG4gICAgUCA9IG5ldyBQb2ludCh4LCB5KVxuICB9XG5cbiAgcmV0dXJuIFBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kVG9MaW5lKEEsIEIsIFApIHtcbiAgY29uc3QgQVAgPSBuZXcgUG9pbnQoUC54IC0gQS54LCBQLnkgLSBBLnkpLFxuICAgIEFCID0gbmV3IFBvaW50KEIueCAtIEEueCwgQi55IC0gQS55KSxcbiAgICBhYjIgPSBBQi54ICogQUIueCArIEFCLnkgKiBBQi55LFxuICAgIGFwX2FiID0gQVAueCAqIEFCLnggKyBBUC55ICogQUIueSxcbiAgICB0ID0gYXBfYWIgLyBhYjJcbiAgcmV0dXJuIG5ldyBQb2ludChBLnggKyBBQi54ICogdCwgQS55ICsgQUIueSAqIHQpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb2ludE9uTGluZShMUDEsIExQMiwgcGVyY2VudCkge1xuICBjb25zdCBkeCA9IExQMi54IC0gTFAxLngsIGR5ID0gTFAyLnkgLSBMUDEueVxuICByZXR1cm4gbmV3IFBvaW50KExQMS54ICsgcGVyY2VudCAqIGR4LCBMUDEueSArIHBlcmNlbnQgKiBkeSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBvaW50T25MaW5lQnlMZW5naHQoTFAxLCBMUDIsIGxlbmdodCkge1xuICBjb25zdCBkeCA9IExQMi54IC0gTFAxLnhcbiAgY29uc3QgZHkgPSBMUDIueSAtIExQMS55XG4gIGNvbnN0IHBlcmNlbnQgPSBsZW5naHQgLyBnZXREaXN0YW5jZShMUDEsIExQMilcbiAgcmV0dXJuIG5ldyBQb2ludChMUDEueCArIHBlcmNlbnQgKiBkeCwgTFAxLnkgKyBwZXJjZW50ICogZHkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRQb2ludFRvQm91bmRQb2ludHMoYm91bmRwb2ludHMsIHBvaW50LCBpc1JpZ2h0KSB7XG4gIGNvbnN0IHJlc3VsdCA9IGJvdW5kcG9pbnRzLmZpbHRlcigoYlBvaW50KSA9PiB7XG4gICAgcmV0dXJuIGJQb2ludC55ID4gcG9pbnQueSB8fCAoaXNSaWdodCA/IGJQb2ludC54IDwgcG9pbnQueCA6IGJQb2ludC54ID4gcG9pbnQueClcbiAgfSlcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChwb2ludC55IDwgcmVzdWx0W2ldLnkpIHtcbiAgICAgIHJlc3VsdC5zcGxpY2UoaSwgMCwgcG9pbnQpXG4gICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxuICB9XG4gIHJlc3VsdC5wdXNoKHBvaW50KVxuICByZXR1cm4gcmVzdWx0XG59XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9wb2ludCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFuZ2xlRGlmZihhbHBoYSwgYmV0YSkge1xuICBjb25zdCBtaW5BbmdsZSA9IE1hdGgubWluKGFscGhhLCBiZXRhKVxuICBjb25zdCBtYXhBbmdsZSA9ICBNYXRoLm1heChhbHBoYSwgYmV0YSlcbiAgcmV0dXJuIE1hdGgubWluKG1heEFuZ2xlIC0gbWluQW5nbGUsIG1pbkFuZ2xlICsgTWF0aC5QSSoyIC0gbWF4QW5nbGUpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbmdsZShwMSwgcDIpIHtcbiAgY29uc3QgZGlmZiA9IHAyLnN1YihwMSlcbiAgcmV0dXJuIG5vcm1hbGl6ZUFuZ2xlKE1hdGguYXRhbjIoZGlmZi55LCBkaWZmLngpKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9SYWRpYW4oYW5nbGUpIHtcbiAgcmV0dXJuICgoYW5nbGUgJSAzNjApICogTWF0aC5QSSAvIDE4MClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvRGVncmVlKGFuZ2xlKSB7XG4gIHJldHVybiAoYW5nbGUgKiAxODAgLyBNYXRoLlBJKSAlIDM2MFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRBbmdsZShtaW4sIG1heCwgdmFsKSB7XG4gIGxldCBkbWluLCBkbWF4XG4gIGlmIChtaW4gPCBtYXggJiYgdmFsID4gbWluICYmIHZhbCA8IG1heCkge1xuICAgIHJldHVybiB2YWxcbiAgfSBlbHNlIGlmIChtYXggPCBtaW4gJiYgKHZhbCA8IG1heCB8fCB2YWwgPiBtaW4pKSB7XG4gICAgcmV0dXJuIHZhbFxuICB9IGVsc2Uge1xuICAgIGRtaW4gPSBnZXRBbmdsZURpZmYobWluLCB2YWwpXG4gICAgZG1heCA9IGdldEFuZ2xlRGlmZihtYXgsIHZhbClcbiAgICBpZiAoZG1pbiA8IGRtYXgpIHtcbiAgICAgIHJldHVybiBtaW5cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG1heFxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmVhcmVzdEFuZ2xlKGFyciwgYW5nbGUpIHtcbiAgbGV0IGksIHRlbXAsIGRpZmYgPSBNYXRoLlBJICogMiwgdmFsdWVcbiAgZm9yIChpID0gMDsgaSA8IGFyci5sZW5ndGg7aSsrKSB7XG4gICAgdGVtcCA9IGdldEFuZ2xlRGlmZihhcnJbaV0sIGFuZ2xlKVxuICAgIGlmIChkaWZmIDwgdGVtcCkge1xuICAgICAgZGlmZiA9IHRlbXBcbiAgICAgIHZhbHVlID0gYXJyW2ldXG4gICAgfVxuICB9XG4gIHJldHVybiB2YWx1ZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplQW5nbGUodmFsKSB7XG4gIHdoaWxlICh2YWwgPCAwKSB7XG4gICAgdmFsICs9IDIgKiBNYXRoLlBJXG4gIH1cbiAgd2hpbGUgKHZhbCA+IDIgKiBNYXRoLlBJKSB7XG4gICAgdmFsIC09IDIgKiBNYXRoLlBJXG4gIH1cbiAgcmV0dXJuIHZhbFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKGFuZ2xlLCBsZW5ndGgsIGNlbnRlcikge1xuICBjZW50ZXIgPSBjZW50ZXIgfHwgbmV3IFBvaW50KDAsIDApXG4gIHJldHVybiBjZW50ZXIuYWRkKG5ldyBQb2ludChsZW5ndGggKiBNYXRoLmNvcyhhbmdsZSksIGxlbmd0aCAqIE1hdGguc2luKGFuZ2xlKSkpXG59XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9nZW9tZXRyeS9wb2ludCdcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSAnLi9nZW9tZXRyeS9yZWN0YW5nbGUnXG5pbXBvcnQge1xuICBnZXRQb2ludE9uTGluZUJ5TGVuZ2h0LFxuICBkaXJlY3RDcm9zc2luZyxcbiAgYm91bmRUb0xpbmVcbn0gZnJvbSAnLi9nZW9tZXRyeS9ib3VuZHMnXG5cbmltcG9ydCB7XG4gIGdldEFuZ2xlLFxuICBub3JtYWxpemVBbmdsZSxcbiAgYm91bmRBbmdsZSxcbiAgZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtXG59IGZyb20gJy4vZ2VvbWV0cnkvYW5nbGVzJ1xuXG5leHBvcnQgY2xhc3MgQm91bmQge1xuICBjb25zdHJ1Y3RvciAoKSB7fVxuXG4gIGJvdW5kKHBvaW50LCBfc2l6ZSkge1xuICAgIHJldHVybiBwb2ludFxuICB9XG5cbiAgcmVmcmVzaCAoKSB7fVxuXG4gIHN0YXRpYyBib3VuZGluZygpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyB0aGlzKC4uLmFyZ3VtZW50cylcbiAgICByZXR1cm4gaW5zdGFuY2UuYm91bmQuYmluZChpbnN0YW5jZSlcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb1JlY3RhbmdsZSBleHRlbmRzIEJvdW5kIHtcbiAgY29uc3RydWN0b3IocmVjdGFuZ2xlKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMucmVjdGFuZ2xlID0gcmVjdGFuZ2xlXG4gIH1cblxuICBib3VuZChwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IGNhbGNQb2ludCA9IHBvaW50LmNsb25lKClcbiAgICBjb25zdCByZWN0UDIgPSB0aGlzLnJlY3RhbmdsZS5nZXRQMygpXG5cbiAgICBpZiAodGhpcy5yZWN0YW5nbGUucG9zaXRpb24ueCA+IGNhbGNQb2ludC54KSB7XG4gICAgICAoY2FsY1BvaW50LnggPSB0aGlzLnJlY3RhbmdsZS5wb3NpdGlvbi54KVxuICAgIH1cbiAgICBpZiAodGhpcy5yZWN0YW5nbGUucG9zaXRpb24ueSA+IGNhbGNQb2ludC55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHRoaXMucmVjdGFuZ2xlLnBvc2l0aW9uLnlcbiAgICB9XG4gICAgaWYgKHJlY3RQMi54IDwgY2FsY1BvaW50LnggKyBzaXplLngpIHtcbiAgICAgIGNhbGNQb2ludC54ID0gcmVjdFAyLnggLSBzaXplLnhcbiAgICB9XG4gICAgaWYgKHJlY3RQMi55IDwgY2FsY1BvaW50LnkgKyBzaXplLnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gcmVjdFAyLnkgLSBzaXplLnlcbiAgICB9XG5cbiAgICByZXR1cm4gY2FsY1BvaW50XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9FbGVtZW50IGV4dGVuZHMgQm91bmRUb1JlY3RhbmdsZSB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbnRhaW5lcikge1xuICAgIHN1cGVyKFJlY3RhbmdsZS5mcm9tRWxlbWVudChlbGVtZW50LCBjb250YWluZXIpKVxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lclxuICB9XG5cbiAgcmVmcmVzaCAoKSB7XG4gICAgdGhpcy5yZWN0YW5nbGUgPSBSZWN0YW5nbGUuZnJvbUVsZW1lbnQodGhpcy5lbGVtZW50LCB0aGlzLmNvbnRhaW5lcilcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb0xpbmVYIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3Rvcih4LCBzdGFydFksIGVuZFkpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy54ID0geFxuICAgIHRoaXMuc3RhcnRZID0gc3RhcnRZXG4gICAgdGhpcy5lbmRZID0gZW5kWVxuICB9XG5cbiAgYm91bmQocG9pbnQsIHNpemUpIHtcbiAgICBjb25zdCBjYWxjUG9pbnQgPSBwb2ludC5jbG9uZSgpXG5cbiAgICBjYWxjUG9pbnQueCA9IHRoaXMueFxuICAgIGlmICh0aGlzLnN0YXJ0WSA+IGNhbGNQb2ludC55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHRoaXMuc3RhcnRZXG4gICAgfVxuICAgIGlmICh0aGlzLmVuZFkgPCBjYWxjUG9pbnQueSArIHNpemUueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSB0aGlzLmVuZFkgLSBzaXplLnlcbiAgICB9XG5cbiAgICByZXR1cm4gY2FsY1BvaW50XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9MaW5lWSBleHRlbmRzIEJvdW5kIHtcbiAgY29uc3RydWN0b3IoeSwgc3RhcnRYLCBlbmRYKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMueSA9IHlcbiAgICB0aGlzLnN0YXJ0WCA9IHN0YXJ0WFxuICAgIHRoaXMuZW5kWCA9IGVuZFhcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgY2FsY1BvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIGNhbGNQb2ludC55ID0gdGhpcy55XG4gICAgaWYgKHRoaXMuc3RhcnRYID4gY2FsY1BvaW50LngpIHtcbiAgICAgIGNhbGNQb2ludC54ID0gdGhpcy5zdGFydFhcbiAgICB9XG4gICAgaWYgKHRoaXMuZW5kWCA8IGNhbGNQb2ludC54ICsgc2l6ZS54KSB7XG4gICAgICBjYWxjUG9pbnQueCA9IHRoaXMuZW5kWCAtIHNpemUueFxuICAgIH1cbiAgICByZXR1cm4gY2FsY1BvaW50XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9MaW5lIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3RvcihzdGFydFBvaW50LCBlbmRQb2ludCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnN0YXJ0UG9pbnQgPSBzdGFydFBvaW50XG4gICAgdGhpcy5lbmRQb2ludCA9IGVuZFBvaW50XG4gICAgY29uc3QgYWxwaGEgPSBNYXRoLmF0YW4yKGVuZFBvaW50LnkgLSBzdGFydFBvaW50LnksIGVuZFBvaW50LnggLSBzdGFydFBvaW50LngpXG4gICAgY29uc3QgYmV0YSA9IGFscGhhICsgTWF0aC5QSSAvIDJcbiAgICB0aGlzLnNvbWVLID0gMTBcbiAgICB0aGlzLmNvc0JldGEgPSBNYXRoLmNvcyhiZXRhKVxuICAgIHRoaXMuc2luQmV0YSA9IE1hdGguc2luKGJldGEpXG4gIH1cblxuICBib3VuZChwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IHBvaW50MiA9IG5ldyBQb2ludChcbiAgICAgIHBvaW50LnggKyB0aGlzLnNvbWVLICogdGhpcy5jb3NCZXRhLFxuICAgICAgcG9pbnQueSArIHRoaXMuc29tZUsgKiB0aGlzLnNpbkJldGFcbiAgICApXG5cbiAgICBjb25zdCBuZXdFbmRQb2ludCA9IGdldFBvaW50T25MaW5lQnlMZW5naHQodGhpcy5lbmRQb2ludCwgdGhpcy5zdGFydFBvaW50LCBzaXplLngpXG4gICAgY29uc3QgcG9pbnRDcm9zc2luZyA9IGRpcmVjdENyb3NzaW5nKHRoaXMuc3RhcnRQb2ludCwgdGhpcy5lbmRQb2ludCwgcG9pbnQsIHBvaW50MilcblxuICAgIHJldHVybiBib3VuZFRvTGluZSh0aGlzLnN0YXJ0UG9pbnQsIG5ld0VuZFBvaW50LCBwb2ludENyb3NzaW5nKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvQ2lyY2xlIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3RvcihjZW50ZXIsIHJhZGl1cykge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLmNlbnRlciA9IGNlbnRlclxuICAgIHRoaXMucmFkaXVzID0gcmFkaXVzXG4gIH1cblxuICBib3VuZChwb2ludCwgX3NpemUpIHtcbiAgICByZXR1cm4gZ2V0UG9pbnRPbkxpbmVCeUxlbmdodCh0aGlzLmNlbnRlciwgcG9pbnQsIHRoaXMucmFkaXVzKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvQXJjIGV4dGVuZHMgQm91bmRUb0NpcmNsZSB7XG4gIGNvbnN0cnVjdG9yKGNlbnRlciwgcmFkaXVzLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSkge1xuICAgIHN1cGVyKGNlbnRlciwgcmFkaXVzKVxuICAgIHRoaXMuX3N0YXJ0QW5nbGUgPSBzdGFydEFuZ2xlXG4gICAgdGhpcy5fZW5kQW5nbGUgPSBlbmRBbmdsZVxuICB9XG5cbiAgc3RhcnRBbmdsZSgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMuX3N0YXJ0QW5nbGUgPT09ICdmdW5jdGlvbicgPyB0aGlzLl9zdGFydEFuZ2xlKCkgOiB0aGlzLl9zdGFydEFuZ2xlXG4gIH1cblxuICBlbmRBbmdsZSgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMuX2VuZEFuZ2xlID09PSAnZnVuY3Rpb24nID8gdGhpcy5fZW5kQW5nbGUoKSA6IHRoaXMuX2VuZEFuZ2xlXG4gIH1cblxuICBib3VuZChwb2ludCwgX3NpemUpIHtcbiAgICBsZXQgYW5nbGUgPSBnZXRBbmdsZSh0aGlzLmNlbnRlciwgcG9pbnQpXG4gICAgYW5nbGUgPSBub3JtYWxpemVBbmdsZShhbmdsZSlcbiAgICBhbmdsZSA9IGJvdW5kQW5nbGUodGhpcy5zdGFydEFuZ2xlKCksIHRoaXMuZW5kQW5nbGUoKSwgYW5nbGUpXG4gICAgcmV0dXJuIGdldFBvaW50RnJvbVJhZGlhbFN5c3RlbShhbmdsZSwgdGhpcy5yYWRpdXMsIHRoaXMuY2VudGVyKVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhcnJheSwgdmFsKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoYXJyYXlbaV0gPT09IHZhbCkge1xuICAgICAgYXJyYXkuc3BsaWNlKGksIDEpXG4gICAgICBpLS1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycmF5XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByYW5nZShzdGFydCwgc3RvcCwgc3RlcCkge1xuICBjb25zdCByZXN1bHQgPSBbXVxuICBpZiAodHlwZW9mIHN0b3AgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgc3RvcCA9IHN0YXJ0XG4gICAgc3RhcnQgPSAwXG4gIH1cbiAgaWYgKHR5cGVvZiBzdGVwID09PSAndW5kZWZpbmVkJykge1xuICAgIHN0ZXAgPSAxXG4gIH1cbiAgaWYgKChzdGVwID4gMCAmJiBzdGFydCA+PSBzdG9wKSB8fCAoc3RlcCA8IDAgJiYgc3RhcnQgPD0gc3RvcCkpIHtcbiAgICByZXR1cm4gW11cbiAgfVxuICBmb3IgKGxldCBpID0gc3RhcnQ7IHN0ZXAgPiAwID8gaSA8IHN0b3AgOiBpID4gc3RvcDsgaSArPSBzdGVwKSB7XG4gICAgcmVzdWx0LnB1c2goaSlcbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9nZW9tZXRyeS9wb2ludCdcbmltcG9ydCB7IGFkZFBvaW50VG9Cb3VuZFBvaW50cyB9IGZyb20gJy4vZ2VvbWV0cnkvYm91bmRzJ1xuXG5pbXBvcnQge1xuICBpbmRleE9mTmVhcmVzdFBvaW50LFxuICBnZXREaXN0YW5jZVxufSBmcm9tICcuL2dlb21ldHJ5L2Rpc3RhbmNlcydcblxuY2xhc3MgQmFzaWNTdHJhdGVneSB7XG4gIGNvbnN0cnVjdG9yKHJlY3RhbmdsZSwgb3B0aW9ucz17fSkge1xuICAgIHRoaXMucmVjdGFuZ2xlID0gcmVjdGFuZ2xlXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9uc1xuICB9XG5cbiAgZ2V0IGJvdW5kUmVjdCAoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGlzLnJlY3RhbmdsZSA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMucmVjdGFuZ2xlKCkgOiB0aGlzLnJlY3RhbmdsZVxuICB9XG59XG5cbmNsYXNzIE5vdENyb3NzaW5nU3RyYXRlZ3kgZXh0ZW5kcyBCYXNpY1N0cmF0ZWd5IHtcbiAgcG9zaXRpb25pbmcgKHJlY3RhbmdsZUxpc3QsIGluZGV4ZXNPZk5ld3MpIHtcbiAgICBjb25zdCBzdGF0aWNSZWN0YW5nbGVJbmRleGVzID0gcmVjdGFuZ2xlTGlzdC5yZWR1Y2UoKGluZGV4ZXMsIF9yZWN0LCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGluZGV4ZXNPZk5ld3MuaW5kZXhPZihpbmRleCkgPT09IC0xKSB7XG4gICAgICAgIGluZGV4ZXMucHVzaChpbmRleClcbiAgICAgIH1cbiAgICAgIHJldHVybiBpbmRleGVzXG4gICAgfSwgW10pXG5cbiAgICBpbmRleGVzT2ZOZXdzLmZvckVhY2goKGluZGV4KSA9PiB7XG4gICAgICBsZXQgcmVjdCA9IHJlY3RhbmdsZUxpc3RbaW5kZXhdXG4gICAgICBsZXQgcmVtb3ZhYmxlID0gZmFsc2VcblxuICAgICAgc3RhdGljUmVjdGFuZ2xlSW5kZXhlcy5mb3JFYWNoKChpbmRleE9mU3RhdGljKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YXRpY1JlY3QgPSByZWN0YW5nbGVMaXN0W2luZGV4T2ZTdGF0aWNdXG4gICAgICAgIHJlY3QgPSBzdGF0aWNSZWN0Lm1vdmVUb0JvdW5kKHJlY3QpXG4gICAgICB9KVxuXG4gICAgICByZW1vdmFibGUgPSBzdGF0aWNSZWN0YW5nbGVJbmRleGVzLnNvbWUoKGluZGV4T2ZTdGF0aWMpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhdGljUmVjdCA9IHJlY3RhbmdsZUxpc3RbaW5kZXhPZlN0YXRpY11cbiAgICAgICAgcmV0dXJuICAhIXN0YXRpY1JlY3QuYW5kKHJlY3QpXG4gICAgICB9KSB8fCByZWN0LmFuZCh0aGlzLmJvdW5kUmVjdCkuZ2V0U3F1YXJlKCkgIT09IHJlY3QuZ2V0U3F1YXJlKClcblxuICAgICAgaWYgKHJlbW92YWJsZSkge1xuICAgICAgICByZWN0LnJlbW92YWJsZSA9IHRydWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMucHVzaChpbmRleClcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiByZWN0YW5nbGVMaXN0XG4gIH1cblxuICBzb3J0aW5nKG9kbERyYWdnYWJsZXNMaXN0LCBuZXdEcmFnZ2FibGVzLCBpbmRleE9mTmV3cykge1xuICAgIGNvbnN0IGRyYWdnYWJsZXMgPSBvZGxEcmFnZ2FibGVzTGlzdC5jb25jYXQobmV3RHJhZ2dhYmxlcylcbiAgICBuZXdEcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgaW5kZXhPZk5ld3MucHVzaChkcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSlcbiAgICB9KVxuICAgIHJldHVybiBkcmFnZ2FibGVzXG4gIH1cbn1cblxuY2xhc3MgRmxvYXRMZWZ0U3RyYXRlZ3kgZXh0ZW5kcyBCYXNpY1N0cmF0ZWd5IHtcbiAgY29uc3RydWN0b3IocmVjdGFuZ2xlLCBvcHRpb25zPXt9KSB7XG4gICAgc3VwZXIocmVjdGFuZ2xlLCBvcHRpb25zKVxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgcmVtb3ZhYmxlOiB0cnVlXG4gICAgfSwgb3B0aW9ucylcblxuICAgIHRoaXMucmFkaXVzID0gb3B0aW9ucy5yYWRpdXMgfHwgODBcblxuICAgIHRoaXMucGFkZGluZ1RvcExlZnQgPSBvcHRpb25zLnBhZGRpbmdUb3BMZWZ0IHx8IG5ldyBQb2ludCgwLCAwKVxuICAgIHRoaXMucGFkZGluZ0JvdHRvbVJpZ2h0ID0gb3B0aW9ucy5wYWRkaW5nQm90dG9tUmlnaHQgfHwgbmV3IFBvaW50KDAsIDApXG4gICAgdGhpcy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgPSBvcHRpb25zLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyB8fCAwXG5cbiAgICB0aGlzLmdldERpc3RhbmNlID0gb3B0aW9ucy5nZXREaXN0YW5jZSB8fCBnZXREaXN0YW5jZVxuICAgIHRoaXMuZ2V0UG9zaXRpb24gPSBvcHRpb25zLmdldFBvc2l0aW9uIHx8ICgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucG9zaXRpb24pXG4gIH1cblxuICBwb3NpdGlvbmluZyhyZWN0YW5nbGVMaXN0LCBfaW5kZXhlc09mTmV3cykge1xuICAgIGNvbnN0IGJvdW5kUmVjdCA9IHRoaXMuYm91bmRSZWN0XG4gICAgY29uc3QgcmVjdFAyID0gYm91bmRSZWN0LmdldFAyKClcbiAgICBsZXQgYm91bmRhcnlQb2ludHMgPSBbYm91bmRSZWN0LnBvc2l0aW9uXVxuXG4gICAgcmVjdGFuZ2xlTGlzdC5mb3JFYWNoKChyZWN0LCByZWN0SW5kZXgpID0+IHtcbiAgICAgIGxldCBwb3NpdGlvbiwgaXNWYWxpZCA9IGZhbHNlXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvdW5kYXJ5UG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHBvc2l0aW9uID0gbmV3IFBvaW50KFxuICAgICAgICAgIGJvdW5kYXJ5UG9pbnRzW2ldLnggKyB0aGlzLnBhZGRpbmdUb3BMZWZ0LngsXG4gICAgICAgICAgaSA+IDAgPyAoYm91bmRhcnlQb2ludHNbaSAtIDFdLnkgKyB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcykgOiAoYm91bmRSZWN0LnBvc2l0aW9uLnkgKyB0aGlzLnBhZGRpbmdUb3BMZWZ0LnkpXG4gICAgICAgIClcblxuICAgICAgICBpc1ZhbGlkID0gKHBvc2l0aW9uLnggKyByZWN0LnNpemUueCA8IHJlY3RQMi54KVxuXG4gICAgICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgcG9zaXRpb24gPSBuZXcgUG9pbnQoXG4gICAgICAgICAgYm91bmRSZWN0LnBvc2l0aW9uLnggKyB0aGlzLnBhZGRpbmdUb3BMZWZ0LngsXG4gICAgICAgICAgYm91bmRhcnlQb2ludHNbYm91bmRhcnlQb2ludHMubGVuZ3RoIC0gMV0ueSArIChyZWN0SW5kZXggPiAwID8gdGhpcy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgOiB0aGlzLnBhZGRpbmdUb3BMZWZ0LnkpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgcmVjdC5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnJlbW92YWJsZSAmJiByZWN0LmdldFAzKCkueSA+IGJvdW5kUmVjdC5nZXRQMygpLnkpIHtcbiAgICAgICAgcmVjdC5yZW1vdmFibGUgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGJvdW5kYXJ5UG9pbnRzID0gYWRkUG9pbnRUb0JvdW5kUG9pbnRzKGJvdW5kYXJ5UG9pbnRzLCByZWN0LmdldFAzKCkuYWRkKHRoaXMucGFkZGluZ0JvdHRvbVJpZ2h0KSlcbiAgICB9KVxuICAgIHJldHVybiByZWN0YW5nbGVMaXN0XG4gIH1cblxuICBzb3J0aW5nKG9kbERyYWdnYWJsZXNMaXN0LCBuZXdEcmFnZ2FibGVzLCBpbmRleE9mTmV3cykge1xuICAgIGNvbnN0IG5ld0xpc3QgPSBvZGxEcmFnZ2FibGVzTGlzdC5jb25jYXQoKVxuICAgIGNvbnN0IGxpc3RPbGRQb3NpdGlvbiA9IG9kbERyYWdnYWJsZXNMaXN0Lm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUuZ2V0UG9zaXRpb24oKSlcbiAgICBuZXdEcmFnZ2FibGVzLmZvckVhY2goKG5ld0RyYWdnYWJsZSkgPT4ge1xuICAgICAgbGV0IGluZGV4ID0gaW5kZXhPZk5lYXJlc3RQb2ludChsaXN0T2xkUG9zaXRpb24sIHRoaXMuZ2V0UG9zaXRpb24obmV3RHJhZ2dhYmxlKSwgdGhpcy5yYWRpdXMsIHRoaXMuZ2V0RGlzdGFuY2UpXG4gICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgIGluZGV4ID0gbmV3TGlzdC5sZW5ndGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluZGV4ID0gbmV3TGlzdC5pbmRleE9mKG9kbERyYWdnYWJsZXNMaXN0W2luZGV4XSlcbiAgICAgIH1cbiAgICAgIG5ld0xpc3Quc3BsaWNlKGluZGV4LCAwLCBuZXdEcmFnZ2FibGUpXG4gICAgfSlcbiAgICBuZXdEcmFnZ2FibGVzLmZvckVhY2goKG5ld0RyYWdnYWJsZSkgPT4ge1xuICAgICAgaW5kZXhPZk5ld3MucHVzaChuZXdMaXN0LmluZGV4T2YobmV3RHJhZ2dhYmxlKSlcbiAgICB9KVxuICAgIHJldHVybiBuZXdMaXN0XG4gIH1cbn1cblxuY2xhc3MgRmxvYXRSaWdodFN0cmF0ZWd5IGV4dGVuZHMgRmxvYXRMZWZ0U3RyYXRlZ3kge1xuICBjb25zdHJ1Y3RvcihyZWN0YW5nbGUsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcihyZWN0YW5nbGUsIG9wdGlvbnMpXG5cbiAgICB0aGlzLnBhZGRpbmdUb3BSaWdodCA9IG9wdGlvbnMucGFkZGluZ1RvcFJpZ2h0IHx8IG5ldyBQb2ludCg1LCA1KVxuICAgIHRoaXMucGFkZGluZ0JvdHRvbUxlZnQgPSBvcHRpb25zLnBhZGRpbmdCb3R0b21MZWZ0IHx8IG5ldyBQb2ludCgwLCAwKVxuICAgIHRoaXMueUdhcEJldHdlZW5EcmFnZ2FibGVzID0gb3B0aW9ucy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgfHwgMFxuXG4gICAgdGhpcy5wYWRkaW5nQm90dG9tTmVnTGVmdCA9IG5ldyBQb2ludCgtdGhpcy5wYWRkaW5nQm90dG9tTGVmdC54LCB0aGlzLnBhZGRpbmdCb3R0b21MZWZ0LnkpXG4gIH1cblxuICBwb3NpdGlvbmluZyhyZWN0YW5nbGVMaXN0LCBfaW5kZXhlc09mTmV3cykge1xuICAgIGNvbnN0IGJvdW5kUmVjdCA9IHRoaXMuYm91bmRSZWN0XG4gICAgbGV0IGJvdW5kYXJ5UG9pbnRzID0gW2JvdW5kUmVjdC5nZXRQMigpXVxuXG4gICAgcmVjdGFuZ2xlTGlzdC5mb3JFYWNoKChyZWN0LCByZWN0SW5kZXgpID0+IHtcbiAgICAgIGxldCBwb3NpdGlvbiwgaXNWYWxpZCA9IGZhbHNlXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvdW5kYXJ5UG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHBvc2l0aW9uID0gbmV3IFBvaW50KFxuICAgICAgICAgIGJvdW5kYXJ5UG9pbnRzW2ldLnggLSByZWN0LnNpemUueCAtIHRoaXMucGFkZGluZ1RvcFJpZ2h0LngsXG4gICAgICAgICAgaSA+IDAgPyAoYm91bmRhcnlQb2ludHNbaSAtIDFdLnkgKyB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcykgOiAoYm91bmRSZWN0LnBvc2l0aW9uLnkgKyB0aGlzLnBhZGRpbmdUb3BSaWdodC55KVxuICAgICAgICApXG5cbiAgICAgICAgaXNWYWxpZCA9IChwb3NpdGlvbi54ID4gcmVjdC5wb3NpdGlvbi54KVxuICAgICAgICBpZiAoaXNWYWxpZCkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICBwb3NpdGlvbiA9IG5ldyBQb2ludChcbiAgICAgICAgICBib3VuZFJlY3QuZ2V0UDIoKS54ICAtIHJlY3Quc2l6ZS54IC0gdGhpcy5wYWRkaW5nVG9wUmlnaHQueCxcbiAgICAgICAgICBib3VuZGFyeVBvaW50c1tib3VuZGFyeVBvaW50cy5sZW5ndGggLSAxXS55ICsgKHJlY3RJbmRleCA+IDAgPyB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyA6IHRoaXMucGFkZGluZ1RvcFJpZ2h0LnkpXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIHJlY3QucG9zaXRpb24gPSBwb3NpdGlvblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZW1vdmFibGUgJiYgcmVjdC5nZXRQNCgpLnkgPiBib3VuZFJlY3QuZ2V0UDQoKS55KSB7XG4gICAgICAgIHJlY3QucmVtb3ZhYmxlID0gdHJ1ZVxuICAgICAgfVxuICAgICAgYm91bmRhcnlQb2ludHMgPSBhZGRQb2ludFRvQm91bmRQb2ludHMoYm91bmRhcnlQb2ludHMsIHJlY3QuZ2V0UDQoKS5hZGQodGhpcy5wYWRkaW5nQm90dG9tTmVnTGVmdCksIHRydWUpXG4gICAgfSlcbiAgICByZXR1cm4gcmVjdGFuZ2xlTGlzdFxuICB9XG59XG5cbmV4cG9ydCB7IE5vdENyb3NzaW5nU3RyYXRlZ3ksIEZsb2F0TGVmdFN0cmF0ZWd5LCBGbG9hdFJpZ2h0U3RyYXRlZ3kgfVxuIiwiaW1wb3J0IHJhbmdlIGZyb20gJy4vdXRpbHMvcmFuZ2UuanMnXG5pbXBvcnQgcmVtb3ZlSXRlbSBmcm9tICcuL3V0aWxzL3JlbW92ZS1hcnJheS1pdGVtJ1xuaW1wb3J0IGdldERlZmF1bHRDb250YWluZXIgZnJvbSAnLi91dGlscy9nZXQtZGVmYXVsdC1jb250YWluZXInXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnRFbWl0dGVyJ1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tICcuL2dlb21ldHJ5L3JlY3RhbmdsZSdcbmltcG9ydCB7IHRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3RvcnkgfSBmcm9tICcuL2dlb21ldHJ5L2Rpc3RhbmNlcydcbmltcG9ydCB7IHNjb3BlcywgZGVmYXVsdFNjb3BlIH0gZnJvbSAnLi9zY29wZSdcblxuaW1wb3J0IHsgRmxvYXRMZWZ0U3RyYXRlZ3kgfSBmcm9tICcuL3Bvc2l0aW9uaW5nJ1xuaW1wb3J0IHsgQm91bmRUb0VsZW1lbnQgfSBmcm9tICcuL2JvdW5kaW5nJ1xuXG5jb25zdCBhZGRUb0RlZmF1bHRTY29wZSA9IGZ1bmN0aW9uKHRhcmdldCkge1xuICBkZWZhdWx0U2NvcGUuYWRkVGFyZ2V0KHRhcmdldClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFyZ2V0IGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgZHJhZ2dhYmxlcywgb3B0aW9ucyA9IHt9KSB7XG4gICAgc3VwZXIob3B0aW9ucylcbiAgICBjb25zdCB0YXJnZXQgPSB0aGlzXG5cbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHRpbWVFbmQ6IDIwMCxcbiAgICAgIHRpbWVFeGNhbmdlOiA0MDBcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGhpcy5wb3NpdGlvbmluZ1N0cmF0ZWd5ID0gb3B0aW9ucy5zdHJhdGVneSB8fCBuZXcgRmxvYXRMZWZ0U3RyYXRlZ3koXG4gICAgICB0aGlzLmdldFJlY3RhbmdsZS5iaW5kKHRoaXMpLFxuICAgICAge1xuICAgICAgICByYWRpdXM6IDgwLFxuICAgICAgICBnZXREaXN0YW5jZTogdHJhbnNmb3JtZWRTcGFjZURpc3RhbmNlRmFjdG9yeSh7IHg6IDEsIHk6IDQgfSksXG4gICAgICAgIHJlbW92YWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIClcblxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgICBkcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnRhcmdldHMucHVzaCh0YXJnZXQpKVxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZXNcblxuICAgIFRhcmdldC5lbWl0dGVyLmVtaXQoJ3RhcmdldDpjcmVhdGUnLCB0aGlzKVxuXG4gICAgdGhpcy5zdGFydEJvdW5kaW5nKClcbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgc3RhcnRCb3VuZGluZygpIHtcbiAgICB0aGlzLmJvdW5kID0gdGhpcy5vcHRpb25zLmJvdW5kIHx8IEJvdW5kVG9FbGVtZW50LmJvdW5kaW5nKHRoaXMuZWxlbWVudClcbiAgfVxuXG4gIHBvc2l0aW9uaW5nIChkcmFnZ2FibGVzLCBpbmRleGVzT2ZOZXcpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbmluZ1N0cmF0ZWd5LnBvc2l0aW9uaW5nKGRyYWdnYWJsZXMsIGluZGV4ZXNPZk5ldylcbiAgfVxuXG4gIHNvcnRpbmcgKG9sZERyYWdnYWJsZXMsIG5ld0RyYWdnYWJsZXMsIGluZGV4T2ZOZXdzKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25pbmdTdHJhdGVneS5zb3J0aW5nKG9sZERyYWdnYWJsZXMsIG5ld0RyYWdnYWJsZXMsIGluZGV4T2ZOZXdzKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBsZXQgcmVjdGFuZ2xlcywgaW5kZXhlc09mTmV3XG5cbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcyA9IHRoaXMuZHJhZ2dhYmxlcy5maWx0ZXIoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgbGV0IGVsZW1lbnQgPSBkcmFnZ2FibGUuZWxlbWVudC5wYXJlbnROb2RlXG4gICAgICB3aGlsZSAoZWxlbWVudCkge1xuICAgICAgICBpZiAoZWxlbWVudCA9PT0gdGhpcy5lbGVtZW50KSB7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlXG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9KVxuXG4gICAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmxlbmd0aCkge1xuICAgICAgaW5kZXhlc09mTmV3ID0gcmFuZ2UodGhpcy5pbm5lckRyYWdnYWJsZXMubGVuZ3RoKVxuICAgICAgcmVjdGFuZ2xlcyA9IHRoaXMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgICAgfSksIGluZGV4ZXNPZk5ldylcbiAgICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgaW5kZXhlc09mTmV3KVxuICAgICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB0aGlzLmVtaXQoJ3RhcmdldDphZGQnLCBkcmFnZ2FibGUpKVxuICAgIH1cbiAgfVxuXG4gIGdldFJlY3RhbmdsZSgpIHtcbiAgICByZXR1cm4gUmVjdGFuZ2xlLmZyb21FbGVtZW50KHRoaXMuZWxlbWVudCwgdGhpcy5jb250YWluZXIsIHRydWUpXG4gIH1cblxuICBjYXRjaERyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmNhdGNoRHJhZ2dhYmxlKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmNhdGNoRHJhZ2dhYmxlKHRoaXMsIGRyYWdnYWJsZSlcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGFyZ2V0UmVjdGFuZ2xlID0gdGhpcy5nZXRSZWN0YW5nbGUoKVxuICAgICAgY29uc3QgZHJhZ2dhYmxlU3F1YXJlID0gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpLmdldFNxdWFyZSgpXG5cbiAgICAgIHJldHVybiBkcmFnZ2FibGVTcXVhcmUgPCB0YXJnZXRSZWN0YW5nbGUuZ2V0U3F1YXJlKClcbiAgICAgICAgICAgICAgJiYgdGFyZ2V0UmVjdGFuZ2xlLmluY2x1ZGVQb2ludChkcmFnZ2FibGUuZ2V0Q2VudGVyKCkpXG4gICAgfVxuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UmVjdGFuZ2xlKCkucG9zaXRpb25cbiAgfVxuXG4gIGdldFNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UmVjdGFuZ2xlKCkuc2l6ZVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICBzY29wZXMuZm9yRWFjaCgoc2NvcGUpID0+IHJlbW92ZUl0ZW0oc2NvcGUudGFyZ2V0cywgdGhpcykpXG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgfSksIFtdKVxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgW10sIDApXG4gIH1cblxuICBvbkVuZChkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBuZXdEcmFnZ2FibGVzSW5kZXggPSBbXVxuXG4gICAgaWYgKHRoaXMuZ2V0UmVjdGFuZ2xlKCkuaW5jbHVkZVBvaW50KGRyYWdnYWJsZS5nZXRDZW50ZXIoKSkpIHtcbiAgICAgIGRyYWdnYWJsZS5wb3NpdGlvbiA9IHRoaXMuYm91bmQoZHJhZ2dhYmxlLnBvc2l0aW9uLCBkcmFnZ2FibGUuZ2V0U2l6ZSgpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICB0aGlzLmVtaXQoJ3RhcmdldDpiZWZvcmVBZGQnLCBkcmFnZ2FibGUpXG5cbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcyA9IHRoaXMuc29ydGluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcywgW2RyYWdnYWJsZV0sIG5ld0RyYWdnYWJsZXNJbmRleClcbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBuZXdEcmFnZ2FibGVzSW5kZXgpXG5cbiAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIG5ld0RyYWdnYWJsZXNJbmRleClcbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMSkge1xuICAgICAgdGhpcy5hZGRSZW1vdmVPbk1vdmUoZHJhZ2dhYmxlKVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgaW5kZXhlc09mTmV3LCB0aW1lKSB7XG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuc2xpY2UoMCkuZm9yRWFjaCgoZHJhZ2dhYmxlLCBpKSA9PiB7XG4gICAgICBjb25zdCByZWN0ID0gcmVjdGFuZ2xlc1tpXSxcbiAgICAgICAgdGltZUVuZCA9IHRpbWUgfHwgdGltZSA9PT0gMCA/IHRpbWUgOiBpbmRleGVzT2ZOZXcuaW5kZXhPZihpKSAhPT0gLTEgPyB0aGlzLm9wdGlvbnMudGltZUVuZCA6IHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZVxuXG4gICAgICBpZiAocmVjdC5yZW1vdmFibGUpIHtcbiAgICAgICAgZHJhZ2dhYmxlLm1vdmUoZHJhZ2dhYmxlLmluaXRpYWxQb3NpdGlvbiwgdGltZUVuZCwgdHJ1ZSwgdHJ1ZSlcbiAgICAgICAgcmVtb3ZlSXRlbSh0aGlzLmlubmVyRHJhZ2dhYmxlcywgZHJhZ2dhYmxlKVxuICAgICAgICB0aGlzLmVtaXQoJ3RhcmdldDpyZW1vdmUnLCBkcmFnZ2FibGUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkcmFnZ2FibGUubW92ZShyZWN0LnBvc2l0aW9uLCB0aW1lRW5kLCB0cnVlLCB0cnVlKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBhZGQoZHJhZ2dhYmxlLCB0aW1lKSB7XG4gICAgY29uc3QgbmV3RHJhZ2dhYmxlc0luZGV4ID0gdGhpcy5pbm5lckRyYWdnYWJsZXMubGVuZ3RoXG5cbiAgICB0aGlzLmVtaXQoJ3RhcmdldDpiZWZvcmVBZGQnLCBkcmFnZ2FibGUpXG5cbiAgICB0aGlzLnB1c2hJbm5lckRyYWdnYWJsZShkcmFnZ2FibGUpXG4gICAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgbmV3RHJhZ2dhYmxlc0luZGV4LCBkcmFnZ2FibGUpXG5cbiAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIFtuZXdEcmFnZ2FibGVzSW5kZXhdLCB0aW1lIHx8IDApXG4gICAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTEpIHtcbiAgICAgIHRoaXMuYWRkUmVtb3ZlT25Nb3ZlKGRyYWdnYWJsZSlcbiAgICB9XG4gIH1cblxuICBwdXNoSW5uZXJEcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKT09PS0xKSB7XG4gICAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5wdXNoKGRyYWdnYWJsZSlcbiAgICB9XG4gIH1cblxuICBhZGRSZW1vdmVPbk1vdmUoZHJhZ2dhYmxlKSB7XG4gICAgZHJhZ2dhYmxlLm9uKCdkcmFnOm1vdmUnLCB0aGlzLnJlbW92ZUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICB0aGlzLnJlbW92ZShkcmFnZ2FibGUpXG4gICAgfSlcblxuICAgIHRoaXMuZW1pdCgndGFyZ2V0OmFkZCcsIGRyYWdnYWJsZSlcbiAgfVxuXG4gIHJlbW92ZShkcmFnZ2FibGUpIHtcbiAgICBkcmFnZ2FibGUudW5zdWJzY3JpYmUoJ2RyYWc6bW92ZScsIHRoaXMucmVtb3ZlSGFuZGxlcilcblxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpXG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuc3BsaWNlKGluZGV4LCAxKVxuXG4gICAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgW10pXG5cbiAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIFtdKVxuICAgIHRoaXMuZW1pdCgndGFyZ2V0OnJlbW92ZScsIGRyYWdnYWJsZSlcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLm1vdmUoZHJhZ2dhYmxlLmluaXRpYWxQb3NpdGlvbiwgMCwgdHJ1ZSwgdHJ1ZSlcbiAgICAgIHRoaXMuZW1pdCgndGFyZ2V0OnJlbW92ZScsIGRyYWdnYWJsZSlcbiAgICB9KVxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzID0gW11cbiAgfVxuXG4gIGdldFNvcnRlZERyYWdnYWJsZXMoKSB7XG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuc2xpY2UoKVxuICB9XG5cbiAgZ2V0IGNvbnRhaW5lcigpIHtcbiAgICByZXR1cm4gKHRoaXMuX2NvbnRhaW5lciA9IHRoaXMuX2NvbnRhaW5lciB8fCB0aGlzLm9wdGlvbnMuY29udGFpbmVyIHx8IHRoaXMub3B0aW9ucy5wYXJlbnQgfHwgZ2V0RGVmYXVsdENvbnRhaW5lcih0aGlzLmVsZW1lbnQpKVxuICB9XG59XG5cblRhcmdldC5lbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcigpXG5UYXJnZXQuZW1pdHRlci5vbigndGFyZ2V0OmNyZWF0ZScsIGFkZFRvRGVmYXVsdFNjb3BlKVxuIiwiaW1wb3J0IHJlbW92ZUl0ZW0gZnJvbSAnLi91dGlscy9yZW1vdmUtYXJyYXktaXRlbSdcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudEVtaXR0ZXInXG5pbXBvcnQgRHJhZ2dhYmxlIGZyb20gJy4vZHJhZ2dhYmxlJ1xuaW1wb3J0IFRhcmdldCBmcm9tICcuL3RhcmdldCdcblxuY29uc3Qgc2NvcGVzID0gW11cblxuY2xhc3MgU2NvcGUgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvcihkcmFnZ2FibGVzLCB0YXJnZXRzLCBvcHRpb25zPXt9KSB7XG4gICAgc3VwZXIob3B0aW9ucylcbiAgICBzY29wZXMuZm9yRWFjaCgoc2NvcGUpID0+IHtcbiAgICAgIGlmIChkcmFnZ2FibGVzKSB7XG4gICAgICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICAgICAgcmVtb3ZlSXRlbShzY29wZS5kcmFnZ2FibGVzLCBkcmFnZ2FibGUpXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIGlmICh0YXJnZXRzKSB7XG4gICAgICAgIHRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB7XG4gICAgICAgICAgcmVtb3ZlSXRlbShzY29wZS50YXJnZXRzLCB0YXJnZXQpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZXMgfHwgW11cbiAgICB0aGlzLnRhcmdldHMgPSB0YXJnZXRzIHx8IFtdXG4gICAgc2NvcGVzLnB1c2godGhpcylcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICB0aW1lRW5kOiAob3B0aW9ucy50aW1lRW5kKSB8fCA0MDBcbiAgICB9XG5cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUuZHJhZ0VuZEFjdGlvbiA9ICgpID0+IHRoaXMub25FbmQoZHJhZ2dhYmxlKVxuICAgIH0pXG4gIH1cblxuICBhZGREcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxuICAgIGRyYWdnYWJsZS5kcmFnRW5kQWN0aW9uID0gKCkgPT4gdGhpcy5vbkVuZChkcmFnZ2FibGUpXG4gIH1cblxuICBhZGRUYXJnZXQodGFyZ2V0KSB7XG4gICAgdGhpcy50YXJnZXRzLnB1c2godGFyZ2V0KVxuICB9XG5cbiAgb25FbmQoZHJhZ2dhYmxlKSB7XG4gICAgY29uc3Qgc2hvdFRhcmdldHMgPSB0aGlzLnRhcmdldHMuZmlsdGVyKCh0YXJnZXQpID0+IHtcbiAgICAgIHJldHVybiB0YXJnZXQuZHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkgIT09IC0xXG4gICAgfSkuZmlsdGVyKCh0YXJnZXQpID0+IHtcbiAgICAgIHJldHVybiB0YXJnZXQuY2F0Y2hEcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICAgIH0pLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIHJldHVybiBhLmdldFJlY3RhbmdsZSgpLmdldFNxdWFyZSgpIC0gYi5nZXRSZWN0YW5nbGUoKS5nZXRTcXVhcmUoKVxuICAgIH0pXG5cbiAgICBpZiAoc2hvdFRhcmdldHMubGVuZ3RoKSB7XG4gICAgICBzaG90VGFyZ2V0c1swXS5vbkVuZChkcmFnZ2FibGUpXG4gICAgfSBlbHNlIGlmIChkcmFnZ2FibGUudGFyZ2V0cy5sZW5ndGgpIHtcbiAgICAgIGRyYWdnYWJsZS5waW5Qb3NpdGlvbihkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uLCB0aGlzLm9wdGlvbnMudGltZUVuZClcbiAgICB9XG5cbiAgICB0aGlzLmVtaXQoJ3Njb3BlOmNoYW5nZScpXG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLnRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB0YXJnZXQucmVzZXQoKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnJlZnJlc2goKSlcbiAgICB0aGlzLnRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB0YXJnZXQucmVmcmVzaCgpKVxuICB9XG5cbiAgZ2V0IHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXRzLm1hcCgodGFyZ2V0KSA9PiB7XG4gICAgICByZXR1cm4gdGFyZ2V0LmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4gdGhpcy5kcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSlcbiAgICB9KVxuICB9XG5cbiAgc2V0IHBvc2l0aW9ucyhwb3NpdGlvbnMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gJ3dyb25nIGFycmF5IGxlbmd0aCdcbiAgICBpZiAocG9zaXRpb25zLmxlbmd0aCA9PT0gdGhpcy50YXJnZXRzLmxlbmd0aCkge1xuICAgICAgdGhpcy50YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4gdGFyZ2V0LnJlc2V0KCkpXG5cbiAgICAgIHBvc2l0aW9ucy5mb3JFYWNoKCh0YXJnZXRJbmRleGVzLCBpKSA9PiB7XG4gICAgICAgIHRhcmdldEluZGV4ZXMuZm9yRWFjaCgoaW5kZXgpID0+IHtcbiAgICAgICAgICB0aGlzLnRhcmdldHNbaV0uYWRkKHRoaXMuZHJhZ2dhYmxlc1tpbmRleF0pXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBtZXNzYWdlXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IGRlZmF1bHRTY29wZSA9IG5ldyBTY29wZSgpXG5cbmZ1bmN0aW9uIHNjb3BlKGZuKSB7XG4gIGNvbnN0IGN1cnJlbnRTY29wZSA9IG5ldyBTY29wZSgpXG5cbiAgY29uc3QgYWRkRHJhZ2dhYmxlVG9TY29wZSA9IGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICAgIGN1cnJlbnRTY29wZS5hZGREcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICAgIERyYWdnYWJsZS5lbWl0dGVyLmludGVycnVwdCgpXG4gIH1cblxuICBjb25zdCBhZGRUYXJnZXRUb1Njb3BlID0gZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgY3VycmVudFNjb3BlLmFkZFRhcmdldCh0YXJnZXQpXG4gICAgRHJhZ2dhYmxlLmVtaXR0ZXIuaW50ZXJydXB0KClcbiAgfVxuXG4gIERyYWdnYWJsZS5lbWl0dGVyLnByZXBlbmRPbignZHJhZ2dhYmxlOmNyZWF0ZScsIGFkZERyYWdnYWJsZVRvU2NvcGUpXG4gIFRhcmdldC5lbWl0dGVyLnByZXBlbmRPbigndGFyZ2V0OmNyZWF0ZScsIGFkZFRhcmdldFRvU2NvcGUpXG4gIGZuLmNhbGwoKVxuICBEcmFnZ2FibGUuZW1pdHRlci51bnN1YnNjcmliZSgnZHJhZ2dhYmxlOmNyZWF0ZScsIGFkZERyYWdnYWJsZVRvU2NvcGUpXG4gIFRhcmdldC5lbWl0dGVyLnVuc3Vic2NyaWJlKCd0YXJnZXQ6Y3JlYXRlJywgYWRkVGFyZ2V0VG9TY29wZSlcbiAgcmV0dXJuIGN1cnJlbnRTY29wZVxufVxuXG5leHBvcnQgeyBzY29wZXMsIGRlZmF1bHRTY29wZSwgU2NvcGUsIHNjb3BlIH1cbiIsImZ1bmN0aW9uIGNoZWNrU3VwcG9ydFBhc3NpdmVFdmVudHMoKSB7XG4gIGxldCBwYXNzaXZlU3VwcG9ydGVkID0gZmFsc2VcblxuICB0cnkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdwYXNzaXZlJywge1xuICAgICAgZ2V0KCkge1xuICAgICAgICByZXR1cm4gKHBhc3NpdmVTdXBwb3J0ZWQgPSB0cnVlKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndGVzdCcsIG9wdGlvbnMsIG9wdGlvbnMpXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Rlc3QnLCBvcHRpb25zLCBvcHRpb25zKVxuICB9IGNhdGNoIChfZXJyKSB7XG4gICAgcGFzc2l2ZVN1cHBvcnRlZCA9IGZhbHNlXG4gIH1cblxuICByZXR1cm4gcGFzc2l2ZVN1cHBvcnRlZFxufVxuXG5leHBvcnQgY29uc3QgaXNTdXBwb3J0UGFzc2l2ZUV2ZW50cyA9IGNoZWNrU3VwcG9ydFBhc3NpdmVFdmVudHMoKVxuXG5mdW5jdGlvbiBldmVudE9wdGlvbnMob3B0aW9ucywgZmFsbGJhY2sgPSBmYWxzZSkge1xuICByZXR1cm4gaXNTdXBwb3J0UGFzc2l2ZUV2ZW50cyA/IG9wdGlvbnMgOiBmYWxsYmFja1xufVxuXG5leHBvcnQgeyBldmVudE9wdGlvbnMgfVxuXG5leHBvcnQgZGVmYXVsdCBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0aHJvdHRsZShmdW5jLCB3YWl0KSB7XG4gIGxldCBsYXN0VGltZSA9IDBcblxuICByZXR1cm4gZnVuY3Rpb24gZXhlY3V0ZWRGdW5jdGlvbigpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpc1xuICAgIGNvbnN0IGFyZ3MgPSBhcmd1bWVudHNcblxuICAgIGNvbnN0IG5vdyA9IERhdGUubm93KClcbiAgICBpZiAobm93IC0gbGFzdFRpbWUgPj0gd2FpdCkge1xuICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKVxuICAgICAgbGFzdFRpbWUgPSBub3dcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBnZXREZWZhdWx0Q29udGFpbmVyIGZyb20gJy4vdXRpbHMvZ2V0LWRlZmF1bHQtY29udGFpbmVyJ1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50RW1pdHRlcidcbmltcG9ydCBnZXRTdHlsZVByb3BlcnR5IGZyb20gJ2Rlc2FuZHJvLWdldC1zdHlsZS1wcm9wZXJ0eSdcbmltcG9ydCB7IEJvdW5kVG9FbGVtZW50IH0gZnJvbSAnLi9ib3VuZGluZydcbmltcG9ydCBQb2ludCBmcm9tICcuL2dlb21ldHJ5L3BvaW50J1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tICcuL2dlb21ldHJ5L3JlY3RhbmdsZSdcbmltcG9ydCB7IGRlZmF1bHRTY29wZSB9IGZyb20gJy4vc2NvcGUnXG5pbXBvcnQgaXNTdXBwb3J0UGFzc2l2ZUV2ZW50cyBmcm9tICcuL3V0aWxzL2lzLXN1cHBvcnQtcGFzc2l2ZS1ldmVudHMnXG5pbXBvcnQgdGhyb3R0bGUgZnJvbSAnLi91dGlscy90aHJvdHRsZSdcblxuY29uc3QgdGhyb3R0bGVkRHJhZ092ZXIgPSAoY2FsbGJhY2ssIGR1cmF0aW9uKSA9PiB7XG4gIGNvbnN0IHRocm90dGxlZENhbGxiYWNrID0gdGhyb3R0bGUoKGV2ZW50KSA9PiBjYWxsYmFjayhldmVudCksIGR1cmF0aW9uKVxuICByZXR1cm4gZXZlbnQgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB0aHJvdHRsZWRDYWxsYmFjayhldmVudClcbiAgfVxufVxuXG5jb25zdCBwYXNzaXZlRmFsc2UgPSBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzID8geyBwYXNzaXZlOiBmYWxzZSB9IDogZmFsc2VcblxuY29uc3QgaXNUb3VjaCA9ICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvd1xuY29uc3QgbW91c2VFdmVudHMgPSB7XG4gIHN0YXJ0OiAnbW91c2Vkb3duJyxcbiAgbW92ZTogJ21vdXNlbW92ZScsXG4gIGVuZDogJ21vdXNldXAnXG59XG5jb25zdCB0b3VjaEV2ZW50cyA9IHtcbiAgc3RhcnQ6ICd0b3VjaHN0YXJ0JyxcbiAgbW92ZTogJ3RvdWNobW92ZScsXG4gIGVuZDogJ3RvdWNoZW5kJ1xufVxuY29uc3QgZHJhZ2dhYmxlcyA9IFtdXG5jb25zdCB0cmFuc2Zvcm1Qcm9wZXJ0eSA9IGdldFN0eWxlUHJvcGVydHkoJ3RyYW5zZm9ybScpXG5jb25zdCB0cmFuc2l0aW9uUHJvcGVydHkgPSBnZXRTdHlsZVByb3BlcnR5KCd0cmFuc2l0aW9uJylcblxuZnVuY3Rpb24gZ2V0VG91Y2hCeUlEKGVsZW1lbnQsIHRvdWNoSWQpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50LmNoYW5nZWRUb3VjaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGVsZW1lbnQuY2hhbmdlZFRvdWNoZXNbaV0uaWRlbnRpZmllciA9PT0gdG91Y2hJZCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQuY2hhbmdlZFRvdWNoZXNbaV1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmZ1bmN0aW9uIHByZXZlbnREb3VibGVJbml0KGRyYWdnYWJsZSkge1xuICBjb25zdCBtZXNzYWdlID0gXCJmb3IgdGhpcyBlbGVtZW50IERyYWdlZS5EcmFnZ2FibGUgaXMgYWxyZWFkeSBleGlzdCwgZG9uJ3QgY3JlYXRlIGl0IHR3aWNlIFwiXG4gIGlmIChkcmFnZ2FibGVzLnNvbWUoKGV4aXN0aW5nKSA9PiBkcmFnZ2FibGUuZWxlbWVudCA9PT0gZXhpc3RpbmcuZWxlbWVudCkpIHtcbiAgICB0aHJvdyBtZXNzYWdlXG4gIH1cbiAgZHJhZ2dhYmxlcy5wdXNoKGRyYWdnYWJsZSlcbn1cblxuZnVuY3Rpb24gYWRkVG9EZWZhdWx0U2NvcGUoZHJhZ2dhYmxlKSB7XG4gIGRlZmF1bHRTY29wZS5hZGREcmFnZ2FibGUoZHJhZ2dhYmxlKVxufVxuXG5mdW5jdGlvbiBjb3B5U3R5bGVzKHNvdXJjZSwgZGVzdGluYXRpb24pIHtcbiAgY29uc3QgY3MgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShzb3VyY2UpXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGtleSA9IGNzW2ldXG4gICAgaWYgKChrZXkuaW5kZXhPZigndHJhbnNpdGlvbicpIDwgMCkgJiYgKGtleS5pbmRleE9mKCd0cmFuc2Zvcm0nKSA8IDApKSB7XG4gICAgICBkZXN0aW5hdGlvbi5zdHlsZVtrZXldID0gY3Nba2V5XVxuICAgIH1cbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc291cmNlLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgY29weVN0eWxlcyhzb3VyY2UuY2hpbGRyZW5baV0sIGRlc3RpbmF0aW9uLmNoaWxkcmVuW2ldKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYWdnYWJsZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcihvcHRpb25zKVxuICAgIHRoaXMudGFyZ2V0cyA9IFtdXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9uc1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgICBwcmV2ZW50RG91YmxlSW5pdCh0aGlzKVxuICAgIERyYWdnYWJsZS5lbWl0dGVyLmVtaXQoJ2RyYWdnYWJsZTpjcmVhdGUnLCB0aGlzKVxuICAgIHRoaXMuX2VuYWJsZSA9IHRydWVcbiAgICB0aGlzLnN0YXJ0Qm91bmRpbmcoKVxuICAgIHRoaXMuc3RhcnRQb3NpdGlvbmluZygpXG4gICAgdGhpcy5zdGFydExpc3RlbmluZygpXG4gIH1cblxuICBzdGFydEJvdW5kaW5nKCkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuYm91bmQpIHtcbiAgICAgIHRoaXMuYm91bmRpbmcgPSB7IGJvdW5kOiB0aGlzLm9wdGlvbnMuYm91bmQgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmJvdW5kaW5nID0gbmV3IEJvdW5kVG9FbGVtZW50KHRoaXMuY29udGFpbmVyLCB0aGlzLmNvbnRhaW5lcilcbiAgICB9XG4gIH1cblxuICBzdGFydFBvc2l0aW9uaW5nKCkge1xuICAgIHRoaXMuX3NldERlZmF1bHRUcmFuc2l0aW9uKClcbiAgICB0aGlzLm9mZnNldCA9IFBvaW50LmVsZW1lbnRPZmZzZXQodGhpcy5lbGVtZW50LCB0aGlzLmNvbnRhaW5lciwgdHJ1ZSlcbiAgICB0aGlzLnBpbm5lZFBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICB0aGlzLmluaXRpYWxQb3NpdGlvbiA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbiB8fCB0aGlzLm9mZnNldFxuXG4gICAgdGhpcy5waW5Qb3NpdGlvbih0aGlzLmluaXRpYWxQb3NpdGlvbilcblxuICAgIGlmICh0aGlzLmJvdW5kaW5nLnJlZnJlc2gpIHtcbiAgICAgIHRoaXMuYm91bmRpbmcucmVmcmVzaCgpXG4gICAgfVxuICB9XG5cbiAgc3RhcnRMaXN0ZW5pbmcoKSB7XG4gICAgdGhpcy5fZHJhZ1N0YXJ0ID0gKGV2ZW50KSA9PiB0aGlzLmRyYWdTdGFydChldmVudClcbiAgICB0aGlzLl9kcmFnTW92ZSA9IChldmVudCkgPT4gdGhpcy5kcmFnTW92ZShldmVudClcbiAgICB0aGlzLl9kcmFnRW5kID0gKGV2ZW50KSA9PiB0aGlzLmRyYWdFbmQoZXZlbnQpXG4gICAgdGhpcy5fbmF0aXZlRHJhZ1N0YXJ0ID0gKGV2ZW50KSA9PiB0aGlzLm5hdGl2ZURyYWdTdGFydChldmVudClcbiAgICB0aGlzLl9uYXRpdmVEcmFnT3ZlciA9IHRocm90dGxlZERyYWdPdmVyKChldmVudCkgPT4gdGhpcy5uYXRpdmVEcmFnT3ZlcihldmVudCksIHRoaXMuZHJhZ092ZXJUaHJvdHRsZUR1cmF0aW9uKVxuICAgIHRoaXMuX25hdGl2ZURyYWdFbmQgPSAoZXZlbnQpID0+IHRoaXMubmF0aXZlRHJhZ0VuZChldmVudClcbiAgICB0aGlzLl9uYXRpdmVEcm9wID0gKGV2ZW50KSA9PiB0aGlzLm5hdGl2ZURyb3AoZXZlbnQpXG4gICAgdGhpcy5fc2Nyb2xsID0gKGV2ZW50KSA9PiB0aGlzLm9uU2Nyb2xsKGV2ZW50KVxuXG4gICAgdGhpcy5oYW5kbGVyLmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydCwgcGFzc2l2ZUZhbHNlKVxuICAgIHRoaXMuaGFuZGxlci5hZGRFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQsIHBhc3NpdmVGYWxzZSlcbiAgfVxuXG4gIGdldFNpemUoKSB7XG4gICAgcmV0dXJuIFBvaW50LmVsZW1lbnRTaXplKHRoaXMuZWxlbWVudClcbiAgfVxuXG4gIGdldFBvc2l0aW9uKCkge1xuICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLm9mZnNldC5hZGQodGhpcy5fdHJhbnNmb3JtUG9zaXRpb24gfHwgbmV3IFBvaW50KDAsIDApKVxuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uXG4gIH1cblxuICBnZXRDZW50ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb24uYWRkKHRoaXMuZ2V0U2l6ZSgpLm11bHQoMC41KSlcbiAgfVxuXG4gIF9zZXREZWZhdWx0VHJhbnNpdGlvbiAoKSB7XG4gICAgaWYgKCF0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNpdGlvblByb3BlcnR5XSkge1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV0gPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsZW1lbnQpW3RyYW5zaXRpb25Qcm9wZXJ0eV1cbiAgICB9XG4gIH1cblxuICBfc2V0VHJhbnNpdGlvbih0aW1lKSB7XG4gICAgbGV0IHRyYW5zaXRpb24gPSB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNpdGlvblByb3BlcnR5XVxuICAgIGNvbnN0IHRyYW5zaXRpb25Dc3MgPSBgdHJhbnNmb3JtICR7dGltZX1tc2BcblxuICAgIGlmICghL3RyYW5zZm9ybSBcXGQqbT9zLy50ZXN0KHRyYW5zaXRpb24pKSB7XG4gICAgICBpZiAodHJhbnNpdGlvbikge1xuICAgICAgICB0cmFuc2l0aW9uICs9IGAsICR7dHJhbnNpdGlvbkNzc31gXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cmFuc2l0aW9uID0gdHJhbnNpdGlvbkNzc1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0cmFuc2l0aW9uID0gdHJhbnNpdGlvbi5yZXBsYWNlKC90cmFuc2Zvcm0gXFxkKm0/cy9nLCB0cmFuc2l0aW9uQ3NzKVxuICAgIH1cblxuICAgIGlmICh0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNpdGlvblByb3BlcnR5XSAhPT0gdHJhbnNpdGlvbikge1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV0gPSB0cmFuc2l0aW9uXG4gICAgfVxuICB9XG5cbiAgX3NldFRyYW5zbGF0ZShwb2ludCkge1xuICAgIHRoaXMuX3RyYW5zZm9ybVBvc2l0aW9uID0gcG9pbnRcbiAgICBjb25zdCB0cmFuc2xhdGVDc3MgPSBgdHJhbnNsYXRlM2QoJHtwb2ludC54fXB4LCAke3BvaW50Lnl9cHgsIDBweClgXG5cbiAgICBsZXQgdHJhbnNmb3JtID0gdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BlcnR5XVxuXG4gICAgaWYgKHRoaXMuc2hvdWxkUmVtb3ZlWmVyb1RyYW5zbGF0ZSAmJiBwb2ludC54ID09PSAwICYmIHBvaW50LnkgPT09IDApIHtcbiAgICAgIHRyYW5zZm9ybSA9IHRyYW5zZm9ybS5yZXBsYWNlKC90cmFuc2xhdGUzZFxcKFteKV0rXFwpLywgJycpXG4gICAgfSBlbHNlIGlmICghL3RyYW5zbGF0ZTNkXFwoW14pXStcXCkvLnRlc3QodHJhbnNmb3JtKSkge1xuICAgICAgaWYgKHRyYW5zZm9ybSkge1xuICAgICAgICB0cmFuc2Zvcm0gKz0gJyAnXG4gICAgICB9XG4gICAgICB0cmFuc2Zvcm0gKz0gdHJhbnNsYXRlQ3NzXG4gICAgfSBlbHNlIHtcbiAgICAgIHRyYW5zZm9ybSA9IHRyYW5zZm9ybS5yZXBsYWNlKC90cmFuc2xhdGUzZFxcKFteKV0rXFwpLywgdHJhbnNsYXRlQ3NzKVxuICAgIH1cblxuICAgIGlmICh0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcGVydHldICE9PSB0cmFuc2Zvcm0pIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wZXJ0eV0gPSB0cmFuc2Zvcm1cbiAgICB9XG4gIH1cblxuICBtb3ZlKHBvaW50LCB0aW1lPTAsIGlzU2lsZW50PWZhbHNlKSB7XG4gICAgcG9pbnQgPSBwb2ludC5jbG9uZSgpXG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvaW50XG5cbiAgICB0aGlzLl9zZXRUcmFuc2l0aW9uKHRpbWUpXG4gICAgdGhpcy5fc2V0VHJhbnNsYXRlKHBvaW50LnN1Yih0aGlzLm9mZnNldCkpXG5cbiAgICBpZiAoIWlzU2lsZW50KSB7XG4gICAgICB0aGlzLmVtaXQoJ2RyYWc6bW92ZScpXG4gICAgfVxuICB9XG5cbiAgcGluUG9zaXRpb24ocG9pbnQsIHRpbWU9MCwgc2lsZW50PXRydWUpIHtcbiAgICB0aGlzLnBpbm5lZFBvc2l0aW9uID0gcG9pbnQuY2xvbmUoKVxuICAgIHRoaXMubW92ZSh0aGlzLnBpbm5lZFBvc2l0aW9uLCB0aW1lLCBzaWxlbnQpXG4gIH1cblxuICByZXNldFBvc2l0aW9uVG9Jbml0aWFsICgpIHtcbiAgICB0aGlzLnBpblBvc2l0aW9uKHRoaXMuaW5pdGlhbFBvc2l0aW9uKVxuICB9XG5cbiAgcmVmcmVzaFBvc2l0aW9uICgpIHtcbiAgICB0aGlzLnNldFBvc2l0aW9uKHRoaXMuZ2V0UG9zaXRpb24oKSlcbiAgfVxuXG4gIHNldFBvc2l0aW9uKHBvaW50KSB7XG4gICAgcG9pbnQgPSBwb2ludC5jbG9uZSgpXG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvaW50XG4gICAgdGhpcy5fc2V0VHJhbnNpdGlvbigwKVxuICAgIHRoaXMuX3NldFRyYW5zbGF0ZShwb2ludC5zdWIodGhpcy5vZmZzZXQpKVxuICB9XG5cbiAgZGV0ZXJtaW5lRGlyZWN0aW9uKHBvaW50KSB7XG4gICAgdGhpcy5fcHJldmlvdXNEaXJlY3Rpb25Qb3NpdGlvbiB8fD0gdGhpcy5fc3RhcnRQb3NpdGlvblxuXG4gICAgdGhpcy5sZWZ0RGlyZWN0aW9uID0gKHRoaXMuX3ByZXZpb3VzRGlyZWN0aW9uUG9zaXRpb24ueCA8IHBvaW50LngpXG4gICAgdGhpcy5yaWdodERpcmVjdGlvbiA9ICh0aGlzLl9wcmV2aW91c0RpcmVjdGlvblBvc2l0aW9uLnggPiBwb2ludC54KVxuICAgIHRoaXMudXBEaXJlY3Rpb24gPSAodGhpcy5fcHJldmlvdXNEaXJlY3Rpb25Qb3NpdGlvbi55ID4gcG9pbnQueSlcbiAgICB0aGlzLmRvd25EaXJlY3Rpb24gPSAodGhpcy5fcHJldmlvdXNEaXJlY3Rpb25Qb3NpdGlvbi55IDwgcG9pbnQueSlcblxuICAgIHRoaXMuX3ByZXZpb3VzRGlyZWN0aW9uUG9zaXRpb24gPSBwb2ludFxuICB9XG5cbiAgc2VlbXNTY3JvbGxpbmcoKSB7XG4gICAgcmV0dXJuICgrbmV3IERhdGUoKSAtIHRoaXMuX3N0YXJ0VG91Y2hUaW1lc3RhbXApIDwgdGhpcy50b3VjaERyYWdnaW5nVGhyZXNob2xkXG4gIH1cblxuICBzaG91bGRVc2VOYXRpdmVEcmFnQW5kRHJvcCgpIHtcbiAgICBpZiAodGhpcy5pc1RvdWNoRXZlbnQpIHtcbiAgICAgIHJldHVybiB0aGlzLm5hdGl2ZURyYWdBbmREcm9wICYmIHRoaXMuZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wT25Ub3VjaFxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5uYXRpdmVEcmFnQW5kRHJvcFxuICAgIH1cbiAgfVxuXG4gIGRyYWdTdGFydChldmVudCkge1xuICAgIGlmICghdGhpcy5fZW5hYmxlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5zdG9wUHJvcGFnYXRpb25PbkRyYWdTdGFydCkge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICB9XG5cbiAgICB0aGlzLmlzVG91Y2hFdmVudCA9IChpc1RvdWNoICYmIChldmVudCBpbnN0YW5jZW9mIHdpbmRvdy5Ub3VjaEV2ZW50KSlcblxuICAgIHRoaXMudG91Y2hQb2ludCA9IHRoaXMuX3N0YXJ0VG91Y2hQb2ludCA9IG5ldyBQb2ludChcbiAgICAgIHRoaXMuaXNUb3VjaEV2ZW50ID8gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVggOiBldmVudC5jbGllbnRYLFxuICAgICAgdGhpcy5pc1RvdWNoRXZlbnQgPyBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWSA6IGV2ZW50LmNsaWVudFlcbiAgICApXG5cbiAgICB0aGlzLl9zdGFydFBvc2l0aW9uID0gdGhpcy5nZXRQb3NpdGlvbigpXG4gICAgaWYgKHRoaXMuaXNUb3VjaEV2ZW50KSB7XG4gICAgICB0aGlzLl90b3VjaElkID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uaWRlbnRpZmllclxuICAgICAgdGhpcy5fc3RhcnRUb3VjaFRpbWVzdGFtcCA9ICtuZXcgRGF0ZSgpXG4gICAgfVxuXG4gICAgdGhpcy5fc3RhcnRXaW5kb3dTY3JvbGxQb2ludCA9IHRoaXMud2luZG93U2Nyb2xsUG9pbnRcbiAgICB0aGlzLl9zdGFydFBhcmVudHNTY3JvbGxQb2ludCA9IHRoaXMucGFyZW50c1Njcm9sbFBvaW50XG5cbiAgICBpZiAoZXZlbnQudGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJbnB1dEVsZW1lbnQgfHxcbiAgICAgICAgICBldmVudC50YXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElucHV0RWxlbWVudCkge1xuICAgICAgZXZlbnQudGFyZ2V0LmZvY3VzKClcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zaG91bGRVc2VOYXRpdmVEcmFnQW5kRHJvcCgpKSB7XG4gICAgICBpZiAodGhpcy5pc1RvdWNoRXZlbnQgJiYgdGhpcy5lbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3BPblRvdWNoKSB7XG4gICAgICAgIGNvbnN0IGVtdWxhdGVPbkZpcnN0TW92ZSA9IChldmVudCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLnNlZW1zU2Nyb2xsaW5nKCkpIHtcbiAgICAgICAgICAgIHRoaXMuY2FuY2VsRHJhZ2dpbmcoKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcChldmVudClcbiAgICAgICAgICB9XG4gICAgICAgICAgY2FuY2VsRW11bGF0aW9uKClcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjYW5jZWxFbXVsYXRpb24gPSAoKSA9PiB7XG4gICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCBlbXVsYXRlT25GaXJzdE1vdmUpXG4gICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIGNhbmNlbEVtdWxhdGlvbilcbiAgICAgICAgfVxuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgZW11bGF0ZU9uRmlyc3RNb3ZlLCBwYXNzaXZlRmFsc2UpXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCBjYW5jZWxFbXVsYXRpb24sIHBhc3NpdmVGYWxzZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCB0aGlzLl9uYXRpdmVEcmFnU3RhcnQpXG4gICAgICAgIHRoaXMuZWxlbWVudC5kcmFnZ2FibGUgPSB0cnVlXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9uYXRpdmVEcmFnRW5kLCBwYXNzaXZlRmFsc2UpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUsIHBhc3NpdmVGYWxzZSlcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUsIHBhc3NpdmVGYWxzZSlcblxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQsIHBhc3NpdmVGYWxzZSlcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kLCBwYXNzaXZlRmFsc2UpXG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX3Njcm9sbClcbiAgICB0aGlzLnBhcmVudHMuZm9yRWFjaCgocCkgPT4gcC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9zY3JvbGwpKVxuXG4gICAgdGhpcy5lbWl0KCdkcmFnOnN0YXJ0JylcbiAgfVxuXG4gIGRyYWdNb3ZlKGV2ZW50KSB7XG4gICAgbGV0IHRvdWNoXG5cbiAgICB0aGlzLmlzRHJhZ2dpbmcgPSB0cnVlXG5cbiAgICB0aGlzLmlzVG91Y2hFdmVudCA9IChpc1RvdWNoICYmIChldmVudCBpbnN0YW5jZW9mIHdpbmRvdy5Ub3VjaEV2ZW50KSlcbiAgICBpZiAodGhpcy5pc1RvdWNoRXZlbnQpIHtcbiAgICAgIHRvdWNoID0gZ2V0VG91Y2hCeUlEKGV2ZW50LCB0aGlzLl90b3VjaElkKVxuXG4gICAgICBpZiAoIXRvdWNoKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5zZWVtc1Njcm9sbGluZygpKSB7XG4gICAgICAgIHRoaXMuY2FuY2VsRHJhZ2dpbmcoKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB0aGlzLnRvdWNoUG9pbnQgPSBuZXcgUG9pbnQoXG4gICAgICB0aGlzLmlzVG91Y2hFdmVudCA/IHRvdWNoLnBhZ2VYIDogZXZlbnQuY2xpZW50WCxcbiAgICAgIHRoaXMuaXNUb3VjaEV2ZW50ID8gdG91Y2gucGFnZVkgOiBldmVudC5jbGllbnRZXG4gICAgKVxuXG4gICAgbGV0IHBvaW50ID0gdGhpcy5fc3RhcnRQb3NpdGlvbi5hZGQodGhpcy50b3VjaFBvaW50LnN1Yih0aGlzLl9zdGFydFRvdWNoUG9pbnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMud2luZG93U2Nyb2xsUG9pbnQuc3ViKHRoaXMuX3N0YXJ0V2luZG93U2Nyb2xsUG9pbnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMucGFyZW50c1Njcm9sbFBvaW50LnN1Yih0aGlzLl9zdGFydFBhcmVudHNTY3JvbGxQb2ludCkpXG5cbiAgICBwb2ludCA9IHRoaXMuYm91bmRpbmcuYm91bmQocG9pbnQsIHRoaXMuZ2V0U2l6ZSgpKVxuICAgIHRoaXMuZGV0ZXJtaW5lRGlyZWN0aW9uKHBvaW50KVxuICAgIHRoaXMubW92ZShwb2ludClcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZHJhZ2VlLWFjdGl2ZScpXG4gIH1cblxuICBkcmFnRW5kKGV2ZW50KSB7XG4gICAgdGhpcy5pc1RvdWNoRXZlbnQgPSAoaXNUb3VjaCAmJiAoZXZlbnQgaW5zdGFuY2VvZiB3aW5kb3cuVG91Y2hFdmVudCkpXG5cbiAgICBpZiAodGhpcy5pc1RvdWNoRXZlbnQgJiYgIWdldFRvdWNoQnlJRChldmVudCwgdGhpcy5fdG91Y2hJZCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLmlzRHJhZ2dpbmcpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfVxuXG4gICAgdGhpcy5kcmFnRW5kQWN0aW9uKClcbiAgICB0aGlzLmVtaXQoJ2RyYWc6ZW5kJylcbiAgICB0aGlzLmNhbmNlbERyYWdnaW5nKClcblxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdlZS1hY3RpdmUnKSlcbiAgfVxuXG4gIG9uU2Nyb2xsKF9ldmVudCkge1xuICAgIGxldCBwb2ludCA9IHRoaXMuX3N0YXJ0UG9zaXRpb24uYWRkKHRoaXMudG91Y2hQb2ludC5zdWIodGhpcy5fc3RhcnRUb3VjaFBvaW50KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZCh0aGlzLndpbmRvd1Njcm9sbFBvaW50LnN1Yih0aGlzLl9zdGFydFdpbmRvd1Njcm9sbFBvaW50KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZCh0aGlzLnBhcmVudHNTY3JvbGxQb2ludC5zdWIodGhpcy5fc3RhcnRQYXJlbnRzU2Nyb2xsUG9pbnQpKVxuXG4gICAgcG9pbnQgPSB0aGlzLmJvdW5kaW5nLmJvdW5kKHBvaW50LCB0aGlzLmdldFNpemUoKSlcbiAgICBpZiAoIXRoaXMubmF0aXZlRHJhZ0FuZERyb3ApIHtcbiAgICAgIHRoaXMuZGV0ZXJtaW5lRGlyZWN0aW9uKHBvaW50KVxuICAgICAgdGhpcy5tb3ZlKHBvaW50KVxuICAgIH1cbiAgfVxuXG4gIG5hdGl2ZURyYWdTdGFydChldmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQnLCAnRmlyZUZveCBmaXgnKVxuICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gJ21vdmUnXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCB0aGlzLl9uYXRpdmVEcmFnT3ZlcilcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgdGhpcy5fbmF0aXZlRHJvcClcbiAgfVxuXG4gIG5hdGl2ZURyYWdPdmVyKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gJ21vdmUnXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RyYWdlZS1wbGFjZWhvbGRlcicpXG4gICAgaWYgKGV2ZW50LmNsaWVudFggPT09IDAgJiYgZXZlbnQuY2xpZW50WSA9PT0gMCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy50b3VjaFBvaW50ID0gbmV3IFBvaW50KGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpXG4gICAgbGV0IHBvaW50ID0gdGhpcy5fc3RhcnRQb3NpdGlvbi5hZGQodGhpcy50b3VjaFBvaW50LnN1Yih0aGlzLl9zdGFydFRvdWNoUG9pbnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMud2luZG93U2Nyb2xsUG9pbnQuc3ViKHRoaXMuX3N0YXJ0V2luZG93U2Nyb2xsUG9pbnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMucGFyZW50c1Njcm9sbFBvaW50LnN1Yih0aGlzLl9zdGFydFBhcmVudHNTY3JvbGxQb2ludCkpXG4gICAgcG9pbnQgPSB0aGlzLmJvdW5kaW5nLmJvdW5kKHBvaW50LCB0aGlzLmdldFNpemUoKSlcbiAgICB0aGlzLmRldGVybWluZURpcmVjdGlvbihwb2ludClcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9pbnRcbiAgICB0aGlzLmVtaXQoJ2RyYWc6bW92ZScpXG4gIH1cblxuICBuYXRpdmVEcmFnRW5kKF9ldmVudCkge1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZWUtcGxhY2Vob2xkZXInKVxuICAgIHRoaXMuZHJhZ0VuZEFjdGlvbigpXG4gICAgdGhpcy5lbWl0KCdkcmFnOmVuZCcpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCB0aGlzLl9uYXRpdmVEcmFnT3ZlcilcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcm9wJywgdGhpcy5fbmF0aXZlRHJvcClcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fc2Nyb2xsKVxuICAgIHRoaXMucGFyZW50cy5mb3JFYWNoKChwKSA9PiBwLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX3Njcm9sbCkpXG4gICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2VcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkcmFnZ2FibGUnKVxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCB0aGlzLl9uYXRpdmVEcmFnU3RhcnQpXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdlZS1hY3RpdmUnKVxuICB9XG5cbiAgbmF0aXZlRHJvcChldmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgY2FuY2VsRHJhZ2dpbmcgKCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcblxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX25hdGl2ZURyYWdFbmQpXG5cbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fc2Nyb2xsKVxuICAgIHRoaXMucGFyZW50cy5mb3JFYWNoKChwKSA9PiBwLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX3Njcm9sbCkpXG5cbiAgICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZVxuICAgIHRoaXMuX3ByZXZpb3VzRGlyZWN0aW9uUG9zaXRpb24gPSBudWxsXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnZHJhZ2dhYmxlJylcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgdGhpcy5fbmF0aXZlRHJhZ1N0YXJ0KVxuICB9XG5cbiAgY29weVN0eWxlcyhzb3VyY2UsIGRlc3RpbmF0aW9uKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5jb3B5U3R5bGVzKSB7XG4gICAgICB0aGlzLm9wdGlvbnMuY29weVN0eWxlcyhzb3VyY2UsIGRlc3RpbmF0aW9uKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb3B5U3R5bGVzKHNvdXJjZSwgZGVzdGluYXRpb24pXG4gICAgfVxuICB9XG5cbiAgZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wKGV2ZW50KSB7XG4gICAgY29uc3QgY29udGFpbmVyUmVjdCA9IHRoaXMuY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgY29uc3QgY2xvbmVkRWxlbWVudCA9IHRoaXMuZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSlcbiAgICBjbG9uZWRFbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BlcnR5XSA9ICcnXG4gICAgdGhpcy5jb3B5U3R5bGVzKHRoaXMuZWxlbWVudCwgY2xvbmVkRWxlbWVudClcbiAgICBjbG9uZWRFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJ1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2xvbmVkRWxlbWVudClcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZHJhZ2VlLXBsYWNlaG9sZGVyJylcblxuICAgIGNvbnN0IGVtdWxhdGlvbkRyYWdnYWJsZSA9IG5ldyBEcmFnZ2FibGUoY2xvbmVkRWxlbWVudCwge1xuICAgICAgY29udGFpbmVyOiBkb2N1bWVudC5ib2R5LFxuICAgICAgdG91Y2hEcmFnZ2luZ1RocmVzaG9sZDogMCxcbiAgICAgIGJvdW5kKHBvaW50KSB7XG4gICAgICAgIHJldHVybiBwb2ludFxuICAgICAgfSxcbiAgICAgIG9uOiB7XG4gICAgICAgICdkcmFnOm1vdmUnOiAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgY29udGFpbmVyUmVjdFBvaW50ID0gbmV3IFBvaW50KGNvbnRhaW5lclJlY3QubGVmdCwgY29udGFpbmVyUmVjdC50b3ApXG4gICAgICAgICAgdGhpcy5wb3NpdGlvbiA9IGVtdWxhdGlvbkRyYWdnYWJsZS5wb3NpdGlvbi5zdWIoY29udGFpbmVyUmVjdFBvaW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3ViKHRoaXMuX3N0YXJ0V2luZG93U2Nyb2xsUG9pbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy5fc3RhcnRQYXJlbnRzU2Nyb2xsUG9pbnQpXG5cbiAgICAgICAgICB0aGlzLmRldGVybWluZURpcmVjdGlvbih0aGlzLnBvc2l0aW9uKVxuICAgICAgICAgIHRoaXMuZW1pdCgnZHJhZzptb3ZlJylcbiAgICAgICAgfSxcbiAgICAgICAgJ2RyYWc6ZW5kJzogKCkgPT4ge1xuICAgICAgICAgIGVtdWxhdGlvbkRyYWdnYWJsZS5kZXN0cm95KClcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGNsb25lZEVsZW1lbnQpXG4gICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdlZS1wbGFjZWhvbGRlcicpXG4gICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdlZS1hY3RpdmUnKVxuXG4gICAgICAgICAgdGhpcy5lbWl0KCdkcmFnOmVuZCcpXG4gICAgICAgICAgdGhpcy5kcmFnRW5kQWN0aW9uKClcbiAgICAgICAgICB0aGlzLmNhbmNlbERyYWdnaW5nKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBjb250YWluZXJSZWN0UG9pbnQgPSBuZXcgUG9pbnQoY29udGFpbmVyUmVjdC5sZWZ0LCBjb250YWluZXJSZWN0LnRvcClcbiAgICBlbXVsYXRpb25EcmFnZ2FibGUuX3N0YXJ0V2luZG93U2Nyb2xsUG9pbnQgPSB0aGlzLl9zdGFydFdpbmRvd1Njcm9sbFBvaW50XG5cbiAgICBlbXVsYXRpb25EcmFnZ2FibGUubW92ZShcbiAgICAgIHRoaXMucGlubmVkUG9zaXRpb24uYWRkKGNvbnRhaW5lclJlY3RQb2ludClcbiAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMud2luZG93U2Nyb2xsUG9pbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgLnN1Yih0aGlzLnBhcmVudHNTY3JvbGxQb2ludClcbiAgICApXG5cbiAgICBlbXVsYXRpb25EcmFnZ2FibGUuZHJhZ1N0YXJ0KGV2ZW50KVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIGRyYWdFbmRBY3Rpb24oKSB7XG4gICAgdGhpcy5waW5Qb3NpdGlvbih0aGlzLnBvc2l0aW9uKVxuICB9XG5cbiAgZ2V0UmVjdGFuZ2xlKCkge1xuICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHRoaXMucG9zaXRpb24sIHRoaXMuZ2V0U2l6ZSgpKVxuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICBpZiAodGhpcy5ib3VuZGluZy5yZWZyZXNoKSB7XG4gICAgICB0aGlzLmJvdW5kaW5nLnJlZnJlc2goKVxuICAgIH1cbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5oYW5kbGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydClcbiAgICB0aGlzLmhhbmRsZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0KVxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCB0aGlzLl9uYXRpdmVEcmFnU3RhcnQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgdGhpcy5fbmF0aXZlRHJhZ092ZXIpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIHRoaXMuX25hdGl2ZURyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX25hdGl2ZURyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJvcCcsIHRoaXMuX25hdGl2ZURyb3ApXG4gICAgdGhpcy5yZXNldEVtaXR0ZXIoKVxuXG4gICAgY29uc3QgaW5kZXggPSBkcmFnZ2FibGVzLmluZGV4T2YodGhpcylcbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgZHJhZ2dhYmxlcy5zcGxpY2UoaW5kZXgsIDEpXG4gICAgfVxuICB9XG5cbiAgZ2V0IGNvbnRhaW5lcigpIHtcbiAgICByZXR1cm4gKHRoaXMuX2NvbnRhaW5lciA9IHRoaXMuX2NvbnRhaW5lciB8fCB0aGlzLm9wdGlvbnMuY29udGFpbmVyIHx8IHRoaXMub3B0aW9ucy5wYXJlbnQgfHwgZ2V0RGVmYXVsdENvbnRhaW5lcih0aGlzLmVsZW1lbnQpKVxuICB9XG5cbiAgZ2V0IGhhbmRsZXIoKSB7XG4gICAgaWYgKCF0aGlzLl9oYW5kbGVyKSB7XG4gICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5oYW5kbGVyID09PSAnc3RyaW5nJykge1xuICAgICAgICB0aGlzLl9oYW5kbGVyID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5vcHRpb25zLmhhbmRsZXIpIHx8IHRoaXMuZWxlbWVudFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5faGFuZGxlciA9IHRoaXMub3B0aW9ucy5oYW5kbGVyIHx8IHRoaXMuZWxlbWVudFxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9oYW5kbGVyXG4gIH1cblxuICBnZXQgc3RvcFByb3BhZ2F0aW9uT25EcmFnU3RhcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5zdG9wUHJvcGFnYXRpb25PbkRyYWdTdGFydCB8fCBmYWxzZVxuICB9XG5cbiAgZ2V0IG5hdGl2ZURyYWdBbmREcm9wKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMubmF0aXZlRHJhZ0FuZERyb3AgfHwgZmFsc2VcbiAgfVxuXG4gIGdldCBlbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3BPblRvdWNoKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wT25Ub3VjaCB8fCBmYWxzZVxuICB9XG5cbiAgZ2V0IHNob3VsZFJlbW92ZVplcm9UcmFuc2xhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5zaG91bGRSZW1vdmVaZXJvVHJhbnNsYXRlIHx8IGZhbHNlXG4gIH1cblxuICBnZXQgdG91Y2hEcmFnZ2luZ1RocmVzaG9sZCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLnRvdWNoRHJhZ2dpbmdUaHJlc2hvbGQgfHwgMFxuICB9XG5cbiAgZ2V0IGRyYWdPdmVyVGhyb3R0bGVEdXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmRyYWdPdmVyVGhyb3R0bGVEdXJhdGlvbiB8fCAxNlxuICB9XG5cbiAgZ2V0IHdpbmRvd1Njcm9sbFBvaW50KCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQod2luZG93LnNjcm9sbFgsIHdpbmRvdy5zY3JvbGxZKVxuICB9XG5cbiAgZ2V0IHBhcmVudHMoKSB7XG4gICAgaWYgKHRoaXMuX2NhY2hlZFBhcmVudHMpIHJldHVybiB0aGlzLl9jYWNoZWRQYXJlbnRzXG5cbiAgICB0aGlzLl9jYWNoZWRQYXJlbnRzID0gW11cbiAgICBsZXQgZWxlbWVudCA9IHRoaXMuZWxlbWVudFxuXG4gICAgd2hpbGUoZWxlbWVudC5wYXJlbnROb2RlICYmIGVsZW1lbnQgIT0gdGhpcy5jb250YWluZXIpIHtcbiAgICAgIHRoaXMuX2NhY2hlZFBhcmVudHMudW5zaGlmdChlbGVtZW50LnBhcmVudE5vZGUpO1xuICAgICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fY2FjaGVkUGFyZW50c1xuICB9XG5cbiAgZ2V0IHBhcmVudHNTY3JvbGxQb2ludCgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KFxuICAgICAgdGhpcy5wYXJlbnRzLnJlZHVjZSgoc3VtLCBwKSA9PiBzdW0gKyBwLnNjcm9sbExlZnQsIDApLFxuICAgICAgdGhpcy5wYXJlbnRzLnJlZHVjZSgoc3VtLCBwKSA9PiBzdW0gKyBwLnNjcm9sbFRvcCwgMClcbiAgICApXG4gIH1cblxuICBnZXQgZW5hYmxlKCkge1xuICAgIHJldHVybiB0aGlzLl9lbmFibGVcbiAgfVxuXG4gIHNldCBlbmFibGUoZW5hYmxlKSB7XG4gICAgaWYgKGVuYWJsZSkge1xuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdlZS1kaXNhYmxlJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RyYWdlZS1kaXNhYmxlJylcbiAgICB9XG5cbiAgICB0aGlzLl9lbmFibGUgPSBlbmFibGVcbiAgfVxufVxuXG5EcmFnZ2FibGUuZW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuRHJhZ2dhYmxlLmVtaXR0ZXIub24oJ2RyYWdnYWJsZTpjcmVhdGUnLCBhZGRUb0RlZmF1bHRTY29wZSlcbiIsInZhciByZXNpemVPYnNlcnZlcnMgPSBbXTtcbmV4cG9ydCB7IHJlc2l6ZU9ic2VydmVycyB9O1xuIiwiaW1wb3J0IHsgcmVzaXplT2JzZXJ2ZXJzIH0gZnJvbSAnLi4vdXRpbHMvcmVzaXplT2JzZXJ2ZXJzJztcbnZhciBoYXNBY3RpdmVPYnNlcnZhdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHJlc2l6ZU9ic2VydmVycy5zb21lKGZ1bmN0aW9uIChybykgeyByZXR1cm4gcm8uYWN0aXZlVGFyZ2V0cy5sZW5ndGggPiAwOyB9KTtcbn07XG5leHBvcnQgeyBoYXNBY3RpdmVPYnNlcnZhdGlvbnMgfTtcbiIsImltcG9ydCB7IHJlc2l6ZU9ic2VydmVycyB9IGZyb20gJy4uL3V0aWxzL3Jlc2l6ZU9ic2VydmVycyc7XG52YXIgaGFzU2tpcHBlZE9ic2VydmF0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gcmVzaXplT2JzZXJ2ZXJzLnNvbWUoZnVuY3Rpb24gKHJvKSB7IHJldHVybiByby5za2lwcGVkVGFyZ2V0cy5sZW5ndGggPiAwOyB9KTtcbn07XG5leHBvcnQgeyBoYXNTa2lwcGVkT2JzZXJ2YXRpb25zIH07XG4iLCJ2YXIgbXNnID0gJ1Jlc2l6ZU9ic2VydmVyIGxvb3AgY29tcGxldGVkIHdpdGggdW5kZWxpdmVyZWQgbm90aWZpY2F0aW9ucy4nO1xudmFyIGRlbGl2ZXJSZXNpemVMb29wRXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV2ZW50O1xuICAgIGlmICh0eXBlb2YgRXJyb3JFdmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBldmVudCA9IG5ldyBFcnJvckV2ZW50KCdlcnJvcicsIHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1zZ1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50Jyk7XG4gICAgICAgIGV2ZW50LmluaXRFdmVudCgnZXJyb3InLCBmYWxzZSwgZmFsc2UpO1xuICAgICAgICBldmVudC5tZXNzYWdlID0gbXNnO1xuICAgIH1cbiAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChldmVudCk7XG59O1xuZXhwb3J0IHsgZGVsaXZlclJlc2l6ZUxvb3BFcnJvciB9O1xuIiwidmFyIFJlc2l6ZU9ic2VydmVyQm94T3B0aW9ucztcbihmdW5jdGlvbiAoUmVzaXplT2JzZXJ2ZXJCb3hPcHRpb25zKSB7XG4gICAgUmVzaXplT2JzZXJ2ZXJCb3hPcHRpb25zW1wiQk9SREVSX0JPWFwiXSA9IFwiYm9yZGVyLWJveFwiO1xuICAgIFJlc2l6ZU9ic2VydmVyQm94T3B0aW9uc1tcIkNPTlRFTlRfQk9YXCJdID0gXCJjb250ZW50LWJveFwiO1xuICAgIFJlc2l6ZU9ic2VydmVyQm94T3B0aW9uc1tcIkRFVklDRV9QSVhFTF9DT05URU5UX0JPWFwiXSA9IFwiZGV2aWNlLXBpeGVsLWNvbnRlbnQtYm94XCI7XG59KShSZXNpemVPYnNlcnZlckJveE9wdGlvbnMgfHwgKFJlc2l6ZU9ic2VydmVyQm94T3B0aW9ucyA9IHt9KSk7XG5leHBvcnQgeyBSZXNpemVPYnNlcnZlckJveE9wdGlvbnMgfTtcbiIsImV4cG9ydCB2YXIgZnJlZXplID0gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gT2JqZWN0LmZyZWV6ZShvYmopOyB9O1xuIiwiaW1wb3J0IHsgZnJlZXplIH0gZnJvbSAnLi91dGlscy9mcmVlemUnO1xudmFyIFJlc2l6ZU9ic2VydmVyU2l6ZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUmVzaXplT2JzZXJ2ZXJTaXplKGlubGluZVNpemUsIGJsb2NrU2l6ZSkge1xuICAgICAgICB0aGlzLmlubGluZVNpemUgPSBpbmxpbmVTaXplO1xuICAgICAgICB0aGlzLmJsb2NrU2l6ZSA9IGJsb2NrU2l6ZTtcbiAgICAgICAgZnJlZXplKHRoaXMpO1xuICAgIH1cbiAgICByZXR1cm4gUmVzaXplT2JzZXJ2ZXJTaXplO1xufSgpKTtcbmV4cG9ydCB7IFJlc2l6ZU9ic2VydmVyU2l6ZSB9O1xuIiwiaW1wb3J0IHsgZnJlZXplIH0gZnJvbSAnLi91dGlscy9mcmVlemUnO1xudmFyIERPTVJlY3RSZWFkT25seSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRE9NUmVjdFJlYWRPbmx5KHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdGhpcy50b3AgPSB0aGlzLnk7XG4gICAgICAgIHRoaXMubGVmdCA9IHRoaXMueDtcbiAgICAgICAgdGhpcy5ib3R0b20gPSB0aGlzLnRvcCArIHRoaXMuaGVpZ2h0O1xuICAgICAgICB0aGlzLnJpZ2h0ID0gdGhpcy5sZWZ0ICsgdGhpcy53aWR0aDtcbiAgICAgICAgcmV0dXJuIGZyZWV6ZSh0aGlzKTtcbiAgICB9XG4gICAgRE9NUmVjdFJlYWRPbmx5LnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYSA9IHRoaXMsIHggPSBfYS54LCB5ID0gX2EueSwgdG9wID0gX2EudG9wLCByaWdodCA9IF9hLnJpZ2h0LCBib3R0b20gPSBfYS5ib3R0b20sIGxlZnQgPSBfYS5sZWZ0LCB3aWR0aCA9IF9hLndpZHRoLCBoZWlnaHQgPSBfYS5oZWlnaHQ7XG4gICAgICAgIHJldHVybiB7IHg6IHgsIHk6IHksIHRvcDogdG9wLCByaWdodDogcmlnaHQsIGJvdHRvbTogYm90dG9tLCBsZWZ0OiBsZWZ0LCB3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0IH07XG4gICAgfTtcbiAgICBET01SZWN0UmVhZE9ubHkuZnJvbVJlY3QgPSBmdW5jdGlvbiAocmVjdGFuZ2xlKSB7XG4gICAgICAgIHJldHVybiBuZXcgRE9NUmVjdFJlYWRPbmx5KHJlY3RhbmdsZS54LCByZWN0YW5nbGUueSwgcmVjdGFuZ2xlLndpZHRoLCByZWN0YW5nbGUuaGVpZ2h0KTtcbiAgICB9O1xuICAgIHJldHVybiBET01SZWN0UmVhZE9ubHk7XG59KCkpO1xuZXhwb3J0IHsgRE9NUmVjdFJlYWRPbmx5IH07XG4iLCJ2YXIgaXNTVkcgPSBmdW5jdGlvbiAodGFyZ2V0KSB7IHJldHVybiB0YXJnZXQgaW5zdGFuY2VvZiBTVkdFbGVtZW50ICYmICdnZXRCQm94JyBpbiB0YXJnZXQ7IH07XG52YXIgaXNIaWRkZW4gPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgaWYgKGlzU1ZHKHRhcmdldCkpIHtcbiAgICAgICAgdmFyIF9hID0gdGFyZ2V0LmdldEJCb3goKSwgd2lkdGggPSBfYS53aWR0aCwgaGVpZ2h0ID0gX2EuaGVpZ2h0O1xuICAgICAgICByZXR1cm4gIXdpZHRoICYmICFoZWlnaHQ7XG4gICAgfVxuICAgIHZhciBfYiA9IHRhcmdldCwgb2Zmc2V0V2lkdGggPSBfYi5vZmZzZXRXaWR0aCwgb2Zmc2V0SGVpZ2h0ID0gX2Iub2Zmc2V0SGVpZ2h0O1xuICAgIHJldHVybiAhKG9mZnNldFdpZHRoIHx8IG9mZnNldEhlaWdodCB8fCB0YXJnZXQuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgpO1xufTtcbnZhciBpc0VsZW1lbnQgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgdmFyIF9hO1xuICAgIGlmIChvYmogaW5zdGFuY2VvZiBFbGVtZW50KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICB2YXIgc2NvcGUgPSAoX2EgPSBvYmogPT09IG51bGwgfHwgb2JqID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvYmoub3duZXJEb2N1bWVudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmRlZmF1bHRWaWV3O1xuICAgIHJldHVybiAhIShzY29wZSAmJiBvYmogaW5zdGFuY2VvZiBzY29wZS5FbGVtZW50KTtcbn07XG52YXIgaXNSZXBsYWNlZEVsZW1lbnQgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgc3dpdGNoICh0YXJnZXQudGFnTmFtZSkge1xuICAgICAgICBjYXNlICdJTlBVVCc6XG4gICAgICAgICAgICBpZiAodGFyZ2V0LnR5cGUgIT09ICdpbWFnZScpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgY2FzZSAnVklERU8nOlxuICAgICAgICBjYXNlICdBVURJTyc6XG4gICAgICAgIGNhc2UgJ0VNQkVEJzpcbiAgICAgICAgY2FzZSAnT0JKRUNUJzpcbiAgICAgICAgY2FzZSAnQ0FOVkFTJzpcbiAgICAgICAgY2FzZSAnSUZSQU1FJzpcbiAgICAgICAgY2FzZSAnSU1HJzpcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuZXhwb3J0IHsgaXNTVkcsIGlzSGlkZGVuLCBpc0VsZW1lbnQsIGlzUmVwbGFjZWRFbGVtZW50IH07XG4iLCJleHBvcnQgdmFyIGdsb2JhbCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDoge307XG4iLCJpbXBvcnQgeyBSZXNpemVPYnNlcnZlckJveE9wdGlvbnMgfSBmcm9tICcuLi9SZXNpemVPYnNlcnZlckJveE9wdGlvbnMnO1xuaW1wb3J0IHsgUmVzaXplT2JzZXJ2ZXJTaXplIH0gZnJvbSAnLi4vUmVzaXplT2JzZXJ2ZXJTaXplJztcbmltcG9ydCB7IERPTVJlY3RSZWFkT25seSB9IGZyb20gJy4uL0RPTVJlY3RSZWFkT25seSc7XG5pbXBvcnQgeyBpc1NWRywgaXNIaWRkZW4gfSBmcm9tICcuLi91dGlscy9lbGVtZW50JztcbmltcG9ydCB7IGZyZWV6ZSB9IGZyb20gJy4uL3V0aWxzL2ZyZWV6ZSc7XG5pbXBvcnQgeyBnbG9iYWwgfSBmcm9tICcuLi91dGlscy9nbG9iYWwnO1xudmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcbnZhciBzY3JvbGxSZWdleHAgPSAvYXV0b3xzY3JvbGwvO1xudmFyIHZlcnRpY2FsUmVnZXhwID0gL150Ynx2ZXJ0aWNhbC87XG52YXIgSUUgPSAoL21zaWV8dHJpZGVudC9pKS50ZXN0KGdsb2JhbC5uYXZpZ2F0b3IgJiYgZ2xvYmFsLm5hdmlnYXRvci51c2VyQWdlbnQpO1xudmFyIHBhcnNlRGltZW5zaW9uID0gZnVuY3Rpb24gKHBpeGVsKSB7IHJldHVybiBwYXJzZUZsb2F0KHBpeGVsIHx8ICcwJyk7IH07XG52YXIgc2l6ZSA9IGZ1bmN0aW9uIChpbmxpbmVTaXplLCBibG9ja1NpemUsIHN3aXRjaFNpemVzKSB7XG4gICAgaWYgKGlubGluZVNpemUgPT09IHZvaWQgMCkgeyBpbmxpbmVTaXplID0gMDsgfVxuICAgIGlmIChibG9ja1NpemUgPT09IHZvaWQgMCkgeyBibG9ja1NpemUgPSAwOyB9XG4gICAgaWYgKHN3aXRjaFNpemVzID09PSB2b2lkIDApIHsgc3dpdGNoU2l6ZXMgPSBmYWxzZTsgfVxuICAgIHJldHVybiBuZXcgUmVzaXplT2JzZXJ2ZXJTaXplKChzd2l0Y2hTaXplcyA/IGJsb2NrU2l6ZSA6IGlubGluZVNpemUpIHx8IDAsIChzd2l0Y2hTaXplcyA/IGlubGluZVNpemUgOiBibG9ja1NpemUpIHx8IDApO1xufTtcbnZhciB6ZXJvQm94ZXMgPSBmcmVlemUoe1xuICAgIGRldmljZVBpeGVsQ29udGVudEJveFNpemU6IHNpemUoKSxcbiAgICBib3JkZXJCb3hTaXplOiBzaXplKCksXG4gICAgY29udGVudEJveFNpemU6IHNpemUoKSxcbiAgICBjb250ZW50UmVjdDogbmV3IERPTVJlY3RSZWFkT25seSgwLCAwLCAwLCAwKVxufSk7XG52YXIgY2FsY3VsYXRlQm94U2l6ZXMgPSBmdW5jdGlvbiAodGFyZ2V0LCBmb3JjZVJlY2FsY3VsYXRpb24pIHtcbiAgICBpZiAoZm9yY2VSZWNhbGN1bGF0aW9uID09PSB2b2lkIDApIHsgZm9yY2VSZWNhbGN1bGF0aW9uID0gZmFsc2U7IH1cbiAgICBpZiAoY2FjaGUuaGFzKHRhcmdldCkgJiYgIWZvcmNlUmVjYWxjdWxhdGlvbikge1xuICAgICAgICByZXR1cm4gY2FjaGUuZ2V0KHRhcmdldCk7XG4gICAgfVxuICAgIGlmIChpc0hpZGRlbih0YXJnZXQpKSB7XG4gICAgICAgIGNhY2hlLnNldCh0YXJnZXQsIHplcm9Cb3hlcyk7XG4gICAgICAgIHJldHVybiB6ZXJvQm94ZXM7XG4gICAgfVxuICAgIHZhciBjcyA9IGdldENvbXB1dGVkU3R5bGUodGFyZ2V0KTtcbiAgICB2YXIgc3ZnID0gaXNTVkcodGFyZ2V0KSAmJiB0YXJnZXQub3duZXJTVkdFbGVtZW50ICYmIHRhcmdldC5nZXRCQm94KCk7XG4gICAgdmFyIHJlbW92ZVBhZGRpbmcgPSAhSUUgJiYgY3MuYm94U2l6aW5nID09PSAnYm9yZGVyLWJveCc7XG4gICAgdmFyIHN3aXRjaFNpemVzID0gdmVydGljYWxSZWdleHAudGVzdChjcy53cml0aW5nTW9kZSB8fCAnJyk7XG4gICAgdmFyIGNhblNjcm9sbFZlcnRpY2FsbHkgPSAhc3ZnICYmIHNjcm9sbFJlZ2V4cC50ZXN0KGNzLm92ZXJmbG93WSB8fCAnJyk7XG4gICAgdmFyIGNhblNjcm9sbEhvcml6b250YWxseSA9ICFzdmcgJiYgc2Nyb2xsUmVnZXhwLnRlc3QoY3Mub3ZlcmZsb3dYIHx8ICcnKTtcbiAgICB2YXIgcGFkZGluZ1RvcCA9IHN2ZyA/IDAgOiBwYXJzZURpbWVuc2lvbihjcy5wYWRkaW5nVG9wKTtcbiAgICB2YXIgcGFkZGluZ1JpZ2h0ID0gc3ZnID8gMCA6IHBhcnNlRGltZW5zaW9uKGNzLnBhZGRpbmdSaWdodCk7XG4gICAgdmFyIHBhZGRpbmdCb3R0b20gPSBzdmcgPyAwIDogcGFyc2VEaW1lbnNpb24oY3MucGFkZGluZ0JvdHRvbSk7XG4gICAgdmFyIHBhZGRpbmdMZWZ0ID0gc3ZnID8gMCA6IHBhcnNlRGltZW5zaW9uKGNzLnBhZGRpbmdMZWZ0KTtcbiAgICB2YXIgYm9yZGVyVG9wID0gc3ZnID8gMCA6IHBhcnNlRGltZW5zaW9uKGNzLmJvcmRlclRvcFdpZHRoKTtcbiAgICB2YXIgYm9yZGVyUmlnaHQgPSBzdmcgPyAwIDogcGFyc2VEaW1lbnNpb24oY3MuYm9yZGVyUmlnaHRXaWR0aCk7XG4gICAgdmFyIGJvcmRlckJvdHRvbSA9IHN2ZyA/IDAgOiBwYXJzZURpbWVuc2lvbihjcy5ib3JkZXJCb3R0b21XaWR0aCk7XG4gICAgdmFyIGJvcmRlckxlZnQgPSBzdmcgPyAwIDogcGFyc2VEaW1lbnNpb24oY3MuYm9yZGVyTGVmdFdpZHRoKTtcbiAgICB2YXIgaG9yaXpvbnRhbFBhZGRpbmcgPSBwYWRkaW5nTGVmdCArIHBhZGRpbmdSaWdodDtcbiAgICB2YXIgdmVydGljYWxQYWRkaW5nID0gcGFkZGluZ1RvcCArIHBhZGRpbmdCb3R0b207XG4gICAgdmFyIGhvcml6b250YWxCb3JkZXJBcmVhID0gYm9yZGVyTGVmdCArIGJvcmRlclJpZ2h0O1xuICAgIHZhciB2ZXJ0aWNhbEJvcmRlckFyZWEgPSBib3JkZXJUb3AgKyBib3JkZXJCb3R0b207XG4gICAgdmFyIGhvcml6b250YWxTY3JvbGxiYXJUaGlja25lc3MgPSAhY2FuU2Nyb2xsSG9yaXpvbnRhbGx5ID8gMCA6IHRhcmdldC5vZmZzZXRIZWlnaHQgLSB2ZXJ0aWNhbEJvcmRlckFyZWEgLSB0YXJnZXQuY2xpZW50SGVpZ2h0O1xuICAgIHZhciB2ZXJ0aWNhbFNjcm9sbGJhclRoaWNrbmVzcyA9ICFjYW5TY3JvbGxWZXJ0aWNhbGx5ID8gMCA6IHRhcmdldC5vZmZzZXRXaWR0aCAtIGhvcml6b250YWxCb3JkZXJBcmVhIC0gdGFyZ2V0LmNsaWVudFdpZHRoO1xuICAgIHZhciB3aWR0aFJlZHVjdGlvbiA9IHJlbW92ZVBhZGRpbmcgPyBob3Jpem9udGFsUGFkZGluZyArIGhvcml6b250YWxCb3JkZXJBcmVhIDogMDtcbiAgICB2YXIgaGVpZ2h0UmVkdWN0aW9uID0gcmVtb3ZlUGFkZGluZyA/IHZlcnRpY2FsUGFkZGluZyArIHZlcnRpY2FsQm9yZGVyQXJlYSA6IDA7XG4gICAgdmFyIGNvbnRlbnRXaWR0aCA9IHN2ZyA/IHN2Zy53aWR0aCA6IHBhcnNlRGltZW5zaW9uKGNzLndpZHRoKSAtIHdpZHRoUmVkdWN0aW9uIC0gdmVydGljYWxTY3JvbGxiYXJUaGlja25lc3M7XG4gICAgdmFyIGNvbnRlbnRIZWlnaHQgPSBzdmcgPyBzdmcuaGVpZ2h0IDogcGFyc2VEaW1lbnNpb24oY3MuaGVpZ2h0KSAtIGhlaWdodFJlZHVjdGlvbiAtIGhvcml6b250YWxTY3JvbGxiYXJUaGlja25lc3M7XG4gICAgdmFyIGJvcmRlckJveFdpZHRoID0gY29udGVudFdpZHRoICsgaG9yaXpvbnRhbFBhZGRpbmcgKyB2ZXJ0aWNhbFNjcm9sbGJhclRoaWNrbmVzcyArIGhvcml6b250YWxCb3JkZXJBcmVhO1xuICAgIHZhciBib3JkZXJCb3hIZWlnaHQgPSBjb250ZW50SGVpZ2h0ICsgdmVydGljYWxQYWRkaW5nICsgaG9yaXpvbnRhbFNjcm9sbGJhclRoaWNrbmVzcyArIHZlcnRpY2FsQm9yZGVyQXJlYTtcbiAgICB2YXIgYm94ZXMgPSBmcmVlemUoe1xuICAgICAgICBkZXZpY2VQaXhlbENvbnRlbnRCb3hTaXplOiBzaXplKE1hdGgucm91bmQoY29udGVudFdpZHRoICogZGV2aWNlUGl4ZWxSYXRpbyksIE1hdGgucm91bmQoY29udGVudEhlaWdodCAqIGRldmljZVBpeGVsUmF0aW8pLCBzd2l0Y2hTaXplcyksXG4gICAgICAgIGJvcmRlckJveFNpemU6IHNpemUoYm9yZGVyQm94V2lkdGgsIGJvcmRlckJveEhlaWdodCwgc3dpdGNoU2l6ZXMpLFxuICAgICAgICBjb250ZW50Qm94U2l6ZTogc2l6ZShjb250ZW50V2lkdGgsIGNvbnRlbnRIZWlnaHQsIHN3aXRjaFNpemVzKSxcbiAgICAgICAgY29udGVudFJlY3Q6IG5ldyBET01SZWN0UmVhZE9ubHkocGFkZGluZ0xlZnQsIHBhZGRpbmdUb3AsIGNvbnRlbnRXaWR0aCwgY29udGVudEhlaWdodClcbiAgICB9KTtcbiAgICBjYWNoZS5zZXQodGFyZ2V0LCBib3hlcyk7XG4gICAgcmV0dXJuIGJveGVzO1xufTtcbnZhciBjYWxjdWxhdGVCb3hTaXplID0gZnVuY3Rpb24gKHRhcmdldCwgb2JzZXJ2ZWRCb3gsIGZvcmNlUmVjYWxjdWxhdGlvbikge1xuICAgIHZhciBfYSA9IGNhbGN1bGF0ZUJveFNpemVzKHRhcmdldCwgZm9yY2VSZWNhbGN1bGF0aW9uKSwgYm9yZGVyQm94U2l6ZSA9IF9hLmJvcmRlckJveFNpemUsIGNvbnRlbnRCb3hTaXplID0gX2EuY29udGVudEJveFNpemUsIGRldmljZVBpeGVsQ29udGVudEJveFNpemUgPSBfYS5kZXZpY2VQaXhlbENvbnRlbnRCb3hTaXplO1xuICAgIHN3aXRjaCAob2JzZXJ2ZWRCb3gpIHtcbiAgICAgICAgY2FzZSBSZXNpemVPYnNlcnZlckJveE9wdGlvbnMuREVWSUNFX1BJWEVMX0NPTlRFTlRfQk9YOlxuICAgICAgICAgICAgcmV0dXJuIGRldmljZVBpeGVsQ29udGVudEJveFNpemU7XG4gICAgICAgIGNhc2UgUmVzaXplT2JzZXJ2ZXJCb3hPcHRpb25zLkJPUkRFUl9CT1g6XG4gICAgICAgICAgICByZXR1cm4gYm9yZGVyQm94U2l6ZTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBjb250ZW50Qm94U2l6ZTtcbiAgICB9XG59O1xuZXhwb3J0IHsgY2FsY3VsYXRlQm94U2l6ZSwgY2FsY3VsYXRlQm94U2l6ZXMgfTtcbiIsImltcG9ydCB7IGNhbGN1bGF0ZUJveFNpemVzIH0gZnJvbSAnLi9hbGdvcml0aG1zL2NhbGN1bGF0ZUJveFNpemUnO1xuaW1wb3J0IHsgZnJlZXplIH0gZnJvbSAnLi91dGlscy9mcmVlemUnO1xudmFyIFJlc2l6ZU9ic2VydmVyRW50cnkgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFJlc2l6ZU9ic2VydmVyRW50cnkodGFyZ2V0KSB7XG4gICAgICAgIHZhciBib3hlcyA9IGNhbGN1bGF0ZUJveFNpemVzKHRhcmdldCk7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICB0aGlzLmNvbnRlbnRSZWN0ID0gYm94ZXMuY29udGVudFJlY3Q7XG4gICAgICAgIHRoaXMuYm9yZGVyQm94U2l6ZSA9IGZyZWV6ZShbYm94ZXMuYm9yZGVyQm94U2l6ZV0pO1xuICAgICAgICB0aGlzLmNvbnRlbnRCb3hTaXplID0gZnJlZXplKFtib3hlcy5jb250ZW50Qm94U2l6ZV0pO1xuICAgICAgICB0aGlzLmRldmljZVBpeGVsQ29udGVudEJveFNpemUgPSBmcmVlemUoW2JveGVzLmRldmljZVBpeGVsQ29udGVudEJveFNpemVdKTtcbiAgICB9XG4gICAgcmV0dXJuIFJlc2l6ZU9ic2VydmVyRW50cnk7XG59KCkpO1xuZXhwb3J0IHsgUmVzaXplT2JzZXJ2ZXJFbnRyeSB9O1xuIiwiaW1wb3J0IHsgaXNIaWRkZW4gfSBmcm9tICcuLi91dGlscy9lbGVtZW50JztcbnZhciBjYWxjdWxhdGVEZXB0aEZvck5vZGUgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgIGlmIChpc0hpZGRlbihub2RlKSkge1xuICAgICAgICByZXR1cm4gSW5maW5pdHk7XG4gICAgfVxuICAgIHZhciBkZXB0aCA9IDA7XG4gICAgdmFyIHBhcmVudCA9IG5vZGUucGFyZW50Tm9kZTtcbiAgICB3aGlsZSAocGFyZW50KSB7XG4gICAgICAgIGRlcHRoICs9IDE7XG4gICAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlO1xuICAgIH1cbiAgICByZXR1cm4gZGVwdGg7XG59O1xuZXhwb3J0IHsgY2FsY3VsYXRlRGVwdGhGb3JOb2RlIH07XG4iLCJpbXBvcnQgeyByZXNpemVPYnNlcnZlcnMgfSBmcm9tICcuLi91dGlscy9yZXNpemVPYnNlcnZlcnMnO1xuaW1wb3J0IHsgUmVzaXplT2JzZXJ2ZXJFbnRyeSB9IGZyb20gJy4uL1Jlc2l6ZU9ic2VydmVyRW50cnknO1xuaW1wb3J0IHsgY2FsY3VsYXRlRGVwdGhGb3JOb2RlIH0gZnJvbSAnLi9jYWxjdWxhdGVEZXB0aEZvck5vZGUnO1xuaW1wb3J0IHsgY2FsY3VsYXRlQm94U2l6ZSB9IGZyb20gJy4vY2FsY3VsYXRlQm94U2l6ZSc7XG52YXIgYnJvYWRjYXN0QWN0aXZlT2JzZXJ2YXRpb25zID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzaGFsbG93ZXN0RGVwdGggPSBJbmZpbml0eTtcbiAgICB2YXIgY2FsbGJhY2tzID0gW107XG4gICAgcmVzaXplT2JzZXJ2ZXJzLmZvckVhY2goZnVuY3Rpb24gcHJvY2Vzc09ic2VydmVyKHJvKSB7XG4gICAgICAgIGlmIChyby5hY3RpdmVUYXJnZXRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlbnRyaWVzID0gW107XG4gICAgICAgIHJvLmFjdGl2ZVRhcmdldHMuZm9yRWFjaChmdW5jdGlvbiBwcm9jZXNzVGFyZ2V0KG90KSB7XG4gICAgICAgICAgICB2YXIgZW50cnkgPSBuZXcgUmVzaXplT2JzZXJ2ZXJFbnRyeShvdC50YXJnZXQpO1xuICAgICAgICAgICAgdmFyIHRhcmdldERlcHRoID0gY2FsY3VsYXRlRGVwdGhGb3JOb2RlKG90LnRhcmdldCk7XG4gICAgICAgICAgICBlbnRyaWVzLnB1c2goZW50cnkpO1xuICAgICAgICAgICAgb3QubGFzdFJlcG9ydGVkU2l6ZSA9IGNhbGN1bGF0ZUJveFNpemUob3QudGFyZ2V0LCBvdC5vYnNlcnZlZEJveCk7XG4gICAgICAgICAgICBpZiAodGFyZ2V0RGVwdGggPCBzaGFsbG93ZXN0RGVwdGgpIHtcbiAgICAgICAgICAgICAgICBzaGFsbG93ZXN0RGVwdGggPSB0YXJnZXREZXB0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNhbGxiYWNrcy5wdXNoKGZ1bmN0aW9uIHJlc2l6ZU9ic2VydmVyQ2FsbGJhY2soKSB7XG4gICAgICAgICAgICByby5jYWxsYmFjay5jYWxsKHJvLm9ic2VydmVyLCBlbnRyaWVzLCByby5vYnNlcnZlcik7XG4gICAgICAgIH0pO1xuICAgICAgICByby5hY3RpdmVUYXJnZXRzLnNwbGljZSgwLCByby5hY3RpdmVUYXJnZXRzLmxlbmd0aCk7XG4gICAgfSk7XG4gICAgZm9yICh2YXIgX2kgPSAwLCBjYWxsYmFja3NfMSA9IGNhbGxiYWNrczsgX2kgPCBjYWxsYmFja3NfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gY2FsbGJhY2tzXzFbX2ldO1xuICAgICAgICBjYWxsYmFjaygpO1xuICAgIH1cbiAgICByZXR1cm4gc2hhbGxvd2VzdERlcHRoO1xufTtcbmV4cG9ydCB7IGJyb2FkY2FzdEFjdGl2ZU9ic2VydmF0aW9ucyB9O1xuIiwiaW1wb3J0IHsgcmVzaXplT2JzZXJ2ZXJzIH0gZnJvbSAnLi4vdXRpbHMvcmVzaXplT2JzZXJ2ZXJzJztcbmltcG9ydCB7IGNhbGN1bGF0ZURlcHRoRm9yTm9kZSB9IGZyb20gJy4vY2FsY3VsYXRlRGVwdGhGb3JOb2RlJztcbnZhciBnYXRoZXJBY3RpdmVPYnNlcnZhdGlvbnNBdERlcHRoID0gZnVuY3Rpb24gKGRlcHRoKSB7XG4gICAgcmVzaXplT2JzZXJ2ZXJzLmZvckVhY2goZnVuY3Rpb24gcHJvY2Vzc09ic2VydmVyKHJvKSB7XG4gICAgICAgIHJvLmFjdGl2ZVRhcmdldHMuc3BsaWNlKDAsIHJvLmFjdGl2ZVRhcmdldHMubGVuZ3RoKTtcbiAgICAgICAgcm8uc2tpcHBlZFRhcmdldHMuc3BsaWNlKDAsIHJvLnNraXBwZWRUYXJnZXRzLmxlbmd0aCk7XG4gICAgICAgIHJvLm9ic2VydmF0aW9uVGFyZ2V0cy5mb3JFYWNoKGZ1bmN0aW9uIHByb2Nlc3NUYXJnZXQob3QpIHtcbiAgICAgICAgICAgIGlmIChvdC5pc0FjdGl2ZSgpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNhbGN1bGF0ZURlcHRoRm9yTm9kZShvdC50YXJnZXQpID4gZGVwdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgcm8uYWN0aXZlVGFyZ2V0cy5wdXNoKG90KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJvLnNraXBwZWRUYXJnZXRzLnB1c2gob3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59O1xuZXhwb3J0IHsgZ2F0aGVyQWN0aXZlT2JzZXJ2YXRpb25zQXREZXB0aCB9O1xuIiwiaW1wb3J0IHsgaGFzQWN0aXZlT2JzZXJ2YXRpb25zIH0gZnJvbSAnLi4vYWxnb3JpdGhtcy9oYXNBY3RpdmVPYnNlcnZhdGlvbnMnO1xuaW1wb3J0IHsgaGFzU2tpcHBlZE9ic2VydmF0aW9ucyB9IGZyb20gJy4uL2FsZ29yaXRobXMvaGFzU2tpcHBlZE9ic2VydmF0aW9ucyc7XG5pbXBvcnQgeyBkZWxpdmVyUmVzaXplTG9vcEVycm9yIH0gZnJvbSAnLi4vYWxnb3JpdGhtcy9kZWxpdmVyUmVzaXplTG9vcEVycm9yJztcbmltcG9ydCB7IGJyb2FkY2FzdEFjdGl2ZU9ic2VydmF0aW9ucyB9IGZyb20gJy4uL2FsZ29yaXRobXMvYnJvYWRjYXN0QWN0aXZlT2JzZXJ2YXRpb25zJztcbmltcG9ydCB7IGdhdGhlckFjdGl2ZU9ic2VydmF0aW9uc0F0RGVwdGggfSBmcm9tICcuLi9hbGdvcml0aG1zL2dhdGhlckFjdGl2ZU9ic2VydmF0aW9uc0F0RGVwdGgnO1xudmFyIHByb2Nlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGRlcHRoID0gMDtcbiAgICBnYXRoZXJBY3RpdmVPYnNlcnZhdGlvbnNBdERlcHRoKGRlcHRoKTtcbiAgICB3aGlsZSAoaGFzQWN0aXZlT2JzZXJ2YXRpb25zKCkpIHtcbiAgICAgICAgZGVwdGggPSBicm9hZGNhc3RBY3RpdmVPYnNlcnZhdGlvbnMoKTtcbiAgICAgICAgZ2F0aGVyQWN0aXZlT2JzZXJ2YXRpb25zQXREZXB0aChkZXB0aCk7XG4gICAgfVxuICAgIGlmIChoYXNTa2lwcGVkT2JzZXJ2YXRpb25zKCkpIHtcbiAgICAgICAgZGVsaXZlclJlc2l6ZUxvb3BFcnJvcigpO1xuICAgIH1cbiAgICByZXR1cm4gZGVwdGggPiAwO1xufTtcbmV4cG9ydCB7IHByb2Nlc3MgfTtcbiIsInZhciB0cmlnZ2VyO1xudmFyIGNhbGxiYWNrcyA9IFtdO1xudmFyIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNhbGxiYWNrcy5zcGxpY2UoMCkuZm9yRWFjaChmdW5jdGlvbiAoY2IpIHsgcmV0dXJuIGNiKCk7IH0pOyB9O1xudmFyIHF1ZXVlTWljcm9UYXNrID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgaWYgKCF0cmlnZ2VyKSB7XG4gICAgICAgIHZhciB0b2dnbGVfMSA9IDA7XG4gICAgICAgIHZhciBlbF8xID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuICAgICAgICB2YXIgY29uZmlnID0geyBjaGFyYWN0ZXJEYXRhOiB0cnVlIH07XG4gICAgICAgIG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vdGlmeSgpOyB9KS5vYnNlcnZlKGVsXzEsIGNvbmZpZyk7XG4gICAgICAgIHRyaWdnZXIgPSBmdW5jdGlvbiAoKSB7IGVsXzEudGV4dENvbnRlbnQgPSBcIlwiLmNvbmNhdCh0b2dnbGVfMSA/IHRvZ2dsZV8xLS0gOiB0b2dnbGVfMSsrKTsgfTtcbiAgICB9XG4gICAgY2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuICAgIHRyaWdnZXIoKTtcbn07XG5leHBvcnQgeyBxdWV1ZU1pY3JvVGFzayB9O1xuIiwiaW1wb3J0IHsgcXVldWVNaWNyb1Rhc2sgfSBmcm9tICcuL3F1ZXVlTWljcm9UYXNrJztcbnZhciBxdWV1ZVJlc2l6ZU9ic2VydmVyID0gZnVuY3Rpb24gKGNiKSB7XG4gICAgcXVldWVNaWNyb1Rhc2soZnVuY3Rpb24gUmVzaXplT2JzZXJ2ZXIoKSB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShjYik7XG4gICAgfSk7XG59O1xuZXhwb3J0IHsgcXVldWVSZXNpemVPYnNlcnZlciB9O1xuIiwiaW1wb3J0IHsgcHJvY2VzcyB9IGZyb20gJy4vcHJvY2Vzcyc7XG5pbXBvcnQgeyBnbG9iYWwgfSBmcm9tICcuL2dsb2JhbCc7XG5pbXBvcnQgeyBxdWV1ZVJlc2l6ZU9ic2VydmVyIH0gZnJvbSAnLi9xdWV1ZVJlc2l6ZU9ic2VydmVyJztcbnZhciB3YXRjaGluZyA9IDA7XG52YXIgaXNXYXRjaGluZyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICEhd2F0Y2hpbmc7IH07XG52YXIgQ0FUQ0hfUEVSSU9EID0gMjUwO1xudmFyIG9ic2VydmVyQ29uZmlnID0geyBhdHRyaWJ1dGVzOiB0cnVlLCBjaGFyYWN0ZXJEYXRhOiB0cnVlLCBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfTtcbnZhciBldmVudHMgPSBbXG4gICAgJ3Jlc2l6ZScsXG4gICAgJ2xvYWQnLFxuICAgICd0cmFuc2l0aW9uZW5kJyxcbiAgICAnYW5pbWF0aW9uZW5kJyxcbiAgICAnYW5pbWF0aW9uc3RhcnQnLFxuICAgICdhbmltYXRpb25pdGVyYXRpb24nLFxuICAgICdrZXl1cCcsXG4gICAgJ2tleWRvd24nLFxuICAgICdtb3VzZXVwJyxcbiAgICAnbW91c2Vkb3duJyxcbiAgICAnbW91c2VvdmVyJyxcbiAgICAnbW91c2VvdXQnLFxuICAgICdibHVyJyxcbiAgICAnZm9jdXMnXG5dO1xudmFyIHRpbWUgPSBmdW5jdGlvbiAodGltZW91dCkge1xuICAgIGlmICh0aW1lb3V0ID09PSB2b2lkIDApIHsgdGltZW91dCA9IDA7IH1cbiAgICByZXR1cm4gRGF0ZS5ub3coKSArIHRpbWVvdXQ7XG59O1xudmFyIHNjaGVkdWxlZCA9IGZhbHNlO1xudmFyIFNjaGVkdWxlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2NoZWR1bGVyKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLnN0b3BwZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmxpc3RlbmVyID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuc2NoZWR1bGUoKTsgfTtcbiAgICB9XG4gICAgU2NoZWR1bGVyLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAodGltZW91dCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAodGltZW91dCA9PT0gdm9pZCAwKSB7IHRpbWVvdXQgPSBDQVRDSF9QRVJJT0Q7IH1cbiAgICAgICAgaWYgKHNjaGVkdWxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHNjaGVkdWxlZCA9IHRydWU7XG4gICAgICAgIHZhciB1bnRpbCA9IHRpbWUodGltZW91dCk7XG4gICAgICAgIHF1ZXVlUmVzaXplT2JzZXJ2ZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGVsZW1lbnRzSGF2ZVJlc2l6ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudHNIYXZlUmVzaXplZCA9IHByb2Nlc3MoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIHNjaGVkdWxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRpbWVvdXQgPSB1bnRpbCAtIHRpbWUoKTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzV2F0Y2hpbmcoKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50c0hhdmVSZXNpemVkKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnJ1bigxMDAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGltZW91dCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMucnVuKHRpbWVvdXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgU2NoZWR1bGVyLnByb3RvdHlwZS5zY2hlZHVsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgIHRoaXMucnVuKCk7XG4gICAgfTtcbiAgICBTY2hlZHVsZXIucHJvdG90eXBlLm9ic2VydmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBjYiA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLm9ic2VydmVyICYmIF90aGlzLm9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuYm9keSwgb2JzZXJ2ZXJDb25maWcpOyB9O1xuICAgICAgICBkb2N1bWVudC5ib2R5ID8gY2IoKSA6IGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgY2IpO1xuICAgIH07XG4gICAgU2NoZWR1bGVyLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuc3RvcHBlZCkge1xuICAgICAgICAgICAgdGhpcy5zdG9wcGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLm9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIodGhpcy5saXN0ZW5lcik7XG4gICAgICAgICAgICB0aGlzLm9ic2VydmUoKTtcbiAgICAgICAgICAgIGV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcihuYW1lLCBfdGhpcy5saXN0ZW5lciwgdHJ1ZSk7IH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTY2hlZHVsZXIucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICghdGhpcy5zdG9wcGVkKSB7XG4gICAgICAgICAgICB0aGlzLm9ic2VydmVyICYmIHRoaXMub2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIGdsb2JhbC5yZW1vdmVFdmVudExpc3RlbmVyKG5hbWUsIF90aGlzLmxpc3RlbmVyLCB0cnVlKTsgfSk7XG4gICAgICAgICAgICB0aGlzLnN0b3BwZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gU2NoZWR1bGVyO1xufSgpKTtcbnZhciBzY2hlZHVsZXIgPSBuZXcgU2NoZWR1bGVyKCk7XG52YXIgdXBkYXRlQ291bnQgPSBmdW5jdGlvbiAobikge1xuICAgICF3YXRjaGluZyAmJiBuID4gMCAmJiBzY2hlZHVsZXIuc3RhcnQoKTtcbiAgICB3YXRjaGluZyArPSBuO1xuICAgICF3YXRjaGluZyAmJiBzY2hlZHVsZXIuc3RvcCgpO1xufTtcbmV4cG9ydCB7IHNjaGVkdWxlciwgdXBkYXRlQ291bnQgfTtcbiIsImltcG9ydCB7IFJlc2l6ZU9ic2VydmVyQm94T3B0aW9ucyB9IGZyb20gJy4vUmVzaXplT2JzZXJ2ZXJCb3hPcHRpb25zJztcbmltcG9ydCB7IGNhbGN1bGF0ZUJveFNpemUgfSBmcm9tICcuL2FsZ29yaXRobXMvY2FsY3VsYXRlQm94U2l6ZSc7XG5pbXBvcnQgeyBpc1NWRywgaXNSZXBsYWNlZEVsZW1lbnQgfSBmcm9tICcuL3V0aWxzL2VsZW1lbnQnO1xudmFyIHNraXBOb3RpZnlPbkVsZW1lbnQgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgcmV0dXJuICFpc1NWRyh0YXJnZXQpXG4gICAgICAgICYmICFpc1JlcGxhY2VkRWxlbWVudCh0YXJnZXQpXG4gICAgICAgICYmIGdldENvbXB1dGVkU3R5bGUodGFyZ2V0KS5kaXNwbGF5ID09PSAnaW5saW5lJztcbn07XG52YXIgUmVzaXplT2JzZXJ2YXRpb24gPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFJlc2l6ZU9ic2VydmF0aW9uKHRhcmdldCwgb2JzZXJ2ZWRCb3gpIHtcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgIHRoaXMub2JzZXJ2ZWRCb3ggPSBvYnNlcnZlZEJveCB8fCBSZXNpemVPYnNlcnZlckJveE9wdGlvbnMuQ09OVEVOVF9CT1g7XG4gICAgICAgIHRoaXMubGFzdFJlcG9ydGVkU2l6ZSA9IHtcbiAgICAgICAgICAgIGlubGluZVNpemU6IDAsXG4gICAgICAgICAgICBibG9ja1NpemU6IDBcbiAgICAgICAgfTtcbiAgICB9XG4gICAgUmVzaXplT2JzZXJ2YXRpb24ucHJvdG90eXBlLmlzQWN0aXZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc2l6ZSA9IGNhbGN1bGF0ZUJveFNpemUodGhpcy50YXJnZXQsIHRoaXMub2JzZXJ2ZWRCb3gsIHRydWUpO1xuICAgICAgICBpZiAoc2tpcE5vdGlmeU9uRWxlbWVudCh0aGlzLnRhcmdldCkpIHtcbiAgICAgICAgICAgIHRoaXMubGFzdFJlcG9ydGVkU2l6ZSA9IHNpemU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubGFzdFJlcG9ydGVkU2l6ZS5pbmxpbmVTaXplICE9PSBzaXplLmlubGluZVNpemVcbiAgICAgICAgICAgIHx8IHRoaXMubGFzdFJlcG9ydGVkU2l6ZS5ibG9ja1NpemUgIT09IHNpemUuYmxvY2tTaXplKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICByZXR1cm4gUmVzaXplT2JzZXJ2YXRpb247XG59KCkpO1xuZXhwb3J0IHsgUmVzaXplT2JzZXJ2YXRpb24gfTtcbiIsInZhciBSZXNpemVPYnNlcnZlckRldGFpbCA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUmVzaXplT2JzZXJ2ZXJEZXRhaWwocmVzaXplT2JzZXJ2ZXIsIGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlVGFyZ2V0cyA9IFtdO1xuICAgICAgICB0aGlzLnNraXBwZWRUYXJnZXRzID0gW107XG4gICAgICAgIHRoaXMub2JzZXJ2YXRpb25UYXJnZXRzID0gW107XG4gICAgICAgIHRoaXMub2JzZXJ2ZXIgPSByZXNpemVPYnNlcnZlcjtcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIH1cbiAgICByZXR1cm4gUmVzaXplT2JzZXJ2ZXJEZXRhaWw7XG59KCkpO1xuZXhwb3J0IHsgUmVzaXplT2JzZXJ2ZXJEZXRhaWwgfTtcbiIsImltcG9ydCB7IHNjaGVkdWxlciwgdXBkYXRlQ291bnQgfSBmcm9tICcuL3V0aWxzL3NjaGVkdWxlcic7XG5pbXBvcnQgeyBSZXNpemVPYnNlcnZhdGlvbiB9IGZyb20gJy4vUmVzaXplT2JzZXJ2YXRpb24nO1xuaW1wb3J0IHsgUmVzaXplT2JzZXJ2ZXJEZXRhaWwgfSBmcm9tICcuL1Jlc2l6ZU9ic2VydmVyRGV0YWlsJztcbmltcG9ydCB7IHJlc2l6ZU9ic2VydmVycyB9IGZyb20gJy4vdXRpbHMvcmVzaXplT2JzZXJ2ZXJzJztcbnZhciBvYnNlcnZlck1hcCA9IG5ldyBXZWFrTWFwKCk7XG52YXIgZ2V0T2JzZXJ2YXRpb25JbmRleCA9IGZ1bmN0aW9uIChvYnNlcnZhdGlvblRhcmdldHMsIHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JzZXJ2YXRpb25UYXJnZXRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChvYnNlcnZhdGlvblRhcmdldHNbaV0udGFyZ2V0ID09PSB0YXJnZXQpIHtcbiAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAtMTtcbn07XG52YXIgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIoKSB7XG4gICAgfVxuICAgIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5jb25uZWN0ID0gZnVuY3Rpb24gKHJlc2l6ZU9ic2VydmVyLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgZGV0YWlsID0gbmV3IFJlc2l6ZU9ic2VydmVyRGV0YWlsKHJlc2l6ZU9ic2VydmVyLCBjYWxsYmFjayk7XG4gICAgICAgIG9ic2VydmVyTWFwLnNldChyZXNpemVPYnNlcnZlciwgZGV0YWlsKTtcbiAgICB9O1xuICAgIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5vYnNlcnZlID0gZnVuY3Rpb24gKHJlc2l6ZU9ic2VydmVyLCB0YXJnZXQsIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIGRldGFpbCA9IG9ic2VydmVyTWFwLmdldChyZXNpemVPYnNlcnZlcik7XG4gICAgICAgIHZhciBmaXJzdE9ic2VydmF0aW9uID0gZGV0YWlsLm9ic2VydmF0aW9uVGFyZ2V0cy5sZW5ndGggPT09IDA7XG4gICAgICAgIGlmIChnZXRPYnNlcnZhdGlvbkluZGV4KGRldGFpbC5vYnNlcnZhdGlvblRhcmdldHMsIHRhcmdldCkgPCAwKSB7XG4gICAgICAgICAgICBmaXJzdE9ic2VydmF0aW9uICYmIHJlc2l6ZU9ic2VydmVycy5wdXNoKGRldGFpbCk7XG4gICAgICAgICAgICBkZXRhaWwub2JzZXJ2YXRpb25UYXJnZXRzLnB1c2gobmV3IFJlc2l6ZU9ic2VydmF0aW9uKHRhcmdldCwgb3B0aW9ucyAmJiBvcHRpb25zLmJveCkpO1xuICAgICAgICAgICAgdXBkYXRlQ291bnQoMSk7XG4gICAgICAgICAgICBzY2hlZHVsZXIuc2NoZWR1bGUoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLnVub2JzZXJ2ZSA9IGZ1bmN0aW9uIChyZXNpemVPYnNlcnZlciwgdGFyZ2V0KSB7XG4gICAgICAgIHZhciBkZXRhaWwgPSBvYnNlcnZlck1hcC5nZXQocmVzaXplT2JzZXJ2ZXIpO1xuICAgICAgICB2YXIgaW5kZXggPSBnZXRPYnNlcnZhdGlvbkluZGV4KGRldGFpbC5vYnNlcnZhdGlvblRhcmdldHMsIHRhcmdldCk7XG4gICAgICAgIHZhciBsYXN0T2JzZXJ2YXRpb24gPSBkZXRhaWwub2JzZXJ2YXRpb25UYXJnZXRzLmxlbmd0aCA9PT0gMTtcbiAgICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgICAgIGxhc3RPYnNlcnZhdGlvbiAmJiByZXNpemVPYnNlcnZlcnMuc3BsaWNlKHJlc2l6ZU9ic2VydmVycy5pbmRleE9mKGRldGFpbCksIDEpO1xuICAgICAgICAgICAgZGV0YWlsLm9ic2VydmF0aW9uVGFyZ2V0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgdXBkYXRlQ291bnQoLTEpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIuZGlzY29ubmVjdCA9IGZ1bmN0aW9uIChyZXNpemVPYnNlcnZlcikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgZGV0YWlsID0gb2JzZXJ2ZXJNYXAuZ2V0KHJlc2l6ZU9ic2VydmVyKTtcbiAgICAgICAgZGV0YWlsLm9ic2VydmF0aW9uVGFyZ2V0cy5zbGljZSgpLmZvckVhY2goZnVuY3Rpb24gKG90KSB7IHJldHVybiBfdGhpcy51bm9ic2VydmUocmVzaXplT2JzZXJ2ZXIsIG90LnRhcmdldCk7IH0pO1xuICAgICAgICBkZXRhaWwuYWN0aXZlVGFyZ2V0cy5zcGxpY2UoMCwgZGV0YWlsLmFjdGl2ZVRhcmdldHMubGVuZ3RoKTtcbiAgICB9O1xuICAgIHJldHVybiBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXI7XG59KCkpO1xuZXhwb3J0IHsgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyIH07XG4iLCJpbXBvcnQgeyBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIgfSBmcm9tICcuL1Jlc2l6ZU9ic2VydmVyQ29udHJvbGxlcic7XG5pbXBvcnQgeyBpc0VsZW1lbnQgfSBmcm9tICcuL3V0aWxzL2VsZW1lbnQnO1xudmFyIFJlc2l6ZU9ic2VydmVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBSZXNpemVPYnNlcnZlcihjYWxsYmFjaykge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkZhaWxlZCB0byBjb25zdHJ1Y3QgJ1Jlc2l6ZU9ic2VydmVyJzogMSBhcmd1bWVudCByZXF1aXJlZCwgYnV0IG9ubHkgMCBwcmVzZW50LlwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRmFpbGVkIHRvIGNvbnN0cnVjdCAnUmVzaXplT2JzZXJ2ZXInOiBUaGUgY2FsbGJhY2sgcHJvdmlkZWQgYXMgcGFyYW1ldGVyIDEgaXMgbm90IGEgZnVuY3Rpb24uXCIpO1xuICAgICAgICB9XG4gICAgICAgIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5jb25uZWN0KHRoaXMsIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgUmVzaXplT2JzZXJ2ZXIucHJvdG90eXBlLm9ic2VydmUgPSBmdW5jdGlvbiAodGFyZ2V0LCBvcHRpb25zKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRmFpbGVkIHRvIGV4ZWN1dGUgJ29ic2VydmUnIG9uICdSZXNpemVPYnNlcnZlcic6IDEgYXJndW1lbnQgcmVxdWlyZWQsIGJ1dCBvbmx5IDAgcHJlc2VudC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc0VsZW1lbnQodGFyZ2V0KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkZhaWxlZCB0byBleGVjdXRlICdvYnNlcnZlJyBvbiAnUmVzaXplT2JzZXJ2ZXInOiBwYXJhbWV0ZXIgMSBpcyBub3Qgb2YgdHlwZSAnRWxlbWVudFwiKTtcbiAgICAgICAgfVxuICAgICAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIub2JzZXJ2ZSh0aGlzLCB0YXJnZXQsIG9wdGlvbnMpO1xuICAgIH07XG4gICAgUmVzaXplT2JzZXJ2ZXIucHJvdG90eXBlLnVub2JzZXJ2ZSA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJGYWlsZWQgdG8gZXhlY3V0ZSAndW5vYnNlcnZlJyBvbiAnUmVzaXplT2JzZXJ2ZXInOiAxIGFyZ3VtZW50IHJlcXVpcmVkLCBidXQgb25seSAwIHByZXNlbnQuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNFbGVtZW50KHRhcmdldCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJGYWlsZWQgdG8gZXhlY3V0ZSAndW5vYnNlcnZlJyBvbiAnUmVzaXplT2JzZXJ2ZXInOiBwYXJhbWV0ZXIgMSBpcyBub3Qgb2YgdHlwZSAnRWxlbWVudFwiKTtcbiAgICAgICAgfVxuICAgICAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIudW5vYnNlcnZlKHRoaXMsIHRhcmdldCk7XG4gICAgfTtcbiAgICBSZXNpemVPYnNlcnZlci5wcm90b3R5cGUuZGlzY29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLmRpc2Nvbm5lY3QodGhpcyk7XG4gICAgfTtcbiAgICBSZXNpemVPYnNlcnZlci50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICdmdW5jdGlvbiBSZXNpemVPYnNlcnZlciAoKSB7IFtwb2x5ZmlsbCBjb2RlXSB9JztcbiAgICB9O1xuICAgIHJldHVybiBSZXNpemVPYnNlcnZlcjtcbn0oKSk7XG5leHBvcnQgeyBSZXNpemVPYnNlcnZlciB9O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCwgaW1tZWRpYXRlKSB7XG4gIGxldCB0aW1lb3V0XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGV4ZWN1dGVkRnVuY3Rpb24oKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXNcbiAgICBjb25zdCBhcmdzID0gYXJndW1lbnRzXG5cbiAgICBjb25zdCBsYXRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgdGltZW91dCA9IG51bGxcbiAgICAgIGlmICghaW1tZWRpYXRlKSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpXG4gICAgfVxuXG4gICAgY29uc3QgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dFxuXG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpXG5cbiAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdClcblxuICAgIGlmIChjYWxsTm93KSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpXG4gIH1cbn1cbiIsImltcG9ydCB7IFJlc2l6ZU9ic2VydmVyIGFzIFBvbHlmaWxsIH0gZnJvbSAnQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXInXG5jb25zdCBSZXNpemVPYnNlcnZlciA9IHdpbmRvdy5SZXNpemVPYnNlcnZlciB8fCBQb2x5ZmlsbFxuaW1wb3J0IGRlYm91bmNlIGZyb20gJy4vdXRpbHMvZGVib3VuY2UnXG5cbmltcG9ydCByZW1vdmVJdGVtIGZyb20gJy4vdXRpbHMvcmVtb3ZlLWFycmF5LWl0ZW0nXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnRFbWl0dGVyJ1xuaW1wb3J0IHtcbiAgZ2V0RGlzdGFuY2UsXG4gIGluZGV4T2ZOZWFyZXN0UG9pbnRcbn0gZnJvbSAnLi9nZW9tZXRyeS9kaXN0YW5jZXMnXG5cbmltcG9ydCBEcmFnZ2FibGUgZnJvbSAnLi9kcmFnZ2FibGUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3QgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvcihkcmFnZ2FibGVzLCBvcHRpb25zPXt9KSB7XG4gICAgc3VwZXIob3B0aW9ucylcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHRpbWVFbmQ6IDIwMCxcbiAgICAgIHRpbWVFeGNhbmdlOiA0MDAsXG4gICAgICByYWRpdXM6IDMwXG4gICAgfSwgb3B0aW9ucylcblxuICAgIHRoaXMuY29udGFpbmVyID0gb3B0aW9ucy5jb250YWluZXJcbiAgICB0aGlzLmRyYWdnYWJsZXMgPSBkcmFnZ2FibGVzXG4gICAgdGhpcy5jaGFuZ2VkRHVyaW5nSXRlcmF0aW9uID0gZmFsc2VcblxuICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoZGVib3VuY2UodGhpcy5vblJlc2l6ZS5iaW5kKHRoaXMpLCAxMDApKVxuXG4gICAgaWYgKHRoaXMuY29udGFpbmVyKSB7XG4gICAgICB0aGlzLnJlc2l6ZU9ic2VydmVyLm9ic2VydmUodGhpcy5jb250YWluZXIpXG4gICAgfVxuXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIG9uUmVzaXplKCkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMucmVvcmRlck9uQ2hhbmdlKSB0aGlzLnJlc2V0KClcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZCkgPT4gZC5zdGFydFBvc2l0aW9uaW5nKCkpXG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuX2VuYWJsZSA9IHRydWVcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB0aGlzLmluaXREcmFnZ2FibGUoZHJhZ2dhYmxlKSlcbiAgfVxuXG4gIGluaXREcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgZHJhZ2dhYmxlLmVuYWJsZSA9IHRoaXMuX2VuYWJsZVxuICAgIGRyYWdnYWJsZS5vbignZHJhZzptb3ZlJywgKCkgPT4gdGhpcy5vbk1vdmUoZHJhZ2dhYmxlKSlcbiAgICBkcmFnZ2FibGUuZHJhZ0VuZEFjdGlvbiA9ICgpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5waW5Qb3NpdGlvbihkcmFnZ2FibGUucGlubmVkUG9zaXRpb24sIHRoaXMub3B0aW9ucy50aW1lRW5kKVxuICAgICAgdGhpcy5vbkVuZChkcmFnZ2FibGUpXG4gICAgfVxuICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZShkcmFnZ2FibGUuZWxlbWVudClcbiAgfVxuXG4gIHJlbGVhc2VEcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgdGhpcy5yZXNpemVPYnNlcnZlci51bm9ic2VydmUoZHJhZ2dhYmxlLmVsZW1lbnQpXG4gICAgZHJhZ2dhYmxlLnJlc2V0T24oJ2RyYWc6ZW5kJylcbiAgICBkcmFnZ2FibGUucmVzZXRPbignZHJhZzptb3ZlJylcbiAgICByZW1vdmVJdGVtKHRoaXMuZHJhZ2dhYmxlcywgZHJhZ2dhYmxlKVxuICB9XG5cbiAgb25Nb3ZlKGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IHNvcnRlZERyYWdnYWJsZXMgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuICAgIGNvbnN0IHBpbm5lZFBvc2l0aW9ucyA9IHNvcnRlZERyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbilcblxuICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IHNvcnRlZERyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpXG4gICAgY29uc3QgdGFyZ2V0SW5kZXggPSBpbmRleE9mTmVhcmVzdFBvaW50KHBpbm5lZFBvc2l0aW9ucywgZHJhZ2dhYmxlLnBvc2l0aW9uLCB0aGlzLm9wdGlvbnMucmFkaXVzLCB0aGlzLmRpc3RhbmNlRnVuYylcblxuICAgIGlmICh0YXJnZXRJbmRleCAhPT0gLTEgJiYgY3VycmVudEluZGV4ICE9PSB0YXJnZXRJbmRleCkge1xuICAgICAgaWYgKHRhcmdldEluZGV4IDwgY3VycmVudEluZGV4KSB7XG4gICAgICAgIGZvciAobGV0IGk9dGFyZ2V0SW5kZXg7IGk8Y3VycmVudEluZGV4OyBpKyspIHtcbiAgICAgICAgICBzb3J0ZWREcmFnZ2FibGVzW2ldLnBpblBvc2l0aW9uKHBpbm5lZFBvc2l0aW9uc1tpKzFdLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAobGV0IGk9Y3VycmVudEluZGV4OyBpPHRhcmdldEluZGV4OyBpKyspIHtcbiAgICAgICAgICBzb3J0ZWREcmFnZ2FibGVzW2krMV0ucGluUG9zaXRpb24ocGlubmVkUG9zaXRpb25zW2ldLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGRyYWdnYWJsZS5uYXRpdmVEcmFnQW5kRHJvcCkge1xuICAgICAgICBkcmFnZ2FibGUucGluUG9zaXRpb24ocGlubmVkUG9zaXRpb25zW3RhcmdldEluZGV4XSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbiA9IHBpbm5lZFBvc2l0aW9uc1t0YXJnZXRJbmRleF1cbiAgICAgIH1cblxuICAgICAgdGhpcy5jaGFuZ2VkRHVyaW5nSXRlcmF0aW9uID0gdHJ1ZVxuICAgIH1cbiAgfVxuXG4gIG9uRW5kKGRyYWdnYWJsZSkge1xuICAgIGlmICh0aGlzLmNoYW5nZWREdXJpbmdJdGVyYXRpb24pIHtcbiAgICAgIHRoaXMuZW1pdCgnbGlzdDpjaGFuZ2UnKVxuICAgICAgdGhpcy5jaGFuZ2VkRHVyaW5nSXRlcmF0aW9uID0gZmFsc2VcblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZW9yZGVyT25DaGFuZ2UgJiYgdGhpcy5vcHRpb25zLmNvbnRhaW5lcikge1xuICAgICAgICB0aGlzLnJlb3JkZXJFbGVtZW50cyhkcmFnZ2FibGUpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVvcmRlckVsZW1lbnRzKG1vdmVkRHJhZ2dhYmxlKSB7XG4gICAgY29uc3Qgc29ydGVkRHJhZ2dhYmxlcyA9IHRoaXMuZ2V0U29ydGVkRHJhZ2dhYmxlcygpXG4gICAgY29uc3QgaW5kZXggPSBzb3J0ZWREcmFnZ2FibGVzLmluZGV4T2YobW92ZWREcmFnZ2FibGUpXG4gICAgY29uc3QgbmV4dCA9IHNvcnRlZERyYWdnYWJsZXNbaW5kZXggKyAxXVxuXG4gICAgdGhpcy5yZXNldCgpXG5cbiAgICBpZiAobmV4dCkge1xuICAgICAgdGhpcy5jb250YWluZXIuaW5zZXJ0QmVmb3JlKG1vdmVkRHJhZ2dhYmxlLmVsZW1lbnQsIG5leHQuZWxlbWVudClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQobW92ZWREcmFnZ2FibGUuZWxlbWVudClcbiAgICB9XG5cbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZCkgPT4gZC5zdGFydFBvc2l0aW9uaW5nKCkpXG4gICAgdGhpcy5lbWl0KCdsaXN0OnJlb3JkZXJlZCcpXG4gIH1cblxuICBnZXRDdXJyZW50UGlubmVkUG9zaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbi5jbG9uZSgpKVxuICB9XG5cbiAgZ2V0U29ydGVkRHJhZ2dhYmxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5kcmFnZ2FibGVzLnNvcnQodGhpcy5zb3J0aW5nLmJpbmQodGhpcykpXG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucmVzZXRQb3NpdGlvblRvSW5pdGlhbCgpKVxuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucmVmcmVzaCgpKVxuICB9XG5cbiAgYWRkKGRyYWdnYWJsZXMpIHtcbiAgICBpZiAoIShkcmFnZ2FibGVzIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgICBkcmFnZ2FibGVzID0gW2RyYWdnYWJsZXNdXG4gICAgfVxuICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB0aGlzLmluaXREcmFnZ2FibGUoZHJhZ2dhYmxlKSlcbiAgICB0aGlzLmRyYWdnYWJsZXMgPSB0aGlzLmRyYWdnYWJsZXMuY29uY2F0KGRyYWdnYWJsZXMpXG4gIH1cblxuICByZW1vdmUoZHJhZ2dhYmxlcykge1xuICAgIGNvbnN0IGluaXRpYWxQb3NpdGlvbnMgPSB0aGlzLmRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5pbml0aWFsUG9zaXRpb24pXG4gICAgY29uc3QgbGlzdCA9IFtdXG4gICAgY29uc3Qgc29ydGVkRHJhZ2dhYmxlcyA9IHRoaXMuZ2V0U29ydGVkRHJhZ2dhYmxlcygpXG5cbiAgICBpZiAoIShkcmFnZ2FibGVzIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgICBkcmFnZ2FibGVzID0gW2RyYWdnYWJsZXNdXG4gICAgfVxuXG4gICAgZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHRoaXMucmVsZWFzZURyYWdnYWJsZShkcmFnZ2FibGUpKVxuXG4gICAgbGV0IGogPSAwXG4gICAgc29ydGVkRHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGlmICh0aGlzLmRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMSkge1xuICAgICAgICBpZiAoZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uICE9PSBpbml0aWFsUG9zaXRpb25zW2pdKSB7XG4gICAgICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKGluaXRpYWxQb3NpdGlvbnNbal0sIHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSlcbiAgICAgICAgfVxuICAgICAgICBkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uID0gaW5pdGlhbFBvc2l0aW9uc1tqXVxuICAgICAgICBqKytcbiAgICAgICAgbGlzdC5wdXNoKGRyYWdnYWJsZSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGxpc3RcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMucmVtb3ZlKHRoaXMuZHJhZ2dhYmxlcy5zbGljZSgpKVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUuZGVzdHJveSgpKVxuICAgIGlmICh0aGlzLmNvbnRhaW5lcikge1xuICAgICAgdGhpcy5yZXNpemVPYnNlcnZlci51bm9ic2VydmUodGhpcy5jb250YWluZXIpXG4gICAgfVxuICB9XG5cbiAgc29ydGluZyhkcmFnZ2FibGVBLCBkcmFnZ2FibGVCKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5zb3J0aW5nKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLnNvcnRpbmcoZHJhZ2dhYmxlQSwgZHJhZ2dhYmxlQilcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGRyYWdnYWJsZUEucGlubmVkUG9zaXRpb24ueSA8IGRyYWdnYWJsZUIucGlubmVkUG9zaXRpb24ueSkgcmV0dXJuIC0xXG4gICAgICBpZiAoZHJhZ2dhYmxlQS5waW5uZWRQb3NpdGlvbi55ID4gZHJhZ2dhYmxlQi5waW5uZWRQb3NpdGlvbi55KSByZXR1cm4gMVxuICAgICAgaWYgKGRyYWdnYWJsZUEucGlubmVkUG9zaXRpb24ueCA8IGRyYWdnYWJsZUIucGlubmVkUG9zaXRpb24ueCkgcmV0dXJuIC0xXG4gICAgICBpZiAoZHJhZ2dhYmxlQS5waW5uZWRQb3NpdGlvbi54ID4gZHJhZ2dhYmxlQi5waW5uZWRQb3NpdGlvbi54KSByZXR1cm4gMVxuICAgICAgcmV0dXJuIDBcbiAgICB9XG4gIH1cblxuICBnZXQgZGlzdGFuY2VGdW5jKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZ2V0RGlzdGFuY2UgfHwgZ2V0RGlzdGFuY2VcbiAgfVxuXG4gIGdldCBwb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q3VycmVudFBpbm5lZFBvc2l0aW9ucygpXG4gIH1cblxuICBzZXQgcG9zaXRpb25zKHBvc2l0aW9ucykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSAnd3JvbmcgYXJyYXkgbGVuZ3RoJ1xuICAgIGlmIChwb3NpdGlvbnMubGVuZ3RoID09PSB0aGlzLmRyYWdnYWJsZXMubGVuZ3RoKSB7XG4gICAgICBwb3NpdGlvbnMuZm9yRWFjaCgocG9pbnQsIGkpID0+IHtcbiAgICAgICAgdGhpcy5kcmFnZ2FibGVzW2ldLnBpblBvc2l0aW9uKHBvaW50KVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbWVzc2FnZVxuICAgIH1cbiAgfVxuXG4gIGdldCBlbmFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZVxuICB9XG5cbiAgc2V0IGVuYWJsZShlbmFibGUpIHtcbiAgICB0aGlzLl9lbmFibGUgPSBlbmFibGVcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUuZW5hYmxlID0gZW5hYmxlXG4gICAgfSlcbiAgfVxuXG4gIHN0YXRpYyBmYWN0b3J5KGNvbnRhaW5lckVsZW1lbnQsIGVsZW1lbnRzLCBvcHRpb25zPXt9KSB7XG4gICAgY29uc3QgZHJhZ2dhYmxlcyA9IEFycmF5LmZyb20oZWxlbWVudHMpLm1hcCgoZWxlbWVudCkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBEcmFnZ2FibGUoZWxlbWVudCwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyRWxlbWVudFxuICAgICAgfSwgb3B0aW9ucy5kcmFnZ2FibGUgfHwge30pKVxuICAgIH0pXG5cbiAgICByZXR1cm4gbmV3IExpc3QoZHJhZ2dhYmxlcywgT2JqZWN0LmFzc2lnbih7XG4gICAgICBjb250YWluZXI6IGNvbnRhaW5lckVsZW1lbnRcbiAgICB9LCBvcHRpb25zLmxpc3QgfHwge30pKVxuICB9XG59XG4iLCJpbXBvcnQgTGlzdCBmcm9tICcuL2xpc3QnXG5pbXBvcnQgeyBpbmRleE9mTmVhcmVzdFBvaW50LCBnZXRZRGlmZmVyZW5jZSB9IGZyb20gJy4vZ2VvbWV0cnkvZGlzdGFuY2VzJ1xuaW1wb3J0IFBvaW50IGZyb20gJy4vZ2VvbWV0cnkvcG9pbnQnXG5cbmltcG9ydCBEcmFnZ2FibGUgZnJvbSAnLi9kcmFnZ2FibGUnXG5cbmNvbnN0IGFycmF5TW92ZSA9IChhcnJheSwgZnJvbSwgdG8pID0+IHtcbiAgYXJyYXkuc3BsaWNlKHRvIDwgMCA/IGFycmF5Lmxlbmd0aCArIHRvIDogdG8sIDAsIGFycmF5LnNwbGljZShmcm9tLCAxKVswXSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnViYmxpbmdMaXN0IGV4dGVuZHMgTGlzdCB7XG4gIGF1dG9EZXRlY3RWZXJ0aWNhbEdhcCgpIHtcbiAgICBpZiAoIXRoaXMuX3ZlcnRpY2FsR2FwICYmICF0aGlzLm9wdGlvbnMudmVydGljYWxHYXAgJiYgdGhpcy5kcmFnZ2FibGVzLmxlbmd0aCA+PSAyKSB7XG4gICAgICBjb25zdCBzb3J0ZWQgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuICAgICAgdGhpcy5fdmVydGljYWxHYXAgPSBzb3J0ZWRbMV0ucGlubmVkUG9zaXRpb24ueSAtIHNvcnRlZFswXS5waW5uZWRQb3NpdGlvbi55IC0gc29ydGVkWzBdLmdldFNpemUoKS55XG4gICAgfVxuICB9XG5cbiAgYXV0b0RldGVjdFN0YXJ0UG9zaXRpb24oKSB7XG4gICAgaWYgKHRoaXMuZHJhZ2dhYmxlcy5sZW5ndGggPj0gMSAmJiAhdGhpcy5zdGFydFBvc2l0aW9uKSB7XG4gICAgICB0aGlzLnN0YXJ0UG9zaXRpb24gPSB0aGlzLmRyYWdnYWJsZXNbMF0ucGlubmVkUG9zaXRpb25cbiAgICB9XG4gIH1cblxuICBpbml0RHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIHN1cGVyLmluaXREcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICAgIGRyYWdnYWJsZS5vbignZHJhZzpzdGFydCcsICgpID0+IHRoaXMub25EcmFnU3RhcnQoZHJhZ2dhYmxlKSlcbiAgfVxuXG4gIG9uRHJhZ1N0YXJ0KGRyYWdnYWJsZSkge1xuICAgIHRoaXMuYXV0b0RldGVjdFZlcnRpY2FsR2FwKClcbiAgICB0aGlzLmF1dG9EZXRlY3RTdGFydFBvc2l0aW9uKClcbiAgICB0aGlzLmNhY2hlZFNvcnRlZERyYWdnYWJsZXMgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuICAgIHRoaXMuaW5kZXhPZkFjdGl2ZURyYWdnYWJsZSA9IHRoaXMuY2FjaGVkU29ydGVkRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSlcbiAgfVxuXG4gIG9uTW92ZShkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBwcmV2RHJhZ2dhYmxlID0gdGhpcy5jYWNoZWRTb3J0ZWREcmFnZ2FibGVzW3RoaXMuaW5kZXhPZkFjdGl2ZURyYWdnYWJsZSAtIDFdXG4gICAgY29uc3QgbmV4dERyYWdnYWJsZSA9IHRoaXMuY2FjaGVkU29ydGVkRHJhZ2dhYmxlc1t0aGlzLmluZGV4T2ZBY3RpdmVEcmFnZ2FibGUgKyAxXVxuICAgIGNvbnN0IGN1cnJlbnRQb3NpdGlvbiA9IGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvblxuXG4gICAgbGV0IGN1cnJlbnRPcmRlclxuICAgIGxldCB0YXJnZXRJbmRleFxuXG4gICAgaWYoZHJhZ2dhYmxlLnVwRGlyZWN0aW9uICYmIHByZXZEcmFnZ2FibGUpIHtcbiAgICAgIGN1cnJlbnRPcmRlciA9IFtwcmV2RHJhZ2dhYmxlLCBkcmFnZ2FibGVdLm1hcCgoZCkgPT4gZC5waW5uZWRQb3NpdGlvbilcbiAgICAgIHRhcmdldEluZGV4ID0gaW5kZXhPZk5lYXJlc3RQb2ludChjdXJyZW50T3JkZXIsIGRyYWdnYWJsZS5wb3NpdGlvbiwgMTAwMDAsIHRoaXMuZGlzdGFuY2VGdW5jKVxuXG4gICAgICBpZiAodGFyZ2V0SW5kZXggPT09IDApIHtcbiAgICAgICAgaWYoZHJhZ2dhYmxlLnNob3VsZFVzZU5hdGl2ZURyYWdBbmREcm9wKCkpIHtcbiAgICAgICAgICBkcmFnZ2FibGUucGluUG9zaXRpb24ocHJldkRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24gPSBwcmV2RHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uLmNsb25lKClcbiAgICAgICAgfVxuICAgICAgICBwcmV2RHJhZ2dhYmxlLnBpblBvc2l0aW9uKG5ldyBQb2ludChcbiAgICAgICAgICBjdXJyZW50UG9zaXRpb24ueCxcbiAgICAgICAgICBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24ueSArIGRyYWdnYWJsZS5nZXRTaXplKCkueSArIHRoaXMudmVydGljYWxHYXBcbiAgICAgICAgKSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICBhcnJheU1vdmUodGhpcy5jYWNoZWRTb3J0ZWREcmFnZ2FibGVzLCB0aGlzLmluZGV4T2ZBY3RpdmVEcmFnZ2FibGUtLSwgdGhpcy5pbmRleE9mQWN0aXZlRHJhZ2dhYmxlKVxuICAgICAgICB0aGlzLm9uTW92ZShkcmFnZ2FibGUpXG4gICAgICAgIHRoaXMuY2hhbmdlZER1cmluZ0l0ZXJhdGlvbiA9IHRydWVcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYoZHJhZ2dhYmxlLmRvd25EaXJlY3Rpb24gJiYgbmV4dERyYWdnYWJsZSkge1xuICAgICAgY3VycmVudE9yZGVyID0gW2RyYWdnYWJsZSwgbmV4dERyYWdnYWJsZV0ubWFwKChkKSA9PiBkLnBpbm5lZFBvc2l0aW9uKVxuICAgICAgdGFyZ2V0SW5kZXggPSBpbmRleE9mTmVhcmVzdFBvaW50KGN1cnJlbnRPcmRlciwgZHJhZ2dhYmxlLnBvc2l0aW9uLCAxMDAwMCwgdGhpcy5kaXN0YW5jZUZ1bmMpXG5cbiAgICAgIGlmKHRhcmdldEluZGV4ID09PSAxKSB7XG4gICAgICAgIG5leHREcmFnZ2FibGUucGluUG9zaXRpb24oZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICAgIGNvbnN0IGRyYWdnYWJsZU5ld1Bvc2l0aW9uID0gbmV3IFBvaW50KFxuICAgICAgICAgIG5leHREcmFnZ2FibGUucGlubmVkUG9zaXRpb24ueCxcbiAgICAgICAgICBuZXh0RHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uLnkgKyBuZXh0RHJhZ2dhYmxlLmdldFNpemUoKS55ICsgdGhpcy52ZXJ0aWNhbEdhcFxuICAgICAgICApXG4gICAgICAgIGlmKGRyYWdnYWJsZS5zaG91bGRVc2VOYXRpdmVEcmFnQW5kRHJvcCgpKSB7XG4gICAgICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKGRyYWdnYWJsZU5ld1Bvc2l0aW9uKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbiA9IGRyYWdnYWJsZU5ld1Bvc2l0aW9uXG4gICAgICAgIH1cbiAgICAgICAgYXJyYXlNb3ZlKHRoaXMuY2FjaGVkU29ydGVkRHJhZ2dhYmxlcywgdGhpcy5pbmRleE9mQWN0aXZlRHJhZ2dhYmxlKyssIHRoaXMuaW5kZXhPZkFjdGl2ZURyYWdnYWJsZSlcbiAgICAgICAgdGhpcy5vbk1vdmUoZHJhZ2dhYmxlKVxuICAgICAgICB0aGlzLmNoYW5nZWREdXJpbmdJdGVyYXRpb24gPSB0cnVlXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYnViYmxpbmcoc29ydGVkRHJhZ2dhYmxlcywgY3VycmVudERyYWdnYWJsZSkge1xuICAgIGNvbnN0IGN1cnJlbnRQb3NpdGlvbiA9IHRoaXMuc3RhcnRQb3NpdGlvbi5jbG9uZSgpXG4gICAgc29ydGVkRHJhZ2dhYmxlcyB8fD0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcblxuICAgIHNvcnRlZERyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBpZiAoIWRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbi5jb21wYXJlKGN1cnJlbnRQb3NpdGlvbikpIHtcbiAgICAgICAgaWYgKGRyYWdnYWJsZSA9PT0gY3VycmVudERyYWdnYWJsZSAmJiAhY3VycmVudERyYWdnYWJsZS5zaG91bGRVc2VOYXRpdmVEcmFnQW5kRHJvcCgpKSB7XG4gICAgICAgICAgZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uID0gY3VycmVudFBvc2l0aW9uLmNsb25lKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkcmFnZ2FibGUucGluUG9zaXRpb24oY3VycmVudFBvc2l0aW9uLCAoZHJhZ2dhYmxlID09PSBjdXJyZW50RHJhZ2dhYmxlKSA/IDAgOiB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY3VycmVudFBvc2l0aW9uLnkgPSBjdXJyZW50UG9zaXRpb24ueSArIGRyYWdnYWJsZS5nZXRTaXplKCkueSArIHRoaXMudmVydGljYWxHYXBcbiAgICB9KVxuICB9XG5cbiAgcmVtb3ZlKGRyYWdnYWJsZXMpIHtcbiAgICBpZiAoIShkcmFnZ2FibGVzIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgICBkcmFnZ2FibGVzID0gW2RyYWdnYWJsZXNdXG4gICAgfVxuXG4gICAgZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHRoaXMucmVsZWFzZURyYWdnYWJsZShkcmFnZ2FibGUpKVxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IHRoaXMuZHJhZ2dhYmxlcy5maWx0ZXIoKGQpID0+ICFkcmFnZ2FibGVzLmluY2x1ZGVzKGQpKVxuXG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGQpID0+IGQuc3RhcnRQb3NpdGlvbmluZygpKVxuXG4gICAgaWYodGhpcy5kcmFnZ2FibGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuYXV0b0RldGVjdFZlcnRpY2FsR2FwKClcbiAgICAgIHRoaXMuYXV0b0RldGVjdFN0YXJ0UG9zaXRpb24oKVxuICAgICAgdGhpcy5idWJibGluZygpXG4gICAgfVxuICB9XG5cbiAgZ2V0IGRpc3RhbmNlRnVuYygpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmdldERpc3RhbmNlIHx8IGdldFlEaWZmZXJlbmNlXG4gIH1cblxuICBnZXQgdmVydGljYWxHYXAoKSB7XG4gICAgaWYodGhpcy5vcHRpb25zLnZlcnRpY2FsR2FwKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLnZlcnRpY2FsR2FwXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYXV0b0RldGVjdFZlcnRpY2FsR2FwKClcbiAgICAgIHJldHVybiB0aGlzLl92ZXJ0aWNhbEdhcCB8fCAwXG4gICAgfVxuICB9XG5cbiAgc2V0IHZlcnRpY2FsR2FwKGdhcFZhbHVlKSB7XG4gICAgdGhpcy5vcHRpb25zLnZlcnRpY2FsR2FwID0gZ2FwVmFsdWVcbiAgfVxuXG4gIHN0YXRpYyBmYWN0b3J5KGNvbnRhaW5lckVsZW1lbnQsIGVsZW1lbnRzLCBvcHRpb25zPXt9KSB7XG4gICAgY29uc3QgZHJhZ2dhYmxlcyA9IEFycmF5LmZyb20oZWxlbWVudHMpLm1hcCgoZWxlbWVudCkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBEcmFnZ2FibGUoZWxlbWVudCwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyRWxlbWVudFxuICAgICAgfSwgb3B0aW9ucy5kcmFnZ2FibGUgfHwge30pKVxuICAgIH0pXG5cbiAgICByZXR1cm4gbmV3IEJ1YmJsaW5nTGlzdChkcmFnZ2FibGVzLCBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyRWxlbWVudFxuICAgIH0sIG9wdGlvbnMubGlzdCB8fCB7fSkpXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJQb2ludCIsIngiLCJ5IiwicCIsImsiLCJlbGVtZW50IiwicGFyZW50IiwicGFyZW50Tm9kZSIsImVsZW1lbnRSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicGFyZW50UmVjdCIsImxlZnQiLCJ0b3AiLCJ3aWR0aCIsImhlaWdodCIsIlJlY3RhbmdsZSIsInBvc2l0aW9uIiwic2l6ZSIsImFkZCIsIm11bHQiLCJyZWN0IiwiTWF0aCIsIm1pbiIsIm1heCIsInN1YiIsInJlY3RhbmdsZSIsImluY2x1ZGVQb2ludCIsImdldFAzIiwiYXhpcyIsInNlbEF4aXMiLCJjcm9zc1JlY3RhbmdsZSIsImFuZCIsInRoaXNDZW50ZXIiLCJnZXRDZW50ZXIiLCJyZWN0Q2VudGVyIiwic2lnbiIsIm9mZnNldCIsImVsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic3R5bGUiLCJpc0NvbnNpZGVyVHJhbnNsYXRlIiwiZWxlbWVudE9mZnNldCIsImVsZW1lbnRTaXplIiwiZ2V0RGVmYXVsdENvbnRhaW5lciIsImNvbnRhaW5lciIsIndpbmRvdyIsImdldENvbXB1dGVkU3R5bGUiLCJ0YWdOYW1lIiwiRXZlbnRFbWl0dGVyIiwib3B0aW9ucyIsImV2ZW50cyIsIm9uIiwiT2JqZWN0IiwiZW50cmllcyIsImV2ZW50TmFtZSIsImZuIiwiaW50ZXJydXB0ZWQiLCJhcmdzIiwic2xpY2UiLCJjYWxsIiwiYXJndW1lbnRzIiwiZnVuYyIsInB1c2giLCJ1bnNoaWZ0IiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwiZ2V0RGlzdGFuY2UiLCJwMSIsInAyIiwiZHgiLCJkeSIsInNxcnQiLCJnZXRYRGlmZmVyZW5jZSIsImFicyIsImdldFlEaWZmZXJlbmNlIiwidHJhbnNmb3JtZWRTcGFjZURpc3RhbmNlRmFjdG9yeSIsInBvdyIsImluZGV4T2ZOZWFyZXN0UG9pbnQiLCJhcnIiLCJ2YWwiLCJyYWRpdXMiLCJnZXREaXN0YW5jZUZ1bmMiLCJpIiwidGVtcCIsImxlbmd0aCIsImRpcmVjdENyb3NzaW5nIiwiTDFQMSIsIkwxUDIiLCJMMlAxIiwiTDJQMiIsImsxIiwiazIiLCJiMSIsImIyIiwiYm91bmRUb0xpbmUiLCJBIiwiQiIsIlAiLCJBUCIsIkFCIiwiYWIyIiwiYXBfYWIiLCJ0IiwiZ2V0UG9pbnRPbkxpbmVCeUxlbmdodCIsIkxQMSIsIkxQMiIsImxlbmdodCIsInBlcmNlbnQiLCJhZGRQb2ludFRvQm91bmRQb2ludHMiLCJib3VuZHBvaW50cyIsInBvaW50IiwiaXNSaWdodCIsInJlc3VsdCIsImZpbHRlciIsImJQb2ludCIsImdldEFuZ2xlRGlmZiIsImFscGhhIiwiYmV0YSIsIm1pbkFuZ2xlIiwibWF4QW5nbGUiLCJQSSIsImdldEFuZ2xlIiwiZGlmZiIsIm5vcm1hbGl6ZUFuZ2xlIiwiYXRhbjIiLCJib3VuZEFuZ2xlIiwiZG1pbiIsImRtYXgiLCJnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0iLCJhbmdsZSIsImNlbnRlciIsImNvcyIsInNpbiIsIkJvdW5kIiwiX3NpemUiLCJpbnN0YW5jZSIsImJvdW5kIiwiYmluZCIsIkJvdW5kVG9SZWN0YW5nbGUiLCJjYWxjUG9pbnQiLCJjbG9uZSIsInJlY3RQMiIsIkJvdW5kVG9FbGVtZW50IiwiZnJvbUVsZW1lbnQiLCJCb3VuZFRvTGluZVgiLCJzdGFydFkiLCJlbmRZIiwiQm91bmRUb0xpbmVZIiwic3RhcnRYIiwiZW5kWCIsIkJvdW5kVG9MaW5lIiwic3RhcnRQb2ludCIsImVuZFBvaW50Iiwic29tZUsiLCJjb3NCZXRhIiwic2luQmV0YSIsInBvaW50MiIsIm5ld0VuZFBvaW50IiwicG9pbnRDcm9zc2luZyIsIkJvdW5kVG9DaXJjbGUiLCJCb3VuZFRvQXJjIiwic3RhcnRBbmdsZSIsImVuZEFuZ2xlIiwiX3N0YXJ0QW5nbGUiLCJfZW5kQW5nbGUiLCJhcnJheSIsInJhbmdlIiwic3RhcnQiLCJzdG9wIiwic3RlcCIsIkJhc2ljU3RyYXRlZ3kiLCJOb3RDcm9zc2luZ1N0cmF0ZWd5IiwicmVjdGFuZ2xlTGlzdCIsImluZGV4ZXNPZk5ld3MiLCJzdGF0aWNSZWN0YW5nbGVJbmRleGVzIiwicmVkdWNlIiwiaW5kZXhlcyIsIl9yZWN0IiwiZm9yRWFjaCIsInJlbW92YWJsZSIsImluZGV4T2ZTdGF0aWMiLCJzdGF0aWNSZWN0IiwibW92ZVRvQm91bmQiLCJzb21lIiwiYm91bmRSZWN0IiwiZ2V0U3F1YXJlIiwib2RsRHJhZ2dhYmxlc0xpc3QiLCJuZXdEcmFnZ2FibGVzIiwiaW5kZXhPZk5ld3MiLCJkcmFnZ2FibGVzIiwiY29uY2F0IiwiZHJhZ2dhYmxlIiwiRmxvYXRMZWZ0U3RyYXRlZ3kiLCJhc3NpZ24iLCJwYWRkaW5nVG9wTGVmdCIsInBhZGRpbmdCb3R0b21SaWdodCIsInlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyIsImdldFBvc2l0aW9uIiwiX2luZGV4ZXNPZk5ld3MiLCJnZXRQMiIsImJvdW5kYXJ5UG9pbnRzIiwicmVjdEluZGV4IiwiaXNWYWxpZCIsIm5ld0xpc3QiLCJsaXN0T2xkUG9zaXRpb24iLCJtYXAiLCJuZXdEcmFnZ2FibGUiLCJGbG9hdFJpZ2h0U3RyYXRlZ3kiLCJwYWRkaW5nVG9wUmlnaHQiLCJwYWRkaW5nQm90dG9tTGVmdCIsInBhZGRpbmdCb3R0b21OZWdMZWZ0IiwiZ2V0UDQiLCJhZGRUb0RlZmF1bHRTY29wZSIsInRhcmdldCIsImRlZmF1bHRTY29wZSIsImFkZFRhcmdldCIsIlRhcmdldCIsInRpbWVFbmQiLCJ0aW1lRXhjYW5nZSIsInBvc2l0aW9uaW5nU3RyYXRlZ3kiLCJzdHJhdGVneSIsImdldFJlY3RhbmdsZSIsInRhcmdldHMiLCJlbWl0dGVyIiwiZW1pdCIsInN0YXJ0Qm91bmRpbmciLCJpbml0IiwiYm91bmRpbmciLCJpbmRleGVzT2ZOZXciLCJwb3NpdGlvbmluZyIsIm9sZERyYWdnYWJsZXMiLCJzb3J0aW5nIiwicmVjdGFuZ2xlcyIsImlubmVyRHJhZ2dhYmxlcyIsInNldFBvc2l0aW9uIiwiY2F0Y2hEcmFnZ2FibGUiLCJ0YXJnZXRSZWN0YW5nbGUiLCJkcmFnZ2FibGVTcXVhcmUiLCJzY29wZXMiLCJzY29wZSIsInJlbW92ZUl0ZW0iLCJuZXdEcmFnZ2FibGVzSW5kZXgiLCJnZXRTaXplIiwiYWRkUmVtb3ZlT25Nb3ZlIiwidGltZSIsIm1vdmUiLCJpbml0aWFsUG9zaXRpb24iLCJwdXNoSW5uZXJEcmFnZ2FibGUiLCJyZW1vdmVIYW5kbGVyIiwicmVtb3ZlIiwidW5zdWJzY3JpYmUiLCJfY29udGFpbmVyIiwiU2NvcGUiLCJkcmFnRW5kQWN0aW9uIiwib25FbmQiLCJzaG90VGFyZ2V0cyIsInNvcnQiLCJhIiwiYiIsInBpblBvc2l0aW9uIiwicmVzZXQiLCJyZWZyZXNoIiwicG9zaXRpb25zIiwibWVzc2FnZSIsInRhcmdldEluZGV4ZXMiLCJjdXJyZW50U2NvcGUiLCJhZGREcmFnZ2FibGVUb1Njb3BlIiwiYWRkRHJhZ2dhYmxlIiwiRHJhZ2dhYmxlIiwiaW50ZXJydXB0IiwiYWRkVGFyZ2V0VG9TY29wZSIsInByZXBlbmRPbiIsImNoZWNrU3VwcG9ydFBhc3NpdmVFdmVudHMiLCJwYXNzaXZlU3VwcG9ydGVkIiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIl9lcnIiLCJpc1N1cHBvcnRQYXNzaXZlRXZlbnRzIiwidGhyb3R0bGUiLCJ3YWl0IiwibGFzdFRpbWUiLCJleGVjdXRlZEZ1bmN0aW9uIiwiY29udGV4dCIsIm5vdyIsIkRhdGUiLCJhcHBseSIsInRocm90dGxlZERyYWdPdmVyIiwiY2FsbGJhY2siLCJkdXJhdGlvbiIsInRocm90dGxlZENhbGxiYWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInBhc3NpdmVGYWxzZSIsInBhc3NpdmUiLCJpc1RvdWNoIiwibW91c2VFdmVudHMiLCJlbmQiLCJ0b3VjaEV2ZW50cyIsInRyYW5zZm9ybVByb3BlcnR5IiwiZ2V0U3R5bGVQcm9wZXJ0eSIsInRyYW5zaXRpb25Qcm9wZXJ0eSIsImdldFRvdWNoQnlJRCIsInRvdWNoSWQiLCJjaGFuZ2VkVG91Y2hlcyIsImlkZW50aWZpZXIiLCJwcmV2ZW50RG91YmxlSW5pdCIsImV4aXN0aW5nIiwiY29weVN0eWxlcyIsInNvdXJjZSIsImRlc3RpbmF0aW9uIiwiY3MiLCJrZXkiLCJjaGlsZHJlbiIsIl9lbmFibGUiLCJzdGFydFBvc2l0aW9uaW5nIiwic3RhcnRMaXN0ZW5pbmciLCJfc2V0RGVmYXVsdFRyYW5zaXRpb24iLCJwaW5uZWRQb3NpdGlvbiIsIl9kcmFnU3RhcnQiLCJkcmFnU3RhcnQiLCJfZHJhZ01vdmUiLCJkcmFnTW92ZSIsIl9kcmFnRW5kIiwiZHJhZ0VuZCIsIl9uYXRpdmVEcmFnU3RhcnQiLCJuYXRpdmVEcmFnU3RhcnQiLCJfbmF0aXZlRHJhZ092ZXIiLCJuYXRpdmVEcmFnT3ZlciIsImRyYWdPdmVyVGhyb3R0bGVEdXJhdGlvbiIsIl9uYXRpdmVEcmFnRW5kIiwibmF0aXZlRHJhZ0VuZCIsIl9uYXRpdmVEcm9wIiwibmF0aXZlRHJvcCIsIl9zY3JvbGwiLCJvblNjcm9sbCIsImhhbmRsZXIiLCJfdHJhbnNmb3JtUG9zaXRpb24iLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbkNzcyIsInRlc3QiLCJyZXBsYWNlIiwidHJhbnNsYXRlQ3NzIiwidHJhbnNmb3JtIiwic2hvdWxkUmVtb3ZlWmVyb1RyYW5zbGF0ZSIsImlzU2lsZW50IiwiX3NldFRyYW5zaXRpb24iLCJfc2V0VHJhbnNsYXRlIiwic2lsZW50IiwiX3ByZXZpb3VzRGlyZWN0aW9uUG9zaXRpb24iLCJfc3RhcnRQb3NpdGlvbiIsImxlZnREaXJlY3Rpb24iLCJyaWdodERpcmVjdGlvbiIsInVwRGlyZWN0aW9uIiwiZG93bkRpcmVjdGlvbiIsIl9zdGFydFRvdWNoVGltZXN0YW1wIiwidG91Y2hEcmFnZ2luZ1RocmVzaG9sZCIsImlzVG91Y2hFdmVudCIsIm5hdGl2ZURyYWdBbmREcm9wIiwiZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wT25Ub3VjaCIsInN0b3BQcm9wYWdhdGlvbk9uRHJhZ1N0YXJ0Iiwic3RvcFByb3BhZ2F0aW9uIiwiVG91Y2hFdmVudCIsInRvdWNoUG9pbnQiLCJfc3RhcnRUb3VjaFBvaW50IiwicGFnZVgiLCJjbGllbnRYIiwicGFnZVkiLCJjbGllbnRZIiwiX3RvdWNoSWQiLCJfc3RhcnRXaW5kb3dTY3JvbGxQb2ludCIsIndpbmRvd1Njcm9sbFBvaW50IiwiX3N0YXJ0UGFyZW50c1Njcm9sbFBvaW50IiwicGFyZW50c1Njcm9sbFBvaW50IiwiSFRNTElucHV0RWxlbWVudCIsImZvY3VzIiwic2hvdWxkVXNlTmF0aXZlRHJhZ0FuZERyb3AiLCJlbXVsYXRlT25GaXJzdE1vdmUiLCJzZWVtc1Njcm9sbGluZyIsImNhbmNlbERyYWdnaW5nIiwiZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wIiwiY2FuY2VsRW11bGF0aW9uIiwicGFyZW50cyIsInRvdWNoIiwiaXNEcmFnZ2luZyIsImRldGVybWluZURpcmVjdGlvbiIsImNsYXNzTGlzdCIsInNldFRpbWVvdXQiLCJfZXZlbnQiLCJkYXRhVHJhbnNmZXIiLCJzZXREYXRhIiwiZWZmZWN0QWxsb3dlZCIsImRyb3BFZmZlY3QiLCJyZW1vdmVBdHRyaWJ1dGUiLCJjb250YWluZXJSZWN0IiwiY2xvbmVkRWxlbWVudCIsImNsb25lTm9kZSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImVtdWxhdGlvbkRyYWdnYWJsZSIsImNvbnRhaW5lclJlY3RQb2ludCIsImRlc3Ryb3kiLCJyZW1vdmVDaGlsZCIsInJlc2V0RW1pdHRlciIsIl9oYW5kbGVyIiwic2Nyb2xsWCIsInNjcm9sbFkiLCJfY2FjaGVkUGFyZW50cyIsInN1bSIsInNjcm9sbExlZnQiLCJzY3JvbGxUb3AiLCJlbmFibGUiLCJSZXNpemVPYnNlcnZlciIsImRlYm91bmNlIiwiaW1tZWRpYXRlIiwidGltZW91dCIsImxhdGVyIiwiY2FsbE5vdyIsImNsZWFyVGltZW91dCIsIlBvbHlmaWxsIiwiTGlzdCIsImNoYW5nZWREdXJpbmdJdGVyYXRpb24iLCJyZXNpemVPYnNlcnZlciIsIm9uUmVzaXplIiwib2JzZXJ2ZSIsInJlb3JkZXJPbkNoYW5nZSIsImQiLCJpbml0RHJhZ2dhYmxlIiwib25Nb3ZlIiwidW5vYnNlcnZlIiwicmVzZXRPbiIsInNvcnRlZERyYWdnYWJsZXMiLCJnZXRTb3J0ZWREcmFnZ2FibGVzIiwicGlubmVkUG9zaXRpb25zIiwiY3VycmVudEluZGV4IiwidGFyZ2V0SW5kZXgiLCJkaXN0YW5jZUZ1bmMiLCJyZW9yZGVyRWxlbWVudHMiLCJtb3ZlZERyYWdnYWJsZSIsIm5leHQiLCJpbnNlcnRCZWZvcmUiLCJyZXNldFBvc2l0aW9uVG9Jbml0aWFsIiwiQXJyYXkiLCJpbml0aWFsUG9zaXRpb25zIiwibGlzdCIsInJlbGVhc2VEcmFnZ2FibGUiLCJqIiwiZHJhZ2dhYmxlQSIsImRyYWdnYWJsZUIiLCJnZXRDdXJyZW50UGlubmVkUG9zaXRpb25zIiwiY29udGFpbmVyRWxlbWVudCIsImVsZW1lbnRzIiwiZnJvbSIsImFycmF5TW92ZSIsInRvIiwiQnViYmxpbmdMaXN0IiwiX3ZlcnRpY2FsR2FwIiwidmVydGljYWxHYXAiLCJzb3J0ZWQiLCJzdGFydFBvc2l0aW9uIiwib25EcmFnU3RhcnQiLCJhdXRvRGV0ZWN0VmVydGljYWxHYXAiLCJhdXRvRGV0ZWN0U3RhcnRQb3NpdGlvbiIsImNhY2hlZFNvcnRlZERyYWdnYWJsZXMiLCJpbmRleE9mQWN0aXZlRHJhZ2dhYmxlIiwicHJldkRyYWdnYWJsZSIsIm5leHREcmFnZ2FibGUiLCJjdXJyZW50UG9zaXRpb24iLCJjdXJyZW50T3JkZXIiLCJkcmFnZ2FibGVOZXdQb3NpdGlvbiIsImN1cnJlbnREcmFnZ2FibGUiLCJjb21wYXJlIiwiaW5jbHVkZXMiLCJidWJibGluZyIsImdhcFZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBQUE7QUFBQSxNQUNxQkEsS0FBSyxnQkFBQSxZQUFBO0VBQ3hCO0VBQ0Y7RUFDQTtFQUNBO0VBQ0E7SUFDRSxTQUFZ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
