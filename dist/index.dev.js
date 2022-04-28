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

  function hasClass(element, c) {
    var re = new RegExp('(^|\\s)' + c + '(\\s|$)', 'g');
    return re.test(element.className);
  }
  function addClass(element, c) {
    if (!hasClass(element, c)) {
      element.className = (element.className + ' ' + c).replace(/\s+/g, ' ').replace(/(^ | $)/g, '');
    }
  }
  function removeClass(element, c) {
    var re = new RegExp('(^|\\s)' + c + '(\\s|$)', 'g');
    element.className = element.className.replace(re, '$1').replace(/\s+/g, ' ').replace(/(^ | $)/g, '');
  }

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
        removeClass(this.element, 'dragee-active');
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
        addClass(this.element, 'dragee-active');
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
          return removeClass(_this3.element, 'dragee-active');
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
        addClass(this.element, 'dragee-placeholder');
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
        removeClass(this.element, 'dragee-placeholder');
        this.dragEndAction();
        this.emit('drag:end');
        document.removeEventListener('dragover', this._nativeDragOver);
        document.removeEventListener('dragend', this._nativeDragEnd);
        document.removeEventListener(mouseEvents.end, this._nativeDragEnd);
        document.removeEventListener('drop', this._nativeDrop);
        window.removeEventListener('scroll', this._scroll);
        this.isDragging = false;
        this.element.removeAttribute('draggable');
        removeClass(this.element, 'dragee-active');
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
        addClass(this.element, 'dragee-placeholder');
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
              removeClass(_this4.element, 'dragee-placeholder');
              removeClass(_this4.element, 'dragee-active');
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
          removeClass(this.element, 'dragee-disable');
        } else {
          addClass(this.element, 'dragee-disable');
        }

        this._enable = enable;
      }
    }]);

    return Draggable;
  }(EventEmitter);
  Draggable.emitter = new EventEmitter();
  Draggable.emitter.on('draggable:create', addToDefaultScope);

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
      _this.draggables = draggables;
      _this.changedDuringIteration = false;
      _this.resizeObserver = new ResizeObserver(function () {
        return _this.draggables.forEach(function (d) {
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
      value: function onEnd(draggable) {
        if (this.changedDuringIteration) {
          this.emit('list:change');
          this.changedDuringIteration = false;
        }
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
        return new List(draggables, options.list || {});
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
        var bubblingList = new BubblingList(draggables, options.list || {});

        if (options.reorderOnChange) {
          bubblingList.on("list:change", function () {
            var orderedElements = bubblingList.getSortedDraggables().map(function (d) {
              return d.element;
            });
            bubblingList.reset();
            orderedElements.forEach(function (element) {
              containerElement.appendChild(element);
            });
            draggables.forEach(function (d) {
              return d.startPositioning();
            });
          });
        }

        return bubblingList;
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
  exports.addClass = addClass;
  exports.defaultScope = defaultScope;
  exports.getDistance = getDistance;
  exports.getXDifference = getXDifference;
  exports.getYDifference = getYDifference;
  exports.indexOfNearestPoint = indexOfNearestPoint;
  exports.removeClass = removeClass;
  exports.scope = scope;
  exports.scopes = scopes;
  exports.transformedSpaceDistanceFactory = transformedSpaceDistanceFactory;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

})({});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZGV2LmpzIiwic291cmNlcyI6WyIuLi9zcmMvZ2VvbWV0cnkvcG9pbnQuanMiLCIuLi9zcmMvZ2VvbWV0cnkvcmVjdGFuZ2xlLmpzIiwiLi4vc3JjL3V0aWxzL2NsYXNzZXMuanMiLCIuLi9zcmMvdXRpbHMvZ2V0LWRlZmF1bHQtY29udGFpbmVyLmpzIiwiLi4vc3JjL2V2ZW50RW1pdHRlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9kZXNhbmRyby1nZXQtc3R5bGUtcHJvcGVydHkvZ2V0LXN0eWxlLXByb3BlcnR5LmpzIiwiLi4vc3JjL2dlb21ldHJ5L2Rpc3RhbmNlcy5qcyIsIi4uL3NyYy9nZW9tZXRyeS9ib3VuZHMuanMiLCIuLi9zcmMvZ2VvbWV0cnkvYW5nbGVzLmpzIiwiLi4vc3JjL2JvdW5kaW5nLmpzIiwiLi4vc3JjL3V0aWxzL3JlbW92ZS1hcnJheS1pdGVtLmpzIiwiLi4vc3JjL3V0aWxzL3JhbmdlLmpzIiwiLi4vc3JjL3Bvc2l0aW9uaW5nLmpzIiwiLi4vc3JjL3RhcmdldC5qcyIsIi4uL3NyYy9zY29wZS5qcyIsIi4uL3NyYy91dGlscy9pcy1zdXBwb3J0LXBhc3NpdmUtZXZlbnRzLmpzIiwiLi4vc3JjL2RyYWdnYWJsZS5qcyIsIi4uL3NyYy9saXN0LmpzIiwiLi4vc3JjL2J1YmJsaW5nTGlzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBnZXRTdW1WYWx1ZU9mU3R5bGVSdWxlcyhlbGVtZW50LCBydWxlcykge1xuICByZXR1cm4gcnVsZXMucmVkdWNlKChzdW0sIHJ1bGUpID0+IHtcbiAgICByZXR1cm4gc3VtICsgcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudClbcnVsZV18fDApXG4gIH0sIDApXG59XG5cbi8qKiBDbGFzcyByZXByZXNlbnRpbmcgYSBwb2ludC4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvaW50IHtcbiAgLyoqXG4gICogQ3JlYXRlIGEgcG9pbnQuXG4gICogQHBhcmFtIHtudW1iZXJ9IHggLSBUaGUgeCB2YWx1ZS5cbiAgKiBAcGFyYW0ge251bWJlcn0geSAtIFRoZSB5IHZhbHVlLlxuICAqL1xuICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgdGhpcy54ID0geFxuICAgIHRoaXMueSA9IHlcbiAgfVxuXG4gIGFkZChwKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnggKyBwLngsIHRoaXMueSArIHAueSlcbiAgfVxuXG4gIHN1YihwKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnggLSBwLngsIHRoaXMueSAtIHAueSlcbiAgfVxuXG4gIG11bHQoaykge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54ICogaywgdGhpcy55ICogaylcbiAgfVxuXG4gIG5lZ2F0aXZlKCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQoLXRoaXMueCwgLXRoaXMueSlcbiAgfVxuXG4gIGNvbXBhcmUocCkge1xuICAgIHJldHVybiAodGhpcy54ID09PSBwLnggJiYgdGhpcy55ID09PSBwLnkpXG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCwgdGhpcy55KVxuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIGB7eD0ke3RoaXMueH0seT0ke3RoaXMueX1gXG4gIH1cblxuICBzdGF0aWMgZWxlbWVudE9mZnNldChlbGVtZW50LCBwYXJlbnQpIHtcbiAgICBwYXJlbnQgPSBwYXJlbnQgfHwgZWxlbWVudC5wYXJlbnROb2RlXG4gICAgY29uc3QgZWxlbWVudFJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgY29uc3QgcGFyZW50UmVjdCA9IHBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIHJldHVybiBuZXcgUG9pbnQoXG4gICAgICBlbGVtZW50UmVjdC5sZWZ0IC0gcGFyZW50UmVjdC5sZWZ0LFxuICAgICAgZWxlbWVudFJlY3QudG9wIC0gcGFyZW50UmVjdC50b3BcbiAgICApXG4gIH1cblxuICBzdGF0aWMgZWxlbWVudFNpemUoZWxlbWVudCwgaXNDb250ZW50Qm94U2l6ZT1mYWxzZSkge1xuICAgIGxldCB3aWR0aCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpWyd3aWR0aCddKVxuICAgIGxldCBoZWlnaHQgPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KVsnaGVpZ2h0J10pXG4gICAgaWYgKCFpc0NvbnRlbnRCb3hTaXplKSB7XG4gICAgICB3aWR0aCArPSBnZXRTdW1WYWx1ZU9mU3R5bGVSdWxlcyhlbGVtZW50LCBbJ3BhZGRpbmctbGVmdCcsICdwYWRkaW5nLXJpZ2h0JywgJ2JvcmRlci1sZWZ0LXdpZHRoJywgJ2JvcmRlci1yaWdodC13aWR0aCddKVxuICAgICAgaGVpZ2h0ICs9IGdldFN1bVZhbHVlT2ZTdHlsZVJ1bGVzKGVsZW1lbnQsIFsncGFkZGluZy10b3AnLCAncGFkZGluZy1ib3R0b20nLCAnYm9yZGVyLXRvcC13aWR0aCcsICdib3JkZXItYm90dG9tLXdpZHRoJ10pXG4gICAgfVxuICAgIHJldHVybiBuZXcgUG9pbnQod2lkdGgsIGhlaWdodClcbiAgfVxufVxuIiwiaW1wb3J0IFBvaW50IGZyb20gJy4vcG9pbnQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY3RhbmdsZSB7XG4gIGNvbnN0cnVjdG9yKHBvc2l0aW9uLCBzaXplKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgdGhpcy5zaXplID0gc2l6ZVxuICB9XG5cbiAgZ2V0UDEoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25cbiAgfVxuXG4gIGdldFAyKCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHRoaXMucG9zaXRpb24ueSlcbiAgfVxuXG4gIGdldFAzKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLnNpemUpXG4gIH1cblxuICBnZXRQNCgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnkpXG4gIH1cblxuICBnZXRDZW50ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb24uYWRkKHRoaXMuc2l6ZS5tdWx0KDAuNSkpXG4gIH1cblxuICBvcihyZWN0KSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBuZXcgUG9pbnQoTWF0aC5taW4odGhpcy5wb3NpdGlvbi54LCByZWN0LnBvc2l0aW9uLngpLCBNYXRoLm1pbih0aGlzLnBvc2l0aW9uLnksIHJlY3QucG9zaXRpb24ueSkpXG4gICAgY29uc3Qgc2l6ZSA9IChuZXcgUG9pbnQoTWF0aC5tYXgodGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHJlY3QucG9zaXRpb24ueCArIHJlY3Quc2l6ZS54KSwgTWF0aC5tYXgodGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnksIHJlY3QucG9zaXRpb24ueSArIHJlY3Quc2l6ZS55KSkpLnN1Yihwb3NpdGlvbilcbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZShwb3NpdGlvbiwgc2l6ZSlcbiAgfVxuXG4gIGFuZChyZWN0KSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBuZXcgUG9pbnQoTWF0aC5tYXgodGhpcy5wb3NpdGlvbi54LCByZWN0LnBvc2l0aW9uLngpLCBNYXRoLm1heCh0aGlzLnBvc2l0aW9uLnksIHJlY3QucG9zaXRpb24ueSkpXG4gICAgY29uc3Qgc2l6ZSA9IChuZXcgUG9pbnQoTWF0aC5taW4odGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHJlY3QucG9zaXRpb24ueCArIHJlY3Quc2l6ZS54KSwgTWF0aC5taW4odGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnksIHJlY3QucG9zaXRpb24ueSArIHJlY3Quc2l6ZS55KSkpLnN1Yihwb3NpdGlvbilcbiAgICBpZiAoc2l6ZS54IDw9IDAgfHwgc2l6ZS55IDw9IDApIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHBvc2l0aW9uLCBzaXplKVxuICB9XG5cbiAgaW5jbHVkZVBvaW50KHApIHtcbiAgICByZXR1cm4gISh0aGlzLnBvc2l0aW9uLnggPiBwLnggfHwgdGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLnggPCBwLnggfHwgdGhpcy5wb3NpdGlvbi55ID4gcC55IHx8IHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55IDwgcC55KVxuICB9XG5cbiAgaW5jbHVkZVJlY3RhbmdsZShyZWN0YW5nbGUpIHtcbiAgICByZXR1cm4gdGhpcy5pbmNsdWRlUG9pbnQocmVjdGFuZ2xlLnBvc2l0aW9uKSAmJiB0aGlzLmluY2x1ZGVQb2ludChyZWN0YW5nbGUuZ2V0UDMoKSlcbiAgfVxuXG4gIG1vdmVUb0JvdW5kKHJlY3QsIGF4aXMpIHtcbiAgICBsZXQgc2VsQXhpcywgY3Jvc3NSZWN0YW5nbGVcbiAgICBpZiAoYXhpcykge1xuICAgICAgc2VsQXhpcyA9IGF4aXNcbiAgICB9IGVsc2Uge1xuICAgICAgY3Jvc3NSZWN0YW5nbGUgPSB0aGlzLmFuZChyZWN0KVxuICAgICAgaWYgKCFjcm9zc1JlY3RhbmdsZSkge1xuICAgICAgICByZXR1cm4gcmVjdFxuICAgICAgfVxuICAgICAgc2VsQXhpcyA9IGNyb3NzUmVjdGFuZ2xlLnNpemUueCA+IGNyb3NzUmVjdGFuZ2xlLnNpemUueSA/ICd5JyA6ICd4J1xuICAgIH1cbiAgICBjb25zdCB0aGlzQ2VudGVyID0gdGhpcy5nZXRDZW50ZXIoKVxuICAgIGNvbnN0IHJlY3RDZW50ZXIgPSByZWN0LmdldENlbnRlcigpXG4gICAgY29uc3Qgc2lnbiA9IHRoaXNDZW50ZXJbc2VsQXhpc10gPiByZWN0Q2VudGVyW3NlbEF4aXNdID8gLTEgOiAxXG4gICAgY29uc3Qgb2Zmc2V0ID0gc2lnbiA+IDAgPyB0aGlzLnBvc2l0aW9uW3NlbEF4aXNdICsgdGhpcy5zaXplW3NlbEF4aXNdIC0gcmVjdC5wb3NpdGlvbltzZWxBeGlzXSA6IHRoaXMucG9zaXRpb25bc2VsQXhpc10gLSAocmVjdC5wb3NpdGlvbltzZWxBeGlzXSArIHJlY3Quc2l6ZVtzZWxBeGlzXSlcbiAgICByZWN0LnBvc2l0aW9uW3NlbEF4aXNdID0gcmVjdC5wb3NpdGlvbltzZWxBeGlzXSArIG9mZnNldFxuICAgIHJldHVybiByZWN0XG4gIH1cblxuICBnZXRTcXVhcmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZS54ICogdGhpcy5zaXplLnlcbiAgfVxuXG4gIHN0eWxlQXBwbHkoZWwpIHtcbiAgICBlbCA9IGVsIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2luZCcpXG4gICAgZWwuc3R5bGUubGVmdCA9IHRoaXMucG9zaXRpb24ueCArICdweCdcbiAgICBlbC5zdHlsZS50b3AgPSB0aGlzLnBvc2l0aW9uLnkgKyAncHgnXG4gICAgZWwuc3R5bGUud2lkdGggPSB0aGlzLnNpemUueCArICdweCdcbiAgICBlbC5zdHlsZS5oZWlnaHQgPSB0aGlzLnNpemUueSArICdweCdcbiAgfVxuXG4gIGdyb3d0aChzaXplKSB7XG4gICAgdGhpcy5zaXplID0gdGhpcy5zaXplLmFkZChzaXplKVxuICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uLmFkZChzaXplLm11bHQoLTAuNSkpXG4gIH1cblxuICBnZXRNaW5TaWRlKCkge1xuICAgIHJldHVybiBNYXRoLm1pbih0aGlzLnNpemUueCwgdGhpcy5zaXplLnkpXG4gIH1cblxuICBzdGF0aWMgZnJvbUVsZW1lbnQoZWxlbWVudCwgcGFyZW50PWVsZW1lbnQucGFyZW50Tm9kZSwgaXNDb250ZW50Qm94U2l6ZT1mYWxzZSwgaXNDb25zaWRlclRyYW5zbGF0ZT1mYWxzZSkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gUG9pbnQuZWxlbWVudE9mZnNldChlbGVtZW50LCBwYXJlbnQsIGlzQ29uc2lkZXJUcmFuc2xhdGUpXG4gICAgY29uc3Qgc2l6ZSA9IFBvaW50LmVsZW1lbnRTaXplKGVsZW1lbnQsIGlzQ29udGVudEJveFNpemUpXG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUocG9zaXRpb24sIHNpemUpXG4gIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBoYXNDbGFzcyhlbGVtZW50LCBjKSB7XG4gIGNvbnN0IHJlID0gbmV3IFJlZ0V4cCgnKF58XFxcXHMpJyArIGMgKyAnKFxcXFxzfCQpJywgJ2cnKVxuICByZXR1cm4gKHJlLnRlc3QoZWxlbWVudC5jbGFzc05hbWUpKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQ2xhc3MoZWxlbWVudCwgYykge1xuICBpZiAoIWhhc0NsYXNzKGVsZW1lbnQsIGMpKSB7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSAoZWxlbWVudC5jbGFzc05hbWUgKyAnICcgKyBjKS5yZXBsYWNlKC9cXHMrL2csICcgJykucmVwbGFjZSgvKF4gfCAkKS9nLCAnJylcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoZWxlbWVudCwgYykge1xuICBjb25zdCByZSA9IG5ldyBSZWdFeHAoJyhefFxcXFxzKScgKyBjICsgJyhcXFxcc3wkKScsICdnJylcbiAgZWxlbWVudC5jbGFzc05hbWUgPSBlbGVtZW50LmNsYXNzTmFtZS5yZXBsYWNlKHJlLCAnJDEnKS5yZXBsYWNlKC9cXHMrL2csICcgJykucmVwbGFjZSgvKF4gfCAkKS9nLCAnJylcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldERlZmF1bHRDb250YWluZXIoZWxlbWVudCkge1xuICBsZXQgY29udGFpbmVyID0gZWxlbWVudC5wYXJlbnROb2RlXG4gIHdoaWxlIChjb250YWluZXIucGFyZW50Tm9kZSAmJiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShjb250YWluZXIpWydwb3NpdGlvbiddID09PSAnc3RhdGljJyAmJiBjb250YWluZXIudGFnTmFtZSAhPT0gJ0JPRFknKSB7XG4gICAgY29udGFpbmVyID0gY29udGFpbmVyLnBhcmVudE5vZGVcbiAgfVxuICByZXR1cm4gY29udGFpbmVyXG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAob3B0aW9ucyA9IHt9KSB7XG4gICAgdGhpcy5ldmVudHMgPSB7fVxuXG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5vbikge1xuICAgICAgZm9yIChjb25zdCBbZXZlbnROYW1lLCBmbl0gb2YgT2JqZWN0LmVudHJpZXMob3B0aW9ucy5vbikpIHtcbiAgICAgICAgdGhpcy5vbihldmVudE5hbWUsIGZuKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGVtaXQoZXZlbnROYW1lKSB7XG4gICAgdGhpcy5pbnRlcnJ1cHRlZCA9IGZhbHNlXG4gICAgY29uc3QgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKVxuXG4gICAgaWYgKCF0aGlzLmV2ZW50c1tldmVudE5hbWVdKSByZXR1cm5cblxuICAgIGZvciAoY29uc3QgZnVuYyBvZiB0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICBmdW5jKC4uLmFyZ3MpXG4gICAgICBpZiAodGhpcy5pbnRlcnJ1cHRlZCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpbnRlcnJ1cHQoKSB7XG4gICAgdGhpcy5pbnRlcnJ1cHRlZCA9IHRydWVcbiAgfVxuXG4gIG9uKGV2ZW50TmFtZSwgZm4pIHtcbiAgICBpZiAoIXRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSBbXVxuICAgIH1cblxuICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0ucHVzaChmbilcbiAgfVxuXG4gIHByZXBlbmRPbihldmVudE5hbWUsIGZuKSB7XG4gICAgaWYgKCF0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdID0gW11cbiAgICB9XG5cbiAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLnVuc2hpZnQoZm4pXG4gIH1cblxuICB1bnN1YnNjcmliZShldmVudE5hbWUsIGZuKSB7XG4gICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5ldmVudHNbZXZlbnROYW1lXS5pbmRleE9mKGZuKVxuICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5zcGxpY2UoaW5kZXgsIDEpXG4gICAgfVxuICB9XG5cbiAgcmVzZXRFbWl0dGVyICgpIHtcbiAgICB0aGlzLmV2ZW50cyA9IHt9XG4gIH1cblxuICByZXNldE9uKGV2ZW50TmFtZSkge1xuICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSBbXVxuICB9XG59XG4iLCIvKiFcbiAqIGdldFN0eWxlUHJvcGVydHkgdjEuMC40XG4gKiBvcmlnaW5hbCBieSBrYW5nYXhcbiAqIGh0dHA6Ly9wZXJmZWN0aW9ua2lsbHMuY29tL2ZlYXR1cmUtdGVzdGluZy1jc3MtcHJvcGVydGllcy9cbiAqIE1JVCBsaWNlbnNlXG4gKi9cblxuLypqc2hpbnQgYnJvd3NlcjogdHJ1ZSwgc3RyaWN0OiB0cnVlLCB1bmRlZjogdHJ1ZSAqL1xuLypnbG9iYWwgZGVmaW5lOiBmYWxzZSwgZXhwb3J0czogZmFsc2UsIG1vZHVsZTogZmFsc2UgKi9cblxuKCBmdW5jdGlvbiggd2luZG93ICkge1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBwcmVmaXhlcyA9ICdXZWJraXQgTW96IG1zIE1zIE8nLnNwbGl0KCcgJyk7XG52YXIgZG9jRWxlbVN0eWxlID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlO1xuXG5mdW5jdGlvbiBnZXRTdHlsZVByb3BlcnR5KCBwcm9wTmFtZSApIHtcbiAgaWYgKCAhcHJvcE5hbWUgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gdGVzdCBzdGFuZGFyZCBwcm9wZXJ0eSBmaXJzdFxuICBpZiAoIHR5cGVvZiBkb2NFbGVtU3R5bGVbIHByb3BOYW1lIF0gPT09ICdzdHJpbmcnICkge1xuICAgIHJldHVybiBwcm9wTmFtZTtcbiAgfVxuXG4gIC8vIGNhcGl0YWxpemVcbiAgcHJvcE5hbWUgPSBwcm9wTmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHByb3BOYW1lLnNsaWNlKDEpO1xuXG4gIC8vIHRlc3QgdmVuZG9yIHNwZWNpZmljIHByb3BlcnRpZXNcbiAgdmFyIHByZWZpeGVkO1xuICBmb3IgKCB2YXIgaT0wLCBsZW4gPSBwcmVmaXhlcy5sZW5ndGg7IGkgPCBsZW47IGkrKyApIHtcbiAgICBwcmVmaXhlZCA9IHByZWZpeGVzW2ldICsgcHJvcE5hbWU7XG4gICAgaWYgKCB0eXBlb2YgZG9jRWxlbVN0eWxlWyBwcmVmaXhlZCBdID09PSAnc3RyaW5nJyApIHtcbiAgICAgIHJldHVybiBwcmVmaXhlZDtcbiAgICB9XG4gIH1cbn1cblxuLy8gdHJhbnNwb3J0XG5pZiAoIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcbiAgLy8gQU1EXG4gIGRlZmluZSggZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGdldFN0eWxlUHJvcGVydHk7XG4gIH0pO1xufSBlbHNlIGlmICggdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICkge1xuICAvLyBDb21tb25KUyBmb3IgQ29tcG9uZW50XG4gIG1vZHVsZS5leHBvcnRzID0gZ2V0U3R5bGVQcm9wZXJ0eTtcbn0gZWxzZSB7XG4gIC8vIGJyb3dzZXIgZ2xvYmFsXG4gIHdpbmRvdy5nZXRTdHlsZVByb3BlcnR5ID0gZ2V0U3R5bGVQcm9wZXJ0eTtcbn1cblxufSkoIHdpbmRvdyApO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldERpc3RhbmNlKHAxLCBwMikge1xuICBjb25zdCBkeCA9IHAxLnggLSBwMi54LCBkeSA9IHAxLnkgLSBwMi55XG4gIHJldHVybiBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRYRGlmZmVyZW5jZShwMSwgcDIpIHtcbiAgcmV0dXJuIE1hdGguYWJzKHAxLnggLSBwMi54KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0WURpZmZlcmVuY2UocDEsIHAyKSB7XG4gIHJldHVybiBNYXRoLmFicyhwMS55IC0gcDIueSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3Rvcnkob3B0aW9ucykge1xuICByZXR1cm4gKHAxLCBwMikgPT4ge1xuICAgIHJldHVybiBNYXRoLnNxcnQoXG4gICAgICBNYXRoLnBvdyhvcHRpb25zLnggKiBNYXRoLmFicyhwMS54IC0gcDIueCksIDIpICtcbiAgICAgIE1hdGgucG93KG9wdGlvbnMueSAqIE1hdGguYWJzKHAxLnkgLSBwMi55KSwgMilcbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluZGV4T2ZOZWFyZXN0UG9pbnQoYXJyLCB2YWwsIHJhZGl1cywgZ2V0RGlzdGFuY2VGdW5jPWdldERpc3RhbmNlKSB7XG4gIGxldCBzaXplLCBpbmRleCA9IDAsIGksIHRlbXBcbiAgaWYgKGFyci5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gLTFcbiAgfVxuICBzaXplID0gZ2V0RGlzdGFuY2VGdW5jKGFyclswXSwgdmFsKVxuICBmb3IgKGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgdGVtcCA9IGdldERpc3RhbmNlRnVuYyhhcnJbaV0sIHZhbClcbiAgICBpZiAodGVtcCA8IHNpemUpIHtcbiAgICAgIHNpemUgPSB0ZW1wXG4gICAgICBpbmRleCA9IGlcbiAgICB9XG4gIH1cbiAgaWYgKHJhZGl1cyA+PSAwICYmIHNpemUgPiByYWRpdXMpIHtcbiAgICByZXR1cm4gLTFcbiAgfVxuICByZXR1cm4gaW5kZXhcbn1cbiIsImltcG9ydCBQb2ludCBmcm9tICcuL3BvaW50J1xuaW1wb3J0IHsgZ2V0RGlzdGFuY2UgfSBmcm9tICcuL2Rpc3RhbmNlcydcblxuZXhwb3J0IGZ1bmN0aW9uIGNsYW1wKG1pbiwgbWF4LCB2YWwpIHtcbiAgcmV0dXJuIE1hdGgubWF4KG1pbiwgTWF0aC5taW4obWF4LCB2YWwpKVxufVxuXG4vL1JldHVybiBjcm9zc2luZyBwb2ludCBvZiB0d28gbGluZXNcbmV4cG9ydCBmdW5jdGlvbiBkaXJlY3RDcm9zc2luZyhMMVAxLCBMMVAyLCBMMlAxLCBMMlAyKSB7XG4gIGxldCB0ZW1wLCBrMSwgazIsIGIxLCBiMiwgeCwgeVxuICBpZiAoTDJQMS54ID09PSBMMlAyLngpIHtcbiAgICB0ZW1wID0gTDJQMVxuICAgIEwyUDEgPSBMMVAxXG4gICAgTDFQMSA9IHRlbXBcbiAgICB0ZW1wID0gTDJQMlxuICAgIEwyUDIgPSBMMVAyXG4gICAgTDFQMiA9IHRlbXBcbiAgfVxuICBpZiAoTDFQMS54ID09PSBMMVAyLngpIHtcbiAgICBrMiA9IChMMlAyLnkgLSBMMlAxLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICBiMiA9IChMMlAyLnggKiBMMlAxLnkgLSBMMlAxLnggKiBMMlAyLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICB4ID0gTDFQMS54XG4gICAgeSA9IHggKiBrMiArIGIyXG4gICAgcmV0dXJuIG5ldyBQb2ludCh4LCB5KVxuICB9IGVsc2Uge1xuICAgIGsxID0gKEwxUDIueSAtIEwxUDEueSkgLyAoTDFQMi54IC0gTDFQMS54KVxuICAgIGIxID0gKEwxUDIueCAqIEwxUDEueSAtIEwxUDEueCAqIEwxUDIueSkgLyAoTDFQMi54IC0gTDFQMS54KVxuICAgIGsyID0gKEwyUDIueSAtIEwyUDEueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgIGIyID0gKEwyUDIueCAqIEwyUDEueSAtIEwyUDEueCAqIEwyUDIueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgIHggPSAoYjEgLSBiMikgLyAoazIgLSBrMSlcbiAgICB5ID0geCAqIGsxICsgYjFcbiAgICByZXR1cm4gbmV3IFBvaW50KHgsIHkpXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kVG9TZWdtZW50KExQMSwgTFAyLCBQKSB7XG4gIGxldCB4LCB5XG4gIHggPSBjbGFtcChNYXRoLm1pbihMUDEueCwgTFAyLngpLCBNYXRoLm1heChMUDEueCwgTFAyLngpLCBQLngpXG4gIGlmICh4ICE9PSBQLngpIHtcbiAgICB5ID0gKHggPT09IExQMS54KSA/IExQMS55IDogTFAyLnlcbiAgICBQID0gbmV3IFBvaW50KHgsIHkpXG4gIH1cblxuICB5ID0gY2xhbXAoTWF0aC5taW4oTFAxLnksIExQMi55KSwgTWF0aC5tYXgoTFAxLnksIExQMi55KSwgUC55KVxuICBpZiAoeSAhPT0gUC55KSB7XG4gICAgeCA9ICh5ID09PSBMUDEueSkgPyBMUDEueCA6IExQMi54XG4gICAgUCA9IG5ldyBQb2ludCh4LCB5KVxuICB9XG5cbiAgcmV0dXJuIFBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kVG9MaW5lKEEsIEIsIFApIHtcbiAgY29uc3QgQVAgPSBuZXcgUG9pbnQoUC54IC0gQS54LCBQLnkgLSBBLnkpLFxuICAgIEFCID0gbmV3IFBvaW50KEIueCAtIEEueCwgQi55IC0gQS55KSxcbiAgICBhYjIgPSBBQi54ICogQUIueCArIEFCLnkgKiBBQi55LFxuICAgIGFwX2FiID0gQVAueCAqIEFCLnggKyBBUC55ICogQUIueSxcbiAgICB0ID0gYXBfYWIgLyBhYjJcbiAgcmV0dXJuIG5ldyBQb2ludChBLnggKyBBQi54ICogdCwgQS55ICsgQUIueSAqIHQpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb2ludE9uTGluZShMUDEsIExQMiwgcGVyY2VudCkge1xuICBjb25zdCBkeCA9IExQMi54IC0gTFAxLngsIGR5ID0gTFAyLnkgLSBMUDEueVxuICByZXR1cm4gbmV3IFBvaW50KExQMS54ICsgcGVyY2VudCAqIGR4LCBMUDEueSArIHBlcmNlbnQgKiBkeSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBvaW50T25MaW5lQnlMZW5naHQoTFAxLCBMUDIsIGxlbmdodCkge1xuICBjb25zdCBkeCA9IExQMi54IC0gTFAxLnhcbiAgY29uc3QgZHkgPSBMUDIueSAtIExQMS55XG4gIGNvbnN0IHBlcmNlbnQgPSBsZW5naHQgLyBnZXREaXN0YW5jZShMUDEsIExQMilcbiAgcmV0dXJuIG5ldyBQb2ludChMUDEueCArIHBlcmNlbnQgKiBkeCwgTFAxLnkgKyBwZXJjZW50ICogZHkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRQb2ludFRvQm91bmRQb2ludHMoYm91bmRwb2ludHMsIHBvaW50LCBpc1JpZ2h0KSB7XG4gIGNvbnN0IHJlc3VsdCA9IGJvdW5kcG9pbnRzLmZpbHRlcigoYlBvaW50KSA9PiB7XG4gICAgcmV0dXJuIGJQb2ludC55ID4gcG9pbnQueSB8fCAoaXNSaWdodCA/IGJQb2ludC54IDwgcG9pbnQueCA6IGJQb2ludC54ID4gcG9pbnQueClcbiAgfSlcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChwb2ludC55IDwgcmVzdWx0W2ldLnkpIHtcbiAgICAgIHJlc3VsdC5zcGxpY2UoaSwgMCwgcG9pbnQpXG4gICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxuICB9XG4gIHJlc3VsdC5wdXNoKHBvaW50KVxuICByZXR1cm4gcmVzdWx0XG59XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9wb2ludCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFuZ2xlRGlmZihhbHBoYSwgYmV0YSkge1xuICBjb25zdCBtaW5BbmdsZSA9IE1hdGgubWluKGFscGhhLCBiZXRhKVxuICBjb25zdCBtYXhBbmdsZSA9ICBNYXRoLm1heChhbHBoYSwgYmV0YSlcbiAgcmV0dXJuIE1hdGgubWluKG1heEFuZ2xlIC0gbWluQW5nbGUsIG1pbkFuZ2xlICsgTWF0aC5QSSoyIC0gbWF4QW5nbGUpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbmdsZShwMSwgcDIpIHtcbiAgY29uc3QgZGlmZiA9IHAyLnN1YihwMSlcbiAgcmV0dXJuIG5vcm1hbGl6ZUFuZ2xlKE1hdGguYXRhbjIoZGlmZi55LCBkaWZmLngpKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9SYWRpYW4oYW5nbGUpIHtcbiAgcmV0dXJuICgoYW5nbGUgJSAzNjApICogTWF0aC5QSSAvIDE4MClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvRGVncmVlKGFuZ2xlKSB7XG4gIHJldHVybiAoYW5nbGUgKiAxODAgLyBNYXRoLlBJKSAlIDM2MFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRBbmdsZShtaW4sIG1heCwgdmFsKSB7XG4gIGxldCBkbWluLCBkbWF4XG4gIGlmIChtaW4gPCBtYXggJiYgdmFsID4gbWluICYmIHZhbCA8IG1heCkge1xuICAgIHJldHVybiB2YWxcbiAgfSBlbHNlIGlmIChtYXggPCBtaW4gJiYgKHZhbCA8IG1heCB8fCB2YWwgPiBtaW4pKSB7XG4gICAgcmV0dXJuIHZhbFxuICB9IGVsc2Uge1xuICAgIGRtaW4gPSBnZXRBbmdsZURpZmYobWluLCB2YWwpXG4gICAgZG1heCA9IGdldEFuZ2xlRGlmZihtYXgsIHZhbClcbiAgICBpZiAoZG1pbiA8IGRtYXgpIHtcbiAgICAgIHJldHVybiBtaW5cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG1heFxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmVhcmVzdEFuZ2xlKGFyciwgYW5nbGUpIHtcbiAgbGV0IGksIHRlbXAsIGRpZmYgPSBNYXRoLlBJICogMiwgdmFsdWVcbiAgZm9yIChpID0gMDsgaSA8IGFyci5sZW5ndGg7aSsrKSB7XG4gICAgdGVtcCA9IGdldEFuZ2xlRGlmZihhcnJbaV0sIGFuZ2xlKVxuICAgIGlmIChkaWZmIDwgdGVtcCkge1xuICAgICAgZGlmZiA9IHRlbXBcbiAgICAgIHZhbHVlID0gYXJyW2ldXG4gICAgfVxuICB9XG4gIHJldHVybiB2YWx1ZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplQW5nbGUodmFsKSB7XG4gIHdoaWxlICh2YWwgPCAwKSB7XG4gICAgdmFsICs9IDIgKiBNYXRoLlBJXG4gIH1cbiAgd2hpbGUgKHZhbCA+IDIgKiBNYXRoLlBJKSB7XG4gICAgdmFsIC09IDIgKiBNYXRoLlBJXG4gIH1cbiAgcmV0dXJuIHZhbFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKGFuZ2xlLCBsZW5ndGgsIGNlbnRlcikge1xuICBjZW50ZXIgPSBjZW50ZXIgfHwgbmV3IFBvaW50KDAsIDApXG4gIHJldHVybiBjZW50ZXIuYWRkKG5ldyBQb2ludChsZW5ndGggKiBNYXRoLmNvcyhhbmdsZSksIGxlbmd0aCAqIE1hdGguc2luKGFuZ2xlKSkpXG59XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9nZW9tZXRyeS9wb2ludCdcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSAnLi9nZW9tZXRyeS9yZWN0YW5nbGUnXG5pbXBvcnQge1xuICBnZXRQb2ludE9uTGluZUJ5TGVuZ2h0LFxuICBkaXJlY3RDcm9zc2luZyxcbiAgYm91bmRUb0xpbmVcbn0gZnJvbSAnLi9nZW9tZXRyeS9ib3VuZHMnXG5cbmltcG9ydCB7XG4gIGdldEFuZ2xlLFxuICBub3JtYWxpemVBbmdsZSxcbiAgYm91bmRBbmdsZSxcbiAgZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtXG59IGZyb20gJy4vZ2VvbWV0cnkvYW5nbGVzJ1xuXG5leHBvcnQgY2xhc3MgQm91bmQge1xuICBjb25zdHJ1Y3RvciAoKSB7fVxuXG4gIGJvdW5kKHBvaW50LCBfc2l6ZSkge1xuICAgIHJldHVybiBwb2ludFxuICB9XG5cbiAgcmVmcmVzaCAoKSB7fVxuXG4gIHN0YXRpYyBib3VuZGluZygpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyB0aGlzKC4uLmFyZ3VtZW50cylcbiAgICByZXR1cm4gaW5zdGFuY2UuYm91bmQuYmluZChpbnN0YW5jZSlcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb1JlY3RhbmdsZSBleHRlbmRzIEJvdW5kIHtcbiAgY29uc3RydWN0b3IocmVjdGFuZ2xlKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMucmVjdGFuZ2xlID0gcmVjdGFuZ2xlXG4gIH1cblxuICBib3VuZChwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IGNhbGNQb2ludCA9IHBvaW50LmNsb25lKClcbiAgICBjb25zdCByZWN0UDIgPSB0aGlzLnJlY3RhbmdsZS5nZXRQMygpXG5cbiAgICBpZiAodGhpcy5yZWN0YW5nbGUucG9zaXRpb24ueCA+IGNhbGNQb2ludC54KSB7XG4gICAgICAoY2FsY1BvaW50LnggPSB0aGlzLnJlY3RhbmdsZS5wb3NpdGlvbi54KVxuICAgIH1cbiAgICBpZiAodGhpcy5yZWN0YW5nbGUucG9zaXRpb24ueSA+IGNhbGNQb2ludC55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHRoaXMucmVjdGFuZ2xlLnBvc2l0aW9uLnlcbiAgICB9XG4gICAgaWYgKHJlY3RQMi54IDwgY2FsY1BvaW50LnggKyBzaXplLngpIHtcbiAgICAgIGNhbGNQb2ludC54ID0gcmVjdFAyLnggLSBzaXplLnhcbiAgICB9XG4gICAgaWYgKHJlY3RQMi55IDwgY2FsY1BvaW50LnkgKyBzaXplLnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gcmVjdFAyLnkgLSBzaXplLnlcbiAgICB9XG5cbiAgICByZXR1cm4gY2FsY1BvaW50XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9FbGVtZW50IGV4dGVuZHMgQm91bmRUb1JlY3RhbmdsZSB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbnRhaW5lcikge1xuICAgIHN1cGVyKFJlY3RhbmdsZS5mcm9tRWxlbWVudChlbGVtZW50LCBjb250YWluZXIpKVxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lclxuICB9XG5cbiAgcmVmcmVzaCAoKSB7XG4gICAgdGhpcy5yZWN0YW5nbGUgPSBSZWN0YW5nbGUuZnJvbUVsZW1lbnQodGhpcy5lbGVtZW50LCB0aGlzLmNvbnRhaW5lcilcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb0xpbmVYIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3Rvcih4LCBzdGFydFksIGVuZFkpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy54ID0geFxuICAgIHRoaXMuc3RhcnRZID0gc3RhcnRZXG4gICAgdGhpcy5lbmRZID0gZW5kWVxuICB9XG5cbiAgYm91bmQocG9pbnQsIHNpemUpIHtcbiAgICBjb25zdCBjYWxjUG9pbnQgPSBwb2ludC5jbG9uZSgpXG5cbiAgICBjYWxjUG9pbnQueCA9IHRoaXMueFxuICAgIGlmICh0aGlzLnN0YXJ0WSA+IGNhbGNQb2ludC55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHRoaXMuc3RhcnRZXG4gICAgfVxuICAgIGlmICh0aGlzLmVuZFkgPCBjYWxjUG9pbnQueSArIHNpemUueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSB0aGlzLmVuZFkgLSBzaXplLnlcbiAgICB9XG5cbiAgICByZXR1cm4gY2FsY1BvaW50XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9MaW5lWSBleHRlbmRzIEJvdW5kIHtcbiAgY29uc3RydWN0b3IoeSwgc3RhcnRYLCBlbmRYKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMueSA9IHlcbiAgICB0aGlzLnN0YXJ0WCA9IHN0YXJ0WFxuICAgIHRoaXMuZW5kWCA9IGVuZFhcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgY2FsY1BvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIGNhbGNQb2ludC55ID0gdGhpcy55XG4gICAgaWYgKHRoaXMuc3RhcnRYID4gY2FsY1BvaW50LngpIHtcbiAgICAgIGNhbGNQb2ludC54ID0gdGhpcy5zdGFydFhcbiAgICB9XG4gICAgaWYgKHRoaXMuZW5kWCA8IGNhbGNQb2ludC54ICsgc2l6ZS54KSB7XG4gICAgICBjYWxjUG9pbnQueCA9IHRoaXMuZW5kWCAtIHNpemUueFxuICAgIH1cbiAgICByZXR1cm4gY2FsY1BvaW50XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9MaW5lIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3RvcihzdGFydFBvaW50LCBlbmRQb2ludCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnN0YXJ0UG9pbnQgPSBzdGFydFBvaW50XG4gICAgdGhpcy5lbmRQb2ludCA9IGVuZFBvaW50XG4gICAgY29uc3QgYWxwaGEgPSBNYXRoLmF0YW4yKGVuZFBvaW50LnkgLSBzdGFydFBvaW50LnksIGVuZFBvaW50LnggLSBzdGFydFBvaW50LngpXG4gICAgY29uc3QgYmV0YSA9IGFscGhhICsgTWF0aC5QSSAvIDJcbiAgICB0aGlzLnNvbWVLID0gMTBcbiAgICB0aGlzLmNvc0JldGEgPSBNYXRoLmNvcyhiZXRhKVxuICAgIHRoaXMuc2luQmV0YSA9IE1hdGguc2luKGJldGEpXG4gIH1cblxuICBib3VuZChwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IHBvaW50MiA9IG5ldyBQb2ludChcbiAgICAgIHBvaW50LnggKyB0aGlzLnNvbWVLICogdGhpcy5jb3NCZXRhLFxuICAgICAgcG9pbnQueSArIHRoaXMuc29tZUsgKiB0aGlzLnNpbkJldGFcbiAgICApXG5cbiAgICBjb25zdCBuZXdFbmRQb2ludCA9IGdldFBvaW50T25MaW5lQnlMZW5naHQodGhpcy5lbmRQb2ludCwgdGhpcy5zdGFydFBvaW50LCBzaXplLngpXG4gICAgY29uc3QgcG9pbnRDcm9zc2luZyA9IGRpcmVjdENyb3NzaW5nKHRoaXMuc3RhcnRQb2ludCwgdGhpcy5lbmRQb2ludCwgcG9pbnQsIHBvaW50MilcblxuICAgIHJldHVybiBib3VuZFRvTGluZSh0aGlzLnN0YXJ0UG9pbnQsIG5ld0VuZFBvaW50LCBwb2ludENyb3NzaW5nKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvQ2lyY2xlIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3RvcihjZW50ZXIsIHJhZGl1cykge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLmNlbnRlciA9IGNlbnRlclxuICAgIHRoaXMucmFkaXVzID0gcmFkaXVzXG4gIH1cblxuICBib3VuZChwb2ludCwgX3NpemUpIHtcbiAgICByZXR1cm4gZ2V0UG9pbnRPbkxpbmVCeUxlbmdodCh0aGlzLmNlbnRlciwgcG9pbnQsIHRoaXMucmFkaXVzKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvQXJjIGV4dGVuZHMgQm91bmRUb0NpcmNsZSB7XG4gIGNvbnN0cnVjdG9yKGNlbnRlciwgcmFkaXVzLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSkge1xuICAgIHN1cGVyKGNlbnRlciwgcmFkaXVzKVxuICAgIHRoaXMuX3N0YXJ0QW5nbGUgPSBzdGFydEFuZ2xlXG4gICAgdGhpcy5fZW5kQW5nbGUgPSBlbmRBbmdsZVxuICB9XG5cbiAgc3RhcnRBbmdsZSgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMuX3N0YXJ0QW5nbGUgPT09ICdmdW5jdGlvbicgPyB0aGlzLl9zdGFydEFuZ2xlKCkgOiB0aGlzLl9zdGFydEFuZ2xlXG4gIH1cblxuICBlbmRBbmdsZSgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMuX2VuZEFuZ2xlID09PSAnZnVuY3Rpb24nID8gdGhpcy5fZW5kQW5nbGUoKSA6IHRoaXMuX2VuZEFuZ2xlXG4gIH1cblxuICBib3VuZChwb2ludCwgX3NpemUpIHtcbiAgICBsZXQgYW5nbGUgPSBnZXRBbmdsZSh0aGlzLmNlbnRlciwgcG9pbnQpXG4gICAgYW5nbGUgPSBub3JtYWxpemVBbmdsZShhbmdsZSlcbiAgICBhbmdsZSA9IGJvdW5kQW5nbGUodGhpcy5zdGFydEFuZ2xlKCksIHRoaXMuZW5kQW5nbGUoKSwgYW5nbGUpXG4gICAgcmV0dXJuIGdldFBvaW50RnJvbVJhZGlhbFN5c3RlbShhbmdsZSwgdGhpcy5yYWRpdXMsIHRoaXMuY2VudGVyKVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhcnJheSwgdmFsKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoYXJyYXlbaV0gPT09IHZhbCkge1xuICAgICAgYXJyYXkuc3BsaWNlKGksIDEpXG4gICAgICBpLS1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycmF5XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByYW5nZShzdGFydCwgc3RvcCwgc3RlcCkge1xuICBjb25zdCByZXN1bHQgPSBbXVxuICBpZiAodHlwZW9mIHN0b3AgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgc3RvcCA9IHN0YXJ0XG4gICAgc3RhcnQgPSAwXG4gIH1cbiAgaWYgKHR5cGVvZiBzdGVwID09PSAndW5kZWZpbmVkJykge1xuICAgIHN0ZXAgPSAxXG4gIH1cbiAgaWYgKChzdGVwID4gMCAmJiBzdGFydCA+PSBzdG9wKSB8fCAoc3RlcCA8IDAgJiYgc3RhcnQgPD0gc3RvcCkpIHtcbiAgICByZXR1cm4gW11cbiAgfVxuICBmb3IgKGxldCBpID0gc3RhcnQ7IHN0ZXAgPiAwID8gaSA8IHN0b3AgOiBpID4gc3RvcDsgaSArPSBzdGVwKSB7XG4gICAgcmVzdWx0LnB1c2goaSlcbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9nZW9tZXRyeS9wb2ludCdcbmltcG9ydCB7IGFkZFBvaW50VG9Cb3VuZFBvaW50cyB9IGZyb20gJy4vZ2VvbWV0cnkvYm91bmRzJ1xuXG5pbXBvcnQge1xuICBpbmRleE9mTmVhcmVzdFBvaW50LFxuICBnZXREaXN0YW5jZVxufSBmcm9tICcuL2dlb21ldHJ5L2Rpc3RhbmNlcydcblxuY2xhc3MgQmFzaWNTdHJhdGVneSB7XG4gIGNvbnN0cnVjdG9yKHJlY3RhbmdsZSwgb3B0aW9ucz17fSkge1xuICAgIHRoaXMucmVjdGFuZ2xlID0gcmVjdGFuZ2xlXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9uc1xuICB9XG5cbiAgZ2V0IGJvdW5kUmVjdCAoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGlzLnJlY3RhbmdsZSA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMucmVjdGFuZ2xlKCkgOiB0aGlzLnJlY3RhbmdsZVxuICB9XG59XG5cbmNsYXNzIE5vdENyb3NzaW5nU3RyYXRlZ3kgZXh0ZW5kcyBCYXNpY1N0cmF0ZWd5IHtcbiAgcG9zaXRpb25pbmcgKHJlY3RhbmdsZUxpc3QsIGluZGV4ZXNPZk5ld3MpIHtcbiAgICBjb25zdCBzdGF0aWNSZWN0YW5nbGVJbmRleGVzID0gcmVjdGFuZ2xlTGlzdC5yZWR1Y2UoKGluZGV4ZXMsIF9yZWN0LCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGluZGV4ZXNPZk5ld3MuaW5kZXhPZihpbmRleCkgPT09IC0xKSB7XG4gICAgICAgIGluZGV4ZXMucHVzaChpbmRleClcbiAgICAgIH1cbiAgICAgIHJldHVybiBpbmRleGVzXG4gICAgfSwgW10pXG5cbiAgICBpbmRleGVzT2ZOZXdzLmZvckVhY2goKGluZGV4KSA9PiB7XG4gICAgICBsZXQgcmVjdCA9IHJlY3RhbmdsZUxpc3RbaW5kZXhdXG4gICAgICBsZXQgcmVtb3ZhYmxlID0gZmFsc2VcblxuICAgICAgc3RhdGljUmVjdGFuZ2xlSW5kZXhlcy5mb3JFYWNoKChpbmRleE9mU3RhdGljKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YXRpY1JlY3QgPSByZWN0YW5nbGVMaXN0W2luZGV4T2ZTdGF0aWNdXG4gICAgICAgIHJlY3QgPSBzdGF0aWNSZWN0Lm1vdmVUb0JvdW5kKHJlY3QpXG4gICAgICB9KVxuXG4gICAgICByZW1vdmFibGUgPSBzdGF0aWNSZWN0YW5nbGVJbmRleGVzLnNvbWUoKGluZGV4T2ZTdGF0aWMpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhdGljUmVjdCA9IHJlY3RhbmdsZUxpc3RbaW5kZXhPZlN0YXRpY11cbiAgICAgICAgcmV0dXJuICAhIXN0YXRpY1JlY3QuYW5kKHJlY3QpXG4gICAgICB9KSB8fCByZWN0LmFuZCh0aGlzLmJvdW5kUmVjdCkuZ2V0U3F1YXJlKCkgIT09IHJlY3QuZ2V0U3F1YXJlKClcblxuICAgICAgaWYgKHJlbW92YWJsZSkge1xuICAgICAgICByZWN0LnJlbW92YWJsZSA9IHRydWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMucHVzaChpbmRleClcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiByZWN0YW5nbGVMaXN0XG4gIH1cblxuICBzb3J0aW5nKG9kbERyYWdnYWJsZXNMaXN0LCBuZXdEcmFnZ2FibGVzLCBpbmRleE9mTmV3cykge1xuICAgIGNvbnN0IGRyYWdnYWJsZXMgPSBvZGxEcmFnZ2FibGVzTGlzdC5jb25jYXQobmV3RHJhZ2dhYmxlcylcbiAgICBuZXdEcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgaW5kZXhPZk5ld3MucHVzaChkcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSlcbiAgICB9KVxuICAgIHJldHVybiBkcmFnZ2FibGVzXG4gIH1cbn1cblxuY2xhc3MgRmxvYXRMZWZ0U3RyYXRlZ3kgZXh0ZW5kcyBCYXNpY1N0cmF0ZWd5IHtcbiAgY29uc3RydWN0b3IocmVjdGFuZ2xlLCBvcHRpb25zPXt9KSB7XG4gICAgc3VwZXIocmVjdGFuZ2xlLCBvcHRpb25zKVxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgcmVtb3ZhYmxlOiB0cnVlXG4gICAgfSwgb3B0aW9ucylcblxuICAgIHRoaXMucmFkaXVzID0gb3B0aW9ucy5yYWRpdXMgfHwgODBcblxuICAgIHRoaXMucGFkZGluZ1RvcExlZnQgPSBvcHRpb25zLnBhZGRpbmdUb3BMZWZ0IHx8IG5ldyBQb2ludCgwLCAwKVxuICAgIHRoaXMucGFkZGluZ0JvdHRvbVJpZ2h0ID0gb3B0aW9ucy5wYWRkaW5nQm90dG9tUmlnaHQgfHwgbmV3IFBvaW50KDAsIDApXG4gICAgdGhpcy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgPSBvcHRpb25zLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyB8fCAwXG5cbiAgICB0aGlzLmdldERpc3RhbmNlID0gb3B0aW9ucy5nZXREaXN0YW5jZSB8fCBnZXREaXN0YW5jZVxuICAgIHRoaXMuZ2V0UG9zaXRpb24gPSBvcHRpb25zLmdldFBvc2l0aW9uIHx8ICgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucG9zaXRpb24pXG4gIH1cblxuICBwb3NpdGlvbmluZyhyZWN0YW5nbGVMaXN0LCBfaW5kZXhlc09mTmV3cykge1xuICAgIGNvbnN0IGJvdW5kUmVjdCA9IHRoaXMuYm91bmRSZWN0XG4gICAgY29uc3QgcmVjdFAyID0gYm91bmRSZWN0LmdldFAyKClcbiAgICBsZXQgYm91bmRhcnlQb2ludHMgPSBbYm91bmRSZWN0LnBvc2l0aW9uXVxuXG4gICAgcmVjdGFuZ2xlTGlzdC5mb3JFYWNoKChyZWN0LCByZWN0SW5kZXgpID0+IHtcbiAgICAgIGxldCBwb3NpdGlvbiwgaXNWYWxpZCA9IGZhbHNlXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvdW5kYXJ5UG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHBvc2l0aW9uID0gbmV3IFBvaW50KFxuICAgICAgICAgIGJvdW5kYXJ5UG9pbnRzW2ldLnggKyB0aGlzLnBhZGRpbmdUb3BMZWZ0LngsXG4gICAgICAgICAgaSA+IDAgPyAoYm91bmRhcnlQb2ludHNbaSAtIDFdLnkgKyB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcykgOiAoYm91bmRSZWN0LnBvc2l0aW9uLnkgKyB0aGlzLnBhZGRpbmdUb3BMZWZ0LnkpXG4gICAgICAgIClcblxuICAgICAgICBpc1ZhbGlkID0gKHBvc2l0aW9uLnggKyByZWN0LnNpemUueCA8IHJlY3RQMi54KVxuXG4gICAgICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgcG9zaXRpb24gPSBuZXcgUG9pbnQoXG4gICAgICAgICAgYm91bmRSZWN0LnBvc2l0aW9uLnggKyB0aGlzLnBhZGRpbmdUb3BMZWZ0LngsXG4gICAgICAgICAgYm91bmRhcnlQb2ludHNbYm91bmRhcnlQb2ludHMubGVuZ3RoIC0gMV0ueSArIChyZWN0SW5kZXggPiAwID8gdGhpcy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgOiB0aGlzLnBhZGRpbmdUb3BMZWZ0LnkpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgcmVjdC5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnJlbW92YWJsZSAmJiByZWN0LmdldFAzKCkueSA+IGJvdW5kUmVjdC5nZXRQMygpLnkpIHtcbiAgICAgICAgcmVjdC5yZW1vdmFibGUgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGJvdW5kYXJ5UG9pbnRzID0gYWRkUG9pbnRUb0JvdW5kUG9pbnRzKGJvdW5kYXJ5UG9pbnRzLCByZWN0LmdldFAzKCkuYWRkKHRoaXMucGFkZGluZ0JvdHRvbVJpZ2h0KSlcbiAgICB9KVxuICAgIHJldHVybiByZWN0YW5nbGVMaXN0XG4gIH1cblxuICBzb3J0aW5nKG9kbERyYWdnYWJsZXNMaXN0LCBuZXdEcmFnZ2FibGVzLCBpbmRleE9mTmV3cykge1xuICAgIGNvbnN0IG5ld0xpc3QgPSBvZGxEcmFnZ2FibGVzTGlzdC5jb25jYXQoKVxuICAgIGNvbnN0IGxpc3RPbGRQb3NpdGlvbiA9IG9kbERyYWdnYWJsZXNMaXN0Lm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUuZ2V0UG9zaXRpb24oKSlcbiAgICBuZXdEcmFnZ2FibGVzLmZvckVhY2goKG5ld0RyYWdnYWJsZSkgPT4ge1xuICAgICAgbGV0IGluZGV4ID0gaW5kZXhPZk5lYXJlc3RQb2ludChsaXN0T2xkUG9zaXRpb24sIHRoaXMuZ2V0UG9zaXRpb24obmV3RHJhZ2dhYmxlKSwgdGhpcy5yYWRpdXMsIHRoaXMuZ2V0RGlzdGFuY2UpXG4gICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgIGluZGV4ID0gbmV3TGlzdC5sZW5ndGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluZGV4ID0gbmV3TGlzdC5pbmRleE9mKG9kbERyYWdnYWJsZXNMaXN0W2luZGV4XSlcbiAgICAgIH1cbiAgICAgIG5ld0xpc3Quc3BsaWNlKGluZGV4LCAwLCBuZXdEcmFnZ2FibGUpXG4gICAgfSlcbiAgICBuZXdEcmFnZ2FibGVzLmZvckVhY2goKG5ld0RyYWdnYWJsZSkgPT4ge1xuICAgICAgaW5kZXhPZk5ld3MucHVzaChuZXdMaXN0LmluZGV4T2YobmV3RHJhZ2dhYmxlKSlcbiAgICB9KVxuICAgIHJldHVybiBuZXdMaXN0XG4gIH1cbn1cblxuY2xhc3MgRmxvYXRSaWdodFN0cmF0ZWd5IGV4dGVuZHMgRmxvYXRMZWZ0U3RyYXRlZ3kge1xuICBjb25zdHJ1Y3RvcihyZWN0YW5nbGUsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcihyZWN0YW5nbGUsIG9wdGlvbnMpXG5cbiAgICB0aGlzLnBhZGRpbmdUb3BSaWdodCA9IG9wdGlvbnMucGFkZGluZ1RvcFJpZ2h0IHx8IG5ldyBQb2ludCg1LCA1KVxuICAgIHRoaXMucGFkZGluZ0JvdHRvbUxlZnQgPSBvcHRpb25zLnBhZGRpbmdCb3R0b21MZWZ0IHx8IG5ldyBQb2ludCgwLCAwKVxuICAgIHRoaXMueUdhcEJldHdlZW5EcmFnZ2FibGVzID0gb3B0aW9ucy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgfHwgMFxuXG4gICAgdGhpcy5wYWRkaW5nQm90dG9tTmVnTGVmdCA9IG5ldyBQb2ludCgtdGhpcy5wYWRkaW5nQm90dG9tTGVmdC54LCB0aGlzLnBhZGRpbmdCb3R0b21MZWZ0LnkpXG4gIH1cblxuICBwb3NpdGlvbmluZyhyZWN0YW5nbGVMaXN0LCBfaW5kZXhlc09mTmV3cykge1xuICAgIGNvbnN0IGJvdW5kUmVjdCA9IHRoaXMuYm91bmRSZWN0XG4gICAgbGV0IGJvdW5kYXJ5UG9pbnRzID0gW2JvdW5kUmVjdC5nZXRQMigpXVxuXG4gICAgcmVjdGFuZ2xlTGlzdC5mb3JFYWNoKChyZWN0LCByZWN0SW5kZXgpID0+IHtcbiAgICAgIGxldCBwb3NpdGlvbiwgaXNWYWxpZCA9IGZhbHNlXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvdW5kYXJ5UG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHBvc2l0aW9uID0gbmV3IFBvaW50KFxuICAgICAgICAgIGJvdW5kYXJ5UG9pbnRzW2ldLnggLSByZWN0LnNpemUueCAtIHRoaXMucGFkZGluZ1RvcFJpZ2h0LngsXG4gICAgICAgICAgaSA+IDAgPyAoYm91bmRhcnlQb2ludHNbaSAtIDFdLnkgKyB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcykgOiAoYm91bmRSZWN0LnBvc2l0aW9uLnkgKyB0aGlzLnBhZGRpbmdUb3BSaWdodC55KVxuICAgICAgICApXG5cbiAgICAgICAgaXNWYWxpZCA9IChwb3NpdGlvbi54ID4gcmVjdC5wb3NpdGlvbi54KVxuICAgICAgICBpZiAoaXNWYWxpZCkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICBwb3NpdGlvbiA9IG5ldyBQb2ludChcbiAgICAgICAgICBib3VuZFJlY3QuZ2V0UDIoKS54ICAtIHJlY3Quc2l6ZS54IC0gdGhpcy5wYWRkaW5nVG9wUmlnaHQueCxcbiAgICAgICAgICBib3VuZGFyeVBvaW50c1tib3VuZGFyeVBvaW50cy5sZW5ndGggLSAxXS55ICsgKHJlY3RJbmRleCA+IDAgPyB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyA6IHRoaXMucGFkZGluZ1RvcFJpZ2h0LnkpXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIHJlY3QucG9zaXRpb24gPSBwb3NpdGlvblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZW1vdmFibGUgJiYgcmVjdC5nZXRQNCgpLnkgPiBib3VuZFJlY3QuZ2V0UDQoKS55KSB7XG4gICAgICAgIHJlY3QucmVtb3ZhYmxlID0gdHJ1ZVxuICAgICAgfVxuICAgICAgYm91bmRhcnlQb2ludHMgPSBhZGRQb2ludFRvQm91bmRQb2ludHMoYm91bmRhcnlQb2ludHMsIHJlY3QuZ2V0UDQoKS5hZGQodGhpcy5wYWRkaW5nQm90dG9tTmVnTGVmdCksIHRydWUpXG4gICAgfSlcbiAgICByZXR1cm4gcmVjdGFuZ2xlTGlzdFxuICB9XG59XG5cbmV4cG9ydCB7IE5vdENyb3NzaW5nU3RyYXRlZ3ksIEZsb2F0TGVmdFN0cmF0ZWd5LCBGbG9hdFJpZ2h0U3RyYXRlZ3kgfVxuIiwiaW1wb3J0IHJhbmdlIGZyb20gJy4vdXRpbHMvcmFuZ2UuanMnXG5pbXBvcnQgcmVtb3ZlSXRlbSBmcm9tICcuL3V0aWxzL3JlbW92ZS1hcnJheS1pdGVtJ1xuaW1wb3J0IGdldERlZmF1bHRDb250YWluZXIgZnJvbSAnLi91dGlscy9nZXQtZGVmYXVsdC1jb250YWluZXInXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnRFbWl0dGVyJ1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tICcuL2dlb21ldHJ5L3JlY3RhbmdsZSdcbmltcG9ydCB7IHRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3RvcnkgfSBmcm9tICcuL2dlb21ldHJ5L2Rpc3RhbmNlcydcbmltcG9ydCB7IHNjb3BlcywgZGVmYXVsdFNjb3BlIH0gZnJvbSAnLi9zY29wZSdcblxuaW1wb3J0IHsgRmxvYXRMZWZ0U3RyYXRlZ3kgfSBmcm9tICcuL3Bvc2l0aW9uaW5nJ1xuaW1wb3J0IHsgQm91bmRUb0VsZW1lbnQgfSBmcm9tICcuL2JvdW5kaW5nJ1xuXG5jb25zdCBhZGRUb0RlZmF1bHRTY29wZSA9IGZ1bmN0aW9uKHRhcmdldCkge1xuICBkZWZhdWx0U2NvcGUuYWRkVGFyZ2V0KHRhcmdldClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFyZ2V0IGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgZHJhZ2dhYmxlcywgb3B0aW9ucyA9IHt9KSB7XG4gICAgc3VwZXIob3B0aW9ucylcbiAgICBjb25zdCB0YXJnZXQgPSB0aGlzXG5cbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHRpbWVFbmQ6IDIwMCxcbiAgICAgIHRpbWVFeGNhbmdlOiA0MDBcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGhpcy5wb3NpdGlvbmluZ1N0cmF0ZWd5ID0gb3B0aW9ucy5zdHJhdGVneSB8fCBuZXcgRmxvYXRMZWZ0U3RyYXRlZ3koXG4gICAgICB0aGlzLmdldFJlY3RhbmdsZS5iaW5kKHRoaXMpLFxuICAgICAge1xuICAgICAgICByYWRpdXM6IDgwLFxuICAgICAgICBnZXREaXN0YW5jZTogdHJhbnNmb3JtZWRTcGFjZURpc3RhbmNlRmFjdG9yeSh7IHg6IDEsIHk6IDQgfSksXG4gICAgICAgIHJlbW92YWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIClcblxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgICBkcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnRhcmdldHMucHVzaCh0YXJnZXQpKVxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZXNcblxuICAgIFRhcmdldC5lbWl0dGVyLmVtaXQoJ3RhcmdldDpjcmVhdGUnLCB0aGlzKVxuXG4gICAgdGhpcy5zdGFydEJvdW5kaW5nKClcbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgc3RhcnRCb3VuZGluZygpIHtcbiAgICB0aGlzLmJvdW5kID0gdGhpcy5vcHRpb25zLmJvdW5kIHx8IEJvdW5kVG9FbGVtZW50LmJvdW5kaW5nKHRoaXMuZWxlbWVudClcbiAgfVxuXG4gIHBvc2l0aW9uaW5nIChkcmFnZ2FibGVzLCBpbmRleGVzT2ZOZXcpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbmluZ1N0cmF0ZWd5LnBvc2l0aW9uaW5nKGRyYWdnYWJsZXMsIGluZGV4ZXNPZk5ldylcbiAgfVxuXG4gIHNvcnRpbmcgKG9sZERyYWdnYWJsZXMsIG5ld0RyYWdnYWJsZXMsIGluZGV4T2ZOZXdzKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25pbmdTdHJhdGVneS5zb3J0aW5nKG9sZERyYWdnYWJsZXMsIG5ld0RyYWdnYWJsZXMsIGluZGV4T2ZOZXdzKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBsZXQgcmVjdGFuZ2xlcywgaW5kZXhlc09mTmV3XG5cbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcyA9IHRoaXMuZHJhZ2dhYmxlcy5maWx0ZXIoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgbGV0IGVsZW1lbnQgPSBkcmFnZ2FibGUuZWxlbWVudC5wYXJlbnROb2RlXG4gICAgICB3aGlsZSAoZWxlbWVudCkge1xuICAgICAgICBpZiAoZWxlbWVudCA9PT0gdGhpcy5lbGVtZW50KSB7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlXG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9KVxuXG4gICAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmxlbmd0aCkge1xuICAgICAgaW5kZXhlc09mTmV3ID0gcmFuZ2UodGhpcy5pbm5lckRyYWdnYWJsZXMubGVuZ3RoKVxuICAgICAgcmVjdGFuZ2xlcyA9IHRoaXMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgICAgfSksIGluZGV4ZXNPZk5ldylcbiAgICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgaW5kZXhlc09mTmV3KVxuICAgICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB0aGlzLmVtaXQoJ3RhcmdldDphZGQnLCBkcmFnZ2FibGUpKVxuICAgIH1cbiAgfVxuXG4gIGdldFJlY3RhbmdsZSgpIHtcbiAgICByZXR1cm4gUmVjdGFuZ2xlLmZyb21FbGVtZW50KFxuICAgICAgdGhpcy5lbGVtZW50LFxuICAgICAgdGhpcy5jb250YWluZXIsXG4gICAgICB0aGlzLm9wdGlvbnMuaXNDb250ZW50Qm94U2l6ZSxcbiAgICAgIHRydWVcbiAgICApXG4gIH1cblxuICBjYXRjaERyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmNhdGNoRHJhZ2dhYmxlKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmNhdGNoRHJhZ2dhYmxlKHRoaXMsIGRyYWdnYWJsZSlcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGFyZ2V0UmVjdGFuZ2xlID0gdGhpcy5nZXRSZWN0YW5nbGUoKVxuICAgICAgY29uc3QgZHJhZ2dhYmxlU3F1YXJlID0gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpLmdldFNxdWFyZSgpXG5cbiAgICAgIHJldHVybiBkcmFnZ2FibGVTcXVhcmUgPCB0YXJnZXRSZWN0YW5nbGUuZ2V0U3F1YXJlKClcbiAgICAgICAgICAgICAgJiYgdGFyZ2V0UmVjdGFuZ2xlLmluY2x1ZGVQb2ludChkcmFnZ2FibGUuZ2V0Q2VudGVyKCkpXG4gICAgfVxuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UmVjdGFuZ2xlKCkucG9zaXRpb25cbiAgfVxuXG4gIGdldFNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UmVjdGFuZ2xlKCkuc2l6ZVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICBzY29wZXMuZm9yRWFjaCgoc2NvcGUpID0+IHJlbW92ZUl0ZW0oc2NvcGUudGFyZ2V0cywgdGhpcykpXG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgfSksIFtdKVxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgW10sIDApXG4gIH1cblxuICBvbkVuZChkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBuZXdEcmFnZ2FibGVzSW5kZXggPSBbXVxuXG4gICAgaWYgKHRoaXMuZ2V0UmVjdGFuZ2xlKCkuaW5jbHVkZVBvaW50KGRyYWdnYWJsZS5nZXRDZW50ZXIoKSkpIHtcbiAgICAgIGRyYWdnYWJsZS5wb3NpdGlvbiA9IHRoaXMuYm91bmQoZHJhZ2dhYmxlLnBvc2l0aW9uLCBkcmFnZ2FibGUuZ2V0U2l6ZSgpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICB0aGlzLmVtaXQoJ3RhcmdldDpiZWZvcmVBZGQnLCBkcmFnZ2FibGUpXG5cbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcyA9IHRoaXMuc29ydGluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcywgW2RyYWdnYWJsZV0sIG5ld0RyYWdnYWJsZXNJbmRleClcbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBuZXdEcmFnZ2FibGVzSW5kZXgpXG5cbiAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIG5ld0RyYWdnYWJsZXNJbmRleClcbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMSkge1xuICAgICAgdGhpcy5hZGRSZW1vdmVPbk1vdmUoZHJhZ2dhYmxlKVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgaW5kZXhlc09mTmV3LCB0aW1lKSB7XG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuc2xpY2UoMCkuZm9yRWFjaCgoZHJhZ2dhYmxlLCBpKSA9PiB7XG4gICAgICBjb25zdCByZWN0ID0gcmVjdGFuZ2xlc1tpXSxcbiAgICAgICAgdGltZUVuZCA9IHRpbWUgfHwgdGltZSA9PT0gMCA/IHRpbWUgOiBpbmRleGVzT2ZOZXcuaW5kZXhPZihpKSAhPT0gLTEgPyB0aGlzLm9wdGlvbnMudGltZUVuZCA6IHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZVxuXG4gICAgICBpZiAocmVjdC5yZW1vdmFibGUpIHtcbiAgICAgICAgZHJhZ2dhYmxlLm1vdmUoZHJhZ2dhYmxlLmluaXRpYWxQb3NpdGlvbiwgdGltZUVuZCwgdHJ1ZSwgdHJ1ZSlcbiAgICAgICAgcmVtb3ZlSXRlbSh0aGlzLmlubmVyRHJhZ2dhYmxlcywgZHJhZ2dhYmxlKVxuICAgICAgICB0aGlzLmVtaXQoJ3RhcmdldDpyZW1vdmUnLCBkcmFnZ2FibGUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkcmFnZ2FibGUubW92ZShyZWN0LnBvc2l0aW9uLCB0aW1lRW5kLCB0cnVlLCB0cnVlKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBhZGQoZHJhZ2dhYmxlLCB0aW1lKSB7XG4gICAgY29uc3QgbmV3RHJhZ2dhYmxlc0luZGV4ID0gdGhpcy5pbm5lckRyYWdnYWJsZXMubGVuZ3RoXG5cbiAgICB0aGlzLmVtaXQoJ3RhcmdldDpiZWZvcmVBZGQnLCBkcmFnZ2FibGUpXG5cbiAgICB0aGlzLnB1c2hJbm5lckRyYWdnYWJsZShkcmFnZ2FibGUpXG4gICAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgbmV3RHJhZ2dhYmxlc0luZGV4LCBkcmFnZ2FibGUpXG5cbiAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIFtuZXdEcmFnZ2FibGVzSW5kZXhdLCB0aW1lIHx8IDApXG4gICAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTEpIHtcbiAgICAgIHRoaXMuYWRkUmVtb3ZlT25Nb3ZlKGRyYWdnYWJsZSlcbiAgICB9XG4gIH1cblxuICBwdXNoSW5uZXJEcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKT09PS0xKSB7XG4gICAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5wdXNoKGRyYWdnYWJsZSlcbiAgICB9XG4gIH1cblxuICBhZGRSZW1vdmVPbk1vdmUoZHJhZ2dhYmxlKSB7XG4gICAgZHJhZ2dhYmxlLm9uKCdkcmFnOm1vdmUnLCB0aGlzLnJlbW92ZUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICB0aGlzLnJlbW92ZShkcmFnZ2FibGUpXG4gICAgfSlcblxuICAgIHRoaXMuZW1pdCgndGFyZ2V0OmFkZCcsIGRyYWdnYWJsZSlcbiAgfVxuXG4gIHJlbW92ZShkcmFnZ2FibGUpIHtcbiAgICBkcmFnZ2FibGUudW5zdWJzY3JpYmUoJ2RyYWc6bW92ZScsIHRoaXMucmVtb3ZlSGFuZGxlcilcblxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpXG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuc3BsaWNlKGluZGV4LCAxKVxuXG4gICAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgW10pXG5cbiAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIFtdKVxuICAgIHRoaXMuZW1pdCgndGFyZ2V0OnJlbW92ZScsIGRyYWdnYWJsZSlcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLm1vdmUoZHJhZ2dhYmxlLmluaXRpYWxQb3NpdGlvbiwgMCwgdHJ1ZSwgdHJ1ZSlcbiAgICAgIHRoaXMuZW1pdCgndGFyZ2V0OnJlbW92ZScsIGRyYWdnYWJsZSlcbiAgICB9KVxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzID0gW11cbiAgfVxuXG4gIGdldFNvcnRlZERyYWdnYWJsZXMoKSB7XG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuc2xpY2UoKVxuICB9XG5cbiAgZ2V0IGNvbnRhaW5lcigpIHtcbiAgICByZXR1cm4gKHRoaXMuX2NvbnRhaW5lciA9IHRoaXMuX2NvbnRhaW5lciB8fCB0aGlzLm9wdGlvbnMuY29udGFpbmVyIHx8IHRoaXMub3B0aW9ucy5wYXJlbnQgfHwgZ2V0RGVmYXVsdENvbnRhaW5lcih0aGlzLmVsZW1lbnQpKVxuICB9XG59XG5cblRhcmdldC5lbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcigpXG5UYXJnZXQuZW1pdHRlci5vbigndGFyZ2V0OmNyZWF0ZScsIGFkZFRvRGVmYXVsdFNjb3BlKVxuIiwiaW1wb3J0IHJlbW92ZUl0ZW0gZnJvbSAnLi91dGlscy9yZW1vdmUtYXJyYXktaXRlbSdcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudEVtaXR0ZXInXG5pbXBvcnQgRHJhZ2dhYmxlIGZyb20gJy4vZHJhZ2dhYmxlJ1xuaW1wb3J0IFRhcmdldCBmcm9tICcuL3RhcmdldCdcblxuY29uc3Qgc2NvcGVzID0gW11cblxuY2xhc3MgU2NvcGUgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvcihkcmFnZ2FibGVzLCB0YXJnZXRzLCBvcHRpb25zPXt9KSB7XG4gICAgc3VwZXIob3B0aW9ucylcbiAgICBzY29wZXMuZm9yRWFjaCgoc2NvcGUpID0+IHtcbiAgICAgIGlmIChkcmFnZ2FibGVzKSB7XG4gICAgICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICAgICAgcmVtb3ZlSXRlbShzY29wZS5kcmFnZ2FibGVzLCBkcmFnZ2FibGUpXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIGlmICh0YXJnZXRzKSB7XG4gICAgICAgIHRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB7XG4gICAgICAgICAgcmVtb3ZlSXRlbShzY29wZS50YXJnZXRzLCB0YXJnZXQpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZXMgfHwgW11cbiAgICB0aGlzLnRhcmdldHMgPSB0YXJnZXRzIHx8IFtdXG4gICAgc2NvcGVzLnB1c2godGhpcylcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICB0aW1lRW5kOiAob3B0aW9ucy50aW1lRW5kKSB8fCA0MDBcbiAgICB9XG5cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUuZHJhZ0VuZEFjdGlvbiA9ICgpID0+IHRoaXMub25FbmQoZHJhZ2dhYmxlKVxuICAgIH0pXG4gIH1cblxuICBhZGREcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxuICAgIGRyYWdnYWJsZS5kcmFnRW5kQWN0aW9uID0gKCkgPT4gdGhpcy5vbkVuZChkcmFnZ2FibGUpXG4gIH1cblxuICBhZGRUYXJnZXQodGFyZ2V0KSB7XG4gICAgdGhpcy50YXJnZXRzLnB1c2godGFyZ2V0KVxuICB9XG5cbiAgb25FbmQoZHJhZ2dhYmxlKSB7XG4gICAgY29uc3Qgc2hvdFRhcmdldHMgPSB0aGlzLnRhcmdldHMuZmlsdGVyKCh0YXJnZXQpID0+IHtcbiAgICAgIHJldHVybiB0YXJnZXQuZHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkgIT09IC0xXG4gICAgfSkuZmlsdGVyKCh0YXJnZXQpID0+IHtcbiAgICAgIHJldHVybiB0YXJnZXQuY2F0Y2hEcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICAgIH0pLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIHJldHVybiBhLmdldFJlY3RhbmdsZSgpLmdldFNxdWFyZSgpIC0gYi5nZXRSZWN0YW5nbGUoKS5nZXRTcXVhcmUoKVxuICAgIH0pXG5cbiAgICBpZiAoc2hvdFRhcmdldHMubGVuZ3RoKSB7XG4gICAgICBzaG90VGFyZ2V0c1swXS5vbkVuZChkcmFnZ2FibGUpXG4gICAgfSBlbHNlIGlmIChkcmFnZ2FibGUudGFyZ2V0cy5sZW5ndGgpIHtcbiAgICAgIGRyYWdnYWJsZS5waW5Qb3NpdGlvbihkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uLCB0aGlzLm9wdGlvbnMudGltZUVuZClcbiAgICB9XG5cbiAgICB0aGlzLmVtaXQoJ3Njb3BlOmNoYW5nZScpXG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLnRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB0YXJnZXQucmVzZXQoKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnJlZnJlc2goKSlcbiAgICB0aGlzLnRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB0YXJnZXQucmVmcmVzaCgpKVxuICB9XG5cbiAgZ2V0IHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXRzLm1hcCgodGFyZ2V0KSA9PiB7XG4gICAgICByZXR1cm4gdGFyZ2V0LmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4gdGhpcy5kcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSlcbiAgICB9KVxuICB9XG5cbiAgc2V0IHBvc2l0aW9ucyhwb3NpdGlvbnMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gJ3dyb25nIGFycmF5IGxlbmd0aCdcbiAgICBpZiAocG9zaXRpb25zLmxlbmd0aCA9PT0gdGhpcy50YXJnZXRzLmxlbmd0aCkge1xuICAgICAgdGhpcy50YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4gdGFyZ2V0LnJlc2V0KCkpXG5cbiAgICAgIHBvc2l0aW9ucy5mb3JFYWNoKCh0YXJnZXRJbmRleGVzLCBpKSA9PiB7XG4gICAgICAgIHRhcmdldEluZGV4ZXMuZm9yRWFjaCgoaW5kZXgpID0+IHtcbiAgICAgICAgICB0aGlzLnRhcmdldHNbaV0uYWRkKHRoaXMuZHJhZ2dhYmxlc1tpbmRleF0pXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBtZXNzYWdlXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IGRlZmF1bHRTY29wZSA9IG5ldyBTY29wZSgpXG5cbmZ1bmN0aW9uIHNjb3BlKGZuKSB7XG4gIGNvbnN0IGN1cnJlbnRTY29wZSA9IG5ldyBTY29wZSgpXG5cbiAgY29uc3QgYWRkRHJhZ2dhYmxlVG9TY29wZSA9IGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICAgIGN1cnJlbnRTY29wZS5hZGREcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICAgIERyYWdnYWJsZS5lbWl0dGVyLmludGVycnVwdCgpXG4gIH1cblxuICBjb25zdCBhZGRUYXJnZXRUb1Njb3BlID0gZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgY3VycmVudFNjb3BlLmFkZFRhcmdldCh0YXJnZXQpXG4gICAgRHJhZ2dhYmxlLmVtaXR0ZXIuaW50ZXJydXB0KClcbiAgfVxuXG4gIERyYWdnYWJsZS5lbWl0dGVyLnByZXBlbmRPbignZHJhZ2dhYmxlOmNyZWF0ZScsIGFkZERyYWdnYWJsZVRvU2NvcGUpXG4gIFRhcmdldC5lbWl0dGVyLnByZXBlbmRPbigndGFyZ2V0OmNyZWF0ZScsIGFkZFRhcmdldFRvU2NvcGUpXG4gIGZuLmNhbGwoKVxuICBEcmFnZ2FibGUuZW1pdHRlci51bnN1YnNjcmliZSgnZHJhZ2dhYmxlOmNyZWF0ZScsIGFkZERyYWdnYWJsZVRvU2NvcGUpXG4gIFRhcmdldC5lbWl0dGVyLnVuc3Vic2NyaWJlKCd0YXJnZXQ6Y3JlYXRlJywgYWRkVGFyZ2V0VG9TY29wZSlcbiAgcmV0dXJuIGN1cnJlbnRTY29wZVxufVxuXG5leHBvcnQgeyBzY29wZXMsIGRlZmF1bHRTY29wZSwgU2NvcGUsIHNjb3BlIH1cbiIsImZ1bmN0aW9uIGNoZWNrU3VwcG9ydFBhc3NpdmVFdmVudHMoKSB7XG4gIGxldCBwYXNzaXZlU3VwcG9ydGVkID0gZmFsc2VcblxuICB0cnkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdwYXNzaXZlJywge1xuICAgICAgZ2V0KCkge1xuICAgICAgICByZXR1cm4gKHBhc3NpdmVTdXBwb3J0ZWQgPSB0cnVlKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndGVzdCcsIG9wdGlvbnMsIG9wdGlvbnMpXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Rlc3QnLCBvcHRpb25zLCBvcHRpb25zKVxuICB9IGNhdGNoIChfZXJyKSB7XG4gICAgcGFzc2l2ZVN1cHBvcnRlZCA9IGZhbHNlXG4gIH1cblxuICByZXR1cm4gcGFzc2l2ZVN1cHBvcnRlZFxufVxuXG5leHBvcnQgY29uc3QgaXNTdXBwb3J0UGFzc2l2ZUV2ZW50cyA9IGNoZWNrU3VwcG9ydFBhc3NpdmVFdmVudHMoKVxuXG5mdW5jdGlvbiBldmVudE9wdGlvbnMob3B0aW9ucywgZmFsbGJhY2sgPSBmYWxzZSkge1xuICByZXR1cm4gaXNTdXBwb3J0UGFzc2l2ZUV2ZW50cyA/IG9wdGlvbnMgOiBmYWxsYmFja1xufVxuXG5leHBvcnQgeyBldmVudE9wdGlvbnMgfVxuXG5leHBvcnQgZGVmYXVsdCBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzXG4iLCJpbXBvcnQgeyBhZGRDbGFzcywgcmVtb3ZlQ2xhc3MgfSBmcm9tICcuL3V0aWxzL2NsYXNzZXMnXG5pbXBvcnQgZ2V0RGVmYXVsdENvbnRhaW5lciBmcm9tICcuL3V0aWxzL2dldC1kZWZhdWx0LWNvbnRhaW5lcidcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudEVtaXR0ZXInXG5pbXBvcnQgZ2V0U3R5bGVQcm9wZXJ0eSBmcm9tICdkZXNhbmRyby1nZXQtc3R5bGUtcHJvcGVydHknXG5pbXBvcnQgeyBCb3VuZFRvRWxlbWVudCB9IGZyb20gJy4vYm91bmRpbmcnXG5pbXBvcnQgUG9pbnQgZnJvbSAnLi9nZW9tZXRyeS9wb2ludCdcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSAnLi9nZW9tZXRyeS9yZWN0YW5nbGUnXG5pbXBvcnQgeyBkZWZhdWx0U2NvcGUgfSBmcm9tICcuL3Njb3BlJ1xuaW1wb3J0IGlzU3VwcG9ydFBhc3NpdmVFdmVudHMgZnJvbSAnLi91dGlscy9pcy1zdXBwb3J0LXBhc3NpdmUtZXZlbnRzJ1xuXG5jb25zdCBpc1RvdWNoID0gJ29udG91Y2hzdGFydCcgaW4gd2luZG93XG5jb25zdCBtb3VzZUV2ZW50cyA9IHtcbiAgc3RhcnQ6ICdtb3VzZWRvd24nLFxuICBtb3ZlOiAnbW91c2Vtb3ZlJyxcbiAgZW5kOiAnbW91c2V1cCdcbn1cbmNvbnN0IHRvdWNoRXZlbnRzID0ge1xuICBzdGFydDogJ3RvdWNoc3RhcnQnLFxuICBtb3ZlOiAndG91Y2htb3ZlJyxcbiAgZW5kOiAndG91Y2hlbmQnXG59XG5jb25zdCBkcmFnZ2FibGVzID0gW11cbmNvbnN0IHRyYW5zZm9ybVByb3BlcnR5ID0gZ2V0U3R5bGVQcm9wZXJ0eSgndHJhbnNmb3JtJylcbmNvbnN0IHRyYW5zaXRpb25Qcm9wZXJ0eSA9IGdldFN0eWxlUHJvcGVydHkoJ3RyYW5zaXRpb24nKVxuXG5mdW5jdGlvbiBnZXRUb3VjaEJ5SUQoZWxlbWVudCwgdG91Y2hJZCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnQuY2hhbmdlZFRvdWNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZWxlbWVudC5jaGFuZ2VkVG91Y2hlc1tpXS5pZGVudGlmaWVyID09PSB0b3VjaElkKSB7XG4gICAgICByZXR1cm4gZWxlbWVudC5jaGFuZ2VkVG91Y2hlc1tpXVxuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cblxuZnVuY3Rpb24gcHJldmVudERvdWJsZUluaXQoZHJhZ2dhYmxlKSB7XG4gIGNvbnN0IG1lc3NhZ2UgPSBcImZvciB0aGlzIGVsZW1lbnQgRHJhZ2VlLkRyYWdnYWJsZSBpcyBhbHJlYWR5IGV4aXN0LCBkb24ndCBjcmVhdGUgaXQgdHdpY2UgXCJcbiAgaWYgKGRyYWdnYWJsZXMuc29tZSgoZXhpc3RpbmcpID0+IGRyYWdnYWJsZS5lbGVtZW50ID09PSBleGlzdGluZy5lbGVtZW50KSkge1xuICAgIHRocm93IG1lc3NhZ2VcbiAgfVxuICBkcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxufVxuXG5mdW5jdGlvbiBhZGRUb0RlZmF1bHRTY29wZShkcmFnZ2FibGUpIHtcbiAgZGVmYXVsdFNjb3BlLmFkZERyYWdnYWJsZShkcmFnZ2FibGUpXG59XG5cbmZ1bmN0aW9uIGNvcHlTdHlsZXMoc291cmNlLCBkZXN0aW5hdGlvbikge1xuICBjb25zdCBjcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHNvdXJjZSlcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qga2V5ID0gY3NbaV1cbiAgICBpZiAoKGtleS5pbmRleE9mKCd0cmFuc2l0aW9uJykgPCAwKSAmJiAoa2V5LmluZGV4T2YoJ3RyYW5zZm9ybScpIDwgMCkpIHtcbiAgICAgIGRlc3RpbmF0aW9uLnN0eWxlW2tleV0gPSBjc1trZXldXG4gICAgfVxuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzb3VyY2UuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICBjb3B5U3R5bGVzKHNvdXJjZS5jaGlsZHJlbltpXSwgZGVzdGluYXRpb24uY2hpbGRyZW5baV0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhZ2dhYmxlIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgb3B0aW9ucz17fSkge1xuICAgIHN1cGVyKG9wdGlvbnMpXG4gICAgdGhpcy50YXJnZXRzID0gW11cbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIHByZXZlbnREb3VibGVJbml0KHRoaXMpXG4gICAgRHJhZ2dhYmxlLmVtaXR0ZXIuZW1pdCgnZHJhZ2dhYmxlOmNyZWF0ZScsIHRoaXMpXG4gICAgdGhpcy5fZW5hYmxlID0gdHJ1ZVxuXG4gICAgdGhpcy5zdGFydEJvdW5kaW5nKClcbiAgICB0aGlzLnN0YXJ0UG9zaXRpb25pbmcoKVxuICAgIHRoaXMuc3RhcnRMaXN0ZW5pbmcoKVxuICB9XG5cbiAgc3RhcnRCb3VuZGluZygpIHtcbiAgICBpZih0aGlzLm9wdGlvbnMuYm91bmQpIHtcbiAgICAgIHRoaXMuYm91bmRpbmcgPSB7IGJvdW5kOiB0aGlzLm9wdGlvbnMuYm91bmQgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmJvdW5kaW5nID0gbmV3IEJvdW5kVG9FbGVtZW50KHRoaXMuY29udGFpbmVyLCB0aGlzLmNvbnRhaW5lcilcbiAgICB9XG4gIH1cblxuICBzdGFydFBvc2l0aW9uaW5nKCkge1xuICAgIHRoaXMuX3NldERlZmF1bHRUcmFuc2l0aW9uKClcbiAgICB0aGlzLm9mZnNldCA9IFBvaW50LmVsZW1lbnRPZmZzZXQodGhpcy5lbGVtZW50LCB0aGlzLmNvbnRhaW5lciwgdHJ1ZSlcbiAgICB0aGlzLnBpbm5lZFBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICB0aGlzLmluaXRpYWxQb3NpdGlvbiA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbiB8fCB0aGlzLm9mZnNldFxuXG4gICAgdGhpcy5waW5Qb3NpdGlvbih0aGlzLmluaXRpYWxQb3NpdGlvbilcblxuICAgIGlmICh0aGlzLmJvdW5kaW5nLnJlZnJlc2gpIHtcbiAgICAgIHRoaXMuYm91bmRpbmcucmVmcmVzaCgpXG4gICAgfVxuICB9XG5cbiAgc3RhcnRMaXN0ZW5pbmcoKSB7XG4gICAgdGhpcy5fZHJhZ1N0YXJ0ID0gKGV2ZW50KSA9PiB0aGlzLmRyYWdTdGFydChldmVudClcbiAgICB0aGlzLl9kcmFnTW92ZSA9IChldmVudCkgPT4gdGhpcy5kcmFnTW92ZShldmVudClcbiAgICB0aGlzLl9kcmFnRW5kID0gKGV2ZW50KSA9PiB0aGlzLmRyYWdFbmQoZXZlbnQpXG4gICAgdGhpcy5fbmF0aXZlRHJhZ1N0YXJ0ID0gKGV2ZW50KSA9PiB0aGlzLm5hdGl2ZURyYWdTdGFydChldmVudClcbiAgICB0aGlzLl9uYXRpdmVEcmFnT3ZlciA9IChldmVudCkgPT4gdGhpcy5uYXRpdmVEcmFnT3ZlcihldmVudClcbiAgICB0aGlzLl9uYXRpdmVEcmFnRW5kID0gKGV2ZW50KSA9PiB0aGlzLm5hdGl2ZURyYWdFbmQoZXZlbnQpXG4gICAgdGhpcy5fbmF0aXZlRHJvcCA9IChldmVudCkgPT4gdGhpcy5uYXRpdmVEcm9wKGV2ZW50KVxuICAgIHRoaXMuX3Njcm9sbCA9IChldmVudCkgPT4gdGhpcy5vblNjcm9sbChldmVudClcblxuICAgIHRoaXMuaGFuZGxlci5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQsIGlzU3VwcG9ydFBhc3NpdmVFdmVudHMgPyB7IHBhc3NpdmU6IGZhbHNlIH0gOiBmYWxzZSlcbiAgICB0aGlzLmhhbmRsZXIuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0LCBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzID8geyBwYXNzaXZlOiBmYWxzZSB9IDogZmFsc2UpXG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIHRoaXMuX25hdGl2ZURyYWdTdGFydClcbiAgfVxuXG4gIGdldFNpemUoKSB7XG4gICAgcmV0dXJuIFBvaW50LmVsZW1lbnRTaXplKHRoaXMuZWxlbWVudCwgdGhpcy5vcHRpb25zLmlzQ29udGVudEJveFNpemUpXG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5vZmZzZXQuYWRkKHRoaXMuX3RyYW5zZm9ybVBvc2l0aW9uIHx8IG5ldyBQb2ludCgwLCAwKSlcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvblxuICB9XG5cbiAgZ2V0Q2VudGVyKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLmdldFNpemUoKS5tdWx0KDAuNSkpXG4gIH1cblxuICBfc2V0RGVmYXVsdFRyYW5zaXRpb24gKCkge1xuICAgIHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5lbGVtZW50KVt0cmFuc2l0aW9uUHJvcGVydHldXG4gIH1cblxuICBfc2V0VHJhbnNpdGlvbih0aW1lKSB7XG4gICAgbGV0IHRyYW5zaXRpb24gPSB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNpdGlvblByb3BlcnR5XVxuICAgIGNvbnN0IHRyYW5zaXRpb25Dc3MgPSBgdHJhbnNmb3JtICR7dGltZX1tc2BcblxuICAgIGlmICghL3RyYW5zZm9ybSBcXGQqbT9zLy50ZXN0KHRyYW5zaXRpb24pKSB7XG4gICAgICBpZiAodHJhbnNpdGlvbikge1xuICAgICAgICB0cmFuc2l0aW9uICs9IGAsICR7dHJhbnNpdGlvbkNzc31gXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cmFuc2l0aW9uID0gdHJhbnNpdGlvbkNzc1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0cmFuc2l0aW9uID0gdHJhbnNpdGlvbi5yZXBsYWNlKC90cmFuc2Zvcm0gXFxkKm0/cy8sIHRyYW5zaXRpb25Dc3MpXG4gICAgfVxuXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV0gPSB0cmFuc2l0aW9uXG4gIH1cblxuICBfc2V0VHJhbnNsYXRlKHBvaW50KSB7XG4gICAgdGhpcy5fdHJhbnNmb3JtUG9zaXRpb24gPSBwb2ludFxuICAgIGNvbnN0IHRyYW5zbGF0ZUNzcyA9IGB0cmFuc2xhdGUzZCgke3BvaW50Lnh9cHgsICR7cG9pbnQueX1weCwgMHB4KWBcblxuICAgIGxldCB0cmFuc2Zvcm0gPSB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcGVydHldXG5cbiAgICBpZiAodGhpcy5zaG91bGRSZW1vdmVaZXJvVHJhbnNsYXRlICYmIHBvaW50LnggPT09IDAgJiYgcG9pbnQueSA9PT0gMCkge1xuICAgICAgdHJhbnNmb3JtID0gdHJhbnNmb3JtLnJlcGxhY2UoL3RyYW5zbGF0ZTNkXFwoW14pXStcXCkvLCAnJylcbiAgICB9IGVsc2UgaWYgKCEvdHJhbnNsYXRlM2RcXChbXildK1xcKS8udGVzdCh0cmFuc2Zvcm0pKSB7XG4gICAgICBpZiAodHJhbnNmb3JtKSB7XG4gICAgICAgIHRyYW5zZm9ybSArPSAnICdcbiAgICAgIH1cbiAgICAgIHRyYW5zZm9ybSArPSB0cmFuc2xhdGVDc3NcbiAgICB9IGVsc2Uge1xuICAgICAgdHJhbnNmb3JtID0gdHJhbnNmb3JtLnJlcGxhY2UoL3RyYW5zbGF0ZTNkXFwoW14pXStcXCkvLCB0cmFuc2xhdGVDc3MpXG4gICAgfVxuXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BlcnR5XSA9IHRyYW5zZm9ybVxuICB9XG5cbiAgbW92ZShwb2ludCwgdGltZT0wLCBpc1NpbGVudD1mYWxzZSkge1xuICAgIHBvaW50ID0gcG9pbnQuY2xvbmUoKVxuXG4gICAgdGhpcy5kZXRlcm1pbmVEaXJlY3Rpb24ocG9pbnQpXG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvaW50XG5cbiAgICB0aGlzLl9zZXRUcmFuc2l0aW9uKHRpbWUpXG4gICAgdGhpcy5fc2V0VHJhbnNsYXRlKHBvaW50LnN1Yih0aGlzLm9mZnNldCkpXG5cbiAgICBpZiAoIWlzU2lsZW50KSB7XG4gICAgICB0aGlzLmVtaXQoJ2RyYWc6bW92ZScpXG4gICAgfVxuICB9XG5cbiAgcGluUG9zaXRpb24ocG9pbnQsIHRpbWU9MCwgc2lsZW50PXRydWUpIHtcbiAgICB0aGlzLnBpbm5lZFBvc2l0aW9uID0gcG9pbnQuY2xvbmUoKVxuICAgIHRoaXMubW92ZSh0aGlzLnBpbm5lZFBvc2l0aW9uLCB0aW1lLCBzaWxlbnQpXG4gIH1cblxuICByZXNldFBvc2l0aW9uVG9Jbml0aWFsICgpIHtcbiAgICB0aGlzLnBpblBvc2l0aW9uKHRoaXMuaW5pdGlhbFBvc2l0aW9uKVxuICB9XG5cbiAgcmVmcmVzaFBvc2l0aW9uICgpIHtcbiAgICB0aGlzLnNldFBvc2l0aW9uKHRoaXMuZ2V0UG9zaXRpb24oKSlcbiAgfVxuXG4gIHNldFBvc2l0aW9uKHBvaW50KSB7XG4gICAgcG9pbnQgPSBwb2ludC5jbG9uZSgpXG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvaW50XG4gICAgdGhpcy5fc2V0VHJhbnNpdGlvbigwKVxuICAgIHRoaXMuX3NldFRyYW5zbGF0ZShwb2ludC5zdWIodGhpcy5vZmZzZXQpKVxuICB9XG5cbiAgZGV0ZXJtaW5lRGlyZWN0aW9uKHBvaW50KSB7XG4gICAgdGhpcy5sZWZ0RGlyZWN0aW9uID0gKHRoaXMucG9zaXRpb24ueCA8IHBvaW50LngpXG4gICAgdGhpcy5yaWdodERpcmVjdGlvbiA9ICh0aGlzLnBvc2l0aW9uLnggPiBwb2ludC54KVxuICAgIHRoaXMudXBEaXJlY3Rpb24gPSAodGhpcy5wb3NpdGlvbi55ID4gcG9pbnQueSlcbiAgICB0aGlzLmRvd25EaXJlY3Rpb24gPSAodGhpcy5wb3NpdGlvbi55IDwgcG9pbnQueSlcbiAgfVxuXG4gIGRyYWdTdGFydChldmVudCkge1xuICAgIHRoaXMuY3VycmVudEV2ZW50ID0gZXZlbnRcbiAgICBpZiAoIXRoaXMuX2VuYWJsZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaXNUb3VjaEV2ZW50ID0gKGlzVG91Y2ggJiYgKGV2ZW50IGluc3RhbmNlb2Ygd2luZG93LlRvdWNoRXZlbnQpKVxuXG4gICAgdGhpcy50b3VjaFBvaW50ID0gdGhpcy5fc3RhcnRUb3VjaFBvaW50ID0gbmV3IFBvaW50KFxuICAgICAgaXNUb3VjaEV2ZW50ID8gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVggOiBldmVudC5jbGllbnRYLFxuICAgICAgaXNUb3VjaEV2ZW50ID8gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVkgOiBldmVudC5jbGllbnRZXG4gICAgKVxuXG4gICAgdGhpcy5fc3RhcnRQb3NpdGlvbiA9IHRoaXMuZ2V0UG9zaXRpb24oKVxuICAgIGlmIChpc1RvdWNoRXZlbnQpIHtcbiAgICAgIHRoaXMuX3RvdWNoSWQgPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5pZGVudGlmaWVyXG4gICAgfVxuXG4gICAgdGhpcy5fc3RhcnRTY3JvbGxQb2ludCA9IG5ldyBQb2ludCh3aW5kb3cuc2Nyb2xsWCwgd2luZG93LnNjcm9sbFkpXG5cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGlmIChldmVudC50YXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElucHV0RWxlbWVudCB8fFxuICAgICAgICAgIGV2ZW50LnRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSW5wdXRFbGVtZW50KSB7XG4gICAgICBldmVudC50YXJnZXQuZm9jdXMoKVxuICAgIH1cblxuICAgIGlmICghKHRoaXMubmF0aXZlRHJhZ0FuZERyb3AgfHxcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSW5wdXRFbGVtZW50IHx8XG4gICAgICAgICAgICBldmVudC50YXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElucHV0RWxlbWVudCkpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB9XG5cbiAgICBpZiAodGhpcy5uYXRpdmVEcmFnQW5kRHJvcCkge1xuICAgICAgY29uc3QgaXNTYWZhcmkgPSAvdmVyc2lvblxcLyhcXGQrKS4rP3NhZmFyaS9pLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpXG4gICAgICBpZiAoKGlzVG91Y2hFdmVudCAmJiB0aGlzLmVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcE9uVG91Y2gpIHx8XG4gICAgICAgICAgICAgaXNTYWZhcmkgfHxcbiAgICAgICAgICAgICB0aGlzLmVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcEZvckFsbCkge1xuICAgICAgICB0aGlzLmVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcChldmVudClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5kcmFnZ2FibGUgPSB0cnVlXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9uYXRpdmVEcmFnRW5kLCBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzID8geyBwYXNzaXZlOiBmYWxzZSB9IDogZmFsc2UpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUsIGlzU3VwcG9ydFBhc3NpdmVFdmVudHMgPyB7IHBhc3NpdmU6IGZhbHNlIH0gOiBmYWxzZSlcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUsIGlzU3VwcG9ydFBhc3NpdmVFdmVudHMgPyB7IHBhc3NpdmU6IGZhbHNlIH0gOiBmYWxzZSlcblxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQsIGlzU3VwcG9ydFBhc3NpdmVFdmVudHMgPyB7IHBhc3NpdmU6IGZhbHNlIH0gOiBmYWxzZSlcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kLCBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzID8geyBwYXNzaXZlOiBmYWxzZSB9IDogZmFsc2UpXG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX3Njcm9sbClcblxuICAgIHRoaXMuaXNEcmFnZ2luZyA9IHRydWVcbiAgICB0aGlzLmVtaXQoJ2RyYWc6c3RhcnQnKVxuICB9XG5cbiAgc3RvcERyYWdnaW5nKCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIHRoaXMuX25hdGl2ZURyYWdPdmVyKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzLl9uYXRpdmVEcm9wKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzLl9uYXRpdmVEcm9wKVxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9zY3JvbGwpXG4gICAgdGhpcy5lbGVtZW50LmRyYWdnYWJsZSA9IGZhbHNlXG4gICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2VcbiAgICByZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnQsICdkcmFnZWUtYWN0aXZlJylcbiAgfVxuXG4gIGRyYWdNb3ZlKGV2ZW50KSB7XG4gICAgdGhpcy5jdXJyZW50RXZlbnQgPSBldmVudFxuICAgIGxldCB0b3VjaFxuXG4gICAgY29uc3QgaXNUb3VjaEV2ZW50ID0gKGlzVG91Y2ggJiYgKGV2ZW50IGluc3RhbmNlb2Ygd2luZG93LlRvdWNoRXZlbnQpKVxuICAgIGlmIChpc1RvdWNoRXZlbnQpIHtcbiAgICAgIHRvdWNoID0gZ2V0VG91Y2hCeUlEKGV2ZW50LCB0aGlzLl90b3VjaElkKVxuXG4gICAgICBpZiAoIXRvdWNoKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIHRoaXMudG91Y2hQb2ludCA9IG5ldyBQb2ludChcbiAgICAgIGlzVG91Y2hFdmVudCA/IHRvdWNoLnBhZ2VYIDogZXZlbnQuY2xpZW50WCxcbiAgICAgIGlzVG91Y2hFdmVudCA/IHRvdWNoLnBhZ2VZIDogZXZlbnQuY2xpZW50WVxuICAgIClcblxuICAgIGxldCBwb2ludCA9IHRoaXMuX3N0YXJ0UG9zaXRpb24uYWRkKHRoaXMudG91Y2hQb2ludC5zdWIodGhpcy5fc3RhcnRUb3VjaFBvaW50KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZCh0aGlzLnNjcm9sbFBvaW50LnN1Yih0aGlzLl9zdGFydFNjcm9sbFBvaW50KSlcblxuICAgIHBvaW50ID0gdGhpcy5ib3VuZGluZy5ib3VuZChwb2ludCwgdGhpcy5nZXRTaXplKCkpXG4gICAgdGhpcy5tb3ZlKHBvaW50KVxuICAgIGFkZENsYXNzKHRoaXMuZWxlbWVudCwgJ2RyYWdlZS1hY3RpdmUnKVxuICB9XG5cbiAgZHJhZ0VuZChldmVudCkge1xuICAgIGNvbnN0IGlzVG91Y2hFdmVudCA9IChpc1RvdWNoICYmIChldmVudCBpbnN0YW5jZW9mIHdpbmRvdy5Ub3VjaEV2ZW50KSlcblxuICAgIGlmIChpc1RvdWNoRXZlbnQgJiYgIWdldFRvdWNoQnlJRChldmVudCwgdGhpcy5fdG91Y2hJZCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIHRoaXMuZHJhZ0VuZEFjdGlvbigpXG4gICAgdGhpcy5lbWl0KCdkcmFnOmVuZCcpXG5cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG5cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcblxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9zY3JvbGwpXG5cbiAgICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZVxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2RyYWdnYWJsZScpXG4gICAgc2V0VGltZW91dCgoKSA9PiByZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnQsICdkcmFnZWUtYWN0aXZlJykpXG4gIH1cblxuICBvblNjcm9sbChfZXZlbnQpIHtcbiAgICBsZXQgcG9pbnQgPSB0aGlzLl9zdGFydFBvc2l0aW9uLmFkZCh0aGlzLnRvdWNoUG9pbnQuc3ViKHRoaXMuX3N0YXJ0VG91Y2hQb2ludCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy5zY3JvbGxQb2ludC5zdWIodGhpcy5fc3RhcnRTY3JvbGxQb2ludCkpXG5cbiAgICBwb2ludCA9IHRoaXMuYm91bmRpbmcuYm91bmQocG9pbnQsIHRoaXMuZ2V0U2l6ZSgpKVxuICAgIGlmICghdGhpcy5uYXRpdmVEcmFnQW5kRHJvcCkge1xuICAgICAgdGhpcy5tb3ZlKHBvaW50KVxuICAgIH1cbiAgfVxuXG4gIG5hdGl2ZURyYWdTdGFydChldmVudCkge1xuICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0JywgJ0ZpcmVGb3ggZml4JylcbiAgICBldmVudC5kYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCA9ICdtb3ZlJ1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgdGhpcy5fbmF0aXZlRHJhZ092ZXIpXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIHRoaXMuX25hdGl2ZURyYWdFbmQpXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIHRoaXMuX25hdGl2ZURyb3ApXG4gIH1cblxuICBuYXRpdmVEcmFnT3ZlcihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBldmVudC5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9ICdtb3ZlJ1xuICAgIGFkZENsYXNzKHRoaXMuZWxlbWVudCwgJ2RyYWdlZS1wbGFjZWhvbGRlcicpXG4gICAgdGhpcy5jdXJyZW50RXZlbnQgPSBldmVudFxuICAgIGlmIChldmVudC5jbGllbnRYID09PSAwICYmIGV2ZW50LmNsaWVudFkgPT09IDApIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMudG91Y2hQb2ludCA9IG5ldyBQb2ludChldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZKVxuICAgIGxldCBwb2ludCA9IHRoaXMuX3N0YXJ0UG9zaXRpb24uYWRkKHRoaXMudG91Y2hQb2ludC5zdWIodGhpcy5fc3RhcnRUb3VjaFBvaW50KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZCh0aGlzLnNjcm9sbFBvaW50LnN1Yih0aGlzLl9zdGFydFNjcm9sbFBvaW50KSlcbiAgICBwb2ludCA9IHRoaXMuYm91bmRpbmcuYm91bmQocG9pbnQsIHRoaXMuZ2V0U2l6ZSgpKVxuICAgIHRoaXMucG9zaXRpb24gPSBwb2ludFxuICAgIHRoaXMuZW1pdCgnZHJhZzptb3ZlJylcbiAgfVxuXG4gIG5hdGl2ZURyYWdFbmQoX2V2ZW50KSB7XG4gICAgcmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50LCAnZHJhZ2VlLXBsYWNlaG9sZGVyJylcbiAgICB0aGlzLmRyYWdFbmRBY3Rpb24oKVxuICAgIHRoaXMuZW1pdCgnZHJhZzplbmQnKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgdGhpcy5fbmF0aXZlRHJhZ092ZXIpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIHRoaXMuX25hdGl2ZURyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX25hdGl2ZURyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJvcCcsIHRoaXMuX25hdGl2ZURyb3ApXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX3Njcm9sbClcbiAgICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZVxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2RyYWdnYWJsZScpXG4gICAgcmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50LCAnZHJhZ2VlLWFjdGl2ZScpXG4gIH1cblxuICBuYXRpdmVEcm9wKGV2ZW50KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBlbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3AoZXZlbnQpIHtcbiAgICBjb25zdCBjb250YWluZXJSZWN0ID0gdGhpcy5jb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICBjb25zdCBjbG9uZWRFbGVtZW50ID0gdGhpcy5lbGVtZW50LmNsb25lTm9kZSh0cnVlKVxuICAgIGNsb25lZEVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcGVydHldID0gJydcbiAgICBjb3B5U3R5bGVzKHRoaXMuZWxlbWVudCwgY2xvbmVkRWxlbWVudClcbiAgICBjbG9uZWRFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJ1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2xvbmVkRWxlbWVudClcbiAgICBhZGRDbGFzcyh0aGlzLmVsZW1lbnQsICdkcmFnZWUtcGxhY2Vob2xkZXInKVxuXG4gICAgY29uc3QgZW11bGF0aW9uRHJhZ2dhYmxlID0gbmV3IERyYWdnYWJsZShjbG9uZWRFbGVtZW50LCB7XG4gICAgICBjb250YWluZXI6IGRvY3VtZW50LmJvZHksXG4gICAgICBib3VuZChwb2ludCkge1xuICAgICAgICByZXR1cm4gcG9pbnRcbiAgICAgIH0sXG4gICAgICBvbjoge1xuICAgICAgICAnZHJhZzptb3ZlJzogKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNvbnRhaW5lclJlY3RQb2ludCA9IG5ldyBQb2ludChjb250YWluZXJSZWN0LmxlZnQsIGNvbnRhaW5lclJlY3QudG9wKVxuICAgICAgICAgIHRoaXMucG9zaXRpb24gPSBlbXVsYXRpb25EcmFnZ2FibGUucG9zaXRpb24uc3ViKGNvbnRhaW5lclJlY3RQb2ludClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN1Yih0aGlzLl9zdGFydFNjcm9sbFBvaW50KVxuICAgICAgICAgIHRoaXMuZW1pdCgnZHJhZzptb3ZlJylcbiAgICAgICAgfSxcbiAgICAgICAgJ2RyYWc6ZW5kJzogKCkgPT4ge1xuICAgICAgICAgIGVtdWxhdGlvbkRyYWdnYWJsZS5kZXN0cm95KClcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGNsb25lZEVsZW1lbnQpXG4gICAgICAgICAgcmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50LCAnZHJhZ2VlLXBsYWNlaG9sZGVyJylcbiAgICAgICAgICByZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnQsICdkcmFnZWUtYWN0aXZlJylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBjb250YWluZXJSZWN0UG9pbnQgPSBuZXcgUG9pbnQoY29udGFpbmVyUmVjdC5sZWZ0LCBjb250YWluZXJSZWN0LnRvcClcbiAgICBlbXVsYXRpb25EcmFnZ2FibGUuX3N0YXJ0U2Nyb2xsUG9pbnQgPSB0aGlzLl9zdGFydFNjcm9sbFBvaW50XG5cbiAgICBlbXVsYXRpb25EcmFnZ2FibGUubW92ZShcbiAgICAgIHRoaXMucGlubmVkUG9zaXRpb24uYWRkKGNvbnRhaW5lclJlY3RQb2ludCkuYWRkKG5ldyBQb2ludCh3aW5kb3cuc2Nyb2xsWCwgd2luZG93LnNjcm9sbFkpKVxuICAgIClcblxuICAgIGVtdWxhdGlvbkRyYWdnYWJsZS5kcmFnU3RhcnQoZXZlbnQpXG4gIH1cblxuICBkcmFnRW5kQWN0aW9uKCkge1xuICAgIHRoaXMucGluUG9zaXRpb24odGhpcy5wb3NpdGlvbilcbiAgfVxuXG4gIGdldFJlY3RhbmdsZSgpIHtcbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZSh0aGlzLnBvc2l0aW9uLCB0aGlzLmdldFNpemUoKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgaWYgKHRoaXMuYm91bmRpbmcucmVmcmVzaCkge1xuICAgICAgdGhpcy5ib3VuZGluZy5yZWZyZXNoKClcbiAgICB9XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuaGFuZGxlci5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQpXG4gICAgdGhpcy5oYW5kbGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydClcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgdGhpcy5fbmF0aXZlRHJhZ1N0YXJ0KVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIHRoaXMuX25hdGl2ZURyYWdPdmVyKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzLl9uYXRpdmVEcm9wKVxuICAgIHRoaXMucmVzZXRFbWl0dGVyKClcblxuICAgIGNvbnN0IGluZGV4ID0gZHJhZ2dhYmxlcy5pbmRleE9mKHRoaXMpXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIGRyYWdnYWJsZXMuc3BsaWNlKGluZGV4LCAxKVxuICAgIH1cbiAgfVxuXG4gIGdldCBjb250YWluZXIoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9jb250YWluZXIgPSB0aGlzLl9jb250YWluZXIgfHwgdGhpcy5vcHRpb25zLmNvbnRhaW5lciB8fCB0aGlzLm9wdGlvbnMucGFyZW50IHx8IGdldERlZmF1bHRDb250YWluZXIodGhpcy5lbGVtZW50KSlcbiAgfVxuXG4gIGdldCBoYW5kbGVyKCkge1xuICAgIGlmICghdGhpcy5faGFuZGxlcikge1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuaGFuZGxlciA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhpcy5faGFuZGxlciA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKHRoaXMub3B0aW9ucy5oYW5kbGVyKSB8fCB0aGlzLmVsZW1lbnRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZXIgPSB0aGlzLm9wdGlvbnMuaGFuZGxlciB8fCB0aGlzLmVsZW1lbnRcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5faGFuZGxlclxuICB9XG5cbiAgZ2V0IG5hdGl2ZURyYWdBbmREcm9wKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMubmF0aXZlRHJhZ0FuZERyb3AgfHwgZmFsc2VcbiAgfVxuXG4gIGdldCBlbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3BPblRvdWNoKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wT25Ub3VjaCB8fCB0cnVlXG4gIH1cblxuICBnZXQgZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wRm9yQWxsKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wRm9yQWxsIHx8IGZhbHNlXG4gIH1cblxuICBnZXQgc2hvdWxkUmVtb3ZlWmVyb1RyYW5zbGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLnNob3VsZFJlbW92ZVplcm9UcmFuc2xhdGUgfHwgZmFsc2VcbiAgfVxuXG4gIGdldCBzY3JvbGxQb2ludCgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHdpbmRvdy5zY3JvbGxYLCB3aW5kb3cuc2Nyb2xsWSlcbiAgfVxuXG4gIGdldCBlbmFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZVxuICB9XG5cbiAgc2V0IGVuYWJsZShlbmFibGUpIHtcbiAgICBpZiAoZW5hYmxlKSB7XG4gICAgICByZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnQsICdkcmFnZWUtZGlzYWJsZScpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFkZENsYXNzKHRoaXMuZWxlbWVudCwgJ2RyYWdlZS1kaXNhYmxlJylcbiAgICB9XG5cbiAgICB0aGlzLl9lbmFibGUgPSBlbmFibGVcbiAgfVxufVxuXG5EcmFnZ2FibGUuZW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuRHJhZ2dhYmxlLmVtaXR0ZXIub24oJ2RyYWdnYWJsZTpjcmVhdGUnLCBhZGRUb0RlZmF1bHRTY29wZSlcbiIsImltcG9ydCByZW1vdmVJdGVtIGZyb20gJy4vdXRpbHMvcmVtb3ZlLWFycmF5LWl0ZW0nXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnRFbWl0dGVyJ1xuaW1wb3J0IHtcbiAgZ2V0RGlzdGFuY2UsXG4gIGluZGV4T2ZOZWFyZXN0UG9pbnRcbn0gZnJvbSAnLi9nZW9tZXRyeS9kaXN0YW5jZXMnXG5cbmltcG9ydCBEcmFnZ2FibGUgZnJvbSAnLi9kcmFnZ2FibGUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3QgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvcihkcmFnZ2FibGVzLCBvcHRpb25zPXt9KSB7XG4gICAgc3VwZXIob3B0aW9ucylcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHRpbWVFbmQ6IDIwMCxcbiAgICAgIHRpbWVFeGNhbmdlOiA0MDAsXG4gICAgICByYWRpdXM6IDMwXG4gICAgfSwgb3B0aW9ucylcblxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZXNcbiAgICB0aGlzLmNoYW5nZWREdXJpbmdJdGVyYXRpb24gPSBmYWxzZVxuXG4gICAgdGhpcy5yZXNpemVPYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoKSA9PiB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZCkgPT4gZC5zdGFydFBvc2l0aW9uaW5nKCkpKVxuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkKSA9PiB0aGlzLnJlc2l6ZU9ic2VydmVyLm9ic2VydmUoZC5lbGVtZW50KSlcblxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuX2VuYWJsZSA9IHRydWVcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCh0aGlzLmluaXREcmFnZ2FibGUsIHRoaXMpXG4gIH1cblxuICBpbml0RHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIGRyYWdnYWJsZS5lbmFibGUgPSB0aGlzLl9lbmFibGVcbiAgICBkcmFnZ2FibGUub24oJ2RyYWc6bW92ZScsICgpID0+IHRoaXMub25Nb3ZlKGRyYWdnYWJsZSkpXG4gICAgZHJhZ2dhYmxlLmRyYWdFbmRBY3Rpb24gPSAoKSA9PiB7XG4gICAgICBkcmFnZ2FibGUucGluUG9zaXRpb24oZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uLCB0aGlzLm9wdGlvbnMudGltZUVuZClcbiAgICAgIHRoaXMub25FbmQoZHJhZ2dhYmxlKVxuICAgIH1cbiAgfVxuXG4gIG9uTW92ZShkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBzb3J0ZWREcmFnZ2FibGVzID0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcbiAgICBjb25zdCBwaW5uZWRQb3NpdGlvbnMgPSBzb3J0ZWREcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24pXG5cbiAgICBjb25zdCBjdXJyZW50SW5kZXggPSBzb3J0ZWREcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKVxuICAgIGNvbnN0IHRhcmdldEluZGV4ID0gaW5kZXhPZk5lYXJlc3RQb2ludChwaW5uZWRQb3NpdGlvbnMsIGRyYWdnYWJsZS5wb3NpdGlvbiwgdGhpcy5vcHRpb25zLnJhZGl1cywgdGhpcy5kaXN0YW5jZUZ1bmMpXG5cbiAgICBpZiAodGFyZ2V0SW5kZXggIT09IC0xICYmIGN1cnJlbnRJbmRleCAhPT0gdGFyZ2V0SW5kZXgpIHtcbiAgICAgIGlmICh0YXJnZXRJbmRleCA8IGN1cnJlbnRJbmRleCkge1xuICAgICAgICBmb3IgKGxldCBpPXRhcmdldEluZGV4OyBpPGN1cnJlbnRJbmRleDsgaSsrKSB7XG4gICAgICAgICAgc29ydGVkRHJhZ2dhYmxlc1tpXS5waW5Qb3NpdGlvbihwaW5uZWRQb3NpdGlvbnNbaSsxXSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGxldCBpPWN1cnJlbnRJbmRleDsgaTx0YXJnZXRJbmRleDsgaSsrKSB7XG4gICAgICAgICAgc29ydGVkRHJhZ2dhYmxlc1tpKzFdLnBpblBvc2l0aW9uKHBpbm5lZFBvc2l0aW9uc1tpXSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChkcmFnZ2FibGUubmF0aXZlRHJhZ0FuZERyb3ApIHtcbiAgICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKHBpbm5lZFBvc2l0aW9uc1t0YXJnZXRJbmRleF0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24gPSBwaW5uZWRQb3NpdGlvbnNbdGFyZ2V0SW5kZXhdXG4gICAgICB9XG5cbiAgICAgIHRoaXMuY2hhbmdlZER1cmluZ0l0ZXJhdGlvbiA9IHRydWVcbiAgICB9XG4gIH1cblxuICBvbkVuZChkcmFnZ2FibGUpIHtcbiAgICBpZiAodGhpcy5jaGFuZ2VkRHVyaW5nSXRlcmF0aW9uKSB7XG4gICAgICB0aGlzLmVtaXQoJ2xpc3Q6Y2hhbmdlJylcbiAgICAgIHRoaXMuY2hhbmdlZER1cmluZ0l0ZXJhdGlvbiA9IGZhbHNlXG4gICAgfVxuICB9XG5cbiAgZ2V0Q3VycmVudFBpbm5lZFBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5kcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24uY2xvbmUoKSlcbiAgfVxuXG4gIGdldFNvcnRlZERyYWdnYWJsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJhZ2dhYmxlcy5zb3J0KHRoaXMuc29ydGluZy5iaW5kKHRoaXMpKVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnJlc2V0UG9zaXRpb25Ub0luaXRpYWwoKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnJlZnJlc2goKSlcbiAgfVxuXG4gIGFkZChkcmFnZ2FibGVzKSB7XG4gICAgaWYgKCEoZHJhZ2dhYmxlcyBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgZHJhZ2dhYmxlcyA9IFtkcmFnZ2FibGVzXVxuICAgIH1cbiAgICBkcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gdGhpcy5pbml0RHJhZ2dhYmxlKGRyYWdnYWJsZSkpXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gdGhpcy5kcmFnZ2FibGVzLmNvbmNhdChkcmFnZ2FibGVzKVxuICB9XG5cbiAgcmVtb3ZlKGRyYWdnYWJsZXMpIHtcbiAgICBjb25zdCBpbml0aWFsUG9zaXRpb25zID0gdGhpcy5kcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uKVxuICAgIGNvbnN0IGxpc3QgPSBbXVxuICAgIGNvbnN0IHNvcnRlZERyYWdnYWJsZXMgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuXG4gICAgaWYgKCEoZHJhZ2dhYmxlcyBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgZHJhZ2dhYmxlcyA9IFtkcmFnZ2FibGVzXVxuICAgIH1cblxuICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUucmVzZXRPbignZHJhZzplbmQnKVxuICAgICAgZHJhZ2dhYmxlLnJlc2V0T24oJ2RyYWc6bW92ZScpXG4gICAgICByZW1vdmVJdGVtKHRoaXMuZHJhZ2dhYmxlcywgZHJhZ2dhYmxlKVxuICAgIH0pXG5cbiAgICBsZXQgaiA9IDBcbiAgICBzb3J0ZWREcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgaWYgKHRoaXMuZHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkgIT09IC0xKSB7XG4gICAgICAgIGlmIChkcmFnZ2FibGUucGlubmVkUG9zaXRpb24gIT09IGluaXRpYWxQb3NpdGlvbnNbal0pIHtcbiAgICAgICAgICBkcmFnZ2FibGUucGluUG9zaXRpb24oaW5pdGlhbFBvc2l0aW9uc1tqXSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICB9XG4gICAgICAgIGRyYWdnYWJsZS5pbml0aWFsUG9zaXRpb24gPSBpbml0aWFsUG9zaXRpb25zW2pdXG4gICAgICAgIGorK1xuICAgICAgICBsaXN0LnB1c2goZHJhZ2dhYmxlKVxuICAgICAgfVxuICAgIH0pXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gbGlzdFxuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5yZW1vdmUodGhpcy5kcmFnZ2FibGVzLnNsaWNlKCkpXG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5kZXN0cm95KCkpXG4gIH1cblxuICBzb3J0aW5nKGRyYWdnYWJsZUEsIGRyYWdnYWJsZUIpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLnNvcnRpbmcpIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuc29ydGluZyhkcmFnZ2FibGVBLCBkcmFnZ2FibGVCKVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZHJhZ2dhYmxlQS5waW5uZWRQb3NpdGlvbi55IDwgZHJhZ2dhYmxlQi5waW5uZWRQb3NpdGlvbi55KSByZXR1cm4gLTFcbiAgICAgIGlmIChkcmFnZ2FibGVBLnBpbm5lZFBvc2l0aW9uLnkgPiBkcmFnZ2FibGVCLnBpbm5lZFBvc2l0aW9uLnkpIHJldHVybiAxXG4gICAgICBpZiAoZHJhZ2dhYmxlQS5waW5uZWRQb3NpdGlvbi54IDwgZHJhZ2dhYmxlQi5waW5uZWRQb3NpdGlvbi54KSByZXR1cm4gLTFcbiAgICAgIGlmIChkcmFnZ2FibGVBLnBpbm5lZFBvc2l0aW9uLnggPiBkcmFnZ2FibGVCLnBpbm5lZFBvc2l0aW9uLngpIHJldHVybiAxXG4gICAgICByZXR1cm4gMFxuICAgIH1cbiAgfVxuXG4gIGdldCBkaXN0YW5jZUZ1bmMoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5nZXREaXN0YW5jZSB8fCBnZXREaXN0YW5jZVxuICB9XG5cbiAgZ2V0IHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDdXJyZW50UGlubmVkUG9zaXRpb25zKClcbiAgfVxuXG4gIHNldCBwb3NpdGlvbnMocG9zaXRpb25zKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9ICd3cm9uZyBhcnJheSBsZW5ndGgnXG4gICAgaWYgKHBvc2l0aW9ucy5sZW5ndGggPT09IHRoaXMuZHJhZ2dhYmxlcy5sZW5ndGgpIHtcbiAgICAgIHBvc2l0aW9ucy5mb3JFYWNoKChwb2ludCwgaSkgPT4ge1xuICAgICAgICB0aGlzLmRyYWdnYWJsZXNbaV0ucGluUG9zaXRpb24ocG9pbnQpXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBtZXNzYWdlXG4gICAgfVxuICB9XG5cbiAgZ2V0IGVuYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlXG4gIH1cblxuICBzZXQgZW5hYmxlKGVuYWJsZSkge1xuICAgIHRoaXMuX2VuYWJsZSA9IGVuYWJsZVxuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5lbmFibGUgPSBlbmFibGVcbiAgICB9KVxuICB9XG5cbiAgc3RhdGljIGZhY3RvcnkoY29udGFpbmVyRWxlbWVudCwgZWxlbWVudHMsIG9wdGlvbnM9e30pIHtcbiAgICBjb25zdCBkcmFnZ2FibGVzID0gQXJyYXkuZnJvbShlbGVtZW50cykubWFwKChlbGVtZW50KSA9PiB7XG4gICAgICByZXR1cm4gbmV3IERyYWdnYWJsZShlbGVtZW50LCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgY29udGFpbmVyOiBjb250YWluZXJFbGVtZW50XG4gICAgICB9LCBvcHRpb25zLmRyYWdnYWJsZSB8fCB7fSkpXG4gICAgfSlcbiAgICByZXR1cm4gbmV3IExpc3QoZHJhZ2dhYmxlcywgb3B0aW9ucy5saXN0IHx8IHt9KVxuICB9XG59XG4iLCJpbXBvcnQgTGlzdCBmcm9tICcuL2xpc3QnXG5pbXBvcnQgeyBpbmRleE9mTmVhcmVzdFBvaW50LCBnZXRZRGlmZmVyZW5jZSB9IGZyb20gJy4vZ2VvbWV0cnkvZGlzdGFuY2VzJ1xuXG5pbXBvcnQgRHJhZ2dhYmxlIGZyb20gJy4vZHJhZ2dhYmxlJ1xuXG5jb25zdCBhcnJheU1vdmUgPSAoYXJyYXksIGZyb20sIHRvKSA9PiB7XG4gIGFycmF5LnNwbGljZSh0byA8IDAgPyBhcnJheS5sZW5ndGggKyB0byA6IHRvLCAwLCBhcnJheS5zcGxpY2UoZnJvbSwgMSlbMF0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1YmJsaW5nTGlzdCBleHRlbmRzIExpc3Qge1xuICBjb25zdHJ1Y3RvcihkcmFnZ2FibGVzLCBvcHRpb25zPXt9KSB7XG4gICAgc3VwZXIoZHJhZ2dhYmxlcywgb3B0aW9ucylcbiAgfVxuXG4gIGluaXREcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgZHJhZ2dhYmxlLm9uKCdkcmFnOnN0YXJ0JywgKCkgPT4gdGhpcy5hdXRvRGV0ZWN0VmVydGljYWxHYXAoZHJhZ2dhYmxlKSlcbiAgICBzdXBlci5pbml0RHJhZ2dhYmxlKGRyYWdnYWJsZSlcbiAgfVxuXG4gIGF1dG9EZXRlY3RWZXJ0aWNhbEdhcCgpIHtcbiAgICBpZiAodGhpcy5kcmFnZ2FibGVzLmxlbmd0aCA+PSAyKSB7XG4gICAgICBjb25zdCBzb3J0ZWQgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuXG4gICAgICB0aGlzLnZlcnRpY2FsR2FwID0gc29ydGVkWzFdLnBpbm5lZFBvc2l0aW9uLnkgLSBzb3J0ZWRbMF0ucGlubmVkUG9zaXRpb24ueSAtIHNvcnRlZFswXS5nZXRTaXplKCkueVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZlcnRpY2FsR2FwID0gMFxuICAgIH1cblxuICAgIGlmICh0aGlzLmRyYWdnYWJsZXMubGVuZ3RoID49IDEpIHtcbiAgICAgIHRoaXMuc3RhcnRQb3NpdGlvbiA9IHRoaXMuZHJhZ2dhYmxlc1swXS5waW5uZWRQb3NpdGlvblxuICAgIH1cbiAgfVxuXG4gIG9uTW92ZShkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBzb3J0ZWREcmFnZ2FibGVzID0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcbiAgICBjb25zdCBwaW5uZWRQb3NpdGlvbnMgPSBzb3J0ZWREcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24pXG5cbiAgICBjb25zdCBjdXJyZW50SW5kZXggPSBzb3J0ZWREcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKVxuICAgIGNvbnN0IHRhcmdldEluZGV4ID0gaW5kZXhPZk5lYXJlc3RQb2ludChwaW5uZWRQb3NpdGlvbnMsIGRyYWdnYWJsZS5wb3NpdGlvbiwgdGhpcy5vcHRpb25zLnJhZGl1cywgdGhpcy5kaXN0YW5jZUZ1bmMpXG5cbiAgICBpZiAodGFyZ2V0SW5kZXggIT09IC0xICYmIGN1cnJlbnRJbmRleCAhPT0gdGFyZ2V0SW5kZXgpIHtcbiAgICAgIGFycmF5TW92ZShzb3J0ZWREcmFnZ2FibGVzLCBjdXJyZW50SW5kZXgsIHRhcmdldEluZGV4KVxuICAgICAgdGhpcy5idWJibGluZyhzb3J0ZWREcmFnZ2FibGVzLCBkcmFnZ2FibGUpXG4gICAgICB0aGlzLmNoYW5nZWREdXJpbmdJdGVyYXRpb24gPSB0cnVlXG4gICAgfVxuICB9XG5cbiAgYnViYmxpbmcoc29ydGVkRHJhZ2dhYmxlcywgY3VycmVudERyYWdnYWJsZSkge1xuICAgIGNvbnN0IGN1cnJlbnRQb3NpdGlvbiA9IHRoaXMuc3RhcnRQb3NpdGlvbi5jbG9uZSgpXG5cbiAgICBzb3J0ZWREcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgaWYgKCFkcmFnZ2FibGUucGlubmVkUG9zaXRpb24uY29tcGFyZShjdXJyZW50UG9zaXRpb24pKSB7XG4gICAgICAgIGlmIChkcmFnZ2FibGUgPT09IGN1cnJlbnREcmFnZ2FibGUgJiYgIWN1cnJlbnREcmFnZ2FibGUubmF0aXZlRHJhZ0FuZERyb3ApIHtcbiAgICAgICAgICBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24gPSBjdXJyZW50UG9zaXRpb24uY2xvbmUoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRyYWdnYWJsZS5waW5Qb3NpdGlvbihjdXJyZW50UG9zaXRpb24sIChkcmFnZ2FibGUgPT09IGN1cnJlbnREcmFnZ2FibGUpID8gMCA6IHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjdXJyZW50UG9zaXRpb24ueSA9IGN1cnJlbnRQb3NpdGlvbi55ICsgZHJhZ2dhYmxlLmdldFNpemUoKS55ICsgdGhpcy52ZXJ0aWNhbEdhcFxuICAgIH0pXG4gIH1cblxuICBnZXQgZGlzdGFuY2VGdW5jKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZ2V0RGlzdGFuY2UgfHwgZ2V0WURpZmZlcmVuY2VcbiAgfVxuXG4gIHN0YXRpYyBmYWN0b3J5KGNvbnRhaW5lckVsZW1lbnQsIGVsZW1lbnRzLCBvcHRpb25zPXt9KSB7XG4gICAgY29uc3QgZHJhZ2dhYmxlcyA9IEFycmF5LmZyb20oZWxlbWVudHMpLm1hcCgoZWxlbWVudCkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBEcmFnZ2FibGUoZWxlbWVudCwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyRWxlbWVudFxuICAgICAgfSwgb3B0aW9ucy5kcmFnZ2FibGUgfHwge30pKVxuICAgIH0pXG4gICAgY29uc3QgYnViYmxpbmdMaXN0ID0gbmV3IEJ1YmJsaW5nTGlzdChkcmFnZ2FibGVzLCBvcHRpb25zLmxpc3QgfHwge30pXG5cbiAgICBpZihvcHRpb25zLnJlb3JkZXJPbkNoYW5nZSkge1xuICAgICAgYnViYmxpbmdMaXN0Lm9uKFwibGlzdDpjaGFuZ2VcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCBvcmRlcmVkRWxlbWVudHMgPSBidWJibGluZ0xpc3QuZ2V0U29ydGVkRHJhZ2dhYmxlcygpLm1hcCgoZCkgPT4gZC5lbGVtZW50KVxuICAgICAgICBidWJibGluZ0xpc3QucmVzZXQoKVxuICAgICAgICBvcmRlcmVkRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgIGNvbnRhaW5lckVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbWVudClcbiAgICAgICAgfSlcblxuICAgICAgICBkcmFnZ2FibGVzLmZvckVhY2goKGQpID0+IGQuc3RhcnRQb3NpdGlvbmluZygpKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gYnViYmxpbmdMaXN0XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJnZXRTdW1WYWx1ZU9mU3R5bGVSdWxlcyIsImVsZW1lbnQiLCJydWxlcyIsInJlZHVjZSIsInN1bSIsInJ1bGUiLCJwYXJzZUludCIsIndpbmRvdyIsImdldENvbXB1dGVkU3R5bGUiLCJQb2ludCIsIngiLCJ5IiwicCIsImsiLCJwYXJlbnQiLCJwYXJlbnROb2RlIiwiZWxlbWVudFJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJwYXJlbnRSZWN0IiwibGVmdCIsInRvcCIsImlzQ29udGVudEJveFNpemUiLCJ3aWR0aCIsImhlaWdodCIsIlJlY3RhbmdsZSIsInBvc2l0aW9uIiwic2l6ZSIsImFkZCIsIm11bHQiLCJyZWN0IiwiTWF0aCIsIm1pbiIsIm1heCIsInN1YiIsInJlY3RhbmdsZSIsImluY2x1ZGVQb2ludCIsImdldFAzIiwiYXhpcyIsInNlbEF4aXMiLCJjcm9zc1JlY3RhbmdsZSIsImFuZCIsInRoaXNDZW50ZXIiLCJnZXRDZW50ZXIiLCJyZWN0Q2VudGVyIiwic2lnbiIsIm9mZnNldCIsImVsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic3R5bGUiLCJpc0NvbnNpZGVyVHJhbnNsYXRlIiwiZWxlbWVudE9mZnNldCIsImVsZW1lbnRTaXplIiwiaGFzQ2xhc3MiLCJjIiwicmUiLCJSZWdFeHAiLCJ0ZXN0IiwiY2xhc3NOYW1lIiwiYWRkQ2xhc3MiLCJyZXBsYWNlIiwicmVtb3ZlQ2xhc3MiLCJnZXREZWZhdWx0Q29udGFpbmVyIiwiY29udGFpbmVyIiwidGFnTmFtZSIsIkV2ZW50RW1pdHRlciIsIm9wdGlvbnMiLCJldmVudHMiLCJvbiIsIk9iamVjdCIsImVudHJpZXMiLCJldmVudE5hbWUiLCJmbiIsImludGVycnVwdGVkIiwiYXJncyIsInNsaWNlIiwiY2FsbCIsImFyZ3VtZW50cyIsImZ1bmMiLCJwdXNoIiwidW5zaGlmdCIsImluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsImdldERpc3RhbmNlIiwicDEiLCJwMiIsImR4IiwiZHkiLCJzcXJ0IiwiZ2V0WERpZmZlcmVuY2UiLCJhYnMiLCJnZXRZRGlmZmVyZW5jZSIsInRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3RvcnkiLCJwb3ciLCJpbmRleE9mTmVhcmVzdFBvaW50IiwiYXJyIiwidmFsIiwicmFkaXVzIiwiZ2V0RGlzdGFuY2VGdW5jIiwiaSIsInRlbXAiLCJsZW5ndGgiLCJkaXJlY3RDcm9zc2luZyIsIkwxUDEiLCJMMVAyIiwiTDJQMSIsIkwyUDIiLCJrMSIsImsyIiwiYjEiLCJiMiIsImJvdW5kVG9MaW5lIiwiQSIsIkIiLCJQIiwiQVAiLCJBQiIsImFiMiIsImFwX2FiIiwidCIsImdldFBvaW50T25MaW5lQnlMZW5naHQiLCJMUDEiLCJMUDIiLCJsZW5naHQiLCJwZXJjZW50IiwiYWRkUG9pbnRUb0JvdW5kUG9pbnRzIiwiYm91bmRwb2ludHMiLCJwb2ludCIsImlzUmlnaHQiLCJyZXN1bHQiLCJmaWx0ZXIiLCJiUG9pbnQiLCJnZXRBbmdsZURpZmYiLCJhbHBoYSIsImJldGEiLCJtaW5BbmdsZSIsIm1heEFuZ2xlIiwiUEkiLCJnZXRBbmdsZSIsImRpZmYiLCJub3JtYWxpemVBbmdsZSIsImF0YW4yIiwiYm91bmRBbmdsZSIsImRtaW4iLCJkbWF4IiwiZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtIiwiYW5nbGUiLCJjZW50ZXIiLCJjb3MiLCJzaW4iLCJCb3VuZCIsIl9zaXplIiwiaW5zdGFuY2UiLCJib3VuZCIsImJpbmQiLCJCb3VuZFRvUmVjdGFuZ2xlIiwiY2FsY1BvaW50IiwiY2xvbmUiLCJyZWN0UDIiLCJCb3VuZFRvRWxlbWVudCIsImZyb21FbGVtZW50IiwiQm91bmRUb0xpbmVYIiwic3RhcnRZIiwiZW5kWSIsIkJvdW5kVG9MaW5lWSIsInN0YXJ0WCIsImVuZFgiLCJCb3VuZFRvTGluZSIsInN0YXJ0UG9pbnQiLCJlbmRQb2ludCIsInNvbWVLIiwiY29zQmV0YSIsInNpbkJldGEiLCJwb2ludDIiLCJuZXdFbmRQb2ludCIsInBvaW50Q3Jvc3NpbmciLCJCb3VuZFRvQ2lyY2xlIiwiQm91bmRUb0FyYyIsInN0YXJ0QW5nbGUiLCJlbmRBbmdsZSIsIl9zdGFydEFuZ2xlIiwiX2VuZEFuZ2xlIiwiYXJyYXkiLCJyYW5nZSIsInN0YXJ0Iiwic3RvcCIsInN0ZXAiLCJCYXNpY1N0cmF0ZWd5IiwiTm90Q3Jvc3NpbmdTdHJhdGVneSIsInJlY3RhbmdsZUxpc3QiLCJpbmRleGVzT2ZOZXdzIiwic3RhdGljUmVjdGFuZ2xlSW5kZXhlcyIsImluZGV4ZXMiLCJfcmVjdCIsImZvckVhY2giLCJyZW1vdmFibGUiLCJpbmRleE9mU3RhdGljIiwic3RhdGljUmVjdCIsIm1vdmVUb0JvdW5kIiwic29tZSIsImJvdW5kUmVjdCIsImdldFNxdWFyZSIsIm9kbERyYWdnYWJsZXNMaXN0IiwibmV3RHJhZ2dhYmxlcyIsImluZGV4T2ZOZXdzIiwiZHJhZ2dhYmxlcyIsImNvbmNhdCIsImRyYWdnYWJsZSIsIkZsb2F0TGVmdFN0cmF0ZWd5IiwiYXNzaWduIiwicGFkZGluZ1RvcExlZnQiLCJwYWRkaW5nQm90dG9tUmlnaHQiLCJ5R2FwQmV0d2VlbkRyYWdnYWJsZXMiLCJnZXRQb3NpdGlvbiIsIl9pbmRleGVzT2ZOZXdzIiwiZ2V0UDIiLCJib3VuZGFyeVBvaW50cyIsInJlY3RJbmRleCIsImlzVmFsaWQiLCJuZXdMaXN0IiwibGlzdE9sZFBvc2l0aW9uIiwibWFwIiwibmV3RHJhZ2dhYmxlIiwiRmxvYXRSaWdodFN0cmF0ZWd5IiwicGFkZGluZ1RvcFJpZ2h0IiwicGFkZGluZ0JvdHRvbUxlZnQiLCJwYWRkaW5nQm90dG9tTmVnTGVmdCIsImdldFA0IiwiYWRkVG9EZWZhdWx0U2NvcGUiLCJ0YXJnZXQiLCJkZWZhdWx0U2NvcGUiLCJhZGRUYXJnZXQiLCJUYXJnZXQiLCJ0aW1lRW5kIiwidGltZUV4Y2FuZ2UiLCJwb3NpdGlvbmluZ1N0cmF0ZWd5Iiwic3RyYXRlZ3kiLCJnZXRSZWN0YW5nbGUiLCJ0YXJnZXRzIiwiZW1pdHRlciIsImVtaXQiLCJzdGFydEJvdW5kaW5nIiwiaW5pdCIsImJvdW5kaW5nIiwiaW5kZXhlc09mTmV3IiwicG9zaXRpb25pbmciLCJvbGREcmFnZ2FibGVzIiwic29ydGluZyIsInJlY3RhbmdsZXMiLCJpbm5lckRyYWdnYWJsZXMiLCJzZXRQb3NpdGlvbiIsImNhdGNoRHJhZ2dhYmxlIiwidGFyZ2V0UmVjdGFuZ2xlIiwiZHJhZ2dhYmxlU3F1YXJlIiwic2NvcGVzIiwic2NvcGUiLCJyZW1vdmVJdGVtIiwibmV3RHJhZ2dhYmxlc0luZGV4IiwiZ2V0U2l6ZSIsImFkZFJlbW92ZU9uTW92ZSIsInRpbWUiLCJtb3ZlIiwiaW5pdGlhbFBvc2l0aW9uIiwicHVzaElubmVyRHJhZ2dhYmxlIiwicmVtb3ZlSGFuZGxlciIsInJlbW92ZSIsInVuc3Vic2NyaWJlIiwiX2NvbnRhaW5lciIsIlNjb3BlIiwiZHJhZ0VuZEFjdGlvbiIsIm9uRW5kIiwic2hvdFRhcmdldHMiLCJzb3J0IiwiYSIsImIiLCJwaW5Qb3NpdGlvbiIsInJlc2V0IiwicmVmcmVzaCIsInBvc2l0aW9ucyIsIm1lc3NhZ2UiLCJ0YXJnZXRJbmRleGVzIiwiY3VycmVudFNjb3BlIiwiYWRkRHJhZ2dhYmxlVG9TY29wZSIsImFkZERyYWdnYWJsZSIsIkRyYWdnYWJsZSIsImludGVycnVwdCIsImFkZFRhcmdldFRvU2NvcGUiLCJwcmVwZW5kT24iLCJjaGVja1N1cHBvcnRQYXNzaXZlRXZlbnRzIiwicGFzc2l2ZVN1cHBvcnRlZCIsImRlZmluZVByb3BlcnR5IiwiZ2V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJfZXJyIiwiaXNTdXBwb3J0UGFzc2l2ZUV2ZW50cyIsImlzVG91Y2giLCJtb3VzZUV2ZW50cyIsImVuZCIsInRvdWNoRXZlbnRzIiwidHJhbnNmb3JtUHJvcGVydHkiLCJnZXRTdHlsZVByb3BlcnR5IiwidHJhbnNpdGlvblByb3BlcnR5IiwiZ2V0VG91Y2hCeUlEIiwidG91Y2hJZCIsImNoYW5nZWRUb3VjaGVzIiwiaWRlbnRpZmllciIsInByZXZlbnREb3VibGVJbml0IiwiZXhpc3RpbmciLCJjb3B5U3R5bGVzIiwic291cmNlIiwiZGVzdGluYXRpb24iLCJjcyIsImtleSIsImNoaWxkcmVuIiwiX2VuYWJsZSIsInN0YXJ0UG9zaXRpb25pbmciLCJzdGFydExpc3RlbmluZyIsIl9zZXREZWZhdWx0VHJhbnNpdGlvbiIsInBpbm5lZFBvc2l0aW9uIiwiX2RyYWdTdGFydCIsImV2ZW50IiwiZHJhZ1N0YXJ0IiwiX2RyYWdNb3ZlIiwiZHJhZ01vdmUiLCJfZHJhZ0VuZCIsImRyYWdFbmQiLCJfbmF0aXZlRHJhZ1N0YXJ0IiwibmF0aXZlRHJhZ1N0YXJ0IiwiX25hdGl2ZURyYWdPdmVyIiwibmF0aXZlRHJhZ092ZXIiLCJfbmF0aXZlRHJhZ0VuZCIsIm5hdGl2ZURyYWdFbmQiLCJfbmF0aXZlRHJvcCIsIm5hdGl2ZURyb3AiLCJfc2Nyb2xsIiwib25TY3JvbGwiLCJoYW5kbGVyIiwicGFzc2l2ZSIsIl90cmFuc2Zvcm1Qb3NpdGlvbiIsInRyYW5zaXRpb24iLCJ0cmFuc2l0aW9uQ3NzIiwidHJhbnNsYXRlQ3NzIiwidHJhbnNmb3JtIiwic2hvdWxkUmVtb3ZlWmVyb1RyYW5zbGF0ZSIsImlzU2lsZW50IiwiZGV0ZXJtaW5lRGlyZWN0aW9uIiwiX3NldFRyYW5zaXRpb24iLCJfc2V0VHJhbnNsYXRlIiwic2lsZW50IiwibGVmdERpcmVjdGlvbiIsInJpZ2h0RGlyZWN0aW9uIiwidXBEaXJlY3Rpb24iLCJkb3duRGlyZWN0aW9uIiwiY3VycmVudEV2ZW50IiwiaXNUb3VjaEV2ZW50IiwiVG91Y2hFdmVudCIsInRvdWNoUG9pbnQiLCJfc3RhcnRUb3VjaFBvaW50IiwicGFnZVgiLCJjbGllbnRYIiwicGFnZVkiLCJjbGllbnRZIiwiX3N0YXJ0UG9zaXRpb24iLCJfdG91Y2hJZCIsIl9zdGFydFNjcm9sbFBvaW50Iiwic2Nyb2xsWCIsInNjcm9sbFkiLCJzdG9wUHJvcGFnYXRpb24iLCJIVE1MSW5wdXRFbGVtZW50IiwiZm9jdXMiLCJuYXRpdmVEcmFnQW5kRHJvcCIsInByZXZlbnREZWZhdWx0IiwiaXNTYWZhcmkiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJlbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3BPblRvdWNoIiwiZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wRm9yQWxsIiwiZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wIiwiaXNEcmFnZ2luZyIsInRvdWNoIiwic2Nyb2xsUG9pbnQiLCJyZW1vdmVBdHRyaWJ1dGUiLCJzZXRUaW1lb3V0IiwiX2V2ZW50IiwiZGF0YVRyYW5zZmVyIiwic2V0RGF0YSIsImVmZmVjdEFsbG93ZWQiLCJkcm9wRWZmZWN0IiwiY29udGFpbmVyUmVjdCIsImNsb25lZEVsZW1lbnQiLCJjbG9uZU5vZGUiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJlbXVsYXRpb25EcmFnZ2FibGUiLCJjb250YWluZXJSZWN0UG9pbnQiLCJkZXN0cm95IiwicmVtb3ZlQ2hpbGQiLCJyZXNldEVtaXR0ZXIiLCJfaGFuZGxlciIsImVuYWJsZSIsIkxpc3QiLCJjaGFuZ2VkRHVyaW5nSXRlcmF0aW9uIiwicmVzaXplT2JzZXJ2ZXIiLCJSZXNpemVPYnNlcnZlciIsImQiLCJvYnNlcnZlIiwiaW5pdERyYWdnYWJsZSIsIm9uTW92ZSIsInNvcnRlZERyYWdnYWJsZXMiLCJnZXRTb3J0ZWREcmFnZ2FibGVzIiwicGlubmVkUG9zaXRpb25zIiwiY3VycmVudEluZGV4IiwidGFyZ2V0SW5kZXgiLCJkaXN0YW5jZUZ1bmMiLCJyZXNldFBvc2l0aW9uVG9Jbml0aWFsIiwiQXJyYXkiLCJpbml0aWFsUG9zaXRpb25zIiwibGlzdCIsInJlc2V0T24iLCJqIiwiZHJhZ2dhYmxlQSIsImRyYWdnYWJsZUIiLCJnZXRDdXJyZW50UGlubmVkUG9zaXRpb25zIiwiY29udGFpbmVyRWxlbWVudCIsImVsZW1lbnRzIiwiZnJvbSIsImFycmF5TW92ZSIsInRvIiwiQnViYmxpbmdMaXN0IiwiYXV0b0RldGVjdFZlcnRpY2FsR2FwIiwic29ydGVkIiwidmVydGljYWxHYXAiLCJzdGFydFBvc2l0aW9uIiwiYnViYmxpbmciLCJjdXJyZW50RHJhZ2dhYmxlIiwiY3VycmVudFBvc2l0aW9uIiwiY29tcGFyZSIsImJ1YmJsaW5nTGlzdCIsInJlb3JkZXJPbkNoYW5nZSIsIm9yZGVyZWRFbGVtZW50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
