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
  var transformProperty = 'transform';
  var transitionProperty = 'transition';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZGV2LmpzIiwic291cmNlcyI6WyIuLi9zcmMvZ2VvbWV0cnkvcG9pbnQuanMiLCIuLi9zcmMvZ2VvbWV0cnkvcmVjdGFuZ2xlLmpzIiwiLi4vc3JjL3V0aWxzL2dldC1kZWZhdWx0LWNvbnRhaW5lci5qcyIsIi4uL3NyYy9ldmVudEVtaXR0ZXIuanMiLCIuLi9zcmMvZ2VvbWV0cnkvZGlzdGFuY2VzLmpzIiwiLi4vc3JjL2dlb21ldHJ5L2JvdW5kcy5qcyIsIi4uL3NyYy9nZW9tZXRyeS9hbmdsZXMuanMiLCIuLi9zcmMvYm91bmRpbmcuanMiLCIuLi9zcmMvdXRpbHMvcmVtb3ZlLWFycmF5LWl0ZW0uanMiLCIuLi9zcmMvdXRpbHMvcmFuZ2UuanMiLCIuLi9zcmMvcG9zaXRpb25pbmcuanMiLCIuLi9zcmMvdGFyZ2V0LmpzIiwiLi4vc3JjL3Njb3BlLmpzIiwiLi4vc3JjL3V0aWxzL2lzLXN1cHBvcnQtcGFzc2l2ZS1ldmVudHMuanMiLCIuLi9zcmMvdXRpbHMvdGhyb3R0bGUuanMiLCIuLi9zcmMvZHJhZ2dhYmxlLmpzIiwiLi4vc3JjL3V0aWxzL2RlYm91bmNlLmpzIiwiLi4vc3JjL2xpc3QuanMiLCIuLi9zcmMvYnViYmxpbmdMaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKiBDbGFzcyByZXByZXNlbnRpbmcgYSBwb2ludC4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvaW50IHtcbiAgLyoqXG4gICogQ3JlYXRlIGEgcG9pbnQuXG4gICogQHBhcmFtIHtudW1iZXJ9IHggLSBUaGUgeCB2YWx1ZS5cbiAgKiBAcGFyYW0ge251bWJlcn0geSAtIFRoZSB5IHZhbHVlLlxuICAqL1xuICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgdGhpcy54ID0geFxuICAgIHRoaXMueSA9IHlcbiAgfVxuXG4gIGFkZChwKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnggKyBwLngsIHRoaXMueSArIHAueSlcbiAgfVxuXG4gIHN1YihwKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnggLSBwLngsIHRoaXMueSAtIHAueSlcbiAgfVxuXG4gIG11bHQoaykge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54ICogaywgdGhpcy55ICogaylcbiAgfVxuXG4gIG5lZ2F0aXZlKCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQoLXRoaXMueCwgLXRoaXMueSlcbiAgfVxuXG4gIGNvbXBhcmUocCkge1xuICAgIHJldHVybiAodGhpcy54ID09PSBwLnggJiYgdGhpcy55ID09PSBwLnkpXG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCwgdGhpcy55KVxuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIGB7eD0ke3RoaXMueH0seT0ke3RoaXMueX1gXG4gIH1cblxuICBzdGF0aWMgZWxlbWVudE9mZnNldChlbGVtZW50LCBwYXJlbnQpIHtcbiAgICBwYXJlbnQgPSBwYXJlbnQgfHwgZWxlbWVudC5wYXJlbnROb2RlXG4gICAgY29uc3QgZWxlbWVudFJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgY29uc3QgcGFyZW50UmVjdCA9IHBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIHJldHVybiBuZXcgUG9pbnQoXG4gICAgICBlbGVtZW50UmVjdC5sZWZ0IC0gcGFyZW50UmVjdC5sZWZ0LFxuICAgICAgZWxlbWVudFJlY3QudG9wIC0gcGFyZW50UmVjdC50b3BcbiAgICApXG4gIH1cblxuICBzdGF0aWMgZWxlbWVudFNpemUoZWxlbWVudCkge1xuICAgIGNvbnN0IGVsZW1lbnRSZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIHJldHVybiBuZXcgUG9pbnQoXG4gICAgICBlbGVtZW50UmVjdC53aWR0aCxcbiAgICAgIGVsZW1lbnRSZWN0LmhlaWdodFxuICAgIClcbiAgfVxufVxuIiwiaW1wb3J0IFBvaW50IGZyb20gJy4vcG9pbnQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY3RhbmdsZSB7XG4gIGNvbnN0cnVjdG9yKHBvc2l0aW9uLCBzaXplKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgdGhpcy5zaXplID0gc2l6ZVxuICB9XG5cbiAgZ2V0UDEoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25cbiAgfVxuXG4gIGdldFAyKCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHRoaXMucG9zaXRpb24ueSlcbiAgfVxuXG4gIGdldFAzKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLnNpemUpXG4gIH1cblxuICBnZXRQNCgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnkpXG4gIH1cblxuICBnZXRDZW50ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb24uYWRkKHRoaXMuc2l6ZS5tdWx0KDAuNSkpXG4gIH1cblxuICBvcihyZWN0KSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBuZXcgUG9pbnQoTWF0aC5taW4odGhpcy5wb3NpdGlvbi54LCByZWN0LnBvc2l0aW9uLngpLCBNYXRoLm1pbih0aGlzLnBvc2l0aW9uLnksIHJlY3QucG9zaXRpb24ueSkpXG4gICAgY29uc3Qgc2l6ZSA9IChuZXcgUG9pbnQoTWF0aC5tYXgodGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHJlY3QucG9zaXRpb24ueCArIHJlY3Quc2l6ZS54KSwgTWF0aC5tYXgodGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnksIHJlY3QucG9zaXRpb24ueSArIHJlY3Quc2l6ZS55KSkpLnN1Yihwb3NpdGlvbilcbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZShwb3NpdGlvbiwgc2l6ZSlcbiAgfVxuXG4gIGFuZChyZWN0KSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBuZXcgUG9pbnQoTWF0aC5tYXgodGhpcy5wb3NpdGlvbi54LCByZWN0LnBvc2l0aW9uLngpLCBNYXRoLm1heCh0aGlzLnBvc2l0aW9uLnksIHJlY3QucG9zaXRpb24ueSkpXG4gICAgY29uc3Qgc2l6ZSA9IChuZXcgUG9pbnQoTWF0aC5taW4odGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHJlY3QucG9zaXRpb24ueCArIHJlY3Quc2l6ZS54KSwgTWF0aC5taW4odGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnksIHJlY3QucG9zaXRpb24ueSArIHJlY3Quc2l6ZS55KSkpLnN1Yihwb3NpdGlvbilcbiAgICBpZiAoc2l6ZS54IDw9IDAgfHwgc2l6ZS55IDw9IDApIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHBvc2l0aW9uLCBzaXplKVxuICB9XG5cbiAgaW5jbHVkZVBvaW50KHApIHtcbiAgICByZXR1cm4gISh0aGlzLnBvc2l0aW9uLnggPiBwLnggfHwgdGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLnggPCBwLnggfHwgdGhpcy5wb3NpdGlvbi55ID4gcC55IHx8IHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55IDwgcC55KVxuICB9XG5cbiAgaW5jbHVkZVJlY3RhbmdsZShyZWN0YW5nbGUpIHtcbiAgICByZXR1cm4gdGhpcy5pbmNsdWRlUG9pbnQocmVjdGFuZ2xlLnBvc2l0aW9uKSAmJiB0aGlzLmluY2x1ZGVQb2ludChyZWN0YW5nbGUuZ2V0UDMoKSlcbiAgfVxuXG4gIG1vdmVUb0JvdW5kKHJlY3QsIGF4aXMpIHtcbiAgICBsZXQgc2VsQXhpcywgY3Jvc3NSZWN0YW5nbGVcbiAgICBpZiAoYXhpcykge1xuICAgICAgc2VsQXhpcyA9IGF4aXNcbiAgICB9IGVsc2Uge1xuICAgICAgY3Jvc3NSZWN0YW5nbGUgPSB0aGlzLmFuZChyZWN0KVxuICAgICAgaWYgKCFjcm9zc1JlY3RhbmdsZSkge1xuICAgICAgICByZXR1cm4gcmVjdFxuICAgICAgfVxuICAgICAgc2VsQXhpcyA9IGNyb3NzUmVjdGFuZ2xlLnNpemUueCA+IGNyb3NzUmVjdGFuZ2xlLnNpemUueSA/ICd5JyA6ICd4J1xuICAgIH1cbiAgICBjb25zdCB0aGlzQ2VudGVyID0gdGhpcy5nZXRDZW50ZXIoKVxuICAgIGNvbnN0IHJlY3RDZW50ZXIgPSByZWN0LmdldENlbnRlcigpXG4gICAgY29uc3Qgc2lnbiA9IHRoaXNDZW50ZXJbc2VsQXhpc10gPiByZWN0Q2VudGVyW3NlbEF4aXNdID8gLTEgOiAxXG4gICAgY29uc3Qgb2Zmc2V0ID0gc2lnbiA+IDAgPyB0aGlzLnBvc2l0aW9uW3NlbEF4aXNdICsgdGhpcy5zaXplW3NlbEF4aXNdIC0gcmVjdC5wb3NpdGlvbltzZWxBeGlzXSA6IHRoaXMucG9zaXRpb25bc2VsQXhpc10gLSAocmVjdC5wb3NpdGlvbltzZWxBeGlzXSArIHJlY3Quc2l6ZVtzZWxBeGlzXSlcbiAgICByZWN0LnBvc2l0aW9uW3NlbEF4aXNdID0gcmVjdC5wb3NpdGlvbltzZWxBeGlzXSArIG9mZnNldFxuICAgIHJldHVybiByZWN0XG4gIH1cblxuICBnZXRTcXVhcmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZS54ICogdGhpcy5zaXplLnlcbiAgfVxuXG4gIHN0eWxlQXBwbHkoZWwpIHtcbiAgICBlbCA9IGVsIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2luZCcpXG4gICAgZWwuc3R5bGUubGVmdCA9IHRoaXMucG9zaXRpb24ueCArICdweCdcbiAgICBlbC5zdHlsZS50b3AgPSB0aGlzLnBvc2l0aW9uLnkgKyAncHgnXG4gICAgZWwuc3R5bGUud2lkdGggPSB0aGlzLnNpemUueCArICdweCdcbiAgICBlbC5zdHlsZS5oZWlnaHQgPSB0aGlzLnNpemUueSArICdweCdcbiAgfVxuXG4gIGdyb3d0aChzaXplKSB7XG4gICAgdGhpcy5zaXplID0gdGhpcy5zaXplLmFkZChzaXplKVxuICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uLmFkZChzaXplLm11bHQoLTAuNSkpXG4gIH1cblxuICBnZXRNaW5TaWRlKCkge1xuICAgIHJldHVybiBNYXRoLm1pbih0aGlzLnNpemUueCwgdGhpcy5zaXplLnkpXG4gIH1cblxuICBzdGF0aWMgZnJvbUVsZW1lbnQoZWxlbWVudCwgcGFyZW50PWVsZW1lbnQucGFyZW50Tm9kZSwgaXNDb25zaWRlclRyYW5zbGF0ZT1mYWxzZSkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gUG9pbnQuZWxlbWVudE9mZnNldChlbGVtZW50LCBwYXJlbnQsIGlzQ29uc2lkZXJUcmFuc2xhdGUpXG4gICAgY29uc3Qgc2l6ZSA9IFBvaW50LmVsZW1lbnRTaXplKGVsZW1lbnQpXG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUocG9zaXRpb24sIHNpemUpXG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldERlZmF1bHRDb250YWluZXIoZWxlbWVudCkge1xuICBsZXQgY29udGFpbmVyID0gZWxlbWVudC5wYXJlbnROb2RlXG4gIHdoaWxlIChjb250YWluZXIucGFyZW50Tm9kZSAmJiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShjb250YWluZXIpWydwb3NpdGlvbiddID09PSAnc3RhdGljJyAmJiBjb250YWluZXIudGFnTmFtZSAhPT0gJ0JPRFknKSB7XG4gICAgY29udGFpbmVyID0gY29udGFpbmVyLnBhcmVudE5vZGVcbiAgfVxuICByZXR1cm4gY29udGFpbmVyXG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAob3B0aW9ucyA9IHt9KSB7XG4gICAgdGhpcy5ldmVudHMgPSB7fVxuXG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5vbikge1xuICAgICAgZm9yIChjb25zdCBbZXZlbnROYW1lLCBmbl0gb2YgT2JqZWN0LmVudHJpZXMob3B0aW9ucy5vbikpIHtcbiAgICAgICAgdGhpcy5vbihldmVudE5hbWUsIGZuKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGVtaXQoZXZlbnROYW1lKSB7XG4gICAgdGhpcy5pbnRlcnJ1cHRlZCA9IGZhbHNlXG4gICAgY29uc3QgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKVxuXG4gICAgaWYgKCF0aGlzLmV2ZW50c1tldmVudE5hbWVdKSByZXR1cm5cblxuICAgIGZvciAoY29uc3QgZnVuYyBvZiB0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICBmdW5jKC4uLmFyZ3MpXG4gICAgICBpZiAodGhpcy5pbnRlcnJ1cHRlZCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpbnRlcnJ1cHQoKSB7XG4gICAgdGhpcy5pbnRlcnJ1cHRlZCA9IHRydWVcbiAgfVxuXG4gIG9uKGV2ZW50TmFtZSwgZm4pIHtcbiAgICBpZiAoIXRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSBbXVxuICAgIH1cblxuICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0ucHVzaChmbilcbiAgfVxuXG4gIHByZXBlbmRPbihldmVudE5hbWUsIGZuKSB7XG4gICAgaWYgKCF0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdID0gW11cbiAgICB9XG5cbiAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLnVuc2hpZnQoZm4pXG4gIH1cblxuICB1bnN1YnNjcmliZShldmVudE5hbWUsIGZuKSB7XG4gICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5ldmVudHNbZXZlbnROYW1lXS5pbmRleE9mKGZuKVxuICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5zcGxpY2UoaW5kZXgsIDEpXG4gICAgfVxuICB9XG5cbiAgcmVzZXRFbWl0dGVyICgpIHtcbiAgICB0aGlzLmV2ZW50cyA9IHt9XG4gIH1cblxuICByZXNldE9uKGV2ZW50TmFtZSkge1xuICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSBbXVxuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0RGlzdGFuY2UocDEsIHAyKSB7XG4gIGNvbnN0IGR4ID0gcDEueCAtIHAyLngsIGR5ID0gcDEueSAtIHAyLnlcbiAgcmV0dXJuIE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFhEaWZmZXJlbmNlKHAxLCBwMikge1xuICByZXR1cm4gTWF0aC5hYnMocDEueCAtIHAyLngpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRZRGlmZmVyZW5jZShwMSwgcDIpIHtcbiAgcmV0dXJuIE1hdGguYWJzKHAxLnkgLSBwMi55KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtZWRTcGFjZURpc3RhbmNlRmFjdG9yeShvcHRpb25zKSB7XG4gIHJldHVybiAocDEsIHAyKSA9PiB7XG4gICAgcmV0dXJuIE1hdGguc3FydChcbiAgICAgIE1hdGgucG93KG9wdGlvbnMueCAqIE1hdGguYWJzKHAxLnggLSBwMi54KSwgMikgK1xuICAgICAgTWF0aC5wb3cob3B0aW9ucy55ICogTWF0aC5hYnMocDEueSAtIHAyLnkpLCAyKVxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5kZXhPZk5lYXJlc3RQb2ludChhcnIsIHZhbCwgcmFkaXVzLCBnZXREaXN0YW5jZUZ1bmM9Z2V0RGlzdGFuY2UpIHtcbiAgbGV0IHNpemUsIGluZGV4ID0gMCwgaSwgdGVtcFxuICBpZiAoYXJyLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAtMVxuICB9XG4gIHNpemUgPSBnZXREaXN0YW5jZUZ1bmMoYXJyWzBdLCB2YWwpXG4gIGZvciAoaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICB0ZW1wID0gZ2V0RGlzdGFuY2VGdW5jKGFycltpXSwgdmFsKVxuICAgIGlmICh0ZW1wIDwgc2l6ZSkge1xuICAgICAgc2l6ZSA9IHRlbXBcbiAgICAgIGluZGV4ID0gaVxuICAgIH1cbiAgfVxuICBpZiAocmFkaXVzID49IDAgJiYgc2l6ZSA+IHJhZGl1cykge1xuICAgIHJldHVybiAtMVxuICB9XG4gIHJldHVybiBpbmRleFxufVxuIiwiaW1wb3J0IFBvaW50IGZyb20gJy4vcG9pbnQnXG5pbXBvcnQgeyBnZXREaXN0YW5jZSB9IGZyb20gJy4vZGlzdGFuY2VzJ1xuXG5leHBvcnQgZnVuY3Rpb24gY2xhbXAobWluLCBtYXgsIHZhbCkge1xuICByZXR1cm4gTWF0aC5tYXgobWluLCBNYXRoLm1pbihtYXgsIHZhbCkpXG59XG5cbi8vUmV0dXJuIGNyb3NzaW5nIHBvaW50IG9mIHR3byBsaW5lc1xuZXhwb3J0IGZ1bmN0aW9uIGRpcmVjdENyb3NzaW5nKEwxUDEsIEwxUDIsIEwyUDEsIEwyUDIpIHtcbiAgbGV0IHRlbXAsIGsxLCBrMiwgYjEsIGIyLCB4LCB5XG4gIGlmIChMMlAxLnggPT09IEwyUDIueCkge1xuICAgIHRlbXAgPSBMMlAxXG4gICAgTDJQMSA9IEwxUDFcbiAgICBMMVAxID0gdGVtcFxuICAgIHRlbXAgPSBMMlAyXG4gICAgTDJQMiA9IEwxUDJcbiAgICBMMVAyID0gdGVtcFxuICB9XG4gIGlmIChMMVAxLnggPT09IEwxUDIueCkge1xuICAgIGsyID0gKEwyUDIueSAtIEwyUDEueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgIGIyID0gKEwyUDIueCAqIEwyUDEueSAtIEwyUDEueCAqIEwyUDIueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgIHggPSBMMVAxLnhcbiAgICB5ID0geCAqIGsyICsgYjJcbiAgICByZXR1cm4gbmV3IFBvaW50KHgsIHkpXG4gIH0gZWxzZSB7XG4gICAgazEgPSAoTDFQMi55IC0gTDFQMS55KSAvIChMMVAyLnggLSBMMVAxLngpXG4gICAgYjEgPSAoTDFQMi54ICogTDFQMS55IC0gTDFQMS54ICogTDFQMi55KSAvIChMMVAyLnggLSBMMVAxLngpXG4gICAgazIgPSAoTDJQMi55IC0gTDJQMS55KSAvIChMMlAyLnggLSBMMlAxLngpXG4gICAgYjIgPSAoTDJQMi54ICogTDJQMS55IC0gTDJQMS54ICogTDJQMi55KSAvIChMMlAyLnggLSBMMlAxLngpXG4gICAgeCA9IChiMSAtIGIyKSAvIChrMiAtIGsxKVxuICAgIHkgPSB4ICogazEgKyBiMVxuICAgIHJldHVybiBuZXcgUG9pbnQoeCwgeSlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRUb1NlZ21lbnQoTFAxLCBMUDIsIFApIHtcbiAgbGV0IHgsIHlcbiAgeCA9IGNsYW1wKE1hdGgubWluKExQMS54LCBMUDIueCksIE1hdGgubWF4KExQMS54LCBMUDIueCksIFAueClcbiAgaWYgKHggIT09IFAueCkge1xuICAgIHkgPSAoeCA9PT0gTFAxLngpID8gTFAxLnkgOiBMUDIueVxuICAgIFAgPSBuZXcgUG9pbnQoeCwgeSlcbiAgfVxuXG4gIHkgPSBjbGFtcChNYXRoLm1pbihMUDEueSwgTFAyLnkpLCBNYXRoLm1heChMUDEueSwgTFAyLnkpLCBQLnkpXG4gIGlmICh5ICE9PSBQLnkpIHtcbiAgICB4ID0gKHkgPT09IExQMS55KSA/IExQMS54IDogTFAyLnhcbiAgICBQID0gbmV3IFBvaW50KHgsIHkpXG4gIH1cblxuICByZXR1cm4gUFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRUb0xpbmUoQSwgQiwgUCkge1xuICBjb25zdCBBUCA9IG5ldyBQb2ludChQLnggLSBBLngsIFAueSAtIEEueSksXG4gICAgQUIgPSBuZXcgUG9pbnQoQi54IC0gQS54LCBCLnkgLSBBLnkpLFxuICAgIGFiMiA9IEFCLnggKiBBQi54ICsgQUIueSAqIEFCLnksXG4gICAgYXBfYWIgPSBBUC54ICogQUIueCArIEFQLnkgKiBBQi55LFxuICAgIHQgPSBhcF9hYiAvIGFiMlxuICByZXR1cm4gbmV3IFBvaW50KEEueCArIEFCLnggKiB0LCBBLnkgKyBBQi55ICogdClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBvaW50T25MaW5lKExQMSwgTFAyLCBwZXJjZW50KSB7XG4gIGNvbnN0IGR4ID0gTFAyLnggLSBMUDEueCwgZHkgPSBMUDIueSAtIExQMS55XG4gIHJldHVybiBuZXcgUG9pbnQoTFAxLnggKyBwZXJjZW50ICogZHgsIExQMS55ICsgcGVyY2VudCAqIGR5KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9pbnRPbkxpbmVCeUxlbmdodChMUDEsIExQMiwgbGVuZ2h0KSB7XG4gIGNvbnN0IGR4ID0gTFAyLnggLSBMUDEueFxuICBjb25zdCBkeSA9IExQMi55IC0gTFAxLnlcbiAgY29uc3QgcGVyY2VudCA9IGxlbmdodCAvIGdldERpc3RhbmNlKExQMSwgTFAyKVxuICByZXR1cm4gbmV3IFBvaW50KExQMS54ICsgcGVyY2VudCAqIGR4LCBMUDEueSArIHBlcmNlbnQgKiBkeSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFBvaW50VG9Cb3VuZFBvaW50cyhib3VuZHBvaW50cywgcG9pbnQsIGlzUmlnaHQpIHtcbiAgY29uc3QgcmVzdWx0ID0gYm91bmRwb2ludHMuZmlsdGVyKChiUG9pbnQpID0+IHtcbiAgICByZXR1cm4gYlBvaW50LnkgPiBwb2ludC55IHx8IChpc1JpZ2h0ID8gYlBvaW50LnggPCBwb2ludC54IDogYlBvaW50LnggPiBwb2ludC54KVxuICB9KVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzdWx0Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHBvaW50LnkgPCByZXN1bHRbaV0ueSkge1xuICAgICAgcmVzdWx0LnNwbGljZShpLCAwLCBwb2ludClcbiAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG4gIH1cbiAgcmVzdWx0LnB1c2gocG9pbnQpXG4gIHJldHVybiByZXN1bHRcbn1cbiIsImltcG9ydCBQb2ludCBmcm9tICcuL3BvaW50J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QW5nbGVEaWZmKGFscGhhLCBiZXRhKSB7XG4gIGNvbnN0IG1pbkFuZ2xlID0gTWF0aC5taW4oYWxwaGEsIGJldGEpXG4gIGNvbnN0IG1heEFuZ2xlID0gIE1hdGgubWF4KGFscGhhLCBiZXRhKVxuICByZXR1cm4gTWF0aC5taW4obWF4QW5nbGUgLSBtaW5BbmdsZSwgbWluQW5nbGUgKyBNYXRoLlBJKjIgLSBtYXhBbmdsZSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFuZ2xlKHAxLCBwMikge1xuICBjb25zdCBkaWZmID0gcDIuc3ViKHAxKVxuICByZXR1cm4gbm9ybWFsaXplQW5nbGUoTWF0aC5hdGFuMihkaWZmLnksIGRpZmYueCkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b1JhZGlhbihhbmdsZSkge1xuICByZXR1cm4gKChhbmdsZSAlIDM2MCkgKiBNYXRoLlBJIC8gMTgwKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9EZWdyZWUoYW5nbGUpIHtcbiAgcmV0dXJuIChhbmdsZSAqIDE4MCAvIE1hdGguUEkpICUgMzYwXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZEFuZ2xlKG1pbiwgbWF4LCB2YWwpIHtcbiAgbGV0IGRtaW4sIGRtYXhcbiAgaWYgKG1pbiA8IG1heCAmJiB2YWwgPiBtaW4gJiYgdmFsIDwgbWF4KSB7XG4gICAgcmV0dXJuIHZhbFxuICB9IGVsc2UgaWYgKG1heCA8IG1pbiAmJiAodmFsIDwgbWF4IHx8IHZhbCA+IG1pbikpIHtcbiAgICByZXR1cm4gdmFsXG4gIH0gZWxzZSB7XG4gICAgZG1pbiA9IGdldEFuZ2xlRGlmZihtaW4sIHZhbClcbiAgICBkbWF4ID0gZ2V0QW5nbGVEaWZmKG1heCwgdmFsKVxuICAgIGlmIChkbWluIDwgZG1heCkge1xuICAgICAgcmV0dXJuIG1pblxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbWF4XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROZWFyZXN0QW5nbGUoYXJyLCBhbmdsZSkge1xuICBsZXQgaSwgdGVtcCwgZGlmZiA9IE1hdGguUEkgKiAyLCB2YWx1ZVxuICBmb3IgKGkgPSAwOyBpIDwgYXJyLmxlbmd0aDtpKyspIHtcbiAgICB0ZW1wID0gZ2V0QW5nbGVEaWZmKGFycltpXSwgYW5nbGUpXG4gICAgaWYgKGRpZmYgPCB0ZW1wKSB7XG4gICAgICBkaWZmID0gdGVtcFxuICAgICAgdmFsdWUgPSBhcnJbaV1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHZhbHVlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVBbmdsZSh2YWwpIHtcbiAgd2hpbGUgKHZhbCA8IDApIHtcbiAgICB2YWwgKz0gMiAqIE1hdGguUElcbiAgfVxuICB3aGlsZSAodmFsID4gMiAqIE1hdGguUEkpIHtcbiAgICB2YWwgLT0gMiAqIE1hdGguUElcbiAgfVxuICByZXR1cm4gdmFsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oYW5nbGUsIGxlbmd0aCwgY2VudGVyKSB7XG4gIGNlbnRlciA9IGNlbnRlciB8fCBuZXcgUG9pbnQoMCwgMClcbiAgcmV0dXJuIGNlbnRlci5hZGQobmV3IFBvaW50KGxlbmd0aCAqIE1hdGguY29zKGFuZ2xlKSwgbGVuZ3RoICogTWF0aC5zaW4oYW5nbGUpKSlcbn1cbiIsImltcG9ydCBQb2ludCBmcm9tICcuL2dlb21ldHJ5L3BvaW50J1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tICcuL2dlb21ldHJ5L3JlY3RhbmdsZSdcbmltcG9ydCB7XG4gIGdldFBvaW50T25MaW5lQnlMZW5naHQsXG4gIGRpcmVjdENyb3NzaW5nLFxuICBib3VuZFRvTGluZVxufSBmcm9tICcuL2dlb21ldHJ5L2JvdW5kcydcblxuaW1wb3J0IHtcbiAgZ2V0QW5nbGUsXG4gIG5vcm1hbGl6ZUFuZ2xlLFxuICBib3VuZEFuZ2xlLFxuICBnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW1cbn0gZnJvbSAnLi9nZW9tZXRyeS9hbmdsZXMnXG5cbmV4cG9ydCBjbGFzcyBCb3VuZCB7XG4gIGNvbnN0cnVjdG9yICgpIHt9XG5cbiAgYm91bmQocG9pbnQsIF9zaXplKSB7XG4gICAgcmV0dXJuIHBvaW50XG4gIH1cblxuICByZWZyZXNoICgpIHt9XG5cbiAgc3RhdGljIGJvdW5kaW5nKCkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IHRoaXMoLi4uYXJndW1lbnRzKVxuICAgIHJldHVybiBpbnN0YW5jZS5ib3VuZC5iaW5kKGluc3RhbmNlKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvUmVjdGFuZ2xlIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3RvcihyZWN0YW5nbGUpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5yZWN0YW5nbGUgPSByZWN0YW5nbGVcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgY2FsY1BvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIGNvbnN0IHJlY3RQMiA9IHRoaXMucmVjdGFuZ2xlLmdldFAzKClcblxuICAgIGlmICh0aGlzLnJlY3RhbmdsZS5wb3NpdGlvbi54ID4gY2FsY1BvaW50LngpIHtcbiAgICAgIChjYWxjUG9pbnQueCA9IHRoaXMucmVjdGFuZ2xlLnBvc2l0aW9uLngpXG4gICAgfVxuICAgIGlmICh0aGlzLnJlY3RhbmdsZS5wb3NpdGlvbi55ID4gY2FsY1BvaW50LnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gdGhpcy5yZWN0YW5nbGUucG9zaXRpb24ueVxuICAgIH1cbiAgICBpZiAocmVjdFAyLnggPCBjYWxjUG9pbnQueCArIHNpemUueCkge1xuICAgICAgY2FsY1BvaW50LnggPSByZWN0UDIueCAtIHNpemUueFxuICAgIH1cbiAgICBpZiAocmVjdFAyLnkgPCBjYWxjUG9pbnQueSArIHNpemUueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSByZWN0UDIueSAtIHNpemUueVxuICAgIH1cblxuICAgIHJldHVybiBjYWxjUG9pbnRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb0VsZW1lbnQgZXh0ZW5kcyBCb3VuZFRvUmVjdGFuZ2xlIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29udGFpbmVyKSB7XG4gICAgc3VwZXIoUmVjdGFuZ2xlLmZyb21FbGVtZW50KGVsZW1lbnQsIGNvbnRhaW5lcikpXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyXG4gIH1cblxuICByZWZyZXNoICgpIHtcbiAgICB0aGlzLnJlY3RhbmdsZSA9IFJlY3RhbmdsZS5mcm9tRWxlbWVudCh0aGlzLmVsZW1lbnQsIHRoaXMuY29udGFpbmVyKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvTGluZVggZXh0ZW5kcyBCb3VuZCB7XG4gIGNvbnN0cnVjdG9yKHgsIHN0YXJ0WSwgZW5kWSkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnggPSB4XG4gICAgdGhpcy5zdGFydFkgPSBzdGFydFlcbiAgICB0aGlzLmVuZFkgPSBlbmRZXG4gIH1cblxuICBib3VuZChwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IGNhbGNQb2ludCA9IHBvaW50LmNsb25lKClcblxuICAgIGNhbGNQb2ludC54ID0gdGhpcy54XG4gICAgaWYgKHRoaXMuc3RhcnRZID4gY2FsY1BvaW50LnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gdGhpcy5zdGFydFlcbiAgICB9XG4gICAgaWYgKHRoaXMuZW5kWSA8IGNhbGNQb2ludC55ICsgc2l6ZS55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHRoaXMuZW5kWSAtIHNpemUueVxuICAgIH1cblxuICAgIHJldHVybiBjYWxjUG9pbnRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb0xpbmVZIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3Rvcih5LCBzdGFydFgsIGVuZFgpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy55ID0geVxuICAgIHRoaXMuc3RhcnRYID0gc3RhcnRYXG4gICAgdGhpcy5lbmRYID0gZW5kWFxuICB9XG5cbiAgYm91bmQocG9pbnQsIHNpemUpIHtcbiAgICBjb25zdCBjYWxjUG9pbnQgPSBwb2ludC5jbG9uZSgpXG4gICAgY2FsY1BvaW50LnkgPSB0aGlzLnlcbiAgICBpZiAodGhpcy5zdGFydFggPiBjYWxjUG9pbnQueCkge1xuICAgICAgY2FsY1BvaW50LnggPSB0aGlzLnN0YXJ0WFxuICAgIH1cbiAgICBpZiAodGhpcy5lbmRYIDwgY2FsY1BvaW50LnggKyBzaXplLngpIHtcbiAgICAgIGNhbGNQb2ludC54ID0gdGhpcy5lbmRYIC0gc2l6ZS54XG4gICAgfVxuICAgIHJldHVybiBjYWxjUG9pbnRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb0xpbmUgZXh0ZW5kcyBCb3VuZCB7XG4gIGNvbnN0cnVjdG9yKHN0YXJ0UG9pbnQsIGVuZFBvaW50KSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuc3RhcnRQb2ludCA9IHN0YXJ0UG9pbnRcbiAgICB0aGlzLmVuZFBvaW50ID0gZW5kUG9pbnRcbiAgICBjb25zdCBhbHBoYSA9IE1hdGguYXRhbjIoZW5kUG9pbnQueSAtIHN0YXJ0UG9pbnQueSwgZW5kUG9pbnQueCAtIHN0YXJ0UG9pbnQueClcbiAgICBjb25zdCBiZXRhID0gYWxwaGEgKyBNYXRoLlBJIC8gMlxuICAgIHRoaXMuc29tZUsgPSAxMFxuICAgIHRoaXMuY29zQmV0YSA9IE1hdGguY29zKGJldGEpXG4gICAgdGhpcy5zaW5CZXRhID0gTWF0aC5zaW4oYmV0YSlcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgcG9pbnQyID0gbmV3IFBvaW50KFxuICAgICAgcG9pbnQueCArIHRoaXMuc29tZUsgKiB0aGlzLmNvc0JldGEsXG4gICAgICBwb2ludC55ICsgdGhpcy5zb21lSyAqIHRoaXMuc2luQmV0YVxuICAgIClcblxuICAgIGNvbnN0IG5ld0VuZFBvaW50ID0gZ2V0UG9pbnRPbkxpbmVCeUxlbmdodCh0aGlzLmVuZFBvaW50LCB0aGlzLnN0YXJ0UG9pbnQsIHNpemUueClcbiAgICBjb25zdCBwb2ludENyb3NzaW5nID0gZGlyZWN0Q3Jvc3NpbmcodGhpcy5zdGFydFBvaW50LCB0aGlzLmVuZFBvaW50LCBwb2ludCwgcG9pbnQyKVxuXG4gICAgcmV0dXJuIGJvdW5kVG9MaW5lKHRoaXMuc3RhcnRQb2ludCwgbmV3RW5kUG9pbnQsIHBvaW50Q3Jvc3NpbmcpXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9DaXJjbGUgZXh0ZW5kcyBCb3VuZCB7XG4gIGNvbnN0cnVjdG9yKGNlbnRlciwgcmFkaXVzKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuY2VudGVyID0gY2VudGVyXG4gICAgdGhpcy5yYWRpdXMgPSByYWRpdXNcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBfc2l6ZSkge1xuICAgIHJldHVybiBnZXRQb2ludE9uTGluZUJ5TGVuZ2h0KHRoaXMuY2VudGVyLCBwb2ludCwgdGhpcy5yYWRpdXMpXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9BcmMgZXh0ZW5kcyBCb3VuZFRvQ2lyY2xlIHtcbiAgY29uc3RydWN0b3IoY2VudGVyLCByYWRpdXMsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlKSB7XG4gICAgc3VwZXIoY2VudGVyLCByYWRpdXMpXG4gICAgdGhpcy5fc3RhcnRBbmdsZSA9IHN0YXJ0QW5nbGVcbiAgICB0aGlzLl9lbmRBbmdsZSA9IGVuZEFuZ2xlXG4gIH1cblxuICBzdGFydEFuZ2xlKCkge1xuICAgIHJldHVybiB0eXBlb2YgdGhpcy5fc3RhcnRBbmdsZSA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMuX3N0YXJ0QW5nbGUoKSA6IHRoaXMuX3N0YXJ0QW5nbGVcbiAgfVxuXG4gIGVuZEFuZ2xlKCkge1xuICAgIHJldHVybiB0eXBlb2YgdGhpcy5fZW5kQW5nbGUgPT09ICdmdW5jdGlvbicgPyB0aGlzLl9lbmRBbmdsZSgpIDogdGhpcy5fZW5kQW5nbGVcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBfc2l6ZSkge1xuICAgIGxldCBhbmdsZSA9IGdldEFuZ2xlKHRoaXMuY2VudGVyLCBwb2ludClcbiAgICBhbmdsZSA9IG5vcm1hbGl6ZUFuZ2xlKGFuZ2xlKVxuICAgIGFuZ2xlID0gYm91bmRBbmdsZSh0aGlzLnN0YXJ0QW5nbGUoKSwgdGhpcy5lbmRBbmdsZSgpLCBhbmdsZSlcbiAgICByZXR1cm4gZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKGFuZ2xlLCB0aGlzLnJhZGl1cywgdGhpcy5jZW50ZXIpXG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGFycmF5LCB2YWwpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChhcnJheVtpXSA9PT0gdmFsKSB7XG4gICAgICBhcnJheS5zcGxpY2UoaSwgMSlcbiAgICAgIGktLVxuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyYXlcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJhbmdlKHN0YXJ0LCBzdG9wLCBzdGVwKSB7XG4gIGNvbnN0IHJlc3VsdCA9IFtdXG4gIGlmICh0eXBlb2Ygc3RvcCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBzdG9wID0gc3RhcnRcbiAgICBzdGFydCA9IDBcbiAgfVxuICBpZiAodHlwZW9mIHN0ZXAgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgc3RlcCA9IDFcbiAgfVxuICBpZiAoKHN0ZXAgPiAwICYmIHN0YXJ0ID49IHN0b3ApIHx8IChzdGVwIDwgMCAmJiBzdGFydCA8PSBzdG9wKSkge1xuICAgIHJldHVybiBbXVxuICB9XG4gIGZvciAobGV0IGkgPSBzdGFydDsgc3RlcCA+IDAgPyBpIDwgc3RvcCA6IGkgPiBzdG9wOyBpICs9IHN0ZXApIHtcbiAgICByZXN1bHQucHVzaChpKVxuICB9XG4gIHJldHVybiByZXN1bHRcbn1cbiIsImltcG9ydCBQb2ludCBmcm9tICcuL2dlb21ldHJ5L3BvaW50J1xuaW1wb3J0IHsgYWRkUG9pbnRUb0JvdW5kUG9pbnRzIH0gZnJvbSAnLi9nZW9tZXRyeS9ib3VuZHMnXG5cbmltcG9ydCB7XG4gIGluZGV4T2ZOZWFyZXN0UG9pbnQsXG4gIGdldERpc3RhbmNlXG59IGZyb20gJy4vZ2VvbWV0cnkvZGlzdGFuY2VzJ1xuXG5jbGFzcyBCYXNpY1N0cmF0ZWd5IHtcbiAgY29uc3RydWN0b3IocmVjdGFuZ2xlLCBvcHRpb25zPXt9KSB7XG4gICAgdGhpcy5yZWN0YW5nbGUgPSByZWN0YW5nbGVcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zXG4gIH1cblxuICBnZXQgYm91bmRSZWN0ICgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMucmVjdGFuZ2xlID09PSAnZnVuY3Rpb24nID8gdGhpcy5yZWN0YW5nbGUoKSA6IHRoaXMucmVjdGFuZ2xlXG4gIH1cbn1cblxuY2xhc3MgTm90Q3Jvc3NpbmdTdHJhdGVneSBleHRlbmRzIEJhc2ljU3RyYXRlZ3kge1xuICBwb3NpdGlvbmluZyAocmVjdGFuZ2xlTGlzdCwgaW5kZXhlc09mTmV3cykge1xuICAgIGNvbnN0IHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMgPSByZWN0YW5nbGVMaXN0LnJlZHVjZSgoaW5kZXhlcywgX3JlY3QsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoaW5kZXhlc09mTmV3cy5pbmRleE9mKGluZGV4KSA9PT0gLTEpIHtcbiAgICAgICAgaW5kZXhlcy5wdXNoKGluZGV4KVxuICAgICAgfVxuICAgICAgcmV0dXJuIGluZGV4ZXNcbiAgICB9LCBbXSlcblxuICAgIGluZGV4ZXNPZk5ld3MuZm9yRWFjaCgoaW5kZXgpID0+IHtcbiAgICAgIGxldCByZWN0ID0gcmVjdGFuZ2xlTGlzdFtpbmRleF1cbiAgICAgIGxldCByZW1vdmFibGUgPSBmYWxzZVxuXG4gICAgICBzdGF0aWNSZWN0YW5nbGVJbmRleGVzLmZvckVhY2goKGluZGV4T2ZTdGF0aWMpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhdGljUmVjdCA9IHJlY3RhbmdsZUxpc3RbaW5kZXhPZlN0YXRpY11cbiAgICAgICAgcmVjdCA9IHN0YXRpY1JlY3QubW92ZVRvQm91bmQocmVjdClcbiAgICAgIH0pXG5cbiAgICAgIHJlbW92YWJsZSA9IHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMuc29tZSgoaW5kZXhPZlN0YXRpYykgPT4ge1xuICAgICAgICBjb25zdCBzdGF0aWNSZWN0ID0gcmVjdGFuZ2xlTGlzdFtpbmRleE9mU3RhdGljXVxuICAgICAgICByZXR1cm4gICEhc3RhdGljUmVjdC5hbmQocmVjdClcbiAgICAgIH0pIHx8IHJlY3QuYW5kKHRoaXMuYm91bmRSZWN0KS5nZXRTcXVhcmUoKSAhPT0gcmVjdC5nZXRTcXVhcmUoKVxuXG4gICAgICBpZiAocmVtb3ZhYmxlKSB7XG4gICAgICAgIHJlY3QucmVtb3ZhYmxlID0gdHJ1ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdGljUmVjdGFuZ2xlSW5kZXhlcy5wdXNoKGluZGV4KVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHJlY3RhbmdsZUxpc3RcbiAgfVxuXG4gIHNvcnRpbmcob2RsRHJhZ2dhYmxlc0xpc3QsIG5ld0RyYWdnYWJsZXMsIGluZGV4T2ZOZXdzKSB7XG4gICAgY29uc3QgZHJhZ2dhYmxlcyA9IG9kbERyYWdnYWJsZXNMaXN0LmNvbmNhdChuZXdEcmFnZ2FibGVzKVxuICAgIG5ld0RyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBpbmRleE9mTmV3cy5wdXNoKGRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpKVxuICAgIH0pXG4gICAgcmV0dXJuIGRyYWdnYWJsZXNcbiAgfVxufVxuXG5jbGFzcyBGbG9hdExlZnRTdHJhdGVneSBleHRlbmRzIEJhc2ljU3RyYXRlZ3kge1xuICBjb25zdHJ1Y3RvcihyZWN0YW5nbGUsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcihyZWN0YW5nbGUsIG9wdGlvbnMpXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICByZW1vdmFibGU6IHRydWVcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGhpcy5yYWRpdXMgPSBvcHRpb25zLnJhZGl1cyB8fCA4MFxuXG4gICAgdGhpcy5wYWRkaW5nVG9wTGVmdCA9IG9wdGlvbnMucGFkZGluZ1RvcExlZnQgfHwgbmV3IFBvaW50KDAsIDApXG4gICAgdGhpcy5wYWRkaW5nQm90dG9tUmlnaHQgPSBvcHRpb25zLnBhZGRpbmdCb3R0b21SaWdodCB8fCBuZXcgUG9pbnQoMCwgMClcbiAgICB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyA9IG9wdGlvbnMueUdhcEJldHdlZW5EcmFnZ2FibGVzIHx8IDBcblxuICAgIHRoaXMuZ2V0RGlzdGFuY2UgPSBvcHRpb25zLmdldERpc3RhbmNlIHx8IGdldERpc3RhbmNlXG4gICAgdGhpcy5nZXRQb3NpdGlvbiA9IG9wdGlvbnMuZ2V0UG9zaXRpb24gfHwgKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5wb3NpdGlvbilcbiAgfVxuXG4gIHBvc2l0aW9uaW5nKHJlY3RhbmdsZUxpc3QsIF9pbmRleGVzT2ZOZXdzKSB7XG4gICAgY29uc3QgYm91bmRSZWN0ID0gdGhpcy5ib3VuZFJlY3RcbiAgICBjb25zdCByZWN0UDIgPSBib3VuZFJlY3QuZ2V0UDIoKVxuICAgIGxldCBib3VuZGFyeVBvaW50cyA9IFtib3VuZFJlY3QucG9zaXRpb25dXG5cbiAgICByZWN0YW5nbGVMaXN0LmZvckVhY2goKHJlY3QsIHJlY3RJbmRleCkgPT4ge1xuICAgICAgbGV0IHBvc2l0aW9uLCBpc1ZhbGlkID0gZmFsc2VcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm91bmRhcnlQb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcG9zaXRpb24gPSBuZXcgUG9pbnQoXG4gICAgICAgICAgYm91bmRhcnlQb2ludHNbaV0ueCArIHRoaXMucGFkZGluZ1RvcExlZnQueCxcbiAgICAgICAgICBpID4gMCA/IChib3VuZGFyeVBvaW50c1tpIC0gMV0ueSArIHRoaXMueUdhcEJldHdlZW5EcmFnZ2FibGVzKSA6IChib3VuZFJlY3QucG9zaXRpb24ueSArIHRoaXMucGFkZGluZ1RvcExlZnQueSlcbiAgICAgICAgKVxuXG4gICAgICAgIGlzVmFsaWQgPSAocG9zaXRpb24ueCArIHJlY3Quc2l6ZS54IDwgcmVjdFAyLngpXG5cbiAgICAgICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICBwb3NpdGlvbiA9IG5ldyBQb2ludChcbiAgICAgICAgICBib3VuZFJlY3QucG9zaXRpb24ueCArIHRoaXMucGFkZGluZ1RvcExlZnQueCxcbiAgICAgICAgICBib3VuZGFyeVBvaW50c1tib3VuZGFyeVBvaW50cy5sZW5ndGggLSAxXS55ICsgKHJlY3RJbmRleCA+IDAgPyB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyA6IHRoaXMucGFkZGluZ1RvcExlZnQueSlcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICByZWN0LnBvc2l0aW9uID0gcG9zaXRpb25cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucmVtb3ZhYmxlICYmIHJlY3QuZ2V0UDMoKS55ID4gYm91bmRSZWN0LmdldFAzKCkueSkge1xuICAgICAgICByZWN0LnJlbW92YWJsZSA9IHRydWVcbiAgICAgIH1cblxuICAgICAgYm91bmRhcnlQb2ludHMgPSBhZGRQb2ludFRvQm91bmRQb2ludHMoYm91bmRhcnlQb2ludHMsIHJlY3QuZ2V0UDMoKS5hZGQodGhpcy5wYWRkaW5nQm90dG9tUmlnaHQpKVxuICAgIH0pXG4gICAgcmV0dXJuIHJlY3RhbmdsZUxpc3RcbiAgfVxuXG4gIHNvcnRpbmcob2RsRHJhZ2dhYmxlc0xpc3QsIG5ld0RyYWdnYWJsZXMsIGluZGV4T2ZOZXdzKSB7XG4gICAgY29uc3QgbmV3TGlzdCA9IG9kbERyYWdnYWJsZXNMaXN0LmNvbmNhdCgpXG4gICAgY29uc3QgbGlzdE9sZFBvc2l0aW9uID0gb2RsRHJhZ2dhYmxlc0xpc3QubWFwKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5nZXRQb3NpdGlvbigpKVxuICAgIG5ld0RyYWdnYWJsZXMuZm9yRWFjaCgobmV3RHJhZ2dhYmxlKSA9PiB7XG4gICAgICBsZXQgaW5kZXggPSBpbmRleE9mTmVhcmVzdFBvaW50KGxpc3RPbGRQb3NpdGlvbiwgdGhpcy5nZXRQb3NpdGlvbihuZXdEcmFnZ2FibGUpLCB0aGlzLnJhZGl1cywgdGhpcy5nZXREaXN0YW5jZSlcbiAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgaW5kZXggPSBuZXdMaXN0Lmxlbmd0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5kZXggPSBuZXdMaXN0LmluZGV4T2Yob2RsRHJhZ2dhYmxlc0xpc3RbaW5kZXhdKVxuICAgICAgfVxuICAgICAgbmV3TGlzdC5zcGxpY2UoaW5kZXgsIDAsIG5ld0RyYWdnYWJsZSlcbiAgICB9KVxuICAgIG5ld0RyYWdnYWJsZXMuZm9yRWFjaCgobmV3RHJhZ2dhYmxlKSA9PiB7XG4gICAgICBpbmRleE9mTmV3cy5wdXNoKG5ld0xpc3QuaW5kZXhPZihuZXdEcmFnZ2FibGUpKVxuICAgIH0pXG4gICAgcmV0dXJuIG5ld0xpc3RcbiAgfVxufVxuXG5jbGFzcyBGbG9hdFJpZ2h0U3RyYXRlZ3kgZXh0ZW5kcyBGbG9hdExlZnRTdHJhdGVneSB7XG4gIGNvbnN0cnVjdG9yKHJlY3RhbmdsZSwgb3B0aW9ucz17fSkge1xuICAgIHN1cGVyKHJlY3RhbmdsZSwgb3B0aW9ucylcblxuICAgIHRoaXMucGFkZGluZ1RvcFJpZ2h0ID0gb3B0aW9ucy5wYWRkaW5nVG9wUmlnaHQgfHwgbmV3IFBvaW50KDUsIDUpXG4gICAgdGhpcy5wYWRkaW5nQm90dG9tTGVmdCA9IG9wdGlvbnMucGFkZGluZ0JvdHRvbUxlZnQgfHwgbmV3IFBvaW50KDAsIDApXG4gICAgdGhpcy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgPSBvcHRpb25zLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyB8fCAwXG5cbiAgICB0aGlzLnBhZGRpbmdCb3R0b21OZWdMZWZ0ID0gbmV3IFBvaW50KC10aGlzLnBhZGRpbmdCb3R0b21MZWZ0LngsIHRoaXMucGFkZGluZ0JvdHRvbUxlZnQueSlcbiAgfVxuXG4gIHBvc2l0aW9uaW5nKHJlY3RhbmdsZUxpc3QsIF9pbmRleGVzT2ZOZXdzKSB7XG4gICAgY29uc3QgYm91bmRSZWN0ID0gdGhpcy5ib3VuZFJlY3RcbiAgICBsZXQgYm91bmRhcnlQb2ludHMgPSBbYm91bmRSZWN0LmdldFAyKCldXG5cbiAgICByZWN0YW5nbGVMaXN0LmZvckVhY2goKHJlY3QsIHJlY3RJbmRleCkgPT4ge1xuICAgICAgbGV0IHBvc2l0aW9uLCBpc1ZhbGlkID0gZmFsc2VcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm91bmRhcnlQb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcG9zaXRpb24gPSBuZXcgUG9pbnQoXG4gICAgICAgICAgYm91bmRhcnlQb2ludHNbaV0ueCAtIHJlY3Quc2l6ZS54IC0gdGhpcy5wYWRkaW5nVG9wUmlnaHQueCxcbiAgICAgICAgICBpID4gMCA/IChib3VuZGFyeVBvaW50c1tpIC0gMV0ueSArIHRoaXMueUdhcEJldHdlZW5EcmFnZ2FibGVzKSA6IChib3VuZFJlY3QucG9zaXRpb24ueSArIHRoaXMucGFkZGluZ1RvcFJpZ2h0LnkpXG4gICAgICAgIClcblxuICAgICAgICBpc1ZhbGlkID0gKHBvc2l0aW9uLnggPiByZWN0LnBvc2l0aW9uLngpXG4gICAgICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICAgIHBvc2l0aW9uID0gbmV3IFBvaW50KFxuICAgICAgICAgIGJvdW5kUmVjdC5nZXRQMigpLnggIC0gcmVjdC5zaXplLnggLSB0aGlzLnBhZGRpbmdUb3BSaWdodC54LFxuICAgICAgICAgIGJvdW5kYXJ5UG9pbnRzW2JvdW5kYXJ5UG9pbnRzLmxlbmd0aCAtIDFdLnkgKyAocmVjdEluZGV4ID4gMCA/IHRoaXMueUdhcEJldHdlZW5EcmFnZ2FibGVzIDogdGhpcy5wYWRkaW5nVG9wUmlnaHQueSlcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgcmVjdC5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnJlbW92YWJsZSAmJiByZWN0LmdldFA0KCkueSA+IGJvdW5kUmVjdC5nZXRQNCgpLnkpIHtcbiAgICAgICAgcmVjdC5yZW1vdmFibGUgPSB0cnVlXG4gICAgICB9XG4gICAgICBib3VuZGFyeVBvaW50cyA9IGFkZFBvaW50VG9Cb3VuZFBvaW50cyhib3VuZGFyeVBvaW50cywgcmVjdC5nZXRQNCgpLmFkZCh0aGlzLnBhZGRpbmdCb3R0b21OZWdMZWZ0KSwgdHJ1ZSlcbiAgICB9KVxuICAgIHJldHVybiByZWN0YW5nbGVMaXN0XG4gIH1cbn1cblxuZXhwb3J0IHsgTm90Q3Jvc3NpbmdTdHJhdGVneSwgRmxvYXRMZWZ0U3RyYXRlZ3ksIEZsb2F0UmlnaHRTdHJhdGVneSB9XG4iLCJpbXBvcnQgcmFuZ2UgZnJvbSAnLi91dGlscy9yYW5nZS5qcydcbmltcG9ydCByZW1vdmVJdGVtIGZyb20gJy4vdXRpbHMvcmVtb3ZlLWFycmF5LWl0ZW0nXG5pbXBvcnQgZ2V0RGVmYXVsdENvbnRhaW5lciBmcm9tICcuL3V0aWxzL2dldC1kZWZhdWx0LWNvbnRhaW5lcidcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudEVtaXR0ZXInXG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gJy4vZ2VvbWV0cnkvcmVjdGFuZ2xlJ1xuaW1wb3J0IHsgdHJhbnNmb3JtZWRTcGFjZURpc3RhbmNlRmFjdG9yeSB9IGZyb20gJy4vZ2VvbWV0cnkvZGlzdGFuY2VzJ1xuaW1wb3J0IHsgc2NvcGVzLCBkZWZhdWx0U2NvcGUgfSBmcm9tICcuL3Njb3BlJ1xuXG5pbXBvcnQgeyBGbG9hdExlZnRTdHJhdGVneSB9IGZyb20gJy4vcG9zaXRpb25pbmcnXG5pbXBvcnQgeyBCb3VuZFRvRWxlbWVudCB9IGZyb20gJy4vYm91bmRpbmcnXG5cbmNvbnN0IGFkZFRvRGVmYXVsdFNjb3BlID0gZnVuY3Rpb24odGFyZ2V0KSB7XG4gIGRlZmF1bHRTY29wZS5hZGRUYXJnZXQodGFyZ2V0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXJnZXQgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBkcmFnZ2FibGVzLCBvcHRpb25zID0ge30pIHtcbiAgICBzdXBlcihvcHRpb25zKVxuICAgIGNvbnN0IHRhcmdldCA9IHRoaXNcblxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgdGltZUVuZDogMjAwLFxuICAgICAgdGltZUV4Y2FuZ2U6IDQwMFxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0aGlzLnBvc2l0aW9uaW5nU3RyYXRlZ3kgPSBvcHRpb25zLnN0cmF0ZWd5IHx8IG5ldyBGbG9hdExlZnRTdHJhdGVneShcbiAgICAgIHRoaXMuZ2V0UmVjdGFuZ2xlLmJpbmQodGhpcyksXG4gICAgICB7XG4gICAgICAgIHJhZGl1czogODAsXG4gICAgICAgIGdldERpc3RhbmNlOiB0cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5KHsgeDogMSwgeTogNCB9KSxcbiAgICAgICAgcmVtb3ZhYmxlOiB0cnVlXG4gICAgICB9XG4gICAgKVxuXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUudGFyZ2V0cy5wdXNoKHRhcmdldCkpXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gZHJhZ2dhYmxlc1xuXG4gICAgVGFyZ2V0LmVtaXR0ZXIuZW1pdCgndGFyZ2V0OmNyZWF0ZScsIHRoaXMpXG5cbiAgICB0aGlzLnN0YXJ0Qm91bmRpbmcoKVxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBzdGFydEJvdW5kaW5nKCkge1xuICAgIHRoaXMuYm91bmQgPSB0aGlzLm9wdGlvbnMuYm91bmQgfHwgQm91bmRUb0VsZW1lbnQuYm91bmRpbmcodGhpcy5lbGVtZW50KVxuICB9XG5cbiAgcG9zaXRpb25pbmcgKGRyYWdnYWJsZXMsIGluZGV4ZXNPZk5ldykge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uaW5nU3RyYXRlZ3kucG9zaXRpb25pbmcoZHJhZ2dhYmxlcywgaW5kZXhlc09mTmV3KVxuICB9XG5cbiAgc29ydGluZyAob2xkRHJhZ2dhYmxlcywgbmV3RHJhZ2dhYmxlcywgaW5kZXhPZk5ld3MpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbmluZ1N0cmF0ZWd5LnNvcnRpbmcob2xkRHJhZ2dhYmxlcywgbmV3RHJhZ2dhYmxlcywgaW5kZXhPZk5ld3MpXG4gIH1cblxuICBpbml0KCkge1xuICAgIGxldCByZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXdcblxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzID0gdGhpcy5kcmFnZ2FibGVzLmZpbHRlcigoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBsZXQgZWxlbWVudCA9IGRyYWdnYWJsZS5lbGVtZW50LnBhcmVudE5vZGVcbiAgICAgIHdoaWxlIChlbGVtZW50KSB7XG4gICAgICAgIGlmIChlbGVtZW50ID09PSB0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGVcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH0pXG5cbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMubGVuZ3RoKSB7XG4gICAgICBpbmRleGVzT2ZOZXcgPSByYW5nZSh0aGlzLmlubmVyRHJhZ2dhYmxlcy5sZW5ndGgpXG4gICAgICByZWN0YW5nbGVzID0gdGhpcy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgICB9KSwgaW5kZXhlc09mTmV3KVxuICAgICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXcpXG4gICAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHRoaXMuZW1pdCgndGFyZ2V0OmFkZCcsIGRyYWdnYWJsZSkpXG4gICAgfVxuICB9XG5cbiAgZ2V0UmVjdGFuZ2xlKCkge1xuICAgIHJldHVybiBSZWN0YW5nbGUuZnJvbUVsZW1lbnQodGhpcy5lbGVtZW50LCB0aGlzLmNvbnRhaW5lciwgdHJ1ZSlcbiAgfVxuXG4gIGNhdGNoRHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuY2F0Y2hEcmFnZ2FibGUpIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuY2F0Y2hEcmFnZ2FibGUodGhpcywgZHJhZ2dhYmxlKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0YXJnZXRSZWN0YW5nbGUgPSB0aGlzLmdldFJlY3RhbmdsZSgpXG4gICAgICBjb25zdCBkcmFnZ2FibGVTcXVhcmUgPSBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKCkuZ2V0U3F1YXJlKClcblxuICAgICAgcmV0dXJuIGRyYWdnYWJsZVNxdWFyZSA8IHRhcmdldFJlY3RhbmdsZS5nZXRTcXVhcmUoKVxuICAgICAgICAgICAgICAmJiB0YXJnZXRSZWN0YW5nbGUuaW5jbHVkZVBvaW50KGRyYWdnYWJsZS5nZXRDZW50ZXIoKSlcbiAgICB9XG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRSZWN0YW5nbGUoKS5wb3NpdGlvblxuICB9XG5cbiAgZ2V0U2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRSZWN0YW5nbGUoKS5zaXplXG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHNjb3Blcy5mb3JFYWNoKChzY29wZSkgPT4gcmVtb3ZlSXRlbShzY29wZS50YXJnZXRzLCB0aGlzKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgW10pXG4gICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBbXSwgMClcbiAgfVxuXG4gIG9uRW5kKGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IG5ld0RyYWdnYWJsZXNJbmRleCA9IFtdXG5cbiAgICBpZiAodGhpcy5nZXRSZWN0YW5nbGUoKS5pbmNsdWRlUG9pbnQoZHJhZ2dhYmxlLmdldENlbnRlcigpKSkge1xuICAgICAgZHJhZ2dhYmxlLnBvc2l0aW9uID0gdGhpcy5ib3VuZChkcmFnZ2FibGUucG9zaXRpb24sIGRyYWdnYWJsZS5nZXRTaXplKCkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHRoaXMuZW1pdCgndGFyZ2V0OmJlZm9yZUFkZCcsIGRyYWdnYWJsZSlcblxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzID0gdGhpcy5zb3J0aW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLCBbZHJhZ2dhYmxlXSwgbmV3RHJhZ2dhYmxlc0luZGV4KVxuICAgIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgfSksIG5ld0RyYWdnYWJsZXNJbmRleClcblxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgbmV3RHJhZ2dhYmxlc0luZGV4KVxuICAgIGlmICh0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkgIT09IC0xKSB7XG4gICAgICB0aGlzLmFkZFJlbW92ZU9uTW92ZShkcmFnZ2FibGUpXG4gICAgfVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBzZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXcsIHRpbWUpIHtcbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5zbGljZSgwKS5mb3JFYWNoKChkcmFnZ2FibGUsIGkpID0+IHtcbiAgICAgIGNvbnN0IHJlY3QgPSByZWN0YW5nbGVzW2ldLFxuICAgICAgICB0aW1lRW5kID0gdGltZSB8fCB0aW1lID09PSAwID8gdGltZSA6IGluZGV4ZXNPZk5ldy5pbmRleE9mKGkpICE9PSAtMSA/IHRoaXMub3B0aW9ucy50aW1lRW5kIDogdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlXG5cbiAgICAgIGlmIChyZWN0LnJlbW92YWJsZSkge1xuICAgICAgICBkcmFnZ2FibGUubW92ZShkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uLCB0aW1lRW5kLCB0cnVlLCB0cnVlKVxuICAgICAgICByZW1vdmVJdGVtKHRoaXMuaW5uZXJEcmFnZ2FibGVzLCBkcmFnZ2FibGUpXG4gICAgICAgIHRoaXMuZW1pdCgndGFyZ2V0OnJlbW92ZScsIGRyYWdnYWJsZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRyYWdnYWJsZS5tb3ZlKHJlY3QucG9zaXRpb24sIHRpbWVFbmQsIHRydWUsIHRydWUpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGFkZChkcmFnZ2FibGUsIHRpbWUpIHtcbiAgICBjb25zdCBuZXdEcmFnZ2FibGVzSW5kZXggPSB0aGlzLmlubmVyRHJhZ2dhYmxlcy5sZW5ndGhcblxuICAgIHRoaXMuZW1pdCgndGFyZ2V0OmJlZm9yZUFkZCcsIGRyYWdnYWJsZSlcblxuICAgIHRoaXMucHVzaElubmVyRHJhZ2dhYmxlKGRyYWdnYWJsZSlcbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBuZXdEcmFnZ2FibGVzSW5kZXgsIGRyYWdnYWJsZSlcblxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgW25ld0RyYWdnYWJsZXNJbmRleF0sIHRpbWUgfHwgMClcbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMSkge1xuICAgICAgdGhpcy5hZGRSZW1vdmVPbk1vdmUoZHJhZ2dhYmxlKVxuICAgIH1cbiAgfVxuXG4gIHB1c2hJbm5lckRyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpPT09LTEpIHtcbiAgICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxuICAgIH1cbiAgfVxuXG4gIGFkZFJlbW92ZU9uTW92ZShkcmFnZ2FibGUpIHtcbiAgICBkcmFnZ2FibGUub24oJ2RyYWc6bW92ZScsIHRoaXMucmVtb3ZlSGFuZGxlciA9ICgpID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlKGRyYWdnYWJsZSlcbiAgICB9KVxuXG4gICAgdGhpcy5lbWl0KCd0YXJnZXQ6YWRkJywgZHJhZ2dhYmxlKVxuICB9XG5cbiAgcmVtb3ZlKGRyYWdnYWJsZSkge1xuICAgIGRyYWdnYWJsZS51bnN1YnNjcmliZSgnZHJhZzptb3ZlJywgdGhpcy5yZW1vdmVIYW5kbGVyKVxuXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSlcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5zcGxpY2UoaW5kZXgsIDEpXG5cbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBbXSlcblxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgW10pXG4gICAgdGhpcy5lbWl0KCd0YXJnZXQ6cmVtb3ZlJywgZHJhZ2dhYmxlKVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUubW92ZShkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uLCAwLCB0cnVlLCB0cnVlKVxuICAgICAgdGhpcy5lbWl0KCd0YXJnZXQ6cmVtb3ZlJywgZHJhZ2dhYmxlKVxuICAgIH0pXG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMgPSBbXVxuICB9XG5cbiAgZ2V0U29ydGVkRHJhZ2dhYmxlcygpIHtcbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5zbGljZSgpXG4gIH1cblxuICBnZXQgY29udGFpbmVyKCkge1xuICAgIHJldHVybiAodGhpcy5fY29udGFpbmVyID0gdGhpcy5fY29udGFpbmVyIHx8IHRoaXMub3B0aW9ucy5jb250YWluZXIgfHwgdGhpcy5vcHRpb25zLnBhcmVudCB8fCBnZXREZWZhdWx0Q29udGFpbmVyKHRoaXMuZWxlbWVudCkpXG4gIH1cbn1cblxuVGFyZ2V0LmVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKClcblRhcmdldC5lbWl0dGVyLm9uKCd0YXJnZXQ6Y3JlYXRlJywgYWRkVG9EZWZhdWx0U2NvcGUpXG4iLCJpbXBvcnQgcmVtb3ZlSXRlbSBmcm9tICcuL3V0aWxzL3JlbW92ZS1hcnJheS1pdGVtJ1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50RW1pdHRlcidcbmltcG9ydCBEcmFnZ2FibGUgZnJvbSAnLi9kcmFnZ2FibGUnXG5pbXBvcnQgVGFyZ2V0IGZyb20gJy4vdGFyZ2V0J1xuXG5jb25zdCBzY29wZXMgPSBbXVxuXG5jbGFzcyBTY29wZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKGRyYWdnYWJsZXMsIHRhcmdldHMsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcihvcHRpb25zKVxuICAgIHNjb3Blcy5mb3JFYWNoKChzY29wZSkgPT4ge1xuICAgICAgaWYgKGRyYWdnYWJsZXMpIHtcbiAgICAgICAgZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgICAgICByZW1vdmVJdGVtKHNjb3BlLmRyYWdnYWJsZXMsIGRyYWdnYWJsZSlcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgaWYgKHRhcmdldHMpIHtcbiAgICAgICAgdGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHtcbiAgICAgICAgICByZW1vdmVJdGVtKHNjb3BlLnRhcmdldHMsIHRhcmdldClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gZHJhZ2dhYmxlcyB8fCBbXVxuICAgIHRoaXMudGFyZ2V0cyA9IHRhcmdldHMgfHwgW11cbiAgICBzY29wZXMucHVzaCh0aGlzKVxuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgIHRpbWVFbmQ6IChvcHRpb25zLnRpbWVFbmQpIHx8IDQwMFxuICAgIH1cblxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5kcmFnRW5kQWN0aW9uID0gKCkgPT4gdGhpcy5vbkVuZChkcmFnZ2FibGUpXG4gICAgfSlcbiAgfVxuXG4gIGFkZERyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMucHVzaChkcmFnZ2FibGUpXG4gICAgZHJhZ2dhYmxlLmRyYWdFbmRBY3Rpb24gPSAoKSA9PiB0aGlzLm9uRW5kKGRyYWdnYWJsZSlcbiAgfVxuXG4gIGFkZFRhcmdldCh0YXJnZXQpIHtcbiAgICB0aGlzLnRhcmdldHMucHVzaCh0YXJnZXQpXG4gIH1cblxuICBvbkVuZChkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBzaG90VGFyZ2V0cyA9IHRoaXMudGFyZ2V0cy5maWx0ZXIoKHRhcmdldCkgPT4ge1xuICAgICAgcmV0dXJuIHRhcmdldC5kcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTFcbiAgICB9KS5maWx0ZXIoKHRhcmdldCkgPT4ge1xuICAgICAgcmV0dXJuIHRhcmdldC5jYXRjaERyYWdnYWJsZShkcmFnZ2FibGUpXG4gICAgfSkuc29ydCgoYSwgYikgPT4ge1xuICAgICAgcmV0dXJuIGEuZ2V0UmVjdGFuZ2xlKCkuZ2V0U3F1YXJlKCkgLSBiLmdldFJlY3RhbmdsZSgpLmdldFNxdWFyZSgpXG4gICAgfSlcblxuICAgIGlmIChzaG90VGFyZ2V0cy5sZW5ndGgpIHtcbiAgICAgIHNob3RUYXJnZXRzWzBdLm9uRW5kKGRyYWdnYWJsZSlcbiAgICB9IGVsc2UgaWYgKGRyYWdnYWJsZS50YXJnZXRzLmxlbmd0aCkge1xuICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKGRyYWdnYWJsZS5pbml0aWFsUG9zaXRpb24sIHRoaXMub3B0aW9ucy50aW1lRW5kKVxuICAgIH1cblxuICAgIHRoaXMuZW1pdCgnc2NvcGU6Y2hhbmdlJylcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMudGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHRhcmdldC5yZXNldCgpKVxuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucmVmcmVzaCgpKVxuICAgIHRoaXMudGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHRhcmdldC5yZWZyZXNoKCkpXG4gIH1cblxuICBnZXQgcG9zaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnRhcmdldHMubWFwKCh0YXJnZXQpID0+IHtcbiAgICAgIHJldHVybiB0YXJnZXQuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB0aGlzLmRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpKVxuICAgIH0pXG4gIH1cblxuICBzZXQgcG9zaXRpb25zKHBvc2l0aW9ucykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSAnd3JvbmcgYXJyYXkgbGVuZ3RoJ1xuICAgIGlmIChwb3NpdGlvbnMubGVuZ3RoID09PSB0aGlzLnRhcmdldHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB0YXJnZXQucmVzZXQoKSlcblxuICAgICAgcG9zaXRpb25zLmZvckVhY2goKHRhcmdldEluZGV4ZXMsIGkpID0+IHtcbiAgICAgICAgdGFyZ2V0SW5kZXhlcy5mb3JFYWNoKChpbmRleCkgPT4ge1xuICAgICAgICAgIHRoaXMudGFyZ2V0c1tpXS5hZGQodGhpcy5kcmFnZ2FibGVzW2luZGV4XSlcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG1lc3NhZ2VcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgZGVmYXVsdFNjb3BlID0gbmV3IFNjb3BlKClcblxuZnVuY3Rpb24gc2NvcGUoZm4pIHtcbiAgY29uc3QgY3VycmVudFNjb3BlID0gbmV3IFNjb3BlKClcblxuICBjb25zdCBhZGREcmFnZ2FibGVUb1Njb3BlID0gZnVuY3Rpb24oZHJhZ2dhYmxlKSB7XG4gICAgY3VycmVudFNjb3BlLmFkZERyYWdnYWJsZShkcmFnZ2FibGUpXG4gICAgRHJhZ2dhYmxlLmVtaXR0ZXIuaW50ZXJydXB0KClcbiAgfVxuXG4gIGNvbnN0IGFkZFRhcmdldFRvU2NvcGUgPSBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICBjdXJyZW50U2NvcGUuYWRkVGFyZ2V0KHRhcmdldClcbiAgICBEcmFnZ2FibGUuZW1pdHRlci5pbnRlcnJ1cHQoKVxuICB9XG5cbiAgRHJhZ2dhYmxlLmVtaXR0ZXIucHJlcGVuZE9uKCdkcmFnZ2FibGU6Y3JlYXRlJywgYWRkRHJhZ2dhYmxlVG9TY29wZSlcbiAgVGFyZ2V0LmVtaXR0ZXIucHJlcGVuZE9uKCd0YXJnZXQ6Y3JlYXRlJywgYWRkVGFyZ2V0VG9TY29wZSlcbiAgZm4uY2FsbCgpXG4gIERyYWdnYWJsZS5lbWl0dGVyLnVuc3Vic2NyaWJlKCdkcmFnZ2FibGU6Y3JlYXRlJywgYWRkRHJhZ2dhYmxlVG9TY29wZSlcbiAgVGFyZ2V0LmVtaXR0ZXIudW5zdWJzY3JpYmUoJ3RhcmdldDpjcmVhdGUnLCBhZGRUYXJnZXRUb1Njb3BlKVxuICByZXR1cm4gY3VycmVudFNjb3BlXG59XG5cbmV4cG9ydCB7IHNjb3BlcywgZGVmYXVsdFNjb3BlLCBTY29wZSwgc2NvcGUgfVxuIiwiZnVuY3Rpb24gY2hlY2tTdXBwb3J0UGFzc2l2ZUV2ZW50cygpIHtcbiAgbGV0IHBhc3NpdmVTdXBwb3J0ZWQgPSBmYWxzZVxuXG4gIHRyeSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ3Bhc3NpdmUnLCB7XG4gICAgICBnZXQoKSB7XG4gICAgICAgIHJldHVybiAocGFzc2l2ZVN1cHBvcnRlZCA9IHRydWUpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0ZXN0Jywgb3B0aW9ucywgb3B0aW9ucylcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndGVzdCcsIG9wdGlvbnMsIG9wdGlvbnMpXG4gIH0gY2F0Y2ggKF9lcnIpIHtcbiAgICBwYXNzaXZlU3VwcG9ydGVkID0gZmFsc2VcbiAgfVxuXG4gIHJldHVybiBwYXNzaXZlU3VwcG9ydGVkXG59XG5cbmV4cG9ydCBjb25zdCBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzID0gY2hlY2tTdXBwb3J0UGFzc2l2ZUV2ZW50cygpXG5cbmZ1bmN0aW9uIGV2ZW50T3B0aW9ucyhvcHRpb25zLCBmYWxsYmFjayA9IGZhbHNlKSB7XG4gIHJldHVybiBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzID8gb3B0aW9ucyA6IGZhbGxiYWNrXG59XG5cbmV4cG9ydCB7IGV2ZW50T3B0aW9ucyB9XG5cbmV4cG9ydCBkZWZhdWx0IGlzU3VwcG9ydFBhc3NpdmVFdmVudHNcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRocm90dGxlKGZ1bmMsIHdhaXQpIHtcbiAgbGV0IGxhc3RUaW1lID0gMFxuXG4gIHJldHVybiBmdW5jdGlvbiBleGVjdXRlZEZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzXG4gICAgY29uc3QgYXJncyA9IGFyZ3VtZW50c1xuXG4gICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKVxuICAgIGlmIChub3cgLSBsYXN0VGltZSA+PSB3YWl0KSB7XG4gICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpXG4gICAgICBsYXN0VGltZSA9IG5vd1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IGdldERlZmF1bHRDb250YWluZXIgZnJvbSAnLi91dGlscy9nZXQtZGVmYXVsdC1jb250YWluZXInXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnRFbWl0dGVyJ1xuaW1wb3J0IHsgQm91bmRUb0VsZW1lbnQgfSBmcm9tICcuL2JvdW5kaW5nJ1xuaW1wb3J0IFBvaW50IGZyb20gJy4vZ2VvbWV0cnkvcG9pbnQnXG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gJy4vZ2VvbWV0cnkvcmVjdGFuZ2xlJ1xuaW1wb3J0IHsgZGVmYXVsdFNjb3BlIH0gZnJvbSAnLi9zY29wZSdcbmltcG9ydCBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzIGZyb20gJy4vdXRpbHMvaXMtc3VwcG9ydC1wYXNzaXZlLWV2ZW50cydcbmltcG9ydCB0aHJvdHRsZSBmcm9tICcuL3V0aWxzL3Rocm90dGxlJ1xuXG5jb25zdCB0aHJvdHRsZWREcmFnT3ZlciA9IChjYWxsYmFjaywgZHVyYXRpb24pID0+IHtcbiAgY29uc3QgdGhyb3R0bGVkQ2FsbGJhY2sgPSB0aHJvdHRsZSgoZXZlbnQpID0+IGNhbGxiYWNrKGV2ZW50KSwgZHVyYXRpb24pXG4gIHJldHVybiBldmVudCA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIHRocm90dGxlZENhbGxiYWNrKGV2ZW50KVxuICB9XG59XG5cbmNvbnN0IHBhc3NpdmVGYWxzZSA9IGlzU3VwcG9ydFBhc3NpdmVFdmVudHMgPyB7IHBhc3NpdmU6IGZhbHNlIH0gOiBmYWxzZVxuXG5jb25zdCBpc1RvdWNoID0gJ29udG91Y2hzdGFydCcgaW4gd2luZG93XG5jb25zdCBtb3VzZUV2ZW50cyA9IHtcbiAgc3RhcnQ6ICdtb3VzZWRvd24nLFxuICBtb3ZlOiAnbW91c2Vtb3ZlJyxcbiAgZW5kOiAnbW91c2V1cCdcbn1cbmNvbnN0IHRvdWNoRXZlbnRzID0ge1xuICBzdGFydDogJ3RvdWNoc3RhcnQnLFxuICBtb3ZlOiAndG91Y2htb3ZlJyxcbiAgZW5kOiAndG91Y2hlbmQnXG59XG5jb25zdCBkcmFnZ2FibGVzID0gW11cbmNvbnN0IHRyYW5zZm9ybVByb3BlcnR5ID0gJ3RyYW5zZm9ybSdcbmNvbnN0IHRyYW5zaXRpb25Qcm9wZXJ0eSA9ICd0cmFuc2l0aW9uJ1xuXG5mdW5jdGlvbiBnZXRUb3VjaEJ5SUQoZWxlbWVudCwgdG91Y2hJZCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnQuY2hhbmdlZFRvdWNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZWxlbWVudC5jaGFuZ2VkVG91Y2hlc1tpXS5pZGVudGlmaWVyID09PSB0b3VjaElkKSB7XG4gICAgICByZXR1cm4gZWxlbWVudC5jaGFuZ2VkVG91Y2hlc1tpXVxuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cblxuZnVuY3Rpb24gcHJldmVudERvdWJsZUluaXQoZHJhZ2dhYmxlKSB7XG4gIGNvbnN0IG1lc3NhZ2UgPSBcImZvciB0aGlzIGVsZW1lbnQgRHJhZ2VlLkRyYWdnYWJsZSBpcyBhbHJlYWR5IGV4aXN0LCBkb24ndCBjcmVhdGUgaXQgdHdpY2UgXCJcbiAgaWYgKGRyYWdnYWJsZXMuc29tZSgoZXhpc3RpbmcpID0+IGRyYWdnYWJsZS5lbGVtZW50ID09PSBleGlzdGluZy5lbGVtZW50KSkge1xuICAgIHRocm93IG1lc3NhZ2VcbiAgfVxuICBkcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxufVxuXG5mdW5jdGlvbiBhZGRUb0RlZmF1bHRTY29wZShkcmFnZ2FibGUpIHtcbiAgZGVmYXVsdFNjb3BlLmFkZERyYWdnYWJsZShkcmFnZ2FibGUpXG59XG5cbmZ1bmN0aW9uIGNvcHlTdHlsZXMoc291cmNlLCBkZXN0aW5hdGlvbikge1xuICBjb25zdCBjcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHNvdXJjZSlcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qga2V5ID0gY3NbaV1cbiAgICBpZiAoKGtleS5pbmRleE9mKCd0cmFuc2l0aW9uJykgPCAwKSAmJiAoa2V5LmluZGV4T2YoJ3RyYW5zZm9ybScpIDwgMCkpIHtcbiAgICAgIGRlc3RpbmF0aW9uLnN0eWxlW2tleV0gPSBjc1trZXldXG4gICAgfVxuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzb3VyY2UuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICBjb3B5U3R5bGVzKHNvdXJjZS5jaGlsZHJlbltpXSwgZGVzdGluYXRpb24uY2hpbGRyZW5baV0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhZ2dhYmxlIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgb3B0aW9ucz17fSkge1xuICAgIHN1cGVyKG9wdGlvbnMpXG4gICAgdGhpcy50YXJnZXRzID0gW11cbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIHByZXZlbnREb3VibGVJbml0KHRoaXMpXG4gICAgRHJhZ2dhYmxlLmVtaXR0ZXIuZW1pdCgnZHJhZ2dhYmxlOmNyZWF0ZScsIHRoaXMpXG4gICAgdGhpcy5fZW5hYmxlID0gdHJ1ZVxuICAgIHRoaXMuc3RhcnRCb3VuZGluZygpXG4gICAgdGhpcy5zdGFydFBvc2l0aW9uaW5nKClcbiAgICB0aGlzLnN0YXJ0TGlzdGVuaW5nKClcbiAgfVxuXG4gIHN0YXJ0Qm91bmRpbmcoKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5ib3VuZCkge1xuICAgICAgdGhpcy5ib3VuZGluZyA9IHsgYm91bmQ6IHRoaXMub3B0aW9ucy5ib3VuZCB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYm91bmRpbmcgPSBuZXcgQm91bmRUb0VsZW1lbnQodGhpcy5jb250YWluZXIsIHRoaXMuY29udGFpbmVyKVxuICAgIH1cbiAgfVxuXG4gIHN0YXJ0UG9zaXRpb25pbmcoKSB7XG4gICAgdGhpcy5fc2V0RGVmYXVsdFRyYW5zaXRpb24oKVxuICAgIHRoaXMub2Zmc2V0ID0gUG9pbnQuZWxlbWVudE9mZnNldCh0aGlzLmVsZW1lbnQsIHRoaXMuY29udGFpbmVyLCB0cnVlKVxuICAgIHRoaXMucGlubmVkUG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICAgIHRoaXMuaW5pdGlhbFBvc2l0aW9uID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uIHx8IHRoaXMub2Zmc2V0XG5cbiAgICB0aGlzLnBpblBvc2l0aW9uKHRoaXMuaW5pdGlhbFBvc2l0aW9uKVxuXG4gICAgaWYgKHRoaXMuYm91bmRpbmcucmVmcmVzaCkge1xuICAgICAgdGhpcy5ib3VuZGluZy5yZWZyZXNoKClcbiAgICB9XG4gIH1cblxuICBzdGFydExpc3RlbmluZygpIHtcbiAgICB0aGlzLl9kcmFnU3RhcnQgPSAoZXZlbnQpID0+IHRoaXMuZHJhZ1N0YXJ0KGV2ZW50KVxuICAgIHRoaXMuX2RyYWdNb3ZlID0gKGV2ZW50KSA9PiB0aGlzLmRyYWdNb3ZlKGV2ZW50KVxuICAgIHRoaXMuX2RyYWdFbmQgPSAoZXZlbnQpID0+IHRoaXMuZHJhZ0VuZChldmVudClcbiAgICB0aGlzLl9uYXRpdmVEcmFnU3RhcnQgPSAoZXZlbnQpID0+IHRoaXMubmF0aXZlRHJhZ1N0YXJ0KGV2ZW50KVxuICAgIHRoaXMuX25hdGl2ZURyYWdPdmVyID0gdGhyb3R0bGVkRHJhZ092ZXIoKGV2ZW50KSA9PiB0aGlzLm5hdGl2ZURyYWdPdmVyKGV2ZW50KSwgdGhpcy5kcmFnT3ZlclRocm90dGxlRHVyYXRpb24pXG4gICAgdGhpcy5fbmF0aXZlRHJhZ0VuZCA9IChldmVudCkgPT4gdGhpcy5uYXRpdmVEcmFnRW5kKGV2ZW50KVxuICAgIHRoaXMuX25hdGl2ZURyb3AgPSAoZXZlbnQpID0+IHRoaXMubmF0aXZlRHJvcChldmVudClcbiAgICB0aGlzLl9zY3JvbGwgPSAoZXZlbnQpID0+IHRoaXMub25TY3JvbGwoZXZlbnQpXG5cbiAgICB0aGlzLmhhbmRsZXIuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0LCBwYXNzaXZlRmFsc2UpXG4gICAgdGhpcy5oYW5kbGVyLmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydCwgcGFzc2l2ZUZhbHNlKVxuICB9XG5cbiAgZ2V0U2l6ZSgpIHtcbiAgICByZXR1cm4gUG9pbnQuZWxlbWVudFNpemUodGhpcy5lbGVtZW50KVxuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMub2Zmc2V0LmFkZCh0aGlzLl90cmFuc2Zvcm1Qb3NpdGlvbiB8fCBuZXcgUG9pbnQoMCwgMCkpXG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25cbiAgfVxuXG4gIGdldENlbnRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi5hZGQodGhpcy5nZXRTaXplKCkubXVsdCgwLjUpKVxuICB9XG5cbiAgX3NldERlZmF1bHRUcmFuc2l0aW9uICgpIHtcbiAgICBpZiAoIXRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNpdGlvblByb3BlcnR5XSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZWxlbWVudClbdHJhbnNpdGlvblByb3BlcnR5XVxuICAgIH1cbiAgfVxuXG4gIF9zZXRUcmFuc2l0aW9uKHRpbWUpIHtcbiAgICBsZXQgdHJhbnNpdGlvbiA9IHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldXG4gICAgY29uc3QgdHJhbnNpdGlvbkNzcyA9IGB0cmFuc2Zvcm0gJHt0aW1lfW1zYFxuXG4gICAgaWYgKCEvdHJhbnNmb3JtIFxcZCptP3MvLnRlc3QodHJhbnNpdGlvbikpIHtcbiAgICAgIGlmICh0cmFuc2l0aW9uKSB7XG4gICAgICAgIHRyYW5zaXRpb24gKz0gYCwgJHt0cmFuc2l0aW9uQ3NzfWBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyYW5zaXRpb24gPSB0cmFuc2l0aW9uQ3NzXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyYW5zaXRpb24gPSB0cmFuc2l0aW9uLnJlcGxhY2UoL3RyYW5zZm9ybSBcXGQqbT9zL2csIHRyYW5zaXRpb25Dc3MpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldICE9PSB0cmFuc2l0aW9uKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNpdGlvblByb3BlcnR5XSA9IHRyYW5zaXRpb25cbiAgICB9XG4gIH1cblxuICBfc2V0VHJhbnNsYXRlKHBvaW50KSB7XG4gICAgdGhpcy5fdHJhbnNmb3JtUG9zaXRpb24gPSBwb2ludFxuICAgIGNvbnN0IHRyYW5zbGF0ZUNzcyA9IGB0cmFuc2xhdGUzZCgke3BvaW50Lnh9cHgsICR7cG9pbnQueX1weCwgMHB4KWBcblxuICAgIGxldCB0cmFuc2Zvcm0gPSB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcGVydHldXG5cbiAgICBpZiAodGhpcy5zaG91bGRSZW1vdmVaZXJvVHJhbnNsYXRlICYmIHBvaW50LnggPT09IDAgJiYgcG9pbnQueSA9PT0gMCkge1xuICAgICAgdHJhbnNmb3JtID0gdHJhbnNmb3JtLnJlcGxhY2UoL3RyYW5zbGF0ZTNkXFwoW14pXStcXCkvLCAnJylcbiAgICB9IGVsc2UgaWYgKCEvdHJhbnNsYXRlM2RcXChbXildK1xcKS8udGVzdCh0cmFuc2Zvcm0pKSB7XG4gICAgICBpZiAodHJhbnNmb3JtKSB7XG4gICAgICAgIHRyYW5zZm9ybSArPSAnICdcbiAgICAgIH1cbiAgICAgIHRyYW5zZm9ybSArPSB0cmFuc2xhdGVDc3NcbiAgICB9IGVsc2Uge1xuICAgICAgdHJhbnNmb3JtID0gdHJhbnNmb3JtLnJlcGxhY2UoL3RyYW5zbGF0ZTNkXFwoW14pXStcXCkvLCB0cmFuc2xhdGVDc3MpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wZXJ0eV0gIT09IHRyYW5zZm9ybSkge1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BlcnR5XSA9IHRyYW5zZm9ybVxuICAgIH1cbiAgfVxuXG4gIG1vdmUocG9pbnQsIHRpbWU9MCwgaXNTaWxlbnQ9ZmFsc2UpIHtcbiAgICBwb2ludCA9IHBvaW50LmNsb25lKClcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9pbnRcblxuICAgIHRoaXMuX3NldFRyYW5zaXRpb24odGltZSlcbiAgICB0aGlzLl9zZXRUcmFuc2xhdGUocG9pbnQuc3ViKHRoaXMub2Zmc2V0KSlcblxuICAgIGlmICghaXNTaWxlbnQpIHtcbiAgICAgIHRoaXMuZW1pdCgnZHJhZzptb3ZlJylcbiAgICB9XG4gIH1cblxuICBwaW5Qb3NpdGlvbihwb2ludCwgdGltZT0wLCBzaWxlbnQ9dHJ1ZSkge1xuICAgIHRoaXMucGlubmVkUG9zaXRpb24gPSBwb2ludC5jbG9uZSgpXG4gICAgdGhpcy5tb3ZlKHRoaXMucGlubmVkUG9zaXRpb24sIHRpbWUsIHNpbGVudClcbiAgfVxuXG4gIHJlc2V0UG9zaXRpb25Ub0luaXRpYWwgKCkge1xuICAgIHRoaXMucGluUG9zaXRpb24odGhpcy5pbml0aWFsUG9zaXRpb24pXG4gIH1cblxuICByZWZyZXNoUG9zaXRpb24gKCkge1xuICAgIHRoaXMuc2V0UG9zaXRpb24odGhpcy5nZXRQb3NpdGlvbigpKVxuICB9XG5cbiAgc2V0UG9zaXRpb24ocG9pbnQpIHtcbiAgICBwb2ludCA9IHBvaW50LmNsb25lKClcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9pbnRcbiAgICB0aGlzLl9zZXRUcmFuc2l0aW9uKDApXG4gICAgdGhpcy5fc2V0VHJhbnNsYXRlKHBvaW50LnN1Yih0aGlzLm9mZnNldCkpXG4gIH1cblxuICBkZXRlcm1pbmVEaXJlY3Rpb24ocG9pbnQpIHtcbiAgICB0aGlzLl9wcmV2aW91c0RpcmVjdGlvblBvc2l0aW9uIHx8PSB0aGlzLl9zdGFydFBvc2l0aW9uXG5cbiAgICB0aGlzLmxlZnREaXJlY3Rpb24gPSAodGhpcy5fcHJldmlvdXNEaXJlY3Rpb25Qb3NpdGlvbi54IDwgcG9pbnQueClcbiAgICB0aGlzLnJpZ2h0RGlyZWN0aW9uID0gKHRoaXMuX3ByZXZpb3VzRGlyZWN0aW9uUG9zaXRpb24ueCA+IHBvaW50LngpXG4gICAgdGhpcy51cERpcmVjdGlvbiA9ICh0aGlzLl9wcmV2aW91c0RpcmVjdGlvblBvc2l0aW9uLnkgPiBwb2ludC55KVxuICAgIHRoaXMuZG93bkRpcmVjdGlvbiA9ICh0aGlzLl9wcmV2aW91c0RpcmVjdGlvblBvc2l0aW9uLnkgPCBwb2ludC55KVxuXG4gICAgdGhpcy5fcHJldmlvdXNEaXJlY3Rpb25Qb3NpdGlvbiA9IHBvaW50XG4gIH1cblxuICBzZWVtc1Njcm9sbGluZygpIHtcbiAgICByZXR1cm4gKCtuZXcgRGF0ZSgpIC0gdGhpcy5fc3RhcnRUb3VjaFRpbWVzdGFtcCkgPCB0aGlzLnRvdWNoRHJhZ2dpbmdUaHJlc2hvbGRcbiAgfVxuXG4gIHNob3VsZFVzZU5hdGl2ZURyYWdBbmREcm9wKCkge1xuICAgIGlmICh0aGlzLmlzVG91Y2hFdmVudCkge1xuICAgICAgcmV0dXJuIHRoaXMubmF0aXZlRHJhZ0FuZERyb3AgJiYgdGhpcy5lbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3BPblRvdWNoXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLm5hdGl2ZURyYWdBbmREcm9wXG4gICAgfVxuICB9XG5cbiAgZHJhZ1N0YXJ0KGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLl9lbmFibGUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLnN0b3BQcm9wYWdhdGlvbk9uRHJhZ1N0YXJ0KSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIH1cblxuICAgIHRoaXMuaXNUb3VjaEV2ZW50ID0gKGlzVG91Y2ggJiYgKGV2ZW50IGluc3RhbmNlb2Ygd2luZG93LlRvdWNoRXZlbnQpKVxuXG4gICAgdGhpcy50b3VjaFBvaW50ID0gdGhpcy5fc3RhcnRUb3VjaFBvaW50ID0gbmV3IFBvaW50KFxuICAgICAgdGhpcy5pc1RvdWNoRXZlbnQgPyBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCA6IGV2ZW50LmNsaWVudFgsXG4gICAgICB0aGlzLmlzVG91Y2hFdmVudCA/IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZIDogZXZlbnQuY2xpZW50WVxuICAgIClcblxuICAgIHRoaXMuX3N0YXJ0UG9zaXRpb24gPSB0aGlzLmdldFBvc2l0aW9uKClcbiAgICBpZiAodGhpcy5pc1RvdWNoRXZlbnQpIHtcbiAgICAgIHRoaXMuX3RvdWNoSWQgPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5pZGVudGlmaWVyXG4gICAgICB0aGlzLl9zdGFydFRvdWNoVGltZXN0YW1wID0gK25ldyBEYXRlKClcbiAgICB9XG5cbiAgICB0aGlzLl9zdGFydFdpbmRvd1Njcm9sbFBvaW50ID0gdGhpcy53aW5kb3dTY3JvbGxQb2ludFxuICAgIHRoaXMuX3N0YXJ0UGFyZW50c1Njcm9sbFBvaW50ID0gdGhpcy5wYXJlbnRzU2Nyb2xsUG9pbnRcblxuICAgIGlmIChldmVudC50YXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElucHV0RWxlbWVudCB8fFxuICAgICAgICAgIGV2ZW50LnRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSW5wdXRFbGVtZW50KSB7XG4gICAgICBldmVudC50YXJnZXQuZm9jdXMoKVxuICAgIH1cblxuICAgIGlmICh0aGlzLnNob3VsZFVzZU5hdGl2ZURyYWdBbmREcm9wKCkpIHtcbiAgICAgIGlmICh0aGlzLmlzVG91Y2hFdmVudCAmJiB0aGlzLmVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcE9uVG91Y2gpIHtcbiAgICAgICAgY29uc3QgZW11bGF0ZU9uRmlyc3RNb3ZlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuc2VlbXNTY3JvbGxpbmcoKSkge1xuICAgICAgICAgICAgdGhpcy5jYW5jZWxEcmFnZ2luZygpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wKGV2ZW50KVxuICAgICAgICAgIH1cbiAgICAgICAgICBjYW5jZWxFbXVsYXRpb24oKVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNhbmNlbEVtdWxhdGlvbiA9ICgpID0+IHtcbiAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIGVtdWxhdGVPbkZpcnN0TW92ZSlcbiAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgY2FuY2VsRW11bGF0aW9uKVxuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCBlbXVsYXRlT25GaXJzdE1vdmUsIHBhc3NpdmVGYWxzZSlcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIGNhbmNlbEVtdWxhdGlvbiwgcGFzc2l2ZUZhbHNlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIHRoaXMuX25hdGl2ZURyYWdTdGFydClcbiAgICAgICAgdGhpcy5lbGVtZW50LmRyYWdnYWJsZSA9IHRydWVcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX25hdGl2ZURyYWdFbmQsIHBhc3NpdmVGYWxzZSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSwgcGFzc2l2ZUZhbHNlKVxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSwgcGFzc2l2ZUZhbHNlKVxuXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZCwgcGFzc2l2ZUZhbHNlKVxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQsIHBhc3NpdmVGYWxzZSlcbiAgICB9XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fc2Nyb2xsKVxuICAgIHRoaXMucGFyZW50cy5mb3JFYWNoKChwKSA9PiBwLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX3Njcm9sbCkpXG5cbiAgICB0aGlzLmVtaXQoJ2RyYWc6c3RhcnQnKVxuICB9XG5cbiAgZHJhZ01vdmUoZXZlbnQpIHtcbiAgICBsZXQgdG91Y2hcblxuICAgIHRoaXMuaXNEcmFnZ2luZyA9IHRydWVcblxuICAgIHRoaXMuaXNUb3VjaEV2ZW50ID0gKGlzVG91Y2ggJiYgKGV2ZW50IGluc3RhbmNlb2Ygd2luZG93LlRvdWNoRXZlbnQpKVxuICAgIGlmICh0aGlzLmlzVG91Y2hFdmVudCkge1xuICAgICAgdG91Y2ggPSBnZXRUb3VjaEJ5SUQoZXZlbnQsIHRoaXMuX3RvdWNoSWQpXG5cbiAgICAgIGlmICghdG91Y2gpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnNlZW1zU2Nyb2xsaW5nKCkpIHtcbiAgICAgICAgdGhpcy5jYW5jZWxEcmFnZ2luZygpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIHRoaXMudG91Y2hQb2ludCA9IG5ldyBQb2ludChcbiAgICAgIHRoaXMuaXNUb3VjaEV2ZW50ID8gdG91Y2gucGFnZVggOiBldmVudC5jbGllbnRYLFxuICAgICAgdGhpcy5pc1RvdWNoRXZlbnQgPyB0b3VjaC5wYWdlWSA6IGV2ZW50LmNsaWVudFlcbiAgICApXG5cbiAgICBsZXQgcG9pbnQgPSB0aGlzLl9zdGFydFBvc2l0aW9uLmFkZCh0aGlzLnRvdWNoUG9pbnQuc3ViKHRoaXMuX3N0YXJ0VG91Y2hQb2ludCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy53aW5kb3dTY3JvbGxQb2ludC5zdWIodGhpcy5fc3RhcnRXaW5kb3dTY3JvbGxQb2ludCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy5wYXJlbnRzU2Nyb2xsUG9pbnQuc3ViKHRoaXMuX3N0YXJ0UGFyZW50c1Njcm9sbFBvaW50KSlcblxuICAgIHBvaW50ID0gdGhpcy5ib3VuZGluZy5ib3VuZChwb2ludCwgdGhpcy5nZXRTaXplKCkpXG4gICAgdGhpcy5kZXRlcm1pbmVEaXJlY3Rpb24ocG9pbnQpXG4gICAgdGhpcy5tb3ZlKHBvaW50KVxuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkcmFnZWUtYWN0aXZlJylcbiAgfVxuXG4gIGRyYWdFbmQoZXZlbnQpIHtcbiAgICB0aGlzLmlzVG91Y2hFdmVudCA9IChpc1RvdWNoICYmIChldmVudCBpbnN0YW5jZW9mIHdpbmRvdy5Ub3VjaEV2ZW50KSlcblxuICAgIGlmICh0aGlzLmlzVG91Y2hFdmVudCAmJiAhZ2V0VG91Y2hCeUlEKGV2ZW50LCB0aGlzLl90b3VjaElkKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNEcmFnZ2luZykge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB9XG5cbiAgICB0aGlzLmRyYWdFbmRBY3Rpb24oKVxuICAgIHRoaXMuZW1pdCgnZHJhZzplbmQnKVxuICAgIHRoaXMuY2FuY2VsRHJhZ2dpbmcoKVxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2VlLWFjdGl2ZScpKVxuICB9XG5cbiAgb25TY3JvbGwoX2V2ZW50KSB7XG4gICAgbGV0IHBvaW50ID0gdGhpcy5fc3RhcnRQb3NpdGlvbi5hZGQodGhpcy50b3VjaFBvaW50LnN1Yih0aGlzLl9zdGFydFRvdWNoUG9pbnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMud2luZG93U2Nyb2xsUG9pbnQuc3ViKHRoaXMuX3N0YXJ0V2luZG93U2Nyb2xsUG9pbnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMucGFyZW50c1Njcm9sbFBvaW50LnN1Yih0aGlzLl9zdGFydFBhcmVudHNTY3JvbGxQb2ludCkpXG5cbiAgICBwb2ludCA9IHRoaXMuYm91bmRpbmcuYm91bmQocG9pbnQsIHRoaXMuZ2V0U2l6ZSgpKVxuICAgIGlmICghdGhpcy5uYXRpdmVEcmFnQW5kRHJvcCkge1xuICAgICAgdGhpcy5kZXRlcm1pbmVEaXJlY3Rpb24ocG9pbnQpXG4gICAgICB0aGlzLm1vdmUocG9pbnQpXG4gICAgfVxuICB9XG5cbiAgbmF0aXZlRHJhZ1N0YXJ0KGV2ZW50KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dCcsICdGaXJlRm94IGZpeCcpXG4gICAgZXZlbnQuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSAnbW92ZSdcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIHRoaXMuX25hdGl2ZURyYWdPdmVyKVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzLl9uYXRpdmVEcm9wKVxuICB9XG5cbiAgbmF0aXZlRHJhZ092ZXIoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZXZlbnQuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnbW92ZSdcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZHJhZ2VlLXBsYWNlaG9sZGVyJylcbiAgICBpZiAoZXZlbnQuY2xpZW50WCA9PT0gMCAmJiBldmVudC5jbGllbnRZID09PSAwKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLnRvdWNoUG9pbnQgPSBuZXcgUG9pbnQoZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSlcbiAgICBsZXQgcG9pbnQgPSB0aGlzLl9zdGFydFBvc2l0aW9uLmFkZCh0aGlzLnRvdWNoUG9pbnQuc3ViKHRoaXMuX3N0YXJ0VG91Y2hQb2ludCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy53aW5kb3dTY3JvbGxQb2ludC5zdWIodGhpcy5fc3RhcnRXaW5kb3dTY3JvbGxQb2ludCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy5wYXJlbnRzU2Nyb2xsUG9pbnQuc3ViKHRoaXMuX3N0YXJ0UGFyZW50c1Njcm9sbFBvaW50KSlcbiAgICBwb2ludCA9IHRoaXMuYm91bmRpbmcuYm91bmQocG9pbnQsIHRoaXMuZ2V0U2l6ZSgpKVxuICAgIHRoaXMuZGV0ZXJtaW5lRGlyZWN0aW9uKHBvaW50KVxuICAgIHRoaXMucG9zaXRpb24gPSBwb2ludFxuICAgIHRoaXMuZW1pdCgnZHJhZzptb3ZlJylcbiAgfVxuXG4gIG5hdGl2ZURyYWdFbmQoX2V2ZW50KSB7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdlZS1wbGFjZWhvbGRlcicpXG4gICAgdGhpcy5kcmFnRW5kQWN0aW9uKClcbiAgICB0aGlzLmVtaXQoJ2RyYWc6ZW5kJylcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIHRoaXMuX25hdGl2ZURyYWdPdmVyKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzLl9uYXRpdmVEcm9wKVxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9zY3JvbGwpXG4gICAgdGhpcy5wYXJlbnRzLmZvckVhY2goKHApID0+IHAucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fc2Nyb2xsKSlcbiAgICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZVxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2RyYWdnYWJsZScpXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIHRoaXMuX25hdGl2ZURyYWdTdGFydClcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2VlLWFjdGl2ZScpXG4gIH1cblxuICBuYXRpdmVEcm9wKGV2ZW50KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBjYW5jZWxEcmFnZ2luZyAoKSB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG5cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fbmF0aXZlRHJhZ0VuZClcblxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9zY3JvbGwpXG4gICAgdGhpcy5wYXJlbnRzLmZvckVhY2goKHApID0+IHAucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fc2Nyb2xsKSlcblxuICAgIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlXG4gICAgdGhpcy5fcHJldmlvdXNEaXJlY3Rpb25Qb3NpdGlvbiA9IG51bGxcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkcmFnZ2FibGUnKVxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCB0aGlzLl9uYXRpdmVEcmFnU3RhcnQpXG4gIH1cblxuICBjb3B5U3R5bGVzKHNvdXJjZSwgZGVzdGluYXRpb24pIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmNvcHlTdHlsZXMpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5jb3B5U3R5bGVzKHNvdXJjZSwgZGVzdGluYXRpb24pXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvcHlTdHlsZXMoc291cmNlLCBkZXN0aW5hdGlvbilcbiAgICB9XG4gIH1cblxuICBlbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3AoZXZlbnQpIHtcbiAgICBjb25zdCBjb250YWluZXJSZWN0ID0gdGhpcy5jb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICBjb25zdCBjbG9uZWRFbGVtZW50ID0gdGhpcy5lbGVtZW50LmNsb25lTm9kZSh0cnVlKVxuICAgIGNsb25lZEVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcGVydHldID0gJydcbiAgICB0aGlzLmNvcHlTdHlsZXModGhpcy5lbGVtZW50LCBjbG9uZWRFbGVtZW50KVxuICAgIGNsb25lZEVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjbG9uZWRFbGVtZW50KVxuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkcmFnZWUtcGxhY2Vob2xkZXInKVxuXG4gICAgY29uc3QgZW11bGF0aW9uRHJhZ2dhYmxlID0gbmV3IERyYWdnYWJsZShjbG9uZWRFbGVtZW50LCB7XG4gICAgICBjb250YWluZXI6IGRvY3VtZW50LmJvZHksXG4gICAgICB0b3VjaERyYWdnaW5nVGhyZXNob2xkOiAwLFxuICAgICAgYm91bmQocG9pbnQpIHtcbiAgICAgICAgcmV0dXJuIHBvaW50XG4gICAgICB9LFxuICAgICAgb246IHtcbiAgICAgICAgJ2RyYWc6bW92ZSc6ICgpID0+IHtcbiAgICAgICAgICBjb25zdCBjb250YWluZXJSZWN0UG9pbnQgPSBuZXcgUG9pbnQoY29udGFpbmVyUmVjdC5sZWZ0LCBjb250YWluZXJSZWN0LnRvcClcbiAgICAgICAgICB0aGlzLnBvc2l0aW9uID0gZW11bGF0aW9uRHJhZ2dhYmxlLnBvc2l0aW9uLnN1Yihjb250YWluZXJSZWN0UG9pbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdWIodGhpcy5fc3RhcnRXaW5kb3dTY3JvbGxQb2ludClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZCh0aGlzLl9zdGFydFBhcmVudHNTY3JvbGxQb2ludClcblxuICAgICAgICAgIHRoaXMuZGV0ZXJtaW5lRGlyZWN0aW9uKHRoaXMucG9zaXRpb24pXG4gICAgICAgICAgdGhpcy5lbWl0KCdkcmFnOm1vdmUnKVxuICAgICAgICB9LFxuICAgICAgICAnZHJhZzplbmQnOiAoKSA9PiB7XG4gICAgICAgICAgZW11bGF0aW9uRHJhZ2dhYmxlLmRlc3Ryb3koKVxuICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoY2xvbmVkRWxlbWVudClcbiAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2VlLXBsYWNlaG9sZGVyJylcbiAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2VlLWFjdGl2ZScpXG5cbiAgICAgICAgICB0aGlzLmVtaXQoJ2RyYWc6ZW5kJylcbiAgICAgICAgICB0aGlzLmRyYWdFbmRBY3Rpb24oKVxuICAgICAgICAgIHRoaXMuY2FuY2VsRHJhZ2dpbmcoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IGNvbnRhaW5lclJlY3RQb2ludCA9IG5ldyBQb2ludChjb250YWluZXJSZWN0LmxlZnQsIGNvbnRhaW5lclJlY3QudG9wKVxuICAgIGVtdWxhdGlvbkRyYWdnYWJsZS5fc3RhcnRXaW5kb3dTY3JvbGxQb2ludCA9IHRoaXMuX3N0YXJ0V2luZG93U2Nyb2xsUG9pbnRcblxuICAgIGVtdWxhdGlvbkRyYWdnYWJsZS5tb3ZlKFxuICAgICAgdGhpcy5waW5uZWRQb3NpdGlvbi5hZGQoY29udGFpbmVyUmVjdFBvaW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy53aW5kb3dTY3JvbGxQb2ludClcbiAgICAgICAgICAgICAgICAgICAgICAgICAuc3ViKHRoaXMucGFyZW50c1Njcm9sbFBvaW50KVxuICAgIClcblxuICAgIGVtdWxhdGlvbkRyYWdnYWJsZS5kcmFnU3RhcnQoZXZlbnQpXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgZHJhZ0VuZEFjdGlvbigpIHtcbiAgICB0aGlzLnBpblBvc2l0aW9uKHRoaXMucG9zaXRpb24pXG4gIH1cblxuICBnZXRSZWN0YW5nbGUoKSB7XG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUodGhpcy5wb3NpdGlvbiwgdGhpcy5nZXRTaXplKCkpXG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIGlmICh0aGlzLmJvdW5kaW5nLnJlZnJlc2gpIHtcbiAgICAgIHRoaXMuYm91bmRpbmcucmVmcmVzaCgpXG4gICAgfVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmhhbmRsZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0KVxuICAgIHRoaXMuaGFuZGxlci5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQpXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIHRoaXMuX25hdGl2ZURyYWdTdGFydClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCB0aGlzLl9uYXRpdmVEcmFnT3ZlcilcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcm9wJywgdGhpcy5fbmF0aXZlRHJvcClcbiAgICB0aGlzLnJlc2V0RW1pdHRlcigpXG5cbiAgICBjb25zdCBpbmRleCA9IGRyYWdnYWJsZXMuaW5kZXhPZih0aGlzKVxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICBkcmFnZ2FibGVzLnNwbGljZShpbmRleCwgMSlcbiAgICB9XG4gIH1cblxuICBnZXQgY29udGFpbmVyKCkge1xuICAgIHJldHVybiAodGhpcy5fY29udGFpbmVyID0gdGhpcy5fY29udGFpbmVyIHx8IHRoaXMub3B0aW9ucy5jb250YWluZXIgfHwgdGhpcy5vcHRpb25zLnBhcmVudCB8fCBnZXREZWZhdWx0Q29udGFpbmVyKHRoaXMuZWxlbWVudCkpXG4gIH1cblxuICBnZXQgaGFuZGxlcigpIHtcbiAgICBpZiAoIXRoaXMuX2hhbmRsZXIpIHtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmhhbmRsZXIgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZXIgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLm9wdGlvbnMuaGFuZGxlcikgfHwgdGhpcy5lbGVtZW50XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9oYW5kbGVyID0gdGhpcy5vcHRpb25zLmhhbmRsZXIgfHwgdGhpcy5lbGVtZW50XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2hhbmRsZXJcbiAgfVxuXG4gIGdldCBzdG9wUHJvcGFnYXRpb25PbkRyYWdTdGFydCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLnN0b3BQcm9wYWdhdGlvbk9uRHJhZ1N0YXJ0IHx8IGZhbHNlXG4gIH1cblxuICBnZXQgbmF0aXZlRHJhZ0FuZERyb3AoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5uYXRpdmVEcmFnQW5kRHJvcCB8fCBmYWxzZVxuICB9XG5cbiAgZ2V0IGVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcE9uVG91Y2goKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5lbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3BPblRvdWNoIHx8IGZhbHNlXG4gIH1cblxuICBnZXQgc2hvdWxkUmVtb3ZlWmVyb1RyYW5zbGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLnNob3VsZFJlbW92ZVplcm9UcmFuc2xhdGUgfHwgZmFsc2VcbiAgfVxuXG4gIGdldCB0b3VjaERyYWdnaW5nVGhyZXNob2xkKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMudG91Y2hEcmFnZ2luZ1RocmVzaG9sZCB8fCAwXG4gIH1cblxuICBnZXQgZHJhZ092ZXJUaHJvdHRsZUR1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZHJhZ092ZXJUaHJvdHRsZUR1cmF0aW9uIHx8IDE2XG4gIH1cblxuICBnZXQgd2luZG93U2Nyb2xsUG9pbnQoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh3aW5kb3cuc2Nyb2xsWCwgd2luZG93LnNjcm9sbFkpXG4gIH1cblxuICBnZXQgcGFyZW50cygpIHtcbiAgICBpZiAodGhpcy5fY2FjaGVkUGFyZW50cykgcmV0dXJuIHRoaXMuX2NhY2hlZFBhcmVudHNcblxuICAgIHRoaXMuX2NhY2hlZFBhcmVudHMgPSBbXVxuICAgIGxldCBlbGVtZW50ID0gdGhpcy5lbGVtZW50XG5cbiAgICB3aGlsZShlbGVtZW50LnBhcmVudE5vZGUgJiYgZWxlbWVudCAhPSB0aGlzLmNvbnRhaW5lcikge1xuICAgICAgdGhpcy5fY2FjaGVkUGFyZW50cy51bnNoaWZ0KGVsZW1lbnQucGFyZW50Tm9kZSk7XG4gICAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9jYWNoZWRQYXJlbnRzXG4gIH1cblxuICBnZXQgcGFyZW50c1Njcm9sbFBvaW50KCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQoXG4gICAgICB0aGlzLnBhcmVudHMucmVkdWNlKChzdW0sIHApID0+IHN1bSArIHAuc2Nyb2xsTGVmdCwgMCksXG4gICAgICB0aGlzLnBhcmVudHMucmVkdWNlKChzdW0sIHApID0+IHN1bSArIHAuc2Nyb2xsVG9wLCAwKVxuICAgIClcbiAgfVxuXG4gIGdldCBlbmFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZVxuICB9XG5cbiAgc2V0IGVuYWJsZShlbmFibGUpIHtcbiAgICBpZiAoZW5hYmxlKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2VlLWRpc2FibGUnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZHJhZ2VlLWRpc2FibGUnKVxuICAgIH1cblxuICAgIHRoaXMuX2VuYWJsZSA9IGVuYWJsZVxuICB9XG59XG5cbkRyYWdnYWJsZS5lbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcigpXG5EcmFnZ2FibGUuZW1pdHRlci5vbignZHJhZ2dhYmxlOmNyZWF0ZScsIGFkZFRvRGVmYXVsdFNjb3BlKVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCwgaW1tZWRpYXRlKSB7XG4gIGxldCB0aW1lb3V0XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGV4ZWN1dGVkRnVuY3Rpb24oKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXNcbiAgICBjb25zdCBhcmdzID0gYXJndW1lbnRzXG5cbiAgICBjb25zdCBsYXRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgdGltZW91dCA9IG51bGxcbiAgICAgIGlmICghaW1tZWRpYXRlKSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpXG4gICAgfVxuXG4gICAgY29uc3QgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dFxuXG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpXG5cbiAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdClcblxuICAgIGlmIChjYWxsTm93KSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpXG4gIH1cbn1cbiIsImltcG9ydCBkZWJvdW5jZSBmcm9tICcuL3V0aWxzL2RlYm91bmNlJ1xuaW1wb3J0IHJlbW92ZUl0ZW0gZnJvbSAnLi91dGlscy9yZW1vdmUtYXJyYXktaXRlbSdcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudEVtaXR0ZXInXG5pbXBvcnQge1xuICBnZXREaXN0YW5jZSxcbiAgaW5kZXhPZk5lYXJlc3RQb2ludFxufSBmcm9tICcuL2dlb21ldHJ5L2Rpc3RhbmNlcydcblxuaW1wb3J0IERyYWdnYWJsZSBmcm9tICcuL2RyYWdnYWJsZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdCBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKGRyYWdnYWJsZXMsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcihvcHRpb25zKVxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgdGltZUVuZDogMjAwLFxuICAgICAgdGltZUV4Y2FuZ2U6IDQwMCxcbiAgICAgIHJhZGl1czogMzBcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGhpcy5jb250YWluZXIgPSBvcHRpb25zLmNvbnRhaW5lclxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZXNcbiAgICB0aGlzLmNoYW5nZWREdXJpbmdJdGVyYXRpb24gPSBmYWxzZVxuXG4gICAgdGhpcy5yZXNpemVPYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcihkZWJvdW5jZSh0aGlzLm9uUmVzaXplLmJpbmQodGhpcyksIDEwMCkpXG5cbiAgICBpZiAodGhpcy5jb250YWluZXIpIHtcbiAgICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLmNvbnRhaW5lcilcbiAgICB9XG5cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgb25SZXNpemUoKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5yZW9yZGVyT25DaGFuZ2UpIHRoaXMucmVzZXQoKVxuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkKSA9PiBkLnN0YXJ0UG9zaXRpb25pbmcoKSlcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5fZW5hYmxlID0gdHJ1ZVxuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHRoaXMuaW5pdERyYWdnYWJsZShkcmFnZ2FibGUpKVxuICB9XG5cbiAgaW5pdERyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICBkcmFnZ2FibGUuZW5hYmxlID0gdGhpcy5fZW5hYmxlXG4gICAgZHJhZ2dhYmxlLm9uKCdkcmFnOm1vdmUnLCAoKSA9PiB0aGlzLm9uTW92ZShkcmFnZ2FibGUpKVxuICAgIGRyYWdnYWJsZS5kcmFnRW5kQWN0aW9uID0gKCkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbiwgdGhpcy5vcHRpb25zLnRpbWVFbmQpXG4gICAgICB0aGlzLm9uRW5kKGRyYWdnYWJsZSlcbiAgICB9XG4gICAgdGhpcy5yZXNpemVPYnNlcnZlci5vYnNlcnZlKGRyYWdnYWJsZS5lbGVtZW50KVxuICB9XG5cbiAgcmVsZWFzZURyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICB0aGlzLnJlc2l6ZU9ic2VydmVyLnVub2JzZXJ2ZShkcmFnZ2FibGUuZWxlbWVudClcbiAgICBkcmFnZ2FibGUucmVzZXRPbignZHJhZzplbmQnKVxuICAgIGRyYWdnYWJsZS5yZXNldE9uKCdkcmFnOm1vdmUnKVxuICAgIHJlbW92ZUl0ZW0odGhpcy5kcmFnZ2FibGVzLCBkcmFnZ2FibGUpXG4gIH1cblxuICBvbk1vdmUoZHJhZ2dhYmxlKSB7XG4gICAgY29uc3Qgc29ydGVkRHJhZ2dhYmxlcyA9IHRoaXMuZ2V0U29ydGVkRHJhZ2dhYmxlcygpXG4gICAgY29uc3QgcGlubmVkUG9zaXRpb25zID0gc29ydGVkRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uKVxuXG4gICAgY29uc3QgY3VycmVudEluZGV4ID0gc29ydGVkRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSlcbiAgICBjb25zdCB0YXJnZXRJbmRleCA9IGluZGV4T2ZOZWFyZXN0UG9pbnQocGlubmVkUG9zaXRpb25zLCBkcmFnZ2FibGUucG9zaXRpb24sIHRoaXMub3B0aW9ucy5yYWRpdXMsIHRoaXMuZGlzdGFuY2VGdW5jKVxuXG4gICAgaWYgKHRhcmdldEluZGV4ICE9PSAtMSAmJiBjdXJyZW50SW5kZXggIT09IHRhcmdldEluZGV4KSB7XG4gICAgICBpZiAodGFyZ2V0SW5kZXggPCBjdXJyZW50SW5kZXgpIHtcbiAgICAgICAgZm9yIChsZXQgaT10YXJnZXRJbmRleDsgaTxjdXJyZW50SW5kZXg7IGkrKykge1xuICAgICAgICAgIHNvcnRlZERyYWdnYWJsZXNbaV0ucGluUG9zaXRpb24ocGlubmVkUG9zaXRpb25zW2krMV0sIHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChsZXQgaT1jdXJyZW50SW5kZXg7IGk8dGFyZ2V0SW5kZXg7IGkrKykge1xuICAgICAgICAgIHNvcnRlZERyYWdnYWJsZXNbaSsxXS5waW5Qb3NpdGlvbihwaW5uZWRQb3NpdGlvbnNbaV0sIHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZHJhZ2dhYmxlLm5hdGl2ZURyYWdBbmREcm9wKSB7XG4gICAgICAgIGRyYWdnYWJsZS5waW5Qb3NpdGlvbihwaW5uZWRQb3NpdGlvbnNbdGFyZ2V0SW5kZXhdKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uID0gcGlubmVkUG9zaXRpb25zW3RhcmdldEluZGV4XVxuICAgICAgfVxuXG4gICAgICB0aGlzLmNoYW5nZWREdXJpbmdJdGVyYXRpb24gPSB0cnVlXG4gICAgfVxuICB9XG5cbiAgb25FbmQoZHJhZ2dhYmxlKSB7XG4gICAgaWYgKHRoaXMuY2hhbmdlZER1cmluZ0l0ZXJhdGlvbikge1xuICAgICAgdGhpcy5lbWl0KCdsaXN0OmNoYW5nZScpXG4gICAgICB0aGlzLmNoYW5nZWREdXJpbmdJdGVyYXRpb24gPSBmYWxzZVxuXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnJlb3JkZXJPbkNoYW5nZSAmJiB0aGlzLm9wdGlvbnMuY29udGFpbmVyKSB7XG4gICAgICAgIHRoaXMucmVvcmRlckVsZW1lbnRzKGRyYWdnYWJsZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW9yZGVyRWxlbWVudHMobW92ZWREcmFnZ2FibGUpIHtcbiAgICBjb25zdCBzb3J0ZWREcmFnZ2FibGVzID0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcbiAgICBjb25zdCBpbmRleCA9IHNvcnRlZERyYWdnYWJsZXMuaW5kZXhPZihtb3ZlZERyYWdnYWJsZSlcbiAgICBjb25zdCBuZXh0ID0gc29ydGVkRHJhZ2dhYmxlc1tpbmRleCArIDFdXG5cbiAgICB0aGlzLnJlc2V0KClcblxuICAgIGlmIChuZXh0KSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5pbnNlcnRCZWZvcmUobW92ZWREcmFnZ2FibGUuZWxlbWVudCwgbmV4dC5lbGVtZW50KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChtb3ZlZERyYWdnYWJsZS5lbGVtZW50KVxuICAgIH1cblxuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkKSA9PiBkLnN0YXJ0UG9zaXRpb25pbmcoKSlcbiAgICB0aGlzLmVtaXQoJ2xpc3Q6cmVvcmRlcmVkJylcbiAgfVxuXG4gIGdldEN1cnJlbnRQaW5uZWRQb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uLmNsb25lKCkpXG4gIH1cblxuICBnZXRTb3J0ZWREcmFnZ2FibGVzKCkge1xuICAgIHJldHVybiB0aGlzLmRyYWdnYWJsZXMuc29ydCh0aGlzLnNvcnRpbmcuYmluZCh0aGlzKSlcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5yZXNldFBvc2l0aW9uVG9Jbml0aWFsKCkpXG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5yZWZyZXNoKCkpXG4gIH1cblxuICBhZGQoZHJhZ2dhYmxlcykge1xuICAgIGlmICghKGRyYWdnYWJsZXMgaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICAgIGRyYWdnYWJsZXMgPSBbZHJhZ2dhYmxlc11cbiAgICB9XG4gICAgZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHRoaXMuaW5pdERyYWdnYWJsZShkcmFnZ2FibGUpKVxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IHRoaXMuZHJhZ2dhYmxlcy5jb25jYXQoZHJhZ2dhYmxlcylcbiAgfVxuXG4gIHJlbW92ZShkcmFnZ2FibGVzKSB7XG4gICAgY29uc3QgaW5pdGlhbFBvc2l0aW9ucyA9IHRoaXMuZHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLmluaXRpYWxQb3NpdGlvbilcbiAgICBjb25zdCBsaXN0ID0gW11cbiAgICBjb25zdCBzb3J0ZWREcmFnZ2FibGVzID0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcblxuICAgIGlmICghKGRyYWdnYWJsZXMgaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICAgIGRyYWdnYWJsZXMgPSBbZHJhZ2dhYmxlc11cbiAgICB9XG5cbiAgICBkcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gdGhpcy5yZWxlYXNlRHJhZ2dhYmxlKGRyYWdnYWJsZSkpXG5cbiAgICBsZXQgaiA9IDBcbiAgICBzb3J0ZWREcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgaWYgKHRoaXMuZHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkgIT09IC0xKSB7XG4gICAgICAgIGlmIChkcmFnZ2FibGUucGlubmVkUG9zaXRpb24gIT09IGluaXRpYWxQb3NpdGlvbnNbal0pIHtcbiAgICAgICAgICBkcmFnZ2FibGUucGluUG9zaXRpb24oaW5pdGlhbFBvc2l0aW9uc1tqXSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICB9XG4gICAgICAgIGRyYWdnYWJsZS5pbml0aWFsUG9zaXRpb24gPSBpbml0aWFsUG9zaXRpb25zW2pdXG4gICAgICAgIGorK1xuICAgICAgICBsaXN0LnB1c2goZHJhZ2dhYmxlKVxuICAgICAgfVxuICAgIH0pXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gbGlzdFxuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5yZW1vdmUodGhpcy5kcmFnZ2FibGVzLnNsaWNlKCkpXG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5kZXN0cm95KCkpXG4gICAgaWYgKHRoaXMuY29udGFpbmVyKSB7XG4gICAgICB0aGlzLnJlc2l6ZU9ic2VydmVyLnVub2JzZXJ2ZSh0aGlzLmNvbnRhaW5lcilcbiAgICB9XG4gIH1cblxuICBzb3J0aW5nKGRyYWdnYWJsZUEsIGRyYWdnYWJsZUIpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLnNvcnRpbmcpIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuc29ydGluZyhkcmFnZ2FibGVBLCBkcmFnZ2FibGVCKVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZHJhZ2dhYmxlQS5waW5uZWRQb3NpdGlvbi55IDwgZHJhZ2dhYmxlQi5waW5uZWRQb3NpdGlvbi55KSByZXR1cm4gLTFcbiAgICAgIGlmIChkcmFnZ2FibGVBLnBpbm5lZFBvc2l0aW9uLnkgPiBkcmFnZ2FibGVCLnBpbm5lZFBvc2l0aW9uLnkpIHJldHVybiAxXG4gICAgICBpZiAoZHJhZ2dhYmxlQS5waW5uZWRQb3NpdGlvbi54IDwgZHJhZ2dhYmxlQi5waW5uZWRQb3NpdGlvbi54KSByZXR1cm4gLTFcbiAgICAgIGlmIChkcmFnZ2FibGVBLnBpbm5lZFBvc2l0aW9uLnggPiBkcmFnZ2FibGVCLnBpbm5lZFBvc2l0aW9uLngpIHJldHVybiAxXG4gICAgICByZXR1cm4gMFxuICAgIH1cbiAgfVxuXG4gIGdldCBkaXN0YW5jZUZ1bmMoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5nZXREaXN0YW5jZSB8fCBnZXREaXN0YW5jZVxuICB9XG5cbiAgZ2V0IHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDdXJyZW50UGlubmVkUG9zaXRpb25zKClcbiAgfVxuXG4gIHNldCBwb3NpdGlvbnMocG9zaXRpb25zKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9ICd3cm9uZyBhcnJheSBsZW5ndGgnXG4gICAgaWYgKHBvc2l0aW9ucy5sZW5ndGggPT09IHRoaXMuZHJhZ2dhYmxlcy5sZW5ndGgpIHtcbiAgICAgIHBvc2l0aW9ucy5mb3JFYWNoKChwb2ludCwgaSkgPT4ge1xuICAgICAgICB0aGlzLmRyYWdnYWJsZXNbaV0ucGluUG9zaXRpb24ocG9pbnQpXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBtZXNzYWdlXG4gICAgfVxuICB9XG5cbiAgZ2V0IGVuYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlXG4gIH1cblxuICBzZXQgZW5hYmxlKGVuYWJsZSkge1xuICAgIHRoaXMuX2VuYWJsZSA9IGVuYWJsZVxuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5lbmFibGUgPSBlbmFibGVcbiAgICB9KVxuICB9XG5cbiAgc3RhdGljIGZhY3RvcnkoY29udGFpbmVyRWxlbWVudCwgZWxlbWVudHMsIG9wdGlvbnM9e30pIHtcbiAgICBjb25zdCBkcmFnZ2FibGVzID0gQXJyYXkuZnJvbShlbGVtZW50cykubWFwKChlbGVtZW50KSA9PiB7XG4gICAgICByZXR1cm4gbmV3IERyYWdnYWJsZShlbGVtZW50LCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgY29udGFpbmVyOiBjb250YWluZXJFbGVtZW50XG4gICAgICB9LCBvcHRpb25zLmRyYWdnYWJsZSB8fCB7fSkpXG4gICAgfSlcblxuICAgIHJldHVybiBuZXcgTGlzdChkcmFnZ2FibGVzLCBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyRWxlbWVudFxuICAgIH0sIG9wdGlvbnMubGlzdCB8fCB7fSkpXG4gIH1cbn1cbiIsImltcG9ydCBMaXN0IGZyb20gJy4vbGlzdCdcbmltcG9ydCB7IGluZGV4T2ZOZWFyZXN0UG9pbnQsIGdldFlEaWZmZXJlbmNlIH0gZnJvbSAnLi9nZW9tZXRyeS9kaXN0YW5jZXMnXG5pbXBvcnQgUG9pbnQgZnJvbSAnLi9nZW9tZXRyeS9wb2ludCdcblxuaW1wb3J0IERyYWdnYWJsZSBmcm9tICcuL2RyYWdnYWJsZSdcblxuY29uc3QgYXJyYXlNb3ZlID0gKGFycmF5LCBmcm9tLCB0bykgPT4ge1xuICBhcnJheS5zcGxpY2UodG8gPCAwID8gYXJyYXkubGVuZ3RoICsgdG8gOiB0bywgMCwgYXJyYXkuc3BsaWNlKGZyb20sIDEpWzBdKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdWJibGluZ0xpc3QgZXh0ZW5kcyBMaXN0IHtcbiAgYXV0b0RldGVjdFZlcnRpY2FsR2FwKCkge1xuICAgIGlmICghdGhpcy5fdmVydGljYWxHYXAgJiYgIXRoaXMub3B0aW9ucy52ZXJ0aWNhbEdhcCAmJiB0aGlzLmRyYWdnYWJsZXMubGVuZ3RoID49IDIpIHtcbiAgICAgIGNvbnN0IHNvcnRlZCA9IHRoaXMuZ2V0U29ydGVkRHJhZ2dhYmxlcygpXG4gICAgICB0aGlzLl92ZXJ0aWNhbEdhcCA9IHNvcnRlZFsxXS5waW5uZWRQb3NpdGlvbi55IC0gc29ydGVkWzBdLnBpbm5lZFBvc2l0aW9uLnkgLSBzb3J0ZWRbMF0uZ2V0U2l6ZSgpLnlcbiAgICB9XG4gIH1cblxuICBhdXRvRGV0ZWN0U3RhcnRQb3NpdGlvbigpIHtcbiAgICBpZiAodGhpcy5kcmFnZ2FibGVzLmxlbmd0aCA+PSAxICYmICF0aGlzLnN0YXJ0UG9zaXRpb24pIHtcbiAgICAgIHRoaXMuc3RhcnRQb3NpdGlvbiA9IHRoaXMuZHJhZ2dhYmxlc1swXS5waW5uZWRQb3NpdGlvblxuICAgIH1cbiAgfVxuXG4gIGluaXREcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgc3VwZXIuaW5pdERyYWdnYWJsZShkcmFnZ2FibGUpXG4gICAgZHJhZ2dhYmxlLm9uKCdkcmFnOnN0YXJ0JywgKCkgPT4gdGhpcy5vbkRyYWdTdGFydChkcmFnZ2FibGUpKVxuICB9XG5cbiAgb25EcmFnU3RhcnQoZHJhZ2dhYmxlKSB7XG4gICAgdGhpcy5hdXRvRGV0ZWN0VmVydGljYWxHYXAoKVxuICAgIHRoaXMuYXV0b0RldGVjdFN0YXJ0UG9zaXRpb24oKVxuICAgIHRoaXMuY2FjaGVkU29ydGVkRHJhZ2dhYmxlcyA9IHRoaXMuZ2V0U29ydGVkRHJhZ2dhYmxlcygpXG4gICAgdGhpcy5pbmRleE9mQWN0aXZlRHJhZ2dhYmxlID0gdGhpcy5jYWNoZWRTb3J0ZWREcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKVxuICB9XG5cbiAgb25Nb3ZlKGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IHByZXZEcmFnZ2FibGUgPSB0aGlzLmNhY2hlZFNvcnRlZERyYWdnYWJsZXNbdGhpcy5pbmRleE9mQWN0aXZlRHJhZ2dhYmxlIC0gMV1cbiAgICBjb25zdCBuZXh0RHJhZ2dhYmxlID0gdGhpcy5jYWNoZWRTb3J0ZWREcmFnZ2FibGVzW3RoaXMuaW5kZXhPZkFjdGl2ZURyYWdnYWJsZSArIDFdXG4gICAgY29uc3QgY3VycmVudFBvc2l0aW9uID0gZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uXG5cbiAgICBsZXQgY3VycmVudE9yZGVyXG4gICAgbGV0IHRhcmdldEluZGV4XG5cbiAgICBpZihkcmFnZ2FibGUudXBEaXJlY3Rpb24gJiYgcHJldkRyYWdnYWJsZSkge1xuICAgICAgY3VycmVudE9yZGVyID0gW3ByZXZEcmFnZ2FibGUsIGRyYWdnYWJsZV0ubWFwKChkKSA9PiBkLnBpbm5lZFBvc2l0aW9uKVxuICAgICAgdGFyZ2V0SW5kZXggPSBpbmRleE9mTmVhcmVzdFBvaW50KGN1cnJlbnRPcmRlciwgZHJhZ2dhYmxlLnBvc2l0aW9uLCAxMDAwMCwgdGhpcy5kaXN0YW5jZUZ1bmMpXG5cbiAgICAgIGlmICh0YXJnZXRJbmRleCA9PT0gMCkge1xuICAgICAgICBpZihkcmFnZ2FibGUuc2hvdWxkVXNlTmF0aXZlRHJhZ0FuZERyb3AoKSkge1xuICAgICAgICAgIGRyYWdnYWJsZS5waW5Qb3NpdGlvbihwcmV2RHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbiA9IHByZXZEcmFnZ2FibGUucGlubmVkUG9zaXRpb24uY2xvbmUoKVxuICAgICAgICB9XG4gICAgICAgIHByZXZEcmFnZ2FibGUucGluUG9zaXRpb24obmV3IFBvaW50KFxuICAgICAgICAgIGN1cnJlbnRQb3NpdGlvbi54LFxuICAgICAgICAgIGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbi55ICsgZHJhZ2dhYmxlLmdldFNpemUoKS55ICsgdGhpcy52ZXJ0aWNhbEdhcFxuICAgICAgICApLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICAgIGFycmF5TW92ZSh0aGlzLmNhY2hlZFNvcnRlZERyYWdnYWJsZXMsIHRoaXMuaW5kZXhPZkFjdGl2ZURyYWdnYWJsZS0tLCB0aGlzLmluZGV4T2ZBY3RpdmVEcmFnZ2FibGUpXG4gICAgICAgIHRoaXMub25Nb3ZlKGRyYWdnYWJsZSlcbiAgICAgICAgdGhpcy5jaGFuZ2VkRHVyaW5nSXRlcmF0aW9uID0gdHJ1ZVxuICAgICAgfVxuICAgIH0gZWxzZSBpZihkcmFnZ2FibGUuZG93bkRpcmVjdGlvbiAmJiBuZXh0RHJhZ2dhYmxlKSB7XG4gICAgICBjdXJyZW50T3JkZXIgPSBbZHJhZ2dhYmxlLCBuZXh0RHJhZ2dhYmxlXS5tYXAoKGQpID0+IGQucGlubmVkUG9zaXRpb24pXG4gICAgICB0YXJnZXRJbmRleCA9IGluZGV4T2ZOZWFyZXN0UG9pbnQoY3VycmVudE9yZGVyLCBkcmFnZ2FibGUucG9zaXRpb24sIDEwMDAwLCB0aGlzLmRpc3RhbmNlRnVuYylcblxuICAgICAgaWYodGFyZ2V0SW5kZXggPT09IDEpIHtcbiAgICAgICAgbmV4dERyYWdnYWJsZS5waW5Qb3NpdGlvbihkcmFnZ2FibGUucGlubmVkUG9zaXRpb24sIHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSlcbiAgICAgICAgY29uc3QgZHJhZ2dhYmxlTmV3UG9zaXRpb24gPSBuZXcgUG9pbnQoXG4gICAgICAgICAgbmV4dERyYWdnYWJsZS5waW5uZWRQb3NpdGlvbi54LFxuICAgICAgICAgIG5leHREcmFnZ2FibGUucGlubmVkUG9zaXRpb24ueSArIG5leHREcmFnZ2FibGUuZ2V0U2l6ZSgpLnkgKyB0aGlzLnZlcnRpY2FsR2FwXG4gICAgICAgIClcbiAgICAgICAgaWYoZHJhZ2dhYmxlLnNob3VsZFVzZU5hdGl2ZURyYWdBbmREcm9wKCkpIHtcbiAgICAgICAgICBkcmFnZ2FibGUucGluUG9zaXRpb24oZHJhZ2dhYmxlTmV3UG9zaXRpb24pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uID0gZHJhZ2dhYmxlTmV3UG9zaXRpb25cbiAgICAgICAgfVxuICAgICAgICBhcnJheU1vdmUodGhpcy5jYWNoZWRTb3J0ZWREcmFnZ2FibGVzLCB0aGlzLmluZGV4T2ZBY3RpdmVEcmFnZ2FibGUrKywgdGhpcy5pbmRleE9mQWN0aXZlRHJhZ2dhYmxlKVxuICAgICAgICB0aGlzLm9uTW92ZShkcmFnZ2FibGUpXG4gICAgICAgIHRoaXMuY2hhbmdlZER1cmluZ0l0ZXJhdGlvbiA9IHRydWVcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBidWJibGluZyhzb3J0ZWREcmFnZ2FibGVzLCBjdXJyZW50RHJhZ2dhYmxlKSB7XG4gICAgY29uc3QgY3VycmVudFBvc2l0aW9uID0gdGhpcy5zdGFydFBvc2l0aW9uLmNsb25lKClcbiAgICBzb3J0ZWREcmFnZ2FibGVzIHx8PSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuXG4gICAgc29ydGVkRHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGlmICghZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uLmNvbXBhcmUoY3VycmVudFBvc2l0aW9uKSkge1xuICAgICAgICBpZiAoZHJhZ2dhYmxlID09PSBjdXJyZW50RHJhZ2dhYmxlICYmICFjdXJyZW50RHJhZ2dhYmxlLnNob3VsZFVzZU5hdGl2ZURyYWdBbmREcm9wKCkpIHtcbiAgICAgICAgICBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24gPSBjdXJyZW50UG9zaXRpb24uY2xvbmUoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRyYWdnYWJsZS5waW5Qb3NpdGlvbihjdXJyZW50UG9zaXRpb24sIChkcmFnZ2FibGUgPT09IGN1cnJlbnREcmFnZ2FibGUpID8gMCA6IHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjdXJyZW50UG9zaXRpb24ueSA9IGN1cnJlbnRQb3NpdGlvbi55ICsgZHJhZ2dhYmxlLmdldFNpemUoKS55ICsgdGhpcy52ZXJ0aWNhbEdhcFxuICAgIH0pXG4gIH1cblxuICByZW1vdmUoZHJhZ2dhYmxlcykge1xuICAgIGlmICghKGRyYWdnYWJsZXMgaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICAgIGRyYWdnYWJsZXMgPSBbZHJhZ2dhYmxlc11cbiAgICB9XG5cbiAgICBkcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gdGhpcy5yZWxlYXNlRHJhZ2dhYmxlKGRyYWdnYWJsZSkpXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gdGhpcy5kcmFnZ2FibGVzLmZpbHRlcigoZCkgPT4gIWRyYWdnYWJsZXMuaW5jbHVkZXMoZCkpXG5cbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZCkgPT4gZC5zdGFydFBvc2l0aW9uaW5nKCkpXG5cbiAgICBpZih0aGlzLmRyYWdnYWJsZXMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5hdXRvRGV0ZWN0VmVydGljYWxHYXAoKVxuICAgICAgdGhpcy5hdXRvRGV0ZWN0U3RhcnRQb3NpdGlvbigpXG4gICAgICB0aGlzLmJ1YmJsaW5nKClcbiAgICB9XG4gIH1cblxuICBnZXQgZGlzdGFuY2VGdW5jKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZ2V0RGlzdGFuY2UgfHwgZ2V0WURpZmZlcmVuY2VcbiAgfVxuXG4gIGdldCB2ZXJ0aWNhbEdhcCgpIHtcbiAgICBpZih0aGlzLm9wdGlvbnMudmVydGljYWxHYXApIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMudmVydGljYWxHYXBcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hdXRvRGV0ZWN0VmVydGljYWxHYXAoKVxuICAgICAgcmV0dXJuIHRoaXMuX3ZlcnRpY2FsR2FwIHx8IDBcbiAgICB9XG4gIH1cblxuICBzZXQgdmVydGljYWxHYXAoZ2FwVmFsdWUpIHtcbiAgICB0aGlzLm9wdGlvbnMudmVydGljYWxHYXAgPSBnYXBWYWx1ZVxuICB9XG5cbiAgc3RhdGljIGZhY3RvcnkoY29udGFpbmVyRWxlbWVudCwgZWxlbWVudHMsIG9wdGlvbnM9e30pIHtcbiAgICBjb25zdCBkcmFnZ2FibGVzID0gQXJyYXkuZnJvbShlbGVtZW50cykubWFwKChlbGVtZW50KSA9PiB7XG4gICAgICByZXR1cm4gbmV3IERyYWdnYWJsZShlbGVtZW50LCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgY29udGFpbmVyOiBjb250YWluZXJFbGVtZW50XG4gICAgICB9LCBvcHRpb25zLmRyYWdnYWJsZSB8fCB7fSkpXG4gICAgfSlcblxuICAgIHJldHVybiBuZXcgQnViYmxpbmdMaXN0KGRyYWdnYWJsZXMsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgY29udGFpbmVyOiBjb250YWluZXJFbGVtZW50XG4gICAgfSwgb3B0aW9ucy5saXN0IHx8IHt9KSlcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlBvaW50IiwieCIsInkiLCJwIiwiayIsImVsZW1lbnQiLCJwYXJlbnQiLCJwYXJlbnROb2RlIiwiZWxlbWVudFJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJwYXJlbnRSZWN0IiwibGVmdCIsInRvcCIsIndpZHRoIiwiaGVpZ2h0IiwiUmVjdGFuZ2xlIiwicG9zaXRpb24iLCJzaXplIiwiYWRkIiwibXVsdCIsInJlY3QiLCJNYXRoIiwibWluIiwibWF4Iiwic3ViIiwicmVjdGFuZ2xlIiwiaW5jbHVkZVBvaW50IiwiZ2V0UDMiLCJheGlzIiwic2VsQXhpcyIsImNyb3NzUmVjdGFuZ2xlIiwiYW5kIiwidGhpc0NlbnRlciIsImdldENlbnRlciIsInJlY3RDZW50ZXIiLCJzaWduIiwib2Zmc2V0IiwiZWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzdHlsZSIsImlzQ29uc2lkZXJUcmFuc2xhdGUiLCJlbGVtZW50T2Zmc2V0IiwiZWxlbWVudFNpemUiLCJnZXREZWZhdWx0Q29udGFpbmVyIiwiY29udGFpbmVyIiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInRhZ05hbWUiLCJFdmVudEVtaXR0ZXIiLCJvcHRpb25zIiwiZXZlbnRzIiwib24iLCJPYmplY3QiLCJlbnRyaWVzIiwiZXZlbnROYW1lIiwiZm4iLCJpbnRlcnJ1cHRlZCIsImFyZ3MiLCJzbGljZSIsImNhbGwiLCJhcmd1bWVudHMiLCJmdW5jIiwicHVzaCIsInVuc2hpZnQiLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJnZXREaXN0YW5jZSIsInAxIiwicDIiLCJkeCIsImR5Iiwic3FydCIsImdldFhEaWZmZXJlbmNlIiwiYWJzIiwiZ2V0WURpZmZlcmVuY2UiLCJ0cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5IiwicG93IiwiaW5kZXhPZk5lYXJlc3RQb2ludCIsImFyciIsInZhbCIsInJhZGl1cyIsImdldERpc3RhbmNlRnVuYyIsImkiLCJ0ZW1wIiwibGVuZ3RoIiwiZGlyZWN0Q3Jvc3NpbmciLCJMMVAxIiwiTDFQMiIsIkwyUDEiLCJMMlAyIiwiazEiLCJrMiIsImIxIiwiYjIiLCJib3VuZFRvTGluZSIsIkEiLCJCIiwiUCIsIkFQIiwiQUIiLCJhYjIiLCJhcF9hYiIsInQiLCJnZXRQb2ludE9uTGluZUJ5TGVuZ2h0IiwiTFAxIiwiTFAyIiwibGVuZ2h0IiwicGVyY2VudCIsImFkZFBvaW50VG9Cb3VuZFBvaW50cyIsImJvdW5kcG9pbnRzIiwicG9pbnQiLCJpc1JpZ2h0IiwicmVzdWx0IiwiZmlsdGVyIiwiYlBvaW50IiwiZ2V0QW5nbGVEaWZmIiwiYWxwaGEiLCJiZXRhIiwibWluQW5nbGUiLCJtYXhBbmdsZSIsIlBJIiwiZ2V0QW5nbGUiLCJkaWZmIiwibm9ybWFsaXplQW5nbGUiLCJhdGFuMiIsImJvdW5kQW5nbGUiLCJkbWluIiwiZG1heCIsImdldFBvaW50RnJvbVJhZGlhbFN5c3RlbSIsImFuZ2xlIiwiY2VudGVyIiwiY29zIiwic2luIiwiQm91bmQiLCJfc2l6ZSIsImluc3RhbmNlIiwiYm91bmQiLCJiaW5kIiwiQm91bmRUb1JlY3RhbmdsZSIsImNhbGNQb2ludCIsImNsb25lIiwicmVjdFAyIiwiQm91bmRUb0VsZW1lbnQiLCJmcm9tRWxlbWVudCIsIkJvdW5kVG9MaW5lWCIsInN0YXJ0WSIsImVuZFkiLCJCb3VuZFRvTGluZVkiLCJzdGFydFgiLCJlbmRYIiwiQm91bmRUb0xpbmUiLCJzdGFydFBvaW50IiwiZW5kUG9pbnQiLCJzb21lSyIsImNvc0JldGEiLCJzaW5CZXRhIiwicG9pbnQyIiwibmV3RW5kUG9pbnQiLCJwb2ludENyb3NzaW5nIiwiQm91bmRUb0NpcmNsZSIsIkJvdW5kVG9BcmMiLCJzdGFydEFuZ2xlIiwiZW5kQW5nbGUiLCJfc3RhcnRBbmdsZSIsIl9lbmRBbmdsZSIsImFycmF5IiwicmFuZ2UiLCJzdGFydCIsInN0b3AiLCJzdGVwIiwiQmFzaWNTdHJhdGVneSIsIk5vdENyb3NzaW5nU3RyYXRlZ3kiLCJyZWN0YW5nbGVMaXN0IiwiaW5kZXhlc09mTmV3cyIsInN0YXRpY1JlY3RhbmdsZUluZGV4ZXMiLCJyZWR1Y2UiLCJpbmRleGVzIiwiX3JlY3QiLCJmb3JFYWNoIiwicmVtb3ZhYmxlIiwiaW5kZXhPZlN0YXRpYyIsInN0YXRpY1JlY3QiLCJtb3ZlVG9Cb3VuZCIsInNvbWUiLCJib3VuZFJlY3QiLCJnZXRTcXVhcmUiLCJvZGxEcmFnZ2FibGVzTGlzdCIsIm5ld0RyYWdnYWJsZXMiLCJpbmRleE9mTmV3cyIsImRyYWdnYWJsZXMiLCJjb25jYXQiLCJkcmFnZ2FibGUiLCJGbG9hdExlZnRTdHJhdGVneSIsImFzc2lnbiIsInBhZGRpbmdUb3BMZWZ0IiwicGFkZGluZ0JvdHRvbVJpZ2h0IiwieUdhcEJldHdlZW5EcmFnZ2FibGVzIiwiZ2V0UG9zaXRpb24iLCJfaW5kZXhlc09mTmV3cyIsImdldFAyIiwiYm91bmRhcnlQb2ludHMiLCJyZWN0SW5kZXgiLCJpc1ZhbGlkIiwibmV3TGlzdCIsImxpc3RPbGRQb3NpdGlvbiIsIm1hcCIsIm5ld0RyYWdnYWJsZSIsIkZsb2F0UmlnaHRTdHJhdGVneSIsInBhZGRpbmdUb3BSaWdodCIsInBhZGRpbmdCb3R0b21MZWZ0IiwicGFkZGluZ0JvdHRvbU5lZ0xlZnQiLCJnZXRQNCIsImFkZFRvRGVmYXVsdFNjb3BlIiwidGFyZ2V0IiwiZGVmYXVsdFNjb3BlIiwiYWRkVGFyZ2V0IiwiVGFyZ2V0IiwidGltZUVuZCIsInRpbWVFeGNhbmdlIiwicG9zaXRpb25pbmdTdHJhdGVneSIsInN0cmF0ZWd5IiwiZ2V0UmVjdGFuZ2xlIiwidGFyZ2V0cyIsImVtaXR0ZXIiLCJlbWl0Iiwic3RhcnRCb3VuZGluZyIsImluaXQiLCJib3VuZGluZyIsImluZGV4ZXNPZk5ldyIsInBvc2l0aW9uaW5nIiwib2xkRHJhZ2dhYmxlcyIsInNvcnRpbmciLCJyZWN0YW5nbGVzIiwiaW5uZXJEcmFnZ2FibGVzIiwic2V0UG9zaXRpb24iLCJjYXRjaERyYWdnYWJsZSIsInRhcmdldFJlY3RhbmdsZSIsImRyYWdnYWJsZVNxdWFyZSIsInNjb3BlcyIsInNjb3BlIiwicmVtb3ZlSXRlbSIsIm5ld0RyYWdnYWJsZXNJbmRleCIsImdldFNpemUiLCJhZGRSZW1vdmVPbk1vdmUiLCJ0aW1lIiwibW92ZSIsImluaXRpYWxQb3NpdGlvbiIsInB1c2hJbm5lckRyYWdnYWJsZSIsInJlbW92ZUhhbmRsZXIiLCJyZW1vdmUiLCJ1bnN1YnNjcmliZSIsIl9jb250YWluZXIiLCJTY29wZSIsImRyYWdFbmRBY3Rpb24iLCJvbkVuZCIsInNob3RUYXJnZXRzIiwic29ydCIsImEiLCJiIiwicGluUG9zaXRpb24iLCJyZXNldCIsInJlZnJlc2giLCJwb3NpdGlvbnMiLCJtZXNzYWdlIiwidGFyZ2V0SW5kZXhlcyIsImN1cnJlbnRTY29wZSIsImFkZERyYWdnYWJsZVRvU2NvcGUiLCJhZGREcmFnZ2FibGUiLCJEcmFnZ2FibGUiLCJpbnRlcnJ1cHQiLCJhZGRUYXJnZXRUb1Njb3BlIiwicHJlcGVuZE9uIiwiY2hlY2tTdXBwb3J0UGFzc2l2ZUV2ZW50cyIsInBhc3NpdmVTdXBwb3J0ZWQiLCJkZWZpbmVQcm9wZXJ0eSIsImdldCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiX2VyciIsImlzU3VwcG9ydFBhc3NpdmVFdmVudHMiLCJ0aHJvdHRsZSIsIndhaXQiLCJsYXN0VGltZSIsImV4ZWN1dGVkRnVuY3Rpb24iLCJjb250ZXh0Iiwibm93IiwiRGF0ZSIsImFwcGx5IiwidGhyb3R0bGVkRHJhZ092ZXIiLCJjYWxsYmFjayIsImR1cmF0aW9uIiwidGhyb3R0bGVkQ2FsbGJhY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicGFzc2l2ZUZhbHNlIiwicGFzc2l2ZSIsImlzVG91Y2giLCJtb3VzZUV2ZW50cyIsImVuZCIsInRvdWNoRXZlbnRzIiwidHJhbnNmb3JtUHJvcGVydHkiLCJ0cmFuc2l0aW9uUHJvcGVydHkiLCJnZXRUb3VjaEJ5SUQiLCJ0b3VjaElkIiwiY2hhbmdlZFRvdWNoZXMiLCJpZGVudGlmaWVyIiwicHJldmVudERvdWJsZUluaXQiLCJleGlzdGluZyIsImNvcHlTdHlsZXMiLCJzb3VyY2UiLCJkZXN0aW5hdGlvbiIsImNzIiwia2V5IiwiY2hpbGRyZW4iLCJfZW5hYmxlIiwic3RhcnRQb3NpdGlvbmluZyIsInN0YXJ0TGlzdGVuaW5nIiwiX3NldERlZmF1bHRUcmFuc2l0aW9uIiwicGlubmVkUG9zaXRpb24iLCJfZHJhZ1N0YXJ0IiwiZHJhZ1N0YXJ0IiwiX2RyYWdNb3ZlIiwiZHJhZ01vdmUiLCJfZHJhZ0VuZCIsImRyYWdFbmQiLCJfbmF0aXZlRHJhZ1N0YXJ0IiwibmF0aXZlRHJhZ1N0YXJ0IiwiX25hdGl2ZURyYWdPdmVyIiwibmF0aXZlRHJhZ092ZXIiLCJkcmFnT3ZlclRocm90dGxlRHVyYXRpb24iLCJfbmF0aXZlRHJhZ0VuZCIsIm5hdGl2ZURyYWdFbmQiLCJfbmF0aXZlRHJvcCIsIm5hdGl2ZURyb3AiLCJfc2Nyb2xsIiwib25TY3JvbGwiLCJoYW5kbGVyIiwiX3RyYW5zZm9ybVBvc2l0aW9uIiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25Dc3MiLCJ0ZXN0IiwicmVwbGFjZSIsInRyYW5zbGF0ZUNzcyIsInRyYW5zZm9ybSIsInNob3VsZFJlbW92ZVplcm9UcmFuc2xhdGUiLCJpc1NpbGVudCIsIl9zZXRUcmFuc2l0aW9uIiwiX3NldFRyYW5zbGF0ZSIsInNpbGVudCIsIl9wcmV2aW91c0RpcmVjdGlvblBvc2l0aW9uIiwiX3N0YXJ0UG9zaXRpb24iLCJsZWZ0RGlyZWN0aW9uIiwicmlnaHREaXJlY3Rpb24iLCJ1cERpcmVjdGlvbiIsImRvd25EaXJlY3Rpb24iLCJfc3RhcnRUb3VjaFRpbWVzdGFtcCIsInRvdWNoRHJhZ2dpbmdUaHJlc2hvbGQiLCJpc1RvdWNoRXZlbnQiLCJuYXRpdmVEcmFnQW5kRHJvcCIsImVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcE9uVG91Y2giLCJzdG9wUHJvcGFnYXRpb25PbkRyYWdTdGFydCIsInN0b3BQcm9wYWdhdGlvbiIsIlRvdWNoRXZlbnQiLCJ0b3VjaFBvaW50IiwiX3N0YXJ0VG91Y2hQb2ludCIsInBhZ2VYIiwiY2xpZW50WCIsInBhZ2VZIiwiY2xpZW50WSIsIl90b3VjaElkIiwiX3N0YXJ0V2luZG93U2Nyb2xsUG9pbnQiLCJ3aW5kb3dTY3JvbGxQb2ludCIsIl9zdGFydFBhcmVudHNTY3JvbGxQb2ludCIsInBhcmVudHNTY3JvbGxQb2ludCIsIkhUTUxJbnB1dEVsZW1lbnQiLCJmb2N1cyIsInNob3VsZFVzZU5hdGl2ZURyYWdBbmREcm9wIiwiZW11bGF0ZU9uRmlyc3RNb3ZlIiwic2VlbXNTY3JvbGxpbmciLCJjYW5jZWxEcmFnZ2luZyIsImVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcCIsImNhbmNlbEVtdWxhdGlvbiIsInBhcmVudHMiLCJ0b3VjaCIsImlzRHJhZ2dpbmciLCJkZXRlcm1pbmVEaXJlY3Rpb24iLCJjbGFzc0xpc3QiLCJzZXRUaW1lb3V0IiwiX2V2ZW50IiwiZGF0YVRyYW5zZmVyIiwic2V0RGF0YSIsImVmZmVjdEFsbG93ZWQiLCJkcm9wRWZmZWN0IiwicmVtb3ZlQXR0cmlidXRlIiwiY29udGFpbmVyUmVjdCIsImNsb25lZEVsZW1lbnQiLCJjbG9uZU5vZGUiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJlbXVsYXRpb25EcmFnZ2FibGUiLCJjb250YWluZXJSZWN0UG9pbnQiLCJkZXN0cm95IiwicmVtb3ZlQ2hpbGQiLCJyZXNldEVtaXR0ZXIiLCJfaGFuZGxlciIsInNjcm9sbFgiLCJzY3JvbGxZIiwiX2NhY2hlZFBhcmVudHMiLCJzdW0iLCJzY3JvbGxMZWZ0Iiwic2Nyb2xsVG9wIiwiZW5hYmxlIiwiZGVib3VuY2UiLCJpbW1lZGlhdGUiLCJ0aW1lb3V0IiwibGF0ZXIiLCJjYWxsTm93IiwiY2xlYXJUaW1lb3V0IiwiTGlzdCIsImNoYW5nZWREdXJpbmdJdGVyYXRpb24iLCJyZXNpemVPYnNlcnZlciIsIlJlc2l6ZU9ic2VydmVyIiwib25SZXNpemUiLCJvYnNlcnZlIiwicmVvcmRlck9uQ2hhbmdlIiwiZCIsImluaXREcmFnZ2FibGUiLCJvbk1vdmUiLCJ1bm9ic2VydmUiLCJyZXNldE9uIiwic29ydGVkRHJhZ2dhYmxlcyIsImdldFNvcnRlZERyYWdnYWJsZXMiLCJwaW5uZWRQb3NpdGlvbnMiLCJjdXJyZW50SW5kZXgiLCJ0YXJnZXRJbmRleCIsImRpc3RhbmNlRnVuYyIsInJlb3JkZXJFbGVtZW50cyIsIm1vdmVkRHJhZ2dhYmxlIiwibmV4dCIsImluc2VydEJlZm9yZSIsInJlc2V0UG9zaXRpb25Ub0luaXRpYWwiLCJBcnJheSIsImluaXRpYWxQb3NpdGlvbnMiLCJsaXN0IiwicmVsZWFzZURyYWdnYWJsZSIsImoiLCJkcmFnZ2FibGVBIiwiZHJhZ2dhYmxlQiIsImdldEN1cnJlbnRQaW5uZWRQb3NpdGlvbnMiLCJjb250YWluZXJFbGVtZW50IiwiZWxlbWVudHMiLCJmcm9tIiwiYXJyYXlNb3ZlIiwidG8iLCJCdWJibGluZ0xpc3QiLCJfdmVydGljYWxHYXAiLCJ2ZXJ0aWNhbEdhcCIsInNvcnRlZCIsInN0YXJ0UG9zaXRpb24iLCJvbkRyYWdTdGFydCIsImF1dG9EZXRlY3RWZXJ0aWNhbEdhcCIsImF1dG9EZXRlY3RTdGFydFBvc2l0aW9uIiwiY2FjaGVkU29ydGVkRHJhZ2dhYmxlcyIsImluZGV4T2ZBY3RpdmVEcmFnZ2FibGUiLCJwcmV2RHJhZ2dhYmxlIiwibmV4dERyYWdnYWJsZSIsImN1cnJlbnRQb3NpdGlvbiIsImN1cnJlbnRPcmRlciIsImRyYWdnYWJsZU5ld1Bvc2l0aW9uIiwiY3VycmVudERyYWdnYWJsZSIsImNvbXBhcmUiLCJpbmNsdWRlcyIsImJ1YmJsaW5nIiwiZ2FwVmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFBQTtBQUFBLE1BQ3FCQSxLQUFLLGdCQUFBLFlBQUE7RUFDeEI7RUFDRjtFQUNBO0VBQ0E7RUFDQTtJQUNFLFNBQVlDLEtBQUFBLENBQUFBLENBQUMsRUFBRUMsQ0FBQyxFQUFFO0VBQUEsSUFBQSxlQUFBLENBQUEsSUFBQSxFQUFBLEtBQUEsQ0FBQSxDQUFBO01BQ2hCLElBQUksQ0FBQ0QsQ0FBQyxHQUFHQSxDQUFDLENBQUE7TUFDVixJQUFJLENBQUNDLENBQUMsR0FBR0EsQ0FBQyxDQUFBO0VBQ1osR0FBQTtFQUFDLEVBQUEsWUFBQSxDQUFBLEtBQUEsRUFBQSxDQUFBO0VBQUEsSUFBQSxHQUFBLEVBQUEsS0FBQTtNQUFBLEtBRUQsRUFBQSxTQUFBLEdBQUEsQ0FBSUMsQ0FBQyxFQUFFO0VBQ0wsTUFBQSxPQUFPLElBQUlILEtBQUssQ0FBQyxJQUFJLENBQUNDLENBQUMsR0FBR0UsQ0FBQyxDQUFDRixDQUFDLEVBQUUsSUFBSSxDQUFDQyxDQUFDLEdBQUdDLENBQUMsQ0FBQ0QsQ0FBQyxDQUFDLENBQUE7RUFDOUMsS0FBQTtFQUFDLEdBQUEsRUFBQTtFQUFBLElBQUEsR0FBQSxFQUFBLEtBQUE7TUFBQSxLQUVELEVBQUEsU0FBQSxHQUFBLENBQUlDLENBQUMsRUFBRTtFQUNMLE1BQUEsT0FBTyxJQUFJSCxLQUFLLENBQUMsSUFBSSxDQUFDQyxDQUFDLEdBQUdFLENBQUMsQ0FBQ0YsQ0FBQyxFQUFFLElBQUksQ0FBQ0MsQ0FBQyxHQUFHQyxDQUFDLENBQUNELENBQUMsQ0FBQyxDQUFBO0VBQzlDLEtBQUE7RUFBQyxHQUFBLEVBQUE7RUFBQSxJQUFBLEdBQUEsRUFBQSxNQUFBO01BQUEsS0FFRCxFQUFBLFNBQUEsSUFBQSxDQUFLRSxDQUFDLEVBQUU7RUFDTixNQUFBLE9BQU8sSUFBSUosS0FBSyxDQUFDLElBQUksQ0FBQ0MsQ0FBQyxHQUFHRyxDQUFDLEVBQUUsSUFBSSxDQUFDRixDQUFDLEdBQUdFLENBQUMsQ0FBQyxDQUFBO0VBQzFDLEtBQUE7RUFBQyxHQUFBLEVBQUE7RUFBQSxJQUFBLEdBQUEsRUFBQSxVQUFBO0VBQUEsSUFBQSxLQUFBLEVBRUQsU0FBVyxRQUFBLEdBQUE7RUFDVCxNQUFBLE9BQU8sSUFBSUosS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUNDLENBQUMsQ0FBQyxDQUFBO0VBQ3BDLEtBQUE7RUFBQyxHQUFBLEVBQUE7RUFBQSxJQUFBLEdBQUEsRUFBQSxTQUFBO01BQUEsS0FFRCxFQUFBLFNBQUEsT0FBQSxDQUFRQyxDQUFDLEVBQUU7RUFDVCxNQUFBLE9BQVEsSUFBSSxDQUFDRixDQUFDLEtBQUtFLENBQUMsQ0FBQ0YsQ0FBQyxJQUFJLElBQUksQ0FBQ0MsQ0FBQyxLQUFLQyxDQUFDLENBQUNELENBQUMsQ0FBQTtFQUMxQyxLQUFBO0VBQUMsR0FBQSxFQUFBO0VBQUEsSUFBQSxHQUFBLEVBQUEsT0FBQTtFQUFBLElBQUEsS0FBQSxFQUVELFNBQVEsS0FBQSxHQUFBO1FBQ04sT0FBTyxJQUFJRixLQUFLLENBQUMsSUFBSSxDQUFDQyxDQUFDLEVBQUUsSUFBSSxDQUFDQyxDQUFDLENBQUMsQ0FBQTtFQUNsQyxLQUFBO0VBQUMsR0FBQSxFQUFBO0VBQUEsSUFBQSxHQUFBLEVBQUEsVUFBQTtFQUFBLElBQUEsS0FBQSxFQUVELFNBQVcsUUFBQSxHQUFBO0VBQ1QsTUFBQSxPQUFBLEtBQUEsQ0FBQSxNQUFBLENBQWEsSUFBSSxDQUFDRCxDQUFDLEVBQU0sS0FBQSxDQUFBLENBQUEsTUFBQSxDQUFBLElBQUksQ0FBQ0MsQ0FBQyxDQUFBLENBQUE7RUFDakMsS0FBQTtFQUFDLEdBQUEsQ0FBQSxFQUFBLENBQUE7RUFBQSxJQUFBLEdBQUEsRUFBQSxlQUFBO0VBQUEsSUFBQSxLQUFBLEVBRUQsU0FBcUJHLGFBQUFBLENBQUFBLE9BQU8sRUFBRUMsTUFBTSxFQUFFO0VBQ3BDQSxNQUFBQSxNQUFNLEdBQUdBLE1BQU0sSUFBSUQsT0FBTyxDQUFDRSxVQUFVLENBQUE7RUFDckMsTUFBQSxJQUFNQyxXQUFXLEdBQUdILE9BQU8sQ0FBQ0kscUJBQXFCLEVBQUUsQ0FBQTtFQUNuRCxNQUFBLElBQU1DLFVBQVUsR0FBR0osTUFBTSxDQUFDRyxxQkFBcUIsRUFBRSxDQUFBO0VBQ2pELE1BQUEsT0FBTyxJQUFJVCxLQUFLLENBQ2RRLFdBQVcsQ0FBQ0csSUFBSSxHQUFHRCxVQUFVLENBQUNDLElBQUksRUFDbENILFdBQVcsQ0FBQ0ksR0FBRyxHQUFHRixVQUFVLENBQUNFLEdBQUcsQ0FDakMsQ0FBQTtFQUNILEtBQUE7RUFBQyxHQUFBLEVBQUE7RUFBQSxJQUFBLEdBQUEsRUFBQSxhQUFBO01BQUEsS0FFRCxFQUFBLFNBQUEsV0FBQSxDQUFtQlAsT0FBTyxFQUFFO0VBQzFCLE1BQUEsSUFBTUcsV0FBVyxHQUFHSCxPQUFPLENBQUNJLHFCQUFxQixFQUFFLENBQUE7UUFDbkQsT0FBTyxJQUFJVCxLQUFLLENBQ2RRLFdBQVcsQ0FBQ0ssS0FBSyxFQUNqQkwsV0FBVyxDQUFDTSxNQUFNLENBQ25CLENBQUE7RUFDSCxLQUFBO0VBQUMsR0FBQSxDQUFBLENBQUEsQ0FBQTtFQUFBLEVBQUEsT0FBQSxLQUFBLENBQUE7RUFBQSxDQUFBOztBQ3hEd0IsTUFFTkMsU0FBUyxnQkFBQSxZQUFBO0lBQzVCLFNBQVlDLFNBQUFBLENBQUFBLFFBQVEsRUFBRUMsSUFBSSxFQUFFO0VBQUEsSUFBQSxlQUFBLENBQUEsSUFBQSxFQUFBLFNBQUEsQ0FBQSxDQUFBO01BQzFCLElBQUksQ0FBQ0QsUUFBUSxHQUFHQSxRQUFRLENBQUE7TUFDeEIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBLElBQUksQ0FBQTtFQUNsQixHQUFBO0VBQUMsRUFBQSxZQUFBLENBQUEsU0FBQSxFQUFBLENBQUE7RUFBQSxJQUFBLEdBQUEsRUFBQSxPQUFBO0VBQUEsSUFBQSxLQUFBLEVBRUQsU0FBUSxLQUFBLEdBQUE7UUFDTixPQUFPLElBQUksQ0FBQ0QsUUFBUSxDQUFBO0VBQ3RCLEtBQUE7RUFBQyxHQUFBLEVBQUE7RUFBQSxJQUFBLEdBQUEsRUFBQSxPQUFBO0VBQUEsSUFBQSxLQUFBLEVBRUQsU0FBUSxLQUFBLEdBQUE7UUFDTixPQUFPLElBQUloQixLQUFLLENBQUMsSUFBSSxDQUFDZ0IsUUFBUSxDQUFDZixDQUFDLEdBQUcsSUFBSSxDQUFDZ0IsSUFBSSxDQUFDaEIsQ0FBQyxFQUFFLElBQUksQ0FBQ2UsUUFBUSxDQUFDZCxDQUFDLENBQUMsQ0FBQTtFQUNsRSxLQUFBO0VBQUMsR0FBQSxFQUFBO0VBQUEsSUFBQSxHQUFBLEVBQUEsT0FBQTtFQUFBLElBQUEsS0FBQSxFQUVELFNBQVEsS0FBQSxHQUFBO1FBQ04sT0FBTyxJQUFJLENBQUNjLFFBQVEsQ0FBQ0UsR0FBRyxDQUFDLElBQUksQ0FBQ0QsSUFBSSxDQUFDLENBQUE7RUFDckMsS0FBQTtFQUFDLEdBQUEsRUFBQTtFQUFBLElBQUEsR0FBQSxFQUFBLE9BQUE7RUFBQSxJQUFBLEtBQUEsRUFFRCxTQUFRLEtBQUEsR0FBQTtRQUNOLE9BQU8sSUFBSWpCLEtBQUssQ0FBQyxJQUFJLENBQUNnQixRQUFRLENBQUNmLENBQUMsRUFBRSxJQUFJLENBQUNlLFFBQVEsQ0FBQ2QsQ0FBQyxHQUFHLElBQUksQ0FBQ2UsSUFBSSxDQUFDZixDQUFDLENBQUMsQ0FBQTtFQUNsRSxLQUFBO0VBQUMsR0FBQSxFQUFBO0VBQUEsSUFBQSxHQUFBLEVBQUEsV0FBQTtFQUFBLElBQUEsS0FBQSxFQUVELFNBQVksU0FBQSxHQUFBO0VBQ1YsTUFBQSxPQUFPLElBQUksQ0FBQ2MsUUFBUSxDQUFDRSxHQUFHLENBQUMsSUFBSSxDQUFDRCxJQUFJLENBQUNFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO0VBQy9DLEtBQUE7RUFBQyxHQUFBLEVBQUE7RUFBQSxJQUFBLEdBQUEsRUFBQSxJQUFBO01BQUEsS0FFRCxFQUFBLFNBQUEsRUFBQSxDQUFHQyxJQUFJLEVBQUU7RUFDUCxNQUFBLElBQU1KLFFBQVEsR0FBRyxJQUFJaEIsS0FBSyxDQUFDcUIsSUFBSSxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDTixRQUFRLENBQUNmLENBQUMsRUFBRW1CLElBQUksQ0FBQ0osUUFBUSxDQUFDZixDQUFDLENBQUMsRUFBRW9CLElBQUksQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQ04sUUFBUSxDQUFDZCxDQUFDLEVBQUVrQixJQUFJLENBQUNKLFFBQVEsQ0FBQ2QsQ0FBQyxDQUFDLENBQUMsQ0FBQTtFQUNsSCxNQUFBLElBQU1lLElBQUksR0FBSSxJQUFJakIsS0FBSyxDQUFDcUIsSUFBSSxDQUFDRSxHQUFHLENBQUMsSUFBSSxDQUFDUCxRQUFRLENBQUNmLENBQUMsR0FBRyxJQUFJLENBQUNnQixJQUFJLENBQUNoQixDQUFDLEVBQUVtQixJQUFJLENBQUNKLFFBQVEsQ0FBQ2YsQ0FBQyxHQUFHbUIsSUFBSSxDQUFDSCxJQUFJLENBQUNoQixDQUFDLENBQUMsRUFBRW9CLElBQUksQ0FBQ0UsR0FBRyxDQUFDLElBQUksQ0FBQ1AsUUFBUSxDQUFDZCxDQUFDLEdBQUcsSUFBSSxDQUFDZSxJQUFJLENBQUNmLENBQUMsRUFBRWtCLElBQUksQ0FBQ0osUUFBUSxDQUFDZCxDQUFDLEdBQUdrQixJQUFJLENBQUNILElBQUksQ0FBQ2YsQ0FBQyxDQUFDLENBQUMsQ0FBRXNCLEdBQUcsQ0FBQ1IsUUFBUSxDQUFDLENBQUE7RUFDdEwsTUFBQSxPQUFPLElBQUlELFNBQVMsQ0FBQ0MsUUFBUSxFQUFFQyxJQUFJLENBQUMsQ0FBQTtFQUN0QyxLQUFBO0VBQUMsR0FBQSxFQUFBO0VBQUEsSUFBQSxHQUFBLEVBQUEsS0FBQTtNQUFBLEtBRUQsRUFBQSxTQUFBLEdBQUEsQ0FBSUcsSUFBSSxFQUFFO0VBQ1IsTUFBQSxJQUFNSixRQUFRLEdBQUcsSUFBSWhCLEtBQUssQ0FBQ3FCLElBQUksQ0FBQ0UsR0FBRyxDQUFDLElBQUksQ0FBQ1AsUUFBUSxDQUFDZixDQUFDLEVBQUVtQixJQUFJLENBQUNKLFFBQVEsQ0FBQ2YsQ0FBQyxDQUFDLEVBQUVvQixJQUFJLENBQUNFLEdBQUcsQ0FBQyxJQUFJLENBQUNQLFFBQVEsQ0FBQ2QsQ0FBQyxFQUFFa0IsSUFBSSxDQUFDSixRQUFRLENBQUNkLENBQUMsQ0FBQyxDQUFDLENBQUE7RUFDbEgsTUFBQSxJQUFNZSxJQUFJLEdBQUksSUFBSWpCLEtBQUssQ0FBQ3FCLElBQUksQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQ04sUUFBUSxDQUFDZixDQUFDLEdBQUcsSUFBSSxDQUFDZ0IsSUFBSSxDQUFDaEIsQ0FBQyxFQUFFbUIsSUFBSSxDQUFDSixRQUFRLENBQUNmLENBQUMsR0FBR21CLElBQUksQ0FBQ0gsSUFBSSxDQUFDaEIsQ0FBQyxDQUFDLEVBQUVvQixJQUFJLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUNOLFFBQVEsQ0FBQ2QsQ0FBQyxHQUFHLElBQUksQ0FBQ2UsSUFBSSxDQUFDZixDQUFDLEVBQUVrQixJQUFJLENBQUNKLFFBQVEsQ0FBQ2QsQ0FBQyxHQUFHa0IsSUFBSSxDQUFDSCxJQUFJLENBQUNmLENBQUMsQ0FBQyxDQUFDLENBQUVzQixHQUFHLENBQUNSLFFBQVEsQ0FBQyxDQUFBO1FBQ3RMLElBQUlDLElBQUksQ0FBQ2hCLENBQUMsSUFBSSxDQUFDLElBQUlnQixJQUFJLENBQUNmLENBQUMsSUFBSSxDQUFDLEVBQUU7RUFDOUIsUUFBQSxPQUFPLElBQUksQ0FBQTtFQUNiLE9BQUE7RUFDQSxNQUFBLE9BQU8sSUFBSWEsU0FBUyxDQUFDQyxRQUFRLEVBQUVDLElBQUksQ0FBQyxDQUFBO0VBQ3RDLEtBQUE7RUFBQyxHQUFBLEVBQUE7RUFBQSxJQUFBLEdBQUEsRUFBQSxjQUFBO01BQUEsS0FFRCxFQUFBLFNBQUEsWUFBQSxDQUFhZCxDQUFDLEVBQUU7UUFDZCxPQUFPLEVBQUUsSUFBSSxDQUFDYSxRQUFRLENBQUNmLENBQUMsR0FBR0UsQ0FBQyxDQUFDRixDQUFDLElBQUksSUFBSSxDQUFDZSxRQUFRLENBQUNmLENBQUMsR0FBRyxJQUFJLENBQUNnQixJQUFJLENBQUNoQixDQUFDLEdBQUdFLENBQUMsQ0FBQ0YsQ0FBQyxJQUFJLElBQUksQ0FBQ2UsUUFBUSxDQUFDZCxDQUFDLEdBQUdDLENBQUMsQ0FBQ0QsQ0FBQyxJQUFJLElBQUksQ0FBQ2MsUUFBUSxDQUFDZCxDQUFDLEdBQUcsSUFBSSxDQUFDZSxJQUFJLENBQUNmLENBQUMsR0FBR0MsQ0FBQyxDQUFDRCxDQUFDLENBQUMsQ0FBQTtFQUN4SSxLQUFBO0VBQUMsR0FBQSxFQUFBO0VBQUEsSUFBQSxHQUFBLEVBQUEsa0JBQUE7TUFBQSxLQUVELEVBQUEsU0FBQSxnQkFBQSxDQUFpQnVCLFNBQVMsRUFBRTtFQUMxQixNQUFBLE9BQU8sSUFBSSxDQUFDQyxZQUFZLENBQUNELFNBQVMsQ0FBQ1QsUUFBUSxDQUFDLElBQUksSUFBSSxDQUFDVSxZQUFZLENBQUNELFNBQVMsQ0FBQ0UsS0FBSyxFQUFFLENBQUMsQ0FBQTtFQUN0RixLQUFBO0VBQUMsR0FBQSxFQUFBO0VBQUEsSUFBQSxHQUFBLEVBQUEsYUFBQTtFQUFBLElBQUEsS0FBQSxFQUVELFNBQVlQLFdBQUFBLENBQUFBLElBQUksRUFBRVEsSUFBSSxFQUFFO1FBQ3RCLElBQUlDLE9BQU8sRUFBRUMsY0FBYyxDQUFBO0VBQzNCLE1BQUEsSUFBSUYsSUFBSSxFQUFFO0VBQ1JDLFFBQUFBLE9BQU8sR0FBR0QsSUFBSSxDQUFBO0VBQ2hCLE9BQUMsTUFBTTtFQUNMRSxRQUFBQSxjQUFjLEdBQUcsSUFBSSxDQUFDQyxHQUFHLENBQUNYLElBQUksQ0FBQyxDQUFBO1VBQy9CLElBQUksQ0FBQ1UsY0FBYyxFQUFFO0VBQ25CLFVBQUEsT0FBT1YsSUFBSSxDQUFBO0VBQ2IsU0FBQTtFQUNBUyxRQUFBQSxPQUFPLEdBQUdDLGNBQWMsQ0FBQ2IsSUFBSSxDQUFDaEIsQ0FBQyxHQUFHNkIsY0FBYyxDQUFDYixJQUFJLENBQUNmLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFBO0VBQ3JFLE9BQUE7RUFDQSxNQUFBLElBQU04QixVQUFVLEdBQUcsSUFBSSxDQUFDQyxTQUFTLEVBQUUsQ0FBQTtFQUNuQyxNQUFBLElBQU1DLFVBQVUsR0FBR2QsSUFBSSxDQUFDYSxTQUFTLEVBQUUsQ0FBQTtFQUNuQyxNQUFBLElBQU1FLElBQUksR0FBR0gsVUFBVSxDQUFDSCxPQUFPLENBQUMsR0FBR0ssVUFBVSxDQUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDL0QsSUFBTU8sTUFBTSxHQUFHRCxJQUFJLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQ25CLFFBQVEsQ0FBQ2EsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDWixJQUFJLENBQUNZLE9BQU8sQ0FBQyxHQUFHVCxJQUFJLENBQUNKLFFBQVEsQ0FBQ2EsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDYixRQUFRLENBQUNhLE9BQU8sQ0FBQyxJQUFJVCxJQUFJLENBQUNKLFFBQVEsQ0FBQ2EsT0FBTyxDQUFDLEdBQUdULElBQUksQ0FBQ0gsSUFBSSxDQUFDWSxPQUFPLENBQUMsQ0FBQyxDQUFBO0VBQ3ZLVCxNQUFBQSxJQUFJLENBQUNKLFFBQVEsQ0FBQ2EsT0FBTyxDQUFDLEdBQUdULElBQUksQ0FBQ0osUUFBUSxDQUFDYSxPQUFPLENBQUMsR0FBR08sTUFBTSxDQUFBO0VBQ3hELE1BQUEsT0FBT2hCLElBQUksQ0FBQTtFQUNiLEtBQUE7RUFBQyxHQUFBLEVBQUE7RUFBQSxJQUFBLEdBQUEsRUFBQSxXQUFBO0VBQUEsSUFBQSxLQUFBLEVBRUQsU0FBWSxTQUFBLEdBQUE7UUFDVixPQUFPLElBQUksQ0FBQ0gsSUFBSSxDQUFDaEIsQ0FBQyxHQUFHLElBQUksQ0FBQ2dCLElBQUksQ0FBQ2YsQ0FBQyxDQUFBO0VBQ2xDLEtBQUE7RUFBQyxHQUFBLEVBQUE7RUFBQSxJQUFBLEdBQUEsRUFBQSxZQUFBO01BQUEsS0FFRCxFQUFBLFNBQUEsVUFBQSxDQUFXbUMsRUFBRSxFQUFFO1FBQ2JBLEVBQUUsR0FBR0EsRUFBRSxJQUFJQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUN4Q0YsRUFBRSxDQUFDRyxLQUFLLENBQUM3QixJQUFJLEdBQUcsSUFBSSxDQUFDSyxRQUFRLENBQUNmLENBQUMsR0FBRyxJQUFJLENBQUE7UUFDdENvQyxFQUFFLENBQUNHLEtBQUssQ0FBQzVCLEdBQUcsR0FBRyxJQUFJLENBQUNJLFFBQVEsQ0FBQ2QsQ0FBQyxHQUFHLElBQUksQ0FBQTtRQUNyQ21DLEVBQUUsQ0FBQ0csS0FBSyxDQUFDM0IsS0FBSyxHQUFHLElBQUksQ0FBQ0ksSUFBSSxDQUFDaEIsQ0FBQyxHQUFHLElBQUksQ0FBQTtRQUNuQ29DLEVBQUUsQ0FBQ0csS0FBSyxDQUFDMUIsTUFBTSxHQUFHLElBQUksQ0FBQ0csSUFBSSxDQUFDZixDQUFDLEdBQUcsSUFBSSxDQUFBO0VBQ3RDLEtBQUE7RUFBQyxHQUFBLEVBQUE7RUFBQSxJQUFBLEdBQUEsRUFBQSxRQUFBO01BQUEsS0FFRCxFQUFBLFNBQUEsTUFBQSxDQUFPZSxJQUFJLEVBQUU7UUFDWCxJQUFJLENBQUNBLElBQUksR0FBRyxJQUFJLENBQUNBLElBQUksQ0FBQ0MsR0FBRyxDQUFDRCxJQUFJLENBQUMsQ0FBQTtFQUMvQixNQUFBLElBQUksQ0FBQ0QsUUFBUSxHQUFHLElBQUksQ0FBQ0EsUUFBUSxDQUFDRSxHQUFHLENBQUNELElBQUksQ0FBQ0UsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtFQUNwRCxLQUFBO0VBQUMsR0FBQSxFQUFBO0VBQUEsSUFBQSxHQUFBLEVBQUEsWUFBQTtFQUFBLElBQUEsS0FBQSxFQUVELFNBQWEsVUFBQSxHQUFBO0VBQ1gsTUFBQSxPQUFPRSxJQUFJLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUNMLElBQUksQ0FBQ2hCLENBQUMsRUFBRSxJQUFJLENBQUNnQixJQUFJLENBQUNmLENBQUMsQ0FBQyxDQUFBO0VBQzNDLEtBQUE7RUFBQyxHQUFBLENBQUEsRUFBQSxDQUFBO0VBQUEsSUFBQSxHQUFBLEVBQUEsYUFBQTtNQUFBLEtBRUQsRUFBQSxTQUFBLFdBQUEsQ0FBbUJHLE9BQU8sRUFBd0Q7RUFBQSxNQUFBLElBQXREQyxNQUFNLEdBQUEsU0FBQSxDQUFBLE1BQUEsR0FBQSxDQUFBLElBQUEsU0FBQSxDQUFBLENBQUEsQ0FBQSxLQUFBLFNBQUEsR0FBQSxTQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUNELE9BQU8sQ0FBQ0UsVUFBVSxDQUFBO1FBQUEsSUFBRWtDLG1CQUFtQix1RUFBQyxLQUFLLENBQUE7UUFDOUUsSUFBTXpCLFFBQVEsR0FBR2hCLEtBQUssQ0FBQzBDLGFBQWEsQ0FBQ3JDLE9BQU8sRUFBRUMsTUFBTSxFQUFFbUMsbUJBQW1CLENBQUMsQ0FBQTtFQUMxRSxNQUFBLElBQU14QixJQUFJLEdBQUdqQixLQUFLLENBQUMyQyxXQUFXLENBQUN0QyxPQUFPLENBQUMsQ0FBQTtFQUN2QyxNQUFBLE9BQU8sSUFBSVUsU0FBUyxDQUFDQyxRQUFRLEVBQUVDLElBQUksQ0FBQyxDQUFBO0VBQ3RDLEtBQUE7RUFBQyxHQUFBLENBQUEsQ0FBQSxDQUFBO0VBQUEsRUFBQSxPQUFBLFNBQUEsQ0FBQTtFQUFBLENBQUE7O0VDL0ZZLFNBQVMyQixtQkFBbUIsQ0FBQ3ZDLE9BQU8sRUFBRTtFQUNuRCxFQUFBLElBQUl3QyxTQUFTLEdBQUd4QyxPQUFPLENBQUNFLFVBQVUsQ0FBQTtJQUNsQyxPQUFPc0MsU0FBUyxDQUFDdEMsVUFBVSxJQUFJdUMsTUFBTSxDQUFDQyxnQkFBZ0IsQ0FBQ0YsU0FBUyxDQUFDLENBQUMsVUFBVSxDQUFDLEtBQUssUUFBUSxJQUFJQSxTQUFTLENBQUNHLE9BQU8sS0FBSyxNQUFNLEVBQUU7TUFDMUhILFNBQVMsR0FBR0EsU0FBUyxDQUFDdEMsVUFBVSxDQUFBO0VBQ2xDLEdBQUE7RUFDQSxFQUFBLE9BQU9zQyxTQUFTLENBQUE7RUFDbEI7O01DTnFCSSxZQUFZLGdCQUFBLFlBQUE7SUFDL0IsU0FBMkIsWUFBQSxHQUFBO01BQUEsSUFBZEMsT0FBTyxHQUFHLFNBQUEsQ0FBQSxNQUFBLEdBQUEsQ0FBQSxJQUFBLFNBQUEsQ0FBQSxDQUFBLENBQUEsS0FBQSxTQUFBLEdBQUEsU0FBQSxDQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUUsQ0FBQTtFQUFBLElBQUEsZUFBQSxDQUFBLElBQUEsRUFBQSxZQUFBLENBQUEsQ0FBQTtFQUN2QixJQUFBLElBQUksQ0FBQ0MsTUFBTSxHQUFHLEVBQUUsQ0FBQTtFQUVoQixJQUFBLElBQUlELE9BQU8sSUFBSUEsT0FBTyxDQUFDRSxFQUFFLEVBQUU7UUFDekIsS0FBOEJDLElBQUFBLEVBQUFBLEdBQUFBLENBQUFBLEVBQUFBLGVBQUFBLEdBQUFBLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDSixPQUFPLENBQUNFLEVBQUUsQ0FBQyxFQUFFLEVBQUEsR0FBQSxlQUFBLENBQUEsTUFBQSxFQUFBLEVBQUEsRUFBQSxFQUFBO0VBQXJELFFBQUEsSUFBQSxrQkFBQSxHQUFBLGNBQUEsQ0FBQSxlQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxDQUFBO1lBQU9HLFNBQVMsR0FBQSxrQkFBQSxDQUFBLENBQUEsQ0FBQTtZQUFFQyxFQUFFLEdBQUEsa0JBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtFQUN2QixRQUFBLElBQUksQ0FBQ0osRUFBRSxDQUFDRyxTQUFTLEVBQUVDLEVBQUUsQ0FBQyxDQUFBO0VBQ3hCLE9BQUE7RUFDRixLQUFBO0VBQ0YsR0FBQTtFQUFDLEVBQUEsWUFBQSxDQUFBLFlBQUEsRUFBQSxDQUFBO0VBQUEsSUFBQSxHQUFBLEVBQUEsTUFBQTtNQUFBLEtBRUQsRUFBQSxTQUFBLElBQUEsQ0FBS0QsU0FBUyxFQUFFO1FBQ2QsSUFBSSxDQUFDRSxXQUFXLEdBQUcsS0FBSyxDQUFBO1FBQ3hCLElBQU1DLElBQUksR0FBRyxFQUFFLENBQUNDLEtBQUssQ0FBQ0MsSUFBSSxDQUFDQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUE7RUFFeEMsTUFBQSxJQUFJLENBQUMsSUFBSSxDQUFDVixNQUFNLENBQUNJLFNBQVMsQ0FBQyxFQUFFLE9BQUE7RUFBTSxNQUFBLElBQUEsU0FBQSxHQUFBLDBCQUFBLENBRWhCLElBQUksQ0FBQ0osTUFBTSxDQUFDSSxTQUFTLENBQUMsQ0FBQTtFQUFBLFFBQUEsS0FBQSxDQUFBO0VBQUEsTUFBQSxJQUFBO1VBQXpDLEtBQTJDLFNBQUEsQ0FBQSxDQUFBLEVBQUEsRUFBQSxDQUFBLENBQUEsS0FBQSxHQUFBLFNBQUEsQ0FBQSxDQUFBLEVBQUEsRUFBQSxJQUFBLEdBQUE7RUFBQSxVQUFBLElBQWhDTyxJQUFJLEdBQUEsS0FBQSxDQUFBLEtBQUEsQ0FBQTtZQUNiQSxJQUFJLENBQUEsS0FBQSxDQUFBLEtBQUEsQ0FBQSxFQUFBLGtCQUFBLENBQUlKLElBQUksQ0FBQyxDQUFBLENBQUE7WUFDYixJQUFJLElBQUksQ0FBQ0QsV0FBVyxFQUFFO0VBQ3BCLFlBQUEsT0FBQTtFQUNGLFdBQUE7RUFDRixTQUFBO0VBQUMsT0FBQSxDQUFBLE9BQUEsR0FBQSxFQUFBO0VBQUEsUUFBQSxTQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBO0VBQUEsT0FBQSxTQUFBO0VBQUEsUUFBQSxTQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7RUFBQSxPQUFBO0VBQ0gsS0FBQTtFQUFDLEdBQUEsRUFBQTtFQUFBLElBQUEsR0FBQSxFQUFBLFdBQUE7RUFBQSxJQUFBLEtBQUEsRUFFRCxTQUFZLFNBQUEsR0FBQTtRQUNWLElBQUksQ0FBQ0EsV0FBVyxHQUFHLElBQUksQ0FBQTtFQUN6QixLQUFBO0VBQUMsR0FBQSxFQUFBO0VBQUEsSUFBQSxHQUFBLEVBQUEsSUFBQTtFQUFBLElBQUEsS0FBQSxFQUVELFNBQUdGLEVBQUFBLENBQUFBLFNBQVMsRUFBRUMsRUFBRSxFQUFFO0VBQ2hCLE1BQUEsSUFBSSxDQUFDLElBQUksQ0FBQ0wsTUFBTSxDQUFDSSxTQUFTLENBQUMsRUFBRTtFQUMzQixRQUFBLElBQUksQ0FBQ0osTUFBTSxDQUFDSSxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUE7RUFDN0IsT0FBQTtRQUVBLElBQUksQ0FBQ0osTUFBTSxDQUFDSSxTQUFTLENBQUMsQ0FBQ1EsSUFBSSxDQUFDUCxFQUFFLENBQUMsQ0FBQTtFQUNqQyxLQUFBO0VBQUMsR0FBQSxFQUFBO0VBQUEsSUFBQSxHQUFBLEVBQUEsV0FBQTtFQUFBLElBQUEsS0FBQSxFQUVELFNBQVVELFNBQUFBLENBQUFBLFNBQVMsRUFBRUMsRUFBRSxFQUFFO0VBQ3ZCLE1BQUEsSUFBSSxDQUFDLElBQUksQ0FBQ0wsTUFBTSxDQUFDSSxTQUFTLENBQUMsRUFBRTtFQUMzQixRQUFBLElBQUksQ0FBQ0osTUFBTSxDQUFDSSxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUE7RUFDN0IsT0FBQTtRQUVBLElBQUksQ0FBQ0osTUFBTSxDQUFDSSxTQUFTLENBQUMsQ0FBQ1MsT0FBTyxDQUFDUixFQUFFLENBQUMsQ0FBQTtFQUNwQyxLQUFBO0VBQUMsR0FBQSxFQUFBO0VBQUEsSUFBQSxHQUFBLEVBQUEsYUFBQTtFQUFBLElBQUEsS0FBQSxFQUVELFNBQVlELFdBQUFBLENBQUFBLFNBQVMsRUFBRUMsRUFBRSxFQUFFO0VBQ3pCLE1BQUEsSUFBSSxJQUFJLENBQUNMLE1BQU0sQ0FBQ0ksU0FBUyxDQUFDLEVBQUU7RUFDMUIsUUFBQSxJQUFNVSxLQUFLLEdBQUcsSUFBSSxDQUFDZCxNQUFNLENBQUNJLFNBQVMsQ0FBQyxDQUFDVyxPQUFPLENBQUNWLEVBQUUsQ0FBQyxDQUFBO1VBQ2hELElBQUksQ0FBQ0wsTUFBTSxDQUFDSSxTQUFTLENBQUMsQ0FBQ1ksTUFBTSxDQUFDRixLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUE7RUFDekMsT0FBQTtFQUNGLEtBQUE7RUFBQyxHQUFBLEVBQUE7RUFBQSxJQUFBLEdBQUEsRUFBQSxjQUFBO0VBQUEsSUFBQSxLQUFBLEVBRUQsU0FBZ0IsWUFBQSxHQUFBO0VBQ2QsTUFBQSxJQUFJLENBQUNkLE1BQU0sR0FBRyxFQUFFLENBQUE7RUFDbEIsS0FBQTtFQUFDLEdBQUEsRUFBQTtFQUFBLElBQUEsR0FBQSxFQUFBLFNBQUE7TUFBQSxLQUVELEVBQUEsU0FBQSxPQUFBLENBQVFJLFNBQVMsRUFBRTtFQUNqQixNQUFBLElBQUksQ0FBQ0osTUFBTSxDQUFDSSxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUE7RUFDN0IsS0FBQTtFQUFDLEdBQUEsQ0FBQSxDQUFBLENBQUE7RUFBQSxFQUFBLE9BQUEsWUFBQSxDQUFBO0VBQUEsQ0FBQSxFQUFBOztFQzFESSxTQUFTYSxXQUFXLENBQUNDLEVBQUUsRUFBRUMsRUFBRSxFQUFFO0lBQ2xDLElBQU1DLEVBQUUsR0FBR0YsRUFBRSxDQUFDcEUsQ0FBQyxHQUFHcUUsRUFBRSxDQUFDckUsQ0FBQztFQUFFdUUsSUFBQUEsRUFBRSxHQUFHSCxFQUFFLENBQUNuRSxDQUFDLEdBQUdvRSxFQUFFLENBQUNwRSxDQUFDLENBQUE7SUFDeEMsT0FBT21CLElBQUksQ0FBQ29ELElBQUksQ0FBQ0YsRUFBRSxHQUFHQSxFQUFFLEdBQUdDLEVBQUUsR0FBR0EsRUFBRSxDQUFDLENBQUE7RUFDckMsQ0FBQTtFQUVPLFNBQVNFLGNBQWMsQ0FBQ0wsRUFBRSxFQUFFQyxFQUFFLEVBQUU7SUFDckMsT0FBT2pELElBQUksQ0FBQ3NELEdBQUcsQ0FBQ04sRUFBRSxDQUFDcEUsQ0FBQyxHQUFHcUUsRUFBRSxDQUFDckUsQ0FBQyxDQUFDLENBQUE7RUFDOUIsQ0FBQTtFQUVPLFNBQVMyRSxjQUFjLENBQUNQLEVBQUUsRUFBRUMsRUFBRSxFQUFFO0lBQ3JDLE9BQU9qRCxJQUFJLENBQUNzRCxHQUFHLENBQUNOLEVBQUUsQ0FBQ25FLENBQUMsR0FBR29FLEVBQUUsQ0FBQ3BFLENBQUMsQ0FBQyxDQUFBO0VBQzlCLENBQUE7RUFFTyxTQUFTMkUsK0JBQStCLENBQUMzQixPQUFPLEVBQUU7RUFDdkQsRUFBQSxPQUFPLFVBQUNtQixFQUFFLEVBQUVDLEVBQUUsRUFBSztNQUNqQixPQUFPakQsSUFBSSxDQUFDb0QsSUFBSSxDQUNkcEQsSUFBSSxDQUFDeUQsR0FBRyxDQUFDNUIsT0FBTyxDQUFDakQsQ0FBQyxHQUFHb0IsSUFBSSxDQUFDc0QsR0FBRyxDQUFDTixFQUFFLENBQUNwRSxDQUFDLEdBQUdxRSxFQUFFLENBQUNyRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FDOUNvQixJQUFJLENBQUN5RCxHQUFHLENBQUM1QixPQUFPLENBQUNoRCxDQUFDLEdBQUdtQixJQUFJLENBQUNzRCxHQUFHLENBQUNOLEVBQUUsQ0FBQ25FLENBQUMsR0FBR29FLEVBQUUsQ0FBQ3BFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUMvQyxDQUFBO0tBQ0YsQ0FBQTtFQUNILENBQUE7RUFFTyxTQUFTNkUsbUJBQW1CLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFQyxNQUFNLEVBQStCO0lBQUEsSUFBN0JDLGVBQWUsdUVBQUNmLFdBQVcsQ0FBQTtFQUMvRSxFQUFBLElBQUluRCxJQUFJO0VBQUVnRCxJQUFBQSxLQUFLLEdBQUcsQ0FBQztNQUFFbUIsQ0FBQztNQUFFQyxJQUFJLENBQUE7RUFDNUIsRUFBQSxJQUFJTCxHQUFHLENBQUNNLE1BQU0sS0FBSyxDQUFDLEVBQUU7RUFDcEIsSUFBQSxPQUFPLENBQUMsQ0FBQyxDQUFBO0VBQ1gsR0FBQTtJQUNBckUsSUFBSSxHQUFHa0UsZUFBZSxDQUFDSCxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUVDLEdBQUcsQ0FBQyxDQUFBO0VBQ25DLEVBQUEsS0FBS0csQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHSixHQUFHLENBQUNNLE1BQU0sRUFBRUYsQ0FBQyxFQUFFLEVBQUU7TUFDL0JDLElBQUksR0FBR0YsZUFBZSxDQUFDSCxHQUFHLENBQUNJLENBQUMsQ0FBQyxFQUFFSCxHQUFHLENBQUMsQ0FBQTtNQUNuQyxJQUFJSSxJQUFJLEdBQUdwRSxJQUFJLEVBQUU7RUFDZkEsTUFBQUEsSUFBSSxHQUFHb0UsSUFBSSxDQUFBO0VBQ1hwQixNQUFBQSxLQUFLLEdBQUdtQixDQUFDLENBQUE7RUFDWCxLQUFBO0VBQ0YsR0FBQTtFQUNBLEVBQUEsSUFBSUYsTUFBTSxJQUFJLENBQUMsSUFBSWpFLElBQUksR0FBR2lFLE1BQU0sRUFBRTtFQUNoQyxJQUFBLE9BQU8sQ0FBQyxDQUFDLENBQUE7RUFDWCxHQUFBO0VBQ0EsRUFBQSxPQUFPakIsS0FBSyxDQUFBO0VBQ2Q7O0VDaENBO0VBQ08sU0FBU3NCLGNBQWMsQ0FBQ0MsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFO0VBQ3JELEVBQUEsSUFBSU4sSUFBSSxFQUFFTyxFQUFFLEVBQUVDLEVBQUUsRUFBRUMsRUFBRSxFQUFFQyxFQUFFLEVBQUU5RixDQUFDLEVBQUVDLENBQUMsQ0FBQTtFQUM5QixFQUFBLElBQUl3RixJQUFJLENBQUN6RixDQUFDLEtBQUswRixJQUFJLENBQUMxRixDQUFDLEVBQUU7RUFDckJvRixJQUFBQSxJQUFJLEdBQUdLLElBQUksQ0FBQTtFQUNYQSxJQUFBQSxJQUFJLEdBQUdGLElBQUksQ0FBQTtFQUNYQSxJQUFBQSxJQUFJLEdBQUdILElBQUksQ0FBQTtFQUNYQSxJQUFBQSxJQUFJLEdBQUdNLElBQUksQ0FBQTtFQUNYQSxJQUFBQSxJQUFJLEdBQUdGLElBQUksQ0FBQTtFQUNYQSxJQUFBQSxJQUFJLEdBQUdKLElBQUksQ0FBQTtFQUNiLEdBQUE7RUFDQSxFQUFBLElBQUlHLElBQUksQ0FBQ3ZGLENBQUMsS0FBS3dGLElBQUksQ0FBQ3hGLENBQUMsRUFBRTtFQUNyQjRGLElBQUFBLEVBQUUsR0FBRyxDQUFDRixJQUFJLENBQUN6RixDQUFDLEdBQUd3RixJQUFJLENBQUN4RixDQUFDLEtBQUt5RixJQUFJLENBQUMxRixDQUFDLEdBQUd5RixJQUFJLENBQUN6RixDQUFDLENBQUMsQ0FBQTtNQUMxQzhGLEVBQUUsR0FBRyxDQUFDSixJQUFJLENBQUMxRixDQUFDLEdBQUd5RixJQUFJLENBQUN4RixDQUFDLEdBQUd3RixJQUFJLENBQUN6RixDQUFDLEdBQUcwRixJQUFJLENBQUN6RixDQUFDLEtBQUt5RixJQUFJLENBQUMxRixDQUFDLEdBQUd5RixJQUFJLENBQUN6RixDQUFDLENBQUMsQ0FBQTtNQUM1REEsQ0FBQyxHQUFHdUYsSUFBSSxDQUFDdkYsQ0FBQyxDQUFBO0VBQ1ZDLElBQUFBLENBQUMsR0FBR0QsQ0FBQyxHQUFHNEYsRUFBRSxHQUFHRSxFQUFFLENBQUE7RUFDZixJQUFBLE9BQU8sSUFBSS9GLEtBQUssQ0FBQ0MsQ0FBQyxFQUFFQyxDQUFDLENBQUMsQ0FBQTtFQUN4QixHQUFDLE1BQU07RUFDTDBGLElBQUFBLEVBQUUsR0FBRyxDQUFDSCxJQUFJLENBQUN2RixDQUFDLEdBQUdzRixJQUFJLENBQUN0RixDQUFDLEtBQUt1RixJQUFJLENBQUN4RixDQUFDLEdBQUd1RixJQUFJLENBQUN2RixDQUFDLENBQUMsQ0FBQTtNQUMxQzZGLEVBQUUsR0FBRyxDQUFDTCxJQUFJLENBQUN4RixDQUFDLEdBQUd1RixJQUFJLENBQUN0RixDQUFDLEdBQUdzRixJQUFJLENBQUN2RixDQUFDLEdBQUd3RixJQUFJLENBQUN2RixDQUFDLEtBQUt1RixJQUFJLENBQUN4RixDQUFDLEdBQUd1RixJQUFJLENBQUN2RixDQUFDLENBQUMsQ0FBQTtFQUM1RDRGLElBQUFBLEVBQUUsR0FBRyxDQUFDRixJQUFJLENBQUN6RixDQUFDLEdBQUd3RixJQUFJLENBQUN4RixDQUFDLEtBQUt5RixJQUFJLENBQUMxRixDQUFDLEdBQUd5RixJQUFJLENBQUN6RixDQUFDLENBQUMsQ0FBQTtNQUMxQzhGLEVBQUUsR0FBRyxDQUFDSixJQUFJLENBQUMxRixDQUFDLEdBQUd5RixJQUFJLENBQUN4RixDQUFDLEdBQUd3RixJQUFJLENBQUN6RixDQUFDLEdBQUcwRixJQUFJLENBQUN6RixDQUFDLEtBQUt5RixJQUFJLENBQUMxRixDQUFDLEdBQUd5RixJQUFJLENBQUN6RixDQUFDLENBQUMsQ0FBQTtNQUM1REEsQ0FBQyxHQUFHLENBQUM2RixFQUFFLEdBQUdDLEVBQUUsS0FBS0YsRUFBRSxHQUFHRCxFQUFFLENBQUMsQ0FBQTtFQUN6QjFGLElBQUFBLENBQUMsR0FBR0QsQ0FBQyxHQUFHMkYsRUFBRSxHQUFHRSxFQUFFLENBQUE7RUFDZixJQUFBLE9BQU8sSUFBSTlGLEtBQUssQ0FBQ0MsQ0FBQyxFQUFFQyxDQUFDLENBQUMsQ0FBQTtFQUN4QixHQUFBO0VBQ0YsQ0FBQTtFQW1CTyxTQUFTOEYsV0FBVyxDQUFDQyxDQUFDLEVBQUVDLENBQUMsRUFBRUMsQ0FBQyxFQUFFO0lBQ25DLElBQU1DLEVBQUUsR0FBRyxJQUFJcEcsS0FBSyxDQUFDbUcsQ0FBQyxDQUFDbEcsQ0FBQyxHQUFHZ0csQ0FBQyxDQUFDaEcsQ0FBQyxFQUFFa0csQ0FBQyxDQUFDakcsQ0FBQyxHQUFHK0YsQ0FBQyxDQUFDL0YsQ0FBQyxDQUFDO0VBQ3hDbUcsSUFBQUEsRUFBRSxHQUFHLElBQUlyRyxLQUFLLENBQUNrRyxDQUFDLENBQUNqRyxDQUFDLEdBQUdnRyxDQUFDLENBQUNoRyxDQUFDLEVBQUVpRyxDQUFDLENBQUNoRyxDQUFDLEdBQUcrRixDQUFDLENBQUMvRixDQUFDLENBQUM7RUFDcENvRyxJQUFBQSxHQUFHLEdBQUdELEVBQUUsQ0FBQ3BHLENBQUMsR0FBR29HLEVBQUUsQ0FBQ3BHLENBQUMsR0FBR29HLEVBQUUsQ0FBQ25HLENBQUMsR0FBR21HLEVBQUUsQ0FBQ25HLENBQUM7RUFDL0JxRyxJQUFBQSxLQUFLLEdBQUdILEVBQUUsQ0FBQ25HLENBQUMsR0FBR29HLEVBQUUsQ0FBQ3BHLENBQUMsR0FBR21HLEVBQUUsQ0FBQ2xHLENBQUMsR0FBR21HLEVBQUUsQ0FBQ25HLENBQUM7TUFDakNzRyxDQUFDLEdBQUdELEtBQUssR0FBR0QsR0FBRyxDQUFBO0lBQ2pCLE9BQU8sSUFBSXRHLEtBQUssQ0FBQ2lHLENBQUMsQ0FBQ2hHLENBQUMsR0FBR29HLEVBQUUsQ0FBQ3BHLENBQUMsR0FBR3VHLENBQUMsRUFBRVAsQ0FBQyxDQUFDL0YsQ0FBQyxHQUFHbUcsRUFBRSxDQUFDbkcsQ0FBQyxHQUFHc0csQ0FBQyxDQUFDLENBQUE7RUFDbEQsQ0FBQTtFQU9PLFNBQVNDLHNCQUFzQixDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRUMsTUFBTSxFQUFFO0lBQ3ZELElBQU1yQyxFQUFFLEdBQUdvQyxHQUFHLENBQUMxRyxDQUFDLEdBQUd5RyxHQUFHLENBQUN6RyxDQUFDLENBQUE7SUFDeEIsSUFBTXVFLEVBQUUsR0FBR21DLEdBQUcsQ0FBQ3pHLENBQUMsR0FBR3dHLEdBQUcsQ0FBQ3hHLENBQUMsQ0FBQTtJQUN4QixJQUFNMkcsT0FBTyxHQUFHRCxNQUFNLEdBQUd4QyxXQUFXLENBQUNzQyxHQUFHLEVBQUVDLEdBQUcsQ0FBQyxDQUFBO0VBQzlDLEVBQUEsT0FBTyxJQUFJM0csS0FBSyxDQUFDMEcsR0FBRyxDQUFDekcsQ0FBQyxHQUFHNEcsT0FBTyxHQUFHdEMsRUFBRSxFQUFFbUMsR0FBRyxDQUFDeEcsQ0FBQyxHQUFHMkcsT0FBTyxHQUFHckMsRUFBRSxDQUFDLENBQUE7RUFDOUQsQ0FBQTtFQUVPLFNBQVNzQyxxQkFBcUIsQ0FBQ0MsV0FBVyxFQUFFQyxLQUFLLEVBQUVDLE9BQU8sRUFBRTtJQUNqRSxJQUFNQyxNQUFNLEdBQUdILFdBQVcsQ0FBQ0ksTUFBTSxDQUFDLFVBQUNDLE1BQU0sRUFBSztNQUM1QyxPQUFPQSxNQUFNLENBQUNsSCxDQUFDLEdBQUc4RyxLQUFLLENBQUM5RyxDQUFDLEtBQUsrRyxPQUFPLEdBQUdHLE1BQU0sQ0FBQ25ILENBQUMsR0FBRytHLEtBQUssQ0FBQy9HLENBQUMsR0FBR21ILE1BQU0sQ0FBQ25ILENBQUMsR0FBRytHLEtBQUssQ0FBQy9HLENBQUMsQ0FBQyxDQUFBO0VBQ2xGLEdBQUMsQ0FBQyxDQUFBO0VBRUYsRUFBQSxLQUFLLElBQUltRixDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUc4QixNQUFNLENBQUM1QixNQUFNLEVBQUVGLENBQUMsRUFBRSxFQUFFO01BQ3RDLElBQUk0QixLQUFLLENBQUM5RyxDQUFDLEdBQUdnSCxNQUFNLENBQUM5QixDQUFDLENBQUMsQ0FBQ2xGLENBQUMsRUFBRTtRQUN6QmdILE1BQU0sQ0FBQy9DLE1BQU0sQ0FBQ2lCLENBQUMsRUFBRSxDQUFDLEVBQUU0QixLQUFLLENBQUMsQ0FBQTtFQUMxQixNQUFBLE9BQU9FLE1BQU0sQ0FBQTtFQUNmLEtBQUE7RUFDRixHQUFBO0VBQ0FBLEVBQUFBLE1BQU0sQ0FBQ25ELElBQUksQ0FBQ2lELEtBQUssQ0FBQyxDQUFBO0VBQ2xCLEVBQUEsT0FBT0UsTUFBTSxDQUFBO0VBQ2Y7O0VDcEZPLFNBQVNHLFlBQVksQ0FBQ0MsS0FBSyxFQUFFQyxJQUFJLEVBQUU7SUFDeEMsSUFBTUMsUUFBUSxHQUFHbkcsSUFBSSxDQUFDQyxHQUFHLENBQUNnRyxLQUFLLEVBQUVDLElBQUksQ0FBQyxDQUFBO0lBQ3RDLElBQU1FLFFBQVEsR0FBSXBHLElBQUksQ0FBQ0UsR0FBRyxDQUFDK0YsS0FBSyxFQUFFQyxJQUFJLENBQUMsQ0FBQTtFQUN2QyxFQUFBLE9BQU9sRyxJQUFJLENBQUNDLEdBQUcsQ0FBQ21HLFFBQVEsR0FBR0QsUUFBUSxFQUFFQSxRQUFRLEdBQUduRyxJQUFJLENBQUNxRyxFQUFFLEdBQUMsQ0FBQyxHQUFHRCxRQUFRLENBQUMsQ0FBQTtFQUN2RSxDQUFBO0VBRU8sU0FBU0UsUUFBUSxDQUFDdEQsRUFBRSxFQUFFQyxFQUFFLEVBQUU7RUFDL0IsRUFBQSxJQUFNc0QsSUFBSSxHQUFHdEQsRUFBRSxDQUFDOUMsR0FBRyxDQUFDNkMsRUFBRSxDQUFDLENBQUE7RUFDdkIsRUFBQSxPQUFPd0QsY0FBYyxDQUFDeEcsSUFBSSxDQUFDeUcsS0FBSyxDQUFDRixJQUFJLENBQUMxSCxDQUFDLEVBQUUwSCxJQUFJLENBQUMzSCxDQUFDLENBQUMsQ0FBQyxDQUFBO0VBQ25ELENBQUE7RUFVTyxTQUFTOEgsVUFBVSxDQUFDekcsR0FBRyxFQUFFQyxHQUFHLEVBQUUwRCxHQUFHLEVBQUU7SUFDeEMsSUFBSStDLElBQUksRUFBRUMsSUFBSSxDQUFBO0lBQ2QsSUFBSTNHLEdBQUcsR0FBR0MsR0FBRyxJQUFJMEQsR0FBRyxHQUFHM0QsR0FBRyxJQUFJMkQsR0FBRyxHQUFHMUQsR0FBRyxFQUFFO0VBQ3ZDLElBQUEsT0FBTzBELEdBQUcsQ0FBQTtFQUNaLEdBQUMsTUFBTSxJQUFJMUQsR0FBRyxHQUFHRCxHQUFHLEtBQUsyRCxHQUFHLEdBQUcxRCxHQUFHLElBQUkwRCxHQUFHLEdBQUczRCxHQUFHLENBQUMsRUFBRTtFQUNoRCxJQUFBLE9BQU8yRCxHQUFHLENBQUE7RUFDWixHQUFDLE1BQU07RUFDTCtDLElBQUFBLElBQUksR0FBR1gsWUFBWSxDQUFDL0YsR0FBRyxFQUFFMkQsR0FBRyxDQUFDLENBQUE7RUFDN0JnRCxJQUFBQSxJQUFJLEdBQUdaLFlBQVksQ0FBQzlGLEdBQUcsRUFBRTBELEdBQUcsQ0FBQyxDQUFBO01BQzdCLElBQUkrQyxJQUFJLEdBQUdDLElBQUksRUFBRTtFQUNmLE1BQUEsT0FBTzNHLEdBQUcsQ0FBQTtFQUNaLEtBQUMsTUFBTTtFQUNMLE1BQUEsT0FBT0MsR0FBRyxDQUFBO0VBQ1osS0FBQTtFQUNGLEdBQUE7RUFDRixDQUFBO0VBY08sU0FBU3NHLGNBQWMsQ0FBQzVDLEdBQUcsRUFBRTtJQUNsQyxPQUFPQSxHQUFHLEdBQUcsQ0FBQyxFQUFFO0VBQ2RBLElBQUFBLEdBQUcsSUFBSSxDQUFDLEdBQUc1RCxJQUFJLENBQUNxRyxFQUFFLENBQUE7RUFDcEIsR0FBQTtFQUNBLEVBQUEsT0FBT3pDLEdBQUcsR0FBRyxDQUFDLEdBQUc1RCxJQUFJLENBQUNxRyxFQUFFLEVBQUU7RUFDeEJ6QyxJQUFBQSxHQUFHLElBQUksQ0FBQyxHQUFHNUQsSUFBSSxDQUFDcUcsRUFBRSxDQUFBO0VBQ3BCLEdBQUE7RUFDQSxFQUFBLE9BQU96QyxHQUFHLENBQUE7RUFDWixDQUFBO0VBRU8sU0FBU2lELHdCQUF3QixDQUFDQyxLQUFLLEVBQUU3QyxNQUFNLEVBQUU4QyxNQUFNLEVBQUU7SUFDOURBLE1BQU0sR0FBR0EsTUFBTSxJQUFJLElBQUlwSSxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQ2xDLE9BQU9vSSxNQUFNLENBQUNsSCxHQUFHLENBQUMsSUFBSWxCLEtBQUssQ0FBQ3NGLE1BQU0sR0FBR2pFLElBQUksQ0FBQ2dILEdBQUcsQ0FBQ0YsS0FBSyxDQUFDLEVBQUU3QyxNQUFNLEdBQUdqRSxJQUFJLENBQUNpSCxHQUFHLENBQUNILEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQTtFQUNsRjs7QUNoREEsTUFBYUksS0FBSyxnQkFBQSxZQUFBO0lBQ2hCLFNBQWUsS0FBQSxHQUFBO0VBQUEsSUFBQSxlQUFBLENBQUEsSUFBQSxFQUFBLEtBQUEsQ0FBQSxDQUFBO0VBQUMsR0FBQTtFQUFDLEVBQUEsWUFBQSxDQUFBLEtBQUEsRUFBQSxDQUFBO0VBQUEsSUFBQSxHQUFBLEVBQUEsT0FBQTtFQUFBLElBQUEsS0FBQSxFQUVqQixTQUFNdkIsS0FBQUEsQ0FBQUEsS0FBSyxFQUFFd0IsS0FBSyxFQUFFO0VBQ2xCLE1BQUEsT0FBT3hCLEtBQUssQ0FBQTtFQUNkLEtBQUE7RUFBQyxHQUFBLEVBQUE7RUFBQSxJQUFBLEdBQUEsRUFBQSxTQUFBO0VBQUEsSUFBQSxLQUFBLEVBRUQsbUJBQVcsRUFBQztFQUFDLEdBQUEsQ0FBQSxFQUFBLENBQUE7RUFBQSxJQUFBLEdBQUEsRUFBQSxVQUFBO0VBQUEsSUFBQSxLQUFBLEVBRWIsU0FBa0IsUUFBQSxHQUFBO0VBQ2hCLE1BQUEsSUFBTXlCLFFBQVEsR0FBQSxVQUFBLENBQU8sSUFBSSxFQUFBLEtBQUEsQ0FBQSxTQUFBLENBQUEsS0FBQSxDQUFBLElBQUEsQ0FBSTVFLFNBQVMsQ0FBQyxDQUFBLENBQUE7RUFDdkMsTUFBQSxPQUFPNEUsUUFBUSxDQUFDQyxLQUFLLENBQUNDLElBQUksQ0FBQ0YsUUFBUSxDQUFDLENBQUE7RUFDdEMsS0FBQTtFQUFDLEdBQUEsQ0FBQSxDQUFBLENBQUE7RUFBQSxFQUFBLE9BQUEsS0FBQSxDQUFBO0VBQUEsQ0FBQSxHQUFBO0FBR0gsTUFBYUcsZ0JBQWdCLGdCQUFBLFVBQUEsTUFBQSxFQUFBO0VBQUEsRUFBQSxTQUFBLENBQUEsZ0JBQUEsRUFBQSxNQUFBLENBQUEsQ0FBQTtFQUFBLEVBQUEsSUFBQSxNQUFBLEdBQUEsWUFBQSxDQUFBLGdCQUFBLENBQUEsQ0FBQTtFQUMzQixFQUFBLFNBQUEsZ0JBQUEsQ0FBWW5ILFNBQVMsRUFBRTtFQUFBLElBQUEsSUFBQSxLQUFBLENBQUE7RUFBQSxJQUFBLGVBQUEsQ0FBQSxJQUFBLEVBQUEsZ0JBQUEsQ0FBQSxDQUFBO0VBQ3JCLElBQUEsS0FBQSxHQUFBLE1BQUEsQ0FBQSxJQUFBLENBQUEsSUFBQSxDQUFBLENBQUE7TUFDQSxLQUFLQSxDQUFBQSxTQUFTLEdBQUdBLFNBQVMsQ0FBQTtFQUFBLElBQUEsT0FBQSxLQUFBLENBQUE7RUFDNUIsR0FBQTtFQUFDLEVBQUEsWUFBQSxDQUFBLGdCQUFBLEVBQUEsQ0FBQTtFQUFBLElBQUEsR0FBQSxFQUFBLE9BQUE7RUFBQSxJQUFBLEtBQUEsRUFFRCxTQUFNdUYsS0FBQUEsQ0FBQUEsS0FBSyxFQUFFL0YsSUFBSSxFQUFFO0VBQ2pCLE1BQUEsSUFBTTRILFNBQVMsR0FBRzdCLEtBQUssQ0FBQzhCLEtBQUssRUFBRSxDQUFBO0VBQy9CLE1BQUEsSUFBTUMsTUFBTSxHQUFHLElBQUksQ0FBQ3RILFNBQVMsQ0FBQ0UsS0FBSyxFQUFFLENBQUE7UUFFckMsSUFBSSxJQUFJLENBQUNGLFNBQVMsQ0FBQ1QsUUFBUSxDQUFDZixDQUFDLEdBQUc0SSxTQUFTLENBQUM1SSxDQUFDLEVBQUU7VUFDMUM0SSxTQUFTLENBQUM1SSxDQUFDLEdBQUcsSUFBSSxDQUFDd0IsU0FBUyxDQUFDVCxRQUFRLENBQUNmLENBQUMsQ0FBQTtFQUMxQyxPQUFBO1FBQ0EsSUFBSSxJQUFJLENBQUN3QixTQUFTLENBQUNULFFBQVEsQ0FBQ2QsQ0FBQyxHQUFHMkksU0FBUyxDQUFDM0ksQ0FBQyxFQUFFO1VBQzNDMkksU0FBUyxDQUFDM0ksQ0FBQyxHQUFHLElBQUksQ0FBQ3VCLFNBQVMsQ0FBQ1QsUUFBUSxDQUFDZCxDQUFDLENBQUE7RUFDekMsT0FBQTtRQUNBLElBQUk2SSxNQUFNLENBQUM5SSxDQUFDLEdBQUc0SSxTQUFTLENBQUM1SSxDQUFDLEdBQUdnQixJQUFJLENBQUNoQixDQUFDLEVBQUU7VUFDbkM0SSxTQUFTLENBQUM1SSxDQUFDLEdBQUc4SSxNQUFNLENBQUM5SSxDQUFDLEdBQUdnQixJQUFJLENBQUNoQixDQUFDLENBQUE7RUFDakMsT0FBQTtRQUNBLElBQUk4SSxNQUFNLENBQUM3SSxDQUFDLEdBQUcySSxTQUFTLENBQUMzSSxDQUFDLEdBQUdlLElBQUksQ0FBQ2YsQ0FBQyxFQUFFO1VBQ25DMkksU0FBUyxDQUFDM0ksQ0FBQyxHQUFHNkksTUFBTSxDQUFDN0ksQ0FBQyxHQUFHZSxJQUFJLENBQUNmLENBQUMsQ0FBQTtFQUNqQyxPQUFBO0VBRUEsTUFBQSxPQUFPMkksU0FBUyxDQUFBO0VBQ2xCLEtBQUE7RUFBQyxHQUFBLENBQUEsQ0FBQSxDQUFBO0VBQUEsRUFBQSxPQUFBLGdCQUFBLENBQUE7RUFBQSxDQUFBLENBeEJtQ04sS0FBSyxFQUFBO0FBMkIzQyxNQUFhUyxjQUFjLGdCQUFBLFVBQUEsaUJBQUEsRUFBQTtFQUFBLEVBQUEsU0FBQSxDQUFBLGNBQUEsRUFBQSxpQkFBQSxDQUFBLENBQUE7RUFBQSxFQUFBLElBQUEsT0FBQSxHQUFBLFlBQUEsQ0FBQSxjQUFBLENBQUEsQ0FBQTtJQUN6QixTQUFZM0ksY0FBQUEsQ0FBQUEsT0FBTyxFQUFFd0MsU0FBUyxFQUFFO0VBQUEsSUFBQSxJQUFBLE1BQUEsQ0FBQTtFQUFBLElBQUEsZUFBQSxDQUFBLElBQUEsRUFBQSxjQUFBLENBQUEsQ0FBQTtFQUM5QixJQUFBLE1BQUEsR0FBQSxPQUFBLENBQUEsSUFBQSxDQUFBLElBQUEsRUFBTTlCLFNBQVMsQ0FBQ2tJLFdBQVcsQ0FBQzVJLE9BQU8sRUFBRXdDLFNBQVMsQ0FBQyxDQUFBLENBQUE7TUFDL0MsTUFBS3hDLENBQUFBLE9BQU8sR0FBR0EsT0FBTyxDQUFBO01BQ3RCLE1BQUt3QyxDQUFBQSxTQUFTLEdBQUdBLFNBQVMsQ0FBQTtFQUFBLElBQUEsT0FBQSxNQUFBLENBQUE7RUFDNUIsR0FBQTtFQUFDLEVBQUEsWUFBQSxDQUFBLGNBQUEsRUFBQSxDQUFBO0VBQUEsSUFBQSxHQUFBLEVBQUEsU0FBQTtFQUFBLElBQUEsS0FBQSxFQUVELFNBQVcsT0FBQSxHQUFBO0VBQ1QsTUFBQSxJQUFJLENBQUNwQixTQUFTLEdBQUdWLFNBQVMsQ0FBQ2tJLFdBQVcsQ0FBQyxJQUFJLENBQUM1SSxPQUFPLEVBQUUsSUFBSSxDQUFDd0MsU0FBUyxDQUFDLENBQUE7RUFDdEUsS0FBQTtFQUFDLEdBQUEsQ0FBQSxDQUFBLENBQUE7RUFBQSxFQUFBLE9BQUEsY0FBQSxDQUFBO0VBQUEsQ0FBQSxDQVRpQytGLGdCQUFnQixFQUFBO0FBWXBELE1BQWFNLFlBQVksZ0JBQUEsVUFBQSxPQUFBLEVBQUE7RUFBQSxFQUFBLFNBQUEsQ0FBQSxZQUFBLEVBQUEsT0FBQSxDQUFBLENBQUE7RUFBQSxFQUFBLElBQUEsT0FBQSxHQUFBLFlBQUEsQ0FBQSxZQUFBLENBQUEsQ0FBQTtFQUN2QixFQUFBLFNBQUEsWUFBQSxDQUFZakosQ0FBQyxFQUFFa0osTUFBTSxFQUFFQyxJQUFJLEVBQUU7RUFBQSxJQUFBLElBQUEsTUFBQSxDQUFBO0VBQUEsSUFBQSxlQUFBLENBQUEsSUFBQSxFQUFBLFlBQUEsQ0FBQSxDQUFBO0VBQzNCLElBQUEsTUFBQSxHQUFBLE9BQUEsQ0FBQSxJQUFBLENBQUEsSUFBQSxDQUFBLENBQUE7TUFDQSxNQUFLbkosQ0FBQUEsQ0FBQyxHQUFHQSxDQUFDLENBQUE7TUFDVixNQUFLa0osQ0FBQUEsTUFBTSxHQUFHQSxNQUFNLENBQUE7TUFDcEIsTUFBS0MsQ0FBQUEsSUFBSSxHQUFHQSxJQUFJLENBQUE7RUFBQSxJQUFBLE9BQUEsTUFBQSxDQUFBO0VBQ2xCLEdBQUE7RUFBQyxFQUFBLFlBQUEsQ0FBQSxZQUFBLEVBQUEsQ0FBQTtFQUFBLElBQUEsR0FBQSxFQUFBLE9BQUE7RUFBQSxJQUFBLEtBQUEsRUFFRCxTQUFNcEMsS0FBQUEsQ0FBQUEsS0FBSyxFQUFFL0YsSUFBSSxFQUFFO0VBQ2pCLE1BQUEsSUFBTTRILFNBQVMsR0FBRzdCLEtBQUssQ0FBQzhCLEtBQUssRUFBRSxDQUFBO0VBRS9CRCxNQUFBQSxTQUFTLENBQUM1SSxDQUFDLEdBQUcsSUFBSSxDQUFDQSxDQUFDLENBQUE7RUFDcEIsTUFBQSxJQUFJLElBQUksQ0FBQ2tKLE1BQU0sR0FBR04sU0FBUyxDQUFDM0ksQ0FBQyxFQUFFO0VBQzdCMkksUUFBQUEsU0FBUyxDQUFDM0ksQ0FBQyxHQUFHLElBQUksQ0FBQ2lKLE1BQU0sQ0FBQTtFQUMzQixPQUFBO1FBQ0EsSUFBSSxJQUFJLENBQUNDLElBQUksR0FBR1AsU0FBUyxDQUFDM0ksQ0FBQyxHQUFHZSxJQUFJLENBQUNmLENBQUMsRUFBRTtVQUNwQzJJLFNBQVMsQ0FBQzNJLENBQUMsR0FBRyxJQUFJLENBQUNrSixJQUFJLEdBQUduSSxJQUFJLENBQUNmLENBQUMsQ0FBQTtFQUNsQyxPQUFBO0VBRUEsTUFBQSxPQUFPMkksU0FBUyxDQUFBO0VBQ2xCLEtBQUE7RUFBQyxHQUFBLENBQUEsQ0FBQSxDQUFBO0VBQUEsRUFBQSxPQUFBLFlBQUEsQ0FBQTtFQUFBLENBQUEsQ0FwQitCTixLQUFLLEVBQUE7QUF1QnZDLE1BQWFjLFlBQVksZ0JBQUEsVUFBQSxPQUFBLEVBQUE7RUFBQSxFQUFBLFNBQUEsQ0FBQSxZQUFBLEVBQUEsT0FBQSxDQUFBLENBQUE7RUFBQSxFQUFBLElBQUEsT0FBQSxHQUFBLFlBQUEsQ0FBQSxZQUFBLENBQUEsQ0FBQTtFQUN2QixFQUFBLFNBQUEsWUFBQSxDQUFZbkosQ0FBQyxFQUFFb0osTUFBTSxFQUFFQyxJQUFJLEVBQUU7RUFBQSxJQUFBLElBQUEsTUFBQSxDQUFBO0VBQUEsSUFBQSxlQUFBLENBQUEsSUFBQSxFQUFBLFlBQUEsQ0FBQSxDQUFBO0VBQzNCLElBQUEsTUFBQSxHQUFBLE9BQUEsQ0FBQSxJQUFBLENBQUEsSUFBQSxDQUFBLENBQUE7TUFDQSxNQUFLckosQ0FBQUEsQ0FBQyxHQUFHQSxDQUFDLENBQUE7TUFDVixNQUFLb0osQ0FBQUEsTUFBTSxHQUFHQSxNQUFNLENBQUE7TUFDcEIsTUFBS0MsQ0FBQUEsSUFBSSxHQUFHQSxJQUFJLENBQUE7RUFBQSxJQUFBLE9BQUEsTUFBQSxDQUFBO0VBQ2xCLEdBQUE7RUFBQyxFQUFBLFlBQUEsQ0FBQSxZQUFBLEVBQUEsQ0FBQTtFQUFBLElBQUEsR0FBQSxFQUFBLE9BQUE7RUFBQSxJQUFBLEtBQUEsRUFFRCxTQUFNdkMsS0FBQUEsQ0FBQUEsS0FBSyxFQUFFL0YsSUFBSSxFQUFFO0VBQ2pCLE1BQUEsSUFBTTRILFNBQVMsR0FBRzdCLEtBQUssQ0FBQzhCLEtBQUssRUFBRSxDQUFBO0VBQy9CRCxNQUFBQSxTQUFTLENBQUMzSSxDQUFDLEdBQUcsSUFBSSxDQUFDQSxDQUFDLENBQUE7RUFDcEIsTUFBQSxJQUFJLElBQUksQ0FBQ29KLE1BQU0sR0FBR1QsU0FBUyxDQUFDNUksQ0FBQyxFQUFFO0VBQzdCNEksUUFBQUEsU0FBUyxDQUFDNUksQ0FBQyxHQUFHLElBQUksQ0FBQ3FKLE1BQU0sQ0FBQTtFQUMzQixPQUFBO1FBQ0EsSUFBSSxJQUFJLENBQUNDLElBQUksR0FBR1YsU0FBUyxDQUFDNUksQ0FBQyxHQUFHZ0IsSUFBSSxDQUFDaEIsQ0FBQyxFQUFFO1VBQ3BDNEksU0FBUyxDQUFDNUksQ0FBQyxHQUFHLElBQUksQ0FBQ3NKLElBQUksR0FBR3RJLElBQUksQ0FBQ2hCLENBQUMsQ0FBQTtFQUNsQyxPQUFBO0VBQ0EsTUFBQSxPQUFPNEksU0FBUyxDQUFBO0VBQ2xCLEtBQUE7RUFBQyxHQUFBLENBQUEsQ0FBQSxDQUFBO0VBQUEsRUFBQSxPQUFBLFlBQUEsQ0FBQTtFQUFBLENBQUEsQ0FsQitCTixLQUFLLEVBQUE7QUFxQnZDLE1BQWFpQixXQUFXLGdCQUFBLFVBQUEsT0FBQSxFQUFBO0VBQUEsRUFBQSxTQUFBLENBQUEsV0FBQSxFQUFBLE9BQUEsQ0FBQSxDQUFBO0VBQUEsRUFBQSxJQUFBLE9BQUEsR0FBQSxZQUFBLENBQUEsV0FBQSxDQUFBLENBQUE7SUFDdEIsU0FBWUMsV0FBQUEsQ0FBQUEsVUFBVSxFQUFFQyxRQUFRLEVBQUU7RUFBQSxJQUFBLElBQUEsTUFBQSxDQUFBO0VBQUEsSUFBQSxlQUFBLENBQUEsSUFBQSxFQUFBLFdBQUEsQ0FBQSxDQUFBO0VBQ2hDLElBQUEsTUFBQSxHQUFBLE9BQUEsQ0FBQSxJQUFBLENBQUEsSUFBQSxDQUFBLENBQUE7TUFDQSxNQUFLRCxDQUFBQSxVQUFVLEdBQUdBLFVBQVUsQ0FBQTtNQUM1QixNQUFLQyxDQUFBQSxRQUFRLEdBQUdBLFFBQVEsQ0FBQTtNQUN4QixJQUFNcEMsS0FBSyxHQUFHakcsSUFBSSxDQUFDeUcsS0FBSyxDQUFDNEIsUUFBUSxDQUFDeEosQ0FBQyxHQUFHdUosVUFBVSxDQUFDdkosQ0FBQyxFQUFFd0osUUFBUSxDQUFDekosQ0FBQyxHQUFHd0osVUFBVSxDQUFDeEosQ0FBQyxDQUFDLENBQUE7TUFDOUUsSUFBTXNILElBQUksR0FBR0QsS0FBSyxHQUFHakcsSUFBSSxDQUFDcUcsRUFBRSxHQUFHLENBQUMsQ0FBQTtNQUNoQyxNQUFLaUMsQ0FBQUEsS0FBSyxHQUFHLEVBQUUsQ0FBQTtFQUNmLElBQUEsTUFBQSxDQUFLQyxPQUFPLEdBQUd2SSxJQUFJLENBQUNnSCxHQUFHLENBQUNkLElBQUksQ0FBQyxDQUFBO0VBQzdCLElBQUEsTUFBQSxDQUFLc0MsT0FBTyxHQUFHeEksSUFBSSxDQUFDaUgsR0FBRyxDQUFDZixJQUFJLENBQUMsQ0FBQTtFQUFBLElBQUEsT0FBQSxNQUFBLENBQUE7RUFDL0IsR0FBQTtFQUFDLEVBQUEsWUFBQSxDQUFBLFdBQUEsRUFBQSxDQUFBO0VBQUEsSUFBQSxHQUFBLEVBQUEsT0FBQTtFQUFBLElBQUEsS0FBQSxFQUVELFNBQU1QLEtBQUFBLENBQUFBLEtBQUssRUFBRS9GLElBQUksRUFBRTtFQUNqQixNQUFBLElBQU02SSxNQUFNLEdBQUcsSUFBSTlKLEtBQUssQ0FDdEJnSCxLQUFLLENBQUMvRyxDQUFDLEdBQUcsSUFBSSxDQUFDMEosS0FBSyxHQUFHLElBQUksQ0FBQ0MsT0FBTyxFQUNuQzVDLEtBQUssQ0FBQzlHLENBQUMsR0FBRyxJQUFJLENBQUN5SixLQUFLLEdBQUcsSUFBSSxDQUFDRSxPQUFPLENBQ3BDLENBQUE7RUFFRCxNQUFBLElBQU1FLFdBQVcsR0FBR3RELHNCQUFzQixDQUFDLElBQUksQ0FBQ2lELFFBQVEsRUFBRSxJQUFJLENBQUNELFVBQVUsRUFBRXhJLElBQUksQ0FBQ2hCLENBQUMsQ0FBQyxDQUFBO0VBQ2xGLE1BQUEsSUFBTStKLGFBQWEsR0FBR3pFLGNBQWMsQ0FBQyxJQUFJLENBQUNrRSxVQUFVLEVBQUUsSUFBSSxDQUFDQyxRQUFRLEVBQUUxQyxLQUFLLEVBQUU4QyxNQUFNLENBQUMsQ0FBQTtRQUVuRixPQUFPOUQsV0FBVyxDQUFDLElBQUksQ0FBQ3lELFVBQVUsRUFBRU0sV0FBVyxFQUFFQyxhQUFhLENBQUMsQ0FBQTtFQUNqRSxLQUFBO0VBQUMsR0FBQSxDQUFBLENBQUEsQ0FBQTtFQUFBLEVBQUEsT0FBQSxXQUFBLENBQUE7RUFBQSxDQUFBLENBdEI4QnpCLEtBQUssRUFBQTtBQXlCdEMsTUFBYTBCLGFBQWEsZ0JBQUEsVUFBQSxPQUFBLEVBQUE7RUFBQSxFQUFBLFNBQUEsQ0FBQSxhQUFBLEVBQUEsT0FBQSxDQUFBLENBQUE7RUFBQSxFQUFBLElBQUEsT0FBQSxHQUFBLFlBQUEsQ0FBQSxhQUFBLENBQUEsQ0FBQTtJQUN4QixTQUFZN0IsYUFBQUEsQ0FBQUEsTUFBTSxFQUFFbEQsTUFBTSxFQUFFO0VBQUEsSUFBQSxJQUFBLE1BQUEsQ0FBQTtFQUFBLElBQUEsZUFBQSxDQUFBLElBQUEsRUFBQSxhQUFBLENBQUEsQ0FBQTtFQUMxQixJQUFBLE1BQUEsR0FBQSxPQUFBLENBQUEsSUFBQSxDQUFBLElBQUEsQ0FBQSxDQUFBO01BQ0EsTUFBS2tELENBQUFBLE1BQU0sR0FBR0EsTUFBTSxDQUFBO01BQ3BCLE1BQUtsRCxDQUFBQSxNQUFNLEdBQUdBLE1BQU0sQ0FBQTtFQUFBLElBQUEsT0FBQSxNQUFBLENBQUE7RUFDdEIsR0FBQTtFQUFDLEVBQUEsWUFBQSxDQUFBLGFBQUEsRUFBQSxDQUFBO0VBQUEsSUFBQSxHQUFBLEVBQUEsT0FBQTtFQUFBLElBQUEsS0FBQSxFQUVELFNBQU04QixLQUFBQSxDQUFBQSxLQUFLLEVBQUV3QixLQUFLLEVBQUU7UUFDbEIsT0FBTy9CLHNCQUFzQixDQUFDLElBQUksQ0FBQzJCLE1BQU0sRUFBRXBCLEtBQUssRUFBRSxJQUFJLENBQUM5QixNQUFNLENBQUMsQ0FBQTtFQUNoRSxLQUFBO0VBQUMsR0FBQSxDQUFBLENBQUEsQ0FBQTtFQUFBLEVBQUEsT0FBQSxhQUFBLENBQUE7RUFBQSxDQUFBLENBVGdDcUQsS0FBSyxFQUFBO0FBWXhDLE1BQWEyQixVQUFVLGdCQUFBLFVBQUEsY0FBQSxFQUFBO0VBQUEsRUFBQSxTQUFBLENBQUEsVUFBQSxFQUFBLGNBQUEsQ0FBQSxDQUFBO0VBQUEsRUFBQSxJQUFBLE9BQUEsR0FBQSxZQUFBLENBQUEsVUFBQSxDQUFBLENBQUE7RUFDckIsRUFBQSxTQUFBLFVBQUEsQ0FBWTlCLE1BQU0sRUFBRWxELE1BQU0sRUFBRWlGLFVBQVUsRUFBRUMsUUFBUSxFQUFFO0VBQUEsSUFBQSxJQUFBLE1BQUEsQ0FBQTtFQUFBLElBQUEsZUFBQSxDQUFBLElBQUEsRUFBQSxVQUFBLENBQUEsQ0FBQTtNQUNoRCxNQUFNaEMsR0FBQUEsT0FBQUEsQ0FBQUEsSUFBQUEsQ0FBQUEsSUFBQUEsRUFBQUEsTUFBTSxFQUFFbEQsTUFBTSxDQUFBLENBQUE7TUFDcEIsTUFBS21GLENBQUFBLFdBQVcsR0FBR0YsVUFBVSxDQUFBO01BQzdCLE1BQUtHLENBQUFBLFNBQVMsR0FBR0YsUUFBUSxDQUFBO0VBQUEsSUFBQSxPQUFBLE1BQUEsQ0FBQTtFQUMzQixHQUFBO0VBQUMsRUFBQSxZQUFBLENBQUEsVUFBQSxFQUFBLENBQUE7RUFBQSxJQUFBLEdBQUEsRUFBQSxZQUFBO0VBQUEsSUFBQSxLQUFBLEVBRUQsU0FBYSxVQUFBLEdBQUE7RUFDWCxNQUFBLE9BQU8sT0FBTyxJQUFJLENBQUNDLFdBQVcsS0FBSyxVQUFVLEdBQUcsSUFBSSxDQUFDQSxXQUFXLEVBQUUsR0FBRyxJQUFJLENBQUNBLFdBQVcsQ0FBQTtFQUN2RixLQUFBO0VBQUMsR0FBQSxFQUFBO0VBQUEsSUFBQSxHQUFBLEVBQUEsVUFBQTtFQUFBLElBQUEsS0FBQSxFQUVELFNBQVcsUUFBQSxHQUFBO0VBQ1QsTUFBQSxPQUFPLE9BQU8sSUFBSSxDQUFDQyxTQUFTLEtBQUssVUFBVSxHQUFHLElBQUksQ0FBQ0EsU0FBUyxFQUFFLEdBQUcsSUFBSSxDQUFDQSxTQUFTLENBQUE7RUFDakYsS0FBQTtFQUFDLEdBQUEsRUFBQTtFQUFBLElBQUEsR0FBQSxFQUFBLE9BQUE7RUFBQSxJQUFBLEtBQUEsRUFFRCxTQUFNdEQsS0FBQUEsQ0FBQUEsS0FBSyxFQUFFd0IsS0FBSyxFQUFFO1FBQ2xCLElBQUlMLEtBQUssR0FBR1IsUUFBUSxDQUFDLElBQUksQ0FBQ1MsTUFBTSxFQUFFcEIsS0FBSyxDQUFDLENBQUE7RUFDeENtQixNQUFBQSxLQUFLLEdBQUdOLGNBQWMsQ0FBQ00sS0FBSyxDQUFDLENBQUE7RUFDN0JBLE1BQUFBLEtBQUssR0FBR0osVUFBVSxDQUFDLElBQUksQ0FBQ29DLFVBQVUsRUFBRSxFQUFFLElBQUksQ0FBQ0MsUUFBUSxFQUFFLEVBQUVqQyxLQUFLLENBQUMsQ0FBQTtRQUM3RCxPQUFPRCx3QkFBd0IsQ0FBQ0MsS0FBSyxFQUFFLElBQUksQ0FBQ2pELE1BQU0sRUFBRSxJQUFJLENBQUNrRCxNQUFNLENBQUMsQ0FBQTtFQUNsRSxLQUFBO0VBQUMsR0FBQSxDQUFBLENBQUEsQ0FBQTtFQUFBLEVBQUEsT0FBQSxVQUFBLENBQUE7RUFBQSxDQUFBLENBcEI2QjZCLGFBQWE7O0VDdEo5QixtQkFBU00sRUFBQUEsS0FBSyxFQUFFdEYsR0FBRyxFQUFFO0VBQ2xDLEVBQUEsS0FBSyxJQUFJRyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdtRixLQUFLLENBQUNqRixNQUFNLEVBQUVGLENBQUMsRUFBRSxFQUFFO0VBQ3JDLElBQUEsSUFBSW1GLEtBQUssQ0FBQ25GLENBQUMsQ0FBQyxLQUFLSCxHQUFHLEVBQUU7RUFDcEJzRixNQUFBQSxLQUFLLENBQUNwRyxNQUFNLENBQUNpQixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7RUFDbEJBLE1BQUFBLENBQUMsRUFBRSxDQUFBO0VBQ0wsS0FBQTtFQUNGLEdBQUE7RUFDQSxFQUFBLE9BQU9tRixLQUFLLENBQUE7RUFDZDs7RUNSZSxTQUFTQyxLQUFLLENBQUNDLEtBQUssRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUU7SUFDL0MsSUFBTXpELE1BQU0sR0FBRyxFQUFFLENBQUE7RUFDakIsRUFBQSxJQUFJLE9BQU93RCxJQUFJLEtBQUssV0FBVyxFQUFFO0VBQy9CQSxJQUFBQSxJQUFJLEdBQUdELEtBQUssQ0FBQTtFQUNaQSxJQUFBQSxLQUFLLEdBQUcsQ0FBQyxDQUFBO0VBQ1gsR0FBQTtFQUNBLEVBQUEsSUFBSSxPQUFPRSxJQUFJLEtBQUssV0FBVyxFQUFFO0VBQy9CQSxJQUFBQSxJQUFJLEdBQUcsQ0FBQyxDQUFBO0VBQ1YsR0FBQTtFQUNBLEVBQUEsSUFBS0EsSUFBSSxHQUFHLENBQUMsSUFBSUYsS0FBSyxJQUFJQyxJQUFJLElBQU1DLElBQUksR0FBRyxDQUFDLElBQUlGLEtBQUssSUFBSUMsSUFBSyxFQUFFO0VBQzlELElBQUEsT0FBTyxFQUFFLENBQUE7RUFDWCxHQUFBO0lBQ0EsS0FBSyxJQUFJdEYsQ0FBQyxHQUFHcUYsS0FBSyxFQUFFRSxJQUFJLEdBQUcsQ0FBQyxHQUFHdkYsQ0FBQyxHQUFHc0YsSUFBSSxHQUFHdEYsQ0FBQyxHQUFHc0YsSUFBSSxFQUFFdEYsQ0FBQyxJQUFJdUYsSUFBSSxFQUFFO0VBQzdEekQsSUFBQUEsTUFBTSxDQUFDbkQsSUFBSSxDQUFDcUIsQ0FBQyxDQUFDLENBQUE7RUFDaEIsR0FBQTtFQUNBLEVBQUEsT0FBTzhCLE1BQU0sQ0FBQTtFQUNmOztFQ1Y2QixJQUV2QjBELGFBQWEsZ0JBQUEsWUFBQTtFQUNqQixFQUFBLFNBQUEsYUFBQSxDQUFZbkosU0FBUyxFQUFjO01BQUEsSUFBWnlCLE9BQU8sR0FBQyxTQUFBLENBQUEsTUFBQSxHQUFBLENBQUEsSUFBQSxTQUFBLENBQUEsQ0FBQSxDQUFBLEtBQUEsU0FBQSxHQUFBLFNBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQSxFQUFFLENBQUE7RUFBQSxJQUFBLGVBQUEsQ0FBQSxJQUFBLEVBQUEsYUFBQSxDQUFBLENBQUE7TUFDL0IsSUFBSSxDQUFDekIsU0FBUyxHQUFHQSxTQUFTLENBQUE7TUFDMUIsSUFBSSxDQUFDeUIsT0FBTyxHQUFHQSxPQUFPLENBQUE7RUFDeEIsR0FBQTtFQUFDLEVBQUEsWUFBQSxDQUFBLGFBQUEsRUFBQSxDQUFBO0VBQUEsSUFBQSxHQUFBLEVBQUEsV0FBQTtFQUFBLElBQUEsR0FBQSxFQUVELFNBQWlCLEdBQUEsR0FBQTtFQUNmLE1BQUEsT0FBTyxPQUFPLElBQUksQ0FBQ3pCLFNBQVMsS0FBSyxVQUFVLEdBQUcsSUFBSSxDQUFDQSxTQUFTLEVBQUUsR0FBRyxJQUFJLENBQUNBLFNBQVMsQ0FBQTtFQUNqRixLQUFBO0VBQUMsR0FBQSxDQUFBLENBQUEsQ0FBQTtFQUFBLEVBQUEsT0FBQSxhQUFBLENBQUE7RUFBQSxDQUFBLEVBQUEsQ0FBQTtBQUFBLE1BR0dvSixtQkFBbUIsZ0JBQUEsVUFBQSxjQUFBLEVBQUE7RUFBQSxFQUFBLFNBQUEsQ0FBQSxtQkFBQSxFQUFBLGNBQUEsQ0FBQSxDQUFBO0VBQUEsRUFBQSxJQUFBLE1BQUEsR0FBQSxZQUFBLENBQUEsbUJBQUEsQ0FBQSxDQUFBO0VBQUEsRUFBQSxTQUFBLG1CQUFBLEdBQUE7RUFBQSxJQUFBLGVBQUEsQ0FBQSxJQUFBLEVBQUEsbUJBQUEsQ0FBQSxDQUFBO0VBQUEsSUFBQSxPQUFBLE1BQUEsQ0FBQSxLQUFBLENBQUEsSUFBQSxFQUFBLFNBQUEsQ0FBQSxDQUFBO0VBQUEsR0FBQTtFQUFBLEVBQUEsWUFBQSxDQUFBLG1CQUFBLEVBQUEsQ0FBQTtFQUFBLElBQUEsR0FBQSxFQUFBLGFBQUE7RUFBQSxJQUFBLEtBQUEsRUFDdkIsU0FBYUMsV0FBQUEsQ0FBQUEsYUFBYSxFQUFFQyxhQUFhLEVBQUU7RUFBQSxNQUFBLElBQUEsS0FBQSxHQUFBLElBQUEsQ0FBQTtFQUN6QyxNQUFBLElBQU1DLHNCQUFzQixHQUFHRixhQUFhLENBQUNHLE1BQU0sQ0FBQyxVQUFDQyxPQUFPLEVBQUVDLEtBQUssRUFBRWxILEtBQUssRUFBSztVQUM3RSxJQUFJOEcsYUFBYSxDQUFDN0csT0FBTyxDQUFDRCxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtFQUN2Q2lILFVBQUFBLE9BQU8sQ0FBQ25ILElBQUksQ0FBQ0UsS0FBSyxDQUFDLENBQUE7RUFDckIsU0FBQTtFQUNBLFFBQUEsT0FBT2lILE9BQU8sQ0FBQTtTQUNmLEVBQUUsRUFBRSxDQUFDLENBQUE7RUFFTkgsTUFBQUEsYUFBYSxDQUFDSyxPQUFPLENBQUMsVUFBQ25ILEtBQUssRUFBSztFQUMvQixRQUFBLElBQUk3QyxJQUFJLEdBQUcwSixhQUFhLENBQUM3RyxLQUFLLENBQUMsQ0FBQTtVQUMvQixJQUFJb0gsU0FBUyxHQUFHLEtBQUssQ0FBQTtFQUVyQkwsUUFBQUEsc0JBQXNCLENBQUNJLE9BQU8sQ0FBQyxVQUFDRSxhQUFhLEVBQUs7RUFDaEQsVUFBQSxJQUFNQyxVQUFVLEdBQUdULGFBQWEsQ0FBQ1EsYUFBYSxDQUFDLENBQUE7RUFDL0NsSyxVQUFBQSxJQUFJLEdBQUdtSyxVQUFVLENBQUNDLFdBQVcsQ0FBQ3BLLElBQUksQ0FBQyxDQUFBO0VBQ3JDLFNBQUMsQ0FBQyxDQUFBO0VBRUZpSyxRQUFBQSxTQUFTLEdBQUdMLHNCQUFzQixDQUFDUyxJQUFJLENBQUMsVUFBQ0gsYUFBYSxFQUFLO0VBQ3pELFVBQUEsSUFBTUMsVUFBVSxHQUFHVCxhQUFhLENBQUNRLGFBQWEsQ0FBQyxDQUFBO0VBQy9DLFVBQUEsT0FBUSxDQUFDLENBQUNDLFVBQVUsQ0FBQ3hKLEdBQUcsQ0FBQ1gsSUFBSSxDQUFDLENBQUE7RUFDaEMsU0FBQyxDQUFDLElBQUlBLElBQUksQ0FBQ1csR0FBRyxDQUFDLEtBQUksQ0FBQzJKLFNBQVMsQ0FBQyxDQUFDQyxTQUFTLEVBQUUsS0FBS3ZLLElBQUksQ0FBQ3VLLFNBQVMsRUFBRSxDQUFBO0VBRS9ELFFBQUEsSUFBSU4sU0FBUyxFQUFFO1lBQ2JqSyxJQUFJLENBQUNpSyxTQUFTLEdBQUcsSUFBSSxDQUFBO0VBQ3ZCLFNBQUMsTUFBTTtFQUNMTCxVQUFBQSxzQkFBc0IsQ0FBQ2pILElBQUksQ0FBQ0UsS0FBSyxDQUFDLENBQUE7RUFDcEMsU0FBQTtFQUNGLE9BQUMsQ0FBQyxDQUFBO0VBQ0YsTUFBQSxPQUFPNkcsYUFBYSxDQUFBO0VBQ3RCLEtBQUE7RUFBQyxHQUFBLEVBQUE7RUFBQSxJQUFBLEdBQUEsRUFBQSxTQUFBO0VBQUEsSUFBQSxLQUFBLEVBRUQsaUJBQVFjLGlCQUFpQixFQUFFQyxhQUFhLEVBQUVDLFdBQVcsRUFBRTtFQUNyRCxNQUFBLElBQU1DLFVBQVUsR0FBR0gsaUJBQWlCLENBQUNJLE1BQU0sQ0FBQ0gsYUFBYSxDQUFDLENBQUE7RUFDMURBLE1BQUFBLGFBQWEsQ0FBQ1QsT0FBTyxDQUFDLFVBQUNhLFNBQVMsRUFBSztVQUNuQ0gsV0FBVyxDQUFDL0gsSUFBSSxDQUFDZ0ksVUFBVSxDQUFDN0gsT0FBTyxDQUFDK0gsU0FBUyxDQUFDLENBQUMsQ0FBQTtFQUNqRCxPQUFDLENBQUMsQ0FBQTtFQUNGLE1BQUEsT0FBT0YsVUFBVSxDQUFBO0VBQ25CLEtBQUE7RUFBQyxHQUFBLENBQUEsQ0FBQSxDQUFBO0VBQUEsRUFBQSxPQUFBLG1CQUFBLENBQUE7RUFBQSxDQUFBLENBdEMrQm5CLGFBQWEsRUFBQTtBQUFBLE1BeUN6Q3NCLGlCQUFpQixnQkFBQSxVQUFBLGVBQUEsRUFBQTtFQUFBLEVBQUEsU0FBQSxDQUFBLGlCQUFBLEVBQUEsZUFBQSxDQUFBLENBQUE7RUFBQSxFQUFBLElBQUEsT0FBQSxHQUFBLFlBQUEsQ0FBQSxpQkFBQSxDQUFBLENBQUE7RUFDckIsRUFBQSxTQUFBLGlCQUFBLENBQVl6SyxTQUFTLEVBQWM7RUFBQSxJQUFBLElBQUEsTUFBQSxDQUFBO01BQUEsSUFBWnlCLE9BQU8sR0FBQyxTQUFBLENBQUEsTUFBQSxHQUFBLENBQUEsSUFBQSxTQUFBLENBQUEsQ0FBQSxDQUFBLEtBQUEsU0FBQSxHQUFBLFNBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQSxFQUFFLENBQUE7RUFBQSxJQUFBLGVBQUEsQ0FBQSxJQUFBLEVBQUEsaUJBQUEsQ0FBQSxDQUFBO01BQy9CLE1BQU16QixHQUFBQSxPQUFBQSxDQUFBQSxJQUFBQSxDQUFBQSxJQUFBQSxFQUFBQSxTQUFTLEVBQUV5QixPQUFPLENBQUEsQ0FBQTtFQUN4QixJQUFBLE1BQUEsQ0FBS0EsT0FBTyxHQUFHRyxNQUFNLENBQUM4SSxNQUFNLENBQUM7RUFDM0JkLE1BQUFBLFNBQVMsRUFBRSxJQUFBO09BQ1osRUFBRW5JLE9BQU8sQ0FBQyxDQUFBO0VBRVgsSUFBQSxNQUFBLENBQUtnQyxNQUFNLEdBQUdoQyxPQUFPLENBQUNnQyxNQUFNLElBQUksRUFBRSxDQUFBO0VBRWxDLElBQUEsTUFBQSxDQUFLa0gsY0FBYyxHQUFHbEosT0FBTyxDQUFDa0osY0FBYyxJQUFJLElBQUlwTSxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO0VBQy9ELElBQUEsTUFBQSxDQUFLcU0sa0JBQWtCLEdBQUduSixPQUFPLENBQUNtSixrQkFBa0IsSUFBSSxJQUFJck0sS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtFQUN2RSxJQUFBLE1BQUEsQ0FBS3NNLHFCQUFxQixHQUFHcEosT0FBTyxDQUFDb0oscUJBQXFCLElBQUksQ0FBQyxDQUFBO0VBRS9ELElBQUEsTUFBQSxDQUFLbEksV0FBVyxHQUFHbEIsT0FBTyxDQUFDa0IsV0FBVyxJQUFJQSxXQUFXLENBQUE7RUFDckQsSUFBQSxNQUFBLENBQUttSSxXQUFXLEdBQUdySixPQUFPLENBQUNxSixXQUFXLElBQUssVUFBQ04sU0FBUyxFQUFBO1FBQUEsT0FBS0EsU0FBUyxDQUFDakwsUUFBUSxDQUFBO09BQUMsQ0FBQTtFQUFBLElBQUEsT0FBQSxNQUFBLENBQUE7RUFDL0UsR0FBQTtFQUFDLEVBQUEsWUFBQSxDQUFBLGlCQUFBLEVBQUEsQ0FBQTtFQUFBLElBQUEsR0FBQSxFQUFBLGFBQUE7RUFBQSxJQUFBLEtBQUEsRUFFRCxTQUFZOEosV0FBQUEsQ0FBQUEsYUFBYSxFQUFFMEIsY0FBYyxFQUFFO0VBQUEsTUFBQSxJQUFBLE1BQUEsR0FBQSxJQUFBLENBQUE7RUFDekMsTUFBQSxJQUFNZCxTQUFTLEdBQUcsSUFBSSxDQUFDQSxTQUFTLENBQUE7RUFDaEMsTUFBQSxJQUFNM0MsTUFBTSxHQUFHMkMsU0FBUyxDQUFDZSxLQUFLLEVBQUUsQ0FBQTtFQUNoQyxNQUFBLElBQUlDLGNBQWMsR0FBRyxDQUFDaEIsU0FBUyxDQUFDMUssUUFBUSxDQUFDLENBQUE7RUFFekM4SixNQUFBQSxhQUFhLENBQUNNLE9BQU8sQ0FBQyxVQUFDaEssSUFBSSxFQUFFdUwsU0FBUyxFQUFLO0VBQ3pDLFFBQUEsSUFBSTNMLFFBQVE7RUFBRTRMLFVBQUFBLE9BQU8sR0FBRyxLQUFLLENBQUE7RUFDN0IsUUFBQSxLQUFLLElBQUl4SCxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdzSCxjQUFjLENBQUNwSCxNQUFNLEVBQUVGLENBQUMsRUFBRSxFQUFFO1lBQzlDcEUsUUFBUSxHQUFHLElBQUloQixLQUFLLENBQ2xCME0sY0FBYyxDQUFDdEgsQ0FBQyxDQUFDLENBQUNuRixDQUFDLEdBQUcsTUFBSSxDQUFDbU0sY0FBYyxDQUFDbk0sQ0FBQyxFQUMzQ21GLENBQUMsR0FBRyxDQUFDLEdBQUlzSCxjQUFjLENBQUN0SCxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUNsRixDQUFDLEdBQUcsTUFBSSxDQUFDb00scUJBQXFCLEdBQUtaLFNBQVMsQ0FBQzFLLFFBQVEsQ0FBQ2QsQ0FBQyxHQUFHLE1BQUksQ0FBQ2tNLGNBQWMsQ0FBQ2xNLENBQUUsQ0FDaEgsQ0FBQTtFQUVEME0sVUFBQUEsT0FBTyxHQUFJNUwsUUFBUSxDQUFDZixDQUFDLEdBQUdtQixJQUFJLENBQUNILElBQUksQ0FBQ2hCLENBQUMsR0FBRzhJLE1BQU0sQ0FBQzlJLENBQUUsQ0FBQTtFQUUvQyxVQUFBLElBQUkyTSxPQUFPLEVBQUU7RUFDWCxZQUFBLE1BQUE7RUFDRixXQUFBO0VBQ0YsU0FBQTtVQUVBLElBQUksQ0FBQ0EsT0FBTyxFQUFFO0VBQ1o1TCxVQUFBQSxRQUFRLEdBQUcsSUFBSWhCLEtBQUssQ0FDbEIwTCxTQUFTLENBQUMxSyxRQUFRLENBQUNmLENBQUMsR0FBRyxNQUFJLENBQUNtTSxjQUFjLENBQUNuTSxDQUFDLEVBQzVDeU0sY0FBYyxDQUFDQSxjQUFjLENBQUNwSCxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUNwRixDQUFDLElBQUl5TSxTQUFTLEdBQUcsQ0FBQyxHQUFHLE1BQUksQ0FBQ0wscUJBQXFCLEdBQUcsTUFBSSxDQUFDRixjQUFjLENBQUNsTSxDQUFDLENBQUMsQ0FDbkgsQ0FBQTtFQUNILFNBQUE7VUFFQWtCLElBQUksQ0FBQ0osUUFBUSxHQUFHQSxRQUFRLENBQUE7RUFDeEIsUUFBQSxJQUFJLE1BQUksQ0FBQ2tDLE9BQU8sQ0FBQ21JLFNBQVMsSUFBSWpLLElBQUksQ0FBQ08sS0FBSyxFQUFFLENBQUN6QixDQUFDLEdBQUd3TCxTQUFTLENBQUMvSixLQUFLLEVBQUUsQ0FBQ3pCLENBQUMsRUFBRTtZQUNsRWtCLElBQUksQ0FBQ2lLLFNBQVMsR0FBRyxJQUFJLENBQUE7RUFDdkIsU0FBQTtFQUVBcUIsUUFBQUEsY0FBYyxHQUFHNUYscUJBQXFCLENBQUM0RixjQUFjLEVBQUV0TCxJQUFJLENBQUNPLEtBQUssRUFBRSxDQUFDVCxHQUFHLENBQUMsTUFBSSxDQUFDbUwsa0JBQWtCLENBQUMsQ0FBQyxDQUFBO0VBQ25HLE9BQUMsQ0FBQyxDQUFBO0VBQ0YsTUFBQSxPQUFPdkIsYUFBYSxDQUFBO0VBQ3RCLEtBQUE7RUFBQyxHQUFBLEVBQUE7RUFBQSxJQUFBLEdBQUEsRUFBQSxTQUFBO0VBQUEsSUFBQSxLQUFBLEVBRUQsaUJBQVFjLGlCQUFpQixFQUFFQyxhQUFhLEVBQUVDLFdBQVcsRUFBRTtFQUFBLE1BQUEsSUFBQSxNQUFBLEdBQUEsSUFBQSxDQUFBO0VBQ3JELE1BQUEsSUFBTWUsT0FBTyxHQUFHakIsaUJBQWlCLENBQUNJLE1BQU0sRUFBRSxDQUFBO0VBQzFDLE1BQUEsSUFBTWMsZUFBZSxHQUFHbEIsaUJBQWlCLENBQUNtQixHQUFHLENBQUMsVUFBQ2QsU0FBUyxFQUFBO1VBQUEsT0FBS0EsU0FBUyxDQUFDTSxXQUFXLEVBQUUsQ0FBQTtTQUFDLENBQUEsQ0FBQTtFQUNyRlYsTUFBQUEsYUFBYSxDQUFDVCxPQUFPLENBQUMsVUFBQzRCLFlBQVksRUFBSztVQUN0QyxJQUFJL0ksS0FBSyxHQUFHYyxtQkFBbUIsQ0FBQytILGVBQWUsRUFBRSxNQUFJLENBQUNQLFdBQVcsQ0FBQ1MsWUFBWSxDQUFDLEVBQUUsTUFBSSxDQUFDOUgsTUFBTSxFQUFFLE1BQUksQ0FBQ2QsV0FBVyxDQUFDLENBQUE7RUFDL0csUUFBQSxJQUFJSCxLQUFLLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDaEJBLEtBQUssR0FBRzRJLE9BQU8sQ0FBQ3ZILE1BQU0sQ0FBQTtFQUN4QixTQUFDLE1BQU07WUFDTHJCLEtBQUssR0FBRzRJLE9BQU8sQ0FBQzNJLE9BQU8sQ0FBQzBILGlCQUFpQixDQUFDM0gsS0FBSyxDQUFDLENBQUMsQ0FBQTtFQUNuRCxTQUFBO1VBQ0E0SSxPQUFPLENBQUMxSSxNQUFNLENBQUNGLEtBQUssRUFBRSxDQUFDLEVBQUUrSSxZQUFZLENBQUMsQ0FBQTtFQUN4QyxPQUFDLENBQUMsQ0FBQTtFQUNGbkIsTUFBQUEsYUFBYSxDQUFDVCxPQUFPLENBQUMsVUFBQzRCLFlBQVksRUFBSztVQUN0Q2xCLFdBQVcsQ0FBQy9ILElBQUksQ0FBQzhJLE9BQU8sQ0FBQzNJLE9BQU8sQ0FBQzhJLFlBQVksQ0FBQyxDQUFDLENBQUE7RUFDakQsT0FBQyxDQUFDLENBQUE7RUFDRixNQUFBLE9BQU9ILE9BQU8sQ0FBQTtFQUNoQixLQUFBO0VBQUMsR0FBQSxDQUFBLENBQUEsQ0FBQTtFQUFBLEVBQUEsT0FBQSxpQkFBQSxDQUFBO0VBQUEsQ0FBQSxDQXRFNkJqQyxhQUFhLEVBQUE7QUFBQSxNQXlFdkNxQyxrQkFBa0IsZ0JBQUEsVUFBQSxrQkFBQSxFQUFBO0VBQUEsRUFBQSxTQUFBLENBQUEsa0JBQUEsRUFBQSxrQkFBQSxDQUFBLENBQUE7RUFBQSxFQUFBLElBQUEsT0FBQSxHQUFBLFlBQUEsQ0FBQSxrQkFBQSxDQUFBLENBQUE7RUFDdEIsRUFBQSxTQUFBLGtCQUFBLENBQVl4TCxTQUFTLEVBQWM7RUFBQSxJQUFBLElBQUEsTUFBQSxDQUFBO01BQUEsSUFBWnlCLE9BQU8sR0FBQyxTQUFBLENBQUEsTUFBQSxHQUFBLENBQUEsSUFBQSxTQUFBLENBQUEsQ0FBQSxDQUFBLEtBQUEsU0FBQSxHQUFBLFNBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQSxFQUFFLENBQUE7RUFBQSxJQUFBLGVBQUEsQ0FBQSxJQUFBLEVBQUEsa0JBQUEsQ0FBQSxDQUFBO01BQy9CLE1BQU16QixHQUFBQSxPQUFBQSxDQUFBQSxJQUFBQSxDQUFBQSxJQUFBQSxFQUFBQSxTQUFTLEVBQUV5QixPQUFPLENBQUEsQ0FBQTtFQUV4QixJQUFBLE1BQUEsQ0FBS2dLLGVBQWUsR0FBR2hLLE9BQU8sQ0FBQ2dLLGVBQWUsSUFBSSxJQUFJbE4sS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtFQUNqRSxJQUFBLE1BQUEsQ0FBS21OLGlCQUFpQixHQUFHakssT0FBTyxDQUFDaUssaUJBQWlCLElBQUksSUFBSW5OLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7RUFDckUsSUFBQSxNQUFBLENBQUtzTSxxQkFBcUIsR0FBR3BKLE9BQU8sQ0FBQ29KLHFCQUFxQixJQUFJLENBQUMsQ0FBQTtFQUUvRCxJQUFBLE1BQUEsQ0FBS2Msb0JBQW9CLEdBQUcsSUFBSXBOLEtBQUssQ0FBQyxDQUFDLE1BQUEsQ0FBS21OLGlCQUFpQixDQUFDbE4sQ0FBQyxFQUFFLE1BQUEsQ0FBS2tOLGlCQUFpQixDQUFDak4sQ0FBQyxDQUFDLENBQUE7RUFBQSxJQUFBLE9BQUEsTUFBQSxDQUFBO0VBQzVGLEdBQUE7RUFBQyxFQUFBLFlBQUEsQ0FBQSxrQkFBQSxFQUFBLENBQUE7RUFBQSxJQUFBLEdBQUEsRUFBQSxhQUFBO0VBQUEsSUFBQSxLQUFBLEVBRUQsU0FBWTRLLFdBQUFBLENBQUFBLGFBQWEsRUFBRTBCLGNBQWMsRUFBRTtFQUFBLE1BQUEsSUFBQSxNQUFBLEdBQUEsSUFBQSxDQUFBO0VBQ3pDLE1BQUEsSUFBTWQsU0FBUyxHQUFHLElBQUksQ0FBQ0EsU0FBUyxDQUFBO0VBQ2hDLE1BQUEsSUFBSWdCLGNBQWMsR0FBRyxDQUFDaEIsU0FBUyxDQUFDZSxLQUFLLEVBQUUsQ0FBQyxDQUFBO0VBRXhDM0IsTUFBQUEsYUFBYSxDQUFDTSxPQUFPLENBQUMsVUFBQ2hLLElBQUksRUFBRXVMLFNBQVMsRUFBSztFQUN6QyxRQUFBLElBQUkzTCxRQUFRO0VBQUU0TCxVQUFBQSxPQUFPLEdBQUcsS0FBSyxDQUFBO0VBQzdCLFFBQUEsS0FBSyxJQUFJeEgsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHc0gsY0FBYyxDQUFDcEgsTUFBTSxFQUFFRixDQUFDLEVBQUUsRUFBRTtZQUM5Q3BFLFFBQVEsR0FBRyxJQUFJaEIsS0FBSyxDQUNsQjBNLGNBQWMsQ0FBQ3RILENBQUMsQ0FBQyxDQUFDbkYsQ0FBQyxHQUFHbUIsSUFBSSxDQUFDSCxJQUFJLENBQUNoQixDQUFDLEdBQUcsTUFBSSxDQUFDaU4sZUFBZSxDQUFDak4sQ0FBQyxFQUMxRG1GLENBQUMsR0FBRyxDQUFDLEdBQUlzSCxjQUFjLENBQUN0SCxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUNsRixDQUFDLEdBQUcsTUFBSSxDQUFDb00scUJBQXFCLEdBQUtaLFNBQVMsQ0FBQzFLLFFBQVEsQ0FBQ2QsQ0FBQyxHQUFHLE1BQUksQ0FBQ2dOLGVBQWUsQ0FBQ2hOLENBQUUsQ0FDakgsQ0FBQTtZQUVEME0sT0FBTyxHQUFJNUwsUUFBUSxDQUFDZixDQUFDLEdBQUdtQixJQUFJLENBQUNKLFFBQVEsQ0FBQ2YsQ0FBRSxDQUFBO0VBQ3hDLFVBQUEsSUFBSTJNLE9BQU8sRUFBRTtFQUNYLFlBQUEsTUFBQTtFQUNGLFdBQUE7RUFDRixTQUFBO1VBQ0EsSUFBSSxDQUFDQSxPQUFPLEVBQUU7WUFDWjVMLFFBQVEsR0FBRyxJQUFJaEIsS0FBSyxDQUNsQjBMLFNBQVMsQ0FBQ2UsS0FBSyxFQUFFLENBQUN4TSxDQUFDLEdBQUltQixJQUFJLENBQUNILElBQUksQ0FBQ2hCLENBQUMsR0FBRyxNQUFJLENBQUNpTixlQUFlLENBQUNqTixDQUFDLEVBQzNEeU0sY0FBYyxDQUFDQSxjQUFjLENBQUNwSCxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUNwRixDQUFDLElBQUl5TSxTQUFTLEdBQUcsQ0FBQyxHQUFHLE1BQUksQ0FBQ0wscUJBQXFCLEdBQUcsTUFBSSxDQUFDWSxlQUFlLENBQUNoTixDQUFDLENBQUMsQ0FDcEgsQ0FBQTtFQUNILFNBQUE7VUFDQWtCLElBQUksQ0FBQ0osUUFBUSxHQUFHQSxRQUFRLENBQUE7RUFDeEIsUUFBQSxJQUFJLE1BQUksQ0FBQ2tDLE9BQU8sQ0FBQ21JLFNBQVMsSUFBSWpLLElBQUksQ0FBQ2lNLEtBQUssRUFBRSxDQUFDbk4sQ0FBQyxHQUFHd0wsU0FBUyxDQUFDMkIsS0FBSyxFQUFFLENBQUNuTixDQUFDLEVBQUU7WUFDbEVrQixJQUFJLENBQUNpSyxTQUFTLEdBQUcsSUFBSSxDQUFBO0VBQ3ZCLFNBQUE7RUFDQXFCLFFBQUFBLGNBQWMsR0FBRzVGLHFCQUFxQixDQUFDNEYsY0FBYyxFQUFFdEwsSUFBSSxDQUFDaU0sS0FBSyxFQUFFLENBQUNuTSxHQUFHLENBQUMsTUFBSSxDQUFDa00sb0JBQW9CLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQTtFQUMzRyxPQUFDLENBQUMsQ0FBQTtFQUNGLE1BQUEsT0FBT3RDLGFBQWEsQ0FBQTtFQUN0QixLQUFBO0VBQUMsR0FBQSxDQUFBLENBQUEsQ0FBQTtFQUFBLEVBQUEsT0FBQSxrQkFBQSxDQUFBO0VBQUEsQ0FBQSxDQXpDOEJvQixpQkFBaUI7O0VDMUhsRCxJQUFNb0IsbUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFpQixDQUFZQyxNQUFNLEVBQUU7RUFDekNDLEVBQUFBLFlBQVksQ0FBQ0MsU0FBUyxDQUFDRixNQUFNLENBQUMsQ0FBQTtFQUNoQyxDQUFDLENBQUE7QUFBQSxNQUVvQkcsTUFBTSxnQkFBQSxVQUFBLGFBQUEsRUFBQTtFQUFBLEVBQUEsU0FBQSxDQUFBLE1BQUEsRUFBQSxhQUFBLENBQUEsQ0FBQTtFQUFBLEVBQUEsSUFBQSxNQUFBLEdBQUEsWUFBQSxDQUFBLE1BQUEsQ0FBQSxDQUFBO0lBQ3pCLFNBQVlyTixNQUFBQSxDQUFBQSxPQUFPLEVBQUUwTCxVQUFVLEVBQWdCO0VBQUEsSUFBQSxJQUFBLEtBQUEsQ0FBQTtNQUFBLElBQWQ3SSxPQUFPLEdBQUcsU0FBQSxDQUFBLE1BQUEsR0FBQSxDQUFBLElBQUEsU0FBQSxDQUFBLENBQUEsQ0FBQSxLQUFBLFNBQUEsR0FBQSxTQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBRSxDQUFBO0VBQUEsSUFBQSxlQUFBLENBQUEsSUFBQSxFQUFBLE1BQUEsQ0FBQSxDQUFBO0VBQzNDLElBQUEsS0FBQSxHQUFBLE1BQUEsQ0FBQSxJQUFBLENBQUEsSUFBQSxFQUFNQSxPQUFPLENBQUEsQ0FBQTtFQUNiLElBQUEsSUFBTXFLLE1BQU0sR0FBTyxzQkFBQSxDQUFBLEtBQUEsQ0FBQSxDQUFBO0VBRW5CLElBQUEsS0FBQSxDQUFLckssT0FBTyxHQUFHRyxNQUFNLENBQUM4SSxNQUFNLENBQUM7RUFDM0J3QixNQUFBQSxPQUFPLEVBQUUsR0FBRztFQUNaQyxNQUFBQSxXQUFXLEVBQUUsR0FBQTtPQUNkLEVBQUUxSyxPQUFPLENBQUMsQ0FBQTtFQUVYLElBQUEsS0FBQSxDQUFLMkssbUJBQW1CLEdBQUczSyxPQUFPLENBQUM0SyxRQUFRLElBQUksSUFBSTVCLGlCQUFpQixDQUNsRSxLQUFLNkIsQ0FBQUEsWUFBWSxDQUFDcEYsSUFBSSwrQkFBTSxFQUM1QjtFQUNFekQsTUFBQUEsTUFBTSxFQUFFLEVBQUU7UUFDVmQsV0FBVyxFQUFFUywrQkFBK0IsQ0FBQztFQUFFNUUsUUFBQUEsQ0FBQyxFQUFFLENBQUM7RUFBRUMsUUFBQUEsQ0FBQyxFQUFFLENBQUE7RUFBRSxPQUFDLENBQUM7RUFDNURtTCxNQUFBQSxTQUFTLEVBQUUsSUFBQTtFQUNiLEtBQUMsQ0FDRixDQUFBO01BRUQsS0FBS2hMLENBQUFBLE9BQU8sR0FBR0EsT0FBTyxDQUFBO0VBQ3RCMEwsSUFBQUEsVUFBVSxDQUFDWCxPQUFPLENBQUMsVUFBQ2EsU0FBUyxFQUFBO0VBQUEsTUFBQSxPQUFLQSxTQUFTLENBQUMrQixPQUFPLENBQUNqSyxJQUFJLENBQUN3SixNQUFNLENBQUMsQ0FBQTtPQUFDLENBQUEsQ0FBQTtNQUNqRSxLQUFLeEIsQ0FBQUEsVUFBVSxHQUFHQSxVQUFVLENBQUE7RUFFNUIyQixJQUFBQSxNQUFNLENBQUNPLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDLGVBQWUsRUFBTyxzQkFBQSxDQUFBLEtBQUEsQ0FBQSxDQUFBLENBQUE7RUFFMUMsSUFBQSxLQUFBLENBQUtDLGFBQWEsRUFBRSxDQUFBO0VBQ3BCLElBQUEsS0FBQSxDQUFLQyxJQUFJLEVBQUUsQ0FBQTtFQUFBLElBQUEsT0FBQSxLQUFBLENBQUE7RUFDYixHQUFBO0VBQUMsRUFBQSxZQUFBLENBQUEsTUFBQSxFQUFBLENBQUE7RUFBQSxJQUFBLEdBQUEsRUFBQSxlQUFBO0VBQUEsSUFBQSxLQUFBLEVBRUQsU0FBZ0IsYUFBQSxHQUFBO0VBQ2QsTUFBQSxJQUFJLENBQUMxRixLQUFLLEdBQUcsSUFBSSxDQUFDeEYsT0FBTyxDQUFDd0YsS0FBSyxJQUFJTSxjQUFjLENBQUNxRixRQUFRLENBQUMsSUFBSSxDQUFDaE8sT0FBTyxDQUFDLENBQUE7RUFDMUUsS0FBQTtFQUFDLEdBQUEsRUFBQTtFQUFBLElBQUEsR0FBQSxFQUFBLGFBQUE7RUFBQSxJQUFBLEtBQUEsRUFFRCxTQUFhMEwsV0FBQUEsQ0FBQUEsVUFBVSxFQUFFdUMsWUFBWSxFQUFFO1FBQ3JDLE9BQU8sSUFBSSxDQUFDVCxtQkFBbUIsQ0FBQ1UsV0FBVyxDQUFDeEMsVUFBVSxFQUFFdUMsWUFBWSxDQUFDLENBQUE7RUFDdkUsS0FBQTtFQUFDLEdBQUEsRUFBQTtFQUFBLElBQUEsR0FBQSxFQUFBLFNBQUE7RUFBQSxJQUFBLEtBQUEsRUFFRCxpQkFBU0UsYUFBYSxFQUFFM0MsYUFBYSxFQUFFQyxXQUFXLEVBQUU7UUFDbEQsT0FBTyxJQUFJLENBQUMrQixtQkFBbUIsQ0FBQ1ksT0FBTyxDQUFDRCxhQUFhLEVBQUUzQyxhQUFhLEVBQUVDLFdBQVcsQ0FBQyxDQUFBO0VBQ3BGLEtBQUE7RUFBQyxHQUFBLEVBQUE7RUFBQSxJQUFBLEdBQUEsRUFBQSxNQUFBO0VBQUEsSUFBQSxLQUFBLEVBRUQsU0FBTyxJQUFBLEdBQUE7RUFBQSxNQUFBLElBQUEsTUFBQSxHQUFBLElBQUEsQ0FBQTtRQUNMLElBQUk0QyxVQUFVLEVBQUVKLFlBQVksQ0FBQTtRQUU1QixJQUFJLENBQUNLLGVBQWUsR0FBRyxJQUFJLENBQUM1QyxVQUFVLENBQUM1RSxNQUFNLENBQUMsVUFBQzhFLFNBQVMsRUFBSztFQUMzRCxRQUFBLElBQUk1TCxPQUFPLEdBQUc0TCxTQUFTLENBQUM1TCxPQUFPLENBQUNFLFVBQVUsQ0FBQTtFQUMxQyxRQUFBLE9BQU9GLE9BQU8sRUFBRTtFQUNkLFVBQUEsSUFBSUEsT0FBTyxLQUFLLE1BQUksQ0FBQ0EsT0FBTyxFQUFFO0VBQzVCLFlBQUEsT0FBTyxJQUFJLENBQUE7RUFDYixXQUFBO1lBQ0FBLE9BQU8sR0FBR0EsT0FBTyxDQUFDRSxVQUFVLENBQUE7RUFDOUIsU0FBQTtFQUNBLFFBQUEsT0FBTyxLQUFLLENBQUE7RUFDZCxPQUFDLENBQUMsQ0FBQTtFQUVGLE1BQUEsSUFBSSxJQUFJLENBQUNvTyxlQUFlLENBQUNySixNQUFNLEVBQUU7VUFDL0JnSixZQUFZLEdBQUc5RCxLQUFLLENBQUMsSUFBSSxDQUFDbUUsZUFBZSxDQUFDckosTUFBTSxDQUFDLENBQUE7RUFDakRvSixRQUFBQSxVQUFVLEdBQUcsSUFBSSxDQUFDSCxXQUFXLENBQUMsSUFBSSxDQUFDSSxlQUFlLENBQUM1QixHQUFHLENBQUMsVUFBQ2QsU0FBUyxFQUFLO1lBQ3BFLE9BQU9BLFNBQVMsQ0FBQzhCLFlBQVksRUFBRSxDQUFBO1dBQ2hDLENBQUMsRUFBRU8sWUFBWSxDQUFDLENBQUE7RUFDakIsUUFBQSxJQUFJLENBQUNNLFdBQVcsQ0FBQ0YsVUFBVSxFQUFFSixZQUFZLENBQUMsQ0FBQTtFQUMxQyxRQUFBLElBQUksQ0FBQ0ssZUFBZSxDQUFDdkQsT0FBTyxDQUFDLFVBQUNhLFNBQVMsRUFBQTtFQUFBLFVBQUEsT0FBSyxNQUFJLENBQUNpQyxJQUFJLENBQUMsWUFBWSxFQUFFakMsU0FBUyxDQUFDLENBQUE7V0FBQyxDQUFBLENBQUE7RUFDakYsT0FBQTtFQUNGLEtBQUE7RUFBQyxHQUFBLEVBQUE7RUFBQSxJQUFBLEdBQUEsRUFBQSxjQUFBO0VBQUEsSUFBQSxLQUFBLEVBRUQsU0FBZSxZQUFBLEdBQUE7RUFDYixNQUFBLE9BQU9sTCxTQUFTLENBQUNrSSxXQUFXLENBQUMsSUFBSSxDQUFDNUksT0FBTyxFQUFFLElBQUksQ0FBQ3dDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQTtFQUNsRSxLQUFBO0VBQUMsR0FBQSxFQUFBO0VBQUEsSUFBQSxHQUFBLEVBQUEsZ0JBQUE7TUFBQSxLQUVELEVBQUEsU0FBQSxjQUFBLENBQWVvSixTQUFTLEVBQUU7RUFDeEIsTUFBQSxJQUFJLElBQUksQ0FBQy9JLE9BQU8sQ0FBQzJMLGNBQWMsRUFBRTtVQUMvQixPQUFPLElBQUksQ0FBQzNMLE9BQU8sQ0FBQzJMLGNBQWMsQ0FBQyxJQUFJLEVBQUU1QyxTQUFTLENBQUMsQ0FBQTtFQUNyRCxPQUFDLE1BQU07RUFDTCxRQUFBLElBQU02QyxlQUFlLEdBQUcsSUFBSSxDQUFDZixZQUFZLEVBQUUsQ0FBQTtVQUMzQyxJQUFNZ0IsZUFBZSxHQUFHOUMsU0FBUyxDQUFDOEIsWUFBWSxFQUFFLENBQUNwQyxTQUFTLEVBQUUsQ0FBQTtFQUU1RCxRQUFBLE9BQU9vRCxlQUFlLEdBQUdELGVBQWUsQ0FBQ25ELFNBQVMsRUFBRSxJQUN6Q21ELGVBQWUsQ0FBQ3BOLFlBQVksQ0FBQ3VLLFNBQVMsQ0FBQ2hLLFNBQVMsRUFBRSxDQUFDLENBQUE7RUFDaEUsT0FBQTtFQUNGLEtBQUE7RUFBQyxHQUFBLEVBQUE7RUFBQSxJQUFBLEdBQUEsRUFBQSxhQUFBO0VBQUEsSUFBQSxLQUFBLEVBRUQsU0FBYyxXQUFBLEdBQUE7RUFDWixNQUFBLE9BQU8sSUFBSSxDQUFDOEwsWUFBWSxFQUFFLENBQUMvTSxRQUFRLENBQUE7RUFDckMsS0FBQTtFQUFDLEdBQUEsRUFBQTtFQUFBLElBQUEsR0FBQSxFQUFBLFNBQUE7RUFBQSxJQUFBLEtBQUEsRUFFRCxTQUFVLE9BQUEsR0FBQTtFQUNSLE1BQUEsT0FBTyxJQUFJLENBQUMrTSxZQUFZLEVBQUUsQ0FBQzlNLElBQUksQ0FBQTtFQUNqQyxLQUFBO0VBQUMsR0FBQSxFQUFBO0VBQUEsSUFBQSxHQUFBLEVBQUEsU0FBQTtFQUFBLElBQUEsS0FBQSxFQUVELFNBQVUsT0FBQSxHQUFBO0VBQUEsTUFBQSxJQUFBLE1BQUEsR0FBQSxJQUFBLENBQUE7RUFDUitOLE1BQUFBLE1BQU0sQ0FBQzVELE9BQU8sQ0FBQyxVQUFDNkQsS0FBSyxFQUFBO0VBQUEsUUFBQSxPQUFLQyxVQUFVLENBQUNELEtBQUssQ0FBQ2pCLE9BQU8sRUFBRSxNQUFJLENBQUMsQ0FBQTtTQUFDLENBQUEsQ0FBQTtFQUM1RCxLQUFBO0VBQUMsR0FBQSxFQUFBO0VBQUEsSUFBQSxHQUFBLEVBQUEsU0FBQTtFQUFBLElBQUEsS0FBQSxFQUVELFNBQVUsT0FBQSxHQUFBO0VBQ1IsTUFBQSxJQUFNVSxVQUFVLEdBQUcsSUFBSSxDQUFDSCxXQUFXLENBQUMsSUFBSSxDQUFDSSxlQUFlLENBQUM1QixHQUFHLENBQUMsVUFBQ2QsU0FBUyxFQUFLO1VBQzFFLE9BQU9BLFNBQVMsQ0FBQzhCLFlBQVksRUFBRSxDQUFBO1NBQ2hDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQTtRQUNQLElBQUksQ0FBQ2EsV0FBVyxDQUFDRixVQUFVLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFBO0VBQ3JDLEtBQUE7RUFBQyxHQUFBLEVBQUE7RUFBQSxJQUFBLEdBQUEsRUFBQSxPQUFBO01BQUEsS0FFRCxFQUFBLFNBQUEsS0FBQSxDQUFNekMsU0FBUyxFQUFFO1FBQ2YsSUFBTWtELGtCQUFrQixHQUFHLEVBQUUsQ0FBQTtFQUU3QixNQUFBLElBQUksSUFBSSxDQUFDcEIsWUFBWSxFQUFFLENBQUNyTSxZQUFZLENBQUN1SyxTQUFTLENBQUNoSyxTQUFTLEVBQUUsQ0FBQyxFQUFFO0VBQzNEZ0ssUUFBQUEsU0FBUyxDQUFDakwsUUFBUSxHQUFHLElBQUksQ0FBQzBILEtBQUssQ0FBQ3VELFNBQVMsQ0FBQ2pMLFFBQVEsRUFBRWlMLFNBQVMsQ0FBQ21ELE9BQU8sRUFBRSxDQUFDLENBQUE7RUFDMUUsT0FBQyxNQUFNO0VBQ0wsUUFBQSxPQUFPLEtBQUssQ0FBQTtFQUNkLE9BQUE7RUFFQSxNQUFBLElBQUksQ0FBQ2xCLElBQUksQ0FBQyxrQkFBa0IsRUFBRWpDLFNBQVMsQ0FBQyxDQUFBO0VBRXhDLE1BQUEsSUFBSSxDQUFDMEMsZUFBZSxHQUFHLElBQUksQ0FBQ0YsT0FBTyxDQUFDLElBQUksQ0FBQ0UsZUFBZSxFQUFFLENBQUMxQyxTQUFTLENBQUMsRUFBRWtELGtCQUFrQixDQUFDLENBQUE7RUFDMUYsTUFBQSxJQUFNVCxVQUFVLEdBQUcsSUFBSSxDQUFDSCxXQUFXLENBQUMsSUFBSSxDQUFDSSxlQUFlLENBQUM1QixHQUFHLENBQUMsVUFBQ2QsU0FBUyxFQUFLO1VBQzFFLE9BQU9BLFNBQVMsQ0FBQzhCLFlBQVksRUFBRSxDQUFBO1NBQ2hDLENBQUMsRUFBRW9CLGtCQUFrQixDQUFDLENBQUE7RUFFdkIsTUFBQSxJQUFJLENBQUNQLFdBQVcsQ0FBQ0YsVUFBVSxFQUFFUyxrQkFBa0IsQ0FBQyxDQUFBO1FBQ2hELElBQUksSUFBSSxDQUFDUixlQUFlLENBQUN6SyxPQUFPLENBQUMrSCxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtFQUNsRCxRQUFBLElBQUksQ0FBQ29ELGVBQWUsQ0FBQ3BELFNBQVMsQ0FBQyxDQUFBO0VBQ2pDLE9BQUE7RUFDQSxNQUFBLE9BQU8sSUFBSSxDQUFBO0VBQ2IsS0FBQTtFQUFDLEdBQUEsRUFBQTtFQUFBLElBQUEsR0FBQSxFQUFBLGFBQUE7RUFBQSxJQUFBLEtBQUEsRUFFRCxxQkFBWXlDLFVBQVUsRUFBRUosWUFBWSxFQUFFZ0IsSUFBSSxFQUFFO0VBQUEsTUFBQSxJQUFBLE1BQUEsR0FBQSxJQUFBLENBQUE7RUFDMUMsTUFBQSxJQUFJLENBQUNYLGVBQWUsQ0FBQ2hMLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQ3lILE9BQU8sQ0FBQyxVQUFDYSxTQUFTLEVBQUU3RyxDQUFDLEVBQUs7RUFDdEQsUUFBQSxJQUFNaEUsSUFBSSxHQUFHc04sVUFBVSxDQUFDdEosQ0FBQyxDQUFDO0VBQ3hCdUksVUFBQUEsT0FBTyxHQUFHMkIsSUFBSSxJQUFJQSxJQUFJLEtBQUssQ0FBQyxHQUFHQSxJQUFJLEdBQUdoQixZQUFZLENBQUNwSyxPQUFPLENBQUNrQixDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxNQUFJLENBQUNsQyxPQUFPLENBQUN5SyxPQUFPLEdBQUcsTUFBSSxDQUFDekssT0FBTyxDQUFDMEssV0FBVyxDQUFBO1VBRXhILElBQUl4TSxJQUFJLENBQUNpSyxTQUFTLEVBQUU7RUFDbEJZLFVBQUFBLFNBQVMsQ0FBQ3NELElBQUksQ0FBQ3RELFNBQVMsQ0FBQ3VELGVBQWUsRUFBRTdCLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUE7RUFDOUR1QixVQUFBQSxVQUFVLENBQUMsTUFBSSxDQUFDUCxlQUFlLEVBQUUxQyxTQUFTLENBQUMsQ0FBQTtFQUMzQyxVQUFBLE1BQUksQ0FBQ2lDLElBQUksQ0FBQyxlQUFlLEVBQUVqQyxTQUFTLENBQUMsQ0FBQTtFQUN2QyxTQUFDLE1BQU07RUFDTEEsVUFBQUEsU0FBUyxDQUFDc0QsSUFBSSxDQUFDbk8sSUFBSSxDQUFDSixRQUFRLEVBQUUyTSxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFBO0VBQ3BELFNBQUE7RUFDRixPQUFDLENBQUMsQ0FBQTtFQUNKLEtBQUE7RUFBQyxHQUFBLEVBQUE7RUFBQSxJQUFBLEdBQUEsRUFBQSxLQUFBO0VBQUEsSUFBQSxLQUFBLEVBRUQsU0FBSTFCLEdBQUFBLENBQUFBLFNBQVMsRUFBRXFELElBQUksRUFBRTtFQUNuQixNQUFBLElBQU1ILGtCQUFrQixHQUFHLElBQUksQ0FBQ1IsZUFBZSxDQUFDckosTUFBTSxDQUFBO0VBRXRELE1BQUEsSUFBSSxDQUFDNEksSUFBSSxDQUFDLGtCQUFrQixFQUFFakMsU0FBUyxDQUFDLENBQUE7RUFFeEMsTUFBQSxJQUFJLENBQUN3RCxrQkFBa0IsQ0FBQ3hELFNBQVMsQ0FBQyxDQUFBO0VBQ2xDLE1BQUEsSUFBTXlDLFVBQVUsR0FBRyxJQUFJLENBQUNILFdBQVcsQ0FBQyxJQUFJLENBQUNJLGVBQWUsQ0FBQzVCLEdBQUcsQ0FBQyxVQUFDZCxTQUFTLEVBQUs7VUFDMUUsT0FBT0EsU0FBUyxDQUFDOEIsWUFBWSxFQUFFLENBQUE7RUFDakMsT0FBQyxDQUFDLEVBQUVvQixrQkFBa0IsRUFBRWxELFNBQVMsQ0FBQyxDQUFBO0VBRWxDLE1BQUEsSUFBSSxDQUFDMkMsV0FBVyxDQUFDRixVQUFVLEVBQUUsQ0FBQ1Msa0JBQWtCLENBQUMsRUFBRUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFBO1FBQzdELElBQUksSUFBSSxDQUFDWCxlQUFlLENBQUN6SyxPQUFPLENBQUMrSCxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtFQUNsRCxRQUFBLElBQUksQ0FBQ29ELGVBQWUsQ0FBQ3BELFNBQVMsQ0FBQyxDQUFBO0VBQ2pDLE9BQUE7RUFDRixLQUFBO0VBQUMsR0FBQSxFQUFBO0VBQUEsSUFBQSxHQUFBLEVBQUEsb0JBQUE7TUFBQSxLQUVELEVBQUEsU0FBQSxrQkFBQSxDQUFtQkEsU0FBUyxFQUFFO1FBQzVCLElBQUksSUFBSSxDQUFDMEMsZUFBZSxDQUFDekssT0FBTyxDQUFDK0gsU0FBUyxDQUFDLEtBQUcsQ0FBQyxDQUFDLEVBQUU7RUFDaEQsUUFBQSxJQUFJLENBQUMwQyxlQUFlLENBQUM1SyxJQUFJLENBQUNrSSxTQUFTLENBQUMsQ0FBQTtFQUN0QyxPQUFBO0VBQ0YsS0FBQTtFQUFDLEdBQUEsRUFBQTtFQUFBLElBQUEsR0FBQSxFQUFBLGlCQUFBO01BQUEsS0FFRCxFQUFBLFNBQUEsZUFBQSxDQUFnQkEsU0FBUyxFQUFFO0VBQUEsTUFBQSxJQUFBLE1BQUEsR0FBQSxJQUFBLENBQUE7UUFDekJBLFNBQVMsQ0FBQzdJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDc00sYUFBYSxHQUFHLFlBQU07RUFDbkQsUUFBQSxNQUFJLENBQUNDLE1BQU0sQ0FBQzFELFNBQVMsQ0FBQyxDQUFBO0VBQ3hCLE9BQUMsQ0FBQyxDQUFBO0VBRUYsTUFBQSxJQUFJLENBQUNpQyxJQUFJLENBQUMsWUFBWSxFQUFFakMsU0FBUyxDQUFDLENBQUE7RUFDcEMsS0FBQTtFQUFDLEdBQUEsRUFBQTtFQUFBLElBQUEsR0FBQSxFQUFBLFFBQUE7TUFBQSxLQUVELEVBQUEsU0FBQSxNQUFBLENBQU9BLFNBQVMsRUFBRTtRQUNoQkEsU0FBUyxDQUFDMkQsV0FBVyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUNGLGFBQWEsQ0FBQyxDQUFBO1FBRXRELElBQU16TCxLQUFLLEdBQUcsSUFBSSxDQUFDMEssZUFBZSxDQUFDekssT0FBTyxDQUFDK0gsU0FBUyxDQUFDLENBQUE7RUFDckQsTUFBQSxJQUFJaEksS0FBSyxLQUFLLENBQUMsQ0FBQyxFQUFFO0VBQ2hCLFFBQUEsT0FBQTtFQUNGLE9BQUE7UUFFQSxJQUFJLENBQUMwSyxlQUFlLENBQUN4SyxNQUFNLENBQUNGLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQTtFQUVyQyxNQUFBLElBQU15SyxVQUFVLEdBQUcsSUFBSSxDQUFDSCxXQUFXLENBQUMsSUFBSSxDQUFDSSxlQUFlLENBQUM1QixHQUFHLENBQUMsVUFBQ2QsU0FBUyxFQUFLO1VBQzFFLE9BQU9BLFNBQVMsQ0FBQzhCLFlBQVksRUFBRSxDQUFBO1NBQ2hDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQTtFQUVQLE1BQUEsSUFBSSxDQUFDYSxXQUFXLENBQUNGLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQTtFQUNoQyxNQUFBLElBQUksQ0FBQ1IsSUFBSSxDQUFDLGVBQWUsRUFBRWpDLFNBQVMsQ0FBQyxDQUFBO0VBQ3ZDLEtBQUE7RUFBQyxHQUFBLEVBQUE7RUFBQSxJQUFBLEdBQUEsRUFBQSxPQUFBO0VBQUEsSUFBQSxLQUFBLEVBRUQsU0FBUSxLQUFBLEdBQUE7RUFBQSxNQUFBLElBQUEsTUFBQSxHQUFBLElBQUEsQ0FBQTtFQUNOLE1BQUEsSUFBSSxDQUFDMEMsZUFBZSxDQUFDdkQsT0FBTyxDQUFDLFVBQUNhLFNBQVMsRUFBSztFQUMxQ0EsUUFBQUEsU0FBUyxDQUFDc0QsSUFBSSxDQUFDdEQsU0FBUyxDQUFDdUQsZUFBZSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUE7RUFDeEQsUUFBQSxNQUFJLENBQUN0QixJQUFJLENBQUMsZUFBZSxFQUFFakMsU0FBUyxDQUFDLENBQUE7RUFDdkMsT0FBQyxDQUFDLENBQUE7UUFDRixJQUFJLENBQUMwQyxlQUFlLEdBQUcsRUFBRSxDQUFBO0VBQzNCLEtBQUE7RUFBQyxHQUFBLEVBQUE7RUFBQSxJQUFBLEdBQUEsRUFBQSxxQkFBQTtFQUFBLElBQUEsS0FBQSxFQUVELFNBQXNCLG1CQUFBLEdBQUE7RUFDcEIsTUFBQSxJQUFJLENBQUNBLGVBQWUsQ0FBQ2hMLEtBQUssRUFBRSxDQUFBO0VBQzlCLEtBQUE7RUFBQyxHQUFBLEVBQUE7RUFBQSxJQUFBLEdBQUEsRUFBQSxXQUFBO0VBQUEsSUFBQSxHQUFBLEVBRUQsU0FBZ0IsR0FBQSxHQUFBO1FBQ2QsT0FBUSxJQUFJLENBQUNrTSxVQUFVLEdBQUcsSUFBSSxDQUFDQSxVQUFVLElBQUksSUFBSSxDQUFDM00sT0FBTyxDQUFDTCxTQUFTLElBQUksSUFBSSxDQUFDSyxPQUFPLENBQUM1QyxNQUFNLElBQUlzQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUN2QyxPQUFPLENBQUMsQ0FBQTtFQUNqSSxLQUFBO0VBQUMsR0FBQSxDQUFBLENBQUEsQ0FBQTtFQUFBLEVBQUEsT0FBQSxNQUFBLENBQUE7RUFBQSxDQUFBLENBeE1pQzRDLFlBQVksRUFBQTtFQTJNaER5SyxNQUFNLENBQUNPLE9BQU8sR0FBRyxJQUFJaEwsWUFBWSxFQUFFLENBQUE7RUFDbkN5SyxNQUFNLENBQUNPLE9BQU8sQ0FBQzdLLEVBQUUsQ0FBQyxlQUFlLEVBQUVrSyxtQkFBaUIsQ0FBQzs7QUN0Ti9DMEIsTUFBQUEsTUFBTSxHQUFHLEdBQUU7QUFBQSxNQUVYYyxLQUFLLGdCQUFBLFVBQUEsYUFBQSxFQUFBO0VBQUEsRUFBQSxTQUFBLENBQUEsS0FBQSxFQUFBLGFBQUEsQ0FBQSxDQUFBO0VBQUEsRUFBQSxJQUFBLE1BQUEsR0FBQSxZQUFBLENBQUEsS0FBQSxDQUFBLENBQUE7SUFDVCxTQUFZL0QsS0FBQUEsQ0FBQUEsVUFBVSxFQUFFaUMsT0FBTyxFQUFjO0VBQUEsSUFBQSxJQUFBLEtBQUEsQ0FBQTtNQUFBLElBQVo5SyxPQUFPLEdBQUMsU0FBQSxDQUFBLE1BQUEsR0FBQSxDQUFBLElBQUEsU0FBQSxDQUFBLENBQUEsQ0FBQSxLQUFBLFNBQUEsR0FBQSxTQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBRSxDQUFBO0VBQUEsSUFBQSxlQUFBLENBQUEsSUFBQSxFQUFBLEtBQUEsQ0FBQSxDQUFBO0VBQ3pDLElBQUEsS0FBQSxHQUFBLE1BQUEsQ0FBQSxJQUFBLENBQUEsSUFBQSxFQUFNQSxPQUFPLENBQUEsQ0FBQTtFQUNiOEwsSUFBQUEsTUFBTSxDQUFDNUQsT0FBTyxDQUFDLFVBQUM2RCxLQUFLLEVBQUs7RUFDeEIsTUFBQSxJQUFJbEQsVUFBVSxFQUFFO0VBQ2RBLFFBQUFBLFVBQVUsQ0FBQ1gsT0FBTyxDQUFDLFVBQUNhLFNBQVMsRUFBSztFQUNoQ2lELFVBQUFBLFVBQVUsQ0FBQ0QsS0FBSyxDQUFDbEQsVUFBVSxFQUFFRSxTQUFTLENBQUMsQ0FBQTtFQUN6QyxTQUFDLENBQUMsQ0FBQTtFQUNKLE9BQUE7RUFFQSxNQUFBLElBQUkrQixPQUFPLEVBQUU7RUFDWEEsUUFBQUEsT0FBTyxDQUFDNUMsT0FBTyxDQUFDLFVBQUNtQyxNQUFNLEVBQUs7RUFDMUIyQixVQUFBQSxVQUFVLENBQUNELEtBQUssQ0FBQ2pCLE9BQU8sRUFBRVQsTUFBTSxDQUFDLENBQUE7RUFDbkMsU0FBQyxDQUFDLENBQUE7RUFDSixPQUFBO0VBQ0YsS0FBQyxDQUFDLENBQUE7RUFFRixJQUFBLEtBQUEsQ0FBS3hCLFVBQVUsR0FBR0EsVUFBVSxJQUFJLEVBQUUsQ0FBQTtFQUNsQyxJQUFBLEtBQUEsQ0FBS2lDLE9BQU8sR0FBR0EsT0FBTyxJQUFJLEVBQUUsQ0FBQTtNQUM1QmdCLE1BQU0sQ0FBQ2pMLElBQUksQ0FBTSxzQkFBQSxDQUFBLEtBQUEsQ0FBQSxDQUFBLENBQUE7RUFDakIsSUFBQSxLQUFBLENBQUtiLE9BQU8sR0FBRztFQUNieUssTUFBQUEsT0FBTyxFQUFHekssT0FBTyxDQUFDeUssT0FBTyxJQUFLLEdBQUE7T0FDL0IsQ0FBQTtFQUVELElBQUEsS0FBQSxDQUFLUyxJQUFJLEVBQUUsQ0FBQTtFQUFBLElBQUEsT0FBQSxLQUFBLENBQUE7RUFDYixHQUFBO0VBQUMsRUFBQSxZQUFBLENBQUEsS0FBQSxFQUFBLENBQUE7RUFBQSxJQUFBLEdBQUEsRUFBQSxNQUFBO0VBQUEsSUFBQSxLQUFBLEVBRUQsU0FBTyxJQUFBLEdBQUE7RUFBQSxNQUFBLElBQUEsTUFBQSxHQUFBLElBQUEsQ0FBQTtFQUNMLE1BQUEsSUFBSSxDQUFDckMsVUFBVSxDQUFDWCxPQUFPLENBQUMsVUFBQ2EsU0FBUyxFQUFLO1VBQ3JDQSxTQUFTLENBQUM4RCxhQUFhLEdBQUcsWUFBQTtFQUFBLFVBQUEsT0FBTSxNQUFJLENBQUNDLEtBQUssQ0FBQy9ELFNBQVMsQ0FBQyxDQUFBO0VBQUEsU0FBQSxDQUFBO0VBQ3ZELE9BQUMsQ0FBQyxDQUFBO0VBQ0osS0FBQTtFQUFDLEdBQUEsRUFBQTtFQUFBLElBQUEsR0FBQSxFQUFBLGNBQUE7TUFBQSxLQUVELEVBQUEsU0FBQSxZQUFBLENBQWFBLFNBQVMsRUFBRTtFQUFBLE1BQUEsSUFBQSxNQUFBLEdBQUEsSUFBQSxDQUFBO0VBQ3RCLE1BQUEsSUFBSSxDQUFDRixVQUFVLENBQUNoSSxJQUFJLENBQUNrSSxTQUFTLENBQUMsQ0FBQTtRQUMvQkEsU0FBUyxDQUFDOEQsYUFBYSxHQUFHLFlBQUE7RUFBQSxRQUFBLE9BQU0sTUFBSSxDQUFDQyxLQUFLLENBQUMvRCxTQUFTLENBQUMsQ0FBQTtFQUFBLE9BQUEsQ0FBQTtFQUN2RCxLQUFBO0VBQUMsR0FBQSxFQUFBO0VBQUEsSUFBQSxHQUFBLEVBQUEsV0FBQTtNQUFBLEtBRUQsRUFBQSxTQUFBLFNBQUEsQ0FBVXNCLE1BQU0sRUFBRTtFQUNoQixNQUFBLElBQUksQ0FBQ1MsT0FBTyxDQUFDakssSUFBSSxDQUFDd0osTUFBTSxDQUFDLENBQUE7RUFDM0IsS0FBQTtFQUFDLEdBQUEsRUFBQTtFQUFBLElBQUEsR0FBQSxFQUFBLE9BQUE7TUFBQSxLQUVELEVBQUEsU0FBQSxLQUFBLENBQU10QixTQUFTLEVBQUU7UUFDZixJQUFNZ0UsV0FBVyxHQUFHLElBQUksQ0FBQ2pDLE9BQU8sQ0FBQzdHLE1BQU0sQ0FBQyxVQUFDb0csTUFBTSxFQUFLO1VBQ2xELE9BQU9BLE1BQU0sQ0FBQ3hCLFVBQVUsQ0FBQzdILE9BQU8sQ0FBQytILFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBO0VBQ3BELE9BQUMsQ0FBQyxDQUFDOUUsTUFBTSxDQUFDLFVBQUNvRyxNQUFNLEVBQUs7RUFDcEIsUUFBQSxPQUFPQSxNQUFNLENBQUNzQixjQUFjLENBQUM1QyxTQUFTLENBQUMsQ0FBQTtTQUN4QyxDQUFDLENBQUNpRSxJQUFJLENBQUMsVUFBQ0MsQ0FBQyxFQUFFQyxDQUFDLEVBQUs7RUFDaEIsUUFBQSxPQUFPRCxDQUFDLENBQUNwQyxZQUFZLEVBQUUsQ0FBQ3BDLFNBQVMsRUFBRSxHQUFHeUUsQ0FBQyxDQUFDckMsWUFBWSxFQUFFLENBQUNwQyxTQUFTLEVBQUUsQ0FBQTtFQUNwRSxPQUFDLENBQUMsQ0FBQTtRQUVGLElBQUlzRSxXQUFXLENBQUMzSyxNQUFNLEVBQUU7RUFDdEIySyxRQUFBQSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUNELEtBQUssQ0FBQy9ELFNBQVMsQ0FBQyxDQUFBO0VBQ2pDLE9BQUMsTUFBTSxJQUFJQSxTQUFTLENBQUMrQixPQUFPLENBQUMxSSxNQUFNLEVBQUU7RUFDbkMyRyxRQUFBQSxTQUFTLENBQUNvRSxXQUFXLENBQUNwRSxTQUFTLENBQUN1RCxlQUFlLEVBQUUsSUFBSSxDQUFDdE0sT0FBTyxDQUFDeUssT0FBTyxDQUFDLENBQUE7RUFDeEUsT0FBQTtFQUVBLE1BQUEsSUFBSSxDQUFDTyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUE7RUFDM0IsS0FBQTtFQUFDLEdBQUEsRUFBQTtFQUFBLElBQUEsR0FBQSxFQUFBLE9BQUE7RUFBQSxJQUFBLEtBQUEsRUFFRCxTQUFRLEtBQUEsR0FBQTtFQUNOLE1BQUEsSUFBSSxDQUFDRixPQUFPLENBQUM1QyxPQUFPLENBQUMsVUFBQ21DLE1BQU0sRUFBQTtVQUFBLE9BQUtBLE1BQU0sQ0FBQytDLEtBQUssRUFBRSxDQUFBO1NBQUMsQ0FBQSxDQUFBO0VBQ2xELEtBQUE7RUFBQyxHQUFBLEVBQUE7RUFBQSxJQUFBLEdBQUEsRUFBQSxTQUFBO0VBQUEsSUFBQSxLQUFBLEVBRUQsU0FBVSxPQUFBLEdBQUE7RUFDUixNQUFBLElBQUksQ0FBQ3ZFLFVBQVUsQ0FBQ1gsT0FBTyxDQUFDLFVBQUNhLFNBQVMsRUFBQTtVQUFBLE9BQUtBLFNBQVMsQ0FBQ3NFLE9BQU8sRUFBRSxDQUFBO1NBQUMsQ0FBQSxDQUFBO0VBQzNELE1BQUEsSUFBSSxDQUFDdkMsT0FBTyxDQUFDNUMsT0FBTyxDQUFDLFVBQUNtQyxNQUFNLEVBQUE7VUFBQSxPQUFLQSxNQUFNLENBQUNnRCxPQUFPLEVBQUUsQ0FBQTtTQUFDLENBQUEsQ0FBQTtFQUNwRCxLQUFBO0VBQUMsR0FBQSxFQUFBO0VBQUEsSUFBQSxHQUFBLEVBQUEsV0FBQTtFQUFBLElBQUEsR0FBQSxFQUVELFNBQWdCLEdBQUEsR0FBQTtFQUFBLE1BQUEsSUFBQSxNQUFBLEdBQUEsSUFBQSxDQUFBO1FBQ2QsT0FBTyxJQUFJLENBQUN2QyxPQUFPLENBQUNqQixHQUFHLENBQUMsVUFBQ1EsTUFBTSxFQUFLO0VBQ2xDLFFBQUEsT0FBT0EsTUFBTSxDQUFDb0IsZUFBZSxDQUFDNUIsR0FBRyxDQUFDLFVBQUNkLFNBQVMsRUFBQTtFQUFBLFVBQUEsT0FBSyxNQUFJLENBQUNGLFVBQVUsQ0FBQzdILE9BQU8sQ0FBQytILFNBQVMsQ0FBQyxDQUFBO1dBQUMsQ0FBQSxDQUFBO0VBQ3RGLE9BQUMsQ0FBQyxDQUFBO09BQ0g7TUFBQSxHQUVELEVBQUEsU0FBQSxHQUFBLENBQWN1RSxTQUFTLEVBQUU7RUFBQSxNQUFBLElBQUEsTUFBQSxHQUFBLElBQUEsQ0FBQTtRQUN2QixJQUFNQyxPQUFPLEdBQUcsb0JBQW9CLENBQUE7UUFDcEMsSUFBSUQsU0FBUyxDQUFDbEwsTUFBTSxLQUFLLElBQUksQ0FBQzBJLE9BQU8sQ0FBQzFJLE1BQU0sRUFBRTtFQUM1QyxRQUFBLElBQUksQ0FBQzBJLE9BQU8sQ0FBQzVDLE9BQU8sQ0FBQyxVQUFDbUMsTUFBTSxFQUFBO1lBQUEsT0FBS0EsTUFBTSxDQUFDK0MsS0FBSyxFQUFFLENBQUE7V0FBQyxDQUFBLENBQUE7RUFFaERFLFFBQUFBLFNBQVMsQ0FBQ3BGLE9BQU8sQ0FBQyxVQUFDc0YsYUFBYSxFQUFFdEwsQ0FBQyxFQUFLO0VBQ3RDc0wsVUFBQUEsYUFBYSxDQUFDdEYsT0FBTyxDQUFDLFVBQUNuSCxLQUFLLEVBQUs7RUFDL0IsWUFBQSxNQUFJLENBQUMrSixPQUFPLENBQUM1SSxDQUFDLENBQUMsQ0FBQ2xFLEdBQUcsQ0FBQyxNQUFJLENBQUM2SyxVQUFVLENBQUM5SCxLQUFLLENBQUMsQ0FBQyxDQUFBO0VBQzdDLFdBQUMsQ0FBQyxDQUFBO0VBQ0osU0FBQyxDQUFDLENBQUE7RUFDSixPQUFDLE1BQU07RUFDTCxRQUFBLE1BQU13TSxPQUFPLENBQUE7RUFDZixPQUFBO0VBQ0YsS0FBQTtFQUFDLEdBQUEsQ0FBQSxDQUFBLENBQUE7RUFBQSxFQUFBLE9BQUEsS0FBQSxDQUFBO0VBQUEsQ0FBQSxDQXhGaUJ4TixZQUFZLEVBQUE7QUEyRmhDLE1BQU11SyxZQUFZLEdBQUcsSUFBSXNDLEtBQUssR0FBRTtFQUVoQyxTQUFTYixLQUFLLENBQUN6TCxFQUFFLEVBQUU7RUFDakIsRUFBQSxJQUFNbU4sWUFBWSxHQUFHLElBQUliLEtBQUssRUFBRSxDQUFBO0VBRWhDLEVBQUEsSUFBTWMsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFtQixDQUFZM0UsU0FBUyxFQUFFO0VBQzlDMEUsSUFBQUEsWUFBWSxDQUFDRSxZQUFZLENBQUM1RSxTQUFTLENBQUMsQ0FBQTtFQUNwQzZFLElBQUFBLFNBQVMsQ0FBQzdDLE9BQU8sQ0FBQzhDLFNBQVMsRUFBRSxDQUFBO0tBQzlCLENBQUE7RUFFRCxFQUFBLElBQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBZ0IsQ0FBWXpELE1BQU0sRUFBRTtFQUN4Q29ELElBQUFBLFlBQVksQ0FBQ2xELFNBQVMsQ0FBQ0YsTUFBTSxDQUFDLENBQUE7RUFDOUJ1RCxJQUFBQSxTQUFTLENBQUM3QyxPQUFPLENBQUM4QyxTQUFTLEVBQUUsQ0FBQTtLQUM5QixDQUFBO0lBRURELFNBQVMsQ0FBQzdDLE9BQU8sQ0FBQ2dELFNBQVMsQ0FBQyxrQkFBa0IsRUFBRUwsbUJBQW1CLENBQUMsQ0FBQTtJQUNwRWxELE1BQU0sQ0FBQ08sT0FBTyxDQUFDZ0QsU0FBUyxDQUFDLGVBQWUsRUFBRUQsZ0JBQWdCLENBQUMsQ0FBQTtJQUMzRHhOLEVBQUUsQ0FBQ0ksSUFBSSxFQUFFLENBQUE7SUFDVGtOLFNBQVMsQ0FBQzdDLE9BQU8sQ0FBQzJCLFdBQVcsQ0FBQyxrQkFBa0IsRUFBRWdCLG1CQUFtQixDQUFDLENBQUE7SUFDdEVsRCxNQUFNLENBQUNPLE9BQU8sQ0FBQzJCLFdBQVcsQ0FBQyxlQUFlLEVBQUVvQixnQkFBZ0IsQ0FBQyxDQUFBO0VBQzdELEVBQUEsT0FBT0wsWUFBWSxDQUFBO0VBQ3JCOztFQ3ZIQSxTQUFTTyx5QkFBeUIsR0FBRztJQUNuQyxJQUFJQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUE7SUFFNUIsSUFBSTtNQUNGLElBQU1qTyxPQUFPLEdBQUdHLE1BQU0sQ0FBQytOLGNBQWMsQ0FBQyxFQUFFLEVBQUUsU0FBUyxFQUFFO0VBQ25EQyxNQUFBQSxHQUFHLEVBQUcsU0FBQSxHQUFBLEdBQUE7VUFDSixPQUFRRixnQkFBZ0IsR0FBRyxJQUFJLENBQUE7RUFDakMsT0FBQTtFQUNGLEtBQUMsQ0FBQyxDQUFBO01BRUZyTyxNQUFNLENBQUN3TyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUVwTyxPQUFPLEVBQUVBLE9BQU8sQ0FBQyxDQUFBO01BQ2pESixNQUFNLENBQUN5TyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUVyTyxPQUFPLEVBQUVBLE9BQU8sQ0FBQyxDQUFBO0tBQ3JELENBQUMsT0FBT3NPLElBQUksRUFBRTtFQUNiTCxJQUFBQSxnQkFBZ0IsR0FBRyxLQUFLLENBQUE7RUFDMUIsR0FBQTtFQUVBLEVBQUEsT0FBT0EsZ0JBQWdCLENBQUE7RUFDekIsQ0FBQTtFQUVPLElBQU1NLHNCQUFzQixHQUFHUCx5QkFBeUIsRUFBRSxDQUFBO0FBUWpFLGlDQUFlTyxzQkFBc0I7O0VDM0J0QixTQUFTQyxRQUFRLENBQUM1TixJQUFJLEVBQUU2TixJQUFJLEVBQUU7SUFDM0MsSUFBSUMsUUFBUSxHQUFHLENBQUMsQ0FBQTtJQUVoQixPQUFPLFNBQVNDLGdCQUFnQixHQUFHO01BQ2pDLElBQU1DLE9BQU8sR0FBRyxJQUFJLENBQUE7TUFDcEIsSUFBTXBPLElBQUksR0FBR0csU0FBUyxDQUFBO0VBRXRCLElBQUEsSUFBTWtPLEdBQUcsR0FBR0MsSUFBSSxDQUFDRCxHQUFHLEVBQUUsQ0FBQTtFQUN0QixJQUFBLElBQUlBLEdBQUcsR0FBR0gsUUFBUSxJQUFJRCxJQUFJLEVBQUU7RUFDMUI3TixNQUFBQSxJQUFJLENBQUNtTyxLQUFLLENBQUNILE9BQU8sRUFBRXBPLElBQUksQ0FBQyxDQUFBO0VBQ3pCa08sTUFBQUEsUUFBUSxHQUFHRyxHQUFHLENBQUE7RUFDaEIsS0FBQTtLQUNELENBQUE7RUFDSDs7RUNKQSxJQUFNRyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQWlCLENBQUlDLFFBQVEsRUFBRUMsUUFBUSxFQUFLO0VBQ2hELEVBQUEsSUFBTUMsaUJBQWlCLEdBQUdYLFFBQVEsQ0FBQyxVQUFDWSxLQUFLLEVBQUE7TUFBQSxPQUFLSCxRQUFRLENBQUNHLEtBQUssQ0FBQyxDQUFBO0VBQUEsR0FBQSxFQUFFRixRQUFRLENBQUMsQ0FBQTtJQUN4RSxPQUFPLFVBQUFFLEtBQUssRUFBSTtNQUNkQSxLQUFLLENBQUNDLGNBQWMsRUFBRSxDQUFBO01BQ3RCRixpQkFBaUIsQ0FBQ0MsS0FBSyxDQUFDLENBQUE7S0FDekIsQ0FBQTtFQUNILENBQUMsQ0FBQTtFQUVELElBQU1FLFlBQVksR0FBR2Ysd0JBQXNCLEdBQUc7RUFBRWdCLEVBQUFBLE9BQU8sRUFBRSxLQUFBO0VBQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQTtFQUV4RSxJQUFNQyxPQUFPLElBQUcsY0FBYyxJQUFJNVAsTUFBTSxDQUFBLENBQUE7RUFDeEMsSUFBTTZQLFdBQVcsR0FBRztFQUNsQmxJLEVBQUFBLEtBQUssRUFBRSxXQUFXO0VBQ2xCOEUsRUFBQUEsSUFBSSxFQUFFLFdBQVc7RUFDakJxRCxFQUFBQSxHQUFHLEVBQUUsU0FBQTtFQUNQLENBQUMsQ0FBQTtFQUNELElBQU1DLFdBQVcsR0FBRztFQUNsQnBJLEVBQUFBLEtBQUssRUFBRSxZQUFZO0VBQ25COEUsRUFBQUEsSUFBSSxFQUFFLFdBQVc7RUFDakJxRCxFQUFBQSxHQUFHLEVBQUUsVUFBQTtFQUNQLENBQUMsQ0FBQTtFQUNELElBQU03RyxVQUFVLEdBQUcsRUFBRSxDQUFBO0VBQ3JCLElBQU0rRyxpQkFBaUIsR0FBRyxXQUFXLENBQUE7RUFDckMsSUFBTUMsa0JBQWtCLEdBQUcsWUFBWSxDQUFBO0VBRXZDLFNBQVNDLFlBQVksQ0FBQzNTLE9BQU8sRUFBRTRTLE9BQU8sRUFBRTtFQUN0QyxFQUFBLEtBQUssSUFBSTdOLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRy9FLE9BQU8sQ0FBQzZTLGNBQWMsQ0FBQzVOLE1BQU0sRUFBRUYsQ0FBQyxFQUFFLEVBQUU7TUFDdEQsSUFBSS9FLE9BQU8sQ0FBQzZTLGNBQWMsQ0FBQzlOLENBQUMsQ0FBQyxDQUFDK04sVUFBVSxLQUFLRixPQUFPLEVBQUU7RUFDcEQsTUFBQSxPQUFPNVMsT0FBTyxDQUFDNlMsY0FBYyxDQUFDOU4sQ0FBQyxDQUFDLENBQUE7RUFDbEMsS0FBQTtFQUNGLEdBQUE7RUFDQSxFQUFBLE9BQU8sS0FBSyxDQUFBO0VBQ2QsQ0FBQTtFQUVBLFNBQVNnTyxpQkFBaUIsQ0FBQ25ILFNBQVMsRUFBRTtJQUNwQyxJQUFNd0UsT0FBTyxHQUFHLDRFQUE0RSxDQUFBO0VBQzVGLEVBQUEsSUFBSTFFLFVBQVUsQ0FBQ04sSUFBSSxDQUFDLFVBQUM0SCxRQUFRLEVBQUE7RUFBQSxJQUFBLE9BQUtwSCxTQUFTLENBQUM1TCxPQUFPLEtBQUtnVCxRQUFRLENBQUNoVCxPQUFPLENBQUE7RUFBQSxHQUFBLENBQUMsRUFBRTtFQUN6RSxJQUFBLE1BQU1vUSxPQUFPLENBQUE7RUFDZixHQUFBO0VBQ0ExRSxFQUFBQSxVQUFVLENBQUNoSSxJQUFJLENBQUNrSSxTQUFTLENBQUMsQ0FBQTtFQUM1QixDQUFBO0VBRUEsU0FBU3FCLGlCQUFpQixDQUFDckIsU0FBUyxFQUFFO0VBQ3BDdUIsRUFBQUEsWUFBWSxDQUFDcUQsWUFBWSxDQUFDNUUsU0FBUyxDQUFDLENBQUE7RUFDdEMsQ0FBQTtFQUVBLFNBQVNxSCxXQUFVLENBQUNDLE1BQU0sRUFBRUMsV0FBVyxFQUFFO0VBQ3ZDLEVBQUEsSUFBTUMsRUFBRSxHQUFHM1EsTUFBTSxDQUFDQyxnQkFBZ0IsQ0FBQ3dRLE1BQU0sQ0FBQyxDQUFBO0VBRTFDLEVBQUEsS0FBSyxJQUFJbk8sQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHcU8sRUFBRSxDQUFDbk8sTUFBTSxFQUFFRixDQUFDLEVBQUUsRUFBRTtFQUNsQyxJQUFBLElBQU1zTyxHQUFHLEdBQUdELEVBQUUsQ0FBQ3JPLENBQUMsQ0FBQyxDQUFBO0VBQ2pCLElBQUEsSUFBS3NPLEdBQUcsQ0FBQ3hQLE9BQU8sQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLElBQU13UCxHQUFHLENBQUN4UCxPQUFPLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBRSxFQUFFO1FBQ3JFc1AsV0FBVyxDQUFDaFIsS0FBSyxDQUFDa1IsR0FBRyxDQUFDLEdBQUdELEVBQUUsQ0FBQ0MsR0FBRyxDQUFDLENBQUE7RUFDbEMsS0FBQTtFQUNGLEdBQUE7RUFFQSxFQUFBLEtBQUssSUFBSXRPLEVBQUMsR0FBRyxDQUFDLEVBQUVBLEVBQUMsR0FBR21PLE1BQU0sQ0FBQ0ksUUFBUSxDQUFDck8sTUFBTSxFQUFFRixFQUFDLEVBQUUsRUFBRTtFQUMvQ2tPLElBQUFBLFdBQVUsQ0FBQ0MsTUFBTSxDQUFDSSxRQUFRLENBQUN2TyxFQUFDLENBQUMsRUFBRW9PLFdBQVcsQ0FBQ0csUUFBUSxDQUFDdk8sRUFBQyxDQUFDLENBQUMsQ0FBQTtFQUN6RCxHQUFBO0VBQ0YsQ0FBQTtBQUFDLE1BRW9CMEwsU0FBUyxnQkFBQSxVQUFBLGFBQUEsRUFBQTtFQUFBLEVBQUEsU0FBQSxDQUFBLFNBQUEsRUFBQSxhQUFBLENBQUEsQ0FBQTtFQUFBLEVBQUEsSUFBQSxNQUFBLEdBQUEsWUFBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBO0VBQzVCLEVBQUEsU0FBQSxTQUFBLENBQVl6USxPQUFPLEVBQWM7RUFBQSxJQUFBLElBQUEsS0FBQSxDQUFBO01BQUEsSUFBWjZDLE9BQU8sR0FBQyxTQUFBLENBQUEsTUFBQSxHQUFBLENBQUEsSUFBQSxTQUFBLENBQUEsQ0FBQSxDQUFBLEtBQUEsU0FBQSxHQUFBLFNBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQSxFQUFFLENBQUE7RUFBQSxJQUFBLGVBQUEsQ0FBQSxJQUFBLEVBQUEsU0FBQSxDQUFBLENBQUE7RUFDN0IsSUFBQSxLQUFBLEdBQUEsTUFBQSxDQUFBLElBQUEsQ0FBQSxJQUFBLEVBQU1BLE9BQU8sQ0FBQSxDQUFBO01BQ2IsS0FBSzhLLENBQUFBLE9BQU8sR0FBRyxFQUFFLENBQUE7TUFDakIsS0FBSzlLLENBQUFBLE9BQU8sR0FBR0EsT0FBTyxDQUFBO01BQ3RCLEtBQUs3QyxDQUFBQSxPQUFPLEdBQUdBLE9BQU8sQ0FBQTtFQUN0QitTLElBQUFBLGlCQUFpQixDQUFNLHNCQUFBLENBQUEsS0FBQSxDQUFBLENBQUEsQ0FBQTtFQUN2QnRDLElBQUFBLFNBQVMsQ0FBQzdDLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDLGtCQUFrQixFQUFPLHNCQUFBLENBQUEsS0FBQSxDQUFBLENBQUEsQ0FBQTtNQUNoRCxLQUFLMEYsQ0FBQUEsT0FBTyxHQUFHLElBQUksQ0FBQTtFQUNuQixJQUFBLEtBQUEsQ0FBS3pGLGFBQWEsRUFBRSxDQUFBO0VBQ3BCLElBQUEsS0FBQSxDQUFLMEYsZ0JBQWdCLEVBQUUsQ0FBQTtFQUN2QixJQUFBLEtBQUEsQ0FBS0MsY0FBYyxFQUFFLENBQUE7RUFBQSxJQUFBLE9BQUEsS0FBQSxDQUFBO0VBQ3ZCLEdBQUE7RUFBQyxFQUFBLFlBQUEsQ0FBQSxTQUFBLEVBQUEsQ0FBQTtFQUFBLElBQUEsR0FBQSxFQUFBLGVBQUE7RUFBQSxJQUFBLEtBQUEsRUFFRCxTQUFnQixhQUFBLEdBQUE7RUFDZCxNQUFBLElBQUksSUFBSSxDQUFDNVEsT0FBTyxDQUFDd0YsS0FBSyxFQUFFO1VBQ3RCLElBQUksQ0FBQzJGLFFBQVEsR0FBRztFQUFFM0YsVUFBQUEsS0FBSyxFQUFFLElBQUksQ0FBQ3hGLE9BQU8sQ0FBQ3dGLEtBQUFBO1dBQU8sQ0FBQTtFQUMvQyxPQUFDLE1BQU07RUFDTCxRQUFBLElBQUksQ0FBQzJGLFFBQVEsR0FBRyxJQUFJckYsY0FBYyxDQUFDLElBQUksQ0FBQ25HLFNBQVMsRUFBRSxJQUFJLENBQUNBLFNBQVMsQ0FBQyxDQUFBO0VBQ3BFLE9BQUE7RUFDRixLQUFBO0VBQUMsR0FBQSxFQUFBO0VBQUEsSUFBQSxHQUFBLEVBQUEsa0JBQUE7RUFBQSxJQUFBLEtBQUEsRUFFRCxTQUFtQixnQkFBQSxHQUFBO1FBQ2pCLElBQUksQ0FBQ2tSLHFCQUFxQixFQUFFLENBQUE7RUFDNUIsTUFBQSxJQUFJLENBQUMzUixNQUFNLEdBQUdwQyxLQUFLLENBQUMwQyxhQUFhLENBQUMsSUFBSSxDQUFDckMsT0FBTyxFQUFFLElBQUksQ0FBQ3dDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQTtFQUNyRSxNQUFBLElBQUksQ0FBQ21SLGNBQWMsR0FBRyxJQUFJLENBQUM1UixNQUFNLENBQUE7RUFDakMsTUFBQSxJQUFJLENBQUNwQixRQUFRLEdBQUcsSUFBSSxDQUFDb0IsTUFBTSxDQUFBO1FBQzNCLElBQUksQ0FBQ29OLGVBQWUsR0FBRyxJQUFJLENBQUN0TSxPQUFPLENBQUNsQyxRQUFRLElBQUksSUFBSSxDQUFDb0IsTUFBTSxDQUFBO0VBRTNELE1BQUEsSUFBSSxDQUFDaU8sV0FBVyxDQUFDLElBQUksQ0FBQ2IsZUFBZSxDQUFDLENBQUE7RUFFdEMsTUFBQSxJQUFJLElBQUksQ0FBQ25CLFFBQVEsQ0FBQ2tDLE9BQU8sRUFBRTtFQUN6QixRQUFBLElBQUksQ0FBQ2xDLFFBQVEsQ0FBQ2tDLE9BQU8sRUFBRSxDQUFBO0VBQ3pCLE9BQUE7RUFDRixLQUFBO0VBQUMsR0FBQSxFQUFBO0VBQUEsSUFBQSxHQUFBLEVBQUEsZ0JBQUE7RUFBQSxJQUFBLEtBQUEsRUFFRCxTQUFpQixjQUFBLEdBQUE7RUFBQSxNQUFBLElBQUEsTUFBQSxHQUFBLElBQUEsQ0FBQTtFQUNmLE1BQUEsSUFBSSxDQUFDMEQsVUFBVSxHQUFHLFVBQUMzQixLQUFLLEVBQUE7RUFBQSxRQUFBLE9BQUssTUFBSSxDQUFDNEIsU0FBUyxDQUFDNUIsS0FBSyxDQUFDLENBQUE7RUFBQSxPQUFBLENBQUE7RUFDbEQsTUFBQSxJQUFJLENBQUM2QixTQUFTLEdBQUcsVUFBQzdCLEtBQUssRUFBQTtFQUFBLFFBQUEsT0FBSyxNQUFJLENBQUM4QixRQUFRLENBQUM5QixLQUFLLENBQUMsQ0FBQTtFQUFBLE9BQUEsQ0FBQTtFQUNoRCxNQUFBLElBQUksQ0FBQytCLFFBQVEsR0FBRyxVQUFDL0IsS0FBSyxFQUFBO0VBQUEsUUFBQSxPQUFLLE1BQUksQ0FBQ2dDLE9BQU8sQ0FBQ2hDLEtBQUssQ0FBQyxDQUFBO0VBQUEsT0FBQSxDQUFBO0VBQzlDLE1BQUEsSUFBSSxDQUFDaUMsZ0JBQWdCLEdBQUcsVUFBQ2pDLEtBQUssRUFBQTtFQUFBLFFBQUEsT0FBSyxNQUFJLENBQUNrQyxlQUFlLENBQUNsQyxLQUFLLENBQUMsQ0FBQTtFQUFBLE9BQUEsQ0FBQTtFQUM5RCxNQUFBLElBQUksQ0FBQ21DLGVBQWUsR0FBR3ZDLGlCQUFpQixDQUFDLFVBQUNJLEtBQUssRUFBQTtFQUFBLFFBQUEsT0FBSyxNQUFJLENBQUNvQyxjQUFjLENBQUNwQyxLQUFLLENBQUMsQ0FBQTtTQUFFLEVBQUEsSUFBSSxDQUFDcUMsd0JBQXdCLENBQUMsQ0FBQTtFQUM5RyxNQUFBLElBQUksQ0FBQ0MsY0FBYyxHQUFHLFVBQUN0QyxLQUFLLEVBQUE7RUFBQSxRQUFBLE9BQUssTUFBSSxDQUFDdUMsYUFBYSxDQUFDdkMsS0FBSyxDQUFDLENBQUE7RUFBQSxPQUFBLENBQUE7RUFDMUQsTUFBQSxJQUFJLENBQUN3QyxXQUFXLEdBQUcsVUFBQ3hDLEtBQUssRUFBQTtFQUFBLFFBQUEsT0FBSyxNQUFJLENBQUN5QyxVQUFVLENBQUN6QyxLQUFLLENBQUMsQ0FBQTtFQUFBLE9BQUEsQ0FBQTtFQUNwRCxNQUFBLElBQUksQ0FBQzBDLE9BQU8sR0FBRyxVQUFDMUMsS0FBSyxFQUFBO0VBQUEsUUFBQSxPQUFLLE1BQUksQ0FBQzJDLFFBQVEsQ0FBQzNDLEtBQUssQ0FBQyxDQUFBO0VBQUEsT0FBQSxDQUFBO0VBRTlDLE1BQUEsSUFBSSxDQUFDNEMsT0FBTyxDQUFDNUQsZ0JBQWdCLENBQUN1QixXQUFXLENBQUNwSSxLQUFLLEVBQUUsSUFBSSxDQUFDd0osVUFBVSxFQUFFekIsWUFBWSxDQUFDLENBQUE7RUFDL0UsTUFBQSxJQUFJLENBQUMwQyxPQUFPLENBQUM1RCxnQkFBZ0IsQ0FBQ3FCLFdBQVcsQ0FBQ2xJLEtBQUssRUFBRSxJQUFJLENBQUN3SixVQUFVLEVBQUV6QixZQUFZLENBQUMsQ0FBQTtFQUNqRixLQUFBO0VBQUMsR0FBQSxFQUFBO0VBQUEsSUFBQSxHQUFBLEVBQUEsU0FBQTtFQUFBLElBQUEsS0FBQSxFQUVELFNBQVUsT0FBQSxHQUFBO0VBQ1IsTUFBQSxPQUFPeFMsS0FBSyxDQUFDMkMsV0FBVyxDQUFDLElBQUksQ0FBQ3RDLE9BQU8sQ0FBQyxDQUFBO0VBQ3hDLEtBQUE7RUFBQyxHQUFBLEVBQUE7RUFBQSxJQUFBLEdBQUEsRUFBQSxhQUFBO0VBQUEsSUFBQSxLQUFBLEVBRUQsU0FBYyxXQUFBLEdBQUE7UUFDWixJQUFJLENBQUNXLFFBQVEsR0FBRyxJQUFJLENBQUNvQixNQUFNLENBQUNsQixHQUFHLENBQUMsSUFBSSxDQUFDaVUsa0JBQWtCLElBQUksSUFBSW5WLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUMzRSxPQUFPLElBQUksQ0FBQ2dCLFFBQVEsQ0FBQTtFQUN0QixLQUFBO0VBQUMsR0FBQSxFQUFBO0VBQUEsSUFBQSxHQUFBLEVBQUEsV0FBQTtFQUFBLElBQUEsS0FBQSxFQUVELFNBQVksU0FBQSxHQUFBO0VBQ1YsTUFBQSxPQUFPLElBQUksQ0FBQ0EsUUFBUSxDQUFDRSxHQUFHLENBQUMsSUFBSSxDQUFDa08sT0FBTyxFQUFFLENBQUNqTyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtFQUNwRCxLQUFBO0VBQUMsR0FBQSxFQUFBO0VBQUEsSUFBQSxHQUFBLEVBQUEsdUJBQUE7RUFBQSxJQUFBLEtBQUEsRUFFRCxTQUF5QixxQkFBQSxHQUFBO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUNkLE9BQU8sQ0FBQ21DLEtBQUssQ0FBQ3VRLGtCQUFrQixDQUFDLEVBQUU7RUFDM0MsUUFBQSxJQUFJLENBQUMxUyxPQUFPLENBQUNtQyxLQUFLLENBQUN1USxrQkFBa0IsQ0FBQyxHQUFHalEsTUFBTSxDQUFDQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMxQyxPQUFPLENBQUMsQ0FBQzBTLGtCQUFrQixDQUFDLENBQUE7RUFDcEcsT0FBQTtFQUNGLEtBQUE7RUFBQyxHQUFBLEVBQUE7RUFBQSxJQUFBLEdBQUEsRUFBQSxnQkFBQTtNQUFBLEtBRUQsRUFBQSxTQUFBLGNBQUEsQ0FBZXpELElBQUksRUFBRTtRQUNuQixJQUFJOEYsVUFBVSxHQUFHLElBQUksQ0FBQy9VLE9BQU8sQ0FBQ21DLEtBQUssQ0FBQ3VRLGtCQUFrQixDQUFDLENBQUE7UUFDdkQsSUFBTXNDLGFBQWEsR0FBZ0IvRixZQUFBQSxDQUFBQSxNQUFBQSxDQUFBQSxJQUFJLEVBQUksSUFBQSxDQUFBLENBQUE7RUFFM0MsTUFBQSxJQUFJLENBQUMsa0JBQWtCLENBQUNnRyxJQUFJLENBQUNGLFVBQVUsQ0FBQyxFQUFFO0VBQ3hDLFFBQUEsSUFBSUEsVUFBVSxFQUFFO1lBQ2RBLFVBQVUsSUFBQSxJQUFBLENBQUEsTUFBQSxDQUFTQyxhQUFhLENBQUUsQ0FBQTtFQUNwQyxTQUFDLE1BQU07RUFDTEQsVUFBQUEsVUFBVSxHQUFHQyxhQUFhLENBQUE7RUFDNUIsU0FBQTtFQUNGLE9BQUMsTUFBTTtVQUNMRCxVQUFVLEdBQUdBLFVBQVUsQ0FBQ0csT0FBTyxDQUFDLG1CQUFtQixFQUFFRixhQUFhLENBQUMsQ0FBQTtFQUNyRSxPQUFBO1FBRUEsSUFBSSxJQUFJLENBQUNoVixPQUFPLENBQUNtQyxLQUFLLENBQUN1USxrQkFBa0IsQ0FBQyxLQUFLcUMsVUFBVSxFQUFFO1VBQ3pELElBQUksQ0FBQy9VLE9BQU8sQ0FBQ21DLEtBQUssQ0FBQ3VRLGtCQUFrQixDQUFDLEdBQUdxQyxVQUFVLENBQUE7RUFDckQsT0FBQTtFQUNGLEtBQUE7RUFBQyxHQUFBLEVBQUE7RUFBQSxJQUFBLEdBQUEsRUFBQSxlQUFBO01BQUEsS0FFRCxFQUFBLFNBQUEsYUFBQSxDQUFjcE8sS0FBSyxFQUFFO1FBQ25CLElBQUksQ0FBQ21PLGtCQUFrQixHQUFHbk8sS0FBSyxDQUFBO1FBQy9CLElBQU13TyxZQUFZLHlCQUFrQnhPLEtBQUssQ0FBQy9HLENBQUMsRUFBTytHLE1BQUFBLENBQUFBLENBQUFBLE1BQUFBLENBQUFBLEtBQUssQ0FBQzlHLENBQUMsRUFBVSxVQUFBLENBQUEsQ0FBQTtRQUVuRSxJQUFJdVYsU0FBUyxHQUFHLElBQUksQ0FBQ3BWLE9BQU8sQ0FBQ21DLEtBQUssQ0FBQ3NRLGlCQUFpQixDQUFDLENBQUE7RUFFckQsTUFBQSxJQUFJLElBQUksQ0FBQzRDLHlCQUF5QixJQUFJMU8sS0FBSyxDQUFDL0csQ0FBQyxLQUFLLENBQUMsSUFBSStHLEtBQUssQ0FBQzlHLENBQUMsS0FBSyxDQUFDLEVBQUU7VUFDcEV1VixTQUFTLEdBQUdBLFNBQVMsQ0FBQ0YsT0FBTyxDQUFDLHNCQUFzQixFQUFFLEVBQUUsQ0FBQyxDQUFBO1NBQzFELE1BQU0sSUFBSSxDQUFDLHNCQUFzQixDQUFDRCxJQUFJLENBQUNHLFNBQVMsQ0FBQyxFQUFFO0VBQ2xELFFBQUEsSUFBSUEsU0FBUyxFQUFFO0VBQ2JBLFVBQUFBLFNBQVMsSUFBSSxHQUFHLENBQUE7RUFDbEIsU0FBQTtFQUNBQSxRQUFBQSxTQUFTLElBQUlELFlBQVksQ0FBQTtFQUMzQixPQUFDLE1BQU07VUFDTEMsU0FBUyxHQUFHQSxTQUFTLENBQUNGLE9BQU8sQ0FBQyxzQkFBc0IsRUFBRUMsWUFBWSxDQUFDLENBQUE7RUFDckUsT0FBQTtRQUVBLElBQUksSUFBSSxDQUFDblYsT0FBTyxDQUFDbUMsS0FBSyxDQUFDc1EsaUJBQWlCLENBQUMsS0FBSzJDLFNBQVMsRUFBRTtVQUN2RCxJQUFJLENBQUNwVixPQUFPLENBQUNtQyxLQUFLLENBQUNzUSxpQkFBaUIsQ0FBQyxHQUFHMkMsU0FBUyxDQUFBO0VBQ25ELE9BQUE7RUFDRixLQUFBO0VBQUMsR0FBQSxFQUFBO0VBQUEsSUFBQSxHQUFBLEVBQUEsTUFBQTtNQUFBLEtBRUQsRUFBQSxTQUFBLElBQUEsQ0FBS3pPLEtBQUssRUFBMEI7UUFBQSxJQUF4QnNJLElBQUksdUVBQUMsQ0FBQyxDQUFBO1FBQUEsSUFBRXFHLFFBQVEsdUVBQUMsS0FBSyxDQUFBO0VBQ2hDM08sTUFBQUEsS0FBSyxHQUFHQSxLQUFLLENBQUM4QixLQUFLLEVBQUUsQ0FBQTtRQUNyQixJQUFJLENBQUM5SCxRQUFRLEdBQUdnRyxLQUFLLENBQUE7RUFFckIsTUFBQSxJQUFJLENBQUM0TyxjQUFjLENBQUN0RyxJQUFJLENBQUMsQ0FBQTtRQUN6QixJQUFJLENBQUN1RyxhQUFhLENBQUM3TyxLQUFLLENBQUN4RixHQUFHLENBQUMsSUFBSSxDQUFDWSxNQUFNLENBQUMsQ0FBQyxDQUFBO1FBRTFDLElBQUksQ0FBQ3VULFFBQVEsRUFBRTtFQUNiLFFBQUEsSUFBSSxDQUFDekgsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO0VBQ3hCLE9BQUE7RUFDRixLQUFBO0VBQUMsR0FBQSxFQUFBO0VBQUEsSUFBQSxHQUFBLEVBQUEsYUFBQTtNQUFBLEtBRUQsRUFBQSxTQUFBLFdBQUEsQ0FBWWxILEtBQUssRUFBdUI7UUFBQSxJQUFyQnNJLElBQUksdUVBQUMsQ0FBQyxDQUFBO1FBQUEsSUFBRXdHLE1BQU0sdUVBQUMsSUFBSSxDQUFBO0VBQ3BDLE1BQUEsSUFBSSxDQUFDOUIsY0FBYyxHQUFHaE4sS0FBSyxDQUFDOEIsS0FBSyxFQUFFLENBQUE7UUFDbkMsSUFBSSxDQUFDeUcsSUFBSSxDQUFDLElBQUksQ0FBQ3lFLGNBQWMsRUFBRTFFLElBQUksRUFBRXdHLE1BQU0sQ0FBQyxDQUFBO0VBQzlDLEtBQUE7RUFBQyxHQUFBLEVBQUE7RUFBQSxJQUFBLEdBQUEsRUFBQSx3QkFBQTtFQUFBLElBQUEsS0FBQSxFQUVELFNBQTBCLHNCQUFBLEdBQUE7RUFDeEIsTUFBQSxJQUFJLENBQUN6RixXQUFXLENBQUMsSUFBSSxDQUFDYixlQUFlLENBQUMsQ0FBQTtFQUN4QyxLQUFBO0VBQUMsR0FBQSxFQUFBO0VBQUEsSUFBQSxHQUFBLEVBQUEsaUJBQUE7RUFBQSxJQUFBLEtBQUEsRUFFRCxTQUFtQixlQUFBLEdBQUE7RUFDakIsTUFBQSxJQUFJLENBQUNaLFdBQVcsQ0FBQyxJQUFJLENBQUNyQyxXQUFXLEVBQUUsQ0FBQyxDQUFBO0VBQ3RDLEtBQUE7RUFBQyxHQUFBLEVBQUE7RUFBQSxJQUFBLEdBQUEsRUFBQSxhQUFBO01BQUEsS0FFRCxFQUFBLFNBQUEsV0FBQSxDQUFZdkYsS0FBSyxFQUFFO0VBQ2pCQSxNQUFBQSxLQUFLLEdBQUdBLEtBQUssQ0FBQzhCLEtBQUssRUFBRSxDQUFBO1FBQ3JCLElBQUksQ0FBQzlILFFBQVEsR0FBR2dHLEtBQUssQ0FBQTtFQUNyQixNQUFBLElBQUksQ0FBQzRPLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUN0QixJQUFJLENBQUNDLGFBQWEsQ0FBQzdPLEtBQUssQ0FBQ3hGLEdBQUcsQ0FBQyxJQUFJLENBQUNZLE1BQU0sQ0FBQyxDQUFDLENBQUE7RUFDNUMsS0FBQTtFQUFDLEdBQUEsRUFBQTtFQUFBLElBQUEsR0FBQSxFQUFBLG9CQUFBO01BQUEsS0FFRCxFQUFBLFNBQUEsa0JBQUEsQ0FBbUI0RSxLQUFLLEVBQUU7UUFDeEIsSUFBSSxDQUFDK08sMEJBQTBCLEtBQS9CLElBQUksQ0FBQ0EsMEJBQTBCLEdBQUssSUFBSSxDQUFDQyxjQUFjLENBQUEsQ0FBQTtRQUV2RCxJQUFJLENBQUNDLGFBQWEsR0FBSSxJQUFJLENBQUNGLDBCQUEwQixDQUFDOVYsQ0FBQyxHQUFHK0csS0FBSyxDQUFDL0csQ0FBRSxDQUFBO1FBQ2xFLElBQUksQ0FBQ2lXLGNBQWMsR0FBSSxJQUFJLENBQUNILDBCQUEwQixDQUFDOVYsQ0FBQyxHQUFHK0csS0FBSyxDQUFDL0csQ0FBRSxDQUFBO1FBQ25FLElBQUksQ0FBQ2tXLFdBQVcsR0FBSSxJQUFJLENBQUNKLDBCQUEwQixDQUFDN1YsQ0FBQyxHQUFHOEcsS0FBSyxDQUFDOUcsQ0FBRSxDQUFBO1FBQ2hFLElBQUksQ0FBQ2tXLGFBQWEsR0FBSSxJQUFJLENBQUNMLDBCQUEwQixDQUFDN1YsQ0FBQyxHQUFHOEcsS0FBSyxDQUFDOUcsQ0FBRSxDQUFBO1FBRWxFLElBQUksQ0FBQzZWLDBCQUEwQixHQUFHL08sS0FBSyxDQUFBO0VBQ3pDLEtBQUE7RUFBQyxHQUFBLEVBQUE7RUFBQSxJQUFBLEdBQUEsRUFBQSxnQkFBQTtFQUFBLElBQUEsS0FBQSxFQUVELFNBQWlCLGNBQUEsR0FBQTtRQUNmLE9BQVEsQ0FBQyxJQUFJZ0wsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDcUUsb0JBQW9CLEdBQUksSUFBSSxDQUFDQyxzQkFBc0IsQ0FBQTtFQUNoRixLQUFBO0VBQUMsR0FBQSxFQUFBO0VBQUEsSUFBQSxHQUFBLEVBQUEsNEJBQUE7RUFBQSxJQUFBLEtBQUEsRUFFRCxTQUE2QiwwQkFBQSxHQUFBO1FBQzNCLElBQUksSUFBSSxDQUFDQyxZQUFZLEVBQUU7RUFDckIsUUFBQSxPQUFPLElBQUksQ0FBQ0MsaUJBQWlCLElBQUksSUFBSSxDQUFDQywrQkFBK0IsQ0FBQTtFQUN2RSxPQUFDLE1BQU07VUFDTCxPQUFPLElBQUksQ0FBQ0QsaUJBQWlCLENBQUE7RUFDL0IsT0FBQTtFQUNGLEtBQUE7RUFBQyxHQUFBLEVBQUE7RUFBQSxJQUFBLEdBQUEsRUFBQSxXQUFBO01BQUEsS0FFRCxFQUFBLFNBQUEsU0FBQSxDQUFVbEUsS0FBSyxFQUFFO0VBQUEsTUFBQSxJQUFBLE1BQUEsR0FBQSxJQUFBLENBQUE7RUFDZixNQUFBLElBQUksQ0FBQyxJQUFJLENBQUNzQixPQUFPLEVBQUU7RUFDakIsUUFBQSxPQUFBO0VBQ0YsT0FBQTtRQUVBLElBQUksSUFBSSxDQUFDOEMsMEJBQTBCLEVBQUU7VUFDbkNwRSxLQUFLLENBQUNxRSxlQUFlLEVBQUUsQ0FBQTtFQUN6QixPQUFBO1FBRUEsSUFBSSxDQUFDSixZQUFZLEdBQUk3RCxPQUFPLElBQUtKLEtBQUssWUFBWXhQLE1BQU0sQ0FBQzhULFVBQVksQ0FBQTtFQUVyRSxNQUFBLElBQUksQ0FBQ0MsVUFBVSxHQUFHLElBQUksQ0FBQ0MsZ0JBQWdCLEdBQUcsSUFBSTlXLEtBQUssQ0FDakQsSUFBSSxDQUFDdVcsWUFBWSxHQUFHakUsS0FBSyxDQUFDWSxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM2RCxLQUFLLEdBQUd6RSxLQUFLLENBQUMwRSxPQUFPLEVBQ2pFLElBQUksQ0FBQ1QsWUFBWSxHQUFHakUsS0FBSyxDQUFDWSxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMrRCxLQUFLLEdBQUczRSxLQUFLLENBQUM0RSxPQUFPLENBQ2xFLENBQUE7RUFFRCxNQUFBLElBQUksQ0FBQ2xCLGNBQWMsR0FBRyxJQUFJLENBQUN6SixXQUFXLEVBQUUsQ0FBQTtRQUN4QyxJQUFJLElBQUksQ0FBQ2dLLFlBQVksRUFBRTtVQUNyQixJQUFJLENBQUNZLFFBQVEsR0FBRzdFLEtBQUssQ0FBQ1ksY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDQyxVQUFVLENBQUE7RUFDbEQsUUFBQSxJQUFJLENBQUNrRCxvQkFBb0IsR0FBRyxDQUFDLElBQUlyRSxJQUFJLEVBQUUsQ0FBQTtFQUN6QyxPQUFBO0VBRUEsTUFBQSxJQUFJLENBQUNvRix1QkFBdUIsR0FBRyxJQUFJLENBQUNDLGlCQUFpQixDQUFBO0VBQ3JELE1BQUEsSUFBSSxDQUFDQyx3QkFBd0IsR0FBRyxJQUFJLENBQUNDLGtCQUFrQixDQUFBO0VBRXZELE1BQUEsSUFBSWpGLEtBQUssQ0FBQy9FLE1BQU0sWUFBWXpLLE1BQU0sQ0FBQzBVLGdCQUFnQixJQUM3Q2xGLEtBQUssQ0FBQy9FLE1BQU0sWUFBWXpLLE1BQU0sQ0FBQzBVLGdCQUFnQixFQUFFO0VBQ3JEbEYsUUFBQUEsS0FBSyxDQUFDL0UsTUFBTSxDQUFDa0ssS0FBSyxFQUFFLENBQUE7RUFDdEIsT0FBQTtFQUVBLE1BQUEsSUFBSSxJQUFJLENBQUNDLDBCQUEwQixFQUFFLEVBQUU7RUFDckMsUUFBQSxJQUFJLElBQUksQ0FBQ25CLFlBQVksSUFBSSxJQUFJLENBQUNFLCtCQUErQixFQUFFO0VBQzdELFVBQUEsSUFBTWtCLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBa0IsQ0FBSXJGLEtBQUssRUFBSztFQUNwQyxZQUFBLElBQUksTUFBSSxDQUFDc0YsY0FBYyxFQUFFLEVBQUU7Z0JBQ3pCLE1BQUksQ0FBQ0MsY0FBYyxFQUFFLENBQUE7RUFDdkIsYUFBQyxNQUFNO0VBQ0wsY0FBQSxNQUFJLENBQUNDLHdCQUF3QixDQUFDeEYsS0FBSyxDQUFDLENBQUE7RUFDdEMsYUFBQTtFQUNBeUYsWUFBQUEsZUFBZSxFQUFFLENBQUE7YUFDbEIsQ0FBQTtFQUNELFVBQUEsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFlLEdBQVM7Y0FDNUJ6VixRQUFRLENBQUNpUCxtQkFBbUIsQ0FBQ3NCLFdBQVcsQ0FBQ3RELElBQUksRUFBRW9JLGtCQUFrQixDQUFDLENBQUE7Y0FDbEVyVixRQUFRLENBQUNpUCxtQkFBbUIsQ0FBQ3NCLFdBQVcsQ0FBQ0QsR0FBRyxFQUFFbUYsZUFBZSxDQUFDLENBQUE7YUFDL0QsQ0FBQTtZQUVEelYsUUFBUSxDQUFDZ1AsZ0JBQWdCLENBQUN1QixXQUFXLENBQUN0RCxJQUFJLEVBQUVvSSxrQkFBa0IsRUFBRW5GLFlBQVksQ0FBQyxDQUFBO1lBQzdFbFEsUUFBUSxDQUFDZ1AsZ0JBQWdCLENBQUN1QixXQUFXLENBQUNELEdBQUcsRUFBRW1GLGVBQWUsRUFBRXZGLFlBQVksQ0FBQyxDQUFBO0VBQzNFLFNBQUMsTUFBTTtZQUNMLElBQUksQ0FBQ25TLE9BQU8sQ0FBQ2lSLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUNpRCxnQkFBZ0IsQ0FBQyxDQUFBO0VBQ2pFLFVBQUEsSUFBSSxDQUFDbFUsT0FBTyxDQUFDNEwsU0FBUyxHQUFHLElBQUksQ0FBQTtFQUM3QjNKLFVBQUFBLFFBQVEsQ0FBQ2dQLGdCQUFnQixDQUFDcUIsV0FBVyxDQUFDQyxHQUFHLEVBQUUsSUFBSSxDQUFDZ0MsY0FBYyxFQUFFcEMsWUFBWSxDQUFDLENBQUE7RUFDL0UsU0FBQTtFQUNGLE9BQUMsTUFBTTtFQUNMbFEsUUFBQUEsUUFBUSxDQUFDZ1AsZ0JBQWdCLENBQUN1QixXQUFXLENBQUN0RCxJQUFJLEVBQUUsSUFBSSxDQUFDNEUsU0FBUyxFQUFFM0IsWUFBWSxDQUFDLENBQUE7RUFDekVsUSxRQUFBQSxRQUFRLENBQUNnUCxnQkFBZ0IsQ0FBQ3FCLFdBQVcsQ0FBQ3BELElBQUksRUFBRSxJQUFJLENBQUM0RSxTQUFTLEVBQUUzQixZQUFZLENBQUMsQ0FBQTtFQUV6RWxRLFFBQUFBLFFBQVEsQ0FBQ2dQLGdCQUFnQixDQUFDdUIsV0FBVyxDQUFDRCxHQUFHLEVBQUUsSUFBSSxDQUFDeUIsUUFBUSxFQUFFN0IsWUFBWSxDQUFDLENBQUE7RUFDdkVsUSxRQUFBQSxRQUFRLENBQUNnUCxnQkFBZ0IsQ0FBQ3FCLFdBQVcsQ0FBQ0MsR0FBRyxFQUFFLElBQUksQ0FBQ3lCLFFBQVEsRUFBRTdCLFlBQVksQ0FBQyxDQUFBO0VBQ3pFLE9BQUE7UUFFQTFQLE1BQU0sQ0FBQ3dPLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMwRCxPQUFPLENBQUMsQ0FBQTtFQUMvQyxNQUFBLElBQUksQ0FBQ2dELE9BQU8sQ0FBQzVNLE9BQU8sQ0FBQyxVQUFDakwsQ0FBQyxFQUFBO1VBQUEsT0FBS0EsQ0FBQyxDQUFDbVIsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLE1BQUksQ0FBQzBELE9BQU8sQ0FBQyxDQUFBO1NBQUMsQ0FBQSxDQUFBO0VBRXZFLE1BQUEsSUFBSSxDQUFDOUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBO0VBQ3pCLEtBQUE7RUFBQyxHQUFBLEVBQUE7RUFBQSxJQUFBLEdBQUEsRUFBQSxVQUFBO01BQUEsS0FFRCxFQUFBLFNBQUEsUUFBQSxDQUFTb0UsS0FBSyxFQUFFO0VBQ2QsTUFBQSxJQUFJMkYsS0FBSyxDQUFBO1FBRVQsSUFBSSxDQUFDQyxVQUFVLEdBQUcsSUFBSSxDQUFBO1FBRXRCLElBQUksQ0FBQzNCLFlBQVksR0FBSTdELE9BQU8sSUFBS0osS0FBSyxZQUFZeFAsTUFBTSxDQUFDOFQsVUFBWSxDQUFBO1FBQ3JFLElBQUksSUFBSSxDQUFDTCxZQUFZLEVBQUU7VUFDckIwQixLQUFLLEdBQUdqRixZQUFZLENBQUNWLEtBQUssRUFBRSxJQUFJLENBQUM2RSxRQUFRLENBQUMsQ0FBQTtVQUUxQyxJQUFJLENBQUNjLEtBQUssRUFBRTtFQUNWLFVBQUEsT0FBQTtFQUNGLFNBQUE7RUFFQSxRQUFBLElBQUksSUFBSSxDQUFDTCxjQUFjLEVBQUUsRUFBRTtZQUN6QixJQUFJLENBQUNDLGNBQWMsRUFBRSxDQUFBO0VBQ3JCLFVBQUEsT0FBQTtFQUNGLFNBQUE7RUFDRixPQUFBO1FBRUF2RixLQUFLLENBQUNxRSxlQUFlLEVBQUUsQ0FBQTtRQUN2QnJFLEtBQUssQ0FBQ0MsY0FBYyxFQUFFLENBQUE7RUFDdEIsTUFBQSxJQUFJLENBQUNzRSxVQUFVLEdBQUcsSUFBSTdXLEtBQUssQ0FDekIsSUFBSSxDQUFDdVcsWUFBWSxHQUFHMEIsS0FBSyxDQUFDbEIsS0FBSyxHQUFHekUsS0FBSyxDQUFDMEUsT0FBTyxFQUMvQyxJQUFJLENBQUNULFlBQVksR0FBRzBCLEtBQUssQ0FBQ2hCLEtBQUssR0FBRzNFLEtBQUssQ0FBQzRFLE9BQU8sQ0FDaEQsQ0FBQTtRQUVELElBQUlsUSxLQUFLLEdBQUcsSUFBSSxDQUFDZ1AsY0FBYyxDQUFDOVUsR0FBRyxDQUFDLElBQUksQ0FBQzJWLFVBQVUsQ0FBQ3JWLEdBQUcsQ0FBQyxJQUFJLENBQUNzVixnQkFBZ0IsQ0FBQyxDQUFDLENBQy9DNVYsR0FBRyxDQUFDLElBQUksQ0FBQ21XLGlCQUFpQixDQUFDN1YsR0FBRyxDQUFDLElBQUksQ0FBQzRWLHVCQUF1QixDQUFDLENBQUMsQ0FDN0RsVyxHQUFHLENBQUMsSUFBSSxDQUFDcVcsa0JBQWtCLENBQUMvVixHQUFHLENBQUMsSUFBSSxDQUFDOFYsd0JBQXdCLENBQUMsQ0FBQyxDQUFBO0VBRS9GdFEsTUFBQUEsS0FBSyxHQUFHLElBQUksQ0FBQ3FILFFBQVEsQ0FBQzNGLEtBQUssQ0FBQzFCLEtBQUssRUFBRSxJQUFJLENBQUNvSSxPQUFPLEVBQUUsQ0FBQyxDQUFBO0VBQ2xELE1BQUEsSUFBSSxDQUFDK0ksa0JBQWtCLENBQUNuUixLQUFLLENBQUMsQ0FBQTtFQUM5QixNQUFBLElBQUksQ0FBQ3VJLElBQUksQ0FBQ3ZJLEtBQUssQ0FBQyxDQUFBO1FBQ2hCLElBQUksQ0FBQzNHLE9BQU8sQ0FBQytYLFNBQVMsQ0FBQ2xYLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQTtFQUM3QyxLQUFBO0VBQUMsR0FBQSxFQUFBO0VBQUEsSUFBQSxHQUFBLEVBQUEsU0FBQTtNQUFBLEtBRUQsRUFBQSxTQUFBLE9BQUEsQ0FBUW9SLEtBQUssRUFBRTtFQUFBLE1BQUEsSUFBQSxNQUFBLEdBQUEsSUFBQSxDQUFBO1FBQ2IsSUFBSSxDQUFDaUUsWUFBWSxHQUFJN0QsT0FBTyxJQUFLSixLQUFLLFlBQVl4UCxNQUFNLENBQUM4VCxVQUFZLENBQUE7RUFFckUsTUFBQSxJQUFJLElBQUksQ0FBQ0wsWUFBWSxJQUFJLENBQUN2RCxZQUFZLENBQUNWLEtBQUssRUFBRSxJQUFJLENBQUM2RSxRQUFRLENBQUMsRUFBRTtFQUM1RCxRQUFBLE9BQUE7RUFDRixPQUFBO1FBRUEsSUFBSSxJQUFJLENBQUNlLFVBQVUsRUFBRTtVQUNuQjVGLEtBQUssQ0FBQ3FFLGVBQWUsRUFBRSxDQUFBO1VBQ3ZCckUsS0FBSyxDQUFDQyxjQUFjLEVBQUUsQ0FBQTtFQUN4QixPQUFBO1FBRUEsSUFBSSxDQUFDeEMsYUFBYSxFQUFFLENBQUE7RUFDcEIsTUFBQSxJQUFJLENBQUM3QixJQUFJLENBQUMsVUFBVSxDQUFDLENBQUE7UUFDckIsSUFBSSxDQUFDMkosY0FBYyxFQUFFLENBQUE7RUFFckJRLE1BQUFBLFVBQVUsQ0FBQyxZQUFBO1VBQUEsT0FBTSxNQUFJLENBQUNoWSxPQUFPLENBQUMrWCxTQUFTLENBQUN6SSxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUE7U0FBQyxDQUFBLENBQUE7RUFDbEUsS0FBQTtFQUFDLEdBQUEsRUFBQTtFQUFBLElBQUEsR0FBQSxFQUFBLFVBQUE7TUFBQSxLQUVELEVBQUEsU0FBQSxRQUFBLENBQVMySSxNQUFNLEVBQUU7UUFDZixJQUFJdFIsS0FBSyxHQUFHLElBQUksQ0FBQ2dQLGNBQWMsQ0FBQzlVLEdBQUcsQ0FBQyxJQUFJLENBQUMyVixVQUFVLENBQUNyVixHQUFHLENBQUMsSUFBSSxDQUFDc1YsZ0JBQWdCLENBQUMsQ0FBQyxDQUMvQzVWLEdBQUcsQ0FBQyxJQUFJLENBQUNtVyxpQkFBaUIsQ0FBQzdWLEdBQUcsQ0FBQyxJQUFJLENBQUM0Vix1QkFBdUIsQ0FBQyxDQUFDLENBQzdEbFcsR0FBRyxDQUFDLElBQUksQ0FBQ3FXLGtCQUFrQixDQUFDL1YsR0FBRyxDQUFDLElBQUksQ0FBQzhWLHdCQUF3QixDQUFDLENBQUMsQ0FBQTtFQUUvRnRRLE1BQUFBLEtBQUssR0FBRyxJQUFJLENBQUNxSCxRQUFRLENBQUMzRixLQUFLLENBQUMxQixLQUFLLEVBQUUsSUFBSSxDQUFDb0ksT0FBTyxFQUFFLENBQUMsQ0FBQTtFQUNsRCxNQUFBLElBQUksQ0FBQyxJQUFJLENBQUNvSCxpQkFBaUIsRUFBRTtFQUMzQixRQUFBLElBQUksQ0FBQzJCLGtCQUFrQixDQUFDblIsS0FBSyxDQUFDLENBQUE7RUFDOUIsUUFBQSxJQUFJLENBQUN1SSxJQUFJLENBQUN2SSxLQUFLLENBQUMsQ0FBQTtFQUNsQixPQUFBO0VBQ0YsS0FBQTtFQUFDLEdBQUEsRUFBQTtFQUFBLElBQUEsR0FBQSxFQUFBLGlCQUFBO01BQUEsS0FFRCxFQUFBLFNBQUEsZUFBQSxDQUFnQnNMLEtBQUssRUFBRTtRQUNyQkEsS0FBSyxDQUFDcUUsZUFBZSxFQUFFLENBQUE7UUFDdkJyRSxLQUFLLENBQUNpRyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsYUFBYSxDQUFDLENBQUE7RUFDakRsRyxNQUFBQSxLQUFLLENBQUNpRyxZQUFZLENBQUNFLGFBQWEsR0FBRyxNQUFNLENBQUE7UUFDekNuVyxRQUFRLENBQUNnUCxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDbUQsZUFBZSxDQUFDLENBQUE7UUFDM0RuUyxRQUFRLENBQUNnUCxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDc0QsY0FBYyxDQUFDLENBQUE7UUFDekR0UyxRQUFRLENBQUNnUCxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDd0QsV0FBVyxDQUFDLENBQUE7RUFDckQsS0FBQTtFQUFDLEdBQUEsRUFBQTtFQUFBLElBQUEsR0FBQSxFQUFBLGdCQUFBO01BQUEsS0FFRCxFQUFBLFNBQUEsY0FBQSxDQUFleEMsS0FBSyxFQUFFO1FBQ3BCQSxLQUFLLENBQUNDLGNBQWMsRUFBRSxDQUFBO0VBQ3RCRCxNQUFBQSxLQUFLLENBQUNpRyxZQUFZLENBQUNHLFVBQVUsR0FBRyxNQUFNLENBQUE7UUFDdEMsSUFBSSxDQUFDclksT0FBTyxDQUFDK1gsU0FBUyxDQUFDbFgsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUE7UUFDaEQsSUFBSW9SLEtBQUssQ0FBQzBFLE9BQU8sS0FBSyxDQUFDLElBQUkxRSxLQUFLLENBQUM0RSxPQUFPLEtBQUssQ0FBQyxFQUFFO0VBQzlDLFFBQUEsT0FBQTtFQUNGLE9BQUE7RUFFQSxNQUFBLElBQUksQ0FBQ0wsVUFBVSxHQUFHLElBQUk3VyxLQUFLLENBQUNzUyxLQUFLLENBQUMwRSxPQUFPLEVBQUUxRSxLQUFLLENBQUM0RSxPQUFPLENBQUMsQ0FBQTtRQUN6RCxJQUFJbFEsS0FBSyxHQUFHLElBQUksQ0FBQ2dQLGNBQWMsQ0FBQzlVLEdBQUcsQ0FBQyxJQUFJLENBQUMyVixVQUFVLENBQUNyVixHQUFHLENBQUMsSUFBSSxDQUFDc1YsZ0JBQWdCLENBQUMsQ0FBQyxDQUMvQzVWLEdBQUcsQ0FBQyxJQUFJLENBQUNtVyxpQkFBaUIsQ0FBQzdWLEdBQUcsQ0FBQyxJQUFJLENBQUM0Vix1QkFBdUIsQ0FBQyxDQUFDLENBQzdEbFcsR0FBRyxDQUFDLElBQUksQ0FBQ3FXLGtCQUFrQixDQUFDL1YsR0FBRyxDQUFDLElBQUksQ0FBQzhWLHdCQUF3QixDQUFDLENBQUMsQ0FBQTtFQUMvRnRRLE1BQUFBLEtBQUssR0FBRyxJQUFJLENBQUNxSCxRQUFRLENBQUMzRixLQUFLLENBQUMxQixLQUFLLEVBQUUsSUFBSSxDQUFDb0ksT0FBTyxFQUFFLENBQUMsQ0FBQTtFQUNsRCxNQUFBLElBQUksQ0FBQytJLGtCQUFrQixDQUFDblIsS0FBSyxDQUFDLENBQUE7UUFDOUIsSUFBSSxDQUFDaEcsUUFBUSxHQUFHZ0csS0FBSyxDQUFBO0VBQ3JCLE1BQUEsSUFBSSxDQUFDa0gsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO0VBQ3hCLEtBQUE7RUFBQyxHQUFBLEVBQUE7RUFBQSxJQUFBLEdBQUEsRUFBQSxlQUFBO01BQUEsS0FFRCxFQUFBLFNBQUEsYUFBQSxDQUFjb0ssTUFBTSxFQUFFO0VBQUEsTUFBQSxJQUFBLE1BQUEsR0FBQSxJQUFBLENBQUE7UUFDcEIsSUFBSSxDQUFDalksT0FBTyxDQUFDK1gsU0FBUyxDQUFDekksTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUE7UUFDbkQsSUFBSSxDQUFDSSxhQUFhLEVBQUUsQ0FBQTtFQUNwQixNQUFBLElBQUksQ0FBQzdCLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUNyQjVMLFFBQVEsQ0FBQ2lQLG1CQUFtQixDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUNrRCxlQUFlLENBQUMsQ0FBQTtRQUM5RG5TLFFBQVEsQ0FBQ2lQLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUNxRCxjQUFjLENBQUMsQ0FBQTtRQUM1RHRTLFFBQVEsQ0FBQ2lQLG1CQUFtQixDQUFDb0IsV0FBVyxDQUFDQyxHQUFHLEVBQUUsSUFBSSxDQUFDZ0MsY0FBYyxDQUFDLENBQUE7UUFDbEV0UyxRQUFRLENBQUNpUCxtQkFBbUIsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDdUQsV0FBVyxDQUFDLENBQUE7UUFDdERoUyxNQUFNLENBQUN5TyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDeUQsT0FBTyxDQUFDLENBQUE7RUFDbEQsTUFBQSxJQUFJLENBQUNnRCxPQUFPLENBQUM1TSxPQUFPLENBQUMsVUFBQ2pMLENBQUMsRUFBQTtVQUFBLE9BQUtBLENBQUMsQ0FBQ29SLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxNQUFJLENBQUN5RCxPQUFPLENBQUMsQ0FBQTtTQUFDLENBQUEsQ0FBQTtRQUMxRSxJQUFJLENBQUNrRCxVQUFVLEdBQUcsS0FBSyxDQUFBO0VBQ3ZCLE1BQUEsSUFBSSxDQUFDN1gsT0FBTyxDQUFDc1ksZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQ3pDLElBQUksQ0FBQ3RZLE9BQU8sQ0FBQ2tSLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUNnRCxnQkFBZ0IsQ0FBQyxDQUFBO1FBQ3BFLElBQUksQ0FBQ2xVLE9BQU8sQ0FBQytYLFNBQVMsQ0FBQ3pJLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQTtFQUNoRCxLQUFBO0VBQUMsR0FBQSxFQUFBO0VBQUEsSUFBQSxHQUFBLEVBQUEsWUFBQTtNQUFBLEtBRUQsRUFBQSxTQUFBLFVBQUEsQ0FBVzJDLEtBQUssRUFBRTtRQUNoQkEsS0FBSyxDQUFDcUUsZUFBZSxFQUFFLENBQUE7UUFDdkJyRSxLQUFLLENBQUNDLGNBQWMsRUFBRSxDQUFBO0VBQ3hCLEtBQUE7RUFBQyxHQUFBLEVBQUE7RUFBQSxJQUFBLEdBQUEsRUFBQSxnQkFBQTtFQUFBLElBQUEsS0FBQSxFQUVELFNBQWtCLGNBQUEsR0FBQTtFQUFBLE1BQUEsSUFBQSxNQUFBLEdBQUEsSUFBQSxDQUFBO1FBQ2hCalEsUUFBUSxDQUFDaVAsbUJBQW1CLENBQUNzQixXQUFXLENBQUN0RCxJQUFJLEVBQUUsSUFBSSxDQUFDNEUsU0FBUyxDQUFDLENBQUE7UUFDOUQ3UixRQUFRLENBQUNpUCxtQkFBbUIsQ0FBQ29CLFdBQVcsQ0FBQ3BELElBQUksRUFBRSxJQUFJLENBQUM0RSxTQUFTLENBQUMsQ0FBQTtRQUU5RDdSLFFBQVEsQ0FBQ2lQLG1CQUFtQixDQUFDc0IsV0FBVyxDQUFDRCxHQUFHLEVBQUUsSUFBSSxDQUFDeUIsUUFBUSxDQUFDLENBQUE7UUFDNUQvUixRQUFRLENBQUNpUCxtQkFBbUIsQ0FBQ29CLFdBQVcsQ0FBQ0MsR0FBRyxFQUFFLElBQUksQ0FBQ3lCLFFBQVEsQ0FBQyxDQUFBO1FBRTVEL1IsUUFBUSxDQUFDaVAsbUJBQW1CLENBQUNvQixXQUFXLENBQUNDLEdBQUcsRUFBRSxJQUFJLENBQUNnQyxjQUFjLENBQUMsQ0FBQTtRQUVsRTlSLE1BQU0sQ0FBQ3lPLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUN5RCxPQUFPLENBQUMsQ0FBQTtFQUNsRCxNQUFBLElBQUksQ0FBQ2dELE9BQU8sQ0FBQzVNLE9BQU8sQ0FBQyxVQUFDakwsQ0FBQyxFQUFBO1VBQUEsT0FBS0EsQ0FBQyxDQUFDb1IsbUJBQW1CLENBQUMsUUFBUSxFQUFFLE1BQUksQ0FBQ3lELE9BQU8sQ0FBQyxDQUFBO1NBQUMsQ0FBQSxDQUFBO1FBRTFFLElBQUksQ0FBQ2tELFVBQVUsR0FBRyxLQUFLLENBQUE7UUFDdkIsSUFBSSxDQUFDbkMsMEJBQTBCLEdBQUcsSUFBSSxDQUFBO0VBQ3RDLE1BQUEsSUFBSSxDQUFDMVYsT0FBTyxDQUFDc1ksZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQ3pDLElBQUksQ0FBQ3RZLE9BQU8sQ0FBQ2tSLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUNnRCxnQkFBZ0IsQ0FBQyxDQUFBO0VBQ3RFLEtBQUE7RUFBQyxHQUFBLEVBQUE7RUFBQSxJQUFBLEdBQUEsRUFBQSxZQUFBO0VBQUEsSUFBQSxLQUFBLEVBRUQsU0FBV2hCLFVBQUFBLENBQUFBLE1BQU0sRUFBRUMsV0FBVyxFQUFFO0VBQzlCLE1BQUEsSUFBSSxJQUFJLENBQUN0USxPQUFPLENBQUNvUSxVQUFVLEVBQUU7VUFDM0IsSUFBSSxDQUFDcFEsT0FBTyxDQUFDb1EsVUFBVSxDQUFDQyxNQUFNLEVBQUVDLFdBQVcsQ0FBQyxDQUFBO0VBQzlDLE9BQUMsTUFBTTtFQUNMRixRQUFBQSxXQUFVLENBQUNDLE1BQU0sRUFBRUMsV0FBVyxDQUFDLENBQUE7RUFDakMsT0FBQTtFQUNGLEtBQUE7RUFBQyxHQUFBLEVBQUE7RUFBQSxJQUFBLEdBQUEsRUFBQSwwQkFBQTtNQUFBLEtBRUQsRUFBQSxTQUFBLHdCQUFBLENBQXlCbEIsS0FBSyxFQUFFO0VBQUEsTUFBQSxJQUFBLE1BQUEsR0FBQSxJQUFBLENBQUE7RUFDOUIsTUFBQSxJQUFNc0csYUFBYSxHQUFHLElBQUksQ0FBQy9WLFNBQVMsQ0FBQ3BDLHFCQUFxQixFQUFFLENBQUE7UUFDNUQsSUFBTW9ZLGFBQWEsR0FBRyxJQUFJLENBQUN4WSxPQUFPLENBQUN5WSxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUE7RUFDbERELE1BQUFBLGFBQWEsQ0FBQ3JXLEtBQUssQ0FBQ3NRLGlCQUFpQixDQUFDLEdBQUcsRUFBRSxDQUFBO1FBQzNDLElBQUksQ0FBQ1EsVUFBVSxDQUFDLElBQUksQ0FBQ2pULE9BQU8sRUFBRXdZLGFBQWEsQ0FBQyxDQUFBO0VBQzVDQSxNQUFBQSxhQUFhLENBQUNyVyxLQUFLLENBQUN4QixRQUFRLEdBQUcsVUFBVSxDQUFBO0VBQ3pDc0IsTUFBQUEsUUFBUSxDQUFDeVcsSUFBSSxDQUFDQyxXQUFXLENBQUNILGFBQWEsQ0FBQyxDQUFBO1FBQ3hDLElBQUksQ0FBQ3hZLE9BQU8sQ0FBQytYLFNBQVMsQ0FBQ2xYLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFBO0VBRWhELE1BQUEsSUFBTStYLGtCQUFrQixHQUFHLElBQUluSSxTQUFTLENBQUMrSCxhQUFhLEVBQUU7VUFDdERoVyxTQUFTLEVBQUVQLFFBQVEsQ0FBQ3lXLElBQUk7RUFDeEJ6QyxRQUFBQSxzQkFBc0IsRUFBRSxDQUFDO1VBQ3pCNU4sS0FBSyxFQUFBLFNBQUEsS0FBQSxDQUFDMUIsS0FBSyxFQUFFO0VBQ1gsVUFBQSxPQUFPQSxLQUFLLENBQUE7V0FDYjtFQUNENUQsUUFBQUEsRUFBRSxFQUFFO0VBQ0YsVUFBQSxXQUFXLEVBQUUsU0FBTSxRQUFBLEdBQUE7RUFDakIsWUFBQSxJQUFNOFYsa0JBQWtCLEdBQUcsSUFBSWxaLEtBQUssQ0FBQzRZLGFBQWEsQ0FBQ2pZLElBQUksRUFBRWlZLGFBQWEsQ0FBQ2hZLEdBQUcsQ0FBQyxDQUFBO2NBQzNFLE1BQUksQ0FBQ0ksUUFBUSxHQUFHaVksa0JBQWtCLENBQUNqWSxRQUFRLENBQUNRLEdBQUcsQ0FBQzBYLGtCQUFrQixDQUFDLENBQ3ZCMVgsR0FBRyxDQUFDLE1BQUksQ0FBQzRWLHVCQUF1QixDQUFDLENBQ2pDbFcsR0FBRyxDQUFDLE1BQUksQ0FBQ29XLHdCQUF3QixDQUFDLENBQUE7RUFFOUUsWUFBQSxNQUFJLENBQUNhLGtCQUFrQixDQUFDLE1BQUksQ0FBQ25YLFFBQVEsQ0FBQyxDQUFBO0VBQ3RDLFlBQUEsTUFBSSxDQUFDa04sSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO2FBQ3ZCO0VBQ0QsVUFBQSxVQUFVLEVBQUUsU0FBTSxPQUFBLEdBQUE7Y0FDaEIrSyxrQkFBa0IsQ0FBQ0UsT0FBTyxFQUFFLENBQUE7RUFDNUI3VyxZQUFBQSxRQUFRLENBQUN5VyxJQUFJLENBQUNLLFdBQVcsQ0FBQ1AsYUFBYSxDQUFDLENBQUE7Y0FDeEMsTUFBSSxDQUFDeFksT0FBTyxDQUFDK1gsU0FBUyxDQUFDekksTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUE7Y0FDbkQsTUFBSSxDQUFDdFAsT0FBTyxDQUFDK1gsU0FBUyxDQUFDekksTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFBO0VBRTlDLFlBQUEsTUFBSSxDQUFDekIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO2NBQ3JCLE1BQUksQ0FBQzZCLGFBQWEsRUFBRSxDQUFBO2NBQ3BCLE1BQUksQ0FBQzhILGNBQWMsRUFBRSxDQUFBO0VBQ3ZCLFdBQUE7RUFDRixTQUFBO0VBQ0YsT0FBQyxDQUFDLENBQUE7RUFFRixNQUFBLElBQU1xQixrQkFBa0IsR0FBRyxJQUFJbFosS0FBSyxDQUFDNFksYUFBYSxDQUFDalksSUFBSSxFQUFFaVksYUFBYSxDQUFDaFksR0FBRyxDQUFDLENBQUE7RUFDM0VxWSxNQUFBQSxrQkFBa0IsQ0FBQzdCLHVCQUF1QixHQUFHLElBQUksQ0FBQ0EsdUJBQXVCLENBQUE7UUFFekU2QixrQkFBa0IsQ0FBQzFKLElBQUksQ0FDckIsSUFBSSxDQUFDeUUsY0FBYyxDQUFDOVMsR0FBRyxDQUFDZ1ksa0JBQWtCLENBQUMsQ0FDdkJoWSxHQUFHLENBQUMsSUFBSSxDQUFDbVcsaUJBQWlCLENBQUMsQ0FDM0I3VixHQUFHLENBQUMsSUFBSSxDQUFDK1Ysa0JBQWtCLENBQUMsQ0FDakQsQ0FBQTtFQUVEMEIsTUFBQUEsa0JBQWtCLENBQUMvRSxTQUFTLENBQUM1QixLQUFLLENBQUMsQ0FBQTtRQUNuQ0EsS0FBSyxDQUFDQyxjQUFjLEVBQUUsQ0FBQTtFQUN4QixLQUFBO0VBQUMsR0FBQSxFQUFBO0VBQUEsSUFBQSxHQUFBLEVBQUEsZUFBQTtFQUFBLElBQUEsS0FBQSxFQUVELFNBQWdCLGFBQUEsR0FBQTtFQUNkLE1BQUEsSUFBSSxDQUFDbEMsV0FBVyxDQUFDLElBQUksQ0FBQ3JQLFFBQVEsQ0FBQyxDQUFBO0VBQ2pDLEtBQUE7RUFBQyxHQUFBLEVBQUE7RUFBQSxJQUFBLEdBQUEsRUFBQSxjQUFBO0VBQUEsSUFBQSxLQUFBLEVBRUQsU0FBZSxZQUFBLEdBQUE7UUFDYixPQUFPLElBQUlELFNBQVMsQ0FBQyxJQUFJLENBQUNDLFFBQVEsRUFBRSxJQUFJLENBQUNvTyxPQUFPLEVBQUUsQ0FBQyxDQUFBO0VBQ3JELEtBQUE7RUFBQyxHQUFBLEVBQUE7RUFBQSxJQUFBLEdBQUEsRUFBQSxTQUFBO0VBQUEsSUFBQSxLQUFBLEVBRUQsU0FBVSxPQUFBLEdBQUE7RUFDUixNQUFBLElBQUksSUFBSSxDQUFDZixRQUFRLENBQUNrQyxPQUFPLEVBQUU7RUFDekIsUUFBQSxJQUFJLENBQUNsQyxRQUFRLENBQUNrQyxPQUFPLEVBQUUsQ0FBQTtFQUN6QixPQUFBO0VBQ0YsS0FBQTtFQUFDLEdBQUEsRUFBQTtFQUFBLElBQUEsR0FBQSxFQUFBLFNBQUE7RUFBQSxJQUFBLEtBQUEsRUFFRCxTQUFVLE9BQUEsR0FBQTtFQUNSLE1BQUEsSUFBSSxDQUFDMkUsT0FBTyxDQUFDM0QsbUJBQW1CLENBQUNzQixXQUFXLENBQUNwSSxLQUFLLEVBQUUsSUFBSSxDQUFDd0osVUFBVSxDQUFDLENBQUE7RUFDcEUsTUFBQSxJQUFJLENBQUNpQixPQUFPLENBQUMzRCxtQkFBbUIsQ0FBQ29CLFdBQVcsQ0FBQ2xJLEtBQUssRUFBRSxJQUFJLENBQUN3SixVQUFVLENBQUMsQ0FBQTtRQUNwRSxJQUFJLENBQUM1VCxPQUFPLENBQUNrUixtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDZ0QsZ0JBQWdCLENBQUMsQ0FBQTtRQUNwRWpTLFFBQVEsQ0FBQ2lQLG1CQUFtQixDQUFDc0IsV0FBVyxDQUFDdEQsSUFBSSxFQUFFLElBQUksQ0FBQzRFLFNBQVMsQ0FBQyxDQUFBO1FBQzlEN1IsUUFBUSxDQUFDaVAsbUJBQW1CLENBQUNvQixXQUFXLENBQUNwRCxJQUFJLEVBQUUsSUFBSSxDQUFDNEUsU0FBUyxDQUFDLENBQUE7UUFDOUQ3UixRQUFRLENBQUNpUCxtQkFBbUIsQ0FBQ3NCLFdBQVcsQ0FBQ0QsR0FBRyxFQUFFLElBQUksQ0FBQ3lCLFFBQVEsQ0FBQyxDQUFBO1FBQzVEL1IsUUFBUSxDQUFDaVAsbUJBQW1CLENBQUNvQixXQUFXLENBQUNDLEdBQUcsRUFBRSxJQUFJLENBQUN5QixRQUFRLENBQUMsQ0FBQTtRQUM1RC9SLFFBQVEsQ0FBQ2lQLG1CQUFtQixDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUNrRCxlQUFlLENBQUMsQ0FBQTtRQUM5RG5TLFFBQVEsQ0FBQ2lQLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUNxRCxjQUFjLENBQUMsQ0FBQTtRQUM1RHRTLFFBQVEsQ0FBQ2lQLG1CQUFtQixDQUFDb0IsV0FBVyxDQUFDQyxHQUFHLEVBQUUsSUFBSSxDQUFDZ0MsY0FBYyxDQUFDLENBQUE7UUFDbEV0UyxRQUFRLENBQUNpUCxtQkFBbUIsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDdUQsV0FBVyxDQUFDLENBQUE7UUFDdEQsSUFBSSxDQUFDdUUsWUFBWSxFQUFFLENBQUE7RUFFbkIsTUFBQSxJQUFNcFYsS0FBSyxHQUFHOEgsVUFBVSxDQUFDN0gsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBO0VBQ3RDLE1BQUEsSUFBSUQsS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFO0VBQ2Q4SCxRQUFBQSxVQUFVLENBQUM1SCxNQUFNLENBQUNGLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQTtFQUM3QixPQUFBO0VBQ0YsS0FBQTtFQUFDLEdBQUEsRUFBQTtFQUFBLElBQUEsR0FBQSxFQUFBLFdBQUE7RUFBQSxJQUFBLEdBQUEsRUFFRCxTQUFnQixHQUFBLEdBQUE7UUFDZCxPQUFRLElBQUksQ0FBQzRMLFVBQVUsR0FBRyxJQUFJLENBQUNBLFVBQVUsSUFBSSxJQUFJLENBQUMzTSxPQUFPLENBQUNMLFNBQVMsSUFBSSxJQUFJLENBQUNLLE9BQU8sQ0FBQzVDLE1BQU0sSUFBSXNDLG1CQUFtQixDQUFDLElBQUksQ0FBQ3ZDLE9BQU8sQ0FBQyxDQUFBO0VBQ2pJLEtBQUE7RUFBQyxHQUFBLEVBQUE7RUFBQSxJQUFBLEdBQUEsRUFBQSxTQUFBO0VBQUEsSUFBQSxHQUFBLEVBRUQsU0FBYyxHQUFBLEdBQUE7RUFDWixNQUFBLElBQUksQ0FBQyxJQUFJLENBQUNpWixRQUFRLEVBQUU7VUFDbEIsSUFBSSxPQUFPLElBQUksQ0FBQ3BXLE9BQU8sQ0FBQ2dTLE9BQU8sS0FBSyxRQUFRLEVBQUU7RUFDNUMsVUFBQSxJQUFJLENBQUNvRSxRQUFRLEdBQUcsSUFBSSxDQUFDalosT0FBTyxDQUFDa0MsYUFBYSxDQUFDLElBQUksQ0FBQ1csT0FBTyxDQUFDZ1MsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDN1UsT0FBTyxDQUFBO0VBQ2xGLFNBQUMsTUFBTTtZQUNMLElBQUksQ0FBQ2laLFFBQVEsR0FBRyxJQUFJLENBQUNwVyxPQUFPLENBQUNnUyxPQUFPLElBQUksSUFBSSxDQUFDN1UsT0FBTyxDQUFBO0VBQ3RELFNBQUE7RUFDRixPQUFBO1FBRUEsT0FBTyxJQUFJLENBQUNpWixRQUFRLENBQUE7RUFDdEIsS0FBQTtFQUFDLEdBQUEsRUFBQTtFQUFBLElBQUEsR0FBQSxFQUFBLDRCQUFBO0VBQUEsSUFBQSxHQUFBLEVBRUQsU0FBaUMsR0FBQSxHQUFBO0VBQy9CLE1BQUEsT0FBTyxJQUFJLENBQUNwVyxPQUFPLENBQUN3VCwwQkFBMEIsSUFBSSxLQUFLLENBQUE7RUFDekQsS0FBQTtFQUFDLEdBQUEsRUFBQTtFQUFBLElBQUEsR0FBQSxFQUFBLG1CQUFBO0VBQUEsSUFBQSxHQUFBLEVBRUQsU0FBd0IsR0FBQSxHQUFBO0VBQ3RCLE1BQUEsT0FBTyxJQUFJLENBQUN4VCxPQUFPLENBQUNzVCxpQkFBaUIsSUFBSSxLQUFLLENBQUE7RUFDaEQsS0FBQTtFQUFDLEdBQUEsRUFBQTtFQUFBLElBQUEsR0FBQSxFQUFBLGlDQUFBO0VBQUEsSUFBQSxHQUFBLEVBRUQsU0FBc0MsR0FBQSxHQUFBO0VBQ3BDLE1BQUEsT0FBTyxJQUFJLENBQUN0VCxPQUFPLENBQUN1VCwrQkFBK0IsSUFBSSxLQUFLLENBQUE7RUFDOUQsS0FBQTtFQUFDLEdBQUEsRUFBQTtFQUFBLElBQUEsR0FBQSxFQUFBLDJCQUFBO0VBQUEsSUFBQSxHQUFBLEVBRUQsU0FBZ0MsR0FBQSxHQUFBO0VBQzlCLE1BQUEsT0FBTyxJQUFJLENBQUN2VCxPQUFPLENBQUN3Uyx5QkFBeUIsSUFBSSxLQUFLLENBQUE7RUFDeEQsS0FBQTtFQUFDLEdBQUEsRUFBQTtFQUFBLElBQUEsR0FBQSxFQUFBLHdCQUFBO0VBQUEsSUFBQSxHQUFBLEVBRUQsU0FBNkIsR0FBQSxHQUFBO0VBQzNCLE1BQUEsT0FBTyxJQUFJLENBQUN4UyxPQUFPLENBQUNvVCxzQkFBc0IsSUFBSSxDQUFDLENBQUE7RUFDakQsS0FBQTtFQUFDLEdBQUEsRUFBQTtFQUFBLElBQUEsR0FBQSxFQUFBLDBCQUFBO0VBQUEsSUFBQSxHQUFBLEVBRUQsU0FBK0IsR0FBQSxHQUFBO0VBQzdCLE1BQUEsT0FBTyxJQUFJLENBQUNwVCxPQUFPLENBQUN5Uix3QkFBd0IsSUFBSSxFQUFFLENBQUE7RUFDcEQsS0FBQTtFQUFDLEdBQUEsRUFBQTtFQUFBLElBQUEsR0FBQSxFQUFBLG1CQUFBO0VBQUEsSUFBQSxHQUFBLEVBRUQsU0FBd0IsR0FBQSxHQUFBO1FBQ3RCLE9BQU8sSUFBSTNVLEtBQUssQ0FBQzhDLE1BQU0sQ0FBQ3lXLE9BQU8sRUFBRXpXLE1BQU0sQ0FBQzBXLE9BQU8sQ0FBQyxDQUFBO0VBQ2xELEtBQUE7RUFBQyxHQUFBLEVBQUE7RUFBQSxJQUFBLEdBQUEsRUFBQSxTQUFBO0VBQUEsSUFBQSxHQUFBLEVBRUQsU0FBYyxHQUFBLEdBQUE7RUFDWixNQUFBLElBQUksSUFBSSxDQUFDQyxjQUFjLEVBQUUsT0FBTyxJQUFJLENBQUNBLGNBQWMsQ0FBQTtRQUVuRCxJQUFJLENBQUNBLGNBQWMsR0FBRyxFQUFFLENBQUE7RUFDeEIsTUFBQSxJQUFJcFosT0FBTyxHQUFHLElBQUksQ0FBQ0EsT0FBTyxDQUFBO1FBRTFCLE9BQU1BLE9BQU8sQ0FBQ0UsVUFBVSxJQUFJRixPQUFPLElBQUksSUFBSSxDQUFDd0MsU0FBUyxFQUFFO1VBQ3JELElBQUksQ0FBQzRXLGNBQWMsQ0FBQ3pWLE9BQU8sQ0FBQzNELE9BQU8sQ0FBQ0UsVUFBVSxDQUFDLENBQUE7VUFDL0NGLE9BQU8sR0FBR0EsT0FBTyxDQUFDRSxVQUFVLENBQUE7RUFDOUIsT0FBQTtRQUVBLE9BQU8sSUFBSSxDQUFDa1osY0FBYyxDQUFBO0VBQzVCLEtBQUE7RUFBQyxHQUFBLEVBQUE7RUFBQSxJQUFBLEdBQUEsRUFBQSxvQkFBQTtFQUFBLElBQUEsR0FBQSxFQUVELFNBQXlCLEdBQUEsR0FBQTtFQUN2QixNQUFBLE9BQU8sSUFBSXpaLEtBQUssQ0FDZCxJQUFJLENBQUNnWSxPQUFPLENBQUMvTSxNQUFNLENBQUMsVUFBQ3lPLEdBQUcsRUFBRXZaLENBQUMsRUFBQTtFQUFBLFFBQUEsT0FBS3VaLEdBQUcsR0FBR3ZaLENBQUMsQ0FBQ3daLFVBQVUsQ0FBQTtFQUFBLE9BQUEsRUFBRSxDQUFDLENBQUMsRUFDdEQsSUFBSSxDQUFDM0IsT0FBTyxDQUFDL00sTUFBTSxDQUFDLFVBQUN5TyxHQUFHLEVBQUV2WixDQUFDLEVBQUE7RUFBQSxRQUFBLE9BQUt1WixHQUFHLEdBQUd2WixDQUFDLENBQUN5WixTQUFTLENBQUE7U0FBRSxFQUFBLENBQUMsQ0FBQyxDQUN0RCxDQUFBO0VBQ0gsS0FBQTtFQUFDLEdBQUEsRUFBQTtFQUFBLElBQUEsR0FBQSxFQUFBLFFBQUE7RUFBQSxJQUFBLEdBQUEsRUFFRCxTQUFhLEdBQUEsR0FBQTtRQUNYLE9BQU8sSUFBSSxDQUFDaEcsT0FBTyxDQUFBO09BQ3BCO01BQUEsR0FFRCxFQUFBLFNBQUEsR0FBQSxDQUFXaUcsTUFBTSxFQUFFO0VBQ2pCLE1BQUEsSUFBSUEsTUFBTSxFQUFFO1VBQ1YsSUFBSSxDQUFDeFosT0FBTyxDQUFDK1gsU0FBUyxDQUFDekksTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUE7RUFDakQsT0FBQyxNQUFNO1VBQ0wsSUFBSSxDQUFDdFAsT0FBTyxDQUFDK1gsU0FBUyxDQUFDbFgsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUE7RUFDOUMsT0FBQTtRQUVBLElBQUksQ0FBQzBTLE9BQU8sR0FBR2lHLE1BQU0sQ0FBQTtFQUN2QixLQUFBO0VBQUMsR0FBQSxDQUFBLENBQUEsQ0FBQTtFQUFBLEVBQUEsT0FBQSxTQUFBLENBQUE7RUFBQSxDQUFBLENBdGhCb0M1VyxZQUFZLEVBQUE7RUF5aEJuRDZOLFNBQVMsQ0FBQzdDLE9BQU8sR0FBRyxJQUFJaEwsWUFBWSxFQUFFLENBQUE7RUFDdEM2TixTQUFTLENBQUM3QyxPQUFPLENBQUM3SyxFQUFFLENBQUMsa0JBQWtCLEVBQUVrSyxpQkFBaUIsQ0FBQzs7RUNobUI1QyxTQUFTd00sUUFBUSxDQUFDaFcsSUFBSSxFQUFFNk4sSUFBSSxFQUFFb0ksU0FBUyxFQUFFO0VBQ3RELEVBQUEsSUFBSUMsT0FBTyxDQUFBO0lBRVgsT0FBTyxTQUFTbkksZ0JBQWdCLEdBQUc7TUFDakMsSUFBTUMsT0FBTyxHQUFHLElBQUksQ0FBQTtNQUNwQixJQUFNcE8sSUFBSSxHQUFHRyxTQUFTLENBQUE7RUFFdEIsSUFBQSxJQUFNb1csS0FBSyxHQUFHLFNBQVJBLEtBQUssR0FBYztFQUN2QkQsTUFBQUEsT0FBTyxHQUFHLElBQUksQ0FBQTtRQUNkLElBQUksQ0FBQ0QsU0FBUyxFQUFFalcsSUFBSSxDQUFDbU8sS0FBSyxDQUFDSCxPQUFPLEVBQUVwTyxJQUFJLENBQUMsQ0FBQTtPQUMxQyxDQUFBO0VBRUQsSUFBQSxJQUFNd1csT0FBTyxHQUFHSCxTQUFTLElBQUksQ0FBQ0MsT0FBTyxDQUFBO01BRXJDRyxZQUFZLENBQUNILE9BQU8sQ0FBQyxDQUFBO0VBRXJCQSxJQUFBQSxPQUFPLEdBQUczQixVQUFVLENBQUM0QixLQUFLLEVBQUV0SSxJQUFJLENBQUMsQ0FBQTtNQUVqQyxJQUFJdUksT0FBTyxFQUFFcFcsSUFBSSxDQUFDbU8sS0FBSyxDQUFDSCxPQUFPLEVBQUVwTyxJQUFJLENBQUMsQ0FBQTtLQUN2QyxDQUFBO0VBQ0g7O0FDWm1DLE1BRWQwVyxJQUFJLGdCQUFBLFVBQUEsYUFBQSxFQUFBO0VBQUEsRUFBQSxTQUFBLENBQUEsSUFBQSxFQUFBLGFBQUEsQ0FBQSxDQUFBO0VBQUEsRUFBQSxJQUFBLE1BQUEsR0FBQSxZQUFBLENBQUEsSUFBQSxDQUFBLENBQUE7RUFDdkIsRUFBQSxTQUFBLElBQUEsQ0FBWXJPLFVBQVUsRUFBYztFQUFBLElBQUEsSUFBQSxLQUFBLENBQUE7TUFBQSxJQUFaN0ksT0FBTyxHQUFDLFNBQUEsQ0FBQSxNQUFBLEdBQUEsQ0FBQSxJQUFBLFNBQUEsQ0FBQSxDQUFBLENBQUEsS0FBQSxTQUFBLEdBQUEsU0FBQSxDQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUUsQ0FBQTtFQUFBLElBQUEsZUFBQSxDQUFBLElBQUEsRUFBQSxJQUFBLENBQUEsQ0FBQTtFQUNoQyxJQUFBLEtBQUEsR0FBQSxNQUFBLENBQUEsSUFBQSxDQUFBLElBQUEsRUFBTUEsT0FBTyxDQUFBLENBQUE7RUFDYixJQUFBLEtBQUEsQ0FBS0EsT0FBTyxHQUFHRyxNQUFNLENBQUM4SSxNQUFNLENBQUM7RUFDM0J3QixNQUFBQSxPQUFPLEVBQUUsR0FBRztFQUNaQyxNQUFBQSxXQUFXLEVBQUUsR0FBRztFQUNoQjFJLE1BQUFBLE1BQU0sRUFBRSxFQUFBO09BQ1QsRUFBRWhDLE9BQU8sQ0FBQyxDQUFBO0VBRVgsSUFBQSxLQUFBLENBQUtMLFNBQVMsR0FBR0ssT0FBTyxDQUFDTCxTQUFTLENBQUE7TUFDbEMsS0FBS2tKLENBQUFBLFVBQVUsR0FBR0EsVUFBVSxDQUFBO01BQzVCLEtBQUtzTyxDQUFBQSxzQkFBc0IsR0FBRyxLQUFLLENBQUE7RUFFbkMsSUFBQSxLQUFBLENBQUtDLGNBQWMsR0FBRyxJQUFJQyxjQUFjLENBQUNULFFBQVEsQ0FBQyxLQUFLVSxDQUFBQSxRQUFRLENBQUM3UixJQUFJLENBQUEsc0JBQUEsQ0FBQSxLQUFBLENBQUEsQ0FBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUE7TUFFakYsSUFBSSxLQUFBLENBQUs5RixTQUFTLEVBQUU7RUFDbEIsTUFBQSxLQUFBLENBQUt5WCxjQUFjLENBQUNHLE9BQU8sQ0FBQyxLQUFBLENBQUs1WCxTQUFTLENBQUMsQ0FBQTtFQUM3QyxLQUFBO0VBRUEsSUFBQSxLQUFBLENBQUt1TCxJQUFJLEVBQUUsQ0FBQTtFQUFBLElBQUEsT0FBQSxLQUFBLENBQUE7RUFDYixHQUFBO0VBQUMsRUFBQSxZQUFBLENBQUEsSUFBQSxFQUFBLENBQUE7RUFBQSxJQUFBLEdBQUEsRUFBQSxVQUFBO0VBQUEsSUFBQSxLQUFBLEVBRUQsU0FBVyxRQUFBLEdBQUE7UUFDVCxJQUFJLElBQUksQ0FBQ2xMLE9BQU8sQ0FBQ3dYLGVBQWUsRUFBRSxJQUFJLENBQUNwSyxLQUFLLEVBQUUsQ0FBQTtFQUM5QyxNQUFBLElBQUksQ0FBQ3ZFLFVBQVUsQ0FBQ1gsT0FBTyxDQUFDLFVBQUN1UCxDQUFDLEVBQUE7VUFBQSxPQUFLQSxDQUFDLENBQUM5RyxnQkFBZ0IsRUFBRSxDQUFBO1NBQUMsQ0FBQSxDQUFBO0VBQ3RELEtBQUE7RUFBQyxHQUFBLEVBQUE7RUFBQSxJQUFBLEdBQUEsRUFBQSxNQUFBO0VBQUEsSUFBQSxLQUFBLEVBRUQsU0FBTyxJQUFBLEdBQUE7RUFBQSxNQUFBLElBQUEsTUFBQSxHQUFBLElBQUEsQ0FBQTtRQUNMLElBQUksQ0FBQ0QsT0FBTyxHQUFHLElBQUksQ0FBQTtFQUNuQixNQUFBLElBQUksQ0FBQzdILFVBQVUsQ0FBQ1gsT0FBTyxDQUFDLFVBQUNhLFNBQVMsRUFBQTtFQUFBLFFBQUEsT0FBSyxNQUFJLENBQUMyTyxhQUFhLENBQUMzTyxTQUFTLENBQUMsQ0FBQTtTQUFDLENBQUEsQ0FBQTtFQUN2RSxLQUFBO0VBQUMsR0FBQSxFQUFBO0VBQUEsSUFBQSxHQUFBLEVBQUEsZUFBQTtNQUFBLEtBRUQsRUFBQSxTQUFBLGFBQUEsQ0FBY0EsU0FBUyxFQUFFO0VBQUEsTUFBQSxJQUFBLE1BQUEsR0FBQSxJQUFBLENBQUE7RUFDdkJBLE1BQUFBLFNBQVMsQ0FBQzROLE1BQU0sR0FBRyxJQUFJLENBQUNqRyxPQUFPLENBQUE7RUFDL0IzSCxNQUFBQSxTQUFTLENBQUM3SSxFQUFFLENBQUMsV0FBVyxFQUFFLFlBQUE7RUFBQSxRQUFBLE9BQU0sTUFBSSxDQUFDeVgsTUFBTSxDQUFDNU8sU0FBUyxDQUFDLENBQUE7U0FBQyxDQUFBLENBQUE7UUFDdkRBLFNBQVMsQ0FBQzhELGFBQWEsR0FBRyxZQUFNO0VBQzlCOUQsUUFBQUEsU0FBUyxDQUFDb0UsV0FBVyxDQUFDcEUsU0FBUyxDQUFDK0gsY0FBYyxFQUFFLE1BQUksQ0FBQzlRLE9BQU8sQ0FBQ3lLLE9BQU8sQ0FBQyxDQUFBO0VBQ3JFLFFBQUEsTUFBSSxDQUFDcUMsS0FBSyxDQUFDL0QsU0FBUyxDQUFDLENBQUE7U0FDdEIsQ0FBQTtRQUNELElBQUksQ0FBQ3FPLGNBQWMsQ0FBQ0csT0FBTyxDQUFDeE8sU0FBUyxDQUFDNUwsT0FBTyxDQUFDLENBQUE7RUFDaEQsS0FBQTtFQUFDLEdBQUEsRUFBQTtFQUFBLElBQUEsR0FBQSxFQUFBLGtCQUFBO01BQUEsS0FFRCxFQUFBLFNBQUEsZ0JBQUEsQ0FBaUI0TCxTQUFTLEVBQUU7UUFDMUIsSUFBSSxDQUFDcU8sY0FBYyxDQUFDUSxTQUFTLENBQUM3TyxTQUFTLENBQUM1TCxPQUFPLENBQUMsQ0FBQTtFQUNoRDRMLE1BQUFBLFNBQVMsQ0FBQzhPLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQTtFQUM3QjlPLE1BQUFBLFNBQVMsQ0FBQzhPLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQTtFQUM5QjdMLE1BQUFBLFVBQVUsQ0FBQyxJQUFJLENBQUNuRCxVQUFVLEVBQUVFLFNBQVMsQ0FBQyxDQUFBO0VBQ3hDLEtBQUE7RUFBQyxHQUFBLEVBQUE7RUFBQSxJQUFBLEdBQUEsRUFBQSxRQUFBO01BQUEsS0FFRCxFQUFBLFNBQUEsTUFBQSxDQUFPQSxTQUFTLEVBQUU7RUFDaEIsTUFBQSxJQUFNK08sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDQyxtQkFBbUIsRUFBRSxDQUFBO0VBQ25ELE1BQUEsSUFBTUMsZUFBZSxHQUFHRixnQkFBZ0IsQ0FBQ2pPLEdBQUcsQ0FBQyxVQUFDZCxTQUFTLEVBQUE7VUFBQSxPQUFLQSxTQUFTLENBQUMrSCxjQUFjLENBQUE7U0FBQyxDQUFBLENBQUE7RUFFckYsTUFBQSxJQUFNbUgsWUFBWSxHQUFHSCxnQkFBZ0IsQ0FBQzlXLE9BQU8sQ0FBQytILFNBQVMsQ0FBQyxDQUFBO0VBQ3hELE1BQUEsSUFBTW1QLFdBQVcsR0FBR3JXLG1CQUFtQixDQUFDbVcsZUFBZSxFQUFFalAsU0FBUyxDQUFDakwsUUFBUSxFQUFFLElBQUksQ0FBQ2tDLE9BQU8sQ0FBQ2dDLE1BQU0sRUFBRSxJQUFJLENBQUNtVyxZQUFZLENBQUMsQ0FBQTtRQUVwSCxJQUFJRCxXQUFXLEtBQUssQ0FBQyxDQUFDLElBQUlELFlBQVksS0FBS0MsV0FBVyxFQUFFO1VBQ3RELElBQUlBLFdBQVcsR0FBR0QsWUFBWSxFQUFFO1lBQzlCLEtBQUssSUFBSS9WLENBQUMsR0FBQ2dXLFdBQVcsRUFBRWhXLENBQUMsR0FBQytWLFlBQVksRUFBRS9WLENBQUMsRUFBRSxFQUFFO0VBQzNDNFYsWUFBQUEsZ0JBQWdCLENBQUM1VixDQUFDLENBQUMsQ0FBQ2lMLFdBQVcsQ0FBQzZLLGVBQWUsQ0FBQzlWLENBQUMsR0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUNsQyxPQUFPLENBQUMwSyxXQUFXLENBQUMsQ0FBQTtFQUNqRixXQUFBO0VBQ0YsU0FBQyxNQUFNO1lBQ0wsS0FBSyxJQUFJeEksRUFBQyxHQUFDK1YsWUFBWSxFQUFFL1YsRUFBQyxHQUFDZ1csV0FBVyxFQUFFaFcsRUFBQyxFQUFFLEVBQUU7RUFDM0M0VixZQUFBQSxnQkFBZ0IsQ0FBQzVWLEVBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQ2lMLFdBQVcsQ0FBQzZLLGVBQWUsQ0FBQzlWLEVBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQ2xDLE9BQU8sQ0FBQzBLLFdBQVcsQ0FBQyxDQUFBO0VBQ2pGLFdBQUE7RUFDRixTQUFBO1VBRUEsSUFBSTNCLFNBQVMsQ0FBQ3VLLGlCQUFpQixFQUFFO0VBQy9CdkssVUFBQUEsU0FBUyxDQUFDb0UsV0FBVyxDQUFDNkssZUFBZSxDQUFDRSxXQUFXLENBQUMsQ0FBQyxDQUFBO0VBQ3JELFNBQUMsTUFBTTtFQUNMblAsVUFBQUEsU0FBUyxDQUFDK0gsY0FBYyxHQUFHa0gsZUFBZSxDQUFDRSxXQUFXLENBQUMsQ0FBQTtFQUN6RCxTQUFBO1VBRUEsSUFBSSxDQUFDZixzQkFBc0IsR0FBRyxJQUFJLENBQUE7RUFDcEMsT0FBQTtFQUNGLEtBQUE7RUFBQyxHQUFBLEVBQUE7RUFBQSxJQUFBLEdBQUEsRUFBQSxPQUFBO01BQUEsS0FFRCxFQUFBLFNBQUEsS0FBQSxDQUFNcE8sU0FBUyxFQUFFO1FBQ2YsSUFBSSxJQUFJLENBQUNvTyxzQkFBc0IsRUFBRTtFQUMvQixRQUFBLElBQUksQ0FBQ25NLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQTtVQUN4QixJQUFJLENBQUNtTSxzQkFBc0IsR0FBRyxLQUFLLENBQUE7VUFFbkMsSUFBSSxJQUFJLENBQUNuWCxPQUFPLENBQUN3WCxlQUFlLElBQUksSUFBSSxDQUFDeFgsT0FBTyxDQUFDTCxTQUFTLEVBQUU7RUFDMUQsVUFBQSxJQUFJLENBQUN5WSxlQUFlLENBQUNyUCxTQUFTLENBQUMsQ0FBQTtFQUNqQyxTQUFBO0VBQ0YsT0FBQTtFQUNGLEtBQUE7RUFBQyxHQUFBLEVBQUE7RUFBQSxJQUFBLEdBQUEsRUFBQSxpQkFBQTtNQUFBLEtBRUQsRUFBQSxTQUFBLGVBQUEsQ0FBZ0JzUCxjQUFjLEVBQUU7RUFDOUIsTUFBQSxJQUFNUCxnQkFBZ0IsR0FBRyxJQUFJLENBQUNDLG1CQUFtQixFQUFFLENBQUE7RUFDbkQsTUFBQSxJQUFNaFgsS0FBSyxHQUFHK1csZ0JBQWdCLENBQUM5VyxPQUFPLENBQUNxWCxjQUFjLENBQUMsQ0FBQTtFQUN0RCxNQUFBLElBQU1DLElBQUksR0FBR1IsZ0JBQWdCLENBQUMvVyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUE7UUFFeEMsSUFBSSxDQUFDcU0sS0FBSyxFQUFFLENBQUE7RUFFWixNQUFBLElBQUlrTCxJQUFJLEVBQUU7RUFDUixRQUFBLElBQUksQ0FBQzNZLFNBQVMsQ0FBQzRZLFlBQVksQ0FBQ0YsY0FBYyxDQUFDbGIsT0FBTyxFQUFFbWIsSUFBSSxDQUFDbmIsT0FBTyxDQUFDLENBQUE7RUFDbkUsT0FBQyxNQUFNO1VBQ0wsSUFBSSxDQUFDd0MsU0FBUyxDQUFDbVcsV0FBVyxDQUFDdUMsY0FBYyxDQUFDbGIsT0FBTyxDQUFDLENBQUE7RUFDcEQsT0FBQTtFQUVBLE1BQUEsSUFBSSxDQUFDMEwsVUFBVSxDQUFDWCxPQUFPLENBQUMsVUFBQ3VQLENBQUMsRUFBQTtVQUFBLE9BQUtBLENBQUMsQ0FBQzlHLGdCQUFnQixFQUFFLENBQUE7U0FBQyxDQUFBLENBQUE7RUFDcEQsTUFBQSxJQUFJLENBQUMzRixJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtFQUM3QixLQUFBO0VBQUMsR0FBQSxFQUFBO0VBQUEsSUFBQSxHQUFBLEVBQUEsMkJBQUE7RUFBQSxJQUFBLEtBQUEsRUFFRCxTQUE0Qix5QkFBQSxHQUFBO0VBQzFCLE1BQUEsT0FBTyxJQUFJLENBQUNuQyxVQUFVLENBQUNnQixHQUFHLENBQUMsVUFBQ2QsU0FBUyxFQUFBO0VBQUEsUUFBQSxPQUFLQSxTQUFTLENBQUMrSCxjQUFjLENBQUNsTCxLQUFLLEVBQUUsQ0FBQTtTQUFDLENBQUEsQ0FBQTtFQUM3RSxLQUFBO0VBQUMsR0FBQSxFQUFBO0VBQUEsSUFBQSxHQUFBLEVBQUEscUJBQUE7RUFBQSxJQUFBLEtBQUEsRUFFRCxTQUFzQixtQkFBQSxHQUFBO0VBQ3BCLE1BQUEsT0FBTyxJQUFJLENBQUNpRCxVQUFVLENBQUNtRSxJQUFJLENBQUMsSUFBSSxDQUFDekIsT0FBTyxDQUFDOUYsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7RUFDdEQsS0FBQTtFQUFDLEdBQUEsRUFBQTtFQUFBLElBQUEsR0FBQSxFQUFBLE9BQUE7RUFBQSxJQUFBLEtBQUEsRUFFRCxTQUFRLEtBQUEsR0FBQTtFQUNOLE1BQUEsSUFBSSxDQUFDb0QsVUFBVSxDQUFDWCxPQUFPLENBQUMsVUFBQ2EsU0FBUyxFQUFBO1VBQUEsT0FBS0EsU0FBUyxDQUFDeVAsc0JBQXNCLEVBQUUsQ0FBQTtTQUFDLENBQUEsQ0FBQTtFQUM1RSxLQUFBO0VBQUMsR0FBQSxFQUFBO0VBQUEsSUFBQSxHQUFBLEVBQUEsU0FBQTtFQUFBLElBQUEsS0FBQSxFQUVELFNBQVUsT0FBQSxHQUFBO0VBQ1IsTUFBQSxJQUFJLENBQUMzUCxVQUFVLENBQUNYLE9BQU8sQ0FBQyxVQUFDYSxTQUFTLEVBQUE7VUFBQSxPQUFLQSxTQUFTLENBQUNzRSxPQUFPLEVBQUUsQ0FBQTtTQUFDLENBQUEsQ0FBQTtFQUM3RCxLQUFBO0VBQUMsR0FBQSxFQUFBO0VBQUEsSUFBQSxHQUFBLEVBQUEsS0FBQTtNQUFBLEtBRUQsRUFBQSxTQUFBLEdBQUEsQ0FBSXhFLFVBQVUsRUFBRTtFQUFBLE1BQUEsSUFBQSxNQUFBLEdBQUEsSUFBQSxDQUFBO0VBQ2QsTUFBQSxJQUFJLEVBQUVBLFVBQVUsWUFBWTRQLEtBQUssQ0FBQyxFQUFFO1VBQ2xDNVAsVUFBVSxHQUFHLENBQUNBLFVBQVUsQ0FBQyxDQUFBO0VBQzNCLE9BQUE7RUFDQUEsTUFBQUEsVUFBVSxDQUFDWCxPQUFPLENBQUMsVUFBQ2EsU0FBUyxFQUFBO0VBQUEsUUFBQSxPQUFLLE1BQUksQ0FBQzJPLGFBQWEsQ0FBQzNPLFNBQVMsQ0FBQyxDQUFBO1NBQUMsQ0FBQSxDQUFBO1FBQ2hFLElBQUksQ0FBQ0YsVUFBVSxHQUFHLElBQUksQ0FBQ0EsVUFBVSxDQUFDQyxNQUFNLENBQUNELFVBQVUsQ0FBQyxDQUFBO0VBQ3RELEtBQUE7RUFBQyxHQUFBLEVBQUE7RUFBQSxJQUFBLEdBQUEsRUFBQSxRQUFBO01BQUEsS0FFRCxFQUFBLFNBQUEsTUFBQSxDQUFPQSxVQUFVLEVBQUU7RUFBQSxNQUFBLElBQUEsTUFBQSxHQUFBLElBQUEsQ0FBQTtRQUNqQixJQUFNNlAsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDN1AsVUFBVSxDQUFDZ0IsR0FBRyxDQUFDLFVBQUNkLFNBQVMsRUFBQTtVQUFBLE9BQUtBLFNBQVMsQ0FBQ3VELGVBQWUsQ0FBQTtTQUFDLENBQUEsQ0FBQTtRQUN0RixJQUFNcU0sSUFBSSxHQUFHLEVBQUUsQ0FBQTtFQUNmLE1BQUEsSUFBTWIsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDQyxtQkFBbUIsRUFBRSxDQUFBO0VBRW5ELE1BQUEsSUFBSSxFQUFFbFAsVUFBVSxZQUFZNFAsS0FBSyxDQUFDLEVBQUU7VUFDbEM1UCxVQUFVLEdBQUcsQ0FBQ0EsVUFBVSxDQUFDLENBQUE7RUFDM0IsT0FBQTtFQUVBQSxNQUFBQSxVQUFVLENBQUNYLE9BQU8sQ0FBQyxVQUFDYSxTQUFTLEVBQUE7RUFBQSxRQUFBLE9BQUssTUFBSSxDQUFDNlAsZ0JBQWdCLENBQUM3UCxTQUFTLENBQUMsQ0FBQTtTQUFDLENBQUEsQ0FBQTtRQUVuRSxJQUFJOFAsQ0FBQyxHQUFHLENBQUMsQ0FBQTtFQUNUZixNQUFBQSxnQkFBZ0IsQ0FBQzVQLE9BQU8sQ0FBQyxVQUFDYSxTQUFTLEVBQUs7VUFDdEMsSUFBSSxNQUFJLENBQUNGLFVBQVUsQ0FBQzdILE9BQU8sQ0FBQytILFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQzdDLElBQUlBLFNBQVMsQ0FBQytILGNBQWMsS0FBSzRILGdCQUFnQixDQUFDRyxDQUFDLENBQUMsRUFBRTtFQUNwRDlQLFlBQUFBLFNBQVMsQ0FBQ29FLFdBQVcsQ0FBQ3VMLGdCQUFnQixDQUFDRyxDQUFDLENBQUMsRUFBRSxNQUFJLENBQUM3WSxPQUFPLENBQUMwSyxXQUFXLENBQUMsQ0FBQTtFQUN0RSxXQUFBO0VBQ0EzQixVQUFBQSxTQUFTLENBQUN1RCxlQUFlLEdBQUdvTSxnQkFBZ0IsQ0FBQ0csQ0FBQyxDQUFDLENBQUE7RUFDL0NBLFVBQUFBLENBQUMsRUFBRSxDQUFBO0VBQ0hGLFVBQUFBLElBQUksQ0FBQzlYLElBQUksQ0FBQ2tJLFNBQVMsQ0FBQyxDQUFBO0VBQ3RCLFNBQUE7RUFDRixPQUFDLENBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQ0YsVUFBVSxHQUFHOFAsSUFBSSxDQUFBO0VBQ3hCLEtBQUE7RUFBQyxHQUFBLEVBQUE7RUFBQSxJQUFBLEdBQUEsRUFBQSxPQUFBO0VBQUEsSUFBQSxLQUFBLEVBRUQsU0FBUSxLQUFBLEdBQUE7UUFDTixJQUFJLENBQUNsTSxNQUFNLENBQUMsSUFBSSxDQUFDNUQsVUFBVSxDQUFDcEksS0FBSyxFQUFFLENBQUMsQ0FBQTtFQUN0QyxLQUFBO0VBQUMsR0FBQSxFQUFBO0VBQUEsSUFBQSxHQUFBLEVBQUEsU0FBQTtFQUFBLElBQUEsS0FBQSxFQUVELFNBQVUsT0FBQSxHQUFBO0VBQ1IsTUFBQSxJQUFJLENBQUNvSSxVQUFVLENBQUNYLE9BQU8sQ0FBQyxVQUFDYSxTQUFTLEVBQUE7VUFBQSxPQUFLQSxTQUFTLENBQUNrTixPQUFPLEVBQUUsQ0FBQTtTQUFDLENBQUEsQ0FBQTtRQUMzRCxJQUFJLElBQUksQ0FBQ3RXLFNBQVMsRUFBRTtVQUNsQixJQUFJLENBQUN5WCxjQUFjLENBQUNRLFNBQVMsQ0FBQyxJQUFJLENBQUNqWSxTQUFTLENBQUMsQ0FBQTtFQUMvQyxPQUFBO0VBQ0YsS0FBQTtFQUFDLEdBQUEsRUFBQTtFQUFBLElBQUEsR0FBQSxFQUFBLFNBQUE7RUFBQSxJQUFBLEtBQUEsRUFFRCxTQUFRbVosT0FBQUEsQ0FBQUEsVUFBVSxFQUFFQyxVQUFVLEVBQUU7RUFDOUIsTUFBQSxJQUFJLElBQUksQ0FBQy9ZLE9BQU8sQ0FBQ3VMLE9BQU8sRUFBRTtVQUN4QixPQUFPLElBQUksQ0FBQ3ZMLE9BQU8sQ0FBQ3VMLE9BQU8sQ0FBQ3VOLFVBQVUsRUFBRUMsVUFBVSxDQUFDLENBQUE7RUFDckQsT0FBQyxNQUFNO0VBQ0wsUUFBQSxJQUFJRCxVQUFVLENBQUNoSSxjQUFjLENBQUM5VCxDQUFDLEdBQUcrYixVQUFVLENBQUNqSSxjQUFjLENBQUM5VCxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQTtFQUN4RSxRQUFBLElBQUk4YixVQUFVLENBQUNoSSxjQUFjLENBQUM5VCxDQUFDLEdBQUcrYixVQUFVLENBQUNqSSxjQUFjLENBQUM5VCxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUE7RUFDdkUsUUFBQSxJQUFJOGIsVUFBVSxDQUFDaEksY0FBYyxDQUFDL1QsQ0FBQyxHQUFHZ2MsVUFBVSxDQUFDakksY0FBYyxDQUFDL1QsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUE7RUFDeEUsUUFBQSxJQUFJK2IsVUFBVSxDQUFDaEksY0FBYyxDQUFDL1QsQ0FBQyxHQUFHZ2MsVUFBVSxDQUFDakksY0FBYyxDQUFDL1QsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFBO0VBQ3ZFLFFBQUEsT0FBTyxDQUFDLENBQUE7RUFDVixPQUFBO0VBQ0YsS0FBQTtFQUFDLEdBQUEsRUFBQTtFQUFBLElBQUEsR0FBQSxFQUFBLGNBQUE7RUFBQSxJQUFBLEdBQUEsRUFFRCxTQUFtQixHQUFBLEdBQUE7RUFDakIsTUFBQSxPQUFPLElBQUksQ0FBQ2lELE9BQU8sQ0FBQ2tCLFdBQVcsSUFBSUEsV0FBVyxDQUFBO0VBQ2hELEtBQUE7RUFBQyxHQUFBLEVBQUE7RUFBQSxJQUFBLEdBQUEsRUFBQSxXQUFBO0VBQUEsSUFBQSxHQUFBLEVBRUQsU0FBZ0IsR0FBQSxHQUFBO1FBQ2QsT0FBTyxJQUFJLENBQUM4WCx5QkFBeUIsRUFBRSxDQUFBO09BQ3hDO01BQUEsR0FFRCxFQUFBLFNBQUEsR0FBQSxDQUFjMUwsU0FBUyxFQUFFO0VBQUEsTUFBQSxJQUFBLE1BQUEsR0FBQSxJQUFBLENBQUE7UUFDdkIsSUFBTUMsT0FBTyxHQUFHLG9CQUFvQixDQUFBO1FBQ3BDLElBQUlELFNBQVMsQ0FBQ2xMLE1BQU0sS0FBSyxJQUFJLENBQUN5RyxVQUFVLENBQUN6RyxNQUFNLEVBQUU7RUFDL0NrTCxRQUFBQSxTQUFTLENBQUNwRixPQUFPLENBQUMsVUFBQ3BFLEtBQUssRUFBRTVCLENBQUMsRUFBSztZQUM5QixNQUFJLENBQUMyRyxVQUFVLENBQUMzRyxDQUFDLENBQUMsQ0FBQ2lMLFdBQVcsQ0FBQ3JKLEtBQUssQ0FBQyxDQUFBO0VBQ3ZDLFNBQUMsQ0FBQyxDQUFBO0VBQ0osT0FBQyxNQUFNO0VBQ0wsUUFBQSxNQUFNeUosT0FBTyxDQUFBO0VBQ2YsT0FBQTtFQUNGLEtBQUE7RUFBQyxHQUFBLEVBQUE7RUFBQSxJQUFBLEdBQUEsRUFBQSxRQUFBO0VBQUEsSUFBQSxHQUFBLEVBRUQsU0FBYSxHQUFBLEdBQUE7UUFDWCxPQUFPLElBQUksQ0FBQ21ELE9BQU8sQ0FBQTtPQUNwQjtNQUFBLEdBRUQsRUFBQSxTQUFBLEdBQUEsQ0FBV2lHLE1BQU0sRUFBRTtRQUNqQixJQUFJLENBQUNqRyxPQUFPLEdBQUdpRyxNQUFNLENBQUE7RUFDckIsTUFBQSxJQUFJLENBQUM5TixVQUFVLENBQUNYLE9BQU8sQ0FBQyxVQUFDYSxTQUFTLEVBQUs7VUFDckNBLFNBQVMsQ0FBQzROLE1BQU0sR0FBR0EsTUFBTSxDQUFBO0VBQzNCLE9BQUMsQ0FBQyxDQUFBO0VBQ0osS0FBQTtFQUFDLEdBQUEsQ0FBQSxFQUFBLENBQUE7RUFBQSxJQUFBLEdBQUEsRUFBQSxTQUFBO0VBQUEsSUFBQSxLQUFBLEVBRUQsU0FBZXNDLE9BQUFBLENBQUFBLGdCQUFnQixFQUFFQyxRQUFRLEVBQWM7UUFBQSxJQUFabFosT0FBTyxHQUFDLFNBQUEsQ0FBQSxNQUFBLEdBQUEsQ0FBQSxJQUFBLFNBQUEsQ0FBQSxDQUFBLENBQUEsS0FBQSxTQUFBLEdBQUEsU0FBQSxDQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUUsQ0FBQTtFQUNuRCxNQUFBLElBQU02SSxVQUFVLEdBQUc0UCxLQUFLLENBQUNVLElBQUksQ0FBQ0QsUUFBUSxDQUFDLENBQUNyUCxHQUFHLENBQUMsVUFBQzFNLE9BQU8sRUFBSztVQUN2RCxPQUFPLElBQUl5USxTQUFTLENBQUN6USxPQUFPLEVBQUVnRCxNQUFNLENBQUM4SSxNQUFNLENBQUM7RUFDMUN0SixVQUFBQSxTQUFTLEVBQUVzWixnQkFBQUE7V0FDWixFQUFFalosT0FBTyxDQUFDK0ksU0FBUyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUE7RUFDOUIsT0FBQyxDQUFDLENBQUE7UUFFRixPQUFPLElBQUltTyxJQUFJLENBQUNyTyxVQUFVLEVBQUUxSSxNQUFNLENBQUM4SSxNQUFNLENBQUM7RUFDeEN0SixRQUFBQSxTQUFTLEVBQUVzWixnQkFBQUE7U0FDWixFQUFFalosT0FBTyxDQUFDMlksSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUE7RUFDekIsS0FBQTtFQUFDLEdBQUEsQ0FBQSxDQUFBLENBQUE7RUFBQSxFQUFBLE9BQUEsSUFBQSxDQUFBO0VBQUEsQ0FBQSxDQXpOK0I1WSxZQUFZOztFQ0o5QyxJQUFNcVosU0FBUyxHQUFHLFNBQVpBLFNBQVMsQ0FBSS9SLEtBQUssRUFBRThSLElBQUksRUFBRUUsRUFBRSxFQUFLO0VBQ3JDaFMsRUFBQUEsS0FBSyxDQUFDcEcsTUFBTSxDQUFDb1ksRUFBRSxHQUFHLENBQUMsR0FBR2hTLEtBQUssQ0FBQ2pGLE1BQU0sR0FBR2lYLEVBQUUsR0FBR0EsRUFBRSxFQUFFLENBQUMsRUFBRWhTLEtBQUssQ0FBQ3BHLE1BQU0sQ0FBQ2tZLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0VBQzVFLENBQUMsQ0FBQTtBQUFBLE1BRW9CRyxZQUFZLGdCQUFBLFVBQUEsS0FBQSxFQUFBO0VBQUEsRUFBQSxTQUFBLENBQUEsWUFBQSxFQUFBLEtBQUEsQ0FBQSxDQUFBO0VBQUEsRUFBQSxJQUFBLE1BQUEsR0FBQSxZQUFBLENBQUEsWUFBQSxDQUFBLENBQUE7RUFBQSxFQUFBLFNBQUEsWUFBQSxHQUFBO0VBQUEsSUFBQSxlQUFBLENBQUEsSUFBQSxFQUFBLFlBQUEsQ0FBQSxDQUFBO0VBQUEsSUFBQSxPQUFBLE1BQUEsQ0FBQSxLQUFBLENBQUEsSUFBQSxFQUFBLFNBQUEsQ0FBQSxDQUFBO0VBQUEsR0FBQTtFQUFBLEVBQUEsWUFBQSxDQUFBLFlBQUEsRUFBQSxDQUFBO0VBQUEsSUFBQSxHQUFBLEVBQUEsdUJBQUE7RUFBQSxJQUFBLEtBQUEsRUFDL0IsU0FBd0IscUJBQUEsR0FBQTtFQUN0QixNQUFBLElBQUksQ0FBQyxJQUFJLENBQUNDLFlBQVksSUFBSSxDQUFDLElBQUksQ0FBQ3ZaLE9BQU8sQ0FBQ3daLFdBQVcsSUFBSSxJQUFJLENBQUMzUSxVQUFVLENBQUN6RyxNQUFNLElBQUksQ0FBQyxFQUFFO0VBQ2xGLFFBQUEsSUFBTXFYLE1BQU0sR0FBRyxJQUFJLENBQUMxQixtQkFBbUIsRUFBRSxDQUFBO0VBQ3pDLFFBQUEsSUFBSSxDQUFDd0IsWUFBWSxHQUFHRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMzSSxjQUFjLENBQUM5VCxDQUFDLEdBQUd5YyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMzSSxjQUFjLENBQUM5VCxDQUFDLEdBQUd5YyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUN2TixPQUFPLEVBQUUsQ0FBQ2xQLENBQUMsQ0FBQTtFQUNyRyxPQUFBO0VBQ0YsS0FBQTtFQUFDLEdBQUEsRUFBQTtFQUFBLElBQUEsR0FBQSxFQUFBLHlCQUFBO0VBQUEsSUFBQSxLQUFBLEVBRUQsU0FBMEIsdUJBQUEsR0FBQTtFQUN4QixNQUFBLElBQUksSUFBSSxDQUFDNkwsVUFBVSxDQUFDekcsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQ3NYLGFBQWEsRUFBRTtVQUN0RCxJQUFJLENBQUNBLGFBQWEsR0FBRyxJQUFJLENBQUM3USxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUNpSSxjQUFjLENBQUE7RUFDeEQsT0FBQTtFQUNGLEtBQUE7RUFBQyxHQUFBLEVBQUE7RUFBQSxJQUFBLEdBQUEsRUFBQSxlQUFBO01BQUEsS0FFRCxFQUFBLFNBQUEsYUFBQSxDQUFjL0gsU0FBUyxFQUFFO0VBQUEsTUFBQSxJQUFBLEtBQUEsR0FBQSxJQUFBLENBQUE7RUFDdkIsTUFBQSxJQUFBLENBQUEsZUFBQSxDQUFBLFlBQUEsQ0FBQSxTQUFBLENBQUEsRUFBQSxlQUFBLEVBQUEsSUFBQSxDQUFBLENBQUEsSUFBQSxDQUFBLElBQUEsRUFBb0JBLFNBQVMsQ0FBQSxDQUFBO0VBQzdCQSxNQUFBQSxTQUFTLENBQUM3SSxFQUFFLENBQUMsWUFBWSxFQUFFLFlBQUE7RUFBQSxRQUFBLE9BQU0sS0FBSSxDQUFDeVosV0FBVyxDQUFDNVEsU0FBUyxDQUFDLENBQUE7U0FBQyxDQUFBLENBQUE7RUFDL0QsS0FBQTtFQUFDLEdBQUEsRUFBQTtFQUFBLElBQUEsR0FBQSxFQUFBLGFBQUE7TUFBQSxLQUVELEVBQUEsU0FBQSxXQUFBLENBQVlBLFNBQVMsRUFBRTtRQUNyQixJQUFJLENBQUM2USxxQkFBcUIsRUFBRSxDQUFBO1FBQzVCLElBQUksQ0FBQ0MsdUJBQXVCLEVBQUUsQ0FBQTtFQUM5QixNQUFBLElBQUksQ0FBQ0Msc0JBQXNCLEdBQUcsSUFBSSxDQUFDL0IsbUJBQW1CLEVBQUUsQ0FBQTtRQUN4RCxJQUFJLENBQUNnQyxzQkFBc0IsR0FBRyxJQUFJLENBQUNELHNCQUFzQixDQUFDOVksT0FBTyxDQUFDK0gsU0FBUyxDQUFDLENBQUE7RUFDOUUsS0FBQTtFQUFDLEdBQUEsRUFBQTtFQUFBLElBQUEsR0FBQSxFQUFBLFFBQUE7TUFBQSxLQUVELEVBQUEsU0FBQSxNQUFBLENBQU9BLFNBQVMsRUFBRTtRQUNoQixJQUFNaVIsYUFBYSxHQUFHLElBQUksQ0FBQ0Ysc0JBQXNCLENBQUMsSUFBSSxDQUFDQyxzQkFBc0IsR0FBRyxDQUFDLENBQUMsQ0FBQTtRQUNsRixJQUFNRSxhQUFhLEdBQUcsSUFBSSxDQUFDSCxzQkFBc0IsQ0FBQyxJQUFJLENBQUNDLHNCQUFzQixHQUFHLENBQUMsQ0FBQyxDQUFBO0VBQ2xGLE1BQUEsSUFBTUcsZUFBZSxHQUFHblIsU0FBUyxDQUFDK0gsY0FBYyxDQUFBO0VBRWhELE1BQUEsSUFBSXFKLFlBQVksQ0FBQTtFQUNoQixNQUFBLElBQUlqQyxXQUFXLENBQUE7RUFFZixNQUFBLElBQUduUCxTQUFTLENBQUNrSyxXQUFXLElBQUkrRyxhQUFhLEVBQUU7VUFDekNHLFlBQVksR0FBRyxDQUFDSCxhQUFhLEVBQUVqUixTQUFTLENBQUMsQ0FBQ2MsR0FBRyxDQUFDLFVBQUM0TixDQUFDLEVBQUE7WUFBQSxPQUFLQSxDQUFDLENBQUMzRyxjQUFjLENBQUE7V0FBQyxDQUFBLENBQUE7RUFDdEVvSCxRQUFBQSxXQUFXLEdBQUdyVyxtQkFBbUIsQ0FBQ3NZLFlBQVksRUFBRXBSLFNBQVMsQ0FBQ2pMLFFBQVEsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDcWEsWUFBWSxDQUFDLENBQUE7VUFFN0YsSUFBSUQsV0FBVyxLQUFLLENBQUMsRUFBRTtFQUNyQixVQUFBLElBQUduUCxTQUFTLENBQUN5TCwwQkFBMEIsRUFBRSxFQUFFO0VBQ3pDekwsWUFBQUEsU0FBUyxDQUFDb0UsV0FBVyxDQUFDNk0sYUFBYSxDQUFDbEosY0FBYyxDQUFDLENBQUE7RUFDckQsV0FBQyxNQUFNO2NBQ0wvSCxTQUFTLENBQUMrSCxjQUFjLEdBQUdrSixhQUFhLENBQUNsSixjQUFjLENBQUNsTCxLQUFLLEVBQUUsQ0FBQTtFQUNqRSxXQUFBO0VBQ0FvVSxVQUFBQSxhQUFhLENBQUM3TSxXQUFXLENBQUMsSUFBSXJRLEtBQUssQ0FDakNvZCxlQUFlLENBQUNuZCxDQUFDLEVBQ2pCZ00sU0FBUyxDQUFDK0gsY0FBYyxDQUFDOVQsQ0FBQyxHQUFHK0wsU0FBUyxDQUFDbUQsT0FBTyxFQUFFLENBQUNsUCxDQUFDLEdBQUcsSUFBSSxDQUFDd2MsV0FBVyxDQUN0RSxFQUFFLElBQUksQ0FBQ3haLE9BQU8sQ0FBQzBLLFdBQVcsQ0FBQyxDQUFBO0VBQzVCME8sVUFBQUEsU0FBUyxDQUFDLElBQUksQ0FBQ1Usc0JBQXNCLEVBQUUsSUFBSSxDQUFDQyxzQkFBc0IsRUFBRSxFQUFFLElBQUksQ0FBQ0Esc0JBQXNCLENBQUMsQ0FBQTtFQUNsRyxVQUFBLElBQUksQ0FBQ3BDLE1BQU0sQ0FBQzVPLFNBQVMsQ0FBQyxDQUFBO1lBQ3RCLElBQUksQ0FBQ29PLHNCQUFzQixHQUFHLElBQUksQ0FBQTtFQUNwQyxTQUFBO0VBQ0YsT0FBQyxNQUFNLElBQUdwTyxTQUFTLENBQUNtSyxhQUFhLElBQUkrRyxhQUFhLEVBQUU7VUFDbERFLFlBQVksR0FBRyxDQUFDcFIsU0FBUyxFQUFFa1IsYUFBYSxDQUFDLENBQUNwUSxHQUFHLENBQUMsVUFBQzROLENBQUMsRUFBQTtZQUFBLE9BQUtBLENBQUMsQ0FBQzNHLGNBQWMsQ0FBQTtXQUFDLENBQUEsQ0FBQTtFQUN0RW9ILFFBQUFBLFdBQVcsR0FBR3JXLG1CQUFtQixDQUFDc1ksWUFBWSxFQUFFcFIsU0FBUyxDQUFDakwsUUFBUSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUNxYSxZQUFZLENBQUMsQ0FBQTtVQUU3RixJQUFHRCxXQUFXLEtBQUssQ0FBQyxFQUFFO0VBQ3BCK0IsVUFBQUEsYUFBYSxDQUFDOU0sV0FBVyxDQUFDcEUsU0FBUyxDQUFDK0gsY0FBYyxFQUFFLElBQUksQ0FBQzlRLE9BQU8sQ0FBQzBLLFdBQVcsQ0FBQyxDQUFBO1lBQzdFLElBQU0wUCxvQkFBb0IsR0FBRyxJQUFJdGQsS0FBSyxDQUNwQ21kLGFBQWEsQ0FBQ25KLGNBQWMsQ0FBQy9ULENBQUMsRUFDOUJrZCxhQUFhLENBQUNuSixjQUFjLENBQUM5VCxDQUFDLEdBQUdpZCxhQUFhLENBQUMvTixPQUFPLEVBQUUsQ0FBQ2xQLENBQUMsR0FBRyxJQUFJLENBQUN3YyxXQUFXLENBQzlFLENBQUE7RUFDRCxVQUFBLElBQUd6USxTQUFTLENBQUN5TCwwQkFBMEIsRUFBRSxFQUFFO0VBQ3pDekwsWUFBQUEsU0FBUyxDQUFDb0UsV0FBVyxDQUFDaU4sb0JBQW9CLENBQUMsQ0FBQTtFQUM3QyxXQUFDLE1BQU07Y0FDTHJSLFNBQVMsQ0FBQytILGNBQWMsR0FBR3NKLG9CQUFvQixDQUFBO0VBQ2pELFdBQUE7RUFDQWhCLFVBQUFBLFNBQVMsQ0FBQyxJQUFJLENBQUNVLHNCQUFzQixFQUFFLElBQUksQ0FBQ0Msc0JBQXNCLEVBQUUsRUFBRSxJQUFJLENBQUNBLHNCQUFzQixDQUFDLENBQUE7RUFDbEcsVUFBQSxJQUFJLENBQUNwQyxNQUFNLENBQUM1TyxTQUFTLENBQUMsQ0FBQTtZQUN0QixJQUFJLENBQUNvTyxzQkFBc0IsR0FBRyxJQUFJLENBQUE7RUFDcEMsU0FBQTtFQUNGLE9BQUE7RUFDRixLQUFBO0VBQUMsR0FBQSxFQUFBO0VBQUEsSUFBQSxHQUFBLEVBQUEsVUFBQTtFQUFBLElBQUEsS0FBQSxFQUVELFNBQVNXLFFBQUFBLENBQUFBLGdCQUFnQixFQUFFdUMsZ0JBQWdCLEVBQUU7RUFBQSxNQUFBLElBQUEsTUFBQSxHQUFBLElBQUEsQ0FBQTtFQUMzQyxNQUFBLElBQU1ILGVBQWUsR0FBRyxJQUFJLENBQUNSLGFBQWEsQ0FBQzlULEtBQUssRUFBRSxDQUFBO0VBQ2xEa1MsTUFBQUEsZ0JBQWdCLEtBQWhCQSxnQkFBZ0IsR0FBSyxJQUFJLENBQUNDLG1CQUFtQixFQUFFLENBQUEsQ0FBQTtFQUUvQ0QsTUFBQUEsZ0JBQWdCLENBQUM1UCxPQUFPLENBQUMsVUFBQ2EsU0FBUyxFQUFLO1VBQ3RDLElBQUksQ0FBQ0EsU0FBUyxDQUFDK0gsY0FBYyxDQUFDd0osT0FBTyxDQUFDSixlQUFlLENBQUMsRUFBRTtZQUN0RCxJQUFJblIsU0FBUyxLQUFLc1IsZ0JBQWdCLElBQUksQ0FBQ0EsZ0JBQWdCLENBQUM3RiwwQkFBMEIsRUFBRSxFQUFFO0VBQ3BGekwsWUFBQUEsU0FBUyxDQUFDK0gsY0FBYyxHQUFHb0osZUFBZSxDQUFDdFUsS0FBSyxFQUFFLENBQUE7RUFDcEQsV0FBQyxNQUFNO0VBQ0xtRCxZQUFBQSxTQUFTLENBQUNvRSxXQUFXLENBQUMrTSxlQUFlLEVBQUduUixTQUFTLEtBQUtzUixnQkFBZ0IsR0FBSSxDQUFDLEdBQUcsTUFBSSxDQUFDcmEsT0FBTyxDQUFDMEssV0FBVyxDQUFDLENBQUE7RUFDekcsV0FBQTtFQUNGLFNBQUE7RUFFQXdQLFFBQUFBLGVBQWUsQ0FBQ2xkLENBQUMsR0FBR2tkLGVBQWUsQ0FBQ2xkLENBQUMsR0FBRytMLFNBQVMsQ0FBQ21ELE9BQU8sRUFBRSxDQUFDbFAsQ0FBQyxHQUFHLE1BQUksQ0FBQ3djLFdBQVcsQ0FBQTtFQUNsRixPQUFDLENBQUMsQ0FBQTtFQUNKLEtBQUE7RUFBQyxHQUFBLEVBQUE7RUFBQSxJQUFBLEdBQUEsRUFBQSxRQUFBO01BQUEsS0FFRCxFQUFBLFNBQUEsTUFBQSxDQUFPM1EsVUFBVSxFQUFFO0VBQUEsTUFBQSxJQUFBLE1BQUEsR0FBQSxJQUFBLENBQUE7RUFDakIsTUFBQSxJQUFJLEVBQUVBLFVBQVUsWUFBWTRQLEtBQUssQ0FBQyxFQUFFO1VBQ2xDNVAsVUFBVSxHQUFHLENBQUNBLFVBQVUsQ0FBQyxDQUFBO0VBQzNCLE9BQUE7RUFFQUEsTUFBQUEsVUFBVSxDQUFDWCxPQUFPLENBQUMsVUFBQ2EsU0FBUyxFQUFBO0VBQUEsUUFBQSxPQUFLLE1BQUksQ0FBQzZQLGdCQUFnQixDQUFDN1AsU0FBUyxDQUFDLENBQUE7U0FBQyxDQUFBLENBQUE7UUFDbkUsSUFBSSxDQUFDRixVQUFVLEdBQUcsSUFBSSxDQUFDQSxVQUFVLENBQUM1RSxNQUFNLENBQUMsVUFBQ3dULENBQUMsRUFBQTtFQUFBLFFBQUEsT0FBSyxDQUFDNU8sVUFBVSxDQUFDMFIsUUFBUSxDQUFDOUMsQ0FBQyxDQUFDLENBQUE7U0FBQyxDQUFBLENBQUE7RUFFeEUsTUFBQSxJQUFJLENBQUM1TyxVQUFVLENBQUNYLE9BQU8sQ0FBQyxVQUFDdVAsQ0FBQyxFQUFBO1VBQUEsT0FBS0EsQ0FBQyxDQUFDOUcsZ0JBQWdCLEVBQUUsQ0FBQTtTQUFDLENBQUEsQ0FBQTtFQUVwRCxNQUFBLElBQUcsSUFBSSxDQUFDOUgsVUFBVSxDQUFDekcsTUFBTSxHQUFHLENBQUMsRUFBRTtVQUM3QixJQUFJLENBQUN3WCxxQkFBcUIsRUFBRSxDQUFBO1VBQzVCLElBQUksQ0FBQ0MsdUJBQXVCLEVBQUUsQ0FBQTtVQUM5QixJQUFJLENBQUNXLFFBQVEsRUFBRSxDQUFBO0VBQ2pCLE9BQUE7RUFDRixLQUFBO0VBQUMsR0FBQSxFQUFBO0VBQUEsSUFBQSxHQUFBLEVBQUEsY0FBQTtFQUFBLElBQUEsR0FBQSxFQUVELFNBQW1CLEdBQUEsR0FBQTtFQUNqQixNQUFBLE9BQU8sSUFBSSxDQUFDeGEsT0FBTyxDQUFDa0IsV0FBVyxJQUFJUSxjQUFjLENBQUE7RUFDbkQsS0FBQTtFQUFDLEdBQUEsRUFBQTtFQUFBLElBQUEsR0FBQSxFQUFBLGFBQUE7RUFBQSxJQUFBLEdBQUEsRUFFRCxTQUFrQixHQUFBLEdBQUE7RUFDaEIsTUFBQSxJQUFHLElBQUksQ0FBQzFCLE9BQU8sQ0FBQ3daLFdBQVcsRUFBRTtFQUMzQixRQUFBLE9BQU8sSUFBSSxDQUFDeFosT0FBTyxDQUFDd1osV0FBVyxDQUFBO0VBQ2pDLE9BQUMsTUFBTTtVQUNMLElBQUksQ0FBQ0kscUJBQXFCLEVBQUUsQ0FBQTtFQUM1QixRQUFBLE9BQU8sSUFBSSxDQUFDTCxZQUFZLElBQUksQ0FBQyxDQUFBO0VBQy9CLE9BQUE7T0FDRDtNQUFBLEdBRUQsRUFBQSxTQUFBLEdBQUEsQ0FBZ0JrQixRQUFRLEVBQUU7RUFDeEIsTUFBQSxJQUFJLENBQUN6YSxPQUFPLENBQUN3WixXQUFXLEdBQUdpQixRQUFRLENBQUE7RUFDckMsS0FBQTtFQUFDLEdBQUEsQ0FBQSxFQUFBLENBQUE7RUFBQSxJQUFBLEdBQUEsRUFBQSxTQUFBO0VBQUEsSUFBQSxLQUFBLEVBRUQsU0FBZXhCLE9BQUFBLENBQUFBLGdCQUFnQixFQUFFQyxRQUFRLEVBQWM7UUFBQSxJQUFabFosT0FBTyxHQUFDLFNBQUEsQ0FBQSxNQUFBLEdBQUEsQ0FBQSxJQUFBLFNBQUEsQ0FBQSxDQUFBLENBQUEsS0FBQSxTQUFBLEdBQUEsU0FBQSxDQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUUsQ0FBQTtFQUNuRCxNQUFBLElBQU02SSxVQUFVLEdBQUc0UCxLQUFLLENBQUNVLElBQUksQ0FBQ0QsUUFBUSxDQUFDLENBQUNyUCxHQUFHLENBQUMsVUFBQzFNLE9BQU8sRUFBSztVQUN2RCxPQUFPLElBQUl5USxTQUFTLENBQUN6USxPQUFPLEVBQUVnRCxNQUFNLENBQUM4SSxNQUFNLENBQUM7RUFDMUN0SixVQUFBQSxTQUFTLEVBQUVzWixnQkFBQUE7V0FDWixFQUFFalosT0FBTyxDQUFDK0ksU0FBUyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUE7RUFDOUIsT0FBQyxDQUFDLENBQUE7UUFFRixPQUFPLElBQUl1USxZQUFZLENBQUN6USxVQUFVLEVBQUUxSSxNQUFNLENBQUM4SSxNQUFNLENBQUM7RUFDaER0SixRQUFBQSxTQUFTLEVBQUVzWixnQkFBQUE7U0FDWixFQUFFalosT0FBTyxDQUFDMlksSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUE7RUFDekIsS0FBQTtFQUFDLEdBQUEsQ0FBQSxDQUFBLENBQUE7RUFBQSxFQUFBLE9BQUEsWUFBQSxDQUFBO0VBQUEsQ0FBQSxDQXZJdUN6QixJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
