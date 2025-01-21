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
        if (!/transform\s?\d*m?s?/.test(transition)) {
          if (transition) {
            transition += ", ".concat(transitionCss);
          } else {
            transition = transitionCss;
          }
        } else {
          transition = transition.replace(/transform\s?\d*m?s?/g, transitionCss);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZGV2LmpzIiwic291cmNlcyI6WyIuLi9zcmMvZ2VvbWV0cnkvcG9pbnQuanMiLCIuLi9zcmMvZ2VvbWV0cnkvcmVjdGFuZ2xlLmpzIiwiLi4vc3JjL3V0aWxzL2dldC1kZWZhdWx0LWNvbnRhaW5lci5qcyIsIi4uL3NyYy9ldmVudEVtaXR0ZXIuanMiLCIuLi9zcmMvZ2VvbWV0cnkvZGlzdGFuY2VzLmpzIiwiLi4vc3JjL2dlb21ldHJ5L2JvdW5kcy5qcyIsIi4uL3NyYy9nZW9tZXRyeS9hbmdsZXMuanMiLCIuLi9zcmMvYm91bmRpbmcuanMiLCIuLi9zcmMvdXRpbHMvcmVtb3ZlLWFycmF5LWl0ZW0uanMiLCIuLi9zcmMvdXRpbHMvcmFuZ2UuanMiLCIuLi9zcmMvcG9zaXRpb25pbmcuanMiLCIuLi9zcmMvdGFyZ2V0LmpzIiwiLi4vc3JjL3Njb3BlLmpzIiwiLi4vc3JjL3V0aWxzL2lzLXN1cHBvcnQtcGFzc2l2ZS1ldmVudHMuanMiLCIuLi9zcmMvdXRpbHMvdGhyb3R0bGUuanMiLCIuLi9zcmMvZHJhZ2dhYmxlLmpzIiwiLi4vc3JjL3V0aWxzL2RlYm91bmNlLmpzIiwiLi4vc3JjL2xpc3QuanMiLCIuLi9zcmMvYnViYmxpbmdMaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKiBDbGFzcyByZXByZXNlbnRpbmcgYSBwb2ludC4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvaW50IHtcbiAgLyoqXG4gICogQ3JlYXRlIGEgcG9pbnQuXG4gICogQHBhcmFtIHtudW1iZXJ9IHggLSBUaGUgeCB2YWx1ZS5cbiAgKiBAcGFyYW0ge251bWJlcn0geSAtIFRoZSB5IHZhbHVlLlxuICAqL1xuICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgdGhpcy54ID0geFxuICAgIHRoaXMueSA9IHlcbiAgfVxuXG4gIGFkZChwKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnggKyBwLngsIHRoaXMueSArIHAueSlcbiAgfVxuXG4gIHN1YihwKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnggLSBwLngsIHRoaXMueSAtIHAueSlcbiAgfVxuXG4gIG11bHQoaykge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54ICogaywgdGhpcy55ICogaylcbiAgfVxuXG4gIG5lZ2F0aXZlKCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQoLXRoaXMueCwgLXRoaXMueSlcbiAgfVxuXG4gIGNvbXBhcmUocCkge1xuICAgIHJldHVybiAodGhpcy54ID09PSBwLnggJiYgdGhpcy55ID09PSBwLnkpXG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCwgdGhpcy55KVxuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIGB7eD0ke3RoaXMueH0seT0ke3RoaXMueX1gXG4gIH1cblxuICBzdGF0aWMgZWxlbWVudE9mZnNldChlbGVtZW50LCBwYXJlbnQpIHtcbiAgICBwYXJlbnQgPSBwYXJlbnQgfHwgZWxlbWVudC5wYXJlbnROb2RlXG4gICAgY29uc3QgZWxlbWVudFJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgY29uc3QgcGFyZW50UmVjdCA9IHBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIHJldHVybiBuZXcgUG9pbnQoXG4gICAgICBlbGVtZW50UmVjdC5sZWZ0IC0gcGFyZW50UmVjdC5sZWZ0LFxuICAgICAgZWxlbWVudFJlY3QudG9wIC0gcGFyZW50UmVjdC50b3BcbiAgICApXG4gIH1cblxuICBzdGF0aWMgZWxlbWVudFNpemUoZWxlbWVudCkge1xuICAgIGNvbnN0IGVsZW1lbnRSZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIHJldHVybiBuZXcgUG9pbnQoXG4gICAgICBlbGVtZW50UmVjdC53aWR0aCxcbiAgICAgIGVsZW1lbnRSZWN0LmhlaWdodFxuICAgIClcbiAgfVxufVxuIiwiaW1wb3J0IFBvaW50IGZyb20gJy4vcG9pbnQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY3RhbmdsZSB7XG4gIGNvbnN0cnVjdG9yKHBvc2l0aW9uLCBzaXplKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgdGhpcy5zaXplID0gc2l6ZVxuICB9XG5cbiAgZ2V0UDEoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25cbiAgfVxuXG4gIGdldFAyKCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHRoaXMucG9zaXRpb24ueSlcbiAgfVxuXG4gIGdldFAzKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLnNpemUpXG4gIH1cblxuICBnZXRQNCgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnkpXG4gIH1cblxuICBnZXRDZW50ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb24uYWRkKHRoaXMuc2l6ZS5tdWx0KDAuNSkpXG4gIH1cblxuICBvcihyZWN0KSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBuZXcgUG9pbnQoTWF0aC5taW4odGhpcy5wb3NpdGlvbi54LCByZWN0LnBvc2l0aW9uLngpLCBNYXRoLm1pbih0aGlzLnBvc2l0aW9uLnksIHJlY3QucG9zaXRpb24ueSkpXG4gICAgY29uc3Qgc2l6ZSA9IChuZXcgUG9pbnQoTWF0aC5tYXgodGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHJlY3QucG9zaXRpb24ueCArIHJlY3Quc2l6ZS54KSwgTWF0aC5tYXgodGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnksIHJlY3QucG9zaXRpb24ueSArIHJlY3Quc2l6ZS55KSkpLnN1Yihwb3NpdGlvbilcbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZShwb3NpdGlvbiwgc2l6ZSlcbiAgfVxuXG4gIGFuZChyZWN0KSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBuZXcgUG9pbnQoTWF0aC5tYXgodGhpcy5wb3NpdGlvbi54LCByZWN0LnBvc2l0aW9uLngpLCBNYXRoLm1heCh0aGlzLnBvc2l0aW9uLnksIHJlY3QucG9zaXRpb24ueSkpXG4gICAgY29uc3Qgc2l6ZSA9IChuZXcgUG9pbnQoTWF0aC5taW4odGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHJlY3QucG9zaXRpb24ueCArIHJlY3Quc2l6ZS54KSwgTWF0aC5taW4odGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnksIHJlY3QucG9zaXRpb24ueSArIHJlY3Quc2l6ZS55KSkpLnN1Yihwb3NpdGlvbilcbiAgICBpZiAoc2l6ZS54IDw9IDAgfHwgc2l6ZS55IDw9IDApIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHBvc2l0aW9uLCBzaXplKVxuICB9XG5cbiAgaW5jbHVkZVBvaW50KHApIHtcbiAgICByZXR1cm4gISh0aGlzLnBvc2l0aW9uLnggPiBwLnggfHwgdGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLnggPCBwLnggfHwgdGhpcy5wb3NpdGlvbi55ID4gcC55IHx8IHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55IDwgcC55KVxuICB9XG5cbiAgaW5jbHVkZVJlY3RhbmdsZShyZWN0YW5nbGUpIHtcbiAgICByZXR1cm4gdGhpcy5pbmNsdWRlUG9pbnQocmVjdGFuZ2xlLnBvc2l0aW9uKSAmJiB0aGlzLmluY2x1ZGVQb2ludChyZWN0YW5nbGUuZ2V0UDMoKSlcbiAgfVxuXG4gIG1vdmVUb0JvdW5kKHJlY3QsIGF4aXMpIHtcbiAgICBsZXQgc2VsQXhpcywgY3Jvc3NSZWN0YW5nbGVcbiAgICBpZiAoYXhpcykge1xuICAgICAgc2VsQXhpcyA9IGF4aXNcbiAgICB9IGVsc2Uge1xuICAgICAgY3Jvc3NSZWN0YW5nbGUgPSB0aGlzLmFuZChyZWN0KVxuICAgICAgaWYgKCFjcm9zc1JlY3RhbmdsZSkge1xuICAgICAgICByZXR1cm4gcmVjdFxuICAgICAgfVxuICAgICAgc2VsQXhpcyA9IGNyb3NzUmVjdGFuZ2xlLnNpemUueCA+IGNyb3NzUmVjdGFuZ2xlLnNpemUueSA/ICd5JyA6ICd4J1xuICAgIH1cbiAgICBjb25zdCB0aGlzQ2VudGVyID0gdGhpcy5nZXRDZW50ZXIoKVxuICAgIGNvbnN0IHJlY3RDZW50ZXIgPSByZWN0LmdldENlbnRlcigpXG4gICAgY29uc3Qgc2lnbiA9IHRoaXNDZW50ZXJbc2VsQXhpc10gPiByZWN0Q2VudGVyW3NlbEF4aXNdID8gLTEgOiAxXG4gICAgY29uc3Qgb2Zmc2V0ID0gc2lnbiA+IDAgPyB0aGlzLnBvc2l0aW9uW3NlbEF4aXNdICsgdGhpcy5zaXplW3NlbEF4aXNdIC0gcmVjdC5wb3NpdGlvbltzZWxBeGlzXSA6IHRoaXMucG9zaXRpb25bc2VsQXhpc10gLSAocmVjdC5wb3NpdGlvbltzZWxBeGlzXSArIHJlY3Quc2l6ZVtzZWxBeGlzXSlcbiAgICByZWN0LnBvc2l0aW9uW3NlbEF4aXNdID0gcmVjdC5wb3NpdGlvbltzZWxBeGlzXSArIG9mZnNldFxuICAgIHJldHVybiByZWN0XG4gIH1cblxuICBnZXRTcXVhcmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZS54ICogdGhpcy5zaXplLnlcbiAgfVxuXG4gIHN0eWxlQXBwbHkoZWwpIHtcbiAgICBlbCA9IGVsIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2luZCcpXG4gICAgZWwuc3R5bGUubGVmdCA9IHRoaXMucG9zaXRpb24ueCArICdweCdcbiAgICBlbC5zdHlsZS50b3AgPSB0aGlzLnBvc2l0aW9uLnkgKyAncHgnXG4gICAgZWwuc3R5bGUud2lkdGggPSB0aGlzLnNpemUueCArICdweCdcbiAgICBlbC5zdHlsZS5oZWlnaHQgPSB0aGlzLnNpemUueSArICdweCdcbiAgfVxuXG4gIGdyb3d0aChzaXplKSB7XG4gICAgdGhpcy5zaXplID0gdGhpcy5zaXplLmFkZChzaXplKVxuICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uLmFkZChzaXplLm11bHQoLTAuNSkpXG4gIH1cblxuICBnZXRNaW5TaWRlKCkge1xuICAgIHJldHVybiBNYXRoLm1pbih0aGlzLnNpemUueCwgdGhpcy5zaXplLnkpXG4gIH1cblxuICBzdGF0aWMgZnJvbUVsZW1lbnQoZWxlbWVudCwgcGFyZW50PWVsZW1lbnQucGFyZW50Tm9kZSwgaXNDb25zaWRlclRyYW5zbGF0ZT1mYWxzZSkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gUG9pbnQuZWxlbWVudE9mZnNldChlbGVtZW50LCBwYXJlbnQsIGlzQ29uc2lkZXJUcmFuc2xhdGUpXG4gICAgY29uc3Qgc2l6ZSA9IFBvaW50LmVsZW1lbnRTaXplKGVsZW1lbnQpXG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUocG9zaXRpb24sIHNpemUpXG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldERlZmF1bHRDb250YWluZXIoZWxlbWVudCkge1xuICBsZXQgY29udGFpbmVyID0gZWxlbWVudC5wYXJlbnROb2RlXG4gIHdoaWxlIChjb250YWluZXIucGFyZW50Tm9kZSAmJiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShjb250YWluZXIpWydwb3NpdGlvbiddID09PSAnc3RhdGljJyAmJiBjb250YWluZXIudGFnTmFtZSAhPT0gJ0JPRFknKSB7XG4gICAgY29udGFpbmVyID0gY29udGFpbmVyLnBhcmVudE5vZGVcbiAgfVxuICByZXR1cm4gY29udGFpbmVyXG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAob3B0aW9ucyA9IHt9KSB7XG4gICAgdGhpcy5ldmVudHMgPSB7fVxuXG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5vbikge1xuICAgICAgZm9yIChjb25zdCBbZXZlbnROYW1lLCBmbl0gb2YgT2JqZWN0LmVudHJpZXMob3B0aW9ucy5vbikpIHtcbiAgICAgICAgdGhpcy5vbihldmVudE5hbWUsIGZuKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGVtaXQoZXZlbnROYW1lKSB7XG4gICAgdGhpcy5pbnRlcnJ1cHRlZCA9IGZhbHNlXG4gICAgY29uc3QgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKVxuXG4gICAgaWYgKCF0aGlzLmV2ZW50c1tldmVudE5hbWVdKSByZXR1cm5cblxuICAgIGZvciAoY29uc3QgZnVuYyBvZiB0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICBmdW5jKC4uLmFyZ3MpXG4gICAgICBpZiAodGhpcy5pbnRlcnJ1cHRlZCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpbnRlcnJ1cHQoKSB7XG4gICAgdGhpcy5pbnRlcnJ1cHRlZCA9IHRydWVcbiAgfVxuXG4gIG9uKGV2ZW50TmFtZSwgZm4pIHtcbiAgICBpZiAoIXRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSBbXVxuICAgIH1cblxuICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0ucHVzaChmbilcbiAgfVxuXG4gIHByZXBlbmRPbihldmVudE5hbWUsIGZuKSB7XG4gICAgaWYgKCF0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdID0gW11cbiAgICB9XG5cbiAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLnVuc2hpZnQoZm4pXG4gIH1cblxuICB1bnN1YnNjcmliZShldmVudE5hbWUsIGZuKSB7XG4gICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5ldmVudHNbZXZlbnROYW1lXS5pbmRleE9mKGZuKVxuICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5zcGxpY2UoaW5kZXgsIDEpXG4gICAgfVxuICB9XG5cbiAgcmVzZXRFbWl0dGVyICgpIHtcbiAgICB0aGlzLmV2ZW50cyA9IHt9XG4gIH1cblxuICByZXNldE9uKGV2ZW50TmFtZSkge1xuICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSBbXVxuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0RGlzdGFuY2UocDEsIHAyKSB7XG4gIGNvbnN0IGR4ID0gcDEueCAtIHAyLngsIGR5ID0gcDEueSAtIHAyLnlcbiAgcmV0dXJuIE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFhEaWZmZXJlbmNlKHAxLCBwMikge1xuICByZXR1cm4gTWF0aC5hYnMocDEueCAtIHAyLngpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRZRGlmZmVyZW5jZShwMSwgcDIpIHtcbiAgcmV0dXJuIE1hdGguYWJzKHAxLnkgLSBwMi55KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtZWRTcGFjZURpc3RhbmNlRmFjdG9yeShvcHRpb25zKSB7XG4gIHJldHVybiAocDEsIHAyKSA9PiB7XG4gICAgcmV0dXJuIE1hdGguc3FydChcbiAgICAgIE1hdGgucG93KG9wdGlvbnMueCAqIE1hdGguYWJzKHAxLnggLSBwMi54KSwgMikgK1xuICAgICAgTWF0aC5wb3cob3B0aW9ucy55ICogTWF0aC5hYnMocDEueSAtIHAyLnkpLCAyKVxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5kZXhPZk5lYXJlc3RQb2ludChhcnIsIHZhbCwgcmFkaXVzLCBnZXREaXN0YW5jZUZ1bmM9Z2V0RGlzdGFuY2UpIHtcbiAgbGV0IHNpemUsIGluZGV4ID0gMCwgaSwgdGVtcFxuICBpZiAoYXJyLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAtMVxuICB9XG4gIHNpemUgPSBnZXREaXN0YW5jZUZ1bmMoYXJyWzBdLCB2YWwpXG4gIGZvciAoaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICB0ZW1wID0gZ2V0RGlzdGFuY2VGdW5jKGFycltpXSwgdmFsKVxuICAgIGlmICh0ZW1wIDwgc2l6ZSkge1xuICAgICAgc2l6ZSA9IHRlbXBcbiAgICAgIGluZGV4ID0gaVxuICAgIH1cbiAgfVxuICBpZiAocmFkaXVzID49IDAgJiYgc2l6ZSA+IHJhZGl1cykge1xuICAgIHJldHVybiAtMVxuICB9XG4gIHJldHVybiBpbmRleFxufVxuIiwiaW1wb3J0IFBvaW50IGZyb20gJy4vcG9pbnQnXG5pbXBvcnQgeyBnZXREaXN0YW5jZSB9IGZyb20gJy4vZGlzdGFuY2VzJ1xuXG5leHBvcnQgZnVuY3Rpb24gY2xhbXAobWluLCBtYXgsIHZhbCkge1xuICByZXR1cm4gTWF0aC5tYXgobWluLCBNYXRoLm1pbihtYXgsIHZhbCkpXG59XG5cbi8vUmV0dXJuIGNyb3NzaW5nIHBvaW50IG9mIHR3byBsaW5lc1xuZXhwb3J0IGZ1bmN0aW9uIGRpcmVjdENyb3NzaW5nKEwxUDEsIEwxUDIsIEwyUDEsIEwyUDIpIHtcbiAgbGV0IHRlbXAsIGsxLCBrMiwgYjEsIGIyLCB4LCB5XG4gIGlmIChMMlAxLnggPT09IEwyUDIueCkge1xuICAgIHRlbXAgPSBMMlAxXG4gICAgTDJQMSA9IEwxUDFcbiAgICBMMVAxID0gdGVtcFxuICAgIHRlbXAgPSBMMlAyXG4gICAgTDJQMiA9IEwxUDJcbiAgICBMMVAyID0gdGVtcFxuICB9XG4gIGlmIChMMVAxLnggPT09IEwxUDIueCkge1xuICAgIGsyID0gKEwyUDIueSAtIEwyUDEueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgIGIyID0gKEwyUDIueCAqIEwyUDEueSAtIEwyUDEueCAqIEwyUDIueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgIHggPSBMMVAxLnhcbiAgICB5ID0geCAqIGsyICsgYjJcbiAgICByZXR1cm4gbmV3IFBvaW50KHgsIHkpXG4gIH0gZWxzZSB7XG4gICAgazEgPSAoTDFQMi55IC0gTDFQMS55KSAvIChMMVAyLnggLSBMMVAxLngpXG4gICAgYjEgPSAoTDFQMi54ICogTDFQMS55IC0gTDFQMS54ICogTDFQMi55KSAvIChMMVAyLnggLSBMMVAxLngpXG4gICAgazIgPSAoTDJQMi55IC0gTDJQMS55KSAvIChMMlAyLnggLSBMMlAxLngpXG4gICAgYjIgPSAoTDJQMi54ICogTDJQMS55IC0gTDJQMS54ICogTDJQMi55KSAvIChMMlAyLnggLSBMMlAxLngpXG4gICAgeCA9IChiMSAtIGIyKSAvIChrMiAtIGsxKVxuICAgIHkgPSB4ICogazEgKyBiMVxuICAgIHJldHVybiBuZXcgUG9pbnQoeCwgeSlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRUb1NlZ21lbnQoTFAxLCBMUDIsIFApIHtcbiAgbGV0IHgsIHlcbiAgeCA9IGNsYW1wKE1hdGgubWluKExQMS54LCBMUDIueCksIE1hdGgubWF4KExQMS54LCBMUDIueCksIFAueClcbiAgaWYgKHggIT09IFAueCkge1xuICAgIHkgPSAoeCA9PT0gTFAxLngpID8gTFAxLnkgOiBMUDIueVxuICAgIFAgPSBuZXcgUG9pbnQoeCwgeSlcbiAgfVxuXG4gIHkgPSBjbGFtcChNYXRoLm1pbihMUDEueSwgTFAyLnkpLCBNYXRoLm1heChMUDEueSwgTFAyLnkpLCBQLnkpXG4gIGlmICh5ICE9PSBQLnkpIHtcbiAgICB4ID0gKHkgPT09IExQMS55KSA/IExQMS54IDogTFAyLnhcbiAgICBQID0gbmV3IFBvaW50KHgsIHkpXG4gIH1cblxuICByZXR1cm4gUFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRUb0xpbmUoQSwgQiwgUCkge1xuICBjb25zdCBBUCA9IG5ldyBQb2ludChQLnggLSBBLngsIFAueSAtIEEueSksXG4gICAgQUIgPSBuZXcgUG9pbnQoQi54IC0gQS54LCBCLnkgLSBBLnkpLFxuICAgIGFiMiA9IEFCLnggKiBBQi54ICsgQUIueSAqIEFCLnksXG4gICAgYXBfYWIgPSBBUC54ICogQUIueCArIEFQLnkgKiBBQi55LFxuICAgIHQgPSBhcF9hYiAvIGFiMlxuICByZXR1cm4gbmV3IFBvaW50KEEueCArIEFCLnggKiB0LCBBLnkgKyBBQi55ICogdClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBvaW50T25MaW5lKExQMSwgTFAyLCBwZXJjZW50KSB7XG4gIGNvbnN0IGR4ID0gTFAyLnggLSBMUDEueCwgZHkgPSBMUDIueSAtIExQMS55XG4gIHJldHVybiBuZXcgUG9pbnQoTFAxLnggKyBwZXJjZW50ICogZHgsIExQMS55ICsgcGVyY2VudCAqIGR5KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9pbnRPbkxpbmVCeUxlbmdodChMUDEsIExQMiwgbGVuZ2h0KSB7XG4gIGNvbnN0IGR4ID0gTFAyLnggLSBMUDEueFxuICBjb25zdCBkeSA9IExQMi55IC0gTFAxLnlcbiAgY29uc3QgcGVyY2VudCA9IGxlbmdodCAvIGdldERpc3RhbmNlKExQMSwgTFAyKVxuICByZXR1cm4gbmV3IFBvaW50KExQMS54ICsgcGVyY2VudCAqIGR4LCBMUDEueSArIHBlcmNlbnQgKiBkeSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFBvaW50VG9Cb3VuZFBvaW50cyhib3VuZHBvaW50cywgcG9pbnQsIGlzUmlnaHQpIHtcbiAgY29uc3QgcmVzdWx0ID0gYm91bmRwb2ludHMuZmlsdGVyKChiUG9pbnQpID0+IHtcbiAgICByZXR1cm4gYlBvaW50LnkgPiBwb2ludC55IHx8IChpc1JpZ2h0ID8gYlBvaW50LnggPCBwb2ludC54IDogYlBvaW50LnggPiBwb2ludC54KVxuICB9KVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzdWx0Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHBvaW50LnkgPCByZXN1bHRbaV0ueSkge1xuICAgICAgcmVzdWx0LnNwbGljZShpLCAwLCBwb2ludClcbiAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG4gIH1cbiAgcmVzdWx0LnB1c2gocG9pbnQpXG4gIHJldHVybiByZXN1bHRcbn1cbiIsImltcG9ydCBQb2ludCBmcm9tICcuL3BvaW50J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QW5nbGVEaWZmKGFscGhhLCBiZXRhKSB7XG4gIGNvbnN0IG1pbkFuZ2xlID0gTWF0aC5taW4oYWxwaGEsIGJldGEpXG4gIGNvbnN0IG1heEFuZ2xlID0gIE1hdGgubWF4KGFscGhhLCBiZXRhKVxuICByZXR1cm4gTWF0aC5taW4obWF4QW5nbGUgLSBtaW5BbmdsZSwgbWluQW5nbGUgKyBNYXRoLlBJKjIgLSBtYXhBbmdsZSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFuZ2xlKHAxLCBwMikge1xuICBjb25zdCBkaWZmID0gcDIuc3ViKHAxKVxuICByZXR1cm4gbm9ybWFsaXplQW5nbGUoTWF0aC5hdGFuMihkaWZmLnksIGRpZmYueCkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b1JhZGlhbihhbmdsZSkge1xuICByZXR1cm4gKChhbmdsZSAlIDM2MCkgKiBNYXRoLlBJIC8gMTgwKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9EZWdyZWUoYW5nbGUpIHtcbiAgcmV0dXJuIChhbmdsZSAqIDE4MCAvIE1hdGguUEkpICUgMzYwXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZEFuZ2xlKG1pbiwgbWF4LCB2YWwpIHtcbiAgbGV0IGRtaW4sIGRtYXhcbiAgaWYgKG1pbiA8IG1heCAmJiB2YWwgPiBtaW4gJiYgdmFsIDwgbWF4KSB7XG4gICAgcmV0dXJuIHZhbFxuICB9IGVsc2UgaWYgKG1heCA8IG1pbiAmJiAodmFsIDwgbWF4IHx8IHZhbCA+IG1pbikpIHtcbiAgICByZXR1cm4gdmFsXG4gIH0gZWxzZSB7XG4gICAgZG1pbiA9IGdldEFuZ2xlRGlmZihtaW4sIHZhbClcbiAgICBkbWF4ID0gZ2V0QW5nbGVEaWZmKG1heCwgdmFsKVxuICAgIGlmIChkbWluIDwgZG1heCkge1xuICAgICAgcmV0dXJuIG1pblxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbWF4XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROZWFyZXN0QW5nbGUoYXJyLCBhbmdsZSkge1xuICBsZXQgaSwgdGVtcCwgZGlmZiA9IE1hdGguUEkgKiAyLCB2YWx1ZVxuICBmb3IgKGkgPSAwOyBpIDwgYXJyLmxlbmd0aDtpKyspIHtcbiAgICB0ZW1wID0gZ2V0QW5nbGVEaWZmKGFycltpXSwgYW5nbGUpXG4gICAgaWYgKGRpZmYgPCB0ZW1wKSB7XG4gICAgICBkaWZmID0gdGVtcFxuICAgICAgdmFsdWUgPSBhcnJbaV1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHZhbHVlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVBbmdsZSh2YWwpIHtcbiAgd2hpbGUgKHZhbCA8IDApIHtcbiAgICB2YWwgKz0gMiAqIE1hdGguUElcbiAgfVxuICB3aGlsZSAodmFsID4gMiAqIE1hdGguUEkpIHtcbiAgICB2YWwgLT0gMiAqIE1hdGguUElcbiAgfVxuICByZXR1cm4gdmFsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oYW5nbGUsIGxlbmd0aCwgY2VudGVyKSB7XG4gIGNlbnRlciA9IGNlbnRlciB8fCBuZXcgUG9pbnQoMCwgMClcbiAgcmV0dXJuIGNlbnRlci5hZGQobmV3IFBvaW50KGxlbmd0aCAqIE1hdGguY29zKGFuZ2xlKSwgbGVuZ3RoICogTWF0aC5zaW4oYW5nbGUpKSlcbn1cbiIsImltcG9ydCBQb2ludCBmcm9tICcuL2dlb21ldHJ5L3BvaW50J1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tICcuL2dlb21ldHJ5L3JlY3RhbmdsZSdcbmltcG9ydCB7XG4gIGdldFBvaW50T25MaW5lQnlMZW5naHQsXG4gIGRpcmVjdENyb3NzaW5nLFxuICBib3VuZFRvTGluZVxufSBmcm9tICcuL2dlb21ldHJ5L2JvdW5kcydcblxuaW1wb3J0IHtcbiAgZ2V0QW5nbGUsXG4gIG5vcm1hbGl6ZUFuZ2xlLFxuICBib3VuZEFuZ2xlLFxuICBnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW1cbn0gZnJvbSAnLi9nZW9tZXRyeS9hbmdsZXMnXG5cbmV4cG9ydCBjbGFzcyBCb3VuZCB7XG4gIGNvbnN0cnVjdG9yICgpIHt9XG5cbiAgYm91bmQocG9pbnQsIF9zaXplKSB7XG4gICAgcmV0dXJuIHBvaW50XG4gIH1cblxuICByZWZyZXNoICgpIHt9XG5cbiAgc3RhdGljIGJvdW5kaW5nKCkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IHRoaXMoLi4uYXJndW1lbnRzKVxuICAgIHJldHVybiBpbnN0YW5jZS5ib3VuZC5iaW5kKGluc3RhbmNlKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvUmVjdGFuZ2xlIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3RvcihyZWN0YW5nbGUpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5yZWN0YW5nbGUgPSByZWN0YW5nbGVcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgY2FsY1BvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIGNvbnN0IHJlY3RQMiA9IHRoaXMucmVjdGFuZ2xlLmdldFAzKClcblxuICAgIGlmICh0aGlzLnJlY3RhbmdsZS5wb3NpdGlvbi54ID4gY2FsY1BvaW50LngpIHtcbiAgICAgIChjYWxjUG9pbnQueCA9IHRoaXMucmVjdGFuZ2xlLnBvc2l0aW9uLngpXG4gICAgfVxuICAgIGlmICh0aGlzLnJlY3RhbmdsZS5wb3NpdGlvbi55ID4gY2FsY1BvaW50LnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gdGhpcy5yZWN0YW5nbGUucG9zaXRpb24ueVxuICAgIH1cbiAgICBpZiAocmVjdFAyLnggPCBjYWxjUG9pbnQueCArIHNpemUueCkge1xuICAgICAgY2FsY1BvaW50LnggPSByZWN0UDIueCAtIHNpemUueFxuICAgIH1cbiAgICBpZiAocmVjdFAyLnkgPCBjYWxjUG9pbnQueSArIHNpemUueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSByZWN0UDIueSAtIHNpemUueVxuICAgIH1cblxuICAgIHJldHVybiBjYWxjUG9pbnRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb0VsZW1lbnQgZXh0ZW5kcyBCb3VuZFRvUmVjdGFuZ2xlIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29udGFpbmVyKSB7XG4gICAgc3VwZXIoUmVjdGFuZ2xlLmZyb21FbGVtZW50KGVsZW1lbnQsIGNvbnRhaW5lcikpXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyXG4gIH1cblxuICByZWZyZXNoICgpIHtcbiAgICB0aGlzLnJlY3RhbmdsZSA9IFJlY3RhbmdsZS5mcm9tRWxlbWVudCh0aGlzLmVsZW1lbnQsIHRoaXMuY29udGFpbmVyKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvTGluZVggZXh0ZW5kcyBCb3VuZCB7XG4gIGNvbnN0cnVjdG9yKHgsIHN0YXJ0WSwgZW5kWSkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnggPSB4XG4gICAgdGhpcy5zdGFydFkgPSBzdGFydFlcbiAgICB0aGlzLmVuZFkgPSBlbmRZXG4gIH1cblxuICBib3VuZChwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IGNhbGNQb2ludCA9IHBvaW50LmNsb25lKClcblxuICAgIGNhbGNQb2ludC54ID0gdGhpcy54XG4gICAgaWYgKHRoaXMuc3RhcnRZID4gY2FsY1BvaW50LnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gdGhpcy5zdGFydFlcbiAgICB9XG4gICAgaWYgKHRoaXMuZW5kWSA8IGNhbGNQb2ludC55ICsgc2l6ZS55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHRoaXMuZW5kWSAtIHNpemUueVxuICAgIH1cblxuICAgIHJldHVybiBjYWxjUG9pbnRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb0xpbmVZIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3Rvcih5LCBzdGFydFgsIGVuZFgpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy55ID0geVxuICAgIHRoaXMuc3RhcnRYID0gc3RhcnRYXG4gICAgdGhpcy5lbmRYID0gZW5kWFxuICB9XG5cbiAgYm91bmQocG9pbnQsIHNpemUpIHtcbiAgICBjb25zdCBjYWxjUG9pbnQgPSBwb2ludC5jbG9uZSgpXG4gICAgY2FsY1BvaW50LnkgPSB0aGlzLnlcbiAgICBpZiAodGhpcy5zdGFydFggPiBjYWxjUG9pbnQueCkge1xuICAgICAgY2FsY1BvaW50LnggPSB0aGlzLnN0YXJ0WFxuICAgIH1cbiAgICBpZiAodGhpcy5lbmRYIDwgY2FsY1BvaW50LnggKyBzaXplLngpIHtcbiAgICAgIGNhbGNQb2ludC54ID0gdGhpcy5lbmRYIC0gc2l6ZS54XG4gICAgfVxuICAgIHJldHVybiBjYWxjUG9pbnRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb0xpbmUgZXh0ZW5kcyBCb3VuZCB7XG4gIGNvbnN0cnVjdG9yKHN0YXJ0UG9pbnQsIGVuZFBvaW50KSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuc3RhcnRQb2ludCA9IHN0YXJ0UG9pbnRcbiAgICB0aGlzLmVuZFBvaW50ID0gZW5kUG9pbnRcbiAgICBjb25zdCBhbHBoYSA9IE1hdGguYXRhbjIoZW5kUG9pbnQueSAtIHN0YXJ0UG9pbnQueSwgZW5kUG9pbnQueCAtIHN0YXJ0UG9pbnQueClcbiAgICBjb25zdCBiZXRhID0gYWxwaGEgKyBNYXRoLlBJIC8gMlxuICAgIHRoaXMuc29tZUsgPSAxMFxuICAgIHRoaXMuY29zQmV0YSA9IE1hdGguY29zKGJldGEpXG4gICAgdGhpcy5zaW5CZXRhID0gTWF0aC5zaW4oYmV0YSlcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgcG9pbnQyID0gbmV3IFBvaW50KFxuICAgICAgcG9pbnQueCArIHRoaXMuc29tZUsgKiB0aGlzLmNvc0JldGEsXG4gICAgICBwb2ludC55ICsgdGhpcy5zb21lSyAqIHRoaXMuc2luQmV0YVxuICAgIClcblxuICAgIGNvbnN0IG5ld0VuZFBvaW50ID0gZ2V0UG9pbnRPbkxpbmVCeUxlbmdodCh0aGlzLmVuZFBvaW50LCB0aGlzLnN0YXJ0UG9pbnQsIHNpemUueClcbiAgICBjb25zdCBwb2ludENyb3NzaW5nID0gZGlyZWN0Q3Jvc3NpbmcodGhpcy5zdGFydFBvaW50LCB0aGlzLmVuZFBvaW50LCBwb2ludCwgcG9pbnQyKVxuXG4gICAgcmV0dXJuIGJvdW5kVG9MaW5lKHRoaXMuc3RhcnRQb2ludCwgbmV3RW5kUG9pbnQsIHBvaW50Q3Jvc3NpbmcpXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9DaXJjbGUgZXh0ZW5kcyBCb3VuZCB7XG4gIGNvbnN0cnVjdG9yKGNlbnRlciwgcmFkaXVzKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuY2VudGVyID0gY2VudGVyXG4gICAgdGhpcy5yYWRpdXMgPSByYWRpdXNcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBfc2l6ZSkge1xuICAgIHJldHVybiBnZXRQb2ludE9uTGluZUJ5TGVuZ2h0KHRoaXMuY2VudGVyLCBwb2ludCwgdGhpcy5yYWRpdXMpXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9BcmMgZXh0ZW5kcyBCb3VuZFRvQ2lyY2xlIHtcbiAgY29uc3RydWN0b3IoY2VudGVyLCByYWRpdXMsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlKSB7XG4gICAgc3VwZXIoY2VudGVyLCByYWRpdXMpXG4gICAgdGhpcy5fc3RhcnRBbmdsZSA9IHN0YXJ0QW5nbGVcbiAgICB0aGlzLl9lbmRBbmdsZSA9IGVuZEFuZ2xlXG4gIH1cblxuICBzdGFydEFuZ2xlKCkge1xuICAgIHJldHVybiB0eXBlb2YgdGhpcy5fc3RhcnRBbmdsZSA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMuX3N0YXJ0QW5nbGUoKSA6IHRoaXMuX3N0YXJ0QW5nbGVcbiAgfVxuXG4gIGVuZEFuZ2xlKCkge1xuICAgIHJldHVybiB0eXBlb2YgdGhpcy5fZW5kQW5nbGUgPT09ICdmdW5jdGlvbicgPyB0aGlzLl9lbmRBbmdsZSgpIDogdGhpcy5fZW5kQW5nbGVcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBfc2l6ZSkge1xuICAgIGxldCBhbmdsZSA9IGdldEFuZ2xlKHRoaXMuY2VudGVyLCBwb2ludClcbiAgICBhbmdsZSA9IG5vcm1hbGl6ZUFuZ2xlKGFuZ2xlKVxuICAgIGFuZ2xlID0gYm91bmRBbmdsZSh0aGlzLnN0YXJ0QW5nbGUoKSwgdGhpcy5lbmRBbmdsZSgpLCBhbmdsZSlcbiAgICByZXR1cm4gZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKGFuZ2xlLCB0aGlzLnJhZGl1cywgdGhpcy5jZW50ZXIpXG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGFycmF5LCB2YWwpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChhcnJheVtpXSA9PT0gdmFsKSB7XG4gICAgICBhcnJheS5zcGxpY2UoaSwgMSlcbiAgICAgIGktLVxuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyYXlcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJhbmdlKHN0YXJ0LCBzdG9wLCBzdGVwKSB7XG4gIGNvbnN0IHJlc3VsdCA9IFtdXG4gIGlmICh0eXBlb2Ygc3RvcCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBzdG9wID0gc3RhcnRcbiAgICBzdGFydCA9IDBcbiAgfVxuICBpZiAodHlwZW9mIHN0ZXAgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgc3RlcCA9IDFcbiAgfVxuICBpZiAoKHN0ZXAgPiAwICYmIHN0YXJ0ID49IHN0b3ApIHx8IChzdGVwIDwgMCAmJiBzdGFydCA8PSBzdG9wKSkge1xuICAgIHJldHVybiBbXVxuICB9XG4gIGZvciAobGV0IGkgPSBzdGFydDsgc3RlcCA+IDAgPyBpIDwgc3RvcCA6IGkgPiBzdG9wOyBpICs9IHN0ZXApIHtcbiAgICByZXN1bHQucHVzaChpKVxuICB9XG4gIHJldHVybiByZXN1bHRcbn1cbiIsImltcG9ydCBQb2ludCBmcm9tICcuL2dlb21ldHJ5L3BvaW50J1xuaW1wb3J0IHsgYWRkUG9pbnRUb0JvdW5kUG9pbnRzIH0gZnJvbSAnLi9nZW9tZXRyeS9ib3VuZHMnXG5cbmltcG9ydCB7XG4gIGluZGV4T2ZOZWFyZXN0UG9pbnQsXG4gIGdldERpc3RhbmNlXG59IGZyb20gJy4vZ2VvbWV0cnkvZGlzdGFuY2VzJ1xuXG5jbGFzcyBCYXNpY1N0cmF0ZWd5IHtcbiAgY29uc3RydWN0b3IocmVjdGFuZ2xlLCBvcHRpb25zPXt9KSB7XG4gICAgdGhpcy5yZWN0YW5nbGUgPSByZWN0YW5nbGVcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zXG4gIH1cblxuICBnZXQgYm91bmRSZWN0ICgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMucmVjdGFuZ2xlID09PSAnZnVuY3Rpb24nID8gdGhpcy5yZWN0YW5nbGUoKSA6IHRoaXMucmVjdGFuZ2xlXG4gIH1cbn1cblxuY2xhc3MgTm90Q3Jvc3NpbmdTdHJhdGVneSBleHRlbmRzIEJhc2ljU3RyYXRlZ3kge1xuICBwb3NpdGlvbmluZyAocmVjdGFuZ2xlTGlzdCwgaW5kZXhlc09mTmV3cykge1xuICAgIGNvbnN0IHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMgPSByZWN0YW5nbGVMaXN0LnJlZHVjZSgoaW5kZXhlcywgX3JlY3QsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoaW5kZXhlc09mTmV3cy5pbmRleE9mKGluZGV4KSA9PT0gLTEpIHtcbiAgICAgICAgaW5kZXhlcy5wdXNoKGluZGV4KVxuICAgICAgfVxuICAgICAgcmV0dXJuIGluZGV4ZXNcbiAgICB9LCBbXSlcblxuICAgIGluZGV4ZXNPZk5ld3MuZm9yRWFjaCgoaW5kZXgpID0+IHtcbiAgICAgIGxldCByZWN0ID0gcmVjdGFuZ2xlTGlzdFtpbmRleF1cbiAgICAgIGxldCByZW1vdmFibGUgPSBmYWxzZVxuXG4gICAgICBzdGF0aWNSZWN0YW5nbGVJbmRleGVzLmZvckVhY2goKGluZGV4T2ZTdGF0aWMpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhdGljUmVjdCA9IHJlY3RhbmdsZUxpc3RbaW5kZXhPZlN0YXRpY11cbiAgICAgICAgcmVjdCA9IHN0YXRpY1JlY3QubW92ZVRvQm91bmQocmVjdClcbiAgICAgIH0pXG5cbiAgICAgIHJlbW92YWJsZSA9IHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMuc29tZSgoaW5kZXhPZlN0YXRpYykgPT4ge1xuICAgICAgICBjb25zdCBzdGF0aWNSZWN0ID0gcmVjdGFuZ2xlTGlzdFtpbmRleE9mU3RhdGljXVxuICAgICAgICByZXR1cm4gICEhc3RhdGljUmVjdC5hbmQocmVjdClcbiAgICAgIH0pIHx8IHJlY3QuYW5kKHRoaXMuYm91bmRSZWN0KS5nZXRTcXVhcmUoKSAhPT0gcmVjdC5nZXRTcXVhcmUoKVxuXG4gICAgICBpZiAocmVtb3ZhYmxlKSB7XG4gICAgICAgIHJlY3QucmVtb3ZhYmxlID0gdHJ1ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdGljUmVjdGFuZ2xlSW5kZXhlcy5wdXNoKGluZGV4KVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHJlY3RhbmdsZUxpc3RcbiAgfVxuXG4gIHNvcnRpbmcob2RsRHJhZ2dhYmxlc0xpc3QsIG5ld0RyYWdnYWJsZXMsIGluZGV4T2ZOZXdzKSB7XG4gICAgY29uc3QgZHJhZ2dhYmxlcyA9IG9kbERyYWdnYWJsZXNMaXN0LmNvbmNhdChuZXdEcmFnZ2FibGVzKVxuICAgIG5ld0RyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBpbmRleE9mTmV3cy5wdXNoKGRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpKVxuICAgIH0pXG4gICAgcmV0dXJuIGRyYWdnYWJsZXNcbiAgfVxufVxuXG5jbGFzcyBGbG9hdExlZnRTdHJhdGVneSBleHRlbmRzIEJhc2ljU3RyYXRlZ3kge1xuICBjb25zdHJ1Y3RvcihyZWN0YW5nbGUsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcihyZWN0YW5nbGUsIG9wdGlvbnMpXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICByZW1vdmFibGU6IHRydWVcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGhpcy5yYWRpdXMgPSBvcHRpb25zLnJhZGl1cyB8fCA4MFxuXG4gICAgdGhpcy5wYWRkaW5nVG9wTGVmdCA9IG9wdGlvbnMucGFkZGluZ1RvcExlZnQgfHwgbmV3IFBvaW50KDAsIDApXG4gICAgdGhpcy5wYWRkaW5nQm90dG9tUmlnaHQgPSBvcHRpb25zLnBhZGRpbmdCb3R0b21SaWdodCB8fCBuZXcgUG9pbnQoMCwgMClcbiAgICB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyA9IG9wdGlvbnMueUdhcEJldHdlZW5EcmFnZ2FibGVzIHx8IDBcblxuICAgIHRoaXMuZ2V0RGlzdGFuY2UgPSBvcHRpb25zLmdldERpc3RhbmNlIHx8IGdldERpc3RhbmNlXG4gICAgdGhpcy5nZXRQb3NpdGlvbiA9IG9wdGlvbnMuZ2V0UG9zaXRpb24gfHwgKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5wb3NpdGlvbilcbiAgfVxuXG4gIHBvc2l0aW9uaW5nKHJlY3RhbmdsZUxpc3QsIF9pbmRleGVzT2ZOZXdzKSB7XG4gICAgY29uc3QgYm91bmRSZWN0ID0gdGhpcy5ib3VuZFJlY3RcbiAgICBjb25zdCByZWN0UDIgPSBib3VuZFJlY3QuZ2V0UDIoKVxuICAgIGxldCBib3VuZGFyeVBvaW50cyA9IFtib3VuZFJlY3QucG9zaXRpb25dXG5cbiAgICByZWN0YW5nbGVMaXN0LmZvckVhY2goKHJlY3QsIHJlY3RJbmRleCkgPT4ge1xuICAgICAgbGV0IHBvc2l0aW9uLCBpc1ZhbGlkID0gZmFsc2VcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm91bmRhcnlQb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcG9zaXRpb24gPSBuZXcgUG9pbnQoXG4gICAgICAgICAgYm91bmRhcnlQb2ludHNbaV0ueCArIHRoaXMucGFkZGluZ1RvcExlZnQueCxcbiAgICAgICAgICBpID4gMCA/IChib3VuZGFyeVBvaW50c1tpIC0gMV0ueSArIHRoaXMueUdhcEJldHdlZW5EcmFnZ2FibGVzKSA6IChib3VuZFJlY3QucG9zaXRpb24ueSArIHRoaXMucGFkZGluZ1RvcExlZnQueSlcbiAgICAgICAgKVxuXG4gICAgICAgIGlzVmFsaWQgPSAocG9zaXRpb24ueCArIHJlY3Quc2l6ZS54IDwgcmVjdFAyLngpXG5cbiAgICAgICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICBwb3NpdGlvbiA9IG5ldyBQb2ludChcbiAgICAgICAgICBib3VuZFJlY3QucG9zaXRpb24ueCArIHRoaXMucGFkZGluZ1RvcExlZnQueCxcbiAgICAgICAgICBib3VuZGFyeVBvaW50c1tib3VuZGFyeVBvaW50cy5sZW5ndGggLSAxXS55ICsgKHJlY3RJbmRleCA+IDAgPyB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyA6IHRoaXMucGFkZGluZ1RvcExlZnQueSlcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICByZWN0LnBvc2l0aW9uID0gcG9zaXRpb25cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucmVtb3ZhYmxlICYmIHJlY3QuZ2V0UDMoKS55ID4gYm91bmRSZWN0LmdldFAzKCkueSkge1xuICAgICAgICByZWN0LnJlbW92YWJsZSA9IHRydWVcbiAgICAgIH1cblxuICAgICAgYm91bmRhcnlQb2ludHMgPSBhZGRQb2ludFRvQm91bmRQb2ludHMoYm91bmRhcnlQb2ludHMsIHJlY3QuZ2V0UDMoKS5hZGQodGhpcy5wYWRkaW5nQm90dG9tUmlnaHQpKVxuICAgIH0pXG4gICAgcmV0dXJuIHJlY3RhbmdsZUxpc3RcbiAgfVxuXG4gIHNvcnRpbmcob2RsRHJhZ2dhYmxlc0xpc3QsIG5ld0RyYWdnYWJsZXMsIGluZGV4T2ZOZXdzKSB7XG4gICAgY29uc3QgbmV3TGlzdCA9IG9kbERyYWdnYWJsZXNMaXN0LmNvbmNhdCgpXG4gICAgY29uc3QgbGlzdE9sZFBvc2l0aW9uID0gb2RsRHJhZ2dhYmxlc0xpc3QubWFwKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5nZXRQb3NpdGlvbigpKVxuICAgIG5ld0RyYWdnYWJsZXMuZm9yRWFjaCgobmV3RHJhZ2dhYmxlKSA9PiB7XG4gICAgICBsZXQgaW5kZXggPSBpbmRleE9mTmVhcmVzdFBvaW50KGxpc3RPbGRQb3NpdGlvbiwgdGhpcy5nZXRQb3NpdGlvbihuZXdEcmFnZ2FibGUpLCB0aGlzLnJhZGl1cywgdGhpcy5nZXREaXN0YW5jZSlcbiAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgaW5kZXggPSBuZXdMaXN0Lmxlbmd0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5kZXggPSBuZXdMaXN0LmluZGV4T2Yob2RsRHJhZ2dhYmxlc0xpc3RbaW5kZXhdKVxuICAgICAgfVxuICAgICAgbmV3TGlzdC5zcGxpY2UoaW5kZXgsIDAsIG5ld0RyYWdnYWJsZSlcbiAgICB9KVxuICAgIG5ld0RyYWdnYWJsZXMuZm9yRWFjaCgobmV3RHJhZ2dhYmxlKSA9PiB7XG4gICAgICBpbmRleE9mTmV3cy5wdXNoKG5ld0xpc3QuaW5kZXhPZihuZXdEcmFnZ2FibGUpKVxuICAgIH0pXG4gICAgcmV0dXJuIG5ld0xpc3RcbiAgfVxufVxuXG5jbGFzcyBGbG9hdFJpZ2h0U3RyYXRlZ3kgZXh0ZW5kcyBGbG9hdExlZnRTdHJhdGVneSB7XG4gIGNvbnN0cnVjdG9yKHJlY3RhbmdsZSwgb3B0aW9ucz17fSkge1xuICAgIHN1cGVyKHJlY3RhbmdsZSwgb3B0aW9ucylcblxuICAgIHRoaXMucGFkZGluZ1RvcFJpZ2h0ID0gb3B0aW9ucy5wYWRkaW5nVG9wUmlnaHQgfHwgbmV3IFBvaW50KDUsIDUpXG4gICAgdGhpcy5wYWRkaW5nQm90dG9tTGVmdCA9IG9wdGlvbnMucGFkZGluZ0JvdHRvbUxlZnQgfHwgbmV3IFBvaW50KDAsIDApXG4gICAgdGhpcy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgPSBvcHRpb25zLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyB8fCAwXG5cbiAgICB0aGlzLnBhZGRpbmdCb3R0b21OZWdMZWZ0ID0gbmV3IFBvaW50KC10aGlzLnBhZGRpbmdCb3R0b21MZWZ0LngsIHRoaXMucGFkZGluZ0JvdHRvbUxlZnQueSlcbiAgfVxuXG4gIHBvc2l0aW9uaW5nKHJlY3RhbmdsZUxpc3QsIF9pbmRleGVzT2ZOZXdzKSB7XG4gICAgY29uc3QgYm91bmRSZWN0ID0gdGhpcy5ib3VuZFJlY3RcbiAgICBsZXQgYm91bmRhcnlQb2ludHMgPSBbYm91bmRSZWN0LmdldFAyKCldXG5cbiAgICByZWN0YW5nbGVMaXN0LmZvckVhY2goKHJlY3QsIHJlY3RJbmRleCkgPT4ge1xuICAgICAgbGV0IHBvc2l0aW9uLCBpc1ZhbGlkID0gZmFsc2VcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm91bmRhcnlQb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcG9zaXRpb24gPSBuZXcgUG9pbnQoXG4gICAgICAgICAgYm91bmRhcnlQb2ludHNbaV0ueCAtIHJlY3Quc2l6ZS54IC0gdGhpcy5wYWRkaW5nVG9wUmlnaHQueCxcbiAgICAgICAgICBpID4gMCA/IChib3VuZGFyeVBvaW50c1tpIC0gMV0ueSArIHRoaXMueUdhcEJldHdlZW5EcmFnZ2FibGVzKSA6IChib3VuZFJlY3QucG9zaXRpb24ueSArIHRoaXMucGFkZGluZ1RvcFJpZ2h0LnkpXG4gICAgICAgIClcblxuICAgICAgICBpc1ZhbGlkID0gKHBvc2l0aW9uLnggPiByZWN0LnBvc2l0aW9uLngpXG4gICAgICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICAgIHBvc2l0aW9uID0gbmV3IFBvaW50KFxuICAgICAgICAgIGJvdW5kUmVjdC5nZXRQMigpLnggIC0gcmVjdC5zaXplLnggLSB0aGlzLnBhZGRpbmdUb3BSaWdodC54LFxuICAgICAgICAgIGJvdW5kYXJ5UG9pbnRzW2JvdW5kYXJ5UG9pbnRzLmxlbmd0aCAtIDFdLnkgKyAocmVjdEluZGV4ID4gMCA/IHRoaXMueUdhcEJldHdlZW5EcmFnZ2FibGVzIDogdGhpcy5wYWRkaW5nVG9wUmlnaHQueSlcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgcmVjdC5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnJlbW92YWJsZSAmJiByZWN0LmdldFA0KCkueSA+IGJvdW5kUmVjdC5nZXRQNCgpLnkpIHtcbiAgICAgICAgcmVjdC5yZW1vdmFibGUgPSB0cnVlXG4gICAgICB9XG4gICAgICBib3VuZGFyeVBvaW50cyA9IGFkZFBvaW50VG9Cb3VuZFBvaW50cyhib3VuZGFyeVBvaW50cywgcmVjdC5nZXRQNCgpLmFkZCh0aGlzLnBhZGRpbmdCb3R0b21OZWdMZWZ0KSwgdHJ1ZSlcbiAgICB9KVxuICAgIHJldHVybiByZWN0YW5nbGVMaXN0XG4gIH1cbn1cblxuZXhwb3J0IHsgTm90Q3Jvc3NpbmdTdHJhdGVneSwgRmxvYXRMZWZ0U3RyYXRlZ3ksIEZsb2F0UmlnaHRTdHJhdGVneSB9XG4iLCJpbXBvcnQgcmFuZ2UgZnJvbSAnLi91dGlscy9yYW5nZS5qcydcbmltcG9ydCByZW1vdmVJdGVtIGZyb20gJy4vdXRpbHMvcmVtb3ZlLWFycmF5LWl0ZW0nXG5pbXBvcnQgZ2V0RGVmYXVsdENvbnRhaW5lciBmcm9tICcuL3V0aWxzL2dldC1kZWZhdWx0LWNvbnRhaW5lcidcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudEVtaXR0ZXInXG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gJy4vZ2VvbWV0cnkvcmVjdGFuZ2xlJ1xuaW1wb3J0IHsgdHJhbnNmb3JtZWRTcGFjZURpc3RhbmNlRmFjdG9yeSB9IGZyb20gJy4vZ2VvbWV0cnkvZGlzdGFuY2VzJ1xuaW1wb3J0IHsgc2NvcGVzLCBkZWZhdWx0U2NvcGUgfSBmcm9tICcuL3Njb3BlJ1xuXG5pbXBvcnQgeyBGbG9hdExlZnRTdHJhdGVneSB9IGZyb20gJy4vcG9zaXRpb25pbmcnXG5pbXBvcnQgeyBCb3VuZFRvRWxlbWVudCB9IGZyb20gJy4vYm91bmRpbmcnXG5cbmNvbnN0IGFkZFRvRGVmYXVsdFNjb3BlID0gZnVuY3Rpb24odGFyZ2V0KSB7XG4gIGRlZmF1bHRTY29wZS5hZGRUYXJnZXQodGFyZ2V0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXJnZXQgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBkcmFnZ2FibGVzLCBvcHRpb25zID0ge30pIHtcbiAgICBzdXBlcihvcHRpb25zKVxuICAgIGNvbnN0IHRhcmdldCA9IHRoaXNcblxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgdGltZUVuZDogMjAwLFxuICAgICAgdGltZUV4Y2FuZ2U6IDQwMFxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0aGlzLnBvc2l0aW9uaW5nU3RyYXRlZ3kgPSBvcHRpb25zLnN0cmF0ZWd5IHx8IG5ldyBGbG9hdExlZnRTdHJhdGVneShcbiAgICAgIHRoaXMuZ2V0UmVjdGFuZ2xlLmJpbmQodGhpcyksXG4gICAgICB7XG4gICAgICAgIHJhZGl1czogODAsXG4gICAgICAgIGdldERpc3RhbmNlOiB0cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5KHsgeDogMSwgeTogNCB9KSxcbiAgICAgICAgcmVtb3ZhYmxlOiB0cnVlXG4gICAgICB9XG4gICAgKVxuXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUudGFyZ2V0cy5wdXNoKHRhcmdldCkpXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gZHJhZ2dhYmxlc1xuXG4gICAgVGFyZ2V0LmVtaXR0ZXIuZW1pdCgndGFyZ2V0OmNyZWF0ZScsIHRoaXMpXG5cbiAgICB0aGlzLnN0YXJ0Qm91bmRpbmcoKVxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBzdGFydEJvdW5kaW5nKCkge1xuICAgIHRoaXMuYm91bmQgPSB0aGlzLm9wdGlvbnMuYm91bmQgfHwgQm91bmRUb0VsZW1lbnQuYm91bmRpbmcodGhpcy5lbGVtZW50KVxuICB9XG5cbiAgcG9zaXRpb25pbmcgKGRyYWdnYWJsZXMsIGluZGV4ZXNPZk5ldykge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uaW5nU3RyYXRlZ3kucG9zaXRpb25pbmcoZHJhZ2dhYmxlcywgaW5kZXhlc09mTmV3KVxuICB9XG5cbiAgc29ydGluZyAob2xkRHJhZ2dhYmxlcywgbmV3RHJhZ2dhYmxlcywgaW5kZXhPZk5ld3MpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbmluZ1N0cmF0ZWd5LnNvcnRpbmcob2xkRHJhZ2dhYmxlcywgbmV3RHJhZ2dhYmxlcywgaW5kZXhPZk5ld3MpXG4gIH1cblxuICBpbml0KCkge1xuICAgIGxldCByZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXdcblxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzID0gdGhpcy5kcmFnZ2FibGVzLmZpbHRlcigoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBsZXQgZWxlbWVudCA9IGRyYWdnYWJsZS5lbGVtZW50LnBhcmVudE5vZGVcbiAgICAgIHdoaWxlIChlbGVtZW50KSB7XG4gICAgICAgIGlmIChlbGVtZW50ID09PSB0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGVcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH0pXG5cbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMubGVuZ3RoKSB7XG4gICAgICBpbmRleGVzT2ZOZXcgPSByYW5nZSh0aGlzLmlubmVyRHJhZ2dhYmxlcy5sZW5ndGgpXG4gICAgICByZWN0YW5nbGVzID0gdGhpcy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgICB9KSwgaW5kZXhlc09mTmV3KVxuICAgICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXcpXG4gICAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHRoaXMuZW1pdCgndGFyZ2V0OmFkZCcsIGRyYWdnYWJsZSkpXG4gICAgfVxuICB9XG5cbiAgZ2V0UmVjdGFuZ2xlKCkge1xuICAgIHJldHVybiBSZWN0YW5nbGUuZnJvbUVsZW1lbnQodGhpcy5lbGVtZW50LCB0aGlzLmNvbnRhaW5lciwgdHJ1ZSlcbiAgfVxuXG4gIGNhdGNoRHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuY2F0Y2hEcmFnZ2FibGUpIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuY2F0Y2hEcmFnZ2FibGUodGhpcywgZHJhZ2dhYmxlKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0YXJnZXRSZWN0YW5nbGUgPSB0aGlzLmdldFJlY3RhbmdsZSgpXG4gICAgICBjb25zdCBkcmFnZ2FibGVTcXVhcmUgPSBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKCkuZ2V0U3F1YXJlKClcblxuICAgICAgcmV0dXJuIGRyYWdnYWJsZVNxdWFyZSA8IHRhcmdldFJlY3RhbmdsZS5nZXRTcXVhcmUoKVxuICAgICAgICAgICAgICAmJiB0YXJnZXRSZWN0YW5nbGUuaW5jbHVkZVBvaW50KGRyYWdnYWJsZS5nZXRDZW50ZXIoKSlcbiAgICB9XG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRSZWN0YW5nbGUoKS5wb3NpdGlvblxuICB9XG5cbiAgZ2V0U2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRSZWN0YW5nbGUoKS5zaXplXG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHNjb3Blcy5mb3JFYWNoKChzY29wZSkgPT4gcmVtb3ZlSXRlbShzY29wZS50YXJnZXRzLCB0aGlzKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgW10pXG4gICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBbXSwgMClcbiAgfVxuXG4gIG9uRW5kKGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IG5ld0RyYWdnYWJsZXNJbmRleCA9IFtdXG5cbiAgICBpZiAodGhpcy5nZXRSZWN0YW5nbGUoKS5pbmNsdWRlUG9pbnQoZHJhZ2dhYmxlLmdldENlbnRlcigpKSkge1xuICAgICAgZHJhZ2dhYmxlLnBvc2l0aW9uID0gdGhpcy5ib3VuZChkcmFnZ2FibGUucG9zaXRpb24sIGRyYWdnYWJsZS5nZXRTaXplKCkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHRoaXMuZW1pdCgndGFyZ2V0OmJlZm9yZUFkZCcsIGRyYWdnYWJsZSlcblxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzID0gdGhpcy5zb3J0aW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLCBbZHJhZ2dhYmxlXSwgbmV3RHJhZ2dhYmxlc0luZGV4KVxuICAgIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgfSksIG5ld0RyYWdnYWJsZXNJbmRleClcblxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgbmV3RHJhZ2dhYmxlc0luZGV4KVxuICAgIGlmICh0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkgIT09IC0xKSB7XG4gICAgICB0aGlzLmFkZFJlbW92ZU9uTW92ZShkcmFnZ2FibGUpXG4gICAgfVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBzZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXcsIHRpbWUpIHtcbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5zbGljZSgwKS5mb3JFYWNoKChkcmFnZ2FibGUsIGkpID0+IHtcbiAgICAgIGNvbnN0IHJlY3QgPSByZWN0YW5nbGVzW2ldLFxuICAgICAgICB0aW1lRW5kID0gdGltZSB8fCB0aW1lID09PSAwID8gdGltZSA6IGluZGV4ZXNPZk5ldy5pbmRleE9mKGkpICE9PSAtMSA/IHRoaXMub3B0aW9ucy50aW1lRW5kIDogdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlXG5cbiAgICAgIGlmIChyZWN0LnJlbW92YWJsZSkge1xuICAgICAgICBkcmFnZ2FibGUubW92ZShkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uLCB0aW1lRW5kLCB0cnVlLCB0cnVlKVxuICAgICAgICByZW1vdmVJdGVtKHRoaXMuaW5uZXJEcmFnZ2FibGVzLCBkcmFnZ2FibGUpXG4gICAgICAgIHRoaXMuZW1pdCgndGFyZ2V0OnJlbW92ZScsIGRyYWdnYWJsZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRyYWdnYWJsZS5tb3ZlKHJlY3QucG9zaXRpb24sIHRpbWVFbmQsIHRydWUsIHRydWUpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGFkZChkcmFnZ2FibGUsIHRpbWUpIHtcbiAgICBjb25zdCBuZXdEcmFnZ2FibGVzSW5kZXggPSB0aGlzLmlubmVyRHJhZ2dhYmxlcy5sZW5ndGhcblxuICAgIHRoaXMuZW1pdCgndGFyZ2V0OmJlZm9yZUFkZCcsIGRyYWdnYWJsZSlcblxuICAgIHRoaXMucHVzaElubmVyRHJhZ2dhYmxlKGRyYWdnYWJsZSlcbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBuZXdEcmFnZ2FibGVzSW5kZXgsIGRyYWdnYWJsZSlcblxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgW25ld0RyYWdnYWJsZXNJbmRleF0sIHRpbWUgfHwgMClcbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMSkge1xuICAgICAgdGhpcy5hZGRSZW1vdmVPbk1vdmUoZHJhZ2dhYmxlKVxuICAgIH1cbiAgfVxuXG4gIHB1c2hJbm5lckRyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpPT09LTEpIHtcbiAgICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxuICAgIH1cbiAgfVxuXG4gIGFkZFJlbW92ZU9uTW92ZShkcmFnZ2FibGUpIHtcbiAgICBkcmFnZ2FibGUub24oJ2RyYWc6bW92ZScsIHRoaXMucmVtb3ZlSGFuZGxlciA9ICgpID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlKGRyYWdnYWJsZSlcbiAgICB9KVxuXG4gICAgdGhpcy5lbWl0KCd0YXJnZXQ6YWRkJywgZHJhZ2dhYmxlKVxuICB9XG5cbiAgcmVtb3ZlKGRyYWdnYWJsZSkge1xuICAgIGRyYWdnYWJsZS51bnN1YnNjcmliZSgnZHJhZzptb3ZlJywgdGhpcy5yZW1vdmVIYW5kbGVyKVxuXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSlcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5zcGxpY2UoaW5kZXgsIDEpXG5cbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBbXSlcblxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgW10pXG4gICAgdGhpcy5lbWl0KCd0YXJnZXQ6cmVtb3ZlJywgZHJhZ2dhYmxlKVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUubW92ZShkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uLCAwLCB0cnVlLCB0cnVlKVxuICAgICAgdGhpcy5lbWl0KCd0YXJnZXQ6cmVtb3ZlJywgZHJhZ2dhYmxlKVxuICAgIH0pXG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMgPSBbXVxuICB9XG5cbiAgZ2V0U29ydGVkRHJhZ2dhYmxlcygpIHtcbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5zbGljZSgpXG4gIH1cblxuICBnZXQgY29udGFpbmVyKCkge1xuICAgIHJldHVybiAodGhpcy5fY29udGFpbmVyID0gdGhpcy5fY29udGFpbmVyIHx8IHRoaXMub3B0aW9ucy5jb250YWluZXIgfHwgdGhpcy5vcHRpb25zLnBhcmVudCB8fCBnZXREZWZhdWx0Q29udGFpbmVyKHRoaXMuZWxlbWVudCkpXG4gIH1cbn1cblxuVGFyZ2V0LmVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKClcblRhcmdldC5lbWl0dGVyLm9uKCd0YXJnZXQ6Y3JlYXRlJywgYWRkVG9EZWZhdWx0U2NvcGUpXG4iLCJpbXBvcnQgcmVtb3ZlSXRlbSBmcm9tICcuL3V0aWxzL3JlbW92ZS1hcnJheS1pdGVtJ1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50RW1pdHRlcidcbmltcG9ydCBEcmFnZ2FibGUgZnJvbSAnLi9kcmFnZ2FibGUnXG5pbXBvcnQgVGFyZ2V0IGZyb20gJy4vdGFyZ2V0J1xuXG5jb25zdCBzY29wZXMgPSBbXVxuXG5jbGFzcyBTY29wZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKGRyYWdnYWJsZXMsIHRhcmdldHMsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcihvcHRpb25zKVxuICAgIHNjb3Blcy5mb3JFYWNoKChzY29wZSkgPT4ge1xuICAgICAgaWYgKGRyYWdnYWJsZXMpIHtcbiAgICAgICAgZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgICAgICByZW1vdmVJdGVtKHNjb3BlLmRyYWdnYWJsZXMsIGRyYWdnYWJsZSlcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgaWYgKHRhcmdldHMpIHtcbiAgICAgICAgdGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHtcbiAgICAgICAgICByZW1vdmVJdGVtKHNjb3BlLnRhcmdldHMsIHRhcmdldClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gZHJhZ2dhYmxlcyB8fCBbXVxuICAgIHRoaXMudGFyZ2V0cyA9IHRhcmdldHMgfHwgW11cbiAgICBzY29wZXMucHVzaCh0aGlzKVxuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgIHRpbWVFbmQ6IChvcHRpb25zLnRpbWVFbmQpIHx8IDQwMFxuICAgIH1cblxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5kcmFnRW5kQWN0aW9uID0gKCkgPT4gdGhpcy5vbkVuZChkcmFnZ2FibGUpXG4gICAgfSlcbiAgfVxuXG4gIGFkZERyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMucHVzaChkcmFnZ2FibGUpXG4gICAgZHJhZ2dhYmxlLmRyYWdFbmRBY3Rpb24gPSAoKSA9PiB0aGlzLm9uRW5kKGRyYWdnYWJsZSlcbiAgfVxuXG4gIGFkZFRhcmdldCh0YXJnZXQpIHtcbiAgICB0aGlzLnRhcmdldHMucHVzaCh0YXJnZXQpXG4gIH1cblxuICBvbkVuZChkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBzaG90VGFyZ2V0cyA9IHRoaXMudGFyZ2V0cy5maWx0ZXIoKHRhcmdldCkgPT4ge1xuICAgICAgcmV0dXJuIHRhcmdldC5kcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTFcbiAgICB9KS5maWx0ZXIoKHRhcmdldCkgPT4ge1xuICAgICAgcmV0dXJuIHRhcmdldC5jYXRjaERyYWdnYWJsZShkcmFnZ2FibGUpXG4gICAgfSkuc29ydCgoYSwgYikgPT4ge1xuICAgICAgcmV0dXJuIGEuZ2V0UmVjdGFuZ2xlKCkuZ2V0U3F1YXJlKCkgLSBiLmdldFJlY3RhbmdsZSgpLmdldFNxdWFyZSgpXG4gICAgfSlcblxuICAgIGlmIChzaG90VGFyZ2V0cy5sZW5ndGgpIHtcbiAgICAgIHNob3RUYXJnZXRzWzBdLm9uRW5kKGRyYWdnYWJsZSlcbiAgICB9IGVsc2UgaWYgKGRyYWdnYWJsZS50YXJnZXRzLmxlbmd0aCkge1xuICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKGRyYWdnYWJsZS5pbml0aWFsUG9zaXRpb24sIHRoaXMub3B0aW9ucy50aW1lRW5kKVxuICAgIH1cblxuICAgIHRoaXMuZW1pdCgnc2NvcGU6Y2hhbmdlJylcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMudGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHRhcmdldC5yZXNldCgpKVxuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucmVmcmVzaCgpKVxuICAgIHRoaXMudGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHRhcmdldC5yZWZyZXNoKCkpXG4gIH1cblxuICBnZXQgcG9zaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnRhcmdldHMubWFwKCh0YXJnZXQpID0+IHtcbiAgICAgIHJldHVybiB0YXJnZXQuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB0aGlzLmRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpKVxuICAgIH0pXG4gIH1cblxuICBzZXQgcG9zaXRpb25zKHBvc2l0aW9ucykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSAnd3JvbmcgYXJyYXkgbGVuZ3RoJ1xuICAgIGlmIChwb3NpdGlvbnMubGVuZ3RoID09PSB0aGlzLnRhcmdldHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB0YXJnZXQucmVzZXQoKSlcblxuICAgICAgcG9zaXRpb25zLmZvckVhY2goKHRhcmdldEluZGV4ZXMsIGkpID0+IHtcbiAgICAgICAgdGFyZ2V0SW5kZXhlcy5mb3JFYWNoKChpbmRleCkgPT4ge1xuICAgICAgICAgIHRoaXMudGFyZ2V0c1tpXS5hZGQodGhpcy5kcmFnZ2FibGVzW2luZGV4XSlcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG1lc3NhZ2VcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgZGVmYXVsdFNjb3BlID0gbmV3IFNjb3BlKClcblxuZnVuY3Rpb24gc2NvcGUoZm4pIHtcbiAgY29uc3QgY3VycmVudFNjb3BlID0gbmV3IFNjb3BlKClcblxuICBjb25zdCBhZGREcmFnZ2FibGVUb1Njb3BlID0gZnVuY3Rpb24oZHJhZ2dhYmxlKSB7XG4gICAgY3VycmVudFNjb3BlLmFkZERyYWdnYWJsZShkcmFnZ2FibGUpXG4gICAgRHJhZ2dhYmxlLmVtaXR0ZXIuaW50ZXJydXB0KClcbiAgfVxuXG4gIGNvbnN0IGFkZFRhcmdldFRvU2NvcGUgPSBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICBjdXJyZW50U2NvcGUuYWRkVGFyZ2V0KHRhcmdldClcbiAgICBEcmFnZ2FibGUuZW1pdHRlci5pbnRlcnJ1cHQoKVxuICB9XG5cbiAgRHJhZ2dhYmxlLmVtaXR0ZXIucHJlcGVuZE9uKCdkcmFnZ2FibGU6Y3JlYXRlJywgYWRkRHJhZ2dhYmxlVG9TY29wZSlcbiAgVGFyZ2V0LmVtaXR0ZXIucHJlcGVuZE9uKCd0YXJnZXQ6Y3JlYXRlJywgYWRkVGFyZ2V0VG9TY29wZSlcbiAgZm4uY2FsbCgpXG4gIERyYWdnYWJsZS5lbWl0dGVyLnVuc3Vic2NyaWJlKCdkcmFnZ2FibGU6Y3JlYXRlJywgYWRkRHJhZ2dhYmxlVG9TY29wZSlcbiAgVGFyZ2V0LmVtaXR0ZXIudW5zdWJzY3JpYmUoJ3RhcmdldDpjcmVhdGUnLCBhZGRUYXJnZXRUb1Njb3BlKVxuICByZXR1cm4gY3VycmVudFNjb3BlXG59XG5cbmV4cG9ydCB7IHNjb3BlcywgZGVmYXVsdFNjb3BlLCBTY29wZSwgc2NvcGUgfVxuIiwiZnVuY3Rpb24gY2hlY2tTdXBwb3J0UGFzc2l2ZUV2ZW50cygpIHtcbiAgbGV0IHBhc3NpdmVTdXBwb3J0ZWQgPSBmYWxzZVxuXG4gIHRyeSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ3Bhc3NpdmUnLCB7XG4gICAgICBnZXQoKSB7XG4gICAgICAgIHJldHVybiAocGFzc2l2ZVN1cHBvcnRlZCA9IHRydWUpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0ZXN0Jywgb3B0aW9ucywgb3B0aW9ucylcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndGVzdCcsIG9wdGlvbnMsIG9wdGlvbnMpXG4gIH0gY2F0Y2ggKF9lcnIpIHtcbiAgICBwYXNzaXZlU3VwcG9ydGVkID0gZmFsc2VcbiAgfVxuXG4gIHJldHVybiBwYXNzaXZlU3VwcG9ydGVkXG59XG5cbmV4cG9ydCBjb25zdCBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzID0gY2hlY2tTdXBwb3J0UGFzc2l2ZUV2ZW50cygpXG5cbmZ1bmN0aW9uIGV2ZW50T3B0aW9ucyhvcHRpb25zLCBmYWxsYmFjayA9IGZhbHNlKSB7XG4gIHJldHVybiBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzID8gb3B0aW9ucyA6IGZhbGxiYWNrXG59XG5cbmV4cG9ydCB7IGV2ZW50T3B0aW9ucyB9XG5cbmV4cG9ydCBkZWZhdWx0IGlzU3VwcG9ydFBhc3NpdmVFdmVudHNcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRocm90dGxlKGZ1bmMsIHdhaXQpIHtcbiAgbGV0IGxhc3RUaW1lID0gMFxuXG4gIHJldHVybiBmdW5jdGlvbiBleGVjdXRlZEZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzXG4gICAgY29uc3QgYXJncyA9IGFyZ3VtZW50c1xuXG4gICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKVxuICAgIGlmIChub3cgLSBsYXN0VGltZSA+PSB3YWl0KSB7XG4gICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpXG4gICAgICBsYXN0VGltZSA9IG5vd1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IGdldERlZmF1bHRDb250YWluZXIgZnJvbSAnLi91dGlscy9nZXQtZGVmYXVsdC1jb250YWluZXInXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnRFbWl0dGVyJ1xuaW1wb3J0IHsgQm91bmRUb0VsZW1lbnQgfSBmcm9tICcuL2JvdW5kaW5nJ1xuaW1wb3J0IFBvaW50IGZyb20gJy4vZ2VvbWV0cnkvcG9pbnQnXG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gJy4vZ2VvbWV0cnkvcmVjdGFuZ2xlJ1xuaW1wb3J0IHsgZGVmYXVsdFNjb3BlIH0gZnJvbSAnLi9zY29wZSdcbmltcG9ydCBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzIGZyb20gJy4vdXRpbHMvaXMtc3VwcG9ydC1wYXNzaXZlLWV2ZW50cydcbmltcG9ydCB0aHJvdHRsZSBmcm9tICcuL3V0aWxzL3Rocm90dGxlJ1xuXG5jb25zdCB0aHJvdHRsZWREcmFnT3ZlciA9IChjYWxsYmFjaywgZHVyYXRpb24pID0+IHtcbiAgY29uc3QgdGhyb3R0bGVkQ2FsbGJhY2sgPSB0aHJvdHRsZSgoZXZlbnQpID0+IGNhbGxiYWNrKGV2ZW50KSwgZHVyYXRpb24pXG4gIHJldHVybiBldmVudCA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIHRocm90dGxlZENhbGxiYWNrKGV2ZW50KVxuICB9XG59XG5cbmNvbnN0IHBhc3NpdmVGYWxzZSA9IGlzU3VwcG9ydFBhc3NpdmVFdmVudHMgPyB7IHBhc3NpdmU6IGZhbHNlIH0gOiBmYWxzZVxuXG5jb25zdCBpc1RvdWNoID0gJ29udG91Y2hzdGFydCcgaW4gd2luZG93XG5jb25zdCBtb3VzZUV2ZW50cyA9IHtcbiAgc3RhcnQ6ICdtb3VzZWRvd24nLFxuICBtb3ZlOiAnbW91c2Vtb3ZlJyxcbiAgZW5kOiAnbW91c2V1cCdcbn1cbmNvbnN0IHRvdWNoRXZlbnRzID0ge1xuICBzdGFydDogJ3RvdWNoc3RhcnQnLFxuICBtb3ZlOiAndG91Y2htb3ZlJyxcbiAgZW5kOiAndG91Y2hlbmQnXG59XG5jb25zdCBkcmFnZ2FibGVzID0gW11cbmNvbnN0IHRyYW5zZm9ybVByb3BlcnR5ID0gJ3RyYW5zZm9ybSdcbmNvbnN0IHRyYW5zaXRpb25Qcm9wZXJ0eSA9ICd0cmFuc2l0aW9uJ1xuXG5mdW5jdGlvbiBnZXRUb3VjaEJ5SUQoZWxlbWVudCwgdG91Y2hJZCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnQuY2hhbmdlZFRvdWNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZWxlbWVudC5jaGFuZ2VkVG91Y2hlc1tpXS5pZGVudGlmaWVyID09PSB0b3VjaElkKSB7XG4gICAgICByZXR1cm4gZWxlbWVudC5jaGFuZ2VkVG91Y2hlc1tpXVxuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cblxuZnVuY3Rpb24gcHJldmVudERvdWJsZUluaXQoZHJhZ2dhYmxlKSB7XG4gIGNvbnN0IG1lc3NhZ2UgPSBcImZvciB0aGlzIGVsZW1lbnQgRHJhZ2VlLkRyYWdnYWJsZSBpcyBhbHJlYWR5IGV4aXN0LCBkb24ndCBjcmVhdGUgaXQgdHdpY2UgXCJcbiAgaWYgKGRyYWdnYWJsZXMuc29tZSgoZXhpc3RpbmcpID0+IGRyYWdnYWJsZS5lbGVtZW50ID09PSBleGlzdGluZy5lbGVtZW50KSkge1xuICAgIHRocm93IG1lc3NhZ2VcbiAgfVxuICBkcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxufVxuXG5mdW5jdGlvbiBhZGRUb0RlZmF1bHRTY29wZShkcmFnZ2FibGUpIHtcbiAgZGVmYXVsdFNjb3BlLmFkZERyYWdnYWJsZShkcmFnZ2FibGUpXG59XG5cbmZ1bmN0aW9uIGNvcHlTdHlsZXMoc291cmNlLCBkZXN0aW5hdGlvbikge1xuICBjb25zdCBjcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHNvdXJjZSlcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qga2V5ID0gY3NbaV1cbiAgICBpZiAoKGtleS5pbmRleE9mKCd0cmFuc2l0aW9uJykgPCAwKSAmJiAoa2V5LmluZGV4T2YoJ3RyYW5zZm9ybScpIDwgMCkpIHtcbiAgICAgIGRlc3RpbmF0aW9uLnN0eWxlW2tleV0gPSBjc1trZXldXG4gICAgfVxuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzb3VyY2UuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICBjb3B5U3R5bGVzKHNvdXJjZS5jaGlsZHJlbltpXSwgZGVzdGluYXRpb24uY2hpbGRyZW5baV0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhZ2dhYmxlIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgb3B0aW9ucz17fSkge1xuICAgIHN1cGVyKG9wdGlvbnMpXG4gICAgdGhpcy50YXJnZXRzID0gW11cbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIHByZXZlbnREb3VibGVJbml0KHRoaXMpXG4gICAgRHJhZ2dhYmxlLmVtaXR0ZXIuZW1pdCgnZHJhZ2dhYmxlOmNyZWF0ZScsIHRoaXMpXG4gICAgdGhpcy5fZW5hYmxlID0gdHJ1ZVxuICAgIHRoaXMuc3RhcnRCb3VuZGluZygpXG4gICAgdGhpcy5zdGFydFBvc2l0aW9uaW5nKClcbiAgICB0aGlzLnN0YXJ0TGlzdGVuaW5nKClcbiAgfVxuXG4gIHN0YXJ0Qm91bmRpbmcoKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5ib3VuZCkge1xuICAgICAgdGhpcy5ib3VuZGluZyA9IHsgYm91bmQ6IHRoaXMub3B0aW9ucy5ib3VuZCB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYm91bmRpbmcgPSBuZXcgQm91bmRUb0VsZW1lbnQodGhpcy5jb250YWluZXIsIHRoaXMuY29udGFpbmVyKVxuICAgIH1cbiAgfVxuXG4gIHN0YXJ0UG9zaXRpb25pbmcoKSB7XG4gICAgdGhpcy5fc2V0RGVmYXVsdFRyYW5zaXRpb24oKVxuICAgIHRoaXMub2Zmc2V0ID0gUG9pbnQuZWxlbWVudE9mZnNldCh0aGlzLmVsZW1lbnQsIHRoaXMuY29udGFpbmVyLCB0cnVlKVxuICAgIHRoaXMucGlubmVkUG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICAgIHRoaXMuaW5pdGlhbFBvc2l0aW9uID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uIHx8IHRoaXMub2Zmc2V0XG5cbiAgICB0aGlzLnBpblBvc2l0aW9uKHRoaXMuaW5pdGlhbFBvc2l0aW9uKVxuXG4gICAgaWYgKHRoaXMuYm91bmRpbmcucmVmcmVzaCkge1xuICAgICAgdGhpcy5ib3VuZGluZy5yZWZyZXNoKClcbiAgICB9XG4gIH1cblxuICBzdGFydExpc3RlbmluZygpIHtcbiAgICB0aGlzLl9kcmFnU3RhcnQgPSAoZXZlbnQpID0+IHRoaXMuZHJhZ1N0YXJ0KGV2ZW50KVxuICAgIHRoaXMuX2RyYWdNb3ZlID0gKGV2ZW50KSA9PiB0aGlzLmRyYWdNb3ZlKGV2ZW50KVxuICAgIHRoaXMuX2RyYWdFbmQgPSAoZXZlbnQpID0+IHRoaXMuZHJhZ0VuZChldmVudClcbiAgICB0aGlzLl9uYXRpdmVEcmFnU3RhcnQgPSAoZXZlbnQpID0+IHRoaXMubmF0aXZlRHJhZ1N0YXJ0KGV2ZW50KVxuICAgIHRoaXMuX25hdGl2ZURyYWdPdmVyID0gdGhyb3R0bGVkRHJhZ092ZXIoKGV2ZW50KSA9PiB0aGlzLm5hdGl2ZURyYWdPdmVyKGV2ZW50KSwgdGhpcy5kcmFnT3ZlclRocm90dGxlRHVyYXRpb24pXG4gICAgdGhpcy5fbmF0aXZlRHJhZ0VuZCA9IChldmVudCkgPT4gdGhpcy5uYXRpdmVEcmFnRW5kKGV2ZW50KVxuICAgIHRoaXMuX25hdGl2ZURyb3AgPSAoZXZlbnQpID0+IHRoaXMubmF0aXZlRHJvcChldmVudClcbiAgICB0aGlzLl9zY3JvbGwgPSAoZXZlbnQpID0+IHRoaXMub25TY3JvbGwoZXZlbnQpXG5cbiAgICB0aGlzLmhhbmRsZXIuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0LCBwYXNzaXZlRmFsc2UpXG4gICAgdGhpcy5oYW5kbGVyLmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydCwgcGFzc2l2ZUZhbHNlKVxuICB9XG5cbiAgZ2V0U2l6ZSgpIHtcbiAgICByZXR1cm4gUG9pbnQuZWxlbWVudFNpemUodGhpcy5lbGVtZW50KVxuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMub2Zmc2V0LmFkZCh0aGlzLl90cmFuc2Zvcm1Qb3NpdGlvbiB8fCBuZXcgUG9pbnQoMCwgMCkpXG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25cbiAgfVxuXG4gIGdldENlbnRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi5hZGQodGhpcy5nZXRTaXplKCkubXVsdCgwLjUpKVxuICB9XG5cbiAgX3NldERlZmF1bHRUcmFuc2l0aW9uICgpIHtcbiAgICBpZiAoIXRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNpdGlvblByb3BlcnR5XSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZWxlbWVudClbdHJhbnNpdGlvblByb3BlcnR5XVxuICAgIH1cbiAgfVxuXG4gIF9zZXRUcmFuc2l0aW9uKHRpbWUpIHtcbiAgICBsZXQgdHJhbnNpdGlvbiA9IHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldXG4gICAgY29uc3QgdHJhbnNpdGlvbkNzcyA9IGB0cmFuc2Zvcm0gJHt0aW1lfW1zYFxuXG4gICAgaWYgKCEvdHJhbnNmb3JtXFxzP1xcZCptP3M/Ly50ZXN0KHRyYW5zaXRpb24pKSB7XG4gICAgICBpZiAodHJhbnNpdGlvbikge1xuICAgICAgICB0cmFuc2l0aW9uICs9IGAsICR7dHJhbnNpdGlvbkNzc31gXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cmFuc2l0aW9uID0gdHJhbnNpdGlvbkNzc1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0cmFuc2l0aW9uID0gdHJhbnNpdGlvbi5yZXBsYWNlKC90cmFuc2Zvcm1cXHM/XFxkKm0/cz8vZywgdHJhbnNpdGlvbkNzcylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV0gIT09IHRyYW5zaXRpb24pIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldID0gdHJhbnNpdGlvblxuICAgIH1cbiAgfVxuXG4gIF9zZXRUcmFuc2xhdGUocG9pbnQpIHtcbiAgICB0aGlzLl90cmFuc2Zvcm1Qb3NpdGlvbiA9IHBvaW50XG4gICAgY29uc3QgdHJhbnNsYXRlQ3NzID0gYHRyYW5zbGF0ZTNkKCR7cG9pbnQueH1weCwgJHtwb2ludC55fXB4LCAwcHgpYFxuXG4gICAgbGV0IHRyYW5zZm9ybSA9IHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wZXJ0eV1cblxuICAgIGlmICh0aGlzLnNob3VsZFJlbW92ZVplcm9UcmFuc2xhdGUgJiYgcG9pbnQueCA9PT0gMCAmJiBwb2ludC55ID09PSAwKSB7XG4gICAgICB0cmFuc2Zvcm0gPSB0cmFuc2Zvcm0ucmVwbGFjZSgvdHJhbnNsYXRlM2RcXChbXildK1xcKS8sICcnKVxuICAgIH0gZWxzZSBpZiAoIS90cmFuc2xhdGUzZFxcKFteKV0rXFwpLy50ZXN0KHRyYW5zZm9ybSkpIHtcbiAgICAgIGlmICh0cmFuc2Zvcm0pIHtcbiAgICAgICAgdHJhbnNmb3JtICs9ICcgJ1xuICAgICAgfVxuICAgICAgdHJhbnNmb3JtICs9IHRyYW5zbGF0ZUNzc1xuICAgIH0gZWxzZSB7XG4gICAgICB0cmFuc2Zvcm0gPSB0cmFuc2Zvcm0ucmVwbGFjZSgvdHJhbnNsYXRlM2RcXChbXildK1xcKS8sIHRyYW5zbGF0ZUNzcylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BlcnR5XSAhPT0gdHJhbnNmb3JtKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcGVydHldID0gdHJhbnNmb3JtXG4gICAgfVxuICB9XG5cbiAgbW92ZShwb2ludCwgdGltZT0wLCBpc1NpbGVudD1mYWxzZSkge1xuICAgIHBvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIHRoaXMucG9zaXRpb24gPSBwb2ludFxuXG4gICAgdGhpcy5fc2V0VHJhbnNpdGlvbih0aW1lKVxuICAgIHRoaXMuX3NldFRyYW5zbGF0ZShwb2ludC5zdWIodGhpcy5vZmZzZXQpKVxuXG4gICAgaWYgKCFpc1NpbGVudCkge1xuICAgICAgdGhpcy5lbWl0KCdkcmFnOm1vdmUnKVxuICAgIH1cbiAgfVxuXG4gIHBpblBvc2l0aW9uKHBvaW50LCB0aW1lPTAsIHNpbGVudD10cnVlKSB7XG4gICAgdGhpcy5waW5uZWRQb3NpdGlvbiA9IHBvaW50LmNsb25lKClcbiAgICB0aGlzLm1vdmUodGhpcy5waW5uZWRQb3NpdGlvbiwgdGltZSwgc2lsZW50KVxuICB9XG5cbiAgcmVzZXRQb3NpdGlvblRvSW5pdGlhbCAoKSB7XG4gICAgdGhpcy5waW5Qb3NpdGlvbih0aGlzLmluaXRpYWxQb3NpdGlvbilcbiAgfVxuXG4gIHJlZnJlc2hQb3NpdGlvbiAoKSB7XG4gICAgdGhpcy5zZXRQb3NpdGlvbih0aGlzLmdldFBvc2l0aW9uKCkpXG4gIH1cblxuICBzZXRQb3NpdGlvbihwb2ludCkge1xuICAgIHBvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIHRoaXMucG9zaXRpb24gPSBwb2ludFxuICAgIHRoaXMuX3NldFRyYW5zaXRpb24oMClcbiAgICB0aGlzLl9zZXRUcmFuc2xhdGUocG9pbnQuc3ViKHRoaXMub2Zmc2V0KSlcbiAgfVxuXG4gIGRldGVybWluZURpcmVjdGlvbihwb2ludCkge1xuICAgIHRoaXMuX3ByZXZpb3VzRGlyZWN0aW9uUG9zaXRpb24gfHw9IHRoaXMuX3N0YXJ0UG9zaXRpb25cblxuICAgIHRoaXMubGVmdERpcmVjdGlvbiA9ICh0aGlzLl9wcmV2aW91c0RpcmVjdGlvblBvc2l0aW9uLnggPCBwb2ludC54KVxuICAgIHRoaXMucmlnaHREaXJlY3Rpb24gPSAodGhpcy5fcHJldmlvdXNEaXJlY3Rpb25Qb3NpdGlvbi54ID4gcG9pbnQueClcbiAgICB0aGlzLnVwRGlyZWN0aW9uID0gKHRoaXMuX3ByZXZpb3VzRGlyZWN0aW9uUG9zaXRpb24ueSA+IHBvaW50LnkpXG4gICAgdGhpcy5kb3duRGlyZWN0aW9uID0gKHRoaXMuX3ByZXZpb3VzRGlyZWN0aW9uUG9zaXRpb24ueSA8IHBvaW50LnkpXG5cbiAgICB0aGlzLl9wcmV2aW91c0RpcmVjdGlvblBvc2l0aW9uID0gcG9pbnRcbiAgfVxuXG4gIHNlZW1zU2Nyb2xsaW5nKCkge1xuICAgIHJldHVybiAoK25ldyBEYXRlKCkgLSB0aGlzLl9zdGFydFRvdWNoVGltZXN0YW1wKSA8IHRoaXMudG91Y2hEcmFnZ2luZ1RocmVzaG9sZFxuICB9XG5cbiAgc2hvdWxkVXNlTmF0aXZlRHJhZ0FuZERyb3AoKSB7XG4gICAgaWYgKHRoaXMuaXNUb3VjaEV2ZW50KSB7XG4gICAgICByZXR1cm4gdGhpcy5uYXRpdmVEcmFnQW5kRHJvcCAmJiB0aGlzLmVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcE9uVG91Y2hcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMubmF0aXZlRHJhZ0FuZERyb3BcbiAgICB9XG4gIH1cblxuICBkcmFnU3RhcnQoZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuX2VuYWJsZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3RvcFByb3BhZ2F0aW9uT25EcmFnU3RhcnQpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgfVxuXG4gICAgdGhpcy5pc1RvdWNoRXZlbnQgPSAoaXNUb3VjaCAmJiAoZXZlbnQgaW5zdGFuY2VvZiB3aW5kb3cuVG91Y2hFdmVudCkpXG5cbiAgICB0aGlzLnRvdWNoUG9pbnQgPSB0aGlzLl9zdGFydFRvdWNoUG9pbnQgPSBuZXcgUG9pbnQoXG4gICAgICB0aGlzLmlzVG91Y2hFdmVudCA/IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYIDogZXZlbnQuY2xpZW50WCxcbiAgICAgIHRoaXMuaXNUb3VjaEV2ZW50ID8gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVkgOiBldmVudC5jbGllbnRZXG4gICAgKVxuXG4gICAgdGhpcy5fc3RhcnRQb3NpdGlvbiA9IHRoaXMuZ2V0UG9zaXRpb24oKVxuICAgIGlmICh0aGlzLmlzVG91Y2hFdmVudCkge1xuICAgICAgdGhpcy5fdG91Y2hJZCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmlkZW50aWZpZXJcbiAgICAgIHRoaXMuX3N0YXJ0VG91Y2hUaW1lc3RhbXAgPSArbmV3IERhdGUoKVxuICAgIH1cblxuICAgIHRoaXMuX3N0YXJ0V2luZG93U2Nyb2xsUG9pbnQgPSB0aGlzLndpbmRvd1Njcm9sbFBvaW50XG4gICAgdGhpcy5fc3RhcnRQYXJlbnRzU2Nyb2xsUG9pbnQgPSB0aGlzLnBhcmVudHNTY3JvbGxQb2ludFxuXG4gICAgaWYgKGV2ZW50LnRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSW5wdXRFbGVtZW50IHx8XG4gICAgICAgICAgZXZlbnQudGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJbnB1dEVsZW1lbnQpIHtcbiAgICAgIGV2ZW50LnRhcmdldC5mb2N1cygpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2hvdWxkVXNlTmF0aXZlRHJhZ0FuZERyb3AoKSkge1xuICAgICAgaWYgKHRoaXMuaXNUb3VjaEV2ZW50ICYmIHRoaXMuZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wT25Ub3VjaCkge1xuICAgICAgICBjb25zdCBlbXVsYXRlT25GaXJzdE1vdmUgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5zZWVtc1Njcm9sbGluZygpKSB7XG4gICAgICAgICAgICB0aGlzLmNhbmNlbERyYWdnaW5nKClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3AoZXZlbnQpXG4gICAgICAgICAgfVxuICAgICAgICAgIGNhbmNlbEVtdWxhdGlvbigpXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2FuY2VsRW11bGF0aW9uID0gKCkgPT4ge1xuICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgZW11bGF0ZU9uRmlyc3RNb3ZlKVxuICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCBjYW5jZWxFbXVsYXRpb24pXG4gICAgICAgIH1cblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIGVtdWxhdGVPbkZpcnN0TW92ZSwgcGFzc2l2ZUZhbHNlKVxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgY2FuY2VsRW11bGF0aW9uLCBwYXNzaXZlRmFsc2UpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgdGhpcy5fbmF0aXZlRHJhZ1N0YXJ0KVxuICAgICAgICB0aGlzLmVsZW1lbnQuZHJhZ2dhYmxlID0gdHJ1ZVxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fbmF0aXZlRHJhZ0VuZCwgcGFzc2l2ZUZhbHNlKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlLCBwYXNzaXZlRmFsc2UpXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlLCBwYXNzaXZlRmFsc2UpXG5cbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kLCBwYXNzaXZlRmFsc2UpXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZCwgcGFzc2l2ZUZhbHNlKVxuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9zY3JvbGwpXG4gICAgdGhpcy5wYXJlbnRzLmZvckVhY2goKHApID0+IHAuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fc2Nyb2xsKSlcblxuICAgIHRoaXMuZW1pdCgnZHJhZzpzdGFydCcpXG4gIH1cblxuICBkcmFnTW92ZShldmVudCkge1xuICAgIGxldCB0b3VjaFxuXG4gICAgdGhpcy5pc0RyYWdnaW5nID0gdHJ1ZVxuXG4gICAgdGhpcy5pc1RvdWNoRXZlbnQgPSAoaXNUb3VjaCAmJiAoZXZlbnQgaW5zdGFuY2VvZiB3aW5kb3cuVG91Y2hFdmVudCkpXG4gICAgaWYgKHRoaXMuaXNUb3VjaEV2ZW50KSB7XG4gICAgICB0b3VjaCA9IGdldFRvdWNoQnlJRChldmVudCwgdGhpcy5fdG91Y2hJZClcblxuICAgICAgaWYgKCF0b3VjaCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuc2VlbXNTY3JvbGxpbmcoKSkge1xuICAgICAgICB0aGlzLmNhbmNlbERyYWdnaW5nKClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhpcy50b3VjaFBvaW50ID0gbmV3IFBvaW50KFxuICAgICAgdGhpcy5pc1RvdWNoRXZlbnQgPyB0b3VjaC5wYWdlWCA6IGV2ZW50LmNsaWVudFgsXG4gICAgICB0aGlzLmlzVG91Y2hFdmVudCA/IHRvdWNoLnBhZ2VZIDogZXZlbnQuY2xpZW50WVxuICAgIClcblxuICAgIGxldCBwb2ludCA9IHRoaXMuX3N0YXJ0UG9zaXRpb24uYWRkKHRoaXMudG91Y2hQb2ludC5zdWIodGhpcy5fc3RhcnRUb3VjaFBvaW50KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZCh0aGlzLndpbmRvd1Njcm9sbFBvaW50LnN1Yih0aGlzLl9zdGFydFdpbmRvd1Njcm9sbFBvaW50KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZCh0aGlzLnBhcmVudHNTY3JvbGxQb2ludC5zdWIodGhpcy5fc3RhcnRQYXJlbnRzU2Nyb2xsUG9pbnQpKVxuXG4gICAgcG9pbnQgPSB0aGlzLmJvdW5kaW5nLmJvdW5kKHBvaW50LCB0aGlzLmdldFNpemUoKSlcbiAgICB0aGlzLmRldGVybWluZURpcmVjdGlvbihwb2ludClcbiAgICB0aGlzLm1vdmUocG9pbnQpXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RyYWdlZS1hY3RpdmUnKVxuICB9XG5cbiAgZHJhZ0VuZChldmVudCkge1xuICAgIHRoaXMuaXNUb3VjaEV2ZW50ID0gKGlzVG91Y2ggJiYgKGV2ZW50IGluc3RhbmNlb2Ygd2luZG93LlRvdWNoRXZlbnQpKVxuXG4gICAgaWYgKHRoaXMuaXNUb3VjaEV2ZW50ICYmICFnZXRUb3VjaEJ5SUQoZXZlbnQsIHRoaXMuX3RvdWNoSWQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc0RyYWdnaW5nKSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIH1cblxuICAgIHRoaXMuZHJhZ0VuZEFjdGlvbigpXG4gICAgdGhpcy5lbWl0KCdkcmFnOmVuZCcpXG4gICAgdGhpcy5jYW5jZWxEcmFnZ2luZygpXG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZWUtYWN0aXZlJykpXG4gIH1cblxuICBvblNjcm9sbChfZXZlbnQpIHtcbiAgICBsZXQgcG9pbnQgPSB0aGlzLl9zdGFydFBvc2l0aW9uLmFkZCh0aGlzLnRvdWNoUG9pbnQuc3ViKHRoaXMuX3N0YXJ0VG91Y2hQb2ludCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy53aW5kb3dTY3JvbGxQb2ludC5zdWIodGhpcy5fc3RhcnRXaW5kb3dTY3JvbGxQb2ludCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy5wYXJlbnRzU2Nyb2xsUG9pbnQuc3ViKHRoaXMuX3N0YXJ0UGFyZW50c1Njcm9sbFBvaW50KSlcblxuICAgIHBvaW50ID0gdGhpcy5ib3VuZGluZy5ib3VuZChwb2ludCwgdGhpcy5nZXRTaXplKCkpXG4gICAgaWYgKCF0aGlzLm5hdGl2ZURyYWdBbmREcm9wKSB7XG4gICAgICB0aGlzLmRldGVybWluZURpcmVjdGlvbihwb2ludClcbiAgICAgIHRoaXMubW92ZShwb2ludClcbiAgICB9XG4gIH1cblxuICBuYXRpdmVEcmFnU3RhcnQoZXZlbnQpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0JywgJ0ZpcmVGb3ggZml4JylcbiAgICBldmVudC5kYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCA9ICdtb3ZlJ1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgdGhpcy5fbmF0aXZlRHJhZ092ZXIpXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIHRoaXMuX25hdGl2ZURyYWdFbmQpXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIHRoaXMuX25hdGl2ZURyb3ApXG4gIH1cblxuICBuYXRpdmVEcmFnT3ZlcihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBldmVudC5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9ICdtb3ZlJ1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkcmFnZWUtcGxhY2Vob2xkZXInKVxuICAgIGlmIChldmVudC5jbGllbnRYID09PSAwICYmIGV2ZW50LmNsaWVudFkgPT09IDApIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMudG91Y2hQb2ludCA9IG5ldyBQb2ludChldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZKVxuICAgIGxldCBwb2ludCA9IHRoaXMuX3N0YXJ0UG9zaXRpb24uYWRkKHRoaXMudG91Y2hQb2ludC5zdWIodGhpcy5fc3RhcnRUb3VjaFBvaW50KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZCh0aGlzLndpbmRvd1Njcm9sbFBvaW50LnN1Yih0aGlzLl9zdGFydFdpbmRvd1Njcm9sbFBvaW50KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZCh0aGlzLnBhcmVudHNTY3JvbGxQb2ludC5zdWIodGhpcy5fc3RhcnRQYXJlbnRzU2Nyb2xsUG9pbnQpKVxuICAgIHBvaW50ID0gdGhpcy5ib3VuZGluZy5ib3VuZChwb2ludCwgdGhpcy5nZXRTaXplKCkpXG4gICAgdGhpcy5kZXRlcm1pbmVEaXJlY3Rpb24ocG9pbnQpXG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvaW50XG4gICAgdGhpcy5lbWl0KCdkcmFnOm1vdmUnKVxuICB9XG5cbiAgbmF0aXZlRHJhZ0VuZChfZXZlbnQpIHtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2VlLXBsYWNlaG9sZGVyJylcbiAgICB0aGlzLmRyYWdFbmRBY3Rpb24oKVxuICAgIHRoaXMuZW1pdCgnZHJhZzplbmQnKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgdGhpcy5fbmF0aXZlRHJhZ092ZXIpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIHRoaXMuX25hdGl2ZURyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX25hdGl2ZURyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJvcCcsIHRoaXMuX25hdGl2ZURyb3ApXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX3Njcm9sbClcbiAgICB0aGlzLnBhcmVudHMuZm9yRWFjaCgocCkgPT4gcC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9zY3JvbGwpKVxuICAgIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnZHJhZ2dhYmxlJylcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgdGhpcy5fbmF0aXZlRHJhZ1N0YXJ0KVxuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZWUtYWN0aXZlJylcbiAgfVxuXG4gIG5hdGl2ZURyb3AoZXZlbnQpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIGNhbmNlbERyYWdnaW5nICgpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG5cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcblxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX3Njcm9sbClcbiAgICB0aGlzLnBhcmVudHMuZm9yRWFjaCgocCkgPT4gcC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9zY3JvbGwpKVxuXG4gICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2VcbiAgICB0aGlzLl9wcmV2aW91c0RpcmVjdGlvblBvc2l0aW9uID0gbnVsbFxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2RyYWdnYWJsZScpXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIHRoaXMuX25hdGl2ZURyYWdTdGFydClcbiAgfVxuXG4gIGNvcHlTdHlsZXMoc291cmNlLCBkZXN0aW5hdGlvbikge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuY29weVN0eWxlcykge1xuICAgICAgdGhpcy5vcHRpb25zLmNvcHlTdHlsZXMoc291cmNlLCBkZXN0aW5hdGlvbilcbiAgICB9IGVsc2Uge1xuICAgICAgY29weVN0eWxlcyhzb3VyY2UsIGRlc3RpbmF0aW9uKVxuICAgIH1cbiAgfVxuXG4gIGVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcChldmVudCkge1xuICAgIGNvbnN0IGNvbnRhaW5lclJlY3QgPSB0aGlzLmNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIGNvbnN0IGNsb25lZEVsZW1lbnQgPSB0aGlzLmVsZW1lbnQuY2xvbmVOb2RlKHRydWUpXG4gICAgY2xvbmVkRWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wZXJ0eV0gPSAnJ1xuICAgIHRoaXMuY29weVN0eWxlcyh0aGlzLmVsZW1lbnQsIGNsb25lZEVsZW1lbnQpXG4gICAgY2xvbmVkRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSdcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNsb25lZEVsZW1lbnQpXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RyYWdlZS1wbGFjZWhvbGRlcicpXG5cbiAgICBjb25zdCBlbXVsYXRpb25EcmFnZ2FibGUgPSBuZXcgRHJhZ2dhYmxlKGNsb25lZEVsZW1lbnQsIHtcbiAgICAgIGNvbnRhaW5lcjogZG9jdW1lbnQuYm9keSxcbiAgICAgIHRvdWNoRHJhZ2dpbmdUaHJlc2hvbGQ6IDAsXG4gICAgICBib3VuZChwb2ludCkge1xuICAgICAgICByZXR1cm4gcG9pbnRcbiAgICAgIH0sXG4gICAgICBvbjoge1xuICAgICAgICAnZHJhZzptb3ZlJzogKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNvbnRhaW5lclJlY3RQb2ludCA9IG5ldyBQb2ludChjb250YWluZXJSZWN0LmxlZnQsIGNvbnRhaW5lclJlY3QudG9wKVxuICAgICAgICAgIHRoaXMucG9zaXRpb24gPSBlbXVsYXRpb25EcmFnZ2FibGUucG9zaXRpb24uc3ViKGNvbnRhaW5lclJlY3RQb2ludClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN1Yih0aGlzLl9zdGFydFdpbmRvd1Njcm9sbFBvaW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMuX3N0YXJ0UGFyZW50c1Njcm9sbFBvaW50KVxuXG4gICAgICAgICAgdGhpcy5kZXRlcm1pbmVEaXJlY3Rpb24odGhpcy5wb3NpdGlvbilcbiAgICAgICAgICB0aGlzLmVtaXQoJ2RyYWc6bW92ZScpXG4gICAgICAgIH0sXG4gICAgICAgICdkcmFnOmVuZCc6ICgpID0+IHtcbiAgICAgICAgICBlbXVsYXRpb25EcmFnZ2FibGUuZGVzdHJveSgpXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChjbG9uZWRFbGVtZW50KVxuICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZWUtcGxhY2Vob2xkZXInKVxuICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZWUtYWN0aXZlJylcblxuICAgICAgICAgIHRoaXMuZW1pdCgnZHJhZzplbmQnKVxuICAgICAgICAgIHRoaXMuZHJhZ0VuZEFjdGlvbigpXG4gICAgICAgICAgdGhpcy5jYW5jZWxEcmFnZ2luZygpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgY29udGFpbmVyUmVjdFBvaW50ID0gbmV3IFBvaW50KGNvbnRhaW5lclJlY3QubGVmdCwgY29udGFpbmVyUmVjdC50b3ApXG4gICAgZW11bGF0aW9uRHJhZ2dhYmxlLl9zdGFydFdpbmRvd1Njcm9sbFBvaW50ID0gdGhpcy5fc3RhcnRXaW5kb3dTY3JvbGxQb2ludFxuXG4gICAgZW11bGF0aW9uRHJhZ2dhYmxlLm1vdmUoXG4gICAgICB0aGlzLnBpbm5lZFBvc2l0aW9uLmFkZChjb250YWluZXJSZWN0UG9pbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgLmFkZCh0aGlzLndpbmRvd1Njcm9sbFBvaW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgIC5zdWIodGhpcy5wYXJlbnRzU2Nyb2xsUG9pbnQpXG4gICAgKVxuXG4gICAgZW11bGF0aW9uRHJhZ2dhYmxlLmRyYWdTdGFydChldmVudClcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBkcmFnRW5kQWN0aW9uKCkge1xuICAgIHRoaXMucGluUG9zaXRpb24odGhpcy5wb3NpdGlvbilcbiAgfVxuXG4gIGdldFJlY3RhbmdsZSgpIHtcbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZSh0aGlzLnBvc2l0aW9uLCB0aGlzLmdldFNpemUoKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgaWYgKHRoaXMuYm91bmRpbmcucmVmcmVzaCkge1xuICAgICAgdGhpcy5ib3VuZGluZy5yZWZyZXNoKClcbiAgICB9XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuaGFuZGxlci5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQpXG4gICAgdGhpcy5oYW5kbGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydClcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgdGhpcy5fbmF0aXZlRHJhZ1N0YXJ0KVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIHRoaXMuX25hdGl2ZURyYWdPdmVyKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzLl9uYXRpdmVEcm9wKVxuICAgIHRoaXMucmVzZXRFbWl0dGVyKClcblxuICAgIGNvbnN0IGluZGV4ID0gZHJhZ2dhYmxlcy5pbmRleE9mKHRoaXMpXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIGRyYWdnYWJsZXMuc3BsaWNlKGluZGV4LCAxKVxuICAgIH1cbiAgfVxuXG4gIGdldCBjb250YWluZXIoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9jb250YWluZXIgPSB0aGlzLl9jb250YWluZXIgfHwgdGhpcy5vcHRpb25zLmNvbnRhaW5lciB8fCB0aGlzLm9wdGlvbnMucGFyZW50IHx8IGdldERlZmF1bHRDb250YWluZXIodGhpcy5lbGVtZW50KSlcbiAgfVxuXG4gIGdldCBoYW5kbGVyKCkge1xuICAgIGlmICghdGhpcy5faGFuZGxlcikge1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuaGFuZGxlciA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhpcy5faGFuZGxlciA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKHRoaXMub3B0aW9ucy5oYW5kbGVyKSB8fCB0aGlzLmVsZW1lbnRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZXIgPSB0aGlzLm9wdGlvbnMuaGFuZGxlciB8fCB0aGlzLmVsZW1lbnRcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5faGFuZGxlclxuICB9XG5cbiAgZ2V0IHN0b3BQcm9wYWdhdGlvbk9uRHJhZ1N0YXJ0KCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuc3RvcFByb3BhZ2F0aW9uT25EcmFnU3RhcnQgfHwgZmFsc2VcbiAgfVxuXG4gIGdldCBuYXRpdmVEcmFnQW5kRHJvcCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLm5hdGl2ZURyYWdBbmREcm9wIHx8IGZhbHNlXG4gIH1cblxuICBnZXQgZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wT25Ub3VjaCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcE9uVG91Y2ggfHwgZmFsc2VcbiAgfVxuXG4gIGdldCBzaG91bGRSZW1vdmVaZXJvVHJhbnNsYXRlKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuc2hvdWxkUmVtb3ZlWmVyb1RyYW5zbGF0ZSB8fCBmYWxzZVxuICB9XG5cbiAgZ2V0IHRvdWNoRHJhZ2dpbmdUaHJlc2hvbGQoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy50b3VjaERyYWdnaW5nVGhyZXNob2xkIHx8IDBcbiAgfVxuXG4gIGdldCBkcmFnT3ZlclRocm90dGxlRHVyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5kcmFnT3ZlclRocm90dGxlRHVyYXRpb24gfHwgMTZcbiAgfVxuXG4gIGdldCB3aW5kb3dTY3JvbGxQb2ludCgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHdpbmRvdy5zY3JvbGxYLCB3aW5kb3cuc2Nyb2xsWSlcbiAgfVxuXG4gIGdldCBwYXJlbnRzKCkge1xuICAgIGlmICh0aGlzLl9jYWNoZWRQYXJlbnRzKSByZXR1cm4gdGhpcy5fY2FjaGVkUGFyZW50c1xuXG4gICAgdGhpcy5fY2FjaGVkUGFyZW50cyA9IFtdXG4gICAgbGV0IGVsZW1lbnQgPSB0aGlzLmVsZW1lbnRcblxuICAgIHdoaWxlKGVsZW1lbnQucGFyZW50Tm9kZSAmJiBlbGVtZW50ICE9IHRoaXMuY29udGFpbmVyKSB7XG4gICAgICB0aGlzLl9jYWNoZWRQYXJlbnRzLnVuc2hpZnQoZWxlbWVudC5wYXJlbnROb2RlKTtcbiAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2NhY2hlZFBhcmVudHNcbiAgfVxuXG4gIGdldCBwYXJlbnRzU2Nyb2xsUG9pbnQoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludChcbiAgICAgIHRoaXMucGFyZW50cy5yZWR1Y2UoKHN1bSwgcCkgPT4gc3VtICsgcC5zY3JvbGxMZWZ0LCAwKSxcbiAgICAgIHRoaXMucGFyZW50cy5yZWR1Y2UoKHN1bSwgcCkgPT4gc3VtICsgcC5zY3JvbGxUb3AsIDApXG4gICAgKVxuICB9XG5cbiAgZ2V0IGVuYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlXG4gIH1cblxuICBzZXQgZW5hYmxlKGVuYWJsZSkge1xuICAgIGlmIChlbmFibGUpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZWUtZGlzYWJsZScpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkcmFnZWUtZGlzYWJsZScpXG4gICAgfVxuXG4gICAgdGhpcy5fZW5hYmxlID0gZW5hYmxlXG4gIH1cbn1cblxuRHJhZ2dhYmxlLmVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKClcbkRyYWdnYWJsZS5lbWl0dGVyLm9uKCdkcmFnZ2FibGU6Y3JlYXRlJywgYWRkVG9EZWZhdWx0U2NvcGUpXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0LCBpbW1lZGlhdGUpIHtcbiAgbGV0IHRpbWVvdXRcblxuICByZXR1cm4gZnVuY3Rpb24gZXhlY3V0ZWRGdW5jdGlvbigpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpc1xuICAgIGNvbnN0IGFyZ3MgPSBhcmd1bWVudHNcblxuICAgIGNvbnN0IGxhdGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICB0aW1lb3V0ID0gbnVsbFxuICAgICAgaWYgKCFpbW1lZGlhdGUpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncylcbiAgICB9XG5cbiAgICBjb25zdCBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0XG5cbiAgICBjbGVhclRpbWVvdXQodGltZW91dClcblxuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KVxuXG4gICAgaWYgKGNhbGxOb3cpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncylcbiAgfVxufVxuIiwiaW1wb3J0IGRlYm91bmNlIGZyb20gJy4vdXRpbHMvZGVib3VuY2UnXG5pbXBvcnQgcmVtb3ZlSXRlbSBmcm9tICcuL3V0aWxzL3JlbW92ZS1hcnJheS1pdGVtJ1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50RW1pdHRlcidcbmltcG9ydCB7XG4gIGdldERpc3RhbmNlLFxuICBpbmRleE9mTmVhcmVzdFBvaW50XG59IGZyb20gJy4vZ2VvbWV0cnkvZGlzdGFuY2VzJ1xuXG5pbXBvcnQgRHJhZ2dhYmxlIGZyb20gJy4vZHJhZ2dhYmxlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0IGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoZHJhZ2dhYmxlcywgb3B0aW9ucz17fSkge1xuICAgIHN1cGVyKG9wdGlvbnMpXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICB0aW1lRW5kOiAyMDAsXG4gICAgICB0aW1lRXhjYW5nZTogNDAwLFxuICAgICAgcmFkaXVzOiAzMFxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0aGlzLmNvbnRhaW5lciA9IG9wdGlvbnMuY29udGFpbmVyXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gZHJhZ2dhYmxlc1xuICAgIHRoaXMuY2hhbmdlZER1cmluZ0l0ZXJhdGlvbiA9IGZhbHNlXG5cbiAgICB0aGlzLnJlc2l6ZU9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKGRlYm91bmNlKHRoaXMub25SZXNpemUuYmluZCh0aGlzKSwgMTAwKSlcblxuICAgIGlmICh0aGlzLmNvbnRhaW5lcikge1xuICAgICAgdGhpcy5yZXNpemVPYnNlcnZlci5vYnNlcnZlKHRoaXMuY29udGFpbmVyKVxuICAgIH1cblxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBvblJlc2l6ZSgpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLnJlb3JkZXJPbkNoYW5nZSkgdGhpcy5yZXNldCgpXG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGQpID0+IGQuc3RhcnRQb3NpdGlvbmluZygpKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLl9lbmFibGUgPSB0cnVlXG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gdGhpcy5pbml0RHJhZ2dhYmxlKGRyYWdnYWJsZSkpXG4gIH1cblxuICBpbml0RHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIGRyYWdnYWJsZS5lbmFibGUgPSB0aGlzLl9lbmFibGVcbiAgICBkcmFnZ2FibGUub24oJ2RyYWc6bW92ZScsICgpID0+IHRoaXMub25Nb3ZlKGRyYWdnYWJsZSkpXG4gICAgZHJhZ2dhYmxlLmRyYWdFbmRBY3Rpb24gPSAoKSA9PiB7XG4gICAgICBkcmFnZ2FibGUucGluUG9zaXRpb24oZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uLCB0aGlzLm9wdGlvbnMudGltZUVuZClcbiAgICAgIHRoaXMub25FbmQoZHJhZ2dhYmxlKVxuICAgIH1cbiAgICB0aGlzLnJlc2l6ZU9ic2VydmVyLm9ic2VydmUoZHJhZ2dhYmxlLmVsZW1lbnQpXG4gIH1cblxuICByZWxlYXNlRHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIudW5vYnNlcnZlKGRyYWdnYWJsZS5lbGVtZW50KVxuICAgIGRyYWdnYWJsZS5yZXNldE9uKCdkcmFnOmVuZCcpXG4gICAgZHJhZ2dhYmxlLnJlc2V0T24oJ2RyYWc6bW92ZScpXG4gICAgcmVtb3ZlSXRlbSh0aGlzLmRyYWdnYWJsZXMsIGRyYWdnYWJsZSlcbiAgfVxuXG4gIG9uTW92ZShkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBzb3J0ZWREcmFnZ2FibGVzID0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcbiAgICBjb25zdCBwaW5uZWRQb3NpdGlvbnMgPSBzb3J0ZWREcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24pXG5cbiAgICBjb25zdCBjdXJyZW50SW5kZXggPSBzb3J0ZWREcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKVxuICAgIGNvbnN0IHRhcmdldEluZGV4ID0gaW5kZXhPZk5lYXJlc3RQb2ludChwaW5uZWRQb3NpdGlvbnMsIGRyYWdnYWJsZS5wb3NpdGlvbiwgdGhpcy5vcHRpb25zLnJhZGl1cywgdGhpcy5kaXN0YW5jZUZ1bmMpXG5cbiAgICBpZiAodGFyZ2V0SW5kZXggIT09IC0xICYmIGN1cnJlbnRJbmRleCAhPT0gdGFyZ2V0SW5kZXgpIHtcbiAgICAgIGlmICh0YXJnZXRJbmRleCA8IGN1cnJlbnRJbmRleCkge1xuICAgICAgICBmb3IgKGxldCBpPXRhcmdldEluZGV4OyBpPGN1cnJlbnRJbmRleDsgaSsrKSB7XG4gICAgICAgICAgc29ydGVkRHJhZ2dhYmxlc1tpXS5waW5Qb3NpdGlvbihwaW5uZWRQb3NpdGlvbnNbaSsxXSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGxldCBpPWN1cnJlbnRJbmRleDsgaTx0YXJnZXRJbmRleDsgaSsrKSB7XG4gICAgICAgICAgc29ydGVkRHJhZ2dhYmxlc1tpKzFdLnBpblBvc2l0aW9uKHBpbm5lZFBvc2l0aW9uc1tpXSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChkcmFnZ2FibGUubmF0aXZlRHJhZ0FuZERyb3ApIHtcbiAgICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKHBpbm5lZFBvc2l0aW9uc1t0YXJnZXRJbmRleF0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24gPSBwaW5uZWRQb3NpdGlvbnNbdGFyZ2V0SW5kZXhdXG4gICAgICB9XG5cbiAgICAgIHRoaXMuY2hhbmdlZER1cmluZ0l0ZXJhdGlvbiA9IHRydWVcbiAgICB9XG4gIH1cblxuICBvbkVuZChkcmFnZ2FibGUpIHtcbiAgICBpZiAodGhpcy5jaGFuZ2VkRHVyaW5nSXRlcmF0aW9uKSB7XG4gICAgICB0aGlzLmVtaXQoJ2xpc3Q6Y2hhbmdlJylcbiAgICAgIHRoaXMuY2hhbmdlZER1cmluZ0l0ZXJhdGlvbiA9IGZhbHNlXG5cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucmVvcmRlck9uQ2hhbmdlICYmIHRoaXMub3B0aW9ucy5jb250YWluZXIpIHtcbiAgICAgICAgdGhpcy5yZW9yZGVyRWxlbWVudHMoZHJhZ2dhYmxlKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlb3JkZXJFbGVtZW50cyhtb3ZlZERyYWdnYWJsZSkge1xuICAgIGNvbnN0IHNvcnRlZERyYWdnYWJsZXMgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuICAgIGNvbnN0IGluZGV4ID0gc29ydGVkRHJhZ2dhYmxlcy5pbmRleE9mKG1vdmVkRHJhZ2dhYmxlKVxuICAgIGNvbnN0IG5leHQgPSBzb3J0ZWREcmFnZ2FibGVzW2luZGV4ICsgMV1cblxuICAgIHRoaXMucmVzZXQoKVxuXG4gICAgaWYgKG5leHQpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmluc2VydEJlZm9yZShtb3ZlZERyYWdnYWJsZS5lbGVtZW50LCBuZXh0LmVsZW1lbnQpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKG1vdmVkRHJhZ2dhYmxlLmVsZW1lbnQpXG4gICAgfVxuXG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGQpID0+IGQuc3RhcnRQb3NpdGlvbmluZygpKVxuICAgIHRoaXMuZW1pdCgnbGlzdDpyZW9yZGVyZWQnKVxuICB9XG5cbiAgZ2V0Q3VycmVudFBpbm5lZFBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5kcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24uY2xvbmUoKSlcbiAgfVxuXG4gIGdldFNvcnRlZERyYWdnYWJsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJhZ2dhYmxlcy5zb3J0KHRoaXMuc29ydGluZy5iaW5kKHRoaXMpKVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnJlc2V0UG9zaXRpb25Ub0luaXRpYWwoKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnJlZnJlc2goKSlcbiAgfVxuXG4gIGFkZChkcmFnZ2FibGVzKSB7XG4gICAgaWYgKCEoZHJhZ2dhYmxlcyBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgZHJhZ2dhYmxlcyA9IFtkcmFnZ2FibGVzXVxuICAgIH1cbiAgICBkcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gdGhpcy5pbml0RHJhZ2dhYmxlKGRyYWdnYWJsZSkpXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gdGhpcy5kcmFnZ2FibGVzLmNvbmNhdChkcmFnZ2FibGVzKVxuICB9XG5cbiAgcmVtb3ZlKGRyYWdnYWJsZXMpIHtcbiAgICBjb25zdCBpbml0aWFsUG9zaXRpb25zID0gdGhpcy5kcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uKVxuICAgIGNvbnN0IGxpc3QgPSBbXVxuICAgIGNvbnN0IHNvcnRlZERyYWdnYWJsZXMgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuXG4gICAgaWYgKCEoZHJhZ2dhYmxlcyBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgZHJhZ2dhYmxlcyA9IFtkcmFnZ2FibGVzXVxuICAgIH1cblxuICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB0aGlzLnJlbGVhc2VEcmFnZ2FibGUoZHJhZ2dhYmxlKSlcblxuICAgIGxldCBqID0gMFxuICAgIHNvcnRlZERyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBpZiAodGhpcy5kcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTEpIHtcbiAgICAgICAgaWYgKGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbiAhPT0gaW5pdGlhbFBvc2l0aW9uc1tqXSkge1xuICAgICAgICAgIGRyYWdnYWJsZS5waW5Qb3NpdGlvbihpbml0aWFsUG9zaXRpb25zW2pdLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICAgIH1cbiAgICAgICAgZHJhZ2dhYmxlLmluaXRpYWxQb3NpdGlvbiA9IGluaXRpYWxQb3NpdGlvbnNbal1cbiAgICAgICAgaisrXG4gICAgICAgIGxpc3QucHVzaChkcmFnZ2FibGUpXG4gICAgICB9XG4gICAgfSlcbiAgICB0aGlzLmRyYWdnYWJsZXMgPSBsaXN0XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLnJlbW92ZSh0aGlzLmRyYWdnYWJsZXMuc2xpY2UoKSlcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLmRlc3Ryb3koKSlcbiAgICBpZiAodGhpcy5jb250YWluZXIpIHtcbiAgICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIudW5vYnNlcnZlKHRoaXMuY29udGFpbmVyKVxuICAgIH1cbiAgfVxuXG4gIHNvcnRpbmcoZHJhZ2dhYmxlQSwgZHJhZ2dhYmxlQikge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuc29ydGluZykge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5zb3J0aW5nKGRyYWdnYWJsZUEsIGRyYWdnYWJsZUIpXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChkcmFnZ2FibGVBLnBpbm5lZFBvc2l0aW9uLnkgPCBkcmFnZ2FibGVCLnBpbm5lZFBvc2l0aW9uLnkpIHJldHVybiAtMVxuICAgICAgaWYgKGRyYWdnYWJsZUEucGlubmVkUG9zaXRpb24ueSA+IGRyYWdnYWJsZUIucGlubmVkUG9zaXRpb24ueSkgcmV0dXJuIDFcbiAgICAgIGlmIChkcmFnZ2FibGVBLnBpbm5lZFBvc2l0aW9uLnggPCBkcmFnZ2FibGVCLnBpbm5lZFBvc2l0aW9uLngpIHJldHVybiAtMVxuICAgICAgaWYgKGRyYWdnYWJsZUEucGlubmVkUG9zaXRpb24ueCA+IGRyYWdnYWJsZUIucGlubmVkUG9zaXRpb24ueCkgcmV0dXJuIDFcbiAgICAgIHJldHVybiAwXG4gICAgfVxuICB9XG5cbiAgZ2V0IGRpc3RhbmNlRnVuYygpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmdldERpc3RhbmNlIHx8IGdldERpc3RhbmNlXG4gIH1cblxuICBnZXQgcG9zaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmdldEN1cnJlbnRQaW5uZWRQb3NpdGlvbnMoKVxuICB9XG5cbiAgc2V0IHBvc2l0aW9ucyhwb3NpdGlvbnMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gJ3dyb25nIGFycmF5IGxlbmd0aCdcbiAgICBpZiAocG9zaXRpb25zLmxlbmd0aCA9PT0gdGhpcy5kcmFnZ2FibGVzLmxlbmd0aCkge1xuICAgICAgcG9zaXRpb25zLmZvckVhY2goKHBvaW50LCBpKSA9PiB7XG4gICAgICAgIHRoaXMuZHJhZ2dhYmxlc1tpXS5waW5Qb3NpdGlvbihwb2ludClcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG1lc3NhZ2VcbiAgICB9XG4gIH1cblxuICBnZXQgZW5hYmxlKCkge1xuICAgIHJldHVybiB0aGlzLl9lbmFibGVcbiAgfVxuXG4gIHNldCBlbmFibGUoZW5hYmxlKSB7XG4gICAgdGhpcy5fZW5hYmxlID0gZW5hYmxlXG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLmVuYWJsZSA9IGVuYWJsZVxuICAgIH0pXG4gIH1cblxuICBzdGF0aWMgZmFjdG9yeShjb250YWluZXJFbGVtZW50LCBlbGVtZW50cywgb3B0aW9ucz17fSkge1xuICAgIGNvbnN0IGRyYWdnYWJsZXMgPSBBcnJheS5mcm9tKGVsZW1lbnRzKS5tYXAoKGVsZW1lbnQpID0+IHtcbiAgICAgIHJldHVybiBuZXcgRHJhZ2dhYmxlKGVsZW1lbnQsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBjb250YWluZXI6IGNvbnRhaW5lckVsZW1lbnRcbiAgICAgIH0sIG9wdGlvbnMuZHJhZ2dhYmxlIHx8IHt9KSlcbiAgICB9KVxuXG4gICAgcmV0dXJuIG5ldyBMaXN0KGRyYWdnYWJsZXMsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgY29udGFpbmVyOiBjb250YWluZXJFbGVtZW50XG4gICAgfSwgb3B0aW9ucy5saXN0IHx8IHt9KSlcbiAgfVxufVxuIiwiaW1wb3J0IExpc3QgZnJvbSAnLi9saXN0J1xuaW1wb3J0IHsgaW5kZXhPZk5lYXJlc3RQb2ludCwgZ2V0WURpZmZlcmVuY2UgfSBmcm9tICcuL2dlb21ldHJ5L2Rpc3RhbmNlcydcbmltcG9ydCBQb2ludCBmcm9tICcuL2dlb21ldHJ5L3BvaW50J1xuXG5pbXBvcnQgRHJhZ2dhYmxlIGZyb20gJy4vZHJhZ2dhYmxlJ1xuXG5jb25zdCBhcnJheU1vdmUgPSAoYXJyYXksIGZyb20sIHRvKSA9PiB7XG4gIGFycmF5LnNwbGljZSh0byA8IDAgPyBhcnJheS5sZW5ndGggKyB0byA6IHRvLCAwLCBhcnJheS5zcGxpY2UoZnJvbSwgMSlbMF0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1YmJsaW5nTGlzdCBleHRlbmRzIExpc3Qge1xuICBhdXRvRGV0ZWN0VmVydGljYWxHYXAoKSB7XG4gICAgaWYgKCF0aGlzLl92ZXJ0aWNhbEdhcCAmJiAhdGhpcy5vcHRpb25zLnZlcnRpY2FsR2FwICYmIHRoaXMuZHJhZ2dhYmxlcy5sZW5ndGggPj0gMikge1xuICAgICAgY29uc3Qgc29ydGVkID0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcbiAgICAgIHRoaXMuX3ZlcnRpY2FsR2FwID0gc29ydGVkWzFdLnBpbm5lZFBvc2l0aW9uLnkgLSBzb3J0ZWRbMF0ucGlubmVkUG9zaXRpb24ueSAtIHNvcnRlZFswXS5nZXRTaXplKCkueVxuICAgIH1cbiAgfVxuXG4gIGF1dG9EZXRlY3RTdGFydFBvc2l0aW9uKCkge1xuICAgIGlmICh0aGlzLmRyYWdnYWJsZXMubGVuZ3RoID49IDEgJiYgIXRoaXMuc3RhcnRQb3NpdGlvbikge1xuICAgICAgdGhpcy5zdGFydFBvc2l0aW9uID0gdGhpcy5kcmFnZ2FibGVzWzBdLnBpbm5lZFBvc2l0aW9uXG4gICAgfVxuICB9XG5cbiAgaW5pdERyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICBzdXBlci5pbml0RHJhZ2dhYmxlKGRyYWdnYWJsZSlcbiAgICBkcmFnZ2FibGUub24oJ2RyYWc6c3RhcnQnLCAoKSA9PiB0aGlzLm9uRHJhZ1N0YXJ0KGRyYWdnYWJsZSkpXG4gIH1cblxuICBvbkRyYWdTdGFydChkcmFnZ2FibGUpIHtcbiAgICB0aGlzLmF1dG9EZXRlY3RWZXJ0aWNhbEdhcCgpXG4gICAgdGhpcy5hdXRvRGV0ZWN0U3RhcnRQb3NpdGlvbigpXG4gICAgdGhpcy5jYWNoZWRTb3J0ZWREcmFnZ2FibGVzID0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcbiAgICB0aGlzLmluZGV4T2ZBY3RpdmVEcmFnZ2FibGUgPSB0aGlzLmNhY2hlZFNvcnRlZERyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpXG4gIH1cblxuICBvbk1vdmUoZHJhZ2dhYmxlKSB7XG4gICAgY29uc3QgcHJldkRyYWdnYWJsZSA9IHRoaXMuY2FjaGVkU29ydGVkRHJhZ2dhYmxlc1t0aGlzLmluZGV4T2ZBY3RpdmVEcmFnZ2FibGUgLSAxXVxuICAgIGNvbnN0IG5leHREcmFnZ2FibGUgPSB0aGlzLmNhY2hlZFNvcnRlZERyYWdnYWJsZXNbdGhpcy5pbmRleE9mQWN0aXZlRHJhZ2dhYmxlICsgMV1cbiAgICBjb25zdCBjdXJyZW50UG9zaXRpb24gPSBkcmFnZ2FibGUucGlubmVkUG9zaXRpb25cblxuICAgIGxldCBjdXJyZW50T3JkZXJcbiAgICBsZXQgdGFyZ2V0SW5kZXhcblxuICAgIGlmKGRyYWdnYWJsZS51cERpcmVjdGlvbiAmJiBwcmV2RHJhZ2dhYmxlKSB7XG4gICAgICBjdXJyZW50T3JkZXIgPSBbcHJldkRyYWdnYWJsZSwgZHJhZ2dhYmxlXS5tYXAoKGQpID0+IGQucGlubmVkUG9zaXRpb24pXG4gICAgICB0YXJnZXRJbmRleCA9IGluZGV4T2ZOZWFyZXN0UG9pbnQoY3VycmVudE9yZGVyLCBkcmFnZ2FibGUucG9zaXRpb24sIDEwMDAwLCB0aGlzLmRpc3RhbmNlRnVuYylcblxuICAgICAgaWYgKHRhcmdldEluZGV4ID09PSAwKSB7XG4gICAgICAgIGlmKGRyYWdnYWJsZS5zaG91bGRVc2VOYXRpdmVEcmFnQW5kRHJvcCgpKSB7XG4gICAgICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKHByZXZEcmFnZ2FibGUucGlubmVkUG9zaXRpb24pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uID0gcHJldkRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbi5jbG9uZSgpXG4gICAgICAgIH1cbiAgICAgICAgcHJldkRyYWdnYWJsZS5waW5Qb3NpdGlvbihuZXcgUG9pbnQoXG4gICAgICAgICAgY3VycmVudFBvc2l0aW9uLngsXG4gICAgICAgICAgZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uLnkgKyBkcmFnZ2FibGUuZ2V0U2l6ZSgpLnkgKyB0aGlzLnZlcnRpY2FsR2FwXG4gICAgICAgICksIHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSlcbiAgICAgICAgYXJyYXlNb3ZlKHRoaXMuY2FjaGVkU29ydGVkRHJhZ2dhYmxlcywgdGhpcy5pbmRleE9mQWN0aXZlRHJhZ2dhYmxlLS0sIHRoaXMuaW5kZXhPZkFjdGl2ZURyYWdnYWJsZSlcbiAgICAgICAgdGhpcy5vbk1vdmUoZHJhZ2dhYmxlKVxuICAgICAgICB0aGlzLmNoYW5nZWREdXJpbmdJdGVyYXRpb24gPSB0cnVlXG4gICAgICB9XG4gICAgfSBlbHNlIGlmKGRyYWdnYWJsZS5kb3duRGlyZWN0aW9uICYmIG5leHREcmFnZ2FibGUpIHtcbiAgICAgIGN1cnJlbnRPcmRlciA9IFtkcmFnZ2FibGUsIG5leHREcmFnZ2FibGVdLm1hcCgoZCkgPT4gZC5waW5uZWRQb3NpdGlvbilcbiAgICAgIHRhcmdldEluZGV4ID0gaW5kZXhPZk5lYXJlc3RQb2ludChjdXJyZW50T3JkZXIsIGRyYWdnYWJsZS5wb3NpdGlvbiwgMTAwMDAsIHRoaXMuZGlzdGFuY2VGdW5jKVxuXG4gICAgICBpZih0YXJnZXRJbmRleCA9PT0gMSkge1xuICAgICAgICBuZXh0RHJhZ2dhYmxlLnBpblBvc2l0aW9uKGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbiwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICBjb25zdCBkcmFnZ2FibGVOZXdQb3NpdGlvbiA9IG5ldyBQb2ludChcbiAgICAgICAgICBuZXh0RHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uLngsXG4gICAgICAgICAgbmV4dERyYWdnYWJsZS5waW5uZWRQb3NpdGlvbi55ICsgbmV4dERyYWdnYWJsZS5nZXRTaXplKCkueSArIHRoaXMudmVydGljYWxHYXBcbiAgICAgICAgKVxuICAgICAgICBpZihkcmFnZ2FibGUuc2hvdWxkVXNlTmF0aXZlRHJhZ0FuZERyb3AoKSkge1xuICAgICAgICAgIGRyYWdnYWJsZS5waW5Qb3NpdGlvbihkcmFnZ2FibGVOZXdQb3NpdGlvbilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24gPSBkcmFnZ2FibGVOZXdQb3NpdGlvblxuICAgICAgICB9XG4gICAgICAgIGFycmF5TW92ZSh0aGlzLmNhY2hlZFNvcnRlZERyYWdnYWJsZXMsIHRoaXMuaW5kZXhPZkFjdGl2ZURyYWdnYWJsZSsrLCB0aGlzLmluZGV4T2ZBY3RpdmVEcmFnZ2FibGUpXG4gICAgICAgIHRoaXMub25Nb3ZlKGRyYWdnYWJsZSlcbiAgICAgICAgdGhpcy5jaGFuZ2VkRHVyaW5nSXRlcmF0aW9uID0gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGJ1YmJsaW5nKHNvcnRlZERyYWdnYWJsZXMsIGN1cnJlbnREcmFnZ2FibGUpIHtcbiAgICBjb25zdCBjdXJyZW50UG9zaXRpb24gPSB0aGlzLnN0YXJ0UG9zaXRpb24uY2xvbmUoKVxuICAgIHNvcnRlZERyYWdnYWJsZXMgfHw9IHRoaXMuZ2V0U29ydGVkRHJhZ2dhYmxlcygpXG5cbiAgICBzb3J0ZWREcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgaWYgKCFkcmFnZ2FibGUucGlubmVkUG9zaXRpb24uY29tcGFyZShjdXJyZW50UG9zaXRpb24pKSB7XG4gICAgICAgIGlmIChkcmFnZ2FibGUgPT09IGN1cnJlbnREcmFnZ2FibGUgJiYgIWN1cnJlbnREcmFnZ2FibGUuc2hvdWxkVXNlTmF0aXZlRHJhZ0FuZERyb3AoKSkge1xuICAgICAgICAgIGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbiA9IGN1cnJlbnRQb3NpdGlvbi5jbG9uZSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKGN1cnJlbnRQb3NpdGlvbiwgKGRyYWdnYWJsZSA9PT0gY3VycmVudERyYWdnYWJsZSkgPyAwIDogdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGN1cnJlbnRQb3NpdGlvbi55ID0gY3VycmVudFBvc2l0aW9uLnkgKyBkcmFnZ2FibGUuZ2V0U2l6ZSgpLnkgKyB0aGlzLnZlcnRpY2FsR2FwXG4gICAgfSlcbiAgfVxuXG4gIHJlbW92ZShkcmFnZ2FibGVzKSB7XG4gICAgaWYgKCEoZHJhZ2dhYmxlcyBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgZHJhZ2dhYmxlcyA9IFtkcmFnZ2FibGVzXVxuICAgIH1cblxuICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB0aGlzLnJlbGVhc2VEcmFnZ2FibGUoZHJhZ2dhYmxlKSlcbiAgICB0aGlzLmRyYWdnYWJsZXMgPSB0aGlzLmRyYWdnYWJsZXMuZmlsdGVyKChkKSA9PiAhZHJhZ2dhYmxlcy5pbmNsdWRlcyhkKSlcblxuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkKSA9PiBkLnN0YXJ0UG9zaXRpb25pbmcoKSlcblxuICAgIGlmKHRoaXMuZHJhZ2dhYmxlcy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmF1dG9EZXRlY3RWZXJ0aWNhbEdhcCgpXG4gICAgICB0aGlzLmF1dG9EZXRlY3RTdGFydFBvc2l0aW9uKClcbiAgICAgIHRoaXMuYnViYmxpbmcoKVxuICAgIH1cbiAgfVxuXG4gIGdldCBkaXN0YW5jZUZ1bmMoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5nZXREaXN0YW5jZSB8fCBnZXRZRGlmZmVyZW5jZVxuICB9XG5cbiAgZ2V0IHZlcnRpY2FsR2FwKCkge1xuICAgIGlmKHRoaXMub3B0aW9ucy52ZXJ0aWNhbEdhcCkge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy52ZXJ0aWNhbEdhcFxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmF1dG9EZXRlY3RWZXJ0aWNhbEdhcCgpXG4gICAgICByZXR1cm4gdGhpcy5fdmVydGljYWxHYXAgfHwgMFxuICAgIH1cbiAgfVxuXG4gIHNldCB2ZXJ0aWNhbEdhcChnYXBWYWx1ZSkge1xuICAgIHRoaXMub3B0aW9ucy52ZXJ0aWNhbEdhcCA9IGdhcFZhbHVlXG4gIH1cblxuICBzdGF0aWMgZmFjdG9yeShjb250YWluZXJFbGVtZW50LCBlbGVtZW50cywgb3B0aW9ucz17fSkge1xuICAgIGNvbnN0IGRyYWdnYWJsZXMgPSBBcnJheS5mcm9tKGVsZW1lbnRzKS5tYXAoKGVsZW1lbnQpID0+IHtcbiAgICAgIHJldHVybiBuZXcgRHJhZ2dhYmxlKGVsZW1lbnQsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBjb250YWluZXI6IGNvbnRhaW5lckVsZW1lbnRcbiAgICAgIH0sIG9wdGlvbnMuZHJhZ2dhYmxlIHx8IHt9KSlcbiAgICB9KVxuXG4gICAgcmV0dXJuIG5ldyBCdWJibGluZ0xpc3QoZHJhZ2dhYmxlcywgT2JqZWN0LmFzc2lnbih7XG4gICAgICBjb250YWluZXI6IGNvbnRhaW5lckVsZW1lbnRcbiAgICB9LCBvcHRpb25zLmxpc3QgfHwge30pKVxuICB9XG59XG4iXSwibmFtZXMiOlsiUG9pbnQiLCJ4IiwieSIsInAiLCJrIiwiZWxlbWVudCIsInBhcmVudCIsInBhcmVudE5vZGUiLCJlbGVtZW50UmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInBhcmVudFJlY3QiLCJsZWZ0IiwidG9wIiwid2lkdGgiLCJoZWlnaHQiLCJSZWN0YW5nbGUiLCJwb3NpdGlvbiIsInNpemUiLCJhZGQiLCJtdWx0IiwicmVjdCIsIk1hdGgiLCJtaW4iLCJtYXgiLCJzdWIiLCJyZWN0YW5nbGUiLCJpbmNsdWRlUG9pbnQiLCJnZXRQMyIsImF4aXMiLCJzZWxBeGlzIiwiY3Jvc3NSZWN0YW5nbGUiLCJhbmQiLCJ0aGlzQ2VudGVyIiwiZ2V0Q2VudGVyIiwicmVjdENlbnRlciIsInNpZ24iLCJvZmZzZXQiLCJlbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInN0eWxlIiwiaXNDb25zaWRlclRyYW5zbGF0ZSIsImVsZW1lbnRPZmZzZXQiLCJlbGVtZW50U2l6ZSIsImdldERlZmF1bHRDb250YWluZXIiLCJjb250YWluZXIiLCJ3aW5kb3ciLCJnZXRDb21wdXRlZFN0eWxlIiwidGFnTmFtZSIsIkV2ZW50RW1pdHRlciIsIm9wdGlvbnMiLCJldmVudHMiLCJvbiIsIk9iamVjdCIsImVudHJpZXMiLCJldmVudE5hbWUiLCJmbiIsImludGVycnVwdGVkIiwiYXJncyIsInNsaWNlIiwiY2FsbCIsImFyZ3VtZW50cyIsImZ1bmMiLCJwdXNoIiwidW5zaGlmdCIsImluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsImdldERpc3RhbmNlIiwicDEiLCJwMiIsImR4IiwiZHkiLCJzcXJ0IiwiZ2V0WERpZmZlcmVuY2UiLCJhYnMiLCJnZXRZRGlmZmVyZW5jZSIsInRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3RvcnkiLCJwb3ciLCJpbmRleE9mTmVhcmVzdFBvaW50IiwiYXJyIiwidmFsIiwicmFkaXVzIiwiZ2V0RGlzdGFuY2VGdW5jIiwiaSIsInRlbXAiLCJsZW5ndGgiLCJkaXJlY3RDcm9zc2luZyIsIkwxUDEiLCJMMVAyIiwiTDJQMSIsIkwyUDIiLCJrMSIsImsyIiwiYjEiLCJiMiIsImJvdW5kVG9MaW5lIiwiQSIsIkIiLCJQIiwiQVAiLCJBQiIsImFiMiIsImFwX2FiIiwidCIsImdldFBvaW50T25MaW5lQnlMZW5naHQiLCJMUDEiLCJMUDIiLCJsZW5naHQiLCJwZXJjZW50IiwiYWRkUG9pbnRUb0JvdW5kUG9pbnRzIiwiYm91bmRwb2ludHMiLCJwb2ludCIsImlzUmlnaHQiLCJyZXN1bHQiLCJmaWx0ZXIiLCJiUG9pbnQiLCJnZXRBbmdsZURpZmYiLCJhbHBoYSIsImJldGEiLCJtaW5BbmdsZSIsIm1heEFuZ2xlIiwiUEkiLCJnZXRBbmdsZSIsImRpZmYiLCJub3JtYWxpemVBbmdsZSIsImF0YW4yIiwiYm91bmRBbmdsZSIsImRtaW4iLCJkbWF4IiwiZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtIiwiYW5nbGUiLCJjZW50ZXIiLCJjb3MiLCJzaW4iLCJCb3VuZCIsIl9zaXplIiwiaW5zdGFuY2UiLCJib3VuZCIsImJpbmQiLCJCb3VuZFRvUmVjdGFuZ2xlIiwiY2FsY1BvaW50IiwiY2xvbmUiLCJyZWN0UDIiLCJCb3VuZFRvRWxlbWVudCIsImZyb21FbGVtZW50IiwiQm91bmRUb0xpbmVYIiwic3RhcnRZIiwiZW5kWSIsIkJvdW5kVG9MaW5lWSIsInN0YXJ0WCIsImVuZFgiLCJCb3VuZFRvTGluZSIsInN0YXJ0UG9pbnQiLCJlbmRQb2ludCIsInNvbWVLIiwiY29zQmV0YSIsInNpbkJldGEiLCJwb2ludDIiLCJuZXdFbmRQb2ludCIsInBvaW50Q3Jvc3NpbmciLCJCb3VuZFRvQ2lyY2xlIiwiQm91bmRUb0FyYyIsInN0YXJ0QW5nbGUiLCJlbmRBbmdsZSIsIl9zdGFydEFuZ2xlIiwiX2VuZEFuZ2xlIiwiYXJyYXkiLCJyYW5nZSIsInN0YXJ0Iiwic3RvcCIsInN0ZXAiLCJCYXNpY1N0cmF0ZWd5IiwiTm90Q3Jvc3NpbmdTdHJhdGVneSIsInJlY3RhbmdsZUxpc3QiLCJpbmRleGVzT2ZOZXdzIiwic3RhdGljUmVjdGFuZ2xlSW5kZXhlcyIsInJlZHVjZSIsImluZGV4ZXMiLCJfcmVjdCIsImZvckVhY2giLCJyZW1vdmFibGUiLCJpbmRleE9mU3RhdGljIiwic3RhdGljUmVjdCIsIm1vdmVUb0JvdW5kIiwic29tZSIsImJvdW5kUmVjdCIsImdldFNxdWFyZSIsIm9kbERyYWdnYWJsZXNMaXN0IiwibmV3RHJhZ2dhYmxlcyIsImluZGV4T2ZOZXdzIiwiZHJhZ2dhYmxlcyIsImNvbmNhdCIsImRyYWdnYWJsZSIsIkZsb2F0TGVmdFN0cmF0ZWd5IiwiYXNzaWduIiwicGFkZGluZ1RvcExlZnQiLCJwYWRkaW5nQm90dG9tUmlnaHQiLCJ5R2FwQmV0d2VlbkRyYWdnYWJsZXMiLCJnZXRQb3NpdGlvbiIsIl9pbmRleGVzT2ZOZXdzIiwiZ2V0UDIiLCJib3VuZGFyeVBvaW50cyIsInJlY3RJbmRleCIsImlzVmFsaWQiLCJuZXdMaXN0IiwibGlzdE9sZFBvc2l0aW9uIiwibWFwIiwibmV3RHJhZ2dhYmxlIiwiRmxvYXRSaWdodFN0cmF0ZWd5IiwicGFkZGluZ1RvcFJpZ2h0IiwicGFkZGluZ0JvdHRvbUxlZnQiLCJwYWRkaW5nQm90dG9tTmVnTGVmdCIsImdldFA0IiwiYWRkVG9EZWZhdWx0U2NvcGUiLCJ0YXJnZXQiLCJkZWZhdWx0U2NvcGUiLCJhZGRUYXJnZXQiLCJUYXJnZXQiLCJ0aW1lRW5kIiwidGltZUV4Y2FuZ2UiLCJwb3NpdGlvbmluZ1N0cmF0ZWd5Iiwic3RyYXRlZ3kiLCJnZXRSZWN0YW5nbGUiLCJ0YXJnZXRzIiwiZW1pdHRlciIsImVtaXQiLCJzdGFydEJvdW5kaW5nIiwiaW5pdCIsImJvdW5kaW5nIiwiaW5kZXhlc09mTmV3IiwicG9zaXRpb25pbmciLCJvbGREcmFnZ2FibGVzIiwic29ydGluZyIsInJlY3RhbmdsZXMiLCJpbm5lckRyYWdnYWJsZXMiLCJzZXRQb3NpdGlvbiIsImNhdGNoRHJhZ2dhYmxlIiwidGFyZ2V0UmVjdGFuZ2xlIiwiZHJhZ2dhYmxlU3F1YXJlIiwic2NvcGVzIiwic2NvcGUiLCJyZW1vdmVJdGVtIiwibmV3RHJhZ2dhYmxlc0luZGV4IiwiZ2V0U2l6ZSIsImFkZFJlbW92ZU9uTW92ZSIsInRpbWUiLCJtb3ZlIiwiaW5pdGlhbFBvc2l0aW9uIiwicHVzaElubmVyRHJhZ2dhYmxlIiwicmVtb3ZlSGFuZGxlciIsInJlbW92ZSIsInVuc3Vic2NyaWJlIiwiX2NvbnRhaW5lciIsIlNjb3BlIiwiZHJhZ0VuZEFjdGlvbiIsIm9uRW5kIiwic2hvdFRhcmdldHMiLCJzb3J0IiwiYSIsImIiLCJwaW5Qb3NpdGlvbiIsInJlc2V0IiwicmVmcmVzaCIsInBvc2l0aW9ucyIsIm1lc3NhZ2UiLCJ0YXJnZXRJbmRleGVzIiwiY3VycmVudFNjb3BlIiwiYWRkRHJhZ2dhYmxlVG9TY29wZSIsImFkZERyYWdnYWJsZSIsIkRyYWdnYWJsZSIsImludGVycnVwdCIsImFkZFRhcmdldFRvU2NvcGUiLCJwcmVwZW5kT24iLCJjaGVja1N1cHBvcnRQYXNzaXZlRXZlbnRzIiwicGFzc2l2ZVN1cHBvcnRlZCIsImRlZmluZVByb3BlcnR5IiwiZ2V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJfZXJyIiwiaXNTdXBwb3J0UGFzc2l2ZUV2ZW50cyIsInRocm90dGxlIiwid2FpdCIsImxhc3RUaW1lIiwiZXhlY3V0ZWRGdW5jdGlvbiIsImNvbnRleHQiLCJub3ciLCJEYXRlIiwiYXBwbHkiLCJ0aHJvdHRsZWREcmFnT3ZlciIsImNhbGxiYWNrIiwiZHVyYXRpb24iLCJ0aHJvdHRsZWRDYWxsYmFjayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJwYXNzaXZlRmFsc2UiLCJwYXNzaXZlIiwiaXNUb3VjaCIsIm1vdXNlRXZlbnRzIiwiZW5kIiwidG91Y2hFdmVudHMiLCJ0cmFuc2Zvcm1Qcm9wZXJ0eSIsInRyYW5zaXRpb25Qcm9wZXJ0eSIsImdldFRvdWNoQnlJRCIsInRvdWNoSWQiLCJjaGFuZ2VkVG91Y2hlcyIsImlkZW50aWZpZXIiLCJwcmV2ZW50RG91YmxlSW5pdCIsImV4aXN0aW5nIiwiY29weVN0eWxlcyIsInNvdXJjZSIsImRlc3RpbmF0aW9uIiwiY3MiLCJrZXkiLCJjaGlsZHJlbiIsIl9lbmFibGUiLCJzdGFydFBvc2l0aW9uaW5nIiwic3RhcnRMaXN0ZW5pbmciLCJfc2V0RGVmYXVsdFRyYW5zaXRpb24iLCJwaW5uZWRQb3NpdGlvbiIsIl9kcmFnU3RhcnQiLCJkcmFnU3RhcnQiLCJfZHJhZ01vdmUiLCJkcmFnTW92ZSIsIl9kcmFnRW5kIiwiZHJhZ0VuZCIsIl9uYXRpdmVEcmFnU3RhcnQiLCJuYXRpdmVEcmFnU3RhcnQiLCJfbmF0aXZlRHJhZ092ZXIiLCJuYXRpdmVEcmFnT3ZlciIsImRyYWdPdmVyVGhyb3R0bGVEdXJhdGlvbiIsIl9uYXRpdmVEcmFnRW5kIiwibmF0aXZlRHJhZ0VuZCIsIl9uYXRpdmVEcm9wIiwibmF0aXZlRHJvcCIsIl9zY3JvbGwiLCJvblNjcm9sbCIsImhhbmRsZXIiLCJfdHJhbnNmb3JtUG9zaXRpb24iLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbkNzcyIsInRlc3QiLCJyZXBsYWNlIiwidHJhbnNsYXRlQ3NzIiwidHJhbnNmb3JtIiwic2hvdWxkUmVtb3ZlWmVyb1RyYW5zbGF0ZSIsImlzU2lsZW50IiwiX3NldFRyYW5zaXRpb24iLCJfc2V0VHJhbnNsYXRlIiwic2lsZW50IiwiX3ByZXZpb3VzRGlyZWN0aW9uUG9zaXRpb24iLCJfc3RhcnRQb3NpdGlvbiIsImxlZnREaXJlY3Rpb24iLCJyaWdodERpcmVjdGlvbiIsInVwRGlyZWN0aW9uIiwiZG93bkRpcmVjdGlvbiIsIl9zdGFydFRvdWNoVGltZXN0YW1wIiwidG91Y2hEcmFnZ2luZ1RocmVzaG9sZCIsImlzVG91Y2hFdmVudCIsIm5hdGl2ZURyYWdBbmREcm9wIiwiZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wT25Ub3VjaCIsInN0b3BQcm9wYWdhdGlvbk9uRHJhZ1N0YXJ0Iiwic3RvcFByb3BhZ2F0aW9uIiwiVG91Y2hFdmVudCIsInRvdWNoUG9pbnQiLCJfc3RhcnRUb3VjaFBvaW50IiwicGFnZVgiLCJjbGllbnRYIiwicGFnZVkiLCJjbGllbnRZIiwiX3RvdWNoSWQiLCJfc3RhcnRXaW5kb3dTY3JvbGxQb2ludCIsIndpbmRvd1Njcm9sbFBvaW50IiwiX3N0YXJ0UGFyZW50c1Njcm9sbFBvaW50IiwicGFyZW50c1Njcm9sbFBvaW50IiwiSFRNTElucHV0RWxlbWVudCIsImZvY3VzIiwic2hvdWxkVXNlTmF0aXZlRHJhZ0FuZERyb3AiLCJlbXVsYXRlT25GaXJzdE1vdmUiLCJzZWVtc1Njcm9sbGluZyIsImNhbmNlbERyYWdnaW5nIiwiZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wIiwiY2FuY2VsRW11bGF0aW9uIiwicGFyZW50cyIsInRvdWNoIiwiaXNEcmFnZ2luZyIsImRldGVybWluZURpcmVjdGlvbiIsImNsYXNzTGlzdCIsInNldFRpbWVvdXQiLCJfZXZlbnQiLCJkYXRhVHJhbnNmZXIiLCJzZXREYXRhIiwiZWZmZWN0QWxsb3dlZCIsImRyb3BFZmZlY3QiLCJyZW1vdmVBdHRyaWJ1dGUiLCJjb250YWluZXJSZWN0IiwiY2xvbmVkRWxlbWVudCIsImNsb25lTm9kZSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImVtdWxhdGlvbkRyYWdnYWJsZSIsImNvbnRhaW5lclJlY3RQb2ludCIsImRlc3Ryb3kiLCJyZW1vdmVDaGlsZCIsInJlc2V0RW1pdHRlciIsIl9oYW5kbGVyIiwic2Nyb2xsWCIsInNjcm9sbFkiLCJfY2FjaGVkUGFyZW50cyIsInN1bSIsInNjcm9sbExlZnQiLCJzY3JvbGxUb3AiLCJlbmFibGUiLCJkZWJvdW5jZSIsImltbWVkaWF0ZSIsInRpbWVvdXQiLCJsYXRlciIsImNhbGxOb3ciLCJjbGVhclRpbWVvdXQiLCJMaXN0IiwiY2hhbmdlZER1cmluZ0l0ZXJhdGlvbiIsInJlc2l6ZU9ic2VydmVyIiwiUmVzaXplT2JzZXJ2ZXIiLCJvblJlc2l6ZSIsIm9ic2VydmUiLCJyZW9yZGVyT25DaGFuZ2UiLCJkIiwiaW5pdERyYWdnYWJsZSIsIm9uTW92ZSIsInVub2JzZXJ2ZSIsInJlc2V0T24iLCJzb3J0ZWREcmFnZ2FibGVzIiwiZ2V0U29ydGVkRHJhZ2dhYmxlcyIsInBpbm5lZFBvc2l0aW9ucyIsImN1cnJlbnRJbmRleCIsInRhcmdldEluZGV4IiwiZGlzdGFuY2VGdW5jIiwicmVvcmRlckVsZW1lbnRzIiwibW92ZWREcmFnZ2FibGUiLCJuZXh0IiwiaW5zZXJ0QmVmb3JlIiwicmVzZXRQb3NpdGlvblRvSW5pdGlhbCIsIkFycmF5IiwiaW5pdGlhbFBvc2l0aW9ucyIsImxpc3QiLCJyZWxlYXNlRHJhZ2dhYmxlIiwiaiIsImRyYWdnYWJsZUEiLCJkcmFnZ2FibGVCIiwiZ2V0Q3VycmVudFBpbm5lZFBvc2l0aW9ucyIsImNvbnRhaW5lckVsZW1lbnQiLCJlbGVtZW50cyIsImZyb20iLCJhcnJheU1vdmUiLCJ0byIsIkJ1YmJsaW5nTGlzdCIsIl92ZXJ0aWNhbEdhcCIsInZlcnRpY2FsR2FwIiwic29ydGVkIiwic3RhcnRQb3NpdGlvbiIsIm9uRHJhZ1N0YXJ0IiwiYXV0b0RldGVjdFZlcnRpY2FsR2FwIiwiYXV0b0RldGVjdFN0YXJ0UG9zaXRpb24iLCJjYWNoZWRTb3J0ZWREcmFnZ2FibGVzIiwiaW5kZXhPZkFjdGl2ZURyYWdnYWJsZSIsInByZXZEcmFnZ2FibGUiLCJuZXh0RHJhZ2dhYmxlIiwiY3VycmVudFBvc2l0aW9uIiwiY3VycmVudE9yZGVyIiwiZHJhZ2dhYmxlTmV3UG9zaXRpb24iLCJjdXJyZW50RHJhZ2dhYmxlIiwiY29tcGFyZSIsImluY2x1ZGVzIiwiYnViYmxpbmciLCJnYXBWYWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUFBO0FBQUEsTUFDcUJBLEtBQUssZ0JBQUEsWUFBQTtFQUN4QjtFQUNGO0VBQ0E7RUFDQTtFQUNBO0lBQ0UsU0FBWUMsS0FBQUEsQ0FBQUEsQ0FBQyxFQUFFQyxDQUFDLEVBQUU7RUFBQSxJQUFBLGVBQUEsQ0FBQSxJQUFBLEVBQUEsS0FBQSxDQUFBLENBQUE7TUFDaEIsSUFBSSxDQUFDRCxDQUFDLEdBQUdBLENBQUMsQ0FBQTtNQUNWLElBQUksQ0FBQ0MsQ0FBQyxHQUFHQSxDQUFDLENBQUE7RUFDWixHQUFBO0VBQUMsRUFBQSxZQUFBLENBQUEsS0FBQSxFQUFBLENBQUE7RUFBQSxJQUFBLEdBQUEsRUFBQSxLQUFBO01BQUEsS0FFRCxFQUFBLFNBQUEsR0FBQSxDQUFJQyxDQUFDLEVBQUU7RUFDTCxNQUFBLE9BQU8sSUFBSUgsS0FBSyxDQUFDLElBQUksQ0FBQ0MsQ0FBQyxHQUFHRSxDQUFDLENBQUNGLENBQUMsRUFBRSxJQUFJLENBQUNDLENBQUMsR0FBR0MsQ0FBQyxDQUFDRCxDQUFDLENBQUMsQ0FBQTtFQUM5QyxLQUFBO0VBQUMsR0FBQSxFQUFBO0VBQUEsSUFBQSxHQUFBLEVBQUEsS0FBQTtNQUFBLEtBRUQsRUFBQSxTQUFBLEdBQUEsQ0FBSUMsQ0FBQyxFQUFFO0VBQ0wsTUFBQSxPQUFPLElBQUlILEtBQUssQ0FBQyxJQUFJLENBQUNDLENBQUMsR0FBR0UsQ0FBQyxDQUFDRixDQUFDLEVBQUUsSUFBSSxDQUFDQyxDQUFDLEdBQUdDLENBQUMsQ0FBQ0QsQ0FBQyxDQUFDLENBQUE7RUFDOUMsS0FBQTtFQUFDLEdBQUEsRUFBQTtFQUFBLElBQUEsR0FBQSxFQUFBLE1BQUE7TUFBQSxLQUVELEVBQUEsU0FBQSxJQUFBLENBQUtFLENBQUMsRUFBRTtFQUNOLE1BQUEsT0FBTyxJQUFJSixLQUFLLENBQUMsSUFBSSxDQUFDQyxDQUFDLEdBQUdHLENBQUMsRUFBRSxJQUFJLENBQUNGLENBQUMsR0FBR0UsQ0FBQyxDQUFDLENBQUE7RUFDMUMsS0FBQTtFQUFDLEdBQUEsRUFBQTtFQUFBLElBQUEsR0FBQSxFQUFBLFVBQUE7RUFBQSxJQUFBLEtBQUEsRUFFRCxTQUFXLFFBQUEsR0FBQTtFQUNULE1BQUEsT0FBTyxJQUFJSixLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUNDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQ0MsQ0FBQyxDQUFDLENBQUE7RUFDcEMsS0FBQTtFQUFDLEdBQUEsRUFBQTtFQUFBLElBQUEsR0FBQSxFQUFBLFNBQUE7TUFBQSxLQUVELEVBQUEsU0FBQSxPQUFBLENBQVFDLENBQUMsRUFBRTtFQUNULE1BQUEsT0FBUSxJQUFJLENBQUNGLENBQUMsS0FBS0UsQ0FBQyxDQUFDRixDQUFDLElBQUksSUFBSSxDQUFDQyxDQUFDLEtBQUtDLENBQUMsQ0FBQ0QsQ0FBQyxDQUFBO0VBQzFDLEtBQUE7RUFBQyxHQUFBLEVBQUE7RUFBQSxJQUFBLEdBQUEsRUFBQSxPQUFBO0VBQUEsSUFBQSxLQUFBLEVBRUQsU0FBUSxLQUFBLEdBQUE7UUFDTixPQUFPLElBQUlGLEtBQUssQ0FBQyxJQUFJLENBQUNDLENBQUMsRUFBRSxJQUFJLENBQUNDLENBQUMsQ0FBQyxDQUFBO0VBQ2xDLEtBQUE7RUFBQyxHQUFBLEVBQUE7RUFBQSxJQUFBLEdBQUEsRUFBQSxVQUFBO0VBQUEsSUFBQSxLQUFB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
