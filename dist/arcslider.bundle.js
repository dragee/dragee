(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Dragee", [], factory);
	else if(typeof exports === 'object')
		exports["Dragee"] = factory();
	else
		root["Dragee"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/arcslider.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/desandro-get-style-property/get-style-property.js":
/*!************************************************************************!*\
  !*** ./node_modules/desandro-get-style-property/get-style-property.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * getStyleProperty v1.0.4
 * original by kangax
 * http://perfectionkills.com/feature-testing-css-properties/
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false, exports: false, module: false */

( function( window ) {

'use strict';

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
if ( true ) {
  // AMD
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
    return getStyleProperty;
  }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {}

})( window );


/***/ }),

/***/ "./node_modules/remove-array-items/dist/remove-array-items.esm.js":
/*!************************************************************************!*\
  !*** ./node_modules/remove-array-items/dist/remove-array-items.esm.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Remove a range of items from an array
 *
 * @function removeItems
 * @param {Array<*>} arr The target array
 * @param {number} startIdx The index to begin removing from (inclusive)
 * @param {number} removeCount How many items to remove
 */
function removeItems (arr, startIdx, removeCount) {
  var i, length = arr.length;

  if (startIdx >= length || removeCount === 0) {
    return
  }

  removeCount = (startIdx + removeCount > length ? length - startIdx : removeCount);

  var len = length - removeCount;

  for (i = startIdx; i < len; ++i) {
    arr[i] = arr[i + removeCount];
  }

  arr.length = len;
}

/* harmony default export */ __webpack_exports__["default"] = (removeItems);


/***/ }),

/***/ "./src/arcslider.js":
/*!**************************!*\
  !*** ./src/arcslider.js ***!
  \**************************/
/*! exports provided: ArcSlider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArcSlider", function() { return ArcSlider; });
/* harmony import */ var _geometry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./geometry */ "./src/geometry.js");
/* harmony import */ var _draggable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./draggable */ "./src/draggable.js");
/* harmony import */ var _bound__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bound */ "./src/bound.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var ArcSlider =
/*#__PURE__*/
function () {
  function ArcSlider(area, element) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, ArcSlider);

    var areaRectangle = _geometry__WEBPACK_IMPORTED_MODULE_0__["Geometry"].createRectangleFromElement(area, area);
    var halfSize = _geometry__WEBPACK_IMPORTED_MODULE_0__["Geometry"].getSizeOfElement(element).mult(0.5);
    this.options = Object.assign({
      center: areaRectangle.getCenter(),
      radius: areaRectangle.getMinSide() / 2,
      startAngle: Math.PI,
      endAngle: 0,
      angles: [Math.PI, -Math.PI / 4, 0, Math.PI / 4, Math.PI / 2],
      onChange: function onChange() {},
      time: 500
    }, options);
    this.shiftedCenter = this.options.center.sub(halfSize);
    this.onChange = this.options.onChange;
    this.area = area;
    this.init(element);
  }

  _createClass(ArcSlider, [{
    key: "init",
    value: function init(element) {
      var _this = this;

      var angle = this.options.startAngle;
      var position = _geometry__WEBPACK_IMPORTED_MODULE_0__["Geometry"].getPointFromRadialSystem(angle, this.options.radius, this.shiftedCenter);
      var bound = Object(_bound__WEBPACK_IMPORTED_MODULE_2__["boundToArc"])(this.shiftedCenter, this.options.radius, this.options.startAngle, this.options.endAngle);
      this.angle = angle;
      this.draggable = new _draggable__WEBPACK_IMPORTED_MODULE_1__["Draggable"](element, {
        parent: this.area,
        bound: bound,
        position: position,
        onMove: function onMove() {
          _this.change();

          return true;
        }
      });
    }
  }, {
    key: "updateAngle",
    value: function updateAngle() {
      this.angle = _geometry__WEBPACK_IMPORTED_MODULE_0__["Geometry"].getAngle(this.shiftedCenter, this.draggable.position);
    }
  }, {
    key: "change",
    value: function change() {
      this.updateAngle(); //      var angle = Geometry.getNearestAngle(this.options.angles, this.angle);
      //      this.setAngle(angle,this.options.time);

      this.onChange(this.angle);
    }
  }, {
    key: "setAngle",
    value: function setAngle(angle, time) {
      var position = _geometry__WEBPACK_IMPORTED_MODULE_0__["Geometry"].getPointFromRadialSystem(this.angle, this.options.radius, this.shiftedCenter);
      this.angle = _geometry__WEBPACK_IMPORTED_MODULE_0__["Geometry"].normalizeAngle(angle, position);
      this.draggable.move(position, time || 0, true, true);
      this.onChange(this.angle);
    }
  }]);

  return ArcSlider;
}();



/***/ }),

/***/ "./src/bound.js":
/*!**********************!*\
  !*** ./src/bound.js ***!
  \**********************/
/*! exports provided: boundToRectangle, boundToElement, boundToLineX, boundToLineY, boundToLine, boundToCircle, boundToArc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boundToRectangle", function() { return boundToRectangle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boundToElement", function() { return boundToElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boundToLineX", function() { return boundToLineX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boundToLineY", function() { return boundToLineY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boundToLine", function() { return boundToLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boundToCircle", function() { return boundToCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boundToArc", function() { return boundToArc; });
/* harmony import */ var _geometry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./geometry */ "./src/geometry.js");

function boundToRectangle(rectangle) {
  return function (point, size) {
    var calcPoint = point.clone(),
        rectP2 = rectangle.getP3();

    if (rectangle.position.x > calcPoint.x) {
      calcPoint.x = rectangle.position.x;
    }

    if (rectangle.position.y > calcPoint.y) {
      calcPoint.y = rectangle.position.y;
    }

    if (rectP2.x < calcPoint.x + size.x) {
      calcPoint.x = rectP2.x - size.x;
    }

    if (rectP2.y < calcPoint.y + size.y) {
      calcPoint.y = rectP2.y - size.y;
    }

    return calcPoint;
  };
}
function boundToElement(element, parent) {
  var retFunc = function retFunc() {
    return bound.apply(this, arguments);
  };

  var bound;

  retFunc.refresh = function () {
    bound = boundToRectangle(_geometry__WEBPACK_IMPORTED_MODULE_0__["Geometry"].createRectangleFromElement(element, parent));
  };

  retFunc.refresh();
  return retFunc;
}
function boundToLineX(x, startY, endY) {
  return function (point, size) {
    var calcPoint = point.clone();
    calcPoint.x = x;

    if (startY > calcPoint.y) {
      calcPoint.y = startY;
    }

    if (endY < calcPoint.y + size.y) {
      calcPoint.y = endY - size.y;
    }

    return calcPoint;
  };
}
function boundToLineY(y, startX, endX) {
  return function (point, size) {
    var calcPoint = point.clone();
    calcPoint.y = y;

    if (startX > calcPoint.x) {
      calcPoint.x = startX;
    }

    if (endX < calcPoint.x + size.x) {
      calcPoint.x = endX - size.x;
    }

    return calcPoint;
  };
}
function boundToLine(start, end) {
  var alpha = Math.atan2(end.y - start.y, end.x - start.x),
      beta = alpha + Math.PI / 2,
      someK = 10,
      cosBeta = Math.cos(beta),
      sinBeta = Math.sin(beta);
  return function (point, size) {
    var point2 = new _geometry__WEBPACK_IMPORTED_MODULE_0__["Point"](point.x + someK * cosBeta, point.y + someK * sinBeta),
        newEnd = _geometry__WEBPACK_IMPORTED_MODULE_0__["Geometry"].getPointInLineByLenght(end, start, size.x);
    var pointCrossing = _geometry__WEBPACK_IMPORTED_MODULE_0__["Geometry"].directCrossing(start, end, point, point2);
    pointCrossing = _geometry__WEBPACK_IMPORTED_MODULE_0__["Geometry"].boundToLine(start, newEnd, pointCrossing);
    return pointCrossing;
  };
}
function boundToCircle(center, radius) {
  return function (point, _size) {
    var boundedPoint = _geometry__WEBPACK_IMPORTED_MODULE_0__["Geometry"].getPointInLineByLenght(center, point, radius);
    return boundedPoint;
  };
}
function boundToArc(center, radius, startAgle, endAngle) {
  return function (point, _size) {
    var boundStartAngle = typeof startAgle === 'function' ? startAgle() : startAgle;
    var boundEndtAngle = typeof startAgle === 'function' ? endAngle() : endAngle;
    var angle = _geometry__WEBPACK_IMPORTED_MODULE_0__["Geometry"].getAngle(center, point);
    angle = _geometry__WEBPACK_IMPORTED_MODULE_0__["Geometry"].normalizeAngle(angle);
    angle = _geometry__WEBPACK_IMPORTED_MODULE_0__["Geometry"].boundAngle(boundStartAngle, boundEndtAngle, angle);
    return _geometry__WEBPACK_IMPORTED_MODULE_0__["Geometry"].getPointFromRadialSystem(angle, radius, center);
  };
}

/***/ }),

/***/ "./src/draggable.js":
/*!**************************!*\
  !*** ./src/draggable.js ***!
  \**************************/
/*! exports provided: Draggable, events */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Draggable", function() { return Draggable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "events", function() { return events; });
/* harmony import */ var _utils_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/classes */ "./src/utils/classes.js");
/* harmony import */ var _utils_getdefaultparent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/getdefaultparent */ "./src/utils/getdefaultparent.js");
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event */ "./src/event.js");
/* harmony import */ var desandro_get_style_property__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! desandro-get-style-property */ "./node_modules/desandro-get-style-property/get-style-property.js");
/* harmony import */ var desandro_get_style_property__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(desandro_get_style_property__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _bound__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bound */ "./src/bound.js");
/* harmony import */ var _geometry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./geometry */ "./src/geometry.js");
/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scope */ "./src/scope.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }








var Dragee = {
  Event: _event__WEBPACK_IMPORTED_MODULE_2__["default"]
}; //todo remove after refactore

var isTouch = 'ontouchstart' in window,
    mouseEvents = {
  start: 'mousedown',
  move: 'mousemove',
  end: 'mouseup'
},
    touchEvents = {
  start: 'touchstart',
  move: 'touchmove',
  end: 'touchend'
},
    events = isTouch ? touchEvents : mouseEvents,
    draggables = [],
    transformProperty = desandro_get_style_property__WEBPACK_IMPORTED_MODULE_3___default()('transform'),
    transitionProperty = desandro_get_style_property__WEBPACK_IMPORTED_MODULE_3___default()('transition');

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
  _scope__WEBPACK_IMPORTED_MODULE_6__["defaultScope"].addDraggable(draggable);
}

var Draggable =
/*#__PURE__*/
function () {
  function Draggable(element) {
    var _this = this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Draggable);

    var parent = options.parent || Object(_utils_getdefaultparent__WEBPACK_IMPORTED_MODULE_1__["default"])(element);
    this.targets = [];
    this.options = Object.assign({
      parent: parent,
      bound: Object(_bound__WEBPACK_IMPORTED_MODULE_4__["boundToElement"])(parent, parent),
      startFilter: false,
      isContentBoxSize: false,
      position: false
    }, options);

    if (typeof options.handler === 'string') {
      this.handler = element.querySelector(options.handler) || element;
    } else {
      this.handler = options.handler || element;
    }

    this.onEnd = new Dragee.Event(this, {
      isReverse: true,
      isStopOnTrue: true
    });
    this.onMove = new Dragee.Event(this);
    this.onStart = new Dragee.Event(this);
    this.onEnd.add(function () {
      return _this.move(_this.position, 0, true, true);
    });

    if (options.onEnd) {
      this.onEnd.add(options.onEnd);
    }

    if (options.onMove) {
      this.onMove.add(options.onMove);
    }

    if (options.onStart) {
      this.onStart.add(options.onStart);
    }

    this.element = element;
    this.bound = this.options.bound;
    preventDoubleInit(this);
    Draggable.onCreate.fire(this);
    this.init();
  }

  _createClass(Draggable, [{
    key: "init",
    value: function init() {
      this._enable = true;
      this.offset = _geometry__WEBPACK_IMPORTED_MODULE_5__["Geometry"].getOffset(this.element, this.options.parent, true);
      this.fixPosition = this.offset;
      this.position = this.offset;

      if (this.options.position) {
        this.initPosition = this.options.position;
        this.move(this.initPosition, 0, true, true);
      } else {
        this.initPosition = this.offset;
      }

      this._dragStart = this.dragStart.bind(this);
      this._dragMove = this.dragMove.bind(this);
      this._dragEnd = this.dragEnd.bind(this);
      this.handler.addEventListener(touchEvents.start, this._dragStart);
      this.handler.addEventListener(mouseEvents.start, this._dragStart);

      if (this.bound.refresh) {
        this.bound.refresh();
      }
    }
  }, {
    key: "reinit",
    value: function reinit() {
      this.offset = _geometry__WEBPACK_IMPORTED_MODULE_5__["Geometry"].getOffset(this.element, this.options.parent, true);
      this.fixPosition = this.offset;
      this.position = this.offset;

      if (this.options.position) {
        this.initPosition = this.options.position;
        this.move(this.initPosition, 0, true, true);
      } else {
        this.initPosition = this.offset;
      }

      if (this.bound.refresh) {
        this.bound.refresh();
      }
    }
  }, {
    key: "getSize",
    value: function getSize(_recalulate) {
      return _geometry__WEBPACK_IMPORTED_MODULE_5__["Geometry"].getSizeOfElement(this.element, this.options.isContentBoxSize);
    }
  }, {
    key: "getPosition",
    value: function getPosition() {
      this.position = this.offset.add(this._transformPosition || new _geometry__WEBPACK_IMPORTED_MODULE_5__["Point"](0, 0));
      return this.position;
    }
  }, {
    key: "getCenter",
    value: function getCenter() {
      return this.position.add(this.getSize().mult(0.5));
    }
  }, {
    key: "_setTranslate",
    value: function _setTranslate(point) {
      this._transformPosition = point;
      var transform = this.element.style[transformProperty];
      var translateCss = ' translate3d(' + point.x + 'px,' + point.y + 'px, 0px)';
      var ua = window.navigator.userAgent;
      var msie = ua.indexOf('MSIE ');

      if (msie) {
        translateCss = ' translate(' + point.x + 'px,' + point.y + 'px)';

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
      var isFix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var isSilent = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      point = point.clone();

      if (isFix) {
        this.fixPosition = point;
      }

      this.determineDirection(point);
      this.position = point;

      if (transitionProperty) {
        this.element.style[transitionProperty] = time + 'ms';
      }

      this._setTranslate(point.sub(this.offset));

      if (!isSilent) {
        this.onMove.fire();
      }
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

      if (transitionProperty) {
        this.element.style[transitionProperty] = '0ms';
      }

      this._setTranslate(point.sub(this.offset));
    }
  }, {
    key: "setZeroTransition",
    value: function setZeroTransition() {
      if (transitionProperty) {
        this.element.style[transitionProperty] = '0ms';
      }
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

      if (!this._enable || this.options.startFilter && !this.options.startFilter(event)) {
        return;
      }

      var isTouchEvent = isTouch && event instanceof window.TouchEvent;
      this._startTouchPoint = new _geometry__WEBPACK_IMPORTED_MODULE_5__["Point"](isTouchEvent ? event.changedTouches[0].pageX : event.clientX, isTouchEvent ? event.changedTouches[0].pageY : event.clientY);
      this._startPosition = this.getPosition();

      if (isTouchEvent) {
        this._touchId = event.changedTouches[0].identifier;
      }

      event.stopPropagation();

      if (!(event.target instanceof window.HTMLInputElement || event.target instanceof window.HTMLInputElement)) {
        event.preventDefault();
      } else {
        event.target.focus();
      }

      document.addEventListener(touchEvents.move, this._dragMove);
      document.addEventListener(mouseEvents.move, this._dragMove);
      document.addEventListener(touchEvents.end, this._dragEnd);
      document.addEventListener(mouseEvents.end, this._dragEnd);
      this.isDragging = true;
      this.onStart.fire(event);
      Object(_utils_classes__WEBPACK_IMPORTED_MODULE_0__["addClass"])(this.element, 'active');
      this.onMove.fire(event);
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
      var touchPoint = new _geometry__WEBPACK_IMPORTED_MODULE_5__["Point"](isTouchEvent ? touch.pageX : event.clientX, isTouchEvent ? touch.pageY : event.clientY);

      var point = this._startPosition.add(touchPoint.sub(this._startTouchPoint));

      point = this.bound(point, this.getSize());
      this.touchPoint = touchPoint;
      this.move(point, 0);
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
      this.onEnd.fire(event);
      document.removeEventListener(touchEvents.move, this._dragMove);
      document.removeEventListener(mouseEvents.move, this._dragMove);
      document.removeEventListener(touchEvents.end, this._dragEnd);
      document.removeEventListener(mouseEvents.end, this._dragEnd);
      this.isDragging = false;
      Object(_utils_classes__WEBPACK_IMPORTED_MODULE_0__["removeClass"])(this.element, 'active');
    }
  }, {
    key: "getRectangle",
    value: function getRectangle() {
      return new _geometry__WEBPACK_IMPORTED_MODULE_5__["Rectangle"](this.position, this.getSize());
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.getSize(true);

      if (this.bound.refresh) {
        this.bound.refresh();
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.handler.removeEventListener(touchEvents.start, this._dragStart);
      this.handler.removeEventListener(mouseEvents.start, this._dragStart);
      document.removeEventListener(touchEvents.move, this._dragMove);
      document.removeEventListener(mouseEvents.move, this._dragMove);
      document.removeEventListener(touchEvents.end, this._dragEnd);
      document.removeEventListener(mouseEvents.end, this._dragEnd);
      this.onEnd.reset();
      this.onMove.reset();
    }
  }, {
    key: "enable",
    get: function get() {
      return this._enable;
    },
    set: function set(enable) {
      if (enable) {
        Object(_utils_classes__WEBPACK_IMPORTED_MODULE_0__["removeClass"])(this.element, 'disable');
      } else {
        Object(_utils_classes__WEBPACK_IMPORTED_MODULE_0__["addClass"])(this.element, 'disable');
      }

      return this._enable = enable;
    }
  }]);

  return Draggable;
}();

Draggable.onCreate = new Dragee.Event(Draggable, {
  isReverse: true,
  isStopOnTrue: true
});
Draggable.onCreate.add(addToDefaultScope);


/***/ }),

/***/ "./src/event.js":
/*!**********************!*\
  !*** ./src/event.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


function Event(context) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  this.funcs = [];
  this.context = context;
  this.isReverse = options.isReverse || false;
  this.isStopOnTrue = options.isStopOnTrue || false;
}

Event.prototype.fire = function () {
  var args = [].slice.call(arguments);
  var fs = this.isReverse ? this.funcs.slice().reverse() : this.funcs;
  var retValue;

  for (var i = 0; i < fs.length; i++) {
    retValue = fs[i].apply(this.context, args);

    if (this.isStopOnTrue && retValue) {
      return true;
    }
  }

  return !this.isStopOnTrue;
};

Event.prototype.add = function (f) {
  this.funcs.push(f);
};

Event.prototype.unshift = function (f) {
  this.funcs.unshift(f);
};

Event.prototype.remove = function (f) {
  var index = this.funcs.indexOf(f);

  if (index !== -1) {
    this.funcs.splice(index, 1);
  }
};

Event.prototype.reset = function (_f) {
  this.funcs = [];
};

/* harmony default export */ __webpack_exports__["default"] = (Event);

/***/ }),

/***/ "./src/geometry.js":
/*!*************************!*\
  !*** ./src/geometry.js ***!
  \*************************/
/*! exports provided: Point, Rectangle, Geometry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Point", function() { return Point; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rectangle", function() { return Rectangle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Geometry", function() { return Geometry; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
  }]);

  return Rectangle;
}();
/*****************/


var Geometry = {
  getDistance: function getDistance(p1, p2) {
    var dx = p1.x - p2.x,
        dy = p1.y - p2.y;
    return Math.sqrt(dx * dx + dy * dy);
  },
  distance: function distance(p1, p2) {
    return Geometry.getDistance(p1, p2);
  },
  getXDifference: function getXDifference(p1, p2) {
    return Math.abs(p1.x - p2.x);
  },
  getYDifference: function getYDifference(p1, p2) {
    return Math.abs(p1.y - p2.y);
  },
  transformedSpaceDistanceFactory: function transformedSpaceDistanceFactory(options) {
    return function (p1, p2) {
      return Math.sqrt(Math.pow(options.x * Math.abs(p1.x - p2.x), 2) + Math.pow(options.y * Math.abs(p1.y - p2.y), 2));
    };
  },
  indexOfNearestPoint: function indexOfNearestPoint(arr, val, radius, getDistance) {
    var size,
        index = 0,
        i,
        temp;
    getDistance = getDistance || Geometry.getDistance;

    if (arr.length === 0) {
      return -1;
    }

    size = getDistance(arr[0], val);

    for (i = 0; i < arr.length; i++) {
      temp = getDistance(arr[i], val);

      if (temp < size) {
        size = temp;
        index = i;
      }
    }

    if (radius >= 0 && size > radius) {
      return -1;
    }

    return index;
  },
  bound: function bound(min, max, val) {
    return Math.max(min, Math.min(max, val));
  },
  boundPoint: function boundPoint(min, max, val) {
    var x = Math.max(min.x, Math.min(max.x, val.x));
    var y = Math.max(min.y, Math.min(max.y, val.y));
    return new Point(x, y);
  },
  //Return crossing point of two lines
  directCrossing: function directCrossing(L1P1, L1P2, L2P1, L2P2) {
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
  },
  boundToSegment: function boundToSegment(LP1, LP2, P) {
    var x, y;
    x = Geometry.bound(Math.min(LP1.x, LP2.x), Math.max(LP1.x, LP2.x), P.x);

    if (x !== P.x) {
      y = x === LP1.x ? LP1.y : LP2.y;
      P = new Point(x, y);
    }

    y = Geometry.bound(Math.min(LP1.y, LP2.y), Math.max(LP1.y, LP2.y), P.y);

    if (y !== P.y) {
      x = y === LP1.y ? LP1.x : LP2.x;
      P = new Point(x, y);
    }

    return P;
  },
  boundToLine: function boundToLine(A, B, P) {
    var AP = new Point(P.x - A.x, P.y - A.y),
        AB = new Point(B.x - A.x, B.y - A.y),
        ab2 = AB.x * AB.x + AB.y * AB.y,
        ap_ab = AP.x * AB.x + AP.y * AB.y,
        t = ap_ab / ab2;
    return new Point(A.x + AB.x * t, A.y + AB.y * t);
  },
  getPointInLine: function getPointInLine(LP1, LP2, percent) {
    var dx = LP2.x - LP1.x,
        dy = LP2.y - LP1.y;
    return new Point(LP1.x + percent * dx, LP1.y + percent * dy);
  },
  getPointInLineByLenght: function getPointInLineByLenght(LP1, LP2, lenght) {
    var dx = LP2.x - LP1.x,
        dy = LP2.y - LP1.y,
        percent = lenght / Geometry.distance(LP1, LP2);
    return new Point(LP1.x + percent * dx, LP1.y + percent * dy);
  },
  createRectangleFromElement: function createRectangleFromElement(el, parent, isContentBoxSize, isConsiderTranslate) {
    var size = this.getSizeOfElement(el, isContentBoxSize);
    return new Rectangle(this.getOffset(el, parent || el.parentNode, isConsiderTranslate), size);
  },
  getSumValueOfStyleRule: function getSumValueOfStyleRule(element, rules) {
    return rules.reduce(function (sum, rule) {
      return sum + parseInt(window.getComputedStyle(element)[rule] || 0);
    }, 0);
  },
  getSizeOfElement: function getSizeOfElement(el, isContentBoxSize) {
    var width = parseInt(window.getComputedStyle(el)['width']),
        height = parseInt(window.getComputedStyle(el)['height']);

    if (!isContentBoxSize) {
      width += this.getSumValueOfStyleRule(el, ['padding-left', 'padding-right', 'border-left-width', 'border-right-width']);
      height += this.getSumValueOfStyleRule(el, ['padding-top', 'padding-bottom', 'border-top-width', 'border-bottom-width']);
    }

    return new Point(width, height);
  },
  getOffset: function getOffset(el, parent) {
    var elRect = el.getBoundingClientRect(),
        parentRect = parent.getBoundingClientRect();
    return new Point(elRect.left - parentRect.left, elRect.top - parentRect.top);
  },
  getPointFromRadialSystem: function getPointFromRadialSystem(angle, length, center) {
    center = center || new Point(0, 0);
    return center.add(new Point(length * Math.cos(angle), length * Math.sin(angle)));
  },
  addPointToBoundPoints: function addPointToBoundPoints(boundpoints, point, isRight) {
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
  },
  getAngle: function getAngle(p1, p2) {
    var diff = p2.sub(p1);
    return this.normalizeAngle(Math.atan2(diff.y, diff.x));
  },
  toRadian: function toRadian(angle) {
    return angle % 360 * Math.PI / 180;
  },
  toDegree: function toDegree(angle) {
    return angle * 180 / Math.PI % 360;
  },
  boundAngle: function boundAngle(min, max, val) {
    var dmin, dmax;

    if (min < max && val > min && val < max) {
      return val;
    } else if (max < min && (val < max || val > min)) {
      return val;
    } else {
      dmin = this.getAngleDiff(min, val);
      dmax = this.getAngleDiff(max, val);

      if (dmin < dmax) {
        return min;
      } else {
        return max;
      }
    }
  },
  getNearestAngle: function getNearestAngle(arr, angle) {
    var i,
        temp,
        diff = Math.PI * 2,
        value;

    for (i = 0; i < arr.length; i++) {
      temp = Geometry.getAngleDiff(arr[i], angle);

      if (diff < temp) {
        diff = temp;
        value = arr[i];
      }
    }

    return value;
  },
  getAngleDiff: function getAngleDiff(alpha, beta) {
    var minAngle = Math.min(alpha, beta),
        maxAngle = Math.max(alpha, beta);
    return Math.min(maxAngle - minAngle, minAngle + Math.PI * 2 - maxAngle);
  },
  normalizeAngle: function normalizeAngle(val) {
    while (val < 0) {
      val += 2 * Math.PI;
    }

    while (val > 2 * Math.PI) {
      val -= 2 * Math.PI;
    }

    return val;
  }
};


/***/ }),

/***/ "./src/positioning.js":
/*!****************************!*\
  !*** ./src/positioning.js ***!
  \****************************/
/*! exports provided: positionType, sortingFactory, positionFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "positionType", function() { return positionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortingFactory", function() { return sortingFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "positionFactory", function() { return positionFactory; });
/* harmony import */ var _geometry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./geometry */ "./src/geometry.js");



var positionType = {
  notCrossing: 0,
  floatLeft: 1,
  floatRight: 2
};

function positionFactory(type) {
  switch (type) {
    case positionType.notCrossing:
      return function (rectangle, _options) {
        return function (rectangleList, indexesOfNews) {
          var boundRect = typeof rectangle === 'function' ? rectangle() : rectangle,
              staticRectangleIndexes = rectangleList.reduce(function (indexes, _rect, index) {
            if (indexesOfNews.indexOf(index) === -1) {
              indexes.push(index);
            }

            return indexes;
          }, []);
          indexesOfNews.forEach(function (index) {
            var rect = rectangleList[index],
                removable = false;
            staticRectangleIndexes.forEach(function (indexOfStatic) {
              var staticRect = rectangleList[indexOfStatic];
              rect = staticRect.moveToBound(rect);
            });
            removable = staticRectangleIndexes.some(function (indexOfStatic) {
              var staticRect = rectangleList[indexOfStatic];
              return !!staticRect.and(rect);
            }) || rect.and(boundRect).getSquare() !== rect.getSquare();

            if (removable) {
              rect.removable = true;
            } else {
              staticRectangleIndexes.push(index);
            }
          });
          return rectangleList;
        };
      };

    case positionType.floatLeft:
      return function (rectangle, options) {
        options = Object.assign({
          paddingTopLeft: new _geometry__WEBPACK_IMPORTED_MODULE_0__["Point"](0, 0),
          paddingBottomRight: new _geometry__WEBPACK_IMPORTED_MODULE_0__["Point"](0, 0),
          yGapBetweenDraggables: 0,
          removable: true
        }, options);
        return function (rectangleList, _indexesOfNews) {
          var boundRect = typeof rectangle === 'function' ? rectangle() : rectangle;
          var rectP2 = boundRect.getP2();
          var boundaryPoints = [boundRect.position];
          rectangleList.forEach(function (rect) {
            var position,
                isValid = false;

            for (var i = 0; i < boundaryPoints.length; i++) {
              position = new _geometry__WEBPACK_IMPORTED_MODULE_0__["Point"](boundaryPoints[i].x, i > 0 ? boundaryPoints[i - 1].y + options.yGapBetweenDraggables : boundRect.position.y).add(options.paddingTopLeft);
              isValid = position.x + rect.size.x < rectP2.x;

              if (isValid) {
                break;
              }
            }

            if (!isValid) {
              position = new _geometry__WEBPACK_IMPORTED_MODULE_0__["Point"](boundRect.position.x, boundaryPoints[boundaryPoints.length - 1].y + options.yGapBetweenDraggables).add(options.paddingTopLeft);
            }

            rect.position = position;

            if (options.removable && rect.getP3().y > boundRect.getP3().y) {
              rect.removable = true;
            }

            boundaryPoints = _geometry__WEBPACK_IMPORTED_MODULE_0__["Geometry"].addPointToBoundPoints(boundaryPoints, rect.getP3().add(options.paddingBottomRight));
          });
          return rectangleList;
        };
      };

    case positionType.floatRight:
      return function (rectangle, options) {
        options = Object.assing({
          paddingTopRight: new _geometry__WEBPACK_IMPORTED_MODULE_0__["Point"](5, 5),
          paddingBottomLeft: new _geometry__WEBPACK_IMPORTED_MODULE_0__["Point"](0, 0),
          removable: true
        }, options);
        var paddingTopNegRight = new _geometry__WEBPACK_IMPORTED_MODULE_0__["Point"](-options.paddingTopRight.x, options.paddingTopRight.y);
        var paddingBottomNegLeft = new _geometry__WEBPACK_IMPORTED_MODULE_0__["Point"](-options.paddingBottomLeft.x, options.paddingBottomLeft.y);
        return function (rectangleList, _indexesOfNews) {
          var boundRect = typeof rectangle === 'function' ? rectangle() : rectangle;
          var boundaryPoints = [boundRect.getRightTopPoint()];
          rectangleList.forEach(function (rect, _index) {
            var position,
                isValid = false;

            for (var i = 0; i < boundaryPoints.length; i++) {
              position = new _geometry__WEBPACK_IMPORTED_MODULE_0__["Point"](boundaryPoints[i].x - rect.size.x, i > 0 ? boundaryPoints[i - 1].y : boundRect.position.y).add(paddingTopNegRight);
              isValid = position.x > rect.position.x;

              if (isValid) {
                break;
              }
            }

            if (!isValid) {
              position = new _geometry__WEBPACK_IMPORTED_MODULE_0__["Point"](boundRect.getP2().x, boundaryPoints[boundaryPoints.length - 1].y);
            }

            rect.position = position;

            if (options.removable && rect.getLeftBottomPoint().y > boundRect.getP4().y) {
              rect.removable = true;
            }

            boundaryPoints = _geometry__WEBPACK_IMPORTED_MODULE_0__["Geometry"].addPointToBoundPoints(boundaryPoints, rect.getP4().add(paddingBottomNegLeft), true);
          });
          return rectangleList;
        };
      };
  }
}

function sortingFactory(type) {
  switch (type) {
    case positionType.notCrossing:
      return function () {
        return function (oldObjsList, newObjs, indexOfNews) {
          var objsList = oldObjsList.concat(newObjs);
          newObjs.forEach(function (obj) {
            indexOfNews.push(objsList.indexOf(obj));
          });
          return objsList;
        };
      };

    case positionType.floatLeft:
    case positionType.floatRight:
      return function (radius, getDistance, options) {
        options = Object.assign({
          getPosition: function getPosition(obj) {
            return obj.position;
          }
        }, options);
        return function (oldObjsList, newObjs, indexOfNews) {
          var newList = oldObjsList.concat();
          var listOldPosition = oldObjsList.map(options.getPosition);
          newObjs.forEach(function (newObj) {
            var index = _geometry__WEBPACK_IMPORTED_MODULE_0__["Geometry"].indexOfNearestPoint(listOldPosition, options.getPosition(newObj), radius, getDistance);

            if (index === -1) {
              index = newList.length;
            } else {
              index = newList.indexOf(oldObjsList[index]);
            }

            newList.splice(index, 0, newObj);
          });
          newObjs.forEach(function (newObj) {
            indexOfNews.push(newList.indexOf(newObj));
          });
          return newList;
        };
      };
  }
}



/***/ }),

/***/ "./src/scope.js":
/*!**********************!*\
  !*** ./src/scope.js ***!
  \**********************/
/*! exports provided: scopes, defaultScope, Scope, scopeFactory, scope */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scopes", function() { return scopes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultScope", function() { return defaultScope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scope", function() { return Scope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scopeFactory", function() { return scopeFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scope", function() { return scope; });
/* harmony import */ var remove_array_items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! remove-array-items */ "./node_modules/remove-array-items/dist/remove-array-items.esm.js");
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event */ "./src/event.js");
/* harmony import */ var _draggable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./draggable */ "./src/draggable.js");
/* harmony import */ var _target__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./target */ "./src/target.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Dragee = {
  Event: _event__WEBPACK_IMPORTED_MODULE_1__["default"]
}; //todo remove after refactore

var scopes = [];

var Scope =
/*#__PURE__*/
function () {
  function Scope(draggables, targets) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, Scope);

    scopes.forEach(function (scope) {
      if (draggables) {
        draggables.forEach(function (draggable) {
          Object(remove_array_items__WEBPACK_IMPORTED_MODULE_0__["default"])(scope.draggables, draggable);
        });
      }

      if (targets) {
        targets.forEach(function (target) {
          Object(remove_array_items__WEBPACK_IMPORTED_MODULE_0__["default"])(scope.targets, target);
        });
      }
    });
    this.draggables = draggables || [];
    this.targets = targets || [];
    scopes.push(this);
    this.options = {
      timeEnd: options.timeEnd || 400
    };
    this.onChange = new Dragee.Event(this);

    if (options.onChange) {
      this.onChange.add(options.onChange);
    }

    this.init();
  }

  _createClass(Scope, [{
    key: "init",
    value: function init() {
      var _this = this;

      this.draggables.forEach(function (draggable) {
        draggable.onEnd.add(function () {
          return _this.onEnd(draggable);
        });
      });
    }
  }, {
    key: "addDraggable",
    value: function addDraggable(draggable) {
      var _this2 = this;

      this.draggables.push(draggable);
      draggable.onEnd.unshift(function () {
        return _this2.onEnd(draggable);
      });
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
        draggable.move(draggable.initPosition, this.options.timeEnd, true, true);
      }

      this.onChange.fire();
      return true;
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
      var _this3 = this;

      return this.targets.map(function (target) {
        return target.innerDraggables.map(function (draggable) {
          return _this3.draggables.indexOf(draggable);
        });
      });
    },
    set: function set(positions) {
      var _this4 = this;

      var message = 'wrong array length';

      if (positions.length === this.targets.length) {
        this.targets.forEach(function (target) {
          return target.reset();
        });
        positions.forEach(function (targetIndexes, i) {
          targetIndexes.forEach(function (index) {
            _this4.targets[i].add(_this4.draggables[index]);
          });
        });
      } else {
        throw message;
      }
    }
  }]);

  return Scope;
}();

var defaultScope = new Scope();

function scope(fn) {
  var currentScope = new Scope();

  var addDraggableToScope = function addDraggableToScope(draggable) {
    currentScope.addDraggable(draggable);
    return true;
  };

  var addTargetToScope = function addTargetToScope(target) {
    currentScope.addTarget(target);
    return true;
  };

  _draggable__WEBPACK_IMPORTED_MODULE_2__["Draggable"].onCreate.add(addDraggableToScope);
  _target__WEBPACK_IMPORTED_MODULE_3__["Target"].onCreate.add(addTargetToScope);
  fn.call();
  _draggable__WEBPACK_IMPORTED_MODULE_2__["Draggable"].onCreate.remove(addDraggableToScope);
  _target__WEBPACK_IMPORTED_MODULE_3__["Target"].onCreate.remove(addTargetToScope);
  return currentScope;
}

function scopeFactory(parentElement, draggableElements, targetElements) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var draggableOptions = options.draggable || {};
  var targetOptions = options.target || {};
  var scopeOptions = options.scope || {};
  draggableOptions.parent = draggableOptions.parent || parentElement;
  targetOptions.parent = targetOptions.parent || parentElement;
  draggableElements = Array.prototype.slice.call(draggableElements);
  targetElements = Array.prototype.slice.call(targetElements);
  var draggables = draggableElements.map(function (element) {
    return new _draggable__WEBPACK_IMPORTED_MODULE_2__["Draggable"](element, draggableOptions);
  });
  var targets = targetElements.map(function (element) {
    return new _target__WEBPACK_IMPORTED_MODULE_3__["Target"](element, draggables, targetOptions);
  });
  return new Scope(draggables, targets, scopeOptions);
}



/***/ }),

/***/ "./src/target.js":
/*!***********************!*\
  !*** ./src/target.js ***!
  \***********************/
/*! exports provided: Target */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Target", function() { return Target; });
/* harmony import */ var _utils_range_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/range.js */ "./src/utils/range.js");
/* harmony import */ var remove_array_items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! remove-array-items */ "./node_modules/remove-array-items/dist/remove-array-items.esm.js");
/* harmony import */ var _utils_getdefaultparent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/getdefaultparent */ "./src/utils/getdefaultparent.js");
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event */ "./src/event.js");
/* harmony import */ var _geometry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./geometry */ "./src/geometry.js");
/* harmony import */ var _positioning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./positioning */ "./src/positioning.js");
/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scope */ "./src/scope.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }








var Dragee = {
  positionType: _positioning__WEBPACK_IMPORTED_MODULE_5__["positionType"],
  positionFactory: _positioning__WEBPACK_IMPORTED_MODULE_5__["positionFactory"],
  sortingFactory: _positioning__WEBPACK_IMPORTED_MODULE_5__["sortingFactory"],
  scopes: _scope__WEBPACK_IMPORTED_MODULE_6__["scopes"],
  Event: _event__WEBPACK_IMPORTED_MODULE_3__["default"]
}; //todo remove after refactore

var addToDefaultScope = function addToDefaultScope(target) {
  _scope__WEBPACK_IMPORTED_MODULE_6__["defaultScope"].addTarget(target);
};

var Target =
/*#__PURE__*/
function () {
  function Target(element, draggables) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, Target);

    var target = this;
    var parent = options.parent || Object(_utils_getdefaultparent__WEBPACK_IMPORTED_MODULE_2__["default"])(element);
    this.options = Object.assign({
      timeEnd: 200,
      timeExcange: 400,
      parent: parent,
      sorting: Dragee.sortingFactory(Dragee.positionType.floatLeft)(80, _geometry__WEBPACK_IMPORTED_MODULE_4__["Geometry"].transformedSpaceDistanceFactory({
        x: 1,
        y: 4
      })),
      positioning: Dragee.positionFactory(Dragee.positionType.floatLeft)(this.getRectangle.bind(this), {
        removable: true
      })
    }, options);
    this.element = element;
    draggables.forEach(function (draggable) {
      return draggable.targets.push(target);
    });
    this.draggables = draggables;
    this.onAdd = new Dragee.Event(this);
    this.beforeAdd = new Dragee.Event(this);
    this.onRemove = new Dragee.Event(this);

    if (options.onRemove) {
      this.onRemove.add(options.onRemove);
    }

    if (options.onAdd) {
      this.onAdd.add(options.onAdd);
    }

    if (options.beforeAdd) {
      this.beforeAdd.add(options.beforeAdd);
    }

    Target.onCreate.fire(this);
    this.init();
  }

  _createClass(Target, [{
    key: "init",
    value: function init() {
      var _this = this;

      var rectangles, indexesOfNew;
      this.innerDraggables = this.draggables.filter(function (draggable) {
        var element = draggable.element.parentNode;

        while (element) {
          if (element === _this.element) {
            return true;
          }

          element = element.parentNode;
        }

        return false;
      });

      if (this.innerDraggables.length) {
        indexesOfNew = Object(_utils_range_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this.innerDraggables.length);
        rectangles = this.options.positioning(this.innerDraggables.map(function (draggable) {
          return draggable.getRectangle();
        }), indexesOfNew);
        this.setPosition(rectangles, indexesOfNew);
        this.innerDraggables.forEach(function (draggable) {
          return _this.onAdd.fire(draggable);
        });
      }
    }
  }, {
    key: "getRectangle",
    value: function getRectangle() {
      return _geometry__WEBPACK_IMPORTED_MODULE_4__["Geometry"].createRectangleFromElement(this.element, this.options.parent, this.options.isContentBoxSize, true);
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
      var _this2 = this;

      Dragee.scopes.forEach(function (scope) {
        return Object(remove_array_items__WEBPACK_IMPORTED_MODULE_1__["default"])(scope.targets, _this2);
      });
    }
  }, {
    key: "refresh",
    value: function refresh() {
      var rectangles = this.options.positioning(this.innerDraggables.map(function (draggable) {
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

      this.beforeAdd.fire(draggable);
      this.innerDraggables = this.options.sorting(this.innerDraggables, [draggable], newDraggablesIndex);
      var rectangles = this.options.positioning(this.innerDraggables.map(function (draggable) {
        return draggable.getRectangle();
      }), newDraggablesIndex, draggable);
      this.setPosition(rectangles, newDraggablesIndex);

      if (this.innerDraggables.indexOf(draggable) !== -1) {
        this.addRemoveOnMove(draggable);
      }

      return true;
    }
  }, {
    key: "setPosition",
    value: function setPosition(rectangles, indexesOfNew, time) {
      var _this3 = this;

      this.innerDraggables.slice(0).forEach(function (draggable, i) {
        var rect = rectangles[i],
            timeEnd = time || time === 0 ? time : indexesOfNew.indexOf(i) !== -1 ? _this3.options.timeEnd : _this3.options.timeExcange;

        if (rect.removable) {
          draggable.move(draggable.initPosition, timeEnd, true, true);
          Object(remove_array_items__WEBPACK_IMPORTED_MODULE_1__["default"])(_this3.innerDraggables, draggable);

          _this3.onRemove.fire(draggable);
        } else {
          draggable.move(rect.position, timeEnd, true, true);
        }
      });
    }
  }, {
    key: "add",
    value: function add(draggable, time) {
      var newDraggablesIndex = this.innerDraggables.length;
      this.beforeAdd.fire(draggable);
      this.pushInnerDraggable(draggable);
      var rectangles = this.options.positioning(this.innerDraggables.map(function (draggable) {
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
      var _this4 = this;

      draggable.onMove.add(this.removeHandler = function () {
        _this4.remove(draggable);
      });
      this.onAdd.fire(draggable);
    }
  }, {
    key: "remove",
    value: function remove(draggable) {
      draggable.onMove.remove(this.removeHandler);
      var index = this.innerDraggables.indexOf(draggable);

      if (index === -1) {
        return;
      }

      this.innerDraggables.splice(index, 1);
      var rectangles = this.options.positioning(this.innerDraggables.map(function (draggable) {
        return draggable.getRectangle();
      }), []);
      this.setPosition(rectangles, []);
      this.onRemove.fire(draggable);
    }
  }, {
    key: "reset",
    value: function reset() {
      var _this5 = this;

      this.innerDraggables.forEach(function (draggable) {
        draggable.move(draggable.initPosition, 0, true, true);

        _this5.onRemove.fire(draggable);
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
}();

Target.onCreate = new Dragee.Event(Target, {
  isReverse: true,
  isStopOnTrue: true
});
Target.onCreate.add(addToDefaultScope);


/***/ }),

/***/ "./src/utils/classes.js":
/*!******************************!*\
  !*** ./src/utils/classes.js ***!
  \******************************/
/*! exports provided: hasClass, addClass, removeClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasClass", function() { return hasClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addClass", function() { return addClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeClass", function() { return removeClass; });
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

/***/ }),

/***/ "./src/utils/getdefaultparent.js":
/*!***************************************!*\
  !*** ./src/utils/getdefaultparent.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getDefaultParent; });
function getDefaultParent(element) {
  var parent = element.parentNode;

  while (parent.parentNode && window.getComputedStyle(parent)['position'] === 'static') {
    parent = parent.parentNode;
  }

  return parent;
}

/***/ }),

/***/ "./src/utils/range.js":
/*!****************************!*\
  !*** ./src/utils/range.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return range; });
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

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9EcmFnZWUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0RyYWdlZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9EcmFnZWUvLi9ub2RlX21vZHVsZXMvZGVzYW5kcm8tZ2V0LXN0eWxlLXByb3BlcnR5L2dldC1zdHlsZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9ub2RlX21vZHVsZXMvcmVtb3ZlLWFycmF5LWl0ZW1zL2Rpc3QvcmVtb3ZlLWFycmF5LWl0ZW1zLmVzbS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvYXJjc2xpZGVyLmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy9ib3VuZC5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvZHJhZ2dhYmxlLmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy9ldmVudC5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvZ2VvbWV0cnkuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL3Bvc2l0aW9uaW5nLmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy9zY29wZS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvdGFyZ2V0LmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy91dGlscy9jbGFzc2VzLmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy91dGlscy9nZXRkZWZhdWx0cGFyZW50LmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy91dGlscy9yYW5nZS5qcyJdLCJuYW1lcyI6WyJBcmNTbGlkZXIiLCJhcmVhIiwiZWxlbWVudCIsIm9wdGlvbnMiLCJhcmVhUmVjdGFuZ2xlIiwiR2VvbWV0cnkiLCJjcmVhdGVSZWN0YW5nbGVGcm9tRWxlbWVudCIsImhhbGZTaXplIiwiZ2V0U2l6ZU9mRWxlbWVudCIsIm11bHQiLCJPYmplY3QiLCJhc3NpZ24iLCJjZW50ZXIiLCJnZXRDZW50ZXIiLCJyYWRpdXMiLCJnZXRNaW5TaWRlIiwic3RhcnRBbmdsZSIsIk1hdGgiLCJQSSIsImVuZEFuZ2xlIiwiYW5nbGVzIiwib25DaGFuZ2UiLCJ0aW1lIiwic2hpZnRlZENlbnRlciIsInN1YiIsImluaXQiLCJhbmdsZSIsInBvc2l0aW9uIiwiZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtIiwiYm91bmQiLCJib3VuZFRvQXJjIiwiZHJhZ2dhYmxlIiwiRHJhZ2dhYmxlIiwicGFyZW50Iiwib25Nb3ZlIiwiY2hhbmdlIiwiZ2V0QW5nbGUiLCJ1cGRhdGVBbmdsZSIsIm5vcm1hbGl6ZUFuZ2xlIiwibW92ZSIsImJvdW5kVG9SZWN0YW5nbGUiLCJyZWN0YW5nbGUiLCJwb2ludCIsInNpemUiLCJjYWxjUG9pbnQiLCJjbG9uZSIsInJlY3RQMiIsImdldFAzIiwieCIsInkiLCJib3VuZFRvRWxlbWVudCIsInJldEZ1bmMiLCJhcHBseSIsImFyZ3VtZW50cyIsInJlZnJlc2giLCJib3VuZFRvTGluZVgiLCJzdGFydFkiLCJlbmRZIiwiYm91bmRUb0xpbmVZIiwic3RhcnRYIiwiZW5kWCIsImJvdW5kVG9MaW5lIiwic3RhcnQiLCJlbmQiLCJhbHBoYSIsImF0YW4yIiwiYmV0YSIsInNvbWVLIiwiY29zQmV0YSIsImNvcyIsInNpbkJldGEiLCJzaW4iLCJwb2ludDIiLCJQb2ludCIsIm5ld0VuZCIsImdldFBvaW50SW5MaW5lQnlMZW5naHQiLCJwb2ludENyb3NzaW5nIiwiZGlyZWN0Q3Jvc3NpbmciLCJib3VuZFRvQ2lyY2xlIiwiX3NpemUiLCJib3VuZGVkUG9pbnQiLCJzdGFydEFnbGUiLCJib3VuZFN0YXJ0QW5nbGUiLCJib3VuZEVuZHRBbmdsZSIsImJvdW5kQW5nbGUiLCJEcmFnZWUiLCJFdmVudCIsImlzVG91Y2giLCJ3aW5kb3ciLCJtb3VzZUV2ZW50cyIsInRvdWNoRXZlbnRzIiwiZXZlbnRzIiwiZHJhZ2dhYmxlcyIsInRyYW5zZm9ybVByb3BlcnR5IiwiZ2V0U3R5bGVQcm9wZXJ0eSIsInRyYW5zaXRpb25Qcm9wZXJ0eSIsImdldFRvdWNoQnlJRCIsInRvdWNoSWQiLCJpIiwiY2hhbmdlZFRvdWNoZXMiLCJsZW5ndGgiLCJpZGVudGlmaWVyIiwicHJldmVudERvdWJsZUluaXQiLCJtZXNzYWdlIiwic29tZSIsImV4aXN0aW5nIiwicHVzaCIsImFkZFRvRGVmYXVsdFNjb3BlIiwiZGVmYXVsdFNjb3BlIiwiYWRkRHJhZ2dhYmxlIiwiZ2V0RGVmYXVsdFBhcmVudCIsInRhcmdldHMiLCJzdGFydEZpbHRlciIsImlzQ29udGVudEJveFNpemUiLCJoYW5kbGVyIiwicXVlcnlTZWxlY3RvciIsIm9uRW5kIiwiaXNSZXZlcnNlIiwiaXNTdG9wT25UcnVlIiwib25TdGFydCIsImFkZCIsIm9uQ3JlYXRlIiwiZmlyZSIsIl9lbmFibGUiLCJvZmZzZXQiLCJnZXRPZmZzZXQiLCJmaXhQb3NpdGlvbiIsImluaXRQb3NpdGlvbiIsIl9kcmFnU3RhcnQiLCJkcmFnU3RhcnQiLCJiaW5kIiwiX2RyYWdNb3ZlIiwiZHJhZ01vdmUiLCJfZHJhZ0VuZCIsImRyYWdFbmQiLCJhZGRFdmVudExpc3RlbmVyIiwiX3JlY2FsdWxhdGUiLCJfdHJhbnNmb3JtUG9zaXRpb24iLCJnZXRTaXplIiwidHJhbnNmb3JtIiwic3R5bGUiLCJ0cmFuc2xhdGVDc3MiLCJ1YSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsIm1zaWUiLCJpbmRleE9mIiwidGVzdCIsInJlcGxhY2UiLCJpc0ZpeCIsImlzU2lsZW50IiwiZGV0ZXJtaW5lRGlyZWN0aW9uIiwiX3NldFRyYW5zbGF0ZSIsInNldFBvc2l0aW9uIiwiZ2V0UG9zaXRpb24iLCJsZWZ0RGlyZWN0aW9uIiwicmlnaHREaXJlY3Rpb24iLCJ1cERpcmVjdGlvbiIsImRvd25EaXJlY3Rpb24iLCJldmVudCIsImN1cnJlbnRFdmVudCIsImlzVG91Y2hFdmVudCIsIlRvdWNoRXZlbnQiLCJfc3RhcnRUb3VjaFBvaW50IiwicGFnZVgiLCJjbGllbnRYIiwicGFnZVkiLCJjbGllbnRZIiwiX3N0YXJ0UG9zaXRpb24iLCJfdG91Y2hJZCIsInN0b3BQcm9wYWdhdGlvbiIsInRhcmdldCIsIkhUTUxJbnB1dEVsZW1lbnQiLCJwcmV2ZW50RGVmYXVsdCIsImZvY3VzIiwiZG9jdW1lbnQiLCJpc0RyYWdnaW5nIiwiYWRkQ2xhc3MiLCJ0b3VjaCIsInRvdWNoUG9pbnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVtb3ZlQ2xhc3MiLCJSZWN0YW5nbGUiLCJyZXNldCIsImVuYWJsZSIsImNvbnRleHQiLCJmdW5jcyIsInByb3RvdHlwZSIsImFyZ3MiLCJzbGljZSIsImNhbGwiLCJmcyIsInJldmVyc2UiLCJyZXRWYWx1ZSIsImYiLCJ1bnNoaWZ0IiwicmVtb3ZlIiwiaW5kZXgiLCJzcGxpY2UiLCJfZiIsInAiLCJrIiwicmVjdCIsIm1pbiIsIm1heCIsImluY2x1ZGVQb2ludCIsImF4aXMiLCJzZWxBeGlzIiwiY3Jvc3NSZWN0YW5nbGUiLCJhbmQiLCJ0aGlzQ2VudGVyIiwicmVjdENlbnRlciIsInNpZ24iLCJlbCIsImxlZnQiLCJ0b3AiLCJ3aWR0aCIsImhlaWdodCIsImdldERpc3RhbmNlIiwicDEiLCJwMiIsImR4IiwiZHkiLCJzcXJ0IiwiZGlzdGFuY2UiLCJnZXRYRGlmZmVyZW5jZSIsImFicyIsImdldFlEaWZmZXJlbmNlIiwidHJhbnNmb3JtZWRTcGFjZURpc3RhbmNlRmFjdG9yeSIsInBvdyIsImluZGV4T2ZOZWFyZXN0UG9pbnQiLCJhcnIiLCJ2YWwiLCJ0ZW1wIiwiYm91bmRQb2ludCIsIkwxUDEiLCJMMVAyIiwiTDJQMSIsIkwyUDIiLCJrMSIsImsyIiwiYjEiLCJiMiIsImJvdW5kVG9TZWdtZW50IiwiTFAxIiwiTFAyIiwiUCIsIkEiLCJCIiwiQVAiLCJBQiIsImFiMiIsImFwX2FiIiwidCIsImdldFBvaW50SW5MaW5lIiwicGVyY2VudCIsImxlbmdodCIsImlzQ29uc2lkZXJUcmFuc2xhdGUiLCJwYXJlbnROb2RlIiwiZ2V0U3VtVmFsdWVPZlN0eWxlUnVsZSIsInJ1bGVzIiwicmVkdWNlIiwic3VtIiwicnVsZSIsInBhcnNlSW50IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImVsUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInBhcmVudFJlY3QiLCJhZGRQb2ludFRvQm91bmRQb2ludHMiLCJib3VuZHBvaW50cyIsImlzUmlnaHQiLCJyZXN1bHQiLCJmaWx0ZXIiLCJiUG9pbnQiLCJkaWZmIiwidG9SYWRpYW4iLCJ0b0RlZ3JlZSIsImRtaW4iLCJkbWF4IiwiZ2V0QW5nbGVEaWZmIiwiZ2V0TmVhcmVzdEFuZ2xlIiwidmFsdWUiLCJtaW5BbmdsZSIsIm1heEFuZ2xlIiwicG9zaXRpb25UeXBlIiwibm90Q3Jvc3NpbmciLCJmbG9hdExlZnQiLCJmbG9hdFJpZ2h0IiwicG9zaXRpb25GYWN0b3J5IiwidHlwZSIsIl9vcHRpb25zIiwicmVjdGFuZ2xlTGlzdCIsImluZGV4ZXNPZk5ld3MiLCJib3VuZFJlY3QiLCJzdGF0aWNSZWN0YW5nbGVJbmRleGVzIiwiaW5kZXhlcyIsIl9yZWN0IiwiZm9yRWFjaCIsInJlbW92YWJsZSIsImluZGV4T2ZTdGF0aWMiLCJzdGF0aWNSZWN0IiwibW92ZVRvQm91bmQiLCJnZXRTcXVhcmUiLCJwYWRkaW5nVG9wTGVmdCIsInBhZGRpbmdCb3R0b21SaWdodCIsInlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyIsIl9pbmRleGVzT2ZOZXdzIiwiZ2V0UDIiLCJib3VuZGFyeVBvaW50cyIsImlzVmFsaWQiLCJhc3NpbmciLCJwYWRkaW5nVG9wUmlnaHQiLCJwYWRkaW5nQm90dG9tTGVmdCIsInBhZGRpbmdUb3BOZWdSaWdodCIsInBhZGRpbmdCb3R0b21OZWdMZWZ0IiwiZ2V0UmlnaHRUb3BQb2ludCIsIl9pbmRleCIsImdldExlZnRCb3R0b21Qb2ludCIsImdldFA0Iiwic29ydGluZ0ZhY3RvcnkiLCJvbGRPYmpzTGlzdCIsIm5ld09ianMiLCJpbmRleE9mTmV3cyIsIm9ianNMaXN0IiwiY29uY2F0Iiwib2JqIiwibmV3TGlzdCIsImxpc3RPbGRQb3NpdGlvbiIsIm1hcCIsIm5ld09iaiIsInNjb3BlcyIsIlNjb3BlIiwic2NvcGUiLCJyZW1vdmVJdGVtcyIsInRpbWVFbmQiLCJzaG90VGFyZ2V0cyIsImNhdGNoRHJhZ2dhYmxlIiwic29ydCIsImEiLCJiIiwiZ2V0UmVjdGFuZ2xlIiwiaW5uZXJEcmFnZ2FibGVzIiwicG9zaXRpb25zIiwidGFyZ2V0SW5kZXhlcyIsImZuIiwiY3VycmVudFNjb3BlIiwiYWRkRHJhZ2dhYmxlVG9TY29wZSIsImFkZFRhcmdldFRvU2NvcGUiLCJhZGRUYXJnZXQiLCJUYXJnZXQiLCJzY29wZUZhY3RvcnkiLCJwYXJlbnRFbGVtZW50IiwiZHJhZ2dhYmxlRWxlbWVudHMiLCJ0YXJnZXRFbGVtZW50cyIsImRyYWdnYWJsZU9wdGlvbnMiLCJ0YXJnZXRPcHRpb25zIiwic2NvcGVPcHRpb25zIiwiQXJyYXkiLCJ0aW1lRXhjYW5nZSIsInNvcnRpbmciLCJwb3NpdGlvbmluZyIsIm9uQWRkIiwiYmVmb3JlQWRkIiwib25SZW1vdmUiLCJyZWN0YW5nbGVzIiwiaW5kZXhlc09mTmV3IiwicmFuZ2UiLCJ0YXJnZXRSZWN0YW5nbGUiLCJkcmFnZ2FibGVTcXVhcmUiLCJuZXdEcmFnZ2FibGVzSW5kZXgiLCJhZGRSZW1vdmVPbk1vdmUiLCJwdXNoSW5uZXJEcmFnZ2FibGUiLCJyZW1vdmVIYW5kbGVyIiwiaGFzQ2xhc3MiLCJjIiwicmUiLCJSZWdFeHAiLCJjbGFzc05hbWUiLCJzdG9wIiwic3RlcCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FB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QUkwUixJQUF6RCxFQUErRDtBQUM3RDVHLFVBQU0sQ0FBQ3RLLElBQVAsQ0FBWVIsQ0FBWjtBQUNEOztBQUNELFNBQU84SyxNQUFQO0FBQ0QsQyIsImZpbGUiOiJhcmNzbGlkZXIuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJEcmFnZWVcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiRHJhZ2VlXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkRyYWdlZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvYXJjc2xpZGVyLmpzXCIpO1xuIiwiLyohXG4gKiBnZXRTdHlsZVByb3BlcnR5IHYxLjAuNFxuICogb3JpZ2luYWwgYnkga2FuZ2F4XG4gKiBodHRwOi8vcGVyZmVjdGlvbmtpbGxzLmNvbS9mZWF0dXJlLXRlc3RpbmctY3NzLXByb3BlcnRpZXMvXG4gKiBNSVQgbGljZW5zZVxuICovXG5cbi8qanNoaW50IGJyb3dzZXI6IHRydWUsIHN0cmljdDogdHJ1ZSwgdW5kZWY6IHRydWUgKi9cbi8qZ2xvYmFsIGRlZmluZTogZmFsc2UsIGV4cG9ydHM6IGZhbHNlLCBtb2R1bGU6IGZhbHNlICovXG5cbiggZnVuY3Rpb24oIHdpbmRvdyApIHtcblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgcHJlZml4ZXMgPSAnV2Via2l0IE1veiBtcyBNcyBPJy5zcGxpdCgnICcpO1xudmFyIGRvY0VsZW1TdHlsZSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZTtcblxuZnVuY3Rpb24gZ2V0U3R5bGVQcm9wZXJ0eSggcHJvcE5hbWUgKSB7XG4gIGlmICggIXByb3BOYW1lICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIHRlc3Qgc3RhbmRhcmQgcHJvcGVydHkgZmlyc3RcbiAgaWYgKCB0eXBlb2YgZG9jRWxlbVN0eWxlWyBwcm9wTmFtZSBdID09PSAnc3RyaW5nJyApIHtcbiAgICByZXR1cm4gcHJvcE5hbWU7XG4gIH1cblxuICAvLyBjYXBpdGFsaXplXG4gIHByb3BOYW1lID0gcHJvcE5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBwcm9wTmFtZS5zbGljZSgxKTtcblxuICAvLyB0ZXN0IHZlbmRvciBzcGVjaWZpYyBwcm9wZXJ0aWVzXG4gIHZhciBwcmVmaXhlZDtcbiAgZm9yICggdmFyIGk9MCwgbGVuID0gcHJlZml4ZXMubGVuZ3RoOyBpIDwgbGVuOyBpKysgKSB7XG4gICAgcHJlZml4ZWQgPSBwcmVmaXhlc1tpXSArIHByb3BOYW1lO1xuICAgIGlmICggdHlwZW9mIGRvY0VsZW1TdHlsZVsgcHJlZml4ZWQgXSA9PT0gJ3N0cmluZycgKSB7XG4gICAgICByZXR1cm4gcHJlZml4ZWQ7XG4gICAgfVxuICB9XG59XG5cbi8vIHRyYW5zcG9ydFxuaWYgKCB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gIC8vIEFNRFxuICBkZWZpbmUoIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBnZXRTdHlsZVByb3BlcnR5O1xuICB9KTtcbn0gZWxzZSBpZiAoIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyApIHtcbiAgLy8gQ29tbW9uSlMgZm9yIENvbXBvbmVudFxuICBtb2R1bGUuZXhwb3J0cyA9IGdldFN0eWxlUHJvcGVydHk7XG59IGVsc2Uge1xuICAvLyBicm93c2VyIGdsb2JhbFxuICB3aW5kb3cuZ2V0U3R5bGVQcm9wZXJ0eSA9IGdldFN0eWxlUHJvcGVydHk7XG59XG5cbn0pKCB3aW5kb3cgKTtcbiIsIi8qKlxuICogUmVtb3ZlIGEgcmFuZ2Ugb2YgaXRlbXMgZnJvbSBhbiBhcnJheVxuICpcbiAqIEBmdW5jdGlvbiByZW1vdmVJdGVtc1xuICogQHBhcmFtIHtBcnJheTwqPn0gYXJyIFRoZSB0YXJnZXQgYXJyYXlcbiAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydElkeCBUaGUgaW5kZXggdG8gYmVnaW4gcmVtb3ZpbmcgZnJvbSAoaW5jbHVzaXZlKVxuICogQHBhcmFtIHtudW1iZXJ9IHJlbW92ZUNvdW50IEhvdyBtYW55IGl0ZW1zIHRvIHJlbW92ZVxuICovXG5mdW5jdGlvbiByZW1vdmVJdGVtcyAoYXJyLCBzdGFydElkeCwgcmVtb3ZlQ291bnQpIHtcbiAgdmFyIGksIGxlbmd0aCA9IGFyci5sZW5ndGg7XG5cbiAgaWYgKHN0YXJ0SWR4ID49IGxlbmd0aCB8fCByZW1vdmVDb3VudCA9PT0gMCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgcmVtb3ZlQ291bnQgPSAoc3RhcnRJZHggKyByZW1vdmVDb3VudCA+IGxlbmd0aCA/IGxlbmd0aCAtIHN0YXJ0SWR4IDogcmVtb3ZlQ291bnQpO1xuXG4gIHZhciBsZW4gPSBsZW5ndGggLSByZW1vdmVDb3VudDtcblxuICBmb3IgKGkgPSBzdGFydElkeDsgaSA8IGxlbjsgKytpKSB7XG4gICAgYXJyW2ldID0gYXJyW2kgKyByZW1vdmVDb3VudF07XG4gIH1cblxuICBhcnIubGVuZ3RoID0gbGVuO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZW1vdmVJdGVtcztcbiIsImltcG9ydCB7IEdlb21ldHJ5IH0gZnJvbSAnLi9nZW9tZXRyeSdcbmltcG9ydCB7IERyYWdnYWJsZSB9IGZyb20gJy4vZHJhZ2dhYmxlJ1xuaW1wb3J0IHsgYm91bmRUb0FyYyB9IGZyb20gJy4vYm91bmQnXG5cbmNsYXNzIEFyY1NsaWRlciB7XG4gIGNvbnN0cnVjdG9yKGFyZWEsIGVsZW1lbnQsIG9wdGlvbnM9e30pIHtcbiAgICBjb25zdCBhcmVhUmVjdGFuZ2xlID0gR2VvbWV0cnkuY3JlYXRlUmVjdGFuZ2xlRnJvbUVsZW1lbnQoYXJlYSwgYXJlYSlcbiAgICBjb25zdCBoYWxmU2l6ZSA9IEdlb21ldHJ5LmdldFNpemVPZkVsZW1lbnQoZWxlbWVudCkubXVsdCgwLjUpXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjZW50ZXI6IGFyZWFSZWN0YW5nbGUuZ2V0Q2VudGVyKCksXG4gICAgICByYWRpdXM6IGFyZWFSZWN0YW5nbGUuZ2V0TWluU2lkZSgpIC8gMixcbiAgICAgIHN0YXJ0QW5nbGU6IE1hdGguUEksXG4gICAgICBlbmRBbmdsZTogMCxcbiAgICAgIGFuZ2xlczogW01hdGguUEksIC1NYXRoLlBJIC8gNCwgMCwgTWF0aC5QSSAvIDQsIE1hdGguUEkgLyAyXSxcbiAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbigpIHt9LFxuICAgICAgdGltZTogNTAwXG4gICAgfSwgb3B0aW9ucylcblxuICAgIHRoaXMuc2hpZnRlZENlbnRlciA9IHRoaXMub3B0aW9ucy5jZW50ZXIuc3ViKGhhbGZTaXplKVxuICAgIHRoaXMub25DaGFuZ2UgPSB0aGlzLm9wdGlvbnMub25DaGFuZ2VcbiAgICB0aGlzLmFyZWEgPSBhcmVhXG4gICAgdGhpcy5pbml0KGVsZW1lbnQpXG4gIH1cblxuICBpbml0KGVsZW1lbnQpIHtcbiAgICBjb25zdCBhbmdsZSA9IHRoaXMub3B0aW9ucy5zdGFydEFuZ2xlXG4gICAgY29uc3QgcG9zaXRpb24gPSBHZW9tZXRyeS5nZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oXG4gICAgICBhbmdsZSxcbiAgICAgIHRoaXMub3B0aW9ucy5yYWRpdXMsXG4gICAgICB0aGlzLnNoaWZ0ZWRDZW50ZXJcbiAgICApXG4gICAgY29uc3QgYm91bmQgPSBib3VuZFRvQXJjKFxuICAgICAgdGhpcy5zaGlmdGVkQ2VudGVyLFxuICAgICAgdGhpcy5vcHRpb25zLnJhZGl1cyxcbiAgICAgIHRoaXMub3B0aW9ucy5zdGFydEFuZ2xlLFxuICAgICAgdGhpcy5vcHRpb25zLmVuZEFuZ2xlXG4gICAgKVxuXG4gICAgdGhpcy5hbmdsZSA9IGFuZ2xlXG4gICAgdGhpcy5kcmFnZ2FibGUgPSBuZXcgRHJhZ2dhYmxlKGVsZW1lbnQsIHtcbiAgICAgIHBhcmVudDogdGhpcy5hcmVhLFxuICAgICAgYm91bmQ6IGJvdW5kLFxuICAgICAgcG9zaXRpb246IHBvc2l0aW9uLFxuICAgICAgb25Nb3ZlOiAoKSA9PiB7XG4gICAgICAgIHRoaXMuY2hhbmdlKClcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgdXBkYXRlQW5nbGUoKSB7XG4gICAgdGhpcy5hbmdsZSA9IEdlb21ldHJ5LmdldEFuZ2xlKHRoaXMuc2hpZnRlZENlbnRlciwgdGhpcy5kcmFnZ2FibGUucG9zaXRpb24pXG4gIH1cblxuICBjaGFuZ2UoKSB7XG4gICAgdGhpcy51cGRhdGVBbmdsZSgpXG4gICAgLy8gICAgICB2YXIgYW5nbGUgPSBHZW9tZXRyeS5nZXROZWFyZXN0QW5nbGUodGhpcy5vcHRpb25zLmFuZ2xlcywgdGhpcy5hbmdsZSk7XG4gICAgLy8gICAgICB0aGlzLnNldEFuZ2xlKGFuZ2xlLHRoaXMub3B0aW9ucy50aW1lKTtcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMuYW5nbGUpXG4gIH1cblxuICBzZXRBbmdsZShhbmdsZSwgdGltZSkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gR2VvbWV0cnkuZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKFxuICAgICAgdGhpcy5hbmdsZSxcbiAgICAgIHRoaXMub3B0aW9ucy5yYWRpdXMsXG4gICAgICB0aGlzLnNoaWZ0ZWRDZW50ZXJcbiAgICApXG4gICAgdGhpcy5hbmdsZSA9IEdlb21ldHJ5Lm5vcm1hbGl6ZUFuZ2xlKGFuZ2xlLCBwb3NpdGlvbilcbiAgICB0aGlzLmRyYWdnYWJsZS5tb3ZlKHBvc2l0aW9uLCB0aW1lfHwwLCB0cnVlLCB0cnVlKVxuICAgIHRoaXMub25DaGFuZ2UodGhpcy5hbmdsZSlcbiAgfVxufVxuXG5leHBvcnQgeyBBcmNTbGlkZXIgfVxuIiwiaW1wb3J0IHsgR2VvbWV0cnksIFBvaW50IH0gZnJvbSAnLi9nZW9tZXRyeSdcblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kVG9SZWN0YW5nbGUocmVjdGFuZ2xlKSB7XG4gIHJldHVybiBmdW5jdGlvbihwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IGNhbGNQb2ludCA9IHBvaW50LmNsb25lKCksXG4gICAgICByZWN0UDIgPSByZWN0YW5nbGUuZ2V0UDMoKVxuXG4gICAgaWYgKHJlY3RhbmdsZS5wb3NpdGlvbi54ID4gY2FsY1BvaW50LngpIHtcbiAgICAgIChjYWxjUG9pbnQueCA9IHJlY3RhbmdsZS5wb3NpdGlvbi54KVxuICAgIH1cbiAgICBpZiAocmVjdGFuZ2xlLnBvc2l0aW9uLnkgPiBjYWxjUG9pbnQueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSByZWN0YW5nbGUucG9zaXRpb24ueVxuICAgIH1cbiAgICBpZiAocmVjdFAyLnggPCBjYWxjUG9pbnQueCArIHNpemUueCkge1xuICAgICAgY2FsY1BvaW50LnggPSByZWN0UDIueCAtIHNpemUueFxuICAgIH1cbiAgICBpZiAocmVjdFAyLnkgPCBjYWxjUG9pbnQueSArIHNpemUueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSByZWN0UDIueSAtIHNpemUueVxuICAgIH1cblxuICAgIHJldHVybiBjYWxjUG9pbnRcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRUb0VsZW1lbnQoZWxlbWVudCwgcGFyZW50KSB7XG4gIGNvbnN0IHJldEZ1bmMgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gYm91bmQuYXBwbHkodGhpcywgYXJndW1lbnRzKVxuICB9XG4gIGxldCBib3VuZFxuXG4gIHJldEZ1bmMucmVmcmVzaCA9IGZ1bmN0aW9uKCkge1xuICAgIGJvdW5kID0gYm91bmRUb1JlY3RhbmdsZShHZW9tZXRyeS5jcmVhdGVSZWN0YW5nbGVGcm9tRWxlbWVudChlbGVtZW50LCBwYXJlbnQpKVxuICB9XG5cbiAgcmV0RnVuYy5yZWZyZXNoKClcbiAgcmV0dXJuIHJldEZ1bmNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kVG9MaW5lWCh4LCBzdGFydFksIGVuZFkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgY2FsY1BvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIGNhbGNQb2ludC54ID0geFxuICAgIGlmIChzdGFydFkgPiBjYWxjUG9pbnQueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSBzdGFydFlcbiAgICB9XG4gICAgaWYgKGVuZFkgPCBjYWxjUG9pbnQueSArIHNpemUueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSBlbmRZIC0gc2l6ZS55XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhbGNQb2ludFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZFRvTGluZVkoeSwgc3RhcnRYLCBlbmRYKSB7XG4gIHJldHVybiBmdW5jdGlvbihwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IGNhbGNQb2ludCA9IHBvaW50LmNsb25lKClcbiAgICBjYWxjUG9pbnQueSA9IHlcbiAgICBpZiAoc3RhcnRYID4gY2FsY1BvaW50LngpIHtcbiAgICAgIGNhbGNQb2ludC54ID0gc3RhcnRYXG4gICAgfVxuICAgIGlmIChlbmRYIDwgY2FsY1BvaW50LnggKyBzaXplLngpIHtcbiAgICAgIGNhbGNQb2ludC54ID0gZW5kWCAtIHNpemUueFxuICAgIH1cbiAgICByZXR1cm4gY2FsY1BvaW50XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kVG9MaW5lKHN0YXJ0LCBlbmQpIHtcbiAgY29uc3QgYWxwaGEgPSBNYXRoLmF0YW4yKGVuZC55IC0gc3RhcnQueSwgZW5kLnggLSBzdGFydC54KSxcbiAgICBiZXRhID0gYWxwaGEgKyBNYXRoLlBJIC8gMixcbiAgICBzb21lSyA9IDEwLFxuICAgIGNvc0JldGEgPSBNYXRoLmNvcyhiZXRhKSxcbiAgICBzaW5CZXRhID0gTWF0aC5zaW4oYmV0YSlcblxuICByZXR1cm4gZnVuY3Rpb24ocG9pbnQsIHNpemUpIHtcbiAgICBjb25zdCBwb2ludDIgPSBuZXcgUG9pbnQocG9pbnQueCArIHNvbWVLICogY29zQmV0YSwgcG9pbnQueSArIHNvbWVLICogc2luQmV0YSksXG4gICAgICBuZXdFbmQgPSBHZW9tZXRyeS5nZXRQb2ludEluTGluZUJ5TGVuZ2h0KGVuZCwgc3RhcnQsIHNpemUueClcbiAgICBsZXQgcG9pbnRDcm9zc2luZyA9IEdlb21ldHJ5LmRpcmVjdENyb3NzaW5nKHN0YXJ0LCBlbmQsIHBvaW50LCBwb2ludDIpXG5cbiAgICBwb2ludENyb3NzaW5nID0gR2VvbWV0cnkuYm91bmRUb0xpbmUoc3RhcnQsIG5ld0VuZCwgcG9pbnRDcm9zc2luZylcbiAgICByZXR1cm4gcG9pbnRDcm9zc2luZ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZFRvQ2lyY2xlKGNlbnRlciwgcmFkaXVzKSB7XG4gIHJldHVybiBmdW5jdGlvbihwb2ludCwgX3NpemUpIHtcbiAgICBjb25zdCBib3VuZGVkUG9pbnQgPSBHZW9tZXRyeS5nZXRQb2ludEluTGluZUJ5TGVuZ2h0KGNlbnRlciwgcG9pbnQsIHJhZGl1cylcbiAgICByZXR1cm4gYm91bmRlZFBvaW50XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kVG9BcmMoY2VudGVyLCByYWRpdXMsIHN0YXJ0QWdsZSwgZW5kQW5nbGUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHBvaW50LCBfc2l6ZSkge1xuICAgIGNvbnN0IGJvdW5kU3RhcnRBbmdsZSA9IHR5cGVvZiBzdGFydEFnbGUgPT09ICdmdW5jdGlvbicgPyBzdGFydEFnbGUoKSA6IHN0YXJ0QWdsZVxuICAgIGNvbnN0IGJvdW5kRW5kdEFuZ2xlID0gdHlwZW9mIHN0YXJ0QWdsZSA9PT0gJ2Z1bmN0aW9uJyA/IGVuZEFuZ2xlKCkgOiBlbmRBbmdsZVxuXG4gICAgbGV0IGFuZ2xlID0gR2VvbWV0cnkuZ2V0QW5nbGUoY2VudGVyLCBwb2ludClcbiAgICBhbmdsZSA9IEdlb21ldHJ5Lm5vcm1hbGl6ZUFuZ2xlKGFuZ2xlKVxuICAgIGFuZ2xlID0gR2VvbWV0cnkuYm91bmRBbmdsZShib3VuZFN0YXJ0QW5nbGUsIGJvdW5kRW5kdEFuZ2xlLCBhbmdsZSlcbiAgICByZXR1cm4gR2VvbWV0cnkuZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKGFuZ2xlLCByYWRpdXMsIGNlbnRlcilcbiAgfVxufVxuIiwiaW1wb3J0IHsgYWRkQ2xhc3MsIHJlbW92ZUNsYXNzIH0gZnJvbSAnLi91dGlscy9jbGFzc2VzJ1xuaW1wb3J0IGdldERlZmF1bHRQYXJlbnQgZnJvbSAnLi91dGlscy9nZXRkZWZhdWx0cGFyZW50J1xuaW1wb3J0IEV2ZW50IGZyb20gJy4vZXZlbnQnXG5pbXBvcnQgZ2V0U3R5bGVQcm9wZXJ0eSBmcm9tICdkZXNhbmRyby1nZXQtc3R5bGUtcHJvcGVydHknXG5pbXBvcnQgeyBib3VuZFRvRWxlbWVudCB9IGZyb20gJy4vYm91bmQnXG5pbXBvcnQgeyBHZW9tZXRyeSwgUG9pbnQsIFJlY3RhbmdsZSB9IGZyb20gJy4vZ2VvbWV0cnknXG5pbXBvcnQgeyBkZWZhdWx0U2NvcGUgfSBmcm9tICcuL3Njb3BlJ1xuXG5jb25zdCBEcmFnZWUgPSB7IEV2ZW50IH0gLy90b2RvIHJlbW92ZSBhZnRlciByZWZhY3RvcmVcblxuY29uc3QgaXNUb3VjaCA9ICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdywgbW91c2VFdmVudHMgPSB7XG4gICAgc3RhcnQ6ICdtb3VzZWRvd24nLFxuICAgIG1vdmU6ICdtb3VzZW1vdmUnLFxuICAgIGVuZDogJ21vdXNldXAnXG4gIH0sIHRvdWNoRXZlbnRzID0ge1xuICAgIHN0YXJ0OiAndG91Y2hzdGFydCcsXG4gICAgbW92ZTogJ3RvdWNobW92ZScsXG4gICAgZW5kOiAndG91Y2hlbmQnXG4gIH0sXG4gIGV2ZW50cyA9IGlzVG91Y2ggPyB0b3VjaEV2ZW50cyA6IG1vdXNlRXZlbnRzLFxuICBkcmFnZ2FibGVzID0gW10sXG4gIHRyYW5zZm9ybVByb3BlcnR5ID0gZ2V0U3R5bGVQcm9wZXJ0eSgndHJhbnNmb3JtJyksXG4gIHRyYW5zaXRpb25Qcm9wZXJ0eSA9IGdldFN0eWxlUHJvcGVydHkoJ3RyYW5zaXRpb24nKVxuXG5mdW5jdGlvbiBnZXRUb3VjaEJ5SUQoZWxlbWVudCwgdG91Y2hJZCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnQuY2hhbmdlZFRvdWNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZWxlbWVudC5jaGFuZ2VkVG91Y2hlc1tpXS5pZGVudGlmaWVyID09PSB0b3VjaElkKSB7XG4gICAgICByZXR1cm4gZWxlbWVudC5jaGFuZ2VkVG91Y2hlc1tpXVxuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cblxuZnVuY3Rpb24gcHJldmVudERvdWJsZUluaXQoZHJhZ2dhYmxlKSB7XG4gIGNvbnN0IG1lc3NhZ2UgPSBcImZvciB0aGlzIGVsZW1lbnQgRHJhZ2VlLkRyYWdnYWJsZSBpcyBhbHJlYWR5IGV4aXN0LCBkb24ndCBjcmVhdGUgaXQgdHdpY2UgXCJcbiAgaWYgKGRyYWdnYWJsZXMuc29tZSgoZXhpc3RpbmcpID0+IGRyYWdnYWJsZS5lbGVtZW50ID09PSBleGlzdGluZy5lbGVtZW50KSkge1xuICAgIHRocm93IG1lc3NhZ2VcbiAgfVxuICBkcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxufVxuXG5mdW5jdGlvbiBhZGRUb0RlZmF1bHRTY29wZShkcmFnZ2FibGUpIHtcbiAgZGVmYXVsdFNjb3BlLmFkZERyYWdnYWJsZShkcmFnZ2FibGUpXG59XG5cbmNsYXNzIERyYWdnYWJsZSB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIG9wdGlvbnM9e30pIHtcbiAgICBjb25zdCBwYXJlbnQgPSBvcHRpb25zLnBhcmVudCB8fCBnZXREZWZhdWx0UGFyZW50KGVsZW1lbnQpXG4gICAgdGhpcy50YXJnZXRzID0gW11cbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHBhcmVudDogcGFyZW50LFxuICAgICAgYm91bmQ6IGJvdW5kVG9FbGVtZW50KHBhcmVudCwgcGFyZW50KSxcbiAgICAgIHN0YXJ0RmlsdGVyOiBmYWxzZSxcbiAgICAgIGlzQ29udGVudEJveFNpemU6IGZhbHNlLFxuICAgICAgcG9zaXRpb246IGZhbHNlXG4gICAgfSwgb3B0aW9ucylcblxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5oYW5kbGVyID09PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5oYW5kbGVyID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKG9wdGlvbnMuaGFuZGxlcikgfHwgZWxlbWVudFxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhhbmRsZXIgPSBvcHRpb25zLmhhbmRsZXIgfHwgZWxlbWVudFxuICAgIH1cblxuICAgIHRoaXMub25FbmQgPSBuZXcgRHJhZ2VlLkV2ZW50KHRoaXMsIHsgaXNSZXZlcnNlOiB0cnVlLCBpc1N0b3BPblRydWU6IHRydWUgfSlcbiAgICB0aGlzLm9uTW92ZSA9IG5ldyBEcmFnZWUuRXZlbnQodGhpcylcbiAgICB0aGlzLm9uU3RhcnQgPSBuZXcgRHJhZ2VlLkV2ZW50KHRoaXMpXG5cbiAgICB0aGlzLm9uRW5kLmFkZCgoKSA9PiB0aGlzLm1vdmUodGhpcy5wb3NpdGlvbiwgMCwgdHJ1ZSwgdHJ1ZSkpXG5cbiAgICBpZiAob3B0aW9ucy5vbkVuZCkge1xuICAgICAgdGhpcy5vbkVuZC5hZGQob3B0aW9ucy5vbkVuZClcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMub25Nb3ZlKSB7XG4gICAgICB0aGlzLm9uTW92ZS5hZGQob3B0aW9ucy5vbk1vdmUpXG4gICAgfVxuICAgIGlmIChvcHRpb25zLm9uU3RhcnQpIHtcbiAgICAgIHRoaXMub25TdGFydC5hZGQob3B0aW9ucy5vblN0YXJ0KVxuICAgIH1cbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG4gICAgdGhpcy5ib3VuZCA9IHRoaXMub3B0aW9ucy5ib3VuZFxuICAgIHByZXZlbnREb3VibGVJbml0KHRoaXMpXG4gICAgRHJhZ2dhYmxlLm9uQ3JlYXRlLmZpcmUodGhpcylcbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLl9lbmFibGUgPSB0cnVlXG4gICAgdGhpcy5vZmZzZXQgPSBHZW9tZXRyeS5nZXRPZmZzZXQodGhpcy5lbGVtZW50LCB0aGlzLm9wdGlvbnMucGFyZW50LCB0cnVlKVxuICAgIHRoaXMuZml4UG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICAgIGlmICh0aGlzLm9wdGlvbnMucG9zaXRpb24pIHtcbiAgICAgIHRoaXMuaW5pdFBvc2l0aW9uID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uXG4gICAgICB0aGlzLm1vdmUodGhpcy5pbml0UG9zaXRpb24sIDAsIHRydWUsIHRydWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5pdFBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICB9XG4gICAgdGhpcy5fZHJhZ1N0YXJ0ID0gdGhpcy5kcmFnU3RhcnQuYmluZCh0aGlzKVxuICAgIHRoaXMuX2RyYWdNb3ZlID0gdGhpcy5kcmFnTW92ZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5fZHJhZ0VuZCA9IHRoaXMuZHJhZ0VuZC5iaW5kKHRoaXMpXG5cbiAgICB0aGlzLmhhbmRsZXIuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0KVxuICAgIHRoaXMuaGFuZGxlci5hZGRFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQpXG5cbiAgICBpZiAodGhpcy5ib3VuZC5yZWZyZXNoKSB7XG4gICAgICB0aGlzLmJvdW5kLnJlZnJlc2goKVxuICAgIH1cbiAgfVxuXG4gIHJlaW5pdCgpIHtcbiAgICB0aGlzLm9mZnNldCA9IEdlb21ldHJ5LmdldE9mZnNldCh0aGlzLmVsZW1lbnQsIHRoaXMub3B0aW9ucy5wYXJlbnQsIHRydWUpXG4gICAgdGhpcy5maXhQb3NpdGlvbiA9IHRoaXMub2Zmc2V0XG4gICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMub2Zmc2V0XG4gICAgaWYgKHRoaXMub3B0aW9ucy5wb3NpdGlvbikge1xuICAgICAgdGhpcy5pbml0UG9zaXRpb24gPSB0aGlzLm9wdGlvbnMucG9zaXRpb25cbiAgICAgIHRoaXMubW92ZSh0aGlzLmluaXRQb3NpdGlvbiwgMCwgdHJ1ZSwgdHJ1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbml0UG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICAgIH1cblxuICAgIGlmICh0aGlzLmJvdW5kLnJlZnJlc2gpIHtcbiAgICAgIHRoaXMuYm91bmQucmVmcmVzaCgpXG4gICAgfVxuICB9XG5cbiAgZ2V0U2l6ZShfcmVjYWx1bGF0ZSkge1xuICAgIHJldHVybiBHZW9tZXRyeS5nZXRTaXplT2ZFbGVtZW50KHRoaXMuZWxlbWVudCwgdGhpcy5vcHRpb25zLmlzQ29udGVudEJveFNpemUpXG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5vZmZzZXQuYWRkKHRoaXMuX3RyYW5zZm9ybVBvc2l0aW9uIHx8IG5ldyBQb2ludCgwLCAwKSlcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvblxuICB9XG5cbiAgZ2V0Q2VudGVyKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLmdldFNpemUoKS5tdWx0KDAuNSkpXG4gIH1cblxuICBfc2V0VHJhbnNsYXRlKHBvaW50KSB7XG4gICAgdGhpcy5fdHJhbnNmb3JtUG9zaXRpb24gPSBwb2ludFxuXG4gICAgbGV0IHRyYW5zZm9ybSA9IHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wZXJ0eV1cbiAgICBsZXQgdHJhbnNsYXRlQ3NzID0gJyB0cmFuc2xhdGUzZCgnICsgcG9pbnQueCArICdweCwnICsgcG9pbnQueSArICdweCwgMHB4KSdcblxuICAgIGNvbnN0IHVhID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnRcbiAgICBjb25zdCBtc2llID0gdWEuaW5kZXhPZignTVNJRSAnKVxuXG4gICAgaWYgKG1zaWUpIHtcbiAgICAgIHRyYW5zbGF0ZUNzcyA9ICcgdHJhbnNsYXRlKCcgKyBwb2ludC54ICsgJ3B4LCcgKyBwb2ludC55ICsgJ3B4KSdcbiAgICAgIGlmICghL3RyYW5zbGF0ZVxcKFteKV0rXFwpLy50ZXN0KHRyYW5zZm9ybSkpIHtcbiAgICAgICAgdHJhbnNmb3JtICs9IHRyYW5zbGF0ZUNzc1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJhbnNmb3JtID0gdHJhbnNmb3JtLnJlcGxhY2UoL3RyYW5zbGF0ZVxcKFteKV0rXFwpLywgdHJhbnNsYXRlQ3NzKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIS90cmFuc2xhdGUzZFxcKFteKV0rXFwpLy50ZXN0KHRyYW5zZm9ybSkpIHtcbiAgICAgICAgdHJhbnNmb3JtICs9IHRyYW5zbGF0ZUNzc1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJhbnNmb3JtID0gdHJhbnNmb3JtLnJlcGxhY2UoL3RyYW5zbGF0ZTNkXFwoW14pXStcXCkvLCB0cmFuc2xhdGVDc3MpXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BlcnR5XSA9IHRyYW5zZm9ybVxuICB9XG5cbiAgbW92ZShwb2ludCwgdGltZT0wLCBpc0ZpeD1mYWxzZSwgaXNTaWxlbnQ9ZmFsc2UpIHtcbiAgICBwb2ludCA9IHBvaW50LmNsb25lKClcbiAgICBpZiAoaXNGaXgpIHtcbiAgICAgIHRoaXMuZml4UG9zaXRpb24gPSBwb2ludFxuICAgIH1cblxuICAgIHRoaXMuZGV0ZXJtaW5lRGlyZWN0aW9uKHBvaW50KVxuXG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvaW50XG5cbiAgICBpZiAodHJhbnNpdGlvblByb3BlcnR5KSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNpdGlvblByb3BlcnR5XSA9IHRpbWUgKyAnbXMnXG4gICAgfVxuXG4gICAgdGhpcy5fc2V0VHJhbnNsYXRlKHBvaW50LnN1Yih0aGlzLm9mZnNldCkpXG4gICAgaWYgKCFpc1NpbGVudCkge1xuICAgICAgdGhpcy5vbk1vdmUuZmlyZSgpXG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaFBvc2l0aW9uICgpIHtcbiAgICB0aGlzLnNldFBvc2l0aW9uKHRoaXMuZ2V0UG9zaXRpb24oKSlcbiAgfVxuXG4gIHNldFBvc2l0aW9uKHBvaW50KSB7XG4gICAgcG9pbnQgPSBwb2ludC5jbG9uZSgpXG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvaW50XG5cbiAgICBpZiAodHJhbnNpdGlvblByb3BlcnR5KSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNpdGlvblByb3BlcnR5XSA9ICcwbXMnXG4gICAgfVxuXG4gICAgdGhpcy5fc2V0VHJhbnNsYXRlKHBvaW50LnN1Yih0aGlzLm9mZnNldCkpXG4gIH1cblxuICBzZXRaZXJvVHJhbnNpdGlvbigpIHtcbiAgICBpZiAodHJhbnNpdGlvblByb3BlcnR5KSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNpdGlvblByb3BlcnR5XSA9ICcwbXMnXG4gICAgfVxuICB9XG5cbiAgZGV0ZXJtaW5lRGlyZWN0aW9uKHBvaW50KSB7XG4gICAgdGhpcy5sZWZ0RGlyZWN0aW9uID0gKHRoaXMucG9zaXRpb24ueCA8IHBvaW50LngpXG4gICAgdGhpcy5yaWdodERpcmVjdGlvbiA9ICh0aGlzLnBvc2l0aW9uLnggPiBwb2ludC54KVxuICAgIHRoaXMudXBEaXJlY3Rpb24gPSAodGhpcy5wb3NpdGlvbi55ID4gcG9pbnQueSlcbiAgICB0aGlzLmRvd25EaXJlY3Rpb24gPSAodGhpcy5wb3NpdGlvbi55IDwgcG9pbnQueSlcbiAgfVxuXG4gIGRyYWdTdGFydChldmVudCkge1xuICAgIHRoaXMuY3VycmVudEV2ZW50ID0gZXZlbnRcbiAgICBpZiAoIXRoaXMuX2VuYWJsZSB8fCAodGhpcy5vcHRpb25zLnN0YXJ0RmlsdGVyICYmICF0aGlzLm9wdGlvbnMuc3RhcnRGaWx0ZXIoZXZlbnQpKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaXNUb3VjaEV2ZW50ID0gKGlzVG91Y2ggJiYgKGV2ZW50IGluc3RhbmNlb2Ygd2luZG93LlRvdWNoRXZlbnQpKVxuXG4gICAgdGhpcy5fc3RhcnRUb3VjaFBvaW50ID0gbmV3IFBvaW50KGlzVG91Y2hFdmVudCA/IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYIDogZXZlbnQuY2xpZW50WCwgaXNUb3VjaEV2ZW50ID8gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVkgOiBldmVudC5jbGllbnRZKVxuXG4gICAgdGhpcy5fc3RhcnRQb3NpdGlvbiA9IHRoaXMuZ2V0UG9zaXRpb24oKVxuICAgIGlmIChpc1RvdWNoRXZlbnQpIHtcbiAgICAgIHRoaXMuX3RvdWNoSWQgPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5pZGVudGlmaWVyXG4gICAgfVxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgaWYgKCEoZXZlbnQudGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJbnB1dEVsZW1lbnQgfHxcbiAgICAgICAgICBldmVudC50YXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElucHV0RWxlbWVudCkpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB9IGVsc2Uge1xuICAgICAgZXZlbnQudGFyZ2V0LmZvY3VzKClcbiAgICB9XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcblxuICAgIHRoaXMuaXNEcmFnZ2luZyA9IHRydWVcblxuICAgIHRoaXMub25TdGFydC5maXJlKGV2ZW50KVxuICAgIGFkZENsYXNzKHRoaXMuZWxlbWVudCwgJ2FjdGl2ZScpXG4gICAgdGhpcy5vbk1vdmUuZmlyZShldmVudClcbiAgfVxuXG4gIGRyYWdNb3ZlKGV2ZW50KSB7XG4gICAgdGhpcy5jdXJyZW50RXZlbnQgPSBldmVudFxuICAgIGxldCB0b3VjaFxuXG4gICAgY29uc3QgaXNUb3VjaEV2ZW50ID0gKGlzVG91Y2ggJiYgKGV2ZW50IGluc3RhbmNlb2Ygd2luZG93LlRvdWNoRXZlbnQpKVxuICAgIGlmIChpc1RvdWNoRXZlbnQpIHtcbiAgICAgIHRvdWNoID0gZ2V0VG91Y2hCeUlEKGV2ZW50LCB0aGlzLl90b3VjaElkKVxuXG4gICAgICBpZiAoIXRvdWNoKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IHRvdWNoUG9pbnQgPSBuZXcgUG9pbnQoaXNUb3VjaEV2ZW50ID8gdG91Y2gucGFnZVggOiBldmVudC5jbGllbnRYLCBpc1RvdWNoRXZlbnQgPyB0b3VjaC5wYWdlWSA6IGV2ZW50LmNsaWVudFkpXG4gICAgbGV0IHBvaW50ID0gdGhpcy5fc3RhcnRQb3NpdGlvbi5hZGQodG91Y2hQb2ludC5zdWIodGhpcy5fc3RhcnRUb3VjaFBvaW50KSlcbiAgICBwb2ludCA9IHRoaXMuYm91bmQocG9pbnQsIHRoaXMuZ2V0U2l6ZSgpKVxuICAgIHRoaXMudG91Y2hQb2ludCA9IHRvdWNoUG9pbnRcbiAgICB0aGlzLm1vdmUocG9pbnQsIDApXG4gIH1cblxuICBkcmFnRW5kKGV2ZW50KSB7XG4gICAgY29uc3QgaXNUb3VjaEV2ZW50ID0gKGlzVG91Y2ggJiYgKGV2ZW50IGluc3RhbmNlb2Ygd2luZG93LlRvdWNoRXZlbnQpKVxuXG4gICAgaWYgKGlzVG91Y2hFdmVudCAmJiAhZ2V0VG91Y2hCeUlEKGV2ZW50LCB0aGlzLl90b3VjaElkKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhpcy5vbkVuZC5maXJlKGV2ZW50KVxuXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG5cbiAgICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZVxuICAgIHJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudCwgJ2FjdGl2ZScpXG4gIH1cblxuICBnZXRSZWN0YW5nbGUoKSB7XG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUodGhpcy5wb3NpdGlvbiwgdGhpcy5nZXRTaXplKCkpXG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIHRoaXMuZ2V0U2l6ZSh0cnVlKVxuICAgIGlmICh0aGlzLmJvdW5kLnJlZnJlc2gpIHtcbiAgICAgIHRoaXMuYm91bmQucmVmcmVzaCgpXG4gICAgfVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmhhbmRsZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0KVxuICAgIHRoaXMuaGFuZGxlci5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuXG4gICAgdGhpcy5vbkVuZC5yZXNldCgpXG4gICAgdGhpcy5vbk1vdmUucmVzZXQoKVxuICB9XG5cbiAgZ2V0IGVuYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlXG4gIH1cblxuICBzZXQgZW5hYmxlKGVuYWJsZSkge1xuICAgIGlmIChlbmFibGUpIHtcbiAgICAgIHJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudCwgJ2Rpc2FibGUnKVxuICAgIH0gZWxzZSB7XG4gICAgICBhZGRDbGFzcyh0aGlzLmVsZW1lbnQsICdkaXNhYmxlJylcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlID0gZW5hYmxlXG4gIH1cbn1cblxuRHJhZ2dhYmxlLm9uQ3JlYXRlID0gbmV3IERyYWdlZS5FdmVudChEcmFnZ2FibGUsIHsgaXNSZXZlcnNlOiB0cnVlLCBpc1N0b3BPblRydWU6IHRydWUgfSlcbkRyYWdnYWJsZS5vbkNyZWF0ZS5hZGQoYWRkVG9EZWZhdWx0U2NvcGUpXG5cbmV4cG9ydCB7IERyYWdnYWJsZSwgZXZlbnRzIH1cbiIsIid1c2Ugc3RyaWN0J1xuXG5mdW5jdGlvbiBFdmVudChjb250ZXh0LCBvcHRpb25zID0ge30pIHtcbiAgdGhpcy5mdW5jcyA9IFtdXG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHRcbiAgdGhpcy5pc1JldmVyc2UgPSBvcHRpb25zLmlzUmV2ZXJzZSB8fCBmYWxzZVxuICB0aGlzLmlzU3RvcE9uVHJ1ZSA9IG9wdGlvbnMuaXNTdG9wT25UcnVlIHx8IGZhbHNlXG59XG5cbkV2ZW50LnByb3RvdHlwZS5maXJlID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cylcbiAgY29uc3QgZnMgPSB0aGlzLmlzUmV2ZXJzZSA/IHRoaXMuZnVuY3Muc2xpY2UoKS5yZXZlcnNlKCkgOiB0aGlzLmZ1bmNzXG4gIGxldCByZXRWYWx1ZVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZnMubGVuZ3RoOyBpKyspIHtcbiAgICByZXRWYWx1ZSA9IGZzW2ldLmFwcGx5KHRoaXMuY29udGV4dCwgYXJncylcbiAgICBpZiAodGhpcy5pc1N0b3BPblRydWUgJiYgcmV0VmFsdWUpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICB9XG4gIHJldHVybiAhdGhpcy5pc1N0b3BPblRydWVcbn1cblxuRXZlbnQucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKGYpIHtcbiAgdGhpcy5mdW5jcy5wdXNoKGYpXG59XG5cbkV2ZW50LnByb3RvdHlwZS51bnNoaWZ0ID0gZnVuY3Rpb24oZikge1xuICB0aGlzLmZ1bmNzLnVuc2hpZnQoZilcbn1cblxuRXZlbnQucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKGYpIHtcbiAgY29uc3QgaW5kZXggPSB0aGlzLmZ1bmNzLmluZGV4T2YoZilcbiAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgIHRoaXMuZnVuY3Muc3BsaWNlKGluZGV4LCAxKVxuICB9XG59XG5cbkV2ZW50LnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uKF9mKSB7XG4gIHRoaXMuZnVuY3MgPSBbXVxufVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudFxuIiwiY2xhc3MgUG9pbnQge1xuICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgdGhpcy54ID0geFxuICAgIHRoaXMueSA9IHlcbiAgfVxuXG4gIGFkZChwKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnggKyBwLngsIHRoaXMueSArIHAueSlcbiAgfVxuXG4gIHN1YihwKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnggLSBwLngsIHRoaXMueSAtIHAueSlcbiAgfVxuXG4gIG11bHQoaykge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54ICogaywgdGhpcy55ICogaylcbiAgfVxuXG4gIG5lZ2F0aXZlKCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQoLXRoaXMueCwgLXRoaXMueSlcbiAgfVxuXG4gIGNvbXBhcmUocCkge1xuICAgIHJldHVybiAodGhpcy54ID09PSBwLnggJiYgdGhpcy55ID09PSBwLnkpXG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCwgdGhpcy55KVxuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIGB7eD0ke3RoaXMueH0seT0ke3RoaXMueX1gXG4gIH1cbn1cblxuY2xhc3MgUmVjdGFuZ2xlIHtcbiAgY29uc3RydWN0b3IocG9zaXRpb24sIHNpemUpIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb25cbiAgICB0aGlzLnNpemUgPSBzaXplXG4gIH1cblxuICBnZXRQMSgpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvblxuICB9XG5cbiAgZ2V0UDIoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnNpemUueCwgdGhpcy5wb3NpdGlvbi55KVxuICB9XG5cbiAgZ2V0UDMoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb24uYWRkKHRoaXMuc2l6ZSlcbiAgfVxuXG4gIGdldFA0KCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSlcbiAgfVxuXG4gIGdldENlbnRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi5hZGQodGhpcy5zaXplLm11bHQoMC41KSlcbiAgfVxuXG4gIG9yKHJlY3QpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IG5ldyBQb2ludChNYXRoLm1pbih0aGlzLnBvc2l0aW9uLngsIHJlY3QucG9zaXRpb24ueCksIE1hdGgubWluKHRoaXMucG9zaXRpb24ueSwgcmVjdC5wb3NpdGlvbi55KSlcbiAgICBjb25zdCBzaXplID0gKG5ldyBQb2ludChNYXRoLm1heCh0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnNpemUueCwgcmVjdC5wb3NpdGlvbi54ICsgcmVjdC5zaXplLngpLCBNYXRoLm1heCh0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSwgcmVjdC5wb3NpdGlvbi55ICsgcmVjdC5zaXplLnkpKSkuc3ViKHBvc2l0aW9uKVxuICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHBvc2l0aW9uLCBzaXplKVxuICB9XG5cbiAgYW5kKHJlY3QpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IG5ldyBQb2ludChNYXRoLm1heCh0aGlzLnBvc2l0aW9uLngsIHJlY3QucG9zaXRpb24ueCksIE1hdGgubWF4KHRoaXMucG9zaXRpb24ueSwgcmVjdC5wb3NpdGlvbi55KSlcbiAgICBjb25zdCBzaXplID0gKG5ldyBQb2ludChNYXRoLm1pbih0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnNpemUueCwgcmVjdC5wb3NpdGlvbi54ICsgcmVjdC5zaXplLngpLCBNYXRoLm1pbih0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSwgcmVjdC5wb3NpdGlvbi55ICsgcmVjdC5zaXplLnkpKSkuc3ViKHBvc2l0aW9uKVxuICAgIGlmIChzaXplLnggPD0gMCB8fCBzaXplLnkgPD0gMCkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUocG9zaXRpb24sIHNpemUpXG4gIH1cblxuICBpbmNsdWRlUG9pbnQocCkge1xuICAgIHJldHVybiAhKHRoaXMucG9zaXRpb24ueCA+IHAueCB8fCB0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnNpemUueCA8IHAueCB8fCB0aGlzLnBvc2l0aW9uLnkgPiBwLnkgfHwgdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnkgPCBwLnkpXG4gIH1cblxuICBpbmNsdWRlUmVjdGFuZ2xlKHJlY3RhbmdsZSkge1xuICAgIHJldHVybiB0aGlzLmluY2x1ZGVQb2ludChyZWN0YW5nbGUucG9zaXRpb24pICYmIHRoaXMuaW5jbHVkZVBvaW50KHJlY3RhbmdsZS5nZXRQMygpKVxuICB9XG5cbiAgbW92ZVRvQm91bmQocmVjdCwgYXhpcykge1xuICAgIGxldCBzZWxBeGlzLCBjcm9zc1JlY3RhbmdsZVxuICAgIGlmIChheGlzKSB7XG4gICAgICBzZWxBeGlzID0gYXhpc1xuICAgIH0gZWxzZSB7XG4gICAgICBjcm9zc1JlY3RhbmdsZSA9IHRoaXMuYW5kKHJlY3QpXG4gICAgICBpZiAoIWNyb3NzUmVjdGFuZ2xlKSB7XG4gICAgICAgIHJldHVybiByZWN0XG4gICAgICB9XG4gICAgICBzZWxBeGlzID0gY3Jvc3NSZWN0YW5nbGUuc2l6ZS54ID4gY3Jvc3NSZWN0YW5nbGUuc2l6ZS55ID8gJ3knIDogJ3gnXG4gICAgfVxuICAgIGNvbnN0IHRoaXNDZW50ZXIgPSB0aGlzLmdldENlbnRlcigpXG4gICAgY29uc3QgcmVjdENlbnRlciA9IHJlY3QuZ2V0Q2VudGVyKClcbiAgICBjb25zdCBzaWduID0gdGhpc0NlbnRlcltzZWxBeGlzXSA+IHJlY3RDZW50ZXJbc2VsQXhpc10gPyAtMSA6IDFcbiAgICBjb25zdCBvZmZzZXQgPSBzaWduID4gMCA/IHRoaXMucG9zaXRpb25bc2VsQXhpc10gKyB0aGlzLnNpemVbc2VsQXhpc10gLSByZWN0LnBvc2l0aW9uW3NlbEF4aXNdIDogdGhpcy5wb3NpdGlvbltzZWxBeGlzXSAtIChyZWN0LnBvc2l0aW9uW3NlbEF4aXNdICsgcmVjdC5zaXplW3NlbEF4aXNdKVxuICAgIHJlY3QucG9zaXRpb25bc2VsQXhpc10gPSByZWN0LnBvc2l0aW9uW3NlbEF4aXNdICsgb2Zmc2V0XG4gICAgcmV0dXJuIHJlY3RcbiAgfVxuXG4gIGdldFNxdWFyZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zaXplLnggKiB0aGlzLnNpemUueVxuICB9XG5cbiAgc3R5bGVBcHBseShlbCkge1xuICAgIGVsID0gZWwgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5kJylcbiAgICBlbC5zdHlsZS5sZWZ0ID0gdGhpcy5wb3NpdGlvbi54ICsgJ3B4J1xuICAgIGVsLnN0eWxlLnRvcCA9IHRoaXMucG9zaXRpb24ueSArICdweCdcbiAgICBlbC5zdHlsZS53aWR0aCA9IHRoaXMuc2l6ZS54ICsgJ3B4J1xuICAgIGVsLnN0eWxlLmhlaWdodCA9IHRoaXMuc2l6ZS55ICsgJ3B4J1xuICB9XG5cbiAgZ3Jvd3RoKHNpemUpIHtcbiAgICB0aGlzLnNpemUgPSB0aGlzLnNpemUuYWRkKHNpemUpXG4gICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMucG9zaXRpb24uYWRkKHNpemUubXVsdCgtMC41KSlcbiAgfVxuXG4gIGdldE1pblNpZGUoKSB7XG4gICAgcmV0dXJuIE1hdGgubWluKHRoaXMuc2l6ZS54LCB0aGlzLnNpemUueSlcbiAgfVxufVxuXG4vKioqKioqKioqKioqKioqKiovXG5jb25zdCBHZW9tZXRyeSA9IHtcbiAgZ2V0RGlzdGFuY2UocDEsIHAyKSB7XG4gICAgY29uc3QgZHggPSBwMS54IC0gcDIueCwgZHkgPSBwMS55IC0gcDIueVxuICAgIHJldHVybiBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpXG4gIH0sXG4gIGRpc3RhbmNlKHAxLCBwMikge1xuICAgIHJldHVybiBHZW9tZXRyeS5nZXREaXN0YW5jZShwMSwgcDIpXG4gIH0sXG4gIGdldFhEaWZmZXJlbmNlKHAxLCBwMikge1xuICAgIHJldHVybiBNYXRoLmFicyhwMS54IC0gcDIueClcbiAgfSxcbiAgZ2V0WURpZmZlcmVuY2UocDEsIHAyKSB7XG4gICAgcmV0dXJuIE1hdGguYWJzKHAxLnkgLSBwMi55KVxuICB9LFxuICB0cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5KG9wdGlvbnMpIHtcbiAgICByZXR1cm4gKHAxLCBwMikgPT4ge1xuICAgICAgcmV0dXJuIE1hdGguc3FydChcbiAgICAgICAgTWF0aC5wb3cob3B0aW9ucy54ICogTWF0aC5hYnMocDEueCAtIHAyLngpLCAyKSArXG4gICAgICAgIE1hdGgucG93KG9wdGlvbnMueSAqIE1hdGguYWJzKHAxLnkgLSBwMi55KSwgMilcbiAgICAgIClcbiAgICB9XG4gIH0sXG4gIGluZGV4T2ZOZWFyZXN0UG9pbnQoYXJyLCB2YWwsIHJhZGl1cywgZ2V0RGlzdGFuY2UpIHtcbiAgICBsZXQgc2l6ZSwgaW5kZXggPSAwLCBpLCB0ZW1wXG4gICAgZ2V0RGlzdGFuY2UgPSBnZXREaXN0YW5jZSB8fCBHZW9tZXRyeS5nZXREaXN0YW5jZVxuICAgIGlmIChhcnIubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gLTFcbiAgICB9XG4gICAgc2l6ZSA9IGdldERpc3RhbmNlKGFyclswXSwgdmFsKVxuICAgIGZvciAoaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRlbXAgPSBnZXREaXN0YW5jZShhcnJbaV0sIHZhbClcbiAgICAgIGlmICh0ZW1wIDwgc2l6ZSkge1xuICAgICAgICBzaXplID0gdGVtcFxuICAgICAgICBpbmRleCA9IGlcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHJhZGl1cyA+PSAwICYmIHNpemUgPiByYWRpdXMpIHtcbiAgICAgIHJldHVybiAtMVxuICAgIH1cbiAgICByZXR1cm4gaW5kZXhcbiAgfSxcbiAgYm91bmQobWluLCBtYXgsIHZhbCkge1xuICAgIHJldHVybiBNYXRoLm1heChtaW4sIE1hdGgubWluKG1heCwgdmFsKSlcbiAgfSxcbiAgYm91bmRQb2ludChtaW4sIG1heCwgdmFsKSB7XG4gICAgY29uc3QgeCA9IE1hdGgubWF4KG1pbi54LCBNYXRoLm1pbihtYXgueCwgdmFsLngpKVxuICAgIGNvbnN0IHkgPSBNYXRoLm1heChtaW4ueSwgTWF0aC5taW4obWF4LnksIHZhbC55KSlcbiAgICByZXR1cm4gbmV3IFBvaW50KHgsIHkpXG4gIH0sXG4gICAgLy9SZXR1cm4gY3Jvc3NpbmcgcG9pbnQgb2YgdHdvIGxpbmVzXG4gIGRpcmVjdENyb3NzaW5nKEwxUDEsIEwxUDIsIEwyUDEsIEwyUDIpIHtcbiAgICBsZXQgdGVtcCwgazEsIGsyLCBiMSwgYjIsIHgsIHlcbiAgICBpZiAoTDJQMS54ID09PSBMMlAyLngpIHtcbiAgICAgIHRlbXAgPSBMMlAxXG4gICAgICBMMlAxID0gTDFQMVxuICAgICAgTDFQMSA9IHRlbXBcbiAgICAgIHRlbXAgPSBMMlAyXG4gICAgICBMMlAyID0gTDFQMlxuICAgICAgTDFQMiA9IHRlbXBcbiAgICB9XG4gICAgaWYgKEwxUDEueCA9PT0gTDFQMi54KSB7XG4gICAgICBrMiA9IChMMlAyLnkgLSBMMlAxLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICAgIGIyID0gKEwyUDIueCAqIEwyUDEueSAtIEwyUDEueCAqIEwyUDIueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgICAgeCA9IEwxUDEueFxuICAgICAgeSA9IHggKiBrMiArIGIyXG4gICAgICByZXR1cm4gbmV3IFBvaW50KHgsIHkpXG4gICAgfSBlbHNlIHtcbiAgICAgIGsxID0gKEwxUDIueSAtIEwxUDEueSkgLyAoTDFQMi54IC0gTDFQMS54KVxuICAgICAgYjEgPSAoTDFQMi54ICogTDFQMS55IC0gTDFQMS54ICogTDFQMi55KSAvIChMMVAyLnggLSBMMVAxLngpXG4gICAgICBrMiA9IChMMlAyLnkgLSBMMlAxLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICAgIGIyID0gKEwyUDIueCAqIEwyUDEueSAtIEwyUDEueCAqIEwyUDIueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgICAgeCA9IChiMSAtIGIyKSAvIChrMiAtIGsxKVxuICAgICAgeSA9IHggKiBrMSArIGIxXG4gICAgICByZXR1cm4gbmV3IFBvaW50KHgsIHkpXG4gICAgfVxuICB9LFxuICBib3VuZFRvU2VnbWVudChMUDEsIExQMiwgUCkge1xuICAgIGxldCB4LCB5XG4gICAgeCA9IEdlb21ldHJ5LmJvdW5kKE1hdGgubWluKExQMS54LCBMUDIueCksIE1hdGgubWF4KExQMS54LCBMUDIueCksIFAueClcbiAgICBpZiAoeCAhPT0gUC54KSB7XG4gICAgICB5ID0gKHggPT09IExQMS54KSA/IExQMS55IDogTFAyLnlcbiAgICAgIFAgPSBuZXcgUG9pbnQoeCwgeSlcbiAgICB9XG5cbiAgICB5ID0gR2VvbWV0cnkuYm91bmQoTWF0aC5taW4oTFAxLnksIExQMi55KSwgTWF0aC5tYXgoTFAxLnksIExQMi55KSwgUC55KVxuICAgIGlmICh5ICE9PSBQLnkpIHtcbiAgICAgIHggPSAoeSA9PT0gTFAxLnkpID8gTFAxLnggOiBMUDIueFxuICAgICAgUCA9IG5ldyBQb2ludCh4LCB5KVxuICAgIH1cblxuICAgIHJldHVybiBQXG4gIH0sXG4gIGJvdW5kVG9MaW5lKEEsIEIsIFApIHtcbiAgICBjb25zdCBBUCA9IG5ldyBQb2ludChQLnggLSBBLngsIFAueSAtIEEueSksXG4gICAgICBBQiA9IG5ldyBQb2ludChCLnggLSBBLngsIEIueSAtIEEueSksXG4gICAgICBhYjIgPSBBQi54ICogQUIueCArIEFCLnkgKiBBQi55LFxuICAgICAgYXBfYWIgPSBBUC54ICogQUIueCArIEFQLnkgKiBBQi55LFxuICAgICAgdCA9IGFwX2FiIC8gYWIyXG4gICAgcmV0dXJuIG5ldyBQb2ludChBLnggKyBBQi54ICogdCwgQS55ICsgQUIueSAqIHQpXG4gIH0sXG4gIGdldFBvaW50SW5MaW5lKExQMSwgTFAyLCBwZXJjZW50KSB7XG4gICAgY29uc3QgZHggPSBMUDIueCAtIExQMS54LCBkeSA9IExQMi55IC0gTFAxLnlcbiAgICByZXR1cm4gbmV3IFBvaW50KExQMS54ICsgcGVyY2VudCAqIGR4LCBMUDEueSArIHBlcmNlbnQgKiBkeSlcbiAgfSxcbiAgZ2V0UG9pbnRJbkxpbmVCeUxlbmdodChMUDEsIExQMiwgbGVuZ2h0KSB7XG4gICAgY29uc3QgZHggPSBMUDIueCAtIExQMS54LCBkeSA9IExQMi55IC0gTFAxLnksIHBlcmNlbnQgPSBsZW5naHQgLyBHZW9tZXRyeS5kaXN0YW5jZShMUDEsIExQMilcbiAgICByZXR1cm4gbmV3IFBvaW50KExQMS54ICsgcGVyY2VudCAqIGR4LCBMUDEueSArIHBlcmNlbnQgKiBkeSlcbiAgfSxcbiAgY3JlYXRlUmVjdGFuZ2xlRnJvbUVsZW1lbnQoZWwsIHBhcmVudCwgaXNDb250ZW50Qm94U2l6ZSwgaXNDb25zaWRlclRyYW5zbGF0ZSkge1xuICAgIGNvbnN0IHNpemUgPSB0aGlzLmdldFNpemVPZkVsZW1lbnQoZWwsIGlzQ29udGVudEJveFNpemUpXG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUodGhpcy5nZXRPZmZzZXQoZWwsIHBhcmVudCB8fCBlbC5wYXJlbnROb2RlLCBpc0NvbnNpZGVyVHJhbnNsYXRlKSwgc2l6ZSlcbiAgfSxcbiAgZ2V0U3VtVmFsdWVPZlN0eWxlUnVsZShlbGVtZW50LCBydWxlcykge1xuICAgIHJldHVybiBydWxlcy5yZWR1Y2UoKHN1bSwgcnVsZSkgPT4ge1xuICAgICAgcmV0dXJuIHN1bSArIHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpW3J1bGVdfHwwKVxuICAgIH0sIDApXG4gIH0sXG4gIGdldFNpemVPZkVsZW1lbnQoZWwsIGlzQ29udGVudEJveFNpemUpIHtcbiAgICBsZXQgd2lkdGggPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbClbJ3dpZHRoJ10pLCBoZWlnaHQgPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbClbJ2hlaWdodCddKVxuICAgIGlmICghaXNDb250ZW50Qm94U2l6ZSkge1xuICAgICAgd2lkdGggKz0gdGhpcy5nZXRTdW1WYWx1ZU9mU3R5bGVSdWxlKGVsLCBbJ3BhZGRpbmctbGVmdCcsICdwYWRkaW5nLXJpZ2h0JywgJ2JvcmRlci1sZWZ0LXdpZHRoJywgJ2JvcmRlci1yaWdodC13aWR0aCddKVxuICAgICAgaGVpZ2h0ICs9IHRoaXMuZ2V0U3VtVmFsdWVPZlN0eWxlUnVsZShlbCwgWydwYWRkaW5nLXRvcCcsICdwYWRkaW5nLWJvdHRvbScsICdib3JkZXItdG9wLXdpZHRoJywgJ2JvcmRlci1ib3R0b20td2lkdGgnXSlcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBQb2ludCh3aWR0aCwgaGVpZ2h0KVxuICB9LFxuICBnZXRPZmZzZXQoZWwsIHBhcmVudCkge1xuICAgIGNvbnN0IGVsUmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLCBwYXJlbnRSZWN0ID0gcGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgcmV0dXJuIG5ldyBQb2ludChlbFJlY3QubGVmdCAtIHBhcmVudFJlY3QubGVmdCwgZWxSZWN0LnRvcCAtIHBhcmVudFJlY3QudG9wKVxuICB9LFxuICBnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oYW5nbGUsIGxlbmd0aCwgY2VudGVyKSB7XG4gICAgY2VudGVyID0gY2VudGVyIHx8IG5ldyBQb2ludCgwLCAwKVxuICAgIHJldHVybiBjZW50ZXIuYWRkKG5ldyBQb2ludChsZW5ndGggKiBNYXRoLmNvcyhhbmdsZSksIGxlbmd0aCAqIE1hdGguc2luKGFuZ2xlKSkpXG4gIH0sXG4gIGFkZFBvaW50VG9Cb3VuZFBvaW50cyhib3VuZHBvaW50cywgcG9pbnQsIGlzUmlnaHQpIHtcbiAgICBjb25zdCByZXN1bHQgPSBib3VuZHBvaW50cy5maWx0ZXIoZnVuY3Rpb24oYlBvaW50KSB7XG4gICAgICByZXR1cm4gIGJQb2ludC55ID4gcG9pbnQueSB8fCAoaXNSaWdodCA/IGJQb2ludC54IDwgcG9pbnQueCA6IGJQb2ludC54ID4gcG9pbnQueClcbiAgICB9KVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChwb2ludC55IDwgcmVzdWx0W2ldLnkpIHtcbiAgICAgICAgcmVzdWx0LnNwbGljZShpLCAwLCBwb2ludClcbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgICAgfVxuICAgIH1cbiAgICByZXN1bHQucHVzaChwb2ludClcbiAgICByZXR1cm4gcmVzdWx0XG4gIH0sXG4gIGdldEFuZ2xlKHAxLCBwMikge1xuICAgIGNvbnN0IGRpZmYgPSBwMi5zdWIocDEpXG4gICAgcmV0dXJuIHRoaXMubm9ybWFsaXplQW5nbGUoTWF0aC5hdGFuMihkaWZmLnksIGRpZmYueCkpXG4gIH0sXG4gIHRvUmFkaWFuKGFuZ2xlKSB7XG4gICAgcmV0dXJuICgoYW5nbGUgJSAzNjApICogTWF0aC5QSSAvIDE4MClcbiAgfSxcbiAgdG9EZWdyZWUoYW5nbGUpIHtcbiAgICByZXR1cm4gKGFuZ2xlICogMTgwIC8gTWF0aC5QSSkgJSAzNjBcbiAgfSxcbiAgYm91bmRBbmdsZShtaW4sIG1heCwgdmFsKSB7XG4gICAgbGV0IGRtaW4sIGRtYXhcbiAgICBpZiAobWluIDwgbWF4ICYmIHZhbCA+IG1pbiAmJiB2YWwgPCBtYXgpIHtcbiAgICAgIHJldHVybiB2YWxcbiAgICB9IGVsc2UgaWYgKG1heCA8IG1pbiAmJiAodmFsIDwgbWF4IHx8IHZhbCA+IG1pbikpIHtcbiAgICAgIHJldHVybiB2YWxcbiAgICB9IGVsc2Uge1xuICAgICAgZG1pbiA9IHRoaXMuZ2V0QW5nbGVEaWZmKG1pbiwgdmFsKVxuICAgICAgZG1heCA9IHRoaXMuZ2V0QW5nbGVEaWZmKG1heCwgdmFsKVxuICAgICAgaWYgKGRtaW4gPCBkbWF4KSB7XG4gICAgICAgIHJldHVybiBtaW5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBtYXhcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGdldE5lYXJlc3RBbmdsZShhcnIsIGFuZ2xlKSB7XG4gICAgbGV0IGksIHRlbXAsIGRpZmYgPSBNYXRoLlBJICogMiwgdmFsdWVcbiAgICBmb3IgKGkgPSAwOyBpIDwgYXJyLmxlbmd0aDtpKyspIHtcbiAgICAgIHRlbXAgPSBHZW9tZXRyeS5nZXRBbmdsZURpZmYoYXJyW2ldLCBhbmdsZSlcbiAgICAgIGlmIChkaWZmIDwgdGVtcCkge1xuICAgICAgICBkaWZmID0gdGVtcFxuICAgICAgICB2YWx1ZSA9IGFycltpXVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdmFsdWVcbiAgfSxcbiAgZ2V0QW5nbGVEaWZmKGFscGhhLCBiZXRhKSB7XG4gICAgY29uc3QgbWluQW5nbGUgPSBNYXRoLm1pbihhbHBoYSwgYmV0YSksXG4gICAgICBtYXhBbmdsZSA9ICBNYXRoLm1heChhbHBoYSwgYmV0YSlcbiAgICByZXR1cm4gTWF0aC5taW4obWF4QW5nbGUgLSBtaW5BbmdsZSwgbWluQW5nbGUgKyBNYXRoLlBJKjIgLSBtYXhBbmdsZSlcbiAgfSxcbiAgbm9ybWFsaXplQW5nbGUodmFsKSB7XG4gICAgd2hpbGUgKHZhbCA8IDApIHtcbiAgICAgIHZhbCArPSAyICogTWF0aC5QSVxuICAgIH1cbiAgICB3aGlsZSAodmFsID4gMiAqIE1hdGguUEkpIHtcbiAgICAgIHZhbCAtPSAyICogTWF0aC5QSVxuICAgIH1cbiAgICByZXR1cm4gdmFsXG4gIH1cbn1cblxuZXhwb3J0IHsgUG9pbnQsIFJlY3RhbmdsZSwgR2VvbWV0cnkgfVxuIiwiJ3VzZSBzdHJpY3QnXG5pbXBvcnQgeyBHZW9tZXRyeSwgUG9pbnQgfSBmcm9tICcuL2dlb21ldHJ5J1xuXG5jb25zdCBwb3NpdGlvblR5cGUgPSB7XG4gIG5vdENyb3NzaW5nOiAwLFxuICBmbG9hdExlZnQ6IDEsXG4gIGZsb2F0UmlnaHQ6IDJcbn1cblxuZnVuY3Rpb24gcG9zaXRpb25GYWN0b3J5KHR5cGUpIHtcbiAgc3dpdGNoICh0eXBlKSB7XG4gIGNhc2UgcG9zaXRpb25UeXBlLm5vdENyb3NzaW5nOlxuICAgIHJldHVybiBmdW5jdGlvbihyZWN0YW5nbGUsIF9vcHRpb25zKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24ocmVjdGFuZ2xlTGlzdCwgaW5kZXhlc09mTmV3cykge1xuICAgICAgICBjb25zdCBib3VuZFJlY3QgPSB0eXBlb2YgcmVjdGFuZ2xlID09PSAnZnVuY3Rpb24nID8gcmVjdGFuZ2xlKCkgOiByZWN0YW5nbGUsXG4gICAgICAgICAgc3RhdGljUmVjdGFuZ2xlSW5kZXhlcyA9IHJlY3RhbmdsZUxpc3QucmVkdWNlKGZ1bmN0aW9uKGluZGV4ZXMsIF9yZWN0LCBpbmRleCkge1xuICAgICAgICAgICAgaWYgKGluZGV4ZXNPZk5ld3MuaW5kZXhPZihpbmRleCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgIGluZGV4ZXMucHVzaChpbmRleClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBpbmRleGVzXG4gICAgICAgICAgfSwgW10pXG5cbiAgICAgICAgaW5kZXhlc09mTmV3cy5mb3JFYWNoKGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICAgICAgbGV0IHJlY3QgPSByZWN0YW5nbGVMaXN0W2luZGV4XSwgcmVtb3ZhYmxlID0gZmFsc2VcbiAgICAgICAgICBzdGF0aWNSZWN0YW5nbGVJbmRleGVzLmZvckVhY2goZnVuY3Rpb24oaW5kZXhPZlN0YXRpYykge1xuICAgICAgICAgICAgY29uc3Qgc3RhdGljUmVjdCA9IHJlY3RhbmdsZUxpc3RbaW5kZXhPZlN0YXRpY11cbiAgICAgICAgICAgIHJlY3QgPSBzdGF0aWNSZWN0Lm1vdmVUb0JvdW5kKHJlY3QpXG4gICAgICAgICAgfSlcbiAgICAgICAgICByZW1vdmFibGUgPSBzdGF0aWNSZWN0YW5nbGVJbmRleGVzLnNvbWUoZnVuY3Rpb24oaW5kZXhPZlN0YXRpYykge1xuICAgICAgICAgICAgY29uc3Qgc3RhdGljUmVjdCA9IHJlY3RhbmdsZUxpc3RbaW5kZXhPZlN0YXRpY11cbiAgICAgICAgICAgIHJldHVybiAgISFzdGF0aWNSZWN0LmFuZChyZWN0KVxuICAgICAgICAgIH0pIHx8IHJlY3QuYW5kKGJvdW5kUmVjdCkuZ2V0U3F1YXJlKCkgIT09IHJlY3QuZ2V0U3F1YXJlKClcbiAgICAgICAgICBpZiAocmVtb3ZhYmxlKSB7XG4gICAgICAgICAgICByZWN0LnJlbW92YWJsZSA9IHRydWVcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RhdGljUmVjdGFuZ2xlSW5kZXhlcy5wdXNoKGluZGV4KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHJlY3RhbmdsZUxpc3RcbiAgICAgIH1cbiAgICB9XG4gIGNhc2UgcG9zaXRpb25UeXBlLmZsb2F0TGVmdDpcbiAgICByZXR1cm4gZnVuY3Rpb24ocmVjdGFuZ2xlLCBvcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIHBhZGRpbmdUb3BMZWZ0OiBuZXcgUG9pbnQoMCwgMCksXG4gICAgICAgIHBhZGRpbmdCb3R0b21SaWdodDogbmV3IFBvaW50KDAsIDApLFxuICAgICAgICB5R2FwQmV0d2VlbkRyYWdnYWJsZXM6IDAsXG4gICAgICAgIHJlbW92YWJsZTogdHJ1ZVxuICAgICAgfSwgb3B0aW9ucylcblxuICAgICAgcmV0dXJuIGZ1bmN0aW9uKHJlY3RhbmdsZUxpc3QsIF9pbmRleGVzT2ZOZXdzKSB7XG4gICAgICAgIGNvbnN0IGJvdW5kUmVjdCA9IHR5cGVvZiByZWN0YW5nbGUgPT09ICdmdW5jdGlvbicgPyByZWN0YW5nbGUoKSA6IHJlY3RhbmdsZVxuICAgICAgICBjb25zdCByZWN0UDIgPSBib3VuZFJlY3QuZ2V0UDIoKVxuICAgICAgICBsZXQgYm91bmRhcnlQb2ludHMgPSBbYm91bmRSZWN0LnBvc2l0aW9uXVxuICAgICAgICByZWN0YW5nbGVMaXN0LmZvckVhY2goZnVuY3Rpb24ocmVjdCkge1xuICAgICAgICAgIGxldCBwb3NpdGlvbiwgaXNWYWxpZCA9IGZhbHNlXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib3VuZGFyeVBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcG9zaXRpb24gPSAobmV3IFBvaW50KGJvdW5kYXJ5UG9pbnRzW2ldLngsIGkgPiAwID8gKGJvdW5kYXJ5UG9pbnRzW2kgLSAxXS55ICsgb3B0aW9ucy55R2FwQmV0d2VlbkRyYWdnYWJsZXMpIDogYm91bmRSZWN0LnBvc2l0aW9uLnkpKS5hZGQob3B0aW9ucy5wYWRkaW5nVG9wTGVmdClcbiAgICAgICAgICAgIGlzVmFsaWQgPSAocG9zaXRpb24ueCArIHJlY3Quc2l6ZS54IDwgcmVjdFAyLngpXG4gICAgICAgICAgICBpZiAoaXNWYWxpZCkge1xuICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gKG5ldyBQb2ludChib3VuZFJlY3QucG9zaXRpb24ueCwgYm91bmRhcnlQb2ludHNbYm91bmRhcnlQb2ludHMubGVuZ3RoIC0gMV0ueSArIG9wdGlvbnMueUdhcEJldHdlZW5EcmFnZ2FibGVzKSkuYWRkKG9wdGlvbnMucGFkZGluZ1RvcExlZnQpXG4gICAgICAgICAgfVxuICAgICAgICAgIHJlY3QucG9zaXRpb24gPSBwb3NpdGlvblxuICAgICAgICAgIGlmIChvcHRpb25zLnJlbW92YWJsZSAmJiByZWN0LmdldFAzKCkueSA+IGJvdW5kUmVjdC5nZXRQMygpLnkpIHtcbiAgICAgICAgICAgIHJlY3QucmVtb3ZhYmxlID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBib3VuZGFyeVBvaW50cyA9IEdlb21ldHJ5LmFkZFBvaW50VG9Cb3VuZFBvaW50cyhib3VuZGFyeVBvaW50cywgcmVjdC5nZXRQMygpLmFkZChvcHRpb25zLnBhZGRpbmdCb3R0b21SaWdodCkpXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiByZWN0YW5nbGVMaXN0XG4gICAgICB9XG4gICAgfVxuICBjYXNlIHBvc2l0aW9uVHlwZS5mbG9hdFJpZ2h0OlxuICAgIHJldHVybiBmdW5jdGlvbihyZWN0YW5nbGUsIG9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaW5nKHtcbiAgICAgICAgcGFkZGluZ1RvcFJpZ2h0OiBuZXcgUG9pbnQoNSwgNSksXG4gICAgICAgIHBhZGRpbmdCb3R0b21MZWZ0OiBuZXcgUG9pbnQoMCwgMCksXG4gICAgICAgIHJlbW92YWJsZTogdHJ1ZVxuICAgICAgfSwgb3B0aW9ucylcblxuICAgICAgY29uc3QgcGFkZGluZ1RvcE5lZ1JpZ2h0ID0gbmV3IFBvaW50KC1vcHRpb25zLnBhZGRpbmdUb3BSaWdodC54LCBvcHRpb25zLnBhZGRpbmdUb3BSaWdodC55KVxuICAgICAgY29uc3QgcGFkZGluZ0JvdHRvbU5lZ0xlZnQgPSBuZXcgUG9pbnQoLW9wdGlvbnMucGFkZGluZ0JvdHRvbUxlZnQueCwgb3B0aW9ucy5wYWRkaW5nQm90dG9tTGVmdC55KVxuICAgICAgcmV0dXJuIGZ1bmN0aW9uKHJlY3RhbmdsZUxpc3QsIF9pbmRleGVzT2ZOZXdzKSB7XG4gICAgICAgIGNvbnN0IGJvdW5kUmVjdCA9IHR5cGVvZiByZWN0YW5nbGUgPT09ICdmdW5jdGlvbicgPyByZWN0YW5nbGUoKSA6IHJlY3RhbmdsZVxuICAgICAgICBsZXQgYm91bmRhcnlQb2ludHMgPSBbYm91bmRSZWN0LmdldFJpZ2h0VG9wUG9pbnQoKV1cbiAgICAgICAgcmVjdGFuZ2xlTGlzdC5mb3JFYWNoKGZ1bmN0aW9uKHJlY3QsIF9pbmRleCkge1xuICAgICAgICAgIGxldCBwb3NpdGlvbiwgaXNWYWxpZCA9IGZhbHNlXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib3VuZGFyeVBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcG9zaXRpb24gPSAobmV3IFBvaW50KGJvdW5kYXJ5UG9pbnRzW2ldLnggLSByZWN0LnNpemUueCwgaSA+IDAgPyBib3VuZGFyeVBvaW50c1tpIC0gMV0ueSA6IGJvdW5kUmVjdC5wb3NpdGlvbi55KSkuYWRkKHBhZGRpbmdUb3BOZWdSaWdodClcbiAgICAgICAgICAgIGlzVmFsaWQgPSAocG9zaXRpb24ueCA+IHJlY3QucG9zaXRpb24ueClcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICAgICAgcG9zaXRpb24gPSBuZXcgUG9pbnQoYm91bmRSZWN0LmdldFAyKCkueCwgYm91bmRhcnlQb2ludHNbYm91bmRhcnlQb2ludHMubGVuZ3RoIC0gMV0ueSlcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVjdC5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgICAgICAgaWYgKG9wdGlvbnMucmVtb3ZhYmxlICYmIHJlY3QuZ2V0TGVmdEJvdHRvbVBvaW50KCkueSA+IGJvdW5kUmVjdC5nZXRQNCgpLnkpIHtcbiAgICAgICAgICAgIHJlY3QucmVtb3ZhYmxlID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBib3VuZGFyeVBvaW50cyA9IEdlb21ldHJ5LmFkZFBvaW50VG9Cb3VuZFBvaW50cyhib3VuZGFyeVBvaW50cywgcmVjdC5nZXRQNCgpLmFkZChwYWRkaW5nQm90dG9tTmVnTGVmdCksIHRydWUpXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiByZWN0YW5nbGVMaXN0XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHNvcnRpbmdGYWN0b3J5KHR5cGUpIHtcbiAgc3dpdGNoICh0eXBlKSB7XG4gIGNhc2UgcG9zaXRpb25UeXBlLm5vdENyb3NzaW5nOlxuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihvbGRPYmpzTGlzdCwgbmV3T2JqcywgaW5kZXhPZk5ld3MpIHtcbiAgICAgICAgY29uc3Qgb2Jqc0xpc3QgPSBvbGRPYmpzTGlzdC5jb25jYXQobmV3T2JqcylcbiAgICAgICAgbmV3T2Jqcy5mb3JFYWNoKGZ1bmN0aW9uKG9iaikge1xuICAgICAgICAgIGluZGV4T2ZOZXdzLnB1c2gob2Jqc0xpc3QuaW5kZXhPZihvYmopKVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gb2Jqc0xpc3RcbiAgICAgIH1cbiAgICB9XG4gIGNhc2UgcG9zaXRpb25UeXBlLmZsb2F0TGVmdDpcbiAgY2FzZSBwb3NpdGlvblR5cGUuZmxvYXRSaWdodDpcbiAgICByZXR1cm4gZnVuY3Rpb24ocmFkaXVzLCBnZXREaXN0YW5jZSwgb3B0aW9ucykge1xuICAgICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBnZXRQb3NpdGlvbjogZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgICAgcmV0dXJuIG9iai5wb3NpdGlvblxuICAgICAgICB9XG4gICAgICB9LCBvcHRpb25zKVxuXG4gICAgICByZXR1cm4gZnVuY3Rpb24ob2xkT2Jqc0xpc3QsIG5ld09ianMsIGluZGV4T2ZOZXdzKSB7XG4gICAgICAgIGNvbnN0IG5ld0xpc3QgPSBvbGRPYmpzTGlzdC5jb25jYXQoKVxuICAgICAgICBjb25zdCBsaXN0T2xkUG9zaXRpb24gPSBvbGRPYmpzTGlzdC5tYXAob3B0aW9ucy5nZXRQb3NpdGlvbilcbiAgICAgICAgbmV3T2Jqcy5mb3JFYWNoKGZ1bmN0aW9uKG5ld09iaikge1xuICAgICAgICAgIGxldCBpbmRleCA9IEdlb21ldHJ5LmluZGV4T2ZOZWFyZXN0UG9pbnQobGlzdE9sZFBvc2l0aW9uLCBvcHRpb25zLmdldFBvc2l0aW9uKG5ld09iaiksIHJhZGl1cywgZ2V0RGlzdGFuY2UpXG4gICAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgaW5kZXggPSBuZXdMaXN0Lmxlbmd0aFxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbmRleCA9IG5ld0xpc3QuaW5kZXhPZihvbGRPYmpzTGlzdFtpbmRleF0pXG4gICAgICAgICAgfVxuICAgICAgICAgIG5ld0xpc3Quc3BsaWNlKGluZGV4LCAwLCBuZXdPYmopXG4gICAgICAgIH0pXG4gICAgICAgIG5ld09ianMuZm9yRWFjaChmdW5jdGlvbihuZXdPYmopIHtcbiAgICAgICAgICBpbmRleE9mTmV3cy5wdXNoKG5ld0xpc3QuaW5kZXhPZihuZXdPYmopKVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gbmV3TGlzdFxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgeyBwb3NpdGlvblR5cGUsIHNvcnRpbmdGYWN0b3J5LCBwb3NpdGlvbkZhY3RvcnkgfVxuIiwiaW1wb3J0IHJlbW92ZUl0ZW1zIGZyb20gJ3JlbW92ZS1hcnJheS1pdGVtcydcbmltcG9ydCBFdmVudCBmcm9tICcuL2V2ZW50J1xuaW1wb3J0IHsgRHJhZ2dhYmxlIH0gZnJvbSAnLi9kcmFnZ2FibGUnXG5pbXBvcnQgeyBUYXJnZXQgfSBmcm9tICcuL3RhcmdldCdcblxuY29uc3QgRHJhZ2VlID0geyBFdmVudCB9IC8vdG9kbyByZW1vdmUgYWZ0ZXIgcmVmYWN0b3JlXG5cbmNvbnN0IHNjb3BlcyA9IFtdXG5cbmNsYXNzIFNjb3BlIHtcbiAgY29uc3RydWN0b3IoZHJhZ2dhYmxlcywgdGFyZ2V0cywgb3B0aW9ucz17fSkge1xuICAgIHNjb3Blcy5mb3JFYWNoKChzY29wZSkgPT4ge1xuICAgICAgaWYgKGRyYWdnYWJsZXMpIHtcbiAgICAgICAgZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgICAgICByZW1vdmVJdGVtcyhzY29wZS5kcmFnZ2FibGVzLCBkcmFnZ2FibGUpXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIGlmICh0YXJnZXRzKSB7XG4gICAgICAgIHRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB7XG4gICAgICAgICAgcmVtb3ZlSXRlbXMoc2NvcGUudGFyZ2V0cywgdGFyZ2V0KVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLmRyYWdnYWJsZXMgPSBkcmFnZ2FibGVzIHx8IFtdXG4gICAgdGhpcy50YXJnZXRzID0gdGFyZ2V0cyB8fCBbXVxuICAgIHNjb3Blcy5wdXNoKHRoaXMpXG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgdGltZUVuZDogKG9wdGlvbnMudGltZUVuZCkgfHwgNDAwXG4gICAgfVxuXG4gICAgdGhpcy5vbkNoYW5nZSA9IG5ldyBEcmFnZWUuRXZlbnQodGhpcylcbiAgICBpZiAob3B0aW9ucy5vbkNoYW5nZSkge1xuICAgICAgdGhpcy5vbkNoYW5nZS5hZGQob3B0aW9ucy5vbkNoYW5nZSlcbiAgICB9XG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLm9uRW5kLmFkZCgoKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLm9uRW5kKGRyYWdnYWJsZSlcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGFkZERyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMucHVzaChkcmFnZ2FibGUpXG4gICAgZHJhZ2dhYmxlLm9uRW5kLnVuc2hpZnQoKCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMub25FbmQoZHJhZ2dhYmxlKVxuICAgIH0pXG4gIH1cblxuICBhZGRUYXJnZXQodGFyZ2V0KSB7XG4gICAgdGhpcy50YXJnZXRzLnB1c2godGFyZ2V0KVxuICB9XG5cbiAgb25FbmQoZHJhZ2dhYmxlKSB7XG4gICAgY29uc3Qgc2hvdFRhcmdldHMgPSB0aGlzLnRhcmdldHMuZmlsdGVyKCh0YXJnZXQpID0+IHtcbiAgICAgIHJldHVybiB0YXJnZXQuZHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkgIT09IC0xXG4gICAgfSkuZmlsdGVyKCh0YXJnZXQpID0+IHtcbiAgICAgIHJldHVybiB0YXJnZXQuY2F0Y2hEcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICAgIH0pLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIHJldHVybiBhLmdldFJlY3RhbmdsZSgpLmdldFNxdWFyZSgpIC0gYi5nZXRSZWN0YW5nbGUoKS5nZXRTcXVhcmUoKVxuICAgIH0pXG5cbiAgICBpZiAoc2hvdFRhcmdldHMubGVuZ3RoKSB7XG4gICAgICBzaG90VGFyZ2V0c1swXS5vbkVuZChkcmFnZ2FibGUpXG4gICAgfSBlbHNlIGlmIChkcmFnZ2FibGUudGFyZ2V0cy5sZW5ndGgpIHtcbiAgICAgIGRyYWdnYWJsZS5tb3ZlKGRyYWdnYWJsZS5pbml0UG9zaXRpb24sIHRoaXMub3B0aW9ucy50aW1lRW5kLCB0cnVlLCB0cnVlKVxuICAgIH1cbiAgICB0aGlzLm9uQ2hhbmdlLmZpcmUoKVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLnRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB0YXJnZXQucmVzZXQoKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnJlZnJlc2goKSlcbiAgICB0aGlzLnRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB0YXJnZXQucmVmcmVzaCgpKVxuICB9XG5cbiAgZ2V0IHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXRzLm1hcCgodGFyZ2V0KSA9PiB7XG4gICAgICByZXR1cm4gdGFyZ2V0LmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4gdGhpcy5kcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSlcbiAgICB9KVxuICB9XG5cbiAgc2V0IHBvc2l0aW9ucyhwb3NpdGlvbnMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gJ3dyb25nIGFycmF5IGxlbmd0aCdcbiAgICBpZiAocG9zaXRpb25zLmxlbmd0aCA9PT0gdGhpcy50YXJnZXRzLmxlbmd0aCkge1xuICAgICAgdGhpcy50YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4gdGFyZ2V0LnJlc2V0KCkpXG5cbiAgICAgIHBvc2l0aW9ucy5mb3JFYWNoKCh0YXJnZXRJbmRleGVzLCBpKSA9PiB7XG4gICAgICAgIHRhcmdldEluZGV4ZXMuZm9yRWFjaCgoaW5kZXgpID0+IHtcbiAgICAgICAgICB0aGlzLnRhcmdldHNbaV0uYWRkKHRoaXMuZHJhZ2dhYmxlc1tpbmRleF0pXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBtZXNzYWdlXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IGRlZmF1bHRTY29wZSA9IG5ldyBTY29wZSgpXG5cbmZ1bmN0aW9uIHNjb3BlKGZuKSB7XG4gIGNvbnN0IGN1cnJlbnRTY29wZSA9IG5ldyBTY29wZSgpXG4gIGNvbnN0IGFkZERyYWdnYWJsZVRvU2NvcGUgPSBmdW5jdGlvbihkcmFnZ2FibGUpIHtcbiAgICBjdXJyZW50U2NvcGUuYWRkRHJhZ2dhYmxlKGRyYWdnYWJsZSlcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG4gIGNvbnN0IGFkZFRhcmdldFRvU2NvcGUgPSBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICBjdXJyZW50U2NvcGUuYWRkVGFyZ2V0KHRhcmdldClcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgRHJhZ2dhYmxlLm9uQ3JlYXRlLmFkZChhZGREcmFnZ2FibGVUb1Njb3BlKVxuICBUYXJnZXQub25DcmVhdGUuYWRkKGFkZFRhcmdldFRvU2NvcGUpXG4gIGZuLmNhbGwoKVxuICBEcmFnZ2FibGUub25DcmVhdGUucmVtb3ZlKGFkZERyYWdnYWJsZVRvU2NvcGUpXG4gIFRhcmdldC5vbkNyZWF0ZS5yZW1vdmUoYWRkVGFyZ2V0VG9TY29wZSlcbiAgcmV0dXJuIGN1cnJlbnRTY29wZVxufVxuXG5mdW5jdGlvbiBzY29wZUZhY3RvcnkocGFyZW50RWxlbWVudCwgZHJhZ2dhYmxlRWxlbWVudHMsIHRhcmdldEVsZW1lbnRzLCBvcHRpb25zPXt9KSB7XG4gIGNvbnN0IGRyYWdnYWJsZU9wdGlvbnMgPSBvcHRpb25zLmRyYWdnYWJsZSB8fCB7fVxuICBjb25zdCB0YXJnZXRPcHRpb25zID0gb3B0aW9ucy50YXJnZXQgfHwge31cbiAgY29uc3Qgc2NvcGVPcHRpb25zID0gb3B0aW9ucy5zY29wZSB8fCB7fVxuICBkcmFnZ2FibGVPcHRpb25zLnBhcmVudCA9IGRyYWdnYWJsZU9wdGlvbnMucGFyZW50IHx8IHBhcmVudEVsZW1lbnRcbiAgdGFyZ2V0T3B0aW9ucy5wYXJlbnQgPSB0YXJnZXRPcHRpb25zLnBhcmVudCB8fCBwYXJlbnRFbGVtZW50XG4gIGRyYWdnYWJsZUVsZW1lbnRzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZHJhZ2dhYmxlRWxlbWVudHMpXG4gIHRhcmdldEVsZW1lbnRzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGFyZ2V0RWxlbWVudHMpXG5cbiAgY29uc3QgZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZUVsZW1lbnRzLm1hcCgoZWxlbWVudCkgPT4ge1xuICAgIHJldHVybiBuZXcgRHJhZ2dhYmxlKGVsZW1lbnQsIGRyYWdnYWJsZU9wdGlvbnMpXG4gIH0pXG5cbiAgY29uc3QgdGFyZ2V0cyA9IHRhcmdldEVsZW1lbnRzLm1hcCgoZWxlbWVudCkgPT4ge1xuICAgIHJldHVybiBuZXcgVGFyZ2V0KGVsZW1lbnQsIGRyYWdnYWJsZXMsIHRhcmdldE9wdGlvbnMpXG4gIH0pXG4gIHJldHVybiBuZXcgU2NvcGUoZHJhZ2dhYmxlcywgdGFyZ2V0cywgc2NvcGVPcHRpb25zKVxufVxuXG5leHBvcnQgeyBzY29wZXMsIGRlZmF1bHRTY29wZSwgU2NvcGUsIHNjb3BlRmFjdG9yeSwgc2NvcGUgfVxuIiwiaW1wb3J0IHJhbmdlIGZyb20gJy4vdXRpbHMvcmFuZ2UuanMnXG5pbXBvcnQgcmVtb3ZlSXRlbXMgZnJvbSAncmVtb3ZlLWFycmF5LWl0ZW1zJ1xuaW1wb3J0IGdldERlZmF1bHRQYXJlbnQgZnJvbSAnLi91dGlscy9nZXRkZWZhdWx0cGFyZW50J1xuaW1wb3J0IEV2ZW50IGZyb20gJy4vZXZlbnQnXG5pbXBvcnQgeyBHZW9tZXRyeSB9IGZyb20gJy4vZ2VvbWV0cnknXG5pbXBvcnQgeyBwb3NpdGlvblR5cGUsIHNvcnRpbmdGYWN0b3J5LCBwb3NpdGlvbkZhY3RvcnkgfSBmcm9tICcuL3Bvc2l0aW9uaW5nJ1xuaW1wb3J0IHsgc2NvcGVzLCBkZWZhdWx0U2NvcGUgfSBmcm9tICcuL3Njb3BlJ1xuXG5jb25zdCBEcmFnZWUgPSB7IHBvc2l0aW9uVHlwZSwgIHBvc2l0aW9uRmFjdG9yeSwgc29ydGluZ0ZhY3RvcnksIHNjb3BlcywgRXZlbnQgfS8vdG9kbyByZW1vdmUgYWZ0ZXIgcmVmYWN0b3JlXG5cbmNvbnN0IGFkZFRvRGVmYXVsdFNjb3BlID0gZnVuY3Rpb24odGFyZ2V0KSB7XG4gIGRlZmF1bHRTY29wZS5hZGRUYXJnZXQodGFyZ2V0KVxufVxuXG5jbGFzcyBUYXJnZXQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBkcmFnZ2FibGVzLCBvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCB0YXJnZXQgPSB0aGlzXG4gICAgY29uc3QgcGFyZW50ID0gb3B0aW9ucy5wYXJlbnQgfHwgZ2V0RGVmYXVsdFBhcmVudChlbGVtZW50KVxuXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICB0aW1lRW5kOiAyMDAsXG4gICAgICB0aW1lRXhjYW5nZTogNDAwLFxuICAgICAgcGFyZW50OiBwYXJlbnQsXG4gICAgICBzb3J0aW5nOiBEcmFnZWUuc29ydGluZ0ZhY3RvcnkoRHJhZ2VlLnBvc2l0aW9uVHlwZS5mbG9hdExlZnQpKDgwLCBHZW9tZXRyeS50cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5KHsgeDogMSwgeTogNCB9KSksXG4gICAgICBwb3NpdGlvbmluZzogRHJhZ2VlLnBvc2l0aW9uRmFjdG9yeShEcmFnZWUucG9zaXRpb25UeXBlLmZsb2F0TGVmdCkodGhpcy5nZXRSZWN0YW5nbGUuYmluZCh0aGlzKSwgeyByZW1vdmFibGU6IHRydWUgfSlcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUudGFyZ2V0cy5wdXNoKHRhcmdldCkpXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gZHJhZ2dhYmxlc1xuICAgIHRoaXMub25BZGQgPSBuZXcgRHJhZ2VlLkV2ZW50KHRoaXMpXG4gICAgdGhpcy5iZWZvcmVBZGQgPSBuZXcgRHJhZ2VlLkV2ZW50KHRoaXMpXG4gICAgdGhpcy5vblJlbW92ZSA9IG5ldyBEcmFnZWUuRXZlbnQodGhpcylcblxuICAgIGlmIChvcHRpb25zLm9uUmVtb3ZlKSB7XG4gICAgICB0aGlzLm9uUmVtb3ZlLmFkZChvcHRpb25zLm9uUmVtb3ZlKVxuICAgIH1cblxuICAgIGlmIChvcHRpb25zLm9uQWRkKSB7XG4gICAgICB0aGlzLm9uQWRkLmFkZChvcHRpb25zLm9uQWRkKVxuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmJlZm9yZUFkZCkge1xuICAgICAgdGhpcy5iZWZvcmVBZGQuYWRkKG9wdGlvbnMuYmVmb3JlQWRkKVxuICAgIH1cblxuICAgIFRhcmdldC5vbkNyZWF0ZS5maXJlKHRoaXMpXG5cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBsZXQgcmVjdGFuZ2xlcywgaW5kZXhlc09mTmV3XG5cbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcyA9IHRoaXMuZHJhZ2dhYmxlcy5maWx0ZXIoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgbGV0IGVsZW1lbnQgPSBkcmFnZ2FibGUuZWxlbWVudC5wYXJlbnROb2RlXG4gICAgICB3aGlsZSAoZWxlbWVudCkge1xuICAgICAgICBpZiAoZWxlbWVudCA9PT0gdGhpcy5lbGVtZW50KSB7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlXG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9KVxuXG4gICAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmxlbmd0aCkge1xuICAgICAgaW5kZXhlc09mTmV3ID0gcmFuZ2UodGhpcy5pbm5lckRyYWdnYWJsZXMubGVuZ3RoKVxuICAgICAgcmVjdGFuZ2xlcyA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgICB9KSwgaW5kZXhlc09mTmV3KVxuICAgICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXcpXG4gICAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHRoaXMub25BZGQuZmlyZShkcmFnZ2FibGUpKVxuICAgIH1cbiAgfVxuXG4gIGdldFJlY3RhbmdsZSgpIHtcbiAgICByZXR1cm4gR2VvbWV0cnkuY3JlYXRlUmVjdGFuZ2xlRnJvbUVsZW1lbnQoXG4gICAgICB0aGlzLmVsZW1lbnQsXG4gICAgICB0aGlzLm9wdGlvbnMucGFyZW50LFxuICAgICAgdGhpcy5vcHRpb25zLmlzQ29udGVudEJveFNpemUsXG4gICAgICB0cnVlXG4gICAgKVxuICB9XG5cbiAgY2F0Y2hEcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5jYXRjaERyYWdnYWJsZSkge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5jYXRjaERyYWdnYWJsZSh0aGlzLCBkcmFnZ2FibGUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRhcmdldFJlY3RhbmdsZSA9IHRoaXMuZ2V0UmVjdGFuZ2xlKClcbiAgICAgIGNvbnN0IGRyYWdnYWJsZVNxdWFyZSA9IGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKS5nZXRTcXVhcmUoKVxuXG4gICAgICByZXR1cm4gZHJhZ2dhYmxlU3F1YXJlIDwgdGFyZ2V0UmVjdGFuZ2xlLmdldFNxdWFyZSgpXG4gICAgICAgICAgICAgICYmIHRhcmdldFJlY3RhbmdsZS5pbmNsdWRlUG9pbnQoZHJhZ2dhYmxlLmdldENlbnRlcigpKVxuICAgIH1cbiAgfVxuXG4gIGdldFBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFJlY3RhbmdsZSgpLnBvc2l0aW9uXG4gIH1cblxuICBnZXRTaXplKCkge1xuICAgIHJldHVybiB0aGlzLmdldFJlY3RhbmdsZSgpLnNpemVcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgRHJhZ2VlLnNjb3Blcy5mb3JFYWNoKChzY29wZSkgPT4gcmVtb3ZlSXRlbXMoc2NvcGUudGFyZ2V0cywgdGhpcykpXG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLm9wdGlvbnMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgW10pXG4gICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBbXSwgMClcbiAgfVxuXG4gIG9uRW5kKGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IG5ld0RyYWdnYWJsZXNJbmRleCA9IFtdXG4gICAgY29uc3QgaW5jbHVkZVBvaW50ID0gdGhpcy5nZXRSZWN0YW5nbGUoKS5pbmNsdWRlUG9pbnQoZHJhZ2dhYmxlLmdldFBvc2l0aW9uKCkpXG5cbiAgICBpZiAoIWluY2x1ZGVQb2ludCkge1xuICAgICAgaWYgKHRoaXMuZ2V0UmVjdGFuZ2xlKCkuaW5jbHVkZVBvaW50KGRyYWdnYWJsZS5nZXRDZW50ZXIoKSkpIHtcbiAgICAgICAgZHJhZ2dhYmxlLnBvc2l0aW9uID0gZHJhZ2dhYmxlLmdldENlbnRlcigpLmNsb25lKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuYmVmb3JlQWRkLmZpcmUoZHJhZ2dhYmxlKVxuXG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMgPSB0aGlzLm9wdGlvbnMuc29ydGluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcywgW2RyYWdnYWJsZV0sIG5ld0RyYWdnYWJsZXNJbmRleClcbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgfSksIG5ld0RyYWdnYWJsZXNJbmRleCwgZHJhZ2dhYmxlKVxuXG4gICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBuZXdEcmFnZ2FibGVzSW5kZXgpXG4gICAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTEpIHtcbiAgICAgIHRoaXMuYWRkUmVtb3ZlT25Nb3ZlKGRyYWdnYWJsZSlcbiAgICB9XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIHNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIGluZGV4ZXNPZk5ldywgdGltZSkge1xuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnNsaWNlKDApLmZvckVhY2goKGRyYWdnYWJsZSwgaSkgPT4ge1xuICAgICAgY29uc3QgcmVjdCA9IHJlY3RhbmdsZXNbaV0sXG4gICAgICAgIHRpbWVFbmQgPSB0aW1lIHx8IHRpbWUgPT09IDAgPyB0aW1lIDogaW5kZXhlc09mTmV3LmluZGV4T2YoaSkgIT09IC0xID8gdGhpcy5vcHRpb25zLnRpbWVFbmQgOiB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2VcblxuICAgICAgaWYgKHJlY3QucmVtb3ZhYmxlKSB7XG4gICAgICAgIGRyYWdnYWJsZS5tb3ZlKGRyYWdnYWJsZS5pbml0UG9zaXRpb24sIHRpbWVFbmQsIHRydWUsIHRydWUpXG4gICAgICAgIHJlbW92ZUl0ZW1zKHRoaXMuaW5uZXJEcmFnZ2FibGVzLCBkcmFnZ2FibGUpXG5cbiAgICAgICAgdGhpcy5vblJlbW92ZS5maXJlKGRyYWdnYWJsZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRyYWdnYWJsZS5tb3ZlKHJlY3QucG9zaXRpb24sIHRpbWVFbmQsIHRydWUsIHRydWUpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGFkZChkcmFnZ2FibGUsIHRpbWUpIHtcbiAgICBjb25zdCBuZXdEcmFnZ2FibGVzSW5kZXggPSB0aGlzLmlubmVyRHJhZ2dhYmxlcy5sZW5ndGhcblxuICAgIHRoaXMuYmVmb3JlQWRkLmZpcmUoZHJhZ2dhYmxlKVxuXG4gICAgdGhpcy5wdXNoSW5uZXJEcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICAgIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLm9wdGlvbnMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgbmV3RHJhZ2dhYmxlc0luZGV4LCBkcmFnZ2FibGUpXG5cbiAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIFtuZXdEcmFnZ2FibGVzSW5kZXhdLCB0aW1lIHx8IDApXG4gICAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTEpIHtcbiAgICAgIHRoaXMuYWRkUmVtb3ZlT25Nb3ZlKGRyYWdnYWJsZSlcbiAgICB9XG4gIH1cblxuICBwdXNoSW5uZXJEcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKT09PS0xKSB7XG4gICAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5wdXNoKGRyYWdnYWJsZSlcbiAgICB9XG4gIH1cblxuICBhZGRSZW1vdmVPbk1vdmUoZHJhZ2dhYmxlKSB7XG4gICAgZHJhZ2dhYmxlLm9uTW92ZS5hZGQodGhpcy5yZW1vdmVIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgdGhpcy5yZW1vdmUoZHJhZ2dhYmxlKVxuICAgIH0pXG5cbiAgICB0aGlzLm9uQWRkLmZpcmUoZHJhZ2dhYmxlKVxuICB9XG5cbiAgcmVtb3ZlKGRyYWdnYWJsZSkge1xuICAgIGRyYWdnYWJsZS5vbk1vdmUucmVtb3ZlKHRoaXMucmVtb3ZlSGFuZGxlcilcblxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpXG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuc3BsaWNlKGluZGV4LCAxKVxuXG4gICAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBbXSlcblxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgW10pXG4gICAgdGhpcy5vblJlbW92ZS5maXJlKGRyYWdnYWJsZSlcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLm1vdmUoZHJhZ2dhYmxlLmluaXRQb3NpdGlvbiwgMCwgdHJ1ZSwgdHJ1ZSlcbiAgICAgIHRoaXMub25SZW1vdmUuZmlyZShkcmFnZ2FibGUpXG4gICAgfSlcbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcyA9IFtdXG4gIH1cblxuICBnZXRTb3J0ZWREcmFnZ2FibGVzKCkge1xuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnNsaWNlKClcbiAgfVxufVxuXG5UYXJnZXQub25DcmVhdGUgPSBuZXcgRHJhZ2VlLkV2ZW50KFRhcmdldCwgeyBpc1JldmVyc2U6IHRydWUsIGlzU3RvcE9uVHJ1ZTogdHJ1ZSB9KVxuVGFyZ2V0Lm9uQ3JlYXRlLmFkZChhZGRUb0RlZmF1bHRTY29wZSlcblxuZXhwb3J0IHsgVGFyZ2V0IH1cbiIsImV4cG9ydCBmdW5jdGlvbiBoYXNDbGFzcyhlbGVtZW50LCBjKSB7XG4gIGNvbnN0IHJlID0gbmV3IFJlZ0V4cCgnKF58XFxcXHMpJyArIGMgKyAnKFxcXFxzfCQpJywgJ2cnKVxuICByZXR1cm4gKHJlLnRlc3QoZWxlbWVudC5jbGFzc05hbWUpKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQ2xhc3MoZWxlbWVudCwgYykge1xuICBpZiAoIWhhc0NsYXNzKGVsZW1lbnQsIGMpKSB7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSAoZWxlbWVudC5jbGFzc05hbWUgKyAnICcgKyBjKS5yZXBsYWNlKC9cXHMrL2csICcgJykucmVwbGFjZSgvKF4gfCAkKS9nLCAnJylcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoZWxlbWVudCwgYykge1xuICBjb25zdCByZSA9IG5ldyBSZWdFeHAoJyhefFxcXFxzKScgKyBjICsgJyhcXFxcc3wkKScsICdnJylcbiAgZWxlbWVudC5jbGFzc05hbWUgPSBlbGVtZW50LmNsYXNzTmFtZS5yZXBsYWNlKHJlLCAnJDEnKS5yZXBsYWNlKC9cXHMrL2csICcgJykucmVwbGFjZSgvKF4gfCAkKS9nLCAnJylcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldERlZmF1bHRQYXJlbnQoZWxlbWVudCkge1xuICBsZXQgcGFyZW50ID0gZWxlbWVudC5wYXJlbnROb2RlXG4gIHdoaWxlIChwYXJlbnQucGFyZW50Tm9kZSAmJiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShwYXJlbnQpWydwb3NpdGlvbiddID09PSAnc3RhdGljJykge1xuICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlXG4gIH1cbiAgcmV0dXJuIHBhcmVudFxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmFuZ2Uoc3RhcnQsIHN0b3AsIHN0ZXApIHtcbiAgY29uc3QgcmVzdWx0ID0gW11cbiAgaWYgKHR5cGVvZiBzdG9wID09PSAndW5kZWZpbmVkJykge1xuICAgIHN0b3AgPSBzdGFydFxuICAgIHN0YXJ0ID0gMFxuICB9XG4gIGlmICh0eXBlb2Ygc3RlcCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBzdGVwID0gMVxuICB9XG4gIGlmICgoc3RlcCA+IDAgJiYgc3RhcnQgPj0gc3RvcCkgfHwgKHN0ZXAgPCAwICYmIHN0YXJ0IDw9IHN0b3ApKSB7XG4gICAgcmV0dXJuIFtdXG4gIH1cbiAgZm9yIChsZXQgaSA9IHN0YXJ0OyBzdGVwID4gMCA/IGkgPCBzdG9wIDogaSA+IHN0b3A7IGkgKz0gc3RlcCkge1xuICAgIHJlc3VsdC5wdXNoKGkpXG4gIH1cbiAgcmV0dXJuIHJlc3VsdFxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==