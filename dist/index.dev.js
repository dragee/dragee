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

  function isNativeReflectConstruct() {
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
    if (isNativeReflectConstruct()) {
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
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
      return;
    }

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

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }

  function getSumValueOfStyleRules(element, rules) {
    return rules.reduce(function (sum, rule) {
      return sum + parseInt(window.getComputedStyle(element)[rule] || 0);
    }, 0);
  }

  var Point =
  /*#__PURE__*/
  function () {
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

  var Rectangle =
  /*#__PURE__*/
  function () {
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

  function getDefaultParent(element) {
    var parent = element.parentNode;

    while (parent.parentNode && window.getComputedStyle(parent)['position'] === 'static' && parent.tagName !== 'BODY') {
      parent = parent.parentNode;
    }

    return parent;
  }

  var EventEmitter =
  /*#__PURE__*/
  function () {
    function EventEmitter(context) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, EventEmitter);

      this.context = context || this;
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
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this.events[eventName][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var func = _step.value;
            func.apply(this.context, args);

            if (this.interrupted) {
              return;
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
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
  function toRadian(angle) {
    return angle % 360 * Math.PI / 180;
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

  var Bound =
  /*#__PURE__*/
  function () {
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
  var BoundToRectangle =
  /*#__PURE__*/
  function (_Bound) {
    _inherits(BoundToRectangle, _Bound);

    function BoundToRectangle(rectangle) {
      var _this;

      _classCallCheck(this, BoundToRectangle);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(BoundToRectangle).call(this));
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
  var BoundToElement =
  /*#__PURE__*/
  function (_BoundToRectangle) {
    _inherits(BoundToElement, _BoundToRectangle);

    function BoundToElement(element, parent) {
      var _this2;

      _classCallCheck(this, BoundToElement);

      _this2 = _possibleConstructorReturn(this, _getPrototypeOf(BoundToElement).call(this, Rectangle.fromElement(element, parent)));
      _this2.element = element;
      _this2.parent = parent;
      return _this2;
    }

    _createClass(BoundToElement, [{
      key: "refresh",
      value: function refresh() {
        this.rectangle = Rectangle.fromElement(this.element, this.parent);
      }
    }]);

    return BoundToElement;
  }(BoundToRectangle);
  var BoundToLineX =
  /*#__PURE__*/
  function (_Bound2) {
    _inherits(BoundToLineX, _Bound2);

    function BoundToLineX(x, startY, endY) {
      var _this3;

      _classCallCheck(this, BoundToLineX);

      _this3 = _possibleConstructorReturn(this, _getPrototypeOf(BoundToLineX).call(this));
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
  var BoundToLineY =
  /*#__PURE__*/
  function (_Bound3) {
    _inherits(BoundToLineY, _Bound3);

    function BoundToLineY(y, startX, endX) {
      var _this4;

      _classCallCheck(this, BoundToLineY);

      _this4 = _possibleConstructorReturn(this, _getPrototypeOf(BoundToLineY).call(this));
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
  var BoundToLine =
  /*#__PURE__*/
  function (_Bound4) {
    _inherits(BoundToLine, _Bound4);

    function BoundToLine(startPoint, endPoint) {
      var _this5;

      _classCallCheck(this, BoundToLine);

      _this5 = _possibleConstructorReturn(this, _getPrototypeOf(BoundToLine).call(this));
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
  var BoundToCircle =
  /*#__PURE__*/
  function (_Bound5) {
    _inherits(BoundToCircle, _Bound5);

    function BoundToCircle(center, radius) {
      var _this6;

      _classCallCheck(this, BoundToCircle);

      _this6 = _possibleConstructorReturn(this, _getPrototypeOf(BoundToCircle).call(this));
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
  var BoundToArc =
  /*#__PURE__*/
  function (_BoundToCircle) {
    _inherits(BoundToArc, _BoundToCircle);

    function BoundToArc(center, radius, startAngle, endAngle) {
      var _this7;

      _classCallCheck(this, BoundToArc);

      _this7 = _possibleConstructorReturn(this, _getPrototypeOf(BoundToArc).call(this, center, radius));
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

  var BasicStrategy =
  /*#__PURE__*/
  function () {
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

  var NotCrossingStrategy =
  /*#__PURE__*/
  function (_BasicStrategy) {
    _inherits(NotCrossingStrategy, _BasicStrategy);

    function NotCrossingStrategy() {
      _classCallCheck(this, NotCrossingStrategy);

      return _possibleConstructorReturn(this, _getPrototypeOf(NotCrossingStrategy).apply(this, arguments));
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

  var FloatLeftStrategy =
  /*#__PURE__*/
  function (_BasicStrategy2) {
    _inherits(FloatLeftStrategy, _BasicStrategy2);

    function FloatLeftStrategy(rectangle) {
      var _this2;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, FloatLeftStrategy);

      _this2 = _possibleConstructorReturn(this, _getPrototypeOf(FloatLeftStrategy).call(this, rectangle, options));
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

  var FloatRightStrategy =
  /*#__PURE__*/
  function (_FloatLeftStrategy) {
    _inherits(FloatRightStrategy, _FloatLeftStrategy);

    function FloatRightStrategy(rectangle) {
      var _this5;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, FloatRightStrategy);

      _this5 = _possibleConstructorReturn(this, _getPrototypeOf(FloatRightStrategy).call(this, rectangle, options));
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

  var Target =
  /*#__PURE__*/
  function (_EventEmitter) {
    _inherits(Target, _EventEmitter);

    function Target(element, draggables) {
      var _this;

      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      _classCallCheck(this, Target);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Target).call(this, undefined, options));

      var target = _assertThisInitialized(_this);

      var parent = options.parent || getDefaultParent(element);
      _this.options = Object.assign({
        timeEnd: 200,
        timeExcange: 400,
        parent: parent
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

      _this.init();

      return _this;
    }

    _createClass(Target, [{
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
        return Rectangle.fromElement(this.element, this.options.parent, this.options.isContentBoxSize, true);
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
        var includePoint = this.getRectangle().includePoint(draggable.getPosition());

        if (!includePoint) {
          if (this.getRectangle().includePoint(draggable.getCenter())) {
            draggable.position = draggable.getCenter().clone();
          } else {
            return false;
          }
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
    }]);

    return Target;
  }(EventEmitter);
  Target.emitter = new EventEmitter(Target);
  Target.emitter.on('target:create', addToDefaultScope);

  var scopes = [];

  var Scope =
  /*#__PURE__*/
  function (_EventEmitter) {
    _inherits(Scope, _EventEmitter);

    function Scope(draggables, targets) {
      var _this;

      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      _classCallCheck(this, Scope);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Scope).call(this, undefined, options));
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

  var isTouch = 'ontouchstart' in window;
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

  var Draggable =
  /*#__PURE__*/
  function (_EventEmitter) {
    _inherits(Draggable, _EventEmitter);

    function Draggable(element) {
      var _this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, Draggable);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Draggable).call(this, undefined, options));
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
        this.bound = this.options.bound || BoundToElement.bounding(this.parent, this.parent);
      }
    }, {
      key: "startPositioning",
      value: function startPositioning() {
        this._setDefaultTransition();

        this.offset = Point.elementOffset(this.element, this.parent, true);
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

        this.handler.addEventListener(touchEvents.start, this._dragStart, isSupportPassiveEvents ? {
          passive: false
        } : false);
        this.handler.addEventListener(mouseEvents.start, this._dragStart, isSupportPassiveEvents ? {
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
        var transform = this.element.style[transformProperty];
        var translateCss = " translate3d(".concat(point.x, "px, ").concat(point.y, "px, 0px)");
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf('MSIE ') !== -1;

        if (msie) {
          translateCss = " translate(".concat(point.x, "px,").concat(point.y, "px)");

          if (!/translate\([^)]+\)/.test(transform)) {
            transform += translateCss;
          } else {
            transform = transform.replace(/translate\([^)]+\)/, translateCss);
          }
        } else {
          if (!/translate3d\([^)]+\)/.test(transform)) {
            transform += translateCss;
          } else {
            transform = transform.replace(/translate3d\([^)]+\)/, translateCss);
          }
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
            document.addEventListener(mouseEvents.end, this._nativeDragEnd, isSupportPassiveEvents ? {
              passive: false
            } : false);
          }
        } else {
          document.addEventListener(touchEvents.move, this._dragMove, isSupportPassiveEvents ? {
            passive: false
          } : false);
          document.addEventListener(mouseEvents.move, this._dragMove, isSupportPassiveEvents ? {
            passive: false
          } : false);
          document.addEventListener(touchEvents.end, this._dragEnd, isSupportPassiveEvents ? {
            passive: false
          } : false);
          document.addEventListener(mouseEvents.end, this._dragEnd, isSupportPassiveEvents ? {
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

        var parentRect = this.parent.getBoundingClientRect();
        var clonedElement = this.element.cloneNode(true);
        clonedElement.style[transformProperty] = '';
        copyStyles(this.element, clonedElement);
        clonedElement.style.position = 'absolute';
        document.body.appendChild(clonedElement);
        addClass(this.element, 'dragee-placeholder');
        var emulationDraggable = new Draggable(clonedElement, {
          parent: document.body,
          bound: function bound(point) {
            return point;
          },
          on: {
            'drag:move': function dragMove() {
              var parentRectPoint = new Point(parentRect.left, parentRect.top);
              _this3.position = emulationDraggable.position.sub(parentRectPoint).sub(_this3._startScrollPoint);

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
        var parentRectPoint = new Point(parentRect.left, parentRect.top);
        emulationDraggable._startScrollPoint = this._startScrollPoint;
        emulationDraggable.move(this.pinnedPosition.add(parentRectPoint).add(new Point(window.scrollX, window.scrollY)));
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
      key: "parent",
      get: function get() {
        return this._parent = this._parent || this.options.parent || getDefaultParent(this.element);
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
  Draggable.emitter = new EventEmitter(Draggable);
  Draggable.emitter.on('draggable:create', addToDefaultScope$1);

  var List =
  /*#__PURE__*/
  function (_EventEmitter) {
    _inherits(List, _EventEmitter);

    function List(draggables) {
      var _this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, List);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(List).call(this, undefined, options));
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
      value: function factory(parentElement, elements) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var draggables = Array.from(elements).map(function (element) {
          return new Draggable(element, Object.assign({
            parent: parentElement
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

  var BubblingList =
  /*#__PURE__*/
  function (_List) {
    _inherits(BubblingList, _List);

    function BubblingList(draggables) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, BubblingList);

      return _possibleConstructorReturn(this, _getPrototypeOf(BubblingList).call(this, draggables, options));
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
        sortedDraggables.forEach(function (draggable, index) {
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
      value: function factory(parentElement, elements) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var draggables = Array.from(elements).map(function (element) {
          return new Draggable(element, Object.assign({
            parent: parentElement
          }, options.draggable || {}));
        });
        return new BubblingList(draggables, options.list || {});
      }
    }]);

    return BubblingList;
  }(List);

  function setStyle(element, style) {
    style = style || {};
    var cssText = '';

    for (var key in style) {
      if (style.hasOwnProperty(key)) {
        cssText += key + ': ' + style[key] + '; ';
      }
    }

    element.style.cssText = cssText;
  }

  function appendFirstChild(element, node) {
    if (element.firstChild) {
      element.insertBefore(node, element.firstChild);
    } else {
      element.appendChild(node);
    }
  }

  function createCanvas(area, rectagle) {
    var canvas = document.createElement('canvas');

    if (window.getComputedStyle(area).position === 'static') {
      area.style.position = 'relative';
    }

    canvas.setAttribute('width', rectagle.size.x + 'px');
    canvas.setAttribute('height', rectagle.size.y + 'px');
    setStyle(canvas, {
      position: 'absolute',
      left: rectagle.position.y + 'px',
      top: rectagle.position.y + 'px',
      width: rectagle.size.x + 'px',
      height: rectagle.size.y + 'px'
    });
    appendFirstChild(area, canvas);
    return canvas;
  }

  var Spider =
  /*#__PURE__*/
  function () {
    function Spider(area, elements) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      _classCallCheck(this, Spider);

      var areaRectangle = Rectangle.fromElement(area, area);
      this.options = Object.assign({
        angle: 0,
        dAngle: 2 * Math.PI / elements.length,
        center: areaRectangle.getCenter(),
        startRadius: 50,
        endRadius: areaRectangle.getMinSide() / 2,
        lineWidth: 2,
        strokeStyle: '#ff5577',
        fillStyle: 'rgba(150,255,50,0.8)'
      }, options);
      this.area = area;
      this.areaRectangle = areaRectangle;
      this.init(elements);
    }

    _createClass(Spider, [{
      key: "init",
      value: function init(elements) {
        var _this = this;

        this.canvas = createCanvas(this.area, this.areaRectangle);
        this.context = this.canvas.getContext('2d');
        this.draggables = elements.map(function (element, i) {
          var angle = _this.options.angle + i * _this.options.dAngle;
          var halfSize = Point.elementSize(element).mult(0.5);
          var start = getPointFromRadialSystem(angle, _this.options.startRadius, _this.options.center).sub(halfSize);
          var end = getPointFromRadialSystem(angle, _this.options.endRadius, _this.options.center).sub(halfSize);
          return new Draggable(element, {
            parent: _this.area,
            bound: BoundToLine.bounding(start, end),
            position: start,
            on: {
              'drag:move': function dragMove() {
                return _this.draw();
              }
            }
          });
        });
        this.isInit = true;
        this.draw();
      }
    }, {
      key: "draw",
      value: function draw() {
        if (!this.isInit) {
          return;
        }

        this.context.clearRect(0, 0, this.areaRectangle.size.x, this.areaRectangle.size.y);
        this.context.beginPath();
        var point = this.draggables[0].getCenter();
        this.context.moveTo(point.x, point.y);

        for (var i = 0; i < this.draggables.length; i++) {
          point = this.draggables[i].getCenter();
          this.context.lineTo(point.x, point.y);
        }

        this.context.closePath();
        this.context.lineWidth = this.options.lineWidth;
        this.context.strokeStyle = this.options.strokeStyle;
        this.context.stroke();
        this.context.fillStyle = this.options.fillStyle;
        this.context.fill();
      }
    }]);

    return Spider;
  }();

  var ArcSlider =
  /*#__PURE__*/
  function (_EventEmitter) {
    _inherits(ArcSlider, _EventEmitter);

    function ArcSlider(area, element) {
      var _this;

      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      _classCallCheck(this, ArcSlider);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(ArcSlider).call(this, undefined, options));
      var areaRectangle = Rectangle.fromElement(area, area);
      _this.options = Object.assign({
        center: areaRectangle.getCenter(),
        radius: areaRectangle.getMinSide() / 2,
        startAngle: Math.PI,
        endAngle: 0,
        angles: [Math.PI, -Math.PI / 4, 0, Math.PI / 4, Math.PI / 2],
        time: 500
      }, options);
      _this.shiftedCenter = _this.options.center;
      _this.area = area;

      _this.init(element);

      return _this;
    }

    _createClass(ArcSlider, [{
      key: "init",
      value: function init(element) {
        var _this2 = this;

        var angle = this.options.startAngle;
        var position = getPointFromRadialSystem(angle, this.options.radius, this.shiftedCenter);
        this.angle = angle;
        this.draggable = new Draggable(element, {
          parent: this.area,
          bound: BoundToArc.bounding(this.shiftedCenter, this.options.radius, this.options.startAngle, this.options.endAngle),
          position: position,
          on: {
            'drag:move': function dragMove() {
              return _this2.change();
            }
          }
        });
      }
    }, {
      key: "updateAngle",
      value: function updateAngle() {
        this.angle = getAngle(this.shiftedCenter, this.draggable.position);
      }
    }, {
      key: "change",
      value: function change() {
        this.updateAngle(); //      var angle = Geometry.getNearestAngle(this.options.angles, this.angle);
        //      this.setAngle(angle,this.options.time);

        this.emit('arcslider:change', {
          angle: this.angle
        });
      }
    }, {
      key: "setAngle",
      value: function setAngle(angle, time) {
        var position = getPointFromRadialSystem(this.angle, this.options.radius, this.shiftedCenter);
        this.angle = normalizeAngle(angle);
        this.draggable.pinPosition(position, time || 0);
        this.emit('arcslider:change', this.angle);
      }
    }]);

    return ArcSlider;
  }(EventEmitter);

  var rnd = function rnd() {
    return Math.round(Math.random() * 255);
  };

  var toHexString = function toHexString(digit) {
    var str = digit.toString(16);

    while (str.length < 2) {
      str = '0' + str;
    }

    return str;
  };

  function randomColor() {
    return "#".concat(toHexString(rnd())).concat(toHexString(rnd())).concat(toHexString(rnd()));
  }

  function getArrayWithBoundIndexes(index, length) {
    var retIndexes = [];

    if (index !== -1) {
      retIndexes.push(index);
      retIndexes.push((index + 1) % length);
    }

    return retIndexes;
  }

  var Chart =
  /*#__PURE__*/
  function (_EventEmitter) {
    _inherits(Chart, _EventEmitter);

    function Chart(area, elements) {
      var _this;

      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      _classCallCheck(this, Chart);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Chart).call(this, undefined, options));
      var areaRectangle = Rectangle.fromElement(area, area);
      _this.options = Object.assign({
        center: areaRectangle.getCenter(),
        radius: areaRectangle.getMinSide() / 2,
        touchRadius: areaRectangle.getMinSide() / 2,
        boundAngle: Math.PI / 9,
        fillStyles: range(0, elements.length).map(function () {
          return randomColor();
        }),
        initAngles: range(-90, 270, 360 / elements.length).map(function (angle) {
          return toRadian(angle);
        }),
        limitImg: null,
        limitImgOffset: new Point(0, 0)
      }, options);
      _this.area = area;
      _this.areaRectangle = areaRectangle;

      _this.init(elements);

      return _this;
    }

    _createClass(Chart, [{
      key: "init",
      value: function init(elements) {
        var _this2 = this;

        this.canvas = createCanvas(this.area, this.areaRectangle);
        this.context = this.canvas.getContext('2d');
        this.draggables = elements.map(function (element, i) {
          var angle = _this2.options.initAngles[i];
          var halfSize = Point.elementSize(element).mult(0.5);
          var position = getPointFromRadialSystem(angle, _this2.options.touchRadius, _this2.options.center.sub(halfSize));
          return new Draggable(element, {
            parent: _this2.area,
            bound: BoundToArc.bounding(_this2.options.center.sub(halfSize), _this2.options.touchRadius, _this2.getBoundAngle(i, false), _this2.getBoundAngle(i, true)),
            position: position,
            on: {
              'drag:move': function dragMove() {
                return _this2.draw();
              }
            }
          });
        });
        this.isInit = true;
        this.draw();
      }
    }, {
      key: "updateAngles",
      value: function updateAngles() {
        var _this3 = this;

        this.angles = this.draggables.map(function (draggable) {
          var halfSize = draggable.getSize().mult(0.5);
          return getAngle(_this3.options.center.sub(halfSize), draggable.position);
        });
      }
    }, {
      key: "getBoundAngle",
      value: function getBoundAngle(index, isClossing) {
        var _this4 = this;

        var sign = isClossing ? 1 : -1;
        return function () {
          var i = (index + sign) % _this4.angles.length;

          if (i < 0) {
            i += _this4.angles.length;
          }

          return normalizeAngle(_this4.angles[i] - sign * _this4.options.boundAngle);
        };
      }
    }, {
      key: "draw",
      value: function draw() {
        var _this5 = this;

        if (!this.isInit) {
          return;
        }

        this.updateAngles();
        this.context.clearRect(0, 0, this.areaRectangle.size.x, this.areaRectangle.size.y);
        this.draggables.forEach(function (_draggable, index) {
          _this5.drawArc(_this5.context, _this5.options.center, _this5.options.radius, index);
        });
        this.draggables.forEach(function (_draggable, index) {
          _this5.drawLimitImg(index);
        });
        this.emit('chart:draw');
      }
    }, {
      key: "createClone",
      value: function createClone(element) {
        var _this6 = this;

        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        if (!this.isInit) {
          return;
        }

        var rectangle = Rectangle.fromElement(element, element);
        var opts = Object.assign({
          center: rectangle.getCenter(),
          radius: rectangle.getMinSide() / 2,
          fillStyles: this.options.fillStyles
        }, options);
        var canvas = createCanvas(element, rectangle);
        var context = canvas.getContext('2d');
        var cloneObj = {
          draw: function draw() {
            context.clearRect(0, 0, rectangle.size.x, rectangle.size.y);

            _this6.draggables.forEach(function (_draggable, index) {
              _this6.drawArc(context, opts.center, opts.radius, index);
            });
          }
        };
        cloneObj.draw();
        return cloneObj;
      }
    }, {
      key: "getFillStyle",
      value: function getFillStyle(index) {
        if (typeof this.options.fillStyles[index] === 'function') {
          this.options.fillStyles[index] = this.options.fillStyles[index].call(this);
        }

        return this.options.fillStyles[index];
      }
    }, {
      key: "drawArc",
      value: function drawArc(context, center, radius, index) {
        var startAngle = this.angles[index];
        var endAngle = this.angles[(index + 1) % this.angles.length];
        var color = this.getFillStyle(index);
        context.beginPath();
        context.moveTo(center.x, center.y);
        context.arc(center.x, center.y, radius, startAngle, endAngle, false);
        context.lineTo(center.x, center.y);
        context.closePath();
        context.fillStyle = color;
        context.fill();
      }
    }, {
      key: "drawLimitImg",
      value: function drawLimitImg(index) {
        var point, img;

        if (this.options.limitImg) {
          img = this.options.limitImg instanceof Array ? this.options.limitImg[index] : this.options.limitImg;
        }

        if (img) {
          var angle = normalizeAngle(this.angles[index]);
          point = new Point(0, -img.height / 2);
          point = point.add(this.options.limitImgOffset);
          this.context.translate(this.areaRectangle.size.x / 2, this.areaRectangle.size.y / 2);
          this.context.rotate(angle);
          this.context.drawImage(img, point.x, point.y);
          this.context.setTransform(1, 0, 0, 1, 0, 0);
        }
      }
    }, {
      key: "getAnglesDiff",
      value: function getAnglesDiff() {
        var angles = this.angles.slice(1);
        var baseAngle = this.angles[0];
        angles.push(baseAngle);
        return angles.map(function (angle) {
          var diffAngle = normalizeAngle(angle - baseAngle);
          baseAngle = angle;
          return diffAngle;
        });
      }
    }, {
      key: "getPercent",
      value: function getPercent() {
        return this.getAnglesDiff().map(function (diffAngle) {
          return diffAngle / (2 * Math.PI);
        });
      }
    }, {
      key: "getArcBisectrixs",
      value: function getArcBisectrixs() {
        var _this7 = this;

        return this.getAnglesDiff().map(function (diffAngle, i) {
          return normalizeAngle(_this7.angles[i] + diffAngle / 2);
        });
      }
    }, {
      key: "getArcOnPoint",
      value: function getArcOnPoint(point) {
        var angle = getAngle(this.options.center, point);
        var radius = getDistance(this.options.center, point);

        if (radius > this.options.radius) {
          return -1;
        }

        var offset = -1,
            i,
            j;

        for (i = 0; i < this.angles.length; i++) {
          if (offset === -1 || this.angles[offset] > this.angles[i]) {
            offset = i;
          }
        }

        for (i = 0, j = offset; i < this.angles.length; i++, j = (i + offset) % this.angles.length) {
          if (angle < this.angles[j]) {
            break;
          }
        }

        if (--j < 0) {
          j += this.angles.length;
        }

        return j;
      }
    }, {
      key: "setAngles",
      value: function setAngles(angles) {
        var _this8 = this;

        this.angles = angles;
        this.draggables.forEach(function (draggable, i) {
          var angle = _this8.angles[i];
          var halfSize = draggable.getSize().mult(0.5);
          var position = getPointFromRadialSystem(angle, _this8.options.touchRadius, _this8.options.center.sub(halfSize));
          draggable.moveAndSave(position);
        });
        this.draw();
      }
    }, {
      key: "setActiveArc",
      value: function setActiveArc(index) {
        var enableIndexes = getArrayWithBoundIndexes(index, this.draggables.length);
        this.activeArcIndex = index;
        this.draggables.forEach(function (draggable, i) {
          draggable.enable = enableIndexes.indexOf(i) !== -1;
        });
        this.draw();
      }
    }]);

    return Chart;
  }(EventEmitter);

  exports.ArcSlider = ArcSlider;
  exports.Bound = Bound;
  exports.BoundToArc = BoundToArc;
  exports.BoundToCircle = BoundToCircle;
  exports.BoundToElement = BoundToElement;
  exports.BoundToLine = BoundToLine;
  exports.BoundToLineX = BoundToLineX;
  exports.BoundToLineY = BoundToLineY;
  exports.BoundToRectangle = BoundToRectangle;
  exports.BubblingList = BubblingList;
  exports.Chart = Chart;
  exports.Draggable = Draggable;
  exports.FloatLeftStrategy = FloatLeftStrategy;
  exports.FloatRightStrategy = FloatRightStrategy;
  exports.List = List;
  exports.NotCrossingStrategy = NotCrossingStrategy;
  exports.Point = Point;
  exports.Rectangle = Rectangle;
  exports.Scope = Scope;
  exports.Spider = Spider;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZGV2LmpzIiwic291cmNlcyI6WyIuLi9zcmMvZ2VvbWV0cnkvcG9pbnQuanMiLCIuLi9zcmMvZ2VvbWV0cnkvcmVjdGFuZ2xlLmpzIiwiLi4vc3JjL3V0aWxzL2NsYXNzZXMuanMiLCIuLi9zcmMvdXRpbHMvZ2V0LWRlZmF1bHQtcGFyZW50LmpzIiwiLi4vc3JjL2V2ZW50RW1pdHRlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9kZXNhbmRyby1nZXQtc3R5bGUtcHJvcGVydHkvZ2V0LXN0eWxlLXByb3BlcnR5LmpzIiwiLi4vc3JjL2dlb21ldHJ5L2Rpc3RhbmNlcy5qcyIsIi4uL3NyYy9nZW9tZXRyeS9ib3VuZHMuanMiLCIuLi9zcmMvZ2VvbWV0cnkvYW5nbGVzLmpzIiwiLi4vc3JjL2JvdW5kaW5nLmpzIiwiLi4vc3JjL3V0aWxzL3JlbW92ZS1hcnJheS1pdGVtLmpzIiwiLi4vc3JjL3V0aWxzL3JhbmdlLmpzIiwiLi4vc3JjL3Bvc2l0aW9uaW5nLmpzIiwiLi4vc3JjL3RhcmdldC5qcyIsIi4uL3NyYy9zY29wZS5qcyIsIi4uL3NyYy91dGlscy9pcy1zdXBwb3J0LXBhc3NpdmUtZXZlbnRzLmpzIiwiLi4vc3JjL2RyYWdnYWJsZS5qcyIsIi4uL3NyYy9saXN0LmpzIiwiLi4vc3JjL2J1YmJsaW5nTGlzdC5qcyIsIi4uL3NyYy91dGlscy9jcmVhdGUtY2FudmFzLmpzIiwiLi4vc3JjL3NwaWRlci5qcyIsIi4uL3NyYy9hcmNzbGlkZXIuanMiLCIuLi9zcmMvY2hhcnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gZ2V0U3VtVmFsdWVPZlN0eWxlUnVsZXMoZWxlbWVudCwgcnVsZXMpIHtcbiAgcmV0dXJuIHJ1bGVzLnJlZHVjZSgoc3VtLCBydWxlKSA9PiB7XG4gICAgcmV0dXJuIHN1bSArIHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpW3J1bGVdfHwwKVxuICB9LCAwKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2ludCB7XG4gIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICB0aGlzLnggPSB4XG4gICAgdGhpcy55ID0geVxuICB9XG5cbiAgYWRkKHApIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCArIHAueCwgdGhpcy55ICsgcC55KVxuICB9XG5cbiAgc3ViKHApIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCAtIHAueCwgdGhpcy55IC0gcC55KVxuICB9XG5cbiAgbXVsdChrKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnggKiBrLCB0aGlzLnkgKiBrKVxuICB9XG5cbiAgbmVnYXRpdmUoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCgtdGhpcy54LCAtdGhpcy55KVxuICB9XG5cbiAgY29tcGFyZShwKSB7XG4gICAgcmV0dXJuICh0aGlzLnggPT09IHAueCAmJiB0aGlzLnkgPT09IHAueSlcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54LCB0aGlzLnkpXG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gYHt4PSR7dGhpcy54fSx5PSR7dGhpcy55fWBcbiAgfVxuXG4gIHN0YXRpYyBlbGVtZW50T2Zmc2V0KGVsZW1lbnQsIHBhcmVudCkge1xuICAgIHBhcmVudCA9IHBhcmVudCB8fCBlbGVtZW50LnBhcmVudE5vZGVcbiAgICBjb25zdCBlbGVtZW50UmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICBjb25zdCBwYXJlbnRSZWN0ID0gcGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgcmV0dXJuIG5ldyBQb2ludChcbiAgICAgIGVsZW1lbnRSZWN0LmxlZnQgLSBwYXJlbnRSZWN0LmxlZnQsXG4gICAgICBlbGVtZW50UmVjdC50b3AgLSBwYXJlbnRSZWN0LnRvcFxuICAgIClcbiAgfVxuXG4gIHN0YXRpYyBlbGVtZW50U2l6ZShlbGVtZW50LCBpc0NvbnRlbnRCb3hTaXplPWZhbHNlKSB7XG4gICAgbGV0IHdpZHRoID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudClbJ3dpZHRoJ10pXG4gICAgbGV0IGhlaWdodCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpWydoZWlnaHQnXSlcbiAgICBpZiAoIWlzQ29udGVudEJveFNpemUpIHtcbiAgICAgIHdpZHRoICs9IGdldFN1bVZhbHVlT2ZTdHlsZVJ1bGVzKGVsZW1lbnQsIFsncGFkZGluZy1sZWZ0JywgJ3BhZGRpbmctcmlnaHQnLCAnYm9yZGVyLWxlZnQtd2lkdGgnLCAnYm9yZGVyLXJpZ2h0LXdpZHRoJ10pXG4gICAgICBoZWlnaHQgKz0gZ2V0U3VtVmFsdWVPZlN0eWxlUnVsZXMoZWxlbWVudCwgWydwYWRkaW5nLXRvcCcsICdwYWRkaW5nLWJvdHRvbScsICdib3JkZXItdG9wLXdpZHRoJywgJ2JvcmRlci1ib3R0b20td2lkdGgnXSlcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBQb2ludCh3aWR0aCwgaGVpZ2h0KVxuICB9XG59XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9wb2ludCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVjdGFuZ2xlIHtcbiAgY29uc3RydWN0b3IocG9zaXRpb24sIHNpemUpIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb25cbiAgICB0aGlzLnNpemUgPSBzaXplXG4gIH1cblxuICBnZXRQMSgpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvblxuICB9XG5cbiAgZ2V0UDIoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnNpemUueCwgdGhpcy5wb3NpdGlvbi55KVxuICB9XG5cbiAgZ2V0UDMoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb24uYWRkKHRoaXMuc2l6ZSlcbiAgfVxuXG4gIGdldFA0KCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSlcbiAgfVxuXG4gIGdldENlbnRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi5hZGQodGhpcy5zaXplLm11bHQoMC41KSlcbiAgfVxuXG4gIG9yKHJlY3QpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IG5ldyBQb2ludChNYXRoLm1pbih0aGlzLnBvc2l0aW9uLngsIHJlY3QucG9zaXRpb24ueCksIE1hdGgubWluKHRoaXMucG9zaXRpb24ueSwgcmVjdC5wb3NpdGlvbi55KSlcbiAgICBjb25zdCBzaXplID0gKG5ldyBQb2ludChNYXRoLm1heCh0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnNpemUueCwgcmVjdC5wb3NpdGlvbi54ICsgcmVjdC5zaXplLngpLCBNYXRoLm1heCh0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSwgcmVjdC5wb3NpdGlvbi55ICsgcmVjdC5zaXplLnkpKSkuc3ViKHBvc2l0aW9uKVxuICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHBvc2l0aW9uLCBzaXplKVxuICB9XG5cbiAgYW5kKHJlY3QpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IG5ldyBQb2ludChNYXRoLm1heCh0aGlzLnBvc2l0aW9uLngsIHJlY3QucG9zaXRpb24ueCksIE1hdGgubWF4KHRoaXMucG9zaXRpb24ueSwgcmVjdC5wb3NpdGlvbi55KSlcbiAgICBjb25zdCBzaXplID0gKG5ldyBQb2ludChNYXRoLm1pbih0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnNpemUueCwgcmVjdC5wb3NpdGlvbi54ICsgcmVjdC5zaXplLngpLCBNYXRoLm1pbih0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSwgcmVjdC5wb3NpdGlvbi55ICsgcmVjdC5zaXplLnkpKSkuc3ViKHBvc2l0aW9uKVxuICAgIGlmIChzaXplLnggPD0gMCB8fCBzaXplLnkgPD0gMCkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUocG9zaXRpb24sIHNpemUpXG4gIH1cblxuICBpbmNsdWRlUG9pbnQocCkge1xuICAgIHJldHVybiAhKHRoaXMucG9zaXRpb24ueCA+IHAueCB8fCB0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnNpemUueCA8IHAueCB8fCB0aGlzLnBvc2l0aW9uLnkgPiBwLnkgfHwgdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnkgPCBwLnkpXG4gIH1cblxuICBpbmNsdWRlUmVjdGFuZ2xlKHJlY3RhbmdsZSkge1xuICAgIHJldHVybiB0aGlzLmluY2x1ZGVQb2ludChyZWN0YW5nbGUucG9zaXRpb24pICYmIHRoaXMuaW5jbHVkZVBvaW50KHJlY3RhbmdsZS5nZXRQMygpKVxuICB9XG5cbiAgbW92ZVRvQm91bmQocmVjdCwgYXhpcykge1xuICAgIGxldCBzZWxBeGlzLCBjcm9zc1JlY3RhbmdsZVxuICAgIGlmIChheGlzKSB7XG4gICAgICBzZWxBeGlzID0gYXhpc1xuICAgIH0gZWxzZSB7XG4gICAgICBjcm9zc1JlY3RhbmdsZSA9IHRoaXMuYW5kKHJlY3QpXG4gICAgICBpZiAoIWNyb3NzUmVjdGFuZ2xlKSB7XG4gICAgICAgIHJldHVybiByZWN0XG4gICAgICB9XG4gICAgICBzZWxBeGlzID0gY3Jvc3NSZWN0YW5nbGUuc2l6ZS54ID4gY3Jvc3NSZWN0YW5nbGUuc2l6ZS55ID8gJ3knIDogJ3gnXG4gICAgfVxuICAgIGNvbnN0IHRoaXNDZW50ZXIgPSB0aGlzLmdldENlbnRlcigpXG4gICAgY29uc3QgcmVjdENlbnRlciA9IHJlY3QuZ2V0Q2VudGVyKClcbiAgICBjb25zdCBzaWduID0gdGhpc0NlbnRlcltzZWxBeGlzXSA+IHJlY3RDZW50ZXJbc2VsQXhpc10gPyAtMSA6IDFcbiAgICBjb25zdCBvZmZzZXQgPSBzaWduID4gMCA/IHRoaXMucG9zaXRpb25bc2VsQXhpc10gKyB0aGlzLnNpemVbc2VsQXhpc10gLSByZWN0LnBvc2l0aW9uW3NlbEF4aXNdIDogdGhpcy5wb3NpdGlvbltzZWxBeGlzXSAtIChyZWN0LnBvc2l0aW9uW3NlbEF4aXNdICsgcmVjdC5zaXplW3NlbEF4aXNdKVxuICAgIHJlY3QucG9zaXRpb25bc2VsQXhpc10gPSByZWN0LnBvc2l0aW9uW3NlbEF4aXNdICsgb2Zmc2V0XG4gICAgcmV0dXJuIHJlY3RcbiAgfVxuXG4gIGdldFNxdWFyZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zaXplLnggKiB0aGlzLnNpemUueVxuICB9XG5cbiAgc3R5bGVBcHBseShlbCkge1xuICAgIGVsID0gZWwgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5kJylcbiAgICBlbC5zdHlsZS5sZWZ0ID0gdGhpcy5wb3NpdGlvbi54ICsgJ3B4J1xuICAgIGVsLnN0eWxlLnRvcCA9IHRoaXMucG9zaXRpb24ueSArICdweCdcbiAgICBlbC5zdHlsZS53aWR0aCA9IHRoaXMuc2l6ZS54ICsgJ3B4J1xuICAgIGVsLnN0eWxlLmhlaWdodCA9IHRoaXMuc2l6ZS55ICsgJ3B4J1xuICB9XG5cbiAgZ3Jvd3RoKHNpemUpIHtcbiAgICB0aGlzLnNpemUgPSB0aGlzLnNpemUuYWRkKHNpemUpXG4gICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMucG9zaXRpb24uYWRkKHNpemUubXVsdCgtMC41KSlcbiAgfVxuXG4gIGdldE1pblNpZGUoKSB7XG4gICAgcmV0dXJuIE1hdGgubWluKHRoaXMuc2l6ZS54LCB0aGlzLnNpemUueSlcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRWxlbWVudChlbGVtZW50LCBwYXJlbnQ9ZWxlbWVudC5wYXJlbnROb2RlLCBpc0NvbnRlbnRCb3hTaXplPWZhbHNlLCBpc0NvbnNpZGVyVHJhbnNsYXRlPWZhbHNlKSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBQb2ludC5lbGVtZW50T2Zmc2V0KGVsZW1lbnQsIHBhcmVudCwgaXNDb25zaWRlclRyYW5zbGF0ZSlcbiAgICBjb25zdCBzaXplID0gUG9pbnQuZWxlbWVudFNpemUoZWxlbWVudCwgaXNDb250ZW50Qm94U2l6ZSlcbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZShwb3NpdGlvbiwgc2l6ZSlcbiAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGhhc0NsYXNzKGVsZW1lbnQsIGMpIHtcbiAgY29uc3QgcmUgPSBuZXcgUmVnRXhwKCcoXnxcXFxccyknICsgYyArICcoXFxcXHN8JCknLCAnZycpXG4gIHJldHVybiAocmUudGVzdChlbGVtZW50LmNsYXNzTmFtZSkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRDbGFzcyhlbGVtZW50LCBjKSB7XG4gIGlmICghaGFzQ2xhc3MoZWxlbWVudCwgYykpIHtcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IChlbGVtZW50LmNsYXNzTmFtZSArICcgJyArIGMpLnJlcGxhY2UoL1xccysvZywgJyAnKS5yZXBsYWNlKC8oXiB8ICQpL2csICcnKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDbGFzcyhlbGVtZW50LCBjKSB7XG4gIGNvbnN0IHJlID0gbmV3IFJlZ0V4cCgnKF58XFxcXHMpJyArIGMgKyAnKFxcXFxzfCQpJywgJ2cnKVxuICBlbGVtZW50LmNsYXNzTmFtZSA9IGVsZW1lbnQuY2xhc3NOYW1lLnJlcGxhY2UocmUsICckMScpLnJlcGxhY2UoL1xccysvZywgJyAnKS5yZXBsYWNlKC8oXiB8ICQpL2csICcnKVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0RGVmYXVsdFBhcmVudChlbGVtZW50KSB7XG4gIGxldCBwYXJlbnQgPSBlbGVtZW50LnBhcmVudE5vZGVcbiAgd2hpbGUgKHBhcmVudC5wYXJlbnROb2RlICYmIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHBhcmVudClbJ3Bvc2l0aW9uJ10gPT09ICdzdGF0aWMnICYmIHBhcmVudC50YWdOYW1lICE9PSAnQk9EWScpIHtcbiAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50Tm9kZVxuICB9XG4gIHJldHVybiBwYXJlbnRcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yIChjb250ZXh0LCBvcHRpb25zID0ge30pIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0IHx8IHRoaXNcbiAgICB0aGlzLmV2ZW50cyA9IHt9XG5cbiAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLm9uKSB7XG4gICAgICBmb3IgKGNvbnN0IFtldmVudE5hbWUsIGZuXSBvZiBPYmplY3QuZW50cmllcyhvcHRpb25zLm9uKSkge1xuICAgICAgICB0aGlzLm9uKGV2ZW50TmFtZSwgZm4pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZW1pdChldmVudE5hbWUpIHtcbiAgICB0aGlzLmludGVycnVwdGVkID0gZmFsc2VcbiAgICBjb25zdCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpXG5cbiAgICBpZiAoIXRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHJldHVyblxuXG4gICAgZm9yIChjb25zdCBmdW5jIG9mIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIGZ1bmMuYXBwbHkodGhpcy5jb250ZXh0LCBhcmdzKVxuICAgICAgaWYgKHRoaXMuaW50ZXJydXB0ZWQpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaW50ZXJydXB0KCkge1xuICAgIHRoaXMuaW50ZXJydXB0ZWQgPSB0cnVlXG4gIH1cblxuICBvbihldmVudE5hbWUsIGZuKSB7XG4gICAgaWYgKCF0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdID0gW11cbiAgICB9XG5cbiAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLnB1c2goZm4pXG4gIH1cblxuICBwcmVwZW5kT24oZXZlbnROYW1lLCBmbikge1xuICAgIGlmICghdGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IFtdXG4gICAgfVxuXG4gICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS51bnNoaWZ0KGZuKVxuICB9XG5cbiAgdW5zdWJzY3JpYmUoZXZlbnROYW1lLCBmbikge1xuICAgIGlmICh0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0uaW5kZXhPZihmbilcbiAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0uc3BsaWNlKGluZGV4LCAxKVxuICAgIH1cbiAgfVxuXG4gIHJlc2V0RW1pdHRlciAoKSB7XG4gICAgdGhpcy5ldmVudHMgPSB7fVxuICB9XG5cbiAgcmVzZXRPbihldmVudE5hbWUpIHtcbiAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdID0gW11cbiAgfVxufVxuIiwiLyohXG4gKiBnZXRTdHlsZVByb3BlcnR5IHYxLjAuNFxuICogb3JpZ2luYWwgYnkga2FuZ2F4XG4gKiBodHRwOi8vcGVyZmVjdGlvbmtpbGxzLmNvbS9mZWF0dXJlLXRlc3RpbmctY3NzLXByb3BlcnRpZXMvXG4gKiBNSVQgbGljZW5zZVxuICovXG5cbi8qanNoaW50IGJyb3dzZXI6IHRydWUsIHN0cmljdDogdHJ1ZSwgdW5kZWY6IHRydWUgKi9cbi8qZ2xvYmFsIGRlZmluZTogZmFsc2UsIGV4cG9ydHM6IGZhbHNlLCBtb2R1bGU6IGZhbHNlICovXG5cbiggZnVuY3Rpb24oIHdpbmRvdyApIHtcblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgcHJlZml4ZXMgPSAnV2Via2l0IE1veiBtcyBNcyBPJy5zcGxpdCgnICcpO1xudmFyIGRvY0VsZW1TdHlsZSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZTtcblxuZnVuY3Rpb24gZ2V0U3R5bGVQcm9wZXJ0eSggcHJvcE5hbWUgKSB7XG4gIGlmICggIXByb3BOYW1lICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIHRlc3Qgc3RhbmRhcmQgcHJvcGVydHkgZmlyc3RcbiAgaWYgKCB0eXBlb2YgZG9jRWxlbVN0eWxlWyBwcm9wTmFtZSBdID09PSAnc3RyaW5nJyApIHtcbiAgICByZXR1cm4gcHJvcE5hbWU7XG4gIH1cblxuICAvLyBjYXBpdGFsaXplXG4gIHByb3BOYW1lID0gcHJvcE5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBwcm9wTmFtZS5zbGljZSgxKTtcblxuICAvLyB0ZXN0IHZlbmRvciBzcGVjaWZpYyBwcm9wZXJ0aWVzXG4gIHZhciBwcmVmaXhlZDtcbiAgZm9yICggdmFyIGk9MCwgbGVuID0gcHJlZml4ZXMubGVuZ3RoOyBpIDwgbGVuOyBpKysgKSB7XG4gICAgcHJlZml4ZWQgPSBwcmVmaXhlc1tpXSArIHByb3BOYW1lO1xuICAgIGlmICggdHlwZW9mIGRvY0VsZW1TdHlsZVsgcHJlZml4ZWQgXSA9PT0gJ3N0cmluZycgKSB7XG4gICAgICByZXR1cm4gcHJlZml4ZWQ7XG4gICAgfVxuICB9XG59XG5cbi8vIHRyYW5zcG9ydFxuaWYgKCB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gIC8vIEFNRFxuICBkZWZpbmUoIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBnZXRTdHlsZVByb3BlcnR5O1xuICB9KTtcbn0gZWxzZSBpZiAoIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyApIHtcbiAgLy8gQ29tbW9uSlMgZm9yIENvbXBvbmVudFxuICBtb2R1bGUuZXhwb3J0cyA9IGdldFN0eWxlUHJvcGVydHk7XG59IGVsc2Uge1xuICAvLyBicm93c2VyIGdsb2JhbFxuICB3aW5kb3cuZ2V0U3R5bGVQcm9wZXJ0eSA9IGdldFN0eWxlUHJvcGVydHk7XG59XG5cbn0pKCB3aW5kb3cgKTtcbiIsImV4cG9ydCBmdW5jdGlvbiBnZXREaXN0YW5jZShwMSwgcDIpIHtcbiAgY29uc3QgZHggPSBwMS54IC0gcDIueCwgZHkgPSBwMS55IC0gcDIueVxuICByZXR1cm4gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0WERpZmZlcmVuY2UocDEsIHAyKSB7XG4gIHJldHVybiBNYXRoLmFicyhwMS54IC0gcDIueClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFlEaWZmZXJlbmNlKHAxLCBwMikge1xuICByZXR1cm4gTWF0aC5hYnMocDEueSAtIHAyLnkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5KG9wdGlvbnMpIHtcbiAgcmV0dXJuIChwMSwgcDIpID0+IHtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KFxuICAgICAgTWF0aC5wb3cob3B0aW9ucy54ICogTWF0aC5hYnMocDEueCAtIHAyLngpLCAyKSArXG4gICAgICBNYXRoLnBvdyhvcHRpb25zLnkgKiBNYXRoLmFicyhwMS55IC0gcDIueSksIDIpXG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmRleE9mTmVhcmVzdFBvaW50KGFyciwgdmFsLCByYWRpdXMsIGdldERpc3RhbmNlRnVuYz1nZXREaXN0YW5jZSkge1xuICBsZXQgc2l6ZSwgaW5kZXggPSAwLCBpLCB0ZW1wXG4gIGlmIChhcnIubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIC0xXG4gIH1cbiAgc2l6ZSA9IGdldERpc3RhbmNlRnVuYyhhcnJbMF0sIHZhbClcbiAgZm9yIChpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgIHRlbXAgPSBnZXREaXN0YW5jZUZ1bmMoYXJyW2ldLCB2YWwpXG4gICAgaWYgKHRlbXAgPCBzaXplKSB7XG4gICAgICBzaXplID0gdGVtcFxuICAgICAgaW5kZXggPSBpXG4gICAgfVxuICB9XG4gIGlmIChyYWRpdXMgPj0gMCAmJiBzaXplID4gcmFkaXVzKSB7XG4gICAgcmV0dXJuIC0xXG4gIH1cbiAgcmV0dXJuIGluZGV4XG59XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9wb2ludCdcbmltcG9ydCB7IGdldERpc3RhbmNlIH0gZnJvbSAnLi9kaXN0YW5jZXMnXG5cbmV4cG9ydCBmdW5jdGlvbiBjbGFtcChtaW4sIG1heCwgdmFsKSB7XG4gIHJldHVybiBNYXRoLm1heChtaW4sIE1hdGgubWluKG1heCwgdmFsKSlcbn1cblxuLy9SZXR1cm4gY3Jvc3NpbmcgcG9pbnQgb2YgdHdvIGxpbmVzXG5leHBvcnQgZnVuY3Rpb24gZGlyZWN0Q3Jvc3NpbmcoTDFQMSwgTDFQMiwgTDJQMSwgTDJQMikge1xuICBsZXQgdGVtcCwgazEsIGsyLCBiMSwgYjIsIHgsIHlcbiAgaWYgKEwyUDEueCA9PT0gTDJQMi54KSB7XG4gICAgdGVtcCA9IEwyUDFcbiAgICBMMlAxID0gTDFQMVxuICAgIEwxUDEgPSB0ZW1wXG4gICAgdGVtcCA9IEwyUDJcbiAgICBMMlAyID0gTDFQMlxuICAgIEwxUDIgPSB0ZW1wXG4gIH1cbiAgaWYgKEwxUDEueCA9PT0gTDFQMi54KSB7XG4gICAgazIgPSAoTDJQMi55IC0gTDJQMS55KSAvIChMMlAyLnggLSBMMlAxLngpXG4gICAgYjIgPSAoTDJQMi54ICogTDJQMS55IC0gTDJQMS54ICogTDJQMi55KSAvIChMMlAyLnggLSBMMlAxLngpXG4gICAgeCA9IEwxUDEueFxuICAgIHkgPSB4ICogazIgKyBiMlxuICAgIHJldHVybiBuZXcgUG9pbnQoeCwgeSlcbiAgfSBlbHNlIHtcbiAgICBrMSA9IChMMVAyLnkgLSBMMVAxLnkpIC8gKEwxUDIueCAtIEwxUDEueClcbiAgICBiMSA9IChMMVAyLnggKiBMMVAxLnkgLSBMMVAxLnggKiBMMVAyLnkpIC8gKEwxUDIueCAtIEwxUDEueClcbiAgICBrMiA9IChMMlAyLnkgLSBMMlAxLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICBiMiA9IChMMlAyLnggKiBMMlAxLnkgLSBMMlAxLnggKiBMMlAyLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICB4ID0gKGIxIC0gYjIpIC8gKGsyIC0gazEpXG4gICAgeSA9IHggKiBrMSArIGIxXG4gICAgcmV0dXJuIG5ldyBQb2ludCh4LCB5KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZFRvU2VnbWVudChMUDEsIExQMiwgUCkge1xuICBsZXQgeCwgeVxuICB4ID0gY2xhbXAoTWF0aC5taW4oTFAxLngsIExQMi54KSwgTWF0aC5tYXgoTFAxLngsIExQMi54KSwgUC54KVxuICBpZiAoeCAhPT0gUC54KSB7XG4gICAgeSA9ICh4ID09PSBMUDEueCkgPyBMUDEueSA6IExQMi55XG4gICAgUCA9IG5ldyBQb2ludCh4LCB5KVxuICB9XG5cbiAgeSA9IGNsYW1wKE1hdGgubWluKExQMS55LCBMUDIueSksIE1hdGgubWF4KExQMS55LCBMUDIueSksIFAueSlcbiAgaWYgKHkgIT09IFAueSkge1xuICAgIHggPSAoeSA9PT0gTFAxLnkpID8gTFAxLnggOiBMUDIueFxuICAgIFAgPSBuZXcgUG9pbnQoeCwgeSlcbiAgfVxuXG4gIHJldHVybiBQXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZFRvTGluZShBLCBCLCBQKSB7XG4gIGNvbnN0IEFQID0gbmV3IFBvaW50KFAueCAtIEEueCwgUC55IC0gQS55KSxcbiAgICBBQiA9IG5ldyBQb2ludChCLnggLSBBLngsIEIueSAtIEEueSksXG4gICAgYWIyID0gQUIueCAqIEFCLnggKyBBQi55ICogQUIueSxcbiAgICBhcF9hYiA9IEFQLnggKiBBQi54ICsgQVAueSAqIEFCLnksXG4gICAgdCA9IGFwX2FiIC8gYWIyXG4gIHJldHVybiBuZXcgUG9pbnQoQS54ICsgQUIueCAqIHQsIEEueSArIEFCLnkgKiB0KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9pbnRPbkxpbmUoTFAxLCBMUDIsIHBlcmNlbnQpIHtcbiAgY29uc3QgZHggPSBMUDIueCAtIExQMS54LCBkeSA9IExQMi55IC0gTFAxLnlcbiAgcmV0dXJuIG5ldyBQb2ludChMUDEueCArIHBlcmNlbnQgKiBkeCwgTFAxLnkgKyBwZXJjZW50ICogZHkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb2ludE9uTGluZUJ5TGVuZ2h0KExQMSwgTFAyLCBsZW5naHQpIHtcbiAgY29uc3QgZHggPSBMUDIueCAtIExQMS54XG4gIGNvbnN0IGR5ID0gTFAyLnkgLSBMUDEueVxuICBjb25zdCBwZXJjZW50ID0gbGVuZ2h0IC8gZ2V0RGlzdGFuY2UoTFAxLCBMUDIpXG4gIHJldHVybiBuZXcgUG9pbnQoTFAxLnggKyBwZXJjZW50ICogZHgsIExQMS55ICsgcGVyY2VudCAqIGR5KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkUG9pbnRUb0JvdW5kUG9pbnRzKGJvdW5kcG9pbnRzLCBwb2ludCwgaXNSaWdodCkge1xuICBjb25zdCByZXN1bHQgPSBib3VuZHBvaW50cy5maWx0ZXIoKGJQb2ludCkgPT4ge1xuICAgIHJldHVybiBiUG9pbnQueSA+IHBvaW50LnkgfHwgKGlzUmlnaHQgPyBiUG9pbnQueCA8IHBvaW50LnggOiBiUG9pbnQueCA+IHBvaW50LngpXG4gIH0pXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHQubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAocG9pbnQueSA8IHJlc3VsdFtpXS55KSB7XG4gICAgICByZXN1bHQuc3BsaWNlKGksIDAsIHBvaW50KVxuICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbiAgfVxuICByZXN1bHQucHVzaChwb2ludClcbiAgcmV0dXJuIHJlc3VsdFxufVxuIiwiaW1wb3J0IFBvaW50IGZyb20gJy4vcG9pbnQnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbmdsZURpZmYoYWxwaGEsIGJldGEpIHtcbiAgY29uc3QgbWluQW5nbGUgPSBNYXRoLm1pbihhbHBoYSwgYmV0YSlcbiAgY29uc3QgbWF4QW5nbGUgPSAgTWF0aC5tYXgoYWxwaGEsIGJldGEpXG4gIHJldHVybiBNYXRoLm1pbihtYXhBbmdsZSAtIG1pbkFuZ2xlLCBtaW5BbmdsZSArIE1hdGguUEkqMiAtIG1heEFuZ2xlKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QW5nbGUocDEsIHAyKSB7XG4gIGNvbnN0IGRpZmYgPSBwMi5zdWIocDEpXG4gIHJldHVybiBub3JtYWxpemVBbmdsZShNYXRoLmF0YW4yKGRpZmYueSwgZGlmZi54KSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvUmFkaWFuKGFuZ2xlKSB7XG4gIHJldHVybiAoKGFuZ2xlICUgMzYwKSAqIE1hdGguUEkgLyAxODApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0RlZ3JlZShhbmdsZSkge1xuICByZXR1cm4gKGFuZ2xlICogMTgwIC8gTWF0aC5QSSkgJSAzNjBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kQW5nbGUobWluLCBtYXgsIHZhbCkge1xuICBsZXQgZG1pbiwgZG1heFxuICBpZiAobWluIDwgbWF4ICYmIHZhbCA+IG1pbiAmJiB2YWwgPCBtYXgpIHtcbiAgICByZXR1cm4gdmFsXG4gIH0gZWxzZSBpZiAobWF4IDwgbWluICYmICh2YWwgPCBtYXggfHwgdmFsID4gbWluKSkge1xuICAgIHJldHVybiB2YWxcbiAgfSBlbHNlIHtcbiAgICBkbWluID0gZ2V0QW5nbGVEaWZmKG1pbiwgdmFsKVxuICAgIGRtYXggPSBnZXRBbmdsZURpZmYobWF4LCB2YWwpXG4gICAgaWYgKGRtaW4gPCBkbWF4KSB7XG4gICAgICByZXR1cm4gbWluXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBtYXhcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE5lYXJlc3RBbmdsZShhcnIsIGFuZ2xlKSB7XG4gIGxldCBpLCB0ZW1wLCBkaWZmID0gTWF0aC5QSSAqIDIsIHZhbHVlXG4gIGZvciAoaSA9IDA7IGkgPCBhcnIubGVuZ3RoO2krKykge1xuICAgIHRlbXAgPSBnZXRBbmdsZURpZmYoYXJyW2ldLCBhbmdsZSlcbiAgICBpZiAoZGlmZiA8IHRlbXApIHtcbiAgICAgIGRpZmYgPSB0ZW1wXG4gICAgICB2YWx1ZSA9IGFycltpXVxuICAgIH1cbiAgfVxuICByZXR1cm4gdmFsdWVcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZUFuZ2xlKHZhbCkge1xuICB3aGlsZSAodmFsIDwgMCkge1xuICAgIHZhbCArPSAyICogTWF0aC5QSVxuICB9XG4gIHdoaWxlICh2YWwgPiAyICogTWF0aC5QSSkge1xuICAgIHZhbCAtPSAyICogTWF0aC5QSVxuICB9XG4gIHJldHVybiB2YWxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBvaW50RnJvbVJhZGlhbFN5c3RlbShhbmdsZSwgbGVuZ3RoLCBjZW50ZXIpIHtcbiAgY2VudGVyID0gY2VudGVyIHx8IG5ldyBQb2ludCgwLCAwKVxuICByZXR1cm4gY2VudGVyLmFkZChuZXcgUG9pbnQobGVuZ3RoICogTWF0aC5jb3MoYW5nbGUpLCBsZW5ndGggKiBNYXRoLnNpbihhbmdsZSkpKVxufVxuIiwiaW1wb3J0IFBvaW50IGZyb20gJy4vZ2VvbWV0cnkvcG9pbnQnXG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gJy4vZ2VvbWV0cnkvcmVjdGFuZ2xlJ1xuaW1wb3J0IHtcbiAgZ2V0UG9pbnRPbkxpbmVCeUxlbmdodCxcbiAgZGlyZWN0Q3Jvc3NpbmcsXG4gIGJvdW5kVG9MaW5lXG59IGZyb20gJy4vZ2VvbWV0cnkvYm91bmRzJ1xuXG5pbXBvcnQge1xuICBnZXRBbmdsZSxcbiAgbm9ybWFsaXplQW5nbGUsXG4gIGJvdW5kQW5nbGUsXG4gIGdldFBvaW50RnJvbVJhZGlhbFN5c3RlbVxufSBmcm9tICcuL2dlb21ldHJ5L2FuZ2xlcydcblxuZXhwb3J0IGNsYXNzIEJvdW5kIHtcbiAgY29uc3RydWN0b3IgKCkge31cblxuICBib3VuZChwb2ludCwgX3NpemUpIHtcbiAgICByZXR1cm4gcG9pbnRcbiAgfVxuXG4gIHJlZnJlc2ggKCkge31cblxuICBzdGF0aWMgYm91bmRpbmcoKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgdGhpcyguLi5hcmd1bWVudHMpXG4gICAgcmV0dXJuIGluc3RhbmNlLmJvdW5kLmJpbmQoaW5zdGFuY2UpXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9SZWN0YW5nbGUgZXh0ZW5kcyBCb3VuZCB7XG4gIGNvbnN0cnVjdG9yKHJlY3RhbmdsZSkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnJlY3RhbmdsZSA9IHJlY3RhbmdsZVxuICB9XG5cbiAgYm91bmQocG9pbnQsIHNpemUpIHtcbiAgICBjb25zdCBjYWxjUG9pbnQgPSBwb2ludC5jbG9uZSgpXG4gICAgY29uc3QgcmVjdFAyID0gdGhpcy5yZWN0YW5nbGUuZ2V0UDMoKVxuXG4gICAgaWYgKHRoaXMucmVjdGFuZ2xlLnBvc2l0aW9uLnggPiBjYWxjUG9pbnQueCkge1xuICAgICAgKGNhbGNQb2ludC54ID0gdGhpcy5yZWN0YW5nbGUucG9zaXRpb24ueClcbiAgICB9XG4gICAgaWYgKHRoaXMucmVjdGFuZ2xlLnBvc2l0aW9uLnkgPiBjYWxjUG9pbnQueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSB0aGlzLnJlY3RhbmdsZS5wb3NpdGlvbi55XG4gICAgfVxuICAgIGlmIChyZWN0UDIueCA8IGNhbGNQb2ludC54ICsgc2l6ZS54KSB7XG4gICAgICBjYWxjUG9pbnQueCA9IHJlY3RQMi54IC0gc2l6ZS54XG4gICAgfVxuICAgIGlmIChyZWN0UDIueSA8IGNhbGNQb2ludC55ICsgc2l6ZS55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHJlY3RQMi55IC0gc2l6ZS55XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhbGNQb2ludFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvRWxlbWVudCBleHRlbmRzIEJvdW5kVG9SZWN0YW5nbGUge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBwYXJlbnQpIHtcbiAgICBzdXBlcihSZWN0YW5nbGUuZnJvbUVsZW1lbnQoZWxlbWVudCwgcGFyZW50KSlcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnRcbiAgfVxuXG4gIHJlZnJlc2ggKCkge1xuICAgIHRoaXMucmVjdGFuZ2xlID0gUmVjdGFuZ2xlLmZyb21FbGVtZW50KHRoaXMuZWxlbWVudCwgdGhpcy5wYXJlbnQpXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9MaW5lWCBleHRlbmRzIEJvdW5kIHtcbiAgY29uc3RydWN0b3IoeCwgc3RhcnRZLCBlbmRZKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMueCA9IHhcbiAgICB0aGlzLnN0YXJ0WSA9IHN0YXJ0WVxuICAgIHRoaXMuZW5kWSA9IGVuZFlcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgY2FsY1BvaW50ID0gcG9pbnQuY2xvbmUoKVxuXG4gICAgY2FsY1BvaW50LnggPSB0aGlzLnhcbiAgICBpZiAodGhpcy5zdGFydFkgPiBjYWxjUG9pbnQueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSB0aGlzLnN0YXJ0WVxuICAgIH1cbiAgICBpZiAodGhpcy5lbmRZIDwgY2FsY1BvaW50LnkgKyBzaXplLnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gdGhpcy5lbmRZIC0gc2l6ZS55XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhbGNQb2ludFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvTGluZVkgZXh0ZW5kcyBCb3VuZCB7XG4gIGNvbnN0cnVjdG9yKHksIHN0YXJ0WCwgZW5kWCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnkgPSB5XG4gICAgdGhpcy5zdGFydFggPSBzdGFydFhcbiAgICB0aGlzLmVuZFggPSBlbmRYXG4gIH1cblxuICBib3VuZChwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IGNhbGNQb2ludCA9IHBvaW50LmNsb25lKClcbiAgICBjYWxjUG9pbnQueSA9IHRoaXMueVxuICAgIGlmICh0aGlzLnN0YXJ0WCA+IGNhbGNQb2ludC54KSB7XG4gICAgICBjYWxjUG9pbnQueCA9IHRoaXMuc3RhcnRYXG4gICAgfVxuICAgIGlmICh0aGlzLmVuZFggPCBjYWxjUG9pbnQueCArIHNpemUueCkge1xuICAgICAgY2FsY1BvaW50LnggPSB0aGlzLmVuZFggLSBzaXplLnhcbiAgICB9XG4gICAgcmV0dXJuIGNhbGNQb2ludFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvTGluZSBleHRlbmRzIEJvdW5kIHtcbiAgY29uc3RydWN0b3Ioc3RhcnRQb2ludCwgZW5kUG9pbnQpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5zdGFydFBvaW50ID0gc3RhcnRQb2ludFxuICAgIHRoaXMuZW5kUG9pbnQgPSBlbmRQb2ludFxuICAgIGNvbnN0IGFscGhhID0gTWF0aC5hdGFuMihlbmRQb2ludC55IC0gc3RhcnRQb2ludC55LCBlbmRQb2ludC54IC0gc3RhcnRQb2ludC54KVxuICAgIGNvbnN0IGJldGEgPSBhbHBoYSArIE1hdGguUEkgLyAyXG4gICAgdGhpcy5zb21lSyA9IDEwXG4gICAgdGhpcy5jb3NCZXRhID0gTWF0aC5jb3MoYmV0YSlcbiAgICB0aGlzLnNpbkJldGEgPSBNYXRoLnNpbihiZXRhKVxuICB9XG5cbiAgYm91bmQocG9pbnQsIHNpemUpIHtcbiAgICBjb25zdCBwb2ludDIgPSBuZXcgUG9pbnQoXG4gICAgICBwb2ludC54ICsgdGhpcy5zb21lSyAqIHRoaXMuY29zQmV0YSxcbiAgICAgIHBvaW50LnkgKyB0aGlzLnNvbWVLICogdGhpcy5zaW5CZXRhXG4gICAgKVxuXG4gICAgY29uc3QgbmV3RW5kUG9pbnQgPSBnZXRQb2ludE9uTGluZUJ5TGVuZ2h0KHRoaXMuZW5kUG9pbnQsIHRoaXMuc3RhcnRQb2ludCwgc2l6ZS54KVxuICAgIGNvbnN0IHBvaW50Q3Jvc3NpbmcgPSBkaXJlY3RDcm9zc2luZyh0aGlzLnN0YXJ0UG9pbnQsIHRoaXMuZW5kUG9pbnQsIHBvaW50LCBwb2ludDIpXG5cbiAgICByZXR1cm4gYm91bmRUb0xpbmUodGhpcy5zdGFydFBvaW50LCBuZXdFbmRQb2ludCwgcG9pbnRDcm9zc2luZylcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb0NpcmNsZSBleHRlbmRzIEJvdW5kIHtcbiAgY29uc3RydWN0b3IoY2VudGVyLCByYWRpdXMpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5jZW50ZXIgPSBjZW50ZXJcbiAgICB0aGlzLnJhZGl1cyA9IHJhZGl1c1xuICB9XG5cbiAgYm91bmQocG9pbnQsIF9zaXplKSB7XG4gICAgcmV0dXJuIGdldFBvaW50T25MaW5lQnlMZW5naHQodGhpcy5jZW50ZXIsIHBvaW50LCB0aGlzLnJhZGl1cylcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb0FyYyBleHRlbmRzIEJvdW5kVG9DaXJjbGUge1xuICBjb25zdHJ1Y3RvcihjZW50ZXIsIHJhZGl1cywgc3RhcnRBbmdsZSwgZW5kQW5nbGUpIHtcbiAgICBzdXBlcihjZW50ZXIsIHJhZGl1cylcbiAgICB0aGlzLl9zdGFydEFuZ2xlID0gc3RhcnRBbmdsZVxuICAgIHRoaXMuX2VuZEFuZ2xlID0gZW5kQW5nbGVcbiAgfVxuXG4gIHN0YXJ0QW5nbGUoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGlzLl9zdGFydEFuZ2xlID09PSAnZnVuY3Rpb24nID8gdGhpcy5fc3RhcnRBbmdsZSgpIDogdGhpcy5fc3RhcnRBbmdsZVxuICB9XG5cbiAgZW5kQW5nbGUoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGlzLl9lbmRBbmdsZSA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMuX2VuZEFuZ2xlKCkgOiB0aGlzLl9lbmRBbmdsZVxuICB9XG5cbiAgYm91bmQocG9pbnQsIF9zaXplKSB7XG4gICAgbGV0IGFuZ2xlID0gZ2V0QW5nbGUodGhpcy5jZW50ZXIsIHBvaW50KVxuICAgIGFuZ2xlID0gbm9ybWFsaXplQW5nbGUoYW5nbGUpXG4gICAgYW5nbGUgPSBib3VuZEFuZ2xlKHRoaXMuc3RhcnRBbmdsZSgpLCB0aGlzLmVuZEFuZ2xlKCksIGFuZ2xlKVxuICAgIHJldHVybiBnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oYW5nbGUsIHRoaXMucmFkaXVzLCB0aGlzLmNlbnRlcilcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oYXJyYXksIHZhbCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGFycmF5W2ldID09PSB2YWwpIHtcbiAgICAgIGFycmF5LnNwbGljZShpLCAxKVxuICAgICAgaS0tXG4gICAgfVxuICB9XG4gIHJldHVybiBhcnJheVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmFuZ2Uoc3RhcnQsIHN0b3AsIHN0ZXApIHtcbiAgY29uc3QgcmVzdWx0ID0gW11cbiAgaWYgKHR5cGVvZiBzdG9wID09PSAndW5kZWZpbmVkJykge1xuICAgIHN0b3AgPSBzdGFydFxuICAgIHN0YXJ0ID0gMFxuICB9XG4gIGlmICh0eXBlb2Ygc3RlcCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBzdGVwID0gMVxuICB9XG4gIGlmICgoc3RlcCA+IDAgJiYgc3RhcnQgPj0gc3RvcCkgfHwgKHN0ZXAgPCAwICYmIHN0YXJ0IDw9IHN0b3ApKSB7XG4gICAgcmV0dXJuIFtdXG4gIH1cbiAgZm9yIChsZXQgaSA9IHN0YXJ0OyBzdGVwID4gMCA/IGkgPCBzdG9wIDogaSA+IHN0b3A7IGkgKz0gc3RlcCkge1xuICAgIHJlc3VsdC5wdXNoKGkpXG4gIH1cbiAgcmV0dXJuIHJlc3VsdFxufVxuIiwiaW1wb3J0IFBvaW50IGZyb20gJy4vZ2VvbWV0cnkvcG9pbnQnXG5pbXBvcnQgeyBhZGRQb2ludFRvQm91bmRQb2ludHMgfSBmcm9tICcuL2dlb21ldHJ5L2JvdW5kcydcblxuaW1wb3J0IHtcbiAgaW5kZXhPZk5lYXJlc3RQb2ludCxcbiAgZ2V0RGlzdGFuY2Vcbn0gZnJvbSAnLi9nZW9tZXRyeS9kaXN0YW5jZXMnXG5cbmNsYXNzIEJhc2ljU3RyYXRlZ3kge1xuICBjb25zdHJ1Y3RvcihyZWN0YW5nbGUsIG9wdGlvbnM9e30pIHtcbiAgICB0aGlzLnJlY3RhbmdsZSA9IHJlY3RhbmdsZVxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNcbiAgfVxuXG4gIGdldCBib3VuZFJlY3QgKCkge1xuICAgIHJldHVybiB0eXBlb2YgdGhpcy5yZWN0YW5nbGUgPT09ICdmdW5jdGlvbicgPyB0aGlzLnJlY3RhbmdsZSgpIDogdGhpcy5yZWN0YW5nbGVcbiAgfVxufVxuXG5jbGFzcyBOb3RDcm9zc2luZ1N0cmF0ZWd5IGV4dGVuZHMgQmFzaWNTdHJhdGVneSB7XG4gIHBvc2l0aW9uaW5nIChyZWN0YW5nbGVMaXN0LCBpbmRleGVzT2ZOZXdzKSB7XG4gICAgY29uc3Qgc3RhdGljUmVjdGFuZ2xlSW5kZXhlcyA9IHJlY3RhbmdsZUxpc3QucmVkdWNlKChpbmRleGVzLCBfcmVjdCwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChpbmRleGVzT2ZOZXdzLmluZGV4T2YoaW5kZXgpID09PSAtMSkge1xuICAgICAgICBpbmRleGVzLnB1c2goaW5kZXgpXG4gICAgICB9XG4gICAgICByZXR1cm4gaW5kZXhlc1xuICAgIH0sIFtdKVxuXG4gICAgaW5kZXhlc09mTmV3cy5mb3JFYWNoKChpbmRleCkgPT4ge1xuICAgICAgbGV0IHJlY3QgPSByZWN0YW5nbGVMaXN0W2luZGV4XVxuICAgICAgbGV0IHJlbW92YWJsZSA9IGZhbHNlXG5cbiAgICAgIHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMuZm9yRWFjaCgoaW5kZXhPZlN0YXRpYykgPT4ge1xuICAgICAgICBjb25zdCBzdGF0aWNSZWN0ID0gcmVjdGFuZ2xlTGlzdFtpbmRleE9mU3RhdGljXVxuICAgICAgICByZWN0ID0gc3RhdGljUmVjdC5tb3ZlVG9Cb3VuZChyZWN0KVxuICAgICAgfSlcblxuICAgICAgcmVtb3ZhYmxlID0gc3RhdGljUmVjdGFuZ2xlSW5kZXhlcy5zb21lKChpbmRleE9mU3RhdGljKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YXRpY1JlY3QgPSByZWN0YW5nbGVMaXN0W2luZGV4T2ZTdGF0aWNdXG4gICAgICAgIHJldHVybiAgISFzdGF0aWNSZWN0LmFuZChyZWN0KVxuICAgICAgfSkgfHwgcmVjdC5hbmQodGhpcy5ib3VuZFJlY3QpLmdldFNxdWFyZSgpICE9PSByZWN0LmdldFNxdWFyZSgpXG5cbiAgICAgIGlmIChyZW1vdmFibGUpIHtcbiAgICAgICAgcmVjdC5yZW1vdmFibGUgPSB0cnVlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0aWNSZWN0YW5nbGVJbmRleGVzLnB1c2goaW5kZXgpXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcmVjdGFuZ2xlTGlzdFxuICB9XG5cbiAgc29ydGluZyhvZGxEcmFnZ2FibGVzTGlzdCwgbmV3RHJhZ2dhYmxlcywgaW5kZXhPZk5ld3MpIHtcbiAgICBjb25zdCBkcmFnZ2FibGVzID0gb2RsRHJhZ2dhYmxlc0xpc3QuY29uY2F0KG5ld0RyYWdnYWJsZXMpXG4gICAgbmV3RHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGluZGV4T2ZOZXdzLnB1c2goZHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkpXG4gICAgfSlcbiAgICByZXR1cm4gZHJhZ2dhYmxlc1xuICB9XG59XG5cbmNsYXNzIEZsb2F0TGVmdFN0cmF0ZWd5IGV4dGVuZHMgQmFzaWNTdHJhdGVneSB7XG4gIGNvbnN0cnVjdG9yKHJlY3RhbmdsZSwgb3B0aW9ucz17fSkge1xuICAgIHN1cGVyKHJlY3RhbmdsZSwgb3B0aW9ucylcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHJlbW92YWJsZTogdHJ1ZVxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0aGlzLnJhZGl1cyA9IG9wdGlvbnMucmFkaXVzIHx8IDgwXG5cbiAgICB0aGlzLnBhZGRpbmdUb3BMZWZ0ID0gb3B0aW9ucy5wYWRkaW5nVG9wTGVmdCB8fCBuZXcgUG9pbnQoMCwgMClcbiAgICB0aGlzLnBhZGRpbmdCb3R0b21SaWdodCA9IG9wdGlvbnMucGFkZGluZ0JvdHRvbVJpZ2h0IHx8IG5ldyBQb2ludCgwLCAwKVxuICAgIHRoaXMueUdhcEJldHdlZW5EcmFnZ2FibGVzID0gb3B0aW9ucy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgfHwgMFxuXG4gICAgdGhpcy5nZXREaXN0YW5jZSA9IG9wdGlvbnMuZ2V0RGlzdGFuY2UgfHwgZ2V0RGlzdGFuY2VcbiAgICB0aGlzLmdldFBvc2l0aW9uID0gb3B0aW9ucy5nZXRQb3NpdGlvbiB8fCAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnBvc2l0aW9uKVxuICB9XG5cbiAgcG9zaXRpb25pbmcocmVjdGFuZ2xlTGlzdCwgX2luZGV4ZXNPZk5ld3MpIHtcbiAgICBjb25zdCBib3VuZFJlY3QgPSB0aGlzLmJvdW5kUmVjdFxuICAgIGNvbnN0IHJlY3RQMiA9IGJvdW5kUmVjdC5nZXRQMigpXG4gICAgbGV0IGJvdW5kYXJ5UG9pbnRzID0gW2JvdW5kUmVjdC5wb3NpdGlvbl1cblxuICAgIHJlY3RhbmdsZUxpc3QuZm9yRWFjaCgocmVjdCwgcmVjdEluZGV4KSA9PiB7XG4gICAgICBsZXQgcG9zaXRpb24sIGlzVmFsaWQgPSBmYWxzZVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib3VuZGFyeVBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBwb3NpdGlvbiA9IG5ldyBQb2ludChcbiAgICAgICAgICBib3VuZGFyeVBvaW50c1tpXS54ICsgdGhpcy5wYWRkaW5nVG9wTGVmdC54LFxuICAgICAgICAgIGkgPiAwID8gKGJvdW5kYXJ5UG9pbnRzW2kgLSAxXS55ICsgdGhpcy55R2FwQmV0d2VlbkRyYWdnYWJsZXMpIDogKGJvdW5kUmVjdC5wb3NpdGlvbi55ICsgdGhpcy5wYWRkaW5nVG9wTGVmdC55KVxuICAgICAgICApXG5cbiAgICAgICAgaXNWYWxpZCA9IChwb3NpdGlvbi54ICsgcmVjdC5zaXplLnggPCByZWN0UDIueClcblxuICAgICAgICBpZiAoaXNWYWxpZCkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICAgIHBvc2l0aW9uID0gbmV3IFBvaW50KFxuICAgICAgICAgIGJvdW5kUmVjdC5wb3NpdGlvbi54ICsgdGhpcy5wYWRkaW5nVG9wTGVmdC54LFxuICAgICAgICAgIGJvdW5kYXJ5UG9pbnRzW2JvdW5kYXJ5UG9pbnRzLmxlbmd0aCAtIDFdLnkgKyAocmVjdEluZGV4ID4gMCA/IHRoaXMueUdhcEJldHdlZW5EcmFnZ2FibGVzIDogdGhpcy5wYWRkaW5nVG9wTGVmdC55KVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHJlY3QucG9zaXRpb24gPSBwb3NpdGlvblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZW1vdmFibGUgJiYgcmVjdC5nZXRQMygpLnkgPiBib3VuZFJlY3QuZ2V0UDMoKS55KSB7XG4gICAgICAgIHJlY3QucmVtb3ZhYmxlID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBib3VuZGFyeVBvaW50cyA9IGFkZFBvaW50VG9Cb3VuZFBvaW50cyhib3VuZGFyeVBvaW50cywgcmVjdC5nZXRQMygpLmFkZCh0aGlzLnBhZGRpbmdCb3R0b21SaWdodCkpXG4gICAgfSlcbiAgICByZXR1cm4gcmVjdGFuZ2xlTGlzdFxuICB9XG5cbiAgc29ydGluZyhvZGxEcmFnZ2FibGVzTGlzdCwgbmV3RHJhZ2dhYmxlcywgaW5kZXhPZk5ld3MpIHtcbiAgICBjb25zdCBuZXdMaXN0ID0gb2RsRHJhZ2dhYmxlc0xpc3QuY29uY2F0KClcbiAgICBjb25zdCBsaXN0T2xkUG9zaXRpb24gPSBvZGxEcmFnZ2FibGVzTGlzdC5tYXAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLmdldFBvc2l0aW9uKCkpXG4gICAgbmV3RHJhZ2dhYmxlcy5mb3JFYWNoKChuZXdEcmFnZ2FibGUpID0+IHtcbiAgICAgIGxldCBpbmRleCA9IGluZGV4T2ZOZWFyZXN0UG9pbnQobGlzdE9sZFBvc2l0aW9uLCB0aGlzLmdldFBvc2l0aW9uKG5ld0RyYWdnYWJsZSksIHRoaXMucmFkaXVzLCB0aGlzLmdldERpc3RhbmNlKVxuICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICBpbmRleCA9IG5ld0xpc3QubGVuZ3RoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbmRleCA9IG5ld0xpc3QuaW5kZXhPZihvZGxEcmFnZ2FibGVzTGlzdFtpbmRleF0pXG4gICAgICB9XG4gICAgICBuZXdMaXN0LnNwbGljZShpbmRleCwgMCwgbmV3RHJhZ2dhYmxlKVxuICAgIH0pXG4gICAgbmV3RHJhZ2dhYmxlcy5mb3JFYWNoKChuZXdEcmFnZ2FibGUpID0+IHtcbiAgICAgIGluZGV4T2ZOZXdzLnB1c2gobmV3TGlzdC5pbmRleE9mKG5ld0RyYWdnYWJsZSkpXG4gICAgfSlcbiAgICByZXR1cm4gbmV3TGlzdFxuICB9XG59XG5cbmNsYXNzIEZsb2F0UmlnaHRTdHJhdGVneSBleHRlbmRzIEZsb2F0TGVmdFN0cmF0ZWd5IHtcbiAgY29uc3RydWN0b3IocmVjdGFuZ2xlLCBvcHRpb25zPXt9KSB7XG4gICAgc3VwZXIocmVjdGFuZ2xlLCBvcHRpb25zKVxuXG4gICAgdGhpcy5wYWRkaW5nVG9wUmlnaHQgPSBvcHRpb25zLnBhZGRpbmdUb3BSaWdodCB8fCBuZXcgUG9pbnQoNSwgNSlcbiAgICB0aGlzLnBhZGRpbmdCb3R0b21MZWZ0ID0gb3B0aW9ucy5wYWRkaW5nQm90dG9tTGVmdCB8fCBuZXcgUG9pbnQoMCwgMClcbiAgICB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyA9IG9wdGlvbnMueUdhcEJldHdlZW5EcmFnZ2FibGVzIHx8IDBcblxuICAgIHRoaXMucGFkZGluZ0JvdHRvbU5lZ0xlZnQgPSBuZXcgUG9pbnQoLXRoaXMucGFkZGluZ0JvdHRvbUxlZnQueCwgdGhpcy5wYWRkaW5nQm90dG9tTGVmdC55KVxuICB9XG5cbiAgcG9zaXRpb25pbmcocmVjdGFuZ2xlTGlzdCwgX2luZGV4ZXNPZk5ld3MpIHtcbiAgICBjb25zdCBib3VuZFJlY3QgPSB0aGlzLmJvdW5kUmVjdFxuICAgIGxldCBib3VuZGFyeVBvaW50cyA9IFtib3VuZFJlY3QuZ2V0UDIoKV1cblxuICAgIHJlY3RhbmdsZUxpc3QuZm9yRWFjaCgocmVjdCwgcmVjdEluZGV4KSA9PiB7XG4gICAgICBsZXQgcG9zaXRpb24sIGlzVmFsaWQgPSBmYWxzZVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib3VuZGFyeVBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBwb3NpdGlvbiA9IG5ldyBQb2ludChcbiAgICAgICAgICBib3VuZGFyeVBvaW50c1tpXS54IC0gcmVjdC5zaXplLnggLSB0aGlzLnBhZGRpbmdUb3BSaWdodC54LFxuICAgICAgICAgIGkgPiAwID8gKGJvdW5kYXJ5UG9pbnRzW2kgLSAxXS55ICsgdGhpcy55R2FwQmV0d2VlbkRyYWdnYWJsZXMpIDogKGJvdW5kUmVjdC5wb3NpdGlvbi55ICsgdGhpcy5wYWRkaW5nVG9wUmlnaHQueSlcbiAgICAgICAgKVxuXG4gICAgICAgIGlzVmFsaWQgPSAocG9zaXRpb24ueCA+IHJlY3QucG9zaXRpb24ueClcbiAgICAgICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgcG9zaXRpb24gPSBuZXcgUG9pbnQoXG4gICAgICAgICAgYm91bmRSZWN0LmdldFAyKCkueCAgLSByZWN0LnNpemUueCAtIHRoaXMucGFkZGluZ1RvcFJpZ2h0LngsXG4gICAgICAgICAgYm91bmRhcnlQb2ludHNbYm91bmRhcnlQb2ludHMubGVuZ3RoIC0gMV0ueSArIChyZWN0SW5kZXggPiAwID8gdGhpcy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgOiB0aGlzLnBhZGRpbmdUb3BSaWdodC55KVxuICAgICAgICApXG4gICAgICB9XG4gICAgICByZWN0LnBvc2l0aW9uID0gcG9zaXRpb25cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucmVtb3ZhYmxlICYmIHJlY3QuZ2V0UDQoKS55ID4gYm91bmRSZWN0LmdldFA0KCkueSkge1xuICAgICAgICByZWN0LnJlbW92YWJsZSA9IHRydWVcbiAgICAgIH1cbiAgICAgIGJvdW5kYXJ5UG9pbnRzID0gYWRkUG9pbnRUb0JvdW5kUG9pbnRzKGJvdW5kYXJ5UG9pbnRzLCByZWN0LmdldFA0KCkuYWRkKHRoaXMucGFkZGluZ0JvdHRvbU5lZ0xlZnQpLCB0cnVlKVxuICAgIH0pXG4gICAgcmV0dXJuIHJlY3RhbmdsZUxpc3RcbiAgfVxufVxuXG5leHBvcnQgeyBOb3RDcm9zc2luZ1N0cmF0ZWd5LCBGbG9hdExlZnRTdHJhdGVneSwgRmxvYXRSaWdodFN0cmF0ZWd5IH1cbiIsImltcG9ydCByYW5nZSBmcm9tICcuL3V0aWxzL3JhbmdlLmpzJ1xuaW1wb3J0IHJlbW92ZUl0ZW0gZnJvbSAnLi91dGlscy9yZW1vdmUtYXJyYXktaXRlbSdcbmltcG9ydCBnZXREZWZhdWx0UGFyZW50IGZyb20gJy4vdXRpbHMvZ2V0LWRlZmF1bHQtcGFyZW50J1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50RW1pdHRlcidcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSAnLi9nZW9tZXRyeS9yZWN0YW5nbGUnXG5pbXBvcnQgeyB0cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5IH0gZnJvbSAnLi9nZW9tZXRyeS9kaXN0YW5jZXMnXG5pbXBvcnQgeyBzY29wZXMsIGRlZmF1bHRTY29wZSB9IGZyb20gJy4vc2NvcGUnXG5cbmltcG9ydCB7IEZsb2F0TGVmdFN0cmF0ZWd5IH0gZnJvbSAnLi9wb3NpdGlvbmluZydcblxuY29uc3QgYWRkVG9EZWZhdWx0U2NvcGUgPSBmdW5jdGlvbih0YXJnZXQpIHtcbiAgZGVmYXVsdFNjb3BlLmFkZFRhcmdldCh0YXJnZXQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhcmdldCBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGRyYWdnYWJsZXMsIG9wdGlvbnMgPSB7fSkge1xuICAgIHN1cGVyKHVuZGVmaW5lZCwgb3B0aW9ucylcbiAgICBjb25zdCB0YXJnZXQgPSB0aGlzXG4gICAgY29uc3QgcGFyZW50ID0gb3B0aW9ucy5wYXJlbnQgfHwgZ2V0RGVmYXVsdFBhcmVudChlbGVtZW50KVxuXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICB0aW1lRW5kOiAyMDAsXG4gICAgICB0aW1lRXhjYW5nZTogNDAwLFxuICAgICAgcGFyZW50OiBwYXJlbnRcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGhpcy5wb3NpdGlvbmluZ1N0cmF0ZWd5ID0gb3B0aW9ucy5zdHJhdGVneSB8fCBuZXcgRmxvYXRMZWZ0U3RyYXRlZ3koXG4gICAgICB0aGlzLmdldFJlY3RhbmdsZS5iaW5kKHRoaXMpLFxuICAgICAge1xuICAgICAgICByYWRpdXM6IDgwLFxuICAgICAgICBnZXREaXN0YW5jZTogdHJhbnNmb3JtZWRTcGFjZURpc3RhbmNlRmFjdG9yeSh7IHg6IDEsIHk6IDQgfSksXG4gICAgICAgIHJlbW92YWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIClcblxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgICBkcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnRhcmdldHMucHVzaCh0YXJnZXQpKVxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZXNcblxuICAgIFRhcmdldC5lbWl0dGVyLmVtaXQoJ3RhcmdldDpjcmVhdGUnLCB0aGlzKVxuXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIHBvc2l0aW9uaW5nIChkcmFnZ2FibGVzLCBpbmRleGVzT2ZOZXcpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbmluZ1N0cmF0ZWd5LnBvc2l0aW9uaW5nKGRyYWdnYWJsZXMsIGluZGV4ZXNPZk5ldylcbiAgfVxuXG4gIHNvcnRpbmcgKG9sZERyYWdnYWJsZXMsIG5ld0RyYWdnYWJsZXMsIGluZGV4T2ZOZXdzKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25pbmdTdHJhdGVneS5zb3J0aW5nKG9sZERyYWdnYWJsZXMsIG5ld0RyYWdnYWJsZXMsIGluZGV4T2ZOZXdzKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBsZXQgcmVjdGFuZ2xlcywgaW5kZXhlc09mTmV3XG5cbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcyA9IHRoaXMuZHJhZ2dhYmxlcy5maWx0ZXIoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgbGV0IGVsZW1lbnQgPSBkcmFnZ2FibGUuZWxlbWVudC5wYXJlbnROb2RlXG4gICAgICB3aGlsZSAoZWxlbWVudCkge1xuICAgICAgICBpZiAoZWxlbWVudCA9PT0gdGhpcy5lbGVtZW50KSB7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlXG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9KVxuXG4gICAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmxlbmd0aCkge1xuICAgICAgaW5kZXhlc09mTmV3ID0gcmFuZ2UodGhpcy5pbm5lckRyYWdnYWJsZXMubGVuZ3RoKVxuICAgICAgcmVjdGFuZ2xlcyA9IHRoaXMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgICAgfSksIGluZGV4ZXNPZk5ldylcbiAgICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgaW5kZXhlc09mTmV3KVxuICAgICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB0aGlzLmVtaXQoJ3RhcmdldDphZGQnLCBkcmFnZ2FibGUpKVxuICAgIH1cbiAgfVxuXG4gIGdldFJlY3RhbmdsZSgpIHtcbiAgICByZXR1cm4gUmVjdGFuZ2xlLmZyb21FbGVtZW50KFxuICAgICAgdGhpcy5lbGVtZW50LFxuICAgICAgdGhpcy5vcHRpb25zLnBhcmVudCxcbiAgICAgIHRoaXMub3B0aW9ucy5pc0NvbnRlbnRCb3hTaXplLFxuICAgICAgdHJ1ZVxuICAgIClcbiAgfVxuXG4gIGNhdGNoRHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuY2F0Y2hEcmFnZ2FibGUpIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuY2F0Y2hEcmFnZ2FibGUodGhpcywgZHJhZ2dhYmxlKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0YXJnZXRSZWN0YW5nbGUgPSB0aGlzLmdldFJlY3RhbmdsZSgpXG4gICAgICBjb25zdCBkcmFnZ2FibGVTcXVhcmUgPSBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKCkuZ2V0U3F1YXJlKClcblxuICAgICAgcmV0dXJuIGRyYWdnYWJsZVNxdWFyZSA8IHRhcmdldFJlY3RhbmdsZS5nZXRTcXVhcmUoKVxuICAgICAgICAgICAgICAmJiB0YXJnZXRSZWN0YW5nbGUuaW5jbHVkZVBvaW50KGRyYWdnYWJsZS5nZXRDZW50ZXIoKSlcbiAgICB9XG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRSZWN0YW5nbGUoKS5wb3NpdGlvblxuICB9XG5cbiAgZ2V0U2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRSZWN0YW5nbGUoKS5zaXplXG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHNjb3Blcy5mb3JFYWNoKChzY29wZSkgPT4gcmVtb3ZlSXRlbShzY29wZS50YXJnZXRzLCB0aGlzKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgW10pXG4gICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBbXSwgMClcbiAgfVxuXG4gIG9uRW5kKGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IG5ld0RyYWdnYWJsZXNJbmRleCA9IFtdXG4gICAgY29uc3QgaW5jbHVkZVBvaW50ID0gdGhpcy5nZXRSZWN0YW5nbGUoKS5pbmNsdWRlUG9pbnQoZHJhZ2dhYmxlLmdldFBvc2l0aW9uKCkpXG5cbiAgICBpZiAoIWluY2x1ZGVQb2ludCkge1xuICAgICAgaWYgKHRoaXMuZ2V0UmVjdGFuZ2xlKCkuaW5jbHVkZVBvaW50KGRyYWdnYWJsZS5nZXRDZW50ZXIoKSkpIHtcbiAgICAgICAgZHJhZ2dhYmxlLnBvc2l0aW9uID0gZHJhZ2dhYmxlLmdldENlbnRlcigpLmNsb25lKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuZW1pdCgndGFyZ2V0OmJlZm9yZUFkZCcsIGRyYWdnYWJsZSlcblxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzID0gdGhpcy5zb3J0aW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLCBbZHJhZ2dhYmxlXSwgbmV3RHJhZ2dhYmxlc0luZGV4KVxuICAgIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgfSksIG5ld0RyYWdnYWJsZXNJbmRleClcblxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgbmV3RHJhZ2dhYmxlc0luZGV4KVxuICAgIGlmICh0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkgIT09IC0xKSB7XG4gICAgICB0aGlzLmFkZFJlbW92ZU9uTW92ZShkcmFnZ2FibGUpXG4gICAgfVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBzZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXcsIHRpbWUpIHtcbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5zbGljZSgwKS5mb3JFYWNoKChkcmFnZ2FibGUsIGkpID0+IHtcbiAgICAgIGNvbnN0IHJlY3QgPSByZWN0YW5nbGVzW2ldLFxuICAgICAgICB0aW1lRW5kID0gdGltZSB8fCB0aW1lID09PSAwID8gdGltZSA6IGluZGV4ZXNPZk5ldy5pbmRleE9mKGkpICE9PSAtMSA/IHRoaXMub3B0aW9ucy50aW1lRW5kIDogdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlXG5cbiAgICAgIGlmIChyZWN0LnJlbW92YWJsZSkge1xuICAgICAgICBkcmFnZ2FibGUubW92ZShkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uLCB0aW1lRW5kLCB0cnVlLCB0cnVlKVxuICAgICAgICByZW1vdmVJdGVtKHRoaXMuaW5uZXJEcmFnZ2FibGVzLCBkcmFnZ2FibGUpXG4gICAgICAgIHRoaXMuZW1pdCgndGFyZ2V0OnJlbW92ZScsIGRyYWdnYWJsZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRyYWdnYWJsZS5tb3ZlKHJlY3QucG9zaXRpb24sIHRpbWVFbmQsIHRydWUsIHRydWUpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGFkZChkcmFnZ2FibGUsIHRpbWUpIHtcbiAgICBjb25zdCBuZXdEcmFnZ2FibGVzSW5kZXggPSB0aGlzLmlubmVyRHJhZ2dhYmxlcy5sZW5ndGhcblxuICAgIHRoaXMuZW1pdCgndGFyZ2V0OmJlZm9yZUFkZCcsIGRyYWdnYWJsZSlcblxuICAgIHRoaXMucHVzaElubmVyRHJhZ2dhYmxlKGRyYWdnYWJsZSlcbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBuZXdEcmFnZ2FibGVzSW5kZXgsIGRyYWdnYWJsZSlcblxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgW25ld0RyYWdnYWJsZXNJbmRleF0sIHRpbWUgfHwgMClcbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMSkge1xuICAgICAgdGhpcy5hZGRSZW1vdmVPbk1vdmUoZHJhZ2dhYmxlKVxuICAgIH1cbiAgfVxuXG4gIHB1c2hJbm5lckRyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpPT09LTEpIHtcbiAgICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxuICAgIH1cbiAgfVxuXG4gIGFkZFJlbW92ZU9uTW92ZShkcmFnZ2FibGUpIHtcbiAgICBkcmFnZ2FibGUub24oJ2RyYWc6bW92ZScsIHRoaXMucmVtb3ZlSGFuZGxlciA9ICgpID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlKGRyYWdnYWJsZSlcbiAgICB9KVxuXG4gICAgdGhpcy5lbWl0KCd0YXJnZXQ6YWRkJywgZHJhZ2dhYmxlKVxuICB9XG5cbiAgcmVtb3ZlKGRyYWdnYWJsZSkge1xuICAgIGRyYWdnYWJsZS51bnN1YnNjcmliZSgnZHJhZzptb3ZlJywgdGhpcy5yZW1vdmVIYW5kbGVyKVxuXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSlcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5zcGxpY2UoaW5kZXgsIDEpXG5cbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBbXSlcblxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgW10pXG4gICAgdGhpcy5lbWl0KCd0YXJnZXQ6cmVtb3ZlJywgZHJhZ2dhYmxlKVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUubW92ZShkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uLCAwLCB0cnVlLCB0cnVlKVxuICAgICAgdGhpcy5lbWl0KCd0YXJnZXQ6cmVtb3ZlJywgZHJhZ2dhYmxlKVxuICAgIH0pXG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMgPSBbXVxuICB9XG5cbiAgZ2V0U29ydGVkRHJhZ2dhYmxlcygpIHtcbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5zbGljZSgpXG4gIH1cbn1cblxuVGFyZ2V0LmVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKFRhcmdldClcblRhcmdldC5lbWl0dGVyLm9uKCd0YXJnZXQ6Y3JlYXRlJywgYWRkVG9EZWZhdWx0U2NvcGUpXG4iLCJpbXBvcnQgcmVtb3ZlSXRlbSBmcm9tICcuL3V0aWxzL3JlbW92ZS1hcnJheS1pdGVtJ1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50RW1pdHRlcidcbmltcG9ydCBEcmFnZ2FibGUgZnJvbSAnLi9kcmFnZ2FibGUnXG5pbXBvcnQgVGFyZ2V0IGZyb20gJy4vdGFyZ2V0J1xuXG5jb25zdCBzY29wZXMgPSBbXVxuXG5jbGFzcyBTY29wZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKGRyYWdnYWJsZXMsIHRhcmdldHMsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcih1bmRlZmluZWQsIG9wdGlvbnMpXG4gICAgc2NvcGVzLmZvckVhY2goKHNjb3BlKSA9PiB7XG4gICAgICBpZiAoZHJhZ2dhYmxlcykge1xuICAgICAgICBkcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgICAgIHJlbW92ZUl0ZW0oc2NvcGUuZHJhZ2dhYmxlcywgZHJhZ2dhYmxlKVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICBpZiAodGFyZ2V0cykge1xuICAgICAgICB0YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4ge1xuICAgICAgICAgIHJlbW92ZUl0ZW0oc2NvcGUudGFyZ2V0cywgdGFyZ2V0KVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLmRyYWdnYWJsZXMgPSBkcmFnZ2FibGVzIHx8IFtdXG4gICAgdGhpcy50YXJnZXRzID0gdGFyZ2V0cyB8fCBbXVxuICAgIHNjb3Blcy5wdXNoKHRoaXMpXG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgdGltZUVuZDogKG9wdGlvbnMudGltZUVuZCkgfHwgNDAwXG4gICAgfVxuXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLmRyYWdFbmRBY3Rpb24gPSAoKSA9PiB0aGlzLm9uRW5kKGRyYWdnYWJsZSlcbiAgICB9KVxuICB9XG5cbiAgYWRkRHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5wdXNoKGRyYWdnYWJsZSlcbiAgICBkcmFnZ2FibGUuZHJhZ0VuZEFjdGlvbiA9ICgpID0+IHRoaXMub25FbmQoZHJhZ2dhYmxlKVxuICB9XG5cbiAgYWRkVGFyZ2V0KHRhcmdldCkge1xuICAgIHRoaXMudGFyZ2V0cy5wdXNoKHRhcmdldClcbiAgfVxuXG4gIG9uRW5kKGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IHNob3RUYXJnZXRzID0gdGhpcy50YXJnZXRzLmZpbHRlcigodGFyZ2V0KSA9PiB7XG4gICAgICByZXR1cm4gdGFyZ2V0LmRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMVxuICAgIH0pLmZpbHRlcigodGFyZ2V0KSA9PiB7XG4gICAgICByZXR1cm4gdGFyZ2V0LmNhdGNoRHJhZ2dhYmxlKGRyYWdnYWJsZSlcbiAgICB9KS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICByZXR1cm4gYS5nZXRSZWN0YW5nbGUoKS5nZXRTcXVhcmUoKSAtIGIuZ2V0UmVjdGFuZ2xlKCkuZ2V0U3F1YXJlKClcbiAgICB9KVxuXG4gICAgaWYgKHNob3RUYXJnZXRzLmxlbmd0aCkge1xuICAgICAgc2hvdFRhcmdldHNbMF0ub25FbmQoZHJhZ2dhYmxlKVxuICAgIH0gZWxzZSBpZiAoZHJhZ2dhYmxlLnRhcmdldHMubGVuZ3RoKSB7XG4gICAgICBkcmFnZ2FibGUucGluUG9zaXRpb24oZHJhZ2dhYmxlLmluaXRpYWxQb3NpdGlvbiwgdGhpcy5vcHRpb25zLnRpbWVFbmQpXG4gICAgfVxuXG4gICAgdGhpcy5lbWl0KCdzY29wZTpjaGFuZ2UnKVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy50YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4gdGFyZ2V0LnJlc2V0KCkpXG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5yZWZyZXNoKCkpXG4gICAgdGhpcy50YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4gdGFyZ2V0LnJlZnJlc2goKSlcbiAgfVxuXG4gIGdldCBwb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0cy5tYXAoKHRhcmdldCkgPT4ge1xuICAgICAgcmV0dXJuIHRhcmdldC5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHRoaXMuZHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkpXG4gICAgfSlcbiAgfVxuXG4gIHNldCBwb3NpdGlvbnMocG9zaXRpb25zKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9ICd3cm9uZyBhcnJheSBsZW5ndGgnXG4gICAgaWYgKHBvc2l0aW9ucy5sZW5ndGggPT09IHRoaXMudGFyZ2V0cy5sZW5ndGgpIHtcbiAgICAgIHRoaXMudGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHRhcmdldC5yZXNldCgpKVxuXG4gICAgICBwb3NpdGlvbnMuZm9yRWFjaCgodGFyZ2V0SW5kZXhlcywgaSkgPT4ge1xuICAgICAgICB0YXJnZXRJbmRleGVzLmZvckVhY2goKGluZGV4KSA9PiB7XG4gICAgICAgICAgdGhpcy50YXJnZXRzW2ldLmFkZCh0aGlzLmRyYWdnYWJsZXNbaW5kZXhdKVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbWVzc2FnZVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBkZWZhdWx0U2NvcGUgPSBuZXcgU2NvcGUoKVxuXG5mdW5jdGlvbiBzY29wZShmbikge1xuICBjb25zdCBjdXJyZW50U2NvcGUgPSBuZXcgU2NvcGUoKVxuXG4gIGNvbnN0IGFkZERyYWdnYWJsZVRvU2NvcGUgPSBmdW5jdGlvbihkcmFnZ2FibGUpIHtcbiAgICBjdXJyZW50U2NvcGUuYWRkRHJhZ2dhYmxlKGRyYWdnYWJsZSlcbiAgICBEcmFnZ2FibGUuZW1pdHRlci5pbnRlcnJ1cHQoKVxuICB9XG5cbiAgY29uc3QgYWRkVGFyZ2V0VG9TY29wZSA9IGZ1bmN0aW9uKHRhcmdldCkge1xuICAgIGN1cnJlbnRTY29wZS5hZGRUYXJnZXQodGFyZ2V0KVxuICAgIERyYWdnYWJsZS5lbWl0dGVyLmludGVycnVwdCgpXG4gIH1cblxuICBEcmFnZ2FibGUuZW1pdHRlci5wcmVwZW5kT24oJ2RyYWdnYWJsZTpjcmVhdGUnLCBhZGREcmFnZ2FibGVUb1Njb3BlKVxuICBUYXJnZXQuZW1pdHRlci5wcmVwZW5kT24oJ3RhcmdldDpjcmVhdGUnLCBhZGRUYXJnZXRUb1Njb3BlKVxuICBmbi5jYWxsKClcbiAgRHJhZ2dhYmxlLmVtaXR0ZXIudW5zdWJzY3JpYmUoJ2RyYWdnYWJsZTpjcmVhdGUnLCBhZGREcmFnZ2FibGVUb1Njb3BlKVxuICBUYXJnZXQuZW1pdHRlci51bnN1YnNjcmliZSgndGFyZ2V0OmNyZWF0ZScsIGFkZFRhcmdldFRvU2NvcGUpXG4gIHJldHVybiBjdXJyZW50U2NvcGVcbn1cblxuZXhwb3J0IHsgc2NvcGVzLCBkZWZhdWx0U2NvcGUsIFNjb3BlLCBzY29wZSB9XG4iLCJmdW5jdGlvbiBjaGVja1N1cHBvcnRQYXNzaXZlRXZlbnRzKCkge1xuICBsZXQgcGFzc2l2ZVN1cHBvcnRlZCA9IGZhbHNlXG5cbiAgdHJ5IHtcbiAgICBjb25zdCBvcHRpb25zID0gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAncGFzc2l2ZScsIHtcbiAgICAgIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIChwYXNzaXZlU3VwcG9ydGVkID0gdHJ1ZSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3QnLCBvcHRpb25zLCBvcHRpb25zKVxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0ZXN0Jywgb3B0aW9ucywgb3B0aW9ucylcbiAgfSBjYXRjaCAoX2Vycikge1xuICAgIHBhc3NpdmVTdXBwb3J0ZWQgPSBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIHBhc3NpdmVTdXBwb3J0ZWRcbn1cblxuZXhwb3J0IGNvbnN0IGlzU3VwcG9ydFBhc3NpdmVFdmVudHMgPSBjaGVja1N1cHBvcnRQYXNzaXZlRXZlbnRzKClcblxuZnVuY3Rpb24gZXZlbnRPcHRpb25zKG9wdGlvbnMsIGZhbGxiYWNrID0gZmFsc2UpIHtcbiAgcmV0dXJuIGlzU3VwcG9ydFBhc3NpdmVFdmVudHMgPyBvcHRpb25zIDogZmFsbGJhY2tcbn1cblxuZXhwb3J0IHsgZXZlbnRPcHRpb25zIH1cblxuZXhwb3J0IGRlZmF1bHQgaXNTdXBwb3J0UGFzc2l2ZUV2ZW50c1xuIiwiaW1wb3J0IHsgYWRkQ2xhc3MsIHJlbW92ZUNsYXNzIH0gZnJvbSAnLi91dGlscy9jbGFzc2VzJ1xuaW1wb3J0IGdldERlZmF1bHRQYXJlbnQgZnJvbSAnLi91dGlscy9nZXQtZGVmYXVsdC1wYXJlbnQnXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnRFbWl0dGVyJ1xuaW1wb3J0IGdldFN0eWxlUHJvcGVydHkgZnJvbSAnZGVzYW5kcm8tZ2V0LXN0eWxlLXByb3BlcnR5J1xuaW1wb3J0IHsgQm91bmRUb0VsZW1lbnQgfSBmcm9tICcuL2JvdW5kaW5nJ1xuaW1wb3J0IFBvaW50IGZyb20gJy4vZ2VvbWV0cnkvcG9pbnQnXG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gJy4vZ2VvbWV0cnkvcmVjdGFuZ2xlJ1xuaW1wb3J0IHsgZGVmYXVsdFNjb3BlIH0gZnJvbSAnLi9zY29wZSdcbmltcG9ydCBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzIGZyb20gJy4vdXRpbHMvaXMtc3VwcG9ydC1wYXNzaXZlLWV2ZW50cydcblxuY29uc3QgaXNUb3VjaCA9ICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvd1xuY29uc3QgbW91c2VFdmVudHMgPSB7XG4gIHN0YXJ0OiAnbW91c2Vkb3duJyxcbiAgbW92ZTogJ21vdXNlbW92ZScsXG4gIGVuZDogJ21vdXNldXAnXG59XG5jb25zdCB0b3VjaEV2ZW50cyA9IHtcbiAgc3RhcnQ6ICd0b3VjaHN0YXJ0JyxcbiAgbW92ZTogJ3RvdWNobW92ZScsXG4gIGVuZDogJ3RvdWNoZW5kJ1xufVxuY29uc3QgZHJhZ2dhYmxlcyA9IFtdXG5jb25zdCB0cmFuc2Zvcm1Qcm9wZXJ0eSA9IGdldFN0eWxlUHJvcGVydHkoJ3RyYW5zZm9ybScpXG5jb25zdCB0cmFuc2l0aW9uUHJvcGVydHkgPSBnZXRTdHlsZVByb3BlcnR5KCd0cmFuc2l0aW9uJylcblxuZnVuY3Rpb24gZ2V0VG91Y2hCeUlEKGVsZW1lbnQsIHRvdWNoSWQpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50LmNoYW5nZWRUb3VjaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGVsZW1lbnQuY2hhbmdlZFRvdWNoZXNbaV0uaWRlbnRpZmllciA9PT0gdG91Y2hJZCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQuY2hhbmdlZFRvdWNoZXNbaV1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmZ1bmN0aW9uIHByZXZlbnREb3VibGVJbml0KGRyYWdnYWJsZSkge1xuICBjb25zdCBtZXNzYWdlID0gXCJmb3IgdGhpcyBlbGVtZW50IERyYWdlZS5EcmFnZ2FibGUgaXMgYWxyZWFkeSBleGlzdCwgZG9uJ3QgY3JlYXRlIGl0IHR3aWNlIFwiXG4gIGlmIChkcmFnZ2FibGVzLnNvbWUoKGV4aXN0aW5nKSA9PiBkcmFnZ2FibGUuZWxlbWVudCA9PT0gZXhpc3RpbmcuZWxlbWVudCkpIHtcbiAgICB0aHJvdyBtZXNzYWdlXG4gIH1cbiAgZHJhZ2dhYmxlcy5wdXNoKGRyYWdnYWJsZSlcbn1cblxuZnVuY3Rpb24gYWRkVG9EZWZhdWx0U2NvcGUoZHJhZ2dhYmxlKSB7XG4gIGRlZmF1bHRTY29wZS5hZGREcmFnZ2FibGUoZHJhZ2dhYmxlKVxufVxuXG5mdW5jdGlvbiBjb3B5U3R5bGVzKHNvdXJjZSwgZGVzdGluYXRpb24pIHtcbiAgY29uc3QgY3MgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShzb3VyY2UpXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGtleSA9IGNzW2ldXG4gICAgaWYgKChrZXkuaW5kZXhPZigndHJhbnNpdGlvbicpIDwgMCkgJiYgKGtleS5pbmRleE9mKCd0cmFuc2Zvcm0nKSA8IDApKSB7XG4gICAgICBkZXN0aW5hdGlvbi5zdHlsZVtrZXldID0gY3Nba2V5XVxuICAgIH1cbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc291cmNlLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgY29weVN0eWxlcyhzb3VyY2UuY2hpbGRyZW5baV0sIGRlc3RpbmF0aW9uLmNoaWxkcmVuW2ldKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYWdnYWJsZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcih1bmRlZmluZWQsIG9wdGlvbnMpXG4gICAgdGhpcy50YXJnZXRzID0gW11cbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIHByZXZlbnREb3VibGVJbml0KHRoaXMpXG4gICAgRHJhZ2dhYmxlLmVtaXR0ZXIuZW1pdCgnZHJhZ2dhYmxlOmNyZWF0ZScsIHRoaXMpXG4gICAgdGhpcy5fZW5hYmxlID0gdHJ1ZVxuICAgIHRoaXMuc3RhcnRCb3VuZGluZygpXG4gICAgdGhpcy5zdGFydFBvc2l0aW9uaW5nKClcbiAgICB0aGlzLnN0YXJ0TGlzdGVuaW5nKClcbiAgfVxuXG4gIHN0YXJ0Qm91bmRpbmcoKSB7XG4gICAgdGhpcy5ib3VuZCA9IHRoaXMub3B0aW9ucy5ib3VuZCB8fCBCb3VuZFRvRWxlbWVudC5ib3VuZGluZyh0aGlzLnBhcmVudCwgdGhpcy5wYXJlbnQpXG4gIH1cblxuICBzdGFydFBvc2l0aW9uaW5nKCkge1xuICAgIHRoaXMuX3NldERlZmF1bHRUcmFuc2l0aW9uKClcbiAgICB0aGlzLm9mZnNldCA9IFBvaW50LmVsZW1lbnRPZmZzZXQodGhpcy5lbGVtZW50LCB0aGlzLnBhcmVudCwgdHJ1ZSlcbiAgICB0aGlzLnBpbm5lZFBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICB0aGlzLmluaXRpYWxQb3NpdGlvbiA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbiB8fCB0aGlzLm9mZnNldFxuXG4gICAgdGhpcy5waW5Qb3NpdGlvbih0aGlzLmluaXRpYWxQb3NpdGlvbilcblxuICAgIGlmICh0aGlzLmJvdW5kLnJlZnJlc2gpIHtcbiAgICAgIHRoaXMuYm91bmQucmVmcmVzaCgpXG4gICAgfVxuICB9XG5cbiAgc3RhcnRMaXN0ZW5pbmcoKSB7XG4gICAgdGhpcy5fZHJhZ1N0YXJ0ID0gKGV2ZW50KSA9PiB0aGlzLmRyYWdTdGFydChldmVudClcbiAgICB0aGlzLl9kcmFnTW92ZSA9IChldmVudCkgPT4gdGhpcy5kcmFnTW92ZShldmVudClcbiAgICB0aGlzLl9kcmFnRW5kID0gKGV2ZW50KSA9PiB0aGlzLmRyYWdFbmQoZXZlbnQpXG4gICAgdGhpcy5fbmF0aXZlRHJhZ1N0YXJ0ID0gKGV2ZW50KSA9PiB0aGlzLm5hdGl2ZURyYWdTdGFydChldmVudClcbiAgICB0aGlzLl9uYXRpdmVEcmFnT3ZlciA9IChldmVudCkgPT4gdGhpcy5uYXRpdmVEcmFnT3ZlcihldmVudClcbiAgICB0aGlzLl9uYXRpdmVEcmFnRW5kID0gKGV2ZW50KSA9PiB0aGlzLm5hdGl2ZURyYWdFbmQoZXZlbnQpXG4gICAgdGhpcy5fbmF0aXZlRHJvcCA9IChldmVudCkgPT4gdGhpcy5uYXRpdmVEcm9wKGV2ZW50KVxuICAgIHRoaXMuX3Njcm9sbCA9IChldmVudCkgPT4gdGhpcy5vblNjcm9sbChldmVudClcblxuICAgIHRoaXMuaGFuZGxlci5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQsIGlzU3VwcG9ydFBhc3NpdmVFdmVudHMgPyB7IHBhc3NpdmU6IGZhbHNlIH0gOiBmYWxzZSlcbiAgICB0aGlzLmhhbmRsZXIuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0LCBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzID8geyBwYXNzaXZlOiBmYWxzZSB9IDogZmFsc2UpXG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIHRoaXMuX25hdGl2ZURyYWdTdGFydClcbiAgfVxuXG4gIGdldFNpemUoKSB7XG4gICAgcmV0dXJuIFBvaW50LmVsZW1lbnRTaXplKHRoaXMuZWxlbWVudCwgdGhpcy5vcHRpb25zLmlzQ29udGVudEJveFNpemUpXG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5vZmZzZXQuYWRkKHRoaXMuX3RyYW5zZm9ybVBvc2l0aW9uIHx8IG5ldyBQb2ludCgwLCAwKSlcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvblxuICB9XG5cbiAgZ2V0Q2VudGVyKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLmdldFNpemUoKS5tdWx0KDAuNSkpXG4gIH1cblxuICBfc2V0RGVmYXVsdFRyYW5zaXRpb24gKCkge1xuICAgIHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5lbGVtZW50KVt0cmFuc2l0aW9uUHJvcGVydHldXG4gIH1cblxuICBfc2V0VHJhbnNpdGlvbih0aW1lKSB7XG4gICAgbGV0IHRyYW5zaXRpb24gPSB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNpdGlvblByb3BlcnR5XVxuICAgIGNvbnN0IHRyYW5zaXRpb25Dc3MgPSBgdHJhbnNmb3JtICR7dGltZX1tc2BcblxuICAgIGlmICghL3RyYW5zZm9ybSBcXGQqbT9zLy50ZXN0KHRyYW5zaXRpb24pKSB7XG4gICAgICBpZiAodHJhbnNpdGlvbikge1xuICAgICAgICB0cmFuc2l0aW9uICs9IGAsICR7dHJhbnNpdGlvbkNzc31gXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cmFuc2l0aW9uID0gdHJhbnNpdGlvbkNzc1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0cmFuc2l0aW9uID0gdHJhbnNpdGlvbi5yZXBsYWNlKC90cmFuc2Zvcm0gXFxkKm0/cy8sIHRyYW5zaXRpb25Dc3MpXG4gICAgfVxuXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV0gPSB0cmFuc2l0aW9uXG4gIH1cblxuICBfc2V0VHJhbnNsYXRlKHBvaW50KSB7XG4gICAgdGhpcy5fdHJhbnNmb3JtUG9zaXRpb24gPSBwb2ludFxuXG4gICAgbGV0IHRyYW5zZm9ybSA9IHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wZXJ0eV1cbiAgICBsZXQgdHJhbnNsYXRlQ3NzID0gYCB0cmFuc2xhdGUzZCgke3BvaW50Lnh9cHgsICR7cG9pbnQueX1weCwgMHB4KWBcblxuICAgIGNvbnN0IHVhID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnRcbiAgICBjb25zdCBtc2llID0gdWEuaW5kZXhPZignTVNJRSAnKSAhPT0gLTFcblxuICAgIGlmIChtc2llKSB7XG4gICAgICB0cmFuc2xhdGVDc3MgPSBgIHRyYW5zbGF0ZSgke3BvaW50Lnh9cHgsJHtwb2ludC55fXB4KWBcbiAgICAgIGlmICghL3RyYW5zbGF0ZVxcKFteKV0rXFwpLy50ZXN0KHRyYW5zZm9ybSkpIHtcbiAgICAgICAgdHJhbnNmb3JtICs9IHRyYW5zbGF0ZUNzc1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJhbnNmb3JtID0gdHJhbnNmb3JtLnJlcGxhY2UoL3RyYW5zbGF0ZVxcKFteKV0rXFwpLywgdHJhbnNsYXRlQ3NzKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIS90cmFuc2xhdGUzZFxcKFteKV0rXFwpLy50ZXN0KHRyYW5zZm9ybSkpIHtcbiAgICAgICAgdHJhbnNmb3JtICs9IHRyYW5zbGF0ZUNzc1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJhbnNmb3JtID0gdHJhbnNmb3JtLnJlcGxhY2UoL3RyYW5zbGF0ZTNkXFwoW14pXStcXCkvLCB0cmFuc2xhdGVDc3MpXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BlcnR5XSA9IHRyYW5zZm9ybVxuICB9XG5cbiAgbW92ZShwb2ludCwgdGltZT0wLCBpc1NpbGVudD1mYWxzZSkge1xuICAgIHBvaW50ID0gcG9pbnQuY2xvbmUoKVxuXG4gICAgdGhpcy5kZXRlcm1pbmVEaXJlY3Rpb24ocG9pbnQpXG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvaW50XG5cbiAgICB0aGlzLl9zZXRUcmFuc2l0aW9uKHRpbWUpXG4gICAgdGhpcy5fc2V0VHJhbnNsYXRlKHBvaW50LnN1Yih0aGlzLm9mZnNldCkpXG5cbiAgICBpZiAoIWlzU2lsZW50KSB7XG4gICAgICB0aGlzLmVtaXQoJ2RyYWc6bW92ZScpXG4gICAgfVxuICB9XG5cbiAgcGluUG9zaXRpb24ocG9pbnQsIHRpbWU9MCwgc2lsZW50PXRydWUpIHtcbiAgICB0aGlzLnBpbm5lZFBvc2l0aW9uID0gcG9pbnQuY2xvbmUoKVxuICAgIHRoaXMubW92ZSh0aGlzLnBpbm5lZFBvc2l0aW9uLCB0aW1lLCBzaWxlbnQpXG4gIH1cblxuICByZXNldFBvc2l0aW9uVG9Jbml0aWFsICgpIHtcbiAgICB0aGlzLnBpblBvc2l0aW9uKHRoaXMuaW5pdGlhbFBvc2l0aW9uKVxuICB9XG5cbiAgcmVmcmVzaFBvc2l0aW9uICgpIHtcbiAgICB0aGlzLnNldFBvc2l0aW9uKHRoaXMuZ2V0UG9zaXRpb24oKSlcbiAgfVxuXG4gIHNldFBvc2l0aW9uKHBvaW50KSB7XG4gICAgcG9pbnQgPSBwb2ludC5jbG9uZSgpXG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvaW50XG4gICAgdGhpcy5fc2V0VHJhbnNpdGlvbigwKVxuICAgIHRoaXMuX3NldFRyYW5zbGF0ZShwb2ludC5zdWIodGhpcy5vZmZzZXQpKVxuICB9XG5cbiAgZGV0ZXJtaW5lRGlyZWN0aW9uKHBvaW50KSB7XG4gICAgdGhpcy5sZWZ0RGlyZWN0aW9uID0gKHRoaXMucG9zaXRpb24ueCA8IHBvaW50LngpXG4gICAgdGhpcy5yaWdodERpcmVjdGlvbiA9ICh0aGlzLnBvc2l0aW9uLnggPiBwb2ludC54KVxuICAgIHRoaXMudXBEaXJlY3Rpb24gPSAodGhpcy5wb3NpdGlvbi55ID4gcG9pbnQueSlcbiAgICB0aGlzLmRvd25EaXJlY3Rpb24gPSAodGhpcy5wb3NpdGlvbi55IDwgcG9pbnQueSlcbiAgfVxuXG4gIGRyYWdTdGFydChldmVudCkge1xuICAgIHRoaXMuY3VycmVudEV2ZW50ID0gZXZlbnRcbiAgICBpZiAoIXRoaXMuX2VuYWJsZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaXNUb3VjaEV2ZW50ID0gKGlzVG91Y2ggJiYgKGV2ZW50IGluc3RhbmNlb2Ygd2luZG93LlRvdWNoRXZlbnQpKVxuXG4gICAgdGhpcy50b3VjaFBvaW50ID0gdGhpcy5fc3RhcnRUb3VjaFBvaW50ID0gbmV3IFBvaW50KFxuICAgICAgaXNUb3VjaEV2ZW50ID8gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVggOiBldmVudC5jbGllbnRYLFxuICAgICAgaXNUb3VjaEV2ZW50ID8gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVkgOiBldmVudC5jbGllbnRZXG4gICAgKVxuXG4gICAgdGhpcy5fc3RhcnRQb3NpdGlvbiA9IHRoaXMuZ2V0UG9zaXRpb24oKVxuICAgIGlmIChpc1RvdWNoRXZlbnQpIHtcbiAgICAgIHRoaXMuX3RvdWNoSWQgPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5pZGVudGlmaWVyXG4gICAgfVxuXG4gICAgdGhpcy5fc3RhcnRTY3JvbGxQb2ludCA9IG5ldyBQb2ludCh3aW5kb3cuc2Nyb2xsWCwgd2luZG93LnNjcm9sbFkpXG5cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGlmIChldmVudC50YXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElucHV0RWxlbWVudCB8fFxuICAgICAgICAgIGV2ZW50LnRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSW5wdXRFbGVtZW50KSB7XG4gICAgICBldmVudC50YXJnZXQuZm9jdXMoKVxuICAgIH1cblxuICAgIGlmICghKHRoaXMubmF0aXZlRHJhZ0FuZERyb3AgfHxcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSW5wdXRFbGVtZW50IHx8XG4gICAgICAgICAgICBldmVudC50YXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElucHV0RWxlbWVudCkpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB9XG5cbiAgICBpZiAodGhpcy5uYXRpdmVEcmFnQW5kRHJvcCkge1xuICAgICAgY29uc3QgaXNTYWZhcmkgPSAvdmVyc2lvblxcLyhcXGQrKS4rP3NhZmFyaS9pLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpXG4gICAgICBpZiAoKGlzVG91Y2hFdmVudCAmJiB0aGlzLmVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcE9uVG91Y2gpIHx8XG4gICAgICAgICAgICAgaXNTYWZhcmkgfHxcbiAgICAgICAgICAgICB0aGlzLmVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcEZvckFsbCkge1xuICAgICAgICB0aGlzLmVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcChldmVudClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5kcmFnZ2FibGUgPSB0cnVlXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9uYXRpdmVEcmFnRW5kLCBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzID8geyBwYXNzaXZlOiBmYWxzZSB9IDogZmFsc2UpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUsIGlzU3VwcG9ydFBhc3NpdmVFdmVudHMgPyB7IHBhc3NpdmU6IGZhbHNlIH0gOiBmYWxzZSlcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUsIGlzU3VwcG9ydFBhc3NpdmVFdmVudHMgPyB7IHBhc3NpdmU6IGZhbHNlIH0gOiBmYWxzZSlcblxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQsIGlzU3VwcG9ydFBhc3NpdmVFdmVudHMgPyB7IHBhc3NpdmU6IGZhbHNlIH0gOiBmYWxzZSlcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kLCBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzID8geyBwYXNzaXZlOiBmYWxzZSB9IDogZmFsc2UpXG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX3Njcm9sbClcblxuICAgIHRoaXMuaXNEcmFnZ2luZyA9IHRydWVcbiAgICB0aGlzLmVtaXQoJ2RyYWc6c3RhcnQnKVxuICAgIGFkZENsYXNzKHRoaXMuZWxlbWVudCwgJ2RyYWdlZS1hY3RpdmUnKVxuICAgIHRoaXMuZW1pdCgnZHJhZzptb3ZlJylcbiAgfVxuXG4gIHN0b3BEcmFnZ2luZygpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCB0aGlzLl9uYXRpdmVEcmFnT3ZlcilcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcm9wJywgdGhpcy5fbmF0aXZlRHJvcClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcm9wJywgdGhpcy5fbmF0aXZlRHJvcClcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fc2Nyb2xsKVxuICAgIHRoaXMuZWxlbWVudC5kcmFnZ2FibGUgPSBmYWxzZVxuICAgIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlXG4gICAgcmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50LCAnZHJhZ2VlLWFjdGl2ZScpXG4gIH1cblxuICBkcmFnTW92ZShldmVudCkge1xuICAgIHRoaXMuY3VycmVudEV2ZW50ID0gZXZlbnRcbiAgICBsZXQgdG91Y2hcblxuICAgIGNvbnN0IGlzVG91Y2hFdmVudCA9IChpc1RvdWNoICYmIChldmVudCBpbnN0YW5jZW9mIHdpbmRvdy5Ub3VjaEV2ZW50KSlcbiAgICBpZiAoaXNUb3VjaEV2ZW50KSB7XG4gICAgICB0b3VjaCA9IGdldFRvdWNoQnlJRChldmVudCwgdGhpcy5fdG91Y2hJZClcblxuICAgICAgaWYgKCF0b3VjaCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB0aGlzLnRvdWNoUG9pbnQgPSBuZXcgUG9pbnQoXG4gICAgICBpc1RvdWNoRXZlbnQgPyB0b3VjaC5wYWdlWCA6IGV2ZW50LmNsaWVudFgsXG4gICAgICBpc1RvdWNoRXZlbnQgPyB0b3VjaC5wYWdlWSA6IGV2ZW50LmNsaWVudFlcbiAgICApXG5cbiAgICBsZXQgcG9pbnQgPSB0aGlzLl9zdGFydFBvc2l0aW9uLmFkZCh0aGlzLnRvdWNoUG9pbnQuc3ViKHRoaXMuX3N0YXJ0VG91Y2hQb2ludCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy5zY3JvbGxQb2ludC5zdWIodGhpcy5fc3RhcnRTY3JvbGxQb2ludCkpXG5cbiAgICBwb2ludCA9IHRoaXMuYm91bmQocG9pbnQsIHRoaXMuZ2V0U2l6ZSgpKVxuICAgIHRoaXMubW92ZShwb2ludClcbiAgfVxuXG4gIGRyYWdFbmQoZXZlbnQpIHtcbiAgICBjb25zdCBpc1RvdWNoRXZlbnQgPSAoaXNUb3VjaCAmJiAoZXZlbnQgaW5zdGFuY2VvZiB3aW5kb3cuVG91Y2hFdmVudCkpXG5cbiAgICBpZiAoaXNUb3VjaEV2ZW50ICYmICFnZXRUb3VjaEJ5SUQoZXZlbnQsIHRoaXMuX3RvdWNoSWQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB0aGlzLmRyYWdFbmRBY3Rpb24oKVxuICAgIHRoaXMuZW1pdCgnZHJhZzplbmQnKVxuXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG5cbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fc2Nyb2xsKVxuXG4gICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2VcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkcmFnZ2FibGUnKVxuICAgIHJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudCwgJ2RyYWdlZS1hY3RpdmUnKVxuICB9XG5cbiAgb25TY3JvbGwoX2V2ZW50KSB7XG4gICAgbGV0IHBvaW50ID0gdGhpcy5fc3RhcnRQb3NpdGlvbi5hZGQodGhpcy50b3VjaFBvaW50LnN1Yih0aGlzLl9zdGFydFRvdWNoUG9pbnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMuc2Nyb2xsUG9pbnQuc3ViKHRoaXMuX3N0YXJ0U2Nyb2xsUG9pbnQpKVxuXG4gICAgcG9pbnQgPSB0aGlzLmJvdW5kKHBvaW50LCB0aGlzLmdldFNpemUoKSlcbiAgICBpZiAoIXRoaXMubmF0aXZlRHJhZ0FuZERyb3ApIHtcbiAgICAgIHRoaXMubW92ZShwb2ludClcbiAgICB9XG4gIH1cblxuICBuYXRpdmVEcmFnU3RhcnQoZXZlbnQpIHtcbiAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dCcsICdGaXJlRm94IGZpeCcpXG4gICAgZXZlbnQuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSAnbW92ZSdcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIHRoaXMuX25hdGl2ZURyYWdPdmVyKVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzLl9uYXRpdmVEcm9wKVxuICB9XG5cbiAgbmF0aXZlRHJhZ092ZXIoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZXZlbnQuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnbW92ZSdcbiAgICBhZGRDbGFzcyh0aGlzLmVsZW1lbnQsICdkcmFnZWUtcGxhY2Vob2xkZXInKVxuICAgIHRoaXMuY3VycmVudEV2ZW50ID0gZXZlbnRcbiAgICBpZiAoZXZlbnQuY2xpZW50WCA9PT0gMCAmJiBldmVudC5jbGllbnRZID09PSAwKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLnRvdWNoUG9pbnQgPSBuZXcgUG9pbnQoZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSlcbiAgICBsZXQgcG9pbnQgPSB0aGlzLl9zdGFydFBvc2l0aW9uLmFkZCh0aGlzLnRvdWNoUG9pbnQuc3ViKHRoaXMuX3N0YXJ0VG91Y2hQb2ludCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQodGhpcy5zY3JvbGxQb2ludC5zdWIodGhpcy5fc3RhcnRTY3JvbGxQb2ludCkpXG4gICAgcG9pbnQgPSB0aGlzLmJvdW5kKHBvaW50LCB0aGlzLmdldFNpemUoKSlcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9pbnRcbiAgICB0aGlzLmVtaXQoJ2RyYWc6bW92ZScpXG4gIH1cblxuICBuYXRpdmVEcmFnRW5kKF9ldmVudCkge1xuICAgIHJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudCwgJ2RyYWdlZS1wbGFjZWhvbGRlcicpXG4gICAgdGhpcy5kcmFnRW5kQWN0aW9uKClcbiAgICB0aGlzLmVtaXQoJ2RyYWc6ZW5kJylcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIHRoaXMuX25hdGl2ZURyYWdPdmVyKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzLl9uYXRpdmVEcm9wKVxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9zY3JvbGwpXG4gICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2VcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkcmFnZ2FibGUnKVxuICAgIHJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudCwgJ2RyYWdlZS1hY3RpdmUnKVxuICB9XG5cbiAgbmF0aXZlRHJvcChldmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wKGV2ZW50KSB7XG4gICAgY29uc3QgcGFyZW50UmVjdCA9IHRoaXMucGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgY29uc3QgY2xvbmVkRWxlbWVudCA9IHRoaXMuZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSlcbiAgICBjbG9uZWRFbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BlcnR5XSA9ICcnXG4gICAgY29weVN0eWxlcyh0aGlzLmVsZW1lbnQsIGNsb25lZEVsZW1lbnQpXG4gICAgY2xvbmVkRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSdcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNsb25lZEVsZW1lbnQpXG4gICAgYWRkQ2xhc3ModGhpcy5lbGVtZW50LCAnZHJhZ2VlLXBsYWNlaG9sZGVyJylcblxuICAgIGNvbnN0IGVtdWxhdGlvbkRyYWdnYWJsZSA9IG5ldyBEcmFnZ2FibGUoY2xvbmVkRWxlbWVudCwge1xuICAgICAgcGFyZW50OiBkb2N1bWVudC5ib2R5LFxuICAgICAgYm91bmQocG9pbnQpIHsgcmV0dXJuIHBvaW50IH0sXG4gICAgICBvbjoge1xuICAgICAgICAnZHJhZzptb3ZlJzogKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHBhcmVudFJlY3RQb2ludCA9IG5ldyBQb2ludChwYXJlbnRSZWN0LmxlZnQsIHBhcmVudFJlY3QudG9wKVxuICAgICAgICAgIHRoaXMucG9zaXRpb24gPSBlbXVsYXRpb25EcmFnZ2FibGUucG9zaXRpb24uc3ViKHBhcmVudFJlY3RQb2ludClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN1Yih0aGlzLl9zdGFydFNjcm9sbFBvaW50KVxuICAgICAgICAgIHRoaXMuZW1pdCgnZHJhZzptb3ZlJylcbiAgICAgICAgfSxcbiAgICAgICAgJ2RyYWc6ZW5kJzogKCkgPT4ge1xuICAgICAgICAgIGVtdWxhdGlvbkRyYWdnYWJsZS5kZXN0cm95KClcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGNsb25lZEVsZW1lbnQpXG4gICAgICAgICAgcmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50LCAnZHJhZ2VlLXBsYWNlaG9sZGVyJylcbiAgICAgICAgICByZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnQsICdkcmFnZWUtYWN0aXZlJylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBwYXJlbnRSZWN0UG9pbnQgPSBuZXcgUG9pbnQocGFyZW50UmVjdC5sZWZ0LCBwYXJlbnRSZWN0LnRvcClcbiAgICBlbXVsYXRpb25EcmFnZ2FibGUuX3N0YXJ0U2Nyb2xsUG9pbnQgPSB0aGlzLl9zdGFydFNjcm9sbFBvaW50XG5cbiAgICBlbXVsYXRpb25EcmFnZ2FibGUubW92ZShcbiAgICAgIHRoaXMucGlubmVkUG9zaXRpb24uYWRkKHBhcmVudFJlY3RQb2ludCkuYWRkKG5ldyBQb2ludCh3aW5kb3cuc2Nyb2xsWCwgd2luZG93LnNjcm9sbFkpKVxuICAgIClcblxuICAgIGVtdWxhdGlvbkRyYWdnYWJsZS5kcmFnU3RhcnQoZXZlbnQpXG4gIH1cblxuICBkcmFnRW5kQWN0aW9uKCkge1xuICAgIHRoaXMucGluUG9zaXRpb24odGhpcy5wb3NpdGlvbilcbiAgfVxuXG4gIGdldFJlY3RhbmdsZSgpIHtcbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZSh0aGlzLnBvc2l0aW9uLCB0aGlzLmdldFNpemUoKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgaWYgKHRoaXMuYm91bmQucmVmcmVzaCkge1xuICAgICAgdGhpcy5ib3VuZC5yZWZyZXNoKClcbiAgICB9XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuaGFuZGxlci5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQpXG4gICAgdGhpcy5oYW5kbGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydClcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgdGhpcy5fbmF0aXZlRHJhZ1N0YXJ0KVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIHRoaXMuX25hdGl2ZURyYWdPdmVyKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzLl9uYXRpdmVEcm9wKVxuICAgIHRoaXMucmVzZXRFbWl0dGVyKClcblxuICAgIGNvbnN0IGluZGV4ID0gZHJhZ2dhYmxlcy5pbmRleE9mKHRoaXMpXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIGRyYWdnYWJsZXMuc3BsaWNlKGluZGV4LCAxKVxuICAgIH1cbiAgfVxuXG4gIGdldCBwYXJlbnQoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9wYXJlbnQgPSB0aGlzLl9wYXJlbnQgfHwgdGhpcy5vcHRpb25zLnBhcmVudCB8fCBnZXREZWZhdWx0UGFyZW50KHRoaXMuZWxlbWVudCkpXG4gIH1cblxuICBnZXQgaGFuZGxlcigpIHtcbiAgICBpZiAoIXRoaXMuX2hhbmRsZXIpIHtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmhhbmRsZXIgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZXIgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLm9wdGlvbnMuaGFuZGxlcikgfHwgdGhpcy5lbGVtZW50XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9oYW5kbGVyID0gdGhpcy5vcHRpb25zLmhhbmRsZXIgfHwgdGhpcy5lbGVtZW50XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2hhbmRsZXJcbiAgfVxuXG4gIGdldCBuYXRpdmVEcmFnQW5kRHJvcCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLm5hdGl2ZURyYWdBbmREcm9wIHx8IGZhbHNlXG4gIH1cblxuICBnZXQgZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wT25Ub3VjaCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcE9uVG91Y2ggfHwgdHJ1ZVxuICB9XG5cbiAgZ2V0IGVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcEZvckFsbCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcEZvckFsbCB8fCBmYWxzZVxuICB9XG5cbiAgZ2V0IHNjcm9sbFBvaW50KCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQod2luZG93LnNjcm9sbFgsIHdpbmRvdy5zY3JvbGxZKVxuICB9XG5cbiAgZ2V0IGVuYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlXG4gIH1cblxuICBzZXQgZW5hYmxlKGVuYWJsZSkge1xuICAgIGlmIChlbmFibGUpIHtcbiAgICAgIHJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudCwgJ2RyYWdlZS1kaXNhYmxlJylcbiAgICB9IGVsc2Uge1xuICAgICAgYWRkQ2xhc3ModGhpcy5lbGVtZW50LCAnZHJhZ2VlLWRpc2FibGUnKVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9lbmFibGUgPSBlbmFibGVcbiAgfVxufVxuXG5EcmFnZ2FibGUuZW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXIoRHJhZ2dhYmxlKVxuRHJhZ2dhYmxlLmVtaXR0ZXIub24oJ2RyYWdnYWJsZTpjcmVhdGUnLCBhZGRUb0RlZmF1bHRTY29wZSlcbiIsImltcG9ydCByZW1vdmVJdGVtIGZyb20gJy4vdXRpbHMvcmVtb3ZlLWFycmF5LWl0ZW0nXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnRFbWl0dGVyJ1xuaW1wb3J0IHtcbiAgZ2V0RGlzdGFuY2UsXG4gIGluZGV4T2ZOZWFyZXN0UG9pbnRcbn0gZnJvbSAnLi9nZW9tZXRyeS9kaXN0YW5jZXMnXG5cbmltcG9ydCBEcmFnZ2FibGUgZnJvbSAnLi9kcmFnZ2FibGUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3QgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvcihkcmFnZ2FibGVzLCBvcHRpb25zPXt9KSB7XG4gICAgc3VwZXIodW5kZWZpbmVkLCBvcHRpb25zKVxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgdGltZUVuZDogMjAwLFxuICAgICAgdGltZUV4Y2FuZ2U6IDQwMCxcbiAgICAgIHJhZGl1czogMzBcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gZHJhZ2dhYmxlc1xuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuX2VuYWJsZSA9IHRydWVcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCh0aGlzLmluaXREcmFnZ2FibGUsIHRoaXMpXG4gIH1cblxuICBpbml0RHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIGRyYWdnYWJsZS5lbmFibGUgPSB0aGlzLl9lbmFibGVcbiAgICBkcmFnZ2FibGUub24oJ2RyYWc6bW92ZScsICgpID0+IHRoaXMub25Nb3ZlKGRyYWdnYWJsZSkpXG4gICAgZHJhZ2dhYmxlLmRyYWdFbmRBY3Rpb24gPSAoKSA9PiBkcmFnZ2FibGUucGluUG9zaXRpb24oZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uLCB0aGlzLm9wdGlvbnMudGltZUVuZClcbiAgfVxuXG4gIG9uTW92ZShkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBzb3J0ZWREcmFnZ2FibGVzID0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcbiAgICBjb25zdCBwaW5uZWRQb3NpdGlvbnMgPSBzb3J0ZWREcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24pXG5cbiAgICBjb25zdCBjdXJyZW50SW5kZXggPSBzb3J0ZWREcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKVxuICAgIGNvbnN0IHRhcmdldEluZGV4ID0gaW5kZXhPZk5lYXJlc3RQb2ludChwaW5uZWRQb3NpdGlvbnMsIGRyYWdnYWJsZS5wb3NpdGlvbiwgdGhpcy5vcHRpb25zLnJhZGl1cywgdGhpcy5kaXN0YW5jZUZ1bmMpXG5cbiAgICBpZiAodGFyZ2V0SW5kZXggIT09IC0xICYmIGN1cnJlbnRJbmRleCAhPT0gdGFyZ2V0SW5kZXgpIHtcbiAgICAgIGlmICh0YXJnZXRJbmRleCA8IGN1cnJlbnRJbmRleCkge1xuICAgICAgICBmb3IgKGxldCBpPXRhcmdldEluZGV4OyBpPGN1cnJlbnRJbmRleDsgaSsrKSB7XG4gICAgICAgICAgc29ydGVkRHJhZ2dhYmxlc1tpXS5waW5Qb3NpdGlvbihwaW5uZWRQb3NpdGlvbnNbaSsxXSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGxldCBpPWN1cnJlbnRJbmRleDsgaTx0YXJnZXRJbmRleDsgaSsrKSB7XG4gICAgICAgICAgc29ydGVkRHJhZ2dhYmxlc1tpKzFdLnBpblBvc2l0aW9uKHBpbm5lZFBvc2l0aW9uc1tpXSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChkcmFnZ2FibGUubmF0aXZlRHJhZ0FuZERyb3ApIHtcbiAgICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKHBpbm5lZFBvc2l0aW9uc1t0YXJnZXRJbmRleF0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24gPSBwaW5uZWRQb3NpdGlvbnNbdGFyZ2V0SW5kZXhdXG4gICAgICB9XG5cbiAgICAgIHRoaXMuZW1pdCgnbGlzdDpjaGFuZ2UnKVxuICAgIH1cbiAgfVxuXG4gIGdldEN1cnJlbnRQaW5uZWRQb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uLmNsb25lKCkpXG4gIH1cblxuICBnZXRTb3J0ZWREcmFnZ2FibGVzKCkge1xuICAgIHJldHVybiB0aGlzLmRyYWdnYWJsZXMuc29ydCh0aGlzLnNvcnRpbmcuYmluZCh0aGlzKSlcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5yZXNldFBvc2l0aW9uVG9Jbml0aWFsKCkpXG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5yZWZyZXNoKCkpXG4gIH1cblxuICBhZGQoZHJhZ2dhYmxlcykge1xuICAgIGlmICghKGRyYWdnYWJsZXMgaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICAgIGRyYWdnYWJsZXMgPSBbZHJhZ2dhYmxlc11cbiAgICB9XG4gICAgZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHRoaXMuaW5pdERyYWdnYWJsZShkcmFnZ2FibGUpKVxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IHRoaXMuZHJhZ2dhYmxlcy5jb25jYXQoZHJhZ2dhYmxlcylcbiAgfVxuXG4gIHJlbW92ZShkcmFnZ2FibGVzKSB7XG4gICAgY29uc3QgaW5pdGlhbFBvc2l0aW9ucyA9IHRoaXMuZHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLmluaXRpYWxQb3NpdGlvbilcbiAgICBjb25zdCBsaXN0ID0gW11cbiAgICBjb25zdCBzb3J0ZWREcmFnZ2FibGVzID0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcblxuICAgIGlmICghKGRyYWdnYWJsZXMgaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICAgIGRyYWdnYWJsZXMgPSBbZHJhZ2dhYmxlc11cbiAgICB9XG5cbiAgICBkcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLnJlc2V0T24oJ2RyYWc6ZW5kJylcbiAgICAgIGRyYWdnYWJsZS5yZXNldE9uKCdkcmFnOm1vdmUnKVxuICAgICAgcmVtb3ZlSXRlbSh0aGlzLmRyYWdnYWJsZXMsIGRyYWdnYWJsZSlcbiAgICB9KVxuXG4gICAgbGV0IGogPSAwXG4gICAgc29ydGVkRHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGlmICh0aGlzLmRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMSkge1xuICAgICAgICBpZiAoZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uICE9PSBpbml0aWFsUG9zaXRpb25zW2pdKSB7XG4gICAgICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKGluaXRpYWxQb3NpdGlvbnNbal0sIHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSlcbiAgICAgICAgfVxuICAgICAgICBkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uID0gaW5pdGlhbFBvc2l0aW9uc1tqXVxuICAgICAgICBqKytcbiAgICAgICAgbGlzdC5wdXNoKGRyYWdnYWJsZSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGxpc3RcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMucmVtb3ZlKHRoaXMuZHJhZ2dhYmxlcy5zbGljZSgpKVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUuZGVzdHJveSgpKVxuICB9XG5cbiAgc29ydGluZyhkcmFnZ2FibGVBLCBkcmFnZ2FibGVCKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5zb3J0aW5nKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLnNvcnRpbmcoZHJhZ2dhYmxlQSwgZHJhZ2dhYmxlQilcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGRyYWdnYWJsZUEucGlubmVkUG9zaXRpb24ueSA8IGRyYWdnYWJsZUIucGlubmVkUG9zaXRpb24ueSkgcmV0dXJuIC0xXG4gICAgICBpZiAoZHJhZ2dhYmxlQS5waW5uZWRQb3NpdGlvbi55ID4gZHJhZ2dhYmxlQi5waW5uZWRQb3NpdGlvbi55KSByZXR1cm4gMVxuICAgICAgaWYgKGRyYWdnYWJsZUEucGlubmVkUG9zaXRpb24ueCA8IGRyYWdnYWJsZUIucGlubmVkUG9zaXRpb24ueCkgcmV0dXJuIC0xXG4gICAgICBpZiAoZHJhZ2dhYmxlQS5waW5uZWRQb3NpdGlvbi54ID4gZHJhZ2dhYmxlQi5waW5uZWRQb3NpdGlvbi54KSByZXR1cm4gMVxuICAgICAgcmV0dXJuIDBcbiAgICB9XG4gIH1cblxuICBnZXQgZGlzdGFuY2VGdW5jKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZ2V0RGlzdGFuY2UgfHwgZ2V0RGlzdGFuY2VcbiAgfVxuXG4gIGdldCBwb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q3VycmVudFBpbm5lZFBvc2l0aW9ucygpXG4gIH1cblxuICBzZXQgcG9zaXRpb25zKHBvc2l0aW9ucykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSAnd3JvbmcgYXJyYXkgbGVuZ3RoJ1xuICAgIGlmIChwb3NpdGlvbnMubGVuZ3RoID09PSB0aGlzLmRyYWdnYWJsZXMubGVuZ3RoKSB7XG4gICAgICBwb3NpdGlvbnMuZm9yRWFjaCgocG9pbnQsIGkpID0+IHtcbiAgICAgICAgdGhpcy5kcmFnZ2FibGVzW2ldLnBpblBvc2l0aW9uKHBvaW50KVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbWVzc2FnZVxuICAgIH1cbiAgfVxuXG4gIGdldCBlbmFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZVxuICB9XG5cbiAgc2V0IGVuYWJsZShlbmFibGUpIHtcbiAgICB0aGlzLl9lbmFibGUgPSBlbmFibGVcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUuZW5hYmxlID0gZW5hYmxlXG4gICAgfSlcbiAgfVxuXG4gIHN0YXRpYyBmYWN0b3J5KHBhcmVudEVsZW1lbnQsIGVsZW1lbnRzLCBvcHRpb25zPXt9KSB7XG4gICAgY29uc3QgZHJhZ2dhYmxlcyA9IEFycmF5LmZyb20oZWxlbWVudHMpLm1hcCgoZWxlbWVudCkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBEcmFnZ2FibGUoZWxlbWVudCwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIHBhcmVudDogcGFyZW50RWxlbWVudFxuICAgICAgfSwgb3B0aW9ucy5kcmFnZ2FibGUgfHwge30pKVxuICAgIH0pXG4gICAgcmV0dXJuIG5ldyBMaXN0KGRyYWdnYWJsZXMsIG9wdGlvbnMubGlzdCB8fCB7fSlcbiAgfVxufVxuIiwiaW1wb3J0IExpc3QgZnJvbSAnLi9saXN0J1xuaW1wb3J0IHsgaW5kZXhPZk5lYXJlc3RQb2ludCwgZ2V0WURpZmZlcmVuY2UgfSBmcm9tICcuL2dlb21ldHJ5L2Rpc3RhbmNlcydcblxuaW1wb3J0IERyYWdnYWJsZSBmcm9tICcuL2RyYWdnYWJsZSdcblxuY29uc3QgYXJyYXlNb3ZlID0gKGFycmF5LCBmcm9tLCB0bykgPT4ge1xuICBhcnJheS5zcGxpY2UodG8gPCAwID8gYXJyYXkubGVuZ3RoICsgdG8gOiB0bywgMCwgYXJyYXkuc3BsaWNlKGZyb20sIDEpWzBdKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnViYmxpbmdMaXN0IGV4dGVuZHMgTGlzdCB7XG4gIGNvbnN0cnVjdG9yKGRyYWdnYWJsZXMsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcihkcmFnZ2FibGVzLCBvcHRpb25zKVxuICB9XG5cbiAgaW5pdERyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICBkcmFnZ2FibGUub24oJ2RyYWc6c3RhcnQnLCAoKSA9PiB0aGlzLmF1dG9EZXRlY3RWZXJ0aWNhbEdhcChkcmFnZ2FibGUpKVxuICAgIHN1cGVyLmluaXREcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICB9XG5cbiAgYXV0b0RldGVjdFZlcnRpY2FsR2FwKCkge1xuICAgIGlmKHRoaXMuZHJhZ2dhYmxlcy5sZW5ndGggPj0gMikge1xuICAgICAgY29uc3Qgc29ydGVkID0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcblxuICAgICAgdGhpcy52ZXJ0aWNhbEdhcCA9IHNvcnRlZFsxXS5waW5uZWRQb3NpdGlvbi55IC0gc29ydGVkWzBdLnBpbm5lZFBvc2l0aW9uLnkgLSBzb3J0ZWRbMF0uZ2V0U2l6ZSgpLnlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy52ZXJ0aWNhbEdhcCA9IDBcbiAgICB9XG5cbiAgICBpZih0aGlzLmRyYWdnYWJsZXMubGVuZ3RoID49IDEpIHtcbiAgICAgIHRoaXMuc3RhcnRQb3NpdGlvbiA9IHRoaXMuZHJhZ2dhYmxlc1swXS5waW5uZWRQb3NpdGlvblxuICAgIH1cbiAgfVxuXG4gIG9uTW92ZShkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBzb3J0ZWREcmFnZ2FibGVzID0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcbiAgICBjb25zdCBwaW5uZWRQb3NpdGlvbnMgPSBzb3J0ZWREcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24pXG5cbiAgICBjb25zdCBjdXJyZW50SW5kZXggPSBzb3J0ZWREcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKVxuICAgIGNvbnN0IHRhcmdldEluZGV4ID0gaW5kZXhPZk5lYXJlc3RQb2ludChwaW5uZWRQb3NpdGlvbnMsIGRyYWdnYWJsZS5wb3NpdGlvbiwgdGhpcy5vcHRpb25zLnJhZGl1cywgdGhpcy5kaXN0YW5jZUZ1bmMpXG5cbiAgICBpZiAodGFyZ2V0SW5kZXggIT09IC0xICYmIGN1cnJlbnRJbmRleCAhPT0gdGFyZ2V0SW5kZXgpIHtcbiAgICAgIGFycmF5TW92ZShzb3J0ZWREcmFnZ2FibGVzLCBjdXJyZW50SW5kZXgsIHRhcmdldEluZGV4KVxuICAgICAgdGhpcy5idWJsaW5nKHNvcnRlZERyYWdnYWJsZXMsIGRyYWdnYWJsZSlcbiAgICAgIHRoaXMuZW1pdCgnbGlzdDpjaGFuZ2UnKVxuICAgIH1cbiAgfVxuXG4gIGJ1Ymxpbmcoc29ydGVkRHJhZ2dhYmxlcywgY3VycmVudERyYWdnYWJsZSkge1xuICAgIGNvbnN0IGN1cnJlbnRQb3NpdGlvbiA9IHRoaXMuc3RhcnRQb3NpdGlvbi5jbG9uZSgpXG5cbiAgICBzb3J0ZWREcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSwgaW5kZXgpID0+IHtcbiAgICAgIGlmKCFkcmFnZ2FibGUucGlubmVkUG9zaXRpb24uY29tcGFyZShjdXJyZW50UG9zaXRpb24pKSB7XG4gICAgICAgIGlmKGRyYWdnYWJsZSA9PT0gY3VycmVudERyYWdnYWJsZSAmJiAhY3VycmVudERyYWdnYWJsZS5uYXRpdmVEcmFnQW5kRHJvcCkge1xuICAgICAgICAgIGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbiA9IGN1cnJlbnRQb3NpdGlvbi5jbG9uZSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKGN1cnJlbnRQb3NpdGlvbiwgKGRyYWdnYWJsZSA9PT0gY3VycmVudERyYWdnYWJsZSkgPyAwIDogdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGN1cnJlbnRQb3NpdGlvbi55ID0gY3VycmVudFBvc2l0aW9uLnkgKyBkcmFnZ2FibGUuZ2V0U2l6ZSgpLnkgKyB0aGlzLnZlcnRpY2FsR2FwXG4gICAgfSlcbiAgfVxuXG4gIGdldCBkaXN0YW5jZUZ1bmMoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5nZXREaXN0YW5jZSB8fCBnZXRZRGlmZmVyZW5jZVxuICB9XG5cbiAgc3RhdGljIGZhY3RvcnkocGFyZW50RWxlbWVudCwgZWxlbWVudHMsIG9wdGlvbnM9e30pIHtcbiAgICBjb25zdCBkcmFnZ2FibGVzID0gQXJyYXkuZnJvbShlbGVtZW50cykubWFwKChlbGVtZW50KSA9PiB7XG4gICAgICByZXR1cm4gbmV3IERyYWdnYWJsZShlbGVtZW50LCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgcGFyZW50OiBwYXJlbnRFbGVtZW50XG4gICAgICB9LCBvcHRpb25zLmRyYWdnYWJsZSB8fCB7fSkpXG4gICAgfSlcbiAgICByZXR1cm4gbmV3IEJ1YmJsaW5nTGlzdChkcmFnZ2FibGVzLCBvcHRpb25zLmxpc3QgfHwge30pXG4gIH1cbn1cbiIsImZ1bmN0aW9uIHNldFN0eWxlKGVsZW1lbnQsIHN0eWxlKSB7XG4gIHN0eWxlID0gc3R5bGUgfHwge31cbiAgbGV0IGNzc1RleHQgPSAnJ1xuICBmb3IgKGNvbnN0IGtleSBpbiBzdHlsZSkge1xuICAgIGlmIChzdHlsZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBjc3NUZXh0ICs9IGtleSArICc6ICcgKyBzdHlsZVtrZXldICsgJzsgJ1xuICAgIH1cbiAgfVxuXG4gIGVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IGNzc1RleHRcbn1cblxuZnVuY3Rpb24gYXBwZW5kRmlyc3RDaGlsZChlbGVtZW50LCBub2RlKSB7XG4gIGlmIChlbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICBlbGVtZW50Lmluc2VydEJlZm9yZShub2RlLCBlbGVtZW50LmZpcnN0Q2hpbGQpXG4gIH0gZWxzZSB7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChub2RlKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUNhbnZhcyhhcmVhLCByZWN0YWdsZSkge1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKVxuICBpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUoYXJlYSkucG9zaXRpb24gPT09ICdzdGF0aWMnKSB7XG4gICAgYXJlYS5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSdcbiAgfVxuXG4gIGNhbnZhcy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgcmVjdGFnbGUuc2l6ZS54ICsgJ3B4JylcbiAgY2FudmFzLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgcmVjdGFnbGUuc2l6ZS55ICsgJ3B4JylcbiAgc2V0U3R5bGUoY2FudmFzLCB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgbGVmdDogcmVjdGFnbGUucG9zaXRpb24ueSArICdweCcsXG4gICAgdG9wOiByZWN0YWdsZS5wb3NpdGlvbi55ICsgJ3B4JyxcbiAgICB3aWR0aDogcmVjdGFnbGUuc2l6ZS54ICsgJ3B4JyxcbiAgICBoZWlnaHQ6IHJlY3RhZ2xlLnNpemUueSArICdweCdcbiAgfSlcbiAgYXBwZW5kRmlyc3RDaGlsZChhcmVhLCBjYW52YXMpXG4gIHJldHVybiBjYW52YXNcbn1cbiIsImltcG9ydCBjcmVhdGVDYW52YXMgZnJvbSAnLi91dGlscy9jcmVhdGUtY2FudmFzJ1xuaW1wb3J0IFBvaW50IGZyb20gJy4vZ2VvbWV0cnkvcG9pbnQnXG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gJy4vZ2VvbWV0cnkvcmVjdGFuZ2xlJ1xuXG5pbXBvcnQgeyBnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0gfSBmcm9tICcuL2dlb21ldHJ5L2FuZ2xlcydcbmltcG9ydCB7IEJvdW5kVG9MaW5lIH0gZnJvbSAnLi9ib3VuZGluZydcbmltcG9ydCBEcmFnZ2FibGUgZnJvbSAnLi9kcmFnZ2FibGUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNwaWRlciB7XG4gIGNvbnN0cnVjdG9yKGFyZWEsIGVsZW1lbnRzLCBvcHRpb25zPXt9KSB7XG4gICAgY29uc3QgYXJlYVJlY3RhbmdsZSA9IFJlY3RhbmdsZS5mcm9tRWxlbWVudChhcmVhLCBhcmVhKVxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgYW5nbGU6IDAsXG4gICAgICBkQW5nbGU6IDIgKiBNYXRoLlBJIC8gZWxlbWVudHMubGVuZ3RoLFxuICAgICAgY2VudGVyOiBhcmVhUmVjdGFuZ2xlLmdldENlbnRlcigpLFxuICAgICAgc3RhcnRSYWRpdXM6IDUwLFxuICAgICAgZW5kUmFkaXVzOiBhcmVhUmVjdGFuZ2xlLmdldE1pblNpZGUoKSAvIDIsXG4gICAgICBsaW5lV2lkdGg6IDIsXG4gICAgICBzdHJva2VTdHlsZTogJyNmZjU1NzcnLFxuICAgICAgZmlsbFN0eWxlOiAncmdiYSgxNTAsMjU1LDUwLDAuOCknXG4gICAgfSwgb3B0aW9ucylcblxuICAgIHRoaXMuYXJlYSA9IGFyZWFcbiAgICB0aGlzLmFyZWFSZWN0YW5nbGUgPSBhcmVhUmVjdGFuZ2xlXG4gICAgdGhpcy5pbml0KGVsZW1lbnRzKVxuICB9XG5cbiAgaW5pdChlbGVtZW50cykge1xuICAgIHRoaXMuY2FudmFzID0gY3JlYXRlQ2FudmFzKHRoaXMuYXJlYSwgdGhpcy5hcmVhUmVjdGFuZ2xlKVxuICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJylcblxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGVsZW1lbnRzLm1hcCgoZWxlbWVudCwgaSkgPT4ge1xuICAgICAgY29uc3QgYW5nbGUgPSB0aGlzLm9wdGlvbnMuYW5nbGUgKyBpICogdGhpcy5vcHRpb25zLmRBbmdsZVxuICAgICAgY29uc3QgaGFsZlNpemUgPSBQb2ludC5lbGVtZW50U2l6ZShlbGVtZW50KS5tdWx0KDAuNSlcbiAgICAgIGNvbnN0IHN0YXJ0ID0gZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKGFuZ2xlLCB0aGlzLm9wdGlvbnMuc3RhcnRSYWRpdXMsIHRoaXMub3B0aW9ucy5jZW50ZXIpLnN1YihoYWxmU2l6ZSlcbiAgICAgIGNvbnN0IGVuZCA9IGdldFBvaW50RnJvbVJhZGlhbFN5c3RlbShhbmdsZSwgdGhpcy5vcHRpb25zLmVuZFJhZGl1cywgdGhpcy5vcHRpb25zLmNlbnRlcikuc3ViKGhhbGZTaXplKVxuXG4gICAgICByZXR1cm4gbmV3IERyYWdnYWJsZShlbGVtZW50LCB7XG4gICAgICAgIHBhcmVudDogdGhpcy5hcmVhLFxuICAgICAgICBib3VuZDogQm91bmRUb0xpbmUuYm91bmRpbmcoc3RhcnQsIGVuZCksXG4gICAgICAgIHBvc2l0aW9uOiBzdGFydCxcbiAgICAgICAgb246IHtcbiAgICAgICAgICAnZHJhZzptb3ZlJzogKCkgPT4gdGhpcy5kcmF3KClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgdGhpcy5pc0luaXQgPSB0cnVlXG4gICAgdGhpcy5kcmF3KClcbiAgfVxuXG4gIGRyYXcoKSB7XG4gICAgaWYgKCF0aGlzLmlzSW5pdCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy5hcmVhUmVjdGFuZ2xlLnNpemUueCwgdGhpcy5hcmVhUmVjdGFuZ2xlLnNpemUueSlcbiAgICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKClcblxuICAgIGxldCBwb2ludCA9IHRoaXMuZHJhZ2dhYmxlc1swXS5nZXRDZW50ZXIoKVxuICAgIHRoaXMuY29udGV4dC5tb3ZlVG8ocG9pbnQueCwgcG9pbnQueSlcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kcmFnZ2FibGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBwb2ludCA9IHRoaXMuZHJhZ2dhYmxlc1tpXS5nZXRDZW50ZXIoKVxuICAgICAgdGhpcy5jb250ZXh0LmxpbmVUbyhwb2ludC54LCBwb2ludC55KVxuICAgIH1cbiAgICB0aGlzLmNvbnRleHQuY2xvc2VQYXRoKClcbiAgICB0aGlzLmNvbnRleHQubGluZVdpZHRoID0gdGhpcy5vcHRpb25zLmxpbmVXaWR0aFxuICAgIHRoaXMuY29udGV4dC5zdHJva2VTdHlsZSA9IHRoaXMub3B0aW9ucy5zdHJva2VTdHlsZVxuICAgIHRoaXMuY29udGV4dC5zdHJva2UoKVxuICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSB0aGlzLm9wdGlvbnMuZmlsbFN0eWxlXG4gICAgdGhpcy5jb250ZXh0LmZpbGwoKVxuICB9XG59XG4iLCJpbXBvcnQgRHJhZ2dhYmxlIGZyb20gJy4vZHJhZ2dhYmxlJ1xuaW1wb3J0IHsgQm91bmRUb0FyYyB9IGZyb20gJy4vYm91bmRpbmcnXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnRFbWl0dGVyJ1xuXG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gJy4vZ2VvbWV0cnkvcmVjdGFuZ2xlJ1xuaW1wb3J0IHtcbiAgZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtLFxuICBnZXRBbmdsZSxcbiAgbm9ybWFsaXplQW5nbGVcbn0gZnJvbSAnLi9nZW9tZXRyeS9hbmdsZXMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFyY1NsaWRlciBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKGFyZWEsIGVsZW1lbnQsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcih1bmRlZmluZWQsIG9wdGlvbnMpXG4gICAgY29uc3QgYXJlYVJlY3RhbmdsZSA9IFJlY3RhbmdsZS5mcm9tRWxlbWVudChhcmVhLCBhcmVhKVxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY2VudGVyOiBhcmVhUmVjdGFuZ2xlLmdldENlbnRlcigpLFxuICAgICAgcmFkaXVzOiBhcmVhUmVjdGFuZ2xlLmdldE1pblNpZGUoKSAvIDIsXG4gICAgICBzdGFydEFuZ2xlOiBNYXRoLlBJLFxuICAgICAgZW5kQW5nbGU6IDAsXG4gICAgICBhbmdsZXM6IFtNYXRoLlBJLCAtTWF0aC5QSSAvIDQsIDAsIE1hdGguUEkgLyA0LCBNYXRoLlBJIC8gMl0sXG4gICAgICB0aW1lOiA1MDBcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGhpcy5zaGlmdGVkQ2VudGVyID0gdGhpcy5vcHRpb25zLmNlbnRlclxuICAgIHRoaXMuYXJlYSA9IGFyZWFcbiAgICB0aGlzLmluaXQoZWxlbWVudClcbiAgfVxuXG4gIGluaXQoZWxlbWVudCkge1xuICAgIGNvbnN0IGFuZ2xlID0gdGhpcy5vcHRpb25zLnN0YXJ0QW5nbGVcbiAgICBjb25zdCBwb3NpdGlvbiA9IGdldFBvaW50RnJvbVJhZGlhbFN5c3RlbShcbiAgICAgIGFuZ2xlLFxuICAgICAgdGhpcy5vcHRpb25zLnJhZGl1cyxcbiAgICAgIHRoaXMuc2hpZnRlZENlbnRlclxuICAgIClcblxuICAgIHRoaXMuYW5nbGUgPSBhbmdsZVxuICAgIHRoaXMuZHJhZ2dhYmxlID0gbmV3IERyYWdnYWJsZShlbGVtZW50LCB7XG4gICAgICBwYXJlbnQ6IHRoaXMuYXJlYSxcbiAgICAgIGJvdW5kOiBCb3VuZFRvQXJjLmJvdW5kaW5nKFxuICAgICAgICB0aGlzLnNoaWZ0ZWRDZW50ZXIsXG4gICAgICAgIHRoaXMub3B0aW9ucy5yYWRpdXMsXG4gICAgICAgIHRoaXMub3B0aW9ucy5zdGFydEFuZ2xlLFxuICAgICAgICB0aGlzLm9wdGlvbnMuZW5kQW5nbGVcbiAgICAgICksXG4gICAgICBwb3NpdGlvbjogcG9zaXRpb24sXG4gICAgICBvbjoge1xuICAgICAgICAnZHJhZzptb3ZlJzogKCkgPT4gdGhpcy5jaGFuZ2UoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICB1cGRhdGVBbmdsZSgpIHtcbiAgICB0aGlzLmFuZ2xlID0gZ2V0QW5nbGUodGhpcy5zaGlmdGVkQ2VudGVyLCB0aGlzLmRyYWdnYWJsZS5wb3NpdGlvbilcbiAgfVxuXG4gIGNoYW5nZSgpIHtcbiAgICB0aGlzLnVwZGF0ZUFuZ2xlKClcbiAgICAvLyAgICAgIHZhciBhbmdsZSA9IEdlb21ldHJ5LmdldE5lYXJlc3RBbmdsZSh0aGlzLm9wdGlvbnMuYW5nbGVzLCB0aGlzLmFuZ2xlKTtcbiAgICAvLyAgICAgIHRoaXMuc2V0QW5nbGUoYW5nbGUsdGhpcy5vcHRpb25zLnRpbWUpO1xuICAgIHRoaXMuZW1pdCgnYXJjc2xpZGVyOmNoYW5nZScsIHsgYW5nbGU6IHRoaXMuYW5nbGUgfSlcbiAgfVxuXG4gIHNldEFuZ2xlKGFuZ2xlLCB0aW1lKSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oXG4gICAgICB0aGlzLmFuZ2xlLFxuICAgICAgdGhpcy5vcHRpb25zLnJhZGl1cyxcbiAgICAgIHRoaXMuc2hpZnRlZENlbnRlclxuICAgIClcbiAgICB0aGlzLmFuZ2xlID0gbm9ybWFsaXplQW5nbGUoYW5nbGUsIHBvc2l0aW9uKVxuICAgIHRoaXMuZHJhZ2dhYmxlLnBpblBvc2l0aW9uKHBvc2l0aW9uLCB0aW1lfHwwKVxuICAgIHRoaXMuZW1pdCgnYXJjc2xpZGVyOmNoYW5nZScsIHRoaXMuYW5nbGUpXG4gIH1cbn1cbiIsImltcG9ydCBjcmVhdGVDYW52YXMgZnJvbSAnLi91dGlscy9jcmVhdGUtY2FudmFzJ1xuaW1wb3J0IHJhbmdlIGZyb20gJy4vdXRpbHMvcmFuZ2UnXG5pbXBvcnQgUG9pbnQgZnJvbSAnLi9nZW9tZXRyeS9wb2ludCdcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSAnLi9nZW9tZXRyeS9yZWN0YW5nbGUnXG5cbmltcG9ydCB7IGdldERpc3RhbmNlIH0gZnJvbSAnLi9nZW9tZXRyeS9kaXN0YW5jZXMnXG5cbmltcG9ydCB7XG4gIHRvUmFkaWFuLFxuICBnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0sXG4gIGdldEFuZ2xlLFxuICBub3JtYWxpemVBbmdsZVxufSBmcm9tICcuL2dlb21ldHJ5L2FuZ2xlcydcblxuaW1wb3J0IERyYWdnYWJsZSBmcm9tICcuL2RyYWdnYWJsZSdcbmltcG9ydCB7IEJvdW5kVG9BcmMgfSBmcm9tICcuL2JvdW5kaW5nJ1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50RW1pdHRlcidcblxuY29uc3Qgcm5kID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkqMjU1KVxufVxuXG5jb25zdCB0b0hleFN0cmluZyA9IGZ1bmN0aW9uKGRpZ2l0KSB7XG4gIGxldCBzdHIgPSBkaWdpdC50b1N0cmluZygxNilcbiAgd2hpbGUgKHN0ci5sZW5ndGggPCAyKSB7XG4gICAgc3RyID0gJzAnICsgc3RyXG4gIH1cbiAgcmV0dXJuIHN0clxufVxuXG5mdW5jdGlvbiByYW5kb21Db2xvcigpIHtcbiAgcmV0dXJuIGAjJHt0b0hleFN0cmluZyhybmQoKSl9JHt0b0hleFN0cmluZyhybmQoKSl9JHt0b0hleFN0cmluZyhybmQoKSl9YFxufVxuXG5mdW5jdGlvbiBnZXRBcnJheVdpdGhCb3VuZEluZGV4ZXMoaW5kZXgsIGxlbmd0aCkge1xuICBjb25zdCByZXRJbmRleGVzID0gW11cbiAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgIHJldEluZGV4ZXMucHVzaChpbmRleClcbiAgICByZXRJbmRleGVzLnB1c2goKGluZGV4ICsgMSkgJSBsZW5ndGgpXG4gIH1cblxuICByZXR1cm4gcmV0SW5kZXhlc1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFydCBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yIChhcmVhLCBlbGVtZW50cywgb3B0aW9ucz17fSkge1xuICAgIHN1cGVyKHVuZGVmaW5lZCwgb3B0aW9ucylcbiAgICBjb25zdCBhcmVhUmVjdGFuZ2xlID0gUmVjdGFuZ2xlLmZyb21FbGVtZW50KGFyZWEsIGFyZWEpXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjZW50ZXI6IGFyZWFSZWN0YW5nbGUuZ2V0Q2VudGVyKCksXG4gICAgICByYWRpdXM6IGFyZWFSZWN0YW5nbGUuZ2V0TWluU2lkZSgpIC8gMixcbiAgICAgIHRvdWNoUmFkaXVzOiBhcmVhUmVjdGFuZ2xlLmdldE1pblNpZGUoKSAvIDIsXG4gICAgICBib3VuZEFuZ2xlOiBNYXRoLlBJIC8gOSxcbiAgICAgIGZpbGxTdHlsZXM6IHJhbmdlKDAsIGVsZW1lbnRzLmxlbmd0aCkubWFwKCgpID0+IHJhbmRvbUNvbG9yKCkpLFxuICAgICAgaW5pdEFuZ2xlczogcmFuZ2UoLTkwLCAyNzAsIDM2MCAvIGVsZW1lbnRzLmxlbmd0aCkubWFwKChhbmdsZSkgPT4gdG9SYWRpYW4oYW5nbGUpKSxcbiAgICAgIGxpbWl0SW1nOiBudWxsLFxuICAgICAgbGltaXRJbWdPZmZzZXQ6IG5ldyBQb2ludCgwLCAwKVxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0aGlzLmFyZWEgPSBhcmVhXG4gICAgdGhpcy5hcmVhUmVjdGFuZ2xlID0gYXJlYVJlY3RhbmdsZVxuICAgIHRoaXMuaW5pdChlbGVtZW50cylcbiAgfVxuXG4gIGluaXQoZWxlbWVudHMpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNyZWF0ZUNhbnZhcyh0aGlzLmFyZWEsIHRoaXMuYXJlYVJlY3RhbmdsZSlcbiAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gZWxlbWVudHMubWFwKChlbGVtZW50LCBpKSA9PiB7XG4gICAgICBjb25zdCBhbmdsZSA9IHRoaXMub3B0aW9ucy5pbml0QW5nbGVzW2ldXG4gICAgICBjb25zdCBoYWxmU2l6ZSA9IFBvaW50LmVsZW1lbnRTaXplKGVsZW1lbnQpLm11bHQoMC41KVxuICAgICAgY29uc3QgcG9zaXRpb24gPSBnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oXG4gICAgICAgIGFuZ2xlLFxuICAgICAgICB0aGlzLm9wdGlvbnMudG91Y2hSYWRpdXMsXG4gICAgICAgIHRoaXMub3B0aW9ucy5jZW50ZXIuc3ViKGhhbGZTaXplKVxuICAgICAgKVxuXG4gICAgICByZXR1cm4gbmV3IERyYWdnYWJsZShlbGVtZW50LCB7XG4gICAgICAgIHBhcmVudDogdGhpcy5hcmVhLFxuICAgICAgICBib3VuZDogQm91bmRUb0FyYy5ib3VuZGluZyhcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuY2VudGVyLnN1YihoYWxmU2l6ZSksXG4gICAgICAgICAgdGhpcy5vcHRpb25zLnRvdWNoUmFkaXVzLFxuICAgICAgICAgIHRoaXMuZ2V0Qm91bmRBbmdsZShpLCBmYWxzZSksXG4gICAgICAgICAgdGhpcy5nZXRCb3VuZEFuZ2xlKGksIHRydWUpXG4gICAgICAgICksXG4gICAgICAgIHBvc2l0aW9uOiBwb3NpdGlvbixcbiAgICAgICAgb246IHtcbiAgICAgICAgICAnZHJhZzptb3ZlJzogKCkgPT4gdGhpcy5kcmF3KClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgdGhpcy5pc0luaXQgPSB0cnVlXG4gICAgdGhpcy5kcmF3KClcbiAgfVxuXG4gIHVwZGF0ZUFuZ2xlcygpIHtcbiAgICB0aGlzLmFuZ2xlcyA9IHRoaXMuZHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgY29uc3QgaGFsZlNpemUgPSBkcmFnZ2FibGUuZ2V0U2l6ZSgpLm11bHQoMC41KVxuICAgICAgcmV0dXJuIGdldEFuZ2xlKHRoaXMub3B0aW9ucy5jZW50ZXIuc3ViKGhhbGZTaXplKSwgZHJhZ2dhYmxlLnBvc2l0aW9uKVxuICAgIH0pXG4gIH1cblxuICBnZXRCb3VuZEFuZ2xlKGluZGV4LCBpc0Nsb3NzaW5nKSB7XG4gICAgY29uc3Qgc2lnbiA9IGlzQ2xvc3NpbmcgPyAxIDogLTFcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBsZXQgaSA9IChpbmRleCArIHNpZ24pICUgdGhpcy5hbmdsZXMubGVuZ3RoXG4gICAgICBpZiAoaSA8IDApIHtcbiAgICAgICAgaSArPSB0aGlzLmFuZ2xlcy5sZW5ndGhcbiAgICAgIH1cbiAgICAgIHJldHVybiBub3JtYWxpemVBbmdsZSh0aGlzLmFuZ2xlc1tpXSAtIHNpZ24gKiB0aGlzLm9wdGlvbnMuYm91bmRBbmdsZSlcbiAgICB9XG4gIH1cblxuICBkcmF3KCkge1xuICAgIGlmICghdGhpcy5pc0luaXQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMudXBkYXRlQW5nbGVzKClcbiAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMuYXJlYVJlY3RhbmdsZS5zaXplLngsIHRoaXMuYXJlYVJlY3RhbmdsZS5zaXplLnkpXG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKF9kcmFnZ2FibGUsIGluZGV4KSA9PiB7XG4gICAgICB0aGlzLmRyYXdBcmModGhpcy5jb250ZXh0LCB0aGlzLm9wdGlvbnMuY2VudGVyLCB0aGlzLm9wdGlvbnMucmFkaXVzLCBpbmRleClcbiAgICB9KVxuXG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKF9kcmFnZ2FibGUsIGluZGV4KSA9PiB7XG4gICAgICB0aGlzLmRyYXdMaW1pdEltZyhpbmRleClcbiAgICB9KVxuXG4gICAgdGhpcy5lbWl0KCdjaGFydDpkcmF3JylcbiAgfVxuXG4gIGNyZWF0ZUNsb25lKGVsZW1lbnQsIG9wdGlvbnMgPSB7fSkge1xuICAgIGlmICghdGhpcy5pc0luaXQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCByZWN0YW5nbGUgPSBSZWN0YW5nbGUuZnJvbUVsZW1lbnQoZWxlbWVudCwgZWxlbWVudClcbiAgICBjb25zdCBvcHRzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjZW50ZXI6IHJlY3RhbmdsZS5nZXRDZW50ZXIoKSxcbiAgICAgIHJhZGl1czogcmVjdGFuZ2xlLmdldE1pblNpZGUoKSAvIDIsXG4gICAgICBmaWxsU3R5bGVzOiB0aGlzLm9wdGlvbnMuZmlsbFN0eWxlc1xuICAgIH0sIG9wdGlvbnMpXG5cbiAgICBjb25zdCBjYW52YXMgPSBjcmVhdGVDYW52YXMoZWxlbWVudCwgcmVjdGFuZ2xlKVxuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuICAgIGNvbnN0IGNsb25lT2JqID0ge1xuICAgICAgZHJhdzogKCkgPT4ge1xuICAgICAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCByZWN0YW5nbGUuc2l6ZS54LCByZWN0YW5nbGUuc2l6ZS55KVxuICAgICAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoX2RyYWdnYWJsZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICB0aGlzLmRyYXdBcmMoY29udGV4dCwgb3B0cy5jZW50ZXIsIG9wdHMucmFkaXVzLCBpbmRleClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gICAgY2xvbmVPYmouZHJhdygpXG4gICAgcmV0dXJuIGNsb25lT2JqXG4gIH1cblxuICBnZXRGaWxsU3R5bGUoaW5kZXgpIHtcbiAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5maWxsU3R5bGVzW2luZGV4XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpcy5vcHRpb25zLmZpbGxTdHlsZXNbaW5kZXhdID0gdGhpcy5vcHRpb25zLmZpbGxTdHlsZXNbaW5kZXhdLmNhbGwodGhpcylcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5maWxsU3R5bGVzW2luZGV4XVxuICB9XG5cbiAgZHJhd0FyYyhjb250ZXh0LCBjZW50ZXIsIHJhZGl1cywgaW5kZXgpIHtcbiAgICBjb25zdCBzdGFydEFuZ2xlID0gdGhpcy5hbmdsZXNbaW5kZXhdXG4gICAgY29uc3QgZW5kQW5nbGUgPSB0aGlzLmFuZ2xlc1soaW5kZXgrMSkgJSB0aGlzLmFuZ2xlcy5sZW5ndGhdXG4gICAgY29uc3QgY29sb3IgPSB0aGlzLmdldEZpbGxTdHlsZShpbmRleClcblxuICAgIGNvbnRleHQuYmVnaW5QYXRoKClcbiAgICBjb250ZXh0Lm1vdmVUbyhjZW50ZXIueCwgY2VudGVyLnkpXG4gICAgY29udGV4dC5hcmMoY2VudGVyLngsIGNlbnRlci55LCByYWRpdXMsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlLCBmYWxzZSlcbiAgICBjb250ZXh0LmxpbmVUbyhjZW50ZXIueCwgY2VudGVyLnkpXG4gICAgY29udGV4dC5jbG9zZVBhdGgoKVxuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gY29sb3JcbiAgICBjb250ZXh0LmZpbGwoKVxuICB9XG5cbiAgZHJhd0xpbWl0SW1nKGluZGV4KSB7XG4gICAgbGV0IHBvaW50LCBpbWdcbiAgICBpZiAodGhpcy5vcHRpb25zLmxpbWl0SW1nKSB7XG4gICAgICBpbWcgPSB0aGlzLm9wdGlvbnMubGltaXRJbWcgaW5zdGFuY2VvZiBBcnJheSA/IHRoaXMub3B0aW9ucy5saW1pdEltZ1tpbmRleF0gOiB0aGlzLm9wdGlvbnMubGltaXRJbWdcbiAgICB9XG5cbiAgICBpZiAoaW1nKSB7XG4gICAgICBjb25zdCBhbmdsZSA9IG5vcm1hbGl6ZUFuZ2xlKHRoaXMuYW5nbGVzW2luZGV4XSlcbiAgICAgIHBvaW50ID0gbmV3IFBvaW50KDAsIC1pbWcuaGVpZ2h0IC8gMilcbiAgICAgIHBvaW50ID0gcG9pbnQuYWRkKHRoaXMub3B0aW9ucy5saW1pdEltZ09mZnNldClcbiAgICAgIHRoaXMuY29udGV4dC50cmFuc2xhdGUodGhpcy5hcmVhUmVjdGFuZ2xlLnNpemUueCAvIDIsIHRoaXMuYXJlYVJlY3RhbmdsZS5zaXplLnkgLyAyKVxuICAgICAgdGhpcy5jb250ZXh0LnJvdGF0ZShhbmdsZSlcbiAgICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UoaW1nLCBwb2ludC54LCBwb2ludC55KVxuICAgICAgdGhpcy5jb250ZXh0LnNldFRyYW5zZm9ybSgxLCAwLCAwLCAxLCAwLCAwKVxuICAgIH1cbiAgfVxuXG4gIGdldEFuZ2xlc0RpZmYoKSB7XG4gICAgY29uc3QgYW5nbGVzID0gdGhpcy5hbmdsZXMuc2xpY2UoMSlcbiAgICBsZXQgYmFzZUFuZ2xlID0gdGhpcy5hbmdsZXNbMF1cblxuICAgIGFuZ2xlcy5wdXNoKGJhc2VBbmdsZSlcbiAgICByZXR1cm4gYW5nbGVzLm1hcCgoYW5nbGUpID0+IHtcbiAgICAgIGNvbnN0IGRpZmZBbmdsZSA9IG5vcm1hbGl6ZUFuZ2xlKGFuZ2xlIC0gYmFzZUFuZ2xlKVxuICAgICAgYmFzZUFuZ2xlID0gYW5nbGVcbiAgICAgIHJldHVybiBkaWZmQW5nbGVcbiAgICB9KVxuICB9XG5cbiAgZ2V0UGVyY2VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRBbmdsZXNEaWZmKCkubWFwKChkaWZmQW5nbGUpID0+IGRpZmZBbmdsZSAvICgyICogTWF0aC5QSSkpXG4gIH1cblxuICBnZXRBcmNCaXNlY3RyaXhzKCkge1xuICAgIHJldHVybiB0aGlzLmdldEFuZ2xlc0RpZmYoKS5tYXAoKGRpZmZBbmdsZSwgaSkgPT4ge1xuICAgICAgcmV0dXJuIG5vcm1hbGl6ZUFuZ2xlKHRoaXMuYW5nbGVzW2ldICsgZGlmZkFuZ2xlIC8gMilcbiAgICB9KVxuICB9XG5cbiAgZ2V0QXJjT25Qb2ludChwb2ludCkge1xuICAgIGNvbnN0IGFuZ2xlID0gZ2V0QW5nbGUodGhpcy5vcHRpb25zLmNlbnRlciwgcG9pbnQpXG4gICAgY29uc3QgcmFkaXVzID0gZ2V0RGlzdGFuY2UodGhpcy5vcHRpb25zLmNlbnRlciwgcG9pbnQpXG5cbiAgICBpZiAocmFkaXVzID4gdGhpcy5vcHRpb25zLnJhZGl1cykge1xuICAgICAgcmV0dXJuIC0xXG4gICAgfVxuXG4gICAgbGV0IG9mZnNldCA9IC0xLCBpLCBqXG4gICAgZm9yIChpID0gMDsgaSA8IHRoaXMuYW5nbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAob2Zmc2V0ID09PSAtMSB8fCB0aGlzLmFuZ2xlc1tvZmZzZXRdID4gdGhpcy5hbmdsZXNbaV0pIHtcbiAgICAgICAgb2Zmc2V0ID0gaVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGkgPSAwLCBqID0gb2Zmc2V0OyBpIDwgdGhpcy5hbmdsZXMubGVuZ3RoOyBpKyssIGogPSAoaSArIG9mZnNldCkgJSB0aGlzLmFuZ2xlcy5sZW5ndGgpIHtcbiAgICAgIGlmIChhbmdsZSA8IHRoaXMuYW5nbGVzW2pdKSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuICAgIGlmICgtLWogPCAwKSB7XG4gICAgICBqICs9IHRoaXMuYW5nbGVzLmxlbmd0aFxuICAgIH1cbiAgICByZXR1cm4galxuICB9XG5cbiAgc2V0QW5nbGVzKGFuZ2xlcykge1xuICAgIHRoaXMuYW5nbGVzID0gYW5nbGVzXG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSwgaSkgPT4ge1xuICAgICAgY29uc3QgYW5nbGUgPSB0aGlzLmFuZ2xlc1tpXVxuICAgICAgY29uc3QgaGFsZlNpemUgPSBkcmFnZ2FibGUuZ2V0U2l6ZSgpLm11bHQoMC41KVxuICAgICAgY29uc3QgcG9zaXRpb24gPSBnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oXG4gICAgICAgIGFuZ2xlLFxuICAgICAgICB0aGlzLm9wdGlvbnMudG91Y2hSYWRpdXMsXG4gICAgICAgIHRoaXMub3B0aW9ucy5jZW50ZXIuc3ViKGhhbGZTaXplKVxuICAgICAgKVxuXG4gICAgICBkcmFnZ2FibGUubW92ZUFuZFNhdmUocG9zaXRpb24pXG4gICAgfSlcbiAgICB0aGlzLmRyYXcoKVxuICB9XG5cbiAgc2V0QWN0aXZlQXJjKGluZGV4KSB7XG4gICAgY29uc3QgZW5hYmxlSW5kZXhlcyA9IGdldEFycmF5V2l0aEJvdW5kSW5kZXhlcyhpbmRleCwgdGhpcy5kcmFnZ2FibGVzLmxlbmd0aClcbiAgICB0aGlzLmFjdGl2ZUFyY0luZGV4ID0gaW5kZXhcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlLCBpKSA9PiB7XG4gICAgICBkcmFnZ2FibGUuZW5hYmxlID0gZW5hYmxlSW5kZXhlcy5pbmRleE9mKGkpICE9PSAtMVxuICAgIH0pXG4gICAgdGhpcy5kcmF3KClcbiAgfVxufVxuIl0sIm5hbWVzIjpbImdldFN1bVZhbHVlT2ZTdHlsZVJ1bGVzIiwiZWxlbWVudCIsInJ1bGVzIiwicmVkdWNlIiwic3VtIiwicnVsZSIsInBhcnNlSW50Iiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIlBvaW50IiwieCIsInkiLCJwIiwiayIsInBhcmVudCIsInBhcmVudE5vZGUiLCJlbGVtZW50UmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInBhcmVudFJlY3QiLCJsZWZ0IiwidG9wIiwiaXNDb250ZW50Qm94U2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwiUmVjdGFuZ2xlIiwicG9zaXRpb24iLCJzaXplIiwiYWRkIiwibXVsdCIsInJlY3QiLCJNYXRoIiwibWluIiwibWF4Iiwic3ViIiwicmVjdGFuZ2xlIiwiaW5jbHVkZVBvaW50IiwiZ2V0UDMiLCJheGlzIiwic2VsQXhpcyIsImNyb3NzUmVjdGFuZ2xlIiwiYW5kIiwidGhpc0NlbnRlciIsImdldENlbnRlciIsInJlY3RDZW50ZXIiLCJzaWduIiwib2Zmc2V0IiwiZWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzdHlsZSIsImlzQ29uc2lkZXJUcmFuc2xhdGUiLCJlbGVtZW50T2Zmc2V0IiwiZWxlbWVudFNpemUiLCJoYXNDbGFzcyIsImMiLCJyZSIsIlJlZ0V4cCIsInRlc3QiLCJjbGFzc05hbWUiLCJhZGRDbGFzcyIsInJlcGxhY2UiLCJyZW1vdmVDbGFzcyIsImdldERlZmF1bHRQYXJlbnQiLCJ0YWdOYW1lIiwiRXZlbnRFbWl0dGVyIiwiY29udGV4dCIsIm9wdGlvbnMiLCJldmVudHMiLCJvbiIsIk9iamVjdCIsImVudHJpZXMiLCJldmVudE5hbWUiLCJmbiIsImludGVycnVwdGVkIiwiYXJncyIsInNsaWNlIiwiY2FsbCIsImFyZ3VtZW50cyIsImZ1bmMiLCJhcHBseSIsInB1c2giLCJ1bnNoaWZ0IiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwiZ2V0RGlzdGFuY2UiLCJwMSIsInAyIiwiZHgiLCJkeSIsInNxcnQiLCJnZXRYRGlmZmVyZW5jZSIsImFicyIsImdldFlEaWZmZXJlbmNlIiwidHJhbnNmb3JtZWRTcGFjZURpc3RhbmNlRmFjdG9yeSIsInBvdyIsImluZGV4T2ZOZWFyZXN0UG9pbnQiLCJhcnIiLCJ2YWwiLCJyYWRpdXMiLCJnZXREaXN0YW5jZUZ1bmMiLCJpIiwidGVtcCIsImxlbmd0aCIsImRpcmVjdENyb3NzaW5nIiwiTDFQMSIsIkwxUDIiLCJMMlAxIiwiTDJQMiIsImsxIiwiazIiLCJiMSIsImIyIiwiYm91bmRUb0xpbmUiLCJBIiwiQiIsIlAiLCJBUCIsIkFCIiwiYWIyIiwiYXBfYWIiLCJ0IiwiZ2V0UG9pbnRPbkxpbmVCeUxlbmdodCIsIkxQMSIsIkxQMiIsImxlbmdodCIsInBlcmNlbnQiLCJhZGRQb2ludFRvQm91bmRQb2ludHMiLCJib3VuZHBvaW50cyIsInBvaW50IiwiaXNSaWdodCIsInJlc3VsdCIsImZpbHRlciIsImJQb2ludCIsImdldEFuZ2xlRGlmZiIsImFscGhhIiwiYmV0YSIsIm1pbkFuZ2xlIiwibWF4QW5nbGUiLCJQSSIsImdldEFuZ2xlIiwiZGlmZiIsIm5vcm1hbGl6ZUFuZ2xlIiwiYXRhbjIiLCJ0b1JhZGlhbiIsImFuZ2xlIiwiYm91bmRBbmdsZSIsImRtaW4iLCJkbWF4IiwiZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtIiwiY2VudGVyIiwiY29zIiwic2luIiwiQm91bmQiLCJfc2l6ZSIsImluc3RhbmNlIiwiYm91bmQiLCJiaW5kIiwiQm91bmRUb1JlY3RhbmdsZSIsImNhbGNQb2ludCIsImNsb25lIiwicmVjdFAyIiwiQm91bmRUb0VsZW1lbnQiLCJmcm9tRWxlbWVudCIsIkJvdW5kVG9MaW5lWCIsInN0YXJ0WSIsImVuZFkiLCJCb3VuZFRvTGluZVkiLCJzdGFydFgiLCJlbmRYIiwiQm91bmRUb0xpbmUiLCJzdGFydFBvaW50IiwiZW5kUG9pbnQiLCJzb21lSyIsImNvc0JldGEiLCJzaW5CZXRhIiwicG9pbnQyIiwibmV3RW5kUG9pbnQiLCJwb2ludENyb3NzaW5nIiwiQm91bmRUb0NpcmNsZSIsIkJvdW5kVG9BcmMiLCJzdGFydEFuZ2xlIiwiZW5kQW5nbGUiLCJfc3RhcnRBbmdsZSIsIl9lbmRBbmdsZSIsImFycmF5IiwicmFuZ2UiLCJzdGFydCIsInN0b3AiLCJzdGVwIiwiQmFzaWNTdHJhdGVneSIsIk5vdENyb3NzaW5nU3RyYXRlZ3kiLCJyZWN0YW5nbGVMaXN0IiwiaW5kZXhlc09mTmV3cyIsInN0YXRpY1JlY3RhbmdsZUluZGV4ZXMiLCJpbmRleGVzIiwiX3JlY3QiLCJmb3JFYWNoIiwicmVtb3ZhYmxlIiwiaW5kZXhPZlN0YXRpYyIsInN0YXRpY1JlY3QiLCJtb3ZlVG9Cb3VuZCIsInNvbWUiLCJib3VuZFJlY3QiLCJnZXRTcXVhcmUiLCJvZGxEcmFnZ2FibGVzTGlzdCIsIm5ld0RyYWdnYWJsZXMiLCJpbmRleE9mTmV3cyIsImRyYWdnYWJsZXMiLCJjb25jYXQiLCJkcmFnZ2FibGUiLCJGbG9hdExlZnRTdHJhdGVneSIsImFzc2lnbiIsInBhZGRpbmdUb3BMZWZ0IiwicGFkZGluZ0JvdHRvbVJpZ2h0IiwieUdhcEJldHdlZW5EcmFnZ2FibGVzIiwiZ2V0UG9zaXRpb24iLCJfaW5kZXhlc09mTmV3cyIsImdldFAyIiwiYm91bmRhcnlQb2ludHMiLCJyZWN0SW5kZXgiLCJpc1ZhbGlkIiwibmV3TGlzdCIsImxpc3RPbGRQb3NpdGlvbiIsIm1hcCIsIm5ld0RyYWdnYWJsZSIsIkZsb2F0UmlnaHRTdHJhdGVneSIsInBhZGRpbmdUb3BSaWdodCIsInBhZGRpbmdCb3R0b21MZWZ0IiwicGFkZGluZ0JvdHRvbU5lZ0xlZnQiLCJnZXRQNCIsImFkZFRvRGVmYXVsdFNjb3BlIiwidGFyZ2V0IiwiZGVmYXVsdFNjb3BlIiwiYWRkVGFyZ2V0IiwiVGFyZ2V0IiwidW5kZWZpbmVkIiwidGltZUVuZCIsInRpbWVFeGNhbmdlIiwicG9zaXRpb25pbmdTdHJhdGVneSIsInN0cmF0ZWd5IiwiZ2V0UmVjdGFuZ2xlIiwidGFyZ2V0cyIsImVtaXR0ZXIiLCJlbWl0IiwiaW5pdCIsImluZGV4ZXNPZk5ldyIsInBvc2l0aW9uaW5nIiwib2xkRHJhZ2dhYmxlcyIsInNvcnRpbmciLCJyZWN0YW5nbGVzIiwiaW5uZXJEcmFnZ2FibGVzIiwic2V0UG9zaXRpb24iLCJjYXRjaERyYWdnYWJsZSIsInRhcmdldFJlY3RhbmdsZSIsImRyYWdnYWJsZVNxdWFyZSIsInNjb3BlcyIsInNjb3BlIiwicmVtb3ZlSXRlbSIsIm5ld0RyYWdnYWJsZXNJbmRleCIsImFkZFJlbW92ZU9uTW92ZSIsInRpbWUiLCJtb3ZlIiwiaW5pdGlhbFBvc2l0aW9uIiwicHVzaElubmVyRHJhZ2dhYmxlIiwicmVtb3ZlSGFuZGxlciIsInJlbW92ZSIsInVuc3Vic2NyaWJlIiwiU2NvcGUiLCJkcmFnRW5kQWN0aW9uIiwib25FbmQiLCJzaG90VGFyZ2V0cyIsInNvcnQiLCJhIiwiYiIsInBpblBvc2l0aW9uIiwicmVzZXQiLCJyZWZyZXNoIiwicG9zaXRpb25zIiwibWVzc2FnZSIsInRhcmdldEluZGV4ZXMiLCJjdXJyZW50U2NvcGUiLCJhZGREcmFnZ2FibGVUb1Njb3BlIiwiYWRkRHJhZ2dhYmxlIiwiRHJhZ2dhYmxlIiwiaW50ZXJydXB0IiwiYWRkVGFyZ2V0VG9TY29wZSIsInByZXBlbmRPbiIsImNoZWNrU3VwcG9ydFBhc3NpdmVFdmVudHMiLCJwYXNzaXZlU3VwcG9ydGVkIiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIl9lcnIiLCJpc1N1cHBvcnRQYXNzaXZlRXZlbnRzIiwiaXNUb3VjaCIsIm1vdXNlRXZlbnRzIiwiZW5kIiwidG91Y2hFdmVudHMiLCJ0cmFuc2Zvcm1Qcm9wZXJ0eSIsImdldFN0eWxlUHJvcGVydHkiLCJ0cmFuc2l0aW9uUHJvcGVydHkiLCJnZXRUb3VjaEJ5SUQiLCJ0b3VjaElkIiwiY2hhbmdlZFRvdWNoZXMiLCJpZGVudGlmaWVyIiwicHJldmVudERvdWJsZUluaXQiLCJleGlzdGluZyIsImNvcHlTdHlsZXMiLCJzb3VyY2UiLCJkZXN0aW5hdGlvbiIsImNzIiwia2V5IiwiY2hpbGRyZW4iLCJfZW5hYmxlIiwic3RhcnRCb3VuZGluZyIsInN0YXJ0UG9zaXRpb25pbmciLCJzdGFydExpc3RlbmluZyIsImJvdW5kaW5nIiwiX3NldERlZmF1bHRUcmFuc2l0aW9uIiwicGlubmVkUG9zaXRpb24iLCJfZHJhZ1N0YXJ0IiwiZXZlbnQiLCJkcmFnU3RhcnQiLCJfZHJhZ01vdmUiLCJkcmFnTW92ZSIsIl9kcmFnRW5kIiwiZHJhZ0VuZCIsIl9uYXRpdmVEcmFnU3RhcnQiLCJuYXRpdmVEcmFnU3RhcnQiLCJfbmF0aXZlRHJhZ092ZXIiLCJuYXRpdmVEcmFnT3ZlciIsIl9uYXRpdmVEcmFnRW5kIiwibmF0aXZlRHJhZ0VuZCIsIl9uYXRpdmVEcm9wIiwibmF0aXZlRHJvcCIsIl9zY3JvbGwiLCJvblNjcm9sbCIsImhhbmRsZXIiLCJwYXNzaXZlIiwiX3RyYW5zZm9ybVBvc2l0aW9uIiwiZ2V0U2l6ZSIsInRyYW5zaXRpb24iLCJ0cmFuc2l0aW9uQ3NzIiwidHJhbnNmb3JtIiwidHJhbnNsYXRlQ3NzIiwidWEiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJtc2llIiwiaXNTaWxlbnQiLCJkZXRlcm1pbmVEaXJlY3Rpb24iLCJfc2V0VHJhbnNpdGlvbiIsIl9zZXRUcmFuc2xhdGUiLCJzaWxlbnQiLCJsZWZ0RGlyZWN0aW9uIiwicmlnaHREaXJlY3Rpb24iLCJ1cERpcmVjdGlvbiIsImRvd25EaXJlY3Rpb24iLCJjdXJyZW50RXZlbnQiLCJpc1RvdWNoRXZlbnQiLCJUb3VjaEV2ZW50IiwidG91Y2hQb2ludCIsIl9zdGFydFRvdWNoUG9pbnQiLCJwYWdlWCIsImNsaWVudFgiLCJwYWdlWSIsImNsaWVudFkiLCJfc3RhcnRQb3NpdGlvbiIsIl90b3VjaElkIiwiX3N0YXJ0U2Nyb2xsUG9pbnQiLCJzY3JvbGxYIiwic2Nyb2xsWSIsInN0b3BQcm9wYWdhdGlvbiIsIkhUTUxJbnB1dEVsZW1lbnQiLCJmb2N1cyIsIm5hdGl2ZURyYWdBbmREcm9wIiwicHJldmVudERlZmF1bHQiLCJpc1NhZmFyaSIsImVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcE9uVG91Y2giLCJlbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3BGb3JBbGwiLCJlbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3AiLCJpc0RyYWdnaW5nIiwidG91Y2giLCJzY3JvbGxQb2ludCIsInJlbW92ZUF0dHJpYnV0ZSIsIl9ldmVudCIsImRhdGFUcmFuc2ZlciIsInNldERhdGEiLCJlZmZlY3RBbGxvd2VkIiwiZHJvcEVmZmVjdCIsImNsb25lZEVsZW1lbnQiLCJjbG9uZU5vZGUiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJlbXVsYXRpb25EcmFnZ2FibGUiLCJwYXJlbnRSZWN0UG9pbnQiLCJkZXN0cm95IiwicmVtb3ZlQ2hpbGQiLCJyZXNldEVtaXR0ZXIiLCJfcGFyZW50IiwiX2hhbmRsZXIiLCJlbmFibGUiLCJMaXN0IiwiaW5pdERyYWdnYWJsZSIsIm9uTW92ZSIsInNvcnRlZERyYWdnYWJsZXMiLCJnZXRTb3J0ZWREcmFnZ2FibGVzIiwicGlubmVkUG9zaXRpb25zIiwiY3VycmVudEluZGV4IiwidGFyZ2V0SW5kZXgiLCJkaXN0YW5jZUZ1bmMiLCJyZXNldFBvc2l0aW9uVG9Jbml0aWFsIiwiQXJyYXkiLCJpbml0aWFsUG9zaXRpb25zIiwibGlzdCIsInJlc2V0T24iLCJqIiwiZHJhZ2dhYmxlQSIsImRyYWdnYWJsZUIiLCJnZXRDdXJyZW50UGlubmVkUG9zaXRpb25zIiwicGFyZW50RWxlbWVudCIsImVsZW1lbnRzIiwiZnJvbSIsImFycmF5TW92ZSIsInRvIiwiQnViYmxpbmdMaXN0IiwiYXV0b0RldGVjdFZlcnRpY2FsR2FwIiwic29ydGVkIiwidmVydGljYWxHYXAiLCJzdGFydFBvc2l0aW9uIiwiYnVibGluZyIsImN1cnJlbnREcmFnZ2FibGUiLCJjdXJyZW50UG9zaXRpb24iLCJjb21wYXJlIiwic2V0U3R5bGUiLCJjc3NUZXh0IiwiaGFzT3duUHJvcGVydHkiLCJhcHBlbmRGaXJzdENoaWxkIiwibm9kZSIsImZpcnN0Q2hpbGQiLCJpbnNlcnRCZWZvcmUiLCJjcmVhdGVDYW52YXMiLCJhcmVhIiwicmVjdGFnbGUiLCJjYW52YXMiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiU3BpZGVyIiwiYXJlYVJlY3RhbmdsZSIsImRBbmdsZSIsInN0YXJ0UmFkaXVzIiwiZW5kUmFkaXVzIiwiZ2V0TWluU2lkZSIsImxpbmVXaWR0aCIsInN0cm9rZVN0eWxlIiwiZmlsbFN0eWxlIiwiZ2V0Q29udGV4dCIsImhhbGZTaXplIiwiZHJhdyIsImlzSW5pdCIsImNsZWFyUmVjdCIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsImNsb3NlUGF0aCIsInN0cm9rZSIsImZpbGwiLCJBcmNTbGlkZXIiLCJhbmdsZXMiLCJzaGlmdGVkQ2VudGVyIiwiY2hhbmdlIiwidXBkYXRlQW5nbGUiLCJybmQiLCJyb3VuZCIsInJhbmRvbSIsInRvSGV4U3RyaW5nIiwiZGlnaXQiLCJzdHIiLCJ0b1N0cmluZyIsInJhbmRvbUNvbG9yIiwiZ2V0QXJyYXlXaXRoQm91bmRJbmRleGVzIiwicmV0SW5kZXhlcyIsIkNoYXJ0IiwidG91Y2hSYWRpdXMiLCJmaWxsU3R5bGVzIiwiaW5pdEFuZ2xlcyIsImxpbWl0SW1nIiwibGltaXRJbWdPZmZzZXQiLCJnZXRCb3VuZEFuZ2xlIiwiaXNDbG9zc2luZyIsInVwZGF0ZUFuZ2xlcyIsIl9kcmFnZ2FibGUiLCJkcmF3QXJjIiwiZHJhd0xpbWl0SW1nIiwib3B0cyIsImNsb25lT2JqIiwiY29sb3IiLCJnZXRGaWxsU3R5bGUiLCJhcmMiLCJpbWciLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJkcmF3SW1hZ2UiLCJzZXRUcmFuc2Zvcm0iLCJiYXNlQW5nbGUiLCJkaWZmQW5nbGUiLCJnZXRBbmdsZXNEaWZmIiwibW92ZUFuZFNhdmUiLCJlbmFibGVJbmRleGVzIiwiYWN0aXZlQXJjSW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUFBLFNBQVNBLHVCQUFULENBQWlDQyxPQUFqQyxFQUEwQ0MsS0FBMUMsRUFBaUQ7RUFDL0MsU0FBT0EsS0FBSyxDQUFDQyxNQUFOLENBQWEsVUFBQ0MsR0FBRCxFQUFNQyxJQUFOLEVBQWU7RUFDakMsV0FBT0QsR0FBRyxHQUFHRSxRQUFRLENBQUNDLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0JQLE9BQXhCLEVBQWlDSSxJQUFqQyxL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
