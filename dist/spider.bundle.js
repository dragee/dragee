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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/spider.js");
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

/***/ "./src/spider.js":
/*!***********************!*\
  !*** ./src/spider.js ***!
  \***********************/
/*! exports provided: Spider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spider", function() { return Spider; });
/* harmony import */ var _utils_createcanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/createcanvas */ "./src/utils/createcanvas.js");
/* harmony import */ var _geometry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./geometry */ "./src/geometry.js");
/* harmony import */ var _bound__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bound */ "./src/bound.js");
/* harmony import */ var _draggable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./draggable */ "./src/draggable.js");


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var Spider =
/*#__PURE__*/
function () {
  function Spider(area, elements) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, Spider);

    var areaRectangle = _geometry__WEBPACK_IMPORTED_MODULE_1__["Geometry"].createRectangleFromElement(area, area);
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

      this.canvas = Object(_utils_createcanvas__WEBPACK_IMPORTED_MODULE_0__["default"])(this.area, this.areaRectangle);
      this.context = this.canvas.getContext('2d');
      this.draggables = elements.map(function (element, i) {
        var angle = _this.options.angle + i * _this.options.dAngle;
        var halfSize = _geometry__WEBPACK_IMPORTED_MODULE_1__["Geometry"].getSizeOfElement(element).mult(0.5);
        var start = _geometry__WEBPACK_IMPORTED_MODULE_1__["Geometry"].getPointFromRadialSystem(angle, _this.options.startRadius, _this.options.center).sub(halfSize);
        var end = _geometry__WEBPACK_IMPORTED_MODULE_1__["Geometry"].getPointFromRadialSystem(angle, _this.options.endRadius, _this.options.center).sub(halfSize);
        var bound = Object(_bound__WEBPACK_IMPORTED_MODULE_2__["boundToLine"])(start, end);
        return new _draggable__WEBPACK_IMPORTED_MODULE_3__["Draggable"](element, {
          parent: _this.area,
          bound: bound,
          position: start,
          onMove: function onMove() {
            _this.draw();

            return true;
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

/***/ "./src/utils/createcanvas.js":
/*!***********************************!*\
  !*** ./src/utils/createcanvas.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createCanvas; });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9EcmFnZWUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0RyYWdlZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9EcmFnZWUvLi9ub2RlX21vZHVsZXMvZGVzYW5kcm8tZ2V0LXN0eWxlLXByb3BlcnR5L2dldC1zdHlsZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9ub2RlX21vZHVsZXMvcmVtb3ZlLWFycmF5LWl0ZW1zL2Rpc3QvcmVtb3ZlLWFycmF5LWl0ZW1zLmVzbS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvYm91bmQuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL2RyYWdnYWJsZS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvZXZlbnQuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL2dlb21ldHJ5LmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy9wb3NpdGlvbmluZy5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvc2NvcGUuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL3NwaWRlci5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvdGFyZ2V0LmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy91dGlscy9jbGFzc2VzLmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy91dGlscy9jcmVhdGVjYW52YXMuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL3V0aWxzL2dldGRlZmF1bHRwYXJlbnQuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL3V0aWxzL3JhbmdlLmpzIl0sIm5hbWVzIjpbImJvdW5kVG9SZWN0YW5nbGUiLCJyZWN0YW5nbGUiLCJwb2ludCIsInNpemUiLCJjYWxjUG9pbnQiLCJjbG9uZSIsInJlY3RQMiIsImdldFAzIiwicG9zaXRpb24iLCJ4IiwieSIsImJvdW5kVG9FbGVtZW50IiwiZWxlbWVudCIsInBhcmVudCIsInJldEZ1bmMiLCJib3VuZCIsImFwcGx5IiwiYXJndW1lbnRzIiwicmVmcmVzaCIsIkdlb21ldHJ5IiwiY3JlYXRlUmVjdGFuZ2xlRnJvbUVsZW1lbnQiLCJib3VuZFRvTGluZVgiLCJzdGFydFkiLCJlbmRZIiwiYm91bmRUb0xpbmVZIiwic3RhcnRYIiwiZW5kWCIsImJvdW5kVG9MaW5lIiwic3RhcnQiLCJlbmQiLCJhbHBoYSIsIk1hdGgiLCJhdGFuMiIsImJldGEiLCJQSSIsInNvbWVLIiwiY29zQmV0YSIsImNvcyIsInNpbkJldGEiLCJzaW4iLCJwb2ludDIiLCJQb2ludCIsIm5ld0VuZCIsImdldFBvaW50SW5MaW5lQnlMZW5naHQiLCJwb2ludENyb3NzaW5nIiwiZGlyZWN0Q3Jvc3NpbmciLCJib3VuZFRvQ2lyY2xlIiwiY2VudGVyIiwicmFkaXVzIiwiX3NpemUiLCJib3VuZGVkUG9pbnQiLCJib3VuZFRvQXJjIiwic3RhcnRBZ2xlIiwiZW5kQW5nbGUiLCJib3VuZFN0YXJ0QW5nbGUiLCJib3VuZEVuZHRBbmdsZSIsImFuZ2xlIiwiZ2V0QW5nbGUiLCJub3JtYWxpemVBbmdsZSIsImJvdW5kQW5nbGUiLCJnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0iLCJEcmFnZWUiLCJFdmVudCIsImlzVG91Y2giLCJ3aW5kb3ciLCJtb3VzZUV2ZW50cyIsIm1vdmUiLCJ0b3VjaEV2ZW50cyIsImV2ZW50cyIsImRyYWdnYWJsZXMiLCJ0cmFuc2Zvcm1Qcm9wZXJ0eSIsImdldFN0eWxlUHJvcGVydHkiLCJ0cmFuc2l0aW9uUHJvcGVydHkiLCJnZXRUb3VjaEJ5SUQiLCJ0b3VjaElkIiwiaSIsImNoYW5nZWRUb3VjaGVzIiwibGVuZ3RoIiwiaWRlbnRpZmllciIsInByZXZlbnREb3VibGVJbml0IiwiZHJhZ2dhYmxlIiwibWVzc2FnZSIsInNvbWUiLCJleGlzdGluZyIsInB1c2giLCJhZGRUb0RlZmF1bHRTY29wZSIsImRlZmF1bHRTY29wZSIsImFkZERyYWdnYWJsZSIsIkRyYWdnYWJsZSIsIm9wdGlvbnMiLCJnZXREZWZhdWx0UGFyZW50IiwidGFyZ2V0cyIsIk9iamVjdCIsImFzc2lnbiIsInN0YXJ0RmlsdGVyIiwiaXNDb250ZW50Qm94U2l6ZSIsImhhbmRsZXIiLCJxdWVyeVNlbGVjdG9yIiwib25FbmQiLCJpc1JldmVyc2UiLCJpc1N0b3BPblRydWUiLCJvbk1vdmUiLCJvblN0YXJ0IiwiYWRkIiwib25DcmVhdGUiLCJmaXJlIiwiaW5pdCIsIl9lbmFibGUiLCJvZmZzZXQiLCJnZXRPZmZzZXQiLCJmaXhQb3NpdGlvbiIsImluaXRQb3NpdGlvbiIsIl9kcmFnU3RhcnQiLCJkcmFnU3RhcnQiLCJiaW5kIiwiX2RyYWdNb3ZlIiwiZHJhZ01vdmUiLCJfZHJhZ0VuZCIsImRyYWdFbmQiLCJhZGRFdmVudExpc3RlbmVyIiwiX3JlY2FsdWxhdGUiLCJnZXRTaXplT2ZFbGVtZW50IiwiX3RyYW5zZm9ybVBvc2l0aW9uIiwiZ2V0U2l6ZSIsIm11bHQiLCJ0cmFuc2Zvcm0iLCJzdHlsZSIsInRyYW5zbGF0ZUNzcyIsInVhIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwibXNpZSIsImluZGV4T2YiLCJ0ZXN0IiwicmVwbGFjZSIsInRpbWUiLCJpc0ZpeCIsImlzU2lsZW50IiwiZGV0ZXJtaW5lRGlyZWN0aW9uIiwiX3NldFRyYW5zbGF0ZSIsInN1YiIsInNldFBvc2l0aW9uIiwiZ2V0UG9zaXRpb24iLCJsZWZ0RGlyZWN0aW9uIiwicmlnaHREaXJlY3Rpb24iLCJ1cERpcmVjdGlvbiIsImRvd25EaXJlY3Rpb24iLCJldmVudCIsImN1cnJlbnRFdmVudCIsImlzVG91Y2hFdmVudCIsIlRvdWNoRXZlbnQiLCJfc3RhcnRUb3VjaFBvaW50IiwicGFnZVgiLCJjbGllbnRYIiwicGFnZVkiLCJjbGllbnRZIiwiX3N0YXJ0UG9zaXRpb24iLCJfdG91Y2hJZCIsInN0b3BQcm9wYWdhdGlvbiIsInRhcmdldCIsIkhUTUxJbnB1dEVsZW1lbnQiLCJwcmV2ZW50RGVmYXVsdCIsImZvY3VzIiwiZG9jdW1lbnQiLCJpc0RyYWdnaW5nIiwiYWRkQ2xhc3MiLCJ0b3VjaCIsInRvdWNoUG9pbnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVtb3ZlQ2xhc3MiLCJSZWN0YW5nbGUiLCJyZXNldCIsImVuYWJsZSIsImNvbnRleHQiLCJmdW5jcyIsInByb3RvdHlwZSIsImFyZ3MiLCJzbGljZSIsImNhbGwiLCJmcyIsInJldmVyc2UiLCJyZXRWYWx1ZSIsImYiLCJ1bnNoaWZ0IiwicmVtb3ZlIiwiaW5kZXgiLCJzcGxpY2UiLCJfZiIsInAiLCJrIiwicmVjdCIsIm1pbiIsIm1heCIsImluY2x1ZGVQb2ludCIsImF4aXMiLCJzZWxBeGlzIiwiY3Jvc3NSZWN0YW5nbGUiLCJhbmQiLCJ0aGlzQ2VudGVyIiwiZ2V0Q2VudGVyIiwicmVjdENlbnRlciIsInNpZ24iLCJlbCIsImxlZnQiLCJ0b3AiLCJ3aWR0aCIsImhlaWdodCIsImdldERpc3RhbmNlIiwicDEiLCJwMiIsImR4IiwiZHkiLCJzcXJ0IiwiZGlzdGFuY2UiLCJnZXRYRGlmZmVyZW5jZSIsImFicyIsImdldFlEaWZmZXJlbmNlIiwidHJhbnNmb3JtZWRTcGFjZURpc3RhbmNlRmFjdG9yeSIsInBvdyIsImluZGV4T2ZOZWFyZXN0UG9pbnQiLCJhcnIiLCJ2YWwiLCJ0ZW1wIiwiYm91bmRQb2ludCIsIkwxUDEiLCJMMVAyIiwiTDJQMSIsIkwyUDIiLCJrMSIsImsyIiwiYjEiLCJiMiIsImJvdW5kVG9TZWdtZW50IiwiTFAxIiwiTFAyIiwiUCIsIkEiLCJCIiwiQVAiLCJBQiIsImFiMiIsImFwX2FiIiwidCIsImdldFBvaW50SW5MaW5lIiwicGVyY2VudCIsImxlbmdodCIsImlzQ29uc2lkZXJUcmFuc2xhdGUiLCJwYXJlbnROb2RlIiwiZ2V0U3VtVmFsdWVPZlN0eWxlUnVsZSIsInJ1bGVzIiwicmVkdWNlIiwic3VtIiwicnVsZSIsInBhcnNlSW50IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImVsUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInBhcmVudFJlY3QiLCJhZGRQb2ludFRvQm91bmRQb2ludHMiLCJib3VuZHBvaW50cyIsImlzUmlnaHQiLCJyZXN1bHQiLCJmaWx0ZXIiLCJiUG9pbnQiLCJkaWZmIiwidG9SYWRpYW4iLCJ0b0RlZ3JlZSIsImRtaW4iLCJkbWF4IiwiZ2V0QW5nbGVEaWZmIiwiZ2V0TmVhcmVzdEFuZ2xlIiwidmFsdWUiLCJtaW5BbmdsZSIsIm1heEFuZ2xlIiwicG9zaXRpb25UeXBlIiwibm90Q3Jvc3NpbmciLCJmbG9hdExlZnQiLCJmbG9hdFJpZ2h0IiwicG9zaXRpb25GYWN0b3J5IiwidHlwZSIsIl9vcHRpb25zIiwicmVjdGFuZ2xlTGlzdCIsImluZGV4ZXNPZk5ld3MiLCJib3VuZFJlY3QiLCJzdGF0aWNSZWN0YW5nbGVJbmRleGVzIiwiaW5kZXhlcyIsIl9yZWN0IiwiZm9yRWFjaCIsInJlbW92YWJsZSIsImluZGV4T2ZTdGF0aWMiLCJzdGF0aWNSZWN0IiwibW92ZVRvQm91bmQiLCJnZXRTcXVhcmUiLCJwYWRkaW5nVG9wTGVmdCIsInBhZGRpbmdCb3R0b21SaWdodCIsInlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyIsIl9pbmRleGVzT2ZOZXdzIiwiZ2V0UDIiLCJib3VuZGFyeVBvaW50cyIsImlzVmFsaWQiLCJhc3NpbmciLCJwYWRkaW5nVG9wUmlnaHQiLCJwYWRkaW5nQm90dG9tTGVmdCIsInBhZGRpbmdUb3BOZWdSaWdodCIsInBhZGRpbmdCb3R0b21OZWdMZWZ0IiwiZ2V0UmlnaHRUb3BQb2ludCIsIl9pbmRleCIsImdldExlZnRCb3R0b21Qb2ludCIsImdldFA0Iiwic29ydGluZ0ZhY3RvcnkiLCJvbGRPYmpzTGlzdCIsIm5ld09ianMiLCJpbmRleE9mTmV3cyIsIm9ianNMaXN0IiwiY29uY2F0Iiwib2JqIiwibmV3TGlzdCIsImxpc3RPbGRQb3NpdGlvbiIsIm1hcCIsIm5ld09iaiIsInNjb3BlcyIsIlNjb3BlIiwic2NvcGUiLCJyZW1vdmVJdGVtcyIsInRpbWVFbmQiLCJvbkNoYW5nZSIsInNob3RUYXJnZXRzIiwiY2F0Y2hEcmFnZ2FibGUiLCJzb3J0IiwiYSIsImIiLCJnZXRSZWN0YW5nbGUiLCJpbm5lckRyYWdnYWJsZXMiLCJwb3NpdGlvbnMiLCJ0YXJnZXRJbmRleGVzIiwiZm4iLCJjdXJyZW50U2NvcGUiLCJhZGREcmFnZ2FibGVUb1Njb3BlIiwiYWRkVGFyZ2V0VG9TY29wZSIsImFkZFRhcmdldCIsIlRhcmdldCIsInNjb3BlRmFjdG9yeSIsInBhcmVudEVsZW1lbnQiLCJkcmFnZ2FibGVFbGVtZW50cyIsInRhcmdldEVsZW1lbnRzIiwiZHJhZ2dhYmxlT3B0aW9ucyIsInRhcmdldE9wdGlvbnMiLCJzY29wZU9wdGlvbnMiLCJBcnJheSIsIlNwaWRlciIsImFyZWEiLCJlbGVtZW50cyIsImFyZWFSZWN0YW5nbGUiLCJkQW5nbGUiLCJzdGFydFJhZGl1cyIsImVuZFJhZGl1cyIsImdldE1pblNpZGUiLCJsaW5lV2lkdGgiLCJzdHJva2VTdHlsZSIsImZpbGxTdHlsZSIsImNhbnZhcyIsImNyZWF0ZUNhbnZhcyIsImdldENvbnRleHQiLCJoYWxmU2l6ZSIsImRyYXciLCJpc0luaXQiLCJjbGVhclJlY3QiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJjbG9zZVBhdGgiLCJzdHJva2UiLCJmaWxsIiwidGltZUV4Y2FuZ2UiLCJzb3J0aW5nIiwicG9zaXRpb25pbmciLCJvbkFkZCIsImJlZm9yZUFkZCIsIm9uUmVtb3ZlIiwicmVjdGFuZ2xlcyIsImluZGV4ZXNPZk5ldyIsInJhbmdlIiwidGFyZ2V0UmVjdGFuZ2xlIiwiZHJhZ2dhYmxlU3F1YXJlIiwibmV3RHJhZ2dhYmxlc0luZGV4IiwiYWRkUmVtb3ZlT25Nb3ZlIiwicHVzaElubmVyRHJhZ2dhYmxlIiwicmVtb3ZlSGFuZGxlciIsImhhc0NsYXNzIiwiYyIsInJlIiwiUmVnRXhwIiwiY2xhc3NOYW1lIiwic2V0U3R5bGUiLCJjc3NUZXh0Iiwia2V5IiwiaGFzT3duUHJvcGVydHkiLCJhcHBlbmRGaXJzdENoaWxkIiwibm9kZSIsImZpcnN0Q2hpbGQiLCJpbnNlcnRCZWZvcmUiLCJhcHBlbmRDaGlsZCIsInJlY3RhZ2xlIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsInN0b3AiLCJzdGVwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUNBQXVDLFNBQVM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSyxJQUEwQztBQUMvQztBQUNBLEVBQUUsbUNBQVE7QUFDVjtBQUNBLEdBQUc7QUFBQSxvR0FBQztBQUNKLENBQUMsTUFBTSxF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T2dKLElBQVAsS0FBZ0IsV0FBcEIsRUFBaUM7QUFDL0JBLFFBQUksR0FBR3pYLEtBQVA7QUFDQUEsU0FBSyxHQUFHLENBQVI7QUFDRDs7QUFDRCxNQUFJLE9BQU8wWCxJQUFQLEtBQWdCLFdBQXBCLEVBQWlDO0FBQy9CQSxRQUFJLEdBQUcsQ0FBUDtBQUNEOztBQUNELE1BQUtBLElBQUksR0FBRyxDQUFQLElBQVkxWCxLQUFLLElBQUl5WCxJQUF0QixJQUFnQ0MsSUFBSSxHQUFHLENBQVAsSUFBWTFYLEtBQUssSUFBSXlYLElBQXpELEVBQWdFO0FBQzlELFdBQU8sRUFBUDtBQUNEOztBQUNELE9BQUssSUFBSTFVLENBQUMsR0FBRy9DLEtBQWIsRUFBb0IwWCxJQUFJLEdBQUcsQ0FBUCxHQUFXM1UsQ0FBQyxHQUFHMFUsSUFBZixHQUFzQjFVLENBQUMsR0FBRzBVLElBQTlDLEVBQW9EMVUsQ0FBQyxJQUFJMlUsSUFBekQsRUFBK0Q7QUFDN0RqSixVQUFNLENBQUNqTCxJQUFQLENBQVlULENBQVo7QUFDRDs7QUFDRCxTQUFPMEwsTUFBUDtBQUNELEMiLCJmaWxlIjoic3BpZGVyLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiRHJhZ2VlXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkRyYWdlZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJEcmFnZWVcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3NwaWRlci5qc1wiKTtcbiIsIi8qIVxuICogZ2V0U3R5bGVQcm9wZXJ0eSB2MS4wLjRcbiAqIG9yaWdpbmFsIGJ5IGthbmdheFxuICogaHR0cDovL3BlcmZlY3Rpb25raWxscy5jb20vZmVhdHVyZS10ZXN0aW5nLWNzcy1wcm9wZXJ0aWVzL1xuICogTUlUIGxpY2Vuc2VcbiAqL1xuXG4vKmpzaGludCBicm93c2VyOiB0cnVlLCBzdHJpY3Q6IHRydWUsIHVuZGVmOiB0cnVlICovXG4vKmdsb2JhbCBkZWZpbmU6IGZhbHNlLCBleHBvcnRzOiBmYWxzZSwgbW9kdWxlOiBmYWxzZSAqL1xuXG4oIGZ1bmN0aW9uKCB3aW5kb3cgKSB7XG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHByZWZpeGVzID0gJ1dlYmtpdCBNb3ogbXMgTXMgTycuc3BsaXQoJyAnKTtcbnZhciBkb2NFbGVtU3R5bGUgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGU7XG5cbmZ1bmN0aW9uIGdldFN0eWxlUHJvcGVydHkoIHByb3BOYW1lICkge1xuICBpZiAoICFwcm9wTmFtZSApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyB0ZXN0IHN0YW5kYXJkIHByb3BlcnR5IGZpcnN0XG4gIGlmICggdHlwZW9mIGRvY0VsZW1TdHlsZVsgcHJvcE5hbWUgXSA9PT0gJ3N0cmluZycgKSB7XG4gICAgcmV0dXJuIHByb3BOYW1lO1xuICB9XG5cbiAgLy8gY2FwaXRhbGl6ZVxuICBwcm9wTmFtZSA9IHByb3BOYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcHJvcE5hbWUuc2xpY2UoMSk7XG5cbiAgLy8gdGVzdCB2ZW5kb3Igc3BlY2lmaWMgcHJvcGVydGllc1xuICB2YXIgcHJlZml4ZWQ7XG4gIGZvciAoIHZhciBpPTAsIGxlbiA9IHByZWZpeGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrICkge1xuICAgIHByZWZpeGVkID0gcHJlZml4ZXNbaV0gKyBwcm9wTmFtZTtcbiAgICBpZiAoIHR5cGVvZiBkb2NFbGVtU3R5bGVbIHByZWZpeGVkIF0gPT09ICdzdHJpbmcnICkge1xuICAgICAgcmV0dXJuIHByZWZpeGVkO1xuICAgIH1cbiAgfVxufVxuXG4vLyB0cmFuc3BvcnRcbmlmICggdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAvLyBBTURcbiAgZGVmaW5lKCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZ2V0U3R5bGVQcm9wZXJ0eTtcbiAgfSk7XG59IGVsc2UgaWYgKCB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgKSB7XG4gIC8vIENvbW1vbkpTIGZvciBDb21wb25lbnRcbiAgbW9kdWxlLmV4cG9ydHMgPSBnZXRTdHlsZVByb3BlcnR5O1xufSBlbHNlIHtcbiAgLy8gYnJvd3NlciBnbG9iYWxcbiAgd2luZG93LmdldFN0eWxlUHJvcGVydHkgPSBnZXRTdHlsZVByb3BlcnR5O1xufVxuXG59KSggd2luZG93ICk7XG4iLCIvKipcbiAqIFJlbW92ZSBhIHJhbmdlIG9mIGl0ZW1zIGZyb20gYW4gYXJyYXlcbiAqXG4gKiBAZnVuY3Rpb24gcmVtb3ZlSXRlbXNcbiAqIEBwYXJhbSB7QXJyYXk8Kj59IGFyciBUaGUgdGFyZ2V0IGFycmF5XG4gKiBAcGFyYW0ge251bWJlcn0gc3RhcnRJZHggVGhlIGluZGV4IHRvIGJlZ2luIHJlbW92aW5nIGZyb20gKGluY2x1c2l2ZSlcbiAqIEBwYXJhbSB7bnVtYmVyfSByZW1vdmVDb3VudCBIb3cgbWFueSBpdGVtcyB0byByZW1vdmVcbiAqL1xuZnVuY3Rpb24gcmVtb3ZlSXRlbXMgKGFyciwgc3RhcnRJZHgsIHJlbW92ZUNvdW50KSB7XG4gIHZhciBpLCBsZW5ndGggPSBhcnIubGVuZ3RoO1xuXG4gIGlmIChzdGFydElkeCA+PSBsZW5ndGggfHwgcmVtb3ZlQ291bnQgPT09IDApIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHJlbW92ZUNvdW50ID0gKHN0YXJ0SWR4ICsgcmVtb3ZlQ291bnQgPiBsZW5ndGggPyBsZW5ndGggLSBzdGFydElkeCA6IHJlbW92ZUNvdW50KTtcblxuICB2YXIgbGVuID0gbGVuZ3RoIC0gcmVtb3ZlQ291bnQ7XG5cbiAgZm9yIChpID0gc3RhcnRJZHg7IGkgPCBsZW47ICsraSkge1xuICAgIGFycltpXSA9IGFycltpICsgcmVtb3ZlQ291bnRdO1xuICB9XG5cbiAgYXJyLmxlbmd0aCA9IGxlbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVtb3ZlSXRlbXM7XG4iLCJpbXBvcnQgeyBHZW9tZXRyeSwgUG9pbnQgfSBmcm9tICcuL2dlb21ldHJ5J1xuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRUb1JlY3RhbmdsZShyZWN0YW5nbGUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgY2FsY1BvaW50ID0gcG9pbnQuY2xvbmUoKSxcbiAgICAgIHJlY3RQMiA9IHJlY3RhbmdsZS5nZXRQMygpXG5cbiAgICBpZiAocmVjdGFuZ2xlLnBvc2l0aW9uLnggPiBjYWxjUG9pbnQueCkge1xuICAgICAgKGNhbGNQb2ludC54ID0gcmVjdGFuZ2xlLnBvc2l0aW9uLngpXG4gICAgfVxuICAgIGlmIChyZWN0YW5nbGUucG9zaXRpb24ueSA+IGNhbGNQb2ludC55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHJlY3RhbmdsZS5wb3NpdGlvbi55XG4gICAgfVxuICAgIGlmIChyZWN0UDIueCA8IGNhbGNQb2ludC54ICsgc2l6ZS54KSB7XG4gICAgICBjYWxjUG9pbnQueCA9IHJlY3RQMi54IC0gc2l6ZS54XG4gICAgfVxuICAgIGlmIChyZWN0UDIueSA8IGNhbGNQb2ludC55ICsgc2l6ZS55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHJlY3RQMi55IC0gc2l6ZS55XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhbGNQb2ludFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZFRvRWxlbWVudChlbGVtZW50LCBwYXJlbnQpIHtcbiAgY29uc3QgcmV0RnVuYyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBib3VuZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG4gIH1cbiAgbGV0IGJvdW5kXG5cbiAgcmV0RnVuYy5yZWZyZXNoID0gZnVuY3Rpb24oKSB7XG4gICAgYm91bmQgPSBib3VuZFRvUmVjdGFuZ2xlKEdlb21ldHJ5LmNyZWF0ZVJlY3RhbmdsZUZyb21FbGVtZW50KGVsZW1lbnQsIHBhcmVudCkpXG4gIH1cblxuICByZXRGdW5jLnJlZnJlc2goKVxuICByZXR1cm4gcmV0RnVuY1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRUb0xpbmVYKHgsIHN0YXJ0WSwgZW5kWSkge1xuICByZXR1cm4gZnVuY3Rpb24ocG9pbnQsIHNpemUpIHtcbiAgICBjb25zdCBjYWxjUG9pbnQgPSBwb2ludC5jbG9uZSgpXG4gICAgY2FsY1BvaW50LnggPSB4XG4gICAgaWYgKHN0YXJ0WSA+IGNhbGNQb2ludC55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHN0YXJ0WVxuICAgIH1cbiAgICBpZiAoZW5kWSA8IGNhbGNQb2ludC55ICsgc2l6ZS55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IGVuZFkgLSBzaXplLnlcbiAgICB9XG5cbiAgICByZXR1cm4gY2FsY1BvaW50XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kVG9MaW5lWSh5LCBzdGFydFgsIGVuZFgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgY2FsY1BvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIGNhbGNQb2ludC55ID0geVxuICAgIGlmIChzdGFydFggPiBjYWxjUG9pbnQueCkge1xuICAgICAgY2FsY1BvaW50LnggPSBzdGFydFhcbiAgICB9XG4gICAgaWYgKGVuZFggPCBjYWxjUG9pbnQueCArIHNpemUueCkge1xuICAgICAgY2FsY1BvaW50LnggPSBlbmRYIC0gc2l6ZS54XG4gICAgfVxuICAgIHJldHVybiBjYWxjUG9pbnRcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRUb0xpbmUoc3RhcnQsIGVuZCkge1xuICBjb25zdCBhbHBoYSA9IE1hdGguYXRhbjIoZW5kLnkgLSBzdGFydC55LCBlbmQueCAtIHN0YXJ0LngpLFxuICAgIGJldGEgPSBhbHBoYSArIE1hdGguUEkgLyAyLFxuICAgIHNvbWVLID0gMTAsXG4gICAgY29zQmV0YSA9IE1hdGguY29zKGJldGEpLFxuICAgIHNpbkJldGEgPSBNYXRoLnNpbihiZXRhKVxuXG4gIHJldHVybiBmdW5jdGlvbihwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IHBvaW50MiA9IG5ldyBQb2ludChwb2ludC54ICsgc29tZUsgKiBjb3NCZXRhLCBwb2ludC55ICsgc29tZUsgKiBzaW5CZXRhKSxcbiAgICAgIG5ld0VuZCA9IEdlb21ldHJ5LmdldFBvaW50SW5MaW5lQnlMZW5naHQoZW5kLCBzdGFydCwgc2l6ZS54KVxuICAgIGxldCBwb2ludENyb3NzaW5nID0gR2VvbWV0cnkuZGlyZWN0Q3Jvc3Npbmcoc3RhcnQsIGVuZCwgcG9pbnQsIHBvaW50MilcblxuICAgIHBvaW50Q3Jvc3NpbmcgPSBHZW9tZXRyeS5ib3VuZFRvTGluZShzdGFydCwgbmV3RW5kLCBwb2ludENyb3NzaW5nKVxuICAgIHJldHVybiBwb2ludENyb3NzaW5nXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kVG9DaXJjbGUoY2VudGVyLCByYWRpdXMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHBvaW50LCBfc2l6ZSkge1xuICAgIGNvbnN0IGJvdW5kZWRQb2ludCA9IEdlb21ldHJ5LmdldFBvaW50SW5MaW5lQnlMZW5naHQoY2VudGVyLCBwb2ludCwgcmFkaXVzKVxuICAgIHJldHVybiBib3VuZGVkUG9pbnRcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRUb0FyYyhjZW50ZXIsIHJhZGl1cywgc3RhcnRBZ2xlLCBlbmRBbmdsZSkge1xuICByZXR1cm4gZnVuY3Rpb24ocG9pbnQsIF9zaXplKSB7XG4gICAgY29uc3QgYm91bmRTdGFydEFuZ2xlID0gdHlwZW9mIHN0YXJ0QWdsZSA9PT0gJ2Z1bmN0aW9uJyA/IHN0YXJ0QWdsZSgpIDogc3RhcnRBZ2xlXG4gICAgY29uc3QgYm91bmRFbmR0QW5nbGUgPSB0eXBlb2Ygc3RhcnRBZ2xlID09PSAnZnVuY3Rpb24nID8gZW5kQW5nbGUoKSA6IGVuZEFuZ2xlXG5cbiAgICBsZXQgYW5nbGUgPSBHZW9tZXRyeS5nZXRBbmdsZShjZW50ZXIsIHBvaW50KVxuICAgIGFuZ2xlID0gR2VvbWV0cnkubm9ybWFsaXplQW5nbGUoYW5nbGUpXG4gICAgYW5nbGUgPSBHZW9tZXRyeS5ib3VuZEFuZ2xlKGJvdW5kU3RhcnRBbmdsZSwgYm91bmRFbmR0QW5nbGUsIGFuZ2xlKVxuICAgIHJldHVybiBHZW9tZXRyeS5nZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oYW5nbGUsIHJhZGl1cywgY2VudGVyKVxuICB9XG59XG4iLCJpbXBvcnQgeyBhZGRDbGFzcywgcmVtb3ZlQ2xhc3MgfSBmcm9tICcuL3V0aWxzL2NsYXNzZXMnXG5pbXBvcnQgZ2V0RGVmYXVsdFBhcmVudCBmcm9tICcuL3V0aWxzL2dldGRlZmF1bHRwYXJlbnQnXG5pbXBvcnQgRXZlbnQgZnJvbSAnLi9ldmVudCdcbmltcG9ydCBnZXRTdHlsZVByb3BlcnR5IGZyb20gJ2Rlc2FuZHJvLWdldC1zdHlsZS1wcm9wZXJ0eSdcbmltcG9ydCB7IGJvdW5kVG9FbGVtZW50IH0gZnJvbSAnLi9ib3VuZCdcbmltcG9ydCB7IEdlb21ldHJ5LCBQb2ludCwgUmVjdGFuZ2xlIH0gZnJvbSAnLi9nZW9tZXRyeSdcbmltcG9ydCB7IGRlZmF1bHRTY29wZSB9IGZyb20gJy4vc2NvcGUnXG5cbmNvbnN0IERyYWdlZSA9IHsgRXZlbnQgfSAvL3RvZG8gcmVtb3ZlIGFmdGVyIHJlZmFjdG9yZVxuXG5jb25zdCBpc1RvdWNoID0gJ29udG91Y2hzdGFydCcgaW4gd2luZG93LCBtb3VzZUV2ZW50cyA9IHtcbiAgICBzdGFydDogJ21vdXNlZG93bicsXG4gICAgbW92ZTogJ21vdXNlbW92ZScsXG4gICAgZW5kOiAnbW91c2V1cCdcbiAgfSwgdG91Y2hFdmVudHMgPSB7XG4gICAgc3RhcnQ6ICd0b3VjaHN0YXJ0JyxcbiAgICBtb3ZlOiAndG91Y2htb3ZlJyxcbiAgICBlbmQ6ICd0b3VjaGVuZCdcbiAgfSxcbiAgZXZlbnRzID0gaXNUb3VjaCA/IHRvdWNoRXZlbnRzIDogbW91c2VFdmVudHMsXG4gIGRyYWdnYWJsZXMgPSBbXSxcbiAgdHJhbnNmb3JtUHJvcGVydHkgPSBnZXRTdHlsZVByb3BlcnR5KCd0cmFuc2Zvcm0nKSxcbiAgdHJhbnNpdGlvblByb3BlcnR5ID0gZ2V0U3R5bGVQcm9wZXJ0eSgndHJhbnNpdGlvbicpXG5cbmZ1bmN0aW9uIGdldFRvdWNoQnlJRChlbGVtZW50LCB0b3VjaElkKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudC5jaGFuZ2VkVG91Y2hlcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChlbGVtZW50LmNoYW5nZWRUb3VjaGVzW2ldLmlkZW50aWZpZXIgPT09IHRvdWNoSWQpIHtcbiAgICAgIHJldHVybiBlbGVtZW50LmNoYW5nZWRUb3VjaGVzW2ldXG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZVxufVxuXG5mdW5jdGlvbiBwcmV2ZW50RG91YmxlSW5pdChkcmFnZ2FibGUpIHtcbiAgY29uc3QgbWVzc2FnZSA9IFwiZm9yIHRoaXMgZWxlbWVudCBEcmFnZWUuRHJhZ2dhYmxlIGlzIGFscmVhZHkgZXhpc3QsIGRvbid0IGNyZWF0ZSBpdCB0d2ljZSBcIlxuICBpZiAoZHJhZ2dhYmxlcy5zb21lKChleGlzdGluZykgPT4gZHJhZ2dhYmxlLmVsZW1lbnQgPT09IGV4aXN0aW5nLmVsZW1lbnQpKSB7XG4gICAgdGhyb3cgbWVzc2FnZVxuICB9XG4gIGRyYWdnYWJsZXMucHVzaChkcmFnZ2FibGUpXG59XG5cbmZ1bmN0aW9uIGFkZFRvRGVmYXVsdFNjb3BlKGRyYWdnYWJsZSkge1xuICBkZWZhdWx0U2NvcGUuYWRkRHJhZ2dhYmxlKGRyYWdnYWJsZSlcbn1cblxuY2xhc3MgRHJhZ2dhYmxlIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgb3B0aW9ucz17fSkge1xuICAgIGNvbnN0IHBhcmVudCA9IG9wdGlvbnMucGFyZW50IHx8IGdldERlZmF1bHRQYXJlbnQoZWxlbWVudClcbiAgICB0aGlzLnRhcmdldHMgPSBbXVxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgcGFyZW50OiBwYXJlbnQsXG4gICAgICBib3VuZDogYm91bmRUb0VsZW1lbnQocGFyZW50LCBwYXJlbnQpLFxuICAgICAgc3RhcnRGaWx0ZXI6IGZhbHNlLFxuICAgICAgaXNDb250ZW50Qm94U2l6ZTogZmFsc2UsXG4gICAgICBwb3NpdGlvbjogZmFsc2VcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLmhhbmRsZXIgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLmhhbmRsZXIgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3Iob3B0aW9ucy5oYW5kbGVyKSB8fCBlbGVtZW50XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGFuZGxlciA9IG9wdGlvbnMuaGFuZGxlciB8fCBlbGVtZW50XG4gICAgfVxuXG4gICAgdGhpcy5vbkVuZCA9IG5ldyBEcmFnZWUuRXZlbnQodGhpcywgeyBpc1JldmVyc2U6IHRydWUsIGlzU3RvcE9uVHJ1ZTogdHJ1ZSB9KVxuICAgIHRoaXMub25Nb3ZlID0gbmV3IERyYWdlZS5FdmVudCh0aGlzKVxuICAgIHRoaXMub25TdGFydCA9IG5ldyBEcmFnZWUuRXZlbnQodGhpcylcblxuICAgIHRoaXMub25FbmQuYWRkKCgpID0+IHRoaXMubW92ZSh0aGlzLnBvc2l0aW9uLCAwLCB0cnVlLCB0cnVlKSlcblxuICAgIGlmIChvcHRpb25zLm9uRW5kKSB7XG4gICAgICB0aGlzLm9uRW5kLmFkZChvcHRpb25zLm9uRW5kKVxuICAgIH1cbiAgICBpZiAob3B0aW9ucy5vbk1vdmUpIHtcbiAgICAgIHRoaXMub25Nb3ZlLmFkZChvcHRpb25zLm9uTW92ZSlcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMub25TdGFydCkge1xuICAgICAgdGhpcy5vblN0YXJ0LmFkZChvcHRpb25zLm9uU3RhcnQpXG4gICAgfVxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgICB0aGlzLmJvdW5kID0gdGhpcy5vcHRpb25zLmJvdW5kXG4gICAgcHJldmVudERvdWJsZUluaXQodGhpcylcbiAgICBEcmFnZ2FibGUub25DcmVhdGUuZmlyZSh0aGlzKVxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuX2VuYWJsZSA9IHRydWVcbiAgICB0aGlzLm9mZnNldCA9IEdlb21ldHJ5LmdldE9mZnNldCh0aGlzLmVsZW1lbnQsIHRoaXMub3B0aW9ucy5wYXJlbnQsIHRydWUpXG4gICAgdGhpcy5maXhQb3NpdGlvbiA9IHRoaXMub2Zmc2V0XG4gICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMub2Zmc2V0XG4gICAgaWYgKHRoaXMub3B0aW9ucy5wb3NpdGlvbikge1xuICAgICAgdGhpcy5pbml0UG9zaXRpb24gPSB0aGlzLm9wdGlvbnMucG9zaXRpb25cbiAgICAgIHRoaXMubW92ZSh0aGlzLmluaXRQb3NpdGlvbiwgMCwgdHJ1ZSwgdHJ1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbml0UG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICAgIH1cbiAgICB0aGlzLl9kcmFnU3RhcnQgPSB0aGlzLmRyYWdTdGFydC5iaW5kKHRoaXMpXG4gICAgdGhpcy5fZHJhZ01vdmUgPSB0aGlzLmRyYWdNb3ZlLmJpbmQodGhpcylcbiAgICB0aGlzLl9kcmFnRW5kID0gdGhpcy5kcmFnRW5kLmJpbmQodGhpcylcblxuICAgIHRoaXMuaGFuZGxlci5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQpXG4gICAgdGhpcy5oYW5kbGVyLmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydClcblxuICAgIGlmICh0aGlzLmJvdW5kLnJlZnJlc2gpIHtcbiAgICAgIHRoaXMuYm91bmQucmVmcmVzaCgpXG4gICAgfVxuICB9XG5cbiAgcmVpbml0KCkge1xuICAgIHRoaXMub2Zmc2V0ID0gR2VvbWV0cnkuZ2V0T2Zmc2V0KHRoaXMuZWxlbWVudCwgdGhpcy5vcHRpb25zLnBhcmVudCwgdHJ1ZSlcbiAgICB0aGlzLmZpeFBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICBpZiAodGhpcy5vcHRpb25zLnBvc2l0aW9uKSB7XG4gICAgICB0aGlzLmluaXRQb3NpdGlvbiA9IHRoaXMub3B0aW9ucy5wb3NpdGlvblxuICAgICAgdGhpcy5tb3ZlKHRoaXMuaW5pdFBvc2l0aW9uLCAwLCB0cnVlLCB0cnVlKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmluaXRQb3NpdGlvbiA9IHRoaXMub2Zmc2V0XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYm91bmQucmVmcmVzaCkge1xuICAgICAgdGhpcy5ib3VuZC5yZWZyZXNoKClcbiAgICB9XG4gIH1cblxuICBnZXRTaXplKF9yZWNhbHVsYXRlKSB7XG4gICAgcmV0dXJuIEdlb21ldHJ5LmdldFNpemVPZkVsZW1lbnQodGhpcy5lbGVtZW50LCB0aGlzLm9wdGlvbnMuaXNDb250ZW50Qm94U2l6ZSlcbiAgfVxuXG4gIGdldFBvc2l0aW9uKCkge1xuICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLm9mZnNldC5hZGQodGhpcy5fdHJhbnNmb3JtUG9zaXRpb24gfHwgbmV3IFBvaW50KDAsIDApKVxuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uXG4gIH1cblxuICBnZXRDZW50ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb24uYWRkKHRoaXMuZ2V0U2l6ZSgpLm11bHQoMC41KSlcbiAgfVxuXG4gIF9zZXRUcmFuc2xhdGUocG9pbnQpIHtcbiAgICB0aGlzLl90cmFuc2Zvcm1Qb3NpdGlvbiA9IHBvaW50XG5cbiAgICBsZXQgdHJhbnNmb3JtID0gdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BlcnR5XVxuICAgIGxldCB0cmFuc2xhdGVDc3MgPSAnIHRyYW5zbGF0ZTNkKCcgKyBwb2ludC54ICsgJ3B4LCcgKyBwb2ludC55ICsgJ3B4LCAwcHgpJ1xuXG4gICAgY29uc3QgdWEgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudFxuICAgIGNvbnN0IG1zaWUgPSB1YS5pbmRleE9mKCdNU0lFICcpXG5cbiAgICBpZiAobXNpZSkge1xuICAgICAgdHJhbnNsYXRlQ3NzID0gJyB0cmFuc2xhdGUoJyArIHBvaW50LnggKyAncHgsJyArIHBvaW50LnkgKyAncHgpJ1xuICAgICAgaWYgKCEvdHJhbnNsYXRlXFwoW14pXStcXCkvLnRlc3QodHJhbnNmb3JtKSkge1xuICAgICAgICB0cmFuc2Zvcm0gKz0gdHJhbnNsYXRlQ3NzXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cmFuc2Zvcm0gPSB0cmFuc2Zvcm0ucmVwbGFjZSgvdHJhbnNsYXRlXFwoW14pXStcXCkvLCB0cmFuc2xhdGVDc3MpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghL3RyYW5zbGF0ZTNkXFwoW14pXStcXCkvLnRlc3QodHJhbnNmb3JtKSkge1xuICAgICAgICB0cmFuc2Zvcm0gKz0gdHJhbnNsYXRlQ3NzXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cmFuc2Zvcm0gPSB0cmFuc2Zvcm0ucmVwbGFjZSgvdHJhbnNsYXRlM2RcXChbXildK1xcKS8sIHRyYW5zbGF0ZUNzcylcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcGVydHldID0gdHJhbnNmb3JtXG4gIH1cblxuICBtb3ZlKHBvaW50LCB0aW1lPTAsIGlzRml4PWZhbHNlLCBpc1NpbGVudD1mYWxzZSkge1xuICAgIHBvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIGlmIChpc0ZpeCkge1xuICAgICAgdGhpcy5maXhQb3NpdGlvbiA9IHBvaW50XG4gICAgfVxuXG4gICAgdGhpcy5kZXRlcm1pbmVEaXJlY3Rpb24ocG9pbnQpXG5cbiAgICB0aGlzLnBvc2l0aW9uID0gcG9pbnRcblxuICAgIGlmICh0cmFuc2l0aW9uUHJvcGVydHkpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldID0gdGltZSArICdtcydcbiAgICB9XG5cbiAgICB0aGlzLl9zZXRUcmFuc2xhdGUocG9pbnQuc3ViKHRoaXMub2Zmc2V0KSlcbiAgICBpZiAoIWlzU2lsZW50KSB7XG4gICAgICB0aGlzLm9uTW92ZS5maXJlKClcbiAgICB9XG4gIH1cblxuICByZWZyZXNoUG9zaXRpb24gKCkge1xuICAgIHRoaXMuc2V0UG9zaXRpb24odGhpcy5nZXRQb3NpdGlvbigpKVxuICB9XG5cbiAgc2V0UG9zaXRpb24ocG9pbnQpIHtcbiAgICBwb2ludCA9IHBvaW50LmNsb25lKClcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9pbnRcblxuICAgIGlmICh0cmFuc2l0aW9uUHJvcGVydHkpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldID0gJzBtcydcbiAgICB9XG5cbiAgICB0aGlzLl9zZXRUcmFuc2xhdGUocG9pbnQuc3ViKHRoaXMub2Zmc2V0KSlcbiAgfVxuXG4gIHNldFplcm9UcmFuc2l0aW9uKCkge1xuICAgIGlmICh0cmFuc2l0aW9uUHJvcGVydHkpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldID0gJzBtcydcbiAgICB9XG4gIH1cblxuICBkZXRlcm1pbmVEaXJlY3Rpb24ocG9pbnQpIHtcbiAgICB0aGlzLmxlZnREaXJlY3Rpb24gPSAodGhpcy5wb3NpdGlvbi54IDwgcG9pbnQueClcbiAgICB0aGlzLnJpZ2h0RGlyZWN0aW9uID0gKHRoaXMucG9zaXRpb24ueCA+IHBvaW50LngpXG4gICAgdGhpcy51cERpcmVjdGlvbiA9ICh0aGlzLnBvc2l0aW9uLnkgPiBwb2ludC55KVxuICAgIHRoaXMuZG93bkRpcmVjdGlvbiA9ICh0aGlzLnBvc2l0aW9uLnkgPCBwb2ludC55KVxuICB9XG5cbiAgZHJhZ1N0YXJ0KGV2ZW50KSB7XG4gICAgdGhpcy5jdXJyZW50RXZlbnQgPSBldmVudFxuICAgIGlmICghdGhpcy5fZW5hYmxlIHx8ICh0aGlzLm9wdGlvbnMuc3RhcnRGaWx0ZXIgJiYgIXRoaXMub3B0aW9ucy5zdGFydEZpbHRlcihldmVudCkpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBpc1RvdWNoRXZlbnQgPSAoaXNUb3VjaCAmJiAoZXZlbnQgaW5zdGFuY2VvZiB3aW5kb3cuVG91Y2hFdmVudCkpXG5cbiAgICB0aGlzLl9zdGFydFRvdWNoUG9pbnQgPSBuZXcgUG9pbnQoaXNUb3VjaEV2ZW50ID8gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVggOiBldmVudC5jbGllbnRYLCBpc1RvdWNoRXZlbnQgPyBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWSA6IGV2ZW50LmNsaWVudFkpXG5cbiAgICB0aGlzLl9zdGFydFBvc2l0aW9uID0gdGhpcy5nZXRQb3NpdGlvbigpXG4gICAgaWYgKGlzVG91Y2hFdmVudCkge1xuICAgICAgdGhpcy5fdG91Y2hJZCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmlkZW50aWZpZXJcbiAgICB9XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBpZiAoIShldmVudC50YXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElucHV0RWxlbWVudCB8fFxuICAgICAgICAgIGV2ZW50LnRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSW5wdXRFbGVtZW50KSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIH0gZWxzZSB7XG4gICAgICBldmVudC50YXJnZXQuZm9jdXMoKVxuICAgIH1cblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuXG4gICAgdGhpcy5pc0RyYWdnaW5nID0gdHJ1ZVxuXG4gICAgdGhpcy5vblN0YXJ0LmZpcmUoZXZlbnQpXG4gICAgYWRkQ2xhc3ModGhpcy5lbGVtZW50LCAnYWN0aXZlJylcbiAgICB0aGlzLm9uTW92ZS5maXJlKGV2ZW50KVxuICB9XG5cbiAgZHJhZ01vdmUoZXZlbnQpIHtcbiAgICB0aGlzLmN1cnJlbnRFdmVudCA9IGV2ZW50XG4gICAgbGV0IHRvdWNoXG5cbiAgICBjb25zdCBpc1RvdWNoRXZlbnQgPSAoaXNUb3VjaCAmJiAoZXZlbnQgaW5zdGFuY2VvZiB3aW5kb3cuVG91Y2hFdmVudCkpXG4gICAgaWYgKGlzVG91Y2hFdmVudCkge1xuICAgICAgdG91Y2ggPSBnZXRUb3VjaEJ5SUQoZXZlbnQsIHRoaXMuX3RvdWNoSWQpXG5cbiAgICAgIGlmICghdG91Y2gpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc3QgdG91Y2hQb2ludCA9IG5ldyBQb2ludChpc1RvdWNoRXZlbnQgPyB0b3VjaC5wYWdlWCA6IGV2ZW50LmNsaWVudFgsIGlzVG91Y2hFdmVudCA/IHRvdWNoLnBhZ2VZIDogZXZlbnQuY2xpZW50WSlcbiAgICBsZXQgcG9pbnQgPSB0aGlzLl9zdGFydFBvc2l0aW9uLmFkZCh0b3VjaFBvaW50LnN1Yih0aGlzLl9zdGFydFRvdWNoUG9pbnQpKVxuICAgIHBvaW50ID0gdGhpcy5ib3VuZChwb2ludCwgdGhpcy5nZXRTaXplKCkpXG4gICAgdGhpcy50b3VjaFBvaW50ID0gdG91Y2hQb2ludFxuICAgIHRoaXMubW92ZShwb2ludCwgMClcbiAgfVxuXG4gIGRyYWdFbmQoZXZlbnQpIHtcbiAgICBjb25zdCBpc1RvdWNoRXZlbnQgPSAoaXNUb3VjaCAmJiAoZXZlbnQgaW5zdGFuY2VvZiB3aW5kb3cuVG91Y2hFdmVudCkpXG5cbiAgICBpZiAoaXNUb3VjaEV2ZW50ICYmICFnZXRUb3VjaEJ5SUQoZXZlbnQsIHRoaXMuX3RvdWNoSWQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB0aGlzLm9uRW5kLmZpcmUoZXZlbnQpXG5cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG5cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcblxuICAgIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlXG4gICAgcmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50LCAnYWN0aXZlJylcbiAgfVxuXG4gIGdldFJlY3RhbmdsZSgpIHtcbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZSh0aGlzLnBvc2l0aW9uLCB0aGlzLmdldFNpemUoKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgdGhpcy5nZXRTaXplKHRydWUpXG4gICAgaWYgKHRoaXMuYm91bmQucmVmcmVzaCkge1xuICAgICAgdGhpcy5ib3VuZC5yZWZyZXNoKClcbiAgICB9XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuaGFuZGxlci5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQpXG4gICAgdGhpcy5oYW5kbGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG5cbiAgICB0aGlzLm9uRW5kLnJlc2V0KClcbiAgICB0aGlzLm9uTW92ZS5yZXNldCgpXG4gIH1cblxuICBnZXQgZW5hYmxlKCkge1xuICAgIHJldHVybiB0aGlzLl9lbmFibGVcbiAgfVxuXG4gIHNldCBlbmFibGUoZW5hYmxlKSB7XG4gICAgaWYgKGVuYWJsZSkge1xuICAgICAgcmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50LCAnZGlzYWJsZScpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFkZENsYXNzKHRoaXMuZWxlbWVudCwgJ2Rpc2FibGUnKVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9lbmFibGUgPSBlbmFibGVcbiAgfVxufVxuXG5EcmFnZ2FibGUub25DcmVhdGUgPSBuZXcgRHJhZ2VlLkV2ZW50KERyYWdnYWJsZSwgeyBpc1JldmVyc2U6IHRydWUsIGlzU3RvcE9uVHJ1ZTogdHJ1ZSB9KVxuRHJhZ2dhYmxlLm9uQ3JlYXRlLmFkZChhZGRUb0RlZmF1bHRTY29wZSlcblxuZXhwb3J0IHsgRHJhZ2dhYmxlLCBldmVudHMgfVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmZ1bmN0aW9uIEV2ZW50KGNvbnRleHQsIG9wdGlvbnMgPSB7fSkge1xuICB0aGlzLmZ1bmNzID0gW11cbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dFxuICB0aGlzLmlzUmV2ZXJzZSA9IG9wdGlvbnMuaXNSZXZlcnNlIHx8IGZhbHNlXG4gIHRoaXMuaXNTdG9wT25UcnVlID0gb3B0aW9ucy5pc1N0b3BPblRydWUgfHwgZmFsc2Vcbn1cblxuRXZlbnQucHJvdG90eXBlLmZpcmUgPSBmdW5jdGlvbigpIHtcbiAgY29uc3QgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKVxuICBjb25zdCBmcyA9IHRoaXMuaXNSZXZlcnNlID8gdGhpcy5mdW5jcy5zbGljZSgpLnJldmVyc2UoKSA6IHRoaXMuZnVuY3NcbiAgbGV0IHJldFZhbHVlXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBmcy5sZW5ndGg7IGkrKykge1xuICAgIHJldFZhbHVlID0gZnNbaV0uYXBwbHkodGhpcy5jb250ZXh0LCBhcmdzKVxuICAgIGlmICh0aGlzLmlzU3RvcE9uVHJ1ZSAmJiByZXRWYWx1ZSkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gIH1cbiAgcmV0dXJuICF0aGlzLmlzU3RvcE9uVHJ1ZVxufVxuXG5FdmVudC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24oZikge1xuICB0aGlzLmZ1bmNzLnB1c2goZilcbn1cblxuRXZlbnQucHJvdG90eXBlLnVuc2hpZnQgPSBmdW5jdGlvbihmKSB7XG4gIHRoaXMuZnVuY3MudW5zaGlmdChmKVxufVxuXG5FdmVudC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24oZikge1xuICBjb25zdCBpbmRleCA9IHRoaXMuZnVuY3MuaW5kZXhPZihmKVxuICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgdGhpcy5mdW5jcy5zcGxpY2UoaW5kZXgsIDEpXG4gIH1cbn1cblxuRXZlbnQucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24oX2YpIHtcbiAgdGhpcy5mdW5jcyA9IFtdXG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50XG4iLCJjbGFzcyBQb2ludCB7XG4gIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICB0aGlzLnggPSB4XG4gICAgdGhpcy55ID0geVxuICB9XG5cbiAgYWRkKHApIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCArIHAueCwgdGhpcy55ICsgcC55KVxuICB9XG5cbiAgc3ViKHApIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCAtIHAueCwgdGhpcy55IC0gcC55KVxuICB9XG5cbiAgbXVsdChrKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnggKiBrLCB0aGlzLnkgKiBrKVxuICB9XG5cbiAgbmVnYXRpdmUoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCgtdGhpcy54LCAtdGhpcy55KVxuICB9XG5cbiAgY29tcGFyZShwKSB7XG4gICAgcmV0dXJuICh0aGlzLnggPT09IHAueCAmJiB0aGlzLnkgPT09IHAueSlcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54LCB0aGlzLnkpXG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gYHt4PSR7dGhpcy54fSx5PSR7dGhpcy55fWBcbiAgfVxufVxuXG5jbGFzcyBSZWN0YW5nbGUge1xuICBjb25zdHJ1Y3Rvcihwb3NpdGlvbiwgc2l6ZSkge1xuICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvblxuICAgIHRoaXMuc2l6ZSA9IHNpemVcbiAgfVxuXG4gIGdldFAxKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uXG4gIH1cblxuICBnZXRQMigpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54LCB0aGlzLnBvc2l0aW9uLnkpXG4gIH1cblxuICBnZXRQMygpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi5hZGQodGhpcy5zaXplKVxuICB9XG5cbiAgZ2V0UDQoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55KVxuICB9XG5cbiAgZ2V0Q2VudGVyKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLnNpemUubXVsdCgwLjUpKVxuICB9XG5cbiAgb3IocmVjdCkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gbmV3IFBvaW50KE1hdGgubWluKHRoaXMucG9zaXRpb24ueCwgcmVjdC5wb3NpdGlvbi54KSwgTWF0aC5taW4odGhpcy5wb3NpdGlvbi55LCByZWN0LnBvc2l0aW9uLnkpKVxuICAgIGNvbnN0IHNpemUgPSAobmV3IFBvaW50KE1hdGgubWF4KHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54LCByZWN0LnBvc2l0aW9uLnggKyByZWN0LnNpemUueCksIE1hdGgubWF4KHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55LCByZWN0LnBvc2l0aW9uLnkgKyByZWN0LnNpemUueSkpKS5zdWIocG9zaXRpb24pXG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUocG9zaXRpb24sIHNpemUpXG4gIH1cblxuICBhbmQocmVjdCkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gbmV3IFBvaW50KE1hdGgubWF4KHRoaXMucG9zaXRpb24ueCwgcmVjdC5wb3NpdGlvbi54KSwgTWF0aC5tYXgodGhpcy5wb3NpdGlvbi55LCByZWN0LnBvc2l0aW9uLnkpKVxuICAgIGNvbnN0IHNpemUgPSAobmV3IFBvaW50KE1hdGgubWluKHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54LCByZWN0LnBvc2l0aW9uLnggKyByZWN0LnNpemUueCksIE1hdGgubWluKHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55LCByZWN0LnBvc2l0aW9uLnkgKyByZWN0LnNpemUueSkpKS5zdWIocG9zaXRpb24pXG4gICAgaWYgKHNpemUueCA8PSAwIHx8IHNpemUueSA8PSAwKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZShwb3NpdGlvbiwgc2l6ZSlcbiAgfVxuXG4gIGluY2x1ZGVQb2ludChwKSB7XG4gICAgcmV0dXJuICEodGhpcy5wb3NpdGlvbi54ID4gcC54IHx8IHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54IDwgcC54IHx8IHRoaXMucG9zaXRpb24ueSA+IHAueSB8fCB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSA8IHAueSlcbiAgfVxuXG4gIGluY2x1ZGVSZWN0YW5nbGUocmVjdGFuZ2xlKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5jbHVkZVBvaW50KHJlY3RhbmdsZS5wb3NpdGlvbikgJiYgdGhpcy5pbmNsdWRlUG9pbnQocmVjdGFuZ2xlLmdldFAzKCkpXG4gIH1cblxuICBtb3ZlVG9Cb3VuZChyZWN0LCBheGlzKSB7XG4gICAgbGV0IHNlbEF4aXMsIGNyb3NzUmVjdGFuZ2xlXG4gICAgaWYgKGF4aXMpIHtcbiAgICAgIHNlbEF4aXMgPSBheGlzXG4gICAgfSBlbHNlIHtcbiAgICAgIGNyb3NzUmVjdGFuZ2xlID0gdGhpcy5hbmQocmVjdClcbiAgICAgIGlmICghY3Jvc3NSZWN0YW5nbGUpIHtcbiAgICAgICAgcmV0dXJuIHJlY3RcbiAgICAgIH1cbiAgICAgIHNlbEF4aXMgPSBjcm9zc1JlY3RhbmdsZS5zaXplLnggPiBjcm9zc1JlY3RhbmdsZS5zaXplLnkgPyAneScgOiAneCdcbiAgICB9XG4gICAgY29uc3QgdGhpc0NlbnRlciA9IHRoaXMuZ2V0Q2VudGVyKClcbiAgICBjb25zdCByZWN0Q2VudGVyID0gcmVjdC5nZXRDZW50ZXIoKVxuICAgIGNvbnN0IHNpZ24gPSB0aGlzQ2VudGVyW3NlbEF4aXNdID4gcmVjdENlbnRlcltzZWxBeGlzXSA/IC0xIDogMVxuICAgIGNvbnN0IG9mZnNldCA9IHNpZ24gPiAwID8gdGhpcy5wb3NpdGlvbltzZWxBeGlzXSArIHRoaXMuc2l6ZVtzZWxBeGlzXSAtIHJlY3QucG9zaXRpb25bc2VsQXhpc10gOiB0aGlzLnBvc2l0aW9uW3NlbEF4aXNdIC0gKHJlY3QucG9zaXRpb25bc2VsQXhpc10gKyByZWN0LnNpemVbc2VsQXhpc10pXG4gICAgcmVjdC5wb3NpdGlvbltzZWxBeGlzXSA9IHJlY3QucG9zaXRpb25bc2VsQXhpc10gKyBvZmZzZXRcbiAgICByZXR1cm4gcmVjdFxuICB9XG5cbiAgZ2V0U3F1YXJlKCkge1xuICAgIHJldHVybiB0aGlzLnNpemUueCAqIHRoaXMuc2l6ZS55XG4gIH1cblxuICBzdHlsZUFwcGx5KGVsKSB7XG4gICAgZWwgPSBlbCB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbmQnKVxuICAgIGVsLnN0eWxlLmxlZnQgPSB0aGlzLnBvc2l0aW9uLnggKyAncHgnXG4gICAgZWwuc3R5bGUudG9wID0gdGhpcy5wb3NpdGlvbi55ICsgJ3B4J1xuICAgIGVsLnN0eWxlLndpZHRoID0gdGhpcy5zaXplLnggKyAncHgnXG4gICAgZWwuc3R5bGUuaGVpZ2h0ID0gdGhpcy5zaXplLnkgKyAncHgnXG4gIH1cblxuICBncm93dGgoc2l6ZSkge1xuICAgIHRoaXMuc2l6ZSA9IHRoaXMuc2l6ZS5hZGQoc2l6ZSlcbiAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbi5hZGQoc2l6ZS5tdWx0KC0wLjUpKVxuICB9XG5cbiAgZ2V0TWluU2lkZSgpIHtcbiAgICByZXR1cm4gTWF0aC5taW4odGhpcy5zaXplLngsIHRoaXMuc2l6ZS55KVxuICB9XG59XG5cbi8qKioqKioqKioqKioqKioqKi9cbmNvbnN0IEdlb21ldHJ5ID0ge1xuICBnZXREaXN0YW5jZShwMSwgcDIpIHtcbiAgICBjb25zdCBkeCA9IHAxLnggLSBwMi54LCBkeSA9IHAxLnkgLSBwMi55XG4gICAgcmV0dXJuIE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSlcbiAgfSxcbiAgZGlzdGFuY2UocDEsIHAyKSB7XG4gICAgcmV0dXJuIEdlb21ldHJ5LmdldERpc3RhbmNlKHAxLCBwMilcbiAgfSxcbiAgZ2V0WERpZmZlcmVuY2UocDEsIHAyKSB7XG4gICAgcmV0dXJuIE1hdGguYWJzKHAxLnggLSBwMi54KVxuICB9LFxuICBnZXRZRGlmZmVyZW5jZShwMSwgcDIpIHtcbiAgICByZXR1cm4gTWF0aC5hYnMocDEueSAtIHAyLnkpXG4gIH0sXG4gIHRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3Rvcnkob3B0aW9ucykge1xuICAgIHJldHVybiAocDEsIHAyKSA9PiB7XG4gICAgICByZXR1cm4gTWF0aC5zcXJ0KFxuICAgICAgICBNYXRoLnBvdyhvcHRpb25zLnggKiBNYXRoLmFicyhwMS54IC0gcDIueCksIDIpICtcbiAgICAgICAgTWF0aC5wb3cob3B0aW9ucy55ICogTWF0aC5hYnMocDEueSAtIHAyLnkpLCAyKVxuICAgICAgKVxuICAgIH1cbiAgfSxcbiAgaW5kZXhPZk5lYXJlc3RQb2ludChhcnIsIHZhbCwgcmFkaXVzLCBnZXREaXN0YW5jZSkge1xuICAgIGxldCBzaXplLCBpbmRleCA9IDAsIGksIHRlbXBcbiAgICBnZXREaXN0YW5jZSA9IGdldERpc3RhbmNlIHx8IEdlb21ldHJ5LmdldERpc3RhbmNlXG4gICAgaWYgKGFyci5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiAtMVxuICAgIH1cbiAgICBzaXplID0gZ2V0RGlzdGFuY2UoYXJyWzBdLCB2YWwpXG4gICAgZm9yIChpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgdGVtcCA9IGdldERpc3RhbmNlKGFycltpXSwgdmFsKVxuICAgICAgaWYgKHRlbXAgPCBzaXplKSB7XG4gICAgICAgIHNpemUgPSB0ZW1wXG4gICAgICAgIGluZGV4ID0gaVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAocmFkaXVzID49IDAgJiYgc2l6ZSA+IHJhZGl1cykge1xuICAgICAgcmV0dXJuIC0xXG4gICAgfVxuICAgIHJldHVybiBpbmRleFxuICB9LFxuICBib3VuZChtaW4sIG1heCwgdmFsKSB7XG4gICAgcmV0dXJuIE1hdGgubWF4KG1pbiwgTWF0aC5taW4obWF4LCB2YWwpKVxuICB9LFxuICBib3VuZFBvaW50KG1pbiwgbWF4LCB2YWwpIHtcbiAgICBjb25zdCB4ID0gTWF0aC5tYXgobWluLngsIE1hdGgubWluKG1heC54LCB2YWwueCkpXG4gICAgY29uc3QgeSA9IE1hdGgubWF4KG1pbi55LCBNYXRoLm1pbihtYXgueSwgdmFsLnkpKVxuICAgIHJldHVybiBuZXcgUG9pbnQoeCwgeSlcbiAgfSxcbiAgICAvL1JldHVybiBjcm9zc2luZyBwb2ludCBvZiB0d28gbGluZXNcbiAgZGlyZWN0Q3Jvc3NpbmcoTDFQMSwgTDFQMiwgTDJQMSwgTDJQMikge1xuICAgIGxldCB0ZW1wLCBrMSwgazIsIGIxLCBiMiwgeCwgeVxuICAgIGlmIChMMlAxLnggPT09IEwyUDIueCkge1xuICAgICAgdGVtcCA9IEwyUDFcbiAgICAgIEwyUDEgPSBMMVAxXG4gICAgICBMMVAxID0gdGVtcFxuICAgICAgdGVtcCA9IEwyUDJcbiAgICAgIEwyUDIgPSBMMVAyXG4gICAgICBMMVAyID0gdGVtcFxuICAgIH1cbiAgICBpZiAoTDFQMS54ID09PSBMMVAyLngpIHtcbiAgICAgIGsyID0gKEwyUDIueSAtIEwyUDEueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgICAgYjIgPSAoTDJQMi54ICogTDJQMS55IC0gTDJQMS54ICogTDJQMi55KSAvIChMMlAyLnggLSBMMlAxLngpXG4gICAgICB4ID0gTDFQMS54XG4gICAgICB5ID0geCAqIGsyICsgYjJcbiAgICAgIHJldHVybiBuZXcgUG9pbnQoeCwgeSlcbiAgICB9IGVsc2Uge1xuICAgICAgazEgPSAoTDFQMi55IC0gTDFQMS55KSAvIChMMVAyLnggLSBMMVAxLngpXG4gICAgICBiMSA9IChMMVAyLnggKiBMMVAxLnkgLSBMMVAxLnggKiBMMVAyLnkpIC8gKEwxUDIueCAtIEwxUDEueClcbiAgICAgIGsyID0gKEwyUDIueSAtIEwyUDEueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgICAgYjIgPSAoTDJQMi54ICogTDJQMS55IC0gTDJQMS54ICogTDJQMi55KSAvIChMMlAyLnggLSBMMlAxLngpXG4gICAgICB4ID0gKGIxIC0gYjIpIC8gKGsyIC0gazEpXG4gICAgICB5ID0geCAqIGsxICsgYjFcbiAgICAgIHJldHVybiBuZXcgUG9pbnQoeCwgeSlcbiAgICB9XG4gIH0sXG4gIGJvdW5kVG9TZWdtZW50KExQMSwgTFAyLCBQKSB7XG4gICAgbGV0IHgsIHlcbiAgICB4ID0gR2VvbWV0cnkuYm91bmQoTWF0aC5taW4oTFAxLngsIExQMi54KSwgTWF0aC5tYXgoTFAxLngsIExQMi54KSwgUC54KVxuICAgIGlmICh4ICE9PSBQLngpIHtcbiAgICAgIHkgPSAoeCA9PT0gTFAxLngpID8gTFAxLnkgOiBMUDIueVxuICAgICAgUCA9IG5ldyBQb2ludCh4LCB5KVxuICAgIH1cblxuICAgIHkgPSBHZW9tZXRyeS5ib3VuZChNYXRoLm1pbihMUDEueSwgTFAyLnkpLCBNYXRoLm1heChMUDEueSwgTFAyLnkpLCBQLnkpXG4gICAgaWYgKHkgIT09IFAueSkge1xuICAgICAgeCA9ICh5ID09PSBMUDEueSkgPyBMUDEueCA6IExQMi54XG4gICAgICBQID0gbmV3IFBvaW50KHgsIHkpXG4gICAgfVxuXG4gICAgcmV0dXJuIFBcbiAgfSxcbiAgYm91bmRUb0xpbmUoQSwgQiwgUCkge1xuICAgIGNvbnN0IEFQID0gbmV3IFBvaW50KFAueCAtIEEueCwgUC55IC0gQS55KSxcbiAgICAgIEFCID0gbmV3IFBvaW50KEIueCAtIEEueCwgQi55IC0gQS55KSxcbiAgICAgIGFiMiA9IEFCLnggKiBBQi54ICsgQUIueSAqIEFCLnksXG4gICAgICBhcF9hYiA9IEFQLnggKiBBQi54ICsgQVAueSAqIEFCLnksXG4gICAgICB0ID0gYXBfYWIgLyBhYjJcbiAgICByZXR1cm4gbmV3IFBvaW50KEEueCArIEFCLnggKiB0LCBBLnkgKyBBQi55ICogdClcbiAgfSxcbiAgZ2V0UG9pbnRJbkxpbmUoTFAxLCBMUDIsIHBlcmNlbnQpIHtcbiAgICBjb25zdCBkeCA9IExQMi54IC0gTFAxLngsIGR5ID0gTFAyLnkgLSBMUDEueVxuICAgIHJldHVybiBuZXcgUG9pbnQoTFAxLnggKyBwZXJjZW50ICogZHgsIExQMS55ICsgcGVyY2VudCAqIGR5KVxuICB9LFxuICBnZXRQb2ludEluTGluZUJ5TGVuZ2h0KExQMSwgTFAyLCBsZW5naHQpIHtcbiAgICBjb25zdCBkeCA9IExQMi54IC0gTFAxLngsIGR5ID0gTFAyLnkgLSBMUDEueSwgcGVyY2VudCA9IGxlbmdodCAvIEdlb21ldHJ5LmRpc3RhbmNlKExQMSwgTFAyKVxuICAgIHJldHVybiBuZXcgUG9pbnQoTFAxLnggKyBwZXJjZW50ICogZHgsIExQMS55ICsgcGVyY2VudCAqIGR5KVxuICB9LFxuICBjcmVhdGVSZWN0YW5nbGVGcm9tRWxlbWVudChlbCwgcGFyZW50LCBpc0NvbnRlbnRCb3hTaXplLCBpc0NvbnNpZGVyVHJhbnNsYXRlKSB7XG4gICAgY29uc3Qgc2l6ZSA9IHRoaXMuZ2V0U2l6ZU9mRWxlbWVudChlbCwgaXNDb250ZW50Qm94U2l6ZSlcbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZSh0aGlzLmdldE9mZnNldChlbCwgcGFyZW50IHx8IGVsLnBhcmVudE5vZGUsIGlzQ29uc2lkZXJUcmFuc2xhdGUpLCBzaXplKVxuICB9LFxuICBnZXRTdW1WYWx1ZU9mU3R5bGVSdWxlKGVsZW1lbnQsIHJ1bGVzKSB7XG4gICAgcmV0dXJuIHJ1bGVzLnJlZHVjZSgoc3VtLCBydWxlKSA9PiB7XG4gICAgICByZXR1cm4gc3VtICsgcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudClbcnVsZV18fDApXG4gICAgfSwgMClcbiAgfSxcbiAgZ2V0U2l6ZU9mRWxlbWVudChlbCwgaXNDb250ZW50Qm94U2l6ZSkge1xuICAgIGxldCB3aWR0aCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKVsnd2lkdGgnXSksIGhlaWdodCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKVsnaGVpZ2h0J10pXG4gICAgaWYgKCFpc0NvbnRlbnRCb3hTaXplKSB7XG4gICAgICB3aWR0aCArPSB0aGlzLmdldFN1bVZhbHVlT2ZTdHlsZVJ1bGUoZWwsIFsncGFkZGluZy1sZWZ0JywgJ3BhZGRpbmctcmlnaHQnLCAnYm9yZGVyLWxlZnQtd2lkdGgnLCAnYm9yZGVyLXJpZ2h0LXdpZHRoJ10pXG4gICAgICBoZWlnaHQgKz0gdGhpcy5nZXRTdW1WYWx1ZU9mU3R5bGVSdWxlKGVsLCBbJ3BhZGRpbmctdG9wJywgJ3BhZGRpbmctYm90dG9tJywgJ2JvcmRlci10b3Atd2lkdGgnLCAnYm9yZGVyLWJvdHRvbS13aWR0aCddKVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFBvaW50KHdpZHRoLCBoZWlnaHQpXG4gIH0sXG4gIGdldE9mZnNldChlbCwgcGFyZW50KSB7XG4gICAgY29uc3QgZWxSZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksIHBhcmVudFJlY3QgPSBwYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICByZXR1cm4gbmV3IFBvaW50KGVsUmVjdC5sZWZ0IC0gcGFyZW50UmVjdC5sZWZ0LCBlbFJlY3QudG9wIC0gcGFyZW50UmVjdC50b3ApXG4gIH0sXG4gIGdldFBvaW50RnJvbVJhZGlhbFN5c3RlbShhbmdsZSwgbGVuZ3RoLCBjZW50ZXIpIHtcbiAgICBjZW50ZXIgPSBjZW50ZXIgfHwgbmV3IFBvaW50KDAsIDApXG4gICAgcmV0dXJuIGNlbnRlci5hZGQobmV3IFBvaW50KGxlbmd0aCAqIE1hdGguY29zKGFuZ2xlKSwgbGVuZ3RoICogTWF0aC5zaW4oYW5nbGUpKSlcbiAgfSxcbiAgYWRkUG9pbnRUb0JvdW5kUG9pbnRzKGJvdW5kcG9pbnRzLCBwb2ludCwgaXNSaWdodCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGJvdW5kcG9pbnRzLmZpbHRlcihmdW5jdGlvbihiUG9pbnQpIHtcbiAgICAgIHJldHVybiAgYlBvaW50LnkgPiBwb2ludC55IHx8IChpc1JpZ2h0ID8gYlBvaW50LnggPCBwb2ludC54IDogYlBvaW50LnggPiBwb2ludC54KVxuICAgIH0pXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHBvaW50LnkgPCByZXN1bHRbaV0ueSkge1xuICAgICAgICByZXN1bHQuc3BsaWNlKGksIDAsIHBvaW50KVxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC5wdXNoKHBvaW50KVxuICAgIHJldHVybiByZXN1bHRcbiAgfSxcbiAgZ2V0QW5nbGUocDEsIHAyKSB7XG4gICAgY29uc3QgZGlmZiA9IHAyLnN1YihwMSlcbiAgICByZXR1cm4gdGhpcy5ub3JtYWxpemVBbmdsZShNYXRoLmF0YW4yKGRpZmYueSwgZGlmZi54KSlcbiAgfSxcbiAgdG9SYWRpYW4oYW5nbGUpIHtcbiAgICByZXR1cm4gKChhbmdsZSAlIDM2MCkgKiBNYXRoLlBJIC8gMTgwKVxuICB9LFxuICB0b0RlZ3JlZShhbmdsZSkge1xuICAgIHJldHVybiAoYW5nbGUgKiAxODAgLyBNYXRoLlBJKSAlIDM2MFxuICB9LFxuICBib3VuZEFuZ2xlKG1pbiwgbWF4LCB2YWwpIHtcbiAgICBsZXQgZG1pbiwgZG1heFxuICAgIGlmIChtaW4gPCBtYXggJiYgdmFsID4gbWluICYmIHZhbCA8IG1heCkge1xuICAgICAgcmV0dXJuIHZhbFxuICAgIH0gZWxzZSBpZiAobWF4IDwgbWluICYmICh2YWwgPCBtYXggfHwgdmFsID4gbWluKSkge1xuICAgICAgcmV0dXJuIHZhbFxuICAgIH0gZWxzZSB7XG4gICAgICBkbWluID0gdGhpcy5nZXRBbmdsZURpZmYobWluLCB2YWwpXG4gICAgICBkbWF4ID0gdGhpcy5nZXRBbmdsZURpZmYobWF4LCB2YWwpXG4gICAgICBpZiAoZG1pbiA8IGRtYXgpIHtcbiAgICAgICAgcmV0dXJuIG1pblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG1heFxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgZ2V0TmVhcmVzdEFuZ2xlKGFyciwgYW5nbGUpIHtcbiAgICBsZXQgaSwgdGVtcCwgZGlmZiA9IE1hdGguUEkgKiAyLCB2YWx1ZVxuICAgIGZvciAoaSA9IDA7IGkgPCBhcnIubGVuZ3RoO2krKykge1xuICAgICAgdGVtcCA9IEdlb21ldHJ5LmdldEFuZ2xlRGlmZihhcnJbaV0sIGFuZ2xlKVxuICAgICAgaWYgKGRpZmYgPCB0ZW1wKSB7XG4gICAgICAgIGRpZmYgPSB0ZW1wXG4gICAgICAgIHZhbHVlID0gYXJyW2ldXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZVxuICB9LFxuICBnZXRBbmdsZURpZmYoYWxwaGEsIGJldGEpIHtcbiAgICBjb25zdCBtaW5BbmdsZSA9IE1hdGgubWluKGFscGhhLCBiZXRhKSxcbiAgICAgIG1heEFuZ2xlID0gIE1hdGgubWF4KGFscGhhLCBiZXRhKVxuICAgIHJldHVybiBNYXRoLm1pbihtYXhBbmdsZSAtIG1pbkFuZ2xlLCBtaW5BbmdsZSArIE1hdGguUEkqMiAtIG1heEFuZ2xlKVxuICB9LFxuICBub3JtYWxpemVBbmdsZSh2YWwpIHtcbiAgICB3aGlsZSAodmFsIDwgMCkge1xuICAgICAgdmFsICs9IDIgKiBNYXRoLlBJXG4gICAgfVxuICAgIHdoaWxlICh2YWwgPiAyICogTWF0aC5QSSkge1xuICAgICAgdmFsIC09IDIgKiBNYXRoLlBJXG4gICAgfVxuICAgIHJldHVybiB2YWxcbiAgfVxufVxuXG5leHBvcnQgeyBQb2ludCwgUmVjdGFuZ2xlLCBHZW9tZXRyeSB9XG4iLCIndXNlIHN0cmljdCdcbmltcG9ydCB7IEdlb21ldHJ5LCBQb2ludCB9IGZyb20gJy4vZ2VvbWV0cnknXG5cbmNvbnN0IHBvc2l0aW9uVHlwZSA9IHtcbiAgbm90Q3Jvc3Npbmc6IDAsXG4gIGZsb2F0TGVmdDogMSxcbiAgZmxvYXRSaWdodDogMlxufVxuXG5mdW5jdGlvbiBwb3NpdGlvbkZhY3RvcnkodHlwZSkge1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgY2FzZSBwb3NpdGlvblR5cGUubm90Q3Jvc3Npbmc6XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHJlY3RhbmdsZSwgX29wdGlvbnMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihyZWN0YW5nbGVMaXN0LCBpbmRleGVzT2ZOZXdzKSB7XG4gICAgICAgIGNvbnN0IGJvdW5kUmVjdCA9IHR5cGVvZiByZWN0YW5nbGUgPT09ICdmdW5jdGlvbicgPyByZWN0YW5nbGUoKSA6IHJlY3RhbmdsZSxcbiAgICAgICAgICBzdGF0aWNSZWN0YW5nbGVJbmRleGVzID0gcmVjdGFuZ2xlTGlzdC5yZWR1Y2UoZnVuY3Rpb24oaW5kZXhlcywgX3JlY3QsIGluZGV4KSB7XG4gICAgICAgICAgICBpZiAoaW5kZXhlc09mTmV3cy5pbmRleE9mKGluZGV4KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgaW5kZXhlcy5wdXNoKGluZGV4KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGluZGV4ZXNcbiAgICAgICAgICB9LCBbXSlcblxuICAgICAgICBpbmRleGVzT2ZOZXdzLmZvckVhY2goZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgICAgICBsZXQgcmVjdCA9IHJlY3RhbmdsZUxpc3RbaW5kZXhdLCByZW1vdmFibGUgPSBmYWxzZVxuICAgICAgICAgIHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMuZm9yRWFjaChmdW5jdGlvbihpbmRleE9mU3RhdGljKSB7XG4gICAgICAgICAgICBjb25zdCBzdGF0aWNSZWN0ID0gcmVjdGFuZ2xlTGlzdFtpbmRleE9mU3RhdGljXVxuICAgICAgICAgICAgcmVjdCA9IHN0YXRpY1JlY3QubW92ZVRvQm91bmQocmVjdClcbiAgICAgICAgICB9KVxuICAgICAgICAgIHJlbW92YWJsZSA9IHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMuc29tZShmdW5jdGlvbihpbmRleE9mU3RhdGljKSB7XG4gICAgICAgICAgICBjb25zdCBzdGF0aWNSZWN0ID0gcmVjdGFuZ2xlTGlzdFtpbmRleE9mU3RhdGljXVxuICAgICAgICAgICAgcmV0dXJuICAhIXN0YXRpY1JlY3QuYW5kKHJlY3QpXG4gICAgICAgICAgfSkgfHwgcmVjdC5hbmQoYm91bmRSZWN0KS5nZXRTcXVhcmUoKSAhPT0gcmVjdC5nZXRTcXVhcmUoKVxuICAgICAgICAgIGlmIChyZW1vdmFibGUpIHtcbiAgICAgICAgICAgIHJlY3QucmVtb3ZhYmxlID0gdHJ1ZVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdGF0aWNSZWN0YW5nbGVJbmRleGVzLnB1c2goaW5kZXgpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gcmVjdGFuZ2xlTGlzdFxuICAgICAgfVxuICAgIH1cbiAgY2FzZSBwb3NpdGlvblR5cGUuZmxvYXRMZWZ0OlxuICAgIHJldHVybiBmdW5jdGlvbihyZWN0YW5nbGUsIG9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgcGFkZGluZ1RvcExlZnQ6IG5ldyBQb2ludCgwLCAwKSxcbiAgICAgICAgcGFkZGluZ0JvdHRvbVJpZ2h0OiBuZXcgUG9pbnQoMCwgMCksXG4gICAgICAgIHlHYXBCZXR3ZWVuRHJhZ2dhYmxlczogMCxcbiAgICAgICAgcmVtb3ZhYmxlOiB0cnVlXG4gICAgICB9LCBvcHRpb25zKVxuXG4gICAgICByZXR1cm4gZnVuY3Rpb24ocmVjdGFuZ2xlTGlzdCwgX2luZGV4ZXNPZk5ld3MpIHtcbiAgICAgICAgY29uc3QgYm91bmRSZWN0ID0gdHlwZW9mIHJlY3RhbmdsZSA9PT0gJ2Z1bmN0aW9uJyA/IHJlY3RhbmdsZSgpIDogcmVjdGFuZ2xlXG4gICAgICAgIGNvbnN0IHJlY3RQMiA9IGJvdW5kUmVjdC5nZXRQMigpXG4gICAgICAgIGxldCBib3VuZGFyeVBvaW50cyA9IFtib3VuZFJlY3QucG9zaXRpb25dXG4gICAgICAgIHJlY3RhbmdsZUxpc3QuZm9yRWFjaChmdW5jdGlvbihyZWN0KSB7XG4gICAgICAgICAgbGV0IHBvc2l0aW9uLCBpc1ZhbGlkID0gZmFsc2VcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvdW5kYXJ5UG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IChuZXcgUG9pbnQoYm91bmRhcnlQb2ludHNbaV0ueCwgaSA+IDAgPyAoYm91bmRhcnlQb2ludHNbaSAtIDFdLnkgKyBvcHRpb25zLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcykgOiBib3VuZFJlY3QucG9zaXRpb24ueSkpLmFkZChvcHRpb25zLnBhZGRpbmdUb3BMZWZ0KVxuICAgICAgICAgICAgaXNWYWxpZCA9IChwb3NpdGlvbi54ICsgcmVjdC5zaXplLnggPCByZWN0UDIueClcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICAgICAgcG9zaXRpb24gPSAobmV3IFBvaW50KGJvdW5kUmVjdC5wb3NpdGlvbi54LCBib3VuZGFyeVBvaW50c1tib3VuZGFyeVBvaW50cy5sZW5ndGggLSAxXS55ICsgb3B0aW9ucy55R2FwQmV0d2VlbkRyYWdnYWJsZXMpKS5hZGQob3B0aW9ucy5wYWRkaW5nVG9wTGVmdClcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVjdC5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgICAgICAgaWYgKG9wdGlvbnMucmVtb3ZhYmxlICYmIHJlY3QuZ2V0UDMoKS55ID4gYm91bmRSZWN0LmdldFAzKCkueSkge1xuICAgICAgICAgICAgcmVjdC5yZW1vdmFibGUgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGJvdW5kYXJ5UG9pbnRzID0gR2VvbWV0cnkuYWRkUG9pbnRUb0JvdW5kUG9pbnRzKGJvdW5kYXJ5UG9pbnRzLCByZWN0LmdldFAzKCkuYWRkKG9wdGlvbnMucGFkZGluZ0JvdHRvbVJpZ2h0KSlcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHJlY3RhbmdsZUxpc3RcbiAgICAgIH1cbiAgICB9XG4gIGNhc2UgcG9zaXRpb25UeXBlLmZsb2F0UmlnaHQ6XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHJlY3RhbmdsZSwgb3B0aW9ucykge1xuICAgICAgb3B0aW9ucyA9IE9iamVjdC5hc3Npbmcoe1xuICAgICAgICBwYWRkaW5nVG9wUmlnaHQ6IG5ldyBQb2ludCg1LCA1KSxcbiAgICAgICAgcGFkZGluZ0JvdHRvbUxlZnQ6IG5ldyBQb2ludCgwLCAwKSxcbiAgICAgICAgcmVtb3ZhYmxlOiB0cnVlXG4gICAgICB9LCBvcHRpb25zKVxuXG4gICAgICBjb25zdCBwYWRkaW5nVG9wTmVnUmlnaHQgPSBuZXcgUG9pbnQoLW9wdGlvbnMucGFkZGluZ1RvcFJpZ2h0LngsIG9wdGlvbnMucGFkZGluZ1RvcFJpZ2h0LnkpXG4gICAgICBjb25zdCBwYWRkaW5nQm90dG9tTmVnTGVmdCA9IG5ldyBQb2ludCgtb3B0aW9ucy5wYWRkaW5nQm90dG9tTGVmdC54LCBvcHRpb25zLnBhZGRpbmdCb3R0b21MZWZ0LnkpXG4gICAgICByZXR1cm4gZnVuY3Rpb24ocmVjdGFuZ2xlTGlzdCwgX2luZGV4ZXNPZk5ld3MpIHtcbiAgICAgICAgY29uc3QgYm91bmRSZWN0ID0gdHlwZW9mIHJlY3RhbmdsZSA9PT0gJ2Z1bmN0aW9uJyA/IHJlY3RhbmdsZSgpIDogcmVjdGFuZ2xlXG4gICAgICAgIGxldCBib3VuZGFyeVBvaW50cyA9IFtib3VuZFJlY3QuZ2V0UmlnaHRUb3BQb2ludCgpXVxuICAgICAgICByZWN0YW5nbGVMaXN0LmZvckVhY2goZnVuY3Rpb24ocmVjdCwgX2luZGV4KSB7XG4gICAgICAgICAgbGV0IHBvc2l0aW9uLCBpc1ZhbGlkID0gZmFsc2VcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvdW5kYXJ5UG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IChuZXcgUG9pbnQoYm91bmRhcnlQb2ludHNbaV0ueCAtIHJlY3Quc2l6ZS54LCBpID4gMCA/IGJvdW5kYXJ5UG9pbnRzW2kgLSAxXS55IDogYm91bmRSZWN0LnBvc2l0aW9uLnkpKS5hZGQocGFkZGluZ1RvcE5lZ1JpZ2h0KVxuICAgICAgICAgICAgaXNWYWxpZCA9IChwb3NpdGlvbi54ID4gcmVjdC5wb3NpdGlvbi54KVxuICAgICAgICAgICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IG5ldyBQb2ludChib3VuZFJlY3QuZ2V0UDIoKS54LCBib3VuZGFyeVBvaW50c1tib3VuZGFyeVBvaW50cy5sZW5ndGggLSAxXS55KVxuICAgICAgICAgIH1cbiAgICAgICAgICByZWN0LnBvc2l0aW9uID0gcG9zaXRpb25cbiAgICAgICAgICBpZiAob3B0aW9ucy5yZW1vdmFibGUgJiYgcmVjdC5nZXRMZWZ0Qm90dG9tUG9pbnQoKS55ID4gYm91bmRSZWN0LmdldFA0KCkueSkge1xuICAgICAgICAgICAgcmVjdC5yZW1vdmFibGUgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGJvdW5kYXJ5UG9pbnRzID0gR2VvbWV0cnkuYWRkUG9pbnRUb0JvdW5kUG9pbnRzKGJvdW5kYXJ5UG9pbnRzLCByZWN0LmdldFA0KCkuYWRkKHBhZGRpbmdCb3R0b21OZWdMZWZ0KSwgdHJ1ZSlcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHJlY3RhbmdsZUxpc3RcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc29ydGluZ0ZhY3RvcnkodHlwZSkge1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgY2FzZSBwb3NpdGlvblR5cGUubm90Q3Jvc3Npbmc6XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG9sZE9ianNMaXN0LCBuZXdPYmpzLCBpbmRleE9mTmV3cykge1xuICAgICAgICBjb25zdCBvYmpzTGlzdCA9IG9sZE9ianNMaXN0LmNvbmNhdChuZXdPYmpzKVxuICAgICAgICBuZXdPYmpzLmZvckVhY2goZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgICAgaW5kZXhPZk5ld3MucHVzaChvYmpzTGlzdC5pbmRleE9mKG9iaikpXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBvYmpzTGlzdFxuICAgICAgfVxuICAgIH1cbiAgY2FzZSBwb3NpdGlvblR5cGUuZmxvYXRMZWZ0OlxuICBjYXNlIHBvc2l0aW9uVHlwZS5mbG9hdFJpZ2h0OlxuICAgIHJldHVybiBmdW5jdGlvbihyYWRpdXMsIGdldERpc3RhbmNlLCBvcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIGdldFBvc2l0aW9uOiBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgICByZXR1cm4gb2JqLnBvc2l0aW9uXG4gICAgICAgIH1cbiAgICAgIH0sIG9wdGlvbnMpXG5cbiAgICAgIHJldHVybiBmdW5jdGlvbihvbGRPYmpzTGlzdCwgbmV3T2JqcywgaW5kZXhPZk5ld3MpIHtcbiAgICAgICAgY29uc3QgbmV3TGlzdCA9IG9sZE9ianNMaXN0LmNvbmNhdCgpXG4gICAgICAgIGNvbnN0IGxpc3RPbGRQb3NpdGlvbiA9IG9sZE9ianNMaXN0Lm1hcChvcHRpb25zLmdldFBvc2l0aW9uKVxuICAgICAgICBuZXdPYmpzLmZvckVhY2goZnVuY3Rpb24obmV3T2JqKSB7XG4gICAgICAgICAgbGV0IGluZGV4ID0gR2VvbWV0cnkuaW5kZXhPZk5lYXJlc3RQb2ludChsaXN0T2xkUG9zaXRpb24sIG9wdGlvbnMuZ2V0UG9zaXRpb24obmV3T2JqKSwgcmFkaXVzLCBnZXREaXN0YW5jZSlcbiAgICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICBpbmRleCA9IG5ld0xpc3QubGVuZ3RoXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluZGV4ID0gbmV3TGlzdC5pbmRleE9mKG9sZE9ianNMaXN0W2luZGV4XSlcbiAgICAgICAgICB9XG4gICAgICAgICAgbmV3TGlzdC5zcGxpY2UoaW5kZXgsIDAsIG5ld09iailcbiAgICAgICAgfSlcbiAgICAgICAgbmV3T2Jqcy5mb3JFYWNoKGZ1bmN0aW9uKG5ld09iaikge1xuICAgICAgICAgIGluZGV4T2ZOZXdzLnB1c2gobmV3TGlzdC5pbmRleE9mKG5ld09iaikpXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBuZXdMaXN0XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCB7IHBvc2l0aW9uVHlwZSwgc29ydGluZ0ZhY3RvcnksIHBvc2l0aW9uRmFjdG9yeSB9XG4iLCJpbXBvcnQgcmVtb3ZlSXRlbXMgZnJvbSAncmVtb3ZlLWFycmF5LWl0ZW1zJ1xuaW1wb3J0IEV2ZW50IGZyb20gJy4vZXZlbnQnXG5pbXBvcnQgeyBEcmFnZ2FibGUgfSBmcm9tICcuL2RyYWdnYWJsZSdcbmltcG9ydCB7IFRhcmdldCB9IGZyb20gJy4vdGFyZ2V0J1xuXG5jb25zdCBEcmFnZWUgPSB7IEV2ZW50IH0gLy90b2RvIHJlbW92ZSBhZnRlciByZWZhY3RvcmVcblxuY29uc3Qgc2NvcGVzID0gW11cblxuY2xhc3MgU2NvcGUge1xuICBjb25zdHJ1Y3RvcihkcmFnZ2FibGVzLCB0YXJnZXRzLCBvcHRpb25zPXt9KSB7XG4gICAgc2NvcGVzLmZvckVhY2goKHNjb3BlKSA9PiB7XG4gICAgICBpZiAoZHJhZ2dhYmxlcykge1xuICAgICAgICBkcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgICAgIHJlbW92ZUl0ZW1zKHNjb3BlLmRyYWdnYWJsZXMsIGRyYWdnYWJsZSlcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgaWYgKHRhcmdldHMpIHtcbiAgICAgICAgdGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHtcbiAgICAgICAgICByZW1vdmVJdGVtcyhzY29wZS50YXJnZXRzLCB0YXJnZXQpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZXMgfHwgW11cbiAgICB0aGlzLnRhcmdldHMgPSB0YXJnZXRzIHx8IFtdXG4gICAgc2NvcGVzLnB1c2godGhpcylcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICB0aW1lRW5kOiAob3B0aW9ucy50aW1lRW5kKSB8fCA0MDBcbiAgICB9XG5cbiAgICB0aGlzLm9uQ2hhbmdlID0gbmV3IERyYWdlZS5FdmVudCh0aGlzKVxuICAgIGlmIChvcHRpb25zLm9uQ2hhbmdlKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlLmFkZChvcHRpb25zLm9uQ2hhbmdlKVxuICAgIH1cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUub25FbmQuYWRkKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMub25FbmQoZHJhZ2dhYmxlKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgYWRkRHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5wdXNoKGRyYWdnYWJsZSlcbiAgICBkcmFnZ2FibGUub25FbmQudW5zaGlmdCgoKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5vbkVuZChkcmFnZ2FibGUpXG4gICAgfSlcbiAgfVxuXG4gIGFkZFRhcmdldCh0YXJnZXQpIHtcbiAgICB0aGlzLnRhcmdldHMucHVzaCh0YXJnZXQpXG4gIH1cblxuICBvbkVuZChkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBzaG90VGFyZ2V0cyA9IHRoaXMudGFyZ2V0cy5maWx0ZXIoKHRhcmdldCkgPT4ge1xuICAgICAgcmV0dXJuIHRhcmdldC5kcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTFcbiAgICB9KS5maWx0ZXIoKHRhcmdldCkgPT4ge1xuICAgICAgcmV0dXJuIHRhcmdldC5jYXRjaERyYWdnYWJsZShkcmFnZ2FibGUpXG4gICAgfSkuc29ydCgoYSwgYikgPT4ge1xuICAgICAgcmV0dXJuIGEuZ2V0UmVjdGFuZ2xlKCkuZ2V0U3F1YXJlKCkgLSBiLmdldFJlY3RhbmdsZSgpLmdldFNxdWFyZSgpXG4gICAgfSlcblxuICAgIGlmIChzaG90VGFyZ2V0cy5sZW5ndGgpIHtcbiAgICAgIHNob3RUYXJnZXRzWzBdLm9uRW5kKGRyYWdnYWJsZSlcbiAgICB9IGVsc2UgaWYgKGRyYWdnYWJsZS50YXJnZXRzLmxlbmd0aCkge1xuICAgICAgZHJhZ2dhYmxlLm1vdmUoZHJhZ2dhYmxlLmluaXRQb3NpdGlvbiwgdGhpcy5vcHRpb25zLnRpbWVFbmQsIHRydWUsIHRydWUpXG4gICAgfVxuICAgIHRoaXMub25DaGFuZ2UuZmlyZSgpXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMudGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHRhcmdldC5yZXNldCgpKVxuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucmVmcmVzaCgpKVxuICAgIHRoaXMudGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHRhcmdldC5yZWZyZXNoKCkpXG4gIH1cblxuICBnZXQgcG9zaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnRhcmdldHMubWFwKCh0YXJnZXQpID0+IHtcbiAgICAgIHJldHVybiB0YXJnZXQuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB0aGlzLmRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpKVxuICAgIH0pXG4gIH1cblxuICBzZXQgcG9zaXRpb25zKHBvc2l0aW9ucykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSAnd3JvbmcgYXJyYXkgbGVuZ3RoJ1xuICAgIGlmIChwb3NpdGlvbnMubGVuZ3RoID09PSB0aGlzLnRhcmdldHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB0YXJnZXQucmVzZXQoKSlcblxuICAgICAgcG9zaXRpb25zLmZvckVhY2goKHRhcmdldEluZGV4ZXMsIGkpID0+IHtcbiAgICAgICAgdGFyZ2V0SW5kZXhlcy5mb3JFYWNoKChpbmRleCkgPT4ge1xuICAgICAgICAgIHRoaXMudGFyZ2V0c1tpXS5hZGQodGhpcy5kcmFnZ2FibGVzW2luZGV4XSlcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG1lc3NhZ2VcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgZGVmYXVsdFNjb3BlID0gbmV3IFNjb3BlKClcblxuZnVuY3Rpb24gc2NvcGUoZm4pIHtcbiAgY29uc3QgY3VycmVudFNjb3BlID0gbmV3IFNjb3BlKClcbiAgY29uc3QgYWRkRHJhZ2dhYmxlVG9TY29wZSA9IGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICAgIGN1cnJlbnRTY29wZS5hZGREcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICAgIHJldHVybiB0cnVlXG4gIH1cbiAgY29uc3QgYWRkVGFyZ2V0VG9TY29wZSA9IGZ1bmN0aW9uKHRhcmdldCkge1xuICAgIGN1cnJlbnRTY29wZS5hZGRUYXJnZXQodGFyZ2V0KVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBEcmFnZ2FibGUub25DcmVhdGUuYWRkKGFkZERyYWdnYWJsZVRvU2NvcGUpXG4gIFRhcmdldC5vbkNyZWF0ZS5hZGQoYWRkVGFyZ2V0VG9TY29wZSlcbiAgZm4uY2FsbCgpXG4gIERyYWdnYWJsZS5vbkNyZWF0ZS5yZW1vdmUoYWRkRHJhZ2dhYmxlVG9TY29wZSlcbiAgVGFyZ2V0Lm9uQ3JlYXRlLnJlbW92ZShhZGRUYXJnZXRUb1Njb3BlKVxuICByZXR1cm4gY3VycmVudFNjb3BlXG59XG5cbmZ1bmN0aW9uIHNjb3BlRmFjdG9yeShwYXJlbnRFbGVtZW50LCBkcmFnZ2FibGVFbGVtZW50cywgdGFyZ2V0RWxlbWVudHMsIG9wdGlvbnM9e30pIHtcbiAgY29uc3QgZHJhZ2dhYmxlT3B0aW9ucyA9IG9wdGlvbnMuZHJhZ2dhYmxlIHx8IHt9XG4gIGNvbnN0IHRhcmdldE9wdGlvbnMgPSBvcHRpb25zLnRhcmdldCB8fCB7fVxuICBjb25zdCBzY29wZU9wdGlvbnMgPSBvcHRpb25zLnNjb3BlIHx8IHt9XG4gIGRyYWdnYWJsZU9wdGlvbnMucGFyZW50ID0gZHJhZ2dhYmxlT3B0aW9ucy5wYXJlbnQgfHwgcGFyZW50RWxlbWVudFxuICB0YXJnZXRPcHRpb25zLnBhcmVudCA9IHRhcmdldE9wdGlvbnMucGFyZW50IHx8IHBhcmVudEVsZW1lbnRcbiAgZHJhZ2dhYmxlRWxlbWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkcmFnZ2FibGVFbGVtZW50cylcbiAgdGFyZ2V0RWxlbWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0YXJnZXRFbGVtZW50cylcblxuICBjb25zdCBkcmFnZ2FibGVzID0gZHJhZ2dhYmxlRWxlbWVudHMubWFwKChlbGVtZW50KSA9PiB7XG4gICAgcmV0dXJuIG5ldyBEcmFnZ2FibGUoZWxlbWVudCwgZHJhZ2dhYmxlT3B0aW9ucylcbiAgfSlcblxuICBjb25zdCB0YXJnZXRzID0gdGFyZ2V0RWxlbWVudHMubWFwKChlbGVtZW50KSA9PiB7XG4gICAgcmV0dXJuIG5ldyBUYXJnZXQoZWxlbWVudCwgZHJhZ2dhYmxlcywgdGFyZ2V0T3B0aW9ucylcbiAgfSlcbiAgcmV0dXJuIG5ldyBTY29wZShkcmFnZ2FibGVzLCB0YXJnZXRzLCBzY29wZU9wdGlvbnMpXG59XG5cbmV4cG9ydCB7IHNjb3BlcywgZGVmYXVsdFNjb3BlLCBTY29wZSwgc2NvcGVGYWN0b3J5LCBzY29wZSB9XG4iLCIndXNlIHN0cmljdCdcblxuaW1wb3J0IGNyZWF0ZUNhbnZhcyBmcm9tICcuL3V0aWxzL2NyZWF0ZWNhbnZhcydcbmltcG9ydCB7IEdlb21ldHJ5IH0gZnJvbSAnLi9nZW9tZXRyeSdcbmltcG9ydCB7IGJvdW5kVG9MaW5lIH0gZnJvbSAnLi9ib3VuZCdcbmltcG9ydCB7IERyYWdnYWJsZSB9IGZyb20gJy4vZHJhZ2dhYmxlJ1xuXG5jbGFzcyBTcGlkZXIge1xuICBjb25zdHJ1Y3RvcihhcmVhLCBlbGVtZW50cywgb3B0aW9ucz17fSkge1xuICAgIGNvbnN0IGFyZWFSZWN0YW5nbGUgPSBHZW9tZXRyeS5jcmVhdGVSZWN0YW5nbGVGcm9tRWxlbWVudChhcmVhLCBhcmVhKVxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgYW5nbGU6IDAsXG4gICAgICBkQW5nbGU6IDIgKiBNYXRoLlBJIC8gZWxlbWVudHMubGVuZ3RoLFxuICAgICAgY2VudGVyOiBhcmVhUmVjdGFuZ2xlLmdldENlbnRlcigpLFxuICAgICAgc3RhcnRSYWRpdXM6IDUwLFxuICAgICAgZW5kUmFkaXVzOiBhcmVhUmVjdGFuZ2xlLmdldE1pblNpZGUoKSAvIDIsXG4gICAgICBsaW5lV2lkdGg6IDIsXG4gICAgICBzdHJva2VTdHlsZTogJyNmZjU1NzcnLFxuICAgICAgZmlsbFN0eWxlOiAncmdiYSgxNTAsMjU1LDUwLDAuOCknXG4gICAgfSwgb3B0aW9ucylcblxuICAgIHRoaXMuYXJlYSA9IGFyZWFcbiAgICB0aGlzLmFyZWFSZWN0YW5nbGUgPSBhcmVhUmVjdGFuZ2xlXG4gICAgdGhpcy5pbml0KGVsZW1lbnRzKVxuICB9XG5cbiAgaW5pdChlbGVtZW50cykge1xuICAgIHRoaXMuY2FudmFzID0gY3JlYXRlQ2FudmFzKHRoaXMuYXJlYSwgdGhpcy5hcmVhUmVjdGFuZ2xlKVxuICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJylcblxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGVsZW1lbnRzLm1hcCgoZWxlbWVudCwgaSkgPT4ge1xuICAgICAgY29uc3QgYW5nbGUgPSB0aGlzLm9wdGlvbnMuYW5nbGUgKyBpICogdGhpcy5vcHRpb25zLmRBbmdsZVxuICAgICAgY29uc3QgaGFsZlNpemUgPSBHZW9tZXRyeS5nZXRTaXplT2ZFbGVtZW50KGVsZW1lbnQpLm11bHQoMC41KVxuICAgICAgY29uc3Qgc3RhcnQgPSBHZW9tZXRyeS5nZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oYW5nbGUsIHRoaXMub3B0aW9ucy5zdGFydFJhZGl1cywgdGhpcy5vcHRpb25zLmNlbnRlcikuc3ViKGhhbGZTaXplKVxuICAgICAgY29uc3QgZW5kID0gR2VvbWV0cnkuZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKGFuZ2xlLCB0aGlzLm9wdGlvbnMuZW5kUmFkaXVzLCB0aGlzLm9wdGlvbnMuY2VudGVyKS5zdWIoaGFsZlNpemUpXG4gICAgICBjb25zdCBib3VuZCA9IGJvdW5kVG9MaW5lKHN0YXJ0LCBlbmQpXG5cbiAgICAgIHJldHVybiBuZXcgRHJhZ2dhYmxlKGVsZW1lbnQsIHtcbiAgICAgICAgcGFyZW50OiB0aGlzLmFyZWEsXG4gICAgICAgIGJvdW5kOiBib3VuZCxcbiAgICAgICAgcG9zaXRpb246IHN0YXJ0LFxuICAgICAgICBvbk1vdmU6ICgpID0+IHtcbiAgICAgICAgICB0aGlzLmRyYXcoKVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcblxuICAgIHRoaXMuaXNJbml0ID0gdHJ1ZVxuICAgIHRoaXMuZHJhdygpXG4gIH1cblxuICBkcmF3KCkge1xuICAgIGlmICghdGhpcy5pc0luaXQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMuYXJlYVJlY3RhbmdsZS5zaXplLngsIHRoaXMuYXJlYVJlY3RhbmdsZS5zaXplLnkpXG4gICAgdGhpcy5jb250ZXh0LmJlZ2luUGF0aCgpXG5cbiAgICBsZXQgcG9pbnQgPSB0aGlzLmRyYWdnYWJsZXNbMF0uZ2V0Q2VudGVyKClcbiAgICB0aGlzLmNvbnRleHQubW92ZVRvKHBvaW50LngsIHBvaW50LnkpXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZHJhZ2dhYmxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgcG9pbnQgPSB0aGlzLmRyYWdnYWJsZXNbaV0uZ2V0Q2VudGVyKClcbiAgICAgIHRoaXMuY29udGV4dC5saW5lVG8ocG9pbnQueCwgcG9pbnQueSlcbiAgICB9XG4gICAgdGhpcy5jb250ZXh0LmNsb3NlUGF0aCgpXG4gICAgdGhpcy5jb250ZXh0LmxpbmVXaWR0aCA9IHRoaXMub3B0aW9ucy5saW5lV2lkdGhcbiAgICB0aGlzLmNvbnRleHQuc3Ryb2tlU3R5bGUgPSB0aGlzLm9wdGlvbnMuc3Ryb2tlU3R5bGVcbiAgICB0aGlzLmNvbnRleHQuc3Ryb2tlKClcbiAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5vcHRpb25zLmZpbGxTdHlsZVxuICAgIHRoaXMuY29udGV4dC5maWxsKClcbiAgfVxufVxuXG5leHBvcnQgeyBTcGlkZXIgfVxuIiwiaW1wb3J0IHJhbmdlIGZyb20gJy4vdXRpbHMvcmFuZ2UuanMnXG5pbXBvcnQgcmVtb3ZlSXRlbXMgZnJvbSAncmVtb3ZlLWFycmF5LWl0ZW1zJ1xuaW1wb3J0IGdldERlZmF1bHRQYXJlbnQgZnJvbSAnLi91dGlscy9nZXRkZWZhdWx0cGFyZW50J1xuaW1wb3J0IEV2ZW50IGZyb20gJy4vZXZlbnQnXG5pbXBvcnQgeyBHZW9tZXRyeSB9IGZyb20gJy4vZ2VvbWV0cnknXG5pbXBvcnQgeyBwb3NpdGlvblR5cGUsIHNvcnRpbmdGYWN0b3J5LCBwb3NpdGlvbkZhY3RvcnkgfSBmcm9tICcuL3Bvc2l0aW9uaW5nJ1xuaW1wb3J0IHsgc2NvcGVzLCBkZWZhdWx0U2NvcGUgfSBmcm9tICcuL3Njb3BlJ1xuXG5jb25zdCBEcmFnZWUgPSB7IHBvc2l0aW9uVHlwZSwgIHBvc2l0aW9uRmFjdG9yeSwgc29ydGluZ0ZhY3RvcnksIHNjb3BlcywgRXZlbnQgfS8vdG9kbyByZW1vdmUgYWZ0ZXIgcmVmYWN0b3JlXG5cbmNvbnN0IGFkZFRvRGVmYXVsdFNjb3BlID0gZnVuY3Rpb24odGFyZ2V0KSB7XG4gIGRlZmF1bHRTY29wZS5hZGRUYXJnZXQodGFyZ2V0KVxufVxuXG5jbGFzcyBUYXJnZXQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBkcmFnZ2FibGVzLCBvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCB0YXJnZXQgPSB0aGlzXG4gICAgY29uc3QgcGFyZW50ID0gb3B0aW9ucy5wYXJlbnQgfHwgZ2V0RGVmYXVsdFBhcmVudChlbGVtZW50KVxuXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICB0aW1lRW5kOiAyMDAsXG4gICAgICB0aW1lRXhjYW5nZTogNDAwLFxuICAgICAgcGFyZW50OiBwYXJlbnQsXG4gICAgICBzb3J0aW5nOiBEcmFnZWUuc29ydGluZ0ZhY3RvcnkoRHJhZ2VlLnBvc2l0aW9uVHlwZS5mbG9hdExlZnQpKDgwLCBHZW9tZXRyeS50cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5KHsgeDogMSwgeTogNCB9KSksXG4gICAgICBwb3NpdGlvbmluZzogRHJhZ2VlLnBvc2l0aW9uRmFjdG9yeShEcmFnZWUucG9zaXRpb25UeXBlLmZsb2F0TGVmdCkodGhpcy5nZXRSZWN0YW5nbGUuYmluZCh0aGlzKSwgeyByZW1vdmFibGU6IHRydWUgfSlcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUudGFyZ2V0cy5wdXNoKHRhcmdldCkpXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gZHJhZ2dhYmxlc1xuICAgIHRoaXMub25BZGQgPSBuZXcgRHJhZ2VlLkV2ZW50KHRoaXMpXG4gICAgdGhpcy5iZWZvcmVBZGQgPSBuZXcgRHJhZ2VlLkV2ZW50KHRoaXMpXG4gICAgdGhpcy5vblJlbW92ZSA9IG5ldyBEcmFnZWUuRXZlbnQodGhpcylcblxuICAgIGlmIChvcHRpb25zLm9uUmVtb3ZlKSB7XG4gICAgICB0aGlzLm9uUmVtb3ZlLmFkZChvcHRpb25zLm9uUmVtb3ZlKVxuICAgIH1cblxuICAgIGlmIChvcHRpb25zLm9uQWRkKSB7XG4gICAgICB0aGlzLm9uQWRkLmFkZChvcHRpb25zLm9uQWRkKVxuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmJlZm9yZUFkZCkge1xuICAgICAgdGhpcy5iZWZvcmVBZGQuYWRkKG9wdGlvbnMuYmVmb3JlQWRkKVxuICAgIH1cblxuICAgIFRhcmdldC5vbkNyZWF0ZS5maXJlKHRoaXMpXG5cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBsZXQgcmVjdGFuZ2xlcywgaW5kZXhlc09mTmV3XG5cbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcyA9IHRoaXMuZHJhZ2dhYmxlcy5maWx0ZXIoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgbGV0IGVsZW1lbnQgPSBkcmFnZ2FibGUuZWxlbWVudC5wYXJlbnROb2RlXG4gICAgICB3aGlsZSAoZWxlbWVudCkge1xuICAgICAgICBpZiAoZWxlbWVudCA9PT0gdGhpcy5lbGVtZW50KSB7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlXG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9KVxuXG4gICAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmxlbmd0aCkge1xuICAgICAgaW5kZXhlc09mTmV3ID0gcmFuZ2UodGhpcy5pbm5lckRyYWdnYWJsZXMubGVuZ3RoKVxuICAgICAgcmVjdGFuZ2xlcyA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgICB9KSwgaW5kZXhlc09mTmV3KVxuICAgICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXcpXG4gICAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHRoaXMub25BZGQuZmlyZShkcmFnZ2FibGUpKVxuICAgIH1cbiAgfVxuXG4gIGdldFJlY3RhbmdsZSgpIHtcbiAgICByZXR1cm4gR2VvbWV0cnkuY3JlYXRlUmVjdGFuZ2xlRnJvbUVsZW1lbnQoXG4gICAgICB0aGlzLmVsZW1lbnQsXG4gICAgICB0aGlzLm9wdGlvbnMucGFyZW50LFxuICAgICAgdGhpcy5vcHRpb25zLmlzQ29udGVudEJveFNpemUsXG4gICAgICB0cnVlXG4gICAgKVxuICB9XG5cbiAgY2F0Y2hEcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5jYXRjaERyYWdnYWJsZSkge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5jYXRjaERyYWdnYWJsZSh0aGlzLCBkcmFnZ2FibGUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRhcmdldFJlY3RhbmdsZSA9IHRoaXMuZ2V0UmVjdGFuZ2xlKClcbiAgICAgIGNvbnN0IGRyYWdnYWJsZVNxdWFyZSA9IGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKS5nZXRTcXVhcmUoKVxuXG4gICAgICByZXR1cm4gZHJhZ2dhYmxlU3F1YXJlIDwgdGFyZ2V0UmVjdGFuZ2xlLmdldFNxdWFyZSgpXG4gICAgICAgICAgICAgICYmIHRhcmdldFJlY3RhbmdsZS5pbmNsdWRlUG9pbnQoZHJhZ2dhYmxlLmdldENlbnRlcigpKVxuICAgIH1cbiAgfVxuXG4gIGdldFBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFJlY3RhbmdsZSgpLnBvc2l0aW9uXG4gIH1cblxuICBnZXRTaXplKCkge1xuICAgIHJldHVybiB0aGlzLmdldFJlY3RhbmdsZSgpLnNpemVcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgRHJhZ2VlLnNjb3Blcy5mb3JFYWNoKChzY29wZSkgPT4gcmVtb3ZlSXRlbXMoc2NvcGUudGFyZ2V0cywgdGhpcykpXG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLm9wdGlvbnMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgW10pXG4gICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBbXSwgMClcbiAgfVxuXG4gIG9uRW5kKGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IG5ld0RyYWdnYWJsZXNJbmRleCA9IFtdXG4gICAgY29uc3QgaW5jbHVkZVBvaW50ID0gdGhpcy5nZXRSZWN0YW5nbGUoKS5pbmNsdWRlUG9pbnQoZHJhZ2dhYmxlLmdldFBvc2l0aW9uKCkpXG5cbiAgICBpZiAoIWluY2x1ZGVQb2ludCkge1xuICAgICAgaWYgKHRoaXMuZ2V0UmVjdGFuZ2xlKCkuaW5jbHVkZVBvaW50KGRyYWdnYWJsZS5nZXRDZW50ZXIoKSkpIHtcbiAgICAgICAgZHJhZ2dhYmxlLnBvc2l0aW9uID0gZHJhZ2dhYmxlLmdldENlbnRlcigpLmNsb25lKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuYmVmb3JlQWRkLmZpcmUoZHJhZ2dhYmxlKVxuXG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMgPSB0aGlzLm9wdGlvbnMuc29ydGluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcywgW2RyYWdnYWJsZV0sIG5ld0RyYWdnYWJsZXNJbmRleClcbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgfSksIG5ld0RyYWdnYWJsZXNJbmRleCwgZHJhZ2dhYmxlKVxuXG4gICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBuZXdEcmFnZ2FibGVzSW5kZXgpXG4gICAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTEpIHtcbiAgICAgIHRoaXMuYWRkUmVtb3ZlT25Nb3ZlKGRyYWdnYWJsZSlcbiAgICB9XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIHNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIGluZGV4ZXNPZk5ldywgdGltZSkge1xuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnNsaWNlKDApLmZvckVhY2goKGRyYWdnYWJsZSwgaSkgPT4ge1xuICAgICAgY29uc3QgcmVjdCA9IHJlY3RhbmdsZXNbaV0sXG4gICAgICAgIHRpbWVFbmQgPSB0aW1lIHx8IHRpbWUgPT09IDAgPyB0aW1lIDogaW5kZXhlc09mTmV3LmluZGV4T2YoaSkgIT09IC0xID8gdGhpcy5vcHRpb25zLnRpbWVFbmQgOiB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2VcblxuICAgICAgaWYgKHJlY3QucmVtb3ZhYmxlKSB7XG4gICAgICAgIGRyYWdnYWJsZS5tb3ZlKGRyYWdnYWJsZS5pbml0UG9zaXRpb24sIHRpbWVFbmQsIHRydWUsIHRydWUpXG4gICAgICAgIHJlbW92ZUl0ZW1zKHRoaXMuaW5uZXJEcmFnZ2FibGVzLCBkcmFnZ2FibGUpXG5cbiAgICAgICAgdGhpcy5vblJlbW92ZS5maXJlKGRyYWdnYWJsZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRyYWdnYWJsZS5tb3ZlKHJlY3QucG9zaXRpb24sIHRpbWVFbmQsIHRydWUsIHRydWUpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGFkZChkcmFnZ2FibGUsIHRpbWUpIHtcbiAgICBjb25zdCBuZXdEcmFnZ2FibGVzSW5kZXggPSB0aGlzLmlubmVyRHJhZ2dhYmxlcy5sZW5ndGhcblxuICAgIHRoaXMuYmVmb3JlQWRkLmZpcmUoZHJhZ2dhYmxlKVxuXG4gICAgdGhpcy5wdXNoSW5uZXJEcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICAgIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLm9wdGlvbnMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgbmV3RHJhZ2dhYmxlc0luZGV4LCBkcmFnZ2FibGUpXG5cbiAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIFtuZXdEcmFnZ2FibGVzSW5kZXhdLCB0aW1lIHx8IDApXG4gICAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTEpIHtcbiAgICAgIHRoaXMuYWRkUmVtb3ZlT25Nb3ZlKGRyYWdnYWJsZSlcbiAgICB9XG4gIH1cblxuICBwdXNoSW5uZXJEcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKT09PS0xKSB7XG4gICAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5wdXNoKGRyYWdnYWJsZSlcbiAgICB9XG4gIH1cblxuICBhZGRSZW1vdmVPbk1vdmUoZHJhZ2dhYmxlKSB7XG4gICAgZHJhZ2dhYmxlLm9uTW92ZS5hZGQodGhpcy5yZW1vdmVIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgdGhpcy5yZW1vdmUoZHJhZ2dhYmxlKVxuICAgIH0pXG5cbiAgICB0aGlzLm9uQWRkLmZpcmUoZHJhZ2dhYmxlKVxuICB9XG5cbiAgcmVtb3ZlKGRyYWdnYWJsZSkge1xuICAgIGRyYWdnYWJsZS5vbk1vdmUucmVtb3ZlKHRoaXMucmVtb3ZlSGFuZGxlcilcblxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpXG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuc3BsaWNlKGluZGV4LCAxKVxuXG4gICAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBbXSlcblxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgW10pXG4gICAgdGhpcy5vblJlbW92ZS5maXJlKGRyYWdnYWJsZSlcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLm1vdmUoZHJhZ2dhYmxlLmluaXRQb3NpdGlvbiwgMCwgdHJ1ZSwgdHJ1ZSlcbiAgICAgIHRoaXMub25SZW1vdmUuZmlyZShkcmFnZ2FibGUpXG4gICAgfSlcbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcyA9IFtdXG4gIH1cblxuICBnZXRTb3J0ZWREcmFnZ2FibGVzKCkge1xuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnNsaWNlKClcbiAgfVxufVxuXG5UYXJnZXQub25DcmVhdGUgPSBuZXcgRHJhZ2VlLkV2ZW50KFRhcmdldCwgeyBpc1JldmVyc2U6IHRydWUsIGlzU3RvcE9uVHJ1ZTogdHJ1ZSB9KVxuVGFyZ2V0Lm9uQ3JlYXRlLmFkZChhZGRUb0RlZmF1bHRTY29wZSlcblxuZXhwb3J0IHsgVGFyZ2V0IH1cbiIsImV4cG9ydCBmdW5jdGlvbiBoYXNDbGFzcyhlbGVtZW50LCBjKSB7XG4gIGNvbnN0IHJlID0gbmV3IFJlZ0V4cCgnKF58XFxcXHMpJyArIGMgKyAnKFxcXFxzfCQpJywgJ2cnKVxuICByZXR1cm4gKHJlLnRlc3QoZWxlbWVudC5jbGFzc05hbWUpKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQ2xhc3MoZWxlbWVudCwgYykge1xuICBpZiAoIWhhc0NsYXNzKGVsZW1lbnQsIGMpKSB7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSAoZWxlbWVudC5jbGFzc05hbWUgKyAnICcgKyBjKS5yZXBsYWNlKC9cXHMrL2csICcgJykucmVwbGFjZSgvKF4gfCAkKS9nLCAnJylcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoZWxlbWVudCwgYykge1xuICBjb25zdCByZSA9IG5ldyBSZWdFeHAoJyhefFxcXFxzKScgKyBjICsgJyhcXFxcc3wkKScsICdnJylcbiAgZWxlbWVudC5jbGFzc05hbWUgPSBlbGVtZW50LmNsYXNzTmFtZS5yZXBsYWNlKHJlLCAnJDEnKS5yZXBsYWNlKC9cXHMrL2csICcgJykucmVwbGFjZSgvKF4gfCAkKS9nLCAnJylcbn1cbiIsImZ1bmN0aW9uIHNldFN0eWxlKGVsZW1lbnQsIHN0eWxlKSB7XG4gIHN0eWxlID0gc3R5bGUgfHwge31cbiAgbGV0IGNzc1RleHQgPSAnJ1xuICBmb3IgKGNvbnN0IGtleSBpbiBzdHlsZSkge1xuICAgIGlmIChzdHlsZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBjc3NUZXh0ICs9IGtleSArICc6ICcgKyBzdHlsZVtrZXldICsgJzsgJ1xuICAgIH1cbiAgfVxuXG4gIGVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IGNzc1RleHRcbn1cblxuZnVuY3Rpb24gYXBwZW5kRmlyc3RDaGlsZChlbGVtZW50LCBub2RlKSB7XG4gIGlmIChlbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICBlbGVtZW50Lmluc2VydEJlZm9yZShub2RlLCBlbGVtZW50LmZpcnN0Q2hpbGQpXG4gIH0gZWxzZSB7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChub2RlKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUNhbnZhcyhhcmVhLCByZWN0YWdsZSkge1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKVxuICBpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUoYXJlYSkucG9zaXRpb24gPT09ICdzdGF0aWMnKSB7XG4gICAgYXJlYS5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSdcbiAgfVxuXG4gIGNhbnZhcy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgcmVjdGFnbGUuc2l6ZS54ICsgJ3B4JylcbiAgY2FudmFzLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgcmVjdGFnbGUuc2l6ZS55ICsgJ3B4JylcbiAgc2V0U3R5bGUoY2FudmFzLCB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgbGVmdDogcmVjdGFnbGUucG9zaXRpb24ueSArICdweCcsXG4gICAgdG9wOiByZWN0YWdsZS5wb3NpdGlvbi55ICsgJ3B4JyxcbiAgICB3aWR0aDogcmVjdGFnbGUuc2l6ZS54ICsgJ3B4JyxcbiAgICBoZWlnaHQ6IHJlY3RhZ2xlLnNpemUueSArICdweCdcbiAgfSlcbiAgYXBwZW5kRmlyc3RDaGlsZChhcmVhLCBjYW52YXMpXG4gIHJldHVybiBjYW52YXNcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldERlZmF1bHRQYXJlbnQoZWxlbWVudCkge1xuICBsZXQgcGFyZW50ID0gZWxlbWVudC5wYXJlbnROb2RlXG4gIHdoaWxlIChwYXJlbnQucGFyZW50Tm9kZSAmJiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShwYXJlbnQpWydwb3NpdGlvbiddID09PSAnc3RhdGljJykge1xuICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlXG4gIH1cbiAgcmV0dXJuIHBhcmVudFxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmFuZ2Uoc3RhcnQsIHN0b3AsIHN0ZXApIHtcbiAgY29uc3QgcmVzdWx0ID0gW11cbiAgaWYgKHR5cGVvZiBzdG9wID09PSAndW5kZWZpbmVkJykge1xuICAgIHN0b3AgPSBzdGFydFxuICAgIHN0YXJ0ID0gMFxuICB9XG4gIGlmICh0eXBlb2Ygc3RlcCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBzdGVwID0gMVxuICB9XG4gIGlmICgoc3RlcCA+IDAgJiYgc3RhcnQgPj0gc3RvcCkgfHwgKHN0ZXAgPCAwICYmIHN0YXJ0IDw9IHN0b3ApKSB7XG4gICAgcmV0dXJuIFtdXG4gIH1cbiAgZm9yIChsZXQgaSA9IHN0YXJ0OyBzdGVwID4gMCA/IGkgPCBzdG9wIDogaSA+IHN0b3A7IGkgKz0gc3RlcCkge1xuICAgIHJlc3VsdC5wdXNoKGkpXG4gIH1cbiAgcmV0dXJuIHJlc3VsdFxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==