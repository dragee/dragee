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
/*! exports provided: arcSliders, ArcSlider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arcSliders", function() { return arcSliders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArcSlider", function() { return ArcSlider; });
/* harmony import */ var _geometry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./geometry */ "./src/geometry.js");
/* harmony import */ var _draggable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./draggable */ "./src/draggable.js");
/* harmony import */ var _bound__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bound */ "./src/bound.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var arcSliders = [];

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
    arcSliders.push(this);
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
/*! exports provided: Draggable, draggables, events */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Draggable", function() { return Draggable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "draggables", function() { return draggables; });
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
      this.element.addEventListener(touchEvents.start, this._dragStart);
      this.element.addEventListener(mouseEvents.start, this._dragStart);

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
      this.element.removeEventListener(touchEvents.start, this._dragStart);
      this.element.removeEventListener(mouseEvents.start, this._dragStart);
      this.element.removeEventListener(touchEvents.move, this._dragMove);
      this.element.removeEventListener(mouseEvents.move, this._dragMove);
      this.element.removeEventListener(touchEvents.end, this._dragEnd);
      this.element.removeEventListener(mouseEvents.end, this._dragEnd);
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
/*! exports provided: targets, Target */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "targets", function() { return targets; });
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

var targets = [],
    addToDefaultScope = function addToDefaultScope(target) {
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
    targets.push(this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9EcmFnZWUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0RyYWdlZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9EcmFnZWUvLi9ub2RlX21vZHVsZXMvZGVzYW5kcm8tZ2V0LXN0eWxlLXByb3BlcnR5L2dldC1zdHlsZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9ub2RlX21vZHVsZXMvcmVtb3ZlLWFycmF5LWl0ZW1zL2Rpc3QvcmVtb3ZlLWFycmF5LWl0ZW1zLmVzbS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvYXJjc2xpZGVyLmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy9ib3VuZC5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvZHJhZ2dhYmxlLmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy9ldmVudC5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvZ2VvbWV0cnkuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL3Bvc2l0aW9uaW5nLmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy9zY29wZS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvdGFyZ2V0LmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy91dGlscy9jbGFzc2VzLmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy91dGlscy9nZXRkZWZhdWx0cGFyZW50LmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy91dGlscy9yYW5nZS5qcyJdLCJuYW1lcyI6WyJhcmNTbGlkZXJzIiwiQXJjU2xpZGVyIiwiYXJlYSIsImVsZW1lbnQiLCJvcHRpb25zIiwiYXJlYVJlY3RhbmdsZSIsIkdlb21ldHJ5IiwiY3JlYXRlUmVjdGFuZ2xlRnJvbUVsZW1lbnQiLCJoYWxmU2l6ZSIsImdldFNpemVPZkVsZW1lbnQiLCJtdWx0IiwiT2JqZWN0IiwiYXNzaWduIiwiY2VudGVyIiwiZ2V0Q2VudGVyIiwicmFkaXVzIiwiZ2V0TWluU2lkZSIsInN0YXJ0QW5nbGUiLCJNYXRoIiwiUEkiLCJlbmRBbmdsZSIsImFuZ2xlcyIsIm9uQ2hhbmdlIiwidGltZSIsInNoaWZ0ZWRDZW50ZXIiLCJzdWIiLCJwdXNoIiwiaW5pdCIsImFuZ2xlIiwicG9zaXRpb24iLCJnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0iLCJib3VuZCIsImJvdW5kVG9BcmMiLCJkcmFnZ2FibGUiLCJEcmFnZ2FibGUiLCJwYXJlbnQiLCJvbk1vdmUiLCJjaGFuZ2UiLCJnZXRBbmdsZSIsInVwZGF0ZUFuZ2xlIiwibm9ybWFsaXplQW5nbGUiLCJtb3ZlIiwiYm91bmRUb1JlY3RhbmdsZSIsInJlY3RhbmdsZSIsInBvaW50Iiwic2l6ZSIsImNhbGNQb2ludCIsImNsb25lIiwicmVjdFAyIiwiZ2V0UDMiLCJ4IiwieSIsImJvdW5kVG9FbGVtZW50IiwicmV0RnVuYyIsImFwcGx5IiwiYXJndW1lbnRzIiwicmVmcmVzaCIsImJvdW5kVG9MaW5lWCIsInN0YXJ0WSIsImVuZFkiLCJib3VuZFRvTGluZVkiLCJzdGFydFgiLCJlbmRYIiwiYm91bmRUb0xpbmUiLCJzdGFydCIsImVuZCIsImFscGhhIiwiYXRhbjIiLCJiZXRhIiwic29tZUsiLCJjb3NCZXRhIiwiY29zIiwic2luQmV0YSIsInNpbiIsInBvaW50MiIsIlBvaW50IiwibmV3RW5kIiwiZ2V0UG9pbnRJbkxpbmVCeUxlbmdodCIsInBvaW50Q3Jvc3NpbmciLCJkaXJlY3RDcm9zc2luZyIsImJvdW5kVG9DaXJjbGUiLCJfc2l6ZSIsImJvdW5kZWRQb2ludCIsInN0YXJ0QWdsZSIsImJvdW5kU3RhcnRBbmdsZSIsImJvdW5kRW5kdEFuZ2xlIiwiYm91bmRBbmdsZSIsIkRyYWdlZSIsIkV2ZW50IiwiaXNUb3VjaCIsIndpbmRvdyIsIm1vdXNlRXZlbnRzIiwidG91Y2hFdmVudHMiLCJldmVudHMiLCJkcmFnZ2FibGVzIiwidHJhbnNmb3JtUHJvcGVydHkiLCJnZXRTdHlsZVByb3BlcnR5IiwidHJhbnNpdGlvblByb3BlcnR5IiwiZ2V0VG91Y2hCeUlEIiwidG91Y2hJZCIsImkiLCJjaGFuZ2VkVG91Y2hlcyIsImxlbmd0aCIsImlkZW50aWZpZXIiLCJwcmV2ZW50RG91YmxlSW5pdCIsIm1lc3NhZ2UiLCJzb21lIiwiZXhpc3RpbmciLCJhZGRUb0RlZmF1bHRTY29wZSIsImRlZmF1bHRTY29wZSIsImFkZERyYWdnYWJsZSIsImdldERlZmF1bHRQYXJlbnQiLCJ0YXJnZXRzIiwic3RhcnRGaWx0ZXIiLCJpc0NvbnRlbnRCb3hTaXplIiwib25FbmQiLCJpc1JldmVyc2UiLCJpc1N0b3BPblRydWUiLCJvblN0YXJ0IiwiYWRkIiwib25DcmVhdGUiLCJmaXJlIiwiX2VuYWJsZSIsIm9mZnNldCIsImdldE9mZnNldCIsImZpeFBvc2l0aW9uIiwiaW5pdFBvc2l0aW9uIiwiX2RyYWdTdGFydCIsImRyYWdTdGFydCIsImJpbmQiLCJfZHJhZ01vdmUiLCJkcmFnTW92ZSIsIl9kcmFnRW5kIiwiZHJhZ0VuZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJfcmVjYWx1bGF0ZSIsIl90cmFuc2Zvcm1Qb3NpdGlvbiIsImdldFNpemUiLCJ0cmFuc2Zvcm0iLCJzdHlsZSIsInRyYW5zbGF0ZUNzcyIsInVhIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwibXNpZSIsImluZGV4T2YiLCJ0ZXN0IiwicmVwbGFjZSIsImlzRml4IiwiaXNTaWxlbnQiLCJkZXRlcm1pbmVEaXJlY3Rpb24iLCJfc2V0VHJhbnNsYXRlIiwic2V0UG9zaXRpb24iLCJnZXRQb3NpdGlvbiIsImxlZnREaXJlY3Rpb24iLCJyaWdodERpcmVjdGlvbiIsInVwRGlyZWN0aW9uIiwiZG93bkRpcmVjdGlvbiIsImV2ZW50IiwiY3VycmVudEV2ZW50IiwiaXNUb3VjaEV2ZW50IiwiVG91Y2hFdmVudCIsIl9zdGFydFRvdWNoUG9pbnQiLCJwYWdlWCIsImNsaWVudFgiLCJwYWdlWSIsImNsaWVudFkiLCJfc3RhcnRQb3NpdGlvbiIsIl90b3VjaElkIiwic3RvcFByb3BhZ2F0aW9uIiwidGFyZ2V0IiwiSFRNTElucHV0RWxlbWVudCIsInByZXZlbnREZWZhdWx0IiwiZm9jdXMiLCJkb2N1bWVudCIsImlzRHJhZ2dpbmciLCJhZGRDbGFzcyIsInRvdWNoIiwidG91Y2hQb2ludCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZW1vdmVDbGFzcyIsIlJlY3RhbmdsZSIsInJlc2V0IiwiZW5hYmxlIiwiY29udGV4dCIsImZ1bmNzIiwicHJvdG90eXBlIiwiYXJncyIsInNsaWNlIiwiY2FsbCIsImZzIiwicmV2ZXJzZSIsInJldFZhbHVlIiwiZiIsInVuc2hpZnQiLCJyZW1vdmUiLCJpbmRleCIsInNwbGljZSIsIl9mIiwicCIsImsiLCJyZWN0IiwibWluIiwibWF4IiwiaW5jbHVkZVBvaW50IiwiYXhpcyIsInNlbEF4aXMiLCJjcm9zc1JlY3RhbmdsZSIsImFuZCIsInRoaXNDZW50ZXIiLCJyZWN0Q2VudGVyIiwic2lnbiIsImVsIiwicXVlcnlTZWxlY3RvciIsImxlZnQiLCJ0b3AiLCJ3aWR0aCIsImhlaWdodCIsImdldERpc3RhbmNlIiwicDEiLCJwMiIsImR4IiwiZHkiLCJzcXJ0IiwiZGlzdGFuY2UiLCJnZXRYRGlmZmVyZW5jZSIsImFicyIsImdldFlEaWZmZXJlbmNlIiwidHJhbnNmb3JtZWRTcGFjZURpc3RhbmNlRmFjdG9yeSIsInBvdyIsImluZGV4T2ZOZWFyZXN0UG9pbnQiLCJhcnIiLCJ2YWwiLCJ0ZW1wIiwiYm91bmRQb2ludCIsIkwxUDEiLCJMMVAyIiwiTDJQMSIsIkwyUDIiLCJrMSIsImsyIiwiYjEiLCJiMiIsImJvdW5kVG9TZWdtZW50IiwiTFAxIiwiTFAyIiwiUCIsIkEiLCJCIiwiQVAiLCJBQiIsImFiMiIsImFwX2FiIiwidCIsImdldFBvaW50SW5MaW5lIiwicGVyY2VudCIsImxlbmdodCIsImlzQ29uc2lkZXJUcmFuc2xhdGUiLCJwYXJlbnROb2RlIiwiZ2V0U3VtVmFsdWVPZlN0eWxlUnVsZSIsInJ1bGVzIiwicmVkdWNlIiwic3VtIiwicnVsZSIsInBhcnNlSW50IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImVsUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInBhcmVudFJlY3QiLCJhZGRQb2ludFRvQm91bmRQb2ludHMiLCJib3VuZHBvaW50cyIsImlzUmlnaHQiLCJyZXN1bHQiLCJmaWx0ZXIiLCJiUG9pbnQiLCJkaWZmIiwidG9SYWRpYW4iLCJ0b0RlZ3JlZSIsImRtaW4iLCJkbWF4IiwiZ2V0QW5nbGVEaWZmIiwiZ2V0TmVhcmVzdEFuZ2xlIiwidmFsdWUiLCJtaW5BbmdsZSIsIm1heEFuZ2xlIiwicG9zaXRpb25UeXBlIiwibm90Q3Jvc3NpbmciLCJmbG9hdExlZnQiLCJmbG9hdFJpZ2h0IiwicG9zaXRpb25GYWN0b3J5IiwidHlwZSIsIl9vcHRpb25zIiwicmVjdGFuZ2xlTGlzdCIsImluZGV4ZXNPZk5ld3MiLCJib3VuZFJlY3QiLCJzdGF0aWNSZWN0YW5nbGVJbmRleGVzIiwiaW5kZXhlcyIsIl9yZWN0IiwiZm9yRWFjaCIsInJlbW92YWJsZSIsImluZGV4T2ZTdGF0aWMiLCJzdGF0aWNSZWN0IiwibW92ZVRvQm91bmQiLCJnZXRTcXVhcmUiLCJwYWRkaW5nVG9wTGVmdCIsInBhZGRpbmdCb3R0b21SaWdodCIsInlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyIsIl9pbmRleGVzT2ZOZXdzIiwiZ2V0UDIiLCJib3VuZGFyeVBvaW50cyIsImlzVmFsaWQiLCJhc3NpbmciLCJwYWRkaW5nVG9wUmlnaHQiLCJwYWRkaW5nQm90dG9tTGVmdCIsInBhZGRpbmdUb3BOZWdSaWdodCIsInBhZGRpbmdCb3R0b21OZWdMZWZ0IiwiZ2V0UmlnaHRUb3BQb2ludCIsIl9pbmRleCIsImdldExlZnRCb3R0b21Qb2ludCIsImdldFA0Iiwic29ydGluZ0ZhY3RvcnkiLCJvbGRPYmpzTGlzdCIsIm5ld09ianMiLCJpbmRleE9mTmV3cyIsIm9ianNMaXN0IiwiY29uY2F0Iiwib2JqIiwibmV3TGlzdCIsImxpc3RPbGRQb3NpdGlvbiIsIm1hcCIsIm5ld09iaiIsInNjb3BlcyIsIlNjb3BlIiwic2NvcGUiLCJyZW1vdmVJdGVtcyIsInRpbWVFbmQiLCJzaG90VGFyZ2V0cyIsImNhdGNoRHJhZ2dhYmxlIiwic29ydCIsImEiLCJiIiwiZ2V0UmVjdGFuZ2xlIiwiaW5uZXJEcmFnZ2FibGVzIiwicG9zaXRpb25zIiwidGFyZ2V0SW5kZXhlcyIsImZuIiwiY3VycmVudFNjb3BlIiwiYWRkRHJhZ2dhYmxlVG9TY29wZSIsImFkZFRhcmdldFRvU2NvcGUiLCJhZGRUYXJnZXQiLCJUYXJnZXQiLCJzY29wZUZhY3RvcnkiLCJwYXJlbnRFbGVtZW50IiwiZHJhZ2dhYmxlRWxlbWVudHMiLCJ0YXJnZXRFbGVtZW50cyIsImRyYWdnYWJsZU9wdGlvbnMiLCJ0YXJnZXRPcHRpb25zIiwic2NvcGVPcHRpb25zIiwiQXJyYXkiLCJ0aW1lRXhjYW5nZSIsInNvcnRpbmciLCJwb3NpdGlvbmluZyIsIm9uQWRkIiwiYmVmb3JlQWRkIiwib25SZW1vdmUiLCJyZWN0YW5nbGVzIiwiaW5kZXhlc09mTmV3IiwicmFuZ2UiLCJ0YXJnZXRSZWN0YW5nbGUiLCJkcmFnZ2FibGVTcXVhcmUiLCJuZXdEcmFnZ2FibGVzSW5kZXgiLCJhZGRSZW1vdmVPbk1vdmUiLCJwdXNoSW5uZXJEcmFnZ2FibGUiLCJyZW1vdmVIYW5kbGVyIiwiaGFzQ2xhc3MiLCJjIiwicmUiLCJSZWdFeHAiLCJjbGFzc05hbWUiLCJzdG9wIiwic3RlcCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNB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WjtBQUNEOztBQUNELFNBQU80SyxNQUFQO0FBQ0QsQyIsImZpbGUiOiJhcmNzbGlkZXIuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJEcmFnZWVcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiRHJhZ2VlXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkRyYWdlZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvYXJjc2xpZGVyLmpzXCIpO1xuIiwiLyohXG4gKiBnZXRTdHlsZVByb3BlcnR5IHYxLjAuNFxuICogb3JpZ2luYWwgYnkga2FuZ2F4XG4gKiBodHRwOi8vcGVyZmVjdGlvbmtpbGxzLmNvbS9mZWF0dXJlLXRlc3RpbmctY3NzLXByb3BlcnRpZXMvXG4gKiBNSVQgbGljZW5zZVxuICovXG5cbi8qanNoaW50IGJyb3dzZXI6IHRydWUsIHN0cmljdDogdHJ1ZSwgdW5kZWY6IHRydWUgKi9cbi8qZ2xvYmFsIGRlZmluZTogZmFsc2UsIGV4cG9ydHM6IGZhbHNlLCBtb2R1bGU6IGZhbHNlICovXG5cbiggZnVuY3Rpb24oIHdpbmRvdyApIHtcblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgcHJlZml4ZXMgPSAnV2Via2l0IE1veiBtcyBNcyBPJy5zcGxpdCgnICcpO1xudmFyIGRvY0VsZW1TdHlsZSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZTtcblxuZnVuY3Rpb24gZ2V0U3R5bGVQcm9wZXJ0eSggcHJvcE5hbWUgKSB7XG4gIGlmICggIXByb3BOYW1lICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIHRlc3Qgc3RhbmRhcmQgcHJvcGVydHkgZmlyc3RcbiAgaWYgKCB0eXBlb2YgZG9jRWxlbVN0eWxlWyBwcm9wTmFtZSBdID09PSAnc3RyaW5nJyApIHtcbiAgICByZXR1cm4gcHJvcE5hbWU7XG4gIH1cblxuICAvLyBjYXBpdGFsaXplXG4gIHByb3BOYW1lID0gcHJvcE5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBwcm9wTmFtZS5zbGljZSgxKTtcblxuICAvLyB0ZXN0IHZlbmRvciBzcGVjaWZpYyBwcm9wZXJ0aWVzXG4gIHZhciBwcmVmaXhlZDtcbiAgZm9yICggdmFyIGk9MCwgbGVuID0gcHJlZml4ZXMubGVuZ3RoOyBpIDwgbGVuOyBpKysgKSB7XG4gICAgcHJlZml4ZWQgPSBwcmVmaXhlc1tpXSArIHByb3BOYW1lO1xuICAgIGlmICggdHlwZW9mIGRvY0VsZW1TdHlsZVsgcHJlZml4ZWQgXSA9PT0gJ3N0cmluZycgKSB7XG4gICAgICByZXR1cm4gcHJlZml4ZWQ7XG4gICAgfVxuICB9XG59XG5cbi8vIHRyYW5zcG9ydFxuaWYgKCB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gIC8vIEFNRFxuICBkZWZpbmUoIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBnZXRTdHlsZVByb3BlcnR5O1xuICB9KTtcbn0gZWxzZSBpZiAoIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyApIHtcbiAgLy8gQ29tbW9uSlMgZm9yIENvbXBvbmVudFxuICBtb2R1bGUuZXhwb3J0cyA9IGdldFN0eWxlUHJvcGVydHk7XG59IGVsc2Uge1xuICAvLyBicm93c2VyIGdsb2JhbFxuICB3aW5kb3cuZ2V0U3R5bGVQcm9wZXJ0eSA9IGdldFN0eWxlUHJvcGVydHk7XG59XG5cbn0pKCB3aW5kb3cgKTtcbiIsIi8qKlxuICogUmVtb3ZlIGEgcmFuZ2Ugb2YgaXRlbXMgZnJvbSBhbiBhcnJheVxuICpcbiAqIEBmdW5jdGlvbiByZW1vdmVJdGVtc1xuICogQHBhcmFtIHtBcnJheTwqPn0gYXJyIFRoZSB0YXJnZXQgYXJyYXlcbiAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydElkeCBUaGUgaW5kZXggdG8gYmVnaW4gcmVtb3ZpbmcgZnJvbSAoaW5jbHVzaXZlKVxuICogQHBhcmFtIHtudW1iZXJ9IHJlbW92ZUNvdW50IEhvdyBtYW55IGl0ZW1zIHRvIHJlbW92ZVxuICovXG5mdW5jdGlvbiByZW1vdmVJdGVtcyAoYXJyLCBzdGFydElkeCwgcmVtb3ZlQ291bnQpIHtcbiAgdmFyIGksIGxlbmd0aCA9IGFyci5sZW5ndGg7XG5cbiAgaWYgKHN0YXJ0SWR4ID49IGxlbmd0aCB8fCByZW1vdmVDb3VudCA9PT0gMCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgcmVtb3ZlQ291bnQgPSAoc3RhcnRJZHggKyByZW1vdmVDb3VudCA+IGxlbmd0aCA/IGxlbmd0aCAtIHN0YXJ0SWR4IDogcmVtb3ZlQ291bnQpO1xuXG4gIHZhciBsZW4gPSBsZW5ndGggLSByZW1vdmVDb3VudDtcblxuICBmb3IgKGkgPSBzdGFydElkeDsgaSA8IGxlbjsgKytpKSB7XG4gICAgYXJyW2ldID0gYXJyW2kgKyByZW1vdmVDb3VudF07XG4gIH1cblxuICBhcnIubGVuZ3RoID0gbGVuO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZW1vdmVJdGVtcztcbiIsImltcG9ydCB7IEdlb21ldHJ5IH0gZnJvbSAnLi9nZW9tZXRyeSdcbmltcG9ydCB7IERyYWdnYWJsZSB9IGZyb20gJy4vZHJhZ2dhYmxlJ1xuaW1wb3J0IHsgYm91bmRUb0FyYyB9IGZyb20gJy4vYm91bmQnXG5cbmNvbnN0IGFyY1NsaWRlcnMgPSBbXVxuXG5jbGFzcyBBcmNTbGlkZXIge1xuICBjb25zdHJ1Y3RvcihhcmVhLCBlbGVtZW50LCBvcHRpb25zPXt9KSB7XG4gICAgY29uc3QgYXJlYVJlY3RhbmdsZSA9IEdlb21ldHJ5LmNyZWF0ZVJlY3RhbmdsZUZyb21FbGVtZW50KGFyZWEsIGFyZWEpXG4gICAgY29uc3QgaGFsZlNpemUgPSBHZW9tZXRyeS5nZXRTaXplT2ZFbGVtZW50KGVsZW1lbnQpLm11bHQoMC41KVxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY2VudGVyOiBhcmVhUmVjdGFuZ2xlLmdldENlbnRlcigpLFxuICAgICAgcmFkaXVzOiBhcmVhUmVjdGFuZ2xlLmdldE1pblNpZGUoKSAvIDIsXG4gICAgICBzdGFydEFuZ2xlOiBNYXRoLlBJLFxuICAgICAgZW5kQW5nbGU6IDAsXG4gICAgICBhbmdsZXM6IFtNYXRoLlBJLCAtTWF0aC5QSSAvIDQsIDAsIE1hdGguUEkgLyA0LCBNYXRoLlBJIC8gMl0sXG4gICAgICBvbkNoYW5nZTogZnVuY3Rpb24oKSB7fSxcbiAgICAgIHRpbWU6IDUwMFxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0aGlzLnNoaWZ0ZWRDZW50ZXIgPSB0aGlzLm9wdGlvbnMuY2VudGVyLnN1YihoYWxmU2l6ZSlcbiAgICB0aGlzLm9uQ2hhbmdlID0gdGhpcy5vcHRpb25zLm9uQ2hhbmdlXG4gICAgYXJjU2xpZGVycy5wdXNoKHRoaXMpXG4gICAgdGhpcy5hcmVhID0gYXJlYVxuICAgIHRoaXMuaW5pdChlbGVtZW50KVxuICB9XG5cbiAgaW5pdChlbGVtZW50KSB7XG4gICAgY29uc3QgYW5nbGUgPSB0aGlzLm9wdGlvbnMuc3RhcnRBbmdsZVxuICAgIGNvbnN0IHBvc2l0aW9uID0gR2VvbWV0cnkuZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKFxuICAgICAgYW5nbGUsXG4gICAgICB0aGlzLm9wdGlvbnMucmFkaXVzLFxuICAgICAgdGhpcy5zaGlmdGVkQ2VudGVyXG4gICAgKVxuICAgIGNvbnN0IGJvdW5kID0gYm91bmRUb0FyYyhcbiAgICAgIHRoaXMuc2hpZnRlZENlbnRlcixcbiAgICAgIHRoaXMub3B0aW9ucy5yYWRpdXMsXG4gICAgICB0aGlzLm9wdGlvbnMuc3RhcnRBbmdsZSxcbiAgICAgIHRoaXMub3B0aW9ucy5lbmRBbmdsZVxuICAgIClcblxuICAgIHRoaXMuYW5nbGUgPSBhbmdsZVxuICAgIHRoaXMuZHJhZ2dhYmxlID0gbmV3IERyYWdnYWJsZShlbGVtZW50LCB7XG4gICAgICBwYXJlbnQ6IHRoaXMuYXJlYSxcbiAgICAgIGJvdW5kOiBib3VuZCxcbiAgICAgIHBvc2l0aW9uOiBwb3NpdGlvbixcbiAgICAgIG9uTW92ZTogKCkgPT4ge1xuICAgICAgICB0aGlzLmNoYW5nZSgpXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHVwZGF0ZUFuZ2xlKCkge1xuICAgIHRoaXMuYW5nbGUgPSBHZW9tZXRyeS5nZXRBbmdsZSh0aGlzLnNoaWZ0ZWRDZW50ZXIsIHRoaXMuZHJhZ2dhYmxlLnBvc2l0aW9uKVxuICB9XG5cbiAgY2hhbmdlKCkge1xuICAgIHRoaXMudXBkYXRlQW5nbGUoKVxuICAgIC8vICAgICAgdmFyIGFuZ2xlID0gR2VvbWV0cnkuZ2V0TmVhcmVzdEFuZ2xlKHRoaXMub3B0aW9ucy5hbmdsZXMsIHRoaXMuYW5nbGUpO1xuICAgIC8vICAgICAgdGhpcy5zZXRBbmdsZShhbmdsZSx0aGlzLm9wdGlvbnMudGltZSk7XG4gICAgdGhpcy5vbkNoYW5nZSh0aGlzLmFuZ2xlKVxuICB9XG5cbiAgc2V0QW5nbGUoYW5nbGUsIHRpbWUpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IEdlb21ldHJ5LmdldFBvaW50RnJvbVJhZGlhbFN5c3RlbShcbiAgICAgIHRoaXMuYW5nbGUsXG4gICAgICB0aGlzLm9wdGlvbnMucmFkaXVzLFxuICAgICAgdGhpcy5zaGlmdGVkQ2VudGVyXG4gICAgKVxuICAgIHRoaXMuYW5nbGUgPSBHZW9tZXRyeS5ub3JtYWxpemVBbmdsZShhbmdsZSwgcG9zaXRpb24pXG4gICAgdGhpcy5kcmFnZ2FibGUubW92ZShwb3NpdGlvbiwgdGltZXx8MCwgdHJ1ZSwgdHJ1ZSlcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMuYW5nbGUpXG4gIH1cbn1cblxuZXhwb3J0IHsgYXJjU2xpZGVycywgQXJjU2xpZGVyIH1cbiIsImltcG9ydCB7IEdlb21ldHJ5LCBQb2ludCB9IGZyb20gJy4vZ2VvbWV0cnknXG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZFRvUmVjdGFuZ2xlKHJlY3RhbmdsZSkge1xuICByZXR1cm4gZnVuY3Rpb24ocG9pbnQsIHNpemUpIHtcbiAgICBjb25zdCBjYWxjUG9pbnQgPSBwb2ludC5jbG9uZSgpLFxuICAgICAgcmVjdFAyID0gcmVjdGFuZ2xlLmdldFAzKClcblxuICAgIGlmIChyZWN0YW5nbGUucG9zaXRpb24ueCA+IGNhbGNQb2ludC54KSB7XG4gICAgICAoY2FsY1BvaW50LnggPSByZWN0YW5nbGUucG9zaXRpb24ueClcbiAgICB9XG4gICAgaWYgKHJlY3RhbmdsZS5wb3NpdGlvbi55ID4gY2FsY1BvaW50LnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gcmVjdGFuZ2xlLnBvc2l0aW9uLnlcbiAgICB9XG4gICAgaWYgKHJlY3RQMi54IDwgY2FsY1BvaW50LnggKyBzaXplLngpIHtcbiAgICAgIGNhbGNQb2ludC54ID0gcmVjdFAyLnggLSBzaXplLnhcbiAgICB9XG4gICAgaWYgKHJlY3RQMi55IDwgY2FsY1BvaW50LnkgKyBzaXplLnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gcmVjdFAyLnkgLSBzaXplLnlcbiAgICB9XG5cbiAgICByZXR1cm4gY2FsY1BvaW50XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kVG9FbGVtZW50KGVsZW1lbnQsIHBhcmVudCkge1xuICBjb25zdCByZXRGdW5jID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGJvdW5kLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbiAgfVxuICBsZXQgYm91bmRcblxuICByZXRGdW5jLnJlZnJlc2ggPSBmdW5jdGlvbigpIHtcbiAgICBib3VuZCA9IGJvdW5kVG9SZWN0YW5nbGUoR2VvbWV0cnkuY3JlYXRlUmVjdGFuZ2xlRnJvbUVsZW1lbnQoZWxlbWVudCwgcGFyZW50KSlcbiAgfVxuXG4gIHJldEZ1bmMucmVmcmVzaCgpXG4gIHJldHVybiByZXRGdW5jXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZFRvTGluZVgoeCwgc3RhcnRZLCBlbmRZKSB7XG4gIHJldHVybiBmdW5jdGlvbihwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IGNhbGNQb2ludCA9IHBvaW50LmNsb25lKClcbiAgICBjYWxjUG9pbnQueCA9IHhcbiAgICBpZiAoc3RhcnRZID4gY2FsY1BvaW50LnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gc3RhcnRZXG4gICAgfVxuICAgIGlmIChlbmRZIDwgY2FsY1BvaW50LnkgKyBzaXplLnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gZW5kWSAtIHNpemUueVxuICAgIH1cblxuICAgIHJldHVybiBjYWxjUG9pbnRcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRUb0xpbmVZKHksIHN0YXJ0WCwgZW5kWCkge1xuICByZXR1cm4gZnVuY3Rpb24ocG9pbnQsIHNpemUpIHtcbiAgICBjb25zdCBjYWxjUG9pbnQgPSBwb2ludC5jbG9uZSgpXG4gICAgY2FsY1BvaW50LnkgPSB5XG4gICAgaWYgKHN0YXJ0WCA+IGNhbGNQb2ludC54KSB7XG4gICAgICBjYWxjUG9pbnQueCA9IHN0YXJ0WFxuICAgIH1cbiAgICBpZiAoZW5kWCA8IGNhbGNQb2ludC54ICsgc2l6ZS54KSB7XG4gICAgICBjYWxjUG9pbnQueCA9IGVuZFggLSBzaXplLnhcbiAgICB9XG4gICAgcmV0dXJuIGNhbGNQb2ludFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZFRvTGluZShzdGFydCwgZW5kKSB7XG4gIGNvbnN0IGFscGhhID0gTWF0aC5hdGFuMihlbmQueSAtIHN0YXJ0LnksIGVuZC54IC0gc3RhcnQueCksXG4gICAgYmV0YSA9IGFscGhhICsgTWF0aC5QSSAvIDIsXG4gICAgc29tZUsgPSAxMCxcbiAgICBjb3NCZXRhID0gTWF0aC5jb3MoYmV0YSksXG4gICAgc2luQmV0YSA9IE1hdGguc2luKGJldGEpXG5cbiAgcmV0dXJuIGZ1bmN0aW9uKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgcG9pbnQyID0gbmV3IFBvaW50KHBvaW50LnggKyBzb21lSyAqIGNvc0JldGEsIHBvaW50LnkgKyBzb21lSyAqIHNpbkJldGEpLFxuICAgICAgbmV3RW5kID0gR2VvbWV0cnkuZ2V0UG9pbnRJbkxpbmVCeUxlbmdodChlbmQsIHN0YXJ0LCBzaXplLngpXG4gICAgbGV0IHBvaW50Q3Jvc3NpbmcgPSBHZW9tZXRyeS5kaXJlY3RDcm9zc2luZyhzdGFydCwgZW5kLCBwb2ludCwgcG9pbnQyKVxuXG4gICAgcG9pbnRDcm9zc2luZyA9IEdlb21ldHJ5LmJvdW5kVG9MaW5lKHN0YXJ0LCBuZXdFbmQsIHBvaW50Q3Jvc3NpbmcpXG4gICAgcmV0dXJuIHBvaW50Q3Jvc3NpbmdcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRUb0NpcmNsZShjZW50ZXIsIHJhZGl1cykge1xuICByZXR1cm4gZnVuY3Rpb24ocG9pbnQsIF9zaXplKSB7XG4gICAgY29uc3QgYm91bmRlZFBvaW50ID0gR2VvbWV0cnkuZ2V0UG9pbnRJbkxpbmVCeUxlbmdodChjZW50ZXIsIHBvaW50LCByYWRpdXMpXG4gICAgcmV0dXJuIGJvdW5kZWRQb2ludFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZFRvQXJjKGNlbnRlciwgcmFkaXVzLCBzdGFydEFnbGUsIGVuZEFuZ2xlKSB7XG4gIHJldHVybiBmdW5jdGlvbihwb2ludCwgX3NpemUpIHtcbiAgICBjb25zdCBib3VuZFN0YXJ0QW5nbGUgPSB0eXBlb2Ygc3RhcnRBZ2xlID09PSAnZnVuY3Rpb24nID8gc3RhcnRBZ2xlKCkgOiBzdGFydEFnbGVcbiAgICBjb25zdCBib3VuZEVuZHRBbmdsZSA9IHR5cGVvZiBzdGFydEFnbGUgPT09ICdmdW5jdGlvbicgPyBlbmRBbmdsZSgpIDogZW5kQW5nbGVcblxuICAgIGxldCBhbmdsZSA9IEdlb21ldHJ5LmdldEFuZ2xlKGNlbnRlciwgcG9pbnQpXG4gICAgYW5nbGUgPSBHZW9tZXRyeS5ub3JtYWxpemVBbmdsZShhbmdsZSlcbiAgICBhbmdsZSA9IEdlb21ldHJ5LmJvdW5kQW5nbGUoYm91bmRTdGFydEFuZ2xlLCBib3VuZEVuZHRBbmdsZSwgYW5nbGUpXG4gICAgcmV0dXJuIEdlb21ldHJ5LmdldFBvaW50RnJvbVJhZGlhbFN5c3RlbShhbmdsZSwgcmFkaXVzLCBjZW50ZXIpXG4gIH1cbn1cbiIsImltcG9ydCB7IGFkZENsYXNzLCByZW1vdmVDbGFzcyB9IGZyb20gJy4vdXRpbHMvY2xhc3NlcydcbmltcG9ydCBnZXREZWZhdWx0UGFyZW50IGZyb20gJy4vdXRpbHMvZ2V0ZGVmYXVsdHBhcmVudCdcbmltcG9ydCBFdmVudCBmcm9tICcuL2V2ZW50J1xuaW1wb3J0IGdldFN0eWxlUHJvcGVydHkgZnJvbSAnZGVzYW5kcm8tZ2V0LXN0eWxlLXByb3BlcnR5J1xuaW1wb3J0IHsgYm91bmRUb0VsZW1lbnQgfSBmcm9tICcuL2JvdW5kJ1xuaW1wb3J0IHsgR2VvbWV0cnksIFBvaW50LCBSZWN0YW5nbGUgfSBmcm9tICcuL2dlb21ldHJ5J1xuaW1wb3J0IHsgZGVmYXVsdFNjb3BlIH0gZnJvbSAnLi9zY29wZSdcblxuY29uc3QgRHJhZ2VlID0geyBFdmVudCB9IC8vdG9kbyByZW1vdmUgYWZ0ZXIgcmVmYWN0b3JlXG5cbmNvbnN0IGlzVG91Y2ggPSAnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3csIG1vdXNlRXZlbnRzID0ge1xuICAgIHN0YXJ0OiAnbW91c2Vkb3duJyxcbiAgICBtb3ZlOiAnbW91c2Vtb3ZlJyxcbiAgICBlbmQ6ICdtb3VzZXVwJ1xuICB9LCB0b3VjaEV2ZW50cyA9IHtcbiAgICBzdGFydDogJ3RvdWNoc3RhcnQnLFxuICAgIG1vdmU6ICd0b3VjaG1vdmUnLFxuICAgIGVuZDogJ3RvdWNoZW5kJ1xuICB9LFxuICBldmVudHMgPSBpc1RvdWNoID8gdG91Y2hFdmVudHMgOiBtb3VzZUV2ZW50cyxcbiAgZHJhZ2dhYmxlcyA9IFtdLFxuICB0cmFuc2Zvcm1Qcm9wZXJ0eSA9IGdldFN0eWxlUHJvcGVydHkoJ3RyYW5zZm9ybScpLFxuICB0cmFuc2l0aW9uUHJvcGVydHkgPSBnZXRTdHlsZVByb3BlcnR5KCd0cmFuc2l0aW9uJylcblxuZnVuY3Rpb24gZ2V0VG91Y2hCeUlEKGVsZW1lbnQsIHRvdWNoSWQpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50LmNoYW5nZWRUb3VjaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGVsZW1lbnQuY2hhbmdlZFRvdWNoZXNbaV0uaWRlbnRpZmllciA9PT0gdG91Y2hJZCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQuY2hhbmdlZFRvdWNoZXNbaV1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmZ1bmN0aW9uIHByZXZlbnREb3VibGVJbml0KGRyYWdnYWJsZSkge1xuICBjb25zdCBtZXNzYWdlID0gXCJmb3IgdGhpcyBlbGVtZW50IERyYWdlZS5EcmFnZ2FibGUgaXMgYWxyZWFkeSBleGlzdCwgZG9uJ3QgY3JlYXRlIGl0IHR3aWNlIFwiXG4gIGlmIChkcmFnZ2FibGVzLnNvbWUoKGV4aXN0aW5nKSA9PiBkcmFnZ2FibGUuZWxlbWVudCA9PT0gZXhpc3RpbmcuZWxlbWVudCkpIHtcbiAgICB0aHJvdyBtZXNzYWdlXG4gIH1cbiAgZHJhZ2dhYmxlcy5wdXNoKGRyYWdnYWJsZSlcbn1cblxuZnVuY3Rpb24gYWRkVG9EZWZhdWx0U2NvcGUoZHJhZ2dhYmxlKSB7XG4gIGRlZmF1bHRTY29wZS5hZGREcmFnZ2FibGUoZHJhZ2dhYmxlKVxufVxuXG5jbGFzcyBEcmFnZ2FibGUge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBvcHRpb25zPXt9KSB7XG4gICAgY29uc3QgcGFyZW50ID0gb3B0aW9ucy5wYXJlbnQgfHwgZ2V0RGVmYXVsdFBhcmVudChlbGVtZW50KVxuICAgIHRoaXMudGFyZ2V0cyA9IFtdXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBwYXJlbnQ6IHBhcmVudCxcbiAgICAgIGJvdW5kOiBib3VuZFRvRWxlbWVudChwYXJlbnQsIHBhcmVudCksXG4gICAgICBzdGFydEZpbHRlcjogZmFsc2UsXG4gICAgICBpc0NvbnRlbnRCb3hTaXplOiBmYWxzZSxcbiAgICAgIHBvc2l0aW9uOiBmYWxzZVxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0aGlzLm9uRW5kID0gbmV3IERyYWdlZS5FdmVudCh0aGlzLCB7IGlzUmV2ZXJzZTogdHJ1ZSwgaXNTdG9wT25UcnVlOiB0cnVlIH0pXG4gICAgdGhpcy5vbk1vdmUgPSBuZXcgRHJhZ2VlLkV2ZW50KHRoaXMpXG4gICAgdGhpcy5vblN0YXJ0ID0gbmV3IERyYWdlZS5FdmVudCh0aGlzKVxuXG4gICAgdGhpcy5vbkVuZC5hZGQoKCkgPT4gdGhpcy5tb3ZlKHRoaXMucG9zaXRpb24sIDAsIHRydWUsIHRydWUpKVxuXG4gICAgaWYgKG9wdGlvbnMub25FbmQpIHtcbiAgICAgIHRoaXMub25FbmQuYWRkKG9wdGlvbnMub25FbmQpXG4gICAgfVxuICAgIGlmIChvcHRpb25zLm9uTW92ZSkge1xuICAgICAgdGhpcy5vbk1vdmUuYWRkKG9wdGlvbnMub25Nb3ZlKVxuICAgIH1cbiAgICBpZiAob3B0aW9ucy5vblN0YXJ0KSB7XG4gICAgICB0aGlzLm9uU3RhcnQuYWRkKG9wdGlvbnMub25TdGFydClcbiAgICB9XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIHRoaXMuYm91bmQgPSB0aGlzLm9wdGlvbnMuYm91bmRcbiAgICBwcmV2ZW50RG91YmxlSW5pdCh0aGlzKVxuICAgIERyYWdnYWJsZS5vbkNyZWF0ZS5maXJlKHRoaXMpXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5fZW5hYmxlID0gdHJ1ZVxuICAgIHRoaXMub2Zmc2V0ID0gR2VvbWV0cnkuZ2V0T2Zmc2V0KHRoaXMuZWxlbWVudCwgdGhpcy5vcHRpb25zLnBhcmVudCwgdHJ1ZSlcbiAgICB0aGlzLmZpeFBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICBpZiAodGhpcy5vcHRpb25zLnBvc2l0aW9uKSB7XG4gICAgICB0aGlzLmluaXRQb3NpdGlvbiA9IHRoaXMub3B0aW9ucy5wb3NpdGlvblxuICAgICAgdGhpcy5tb3ZlKHRoaXMuaW5pdFBvc2l0aW9uLCAwLCB0cnVlLCB0cnVlKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmluaXRQb3NpdGlvbiA9IHRoaXMub2Zmc2V0XG4gICAgfVxuICAgIHRoaXMuX2RyYWdTdGFydCA9IHRoaXMuZHJhZ1N0YXJ0LmJpbmQodGhpcylcbiAgICB0aGlzLl9kcmFnTW92ZSA9IHRoaXMuZHJhZ01vdmUuYmluZCh0aGlzKVxuICAgIHRoaXMuX2RyYWdFbmQgPSB0aGlzLmRyYWdFbmQuYmluZCh0aGlzKVxuXG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydClcbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0KVxuXG4gICAgaWYgKHRoaXMuYm91bmQucmVmcmVzaCkge1xuICAgICAgdGhpcy5ib3VuZC5yZWZyZXNoKClcbiAgICB9XG4gIH1cblxuICByZWluaXQoKSB7XG4gICAgdGhpcy5vZmZzZXQgPSBHZW9tZXRyeS5nZXRPZmZzZXQodGhpcy5lbGVtZW50LCB0aGlzLm9wdGlvbnMucGFyZW50LCB0cnVlKVxuICAgIHRoaXMuZml4UG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICAgIGlmICh0aGlzLm9wdGlvbnMucG9zaXRpb24pIHtcbiAgICAgIHRoaXMuaW5pdFBvc2l0aW9uID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uXG4gICAgICB0aGlzLm1vdmUodGhpcy5pbml0UG9zaXRpb24sIDAsIHRydWUsIHRydWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5pdFBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICB9XG5cbiAgICBpZiAodGhpcy5ib3VuZC5yZWZyZXNoKSB7XG4gICAgICB0aGlzLmJvdW5kLnJlZnJlc2goKVxuICAgIH1cbiAgfVxuXG4gIGdldFNpemUoX3JlY2FsdWxhdGUpIHtcbiAgICByZXR1cm4gR2VvbWV0cnkuZ2V0U2l6ZU9mRWxlbWVudCh0aGlzLmVsZW1lbnQsIHRoaXMub3B0aW9ucy5pc0NvbnRlbnRCb3hTaXplKVxuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMub2Zmc2V0LmFkZCh0aGlzLl90cmFuc2Zvcm1Qb3NpdGlvbiB8fCBuZXcgUG9pbnQoMCwgMCkpXG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25cbiAgfVxuXG4gIGdldENlbnRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi5hZGQodGhpcy5nZXRTaXplKCkubXVsdCgwLjUpKVxuICB9XG5cbiAgX3NldFRyYW5zbGF0ZShwb2ludCkge1xuICAgIHRoaXMuX3RyYW5zZm9ybVBvc2l0aW9uID0gcG9pbnRcblxuICAgIGxldCB0cmFuc2Zvcm0gPSB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcGVydHldXG4gICAgbGV0IHRyYW5zbGF0ZUNzcyA9ICcgdHJhbnNsYXRlM2QoJyArIHBvaW50LnggKyAncHgsJyArIHBvaW50LnkgKyAncHgsIDBweCknXG5cbiAgICBjb25zdCB1YSA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50XG4gICAgY29uc3QgbXNpZSA9IHVhLmluZGV4T2YoJ01TSUUgJylcblxuICAgIGlmIChtc2llKSB7XG4gICAgICB0cmFuc2xhdGVDc3MgPSAnIHRyYW5zbGF0ZSgnICsgcG9pbnQueCArICdweCwnICsgcG9pbnQueSArICdweCknXG4gICAgICBpZiAoIS90cmFuc2xhdGVcXChbXildK1xcKS8udGVzdCh0cmFuc2Zvcm0pKSB7XG4gICAgICAgIHRyYW5zZm9ybSArPSB0cmFuc2xhdGVDc3NcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyYW5zZm9ybSA9IHRyYW5zZm9ybS5yZXBsYWNlKC90cmFuc2xhdGVcXChbXildK1xcKS8sIHRyYW5zbGF0ZUNzcylcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCEvdHJhbnNsYXRlM2RcXChbXildK1xcKS8udGVzdCh0cmFuc2Zvcm0pKSB7XG4gICAgICAgIHRyYW5zZm9ybSArPSB0cmFuc2xhdGVDc3NcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyYW5zZm9ybSA9IHRyYW5zZm9ybS5yZXBsYWNlKC90cmFuc2xhdGUzZFxcKFteKV0rXFwpLywgdHJhbnNsYXRlQ3NzKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wZXJ0eV0gPSB0cmFuc2Zvcm1cbiAgfVxuXG4gIG1vdmUocG9pbnQsIHRpbWU9MCwgaXNGaXg9ZmFsc2UsIGlzU2lsZW50PWZhbHNlKSB7XG4gICAgcG9pbnQgPSBwb2ludC5jbG9uZSgpXG4gICAgaWYgKGlzRml4KSB7XG4gICAgICB0aGlzLmZpeFBvc2l0aW9uID0gcG9pbnRcbiAgICB9XG5cbiAgICB0aGlzLmRldGVybWluZURpcmVjdGlvbihwb2ludClcblxuICAgIHRoaXMucG9zaXRpb24gPSBwb2ludFxuXG4gICAgaWYgKHRyYW5zaXRpb25Qcm9wZXJ0eSkge1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV0gPSB0aW1lICsgJ21zJ1xuICAgIH1cblxuICAgIHRoaXMuX3NldFRyYW5zbGF0ZShwb2ludC5zdWIodGhpcy5vZmZzZXQpKVxuICAgIGlmICghaXNTaWxlbnQpIHtcbiAgICAgIHRoaXMub25Nb3ZlLmZpcmUoKVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hQb3NpdGlvbiAoKSB7XG4gICAgdGhpcy5zZXRQb3NpdGlvbih0aGlzLmdldFBvc2l0aW9uKCkpXG4gIH1cblxuICBzZXRQb3NpdGlvbihwb2ludCkge1xuICAgIHBvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIHRoaXMucG9zaXRpb24gPSBwb2ludFxuXG4gICAgaWYgKHRyYW5zaXRpb25Qcm9wZXJ0eSkge1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV0gPSAnMG1zJ1xuICAgIH1cblxuICAgIHRoaXMuX3NldFRyYW5zbGF0ZShwb2ludC5zdWIodGhpcy5vZmZzZXQpKVxuICB9XG5cbiAgc2V0WmVyb1RyYW5zaXRpb24oKSB7XG4gICAgaWYgKHRyYW5zaXRpb25Qcm9wZXJ0eSkge1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV0gPSAnMG1zJ1xuICAgIH1cbiAgfVxuXG4gIGRldGVybWluZURpcmVjdGlvbihwb2ludCkge1xuICAgIHRoaXMubGVmdERpcmVjdGlvbiA9ICh0aGlzLnBvc2l0aW9uLnggPCBwb2ludC54KVxuICAgIHRoaXMucmlnaHREaXJlY3Rpb24gPSAodGhpcy5wb3NpdGlvbi54ID4gcG9pbnQueClcbiAgICB0aGlzLnVwRGlyZWN0aW9uID0gKHRoaXMucG9zaXRpb24ueSA+IHBvaW50LnkpXG4gICAgdGhpcy5kb3duRGlyZWN0aW9uID0gKHRoaXMucG9zaXRpb24ueSA8IHBvaW50LnkpXG4gIH1cblxuICBkcmFnU3RhcnQoZXZlbnQpIHtcbiAgICB0aGlzLmN1cnJlbnRFdmVudCA9IGV2ZW50XG4gICAgaWYgKCF0aGlzLl9lbmFibGUgfHwgKHRoaXMub3B0aW9ucy5zdGFydEZpbHRlciAmJiAhdGhpcy5vcHRpb25zLnN0YXJ0RmlsdGVyKGV2ZW50KSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGlzVG91Y2hFdmVudCA9IChpc1RvdWNoICYmIChldmVudCBpbnN0YW5jZW9mIHdpbmRvdy5Ub3VjaEV2ZW50KSlcblxuICAgIHRoaXMuX3N0YXJ0VG91Y2hQb2ludCA9IG5ldyBQb2ludChpc1RvdWNoRXZlbnQgPyBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCA6IGV2ZW50LmNsaWVudFgsIGlzVG91Y2hFdmVudCA/IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZIDogZXZlbnQuY2xpZW50WSlcblxuICAgIHRoaXMuX3N0YXJ0UG9zaXRpb24gPSB0aGlzLmdldFBvc2l0aW9uKClcbiAgICBpZiAoaXNUb3VjaEV2ZW50KSB7XG4gICAgICB0aGlzLl90b3VjaElkID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uaWRlbnRpZmllclxuICAgIH1cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGlmICghKGV2ZW50LnRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSW5wdXRFbGVtZW50IHx8XG4gICAgICAgICAgZXZlbnQudGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJbnB1dEVsZW1lbnQpKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfSBlbHNlIHtcbiAgICAgIGV2ZW50LnRhcmdldC5mb2N1cygpXG4gICAgfVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG5cbiAgICB0aGlzLmlzRHJhZ2dpbmcgPSB0cnVlXG5cbiAgICB0aGlzLm9uU3RhcnQuZmlyZShldmVudClcbiAgICBhZGRDbGFzcyh0aGlzLmVsZW1lbnQsICdhY3RpdmUnKVxuICAgIHRoaXMub25Nb3ZlLmZpcmUoZXZlbnQpXG4gIH1cblxuICBkcmFnTW92ZShldmVudCkge1xuICAgIHRoaXMuY3VycmVudEV2ZW50ID0gZXZlbnRcbiAgICBsZXQgdG91Y2hcblxuICAgIGNvbnN0IGlzVG91Y2hFdmVudCA9IChpc1RvdWNoICYmIChldmVudCBpbnN0YW5jZW9mIHdpbmRvdy5Ub3VjaEV2ZW50KSlcbiAgICBpZiAoaXNUb3VjaEV2ZW50KSB7XG4gICAgICB0b3VjaCA9IGdldFRvdWNoQnlJRChldmVudCwgdGhpcy5fdG91Y2hJZClcblxuICAgICAgaWYgKCF0b3VjaCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zdCB0b3VjaFBvaW50ID0gbmV3IFBvaW50KGlzVG91Y2hFdmVudCA/IHRvdWNoLnBhZ2VYIDogZXZlbnQuY2xpZW50WCwgaXNUb3VjaEV2ZW50ID8gdG91Y2gucGFnZVkgOiBldmVudC5jbGllbnRZKVxuICAgIGxldCBwb2ludCA9IHRoaXMuX3N0YXJ0UG9zaXRpb24uYWRkKHRvdWNoUG9pbnQuc3ViKHRoaXMuX3N0YXJ0VG91Y2hQb2ludCkpXG4gICAgcG9pbnQgPSB0aGlzLmJvdW5kKHBvaW50LCB0aGlzLmdldFNpemUoKSlcbiAgICB0aGlzLnRvdWNoUG9pbnQgPSB0b3VjaFBvaW50XG4gICAgdGhpcy5tb3ZlKHBvaW50LCAwKVxuICB9XG5cbiAgZHJhZ0VuZChldmVudCkge1xuICAgIGNvbnN0IGlzVG91Y2hFdmVudCA9IChpc1RvdWNoICYmIChldmVudCBpbnN0YW5jZW9mIHdpbmRvdy5Ub3VjaEV2ZW50KSlcblxuICAgIGlmIChpc1RvdWNoRXZlbnQgJiYgIWdldFRvdWNoQnlJRChldmVudCwgdGhpcy5fdG91Y2hJZCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIHRoaXMub25FbmQuZmlyZShldmVudClcblxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcblxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuXG4gICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2VcbiAgICByZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnQsICdhY3RpdmUnKVxuICB9XG5cbiAgZ2V0UmVjdGFuZ2xlKCkge1xuICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHRoaXMucG9zaXRpb24sIHRoaXMuZ2V0U2l6ZSgpKVxuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLmdldFNpemUodHJ1ZSlcbiAgICBpZiAodGhpcy5ib3VuZC5yZWZyZXNoKSB7XG4gICAgICB0aGlzLmJvdW5kLnJlZnJlc2goKVxuICAgIH1cbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydClcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0KVxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG5cbiAgICB0aGlzLm9uRW5kLnJlc2V0KClcbiAgICB0aGlzLm9uTW92ZS5yZXNldCgpXG4gIH1cblxuICBnZXQgZW5hYmxlKCkge1xuICAgIHJldHVybiB0aGlzLl9lbmFibGVcbiAgfVxuXG4gIHNldCBlbmFibGUoZW5hYmxlKSB7XG4gICAgaWYgKGVuYWJsZSkge1xuICAgICAgcmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50LCAnZGlzYWJsZScpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFkZENsYXNzKHRoaXMuZWxlbWVudCwgJ2Rpc2FibGUnKVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9lbmFibGUgPSBlbmFibGVcbiAgfVxufVxuXG5EcmFnZ2FibGUub25DcmVhdGUgPSBuZXcgRHJhZ2VlLkV2ZW50KERyYWdnYWJsZSwgeyBpc1JldmVyc2U6IHRydWUsIGlzU3RvcE9uVHJ1ZTogdHJ1ZSB9KVxuRHJhZ2dhYmxlLm9uQ3JlYXRlLmFkZChhZGRUb0RlZmF1bHRTY29wZSlcblxuZXhwb3J0IHsgRHJhZ2dhYmxlLCBkcmFnZ2FibGVzLCBldmVudHMgfVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmZ1bmN0aW9uIEV2ZW50KGNvbnRleHQsIG9wdGlvbnMgPSB7fSkge1xuICB0aGlzLmZ1bmNzID0gW11cbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dFxuICB0aGlzLmlzUmV2ZXJzZSA9IG9wdGlvbnMuaXNSZXZlcnNlIHx8IGZhbHNlXG4gIHRoaXMuaXNTdG9wT25UcnVlID0gb3B0aW9ucy5pc1N0b3BPblRydWUgfHwgZmFsc2Vcbn1cblxuRXZlbnQucHJvdG90eXBlLmZpcmUgPSBmdW5jdGlvbigpIHtcbiAgY29uc3QgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKVxuICBjb25zdCBmcyA9IHRoaXMuaXNSZXZlcnNlID8gdGhpcy5mdW5jcy5zbGljZSgpLnJldmVyc2UoKSA6IHRoaXMuZnVuY3NcbiAgbGV0IHJldFZhbHVlXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBmcy5sZW5ndGg7IGkrKykge1xuICAgIHJldFZhbHVlID0gZnNbaV0uYXBwbHkodGhpcy5jb250ZXh0LCBhcmdzKVxuICAgIGlmICh0aGlzLmlzU3RvcE9uVHJ1ZSAmJiByZXRWYWx1ZSkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gIH1cbiAgcmV0dXJuICF0aGlzLmlzU3RvcE9uVHJ1ZVxufVxuXG5FdmVudC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24oZikge1xuICB0aGlzLmZ1bmNzLnB1c2goZilcbn1cblxuRXZlbnQucHJvdG90eXBlLnVuc2hpZnQgPSBmdW5jdGlvbihmKSB7XG4gIHRoaXMuZnVuY3MudW5zaGlmdChmKVxufVxuXG5FdmVudC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24oZikge1xuICBjb25zdCBpbmRleCA9IHRoaXMuZnVuY3MuaW5kZXhPZihmKVxuICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgdGhpcy5mdW5jcy5zcGxpY2UoaW5kZXgsIDEpXG4gIH1cbn1cblxuRXZlbnQucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24oX2YpIHtcbiAgdGhpcy5mdW5jcyA9IFtdXG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50XG4iLCJjbGFzcyBQb2ludCB7XG4gIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICB0aGlzLnggPSB4XG4gICAgdGhpcy55ID0geVxuICB9XG5cbiAgYWRkKHApIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCArIHAueCwgdGhpcy55ICsgcC55KVxuICB9XG5cbiAgc3ViKHApIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCAtIHAueCwgdGhpcy55IC0gcC55KVxuICB9XG5cbiAgbXVsdChrKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnggKiBrLCB0aGlzLnkgKiBrKVxuICB9XG5cbiAgbmVnYXRpdmUoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCgtdGhpcy54LCAtdGhpcy55KVxuICB9XG5cbiAgY29tcGFyZShwKSB7XG4gICAgcmV0dXJuICh0aGlzLnggPT09IHAueCAmJiB0aGlzLnkgPT09IHAueSlcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54LCB0aGlzLnkpXG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gYHt4PSR7dGhpcy54fSx5PSR7dGhpcy55fWBcbiAgfVxufVxuXG5jbGFzcyBSZWN0YW5nbGUge1xuICBjb25zdHJ1Y3Rvcihwb3NpdGlvbiwgc2l6ZSkge1xuICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvblxuICAgIHRoaXMuc2l6ZSA9IHNpemVcbiAgfVxuXG4gIGdldFAxKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uXG4gIH1cblxuICBnZXRQMigpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54LCB0aGlzLnBvc2l0aW9uLnkpXG4gIH1cblxuICBnZXRQMygpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi5hZGQodGhpcy5zaXplKVxuICB9XG5cbiAgZ2V0UDQoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55KVxuICB9XG5cbiAgZ2V0Q2VudGVyKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLnNpemUubXVsdCgwLjUpKVxuICB9XG5cbiAgb3IocmVjdCkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gbmV3IFBvaW50KE1hdGgubWluKHRoaXMucG9zaXRpb24ueCwgcmVjdC5wb3NpdGlvbi54KSwgTWF0aC5taW4odGhpcy5wb3NpdGlvbi55LCByZWN0LnBvc2l0aW9uLnkpKVxuICAgIGNvbnN0IHNpemUgPSAobmV3IFBvaW50KE1hdGgubWF4KHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54LCByZWN0LnBvc2l0aW9uLnggKyByZWN0LnNpemUueCksIE1hdGgubWF4KHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55LCByZWN0LnBvc2l0aW9uLnkgKyByZWN0LnNpemUueSkpKS5zdWIocG9zaXRpb24pXG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUocG9zaXRpb24sIHNpemUpXG4gIH1cblxuICBhbmQocmVjdCkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gbmV3IFBvaW50KE1hdGgubWF4KHRoaXMucG9zaXRpb24ueCwgcmVjdC5wb3NpdGlvbi54KSwgTWF0aC5tYXgodGhpcy5wb3NpdGlvbi55LCByZWN0LnBvc2l0aW9uLnkpKVxuICAgIGNvbnN0IHNpemUgPSAobmV3IFBvaW50KE1hdGgubWluKHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54LCByZWN0LnBvc2l0aW9uLnggKyByZWN0LnNpemUueCksIE1hdGgubWluKHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55LCByZWN0LnBvc2l0aW9uLnkgKyByZWN0LnNpemUueSkpKS5zdWIocG9zaXRpb24pXG4gICAgaWYgKHNpemUueCA8PSAwIHx8IHNpemUueSA8PSAwKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZShwb3NpdGlvbiwgc2l6ZSlcbiAgfVxuXG4gIGluY2x1ZGVQb2ludChwKSB7XG4gICAgcmV0dXJuICEodGhpcy5wb3NpdGlvbi54ID4gcC54IHx8IHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54IDwgcC54IHx8IHRoaXMucG9zaXRpb24ueSA+IHAueSB8fCB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSA8IHAueSlcbiAgfVxuXG4gIGluY2x1ZGVSZWN0YW5nbGUocmVjdGFuZ2xlKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5jbHVkZVBvaW50KHJlY3RhbmdsZS5wb3NpdGlvbikgJiYgdGhpcy5pbmNsdWRlUG9pbnQocmVjdGFuZ2xlLmdldFAzKCkpXG4gIH1cblxuICBtb3ZlVG9Cb3VuZChyZWN0LCBheGlzKSB7XG4gICAgbGV0IHNlbEF4aXMsIGNyb3NzUmVjdGFuZ2xlXG4gICAgaWYgKGF4aXMpIHtcbiAgICAgIHNlbEF4aXMgPSBheGlzXG4gICAgfSBlbHNlIHtcbiAgICAgIGNyb3NzUmVjdGFuZ2xlID0gdGhpcy5hbmQocmVjdClcbiAgICAgIGlmICghY3Jvc3NSZWN0YW5nbGUpIHtcbiAgICAgICAgcmV0dXJuIHJlY3RcbiAgICAgIH1cbiAgICAgIHNlbEF4aXMgPSBjcm9zc1JlY3RhbmdsZS5zaXplLnggPiBjcm9zc1JlY3RhbmdsZS5zaXplLnkgPyAneScgOiAneCdcbiAgICB9XG4gICAgY29uc3QgdGhpc0NlbnRlciA9IHRoaXMuZ2V0Q2VudGVyKClcbiAgICBjb25zdCByZWN0Q2VudGVyID0gcmVjdC5nZXRDZW50ZXIoKVxuICAgIGNvbnN0IHNpZ24gPSB0aGlzQ2VudGVyW3NlbEF4aXNdID4gcmVjdENlbnRlcltzZWxBeGlzXSA/IC0xIDogMVxuICAgIGNvbnN0IG9mZnNldCA9IHNpZ24gPiAwID8gdGhpcy5wb3NpdGlvbltzZWxBeGlzXSArIHRoaXMuc2l6ZVtzZWxBeGlzXSAtIHJlY3QucG9zaXRpb25bc2VsQXhpc10gOiB0aGlzLnBvc2l0aW9uW3NlbEF4aXNdIC0gKHJlY3QucG9zaXRpb25bc2VsQXhpc10gKyByZWN0LnNpemVbc2VsQXhpc10pXG4gICAgcmVjdC5wb3NpdGlvbltzZWxBeGlzXSA9IHJlY3QucG9zaXRpb25bc2VsQXhpc10gKyBvZmZzZXRcbiAgICByZXR1cm4gcmVjdFxuICB9XG5cbiAgZ2V0U3F1YXJlKCkge1xuICAgIHJldHVybiB0aGlzLnNpemUueCAqIHRoaXMuc2l6ZS55XG4gIH1cblxuICBzdHlsZUFwcGx5KGVsKSB7XG4gICAgZWwgPSBlbCB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbmQnKVxuICAgIGVsLnN0eWxlLmxlZnQgPSB0aGlzLnBvc2l0aW9uLnggKyAncHgnXG4gICAgZWwuc3R5bGUudG9wID0gdGhpcy5wb3NpdGlvbi55ICsgJ3B4J1xuICAgIGVsLnN0eWxlLndpZHRoID0gdGhpcy5zaXplLnggKyAncHgnXG4gICAgZWwuc3R5bGUuaGVpZ2h0ID0gdGhpcy5zaXplLnkgKyAncHgnXG4gIH1cblxuICBncm93dGgoc2l6ZSkge1xuICAgIHRoaXMuc2l6ZSA9IHRoaXMuc2l6ZS5hZGQoc2l6ZSlcbiAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbi5hZGQoc2l6ZS5tdWx0KC0wLjUpKVxuICB9XG5cbiAgZ2V0TWluU2lkZSgpIHtcbiAgICByZXR1cm4gTWF0aC5taW4odGhpcy5zaXplLngsIHRoaXMuc2l6ZS55KVxuICB9XG59XG5cbi8qKioqKioqKioqKioqKioqKi9cbmNvbnN0IEdlb21ldHJ5ID0ge1xuICBnZXREaXN0YW5jZShwMSwgcDIpIHtcbiAgICBjb25zdCBkeCA9IHAxLnggLSBwMi54LCBkeSA9IHAxLnkgLSBwMi55XG4gICAgcmV0dXJuIE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSlcbiAgfSxcbiAgZGlzdGFuY2UocDEsIHAyKSB7XG4gICAgcmV0dXJuIEdlb21ldHJ5LmdldERpc3RhbmNlKHAxLCBwMilcbiAgfSxcbiAgZ2V0WERpZmZlcmVuY2UocDEsIHAyKSB7XG4gICAgcmV0dXJuIE1hdGguYWJzKHAxLnggLSBwMi54KVxuICB9LFxuICBnZXRZRGlmZmVyZW5jZShwMSwgcDIpIHtcbiAgICByZXR1cm4gTWF0aC5hYnMocDEueSAtIHAyLnkpXG4gIH0sXG4gIHRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3Rvcnkob3B0aW9ucykge1xuICAgIHJldHVybiAocDEsIHAyKSA9PiB7XG4gICAgICByZXR1cm4gTWF0aC5zcXJ0KFxuICAgICAgICBNYXRoLnBvdyhvcHRpb25zLnggKiBNYXRoLmFicyhwMS54IC0gcDIueCksIDIpICtcbiAgICAgICAgTWF0aC5wb3cob3B0aW9ucy55ICogTWF0aC5hYnMocDEueSAtIHAyLnkpLCAyKVxuICAgICAgKVxuICAgIH1cbiAgfSxcbiAgaW5kZXhPZk5lYXJlc3RQb2ludChhcnIsIHZhbCwgcmFkaXVzLCBnZXREaXN0YW5jZSkge1xuICAgIGxldCBzaXplLCBpbmRleCA9IDAsIGksIHRlbXBcbiAgICBnZXREaXN0YW5jZSA9IGdldERpc3RhbmNlIHx8IEdlb21ldHJ5LmdldERpc3RhbmNlXG4gICAgaWYgKGFyci5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiAtMVxuICAgIH1cbiAgICBzaXplID0gZ2V0RGlzdGFuY2UoYXJyWzBdLCB2YWwpXG4gICAgZm9yIChpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgdGVtcCA9IGdldERpc3RhbmNlKGFycltpXSwgdmFsKVxuICAgICAgaWYgKHRlbXAgPCBzaXplKSB7XG4gICAgICAgIHNpemUgPSB0ZW1wXG4gICAgICAgIGluZGV4ID0gaVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAocmFkaXVzID49IDAgJiYgc2l6ZSA+IHJhZGl1cykge1xuICAgICAgcmV0dXJuIC0xXG4gICAgfVxuICAgIHJldHVybiBpbmRleFxuICB9LFxuICBib3VuZChtaW4sIG1heCwgdmFsKSB7XG4gICAgcmV0dXJuIE1hdGgubWF4KG1pbiwgTWF0aC5taW4obWF4LCB2YWwpKVxuICB9LFxuICBib3VuZFBvaW50KG1pbiwgbWF4LCB2YWwpIHtcbiAgICBjb25zdCB4ID0gTWF0aC5tYXgobWluLngsIE1hdGgubWluKG1heC54LCB2YWwueCkpXG4gICAgY29uc3QgeSA9IE1hdGgubWF4KG1pbi55LCBNYXRoLm1pbihtYXgueSwgdmFsLnkpKVxuICAgIHJldHVybiBuZXcgUG9pbnQoeCwgeSlcbiAgfSxcbiAgICAvL1JldHVybiBjcm9zc2luZyBwb2ludCBvZiB0d28gbGluZXNcbiAgZGlyZWN0Q3Jvc3NpbmcoTDFQMSwgTDFQMiwgTDJQMSwgTDJQMikge1xuICAgIGxldCB0ZW1wLCBrMSwgazIsIGIxLCBiMiwgeCwgeVxuICAgIGlmIChMMlAxLnggPT09IEwyUDIueCkge1xuICAgICAgdGVtcCA9IEwyUDFcbiAgICAgIEwyUDEgPSBMMVAxXG4gICAgICBMMVAxID0gdGVtcFxuICAgICAgdGVtcCA9IEwyUDJcbiAgICAgIEwyUDIgPSBMMVAyXG4gICAgICBMMVAyID0gdGVtcFxuICAgIH1cbiAgICBpZiAoTDFQMS54ID09PSBMMVAyLngpIHtcbiAgICAgIGsyID0gKEwyUDIueSAtIEwyUDEueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgICAgYjIgPSAoTDJQMi54ICogTDJQMS55IC0gTDJQMS54ICogTDJQMi55KSAvIChMMlAyLnggLSBMMlAxLngpXG4gICAgICB4ID0gTDFQMS54XG4gICAgICB5ID0geCAqIGsyICsgYjJcbiAgICAgIHJldHVybiBuZXcgUG9pbnQoeCwgeSlcbiAgICB9IGVsc2Uge1xuICAgICAgazEgPSAoTDFQMi55IC0gTDFQMS55KSAvIChMMVAyLnggLSBMMVAxLngpXG4gICAgICBiMSA9IChMMVAyLnggKiBMMVAxLnkgLSBMMVAxLnggKiBMMVAyLnkpIC8gKEwxUDIueCAtIEwxUDEueClcbiAgICAgIGsyID0gKEwyUDIueSAtIEwyUDEueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgICAgYjIgPSAoTDJQMi54ICogTDJQMS55IC0gTDJQMS54ICogTDJQMi55KSAvIChMMlAyLnggLSBMMlAxLngpXG4gICAgICB4ID0gKGIxIC0gYjIpIC8gKGsyIC0gazEpXG4gICAgICB5ID0geCAqIGsxICsgYjFcbiAgICAgIHJldHVybiBuZXcgUG9pbnQoeCwgeSlcbiAgICB9XG4gIH0sXG4gIGJvdW5kVG9TZWdtZW50KExQMSwgTFAyLCBQKSB7XG4gICAgbGV0IHgsIHlcbiAgICB4ID0gR2VvbWV0cnkuYm91bmQoTWF0aC5taW4oTFAxLngsIExQMi54KSwgTWF0aC5tYXgoTFAxLngsIExQMi54KSwgUC54KVxuICAgIGlmICh4ICE9PSBQLngpIHtcbiAgICAgIHkgPSAoeCA9PT0gTFAxLngpID8gTFAxLnkgOiBMUDIueVxuICAgICAgUCA9IG5ldyBQb2ludCh4LCB5KVxuICAgIH1cblxuICAgIHkgPSBHZW9tZXRyeS5ib3VuZChNYXRoLm1pbihMUDEueSwgTFAyLnkpLCBNYXRoLm1heChMUDEueSwgTFAyLnkpLCBQLnkpXG4gICAgaWYgKHkgIT09IFAueSkge1xuICAgICAgeCA9ICh5ID09PSBMUDEueSkgPyBMUDEueCA6IExQMi54XG4gICAgICBQID0gbmV3IFBvaW50KHgsIHkpXG4gICAgfVxuXG4gICAgcmV0dXJuIFBcbiAgfSxcbiAgYm91bmRUb0xpbmUoQSwgQiwgUCkge1xuICAgIGNvbnN0IEFQID0gbmV3IFBvaW50KFAueCAtIEEueCwgUC55IC0gQS55KSxcbiAgICAgIEFCID0gbmV3IFBvaW50KEIueCAtIEEueCwgQi55IC0gQS55KSxcbiAgICAgIGFiMiA9IEFCLnggKiBBQi54ICsgQUIueSAqIEFCLnksXG4gICAgICBhcF9hYiA9IEFQLnggKiBBQi54ICsgQVAueSAqIEFCLnksXG4gICAgICB0ID0gYXBfYWIgLyBhYjJcbiAgICByZXR1cm4gbmV3IFBvaW50KEEueCArIEFCLnggKiB0LCBBLnkgKyBBQi55ICogdClcbiAgfSxcbiAgZ2V0UG9pbnRJbkxpbmUoTFAxLCBMUDIsIHBlcmNlbnQpIHtcbiAgICBjb25zdCBkeCA9IExQMi54IC0gTFAxLngsIGR5ID0gTFAyLnkgLSBMUDEueVxuICAgIHJldHVybiBuZXcgUG9pbnQoTFAxLnggKyBwZXJjZW50ICogZHgsIExQMS55ICsgcGVyY2VudCAqIGR5KVxuICB9LFxuICBnZXRQb2ludEluTGluZUJ5TGVuZ2h0KExQMSwgTFAyLCBsZW5naHQpIHtcbiAgICBjb25zdCBkeCA9IExQMi54IC0gTFAxLngsIGR5ID0gTFAyLnkgLSBMUDEueSwgcGVyY2VudCA9IGxlbmdodCAvIEdlb21ldHJ5LmRpc3RhbmNlKExQMSwgTFAyKVxuICAgIHJldHVybiBuZXcgUG9pbnQoTFAxLnggKyBwZXJjZW50ICogZHgsIExQMS55ICsgcGVyY2VudCAqIGR5KVxuICB9LFxuICBjcmVhdGVSZWN0YW5nbGVGcm9tRWxlbWVudChlbCwgcGFyZW50LCBpc0NvbnRlbnRCb3hTaXplLCBpc0NvbnNpZGVyVHJhbnNsYXRlKSB7XG4gICAgY29uc3Qgc2l6ZSA9IHRoaXMuZ2V0U2l6ZU9mRWxlbWVudChlbCwgaXNDb250ZW50Qm94U2l6ZSlcbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZSh0aGlzLmdldE9mZnNldChlbCwgcGFyZW50IHx8IGVsLnBhcmVudE5vZGUsIGlzQ29uc2lkZXJUcmFuc2xhdGUpLCBzaXplKVxuICB9LFxuICBnZXRTdW1WYWx1ZU9mU3R5bGVSdWxlKGVsZW1lbnQsIHJ1bGVzKSB7XG4gICAgcmV0dXJuIHJ1bGVzLnJlZHVjZSgoc3VtLCBydWxlKSA9PiB7XG4gICAgICByZXR1cm4gc3VtICsgcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudClbcnVsZV18fDApXG4gICAgfSwgMClcbiAgfSxcbiAgZ2V0U2l6ZU9mRWxlbWVudChlbCwgaXNDb250ZW50Qm94U2l6ZSkge1xuICAgIGxldCB3aWR0aCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKVsnd2lkdGgnXSksIGhlaWdodCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKVsnaGVpZ2h0J10pXG4gICAgaWYgKCFpc0NvbnRlbnRCb3hTaXplKSB7XG4gICAgICB3aWR0aCArPSB0aGlzLmdldFN1bVZhbHVlT2ZTdHlsZVJ1bGUoZWwsIFsncGFkZGluZy1sZWZ0JywgJ3BhZGRpbmctcmlnaHQnLCAnYm9yZGVyLWxlZnQtd2lkdGgnLCAnYm9yZGVyLXJpZ2h0LXdpZHRoJ10pXG4gICAgICBoZWlnaHQgKz0gdGhpcy5nZXRTdW1WYWx1ZU9mU3R5bGVSdWxlKGVsLCBbJ3BhZGRpbmctdG9wJywgJ3BhZGRpbmctYm90dG9tJywgJ2JvcmRlci10b3Atd2lkdGgnLCAnYm9yZGVyLWJvdHRvbS13aWR0aCddKVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFBvaW50KHdpZHRoLCBoZWlnaHQpXG4gIH0sXG4gIGdldE9mZnNldChlbCwgcGFyZW50KSB7XG4gICAgY29uc3QgZWxSZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksIHBhcmVudFJlY3QgPSBwYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICByZXR1cm4gbmV3IFBvaW50KGVsUmVjdC5sZWZ0IC0gcGFyZW50UmVjdC5sZWZ0LCBlbFJlY3QudG9wIC0gcGFyZW50UmVjdC50b3ApXG4gIH0sXG4gIGdldFBvaW50RnJvbVJhZGlhbFN5c3RlbShhbmdsZSwgbGVuZ3RoLCBjZW50ZXIpIHtcbiAgICBjZW50ZXIgPSBjZW50ZXIgfHwgbmV3IFBvaW50KDAsIDApXG4gICAgcmV0dXJuIGNlbnRlci5hZGQobmV3IFBvaW50KGxlbmd0aCAqIE1hdGguY29zKGFuZ2xlKSwgbGVuZ3RoICogTWF0aC5zaW4oYW5nbGUpKSlcbiAgfSxcbiAgYWRkUG9pbnRUb0JvdW5kUG9pbnRzKGJvdW5kcG9pbnRzLCBwb2ludCwgaXNSaWdodCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGJvdW5kcG9pbnRzLmZpbHRlcihmdW5jdGlvbihiUG9pbnQpIHtcbiAgICAgIHJldHVybiAgYlBvaW50LnkgPiBwb2ludC55IHx8IChpc1JpZ2h0ID8gYlBvaW50LnggPCBwb2ludC54IDogYlBvaW50LnggPiBwb2ludC54KVxuICAgIH0pXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHBvaW50LnkgPCByZXN1bHRbaV0ueSkge1xuICAgICAgICByZXN1bHQuc3BsaWNlKGksIDAsIHBvaW50KVxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC5wdXNoKHBvaW50KVxuICAgIHJldHVybiByZXN1bHRcbiAgfSxcbiAgZ2V0QW5nbGUocDEsIHAyKSB7XG4gICAgY29uc3QgZGlmZiA9IHAyLnN1YihwMSlcbiAgICByZXR1cm4gdGhpcy5ub3JtYWxpemVBbmdsZShNYXRoLmF0YW4yKGRpZmYueSwgZGlmZi54KSlcbiAgfSxcbiAgdG9SYWRpYW4oYW5nbGUpIHtcbiAgICByZXR1cm4gKChhbmdsZSAlIDM2MCkgKiBNYXRoLlBJIC8gMTgwKVxuICB9LFxuICB0b0RlZ3JlZShhbmdsZSkge1xuICAgIHJldHVybiAoYW5nbGUgKiAxODAgLyBNYXRoLlBJKSAlIDM2MFxuICB9LFxuICBib3VuZEFuZ2xlKG1pbiwgbWF4LCB2YWwpIHtcbiAgICBsZXQgZG1pbiwgZG1heFxuICAgIGlmIChtaW4gPCBtYXggJiYgdmFsID4gbWluICYmIHZhbCA8IG1heCkge1xuICAgICAgcmV0dXJuIHZhbFxuICAgIH0gZWxzZSBpZiAobWF4IDwgbWluICYmICh2YWwgPCBtYXggfHwgdmFsID4gbWluKSkge1xuICAgICAgcmV0dXJuIHZhbFxuICAgIH0gZWxzZSB7XG4gICAgICBkbWluID0gdGhpcy5nZXRBbmdsZURpZmYobWluLCB2YWwpXG4gICAgICBkbWF4ID0gdGhpcy5nZXRBbmdsZURpZmYobWF4LCB2YWwpXG4gICAgICBpZiAoZG1pbiA8IGRtYXgpIHtcbiAgICAgICAgcmV0dXJuIG1pblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG1heFxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgZ2V0TmVhcmVzdEFuZ2xlKGFyciwgYW5nbGUpIHtcbiAgICBsZXQgaSwgdGVtcCwgZGlmZiA9IE1hdGguUEkgKiAyLCB2YWx1ZVxuICAgIGZvciAoaSA9IDA7IGkgPCBhcnIubGVuZ3RoO2krKykge1xuICAgICAgdGVtcCA9IEdlb21ldHJ5LmdldEFuZ2xlRGlmZihhcnJbaV0sIGFuZ2xlKVxuICAgICAgaWYgKGRpZmYgPCB0ZW1wKSB7XG4gICAgICAgIGRpZmYgPSB0ZW1wXG4gICAgICAgIHZhbHVlID0gYXJyW2ldXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZVxuICB9LFxuICBnZXRBbmdsZURpZmYoYWxwaGEsIGJldGEpIHtcbiAgICBjb25zdCBtaW5BbmdsZSA9IE1hdGgubWluKGFscGhhLCBiZXRhKSxcbiAgICAgIG1heEFuZ2xlID0gIE1hdGgubWF4KGFscGhhLCBiZXRhKVxuICAgIHJldHVybiBNYXRoLm1pbihtYXhBbmdsZSAtIG1pbkFuZ2xlLCBtaW5BbmdsZSArIE1hdGguUEkqMiAtIG1heEFuZ2xlKVxuICB9LFxuICBub3JtYWxpemVBbmdsZSh2YWwpIHtcbiAgICB3aGlsZSAodmFsIDwgMCkge1xuICAgICAgdmFsICs9IDIgKiBNYXRoLlBJXG4gICAgfVxuICAgIHdoaWxlICh2YWwgPiAyICogTWF0aC5QSSkge1xuICAgICAgdmFsIC09IDIgKiBNYXRoLlBJXG4gICAgfVxuICAgIHJldHVybiB2YWxcbiAgfVxufVxuXG5leHBvcnQgeyBQb2ludCwgUmVjdGFuZ2xlLCBHZW9tZXRyeSB9XG4iLCIndXNlIHN0cmljdCdcbmltcG9ydCB7IEdlb21ldHJ5LCBQb2ludCB9IGZyb20gJy4vZ2VvbWV0cnknXG5cbmNvbnN0IHBvc2l0aW9uVHlwZSA9IHtcbiAgbm90Q3Jvc3Npbmc6IDAsXG4gIGZsb2F0TGVmdDogMSxcbiAgZmxvYXRSaWdodDogMlxufVxuXG5mdW5jdGlvbiBwb3NpdGlvbkZhY3RvcnkodHlwZSkge1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgY2FzZSBwb3NpdGlvblR5cGUubm90Q3Jvc3Npbmc6XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHJlY3RhbmdsZSwgX29wdGlvbnMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihyZWN0YW5nbGVMaXN0LCBpbmRleGVzT2ZOZXdzKSB7XG4gICAgICAgIGNvbnN0IGJvdW5kUmVjdCA9IHR5cGVvZiByZWN0YW5nbGUgPT09ICdmdW5jdGlvbicgPyByZWN0YW5nbGUoKSA6IHJlY3RhbmdsZSxcbiAgICAgICAgICBzdGF0aWNSZWN0YW5nbGVJbmRleGVzID0gcmVjdGFuZ2xlTGlzdC5yZWR1Y2UoZnVuY3Rpb24oaW5kZXhlcywgX3JlY3QsIGluZGV4KSB7XG4gICAgICAgICAgICBpZiAoaW5kZXhlc09mTmV3cy5pbmRleE9mKGluZGV4KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgaW5kZXhlcy5wdXNoKGluZGV4KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGluZGV4ZXNcbiAgICAgICAgICB9LCBbXSlcblxuICAgICAgICBpbmRleGVzT2ZOZXdzLmZvckVhY2goZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgICAgICBsZXQgcmVjdCA9IHJlY3RhbmdsZUxpc3RbaW5kZXhdLCByZW1vdmFibGUgPSBmYWxzZVxuICAgICAgICAgIHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMuZm9yRWFjaChmdW5jdGlvbihpbmRleE9mU3RhdGljKSB7XG4gICAgICAgICAgICBjb25zdCBzdGF0aWNSZWN0ID0gcmVjdGFuZ2xlTGlzdFtpbmRleE9mU3RhdGljXVxuICAgICAgICAgICAgcmVjdCA9IHN0YXRpY1JlY3QubW92ZVRvQm91bmQocmVjdClcbiAgICAgICAgICB9KVxuICAgICAgICAgIHJlbW92YWJsZSA9IHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMuc29tZShmdW5jdGlvbihpbmRleE9mU3RhdGljKSB7XG4gICAgICAgICAgICBjb25zdCBzdGF0aWNSZWN0ID0gcmVjdGFuZ2xlTGlzdFtpbmRleE9mU3RhdGljXVxuICAgICAgICAgICAgcmV0dXJuICAhIXN0YXRpY1JlY3QuYW5kKHJlY3QpXG4gICAgICAgICAgfSkgfHwgcmVjdC5hbmQoYm91bmRSZWN0KS5nZXRTcXVhcmUoKSAhPT0gcmVjdC5nZXRTcXVhcmUoKVxuICAgICAgICAgIGlmIChyZW1vdmFibGUpIHtcbiAgICAgICAgICAgIHJlY3QucmVtb3ZhYmxlID0gdHJ1ZVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdGF0aWNSZWN0YW5nbGVJbmRleGVzLnB1c2goaW5kZXgpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gcmVjdGFuZ2xlTGlzdFxuICAgICAgfVxuICAgIH1cbiAgY2FzZSBwb3NpdGlvblR5cGUuZmxvYXRMZWZ0OlxuICAgIHJldHVybiBmdW5jdGlvbihyZWN0YW5nbGUsIG9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgcGFkZGluZ1RvcExlZnQ6IG5ldyBQb2ludCgwLCAwKSxcbiAgICAgICAgcGFkZGluZ0JvdHRvbVJpZ2h0OiBuZXcgUG9pbnQoMCwgMCksXG4gICAgICAgIHlHYXBCZXR3ZWVuRHJhZ2dhYmxlczogMCxcbiAgICAgICAgcmVtb3ZhYmxlOiB0cnVlXG4gICAgICB9LCBvcHRpb25zKVxuXG4gICAgICByZXR1cm4gZnVuY3Rpb24ocmVjdGFuZ2xlTGlzdCwgX2luZGV4ZXNPZk5ld3MpIHtcbiAgICAgICAgY29uc3QgYm91bmRSZWN0ID0gdHlwZW9mIHJlY3RhbmdsZSA9PT0gJ2Z1bmN0aW9uJyA/IHJlY3RhbmdsZSgpIDogcmVjdGFuZ2xlXG4gICAgICAgIGNvbnN0IHJlY3RQMiA9IGJvdW5kUmVjdC5nZXRQMigpXG4gICAgICAgIGxldCBib3VuZGFyeVBvaW50cyA9IFtib3VuZFJlY3QucG9zaXRpb25dXG4gICAgICAgIHJlY3RhbmdsZUxpc3QuZm9yRWFjaChmdW5jdGlvbihyZWN0KSB7XG4gICAgICAgICAgbGV0IHBvc2l0aW9uLCBpc1ZhbGlkID0gZmFsc2VcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvdW5kYXJ5UG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IChuZXcgUG9pbnQoYm91bmRhcnlQb2ludHNbaV0ueCwgaSA+IDAgPyAoYm91bmRhcnlQb2ludHNbaSAtIDFdLnkgKyBvcHRpb25zLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcykgOiBib3VuZFJlY3QucG9zaXRpb24ueSkpLmFkZChvcHRpb25zLnBhZGRpbmdUb3BMZWZ0KVxuICAgICAgICAgICAgaXNWYWxpZCA9IChwb3NpdGlvbi54ICsgcmVjdC5zaXplLnggPCByZWN0UDIueClcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICAgICAgcG9zaXRpb24gPSAobmV3IFBvaW50KGJvdW5kUmVjdC5wb3NpdGlvbi54LCBib3VuZGFyeVBvaW50c1tib3VuZGFyeVBvaW50cy5sZW5ndGggLSAxXS55ICsgb3B0aW9ucy55R2FwQmV0d2VlbkRyYWdnYWJsZXMpKS5hZGQob3B0aW9ucy5wYWRkaW5nVG9wTGVmdClcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVjdC5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgICAgICAgaWYgKG9wdGlvbnMucmVtb3ZhYmxlICYmIHJlY3QuZ2V0UDMoKS55ID4gYm91bmRSZWN0LmdldFAzKCkueSkge1xuICAgICAgICAgICAgcmVjdC5yZW1vdmFibGUgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGJvdW5kYXJ5UG9pbnRzID0gR2VvbWV0cnkuYWRkUG9pbnRUb0JvdW5kUG9pbnRzKGJvdW5kYXJ5UG9pbnRzLCByZWN0LmdldFAzKCkuYWRkKG9wdGlvbnMucGFkZGluZ0JvdHRvbVJpZ2h0KSlcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHJlY3RhbmdsZUxpc3RcbiAgICAgIH1cbiAgICB9XG4gIGNhc2UgcG9zaXRpb25UeXBlLmZsb2F0UmlnaHQ6XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHJlY3RhbmdsZSwgb3B0aW9ucykge1xuICAgICAgb3B0aW9ucyA9IE9iamVjdC5hc3Npbmcoe1xuICAgICAgICBwYWRkaW5nVG9wUmlnaHQ6IG5ldyBQb2ludCg1LCA1KSxcbiAgICAgICAgcGFkZGluZ0JvdHRvbUxlZnQ6IG5ldyBQb2ludCgwLCAwKSxcbiAgICAgICAgcmVtb3ZhYmxlOiB0cnVlXG4gICAgICB9LCBvcHRpb25zKVxuXG4gICAgICBjb25zdCBwYWRkaW5nVG9wTmVnUmlnaHQgPSBuZXcgUG9pbnQoLW9wdGlvbnMucGFkZGluZ1RvcFJpZ2h0LngsIG9wdGlvbnMucGFkZGluZ1RvcFJpZ2h0LnkpXG4gICAgICBjb25zdCBwYWRkaW5nQm90dG9tTmVnTGVmdCA9IG5ldyBQb2ludCgtb3B0aW9ucy5wYWRkaW5nQm90dG9tTGVmdC54LCBvcHRpb25zLnBhZGRpbmdCb3R0b21MZWZ0LnkpXG4gICAgICByZXR1cm4gZnVuY3Rpb24ocmVjdGFuZ2xlTGlzdCwgX2luZGV4ZXNPZk5ld3MpIHtcbiAgICAgICAgY29uc3QgYm91bmRSZWN0ID0gdHlwZW9mIHJlY3RhbmdsZSA9PT0gJ2Z1bmN0aW9uJyA/IHJlY3RhbmdsZSgpIDogcmVjdGFuZ2xlXG4gICAgICAgIGxldCBib3VuZGFyeVBvaW50cyA9IFtib3VuZFJlY3QuZ2V0UmlnaHRUb3BQb2ludCgpXVxuICAgICAgICByZWN0YW5nbGVMaXN0LmZvckVhY2goZnVuY3Rpb24ocmVjdCwgX2luZGV4KSB7XG4gICAgICAgICAgbGV0IHBvc2l0aW9uLCBpc1ZhbGlkID0gZmFsc2VcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvdW5kYXJ5UG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IChuZXcgUG9pbnQoYm91bmRhcnlQb2ludHNbaV0ueCAtIHJlY3Quc2l6ZS54LCBpID4gMCA/IGJvdW5kYXJ5UG9pbnRzW2kgLSAxXS55IDogYm91bmRSZWN0LnBvc2l0aW9uLnkpKS5hZGQocGFkZGluZ1RvcE5lZ1JpZ2h0KVxuICAgICAgICAgICAgaXNWYWxpZCA9IChwb3NpdGlvbi54ID4gcmVjdC5wb3NpdGlvbi54KVxuICAgICAgICAgICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IG5ldyBQb2ludChib3VuZFJlY3QuZ2V0UDIoKS54LCBib3VuZGFyeVBvaW50c1tib3VuZGFyeVBvaW50cy5sZW5ndGggLSAxXS55KVxuICAgICAgICAgIH1cbiAgICAgICAgICByZWN0LnBvc2l0aW9uID0gcG9zaXRpb25cbiAgICAgICAgICBpZiAob3B0aW9ucy5yZW1vdmFibGUgJiYgcmVjdC5nZXRMZWZ0Qm90dG9tUG9pbnQoKS55ID4gYm91bmRSZWN0LmdldFA0KCkueSkge1xuICAgICAgICAgICAgcmVjdC5yZW1vdmFibGUgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGJvdW5kYXJ5UG9pbnRzID0gR2VvbWV0cnkuYWRkUG9pbnRUb0JvdW5kUG9pbnRzKGJvdW5kYXJ5UG9pbnRzLCByZWN0LmdldFA0KCkuYWRkKHBhZGRpbmdCb3R0b21OZWdMZWZ0KSwgdHJ1ZSlcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHJlY3RhbmdsZUxpc3RcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc29ydGluZ0ZhY3RvcnkodHlwZSkge1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgY2FzZSBwb3NpdGlvblR5cGUubm90Q3Jvc3Npbmc6XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG9sZE9ianNMaXN0LCBuZXdPYmpzLCBpbmRleE9mTmV3cykge1xuICAgICAgICBjb25zdCBvYmpzTGlzdCA9IG9sZE9ianNMaXN0LmNvbmNhdChuZXdPYmpzKVxuICAgICAgICBuZXdPYmpzLmZvckVhY2goZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgICAgaW5kZXhPZk5ld3MucHVzaChvYmpzTGlzdC5pbmRleE9mKG9iaikpXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBvYmpzTGlzdFxuICAgICAgfVxuICAgIH1cbiAgY2FzZSBwb3NpdGlvblR5cGUuZmxvYXRMZWZ0OlxuICBjYXNlIHBvc2l0aW9uVHlwZS5mbG9hdFJpZ2h0OlxuICAgIHJldHVybiBmdW5jdGlvbihyYWRpdXMsIGdldERpc3RhbmNlLCBvcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIGdldFBvc2l0aW9uOiBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgICByZXR1cm4gb2JqLnBvc2l0aW9uXG4gICAgICAgIH1cbiAgICAgIH0sIG9wdGlvbnMpXG5cbiAgICAgIHJldHVybiBmdW5jdGlvbihvbGRPYmpzTGlzdCwgbmV3T2JqcywgaW5kZXhPZk5ld3MpIHtcbiAgICAgICAgY29uc3QgbmV3TGlzdCA9IG9sZE9ianNMaXN0LmNvbmNhdCgpXG4gICAgICAgIGNvbnN0IGxpc3RPbGRQb3NpdGlvbiA9IG9sZE9ianNMaXN0Lm1hcChvcHRpb25zLmdldFBvc2l0aW9uKVxuICAgICAgICBuZXdPYmpzLmZvckVhY2goZnVuY3Rpb24obmV3T2JqKSB7XG4gICAgICAgICAgbGV0IGluZGV4ID0gR2VvbWV0cnkuaW5kZXhPZk5lYXJlc3RQb2ludChsaXN0T2xkUG9zaXRpb24sIG9wdGlvbnMuZ2V0UG9zaXRpb24obmV3T2JqKSwgcmFkaXVzLCBnZXREaXN0YW5jZSlcbiAgICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICBpbmRleCA9IG5ld0xpc3QubGVuZ3RoXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluZGV4ID0gbmV3TGlzdC5pbmRleE9mKG9sZE9ianNMaXN0W2luZGV4XSlcbiAgICAgICAgICB9XG4gICAgICAgICAgbmV3TGlzdC5zcGxpY2UoaW5kZXgsIDAsIG5ld09iailcbiAgICAgICAgfSlcbiAgICAgICAgbmV3T2Jqcy5mb3JFYWNoKGZ1bmN0aW9uKG5ld09iaikge1xuICAgICAgICAgIGluZGV4T2ZOZXdzLnB1c2gobmV3TGlzdC5pbmRleE9mKG5ld09iaikpXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBuZXdMaXN0XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCB7IHBvc2l0aW9uVHlwZSwgc29ydGluZ0ZhY3RvcnksIHBvc2l0aW9uRmFjdG9yeSB9XG4iLCJpbXBvcnQgcmVtb3ZlSXRlbXMgZnJvbSAncmVtb3ZlLWFycmF5LWl0ZW1zJ1xuaW1wb3J0IEV2ZW50IGZyb20gJy4vZXZlbnQnXG5pbXBvcnQgeyBEcmFnZ2FibGUgfSBmcm9tICcuL2RyYWdnYWJsZSdcbmltcG9ydCB7IFRhcmdldCB9IGZyb20gJy4vdGFyZ2V0J1xuXG5jb25zdCBEcmFnZWUgPSB7IEV2ZW50IH0gLy90b2RvIHJlbW92ZSBhZnRlciByZWZhY3RvcmVcblxuY29uc3Qgc2NvcGVzID0gW11cblxuY2xhc3MgU2NvcGUge1xuICBjb25zdHJ1Y3RvcihkcmFnZ2FibGVzLCB0YXJnZXRzLCBvcHRpb25zPXt9KSB7XG4gICAgc2NvcGVzLmZvckVhY2goKHNjb3BlKSA9PiB7XG4gICAgICBpZiAoZHJhZ2dhYmxlcykge1xuICAgICAgICBkcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgICAgIHJlbW92ZUl0ZW1zKHNjb3BlLmRyYWdnYWJsZXMsIGRyYWdnYWJsZSlcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgaWYgKHRhcmdldHMpIHtcbiAgICAgICAgdGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHtcbiAgICAgICAgICByZW1vdmVJdGVtcyhzY29wZS50YXJnZXRzLCB0YXJnZXQpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZXMgfHwgW11cbiAgICB0aGlzLnRhcmdldHMgPSB0YXJnZXRzIHx8IFtdXG4gICAgc2NvcGVzLnB1c2godGhpcylcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICB0aW1lRW5kOiAob3B0aW9ucy50aW1lRW5kKSB8fCA0MDBcbiAgICB9XG5cbiAgICB0aGlzLm9uQ2hhbmdlID0gbmV3IERyYWdlZS5FdmVudCh0aGlzKVxuICAgIGlmIChvcHRpb25zLm9uQ2hhbmdlKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlLmFkZChvcHRpb25zLm9uQ2hhbmdlKVxuICAgIH1cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUub25FbmQuYWRkKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMub25FbmQoZHJhZ2dhYmxlKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgYWRkRHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5wdXNoKGRyYWdnYWJsZSlcbiAgICBkcmFnZ2FibGUub25FbmQudW5zaGlmdCgoKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5vbkVuZChkcmFnZ2FibGUpXG4gICAgfSlcbiAgfVxuXG4gIGFkZFRhcmdldCh0YXJnZXQpIHtcbiAgICB0aGlzLnRhcmdldHMucHVzaCh0YXJnZXQpXG4gIH1cblxuICBvbkVuZChkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBzaG90VGFyZ2V0cyA9IHRoaXMudGFyZ2V0cy5maWx0ZXIoKHRhcmdldCkgPT4ge1xuICAgICAgcmV0dXJuIHRhcmdldC5kcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTFcbiAgICB9KS5maWx0ZXIoKHRhcmdldCkgPT4ge1xuICAgICAgcmV0dXJuIHRhcmdldC5jYXRjaERyYWdnYWJsZShkcmFnZ2FibGUpXG4gICAgfSkuc29ydCgoYSwgYikgPT4ge1xuICAgICAgcmV0dXJuIGEuZ2V0UmVjdGFuZ2xlKCkuZ2V0U3F1YXJlKCkgLSBiLmdldFJlY3RhbmdsZSgpLmdldFNxdWFyZSgpXG4gICAgfSlcblxuICAgIGlmIChzaG90VGFyZ2V0cy5sZW5ndGgpIHtcbiAgICAgIHNob3RUYXJnZXRzWzBdLm9uRW5kKGRyYWdnYWJsZSlcbiAgICB9IGVsc2UgaWYgKGRyYWdnYWJsZS50YXJnZXRzLmxlbmd0aCkge1xuICAgICAgZHJhZ2dhYmxlLm1vdmUoZHJhZ2dhYmxlLmluaXRQb3NpdGlvbiwgdGhpcy5vcHRpb25zLnRpbWVFbmQsIHRydWUsIHRydWUpXG4gICAgfVxuICAgIHRoaXMub25DaGFuZ2UuZmlyZSgpXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMudGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHRhcmdldC5yZXNldCgpKVxuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucmVmcmVzaCgpKVxuICAgIHRoaXMudGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHRhcmdldC5yZWZyZXNoKCkpXG4gIH1cblxuICBnZXQgcG9zaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnRhcmdldHMubWFwKCh0YXJnZXQpID0+IHtcbiAgICAgIHJldHVybiB0YXJnZXQuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB0aGlzLmRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpKVxuICAgIH0pXG4gIH1cblxuICBzZXQgcG9zaXRpb25zKHBvc2l0aW9ucykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSAnd3JvbmcgYXJyYXkgbGVuZ3RoJ1xuICAgIGlmIChwb3NpdGlvbnMubGVuZ3RoID09PSB0aGlzLnRhcmdldHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB0YXJnZXQucmVzZXQoKSlcblxuICAgICAgcG9zaXRpb25zLmZvckVhY2goKHRhcmdldEluZGV4ZXMsIGkpID0+IHtcbiAgICAgICAgdGFyZ2V0SW5kZXhlcy5mb3JFYWNoKChpbmRleCkgPT4ge1xuICAgICAgICAgIHRoaXMudGFyZ2V0c1tpXS5hZGQodGhpcy5kcmFnZ2FibGVzW2luZGV4XSlcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG1lc3NhZ2VcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgZGVmYXVsdFNjb3BlID0gbmV3IFNjb3BlKClcblxuZnVuY3Rpb24gc2NvcGUoZm4pIHtcbiAgY29uc3QgY3VycmVudFNjb3BlID0gbmV3IFNjb3BlKClcbiAgY29uc3QgYWRkRHJhZ2dhYmxlVG9TY29wZSA9IGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICAgIGN1cnJlbnRTY29wZS5hZGREcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICAgIHJldHVybiB0cnVlXG4gIH1cbiAgY29uc3QgYWRkVGFyZ2V0VG9TY29wZSA9IGZ1bmN0aW9uKHRhcmdldCkge1xuICAgIGN1cnJlbnRTY29wZS5hZGRUYXJnZXQodGFyZ2V0KVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBEcmFnZ2FibGUub25DcmVhdGUuYWRkKGFkZERyYWdnYWJsZVRvU2NvcGUpXG4gIFRhcmdldC5vbkNyZWF0ZS5hZGQoYWRkVGFyZ2V0VG9TY29wZSlcbiAgZm4uY2FsbCgpXG4gIERyYWdnYWJsZS5vbkNyZWF0ZS5yZW1vdmUoYWRkRHJhZ2dhYmxlVG9TY29wZSlcbiAgVGFyZ2V0Lm9uQ3JlYXRlLnJlbW92ZShhZGRUYXJnZXRUb1Njb3BlKVxuICByZXR1cm4gY3VycmVudFNjb3BlXG59XG5cbmZ1bmN0aW9uIHNjb3BlRmFjdG9yeShwYXJlbnRFbGVtZW50LCBkcmFnZ2FibGVFbGVtZW50cywgdGFyZ2V0RWxlbWVudHMsIG9wdGlvbnM9e30pIHtcbiAgY29uc3QgZHJhZ2dhYmxlT3B0aW9ucyA9IG9wdGlvbnMuZHJhZ2dhYmxlIHx8IHt9XG4gIGNvbnN0IHRhcmdldE9wdGlvbnMgPSBvcHRpb25zLnRhcmdldCB8fCB7fVxuICBjb25zdCBzY29wZU9wdGlvbnMgPSBvcHRpb25zLnNjb3BlIHx8IHt9XG4gIGRyYWdnYWJsZU9wdGlvbnMucGFyZW50ID0gZHJhZ2dhYmxlT3B0aW9ucy5wYXJlbnQgfHwgcGFyZW50RWxlbWVudFxuICB0YXJnZXRPcHRpb25zLnBhcmVudCA9IHRhcmdldE9wdGlvbnMucGFyZW50IHx8IHBhcmVudEVsZW1lbnRcbiAgZHJhZ2dhYmxlRWxlbWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkcmFnZ2FibGVFbGVtZW50cylcbiAgdGFyZ2V0RWxlbWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0YXJnZXRFbGVtZW50cylcblxuICBjb25zdCBkcmFnZ2FibGVzID0gZHJhZ2dhYmxlRWxlbWVudHMubWFwKChlbGVtZW50KSA9PiB7XG4gICAgcmV0dXJuIG5ldyBEcmFnZ2FibGUoZWxlbWVudCwgZHJhZ2dhYmxlT3B0aW9ucylcbiAgfSlcblxuICBjb25zdCB0YXJnZXRzID0gdGFyZ2V0RWxlbWVudHMubWFwKChlbGVtZW50KSA9PiB7XG4gICAgcmV0dXJuIG5ldyBUYXJnZXQoZWxlbWVudCwgZHJhZ2dhYmxlcywgdGFyZ2V0T3B0aW9ucylcbiAgfSlcbiAgcmV0dXJuIG5ldyBTY29wZShkcmFnZ2FibGVzLCB0YXJnZXRzLCBzY29wZU9wdGlvbnMpXG59XG5cbmV4cG9ydCB7IHNjb3BlcywgZGVmYXVsdFNjb3BlLCBTY29wZSwgc2NvcGVGYWN0b3J5LCBzY29wZSB9XG4iLCJpbXBvcnQgcmFuZ2UgZnJvbSAnLi91dGlscy9yYW5nZS5qcydcbmltcG9ydCByZW1vdmVJdGVtcyBmcm9tICdyZW1vdmUtYXJyYXktaXRlbXMnXG5pbXBvcnQgZ2V0RGVmYXVsdFBhcmVudCBmcm9tICcuL3V0aWxzL2dldGRlZmF1bHRwYXJlbnQnXG5pbXBvcnQgRXZlbnQgZnJvbSAnLi9ldmVudCdcbmltcG9ydCB7IEdlb21ldHJ5IH0gZnJvbSAnLi9nZW9tZXRyeSdcbmltcG9ydCB7IHBvc2l0aW9uVHlwZSwgc29ydGluZ0ZhY3RvcnksIHBvc2l0aW9uRmFjdG9yeSB9IGZyb20gJy4vcG9zaXRpb25pbmcnXG5pbXBvcnQgeyBzY29wZXMsIGRlZmF1bHRTY29wZSB9IGZyb20gJy4vc2NvcGUnXG5cbmNvbnN0IERyYWdlZSA9IHsgcG9zaXRpb25UeXBlLCAgcG9zaXRpb25GYWN0b3J5LCBzb3J0aW5nRmFjdG9yeSwgc2NvcGVzLCBFdmVudCB9Ly90b2RvIHJlbW92ZSBhZnRlciByZWZhY3RvcmVcblxuY29uc3QgdGFyZ2V0cyA9IFtdLFxuICBhZGRUb0RlZmF1bHRTY29wZSA9IGZ1bmN0aW9uKHRhcmdldCkge1xuICAgIGRlZmF1bHRTY29wZS5hZGRUYXJnZXQodGFyZ2V0KVxuICB9XG5cbmNsYXNzIFRhcmdldCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGRyYWdnYWJsZXMsIG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0IHRhcmdldCA9IHRoaXNcbiAgICBjb25zdCBwYXJlbnQgPSBvcHRpb25zLnBhcmVudCB8fCBnZXREZWZhdWx0UGFyZW50KGVsZW1lbnQpXG5cbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHRpbWVFbmQ6IDIwMCxcbiAgICAgIHRpbWVFeGNhbmdlOiA0MDAsXG4gICAgICBwYXJlbnQ6IHBhcmVudCxcbiAgICAgIHNvcnRpbmc6IERyYWdlZS5zb3J0aW5nRmFjdG9yeShEcmFnZWUucG9zaXRpb25UeXBlLmZsb2F0TGVmdCkoODAsIEdlb21ldHJ5LnRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3RvcnkoeyB4OiAxLCB5OiA0IH0pKSxcbiAgICAgIHBvc2l0aW9uaW5nOiBEcmFnZWUucG9zaXRpb25GYWN0b3J5KERyYWdlZS5wb3NpdGlvblR5cGUuZmxvYXRMZWZ0KSh0aGlzLmdldFJlY3RhbmdsZS5iaW5kKHRoaXMpLCB7IHJlbW92YWJsZTogdHJ1ZSB9KVxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0YXJnZXRzLnB1c2godGhpcylcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG4gICAgZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS50YXJnZXRzLnB1c2godGFyZ2V0KSlcbiAgICB0aGlzLmRyYWdnYWJsZXMgPSBkcmFnZ2FibGVzXG4gICAgdGhpcy5vbkFkZCA9IG5ldyBEcmFnZWUuRXZlbnQodGhpcylcbiAgICB0aGlzLmJlZm9yZUFkZCA9IG5ldyBEcmFnZWUuRXZlbnQodGhpcylcbiAgICB0aGlzLm9uUmVtb3ZlID0gbmV3IERyYWdlZS5FdmVudCh0aGlzKVxuXG4gICAgaWYgKG9wdGlvbnMub25SZW1vdmUpIHtcbiAgICAgIHRoaXMub25SZW1vdmUuYWRkKG9wdGlvbnMub25SZW1vdmUpXG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMub25BZGQpIHtcbiAgICAgIHRoaXMub25BZGQuYWRkKG9wdGlvbnMub25BZGQpXG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuYmVmb3JlQWRkKSB7XG4gICAgICB0aGlzLmJlZm9yZUFkZC5hZGQob3B0aW9ucy5iZWZvcmVBZGQpXG4gICAgfVxuXG4gICAgVGFyZ2V0Lm9uQ3JlYXRlLmZpcmUodGhpcylcblxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBpbml0KCkge1xuICAgIGxldCByZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXdcblxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzID0gdGhpcy5kcmFnZ2FibGVzLmZpbHRlcigoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBsZXQgZWxlbWVudCA9IGRyYWdnYWJsZS5lbGVtZW50LnBhcmVudE5vZGVcbiAgICAgIHdoaWxlIChlbGVtZW50KSB7XG4gICAgICAgIGlmIChlbGVtZW50ID09PSB0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGVcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH0pXG5cbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMubGVuZ3RoKSB7XG4gICAgICBpbmRleGVzT2ZOZXcgPSByYW5nZSh0aGlzLmlubmVyRHJhZ2dhYmxlcy5sZW5ndGgpXG4gICAgICByZWN0YW5nbGVzID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICAgIH0pLCBpbmRleGVzT2ZOZXcpXG4gICAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIGluZGV4ZXNPZk5ldylcbiAgICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gdGhpcy5vbkFkZC5maXJlKGRyYWdnYWJsZSkpXG4gICAgfVxuICB9XG5cbiAgZ2V0UmVjdGFuZ2xlKCkge1xuICAgIHJldHVybiBHZW9tZXRyeS5jcmVhdGVSZWN0YW5nbGVGcm9tRWxlbWVudChcbiAgICAgIHRoaXMuZWxlbWVudCxcbiAgICAgIHRoaXMub3B0aW9ucy5wYXJlbnQsXG4gICAgICB0aGlzLm9wdGlvbnMuaXNDb250ZW50Qm94U2l6ZSxcbiAgICAgIHRydWVcbiAgICApXG4gIH1cblxuICBjYXRjaERyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmNhdGNoRHJhZ2dhYmxlKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmNhdGNoRHJhZ2dhYmxlKHRoaXMsIGRyYWdnYWJsZSlcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGFyZ2V0UmVjdGFuZ2xlID0gdGhpcy5nZXRSZWN0YW5nbGUoKVxuICAgICAgY29uc3QgZHJhZ2dhYmxlU3F1YXJlID0gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpLmdldFNxdWFyZSgpXG5cbiAgICAgIHJldHVybiBkcmFnZ2FibGVTcXVhcmUgPCB0YXJnZXRSZWN0YW5nbGUuZ2V0U3F1YXJlKClcbiAgICAgICAgICAgICAgJiYgdGFyZ2V0UmVjdGFuZ2xlLmluY2x1ZGVQb2ludChkcmFnZ2FibGUuZ2V0Q2VudGVyKCkpXG4gICAgfVxuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UmVjdGFuZ2xlKCkucG9zaXRpb25cbiAgfVxuXG4gIGdldFNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UmVjdGFuZ2xlKCkuc2l6ZVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICBEcmFnZWUuc2NvcGVzLmZvckVhY2goKHNjb3BlKSA9PiByZW1vdmVJdGVtcyhzY29wZS50YXJnZXRzLCB0aGlzKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBbXSlcbiAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIFtdLCAwKVxuICB9XG5cbiAgb25FbmQoZHJhZ2dhYmxlKSB7XG4gICAgY29uc3QgbmV3RHJhZ2dhYmxlc0luZGV4ID0gW11cbiAgICBjb25zdCBpbmNsdWRlUG9pbnQgPSB0aGlzLmdldFJlY3RhbmdsZSgpLmluY2x1ZGVQb2ludChkcmFnZ2FibGUuZ2V0UG9zaXRpb24oKSlcblxuICAgIGlmICghaW5jbHVkZVBvaW50KSB7XG4gICAgICBpZiAodGhpcy5nZXRSZWN0YW5nbGUoKS5pbmNsdWRlUG9pbnQoZHJhZ2dhYmxlLmdldENlbnRlcigpKSkge1xuICAgICAgICBkcmFnZ2FibGUucG9zaXRpb24gPSBkcmFnZ2FibGUuZ2V0Q2VudGVyKCkuY2xvbmUoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5iZWZvcmVBZGQuZmlyZShkcmFnZ2FibGUpXG5cbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcyA9IHRoaXMub3B0aW9ucy5zb3J0aW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLCBbZHJhZ2dhYmxlXSwgbmV3RHJhZ2dhYmxlc0luZGV4KVxuICAgIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLm9wdGlvbnMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgbmV3RHJhZ2dhYmxlc0luZGV4LCBkcmFnZ2FibGUpXG5cbiAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIG5ld0RyYWdnYWJsZXNJbmRleClcbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMSkge1xuICAgICAgdGhpcy5hZGRSZW1vdmVPbk1vdmUoZHJhZ2dhYmxlKVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgaW5kZXhlc09mTmV3LCB0aW1lKSB7XG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuc2xpY2UoMCkuZm9yRWFjaCgoZHJhZ2dhYmxlLCBpKSA9PiB7XG4gICAgICBjb25zdCByZWN0ID0gcmVjdGFuZ2xlc1tpXSxcbiAgICAgICAgdGltZUVuZCA9IHRpbWUgfHwgdGltZSA9PT0gMCA/IHRpbWUgOiBpbmRleGVzT2ZOZXcuaW5kZXhPZihpKSAhPT0gLTEgPyB0aGlzLm9wdGlvbnMudGltZUVuZCA6IHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZVxuXG4gICAgICBpZiAocmVjdC5yZW1vdmFibGUpIHtcbiAgICAgICAgZHJhZ2dhYmxlLm1vdmUoZHJhZ2dhYmxlLmluaXRQb3NpdGlvbiwgdGltZUVuZCwgdHJ1ZSwgdHJ1ZSlcbiAgICAgICAgcmVtb3ZlSXRlbXModGhpcy5pbm5lckRyYWdnYWJsZXMsIGRyYWdnYWJsZSlcblxuICAgICAgICB0aGlzLm9uUmVtb3ZlLmZpcmUoZHJhZ2dhYmxlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZHJhZ2dhYmxlLm1vdmUocmVjdC5wb3NpdGlvbiwgdGltZUVuZCwgdHJ1ZSwgdHJ1ZSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgYWRkKGRyYWdnYWJsZSwgdGltZSkge1xuICAgIGNvbnN0IG5ld0RyYWdnYWJsZXNJbmRleCA9IHRoaXMuaW5uZXJEcmFnZ2FibGVzLmxlbmd0aFxuXG4gICAgdGhpcy5iZWZvcmVBZGQuZmlyZShkcmFnZ2FibGUpXG5cbiAgICB0aGlzLnB1c2hJbm5lckRyYWdnYWJsZShkcmFnZ2FibGUpXG4gICAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBuZXdEcmFnZ2FibGVzSW5kZXgsIGRyYWdnYWJsZSlcblxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgW25ld0RyYWdnYWJsZXNJbmRleF0sIHRpbWUgfHwgMClcbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMSkge1xuICAgICAgdGhpcy5hZGRSZW1vdmVPbk1vdmUoZHJhZ2dhYmxlKVxuICAgIH1cbiAgfVxuXG4gIHB1c2hJbm5lckRyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpPT09LTEpIHtcbiAgICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxuICAgIH1cbiAgfVxuXG4gIGFkZFJlbW92ZU9uTW92ZShkcmFnZ2FibGUpIHtcbiAgICBkcmFnZ2FibGUub25Nb3ZlLmFkZCh0aGlzLnJlbW92ZUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICB0aGlzLnJlbW92ZShkcmFnZ2FibGUpXG4gICAgfSlcblxuICAgIHRoaXMub25BZGQuZmlyZShkcmFnZ2FibGUpXG4gIH1cblxuICByZW1vdmUoZHJhZ2dhYmxlKSB7XG4gICAgZHJhZ2dhYmxlLm9uTW92ZS5yZW1vdmUodGhpcy5yZW1vdmVIYW5kbGVyKVxuXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSlcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5zcGxpY2UoaW5kZXgsIDEpXG5cbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgfSksIFtdKVxuXG4gICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBbXSlcbiAgICB0aGlzLm9uUmVtb3ZlLmZpcmUoZHJhZ2dhYmxlKVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUubW92ZShkcmFnZ2FibGUuaW5pdFBvc2l0aW9uLCAwLCB0cnVlLCB0cnVlKVxuICAgICAgdGhpcy5vblJlbW92ZS5maXJlKGRyYWdnYWJsZSlcbiAgICB9KVxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzID0gW11cbiAgfVxuXG4gIGdldFNvcnRlZERyYWdnYWJsZXMoKSB7XG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuc2xpY2UoKVxuICB9XG59XG5cblRhcmdldC5vbkNyZWF0ZSA9IG5ldyBEcmFnZWUuRXZlbnQoVGFyZ2V0LCB7IGlzUmV2ZXJzZTogdHJ1ZSwgaXNTdG9wT25UcnVlOiB0cnVlIH0pXG5UYXJnZXQub25DcmVhdGUuYWRkKGFkZFRvRGVmYXVsdFNjb3BlKVxuXG5leHBvcnQgeyB0YXJnZXRzLCBUYXJnZXQgfVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGhhc0NsYXNzKGVsZW1lbnQsIGMpIHtcbiAgY29uc3QgcmUgPSBuZXcgUmVnRXhwKCcoXnxcXFxccyknICsgYyArICcoXFxcXHN8JCknLCAnZycpXG4gIHJldHVybiAocmUudGVzdChlbGVtZW50LmNsYXNzTmFtZSkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRDbGFzcyhlbGVtZW50LCBjKSB7XG4gIGlmICghaGFzQ2xhc3MoZWxlbWVudCwgYykpIHtcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IChlbGVtZW50LmNsYXNzTmFtZSArICcgJyArIGMpLnJlcGxhY2UoL1xccysvZywgJyAnKS5yZXBsYWNlKC8oXiB8ICQpL2csICcnKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDbGFzcyhlbGVtZW50LCBjKSB7XG4gIGNvbnN0IHJlID0gbmV3IFJlZ0V4cCgnKF58XFxcXHMpJyArIGMgKyAnKFxcXFxzfCQpJywgJ2cnKVxuICBlbGVtZW50LmNsYXNzTmFtZSA9IGVsZW1lbnQuY2xhc3NOYW1lLnJlcGxhY2UocmUsICckMScpLnJlcGxhY2UoL1xccysvZywgJyAnKS5yZXBsYWNlKC8oXiB8ICQpL2csICcnKVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0RGVmYXVsdFBhcmVudChlbGVtZW50KSB7XG4gIGxldCBwYXJlbnQgPSBlbGVtZW50LnBhcmVudE5vZGVcbiAgd2hpbGUgKHBhcmVudC5wYXJlbnROb2RlICYmIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHBhcmVudClbJ3Bvc2l0aW9uJ10gPT09ICdzdGF0aWMnKSB7XG4gICAgcGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGVcbiAgfVxuICByZXR1cm4gcGFyZW50XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByYW5nZShzdGFydCwgc3RvcCwgc3RlcCkge1xuICBjb25zdCByZXN1bHQgPSBbXVxuICBpZiAodHlwZW9mIHN0b3AgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgc3RvcCA9IHN0YXJ0XG4gICAgc3RhcnQgPSAwXG4gIH1cbiAgaWYgKHR5cGVvZiBzdGVwID09PSAndW5kZWZpbmVkJykge1xuICAgIHN0ZXAgPSAxXG4gIH1cbiAgaWYgKChzdGVwID4gMCAmJiBzdGFydCA+PSBzdG9wKSB8fCAoc3RlcCA8IDAgJiYgc3RhcnQgPD0gc3RvcCkpIHtcbiAgICByZXR1cm4gW11cbiAgfVxuICBmb3IgKGxldCBpID0gc3RhcnQ7IHN0ZXAgPiAwID8gaSA8IHN0b3AgOiBpID4gc3RvcDsgaSArPSBzdGVwKSB7XG4gICAgcmVzdWx0LnB1c2goaSlcbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG4iXSwic291cmNlUm9vdCI6IiJ9