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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/list.js");
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

/***/ "./src/list.js":
/*!*********************!*\
  !*** ./src/list.js ***!
  \*********************/
/*! exports provided: List, listFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listFactory", function() { return listFactory; });
/* harmony import */ var remove_array_items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! remove-array-items */ "./node_modules/remove-array-items/dist/remove-array-items.esm.js");
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event */ "./src/event.js");
/* harmony import */ var _geometry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./geometry */ "./src/geometry.js");
/* harmony import */ var _draggable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./draggable */ "./src/draggable.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Dragee = {
  Event: _event__WEBPACK_IMPORTED_MODULE_1__["default"]
}; //todo remove after refactore

var List =
/*#__PURE__*/
function () {
  function List(draggables) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, List);

    this.options = Object.assign({
      timeEnd: 200,
      timeExcange: 400,
      radius: 30,
      getDistance: _geometry__WEBPACK_IMPORTED_MODULE_2__["Geometry"].getDistance,
      isDisplacement: false,
      isSortable: true
    }, options);
    this.draggables = draggables;
    this.onChange = new Dragee.Event(this);

    if (options.onChange) {
      this.onChange.add(options.onChange);
    }

    this.init();
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
      var _this = this;

      var _moveHandler;

      var list = this;
      draggable.enable = this._enable;

      if (this.options.isDisplacement) {
        _moveHandler = function moveHandler() {
          if (draggable.isDragging) {
            list.onStart(draggable);
            draggable.onMove.remove(_moveHandler);
            return true;
          }
        };

        draggable.onEnd.add(function () {
          _this.onEndDisplaycement(draggable);

          draggable.onMove.add(_moveHandler);
          return true;
        });
        draggable.onMove.add(_moveHandler);
      } else {
        draggable.onEnd.add(function () {
          _this.onEnd(draggable);

          return true;
        });
      }
    }
  }, {
    key: "moveOrSave",
    value: function moveOrSave(draggable, position, time) {
      if (draggable.isDragging) {
        draggable.fixPosition = position;
      } else {
        draggable.move(position, time, true);
      }
    }
  }, {
    key: "onEnd",
    value: function onEnd(draggable) {
      var fixPositions = this.getCurrentFixPosition();
      var currentIndex = this.draggables.indexOf(draggable);
      var excangeIndex = _geometry__WEBPACK_IMPORTED_MODULE_2__["Geometry"].indexOfNearestPoint(fixPositions, draggable.position, this.options.radius, this.options.getDistance);

      if (excangeIndex === -1 || excangeIndex === currentIndex) {
        draggable.move(draggable.fixPosition, this.options.timeEnd, true);
      } else {
        this.moveOrSave(this.draggables[excangeIndex], fixPositions[currentIndex], this.options.timeExcange);
        this.draggables[currentIndex].move(fixPositions[excangeIndex], this.options.timeEnd, true);
        this.onChange.fire();
      }

      return true;
    }
  }, {
    key: "sortIfPossible",
    value: function sortIfPossible(draggable) {
      var fixPosition = draggable.fixPosition;
      var currentIndex = this.draggables.indexOf(draggable);
      var nextDraggable = this.draggables[currentIndex + 1];
      var prevDraggable = this.draggables[currentIndex - 1];

      if (draggable.downDirection && nextDraggable) {
        var distance = this.options.getDistance(draggable.position, nextDraggable.position);

        if (distance < this.options.radius) {
          draggable.fixPosition = nextDraggable.fixPosition;
          this.moveOrSave(nextDraggable, fixPosition, this.options.timeExcange);
          var _ref = [this.draggables[currentIndex + 1], this.draggables[currentIndex]];
          this.draggables[currentIndex] = _ref[0];
          this.draggables[currentIndex + 1] = _ref[1];
          this.sortIfPossible(draggable);
        }
      }

      if (draggable.upDirection && prevDraggable) {
        var _distance = this.options.getDistance(draggable.position, prevDraggable.position);

        if (_distance < this.options.radius) {
          draggable.fixPosition = prevDraggable.fixPosition;
          this.moveOrSave(prevDraggable, fixPosition, this.options.timeExcange);
          var _ref2 = [this.draggables[currentIndex - 1], this.draggables[currentIndex]];
          this.draggables[currentIndex] = _ref2[0];
          this.draggables[currentIndex - 1] = _ref2[1];
          this.sortIfPossible(draggable);
        }
      }
    }
  }, {
    key: "onEndDisplaycement",
    value: function onEndDisplaycement(draggable) {
      var sortedDraggables = this.getSortedDraggables();
      var fixPositions = sortedDraggables.map(function (draggable) {
        return draggable.fixPosition;
      });
      var currentIndex = sortedDraggables.indexOf(draggable);
      var targetIndex = _geometry__WEBPACK_IMPORTED_MODULE_2__["Geometry"].indexOfNearestPoint(fixPositions, draggable.position, this.options.radius, this.options.getDistance);

      if (targetIndex !== -1) {
        if (targetIndex < currentIndex) {
          for (var i = targetIndex; i < currentIndex; i++) {
            this.moveOrSave(sortedDraggables[i], fixPositions[i + 1], this.options.timeExcange);
          }
        } else {
          for (var _i = currentIndex; _i < targetIndex; _i++) {
            this.moveOrSave(sortedDraggables[_i + 1], fixPositions[_i], this.options.timeExcange);
          }
        }

        draggable.move(fixPositions[targetIndex], this.options.timeEnd, true);
      } else {
        draggable.move(draggable.fixPosition, this.options.timeEnd, true);
      }
    }
  }, {
    key: "onStart",
    value: function onStart(draggable) {
      var i;
      var sortedDraggables = this.getSortedDraggables();
      var fixPositions = sortedDraggables.map(function (draggable) {
        return draggable.fixPosition;
      });
      var currentIndex = sortedDraggables.indexOf(draggable);

      for (i = currentIndex + 1; i < sortedDraggables.length; i++) {
        this.moveOrSave(sortedDraggables[i], fixPositions[i - 1], this.options.timeExcange);
      }

      sortedDraggables[currentIndex].fixPosition = fixPositions[i - 1];
    }
  }, {
    key: "getCurrentFixPosition",
    value: function getCurrentFixPosition() {
      return this.draggables.map(function (draggable) {
        return draggable.fixPosition.clone();
      });
    }
  }, {
    key: "getSortedDraggables",
    value: function getSortedDraggables() {
      var _this2 = this;

      var initPositions = this.draggables.map(function (draggable) {
        return draggable.initPosition;
      });
      var sortedDraggables = initPositions.map(function (position) {
        return _this2.draggables.filter(function (draggable) {
          return draggable.fixPosition.compare(position);
        })[0];
      });
      return sortedDraggables;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.draggables.forEach(function (draggable) {
        draggable.move(draggable.initPosition, 0, true, false);
      });
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.draggables.forEach(function (draggable) {
        draggable.refresh();
      });
    }
  }, {
    key: "add",
    value: function add(draggables) {
      if (!(draggables instanceof Array)) {
        draggables = [draggables];
      }

      draggables.forEach(this.initDraggable, this);
      this.draggables = this.draggables.concat(draggables);
    }
  }, {
    key: "remove",
    value: function remove(draggables) {
      var _this3 = this;

      var initPositions = this.draggables.map(function (draggable) {
        return draggable.initPosition;
      });
      var list = [];
      var sortedDraggables = this.getSortedDraggables();

      if (!(draggables instanceof Array)) {
        draggables = [draggables];
      }

      draggables.forEach(function (draggable) {
        draggable.onEnd.reset();
        draggable.onMove.reset(); //todo remove reset in future

        Object(remove_array_items__WEBPACK_IMPORTED_MODULE_0__["default"])(_this3.draggables, draggable);
      });
      var j = 0;
      sortedDraggables.forEach(function (draggable) {
        if (_this3.draggables.indexOf(draggable) !== -1) {
          if (draggable.fixPosition !== initPositions[j]) {
            draggable.move(initPositions[j], _this3.options.timeExcange, true);
          }

          draggable.initPosition = initPositions[j];
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
    key: "positions",
    get: function get() {
      return this.getCurrentFixPosition();
    },
    set: function set(positions) {
      var _this4 = this;

      var message = 'wrong array length';

      if (positions.length === this.draggables.length) {
        positions.forEach(function (point, i) {
          _this4.draggables[i].move(point, 0, true, true);
        }, this);
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
  }]);

  return List;
}();

function listFactory(parentElement, elements) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var draggableOptions = options.draggable || {};
  var listOptions = options.list || {};
  draggableOptions.parent = draggableOptions.parent || parentElement;
  elements = Array.prototype.slice.call(elements);
  var draggables = elements.map(function (element) {
    return new _draggable__WEBPACK_IMPORTED_MODULE_3__["Draggable"](element, draggableOptions);
  });
  return new List(draggables, listOptions);
}



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9EcmFnZWUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0RyYWdlZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9EcmFnZWUvLi9ub2RlX21vZHVsZXMvZGVzYW5kcm8tZ2V0LXN0eWxlLXByb3BlcnR5L2dldC1zdHlsZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9ub2RlX21vZHVsZXMvcmVtb3ZlLWFycmF5LWl0ZW1zL2Rpc3QvcmVtb3ZlLWFycmF5LWl0ZW1zLmVzbS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvYm91bmQuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL2RyYWdnYWJsZS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvZXZlbnQuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL2dlb21ldHJ5LmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy9saXN0LmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy9wb3NpdGlvbmluZy5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvc2NvcGUuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL3RhcmdldC5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvdXRpbHMvY2xhc3Nlcy5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvdXRpbHMvZ2V0ZGVmYXVsdHBhcmVudC5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvdXRpbHMvcmFuZ2UuanMiXSwibmFtZXMiOlsiYm91bmRUb1JlY3RhbmdsZSIsInJlY3RhbmdsZSIsInBvaW50Iiwic2l6ZSIsImNhbGNQb2ludCIsImNsb25lIiwicmVjdFAyIiwiZ2V0UDMiLCJwb3NpdGlvbiIsIngiLCJ5IiwiYm91bmRUb0VsZW1lbnQiLCJlbGVtZW50IiwicGFyZW50IiwicmV0RnVuYyIsImJvdW5kIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJyZWZyZXNoIiwiR2VvbWV0cnkiLCJjcmVhdGVSZWN0YW5nbGVGcm9tRWxlbWVudCIsImJvdW5kVG9MaW5lWCIsInN0YXJ0WSIsImVuZFkiLCJib3VuZFRvTGluZVkiLCJzdGFydFgiLCJlbmRYIiwiYm91bmRUb0xpbmUiLCJzdGFydCIsImVuZCIsImFscGhhIiwiTWF0aCIsImF0YW4yIiwiYmV0YSIsIlBJIiwic29tZUsiLCJjb3NCZXRhIiwiY29zIiwic2luQmV0YSIsInNpbiIsInBvaW50MiIsIlBvaW50IiwibmV3RW5kIiwiZ2V0UG9pbnRJbkxpbmVCeUxlbmdodCIsInBvaW50Q3Jvc3NpbmciLCJkaXJlY3RDcm9zc2luZyIsImJvdW5kVG9DaXJjbGUiLCJjZW50ZXIiLCJyYWRpdXMiLCJfc2l6ZSIsImJvdW5kZWRQb2ludCIsImJvdW5kVG9BcmMiLCJzdGFydEFnbGUiLCJlbmRBbmdsZSIsImJvdW5kU3RhcnRBbmdsZSIsImJvdW5kRW5kdEFuZ2xlIiwiYW5nbGUiLCJnZXRBbmdsZSIsIm5vcm1hbGl6ZUFuZ2xlIiwiYm91bmRBbmdsZSIsImdldFBvaW50RnJvbVJhZGlhbFN5c3RlbSIsIkRyYWdlZSIsIkV2ZW50IiwiaXNUb3VjaCIsIndpbmRvdyIsIm1vdXNlRXZlbnRzIiwibW92ZSIsInRvdWNoRXZlbnRzIiwiZXZlbnRzIiwiZHJhZ2dhYmxlcyIsInRyYW5zZm9ybVByb3BlcnR5IiwiZ2V0U3R5bGVQcm9wZXJ0eSIsInRyYW5zaXRpb25Qcm9wZXJ0eSIsImdldFRvdWNoQnlJRCIsInRvdWNoSWQiLCJpIiwiY2hhbmdlZFRvdWNoZXMiLCJsZW5ndGgiLCJpZGVudGlmaWVyIiwicHJldmVudERvdWJsZUluaXQiLCJkcmFnZ2FibGUiLCJtZXNzYWdlIiwic29tZSIsImV4aXN0aW5nIiwicHVzaCIsImFkZFRvRGVmYXVsdFNjb3BlIiwiZGVmYXVsdFNjb3BlIiwiYWRkRHJhZ2dhYmxlIiwiRHJhZ2dhYmxlIiwib3B0aW9ucyIsImdldERlZmF1bHRQYXJlbnQiLCJ0YXJnZXRzIiwiT2JqZWN0IiwiYXNzaWduIiwic3RhcnRGaWx0ZXIiLCJpc0NvbnRlbnRCb3hTaXplIiwiaGFuZGxlciIsInF1ZXJ5U2VsZWN0b3IiLCJvbkVuZCIsImlzUmV2ZXJzZSIsImlzU3RvcE9uVHJ1ZSIsIm9uTW92ZSIsIm9uU3RhcnQiLCJhZGQiLCJvbkNyZWF0ZSIsImZpcmUiLCJpbml0IiwiX2VuYWJsZSIsIm9mZnNldCIsImdldE9mZnNldCIsImZpeFBvc2l0aW9uIiwiaW5pdFBvc2l0aW9uIiwiX2RyYWdTdGFydCIsImRyYWdTdGFydCIsImJpbmQiLCJfZHJhZ01vdmUiLCJkcmFnTW92ZSIsIl9kcmFnRW5kIiwiZHJhZ0VuZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJfcmVjYWx1bGF0ZSIsImdldFNpemVPZkVsZW1lbnQiLCJfdHJhbnNmb3JtUG9zaXRpb24iLCJnZXRTaXplIiwibXVsdCIsInRyYW5zZm9ybSIsInN0eWxlIiwidHJhbnNsYXRlQ3NzIiwidWEiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJtc2llIiwiaW5kZXhPZiIsInRlc3QiLCJyZXBsYWNlIiwidGltZSIsImlzRml4IiwiaXNTaWxlbnQiLCJkZXRlcm1pbmVEaXJlY3Rpb24iLCJfc2V0VHJhbnNsYXRlIiwic3ViIiwic2V0UG9zaXRpb24iLCJnZXRQb3NpdGlvbiIsImxlZnREaXJlY3Rpb24iLCJyaWdodERpcmVjdGlvbiIsInVwRGlyZWN0aW9uIiwiZG93bkRpcmVjdGlvbiIsImV2ZW50IiwiY3VycmVudEV2ZW50IiwiaXNUb3VjaEV2ZW50IiwiVG91Y2hFdmVudCIsIl9zdGFydFRvdWNoUG9pbnQiLCJwYWdlWCIsImNsaWVudFgiLCJwYWdlWSIsImNsaWVudFkiLCJfc3RhcnRQb3NpdGlvbiIsIl90b3VjaElkIiwic3RvcFByb3BhZ2F0aW9uIiwidGFyZ2V0IiwiSFRNTElucHV0RWxlbWVudCIsInByZXZlbnREZWZhdWx0IiwiZm9jdXMiLCJkb2N1bWVudCIsImlzRHJhZ2dpbmciLCJhZGRDbGFzcyIsInRvdWNoIiwidG91Y2hQb2ludCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZW1vdmVDbGFzcyIsIlJlY3RhbmdsZSIsInJlc2V0IiwiZW5hYmxlIiwiY29udGV4dCIsImZ1bmNzIiwicHJvdG90eXBlIiwiYXJncyIsInNsaWNlIiwiY2FsbCIsImZzIiwicmV2ZXJzZSIsInJldFZhbHVlIiwiZiIsInVuc2hpZnQiLCJyZW1vdmUiLCJpbmRleCIsInNwbGljZSIsIl9mIiwicCIsImsiLCJyZWN0IiwibWluIiwibWF4IiwiaW5jbHVkZVBvaW50IiwiYXhpcyIsInNlbEF4aXMiLCJjcm9zc1JlY3RhbmdsZSIsImFuZCIsInRoaXNDZW50ZXIiLCJnZXRDZW50ZXIiLCJyZWN0Q2VudGVyIiwic2lnbiIsImVsIiwibGVmdCIsInRvcCIsIndpZHRoIiwiaGVpZ2h0IiwiZ2V0RGlzdGFuY2UiLCJwMSIsInAyIiwiZHgiLCJkeSIsInNxcnQiLCJkaXN0YW5jZSIsImdldFhEaWZmZXJlbmNlIiwiYWJzIiwiZ2V0WURpZmZlcmVuY2UiLCJ0cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5IiwicG93IiwiaW5kZXhPZk5lYXJlc3RQb2ludCIsImFyciIsInZhbCIsInRlbXAiLCJib3VuZFBvaW50IiwiTDFQMSIsIkwxUDIiLCJMMlAxIiwiTDJQMiIsImsxIiwiazIiLCJiMSIsImIyIiwiYm91bmRUb1NlZ21lbnQiLCJMUDEiLCJMUDIiLCJQIiwiQSIsIkIiLCJBUCIsIkFCIiwiYWIyIiwiYXBfYWIiLCJ0IiwiZ2V0UG9pbnRJbkxpbmUiLCJwZXJjZW50IiwibGVuZ2h0IiwiaXNDb25zaWRlclRyYW5zbGF0ZSIsInBhcmVudE5vZGUiLCJnZXRTdW1WYWx1ZU9mU3R5bGVSdWxlIiwicnVsZXMiLCJyZWR1Y2UiLCJzdW0iLCJydWxlIiwicGFyc2VJbnQiLCJnZXRDb21wdXRlZFN0eWxlIiwiZWxSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicGFyZW50UmVjdCIsImFkZFBvaW50VG9Cb3VuZFBvaW50cyIsImJvdW5kcG9pbnRzIiwiaXNSaWdodCIsInJlc3VsdCIsImZpbHRlciIsImJQb2ludCIsImRpZmYiLCJ0b1JhZGlhbiIsInRvRGVncmVlIiwiZG1pbiIsImRtYXgiLCJnZXRBbmdsZURpZmYiLCJnZXROZWFyZXN0QW5nbGUiLCJ2YWx1ZSIsIm1pbkFuZ2xlIiwibWF4QW5nbGUiLCJMaXN0IiwidGltZUVuZCIsInRpbWVFeGNhbmdlIiwiaXNEaXNwbGFjZW1lbnQiLCJpc1NvcnRhYmxlIiwib25DaGFuZ2UiLCJmb3JFYWNoIiwiaW5pdERyYWdnYWJsZSIsIm1vdmVIYW5kbGVyIiwibGlzdCIsIm9uRW5kRGlzcGxheWNlbWVudCIsImZpeFBvc2l0aW9ucyIsImdldEN1cnJlbnRGaXhQb3NpdGlvbiIsImN1cnJlbnRJbmRleCIsImV4Y2FuZ2VJbmRleCIsIm1vdmVPclNhdmUiLCJuZXh0RHJhZ2dhYmxlIiwicHJldkRyYWdnYWJsZSIsInNvcnRJZlBvc3NpYmxlIiwic29ydGVkRHJhZ2dhYmxlcyIsImdldFNvcnRlZERyYWdnYWJsZXMiLCJtYXAiLCJ0YXJnZXRJbmRleCIsImluaXRQb3NpdGlvbnMiLCJjb21wYXJlIiwiQXJyYXkiLCJjb25jYXQiLCJyZW1vdmVJdGVtcyIsImoiLCJkZXN0cm95IiwicG9zaXRpb25zIiwibGlzdEZhY3RvcnkiLCJwYXJlbnRFbGVtZW50IiwiZWxlbWVudHMiLCJkcmFnZ2FibGVPcHRpb25zIiwibGlzdE9wdGlvbnMiLCJwb3NpdGlvblR5cGUiLCJub3RDcm9zc2luZyIsImZsb2F0TGVmdCIsImZsb2F0UmlnaHQiLCJwb3NpdGlvbkZhY3RvcnkiLCJ0eXBlIiwiX29wdGlvbnMiLCJyZWN0YW5nbGVMaXN0IiwiaW5kZXhlc09mTmV3cyIsImJvdW5kUmVjdCIsInN0YXRpY1JlY3RhbmdsZUluZGV4ZXMiLCJpbmRleGVzIiwiX3JlY3QiLCJyZW1vdmFibGUiLCJpbmRleE9mU3RhdGljIiwic3RhdGljUmVjdCIsIm1vdmVUb0JvdW5kIiwiZ2V0U3F1YXJlIiwicGFkZGluZ1RvcExlZnQiLCJwYWRkaW5nQm90dG9tUmlnaHQiLCJ5R2FwQmV0d2VlbkRyYWdnYWJsZXMiLCJfaW5kZXhlc09mTmV3cyIsImdldFAyIiwiYm91bmRhcnlQb2ludHMiLCJpc1ZhbGlkIiwiYXNzaW5nIiwicGFkZGluZ1RvcFJpZ2h0IiwicGFkZGluZ0JvdHRvbUxlZnQiLCJwYWRkaW5nVG9wTmVnUmlnaHQiLCJwYWRkaW5nQm90dG9tTmVnTGVmdCIsImdldFJpZ2h0VG9wUG9pbnQiLCJfaW5kZXgiLCJnZXRMZWZ0Qm90dG9tUG9pbnQiLCJnZXRQNCIsInNvcnRpbmdGYWN0b3J5Iiwib2xkT2Jqc0xpc3QiLCJuZXdPYmpzIiwiaW5kZXhPZk5ld3MiLCJvYmpzTGlzdCIsIm9iaiIsIm5ld0xpc3QiLCJsaXN0T2xkUG9zaXRpb24iLCJuZXdPYmoiLCJzY29wZXMiLCJTY29wZSIsInNjb3BlIiwic2hvdFRhcmdldHMiLCJjYXRjaERyYWdnYWJsZSIsInNvcnQiLCJhIiwiYiIsImdldFJlY3RhbmdsZSIsImlubmVyRHJhZ2dhYmxlcyIsInRhcmdldEluZGV4ZXMiLCJmbiIsImN1cnJlbnRTY29wZSIsImFkZERyYWdnYWJsZVRvU2NvcGUiLCJhZGRUYXJnZXRUb1Njb3BlIiwiYWRkVGFyZ2V0IiwiVGFyZ2V0Iiwic2NvcGVGYWN0b3J5IiwiZHJhZ2dhYmxlRWxlbWVudHMiLCJ0YXJnZXRFbGVtZW50cyIsInRhcmdldE9wdGlvbnMiLCJzY29wZU9wdGlvbnMiLCJzb3J0aW5nIiwicG9zaXRpb25pbmciLCJvbkFkZCIsImJlZm9yZUFkZCIsIm9uUmVtb3ZlIiwicmVjdGFuZ2xlcyIsImluZGV4ZXNPZk5ldyIsInJhbmdlIiwidGFyZ2V0UmVjdGFuZ2xlIiwiZHJhZ2dhYmxlU3F1YXJlIiwibmV3RHJhZ2dhYmxlc0luZGV4IiwiYWRkUmVtb3ZlT25Nb3ZlIiwicHVzaElubmVyRHJhZ2dhYmxlIiwicmVtb3ZlSGFuZGxlciIsImhhc0NsYXNzIiwiYyIsInJlIiwiUmVnRXhwIiwiY2xhc3NOYW1lIiwic3RvcCIsInN0ZXAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNB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VCxDQUFlbFcsS0FBZixFQUFzQjhXLElBQXRCLEVBQTRCQyxJQUE1QixFQUFrQztBQUMvQyxNQUFNdEksTUFBTSxHQUFHLEVBQWY7O0FBQ0EsTUFBSSxPQUFPcUksSUFBUCxLQUFnQixXQUFwQixFQUFpQztBQUMvQkEsUUFBSSxHQUFHOVcsS0FBUDtBQUNBQSxTQUFLLEdBQUcsQ0FBUjtBQUNEOztBQUNELE1BQUksT0FBTytXLElBQVAsS0FBZ0IsV0FBcEIsRUFBaUM7QUFDL0JBLFFBQUksR0FBRyxDQUFQO0FBQ0Q7O0FBQ0QsTUFBS0EsSUFBSSxHQUFHLENBQVAsSUFBWS9XLEtBQUssSUFBSThXLElBQXRCLElBQWdDQyxJQUFJLEdBQUcsQ0FBUCxJQUFZL1csS0FBSyxJQUFJOFcsSUFBekQsRUFBZ0U7QUFDOUQsV0FBTyxFQUFQO0FBQ0Q7O0FBQ0QsT0FBSyxJQUFJL1QsQ0FBQyxHQUFHL0MsS0FBYixFQUFvQitXLElBQUksR0FBRyxDQUFQLEdBQVdoVSxDQUFDLEdBQUcrVCxJQUFmLEdBQXNCL1QsQ0FBQyxHQUFHK1QsSUFBOUMsRUFBb0QvVCxDQUFDLElBQUlnVSxJQUF6RCxFQUErRDtBQUM3RHRJLFVBQU0sQ0FBQ2pMLElBQVAsQ0FBWVQsQ0FBWjtBQUNEOztBQUNELFNBQU8wTCxNQUFQO0FBQ0QsQyIsImZpbGUiOiJsaXN0LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiRHJhZ2VlXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkRyYWdlZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJEcmFnZWVcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2xpc3QuanNcIik7XG4iLCIvKiFcbiAqIGdldFN0eWxlUHJvcGVydHkgdjEuMC40XG4gKiBvcmlnaW5hbCBieSBrYW5nYXhcbiAqIGh0dHA6Ly9wZXJmZWN0aW9ua2lsbHMuY29tL2ZlYXR1cmUtdGVzdGluZy1jc3MtcHJvcGVydGllcy9cbiAqIE1JVCBsaWNlbnNlXG4gKi9cblxuLypqc2hpbnQgYnJvd3NlcjogdHJ1ZSwgc3RyaWN0OiB0cnVlLCB1bmRlZjogdHJ1ZSAqL1xuLypnbG9iYWwgZGVmaW5lOiBmYWxzZSwgZXhwb3J0czogZmFsc2UsIG1vZHVsZTogZmFsc2UgKi9cblxuKCBmdW5jdGlvbiggd2luZG93ICkge1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBwcmVmaXhlcyA9ICdXZWJraXQgTW96IG1zIE1zIE8nLnNwbGl0KCcgJyk7XG52YXIgZG9jRWxlbVN0eWxlID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlO1xuXG5mdW5jdGlvbiBnZXRTdHlsZVByb3BlcnR5KCBwcm9wTmFtZSApIHtcbiAgaWYgKCAhcHJvcE5hbWUgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gdGVzdCBzdGFuZGFyZCBwcm9wZXJ0eSBmaXJzdFxuICBpZiAoIHR5cGVvZiBkb2NFbGVtU3R5bGVbIHByb3BOYW1lIF0gPT09ICdzdHJpbmcnICkge1xuICAgIHJldHVybiBwcm9wTmFtZTtcbiAgfVxuXG4gIC8vIGNhcGl0YWxpemVcbiAgcHJvcE5hbWUgPSBwcm9wTmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHByb3BOYW1lLnNsaWNlKDEpO1xuXG4gIC8vIHRlc3QgdmVuZG9yIHNwZWNpZmljIHByb3BlcnRpZXNcbiAgdmFyIHByZWZpeGVkO1xuICBmb3IgKCB2YXIgaT0wLCBsZW4gPSBwcmVmaXhlcy5sZW5ndGg7IGkgPCBsZW47IGkrKyApIHtcbiAgICBwcmVmaXhlZCA9IHByZWZpeGVzW2ldICsgcHJvcE5hbWU7XG4gICAgaWYgKCB0eXBlb2YgZG9jRWxlbVN0eWxlWyBwcmVmaXhlZCBdID09PSAnc3RyaW5nJyApIHtcbiAgICAgIHJldHVybiBwcmVmaXhlZDtcbiAgICB9XG4gIH1cbn1cblxuLy8gdHJhbnNwb3J0XG5pZiAoIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcbiAgLy8gQU1EXG4gIGRlZmluZSggZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGdldFN0eWxlUHJvcGVydHk7XG4gIH0pO1xufSBlbHNlIGlmICggdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICkge1xuICAvLyBDb21tb25KUyBmb3IgQ29tcG9uZW50XG4gIG1vZHVsZS5leHBvcnRzID0gZ2V0U3R5bGVQcm9wZXJ0eTtcbn0gZWxzZSB7XG4gIC8vIGJyb3dzZXIgZ2xvYmFsXG4gIHdpbmRvdy5nZXRTdHlsZVByb3BlcnR5ID0gZ2V0U3R5bGVQcm9wZXJ0eTtcbn1cblxufSkoIHdpbmRvdyApO1xuIiwiLyoqXG4gKiBSZW1vdmUgYSByYW5nZSBvZiBpdGVtcyBmcm9tIGFuIGFycmF5XG4gKlxuICogQGZ1bmN0aW9uIHJlbW92ZUl0ZW1zXG4gKiBAcGFyYW0ge0FycmF5PCo+fSBhcnIgVGhlIHRhcmdldCBhcnJheVxuICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0SWR4IFRoZSBpbmRleCB0byBiZWdpbiByZW1vdmluZyBmcm9tIChpbmNsdXNpdmUpXG4gKiBAcGFyYW0ge251bWJlcn0gcmVtb3ZlQ291bnQgSG93IG1hbnkgaXRlbXMgdG8gcmVtb3ZlXG4gKi9cbmZ1bmN0aW9uIHJlbW92ZUl0ZW1zIChhcnIsIHN0YXJ0SWR4LCByZW1vdmVDb3VudCkge1xuICB2YXIgaSwgbGVuZ3RoID0gYXJyLmxlbmd0aDtcblxuICBpZiAoc3RhcnRJZHggPj0gbGVuZ3RoIHx8IHJlbW92ZUNvdW50ID09PSAwKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICByZW1vdmVDb3VudCA9IChzdGFydElkeCArIHJlbW92ZUNvdW50ID4gbGVuZ3RoID8gbGVuZ3RoIC0gc3RhcnRJZHggOiByZW1vdmVDb3VudCk7XG5cbiAgdmFyIGxlbiA9IGxlbmd0aCAtIHJlbW92ZUNvdW50O1xuXG4gIGZvciAoaSA9IHN0YXJ0SWR4OyBpIDwgbGVuOyArK2kpIHtcbiAgICBhcnJbaV0gPSBhcnJbaSArIHJlbW92ZUNvdW50XTtcbiAgfVxuXG4gIGFyci5sZW5ndGggPSBsZW47XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbW92ZUl0ZW1zO1xuIiwiaW1wb3J0IHsgR2VvbWV0cnksIFBvaW50IH0gZnJvbSAnLi9nZW9tZXRyeSdcblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kVG9SZWN0YW5nbGUocmVjdGFuZ2xlKSB7XG4gIHJldHVybiBmdW5jdGlvbihwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IGNhbGNQb2ludCA9IHBvaW50LmNsb25lKCksXG4gICAgICByZWN0UDIgPSByZWN0YW5nbGUuZ2V0UDMoKVxuXG4gICAgaWYgKHJlY3RhbmdsZS5wb3NpdGlvbi54ID4gY2FsY1BvaW50LngpIHtcbiAgICAgIChjYWxjUG9pbnQueCA9IHJlY3RhbmdsZS5wb3NpdGlvbi54KVxuICAgIH1cbiAgICBpZiAocmVjdGFuZ2xlLnBvc2l0aW9uLnkgPiBjYWxjUG9pbnQueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSByZWN0YW5nbGUucG9zaXRpb24ueVxuICAgIH1cbiAgICBpZiAocmVjdFAyLnggPCBjYWxjUG9pbnQueCArIHNpemUueCkge1xuICAgICAgY2FsY1BvaW50LnggPSByZWN0UDIueCAtIHNpemUueFxuICAgIH1cbiAgICBpZiAocmVjdFAyLnkgPCBjYWxjUG9pbnQueSArIHNpemUueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSByZWN0UDIueSAtIHNpemUueVxuICAgIH1cblxuICAgIHJldHVybiBjYWxjUG9pbnRcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRUb0VsZW1lbnQoZWxlbWVudCwgcGFyZW50KSB7XG4gIGNvbnN0IHJldEZ1bmMgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gYm91bmQuYXBwbHkodGhpcywgYXJndW1lbnRzKVxuICB9XG4gIGxldCBib3VuZFxuXG4gIHJldEZ1bmMucmVmcmVzaCA9IGZ1bmN0aW9uKCkge1xuICAgIGJvdW5kID0gYm91bmRUb1JlY3RhbmdsZShHZW9tZXRyeS5jcmVhdGVSZWN0YW5nbGVGcm9tRWxlbWVudChlbGVtZW50LCBwYXJlbnQpKVxuICB9XG5cbiAgcmV0RnVuYy5yZWZyZXNoKClcbiAgcmV0dXJuIHJldEZ1bmNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kVG9MaW5lWCh4LCBzdGFydFksIGVuZFkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgY2FsY1BvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIGNhbGNQb2ludC54ID0geFxuICAgIGlmIChzdGFydFkgPiBjYWxjUG9pbnQueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSBzdGFydFlcbiAgICB9XG4gICAgaWYgKGVuZFkgPCBjYWxjUG9pbnQueSArIHNpemUueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSBlbmRZIC0gc2l6ZS55XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhbGNQb2ludFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZFRvTGluZVkoeSwgc3RhcnRYLCBlbmRYKSB7XG4gIHJldHVybiBmdW5jdGlvbihwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IGNhbGNQb2ludCA9IHBvaW50LmNsb25lKClcbiAgICBjYWxjUG9pbnQueSA9IHlcbiAgICBpZiAoc3RhcnRYID4gY2FsY1BvaW50LngpIHtcbiAgICAgIGNhbGNQb2ludC54ID0gc3RhcnRYXG4gICAgfVxuICAgIGlmIChlbmRYIDwgY2FsY1BvaW50LnggKyBzaXplLngpIHtcbiAgICAgIGNhbGNQb2ludC54ID0gZW5kWCAtIHNpemUueFxuICAgIH1cbiAgICByZXR1cm4gY2FsY1BvaW50XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kVG9MaW5lKHN0YXJ0LCBlbmQpIHtcbiAgY29uc3QgYWxwaGEgPSBNYXRoLmF0YW4yKGVuZC55IC0gc3RhcnQueSwgZW5kLnggLSBzdGFydC54KSxcbiAgICBiZXRhID0gYWxwaGEgKyBNYXRoLlBJIC8gMixcbiAgICBzb21lSyA9IDEwLFxuICAgIGNvc0JldGEgPSBNYXRoLmNvcyhiZXRhKSxcbiAgICBzaW5CZXRhID0gTWF0aC5zaW4oYmV0YSlcblxuICByZXR1cm4gZnVuY3Rpb24ocG9pbnQsIHNpemUpIHtcbiAgICBjb25zdCBwb2ludDIgPSBuZXcgUG9pbnQocG9pbnQueCArIHNvbWVLICogY29zQmV0YSwgcG9pbnQueSArIHNvbWVLICogc2luQmV0YSksXG4gICAgICBuZXdFbmQgPSBHZW9tZXRyeS5nZXRQb2ludEluTGluZUJ5TGVuZ2h0KGVuZCwgc3RhcnQsIHNpemUueClcbiAgICBsZXQgcG9pbnRDcm9zc2luZyA9IEdlb21ldHJ5LmRpcmVjdENyb3NzaW5nKHN0YXJ0LCBlbmQsIHBvaW50LCBwb2ludDIpXG5cbiAgICBwb2ludENyb3NzaW5nID0gR2VvbWV0cnkuYm91bmRUb0xpbmUoc3RhcnQsIG5ld0VuZCwgcG9pbnRDcm9zc2luZylcbiAgICByZXR1cm4gcG9pbnRDcm9zc2luZ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZFRvQ2lyY2xlKGNlbnRlciwgcmFkaXVzKSB7XG4gIHJldHVybiBmdW5jdGlvbihwb2ludCwgX3NpemUpIHtcbiAgICBjb25zdCBib3VuZGVkUG9pbnQgPSBHZW9tZXRyeS5nZXRQb2ludEluTGluZUJ5TGVuZ2h0KGNlbnRlciwgcG9pbnQsIHJhZGl1cylcbiAgICByZXR1cm4gYm91bmRlZFBvaW50XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kVG9BcmMoY2VudGVyLCByYWRpdXMsIHN0YXJ0QWdsZSwgZW5kQW5nbGUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHBvaW50LCBfc2l6ZSkge1xuICAgIGNvbnN0IGJvdW5kU3RhcnRBbmdsZSA9IHR5cGVvZiBzdGFydEFnbGUgPT09ICdmdW5jdGlvbicgPyBzdGFydEFnbGUoKSA6IHN0YXJ0QWdsZVxuICAgIGNvbnN0IGJvdW5kRW5kdEFuZ2xlID0gdHlwZW9mIHN0YXJ0QWdsZSA9PT0gJ2Z1bmN0aW9uJyA/IGVuZEFuZ2xlKCkgOiBlbmRBbmdsZVxuXG4gICAgbGV0IGFuZ2xlID0gR2VvbWV0cnkuZ2V0QW5nbGUoY2VudGVyLCBwb2ludClcbiAgICBhbmdsZSA9IEdlb21ldHJ5Lm5vcm1hbGl6ZUFuZ2xlKGFuZ2xlKVxuICAgIGFuZ2xlID0gR2VvbWV0cnkuYm91bmRBbmdsZShib3VuZFN0YXJ0QW5nbGUsIGJvdW5kRW5kdEFuZ2xlLCBhbmdsZSlcbiAgICByZXR1cm4gR2VvbWV0cnkuZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKGFuZ2xlLCByYWRpdXMsIGNlbnRlcilcbiAgfVxufVxuIiwiaW1wb3J0IHsgYWRkQ2xhc3MsIHJlbW92ZUNsYXNzIH0gZnJvbSAnLi91dGlscy9jbGFzc2VzJ1xuaW1wb3J0IGdldERlZmF1bHRQYXJlbnQgZnJvbSAnLi91dGlscy9nZXRkZWZhdWx0cGFyZW50J1xuaW1wb3J0IEV2ZW50IGZyb20gJy4vZXZlbnQnXG5pbXBvcnQgZ2V0U3R5bGVQcm9wZXJ0eSBmcm9tICdkZXNhbmRyby1nZXQtc3R5bGUtcHJvcGVydHknXG5pbXBvcnQgeyBib3VuZFRvRWxlbWVudCB9IGZyb20gJy4vYm91bmQnXG5pbXBvcnQgeyBHZW9tZXRyeSwgUG9pbnQsIFJlY3RhbmdsZSB9IGZyb20gJy4vZ2VvbWV0cnknXG5pbXBvcnQgeyBkZWZhdWx0U2NvcGUgfSBmcm9tICcuL3Njb3BlJ1xuXG5jb25zdCBEcmFnZWUgPSB7IEV2ZW50IH0gLy90b2RvIHJlbW92ZSBhZnRlciByZWZhY3RvcmVcblxuY29uc3QgaXNUb3VjaCA9ICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdywgbW91c2VFdmVudHMgPSB7XG4gICAgc3RhcnQ6ICdtb3VzZWRvd24nLFxuICAgIG1vdmU6ICdtb3VzZW1vdmUnLFxuICAgIGVuZDogJ21vdXNldXAnXG4gIH0sIHRvdWNoRXZlbnRzID0ge1xuICAgIHN0YXJ0OiAndG91Y2hzdGFydCcsXG4gICAgbW92ZTogJ3RvdWNobW92ZScsXG4gICAgZW5kOiAndG91Y2hlbmQnXG4gIH0sXG4gIGV2ZW50cyA9IGlzVG91Y2ggPyB0b3VjaEV2ZW50cyA6IG1vdXNlRXZlbnRzLFxuICBkcmFnZ2FibGVzID0gW10sXG4gIHRyYW5zZm9ybVByb3BlcnR5ID0gZ2V0U3R5bGVQcm9wZXJ0eSgndHJhbnNmb3JtJyksXG4gIHRyYW5zaXRpb25Qcm9wZXJ0eSA9IGdldFN0eWxlUHJvcGVydHkoJ3RyYW5zaXRpb24nKVxuXG5mdW5jdGlvbiBnZXRUb3VjaEJ5SUQoZWxlbWVudCwgdG91Y2hJZCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnQuY2hhbmdlZFRvdWNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZWxlbWVudC5jaGFuZ2VkVG91Y2hlc1tpXS5pZGVudGlmaWVyID09PSB0b3VjaElkKSB7XG4gICAgICByZXR1cm4gZWxlbWVudC5jaGFuZ2VkVG91Y2hlc1tpXVxuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cblxuZnVuY3Rpb24gcHJldmVudERvdWJsZUluaXQoZHJhZ2dhYmxlKSB7XG4gIGNvbnN0IG1lc3NhZ2UgPSBcImZvciB0aGlzIGVsZW1lbnQgRHJhZ2VlLkRyYWdnYWJsZSBpcyBhbHJlYWR5IGV4aXN0LCBkb24ndCBjcmVhdGUgaXQgdHdpY2UgXCJcbiAgaWYgKGRyYWdnYWJsZXMuc29tZSgoZXhpc3RpbmcpID0+IGRyYWdnYWJsZS5lbGVtZW50ID09PSBleGlzdGluZy5lbGVtZW50KSkge1xuICAgIHRocm93IG1lc3NhZ2VcbiAgfVxuICBkcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxufVxuXG5mdW5jdGlvbiBhZGRUb0RlZmF1bHRTY29wZShkcmFnZ2FibGUpIHtcbiAgZGVmYXVsdFNjb3BlLmFkZERyYWdnYWJsZShkcmFnZ2FibGUpXG59XG5cbmNsYXNzIERyYWdnYWJsZSB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIG9wdGlvbnM9e30pIHtcbiAgICBjb25zdCBwYXJlbnQgPSBvcHRpb25zLnBhcmVudCB8fCBnZXREZWZhdWx0UGFyZW50KGVsZW1lbnQpXG4gICAgdGhpcy50YXJnZXRzID0gW11cbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHBhcmVudDogcGFyZW50LFxuICAgICAgYm91bmQ6IGJvdW5kVG9FbGVtZW50KHBhcmVudCwgcGFyZW50KSxcbiAgICAgIHN0YXJ0RmlsdGVyOiBmYWxzZSxcbiAgICAgIGlzQ29udGVudEJveFNpemU6IGZhbHNlLFxuICAgICAgcG9zaXRpb246IGZhbHNlXG4gICAgfSwgb3B0aW9ucylcblxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5oYW5kbGVyID09PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5oYW5kbGVyID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKG9wdGlvbnMuaGFuZGxlcikgfHwgZWxlbWVudFxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhhbmRsZXIgPSBvcHRpb25zLmhhbmRsZXIgfHwgZWxlbWVudFxuICAgIH1cblxuICAgIHRoaXMub25FbmQgPSBuZXcgRHJhZ2VlLkV2ZW50KHRoaXMsIHsgaXNSZXZlcnNlOiB0cnVlLCBpc1N0b3BPblRydWU6IHRydWUgfSlcbiAgICB0aGlzLm9uTW92ZSA9IG5ldyBEcmFnZWUuRXZlbnQodGhpcylcbiAgICB0aGlzLm9uU3RhcnQgPSBuZXcgRHJhZ2VlLkV2ZW50KHRoaXMpXG5cbiAgICB0aGlzLm9uRW5kLmFkZCgoKSA9PiB0aGlzLm1vdmUodGhpcy5wb3NpdGlvbiwgMCwgdHJ1ZSwgdHJ1ZSkpXG5cbiAgICBpZiAob3B0aW9ucy5vbkVuZCkge1xuICAgICAgdGhpcy5vbkVuZC5hZGQob3B0aW9ucy5vbkVuZClcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMub25Nb3ZlKSB7XG4gICAgICB0aGlzLm9uTW92ZS5hZGQob3B0aW9ucy5vbk1vdmUpXG4gICAgfVxuICAgIGlmIChvcHRpb25zLm9uU3RhcnQpIHtcbiAgICAgIHRoaXMub25TdGFydC5hZGQob3B0aW9ucy5vblN0YXJ0KVxuICAgIH1cbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG4gICAgdGhpcy5ib3VuZCA9IHRoaXMub3B0aW9ucy5ib3VuZFxuICAgIHByZXZlbnREb3VibGVJbml0KHRoaXMpXG4gICAgRHJhZ2dhYmxlLm9uQ3JlYXRlLmZpcmUodGhpcylcbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLl9lbmFibGUgPSB0cnVlXG4gICAgdGhpcy5vZmZzZXQgPSBHZW9tZXRyeS5nZXRPZmZzZXQodGhpcy5lbGVtZW50LCB0aGlzLm9wdGlvbnMucGFyZW50LCB0cnVlKVxuICAgIHRoaXMuZml4UG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICAgIGlmICh0aGlzLm9wdGlvbnMucG9zaXRpb24pIHtcbiAgICAgIHRoaXMuaW5pdFBvc2l0aW9uID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uXG4gICAgICB0aGlzLm1vdmUodGhpcy5pbml0UG9zaXRpb24sIDAsIHRydWUsIHRydWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5pdFBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICB9XG4gICAgdGhpcy5fZHJhZ1N0YXJ0ID0gdGhpcy5kcmFnU3RhcnQuYmluZCh0aGlzKVxuICAgIHRoaXMuX2RyYWdNb3ZlID0gdGhpcy5kcmFnTW92ZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5fZHJhZ0VuZCA9IHRoaXMuZHJhZ0VuZC5iaW5kKHRoaXMpXG5cbiAgICB0aGlzLmhhbmRsZXIuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0KVxuICAgIHRoaXMuaGFuZGxlci5hZGRFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQpXG5cbiAgICBpZiAodGhpcy5ib3VuZC5yZWZyZXNoKSB7XG4gICAgICB0aGlzLmJvdW5kLnJlZnJlc2goKVxuICAgIH1cbiAgfVxuXG4gIHJlaW5pdCgpIHtcbiAgICB0aGlzLm9mZnNldCA9IEdlb21ldHJ5LmdldE9mZnNldCh0aGlzLmVsZW1lbnQsIHRoaXMub3B0aW9ucy5wYXJlbnQsIHRydWUpXG4gICAgdGhpcy5maXhQb3NpdGlvbiA9IHRoaXMub2Zmc2V0XG4gICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMub2Zmc2V0XG4gICAgaWYgKHRoaXMub3B0aW9ucy5wb3NpdGlvbikge1xuICAgICAgdGhpcy5pbml0UG9zaXRpb24gPSB0aGlzLm9wdGlvbnMucG9zaXRpb25cbiAgICAgIHRoaXMubW92ZSh0aGlzLmluaXRQb3NpdGlvbiwgMCwgdHJ1ZSwgdHJ1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbml0UG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICAgIH1cblxuICAgIGlmICh0aGlzLmJvdW5kLnJlZnJlc2gpIHtcbiAgICAgIHRoaXMuYm91bmQucmVmcmVzaCgpXG4gICAgfVxuICB9XG5cbiAgZ2V0U2l6ZShfcmVjYWx1bGF0ZSkge1xuICAgIHJldHVybiBHZW9tZXRyeS5nZXRTaXplT2ZFbGVtZW50KHRoaXMuZWxlbWVudCwgdGhpcy5vcHRpb25zLmlzQ29udGVudEJveFNpemUpXG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5vZmZzZXQuYWRkKHRoaXMuX3RyYW5zZm9ybVBvc2l0aW9uIHx8IG5ldyBQb2ludCgwLCAwKSlcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvblxuICB9XG5cbiAgZ2V0Q2VudGVyKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLmdldFNpemUoKS5tdWx0KDAuNSkpXG4gIH1cblxuICBfc2V0VHJhbnNsYXRlKHBvaW50KSB7XG4gICAgdGhpcy5fdHJhbnNmb3JtUG9zaXRpb24gPSBwb2ludFxuXG4gICAgbGV0IHRyYW5zZm9ybSA9IHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wZXJ0eV1cbiAgICBsZXQgdHJhbnNsYXRlQ3NzID0gJyB0cmFuc2xhdGUzZCgnICsgcG9pbnQueCArICdweCwnICsgcG9pbnQueSArICdweCwgMHB4KSdcblxuICAgIGNvbnN0IHVhID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnRcbiAgICBjb25zdCBtc2llID0gdWEuaW5kZXhPZignTVNJRSAnKVxuXG4gICAgaWYgKG1zaWUpIHtcbiAgICAgIHRyYW5zbGF0ZUNzcyA9ICcgdHJhbnNsYXRlKCcgKyBwb2ludC54ICsgJ3B4LCcgKyBwb2ludC55ICsgJ3B4KSdcbiAgICAgIGlmICghL3RyYW5zbGF0ZVxcKFteKV0rXFwpLy50ZXN0KHRyYW5zZm9ybSkpIHtcbiAgICAgICAgdHJhbnNmb3JtICs9IHRyYW5zbGF0ZUNzc1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJhbnNmb3JtID0gdHJhbnNmb3JtLnJlcGxhY2UoL3RyYW5zbGF0ZVxcKFteKV0rXFwpLywgdHJhbnNsYXRlQ3NzKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIS90cmFuc2xhdGUzZFxcKFteKV0rXFwpLy50ZXN0KHRyYW5zZm9ybSkpIHtcbiAgICAgICAgdHJhbnNmb3JtICs9IHRyYW5zbGF0ZUNzc1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJhbnNmb3JtID0gdHJhbnNmb3JtLnJlcGxhY2UoL3RyYW5zbGF0ZTNkXFwoW14pXStcXCkvLCB0cmFuc2xhdGVDc3MpXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BlcnR5XSA9IHRyYW5zZm9ybVxuICB9XG5cbiAgbW92ZShwb2ludCwgdGltZT0wLCBpc0ZpeD1mYWxzZSwgaXNTaWxlbnQ9ZmFsc2UpIHtcbiAgICBwb2ludCA9IHBvaW50LmNsb25lKClcbiAgICBpZiAoaXNGaXgpIHtcbiAgICAgIHRoaXMuZml4UG9zaXRpb24gPSBwb2ludFxuICAgIH1cblxuICAgIHRoaXMuZGV0ZXJtaW5lRGlyZWN0aW9uKHBvaW50KVxuXG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvaW50XG5cbiAgICBpZiAodHJhbnNpdGlvblByb3BlcnR5KSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNpdGlvblByb3BlcnR5XSA9IHRpbWUgKyAnbXMnXG4gICAgfVxuXG4gICAgdGhpcy5fc2V0VHJhbnNsYXRlKHBvaW50LnN1Yih0aGlzLm9mZnNldCkpXG4gICAgaWYgKCFpc1NpbGVudCkge1xuICAgICAgdGhpcy5vbk1vdmUuZmlyZSgpXG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaFBvc2l0aW9uICgpIHtcbiAgICB0aGlzLnNldFBvc2l0aW9uKHRoaXMuZ2V0UG9zaXRpb24oKSlcbiAgfVxuXG4gIHNldFBvc2l0aW9uKHBvaW50KSB7XG4gICAgcG9pbnQgPSBwb2ludC5jbG9uZSgpXG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvaW50XG5cbiAgICBpZiAodHJhbnNpdGlvblByb3BlcnR5KSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNpdGlvblByb3BlcnR5XSA9ICcwbXMnXG4gICAgfVxuXG4gICAgdGhpcy5fc2V0VHJhbnNsYXRlKHBvaW50LnN1Yih0aGlzLm9mZnNldCkpXG4gIH1cblxuICBzZXRaZXJvVHJhbnNpdGlvbigpIHtcbiAgICBpZiAodHJhbnNpdGlvblByb3BlcnR5KSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNpdGlvblByb3BlcnR5XSA9ICcwbXMnXG4gICAgfVxuICB9XG5cbiAgZGV0ZXJtaW5lRGlyZWN0aW9uKHBvaW50KSB7XG4gICAgdGhpcy5sZWZ0RGlyZWN0aW9uID0gKHRoaXMucG9zaXRpb24ueCA8IHBvaW50LngpXG4gICAgdGhpcy5yaWdodERpcmVjdGlvbiA9ICh0aGlzLnBvc2l0aW9uLnggPiBwb2ludC54KVxuICAgIHRoaXMudXBEaXJlY3Rpb24gPSAodGhpcy5wb3NpdGlvbi55ID4gcG9pbnQueSlcbiAgICB0aGlzLmRvd25EaXJlY3Rpb24gPSAodGhpcy5wb3NpdGlvbi55IDwgcG9pbnQueSlcbiAgfVxuXG4gIGRyYWdTdGFydChldmVudCkge1xuICAgIHRoaXMuY3VycmVudEV2ZW50ID0gZXZlbnRcbiAgICBpZiAoIXRoaXMuX2VuYWJsZSB8fCAodGhpcy5vcHRpb25zLnN0YXJ0RmlsdGVyICYmICF0aGlzLm9wdGlvbnMuc3RhcnRGaWx0ZXIoZXZlbnQpKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaXNUb3VjaEV2ZW50ID0gKGlzVG91Y2ggJiYgKGV2ZW50IGluc3RhbmNlb2Ygd2luZG93LlRvdWNoRXZlbnQpKVxuXG4gICAgdGhpcy5fc3RhcnRUb3VjaFBvaW50ID0gbmV3IFBvaW50KGlzVG91Y2hFdmVudCA/IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYIDogZXZlbnQuY2xpZW50WCwgaXNUb3VjaEV2ZW50ID8gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVkgOiBldmVudC5jbGllbnRZKVxuXG4gICAgdGhpcy5fc3RhcnRQb3NpdGlvbiA9IHRoaXMuZ2V0UG9zaXRpb24oKVxuICAgIGlmIChpc1RvdWNoRXZlbnQpIHtcbiAgICAgIHRoaXMuX3RvdWNoSWQgPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5pZGVudGlmaWVyXG4gICAgfVxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgaWYgKCEoZXZlbnQudGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJbnB1dEVsZW1lbnQgfHxcbiAgICAgICAgICBldmVudC50YXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElucHV0RWxlbWVudCkpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB9IGVsc2Uge1xuICAgICAgZXZlbnQudGFyZ2V0LmZvY3VzKClcbiAgICB9XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcblxuICAgIHRoaXMuaXNEcmFnZ2luZyA9IHRydWVcblxuICAgIHRoaXMub25TdGFydC5maXJlKGV2ZW50KVxuICAgIGFkZENsYXNzKHRoaXMuZWxlbWVudCwgJ2FjdGl2ZScpXG4gICAgdGhpcy5vbk1vdmUuZmlyZShldmVudClcbiAgfVxuXG4gIGRyYWdNb3ZlKGV2ZW50KSB7XG4gICAgdGhpcy5jdXJyZW50RXZlbnQgPSBldmVudFxuICAgIGxldCB0b3VjaFxuXG4gICAgY29uc3QgaXNUb3VjaEV2ZW50ID0gKGlzVG91Y2ggJiYgKGV2ZW50IGluc3RhbmNlb2Ygd2luZG93LlRvdWNoRXZlbnQpKVxuICAgIGlmIChpc1RvdWNoRXZlbnQpIHtcbiAgICAgIHRvdWNoID0gZ2V0VG91Y2hCeUlEKGV2ZW50LCB0aGlzLl90b3VjaElkKVxuXG4gICAgICBpZiAoIXRvdWNoKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IHRvdWNoUG9pbnQgPSBuZXcgUG9pbnQoaXNUb3VjaEV2ZW50ID8gdG91Y2gucGFnZVggOiBldmVudC5jbGllbnRYLCBpc1RvdWNoRXZlbnQgPyB0b3VjaC5wYWdlWSA6IGV2ZW50LmNsaWVudFkpXG4gICAgbGV0IHBvaW50ID0gdGhpcy5fc3RhcnRQb3NpdGlvbi5hZGQodG91Y2hQb2ludC5zdWIodGhpcy5fc3RhcnRUb3VjaFBvaW50KSlcbiAgICBwb2ludCA9IHRoaXMuYm91bmQocG9pbnQsIHRoaXMuZ2V0U2l6ZSgpKVxuICAgIHRoaXMudG91Y2hQb2ludCA9IHRvdWNoUG9pbnRcbiAgICB0aGlzLm1vdmUocG9pbnQsIDApXG4gIH1cblxuICBkcmFnRW5kKGV2ZW50KSB7XG4gICAgY29uc3QgaXNUb3VjaEV2ZW50ID0gKGlzVG91Y2ggJiYgKGV2ZW50IGluc3RhbmNlb2Ygd2luZG93LlRvdWNoRXZlbnQpKVxuXG4gICAgaWYgKGlzVG91Y2hFdmVudCAmJiAhZ2V0VG91Y2hCeUlEKGV2ZW50LCB0aGlzLl90b3VjaElkKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhpcy5vbkVuZC5maXJlKGV2ZW50KVxuXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG5cbiAgICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZVxuICAgIHJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudCwgJ2FjdGl2ZScpXG4gIH1cblxuICBnZXRSZWN0YW5nbGUoKSB7XG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUodGhpcy5wb3NpdGlvbiwgdGhpcy5nZXRTaXplKCkpXG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIHRoaXMuZ2V0U2l6ZSh0cnVlKVxuICAgIGlmICh0aGlzLmJvdW5kLnJlZnJlc2gpIHtcbiAgICAgIHRoaXMuYm91bmQucmVmcmVzaCgpXG4gICAgfVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmhhbmRsZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0KVxuICAgIHRoaXMuaGFuZGxlci5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuXG4gICAgdGhpcy5vbkVuZC5yZXNldCgpXG4gICAgdGhpcy5vbk1vdmUucmVzZXQoKVxuICB9XG5cbiAgZ2V0IGVuYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlXG4gIH1cblxuICBzZXQgZW5hYmxlKGVuYWJsZSkge1xuICAgIGlmIChlbmFibGUpIHtcbiAgICAgIHJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudCwgJ2Rpc2FibGUnKVxuICAgIH0gZWxzZSB7XG4gICAgICBhZGRDbGFzcyh0aGlzLmVsZW1lbnQsICdkaXNhYmxlJylcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlID0gZW5hYmxlXG4gIH1cbn1cblxuRHJhZ2dhYmxlLm9uQ3JlYXRlID0gbmV3IERyYWdlZS5FdmVudChEcmFnZ2FibGUsIHsgaXNSZXZlcnNlOiB0cnVlLCBpc1N0b3BPblRydWU6IHRydWUgfSlcbkRyYWdnYWJsZS5vbkNyZWF0ZS5hZGQoYWRkVG9EZWZhdWx0U2NvcGUpXG5cbmV4cG9ydCB7IERyYWdnYWJsZSwgZXZlbnRzIH1cbiIsIid1c2Ugc3RyaWN0J1xuXG5mdW5jdGlvbiBFdmVudChjb250ZXh0LCBvcHRpb25zID0ge30pIHtcbiAgdGhpcy5mdW5jcyA9IFtdXG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHRcbiAgdGhpcy5pc1JldmVyc2UgPSBvcHRpb25zLmlzUmV2ZXJzZSB8fCBmYWxzZVxuICB0aGlzLmlzU3RvcE9uVHJ1ZSA9IG9wdGlvbnMuaXNTdG9wT25UcnVlIHx8IGZhbHNlXG59XG5cbkV2ZW50LnByb3RvdHlwZS5maXJlID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cylcbiAgY29uc3QgZnMgPSB0aGlzLmlzUmV2ZXJzZSA/IHRoaXMuZnVuY3Muc2xpY2UoKS5yZXZlcnNlKCkgOiB0aGlzLmZ1bmNzXG4gIGxldCByZXRWYWx1ZVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZnMubGVuZ3RoOyBpKyspIHtcbiAgICByZXRWYWx1ZSA9IGZzW2ldLmFwcGx5KHRoaXMuY29udGV4dCwgYXJncylcbiAgICBpZiAodGhpcy5pc1N0b3BPblRydWUgJiYgcmV0VmFsdWUpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICB9XG4gIHJldHVybiAhdGhpcy5pc1N0b3BPblRydWVcbn1cblxuRXZlbnQucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKGYpIHtcbiAgdGhpcy5mdW5jcy5wdXNoKGYpXG59XG5cbkV2ZW50LnByb3RvdHlwZS51bnNoaWZ0ID0gZnVuY3Rpb24oZikge1xuICB0aGlzLmZ1bmNzLnVuc2hpZnQoZilcbn1cblxuRXZlbnQucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKGYpIHtcbiAgY29uc3QgaW5kZXggPSB0aGlzLmZ1bmNzLmluZGV4T2YoZilcbiAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgIHRoaXMuZnVuY3Muc3BsaWNlKGluZGV4LCAxKVxuICB9XG59XG5cbkV2ZW50LnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uKF9mKSB7XG4gIHRoaXMuZnVuY3MgPSBbXVxufVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudFxuIiwiY2xhc3MgUG9pbnQge1xuICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgdGhpcy54ID0geFxuICAgIHRoaXMueSA9IHlcbiAgfVxuXG4gIGFkZChwKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnggKyBwLngsIHRoaXMueSArIHAueSlcbiAgfVxuXG4gIHN1YihwKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnggLSBwLngsIHRoaXMueSAtIHAueSlcbiAgfVxuXG4gIG11bHQoaykge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54ICogaywgdGhpcy55ICogaylcbiAgfVxuXG4gIG5lZ2F0aXZlKCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQoLXRoaXMueCwgLXRoaXMueSlcbiAgfVxuXG4gIGNvbXBhcmUocCkge1xuICAgIHJldHVybiAodGhpcy54ID09PSBwLnggJiYgdGhpcy55ID09PSBwLnkpXG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCwgdGhpcy55KVxuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIGB7eD0ke3RoaXMueH0seT0ke3RoaXMueX1gXG4gIH1cbn1cblxuY2xhc3MgUmVjdGFuZ2xlIHtcbiAgY29uc3RydWN0b3IocG9zaXRpb24sIHNpemUpIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb25cbiAgICB0aGlzLnNpemUgPSBzaXplXG4gIH1cblxuICBnZXRQMSgpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvblxuICB9XG5cbiAgZ2V0UDIoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnNpemUueCwgdGhpcy5wb3NpdGlvbi55KVxuICB9XG5cbiAgZ2V0UDMoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb24uYWRkKHRoaXMuc2l6ZSlcbiAgfVxuXG4gIGdldFA0KCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSlcbiAgfVxuXG4gIGdldENlbnRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi5hZGQodGhpcy5zaXplLm11bHQoMC41KSlcbiAgfVxuXG4gIG9yKHJlY3QpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IG5ldyBQb2ludChNYXRoLm1pbih0aGlzLnBvc2l0aW9uLngsIHJlY3QucG9zaXRpb24ueCksIE1hdGgubWluKHRoaXMucG9zaXRpb24ueSwgcmVjdC5wb3NpdGlvbi55KSlcbiAgICBjb25zdCBzaXplID0gKG5ldyBQb2ludChNYXRoLm1heCh0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnNpemUueCwgcmVjdC5wb3NpdGlvbi54ICsgcmVjdC5zaXplLngpLCBNYXRoLm1heCh0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSwgcmVjdC5wb3NpdGlvbi55ICsgcmVjdC5zaXplLnkpKSkuc3ViKHBvc2l0aW9uKVxuICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHBvc2l0aW9uLCBzaXplKVxuICB9XG5cbiAgYW5kKHJlY3QpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IG5ldyBQb2ludChNYXRoLm1heCh0aGlzLnBvc2l0aW9uLngsIHJlY3QucG9zaXRpb24ueCksIE1hdGgubWF4KHRoaXMucG9zaXRpb24ueSwgcmVjdC5wb3NpdGlvbi55KSlcbiAgICBjb25zdCBzaXplID0gKG5ldyBQb2ludChNYXRoLm1pbih0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnNpemUueCwgcmVjdC5wb3NpdGlvbi54ICsgcmVjdC5zaXplLngpLCBNYXRoLm1pbih0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSwgcmVjdC5wb3NpdGlvbi55ICsgcmVjdC5zaXplLnkpKSkuc3ViKHBvc2l0aW9uKVxuICAgIGlmIChzaXplLnggPD0gMCB8fCBzaXplLnkgPD0gMCkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUocG9zaXRpb24sIHNpemUpXG4gIH1cblxuICBpbmNsdWRlUG9pbnQocCkge1xuICAgIHJldHVybiAhKHRoaXMucG9zaXRpb24ueCA+IHAueCB8fCB0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnNpemUueCA8IHAueCB8fCB0aGlzLnBvc2l0aW9uLnkgPiBwLnkgfHwgdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnkgPCBwLnkpXG4gIH1cblxuICBpbmNsdWRlUmVjdGFuZ2xlKHJlY3RhbmdsZSkge1xuICAgIHJldHVybiB0aGlzLmluY2x1ZGVQb2ludChyZWN0YW5nbGUucG9zaXRpb24pICYmIHRoaXMuaW5jbHVkZVBvaW50KHJlY3RhbmdsZS5nZXRQMygpKVxuICB9XG5cbiAgbW92ZVRvQm91bmQocmVjdCwgYXhpcykge1xuICAgIGxldCBzZWxBeGlzLCBjcm9zc1JlY3RhbmdsZVxuICAgIGlmIChheGlzKSB7XG4gICAgICBzZWxBeGlzID0gYXhpc1xuICAgIH0gZWxzZSB7XG4gICAgICBjcm9zc1JlY3RhbmdsZSA9IHRoaXMuYW5kKHJlY3QpXG4gICAgICBpZiAoIWNyb3NzUmVjdGFuZ2xlKSB7XG4gICAgICAgIHJldHVybiByZWN0XG4gICAgICB9XG4gICAgICBzZWxBeGlzID0gY3Jvc3NSZWN0YW5nbGUuc2l6ZS54ID4gY3Jvc3NSZWN0YW5nbGUuc2l6ZS55ID8gJ3knIDogJ3gnXG4gICAgfVxuICAgIGNvbnN0IHRoaXNDZW50ZXIgPSB0aGlzLmdldENlbnRlcigpXG4gICAgY29uc3QgcmVjdENlbnRlciA9IHJlY3QuZ2V0Q2VudGVyKClcbiAgICBjb25zdCBzaWduID0gdGhpc0NlbnRlcltzZWxBeGlzXSA+IHJlY3RDZW50ZXJbc2VsQXhpc10gPyAtMSA6IDFcbiAgICBjb25zdCBvZmZzZXQgPSBzaWduID4gMCA/IHRoaXMucG9zaXRpb25bc2VsQXhpc10gKyB0aGlzLnNpemVbc2VsQXhpc10gLSByZWN0LnBvc2l0aW9uW3NlbEF4aXNdIDogdGhpcy5wb3NpdGlvbltzZWxBeGlzXSAtIChyZWN0LnBvc2l0aW9uW3NlbEF4aXNdICsgcmVjdC5zaXplW3NlbEF4aXNdKVxuICAgIHJlY3QucG9zaXRpb25bc2VsQXhpc10gPSByZWN0LnBvc2l0aW9uW3NlbEF4aXNdICsgb2Zmc2V0XG4gICAgcmV0dXJuIHJlY3RcbiAgfVxuXG4gIGdldFNxdWFyZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zaXplLnggKiB0aGlzLnNpemUueVxuICB9XG5cbiAgc3R5bGVBcHBseShlbCkge1xuICAgIGVsID0gZWwgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5kJylcbiAgICBlbC5zdHlsZS5sZWZ0ID0gdGhpcy5wb3NpdGlvbi54ICsgJ3B4J1xuICAgIGVsLnN0eWxlLnRvcCA9IHRoaXMucG9zaXRpb24ueSArICdweCdcbiAgICBlbC5zdHlsZS53aWR0aCA9IHRoaXMuc2l6ZS54ICsgJ3B4J1xuICAgIGVsLnN0eWxlLmhlaWdodCA9IHRoaXMuc2l6ZS55ICsgJ3B4J1xuICB9XG5cbiAgZ3Jvd3RoKHNpemUpIHtcbiAgICB0aGlzLnNpemUgPSB0aGlzLnNpemUuYWRkKHNpemUpXG4gICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMucG9zaXRpb24uYWRkKHNpemUubXVsdCgtMC41KSlcbiAgfVxuXG4gIGdldE1pblNpZGUoKSB7XG4gICAgcmV0dXJuIE1hdGgubWluKHRoaXMuc2l6ZS54LCB0aGlzLnNpemUueSlcbiAgfVxufVxuXG4vKioqKioqKioqKioqKioqKiovXG5jb25zdCBHZW9tZXRyeSA9IHtcbiAgZ2V0RGlzdGFuY2UocDEsIHAyKSB7XG4gICAgY29uc3QgZHggPSBwMS54IC0gcDIueCwgZHkgPSBwMS55IC0gcDIueVxuICAgIHJldHVybiBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpXG4gIH0sXG4gIGRpc3RhbmNlKHAxLCBwMikge1xuICAgIHJldHVybiBHZW9tZXRyeS5nZXREaXN0YW5jZShwMSwgcDIpXG4gIH0sXG4gIGdldFhEaWZmZXJlbmNlKHAxLCBwMikge1xuICAgIHJldHVybiBNYXRoLmFicyhwMS54IC0gcDIueClcbiAgfSxcbiAgZ2V0WURpZmZlcmVuY2UocDEsIHAyKSB7XG4gICAgcmV0dXJuIE1hdGguYWJzKHAxLnkgLSBwMi55KVxuICB9LFxuICB0cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5KG9wdGlvbnMpIHtcbiAgICByZXR1cm4gKHAxLCBwMikgPT4ge1xuICAgICAgcmV0dXJuIE1hdGguc3FydChcbiAgICAgICAgTWF0aC5wb3cob3B0aW9ucy54ICogTWF0aC5hYnMocDEueCAtIHAyLngpLCAyKSArXG4gICAgICAgIE1hdGgucG93KG9wdGlvbnMueSAqIE1hdGguYWJzKHAxLnkgLSBwMi55KSwgMilcbiAgICAgIClcbiAgICB9XG4gIH0sXG4gIGluZGV4T2ZOZWFyZXN0UG9pbnQoYXJyLCB2YWwsIHJhZGl1cywgZ2V0RGlzdGFuY2UpIHtcbiAgICBsZXQgc2l6ZSwgaW5kZXggPSAwLCBpLCB0ZW1wXG4gICAgZ2V0RGlzdGFuY2UgPSBnZXREaXN0YW5jZSB8fCBHZW9tZXRyeS5nZXREaXN0YW5jZVxuICAgIGlmIChhcnIubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gLTFcbiAgICB9XG4gICAgc2l6ZSA9IGdldERpc3RhbmNlKGFyclswXSwgdmFsKVxuICAgIGZvciAoaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRlbXAgPSBnZXREaXN0YW5jZShhcnJbaV0sIHZhbClcbiAgICAgIGlmICh0ZW1wIDwgc2l6ZSkge1xuICAgICAgICBzaXplID0gdGVtcFxuICAgICAgICBpbmRleCA9IGlcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHJhZGl1cyA+PSAwICYmIHNpemUgPiByYWRpdXMpIHtcbiAgICAgIHJldHVybiAtMVxuICAgIH1cbiAgICByZXR1cm4gaW5kZXhcbiAgfSxcbiAgYm91bmQobWluLCBtYXgsIHZhbCkge1xuICAgIHJldHVybiBNYXRoLm1heChtaW4sIE1hdGgubWluKG1heCwgdmFsKSlcbiAgfSxcbiAgYm91bmRQb2ludChtaW4sIG1heCwgdmFsKSB7XG4gICAgY29uc3QgeCA9IE1hdGgubWF4KG1pbi54LCBNYXRoLm1pbihtYXgueCwgdmFsLngpKVxuICAgIGNvbnN0IHkgPSBNYXRoLm1heChtaW4ueSwgTWF0aC5taW4obWF4LnksIHZhbC55KSlcbiAgICByZXR1cm4gbmV3IFBvaW50KHgsIHkpXG4gIH0sXG4gICAgLy9SZXR1cm4gY3Jvc3NpbmcgcG9pbnQgb2YgdHdvIGxpbmVzXG4gIGRpcmVjdENyb3NzaW5nKEwxUDEsIEwxUDIsIEwyUDEsIEwyUDIpIHtcbiAgICBsZXQgdGVtcCwgazEsIGsyLCBiMSwgYjIsIHgsIHlcbiAgICBpZiAoTDJQMS54ID09PSBMMlAyLngpIHtcbiAgICAgIHRlbXAgPSBMMlAxXG4gICAgICBMMlAxID0gTDFQMVxuICAgICAgTDFQMSA9IHRlbXBcbiAgICAgIHRlbXAgPSBMMlAyXG4gICAgICBMMlAyID0gTDFQMlxuICAgICAgTDFQMiA9IHRlbXBcbiAgICB9XG4gICAgaWYgKEwxUDEueCA9PT0gTDFQMi54KSB7XG4gICAgICBrMiA9IChMMlAyLnkgLSBMMlAxLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICAgIGIyID0gKEwyUDIueCAqIEwyUDEueSAtIEwyUDEueCAqIEwyUDIueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgICAgeCA9IEwxUDEueFxuICAgICAgeSA9IHggKiBrMiArIGIyXG4gICAgICByZXR1cm4gbmV3IFBvaW50KHgsIHkpXG4gICAgfSBlbHNlIHtcbiAgICAgIGsxID0gKEwxUDIueSAtIEwxUDEueSkgLyAoTDFQMi54IC0gTDFQMS54KVxuICAgICAgYjEgPSAoTDFQMi54ICogTDFQMS55IC0gTDFQMS54ICogTDFQMi55KSAvIChMMVAyLnggLSBMMVAxLngpXG4gICAgICBrMiA9IChMMlAyLnkgLSBMMlAxLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICAgIGIyID0gKEwyUDIueCAqIEwyUDEueSAtIEwyUDEueCAqIEwyUDIueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgICAgeCA9IChiMSAtIGIyKSAvIChrMiAtIGsxKVxuICAgICAgeSA9IHggKiBrMSArIGIxXG4gICAgICByZXR1cm4gbmV3IFBvaW50KHgsIHkpXG4gICAgfVxuICB9LFxuICBib3VuZFRvU2VnbWVudChMUDEsIExQMiwgUCkge1xuICAgIGxldCB4LCB5XG4gICAgeCA9IEdlb21ldHJ5LmJvdW5kKE1hdGgubWluKExQMS54LCBMUDIueCksIE1hdGgubWF4KExQMS54LCBMUDIueCksIFAueClcbiAgICBpZiAoeCAhPT0gUC54KSB7XG4gICAgICB5ID0gKHggPT09IExQMS54KSA/IExQMS55IDogTFAyLnlcbiAgICAgIFAgPSBuZXcgUG9pbnQoeCwgeSlcbiAgICB9XG5cbiAgICB5ID0gR2VvbWV0cnkuYm91bmQoTWF0aC5taW4oTFAxLnksIExQMi55KSwgTWF0aC5tYXgoTFAxLnksIExQMi55KSwgUC55KVxuICAgIGlmICh5ICE9PSBQLnkpIHtcbiAgICAgIHggPSAoeSA9PT0gTFAxLnkpID8gTFAxLnggOiBMUDIueFxuICAgICAgUCA9IG5ldyBQb2ludCh4LCB5KVxuICAgIH1cblxuICAgIHJldHVybiBQXG4gIH0sXG4gIGJvdW5kVG9MaW5lKEEsIEIsIFApIHtcbiAgICBjb25zdCBBUCA9IG5ldyBQb2ludChQLnggLSBBLngsIFAueSAtIEEueSksXG4gICAgICBBQiA9IG5ldyBQb2ludChCLnggLSBBLngsIEIueSAtIEEueSksXG4gICAgICBhYjIgPSBBQi54ICogQUIueCArIEFCLnkgKiBBQi55LFxuICAgICAgYXBfYWIgPSBBUC54ICogQUIueCArIEFQLnkgKiBBQi55LFxuICAgICAgdCA9IGFwX2FiIC8gYWIyXG4gICAgcmV0dXJuIG5ldyBQb2ludChBLnggKyBBQi54ICogdCwgQS55ICsgQUIueSAqIHQpXG4gIH0sXG4gIGdldFBvaW50SW5MaW5lKExQMSwgTFAyLCBwZXJjZW50KSB7XG4gICAgY29uc3QgZHggPSBMUDIueCAtIExQMS54LCBkeSA9IExQMi55IC0gTFAxLnlcbiAgICByZXR1cm4gbmV3IFBvaW50KExQMS54ICsgcGVyY2VudCAqIGR4LCBMUDEueSArIHBlcmNlbnQgKiBkeSlcbiAgfSxcbiAgZ2V0UG9pbnRJbkxpbmVCeUxlbmdodChMUDEsIExQMiwgbGVuZ2h0KSB7XG4gICAgY29uc3QgZHggPSBMUDIueCAtIExQMS54LCBkeSA9IExQMi55IC0gTFAxLnksIHBlcmNlbnQgPSBsZW5naHQgLyBHZW9tZXRyeS5kaXN0YW5jZShMUDEsIExQMilcbiAgICByZXR1cm4gbmV3IFBvaW50KExQMS54ICsgcGVyY2VudCAqIGR4LCBMUDEueSArIHBlcmNlbnQgKiBkeSlcbiAgfSxcbiAgY3JlYXRlUmVjdGFuZ2xlRnJvbUVsZW1lbnQoZWwsIHBhcmVudCwgaXNDb250ZW50Qm94U2l6ZSwgaXNDb25zaWRlclRyYW5zbGF0ZSkge1xuICAgIGNvbnN0IHNpemUgPSB0aGlzLmdldFNpemVPZkVsZW1lbnQoZWwsIGlzQ29udGVudEJveFNpemUpXG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUodGhpcy5nZXRPZmZzZXQoZWwsIHBhcmVudCB8fCBlbC5wYXJlbnROb2RlLCBpc0NvbnNpZGVyVHJhbnNsYXRlKSwgc2l6ZSlcbiAgfSxcbiAgZ2V0U3VtVmFsdWVPZlN0eWxlUnVsZShlbGVtZW50LCBydWxlcykge1xuICAgIHJldHVybiBydWxlcy5yZWR1Y2UoKHN1bSwgcnVsZSkgPT4ge1xuICAgICAgcmV0dXJuIHN1bSArIHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpW3J1bGVdfHwwKVxuICAgIH0sIDApXG4gIH0sXG4gIGdldFNpemVPZkVsZW1lbnQoZWwsIGlzQ29udGVudEJveFNpemUpIHtcbiAgICBsZXQgd2lkdGggPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbClbJ3dpZHRoJ10pLCBoZWlnaHQgPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbClbJ2hlaWdodCddKVxuICAgIGlmICghaXNDb250ZW50Qm94U2l6ZSkge1xuICAgICAgd2lkdGggKz0gdGhpcy5nZXRTdW1WYWx1ZU9mU3R5bGVSdWxlKGVsLCBbJ3BhZGRpbmctbGVmdCcsICdwYWRkaW5nLXJpZ2h0JywgJ2JvcmRlci1sZWZ0LXdpZHRoJywgJ2JvcmRlci1yaWdodC13aWR0aCddKVxuICAgICAgaGVpZ2h0ICs9IHRoaXMuZ2V0U3VtVmFsdWVPZlN0eWxlUnVsZShlbCwgWydwYWRkaW5nLXRvcCcsICdwYWRkaW5nLWJvdHRvbScsICdib3JkZXItdG9wLXdpZHRoJywgJ2JvcmRlci1ib3R0b20td2lkdGgnXSlcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBQb2ludCh3aWR0aCwgaGVpZ2h0KVxuICB9LFxuICBnZXRPZmZzZXQoZWwsIHBhcmVudCkge1xuICAgIGNvbnN0IGVsUmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLCBwYXJlbnRSZWN0ID0gcGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgcmV0dXJuIG5ldyBQb2ludChlbFJlY3QubGVmdCAtIHBhcmVudFJlY3QubGVmdCwgZWxSZWN0LnRvcCAtIHBhcmVudFJlY3QudG9wKVxuICB9LFxuICBnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oYW5nbGUsIGxlbmd0aCwgY2VudGVyKSB7XG4gICAgY2VudGVyID0gY2VudGVyIHx8IG5ldyBQb2ludCgwLCAwKVxuICAgIHJldHVybiBjZW50ZXIuYWRkKG5ldyBQb2ludChsZW5ndGggKiBNYXRoLmNvcyhhbmdsZSksIGxlbmd0aCAqIE1hdGguc2luKGFuZ2xlKSkpXG4gIH0sXG4gIGFkZFBvaW50VG9Cb3VuZFBvaW50cyhib3VuZHBvaW50cywgcG9pbnQsIGlzUmlnaHQpIHtcbiAgICBjb25zdCByZXN1bHQgPSBib3VuZHBvaW50cy5maWx0ZXIoZnVuY3Rpb24oYlBvaW50KSB7XG4gICAgICByZXR1cm4gIGJQb2ludC55ID4gcG9pbnQueSB8fCAoaXNSaWdodCA/IGJQb2ludC54IDwgcG9pbnQueCA6IGJQb2ludC54ID4gcG9pbnQueClcbiAgICB9KVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChwb2ludC55IDwgcmVzdWx0W2ldLnkpIHtcbiAgICAgICAgcmVzdWx0LnNwbGljZShpLCAwLCBwb2ludClcbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgICAgfVxuICAgIH1cbiAgICByZXN1bHQucHVzaChwb2ludClcbiAgICByZXR1cm4gcmVzdWx0XG4gIH0sXG4gIGdldEFuZ2xlKHAxLCBwMikge1xuICAgIGNvbnN0IGRpZmYgPSBwMi5zdWIocDEpXG4gICAgcmV0dXJuIHRoaXMubm9ybWFsaXplQW5nbGUoTWF0aC5hdGFuMihkaWZmLnksIGRpZmYueCkpXG4gIH0sXG4gIHRvUmFkaWFuKGFuZ2xlKSB7XG4gICAgcmV0dXJuICgoYW5nbGUgJSAzNjApICogTWF0aC5QSSAvIDE4MClcbiAgfSxcbiAgdG9EZWdyZWUoYW5nbGUpIHtcbiAgICByZXR1cm4gKGFuZ2xlICogMTgwIC8gTWF0aC5QSSkgJSAzNjBcbiAgfSxcbiAgYm91bmRBbmdsZShtaW4sIG1heCwgdmFsKSB7XG4gICAgbGV0IGRtaW4sIGRtYXhcbiAgICBpZiAobWluIDwgbWF4ICYmIHZhbCA+IG1pbiAmJiB2YWwgPCBtYXgpIHtcbiAgICAgIHJldHVybiB2YWxcbiAgICB9IGVsc2UgaWYgKG1heCA8IG1pbiAmJiAodmFsIDwgbWF4IHx8IHZhbCA+IG1pbikpIHtcbiAgICAgIHJldHVybiB2YWxcbiAgICB9IGVsc2Uge1xuICAgICAgZG1pbiA9IHRoaXMuZ2V0QW5nbGVEaWZmKG1pbiwgdmFsKVxuICAgICAgZG1heCA9IHRoaXMuZ2V0QW5nbGVEaWZmKG1heCwgdmFsKVxuICAgICAgaWYgKGRtaW4gPCBkbWF4KSB7XG4gICAgICAgIHJldHVybiBtaW5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBtYXhcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGdldE5lYXJlc3RBbmdsZShhcnIsIGFuZ2xlKSB7XG4gICAgbGV0IGksIHRlbXAsIGRpZmYgPSBNYXRoLlBJICogMiwgdmFsdWVcbiAgICBmb3IgKGkgPSAwOyBpIDwgYXJyLmxlbmd0aDtpKyspIHtcbiAgICAgIHRlbXAgPSBHZW9tZXRyeS5nZXRBbmdsZURpZmYoYXJyW2ldLCBhbmdsZSlcbiAgICAgIGlmIChkaWZmIDwgdGVtcCkge1xuICAgICAgICBkaWZmID0gdGVtcFxuICAgICAgICB2YWx1ZSA9IGFycltpXVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdmFsdWVcbiAgfSxcbiAgZ2V0QW5nbGVEaWZmKGFscGhhLCBiZXRhKSB7XG4gICAgY29uc3QgbWluQW5nbGUgPSBNYXRoLm1pbihhbHBoYSwgYmV0YSksXG4gICAgICBtYXhBbmdsZSA9ICBNYXRoLm1heChhbHBoYSwgYmV0YSlcbiAgICByZXR1cm4gTWF0aC5taW4obWF4QW5nbGUgLSBtaW5BbmdsZSwgbWluQW5nbGUgKyBNYXRoLlBJKjIgLSBtYXhBbmdsZSlcbiAgfSxcbiAgbm9ybWFsaXplQW5nbGUodmFsKSB7XG4gICAgd2hpbGUgKHZhbCA8IDApIHtcbiAgICAgIHZhbCArPSAyICogTWF0aC5QSVxuICAgIH1cbiAgICB3aGlsZSAodmFsID4gMiAqIE1hdGguUEkpIHtcbiAgICAgIHZhbCAtPSAyICogTWF0aC5QSVxuICAgIH1cbiAgICByZXR1cm4gdmFsXG4gIH1cbn1cblxuZXhwb3J0IHsgUG9pbnQsIFJlY3RhbmdsZSwgR2VvbWV0cnkgfVxuIiwiaW1wb3J0IHJlbW92ZUl0ZW1zIGZyb20gJ3JlbW92ZS1hcnJheS1pdGVtcydcbmltcG9ydCBFdmVudCBmcm9tICcuL2V2ZW50J1xuaW1wb3J0IHsgR2VvbWV0cnkgfSBmcm9tICcuL2dlb21ldHJ5J1xuaW1wb3J0IHsgRHJhZ2dhYmxlIH0gZnJvbSAnLi9kcmFnZ2FibGUnXG5cbmNvbnN0IERyYWdlZSA9IHsgRXZlbnQgfSAvL3RvZG8gcmVtb3ZlIGFmdGVyIHJlZmFjdG9yZVxuXG5jbGFzcyBMaXN0IHtcbiAgY29uc3RydWN0b3IoZHJhZ2dhYmxlcywgb3B0aW9ucz17fSkge1xuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgdGltZUVuZDogMjAwLFxuICAgICAgdGltZUV4Y2FuZ2U6IDQwMCxcbiAgICAgIHJhZGl1czogMzAsXG4gICAgICBnZXREaXN0YW5jZTogR2VvbWV0cnkuZ2V0RGlzdGFuY2UsXG4gICAgICBpc0Rpc3BsYWNlbWVudDogZmFsc2UsXG4gICAgICBpc1NvcnRhYmxlOiB0cnVlXG4gICAgfSwgb3B0aW9ucylcblxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZXNcbiAgICB0aGlzLm9uQ2hhbmdlID0gbmV3IERyYWdlZS5FdmVudCh0aGlzKVxuICAgIGlmIChvcHRpb25zLm9uQ2hhbmdlKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlLmFkZChvcHRpb25zLm9uQ2hhbmdlKVxuICAgIH1cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLl9lbmFibGUgPSB0cnVlXG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2godGhpcy5pbml0RHJhZ2dhYmxlLCB0aGlzKVxuICB9XG5cbiAgaW5pdERyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICBsZXQgbW92ZUhhbmRsZXJcbiAgICBjb25zdCBsaXN0ID0gdGhpc1xuXG4gICAgZHJhZ2dhYmxlLmVuYWJsZSA9IHRoaXMuX2VuYWJsZVxuICAgIGlmICh0aGlzLm9wdGlvbnMuaXNEaXNwbGFjZW1lbnQpIHtcbiAgICAgIG1vdmVIYW5kbGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChkcmFnZ2FibGUuaXNEcmFnZ2luZykge1xuICAgICAgICAgIGxpc3Qub25TdGFydChkcmFnZ2FibGUpXG4gICAgICAgICAgZHJhZ2dhYmxlLm9uTW92ZS5yZW1vdmUobW92ZUhhbmRsZXIpXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBkcmFnZ2FibGUub25FbmQuYWRkKCgpID0+IHtcbiAgICAgICAgdGhpcy5vbkVuZERpc3BsYXljZW1lbnQoZHJhZ2dhYmxlKVxuICAgICAgICBkcmFnZ2FibGUub25Nb3ZlLmFkZChtb3ZlSGFuZGxlcilcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0pXG5cbiAgICAgIGRyYWdnYWJsZS5vbk1vdmUuYWRkKG1vdmVIYW5kbGVyKVxuICAgIH0gZWxzZSB7XG4gICAgICBkcmFnZ2FibGUub25FbmQuYWRkKCgpID0+IHtcbiAgICAgICAgdGhpcy5vbkVuZChkcmFnZ2FibGUpXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIG1vdmVPclNhdmUoZHJhZ2dhYmxlLCBwb3NpdGlvbiwgdGltZSkge1xuICAgIGlmIChkcmFnZ2FibGUuaXNEcmFnZ2luZykge1xuICAgICAgZHJhZ2dhYmxlLmZpeFBvc2l0aW9uID0gcG9zaXRpb25cbiAgICB9IGVsc2Uge1xuICAgICAgZHJhZ2dhYmxlLm1vdmUocG9zaXRpb24sIHRpbWUsIHRydWUpXG4gICAgfVxuICB9XG5cbiAgb25FbmQoZHJhZ2dhYmxlKSB7XG4gICAgY29uc3QgZml4UG9zaXRpb25zID0gdGhpcy5nZXRDdXJyZW50Rml4UG9zaXRpb24oKVxuICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IHRoaXMuZHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSlcbiAgICBjb25zdCBleGNhbmdlSW5kZXggPSBHZW9tZXRyeS5pbmRleE9mTmVhcmVzdFBvaW50KGZpeFBvc2l0aW9ucywgZHJhZ2dhYmxlLnBvc2l0aW9uLCB0aGlzLm9wdGlvbnMucmFkaXVzLCB0aGlzLm9wdGlvbnMuZ2V0RGlzdGFuY2UpXG5cbiAgICBpZiAoZXhjYW5nZUluZGV4ID09PSAtMSB8fCBleGNhbmdlSW5kZXggPT09IGN1cnJlbnRJbmRleCkge1xuICAgICAgZHJhZ2dhYmxlLm1vdmUoZHJhZ2dhYmxlLmZpeFBvc2l0aW9uLCB0aGlzLm9wdGlvbnMudGltZUVuZCwgdHJ1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tb3ZlT3JTYXZlKHRoaXMuZHJhZ2dhYmxlc1tleGNhbmdlSW5kZXhdLCBmaXhQb3NpdGlvbnNbY3VycmVudEluZGV4XSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgdGhpcy5kcmFnZ2FibGVzW2N1cnJlbnRJbmRleF0ubW92ZShmaXhQb3NpdGlvbnNbZXhjYW5nZUluZGV4XSwgdGhpcy5vcHRpb25zLnRpbWVFbmQsIHRydWUpXG4gICAgICB0aGlzLm9uQ2hhbmdlLmZpcmUoKVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgc29ydElmUG9zc2libGUoZHJhZ2dhYmxlKSB7XG4gICAgY29uc3QgZml4UG9zaXRpb24gPSBkcmFnZ2FibGUuZml4UG9zaXRpb25cbiAgICBjb25zdCBjdXJyZW50SW5kZXggPSB0aGlzLmRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpXG4gICAgY29uc3QgbmV4dERyYWdnYWJsZSA9IHRoaXMuZHJhZ2dhYmxlc1tjdXJyZW50SW5kZXggKyAxXVxuICAgIGNvbnN0IHByZXZEcmFnZ2FibGUgPSB0aGlzLmRyYWdnYWJsZXNbY3VycmVudEluZGV4IC0gMV1cblxuICAgIGlmIChkcmFnZ2FibGUuZG93bkRpcmVjdGlvbiAmJiBuZXh0RHJhZ2dhYmxlKSB7XG4gICAgICBjb25zdCBkaXN0YW5jZSA9IHRoaXMub3B0aW9ucy5nZXREaXN0YW5jZShkcmFnZ2FibGUucG9zaXRpb24sIG5leHREcmFnZ2FibGUucG9zaXRpb24pXG4gICAgICBpZiAoZGlzdGFuY2UgPCB0aGlzLm9wdGlvbnMucmFkaXVzKSB7XG4gICAgICAgIGRyYWdnYWJsZS5maXhQb3NpdGlvbiA9IG5leHREcmFnZ2FibGUuZml4UG9zaXRpb25cbiAgICAgICAgdGhpcy5tb3ZlT3JTYXZlKG5leHREcmFnZ2FibGUsIGZpeFBvc2l0aW9uLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpO1xuICAgICAgICBbdGhpcy5kcmFnZ2FibGVzW2N1cnJlbnRJbmRleF0sIHRoaXMuZHJhZ2dhYmxlc1tjdXJyZW50SW5kZXggKyAxXV0gPSBbdGhpcy5kcmFnZ2FibGVzW2N1cnJlbnRJbmRleCArIDFdLCB0aGlzLmRyYWdnYWJsZXNbY3VycmVudEluZGV4XV1cbiAgICAgICAgdGhpcy5zb3J0SWZQb3NzaWJsZShkcmFnZ2FibGUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGRyYWdnYWJsZS51cERpcmVjdGlvbiAmJiBwcmV2RHJhZ2dhYmxlKSB7XG4gICAgICBjb25zdCBkaXN0YW5jZSA9IHRoaXMub3B0aW9ucy5nZXREaXN0YW5jZShkcmFnZ2FibGUucG9zaXRpb24sIHByZXZEcmFnZ2FibGUucG9zaXRpb24pXG4gICAgICBpZiAoZGlzdGFuY2UgPCB0aGlzLm9wdGlvbnMucmFkaXVzKSB7XG4gICAgICAgIGRyYWdnYWJsZS5maXhQb3NpdGlvbiA9IHByZXZEcmFnZ2FibGUuZml4UG9zaXRpb25cbiAgICAgICAgdGhpcy5tb3ZlT3JTYXZlKHByZXZEcmFnZ2FibGUsIGZpeFBvc2l0aW9uLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpO1xuICAgICAgICBbdGhpcy5kcmFnZ2FibGVzW2N1cnJlbnRJbmRleF0sIHRoaXMuZHJhZ2dhYmxlc1tjdXJyZW50SW5kZXggLSAxXV0gPSBbdGhpcy5kcmFnZ2FibGVzW2N1cnJlbnRJbmRleCAtIDFdLCB0aGlzLmRyYWdnYWJsZXNbY3VycmVudEluZGV4XV1cbiAgICAgICAgdGhpcy5zb3J0SWZQb3NzaWJsZShkcmFnZ2FibGUpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25FbmREaXNwbGF5Y2VtZW50KGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IHNvcnRlZERyYWdnYWJsZXMgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuICAgIGNvbnN0IGZpeFBvc2l0aW9ucyA9IHNvcnRlZERyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5maXhQb3NpdGlvbilcblxuICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IHNvcnRlZERyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpXG4gICAgY29uc3QgdGFyZ2V0SW5kZXggPSBHZW9tZXRyeS5pbmRleE9mTmVhcmVzdFBvaW50KGZpeFBvc2l0aW9ucywgZHJhZ2dhYmxlLnBvc2l0aW9uLCB0aGlzLm9wdGlvbnMucmFkaXVzLCB0aGlzLm9wdGlvbnMuZ2V0RGlzdGFuY2UpXG5cbiAgICBpZiAodGFyZ2V0SW5kZXggIT09IC0xKSB7XG4gICAgICBpZiAodGFyZ2V0SW5kZXggPCBjdXJyZW50SW5kZXgpIHtcbiAgICAgICAgZm9yIChsZXQgaT10YXJnZXRJbmRleDsgaTxjdXJyZW50SW5kZXg7IGkrKykge1xuICAgICAgICAgIHRoaXMubW92ZU9yU2F2ZShzb3J0ZWREcmFnZ2FibGVzW2ldLCBmaXhQb3NpdGlvbnNbaSsxXSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGxldCBpPWN1cnJlbnRJbmRleDsgaTx0YXJnZXRJbmRleDsgaSsrKSB7XG4gICAgICAgICAgdGhpcy5tb3ZlT3JTYXZlKHNvcnRlZERyYWdnYWJsZXNbaSsxXSwgZml4UG9zaXRpb25zW2ldLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGRyYWdnYWJsZS5tb3ZlKGZpeFBvc2l0aW9uc1t0YXJnZXRJbmRleF0sIHRoaXMub3B0aW9ucy50aW1lRW5kLCB0cnVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBkcmFnZ2FibGUubW92ZShkcmFnZ2FibGUuZml4UG9zaXRpb24sIHRoaXMub3B0aW9ucy50aW1lRW5kLCB0cnVlKVxuICAgIH1cbiAgfVxuXG4gIG9uU3RhcnQoZHJhZ2dhYmxlKSB7XG4gICAgbGV0IGlcbiAgICBjb25zdCBzb3J0ZWREcmFnZ2FibGVzID0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcbiAgICBjb25zdCBmaXhQb3NpdGlvbnMgPSBzb3J0ZWREcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUuZml4UG9zaXRpb24pXG5cbiAgICBjb25zdCBjdXJyZW50SW5kZXggPSBzb3J0ZWREcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKVxuICAgIGZvciAoaSA9IGN1cnJlbnRJbmRleCArIDE7IGkgPCBzb3J0ZWREcmFnZ2FibGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLm1vdmVPclNhdmUoc29ydGVkRHJhZ2dhYmxlc1tpXSwgZml4UG9zaXRpb25zW2kgLSAxXSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgIH1cbiAgICBzb3J0ZWREcmFnZ2FibGVzW2N1cnJlbnRJbmRleF0uZml4UG9zaXRpb24gPSBmaXhQb3NpdGlvbnNbaSAtIDFdXG4gIH1cblxuICBnZXRDdXJyZW50Rml4UG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLmZpeFBvc2l0aW9uLmNsb25lKCkpXG4gIH1cblxuICBnZXRTb3J0ZWREcmFnZ2FibGVzKCkge1xuICAgIGNvbnN0IGluaXRQb3NpdGlvbnMgPSB0aGlzLmRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5pbml0UG9zaXRpb24pXG5cbiAgICBjb25zdCBzb3J0ZWREcmFnZ2FibGVzID0gaW5pdFBvc2l0aW9ucy5tYXAoKHBvc2l0aW9uKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5kcmFnZ2FibGVzLmZpbHRlcigoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUuZml4UG9zaXRpb24uY29tcGFyZShwb3NpdGlvbikpWzBdXG4gICAgfSlcblxuICAgIHJldHVybiBzb3J0ZWREcmFnZ2FibGVzXG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUubW92ZShkcmFnZ2FibGUuaW5pdFBvc2l0aW9uLCAwLCB0cnVlLCBmYWxzZSlcbiAgICB9KVxuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUucmVmcmVzaCgpXG4gICAgfSlcbiAgfVxuXG4gIGFkZChkcmFnZ2FibGVzKSB7XG4gICAgaWYgKCEoZHJhZ2dhYmxlcyBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgZHJhZ2dhYmxlcyA9IFtkcmFnZ2FibGVzXVxuICAgIH1cbiAgICBkcmFnZ2FibGVzLmZvckVhY2godGhpcy5pbml0RHJhZ2dhYmxlLCB0aGlzKVxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IHRoaXMuZHJhZ2dhYmxlcy5jb25jYXQoZHJhZ2dhYmxlcylcbiAgfVxuXG4gIHJlbW92ZShkcmFnZ2FibGVzKSB7XG4gICAgY29uc3QgaW5pdFBvc2l0aW9ucyA9IHRoaXMuZHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLmluaXRQb3NpdGlvbilcbiAgICBjb25zdCBsaXN0ID0gW11cbiAgICBjb25zdCBzb3J0ZWREcmFnZ2FibGVzID0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcblxuICAgIGlmICghKGRyYWdnYWJsZXMgaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICAgIGRyYWdnYWJsZXMgPSBbZHJhZ2dhYmxlc11cbiAgICB9XG5cbiAgICBkcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLm9uRW5kLnJlc2V0KClcbiAgICAgIGRyYWdnYWJsZS5vbk1vdmUucmVzZXQoKSAvL3RvZG8gcmVtb3ZlIHJlc2V0IGluIGZ1dHVyZVxuICAgICAgcmVtb3ZlSXRlbXModGhpcy5kcmFnZ2FibGVzLCBkcmFnZ2FibGUpXG4gICAgfSlcblxuICAgIGxldCBqID0gMFxuICAgIHNvcnRlZERyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBpZiAodGhpcy5kcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTEpIHtcbiAgICAgICAgaWYgKGRyYWdnYWJsZS5maXhQb3NpdGlvbiAhPT0gaW5pdFBvc2l0aW9uc1tqXSkge1xuICAgICAgICAgIGRyYWdnYWJsZS5tb3ZlKGluaXRQb3NpdGlvbnNbal0sIHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSwgdHJ1ZSlcbiAgICAgICAgfVxuICAgICAgICBkcmFnZ2FibGUuaW5pdFBvc2l0aW9uID0gaW5pdFBvc2l0aW9uc1tqXVxuICAgICAgICBqKytcbiAgICAgICAgbGlzdC5wdXNoKGRyYWdnYWJsZSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGxpc3RcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMucmVtb3ZlKHRoaXMuZHJhZ2dhYmxlcy5zbGljZSgpKVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUuZGVzdHJveSgpKVxuICB9XG5cbiAgZ2V0IHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDdXJyZW50Rml4UG9zaXRpb24oKVxuICB9XG5cbiAgc2V0IHBvc2l0aW9ucyhwb3NpdGlvbnMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gJ3dyb25nIGFycmF5IGxlbmd0aCdcbiAgICBpZiAocG9zaXRpb25zLmxlbmd0aCA9PT0gdGhpcy5kcmFnZ2FibGVzLmxlbmd0aCkge1xuICAgICAgcG9zaXRpb25zLmZvckVhY2goKHBvaW50LCBpKSA9PiB7XG4gICAgICAgIHRoaXMuZHJhZ2dhYmxlc1tpXS5tb3ZlKHBvaW50LCAwLCB0cnVlLCB0cnVlKVxuICAgICAgfSwgdGhpcylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbWVzc2FnZVxuICAgIH1cbiAgfVxuXG4gIGdldCBlbmFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZVxuICB9XG5cbiAgc2V0IGVuYWJsZShlbmFibGUpIHtcbiAgICB0aGlzLl9lbmFibGUgPSBlbmFibGVcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUuZW5hYmxlID0gZW5hYmxlXG4gICAgfSlcbiAgfVxufVxuXG5mdW5jdGlvbiBsaXN0RmFjdG9yeShwYXJlbnRFbGVtZW50LCBlbGVtZW50cywgb3B0aW9ucz17fSkge1xuICBjb25zdCBkcmFnZ2FibGVPcHRpb25zID0gb3B0aW9ucy5kcmFnZ2FibGUgfHwge31cbiAgY29uc3QgbGlzdE9wdGlvbnMgPSBvcHRpb25zLmxpc3QgfHwge31cbiAgZHJhZ2dhYmxlT3B0aW9ucy5wYXJlbnQgPSBkcmFnZ2FibGVPcHRpb25zLnBhcmVudCB8fCBwYXJlbnRFbGVtZW50XG4gIGVsZW1lbnRzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZWxlbWVudHMpXG5cbiAgY29uc3QgZHJhZ2dhYmxlcyA9IGVsZW1lbnRzLm1hcCgoZWxlbWVudCkgPT4ge1xuICAgIHJldHVybiBuZXcgRHJhZ2dhYmxlKGVsZW1lbnQsIGRyYWdnYWJsZU9wdGlvbnMpXG4gIH0pXG5cbiAgcmV0dXJuIG5ldyBMaXN0KGRyYWdnYWJsZXMsIGxpc3RPcHRpb25zKVxufVxuXG5leHBvcnQgeyBMaXN0LCBsaXN0RmFjdG9yeSB9XG4iLCIndXNlIHN0cmljdCdcbmltcG9ydCB7IEdlb21ldHJ5LCBQb2ludCB9IGZyb20gJy4vZ2VvbWV0cnknXG5cbmNvbnN0IHBvc2l0aW9uVHlwZSA9IHtcbiAgbm90Q3Jvc3Npbmc6IDAsXG4gIGZsb2F0TGVmdDogMSxcbiAgZmxvYXRSaWdodDogMlxufVxuXG5mdW5jdGlvbiBwb3NpdGlvbkZhY3RvcnkodHlwZSkge1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgY2FzZSBwb3NpdGlvblR5cGUubm90Q3Jvc3Npbmc6XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHJlY3RhbmdsZSwgX29wdGlvbnMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihyZWN0YW5nbGVMaXN0LCBpbmRleGVzT2ZOZXdzKSB7XG4gICAgICAgIGNvbnN0IGJvdW5kUmVjdCA9IHR5cGVvZiByZWN0YW5nbGUgPT09ICdmdW5jdGlvbicgPyByZWN0YW5nbGUoKSA6IHJlY3RhbmdsZSxcbiAgICAgICAgICBzdGF0aWNSZWN0YW5nbGVJbmRleGVzID0gcmVjdGFuZ2xlTGlzdC5yZWR1Y2UoZnVuY3Rpb24oaW5kZXhlcywgX3JlY3QsIGluZGV4KSB7XG4gICAgICAgICAgICBpZiAoaW5kZXhlc09mTmV3cy5pbmRleE9mKGluZGV4KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgaW5kZXhlcy5wdXNoKGluZGV4KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGluZGV4ZXNcbiAgICAgICAgICB9LCBbXSlcblxuICAgICAgICBpbmRleGVzT2ZOZXdzLmZvckVhY2goZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgICAgICBsZXQgcmVjdCA9IHJlY3RhbmdsZUxpc3RbaW5kZXhdLCByZW1vdmFibGUgPSBmYWxzZVxuICAgICAgICAgIHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMuZm9yRWFjaChmdW5jdGlvbihpbmRleE9mU3RhdGljKSB7XG4gICAgICAgICAgICBjb25zdCBzdGF0aWNSZWN0ID0gcmVjdGFuZ2xlTGlzdFtpbmRleE9mU3RhdGljXVxuICAgICAgICAgICAgcmVjdCA9IHN0YXRpY1JlY3QubW92ZVRvQm91bmQocmVjdClcbiAgICAgICAgICB9KVxuICAgICAgICAgIHJlbW92YWJsZSA9IHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMuc29tZShmdW5jdGlvbihpbmRleE9mU3RhdGljKSB7XG4gICAgICAgICAgICBjb25zdCBzdGF0aWNSZWN0ID0gcmVjdGFuZ2xlTGlzdFtpbmRleE9mU3RhdGljXVxuICAgICAgICAgICAgcmV0dXJuICAhIXN0YXRpY1JlY3QuYW5kKHJlY3QpXG4gICAgICAgICAgfSkgfHwgcmVjdC5hbmQoYm91bmRSZWN0KS5nZXRTcXVhcmUoKSAhPT0gcmVjdC5nZXRTcXVhcmUoKVxuICAgICAgICAgIGlmIChyZW1vdmFibGUpIHtcbiAgICAgICAgICAgIHJlY3QucmVtb3ZhYmxlID0gdHJ1ZVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdGF0aWNSZWN0YW5nbGVJbmRleGVzLnB1c2goaW5kZXgpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gcmVjdGFuZ2xlTGlzdFxuICAgICAgfVxuICAgIH1cbiAgY2FzZSBwb3NpdGlvblR5cGUuZmxvYXRMZWZ0OlxuICAgIHJldHVybiBmdW5jdGlvbihyZWN0YW5nbGUsIG9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgcGFkZGluZ1RvcExlZnQ6IG5ldyBQb2ludCgwLCAwKSxcbiAgICAgICAgcGFkZGluZ0JvdHRvbVJpZ2h0OiBuZXcgUG9pbnQoMCwgMCksXG4gICAgICAgIHlHYXBCZXR3ZWVuRHJhZ2dhYmxlczogMCxcbiAgICAgICAgcmVtb3ZhYmxlOiB0cnVlXG4gICAgICB9LCBvcHRpb25zKVxuXG4gICAgICByZXR1cm4gZnVuY3Rpb24ocmVjdGFuZ2xlTGlzdCwgX2luZGV4ZXNPZk5ld3MpIHtcbiAgICAgICAgY29uc3QgYm91bmRSZWN0ID0gdHlwZW9mIHJlY3RhbmdsZSA9PT0gJ2Z1bmN0aW9uJyA/IHJlY3RhbmdsZSgpIDogcmVjdGFuZ2xlXG4gICAgICAgIGNvbnN0IHJlY3RQMiA9IGJvdW5kUmVjdC5nZXRQMigpXG4gICAgICAgIGxldCBib3VuZGFyeVBvaW50cyA9IFtib3VuZFJlY3QucG9zaXRpb25dXG4gICAgICAgIHJlY3RhbmdsZUxpc3QuZm9yRWFjaChmdW5jdGlvbihyZWN0KSB7XG4gICAgICAgICAgbGV0IHBvc2l0aW9uLCBpc1ZhbGlkID0gZmFsc2VcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvdW5kYXJ5UG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IChuZXcgUG9pbnQoYm91bmRhcnlQb2ludHNbaV0ueCwgaSA+IDAgPyAoYm91bmRhcnlQb2ludHNbaSAtIDFdLnkgKyBvcHRpb25zLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcykgOiBib3VuZFJlY3QucG9zaXRpb24ueSkpLmFkZChvcHRpb25zLnBhZGRpbmdUb3BMZWZ0KVxuICAgICAgICAgICAgaXNWYWxpZCA9IChwb3NpdGlvbi54ICsgcmVjdC5zaXplLnggPCByZWN0UDIueClcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICAgICAgcG9zaXRpb24gPSAobmV3IFBvaW50KGJvdW5kUmVjdC5wb3NpdGlvbi54LCBib3VuZGFyeVBvaW50c1tib3VuZGFyeVBvaW50cy5sZW5ndGggLSAxXS55ICsgb3B0aW9ucy55R2FwQmV0d2VlbkRyYWdnYWJsZXMpKS5hZGQob3B0aW9ucy5wYWRkaW5nVG9wTGVmdClcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVjdC5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgICAgICAgaWYgKG9wdGlvbnMucmVtb3ZhYmxlICYmIHJlY3QuZ2V0UDMoKS55ID4gYm91bmRSZWN0LmdldFAzKCkueSkge1xuICAgICAgICAgICAgcmVjdC5yZW1vdmFibGUgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGJvdW5kYXJ5UG9pbnRzID0gR2VvbWV0cnkuYWRkUG9pbnRUb0JvdW5kUG9pbnRzKGJvdW5kYXJ5UG9pbnRzLCByZWN0LmdldFAzKCkuYWRkKG9wdGlvbnMucGFkZGluZ0JvdHRvbVJpZ2h0KSlcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHJlY3RhbmdsZUxpc3RcbiAgICAgIH1cbiAgICB9XG4gIGNhc2UgcG9zaXRpb25UeXBlLmZsb2F0UmlnaHQ6XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHJlY3RhbmdsZSwgb3B0aW9ucykge1xuICAgICAgb3B0aW9ucyA9IE9iamVjdC5hc3Npbmcoe1xuICAgICAgICBwYWRkaW5nVG9wUmlnaHQ6IG5ldyBQb2ludCg1LCA1KSxcbiAgICAgICAgcGFkZGluZ0JvdHRvbUxlZnQ6IG5ldyBQb2ludCgwLCAwKSxcbiAgICAgICAgcmVtb3ZhYmxlOiB0cnVlXG4gICAgICB9LCBvcHRpb25zKVxuXG4gICAgICBjb25zdCBwYWRkaW5nVG9wTmVnUmlnaHQgPSBuZXcgUG9pbnQoLW9wdGlvbnMucGFkZGluZ1RvcFJpZ2h0LngsIG9wdGlvbnMucGFkZGluZ1RvcFJpZ2h0LnkpXG4gICAgICBjb25zdCBwYWRkaW5nQm90dG9tTmVnTGVmdCA9IG5ldyBQb2ludCgtb3B0aW9ucy5wYWRkaW5nQm90dG9tTGVmdC54LCBvcHRpb25zLnBhZGRpbmdCb3R0b21MZWZ0LnkpXG4gICAgICByZXR1cm4gZnVuY3Rpb24ocmVjdGFuZ2xlTGlzdCwgX2luZGV4ZXNPZk5ld3MpIHtcbiAgICAgICAgY29uc3QgYm91bmRSZWN0ID0gdHlwZW9mIHJlY3RhbmdsZSA9PT0gJ2Z1bmN0aW9uJyA/IHJlY3RhbmdsZSgpIDogcmVjdGFuZ2xlXG4gICAgICAgIGxldCBib3VuZGFyeVBvaW50cyA9IFtib3VuZFJlY3QuZ2V0UmlnaHRUb3BQb2ludCgpXVxuICAgICAgICByZWN0YW5nbGVMaXN0LmZvckVhY2goZnVuY3Rpb24ocmVjdCwgX2luZGV4KSB7XG4gICAgICAgICAgbGV0IHBvc2l0aW9uLCBpc1ZhbGlkID0gZmFsc2VcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvdW5kYXJ5UG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IChuZXcgUG9pbnQoYm91bmRhcnlQb2ludHNbaV0ueCAtIHJlY3Quc2l6ZS54LCBpID4gMCA/IGJvdW5kYXJ5UG9pbnRzW2kgLSAxXS55IDogYm91bmRSZWN0LnBvc2l0aW9uLnkpKS5hZGQocGFkZGluZ1RvcE5lZ1JpZ2h0KVxuICAgICAgICAgICAgaXNWYWxpZCA9IChwb3NpdGlvbi54ID4gcmVjdC5wb3NpdGlvbi54KVxuICAgICAgICAgICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IG5ldyBQb2ludChib3VuZFJlY3QuZ2V0UDIoKS54LCBib3VuZGFyeVBvaW50c1tib3VuZGFyeVBvaW50cy5sZW5ndGggLSAxXS55KVxuICAgICAgICAgIH1cbiAgICAgICAgICByZWN0LnBvc2l0aW9uID0gcG9zaXRpb25cbiAgICAgICAgICBpZiAob3B0aW9ucy5yZW1vdmFibGUgJiYgcmVjdC5nZXRMZWZ0Qm90dG9tUG9pbnQoKS55ID4gYm91bmRSZWN0LmdldFA0KCkueSkge1xuICAgICAgICAgICAgcmVjdC5yZW1vdmFibGUgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGJvdW5kYXJ5UG9pbnRzID0gR2VvbWV0cnkuYWRkUG9pbnRUb0JvdW5kUG9pbnRzKGJvdW5kYXJ5UG9pbnRzLCByZWN0LmdldFA0KCkuYWRkKHBhZGRpbmdCb3R0b21OZWdMZWZ0KSwgdHJ1ZSlcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHJlY3RhbmdsZUxpc3RcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc29ydGluZ0ZhY3RvcnkodHlwZSkge1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgY2FzZSBwb3NpdGlvblR5cGUubm90Q3Jvc3Npbmc6XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG9sZE9ianNMaXN0LCBuZXdPYmpzLCBpbmRleE9mTmV3cykge1xuICAgICAgICBjb25zdCBvYmpzTGlzdCA9IG9sZE9ianNMaXN0LmNvbmNhdChuZXdPYmpzKVxuICAgICAgICBuZXdPYmpzLmZvckVhY2goZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgICAgaW5kZXhPZk5ld3MucHVzaChvYmpzTGlzdC5pbmRleE9mKG9iaikpXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBvYmpzTGlzdFxuICAgICAgfVxuICAgIH1cbiAgY2FzZSBwb3NpdGlvblR5cGUuZmxvYXRMZWZ0OlxuICBjYXNlIHBvc2l0aW9uVHlwZS5mbG9hdFJpZ2h0OlxuICAgIHJldHVybiBmdW5jdGlvbihyYWRpdXMsIGdldERpc3RhbmNlLCBvcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIGdldFBvc2l0aW9uOiBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgICByZXR1cm4gb2JqLnBvc2l0aW9uXG4gICAgICAgIH1cbiAgICAgIH0sIG9wdGlvbnMpXG5cbiAgICAgIHJldHVybiBmdW5jdGlvbihvbGRPYmpzTGlzdCwgbmV3T2JqcywgaW5kZXhPZk5ld3MpIHtcbiAgICAgICAgY29uc3QgbmV3TGlzdCA9IG9sZE9ianNMaXN0LmNvbmNhdCgpXG4gICAgICAgIGNvbnN0IGxpc3RPbGRQb3NpdGlvbiA9IG9sZE9ianNMaXN0Lm1hcChvcHRpb25zLmdldFBvc2l0aW9uKVxuICAgICAgICBuZXdPYmpzLmZvckVhY2goZnVuY3Rpb24obmV3T2JqKSB7XG4gICAgICAgICAgbGV0IGluZGV4ID0gR2VvbWV0cnkuaW5kZXhPZk5lYXJlc3RQb2ludChsaXN0T2xkUG9zaXRpb24sIG9wdGlvbnMuZ2V0UG9zaXRpb24obmV3T2JqKSwgcmFkaXVzLCBnZXREaXN0YW5jZSlcbiAgICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICBpbmRleCA9IG5ld0xpc3QubGVuZ3RoXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluZGV4ID0gbmV3TGlzdC5pbmRleE9mKG9sZE9ianNMaXN0W2luZGV4XSlcbiAgICAgICAgICB9XG4gICAgICAgICAgbmV3TGlzdC5zcGxpY2UoaW5kZXgsIDAsIG5ld09iailcbiAgICAgICAgfSlcbiAgICAgICAgbmV3T2Jqcy5mb3JFYWNoKGZ1bmN0aW9uKG5ld09iaikge1xuICAgICAgICAgIGluZGV4T2ZOZXdzLnB1c2gobmV3TGlzdC5pbmRleE9mKG5ld09iaikpXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBuZXdMaXN0XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCB7IHBvc2l0aW9uVHlwZSwgc29ydGluZ0ZhY3RvcnksIHBvc2l0aW9uRmFjdG9yeSB9XG4iLCJpbXBvcnQgcmVtb3ZlSXRlbXMgZnJvbSAncmVtb3ZlLWFycmF5LWl0ZW1zJ1xuaW1wb3J0IEV2ZW50IGZyb20gJy4vZXZlbnQnXG5pbXBvcnQgeyBEcmFnZ2FibGUgfSBmcm9tICcuL2RyYWdnYWJsZSdcbmltcG9ydCB7IFRhcmdldCB9IGZyb20gJy4vdGFyZ2V0J1xuXG5jb25zdCBEcmFnZWUgPSB7IEV2ZW50IH0gLy90b2RvIHJlbW92ZSBhZnRlciByZWZhY3RvcmVcblxuY29uc3Qgc2NvcGVzID0gW11cblxuY2xhc3MgU2NvcGUge1xuICBjb25zdHJ1Y3RvcihkcmFnZ2FibGVzLCB0YXJnZXRzLCBvcHRpb25zPXt9KSB7XG4gICAgc2NvcGVzLmZvckVhY2goKHNjb3BlKSA9PiB7XG4gICAgICBpZiAoZHJhZ2dhYmxlcykge1xuICAgICAgICBkcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgICAgIHJlbW92ZUl0ZW1zKHNjb3BlLmRyYWdnYWJsZXMsIGRyYWdnYWJsZSlcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgaWYgKHRhcmdldHMpIHtcbiAgICAgICAgdGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHtcbiAgICAgICAgICByZW1vdmVJdGVtcyhzY29wZS50YXJnZXRzLCB0YXJnZXQpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZXMgfHwgW11cbiAgICB0aGlzLnRhcmdldHMgPSB0YXJnZXRzIHx8IFtdXG4gICAgc2NvcGVzLnB1c2godGhpcylcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICB0aW1lRW5kOiAob3B0aW9ucy50aW1lRW5kKSB8fCA0MDBcbiAgICB9XG5cbiAgICB0aGlzLm9uQ2hhbmdlID0gbmV3IERyYWdlZS5FdmVudCh0aGlzKVxuICAgIGlmIChvcHRpb25zLm9uQ2hhbmdlKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlLmFkZChvcHRpb25zLm9uQ2hhbmdlKVxuICAgIH1cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUub25FbmQuYWRkKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMub25FbmQoZHJhZ2dhYmxlKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgYWRkRHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5wdXNoKGRyYWdnYWJsZSlcbiAgICBkcmFnZ2FibGUub25FbmQudW5zaGlmdCgoKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5vbkVuZChkcmFnZ2FibGUpXG4gICAgfSlcbiAgfVxuXG4gIGFkZFRhcmdldCh0YXJnZXQpIHtcbiAgICB0aGlzLnRhcmdldHMucHVzaCh0YXJnZXQpXG4gIH1cblxuICBvbkVuZChkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBzaG90VGFyZ2V0cyA9IHRoaXMudGFyZ2V0cy5maWx0ZXIoKHRhcmdldCkgPT4ge1xuICAgICAgcmV0dXJuIHRhcmdldC5kcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTFcbiAgICB9KS5maWx0ZXIoKHRhcmdldCkgPT4ge1xuICAgICAgcmV0dXJuIHRhcmdldC5jYXRjaERyYWdnYWJsZShkcmFnZ2FibGUpXG4gICAgfSkuc29ydCgoYSwgYikgPT4ge1xuICAgICAgcmV0dXJuIGEuZ2V0UmVjdGFuZ2xlKCkuZ2V0U3F1YXJlKCkgLSBiLmdldFJlY3RhbmdsZSgpLmdldFNxdWFyZSgpXG4gICAgfSlcblxuICAgIGlmIChzaG90VGFyZ2V0cy5sZW5ndGgpIHtcbiAgICAgIHNob3RUYXJnZXRzWzBdLm9uRW5kKGRyYWdnYWJsZSlcbiAgICB9IGVsc2UgaWYgKGRyYWdnYWJsZS50YXJnZXRzLmxlbmd0aCkge1xuICAgICAgZHJhZ2dhYmxlLm1vdmUoZHJhZ2dhYmxlLmluaXRQb3NpdGlvbiwgdGhpcy5vcHRpb25zLnRpbWVFbmQsIHRydWUsIHRydWUpXG4gICAgfVxuICAgIHRoaXMub25DaGFuZ2UuZmlyZSgpXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMudGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHRhcmdldC5yZXNldCgpKVxuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucmVmcmVzaCgpKVxuICAgIHRoaXMudGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHRhcmdldC5yZWZyZXNoKCkpXG4gIH1cblxuICBnZXQgcG9zaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnRhcmdldHMubWFwKCh0YXJnZXQpID0+IHtcbiAgICAgIHJldHVybiB0YXJnZXQuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB0aGlzLmRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpKVxuICAgIH0pXG4gIH1cblxuICBzZXQgcG9zaXRpb25zKHBvc2l0aW9ucykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSAnd3JvbmcgYXJyYXkgbGVuZ3RoJ1xuICAgIGlmIChwb3NpdGlvbnMubGVuZ3RoID09PSB0aGlzLnRhcmdldHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB0YXJnZXQucmVzZXQoKSlcblxuICAgICAgcG9zaXRpb25zLmZvckVhY2goKHRhcmdldEluZGV4ZXMsIGkpID0+IHtcbiAgICAgICAgdGFyZ2V0SW5kZXhlcy5mb3JFYWNoKChpbmRleCkgPT4ge1xuICAgICAgICAgIHRoaXMudGFyZ2V0c1tpXS5hZGQodGhpcy5kcmFnZ2FibGVzW2luZGV4XSlcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG1lc3NhZ2VcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgZGVmYXVsdFNjb3BlID0gbmV3IFNjb3BlKClcblxuZnVuY3Rpb24gc2NvcGUoZm4pIHtcbiAgY29uc3QgY3VycmVudFNjb3BlID0gbmV3IFNjb3BlKClcbiAgY29uc3QgYWRkRHJhZ2dhYmxlVG9TY29wZSA9IGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICAgIGN1cnJlbnRTY29wZS5hZGREcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICAgIHJldHVybiB0cnVlXG4gIH1cbiAgY29uc3QgYWRkVGFyZ2V0VG9TY29wZSA9IGZ1bmN0aW9uKHRhcmdldCkge1xuICAgIGN1cnJlbnRTY29wZS5hZGRUYXJnZXQodGFyZ2V0KVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBEcmFnZ2FibGUub25DcmVhdGUuYWRkKGFkZERyYWdnYWJsZVRvU2NvcGUpXG4gIFRhcmdldC5vbkNyZWF0ZS5hZGQoYWRkVGFyZ2V0VG9TY29wZSlcbiAgZm4uY2FsbCgpXG4gIERyYWdnYWJsZS5vbkNyZWF0ZS5yZW1vdmUoYWRkRHJhZ2dhYmxlVG9TY29wZSlcbiAgVGFyZ2V0Lm9uQ3JlYXRlLnJlbW92ZShhZGRUYXJnZXRUb1Njb3BlKVxuICByZXR1cm4gY3VycmVudFNjb3BlXG59XG5cbmZ1bmN0aW9uIHNjb3BlRmFjdG9yeShwYXJlbnRFbGVtZW50LCBkcmFnZ2FibGVFbGVtZW50cywgdGFyZ2V0RWxlbWVudHMsIG9wdGlvbnM9e30pIHtcbiAgY29uc3QgZHJhZ2dhYmxlT3B0aW9ucyA9IG9wdGlvbnMuZHJhZ2dhYmxlIHx8IHt9XG4gIGNvbnN0IHRhcmdldE9wdGlvbnMgPSBvcHRpb25zLnRhcmdldCB8fCB7fVxuICBjb25zdCBzY29wZU9wdGlvbnMgPSBvcHRpb25zLnNjb3BlIHx8IHt9XG4gIGRyYWdnYWJsZU9wdGlvbnMucGFyZW50ID0gZHJhZ2dhYmxlT3B0aW9ucy5wYXJlbnQgfHwgcGFyZW50RWxlbWVudFxuICB0YXJnZXRPcHRpb25zLnBhcmVudCA9IHRhcmdldE9wdGlvbnMucGFyZW50IHx8IHBhcmVudEVsZW1lbnRcbiAgZHJhZ2dhYmxlRWxlbWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkcmFnZ2FibGVFbGVtZW50cylcbiAgdGFyZ2V0RWxlbWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0YXJnZXRFbGVtZW50cylcblxuICBjb25zdCBkcmFnZ2FibGVzID0gZHJhZ2dhYmxlRWxlbWVudHMubWFwKChlbGVtZW50KSA9PiB7XG4gICAgcmV0dXJuIG5ldyBEcmFnZ2FibGUoZWxlbWVudCwgZHJhZ2dhYmxlT3B0aW9ucylcbiAgfSlcblxuICBjb25zdCB0YXJnZXRzID0gdGFyZ2V0RWxlbWVudHMubWFwKChlbGVtZW50KSA9PiB7XG4gICAgcmV0dXJuIG5ldyBUYXJnZXQoZWxlbWVudCwgZHJhZ2dhYmxlcywgdGFyZ2V0T3B0aW9ucylcbiAgfSlcbiAgcmV0dXJuIG5ldyBTY29wZShkcmFnZ2FibGVzLCB0YXJnZXRzLCBzY29wZU9wdGlvbnMpXG59XG5cbmV4cG9ydCB7IHNjb3BlcywgZGVmYXVsdFNjb3BlLCBTY29wZSwgc2NvcGVGYWN0b3J5LCBzY29wZSB9XG4iLCJpbXBvcnQgcmFuZ2UgZnJvbSAnLi91dGlscy9yYW5nZS5qcydcbmltcG9ydCByZW1vdmVJdGVtcyBmcm9tICdyZW1vdmUtYXJyYXktaXRlbXMnXG5pbXBvcnQgZ2V0RGVmYXVsdFBhcmVudCBmcm9tICcuL3V0aWxzL2dldGRlZmF1bHRwYXJlbnQnXG5pbXBvcnQgRXZlbnQgZnJvbSAnLi9ldmVudCdcbmltcG9ydCB7IEdlb21ldHJ5IH0gZnJvbSAnLi9nZW9tZXRyeSdcbmltcG9ydCB7IHBvc2l0aW9uVHlwZSwgc29ydGluZ0ZhY3RvcnksIHBvc2l0aW9uRmFjdG9yeSB9IGZyb20gJy4vcG9zaXRpb25pbmcnXG5pbXBvcnQgeyBzY29wZXMsIGRlZmF1bHRTY29wZSB9IGZyb20gJy4vc2NvcGUnXG5cbmNvbnN0IERyYWdlZSA9IHsgcG9zaXRpb25UeXBlLCAgcG9zaXRpb25GYWN0b3J5LCBzb3J0aW5nRmFjdG9yeSwgc2NvcGVzLCBFdmVudCB9Ly90b2RvIHJlbW92ZSBhZnRlciByZWZhY3RvcmVcblxuY29uc3QgYWRkVG9EZWZhdWx0U2NvcGUgPSBmdW5jdGlvbih0YXJnZXQpIHtcbiAgZGVmYXVsdFNjb3BlLmFkZFRhcmdldCh0YXJnZXQpXG59XG5cbmNsYXNzIFRhcmdldCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGRyYWdnYWJsZXMsIG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0IHRhcmdldCA9IHRoaXNcbiAgICBjb25zdCBwYXJlbnQgPSBvcHRpb25zLnBhcmVudCB8fCBnZXREZWZhdWx0UGFyZW50KGVsZW1lbnQpXG5cbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHRpbWVFbmQ6IDIwMCxcbiAgICAgIHRpbWVFeGNhbmdlOiA0MDAsXG4gICAgICBwYXJlbnQ6IHBhcmVudCxcbiAgICAgIHNvcnRpbmc6IERyYWdlZS5zb3J0aW5nRmFjdG9yeShEcmFnZWUucG9zaXRpb25UeXBlLmZsb2F0TGVmdCkoODAsIEdlb21ldHJ5LnRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3RvcnkoeyB4OiAxLCB5OiA0IH0pKSxcbiAgICAgIHBvc2l0aW9uaW5nOiBEcmFnZWUucG9zaXRpb25GYWN0b3J5KERyYWdlZS5wb3NpdGlvblR5cGUuZmxvYXRMZWZ0KSh0aGlzLmdldFJlY3RhbmdsZS5iaW5kKHRoaXMpLCB7IHJlbW92YWJsZTogdHJ1ZSB9KVxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG4gICAgZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS50YXJnZXRzLnB1c2godGFyZ2V0KSlcbiAgICB0aGlzLmRyYWdnYWJsZXMgPSBkcmFnZ2FibGVzXG4gICAgdGhpcy5vbkFkZCA9IG5ldyBEcmFnZWUuRXZlbnQodGhpcylcbiAgICB0aGlzLmJlZm9yZUFkZCA9IG5ldyBEcmFnZWUuRXZlbnQodGhpcylcbiAgICB0aGlzLm9uUmVtb3ZlID0gbmV3IERyYWdlZS5FdmVudCh0aGlzKVxuXG4gICAgaWYgKG9wdGlvbnMub25SZW1vdmUpIHtcbiAgICAgIHRoaXMub25SZW1vdmUuYWRkKG9wdGlvbnMub25SZW1vdmUpXG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMub25BZGQpIHtcbiAgICAgIHRoaXMub25BZGQuYWRkKG9wdGlvbnMub25BZGQpXG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuYmVmb3JlQWRkKSB7XG4gICAgICB0aGlzLmJlZm9yZUFkZC5hZGQob3B0aW9ucy5iZWZvcmVBZGQpXG4gICAgfVxuXG4gICAgVGFyZ2V0Lm9uQ3JlYXRlLmZpcmUodGhpcylcblxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBpbml0KCkge1xuICAgIGxldCByZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXdcblxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzID0gdGhpcy5kcmFnZ2FibGVzLmZpbHRlcigoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBsZXQgZWxlbWVudCA9IGRyYWdnYWJsZS5lbGVtZW50LnBhcmVudE5vZGVcbiAgICAgIHdoaWxlIChlbGVtZW50KSB7XG4gICAgICAgIGlmIChlbGVtZW50ID09PSB0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGVcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH0pXG5cbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMubGVuZ3RoKSB7XG4gICAgICBpbmRleGVzT2ZOZXcgPSByYW5nZSh0aGlzLmlubmVyRHJhZ2dhYmxlcy5sZW5ndGgpXG4gICAgICByZWN0YW5nbGVzID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICAgIH0pLCBpbmRleGVzT2ZOZXcpXG4gICAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIGluZGV4ZXNPZk5ldylcbiAgICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gdGhpcy5vbkFkZC5maXJlKGRyYWdnYWJsZSkpXG4gICAgfVxuICB9XG5cbiAgZ2V0UmVjdGFuZ2xlKCkge1xuICAgIHJldHVybiBHZW9tZXRyeS5jcmVhdGVSZWN0YW5nbGVGcm9tRWxlbWVudChcbiAgICAgIHRoaXMuZWxlbWVudCxcbiAgICAgIHRoaXMub3B0aW9ucy5wYXJlbnQsXG4gICAgICB0aGlzLm9wdGlvbnMuaXNDb250ZW50Qm94U2l6ZSxcbiAgICAgIHRydWVcbiAgICApXG4gIH1cblxuICBjYXRjaERyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmNhdGNoRHJhZ2dhYmxlKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmNhdGNoRHJhZ2dhYmxlKHRoaXMsIGRyYWdnYWJsZSlcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGFyZ2V0UmVjdGFuZ2xlID0gdGhpcy5nZXRSZWN0YW5nbGUoKVxuICAgICAgY29uc3QgZHJhZ2dhYmxlU3F1YXJlID0gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpLmdldFNxdWFyZSgpXG5cbiAgICAgIHJldHVybiBkcmFnZ2FibGVTcXVhcmUgPCB0YXJnZXRSZWN0YW5nbGUuZ2V0U3F1YXJlKClcbiAgICAgICAgICAgICAgJiYgdGFyZ2V0UmVjdGFuZ2xlLmluY2x1ZGVQb2ludChkcmFnZ2FibGUuZ2V0Q2VudGVyKCkpXG4gICAgfVxuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UmVjdGFuZ2xlKCkucG9zaXRpb25cbiAgfVxuXG4gIGdldFNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UmVjdGFuZ2xlKCkuc2l6ZVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICBEcmFnZWUuc2NvcGVzLmZvckVhY2goKHNjb3BlKSA9PiByZW1vdmVJdGVtcyhzY29wZS50YXJnZXRzLCB0aGlzKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBbXSlcbiAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIFtdLCAwKVxuICB9XG5cbiAgb25FbmQoZHJhZ2dhYmxlKSB7XG4gICAgY29uc3QgbmV3RHJhZ2dhYmxlc0luZGV4ID0gW11cbiAgICBjb25zdCBpbmNsdWRlUG9pbnQgPSB0aGlzLmdldFJlY3RhbmdsZSgpLmluY2x1ZGVQb2ludChkcmFnZ2FibGUuZ2V0UG9zaXRpb24oKSlcblxuICAgIGlmICghaW5jbHVkZVBvaW50KSB7XG4gICAgICBpZiAodGhpcy5nZXRSZWN0YW5nbGUoKS5pbmNsdWRlUG9pbnQoZHJhZ2dhYmxlLmdldENlbnRlcigpKSkge1xuICAgICAgICBkcmFnZ2FibGUucG9zaXRpb24gPSBkcmFnZ2FibGUuZ2V0Q2VudGVyKCkuY2xvbmUoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5iZWZvcmVBZGQuZmlyZShkcmFnZ2FibGUpXG5cbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcyA9IHRoaXMub3B0aW9ucy5zb3J0aW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLCBbZHJhZ2dhYmxlXSwgbmV3RHJhZ2dhYmxlc0luZGV4KVxuICAgIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLm9wdGlvbnMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgbmV3RHJhZ2dhYmxlc0luZGV4LCBkcmFnZ2FibGUpXG5cbiAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIG5ld0RyYWdnYWJsZXNJbmRleClcbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMSkge1xuICAgICAgdGhpcy5hZGRSZW1vdmVPbk1vdmUoZHJhZ2dhYmxlKVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgaW5kZXhlc09mTmV3LCB0aW1lKSB7XG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuc2xpY2UoMCkuZm9yRWFjaCgoZHJhZ2dhYmxlLCBpKSA9PiB7XG4gICAgICBjb25zdCByZWN0ID0gcmVjdGFuZ2xlc1tpXSxcbiAgICAgICAgdGltZUVuZCA9IHRpbWUgfHwgdGltZSA9PT0gMCA/IHRpbWUgOiBpbmRleGVzT2ZOZXcuaW5kZXhPZihpKSAhPT0gLTEgPyB0aGlzLm9wdGlvbnMudGltZUVuZCA6IHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZVxuXG4gICAgICBpZiAocmVjdC5yZW1vdmFibGUpIHtcbiAgICAgICAgZHJhZ2dhYmxlLm1vdmUoZHJhZ2dhYmxlLmluaXRQb3NpdGlvbiwgdGltZUVuZCwgdHJ1ZSwgdHJ1ZSlcbiAgICAgICAgcmVtb3ZlSXRlbXModGhpcy5pbm5lckRyYWdnYWJsZXMsIGRyYWdnYWJsZSlcblxuICAgICAgICB0aGlzLm9uUmVtb3ZlLmZpcmUoZHJhZ2dhYmxlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZHJhZ2dhYmxlLm1vdmUocmVjdC5wb3NpdGlvbiwgdGltZUVuZCwgdHJ1ZSwgdHJ1ZSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgYWRkKGRyYWdnYWJsZSwgdGltZSkge1xuICAgIGNvbnN0IG5ld0RyYWdnYWJsZXNJbmRleCA9IHRoaXMuaW5uZXJEcmFnZ2FibGVzLmxlbmd0aFxuXG4gICAgdGhpcy5iZWZvcmVBZGQuZmlyZShkcmFnZ2FibGUpXG5cbiAgICB0aGlzLnB1c2hJbm5lckRyYWdnYWJsZShkcmFnZ2FibGUpXG4gICAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBuZXdEcmFnZ2FibGVzSW5kZXgsIGRyYWdnYWJsZSlcblxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgW25ld0RyYWdnYWJsZXNJbmRleF0sIHRpbWUgfHwgMClcbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMSkge1xuICAgICAgdGhpcy5hZGRSZW1vdmVPbk1vdmUoZHJhZ2dhYmxlKVxuICAgIH1cbiAgfVxuXG4gIHB1c2hJbm5lckRyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpPT09LTEpIHtcbiAgICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxuICAgIH1cbiAgfVxuXG4gIGFkZFJlbW92ZU9uTW92ZShkcmFnZ2FibGUpIHtcbiAgICBkcmFnZ2FibGUub25Nb3ZlLmFkZCh0aGlzLnJlbW92ZUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICB0aGlzLnJlbW92ZShkcmFnZ2FibGUpXG4gICAgfSlcblxuICAgIHRoaXMub25BZGQuZmlyZShkcmFnZ2FibGUpXG4gIH1cblxuICByZW1vdmUoZHJhZ2dhYmxlKSB7XG4gICAgZHJhZ2dhYmxlLm9uTW92ZS5yZW1vdmUodGhpcy5yZW1vdmVIYW5kbGVyKVxuXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSlcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5zcGxpY2UoaW5kZXgsIDEpXG5cbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgfSksIFtdKVxuXG4gICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBbXSlcbiAgICB0aGlzLm9uUmVtb3ZlLmZpcmUoZHJhZ2dhYmxlKVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUubW92ZShkcmFnZ2FibGUuaW5pdFBvc2l0aW9uLCAwLCB0cnVlLCB0cnVlKVxuICAgICAgdGhpcy5vblJlbW92ZS5maXJlKGRyYWdnYWJsZSlcbiAgICB9KVxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzID0gW11cbiAgfVxuXG4gIGdldFNvcnRlZERyYWdnYWJsZXMoKSB7XG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuc2xpY2UoKVxuICB9XG59XG5cblRhcmdldC5vbkNyZWF0ZSA9IG5ldyBEcmFnZWUuRXZlbnQoVGFyZ2V0LCB7IGlzUmV2ZXJzZTogdHJ1ZSwgaXNTdG9wT25UcnVlOiB0cnVlIH0pXG5UYXJnZXQub25DcmVhdGUuYWRkKGFkZFRvRGVmYXVsdFNjb3BlKVxuXG5leHBvcnQgeyBUYXJnZXQgfVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGhhc0NsYXNzKGVsZW1lbnQsIGMpIHtcbiAgY29uc3QgcmUgPSBuZXcgUmVnRXhwKCcoXnxcXFxccyknICsgYyArICcoXFxcXHN8JCknLCAnZycpXG4gIHJldHVybiAocmUudGVzdChlbGVtZW50LmNsYXNzTmFtZSkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRDbGFzcyhlbGVtZW50LCBjKSB7XG4gIGlmICghaGFzQ2xhc3MoZWxlbWVudCwgYykpIHtcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IChlbGVtZW50LmNsYXNzTmFtZSArICcgJyArIGMpLnJlcGxhY2UoL1xccysvZywgJyAnKS5yZXBsYWNlKC8oXiB8ICQpL2csICcnKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDbGFzcyhlbGVtZW50LCBjKSB7XG4gIGNvbnN0IHJlID0gbmV3IFJlZ0V4cCgnKF58XFxcXHMpJyArIGMgKyAnKFxcXFxzfCQpJywgJ2cnKVxuICBlbGVtZW50LmNsYXNzTmFtZSA9IGVsZW1lbnQuY2xhc3NOYW1lLnJlcGxhY2UocmUsICckMScpLnJlcGxhY2UoL1xccysvZywgJyAnKS5yZXBsYWNlKC8oXiB8ICQpL2csICcnKVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0RGVmYXVsdFBhcmVudChlbGVtZW50KSB7XG4gIGxldCBwYXJlbnQgPSBlbGVtZW50LnBhcmVudE5vZGVcbiAgd2hpbGUgKHBhcmVudC5wYXJlbnROb2RlICYmIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHBhcmVudClbJ3Bvc2l0aW9uJ10gPT09ICdzdGF0aWMnKSB7XG4gICAgcGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGVcbiAgfVxuICByZXR1cm4gcGFyZW50XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByYW5nZShzdGFydCwgc3RvcCwgc3RlcCkge1xuICBjb25zdCByZXN1bHQgPSBbXVxuICBpZiAodHlwZW9mIHN0b3AgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgc3RvcCA9IHN0YXJ0XG4gICAgc3RhcnQgPSAwXG4gIH1cbiAgaWYgKHR5cGVvZiBzdGVwID09PSAndW5kZWZpbmVkJykge1xuICAgIHN0ZXAgPSAxXG4gIH1cbiAgaWYgKChzdGVwID4gMCAmJiBzdGFydCA+PSBzdG9wKSB8fCAoc3RlcCA8IDAgJiYgc3RhcnQgPD0gc3RvcCkpIHtcbiAgICByZXR1cm4gW11cbiAgfVxuICBmb3IgKGxldCBpID0gc3RhcnQ7IHN0ZXAgPiAwID8gaSA8IHN0b3AgOiBpID4gc3RvcDsgaSArPSBzdGVwKSB7XG4gICAgcmVzdWx0LnB1c2goaSlcbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG4iXSwic291cmNlUm9vdCI6IiJ9