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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/chart.js");
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

/***/ "./src/chart.js":
/*!**********************!*\
  !*** ./src/chart.js ***!
  \**********************/
/*! exports provided: charts, Chart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "charts", function() { return charts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chart", function() { return Chart; });
/* harmony import */ var _utils_createcanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/createcanvas */ "./src/utils/createcanvas.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./src/util.js");
/* harmony import */ var _geometry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./geometry */ "./src/geometry.js");
/* harmony import */ var _draggable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./draggable */ "./src/draggable.js");
/* harmony import */ var _bound__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bound */ "./src/bound.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var isTouch = 'ontouchstart' in window;
var charts = [];

function randomColor() {
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

  return '#' + toHexString(rnd()) + toHexString(rnd()) + toHexString(rnd());
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
function () {
  function Chart(area, elements) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, Chart);

    var areaRectangle = _geometry__WEBPACK_IMPORTED_MODULE_2__["Geometry"].createRectangleFromElement(area, area);
    this.options = Object.assign({
      center: areaRectangle.getCenter(),
      radius: areaRectangle.getMinSide() / 2,
      touchRadius: areaRectangle.getMinSide() / 2,
      boundAngle: Math.PI / 9,
      fillStyles: _util__WEBPACK_IMPORTED_MODULE_1__["default"].range(0, elements.length).map(function () {
        return randomColor();
      }),
      initAngles: _util__WEBPACK_IMPORTED_MODULE_1__["default"].range(-90, 270, 360 / elements.length).map(function (angle) {
        return _geometry__WEBPACK_IMPORTED_MODULE_2__["Geometry"].toRadian(angle);
      }),
      limitImg: null,
      limitImgOffset: new _geometry__WEBPACK_IMPORTED_MODULE_2__["Point"](0, 0),
      isSelectable: false
    }, options);
    charts.push(this);

    this.onDraw = this.options.onDraw || function () {};

    this.area = area;
    this.areaRectangle = areaRectangle;
    this.init(elements);
  }

  _createClass(Chart, [{
    key: "init",
    value: function init(elements) {
      var _this = this;

      this.canvas = Object(_utils_createcanvas__WEBPACK_IMPORTED_MODULE_0__["default"])(this.area, this.areaRectangle);
      this.context = this.canvas.getContext('2d');
      this.draggables = elements.map(function (element, i) {
        var angle = _this.options.initAngles[i];
        var halfSize = _geometry__WEBPACK_IMPORTED_MODULE_2__["Geometry"].getSizeOfElement(element).mult(0.5);
        var position = _geometry__WEBPACK_IMPORTED_MODULE_2__["Geometry"].getPointFromRadialSystem(angle, _this.options.touchRadius, _this.options.center.sub(halfSize));
        var bound = Object(_bound__WEBPACK_IMPORTED_MODULE_4__["boundToArc"])(_this.options.center.sub(halfSize), _this.options.touchRadius, _this.getBoundAngle(i, false), _this.getBoundAngle(i, true));
        return new _draggable__WEBPACK_IMPORTED_MODULE_3__["Draggable"](element, {
          parent: _this.area,
          bound: bound,
          position: position,
          onMove: function onMove() {
            _this.draw();

            return true;
          }
        });
      });
      this.isInit = true;

      if (this.options.isSelectable) {
        this.initSelect();
      }

      this.draw();
    }
  }, {
    key: "initSelect",
    value: function initSelect() {
      var _this2 = this;

      this.setActiveArc(-1);
      this.canvas.addEventListener(_draggable__WEBPACK_IMPORTED_MODULE_3__["events"].start, function (e) {
        var point = new _geometry__WEBPACK_IMPORTED_MODULE_2__["Point"](isTouch ? e.changedTouches[0].pageX : e.clientX, isTouch ? e.changedTouches[0].pageY : e.clientY);

        if (!_this2.canvasOffset) {
          _this2.canvasOffset = _geometry__WEBPACK_IMPORTED_MODULE_2__["Geometry"].getOffset(_this2.canvas);
        }

        point = point.sub(_this2.canvasOffset);

        var index = _this2.getArcOnPoint(point);

        if (index !== -1) {
          _this2.setActiveArc(_this2.activeArcIndex !== index ? index : -1);
        }
      });
    }
  }, {
    key: "updateAngles",
    value: function updateAngles() {
      var _this3 = this;

      this.angles = this.draggables.map(function (draggable) {
        var halfSize = draggable.getSize().mult(0.5);
        return _geometry__WEBPACK_IMPORTED_MODULE_2__["Geometry"].getAngle(_this3.options.center.sub(halfSize), draggable.position);
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

        return _geometry__WEBPACK_IMPORTED_MODULE_2__["Geometry"].normalizeAngle(_this4.angles[i] - sign * _this4.options.boundAngle);
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
        var enableIndexes;

        if (_this5.options.isSelectable) {
          enableIndexes = getArrayWithBoundIndexes(_this5.activeArcIndex, _this5.draggables.length);

          if (enableIndexes.indexOf(index) !== -1) {
            _this5.drawLimitImg(index);
          }
        } else {
          _this5.drawLimitImg(index);
        }
      });
      this.onDraw();
    }
  }, {
    key: "createClone",
    value: function createClone(element) {
      var _this6 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (!this.isInit) {
        return;
      }

      var rectangle = _geometry__WEBPACK_IMPORTED_MODULE_2__["Geometry"].createRectangleFromElement(element, element);
      var opts = Object.assign({
        center: rectangle.getCenter(),
        radius: rectangle.getMinSide() / 2,
        fillStyles: this.options.fillStyles
      }, options);
      var canvas = Object(_utils_createcanvas__WEBPACK_IMPORTED_MODULE_0__["default"])(element, rectangle);
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
        var angle = _geometry__WEBPACK_IMPORTED_MODULE_2__["Geometry"].normalizeAngle(this.angles[index]);
        point = new _geometry__WEBPACK_IMPORTED_MODULE_2__["Point"](0, -img.height / 2);
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
        var diffAngle = _geometry__WEBPACK_IMPORTED_MODULE_2__["Geometry"].normalizeAngle(angle - baseAngle);
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
        return _geometry__WEBPACK_IMPORTED_MODULE_2__["Geometry"].normalizeAngle(_this7.angles[i] + diffAngle / 2);
      });
    }
  }, {
    key: "getArcOnPoint",
    value: function getArcOnPoint(point) {
      var angle = _geometry__WEBPACK_IMPORTED_MODULE_2__["Geometry"].getAngle(this.options.center, point);
      var radius = _geometry__WEBPACK_IMPORTED_MODULE_2__["Geometry"].getDistance(this.options.center, point);

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
        var position = _geometry__WEBPACK_IMPORTED_MODULE_2__["Geometry"].getPointFromRadialSystem(angle, _this8.options.touchRadius, _this8.options.center.sub(halfSize));
        draggable.move(position, 0, true, true);
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
}();



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

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9EcmFnZWUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0RyYWdlZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9EcmFnZWUvLi9ub2RlX21vZHVsZXMvZGVzYW5kcm8tZ2V0LXN0eWxlLXByb3BlcnR5L2dldC1zdHlsZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvYm91bmQuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL2NoYXJ0LmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy9kcmFnZ2FibGUuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL2V2ZW50LmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy9nZW9tZXRyeS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvcG9zaXRpb25pbmcuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL3Njb3BlLmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy90YXJnZXQuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL3V0aWwuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL3V0aWxzL2NyZWF0ZWNhbnZhcy5qcyJdLCJuYW1lcyI6WyJib3VuZFRvUmVjdGFuZ2xlIiwicmVjdGFuZ2xlIiwicG9pbnQiLCJzaXplIiwiY2FsY1BvaW50IiwiY2xvbmUiLCJyZWN0UDIiLCJnZXRQMyIsInBvc2l0aW9uIiwieCIsInkiLCJib3VuZFRvRWxlbWVudCIsImVsZW1lbnQiLCJwYXJlbnQiLCJyZXRGdW5jIiwiYm91bmQiLCJhcHBseSIsImFyZ3VtZW50cyIsInJlZnJlc2giLCJHZW9tZXRyeSIsImNyZWF0ZVJlY3RhbmdsZUZyb21FbGVtZW50IiwiYm91bmRUb0xpbmVYIiwic3RhcnRZIiwiZW5kWSIsImJvdW5kVG9MaW5lWSIsInN0YXJ0WCIsImVuZFgiLCJib3VuZFRvTGluZSIsInN0YXJ0IiwiZW5kIiwiYWxwaGEiLCJNYXRoIiwiYXRhbjIiLCJiZXRhIiwiUEkiLCJzb21lSyIsImNvc0JldGEiLCJjb3MiLCJzaW5CZXRhIiwic2luIiwicG9pbnQyIiwiUG9pbnQiLCJuZXdFbmQiLCJnZXRQb2ludEluTGluZUJ5TGVuZ2h0IiwicG9pbnRDcm9zc2luZyIsImRpcmVjdENyb3NzaW5nIiwiYm91bmRUb0NpcmNsZSIsImNlbnRlciIsInJhZGl1cyIsIl9zaXplIiwiYm91bmRlZFBvaW50IiwiYm91bmRUb0FyYyIsInN0YXJ0QWdsZSIsImVuZEFuZ2xlIiwiYm91bmRTdGFydEFuZ2xlIiwiYm91bmRFbmR0QW5nbGUiLCJhbmdsZSIsImdldEFuZ2xlIiwibm9ybWFsaXplQW5nbGUiLCJib3VuZEFuZ2xlIiwiZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtIiwiaXNUb3VjaCIsIndpbmRvdyIsImNoYXJ0cyIsInJhbmRvbUNvbG9yIiwicm5kIiwicm91bmQiLCJyYW5kb20iLCJ0b0hleFN0cmluZyIsImRpZ2l0Iiwic3RyIiwidG9TdHJpbmciLCJsZW5ndGgiLCJnZXRBcnJheVdpdGhCb3VuZEluZGV4ZXMiLCJpbmRleCIsInJldEluZGV4ZXMiLCJwdXNoIiwiQ2hhcnQiLCJhcmVhIiwiZWxlbWVudHMiLCJvcHRpb25zIiwiYXJlYVJlY3RhbmdsZSIsIk9iamVjdCIsImFzc2lnbiIsImdldENlbnRlciIsImdldE1pblNpZGUiLCJ0b3VjaFJhZGl1cyIsImZpbGxTdHlsZXMiLCJ1dGlsIiwicmFuZ2UiLCJtYXAiLCJpbml0QW5nbGVzIiwidG9SYWRpYW4iLCJsaW1pdEltZyIsImxpbWl0SW1nT2Zmc2V0IiwiaXNTZWxlY3RhYmxlIiwib25EcmF3IiwiaW5pdCIsImNhbnZhcyIsImNyZWF0ZUNhbnZhcyIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiZHJhZ2dhYmxlcyIsImkiLCJoYWxmU2l6ZSIsImdldFNpemVPZkVsZW1lbnQiLCJtdWx0Iiwic3ViIiwiZ2V0Qm91bmRBbmdsZSIsIkRyYWdnYWJsZSIsIm9uTW92ZSIsImRyYXciLCJpc0luaXQiLCJpbml0U2VsZWN0Iiwic2V0QWN0aXZlQXJjIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50cyIsImUiLCJjaGFuZ2VkVG91Y2hlcyIsInBhZ2VYIiwiY2xpZW50WCIsInBhZ2VZIiwiY2xpZW50WSIsImNhbnZhc09mZnNldCIsImdldE9mZnNldCIsImdldEFyY09uUG9pbnQiLCJhY3RpdmVBcmNJbmRleCIsImFuZ2xlcyIsImRyYWdnYWJsZSIsImdldFNpemUiLCJpc0Nsb3NzaW5nIiwic2lnbiIsInVwZGF0ZUFuZ2xlcyIsImNsZWFyUmVjdCIsImZvckVhY2giLCJfZHJhZ2dhYmxlIiwiZHJhd0FyYyIsImVuYWJsZUluZGV4ZXMiLCJpbmRleE9mIiwiZHJhd0xpbWl0SW1nIiwib3B0cyIsImNsb25lT2JqIiwiY2FsbCIsInN0YXJ0QW5nbGUiLCJjb2xvciIsImdldEZpbGxTdHlsZSIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImFyYyIsImxpbmVUbyIsImNsb3NlUGF0aCIsImZpbGxTdHlsZSIsImZpbGwiLCJpbWciLCJBcnJheSIsImhlaWdodCIsImFkZCIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsImRyYXdJbWFnZSIsInNldFRyYW5zZm9ybSIsInNsaWNlIiwiYmFzZUFuZ2xlIiwiZGlmZkFuZ2xlIiwiZ2V0QW5nbGVzRGlmZiIsImdldERpc3RhbmNlIiwib2Zmc2V0IiwiaiIsIm1vdmUiLCJlbmFibGUiLCJEcmFnZWUiLCJFdmVudCIsIm1vdXNlRXZlbnRzIiwidG91Y2hFdmVudHMiLCJ0cmFuc2Zvcm1Qcm9wZXJ0eSIsImdldFN0eWxlUHJvcGVydHkiLCJ0cmFuc2l0aW9uUHJvcGVydHkiLCJwcmV2ZW50RG91YmxlSW5pdCIsIm1lc3NhZ2UiLCJzb21lIiwiZXhpc3RpbmciLCJhZGRUb0RlZmF1bHRTY29wZSIsImRlZmF1bHRTY29wZSIsImFkZERyYWdnYWJsZSIsImdldERlZmF1bHRQYXJlbnQiLCJ0YXJnZXRzIiwic3RhcnRGaWx0ZXIiLCJpc0NvbnRlbnRCb3hTaXplIiwib25FbmQiLCJpc1JldmVyc2UiLCJpc1N0b3BPblRydWUiLCJvblN0YXJ0Iiwib25DcmVhdGUiLCJmaXJlIiwiX2VuYWJsZSIsImZpeFBvc2l0aW9uIiwiaW5pdFBvc2l0aW9uIiwiX2RyYWdTdGFydCIsImRyYWdTdGFydCIsImJpbmQiLCJfZHJhZ01vdmUiLCJkcmFnTW92ZSIsIl9kcmFnRW5kIiwiZHJhZ0VuZCIsIl9yZWNhbHVsYXRlIiwiX3RyYW5zZm9ybVBvc2l0aW9uIiwidHJhbnNmb3JtIiwic3R5bGUiLCJ0cmFuc2xhdGVDc3MiLCJ1YSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsIm1zaWUiLCJ0ZXN0IiwicmVwbGFjZSIsInRpbWUiLCJpc0ZpeCIsImlzU2lsZW50IiwiZGV0ZXJtaW5lRGlyZWN0aW9uIiwiX3NldFRyYW5zbGF0ZSIsInNldFBvc2l0aW9uIiwiZ2V0UG9zaXRpb24iLCJsZWZ0RGlyZWN0aW9uIiwicmlnaHREaXJlY3Rpb24iLCJ1cERpcmVjdGlvbiIsImRvd25EaXJlY3Rpb24iLCJldmVudCIsImN1cnJlbnRFdmVudCIsImlzVG91Y2hFdmVudCIsIlRvdWNoRXZlbnQiLCJfc3RhcnRUb3VjaFBvaW50IiwiX3N0YXJ0UG9zaXRpb24iLCJfdG91Y2hJZCIsImlkZW50aWZpZXIiLCJzdG9wUHJvcGFnYXRpb24iLCJ0YXJnZXQiLCJIVE1MSW5wdXRFbGVtZW50IiwicHJldmVudERlZmF1bHQiLCJmb2N1cyIsImRvY3VtZW50IiwiaXNEcmFnZ2luZyIsImFkZENsYXNzIiwidG91Y2giLCJnZXRUb3VjaEJ5SUQiLCJ0b3VjaFBvaW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbW92ZUNsYXNzIiwiUmVjdGFuZ2xlIiwicmVzZXQiLCJmdW5jcyIsInByb3RvdHlwZSIsImFyZ3MiLCJmcyIsInJldmVyc2UiLCJyZXRWYWx1ZSIsImYiLCJ1bnNoaWZ0IiwicmVtb3ZlIiwic3BsaWNlIiwiX2YiLCJwIiwiayIsIm5lZ2F0aXZlIiwiY29tcGFyZSIsImdldFAxIiwiZ2V0UDIiLCJnZXRQNCIsIm9yIiwicmVjdCIsIm1pbiIsIm1heCIsImFuZCIsImluY2x1ZGVQb2ludCIsImluY2x1ZGVSZWN0YW5nbGUiLCJtb3ZlVG9Cb3VuZCIsImF4aXMiLCJzZWxBeGlzIiwiY3Jvc3NSZWN0YW5nbGUiLCJ0aGlzQ2VudGVyIiwicmVjdENlbnRlciIsImdldFNxdWFyZSIsInN0eWxlQXBwbHkiLCJlbCIsInF1ZXJ5U2VsZWN0b3IiLCJsZWZ0IiwidG9wIiwid2lkdGgiLCJncm93dGgiLCJwMSIsInAyIiwiZHgiLCJkeSIsInNxcnQiLCJkaXN0YW5jZSIsImdldFhEaWZmZXJlbmNlIiwiYWJzIiwiZ2V0WURpZmZlcmVuY2UiLCJ0cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5IiwicG93IiwiaW5kZXhPZk5lYXJQb2ludCIsImFyciIsInZhbCIsInRlbXAiLCJib3VuZFBvaW50IiwiTDFQMSIsIkwxUDIiLCJMMlAxIiwiTDJQMiIsImsxIiwiazIiLCJiMSIsImIyIiwiYm91bmRUb1NlZ21lbnQiLCJMUDEiLCJMUDIiLCJQIiwiQSIsIkIiLCJBUCIsIkFCIiwiYWIyIiwiYXBfYWIiLCJ0IiwiZ2V0UG9pbnRJbkxpbmUiLCJwZXJjZW50IiwibGVuZ2h0IiwiaXNDb25zaWRlclRyYW5zbGF0ZSIsInBhcmVudE5vZGUiLCJwYXJzZUludCIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRTdW1WYWx1ZU9mU3R5bGVSdWxlIiwiZWxSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicGFyZW50UmVjdCIsImFkZFBvaW50VG9Cb3VuZFBvaW50cyIsImJvdW5kcG9pbnRzIiwiaXNSaWdodCIsInJlc3VsdCIsImZpbHRlciIsImJQb2ludCIsImRpZmYiLCJ0b0RlZ3JlZSIsImRtaW4iLCJkbWF4IiwiZ2V0QW5nbGVEaWZmIiwiZ2V0TmVhcmVzdEFuZ2xlIiwidmFsdWUiLCJtaW5BbmdsZSIsIm1heEFuZ2xlIiwicG9zaXRpb25UeXBlIiwibm90Q3Jvc3NpbmciLCJmbG9hdExlZnQiLCJmbG9hdFJpZ2h0IiwicG9zaXRpb25GYWN0b3J5IiwidHlwZSIsIl9vcHRpb25zIiwicmVjdGFuZ2xlTGlzdCIsImluZGV4ZXNPZk5ld3MiLCJib3VuZFJlY3QiLCJzdGF0aWNSZWN0YW5nbGVJbmRleGVzIiwicmVkdWNlIiwiaW5kZXhlcyIsIl9yZWN0IiwicmVtb3ZhYmxlIiwiaW5kZXhPZlN0YXRpYyIsInN0YXRpY1JlY3QiLCJwYWRkaW5nVG9wTGVmdCIsInBhZGRpbmdCb3R0b21SaWdodCIsInlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyIsIl9pbmRleGVzT2ZOZXdzIiwiYm91bmRhcnlQb2ludHMiLCJpc1ZhbGlkIiwiYXNzaW5nIiwicGFkZGluZ1RvcFJpZ2h0IiwicGFkZGluZ0JvdHRvbUxlZnQiLCJwYWRkaW5nVG9wTmVnUmlnaHQiLCJwYWRkaW5nQm90dG9tTmVnTGVmdCIsImdldFJpZ2h0VG9wUG9pbnQiLCJfaW5kZXgiLCJnZXRMZWZ0Qm90dG9tUG9pbnQiLCJzb3J0aW5nRmFjdG9yeSIsIm9sZE9ianNMaXN0IiwibmV3T2JqcyIsImluZGV4T2ZOZXdzIiwib2Jqc0xpc3QiLCJjb25jYXQiLCJvYmoiLCJuZXdMaXN0IiwibGlzdE9sZFBvc2l0aW9uIiwibmV3T2JqIiwic2NvcGVzIiwiU2NvcGUiLCJzY29wZSIsInJlbW92ZUl0ZW0iLCJ0aW1lRW5kIiwib25DaGFuZ2UiLCJzaG90VGFyZ2V0cyIsImNhdGNoRHJhZ2dhYmxlIiwic29ydCIsImEiLCJiIiwiZ2V0UmVjdGFuZ2xlIiwiaW5uZXJEcmFnZ2FibGVzIiwicG9zaXRpb25zIiwidGFyZ2V0SW5kZXhlcyIsImZuIiwiY3VycmVudFNjb3BlIiwiYWRkRHJhZ2dhYmxlVG9TY29wZSIsImFkZFRhcmdldFRvU2NvcGUiLCJhZGRUYXJnZXQiLCJUYXJnZXQiLCJzY29wZUZhY3RvcnkiLCJwYXJlbnRFbGVtZW50IiwiZHJhZ2dhYmxlRWxlbWVudHMiLCJ0YXJnZXRFbGVtZW50cyIsImRyYWdnYWJsZU9wdGlvbnMiLCJ0YXJnZXRPcHRpb25zIiwic2NvcGVPcHRpb25zIiwidGltZUV4Y2FuZ2UiLCJzb3J0aW5nIiwicG9zaXRpb25pbmciLCJvbkFkZCIsImJlZm9yZUFkZCIsIm9uUmVtb3ZlIiwicmVjdGFuZ2xlcyIsImluZGV4ZXNPZk5ldyIsInRhcmdldFJlY3RhbmdsZSIsImRyYWdnYWJsZVNxdWFyZSIsIm5ld0RyYWdnYWJsZXNJbmRleCIsImFkZFJlbW92ZU9uTW92ZSIsInB1c2hJbm5lckRyYWdnYWJsZSIsInJlbW92ZUhhbmRsZXIiLCJ0b3VjaElkIiwicnVsZXMiLCJzdW0iLCJydWxlIiwic3RvcCIsInN0ZXAiLCJoYXNDbGFzcyIsImMiLCJyZSIsIlJlZ0V4cCIsImNsYXNzTmFtZSIsImFycmF5Iiwic2V0U3R5bGUiLCJjc3NUZXh0Iiwia2V5IiwiaGFzT3duUHJvcGVydHkiLCJhcHBlbmRGaXJzdENoaWxkIiwibm9kZSIsImZpcnN0Q2hpbGQiLCJpbnNlcnRCZWZvcmUiLCJhcHBlbmRDaGlsZCIsInJlY3RhZ2xlIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNB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USxDQUFDN2IsUUFBVCxDQUFrQkUsQ0FBbEIsR0FBc0IsSUFIWjtBQUlmb1IsU0FBSyxFQUFFdUssUUFBUSxDQUFDbGMsSUFBVCxDQUFjTSxDQUFkLEdBQWtCLElBSlY7QUFLZmtKLFVBQU0sRUFBRTBTLFFBQVEsQ0FBQ2xjLElBQVQsQ0FBY08sQ0FBZCxHQUFrQjtBQUxYLEdBQVQsQ0FBUjtBQU9Bc2Isa0JBQWdCLENBQUNsWCxJQUFELEVBQU9vQixNQUFQLENBQWhCO0FBQ0EsU0FBT0EsTUFBUDtBQUNELEMiLCJmaWxlIjoiY2hhcnQuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJEcmFnZWVcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiRHJhZ2VlXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkRyYWdlZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvY2hhcnQuanNcIik7XG4iLCIvKiFcbiAqIGdldFN0eWxlUHJvcGVydHkgdjEuMC40XG4gKiBvcmlnaW5hbCBieSBrYW5nYXhcbiAqIGh0dHA6Ly9wZXJmZWN0aW9ua2lsbHMuY29tL2ZlYXR1cmUtdGVzdGluZy1jc3MtcHJvcGVydGllcy9cbiAqIE1JVCBsaWNlbnNlXG4gKi9cblxuLypqc2hpbnQgYnJvd3NlcjogdHJ1ZSwgc3RyaWN0OiB0cnVlLCB1bmRlZjogdHJ1ZSAqL1xuLypnbG9iYWwgZGVmaW5lOiBmYWxzZSwgZXhwb3J0czogZmFsc2UsIG1vZHVsZTogZmFsc2UgKi9cblxuKCBmdW5jdGlvbiggd2luZG93ICkge1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBwcmVmaXhlcyA9ICdXZWJraXQgTW96IG1zIE1zIE8nLnNwbGl0KCcgJyk7XG52YXIgZG9jRWxlbVN0eWxlID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlO1xuXG5mdW5jdGlvbiBnZXRTdHlsZVByb3BlcnR5KCBwcm9wTmFtZSApIHtcbiAgaWYgKCAhcHJvcE5hbWUgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gdGVzdCBzdGFuZGFyZCBwcm9wZXJ0eSBmaXJzdFxuICBpZiAoIHR5cGVvZiBkb2NFbGVtU3R5bGVbIHByb3BOYW1lIF0gPT09ICdzdHJpbmcnICkge1xuICAgIHJldHVybiBwcm9wTmFtZTtcbiAgfVxuXG4gIC8vIGNhcGl0YWxpemVcbiAgcHJvcE5hbWUgPSBwcm9wTmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHByb3BOYW1lLnNsaWNlKDEpO1xuXG4gIC8vIHRlc3QgdmVuZG9yIHNwZWNpZmljIHByb3BlcnRpZXNcbiAgdmFyIHByZWZpeGVkO1xuICBmb3IgKCB2YXIgaT0wLCBsZW4gPSBwcmVmaXhlcy5sZW5ndGg7IGkgPCBsZW47IGkrKyApIHtcbiAgICBwcmVmaXhlZCA9IHByZWZpeGVzW2ldICsgcHJvcE5hbWU7XG4gICAgaWYgKCB0eXBlb2YgZG9jRWxlbVN0eWxlWyBwcmVmaXhlZCBdID09PSAnc3RyaW5nJyApIHtcbiAgICAgIHJldHVybiBwcmVmaXhlZDtcbiAgICB9XG4gIH1cbn1cblxuLy8gdHJhbnNwb3J0XG5pZiAoIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcbiAgLy8gQU1EXG4gIGRlZmluZSggZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGdldFN0eWxlUHJvcGVydHk7XG4gIH0pO1xufSBlbHNlIGlmICggdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICkge1xuICAvLyBDb21tb25KUyBmb3IgQ29tcG9uZW50XG4gIG1vZHVsZS5leHBvcnRzID0gZ2V0U3R5bGVQcm9wZXJ0eTtcbn0gZWxzZSB7XG4gIC8vIGJyb3dzZXIgZ2xvYmFsXG4gIHdpbmRvdy5nZXRTdHlsZVByb3BlcnR5ID0gZ2V0U3R5bGVQcm9wZXJ0eTtcbn1cblxufSkoIHdpbmRvdyApO1xuIiwiaW1wb3J0IHsgR2VvbWV0cnksIFBvaW50IH0gZnJvbSAnLi9nZW9tZXRyeSdcblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kVG9SZWN0YW5nbGUocmVjdGFuZ2xlKSB7XG4gIHJldHVybiBmdW5jdGlvbihwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IGNhbGNQb2ludCA9IHBvaW50LmNsb25lKCksXG4gICAgICByZWN0UDIgPSByZWN0YW5nbGUuZ2V0UDMoKVxuXG4gICAgaWYgKHJlY3RhbmdsZS5wb3NpdGlvbi54ID4gY2FsY1BvaW50LngpIHtcbiAgICAgIChjYWxjUG9pbnQueCA9IHJlY3RhbmdsZS5wb3NpdGlvbi54KVxuICAgIH1cbiAgICBpZiAocmVjdGFuZ2xlLnBvc2l0aW9uLnkgPiBjYWxjUG9pbnQueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSByZWN0YW5nbGUucG9zaXRpb24ueVxuICAgIH1cbiAgICBpZiAocmVjdFAyLnggPCBjYWxjUG9pbnQueCArIHNpemUueCkge1xuICAgICAgY2FsY1BvaW50LnggPSByZWN0UDIueCAtIHNpemUueFxuICAgIH1cbiAgICBpZiAocmVjdFAyLnkgPCBjYWxjUG9pbnQueSArIHNpemUueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSByZWN0UDIueSAtIHNpemUueVxuICAgIH1cblxuICAgIHJldHVybiBjYWxjUG9pbnRcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRUb0VsZW1lbnQoZWxlbWVudCwgcGFyZW50KSB7XG4gIGNvbnN0IHJldEZ1bmMgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gYm91bmQuYXBwbHkodGhpcywgYXJndW1lbnRzKVxuICB9XG4gIGxldCBib3VuZFxuXG4gIHJldEZ1bmMucmVmcmVzaCA9IGZ1bmN0aW9uKCkge1xuICAgIGJvdW5kID0gYm91bmRUb1JlY3RhbmdsZShHZW9tZXRyeS5jcmVhdGVSZWN0YW5nbGVGcm9tRWxlbWVudChlbGVtZW50LCBwYXJlbnQpKVxuICB9XG5cbiAgcmV0RnVuYy5yZWZyZXNoKClcbiAgcmV0dXJuIHJldEZ1bmNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kVG9MaW5lWCh4LCBzdGFydFksIGVuZFkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgY2FsY1BvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIGNhbGNQb2ludC54ID0geFxuICAgIGlmIChzdGFydFkgPiBjYWxjUG9pbnQueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSBzdGFydFlcbiAgICB9XG4gICAgaWYgKGVuZFkgPCBjYWxjUG9pbnQueSArIHNpemUueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSBlbmRZIC0gc2l6ZS55XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhbGNQb2ludFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZFRvTGluZVkoeSwgc3RhcnRYLCBlbmRYKSB7XG4gIHJldHVybiBmdW5jdGlvbihwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IGNhbGNQb2ludCA9IHBvaW50LmNsb25lKClcbiAgICBjYWxjUG9pbnQueSA9IHlcbiAgICBpZiAoc3RhcnRYID4gY2FsY1BvaW50LngpIHtcbiAgICAgIGNhbGNQb2ludC54ID0gc3RhcnRYXG4gICAgfVxuICAgIGlmIChlbmRYIDwgY2FsY1BvaW50LnggKyBzaXplLngpIHtcbiAgICAgIGNhbGNQb2ludC54ID0gZW5kWCAtIHNpemUueFxuICAgIH1cbiAgICByZXR1cm4gY2FsY1BvaW50XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kVG9MaW5lKHN0YXJ0LCBlbmQpIHtcbiAgY29uc3QgYWxwaGEgPSBNYXRoLmF0YW4yKGVuZC55IC0gc3RhcnQueSwgZW5kLnggLSBzdGFydC54KSxcbiAgICBiZXRhID0gYWxwaGEgKyBNYXRoLlBJIC8gMixcbiAgICBzb21lSyA9IDEwLFxuICAgIGNvc0JldGEgPSBNYXRoLmNvcyhiZXRhKSxcbiAgICBzaW5CZXRhID0gTWF0aC5zaW4oYmV0YSlcblxuICByZXR1cm4gZnVuY3Rpb24ocG9pbnQsIHNpemUpIHtcbiAgICBjb25zdCBwb2ludDIgPSBuZXcgUG9pbnQocG9pbnQueCArIHNvbWVLICogY29zQmV0YSwgcG9pbnQueSArIHNvbWVLICogc2luQmV0YSksXG4gICAgICBuZXdFbmQgPSBHZW9tZXRyeS5nZXRQb2ludEluTGluZUJ5TGVuZ2h0KGVuZCwgc3RhcnQsIHNpemUueClcbiAgICBsZXQgcG9pbnRDcm9zc2luZyA9IEdlb21ldHJ5LmRpcmVjdENyb3NzaW5nKHN0YXJ0LCBlbmQsIHBvaW50LCBwb2ludDIpXG5cbiAgICBwb2ludENyb3NzaW5nID0gR2VvbWV0cnkuYm91bmRUb0xpbmUoc3RhcnQsIG5ld0VuZCwgcG9pbnRDcm9zc2luZylcbiAgICByZXR1cm4gcG9pbnRDcm9zc2luZ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZFRvQ2lyY2xlKGNlbnRlciwgcmFkaXVzKSB7XG4gIHJldHVybiBmdW5jdGlvbihwb2ludCwgX3NpemUpIHtcbiAgICBjb25zdCBib3VuZGVkUG9pbnQgPSBHZW9tZXRyeS5nZXRQb2ludEluTGluZUJ5TGVuZ2h0KGNlbnRlciwgcG9pbnQsIHJhZGl1cylcbiAgICByZXR1cm4gYm91bmRlZFBvaW50XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kVG9BcmMoY2VudGVyLCByYWRpdXMsIHN0YXJ0QWdsZSwgZW5kQW5nbGUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHBvaW50LCBfc2l6ZSkge1xuICAgIGNvbnN0IGJvdW5kU3RhcnRBbmdsZSA9IHR5cGVvZiBzdGFydEFnbGUgPT09ICdmdW5jdGlvbicgPyBzdGFydEFnbGUoKSA6IHN0YXJ0QWdsZVxuICAgIGNvbnN0IGJvdW5kRW5kdEFuZ2xlID0gdHlwZW9mIHN0YXJ0QWdsZSA9PT0gJ2Z1bmN0aW9uJyA/IGVuZEFuZ2xlKCkgOiBlbmRBbmdsZVxuXG4gICAgbGV0IGFuZ2xlID0gR2VvbWV0cnkuZ2V0QW5nbGUoY2VudGVyLCBwb2ludClcbiAgICBhbmdsZSA9IEdlb21ldHJ5Lm5vcm1hbGl6ZUFuZ2xlKGFuZ2xlKVxuICAgIGFuZ2xlID0gR2VvbWV0cnkuYm91bmRBbmdsZShib3VuZFN0YXJ0QW5nbGUsIGJvdW5kRW5kdEFuZ2xlLCBhbmdsZSlcbiAgICByZXR1cm4gR2VvbWV0cnkuZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKGFuZ2xlLCByYWRpdXMsIGNlbnRlcilcbiAgfVxufVxuIiwiaW1wb3J0IGNyZWF0ZUNhbnZhcyBmcm9tICcuL3V0aWxzL2NyZWF0ZWNhbnZhcydcbmltcG9ydCB1dGlsIGZyb20gJy4vdXRpbCdcbmltcG9ydCB7IEdlb21ldHJ5LCBQb2ludCB9IGZyb20gJy4vZ2VvbWV0cnknXG5pbXBvcnQgeyBEcmFnZ2FibGUsIGV2ZW50cyB9IGZyb20gJy4vZHJhZ2dhYmxlJ1xuaW1wb3J0IHsgYm91bmRUb0FyYyB9IGZyb20gJy4vYm91bmQnXG5cbmNvbnN0IGlzVG91Y2ggPSAnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3dcbmNvbnN0IGNoYXJ0cyA9IFtdXG5cbmZ1bmN0aW9uIHJhbmRvbUNvbG9yKCkge1xuICBjb25zdCBybmQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKjI1NSlcbiAgfVxuICBjb25zdCB0b0hleFN0cmluZyA9IGZ1bmN0aW9uKGRpZ2l0KSB7XG4gICAgbGV0IHN0ciA9IGRpZ2l0LnRvU3RyaW5nKDE2KVxuICAgIHdoaWxlIChzdHIubGVuZ3RoIDwgMikge1xuICAgICAgc3RyID0gJzAnICsgc3RyXG4gICAgfVxuICAgIHJldHVybiBzdHJcbiAgfVxuXG4gIHJldHVybiAnIycgKyB0b0hleFN0cmluZyhybmQoKSkgKyB0b0hleFN0cmluZyhybmQoKSkgKyB0b0hleFN0cmluZyhybmQoKSlcbn1cblxuZnVuY3Rpb24gZ2V0QXJyYXlXaXRoQm91bmRJbmRleGVzKGluZGV4LCBsZW5ndGgpIHtcbiAgY29uc3QgcmV0SW5kZXhlcyA9IFtdXG4gIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICByZXRJbmRleGVzLnB1c2goaW5kZXgpXG4gICAgcmV0SW5kZXhlcy5wdXNoKChpbmRleCArIDEpICUgbGVuZ3RoKVxuICB9XG5cbiAgcmV0dXJuIHJldEluZGV4ZXNcbn1cblxuY2xhc3MgQ2hhcnQge1xuICBjb25zdHJ1Y3RvciAoYXJlYSwgZWxlbWVudHMsIG9wdGlvbnM9e30pIHtcbiAgICBjb25zdCBhcmVhUmVjdGFuZ2xlID0gR2VvbWV0cnkuY3JlYXRlUmVjdGFuZ2xlRnJvbUVsZW1lbnQoYXJlYSwgYXJlYSlcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNlbnRlcjogYXJlYVJlY3RhbmdsZS5nZXRDZW50ZXIoKSxcbiAgICAgIHJhZGl1czogYXJlYVJlY3RhbmdsZS5nZXRNaW5TaWRlKCkgLyAyLFxuICAgICAgdG91Y2hSYWRpdXM6IGFyZWFSZWN0YW5nbGUuZ2V0TWluU2lkZSgpIC8gMixcbiAgICAgIGJvdW5kQW5nbGU6IE1hdGguUEkgLyA5LFxuICAgICAgZmlsbFN0eWxlczogdXRpbC5yYW5nZSgwLCBlbGVtZW50cy5sZW5ndGgpLm1hcCgoKSA9PiByYW5kb21Db2xvcigpKSxcbiAgICAgIGluaXRBbmdsZXM6IHV0aWwucmFuZ2UoLTkwLCAyNzAsIDM2MCAvIGVsZW1lbnRzLmxlbmd0aCkubWFwKChhbmdsZSkgPT4ge1xuICAgICAgICByZXR1cm4gR2VvbWV0cnkudG9SYWRpYW4oYW5nbGUpXG4gICAgICB9KSxcbiAgICAgIGxpbWl0SW1nOiBudWxsLFxuICAgICAgbGltaXRJbWdPZmZzZXQ6IG5ldyBQb2ludCgwLCAwKSxcbiAgICAgIGlzU2VsZWN0YWJsZTogZmFsc2VcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgY2hhcnRzLnB1c2godGhpcylcbiAgICB0aGlzLm9uRHJhdyA9IHRoaXMub3B0aW9ucy5vbkRyYXcgfHwgZnVuY3Rpb24oKSB7fVxuICAgIHRoaXMuYXJlYSA9IGFyZWFcbiAgICB0aGlzLmFyZWFSZWN0YW5nbGUgPSBhcmVhUmVjdGFuZ2xlXG4gICAgdGhpcy5pbml0KGVsZW1lbnRzKVxuICB9XG5cbiAgaW5pdChlbGVtZW50cykge1xuICAgIHRoaXMuY2FudmFzID0gY3JlYXRlQ2FudmFzKHRoaXMuYXJlYSwgdGhpcy5hcmVhUmVjdGFuZ2xlKVxuICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJylcbiAgICB0aGlzLmRyYWdnYWJsZXMgPSBlbGVtZW50cy5tYXAoKGVsZW1lbnQsIGkpID0+IHtcbiAgICAgIGNvbnN0IGFuZ2xlID0gdGhpcy5vcHRpb25zLmluaXRBbmdsZXNbaV1cbiAgICAgIGNvbnN0IGhhbGZTaXplID0gR2VvbWV0cnkuZ2V0U2l6ZU9mRWxlbWVudChlbGVtZW50KS5tdWx0KDAuNSlcbiAgICAgIGNvbnN0IHBvc2l0aW9uID0gR2VvbWV0cnkuZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKFxuICAgICAgICBhbmdsZSxcbiAgICAgICAgdGhpcy5vcHRpb25zLnRvdWNoUmFkaXVzLFxuICAgICAgICB0aGlzLm9wdGlvbnMuY2VudGVyLnN1YihoYWxmU2l6ZSlcbiAgICAgIClcbiAgICAgIGNvbnN0IGJvdW5kID0gYm91bmRUb0FyYyhcbiAgICAgICAgdGhpcy5vcHRpb25zLmNlbnRlci5zdWIoaGFsZlNpemUpLFxuICAgICAgICB0aGlzLm9wdGlvbnMudG91Y2hSYWRpdXMsXG4gICAgICAgIHRoaXMuZ2V0Qm91bmRBbmdsZShpLCBmYWxzZSksXG4gICAgICAgIHRoaXMuZ2V0Qm91bmRBbmdsZShpLCB0cnVlKVxuICAgICAgKVxuXG4gICAgICByZXR1cm4gbmV3IERyYWdnYWJsZShlbGVtZW50LCB7XG4gICAgICAgIHBhcmVudDogdGhpcy5hcmVhLFxuICAgICAgICBib3VuZDogYm91bmQsXG4gICAgICAgIHBvc2l0aW9uOiBwb3NpdGlvbixcbiAgICAgICAgb25Nb3ZlOiAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5kcmF3KClcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG5cbiAgICB0aGlzLmlzSW5pdCA9IHRydWVcbiAgICBpZiAodGhpcy5vcHRpb25zLmlzU2VsZWN0YWJsZSkge1xuICAgICAgdGhpcy5pbml0U2VsZWN0KClcbiAgICB9XG4gICAgdGhpcy5kcmF3KClcbiAgfVxuXG4gIGluaXRTZWxlY3QoKSB7XG4gICAgdGhpcy5zZXRBY3RpdmVBcmMoLTEpXG5cbiAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50cy5zdGFydCwgKGUpID0+IHtcbiAgICAgIGxldCBwb2ludCA9IG5ldyBQb2ludChcbiAgICAgICAgaXNUb3VjaCA/IGUuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVggOiBlLmNsaWVudFgsXG4gICAgICAgIGlzVG91Y2ggPyBlLmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZIDogZS5jbGllbnRZXG4gICAgICApXG5cbiAgICAgIGlmICghdGhpcy5jYW52YXNPZmZzZXQpIHtcbiAgICAgICAgdGhpcy5jYW52YXNPZmZzZXQgPSBHZW9tZXRyeS5nZXRPZmZzZXQodGhpcy5jYW52YXMpXG4gICAgICB9XG5cbiAgICAgIHBvaW50ID0gcG9pbnQuc3ViKHRoaXMuY2FudmFzT2Zmc2V0KVxuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmdldEFyY09uUG9pbnQocG9pbnQpXG4gICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgIHRoaXMuc2V0QWN0aXZlQXJjKCh0aGlzLmFjdGl2ZUFyY0luZGV4ICE9PSBpbmRleCkgPyBpbmRleCA6IC0xKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICB1cGRhdGVBbmdsZXMoKSB7XG4gICAgdGhpcy5hbmdsZXMgPSB0aGlzLmRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGNvbnN0IGhhbGZTaXplID0gZHJhZ2dhYmxlLmdldFNpemUoKS5tdWx0KDAuNSlcbiAgICAgIHJldHVybiBHZW9tZXRyeS5nZXRBbmdsZSh0aGlzLm9wdGlvbnMuY2VudGVyLnN1YihoYWxmU2l6ZSksIGRyYWdnYWJsZS5wb3NpdGlvbilcbiAgICB9KVxuICB9XG5cbiAgZ2V0Qm91bmRBbmdsZShpbmRleCwgaXNDbG9zc2luZykge1xuICAgIGNvbnN0IHNpZ24gPSBpc0Nsb3NzaW5nID8gMSA6IC0xXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgbGV0IGkgPSAoaW5kZXggKyBzaWduKSAlIHRoaXMuYW5nbGVzLmxlbmd0aFxuICAgICAgaWYgKGkgPCAwKSB7XG4gICAgICAgIGkgKz0gdGhpcy5hbmdsZXMubGVuZ3RoXG4gICAgICB9XG4gICAgICByZXR1cm4gR2VvbWV0cnkubm9ybWFsaXplQW5nbGUodGhpcy5hbmdsZXNbaV0gLSBzaWduICogdGhpcy5vcHRpb25zLmJvdW5kQW5nbGUpXG4gICAgfVxuICB9XG5cbiAgZHJhdygpIHtcbiAgICBpZiAoIXRoaXMuaXNJbml0KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZUFuZ2xlcygpXG4gICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmFyZWFSZWN0YW5nbGUuc2l6ZS54LCB0aGlzLmFyZWFSZWN0YW5nbGUuc2l6ZS55KVxuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChfZHJhZ2dhYmxlLCBpbmRleCkgPT4ge1xuICAgICAgdGhpcy5kcmF3QXJjKHRoaXMuY29udGV4dCwgdGhpcy5vcHRpb25zLmNlbnRlciwgdGhpcy5vcHRpb25zLnJhZGl1cywgaW5kZXgpXG4gICAgfSlcblxuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChfZHJhZ2dhYmxlLCBpbmRleCkgPT4ge1xuICAgICAgbGV0IGVuYWJsZUluZGV4ZXNcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuaXNTZWxlY3RhYmxlKSB7XG4gICAgICAgIGVuYWJsZUluZGV4ZXMgPSBnZXRBcnJheVdpdGhCb3VuZEluZGV4ZXModGhpcy5hY3RpdmVBcmNJbmRleCwgdGhpcy5kcmFnZ2FibGVzLmxlbmd0aClcbiAgICAgICAgaWYgKGVuYWJsZUluZGV4ZXMuaW5kZXhPZihpbmRleCkgIT09IC0xKSB7XG4gICAgICAgICAgdGhpcy5kcmF3TGltaXRJbWcoaW5kZXgpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZHJhd0xpbWl0SW1nKGluZGV4KVxuICAgICAgfVxuICAgIH0pXG4gICAgdGhpcy5vbkRyYXcoKVxuICB9XG5cbiAgY3JlYXRlQ2xvbmUoZWxlbWVudCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgaWYgKCF0aGlzLmlzSW5pdCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IHJlY3RhbmdsZSA9IEdlb21ldHJ5LmNyZWF0ZVJlY3RhbmdsZUZyb21FbGVtZW50KGVsZW1lbnQsIGVsZW1lbnQpXG4gICAgY29uc3Qgb3B0cyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY2VudGVyOiByZWN0YW5nbGUuZ2V0Q2VudGVyKCksXG4gICAgICByYWRpdXM6IHJlY3RhbmdsZS5nZXRNaW5TaWRlKCkgLyAyLFxuICAgICAgZmlsbFN0eWxlczogdGhpcy5vcHRpb25zLmZpbGxTdHlsZXNcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgY29uc3QgY2FudmFzID0gY3JlYXRlQ2FudmFzKGVsZW1lbnQsIHJlY3RhbmdsZSlcbiAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJylcbiAgICBjb25zdCBjbG9uZU9iaiA9IHtcbiAgICAgIGRyYXc6ICgpID0+IHtcbiAgICAgICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgcmVjdGFuZ2xlLnNpemUueCwgcmVjdGFuZ2xlLnNpemUueSlcbiAgICAgICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKF9kcmFnZ2FibGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgdGhpcy5kcmF3QXJjKGNvbnRleHQsIG9wdHMuY2VudGVyLCBvcHRzLnJhZGl1cywgaW5kZXgpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICAgIGNsb25lT2JqLmRyYXcoKVxuICAgIHJldHVybiBjbG9uZU9ialxuICB9XG5cbiAgZ2V0RmlsbFN0eWxlKGluZGV4KSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuZmlsbFN0eWxlc1tpbmRleF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5maWxsU3R5bGVzW2luZGV4XSA9IHRoaXMub3B0aW9ucy5maWxsU3R5bGVzW2luZGV4XS5jYWxsKHRoaXMpXG4gICAgfVxuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZmlsbFN0eWxlc1tpbmRleF1cbiAgfVxuXG4gIGRyYXdBcmMoY29udGV4dCwgY2VudGVyLCByYWRpdXMsIGluZGV4KSB7XG4gICAgY29uc3Qgc3RhcnRBbmdsZSA9IHRoaXMuYW5nbGVzW2luZGV4XVxuICAgIGNvbnN0IGVuZEFuZ2xlID0gdGhpcy5hbmdsZXNbKGluZGV4KzEpICUgdGhpcy5hbmdsZXMubGVuZ3RoXVxuICAgIGNvbnN0IGNvbG9yID0gdGhpcy5nZXRGaWxsU3R5bGUoaW5kZXgpXG5cbiAgICBjb250ZXh0LmJlZ2luUGF0aCgpXG4gICAgY29udGV4dC5tb3ZlVG8oY2VudGVyLngsIGNlbnRlci55KVxuICAgIGNvbnRleHQuYXJjKGNlbnRlci54LCBjZW50ZXIueSwgcmFkaXVzLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSwgZmFsc2UpXG4gICAgY29udGV4dC5saW5lVG8oY2VudGVyLngsIGNlbnRlci55KVxuICAgIGNvbnRleHQuY2xvc2VQYXRoKClcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yXG4gICAgY29udGV4dC5maWxsKClcbiAgfVxuXG4gIGRyYXdMaW1pdEltZyhpbmRleCkge1xuICAgIGxldCBwb2ludCwgaW1nXG4gICAgaWYgKHRoaXMub3B0aW9ucy5saW1pdEltZykge1xuICAgICAgaW1nID0gdGhpcy5vcHRpb25zLmxpbWl0SW1nIGluc3RhbmNlb2YgQXJyYXkgPyB0aGlzLm9wdGlvbnMubGltaXRJbWdbaW5kZXhdIDogdGhpcy5vcHRpb25zLmxpbWl0SW1nXG4gICAgfVxuXG4gICAgaWYgKGltZykge1xuICAgICAgY29uc3QgYW5nbGUgPSBHZW9tZXRyeS5ub3JtYWxpemVBbmdsZSh0aGlzLmFuZ2xlc1tpbmRleF0pXG4gICAgICBwb2ludCA9IG5ldyBQb2ludCgwLCAtaW1nLmhlaWdodCAvIDIpXG4gICAgICBwb2ludCA9IHBvaW50LmFkZCh0aGlzLm9wdGlvbnMubGltaXRJbWdPZmZzZXQpXG4gICAgICB0aGlzLmNvbnRleHQudHJhbnNsYXRlKHRoaXMuYXJlYVJlY3RhbmdsZS5zaXplLnggLyAyLCB0aGlzLmFyZWFSZWN0YW5nbGUuc2l6ZS55IC8gMilcbiAgICAgIHRoaXMuY29udGV4dC5yb3RhdGUoYW5nbGUpXG4gICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKGltZywgcG9pbnQueCwgcG9pbnQueSlcbiAgICAgIHRoaXMuY29udGV4dC5zZXRUcmFuc2Zvcm0oMSwgMCwgMCwgMSwgMCwgMClcbiAgICB9XG4gIH1cblxuICBnZXRBbmdsZXNEaWZmKCkge1xuICAgIGNvbnN0IGFuZ2xlcyA9IHRoaXMuYW5nbGVzLnNsaWNlKDEpXG4gICAgbGV0IGJhc2VBbmdsZSA9IHRoaXMuYW5nbGVzWzBdXG5cbiAgICBhbmdsZXMucHVzaChiYXNlQW5nbGUpXG4gICAgcmV0dXJuIGFuZ2xlcy5tYXAoKGFuZ2xlKSA9PiB7XG4gICAgICBjb25zdCBkaWZmQW5nbGUgPSBHZW9tZXRyeS5ub3JtYWxpemVBbmdsZShhbmdsZSAtIGJhc2VBbmdsZSlcbiAgICAgIGJhc2VBbmdsZSA9IGFuZ2xlXG4gICAgICByZXR1cm4gZGlmZkFuZ2xlXG4gICAgfSlcbiAgfVxuXG4gIGdldFBlcmNlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0QW5nbGVzRGlmZigpLm1hcCgoZGlmZkFuZ2xlKSA9PiBkaWZmQW5nbGUgLyAoMiAqIE1hdGguUEkpKVxuICB9XG5cbiAgZ2V0QXJjQmlzZWN0cml4cygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRBbmdsZXNEaWZmKCkubWFwKChkaWZmQW5nbGUsIGkpID0+IHtcbiAgICAgIHJldHVybiBHZW9tZXRyeS5ub3JtYWxpemVBbmdsZSh0aGlzLmFuZ2xlc1tpXSArIGRpZmZBbmdsZSAvIDIpXG4gICAgfSlcbiAgfVxuXG4gIGdldEFyY09uUG9pbnQocG9pbnQpIHtcbiAgICBjb25zdCBhbmdsZSA9IEdlb21ldHJ5LmdldEFuZ2xlKHRoaXMub3B0aW9ucy5jZW50ZXIsIHBvaW50KVxuICAgIGNvbnN0IHJhZGl1cyA9IEdlb21ldHJ5LmdldERpc3RhbmNlKHRoaXMub3B0aW9ucy5jZW50ZXIsIHBvaW50KVxuXG4gICAgaWYgKHJhZGl1cyA+IHRoaXMub3B0aW9ucy5yYWRpdXMpIHtcbiAgICAgIHJldHVybiAtMVxuICAgIH1cblxuICAgIGxldCBvZmZzZXQgPSAtMSwgaSwgalxuICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLmFuZ2xlcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKG9mZnNldCA9PT0gLTEgfHwgdGhpcy5hbmdsZXNbb2Zmc2V0XSA+IHRoaXMuYW5nbGVzW2ldKSB7XG4gICAgICAgIG9mZnNldCA9IGlcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChpID0gMCwgaiA9IG9mZnNldDsgaSA8IHRoaXMuYW5nbGVzLmxlbmd0aDsgaSsrLCBqID0gKGkgKyBvZmZzZXQpICUgdGhpcy5hbmdsZXMubGVuZ3RoKSB7XG4gICAgICBpZiAoYW5nbGUgPCB0aGlzLmFuZ2xlc1tqXSkge1xuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoLS1qIDwgMCkge1xuICAgICAgaiArPSB0aGlzLmFuZ2xlcy5sZW5ndGhcbiAgICB9XG4gICAgcmV0dXJuIGpcbiAgfVxuXG4gIHNldEFuZ2xlcyhhbmdsZXMpIHtcbiAgICB0aGlzLmFuZ2xlcyA9IGFuZ2xlc1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUsIGkpID0+IHtcbiAgICAgIGNvbnN0IGFuZ2xlID0gdGhpcy5hbmdsZXNbaV1cbiAgICAgIGNvbnN0IGhhbGZTaXplID0gZHJhZ2dhYmxlLmdldFNpemUoKS5tdWx0KDAuNSlcbiAgICAgIGNvbnN0IHBvc2l0aW9uID0gR2VvbWV0cnkuZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKFxuICAgICAgICBhbmdsZSxcbiAgICAgICAgdGhpcy5vcHRpb25zLnRvdWNoUmFkaXVzLFxuICAgICAgICB0aGlzLm9wdGlvbnMuY2VudGVyLnN1YihoYWxmU2l6ZSlcbiAgICAgIClcblxuICAgICAgZHJhZ2dhYmxlLm1vdmUocG9zaXRpb24sIDAsIHRydWUsIHRydWUpXG4gICAgfSlcbiAgICB0aGlzLmRyYXcoKVxuICB9XG5cbiAgc2V0QWN0aXZlQXJjKGluZGV4KSB7XG4gICAgY29uc3QgZW5hYmxlSW5kZXhlcyA9IGdldEFycmF5V2l0aEJvdW5kSW5kZXhlcyhpbmRleCwgdGhpcy5kcmFnZ2FibGVzLmxlbmd0aClcbiAgICB0aGlzLmFjdGl2ZUFyY0luZGV4ID0gaW5kZXhcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlLCBpKSA9PiB7XG4gICAgICBkcmFnZ2FibGUuZW5hYmxlID0gZW5hYmxlSW5kZXhlcy5pbmRleE9mKGkpICE9PSAtMVxuICAgIH0pXG4gICAgdGhpcy5kcmF3KClcbiAgfVxufVxuXG5leHBvcnQgeyBjaGFydHMsIENoYXJ0IH1cbiIsIid1c2Ugc3RyaWN0J1xuXG5pbXBvcnQge1xuICBnZXREZWZhdWx0UGFyZW50LFxuICBnZXRUb3VjaEJ5SUQsXG4gIGFkZENsYXNzLCByZW1vdmVDbGFzc1xufSBmcm9tICcuL3V0aWwnXG5cbmltcG9ydCBFdmVudCBmcm9tICcuL2V2ZW50J1xuaW1wb3J0IGdldFN0eWxlUHJvcGVydHkgZnJvbSAnZGVzYW5kcm8tZ2V0LXN0eWxlLXByb3BlcnR5J1xuaW1wb3J0IHsgYm91bmRUb0VsZW1lbnQgfSBmcm9tICcuL2JvdW5kJ1xuaW1wb3J0IHsgR2VvbWV0cnksIFBvaW50LCBSZWN0YW5nbGUgfSBmcm9tICcuL2dlb21ldHJ5J1xuaW1wb3J0IHsgZGVmYXVsdFNjb3BlIH0gZnJvbSAnLi9zY29wZSdcblxuY29uc3QgRHJhZ2VlID0geyBFdmVudCB9IC8vdG9kbyByZW1vdmUgYWZ0ZXIgcmVmYWN0b3JlXG5cbmNvbnN0IGlzVG91Y2ggPSAnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3csIG1vdXNlRXZlbnRzID0ge1xuICAgIHN0YXJ0OiAnbW91c2Vkb3duJyxcbiAgICBtb3ZlOiAnbW91c2Vtb3ZlJyxcbiAgICBlbmQ6ICdtb3VzZXVwJ1xuICB9LCB0b3VjaEV2ZW50cyA9IHtcbiAgICBzdGFydDogJ3RvdWNoc3RhcnQnLFxuICAgIG1vdmU6ICd0b3VjaG1vdmUnLFxuICAgIGVuZDogJ3RvdWNoZW5kJ1xuICB9LFxuICBldmVudHMgPSBpc1RvdWNoID8gdG91Y2hFdmVudHMgOiBtb3VzZUV2ZW50cyxcbiAgZHJhZ2dhYmxlcyA9IFtdLFxuICB0cmFuc2Zvcm1Qcm9wZXJ0eSA9IGdldFN0eWxlUHJvcGVydHkoJ3RyYW5zZm9ybScpLFxuICB0cmFuc2l0aW9uUHJvcGVydHkgPSBnZXRTdHlsZVByb3BlcnR5KCd0cmFuc2l0aW9uJylcblxuZnVuY3Rpb24gcHJldmVudERvdWJsZUluaXQoZHJhZ2dhYmxlKSB7XG4gIGNvbnN0IG1lc3NhZ2UgPSBcImZvciB0aGlzIGVsZW1lbnQgRHJhZ2VlLkRyYWdnYWJsZSBpcyBhbHJlYWR5IGV4aXN0LCBkb24ndCBjcmVhdGUgaXQgdHdpY2UgXCJcbiAgaWYgKGRyYWdnYWJsZXMuc29tZSgoZXhpc3RpbmcpID0+IGRyYWdnYWJsZS5lbGVtZW50ID09PSBleGlzdGluZy5lbGVtZW50KSkge1xuICAgIHRocm93IG1lc3NhZ2VcbiAgfVxuICBkcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxufVxuXG5mdW5jdGlvbiBhZGRUb0RlZmF1bHRTY29wZShkcmFnZ2FibGUpIHtcbiAgZGVmYXVsdFNjb3BlLmFkZERyYWdnYWJsZShkcmFnZ2FibGUpXG59XG5cbmNsYXNzIERyYWdnYWJsZSB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIG9wdGlvbnM9e30pIHtcbiAgICBjb25zdCBwYXJlbnQgPSBvcHRpb25zLnBhcmVudCB8fCBnZXREZWZhdWx0UGFyZW50KGVsZW1lbnQpXG4gICAgdGhpcy50YXJnZXRzID0gW11cbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHBhcmVudDogcGFyZW50LFxuICAgICAgYm91bmQ6IGJvdW5kVG9FbGVtZW50KHBhcmVudCwgcGFyZW50KSxcbiAgICAgIHN0YXJ0RmlsdGVyOiBmYWxzZSxcbiAgICAgIGlzQ29udGVudEJveFNpemU6IGZhbHNlLFxuICAgICAgcG9zaXRpb246IGZhbHNlXG4gICAgfSwgb3B0aW9ucylcblxuICAgIHRoaXMub25FbmQgPSBuZXcgRHJhZ2VlLkV2ZW50KHRoaXMsIHsgaXNSZXZlcnNlOiB0cnVlLCBpc1N0b3BPblRydWU6IHRydWUgfSlcbiAgICB0aGlzLm9uTW92ZSA9IG5ldyBEcmFnZWUuRXZlbnQodGhpcylcbiAgICB0aGlzLm9uU3RhcnQgPSBuZXcgRHJhZ2VlLkV2ZW50KHRoaXMpXG5cbiAgICB0aGlzLm9uRW5kLmFkZCgoKSA9PiB0aGlzLm1vdmUodGhpcy5wb3NpdGlvbiwgMCwgdHJ1ZSwgdHJ1ZSkpXG5cbiAgICBpZiAob3B0aW9ucy5vbkVuZCkge1xuICAgICAgdGhpcy5vbkVuZC5hZGQob3B0aW9ucy5vbkVuZClcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMub25Nb3ZlKSB7XG4gICAgICB0aGlzLm9uTW92ZS5hZGQob3B0aW9ucy5vbk1vdmUpXG4gICAgfVxuICAgIGlmIChvcHRpb25zLm9uU3RhcnQpIHtcbiAgICAgIHRoaXMub25TdGFydC5hZGQob3B0aW9ucy5vblN0YXJ0KVxuICAgIH1cbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG4gICAgdGhpcy5ib3VuZCA9IHRoaXMub3B0aW9ucy5ib3VuZFxuICAgIHByZXZlbnREb3VibGVJbml0KHRoaXMpXG4gICAgRHJhZ2dhYmxlLm9uQ3JlYXRlLmZpcmUodGhpcylcbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLl9lbmFibGUgPSB0cnVlXG4gICAgdGhpcy5vZmZzZXQgPSBHZW9tZXRyeS5nZXRPZmZzZXQodGhpcy5lbGVtZW50LCB0aGlzLm9wdGlvbnMucGFyZW50LCB0cnVlKVxuICAgIHRoaXMuZml4UG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICAgIGlmICh0aGlzLm9wdGlvbnMucG9zaXRpb24pIHtcbiAgICAgIHRoaXMuaW5pdFBvc2l0aW9uID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uXG4gICAgICB0aGlzLm1vdmUodGhpcy5pbml0UG9zaXRpb24sIDAsIHRydWUsIHRydWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5pdFBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICB9XG4gICAgdGhpcy5fZHJhZ1N0YXJ0ID0gdGhpcy5kcmFnU3RhcnQuYmluZCh0aGlzKVxuICAgIHRoaXMuX2RyYWdNb3ZlID0gdGhpcy5kcmFnTW92ZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5fZHJhZ0VuZCA9IHRoaXMuZHJhZ0VuZC5iaW5kKHRoaXMpXG5cbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0KVxuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQpXG5cbiAgICBpZiAodGhpcy5ib3VuZC5yZWZyZXNoKSB7XG4gICAgICB0aGlzLmJvdW5kLnJlZnJlc2goKVxuICAgIH1cbiAgfVxuXG4gIHJlaW5pdCgpIHtcbiAgICB0aGlzLm9mZnNldCA9IEdlb21ldHJ5LmdldE9mZnNldCh0aGlzLmVsZW1lbnQsIHRoaXMub3B0aW9ucy5wYXJlbnQsIHRydWUpXG4gICAgdGhpcy5maXhQb3NpdGlvbiA9IHRoaXMub2Zmc2V0XG4gICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMub2Zmc2V0XG4gICAgaWYgKHRoaXMub3B0aW9ucy5wb3NpdGlvbikge1xuICAgICAgdGhpcy5pbml0UG9zaXRpb24gPSB0aGlzLm9wdGlvbnMucG9zaXRpb25cbiAgICAgIHRoaXMubW92ZSh0aGlzLmluaXRQb3NpdGlvbiwgMCwgdHJ1ZSwgdHJ1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbml0UG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICAgIH1cblxuICAgIGlmICh0aGlzLmJvdW5kLnJlZnJlc2gpIHtcbiAgICAgIHRoaXMuYm91bmQucmVmcmVzaCgpXG4gICAgfVxuICB9XG5cbiAgZ2V0U2l6ZShfcmVjYWx1bGF0ZSkge1xuICAgIHJldHVybiBHZW9tZXRyeS5nZXRTaXplT2ZFbGVtZW50KHRoaXMuZWxlbWVudCwgdGhpcy5vcHRpb25zLmlzQ29udGVudEJveFNpemUpXG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5vZmZzZXQuYWRkKHRoaXMuX3RyYW5zZm9ybVBvc2l0aW9uIHx8IG5ldyBQb2ludCgwLCAwKSlcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvblxuICB9XG5cbiAgZ2V0Q2VudGVyKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLmdldFNpemUoKS5tdWx0KDAuNSkpXG4gIH1cblxuICBfc2V0VHJhbnNsYXRlKHBvaW50KSB7XG4gICAgdGhpcy5fdHJhbnNmb3JtUG9zaXRpb24gPSBwb2ludFxuXG4gICAgbGV0IHRyYW5zZm9ybSA9IHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wZXJ0eV1cbiAgICBsZXQgdHJhbnNsYXRlQ3NzID0gJyB0cmFuc2xhdGUzZCgnICsgcG9pbnQueCArICdweCwnICsgcG9pbnQueSArICdweCwgMHB4KSdcblxuICAgIGNvbnN0IHVhID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnRcbiAgICBjb25zdCBtc2llID0gdWEuaW5kZXhPZignTVNJRSAnKVxuXG4gICAgaWYgKG1zaWUpIHtcbiAgICAgIHRyYW5zbGF0ZUNzcyA9ICcgdHJhbnNsYXRlKCcgKyBwb2ludC54ICsgJ3B4LCcgKyBwb2ludC55ICsgJ3B4KSdcbiAgICAgIGlmICghL3RyYW5zbGF0ZVxcKFteKV0rXFwpLy50ZXN0KHRyYW5zZm9ybSkpIHtcbiAgICAgICAgdHJhbnNmb3JtICs9IHRyYW5zbGF0ZUNzc1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJhbnNmb3JtID0gdHJhbnNmb3JtLnJlcGxhY2UoL3RyYW5zbGF0ZVxcKFteKV0rXFwpLywgdHJhbnNsYXRlQ3NzKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIS90cmFuc2xhdGUzZFxcKFteKV0rXFwpLy50ZXN0KHRyYW5zZm9ybSkpIHtcbiAgICAgICAgdHJhbnNmb3JtICs9IHRyYW5zbGF0ZUNzc1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJhbnNmb3JtID0gdHJhbnNmb3JtLnJlcGxhY2UoL3RyYW5zbGF0ZTNkXFwoW14pXStcXCkvLCB0cmFuc2xhdGVDc3MpXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BlcnR5XSA9IHRyYW5zZm9ybVxuICB9XG5cbiAgbW92ZShwb2ludCwgdGltZT0wLCBpc0ZpeD1mYWxzZSwgaXNTaWxlbnQ9ZmFsc2UpIHtcbiAgICBwb2ludCA9IHBvaW50LmNsb25lKClcbiAgICBpZiAoaXNGaXgpIHtcbiAgICAgIHRoaXMuZml4UG9zaXRpb24gPSBwb2ludFxuICAgIH1cblxuICAgIHRoaXMuZGV0ZXJtaW5lRGlyZWN0aW9uKHBvaW50KVxuXG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvaW50XG5cbiAgICBpZiAodHJhbnNpdGlvblByb3BlcnR5KSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNpdGlvblByb3BlcnR5XSA9IHRpbWUgKyAnbXMnXG4gICAgfVxuXG4gICAgdGhpcy5fc2V0VHJhbnNsYXRlKHBvaW50LnN1Yih0aGlzLm9mZnNldCkpXG4gICAgaWYgKCFpc1NpbGVudCkge1xuICAgICAgdGhpcy5vbk1vdmUuZmlyZSgpXG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaFBvc2l0aW9uICgpIHtcbiAgICB0aGlzLnNldFBvc2l0aW9uKHRoaXMuZ2V0UG9zaXRpb24oKSlcbiAgfVxuXG4gIHNldFBvc2l0aW9uKHBvaW50KSB7XG4gICAgcG9pbnQgPSBwb2ludC5jbG9uZSgpXG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvaW50XG5cbiAgICBpZiAodHJhbnNpdGlvblByb3BlcnR5KSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNpdGlvblByb3BlcnR5XSA9ICcwbXMnXG4gICAgfVxuXG4gICAgdGhpcy5fc2V0VHJhbnNsYXRlKHBvaW50LnN1Yih0aGlzLm9mZnNldCkpXG4gIH1cblxuICBzZXRaZXJvVHJhbnNpdGlvbigpIHtcbiAgICBpZiAodHJhbnNpdGlvblByb3BlcnR5KSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNpdGlvblByb3BlcnR5XSA9ICcwbXMnXG4gICAgfVxuICB9XG5cbiAgZGV0ZXJtaW5lRGlyZWN0aW9uKHBvaW50KSB7XG4gICAgdGhpcy5sZWZ0RGlyZWN0aW9uID0gKHRoaXMucG9zaXRpb24ueCA8IHBvaW50LngpXG4gICAgdGhpcy5yaWdodERpcmVjdGlvbiA9ICh0aGlzLnBvc2l0aW9uLnggPiBwb2ludC54KVxuICAgIHRoaXMudXBEaXJlY3Rpb24gPSAodGhpcy5wb3NpdGlvbi55ID4gcG9pbnQueSlcbiAgICB0aGlzLmRvd25EaXJlY3Rpb24gPSAodGhpcy5wb3NpdGlvbi55IDwgcG9pbnQueSlcbiAgfVxuXG4gIGRyYWdTdGFydChldmVudCkge1xuICAgIHRoaXMuY3VycmVudEV2ZW50ID0gZXZlbnRcbiAgICBpZiAoIXRoaXMuX2VuYWJsZSB8fCAodGhpcy5vcHRpb25zLnN0YXJ0RmlsdGVyICYmICF0aGlzLm9wdGlvbnMuc3RhcnRGaWx0ZXIoZXZlbnQpKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaXNUb3VjaEV2ZW50ID0gKGlzVG91Y2ggJiYgKGV2ZW50IGluc3RhbmNlb2Ygd2luZG93LlRvdWNoRXZlbnQpKVxuXG4gICAgdGhpcy5fc3RhcnRUb3VjaFBvaW50ID0gbmV3IFBvaW50KGlzVG91Y2hFdmVudCA/IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYIDogZXZlbnQuY2xpZW50WCwgaXNUb3VjaEV2ZW50ID8gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVkgOiBldmVudC5jbGllbnRZKVxuXG4gICAgdGhpcy5fc3RhcnRQb3NpdGlvbiA9IHRoaXMuZ2V0UG9zaXRpb24oKVxuICAgIGlmIChpc1RvdWNoRXZlbnQpIHtcbiAgICAgIHRoaXMuX3RvdWNoSWQgPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5pZGVudGlmaWVyXG4gICAgfVxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgaWYgKCEoZXZlbnQudGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJbnB1dEVsZW1lbnQgfHxcbiAgICAgICAgICBldmVudC50YXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElucHV0RWxlbWVudCkpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB9IGVsc2Uge1xuICAgICAgZXZlbnQudGFyZ2V0LmZvY3VzKClcbiAgICB9XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcblxuICAgIHRoaXMuaXNEcmFnZ2luZyA9IHRydWVcblxuICAgIHRoaXMub25TdGFydC5maXJlKGV2ZW50KVxuICAgIGFkZENsYXNzKHRoaXMuZWxlbWVudCwgJ2FjdGl2ZScpXG4gICAgdGhpcy5vbk1vdmUuZmlyZShldmVudClcbiAgfVxuXG4gIGRyYWdNb3ZlKGV2ZW50KSB7XG4gICAgdGhpcy5jdXJyZW50RXZlbnQgPSBldmVudFxuICAgIGxldCB0b3VjaFxuXG4gICAgY29uc3QgaXNUb3VjaEV2ZW50ID0gKGlzVG91Y2ggJiYgKGV2ZW50IGluc3RhbmNlb2Ygd2luZG93LlRvdWNoRXZlbnQpKVxuICAgIGlmIChpc1RvdWNoRXZlbnQpIHtcbiAgICAgIHRvdWNoID0gZ2V0VG91Y2hCeUlEKGV2ZW50LCB0aGlzLl90b3VjaElkKVxuXG4gICAgICBpZiAoIXRvdWNoKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IHRvdWNoUG9pbnQgPSBuZXcgUG9pbnQoaXNUb3VjaEV2ZW50ID8gdG91Y2gucGFnZVggOiBldmVudC5jbGllbnRYLCBpc1RvdWNoRXZlbnQgPyB0b3VjaC5wYWdlWSA6IGV2ZW50LmNsaWVudFkpXG4gICAgbGV0IHBvaW50ID0gdGhpcy5fc3RhcnRQb3NpdGlvbi5hZGQodG91Y2hQb2ludC5zdWIodGhpcy5fc3RhcnRUb3VjaFBvaW50KSlcbiAgICBwb2ludCA9IHRoaXMuYm91bmQocG9pbnQsIHRoaXMuZ2V0U2l6ZSgpKVxuICAgIHRoaXMudG91Y2hQb2ludCA9IHRvdWNoUG9pbnRcbiAgICB0aGlzLm1vdmUocG9pbnQsIDApXG4gIH1cblxuICBkcmFnRW5kKGV2ZW50KSB7XG4gICAgY29uc3QgaXNUb3VjaEV2ZW50ID0gKGlzVG91Y2ggJiYgKGV2ZW50IGluc3RhbmNlb2Ygd2luZG93LlRvdWNoRXZlbnQpKVxuXG4gICAgaWYgKGlzVG91Y2hFdmVudCAmJiAhZ2V0VG91Y2hCeUlEKGV2ZW50LCB0aGlzLl90b3VjaElkKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhpcy5vbkVuZC5maXJlKGV2ZW50KVxuXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG5cbiAgICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZVxuICAgIHJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudCwgJ2FjdGl2ZScpXG4gIH1cblxuICBnZXRSZWN0YW5nbGUoKSB7XG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUodGhpcy5wb3NpdGlvbiwgdGhpcy5nZXRTaXplKCkpXG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIHRoaXMuZ2V0U2l6ZSh0cnVlKVxuICAgIGlmICh0aGlzLmJvdW5kLnJlZnJlc2gpIHtcbiAgICAgIHRoaXMuYm91bmQucmVmcmVzaCgpXG4gICAgfVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0KVxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQpXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcblxuICAgIHRoaXMub25FbmQucmVzZXQoKVxuICAgIHRoaXMub25Nb3ZlLnJlc2V0KClcbiAgfVxuXG4gIGdldCBlbmFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZVxuICB9XG5cbiAgc2V0IGVuYWJsZShlbmFibGUpIHtcbiAgICBpZiAoZW5hYmxlKSB7XG4gICAgICByZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnQsICdkaXNhYmxlJylcbiAgICB9IGVsc2Uge1xuICAgICAgYWRkQ2xhc3ModGhpcy5lbGVtZW50LCAnZGlzYWJsZScpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZSA9IGVuYWJsZVxuICB9XG59XG5cbkRyYWdnYWJsZS5vbkNyZWF0ZSA9IG5ldyBEcmFnZWUuRXZlbnQoRHJhZ2dhYmxlLCB7IGlzUmV2ZXJzZTogdHJ1ZSwgaXNTdG9wT25UcnVlOiB0cnVlIH0pXG5EcmFnZ2FibGUub25DcmVhdGUuYWRkKGFkZFRvRGVmYXVsdFNjb3BlKVxuXG5leHBvcnQgeyBEcmFnZ2FibGUsIGRyYWdnYWJsZXMsIGV2ZW50cyB9XG4iLCIndXNlIHN0cmljdCdcblxuZnVuY3Rpb24gRXZlbnQoY29udGV4dCwgb3B0aW9ucyA9IHt9KSB7XG4gIHRoaXMuZnVuY3MgPSBbXVxuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0XG4gIHRoaXMuaXNSZXZlcnNlID0gb3B0aW9ucy5pc1JldmVyc2UgfHwgZmFsc2VcbiAgdGhpcy5pc1N0b3BPblRydWUgPSBvcHRpb25zLmlzU3RvcE9uVHJ1ZSB8fCBmYWxzZVxufVxuXG5FdmVudC5wcm90b3R5cGUuZmlyZSA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpXG4gIGNvbnN0IGZzID0gdGhpcy5pc1JldmVyc2UgPyB0aGlzLmZ1bmNzLnNsaWNlKCkucmV2ZXJzZSgpIDogdGhpcy5mdW5jc1xuICBsZXQgcmV0VmFsdWVcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGZzLmxlbmd0aDsgaSsrKSB7XG4gICAgcmV0VmFsdWUgPSBmc1tpXS5hcHBseSh0aGlzLmNvbnRleHQsIGFyZ3MpXG4gICAgaWYgKHRoaXMuaXNTdG9wT25UcnVlICYmIHJldFZhbHVlKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgfVxuICByZXR1cm4gIXRoaXMuaXNTdG9wT25UcnVlXG59XG5cbkV2ZW50LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbihmKSB7XG4gIHRoaXMuZnVuY3MucHVzaChmKVxufVxuXG5FdmVudC5wcm90b3R5cGUudW5zaGlmdCA9IGZ1bmN0aW9uKGYpIHtcbiAgdGhpcy5mdW5jcy51bnNoaWZ0KGYpXG59XG5cbkV2ZW50LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbihmKSB7XG4gIGNvbnN0IGluZGV4ID0gdGhpcy5mdW5jcy5pbmRleE9mKGYpXG4gIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICB0aGlzLmZ1bmNzLnNwbGljZShpbmRleCwgMSlcbiAgfVxufVxuXG5FdmVudC5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbihfZikge1xuICB0aGlzLmZ1bmNzID0gW11cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRcbiIsIid1c2Ugc3RyaWN0J1xuaW1wb3J0IHV0aWwgZnJvbSAnLi91dGlsJ1xuXG4vKioqKioqKioqKioqKioqKioqKioqL1xuZnVuY3Rpb24gUG9pbnQoeCwgeSkge1xuICB0aGlzLnggPSB4XG4gIHRoaXMueSA9IHlcbn1cblxuUG9pbnQucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAne3g9JyArIHRoaXMueCArICcseT0nICsgdGhpcy55ICsgJ30nXG59XG5cblBvaW50LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbihwKSB7XG4gIHJldHVybiBuZXcgUG9pbnQodGhpcy54ICsgcC54LCB0aGlzLnkgKyBwLnkpXG59XG5cblBvaW50LnByb3RvdHlwZS5zdWIgPSBmdW5jdGlvbihwKSB7XG4gIHJldHVybiBuZXcgUG9pbnQodGhpcy54IC0gcC54LCB0aGlzLnkgLSBwLnkpXG59XG5cblBvaW50LnByb3RvdHlwZS5tdWx0ID0gZnVuY3Rpb24oaykge1xuICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCAqIGssIHRoaXMueSAqIGspXG59XG5cblBvaW50LnByb3RvdHlwZS5uZWdhdGl2ZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFBvaW50KC10aGlzLngsIC10aGlzLnkpXG59XG5cblBvaW50LnByb3RvdHlwZS5jb21wYXJlID0gZnVuY3Rpb24ocCkge1xuICByZXR1cm4gKHRoaXMueCA9PT0gcC54ICYmIHRoaXMueSA9PT0gcC55KVxufVxuXG5Qb2ludC5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLngsIHRoaXMueSlcbn1cblxuLyoqKioqKioqKioqKioqKiovXG5mdW5jdGlvbiBSZWN0YW5nbGUocG9zaXRpb24sIHNpemUpIHtcbiAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gIHRoaXMuc2l6ZSA9IHNpemVcbn1cblxuUmVjdGFuZ2xlLnByb3RvdHlwZS5nZXRQMSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5wb3NpdGlvblxufVxuXG5SZWN0YW5nbGUucHJvdG90eXBlLmdldFAyID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgUG9pbnQodGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHRoaXMucG9zaXRpb24ueSlcbn1cblxuUmVjdGFuZ2xlLnByb3RvdHlwZS5nZXRQMyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5wb3NpdGlvbi5hZGQodGhpcy5zaXplKVxufVxuXG5SZWN0YW5nbGUucHJvdG90eXBlLmdldFA0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgUG9pbnQodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSlcbn1cblxuUmVjdGFuZ2xlLnByb3RvdHlwZS5nZXRDZW50ZXIgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMucG9zaXRpb24uYWRkKHRoaXMuc2l6ZS5tdWx0KDAuNSkpXG59XG5cblJlY3RhbmdsZS5wcm90b3R5cGUub3IgPSBmdW5jdGlvbihyZWN0KSB7XG4gIGNvbnN0IHBvc2l0aW9uID0gbmV3IFBvaW50KE1hdGgubWluKHRoaXMucG9zaXRpb24ueCwgcmVjdC5wb3NpdGlvbi54KSwgTWF0aC5taW4odGhpcy5wb3NpdGlvbi55LCByZWN0LnBvc2l0aW9uLnkpKSwgc2l6ZSA9IChuZXcgUG9pbnQoTWF0aC5tYXgodGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLngsIHJlY3QucG9zaXRpb24ueCArIHJlY3Quc2l6ZS54KSwgTWF0aC5tYXgodGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnksIHJlY3QucG9zaXRpb24ueSArIHJlY3Quc2l6ZS55KSkpLnN1Yihwb3NpdGlvbilcbiAgcmV0dXJuIG5ldyBSZWN0YW5nbGUocG9zaXRpb24sIHNpemUpXG59XG5cblJlY3RhbmdsZS5wcm90b3R5cGUuYW5kID0gZnVuY3Rpb24ocmVjdCkge1xuICBjb25zdCBwb3NpdGlvbiA9IG5ldyBQb2ludChNYXRoLm1heCh0aGlzLnBvc2l0aW9uLngsIHJlY3QucG9zaXRpb24ueCksIE1hdGgubWF4KHRoaXMucG9zaXRpb24ueSwgcmVjdC5wb3NpdGlvbi55KSksIHNpemUgPSAobmV3IFBvaW50KE1hdGgubWluKHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54LCByZWN0LnBvc2l0aW9uLnggKyByZWN0LnNpemUueCksIE1hdGgubWluKHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55LCByZWN0LnBvc2l0aW9uLnkgKyByZWN0LnNpemUueSkpKS5zdWIocG9zaXRpb24pXG4gIGlmIChzaXplLnggPD0gMCB8fCBzaXplLnkgPD0gMCkge1xuICAgIHJldHVybiBudWxsXG4gIH1cbiAgcmV0dXJuIG5ldyBSZWN0YW5nbGUocG9zaXRpb24sIHNpemUpXG59XG5cblJlY3RhbmdsZS5wcm90b3R5cGUuaW5jbHVkZVBvaW50ID0gZnVuY3Rpb24ocCkge1xuICByZXR1cm4gISh0aGlzLnBvc2l0aW9uLnggPiBwLnggfHwgdGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLnggPCBwLnggfHwgdGhpcy5wb3NpdGlvbi55ID4gcC55IHx8IHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55IDwgcC55KVxufVxuXG5SZWN0YW5nbGUucHJvdG90eXBlLmluY2x1ZGVSZWN0YW5nbGUgPSBmdW5jdGlvbihyZWN0YW5nbGUpIHtcbiAgcmV0dXJuIHRoaXMuaW5jbHVkZVBvaW50KHJlY3RhbmdsZS5wb3NpdGlvbikgJiYgdGhpcy5pbmNsdWRlUG9pbnQocmVjdGFuZ2xlLmdldFAzKCkpXG59XG5cblJlY3RhbmdsZS5wcm90b3R5cGUubW92ZVRvQm91bmQgPSBmdW5jdGlvbihyZWN0LCBheGlzKSB7XG4gIGxldCBzZWxBeGlzLCBjcm9zc1JlY3RhbmdsZVxuICBpZiAoYXhpcykge1xuICAgIHNlbEF4aXMgPSBheGlzXG4gIH0gZWxzZSB7XG4gICAgY3Jvc3NSZWN0YW5nbGUgPSB0aGlzLmFuZChyZWN0KVxuICAgIGlmICghY3Jvc3NSZWN0YW5nbGUpIHtcbiAgICAgIHJldHVybiByZWN0XG4gICAgfVxuICAgIHNlbEF4aXMgPSBjcm9zc1JlY3RhbmdsZS5zaXplLnggPiBjcm9zc1JlY3RhbmdsZS5zaXplLnkgPyAneScgOiAneCdcbiAgfVxuICBjb25zdCB0aGlzQ2VudGVyID0gdGhpcy5nZXRDZW50ZXIoKVxuICBjb25zdCByZWN0Q2VudGVyID0gcmVjdC5nZXRDZW50ZXIoKVxuICBjb25zdCBzaWduID0gdGhpc0NlbnRlcltzZWxBeGlzXSA+IHJlY3RDZW50ZXJbc2VsQXhpc10gPyAtMSA6IDFcbiAgY29uc3Qgb2Zmc2V0ID0gc2lnbiA+IDAgPyB0aGlzLnBvc2l0aW9uW3NlbEF4aXNdICsgdGhpcy5zaXplW3NlbEF4aXNdIC0gcmVjdC5wb3NpdGlvbltzZWxBeGlzXSA6IHRoaXMucG9zaXRpb25bc2VsQXhpc10gLSAocmVjdC5wb3NpdGlvbltzZWxBeGlzXSArIHJlY3Quc2l6ZVtzZWxBeGlzXSlcbiAgcmVjdC5wb3NpdGlvbltzZWxBeGlzXSA9IHJlY3QucG9zaXRpb25bc2VsQXhpc10gKyBvZmZzZXRcbiAgcmV0dXJuIHJlY3Rcbn1cblxuUmVjdGFuZ2xlLnByb3RvdHlwZS5nZXRTcXVhcmUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuc2l6ZS54ICogdGhpcy5zaXplLnlcbn1cblxuUmVjdGFuZ2xlLnByb3RvdHlwZS5zdHlsZUFwcGx5ID0gZnVuY3Rpb24oZWwpIHtcbiAgZWwgPSBlbCB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbmQnKVxuICBlbC5zdHlsZS5sZWZ0ID0gdGhpcy5wb3NpdGlvbi54ICsgJ3B4J1xuICBlbC5zdHlsZS50b3AgPSB0aGlzLnBvc2l0aW9uLnkgKyAncHgnXG4gIGVsLnN0eWxlLndpZHRoID0gdGhpcy5zaXplLnggKyAncHgnXG4gIGVsLnN0eWxlLmhlaWdodCA9IHRoaXMuc2l6ZS55ICsgJ3B4J1xufVxuXG5SZWN0YW5nbGUucHJvdG90eXBlLmdyb3d0aCA9IGZ1bmN0aW9uKHNpemUpIHtcbiAgdGhpcy5zaXplID0gdGhpcy5zaXplLmFkZChzaXplKVxuICB0aGlzLnBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbi5hZGQoc2l6ZS5tdWx0KC0wLjUpKVxufVxuXG5SZWN0YW5nbGUucHJvdG90eXBlLmdldE1pblNpZGUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIE1hdGgubWluKHRoaXMuc2l6ZS54LCB0aGlzLnNpemUueSlcbn1cblxuLyoqKioqKioqKioqKioqKioqL1xuY29uc3QgR2VvbWV0cnkgPSB7XG4gIGdldERpc3RhbmNlOiBmdW5jdGlvbihwMSwgcDIpIHtcbiAgICBjb25zdCBkeCA9IHAxLnggLSBwMi54LCBkeSA9IHAxLnkgLSBwMi55XG4gICAgcmV0dXJuIE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSlcbiAgfSxcbiAgZGlzdGFuY2U6IGZ1bmN0aW9uKHAxLCBwMikge1xuICAgIHJldHVybiBHZW9tZXRyeS5nZXREaXN0YW5jZShwMSwgcDIpXG4gIH0sXG4gIGdldFhEaWZmZXJlbmNlOiBmdW5jdGlvbihwMSwgcDIpIHtcbiAgICByZXR1cm4gTWF0aC5hYnMocDEueCAtIHAyLngpXG4gIH0sXG4gIGdldFlEaWZmZXJlbmNlOiBmdW5jdGlvbihwMSwgcDIpIHtcbiAgICByZXR1cm4gTWF0aC5hYnMocDEueSAtIHAyLnkpXG4gIH0sXG4gIHRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3Rvcnk6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24ocDEsIHAyKSB7XG4gICAgICByZXR1cm4gTWF0aC5zcXJ0KFxuICAgICAgICAgICAgICAgIE1hdGgucG93KG9wdGlvbnMueCAqIE1hdGguYWJzKHAxLnggLSBwMi54KSwgMikgKyBNYXRoLnBvdyhvcHRpb25zLnkgKiBNYXRoLmFicyhwMS55IC0gcDIueSksIDIpXG4gICAgICAgICAgICApXG4gICAgfVxuICB9LFxuICBpbmRleE9mTmVhclBvaW50OiBmdW5jdGlvbihhcnIsIHZhbCwgcmFkaXVzLCBnZXREaXN0YW5jZSkge1xuICAgIGxldCBzaXplLCBpbmRleCA9IDAsIGksIHRlbXBcbiAgICBnZXREaXN0YW5jZSA9IGdldERpc3RhbmNlIHx8IEdlb21ldHJ5LmdldERpc3RhbmNlXG4gICAgaWYgKGFyci5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiAtMVxuICAgIH1cbiAgICBzaXplID0gZ2V0RGlzdGFuY2UoYXJyWzBdLCB2YWwpXG4gICAgZm9yIChpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgdGVtcCA9IGdldERpc3RhbmNlKGFycltpXSwgdmFsKVxuICAgICAgaWYgKHRlbXAgPCBzaXplKSB7XG4gICAgICAgIHNpemUgPSB0ZW1wXG4gICAgICAgIGluZGV4ID0gaVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAocmFkaXVzID49IDAgJiYgc2l6ZSA+IHJhZGl1cykge1xuICAgICAgcmV0dXJuIC0xXG4gICAgfVxuICAgIHJldHVybiBpbmRleFxuICB9LFxuICBib3VuZDogZnVuY3Rpb24obWluLCBtYXgsIHZhbCkge1xuICAgIHJldHVybiBNYXRoLm1heChtaW4sIE1hdGgubWluKG1heCwgdmFsKSlcbiAgfSxcbiAgYm91bmRQb2ludDogZnVuY3Rpb24obWluLCBtYXgsIHZhbCkge1xuICAgIGNvbnN0IHggPSBNYXRoLm1heChtaW4ueCwgTWF0aC5taW4obWF4LngsIHZhbC54KSlcbiAgICBjb25zdCB5ID0gTWF0aC5tYXgobWluLnksIE1hdGgubWluKG1heC55LCB2YWwueSkpXG4gICAgcmV0dXJuIG5ldyBQb2ludCh4LCB5KVxuICB9LFxuICAgIC8vUmV0dXJuIGNyb3NzaW5nIHBvaW50IG9mIHR3byBsaW5lc1xuICBkaXJlY3RDcm9zc2luZzogZnVuY3Rpb24oTDFQMSwgTDFQMiwgTDJQMSwgTDJQMikge1xuICAgIGxldCB0ZW1wLCBrMSwgazIsIGIxLCBiMiwgeCwgeVxuICAgIGlmIChMMlAxLnggPT09IEwyUDIueCkge1xuICAgICAgdGVtcCA9IEwyUDFcbiAgICAgIEwyUDEgPSBMMVAxXG4gICAgICBMMVAxID0gdGVtcFxuICAgICAgdGVtcCA9IEwyUDJcbiAgICAgIEwyUDIgPSBMMVAyXG4gICAgICBMMVAyID0gdGVtcFxuICAgIH1cbiAgICBpZiAoTDFQMS54ID09PSBMMVAyLngpIHtcbiAgICAgIGsyID0gKEwyUDIueSAtIEwyUDEueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgICAgYjIgPSAoTDJQMi54ICogTDJQMS55IC0gTDJQMS54ICogTDJQMi55KSAvIChMMlAyLnggLSBMMlAxLngpXG4gICAgICB4ID0gTDFQMS54XG4gICAgICB5ID0geCAqIGsyICsgYjJcbiAgICAgIHJldHVybiBuZXcgUG9pbnQoeCwgeSlcbiAgICB9IGVsc2Uge1xuICAgICAgazEgPSAoTDFQMi55IC0gTDFQMS55KSAvIChMMVAyLnggLSBMMVAxLngpXG4gICAgICBiMSA9IChMMVAyLnggKiBMMVAxLnkgLSBMMVAxLnggKiBMMVAyLnkpIC8gKEwxUDIueCAtIEwxUDEueClcbiAgICAgIGsyID0gKEwyUDIueSAtIEwyUDEueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgICAgYjIgPSAoTDJQMi54ICogTDJQMS55IC0gTDJQMS54ICogTDJQMi55KSAvIChMMlAyLnggLSBMMlAxLngpXG4gICAgICB4ID0gKGIxIC0gYjIpIC8gKGsyIC0gazEpXG4gICAgICB5ID0geCAqIGsxICsgYjFcbiAgICAgIHJldHVybiBuZXcgUG9pbnQoeCwgeSlcbiAgICB9XG4gIH0sXG4gICAgLy9HZXQgcG9pbnQgYW5kIGNoZWNrIHRoYXQgcG9pbnQgYmVsb25nIHRvIHNlZ21lbnQgb2YgdGhlIGxpbmVcbiAgICAvLyBpZiBub3QgLSByZXR1cm4gdGhlIG5lYXJlc3QgcG9pbnQgb2Ygc2VnbWVudFxuICBib3VuZFRvU2VnbWVudDogZnVuY3Rpb24oTFAxLCBMUDIsIFApIHtcbiAgICBsZXQgeCwgeVxuICAgIHggPSBHZW9tZXRyeS5ib3VuZChNYXRoLm1pbihMUDEueCwgTFAyLngpLCBNYXRoLm1heChMUDEueCwgTFAyLngpLCBQLngpXG4gICAgaWYgKHggIT09IFAueCkge1xuICAgICAgeSA9ICh4ID09PSBMUDEueCkgPyBMUDEueSA6IExQMi55XG4gICAgICBQID0gbmV3IFBvaW50KHgsIHkpXG4gICAgfVxuXG4gICAgeSA9IEdlb21ldHJ5LmJvdW5kKE1hdGgubWluKExQMS55LCBMUDIueSksIE1hdGgubWF4KExQMS55LCBMUDIueSksIFAueSlcbiAgICBpZiAoeSAhPT0gUC55KSB7XG4gICAgICB4ID0gKHkgPT09IExQMS55KSA/IExQMS54IDogTFAyLnhcbiAgICAgIFAgPSBuZXcgUG9pbnQoeCwgeSlcbiAgICB9XG5cbiAgICByZXR1cm4gUFxuICB9LFxuICBib3VuZFRvTGluZTogZnVuY3Rpb24oQSwgQiwgUCkge1xuICAgIGNvbnN0IEFQID0gbmV3IFBvaW50KFAueCAtIEEueCwgUC55IC0gQS55KSxcbiAgICAgIEFCID0gbmV3IFBvaW50KEIueCAtIEEueCwgQi55IC0gQS55KSxcbiAgICAgIGFiMiA9IEFCLnggKiBBQi54ICsgQUIueSAqIEFCLnksXG4gICAgICBhcF9hYiA9IEFQLnggKiBBQi54ICsgQVAueSAqIEFCLnksXG4gICAgICB0ID0gYXBfYWIgLyBhYjJcbiAgICByZXR1cm4gbmV3IFBvaW50KEEueCArIEFCLnggKiB0LCBBLnkgKyBBQi55ICogdClcbiAgfSxcbiAgZ2V0UG9pbnRJbkxpbmU6IGZ1bmN0aW9uKExQMSwgTFAyLCBwZXJjZW50KSB7XG4gICAgY29uc3QgZHggPSBMUDIueCAtIExQMS54LCBkeSA9IExQMi55IC0gTFAxLnlcbiAgICByZXR1cm4gbmV3IFBvaW50KExQMS54ICsgcGVyY2VudCAqIGR4LCBMUDEueSArIHBlcmNlbnQgKiBkeSlcbiAgfSxcbiAgZ2V0UG9pbnRJbkxpbmVCeUxlbmdodDogZnVuY3Rpb24oTFAxLCBMUDIsIGxlbmdodCkge1xuICAgIGNvbnN0IGR4ID0gTFAyLnggLSBMUDEueCwgZHkgPSBMUDIueSAtIExQMS55LCBwZXJjZW50ID0gbGVuZ2h0IC8gR2VvbWV0cnkuZGlzdGFuY2UoTFAxLCBMUDIpXG4gICAgcmV0dXJuIG5ldyBQb2ludChMUDEueCArIHBlcmNlbnQgKiBkeCwgTFAxLnkgKyBwZXJjZW50ICogZHkpXG4gIH0sXG4gIGNyZWF0ZVJlY3RhbmdsZUZyb21FbGVtZW50OiBmdW5jdGlvbihlbCwgcGFyZW50LCBpc0NvbnRlbnRCb3hTaXplLCBpc0NvbnNpZGVyVHJhbnNsYXRlKSB7XG4gICAgY29uc3Qgc2l6ZSA9IHRoaXMuZ2V0U2l6ZU9mRWxlbWVudChlbCwgaXNDb250ZW50Qm94U2l6ZSlcbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZSh0aGlzLmdldE9mZnNldChlbCwgcGFyZW50IHx8IGVsLnBhcmVudE5vZGUsIGlzQ29uc2lkZXJUcmFuc2xhdGUpLCBzaXplKVxuICB9LFxuICBnZXRTaXplT2ZFbGVtZW50OiBmdW5jdGlvbihlbCwgaXNDb250ZW50Qm94U2l6ZSkge1xuICAgIGxldCB3aWR0aCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKVsnd2lkdGgnXSksIGhlaWdodCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKVsnaGVpZ2h0J10pXG4gICAgaWYgKCFpc0NvbnRlbnRCb3hTaXplKSB7XG4gICAgICB3aWR0aCArPSB1dGlsLmdldFN1bVZhbHVlT2ZTdHlsZVJ1bGUoZWwsIFsncGFkZGluZy1sZWZ0JywgJ3BhZGRpbmctcmlnaHQnLCAnYm9yZGVyLWxlZnQtd2lkdGgnLCAnYm9yZGVyLXJpZ2h0LXdpZHRoJ10pXG4gICAgICBoZWlnaHQgKz0gdXRpbC5nZXRTdW1WYWx1ZU9mU3R5bGVSdWxlKGVsLCBbJ3BhZGRpbmctdG9wJywgJ3BhZGRpbmctYm90dG9tJywgJ2JvcmRlci10b3Atd2lkdGgnLCAnYm9yZGVyLWJvdHRvbS13aWR0aCddKVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFBvaW50KHdpZHRoLCBoZWlnaHQpXG4gIH0sXG4gIGdldE9mZnNldDogZnVuY3Rpb24oZWwsIHBhcmVudCkge1xuICAgIGNvbnN0IGVsUmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLCBwYXJlbnRSZWN0ID0gcGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgcmV0dXJuIG5ldyBQb2ludChlbFJlY3QubGVmdCAtIHBhcmVudFJlY3QubGVmdCwgZWxSZWN0LnRvcCAtIHBhcmVudFJlY3QudG9wKVxuICB9LFxuICBnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW06IGZ1bmN0aW9uKGFuZ2xlLCBsZW5ndGgsIGNlbnRlcikge1xuICAgIGNlbnRlciA9IGNlbnRlciB8fCBuZXcgUG9pbnQoMCwgMClcbiAgICByZXR1cm4gY2VudGVyLmFkZChuZXcgUG9pbnQobGVuZ3RoICogTWF0aC5jb3MoYW5nbGUpLCBsZW5ndGggKiBNYXRoLnNpbihhbmdsZSkpKVxuICB9LFxuICBhZGRQb2ludFRvQm91bmRQb2ludHM6IGZ1bmN0aW9uKGJvdW5kcG9pbnRzLCBwb2ludCwgaXNSaWdodCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGJvdW5kcG9pbnRzLmZpbHRlcihmdW5jdGlvbihiUG9pbnQpIHtcbiAgICAgIHJldHVybiAgYlBvaW50LnkgPiBwb2ludC55IHx8IChpc1JpZ2h0ID8gYlBvaW50LnggPCBwb2ludC54IDogYlBvaW50LnggPiBwb2ludC54KVxuICAgIH0pXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHBvaW50LnkgPCByZXN1bHRbaV0ueSkge1xuICAgICAgICByZXN1bHQuc3BsaWNlKGksIDAsIHBvaW50KVxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC5wdXNoKHBvaW50KVxuICAgIHJldHVybiByZXN1bHRcbiAgfSxcbiAgZ2V0QW5nbGU6IGZ1bmN0aW9uKHAxLCBwMikge1xuICAgIGNvbnN0IGRpZmYgPSBwMi5zdWIocDEpXG4gICAgcmV0dXJuIHRoaXMubm9ybWFsaXplQW5nbGUoTWF0aC5hdGFuMihkaWZmLnksIGRpZmYueCkpXG4gIH0sXG4gIHRvUmFkaWFuOiBmdW5jdGlvbihhbmdsZSkge1xuICAgIHJldHVybiAoKGFuZ2xlICUgMzYwKSAqIE1hdGguUEkgLyAxODApXG4gIH0sXG4gIHRvRGVncmVlOiBmdW5jdGlvbihhbmdsZSkge1xuICAgIHJldHVybiAoYW5nbGUgKiAxODAgLyBNYXRoLlBJKSAlIDM2MFxuICB9LFxuICBib3VuZEFuZ2xlOiBmdW5jdGlvbihtaW4sIG1heCwgdmFsKSB7XG4gICAgbGV0IGRtaW4sIGRtYXhcbiAgICBpZiAobWluIDwgbWF4ICYmIHZhbCA+IG1pbiAmJiB2YWwgPCBtYXgpIHtcbiAgICAgIHJldHVybiB2YWxcbiAgICB9IGVsc2UgaWYgKG1heCA8IG1pbiAmJiAodmFsIDwgbWF4IHx8IHZhbCA+IG1pbikpIHtcbiAgICAgIHJldHVybiB2YWxcbiAgICB9IGVsc2Uge1xuICAgICAgZG1pbiA9IHRoaXMuZ2V0QW5nbGVEaWZmKG1pbiwgdmFsKVxuICAgICAgZG1heCA9IHRoaXMuZ2V0QW5nbGVEaWZmKG1heCwgdmFsKVxuICAgICAgaWYgKGRtaW4gPCBkbWF4KSB7XG4gICAgICAgIHJldHVybiBtaW5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBtYXhcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGdldE5lYXJlc3RBbmdsZTogZnVuY3Rpb24oYXJyLCBhbmdsZSkge1xuICAgIGxldCBpLCB0ZW1wLCBkaWZmID0gTWF0aC5QSSAqIDIsIHZhbHVlXG4gICAgZm9yIChpID0gMDsgaSA8IGFyci5sZW5ndGg7aSsrKSB7XG4gICAgICB0ZW1wID0gR2VvbWV0cnkuZ2V0QW5nbGVEaWZmKGFycltpXSwgYW5nbGUpXG4gICAgICBpZiAoZGlmZiA8IHRlbXApIHtcbiAgICAgICAgZGlmZiA9IHRlbXBcbiAgICAgICAgdmFsdWUgPSBhcnJbaV1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlXG4gIH0sXG4gIGdldEFuZ2xlRGlmZjogZnVuY3Rpb24oYWxwaGEsIGJldGEpIHtcbiAgICBjb25zdCBtaW5BbmdsZSA9IE1hdGgubWluKGFscGhhLCBiZXRhKSxcbiAgICAgIG1heEFuZ2xlID0gIE1hdGgubWF4KGFscGhhLCBiZXRhKVxuICAgIHJldHVybiBNYXRoLm1pbihtYXhBbmdsZSAtIG1pbkFuZ2xlLCBtaW5BbmdsZSArIE1hdGguUEkqMiAtIG1heEFuZ2xlKVxuICB9LFxuICBub3JtYWxpemVBbmdsZTogZnVuY3Rpb24odmFsKSB7XG4gICAgd2hpbGUgKHZhbCA8IDApIHtcbiAgICAgIHZhbCArPSAyICogTWF0aC5QSVxuICAgIH1cbiAgICB3aGlsZSAodmFsID4gMiAqIE1hdGguUEkpIHtcbiAgICAgIHZhbCAtPSAyICogTWF0aC5QSVxuICAgIH1cbiAgICByZXR1cm4gdmFsXG4gIH1cbn1cblxuZXhwb3J0IHsgUG9pbnQsIFJlY3RhbmdsZSwgR2VvbWV0cnkgfVxuIiwiJ3VzZSBzdHJpY3QnXG5pbXBvcnQgeyBHZW9tZXRyeSwgUG9pbnQgfSBmcm9tICcuL2dlb21ldHJ5J1xuXG5jb25zdCBwb3NpdGlvblR5cGUgPSB7XG4gIG5vdENyb3NzaW5nOiAwLFxuICBmbG9hdExlZnQ6IDEsXG4gIGZsb2F0UmlnaHQ6IDJcbn1cblxuZnVuY3Rpb24gcG9zaXRpb25GYWN0b3J5KHR5cGUpIHtcbiAgc3dpdGNoICh0eXBlKSB7XG4gIGNhc2UgcG9zaXRpb25UeXBlLm5vdENyb3NzaW5nOlxuICAgIHJldHVybiBmdW5jdGlvbihyZWN0YW5nbGUsIF9vcHRpb25zKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24ocmVjdGFuZ2xlTGlzdCwgaW5kZXhlc09mTmV3cykge1xuICAgICAgICBjb25zdCBib3VuZFJlY3QgPSB0eXBlb2YgcmVjdGFuZ2xlID09PSAnZnVuY3Rpb24nID8gcmVjdGFuZ2xlKCkgOiByZWN0YW5nbGUsXG4gICAgICAgICAgc3RhdGljUmVjdGFuZ2xlSW5kZXhlcyA9IHJlY3RhbmdsZUxpc3QucmVkdWNlKGZ1bmN0aW9uKGluZGV4ZXMsIF9yZWN0LCBpbmRleCkge1xuICAgICAgICAgICAgaWYgKGluZGV4ZXNPZk5ld3MuaW5kZXhPZihpbmRleCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgIGluZGV4ZXMucHVzaChpbmRleClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBpbmRleGVzXG4gICAgICAgICAgfSwgW10pXG5cbiAgICAgICAgaW5kZXhlc09mTmV3cy5mb3JFYWNoKGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICAgICAgbGV0IHJlY3QgPSByZWN0YW5nbGVMaXN0W2luZGV4XSwgcmVtb3ZhYmxlID0gZmFsc2VcbiAgICAgICAgICBzdGF0aWNSZWN0YW5nbGVJbmRleGVzLmZvckVhY2goZnVuY3Rpb24oaW5kZXhPZlN0YXRpYykge1xuICAgICAgICAgICAgY29uc3Qgc3RhdGljUmVjdCA9IHJlY3RhbmdsZUxpc3RbaW5kZXhPZlN0YXRpY11cbiAgICAgICAgICAgIHJlY3QgPSBzdGF0aWNSZWN0Lm1vdmVUb0JvdW5kKHJlY3QpXG4gICAgICAgICAgfSlcbiAgICAgICAgICByZW1vdmFibGUgPSBzdGF0aWNSZWN0YW5nbGVJbmRleGVzLnNvbWUoZnVuY3Rpb24oaW5kZXhPZlN0YXRpYykge1xuICAgICAgICAgICAgY29uc3Qgc3RhdGljUmVjdCA9IHJlY3RhbmdsZUxpc3RbaW5kZXhPZlN0YXRpY11cbiAgICAgICAgICAgIHJldHVybiAgISFzdGF0aWNSZWN0LmFuZChyZWN0KVxuICAgICAgICAgIH0pIHx8IHJlY3QuYW5kKGJvdW5kUmVjdCkuZ2V0U3F1YXJlKCkgIT09IHJlY3QuZ2V0U3F1YXJlKClcbiAgICAgICAgICBpZiAocmVtb3ZhYmxlKSB7XG4gICAgICAgICAgICByZWN0LnJlbW92YWJsZSA9IHRydWVcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RhdGljUmVjdGFuZ2xlSW5kZXhlcy5wdXNoKGluZGV4KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHJlY3RhbmdsZUxpc3RcbiAgICAgIH1cbiAgICB9XG4gIGNhc2UgcG9zaXRpb25UeXBlLmZsb2F0TGVmdDpcbiAgICByZXR1cm4gZnVuY3Rpb24ocmVjdGFuZ2xlLCBvcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIHBhZGRpbmdUb3BMZWZ0OiBuZXcgUG9pbnQoMCwgMCksXG4gICAgICAgIHBhZGRpbmdCb3R0b21SaWdodDogbmV3IFBvaW50KDAsIDApLFxuICAgICAgICB5R2FwQmV0d2VlbkRyYWdnYWJsZXM6IDAsXG4gICAgICAgIHJlbW92YWJsZTogdHJ1ZVxuICAgICAgfSwgb3B0aW9ucylcblxuICAgICAgcmV0dXJuIGZ1bmN0aW9uKHJlY3RhbmdsZUxpc3QsIF9pbmRleGVzT2ZOZXdzKSB7XG4gICAgICAgIGNvbnN0IGJvdW5kUmVjdCA9IHR5cGVvZiByZWN0YW5nbGUgPT09ICdmdW5jdGlvbicgPyByZWN0YW5nbGUoKSA6IHJlY3RhbmdsZVxuICAgICAgICBjb25zdCByZWN0UDIgPSBib3VuZFJlY3QuZ2V0UDIoKVxuICAgICAgICBsZXQgYm91bmRhcnlQb2ludHMgPSBbYm91bmRSZWN0LnBvc2l0aW9uXVxuICAgICAgICByZWN0YW5nbGVMaXN0LmZvckVhY2goZnVuY3Rpb24ocmVjdCkge1xuICAgICAgICAgIGxldCBwb3NpdGlvbiwgaXNWYWxpZCA9IGZhbHNlXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib3VuZGFyeVBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcG9zaXRpb24gPSAobmV3IFBvaW50KGJvdW5kYXJ5UG9pbnRzW2ldLngsIGkgPiAwID8gKGJvdW5kYXJ5UG9pbnRzW2kgLSAxXS55ICsgb3B0aW9ucy55R2FwQmV0d2VlbkRyYWdnYWJsZXMpIDogYm91bmRSZWN0LnBvc2l0aW9uLnkpKS5hZGQob3B0aW9ucy5wYWRkaW5nVG9wTGVmdClcbiAgICAgICAgICAgIGlzVmFsaWQgPSAocG9zaXRpb24ueCArIHJlY3Quc2l6ZS54IDwgcmVjdFAyLngpXG4gICAgICAgICAgICBpZiAoaXNWYWxpZCkge1xuICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gKG5ldyBQb2ludChib3VuZFJlY3QucG9zaXRpb24ueCwgYm91bmRhcnlQb2ludHNbYm91bmRhcnlQb2ludHMubGVuZ3RoIC0gMV0ueSArIG9wdGlvbnMueUdhcEJldHdlZW5EcmFnZ2FibGVzKSkuYWRkKG9wdGlvbnMucGFkZGluZ1RvcExlZnQpXG4gICAgICAgICAgfVxuICAgICAgICAgIHJlY3QucG9zaXRpb24gPSBwb3NpdGlvblxuICAgICAgICAgIGlmIChvcHRpb25zLnJlbW92YWJsZSAmJiByZWN0LmdldFAzKCkueSA+IGJvdW5kUmVjdC5nZXRQMygpLnkpIHtcbiAgICAgICAgICAgIHJlY3QucmVtb3ZhYmxlID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBib3VuZGFyeVBvaW50cyA9IEdlb21ldHJ5LmFkZFBvaW50VG9Cb3VuZFBvaW50cyhib3VuZGFyeVBvaW50cywgcmVjdC5nZXRQMygpLmFkZChvcHRpb25zLnBhZGRpbmdCb3R0b21SaWdodCkpXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiByZWN0YW5nbGVMaXN0XG4gICAgICB9XG4gICAgfVxuICBjYXNlIHBvc2l0aW9uVHlwZS5mbG9hdFJpZ2h0OlxuICAgIHJldHVybiBmdW5jdGlvbihyZWN0YW5nbGUsIG9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaW5nKHtcbiAgICAgICAgcGFkZGluZ1RvcFJpZ2h0OiBuZXcgUG9pbnQoNSwgNSksXG4gICAgICAgIHBhZGRpbmdCb3R0b21MZWZ0OiBuZXcgUG9pbnQoMCwgMCksXG4gICAgICAgIHJlbW92YWJsZTogdHJ1ZVxuICAgICAgfSwgb3B0aW9ucylcblxuICAgICAgY29uc3QgcGFkZGluZ1RvcE5lZ1JpZ2h0ID0gbmV3IFBvaW50KC1vcHRpb25zLnBhZGRpbmdUb3BSaWdodC54LCBvcHRpb25zLnBhZGRpbmdUb3BSaWdodC55KVxuICAgICAgY29uc3QgcGFkZGluZ0JvdHRvbU5lZ0xlZnQgPSBuZXcgUG9pbnQoLW9wdGlvbnMucGFkZGluZ0JvdHRvbUxlZnQueCwgb3B0aW9ucy5wYWRkaW5nQm90dG9tTGVmdC55KVxuICAgICAgcmV0dXJuIGZ1bmN0aW9uKHJlY3RhbmdsZUxpc3QsIF9pbmRleGVzT2ZOZXdzKSB7XG4gICAgICAgIGNvbnN0IGJvdW5kUmVjdCA9IHR5cGVvZiByZWN0YW5nbGUgPT09ICdmdW5jdGlvbicgPyByZWN0YW5nbGUoKSA6IHJlY3RhbmdsZVxuICAgICAgICBsZXQgYm91bmRhcnlQb2ludHMgPSBbYm91bmRSZWN0LmdldFJpZ2h0VG9wUG9pbnQoKV1cbiAgICAgICAgcmVjdGFuZ2xlTGlzdC5mb3JFYWNoKGZ1bmN0aW9uKHJlY3QsIF9pbmRleCkge1xuICAgICAgICAgIGxldCBwb3NpdGlvbiwgaXNWYWxpZCA9IGZhbHNlXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib3VuZGFyeVBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcG9zaXRpb24gPSAobmV3IFBvaW50KGJvdW5kYXJ5UG9pbnRzW2ldLnggLSByZWN0LnNpemUueCwgaSA+IDAgPyBib3VuZGFyeVBvaW50c1tpIC0gMV0ueSA6IGJvdW5kUmVjdC5wb3NpdGlvbi55KSkuYWRkKHBhZGRpbmdUb3BOZWdSaWdodClcbiAgICAgICAgICAgIGlzVmFsaWQgPSAocG9zaXRpb24ueCA+IHJlY3QucG9zaXRpb24ueClcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICAgICAgcG9zaXRpb24gPSBuZXcgUG9pbnQoYm91bmRSZWN0LmdldFAyKCkueCwgYm91bmRhcnlQb2ludHNbYm91bmRhcnlQb2ludHMubGVuZ3RoIC0gMV0ueSlcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVjdC5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgICAgICAgaWYgKG9wdGlvbnMucmVtb3ZhYmxlICYmIHJlY3QuZ2V0TGVmdEJvdHRvbVBvaW50KCkueSA+IGJvdW5kUmVjdC5nZXRQNCgpLnkpIHtcbiAgICAgICAgICAgIHJlY3QucmVtb3ZhYmxlID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBib3VuZGFyeVBvaW50cyA9IEdlb21ldHJ5LmFkZFBvaW50VG9Cb3VuZFBvaW50cyhib3VuZGFyeVBvaW50cywgcmVjdC5nZXRQNCgpLmFkZChwYWRkaW5nQm90dG9tTmVnTGVmdCksIHRydWUpXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiByZWN0YW5nbGVMaXN0XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHNvcnRpbmdGYWN0b3J5KHR5cGUpIHtcbiAgc3dpdGNoICh0eXBlKSB7XG4gIGNhc2UgcG9zaXRpb25UeXBlLm5vdENyb3NzaW5nOlxuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihvbGRPYmpzTGlzdCwgbmV3T2JqcywgaW5kZXhPZk5ld3MpIHtcbiAgICAgICAgY29uc3Qgb2Jqc0xpc3QgPSBvbGRPYmpzTGlzdC5jb25jYXQobmV3T2JqcylcbiAgICAgICAgbmV3T2Jqcy5mb3JFYWNoKGZ1bmN0aW9uKG9iaikge1xuICAgICAgICAgIGluZGV4T2ZOZXdzLnB1c2gob2Jqc0xpc3QuaW5kZXhPZihvYmopKVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gb2Jqc0xpc3RcbiAgICAgIH1cbiAgICB9XG4gIGNhc2UgcG9zaXRpb25UeXBlLmZsb2F0TGVmdDpcbiAgY2FzZSBwb3NpdGlvblR5cGUuZmxvYXRSaWdodDpcbiAgICByZXR1cm4gZnVuY3Rpb24ocmFkaXVzLCBnZXREaXN0YW5jZSwgb3B0aW9ucykge1xuICAgICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBnZXRQb3NpdGlvbjogZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgICAgcmV0dXJuIG9iai5wb3NpdGlvblxuICAgICAgICB9XG4gICAgICB9LCBvcHRpb25zKVxuXG4gICAgICByZXR1cm4gZnVuY3Rpb24ob2xkT2Jqc0xpc3QsIG5ld09ianMsIGluZGV4T2ZOZXdzKSB7XG4gICAgICAgIGNvbnN0IG5ld0xpc3QgPSBvbGRPYmpzTGlzdC5jb25jYXQoKVxuICAgICAgICBjb25zdCBsaXN0T2xkUG9zaXRpb24gPSBvbGRPYmpzTGlzdC5tYXAob3B0aW9ucy5nZXRQb3NpdGlvbilcbiAgICAgICAgbmV3T2Jqcy5mb3JFYWNoKGZ1bmN0aW9uKG5ld09iaikge1xuICAgICAgICAgIGxldCBpbmRleCA9IEdlb21ldHJ5LmluZGV4T2ZOZWFyUG9pbnQobGlzdE9sZFBvc2l0aW9uLCBvcHRpb25zLmdldFBvc2l0aW9uKG5ld09iaiksIHJhZGl1cywgZ2V0RGlzdGFuY2UpXG4gICAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgaW5kZXggPSBuZXdMaXN0Lmxlbmd0aFxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbmRleCA9IG5ld0xpc3QuaW5kZXhPZihvbGRPYmpzTGlzdFtpbmRleF0pXG4gICAgICAgICAgfVxuICAgICAgICAgIG5ld0xpc3Quc3BsaWNlKGluZGV4LCAwLCBuZXdPYmopXG4gICAgICAgIH0pXG4gICAgICAgIG5ld09ianMuZm9yRWFjaChmdW5jdGlvbihuZXdPYmopIHtcbiAgICAgICAgICBpbmRleE9mTmV3cy5wdXNoKG5ld0xpc3QuaW5kZXhPZihuZXdPYmopKVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gbmV3TGlzdFxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgeyBwb3NpdGlvblR5cGUsIHNvcnRpbmdGYWN0b3J5LCBwb3NpdGlvbkZhY3RvcnkgfVxuIiwiaW1wb3J0IHsgcmVtb3ZlSXRlbSB9IGZyb20gJy4vdXRpbCdcbmltcG9ydCBFdmVudCBmcm9tICcuL2V2ZW50J1xuaW1wb3J0IHsgRHJhZ2dhYmxlIH0gZnJvbSAnLi9kcmFnZ2FibGUnXG5pbXBvcnQgeyBUYXJnZXQgfSBmcm9tICcuL3RhcmdldCdcblxuY29uc3QgRHJhZ2VlID0geyBFdmVudCB9IC8vdG9kbyByZW1vdmUgYWZ0ZXIgcmVmYWN0b3JlXG5cbmNvbnN0IHNjb3BlcyA9IFtdXG5cbmNsYXNzIFNjb3BlIHtcbiAgY29uc3RydWN0b3IoZHJhZ2dhYmxlcywgdGFyZ2V0cywgb3B0aW9ucz17fSkge1xuICAgIHNjb3Blcy5mb3JFYWNoKChzY29wZSkgPT4ge1xuICAgICAgaWYgKGRyYWdnYWJsZXMpIHtcbiAgICAgICAgZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgICAgICByZW1vdmVJdGVtKHNjb3BlLmRyYWdnYWJsZXMsIGRyYWdnYWJsZSlcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgaWYgKHRhcmdldHMpIHtcbiAgICAgICAgdGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHtcbiAgICAgICAgICByZW1vdmVJdGVtKHNjb3BlLnRhcmdldHMsIHRhcmdldClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gZHJhZ2dhYmxlcyB8fCBbXVxuICAgIHRoaXMudGFyZ2V0cyA9IHRhcmdldHMgfHwgW11cbiAgICBzY29wZXMucHVzaCh0aGlzKVxuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgIHRpbWVFbmQ6IChvcHRpb25zLnRpbWVFbmQpIHx8IDQwMFxuICAgIH1cblxuICAgIHRoaXMub25DaGFuZ2UgPSBuZXcgRHJhZ2VlLkV2ZW50KHRoaXMpXG4gICAgaWYgKG9wdGlvbnMub25DaGFuZ2UpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UuYWRkKG9wdGlvbnMub25DaGFuZ2UpXG4gICAgfVxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5vbkVuZC5hZGQoKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5vbkVuZChkcmFnZ2FibGUpXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBhZGREcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxuICAgIGRyYWdnYWJsZS5vbkVuZC51bnNoaWZ0KCgpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLm9uRW5kKGRyYWdnYWJsZSlcbiAgICB9KVxuICB9XG5cbiAgYWRkVGFyZ2V0KHRhcmdldCkge1xuICAgIHRoaXMudGFyZ2V0cy5wdXNoKHRhcmdldClcbiAgfVxuXG4gIG9uRW5kKGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IHNob3RUYXJnZXRzID0gdGhpcy50YXJnZXRzLmZpbHRlcigodGFyZ2V0KSA9PiB7XG4gICAgICByZXR1cm4gdGFyZ2V0LmRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMVxuICAgIH0pLmZpbHRlcigodGFyZ2V0KSA9PiB7XG4gICAgICByZXR1cm4gdGFyZ2V0LmNhdGNoRHJhZ2dhYmxlKGRyYWdnYWJsZSlcbiAgICB9KS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICByZXR1cm4gYS5nZXRSZWN0YW5nbGUoKS5nZXRTcXVhcmUoKSAtIGIuZ2V0UmVjdGFuZ2xlKCkuZ2V0U3F1YXJlKClcbiAgICB9KVxuXG4gICAgaWYgKHNob3RUYXJnZXRzLmxlbmd0aCkge1xuICAgICAgc2hvdFRhcmdldHNbMF0ub25FbmQoZHJhZ2dhYmxlKVxuICAgIH0gZWxzZSBpZiAoZHJhZ2dhYmxlLnRhcmdldHMubGVuZ3RoKSB7XG4gICAgICBkcmFnZ2FibGUubW92ZShkcmFnZ2FibGUuaW5pdFBvc2l0aW9uLCB0aGlzLm9wdGlvbnMudGltZUVuZCwgdHJ1ZSwgdHJ1ZSlcbiAgICB9XG4gICAgdGhpcy5vbkNoYW5nZS5maXJlKClcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy50YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4gdGFyZ2V0LnJlc2V0KCkpXG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5yZWZyZXNoKCkpXG4gICAgdGhpcy50YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4gdGFyZ2V0LnJlZnJlc2goKSlcbiAgfVxuXG4gIGdldCBwb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0cy5tYXAoKHRhcmdldCkgPT4ge1xuICAgICAgcmV0dXJuIHRhcmdldC5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHRoaXMuZHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkpXG4gICAgfSlcbiAgfVxuXG4gIHNldCBwb3NpdGlvbnMocG9zaXRpb25zKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9ICd3cm9uZyBhcnJheSBsZW5ndGgnXG4gICAgaWYgKHBvc2l0aW9ucy5sZW5ndGggPT09IHRoaXMudGFyZ2V0cy5sZW5ndGgpIHtcbiAgICAgIHRoaXMudGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHRhcmdldC5yZXNldCgpKVxuXG4gICAgICBwb3NpdGlvbnMuZm9yRWFjaCgodGFyZ2V0SW5kZXhlcywgaSkgPT4ge1xuICAgICAgICB0YXJnZXRJbmRleGVzLmZvckVhY2goKGluZGV4KSA9PiB7XG4gICAgICAgICAgdGhpcy50YXJnZXRzW2ldLmFkZCh0aGlzLmRyYWdnYWJsZXNbaW5kZXhdKVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbWVzc2FnZVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBkZWZhdWx0U2NvcGUgPSBuZXcgU2NvcGUoKVxuXG5mdW5jdGlvbiBzY29wZShmbikge1xuICBjb25zdCBjdXJyZW50U2NvcGUgPSBuZXcgU2NvcGUoKVxuICBjb25zdCBhZGREcmFnZ2FibGVUb1Njb3BlID0gZnVuY3Rpb24oZHJhZ2dhYmxlKSB7XG4gICAgY3VycmVudFNjb3BlLmFkZERyYWdnYWJsZShkcmFnZ2FibGUpXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuICBjb25zdCBhZGRUYXJnZXRUb1Njb3BlID0gZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgY3VycmVudFNjb3BlLmFkZFRhcmdldCh0YXJnZXQpXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIERyYWdnYWJsZS5vbkNyZWF0ZS5hZGQoYWRkRHJhZ2dhYmxlVG9TY29wZSlcbiAgVGFyZ2V0Lm9uQ3JlYXRlLmFkZChhZGRUYXJnZXRUb1Njb3BlKVxuICBmbi5jYWxsKClcbiAgRHJhZ2dhYmxlLm9uQ3JlYXRlLnJlbW92ZShhZGREcmFnZ2FibGVUb1Njb3BlKVxuICBUYXJnZXQub25DcmVhdGUucmVtb3ZlKGFkZFRhcmdldFRvU2NvcGUpXG4gIHJldHVybiBjdXJyZW50U2NvcGVcbn1cblxuZnVuY3Rpb24gc2NvcGVGYWN0b3J5KHBhcmVudEVsZW1lbnQsIGRyYWdnYWJsZUVsZW1lbnRzLCB0YXJnZXRFbGVtZW50cywgb3B0aW9ucz17fSkge1xuICBjb25zdCBkcmFnZ2FibGVPcHRpb25zID0gb3B0aW9ucy5kcmFnZ2FibGUgfHwge31cbiAgY29uc3QgdGFyZ2V0T3B0aW9ucyA9IG9wdGlvbnMudGFyZ2V0IHx8IHt9XG4gIGNvbnN0IHNjb3BlT3B0aW9ucyA9IG9wdGlvbnMuc2NvcGUgfHwge31cbiAgZHJhZ2dhYmxlT3B0aW9ucy5wYXJlbnQgPSBkcmFnZ2FibGVPcHRpb25zLnBhcmVudCB8fCBwYXJlbnRFbGVtZW50XG4gIHRhcmdldE9wdGlvbnMucGFyZW50ID0gdGFyZ2V0T3B0aW9ucy5wYXJlbnQgfHwgcGFyZW50RWxlbWVudFxuICBkcmFnZ2FibGVFbGVtZW50cyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGRyYWdnYWJsZUVsZW1lbnRzKVxuICB0YXJnZXRFbGVtZW50cyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRhcmdldEVsZW1lbnRzKVxuXG4gIGNvbnN0IGRyYWdnYWJsZXMgPSBkcmFnZ2FibGVFbGVtZW50cy5tYXAoKGVsZW1lbnQpID0+IHtcbiAgICByZXR1cm4gbmV3IERyYWdnYWJsZShlbGVtZW50LCBkcmFnZ2FibGVPcHRpb25zKVxuICB9KVxuXG4gIGNvbnN0IHRhcmdldHMgPSB0YXJnZXRFbGVtZW50cy5tYXAoKGVsZW1lbnQpID0+IHtcbiAgICByZXR1cm4gbmV3IFRhcmdldChlbGVtZW50LCBkcmFnZ2FibGVzLCB0YXJnZXRPcHRpb25zKVxuICB9KVxuICByZXR1cm4gbmV3IFNjb3BlKGRyYWdnYWJsZXMsIHRhcmdldHMsIHNjb3BlT3B0aW9ucylcbn1cblxuZXhwb3J0IHsgc2NvcGVzLCBkZWZhdWx0U2NvcGUsIFNjb3BlLCBzY29wZUZhY3RvcnksIHNjb3BlIH1cbiIsImltcG9ydCB7XG4gIGdldERlZmF1bHRQYXJlbnQsXG4gIHJlbW92ZUl0ZW0sXG4gIHJhbmdlXG59IGZyb20gJy4vdXRpbCdcblxuaW1wb3J0IEV2ZW50IGZyb20gJy4vZXZlbnQnXG5pbXBvcnQgeyBHZW9tZXRyeSB9IGZyb20gJy4vZ2VvbWV0cnknXG5pbXBvcnQgeyBwb3NpdGlvblR5cGUsIHNvcnRpbmdGYWN0b3J5LCBwb3NpdGlvbkZhY3RvcnkgfSBmcm9tICcuL3Bvc2l0aW9uaW5nJ1xuaW1wb3J0IHsgc2NvcGVzLCBkZWZhdWx0U2NvcGUgfSBmcm9tICcuL3Njb3BlJ1xuXG5jb25zdCBEcmFnZWUgPSB7IHBvc2l0aW9uVHlwZSwgIHBvc2l0aW9uRmFjdG9yeSwgc29ydGluZ0ZhY3RvcnksIHNjb3BlcywgRXZlbnQgfS8vdG9kbyByZW1vdmUgYWZ0ZXIgcmVmYWN0b3JlXG5cbmNvbnN0IHRhcmdldHMgPSBbXSxcbiAgYWRkVG9EZWZhdWx0U2NvcGUgPSBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICBkZWZhdWx0U2NvcGUuYWRkVGFyZ2V0KHRhcmdldClcbiAgfVxuXG5jbGFzcyBUYXJnZXQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBkcmFnZ2FibGVzLCBvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCB0YXJnZXQgPSB0aGlzXG4gICAgY29uc3QgcGFyZW50ID0gb3B0aW9ucy5wYXJlbnQgfHwgZ2V0RGVmYXVsdFBhcmVudChlbGVtZW50KVxuXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICB0aW1lRW5kOiAyMDAsXG4gICAgICB0aW1lRXhjYW5nZTogNDAwLFxuICAgICAgcGFyZW50OiBwYXJlbnQsXG4gICAgICBzb3J0aW5nOiBEcmFnZWUuc29ydGluZ0ZhY3RvcnkoRHJhZ2VlLnBvc2l0aW9uVHlwZS5mbG9hdExlZnQpKDgwLCBHZW9tZXRyeS50cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5KHsgeDogMSwgeTogNCB9KSksXG4gICAgICBwb3NpdGlvbmluZzogRHJhZ2VlLnBvc2l0aW9uRmFjdG9yeShEcmFnZWUucG9zaXRpb25UeXBlLmZsb2F0TGVmdCkodGhpcy5nZXRSZWN0YW5nbGUuYmluZCh0aGlzKSwgeyByZW1vdmFibGU6IHRydWUgfSlcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGFyZ2V0cy5wdXNoKHRoaXMpXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUudGFyZ2V0cy5wdXNoKHRhcmdldCkpXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gZHJhZ2dhYmxlc1xuICAgIHRoaXMub25BZGQgPSBuZXcgRHJhZ2VlLkV2ZW50KHRoaXMpXG4gICAgdGhpcy5iZWZvcmVBZGQgPSBuZXcgRHJhZ2VlLkV2ZW50KHRoaXMpXG4gICAgdGhpcy5vblJlbW92ZSA9IG5ldyBEcmFnZWUuRXZlbnQodGhpcylcblxuICAgIGlmIChvcHRpb25zLm9uUmVtb3ZlKSB7XG4gICAgICB0aGlzLm9uUmVtb3ZlLmFkZChvcHRpb25zLm9uUmVtb3ZlKVxuICAgIH1cblxuICAgIGlmIChvcHRpb25zLm9uQWRkKSB7XG4gICAgICB0aGlzLm9uQWRkLmFkZChvcHRpb25zLm9uQWRkKVxuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmJlZm9yZUFkZCkge1xuICAgICAgdGhpcy5iZWZvcmVBZGQuYWRkKG9wdGlvbnMuYmVmb3JlQWRkKVxuICAgIH1cblxuICAgIFRhcmdldC5vbkNyZWF0ZS5maXJlKHRoaXMpXG5cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBsZXQgcmVjdGFuZ2xlcywgaW5kZXhlc09mTmV3XG5cbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcyA9IHRoaXMuZHJhZ2dhYmxlcy5maWx0ZXIoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgbGV0IGVsZW1lbnQgPSBkcmFnZ2FibGUuZWxlbWVudC5wYXJlbnROb2RlXG4gICAgICB3aGlsZSAoZWxlbWVudCkge1xuICAgICAgICBpZiAoZWxlbWVudCA9PT0gdGhpcy5lbGVtZW50KSB7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlXG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9KVxuXG4gICAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmxlbmd0aCkge1xuICAgICAgaW5kZXhlc09mTmV3ID0gcmFuZ2UodGhpcy5pbm5lckRyYWdnYWJsZXMubGVuZ3RoKVxuICAgICAgcmVjdGFuZ2xlcyA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgICB9KSwgaW5kZXhlc09mTmV3KVxuICAgICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXcpXG4gICAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHRoaXMub25BZGQuZmlyZShkcmFnZ2FibGUpKVxuICAgIH1cbiAgfVxuXG4gIGdldFJlY3RhbmdsZSgpIHtcbiAgICByZXR1cm4gR2VvbWV0cnkuY3JlYXRlUmVjdGFuZ2xlRnJvbUVsZW1lbnQoXG4gICAgICB0aGlzLmVsZW1lbnQsXG4gICAgICB0aGlzLm9wdGlvbnMucGFyZW50LFxuICAgICAgdGhpcy5vcHRpb25zLmlzQ29udGVudEJveFNpemUsXG4gICAgICB0cnVlXG4gICAgKVxuICB9XG5cbiAgY2F0Y2hEcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5jYXRjaERyYWdnYWJsZSkge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5jYXRjaERyYWdnYWJsZSh0aGlzLCBkcmFnZ2FibGUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRhcmdldFJlY3RhbmdsZSA9IHRoaXMuZ2V0UmVjdGFuZ2xlKClcbiAgICAgIGNvbnN0IGRyYWdnYWJsZVNxdWFyZSA9IGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKS5nZXRTcXVhcmUoKVxuXG4gICAgICByZXR1cm4gZHJhZ2dhYmxlU3F1YXJlIDwgdGFyZ2V0UmVjdGFuZ2xlLmdldFNxdWFyZSgpXG4gICAgICAgICAgICAgICYmIHRhcmdldFJlY3RhbmdsZS5pbmNsdWRlUG9pbnQoZHJhZ2dhYmxlLmdldENlbnRlcigpKVxuICAgIH1cbiAgfVxuXG4gIGdldFBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFJlY3RhbmdsZSgpLnBvc2l0aW9uXG4gIH1cblxuICBnZXRTaXplKCkge1xuICAgIHJldHVybiB0aGlzLmdldFJlY3RhbmdsZSgpLnNpemVcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgRHJhZ2VlLnNjb3Blcy5mb3JFYWNoKChzY29wZSkgPT4gcmVtb3ZlSXRlbShzY29wZS50YXJnZXRzLCB0aGlzKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBbXSlcbiAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIFtdLCAwKVxuICB9XG5cbiAgb25FbmQoZHJhZ2dhYmxlKSB7XG4gICAgY29uc3QgbmV3RHJhZ2dhYmxlc0luZGV4ID0gW11cbiAgICBjb25zdCBpbmNsdWRlUG9pbnQgPSB0aGlzLmdldFJlY3RhbmdsZSgpLmluY2x1ZGVQb2ludChkcmFnZ2FibGUuZ2V0UG9zaXRpb24oKSlcblxuICAgIGlmICghaW5jbHVkZVBvaW50KSB7XG4gICAgICBpZiAodGhpcy5nZXRSZWN0YW5nbGUoKS5pbmNsdWRlUG9pbnQoZHJhZ2dhYmxlLmdldENlbnRlcigpKSkge1xuICAgICAgICBkcmFnZ2FibGUucG9zaXRpb24gPSBkcmFnZ2FibGUuZ2V0Q2VudGVyKCkuY2xvbmUoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5iZWZvcmVBZGQuZmlyZShkcmFnZ2FibGUpXG5cbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcyA9IHRoaXMub3B0aW9ucy5zb3J0aW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLCBbZHJhZ2dhYmxlXSwgbmV3RHJhZ2dhYmxlc0luZGV4KVxuICAgIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLm9wdGlvbnMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgbmV3RHJhZ2dhYmxlc0luZGV4LCBkcmFnZ2FibGUpXG5cbiAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIG5ld0RyYWdnYWJsZXNJbmRleClcbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMSkge1xuICAgICAgdGhpcy5hZGRSZW1vdmVPbk1vdmUoZHJhZ2dhYmxlKVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgaW5kZXhlc09mTmV3LCB0aW1lKSB7XG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuc2xpY2UoMCkuZm9yRWFjaCgoZHJhZ2dhYmxlLCBpKSA9PiB7XG4gICAgICBjb25zdCByZWN0ID0gcmVjdGFuZ2xlc1tpXSxcbiAgICAgICAgdGltZUVuZCA9IHRpbWUgfHwgdGltZSA9PT0gMCA/IHRpbWUgOiBpbmRleGVzT2ZOZXcuaW5kZXhPZihpKSAhPT0gLTEgPyB0aGlzLm9wdGlvbnMudGltZUVuZCA6IHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZVxuXG4gICAgICBpZiAocmVjdC5yZW1vdmFibGUpIHtcbiAgICAgICAgZHJhZ2dhYmxlLm1vdmUoZHJhZ2dhYmxlLmluaXRQb3NpdGlvbiwgdGltZUVuZCwgdHJ1ZSwgdHJ1ZSlcbiAgICAgICAgcmVtb3ZlSXRlbSh0aGlzLmlubmVyRHJhZ2dhYmxlcywgZHJhZ2dhYmxlKVxuXG4gICAgICAgIHRoaXMub25SZW1vdmUuZmlyZShkcmFnZ2FibGUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkcmFnZ2FibGUubW92ZShyZWN0LnBvc2l0aW9uLCB0aW1lRW5kLCB0cnVlLCB0cnVlKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBhZGQoZHJhZ2dhYmxlLCB0aW1lKSB7XG4gICAgY29uc3QgbmV3RHJhZ2dhYmxlc0luZGV4ID0gdGhpcy5pbm5lckRyYWdnYWJsZXMubGVuZ3RoXG5cbiAgICB0aGlzLmJlZm9yZUFkZC5maXJlKGRyYWdnYWJsZSlcblxuICAgIHRoaXMucHVzaElubmVyRHJhZ2dhYmxlKGRyYWdnYWJsZSlcbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgfSksIG5ld0RyYWdnYWJsZXNJbmRleCwgZHJhZ2dhYmxlKVxuXG4gICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBbbmV3RHJhZ2dhYmxlc0luZGV4XSwgdGltZSB8fCAwKVxuICAgIGlmICh0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkgIT09IC0xKSB7XG4gICAgICB0aGlzLmFkZFJlbW92ZU9uTW92ZShkcmFnZ2FibGUpXG4gICAgfVxuICB9XG5cbiAgcHVzaElubmVyRHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIGlmICh0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSk9PT0tMSkge1xuICAgICAgdGhpcy5pbm5lckRyYWdnYWJsZXMucHVzaChkcmFnZ2FibGUpXG4gICAgfVxuICB9XG5cbiAgYWRkUmVtb3ZlT25Nb3ZlKGRyYWdnYWJsZSkge1xuICAgIGRyYWdnYWJsZS5vbk1vdmUuYWRkKHRoaXMucmVtb3ZlSGFuZGxlciA9ICgpID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlKGRyYWdnYWJsZSlcbiAgICB9KVxuXG4gICAgdGhpcy5vbkFkZC5maXJlKGRyYWdnYWJsZSlcbiAgfVxuXG4gIHJlbW92ZShkcmFnZ2FibGUpIHtcbiAgICBkcmFnZ2FibGUub25Nb3ZlLnJlbW92ZSh0aGlzLnJlbW92ZUhhbmRsZXIpXG5cbiAgICBjb25zdCBpbmRleCA9IHRoaXMuaW5uZXJEcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKVxuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnNwbGljZShpbmRleCwgMSlcblxuICAgIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLm9wdGlvbnMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgW10pXG5cbiAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIFtdKVxuICAgIHRoaXMub25SZW1vdmUuZmlyZShkcmFnZ2FibGUpXG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5tb3ZlKGRyYWdnYWJsZS5pbml0UG9zaXRpb24sIDAsIHRydWUsIHRydWUpXG4gICAgICB0aGlzLm9uUmVtb3ZlLmZpcmUoZHJhZ2dhYmxlKVxuICAgIH0pXG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMgPSBbXVxuICB9XG5cbiAgZ2V0U29ydGVkRHJhZ2dhYmxlcygpIHtcbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5zbGljZSgpXG4gIH1cbn1cblxuVGFyZ2V0Lm9uQ3JlYXRlID0gbmV3IERyYWdlZS5FdmVudChUYXJnZXQsIHsgaXNSZXZlcnNlOiB0cnVlLCBpc1N0b3BPblRydWU6IHRydWUgfSlcblRhcmdldC5vbkNyZWF0ZS5hZGQoYWRkVG9EZWZhdWx0U2NvcGUpXG5cbmV4cG9ydCB7IHRhcmdldHMsIFRhcmdldCB9XG4iLCIndXNlIHN0cmljdCdcblxuZnVuY3Rpb24gZ2V0RGVmYXVsdFBhcmVudChlbGVtZW50KSB7XG4gIGxldCBwYXJlbnQgPSBlbGVtZW50LnBhcmVudE5vZGVcbiAgd2hpbGUgKHBhcmVudC5wYXJlbnROb2RlICYmIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHBhcmVudClbJ3Bvc2l0aW9uJ10gPT09ICdzdGF0aWMnKSB7XG4gICAgcGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGVcbiAgfVxuICByZXR1cm4gcGFyZW50XG59XG5cbmZ1bmN0aW9uIGdldFRvdWNoQnlJRChlbGVtZW50LCB0b3VjaElkKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudC5jaGFuZ2VkVG91Y2hlcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChlbGVtZW50LmNoYW5nZWRUb3VjaGVzW2ldLmlkZW50aWZpZXIgPT09IHRvdWNoSWQpIHtcbiAgICAgIHJldHVybiBlbGVtZW50LmNoYW5nZWRUb3VjaGVzW2ldXG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZVxufVxuXG5mdW5jdGlvbiBnZXRTdW1WYWx1ZU9mU3R5bGVSdWxlKGVsZW1lbnQsIHJ1bGVzKSB7XG4gIHJldHVybiBydWxlcy5yZWR1Y2UoZnVuY3Rpb24oc3VtLCBydWxlKSB7XG4gICAgcmV0dXJuIHN1bSArIHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpW3J1bGVdfHwwKVxuICB9LCAwKVxufVxuXG5mdW5jdGlvbiByYW5nZShzdGFydCwgc3RvcCwgc3RlcCkge1xuICBjb25zdCByZXN1bHQgPSBbXVxuICBpZiAodHlwZW9mIHN0b3AgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgc3RvcCA9IHN0YXJ0XG4gICAgc3RhcnQgPSAwXG4gIH1cbiAgaWYgKHR5cGVvZiBzdGVwID09PSAndW5kZWZpbmVkJykge1xuICAgIHN0ZXAgPSAxXG4gIH1cbiAgaWYgKChzdGVwID4gMCAmJiBzdGFydCA+PSBzdG9wKSB8fCAoc3RlcCA8IDAgJiYgc3RhcnQgPD0gc3RvcCkpIHtcbiAgICByZXR1cm4gW11cbiAgfVxuICBmb3IgKGxldCBpID0gc3RhcnQ7IHN0ZXAgPiAwID8gaSA8IHN0b3AgOiBpID4gc3RvcDsgaSArPSBzdGVwKSB7XG4gICAgcmVzdWx0LnB1c2goaSlcbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmZ1bmN0aW9uIGhhc0NsYXNzKGVsZW1lbnQsIGMpIHtcbiAgY29uc3QgcmUgPSBuZXcgUmVnRXhwKCcoXnxcXFxccyknICsgYyArICcoXFxcXHN8JCknLCAnZycpXG4gIHJldHVybiAocmUudGVzdChlbGVtZW50LmNsYXNzTmFtZSkpXG59XG5cbmZ1bmN0aW9uIGFkZENsYXNzKGVsZW1lbnQsIGMpIHtcbiAgaWYgKCFoYXNDbGFzcyhlbGVtZW50LCBjKSkge1xuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gKGVsZW1lbnQuY2xhc3NOYW1lICsgJyAnICsgYykucmVwbGFjZSgvXFxzKy9nLCAnICcpLnJlcGxhY2UoLyheIHwgJCkvZywgJycpXG4gIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoZWxlbWVudCwgYykge1xuICBjb25zdCByZSA9IG5ldyBSZWdFeHAoJyhefFxcXFxzKScgKyBjICsgJyhcXFxcc3wkKScsICdnJylcbiAgZWxlbWVudC5jbGFzc05hbWUgPSBlbGVtZW50LmNsYXNzTmFtZS5yZXBsYWNlKHJlLCAnJDEnKS5yZXBsYWNlKC9cXHMrL2csICcgJykucmVwbGFjZSgvKF4gfCAkKS9nLCAnJylcbn1cblxuZnVuY3Rpb24gcmVtb3ZlSXRlbShhcnJheSwgdmFsKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoYXJyYXlbaV0gPT09IHZhbCkge1xuICAgICAgYXJyYXkuc3BsaWNlKGksIDEpXG4gICAgICBpLS1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycmF5XG59XG5cbmNvbnN0IHV0aWwgPSB7XG4gIGdldERlZmF1bHRQYXJlbnQsXG4gIGdldFRvdWNoQnlJRCxcbiAgZ2V0U3VtVmFsdWVPZlN0eWxlUnVsZSxcbiAgcmFuZ2UsXG4gIGhhc0NsYXNzLFxuICBhZGRDbGFzcyxcbiAgcmVtb3ZlQ2xhc3MsXG4gIHJlbW92ZUl0ZW1cbn1cblxuZXhwb3J0IHtcbiAgZ2V0RGVmYXVsdFBhcmVudCxcbiAgZ2V0VG91Y2hCeUlELFxuICBnZXRTdW1WYWx1ZU9mU3R5bGVSdWxlLFxuICByYW5nZSxcbiAgaGFzQ2xhc3MsXG4gIGFkZENsYXNzLFxuICByZW1vdmVDbGFzcyxcbiAgcmVtb3ZlSXRlbVxufVxuXG5leHBvcnQgZGVmYXVsdCB1dGlsXG4iLCJmdW5jdGlvbiBzZXRTdHlsZShlbGVtZW50LCBzdHlsZSkge1xuICBzdHlsZSA9IHN0eWxlIHx8IHt9XG4gIGxldCBjc3NUZXh0ID0gJydcbiAgZm9yIChjb25zdCBrZXkgaW4gc3R5bGUpIHtcbiAgICBpZiAoc3R5bGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgY3NzVGV4dCArPSBrZXkgKyAnOiAnICsgc3R5bGVba2V5XSArICc7ICdcbiAgICB9XG4gIH1cblxuICBlbGVtZW50LnN0eWxlLmNzc1RleHQgPSBjc3NUZXh0XG59XG5cbmZ1bmN0aW9uIGFwcGVuZEZpcnN0Q2hpbGQoZWxlbWVudCwgbm9kZSkge1xuICBpZiAoZWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgZWxlbWVudC5pbnNlcnRCZWZvcmUobm9kZSwgZWxlbWVudC5maXJzdENoaWxkKVxuICB9IGVsc2Uge1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQobm9kZSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVDYW52YXMoYXJlYSwgcmVjdGFnbGUpIHtcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJylcbiAgaWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGFyZWEpLnBvc2l0aW9uID09PSAnc3RhdGljJykge1xuICAgIGFyZWEuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnXG4gIH1cblxuICBjYW52YXMuc2V0QXR0cmlidXRlKCd3aWR0aCcsIHJlY3RhZ2xlLnNpemUueCArICdweCcpXG4gIGNhbnZhcy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIHJlY3RhZ2xlLnNpemUueSArICdweCcpXG4gIHNldFN0eWxlKGNhbnZhcywge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGxlZnQ6IHJlY3RhZ2xlLnBvc2l0aW9uLnkgKyAncHgnLFxuICAgIHRvcDogcmVjdGFnbGUucG9zaXRpb24ueSArICdweCcsXG4gICAgd2lkdGg6IHJlY3RhZ2xlLnNpemUueCArICdweCcsXG4gICAgaGVpZ2h0OiByZWN0YWdsZS5zaXplLnkgKyAncHgnXG4gIH0pXG4gIGFwcGVuZEZpcnN0Q2hpbGQoYXJlYSwgY2FudmFzKVxuICByZXR1cm4gY2FudmFzXG59XG4iXSwic291cmNlUm9vdCI6IiJ9