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
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
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
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    return function () {
      var Super = _getPrototypeOf(Derived),
          result;

      if (_isNativeReflectConstruct()) {
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

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
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
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
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
    if (n === "Map" || n === "Set") return Array.from(n);
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

  function _createForOfIteratorHelper(o) {
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
      if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) {
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

    var it,
        normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function () {
        it = o[Symbol.iterator]();
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

  var addToDefaultScope = function addToDefaultScope(target) {
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
  Target.emitter.on('target:create', addToDefaultScope);

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

  function addToDefaultScope$1(draggable) {
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

        this.handler.addEventListener(touchEvents.start, this._dragStart,  false);
        this.handler.addEventListener(mouseEvents.start, this._dragStart,  false);
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
            document.addEventListener(mouseEvents.end, this._nativeDragEnd,  false);
          }
        } else {
          document.addEventListener(touchEvents.move, this._dragMove,  false);
          document.addEventListener(mouseEvents.move, this._dragMove,  false);
          document.addEventListener(touchEvents.end, this._dragEnd,  false);
          document.addEventListener(mouseEvents.end, this._dragEnd,  false);
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

        return this._enable = enable;
      }
    }]);

    return Draggable;
  }(EventEmitter);
  Draggable.emitter = new EventEmitter();
  Draggable.emitter.on('draggable:create', addToDefaultScope$1);

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

  return exports;

}({}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZGV2LmpzIiwic291cmNlcyI6WyIuLi9zcmMvZ2VvbWV0cnkvcG9pbnQuanMiLCIuLi9zcmMvZ2VvbWV0cnkvcmVjdGFuZ2xlLmpzIiwiLi4vc3JjL3V0aWxzL2NsYXNzZXMuanMiLCIuLi9zcmMvdXRpbHMvZ2V0LWRlZmF1bHQtY29udGFpbmVyLmpzIiwiLi4vc3JjL2V2ZW50RW1pdHRlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9kZXNhbmRyby1nZXQtc3R5bGUtcHJvcGVydHkvZ2V0LXN0eWxlLXByb3BlcnR5LmpzIiwiLi4vc3JjL2dlb21ldHJ5L2Rpc3RhbmNlcy5qcyIsIi4uL3NyYy9nZW9tZXRyeS9ib3VuZHMuanMiLCIuLi9zcmMvZ2VvbWV0cnkvYW5nbGVzLmpzIiwiLi4vc3JjL2JvdW5kaW5nLmpzIiwiLi4vc3JjL3V0aWxzL3JlbW92ZS1hcnJheS1pdGVtLmpzIiwiLi4vc3JjL3V0aWxzL3JhbmdlLmpzIiwiLi4vc3JjL3Bvc2l0aW9uaW5nLmpzIiwiLi4vc3JjL3RhcmdldC5qcyIsIi4uL3NyYy9zY29wZS5qcyIsIi4uL3NyYy9kcmFnZ2FibGUuanMiLCIuLi9zcmMvbGlzdC5qcyIsIi4uL3NyYy9idWJibGluZ0xpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gZ2V0U3VtVmFsdWVPZlN0eWxlUnVsZXMoZWxlbWVudCwgcnVsZXMpIHtcbiAgcmV0dXJuIHJ1bGVzLnJlZHVjZSgoc3VtLCBydWxlKSA9PiB7XG4gICAgcmV0dXJuIHN1bSArIHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpW3J1bGVdfHwwKVxuICB9LCAwKVxufVxuXG4vKiogQ2xhc3MgcmVwcmVzZW50aW5nIGEgcG9pbnQuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2ludCB7XG4gIC8qKlxuICAqIENyZWF0ZSBhIHBvaW50LlxuICAqIEBwYXJhbSB7bnVtYmVyfSB4IC0gVGhlIHggdmFsdWUuXG4gICogQHBhcmFtIHtudW1iZXJ9IHkgLSBUaGUgeSB2YWx1ZS5cbiAgKi9cbiAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgIHRoaXMueCA9IHhcbiAgICB0aGlzLnkgPSB5XG4gIH1cblxuICBhZGQocCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54ICsgcC54LCB0aGlzLnkgKyBwLnkpXG4gIH1cblxuICBzdWIocCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54IC0gcC54LCB0aGlzLnkgLSBwLnkpXG4gIH1cblxuICBtdWx0KGspIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCAqIGssIHRoaXMueSAqIGspXG4gIH1cblxuICBuZWdhdGl2ZSgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KC10aGlzLngsIC10aGlzLnkpXG4gIH1cblxuICBjb21wYXJlKHApIHtcbiAgICByZXR1cm4gKHRoaXMueCA9PT0gcC54ICYmIHRoaXMueSA9PT0gcC55KVxuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLngsIHRoaXMueSlcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiBge3g9JHt0aGlzLnh9LHk9JHt0aGlzLnl9YFxuICB9XG5cbiAgc3RhdGljIGVsZW1lbnRPZmZzZXQoZWxlbWVudCwgcGFyZW50KSB7XG4gICAgcGFyZW50ID0gcGFyZW50IHx8IGVsZW1lbnQucGFyZW50Tm9kZVxuICAgIGNvbnN0IGVsZW1lbnRSZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIGNvbnN0IHBhcmVudFJlY3QgPSBwYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICByZXR1cm4gbmV3IFBvaW50KFxuICAgICAgZWxlbWVudFJlY3QubGVmdCAtIHBhcmVudFJlY3QubGVmdCxcbiAgICAgIGVsZW1lbnRSZWN0LnRvcCAtIHBhcmVudFJlY3QudG9wXG4gICAgKVxuICB9XG5cbiAgc3RhdGljIGVsZW1lbnRTaXplKGVsZW1lbnQsIGlzQ29udGVudEJveFNpemU9ZmFsc2UpIHtcbiAgICBsZXQgd2lkdGggPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KVsnd2lkdGgnXSlcbiAgICBsZXQgaGVpZ2h0ID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudClbJ2hlaWdodCddKVxuICAgIGlmICghaXNDb250ZW50Qm94U2l6ZSkge1xuICAgICAgd2lkdGggKz0gZ2V0U3VtVmFsdWVPZlN0eWxlUnVsZXMoZWxlbWVudCwgWydwYWRkaW5nLWxlZnQnLCAncGFkZGluZy1yaWdodCcsICdib3JkZXItbGVmdC13aWR0aCcsICdib3JkZXItcmlnaHQtd2lkdGgnXSlcbiAgICAgIGhlaWdodCArPSBnZXRTdW1WYWx1ZU9mU3R5bGVSdWxlcyhlbGVtZW50LCBbJ3BhZGRpbmctdG9wJywgJ3BhZGRpbmctYm90dG9tJywgJ2JvcmRlci10b3Atd2lkdGgnLCAnYm9yZGVyLWJvdHRvbS13aWR0aCddKVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFBvaW50KHdpZHRoLCBoZWlnaHQpXG4gIH1cbn1cbiIsImltcG9ydCBQb2ludCBmcm9tICcuL3BvaW50J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWN0YW5nbGUge1xuICBjb25zdHJ1Y3Rvcihwb3NpdGlvbiwgc2l6ZSkge1xuICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvblxuICAgIHRoaXMuc2l6ZSA9IHNpemVcbiAgfVxuXG4gIGdldFAxKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uXG4gIH1cblxuICBnZXRQMigpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54LCB0aGlzLnBvc2l0aW9uLnkpXG4gIH1cblxuICBnZXRQMygpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi5hZGQodGhpcy5zaXplKVxuICB9XG5cbiAgZ2V0UDQoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55KVxuICB9XG5cbiAgZ2V0Q2VudGVyKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLnNpemUubXVsdCgwLjUpKVxuICB9XG5cbiAgb3IocmVjdCkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gbmV3IFBvaW50KE1hdGgubWluKHRoaXMucG9zaXRpb24ueCwgcmVjdC5wb3NpdGlvbi54KSwgTWF0aC5taW4odGhpcy5wb3NpdGlvbi55LCByZWN0LnBvc2l0aW9uLnkpKVxuICAgIGNvbnN0IHNpemUgPSAobmV3IFBvaW50KE1hdGgubWF4KHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54LCByZWN0LnBvc2l0aW9uLnggKyByZWN0LnNpemUueCksIE1hdGgubWF4KHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55LCByZWN0LnBvc2l0aW9uLnkgKyByZWN0LnNpemUueSkpKS5zdWIocG9zaXRpb24pXG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUocG9zaXRpb24sIHNpemUpXG4gIH1cblxuICBhbmQocmVjdCkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gbmV3IFBvaW50KE1hdGgubWF4KHRoaXMucG9zaXRpb24ueCwgcmVjdC5wb3NpdGlvbi54KSwgTWF0aC5tYXgodGhpcy5wb3NpdGlvbi55LCByZWN0LnBvc2l0aW9uLnkpKVxuICAgIGNvbnN0IHNpemUgPSAobmV3IFBvaW50KE1hdGgubWluKHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54LCByZWN0LnBvc2l0aW9uLnggKyByZWN0LnNpemUueCksIE1hdGgubWluKHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55LCByZWN0LnBvc2l0aW9uLnkgKyByZWN0LnNpemUueSkpKS5zdWIocG9zaXRpb24pXG4gICAgaWYgKHNpemUueCA8PSAwIHx8IHNpemUueSA8PSAwKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZShwb3NpdGlvbiwgc2l6ZSlcbiAgfVxuXG4gIGluY2x1ZGVQb2ludChwKSB7XG4gICAgcmV0dXJuICEodGhpcy5wb3NpdGlvbi54ID4gcC54IHx8IHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54IDwgcC54IHx8IHRoaXMucG9zaXRpb24ueSA+IHAueSB8fCB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSA8IHAueSlcbiAgfVxuXG4gIGluY2x1ZGVSZWN0YW5nbGUocmVjdGFuZ2xlKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5jbHVkZVBvaW50KHJlY3RhbmdsZS5wb3NpdGlvbikgJiYgdGhpcy5pbmNsdWRlUG9pbnQocmVjdGFuZ2xlLmdldFAzKCkpXG4gIH1cblxuICBtb3ZlVG9Cb3VuZChyZWN0LCBheGlzKSB7XG4gICAgbGV0IHNlbEF4aXMsIGNyb3NzUmVjdGFuZ2xlXG4gICAgaWYgKGF4aXMpIHtcbiAgICAgIHNlbEF4aXMgPSBheGlzXG4gICAgfSBlbHNlIHtcbiAgICAgIGNyb3NzUmVjdGFuZ2xlID0gdGhpcy5hbmQocmVjdClcbiAgICAgIGlmICghY3Jvc3NSZWN0YW5nbGUpIHtcbiAgICAgICAgcmV0dXJuIHJlY3RcbiAgICAgIH1cbiAgICAgIHNlbEF4aXMgPSBjcm9zc1JlY3RhbmdsZS5zaXplLnggPiBjcm9zc1JlY3RhbmdsZS5zaXplLnkgPyAneScgOiAneCdcbiAgICB9XG4gICAgY29uc3QgdGhpc0NlbnRlciA9IHRoaXMuZ2V0Q2VudGVyKClcbiAgICBjb25zdCByZWN0Q2VudGVyID0gcmVjdC5nZXRDZW50ZXIoKVxuICAgIGNvbnN0IHNpZ24gPSB0aGlzQ2VudGVyW3NlbEF4aXNdID4gcmVjdENlbnRlcltzZWxBeGlzXSA/IC0xIDogMVxuICAgIGNvbnN0IG9mZnNldCA9IHNpZ24gPiAwID8gdGhpcy5wb3NpdGlvbltzZWxBeGlzXSArIHRoaXMuc2l6ZVtzZWxBeGlzXSAtIHJlY3QucG9zaXRpb25bc2VsQXhpc10gOiB0aGlzLnBvc2l0aW9uW3NlbEF4aXNdIC0gKHJlY3QucG9zaXRpb25bc2VsQXhpc10gKyByZWN0LnNpemVbc2VsQXhpc10pXG4gICAgcmVjdC5wb3NpdGlvbltzZWxBeGlzXSA9IHJlY3QucG9zaXRpb25bc2VsQXhpc10gKyBvZmZzZXRcbiAgICByZXR1cm4gcmVjdFxuICB9XG5cbiAgZ2V0U3F1YXJlKCkge1xuICAgIHJldHVybiB0aGlzLnNpemUueCAqIHRoaXMuc2l6ZS55XG4gIH1cblxuICBzdHlsZUFwcGx5KGVsKSB7XG4gICAgZWwgPSBlbCB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbmQnKVxuICAgIGVsLnN0eWxlLmxlZnQgPSB0aGlzLnBvc2l0aW9uLnggKyAncHgnXG4gICAgZWwuc3R5bGUudG9wID0gdGhpcy5wb3NpdGlvbi55ICsgJ3B4J1xuICAgIGVsLnN0eWxlLndpZHRoID0gdGhpcy5zaXplLnggKyAncHgnXG4gICAgZWwuc3R5bGUuaGVpZ2h0ID0gdGhpcy5zaXplLnkgKyAncHgnXG4gIH1cblxuICBncm93dGgoc2l6ZSkge1xuICAgIHRoaXMuc2l6ZSA9IHRoaXMuc2l6ZS5hZGQoc2l6ZSlcbiAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbi5hZGQoc2l6ZS5tdWx0KC0wLjUpKVxuICB9XG5cbiAgZ2V0TWluU2lkZSgpIHtcbiAgICByZXR1cm4gTWF0aC5taW4odGhpcy5zaXplLngsIHRoaXMuc2l6ZS55KVxuICB9XG5cbiAgc3RhdGljIGZyb21FbGVtZW50KGVsZW1lbnQsIHBhcmVudD1lbGVtZW50LnBhcmVudE5vZGUsIGlzQ29udGVudEJveFNpemU9ZmFsc2UsIGlzQ29uc2lkZXJUcmFuc2xhdGU9ZmFsc2UpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IFBvaW50LmVsZW1lbnRPZmZzZXQoZWxlbWVudCwgcGFyZW50LCBpc0NvbnNpZGVyVHJhbnNsYXRlKVxuICAgIGNvbnN0IHNpemUgPSBQb2ludC5lbGVtZW50U2l6ZShlbGVtZW50LCBpc0NvbnRlbnRCb3hTaXplKVxuICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHBvc2l0aW9uLCBzaXplKVxuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gaGFzQ2xhc3MoZWxlbWVudCwgYykge1xuICBjb25zdCByZSA9IG5ldyBSZWdFeHAoJyhefFxcXFxzKScgKyBjICsgJyhcXFxcc3wkKScsICdnJylcbiAgcmV0dXJuIChyZS50ZXN0KGVsZW1lbnQuY2xhc3NOYW1lKSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZENsYXNzKGVsZW1lbnQsIGMpIHtcbiAgaWYgKCFoYXNDbGFzcyhlbGVtZW50LCBjKSkge1xuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gKGVsZW1lbnQuY2xhc3NOYW1lICsgJyAnICsgYykucmVwbGFjZSgvXFxzKy9nLCAnICcpLnJlcGxhY2UoLyheIHwgJCkvZywgJycpXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNsYXNzKGVsZW1lbnQsIGMpIHtcbiAgY29uc3QgcmUgPSBuZXcgUmVnRXhwKCcoXnxcXFxccyknICsgYyArICcoXFxcXHN8JCknLCAnZycpXG4gIGVsZW1lbnQuY2xhc3NOYW1lID0gZWxlbWVudC5jbGFzc05hbWUucmVwbGFjZShyZSwgJyQxJykucmVwbGFjZSgvXFxzKy9nLCAnICcpLnJlcGxhY2UoLyheIHwgJCkvZywgJycpXG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXREZWZhdWx0Q29udGFpbmVyKGVsZW1lbnQpIHtcbiAgbGV0IGNvbnRhaW5lciA9IGVsZW1lbnQucGFyZW50Tm9kZVxuICB3aGlsZSAoY29udGFpbmVyLnBhcmVudE5vZGUgJiYgd2luZG93LmdldENvbXB1dGVkU3R5bGUoY29udGFpbmVyKVsncG9zaXRpb24nXSA9PT0gJ3N0YXRpYycgJiYgY29udGFpbmVyLnRhZ05hbWUgIT09ICdCT0RZJykge1xuICAgIGNvbnRhaW5lciA9IGNvbnRhaW5lci5wYXJlbnROb2RlXG4gIH1cbiAgcmV0dXJuIGNvbnRhaW5lclxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKG9wdGlvbnMgPSB7fSkge1xuICAgIHRoaXMuZXZlbnRzID0ge31cblxuICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMub24pIHtcbiAgICAgIGZvciAoY29uc3QgW2V2ZW50TmFtZSwgZm5dIG9mIE9iamVjdC5lbnRyaWVzKG9wdGlvbnMub24pKSB7XG4gICAgICAgIHRoaXMub24oZXZlbnROYW1lLCBmbilcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBlbWl0KGV2ZW50TmFtZSkge1xuICAgIHRoaXMuaW50ZXJydXB0ZWQgPSBmYWxzZVxuICAgIGNvbnN0IGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSlcblxuICAgIGlmICghdGhpcy5ldmVudHNbZXZlbnROYW1lXSkgcmV0dXJuXG5cbiAgICBmb3IgKGNvbnN0IGZ1bmMgb2YgdGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgZnVuYyguLi5hcmdzKVxuICAgICAgaWYgKHRoaXMuaW50ZXJydXB0ZWQpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaW50ZXJydXB0KCkge1xuICAgIHRoaXMuaW50ZXJydXB0ZWQgPSB0cnVlXG4gIH1cblxuICBvbihldmVudE5hbWUsIGZuKSB7XG4gICAgaWYgKCF0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdID0gW11cbiAgICB9XG5cbiAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLnB1c2goZm4pXG4gIH1cblxuICBwcmVwZW5kT24oZXZlbnROYW1lLCBmbikge1xuICAgIGlmICghdGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IFtdXG4gICAgfVxuXG4gICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS51bnNoaWZ0KGZuKVxuICB9XG5cbiAgdW5zdWJzY3JpYmUoZXZlbnROYW1lLCBmbikge1xuICAgIGlmICh0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0uaW5kZXhPZihmbilcbiAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0uc3BsaWNlKGluZGV4LCAxKVxuICAgIH1cbiAgfVxuXG4gIHJlc2V0RW1pdHRlciAoKSB7XG4gICAgdGhpcy5ldmVudHMgPSB7fVxuICB9XG5cbiAgcmVzZXRPbihldmVudE5hbWUpIHtcbiAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdID0gW11cbiAgfVxufVxuIiwiLyohXG4gKiBnZXRTdHlsZVByb3BlcnR5IHYxLjAuNFxuICogb3JpZ2luYWwgYnkga2FuZ2F4XG4gKiBodHRwOi8vcGVyZmVjdGlvbmtpbGxzLmNvbS9mZWF0dXJlLXRlc3RpbmctY3NzLXByb3BlcnRpZXMvXG4gKiBNSVQgbGljZW5zZVxuICovXG5cbi8qanNoaW50IGJyb3dzZXI6IHRydWUsIHN0cmljdDogdHJ1ZSwgdW5kZWY6IHRydWUgKi9cbi8qZ2xvYmFsIGRlZmluZTogZmFsc2UsIGV4cG9ydHM6IGZhbHNlLCBtb2R1bGU6IGZhbHNlICovXG5cbiggZnVuY3Rpb24oIHdpbmRvdyApIHtcblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgcHJlZml4ZXMgPSAnV2Via2l0IE1veiBtcyBNcyBPJy5zcGxpdCgnICcpO1xudmFyIGRvY0VsZW1TdHlsZSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZTtcblxuZnVuY3Rpb24gZ2V0U3R5bGVQcm9wZXJ0eSggcHJvcE5hbWUgKSB7XG4gIGlmICggIXByb3BOYW1lICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIHRlc3Qgc3RhbmRhcmQgcHJvcGVydHkgZmlyc3RcbiAgaWYgKCB0eXBlb2YgZG9jRWxlbVN0eWxlWyBwcm9wTmFtZSBdID09PSAnc3RyaW5nJyApIHtcbiAgICByZXR1cm4gcHJvcE5hbWU7XG4gIH1cblxuICAvLyBjYXBpdGFsaXplXG4gIHByb3BOYW1lID0gcHJvcE5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBwcm9wTmFtZS5zbGljZSgxKTtcblxuICAvLyB0ZXN0IHZlbmRvciBzcGVjaWZpYyBwcm9wZXJ0aWVzXG4gIHZhciBwcmVmaXhlZDtcbiAgZm9yICggdmFyIGk9MCwgbGVuID0gcHJlZml4ZXMubGVuZ3RoOyBpIDwgbGVuOyBpKysgKSB7XG4gICAgcHJlZml4ZWQgPSBwcmVmaXhlc1tpXSArIHByb3BOYW1lO1xuICAgIGlmICggdHlwZW9mIGRvY0VsZW1TdHlsZVsgcHJlZml4ZWQgXSA9PT0gJ3N0cmluZycgKSB7XG4gICAgICByZXR1cm4gcHJlZml4ZWQ7XG4gICAgfVxuICB9XG59XG5cbi8vIHRyYW5zcG9ydFxuaWYgKCB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gIC8vIEFNRFxuICBkZWZpbmUoIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBnZXRTdHlsZVByb3BlcnR5O1xuICB9KTtcbn0gZWxzZSBpZiAoIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyApIHtcbiAgLy8gQ29tbW9uSlMgZm9yIENvbXBvbmVudFxuICBtb2R1bGUuZXhwb3J0cyA9IGdldFN0eWxlUHJvcGVydHk7XG59IGVsc2Uge1xuICAvLyBicm93c2VyIGdsb2JhbFxuICB3aW5kb3cuZ2V0U3R5bGVQcm9wZXJ0eSA9IGdldFN0eWxlUHJvcGVydHk7XG59XG5cbn0pKCB3aW5kb3cgKTtcbiIsImV4cG9ydCBmdW5jdGlvbiBnZXREaXN0YW5jZShwMSwgcDIpIHtcbiAgY29uc3QgZHggPSBwMS54IC0gcDIueCwgZHkgPSBwMS55IC0gcDIueVxuICByZXR1cm4gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0WERpZmZlcmVuY2UocDEsIHAyKSB7XG4gIHJldHVybiBNYXRoLmFicyhwMS54IC0gcDIueClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFlEaWZmZXJlbmNlKHAxLCBwMikge1xuICByZXR1cm4gTWF0aC5hYnMocDEueSAtIHAyLnkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5KG9wdGlvbnMpIHtcbiAgcmV0dXJuIChwMSwgcDIpID0+IHtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KFxuICAgICAgTWF0aC5wb3cob3B0aW9ucy54ICogTWF0aC5hYnMocDEueCAtIHAyLngpLCAyKSArXG4gICAgICBNYXRoLnBvdyhvcHRpb25zLnkgKiBNYXRoLmFicyhwMS55IC0gcDIueSksIDIpXG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmRleE9mTmVhcmVzdFBvaW50KGFyciwgdmFsLCByYWRpdXMsIGdldERpc3RhbmNlRnVuYz1nZXREaXN0YW5jZSkge1xuICBsZXQgc2l6ZSwgaW5kZXggPSAwLCBpLCB0ZW1wXG4gIGlmIChhcnIubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIC0xXG4gIH1cbiAgc2l6ZSA9IGdldERpc3RhbmNlRnVuYyhhcnJbMF0sIHZhbClcbiAgZm9yIChpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgIHRlbXAgPSBnZXREaXN0YW5jZUZ1bmMoYXJyW2ldLCB2YWwpXG4gICAgaWYgKHRlbXAgPCBzaXplKSB7XG4gICAgICBzaXplID0gdGVtcFxuICAgICAgaW5kZXggPSBpXG4gICAgfVxuICB9XG4gIGlmIChyYWRpdXMgPj0gMCAmJiBzaXplID4gcmFkaXVzKSB7XG4gICAgcmV0dXJuIC0xXG4gIH1cbiAgcmV0dXJuIGluZGV4XG59XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9wb2ludCdcbmltcG9ydCB7IGdldERpc3RhbmNlIH0gZnJvbSAnLi9kaXN0YW5jZXMnXG5cbmV4cG9ydCBmdW5jdGlvbiBjbGFtcChtaW4sIG1heCwgdmFsKSB7XG4gIHJldHVybiBNYXRoLm1heChtaW4sIE1hdGgubWluKG1heCwgdmFsKSlcbn1cblxuLy9SZXR1cm4gY3Jvc3NpbmcgcG9pbnQgb2YgdHdvIGxpbmVzXG5leHBvcnQgZnVuY3Rpb24gZGlyZWN0Q3Jvc3NpbmcoTDFQMSwgTDFQMiwgTDJQMSwgTDJQMikge1xuICBsZXQgdGVtcCwgazEsIGsyLCBiMSwgYjIsIHgsIHlcbiAgaWYgKEwyUDEueCA9PT0gTDJQMi54KSB7XG4gICAgdGVtcCA9IEwyUDFcbiAgICBMMlAxID0gTDFQMVxuICAgIEwxUDEgPSB0ZW1wXG4gICAgdGVtcCA9IEwyUDJcbiAgICBMMlAyID0gTDFQMlxuICAgIEwxUDIgPSB0ZW1wXG4gIH1cbiAgaWYgKEwxUDEueCA9PT0gTDFQMi54KSB7XG4gICAgazIgPSAoTDJQMi55IC0gTDJQMS55KSAvIChMMlAyLnggLSBMMlAxLngpXG4gICAgYjIgPSAoTDJQMi54ICogTDJQMS55IC0gTDJQMS54ICogTDJQMi55KSAvIChMMlAyLnggLSBMMlAxLngpXG4gICAgeCA9IEwxUDEueFxuICAgIHkgPSB4ICogazIgKyBiMlxuICAgIHJldHVybiBuZXcgUG9pbnQoeCwgeSlcbiAgfSBlbHNlIHtcbiAgICBrMSA9IChMMVAyLnkgLSBMMVAxLnkpIC8gKEwxUDIueCAtIEwxUDEueClcbiAgICBiMSA9IChMMVAyLnggKiBMMVAxLnkgLSBMMVAxLnggKiBMMVAyLnkpIC8gKEwxUDIueCAtIEwxUDEueClcbiAgICBrMiA9IChMMlAyLnkgLSBMMlAxLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICBiMiA9IChMMlAyLnggKiBMMlAxLnkgLSBMMlAxLnggKiBMMlAyLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICB4ID0gKGIxIC0gYjIpIC8gKGsyIC0gazEpXG4gICAgeSA9IHggKiBrMSArIGIxXG4gICAgcmV0dXJuIG5ldyBQb2ludCh4LCB5KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZFRvU2VnbWVudChMUDEsIExQMiwgUCkge1xuICBsZXQgeCwgeVxuICB4ID0gY2xhbXAoTWF0aC5taW4oTFAxLngsIExQMi54KSwgTWF0aC5tYXgoTFAxLngsIExQMi54KSwgUC54KVxuICBpZiAoeCAhPT0gUC54KSB7XG4gICAgeSA9ICh4ID09PSBMUDEueCkgPyBMUDEueSA6IExQMi55XG4gICAgUCA9IG5ldyBQb2ludCh4LCB5KVxuICB9XG5cbiAgeSA9IGNsYW1wKE1hdGgubWluKExQMS55LCBMUDIueSksIE1hdGgubWF4KExQMS55LCBMUDIueSksIFAueSlcbiAgaWYgKHkgIT09IFAueSkge1xuICAgIHggPSAoeSA9PT0gTFAxLnkpID8gTFAxLnggOiBMUDIueFxuICAgIFAgPSBuZXcgUG9pbnQoeCwgeSlcbiAgfVxuXG4gIHJldHVybiBQXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZFRvTGluZShBLCBCLCBQKSB7XG4gIGNvbnN0IEFQID0gbmV3IFBvaW50KFAueCAtIEEueCwgUC55IC0gQS55KSxcbiAgICBBQiA9IG5ldyBQb2ludChCLnggLSBBLngsIEIueSAtIEEueSksXG4gICAgYWIyID0gQUIueCAqIEFCLnggKyBBQi55ICogQUIueSxcbiAgICBhcF9hYiA9IEFQLnggKiBBQi54ICsgQVAueSAqIEFCLnksXG4gICAgdCA9IGFwX2FiIC8gYWIyXG4gIHJldHVybiBuZXcgUG9pbnQoQS54ICsgQUIueCAqIHQsIEEueSArIEFCLnkgKiB0KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9pbnRPbkxpbmUoTFAxLCBMUDIsIHBlcmNlbnQpIHtcbiAgY29uc3QgZHggPSBMUDIueCAtIExQMS54LCBkeSA9IExQMi55IC0gTFAxLnlcbiAgcmV0dXJuIG5ldyBQb2ludChMUDEueCArIHBlcmNlbnQgKiBkeCwgTFAxLnkgKyBwZXJjZW50ICogZHkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb2ludE9uTGluZUJ5TGVuZ2h0KExQMSwgTFAyLCBsZW5naHQpIHtcbiAgY29uc3QgZHggPSBMUDIueCAtIExQMS54XG4gIGNvbnN0IGR5ID0gTFAyLnkgLSBMUDEueVxuICBjb25zdCBwZXJjZW50ID0gbGVuZ2h0IC8gZ2V0RGlzdGFuY2UoTFAxLCBMUDIpXG4gIHJldHVybiBuZXcgUG9pbnQoTFAxLnggKyBwZXJjZW50ICogZHgsIExQMS55ICsgcGVyY2VudCAqIGR5KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkUG9pbnRUb0JvdW5kUG9pbnRzKGJvdW5kcG9pbnRzLCBwb2ludCwgaXNSaWdodCkge1xuICBjb25zdCByZXN1bHQgPSBib3VuZHBvaW50cy5maWx0ZXIoKGJQb2ludCkgPT4ge1xuICAgIHJldHVybiBiUG9pbnQueSA+IHBvaW50LnkgfHwgKGlzUmlnaHQgPyBiUG9pbnQueCA8IHBvaW50LnggOiBiUG9pbnQueCA+IHBvaW50LngpXG4gIH0pXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHQubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAocG9pbnQueSA8IHJlc3VsdFtpXS55KSB7XG4gICAgICByZXN1bHQuc3BsaWNlKGksIDAsIHBvaW50KVxuICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbiAgfVxuICByZXN1bHQucHVzaChwb2ludClcbiAgcmV0dXJuIHJlc3VsdFxufVxuIiwiaW1wb3J0IFBvaW50IGZyb20gJy4vcG9pbnQnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbmdsZURpZmYoYWxwaGEsIGJldGEpIHtcbiAgY29uc3QgbWluQW5nbGUgPSBNYXRoLm1pbihhbHBoYSwgYmV0YSlcbiAgY29uc3QgbWF4QW5nbGUgPSAgTWF0aC5tYXgoYWxwaGEsIGJldGEpXG4gIHJldHVybiBNYXRoLm1pbihtYXhBbmdsZSAtIG1pbkFuZ2xlLCBtaW5BbmdsZSArIE1hdGguUEkqMiAtIG1heEFuZ2xlKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QW5nbGUocDEsIHAyKSB7XG4gIGNvbnN0IGRpZmYgPSBwMi5zdWIocDEpXG4gIHJldHVybiBub3JtYWxpemVBbmdsZShNYXRoLmF0YW4yKGRpZmYueSwgZGlmZi54KSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvUmFkaWFuKGFuZ2xlKSB7XG4gIHJldHVybiAoKGFuZ2xlICUgMzYwKSAqIE1hdGguUEkgLyAxODApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0RlZ3JlZShhbmdsZSkge1xuICByZXR1cm4gKGFuZ2xlICogMTgwIC8gTWF0aC5QSSkgJSAzNjBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kQW5nbGUobWluLCBtYXgsIHZhbCkge1xuICBsZXQgZG1pbiwgZG1heFxuICBpZiAobWluIDwgbWF4ICYmIHZhbCA+IG1pbiAmJiB2YWwgPCBtYXgpIHtcbiAgICByZXR1cm4gdmFsXG4gIH0gZWxzZSBpZiAobWF4IDwgbWluICYmICh2YWwgPCBtYXggfHwgdmFsID4gbWluKSkge1xuICAgIHJldHVybiB2YWxcbiAgfSBlbHNlIHtcbiAgICBkbWluID0gZ2V0QW5nbGVEaWZmKG1pbiwgdmFsKVxuICAgIGRtYXggPSBnZXRBbmdsZURpZmYobWF4LCB2YWwpXG4gICAgaWYgKGRtaW4gPCBkbWF4KSB7XG4gICAgICByZXR1cm4gbWluXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBtYXhcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE5lYXJlc3RBbmdsZShhcnIsIGFuZ2xlKSB7XG4gIGxldCBpLCB0ZW1wLCBkaWZmID0gTWF0aC5QSSAqIDIsIHZhbHVlXG4gIGZvciAoaSA9IDA7IGkgPCBhcnIubGVuZ3RoO2krKykge1xuICAgIHRlbXAgPSBnZXRBbmdsZURpZmYoYXJyW2ldLCBhbmdsZSlcbiAgICBpZiAoZGlmZiA8IHRlbXApIHtcbiAgICAgIGRpZmYgPSB0ZW1wXG4gICAgICB2YWx1ZSA9IGFycltpXVxuICAgIH1cbiAgfVxuICByZXR1cm4gdmFsdWVcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZUFuZ2xlKHZhbCkge1xuICB3aGlsZSAodmFsIDwgMCkge1xuICAgIHZhbCArPSAyICogTWF0aC5QSVxuICB9XG4gIHdoaWxlICh2YWwgPiAyICogTWF0aC5QSSkge1xuICAgIHZhbCAtPSAyICogTWF0aC5QSVxuICB9XG4gIHJldHVybiB2YWxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBvaW50RnJvbVJhZGlhbFN5c3RlbShhbmdsZSwgbGVuZ3RoLCBjZW50ZXIpIHtcbiAgY2VudGVyID0gY2VudGVyIHx8IG5ldyBQb2ludCgwLCAwKVxuICByZXR1cm4gY2VudGVyLmFkZChuZXcgUG9pbnQobGVuZ3RoICogTWF0aC5jb3MoYW5nbGUpLCBsZW5ndGggKiBNYXRoLnNpbihhbmdsZSkpKVxufVxuIiwiaW1wb3J0IFBvaW50IGZyb20gJy4vZ2VvbWV0cnkvcG9pbnQnXG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gJy4vZ2VvbWV0cnkvcmVjdGFuZ2xlJ1xuaW1wb3J0IHtcbiAgZ2V0UG9pbnRPbkxpbmVCeUxlbmdodCxcbiAgZGlyZWN0Q3Jvc3NpbmcsXG4gIGJvdW5kVG9MaW5lXG59IGZyb20gJy4vZ2VvbWV0cnkvYm91bmRzJ1xuXG5pbXBvcnQge1xuICBnZXRBbmdsZSxcbiAgbm9ybWFsaXplQW5nbGUsXG4gIGJvdW5kQW5nbGUsXG4gIGdldFBvaW50RnJvbVJhZGlhbFN5c3RlbVxufSBmcm9tICcuL2dlb21ldHJ5L2FuZ2xlcydcblxuZXhwb3J0IGNsYXNzIEJvdW5kIHtcbiAgY29uc3RydWN0b3IgKCkge31cblxuICBib3VuZChwb2ludCwgX3NpemUpIHtcbiAgICByZXR1cm4gcG9pbnRcbiAgfVxuXG4gIHJlZnJlc2ggKCkge31cblxuICBzdGF0aWMgYm91bmRpbmcoKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgdGhpcyguLi5hcmd1bWVudHMpXG4gICAgcmV0dXJuIGluc3RhbmNlLmJvdW5kLmJpbmQoaW5zdGFuY2UpXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9SZWN0YW5nbGUgZXh0ZW5kcyBCb3VuZCB7XG4gIGNvbnN0cnVjdG9yKHJlY3RhbmdsZSkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnJlY3RhbmdsZSA9IHJlY3RhbmdsZVxuICB9XG5cbiAgYm91bmQocG9pbnQsIHNpemUpIHtcbiAgICBjb25zdCBjYWxjUG9pbnQgPSBwb2ludC5jbG9uZSgpXG4gICAgY29uc3QgcmVjdFAyID0gdGhpcy5yZWN0YW5nbGUuZ2V0UDMoKVxuXG4gICAgaWYgKHRoaXMucmVjdGFuZ2xlLnBvc2l0aW9uLnggPiBjYWxjUG9pbnQueCkge1xuICAgICAgKGNhbGNQb2ludC54ID0gdGhpcy5yZWN0YW5nbGUucG9zaXRpb24ueClcbiAgICB9XG4gICAgaWYgKHRoaXMucmVjdGFuZ2xlLnBvc2l0aW9uLnkgPiBjYWxjUG9pbnQueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSB0aGlzLnJlY3RhbmdsZS5wb3NpdGlvbi55XG4gICAgfVxuICAgIGlmIChyZWN0UDIueCA8IGNhbGNQb2ludC54ICsgc2l6ZS54KSB7XG4gICAgICBjYWxjUG9pbnQueCA9IHJlY3RQMi54IC0gc2l6ZS54XG4gICAgfVxuICAgIGlmIChyZWN0UDIueSA8IGNhbGNQb2ludC55ICsgc2l6ZS55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHJlY3RQMi55IC0gc2l6ZS55XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhbGNQb2ludFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvRWxlbWVudCBleHRlbmRzIEJvdW5kVG9SZWN0YW5nbGUge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb250YWluZXIpIHtcbiAgICBzdXBlcihSZWN0YW5nbGUuZnJvbUVsZW1lbnQoZWxlbWVudCwgY29udGFpbmVyKSlcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG4gICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXJcbiAgfVxuXG4gIHJlZnJlc2ggKCkge1xuICAgIHRoaXMucmVjdGFuZ2xlID0gUmVjdGFuZ2xlLmZyb21FbGVtZW50KHRoaXMuZWxlbWVudCwgdGhpcy5jb250YWluZXIpXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9MaW5lWCBleHRlbmRzIEJvdW5kIHtcbiAgY29uc3RydWN0b3IoeCwgc3RhcnRZLCBlbmRZKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMueCA9IHhcbiAgICB0aGlzLnN0YXJ0WSA9IHN0YXJ0WVxuICAgIHRoaXMuZW5kWSA9IGVuZFlcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgY2FsY1BvaW50ID0gcG9pbnQuY2xvbmUoKVxuXG4gICAgY2FsY1BvaW50LnggPSB0aGlzLnhcbiAgICBpZiAodGhpcy5zdGFydFkgPiBjYWxjUG9pbnQueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSB0aGlzLnN0YXJ0WVxuICAgIH1cbiAgICBpZiAodGhpcy5lbmRZIDwgY2FsY1BvaW50LnkgKyBzaXplLnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gdGhpcy5lbmRZIC0gc2l6ZS55XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhbGNQb2ludFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvTGluZVkgZXh0ZW5kcyBCb3VuZCB7XG4gIGNvbnN0cnVjdG9yKHksIHN0YXJ0WCwgZW5kWCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnkgPSB5XG4gICAgdGhpcy5zdGFydFggPSBzdGFydFhcbiAgICB0aGlzLmVuZFggPSBlbmRYXG4gIH1cblxuICBib3VuZChwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IGNhbGNQb2ludCA9IHBvaW50LmNsb25lKClcbiAgICBjYWxjUG9pbnQueSA9IHRoaXMueVxuICAgIGlmICh0aGlzLnN0YXJ0WCA+IGNhbGNQb2ludC54KSB7XG4gICAgICBjYWxjUG9pbnQueCA9IHRoaXMuc3RhcnRYXG4gICAgfVxuICAgIGlmICh0aGlzLmVuZFggPCBjYWxjUG9pbnQueCArIHNpemUueCkge1xuICAgICAgY2FsY1BvaW50LnggPSB0aGlzLmVuZFggLSBzaXplLnhcbiAgICB9XG4gICAgcmV0dXJuIGNhbGNQb2ludFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvTGluZSBleHRlbmRzIEJvdW5kIHtcbiAgY29uc3RydWN0b3Ioc3RhcnRQb2ludCwgZW5kUG9pbnQpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5zdGFydFBvaW50ID0gc3RhcnRQb2ludFxuICAgIHRoaXMuZW5kUG9pbnQgPSBlbmRQb2ludFxuICAgIGNvbnN0IGFscGhhID0gTWF0aC5hdGFuMihlbmRQb2ludC55IC0gc3RhcnRQb2ludC55LCBlbmRQb2ludC54IC0gc3RhcnRQb2ludC54KVxuICAgIGNvbnN0IGJldGEgPSBhbHBoYSArIE1hdGguUEkgLyAyXG4gICAgdGhpcy5zb21lSyA9IDEwXG4gICAgdGhpcy5jb3NCZXRhID0gTWF0aC5jb3MoYmV0YSlcbiAgICB0aGlzLnNpbkJldGEgPSBNYXRoLnNpbihiZXRhKVxuICB9XG5cbiAgYm91bmQocG9pbnQsIHNpemUpIHtcbiAgICBjb25zdCBwb2ludDIgPSBuZXcgUG9pbnQoXG4gICAgICBwb2ludC54ICsgdGhpcy5zb21lSyAqIHRoaXMuY29zQmV0YSxcbiAgICAgIHBvaW50LnkgKyB0aGlzLnNvbWVLICogdGhpcy5zaW5CZXRhXG4gICAgKVxuXG4gICAgY29uc3QgbmV3RW5kUG9pbnQgPSBnZXRQb2ludE9uTGluZUJ5TGVuZ2h0KHRoaXMuZW5kUG9pbnQsIHRoaXMuc3RhcnRQb2ludCwgc2l6ZS54KVxuICAgIGNvbnN0IHBvaW50Q3Jvc3NpbmcgPSBkaXJlY3RDcm9zc2luZyh0aGlzLnN0YXJ0UG9pbnQsIHRoaXMuZW5kUG9pbnQsIHBvaW50LCBwb2ludDIpXG5cbiAgICByZXR1cm4gYm91bmRUb0xpbmUodGhpcy5zdGFydFBvaW50LCBuZXdFbmRQb2ludCwgcG9pbnRDcm9zc2luZylcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb0NpcmNsZSBleHRlbmRzIEJvdW5kIHtcbiAgY29uc3RydWN0b3IoY2VudGVyLCByYWRpdXMpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5jZW50ZXIgPSBjZW50ZXJcbiAgICB0aGlzLnJhZGl1cyA9IHJhZGl1c1xuICB9XG5cbiAgYm91bmQocG9pbnQsIF9zaXplKSB7XG4gICAgcmV0dXJuIGdldFBvaW50T25MaW5lQnlMZW5naHQodGhpcy5jZW50ZXIsIHBvaW50LCB0aGlzLnJhZGl1cylcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb0FyYyBleHRlbmRzIEJvdW5kVG9DaXJjbGUge1xuICBjb25zdHJ1Y3RvcihjZW50ZXIsIHJhZGl1cywgc3RhcnRBbmdsZSwgZW5kQW5nbGUpIHtcbiAgICBzdXBlcihjZW50ZXIsIHJhZGl1cylcbiAgICB0aGlzLl9zdGFydEFuZ2xlID0gc3RhcnRBbmdsZVxuICAgIHRoaXMuX2VuZEFuZ2xlID0gZW5kQW5nbGVcbiAgfVxuXG4gIHN0YXJ0QW5nbGUoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGlzLl9zdGFydEFuZ2xlID09PSAnZnVuY3Rpb24nID8gdGhpcy5fc3RhcnRBbmdsZSgpIDogdGhpcy5fc3RhcnRBbmdsZVxuICB9XG5cbiAgZW5kQW5nbGUoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGlzLl9lbmRBbmdsZSA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMuX2VuZEFuZ2xlKCkgOiB0aGlzLl9lbmRBbmdsZVxuICB9XG5cbiAgYm91bmQocG9pbnQsIF9zaXplKSB7XG4gICAgbGV0IGFuZ2xlID0gZ2V0QW5nbGUodGhpcy5jZW50ZXIsIHBvaW50KVxuICAgIGFuZ2xlID0gbm9ybWFsaXplQW5nbGUoYW5nbGUpXG4gICAgYW5nbGUgPSBib3VuZEFuZ2xlKHRoaXMuc3RhcnRBbmdsZSgpLCB0aGlzLmVuZEFuZ2xlKCksIGFuZ2xlKVxuICAgIHJldHVybiBnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oYW5nbGUsIHRoaXMucmFkaXVzLCB0aGlzLmNlbnRlcilcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oYXJyYXksIHZhbCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGFycmF5W2ldID09PSB2YWwpIHtcbiAgICAgIGFycmF5LnNwbGljZShpLCAxKVxuICAgICAgaS0tXG4gICAgfVxuICB9XG4gIHJldHVybiBhcnJheVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmFuZ2Uoc3RhcnQsIHN0b3AsIHN0ZXApIHtcbiAgY29uc3QgcmVzdWx0ID0gW11cbiAgaWYgKHR5cGVvZiBzdG9wID09PSAndW5kZWZpbmVkJykge1xuICAgIHN0b3AgPSBzdGFydFxuICAgIHN0YXJ0ID0gMFxuICB9XG4gIGlmICh0eXBlb2Ygc3RlcCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBzdGVwID0gMVxuICB9XG4gIGlmICgoc3RlcCA+IDAgJiYgc3RhcnQgPj0gc3RvcCkgfHwgKHN0ZXAgPCAwICYmIHN0YXJ0IDw9IHN0b3ApKSB7XG4gICAgcmV0dXJuIFtdXG4gIH1cbiAgZm9yIChsZXQgaSA9IHN0YXJ0OyBzdGVwID4gMCA/IGkgPCBzdG9wIDogaSA+IHN0b3A7IGkgKz0gc3RlcCkge1xuICAgIHJlc3VsdC5wdXNoKGkpXG4gIH1cbiAgcmV0dXJuIHJlc3VsdFxufVxuIiwiaW1wb3J0IFBvaW50IGZyb20gJy4vZ2VvbWV0cnkvcG9pbnQnXG5pbXBvcnQgeyBhZGRQb2ludFRvQm91bmRQb2ludHMgfSBmcm9tICcuL2dlb21ldHJ5L2JvdW5kcydcblxuaW1wb3J0IHtcbiAgaW5kZXhPZk5lYXJlc3RQb2ludCxcbiAgZ2V0RGlzdGFuY2Vcbn0gZnJvbSAnLi9nZW9tZXRyeS9kaXN0YW5jZXMnXG5cbmNsYXNzIEJhc2ljU3RyYXRlZ3kge1xuICBjb25zdHJ1Y3RvcihyZWN0YW5nbGUsIG9wdGlvbnM9e30pIHtcbiAgICB0aGlzLnJlY3RhbmdsZSA9IHJlY3RhbmdsZVxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNcbiAgfVxuXG4gIGdldCBib3VuZFJlY3QgKCkge1xuICAgIHJldHVybiB0eXBlb2YgdGhpcy5yZWN0YW5nbGUgPT09ICdmdW5jdGlvbicgPyB0aGlzLnJlY3RhbmdsZSgpIDogdGhpcy5yZWN0YW5nbGVcbiAgfVxufVxuXG5jbGFzcyBOb3RDcm9zc2luZ1N0cmF0ZWd5IGV4dGVuZHMgQmFzaWNTdHJhdGVneSB7XG4gIHBvc2l0aW9uaW5nIChyZWN0YW5nbGVMaXN0LCBpbmRleGVzT2ZOZXdzKSB7XG4gICAgY29uc3Qgc3RhdGljUmVjdGFuZ2xlSW5kZXhlcyA9IHJlY3RhbmdsZUxpc3QucmVkdWNlKChpbmRleGVzLCBfcmVjdCwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChpbmRleGVzT2ZOZXdzLmluZGV4T2YoaW5kZXgpID09PSAtMSkge1xuICAgICAgICBpbmRleGVzLnB1c2goaW5kZXgpXG4gICAgICB9XG4gICAgICByZXR1cm4gaW5kZXhlc1xuICAgIH0sIFtdKVxuXG4gICAgaW5kZXhlc09mTmV3cy5mb3JFYWNoKChpbmRleCkgPT4ge1xuICAgICAgbGV0IHJlY3QgPSByZWN0YW5nbGVMaXN0W2luZGV4XVxuICAgICAgbGV0IHJlbW92YWJsZSA9IGZhbHNlXG5cbiAgICAgIHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMuZm9yRWFjaCgoaW5kZXhPZlN0YXRpYykgPT4ge1xuICAgICAgICBjb25zdCBzdGF0aWNSZWN0ID0gcmVjdGFuZ2xlTGlzdFtpbmRleE9mU3RhdGljXVxuICAgICAgICByZWN0ID0gc3RhdGljUmVjdC5tb3ZlVG9Cb3VuZChyZWN0KVxuICAgICAgfSlcblxuICAgICAgcmVtb3ZhYmxlID0gc3RhdGljUmVjdGFuZ2xlSW5kZXhlcy5zb21lKChpbmRleE9mU3RhdGljKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YXRpY1JlY3QgPSByZWN0YW5nbGVMaXN0W2luZGV4T2ZTdGF0aWNdXG4gICAgICAgIHJldHVybiAgISFzdGF0aWNSZWN0LmFuZChyZWN0KVxuICAgICAgfSkgfHwgcmVjdC5hbmQodGhpcy5ib3VuZFJlY3QpLmdldFNxdWFyZSgpICE9PSByZWN0LmdldFNxdWFyZSgpXG5cbiAgICAgIGlmIChyZW1vdmFibGUpIHtcbiAgICAgICAgcmVjdC5yZW1vdmFibGUgPSB0cnVlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0aWNSZWN0YW5nbGVJbmRleGVzLnB1c2goaW5kZXgpXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcmVjdGFuZ2xlTGlzdFxuICB9XG5cbiAgc29ydGluZyhvZGxEcmFnZ2FibGVzTGlzdCwgbmV3RHJhZ2dhYmxlcywgaW5kZXhPZk5ld3MpIHtcbiAgICBjb25zdCBkcmFnZ2FibGVzID0gb2RsRHJhZ2dhYmxlc0xpc3QuY29uY2F0KG5ld0RyYWdnYWJsZXMpXG4gICAgbmV3RHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGluZGV4T2ZOZXdzLnB1c2goZHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkpXG4gICAgfSlcbiAgICByZXR1cm4gZHJhZ2dhYmxlc1xuICB9XG59XG5cbmNsYXNzIEZsb2F0TGVmdFN0cmF0ZWd5IGV4dGVuZHMgQmFzaWNTdHJhdGVneSB7XG4gIGNvbnN0cnVjdG9yKHJlY3RhbmdsZSwgb3B0aW9ucz17fSkge1xuICAgIHN1cGVyKHJlY3RhbmdsZSwgb3B0aW9ucylcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHJlbW92YWJsZTogdHJ1ZVxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0aGlzLnJhZGl1cyA9IG9wdGlvbnMucmFkaXVzIHx8IDgwXG5cbiAgICB0aGlzLnBhZGRpbmdUb3BMZWZ0ID0gb3B0aW9ucy5wYWRkaW5nVG9wTGVmdCB8fCBuZXcgUG9pbnQoMCwgMClcbiAgICB0aGlzLnBhZGRpbmdCb3R0b21SaWdodCA9IG9wdGlvbnMucGFkZGluZ0JvdHRvbVJpZ2h0IHx8IG5ldyBQb2ludCgwLCAwKVxuICAgIHRoaXMueUdhcEJldHdlZW5EcmFnZ2FibGVzID0gb3B0aW9ucy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgfHwgMFxuXG4gICAgdGhpcy5nZXREaXN0YW5jZSA9IG9wdGlvbnMuZ2V0RGlzdGFuY2UgfHwgZ2V0RGlzdGFuY2VcbiAgICB0aGlzLmdldFBvc2l0aW9uID0gb3B0aW9ucy5nZXRQb3NpdGlvbiB8fCAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnBvc2l0aW9uKVxuICB9XG5cbiAgcG9zaXRpb25pbmcocmVjdGFuZ2xlTGlzdCwgX2luZGV4ZXNPZk5ld3MpIHtcbiAgICBjb25zdCBib3VuZFJlY3QgPSB0aGlzLmJvdW5kUmVjdFxuICAgIGNvbnN0IHJlY3RQMiA9IGJvdW5kUmVjdC5nZXRQMigpXG4gICAgbGV0IGJvdW5kYXJ5UG9pbnRzID0gW2JvdW5kUmVjdC5wb3NpdGlvbl1cblxuICAgIHJlY3RhbmdsZUxpc3QuZm9yRWFjaCgocmVjdCwgcmVjdEluZGV4KSA9PiB7XG4gICAgICBsZXQgcG9zaXRpb24sIGlzVmFsaWQgPSBmYWxzZVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib3VuZGFyeVBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBwb3NpdGlvbiA9IG5ldyBQb2ludChcbiAgICAgICAgICBib3VuZGFyeVBvaW50c1tpXS54ICsgdGhpcy5wYWRkaW5nVG9wTGVmdC54LFxuICAgICAgICAgIGkgPiAwID8gKGJvdW5kYXJ5UG9pbnRzW2kgLSAxXS55ICsgdGhpcy55R2FwQmV0d2VlbkRyYWdnYWJsZXMpIDogKGJvdW5kUmVjdC5wb3NpdGlvbi55ICsgdGhpcy5wYWRkaW5nVG9wTGVmdC55KVxuICAgICAgICApXG5cbiAgICAgICAgaXNWYWxpZCA9IChwb3NpdGlvbi54ICsgcmVjdC5zaXplLnggPCByZWN0UDIueClcblxuICAgICAgICBpZiAoaXNWYWxpZCkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICAgIHBvc2l0aW9uID0gbmV3IFBvaW50KFxuICAgICAgICAgIGJvdW5kUmVjdC5wb3NpdGlvbi54ICsgdGhpcy5wYWRkaW5nVG9wTGVmdC54LFxuICAgICAgICAgIGJvdW5kYXJ5UG9pbnRzW2JvdW5kYXJ5UG9pbnRzLmxlbmd0aCAtIDFdLnkgKyAocmVjdEluZGV4ID4gMCA/IHRoaXMueUdhcEJldHdlZW5EcmFnZ2FibGVzIDogdGhpcy5wYWRkaW5nVG9wTGVmdC55KVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHJlY3QucG9zaXRpb24gPSBwb3NpdGlvblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZW1vdmFibGUgJiYgcmVjdC5nZXRQMygpLnkgPiBib3VuZFJlY3QuZ2V0UDMoKS55KSB7XG4gICAgICAgIHJlY3QucmVtb3ZhYmxlID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBib3VuZGFyeVBvaW50cyA9IGFkZFBvaW50VG9Cb3VuZFBvaW50cyhib3VuZGFyeVBvaW50cywgcmVjdC5nZXRQMygpLmFkZCh0aGlzLnBhZGRpbmdCb3R0b21SaWdodCkpXG4gICAgfSlcbiAgICByZXR1cm4gcmVjdGFuZ2xlTGlzdFxuICB9XG5cbiAgc29ydGluZyhvZGxEcmFnZ2FibGVzTGlzdCwgbmV3RHJhZ2dhYmxlcywgaW5kZXhPZk5ld3MpIHtcbiAgICBjb25zdCBuZXdMaXN0ID0gb2RsRHJhZ2dhYmxlc0xpc3QuY29uY2F0KClcbiAgICBjb25zdCBsaXN0T2xkUG9zaXRpb24gPSBvZGxEcmFnZ2FibGVzTGlzdC5tYXAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLmdldFBvc2l0aW9uKCkpXG4gICAgbmV3RHJhZ2dhYmxlcy5mb3JFYWNoKChuZXdEcmFnZ2FibGUpID0+IHtcbiAgICAgIGxldCBpbmRleCA9IGluZGV4T2ZOZWFyZXN0UG9pbnQobGlzdE9sZFBvc2l0aW9uLCB0aGlzLmdldFBvc2l0aW9uKG5ld0RyYWdnYWJsZSksIHRoaXMucmFkaXVzLCB0aGlzLmdldERpc3RhbmNlKVxuICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICBpbmRleCA9IG5ld0xpc3QubGVuZ3RoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbmRleCA9IG5ld0xpc3QuaW5kZXhPZihvZGxEcmFnZ2FibGVzTGlzdFtpbmRleF0pXG4gICAgICB9XG4gICAgICBuZXdMaXN0LnNwbGljZShpbmRleCwgMCwgbmV3RHJhZ2dhYmxlKVxuICAgIH0pXG4gICAgbmV3RHJhZ2dhYmxlcy5mb3JFYWNoKChuZXdEcmFnZ2FibGUpID0+IHtcbiAgICAgIGluZGV4T2ZOZXdzLnB1c2gobmV3TGlzdC5pbmRleE9mKG5ld0RyYWdnYWJsZSkpXG4gICAgfSlcbiAgICByZXR1cm4gbmV3TGlzdFxuICB9XG59XG5cbmNsYXNzIEZsb2F0UmlnaHRTdHJhdGVneSBleHRlbmRzIEZsb2F0TGVmdFN0cmF0ZWd5IHtcbiAgY29uc3RydWN0b3IocmVjdGFuZ2xlLCBvcHRpb25zPXt9KSB7XG4gICAgc3VwZXIocmVjdGFuZ2xlLCBvcHRpb25zKVxuXG4gICAgdGhpcy5wYWRkaW5nVG9wUmlnaHQgPSBvcHRpb25zLnBhZGRpbmdUb3BSaWdodCB8fCBuZXcgUG9pbnQoNSwgNSlcbiAgICB0aGlzLnBhZGRpbmdCb3R0b21MZWZ0ID0gb3B0aW9ucy5wYWRkaW5nQm90dG9tTGVmdCB8fCBuZXcgUG9pbnQoMCwgMClcbiAgICB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyA9IG9wdGlvbnMueUdhcEJldHdlZW5EcmFnZ2FibGVzIHx8IDBcblxuICAgIHRoaXMucGFkZGluZ0JvdHRvbU5lZ0xlZnQgPSBuZXcgUG9pbnQoLXRoaXMucGFkZGluZ0JvdHRvbUxlZnQueCwgdGhpcy5wYWRkaW5nQm90dG9tTGVmdC55KVxuICB9XG5cbiAgcG9zaXRpb25pbmcocmVjdGFuZ2xlTGlzdCwgX2luZGV4ZXNPZk5ld3MpIHtcbiAgICBjb25zdCBib3VuZFJlY3QgPSB0aGlzLmJvdW5kUmVjdFxuICAgIGxldCBib3VuZGFyeVBvaW50cyA9IFtib3VuZFJlY3QuZ2V0UDIoKV1cblxuICAgIHJlY3RhbmdsZUxpc3QuZm9yRWFjaCgocmVjdCwgcmVjdEluZGV4KSA9PiB7XG4gICAgICBsZXQgcG9zaXRpb24sIGlzVmFsaWQgPSBmYWxzZVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib3VuZGFyeVBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBwb3NpdGlvbiA9IG5ldyBQb2ludChcbiAgICAgICAgICBib3VuZGFyeVBvaW50c1tpXS54IC0gcmVjdC5zaXplLnggLSB0aGlzLnBhZGRpbmdUb3BSaWdodC54LFxuICAgICAgICAgIGkgPiAwID8gKGJvdW5kYXJ5UG9pbnRzW2kgLSAxXS55ICsgdGhpcy55R2FwQmV0d2VlbkRyYWdnYWJsZXMpIDogKGJvdW5kUmVjdC5wb3NpdGlvbi55ICsgdGhpcy5wYWRkaW5nVG9wUmlnaHQueSlcbiAgICAgICAgKVxuXG4gICAgICAgIGlzVmFsaWQgPSAocG9zaXRpb24ueCA+IHJlY3QucG9zaXRpb24ueClcbiAgICAgICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgcG9zaXRpb24gPSBuZXcgUG9pbnQoXG4gICAgICAgICAgYm91bmRSZWN0LmdldFAyKCkueCAgLSByZWN0LnNpemUueCAtIHRoaXMucGFkZGluZ1RvcFJpZ2h0LngsXG4gICAgICAgICAgYm91bmRhcnlQb2ludHNbYm91bmRhcnlQb2ludHMubGVuZ3RoIC0gMV0ueSArIChyZWN0SW5kZXggPiAwID8gdGhpcy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgOiB0aGlzLnBhZGRpbmdUb3BSaWdodC55KVxuICAgICAgICApXG4gICAgICB9XG4gICAgICByZWN0LnBvc2l0aW9uID0gcG9zaXRpb25cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucmVtb3ZhYmxlICYmIHJlY3QuZ2V0UDQoKS55ID4gYm91bmRSZWN0LmdldFA0KCkueSkge1xuICAgICAgICByZWN0LnJlbW92YWJsZSA9IHRydWVcbiAgICAgIH1cbiAgICAgIGJvdW5kYXJ5UG9pbnRzID0gYWRkUG9pbnRUb0JvdW5kUG9pbnRzKGJvdW5kYXJ5UG9pbnRzLCByZWN0LmdldFA0KCkuYWRkKHRoaXMucGFkZGluZ0JvdHRvbU5lZ0xlZnQpLCB0cnVlKVxuICAgIH0pXG4gICAgcmV0dXJuIHJlY3RhbmdsZUxpc3RcbiAgfVxufVxuXG5leHBvcnQgeyBOb3RDcm9zc2luZ1N0cmF0ZWd5LCBGbG9hdExlZnRTdHJhdGVneSwgRmxvYXRSaWdodFN0cmF0ZWd5IH1cbiIsImltcG9ydCByYW5nZSBmcm9tICcuL3V0aWxzL3JhbmdlLmpzJ1xuaW1wb3J0IHJlbW92ZUl0ZW0gZnJvbSAnLi91dGlscy9yZW1vdmUtYXJyYXktaXRlbSdcbmltcG9ydCBnZXREZWZhdWx0Q29udGFpbmVyIGZyb20gJy4vdXRpbHMvZ2V0LWRlZmF1bHQtY29udGFpbmVyJ1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50RW1pdHRlcidcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSAnLi9nZW9tZXRyeS9yZWN0YW5nbGUnXG5pbXBvcnQgeyB0cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5IH0gZnJvbSAnLi9nZW9tZXRyeS9kaXN0YW5jZXMnXG5pbXBvcnQgeyBzY29wZXMsIGRlZmF1bHRTY29wZSB9IGZyb20gJy4vc2NvcGUnXG5cbmltcG9ydCB7IEZsb2F0TGVmdFN0cmF0ZWd5IH0gZnJvbSAnLi9wb3NpdGlvbmluZydcbmltcG9ydCB7IEJvdW5kVG9FbGVtZW50IH0gZnJvbSAnLi9ib3VuZGluZydcblxuY29uc3QgYWRkVG9EZWZhdWx0U2NvcGUgPSBmdW5jdGlvbih0YXJnZXQpIHtcbiAgZGVmYXVsdFNjb3BlLmFkZFRhcmdldCh0YXJnZXQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhcmdldCBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGRyYWdnYWJsZXMsIG9wdGlvbnMgPSB7fSkge1xuICAgIHN1cGVyKG9wdGlvbnMpXG4gICAgY29uc3QgdGFyZ2V0ID0gdGhpc1xuXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICB0aW1lRW5kOiAyMDAsXG4gICAgICB0aW1lRXhjYW5nZTogNDAwXG4gICAgfSwgb3B0aW9ucylcblxuICAgIHRoaXMucG9zaXRpb25pbmdTdHJhdGVneSA9IG9wdGlvbnMuc3RyYXRlZ3kgfHwgbmV3IEZsb2F0TGVmdFN0cmF0ZWd5KFxuICAgICAgdGhpcy5nZXRSZWN0YW5nbGUuYmluZCh0aGlzKSxcbiAgICAgIHtcbiAgICAgICAgcmFkaXVzOiA4MCxcbiAgICAgICAgZ2V0RGlzdGFuY2U6IHRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3RvcnkoeyB4OiAxLCB5OiA0IH0pLFxuICAgICAgICByZW1vdmFibGU6IHRydWVcbiAgICAgIH1cbiAgICApXG5cbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG4gICAgZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS50YXJnZXRzLnB1c2godGFyZ2V0KSlcbiAgICB0aGlzLmRyYWdnYWJsZXMgPSBkcmFnZ2FibGVzXG5cbiAgICBUYXJnZXQuZW1pdHRlci5lbWl0KCd0YXJnZXQ6Y3JlYXRlJywgdGhpcylcblxuICAgIHRoaXMuc3RhcnRCb3VuZGluZygpXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIHN0YXJ0Qm91bmRpbmcoKSB7XG4gICAgdGhpcy5ib3VuZCA9IHRoaXMub3B0aW9ucy5ib3VuZCB8fCBCb3VuZFRvRWxlbWVudC5ib3VuZGluZyh0aGlzLmVsZW1lbnQpXG4gIH1cblxuICBwb3NpdGlvbmluZyAoZHJhZ2dhYmxlcywgaW5kZXhlc09mTmV3KSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25pbmdTdHJhdGVneS5wb3NpdGlvbmluZyhkcmFnZ2FibGVzLCBpbmRleGVzT2ZOZXcpXG4gIH1cblxuICBzb3J0aW5nIChvbGREcmFnZ2FibGVzLCBuZXdEcmFnZ2FibGVzLCBpbmRleE9mTmV3cykge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uaW5nU3RyYXRlZ3kuc29ydGluZyhvbGREcmFnZ2FibGVzLCBuZXdEcmFnZ2FibGVzLCBpbmRleE9mTmV3cylcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgbGV0IHJlY3RhbmdsZXMsIGluZGV4ZXNPZk5ld1xuXG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMgPSB0aGlzLmRyYWdnYWJsZXMuZmlsdGVyKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGxldCBlbGVtZW50ID0gZHJhZ2dhYmxlLmVsZW1lbnQucGFyZW50Tm9kZVxuICAgICAgd2hpbGUgKGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQgPT09IHRoaXMuZWxlbWVudCkge1xuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfSlcblxuICAgIGlmICh0aGlzLmlubmVyRHJhZ2dhYmxlcy5sZW5ndGgpIHtcbiAgICAgIGluZGV4ZXNPZk5ldyA9IHJhbmdlKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmxlbmd0aClcbiAgICAgIHJlY3RhbmdsZXMgPSB0aGlzLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICAgIH0pLCBpbmRleGVzT2ZOZXcpXG4gICAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIGluZGV4ZXNPZk5ldylcbiAgICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gdGhpcy5lbWl0KCd0YXJnZXQ6YWRkJywgZHJhZ2dhYmxlKSlcbiAgICB9XG4gIH1cblxuICBnZXRSZWN0YW5nbGUoKSB7XG4gICAgcmV0dXJuIFJlY3RhbmdsZS5mcm9tRWxlbWVudChcbiAgICAgIHRoaXMuZWxlbWVudCxcbiAgICAgIHRoaXMuY29udGFpbmVyLFxuICAgICAgdGhpcy5vcHRpb25zLmlzQ29udGVudEJveFNpemUsXG4gICAgICB0cnVlXG4gICAgKVxuICB9XG5cbiAgY2F0Y2hEcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5jYXRjaERyYWdnYWJsZSkge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5jYXRjaERyYWdnYWJsZSh0aGlzLCBkcmFnZ2FibGUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRhcmdldFJlY3RhbmdsZSA9IHRoaXMuZ2V0UmVjdGFuZ2xlKClcbiAgICAgIGNvbnN0IGRyYWdnYWJsZVNxdWFyZSA9IGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKS5nZXRTcXVhcmUoKVxuXG4gICAgICByZXR1cm4gZHJhZ2dhYmxlU3F1YXJlIDwgdGFyZ2V0UmVjdGFuZ2xlLmdldFNxdWFyZSgpXG4gICAgICAgICAgICAgICYmIHRhcmdldFJlY3RhbmdsZS5pbmNsdWRlUG9pbnQoZHJhZ2dhYmxlLmdldENlbnRlcigpKVxuICAgIH1cbiAgfVxuXG4gIGdldFBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFJlY3RhbmdsZSgpLnBvc2l0aW9uXG4gIH1cblxuICBnZXRTaXplKCkge1xuICAgIHJldHVybiB0aGlzLmdldFJlY3RhbmdsZSgpLnNpemVcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgc2NvcGVzLmZvckVhY2goKHNjb3BlKSA9PiByZW1vdmVJdGVtKHNjb3BlLnRhcmdldHMsIHRoaXMpKVxuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBbXSlcbiAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIFtdLCAwKVxuICB9XG5cbiAgb25FbmQoZHJhZ2dhYmxlKSB7XG4gICAgY29uc3QgbmV3RHJhZ2dhYmxlc0luZGV4ID0gW11cblxuICAgIGlmICh0aGlzLmdldFJlY3RhbmdsZSgpLmluY2x1ZGVQb2ludChkcmFnZ2FibGUuZ2V0Q2VudGVyKCkpKSB7XG4gICAgICBkcmFnZ2FibGUucG9zaXRpb24gPSB0aGlzLmJvdW5kKGRyYWdnYWJsZS5wb3NpdGlvbiwgZHJhZ2dhYmxlLmdldFNpemUoKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgdGhpcy5lbWl0KCd0YXJnZXQ6YmVmb3JlQWRkJywgZHJhZ2dhYmxlKVxuXG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMgPSB0aGlzLnNvcnRpbmcodGhpcy5pbm5lckRyYWdnYWJsZXMsIFtkcmFnZ2FibGVdLCBuZXdEcmFnZ2FibGVzSW5kZXgpXG4gICAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgbmV3RHJhZ2dhYmxlc0luZGV4KVxuXG4gICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBuZXdEcmFnZ2FibGVzSW5kZXgpXG4gICAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTEpIHtcbiAgICAgIHRoaXMuYWRkUmVtb3ZlT25Nb3ZlKGRyYWdnYWJsZSlcbiAgICB9XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIHNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIGluZGV4ZXNPZk5ldywgdGltZSkge1xuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnNsaWNlKDApLmZvckVhY2goKGRyYWdnYWJsZSwgaSkgPT4ge1xuICAgICAgY29uc3QgcmVjdCA9IHJlY3RhbmdsZXNbaV0sXG4gICAgICAgIHRpbWVFbmQgPSB0aW1lIHx8IHRpbWUgPT09IDAgPyB0aW1lIDogaW5kZXhlc09mTmV3LmluZGV4T2YoaSkgIT09IC0xID8gdGhpcy5vcHRpb25zLnRpbWVFbmQgOiB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2VcblxuICAgICAgaWYgKHJlY3QucmVtb3ZhYmxlKSB7XG4gICAgICAgIGRyYWdnYWJsZS5tb3ZlKGRyYWdnYWJsZS5pbml0aWFsUG9zaXRpb24sIHRpbWVFbmQsIHRydWUsIHRydWUpXG4gICAgICAgIHJlbW92ZUl0ZW0odGhpcy5pbm5lckRyYWdnYWJsZXMsIGRyYWdnYWJsZSlcbiAgICAgICAgdGhpcy5lbWl0KCd0YXJnZXQ6cmVtb3ZlJywgZHJhZ2dhYmxlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZHJhZ2dhYmxlLm1vdmUocmVjdC5wb3NpdGlvbiwgdGltZUVuZCwgdHJ1ZSwgdHJ1ZSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgYWRkKGRyYWdnYWJsZSwgdGltZSkge1xuICAgIGNvbnN0IG5ld0RyYWdnYWJsZXNJbmRleCA9IHRoaXMuaW5uZXJEcmFnZ2FibGVzLmxlbmd0aFxuXG4gICAgdGhpcy5lbWl0KCd0YXJnZXQ6YmVmb3JlQWRkJywgZHJhZ2dhYmxlKVxuXG4gICAgdGhpcy5wdXNoSW5uZXJEcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICAgIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgfSksIG5ld0RyYWdnYWJsZXNJbmRleCwgZHJhZ2dhYmxlKVxuXG4gICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBbbmV3RHJhZ2dhYmxlc0luZGV4XSwgdGltZSB8fCAwKVxuICAgIGlmICh0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkgIT09IC0xKSB7XG4gICAgICB0aGlzLmFkZFJlbW92ZU9uTW92ZShkcmFnZ2FibGUpXG4gICAgfVxuICB9XG5cbiAgcHVzaElubmVyRHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIGlmICh0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSk9PT0tMSkge1xuICAgICAgdGhpcy5pbm5lckRyYWdnYWJsZXMucHVzaChkcmFnZ2FibGUpXG4gICAgfVxuICB9XG5cbiAgYWRkUmVtb3ZlT25Nb3ZlKGRyYWdnYWJsZSkge1xuICAgIGRyYWdnYWJsZS5vbignZHJhZzptb3ZlJywgdGhpcy5yZW1vdmVIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgdGhpcy5yZW1vdmUoZHJhZ2dhYmxlKVxuICAgIH0pXG5cbiAgICB0aGlzLmVtaXQoJ3RhcmdldDphZGQnLCBkcmFnZ2FibGUpXG4gIH1cblxuICByZW1vdmUoZHJhZ2dhYmxlKSB7XG4gICAgZHJhZ2dhYmxlLnVuc3Vic2NyaWJlKCdkcmFnOm1vdmUnLCB0aGlzLnJlbW92ZUhhbmRsZXIpXG5cbiAgICBjb25zdCBpbmRleCA9IHRoaXMuaW5uZXJEcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKVxuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnNwbGljZShpbmRleCwgMSlcblxuICAgIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgfSksIFtdKVxuXG4gICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBbXSlcbiAgICB0aGlzLmVtaXQoJ3RhcmdldDpyZW1vdmUnLCBkcmFnZ2FibGUpXG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5tb3ZlKGRyYWdnYWJsZS5pbml0aWFsUG9zaXRpb24sIDAsIHRydWUsIHRydWUpXG4gICAgICB0aGlzLmVtaXQoJ3RhcmdldDpyZW1vdmUnLCBkcmFnZ2FibGUpXG4gICAgfSlcbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcyA9IFtdXG4gIH1cblxuICBnZXRTb3J0ZWREcmFnZ2FibGVzKCkge1xuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnNsaWNlKClcbiAgfVxuXG4gIGdldCBjb250YWluZXIoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9jb250YWluZXIgPSB0aGlzLl9jb250YWluZXIgfHwgdGhpcy5vcHRpb25zLmNvbnRhaW5lciB8fCB0aGlzLm9wdGlvbnMucGFyZW50IHx8IGdldERlZmF1bHRDb250YWluZXIodGhpcy5lbGVtZW50KSlcbiAgfVxufVxuXG5UYXJnZXQuZW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuVGFyZ2V0LmVtaXR0ZXIub24oJ3RhcmdldDpjcmVhdGUnLCBhZGRUb0RlZmF1bHRTY29wZSlcbiIsImltcG9ydCByZW1vdmVJdGVtIGZyb20gJy4vdXRpbHMvcmVtb3ZlLWFycmF5LWl0ZW0nXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnRFbWl0dGVyJ1xuaW1wb3J0IERyYWdnYWJsZSBmcm9tICcuL2RyYWdnYWJsZSdcbmltcG9ydCBUYXJnZXQgZnJvbSAnLi90YXJnZXQnXG5cbmNvbnN0IHNjb3BlcyA9IFtdXG5cbmNsYXNzIFNjb3BlIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoZHJhZ2dhYmxlcywgdGFyZ2V0cywgb3B0aW9ucz17fSkge1xuICAgIHN1cGVyKG9wdGlvbnMpXG4gICAgc2NvcGVzLmZvckVhY2goKHNjb3BlKSA9PiB7XG4gICAgICBpZiAoZHJhZ2dhYmxlcykge1xuICAgICAgICBkcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgICAgIHJlbW92ZUl0ZW0oc2NvcGUuZHJhZ2dhYmxlcywgZHJhZ2dhYmxlKVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICBpZiAodGFyZ2V0cykge1xuICAgICAgICB0YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4ge1xuICAgICAgICAgIHJlbW92ZUl0ZW0oc2NvcGUudGFyZ2V0cywgdGFyZ2V0KVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLmRyYWdnYWJsZXMgPSBkcmFnZ2FibGVzIHx8IFtdXG4gICAgdGhpcy50YXJnZXRzID0gdGFyZ2V0cyB8fCBbXVxuICAgIHNjb3Blcy5wdXNoKHRoaXMpXG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgdGltZUVuZDogKG9wdGlvbnMudGltZUVuZCkgfHwgNDAwXG4gICAgfVxuXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLmRyYWdFbmRBY3Rpb24gPSAoKSA9PiB0aGlzLm9uRW5kKGRyYWdnYWJsZSlcbiAgICB9KVxuICB9XG5cbiAgYWRkRHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5wdXNoKGRyYWdnYWJsZSlcbiAgICBkcmFnZ2FibGUuZHJhZ0VuZEFjdGlvbiA9ICgpID0+IHRoaXMub25FbmQoZHJhZ2dhYmxlKVxuICB9XG5cbiAgYWRkVGFyZ2V0KHRhcmdldCkge1xuICAgIHRoaXMudGFyZ2V0cy5wdXNoKHRhcmdldClcbiAgfVxuXG4gIG9uRW5kKGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IHNob3RUYXJnZXRzID0gdGhpcy50YXJnZXRzLmZpbHRlcigodGFyZ2V0KSA9PiB7XG4gICAgICByZXR1cm4gdGFyZ2V0LmRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMVxuICAgIH0pLmZpbHRlcigodGFyZ2V0KSA9PiB7XG4gICAgICByZXR1cm4gdGFyZ2V0LmNhdGNoRHJhZ2dhYmxlKGRyYWdnYWJsZSlcbiAgICB9KS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICByZXR1cm4gYS5nZXRSZWN0YW5nbGUoKS5nZXRTcXVhcmUoKSAtIGIuZ2V0UmVjdGFuZ2xlKCkuZ2V0U3F1YXJlKClcbiAgICB9KVxuXG4gICAgaWYgKHNob3RUYXJnZXRzLmxlbmd0aCkge1xuICAgICAgc2hvdFRhcmdldHNbMF0ub25FbmQoZHJhZ2dhYmxlKVxuICAgIH0gZWxzZSBpZiAoZHJhZ2dhYmxlLnRhcmdldHMubGVuZ3RoKSB7XG4gICAgICBkcmFnZ2FibGUucGluUG9zaXRpb24oZHJhZ2dhYmxlLmluaXRpYWxQb3NpdGlvbiwgdGhpcy5vcHRpb25zLnRpbWVFbmQpXG4gICAgfVxuXG4gICAgdGhpcy5lbWl0KCdzY29wZTpjaGFuZ2UnKVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy50YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4gdGFyZ2V0LnJlc2V0KCkpXG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5yZWZyZXNoKCkpXG4gICAgdGhpcy50YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4gdGFyZ2V0LnJlZnJlc2goKSlcbiAgfVxuXG4gIGdldCBwb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0cy5tYXAoKHRhcmdldCkgPT4ge1xuICAgICAgcmV0dXJuIHRhcmdldC5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHRoaXMuZHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkpXG4gICAgfSlcbiAgfVxuXG4gIHNldCBwb3NpdGlvbnMocG9zaXRpb25zKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9ICd3cm9uZyBhcnJheSBsZW5ndGgnXG4gICAgaWYgKHBvc2l0aW9ucy5sZW5ndGggPT09IHRoaXMudGFyZ2V0cy5sZW5ndGgpIHtcbiAgICAgIHRoaXMudGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHRhcmdldC5yZXNldCgpKVxuXG4gICAgICBwb3NpdGlvbnMuZm9yRWFjaCgodGFyZ2V0SW5kZXhlcywgaSkgPT4ge1xuICAgICAgICB0YXJnZXRJbmRleGVzLmZvckVhY2goKGluZGV4KSA9PiB7XG4gICAgICAgICAgdGhpcy50YXJnZXRzW2ldLmFkZCh0aGlzLmRyYWdnYWJsZXNbaW5kZXhdKVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbWVzc2FnZVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBkZWZhdWx0U2NvcGUgPSBuZXcgU2NvcGUoKVxuXG5mdW5jdGlvbiBzY29wZShmbikge1xuICBjb25zdCBjdXJyZW50U2NvcGUgPSBuZXcgU2NvcGUoKVxuXG4gIGNvbnN0IGFkZERyYWdnYWJsZVRvU2NvcGUgPSBmdW5jdGlvbihkcmFnZ2FibGUpIHtcbiAgICBjdXJyZW50U2NvcGUuYWRkRHJhZ2dhYmxlKGRyYWdnYWJsZSlcbiAgICBEcmFnZ2FibGUuZW1pdHRlci5pbnRlcnJ1cHQoKVxuICB9XG5cbiAgY29uc3QgYWRkVGFyZ2V0VG9TY29wZSA9IGZ1bmN0aW9uKHRhcmdldCkge1xuICAgIGN1cnJlbnRTY29wZS5hZGRUYXJnZXQodGFyZ2V0KVxuICAgIERyYWdnYWJsZS5lbWl0dGVyLmludGVycnVwdCgpXG4gIH1cblxuICBEcmFnZ2FibGUuZW1pdHRlci5wcmVwZW5kT24oJ2RyYWdnYWJsZTpjcmVhdGUnLCBhZGREcmFnZ2FibGVUb1Njb3BlKVxuICBUYXJnZXQuZW1pdHRlci5wcmVwZW5kT24oJ3RhcmdldDpjcmVhdGUnLCBhZGRUYXJnZXRUb1Njb3BlKVxuICBmbi5jYWxsKClcbiAgRHJhZ2dhYmxlLmVtaXR0ZXIudW5zdWJzY3JpYmUoJ2RyYWdnYWJsZTpjcmVhdGUnLCBhZGREcmFnZ2FibGVUb1Njb3BlKVxuICBUYXJnZXQuZW1pdHRlci51bnN1YnNjcmliZSgndGFyZ2V0OmNyZWF0ZScsIGFkZFRhcmdldFRvU2NvcGUpXG4gIHJldHVybiBjdXJyZW50U2NvcGVcbn1cblxuZXhwb3J0IHsgc2NvcGVzLCBkZWZhdWx0U2NvcGUsIFNjb3BlLCBzY29wZSB9XG4iLCJpbXBvcnQgeyBhZGRDbGFzcywgcmVtb3ZlQ2xhc3MgfSBmcm9tICcuL3V0aWxzL2NsYXNzZXMnXG5pbXBvcnQgZ2V0RGVmYXVsdENvbnRhaW5lciBmcm9tICcuL3V0aWxzL2dldC1kZWZhdWx0LWNvbnRhaW5lcidcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudEVtaXR0ZXInXG5pbXBvcnQgZ2V0U3R5bGVQcm9wZXJ0eSBmcm9tICdkZXNhbmRyby1nZXQtc3R5bGUtcHJvcGVydHknXG5pbXBvcnQgeyBCb3VuZFRvRWxlbWVudCB9IGZyb20gJy4vYm91bmRpbmcnXG5pbXBvcnQgUG9pbnQgZnJvbSAnLi9nZW9tZXRyeS9wb2ludCdcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSAnLi9nZW9tZXRyeS9yZWN0YW5nbGUnXG5pbXBvcnQgeyBkZWZhdWx0U2NvcGUgfSBmcm9tICcuL3Njb3BlJ1xuaW1wb3J0IGlzU3VwcG9ydFBhc3NpdmVFdmVudHMgZnJvbSAnLi91dGlscy9pcy1zdXBwb3J0LXBhc3NpdmUtZXZlbnRzJ1xuXG5jb25zdCBpc1RvdWNoID0gJ29udG91Y2hzdGFydCcgaW4gd2luZG93XG5jb25zdCBtb3VzZUV2ZW50cyA9IHtcbiAgc3RhcnQ6ICdtb3VzZWRvd24nLFxuICBtb3ZlOiAnbW91c2Vtb3ZlJyxcbiAgZW5kOiAnbW91c2V1cCdcbn1cbmNvbnN0IHRvdWNoRXZlbnRzID0ge1xuICBzdGFydDogJ3RvdWNoc3RhcnQnLFxuICBtb3ZlOiAndG91Y2htb3ZlJyxcbiAgZW5kOiAndG91Y2hlbmQnXG59XG5jb25zdCBkcmFnZ2FibGVzID0gW11cbmNvbnN0IHRyYW5zZm9ybVByb3BlcnR5ID0gZ2V0U3R5bGVQcm9wZXJ0eSgndHJhbnNmb3JtJylcbmNvbnN0IHRyYW5zaXRpb25Qcm9wZXJ0eSA9IGdldFN0eWxlUHJvcGVydHkoJ3RyYW5zaXRpb24nKVxuXG5mdW5jdGlvbiBnZXRUb3VjaEJ5SUQoZWxlbWVudCwgdG91Y2hJZCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnQuY2hhbmdlZFRvdWNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZWxlbWVudC5jaGFuZ2VkVG91Y2hlc1tpXS5pZGVudGlmaWVyID09PSB0b3VjaElkKSB7XG4gICAgICByZXR1cm4gZWxlbWVudC5jaGFuZ2VkVG91Y2hlc1tpXVxuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cblxuZnVuY3Rpb24gcHJldmVudERvdWJsZUluaXQoZHJhZ2dhYmxlKSB7XG4gIGNvbnN0IG1lc3NhZ2UgPSBcImZvciB0aGlzIGVsZW1lbnQgRHJhZ2VlLkRyYWdnYWJsZSBpcyBhbHJlYWR5IGV4aXN0LCBkb24ndCBjcmVhdGUgaXQgdHdpY2UgXCJcbiAgaWYgKGRyYWdnYWJsZXMuc29tZSgoZXhpc3RpbmcpID0+IGRyYWdnYWJsZS5lbGVtZW50ID09PSBleGlzdGluZy5lbGVtZW50KSkge1xuICAgIHRocm93IG1lc3NhZ2VcbiAgfVxuICBkcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxufVxuXG5mdW5jdGlvbiBhZGRUb0RlZmF1bHRTY29wZShkcmFnZ2FibGUpIHtcbiAgZGVmYXVsdFNjb3BlLmFkZERyYWdnYWJsZShkcmFnZ2FibGUpXG59XG5cbmZ1bmN0aW9uIGNvcHlTdHlsZXMoc291cmNlLCBkZXN0aW5hdGlvbikge1xuICBjb25zdCBjcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHNvdXJjZSlcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qga2V5ID0gY3NbaV1cbiAgICBpZiAoKGtleS5pbmRleE9mKCd0cmFuc2l0aW9uJykgPCAwKSAmJiAoa2V5LmluZGV4T2YoJ3RyYW5zZm9ybScpIDwgMCkpIHtcbiAgICAgIGRlc3RpbmF0aW9uLnN0eWxlW2tleV0gPSBjc1trZXldXG4gICAgfVxuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzb3VyY2UuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICBjb3B5U3R5bGVzKHNvdXJjZS5jaGlsZHJlbltpXSwgZGVzdGluYXRpb24uY2hpbGRyZW5baV0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhZ2dhYmxlIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgb3B0aW9ucz17fSkge1xuICAgIHN1cGVyKG9wdGlvbnMpXG4gICAgdGhpcy50YXJnZXRzID0gW11cbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIHByZXZlbnREb3VibGVJbml0KHRoaXMpXG4gICAgRHJhZ2dhYmxlLmVtaXR0ZXIuZW1pdCgnZHJhZ2dhYmxlOmNyZWF0ZScsIHRoaXMpXG4gICAgdGhpcy5fZW5hYmxlID0gdHJ1ZVxuICAgIHRoaXMuc3RhcnRCb3VuZGluZygpXG4gICAgdGhpcy5zdGFydFBvc2l0aW9uaW5nKClcbiAgICB0aGlzLnN0YXJ0TGlzdGVuaW5nKClcbiAgfVxuXG4gIHN0YXJ0Qm91bmRpbmcoKSB7XG4gICAgdGhpcy5ib3VuZCA9IHRoaXMub3B0aW9ucy5ib3VuZCB8fCBCb3VuZFRvRWxlbWVudC5ib3VuZGluZyh0aGlzLmNvbnRhaW5lciwgdGhpcy5jb250YWluZXIpXG4gIH1cblxuICBzdGFydFBvc2l0aW9uaW5nKCkge1xuICAgIHRoaXMuX3NldERlZmF1bHRUcmFuc2l0aW9uKClcbiAgICB0aGlzLm9mZnNldCA9IFBvaW50LmVsZW1lbnRPZmZzZXQodGhpcy5lbGVtZW50LCB0aGlzLmNvbnRhaW5lciwgdHJ1ZSlcbiAgICB0aGlzLnBpbm5lZFBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICB0aGlzLmluaXRpYWxQb3NpdGlvbiA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbiB8fCB0aGlzLm9mZnNldFxuXG4gICAgdGhpcy5waW5Qb3NpdGlvbih0aGlzLmluaXRpYWxQb3NpdGlvbilcblxuICAgIGlmICh0aGlzLmJvdW5kLnJlZnJlc2gpIHtcbiAgICAgIHRoaXMuYm91bmQucmVmcmVzaCgpXG4gICAgfVxuICB9XG5cbiAgc3RhcnRMaXN0ZW5pbmcoKSB7XG4gICAgdGhpcy5fZHJhZ1N0YXJ0ID0gKGV2ZW50KSA9PiB0aGlzLmRyYWdTdGFydChldmVudClcbiAgICB0aGlzLl9kcmFnTW92ZSA9IChldmVudCkgPT4gdGhpcy5kcmFnTW92ZShldmVudClcbiAgICB0aGlzLl9kcmFnRW5kID0gKGV2ZW50KSA9PiB0aGlzLmRyYWdFbmQoZXZlbnQpXG4gICAgdGhpcy5fbmF0aXZlRHJhZ1N0YXJ0ID0gKGV2ZW50KSA9PiB0aGlzLm5hdGl2ZURyYWdTdGFydChldmVudClcbiAgICB0aGlzLl9uYXRpdmVEcmFnT3ZlciA9IChldmVudCkgPT4gdGhpcy5uYXRpdmVEcmFnT3ZlcihldmVudClcbiAgICB0aGlzLl9uYXRpdmVEcmFnRW5kID0gKGV2ZW50KSA9PiB0aGlzLm5hdGl2ZURyYWdFbmQoZXZlbnQpXG4gICAgdGhpcy5fbmF0aXZlRHJvcCA9IChldmVudCkgPT4gdGhpcy5uYXRpdmVEcm9wKGV2ZW50KVxuICAgIHRoaXMuX3Njcm9sbCA9IChldmVudCkgPT4gdGhpcy5vblNjcm9sbChldmVudClcblxuICAgIHRoaXMuaGFuZGxlci5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQsIGlzU3VwcG9ydFBhc3NpdmVFdmVudHMgPyB7IHBhc3NpdmU6IGZhbHNlIH0gOiBmYWxzZSlcbiAgICB0aGlzLmhhbmRsZXIuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0LCBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzID8geyBwYXNzaXZlOiBmYWxzZSB9IDogZmFsc2UpXG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIHRoaXMuX25hdGl2ZURyYWdTdGFydClcbiAgfVxuXG4gIGdldFNpemUoKSB7XG4gICAgcmV0dXJuIFBvaW50LmVsZW1lbnRTaXplKHRoaXMuZWxlbWVudCwgdGhpcy5vcHRpb25zLmlzQ29udGVudEJveFNpemUpXG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5vZmZzZXQuYWRkKHRoaXMuX3RyYW5zZm9ybVBvc2l0aW9uIHx8IG5ldyBQb2ludCgwLCAwKSlcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvblxuICB9XG5cbiAgZ2V0Q2VudGVyKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLmdldFNpemUoKS5tdWx0KDAuNSkpXG4gIH1cblxuICBfc2V0RGVmYXVsdFRyYW5zaXRpb24gKCkge1xuICAgIHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5lbGVtZW50KVt0cmFuc2l0aW9uUHJvcGVydHldXG4gIH1cblxuICBfc2V0VHJhbnNpdGlvbih0aW1lKSB7XG4gICAgbGV0IHRyYW5zaXRpb24gPSB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNpdGlvblByb3BlcnR5XVxuICAgIGNvbnN0IHRyYW5zaXRpb25Dc3MgPSBgdHJhbnNmb3JtICR7dGltZX1tc2BcblxuICAgIGlmICghL3RyYW5zZm9ybSBcXGQqbT9zLy50ZXN0KHRyYW5zaXRpb24pKSB7XG4gICAgICBpZiAodHJhbnNpdGlvbikge1xuICAgICAgICB0cmFuc2l0aW9uICs9IGAsICR7dHJhbnNpdGlvbkNzc31gXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cmFuc2l0aW9uID0gdHJhbnNpdGlvbkNzc1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0cmFuc2l0aW9uID0gdHJhbnNpdGlvbi5yZXBsYWNlKC90cmFuc2Zvcm0gXFxkKm0/cy8sIHRyYW5zaXRpb25Dc3MpXG4gICAgfVxuXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV0gPSB0cmFuc2l0aW9uXG4gIH1cblxuICBfc2V0VHJhbnNsYXRlKHBvaW50KSB7XG4gICAgdGhpcy5fdHJhbnNmb3JtUG9zaXRpb24gPSBwb2ludFxuICAgIGNvbnN0IHRyYW5zbGF0ZUNzcyA9IGB0cmFuc2xhdGUzZCgke3BvaW50Lnh9cHgsICR7cG9pbnQueX1weCwgMHB4KWBcblxuICAgIGxldCB0cmFuc2Zvcm0gPSB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcGVydHldXG5cbiAgICBpZiAodGhpcy5zaG91bGRSZW1vdmVaZXJvVHJhbnNsYXRlICYmIHBvaW50LnggPT09IDAgJiYgcG9pbnQueSA9PT0gMCkge1xuICAgICAgdHJhbnNmb3JtID0gdHJhbnNmb3JtLnJlcGxhY2UoL3RyYW5zbGF0ZTNkXFwoW14pXStcXCkvLCAnJylcbiAgICB9IGVsc2UgaWYgKCEvdHJhbnNsYXRlM2RcXChbXildK1xcKS8udGVzdCh0cmFuc2Zvcm0pKSB7XG4gICAgICBpZiAodHJhbnNmb3JtKSB7XG4gICAgICAgIHRyYW5zZm9ybSArPSAnICdcbiAgICAgIH1cbiAgICAgIHRyYW5zZm9ybSArPSB0cmFuc2xhdGVDc3NcbiAgICB9IGVsc2Uge1xuICAgICAgdHJhbnNmb3JtID0gdHJhbnNmb3JtLnJlcGxhY2UoL3RyYW5zbGF0ZTNkXFwoW14pXStcXCkvLCB0cmFuc2xhdGVDc3MpXG4gICAgfVxuXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BlcnR5XSA9IHRyYW5zZm9ybVxuICB9XG5cbiAgbW92ZShwb2ludCwgdGltZT0wLCBpc1NpbGVudD1mYWxzZSkge1xuICAgIHBvaW50ID0gcG9pbnQuY2xvbmUoKVxuXG4gICAgdGhpcy5kZXRlcm1pbmVEaXJlY3Rpb24ocG9pbnQpXG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvaW50XG5cbiAgICB0aGlzLl9zZXRUcmFuc2l0aW9uKHRpbWUpXG4gICAgdGhpcy5fc2V0VHJhbnNsYXRlKHBvaW50LnN1Yih0aGlzLm9mZnNldCkpXG5cbiAgICBpZiAoIWlzU2lsZW50KSB7XG4gICAgICB0aGlzLmVtaXQoJ2RyYWc6bW92ZScpXG4gICAgfVxuICB9XG5cbiAgcGluUG9zaXRpb24ocG9pbnQsIHRpbWU9MCwgc2lsZW50PXRydWUpIHtcbiAgICB0aGlzLnBpbm5lZFBvc2l0aW9uID0gcG9pbnQuY2xvbmUoKVxuICAgIHRoaXMubW92ZSh0aGlzLnBpbm5lZFBvc2l0aW9uLCB0aW1lLCBzaWxlbnQpXG4gIH1cblxuICByZXNldFBvc2l0aW9uVG9Jbml0aWFsICgpIHtcbiAgICB0aGlzLnBpblBvc2l0aW9uKHRoaXMuaW5pdGlhbFBvc2l0aW9uKVxuICB9XG5cbiAgcmVmcmVzaFBvc2l0aW9uICgpIHtcbiAgICB0aGlzLnNldFBvc2l0aW9uKHRoaXMuZ2V0UG9zaXRpb24oKSlcbiAgfVxuXG4gIHNldFBvc2l0aW9uKHBvaW50KSB7XG4gICAgcG9pbnQgPSBwb2ludC5jbG9uZSgpXG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvaW50XG4gICAgdGhpcy5fc2V0VHJhbnNpdGlvbigwKVxuICAgIHRoaXMuX3NldFRyYW5zbGF0ZShwb2ludC5zdWIodGhpcy5vZmZzZXQpKVxuICB9XG5cbiAgZGV0ZXJtaW5lRGlyZWN0aW9uKHBvaW50KSB7XG4gICAgdGhpcy5sZWZ0RGlyZWN0aW9uID0gKHRoaXMucG9zaXRpb24ueCA8IHBvaW50LngpXG4gICAgdGhpcy5yaWdodERpcmVjdGlvbiA9ICh0aGlzLnBvc2l0aW9uLnggPiBwb2ludC54KVxuICAgIHRoaXMudXBEaXJlY3Rpb24gPSAodGhpcy5wb3NpdGlvbi55ID4gcG9pbnQueSlcbiAgICB0aGlzLmRvd25EaXJlY3Rpb24gPSAodGhpcy5wb3NpdGlvbi55IDwgcG9pbnQueSlcbiAgfVxuXG4gIGRyYWdTdGFydChldmVudCkge1xuICAgIHRoaXMuY3VycmVudEV2ZW50ID0gZXZlbnRcbiAgICBpZiAoIXRoaXMuX2VuYWJsZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaXNUb3VjaEV2ZW50ID0gKGlzVG91Y2ggJiYgKGV2ZW50IGluc3RhbmNlb2Ygd2luZG93LlRvdWNoRXZlbnQpKVxuXG4gICAgdGhpcy50b3VjaFBvaW50ID0gdGhpcy5fc3RhcnRUb3VjaFBvaW50ID0gbmV3IFBvaW50KFxuICAgICAgaXNUb3VjaEV2ZW50ID8gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVggOiBldmVudC5jbGllbnRYLFxuICAgICAgaXNUb3VjaEV2ZW50ID8gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVkgOiBldmVudC5jbGllbnRZXG4gICAgKVxuXG4gICAgdGhpcy5fc3RhcnRQb3NpdGlvbiA9IHRoaXMuZ2V0UG9zaXRpb24oKVxuICAgIGlmIChpc1RvdWNoRXZlbnQpIHtcbiAgICAgIHRoaXMuX3RvdWNoSWQgPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5pZGVudGlmaWVyXG4gICAgfVxuXG4gICAgdGhpcy5fc3RhcnRTY3JvbGxQb2ludCA9IG5ldyBQb2ludCh3aW5kb3cuc2Nyb2xsWCwgd2luZG93LnNjcm9sbFkpXG5cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGlmIChldmVudC50YXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElucHV0RWxlbWVudCB8fFxuICAgICAgICAgIGV2ZW50LnRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSW5wdXRFbGVtZW50KSB7XG4gICAgICBldmVudC50YXJnZXQuZm9jdXMoKVxuICAgIH1cblxuICAgIGlmICghKHRoaXMubmF0aXZlRHJhZ0FuZERyb3AgfHxcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSW5wdXRFbGVtZW50IHx8XG4gICAgICAgICAgICBldmVudC50YXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElucHV0RWxlbWVudCkpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB9XG5cbiAgICBpZiAodGhpcy5uYXRpdmVEcmFnQW5kRHJvcCkge1xuICAgICAgY29uc3QgaXNTYWZhcmkgPSAvdmVyc2lvblxcLyhcXGQrKS4rP3NhZmFyaS9pLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpXG4gICAgICBpZiAoKGlzVG91Y2hFdmVudCAmJiB0aGlzLmVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcE9uVG91Y2gpIHx8XG4gICAgICAgICAgICAgaXNTYWZhcmkgfHxcbiAgICAgICAgICAgICB0aGlzLmVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcEZvckFsbCkge1xuICAgICAgICB0aGlzLmVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcChldmVudClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5kcmFnZ2FibGUgPSB0cnVlXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9uYXRpdmVEcmFnRW5kLCBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzID8geyBwYXNzaXZlOiBmYWxzZSB9IDogZmFsc2UpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUsIGlzU3VwcG9ydFBhc3NpdmVFdmVudHMgPyB7IHBhc3NpdmU6IGZhbHNlIH0gOiBmYWxzZSlcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUsIGlzU3VwcG9ydFBhc3NpdmVFdmVudHMgPyB7IHBhc3NpdmU6IGZhbHNlIH0gOiBmYWxzZSlcblxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQsIGlzU3VwcG9ydFBhc3NpdmVFdmVudHMgPyB7IHBhc3NpdmU6IGZhbHNlIH0gOiBmYWxzZSlcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kLCBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzID8geyBwYXNzaXZlOiBmYWxzZSB9IDogZmFsc2UpXG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX3Njcm9sbClcblxuICAgIHRoaXMuaXNEcmFnZ2luZyA9IHRydWVcbiAgICB0aGlzLmVtaXQoJ2RyYWc6c3RhcnQnKVxuICAgIGFkZENsYXNzKHRoaXMuZWxlbWVudCwgJ2RyYWdlZS1hY3RpdmUnKVxuICAgIHRoaXMuZW1pdCgnZHJhZzptb3ZlJylcbiAgfVxuXG4gIHN0b3BEcmFnZ2luZygpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCB0aGlzLl9uYXRpdmVEcmFnT3ZlcilcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcm9wJywgdGhpcy5fbmF0aXZlRHJvcClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcm9wJywgdGhpcy5fbmF0aXZlRHJvcClcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fc2Nyb2xsKVxuICAgIHRoaXMuZWxlbWVudC5kcmFnZ2FibGUgPSBmYWxzZVxuICAgIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlXG4gICAgcmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50LCAnZHJhZ2VlLWFjdGl2ZScpXG4gIH1cblxuICBkcmFnTW92ZShldmVudCkge1xuICAgIHRoaXMuY3VycmVudEV2ZW50ID0gZXZlbnRcbiAgICBsZXQgdG91Y2hcblxuICAgIGNvbnN0IGlzVG91Y2hFdmVudCA9IChpc1RvdWNoICYmIChldmVudCBpbnN0YW5jZW9mIHdpbmRvdy5Ub3VjaEV2ZW50KSlcbiAgICBpZiAoaXNUb3VjaEV2ZW50KSB7XG4gICAgICB0b3VjaCA9IGdldFRvdWNoQnlJRChldmVudCwgdGhpcy5fdG91Y2hJZClcblxuICAgICAgaWYgKCF0b3VjaCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB0aGlzLnRvdWNoUG9pbnQgPSBuZXcgUG9pbnQoXG4gICAgICBpc1RvdWNoRXZlbnQgPyB0b3VjaC5wYWdlWCA6IGV2ZW50LmNsaWVudFgsXG4gICAgICBpc1RvdWNoRXZlbnQgPyB0b3VjaC5wYWdlWSA6IGV2ZW50LmNsaWVudFlcbiAgICApXG5cbiAgICBsZXQgcG9pbnQgPSB0aGlzLl9zdGFydFBvc2l0aW9uLmFkZCh0aGlzLnRvdWNoUG9pbnQuc3ViKHRoaXMuX3N0YXJ0VG91Y2hQb2ludCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy5zY3JvbGxQb2ludC5zdWIodGhpcy5fc3RhcnRTY3JvbGxQb2ludCkpXG5cbiAgICBwb2ludCA9IHRoaXMuYm91bmQocG9pbnQsIHRoaXMuZ2V0U2l6ZSgpKVxuICAgIHRoaXMubW92ZShwb2ludClcbiAgfVxuXG4gIGRyYWdFbmQoZXZlbnQpIHtcbiAgICBjb25zdCBpc1RvdWNoRXZlbnQgPSAoaXNUb3VjaCAmJiAoZXZlbnQgaW5zdGFuY2VvZiB3aW5kb3cuVG91Y2hFdmVudCkpXG5cbiAgICBpZiAoaXNUb3VjaEV2ZW50ICYmICFnZXRUb3VjaEJ5SUQoZXZlbnQsIHRoaXMuX3RvdWNoSWQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB0aGlzLmRyYWdFbmRBY3Rpb24oKVxuICAgIHRoaXMuZW1pdCgnZHJhZzplbmQnKVxuXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG5cbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fc2Nyb2xsKVxuXG4gICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2VcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkcmFnZ2FibGUnKVxuICAgIHJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudCwgJ2RyYWdlZS1hY3RpdmUnKVxuICB9XG5cbiAgb25TY3JvbGwoX2V2ZW50KSB7XG4gICAgbGV0IHBvaW50ID0gdGhpcy5fc3RhcnRQb3NpdGlvbi5hZGQodGhpcy50b3VjaFBvaW50LnN1Yih0aGlzLl9zdGFydFRvdWNoUG9pbnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMuc2Nyb2xsUG9pbnQuc3ViKHRoaXMuX3N0YXJ0U2Nyb2xsUG9pbnQpKVxuXG4gICAgcG9pbnQgPSB0aGlzLmJvdW5kKHBvaW50LCB0aGlzLmdldFNpemUoKSlcbiAgICBpZiAoIXRoaXMubmF0aXZlRHJhZ0FuZERyb3ApIHtcbiAgICAgIHRoaXMubW92ZShwb2ludClcbiAgICB9XG4gIH1cblxuICBuYXRpdmVEcmFnU3RhcnQoZXZlbnQpIHtcbiAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dCcsICdGaXJlRm94IGZpeCcpXG4gICAgZXZlbnQuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSAnbW92ZSdcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIHRoaXMuX25hdGl2ZURyYWdPdmVyKVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzLl9uYXRpdmVEcm9wKVxuICB9XG5cbiAgbmF0aXZlRHJhZ092ZXIoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZXZlbnQuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnbW92ZSdcbiAgICBhZGRDbGFzcyh0aGlzLmVsZW1lbnQsICdkcmFnZWUtcGxhY2Vob2xkZXInKVxuICAgIHRoaXMuY3VycmVudEV2ZW50ID0gZXZlbnRcbiAgICBpZiAoZXZlbnQuY2xpZW50WCA9PT0gMCAmJiBldmVudC5jbGllbnRZID09PSAwKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLnRvdWNoUG9pbnQgPSBuZXcgUG9pbnQoZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSlcbiAgICBsZXQgcG9pbnQgPSB0aGlzLl9zdGFydFBvc2l0aW9uLmFkZCh0aGlzLnRvdWNoUG9pbnQuc3ViKHRoaXMuX3N0YXJ0VG91Y2hQb2ludCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy5zY3JvbGxQb2ludC5zdWIodGhpcy5fc3RhcnRTY3JvbGxQb2ludCkpXG4gICAgcG9pbnQgPSB0aGlzLmJvdW5kKHBvaW50LCB0aGlzLmdldFNpemUoKSlcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9pbnRcbiAgICB0aGlzLmVtaXQoJ2RyYWc6bW92ZScpXG4gIH1cblxuICBuYXRpdmVEcmFnRW5kKF9ldmVudCkge1xuICAgIHJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudCwgJ2RyYWdlZS1wbGFjZWhvbGRlcicpXG4gICAgdGhpcy5kcmFnRW5kQWN0aW9uKClcbiAgICB0aGlzLmVtaXQoJ2RyYWc6ZW5kJylcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIHRoaXMuX25hdGl2ZURyYWdPdmVyKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzLl9uYXRpdmVEcm9wKVxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9zY3JvbGwpXG4gICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2VcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkcmFnZ2FibGUnKVxuICAgIHJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudCwgJ2RyYWdlZS1hY3RpdmUnKVxuICB9XG5cbiAgbmF0aXZlRHJvcChldmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wKGV2ZW50KSB7XG4gICAgY29uc3QgY29udGFpbmVyUmVjdCA9IHRoaXMuY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgY29uc3QgY2xvbmVkRWxlbWVudCA9IHRoaXMuZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSlcbiAgICBjbG9uZWRFbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BlcnR5XSA9ICcnXG4gICAgY29weVN0eWxlcyh0aGlzLmVsZW1lbnQsIGNsb25lZEVsZW1lbnQpXG4gICAgY2xvbmVkRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSdcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNsb25lZEVsZW1lbnQpXG4gICAgYWRkQ2xhc3ModGhpcy5lbGVtZW50LCAnZHJhZ2VlLXBsYWNlaG9sZGVyJylcblxuICAgIGNvbnN0IGVtdWxhdGlvbkRyYWdnYWJsZSA9IG5ldyBEcmFnZ2FibGUoY2xvbmVkRWxlbWVudCwge1xuICAgICAgY29udGFpbmVyOiBkb2N1bWVudC5ib2R5LFxuICAgICAgYm91bmQocG9pbnQpIHtcbiAgICAgICAgcmV0dXJuIHBvaW50XG4gICAgICB9LFxuICAgICAgb246IHtcbiAgICAgICAgJ2RyYWc6bW92ZSc6ICgpID0+IHtcbiAgICAgICAgICBjb25zdCBjb250YWluZXJSZWN0UG9pbnQgPSBuZXcgUG9pbnQoY29udGFpbmVyUmVjdC5sZWZ0LCBjb250YWluZXJSZWN0LnRvcClcbiAgICAgICAgICB0aGlzLnBvc2l0aW9uID0gZW11bGF0aW9uRHJhZ2dhYmxlLnBvc2l0aW9uLnN1Yihjb250YWluZXJSZWN0UG9pbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdWIodGhpcy5fc3RhcnRTY3JvbGxQb2ludClcbiAgICAgICAgICB0aGlzLmVtaXQoJ2RyYWc6bW92ZScpXG4gICAgICAgIH0sXG4gICAgICAgICdkcmFnOmVuZCc6ICgpID0+IHtcbiAgICAgICAgICBlbXVsYXRpb25EcmFnZ2FibGUuZGVzdHJveSgpXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChjbG9uZWRFbGVtZW50KVxuICAgICAgICAgIHJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudCwgJ2RyYWdlZS1wbGFjZWhvbGRlcicpXG4gICAgICAgICAgcmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50LCAnZHJhZ2VlLWFjdGl2ZScpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgY29udGFpbmVyUmVjdFBvaW50ID0gbmV3IFBvaW50KGNvbnRhaW5lclJlY3QubGVmdCwgY29udGFpbmVyUmVjdC50b3ApXG4gICAgZW11bGF0aW9uRHJhZ2dhYmxlLl9zdGFydFNjcm9sbFBvaW50ID0gdGhpcy5fc3RhcnRTY3JvbGxQb2ludFxuXG4gICAgZW11bGF0aW9uRHJhZ2dhYmxlLm1vdmUoXG4gICAgICB0aGlzLnBpbm5lZFBvc2l0aW9uLmFkZChjb250YWluZXJSZWN0UG9pbnQpLmFkZChuZXcgUG9pbnQod2luZG93LnNjcm9sbFgsIHdpbmRvdy5zY3JvbGxZKSlcbiAgICApXG5cbiAgICBlbXVsYXRpb25EcmFnZ2FibGUuZHJhZ1N0YXJ0KGV2ZW50KVxuICB9XG5cbiAgZHJhZ0VuZEFjdGlvbigpIHtcbiAgICB0aGlzLnBpblBvc2l0aW9uKHRoaXMucG9zaXRpb24pXG4gIH1cblxuICBnZXRSZWN0YW5nbGUoKSB7XG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUodGhpcy5wb3NpdGlvbiwgdGhpcy5nZXRTaXplKCkpXG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIGlmICh0aGlzLmJvdW5kLnJlZnJlc2gpIHtcbiAgICAgIHRoaXMuYm91bmQucmVmcmVzaCgpXG4gICAgfVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmhhbmRsZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0KVxuICAgIHRoaXMuaGFuZGxlci5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQpXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIHRoaXMuX25hdGl2ZURyYWdTdGFydClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCB0aGlzLl9uYXRpdmVEcmFnT3ZlcilcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcm9wJywgdGhpcy5fbmF0aXZlRHJvcClcbiAgICB0aGlzLnJlc2V0RW1pdHRlcigpXG5cbiAgICBjb25zdCBpbmRleCA9IGRyYWdnYWJsZXMuaW5kZXhPZih0aGlzKVxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICBkcmFnZ2FibGVzLnNwbGljZShpbmRleCwgMSlcbiAgICB9XG4gIH1cblxuICBnZXQgY29udGFpbmVyKCkge1xuICAgIHJldHVybiAodGhpcy5fY29udGFpbmVyID0gdGhpcy5fY29udGFpbmVyIHx8IHRoaXMub3B0aW9ucy5jb250YWluZXIgfHwgdGhpcy5vcHRpb25zLnBhcmVudCB8fCBnZXREZWZhdWx0Q29udGFpbmVyKHRoaXMuZWxlbWVudCkpXG4gIH1cblxuICBnZXQgaGFuZGxlcigpIHtcbiAgICBpZiAoIXRoaXMuX2hhbmRsZXIpIHtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmhhbmRsZXIgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZXIgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLm9wdGlvbnMuaGFuZGxlcikgfHwgdGhpcy5lbGVtZW50XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9oYW5kbGVyID0gdGhpcy5vcHRpb25zLmhhbmRsZXIgfHwgdGhpcy5lbGVtZW50XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2hhbmRsZXJcbiAgfVxuXG4gIGdldCBuYXRpdmVEcmFnQW5kRHJvcCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLm5hdGl2ZURyYWdBbmREcm9wIHx8IGZhbHNlXG4gIH1cblxuICBnZXQgZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wT25Ub3VjaCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcE9uVG91Y2ggfHwgdHJ1ZVxuICB9XG5cbiAgZ2V0IGVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcEZvckFsbCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcEZvckFsbCB8fCBmYWxzZVxuICB9XG5cbiAgZ2V0IHNob3VsZFJlbW92ZVplcm9UcmFuc2xhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5zaG91bGRSZW1vdmVaZXJvVHJhbnNsYXRlIHx8IGZhbHNlXG4gIH1cblxuICBnZXQgc2Nyb2xsUG9pbnQoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh3aW5kb3cuc2Nyb2xsWCwgd2luZG93LnNjcm9sbFkpXG4gIH1cblxuICBnZXQgZW5hYmxlKCkge1xuICAgIHJldHVybiB0aGlzLl9lbmFibGVcbiAgfVxuXG4gIHNldCBlbmFibGUoZW5hYmxlKSB7XG4gICAgaWYgKGVuYWJsZSkge1xuICAgICAgcmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50LCAnZHJhZ2VlLWRpc2FibGUnKVxuICAgIH0gZWxzZSB7XG4gICAgICBhZGRDbGFzcyh0aGlzLmVsZW1lbnQsICdkcmFnZWUtZGlzYWJsZScpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZSA9IGVuYWJsZVxuICB9XG59XG5cbkRyYWdnYWJsZS5lbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcigpXG5EcmFnZ2FibGUuZW1pdHRlci5vbignZHJhZ2dhYmxlOmNyZWF0ZScsIGFkZFRvRGVmYXVsdFNjb3BlKVxuIiwiaW1wb3J0IHJlbW92ZUl0ZW0gZnJvbSAnLi91dGlscy9yZW1vdmUtYXJyYXktaXRlbSdcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudEVtaXR0ZXInXG5pbXBvcnQge1xuICBnZXREaXN0YW5jZSxcbiAgaW5kZXhPZk5lYXJlc3RQb2ludFxufSBmcm9tICcuL2dlb21ldHJ5L2Rpc3RhbmNlcydcblxuaW1wb3J0IERyYWdnYWJsZSBmcm9tICcuL2RyYWdnYWJsZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdCBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKGRyYWdnYWJsZXMsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcihvcHRpb25zKVxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgdGltZUVuZDogMjAwLFxuICAgICAgdGltZUV4Y2FuZ2U6IDQwMCxcbiAgICAgIHJhZGl1czogMzBcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gZHJhZ2dhYmxlc1xuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuX2VuYWJsZSA9IHRydWVcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCh0aGlzLmluaXREcmFnZ2FibGUsIHRoaXMpXG4gIH1cblxuICBpbml0RHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIGRyYWdnYWJsZS5lbmFibGUgPSB0aGlzLl9lbmFibGVcbiAgICBkcmFnZ2FibGUub24oJ2RyYWc6bW92ZScsICgpID0+IHRoaXMub25Nb3ZlKGRyYWdnYWJsZSkpXG4gICAgZHJhZ2dhYmxlLmRyYWdFbmRBY3Rpb24gPSAoKSA9PiBkcmFnZ2FibGUucGluUG9zaXRpb24oZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uLCB0aGlzLm9wdGlvbnMudGltZUVuZClcbiAgfVxuXG4gIG9uTW92ZShkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBzb3J0ZWREcmFnZ2FibGVzID0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcbiAgICBjb25zdCBwaW5uZWRQb3NpdGlvbnMgPSBzb3J0ZWREcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24pXG5cbiAgICBjb25zdCBjdXJyZW50SW5kZXggPSBzb3J0ZWREcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKVxuICAgIGNvbnN0IHRhcmdldEluZGV4ID0gaW5kZXhPZk5lYXJlc3RQb2ludChwaW5uZWRQb3NpdGlvbnMsIGRyYWdnYWJsZS5wb3NpdGlvbiwgdGhpcy5vcHRpb25zLnJhZGl1cywgdGhpcy5kaXN0YW5jZUZ1bmMpXG5cbiAgICBpZiAodGFyZ2V0SW5kZXggIT09IC0xICYmIGN1cnJlbnRJbmRleCAhPT0gdGFyZ2V0SW5kZXgpIHtcbiAgICAgIGlmICh0YXJnZXRJbmRleCA8IGN1cnJlbnRJbmRleCkge1xuICAgICAgICBmb3IgKGxldCBpPXRhcmdldEluZGV4OyBpPGN1cnJlbnRJbmRleDsgaSsrKSB7XG4gICAgICAgICAgc29ydGVkRHJhZ2dhYmxlc1tpXS5waW5Qb3NpdGlvbihwaW5uZWRQb3NpdGlvbnNbaSsxXSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGxldCBpPWN1cnJlbnRJbmRleDsgaTx0YXJnZXRJbmRleDsgaSsrKSB7XG4gICAgICAgICAgc29ydGVkRHJhZ2dhYmxlc1tpKzFdLnBpblBvc2l0aW9uKHBpbm5lZFBvc2l0aW9uc1tpXSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChkcmFnZ2FibGUubmF0aXZlRHJhZ0FuZERyb3ApIHtcbiAgICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKHBpbm5lZFBvc2l0aW9uc1t0YXJnZXRJbmRleF0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24gPSBwaW5uZWRQb3NpdGlvbnNbdGFyZ2V0SW5kZXhdXG4gICAgICB9XG5cbiAgICAgIHRoaXMuZW1pdCgnbGlzdDpjaGFuZ2UnKVxuICAgIH1cbiAgfVxuXG4gIGdldEN1cnJlbnRQaW5uZWRQb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uLmNsb25lKCkpXG4gIH1cblxuICBnZXRTb3J0ZWREcmFnZ2FibGVzKCkge1xuICAgIHJldHVybiB0aGlzLmRyYWdnYWJsZXMuc29ydCh0aGlzLnNvcnRpbmcuYmluZCh0aGlzKSlcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5yZXNldFBvc2l0aW9uVG9Jbml0aWFsKCkpXG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5yZWZyZXNoKCkpXG4gIH1cblxuICBhZGQoZHJhZ2dhYmxlcykge1xuICAgIGlmICghKGRyYWdnYWJsZXMgaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICAgIGRyYWdnYWJsZXMgPSBbZHJhZ2dhYmxlc11cbiAgICB9XG4gICAgZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHRoaXMuaW5pdERyYWdnYWJsZShkcmFnZ2FibGUpKVxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IHRoaXMuZHJhZ2dhYmxlcy5jb25jYXQoZHJhZ2dhYmxlcylcbiAgfVxuXG4gIHJlbW92ZShkcmFnZ2FibGVzKSB7XG4gICAgY29uc3QgaW5pdGlhbFBvc2l0aW9ucyA9IHRoaXMuZHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLmluaXRpYWxQb3NpdGlvbilcbiAgICBjb25zdCBsaXN0ID0gW11cbiAgICBjb25zdCBzb3J0ZWREcmFnZ2FibGVzID0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcblxuICAgIGlmICghKGRyYWdnYWJsZXMgaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICAgIGRyYWdnYWJsZXMgPSBbZHJhZ2dhYmxlc11cbiAgICB9XG5cbiAgICBkcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLnJlc2V0T24oJ2RyYWc6ZW5kJylcbiAgICAgIGRyYWdnYWJsZS5yZXNldE9uKCdkcmFnOm1vdmUnKVxuICAgICAgcmVtb3ZlSXRlbSh0aGlzLmRyYWdnYWJsZXMsIGRyYWdnYWJsZSlcbiAgICB9KVxuXG4gICAgbGV0IGogPSAwXG4gICAgc29ydGVkRHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGlmICh0aGlzLmRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMSkge1xuICAgICAgICBpZiAoZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uICE9PSBpbml0aWFsUG9zaXRpb25zW2pdKSB7XG4gICAgICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKGluaXRpYWxQb3NpdGlvbnNbal0sIHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSlcbiAgICAgICAgfVxuICAgICAgICBkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uID0gaW5pdGlhbFBvc2l0aW9uc1tqXVxuICAgICAgICBqKytcbiAgICAgICAgbGlzdC5wdXNoKGRyYWdnYWJsZSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGxpc3RcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMucmVtb3ZlKHRoaXMuZHJhZ2dhYmxlcy5zbGljZSgpKVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUuZGVzdHJveSgpKVxuICB9XG5cbiAgc29ydGluZyhkcmFnZ2FibGVBLCBkcmFnZ2FibGVCKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5zb3J0aW5nKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLnNvcnRpbmcoZHJhZ2dhYmxlQSwgZHJhZ2dhYmxlQilcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGRyYWdnYWJsZUEucGlubmVkUG9zaXRpb24ueSA8IGRyYWdnYWJsZUIucGlubmVkUG9zaXRpb24ueSkgcmV0dXJuIC0xXG4gICAgICBpZiAoZHJhZ2dhYmxlQS5waW5uZWRQb3NpdGlvbi55ID4gZHJhZ2dhYmxlQi5waW5uZWRQb3NpdGlvbi55KSByZXR1cm4gMVxuICAgICAgaWYgKGRyYWdnYWJsZUEucGlubmVkUG9zaXRpb24ueCA8IGRyYWdnYWJsZUIucGlubmVkUG9zaXRpb24ueCkgcmV0dXJuIC0xXG4gICAgICBpZiAoZHJhZ2dhYmxlQS5waW5uZWRQb3NpdGlvbi54ID4gZHJhZ2dhYmxlQi5waW5uZWRQb3NpdGlvbi54KSByZXR1cm4gMVxuICAgICAgcmV0dXJuIDBcbiAgICB9XG4gIH1cblxuICBnZXQgZGlzdGFuY2VGdW5jKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZ2V0RGlzdGFuY2UgfHwgZ2V0RGlzdGFuY2VcbiAgfVxuXG4gIGdldCBwb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q3VycmVudFBpbm5lZFBvc2l0aW9ucygpXG4gIH1cblxuICBzZXQgcG9zaXRpb25zKHBvc2l0aW9ucykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSAnd3JvbmcgYXJyYXkgbGVuZ3RoJ1xuICAgIGlmIChwb3NpdGlvbnMubGVuZ3RoID09PSB0aGlzLmRyYWdnYWJsZXMubGVuZ3RoKSB7XG4gICAgICBwb3NpdGlvbnMuZm9yRWFjaCgocG9pbnQsIGkpID0+IHtcbiAgICAgICAgdGhpcy5kcmFnZ2FibGVzW2ldLnBpblBvc2l0aW9uKHBvaW50KVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbWVzc2FnZVxuICAgIH1cbiAgfVxuXG4gIGdldCBlbmFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZVxuICB9XG5cbiAgc2V0IGVuYWJsZShlbmFibGUpIHtcbiAgICB0aGlzLl9lbmFibGUgPSBlbmFibGVcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUuZW5hYmxlID0gZW5hYmxlXG4gICAgfSlcbiAgfVxuXG4gIHN0YXRpYyBmYWN0b3J5KGNvbnRhaW5lckVsZW1lbnQsIGVsZW1lbnRzLCBvcHRpb25zPXt9KSB7XG4gICAgY29uc3QgZHJhZ2dhYmxlcyA9IEFycmF5LmZyb20oZWxlbWVudHMpLm1hcCgoZWxlbWVudCkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBEcmFnZ2FibGUoZWxlbWVudCwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyRWxlbWVudFxuICAgICAgfSwgb3B0aW9ucy5kcmFnZ2FibGUgfHwge30pKVxuICAgIH0pXG4gICAgcmV0dXJuIG5ldyBMaXN0KGRyYWdnYWJsZXMsIG9wdGlvbnMubGlzdCB8fCB7fSlcbiAgfVxufVxuIiwiaW1wb3J0IExpc3QgZnJvbSAnLi9saXN0J1xuaW1wb3J0IHsgaW5kZXhPZk5lYXJlc3RQb2ludCwgZ2V0WURpZmZlcmVuY2UgfSBmcm9tICcuL2dlb21ldHJ5L2Rpc3RhbmNlcydcblxuaW1wb3J0IERyYWdnYWJsZSBmcm9tICcuL2RyYWdnYWJsZSdcblxuY29uc3QgYXJyYXlNb3ZlID0gKGFycmF5LCBmcm9tLCB0bykgPT4ge1xuICBhcnJheS5zcGxpY2UodG8gPCAwID8gYXJyYXkubGVuZ3RoICsgdG8gOiB0bywgMCwgYXJyYXkuc3BsaWNlKGZyb20sIDEpWzBdKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdWJibGluZ0xpc3QgZXh0ZW5kcyBMaXN0IHtcbiAgY29uc3RydWN0b3IoZHJhZ2dhYmxlcywgb3B0aW9ucz17fSkge1xuICAgIHN1cGVyKGRyYWdnYWJsZXMsIG9wdGlvbnMpXG4gIH1cblxuICBpbml0RHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIGRyYWdnYWJsZS5vbignZHJhZzpzdGFydCcsICgpID0+IHRoaXMuYXV0b0RldGVjdFZlcnRpY2FsR2FwKGRyYWdnYWJsZSkpXG4gICAgc3VwZXIuaW5pdERyYWdnYWJsZShkcmFnZ2FibGUpXG4gIH1cblxuICBhdXRvRGV0ZWN0VmVydGljYWxHYXAoKSB7XG4gICAgaWYgKHRoaXMuZHJhZ2dhYmxlcy5sZW5ndGggPj0gMikge1xuICAgICAgY29uc3Qgc29ydGVkID0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcblxuICAgICAgdGhpcy52ZXJ0aWNhbEdhcCA9IHNvcnRlZFsxXS5waW5uZWRQb3NpdGlvbi55IC0gc29ydGVkWzBdLnBpbm5lZFBvc2l0aW9uLnkgLSBzb3J0ZWRbMF0uZ2V0U2l6ZSgpLnlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy52ZXJ0aWNhbEdhcCA9IDBcbiAgICB9XG5cbiAgICBpZiAodGhpcy5kcmFnZ2FibGVzLmxlbmd0aCA+PSAxKSB7XG4gICAgICB0aGlzLnN0YXJ0UG9zaXRpb24gPSB0aGlzLmRyYWdnYWJsZXNbMF0ucGlubmVkUG9zaXRpb25cbiAgICB9XG4gIH1cblxuICBvbk1vdmUoZHJhZ2dhYmxlKSB7XG4gICAgY29uc3Qgc29ydGVkRHJhZ2dhYmxlcyA9IHRoaXMuZ2V0U29ydGVkRHJhZ2dhYmxlcygpXG4gICAgY29uc3QgcGlubmVkUG9zaXRpb25zID0gc29ydGVkRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uKVxuXG4gICAgY29uc3QgY3VycmVudEluZGV4ID0gc29ydGVkRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSlcbiAgICBjb25zdCB0YXJnZXRJbmRleCA9IGluZGV4T2ZOZWFyZXN0UG9pbnQocGlubmVkUG9zaXRpb25zLCBkcmFnZ2FibGUucG9zaXRpb24sIHRoaXMub3B0aW9ucy5yYWRpdXMsIHRoaXMuZGlzdGFuY2VGdW5jKVxuXG4gICAgaWYgKHRhcmdldEluZGV4ICE9PSAtMSAmJiBjdXJyZW50SW5kZXggIT09IHRhcmdldEluZGV4KSB7XG4gICAgICBhcnJheU1vdmUoc29ydGVkRHJhZ2dhYmxlcywgY3VycmVudEluZGV4LCB0YXJnZXRJbmRleClcbiAgICAgIHRoaXMuYnVibGluZyhzb3J0ZWREcmFnZ2FibGVzLCBkcmFnZ2FibGUpXG4gICAgICB0aGlzLmVtaXQoJ2xpc3Q6Y2hhbmdlJylcbiAgICB9XG4gIH1cblxuICBidWJsaW5nKHNvcnRlZERyYWdnYWJsZXMsIGN1cnJlbnREcmFnZ2FibGUpIHtcbiAgICBjb25zdCBjdXJyZW50UG9zaXRpb24gPSB0aGlzLnN0YXJ0UG9zaXRpb24uY2xvbmUoKVxuXG4gICAgc29ydGVkRHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGlmICghZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uLmNvbXBhcmUoY3VycmVudFBvc2l0aW9uKSkge1xuICAgICAgICBpZiAoZHJhZ2dhYmxlID09PSBjdXJyZW50RHJhZ2dhYmxlICYmICFjdXJyZW50RHJhZ2dhYmxlLm5hdGl2ZURyYWdBbmREcm9wKSB7XG4gICAgICAgICAgZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uID0gY3VycmVudFBvc2l0aW9uLmNsb25lKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkcmFnZ2FibGUucGluUG9zaXRpb24oY3VycmVudFBvc2l0aW9uLCAoZHJhZ2dhYmxlID09PSBjdXJyZW50RHJhZ2dhYmxlKSA/IDAgOiB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY3VycmVudFBvc2l0aW9uLnkgPSBjdXJyZW50UG9zaXRpb24ueSArIGRyYWdnYWJsZS5nZXRTaXplKCkueSArIHRoaXMudmVydGljYWxHYXBcbiAgICB9KVxuICB9XG5cbiAgZ2V0IGRpc3RhbmNlRnVuYygpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmdldERpc3RhbmNlIHx8IGdldFlEaWZmZXJlbmNlXG4gIH1cblxuICBzdGF0aWMgZmFjdG9yeShjb250YWluZXJFbGVtZW50LCBlbGVtZW50cywgb3B0aW9ucz17fSkge1xuICAgIGNvbnN0IGRyYWdnYWJsZXMgPSBBcnJheS5mcm9tKGVsZW1lbnRzKS5tYXAoKGVsZW1lbnQpID0+IHtcbiAgICAgIHJldHVybiBuZXcgRHJhZ2dhYmxlKGVsZW1lbnQsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBjb250YWluZXI6IGNvbnRhaW5lckVsZW1lbnRcbiAgICAgIH0sIG9wdGlvbnMuZHJhZ2dhYmxlIHx8IHt9KSlcbiAgICB9KVxuICAgIHJldHVybiBuZXcgQnViYmxpbmdMaXN0KGRyYWdnYWJsZXMsIG9wdGlvbnMubGlzdCB8fCB7fSlcbiAgfVxufVxuIl0sIm5hbWVzIjpbImdldFN1bVZhbHVlT2ZTdHlsZVJ1bGVzIiwiZWxlbWVudCIsInJ1bGVzIiwicmVkdWNlIiwic3VtIiwicnVsZSIsInBhcnNlSW50Iiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIlBvaW50IiwieCIsInkiLCJwIiwiayIsInBhcmVudCIsInBhcmVudE5vZGUiLCJlbGVtZW50UmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInBhcmVudFJlY3QiLCJsZWZ0IiwidG9wIiwiaXNDb250ZW50Qm94U2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwiUmVjdGFuZ2xlIiwicG9zaXRpb24iLCJzaXplIiwiYWRkIiwibXVsdCIsInJlY3QiLCJNYXRoIiwibWluIiwibWF4Iiwic3ViIiwicmVjdGFuZ2xlIiwiaW5jbHVkZVBvaW50IiwiZ2V0UDMiLCJheGlzIiwic2VsQXhpcyIsImNyb3NzUmVjdGFuZ2xlIiwiYW5kIiwidGhpc0NlbnRlciIsImdldENlbnRlciIsInJlY3RDZW50ZXIiLCJzaWduIiwib2Zmc2V0IiwiZWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzdHlsZSIsImlzQ29uc2lkZXJUcmFuc2xhdGUiLCJlbGVtZW50T2Zmc2V0IiwiZWxlbWVudFNpemUiLCJoYXNDbGFzcyIsImMiLCJyZSIsIlJlZ0V4cCIsInRlc3QiLCJjbGFzc05hbWUiLCJhZGRDbGFzcyIsInJlcGxhY2UiLCJyZW1vdmVDbGFzcyIsImdldERlZmF1bHRDb250YWluZXIiLCJjb250YWluZXIiLCJ0YWdOYW1lIiwiRXZlbnRFbWl0dGVyIiwib3B0aW9ucyIsImV2ZW50cyIsIm9uIiwiT2JqZWN0IiwiZW50cmllcyIsImV2ZW50TmFtZSIsImZuIiwiaW50ZXJydXB0ZWQiLCJhcmdzIiwic2xpY2UiLCJjYWxsIiwiYXJndW1lbnRzIiwiZnVuYyIsInB1c2giLCJ1bnNoaWZ0IiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwiZ2V0RGlzdGFuY2UiLCJwMSIsInAyIiwiZHgiLCJkeSIsInNxcnQiLCJnZXRYRGlmZmVyZW5jZSIsImFicyIsImdldFlEaWZmZXJlbmNlIiwidHJhbnNmb3JtZWRTcGFjZURpc3RhbmNlRmFjdG9yeSIsInBvdyIsImluZGV4T2ZOZWFyZXN0UG9pbnQiLCJhcnIiLCJ2YWwiLCJyYWRpdXMiLCJnZXREaXN0YW5jZUZ1bmMiLCJpIiwidGVtcCIsImxlbmd0aCIsImRpcmVjdENyb3NzaW5nIiwiTDFQMSIsIkwxUDIiLCJMMlAxIiwiTDJQMiIsImsxIiwiazIiLCJiMSIsImIyIiwiYm91bmRUb0xpbmUiLCJBIiwiQiIsIlAiLCJBUCIsIkFCIiwiYWIyIiwiYXBfYWIiLCJ0IiwiZ2V0UG9pbnRPbkxpbmVCeUxlbmdodCIsIkxQMSIsIkxQMiIsImxlbmdodCIsInBlcmNlbnQiLCJhZGRQb2ludFRvQm91bmRQb2ludHMiLCJib3VuZHBvaW50cyIsInBvaW50IiwiaXNSaWdodCIsInJlc3VsdCIsImZpbHRlciIsImJQb2ludCIsImdldEFuZ2xlRGlmZiIsImFscGhhIiwiYmV0YSIsIm1pbkFuZ2xlIiwibWF4QW5nbGUiLCJQSSIsImdldEFuZ2xlIiwiZGlmZiIsIm5vcm1hbGl6ZUFuZ2xlIiwiYXRhbjIiLCJib3VuZEFuZ2xlIiwiZG1pbiIsImRtYXgiLCJnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0iLCJhbmdsZSIsImNlbnRlciIsImNvcyIsInNpbiIsIkJvdW5kIiwiX3NpemUiLCJpbnN0YW5jZSIsImJvdW5kIiwiYmluZCIsIkJvdW5kVG9SZWN0YW5nbGUiLCJjYWxjUG9pbnQiLCJjbG9uZSIsInJlY3RQMiIsIkJvdW5kVG9FbGVtZW50IiwiZnJvbUVsZW1lbnQiLCJCb3VuZFRvTGluZVgiLCJzdGFydFkiLCJlbmRZIiwiQm91bmRUb0xpbmVZIiwic3RhcnRYIiwiZW5kWCIsIkJvdW5kVG9MaW5lIiwic3RhcnRQb2ludCIsImVuZFBvaW50Iiwic29tZUsiLCJjb3NCZXRhIiwic2luQmV0YSIsInBvaW50MiIsIm5ld0VuZFBvaW50IiwicG9pbnRDcm9zc2luZyIsIkJvdW5kVG9DaXJjbGUiLCJCb3VuZFRvQXJjIiwic3RhcnRBbmdsZSIsImVuZEFuZ2xlIiwiX3N0YXJ0QW5nbGUiLCJfZW5kQW5nbGUiLCJhcnJheSIsInJhbmdlIiwic3RhcnQiLCJzdG9wIiwic3RlcCIsIkJhc2ljU3RyYXRlZ3kiLCJOb3RDcm9zc2luZ1N0cmF0ZWd5IiwicmVjdGFuZ2xlTGlzdCIsImluZGV4ZXNPZk5ld3MiLCJzdGF0aWNSZWN0YW5nbGVJbmRleGVzIiwiaW5kZXhlcyIsIl9yZWN0IiwiZm9yRWFjaCIsInJlbW92YWJsZSIsImluZGV4T2ZTdGF0aWMiLCJzdGF0aWNSZWN0IiwibW92ZVRvQm91bmQiLCJzb21lIiwiYm91bmRSZWN0IiwiZ2V0U3F1YXJlIiwib2RsRHJhZ2dhYmxlc0xpc3QiLCJuZXdEcmFnZ2FibGVzIiwiaW5kZXhPZk5ld3MiLCJkcmFnZ2FibGVzIiwiY29uY2F0IiwiZHJhZ2dhYmxlIiwiRmxvYXRMZWZ0U3RyYXRlZ3kiLCJhc3NpZ24iLCJwYWRkaW5nVG9wTGVmdCIsInBhZGRpbmdCb3R0b21SaWdodCIsInlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyIsImdldFBvc2l0aW9uIiwiX2luZGV4ZXNPZk5ld3MiLCJnZXRQMiIsImJvdW5kYXJ5UG9pbnRzIiwicmVjdEluZGV4IiwiaXNWYWxpZCIsIm5ld0xpc3QiLCJsaXN0T2xkUG9zaXRpb24iLCJtYXAiLCJuZXdEcmFnZ2FibGUiLCJGbG9hdFJpZ2h0U3RyYXRlZ3kiLCJwYWRkaW5nVG9wUmlnaHQiLCJwYWRkaW5nQm90dG9tTGVmdCIsInBhZGRpbmdCb3R0b21OZWdMZWZ0IiwiZ2V0UDQiLCJhZGRUb0RlZmF1bHRTY29wZSIsInRhcmdldCIsImRlZmF1bHRTY29wZSIsImFkZFRhcmdldCIsIlRhcmdldCIsInRpbWVFbmQiLCJ0aW1lRXhjYW5nZSIsInBvc2l0aW9uaW5nU3RyYXRlZ3kiLCJzdHJhdGVneSIsImdldFJlY3RhbmdsZSIsInRhcmdldHMiLCJlbWl0dGVyIiwiZW1pdCIsInN0YXJ0Qm91bmRpbmciLCJpbml0IiwiYm91bmRpbmciLCJpbmRleGVzT2ZOZXciLCJwb3NpdGlvbmluZyIsIm9sZERyYWdnYWJsZXMiLCJzb3J0aW5nIiwicmVjdGFuZ2xlcyIsImlubmVyRHJhZ2dhYmxlcyIsInNldFBvc2l0aW9uIiwiY2F0Y2hEcmFnZ2FibGUiLCJ0YXJnZXRSZWN0YW5nbGUiLCJkcmFnZ2FibGVTcXVhcmUiLCJzY29wZXMiLCJzY29wZSIsInJlbW92ZUl0ZW0iLCJuZXdEcmFnZ2FibGVzSW5kZXgiLCJnZXRTaXplIiwiYWRkUmVtb3ZlT25Nb3ZlIiwidGltZSIsIm1vdmUiLCJpbml0aWFsUG9zaXRpb24iLCJwdXNoSW5uZXJEcmFnZ2FibGUiLCJyZW1vdmVIYW5kbGVyIiwicmVtb3ZlIiwidW5zdWJzY3JpYmUiLCJfY29udGFpbmVyIiwiU2NvcGUiLCJkcmFnRW5kQWN0aW9uIiwib25FbmQiLCJzaG90VGFyZ2V0cyIsInNvcnQiLCJhIiwiYiIsInBpblBvc2l0aW9uIiwicmVzZXQiLCJyZWZyZXNoIiwicG9zaXRpb25zIiwibWVzc2FnZSIsInRhcmdldEluZGV4ZXMiLCJjdXJyZW50U2NvcGUiLCJhZGREcmFnZ2FibGVUb1Njb3BlIiwiYWRkRHJhZ2dhYmxlIiwiRHJhZ2dhYmxlIiwiaW50ZXJydXB0IiwiYWRkVGFyZ2V0VG9TY29wZSIsInByZXBlbmRPbiIsImlzVG91Y2giLCJtb3VzZUV2ZW50cyIsImVuZCIsInRvdWNoRXZlbnRzIiwidHJhbnNmb3JtUHJvcGVydHkiLCJnZXRTdHlsZVByb3BlcnR5IiwidHJhbnNpdGlvblByb3BlcnR5IiwiZ2V0VG91Y2hCeUlEIiwidG91Y2hJZCIsImNoYW5nZWRUb3VjaGVzIiwiaWRlbnRpZmllciIsInByZXZlbnREb3VibGVJbml0IiwiZXhpc3RpbmciLCJjb3B5U3R5bGVzIiwic291cmNlIiwiZGVzdGluYXRpb24iLCJjcyIsImtleSIsImNoaWxkcmVuIiwiX2VuYWJsZSIsInN0YXJ0UG9zaXRpb25pbmciLCJzdGFydExpc3RlbmluZyIsIl9zZXREZWZhdWx0VHJhbnNpdGlvbiIsInBpbm5lZFBvc2l0aW9uIiwiX2RyYWdTdGFydCIsImV2ZW50IiwiZHJhZ1N0YXJ0IiwiX2RyYWdNb3ZlIiwiZHJhZ01vdmUiLCJfZHJhZ0VuZCIsImRyYWdFbmQiLCJfbmF0aXZlRHJhZ1N0YXJ0IiwibmF0aXZlRHJhZ1N0YXJ0IiwiX25hdGl2ZURyYWdPdmVyIiwibmF0aXZlRHJhZ092ZXIiLCJfbmF0aXZlRHJhZ0VuZCIsIm5hdGl2ZURyYWdFbmQiLCJfbmF0aXZlRHJvcCIsIm5hdGl2ZURyb3AiLCJfc2Nyb2xsIiwib25TY3JvbGwiLCJoYW5kbGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl90cmFuc2Zvcm1Qb3NpdGlvbiIsInRyYW5zaXRpb24iLCJ0cmFuc2l0aW9uQ3NzIiwidHJhbnNsYXRlQ3NzIiwidHJhbnNmb3JtIiwic2hvdWxkUmVtb3ZlWmVyb1RyYW5zbGF0ZSIsImlzU2lsZW50IiwiZGV0ZXJtaW5lRGlyZWN0aW9uIiwiX3NldFRyYW5zaXRpb24iLCJfc2V0VHJhbnNsYXRlIiwic2lsZW50IiwibGVmdERpcmVjdGlvbiIsInJpZ2h0RGlyZWN0aW9uIiwidXBEaXJlY3Rpb24iLCJkb3duRGlyZWN0aW9uIiwiY3VycmVudEV2ZW50IiwiaXNUb3VjaEV2ZW50IiwiVG91Y2hFdmVudCIsInRvdWNoUG9pbnQiLCJfc3RhcnRUb3VjaFBvaW50IiwicGFnZVgiLCJjbGllbnRYIiwicGFnZVkiLCJjbGllbnRZIiwiX3N0YXJ0UG9zaXRpb24iLCJfdG91Y2hJZCIsIl9zdGFydFNjcm9sbFBvaW50Iiwic2Nyb2xsWCIsInNjcm9sbFkiLCJzdG9wUHJvcGFnYXRpb24iLCJIVE1MSW5wdXRFbGVtZW50IiwiZm9jdXMiLCJuYXRpdmVEcmFnQW5kRHJvcCIsInByZXZlbnREZWZhdWx0IiwiaXNTYWZhcmkiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJlbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3BPblRvdWNoIiwiZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wRm9yQWxsIiwiZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wIiwiaXNEcmFnZ2luZyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ0b3VjaCIsInNjcm9sbFBvaW50IiwicmVtb3ZlQXR0cmlidXRlIiwiX2V2ZW50IiwiZGF0YVRyYW5zZmVyIiwic2V0RGF0YSIsImVmZmVjdEFsbG93ZWQiLCJkcm9wRWZmZWN0IiwiY29udGFpbmVyUmVjdCIsImNsb25lZEVsZW1lbnQiLCJjbG9uZU5vZGUiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJlbXVsYXRpb25EcmFnZ2FibGUiLCJjb250YWluZXJSZWN0UG9pbnQiLCJkZXN0cm95IiwicmVtb3ZlQ2hpbGQiLCJyZXNldEVtaXR0ZXIiLCJfaGFuZGxlciIsImVuYWJsZSIsIkxpc3QiLCJpbml0RHJhZ2dhYmxlIiwib25Nb3ZlIiwic29ydGVkRHJhZ2dhYmxlcyIsImdldFNvcnRlZERyYWdnYWJsZXMiLCJwaW5uZWRQb3NpdGlvbnMiLCJjdXJyZW50SW5kZXgiLCJ0YXJnZXRJbmRleCIsImRpc3RhbmNlRnVuYyIsInJlc2V0UG9zaXRpb25Ub0luaXRpYWwiLCJBcnJheSIsImluaXRpYWxQb3NpdGlvbnMiLCJsaXN0IiwicmVzZXRPbiIsImoiLCJkcmFnZ2FibGVBIiwiZHJhZ2dhYmxlQiIsImdldEN1cnJlbnRQaW5uZWRQb3NpdGlvbnMiLCJjb250YWluZXJFbGVtZW50IiwiZWxlbWVudHMiLCJmcm9tIiwiYXJyYXlNb3ZlIiwidG8iLCJCdWJibGluZ0xpc3QiLCJhdXRvRGV0ZWN0VmVydGljYWxHYXAiLCJzb3J0ZWQiLCJ2ZXJ0aWNhbEdhcCIsInN0YXJ0UG9zaXRpb24iLCJidWJsaW5nIiwiY3VycmVudERyYWdnYWJsZSIsImN1cnJlbnRQb3NpdGlvbiIsImNvbXBhcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUFBLFNBQVNBLHVCQUFULENBQWlDQyxPQUFqQyxFQUEwQ0MsS0FBMUMsRUFBaUQ7RUFDL0MsU0FBT0EsS0FBSyxDQUFDQyxNQUFOLENBQWEsVUFBQ0MsR0FBRCxFQUFNQyxJQUFOLEVBQWU7RUFDakMsV0FBT0QsR0FBRyxHQUFHRSxRQUFRLENBQUNDLE1BQU0sQ0FBQ0MsZ0JBQVAs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
