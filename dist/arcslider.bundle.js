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
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/util.js");
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event */ "./src/event.js");
/* harmony import */ var desandro_get_style_property__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! desandro-get-style-property */ "./node_modules/desandro-get-style-property/get-style-property.js");
/* harmony import */ var desandro_get_style_property__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(desandro_get_style_property__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bound__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bound */ "./src/bound.js");
/* harmony import */ var _geometry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./geometry */ "./src/geometry.js");
/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scope */ "./src/scope.js");


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







var Dragee = {
  Event: _event__WEBPACK_IMPORTED_MODULE_1__["default"]
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
    transformProperty = desandro_get_style_property__WEBPACK_IMPORTED_MODULE_2___default()('transform'),
    transitionProperty = desandro_get_style_property__WEBPACK_IMPORTED_MODULE_2___default()('transition');

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
  _scope__WEBPACK_IMPORTED_MODULE_5__["defaultScope"].addDraggable(draggable);
}

var Draggable =
/*#__PURE__*/
function () {
  function Draggable(element) {
    var _this = this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Draggable);

    var parent = options.parent || Object(_util__WEBPACK_IMPORTED_MODULE_0__["getDefaultParent"])(element);
    this.targets = [];
    this.options = Object.assign({
      parent: parent,
      bound: Object(_bound__WEBPACK_IMPORTED_MODULE_3__["boundToElement"])(parent, parent),
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
      this.offset = _geometry__WEBPACK_IMPORTED_MODULE_4__["Geometry"].getOffset(this.element, this.options.parent, true);
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
      this.offset = _geometry__WEBPACK_IMPORTED_MODULE_4__["Geometry"].getOffset(this.element, this.options.parent, true);
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
      return _geometry__WEBPACK_IMPORTED_MODULE_4__["Geometry"].getSizeOfElement(this.element, this.options.isContentBoxSize);
    }
  }, {
    key: "getPosition",
    value: function getPosition() {
      this.position = this.offset.add(this._transformPosition || new _geometry__WEBPACK_IMPORTED_MODULE_4__["Point"](0, 0));
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
      this._startTouchPoint = new _geometry__WEBPACK_IMPORTED_MODULE_4__["Point"](isTouchEvent ? event.changedTouches[0].pageX : event.clientX, isTouchEvent ? event.changedTouches[0].pageY : event.clientY);
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
      Object(_util__WEBPACK_IMPORTED_MODULE_0__["addClass"])(this.element, 'active');
      this.onMove.fire(event);
    }
  }, {
    key: "dragMove",
    value: function dragMove(event) {
      this.currentEvent = event;
      var touch;
      var isTouchEvent = isTouch && event instanceof window.TouchEvent;

      if (isTouchEvent) {
        touch = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getTouchByID"])(event, this._touchId);

        if (!touch) {
          return;
        }
      }

      event.stopPropagation();
      event.preventDefault();
      var touchPoint = new _geometry__WEBPACK_IMPORTED_MODULE_4__["Point"](isTouchEvent ? touch.pageX : event.clientX, isTouchEvent ? touch.pageY : event.clientY);

      var point = this._startPosition.add(touchPoint.sub(this._startTouchPoint));

      point = this.bound(point, this.getSize());
      this.touchPoint = touchPoint;
      this.move(point, 0);
    }
  }, {
    key: "dragEnd",
    value: function dragEnd(event) {
      var isTouchEvent = isTouch && event instanceof window.TouchEvent;

      if (isTouchEvent && !Object(_util__WEBPACK_IMPORTED_MODULE_0__["getTouchByID"])(event, this._touchId)) {
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
      Object(_util__WEBPACK_IMPORTED_MODULE_0__["removeClass"])(this.element, 'active');
    }
  }, {
    key: "getRectangle",
    value: function getRectangle() {
      return new _geometry__WEBPACK_IMPORTED_MODULE_4__["Rectangle"](this.position, this.getSize());
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
        Object(_util__WEBPACK_IMPORTED_MODULE_0__["removeClass"])(this.element, 'disable');
      } else {
        Object(_util__WEBPACK_IMPORTED_MODULE_0__["addClass"])(this.element, 'disable');
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
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/util.js");



/*********************/

function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function () {
  return '{x=' + this.x + ',y=' + this.y + '}';
};

Point.prototype.add = function (p) {
  return new Point(this.x + p.x, this.y + p.y);
};

Point.prototype.sub = function (p) {
  return new Point(this.x - p.x, this.y - p.y);
};

Point.prototype.mult = function (k) {
  return new Point(this.x * k, this.y * k);
};

Point.prototype.negative = function () {
  return new Point(-this.x, -this.y);
};

Point.prototype.compare = function (p) {
  return this.x === p.x && this.y === p.y;
};

Point.prototype.clone = function () {
  return new Point(this.x, this.y);
};
/****************/


function Rectangle(position, size) {
  this.position = position;
  this.size = size;
}

Rectangle.prototype.getP1 = function () {
  return this.position;
};

Rectangle.prototype.getP2 = function () {
  return new Point(this.position.x + this.size.x, this.position.y);
};

Rectangle.prototype.getP3 = function () {
  return this.position.add(this.size);
};

Rectangle.prototype.getP4 = function () {
  return new Point(this.position.x, this.position.y + this.size.y);
};

Rectangle.prototype.getCenter = function () {
  return this.position.add(this.size.mult(0.5));
};

Rectangle.prototype.or = function (rect) {
  var position = new Point(Math.min(this.position.x, rect.position.x), Math.min(this.position.y, rect.position.y)),
      size = new Point(Math.max(this.position.x + this.size.x, rect.position.x + rect.size.x), Math.max(this.position.y + this.size.y, rect.position.y + rect.size.y)).sub(position);
  return new Rectangle(position, size);
};

Rectangle.prototype.and = function (rect) {
  var position = new Point(Math.max(this.position.x, rect.position.x), Math.max(this.position.y, rect.position.y)),
      size = new Point(Math.min(this.position.x + this.size.x, rect.position.x + rect.size.x), Math.min(this.position.y + this.size.y, rect.position.y + rect.size.y)).sub(position);

  if (size.x <= 0 || size.y <= 0) {
    return null;
  }

  return new Rectangle(position, size);
};

Rectangle.prototype.includePoint = function (p) {
  return !(this.position.x > p.x || this.position.x + this.size.x < p.x || this.position.y > p.y || this.position.y + this.size.y < p.y);
};

Rectangle.prototype.includeRectangle = function (rectangle) {
  return this.includePoint(rectangle.position) && this.includePoint(rectangle.getP3());
};

Rectangle.prototype.moveToBound = function (rect, axis) {
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
};

Rectangle.prototype.getSquare = function () {
  return this.size.x * this.size.y;
};

Rectangle.prototype.styleApply = function (el) {
  el = el || document.querySelector('ind');
  el.style.left = this.position.x + 'px';
  el.style.top = this.position.y + 'px';
  el.style.width = this.size.x + 'px';
  el.style.height = this.size.y + 'px';
};

Rectangle.prototype.growth = function (size) {
  this.size = this.size.add(size);
  this.position = this.position.add(size.mult(-0.5));
};

Rectangle.prototype.getMinSide = function () {
  return Math.min(this.size.x, this.size.y);
};
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
  indexOfNearPoint: function indexOfNearPoint(arr, val, radius, getDistance) {
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
  //Get point and check that point belong to segment of the line
  // if not - return the nearest point of segment
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
  getSizeOfElement: function getSizeOfElement(el, isContentBoxSize) {
    var width = parseInt(window.getComputedStyle(el)['width']),
        height = parseInt(window.getComputedStyle(el)['height']);

    if (!isContentBoxSize) {
      width += _util__WEBPACK_IMPORTED_MODULE_0__["default"].getSumValueOfStyleRule(el, ['padding-left', 'padding-right', 'border-left-width', 'border-right-width']);
      height += _util__WEBPACK_IMPORTED_MODULE_0__["default"].getSumValueOfStyleRule(el, ['padding-top', 'padding-bottom', 'border-top-width', 'border-bottom-width']);
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
            var index = _geometry__WEBPACK_IMPORTED_MODULE_0__["Geometry"].indexOfNearPoint(listOldPosition, options.getPosition(newObj), radius, getDistance);

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
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/util.js");
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
          Object(_util__WEBPACK_IMPORTED_MODULE_0__["removeItem"])(scope.draggables, draggable);
        });
      }

      if (targets) {
        targets.forEach(function (target) {
          Object(_util__WEBPACK_IMPORTED_MODULE_0__["removeItem"])(scope.targets, target);
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
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/util.js");
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event */ "./src/event.js");
/* harmony import */ var _geometry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./geometry */ "./src/geometry.js");
/* harmony import */ var _positioning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./positioning */ "./src/positioning.js");
/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scope */ "./src/scope.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var Dragee = {
  positionType: _positioning__WEBPACK_IMPORTED_MODULE_3__["positionType"],
  positionFactory: _positioning__WEBPACK_IMPORTED_MODULE_3__["positionFactory"],
  sortingFactory: _positioning__WEBPACK_IMPORTED_MODULE_3__["sortingFactory"],
  scopes: _scope__WEBPACK_IMPORTED_MODULE_4__["scopes"],
  Event: _event__WEBPACK_IMPORTED_MODULE_1__["default"]
}; //todo remove after refactore

var targets = [],
    addToDefaultScope = function addToDefaultScope(target) {
  _scope__WEBPACK_IMPORTED_MODULE_4__["defaultScope"].addTarget(target);
};

var Target =
/*#__PURE__*/
function () {
  function Target(element, draggables) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, Target);

    var target = this;
    var parent = options.parent || Object(_util__WEBPACK_IMPORTED_MODULE_0__["getDefaultParent"])(element);
    this.options = Object.assign({
      timeEnd: 200,
      timeExcange: 400,
      parent: parent,
      sorting: Dragee.sortingFactory(Dragee.positionType.floatLeft)(80, _geometry__WEBPACK_IMPORTED_MODULE_2__["Geometry"].transformedSpaceDistanceFactory({
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
        indexesOfNew = Object(_util__WEBPACK_IMPORTED_MODULE_0__["range"])(this.innerDraggables.length);
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
      return _geometry__WEBPACK_IMPORTED_MODULE_2__["Geometry"].createRectangleFromElement(this.element, this.options.parent, this.options.isContentBoxSize, true);
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
        return Object(_util__WEBPACK_IMPORTED_MODULE_0__["removeItem"])(scope.targets, _this2);
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
          Object(_util__WEBPACK_IMPORTED_MODULE_0__["removeItem"])(_this3.innerDraggables, draggable);

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

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: getDefaultParent, getTouchByID, getSumValueOfStyleRule, range, hasClass, addClass, removeClass, removeItem, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultParent", function() { return getDefaultParent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTouchByID", function() { return getTouchByID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSumValueOfStyleRule", function() { return getSumValueOfStyleRule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "range", function() { return range; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasClass", function() { return hasClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addClass", function() { return addClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeClass", function() { return removeClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeItem", function() { return removeItem; });


function getDefaultParent(element) {
  var parent = element.parentNode;

  while (parent.parentNode && window.getComputedStyle(parent)['position'] === 'static') {
    parent = parent.parentNode;
  }

  return parent;
}

function getTouchByID(element, touchId) {
  for (var i = 0; i < element.changedTouches.length; i++) {
    if (element.changedTouches[i].identifier === touchId) {
      return element.changedTouches[i];
    }
  }

  return false;
}

function getSumValueOfStyleRule(element, rules) {
  return rules.reduce(function (sum, rule) {
    return sum + parseInt(window.getComputedStyle(element)[rule] || 0);
  }, 0);
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

function removeItem(array, val) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === val) {
      array.splice(i, 1);
      i--;
    }
  }

  return array;
}

var util = {
  getDefaultParent: getDefaultParent,
  getTouchByID: getTouchByID,
  getSumValueOfStyleRule: getSumValueOfStyleRule,
  range: range,
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  removeItem: removeItem
};

/* harmony default export */ __webpack_exports__["default"] = (util);

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9EcmFnZWUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0RyYWdlZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9EcmFnZWUvLi9ub2RlX21vZHVsZXMvZGVzYW5kcm8tZ2V0LXN0eWxlLXByb3BlcnR5L2dldC1zdHlsZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvYXJjc2xpZGVyLmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy9ib3VuZC5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvZHJhZ2dhYmxlLmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy9ldmVudC5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvZ2VvbWV0cnkuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL3Bvc2l0aW9uaW5nLmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy9zY29wZS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvdGFyZ2V0LmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy91dGlsLmpzIl0sIm5hbWVzIjpbImFyY1NsaWRlcnMiLCJBcmNTbGlkZXIiLCJhcmVhIiwiZWxlbWVudCIsIm9wdGlvbnMiLCJhcmVhUmVjdGFuZ2xlIiwiR2VvbWV0cnkiLCJjcmVhdGVSZWN0YW5nbGVGcm9tRWxlbWVudCIsImhhbGZTaXplIiwiZ2V0U2l6ZU9mRWxlbWVudCIsIm11bHQiLCJPYmplY3QiLCJhc3NpZ24iLCJjZW50ZXIiLCJnZXRDZW50ZXIiLCJyYWRpdXMiLCJnZXRNaW5TaWRlIiwic3RhcnRBbmdsZSIsIk1hdGgiLCJQSSIsImVuZEFuZ2xlIiwiYW5nbGVzIiwib25DaGFuZ2UiLCJ0aW1lIiwic2hpZnRlZENlbnRlciIsInN1YiIsInB1c2giLCJpbml0IiwiYW5nbGUiLCJwb3NpdGlvbiIsImdldFBvaW50RnJvbVJhZGlhbFN5c3RlbSIsImJvdW5kIiwiYm91bmRUb0FyYyIsImRyYWdnYWJsZSIsIkRyYWdnYWJsZSIsInBhcmVudCIsIm9uTW92ZSIsImNoYW5nZSIsImdldEFuZ2xlIiwidXBkYXRlQW5nbGUiLCJub3JtYWxpemVBbmdsZSIsIm1vdmUiLCJib3VuZFRvUmVjdGFuZ2xlIiwicmVjdGFuZ2xlIiwicG9pbnQiLCJzaXplIiwiY2FsY1BvaW50IiwiY2xvbmUiLCJyZWN0UDIiLCJnZXRQMyIsIngiLCJ5IiwiYm91bmRUb0VsZW1lbnQiLCJyZXRGdW5jIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJyZWZyZXNoIiwiYm91bmRUb0xpbmVYIiwic3RhcnRZIiwiZW5kWSIsImJvdW5kVG9MaW5lWSIsInN0YXJ0WCIsImVuZFgiLCJib3VuZFRvTGluZSIsInN0YXJ0IiwiZW5kIiwiYWxwaGEiLCJhdGFuMiIsImJldGEiLCJzb21lSyIsImNvc0JldGEiLCJjb3MiLCJzaW5CZXRhIiwic2luIiwicG9pbnQyIiwiUG9pbnQiLCJuZXdFbmQiLCJnZXRQb2ludEluTGluZUJ5TGVuZ2h0IiwicG9pbnRDcm9zc2luZyIsImRpcmVjdENyb3NzaW5nIiwiYm91bmRUb0NpcmNsZSIsIl9zaXplIiwiYm91bmRlZFBvaW50Iiwic3RhcnRBZ2xlIiwiYm91bmRTdGFydEFuZ2xlIiwiYm91bmRFbmR0QW5nbGUiLCJib3VuZEFuZ2xlIiwiRHJhZ2VlIiwiRXZlbnQiLCJpc1RvdWNoIiwid2luZG93IiwibW91c2VFdmVudHMiLCJ0b3VjaEV2ZW50cyIsImV2ZW50cyIsImRyYWdnYWJsZXMiLCJ0cmFuc2Zvcm1Qcm9wZXJ0eSIsImdldFN0eWxlUHJvcGVydHkiLCJ0cmFuc2l0aW9uUHJvcGVydHkiLCJwcmV2ZW50RG91YmxlSW5pdCIsIm1lc3NhZ2UiLCJzb21lIiwiZXhpc3RpbmciLCJhZGRUb0RlZmF1bHRTY29wZSIsImRlZmF1bHRTY29wZSIsImFkZERyYWdnYWJsZSIsImdldERlZmF1bHRQYXJlbnQiLCJ0YXJnZXRzIiwic3RhcnRGaWx0ZXIiLCJpc0NvbnRlbnRCb3hTaXplIiwib25FbmQiLCJpc1JldmVyc2UiLCJpc1N0b3BPblRydWUiLCJvblN0YXJ0IiwiYWRkIiwib25DcmVhdGUiLCJmaXJlIiwiX2VuYWJsZSIsIm9mZnNldCIsImdldE9mZnNldCIsImZpeFBvc2l0aW9uIiwiaW5pdFBvc2l0aW9uIiwiX2RyYWdTdGFydCIsImRyYWdTdGFydCIsImJpbmQiLCJfZHJhZ01vdmUiLCJkcmFnTW92ZSIsIl9kcmFnRW5kIiwiZHJhZ0VuZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJfcmVjYWx1bGF0ZSIsIl90cmFuc2Zvcm1Qb3NpdGlvbiIsImdldFNpemUiLCJ0cmFuc2Zvcm0iLCJzdHlsZSIsInRyYW5zbGF0ZUNzcyIsInVhIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwibXNpZSIsImluZGV4T2YiLCJ0ZXN0IiwicmVwbGFjZSIsImlzRml4IiwiaXNTaWxlbnQiLCJkZXRlcm1pbmVEaXJlY3Rpb24iLCJfc2V0VHJhbnNsYXRlIiwic2V0UG9zaXRpb24iLCJnZXRQb3NpdGlvbiIsImxlZnREaXJlY3Rpb24iLCJyaWdodERpcmVjdGlvbiIsInVwRGlyZWN0aW9uIiwiZG93bkRpcmVjdGlvbiIsImV2ZW50IiwiY3VycmVudEV2ZW50IiwiaXNUb3VjaEV2ZW50IiwiVG91Y2hFdmVudCIsIl9zdGFydFRvdWNoUG9pbnQiLCJjaGFuZ2VkVG91Y2hlcyIsInBhZ2VYIiwiY2xpZW50WCIsInBhZ2VZIiwiY2xpZW50WSIsIl9zdGFydFBvc2l0aW9uIiwiX3RvdWNoSWQiLCJpZGVudGlmaWVyIiwic3RvcFByb3BhZ2F0aW9uIiwidGFyZ2V0IiwiSFRNTElucHV0RWxlbWVudCIsInByZXZlbnREZWZhdWx0IiwiZm9jdXMiLCJkb2N1bWVudCIsImlzRHJhZ2dpbmciLCJhZGRDbGFzcyIsInRvdWNoIiwiZ2V0VG91Y2hCeUlEIiwidG91Y2hQb2ludCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZW1vdmVDbGFzcyIsIlJlY3RhbmdsZSIsInJlc2V0IiwiZW5hYmxlIiwiY29udGV4dCIsImZ1bmNzIiwicHJvdG90eXBlIiwiYXJncyIsInNsaWNlIiwiY2FsbCIsImZzIiwicmV2ZXJzZSIsInJldFZhbHVlIiwiaSIsImxlbmd0aCIsImYiLCJ1bnNoaWZ0IiwicmVtb3ZlIiwiaW5kZXgiLCJzcGxpY2UiLCJfZiIsInRvU3RyaW5nIiwicCIsImsiLCJuZWdhdGl2ZSIsImNvbXBhcmUiLCJnZXRQMSIsImdldFAyIiwiZ2V0UDQiLCJvciIsInJlY3QiLCJtaW4iLCJtYXgiLCJhbmQiLCJpbmNsdWRlUG9pbnQiLCJpbmNsdWRlUmVjdGFuZ2xlIiwibW92ZVRvQm91bmQiLCJheGlzIiwic2VsQXhpcyIsImNyb3NzUmVjdGFuZ2xlIiwidGhpc0NlbnRlciIsInJlY3RDZW50ZXIiLCJzaWduIiwiZ2V0U3F1YXJlIiwic3R5bGVBcHBseSIsImVsIiwicXVlcnlTZWxlY3RvciIsImxlZnQiLCJ0b3AiLCJ3aWR0aCIsImhlaWdodCIsImdyb3d0aCIsImdldERpc3RhbmNlIiwicDEiLCJwMiIsImR4IiwiZHkiLCJzcXJ0IiwiZGlzdGFuY2UiLCJnZXRYRGlmZmVyZW5jZSIsImFicyIsImdldFlEaWZmZXJlbmNlIiwidHJhbnNmb3JtZWRTcGFjZURpc3RhbmNlRmFjdG9yeSIsInBvdyIsImluZGV4T2ZOZWFyUG9pbnQiLCJhcnIiLCJ2YWwiLCJ0ZW1wIiwiYm91bmRQb2ludCIsIkwxUDEiLCJMMVAyIiwiTDJQMSIsIkwyUDIiLCJrMSIsImsyIiwiYjEiLCJiMiIsImJvdW5kVG9TZWdtZW50IiwiTFAxIiwiTFAyIiwiUCIsIkEiLCJCIiwiQVAiLCJBQiIsImFiMiIsImFwX2FiIiwidCIsImdldFBvaW50SW5MaW5lIiwicGVyY2VudCIsImxlbmdodCIsImlzQ29uc2lkZXJUcmFuc2xhdGUiLCJwYXJlbnROb2RlIiwicGFyc2VJbnQiLCJnZXRDb21wdXRlZFN0eWxlIiwidXRpbCIsImdldFN1bVZhbHVlT2ZTdHlsZVJ1bGUiLCJlbFJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJwYXJlbnRSZWN0IiwiYWRkUG9pbnRUb0JvdW5kUG9pbnRzIiwiYm91bmRwb2ludHMiLCJpc1JpZ2h0IiwicmVzdWx0IiwiZmlsdGVyIiwiYlBvaW50IiwiZGlmZiIsInRvUmFkaWFuIiwidG9EZWdyZWUiLCJkbWluIiwiZG1heCIsImdldEFuZ2xlRGlmZiIsImdldE5lYXJlc3RBbmdsZSIsInZhbHVlIiwibWluQW5nbGUiLCJtYXhBbmdsZSIsInBvc2l0aW9uVHlwZSIsIm5vdENyb3NzaW5nIiwiZmxvYXRMZWZ0IiwiZmxvYXRSaWdodCIsInBvc2l0aW9uRmFjdG9yeSIsInR5cGUiLCJfb3B0aW9ucyIsInJlY3RhbmdsZUxpc3QiLCJpbmRleGVzT2ZOZXdzIiwiYm91bmRSZWN0Iiwic3RhdGljUmVjdGFuZ2xlSW5kZXhlcyIsInJlZHVjZSIsImluZGV4ZXMiLCJfcmVjdCIsImZvckVhY2giLCJyZW1vdmFibGUiLCJpbmRleE9mU3RhdGljIiwic3RhdGljUmVjdCIsInBhZGRpbmdUb3BMZWZ0IiwicGFkZGluZ0JvdHRvbVJpZ2h0IiwieUdhcEJldHdlZW5EcmFnZ2FibGVzIiwiX2luZGV4ZXNPZk5ld3MiLCJib3VuZGFyeVBvaW50cyIsImlzVmFsaWQiLCJhc3NpbmciLCJwYWRkaW5nVG9wUmlnaHQiLCJwYWRkaW5nQm90dG9tTGVmdCIsInBhZGRpbmdUb3BOZWdSaWdodCIsInBhZGRpbmdCb3R0b21OZWdMZWZ0IiwiZ2V0UmlnaHRUb3BQb2ludCIsIl9pbmRleCIsImdldExlZnRCb3R0b21Qb2ludCIsInNvcnRpbmdGYWN0b3J5Iiwib2xkT2Jqc0xpc3QiLCJuZXdPYmpzIiwiaW5kZXhPZk5ld3MiLCJvYmpzTGlzdCIsImNvbmNhdCIsIm9iaiIsIm5ld0xpc3QiLCJsaXN0T2xkUG9zaXRpb24iLCJtYXAiLCJuZXdPYmoiLCJzY29wZXMiLCJTY29wZSIsInNjb3BlIiwicmVtb3ZlSXRlbSIsInRpbWVFbmQiLCJzaG90VGFyZ2V0cyIsImNhdGNoRHJhZ2dhYmxlIiwic29ydCIsImEiLCJiIiwiZ2V0UmVjdGFuZ2xlIiwiaW5uZXJEcmFnZ2FibGVzIiwicG9zaXRpb25zIiwidGFyZ2V0SW5kZXhlcyIsImZuIiwiY3VycmVudFNjb3BlIiwiYWRkRHJhZ2dhYmxlVG9TY29wZSIsImFkZFRhcmdldFRvU2NvcGUiLCJhZGRUYXJnZXQiLCJUYXJnZXQiLCJzY29wZUZhY3RvcnkiLCJwYXJlbnRFbGVtZW50IiwiZHJhZ2dhYmxlRWxlbWVudHMiLCJ0YXJnZXRFbGVtZW50cyIsImRyYWdnYWJsZU9wdGlvbnMiLCJ0YXJnZXRPcHRpb25zIiwic2NvcGVPcHRpb25zIiwiQXJyYXkiLCJ0aW1lRXhjYW5nZSIsInNvcnRpbmciLCJwb3NpdGlvbmluZyIsIm9uQWRkIiwiYmVmb3JlQWRkIiwib25SZW1vdmUiLCJyZWN0YW5nbGVzIiwiaW5kZXhlc09mTmV3IiwicmFuZ2UiLCJ0YXJnZXRSZWN0YW5nbGUiLCJkcmFnZ2FibGVTcXVhcmUiLCJuZXdEcmFnZ2FibGVzSW5kZXgiLCJhZGRSZW1vdmVPbk1vdmUiLCJwdXNoSW5uZXJEcmFnZ2FibGUiLCJyZW1vdmVIYW5kbGVyIiwidG91Y2hJZCIsInJ1bGVzIiwic3VtIiwicnVsZSIsInN0b3AiLCJzdGVwIiwiaGFzQ2xhc3MiLCJjIiwicmUiLCJSZWdFeHAiLCJjbGFzc05hbWUiLCJhcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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QVNzTSxVQUFULENBQW9CbUQsS0FBcEIsRUFBMkJuSixHQUEzQixFQUFnQztBQUM5QixPQUFLLElBQUlyRCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHd00sS0FBSyxDQUFDdk0sTUFBMUIsRUFBa0NELENBQUMsRUFBbkMsRUFBdUM7QUFDckMsUUFBSXdNLEtBQUssQ0FBQ3hNLENBQUQsQ0FBTCxLQUFhcUQsR0FBakIsRUFBc0I7QUFDcEJtSixXQUFLLENBQUNsTSxNQUFOLENBQWFOLENBQWIsRUFBZ0IsQ0FBaEI7QUFDQUEsT0FBQztBQUNGO0FBQ0Y7O0FBQ0QsU0FBT3dNLEtBQVA7QUFDRDs7QUFFRCxJQUFNdEgsSUFBSSxHQUFHO0FBQ1h2SyxrQkFBZ0IsRUFBaEJBLGdCQURXO0FBRVhxRSxjQUFZLEVBQVpBLFlBRlc7QUFHWG1HLHdCQUFzQixFQUF0QkEsc0JBSFc7QUFJWG1HLE9BQUssRUFBTEEsS0FKVztBQUtYYSxVQUFRLEVBQVJBLFFBTFc7QUFNWHJOLFVBQVEsRUFBUkEsUUFOVztBQU9YSyxhQUFXLEVBQVhBLFdBUFc7QUFRWGtLLFlBQVUsRUFBVkE7QUFSVyxDQUFiO0FBV0E7QUFXZW5FLG1FQUFmLEUiLCJmaWxlIjoiYXJjc2xpZGVyLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiRHJhZ2VlXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkRyYWdlZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJEcmFnZWVcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2FyY3NsaWRlci5qc1wiKTtcbiIsIi8qIVxuICogZ2V0U3R5bGVQcm9wZXJ0eSB2MS4wLjRcbiAqIG9yaWdpbmFsIGJ5IGthbmdheFxuICogaHR0cDovL3BlcmZlY3Rpb25raWxscy5jb20vZmVhdHVyZS10ZXN0aW5nLWNzcy1wcm9wZXJ0aWVzL1xuICogTUlUIGxpY2Vuc2VcbiAqL1xuXG4vKmpzaGludCBicm93c2VyOiB0cnVlLCBzdHJpY3Q6IHRydWUsIHVuZGVmOiB0cnVlICovXG4vKmdsb2JhbCBkZWZpbmU6IGZhbHNlLCBleHBvcnRzOiBmYWxzZSwgbW9kdWxlOiBmYWxzZSAqL1xuXG4oIGZ1bmN0aW9uKCB3aW5kb3cgKSB7XG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHByZWZpeGVzID0gJ1dlYmtpdCBNb3ogbXMgTXMgTycuc3BsaXQoJyAnKTtcbnZhciBkb2NFbGVtU3R5bGUgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGU7XG5cbmZ1bmN0aW9uIGdldFN0eWxlUHJvcGVydHkoIHByb3BOYW1lICkge1xuICBpZiAoICFwcm9wTmFtZSApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyB0ZXN0IHN0YW5kYXJkIHByb3BlcnR5IGZpcnN0XG4gIGlmICggdHlwZW9mIGRvY0VsZW1TdHlsZVsgcHJvcE5hbWUgXSA9PT0gJ3N0cmluZycgKSB7XG4gICAgcmV0dXJuIHByb3BOYW1lO1xuICB9XG5cbiAgLy8gY2FwaXRhbGl6ZVxuICBwcm9wTmFtZSA9IHByb3BOYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcHJvcE5hbWUuc2xpY2UoMSk7XG5cbiAgLy8gdGVzdCB2ZW5kb3Igc3BlY2lmaWMgcHJvcGVydGllc1xuICB2YXIgcHJlZml4ZWQ7XG4gIGZvciAoIHZhciBpPTAsIGxlbiA9IHByZWZpeGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrICkge1xuICAgIHByZWZpeGVkID0gcHJlZml4ZXNbaV0gKyBwcm9wTmFtZTtcbiAgICBpZiAoIHR5cGVvZiBkb2NFbGVtU3R5bGVbIHByZWZpeGVkIF0gPT09ICdzdHJpbmcnICkge1xuICAgICAgcmV0dXJuIHByZWZpeGVkO1xuICAgIH1cbiAgfVxufVxuXG4vLyB0cmFuc3BvcnRcbmlmICggdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAvLyBBTURcbiAgZGVmaW5lKCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZ2V0U3R5bGVQcm9wZXJ0eTtcbiAgfSk7XG59IGVsc2UgaWYgKCB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgKSB7XG4gIC8vIENvbW1vbkpTIGZvciBDb21wb25lbnRcbiAgbW9kdWxlLmV4cG9ydHMgPSBnZXRTdHlsZVByb3BlcnR5O1xufSBlbHNlIHtcbiAgLy8gYnJvd3NlciBnbG9iYWxcbiAgd2luZG93LmdldFN0eWxlUHJvcGVydHkgPSBnZXRTdHlsZVByb3BlcnR5O1xufVxuXG59KSggd2luZG93ICk7XG4iLCJpbXBvcnQgeyBHZW9tZXRyeSB9IGZyb20gJy4vZ2VvbWV0cnknXG5pbXBvcnQgeyBEcmFnZ2FibGUgfSBmcm9tICcuL2RyYWdnYWJsZSdcbmltcG9ydCB7IGJvdW5kVG9BcmMgfSBmcm9tICcuL2JvdW5kJ1xuXG5jb25zdCBhcmNTbGlkZXJzID0gW11cblxuY2xhc3MgQXJjU2xpZGVyIHtcbiAgY29uc3RydWN0b3IoYXJlYSwgZWxlbWVudCwgb3B0aW9ucz17fSkge1xuICAgIGNvbnN0IGFyZWFSZWN0YW5nbGUgPSBHZW9tZXRyeS5jcmVhdGVSZWN0YW5nbGVGcm9tRWxlbWVudChhcmVhLCBhcmVhKVxuICAgIGNvbnN0IGhhbGZTaXplID0gR2VvbWV0cnkuZ2V0U2l6ZU9mRWxlbWVudChlbGVtZW50KS5tdWx0KDAuNSlcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNlbnRlcjogYXJlYVJlY3RhbmdsZS5nZXRDZW50ZXIoKSxcbiAgICAgIHJhZGl1czogYXJlYVJlY3RhbmdsZS5nZXRNaW5TaWRlKCkgLyAyLFxuICAgICAgc3RhcnRBbmdsZTogTWF0aC5QSSxcbiAgICAgIGVuZEFuZ2xlOiAwLFxuICAgICAgYW5nbGVzOiBbTWF0aC5QSSwgLU1hdGguUEkgLyA0LCAwLCBNYXRoLlBJIC8gNCwgTWF0aC5QSSAvIDJdLFxuICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uKCkge30sXG4gICAgICB0aW1lOiA1MDBcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGhpcy5zaGlmdGVkQ2VudGVyID0gdGhpcy5vcHRpb25zLmNlbnRlci5zdWIoaGFsZlNpemUpXG4gICAgdGhpcy5vbkNoYW5nZSA9IHRoaXMub3B0aW9ucy5vbkNoYW5nZVxuICAgIGFyY1NsaWRlcnMucHVzaCh0aGlzKVxuICAgIHRoaXMuYXJlYSA9IGFyZWFcbiAgICB0aGlzLmluaXQoZWxlbWVudClcbiAgfVxuXG4gIGluaXQoZWxlbWVudCkge1xuICAgIGNvbnN0IGFuZ2xlID0gdGhpcy5vcHRpb25zLnN0YXJ0QW5nbGVcbiAgICBjb25zdCBwb3NpdGlvbiA9IEdlb21ldHJ5LmdldFBvaW50RnJvbVJhZGlhbFN5c3RlbShcbiAgICAgIGFuZ2xlLFxuICAgICAgdGhpcy5vcHRpb25zLnJhZGl1cyxcbiAgICAgIHRoaXMuc2hpZnRlZENlbnRlclxuICAgIClcbiAgICBjb25zdCBib3VuZCA9IGJvdW5kVG9BcmMoXG4gICAgICB0aGlzLnNoaWZ0ZWRDZW50ZXIsXG4gICAgICB0aGlzLm9wdGlvbnMucmFkaXVzLFxuICAgICAgdGhpcy5vcHRpb25zLnN0YXJ0QW5nbGUsXG4gICAgICB0aGlzLm9wdGlvbnMuZW5kQW5nbGVcbiAgICApXG5cbiAgICB0aGlzLmFuZ2xlID0gYW5nbGVcbiAgICB0aGlzLmRyYWdnYWJsZSA9IG5ldyBEcmFnZ2FibGUoZWxlbWVudCwge1xuICAgICAgcGFyZW50OiB0aGlzLmFyZWEsXG4gICAgICBib3VuZDogYm91bmQsXG4gICAgICBwb3NpdGlvbjogcG9zaXRpb24sXG4gICAgICBvbk1vdmU6ICgpID0+IHtcbiAgICAgICAgdGhpcy5jaGFuZ2UoKVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICB1cGRhdGVBbmdsZSgpIHtcbiAgICB0aGlzLmFuZ2xlID0gR2VvbWV0cnkuZ2V0QW5nbGUodGhpcy5zaGlmdGVkQ2VudGVyLCB0aGlzLmRyYWdnYWJsZS5wb3NpdGlvbilcbiAgfVxuXG4gIGNoYW5nZSgpIHtcbiAgICB0aGlzLnVwZGF0ZUFuZ2xlKClcbiAgICAvLyAgICAgIHZhciBhbmdsZSA9IEdlb21ldHJ5LmdldE5lYXJlc3RBbmdsZSh0aGlzLm9wdGlvbnMuYW5nbGVzLCB0aGlzLmFuZ2xlKTtcbiAgICAvLyAgICAgIHRoaXMuc2V0QW5nbGUoYW5nbGUsdGhpcy5vcHRpb25zLnRpbWUpO1xuICAgIHRoaXMub25DaGFuZ2UodGhpcy5hbmdsZSlcbiAgfVxuXG4gIHNldEFuZ2xlKGFuZ2xlLCB0aW1lKSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBHZW9tZXRyeS5nZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oXG4gICAgICB0aGlzLmFuZ2xlLFxuICAgICAgdGhpcy5vcHRpb25zLnJhZGl1cyxcbiAgICAgIHRoaXMuc2hpZnRlZENlbnRlclxuICAgIClcbiAgICB0aGlzLmFuZ2xlID0gR2VvbWV0cnkubm9ybWFsaXplQW5nbGUoYW5nbGUsIHBvc2l0aW9uKVxuICAgIHRoaXMuZHJhZ2dhYmxlLm1vdmUocG9zaXRpb24sIHRpbWV8fDAsIHRydWUsIHRydWUpXG4gICAgdGhpcy5vbkNoYW5nZSh0aGlzLmFuZ2xlKVxuICB9XG59XG5cbmV4cG9ydCB7IGFyY1NsaWRlcnMsIEFyY1NsaWRlciB9XG4iLCJpbXBvcnQgeyBHZW9tZXRyeSwgUG9pbnQgfSBmcm9tICcuL2dlb21ldHJ5J1xuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRUb1JlY3RhbmdsZShyZWN0YW5nbGUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgY2FsY1BvaW50ID0gcG9pbnQuY2xvbmUoKSxcbiAgICAgIHJlY3RQMiA9IHJlY3RhbmdsZS5nZXRQMygpXG5cbiAgICBpZiAocmVjdGFuZ2xlLnBvc2l0aW9uLnggPiBjYWxjUG9pbnQueCkge1xuICAgICAgKGNhbGNQb2ludC54ID0gcmVjdGFuZ2xlLnBvc2l0aW9uLngpXG4gICAgfVxuICAgIGlmIChyZWN0YW5nbGUucG9zaXRpb24ueSA+IGNhbGNQb2ludC55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHJlY3RhbmdsZS5wb3NpdGlvbi55XG4gICAgfVxuICAgIGlmIChyZWN0UDIueCA8IGNhbGNQb2ludC54ICsgc2l6ZS54KSB7XG4gICAgICBjYWxjUG9pbnQueCA9IHJlY3RQMi54IC0gc2l6ZS54XG4gICAgfVxuICAgIGlmIChyZWN0UDIueSA8IGNhbGNQb2ludC55ICsgc2l6ZS55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHJlY3RQMi55IC0gc2l6ZS55XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhbGNQb2ludFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZFRvRWxlbWVudChlbGVtZW50LCBwYXJlbnQpIHtcbiAgY29uc3QgcmV0RnVuYyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBib3VuZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG4gIH1cbiAgbGV0IGJvdW5kXG5cbiAgcmV0RnVuYy5yZWZyZXNoID0gZnVuY3Rpb24oKSB7XG4gICAgYm91bmQgPSBib3VuZFRvUmVjdGFuZ2xlKEdlb21ldHJ5LmNyZWF0ZVJlY3RhbmdsZUZyb21FbGVtZW50KGVsZW1lbnQsIHBhcmVudCkpXG4gIH1cblxuICByZXRGdW5jLnJlZnJlc2goKVxuICByZXR1cm4gcmV0RnVuY1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRUb0xpbmVYKHgsIHN0YXJ0WSwgZW5kWSkge1xuICByZXR1cm4gZnVuY3Rpb24ocG9pbnQsIHNpemUpIHtcbiAgICBjb25zdCBjYWxjUG9pbnQgPSBwb2ludC5jbG9uZSgpXG4gICAgY2FsY1BvaW50LnggPSB4XG4gICAgaWYgKHN0YXJ0WSA+IGNhbGNQb2ludC55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHN0YXJ0WVxuICAgIH1cbiAgICBpZiAoZW5kWSA8IGNhbGNQb2ludC55ICsgc2l6ZS55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IGVuZFkgLSBzaXplLnlcbiAgICB9XG5cbiAgICByZXR1cm4gY2FsY1BvaW50XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kVG9MaW5lWSh5LCBzdGFydFgsIGVuZFgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgY2FsY1BvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIGNhbGNQb2ludC55ID0geVxuICAgIGlmIChzdGFydFggPiBjYWxjUG9pbnQueCkge1xuICAgICAgY2FsY1BvaW50LnggPSBzdGFydFhcbiAgICB9XG4gICAgaWYgKGVuZFggPCBjYWxjUG9pbnQueCArIHNpemUueCkge1xuICAgICAgY2FsY1BvaW50LnggPSBlbmRYIC0gc2l6ZS54XG4gICAgfVxuICAgIHJldHVybiBjYWxjUG9pbnRcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRUb0xpbmUoc3RhcnQsIGVuZCkge1xuICBjb25zdCBhbHBoYSA9IE1hdGguYXRhbjIoZW5kLnkgLSBzdGFydC55LCBlbmQueCAtIHN0YXJ0LngpLFxuICAgIGJldGEgPSBhbHBoYSArIE1hdGguUEkgLyAyLFxuICAgIHNvbWVLID0gMTAsXG4gICAgY29zQmV0YSA9IE1hdGguY29zKGJldGEpLFxuICAgIHNpbkJldGEgPSBNYXRoLnNpbihiZXRhKVxuXG4gIHJldHVybiBmdW5jdGlvbihwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IHBvaW50MiA9IG5ldyBQb2ludChwb2ludC54ICsgc29tZUsgKiBjb3NCZXRhLCBwb2ludC55ICsgc29tZUsgKiBzaW5CZXRhKSxcbiAgICAgIG5ld0VuZCA9IEdlb21ldHJ5LmdldFBvaW50SW5MaW5lQnlMZW5naHQoZW5kLCBzdGFydCwgc2l6ZS54KVxuICAgIGxldCBwb2ludENyb3NzaW5nID0gR2VvbWV0cnkuZGlyZWN0Q3Jvc3Npbmcoc3RhcnQsIGVuZCwgcG9pbnQsIHBvaW50MilcblxuICAgIHBvaW50Q3Jvc3NpbmcgPSBHZW9tZXRyeS5ib3VuZFRvTGluZShzdGFydCwgbmV3RW5kLCBwb2ludENyb3NzaW5nKVxuICAgIHJldHVybiBwb2ludENyb3NzaW5nXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kVG9DaXJjbGUoY2VudGVyLCByYWRpdXMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHBvaW50LCBfc2l6ZSkge1xuICAgIGNvbnN0IGJvdW5kZWRQb2ludCA9IEdlb21ldHJ5LmdldFBvaW50SW5MaW5lQnlMZW5naHQoY2VudGVyLCBwb2ludCwgcmFkaXVzKVxuICAgIHJldHVybiBib3VuZGVkUG9pbnRcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRUb0FyYyhjZW50ZXIsIHJhZGl1cywgc3RhcnRBZ2xlLCBlbmRBbmdsZSkge1xuICByZXR1cm4gZnVuY3Rpb24ocG9pbnQsIF9zaXplKSB7XG4gICAgY29uc3QgYm91bmRTdGFydEFuZ2xlID0gdHlwZW9mIHN0YXJ0QWdsZSA9PT0gJ2Z1bmN0aW9uJyA/IHN0YXJ0QWdsZSgpIDogc3RhcnRBZ2xlXG4gICAgY29uc3QgYm91bmRFbmR0QW5nbGUgPSB0eXBlb2Ygc3RhcnRBZ2xlID09PSAnZnVuY3Rpb24nID8gZW5kQW5nbGUoKSA6IGVuZEFuZ2xlXG5cbiAgICBsZXQgYW5nbGUgPSBHZW9tZXRyeS5nZXRBbmdsZShjZW50ZXIsIHBvaW50KVxuICAgIGFuZ2xlID0gR2VvbWV0cnkubm9ybWFsaXplQW5nbGUoYW5nbGUpXG4gICAgYW5nbGUgPSBHZW9tZXRyeS5ib3VuZEFuZ2xlKGJvdW5kU3RhcnRBbmdsZSwgYm91bmRFbmR0QW5nbGUsIGFuZ2xlKVxuICAgIHJldHVybiBHZW9tZXRyeS5nZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oYW5nbGUsIHJhZGl1cywgY2VudGVyKVxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxuaW1wb3J0IHtcbiAgZ2V0RGVmYXVsdFBhcmVudCxcbiAgZ2V0VG91Y2hCeUlELFxuICBhZGRDbGFzcywgcmVtb3ZlQ2xhc3Ncbn0gZnJvbSAnLi91dGlsJ1xuXG5pbXBvcnQgRXZlbnQgZnJvbSAnLi9ldmVudCdcbmltcG9ydCBnZXRTdHlsZVByb3BlcnR5IGZyb20gJ2Rlc2FuZHJvLWdldC1zdHlsZS1wcm9wZXJ0eSdcbmltcG9ydCB7IGJvdW5kVG9FbGVtZW50IH0gZnJvbSAnLi9ib3VuZCdcbmltcG9ydCB7IEdlb21ldHJ5LCBQb2ludCwgUmVjdGFuZ2xlIH0gZnJvbSAnLi9nZW9tZXRyeSdcbmltcG9ydCB7IGRlZmF1bHRTY29wZSB9IGZyb20gJy4vc2NvcGUnXG5cbmNvbnN0IERyYWdlZSA9IHsgRXZlbnQgfSAvL3RvZG8gcmVtb3ZlIGFmdGVyIHJlZmFjdG9yZVxuXG5jb25zdCBpc1RvdWNoID0gJ29udG91Y2hzdGFydCcgaW4gd2luZG93LCBtb3VzZUV2ZW50cyA9IHtcbiAgICBzdGFydDogJ21vdXNlZG93bicsXG4gICAgbW92ZTogJ21vdXNlbW92ZScsXG4gICAgZW5kOiAnbW91c2V1cCdcbiAgfSwgdG91Y2hFdmVudHMgPSB7XG4gICAgc3RhcnQ6ICd0b3VjaHN0YXJ0JyxcbiAgICBtb3ZlOiAndG91Y2htb3ZlJyxcbiAgICBlbmQ6ICd0b3VjaGVuZCdcbiAgfSxcbiAgZXZlbnRzID0gaXNUb3VjaCA/IHRvdWNoRXZlbnRzIDogbW91c2VFdmVudHMsXG4gIGRyYWdnYWJsZXMgPSBbXSxcbiAgdHJhbnNmb3JtUHJvcGVydHkgPSBnZXRTdHlsZVByb3BlcnR5KCd0cmFuc2Zvcm0nKSxcbiAgdHJhbnNpdGlvblByb3BlcnR5ID0gZ2V0U3R5bGVQcm9wZXJ0eSgndHJhbnNpdGlvbicpXG5cbmZ1bmN0aW9uIHByZXZlbnREb3VibGVJbml0KGRyYWdnYWJsZSkge1xuICBjb25zdCBtZXNzYWdlID0gXCJmb3IgdGhpcyBlbGVtZW50IERyYWdlZS5EcmFnZ2FibGUgaXMgYWxyZWFkeSBleGlzdCwgZG9uJ3QgY3JlYXRlIGl0IHR3aWNlIFwiXG4gIGlmIChkcmFnZ2FibGVzLnNvbWUoKGV4aXN0aW5nKSA9PiBkcmFnZ2FibGUuZWxlbWVudCA9PT0gZXhpc3RpbmcuZWxlbWVudCkpIHtcbiAgICB0aHJvdyBtZXNzYWdlXG4gIH1cbiAgZHJhZ2dhYmxlcy5wdXNoKGRyYWdnYWJsZSlcbn1cblxuZnVuY3Rpb24gYWRkVG9EZWZhdWx0U2NvcGUoZHJhZ2dhYmxlKSB7XG4gIGRlZmF1bHRTY29wZS5hZGREcmFnZ2FibGUoZHJhZ2dhYmxlKVxufVxuXG5jbGFzcyBEcmFnZ2FibGUge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBvcHRpb25zPXt9KSB7XG4gICAgY29uc3QgcGFyZW50ID0gb3B0aW9ucy5wYXJlbnQgfHwgZ2V0RGVmYXVsdFBhcmVudChlbGVtZW50KVxuICAgIHRoaXMudGFyZ2V0cyA9IFtdXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBwYXJlbnQ6IHBhcmVudCxcbiAgICAgIGJvdW5kOiBib3VuZFRvRWxlbWVudChwYXJlbnQsIHBhcmVudCksXG4gICAgICBzdGFydEZpbHRlcjogZmFsc2UsXG4gICAgICBpc0NvbnRlbnRCb3hTaXplOiBmYWxzZSxcbiAgICAgIHBvc2l0aW9uOiBmYWxzZVxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0aGlzLm9uRW5kID0gbmV3IERyYWdlZS5FdmVudCh0aGlzLCB7IGlzUmV2ZXJzZTogdHJ1ZSwgaXNTdG9wT25UcnVlOiB0cnVlIH0pXG4gICAgdGhpcy5vbk1vdmUgPSBuZXcgRHJhZ2VlLkV2ZW50KHRoaXMpXG4gICAgdGhpcy5vblN0YXJ0ID0gbmV3IERyYWdlZS5FdmVudCh0aGlzKVxuXG4gICAgdGhpcy5vbkVuZC5hZGQoKCkgPT4gdGhpcy5tb3ZlKHRoaXMucG9zaXRpb24sIDAsIHRydWUsIHRydWUpKVxuXG4gICAgaWYgKG9wdGlvbnMub25FbmQpIHtcbiAgICAgIHRoaXMub25FbmQuYWRkKG9wdGlvbnMub25FbmQpXG4gICAgfVxuICAgIGlmIChvcHRpb25zLm9uTW92ZSkge1xuICAgICAgdGhpcy5vbk1vdmUuYWRkKG9wdGlvbnMub25Nb3ZlKVxuICAgIH1cbiAgICBpZiAob3B0aW9ucy5vblN0YXJ0KSB7XG4gICAgICB0aGlzLm9uU3RhcnQuYWRkKG9wdGlvbnMub25TdGFydClcbiAgICB9XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIHRoaXMuYm91bmQgPSB0aGlzLm9wdGlvbnMuYm91bmRcbiAgICBwcmV2ZW50RG91YmxlSW5pdCh0aGlzKVxuICAgIERyYWdnYWJsZS5vbkNyZWF0ZS5maXJlKHRoaXMpXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5fZW5hYmxlID0gdHJ1ZVxuICAgIHRoaXMub2Zmc2V0ID0gR2VvbWV0cnkuZ2V0T2Zmc2V0KHRoaXMuZWxlbWVudCwgdGhpcy5vcHRpb25zLnBhcmVudCwgdHJ1ZSlcbiAgICB0aGlzLmZpeFBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICBpZiAodGhpcy5vcHRpb25zLnBvc2l0aW9uKSB7XG4gICAgICB0aGlzLmluaXRQb3NpdGlvbiA9IHRoaXMub3B0aW9ucy5wb3NpdGlvblxuICAgICAgdGhpcy5tb3ZlKHRoaXMuaW5pdFBvc2l0aW9uLCAwLCB0cnVlLCB0cnVlKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmluaXRQb3NpdGlvbiA9IHRoaXMub2Zmc2V0XG4gICAgfVxuICAgIHRoaXMuX2RyYWdTdGFydCA9IHRoaXMuZHJhZ1N0YXJ0LmJpbmQodGhpcylcbiAgICB0aGlzLl9kcmFnTW92ZSA9IHRoaXMuZHJhZ01vdmUuYmluZCh0aGlzKVxuICAgIHRoaXMuX2RyYWdFbmQgPSB0aGlzLmRyYWdFbmQuYmluZCh0aGlzKVxuXG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydClcbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0KVxuXG4gICAgaWYgKHRoaXMuYm91bmQucmVmcmVzaCkge1xuICAgICAgdGhpcy5ib3VuZC5yZWZyZXNoKClcbiAgICB9XG4gIH1cblxuICByZWluaXQoKSB7XG4gICAgdGhpcy5vZmZzZXQgPSBHZW9tZXRyeS5nZXRPZmZzZXQodGhpcy5lbGVtZW50LCB0aGlzLm9wdGlvbnMucGFyZW50LCB0cnVlKVxuICAgIHRoaXMuZml4UG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICAgIGlmICh0aGlzLm9wdGlvbnMucG9zaXRpb24pIHtcbiAgICAgIHRoaXMuaW5pdFBvc2l0aW9uID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uXG4gICAgICB0aGlzLm1vdmUodGhpcy5pbml0UG9zaXRpb24sIDAsIHRydWUsIHRydWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5pdFBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICB9XG5cbiAgICBpZiAodGhpcy5ib3VuZC5yZWZyZXNoKSB7XG4gICAgICB0aGlzLmJvdW5kLnJlZnJlc2goKVxuICAgIH1cbiAgfVxuXG4gIGdldFNpemUoX3JlY2FsdWxhdGUpIHtcbiAgICByZXR1cm4gR2VvbWV0cnkuZ2V0U2l6ZU9mRWxlbWVudCh0aGlzLmVsZW1lbnQsIHRoaXMub3B0aW9ucy5pc0NvbnRlbnRCb3hTaXplKVxuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMub2Zmc2V0LmFkZCh0aGlzLl90cmFuc2Zvcm1Qb3NpdGlvbiB8fCBuZXcgUG9pbnQoMCwgMCkpXG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25cbiAgfVxuXG4gIGdldENlbnRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi5hZGQodGhpcy5nZXRTaXplKCkubXVsdCgwLjUpKVxuICB9XG5cbiAgX3NldFRyYW5zbGF0ZShwb2ludCkge1xuICAgIHRoaXMuX3RyYW5zZm9ybVBvc2l0aW9uID0gcG9pbnRcblxuICAgIGxldCB0cmFuc2Zvcm0gPSB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcGVydHldXG4gICAgbGV0IHRyYW5zbGF0ZUNzcyA9ICcgdHJhbnNsYXRlM2QoJyArIHBvaW50LnggKyAncHgsJyArIHBvaW50LnkgKyAncHgsIDBweCknXG5cbiAgICBjb25zdCB1YSA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50XG4gICAgY29uc3QgbXNpZSA9IHVhLmluZGV4T2YoJ01TSUUgJylcblxuICAgIGlmIChtc2llKSB7XG4gICAgICB0cmFuc2xhdGVDc3MgPSAnIHRyYW5zbGF0ZSgnICsgcG9pbnQueCArICdweCwnICsgcG9pbnQueSArICdweCknXG4gICAgICBpZiAoIS90cmFuc2xhdGVcXChbXildK1xcKS8udGVzdCh0cmFuc2Zvcm0pKSB7XG4gICAgICAgIHRyYW5zZm9ybSArPSB0cmFuc2xhdGVDc3NcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyYW5zZm9ybSA9IHRyYW5zZm9ybS5yZXBsYWNlKC90cmFuc2xhdGVcXChbXildK1xcKS8sIHRyYW5zbGF0ZUNzcylcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCEvdHJhbnNsYXRlM2RcXChbXildK1xcKS8udGVzdCh0cmFuc2Zvcm0pKSB7XG4gICAgICAgIHRyYW5zZm9ybSArPSB0cmFuc2xhdGVDc3NcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyYW5zZm9ybSA9IHRyYW5zZm9ybS5yZXBsYWNlKC90cmFuc2xhdGUzZFxcKFteKV0rXFwpLywgdHJhbnNsYXRlQ3NzKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wZXJ0eV0gPSB0cmFuc2Zvcm1cbiAgfVxuXG4gIG1vdmUocG9pbnQsIHRpbWU9MCwgaXNGaXg9ZmFsc2UsIGlzU2lsZW50PWZhbHNlKSB7XG4gICAgcG9pbnQgPSBwb2ludC5jbG9uZSgpXG4gICAgaWYgKGlzRml4KSB7XG4gICAgICB0aGlzLmZpeFBvc2l0aW9uID0gcG9pbnRcbiAgICB9XG5cbiAgICB0aGlzLmRldGVybWluZURpcmVjdGlvbihwb2ludClcblxuICAgIHRoaXMucG9zaXRpb24gPSBwb2ludFxuXG4gICAgaWYgKHRyYW5zaXRpb25Qcm9wZXJ0eSkge1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV0gPSB0aW1lICsgJ21zJ1xuICAgIH1cblxuICAgIHRoaXMuX3NldFRyYW5zbGF0ZShwb2ludC5zdWIodGhpcy5vZmZzZXQpKVxuICAgIGlmICghaXNTaWxlbnQpIHtcbiAgICAgIHRoaXMub25Nb3ZlLmZpcmUoKVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hQb3NpdGlvbiAoKSB7XG4gICAgdGhpcy5zZXRQb3NpdGlvbih0aGlzLmdldFBvc2l0aW9uKCkpXG4gIH1cblxuICBzZXRQb3NpdGlvbihwb2ludCkge1xuICAgIHBvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIHRoaXMucG9zaXRpb24gPSBwb2ludFxuXG4gICAgaWYgKHRyYW5zaXRpb25Qcm9wZXJ0eSkge1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV0gPSAnMG1zJ1xuICAgIH1cblxuICAgIHRoaXMuX3NldFRyYW5zbGF0ZShwb2ludC5zdWIodGhpcy5vZmZzZXQpKVxuICB9XG5cbiAgc2V0WmVyb1RyYW5zaXRpb24oKSB7XG4gICAgaWYgKHRyYW5zaXRpb25Qcm9wZXJ0eSkge1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV0gPSAnMG1zJ1xuICAgIH1cbiAgfVxuXG4gIGRldGVybWluZURpcmVjdGlvbihwb2ludCkge1xuICAgIHRoaXMubGVmdERpcmVjdGlvbiA9ICh0aGlzLnBvc2l0aW9uLnggPCBwb2ludC54KVxuICAgIHRoaXMucmlnaHREaXJlY3Rpb24gPSAodGhpcy5wb3NpdGlvbi54ID4gcG9pbnQueClcbiAgICB0aGlzLnVwRGlyZWN0aW9uID0gKHRoaXMucG9zaXRpb24ueSA+IHBvaW50LnkpXG4gICAgdGhpcy5kb3duRGlyZWN0aW9uID0gKHRoaXMucG9zaXRpb24ueSA8IHBvaW50LnkpXG4gIH1cblxuICBkcmFnU3RhcnQoZXZlbnQpIHtcbiAgICB0aGlzLmN1cnJlbnRFdmVudCA9IGV2ZW50XG4gICAgaWYgKCF0aGlzLl9lbmFibGUgfHwgKHRoaXMub3B0aW9ucy5zdGFydEZpbHRlciAmJiAhdGhpcy5vcHRpb25zLnN0YXJ0RmlsdGVyKGV2ZW50KSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGlzVG91Y2hFdmVudCA9IChpc1RvdWNoICYmIChldmVudCBpbnN0YW5jZW9mIHdpbmRvdy5Ub3VjaEV2ZW50KSlcblxuICAgIHRoaXMuX3N0YXJ0VG91Y2hQb2ludCA9IG5ldyBQb2ludChpc1RvdWNoRXZlbnQgPyBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCA6IGV2ZW50LmNsaWVudFgsIGlzVG91Y2hFdmVudCA/IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZIDogZXZlbnQuY2xpZW50WSlcblxuICAgIHRoaXMuX3N0YXJ0UG9zaXRpb24gPSB0aGlzLmdldFBvc2l0aW9uKClcbiAgICBpZiAoaXNUb3VjaEV2ZW50KSB7XG4gICAgICB0aGlzLl90b3VjaElkID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uaWRlbnRpZmllclxuICAgIH1cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGlmICghKGV2ZW50LnRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSW5wdXRFbGVtZW50IHx8XG4gICAgICAgICAgZXZlbnQudGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJbnB1dEVsZW1lbnQpKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfSBlbHNlIHtcbiAgICAgIGV2ZW50LnRhcmdldC5mb2N1cygpXG4gICAgfVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG5cbiAgICB0aGlzLmlzRHJhZ2dpbmcgPSB0cnVlXG5cbiAgICB0aGlzLm9uU3RhcnQuZmlyZShldmVudClcbiAgICBhZGRDbGFzcyh0aGlzLmVsZW1lbnQsICdhY3RpdmUnKVxuICAgIHRoaXMub25Nb3ZlLmZpcmUoZXZlbnQpXG4gIH1cblxuICBkcmFnTW92ZShldmVudCkge1xuICAgIHRoaXMuY3VycmVudEV2ZW50ID0gZXZlbnRcbiAgICBsZXQgdG91Y2hcblxuICAgIGNvbnN0IGlzVG91Y2hFdmVudCA9IChpc1RvdWNoICYmIChldmVudCBpbnN0YW5jZW9mIHdpbmRvdy5Ub3VjaEV2ZW50KSlcbiAgICBpZiAoaXNUb3VjaEV2ZW50KSB7XG4gICAgICB0b3VjaCA9IGdldFRvdWNoQnlJRChldmVudCwgdGhpcy5fdG91Y2hJZClcblxuICAgICAgaWYgKCF0b3VjaCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zdCB0b3VjaFBvaW50ID0gbmV3IFBvaW50KGlzVG91Y2hFdmVudCA/IHRvdWNoLnBhZ2VYIDogZXZlbnQuY2xpZW50WCwgaXNUb3VjaEV2ZW50ID8gdG91Y2gucGFnZVkgOiBldmVudC5jbGllbnRZKVxuICAgIGxldCBwb2ludCA9IHRoaXMuX3N0YXJ0UG9zaXRpb24uYWRkKHRvdWNoUG9pbnQuc3ViKHRoaXMuX3N0YXJ0VG91Y2hQb2ludCkpXG4gICAgcG9pbnQgPSB0aGlzLmJvdW5kKHBvaW50LCB0aGlzLmdldFNpemUoKSlcbiAgICB0aGlzLnRvdWNoUG9pbnQgPSB0b3VjaFBvaW50XG4gICAgdGhpcy5tb3ZlKHBvaW50LCAwKVxuICB9XG5cbiAgZHJhZ0VuZChldmVudCkge1xuICAgIGNvbnN0IGlzVG91Y2hFdmVudCA9IChpc1RvdWNoICYmIChldmVudCBpbnN0YW5jZW9mIHdpbmRvdy5Ub3VjaEV2ZW50KSlcblxuICAgIGlmIChpc1RvdWNoRXZlbnQgJiYgIWdldFRvdWNoQnlJRChldmVudCwgdGhpcy5fdG91Y2hJZCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIHRoaXMub25FbmQuZmlyZShldmVudClcblxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcblxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuXG4gICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2VcbiAgICByZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnQsICdhY3RpdmUnKVxuICB9XG5cbiAgZ2V0UmVjdGFuZ2xlKCkge1xuICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHRoaXMucG9zaXRpb24sIHRoaXMuZ2V0U2l6ZSgpKVxuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLmdldFNpemUodHJ1ZSlcbiAgICBpZiAodGhpcy5ib3VuZC5yZWZyZXNoKSB7XG4gICAgICB0aGlzLmJvdW5kLnJlZnJlc2goKVxuICAgIH1cbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydClcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0KVxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG5cbiAgICB0aGlzLm9uRW5kLnJlc2V0KClcbiAgICB0aGlzLm9uTW92ZS5yZXNldCgpXG4gIH1cblxuICBnZXQgZW5hYmxlKCkge1xuICAgIHJldHVybiB0aGlzLl9lbmFibGVcbiAgfVxuXG4gIHNldCBlbmFibGUoZW5hYmxlKSB7XG4gICAgaWYgKGVuYWJsZSkge1xuICAgICAgcmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50LCAnZGlzYWJsZScpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFkZENsYXNzKHRoaXMuZWxlbWVudCwgJ2Rpc2FibGUnKVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9lbmFibGUgPSBlbmFibGVcbiAgfVxufVxuXG5EcmFnZ2FibGUub25DcmVhdGUgPSBuZXcgRHJhZ2VlLkV2ZW50KERyYWdnYWJsZSwgeyBpc1JldmVyc2U6IHRydWUsIGlzU3RvcE9uVHJ1ZTogdHJ1ZSB9KVxuRHJhZ2dhYmxlLm9uQ3JlYXRlLmFkZChhZGRUb0RlZmF1bHRTY29wZSlcblxuZXhwb3J0IHsgRHJhZ2dhYmxlLCBkcmFnZ2FibGVzLCBldmVudHMgfVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmZ1bmN0aW9uIEV2ZW50KGNvbnRleHQsIG9wdGlvbnMgPSB7fSkge1xuICB0aGlzLmZ1bmNzID0gW11cbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dFxuICB0aGlzLmlzUmV2ZXJzZSA9IG9wdGlvbnMuaXNSZXZlcnNlIHx8IGZhbHNlXG4gIHRoaXMuaXNTdG9wT25UcnVlID0gb3B0aW9ucy5pc1N0b3BPblRydWUgfHwgZmFsc2Vcbn1cblxuRXZlbnQucHJvdG90eXBlLmZpcmUgPSBmdW5jdGlvbigpIHtcbiAgY29uc3QgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKVxuICBjb25zdCBmcyA9IHRoaXMuaXNSZXZlcnNlID8gdGhpcy5mdW5jcy5zbGljZSgpLnJldmVyc2UoKSA6IHRoaXMuZnVuY3NcbiAgbGV0IHJldFZhbHVlXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBmcy5sZW5ndGg7IGkrKykge1xuICAgIHJldFZhbHVlID0gZnNbaV0uYXBwbHkodGhpcy5jb250ZXh0LCBhcmdzKVxuICAgIGlmICh0aGlzLmlzU3RvcE9uVHJ1ZSAmJiByZXRWYWx1ZSkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gIH1cbiAgcmV0dXJuICF0aGlzLmlzU3RvcE9uVHJ1ZVxufVxuXG5FdmVudC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24oZikge1xuICB0aGlzLmZ1bmNzLnB1c2goZilcbn1cblxuRXZlbnQucHJvdG90eXBlLnVuc2hpZnQgPSBmdW5jdGlvbihmKSB7XG4gIHRoaXMuZnVuY3MudW5zaGlmdChmKVxufVxuXG5FdmVudC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24oZikge1xuICBjb25zdCBpbmRleCA9IHRoaXMuZnVuY3MuaW5kZXhPZihmKVxuICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgdGhpcy5mdW5jcy5zcGxpY2UoaW5kZXgsIDEpXG4gIH1cbn1cblxuRXZlbnQucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24oX2YpIHtcbiAgdGhpcy5mdW5jcyA9IFtdXG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50XG4iLCIndXNlIHN0cmljdCdcbmltcG9ydCB1dGlsIGZyb20gJy4vdXRpbCdcblxuLyoqKioqKioqKioqKioqKioqKioqKi9cbmZ1bmN0aW9uIFBvaW50KHgsIHkpIHtcbiAgdGhpcy54ID0geFxuICB0aGlzLnkgPSB5XG59XG5cblBvaW50LnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gJ3t4PScgKyB0aGlzLnggKyAnLHk9JyArIHRoaXMueSArICd9J1xufVxuXG5Qb2ludC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24ocCkge1xuICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCArIHAueCwgdGhpcy55ICsgcC55KVxufVxuXG5Qb2ludC5wcm90b3R5cGUuc3ViID0gZnVuY3Rpb24ocCkge1xuICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCAtIHAueCwgdGhpcy55IC0gcC55KVxufVxuXG5Qb2ludC5wcm90b3R5cGUubXVsdCA9IGZ1bmN0aW9uKGspIHtcbiAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnggKiBrLCB0aGlzLnkgKiBrKVxufVxuXG5Qb2ludC5wcm90b3R5cGUubmVnYXRpdmUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBQb2ludCgtdGhpcy54LCAtdGhpcy55KVxufVxuXG5Qb2ludC5wcm90b3R5cGUuY29tcGFyZSA9IGZ1bmN0aW9uKHApIHtcbiAgcmV0dXJuICh0aGlzLnggPT09IHAueCAmJiB0aGlzLnkgPT09IHAueSlcbn1cblxuUG9pbnQucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgUG9pbnQodGhpcy54LCB0aGlzLnkpXG59XG5cbi8qKioqKioqKioqKioqKioqL1xuZnVuY3Rpb24gUmVjdGFuZ2xlKHBvc2l0aW9uLCBzaXplKSB7XG4gIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvblxuICB0aGlzLnNpemUgPSBzaXplXG59XG5cblJlY3RhbmdsZS5wcm90b3R5cGUuZ2V0UDEgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMucG9zaXRpb25cbn1cblxuUmVjdGFuZ2xlLnByb3RvdHlwZS5nZXRQMiA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFBvaW50KHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54LCB0aGlzLnBvc2l0aW9uLnkpXG59XG5cblJlY3RhbmdsZS5wcm90b3R5cGUuZ2V0UDMgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMucG9zaXRpb24uYWRkKHRoaXMuc2l6ZSlcbn1cblxuUmVjdGFuZ2xlLnByb3RvdHlwZS5nZXRQNCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFBvaW50KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnkpXG59XG5cblJlY3RhbmdsZS5wcm90b3R5cGUuZ2V0Q2VudGVyID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLnNpemUubXVsdCgwLjUpKVxufVxuXG5SZWN0YW5nbGUucHJvdG90eXBlLm9yID0gZnVuY3Rpb24ocmVjdCkge1xuICBjb25zdCBwb3NpdGlvbiA9IG5ldyBQb2ludChNYXRoLm1pbih0aGlzLnBvc2l0aW9uLngsIHJlY3QucG9zaXRpb24ueCksIE1hdGgubWluKHRoaXMucG9zaXRpb24ueSwgcmVjdC5wb3NpdGlvbi55KSksIHNpemUgPSAobmV3IFBvaW50KE1hdGgubWF4KHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54LCByZWN0LnBvc2l0aW9uLnggKyByZWN0LnNpemUueCksIE1hdGgubWF4KHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55LCByZWN0LnBvc2l0aW9uLnkgKyByZWN0LnNpemUueSkpKS5zdWIocG9zaXRpb24pXG4gIHJldHVybiBuZXcgUmVjdGFuZ2xlKHBvc2l0aW9uLCBzaXplKVxufVxuXG5SZWN0YW5nbGUucHJvdG90eXBlLmFuZCA9IGZ1bmN0aW9uKHJlY3QpIHtcbiAgY29uc3QgcG9zaXRpb24gPSBuZXcgUG9pbnQoTWF0aC5tYXgodGhpcy5wb3NpdGlvbi54LCByZWN0LnBvc2l0aW9uLngpLCBNYXRoLm1heCh0aGlzLnBvc2l0aW9uLnksIHJlY3QucG9zaXRpb24ueSkpLCBzaXplID0gKG5ldyBQb2ludChNYXRoLm1pbih0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnNpemUueCwgcmVjdC5wb3NpdGlvbi54ICsgcmVjdC5zaXplLngpLCBNYXRoLm1pbih0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSwgcmVjdC5wb3NpdGlvbi55ICsgcmVjdC5zaXplLnkpKSkuc3ViKHBvc2l0aW9uKVxuICBpZiAoc2l6ZS54IDw9IDAgfHwgc2l6ZS55IDw9IDApIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG4gIHJldHVybiBuZXcgUmVjdGFuZ2xlKHBvc2l0aW9uLCBzaXplKVxufVxuXG5SZWN0YW5nbGUucHJvdG90eXBlLmluY2x1ZGVQb2ludCA9IGZ1bmN0aW9uKHApIHtcbiAgcmV0dXJuICEodGhpcy5wb3NpdGlvbi54ID4gcC54IHx8IHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54IDwgcC54IHx8IHRoaXMucG9zaXRpb24ueSA+IHAueSB8fCB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSA8IHAueSlcbn1cblxuUmVjdGFuZ2xlLnByb3RvdHlwZS5pbmNsdWRlUmVjdGFuZ2xlID0gZnVuY3Rpb24ocmVjdGFuZ2xlKSB7XG4gIHJldHVybiB0aGlzLmluY2x1ZGVQb2ludChyZWN0YW5nbGUucG9zaXRpb24pICYmIHRoaXMuaW5jbHVkZVBvaW50KHJlY3RhbmdsZS5nZXRQMygpKVxufVxuXG5SZWN0YW5nbGUucHJvdG90eXBlLm1vdmVUb0JvdW5kID0gZnVuY3Rpb24ocmVjdCwgYXhpcykge1xuICBsZXQgc2VsQXhpcywgY3Jvc3NSZWN0YW5nbGVcbiAgaWYgKGF4aXMpIHtcbiAgICBzZWxBeGlzID0gYXhpc1xuICB9IGVsc2Uge1xuICAgIGNyb3NzUmVjdGFuZ2xlID0gdGhpcy5hbmQocmVjdClcbiAgICBpZiAoIWNyb3NzUmVjdGFuZ2xlKSB7XG4gICAgICByZXR1cm4gcmVjdFxuICAgIH1cbiAgICBzZWxBeGlzID0gY3Jvc3NSZWN0YW5nbGUuc2l6ZS54ID4gY3Jvc3NSZWN0YW5nbGUuc2l6ZS55ID8gJ3knIDogJ3gnXG4gIH1cbiAgY29uc3QgdGhpc0NlbnRlciA9IHRoaXMuZ2V0Q2VudGVyKClcbiAgY29uc3QgcmVjdENlbnRlciA9IHJlY3QuZ2V0Q2VudGVyKClcbiAgY29uc3Qgc2lnbiA9IHRoaXNDZW50ZXJbc2VsQXhpc10gPiByZWN0Q2VudGVyW3NlbEF4aXNdID8gLTEgOiAxXG4gIGNvbnN0IG9mZnNldCA9IHNpZ24gPiAwID8gdGhpcy5wb3NpdGlvbltzZWxBeGlzXSArIHRoaXMuc2l6ZVtzZWxBeGlzXSAtIHJlY3QucG9zaXRpb25bc2VsQXhpc10gOiB0aGlzLnBvc2l0aW9uW3NlbEF4aXNdIC0gKHJlY3QucG9zaXRpb25bc2VsQXhpc10gKyByZWN0LnNpemVbc2VsQXhpc10pXG4gIHJlY3QucG9zaXRpb25bc2VsQXhpc10gPSByZWN0LnBvc2l0aW9uW3NlbEF4aXNdICsgb2Zmc2V0XG4gIHJldHVybiByZWN0XG59XG5cblJlY3RhbmdsZS5wcm90b3R5cGUuZ2V0U3F1YXJlID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnNpemUueCAqIHRoaXMuc2l6ZS55XG59XG5cblJlY3RhbmdsZS5wcm90b3R5cGUuc3R5bGVBcHBseSA9IGZ1bmN0aW9uKGVsKSB7XG4gIGVsID0gZWwgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5kJylcbiAgZWwuc3R5bGUubGVmdCA9IHRoaXMucG9zaXRpb24ueCArICdweCdcbiAgZWwuc3R5bGUudG9wID0gdGhpcy5wb3NpdGlvbi55ICsgJ3B4J1xuICBlbC5zdHlsZS53aWR0aCA9IHRoaXMuc2l6ZS54ICsgJ3B4J1xuICBlbC5zdHlsZS5oZWlnaHQgPSB0aGlzLnNpemUueSArICdweCdcbn1cblxuUmVjdGFuZ2xlLnByb3RvdHlwZS5ncm93dGggPSBmdW5jdGlvbihzaXplKSB7XG4gIHRoaXMuc2l6ZSA9IHRoaXMuc2l6ZS5hZGQoc2l6ZSlcbiAgdGhpcy5wb3NpdGlvbiA9IHRoaXMucG9zaXRpb24uYWRkKHNpemUubXVsdCgtMC41KSlcbn1cblxuUmVjdGFuZ2xlLnByb3RvdHlwZS5nZXRNaW5TaWRlID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBNYXRoLm1pbih0aGlzLnNpemUueCwgdGhpcy5zaXplLnkpXG59XG5cbi8qKioqKioqKioqKioqKioqKi9cbmNvbnN0IEdlb21ldHJ5ID0ge1xuICBnZXREaXN0YW5jZTogZnVuY3Rpb24ocDEsIHAyKSB7XG4gICAgY29uc3QgZHggPSBwMS54IC0gcDIueCwgZHkgPSBwMS55IC0gcDIueVxuICAgIHJldHVybiBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpXG4gIH0sXG4gIGRpc3RhbmNlOiBmdW5jdGlvbihwMSwgcDIpIHtcbiAgICByZXR1cm4gR2VvbWV0cnkuZ2V0RGlzdGFuY2UocDEsIHAyKVxuICB9LFxuICBnZXRYRGlmZmVyZW5jZTogZnVuY3Rpb24ocDEsIHAyKSB7XG4gICAgcmV0dXJuIE1hdGguYWJzKHAxLnggLSBwMi54KVxuICB9LFxuICBnZXRZRGlmZmVyZW5jZTogZnVuY3Rpb24ocDEsIHAyKSB7XG4gICAgcmV0dXJuIE1hdGguYWJzKHAxLnkgLSBwMi55KVxuICB9LFxuICB0cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5OiBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHAxLCBwMikge1xuICAgICAgcmV0dXJuIE1hdGguc3FydChcbiAgICAgICAgICAgICAgICBNYXRoLnBvdyhvcHRpb25zLnggKiBNYXRoLmFicyhwMS54IC0gcDIueCksIDIpICsgTWF0aC5wb3cob3B0aW9ucy55ICogTWF0aC5hYnMocDEueSAtIHAyLnkpLCAyKVxuICAgICAgICAgICAgKVxuICAgIH1cbiAgfSxcbiAgaW5kZXhPZk5lYXJQb2ludDogZnVuY3Rpb24oYXJyLCB2YWwsIHJhZGl1cywgZ2V0RGlzdGFuY2UpIHtcbiAgICBsZXQgc2l6ZSwgaW5kZXggPSAwLCBpLCB0ZW1wXG4gICAgZ2V0RGlzdGFuY2UgPSBnZXREaXN0YW5jZSB8fCBHZW9tZXRyeS5nZXREaXN0YW5jZVxuICAgIGlmIChhcnIubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gLTFcbiAgICB9XG4gICAgc2l6ZSA9IGdldERpc3RhbmNlKGFyclswXSwgdmFsKVxuICAgIGZvciAoaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRlbXAgPSBnZXREaXN0YW5jZShhcnJbaV0sIHZhbClcbiAgICAgIGlmICh0ZW1wIDwgc2l6ZSkge1xuICAgICAgICBzaXplID0gdGVtcFxuICAgICAgICBpbmRleCA9IGlcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHJhZGl1cyA+PSAwICYmIHNpemUgPiByYWRpdXMpIHtcbiAgICAgIHJldHVybiAtMVxuICAgIH1cbiAgICByZXR1cm4gaW5kZXhcbiAgfSxcbiAgYm91bmQ6IGZ1bmN0aW9uKG1pbiwgbWF4LCB2YWwpIHtcbiAgICByZXR1cm4gTWF0aC5tYXgobWluLCBNYXRoLm1pbihtYXgsIHZhbCkpXG4gIH0sXG4gIGJvdW5kUG9pbnQ6IGZ1bmN0aW9uKG1pbiwgbWF4LCB2YWwpIHtcbiAgICBjb25zdCB4ID0gTWF0aC5tYXgobWluLngsIE1hdGgubWluKG1heC54LCB2YWwueCkpXG4gICAgY29uc3QgeSA9IE1hdGgubWF4KG1pbi55LCBNYXRoLm1pbihtYXgueSwgdmFsLnkpKVxuICAgIHJldHVybiBuZXcgUG9pbnQoeCwgeSlcbiAgfSxcbiAgICAvL1JldHVybiBjcm9zc2luZyBwb2ludCBvZiB0d28gbGluZXNcbiAgZGlyZWN0Q3Jvc3Npbmc6IGZ1bmN0aW9uKEwxUDEsIEwxUDIsIEwyUDEsIEwyUDIpIHtcbiAgICBsZXQgdGVtcCwgazEsIGsyLCBiMSwgYjIsIHgsIHlcbiAgICBpZiAoTDJQMS54ID09PSBMMlAyLngpIHtcbiAgICAgIHRlbXAgPSBMMlAxXG4gICAgICBMMlAxID0gTDFQMVxuICAgICAgTDFQMSA9IHRlbXBcbiAgICAgIHRlbXAgPSBMMlAyXG4gICAgICBMMlAyID0gTDFQMlxuICAgICAgTDFQMiA9IHRlbXBcbiAgICB9XG4gICAgaWYgKEwxUDEueCA9PT0gTDFQMi54KSB7XG4gICAgICBrMiA9IChMMlAyLnkgLSBMMlAxLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICAgIGIyID0gKEwyUDIueCAqIEwyUDEueSAtIEwyUDEueCAqIEwyUDIueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgICAgeCA9IEwxUDEueFxuICAgICAgeSA9IHggKiBrMiArIGIyXG4gICAgICByZXR1cm4gbmV3IFBvaW50KHgsIHkpXG4gICAgfSBlbHNlIHtcbiAgICAgIGsxID0gKEwxUDIueSAtIEwxUDEueSkgLyAoTDFQMi54IC0gTDFQMS54KVxuICAgICAgYjEgPSAoTDFQMi54ICogTDFQMS55IC0gTDFQMS54ICogTDFQMi55KSAvIChMMVAyLnggLSBMMVAxLngpXG4gICAgICBrMiA9IChMMlAyLnkgLSBMMlAxLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICAgIGIyID0gKEwyUDIueCAqIEwyUDEueSAtIEwyUDEueCAqIEwyUDIueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgICAgeCA9IChiMSAtIGIyKSAvIChrMiAtIGsxKVxuICAgICAgeSA9IHggKiBrMSArIGIxXG4gICAgICByZXR1cm4gbmV3IFBvaW50KHgsIHkpXG4gICAgfVxuICB9LFxuICAgIC8vR2V0IHBvaW50IGFuZCBjaGVjayB0aGF0IHBvaW50IGJlbG9uZyB0byBzZWdtZW50IG9mIHRoZSBsaW5lXG4gICAgLy8gaWYgbm90IC0gcmV0dXJuIHRoZSBuZWFyZXN0IHBvaW50IG9mIHNlZ21lbnRcbiAgYm91bmRUb1NlZ21lbnQ6IGZ1bmN0aW9uKExQMSwgTFAyLCBQKSB7XG4gICAgbGV0IHgsIHlcbiAgICB4ID0gR2VvbWV0cnkuYm91bmQoTWF0aC5taW4oTFAxLngsIExQMi54KSwgTWF0aC5tYXgoTFAxLngsIExQMi54KSwgUC54KVxuICAgIGlmICh4ICE9PSBQLngpIHtcbiAgICAgIHkgPSAoeCA9PT0gTFAxLngpID8gTFAxLnkgOiBMUDIueVxuICAgICAgUCA9IG5ldyBQb2ludCh4LCB5KVxuICAgIH1cblxuICAgIHkgPSBHZW9tZXRyeS5ib3VuZChNYXRoLm1pbihMUDEueSwgTFAyLnkpLCBNYXRoLm1heChMUDEueSwgTFAyLnkpLCBQLnkpXG4gICAgaWYgKHkgIT09IFAueSkge1xuICAgICAgeCA9ICh5ID09PSBMUDEueSkgPyBMUDEueCA6IExQMi54XG4gICAgICBQID0gbmV3IFBvaW50KHgsIHkpXG4gICAgfVxuXG4gICAgcmV0dXJuIFBcbiAgfSxcbiAgYm91bmRUb0xpbmU6IGZ1bmN0aW9uKEEsIEIsIFApIHtcbiAgICBjb25zdCBBUCA9IG5ldyBQb2ludChQLnggLSBBLngsIFAueSAtIEEueSksXG4gICAgICBBQiA9IG5ldyBQb2ludChCLnggLSBBLngsIEIueSAtIEEueSksXG4gICAgICBhYjIgPSBBQi54ICogQUIueCArIEFCLnkgKiBBQi55LFxuICAgICAgYXBfYWIgPSBBUC54ICogQUIueCArIEFQLnkgKiBBQi55LFxuICAgICAgdCA9IGFwX2FiIC8gYWIyXG4gICAgcmV0dXJuIG5ldyBQb2ludChBLnggKyBBQi54ICogdCwgQS55ICsgQUIueSAqIHQpXG4gIH0sXG4gIGdldFBvaW50SW5MaW5lOiBmdW5jdGlvbihMUDEsIExQMiwgcGVyY2VudCkge1xuICAgIGNvbnN0IGR4ID0gTFAyLnggLSBMUDEueCwgZHkgPSBMUDIueSAtIExQMS55XG4gICAgcmV0dXJuIG5ldyBQb2ludChMUDEueCArIHBlcmNlbnQgKiBkeCwgTFAxLnkgKyBwZXJjZW50ICogZHkpXG4gIH0sXG4gIGdldFBvaW50SW5MaW5lQnlMZW5naHQ6IGZ1bmN0aW9uKExQMSwgTFAyLCBsZW5naHQpIHtcbiAgICBjb25zdCBkeCA9IExQMi54IC0gTFAxLngsIGR5ID0gTFAyLnkgLSBMUDEueSwgcGVyY2VudCA9IGxlbmdodCAvIEdlb21ldHJ5LmRpc3RhbmNlKExQMSwgTFAyKVxuICAgIHJldHVybiBuZXcgUG9pbnQoTFAxLnggKyBwZXJjZW50ICogZHgsIExQMS55ICsgcGVyY2VudCAqIGR5KVxuICB9LFxuICBjcmVhdGVSZWN0YW5nbGVGcm9tRWxlbWVudDogZnVuY3Rpb24oZWwsIHBhcmVudCwgaXNDb250ZW50Qm94U2l6ZSwgaXNDb25zaWRlclRyYW5zbGF0ZSkge1xuICAgIGNvbnN0IHNpemUgPSB0aGlzLmdldFNpemVPZkVsZW1lbnQoZWwsIGlzQ29udGVudEJveFNpemUpXG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUodGhpcy5nZXRPZmZzZXQoZWwsIHBhcmVudCB8fCBlbC5wYXJlbnROb2RlLCBpc0NvbnNpZGVyVHJhbnNsYXRlKSwgc2l6ZSlcbiAgfSxcbiAgZ2V0U2l6ZU9mRWxlbWVudDogZnVuY3Rpb24oZWwsIGlzQ29udGVudEJveFNpemUpIHtcbiAgICBsZXQgd2lkdGggPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbClbJ3dpZHRoJ10pLCBoZWlnaHQgPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbClbJ2hlaWdodCddKVxuICAgIGlmICghaXNDb250ZW50Qm94U2l6ZSkge1xuICAgICAgd2lkdGggKz0gdXRpbC5nZXRTdW1WYWx1ZU9mU3R5bGVSdWxlKGVsLCBbJ3BhZGRpbmctbGVmdCcsICdwYWRkaW5nLXJpZ2h0JywgJ2JvcmRlci1sZWZ0LXdpZHRoJywgJ2JvcmRlci1yaWdodC13aWR0aCddKVxuICAgICAgaGVpZ2h0ICs9IHV0aWwuZ2V0U3VtVmFsdWVPZlN0eWxlUnVsZShlbCwgWydwYWRkaW5nLXRvcCcsICdwYWRkaW5nLWJvdHRvbScsICdib3JkZXItdG9wLXdpZHRoJywgJ2JvcmRlci1ib3R0b20td2lkdGgnXSlcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBQb2ludCh3aWR0aCwgaGVpZ2h0KVxuICB9LFxuICBnZXRPZmZzZXQ6IGZ1bmN0aW9uKGVsLCBwYXJlbnQpIHtcbiAgICBjb25zdCBlbFJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSwgcGFyZW50UmVjdCA9IHBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIHJldHVybiBuZXcgUG9pbnQoZWxSZWN0LmxlZnQgLSBwYXJlbnRSZWN0LmxlZnQsIGVsUmVjdC50b3AgLSBwYXJlbnRSZWN0LnRvcClcbiAgfSxcbiAgZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtOiBmdW5jdGlvbihhbmdsZSwgbGVuZ3RoLCBjZW50ZXIpIHtcbiAgICBjZW50ZXIgPSBjZW50ZXIgfHwgbmV3IFBvaW50KDAsIDApXG4gICAgcmV0dXJuIGNlbnRlci5hZGQobmV3IFBvaW50KGxlbmd0aCAqIE1hdGguY29zKGFuZ2xlKSwgbGVuZ3RoICogTWF0aC5zaW4oYW5nbGUpKSlcbiAgfSxcbiAgYWRkUG9pbnRUb0JvdW5kUG9pbnRzOiBmdW5jdGlvbihib3VuZHBvaW50cywgcG9pbnQsIGlzUmlnaHQpIHtcbiAgICBjb25zdCByZXN1bHQgPSBib3VuZHBvaW50cy5maWx0ZXIoZnVuY3Rpb24oYlBvaW50KSB7XG4gICAgICByZXR1cm4gIGJQb2ludC55ID4gcG9pbnQueSB8fCAoaXNSaWdodCA/IGJQb2ludC54IDwgcG9pbnQueCA6IGJQb2ludC54ID4gcG9pbnQueClcbiAgICB9KVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChwb2ludC55IDwgcmVzdWx0W2ldLnkpIHtcbiAgICAgICAgcmVzdWx0LnNwbGljZShpLCAwLCBwb2ludClcbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgICAgfVxuICAgIH1cbiAgICByZXN1bHQucHVzaChwb2ludClcbiAgICByZXR1cm4gcmVzdWx0XG4gIH0sXG4gIGdldEFuZ2xlOiBmdW5jdGlvbihwMSwgcDIpIHtcbiAgICBjb25zdCBkaWZmID0gcDIuc3ViKHAxKVxuICAgIHJldHVybiB0aGlzLm5vcm1hbGl6ZUFuZ2xlKE1hdGguYXRhbjIoZGlmZi55LCBkaWZmLngpKVxuICB9LFxuICB0b1JhZGlhbjogZnVuY3Rpb24oYW5nbGUpIHtcbiAgICByZXR1cm4gKChhbmdsZSAlIDM2MCkgKiBNYXRoLlBJIC8gMTgwKVxuICB9LFxuICB0b0RlZ3JlZTogZnVuY3Rpb24oYW5nbGUpIHtcbiAgICByZXR1cm4gKGFuZ2xlICogMTgwIC8gTWF0aC5QSSkgJSAzNjBcbiAgfSxcbiAgYm91bmRBbmdsZTogZnVuY3Rpb24obWluLCBtYXgsIHZhbCkge1xuICAgIGxldCBkbWluLCBkbWF4XG4gICAgaWYgKG1pbiA8IG1heCAmJiB2YWwgPiBtaW4gJiYgdmFsIDwgbWF4KSB7XG4gICAgICByZXR1cm4gdmFsXG4gICAgfSBlbHNlIGlmIChtYXggPCBtaW4gJiYgKHZhbCA8IG1heCB8fCB2YWwgPiBtaW4pKSB7XG4gICAgICByZXR1cm4gdmFsXG4gICAgfSBlbHNlIHtcbiAgICAgIGRtaW4gPSB0aGlzLmdldEFuZ2xlRGlmZihtaW4sIHZhbClcbiAgICAgIGRtYXggPSB0aGlzLmdldEFuZ2xlRGlmZihtYXgsIHZhbClcbiAgICAgIGlmIChkbWluIDwgZG1heCkge1xuICAgICAgICByZXR1cm4gbWluXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbWF4XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBnZXROZWFyZXN0QW5nbGU6IGZ1bmN0aW9uKGFyciwgYW5nbGUpIHtcbiAgICBsZXQgaSwgdGVtcCwgZGlmZiA9IE1hdGguUEkgKiAyLCB2YWx1ZVxuICAgIGZvciAoaSA9IDA7IGkgPCBhcnIubGVuZ3RoO2krKykge1xuICAgICAgdGVtcCA9IEdlb21ldHJ5LmdldEFuZ2xlRGlmZihhcnJbaV0sIGFuZ2xlKVxuICAgICAgaWYgKGRpZmYgPCB0ZW1wKSB7XG4gICAgICAgIGRpZmYgPSB0ZW1wXG4gICAgICAgIHZhbHVlID0gYXJyW2ldXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZVxuICB9LFxuICBnZXRBbmdsZURpZmY6IGZ1bmN0aW9uKGFscGhhLCBiZXRhKSB7XG4gICAgY29uc3QgbWluQW5nbGUgPSBNYXRoLm1pbihhbHBoYSwgYmV0YSksXG4gICAgICBtYXhBbmdsZSA9ICBNYXRoLm1heChhbHBoYSwgYmV0YSlcbiAgICByZXR1cm4gTWF0aC5taW4obWF4QW5nbGUgLSBtaW5BbmdsZSwgbWluQW5nbGUgKyBNYXRoLlBJKjIgLSBtYXhBbmdsZSlcbiAgfSxcbiAgbm9ybWFsaXplQW5nbGU6IGZ1bmN0aW9uKHZhbCkge1xuICAgIHdoaWxlICh2YWwgPCAwKSB7XG4gICAgICB2YWwgKz0gMiAqIE1hdGguUElcbiAgICB9XG4gICAgd2hpbGUgKHZhbCA+IDIgKiBNYXRoLlBJKSB7XG4gICAgICB2YWwgLT0gMiAqIE1hdGguUElcbiAgICB9XG4gICAgcmV0dXJuIHZhbFxuICB9XG59XG5cbmV4cG9ydCB7IFBvaW50LCBSZWN0YW5nbGUsIEdlb21ldHJ5IH1cbiIsIid1c2Ugc3RyaWN0J1xuaW1wb3J0IHsgR2VvbWV0cnksIFBvaW50IH0gZnJvbSAnLi9nZW9tZXRyeSdcblxuY29uc3QgcG9zaXRpb25UeXBlID0ge1xuICBub3RDcm9zc2luZzogMCxcbiAgZmxvYXRMZWZ0OiAxLFxuICBmbG9hdFJpZ2h0OiAyXG59XG5cbmZ1bmN0aW9uIHBvc2l0aW9uRmFjdG9yeSh0eXBlKSB7XG4gIHN3aXRjaCAodHlwZSkge1xuICBjYXNlIHBvc2l0aW9uVHlwZS5ub3RDcm9zc2luZzpcbiAgICByZXR1cm4gZnVuY3Rpb24ocmVjdGFuZ2xlLCBfb3B0aW9ucykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKHJlY3RhbmdsZUxpc3QsIGluZGV4ZXNPZk5ld3MpIHtcbiAgICAgICAgY29uc3QgYm91bmRSZWN0ID0gdHlwZW9mIHJlY3RhbmdsZSA9PT0gJ2Z1bmN0aW9uJyA/IHJlY3RhbmdsZSgpIDogcmVjdGFuZ2xlLFxuICAgICAgICAgIHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMgPSByZWN0YW5nbGVMaXN0LnJlZHVjZShmdW5jdGlvbihpbmRleGVzLCBfcmVjdCwgaW5kZXgpIHtcbiAgICAgICAgICAgIGlmIChpbmRleGVzT2ZOZXdzLmluZGV4T2YoaW5kZXgpID09PSAtMSkge1xuICAgICAgICAgICAgICBpbmRleGVzLnB1c2goaW5kZXgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaW5kZXhlc1xuICAgICAgICAgIH0sIFtdKVxuXG4gICAgICAgIGluZGV4ZXNPZk5ld3MuZm9yRWFjaChmdW5jdGlvbihpbmRleCkge1xuICAgICAgICAgIGxldCByZWN0ID0gcmVjdGFuZ2xlTGlzdFtpbmRleF0sIHJlbW92YWJsZSA9IGZhbHNlXG4gICAgICAgICAgc3RhdGljUmVjdGFuZ2xlSW5kZXhlcy5mb3JFYWNoKGZ1bmN0aW9uKGluZGV4T2ZTdGF0aWMpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXRpY1JlY3QgPSByZWN0YW5nbGVMaXN0W2luZGV4T2ZTdGF0aWNdXG4gICAgICAgICAgICByZWN0ID0gc3RhdGljUmVjdC5tb3ZlVG9Cb3VuZChyZWN0KVxuICAgICAgICAgIH0pXG4gICAgICAgICAgcmVtb3ZhYmxlID0gc3RhdGljUmVjdGFuZ2xlSW5kZXhlcy5zb21lKGZ1bmN0aW9uKGluZGV4T2ZTdGF0aWMpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXRpY1JlY3QgPSByZWN0YW5nbGVMaXN0W2luZGV4T2ZTdGF0aWNdXG4gICAgICAgICAgICByZXR1cm4gICEhc3RhdGljUmVjdC5hbmQocmVjdClcbiAgICAgICAgICB9KSB8fCByZWN0LmFuZChib3VuZFJlY3QpLmdldFNxdWFyZSgpICE9PSByZWN0LmdldFNxdWFyZSgpXG4gICAgICAgICAgaWYgKHJlbW92YWJsZSkge1xuICAgICAgICAgICAgcmVjdC5yZW1vdmFibGUgPSB0cnVlXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMucHVzaChpbmRleClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiByZWN0YW5nbGVMaXN0XG4gICAgICB9XG4gICAgfVxuICBjYXNlIHBvc2l0aW9uVHlwZS5mbG9hdExlZnQ6XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHJlY3RhbmdsZSwgb3B0aW9ucykge1xuICAgICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBwYWRkaW5nVG9wTGVmdDogbmV3IFBvaW50KDAsIDApLFxuICAgICAgICBwYWRkaW5nQm90dG9tUmlnaHQ6IG5ldyBQb2ludCgwLCAwKSxcbiAgICAgICAgeUdhcEJldHdlZW5EcmFnZ2FibGVzOiAwLFxuICAgICAgICByZW1vdmFibGU6IHRydWVcbiAgICAgIH0sIG9wdGlvbnMpXG5cbiAgICAgIHJldHVybiBmdW5jdGlvbihyZWN0YW5nbGVMaXN0LCBfaW5kZXhlc09mTmV3cykge1xuICAgICAgICBjb25zdCBib3VuZFJlY3QgPSB0eXBlb2YgcmVjdGFuZ2xlID09PSAnZnVuY3Rpb24nID8gcmVjdGFuZ2xlKCkgOiByZWN0YW5nbGVcbiAgICAgICAgY29uc3QgcmVjdFAyID0gYm91bmRSZWN0LmdldFAyKClcbiAgICAgICAgbGV0IGJvdW5kYXJ5UG9pbnRzID0gW2JvdW5kUmVjdC5wb3NpdGlvbl1cbiAgICAgICAgcmVjdGFuZ2xlTGlzdC5mb3JFYWNoKGZ1bmN0aW9uKHJlY3QpIHtcbiAgICAgICAgICBsZXQgcG9zaXRpb24sIGlzVmFsaWQgPSBmYWxzZVxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm91bmRhcnlQb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gKG5ldyBQb2ludChib3VuZGFyeVBvaW50c1tpXS54LCBpID4gMCA/IChib3VuZGFyeVBvaW50c1tpIC0gMV0ueSArIG9wdGlvbnMueUdhcEJldHdlZW5EcmFnZ2FibGVzKSA6IGJvdW5kUmVjdC5wb3NpdGlvbi55KSkuYWRkKG9wdGlvbnMucGFkZGluZ1RvcExlZnQpXG4gICAgICAgICAgICBpc1ZhbGlkID0gKHBvc2l0aW9uLnggKyByZWN0LnNpemUueCA8IHJlY3RQMi54KVxuICAgICAgICAgICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IChuZXcgUG9pbnQoYm91bmRSZWN0LnBvc2l0aW9uLngsIGJvdW5kYXJ5UG9pbnRzW2JvdW5kYXJ5UG9pbnRzLmxlbmd0aCAtIDFdLnkgKyBvcHRpb25zLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcykpLmFkZChvcHRpb25zLnBhZGRpbmdUb3BMZWZ0KVxuICAgICAgICAgIH1cbiAgICAgICAgICByZWN0LnBvc2l0aW9uID0gcG9zaXRpb25cbiAgICAgICAgICBpZiAob3B0aW9ucy5yZW1vdmFibGUgJiYgcmVjdC5nZXRQMygpLnkgPiBib3VuZFJlY3QuZ2V0UDMoKS55KSB7XG4gICAgICAgICAgICByZWN0LnJlbW92YWJsZSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgYm91bmRhcnlQb2ludHMgPSBHZW9tZXRyeS5hZGRQb2ludFRvQm91bmRQb2ludHMoYm91bmRhcnlQb2ludHMsIHJlY3QuZ2V0UDMoKS5hZGQob3B0aW9ucy5wYWRkaW5nQm90dG9tUmlnaHQpKVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gcmVjdGFuZ2xlTGlzdFxuICAgICAgfVxuICAgIH1cbiAgY2FzZSBwb3NpdGlvblR5cGUuZmxvYXRSaWdodDpcbiAgICByZXR1cm4gZnVuY3Rpb24ocmVjdGFuZ2xlLCBvcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0gT2JqZWN0LmFzc2luZyh7XG4gICAgICAgIHBhZGRpbmdUb3BSaWdodDogbmV3IFBvaW50KDUsIDUpLFxuICAgICAgICBwYWRkaW5nQm90dG9tTGVmdDogbmV3IFBvaW50KDAsIDApLFxuICAgICAgICByZW1vdmFibGU6IHRydWVcbiAgICAgIH0sIG9wdGlvbnMpXG5cbiAgICAgIGNvbnN0IHBhZGRpbmdUb3BOZWdSaWdodCA9IG5ldyBQb2ludCgtb3B0aW9ucy5wYWRkaW5nVG9wUmlnaHQueCwgb3B0aW9ucy5wYWRkaW5nVG9wUmlnaHQueSlcbiAgICAgIGNvbnN0IHBhZGRpbmdCb3R0b21OZWdMZWZ0ID0gbmV3IFBvaW50KC1vcHRpb25zLnBhZGRpbmdCb3R0b21MZWZ0LngsIG9wdGlvbnMucGFkZGluZ0JvdHRvbUxlZnQueSlcbiAgICAgIHJldHVybiBmdW5jdGlvbihyZWN0YW5nbGVMaXN0LCBfaW5kZXhlc09mTmV3cykge1xuICAgICAgICBjb25zdCBib3VuZFJlY3QgPSB0eXBlb2YgcmVjdGFuZ2xlID09PSAnZnVuY3Rpb24nID8gcmVjdGFuZ2xlKCkgOiByZWN0YW5nbGVcbiAgICAgICAgbGV0IGJvdW5kYXJ5UG9pbnRzID0gW2JvdW5kUmVjdC5nZXRSaWdodFRvcFBvaW50KCldXG4gICAgICAgIHJlY3RhbmdsZUxpc3QuZm9yRWFjaChmdW5jdGlvbihyZWN0LCBfaW5kZXgpIHtcbiAgICAgICAgICBsZXQgcG9zaXRpb24sIGlzVmFsaWQgPSBmYWxzZVxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm91bmRhcnlQb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gKG5ldyBQb2ludChib3VuZGFyeVBvaW50c1tpXS54IC0gcmVjdC5zaXplLngsIGkgPiAwID8gYm91bmRhcnlQb2ludHNbaSAtIDFdLnkgOiBib3VuZFJlY3QucG9zaXRpb24ueSkpLmFkZChwYWRkaW5nVG9wTmVnUmlnaHQpXG4gICAgICAgICAgICBpc1ZhbGlkID0gKHBvc2l0aW9uLnggPiByZWN0LnBvc2l0aW9uLngpXG4gICAgICAgICAgICBpZiAoaXNWYWxpZCkge1xuICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gbmV3IFBvaW50KGJvdW5kUmVjdC5nZXRQMigpLngsIGJvdW5kYXJ5UG9pbnRzW2JvdW5kYXJ5UG9pbnRzLmxlbmd0aCAtIDFdLnkpXG4gICAgICAgICAgfVxuICAgICAgICAgIHJlY3QucG9zaXRpb24gPSBwb3NpdGlvblxuICAgICAgICAgIGlmIChvcHRpb25zLnJlbW92YWJsZSAmJiByZWN0LmdldExlZnRCb3R0b21Qb2ludCgpLnkgPiBib3VuZFJlY3QuZ2V0UDQoKS55KSB7XG4gICAgICAgICAgICByZWN0LnJlbW92YWJsZSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgYm91bmRhcnlQb2ludHMgPSBHZW9tZXRyeS5hZGRQb2ludFRvQm91bmRQb2ludHMoYm91bmRhcnlQb2ludHMsIHJlY3QuZ2V0UDQoKS5hZGQocGFkZGluZ0JvdHRvbU5lZ0xlZnQpLCB0cnVlKVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gcmVjdGFuZ2xlTGlzdFxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBzb3J0aW5nRmFjdG9yeSh0eXBlKSB7XG4gIHN3aXRjaCAodHlwZSkge1xuICBjYXNlIHBvc2l0aW9uVHlwZS5ub3RDcm9zc2luZzpcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24ob2xkT2Jqc0xpc3QsIG5ld09ianMsIGluZGV4T2ZOZXdzKSB7XG4gICAgICAgIGNvbnN0IG9ianNMaXN0ID0gb2xkT2Jqc0xpc3QuY29uY2F0KG5ld09ianMpXG4gICAgICAgIG5ld09ianMuZm9yRWFjaChmdW5jdGlvbihvYmopIHtcbiAgICAgICAgICBpbmRleE9mTmV3cy5wdXNoKG9ianNMaXN0LmluZGV4T2Yob2JqKSlcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIG9ianNMaXN0XG4gICAgICB9XG4gICAgfVxuICBjYXNlIHBvc2l0aW9uVHlwZS5mbG9hdExlZnQ6XG4gIGNhc2UgcG9zaXRpb25UeXBlLmZsb2F0UmlnaHQ6XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHJhZGl1cywgZ2V0RGlzdGFuY2UsIG9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgZ2V0UG9zaXRpb246IGZ1bmN0aW9uKG9iaikge1xuICAgICAgICAgIHJldHVybiBvYmoucG9zaXRpb25cbiAgICAgICAgfVxuICAgICAgfSwgb3B0aW9ucylcblxuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG9sZE9ianNMaXN0LCBuZXdPYmpzLCBpbmRleE9mTmV3cykge1xuICAgICAgICBjb25zdCBuZXdMaXN0ID0gb2xkT2Jqc0xpc3QuY29uY2F0KClcbiAgICAgICAgY29uc3QgbGlzdE9sZFBvc2l0aW9uID0gb2xkT2Jqc0xpc3QubWFwKG9wdGlvbnMuZ2V0UG9zaXRpb24pXG4gICAgICAgIG5ld09ianMuZm9yRWFjaChmdW5jdGlvbihuZXdPYmopIHtcbiAgICAgICAgICBsZXQgaW5kZXggPSBHZW9tZXRyeS5pbmRleE9mTmVhclBvaW50KGxpc3RPbGRQb3NpdGlvbiwgb3B0aW9ucy5nZXRQb3NpdGlvbihuZXdPYmopLCByYWRpdXMsIGdldERpc3RhbmNlKVxuICAgICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIGluZGV4ID0gbmV3TGlzdC5sZW5ndGhcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaW5kZXggPSBuZXdMaXN0LmluZGV4T2Yob2xkT2Jqc0xpc3RbaW5kZXhdKVxuICAgICAgICAgIH1cbiAgICAgICAgICBuZXdMaXN0LnNwbGljZShpbmRleCwgMCwgbmV3T2JqKVxuICAgICAgICB9KVxuICAgICAgICBuZXdPYmpzLmZvckVhY2goZnVuY3Rpb24obmV3T2JqKSB7XG4gICAgICAgICAgaW5kZXhPZk5ld3MucHVzaChuZXdMaXN0LmluZGV4T2YobmV3T2JqKSlcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIG5ld0xpc3RcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IHsgcG9zaXRpb25UeXBlLCBzb3J0aW5nRmFjdG9yeSwgcG9zaXRpb25GYWN0b3J5IH1cbiIsImltcG9ydCB7IHJlbW92ZUl0ZW0gfSBmcm9tICcuL3V0aWwnXG5pbXBvcnQgRXZlbnQgZnJvbSAnLi9ldmVudCdcbmltcG9ydCB7IERyYWdnYWJsZSB9IGZyb20gJy4vZHJhZ2dhYmxlJ1xuaW1wb3J0IHsgVGFyZ2V0IH0gZnJvbSAnLi90YXJnZXQnXG5cbmNvbnN0IERyYWdlZSA9IHsgRXZlbnQgfSAvL3RvZG8gcmVtb3ZlIGFmdGVyIHJlZmFjdG9yZVxuXG5jb25zdCBzY29wZXMgPSBbXVxuXG5jbGFzcyBTY29wZSB7XG4gIGNvbnN0cnVjdG9yKGRyYWdnYWJsZXMsIHRhcmdldHMsIG9wdGlvbnM9e30pIHtcbiAgICBzY29wZXMuZm9yRWFjaCgoc2NvcGUpID0+IHtcbiAgICAgIGlmIChkcmFnZ2FibGVzKSB7XG4gICAgICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICAgICAgcmVtb3ZlSXRlbShzY29wZS5kcmFnZ2FibGVzLCBkcmFnZ2FibGUpXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIGlmICh0YXJnZXRzKSB7XG4gICAgICAgIHRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB7XG4gICAgICAgICAgcmVtb3ZlSXRlbShzY29wZS50YXJnZXRzLCB0YXJnZXQpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZXMgfHwgW11cbiAgICB0aGlzLnRhcmdldHMgPSB0YXJnZXRzIHx8IFtdXG4gICAgc2NvcGVzLnB1c2godGhpcylcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICB0aW1lRW5kOiAob3B0aW9ucy50aW1lRW5kKSB8fCA0MDBcbiAgICB9XG5cbiAgICB0aGlzLm9uQ2hhbmdlID0gbmV3IERyYWdlZS5FdmVudCh0aGlzKVxuICAgIGlmIChvcHRpb25zLm9uQ2hhbmdlKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlLmFkZChvcHRpb25zLm9uQ2hhbmdlKVxuICAgIH1cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUub25FbmQuYWRkKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMub25FbmQoZHJhZ2dhYmxlKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgYWRkRHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5wdXNoKGRyYWdnYWJsZSlcbiAgICBkcmFnZ2FibGUub25FbmQudW5zaGlmdCgoKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5vbkVuZChkcmFnZ2FibGUpXG4gICAgfSlcbiAgfVxuXG4gIGFkZFRhcmdldCh0YXJnZXQpIHtcbiAgICB0aGlzLnRhcmdldHMucHVzaCh0YXJnZXQpXG4gIH1cblxuICBvbkVuZChkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBzaG90VGFyZ2V0cyA9IHRoaXMudGFyZ2V0cy5maWx0ZXIoKHRhcmdldCkgPT4ge1xuICAgICAgcmV0dXJuIHRhcmdldC5kcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTFcbiAgICB9KS5maWx0ZXIoKHRhcmdldCkgPT4ge1xuICAgICAgcmV0dXJuIHRhcmdldC5jYXRjaERyYWdnYWJsZShkcmFnZ2FibGUpXG4gICAgfSkuc29ydCgoYSwgYikgPT4ge1xuICAgICAgcmV0dXJuIGEuZ2V0UmVjdGFuZ2xlKCkuZ2V0U3F1YXJlKCkgLSBiLmdldFJlY3RhbmdsZSgpLmdldFNxdWFyZSgpXG4gICAgfSlcblxuICAgIGlmIChzaG90VGFyZ2V0cy5sZW5ndGgpIHtcbiAgICAgIHNob3RUYXJnZXRzWzBdLm9uRW5kKGRyYWdnYWJsZSlcbiAgICB9IGVsc2UgaWYgKGRyYWdnYWJsZS50YXJnZXRzLmxlbmd0aCkge1xuICAgICAgZHJhZ2dhYmxlLm1vdmUoZHJhZ2dhYmxlLmluaXRQb3NpdGlvbiwgdGhpcy5vcHRpb25zLnRpbWVFbmQsIHRydWUsIHRydWUpXG4gICAgfVxuICAgIHRoaXMub25DaGFuZ2UuZmlyZSgpXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMudGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHRhcmdldC5yZXNldCgpKVxuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucmVmcmVzaCgpKVxuICAgIHRoaXMudGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHRhcmdldC5yZWZyZXNoKCkpXG4gIH1cblxuICBnZXQgcG9zaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnRhcmdldHMubWFwKCh0YXJnZXQpID0+IHtcbiAgICAgIHJldHVybiB0YXJnZXQuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB0aGlzLmRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpKVxuICAgIH0pXG4gIH1cblxuICBzZXQgcG9zaXRpb25zKHBvc2l0aW9ucykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSAnd3JvbmcgYXJyYXkgbGVuZ3RoJ1xuICAgIGlmIChwb3NpdGlvbnMubGVuZ3RoID09PSB0aGlzLnRhcmdldHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB0YXJnZXQucmVzZXQoKSlcblxuICAgICAgcG9zaXRpb25zLmZvckVhY2goKHRhcmdldEluZGV4ZXMsIGkpID0+IHtcbiAgICAgICAgdGFyZ2V0SW5kZXhlcy5mb3JFYWNoKChpbmRleCkgPT4ge1xuICAgICAgICAgIHRoaXMudGFyZ2V0c1tpXS5hZGQodGhpcy5kcmFnZ2FibGVzW2luZGV4XSlcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG1lc3NhZ2VcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgZGVmYXVsdFNjb3BlID0gbmV3IFNjb3BlKClcblxuZnVuY3Rpb24gc2NvcGUoZm4pIHtcbiAgY29uc3QgY3VycmVudFNjb3BlID0gbmV3IFNjb3BlKClcbiAgY29uc3QgYWRkRHJhZ2dhYmxlVG9TY29wZSA9IGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICAgIGN1cnJlbnRTY29wZS5hZGREcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICAgIHJldHVybiB0cnVlXG4gIH1cbiAgY29uc3QgYWRkVGFyZ2V0VG9TY29wZSA9IGZ1bmN0aW9uKHRhcmdldCkge1xuICAgIGN1cnJlbnRTY29wZS5hZGRUYXJnZXQodGFyZ2V0KVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBEcmFnZ2FibGUub25DcmVhdGUuYWRkKGFkZERyYWdnYWJsZVRvU2NvcGUpXG4gIFRhcmdldC5vbkNyZWF0ZS5hZGQoYWRkVGFyZ2V0VG9TY29wZSlcbiAgZm4uY2FsbCgpXG4gIERyYWdnYWJsZS5vbkNyZWF0ZS5yZW1vdmUoYWRkRHJhZ2dhYmxlVG9TY29wZSlcbiAgVGFyZ2V0Lm9uQ3JlYXRlLnJlbW92ZShhZGRUYXJnZXRUb1Njb3BlKVxuICByZXR1cm4gY3VycmVudFNjb3BlXG59XG5cbmZ1bmN0aW9uIHNjb3BlRmFjdG9yeShwYXJlbnRFbGVtZW50LCBkcmFnZ2FibGVFbGVtZW50cywgdGFyZ2V0RWxlbWVudHMsIG9wdGlvbnM9e30pIHtcbiAgY29uc3QgZHJhZ2dhYmxlT3B0aW9ucyA9IG9wdGlvbnMuZHJhZ2dhYmxlIHx8IHt9XG4gIGNvbnN0IHRhcmdldE9wdGlvbnMgPSBvcHRpb25zLnRhcmdldCB8fCB7fVxuICBjb25zdCBzY29wZU9wdGlvbnMgPSBvcHRpb25zLnNjb3BlIHx8IHt9XG4gIGRyYWdnYWJsZU9wdGlvbnMucGFyZW50ID0gZHJhZ2dhYmxlT3B0aW9ucy5wYXJlbnQgfHwgcGFyZW50RWxlbWVudFxuICB0YXJnZXRPcHRpb25zLnBhcmVudCA9IHRhcmdldE9wdGlvbnMucGFyZW50IHx8IHBhcmVudEVsZW1lbnRcbiAgZHJhZ2dhYmxlRWxlbWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkcmFnZ2FibGVFbGVtZW50cylcbiAgdGFyZ2V0RWxlbWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0YXJnZXRFbGVtZW50cylcblxuICBjb25zdCBkcmFnZ2FibGVzID0gZHJhZ2dhYmxlRWxlbWVudHMubWFwKChlbGVtZW50KSA9PiB7XG4gICAgcmV0dXJuIG5ldyBEcmFnZ2FibGUoZWxlbWVudCwgZHJhZ2dhYmxlT3B0aW9ucylcbiAgfSlcblxuICBjb25zdCB0YXJnZXRzID0gdGFyZ2V0RWxlbWVudHMubWFwKChlbGVtZW50KSA9PiB7XG4gICAgcmV0dXJuIG5ldyBUYXJnZXQoZWxlbWVudCwgZHJhZ2dhYmxlcywgdGFyZ2V0T3B0aW9ucylcbiAgfSlcbiAgcmV0dXJuIG5ldyBTY29wZShkcmFnZ2FibGVzLCB0YXJnZXRzLCBzY29wZU9wdGlvbnMpXG59XG5cbmV4cG9ydCB7IHNjb3BlcywgZGVmYXVsdFNjb3BlLCBTY29wZSwgc2NvcGVGYWN0b3J5LCBzY29wZSB9XG4iLCJpbXBvcnQge1xuICBnZXREZWZhdWx0UGFyZW50LFxuICByZW1vdmVJdGVtLFxuICByYW5nZVxufSBmcm9tICcuL3V0aWwnXG5cbmltcG9ydCBFdmVudCBmcm9tICcuL2V2ZW50J1xuaW1wb3J0IHsgR2VvbWV0cnkgfSBmcm9tICcuL2dlb21ldHJ5J1xuaW1wb3J0IHsgcG9zaXRpb25UeXBlLCBzb3J0aW5nRmFjdG9yeSwgcG9zaXRpb25GYWN0b3J5IH0gZnJvbSAnLi9wb3NpdGlvbmluZydcbmltcG9ydCB7IHNjb3BlcywgZGVmYXVsdFNjb3BlIH0gZnJvbSAnLi9zY29wZSdcblxuY29uc3QgRHJhZ2VlID0geyBwb3NpdGlvblR5cGUsICBwb3NpdGlvbkZhY3RvcnksIHNvcnRpbmdGYWN0b3J5LCBzY29wZXMsIEV2ZW50IH0vL3RvZG8gcmVtb3ZlIGFmdGVyIHJlZmFjdG9yZVxuXG5jb25zdCB0YXJnZXRzID0gW10sXG4gIGFkZFRvRGVmYXVsdFNjb3BlID0gZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgZGVmYXVsdFNjb3BlLmFkZFRhcmdldCh0YXJnZXQpXG4gIH1cblxuY2xhc3MgVGFyZ2V0IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgZHJhZ2dhYmxlcywgb3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gdGhpc1xuICAgIGNvbnN0IHBhcmVudCA9IG9wdGlvbnMucGFyZW50IHx8IGdldERlZmF1bHRQYXJlbnQoZWxlbWVudClcblxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgdGltZUVuZDogMjAwLFxuICAgICAgdGltZUV4Y2FuZ2U6IDQwMCxcbiAgICAgIHBhcmVudDogcGFyZW50LFxuICAgICAgc29ydGluZzogRHJhZ2VlLnNvcnRpbmdGYWN0b3J5KERyYWdlZS5wb3NpdGlvblR5cGUuZmxvYXRMZWZ0KSg4MCwgR2VvbWV0cnkudHJhbnNmb3JtZWRTcGFjZURpc3RhbmNlRmFjdG9yeSh7IHg6IDEsIHk6IDQgfSkpLFxuICAgICAgcG9zaXRpb25pbmc6IERyYWdlZS5wb3NpdGlvbkZhY3RvcnkoRHJhZ2VlLnBvc2l0aW9uVHlwZS5mbG9hdExlZnQpKHRoaXMuZ2V0UmVjdGFuZ2xlLmJpbmQodGhpcyksIHsgcmVtb3ZhYmxlOiB0cnVlIH0pXG4gICAgfSwgb3B0aW9ucylcblxuICAgIHRhcmdldHMucHVzaCh0aGlzKVxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcbiAgICBkcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLnRhcmdldHMucHVzaCh0YXJnZXQpKVxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZXNcbiAgICB0aGlzLm9uQWRkID0gbmV3IERyYWdlZS5FdmVudCh0aGlzKVxuICAgIHRoaXMuYmVmb3JlQWRkID0gbmV3IERyYWdlZS5FdmVudCh0aGlzKVxuICAgIHRoaXMub25SZW1vdmUgPSBuZXcgRHJhZ2VlLkV2ZW50KHRoaXMpXG5cbiAgICBpZiAob3B0aW9ucy5vblJlbW92ZSkge1xuICAgICAgdGhpcy5vblJlbW92ZS5hZGQob3B0aW9ucy5vblJlbW92ZSlcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5vbkFkZCkge1xuICAgICAgdGhpcy5vbkFkZC5hZGQob3B0aW9ucy5vbkFkZClcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5iZWZvcmVBZGQpIHtcbiAgICAgIHRoaXMuYmVmb3JlQWRkLmFkZChvcHRpb25zLmJlZm9yZUFkZClcbiAgICB9XG5cbiAgICBUYXJnZXQub25DcmVhdGUuZmlyZSh0aGlzKVxuXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgbGV0IHJlY3RhbmdsZXMsIGluZGV4ZXNPZk5ld1xuXG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMgPSB0aGlzLmRyYWdnYWJsZXMuZmlsdGVyKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGxldCBlbGVtZW50ID0gZHJhZ2dhYmxlLmVsZW1lbnQucGFyZW50Tm9kZVxuICAgICAgd2hpbGUgKGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQgPT09IHRoaXMuZWxlbWVudCkge1xuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfSlcblxuICAgIGlmICh0aGlzLmlubmVyRHJhZ2dhYmxlcy5sZW5ndGgpIHtcbiAgICAgIGluZGV4ZXNPZk5ldyA9IHJhbmdlKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmxlbmd0aClcbiAgICAgIHJlY3RhbmdsZXMgPSB0aGlzLm9wdGlvbnMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgICAgfSksIGluZGV4ZXNPZk5ldylcbiAgICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgaW5kZXhlc09mTmV3KVxuICAgICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB0aGlzLm9uQWRkLmZpcmUoZHJhZ2dhYmxlKSlcbiAgICB9XG4gIH1cblxuICBnZXRSZWN0YW5nbGUoKSB7XG4gICAgcmV0dXJuIEdlb21ldHJ5LmNyZWF0ZVJlY3RhbmdsZUZyb21FbGVtZW50KFxuICAgICAgdGhpcy5lbGVtZW50LFxuICAgICAgdGhpcy5vcHRpb25zLnBhcmVudCxcbiAgICAgIHRoaXMub3B0aW9ucy5pc0NvbnRlbnRCb3hTaXplLFxuICAgICAgdHJ1ZVxuICAgIClcbiAgfVxuXG4gIGNhdGNoRHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuY2F0Y2hEcmFnZ2FibGUpIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuY2F0Y2hEcmFnZ2FibGUodGhpcywgZHJhZ2dhYmxlKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0YXJnZXRSZWN0YW5nbGUgPSB0aGlzLmdldFJlY3RhbmdsZSgpXG4gICAgICBjb25zdCBkcmFnZ2FibGVTcXVhcmUgPSBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKCkuZ2V0U3F1YXJlKClcblxuICAgICAgcmV0dXJuIGRyYWdnYWJsZVNxdWFyZSA8IHRhcmdldFJlY3RhbmdsZS5nZXRTcXVhcmUoKVxuICAgICAgICAgICAgICAmJiB0YXJnZXRSZWN0YW5nbGUuaW5jbHVkZVBvaW50KGRyYWdnYWJsZS5nZXRDZW50ZXIoKSlcbiAgICB9XG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRSZWN0YW5nbGUoKS5wb3NpdGlvblxuICB9XG5cbiAgZ2V0U2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRSZWN0YW5nbGUoKS5zaXplXG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIERyYWdlZS5zY29wZXMuZm9yRWFjaCgoc2NvcGUpID0+IHJlbW92ZUl0ZW0oc2NvcGUudGFyZ2V0cywgdGhpcykpXG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLm9wdGlvbnMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgW10pXG4gICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBbXSwgMClcbiAgfVxuXG4gIG9uRW5kKGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IG5ld0RyYWdnYWJsZXNJbmRleCA9IFtdXG4gICAgY29uc3QgaW5jbHVkZVBvaW50ID0gdGhpcy5nZXRSZWN0YW5nbGUoKS5pbmNsdWRlUG9pbnQoZHJhZ2dhYmxlLmdldFBvc2l0aW9uKCkpXG5cbiAgICBpZiAoIWluY2x1ZGVQb2ludCkge1xuICAgICAgaWYgKHRoaXMuZ2V0UmVjdGFuZ2xlKCkuaW5jbHVkZVBvaW50KGRyYWdnYWJsZS5nZXRDZW50ZXIoKSkpIHtcbiAgICAgICAgZHJhZ2dhYmxlLnBvc2l0aW9uID0gZHJhZ2dhYmxlLmdldENlbnRlcigpLmNsb25lKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuYmVmb3JlQWRkLmZpcmUoZHJhZ2dhYmxlKVxuXG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMgPSB0aGlzLm9wdGlvbnMuc29ydGluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcywgW2RyYWdnYWJsZV0sIG5ld0RyYWdnYWJsZXNJbmRleClcbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgfSksIG5ld0RyYWdnYWJsZXNJbmRleCwgZHJhZ2dhYmxlKVxuXG4gICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBuZXdEcmFnZ2FibGVzSW5kZXgpXG4gICAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTEpIHtcbiAgICAgIHRoaXMuYWRkUmVtb3ZlT25Nb3ZlKGRyYWdnYWJsZSlcbiAgICB9XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIHNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIGluZGV4ZXNPZk5ldywgdGltZSkge1xuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnNsaWNlKDApLmZvckVhY2goKGRyYWdnYWJsZSwgaSkgPT4ge1xuICAgICAgY29uc3QgcmVjdCA9IHJlY3RhbmdsZXNbaV0sXG4gICAgICAgIHRpbWVFbmQgPSB0aW1lIHx8IHRpbWUgPT09IDAgPyB0aW1lIDogaW5kZXhlc09mTmV3LmluZGV4T2YoaSkgIT09IC0xID8gdGhpcy5vcHRpb25zLnRpbWVFbmQgOiB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2VcblxuICAgICAgaWYgKHJlY3QucmVtb3ZhYmxlKSB7XG4gICAgICAgIGRyYWdnYWJsZS5tb3ZlKGRyYWdnYWJsZS5pbml0UG9zaXRpb24sIHRpbWVFbmQsIHRydWUsIHRydWUpXG4gICAgICAgIHJlbW92ZUl0ZW0odGhpcy5pbm5lckRyYWdnYWJsZXMsIGRyYWdnYWJsZSlcblxuICAgICAgICB0aGlzLm9uUmVtb3ZlLmZpcmUoZHJhZ2dhYmxlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZHJhZ2dhYmxlLm1vdmUocmVjdC5wb3NpdGlvbiwgdGltZUVuZCwgdHJ1ZSwgdHJ1ZSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgYWRkKGRyYWdnYWJsZSwgdGltZSkge1xuICAgIGNvbnN0IG5ld0RyYWdnYWJsZXNJbmRleCA9IHRoaXMuaW5uZXJEcmFnZ2FibGVzLmxlbmd0aFxuXG4gICAgdGhpcy5iZWZvcmVBZGQuZmlyZShkcmFnZ2FibGUpXG5cbiAgICB0aGlzLnB1c2hJbm5lckRyYWdnYWJsZShkcmFnZ2FibGUpXG4gICAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBuZXdEcmFnZ2FibGVzSW5kZXgsIGRyYWdnYWJsZSlcblxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgW25ld0RyYWdnYWJsZXNJbmRleF0sIHRpbWUgfHwgMClcbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMSkge1xuICAgICAgdGhpcy5hZGRSZW1vdmVPbk1vdmUoZHJhZ2dhYmxlKVxuICAgIH1cbiAgfVxuXG4gIHB1c2hJbm5lckRyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpPT09LTEpIHtcbiAgICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxuICAgIH1cbiAgfVxuXG4gIGFkZFJlbW92ZU9uTW92ZShkcmFnZ2FibGUpIHtcbiAgICBkcmFnZ2FibGUub25Nb3ZlLmFkZCh0aGlzLnJlbW92ZUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICB0aGlzLnJlbW92ZShkcmFnZ2FibGUpXG4gICAgfSlcblxuICAgIHRoaXMub25BZGQuZmlyZShkcmFnZ2FibGUpXG4gIH1cblxuICByZW1vdmUoZHJhZ2dhYmxlKSB7XG4gICAgZHJhZ2dhYmxlLm9uTW92ZS5yZW1vdmUodGhpcy5yZW1vdmVIYW5kbGVyKVxuXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSlcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5zcGxpY2UoaW5kZXgsIDEpXG5cbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgfSksIFtdKVxuXG4gICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBbXSlcbiAgICB0aGlzLm9uUmVtb3ZlLmZpcmUoZHJhZ2dhYmxlKVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUubW92ZShkcmFnZ2FibGUuaW5pdFBvc2l0aW9uLCAwLCB0cnVlLCB0cnVlKVxuICAgICAgdGhpcy5vblJlbW92ZS5maXJlKGRyYWdnYWJsZSlcbiAgICB9KVxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzID0gW11cbiAgfVxuXG4gIGdldFNvcnRlZERyYWdnYWJsZXMoKSB7XG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuc2xpY2UoKVxuICB9XG59XG5cblRhcmdldC5vbkNyZWF0ZSA9IG5ldyBEcmFnZWUuRXZlbnQoVGFyZ2V0LCB7IGlzUmV2ZXJzZTogdHJ1ZSwgaXNTdG9wT25UcnVlOiB0cnVlIH0pXG5UYXJnZXQub25DcmVhdGUuYWRkKGFkZFRvRGVmYXVsdFNjb3BlKVxuXG5leHBvcnQgeyB0YXJnZXRzLCBUYXJnZXQgfVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmZ1bmN0aW9uIGdldERlZmF1bHRQYXJlbnQoZWxlbWVudCkge1xuICBsZXQgcGFyZW50ID0gZWxlbWVudC5wYXJlbnROb2RlXG4gIHdoaWxlIChwYXJlbnQucGFyZW50Tm9kZSAmJiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShwYXJlbnQpWydwb3NpdGlvbiddID09PSAnc3RhdGljJykge1xuICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlXG4gIH1cbiAgcmV0dXJuIHBhcmVudFxufVxuXG5mdW5jdGlvbiBnZXRUb3VjaEJ5SUQoZWxlbWVudCwgdG91Y2hJZCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnQuY2hhbmdlZFRvdWNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZWxlbWVudC5jaGFuZ2VkVG91Y2hlc1tpXS5pZGVudGlmaWVyID09PSB0b3VjaElkKSB7XG4gICAgICByZXR1cm4gZWxlbWVudC5jaGFuZ2VkVG91Y2hlc1tpXVxuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cblxuZnVuY3Rpb24gZ2V0U3VtVmFsdWVPZlN0eWxlUnVsZShlbGVtZW50LCBydWxlcykge1xuICByZXR1cm4gcnVsZXMucmVkdWNlKGZ1bmN0aW9uKHN1bSwgcnVsZSkge1xuICAgIHJldHVybiBzdW0gKyBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KVtydWxlXXx8MClcbiAgfSwgMClcbn1cblxuZnVuY3Rpb24gcmFuZ2Uoc3RhcnQsIHN0b3AsIHN0ZXApIHtcbiAgY29uc3QgcmVzdWx0ID0gW11cbiAgaWYgKHR5cGVvZiBzdG9wID09PSAndW5kZWZpbmVkJykge1xuICAgIHN0b3AgPSBzdGFydFxuICAgIHN0YXJ0ID0gMFxuICB9XG4gIGlmICh0eXBlb2Ygc3RlcCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBzdGVwID0gMVxuICB9XG4gIGlmICgoc3RlcCA+IDAgJiYgc3RhcnQgPj0gc3RvcCkgfHwgKHN0ZXAgPCAwICYmIHN0YXJ0IDw9IHN0b3ApKSB7XG4gICAgcmV0dXJuIFtdXG4gIH1cbiAgZm9yIChsZXQgaSA9IHN0YXJ0OyBzdGVwID4gMCA/IGkgPCBzdG9wIDogaSA+IHN0b3A7IGkgKz0gc3RlcCkge1xuICAgIHJlc3VsdC5wdXNoKGkpXG4gIH1cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5mdW5jdGlvbiBoYXNDbGFzcyhlbGVtZW50LCBjKSB7XG4gIGNvbnN0IHJlID0gbmV3IFJlZ0V4cCgnKF58XFxcXHMpJyArIGMgKyAnKFxcXFxzfCQpJywgJ2cnKVxuICByZXR1cm4gKHJlLnRlc3QoZWxlbWVudC5jbGFzc05hbWUpKVxufVxuXG5mdW5jdGlvbiBhZGRDbGFzcyhlbGVtZW50LCBjKSB7XG4gIGlmICghaGFzQ2xhc3MoZWxlbWVudCwgYykpIHtcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IChlbGVtZW50LmNsYXNzTmFtZSArICcgJyArIGMpLnJlcGxhY2UoL1xccysvZywgJyAnKS5yZXBsYWNlKC8oXiB8ICQpL2csICcnKVxuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUNsYXNzKGVsZW1lbnQsIGMpIHtcbiAgY29uc3QgcmUgPSBuZXcgUmVnRXhwKCcoXnxcXFxccyknICsgYyArICcoXFxcXHN8JCknLCAnZycpXG4gIGVsZW1lbnQuY2xhc3NOYW1lID0gZWxlbWVudC5jbGFzc05hbWUucmVwbGFjZShyZSwgJyQxJykucmVwbGFjZSgvXFxzKy9nLCAnICcpLnJlcGxhY2UoLyheIHwgJCkvZywgJycpXG59XG5cbmZ1bmN0aW9uIHJlbW92ZUl0ZW0oYXJyYXksIHZhbCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGFycmF5W2ldID09PSB2YWwpIHtcbiAgICAgIGFycmF5LnNwbGljZShpLCAxKVxuICAgICAgaS0tXG4gICAgfVxuICB9XG4gIHJldHVybiBhcnJheVxufVxuXG5jb25zdCB1dGlsID0ge1xuICBnZXREZWZhdWx0UGFyZW50LFxuICBnZXRUb3VjaEJ5SUQsXG4gIGdldFN1bVZhbHVlT2ZTdHlsZVJ1bGUsXG4gIHJhbmdlLFxuICBoYXNDbGFzcyxcbiAgYWRkQ2xhc3MsXG4gIHJlbW92ZUNsYXNzLFxuICByZW1vdmVJdGVtXG59XG5cbmV4cG9ydCB7XG4gIGdldERlZmF1bHRQYXJlbnQsXG4gIGdldFRvdWNoQnlJRCxcbiAgZ2V0U3VtVmFsdWVPZlN0eWxlUnVsZSxcbiAgcmFuZ2UsXG4gIGhhc0NsYXNzLFxuICBhZGRDbGFzcyxcbiAgcmVtb3ZlQ2xhc3MsXG4gIHJlbW92ZUl0ZW1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdXRpbFxuIl0sInNvdXJjZVJvb3QiOiIifQ==