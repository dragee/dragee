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

    Object.defineProperty(subClass, "prototype", {
      value: Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      }),
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
        this.bound = this.options.bound || BoundToElement.bounding(this.container, this.container);
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

        if (this.bound.refresh) {
          this.bound.refresh();
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
        addClass(this.element, 'dragee-active');
        this.emit('drag:move');
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

        point = this.bound(point, this.getSize());
        this.move(point);
      }
    }, {
      key: "dragEnd",
      value: function dragEnd(event) {
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
        removeClass(this.element, 'dragee-active');
      }
    }, {
      key: "onScroll",
      value: function onScroll(_event) {
        var point = this._startPosition.add(this.touchPoint.sub(this._startTouchPoint)).add(this.scrollPoint.sub(this._startScrollPoint));

        point = this.bound(point, this.getSize());

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

        point = this.bound(point, this.getSize());
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
        var _this3 = this;

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
              _this3.position = emulationDraggable.position.sub(containerRectPoint).sub(_this3._startScrollPoint);

              _this3.emit('drag:move');
            },
            'drag:end': function dragEnd() {
              emulationDraggable.destroy();
              document.body.removeChild(clonedElement);
              removeClass(_this3.element, 'dragee-placeholder');
              removeClass(_this3.element, 'dragee-active');
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
        if (this.bound.refresh) {
          this.bound.refresh();
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
          return draggable.pinPosition(draggable.pinnedPosition, _this2.options.timeEnd);
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

          this.emit('list:change');
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
          this.bubling(sortedDraggables, draggable);
          this.emit('list:change');
        }
      }
    }, {
      key: "bubling",
      value: function bubling(sortedDraggables, currentDraggable) {
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
        return new BubblingList(draggables, options.list || {});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZGV2LmpzIiwic291cmNlcyI6WyIuLi9zcmMvZ2VvbWV0cnkvcG9pbnQuanMiLCIuLi9zcmMvZ2VvbWV0cnkvcmVjdGFuZ2xlLmpzIiwiLi4vc3JjL3V0aWxzL2NsYXNzZXMuanMiLCIuLi9zcmMvdXRpbHMvZ2V0LWRlZmF1bHQtY29udGFpbmVyLmpzIiwiLi4vc3JjL2V2ZW50RW1pdHRlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9kZXNhbmRyby1nZXQtc3R5bGUtcHJvcGVydHkvZ2V0LXN0eWxlLXByb3BlcnR5LmpzIiwiLi4vc3JjL2dlb21ldHJ5L2Rpc3RhbmNlcy5qcyIsIi4uL3NyYy9nZW9tZXRyeS9ib3VuZHMuanMiLCIuLi9zcmMvZ2VvbWV0cnkvYW5nbGVzLmpzIiwiLi4vc3JjL2JvdW5kaW5nLmpzIiwiLi4vc3JjL3V0aWxzL3JlbW92ZS1hcnJheS1pdGVtLmpzIiwiLi4vc3JjL3V0aWxzL3JhbmdlLmpzIiwiLi4vc3JjL3Bvc2l0aW9uaW5nLmpzIiwiLi4vc3JjL3RhcmdldC5qcyIsIi4uL3NyYy9zY29wZS5qcyIsIi4uL3NyYy91dGlscy9pcy1zdXBwb3J0LXBhc3NpdmUtZXZlbnRzLmpzIiwiLi4vc3JjL2RyYWdnYWJsZS5qcyIsIi4uL3NyYy9saXN0LmpzIiwiLi4vc3JjL2J1YmJsaW5nTGlzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBnZXRTdW1WYWx1ZU9mU3R5bGVSdWxlcyhlbGVtZW50LCBydWxlcykge1xuICByZXR1cm4gcnVsZXMucmVkdWNlKChzdW0sIHJ1bGUpID0+IHtcbiAgICByZXR1cm4gc3VtICsgcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudClbcnVsZV18fDApXG4gIH0sIDApXG59XG5cbi8qKiBDbGFzcyByZXByZXNlbnRpbmcgYSBwb2ludC4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvaW50IHtcbiAgLyoqXG4gICogQ3JlYXRlIGEgcG9pbnQuXG4gICogQHBhcmFtIHtudW1iZXJ9IHggLSBUaGUgeCB2YWx1ZS5cbiAgKiBAcGFyYW0ge251bWJlcn0geSAtIFRoZSB5IHZhbHVlLlxuICAqL1xuICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgdGhpcy54ID0geFxuICAgIHRoaXMueSA9IHlcbiAgfVxuXG4gIGFkZChwKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnggKyBwLngsIHRoaXMueSArIHAueSlcbiAgfVxuXG4gIHN1YihwKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnggLSBwLngsIHRoaXMueSAtIHAueSlcbiAgfVxuXG4gIG11bHQoaykge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54ICogaywgdGhpcy55ICogaylcbiAgfVxuXG4gIG5lZ2F0aXZlKCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQoLXRoaXMueCwgLXRoaXMueSlcbiAgfVxuXG4gIGNvbXBhcmUocCkge1xuICAgIHJldHVybiAodGhpcy54ID09PSBwLnggJiYgdGhpcy55ID09PSBwLnkpXG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCwgdGhpcy55KVxuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIGB7eD0ke3RoaXMueH0seT0ke3RoaXMueX1gXG4gIH1cblxuICBzdGF0aWMgZWxlbWVudE9mZnNldChlbGVtZW50LCBwYXJlbnQpIHtcbiAgICBwYXJlbnQgPSBwYXJlbnQgfHwgZWxlbWVudC5wYXJlbnROb2RlXG4gICAgY29uc3QgZWxlbWVudFJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgY29uc3QgcGFyZW50UmVjdCA9IHBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIHJldHVybiBuZXcgUG9pbnQoXG4gICAgICBlbGVtZW50UmVjdC5sZWZ0IC0gcGFyZW50UmVjdC5sZWZ0LFxuICAgICAgZWxlbWVudFJlY3QudG9wIC0gcGFyZW50UmVjdC50b3BcbiAgICApXG4gIH1cblxuICBzdGF0aWMgZWxlbWVudFNpemUoZWxlbWVudCwgaXNDb250ZW50Qm94U2l6ZT1mYWxzZSkge1xuICAgIGxldCB3aWR0aCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpWyd3aWR0aCddKVxuICAgIGxldCBoZWlnaHQgPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KVsnaGVpZ2h0J10pXG4gICAgaWYgKCFpc0NvbnRlbnRCb3hTaXplKSB7XG4gICAgICB3aWR0aCArPSBnZXRTdW1WYWx1ZU9mU3R5bGVSdWxlcyhlbGVtZW50LCBbJ3BhZGRpbmctbGVmdCcsICdwYWRkaW5nLXJpZ2h0JywgJ2JvcmRlci1sZWZ0LXdpZHRoJywgJ2JvcmRlci1yaWdodC13aWR0aCddKVxuICAgICAgaGVpZ2h0ICs9IGdldFN1bVZhbHVlT2ZTdHlsZVJ1bGVzKGVsZW1lbnQsIFsncGFkZGluZy10b3AnLCAncGFkZGluZy1ib3R0b20nLCAnYm9yZGVyLXRvcC13aWR0aCcsICdib3JkZXItYm90dG9tLXdpZHRoJ10pXG4gICAgfVxuICAgIHJldHVybiBuZXcgUG9pbnQod2lkdGgsIGhlaWdodClcbiAgfVxufVxuIiwiaW1wb3J0IFBvaW50IGZyb20gJy4vcG9pbnQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY3RhbmdsZSB7XG4gIGNvbnN0cnVjdG9yKHBvc2l0aW9uLCBzaXplKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgdGhpcy5zaXplID0gc2l6ZVxuICB9XG5cbiAgZ2V0UDEoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25cbiAgfVxuXG4gIGdldFAyKCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHRoaXMucG9zaXRpb24ueSlcbiAgfVxuXG4gIGdldFAzKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLnNpemUpXG4gIH1cblxuICBnZXRQNCgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnkpXG4gIH1cblxuICBnZXRDZW50ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb24uYWRkKHRoaXMuc2l6ZS5tdWx0KDAuNSkpXG4gIH1cblxuICBvcihyZWN0KSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBuZXcgUG9pbnQoTWF0aC5taW4odGhpcy5wb3NpdGlvbi54LCByZWN0LnBvc2l0aW9uLngpLCBNYXRoLm1pbih0aGlzLnBvc2l0aW9uLnksIHJlY3QucG9zaXRpb24ueSkpXG4gICAgY29uc3Qgc2l6ZSA9IChuZXcgUG9pbnQoTWF0aC5tYXgodGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHJlY3QucG9zaXRpb24ueCArIHJlY3Quc2l6ZS54KSwgTWF0aC5tYXgodGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnksIHJlY3QucG9zaXRpb24ueSArIHJlY3Quc2l6ZS55KSkpLnN1Yihwb3NpdGlvbilcbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZShwb3NpdGlvbiwgc2l6ZSlcbiAgfVxuXG4gIGFuZChyZWN0KSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBuZXcgUG9pbnQoTWF0aC5tYXgodGhpcy5wb3NpdGlvbi54LCByZWN0LnBvc2l0aW9uLngpLCBNYXRoLm1heCh0aGlzLnBvc2l0aW9uLnksIHJlY3QucG9zaXRpb24ueSkpXG4gICAgY29uc3Qgc2l6ZSA9IChuZXcgUG9pbnQoTWF0aC5taW4odGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHJlY3QucG9zaXRpb24ueCArIHJlY3Quc2l6ZS54KSwgTWF0aC5taW4odGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnksIHJlY3QucG9zaXRpb24ueSArIHJlY3Quc2l6ZS55KSkpLnN1Yihwb3NpdGlvbilcbiAgICBpZiAoc2l6ZS54IDw9IDAgfHwgc2l6ZS55IDw9IDApIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHBvc2l0aW9uLCBzaXplKVxuICB9XG5cbiAgaW5jbHVkZVBvaW50KHApIHtcbiAgICByZXR1cm4gISh0aGlzLnBvc2l0aW9uLnggPiBwLnggfHwgdGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLnggPCBwLnggfHwgdGhpcy5wb3NpdGlvbi55ID4gcC55IHx8IHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55IDwgcC55KVxuICB9XG5cbiAgaW5jbHVkZVJlY3RhbmdsZShyZWN0YW5nbGUpIHtcbiAgICByZXR1cm4gdGhpcy5pbmNsdWRlUG9pbnQocmVjdGFuZ2xlLnBvc2l0aW9uKSAmJiB0aGlzLmluY2x1ZGVQb2ludChyZWN0YW5nbGUuZ2V0UDMoKSlcbiAgfVxuXG4gIG1vdmVUb0JvdW5kKHJlY3QsIGF4aXMpIHtcbiAgICBsZXQgc2VsQXhpcywgY3Jvc3NSZWN0YW5nbGVcbiAgICBpZiAoYXhpcykge1xuICAgICAgc2VsQXhpcyA9IGF4aXNcbiAgICB9IGVsc2Uge1xuICAgICAgY3Jvc3NSZWN0YW5nbGUgPSB0aGlzLmFuZChyZWN0KVxuICAgICAgaWYgKCFjcm9zc1JlY3RhbmdsZSkge1xuICAgICAgICByZXR1cm4gcmVjdFxuICAgICAgfVxuICAgICAgc2VsQXhpcyA9IGNyb3NzUmVjdGFuZ2xlLnNpemUueCA+IGNyb3NzUmVjdGFuZ2xlLnNpemUueSA/ICd5JyA6ICd4J1xuICAgIH1cbiAgICBjb25zdCB0aGlzQ2VudGVyID0gdGhpcy5nZXRDZW50ZXIoKVxuICAgIGNvbnN0IHJlY3RDZW50ZXIgPSByZWN0LmdldENlbnRlcigpXG4gICAgY29uc3Qgc2lnbiA9IHRoaXNDZW50ZXJbc2VsQXhpc10gPiByZWN0Q2VudGVyW3NlbEF4aXNdID8gLTEgOiAxXG4gICAgY29uc3Qgb2Zmc2V0ID0gc2lnbiA+IDAgPyB0aGlzLnBvc2l0aW9uW3NlbEF4aXNdICsgdGhpcy5zaXplW3NlbEF4aXNdIC0gcmVjdC5wb3NpdGlvbltzZWxBeGlzXSA6IHRoaXMucG9zaXRpb25bc2VsQXhpc10gLSAocmVjdC5wb3NpdGlvbltzZWxBeGlzXSArIHJlY3Quc2l6ZVtzZWxBeGlzXSlcbiAgICByZWN0LnBvc2l0aW9uW3NlbEF4aXNdID0gcmVjdC5wb3NpdGlvbltzZWxBeGlzXSArIG9mZnNldFxuICAgIHJldHVybiByZWN0XG4gIH1cblxuICBnZXRTcXVhcmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZS54ICogdGhpcy5zaXplLnlcbiAgfVxuXG4gIHN0eWxlQXBwbHkoZWwpIHtcbiAgICBlbCA9IGVsIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2luZCcpXG4gICAgZWwuc3R5bGUubGVmdCA9IHRoaXMucG9zaXRpb24ueCArICdweCdcbiAgICBlbC5zdHlsZS50b3AgPSB0aGlzLnBvc2l0aW9uLnkgKyAncHgnXG4gICAgZWwuc3R5bGUud2lkdGggPSB0aGlzLnNpemUueCArICdweCdcbiAgICBlbC5zdHlsZS5oZWlnaHQgPSB0aGlzLnNpemUueSArICdweCdcbiAgfVxuXG4gIGdyb3d0aChzaXplKSB7XG4gICAgdGhpcy5zaXplID0gdGhpcy5zaXplLmFkZChzaXplKVxuICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uLmFkZChzaXplLm11bHQoLTAuNSkpXG4gIH1cblxuICBnZXRNaW5TaWRlKCkge1xuICAgIHJldHVybiBNYXRoLm1pbih0aGlzLnNpemUueCwgdGhpcy5zaXplLnkpXG4gIH1cblxuICBzdGF0aWMgZnJvbUVsZW1lbnQoZWxlbWVudCwgcGFyZW50PWVsZW1lbnQucGFyZW50Tm9kZSwgaXNDb250ZW50Qm94U2l6ZT1mYWxzZSwgaXNDb25zaWRlclRyYW5zbGF0ZT1mYWxzZSkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gUG9pbnQuZWxlbWVudE9mZnNldChlbGVtZW50LCBwYXJlbnQsIGlzQ29uc2lkZXJUcmFuc2xhdGUpXG4gICAgY29uc3Qgc2l6ZSA9IFBvaW50LmVsZW1lbnRTaXplKGVsZW1lbnQsIGlzQ29udGVudEJveFNpemUpXG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUocG9zaXRpb24sIHNpemUpXG4gIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBoYXNDbGFzcyhlbGVtZW50LCBjKSB7XG4gIGNvbnN0IHJlID0gbmV3IFJlZ0V4cCgnKF58XFxcXHMpJyArIGMgKyAnKFxcXFxzfCQpJywgJ2cnKVxuICByZXR1cm4gKHJlLnRlc3QoZWxlbWVudC5jbGFzc05hbWUpKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQ2xhc3MoZWxlbWVudCwgYykge1xuICBpZiAoIWhhc0NsYXNzKGVsZW1lbnQsIGMpKSB7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSAoZWxlbWVudC5jbGFzc05hbWUgKyAnICcgKyBjKS5yZXBsYWNlKC9cXHMrL2csICcgJykucmVwbGFjZSgvKF4gfCAkKS9nLCAnJylcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoZWxlbWVudCwgYykge1xuICBjb25zdCByZSA9IG5ldyBSZWdFeHAoJyhefFxcXFxzKScgKyBjICsgJyhcXFxcc3wkKScsICdnJylcbiAgZWxlbWVudC5jbGFzc05hbWUgPSBlbGVtZW50LmNsYXNzTmFtZS5yZXBsYWNlKHJlLCAnJDEnKS5yZXBsYWNlKC9cXHMrL2csICcgJykucmVwbGFjZSgvKF4gfCAkKS9nLCAnJylcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldERlZmF1bHRDb250YWluZXIoZWxlbWVudCkge1xuICBsZXQgY29udGFpbmVyID0gZWxlbWVudC5wYXJlbnROb2RlXG4gIHdoaWxlIChjb250YWluZXIucGFyZW50Tm9kZSAmJiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShjb250YWluZXIpWydwb3NpdGlvbiddID09PSAnc3RhdGljJyAmJiBjb250YWluZXIudGFnTmFtZSAhPT0gJ0JPRFknKSB7XG4gICAgY29udGFpbmVyID0gY29udGFpbmVyLnBhcmVudE5vZGVcbiAgfVxuICByZXR1cm4gY29udGFpbmVyXG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAob3B0aW9ucyA9IHt9KSB7XG4gICAgdGhpcy5ldmVudHMgPSB7fVxuXG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5vbikge1xuICAgICAgZm9yIChjb25zdCBbZXZlbnROYW1lLCBmbl0gb2YgT2JqZWN0LmVudHJpZXMob3B0aW9ucy5vbikpIHtcbiAgICAgICAgdGhpcy5vbihldmVudE5hbWUsIGZuKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGVtaXQoZXZlbnROYW1lKSB7XG4gICAgdGhpcy5pbnRlcnJ1cHRlZCA9IGZhbHNlXG4gICAgY29uc3QgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKVxuXG4gICAgaWYgKCF0aGlzLmV2ZW50c1tldmVudE5hbWVdKSByZXR1cm5cblxuICAgIGZvciAoY29uc3QgZnVuYyBvZiB0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICBmdW5jKC4uLmFyZ3MpXG4gICAgICBpZiAodGhpcy5pbnRlcnJ1cHRlZCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpbnRlcnJ1cHQoKSB7XG4gICAgdGhpcy5pbnRlcnJ1cHRlZCA9IHRydWVcbiAgfVxuXG4gIG9uKGV2ZW50TmFtZSwgZm4pIHtcbiAgICBpZiAoIXRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSBbXVxuICAgIH1cblxuICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0ucHVzaChmbilcbiAgfVxuXG4gIHByZXBlbmRPbihldmVudE5hbWUsIGZuKSB7XG4gICAgaWYgKCF0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdID0gW11cbiAgICB9XG5cbiAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLnVuc2hpZnQoZm4pXG4gIH1cblxuICB1bnN1YnNjcmliZShldmVudE5hbWUsIGZuKSB7XG4gICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5ldmVudHNbZXZlbnROYW1lXS5pbmRleE9mKGZuKVxuICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5zcGxpY2UoaW5kZXgsIDEpXG4gICAgfVxuICB9XG5cbiAgcmVzZXRFbWl0dGVyICgpIHtcbiAgICB0aGlzLmV2ZW50cyA9IHt9XG4gIH1cblxuICByZXNldE9uKGV2ZW50TmFtZSkge1xuICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSBbXVxuICB9XG59XG4iLCIvKiFcbiAqIGdldFN0eWxlUHJvcGVydHkgdjEuMC40XG4gKiBvcmlnaW5hbCBieSBrYW5nYXhcbiAqIGh0dHA6Ly9wZXJmZWN0aW9ua2lsbHMuY29tL2ZlYXR1cmUtdGVzdGluZy1jc3MtcHJvcGVydGllcy9cbiAqIE1JVCBsaWNlbnNlXG4gKi9cblxuLypqc2hpbnQgYnJvd3NlcjogdHJ1ZSwgc3RyaWN0OiB0cnVlLCB1bmRlZjogdHJ1ZSAqL1xuLypnbG9iYWwgZGVmaW5lOiBmYWxzZSwgZXhwb3J0czogZmFsc2UsIG1vZHVsZTogZmFsc2UgKi9cblxuKCBmdW5jdGlvbiggd2luZG93ICkge1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBwcmVmaXhlcyA9ICdXZWJraXQgTW96IG1zIE1zIE8nLnNwbGl0KCcgJyk7XG52YXIgZG9jRWxlbVN0eWxlID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlO1xuXG5mdW5jdGlvbiBnZXRTdHlsZVByb3BlcnR5KCBwcm9wTmFtZSApIHtcbiAgaWYgKCAhcHJvcE5hbWUgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gdGVzdCBzdGFuZGFyZCBwcm9wZXJ0eSBmaXJzdFxuICBpZiAoIHR5cGVvZiBkb2NFbGVtU3R5bGVbIHByb3BOYW1lIF0gPT09ICdzdHJpbmcnICkge1xuICAgIHJldHVybiBwcm9wTmFtZTtcbiAgfVxuXG4gIC8vIGNhcGl0YWxpemVcbiAgcHJvcE5hbWUgPSBwcm9wTmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHByb3BOYW1lLnNsaWNlKDEpO1xuXG4gIC8vIHRlc3QgdmVuZG9yIHNwZWNpZmljIHByb3BlcnRpZXNcbiAgdmFyIHByZWZpeGVkO1xuICBmb3IgKCB2YXIgaT0wLCBsZW4gPSBwcmVmaXhlcy5sZW5ndGg7IGkgPCBsZW47IGkrKyApIHtcbiAgICBwcmVmaXhlZCA9IHByZWZpeGVzW2ldICsgcHJvcE5hbWU7XG4gICAgaWYgKCB0eXBlb2YgZG9jRWxlbVN0eWxlWyBwcmVmaXhlZCBdID09PSAnc3RyaW5nJyApIHtcbiAgICAgIHJldHVybiBwcmVmaXhlZDtcbiAgICB9XG4gIH1cbn1cblxuLy8gdHJhbnNwb3J0XG5pZiAoIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcbiAgLy8gQU1EXG4gIGRlZmluZSggZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGdldFN0eWxlUHJvcGVydHk7XG4gIH0pO1xufSBlbHNlIGlmICggdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICkge1xuICAvLyBDb21tb25KUyBmb3IgQ29tcG9uZW50XG4gIG1vZHVsZS5leHBvcnRzID0gZ2V0U3R5bGVQcm9wZXJ0eTtcbn0gZWxzZSB7XG4gIC8vIGJyb3dzZXIgZ2xvYmFsXG4gIHdpbmRvdy5nZXRTdHlsZVByb3BlcnR5ID0gZ2V0U3R5bGVQcm9wZXJ0eTtcbn1cblxufSkoIHdpbmRvdyApO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldERpc3RhbmNlKHAxLCBwMikge1xuICBjb25zdCBkeCA9IHAxLnggLSBwMi54LCBkeSA9IHAxLnkgLSBwMi55XG4gIHJldHVybiBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRYRGlmZmVyZW5jZShwMSwgcDIpIHtcbiAgcmV0dXJuIE1hdGguYWJzKHAxLnggLSBwMi54KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0WURpZmZlcmVuY2UocDEsIHAyKSB7XG4gIHJldHVybiBNYXRoLmFicyhwMS55IC0gcDIueSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3Rvcnkob3B0aW9ucykge1xuICByZXR1cm4gKHAxLCBwMikgPT4ge1xuICAgIHJldHVybiBNYXRoLnNxcnQoXG4gICAgICBNYXRoLnBvdyhvcHRpb25zLnggKiBNYXRoLmFicyhwMS54IC0gcDIueCksIDIpICtcbiAgICAgIE1hdGgucG93KG9wdGlvbnMueSAqIE1hdGguYWJzKHAxLnkgLSBwMi55KSwgMilcbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluZGV4T2ZOZWFyZXN0UG9pbnQoYXJyLCB2YWwsIHJhZGl1cywgZ2V0RGlzdGFuY2VGdW5jPWdldERpc3RhbmNlKSB7XG4gIGxldCBzaXplLCBpbmRleCA9IDAsIGksIHRlbXBcbiAgaWYgKGFyci5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gLTFcbiAgfVxuICBzaXplID0gZ2V0RGlzdGFuY2VGdW5jKGFyclswXSwgdmFsKVxuICBmb3IgKGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgdGVtcCA9IGdldERpc3RhbmNlRnVuYyhhcnJbaV0sIHZhbClcbiAgICBpZiAodGVtcCA8IHNpemUpIHtcbiAgICAgIHNpemUgPSB0ZW1wXG4gICAgICBpbmRleCA9IGlcbiAgICB9XG4gIH1cbiAgaWYgKHJhZGl1cyA+PSAwICYmIHNpemUgPiByYWRpdXMpIHtcbiAgICByZXR1cm4gLTFcbiAgfVxuICByZXR1cm4gaW5kZXhcbn1cbiIsImltcG9ydCBQb2ludCBmcm9tICcuL3BvaW50J1xuaW1wb3J0IHsgZ2V0RGlzdGFuY2UgfSBmcm9tICcuL2Rpc3RhbmNlcydcblxuZXhwb3J0IGZ1bmN0aW9uIGNsYW1wKG1pbiwgbWF4LCB2YWwpIHtcbiAgcmV0dXJuIE1hdGgubWF4KG1pbiwgTWF0aC5taW4obWF4LCB2YWwpKVxufVxuXG4vL1JldHVybiBjcm9zc2luZyBwb2ludCBvZiB0d28gbGluZXNcbmV4cG9ydCBmdW5jdGlvbiBkaXJlY3RDcm9zc2luZyhMMVAxLCBMMVAyLCBMMlAxLCBMMlAyKSB7XG4gIGxldCB0ZW1wLCBrMSwgazIsIGIxLCBiMiwgeCwgeVxuICBpZiAoTDJQMS54ID09PSBMMlAyLngpIHtcbiAgICB0ZW1wID0gTDJQMVxuICAgIEwyUDEgPSBMMVAxXG4gICAgTDFQMSA9IHRlbXBcbiAgICB0ZW1wID0gTDJQMlxuICAgIEwyUDIgPSBMMVAyXG4gICAgTDFQMiA9IHRlbXBcbiAgfVxuICBpZiAoTDFQMS54ID09PSBMMVAyLngpIHtcbiAgICBrMiA9IChMMlAyLnkgLSBMMlAxLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICBiMiA9IChMMlAyLnggKiBMMlAxLnkgLSBMMlAxLnggKiBMMlAyLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICB4ID0gTDFQMS54XG4gICAgeSA9IHggKiBrMiArIGIyXG4gICAgcmV0dXJuIG5ldyBQb2ludCh4LCB5KVxuICB9IGVsc2Uge1xuICAgIGsxID0gKEwxUDIueSAtIEwxUDEueSkgLyAoTDFQMi54IC0gTDFQMS54KVxuICAgIGIxID0gKEwxUDIueCAqIEwxUDEueSAtIEwxUDEueCAqIEwxUDIueSkgLyAoTDFQMi54IC0gTDFQMS54KVxuICAgIGsyID0gKEwyUDIueSAtIEwyUDEueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgIGIyID0gKEwyUDIueCAqIEwyUDEueSAtIEwyUDEueCAqIEwyUDIueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgIHggPSAoYjEgLSBiMikgLyAoazIgLSBrMSlcbiAgICB5ID0geCAqIGsxICsgYjFcbiAgICByZXR1cm4gbmV3IFBvaW50KHgsIHkpXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kVG9TZWdtZW50KExQMSwgTFAyLCBQKSB7XG4gIGxldCB4LCB5XG4gIHggPSBjbGFtcChNYXRoLm1pbihMUDEueCwgTFAyLngpLCBNYXRoLm1heChMUDEueCwgTFAyLngpLCBQLngpXG4gIGlmICh4ICE9PSBQLngpIHtcbiAgICB5ID0gKHggPT09IExQMS54KSA/IExQMS55IDogTFAyLnlcbiAgICBQID0gbmV3IFBvaW50KHgsIHkpXG4gIH1cblxuICB5ID0gY2xhbXAoTWF0aC5taW4oTFAxLnksIExQMi55KSwgTWF0aC5tYXgoTFAxLnksIExQMi55KSwgUC55KVxuICBpZiAoeSAhPT0gUC55KSB7XG4gICAgeCA9ICh5ID09PSBMUDEueSkgPyBMUDEueCA6IExQMi54XG4gICAgUCA9IG5ldyBQb2ludCh4LCB5KVxuICB9XG5cbiAgcmV0dXJuIFBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kVG9MaW5lKEEsIEIsIFApIHtcbiAgY29uc3QgQVAgPSBuZXcgUG9pbnQoUC54IC0gQS54LCBQLnkgLSBBLnkpLFxuICAgIEFCID0gbmV3IFBvaW50KEIueCAtIEEueCwgQi55IC0gQS55KSxcbiAgICBhYjIgPSBBQi54ICogQUIueCArIEFCLnkgKiBBQi55LFxuICAgIGFwX2FiID0gQVAueCAqIEFCLnggKyBBUC55ICogQUIueSxcbiAgICB0ID0gYXBfYWIgLyBhYjJcbiAgcmV0dXJuIG5ldyBQb2ludChBLnggKyBBQi54ICogdCwgQS55ICsgQUIueSAqIHQpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb2ludE9uTGluZShMUDEsIExQMiwgcGVyY2VudCkge1xuICBjb25zdCBkeCA9IExQMi54IC0gTFAxLngsIGR5ID0gTFAyLnkgLSBMUDEueVxuICByZXR1cm4gbmV3IFBvaW50KExQMS54ICsgcGVyY2VudCAqIGR4LCBMUDEueSArIHBlcmNlbnQgKiBkeSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBvaW50T25MaW5lQnlMZW5naHQoTFAxLCBMUDIsIGxlbmdodCkge1xuICBjb25zdCBkeCA9IExQMi54IC0gTFAxLnhcbiAgY29uc3QgZHkgPSBMUDIueSAtIExQMS55XG4gIGNvbnN0IHBlcmNlbnQgPSBsZW5naHQgLyBnZXREaXN0YW5jZShMUDEsIExQMilcbiAgcmV0dXJuIG5ldyBQb2ludChMUDEueCArIHBlcmNlbnQgKiBkeCwgTFAxLnkgKyBwZXJjZW50ICogZHkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRQb2ludFRvQm91bmRQb2ludHMoYm91bmRwb2ludHMsIHBvaW50LCBpc1JpZ2h0KSB7XG4gIGNvbnN0IHJlc3VsdCA9IGJvdW5kcG9pbnRzLmZpbHRlcigoYlBvaW50KSA9PiB7XG4gICAgcmV0dXJuIGJQb2ludC55ID4gcG9pbnQueSB8fCAoaXNSaWdodCA/IGJQb2ludC54IDwgcG9pbnQueCA6IGJQb2ludC54ID4gcG9pbnQueClcbiAgfSlcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChwb2ludC55IDwgcmVzdWx0W2ldLnkpIHtcbiAgICAgIHJlc3VsdC5zcGxpY2UoaSwgMCwgcG9pbnQpXG4gICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxuICB9XG4gIHJlc3VsdC5wdXNoKHBvaW50KVxuICByZXR1cm4gcmVzdWx0XG59XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9wb2ludCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFuZ2xlRGlmZihhbHBoYSwgYmV0YSkge1xuICBjb25zdCBtaW5BbmdsZSA9IE1hdGgubWluKGFscGhhLCBiZXRhKVxuICBjb25zdCBtYXhBbmdsZSA9ICBNYXRoLm1heChhbHBoYSwgYmV0YSlcbiAgcmV0dXJuIE1hdGgubWluKG1heEFuZ2xlIC0gbWluQW5nbGUsIG1pbkFuZ2xlICsgTWF0aC5QSSoyIC0gbWF4QW5nbGUpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbmdsZShwMSwgcDIpIHtcbiAgY29uc3QgZGlmZiA9IHAyLnN1YihwMSlcbiAgcmV0dXJuIG5vcm1hbGl6ZUFuZ2xlKE1hdGguYXRhbjIoZGlmZi55LCBkaWZmLngpKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9SYWRpYW4oYW5nbGUpIHtcbiAgcmV0dXJuICgoYW5nbGUgJSAzNjApICogTWF0aC5QSSAvIDE4MClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvRGVncmVlKGFuZ2xlKSB7XG4gIHJldHVybiAoYW5nbGUgKiAxODAgLyBNYXRoLlBJKSAlIDM2MFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRBbmdsZShtaW4sIG1heCwgdmFsKSB7XG4gIGxldCBkbWluLCBkbWF4XG4gIGlmIChtaW4gPCBtYXggJiYgdmFsID4gbWluICYmIHZhbCA8IG1heCkge1xuICAgIHJldHVybiB2YWxcbiAgfSBlbHNlIGlmIChtYXggPCBtaW4gJiYgKHZhbCA8IG1heCB8fCB2YWwgPiBtaW4pKSB7XG4gICAgcmV0dXJuIHZhbFxuICB9IGVsc2Uge1xuICAgIGRtaW4gPSBnZXRBbmdsZURpZmYobWluLCB2YWwpXG4gICAgZG1heCA9IGdldEFuZ2xlRGlmZihtYXgsIHZhbClcbiAgICBpZiAoZG1pbiA8IGRtYXgpIHtcbiAgICAgIHJldHVybiBtaW5cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG1heFxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmVhcmVzdEFuZ2xlKGFyciwgYW5nbGUpIHtcbiAgbGV0IGksIHRlbXAsIGRpZmYgPSBNYXRoLlBJICogMiwgdmFsdWVcbiAgZm9yIChpID0gMDsgaSA8IGFyci5sZW5ndGg7aSsrKSB7XG4gICAgdGVtcCA9IGdldEFuZ2xlRGlmZihhcnJbaV0sIGFuZ2xlKVxuICAgIGlmIChkaWZmIDwgdGVtcCkge1xuICAgICAgZGlmZiA9IHRlbXBcbiAgICAgIHZhbHVlID0gYXJyW2ldXG4gICAgfVxuICB9XG4gIHJldHVybiB2YWx1ZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplQW5nbGUodmFsKSB7XG4gIHdoaWxlICh2YWwgPCAwKSB7XG4gICAgdmFsICs9IDIgKiBNYXRoLlBJXG4gIH1cbiAgd2hpbGUgKHZhbCA+IDIgKiBNYXRoLlBJKSB7XG4gICAgdmFsIC09IDIgKiBNYXRoLlBJXG4gIH1cbiAgcmV0dXJuIHZhbFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKGFuZ2xlLCBsZW5ndGgsIGNlbnRlcikge1xuICBjZW50ZXIgPSBjZW50ZXIgfHwgbmV3IFBvaW50KDAsIDApXG4gIHJldHVybiBjZW50ZXIuYWRkKG5ldyBQb2ludChsZW5ndGggKiBNYXRoLmNvcyhhbmdsZSksIGxlbmd0aCAqIE1hdGguc2luKGFuZ2xlKSkpXG59XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9nZW9tZXRyeS9wb2ludCdcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSAnLi9nZW9tZXRyeS9yZWN0YW5nbGUnXG5pbXBvcnQge1xuICBnZXRQb2ludE9uTGluZUJ5TGVuZ2h0LFxuICBkaXJlY3RDcm9zc2luZyxcbiAgYm91bmRUb0xpbmVcbn0gZnJvbSAnLi9nZW9tZXRyeS9ib3VuZHMnXG5cbmltcG9ydCB7XG4gIGdldEFuZ2xlLFxuICBub3JtYWxpemVBbmdsZSxcbiAgYm91bmRBbmdsZSxcbiAgZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtXG59IGZyb20gJy4vZ2VvbWV0cnkvYW5nbGVzJ1xuXG5leHBvcnQgY2xhc3MgQm91bmQge1xuICBjb25zdHJ1Y3RvciAoKSB7fVxuXG4gIGJvdW5kKHBvaW50LCBfc2l6ZSkge1xuICAgIHJldHVybiBwb2ludFxuICB9XG5cbiAgcmVmcmVzaCAoKSB7fVxuXG4gIHN0YXRpYyBib3VuZGluZygpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyB0aGlzKC4uLmFyZ3VtZW50cylcbiAgICByZXR1cm4gaW5zdGFuY2UuYm91bmQuYmluZChpbnN0YW5jZSlcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb1JlY3RhbmdsZSBleHRlbmRzIEJvdW5kIHtcbiAgY29uc3RydWN0b3IocmVjdGFuZ2xlKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMucmVjdGFuZ2xlID0gcmVjdGFuZ2xlXG4gIH1cblxuICBib3VuZChwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IGNhbGNQb2ludCA9IHBvaW50LmNsb25lKClcbiAgICBjb25zdCByZWN0UDIgPSB0aGlzLnJlY3RhbmdsZS5nZXRQMygpXG5cbiAgICBpZiAodGhpcy5yZWN0YW5nbGUucG9zaXRpb24ueCA+IGNhbGNQb2ludC54KSB7XG4gICAgICAoY2FsY1BvaW50LnggPSB0aGlzLnJlY3RhbmdsZS5wb3NpdGlvbi54KVxuICAgIH1cbiAgICBpZiAodGhpcy5yZWN0YW5nbGUucG9zaXRpb24ueSA+IGNhbGNQb2ludC55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHRoaXMucmVjdGFuZ2xlLnBvc2l0aW9uLnlcbiAgICB9XG4gICAgaWYgKHJlY3RQMi54IDwgY2FsY1BvaW50LnggKyBzaXplLngpIHtcbiAgICAgIGNhbGNQb2ludC54ID0gcmVjdFAyLnggLSBzaXplLnhcbiAgICB9XG4gICAgaWYgKHJlY3RQMi55IDwgY2FsY1BvaW50LnkgKyBzaXplLnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gcmVjdFAyLnkgLSBzaXplLnlcbiAgICB9XG5cbiAgICByZXR1cm4gY2FsY1BvaW50XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9FbGVtZW50IGV4dGVuZHMgQm91bmRUb1JlY3RhbmdsZSB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbnRhaW5lcikge1xuICAgIHN1cGVyKFJlY3RhbmdsZS5mcm9tRWxlbWVudChlbGVtZW50LCBjb250YWluZXIpKVxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lclxuICB9XG5cbiAgcmVmcmVzaCAoKSB7XG4gICAgdGhpcy5yZWN0YW5nbGUgPSBSZWN0YW5nbGUuZnJvbUVsZW1lbnQodGhpcy5lbGVtZW50LCB0aGlzLmNvbnRhaW5lcilcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb0xpbmVYIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3Rvcih4LCBzdGFydFksIGVuZFkpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy54ID0geFxuICAgIHRoaXMuc3RhcnRZID0gc3RhcnRZXG4gICAgdGhpcy5lbmRZID0gZW5kWVxuICB9XG5cbiAgYm91bmQocG9pbnQsIHNpemUpIHtcbiAgICBjb25zdCBjYWxjUG9pbnQgPSBwb2ludC5jbG9uZSgpXG5cbiAgICBjYWxjUG9pbnQueCA9IHRoaXMueFxuICAgIGlmICh0aGlzLnN0YXJ0WSA+IGNhbGNQb2ludC55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHRoaXMuc3RhcnRZXG4gICAgfVxuICAgIGlmICh0aGlzLmVuZFkgPCBjYWxjUG9pbnQueSArIHNpemUueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSB0aGlzLmVuZFkgLSBzaXplLnlcbiAgICB9XG5cbiAgICByZXR1cm4gY2FsY1BvaW50XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9MaW5lWSBleHRlbmRzIEJvdW5kIHtcbiAgY29uc3RydWN0b3IoeSwgc3RhcnRYLCBlbmRYKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMueSA9IHlcbiAgICB0aGlzLnN0YXJ0WCA9IHN0YXJ0WFxuICAgIHRoaXMuZW5kWCA9IGVuZFhcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgY2FsY1BvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIGNhbGNQb2ludC55ID0gdGhpcy55XG4gICAgaWYgKHRoaXMuc3RhcnRYID4gY2FsY1BvaW50LngpIHtcbiAgICAgIGNhbGNQb2ludC54ID0gdGhpcy5zdGFydFhcbiAgICB9XG4gICAgaWYgKHRoaXMuZW5kWCA8IGNhbGNQb2ludC54ICsgc2l6ZS54KSB7XG4gICAgICBjYWxjUG9pbnQueCA9IHRoaXMuZW5kWCAtIHNpemUueFxuICAgIH1cbiAgICByZXR1cm4gY2FsY1BvaW50XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9MaW5lIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3RvcihzdGFydFBvaW50LCBlbmRQb2ludCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnN0YXJ0UG9pbnQgPSBzdGFydFBvaW50XG4gICAgdGhpcy5lbmRQb2ludCA9IGVuZFBvaW50XG4gICAgY29uc3QgYWxwaGEgPSBNYXRoLmF0YW4yKGVuZFBvaW50LnkgLSBzdGFydFBvaW50LnksIGVuZFBvaW50LnggLSBzdGFydFBvaW50LngpXG4gICAgY29uc3QgYmV0YSA9IGFscGhhICsgTWF0aC5QSSAvIDJcbiAgICB0aGlzLnNvbWVLID0gMTBcbiAgICB0aGlzLmNvc0JldGEgPSBNYXRoLmNvcyhiZXRhKVxuICAgIHRoaXMuc2luQmV0YSA9IE1hdGguc2luKGJldGEpXG4gIH1cblxuICBib3VuZChwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IHBvaW50MiA9IG5ldyBQb2ludChcbiAgICAgIHBvaW50LnggKyB0aGlzLnNvbWVLICogdGhpcy5jb3NCZXRhLFxuICAgICAgcG9pbnQueSArIHRoaXMuc29tZUsgKiB0aGlzLnNpbkJldGFcbiAgICApXG5cbiAgICBjb25zdCBuZXdFbmRQb2ludCA9IGdldFBvaW50T25MaW5lQnlMZW5naHQodGhpcy5lbmRQb2ludCwgdGhpcy5zdGFydFBvaW50LCBzaXplLngpXG4gICAgY29uc3QgcG9pbnRDcm9zc2luZyA9IGRpcmVjdENyb3NzaW5nKHRoaXMuc3RhcnRQb2ludCwgdGhpcy5lbmRQb2ludCwgcG9pbnQsIHBvaW50MilcblxuICAgIHJldHVybiBib3VuZFRvTGluZSh0aGlzLnN0YXJ0UG9pbnQsIG5ld0VuZFBvaW50LCBwb2ludENyb3NzaW5nKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvQ2lyY2xlIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3RvcihjZW50ZXIsIHJhZGl1cykge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLmNlbnRlciA9IGNlbnRlclxuICAgIHRoaXMucmFkaXVzID0gcmFkaXVzXG4gIH1cblxuICBib3VuZChwb2ludCwgX3NpemUpIHtcbiAgICByZXR1cm4gZ2V0UG9pbnRPbkxpbmVCeUxlbmdodCh0aGlzLmNlbnRlciwgcG9pbnQsIHRoaXMucmFkaXVzKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvQXJjIGV4dGVuZHMgQm91bmRUb0NpcmNsZSB7XG4gIGNvbnN0cnVjdG9yKGNlbnRlciwgcmFkaXVzLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSkge1xuICAgIHN1cGVyKGNlbnRlciwgcmFkaXVzKVxuICAgIHRoaXMuX3N0YXJ0QW5nbGUgPSBzdGFydEFuZ2xlXG4gICAgdGhpcy5fZW5kQW5nbGUgPSBlbmRBbmdsZVxuICB9XG5cbiAgc3RhcnRBbmdsZSgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMuX3N0YXJ0QW5nbGUgPT09ICdmdW5jdGlvbicgPyB0aGlzLl9zdGFydEFuZ2xlKCkgOiB0aGlzLl9zdGFydEFuZ2xlXG4gIH1cblxuICBlbmRBbmdsZSgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMuX2VuZEFuZ2xlID09PSAnZnVuY3Rpb24nID8gdGhpcy5fZW5kQW5nbGUoKSA6IHRoaXMuX2VuZEFuZ2xlXG4gIH1cblxuICBib3VuZChwb2ludCwgX3NpemUpIHtcbiAgICBsZXQgYW5nbGUgPSBnZXRBbmdsZSh0aGlzLmNlbnRlciwgcG9pbnQpXG4gICAgYW5nbGUgPSBub3JtYWxpemVBbmdsZShhbmdsZSlcbiAgICBhbmdsZSA9IGJvdW5kQW5nbGUodGhpcy5zdGFydEFuZ2xlKCksIHRoaXMuZW5kQW5nbGUoKSwgYW5nbGUpXG4gICAgcmV0dXJuIGdldFBvaW50RnJvbVJhZGlhbFN5c3RlbShhbmdsZSwgdGhpcy5yYWRpdXMsIHRoaXMuY2VudGVyKVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhcnJheSwgdmFsKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoYXJyYXlbaV0gPT09IHZhbCkge1xuICAgICAgYXJyYXkuc3BsaWNlKGksIDEpXG4gICAgICBpLS1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycmF5XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByYW5nZShzdGFydCwgc3RvcCwgc3RlcCkge1xuICBjb25zdCByZXN1bHQgPSBbXVxuICBpZiAodHlwZW9mIHN0b3AgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgc3RvcCA9IHN0YXJ0XG4gICAgc3RhcnQgPSAwXG4gIH1cbiAgaWYgKHR5cGVvZiBzdGVwID09PSAndW5kZWZpbmVkJykge1xuICAgIHN0ZXAgPSAxXG4gIH1cbiAgaWYgKChzdGVwID4gMCAmJiBzdGFydCA+PSBzdG9wKSB8fCAoc3RlcCA8IDAgJiYgc3RhcnQgPD0gc3RvcCkpIHtcbiAgICByZXR1cm4gW11cbiAgfVxuICBmb3IgKGxldCBpID0gc3RhcnQ7IHN0ZXAgPiAwID8gaSA8IHN0b3AgOiBpID4gc3RvcDsgaSArPSBzdGVwKSB7XG4gICAgcmVzdWx0LnB1c2goaSlcbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9nZW9tZXRyeS9wb2ludCdcbmltcG9ydCB7IGFkZFBvaW50VG9Cb3VuZFBvaW50cyB9IGZyb20gJy4vZ2VvbWV0cnkvYm91bmRzJ1xuXG5pbXBvcnQge1xuICBpbmRleE9mTmVhcmVzdFBvaW50LFxuICBnZXREaXN0YW5jZVxufSBmcm9tICcuL2dlb21ldHJ5L2Rpc3RhbmNlcydcblxuY2xhc3MgQmFzaWNTdHJhdGVneSB7XG4gIGNvbnN0cnVjdG9yKHJlY3RhbmdsZSwgb3B0aW9ucz17fSkge1xuICAgIHRoaXMucmVjdGFuZ2xlID0gcmVjdGFuZ2xlXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9uc1xuICB9XG5cbiAgZ2V0IGJvdW5kUmVjdCAoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGlzLnJlY3RhbmdsZSA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMucmVjdGFuZ2xlKCkgOiB0aGlzLnJlY3RhbmdsZVxuICB9XG59XG5cbmNsYXNzIE5vdENyb3NzaW5nU3RyYXRlZ3kgZXh0ZW5kcyBCYXNpY1N0cmF0ZWd5IHtcbiAgcG9zaXRpb25pbmcgKHJlY3RhbmdsZUxpc3QsIGluZGV4ZXNPZk5ld3MpIHtcbiAgICBjb25zdCBzdGF0aWNSZWN0YW5nbGVJbmRleGVzID0gcmVjdGFuZ2xlTGlzdC5yZWR1Y2UoKGluZGV4ZXMsIF9yZWN0LCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGluZGV4ZXNPZk5ld3MuaW5kZXhPZihpbmRleCkgPT09IC0xKSB7XG4gICAgICAgIGluZGV4ZXMucHVzaChpbmRleClcbiAgICAgIH1cbiAgICAgIHJldHVybiBpbmRleGVzXG4gICAgfSwgW10pXG5cbiAgICBpbmRleGVzT2ZOZXdzLmZvckVhY2goKGluZGV4KSA9PiB7XG4gICAgICBsZXQgcmVjdCA9IHJlY3RhbmdsZUxpc3RbaW5kZXhdXG4gICAgICBsZXQgcmVtb3ZhYmxlID0gZmFsc2VcblxuICAgICAgc3RhdGljUmVjdGFuZ2xlSW5kZXhlcy5mb3JFYWNoKChpbmRleE9mU3RhdGljKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YXRpY1JlY3QgPSByZWN0YW5nbGVMaXN0W2luZGV4T2ZTdGF0aWNdXG4gICAgICAgIHJlY3QgPSBzdGF0aWNSZWN0Lm1vdmVUb0JvdW5kKHJlY3QpXG4gICAgICB9KVxuXG4gICAgICByZW1vdmFibGUgPSBzdGF0aWNSZWN0YW5nbGVJbmRleGVzLnNvbWUoKGluZGV4T2ZTdGF0aWMpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhdGljUmVjdCA9IHJlY3RhbmdsZUxpc3RbaW5kZXhPZlN0YXRpY11cbiAgICAgICAgcmV0dXJuICAhIXN0YXRpY1JlY3QuYW5kKHJlY3QpXG4gICAgICB9KSB8fCByZWN0LmFuZCh0aGlzLmJvdW5kUmVjdCkuZ2V0U3F1YXJlKCkgIT09IHJlY3QuZ2V0U3F1YXJlKClcblxuICAgICAgaWYgKHJlbW92YWJsZSkge1xuICAgICAgICByZWN0LnJlbW92YWJsZSA9IHRydWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMucHVzaChpbmRleClcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiByZWN0YW5nbGVMaXN0XG4gIH1cblxuICBzb3J0aW5nKG9kbERyYWdnYWJsZXNMaXN0LCBuZXdEcmFnZ2FibGVzLCBpbmRleE9mTmV3cykge1xuICAgIGNvbnN0IGRyYWdnYWJsZXMgPSBvZGxEcmFnZ2FibGVzTGlzdC5jb25jYXQobmV3RHJhZ2dhYmxlcylcbiAgICBuZXdEcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgaW5kZXhPZk5ld3MucHVzaChkcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSlcbiAgICB9KVxuICAgIHJldHVybiBkcmFnZ2FibGVzXG4gIH1cbn1cblxuY2xhc3MgRmxvYXRMZWZ0U3RyYXRlZ3kgZXh0ZW5kcyBCYXNpY1N0cmF0ZWd5IHtcbiAgY29uc3RydWN0b3IocmVjdGFuZ2xlLCBvcHRpb25zPXt9KSB7XG4gICAgc3VwZXIocmVjdGFuZ2xlLCBvcHRpb25zKVxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgcmVtb3ZhYmxlOiB0cnVlXG4gICAgfSwgb3B0aW9ucylcblxuICAgIHRoaXMucmFkaXVzID0gb3B0aW9ucy5yYWRpdXMgfHwgODBcblxuICAgIHRoaXMucGFkZGluZ1RvcExlZnQgPSBvcHRpb25zLnBhZGRpbmdUb3BMZWZ0IHx8IG5ldyBQb2ludCgwLCAwKVxuICAgIHRoaXMucGFkZGluZ0JvdHRvbVJpZ2h0ID0gb3B0aW9ucy5wYWRkaW5nQm90dG9tUmlnaHQgfHwgbmV3IFBvaW50KDAsIDApXG4gICAgdGhpcy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgPSBvcHRpb25zLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyB8fCAwXG5cbiAgICB0aGlzLmdldERpc3RhbmNlID0gb3B0aW9ucy5nZXREaXN0YW5jZSB8fCBnZXREaXN0YW5jZVxuICAgIHRoaXMuZ2V0UG9zaXRpb24gPSBvcHRpb25zLmdldFBvc2l0aW9uIHx8ICgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucG9zaXRpb24pXG4gIH1cblxuICBwb3NpdGlvbmluZyhyZWN0YW5nbGVMaXN0LCBfaW5kZXhlc09mTmV3cykge1xuICAgIGNvbnN0IGJvdW5kUmVjdCA9IHRoaXMuYm91bmRSZWN0XG4gICAgY29uc3QgcmVjdFAyID0gYm91bmRSZWN0LmdldFAyKClcbiAgICBsZXQgYm91bmRhcnlQb2ludHMgPSBbYm91bmRSZWN0LnBvc2l0aW9uXVxuXG4gICAgcmVjdGFuZ2xlTGlzdC5mb3JFYWNoKChyZWN0LCByZWN0SW5kZXgpID0+IHtcbiAgICAgIGxldCBwb3NpdGlvbiwgaXNWYWxpZCA9IGZhbHNlXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvdW5kYXJ5UG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHBvc2l0aW9uID0gbmV3IFBvaW50KFxuICAgICAgICAgIGJvdW5kYXJ5UG9pbnRzW2ldLnggKyB0aGlzLnBhZGRpbmdUb3BMZWZ0LngsXG4gICAgICAgICAgaSA+IDAgPyAoYm91bmRhcnlQb2ludHNbaSAtIDFdLnkgKyB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcykgOiAoYm91bmRSZWN0LnBvc2l0aW9uLnkgKyB0aGlzLnBhZGRpbmdUb3BMZWZ0LnkpXG4gICAgICAgIClcblxuICAgICAgICBpc1ZhbGlkID0gKHBvc2l0aW9uLnggKyByZWN0LnNpemUueCA8IHJlY3RQMi54KVxuXG4gICAgICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgcG9zaXRpb24gPSBuZXcgUG9pbnQoXG4gICAgICAgICAgYm91bmRSZWN0LnBvc2l0aW9uLnggKyB0aGlzLnBhZGRpbmdUb3BMZWZ0LngsXG4gICAgICAgICAgYm91bmRhcnlQb2ludHNbYm91bmRhcnlQb2ludHMubGVuZ3RoIC0gMV0ueSArIChyZWN0SW5kZXggPiAwID8gdGhpcy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgOiB0aGlzLnBhZGRpbmdUb3BMZWZ0LnkpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgcmVjdC5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnJlbW92YWJsZSAmJiByZWN0LmdldFAzKCkueSA+IGJvdW5kUmVjdC5nZXRQMygpLnkpIHtcbiAgICAgICAgcmVjdC5yZW1vdmFibGUgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGJvdW5kYXJ5UG9pbnRzID0gYWRkUG9pbnRUb0JvdW5kUG9pbnRzKGJvdW5kYXJ5UG9pbnRzLCByZWN0LmdldFAzKCkuYWRkKHRoaXMucGFkZGluZ0JvdHRvbVJpZ2h0KSlcbiAgICB9KVxuICAgIHJldHVybiByZWN0YW5nbGVMaXN0XG4gIH1cblxuICBzb3J0aW5nKG9kbERyYWdnYWJsZXNMaXN0LCBuZXdEcmFnZ2FibGVzLCBpbmRleE9mTmV3cykge1xuICAgIGNvbnN0IG5ld0xpc3QgPSBvZGxEcmFnZ2FibGVzTGlzdC5jb25jYXQoKVxuICAgIGNvbnN0IGxpc3RPbGRQb3NpdGlvbiA9IG9kbERyYWdnYWJsZXNMaXN0Lm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUuZ2V0UG9zaXRpb24oKSlcbiAgICBuZXdEcmFnZ2FibGVzLmZvckVhY2goKG5ld0RyYWdnYWJsZSkgPT4ge1xuICAgICAgbGV0IGluZGV4ID0gaW5kZXhPZk5lYXJlc3RQb2ludChsaXN0T2xkUG9zaXRpb24sIHRoaXMuZ2V0UG9zaXRpb24obmV3RHJhZ2dhYmxlKSwgdGhpcy5yYWRpdXMsIHRoaXMuZ2V0RGlzdGFuY2UpXG4gICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgIGluZGV4ID0gbmV3TGlzdC5sZW5ndGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluZGV4ID0gbmV3TGlzdC5pbmRleE9mKG9kbERyYWdnYWJsZXNMaXN0W2luZGV4XSlcbiAgICAgIH1cbiAgICAgIG5ld0xpc3Quc3BsaWNlKGluZGV4LCAwLCBuZXdEcmFnZ2FibGUpXG4gICAgfSlcbiAgICBuZXdEcmFnZ2FibGVzLmZvckVhY2goKG5ld0RyYWdnYWJsZSkgPT4ge1xuICAgICAgaW5kZXhPZk5ld3MucHVzaChuZXdMaXN0LmluZGV4T2YobmV3RHJhZ2dhYmxlKSlcbiAgICB9KVxuICAgIHJldHVybiBuZXdMaXN0XG4gIH1cbn1cblxuY2xhc3MgRmxvYXRSaWdodFN0cmF0ZWd5IGV4dGVuZHMgRmxvYXRMZWZ0U3RyYXRlZ3kge1xuICBjb25zdHJ1Y3RvcihyZWN0YW5nbGUsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcihyZWN0YW5nbGUsIG9wdGlvbnMpXG5cbiAgICB0aGlzLnBhZGRpbmdUb3BSaWdodCA9IG9wdGlvbnMucGFkZGluZ1RvcFJpZ2h0IHx8IG5ldyBQb2ludCg1LCA1KVxuICAgIHRoaXMucGFkZGluZ0JvdHRvbUxlZnQgPSBvcHRpb25zLnBhZGRpbmdCb3R0b21MZWZ0IHx8IG5ldyBQb2ludCgwLCAwKVxuICAgIHRoaXMueUdhcEJldHdlZW5EcmFnZ2FibGVzID0gb3B0aW9ucy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgfHwgMFxuXG4gICAgdGhpcy5wYWRkaW5nQm90dG9tTmVnTGVmdCA9IG5ldyBQb2ludCgtdGhpcy5wYWRkaW5nQm90dG9tTGVmdC54LCB0aGlzLnBhZGRpbmdCb3R0b21MZWZ0LnkpXG4gIH1cblxuICBwb3NpdGlvbmluZyhyZWN0YW5nbGVMaXN0LCBfaW5kZXhlc09mTmV3cykge1xuICAgIGNvbnN0IGJvdW5kUmVjdCA9IHRoaXMuYm91bmRSZWN0XG4gICAgbGV0IGJvdW5kYXJ5UG9pbnRzID0gW2JvdW5kUmVjdC5nZXRQMigpXVxuXG4gICAgcmVjdGFuZ2xlTGlzdC5mb3JFYWNoKChyZWN0LCByZWN0SW5kZXgpID0+IHtcbiAgICAgIGxldCBwb3NpdGlvbiwgaXNWYWxpZCA9IGZhbHNlXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvdW5kYXJ5UG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHBvc2l0aW9uID0gbmV3IFBvaW50KFxuICAgICAgICAgIGJvdW5kYXJ5UG9pbnRzW2ldLnggLSByZWN0LnNpemUueCAtIHRoaXMucGFkZGluZ1RvcFJpZ2h0LngsXG4gICAgICAgICAgaSA+IDAgPyAoYm91bmRhcnlQb2ludHNbaSAtIDFdLnkgKyB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcykgOiAoYm91bmRSZWN0LnBvc2l0aW9uLnkgKyB0aGlzLnBhZGRpbmdUb3BSaWdodC55KVxuICAgICAgICApXG5cbiAgICAgICAgaXNWYWxpZCA9IChwb3NpdGlvbi54ID4gcmVjdC5wb3NpdGlvbi54KVxuICAgICAgICBpZiAoaXNWYWxpZCkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICBwb3NpdGlvbiA9IG5ldyBQb2ludChcbiAgICAgICAgICBib3VuZFJlY3QuZ2V0UDIoKS54ICAtIHJlY3Quc2l6ZS54IC0gdGhpcy5wYWRkaW5nVG9wUmlnaHQueCxcbiAgICAgICAgICBib3VuZGFyeVBvaW50c1tib3VuZGFyeVBvaW50cy5sZW5ndGggLSAxXS55ICsgKHJlY3RJbmRleCA+IDAgPyB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyA6IHRoaXMucGFkZGluZ1RvcFJpZ2h0LnkpXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIHJlY3QucG9zaXRpb24gPSBwb3NpdGlvblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZW1vdmFibGUgJiYgcmVjdC5nZXRQNCgpLnkgPiBib3VuZFJlY3QuZ2V0UDQoKS55KSB7XG4gICAgICAgIHJlY3QucmVtb3ZhYmxlID0gdHJ1ZVxuICAgICAgfVxuICAgICAgYm91bmRhcnlQb2ludHMgPSBhZGRQb2ludFRvQm91bmRQb2ludHMoYm91bmRhcnlQb2ludHMsIHJlY3QuZ2V0UDQoKS5hZGQodGhpcy5wYWRkaW5nQm90dG9tTmVnTGVmdCksIHRydWUpXG4gICAgfSlcbiAgICByZXR1cm4gcmVjdGFuZ2xlTGlzdFxuICB9XG59XG5cbmV4cG9ydCB7IE5vdENyb3NzaW5nU3RyYXRlZ3ksIEZsb2F0TGVmdFN0cmF0ZWd5LCBGbG9hdFJpZ2h0U3RyYXRlZ3kgfVxuIiwiaW1wb3J0IHJhbmdlIGZyb20gJy4vdXRpbHMvcmFuZ2UuanMnXG5pbXBvcnQgcmVtb3ZlSXRlbSBmcm9tICcuL3V0aWxzL3JlbW92ZS1hcnJheS1pdGVtJ1xuaW1wb3J0IGdldERlZmF1bHRDb250YWluZXIgZnJvbSAnLi91dGlscy9nZXQtZGVmYXVsdC1jb250YWluZXInXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnRFbWl0dGVyJ1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tICcuL2dlb21ldHJ5L3JlY3RhbmdsZSdcbmltcG9ydCB7IHRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3RvcnkgfSBmcm9tICcuL2dlb21ldHJ5L2Rpc3RhbmNlcydcbmltcG9ydCB7IHNjb3BlcywgZGVmYXVsdFNjb3BlIH0gZnJvbSAnLi9zY29wZSdcblxuaW1wb3J0IHsgRmxvYXRMZWZ0U3RyYXRlZ3kgfSBmcm9tICcuL3Bvc2l0aW9uaW5nJ1xuaW1wb3J0IHsgQm91bmRUb0VsZW1lbnQgfSBmcm9tICcuL2JvdW5kaW5nJ1xuXG5jb25zdCBhZGRUb0RlZmF1bHRTY29wZSA9IGZ1bmN0aW9uKHRhcmdldCkge1xuICBkZWZhdWx0U2NvcGUuYWRkVGFyZ2V0KHRhcmdldClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFyZ2V0IGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgZHJhZ2dhYmxlcywgb3B0aW9ucyA9IHt9KSB7XG4gICAgc3VwZXIob3B0aW9ucylcbiAgICBjb25zdCB0YXJnZXQgPSB0aGlzXG5cbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHRpbWVFbmQ6IDIwMCxcbiAgICAgIHRpbWVFeGNhbmdlOiA0MDBcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGhpcy5wb3NpdGlvbmluZ1N0cmF0ZWd5ID0gb3B0aW9ucy5zdHJhdGVneSB8fCBuZXcgRmxvYXRMZWZ0U3RyYXRlZ3koXG4gICAgICB0aGlzLmdldFJlY3RhbmdsZS5iaW5kKHRoaXMpLFxuICAgICAge1xuICAgICAgICByYWRpdXM6IDgwLFxuICAgICAgICBnZXREaXN0YW5jZTogdHJhbnNmb3JtZWRTcGFjZURpc3RhbmNlRmFjdG9yeSh7IHg6IDEsIHk6IDQgfSksXG4gICAgICAgIHJlbW92YWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIClcblxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgICBkcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnRhcmdldHMucHVzaCh0YXJnZXQpKVxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZXNcblxuICAgIFRhcmdldC5lbWl0dGVyLmVtaXQoJ3RhcmdldDpjcmVhdGUnLCB0aGlzKVxuXG4gICAgdGhpcy5zdGFydEJvdW5kaW5nKClcbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgc3RhcnRCb3VuZGluZygpIHtcbiAgICB0aGlzLmJvdW5kID0gdGhpcy5vcHRpb25zLmJvdW5kIHx8IEJvdW5kVG9FbGVtZW50LmJvdW5kaW5nKHRoaXMuZWxlbWVudClcbiAgfVxuXG4gIHBvc2l0aW9uaW5nIChkcmFnZ2FibGVzLCBpbmRleGVzT2ZOZXcpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbmluZ1N0cmF0ZWd5LnBvc2l0aW9uaW5nKGRyYWdnYWJsZXMsIGluZGV4ZXNPZk5ldylcbiAgfVxuXG4gIHNvcnRpbmcgKG9sZERyYWdnYWJsZXMsIG5ld0RyYWdnYWJsZXMsIGluZGV4T2ZOZXdzKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25pbmdTdHJhdGVneS5zb3J0aW5nKG9sZERyYWdnYWJsZXMsIG5ld0RyYWdnYWJsZXMsIGluZGV4T2ZOZXdzKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBsZXQgcmVjdGFuZ2xlcywgaW5kZXhlc09mTmV3XG5cbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcyA9IHRoaXMuZHJhZ2dhYmxlcy5maWx0ZXIoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgbGV0IGVsZW1lbnQgPSBkcmFnZ2FibGUuZWxlbWVudC5wYXJlbnROb2RlXG4gICAgICB3aGlsZSAoZWxlbWVudCkge1xuICAgICAgICBpZiAoZWxlbWVudCA9PT0gdGhpcy5lbGVtZW50KSB7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlXG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9KVxuXG4gICAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmxlbmd0aCkge1xuICAgICAgaW5kZXhlc09mTmV3ID0gcmFuZ2UodGhpcy5pbm5lckRyYWdnYWJsZXMubGVuZ3RoKVxuICAgICAgcmVjdGFuZ2xlcyA9IHRoaXMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgICAgfSksIGluZGV4ZXNPZk5ldylcbiAgICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgaW5kZXhlc09mTmV3KVxuICAgICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB0aGlzLmVtaXQoJ3RhcmdldDphZGQnLCBkcmFnZ2FibGUpKVxuICAgIH1cbiAgfVxuXG4gIGdldFJlY3RhbmdsZSgpIHtcbiAgICByZXR1cm4gUmVjdGFuZ2xlLmZyb21FbGVtZW50KFxuICAgICAgdGhpcy5lbGVtZW50LFxuICAgICAgdGhpcy5jb250YWluZXIsXG4gICAgICB0aGlzLm9wdGlvbnMuaXNDb250ZW50Qm94U2l6ZSxcbiAgICAgIHRydWVcbiAgICApXG4gIH1cblxuICBjYXRjaERyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmNhdGNoRHJhZ2dhYmxlKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmNhdGNoRHJhZ2dhYmxlKHRoaXMsIGRyYWdnYWJsZSlcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGFyZ2V0UmVjdGFuZ2xlID0gdGhpcy5nZXRSZWN0YW5nbGUoKVxuICAgICAgY29uc3QgZHJhZ2dhYmxlU3F1YXJlID0gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpLmdldFNxdWFyZSgpXG5cbiAgICAgIHJldHVybiBkcmFnZ2FibGVTcXVhcmUgPCB0YXJnZXRSZWN0YW5nbGUuZ2V0U3F1YXJlKClcbiAgICAgICAgICAgICAgJiYgdGFyZ2V0UmVjdGFuZ2xlLmluY2x1ZGVQb2ludChkcmFnZ2FibGUuZ2V0Q2VudGVyKCkpXG4gICAgfVxuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UmVjdGFuZ2xlKCkucG9zaXRpb25cbiAgfVxuXG4gIGdldFNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UmVjdGFuZ2xlKCkuc2l6ZVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICBzY29wZXMuZm9yRWFjaCgoc2NvcGUpID0+IHJlbW92ZUl0ZW0oc2NvcGUudGFyZ2V0cywgdGhpcykpXG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgfSksIFtdKVxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgW10sIDApXG4gIH1cblxuICBvbkVuZChkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBuZXdEcmFnZ2FibGVzSW5kZXggPSBbXVxuXG4gICAgaWYgKHRoaXMuZ2V0UmVjdGFuZ2xlKCkuaW5jbHVkZVBvaW50KGRyYWdnYWJsZS5nZXRDZW50ZXIoKSkpIHtcbiAgICAgIGRyYWdnYWJsZS5wb3NpdGlvbiA9IHRoaXMuYm91bmQoZHJhZ2dhYmxlLnBvc2l0aW9uLCBkcmFnZ2FibGUuZ2V0U2l6ZSgpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICB0aGlzLmVtaXQoJ3RhcmdldDpiZWZvcmVBZGQnLCBkcmFnZ2FibGUpXG5cbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcyA9IHRoaXMuc29ydGluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcywgW2RyYWdnYWJsZV0sIG5ld0RyYWdnYWJsZXNJbmRleClcbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBuZXdEcmFnZ2FibGVzSW5kZXgpXG5cbiAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIG5ld0RyYWdnYWJsZXNJbmRleClcbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMSkge1xuICAgICAgdGhpcy5hZGRSZW1vdmVPbk1vdmUoZHJhZ2dhYmxlKVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgaW5kZXhlc09mTmV3LCB0aW1lKSB7XG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuc2xpY2UoMCkuZm9yRWFjaCgoZHJhZ2dhYmxlLCBpKSA9PiB7XG4gICAgICBjb25zdCByZWN0ID0gcmVjdGFuZ2xlc1tpXSxcbiAgICAgICAgdGltZUVuZCA9IHRpbWUgfHwgdGltZSA9PT0gMCA/IHRpbWUgOiBpbmRleGVzT2ZOZXcuaW5kZXhPZihpKSAhPT0gLTEgPyB0aGlzLm9wdGlvbnMudGltZUVuZCA6IHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZVxuXG4gICAgICBpZiAocmVjdC5yZW1vdmFibGUpIHtcbiAgICAgICAgZHJhZ2dhYmxlLm1vdmUoZHJhZ2dhYmxlLmluaXRpYWxQb3NpdGlvbiwgdGltZUVuZCwgdHJ1ZSwgdHJ1ZSlcbiAgICAgICAgcmVtb3ZlSXRlbSh0aGlzLmlubmVyRHJhZ2dhYmxlcywgZHJhZ2dhYmxlKVxuICAgICAgICB0aGlzLmVtaXQoJ3RhcmdldDpyZW1vdmUnLCBkcmFnZ2FibGUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkcmFnZ2FibGUubW92ZShyZWN0LnBvc2l0aW9uLCB0aW1lRW5kLCB0cnVlLCB0cnVlKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBhZGQoZHJhZ2dhYmxlLCB0aW1lKSB7XG4gICAgY29uc3QgbmV3RHJhZ2dhYmxlc0luZGV4ID0gdGhpcy5pbm5lckRyYWdnYWJsZXMubGVuZ3RoXG5cbiAgICB0aGlzLmVtaXQoJ3RhcmdldDpiZWZvcmVBZGQnLCBkcmFnZ2FibGUpXG5cbiAgICB0aGlzLnB1c2hJbm5lckRyYWdnYWJsZShkcmFnZ2FibGUpXG4gICAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgbmV3RHJhZ2dhYmxlc0luZGV4LCBkcmFnZ2FibGUpXG5cbiAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIFtuZXdEcmFnZ2FibGVzSW5kZXhdLCB0aW1lIHx8IDApXG4gICAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTEpIHtcbiAgICAgIHRoaXMuYWRkUmVtb3ZlT25Nb3ZlKGRyYWdnYWJsZSlcbiAgICB9XG4gIH1cblxuICBwdXNoSW5uZXJEcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKT09PS0xKSB7XG4gICAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5wdXNoKGRyYWdnYWJsZSlcbiAgICB9XG4gIH1cblxuICBhZGRSZW1vdmVPbk1vdmUoZHJhZ2dhYmxlKSB7XG4gICAgZHJhZ2dhYmxlLm9uKCdkcmFnOm1vdmUnLCB0aGlzLnJlbW92ZUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICB0aGlzLnJlbW92ZShkcmFnZ2FibGUpXG4gICAgfSlcblxuICAgIHRoaXMuZW1pdCgndGFyZ2V0OmFkZCcsIGRyYWdnYWJsZSlcbiAgfVxuXG4gIHJlbW92ZShkcmFnZ2FibGUpIHtcbiAgICBkcmFnZ2FibGUudW5zdWJzY3JpYmUoJ2RyYWc6bW92ZScsIHRoaXMucmVtb3ZlSGFuZGxlcilcblxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpXG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuc3BsaWNlKGluZGV4LCAxKVxuXG4gICAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgW10pXG5cbiAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIFtdKVxuICAgIHRoaXMuZW1pdCgndGFyZ2V0OnJlbW92ZScsIGRyYWdnYWJsZSlcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLm1vdmUoZHJhZ2dhYmxlLmluaXRpYWxQb3NpdGlvbiwgMCwgdHJ1ZSwgdHJ1ZSlcbiAgICAgIHRoaXMuZW1pdCgndGFyZ2V0OnJlbW92ZScsIGRyYWdnYWJsZSlcbiAgICB9KVxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzID0gW11cbiAgfVxuXG4gIGdldFNvcnRlZERyYWdnYWJsZXMoKSB7XG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuc2xpY2UoKVxuICB9XG5cbiAgZ2V0IGNvbnRhaW5lcigpIHtcbiAgICByZXR1cm4gKHRoaXMuX2NvbnRhaW5lciA9IHRoaXMuX2NvbnRhaW5lciB8fCB0aGlzLm9wdGlvbnMuY29udGFpbmVyIHx8IHRoaXMub3B0aW9ucy5wYXJlbnQgfHwgZ2V0RGVmYXVsdENvbnRhaW5lcih0aGlzLmVsZW1lbnQpKVxuICB9XG59XG5cblRhcmdldC5lbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcigpXG5UYXJnZXQuZW1pdHRlci5vbigndGFyZ2V0OmNyZWF0ZScsIGFkZFRvRGVmYXVsdFNjb3BlKVxuIiwiaW1wb3J0IHJlbW92ZUl0ZW0gZnJvbSAnLi91dGlscy9yZW1vdmUtYXJyYXktaXRlbSdcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudEVtaXR0ZXInXG5pbXBvcnQgRHJhZ2dhYmxlIGZyb20gJy4vZHJhZ2dhYmxlJ1xuaW1wb3J0IFRhcmdldCBmcm9tICcuL3RhcmdldCdcblxuY29uc3Qgc2NvcGVzID0gW11cblxuY2xhc3MgU2NvcGUgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvcihkcmFnZ2FibGVzLCB0YXJnZXRzLCBvcHRpb25zPXt9KSB7XG4gICAgc3VwZXIob3B0aW9ucylcbiAgICBzY29wZXMuZm9yRWFjaCgoc2NvcGUpID0+IHtcbiAgICAgIGlmIChkcmFnZ2FibGVzKSB7XG4gICAgICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICAgICAgcmVtb3ZlSXRlbShzY29wZS5kcmFnZ2FibGVzLCBkcmFnZ2FibGUpXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIGlmICh0YXJnZXRzKSB7XG4gICAgICAgIHRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB7XG4gICAgICAgICAgcmVtb3ZlSXRlbShzY29wZS50YXJnZXRzLCB0YXJnZXQpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZXMgfHwgW11cbiAgICB0aGlzLnRhcmdldHMgPSB0YXJnZXRzIHx8IFtdXG4gICAgc2NvcGVzLnB1c2godGhpcylcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICB0aW1lRW5kOiAob3B0aW9ucy50aW1lRW5kKSB8fCA0MDBcbiAgICB9XG5cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUuZHJhZ0VuZEFjdGlvbiA9ICgpID0+IHRoaXMub25FbmQoZHJhZ2dhYmxlKVxuICAgIH0pXG4gIH1cblxuICBhZGREcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxuICAgIGRyYWdnYWJsZS5kcmFnRW5kQWN0aW9uID0gKCkgPT4gdGhpcy5vbkVuZChkcmFnZ2FibGUpXG4gIH1cblxuICBhZGRUYXJnZXQodGFyZ2V0KSB7XG4gICAgdGhpcy50YXJnZXRzLnB1c2godGFyZ2V0KVxuICB9XG5cbiAgb25FbmQoZHJhZ2dhYmxlKSB7XG4gICAgY29uc3Qgc2hvdFRhcmdldHMgPSB0aGlzLnRhcmdldHMuZmlsdGVyKCh0YXJnZXQpID0+IHtcbiAgICAgIHJldHVybiB0YXJnZXQuZHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkgIT09IC0xXG4gICAgfSkuZmlsdGVyKCh0YXJnZXQpID0+IHtcbiAgICAgIHJldHVybiB0YXJnZXQuY2F0Y2hEcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICAgIH0pLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIHJldHVybiBhLmdldFJlY3RhbmdsZSgpLmdldFNxdWFyZSgpIC0gYi5nZXRSZWN0YW5nbGUoKS5nZXRTcXVhcmUoKVxuICAgIH0pXG5cbiAgICBpZiAoc2hvdFRhcmdldHMubGVuZ3RoKSB7XG4gICAgICBzaG90VGFyZ2V0c1swXS5vbkVuZChkcmFnZ2FibGUpXG4gICAgfSBlbHNlIGlmIChkcmFnZ2FibGUudGFyZ2V0cy5sZW5ndGgpIHtcbiAgICAgIGRyYWdnYWJsZS5waW5Qb3NpdGlvbihkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uLCB0aGlzLm9wdGlvbnMudGltZUVuZClcbiAgICB9XG5cbiAgICB0aGlzLmVtaXQoJ3Njb3BlOmNoYW5nZScpXG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLnRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB0YXJnZXQucmVzZXQoKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnJlZnJlc2goKSlcbiAgICB0aGlzLnRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB0YXJnZXQucmVmcmVzaCgpKVxuICB9XG5cbiAgZ2V0IHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXRzLm1hcCgodGFyZ2V0KSA9PiB7XG4gICAgICByZXR1cm4gdGFyZ2V0LmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4gdGhpcy5kcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSlcbiAgICB9KVxuICB9XG5cbiAgc2V0IHBvc2l0aW9ucyhwb3NpdGlvbnMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gJ3dyb25nIGFycmF5IGxlbmd0aCdcbiAgICBpZiAocG9zaXRpb25zLmxlbmd0aCA9PT0gdGhpcy50YXJnZXRzLmxlbmd0aCkge1xuICAgICAgdGhpcy50YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4gdGFyZ2V0LnJlc2V0KCkpXG5cbiAgICAgIHBvc2l0aW9ucy5mb3JFYWNoKCh0YXJnZXRJbmRleGVzLCBpKSA9PiB7XG4gICAgICAgIHRhcmdldEluZGV4ZXMuZm9yRWFjaCgoaW5kZXgpID0+IHtcbiAgICAgICAgICB0aGlzLnRhcmdldHNbaV0uYWRkKHRoaXMuZHJhZ2dhYmxlc1tpbmRleF0pXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBtZXNzYWdlXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IGRlZmF1bHRTY29wZSA9IG5ldyBTY29wZSgpXG5cbmZ1bmN0aW9uIHNjb3BlKGZuKSB7XG4gIGNvbnN0IGN1cnJlbnRTY29wZSA9IG5ldyBTY29wZSgpXG5cbiAgY29uc3QgYWRkRHJhZ2dhYmxlVG9TY29wZSA9IGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICAgIGN1cnJlbnRTY29wZS5hZGREcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICAgIERyYWdnYWJsZS5lbWl0dGVyLmludGVycnVwdCgpXG4gIH1cblxuICBjb25zdCBhZGRUYXJnZXRUb1Njb3BlID0gZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgY3VycmVudFNjb3BlLmFkZFRhcmdldCh0YXJnZXQpXG4gICAgRHJhZ2dhYmxlLmVtaXR0ZXIuaW50ZXJydXB0KClcbiAgfVxuXG4gIERyYWdnYWJsZS5lbWl0dGVyLnByZXBlbmRPbignZHJhZ2dhYmxlOmNyZWF0ZScsIGFkZERyYWdnYWJsZVRvU2NvcGUpXG4gIFRhcmdldC5lbWl0dGVyLnByZXBlbmRPbigndGFyZ2V0OmNyZWF0ZScsIGFkZFRhcmdldFRvU2NvcGUpXG4gIGZuLmNhbGwoKVxuICBEcmFnZ2FibGUuZW1pdHRlci51bnN1YnNjcmliZSgnZHJhZ2dhYmxlOmNyZWF0ZScsIGFkZERyYWdnYWJsZVRvU2NvcGUpXG4gIFRhcmdldC5lbWl0dGVyLnVuc3Vic2NyaWJlKCd0YXJnZXQ6Y3JlYXRlJywgYWRkVGFyZ2V0VG9TY29wZSlcbiAgcmV0dXJuIGN1cnJlbnRTY29wZVxufVxuXG5leHBvcnQgeyBzY29wZXMsIGRlZmF1bHRTY29wZSwgU2NvcGUsIHNjb3BlIH1cbiIsImZ1bmN0aW9uIGNoZWNrU3VwcG9ydFBhc3NpdmVFdmVudHMoKSB7XG4gIGxldCBwYXNzaXZlU3VwcG9ydGVkID0gZmFsc2VcblxuICB0cnkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdwYXNzaXZlJywge1xuICAgICAgZ2V0KCkge1xuICAgICAgICByZXR1cm4gKHBhc3NpdmVTdXBwb3J0ZWQgPSB0cnVlKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndGVzdCcsIG9wdGlvbnMsIG9wdGlvbnMpXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Rlc3QnLCBvcHRpb25zLCBvcHRpb25zKVxuICB9IGNhdGNoIChfZXJyKSB7XG4gICAgcGFzc2l2ZVN1cHBvcnRlZCA9IGZhbHNlXG4gIH1cblxuICByZXR1cm4gcGFzc2l2ZVN1cHBvcnRlZFxufVxuXG5leHBvcnQgY29uc3QgaXNTdXBwb3J0UGFzc2l2ZUV2ZW50cyA9IGNoZWNrU3VwcG9ydFBhc3NpdmVFdmVudHMoKVxuXG5mdW5jdGlvbiBldmVudE9wdGlvbnMob3B0aW9ucywgZmFsbGJhY2sgPSBmYWxzZSkge1xuICByZXR1cm4gaXNTdXBwb3J0UGFzc2l2ZUV2ZW50cyA/IG9wdGlvbnMgOiBmYWxsYmFja1xufVxuXG5leHBvcnQgeyBldmVudE9wdGlvbnMgfVxuXG5leHBvcnQgZGVmYXVsdCBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzXG4iLCJpbXBvcnQgeyBhZGRDbGFzcywgcmVtb3ZlQ2xhc3MgfSBmcm9tICcuL3V0aWxzL2NsYXNzZXMnXG5pbXBvcnQgZ2V0RGVmYXVsdENvbnRhaW5lciBmcm9tICcuL3V0aWxzL2dldC1kZWZhdWx0LWNvbnRhaW5lcidcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudEVtaXR0ZXInXG5pbXBvcnQgZ2V0U3R5bGVQcm9wZXJ0eSBmcm9tICdkZXNhbmRyby1nZXQtc3R5bGUtcHJvcGVydHknXG5pbXBvcnQgeyBCb3VuZFRvRWxlbWVudCB9IGZyb20gJy4vYm91bmRpbmcnXG5pbXBvcnQgUG9pbnQgZnJvbSAnLi9nZW9tZXRyeS9wb2ludCdcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSAnLi9nZW9tZXRyeS9yZWN0YW5nbGUnXG5pbXBvcnQgeyBkZWZhdWx0U2NvcGUgfSBmcm9tICcuL3Njb3BlJ1xuaW1wb3J0IGlzU3VwcG9ydFBhc3NpdmVFdmVudHMgZnJvbSAnLi91dGlscy9pcy1zdXBwb3J0LXBhc3NpdmUtZXZlbnRzJ1xuXG5jb25zdCBpc1RvdWNoID0gJ29udG91Y2hzdGFydCcgaW4gd2luZG93XG5jb25zdCBtb3VzZUV2ZW50cyA9IHtcbiAgc3RhcnQ6ICdtb3VzZWRvd24nLFxuICBtb3ZlOiAnbW91c2Vtb3ZlJyxcbiAgZW5kOiAnbW91c2V1cCdcbn1cbmNvbnN0IHRvdWNoRXZlbnRzID0ge1xuICBzdGFydDogJ3RvdWNoc3RhcnQnLFxuICBtb3ZlOiAndG91Y2htb3ZlJyxcbiAgZW5kOiAndG91Y2hlbmQnXG59XG5jb25zdCBkcmFnZ2FibGVzID0gW11cbmNvbnN0IHRyYW5zZm9ybVByb3BlcnR5ID0gZ2V0U3R5bGVQcm9wZXJ0eSgndHJhbnNmb3JtJylcbmNvbnN0IHRyYW5zaXRpb25Qcm9wZXJ0eSA9IGdldFN0eWxlUHJvcGVydHkoJ3RyYW5zaXRpb24nKVxuXG5mdW5jdGlvbiBnZXRUb3VjaEJ5SUQoZWxlbWVudCwgdG91Y2hJZCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnQuY2hhbmdlZFRvdWNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZWxlbWVudC5jaGFuZ2VkVG91Y2hlc1tpXS5pZGVudGlmaWVyID09PSB0b3VjaElkKSB7XG4gICAgICByZXR1cm4gZWxlbWVudC5jaGFuZ2VkVG91Y2hlc1tpXVxuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cblxuZnVuY3Rpb24gcHJldmVudERvdWJsZUluaXQoZHJhZ2dhYmxlKSB7XG4gIGNvbnN0IG1lc3NhZ2UgPSBcImZvciB0aGlzIGVsZW1lbnQgRHJhZ2VlLkRyYWdnYWJsZSBpcyBhbHJlYWR5IGV4aXN0LCBkb24ndCBjcmVhdGUgaXQgdHdpY2UgXCJcbiAgaWYgKGRyYWdnYWJsZXMuc29tZSgoZXhpc3RpbmcpID0+IGRyYWdnYWJsZS5lbGVtZW50ID09PSBleGlzdGluZy5lbGVtZW50KSkge1xuICAgIHRocm93IG1lc3NhZ2VcbiAgfVxuICBkcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxufVxuXG5mdW5jdGlvbiBhZGRUb0RlZmF1bHRTY29wZShkcmFnZ2FibGUpIHtcbiAgZGVmYXVsdFNjb3BlLmFkZERyYWdnYWJsZShkcmFnZ2FibGUpXG59XG5cbmZ1bmN0aW9uIGNvcHlTdHlsZXMoc291cmNlLCBkZXN0aW5hdGlvbikge1xuICBjb25zdCBjcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHNvdXJjZSlcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qga2V5ID0gY3NbaV1cbiAgICBpZiAoKGtleS5pbmRleE9mKCd0cmFuc2l0aW9uJykgPCAwKSAmJiAoa2V5LmluZGV4T2YoJ3RyYW5zZm9ybScpIDwgMCkpIHtcbiAgICAgIGRlc3RpbmF0aW9uLnN0eWxlW2tleV0gPSBjc1trZXldXG4gICAgfVxuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzb3VyY2UuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICBjb3B5U3R5bGVzKHNvdXJjZS5jaGlsZHJlbltpXSwgZGVzdGluYXRpb24uY2hpbGRyZW5baV0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhZ2dhYmxlIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgb3B0aW9ucz17fSkge1xuICAgIHN1cGVyKG9wdGlvbnMpXG4gICAgdGhpcy50YXJnZXRzID0gW11cbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIHByZXZlbnREb3VibGVJbml0KHRoaXMpXG4gICAgRHJhZ2dhYmxlLmVtaXR0ZXIuZW1pdCgnZHJhZ2dhYmxlOmNyZWF0ZScsIHRoaXMpXG4gICAgdGhpcy5fZW5hYmxlID0gdHJ1ZVxuICAgIHRoaXMuc3RhcnRCb3VuZGluZygpXG4gICAgdGhpcy5zdGFydFBvc2l0aW9uaW5nKClcbiAgICB0aGlzLnN0YXJ0TGlzdGVuaW5nKClcbiAgfVxuXG4gIHN0YXJ0Qm91bmRpbmcoKSB7XG4gICAgdGhpcy5ib3VuZCA9IHRoaXMub3B0aW9ucy5ib3VuZCB8fCBCb3VuZFRvRWxlbWVudC5ib3VuZGluZyh0aGlzLmNvbnRhaW5lciwgdGhpcy5jb250YWluZXIpXG4gIH1cblxuICBzdGFydFBvc2l0aW9uaW5nKCkge1xuICAgIHRoaXMuX3NldERlZmF1bHRUcmFuc2l0aW9uKClcbiAgICB0aGlzLm9mZnNldCA9IFBvaW50LmVsZW1lbnRPZmZzZXQodGhpcy5lbGVtZW50LCB0aGlzLmNvbnRhaW5lciwgdHJ1ZSlcbiAgICB0aGlzLnBpbm5lZFBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICB0aGlzLmluaXRpYWxQb3NpdGlvbiA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbiB8fCB0aGlzLm9mZnNldFxuXG4gICAgdGhpcy5waW5Qb3NpdGlvbih0aGlzLmluaXRpYWxQb3NpdGlvbilcblxuICAgIGlmICh0aGlzLmJvdW5kLnJlZnJlc2gpIHtcbiAgICAgIHRoaXMuYm91bmQucmVmcmVzaCgpXG4gICAgfVxuICB9XG5cbiAgc3RhcnRMaXN0ZW5pbmcoKSB7XG4gICAgdGhpcy5fZHJhZ1N0YXJ0ID0gKGV2ZW50KSA9PiB0aGlzLmRyYWdTdGFydChldmVudClcbiAgICB0aGlzLl9kcmFnTW92ZSA9IChldmVudCkgPT4gdGhpcy5kcmFnTW92ZShldmVudClcbiAgICB0aGlzLl9kcmFnRW5kID0gKGV2ZW50KSA9PiB0aGlzLmRyYWdFbmQoZXZlbnQpXG4gICAgdGhpcy5fbmF0aXZlRHJhZ1N0YXJ0ID0gKGV2ZW50KSA9PiB0aGlzLm5hdGl2ZURyYWdTdGFydChldmVudClcbiAgICB0aGlzLl9uYXRpdmVEcmFnT3ZlciA9IChldmVudCkgPT4gdGhpcy5uYXRpdmVEcmFnT3ZlcihldmVudClcbiAgICB0aGlzLl9uYXRpdmVEcmFnRW5kID0gKGV2ZW50KSA9PiB0aGlzLm5hdGl2ZURyYWdFbmQoZXZlbnQpXG4gICAgdGhpcy5fbmF0aXZlRHJvcCA9IChldmVudCkgPT4gdGhpcy5uYXRpdmVEcm9wKGV2ZW50KVxuICAgIHRoaXMuX3Njcm9sbCA9IChldmVudCkgPT4gdGhpcy5vblNjcm9sbChldmVudClcblxuICAgIHRoaXMuaGFuZGxlci5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQsIGlzU3VwcG9ydFBhc3NpdmVFdmVudHMgPyB7IHBhc3NpdmU6IGZhbHNlIH0gOiBmYWxzZSlcbiAgICB0aGlzLmhhbmRsZXIuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0LCBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzID8geyBwYXNzaXZlOiBmYWxzZSB9IDogZmFsc2UpXG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIHRoaXMuX25hdGl2ZURyYWdTdGFydClcbiAgfVxuXG4gIGdldFNpemUoKSB7XG4gICAgcmV0dXJuIFBvaW50LmVsZW1lbnRTaXplKHRoaXMuZWxlbWVudCwgdGhpcy5vcHRpb25zLmlzQ29udGVudEJveFNpemUpXG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5vZmZzZXQuYWRkKHRoaXMuX3RyYW5zZm9ybVBvc2l0aW9uIHx8IG5ldyBQb2ludCgwLCAwKSlcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvblxuICB9XG5cbiAgZ2V0Q2VudGVyKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLmdldFNpemUoKS5tdWx0KDAuNSkpXG4gIH1cblxuICBfc2V0RGVmYXVsdFRyYW5zaXRpb24gKCkge1xuICAgIHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5lbGVtZW50KVt0cmFuc2l0aW9uUHJvcGVydHldXG4gIH1cblxuICBfc2V0VHJhbnNpdGlvbih0aW1lKSB7XG4gICAgbGV0IHRyYW5zaXRpb24gPSB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNpdGlvblByb3BlcnR5XVxuICAgIGNvbnN0IHRyYW5zaXRpb25Dc3MgPSBgdHJhbnNmb3JtICR7dGltZX1tc2BcblxuICAgIGlmICghL3RyYW5zZm9ybSBcXGQqbT9zLy50ZXN0KHRyYW5zaXRpb24pKSB7XG4gICAgICBpZiAodHJhbnNpdGlvbikge1xuICAgICAgICB0cmFuc2l0aW9uICs9IGAsICR7dHJhbnNpdGlvbkNzc31gXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cmFuc2l0aW9uID0gdHJhbnNpdGlvbkNzc1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0cmFuc2l0aW9uID0gdHJhbnNpdGlvbi5yZXBsYWNlKC90cmFuc2Zvcm0gXFxkKm0/cy8sIHRyYW5zaXRpb25Dc3MpXG4gICAgfVxuXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV0gPSB0cmFuc2l0aW9uXG4gIH1cblxuICBfc2V0VHJhbnNsYXRlKHBvaW50KSB7XG4gICAgdGhpcy5fdHJhbnNmb3JtUG9zaXRpb24gPSBwb2ludFxuICAgIGNvbnN0IHRyYW5zbGF0ZUNzcyA9IGB0cmFuc2xhdGUzZCgke3BvaW50Lnh9cHgsICR7cG9pbnQueX1weCwgMHB4KWBcblxuICAgIGxldCB0cmFuc2Zvcm0gPSB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcGVydHldXG5cbiAgICBpZiAodGhpcy5zaG91bGRSZW1vdmVaZXJvVHJhbnNsYXRlICYmIHBvaW50LnggPT09IDAgJiYgcG9pbnQueSA9PT0gMCkge1xuICAgICAgdHJhbnNmb3JtID0gdHJhbnNmb3JtLnJlcGxhY2UoL3RyYW5zbGF0ZTNkXFwoW14pXStcXCkvLCAnJylcbiAgICB9IGVsc2UgaWYgKCEvdHJhbnNsYXRlM2RcXChbXildK1xcKS8udGVzdCh0cmFuc2Zvcm0pKSB7XG4gICAgICBpZiAodHJhbnNmb3JtKSB7XG4gICAgICAgIHRyYW5zZm9ybSArPSAnICdcbiAgICAgIH1cbiAgICAgIHRyYW5zZm9ybSArPSB0cmFuc2xhdGVDc3NcbiAgICB9IGVsc2Uge1xuICAgICAgdHJhbnNmb3JtID0gdHJhbnNmb3JtLnJlcGxhY2UoL3RyYW5zbGF0ZTNkXFwoW14pXStcXCkvLCB0cmFuc2xhdGVDc3MpXG4gICAgfVxuXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BlcnR5XSA9IHRyYW5zZm9ybVxuICB9XG5cbiAgbW92ZShwb2ludCwgdGltZT0wLCBpc1NpbGVudD1mYWxzZSkge1xuICAgIHBvaW50ID0gcG9pbnQuY2xvbmUoKVxuXG4gICAgdGhpcy5kZXRlcm1pbmVEaXJlY3Rpb24ocG9pbnQpXG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvaW50XG5cbiAgICB0aGlzLl9zZXRUcmFuc2l0aW9uKHRpbWUpXG4gICAgdGhpcy5fc2V0VHJhbnNsYXRlKHBvaW50LnN1Yih0aGlzLm9mZnNldCkpXG5cbiAgICBpZiAoIWlzU2lsZW50KSB7XG4gICAgICB0aGlzLmVtaXQoJ2RyYWc6bW92ZScpXG4gICAgfVxuICB9XG5cbiAgcGluUG9zaXRpb24ocG9pbnQsIHRpbWU9MCwgc2lsZW50PXRydWUpIHtcbiAgICB0aGlzLnBpbm5lZFBvc2l0aW9uID0gcG9pbnQuY2xvbmUoKVxuICAgIHRoaXMubW92ZSh0aGlzLnBpbm5lZFBvc2l0aW9uLCB0aW1lLCBzaWxlbnQpXG4gIH1cblxuICByZXNldFBvc2l0aW9uVG9Jbml0aWFsICgpIHtcbiAgICB0aGlzLnBpblBvc2l0aW9uKHRoaXMuaW5pdGlhbFBvc2l0aW9uKVxuICB9XG5cbiAgcmVmcmVzaFBvc2l0aW9uICgpIHtcbiAgICB0aGlzLnNldFBvc2l0aW9uKHRoaXMuZ2V0UG9zaXRpb24oKSlcbiAgfVxuXG4gIHNldFBvc2l0aW9uKHBvaW50KSB7XG4gICAgcG9pbnQgPSBwb2ludC5jbG9uZSgpXG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvaW50XG4gICAgdGhpcy5fc2V0VHJhbnNpdGlvbigwKVxuICAgIHRoaXMuX3NldFRyYW5zbGF0ZShwb2ludC5zdWIodGhpcy5vZmZzZXQpKVxuICB9XG5cbiAgZGV0ZXJtaW5lRGlyZWN0aW9uKHBvaW50KSB7XG4gICAgdGhpcy5sZWZ0RGlyZWN0aW9uID0gKHRoaXMucG9zaXRpb24ueCA8IHBvaW50LngpXG4gICAgdGhpcy5yaWdodERpcmVjdGlvbiA9ICh0aGlzLnBvc2l0aW9uLnggPiBwb2ludC54KVxuICAgIHRoaXMudXBEaXJlY3Rpb24gPSAodGhpcy5wb3NpdGlvbi55ID4gcG9pbnQueSlcbiAgICB0aGlzLmRvd25EaXJlY3Rpb24gPSAodGhpcy5wb3NpdGlvbi55IDwgcG9pbnQueSlcbiAgfVxuXG4gIGRyYWdTdGFydChldmVudCkge1xuICAgIHRoaXMuY3VycmVudEV2ZW50ID0gZXZlbnRcbiAgICBpZiAoIXRoaXMuX2VuYWJsZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaXNUb3VjaEV2ZW50ID0gKGlzVG91Y2ggJiYgKGV2ZW50IGluc3RhbmNlb2Ygd2luZG93LlRvdWNoRXZlbnQpKVxuXG4gICAgdGhpcy50b3VjaFBvaW50ID0gdGhpcy5fc3RhcnRUb3VjaFBvaW50ID0gbmV3IFBvaW50KFxuICAgICAgaXNUb3VjaEV2ZW50ID8gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVggOiBldmVudC5jbGllbnRYLFxuICAgICAgaXNUb3VjaEV2ZW50ID8gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVkgOiBldmVudC5jbGllbnRZXG4gICAgKVxuXG4gICAgdGhpcy5fc3RhcnRQb3NpdGlvbiA9IHRoaXMuZ2V0UG9zaXRpb24oKVxuICAgIGlmIChpc1RvdWNoRXZlbnQpIHtcbiAgICAgIHRoaXMuX3RvdWNoSWQgPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5pZGVudGlmaWVyXG4gICAgfVxuXG4gICAgdGhpcy5fc3RhcnRTY3JvbGxQb2ludCA9IG5ldyBQb2ludCh3aW5kb3cuc2Nyb2xsWCwgd2luZG93LnNjcm9sbFkpXG5cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGlmIChldmVudC50YXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElucHV0RWxlbWVudCB8fFxuICAgICAgICAgIGV2ZW50LnRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSW5wdXRFbGVtZW50KSB7XG4gICAgICBldmVudC50YXJnZXQuZm9jdXMoKVxuICAgIH1cblxuICAgIGlmICghKHRoaXMubmF0aXZlRHJhZ0FuZERyb3AgfHxcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSW5wdXRFbGVtZW50IHx8XG4gICAgICAgICAgICBldmVudC50YXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElucHV0RWxlbWVudCkpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB9XG5cbiAgICBpZiAodGhpcy5uYXRpdmVEcmFnQW5kRHJvcCkge1xuICAgICAgY29uc3QgaXNTYWZhcmkgPSAvdmVyc2lvblxcLyhcXGQrKS4rP3NhZmFyaS9pLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpXG4gICAgICBpZiAoKGlzVG91Y2hFdmVudCAmJiB0aGlzLmVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcE9uVG91Y2gpIHx8XG4gICAgICAgICAgICAgaXNTYWZhcmkgfHxcbiAgICAgICAgICAgICB0aGlzLmVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcEZvckFsbCkge1xuICAgICAgICB0aGlzLmVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcChldmVudClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5kcmFnZ2FibGUgPSB0cnVlXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9uYXRpdmVEcmFnRW5kLCBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzID8geyBwYXNzaXZlOiBmYWxzZSB9IDogZmFsc2UpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUsIGlzU3VwcG9ydFBhc3NpdmVFdmVudHMgPyB7IHBhc3NpdmU6IGZhbHNlIH0gOiBmYWxzZSlcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUsIGlzU3VwcG9ydFBhc3NpdmVFdmVudHMgPyB7IHBhc3NpdmU6IGZhbHNlIH0gOiBmYWxzZSlcblxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQsIGlzU3VwcG9ydFBhc3NpdmVFdmVudHMgPyB7IHBhc3NpdmU6IGZhbHNlIH0gOiBmYWxzZSlcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kLCBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzID8geyBwYXNzaXZlOiBmYWxzZSB9IDogZmFsc2UpXG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX3Njcm9sbClcblxuICAgIHRoaXMuaXNEcmFnZ2luZyA9IHRydWVcbiAgICB0aGlzLmVtaXQoJ2RyYWc6c3RhcnQnKVxuICAgIGFkZENsYXNzKHRoaXMuZWxlbWVudCwgJ2RyYWdlZS1hY3RpdmUnKVxuICAgIHRoaXMuZW1pdCgnZHJhZzptb3ZlJylcbiAgfVxuXG4gIHN0b3BEcmFnZ2luZygpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCB0aGlzLl9uYXRpdmVEcmFnT3ZlcilcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcm9wJywgdGhpcy5fbmF0aXZlRHJvcClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcm9wJywgdGhpcy5fbmF0aXZlRHJvcClcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fc2Nyb2xsKVxuICAgIHRoaXMuZWxlbWVudC5kcmFnZ2FibGUgPSBmYWxzZVxuICAgIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlXG4gICAgcmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50LCAnZHJhZ2VlLWFjdGl2ZScpXG4gIH1cblxuICBkcmFnTW92ZShldmVudCkge1xuICAgIHRoaXMuY3VycmVudEV2ZW50ID0gZXZlbnRcbiAgICBsZXQgdG91Y2hcblxuICAgIGNvbnN0IGlzVG91Y2hFdmVudCA9IChpc1RvdWNoICYmIChldmVudCBpbnN0YW5jZW9mIHdpbmRvdy5Ub3VjaEV2ZW50KSlcbiAgICBpZiAoaXNUb3VjaEV2ZW50KSB7XG4gICAgICB0b3VjaCA9IGdldFRvdWNoQnlJRChldmVudCwgdGhpcy5fdG91Y2hJZClcblxuICAgICAgaWYgKCF0b3VjaCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB0aGlzLnRvdWNoUG9pbnQgPSBuZXcgUG9pbnQoXG4gICAgICBpc1RvdWNoRXZlbnQgPyB0b3VjaC5wYWdlWCA6IGV2ZW50LmNsaWVudFgsXG4gICAgICBpc1RvdWNoRXZlbnQgPyB0b3VjaC5wYWdlWSA6IGV2ZW50LmNsaWVudFlcbiAgICApXG5cbiAgICBsZXQgcG9pbnQgPSB0aGlzLl9zdGFydFBvc2l0aW9uLmFkZCh0aGlzLnRvdWNoUG9pbnQuc3ViKHRoaXMuX3N0YXJ0VG91Y2hQb2ludCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy5zY3JvbGxQb2ludC5zdWIodGhpcy5fc3RhcnRTY3JvbGxQb2ludCkpXG5cbiAgICBwb2ludCA9IHRoaXMuYm91bmQocG9pbnQsIHRoaXMuZ2V0U2l6ZSgpKVxuICAgIHRoaXMubW92ZShwb2ludClcbiAgfVxuXG4gIGRyYWdFbmQoZXZlbnQpIHtcbiAgICBjb25zdCBpc1RvdWNoRXZlbnQgPSAoaXNUb3VjaCAmJiAoZXZlbnQgaW5zdGFuY2VvZiB3aW5kb3cuVG91Y2hFdmVudCkpXG5cbiAgICBpZiAoaXNUb3VjaEV2ZW50ICYmICFnZXRUb3VjaEJ5SUQoZXZlbnQsIHRoaXMuX3RvdWNoSWQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB0aGlzLmRyYWdFbmRBY3Rpb24oKVxuICAgIHRoaXMuZW1pdCgnZHJhZzplbmQnKVxuXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG5cbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fc2Nyb2xsKVxuXG4gICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2VcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkcmFnZ2FibGUnKVxuICAgIHJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudCwgJ2RyYWdlZS1hY3RpdmUnKVxuICB9XG5cbiAgb25TY3JvbGwoX2V2ZW50KSB7XG4gICAgbGV0IHBvaW50ID0gdGhpcy5fc3RhcnRQb3NpdGlvbi5hZGQodGhpcy50b3VjaFBvaW50LnN1Yih0aGlzLl9zdGFydFRvdWNoUG9pbnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMuc2Nyb2xsUG9pbnQuc3ViKHRoaXMuX3N0YXJ0U2Nyb2xsUG9pbnQpKVxuXG4gICAgcG9pbnQgPSB0aGlzLmJvdW5kKHBvaW50LCB0aGlzLmdldFNpemUoKSlcbiAgICBpZiAoIXRoaXMubmF0aXZlRHJhZ0FuZERyb3ApIHtcbiAgICAgIHRoaXMubW92ZShwb2ludClcbiAgICB9XG4gIH1cblxuICBuYXRpdmVEcmFnU3RhcnQoZXZlbnQpIHtcbiAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dCcsICdGaXJlRm94IGZpeCcpXG4gICAgZXZlbnQuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSAnbW92ZSdcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIHRoaXMuX25hdGl2ZURyYWdPdmVyKVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzLl9uYXRpdmVEcm9wKVxuICB9XG5cbiAgbmF0aXZlRHJhZ092ZXIoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZXZlbnQuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnbW92ZSdcbiAgICBhZGRDbGFzcyh0aGlzLmVsZW1lbnQsICdkcmFnZWUtcGxhY2Vob2xkZXInKVxuICAgIHRoaXMuY3VycmVudEV2ZW50ID0gZXZlbnRcbiAgICBpZiAoZXZlbnQuY2xpZW50WCA9PT0gMCAmJiBldmVudC5jbGllbnRZID09PSAwKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLnRvdWNoUG9pbnQgPSBuZXcgUG9pbnQoZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSlcbiAgICBsZXQgcG9pbnQgPSB0aGlzLl9zdGFydFBvc2l0aW9uLmFkZCh0aGlzLnRvdWNoUG9pbnQuc3ViKHRoaXMuX3N0YXJ0VG91Y2hQb2ludCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy5zY3JvbGxQb2ludC5zdWIodGhpcy5fc3RhcnRTY3JvbGxQb2ludCkpXG4gICAgcG9pbnQgPSB0aGlzLmJvdW5kKHBvaW50LCB0aGlzLmdldFNpemUoKSlcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9pbnRcbiAgICB0aGlzLmVtaXQoJ2RyYWc6bW92ZScpXG4gIH1cblxuICBuYXRpdmVEcmFnRW5kKF9ldmVudCkge1xuICAgIHJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudCwgJ2RyYWdlZS1wbGFjZWhvbGRlcicpXG4gICAgdGhpcy5kcmFnRW5kQWN0aW9uKClcbiAgICB0aGlzLmVtaXQoJ2RyYWc6ZW5kJylcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIHRoaXMuX25hdGl2ZURyYWdPdmVyKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzLl9uYXRpdmVEcm9wKVxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9zY3JvbGwpXG4gICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2VcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkcmFnZ2FibGUnKVxuICAgIHJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudCwgJ2RyYWdlZS1hY3RpdmUnKVxuICB9XG5cbiAgbmF0aXZlRHJvcChldmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wKGV2ZW50KSB7XG4gICAgY29uc3QgY29udGFpbmVyUmVjdCA9IHRoaXMuY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgY29uc3QgY2xvbmVkRWxlbWVudCA9IHRoaXMuZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSlcbiAgICBjbG9uZWRFbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BlcnR5XSA9ICcnXG4gICAgY29weVN0eWxlcyh0aGlzLmVsZW1lbnQsIGNsb25lZEVsZW1lbnQpXG4gICAgY2xvbmVkRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSdcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNsb25lZEVsZW1lbnQpXG4gICAgYWRkQ2xhc3ModGhpcy5lbGVtZW50LCAnZHJhZ2VlLXBsYWNlaG9sZGVyJylcblxuICAgIGNvbnN0IGVtdWxhdGlvbkRyYWdnYWJsZSA9IG5ldyBEcmFnZ2FibGUoY2xvbmVkRWxlbWVudCwge1xuICAgICAgY29udGFpbmVyOiBkb2N1bWVudC5ib2R5LFxuICAgICAgYm91bmQocG9pbnQpIHtcbiAgICAgICAgcmV0dXJuIHBvaW50XG4gICAgICB9LFxuICAgICAgb246IHtcbiAgICAgICAgJ2RyYWc6bW92ZSc6ICgpID0+IHtcbiAgICAgICAgICBjb25zdCBjb250YWluZXJSZWN0UG9pbnQgPSBuZXcgUG9pbnQoY29udGFpbmVyUmVjdC5sZWZ0LCBjb250YWluZXJSZWN0LnRvcClcbiAgICAgICAgICB0aGlzLnBvc2l0aW9uID0gZW11bGF0aW9uRHJhZ2dhYmxlLnBvc2l0aW9uLnN1Yihjb250YWluZXJSZWN0UG9pbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdWIodGhpcy5fc3RhcnRTY3JvbGxQb2ludClcbiAgICAgICAgICB0aGlzLmVtaXQoJ2RyYWc6bW92ZScpXG4gICAgICAgIH0sXG4gICAgICAgICdkcmFnOmVuZCc6ICgpID0+IHtcbiAgICAgICAgICBlbXVsYXRpb25EcmFnZ2FibGUuZGVzdHJveSgpXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChjbG9uZWRFbGVtZW50KVxuICAgICAgICAgIHJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudCwgJ2RyYWdlZS1wbGFjZWhvbGRlcicpXG4gICAgICAgICAgcmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50LCAnZHJhZ2VlLWFjdGl2ZScpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgY29udGFpbmVyUmVjdFBvaW50ID0gbmV3IFBvaW50KGNvbnRhaW5lclJlY3QubGVmdCwgY29udGFpbmVyUmVjdC50b3ApXG4gICAgZW11bGF0aW9uRHJhZ2dhYmxlLl9zdGFydFNjcm9sbFBvaW50ID0gdGhpcy5fc3RhcnRTY3JvbGxQb2ludFxuXG4gICAgZW11bGF0aW9uRHJhZ2dhYmxlLm1vdmUoXG4gICAgICB0aGlzLnBpbm5lZFBvc2l0aW9uLmFkZChjb250YWluZXJSZWN0UG9pbnQpLmFkZChuZXcgUG9pbnQod2luZG93LnNjcm9sbFgsIHdpbmRvdy5zY3JvbGxZKSlcbiAgICApXG5cbiAgICBlbXVsYXRpb25EcmFnZ2FibGUuZHJhZ1N0YXJ0KGV2ZW50KVxuICB9XG5cbiAgZHJhZ0VuZEFjdGlvbigpIHtcbiAgICB0aGlzLnBpblBvc2l0aW9uKHRoaXMucG9zaXRpb24pXG4gIH1cblxuICBnZXRSZWN0YW5nbGUoKSB7XG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUodGhpcy5wb3NpdGlvbiwgdGhpcy5nZXRTaXplKCkpXG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIGlmICh0aGlzLmJvdW5kLnJlZnJlc2gpIHtcbiAgICAgIHRoaXMuYm91bmQucmVmcmVzaCgpXG4gICAgfVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmhhbmRsZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0KVxuICAgIHRoaXMuaGFuZGxlci5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQpXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIHRoaXMuX25hdGl2ZURyYWdTdGFydClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCB0aGlzLl9uYXRpdmVEcmFnT3ZlcilcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcm9wJywgdGhpcy5fbmF0aXZlRHJvcClcbiAgICB0aGlzLnJlc2V0RW1pdHRlcigpXG5cbiAgICBjb25zdCBpbmRleCA9IGRyYWdnYWJsZXMuaW5kZXhPZih0aGlzKVxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICBkcmFnZ2FibGVzLnNwbGljZShpbmRleCwgMSlcbiAgICB9XG4gIH1cblxuICBnZXQgY29udGFpbmVyKCkge1xuICAgIHJldHVybiAodGhpcy5fY29udGFpbmVyID0gdGhpcy5fY29udGFpbmVyIHx8IHRoaXMub3B0aW9ucy5jb250YWluZXIgfHwgdGhpcy5vcHRpb25zLnBhcmVudCB8fCBnZXREZWZhdWx0Q29udGFpbmVyKHRoaXMuZWxlbWVudCkpXG4gIH1cblxuICBnZXQgaGFuZGxlcigpIHtcbiAgICBpZiAoIXRoaXMuX2hhbmRsZXIpIHtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmhhbmRsZXIgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZXIgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLm9wdGlvbnMuaGFuZGxlcikgfHwgdGhpcy5lbGVtZW50XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9oYW5kbGVyID0gdGhpcy5vcHRpb25zLmhhbmRsZXIgfHwgdGhpcy5lbGVtZW50XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2hhbmRsZXJcbiAgfVxuXG4gIGdldCBuYXRpdmVEcmFnQW5kRHJvcCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLm5hdGl2ZURyYWdBbmREcm9wIHx8IGZhbHNlXG4gIH1cblxuICBnZXQgZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wT25Ub3VjaCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcE9uVG91Y2ggfHwgdHJ1ZVxuICB9XG5cbiAgZ2V0IGVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcEZvckFsbCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcEZvckFsbCB8fCBmYWxzZVxuICB9XG5cbiAgZ2V0IHNob3VsZFJlbW92ZVplcm9UcmFuc2xhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5zaG91bGRSZW1vdmVaZXJvVHJhbnNsYXRlIHx8IGZhbHNlXG4gIH1cblxuICBnZXQgc2Nyb2xsUG9pbnQoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh3aW5kb3cuc2Nyb2xsWCwgd2luZG93LnNjcm9sbFkpXG4gIH1cblxuICBnZXQgZW5hYmxlKCkge1xuICAgIHJldHVybiB0aGlzLl9lbmFibGVcbiAgfVxuXG4gIHNldCBlbmFibGUoZW5hYmxlKSB7XG4gICAgaWYgKGVuYWJsZSkge1xuICAgICAgcmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50LCAnZHJhZ2VlLWRpc2FibGUnKVxuICAgIH0gZWxzZSB7XG4gICAgICBhZGRDbGFzcyh0aGlzLmVsZW1lbnQsICdkcmFnZWUtZGlzYWJsZScpXG4gICAgfVxuXG4gICAgdGhpcy5fZW5hYmxlID0gZW5hYmxlXG4gIH1cbn1cblxuRHJhZ2dhYmxlLmVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKClcbkRyYWdnYWJsZS5lbWl0dGVyLm9uKCdkcmFnZ2FibGU6Y3JlYXRlJywgYWRkVG9EZWZhdWx0U2NvcGUpXG4iLCJpbXBvcnQgcmVtb3ZlSXRlbSBmcm9tICcuL3V0aWxzL3JlbW92ZS1hcnJheS1pdGVtJ1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50RW1pdHRlcidcbmltcG9ydCB7XG4gIGdldERpc3RhbmNlLFxuICBpbmRleE9mTmVhcmVzdFBvaW50XG59IGZyb20gJy4vZ2VvbWV0cnkvZGlzdGFuY2VzJ1xuXG5pbXBvcnQgRHJhZ2dhYmxlIGZyb20gJy4vZHJhZ2dhYmxlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0IGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoZHJhZ2dhYmxlcywgb3B0aW9ucz17fSkge1xuICAgIHN1cGVyKG9wdGlvbnMpXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICB0aW1lRW5kOiAyMDAsXG4gICAgICB0aW1lRXhjYW5nZTogNDAwLFxuICAgICAgcmFkaXVzOiAzMFxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0aGlzLmRyYWdnYWJsZXMgPSBkcmFnZ2FibGVzXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5fZW5hYmxlID0gdHJ1ZVxuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKHRoaXMuaW5pdERyYWdnYWJsZSwgdGhpcylcbiAgfVxuXG4gIGluaXREcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgZHJhZ2dhYmxlLmVuYWJsZSA9IHRoaXMuX2VuYWJsZVxuICAgIGRyYWdnYWJsZS5vbignZHJhZzptb3ZlJywgKCkgPT4gdGhpcy5vbk1vdmUoZHJhZ2dhYmxlKSlcbiAgICBkcmFnZ2FibGUuZHJhZ0VuZEFjdGlvbiA9ICgpID0+IGRyYWdnYWJsZS5waW5Qb3NpdGlvbihkcmFnZ2FibGUucGlubmVkUG9zaXRpb24sIHRoaXMub3B0aW9ucy50aW1lRW5kKVxuICB9XG5cbiAgb25Nb3ZlKGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IHNvcnRlZERyYWdnYWJsZXMgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuICAgIGNvbnN0IHBpbm5lZFBvc2l0aW9ucyA9IHNvcnRlZERyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbilcblxuICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IHNvcnRlZERyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpXG4gICAgY29uc3QgdGFyZ2V0SW5kZXggPSBpbmRleE9mTmVhcmVzdFBvaW50KHBpbm5lZFBvc2l0aW9ucywgZHJhZ2dhYmxlLnBvc2l0aW9uLCB0aGlzLm9wdGlvbnMucmFkaXVzLCB0aGlzLmRpc3RhbmNlRnVuYylcblxuICAgIGlmICh0YXJnZXRJbmRleCAhPT0gLTEgJiYgY3VycmVudEluZGV4ICE9PSB0YXJnZXRJbmRleCkge1xuICAgICAgaWYgKHRhcmdldEluZGV4IDwgY3VycmVudEluZGV4KSB7XG4gICAgICAgIGZvciAobGV0IGk9dGFyZ2V0SW5kZXg7IGk8Y3VycmVudEluZGV4OyBpKyspIHtcbiAgICAgICAgICBzb3J0ZWREcmFnZ2FibGVzW2ldLnBpblBvc2l0aW9uKHBpbm5lZFBvc2l0aW9uc1tpKzFdLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAobGV0IGk9Y3VycmVudEluZGV4OyBpPHRhcmdldEluZGV4OyBpKyspIHtcbiAgICAgICAgICBzb3J0ZWREcmFnZ2FibGVzW2krMV0ucGluUG9zaXRpb24ocGlubmVkUG9zaXRpb25zW2ldLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGRyYWdnYWJsZS5uYXRpdmVEcmFnQW5kRHJvcCkge1xuICAgICAgICBkcmFnZ2FibGUucGluUG9zaXRpb24ocGlubmVkUG9zaXRpb25zW3RhcmdldEluZGV4XSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbiA9IHBpbm5lZFBvc2l0aW9uc1t0YXJnZXRJbmRleF1cbiAgICAgIH1cblxuICAgICAgdGhpcy5lbWl0KCdsaXN0OmNoYW5nZScpXG4gICAgfVxuICB9XG5cbiAgZ2V0Q3VycmVudFBpbm5lZFBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5kcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24uY2xvbmUoKSlcbiAgfVxuXG4gIGdldFNvcnRlZERyYWdnYWJsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJhZ2dhYmxlcy5zb3J0KHRoaXMuc29ydGluZy5iaW5kKHRoaXMpKVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnJlc2V0UG9zaXRpb25Ub0luaXRpYWwoKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnJlZnJlc2goKSlcbiAgfVxuXG4gIGFkZChkcmFnZ2FibGVzKSB7XG4gICAgaWYgKCEoZHJhZ2dhYmxlcyBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgZHJhZ2dhYmxlcyA9IFtkcmFnZ2FibGVzXVxuICAgIH1cbiAgICBkcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gdGhpcy5pbml0RHJhZ2dhYmxlKGRyYWdnYWJsZSkpXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gdGhpcy5kcmFnZ2FibGVzLmNvbmNhdChkcmFnZ2FibGVzKVxuICB9XG5cbiAgcmVtb3ZlKGRyYWdnYWJsZXMpIHtcbiAgICBjb25zdCBpbml0aWFsUG9zaXRpb25zID0gdGhpcy5kcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uKVxuICAgIGNvbnN0IGxpc3QgPSBbXVxuICAgIGNvbnN0IHNvcnRlZERyYWdnYWJsZXMgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuXG4gICAgaWYgKCEoZHJhZ2dhYmxlcyBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgZHJhZ2dhYmxlcyA9IFtkcmFnZ2FibGVzXVxuICAgIH1cblxuICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUucmVzZXRPbignZHJhZzplbmQnKVxuICAgICAgZHJhZ2dhYmxlLnJlc2V0T24oJ2RyYWc6bW92ZScpXG4gICAgICByZW1vdmVJdGVtKHRoaXMuZHJhZ2dhYmxlcywgZHJhZ2dhYmxlKVxuICAgIH0pXG5cbiAgICBsZXQgaiA9IDBcbiAgICBzb3J0ZWREcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgaWYgKHRoaXMuZHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkgIT09IC0xKSB7XG4gICAgICAgIGlmIChkcmFnZ2FibGUucGlubmVkUG9zaXRpb24gIT09IGluaXRpYWxQb3NpdGlvbnNbal0pIHtcbiAgICAgICAgICBkcmFnZ2FibGUucGluUG9zaXRpb24oaW5pdGlhbFBvc2l0aW9uc1tqXSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICB9XG4gICAgICAgIGRyYWdnYWJsZS5pbml0aWFsUG9zaXRpb24gPSBpbml0aWFsUG9zaXRpb25zW2pdXG4gICAgICAgIGorK1xuICAgICAgICBsaXN0LnB1c2goZHJhZ2dhYmxlKVxuICAgICAgfVxuICAgIH0pXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gbGlzdFxuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5yZW1vdmUodGhpcy5kcmFnZ2FibGVzLnNsaWNlKCkpXG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5kZXN0cm95KCkpXG4gIH1cblxuICBzb3J0aW5nKGRyYWdnYWJsZUEsIGRyYWdnYWJsZUIpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLnNvcnRpbmcpIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuc29ydGluZyhkcmFnZ2FibGVBLCBkcmFnZ2FibGVCKVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZHJhZ2dhYmxlQS5waW5uZWRQb3NpdGlvbi55IDwgZHJhZ2dhYmxlQi5waW5uZWRQb3NpdGlvbi55KSByZXR1cm4gLTFcbiAgICAgIGlmIChkcmFnZ2FibGVBLnBpbm5lZFBvc2l0aW9uLnkgPiBkcmFnZ2FibGVCLnBpbm5lZFBvc2l0aW9uLnkpIHJldHVybiAxXG4gICAgICBpZiAoZHJhZ2dhYmxlQS5waW5uZWRQb3NpdGlvbi54IDwgZHJhZ2dhYmxlQi5waW5uZWRQb3NpdGlvbi54KSByZXR1cm4gLTFcbiAgICAgIGlmIChkcmFnZ2FibGVBLnBpbm5lZFBvc2l0aW9uLnggPiBkcmFnZ2FibGVCLnBpbm5lZFBvc2l0aW9uLngpIHJldHVybiAxXG4gICAgICByZXR1cm4gMFxuICAgIH1cbiAgfVxuXG4gIGdldCBkaXN0YW5jZUZ1bmMoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5nZXREaXN0YW5jZSB8fCBnZXREaXN0YW5jZVxuICB9XG5cbiAgZ2V0IHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDdXJyZW50UGlubmVkUG9zaXRpb25zKClcbiAgfVxuXG4gIHNldCBwb3NpdGlvbnMocG9zaXRpb25zKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9ICd3cm9uZyBhcnJheSBsZW5ndGgnXG4gICAgaWYgKHBvc2l0aW9ucy5sZW5ndGggPT09IHRoaXMuZHJhZ2dhYmxlcy5sZW5ndGgpIHtcbiAgICAgIHBvc2l0aW9ucy5mb3JFYWNoKChwb2ludCwgaSkgPT4ge1xuICAgICAgICB0aGlzLmRyYWdnYWJsZXNbaV0ucGluUG9zaXRpb24ocG9pbnQpXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBtZXNzYWdlXG4gICAgfVxuICB9XG5cbiAgZ2V0IGVuYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlXG4gIH1cblxuICBzZXQgZW5hYmxlKGVuYWJsZSkge1xuICAgIHRoaXMuX2VuYWJsZSA9IGVuYWJsZVxuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5lbmFibGUgPSBlbmFibGVcbiAgICB9KVxuICB9XG5cbiAgc3RhdGljIGZhY3RvcnkoY29udGFpbmVyRWxlbWVudCwgZWxlbWVudHMsIG9wdGlvbnM9e30pIHtcbiAgICBjb25zdCBkcmFnZ2FibGVzID0gQXJyYXkuZnJvbShlbGVtZW50cykubWFwKChlbGVtZW50KSA9PiB7XG4gICAgICByZXR1cm4gbmV3IERyYWdnYWJsZShlbGVtZW50LCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgY29udGFpbmVyOiBjb250YWluZXJFbGVtZW50XG4gICAgICB9LCBvcHRpb25zLmRyYWdnYWJsZSB8fCB7fSkpXG4gICAgfSlcbiAgICByZXR1cm4gbmV3IExpc3QoZHJhZ2dhYmxlcywgb3B0aW9ucy5saXN0IHx8IHt9KVxuICB9XG59XG4iLCJpbXBvcnQgTGlzdCBmcm9tICcuL2xpc3QnXG5pbXBvcnQgeyBpbmRleE9mTmVhcmVzdFBvaW50LCBnZXRZRGlmZmVyZW5jZSB9IGZyb20gJy4vZ2VvbWV0cnkvZGlzdGFuY2VzJ1xuXG5pbXBvcnQgRHJhZ2dhYmxlIGZyb20gJy4vZHJhZ2dhYmxlJ1xuXG5jb25zdCBhcnJheU1vdmUgPSAoYXJyYXksIGZyb20sIHRvKSA9PiB7XG4gIGFycmF5LnNwbGljZSh0byA8IDAgPyBhcnJheS5sZW5ndGggKyB0byA6IHRvLCAwLCBhcnJheS5zcGxpY2UoZnJvbSwgMSlbMF0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1YmJsaW5nTGlzdCBleHRlbmRzIExpc3Qge1xuICBjb25zdHJ1Y3RvcihkcmFnZ2FibGVzLCBvcHRpb25zPXt9KSB7XG4gICAgc3VwZXIoZHJhZ2dhYmxlcywgb3B0aW9ucylcbiAgfVxuXG4gIGluaXREcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgZHJhZ2dhYmxlLm9uKCdkcmFnOnN0YXJ0JywgKCkgPT4gdGhpcy5hdXRvRGV0ZWN0VmVydGljYWxHYXAoZHJhZ2dhYmxlKSlcbiAgICBzdXBlci5pbml0RHJhZ2dhYmxlKGRyYWdnYWJsZSlcbiAgfVxuXG4gIGF1dG9EZXRlY3RWZXJ0aWNhbEdhcCgpIHtcbiAgICBpZiAodGhpcy5kcmFnZ2FibGVzLmxlbmd0aCA+PSAyKSB7XG4gICAgICBjb25zdCBzb3J0ZWQgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuXG4gICAgICB0aGlzLnZlcnRpY2FsR2FwID0gc29ydGVkWzFdLnBpbm5lZFBvc2l0aW9uLnkgLSBzb3J0ZWRbMF0ucGlubmVkUG9zaXRpb24ueSAtIHNvcnRlZFswXS5nZXRTaXplKCkueVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZlcnRpY2FsR2FwID0gMFxuICAgIH1cblxuICAgIGlmICh0aGlzLmRyYWdnYWJsZXMubGVuZ3RoID49IDEpIHtcbiAgICAgIHRoaXMuc3RhcnRQb3NpdGlvbiA9IHRoaXMuZHJhZ2dhYmxlc1swXS5waW5uZWRQb3NpdGlvblxuICAgIH1cbiAgfVxuXG4gIG9uTW92ZShkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBzb3J0ZWREcmFnZ2FibGVzID0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcbiAgICBjb25zdCBwaW5uZWRQb3NpdGlvbnMgPSBzb3J0ZWREcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24pXG5cbiAgICBjb25zdCBjdXJyZW50SW5kZXggPSBzb3J0ZWREcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKVxuICAgIGNvbnN0IHRhcmdldEluZGV4ID0gaW5kZXhPZk5lYXJlc3RQb2ludChwaW5uZWRQb3NpdGlvbnMsIGRyYWdnYWJsZS5wb3NpdGlvbiwgdGhpcy5vcHRpb25zLnJhZGl1cywgdGhpcy5kaXN0YW5jZUZ1bmMpXG5cbiAgICBpZiAodGFyZ2V0SW5kZXggIT09IC0xICYmIGN1cnJlbnRJbmRleCAhPT0gdGFyZ2V0SW5kZXgpIHtcbiAgICAgIGFycmF5TW92ZShzb3J0ZWREcmFnZ2FibGVzLCBjdXJyZW50SW5kZXgsIHRhcmdldEluZGV4KVxuICAgICAgdGhpcy5idWJsaW5nKHNvcnRlZERyYWdnYWJsZXMsIGRyYWdnYWJsZSlcbiAgICAgIHRoaXMuZW1pdCgnbGlzdDpjaGFuZ2UnKVxuICAgIH1cbiAgfVxuXG4gIGJ1Ymxpbmcoc29ydGVkRHJhZ2dhYmxlcywgY3VycmVudERyYWdnYWJsZSkge1xuICAgIGNvbnN0IGN1cnJlbnRQb3NpdGlvbiA9IHRoaXMuc3RhcnRQb3NpdGlvbi5jbG9uZSgpXG5cbiAgICBzb3J0ZWREcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgaWYgKCFkcmFnZ2FibGUucGlubmVkUG9zaXRpb24uY29tcGFyZShjdXJyZW50UG9zaXRpb24pKSB7XG4gICAgICAgIGlmIChkcmFnZ2FibGUgPT09IGN1cnJlbnREcmFnZ2FibGUgJiYgIWN1cnJlbnREcmFnZ2FibGUubmF0aXZlRHJhZ0FuZERyb3ApIHtcbiAgICAgICAgICBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24gPSBjdXJyZW50UG9zaXRpb24uY2xvbmUoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRyYWdnYWJsZS5waW5Qb3NpdGlvbihjdXJyZW50UG9zaXRpb24sIChkcmFnZ2FibGUgPT09IGN1cnJlbnREcmFnZ2FibGUpID8gMCA6IHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjdXJyZW50UG9zaXRpb24ueSA9IGN1cnJlbnRQb3NpdGlvbi55ICsgZHJhZ2dhYmxlLmdldFNpemUoKS55ICsgdGhpcy52ZXJ0aWNhbEdhcFxuICAgIH0pXG4gIH1cblxuICBnZXQgZGlzdGFuY2VGdW5jKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZ2V0RGlzdGFuY2UgfHwgZ2V0WURpZmZlcmVuY2VcbiAgfVxuXG4gIHN0YXRpYyBmYWN0b3J5KGNvbnRhaW5lckVsZW1lbnQsIGVsZW1lbnRzLCBvcHRpb25zPXt9KSB7XG4gICAgY29uc3QgZHJhZ2dhYmxlcyA9IEFycmF5LmZyb20oZWxlbWVudHMpLm1hcCgoZWxlbWVudCkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBEcmFnZ2FibGUoZWxlbWVudCwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyRWxlbWVudFxuICAgICAgfSwgb3B0aW9ucy5kcmFnZ2FibGUgfHwge30pKVxuICAgIH0pXG4gICAgcmV0dXJuIG5ldyBCdWJibGluZ0xpc3QoZHJhZ2dhYmxlcywgb3B0aW9ucy5saXN0IHx8IHt9KVxuICB9XG59XG4iXSwibmFtZXMiOlsiZ2V0U3VtVmFsdWVPZlN0eWxlUnVsZXMiLCJlbGVtZW50IiwicnVsZXMiLCJyZWR1Y2UiLCJzdW0iLCJydWxlIiwicGFyc2VJbnQiLCJ3aW5kb3ciLCJnZXRDb21wdXRlZFN0eWxlIiwiUG9pbnQiLCJ4IiwieSIsInAiLCJrIiwicGFyZW50IiwicGFyZW50Tm9kZSIsImVsZW1lbnRSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicGFyZW50UmVjdCIsImxlZnQiLCJ0b3AiLCJpc0NvbnRlbnRCb3hTaXplIiwid2lkdGgiLCJoZWlnaHQiLCJSZWN0YW5nbGUiLCJwb3NpdGlvbiIsInNpemUiLCJhZGQiLCJtdWx0IiwicmVjdCIsIk1hdGgiLCJtaW4iLCJtYXgiLCJzdWIiLCJyZWN0YW5nbGUiLCJpbmNsdWRlUG9pbnQiLCJnZXRQMyIsImF4aXMiLCJzZWxBeGlzIiwiY3Jvc3NSZWN0YW5nbGUiLCJhbmQiLCJ0aGlzQ2VudGVyIiwiZ2V0Q2VudGVyIiwicmVjdENlbnRlciIsInNpZ24iLCJvZmZzZXQiLCJlbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInN0eWxlIiwiaXNDb25zaWRlclRyYW5zbGF0ZSIsImVsZW1lbnRPZmZzZXQiLCJlbGVtZW50U2l6ZSIsImhhc0NsYXNzIiwiYyIsInJlIiwiUmVnRXhwIiwidGVzdCIsImNsYXNzTmFtZSIsImFkZENsYXNzIiwicmVwbGFjZSIsInJlbW92ZUNsYXNzIiwiZ2V0RGVmYXVsdENvbnRhaW5lciIsImNvbnRhaW5lciIsInRhZ05hbWUiLCJFdmVudEVtaXR0ZXIiLCJvcHRpb25zIiwiZXZlbnRzIiwib24iLCJPYmplY3QiLCJlbnRyaWVzIiwiZXZlbnROYW1lIiwiZm4iLCJpbnRlcnJ1cHRlZCIsImFyZ3MiLCJzbGljZSIsImNhbGwiLCJhcmd1bWVudHMiLCJmdW5jIiwicHVzaCIsInVuc2hpZnQiLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJnZXREaXN0YW5jZSIsInAxIiwicDIiLCJkeCIsImR5Iiwic3FydCIsImdldFhEaWZmZXJlbmNlIiwiYWJzIiwiZ2V0WURpZmZlcmVuY2UiLCJ0cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5IiwicG93IiwiaW5kZXhPZk5lYXJlc3RQb2ludCIsImFyciIsInZhbCIsInJhZGl1cyIsImdldERpc3RhbmNlRnVuYyIsImkiLCJ0ZW1wIiwibGVuZ3RoIiwiZGlyZWN0Q3Jvc3NpbmciLCJMMVAxIiwiTDFQMiIsIkwyUDEiLCJMMlAyIiwiazEiLCJrMiIsImIxIiwiYjIiLCJib3VuZFRvTGluZSIsIkEiLCJCIiwiUCIsIkFQIiwiQUIiLCJhYjIiLCJhcF9hYiIsInQiLCJnZXRQb2ludE9uTGluZUJ5TGVuZ2h0IiwiTFAxIiwiTFAyIiwibGVuZ2h0IiwicGVyY2VudCIsImFkZFBvaW50VG9Cb3VuZFBvaW50cyIsImJvdW5kcG9pbnRzIiwicG9pbnQiLCJpc1JpZ2h0IiwicmVzdWx0IiwiZmlsdGVyIiwiYlBvaW50IiwiZ2V0QW5nbGVEaWZmIiwiYWxwaGEiLCJiZXRhIiwibWluQW5nbGUiLCJtYXhBbmdsZSIsIlBJIiwiZ2V0QW5nbGUiLCJkaWZmIiwibm9ybWFsaXplQW5nbGUiLCJhdGFuMiIsImJvdW5kQW5nbGUiLCJkbWluIiwiZG1heCIsImdldFBvaW50RnJvbVJhZGlhbFN5c3RlbSIsImFuZ2xlIiwiY2VudGVyIiwiY29zIiwic2luIiwiQm91bmQiLCJfc2l6ZSIsImluc3RhbmNlIiwiYm91bmQiLCJiaW5kIiwiQm91bmRUb1JlY3RhbmdsZSIsImNhbGNQb2ludCIsImNsb25lIiwicmVjdFAyIiwiQm91bmRUb0VsZW1lbnQiLCJmcm9tRWxlbWVudCIsIkJvdW5kVG9MaW5lWCIsInN0YXJ0WSIsImVuZFkiLCJCb3VuZFRvTGluZVkiLCJzdGFydFgiLCJlbmRYIiwiQm91bmRUb0xpbmUiLCJzdGFydFBvaW50IiwiZW5kUG9pbnQiLCJzb21lSyIsImNvc0JldGEiLCJzaW5CZXRhIiwicG9pbnQyIiwibmV3RW5kUG9pbnQiLCJwb2ludENyb3NzaW5nIiwiQm91bmRUb0NpcmNsZSIsIkJvdW5kVG9BcmMiLCJzdGFydEFuZ2xlIiwiZW5kQW5nbGUiLCJfc3RhcnRBbmdsZSIsIl9lbmRBbmdsZSIsImFycmF5IiwicmFuZ2UiLCJzdGFydCIsInN0b3AiLCJzdGVwIiwiQmFzaWNTdHJhdGVneSIsIk5vdENyb3NzaW5nU3RyYXRlZ3kiLCJyZWN0YW5nbGVMaXN0IiwiaW5kZXhlc09mTmV3cyIsInN0YXRpY1JlY3RhbmdsZUluZGV4ZXMiLCJpbmRleGVzIiwiX3JlY3QiLCJmb3JFYWNoIiwicmVtb3ZhYmxlIiwiaW5kZXhPZlN0YXRpYyIsInN0YXRpY1JlY3QiLCJtb3ZlVG9Cb3VuZCIsInNvbWUiLCJib3VuZFJlY3QiLCJnZXRTcXVhcmUiLCJvZGxEcmFnZ2FibGVzTGlzdCIsIm5ld0RyYWdnYWJsZXMiLCJpbmRleE9mTmV3cyIsImRyYWdnYWJsZXMiLCJjb25jYXQiLCJkcmFnZ2FibGUiLCJGbG9hdExlZnRTdHJhdGVneSIsImFzc2lnbiIsInBhZGRpbmdUb3BMZWZ0IiwicGFkZGluZ0JvdHRvbVJpZ2h0IiwieUdhcEJldHdlZW5EcmFnZ2FibGVzIiwiZ2V0UG9zaXRpb24iLCJfaW5kZXhlc09mTmV3cyIsImdldFAyIiwiYm91bmRhcnlQb2ludHMiLCJyZWN0SW5kZXgiLCJpc1ZhbGlkIiwibmV3TGlzdCIsImxpc3RPbGRQb3NpdGlvbiIsIm1hcCIsIm5ld0RyYWdnYWJsZSIsIkZsb2F0UmlnaHRTdHJhdGVneSIsInBhZGRpbmdUb3BSaWdodCIsInBhZGRpbmdCb3R0b21MZWZ0IiwicGFkZGluZ0JvdHRvbU5lZ0xlZnQiLCJnZXRQNCIsImFkZFRvRGVmYXVsdFNjb3BlIiwidGFyZ2V0IiwiZGVmYXVsdFNjb3BlIiwiYWRkVGFyZ2V0IiwiVGFyZ2V0IiwidGltZUVuZCIsInRpbWVFeGNhbmdlIiwicG9zaXRpb25pbmdTdHJhdGVneSIsInN0cmF0ZWd5IiwiZ2V0UmVjdGFuZ2xlIiwidGFyZ2V0cyIsImVtaXR0ZXIiLCJlbWl0Iiwic3RhcnRCb3VuZGluZyIsImluaXQiLCJib3VuZGluZyIsImluZGV4ZXNPZk5ldyIsInBvc2l0aW9uaW5nIiwib2xkRHJhZ2dhYmxlcyIsInNvcnRpbmciLCJyZWN0YW5nbGVzIiwiaW5uZXJEcmFnZ2FibGVzIiwic2V0UG9zaXRpb24iLCJjYXRjaERyYWdnYWJsZSIsInRhcmdldFJlY3RhbmdsZSIsImRyYWdnYWJsZVNxdWFyZSIsInNjb3BlcyIsInNjb3BlIiwicmVtb3ZlSXRlbSIsIm5ld0RyYWdnYWJsZXNJbmRleCIsImdldFNpemUiLCJhZGRSZW1vdmVPbk1vdmUiLCJ0aW1lIiwibW92ZSIsImluaXRpYWxQb3NpdGlvbiIsInB1c2hJbm5lckRyYWdnYWJsZSIsInJlbW92ZUhhbmRsZXIiLCJyZW1vdmUiLCJ1bnN1YnNjcmliZSIsIl9jb250YWluZXIiLCJTY29wZSIsImRyYWdFbmRBY3Rpb24iLCJvbkVuZCIsInNob3RUYXJnZXRzIiwic29ydCIsImEiLCJiIiwicGluUG9zaXRpb24iLCJyZXNldCIsInJlZnJlc2giLCJwb3NpdGlvbnMiLCJtZXNzYWdlIiwidGFyZ2V0SW5kZXhlcyIsImN1cnJlbnRTY29wZSIsImFkZERyYWdnYWJsZVRvU2NvcGUiLCJhZGREcmFnZ2FibGUiLCJEcmFnZ2FibGUiLCJpbnRlcnJ1cHQiLCJhZGRUYXJnZXRUb1Njb3BlIiwicHJlcGVuZE9uIiwiY2hlY2tTdXBwb3J0UGFzc2l2ZUV2ZW50cyIsInBhc3NpdmVTdXBwb3J0ZWQiLCJkZWZpbmVQcm9wZXJ0eSIsImdldCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiX2VyciIsImlzU3VwcG9ydFBhc3NpdmVFdmVudHMiLCJpc1RvdWNoIiwibW91c2VFdmVudHMiLCJlbmQiLCJ0b3VjaEV2ZW50cyIsInRyYW5zZm9ybVByb3BlcnR5IiwiZ2V0U3R5bGVQcm9wZXJ0eSIsInRyYW5zaXRpb25Qcm9wZXJ0eSIsImdldFRvdWNoQnlJRCIsInRvdWNoSWQiLCJjaGFuZ2VkVG91Y2hlcyIsImlkZW50aWZpZXIiLCJwcmV2ZW50RG91YmxlSW5pdCIsImV4aXN0aW5nIiwiY29weVN0eWxlcyIsInNvdXJjZSIsImRlc3RpbmF0aW9uIiwiY3MiLCJrZXkiLCJjaGlsZHJlbiIsIl9lbmFibGUiLCJzdGFydFBvc2l0aW9uaW5nIiwic3RhcnRMaXN0ZW5pbmciLCJfc2V0RGVmYXVsdFRyYW5zaXRpb24iLCJwaW5uZWRQb3NpdGlvbiIsIl9kcmFnU3RhcnQiLCJldmVudCIsImRyYWdTdGFydCIsIl9kcmFnTW92ZSIsImRyYWdNb3ZlIiwiX2RyYWdFbmQiLCJkcmFnRW5kIiwiX25hdGl2ZURyYWdTdGFydCIsIm5hdGl2ZURyYWdTdGFydCIsIl9uYXRpdmVEcmFnT3ZlciIsIm5hdGl2ZURyYWdPdmVyIiwiX25hdGl2ZURyYWdFbmQiLCJuYXRpdmVEcmFnRW5kIiwiX25hdGl2ZURyb3AiLCJuYXRpdmVEcm9wIiwiX3Njcm9sbCIsIm9uU2Nyb2xsIiwiaGFuZGxlciIsInBhc3NpdmUiLCJfdHJhbnNmb3JtUG9zaXRpb24iLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbkNzcyIsInRyYW5zbGF0ZUNzcyIsInRyYW5zZm9ybSIsInNob3VsZFJlbW92ZVplcm9UcmFuc2xhdGUiLCJpc1NpbGVudCIsImRldGVybWluZURpcmVjdGlvbiIsIl9zZXRUcmFuc2l0aW9uIiwiX3NldFRyYW5zbGF0ZSIsInNpbGVudCIsImxlZnREaXJlY3Rpb24iLCJyaWdodERpcmVjdGlvbiIsInVwRGlyZWN0aW9uIiwiZG93bkRpcmVjdGlvbiIsImN1cnJlbnRFdmVudCIsImlzVG91Y2hFdmVudCIsIlRvdWNoRXZlbnQiLCJ0b3VjaFBvaW50IiwiX3N0YXJ0VG91Y2hQb2ludCIsInBhZ2VYIiwiY2xpZW50WCIsInBhZ2VZIiwiY2xpZW50WSIsIl9zdGFydFBvc2l0aW9uIiwiX3RvdWNoSWQiLCJfc3RhcnRTY3JvbGxQb2ludCIsInNjcm9sbFgiLCJzY3JvbGxZIiwic3RvcFByb3BhZ2F0aW9uIiwiSFRNTElucHV0RWxlbWVudCIsImZvY3VzIiwibmF0aXZlRHJhZ0FuZERyb3AiLCJwcmV2ZW50RGVmYXVsdCIsImlzU2FmYXJpIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wT25Ub3VjaCIsImVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcEZvckFsbCIsImVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcCIsImlzRHJhZ2dpbmciLCJ0b3VjaCIsInNjcm9sbFBvaW50IiwicmVtb3ZlQXR0cmlidXRlIiwiX2V2ZW50IiwiZGF0YVRyYW5zZmVyIiwic2V0RGF0YSIsImVmZmVjdEFsbG93ZWQiLCJkcm9wRWZmZWN0IiwiY29udGFpbmVyUmVjdCIsImNsb25lZEVsZW1lbnQiLCJjbG9uZU5vZGUiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJlbXVsYXRpb25EcmFnZ2FibGUiLCJjb250YWluZXJSZWN0UG9pbnQiLCJkZXN0cm95IiwicmVtb3ZlQ2hpbGQiLCJyZXNldEVtaXR0ZXIiLCJfaGFuZGxlciIsImVuYWJsZSIsIkxpc3QiLCJpbml0RHJhZ2dhYmxlIiwib25Nb3ZlIiwic29ydGVkRHJhZ2dhYmxlcyIsImdldFNvcnRlZERyYWdnYWJsZXMiLCJwaW5uZWRQb3NpdGlvbnMiLCJjdXJyZW50SW5kZXgiLCJ0YXJnZXRJbmRleCIsImRpc3RhbmNlRnVuYyIsInJlc2V0UG9zaXRpb25Ub0luaXRpYWwiLCJBcnJheSIsImluaXRpYWxQb3NpdGlvbnMiLCJsaXN0IiwicmVzZXRPbiIsImoiLCJkcmFnZ2FibGVBIiwiZHJhZ2dhYmxlQiIsImdldEN1cnJlbnRQaW5uZWRQb3NpdGlvbnMiLCJjb250YWluZXJFbGVtZW50IiwiZWxlbWVudHMiLCJmcm9tIiwiYXJyYXlNb3ZlIiwidG8iLCJCdWJibGluZ0xpc3QiLCJhdXRvRGV0ZWN0VmVydGljYWxHYXAiLCJzb3J0ZWQiLCJ2ZXJ0aWNhbEdhcCIsInN0YXJ0UG9zaXRpb24iLCJidWJsaW5nIiwiY3VycmVudERyYWdnYWJsZSIsImN1cnJlbnRQb3NpdGlvbiIsImNvbXBhcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUFBLFNBQVNBLHVCQUFULENBQWlDQyxPQUFqQyxFQUEwQ0MsS0FBMUMsRUFBaUQ7RUFDL0MsU0FBT0EsS0FBSyxDQUFDQyxNQUFOLENBQWEsVUFBQ0MsR0FBRCxFQUFNQyxJQUFOLEVBQWU7RUFDakMsV0FBT0QsR0FBRyxHQUFHRSxRQUFRLENBQUNDLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0JQLE9BQXhCLEVBQWlDSSxJQUFqQyxLQUF3QyxDQUF6QyxDQUFyQjtFQUNELEdBRk0sRUFFSixDQUZJLENB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
