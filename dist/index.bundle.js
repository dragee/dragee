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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
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
/* harmony import */ var _utils_range__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/range */ "./src/utils/range.js");
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
      fillStyles: Object(_utils_range__WEBPACK_IMPORTED_MODULE_1__["default"])(0, elements.length).map(function () {
        return randomColor();
      }),
      initAngles: Object(_utils_range__WEBPACK_IMPORTED_MODULE_1__["default"])(-90, 270, 360 / elements.length).map(function (angle) {
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

/***/ "./src/expandnative.js":
/*!*****************************!*\
  !*** ./src/expandnative.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*********************** 00P *************************/
var augment = function augment(receivingClass, givingClass) {
  /* only provide certain methods */
  if (arguments[2]) {
    for (var i = 2, len = arguments.length; i < len; i++) {
      receivingClass.prototype[arguments[i]] = givingClass.prototype[arguments[i]];
    }
  } else {
    for (var methodName in givingClass.prototype) {
      /* check to make sure the receiving class doesn't
         have a method of the same name as the one currently
         being processed */
      if (!receivingClass.prototype[methodName]) {
        receivingClass.prototype[methodName] = givingClass.prototype[methodName];
      }
    }
  }
};
/**************************************************/


augment(NodeList, Array, 'forEach');

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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: Draggable, Point, Rectangle, Geometry, List, listFactory, Sortable, sortableFactory, targets, Target, scopes, defaultScope, Scope, scopeFactory, scope, positionType, sortingFactory, positionFactory, spiders, Spider, arcSliders, ArcSlider, charts, Chart, listSwitcherFactory, ListSwitcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _expandnative__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./expandnative */ "./src/expandnative.js");
/* harmony import */ var _expandnative__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_expandnative__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _geometry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./geometry */ "./src/geometry.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Point", function() { return _geometry__WEBPACK_IMPORTED_MODULE_1__["Point"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Rectangle", function() { return _geometry__WEBPACK_IMPORTED_MODULE_1__["Rectangle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Geometry", function() { return _geometry__WEBPACK_IMPORTED_MODULE_1__["Geometry"]; });

/* harmony import */ var _draggable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./draggable */ "./src/draggable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Draggable", function() { return _draggable__WEBPACK_IMPORTED_MODULE_2__["Draggable"]; });

/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list */ "./src/list.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "List", function() { return _list__WEBPACK_IMPORTED_MODULE_3__["List"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "listFactory", function() { return _list__WEBPACK_IMPORTED_MODULE_3__["listFactory"]; });

/* harmony import */ var _sortable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sortable */ "./src/sortable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Sortable", function() { return _sortable__WEBPACK_IMPORTED_MODULE_4__["Sortable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sortableFactory", function() { return _sortable__WEBPACK_IMPORTED_MODULE_4__["sortableFactory"]; });

/* harmony import */ var _target__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./target */ "./src/target.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "targets", function() { return _target__WEBPACK_IMPORTED_MODULE_5__["targets"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Target", function() { return _target__WEBPACK_IMPORTED_MODULE_5__["Target"]; });

/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scope */ "./src/scope.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scopes", function() { return _scope__WEBPACK_IMPORTED_MODULE_6__["scopes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultScope", function() { return _scope__WEBPACK_IMPORTED_MODULE_6__["defaultScope"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Scope", function() { return _scope__WEBPACK_IMPORTED_MODULE_6__["Scope"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scopeFactory", function() { return _scope__WEBPACK_IMPORTED_MODULE_6__["scopeFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scope", function() { return _scope__WEBPACK_IMPORTED_MODULE_6__["scope"]; });

/* harmony import */ var _positioning__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./positioning */ "./src/positioning.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "positionType", function() { return _positioning__WEBPACK_IMPORTED_MODULE_7__["positionType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sortingFactory", function() { return _positioning__WEBPACK_IMPORTED_MODULE_7__["sortingFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "positionFactory", function() { return _positioning__WEBPACK_IMPORTED_MODULE_7__["positionFactory"]; });

/* harmony import */ var _spider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./spider */ "./src/spider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "spiders", function() { return _spider__WEBPACK_IMPORTED_MODULE_8__["spiders"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Spider", function() { return _spider__WEBPACK_IMPORTED_MODULE_8__["Spider"]; });

/* harmony import */ var _arcslider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./arcslider */ "./src/arcslider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arcSliders", function() { return _arcslider__WEBPACK_IMPORTED_MODULE_9__["arcSliders"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArcSlider", function() { return _arcslider__WEBPACK_IMPORTED_MODULE_9__["ArcSlider"]; });

/* harmony import */ var _chart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./chart */ "./src/chart.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "charts", function() { return _chart__WEBPACK_IMPORTED_MODULE_10__["charts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Chart", function() { return _chart__WEBPACK_IMPORTED_MODULE_10__["Chart"]; });

/* harmony import */ var _listswitcher__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./listswitcher */ "./src/listswitcher.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "listSwitcherFactory", function() { return _listswitcher__WEBPACK_IMPORTED_MODULE_11__["listSwitcherFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListSwitcher", function() { return _listswitcher__WEBPACK_IMPORTED_MODULE_11__["ListSwitcher"]; });















/***/ }),

/***/ "./src/list.js":
/*!*********************!*\
  !*** ./src/list.js ***!
  \*********************/
/*! exports provided: lists, List, listFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lists", function() { return lists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listFactory", function() { return listFactory; });
/* harmony import */ var remove_array_items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! remove-array-items */ "./node_modules/remove-array-items/dist/remove-array-items.esm.js");
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event */ "./src/event.js");
/* harmony import */ var _geometry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./geometry */ "./src/geometry.js");
/* harmony import */ var _draggable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./draggable */ "./src/draggable.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var lists = [];




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
    lists.push(this);
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

/***/ "./src/listswitcher.js":
/*!*****************************!*\
  !*** ./src/listswitcher.js ***!
  \*****************************/
/*! exports provided: listSwitcherFactory, ListSwitcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listSwitcherFactory", function() { return listSwitcherFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListSwitcher", function() { return ListSwitcher; });
/* harmony import */ var _geometry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./geometry */ "./src/geometry.js");
/* harmony import */ var _draggable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./draggable */ "./src/draggable.js");
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list */ "./src/list.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var ListSwitcher =
/*#__PURE__*/
function (_List) {
  _inherits(ListSwitcher, _List);

  function ListSwitcher(draggables) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, ListSwitcher);

    options.stepOn = options.stepOn || new _geometry__WEBPACK_IMPORTED_MODULE_0__["Point"](-50, 0);
    return _possibleConstructorReturn(this, _getPrototypeOf(ListSwitcher).call(this, draggables, options));
  }

  _createClass(ListSwitcher, [{
    key: "init",
    value: function init() {
      var _this = this;

      this.draggables.forEach(function (draggable) {
        draggable.isOn = false;
        draggable.onEnd.add(function () {
          _this.onEnd(draggable);

          return true;
        });
      });
    }
  }, {
    key: "onEnd",
    value: function onEnd(draggable) {
      var fixPositions = this.getCurrentFixPositionWithOff();
      var currentIndex = this.draggables.indexOf(draggable);
      var excangeIndex = _geometry__WEBPACK_IMPORTED_MODULE_0__["Geometry"].indexOfNearestPoint(fixPositions, draggable.position, this.options.radius, this.options.getDistance);

      if (excangeIndex === -1 || excangeIndex === currentIndex) {
        this.moveDraggable(currentIndex, draggable.position, fixPositions[currentIndex], this.options.timeEnd);
      } else {
        if (this.draggables[excangeIndex].isDragging) {
          this.fixToOff(excangeIndex, fixPositions[currentIndex]);
        } else {
          this.moveDraggableToOff(excangeIndex, fixPositions[currentIndex], this.options.timeExcange);
        }

        this.moveDraggable(currentIndex, draggable.position, fixPositions[excangeIndex], this.options.timeEnd);
        this.onChange.fire();
      }

      return true;
    }
  }, {
    key: "moveDraggable",
    value: function moveDraggable(index, position, fixOffPosition, time) {
      var positions = [fixOffPosition, fixOffPosition.add(this.options.stepOn)];
      var isOn = _geometry__WEBPACK_IMPORTED_MODULE_0__["Geometry"].indexOfNearestPoint(positions, position, -1, _geometry__WEBPACK_IMPORTED_MODULE_0__["Geometry"].getXDifference);

      if (this.draggables[index].isOn !== !!isOn) {
        this.draggables[index].isOn = !!isOn;
        this.onChange.fire();
      }

      this.draggables[index].move(positions[isOn], time, true);
    }
  }, {
    key: "fixToOff",
    value: function fixToOff(index, fixOffPosition) {
      this.draggables[index].isOn = false;
      this.draggables[index].fixPosition = fixOffPosition;
    }
  }, {
    key: "moveDraggableToOff",
    value: function moveDraggableToOff(index, fixOffPosition, time) {
      this.draggables[index].isOn = false;
      this.draggables[index].move(fixOffPosition, time, true);
    }
  }, {
    key: "getCurrentFixPositionWithOff",
    value: function getCurrentFixPositionWithOff() {
      var _this2 = this;

      return this.draggables.map(function (draggable) {
        return draggable.isOn ? draggable.fixPosition.sub(_this2.options.stepOn) : draggable.fixPosition.clone();
      }, this);
    }
  }, {
    key: "getSortedDraggables",
    value: function getSortedDraggables() {
      var _this3 = this;

      return this.draggables.map(function (draggable) {
        return draggable.initPosition;
      }).map(function (position) {
        return _this3.draggables.filter(function (draggable) {
          return draggable.fixPosition.compare(position) || draggable.fixPosition.compare(position.add(_this3.options.stepOn));
        }, _this3)[0];
      }, this);
    }
  }, {
    key: "reset",
    value: function reset() {
      this.draggables.forEach(function (draggable) {
        draggable.move(draggable.initPosition, 0, true, false);
        draggable.isOn = false;
      });
    }
  }, {
    key: "positions",
    get: function get() {
      return this.draggables.map(function (draggable) {
        var position = draggable.fixPosition.clone();
        position.isOn = draggable.isOn;
        return position;
      });
    },
    set: function set(positions) {
      var _this4 = this;

      var message = 'wrong array length';

      if (positions.length === this.draggables.length) {
        positions.forEach(function (point, i) {
          _this4.draggables[i].isOn = point.isOn;

          _this4.draggables[i].move(point, 0, true, true);
        }, this);
      } else {
        throw message;
      }
    }
  }]);

  return ListSwitcher;
}(_list__WEBPACK_IMPORTED_MODULE_2__["List"]);

function listSwitcherFactory(element, draggableElements) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var draggableOptions = options.draggable || {};
  var listOptions = options.list || {};
  draggableOptions.parent = draggableOptions.parent || element;
  draggableElements = Array.prototype.slice.call(draggableElements);
  var draggables = draggableElements.map(function (element) {
    return new _draggable__WEBPACK_IMPORTED_MODULE_1__["Draggable"](element, draggableOptions);
  });
  return new ListSwitcher(draggables, listOptions);
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

/***/ "./src/sortable.js":
/*!*************************!*\
  !*** ./src/sortable.js ***!
  \*************************/
/*! exports provided: Sortable, sortableFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sortable", function() { return Sortable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortableFactory", function() { return sortableFactory; });
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list */ "./src/list.js");
/* harmony import */ var _geometry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./geometry */ "./src/geometry.js");
/* harmony import */ var _draggable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./draggable */ "./src/draggable.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Sortable =
/*#__PURE__*/
function (_List) {
  _inherits(Sortable, _List);

  function Sortable(draggables) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Sortable);

    options.getDistance = options.getDistance || _geometry__WEBPACK_IMPORTED_MODULE_1__["Geometry"].getYDifference;
    return _possibleConstructorReturn(this, _getPrototypeOf(Sortable).call(this, draggables, options));
  }

  _createClass(Sortable, [{
    key: "initDraggable",
    value: function initDraggable(draggable) {
      var _this = this;

      draggable.enable = this._enable;

      if (this.options.isSortable) {
        draggable.onMove.add(function () {
          if (draggable.isDragging) {
            _this.exchangeDraggableIfPossible(draggable);

            return true;
          }
        });
        draggable.onEnd.add(function () {
          draggable.move(draggable.fixPosition, _this.options.timeEnd);
        });
      }
    }
  }, {
    key: "exchangeDraggableIfPossible",
    value: function exchangeDraggableIfPossible(draggable) {
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
          this.exchangeDraggableIfPossible(draggable);
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
          this.exchangeDraggableIfPossible(draggable);
        }
      }
    }
  }]);

  return Sortable;
}(_list__WEBPACK_IMPORTED_MODULE_0__["List"]);

function sortableFactory(parentElement, elements) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var draggableOptions = options.draggable || {};
  var listOptions = options.list || {};
  draggableOptions.parent = draggableOptions.parent || parentElement;
  elements = Array.prototype.slice.call(elements);
  var draggables = elements.map(function (element) {
    return new _draggable__WEBPACK_IMPORTED_MODULE_2__["Draggable"](element, draggableOptions);
  });
  return new Sortable(draggables, listOptions);
}



/***/ }),

/***/ "./src/spider.js":
/*!***********************!*\
  !*** ./src/spider.js ***!
  \***********************/
/*! exports provided: spiders, Spider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spiders", function() { return spiders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spider", function() { return Spider; });
/* harmony import */ var _utils_createcanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/createcanvas */ "./src/utils/createcanvas.js");
/* harmony import */ var _geometry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./geometry */ "./src/geometry.js");
/* harmony import */ var _bound__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bound */ "./src/bound.js");
/* harmony import */ var _draggable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./draggable */ "./src/draggable.js");


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var spiders = [];

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
    spiders.push(this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9EcmFnZWUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0RyYWdlZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9EcmFnZWUvLi9ub2RlX21vZHVsZXMvZGVzYW5kcm8tZ2V0LXN0eWxlLXByb3BlcnR5L2dldC1zdHlsZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9ub2RlX21vZHVsZXMvcmVtb3ZlLWFycmF5LWl0ZW1zL2Rpc3QvcmVtb3ZlLWFycmF5LWl0ZW1zLmVzbS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvYXJjc2xpZGVyLmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy9ib3VuZC5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvY2hhcnQuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL2RyYWdnYWJsZS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvZXZlbnQuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL2V4cGFuZG5hdGl2ZS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvZ2VvbWV0cnkuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy9saXN0LmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy9saXN0c3dpdGNoZXIuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL3Bvc2l0aW9uaW5nLmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy9zY29wZS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvc29ydGFibGUuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL3NwaWRlci5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvdGFyZ2V0LmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy91dGlscy9jbGFzc2VzLmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy91dGlscy9jcmVhdGVjYW52YXMuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL3V0aWxzL2dldGRlZmF1bHRwYXJlbnQuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL3V0aWxzL3JhbmdlLmpzIl0sIm5hbWVzIjpbImFyY1NsaWRlcnMiLCJBcmNTbGlkZXIiLCJhcmVhIiwiZWxlbWVudCIsIm9wdGlvbnMiLCJhcmVhUmVjdGFuZ2xlIiwiR2VvbWV0cnkiLCJjcmVhdGVSZWN0YW5nbGVGcm9tRWxlbWVudCIsImhhbGZTaXplIiwiZ2V0U2l6ZU9mRWxlbWVudCIsIm11bHQiLCJPYmplY3QiLCJhc3NpZ24iLCJjZW50ZXIiLCJnZXRDZW50ZXIiLCJyYWRpdXMiLCJnZXRNaW5TaWRlIiwic3RhcnRBbmdsZSIsIk1hdGgiLCJQSSIsImVuZEFuZ2xlIiwiYW5nbGVzIiwib25DaGFuZ2UiLCJ0aW1lIiwic2hpZnRlZENlbnRlciIsInN1YiIsInB1c2giLCJpbml0IiwiYW5nbGUiLCJwb3NpdGlvbiIsImdldFBvaW50RnJvbVJhZGlhbFN5c3RlbSIsImJvdW5kIiwiYm91bmRUb0FyYyIsImRyYWdnYWJsZSIsIkRyYWdnYWJsZSIsInBhcmVudCIsIm9uTW92ZSIsImNoYW5nZSIsImdldEFuZ2xlIiwidXBkYXRlQW5nbGUiLCJub3JtYWxpemVBbmdsZSIsIm1vdmUiLCJib3VuZFRvUmVjdGFuZ2xlIiwicmVjdGFuZ2xlIiwicG9pbnQiLCJzaXplIiwiY2FsY1BvaW50IiwiY2xvbmUiLCJyZWN0UDIiLCJnZXRQMyIsIngiLCJ5IiwiYm91bmRUb0VsZW1lbnQiLCJyZXRGdW5jIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJyZWZyZXNoIiwiYm91bmRUb0xpbmVYIiwic3RhcnRZIiwiZW5kWSIsImJvdW5kVG9MaW5lWSIsInN0YXJ0WCIsImVuZFgiLCJib3VuZFRvTGluZSIsInN0YXJ0IiwiZW5kIiwiYWxwaGEiLCJhdGFuMiIsImJldGEiLCJzb21lSyIsImNvc0JldGEiLCJjb3MiLCJzaW5CZXRhIiwic2luIiwicG9pbnQyIiwiUG9pbnQiLCJuZXdFbmQiLCJnZXRQb2ludEluTGluZUJ5TGVuZ2h0IiwicG9pbnRDcm9zc2luZyIsImRpcmVjdENyb3NzaW5nIiwiYm91bmRUb0NpcmNsZSIsIl9zaXplIiwiYm91bmRlZFBvaW50Iiwic3RhcnRBZ2xlIiwiYm91bmRTdGFydEFuZ2xlIiwiYm91bmRFbmR0QW5nbGUiLCJib3VuZEFuZ2xlIiwiaXNUb3VjaCIsIndpbmRvdyIsImNoYXJ0cyIsInJhbmRvbUNvbG9yIiwicm5kIiwicm91bmQiLCJyYW5kb20iLCJ0b0hleFN0cmluZyIsImRpZ2l0Iiwic3RyIiwidG9TdHJpbmciLCJsZW5ndGgiLCJnZXRBcnJheVdpdGhCb3VuZEluZGV4ZXMiLCJpbmRleCIsInJldEluZGV4ZXMiLCJDaGFydCIsImVsZW1lbnRzIiwidG91Y2hSYWRpdXMiLCJmaWxsU3R5bGVzIiwicmFuZ2UiLCJtYXAiLCJpbml0QW5nbGVzIiwidG9SYWRpYW4iLCJsaW1pdEltZyIsImxpbWl0SW1nT2Zmc2V0IiwiaXNTZWxlY3RhYmxlIiwib25EcmF3IiwiY2FudmFzIiwiY3JlYXRlQ2FudmFzIiwiY29udGV4dCIsImdldENvbnRleHQiLCJkcmFnZ2FibGVzIiwiaSIsImdldEJvdW5kQW5nbGUiLCJkcmF3IiwiaXNJbml0IiwiaW5pdFNlbGVjdCIsInNldEFjdGl2ZUFyYyIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudHMiLCJlIiwiY2hhbmdlZFRvdWNoZXMiLCJwYWdlWCIsImNsaWVudFgiLCJwYWdlWSIsImNsaWVudFkiLCJjYW52YXNPZmZzZXQiLCJnZXRPZmZzZXQiLCJnZXRBcmNPblBvaW50IiwiYWN0aXZlQXJjSW5kZXgiLCJnZXRTaXplIiwiaXNDbG9zc2luZyIsInNpZ24iLCJ1cGRhdGVBbmdsZXMiLCJjbGVhclJlY3QiLCJmb3JFYWNoIiwiX2RyYWdnYWJsZSIsImRyYXdBcmMiLCJlbmFibGVJbmRleGVzIiwiaW5kZXhPZiIsImRyYXdMaW1pdEltZyIsIm9wdHMiLCJjbG9uZU9iaiIsImNhbGwiLCJjb2xvciIsImdldEZpbGxTdHlsZSIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImFyYyIsImxpbmVUbyIsImNsb3NlUGF0aCIsImZpbGxTdHlsZSIsImZpbGwiLCJpbWciLCJBcnJheSIsImhlaWdodCIsImFkZCIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsImRyYXdJbWFnZSIsInNldFRyYW5zZm9ybSIsInNsaWNlIiwiYmFzZUFuZ2xlIiwiZGlmZkFuZ2xlIiwiZ2V0QW5nbGVzRGlmZiIsImdldERpc3RhbmNlIiwib2Zmc2V0IiwiaiIsImVuYWJsZSIsIkRyYWdlZSIsIkV2ZW50IiwibW91c2VFdmVudHMiLCJ0b3VjaEV2ZW50cyIsInRyYW5zZm9ybVByb3BlcnR5IiwiZ2V0U3R5bGVQcm9wZXJ0eSIsInRyYW5zaXRpb25Qcm9wZXJ0eSIsImdldFRvdWNoQnlJRCIsInRvdWNoSWQiLCJpZGVudGlmaWVyIiwicHJldmVudERvdWJsZUluaXQiLCJtZXNzYWdlIiwic29tZSIsImV4aXN0aW5nIiwiYWRkVG9EZWZhdWx0U2NvcGUiLCJkZWZhdWx0U2NvcGUiLCJhZGREcmFnZ2FibGUiLCJnZXREZWZhdWx0UGFyZW50IiwidGFyZ2V0cyIsInN0YXJ0RmlsdGVyIiwiaXNDb250ZW50Qm94U2l6ZSIsIm9uRW5kIiwiaXNSZXZlcnNlIiwiaXNTdG9wT25UcnVlIiwib25TdGFydCIsIm9uQ3JlYXRlIiwiZmlyZSIsIl9lbmFibGUiLCJmaXhQb3NpdGlvbiIsImluaXRQb3NpdGlvbiIsIl9kcmFnU3RhcnQiLCJkcmFnU3RhcnQiLCJiaW5kIiwiX2RyYWdNb3ZlIiwiZHJhZ01vdmUiLCJfZHJhZ0VuZCIsImRyYWdFbmQiLCJfcmVjYWx1bGF0ZSIsIl90cmFuc2Zvcm1Qb3NpdGlvbiIsInRyYW5zZm9ybSIsInN0eWxlIiwidHJhbnNsYXRlQ3NzIiwidWEiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJtc2llIiwidGVzdCIsInJlcGxhY2UiLCJpc0ZpeCIsImlzU2lsZW50IiwiZGV0ZXJtaW5lRGlyZWN0aW9uIiwiX3NldFRyYW5zbGF0ZSIsInNldFBvc2l0aW9uIiwiZ2V0UG9zaXRpb24iLCJsZWZ0RGlyZWN0aW9uIiwicmlnaHREaXJlY3Rpb24iLCJ1cERpcmVjdGlvbiIsImRvd25EaXJlY3Rpb24iLCJldmVudCIsImN1cnJlbnRFdmVudCIsImlzVG91Y2hFdmVudCIsIlRvdWNoRXZlbnQiLCJfc3RhcnRUb3VjaFBvaW50IiwiX3N0YXJ0UG9zaXRpb24iLCJfdG91Y2hJZCIsInN0b3BQcm9wYWdhdGlvbiIsInRhcmdldCIsIkhUTUxJbnB1dEVsZW1lbnQiLCJwcmV2ZW50RGVmYXVsdCIsImZvY3VzIiwiZG9jdW1lbnQiLCJpc0RyYWdnaW5nIiwiYWRkQ2xhc3MiLCJ0b3VjaCIsInRvdWNoUG9pbnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVtb3ZlQ2xhc3MiLCJSZWN0YW5nbGUiLCJyZXNldCIsImZ1bmNzIiwicHJvdG90eXBlIiwiYXJncyIsImZzIiwicmV2ZXJzZSIsInJldFZhbHVlIiwiZiIsInVuc2hpZnQiLCJyZW1vdmUiLCJzcGxpY2UiLCJfZiIsImF1Z21lbnQiLCJyZWNlaXZpbmdDbGFzcyIsImdpdmluZ0NsYXNzIiwibGVuIiwibWV0aG9kTmFtZSIsIk5vZGVMaXN0IiwicCIsImsiLCJyZWN0IiwibWluIiwibWF4IiwiaW5jbHVkZVBvaW50IiwiYXhpcyIsInNlbEF4aXMiLCJjcm9zc1JlY3RhbmdsZSIsImFuZCIsInRoaXNDZW50ZXIiLCJyZWN0Q2VudGVyIiwiZWwiLCJxdWVyeVNlbGVjdG9yIiwibGVmdCIsInRvcCIsIndpZHRoIiwicDEiLCJwMiIsImR4IiwiZHkiLCJzcXJ0IiwiZGlzdGFuY2UiLCJnZXRYRGlmZmVyZW5jZSIsImFicyIsImdldFlEaWZmZXJlbmNlIiwidHJhbnNmb3JtZWRTcGFjZURpc3RhbmNlRmFjdG9yeSIsInBvdyIsImluZGV4T2ZOZWFyZXN0UG9pbnQiLCJhcnIiLCJ2YWwiLCJ0ZW1wIiwiYm91bmRQb2ludCIsIkwxUDEiLCJMMVAyIiwiTDJQMSIsIkwyUDIiLCJrMSIsImsyIiwiYjEiLCJiMiIsImJvdW5kVG9TZWdtZW50IiwiTFAxIiwiTFAyIiwiUCIsIkEiLCJCIiwiQVAiLCJBQiIsImFiMiIsImFwX2FiIiwidCIsImdldFBvaW50SW5MaW5lIiwicGVyY2VudCIsImxlbmdodCIsImlzQ29uc2lkZXJUcmFuc2xhdGUiLCJwYXJlbnROb2RlIiwiZ2V0U3VtVmFsdWVPZlN0eWxlUnVsZSIsInJ1bGVzIiwicmVkdWNlIiwic3VtIiwicnVsZSIsInBhcnNlSW50IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImVsUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInBhcmVudFJlY3QiLCJhZGRQb2ludFRvQm91bmRQb2ludHMiLCJib3VuZHBvaW50cyIsImlzUmlnaHQiLCJyZXN1bHQiLCJmaWx0ZXIiLCJiUG9pbnQiLCJkaWZmIiwidG9EZWdyZWUiLCJkbWluIiwiZG1heCIsImdldEFuZ2xlRGlmZiIsImdldE5lYXJlc3RBbmdsZSIsInZhbHVlIiwibWluQW5nbGUiLCJtYXhBbmdsZSIsImxpc3RzIiwiTGlzdCIsInRpbWVFbmQiLCJ0aW1lRXhjYW5nZSIsImlzRGlzcGxhY2VtZW50IiwiaXNTb3J0YWJsZSIsImluaXREcmFnZ2FibGUiLCJtb3ZlSGFuZGxlciIsImxpc3QiLCJvbkVuZERpc3BsYXljZW1lbnQiLCJmaXhQb3NpdGlvbnMiLCJnZXRDdXJyZW50Rml4UG9zaXRpb24iLCJjdXJyZW50SW5kZXgiLCJleGNhbmdlSW5kZXgiLCJtb3ZlT3JTYXZlIiwibmV4dERyYWdnYWJsZSIsInByZXZEcmFnZ2FibGUiLCJzb3J0SWZQb3NzaWJsZSIsInNvcnRlZERyYWdnYWJsZXMiLCJnZXRTb3J0ZWREcmFnZ2FibGVzIiwidGFyZ2V0SW5kZXgiLCJpbml0UG9zaXRpb25zIiwiY29tcGFyZSIsImNvbmNhdCIsInJlbW92ZUl0ZW1zIiwiZGVzdHJveSIsInBvc2l0aW9ucyIsImxpc3RGYWN0b3J5IiwicGFyZW50RWxlbWVudCIsImRyYWdnYWJsZU9wdGlvbnMiLCJsaXN0T3B0aW9ucyIsIkxpc3RTd2l0Y2hlciIsInN0ZXBPbiIsImlzT24iLCJnZXRDdXJyZW50Rml4UG9zaXRpb25XaXRoT2ZmIiwibW92ZURyYWdnYWJsZSIsImZpeFRvT2ZmIiwibW92ZURyYWdnYWJsZVRvT2ZmIiwiZml4T2ZmUG9zaXRpb24iLCJsaXN0U3dpdGNoZXJGYWN0b3J5IiwiZHJhZ2dhYmxlRWxlbWVudHMiLCJwb3NpdGlvblR5cGUiLCJub3RDcm9zc2luZyIsImZsb2F0TGVmdCIsImZsb2F0UmlnaHQiLCJwb3NpdGlvbkZhY3RvcnkiLCJ0eXBlIiwiX29wdGlvbnMiLCJyZWN0YW5nbGVMaXN0IiwiaW5kZXhlc09mTmV3cyIsImJvdW5kUmVjdCIsInN0YXRpY1JlY3RhbmdsZUluZGV4ZXMiLCJpbmRleGVzIiwiX3JlY3QiLCJyZW1vdmFibGUiLCJpbmRleE9mU3RhdGljIiwic3RhdGljUmVjdCIsIm1vdmVUb0JvdW5kIiwiZ2V0U3F1YXJlIiwicGFkZGluZ1RvcExlZnQiLCJwYWRkaW5nQm90dG9tUmlnaHQiLCJ5R2FwQmV0d2VlbkRyYWdnYWJsZXMiLCJfaW5kZXhlc09mTmV3cyIsImdldFAyIiwiYm91bmRhcnlQb2ludHMiLCJpc1ZhbGlkIiwiYXNzaW5nIiwicGFkZGluZ1RvcFJpZ2h0IiwicGFkZGluZ0JvdHRvbUxlZnQiLCJwYWRkaW5nVG9wTmVnUmlnaHQiLCJwYWRkaW5nQm90dG9tTmVnTGVmdCIsImdldFJpZ2h0VG9wUG9pbnQiLCJfaW5kZXgiLCJnZXRMZWZ0Qm90dG9tUG9pbnQiLCJnZXRQNCIsInNvcnRpbmdGYWN0b3J5Iiwib2xkT2Jqc0xpc3QiLCJuZXdPYmpzIiwiaW5kZXhPZk5ld3MiLCJvYmpzTGlzdCIsIm9iaiIsIm5ld0xpc3QiLCJsaXN0T2xkUG9zaXRpb24iLCJuZXdPYmoiLCJzY29wZXMiLCJTY29wZSIsInNjb3BlIiwic2hvdFRhcmdldHMiLCJjYXRjaERyYWdnYWJsZSIsInNvcnQiLCJhIiwiYiIsImdldFJlY3RhbmdsZSIsImlubmVyRHJhZ2dhYmxlcyIsInRhcmdldEluZGV4ZXMiLCJmbiIsImN1cnJlbnRTY29wZSIsImFkZERyYWdnYWJsZVRvU2NvcGUiLCJhZGRUYXJnZXRUb1Njb3BlIiwiYWRkVGFyZ2V0IiwiVGFyZ2V0Iiwic2NvcGVGYWN0b3J5IiwidGFyZ2V0RWxlbWVudHMiLCJ0YXJnZXRPcHRpb25zIiwic2NvcGVPcHRpb25zIiwiU29ydGFibGUiLCJleGNoYW5nZURyYWdnYWJsZUlmUG9zc2libGUiLCJzb3J0YWJsZUZhY3RvcnkiLCJzcGlkZXJzIiwiU3BpZGVyIiwiZEFuZ2xlIiwic3RhcnRSYWRpdXMiLCJlbmRSYWRpdXMiLCJsaW5lV2lkdGgiLCJzdHJva2VTdHlsZSIsInN0cm9rZSIsInNvcnRpbmciLCJwb3NpdGlvbmluZyIsIm9uQWRkIiwiYmVmb3JlQWRkIiwib25SZW1vdmUiLCJyZWN0YW5nbGVzIiwiaW5kZXhlc09mTmV3IiwidGFyZ2V0UmVjdGFuZ2xlIiwiZHJhZ2dhYmxlU3F1YXJlIiwibmV3RHJhZ2dhYmxlc0luZGV4IiwiYWRkUmVtb3ZlT25Nb3ZlIiwicHVzaElubmVyRHJhZ2dhYmxlIiwicmVtb3ZlSGFuZGxlciIsImhhc0NsYXNzIiwiYyIsInJlIiwiUmVnRXhwIiwiY2xhc3NOYW1lIiwic2V0U3R5bGUiLCJjc3NUZXh0Iiwia2V5IiwiaGFzT3duUHJvcGVydHkiLCJhcHBlbmRGaXJzdENoaWxkIiwibm9kZSIsImZpcnN0Q2hpbGQiLCJpbnNlcnRCZWZvcmUiLCJhcHBlbmRDaGlsZCIsInJlY3RhZ2xlIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsInN0b3AiLCJzdGVwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUNBQXVDLFNBQVM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSyxJQUEwQztBQUMvQztBQUNBLEVBQUUsbUNBQVE7QUFDVjtBQUNBLEdBQUc7QUFBQSxvR0FBQztBQUNKLENBQUMsTUFBTSxFQU1OOztBQUVELENBQUM7Ozs7Ozs7Ozs7Ozs7QUN0REQ7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTs7QUFFQTtBQUNBOztBQUVlLDBFQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQjNCO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFVBQVUsR0FBRyxFQUFuQjs7SUFFTUMsUzs7O0FBQ0oscUJBQVlDLElBQVosRUFBa0JDLE9BQWxCLEVBQXVDO0FBQUEsUUFBWkMsT0FBWSx1RUFBSixFQUFJOztBQUFBOztBQUNyQyxRQUFNQyxhQUFhLEdBQUdDLGtEQUFRLENBQUNDLDBCQUFULENBQW9DTCxJQUFwQyxFQUEwQ0EsSUFBMUMsQ0FBdEI7QUFDQSxRQUFNTSxRQUFRLEdBQUdGLGtEQUFRLENBQUNHLGdCQUFULENBQTBCTixPQUExQixFQUFtQ08sSUFBbkMsQ0FBd0MsR0FBeEMsQ0FBakI7QUFDQSxTQUFLTixPQUFMLEdBQWVPLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjO0FBQzNCQyxZQUFNLEVBQUVSLGFBQWEsQ0FBQ1MsU0FBZCxFQURtQjtBQUUzQkMsWUFBTSxFQUFFVixhQUFhLENBQUNXLFVBQWQsS0FBNkIsQ0FGVjtBQUczQkMsZ0JBQVUsRUFBRUMsSUFBSSxDQUFDQyxFQUhVO0FBSTNCQyxjQUFRLEVBQUUsQ0FKaUI7QUFLM0JDLFlBQU0sRUFBRSxDQUFDSCxJQUFJLENBQUNDLEVBQU4sRUFBVSxDQUFDRCxJQUFJLENBQUNDLEVBQU4sR0FBVyxDQUFyQixFQUF3QixDQUF4QixFQUEyQkQsSUFBSSxDQUFDQyxFQUFMLEdBQVUsQ0FBckMsRUFBd0NELElBQUksQ0FBQ0MsRUFBTCxHQUFVLENBQWxELENBTG1CO0FBTTNCRyxjQUFRLEVBQUUsb0JBQVcsQ0FBRSxDQU5JO0FBTzNCQyxVQUFJLEVBQUU7QUFQcUIsS0FBZCxFQVFabkIsT0FSWSxDQUFmO0FBVUEsU0FBS29CLGFBQUwsR0FBcUIsS0FBS3BCLE9BQUwsQ0FBYVMsTUFBYixDQUFvQlksR0FBcEIsQ0FBd0JqQixRQUF4QixDQUFyQjtBQUNBLFNBQUtjLFFBQUwsR0FBZ0IsS0FBS2xCLE9BQUwsQ0FBYWtCLFFBQTdCO0FBQ0F0QixjQUFVLENBQUMwQixJQUFYLENBQWdCLElBQWhCO0FBQ0EsU0FBS3hCLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUt5QixJQUFMLENBQVV4QixPQUFWO0FBQ0Q7Ozs7eUJBRUlBLE8sRUFBUztBQUFBOztBQUNaLFVBQU15QixLQUFLLEdBQUcsS0FBS3hCLE9BQUwsQ0FBYWEsVUFBM0I7QUFDQSxVQUFNWSxRQUFRLEdBQUd2QixrREFBUSxDQUFDd0Isd0JBQVQsQ0FDZkYsS0FEZSxFQUVmLEtBQUt4QixPQUFMLENBQWFXLE1BRkUsRUFHZixLQUFLUyxhQUhVLENBQWpCO0FBS0EsVUFBTU8sS0FBSyxHQUFHQyx5REFBVSxDQUN0QixLQUFLUixhQURpQixFQUV0QixLQUFLcEIsT0FBTCxDQUFhVyxNQUZTLEVBR3RCLEtBQUtYLE9BQUwsQ0FBYWEsVUFIUyxFQUl0QixLQUFLYixPQUFMLENBQWFnQixRQUpTLENBQXhCO0FBT0EsV0FBS1EsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsV0FBS0ssU0FBTCxHQUFpQixJQUFJQyxvREFBSixDQUFjL0IsT0FBZCxFQUF1QjtBQUN0Q2dDLGNBQU0sRUFBRSxLQUFLakMsSUFEeUI7QUFFdEM2QixhQUFLLEVBQUVBLEtBRitCO0FBR3RDRixnQkFBUSxFQUFFQSxRQUg0QjtBQUl0Q08sY0FBTSxFQUFFLGtCQUFNO0FBQ1osZUFBSSxDQUFDQyxNQUFMOztBQUNBLGlCQUFPLElBQVA7QUFDRDtBQVBxQyxPQUF2QixDQUFqQjtBQVNEOzs7a0NBRWE7QUFDWixXQUFLVCxLQUFMLEdBQWF0QixrREFBUSxDQUFDZ0MsUUFBVCxDQUFrQixLQUFLZCxhQUF2QixFQUFzQyxLQUFLUyxTQUFMLENBQWVKLFFBQXJELENBQWI7QUFDRDs7OzZCQUVRO0FBQ1AsV0FBS1UsV0FBTCxHQURPLENBRVA7QUFDQTs7QUFDQSxXQUFLakIsUUFBTCxDQUFjLEtBQUtNLEtBQW5CO0FBQ0Q7Ozs2QkFFUUEsSyxFQUFPTCxJLEVBQU07QUFDcEIsVUFBTU0sUUFBUSxHQUFHdkIsa0RBQVEsQ0FBQ3dCLHdCQUFULENBQ2YsS0FBS0YsS0FEVSxFQUVmLEtBQUt4QixPQUFMLENBQWFXLE1BRkUsRUFHZixLQUFLUyxhQUhVLENBQWpCO0FBS0EsV0FBS0ksS0FBTCxHQUFhdEIsa0RBQVEsQ0FBQ2tDLGNBQVQsQ0FBd0JaLEtBQXhCLEVBQStCQyxRQUEvQixDQUFiO0FBQ0EsV0FBS0ksU0FBTCxDQUFlUSxJQUFmLENBQW9CWixRQUFwQixFQUE4Qk4sSUFBSSxJQUFFLENBQXBDLEVBQXVDLElBQXZDLEVBQTZDLElBQTdDO0FBQ0EsV0FBS0QsUUFBTCxDQUFjLEtBQUtNLEtBQW5CO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pFSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLFNBQVNjLGdCQUFULENBQTBCQyxTQUExQixFQUFxQztBQUMxQyxTQUFPLFVBQVNDLEtBQVQsRUFBZ0JDLElBQWhCLEVBQXNCO0FBQzNCLFFBQU1DLFNBQVMsR0FBR0YsS0FBSyxDQUFDRyxLQUFOLEVBQWxCO0FBQUEsUUFDRUMsTUFBTSxHQUFHTCxTQUFTLENBQUNNLEtBQVYsRUFEWDs7QUFHQSxRQUFJTixTQUFTLENBQUNkLFFBQVYsQ0FBbUJxQixDQUFuQixHQUF1QkosU0FBUyxDQUFDSSxDQUFyQyxFQUF3QztBQUNyQ0osZUFBUyxDQUFDSSxDQUFWLEdBQWNQLFNBQVMsQ0FBQ2QsUUFBVixDQUFtQnFCLENBQWxDO0FBQ0Q7O0FBQ0QsUUFBSVAsU0FBUyxDQUFDZCxRQUFWLENBQW1Cc0IsQ0FBbkIsR0FBdUJMLFNBQVMsQ0FBQ0ssQ0FBckMsRUFBd0M7QUFDdENMLGVBQVMsQ0FBQ0ssQ0FBVixHQUFjUixTQUFTLENBQUNkLFFBQVYsQ0FBbUJzQixDQUFqQztBQUNEOztBQUNELFFBQUlILE1BQU0sQ0FBQ0UsQ0FBUCxHQUFXSixTQUFTLENBQUNJLENBQVYsR0FBY0wsSUFBSSxDQUFDSyxDQUFsQyxFQUFxQztBQUNuQ0osZUFBUyxDQUFDSSxDQUFWLEdBQWNGLE1BQU0sQ0FBQ0UsQ0FBUCxHQUFXTCxJQUFJLENBQUNLLENBQTlCO0FBQ0Q7O0FBQ0QsUUFBSUYsTUFBTSxDQUFDRyxDQUFQLEdBQVdMLFNBQVMsQ0FBQ0ssQ0FBVixHQUFjTixJQUFJLENBQUNNLENBQWxDLEVBQXFDO0FBQ25DTCxlQUFTLENBQUNLLENBQVYsR0FBY0gsTUFBTSxDQUFDRyxDQUFQLEdBQVdOLElBQUksQ0FBQ00sQ0FBOUI7QUFDRDs7QUFFRCxXQUFPTCxTQUFQO0FBQ0QsR0FsQkQ7QUFtQkQ7QUFFTSxTQUFTTSxjQUFULENBQXdCakQsT0FBeEIsRUFBaUNnQyxNQUFqQyxFQUF5QztBQUM5QyxNQUFNa0IsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBVztBQUN6QixXQUFPdEIsS0FBSyxDQUFDdUIsS0FBTixDQUFZLElBQVosRUFBa0JDLFNBQWxCLENBQVA7QUFDRCxHQUZEOztBQUdBLE1BQUl4QixLQUFKOztBQUVBc0IsU0FBTyxDQUFDRyxPQUFSLEdBQWtCLFlBQVc7QUFDM0J6QixTQUFLLEdBQUdXLGdCQUFnQixDQUFDcEMsa0RBQVEsQ0FBQ0MsMEJBQVQsQ0FBb0NKLE9BQXBDLEVBQTZDZ0MsTUFBN0MsQ0FBRCxDQUF4QjtBQUNELEdBRkQ7O0FBSUFrQixTQUFPLENBQUNHLE9BQVI7QUFDQSxTQUFPSCxPQUFQO0FBQ0Q7QUFFTSxTQUFTSSxZQUFULENBQXNCUCxDQUF0QixFQUF5QlEsTUFBekIsRUFBaUNDLElBQWpDLEVBQXVDO0FBQzVDLFNBQU8sVUFBU2YsS0FBVCxFQUFnQkMsSUFBaEIsRUFBc0I7QUFDM0IsUUFBTUMsU0FBUyxHQUFHRixLQUFLLENBQUNHLEtBQU4sRUFBbEI7QUFDQUQsYUFBUyxDQUFDSSxDQUFWLEdBQWNBLENBQWQ7O0FBQ0EsUUFBSVEsTUFBTSxHQUFHWixTQUFTLENBQUNLLENBQXZCLEVBQTBCO0FBQ3hCTCxlQUFTLENBQUNLLENBQVYsR0FBY08sTUFBZDtBQUNEOztBQUNELFFBQUlDLElBQUksR0FBR2IsU0FBUyxDQUFDSyxDQUFWLEdBQWNOLElBQUksQ0FBQ00sQ0FBOUIsRUFBaUM7QUFDL0JMLGVBQVMsQ0FBQ0ssQ0FBVixHQUFjUSxJQUFJLEdBQUdkLElBQUksQ0FBQ00sQ0FBMUI7QUFDRDs7QUFFRCxXQUFPTCxTQUFQO0FBQ0QsR0FYRDtBQVlEO0FBRU0sU0FBU2MsWUFBVCxDQUFzQlQsQ0FBdEIsRUFBeUJVLE1BQXpCLEVBQWlDQyxJQUFqQyxFQUF1QztBQUM1QyxTQUFPLFVBQVNsQixLQUFULEVBQWdCQyxJQUFoQixFQUFzQjtBQUMzQixRQUFNQyxTQUFTLEdBQUdGLEtBQUssQ0FBQ0csS0FBTixFQUFsQjtBQUNBRCxhQUFTLENBQUNLLENBQVYsR0FBY0EsQ0FBZDs7QUFDQSxRQUFJVSxNQUFNLEdBQUdmLFNBQVMsQ0FBQ0ksQ0FBdkIsRUFBMEI7QUFDeEJKLGVBQVMsQ0FBQ0ksQ0FBVixHQUFjVyxNQUFkO0FBQ0Q7O0FBQ0QsUUFBSUMsSUFBSSxHQUFHaEIsU0FBUyxDQUFDSSxDQUFWLEdBQWNMLElBQUksQ0FBQ0ssQ0FBOUIsRUFBaUM7QUFDL0JKLGVBQVMsQ0FBQ0ksQ0FBVixHQUFjWSxJQUFJLEdBQUdqQixJQUFJLENBQUNLLENBQTFCO0FBQ0Q7O0FBQ0QsV0FBT0osU0FBUDtBQUNELEdBVkQ7QUFXRDtBQUVNLFNBQVNpQixXQUFULENBQXFCQyxLQUFyQixFQUE0QkMsR0FBNUIsRUFBaUM7QUFDdEMsTUFBTUMsS0FBSyxHQUFHaEQsSUFBSSxDQUFDaUQsS0FBTCxDQUFXRixHQUFHLENBQUNkLENBQUosR0FBUWEsS0FBSyxDQUFDYixDQUF6QixFQUE0QmMsR0FBRyxDQUFDZixDQUFKLEdBQVFjLEtBQUssQ0FBQ2QsQ0FBMUMsQ0FBZDtBQUFBLE1BQ0VrQixJQUFJLEdBQUdGLEtBQUssR0FBR2hELElBQUksQ0FBQ0MsRUFBTCxHQUFVLENBRDNCO0FBQUEsTUFFRWtELEtBQUssR0FBRyxFQUZWO0FBQUEsTUFHRUMsT0FBTyxHQUFHcEQsSUFBSSxDQUFDcUQsR0FBTCxDQUFTSCxJQUFULENBSFo7QUFBQSxNQUlFSSxPQUFPLEdBQUd0RCxJQUFJLENBQUN1RCxHQUFMLENBQVNMLElBQVQsQ0FKWjtBQU1BLFNBQU8sVUFBU3hCLEtBQVQsRUFBZ0JDLElBQWhCLEVBQXNCO0FBQzNCLFFBQU02QixNQUFNLEdBQUcsSUFBSUMsK0NBQUosQ0FBVS9CLEtBQUssQ0FBQ00sQ0FBTixHQUFVbUIsS0FBSyxHQUFHQyxPQUE1QixFQUFxQzFCLEtBQUssQ0FBQ08sQ0FBTixHQUFVa0IsS0FBSyxHQUFHRyxPQUF2RCxDQUFmO0FBQUEsUUFDRUksTUFBTSxHQUFHdEUsa0RBQVEsQ0FBQ3VFLHNCQUFULENBQWdDWixHQUFoQyxFQUFxQ0QsS0FBckMsRUFBNENuQixJQUFJLENBQUNLLENBQWpELENBRFg7QUFFQSxRQUFJNEIsYUFBYSxHQUFHeEUsa0RBQVEsQ0FBQ3lFLGNBQVQsQ0FBd0JmLEtBQXhCLEVBQStCQyxHQUEvQixFQUFvQ3JCLEtBQXBDLEVBQTJDOEIsTUFBM0MsQ0FBcEI7QUFFQUksaUJBQWEsR0FBR3hFLGtEQUFRLENBQUN5RCxXQUFULENBQXFCQyxLQUFyQixFQUE0QlksTUFBNUIsRUFBb0NFLGFBQXBDLENBQWhCO0FBQ0EsV0FBT0EsYUFBUDtBQUNELEdBUEQ7QUFRRDtBQUVNLFNBQVNFLGFBQVQsQ0FBdUJuRSxNQUF2QixFQUErQkUsTUFBL0IsRUFBdUM7QUFDNUMsU0FBTyxVQUFTNkIsS0FBVCxFQUFnQnFDLEtBQWhCLEVBQXVCO0FBQzVCLFFBQU1DLFlBQVksR0FBRzVFLGtEQUFRLENBQUN1RSxzQkFBVCxDQUFnQ2hFLE1BQWhDLEVBQXdDK0IsS0FBeEMsRUFBK0M3QixNQUEvQyxDQUFyQjtBQUNBLFdBQU9tRSxZQUFQO0FBQ0QsR0FIRDtBQUlEO0FBRU0sU0FBU2xELFVBQVQsQ0FBb0JuQixNQUFwQixFQUE0QkUsTUFBNUIsRUFBb0NvRSxTQUFwQyxFQUErQy9ELFFBQS9DLEVBQXlEO0FBQzlELFNBQU8sVUFBU3dCLEtBQVQsRUFBZ0JxQyxLQUFoQixFQUF1QjtBQUM1QixRQUFNRyxlQUFlLEdBQUcsT0FBT0QsU0FBUCxLQUFxQixVQUFyQixHQUFrQ0EsU0FBUyxFQUEzQyxHQUFnREEsU0FBeEU7QUFDQSxRQUFNRSxjQUFjLEdBQUcsT0FBT0YsU0FBUCxLQUFxQixVQUFyQixHQUFrQy9ELFFBQVEsRUFBMUMsR0FBK0NBLFFBQXRFO0FBRUEsUUFBSVEsS0FBSyxHQUFHdEIsa0RBQVEsQ0FBQ2dDLFFBQVQsQ0FBa0J6QixNQUFsQixFQUEwQitCLEtBQTFCLENBQVo7QUFDQWhCLFNBQUssR0FBR3RCLGtEQUFRLENBQUNrQyxjQUFULENBQXdCWixLQUF4QixDQUFSO0FBQ0FBLFNBQUssR0FBR3RCLGtEQUFRLENBQUNnRixVQUFULENBQW9CRixlQUFwQixFQUFxQ0MsY0FBckMsRUFBcUR6RCxLQUFyRCxDQUFSO0FBQ0EsV0FBT3RCLGtEQUFRLENBQUN3Qix3QkFBVCxDQUFrQ0YsS0FBbEMsRUFBeUNiLE1BQXpDLEVBQWlERixNQUFqRCxDQUFQO0FBQ0QsR0FSRDtBQVNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNMEUsT0FBTyxHQUFHLGtCQUFrQkMsTUFBbEM7QUFDQSxJQUFNQyxNQUFNLEdBQUcsRUFBZjs7QUFFQSxTQUFTQyxXQUFULEdBQXVCO0FBQ3JCLE1BQU1DLEdBQUcsR0FBRyxTQUFOQSxHQUFNLEdBQVc7QUFDckIsV0FBT3pFLElBQUksQ0FBQzBFLEtBQUwsQ0FBVzFFLElBQUksQ0FBQzJFLE1BQUwsS0FBYyxHQUF6QixDQUFQO0FBQ0QsR0FGRDs7QUFHQSxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFTQyxLQUFULEVBQWdCO0FBQ2xDLFFBQUlDLEdBQUcsR0FBR0QsS0FBSyxDQUFDRSxRQUFOLENBQWUsRUFBZixDQUFWOztBQUNBLFdBQU9ELEdBQUcsQ0FBQ0UsTUFBSixHQUFhLENBQXBCLEVBQXVCO0FBQ3JCRixTQUFHLEdBQUcsTUFBTUEsR0FBWjtBQUNEOztBQUNELFdBQU9BLEdBQVA7QUFDRCxHQU5EOztBQVFBLFNBQU8sTUFBTUYsV0FBVyxDQUFDSCxHQUFHLEVBQUosQ0FBakIsR0FBMkJHLFdBQVcsQ0FBQ0gsR0FBRyxFQUFKLENBQXRDLEdBQWdERyxXQUFXLENBQUNILEdBQUcsRUFBSixDQUFsRTtBQUNEOztBQUVELFNBQVNRLHdCQUFULENBQWtDQyxLQUFsQyxFQUF5Q0YsTUFBekMsRUFBaUQ7QUFDL0MsTUFBTUcsVUFBVSxHQUFHLEVBQW5COztBQUNBLE1BQUlELEtBQUssS0FBSyxDQUFDLENBQWYsRUFBa0I7QUFDaEJDLGNBQVUsQ0FBQzNFLElBQVgsQ0FBZ0IwRSxLQUFoQjtBQUNBQyxjQUFVLENBQUMzRSxJQUFYLENBQWdCLENBQUMwRSxLQUFLLEdBQUcsQ0FBVCxJQUFjRixNQUE5QjtBQUNEOztBQUVELFNBQU9HLFVBQVA7QUFDRDs7SUFFS0MsSzs7O0FBQ0osaUJBQWFwRyxJQUFiLEVBQW1CcUcsUUFBbkIsRUFBeUM7QUFBQSxRQUFabkcsT0FBWSx1RUFBSixFQUFJOztBQUFBOztBQUN2QyxRQUFNQyxhQUFhLEdBQUdDLGtEQUFRLENBQUNDLDBCQUFULENBQW9DTCxJQUFwQyxFQUEwQ0EsSUFBMUMsQ0FBdEI7QUFDQSxTQUFLRSxPQUFMLEdBQWVPLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjO0FBQzNCQyxZQUFNLEVBQUVSLGFBQWEsQ0FBQ1MsU0FBZCxFQURtQjtBQUUzQkMsWUFBTSxFQUFFVixhQUFhLENBQUNXLFVBQWQsS0FBNkIsQ0FGVjtBQUczQndGLGlCQUFXLEVBQUVuRyxhQUFhLENBQUNXLFVBQWQsS0FBNkIsQ0FIZjtBQUkzQnNFLGdCQUFVLEVBQUVwRSxJQUFJLENBQUNDLEVBQUwsR0FBVSxDQUpLO0FBSzNCc0YsZ0JBQVUsRUFBRUMsNERBQUssQ0FBQyxDQUFELEVBQUlILFFBQVEsQ0FBQ0wsTUFBYixDQUFMLENBQTBCUyxHQUExQixDQUE4QjtBQUFBLGVBQU1qQixXQUFXLEVBQWpCO0FBQUEsT0FBOUIsQ0FMZTtBQU0zQmtCLGdCQUFVLEVBQUVGLDREQUFLLENBQUMsQ0FBQyxFQUFGLEVBQU0sR0FBTixFQUFXLE1BQU1ILFFBQVEsQ0FBQ0wsTUFBMUIsQ0FBTCxDQUF1Q1MsR0FBdkMsQ0FBMkMsVUFBQy9FLEtBQUQsRUFBVztBQUNoRSxlQUFPdEIsa0RBQVEsQ0FBQ3VHLFFBQVQsQ0FBa0JqRixLQUFsQixDQUFQO0FBQ0QsT0FGVyxDQU5lO0FBUzNCa0YsY0FBUSxFQUFFLElBVGlCO0FBVTNCQyxvQkFBYyxFQUFFLElBQUlwQywrQ0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLENBVlc7QUFXM0JxQyxrQkFBWSxFQUFFO0FBWGEsS0FBZCxFQVlaNUcsT0FaWSxDQUFmO0FBY0FxRixVQUFNLENBQUMvRCxJQUFQLENBQVksSUFBWjs7QUFDQSxTQUFLdUYsTUFBTCxHQUFjLEtBQUs3RyxPQUFMLENBQWE2RyxNQUFiLElBQXVCLFlBQVcsQ0FBRSxDQUFsRDs7QUFDQSxTQUFLL0csSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0csYUFBTCxHQUFxQkEsYUFBckI7QUFDQSxTQUFLc0IsSUFBTCxDQUFVNEUsUUFBVjtBQUNEOzs7O3lCQUVJQSxRLEVBQVU7QUFBQTs7QUFDYixXQUFLVyxNQUFMLEdBQWNDLG1FQUFZLENBQUMsS0FBS2pILElBQU4sRUFBWSxLQUFLRyxhQUFqQixDQUExQjtBQUNBLFdBQUsrRyxPQUFMLEdBQWUsS0FBS0YsTUFBTCxDQUFZRyxVQUFaLENBQXVCLElBQXZCLENBQWY7QUFDQSxXQUFLQyxVQUFMLEdBQWtCZixRQUFRLENBQUNJLEdBQVQsQ0FBYSxVQUFDeEcsT0FBRCxFQUFVb0gsQ0FBVixFQUFnQjtBQUM3QyxZQUFNM0YsS0FBSyxHQUFHLEtBQUksQ0FBQ3hCLE9BQUwsQ0FBYXdHLFVBQWIsQ0FBd0JXLENBQXhCLENBQWQ7QUFDQSxZQUFNL0csUUFBUSxHQUFHRixrREFBUSxDQUFDRyxnQkFBVCxDQUEwQk4sT0FBMUIsRUFBbUNPLElBQW5DLENBQXdDLEdBQXhDLENBQWpCO0FBQ0EsWUFBTW1CLFFBQVEsR0FBR3ZCLGtEQUFRLENBQUN3Qix3QkFBVCxDQUNmRixLQURlLEVBRWYsS0FBSSxDQUFDeEIsT0FBTCxDQUFhb0csV0FGRSxFQUdmLEtBQUksQ0FBQ3BHLE9BQUwsQ0FBYVMsTUFBYixDQUFvQlksR0FBcEIsQ0FBd0JqQixRQUF4QixDQUhlLENBQWpCO0FBS0EsWUFBTXVCLEtBQUssR0FBR0MseURBQVUsQ0FDdEIsS0FBSSxDQUFDNUIsT0FBTCxDQUFhUyxNQUFiLENBQW9CWSxHQUFwQixDQUF3QmpCLFFBQXhCLENBRHNCLEVBRXRCLEtBQUksQ0FBQ0osT0FBTCxDQUFhb0csV0FGUyxFQUd0QixLQUFJLENBQUNnQixhQUFMLENBQW1CRCxDQUFuQixFQUFzQixLQUF0QixDQUhzQixFQUl0QixLQUFJLENBQUNDLGFBQUwsQ0FBbUJELENBQW5CLEVBQXNCLElBQXRCLENBSnNCLENBQXhCO0FBT0EsZUFBTyxJQUFJckYsb0RBQUosQ0FBYy9CLE9BQWQsRUFBdUI7QUFDNUJnQyxnQkFBTSxFQUFFLEtBQUksQ0FBQ2pDLElBRGU7QUFFNUI2QixlQUFLLEVBQUVBLEtBRnFCO0FBRzVCRixrQkFBUSxFQUFFQSxRQUhrQjtBQUk1Qk8sZ0JBQU0sRUFBRSxrQkFBTTtBQUNaLGlCQUFJLENBQUNxRixJQUFMOztBQUNBLG1CQUFPLElBQVA7QUFDRDtBQVAyQixTQUF2QixDQUFQO0FBU0QsT0F4QmlCLENBQWxCO0FBMEJBLFdBQUtDLE1BQUwsR0FBYyxJQUFkOztBQUNBLFVBQUksS0FBS3RILE9BQUwsQ0FBYTRHLFlBQWpCLEVBQStCO0FBQzdCLGFBQUtXLFVBQUw7QUFDRDs7QUFDRCxXQUFLRixJQUFMO0FBQ0Q7OztpQ0FFWTtBQUFBOztBQUNYLFdBQUtHLFlBQUwsQ0FBa0IsQ0FBQyxDQUFuQjtBQUVBLFdBQUtWLE1BQUwsQ0FBWVcsZ0JBQVosQ0FBNkJDLGlEQUFNLENBQUM5RCxLQUFwQyxFQUEyQyxVQUFDK0QsQ0FBRCxFQUFPO0FBQ2hELFlBQUluRixLQUFLLEdBQUcsSUFBSStCLCtDQUFKLENBQ1ZZLE9BQU8sR0FBR3dDLENBQUMsQ0FBQ0MsY0FBRixDQUFpQixDQUFqQixFQUFvQkMsS0FBdkIsR0FBK0JGLENBQUMsQ0FBQ0csT0FEOUIsRUFFVjNDLE9BQU8sR0FBR3dDLENBQUMsQ0FBQ0MsY0FBRixDQUFpQixDQUFqQixFQUFvQkcsS0FBdkIsR0FBK0JKLENBQUMsQ0FBQ0ssT0FGOUIsQ0FBWjs7QUFLQSxZQUFJLENBQUMsTUFBSSxDQUFDQyxZQUFWLEVBQXdCO0FBQ3RCLGdCQUFJLENBQUNBLFlBQUwsR0FBb0IvSCxrREFBUSxDQUFDZ0ksU0FBVCxDQUFtQixNQUFJLENBQUNwQixNQUF4QixDQUFwQjtBQUNEOztBQUVEdEUsYUFBSyxHQUFHQSxLQUFLLENBQUNuQixHQUFOLENBQVUsTUFBSSxDQUFDNEcsWUFBZixDQUFSOztBQUNBLFlBQU1qQyxLQUFLLEdBQUcsTUFBSSxDQUFDbUMsYUFBTCxDQUFtQjNGLEtBQW5CLENBQWQ7O0FBQ0EsWUFBSXdELEtBQUssS0FBSyxDQUFDLENBQWYsRUFBa0I7QUFDaEIsZ0JBQUksQ0FBQ3dCLFlBQUwsQ0FBbUIsTUFBSSxDQUFDWSxjQUFMLEtBQXdCcEMsS0FBekIsR0FBa0NBLEtBQWxDLEdBQTBDLENBQUMsQ0FBN0Q7QUFDRDtBQUNGLE9BZkQ7QUFnQkQ7OzttQ0FFYztBQUFBOztBQUNiLFdBQUsvRSxNQUFMLEdBQWMsS0FBS2lHLFVBQUwsQ0FBZ0JYLEdBQWhCLENBQW9CLFVBQUMxRSxTQUFELEVBQWU7QUFDL0MsWUFBTXpCLFFBQVEsR0FBR3lCLFNBQVMsQ0FBQ3dHLE9BQVYsR0FBb0IvSCxJQUFwQixDQUF5QixHQUF6QixDQUFqQjtBQUNBLGVBQU9KLGtEQUFRLENBQUNnQyxRQUFULENBQWtCLE1BQUksQ0FBQ2xDLE9BQUwsQ0FBYVMsTUFBYixDQUFvQlksR0FBcEIsQ0FBd0JqQixRQUF4QixDQUFsQixFQUFxRHlCLFNBQVMsQ0FBQ0osUUFBL0QsQ0FBUDtBQUNELE9BSGEsQ0FBZDtBQUlEOzs7a0NBRWF1RSxLLEVBQU9zQyxVLEVBQVk7QUFBQTs7QUFDL0IsVUFBTUMsSUFBSSxHQUFHRCxVQUFVLEdBQUcsQ0FBSCxHQUFPLENBQUMsQ0FBL0I7QUFFQSxhQUFPLFlBQU07QUFDWCxZQUFJbkIsQ0FBQyxHQUFHLENBQUNuQixLQUFLLEdBQUd1QyxJQUFULElBQWlCLE1BQUksQ0FBQ3RILE1BQUwsQ0FBWTZFLE1BQXJDOztBQUNBLFlBQUlxQixDQUFDLEdBQUcsQ0FBUixFQUFXO0FBQ1RBLFdBQUMsSUFBSSxNQUFJLENBQUNsRyxNQUFMLENBQVk2RSxNQUFqQjtBQUNEOztBQUNELGVBQU81RixrREFBUSxDQUFDa0MsY0FBVCxDQUF3QixNQUFJLENBQUNuQixNQUFMLENBQVlrRyxDQUFaLElBQWlCb0IsSUFBSSxHQUFHLE1BQUksQ0FBQ3ZJLE9BQUwsQ0FBYWtGLFVBQTdELENBQVA7QUFDRCxPQU5EO0FBT0Q7OzsyQkFFTTtBQUFBOztBQUNMLFVBQUksQ0FBQyxLQUFLb0MsTUFBVixFQUFrQjtBQUNoQjtBQUNEOztBQUVELFdBQUtrQixZQUFMO0FBQ0EsV0FBS3hCLE9BQUwsQ0FBYXlCLFNBQWIsQ0FBdUIsQ0FBdkIsRUFBMEIsQ0FBMUIsRUFBNkIsS0FBS3hJLGFBQUwsQ0FBbUJ3QyxJQUFuQixDQUF3QkssQ0FBckQsRUFBd0QsS0FBSzdDLGFBQUwsQ0FBbUJ3QyxJQUFuQixDQUF3Qk0sQ0FBaEY7QUFDQSxXQUFLbUUsVUFBTCxDQUFnQndCLE9BQWhCLENBQXdCLFVBQUNDLFVBQUQsRUFBYTNDLEtBQWIsRUFBdUI7QUFDN0MsY0FBSSxDQUFDNEMsT0FBTCxDQUFhLE1BQUksQ0FBQzVCLE9BQWxCLEVBQTJCLE1BQUksQ0FBQ2hILE9BQUwsQ0FBYVMsTUFBeEMsRUFBZ0QsTUFBSSxDQUFDVCxPQUFMLENBQWFXLE1BQTdELEVBQXFFcUYsS0FBckU7QUFDRCxPQUZEO0FBSUEsV0FBS2tCLFVBQUwsQ0FBZ0J3QixPQUFoQixDQUF3QixVQUFDQyxVQUFELEVBQWEzQyxLQUFiLEVBQXVCO0FBQzdDLFlBQUk2QyxhQUFKOztBQUNBLFlBQUksTUFBSSxDQUFDN0ksT0FBTCxDQUFhNEcsWUFBakIsRUFBK0I7QUFDN0JpQyx1QkFBYSxHQUFHOUMsd0JBQXdCLENBQUMsTUFBSSxDQUFDcUMsY0FBTixFQUFzQixNQUFJLENBQUNsQixVQUFMLENBQWdCcEIsTUFBdEMsQ0FBeEM7O0FBQ0EsY0FBSStDLGFBQWEsQ0FBQ0MsT0FBZCxDQUFzQjlDLEtBQXRCLE1BQWlDLENBQUMsQ0FBdEMsRUFBeUM7QUFDdkMsa0JBQUksQ0FBQytDLFlBQUwsQ0FBa0IvQyxLQUFsQjtBQUNEO0FBQ0YsU0FMRCxNQUtPO0FBQ0wsZ0JBQUksQ0FBQytDLFlBQUwsQ0FBa0IvQyxLQUFsQjtBQUNEO0FBQ0YsT0FWRDtBQVdBLFdBQUthLE1BQUw7QUFDRDs7O2dDQUVXOUcsTyxFQUF1QjtBQUFBOztBQUFBLFVBQWRDLE9BQWMsdUVBQUosRUFBSTs7QUFDakMsVUFBSSxDQUFDLEtBQUtzSCxNQUFWLEVBQWtCO0FBQ2hCO0FBQ0Q7O0FBQ0QsVUFBTS9FLFNBQVMsR0FBR3JDLGtEQUFRLENBQUNDLDBCQUFULENBQW9DSixPQUFwQyxFQUE2Q0EsT0FBN0MsQ0FBbEI7QUFDQSxVQUFNaUosSUFBSSxHQUFHekksTUFBTSxDQUFDQyxNQUFQLENBQWM7QUFDekJDLGNBQU0sRUFBRThCLFNBQVMsQ0FBQzdCLFNBQVYsRUFEaUI7QUFFekJDLGNBQU0sRUFBRTRCLFNBQVMsQ0FBQzNCLFVBQVYsS0FBeUIsQ0FGUjtBQUd6QnlGLGtCQUFVLEVBQUUsS0FBS3JHLE9BQUwsQ0FBYXFHO0FBSEEsT0FBZCxFQUlWckcsT0FKVSxDQUFiO0FBTUEsVUFBTThHLE1BQU0sR0FBR0MsbUVBQVksQ0FBQ2hILE9BQUQsRUFBVXdDLFNBQVYsQ0FBM0I7QUFDQSxVQUFNeUUsT0FBTyxHQUFHRixNQUFNLENBQUNHLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBaEI7QUFDQSxVQUFNZ0MsUUFBUSxHQUFHO0FBQ2Y1QixZQUFJLEVBQUUsZ0JBQU07QUFDVkwsaUJBQU8sQ0FBQ3lCLFNBQVIsQ0FBa0IsQ0FBbEIsRUFBcUIsQ0FBckIsRUFBd0JsRyxTQUFTLENBQUNFLElBQVYsQ0FBZUssQ0FBdkMsRUFBMENQLFNBQVMsQ0FBQ0UsSUFBVixDQUFlTSxDQUF6RDs7QUFDQSxnQkFBSSxDQUFDbUUsVUFBTCxDQUFnQndCLE9BQWhCLENBQXdCLFVBQUNDLFVBQUQsRUFBYTNDLEtBQWIsRUFBdUI7QUFDN0Msa0JBQUksQ0FBQzRDLE9BQUwsQ0FBYTVCLE9BQWIsRUFBc0JnQyxJQUFJLENBQUN2SSxNQUEzQixFQUFtQ3VJLElBQUksQ0FBQ3JJLE1BQXhDLEVBQWdEcUYsS0FBaEQ7QUFDRCxXQUZEO0FBR0Q7QUFOYyxPQUFqQjtBQVFBaUQsY0FBUSxDQUFDNUIsSUFBVDtBQUNBLGFBQU80QixRQUFQO0FBQ0Q7OztpQ0FFWWpELEssRUFBTztBQUNsQixVQUFJLE9BQU8sS0FBS2hHLE9BQUwsQ0FBYXFHLFVBQWIsQ0FBd0JMLEtBQXhCLENBQVAsS0FBMEMsVUFBOUMsRUFBMEQ7QUFDeEQsYUFBS2hHLE9BQUwsQ0FBYXFHLFVBQWIsQ0FBd0JMLEtBQXhCLElBQWlDLEtBQUtoRyxPQUFMLENBQWFxRyxVQUFiLENBQXdCTCxLQUF4QixFQUErQmtELElBQS9CLENBQW9DLElBQXBDLENBQWpDO0FBQ0Q7O0FBQ0QsYUFBTyxLQUFLbEosT0FBTCxDQUFhcUcsVUFBYixDQUF3QkwsS0FBeEIsQ0FBUDtBQUNEOzs7NEJBRU9nQixPLEVBQVN2RyxNLEVBQVFFLE0sRUFBUXFGLEssRUFBTztBQUN0QyxVQUFNbkYsVUFBVSxHQUFHLEtBQUtJLE1BQUwsQ0FBWStFLEtBQVosQ0FBbkI7QUFDQSxVQUFNaEYsUUFBUSxHQUFHLEtBQUtDLE1BQUwsQ0FBWSxDQUFDK0UsS0FBSyxHQUFDLENBQVAsSUFBWSxLQUFLL0UsTUFBTCxDQUFZNkUsTUFBcEMsQ0FBakI7QUFDQSxVQUFNcUQsS0FBSyxHQUFHLEtBQUtDLFlBQUwsQ0FBa0JwRCxLQUFsQixDQUFkO0FBRUFnQixhQUFPLENBQUNxQyxTQUFSO0FBQ0FyQyxhQUFPLENBQUNzQyxNQUFSLENBQWU3SSxNQUFNLENBQUNxQyxDQUF0QixFQUF5QnJDLE1BQU0sQ0FBQ3NDLENBQWhDO0FBQ0FpRSxhQUFPLENBQUN1QyxHQUFSLENBQVk5SSxNQUFNLENBQUNxQyxDQUFuQixFQUFzQnJDLE1BQU0sQ0FBQ3NDLENBQTdCLEVBQWdDcEMsTUFBaEMsRUFBd0NFLFVBQXhDLEVBQW9ERyxRQUFwRCxFQUE4RCxLQUE5RDtBQUNBZ0csYUFBTyxDQUFDd0MsTUFBUixDQUFlL0ksTUFBTSxDQUFDcUMsQ0FBdEIsRUFBeUJyQyxNQUFNLENBQUNzQyxDQUFoQztBQUNBaUUsYUFBTyxDQUFDeUMsU0FBUjtBQUNBekMsYUFBTyxDQUFDMEMsU0FBUixHQUFvQlAsS0FBcEI7QUFDQW5DLGFBQU8sQ0FBQzJDLElBQVI7QUFDRDs7O2lDQUVZM0QsSyxFQUFPO0FBQ2xCLFVBQUl4RCxLQUFKLEVBQVdvSCxHQUFYOztBQUNBLFVBQUksS0FBSzVKLE9BQUwsQ0FBYTBHLFFBQWpCLEVBQTJCO0FBQ3pCa0QsV0FBRyxHQUFHLEtBQUs1SixPQUFMLENBQWEwRyxRQUFiLFlBQWlDbUQsS0FBakMsR0FBeUMsS0FBSzdKLE9BQUwsQ0FBYTBHLFFBQWIsQ0FBc0JWLEtBQXRCLENBQXpDLEdBQXdFLEtBQUtoRyxPQUFMLENBQWEwRyxRQUEzRjtBQUNEOztBQUVELFVBQUlrRCxHQUFKLEVBQVM7QUFDUCxZQUFNcEksS0FBSyxHQUFHdEIsa0RBQVEsQ0FBQ2tDLGNBQVQsQ0FBd0IsS0FBS25CLE1BQUwsQ0FBWStFLEtBQVosQ0FBeEIsQ0FBZDtBQUNBeEQsYUFBSyxHQUFHLElBQUkrQiwrQ0FBSixDQUFVLENBQVYsRUFBYSxDQUFDcUYsR0FBRyxDQUFDRSxNQUFMLEdBQWMsQ0FBM0IsQ0FBUjtBQUNBdEgsYUFBSyxHQUFHQSxLQUFLLENBQUN1SCxHQUFOLENBQVUsS0FBSy9KLE9BQUwsQ0FBYTJHLGNBQXZCLENBQVI7QUFDQSxhQUFLSyxPQUFMLENBQWFnRCxTQUFiLENBQXVCLEtBQUsvSixhQUFMLENBQW1Cd0MsSUFBbkIsQ0FBd0JLLENBQXhCLEdBQTRCLENBQW5ELEVBQXNELEtBQUs3QyxhQUFMLENBQW1Cd0MsSUFBbkIsQ0FBd0JNLENBQXhCLEdBQTRCLENBQWxGO0FBQ0EsYUFBS2lFLE9BQUwsQ0FBYWlELE1BQWIsQ0FBb0J6SSxLQUFwQjtBQUNBLGFBQUt3RixPQUFMLENBQWFrRCxTQUFiLENBQXVCTixHQUF2QixFQUE0QnBILEtBQUssQ0FBQ00sQ0FBbEMsRUFBcUNOLEtBQUssQ0FBQ08sQ0FBM0M7QUFDQSxhQUFLaUUsT0FBTCxDQUFhbUQsWUFBYixDQUEwQixDQUExQixFQUE2QixDQUE3QixFQUFnQyxDQUFoQyxFQUFtQyxDQUFuQyxFQUFzQyxDQUF0QyxFQUF5QyxDQUF6QztBQUNEO0FBQ0Y7OztvQ0FFZTtBQUNkLFVBQU1sSixNQUFNLEdBQUcsS0FBS0EsTUFBTCxDQUFZbUosS0FBWixDQUFrQixDQUFsQixDQUFmO0FBQ0EsVUFBSUMsU0FBUyxHQUFHLEtBQUtwSixNQUFMLENBQVksQ0FBWixDQUFoQjtBQUVBQSxZQUFNLENBQUNLLElBQVAsQ0FBWStJLFNBQVo7QUFDQSxhQUFPcEosTUFBTSxDQUFDc0YsR0FBUCxDQUFXLFVBQUMvRSxLQUFELEVBQVc7QUFDM0IsWUFBTThJLFNBQVMsR0FBR3BLLGtEQUFRLENBQUNrQyxjQUFULENBQXdCWixLQUFLLEdBQUc2SSxTQUFoQyxDQUFsQjtBQUNBQSxpQkFBUyxHQUFHN0ksS0FBWjtBQUNBLGVBQU84SSxTQUFQO0FBQ0QsT0FKTSxDQUFQO0FBS0Q7OztpQ0FFWTtBQUNYLGFBQU8sS0FBS0MsYUFBTCxHQUFxQmhFLEdBQXJCLENBQXlCLFVBQUMrRCxTQUFEO0FBQUEsZUFBZUEsU0FBUyxJQUFJLElBQUl4SixJQUFJLENBQUNDLEVBQWIsQ0FBeEI7QUFBQSxPQUF6QixDQUFQO0FBQ0Q7Ozt1Q0FFa0I7QUFBQTs7QUFDakIsYUFBTyxLQUFLd0osYUFBTCxHQUFxQmhFLEdBQXJCLENBQXlCLFVBQUMrRCxTQUFELEVBQVluRCxDQUFaLEVBQWtCO0FBQ2hELGVBQU9qSCxrREFBUSxDQUFDa0MsY0FBVCxDQUF3QixNQUFJLENBQUNuQixNQUFMLENBQVlrRyxDQUFaLElBQWlCbUQsU0FBUyxHQUFHLENBQXJELENBQVA7QUFDRCxPQUZNLENBQVA7QUFHRDs7O2tDQUVhOUgsSyxFQUFPO0FBQ25CLFVBQU1oQixLQUFLLEdBQUd0QixrREFBUSxDQUFDZ0MsUUFBVCxDQUFrQixLQUFLbEMsT0FBTCxDQUFhUyxNQUEvQixFQUF1QytCLEtBQXZDLENBQWQ7QUFDQSxVQUFNN0IsTUFBTSxHQUFHVCxrREFBUSxDQUFDc0ssV0FBVCxDQUFxQixLQUFLeEssT0FBTCxDQUFhUyxNQUFsQyxFQUEwQytCLEtBQTFDLENBQWY7O0FBRUEsVUFBSTdCLE1BQU0sR0FBRyxLQUFLWCxPQUFMLENBQWFXLE1BQTFCLEVBQWtDO0FBQ2hDLGVBQU8sQ0FBQyxDQUFSO0FBQ0Q7O0FBRUQsVUFBSThKLE1BQU0sR0FBRyxDQUFDLENBQWQ7QUFBQSxVQUFpQnRELENBQWpCO0FBQUEsVUFBb0J1RCxDQUFwQjs7QUFDQSxXQUFLdkQsQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHLEtBQUtsRyxNQUFMLENBQVk2RSxNQUE1QixFQUFvQ3FCLENBQUMsRUFBckMsRUFBeUM7QUFDdkMsWUFBSXNELE1BQU0sS0FBSyxDQUFDLENBQVosSUFBaUIsS0FBS3hKLE1BQUwsQ0FBWXdKLE1BQVosSUFBc0IsS0FBS3hKLE1BQUwsQ0FBWWtHLENBQVosQ0FBM0MsRUFBMkQ7QUFDekRzRCxnQkFBTSxHQUFHdEQsQ0FBVDtBQUNEO0FBQ0Y7O0FBQ0QsV0FBS0EsQ0FBQyxHQUFHLENBQUosRUFBT3VELENBQUMsR0FBR0QsTUFBaEIsRUFBd0J0RCxDQUFDLEdBQUcsS0FBS2xHLE1BQUwsQ0FBWTZFLE1BQXhDLEVBQWdEcUIsQ0FBQyxJQUFJdUQsQ0FBQyxHQUFHLENBQUN2RCxDQUFDLEdBQUdzRCxNQUFMLElBQWUsS0FBS3hKLE1BQUwsQ0FBWTZFLE1BQXBGLEVBQTRGO0FBQzFGLFlBQUl0RSxLQUFLLEdBQUcsS0FBS1AsTUFBTCxDQUFZeUosQ0FBWixDQUFaLEVBQTRCO0FBQzFCO0FBQ0Q7QUFDRjs7QUFDRCxVQUFJLEVBQUVBLENBQUYsR0FBTSxDQUFWLEVBQWE7QUFDWEEsU0FBQyxJQUFJLEtBQUt6SixNQUFMLENBQVk2RSxNQUFqQjtBQUNEOztBQUNELGFBQU80RSxDQUFQO0FBQ0Q7Ozs4QkFFU3pKLE0sRUFBUTtBQUFBOztBQUNoQixXQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxXQUFLaUcsVUFBTCxDQUFnQndCLE9BQWhCLENBQXdCLFVBQUM3RyxTQUFELEVBQVlzRixDQUFaLEVBQWtCO0FBQ3hDLFlBQU0zRixLQUFLLEdBQUcsTUFBSSxDQUFDUCxNQUFMLENBQVlrRyxDQUFaLENBQWQ7QUFDQSxZQUFNL0csUUFBUSxHQUFHeUIsU0FBUyxDQUFDd0csT0FBVixHQUFvQi9ILElBQXBCLENBQXlCLEdBQXpCLENBQWpCO0FBQ0EsWUFBTW1CLFFBQVEsR0FBR3ZCLGtEQUFRLENBQUN3Qix3QkFBVCxDQUNmRixLQURlLEVBRWYsTUFBSSxDQUFDeEIsT0FBTCxDQUFhb0csV0FGRSxFQUdmLE1BQUksQ0FBQ3BHLE9BQUwsQ0FBYVMsTUFBYixDQUFvQlksR0FBcEIsQ0FBd0JqQixRQUF4QixDQUhlLENBQWpCO0FBTUF5QixpQkFBUyxDQUFDUSxJQUFWLENBQWVaLFFBQWYsRUFBeUIsQ0FBekIsRUFBNEIsSUFBNUIsRUFBa0MsSUFBbEM7QUFDRCxPQVZEO0FBV0EsV0FBSzRGLElBQUw7QUFDRDs7O2lDQUVZckIsSyxFQUFPO0FBQ2xCLFVBQU02QyxhQUFhLEdBQUc5Qyx3QkFBd0IsQ0FBQ0MsS0FBRCxFQUFRLEtBQUtrQixVQUFMLENBQWdCcEIsTUFBeEIsQ0FBOUM7QUFDQSxXQUFLc0MsY0FBTCxHQUFzQnBDLEtBQXRCO0FBQ0EsV0FBS2tCLFVBQUwsQ0FBZ0J3QixPQUFoQixDQUF3QixVQUFDN0csU0FBRCxFQUFZc0YsQ0FBWixFQUFrQjtBQUN4Q3RGLGlCQUFTLENBQUM4SSxNQUFWLEdBQW1COUIsYUFBYSxDQUFDQyxPQUFkLENBQXNCM0IsQ0FBdEIsTUFBNkIsQ0FBQyxDQUFqRDtBQUNELE9BRkQ7QUFHQSxXQUFLRSxJQUFMO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BTSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU11RCxNQUFNLEdBQUc7QUFBRUMsT0FBSyxFQUFMQSw4Q0FBS0E7QUFBUCxDQUFmLEMsQ0FBeUI7O0FBRXpCLElBQU0xRixPQUFPLEdBQUcsa0JBQWtCQyxNQUFsQztBQUFBLElBQTBDMEYsV0FBVyxHQUFHO0FBQ3BEbEgsT0FBSyxFQUFFLFdBRDZDO0FBRXBEdkIsTUFBSSxFQUFFLFdBRjhDO0FBR3BEd0IsS0FBRyxFQUFFO0FBSCtDLENBQXhEO0FBQUEsSUFJS2tILFdBQVcsR0FBRztBQUNmbkgsT0FBSyxFQUFFLFlBRFE7QUFFZnZCLE1BQUksRUFBRSxXQUZTO0FBR2Z3QixLQUFHLEVBQUU7QUFIVSxDQUpuQjtBQUFBLElBU0U2RCxNQUFNLEdBQUd2QyxPQUFPLEdBQUc0RixXQUFILEdBQWlCRCxXQVRuQztBQUFBLElBVUU1RCxVQUFVLEdBQUcsRUFWZjtBQUFBLElBV0U4RCxpQkFBaUIsR0FBR0Msa0VBQWdCLENBQUMsV0FBRCxDQVh0QztBQUFBLElBWUVDLGtCQUFrQixHQUFHRCxrRUFBZ0IsQ0FBQyxZQUFELENBWnZDOztBQWNBLFNBQVNFLFlBQVQsQ0FBc0JwTCxPQUF0QixFQUErQnFMLE9BQS9CLEVBQXdDO0FBQ3RDLE9BQUssSUFBSWpFLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdwSCxPQUFPLENBQUM2SCxjQUFSLENBQXVCOUIsTUFBM0MsRUFBbURxQixDQUFDLEVBQXBELEVBQXdEO0FBQ3RELFFBQUlwSCxPQUFPLENBQUM2SCxjQUFSLENBQXVCVCxDQUF2QixFQUEwQmtFLFVBQTFCLEtBQXlDRCxPQUE3QyxFQUFzRDtBQUNwRCxhQUFPckwsT0FBTyxDQUFDNkgsY0FBUixDQUF1QlQsQ0FBdkIsQ0FBUDtBQUNEO0FBQ0Y7O0FBQ0QsU0FBTyxLQUFQO0FBQ0Q7O0FBRUQsU0FBU21FLGlCQUFULENBQTJCekosU0FBM0IsRUFBc0M7QUFDcEMsTUFBTTBKLE9BQU8sR0FBRyw0RUFBaEI7O0FBQ0EsTUFBSXJFLFVBQVUsQ0FBQ3NFLElBQVgsQ0FBZ0IsVUFBQ0MsUUFBRDtBQUFBLFdBQWM1SixTQUFTLENBQUM5QixPQUFWLEtBQXNCMEwsUUFBUSxDQUFDMUwsT0FBN0M7QUFBQSxHQUFoQixDQUFKLEVBQTJFO0FBQ3pFLFVBQU13TCxPQUFOO0FBQ0Q7O0FBQ0RyRSxZQUFVLENBQUM1RixJQUFYLENBQWdCTyxTQUFoQjtBQUNEOztBQUVELFNBQVM2SixpQkFBVCxDQUEyQjdKLFNBQTNCLEVBQXNDO0FBQ3BDOEoscURBQVksQ0FBQ0MsWUFBYixDQUEwQi9KLFNBQTFCO0FBQ0Q7O0lBRUtDLFM7OztBQUNKLHFCQUFZL0IsT0FBWixFQUFpQztBQUFBOztBQUFBLFFBQVpDLE9BQVksdUVBQUosRUFBSTs7QUFBQTs7QUFDL0IsUUFBTStCLE1BQU0sR0FBRy9CLE9BQU8sQ0FBQytCLE1BQVIsSUFBa0I4Six1RUFBZ0IsQ0FBQzlMLE9BQUQsQ0FBakQ7QUFDQSxTQUFLK0wsT0FBTCxHQUFlLEVBQWY7QUFDQSxTQUFLOUwsT0FBTCxHQUFlTyxNQUFNLENBQUNDLE1BQVAsQ0FBYztBQUMzQnVCLFlBQU0sRUFBRUEsTUFEbUI7QUFFM0JKLFdBQUssRUFBRXFCLDZEQUFjLENBQUNqQixNQUFELEVBQVNBLE1BQVQsQ0FGTTtBQUczQmdLLGlCQUFXLEVBQUUsS0FIYztBQUkzQkMsc0JBQWdCLEVBQUUsS0FKUztBQUszQnZLLGNBQVEsRUFBRTtBQUxpQixLQUFkLEVBTVp6QixPQU5ZLENBQWY7QUFRQSxTQUFLaU0sS0FBTCxHQUFhLElBQUlyQixNQUFNLENBQUNDLEtBQVgsQ0FBaUIsSUFBakIsRUFBdUI7QUFBRXFCLGVBQVMsRUFBRSxJQUFiO0FBQW1CQyxrQkFBWSxFQUFFO0FBQWpDLEtBQXZCLENBQWI7QUFDQSxTQUFLbkssTUFBTCxHQUFjLElBQUk0SSxNQUFNLENBQUNDLEtBQVgsQ0FBaUIsSUFBakIsQ0FBZDtBQUNBLFNBQUt1QixPQUFMLEdBQWUsSUFBSXhCLE1BQU0sQ0FBQ0MsS0FBWCxDQUFpQixJQUFqQixDQUFmO0FBRUEsU0FBS29CLEtBQUwsQ0FBV2xDLEdBQVgsQ0FBZTtBQUFBLGFBQU0sS0FBSSxDQUFDMUgsSUFBTCxDQUFVLEtBQUksQ0FBQ1osUUFBZixFQUF5QixDQUF6QixFQUE0QixJQUE1QixFQUFrQyxJQUFsQyxDQUFOO0FBQUEsS0FBZjs7QUFFQSxRQUFJekIsT0FBTyxDQUFDaU0sS0FBWixFQUFtQjtBQUNqQixXQUFLQSxLQUFMLENBQVdsQyxHQUFYLENBQWUvSixPQUFPLENBQUNpTSxLQUF2QjtBQUNEOztBQUNELFFBQUlqTSxPQUFPLENBQUNnQyxNQUFaLEVBQW9CO0FBQ2xCLFdBQUtBLE1BQUwsQ0FBWStILEdBQVosQ0FBZ0IvSixPQUFPLENBQUNnQyxNQUF4QjtBQUNEOztBQUNELFFBQUloQyxPQUFPLENBQUNvTSxPQUFaLEVBQXFCO0FBQ25CLFdBQUtBLE9BQUwsQ0FBYXJDLEdBQWIsQ0FBaUIvSixPQUFPLENBQUNvTSxPQUF6QjtBQUNEOztBQUNELFNBQUtyTSxPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLNEIsS0FBTCxHQUFhLEtBQUszQixPQUFMLENBQWEyQixLQUExQjtBQUNBMkoscUJBQWlCLENBQUMsSUFBRCxDQUFqQjtBQUNBeEosYUFBUyxDQUFDdUssUUFBVixDQUFtQkMsSUFBbkIsQ0FBd0IsSUFBeEI7QUFDQSxTQUFLL0ssSUFBTDtBQUNEOzs7OzJCQUVNO0FBQ0wsV0FBS2dMLE9BQUwsR0FBZSxJQUFmO0FBQ0EsV0FBSzlCLE1BQUwsR0FBY3ZLLGtEQUFRLENBQUNnSSxTQUFULENBQW1CLEtBQUtuSSxPQUF4QixFQUFpQyxLQUFLQyxPQUFMLENBQWErQixNQUE5QyxFQUFzRCxJQUF0RCxDQUFkO0FBQ0EsV0FBS3lLLFdBQUwsR0FBbUIsS0FBSy9CLE1BQXhCO0FBQ0EsV0FBS2hKLFFBQUwsR0FBZ0IsS0FBS2dKLE1BQXJCOztBQUNBLFVBQUksS0FBS3pLLE9BQUwsQ0FBYXlCLFFBQWpCLEVBQTJCO0FBQ3pCLGFBQUtnTCxZQUFMLEdBQW9CLEtBQUt6TSxPQUFMLENBQWF5QixRQUFqQztBQUNBLGFBQUtZLElBQUwsQ0FBVSxLQUFLb0ssWUFBZixFQUE2QixDQUE3QixFQUFnQyxJQUFoQyxFQUFzQyxJQUF0QztBQUNELE9BSEQsTUFHTztBQUNMLGFBQUtBLFlBQUwsR0FBb0IsS0FBS2hDLE1BQXpCO0FBQ0Q7O0FBQ0QsV0FBS2lDLFVBQUwsR0FBa0IsS0FBS0MsU0FBTCxDQUFlQyxJQUFmLENBQW9CLElBQXBCLENBQWxCO0FBQ0EsV0FBS0MsU0FBTCxHQUFpQixLQUFLQyxRQUFMLENBQWNGLElBQWQsQ0FBbUIsSUFBbkIsQ0FBakI7QUFDQSxXQUFLRyxRQUFMLEdBQWdCLEtBQUtDLE9BQUwsQ0FBYUosSUFBYixDQUFrQixJQUFsQixDQUFoQjtBQUVBLFdBQUs3TSxPQUFMLENBQWEwSCxnQkFBYixDQUE4QnNELFdBQVcsQ0FBQ25ILEtBQTFDLEVBQWlELEtBQUs4SSxVQUF0RDtBQUNBLFdBQUszTSxPQUFMLENBQWEwSCxnQkFBYixDQUE4QnFELFdBQVcsQ0FBQ2xILEtBQTFDLEVBQWlELEtBQUs4SSxVQUF0RDs7QUFFQSxVQUFJLEtBQUsvSyxLQUFMLENBQVd5QixPQUFmLEVBQXdCO0FBQ3RCLGFBQUt6QixLQUFMLENBQVd5QixPQUFYO0FBQ0Q7QUFDRjs7OzZCQUVRO0FBQ1AsV0FBS3FILE1BQUwsR0FBY3ZLLGtEQUFRLENBQUNnSSxTQUFULENBQW1CLEtBQUtuSSxPQUF4QixFQUFpQyxLQUFLQyxPQUFMLENBQWErQixNQUE5QyxFQUFzRCxJQUF0RCxDQUFkO0FBQ0EsV0FBS3lLLFdBQUwsR0FBbUIsS0FBSy9CLE1BQXhCO0FBQ0EsV0FBS2hKLFFBQUwsR0FBZ0IsS0FBS2dKLE1BQXJCOztBQUNBLFVBQUksS0FBS3pLLE9BQUwsQ0FBYXlCLFFBQWpCLEVBQTJCO0FBQ3pCLGFBQUtnTCxZQUFMLEdBQW9CLEtBQUt6TSxPQUFMLENBQWF5QixRQUFqQztBQUNBLGFBQUtZLElBQUwsQ0FBVSxLQUFLb0ssWUFBZixFQUE2QixDQUE3QixFQUFnQyxJQUFoQyxFQUFzQyxJQUF0QztBQUNELE9BSEQsTUFHTztBQUNMLGFBQUtBLFlBQUwsR0FBb0IsS0FBS2hDLE1BQXpCO0FBQ0Q7O0FBRUQsVUFBSSxLQUFLOUksS0FBTCxDQUFXeUIsT0FBZixFQUF3QjtBQUN0QixhQUFLekIsS0FBTCxDQUFXeUIsT0FBWDtBQUNEO0FBQ0Y7Ozs0QkFFTzZKLFcsRUFBYTtBQUNuQixhQUFPL00sa0RBQVEsQ0FBQ0csZ0JBQVQsQ0FBMEIsS0FBS04sT0FBL0IsRUFBd0MsS0FBS0MsT0FBTCxDQUFhZ00sZ0JBQXJELENBQVA7QUFDRDs7O2tDQUVhO0FBQ1osV0FBS3ZLLFFBQUwsR0FBZ0IsS0FBS2dKLE1BQUwsQ0FBWVYsR0FBWixDQUFnQixLQUFLbUQsa0JBQUwsSUFBMkIsSUFBSTNJLCtDQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsQ0FBM0MsQ0FBaEI7QUFDQSxhQUFPLEtBQUs5QyxRQUFaO0FBQ0Q7OztnQ0FFVztBQUNWLGFBQU8sS0FBS0EsUUFBTCxDQUFjc0ksR0FBZCxDQUFrQixLQUFLMUIsT0FBTCxHQUFlL0gsSUFBZixDQUFvQixHQUFwQixDQUFsQixDQUFQO0FBQ0Q7OztrQ0FFYWtDLEssRUFBTztBQUNuQixXQUFLMEssa0JBQUwsR0FBMEIxSyxLQUExQjtBQUVBLFVBQUkySyxTQUFTLEdBQUcsS0FBS3BOLE9BQUwsQ0FBYXFOLEtBQWIsQ0FBbUJwQyxpQkFBbkIsQ0FBaEI7QUFDQSxVQUFJcUMsWUFBWSxHQUFHLGtCQUFrQjdLLEtBQUssQ0FBQ00sQ0FBeEIsR0FBNEIsS0FBNUIsR0FBb0NOLEtBQUssQ0FBQ08sQ0FBMUMsR0FBOEMsVUFBakU7QUFFQSxVQUFNdUssRUFBRSxHQUFHbEksTUFBTSxDQUFDbUksU0FBUCxDQUFpQkMsU0FBNUI7QUFDQSxVQUFNQyxJQUFJLEdBQUdILEVBQUUsQ0FBQ3hFLE9BQUgsQ0FBVyxPQUFYLENBQWI7O0FBRUEsVUFBSTJFLElBQUosRUFBVTtBQUNSSixvQkFBWSxHQUFHLGdCQUFnQjdLLEtBQUssQ0FBQ00sQ0FBdEIsR0FBMEIsS0FBMUIsR0FBa0NOLEtBQUssQ0FBQ08sQ0FBeEMsR0FBNEMsS0FBM0Q7O0FBQ0EsWUFBSSxDQUFDLHFCQUFxQjJLLElBQXJCLENBQTBCUCxTQUExQixDQUFMLEVBQTJDO0FBQ3pDQSxtQkFBUyxJQUFJRSxZQUFiO0FBQ0QsU0FGRCxNQUVPO0FBQ0xGLG1CQUFTLEdBQUdBLFNBQVMsQ0FBQ1EsT0FBVixDQUFrQixvQkFBbEIsRUFBd0NOLFlBQXhDLENBQVo7QUFDRDtBQUNGLE9BUEQsTUFPTztBQUNMLFlBQUksQ0FBQyx1QkFBdUJLLElBQXZCLENBQTRCUCxTQUE1QixDQUFMLEVBQTZDO0FBQzNDQSxtQkFBUyxJQUFJRSxZQUFiO0FBQ0QsU0FGRCxNQUVPO0FBQ0xGLG1CQUFTLEdBQUdBLFNBQVMsQ0FBQ1EsT0FBVixDQUFrQixzQkFBbEIsRUFBMENOLFlBQTFDLENBQVo7QUFDRDtBQUNGOztBQUVELFdBQUt0TixPQUFMLENBQWFxTixLQUFiLENBQW1CcEMsaUJBQW5CLElBQXdDbUMsU0FBeEM7QUFDRDs7O3lCQUVJM0ssSyxFQUE0QztBQUFBLFVBQXJDckIsSUFBcUMsdUVBQWhDLENBQWdDO0FBQUEsVUFBN0J5TSxLQUE2Qix1RUFBdkIsS0FBdUI7QUFBQSxVQUFoQkMsUUFBZ0IsdUVBQVAsS0FBTztBQUMvQ3JMLFdBQUssR0FBR0EsS0FBSyxDQUFDRyxLQUFOLEVBQVI7O0FBQ0EsVUFBSWlMLEtBQUosRUFBVztBQUNULGFBQUtwQixXQUFMLEdBQW1CaEssS0FBbkI7QUFDRDs7QUFFRCxXQUFLc0wsa0JBQUwsQ0FBd0J0TCxLQUF4QjtBQUVBLFdBQUtmLFFBQUwsR0FBZ0JlLEtBQWhCOztBQUVBLFVBQUkwSSxrQkFBSixFQUF3QjtBQUN0QixhQUFLbkwsT0FBTCxDQUFhcU4sS0FBYixDQUFtQmxDLGtCQUFuQixJQUF5Qy9KLElBQUksR0FBRyxJQUFoRDtBQUNEOztBQUVELFdBQUs0TSxhQUFMLENBQW1CdkwsS0FBSyxDQUFDbkIsR0FBTixDQUFVLEtBQUtvSixNQUFmLENBQW5COztBQUNBLFVBQUksQ0FBQ29ELFFBQUwsRUFBZTtBQUNiLGFBQUs3TCxNQUFMLENBQVlzSyxJQUFaO0FBQ0Q7QUFDRjs7O3NDQUVrQjtBQUNqQixXQUFLMEIsV0FBTCxDQUFpQixLQUFLQyxXQUFMLEVBQWpCO0FBQ0Q7OztnQ0FFV3pMLEssRUFBTztBQUNqQkEsV0FBSyxHQUFHQSxLQUFLLENBQUNHLEtBQU4sRUFBUjtBQUNBLFdBQUtsQixRQUFMLEdBQWdCZSxLQUFoQjs7QUFFQSxVQUFJMEksa0JBQUosRUFBd0I7QUFDdEIsYUFBS25MLE9BQUwsQ0FBYXFOLEtBQWIsQ0FBbUJsQyxrQkFBbkIsSUFBeUMsS0FBekM7QUFDRDs7QUFFRCxXQUFLNkMsYUFBTCxDQUFtQnZMLEtBQUssQ0FBQ25CLEdBQU4sQ0FBVSxLQUFLb0osTUFBZixDQUFuQjtBQUNEOzs7d0NBRW1CO0FBQ2xCLFVBQUlTLGtCQUFKLEVBQXdCO0FBQ3RCLGFBQUtuTCxPQUFMLENBQWFxTixLQUFiLENBQW1CbEMsa0JBQW5CLElBQXlDLEtBQXpDO0FBQ0Q7QUFDRjs7O3VDQUVrQjFJLEssRUFBTztBQUN4QixXQUFLMEwsYUFBTCxHQUFzQixLQUFLek0sUUFBTCxDQUFjcUIsQ0FBZCxHQUFrQk4sS0FBSyxDQUFDTSxDQUE5QztBQUNBLFdBQUtxTCxjQUFMLEdBQXVCLEtBQUsxTSxRQUFMLENBQWNxQixDQUFkLEdBQWtCTixLQUFLLENBQUNNLENBQS9DO0FBQ0EsV0FBS3NMLFdBQUwsR0FBb0IsS0FBSzNNLFFBQUwsQ0FBY3NCLENBQWQsR0FBa0JQLEtBQUssQ0FBQ08sQ0FBNUM7QUFDQSxXQUFLc0wsYUFBTCxHQUFzQixLQUFLNU0sUUFBTCxDQUFjc0IsQ0FBZCxHQUFrQlAsS0FBSyxDQUFDTyxDQUE5QztBQUNEOzs7OEJBRVN1TCxLLEVBQU87QUFDZixXQUFLQyxZQUFMLEdBQW9CRCxLQUFwQjs7QUFDQSxVQUFJLENBQUMsS0FBSy9CLE9BQU4sSUFBa0IsS0FBS3ZNLE9BQUwsQ0FBYStMLFdBQWIsSUFBNEIsQ0FBQyxLQUFLL0wsT0FBTCxDQUFhK0wsV0FBYixDQUF5QnVDLEtBQXpCLENBQW5ELEVBQXFGO0FBQ25GO0FBQ0Q7O0FBRUQsVUFBTUUsWUFBWSxHQUFJckosT0FBTyxJQUFLbUosS0FBSyxZQUFZbEosTUFBTSxDQUFDcUosVUFBMUQ7QUFFQSxXQUFLQyxnQkFBTCxHQUF3QixJQUFJbkssK0NBQUosQ0FBVWlLLFlBQVksR0FBR0YsS0FBSyxDQUFDMUcsY0FBTixDQUFxQixDQUFyQixFQUF3QkMsS0FBM0IsR0FBbUN5RyxLQUFLLENBQUN4RyxPQUEvRCxFQUF3RTBHLFlBQVksR0FBR0YsS0FBSyxDQUFDMUcsY0FBTixDQUFxQixDQUFyQixFQUF3QkcsS0FBM0IsR0FBbUN1RyxLQUFLLENBQUN0RyxPQUE3SCxDQUF4QjtBQUVBLFdBQUsyRyxjQUFMLEdBQXNCLEtBQUtWLFdBQUwsRUFBdEI7O0FBQ0EsVUFBSU8sWUFBSixFQUFrQjtBQUNoQixhQUFLSSxRQUFMLEdBQWdCTixLQUFLLENBQUMxRyxjQUFOLENBQXFCLENBQXJCLEVBQXdCeUQsVUFBeEM7QUFDRDs7QUFDRGlELFdBQUssQ0FBQ08sZUFBTjs7QUFDQSxVQUFJLEVBQUVQLEtBQUssQ0FBQ1EsTUFBTixZQUF3QjFKLE1BQU0sQ0FBQzJKLGdCQUEvQixJQUNBVCxLQUFLLENBQUNRLE1BQU4sWUFBd0IxSixNQUFNLENBQUMySixnQkFEakMsQ0FBSixFQUN3RDtBQUN0RFQsYUFBSyxDQUFDVSxjQUFOO0FBQ0QsT0FIRCxNQUdPO0FBQ0xWLGFBQUssQ0FBQ1EsTUFBTixDQUFhRyxLQUFiO0FBQ0Q7O0FBRURDLGNBQVEsQ0FBQ3pILGdCQUFULENBQTBCc0QsV0FBVyxDQUFDMUksSUFBdEMsRUFBNEMsS0FBS3dLLFNBQWpEO0FBQ0FxQyxjQUFRLENBQUN6SCxnQkFBVCxDQUEwQnFELFdBQVcsQ0FBQ3pJLElBQXRDLEVBQTRDLEtBQUt3SyxTQUFqRDtBQUVBcUMsY0FBUSxDQUFDekgsZ0JBQVQsQ0FBMEJzRCxXQUFXLENBQUNsSCxHQUF0QyxFQUEyQyxLQUFLa0osUUFBaEQ7QUFDQW1DLGNBQVEsQ0FBQ3pILGdCQUFULENBQTBCcUQsV0FBVyxDQUFDakgsR0FBdEMsRUFBMkMsS0FBS2tKLFFBQWhEO0FBRUEsV0FBS29DLFVBQUwsR0FBa0IsSUFBbEI7QUFFQSxXQUFLL0MsT0FBTCxDQUFhRSxJQUFiLENBQWtCZ0MsS0FBbEI7QUFDQWMscUVBQVEsQ0FBQyxLQUFLclAsT0FBTixFQUFlLFFBQWYsQ0FBUjtBQUNBLFdBQUtpQyxNQUFMLENBQVlzSyxJQUFaLENBQWlCZ0MsS0FBakI7QUFDRDs7OzZCQUVRQSxLLEVBQU87QUFDZCxXQUFLQyxZQUFMLEdBQW9CRCxLQUFwQjtBQUNBLFVBQUllLEtBQUo7QUFFQSxVQUFNYixZQUFZLEdBQUlySixPQUFPLElBQUttSixLQUFLLFlBQVlsSixNQUFNLENBQUNxSixVQUExRDs7QUFDQSxVQUFJRCxZQUFKLEVBQWtCO0FBQ2hCYSxhQUFLLEdBQUdsRSxZQUFZLENBQUNtRCxLQUFELEVBQVEsS0FBS00sUUFBYixDQUFwQjs7QUFFQSxZQUFJLENBQUNTLEtBQUwsRUFBWTtBQUNWO0FBQ0Q7QUFDRjs7QUFFRGYsV0FBSyxDQUFDTyxlQUFOO0FBQ0FQLFdBQUssQ0FBQ1UsY0FBTjtBQUNBLFVBQU1NLFVBQVUsR0FBRyxJQUFJL0ssK0NBQUosQ0FBVWlLLFlBQVksR0FBR2EsS0FBSyxDQUFDeEgsS0FBVCxHQUFpQnlHLEtBQUssQ0FBQ3hHLE9BQTdDLEVBQXNEMEcsWUFBWSxHQUFHYSxLQUFLLENBQUN0SCxLQUFULEdBQWlCdUcsS0FBSyxDQUFDdEcsT0FBekYsQ0FBbkI7O0FBQ0EsVUFBSXhGLEtBQUssR0FBRyxLQUFLbU0sY0FBTCxDQUFvQjVFLEdBQXBCLENBQXdCdUYsVUFBVSxDQUFDak8sR0FBWCxDQUFlLEtBQUtxTixnQkFBcEIsQ0FBeEIsQ0FBWjs7QUFDQWxNLFdBQUssR0FBRyxLQUFLYixLQUFMLENBQVdhLEtBQVgsRUFBa0IsS0FBSzZGLE9BQUwsRUFBbEIsQ0FBUjtBQUNBLFdBQUtpSCxVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLFdBQUtqTixJQUFMLENBQVVHLEtBQVYsRUFBaUIsQ0FBakI7QUFDRDs7OzRCQUVPOEwsSyxFQUFPO0FBQ2IsVUFBTUUsWUFBWSxHQUFJckosT0FBTyxJQUFLbUosS0FBSyxZQUFZbEosTUFBTSxDQUFDcUosVUFBMUQ7O0FBRUEsVUFBSUQsWUFBWSxJQUFJLENBQUNyRCxZQUFZLENBQUNtRCxLQUFELEVBQVEsS0FBS00sUUFBYixDQUFqQyxFQUF5RDtBQUN2RDtBQUNEOztBQUVETixXQUFLLENBQUNPLGVBQU47QUFDQVAsV0FBSyxDQUFDVSxjQUFOO0FBQ0EsV0FBSy9DLEtBQUwsQ0FBV0ssSUFBWCxDQUFnQmdDLEtBQWhCO0FBRUFZLGNBQVEsQ0FBQ0ssbUJBQVQsQ0FBNkJ4RSxXQUFXLENBQUMxSSxJQUF6QyxFQUErQyxLQUFLd0ssU0FBcEQ7QUFDQXFDLGNBQVEsQ0FBQ0ssbUJBQVQsQ0FBNkJ6RSxXQUFXLENBQUN6SSxJQUF6QyxFQUErQyxLQUFLd0ssU0FBcEQ7QUFFQXFDLGNBQVEsQ0FBQ0ssbUJBQVQsQ0FBNkJ4RSxXQUFXLENBQUNsSCxHQUF6QyxFQUE4QyxLQUFLa0osUUFBbkQ7QUFDQW1DLGNBQVEsQ0FBQ0ssbUJBQVQsQ0FBNkJ6RSxXQUFXLENBQUNqSCxHQUF6QyxFQUE4QyxLQUFLa0osUUFBbkQ7QUFFQSxXQUFLb0MsVUFBTCxHQUFrQixLQUFsQjtBQUNBSyx3RUFBVyxDQUFDLEtBQUt6UCxPQUFOLEVBQWUsUUFBZixDQUFYO0FBQ0Q7OzttQ0FFYztBQUNiLGFBQU8sSUFBSTBQLG1EQUFKLENBQWMsS0FBS2hPLFFBQW5CLEVBQTZCLEtBQUs0RyxPQUFMLEVBQTdCLENBQVA7QUFDRDs7OzhCQUVTO0FBQ1IsV0FBS0EsT0FBTCxDQUFhLElBQWI7O0FBQ0EsVUFBSSxLQUFLMUcsS0FBTCxDQUFXeUIsT0FBZixFQUF3QjtBQUN0QixhQUFLekIsS0FBTCxDQUFXeUIsT0FBWDtBQUNEO0FBQ0Y7Ozs4QkFFUztBQUNSLFdBQUtyRCxPQUFMLENBQWF3UCxtQkFBYixDQUFpQ3hFLFdBQVcsQ0FBQ25ILEtBQTdDLEVBQW9ELEtBQUs4SSxVQUF6RDtBQUNBLFdBQUszTSxPQUFMLENBQWF3UCxtQkFBYixDQUFpQ3pFLFdBQVcsQ0FBQ2xILEtBQTdDLEVBQW9ELEtBQUs4SSxVQUF6RDtBQUNBLFdBQUszTSxPQUFMLENBQWF3UCxtQkFBYixDQUFpQ3hFLFdBQVcsQ0FBQzFJLElBQTdDLEVBQW1ELEtBQUt3SyxTQUF4RDtBQUNBLFdBQUs5TSxPQUFMLENBQWF3UCxtQkFBYixDQUFpQ3pFLFdBQVcsQ0FBQ3pJLElBQTdDLEVBQW1ELEtBQUt3SyxTQUF4RDtBQUNBLFdBQUs5TSxPQUFMLENBQWF3UCxtQkFBYixDQUFpQ3hFLFdBQVcsQ0FBQ2xILEdBQTdDLEVBQWtELEtBQUtrSixRQUF2RDtBQUNBLFdBQUtoTixPQUFMLENBQWF3UCxtQkFBYixDQUFpQ3pFLFdBQVcsQ0FBQ2pILEdBQTdDLEVBQWtELEtBQUtrSixRQUF2RDtBQUVBLFdBQUtkLEtBQUwsQ0FBV3lELEtBQVg7QUFDQSxXQUFLMU4sTUFBTCxDQUFZME4sS0FBWjtBQUNEOzs7d0JBRVk7QUFDWCxhQUFPLEtBQUtuRCxPQUFaO0FBQ0QsSztzQkFFVTVCLE0sRUFBUTtBQUNqQixVQUFJQSxNQUFKLEVBQVk7QUFDVjZFLDBFQUFXLENBQUMsS0FBS3pQLE9BQU4sRUFBZSxTQUFmLENBQVg7QUFDRCxPQUZELE1BRU87QUFDTHFQLHVFQUFRLENBQUMsS0FBS3JQLE9BQU4sRUFBZSxTQUFmLENBQVI7QUFDRDs7QUFFRCxhQUFPLEtBQUt3TSxPQUFMLEdBQWU1QixNQUF0QjtBQUNEOzs7Ozs7QUFHSDdJLFNBQVMsQ0FBQ3VLLFFBQVYsR0FBcUIsSUFBSXpCLE1BQU0sQ0FBQ0MsS0FBWCxDQUFpQi9JLFNBQWpCLEVBQTRCO0FBQUVvSyxXQUFTLEVBQUUsSUFBYjtBQUFtQkMsY0FBWSxFQUFFO0FBQWpDLENBQTVCLENBQXJCO0FBQ0FySyxTQUFTLENBQUN1SyxRQUFWLENBQW1CdEMsR0FBbkIsQ0FBdUIyQixpQkFBdkI7Ozs7Ozs7Ozs7Ozs7QUNuVUE7QUFBQTs7QUFFQSxTQUFTYixLQUFULENBQWU3RCxPQUFmLEVBQXNDO0FBQUEsTUFBZGhILE9BQWMsdUVBQUosRUFBSTtBQUNwQyxPQUFLMlAsS0FBTCxHQUFhLEVBQWI7QUFDQSxPQUFLM0ksT0FBTCxHQUFlQSxPQUFmO0FBQ0EsT0FBS2tGLFNBQUwsR0FBaUJsTSxPQUFPLENBQUNrTSxTQUFSLElBQXFCLEtBQXRDO0FBQ0EsT0FBS0MsWUFBTCxHQUFvQm5NLE9BQU8sQ0FBQ21NLFlBQVIsSUFBd0IsS0FBNUM7QUFDRDs7QUFFRHRCLEtBQUssQ0FBQytFLFNBQU4sQ0FBZ0J0RCxJQUFoQixHQUF1QixZQUFXO0FBQ2hDLE1BQU11RCxJQUFJLEdBQUcsR0FBR3pGLEtBQUgsQ0FBU2xCLElBQVQsQ0FBYy9GLFNBQWQsQ0FBYjtBQUNBLE1BQU0yTSxFQUFFLEdBQUcsS0FBSzVELFNBQUwsR0FBaUIsS0FBS3lELEtBQUwsQ0FBV3ZGLEtBQVgsR0FBbUIyRixPQUFuQixFQUFqQixHQUFnRCxLQUFLSixLQUFoRTtBQUNBLE1BQUlLLFFBQUo7O0FBRUEsT0FBSyxJQUFJN0ksQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRzJJLEVBQUUsQ0FBQ2hLLE1BQXZCLEVBQStCcUIsQ0FBQyxFQUFoQyxFQUFvQztBQUNsQzZJLFlBQVEsR0FBR0YsRUFBRSxDQUFDM0ksQ0FBRCxDQUFGLENBQU1qRSxLQUFOLENBQVksS0FBSzhELE9BQWpCLEVBQTBCNkksSUFBMUIsQ0FBWDs7QUFDQSxRQUFJLEtBQUsxRCxZQUFMLElBQXFCNkQsUUFBekIsRUFBbUM7QUFDakMsYUFBTyxJQUFQO0FBQ0Q7QUFDRjs7QUFDRCxTQUFPLENBQUMsS0FBSzdELFlBQWI7QUFDRCxDQVpEOztBQWNBdEIsS0FBSyxDQUFDK0UsU0FBTixDQUFnQjdGLEdBQWhCLEdBQXNCLFVBQVNrRyxDQUFULEVBQVk7QUFDaEMsT0FBS04sS0FBTCxDQUFXck8sSUFBWCxDQUFnQjJPLENBQWhCO0FBQ0QsQ0FGRDs7QUFJQXBGLEtBQUssQ0FBQytFLFNBQU4sQ0FBZ0JNLE9BQWhCLEdBQTBCLFVBQVNELENBQVQsRUFBWTtBQUNwQyxPQUFLTixLQUFMLENBQVdPLE9BQVgsQ0FBbUJELENBQW5CO0FBQ0QsQ0FGRDs7QUFJQXBGLEtBQUssQ0FBQytFLFNBQU4sQ0FBZ0JPLE1BQWhCLEdBQXlCLFVBQVNGLENBQVQsRUFBWTtBQUNuQyxNQUFNakssS0FBSyxHQUFHLEtBQUsySixLQUFMLENBQVc3RyxPQUFYLENBQW1CbUgsQ0FBbkIsQ0FBZDs7QUFDQSxNQUFJakssS0FBSyxLQUFLLENBQUMsQ0FBZixFQUFrQjtBQUNoQixTQUFLMkosS0FBTCxDQUFXUyxNQUFYLENBQWtCcEssS0FBbEIsRUFBeUIsQ0FBekI7QUFDRDtBQUNGLENBTEQ7O0FBT0E2RSxLQUFLLENBQUMrRSxTQUFOLENBQWdCRixLQUFoQixHQUF3QixVQUFTVyxFQUFULEVBQWE7QUFDbkMsT0FBS1YsS0FBTCxHQUFhLEVBQWI7QUFDRCxDQUZEOztBQUllOUUsb0VBQWYsRTs7Ozs7Ozs7Ozs7QUMxQ0E7QUFDQSxJQUFNeUYsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBU0MsY0FBVCxFQUF5QkMsV0FBekIsRUFBc0M7QUFDbEQ7QUFDRixNQUFJck4sU0FBUyxDQUFDLENBQUQsQ0FBYixFQUFrQjtBQUNoQixTQUFLLElBQUlnRSxDQUFDLEdBQUMsQ0FBTixFQUFTc0osR0FBRyxHQUFDdE4sU0FBUyxDQUFDMkMsTUFBNUIsRUFBb0NxQixDQUFDLEdBQUNzSixHQUF0QyxFQUEyQ3RKLENBQUMsRUFBNUMsRUFBZ0Q7QUFDOUNvSixvQkFBYyxDQUFDWCxTQUFmLENBQXlCek0sU0FBUyxDQUFDZ0UsQ0FBRCxDQUFsQyxJQUF5Q3FKLFdBQVcsQ0FBQ1osU0FBWixDQUFzQnpNLFNBQVMsQ0FBQ2dFLENBQUQsQ0FBL0IsQ0FBekM7QUFDRDtBQUNGLEdBSkQsTUFJTztBQUNMLFNBQUssSUFBTXVKLFVBQVgsSUFBeUJGLFdBQVcsQ0FBQ1osU0FBckMsRUFBZ0Q7QUFDOUM7OztBQUdBLFVBQUksQ0FBQ1csY0FBYyxDQUFDWCxTQUFmLENBQXlCYyxVQUF6QixDQUFMLEVBQTJDO0FBQ3pDSCxzQkFBYyxDQUFDWCxTQUFmLENBQXlCYyxVQUF6QixJQUF1Q0YsV0FBVyxDQUFDWixTQUFaLENBQXNCYyxVQUF0QixDQUF2QztBQUNEO0FBQ0Y7QUFDRjtBQUNGLENBaEJEO0FBaUJBOzs7QUFDQUosT0FBTyxDQUFDSyxRQUFELEVBQVc5RyxLQUFYLEVBQWtCLFNBQWxCLENBQVAsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ25CTXRGLEs7OztBQUNKLGlCQUFZekIsQ0FBWixFQUFlQyxDQUFmLEVBQWtCO0FBQUE7O0FBQ2hCLFNBQUtELENBQUwsR0FBU0EsQ0FBVDtBQUNBLFNBQUtDLENBQUwsR0FBU0EsQ0FBVDtBQUNEOzs7O3dCQUVHNk4sQyxFQUFHO0FBQ0wsYUFBTyxJQUFJck0sS0FBSixDQUFVLEtBQUt6QixDQUFMLEdBQVM4TixDQUFDLENBQUM5TixDQUFyQixFQUF3QixLQUFLQyxDQUFMLEdBQVM2TixDQUFDLENBQUM3TixDQUFuQyxDQUFQO0FBQ0Q7Ozt3QkFFRzZOLEMsRUFBRztBQUNMLGFBQU8sSUFBSXJNLEtBQUosQ0FBVSxLQUFLekIsQ0FBTCxHQUFTOE4sQ0FBQyxDQUFDOU4sQ0FBckIsRUFBd0IsS0FBS0MsQ0FBTCxHQUFTNk4sQ0FBQyxDQUFDN04sQ0FBbkMsQ0FBUDtBQUNEOzs7eUJBRUk4TixDLEVBQUc7QUFDTixhQUFPLElBQUl0TSxLQUFKLENBQVUsS0FBS3pCLENBQUwsR0FBUytOLENBQW5CLEVBQXNCLEtBQUs5TixDQUFMLEdBQVM4TixDQUEvQixDQUFQO0FBQ0Q7OzsrQkFFVTtBQUNULGFBQU8sSUFBSXRNLEtBQUosQ0FBVSxDQUFDLEtBQUt6QixDQUFoQixFQUFtQixDQUFDLEtBQUtDLENBQXpCLENBQVA7QUFDRDs7OzRCQUVPNk4sQyxFQUFHO0FBQ1QsYUFBUSxLQUFLOU4sQ0FBTCxLQUFXOE4sQ0FBQyxDQUFDOU4sQ0FBYixJQUFrQixLQUFLQyxDQUFMLEtBQVc2TixDQUFDLENBQUM3TixDQUF2QztBQUNEOzs7NEJBRU87QUFDTixhQUFPLElBQUl3QixLQUFKLENBQVUsS0FBS3pCLENBQWYsRUFBa0IsS0FBS0MsQ0FBdkIsQ0FBUDtBQUNEOzs7K0JBRVU7QUFDVCwwQkFBYSxLQUFLRCxDQUFsQixnQkFBeUIsS0FBS0MsQ0FBOUI7QUFDRDs7Ozs7O0lBR0cwTSxTOzs7QUFDSixxQkFBWWhPLFFBQVosRUFBc0JnQixJQUF0QixFQUE0QjtBQUFBOztBQUMxQixTQUFLaEIsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxTQUFLZ0IsSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7Ozs7NEJBRU87QUFDTixhQUFPLEtBQUtoQixRQUFaO0FBQ0Q7Ozs0QkFFTztBQUNOLGFBQU8sSUFBSThDLEtBQUosQ0FBVSxLQUFLOUMsUUFBTCxDQUFjcUIsQ0FBZCxHQUFrQixLQUFLTCxJQUFMLENBQVVLLENBQXRDLEVBQXlDLEtBQUtyQixRQUFMLENBQWNzQixDQUF2RCxDQUFQO0FBQ0Q7Ozs0QkFFTztBQUNOLGFBQU8sS0FBS3RCLFFBQUwsQ0FBY3NJLEdBQWQsQ0FBa0IsS0FBS3RILElBQXZCLENBQVA7QUFDRDs7OzRCQUVPO0FBQ04sYUFBTyxJQUFJOEIsS0FBSixDQUFVLEtBQUs5QyxRQUFMLENBQWNxQixDQUF4QixFQUEyQixLQUFLckIsUUFBTCxDQUFjc0IsQ0FBZCxHQUFrQixLQUFLTixJQUFMLENBQVVNLENBQXZELENBQVA7QUFDRDs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLdEIsUUFBTCxDQUFjc0ksR0FBZCxDQUFrQixLQUFLdEgsSUFBTCxDQUFVbkMsSUFBVixDQUFlLEdBQWYsQ0FBbEIsQ0FBUDtBQUNEOzs7dUJBRUV3USxJLEVBQU07QUFDUCxVQUFNclAsUUFBUSxHQUFHLElBQUk4QyxLQUFKLENBQVV6RCxJQUFJLENBQUNpUSxHQUFMLENBQVMsS0FBS3RQLFFBQUwsQ0FBY3FCLENBQXZCLEVBQTBCZ08sSUFBSSxDQUFDclAsUUFBTCxDQUFjcUIsQ0FBeEMsQ0FBVixFQUFzRGhDLElBQUksQ0FBQ2lRLEdBQUwsQ0FBUyxLQUFLdFAsUUFBTCxDQUFjc0IsQ0FBdkIsRUFBMEIrTixJQUFJLENBQUNyUCxRQUFMLENBQWNzQixDQUF4QyxDQUF0RCxDQUFqQjtBQUNBLFVBQU1OLElBQUksR0FBSSxJQUFJOEIsS0FBSixDQUFVekQsSUFBSSxDQUFDa1EsR0FBTCxDQUFTLEtBQUt2UCxRQUFMLENBQWNxQixDQUFkLEdBQWtCLEtBQUtMLElBQUwsQ0FBVUssQ0FBckMsRUFBd0NnTyxJQUFJLENBQUNyUCxRQUFMLENBQWNxQixDQUFkLEdBQWtCZ08sSUFBSSxDQUFDck8sSUFBTCxDQUFVSyxDQUFwRSxDQUFWLEVBQWtGaEMsSUFBSSxDQUFDa1EsR0FBTCxDQUFTLEtBQUt2UCxRQUFMLENBQWNzQixDQUFkLEdBQWtCLEtBQUtOLElBQUwsQ0FBVU0sQ0FBckMsRUFBd0MrTixJQUFJLENBQUNyUCxRQUFMLENBQWNzQixDQUFkLEdBQWtCK04sSUFBSSxDQUFDck8sSUFBTCxDQUFVTSxDQUFwRSxDQUFsRixDQUFELENBQTRKMUIsR0FBNUosQ0FBZ0tJLFFBQWhLLENBQWI7QUFDQSxhQUFPLElBQUlnTyxTQUFKLENBQWNoTyxRQUFkLEVBQXdCZ0IsSUFBeEIsQ0FBUDtBQUNEOzs7d0JBRUdxTyxJLEVBQU07QUFDUixVQUFNclAsUUFBUSxHQUFHLElBQUk4QyxLQUFKLENBQVV6RCxJQUFJLENBQUNrUSxHQUFMLENBQVMsS0FBS3ZQLFFBQUwsQ0FBY3FCLENBQXZCLEVBQTBCZ08sSUFBSSxDQUFDclAsUUFBTCxDQUFjcUIsQ0FBeEMsQ0FBVixFQUFzRGhDLElBQUksQ0FBQ2tRLEdBQUwsQ0FBUyxLQUFLdlAsUUFBTCxDQUFjc0IsQ0FBdkIsRUFBMEIrTixJQUFJLENBQUNyUCxRQUFMLENBQWNzQixDQUF4QyxDQUF0RCxDQUFqQjtBQUNBLFVBQU1OLElBQUksR0FBSSxJQUFJOEIsS0FBSixDQUFVekQsSUFBSSxDQUFDaVEsR0FBTCxDQUFTLEtBQUt0UCxRQUFMLENBQWNxQixDQUFkLEdBQWtCLEtBQUtMLElBQUwsQ0FBVUssQ0FBckMsRUFBd0NnTyxJQUFJLENBQUNyUCxRQUFMLENBQWNxQixDQUFkLEdBQWtCZ08sSUFBSSxDQUFDck8sSUFBTCxDQUFVSyxDQUFwRSxDQUFWLEVBQWtGaEMsSUFBSSxDQUFDaVEsR0FBTCxDQUFTLEtBQUt0UCxRQUFMLENBQWNzQixDQUFkLEdBQWtCLEtBQUtOLElBQUwsQ0FBVU0sQ0FBckMsRUFBd0MrTixJQUFJLENBQUNyUCxRQUFMLENBQWNzQixDQUFkLEdBQWtCK04sSUFBSSxDQUFDck8sSUFBTCxDQUFVTSxDQUFwRSxDQUFsRixDQUFELENBQTRKMUIsR0FBNUosQ0FBZ0tJLFFBQWhLLENBQWI7O0FBQ0EsVUFBSWdCLElBQUksQ0FBQ0ssQ0FBTCxJQUFVLENBQVYsSUFBZUwsSUFBSSxDQUFDTSxDQUFMLElBQVUsQ0FBN0IsRUFBZ0M7QUFDOUIsZUFBTyxJQUFQO0FBQ0Q7O0FBQ0QsYUFBTyxJQUFJME0sU0FBSixDQUFjaE8sUUFBZCxFQUF3QmdCLElBQXhCLENBQVA7QUFDRDs7O2lDQUVZbU8sQyxFQUFHO0FBQ2QsYUFBTyxFQUFFLEtBQUtuUCxRQUFMLENBQWNxQixDQUFkLEdBQWtCOE4sQ0FBQyxDQUFDOU4sQ0FBcEIsSUFBeUIsS0FBS3JCLFFBQUwsQ0FBY3FCLENBQWQsR0FBa0IsS0FBS0wsSUFBTCxDQUFVSyxDQUE1QixHQUFnQzhOLENBQUMsQ0FBQzlOLENBQTNELElBQWdFLEtBQUtyQixRQUFMLENBQWNzQixDQUFkLEdBQWtCNk4sQ0FBQyxDQUFDN04sQ0FBcEYsSUFBeUYsS0FBS3RCLFFBQUwsQ0FBY3NCLENBQWQsR0FBa0IsS0FBS04sSUFBTCxDQUFVTSxDQUE1QixHQUFnQzZOLENBQUMsQ0FBQzdOLENBQTdILENBQVA7QUFDRDs7O3FDQUVnQlIsUyxFQUFXO0FBQzFCLGFBQU8sS0FBSzBPLFlBQUwsQ0FBa0IxTyxTQUFTLENBQUNkLFFBQTVCLEtBQXlDLEtBQUt3UCxZQUFMLENBQWtCMU8sU0FBUyxDQUFDTSxLQUFWLEVBQWxCLENBQWhEO0FBQ0Q7OztnQ0FFV2lPLEksRUFBTUksSSxFQUFNO0FBQ3RCLFVBQUlDLE9BQUosRUFBYUMsY0FBYjs7QUFDQSxVQUFJRixJQUFKLEVBQVU7QUFDUkMsZUFBTyxHQUFHRCxJQUFWO0FBQ0QsT0FGRCxNQUVPO0FBQ0xFLHNCQUFjLEdBQUcsS0FBS0MsR0FBTCxDQUFTUCxJQUFULENBQWpCOztBQUNBLFlBQUksQ0FBQ00sY0FBTCxFQUFxQjtBQUNuQixpQkFBT04sSUFBUDtBQUNEOztBQUNESyxlQUFPLEdBQUdDLGNBQWMsQ0FBQzNPLElBQWYsQ0FBb0JLLENBQXBCLEdBQXdCc08sY0FBYyxDQUFDM08sSUFBZixDQUFvQk0sQ0FBNUMsR0FBZ0QsR0FBaEQsR0FBc0QsR0FBaEU7QUFDRDs7QUFDRCxVQUFNdU8sVUFBVSxHQUFHLEtBQUs1USxTQUFMLEVBQW5CO0FBQ0EsVUFBTTZRLFVBQVUsR0FBR1QsSUFBSSxDQUFDcFEsU0FBTCxFQUFuQjtBQUNBLFVBQU02SCxJQUFJLEdBQUcrSSxVQUFVLENBQUNILE9BQUQsQ0FBVixHQUFzQkksVUFBVSxDQUFDSixPQUFELENBQWhDLEdBQTRDLENBQUMsQ0FBN0MsR0FBaUQsQ0FBOUQ7QUFDQSxVQUFNMUcsTUFBTSxHQUFHbEMsSUFBSSxHQUFHLENBQVAsR0FBVyxLQUFLOUcsUUFBTCxDQUFjMFAsT0FBZCxJQUF5QixLQUFLMU8sSUFBTCxDQUFVME8sT0FBVixDQUF6QixHQUE4Q0wsSUFBSSxDQUFDclAsUUFBTCxDQUFjMFAsT0FBZCxDQUF6RCxHQUFrRixLQUFLMVAsUUFBTCxDQUFjMFAsT0FBZCxLQUEwQkwsSUFBSSxDQUFDclAsUUFBTCxDQUFjMFAsT0FBZCxJQUF5QkwsSUFBSSxDQUFDck8sSUFBTCxDQUFVME8sT0FBVixDQUFuRCxDQUFqRztBQUNBTCxVQUFJLENBQUNyUCxRQUFMLENBQWMwUCxPQUFkLElBQXlCTCxJQUFJLENBQUNyUCxRQUFMLENBQWMwUCxPQUFkLElBQXlCMUcsTUFBbEQ7QUFDQSxhQUFPcUcsSUFBUDtBQUNEOzs7Z0NBRVc7QUFDVixhQUFPLEtBQUtyTyxJQUFMLENBQVVLLENBQVYsR0FBYyxLQUFLTCxJQUFMLENBQVVNLENBQS9CO0FBQ0Q7OzsrQkFFVXlPLEUsRUFBSTtBQUNiQSxRQUFFLEdBQUdBLEVBQUUsSUFBSXRDLFFBQVEsQ0FBQ3VDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWDtBQUNBRCxRQUFFLENBQUNwRSxLQUFILENBQVNzRSxJQUFULEdBQWdCLEtBQUtqUSxRQUFMLENBQWNxQixDQUFkLEdBQWtCLElBQWxDO0FBQ0EwTyxRQUFFLENBQUNwRSxLQUFILENBQVN1RSxHQUFULEdBQWUsS0FBS2xRLFFBQUwsQ0FBY3NCLENBQWQsR0FBa0IsSUFBakM7QUFDQXlPLFFBQUUsQ0FBQ3BFLEtBQUgsQ0FBU3dFLEtBQVQsR0FBaUIsS0FBS25QLElBQUwsQ0FBVUssQ0FBVixHQUFjLElBQS9CO0FBQ0EwTyxRQUFFLENBQUNwRSxLQUFILENBQVN0RCxNQUFULEdBQWtCLEtBQUtySCxJQUFMLENBQVVNLENBQVYsR0FBYyxJQUFoQztBQUNEOzs7MkJBRU1OLEksRUFBTTtBQUNYLFdBQUtBLElBQUwsR0FBWSxLQUFLQSxJQUFMLENBQVVzSCxHQUFWLENBQWN0SCxJQUFkLENBQVo7QUFDQSxXQUFLaEIsUUFBTCxHQUFnQixLQUFLQSxRQUFMLENBQWNzSSxHQUFkLENBQWtCdEgsSUFBSSxDQUFDbkMsSUFBTCxDQUFVLENBQUMsR0FBWCxDQUFsQixDQUFoQjtBQUNEOzs7aUNBRVk7QUFDWCxhQUFPUSxJQUFJLENBQUNpUSxHQUFMLENBQVMsS0FBS3RPLElBQUwsQ0FBVUssQ0FBbkIsRUFBc0IsS0FBS0wsSUFBTCxDQUFVTSxDQUFoQyxDQUFQO0FBQ0Q7Ozs7O0FBR0g7OztBQUNBLElBQU03QyxRQUFRLEdBQUc7QUFDZnNLLGFBRGUsdUJBQ0hxSCxFQURHLEVBQ0NDLEVBREQsRUFDSztBQUNsQixRQUFNQyxFQUFFLEdBQUdGLEVBQUUsQ0FBQy9PLENBQUgsR0FBT2dQLEVBQUUsQ0FBQ2hQLENBQXJCO0FBQUEsUUFBd0JrUCxFQUFFLEdBQUdILEVBQUUsQ0FBQzlPLENBQUgsR0FBTytPLEVBQUUsQ0FBQy9PLENBQXZDO0FBQ0EsV0FBT2pDLElBQUksQ0FBQ21SLElBQUwsQ0FBVUYsRUFBRSxHQUFHQSxFQUFMLEdBQVVDLEVBQUUsR0FBR0EsRUFBekIsQ0FBUDtBQUNELEdBSmM7QUFLZkUsVUFMZSxvQkFLTkwsRUFMTSxFQUtGQyxFQUxFLEVBS0U7QUFDZixXQUFPNVIsUUFBUSxDQUFDc0ssV0FBVCxDQUFxQnFILEVBQXJCLEVBQXlCQyxFQUF6QixDQUFQO0FBQ0QsR0FQYztBQVFmSyxnQkFSZSwwQkFRQU4sRUFSQSxFQVFJQyxFQVJKLEVBUVE7QUFDckIsV0FBT2hSLElBQUksQ0FBQ3NSLEdBQUwsQ0FBU1AsRUFBRSxDQUFDL08sQ0FBSCxHQUFPZ1AsRUFBRSxDQUFDaFAsQ0FBbkIsQ0FBUDtBQUNELEdBVmM7QUFXZnVQLGdCQVhlLDBCQVdBUixFQVhBLEVBV0lDLEVBWEosRUFXUTtBQUNyQixXQUFPaFIsSUFBSSxDQUFDc1IsR0FBTCxDQUFTUCxFQUFFLENBQUM5TyxDQUFILEdBQU8rTyxFQUFFLENBQUMvTyxDQUFuQixDQUFQO0FBQ0QsR0FiYztBQWNmdVAsaUNBZGUsMkNBY2lCdFMsT0FkakIsRUFjMEI7QUFDdkMsV0FBTyxVQUFDNlIsRUFBRCxFQUFLQyxFQUFMLEVBQVk7QUFDakIsYUFBT2hSLElBQUksQ0FBQ21SLElBQUwsQ0FDTG5SLElBQUksQ0FBQ3lSLEdBQUwsQ0FBU3ZTLE9BQU8sQ0FBQzhDLENBQVIsR0FBWWhDLElBQUksQ0FBQ3NSLEdBQUwsQ0FBU1AsRUFBRSxDQUFDL08sQ0FBSCxHQUFPZ1AsRUFBRSxDQUFDaFAsQ0FBbkIsQ0FBckIsRUFBNEMsQ0FBNUMsSUFDQWhDLElBQUksQ0FBQ3lSLEdBQUwsQ0FBU3ZTLE9BQU8sQ0FBQytDLENBQVIsR0FBWWpDLElBQUksQ0FBQ3NSLEdBQUwsQ0FBU1AsRUFBRSxDQUFDOU8sQ0FBSCxHQUFPK08sRUFBRSxDQUFDL08sQ0FBbkIsQ0FBckIsRUFBNEMsQ0FBNUMsQ0FGSyxDQUFQO0FBSUQsS0FMRDtBQU1ELEdBckJjO0FBc0JmeVAscUJBdEJlLCtCQXNCS0MsR0F0QkwsRUFzQlVDLEdBdEJWLEVBc0JlL1IsTUF0QmYsRUFzQnVCNkosV0F0QnZCLEVBc0JvQztBQUNqRCxRQUFJL0gsSUFBSjtBQUFBLFFBQVV1RCxLQUFLLEdBQUcsQ0FBbEI7QUFBQSxRQUFxQm1CLENBQXJCO0FBQUEsUUFBd0J3TCxJQUF4QjtBQUNBbkksZUFBVyxHQUFHQSxXQUFXLElBQUl0SyxRQUFRLENBQUNzSyxXQUF0Qzs7QUFDQSxRQUFJaUksR0FBRyxDQUFDM00sTUFBSixLQUFlLENBQW5CLEVBQXNCO0FBQ3BCLGFBQU8sQ0FBQyxDQUFSO0FBQ0Q7O0FBQ0RyRCxRQUFJLEdBQUcrSCxXQUFXLENBQUNpSSxHQUFHLENBQUMsQ0FBRCxDQUFKLEVBQVNDLEdBQVQsQ0FBbEI7O0FBQ0EsU0FBS3ZMLENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsR0FBR3NMLEdBQUcsQ0FBQzNNLE1BQXBCLEVBQTRCcUIsQ0FBQyxFQUE3QixFQUFpQztBQUMvQndMLFVBQUksR0FBR25JLFdBQVcsQ0FBQ2lJLEdBQUcsQ0FBQ3RMLENBQUQsQ0FBSixFQUFTdUwsR0FBVCxDQUFsQjs7QUFDQSxVQUFJQyxJQUFJLEdBQUdsUSxJQUFYLEVBQWlCO0FBQ2ZBLFlBQUksR0FBR2tRLElBQVA7QUFDQTNNLGFBQUssR0FBR21CLENBQVI7QUFDRDtBQUNGOztBQUNELFFBQUl4RyxNQUFNLElBQUksQ0FBVixJQUFlOEIsSUFBSSxHQUFHOUIsTUFBMUIsRUFBa0M7QUFDaEMsYUFBTyxDQUFDLENBQVI7QUFDRDs7QUFDRCxXQUFPcUYsS0FBUDtBQUNELEdBeENjO0FBeUNmckUsT0F6Q2UsaUJBeUNUb1AsR0F6Q1MsRUF5Q0pDLEdBekNJLEVBeUNDMEIsR0F6Q0QsRUF5Q007QUFDbkIsV0FBTzVSLElBQUksQ0FBQ2tRLEdBQUwsQ0FBU0QsR0FBVCxFQUFjalEsSUFBSSxDQUFDaVEsR0FBTCxDQUFTQyxHQUFULEVBQWMwQixHQUFkLENBQWQsQ0FBUDtBQUNELEdBM0NjO0FBNENmRSxZQTVDZSxzQkE0Q0o3QixHQTVDSSxFQTRDQ0MsR0E1Q0QsRUE0Q00wQixHQTVDTixFQTRDVztBQUN4QixRQUFNNVAsQ0FBQyxHQUFHaEMsSUFBSSxDQUFDa1EsR0FBTCxDQUFTRCxHQUFHLENBQUNqTyxDQUFiLEVBQWdCaEMsSUFBSSxDQUFDaVEsR0FBTCxDQUFTQyxHQUFHLENBQUNsTyxDQUFiLEVBQWdCNFAsR0FBRyxDQUFDNVAsQ0FBcEIsQ0FBaEIsQ0FBVjtBQUNBLFFBQU1DLENBQUMsR0FBR2pDLElBQUksQ0FBQ2tRLEdBQUwsQ0FBU0QsR0FBRyxDQUFDaE8sQ0FBYixFQUFnQmpDLElBQUksQ0FBQ2lRLEdBQUwsQ0FBU0MsR0FBRyxDQUFDak8sQ0FBYixFQUFnQjJQLEdBQUcsQ0FBQzNQLENBQXBCLENBQWhCLENBQVY7QUFDQSxXQUFPLElBQUl3QixLQUFKLENBQVV6QixDQUFWLEVBQWFDLENBQWIsQ0FBUDtBQUNELEdBaERjO0FBaURiO0FBQ0Y0QixnQkFsRGUsMEJBa0RBa08sSUFsREEsRUFrRE1DLElBbEROLEVBa0RZQyxJQWxEWixFQWtEa0JDLElBbERsQixFQWtEd0I7QUFDckMsUUFBSUwsSUFBSixFQUFVTSxFQUFWLEVBQWNDLEVBQWQsRUFBa0JDLEVBQWxCLEVBQXNCQyxFQUF0QixFQUEwQnRRLENBQTFCLEVBQTZCQyxDQUE3Qjs7QUFDQSxRQUFJZ1EsSUFBSSxDQUFDalEsQ0FBTCxLQUFXa1EsSUFBSSxDQUFDbFEsQ0FBcEIsRUFBdUI7QUFDckI2UCxVQUFJLEdBQUdJLElBQVA7QUFDQUEsVUFBSSxHQUFHRixJQUFQO0FBQ0FBLFVBQUksR0FBR0YsSUFBUDtBQUNBQSxVQUFJLEdBQUdLLElBQVA7QUFDQUEsVUFBSSxHQUFHRixJQUFQO0FBQ0FBLFVBQUksR0FBR0gsSUFBUDtBQUNEOztBQUNELFFBQUlFLElBQUksQ0FBQy9QLENBQUwsS0FBV2dRLElBQUksQ0FBQ2hRLENBQXBCLEVBQXVCO0FBQ3JCb1EsUUFBRSxHQUFHLENBQUNGLElBQUksQ0FBQ2pRLENBQUwsR0FBU2dRLElBQUksQ0FBQ2hRLENBQWYsS0FBcUJpUSxJQUFJLENBQUNsUSxDQUFMLEdBQVNpUSxJQUFJLENBQUNqUSxDQUFuQyxDQUFMO0FBQ0FzUSxRQUFFLEdBQUcsQ0FBQ0osSUFBSSxDQUFDbFEsQ0FBTCxHQUFTaVEsSUFBSSxDQUFDaFEsQ0FBZCxHQUFrQmdRLElBQUksQ0FBQ2pRLENBQUwsR0FBU2tRLElBQUksQ0FBQ2pRLENBQWpDLEtBQXVDaVEsSUFBSSxDQUFDbFEsQ0FBTCxHQUFTaVEsSUFBSSxDQUFDalEsQ0FBckQsQ0FBTDtBQUNBQSxPQUFDLEdBQUcrUCxJQUFJLENBQUMvUCxDQUFUO0FBQ0FDLE9BQUMsR0FBR0QsQ0FBQyxHQUFHb1EsRUFBSixHQUFTRSxFQUFiO0FBQ0EsYUFBTyxJQUFJN08sS0FBSixDQUFVekIsQ0FBVixFQUFhQyxDQUFiLENBQVA7QUFDRCxLQU5ELE1BTU87QUFDTGtRLFFBQUUsR0FBRyxDQUFDSCxJQUFJLENBQUMvUCxDQUFMLEdBQVM4UCxJQUFJLENBQUM5UCxDQUFmLEtBQXFCK1AsSUFBSSxDQUFDaFEsQ0FBTCxHQUFTK1AsSUFBSSxDQUFDL1AsQ0FBbkMsQ0FBTDtBQUNBcVEsUUFBRSxHQUFHLENBQUNMLElBQUksQ0FBQ2hRLENBQUwsR0FBUytQLElBQUksQ0FBQzlQLENBQWQsR0FBa0I4UCxJQUFJLENBQUMvUCxDQUFMLEdBQVNnUSxJQUFJLENBQUMvUCxDQUFqQyxLQUF1QytQLElBQUksQ0FBQ2hRLENBQUwsR0FBUytQLElBQUksQ0FBQy9QLENBQXJELENBQUw7QUFDQW9RLFFBQUUsR0FBRyxDQUFDRixJQUFJLENBQUNqUSxDQUFMLEdBQVNnUSxJQUFJLENBQUNoUSxDQUFmLEtBQXFCaVEsSUFBSSxDQUFDbFEsQ0FBTCxHQUFTaVEsSUFBSSxDQUFDalEsQ0FBbkMsQ0FBTDtBQUNBc1EsUUFBRSxHQUFHLENBQUNKLElBQUksQ0FBQ2xRLENBQUwsR0FBU2lRLElBQUksQ0FBQ2hRLENBQWQsR0FBa0JnUSxJQUFJLENBQUNqUSxDQUFMLEdBQVNrUSxJQUFJLENBQUNqUSxDQUFqQyxLQUF1Q2lRLElBQUksQ0FBQ2xRLENBQUwsR0FBU2lRLElBQUksQ0FBQ2pRLENBQXJELENBQUw7QUFDQUEsT0FBQyxHQUFHLENBQUNxUSxFQUFFLEdBQUdDLEVBQU4sS0FBYUYsRUFBRSxHQUFHRCxFQUFsQixDQUFKO0FBQ0FsUSxPQUFDLEdBQUdELENBQUMsR0FBR21RLEVBQUosR0FBU0UsRUFBYjtBQUNBLGFBQU8sSUFBSTVPLEtBQUosQ0FBVXpCLENBQVYsRUFBYUMsQ0FBYixDQUFQO0FBQ0Q7QUFDRixHQTNFYztBQTRFZnNRLGdCQTVFZSwwQkE0RUFDLEdBNUVBLEVBNEVLQyxHQTVFTCxFQTRFVUMsQ0E1RVYsRUE0RWE7QUFDMUIsUUFBSTFRLENBQUosRUFBT0MsQ0FBUDtBQUNBRCxLQUFDLEdBQUc1QyxRQUFRLENBQUN5QixLQUFULENBQWViLElBQUksQ0FBQ2lRLEdBQUwsQ0FBU3VDLEdBQUcsQ0FBQ3hRLENBQWIsRUFBZ0J5USxHQUFHLENBQUN6USxDQUFwQixDQUFmLEVBQXVDaEMsSUFBSSxDQUFDa1EsR0FBTCxDQUFTc0MsR0FBRyxDQUFDeFEsQ0FBYixFQUFnQnlRLEdBQUcsQ0FBQ3pRLENBQXBCLENBQXZDLEVBQStEMFEsQ0FBQyxDQUFDMVEsQ0FBakUsQ0FBSjs7QUFDQSxRQUFJQSxDQUFDLEtBQUswUSxDQUFDLENBQUMxUSxDQUFaLEVBQWU7QUFDYkMsT0FBQyxHQUFJRCxDQUFDLEtBQUt3USxHQUFHLENBQUN4USxDQUFYLEdBQWdCd1EsR0FBRyxDQUFDdlEsQ0FBcEIsR0FBd0J3USxHQUFHLENBQUN4USxDQUFoQztBQUNBeVEsT0FBQyxHQUFHLElBQUlqUCxLQUFKLENBQVV6QixDQUFWLEVBQWFDLENBQWIsQ0FBSjtBQUNEOztBQUVEQSxLQUFDLEdBQUc3QyxRQUFRLENBQUN5QixLQUFULENBQWViLElBQUksQ0FBQ2lRLEdBQUwsQ0FBU3VDLEdBQUcsQ0FBQ3ZRLENBQWIsRUFBZ0J3USxHQUFHLENBQUN4USxDQUFwQixDQUFmLEVBQXVDakMsSUFBSSxDQUFDa1EsR0FBTCxDQUFTc0MsR0FBRyxDQUFDdlEsQ0FBYixFQUFnQndRLEdBQUcsQ0FBQ3hRLENBQXBCLENBQXZDLEVBQStEeVEsQ0FBQyxDQUFDelEsQ0FBakUsQ0FBSjs7QUFDQSxRQUFJQSxDQUFDLEtBQUt5USxDQUFDLENBQUN6USxDQUFaLEVBQWU7QUFDYkQsT0FBQyxHQUFJQyxDQUFDLEtBQUt1USxHQUFHLENBQUN2USxDQUFYLEdBQWdCdVEsR0FBRyxDQUFDeFEsQ0FBcEIsR0FBd0J5USxHQUFHLENBQUN6USxDQUFoQztBQUNBMFEsT0FBQyxHQUFHLElBQUlqUCxLQUFKLENBQVV6QixDQUFWLEVBQWFDLENBQWIsQ0FBSjtBQUNEOztBQUVELFdBQU95USxDQUFQO0FBQ0QsR0EzRmM7QUE0RmY3UCxhQTVGZSx1QkE0Rkg4UCxDQTVGRyxFQTRGQUMsQ0E1RkEsRUE0RkdGLENBNUZILEVBNEZNO0FBQ25CLFFBQU1HLEVBQUUsR0FBRyxJQUFJcFAsS0FBSixDQUFVaVAsQ0FBQyxDQUFDMVEsQ0FBRixHQUFNMlEsQ0FBQyxDQUFDM1EsQ0FBbEIsRUFBcUIwUSxDQUFDLENBQUN6USxDQUFGLEdBQU0wUSxDQUFDLENBQUMxUSxDQUE3QixDQUFYO0FBQUEsUUFDRTZRLEVBQUUsR0FBRyxJQUFJclAsS0FBSixDQUFVbVAsQ0FBQyxDQUFDNVEsQ0FBRixHQUFNMlEsQ0FBQyxDQUFDM1EsQ0FBbEIsRUFBcUI0USxDQUFDLENBQUMzUSxDQUFGLEdBQU0wUSxDQUFDLENBQUMxUSxDQUE3QixDQURQO0FBQUEsUUFFRThRLEdBQUcsR0FBR0QsRUFBRSxDQUFDOVEsQ0FBSCxHQUFPOFEsRUFBRSxDQUFDOVEsQ0FBVixHQUFjOFEsRUFBRSxDQUFDN1EsQ0FBSCxHQUFPNlEsRUFBRSxDQUFDN1EsQ0FGaEM7QUFBQSxRQUdFK1EsS0FBSyxHQUFHSCxFQUFFLENBQUM3USxDQUFILEdBQU84USxFQUFFLENBQUM5USxDQUFWLEdBQWM2USxFQUFFLENBQUM1USxDQUFILEdBQU82USxFQUFFLENBQUM3USxDQUhsQztBQUFBLFFBSUVnUixDQUFDLEdBQUdELEtBQUssR0FBR0QsR0FKZDtBQUtBLFdBQU8sSUFBSXRQLEtBQUosQ0FBVWtQLENBQUMsQ0FBQzNRLENBQUYsR0FBTThRLEVBQUUsQ0FBQzlRLENBQUgsR0FBT2lSLENBQXZCLEVBQTBCTixDQUFDLENBQUMxUSxDQUFGLEdBQU02USxFQUFFLENBQUM3USxDQUFILEdBQU9nUixDQUF2QyxDQUFQO0FBQ0QsR0FuR2M7QUFvR2ZDLGdCQXBHZSwwQkFvR0FWLEdBcEdBLEVBb0dLQyxHQXBHTCxFQW9HVVUsT0FwR1YsRUFvR21CO0FBQ2hDLFFBQU1sQyxFQUFFLEdBQUd3QixHQUFHLENBQUN6USxDQUFKLEdBQVF3USxHQUFHLENBQUN4USxDQUF2QjtBQUFBLFFBQTBCa1AsRUFBRSxHQUFHdUIsR0FBRyxDQUFDeFEsQ0FBSixHQUFRdVEsR0FBRyxDQUFDdlEsQ0FBM0M7QUFDQSxXQUFPLElBQUl3QixLQUFKLENBQVUrTyxHQUFHLENBQUN4USxDQUFKLEdBQVFtUixPQUFPLEdBQUdsQyxFQUE1QixFQUFnQ3VCLEdBQUcsQ0FBQ3ZRLENBQUosR0FBUWtSLE9BQU8sR0FBR2pDLEVBQWxELENBQVA7QUFDRCxHQXZHYztBQXdHZnZOLHdCQXhHZSxrQ0F3R1E2TyxHQXhHUixFQXdHYUMsR0F4R2IsRUF3R2tCVyxNQXhHbEIsRUF3RzBCO0FBQ3ZDLFFBQU1uQyxFQUFFLEdBQUd3QixHQUFHLENBQUN6USxDQUFKLEdBQVF3USxHQUFHLENBQUN4USxDQUF2QjtBQUFBLFFBQTBCa1AsRUFBRSxHQUFHdUIsR0FBRyxDQUFDeFEsQ0FBSixHQUFRdVEsR0FBRyxDQUFDdlEsQ0FBM0M7QUFBQSxRQUE4Q2tSLE9BQU8sR0FBR0MsTUFBTSxHQUFHaFUsUUFBUSxDQUFDZ1MsUUFBVCxDQUFrQm9CLEdBQWxCLEVBQXVCQyxHQUF2QixDQUFqRTtBQUNBLFdBQU8sSUFBSWhQLEtBQUosQ0FBVStPLEdBQUcsQ0FBQ3hRLENBQUosR0FBUW1SLE9BQU8sR0FBR2xDLEVBQTVCLEVBQWdDdUIsR0FBRyxDQUFDdlEsQ0FBSixHQUFRa1IsT0FBTyxHQUFHakMsRUFBbEQsQ0FBUDtBQUNELEdBM0djO0FBNEdmN1IsNEJBNUdlLHNDQTRHWXFSLEVBNUdaLEVBNEdnQnpQLE1BNUdoQixFQTRHd0JpSyxnQkE1R3hCLEVBNEcwQ21JLG1CQTVHMUMsRUE0RytEO0FBQzVFLFFBQU0xUixJQUFJLEdBQUcsS0FBS3BDLGdCQUFMLENBQXNCbVIsRUFBdEIsRUFBMEJ4RixnQkFBMUIsQ0FBYjtBQUNBLFdBQU8sSUFBSXlELFNBQUosQ0FBYyxLQUFLdkgsU0FBTCxDQUFlc0osRUFBZixFQUFtQnpQLE1BQU0sSUFBSXlQLEVBQUUsQ0FBQzRDLFVBQWhDLEVBQTRDRCxtQkFBNUMsQ0FBZCxFQUFnRjFSLElBQWhGLENBQVA7QUFDRCxHQS9HYztBQWdIZjRSLHdCQWhIZSxrQ0FnSFF0VSxPQWhIUixFQWdIaUJ1VSxLQWhIakIsRUFnSHdCO0FBQ3JDLFdBQU9BLEtBQUssQ0FBQ0MsTUFBTixDQUFhLFVBQUNDLEdBQUQsRUFBTUMsSUFBTixFQUFlO0FBQ2pDLGFBQU9ELEdBQUcsR0FBR0UsUUFBUSxDQUFDdFAsTUFBTSxDQUFDdVAsZ0JBQVAsQ0FBd0I1VSxPQUF4QixFQUFpQzBVLElBQWpDLEtBQXdDLENBQXpDLENBQXJCO0FBQ0QsS0FGTSxFQUVKLENBRkksQ0FBUDtBQUdELEdBcEhjO0FBcUhmcFUsa0JBckhlLDRCQXFIRW1SLEVBckhGLEVBcUhNeEYsZ0JBckhOLEVBcUh3QjtBQUNyQyxRQUFJNEYsS0FBSyxHQUFHOEMsUUFBUSxDQUFDdFAsTUFBTSxDQUFDdVAsZ0JBQVAsQ0FBd0JuRCxFQUF4QixFQUE0QixPQUE1QixDQUFELENBQXBCO0FBQUEsUUFBNEQxSCxNQUFNLEdBQUc0SyxRQUFRLENBQUN0UCxNQUFNLENBQUN1UCxnQkFBUCxDQUF3Qm5ELEVBQXhCLEVBQTRCLFFBQTVCLENBQUQsQ0FBN0U7O0FBQ0EsUUFBSSxDQUFDeEYsZ0JBQUwsRUFBdUI7QUFDckI0RixXQUFLLElBQUksS0FBS3lDLHNCQUFMLENBQTRCN0MsRUFBNUIsRUFBZ0MsQ0FBQyxjQUFELEVBQWlCLGVBQWpCLEVBQWtDLG1CQUFsQyxFQUF1RCxvQkFBdkQsQ0FBaEMsQ0FBVDtBQUNBMUgsWUFBTSxJQUFJLEtBQUt1SyxzQkFBTCxDQUE0QjdDLEVBQTVCLEVBQWdDLENBQUMsYUFBRCxFQUFnQixnQkFBaEIsRUFBa0Msa0JBQWxDLEVBQXNELHFCQUF0RCxDQUFoQyxDQUFWO0FBQ0Q7O0FBQ0QsV0FBTyxJQUFJak4sS0FBSixDQUFVcU4sS0FBVixFQUFpQjlILE1BQWpCLENBQVA7QUFDRCxHQTVIYztBQTZIZjVCLFdBN0hlLHFCQTZITHNKLEVBN0hLLEVBNkhEelAsTUE3SEMsRUE2SE87QUFDcEIsUUFBTTZTLE1BQU0sR0FBR3BELEVBQUUsQ0FBQ3FELHFCQUFILEVBQWY7QUFBQSxRQUEyQ0MsVUFBVSxHQUFHL1MsTUFBTSxDQUFDOFMscUJBQVAsRUFBeEQ7QUFDQSxXQUFPLElBQUl0USxLQUFKLENBQVVxUSxNQUFNLENBQUNsRCxJQUFQLEdBQWNvRCxVQUFVLENBQUNwRCxJQUFuQyxFQUF5Q2tELE1BQU0sQ0FBQ2pELEdBQVAsR0FBYW1ELFVBQVUsQ0FBQ25ELEdBQWpFLENBQVA7QUFDRCxHQWhJYztBQWlJZmpRLDBCQWpJZSxvQ0FpSVVGLEtBaklWLEVBaUlpQnNFLE1BaklqQixFQWlJeUJyRixNQWpJekIsRUFpSWlDO0FBQzlDQSxVQUFNLEdBQUdBLE1BQU0sSUFBSSxJQUFJOEQsS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLENBQW5CO0FBQ0EsV0FBTzlELE1BQU0sQ0FBQ3NKLEdBQVAsQ0FBVyxJQUFJeEYsS0FBSixDQUFVdUIsTUFBTSxHQUFHaEYsSUFBSSxDQUFDcUQsR0FBTCxDQUFTM0MsS0FBVCxDQUFuQixFQUFvQ3NFLE1BQU0sR0FBR2hGLElBQUksQ0FBQ3VELEdBQUwsQ0FBUzdDLEtBQVQsQ0FBN0MsQ0FBWCxDQUFQO0FBQ0QsR0FwSWM7QUFxSWZ1VCx1QkFySWUsaUNBcUlPQyxXQXJJUCxFQXFJb0J4UyxLQXJJcEIsRUFxSTJCeVMsT0FySTNCLEVBcUlvQztBQUNqRCxRQUFNQyxNQUFNLEdBQUdGLFdBQVcsQ0FBQ0csTUFBWixDQUFtQixVQUFTQyxNQUFULEVBQWlCO0FBQ2pELGFBQVFBLE1BQU0sQ0FBQ3JTLENBQVAsR0FBV1AsS0FBSyxDQUFDTyxDQUFqQixLQUF1QmtTLE9BQU8sR0FBR0csTUFBTSxDQUFDdFMsQ0FBUCxHQUFXTixLQUFLLENBQUNNLENBQXBCLEdBQXdCc1MsTUFBTSxDQUFDdFMsQ0FBUCxHQUFXTixLQUFLLENBQUNNLENBQXZFLENBQVI7QUFDRCxLQUZjLENBQWY7O0FBSUEsU0FBSyxJQUFJcUUsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRytOLE1BQU0sQ0FBQ3BQLE1BQTNCLEVBQW1DcUIsQ0FBQyxFQUFwQyxFQUF3QztBQUN0QyxVQUFJM0UsS0FBSyxDQUFDTyxDQUFOLEdBQVVtUyxNQUFNLENBQUMvTixDQUFELENBQU4sQ0FBVXBFLENBQXhCLEVBQTJCO0FBQ3pCbVMsY0FBTSxDQUFDOUUsTUFBUCxDQUFjakosQ0FBZCxFQUFpQixDQUFqQixFQUFvQjNFLEtBQXBCO0FBQ0EsZUFBTzBTLE1BQVA7QUFDRDtBQUNGOztBQUNEQSxVQUFNLENBQUM1VCxJQUFQLENBQVlrQixLQUFaO0FBQ0EsV0FBTzBTLE1BQVA7QUFDRCxHQWxKYztBQW1KZmhULFVBbkplLG9CQW1KTjJQLEVBbkpNLEVBbUpGQyxFQW5KRSxFQW1KRTtBQUNmLFFBQU11RCxJQUFJLEdBQUd2RCxFQUFFLENBQUN6USxHQUFILENBQU93USxFQUFQLENBQWI7QUFDQSxXQUFPLEtBQUt6UCxjQUFMLENBQW9CdEIsSUFBSSxDQUFDaUQsS0FBTCxDQUFXc1IsSUFBSSxDQUFDdFMsQ0FBaEIsRUFBbUJzUyxJQUFJLENBQUN2UyxDQUF4QixDQUFwQixDQUFQO0FBQ0QsR0F0SmM7QUF1SmYyRCxVQXZKZSxvQkF1Sk5qRixLQXZKTSxFQXVKQztBQUNkLFdBQVNBLEtBQUssR0FBRyxHQUFULEdBQWdCVixJQUFJLENBQUNDLEVBQXJCLEdBQTBCLEdBQWxDO0FBQ0QsR0F6SmM7QUEwSmZ1VSxVQTFKZSxvQkEwSk45VCxLQTFKTSxFQTBKQztBQUNkLFdBQVFBLEtBQUssR0FBRyxHQUFSLEdBQWNWLElBQUksQ0FBQ0MsRUFBcEIsR0FBMEIsR0FBakM7QUFDRCxHQTVKYztBQTZKZm1FLFlBN0plLHNCQTZKSjZMLEdBN0pJLEVBNkpDQyxHQTdKRCxFQTZKTTBCLEdBN0pOLEVBNkpXO0FBQ3hCLFFBQUk2QyxJQUFKLEVBQVVDLElBQVY7O0FBQ0EsUUFBSXpFLEdBQUcsR0FBR0MsR0FBTixJQUFhMEIsR0FBRyxHQUFHM0IsR0FBbkIsSUFBMEIyQixHQUFHLEdBQUcxQixHQUFwQyxFQUF5QztBQUN2QyxhQUFPMEIsR0FBUDtBQUNELEtBRkQsTUFFTyxJQUFJMUIsR0FBRyxHQUFHRCxHQUFOLEtBQWMyQixHQUFHLEdBQUcxQixHQUFOLElBQWEwQixHQUFHLEdBQUczQixHQUFqQyxDQUFKLEVBQTJDO0FBQ2hELGFBQU8yQixHQUFQO0FBQ0QsS0FGTSxNQUVBO0FBQ0w2QyxVQUFJLEdBQUcsS0FBS0UsWUFBTCxDQUFrQjFFLEdBQWxCLEVBQXVCMkIsR0FBdkIsQ0FBUDtBQUNBOEMsVUFBSSxHQUFHLEtBQUtDLFlBQUwsQ0FBa0J6RSxHQUFsQixFQUF1QjBCLEdBQXZCLENBQVA7O0FBQ0EsVUFBSTZDLElBQUksR0FBR0MsSUFBWCxFQUFpQjtBQUNmLGVBQU96RSxHQUFQO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsZUFBT0MsR0FBUDtBQUNEO0FBQ0Y7QUFDRixHQTVLYztBQTZLZjBFLGlCQTdLZSwyQkE2S0NqRCxHQTdLRCxFQTZLTWpSLEtBN0tOLEVBNkthO0FBQzFCLFFBQUkyRixDQUFKO0FBQUEsUUFBT3dMLElBQVA7QUFBQSxRQUFhMEMsSUFBSSxHQUFHdlUsSUFBSSxDQUFDQyxFQUFMLEdBQVUsQ0FBOUI7QUFBQSxRQUFpQzRVLEtBQWpDOztBQUNBLFNBQUt4TyxDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLEdBQUdzTCxHQUFHLENBQUMzTSxNQUFwQixFQUEyQnFCLENBQUMsRUFBNUIsRUFBZ0M7QUFDOUJ3TCxVQUFJLEdBQUd6UyxRQUFRLENBQUN1VixZQUFULENBQXNCaEQsR0FBRyxDQUFDdEwsQ0FBRCxDQUF6QixFQUE4QjNGLEtBQTlCLENBQVA7O0FBQ0EsVUFBSTZULElBQUksR0FBRzFDLElBQVgsRUFBaUI7QUFDZjBDLFlBQUksR0FBRzFDLElBQVA7QUFDQWdELGFBQUssR0FBR2xELEdBQUcsQ0FBQ3RMLENBQUQsQ0FBWDtBQUNEO0FBQ0Y7O0FBQ0QsV0FBT3dPLEtBQVA7QUFDRCxHQXZMYztBQXdMZkYsY0F4TGUsd0JBd0xGM1IsS0F4TEUsRUF3TEtFLElBeExMLEVBd0xXO0FBQ3hCLFFBQU00UixRQUFRLEdBQUc5VSxJQUFJLENBQUNpUSxHQUFMLENBQVNqTixLQUFULEVBQWdCRSxJQUFoQixDQUFqQjtBQUFBLFFBQ0U2UixRQUFRLEdBQUkvVSxJQUFJLENBQUNrUSxHQUFMLENBQVNsTixLQUFULEVBQWdCRSxJQUFoQixDQURkO0FBRUEsV0FBT2xELElBQUksQ0FBQ2lRLEdBQUwsQ0FBUzhFLFFBQVEsR0FBR0QsUUFBcEIsRUFBOEJBLFFBQVEsR0FBRzlVLElBQUksQ0FBQ0MsRUFBTCxHQUFRLENBQW5CLEdBQXVCOFUsUUFBckQsQ0FBUDtBQUNELEdBNUxjO0FBNkxmelQsZ0JBN0xlLDBCQTZMQXNRLEdBN0xBLEVBNkxLO0FBQ2xCLFdBQU9BLEdBQUcsR0FBRyxDQUFiLEVBQWdCO0FBQ2RBLFNBQUcsSUFBSSxJQUFJNVIsSUFBSSxDQUFDQyxFQUFoQjtBQUNEOztBQUNELFdBQU8yUixHQUFHLEdBQUcsSUFBSTVSLElBQUksQ0FBQ0MsRUFBdEIsRUFBMEI7QUFDeEIyUixTQUFHLElBQUksSUFBSTVSLElBQUksQ0FBQ0MsRUFBaEI7QUFDRDs7QUFDRCxXQUFPMlIsR0FBUDtBQUNEO0FBck1jLENBQWpCOzs7Ozs7Ozs7Ozs7O0FDOUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEEsSUFBTW9ELEtBQUssR0FBRyxFQUFkO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNbEwsTUFBTSxHQUFHO0FBQUVDLE9BQUssRUFBTEEsOENBQUtBO0FBQVAsQ0FBZixDLENBQXlCOztJQUVuQmtMLEk7OztBQUNKLGdCQUFZN08sVUFBWixFQUFvQztBQUFBLFFBQVpsSCxPQUFZLHVFQUFKLEVBQUk7O0FBQUE7O0FBQ2xDLFNBQUtBLE9BQUwsR0FBZU8sTUFBTSxDQUFDQyxNQUFQLENBQWM7QUFDM0J3VixhQUFPLEVBQUUsR0FEa0I7QUFFM0JDLGlCQUFXLEVBQUUsR0FGYztBQUczQnRWLFlBQU0sRUFBRSxFQUhtQjtBQUkzQjZKLGlCQUFXLEVBQUV0SyxrREFBUSxDQUFDc0ssV0FKSztBQUszQjBMLG9CQUFjLEVBQUUsS0FMVztBQU0zQkMsZ0JBQVUsRUFBRTtBQU5lLEtBQWQsRUFPWm5XLE9BUFksQ0FBZjtBQVNBLFNBQUtrSCxVQUFMLEdBQWtCQSxVQUFsQjtBQUNBNE8sU0FBSyxDQUFDeFUsSUFBTixDQUFXLElBQVg7QUFDQSxTQUFLSixRQUFMLEdBQWdCLElBQUkwSixNQUFNLENBQUNDLEtBQVgsQ0FBaUIsSUFBakIsQ0FBaEI7O0FBQ0EsUUFBSTdLLE9BQU8sQ0FBQ2tCLFFBQVosRUFBc0I7QUFDcEIsV0FBS0EsUUFBTCxDQUFjNkksR0FBZCxDQUFrQi9KLE9BQU8sQ0FBQ2tCLFFBQTFCO0FBQ0Q7O0FBQ0QsU0FBS0ssSUFBTDtBQUNEOzs7OzJCQUVNO0FBQ0wsV0FBS2dMLE9BQUwsR0FBZSxJQUFmO0FBQ0EsV0FBS3JGLFVBQUwsQ0FBZ0J3QixPQUFoQixDQUF3QixLQUFLME4sYUFBN0IsRUFBNEMsSUFBNUM7QUFDRDs7O2tDQUVhdlUsUyxFQUFXO0FBQUE7O0FBQ3ZCLFVBQUl3VSxZQUFKOztBQUNBLFVBQU1DLElBQUksR0FBRyxJQUFiO0FBRUF6VSxlQUFTLENBQUM4SSxNQUFWLEdBQW1CLEtBQUs0QixPQUF4Qjs7QUFDQSxVQUFJLEtBQUt2TSxPQUFMLENBQWFrVyxjQUFqQixFQUFpQztBQUMvQkcsb0JBQVcsR0FBRyx1QkFBVztBQUN2QixjQUFJeFUsU0FBUyxDQUFDc04sVUFBZCxFQUEwQjtBQUN4Qm1ILGdCQUFJLENBQUNsSyxPQUFMLENBQWF2SyxTQUFiO0FBQ0FBLHFCQUFTLENBQUNHLE1BQVYsQ0FBaUJtTyxNQUFqQixDQUF3QmtHLFlBQXhCO0FBQ0EsbUJBQU8sSUFBUDtBQUNEO0FBQ0YsU0FORDs7QUFRQXhVLGlCQUFTLENBQUNvSyxLQUFWLENBQWdCbEMsR0FBaEIsQ0FBb0IsWUFBTTtBQUN4QixlQUFJLENBQUN3TSxrQkFBTCxDQUF3QjFVLFNBQXhCOztBQUNBQSxtQkFBUyxDQUFDRyxNQUFWLENBQWlCK0gsR0FBakIsQ0FBcUJzTSxZQUFyQjtBQUNBLGlCQUFPLElBQVA7QUFDRCxTQUpEO0FBTUF4VSxpQkFBUyxDQUFDRyxNQUFWLENBQWlCK0gsR0FBakIsQ0FBcUJzTSxZQUFyQjtBQUNELE9BaEJELE1BZ0JPO0FBQ0x4VSxpQkFBUyxDQUFDb0ssS0FBVixDQUFnQmxDLEdBQWhCLENBQW9CLFlBQU07QUFDeEIsZUFBSSxDQUFDa0MsS0FBTCxDQUFXcEssU0FBWDs7QUFDQSxpQkFBTyxJQUFQO0FBQ0QsU0FIRDtBQUlEO0FBQ0Y7OzsrQkFFVUEsUyxFQUFXSixRLEVBQVVOLEksRUFBTTtBQUNwQyxVQUFJVSxTQUFTLENBQUNzTixVQUFkLEVBQTBCO0FBQ3hCdE4saUJBQVMsQ0FBQzJLLFdBQVYsR0FBd0IvSyxRQUF4QjtBQUNELE9BRkQsTUFFTztBQUNMSSxpQkFBUyxDQUFDUSxJQUFWLENBQWVaLFFBQWYsRUFBeUJOLElBQXpCLEVBQStCLElBQS9CO0FBQ0Q7QUFDRjs7OzBCQUVLVSxTLEVBQVc7QUFDZixVQUFNMlUsWUFBWSxHQUFHLEtBQUtDLHFCQUFMLEVBQXJCO0FBQ0EsVUFBTUMsWUFBWSxHQUFHLEtBQUt4UCxVQUFMLENBQWdCNEIsT0FBaEIsQ0FBd0JqSCxTQUF4QixDQUFyQjtBQUNBLFVBQU04VSxZQUFZLEdBQUd6VyxrREFBUSxDQUFDc1MsbUJBQVQsQ0FBNkJnRSxZQUE3QixFQUEyQzNVLFNBQVMsQ0FBQ0osUUFBckQsRUFBK0QsS0FBS3pCLE9BQUwsQ0FBYVcsTUFBNUUsRUFBb0YsS0FBS1gsT0FBTCxDQUFhd0ssV0FBakcsQ0FBckI7O0FBRUEsVUFBSW1NLFlBQVksS0FBSyxDQUFDLENBQWxCLElBQXVCQSxZQUFZLEtBQUtELFlBQTVDLEVBQTBEO0FBQ3hEN1UsaUJBQVMsQ0FBQ1EsSUFBVixDQUFlUixTQUFTLENBQUMySyxXQUF6QixFQUFzQyxLQUFLeE0sT0FBTCxDQUFhZ1csT0FBbkQsRUFBNEQsSUFBNUQ7QUFDRCxPQUZELE1BRU87QUFDTCxhQUFLWSxVQUFMLENBQWdCLEtBQUsxUCxVQUFMLENBQWdCeVAsWUFBaEIsQ0FBaEIsRUFBK0NILFlBQVksQ0FBQ0UsWUFBRCxDQUEzRCxFQUEyRSxLQUFLMVcsT0FBTCxDQUFhaVcsV0FBeEY7QUFDQSxhQUFLL08sVUFBTCxDQUFnQndQLFlBQWhCLEVBQThCclUsSUFBOUIsQ0FBbUNtVSxZQUFZLENBQUNHLFlBQUQsQ0FBL0MsRUFBK0QsS0FBSzNXLE9BQUwsQ0FBYWdXLE9BQTVFLEVBQXFGLElBQXJGO0FBQ0EsYUFBSzlVLFFBQUwsQ0FBY29MLElBQWQ7QUFDRDs7QUFDRCxhQUFPLElBQVA7QUFDRDs7O21DQUVjekssUyxFQUFXO0FBQ3hCLFVBQU0ySyxXQUFXLEdBQUczSyxTQUFTLENBQUMySyxXQUE5QjtBQUNBLFVBQU1rSyxZQUFZLEdBQUcsS0FBS3hQLFVBQUwsQ0FBZ0I0QixPQUFoQixDQUF3QmpILFNBQXhCLENBQXJCO0FBQ0EsVUFBTWdWLGFBQWEsR0FBRyxLQUFLM1AsVUFBTCxDQUFnQndQLFlBQVksR0FBRyxDQUEvQixDQUF0QjtBQUNBLFVBQU1JLGFBQWEsR0FBRyxLQUFLNVAsVUFBTCxDQUFnQndQLFlBQVksR0FBRyxDQUEvQixDQUF0Qjs7QUFFQSxVQUFJN1UsU0FBUyxDQUFDd00sYUFBVixJQUEyQndJLGFBQS9CLEVBQThDO0FBQzVDLFlBQU0zRSxRQUFRLEdBQUcsS0FBS2xTLE9BQUwsQ0FBYXdLLFdBQWIsQ0FBeUIzSSxTQUFTLENBQUNKLFFBQW5DLEVBQTZDb1YsYUFBYSxDQUFDcFYsUUFBM0QsQ0FBakI7O0FBQ0EsWUFBSXlRLFFBQVEsR0FBRyxLQUFLbFMsT0FBTCxDQUFhVyxNQUE1QixFQUFvQztBQUNsQ2tCLG1CQUFTLENBQUMySyxXQUFWLEdBQXdCcUssYUFBYSxDQUFDckssV0FBdEM7QUFDQSxlQUFLb0ssVUFBTCxDQUFnQkMsYUFBaEIsRUFBK0JySyxXQUEvQixFQUE0QyxLQUFLeE0sT0FBTCxDQUFhaVcsV0FBekQ7QUFGa0MscUJBR21DLENBQUMsS0FBSy9PLFVBQUwsQ0FBZ0J3UCxZQUFZLEdBQUcsQ0FBL0IsQ0FBRCxFQUFvQyxLQUFLeFAsVUFBTCxDQUFnQndQLFlBQWhCLENBQXBDLENBSG5DO0FBR2pDLGVBQUt4UCxVQUFMLENBQWdCd1AsWUFBaEIsQ0FIaUM7QUFHRixlQUFLeFAsVUFBTCxDQUFnQndQLFlBQVksR0FBRyxDQUEvQixDQUhFO0FBSWxDLGVBQUtLLGNBQUwsQ0FBb0JsVixTQUFwQjtBQUNEO0FBQ0Y7O0FBRUQsVUFBSUEsU0FBUyxDQUFDdU0sV0FBVixJQUF5QjBJLGFBQTdCLEVBQTRDO0FBQzFDLFlBQU01RSxTQUFRLEdBQUcsS0FBS2xTLE9BQUwsQ0FBYXdLLFdBQWIsQ0FBeUIzSSxTQUFTLENBQUNKLFFBQW5DLEVBQTZDcVYsYUFBYSxDQUFDclYsUUFBM0QsQ0FBakI7O0FBQ0EsWUFBSXlRLFNBQVEsR0FBRyxLQUFLbFMsT0FBTCxDQUFhVyxNQUE1QixFQUFvQztBQUNsQ2tCLG1CQUFTLENBQUMySyxXQUFWLEdBQXdCc0ssYUFBYSxDQUFDdEssV0FBdEM7QUFDQSxlQUFLb0ssVUFBTCxDQUFnQkUsYUFBaEIsRUFBK0J0SyxXQUEvQixFQUE0QyxLQUFLeE0sT0FBTCxDQUFhaVcsV0FBekQ7QUFGa0Msc0JBR21DLENBQUMsS0FBSy9PLFVBQUwsQ0FBZ0J3UCxZQUFZLEdBQUcsQ0FBL0IsQ0FBRCxFQUFvQyxLQUFLeFAsVUFBTCxDQUFnQndQLFlBQWhCLENBQXBDLENBSG5DO0FBR2pDLGVBQUt4UCxVQUFMLENBQWdCd1AsWUFBaEIsQ0FIaUM7QUFHRixlQUFLeFAsVUFBTCxDQUFnQndQLFlBQVksR0FBRyxDQUEvQixDQUhFO0FBSWxDLGVBQUtLLGNBQUwsQ0FBb0JsVixTQUFwQjtBQUNEO0FBQ0Y7QUFDRjs7O3VDQUVrQkEsUyxFQUFXO0FBQzVCLFVBQU1tVixnQkFBZ0IsR0FBRyxLQUFLQyxtQkFBTCxFQUF6QjtBQUNBLFVBQU1ULFlBQVksR0FBR1EsZ0JBQWdCLENBQUN6USxHQUFqQixDQUFxQixVQUFDMUUsU0FBRDtBQUFBLGVBQWVBLFNBQVMsQ0FBQzJLLFdBQXpCO0FBQUEsT0FBckIsQ0FBckI7QUFFQSxVQUFNa0ssWUFBWSxHQUFHTSxnQkFBZ0IsQ0FBQ2xPLE9BQWpCLENBQXlCakgsU0FBekIsQ0FBckI7QUFDQSxVQUFNcVYsV0FBVyxHQUFHaFgsa0RBQVEsQ0FBQ3NTLG1CQUFULENBQTZCZ0UsWUFBN0IsRUFBMkMzVSxTQUFTLENBQUNKLFFBQXJELEVBQStELEtBQUt6QixPQUFMLENBQWFXLE1BQTVFLEVBQW9GLEtBQUtYLE9BQUwsQ0FBYXdLLFdBQWpHLENBQXBCOztBQUVBLFVBQUkwTSxXQUFXLEtBQUssQ0FBQyxDQUFyQixFQUF3QjtBQUN0QixZQUFJQSxXQUFXLEdBQUdSLFlBQWxCLEVBQWdDO0FBQzlCLGVBQUssSUFBSXZQLENBQUMsR0FBQytQLFdBQVgsRUFBd0IvUCxDQUFDLEdBQUN1UCxZQUExQixFQUF3Q3ZQLENBQUMsRUFBekMsRUFBNkM7QUFDM0MsaUJBQUt5UCxVQUFMLENBQWdCSSxnQkFBZ0IsQ0FBQzdQLENBQUQsQ0FBaEMsRUFBcUNxUCxZQUFZLENBQUNyUCxDQUFDLEdBQUMsQ0FBSCxDQUFqRCxFQUF3RCxLQUFLbkgsT0FBTCxDQUFhaVcsV0FBckU7QUFDRDtBQUNGLFNBSkQsTUFJTztBQUNMLGVBQUssSUFBSTlPLEVBQUMsR0FBQ3VQLFlBQVgsRUFBeUJ2UCxFQUFDLEdBQUMrUCxXQUEzQixFQUF3Qy9QLEVBQUMsRUFBekMsRUFBNkM7QUFDM0MsaUJBQUt5UCxVQUFMLENBQWdCSSxnQkFBZ0IsQ0FBQzdQLEVBQUMsR0FBQyxDQUFILENBQWhDLEVBQXVDcVAsWUFBWSxDQUFDclAsRUFBRCxDQUFuRCxFQUF3RCxLQUFLbkgsT0FBTCxDQUFhaVcsV0FBckU7QUFDRDtBQUNGOztBQUNEcFUsaUJBQVMsQ0FBQ1EsSUFBVixDQUFlbVUsWUFBWSxDQUFDVSxXQUFELENBQTNCLEVBQTBDLEtBQUtsWCxPQUFMLENBQWFnVyxPQUF2RCxFQUFnRSxJQUFoRTtBQUNELE9BWEQsTUFXTztBQUNMblUsaUJBQVMsQ0FBQ1EsSUFBVixDQUFlUixTQUFTLENBQUMySyxXQUF6QixFQUFzQyxLQUFLeE0sT0FBTCxDQUFhZ1csT0FBbkQsRUFBNEQsSUFBNUQ7QUFDRDtBQUNGOzs7NEJBRU9uVSxTLEVBQVc7QUFDakIsVUFBSXNGLENBQUo7QUFDQSxVQUFNNlAsZ0JBQWdCLEdBQUcsS0FBS0MsbUJBQUwsRUFBekI7QUFDQSxVQUFNVCxZQUFZLEdBQUdRLGdCQUFnQixDQUFDelEsR0FBakIsQ0FBcUIsVUFBQzFFLFNBQUQ7QUFBQSxlQUFlQSxTQUFTLENBQUMySyxXQUF6QjtBQUFBLE9BQXJCLENBQXJCO0FBRUEsVUFBTWtLLFlBQVksR0FBR00sZ0JBQWdCLENBQUNsTyxPQUFqQixDQUF5QmpILFNBQXpCLENBQXJCOztBQUNBLFdBQUtzRixDQUFDLEdBQUd1UCxZQUFZLEdBQUcsQ0FBeEIsRUFBMkJ2UCxDQUFDLEdBQUc2UCxnQkFBZ0IsQ0FBQ2xSLE1BQWhELEVBQXdEcUIsQ0FBQyxFQUF6RCxFQUE2RDtBQUMzRCxhQUFLeVAsVUFBTCxDQUFnQkksZ0JBQWdCLENBQUM3UCxDQUFELENBQWhDLEVBQXFDcVAsWUFBWSxDQUFDclAsQ0FBQyxHQUFHLENBQUwsQ0FBakQsRUFBMEQsS0FBS25ILE9BQUwsQ0FBYWlXLFdBQXZFO0FBQ0Q7O0FBQ0RlLHNCQUFnQixDQUFDTixZQUFELENBQWhCLENBQStCbEssV0FBL0IsR0FBNkNnSyxZQUFZLENBQUNyUCxDQUFDLEdBQUcsQ0FBTCxDQUF6RDtBQUNEOzs7NENBRXVCO0FBQ3RCLGFBQU8sS0FBS0QsVUFBTCxDQUFnQlgsR0FBaEIsQ0FBb0IsVUFBQzFFLFNBQUQ7QUFBQSxlQUFlQSxTQUFTLENBQUMySyxXQUFWLENBQXNCN0osS0FBdEIsRUFBZjtBQUFBLE9BQXBCLENBQVA7QUFDRDs7OzBDQUVxQjtBQUFBOztBQUNwQixVQUFNd1UsYUFBYSxHQUFHLEtBQUtqUSxVQUFMLENBQWdCWCxHQUFoQixDQUFvQixVQUFDMUUsU0FBRDtBQUFBLGVBQWVBLFNBQVMsQ0FBQzRLLFlBQXpCO0FBQUEsT0FBcEIsQ0FBdEI7QUFFQSxVQUFNdUssZ0JBQWdCLEdBQUdHLGFBQWEsQ0FBQzVRLEdBQWQsQ0FBa0IsVUFBQzlFLFFBQUQsRUFBYztBQUN2RCxlQUFPLE1BQUksQ0FBQ3lGLFVBQUwsQ0FBZ0JpTyxNQUFoQixDQUF1QixVQUFDdFQsU0FBRDtBQUFBLGlCQUFlQSxTQUFTLENBQUMySyxXQUFWLENBQXNCNEssT0FBdEIsQ0FBOEIzVixRQUE5QixDQUFmO0FBQUEsU0FBdkIsRUFBK0UsQ0FBL0UsQ0FBUDtBQUNELE9BRndCLENBQXpCO0FBSUEsYUFBT3VWLGdCQUFQO0FBQ0Q7Ozs0QkFFTztBQUNOLFdBQUs5UCxVQUFMLENBQWdCd0IsT0FBaEIsQ0FBd0IsVUFBQzdHLFNBQUQsRUFBZTtBQUNyQ0EsaUJBQVMsQ0FBQ1EsSUFBVixDQUFlUixTQUFTLENBQUM0SyxZQUF6QixFQUF1QyxDQUF2QyxFQUEwQyxJQUExQyxFQUFnRCxLQUFoRDtBQUNELE9BRkQ7QUFHRDs7OzhCQUVTO0FBQ1IsV0FBS3ZGLFVBQUwsQ0FBZ0J3QixPQUFoQixDQUF3QixVQUFDN0csU0FBRCxFQUFlO0FBQ3JDQSxpQkFBUyxDQUFDdUIsT0FBVjtBQUNELE9BRkQ7QUFHRDs7O3dCQUVHOEQsVSxFQUFZO0FBQ2QsVUFBSSxFQUFFQSxVQUFVLFlBQVkyQyxLQUF4QixDQUFKLEVBQW9DO0FBQ2xDM0Msa0JBQVUsR0FBRyxDQUFDQSxVQUFELENBQWI7QUFDRDs7QUFDREEsZ0JBQVUsQ0FBQ3dCLE9BQVgsQ0FBbUIsS0FBSzBOLGFBQXhCLEVBQXVDLElBQXZDO0FBQ0EsV0FBS2xQLFVBQUwsR0FBa0IsS0FBS0EsVUFBTCxDQUFnQm1RLE1BQWhCLENBQXVCblEsVUFBdkIsQ0FBbEI7QUFDRDs7OzJCQUVNQSxVLEVBQVk7QUFBQTs7QUFDakIsVUFBTWlRLGFBQWEsR0FBRyxLQUFLalEsVUFBTCxDQUFnQlgsR0FBaEIsQ0FBb0IsVUFBQzFFLFNBQUQ7QUFBQSxlQUFlQSxTQUFTLENBQUM0SyxZQUF6QjtBQUFBLE9BQXBCLENBQXRCO0FBQ0EsVUFBTTZKLElBQUksR0FBRyxFQUFiO0FBQ0EsVUFBTVUsZ0JBQWdCLEdBQUcsS0FBS0MsbUJBQUwsRUFBekI7O0FBRUEsVUFBSSxFQUFFL1AsVUFBVSxZQUFZMkMsS0FBeEIsQ0FBSixFQUFvQztBQUNsQzNDLGtCQUFVLEdBQUcsQ0FBQ0EsVUFBRCxDQUFiO0FBQ0Q7O0FBRURBLGdCQUFVLENBQUN3QixPQUFYLENBQW1CLFVBQUM3RyxTQUFELEVBQWU7QUFDaENBLGlCQUFTLENBQUNvSyxLQUFWLENBQWdCeUQsS0FBaEI7QUFDQTdOLGlCQUFTLENBQUNHLE1BQVYsQ0FBaUIwTixLQUFqQixHQUZnQyxDQUVQOztBQUN6QjRILDBFQUFXLENBQUMsTUFBSSxDQUFDcFEsVUFBTixFQUFrQnJGLFNBQWxCLENBQVg7QUFDRCxPQUpEO0FBTUEsVUFBSTZJLENBQUMsR0FBRyxDQUFSO0FBQ0FzTSxzQkFBZ0IsQ0FBQ3RPLE9BQWpCLENBQXlCLFVBQUM3RyxTQUFELEVBQWU7QUFDdEMsWUFBSSxNQUFJLENBQUNxRixVQUFMLENBQWdCNEIsT0FBaEIsQ0FBd0JqSCxTQUF4QixNQUF1QyxDQUFDLENBQTVDLEVBQStDO0FBQzdDLGNBQUlBLFNBQVMsQ0FBQzJLLFdBQVYsS0FBMEIySyxhQUFhLENBQUN6TSxDQUFELENBQTNDLEVBQWdEO0FBQzlDN0kscUJBQVMsQ0FBQ1EsSUFBVixDQUFlOFUsYUFBYSxDQUFDek0sQ0FBRCxDQUE1QixFQUFpQyxNQUFJLENBQUMxSyxPQUFMLENBQWFpVyxXQUE5QyxFQUEyRCxJQUEzRDtBQUNEOztBQUNEcFUsbUJBQVMsQ0FBQzRLLFlBQVYsR0FBeUIwSyxhQUFhLENBQUN6TSxDQUFELENBQXRDO0FBQ0FBLFdBQUM7QUFDRDRMLGNBQUksQ0FBQ2hWLElBQUwsQ0FBVU8sU0FBVjtBQUNEO0FBQ0YsT0FURDtBQVVBLFdBQUtxRixVQUFMLEdBQWtCb1AsSUFBbEI7QUFDRDs7OzRCQUVPO0FBQ04sV0FBS25HLE1BQUwsQ0FBWSxLQUFLakosVUFBTCxDQUFnQmtELEtBQWhCLEVBQVo7QUFDRDs7OzhCQUVTO0FBQ1IsV0FBS2xELFVBQUwsQ0FBZ0J3QixPQUFoQixDQUF3QixVQUFDN0csU0FBRDtBQUFBLGVBQWVBLFNBQVMsQ0FBQzBWLE9BQVYsRUFBZjtBQUFBLE9BQXhCO0FBQ0Q7Ozt3QkFFZTtBQUNkLGFBQU8sS0FBS2QscUJBQUwsRUFBUDtBQUNELEs7c0JBRWFlLFMsRUFBVztBQUFBOztBQUN2QixVQUFNak0sT0FBTyxHQUFHLG9CQUFoQjs7QUFDQSxVQUFJaU0sU0FBUyxDQUFDMVIsTUFBVixLQUFxQixLQUFLb0IsVUFBTCxDQUFnQnBCLE1BQXpDLEVBQWlEO0FBQy9DMFIsaUJBQVMsQ0FBQzlPLE9BQVYsQ0FBa0IsVUFBQ2xHLEtBQUQsRUFBUTJFLENBQVIsRUFBYztBQUM5QixnQkFBSSxDQUFDRCxVQUFMLENBQWdCQyxDQUFoQixFQUFtQjlFLElBQW5CLENBQXdCRyxLQUF4QixFQUErQixDQUEvQixFQUFrQyxJQUFsQyxFQUF3QyxJQUF4QztBQUNELFNBRkQsRUFFRyxJQUZIO0FBR0QsT0FKRCxNQUlPO0FBQ0wsY0FBTStJLE9BQU47QUFDRDtBQUNGOzs7d0JBRVk7QUFDWCxhQUFPLEtBQUtnQixPQUFaO0FBQ0QsSztzQkFFVTVCLE0sRUFBUTtBQUNqQixXQUFLNEIsT0FBTCxHQUFlNUIsTUFBZjtBQUNBLFdBQUt6RCxVQUFMLENBQWdCd0IsT0FBaEIsQ0FBd0IsVUFBQzdHLFNBQUQsRUFBZTtBQUNyQ0EsaUJBQVMsQ0FBQzhJLE1BQVYsR0FBbUJBLE1BQW5CO0FBQ0QsT0FGRDtBQUdEOzs7Ozs7QUFHSCxTQUFTOE0sV0FBVCxDQUFxQkMsYUFBckIsRUFBb0N2UixRQUFwQyxFQUEwRDtBQUFBLE1BQVpuRyxPQUFZLHVFQUFKLEVBQUk7QUFDeEQsTUFBTTJYLGdCQUFnQixHQUFHM1gsT0FBTyxDQUFDNkIsU0FBUixJQUFxQixFQUE5QztBQUNBLE1BQU0rVixXQUFXLEdBQUc1WCxPQUFPLENBQUNzVyxJQUFSLElBQWdCLEVBQXBDO0FBQ0FxQixrQkFBZ0IsQ0FBQzVWLE1BQWpCLEdBQTBCNFYsZ0JBQWdCLENBQUM1VixNQUFqQixJQUEyQjJWLGFBQXJEO0FBQ0F2UixVQUFRLEdBQUcwRCxLQUFLLENBQUMrRixTQUFOLENBQWdCeEYsS0FBaEIsQ0FBc0JsQixJQUF0QixDQUEyQi9DLFFBQTNCLENBQVg7QUFFQSxNQUFNZSxVQUFVLEdBQUdmLFFBQVEsQ0FBQ0ksR0FBVCxDQUFhLFVBQUN4RyxPQUFELEVBQWE7QUFDM0MsV0FBTyxJQUFJK0Isb0RBQUosQ0FBYy9CLE9BQWQsRUFBdUI0WCxnQkFBdkIsQ0FBUDtBQUNELEdBRmtCLENBQW5CO0FBSUEsU0FBTyxJQUFJNUIsSUFBSixDQUFTN08sVUFBVCxFQUFxQjBRLFdBQXJCLENBQVA7QUFDRDs7Ozs7Ozs7Ozs7Ozs7QUNqUUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBOztJQUVNQyxZOzs7OztBQUNKLHdCQUFZM1EsVUFBWixFQUFvQztBQUFBLFFBQVpsSCxPQUFZLHVFQUFKLEVBQUk7O0FBQUE7O0FBQ2xDQSxXQUFPLENBQUM4WCxNQUFSLEdBQWlCOVgsT0FBTyxDQUFDOFgsTUFBUixJQUFrQixJQUFJdlQsK0NBQUosQ0FBVSxDQUFDLEVBQVgsRUFBZSxDQUFmLENBQW5DO0FBRGtDLHFGQUU1QjJDLFVBRjRCLEVBRWhCbEgsT0FGZ0I7QUFHbkM7Ozs7MkJBRU07QUFBQTs7QUFDTCxXQUFLa0gsVUFBTCxDQUFnQndCLE9BQWhCLENBQXdCLFVBQUM3RyxTQUFELEVBQWU7QUFDckNBLGlCQUFTLENBQUNrVyxJQUFWLEdBQWlCLEtBQWpCO0FBQ0FsVyxpQkFBUyxDQUFDb0ssS0FBVixDQUFnQmxDLEdBQWhCLENBQW9CLFlBQU07QUFDeEIsZUFBSSxDQUFDa0MsS0FBTCxDQUFXcEssU0FBWDs7QUFDQSxpQkFBTyxJQUFQO0FBQ0QsU0FIRDtBQUlELE9BTkQ7QUFPRDs7OzBCQUVLQSxTLEVBQVc7QUFDZixVQUFNMlUsWUFBWSxHQUFHLEtBQUt3Qiw0QkFBTCxFQUFyQjtBQUNBLFVBQU10QixZQUFZLEdBQUcsS0FBS3hQLFVBQUwsQ0FBZ0I0QixPQUFoQixDQUF3QmpILFNBQXhCLENBQXJCO0FBQ0EsVUFBTThVLFlBQVksR0FBR3pXLGtEQUFRLENBQUNzUyxtQkFBVCxDQUE2QmdFLFlBQTdCLEVBQTJDM1UsU0FBUyxDQUFDSixRQUFyRCxFQUErRCxLQUFLekIsT0FBTCxDQUFhVyxNQUE1RSxFQUFvRixLQUFLWCxPQUFMLENBQWF3SyxXQUFqRyxDQUFyQjs7QUFFQSxVQUFJbU0sWUFBWSxLQUFLLENBQUMsQ0FBbEIsSUFBdUJBLFlBQVksS0FBS0QsWUFBNUMsRUFBMEQ7QUFDeEQsYUFBS3VCLGFBQUwsQ0FBbUJ2QixZQUFuQixFQUFpQzdVLFNBQVMsQ0FBQ0osUUFBM0MsRUFBcUQrVSxZQUFZLENBQUNFLFlBQUQsQ0FBakUsRUFBaUYsS0FBSzFXLE9BQUwsQ0FBYWdXLE9BQTlGO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsWUFBSSxLQUFLOU8sVUFBTCxDQUFnQnlQLFlBQWhCLEVBQThCeEgsVUFBbEMsRUFBOEM7QUFDNUMsZUFBSytJLFFBQUwsQ0FBY3ZCLFlBQWQsRUFBNEJILFlBQVksQ0FBQ0UsWUFBRCxDQUF4QztBQUNELFNBRkQsTUFFTztBQUNMLGVBQUt5QixrQkFBTCxDQUF3QnhCLFlBQXhCLEVBQXNDSCxZQUFZLENBQUNFLFlBQUQsQ0FBbEQsRUFBa0UsS0FBSzFXLE9BQUwsQ0FBYWlXLFdBQS9FO0FBQ0Q7O0FBQ0QsYUFBS2dDLGFBQUwsQ0FBbUJ2QixZQUFuQixFQUFpQzdVLFNBQVMsQ0FBQ0osUUFBM0MsRUFBcUQrVSxZQUFZLENBQUNHLFlBQUQsQ0FBakUsRUFBaUYsS0FBSzNXLE9BQUwsQ0FBYWdXLE9BQTlGO0FBQ0EsYUFBSzlVLFFBQUwsQ0FBY29MLElBQWQ7QUFDRDs7QUFDRCxhQUFPLElBQVA7QUFDRDs7O2tDQUVhdEcsSyxFQUFPdkUsUSxFQUFVMlcsYyxFQUFnQmpYLEksRUFBTTtBQUNuRCxVQUFNcVcsU0FBUyxHQUFHLENBQUNZLGNBQUQsRUFBaUJBLGNBQWMsQ0FBQ3JPLEdBQWYsQ0FBbUIsS0FBSy9KLE9BQUwsQ0FBYThYLE1BQWhDLENBQWpCLENBQWxCO0FBQ0EsVUFBTUMsSUFBSSxHQUFHN1gsa0RBQVEsQ0FBQ3NTLG1CQUFULENBQTZCZ0YsU0FBN0IsRUFBd0MvVixRQUF4QyxFQUFrRCxDQUFDLENBQW5ELEVBQXNEdkIsa0RBQVEsQ0FBQ2lTLGNBQS9ELENBQWI7O0FBRUEsVUFBSSxLQUFLakwsVUFBTCxDQUFnQmxCLEtBQWhCLEVBQXVCK1IsSUFBdkIsS0FBZ0MsQ0FBQyxDQUFDQSxJQUF0QyxFQUE0QztBQUMxQyxhQUFLN1EsVUFBTCxDQUFnQmxCLEtBQWhCLEVBQXVCK1IsSUFBdkIsR0FBOEIsQ0FBQyxDQUFDQSxJQUFoQztBQUNBLGFBQUs3VyxRQUFMLENBQWNvTCxJQUFkO0FBQ0Q7O0FBRUQsV0FBS3BGLFVBQUwsQ0FBZ0JsQixLQUFoQixFQUF1QjNELElBQXZCLENBQTRCbVYsU0FBUyxDQUFDTyxJQUFELENBQXJDLEVBQTZDNVcsSUFBN0MsRUFBbUQsSUFBbkQ7QUFDRDs7OzZCQUVRNkUsSyxFQUFPb1MsYyxFQUFnQjtBQUM5QixXQUFLbFIsVUFBTCxDQUFnQmxCLEtBQWhCLEVBQXVCK1IsSUFBdkIsR0FBOEIsS0FBOUI7QUFDQSxXQUFLN1EsVUFBTCxDQUFnQmxCLEtBQWhCLEVBQXVCd0csV0FBdkIsR0FBcUM0TCxjQUFyQztBQUNEOzs7dUNBRWtCcFMsSyxFQUFPb1MsYyxFQUFnQmpYLEksRUFBTTtBQUM5QyxXQUFLK0YsVUFBTCxDQUFnQmxCLEtBQWhCLEVBQXVCK1IsSUFBdkIsR0FBOEIsS0FBOUI7QUFDQSxXQUFLN1EsVUFBTCxDQUFnQmxCLEtBQWhCLEVBQXVCM0QsSUFBdkIsQ0FBNEIrVixjQUE1QixFQUE0Q2pYLElBQTVDLEVBQWtELElBQWxEO0FBQ0Q7OzttREFFOEI7QUFBQTs7QUFDN0IsYUFBTyxLQUFLK0YsVUFBTCxDQUFnQlgsR0FBaEIsQ0FBb0IsVUFBQzFFLFNBQUQsRUFBZTtBQUN4QyxlQUFPQSxTQUFTLENBQUNrVyxJQUFWLEdBQWlCbFcsU0FBUyxDQUFDMkssV0FBVixDQUFzQm5MLEdBQXRCLENBQTBCLE1BQUksQ0FBQ3JCLE9BQUwsQ0FBYThYLE1BQXZDLENBQWpCLEdBQWtFalcsU0FBUyxDQUFDMkssV0FBVixDQUFzQjdKLEtBQXRCLEVBQXpFO0FBQ0QsT0FGTSxFQUVKLElBRkksQ0FBUDtBQUdEOzs7MENBRXFCO0FBQUE7O0FBQ3BCLGFBQU8sS0FBS3VFLFVBQUwsQ0FBZ0JYLEdBQWhCLENBQW9CLFVBQUMxRSxTQUFEO0FBQUEsZUFBZUEsU0FBUyxDQUFDNEssWUFBekI7QUFBQSxPQUFwQixFQUNnQmxHLEdBRGhCLENBQ29CLFVBQUM5RSxRQUFELEVBQWM7QUFDakIsZUFBTyxNQUFJLENBQUN5RixVQUFMLENBQWdCaU8sTUFBaEIsQ0FBdUIsVUFBQ3RULFNBQUQsRUFBZTtBQUMzQyxpQkFBT0EsU0FBUyxDQUFDMkssV0FBVixDQUFzQjRLLE9BQXRCLENBQThCM1YsUUFBOUIsS0FBMkNJLFNBQVMsQ0FBQzJLLFdBQVYsQ0FBc0I0SyxPQUF0QixDQUE4QjNWLFFBQVEsQ0FBQ3NJLEdBQVQsQ0FBYSxNQUFJLENBQUMvSixPQUFMLENBQWE4WCxNQUExQixDQUE5QixDQUFsRDtBQUNELFNBRk0sRUFFSixNQUZJLEVBRUUsQ0FGRixDQUFQO0FBR0QsT0FMaEIsRUFLa0IsSUFMbEIsQ0FBUDtBQU1EOzs7NEJBRU87QUFDTixXQUFLNVEsVUFBTCxDQUFnQndCLE9BQWhCLENBQXdCLFVBQUM3RyxTQUFELEVBQWU7QUFDckNBLGlCQUFTLENBQUNRLElBQVYsQ0FBZVIsU0FBUyxDQUFDNEssWUFBekIsRUFBdUMsQ0FBdkMsRUFBMEMsSUFBMUMsRUFBZ0QsS0FBaEQ7QUFDQTVLLGlCQUFTLENBQUNrVyxJQUFWLEdBQWlCLEtBQWpCO0FBQ0QsT0FIRDtBQUlEOzs7d0JBRWU7QUFDZCxhQUFPLEtBQUs3USxVQUFMLENBQWdCWCxHQUFoQixDQUFvQixVQUFDMUUsU0FBRCxFQUFlO0FBQ3hDLFlBQU1KLFFBQVEsR0FBR0ksU0FBUyxDQUFDMkssV0FBVixDQUFzQjdKLEtBQXRCLEVBQWpCO0FBQ0FsQixnQkFBUSxDQUFDc1csSUFBVCxHQUFnQmxXLFNBQVMsQ0FBQ2tXLElBQTFCO0FBQ0EsZUFBT3RXLFFBQVA7QUFDRCxPQUpNLENBQVA7QUFLRCxLO3NCQUVhK1YsUyxFQUFXO0FBQUE7O0FBQ3ZCLFVBQU1qTSxPQUFPLEdBQUcsb0JBQWhCOztBQUNBLFVBQUlpTSxTQUFTLENBQUMxUixNQUFWLEtBQXFCLEtBQUtvQixVQUFMLENBQWdCcEIsTUFBekMsRUFBaUQ7QUFDL0MwUixpQkFBUyxDQUFDOU8sT0FBVixDQUFrQixVQUFDbEcsS0FBRCxFQUFRMkUsQ0FBUixFQUFjO0FBQzlCLGdCQUFJLENBQUNELFVBQUwsQ0FBZ0JDLENBQWhCLEVBQW1CNFEsSUFBbkIsR0FBMEJ2VixLQUFLLENBQUN1VixJQUFoQzs7QUFDQSxnQkFBSSxDQUFDN1EsVUFBTCxDQUFnQkMsQ0FBaEIsRUFBbUI5RSxJQUFuQixDQUF3QkcsS0FBeEIsRUFBK0IsQ0FBL0IsRUFBa0MsSUFBbEMsRUFBd0MsSUFBeEM7QUFDRCxTQUhELEVBR0csSUFISDtBQUlELE9BTEQsTUFLTztBQUNMLGNBQU0rSSxPQUFOO0FBQ0Q7QUFDRjs7OztFQWpHd0J3SywwQzs7QUFvRzNCLFNBQVNzQyxtQkFBVCxDQUE2QnRZLE9BQTdCLEVBQXNDdVksaUJBQXRDLEVBQXFFO0FBQUEsTUFBWnRZLE9BQVksdUVBQUosRUFBSTtBQUNuRSxNQUFNMlgsZ0JBQWdCLEdBQUczWCxPQUFPLENBQUM2QixTQUFSLElBQXFCLEVBQTlDO0FBQ0EsTUFBTStWLFdBQVcsR0FBRzVYLE9BQU8sQ0FBQ3NXLElBQVIsSUFBZ0IsRUFBcEM7QUFFQXFCLGtCQUFnQixDQUFDNVYsTUFBakIsR0FBMEI0VixnQkFBZ0IsQ0FBQzVWLE1BQWpCLElBQTJCaEMsT0FBckQ7QUFDQXVZLG1CQUFpQixHQUFHek8sS0FBSyxDQUFDK0YsU0FBTixDQUFnQnhGLEtBQWhCLENBQXNCbEIsSUFBdEIsQ0FBMkJvUCxpQkFBM0IsQ0FBcEI7QUFFQSxNQUFNcFIsVUFBVSxHQUFHb1IsaUJBQWlCLENBQUMvUixHQUFsQixDQUFzQixVQUFDeEcsT0FBRCxFQUFhO0FBQ3BELFdBQU8sSUFBSStCLG9EQUFKLENBQWMvQixPQUFkLEVBQXVCNFgsZ0JBQXZCLENBQVA7QUFDRCxHQUZrQixDQUFuQjtBQUdBLFNBQU8sSUFBSUUsWUFBSixDQUFpQjNRLFVBQWpCLEVBQTZCMFEsV0FBN0IsQ0FBUDtBQUNEOzs7Ozs7Ozs7Ozs7OztBQ3JIRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFFQSxJQUFNVyxZQUFZLEdBQUc7QUFDbkJDLGFBQVcsRUFBRSxDQURNO0FBRW5CQyxXQUFTLEVBQUUsQ0FGUTtBQUduQkMsWUFBVSxFQUFFO0FBSE8sQ0FBckI7O0FBTUEsU0FBU0MsZUFBVCxDQUF5QkMsSUFBekIsRUFBK0I7QUFDN0IsVUFBUUEsSUFBUjtBQUNBLFNBQUtMLFlBQVksQ0FBQ0MsV0FBbEI7QUFDRSxhQUFPLFVBQVNqVyxTQUFULEVBQW9Cc1csUUFBcEIsRUFBOEI7QUFDbkMsZUFBTyxVQUFTQyxhQUFULEVBQXdCQyxhQUF4QixFQUF1QztBQUM1QyxjQUFNQyxTQUFTLEdBQUcsT0FBT3pXLFNBQVAsS0FBcUIsVUFBckIsR0FBa0NBLFNBQVMsRUFBM0MsR0FBZ0RBLFNBQWxFO0FBQUEsY0FDRTBXLHNCQUFzQixHQUFHSCxhQUFhLENBQUN2RSxNQUFkLENBQXFCLFVBQVMyRSxPQUFULEVBQWtCQyxLQUFsQixFQUF5Qm5ULEtBQXpCLEVBQWdDO0FBQzVFLGdCQUFJK1MsYUFBYSxDQUFDalEsT0FBZCxDQUFzQjlDLEtBQXRCLE1BQWlDLENBQUMsQ0FBdEMsRUFBeUM7QUFDdkNrVCxxQkFBTyxDQUFDNVgsSUFBUixDQUFhMEUsS0FBYjtBQUNEOztBQUNELG1CQUFPa1QsT0FBUDtBQUNELFdBTHdCLEVBS3RCLEVBTHNCLENBRDNCO0FBUUFILHVCQUFhLENBQUNyUSxPQUFkLENBQXNCLFVBQVMxQyxLQUFULEVBQWdCO0FBQ3BDLGdCQUFJOEssSUFBSSxHQUFHZ0ksYUFBYSxDQUFDOVMsS0FBRCxDQUF4QjtBQUFBLGdCQUFpQ29ULFNBQVMsR0FBRyxLQUE3QztBQUNBSCxrQ0FBc0IsQ0FBQ3ZRLE9BQXZCLENBQStCLFVBQVMyUSxhQUFULEVBQXdCO0FBQ3JELGtCQUFNQyxVQUFVLEdBQUdSLGFBQWEsQ0FBQ08sYUFBRCxDQUFoQztBQUNBdkksa0JBQUksR0FBR3dJLFVBQVUsQ0FBQ0MsV0FBWCxDQUF1QnpJLElBQXZCLENBQVA7QUFDRCxhQUhEO0FBSUFzSSxxQkFBUyxHQUFHSCxzQkFBc0IsQ0FBQ3pOLElBQXZCLENBQTRCLFVBQVM2TixhQUFULEVBQXdCO0FBQzlELGtCQUFNQyxVQUFVLEdBQUdSLGFBQWEsQ0FBQ08sYUFBRCxDQUFoQztBQUNBLHFCQUFRLENBQUMsQ0FBQ0MsVUFBVSxDQUFDakksR0FBWCxDQUFlUCxJQUFmLENBQVY7QUFDRCxhQUhXLEtBR05BLElBQUksQ0FBQ08sR0FBTCxDQUFTMkgsU0FBVCxFQUFvQlEsU0FBcEIsT0FBb0MxSSxJQUFJLENBQUMwSSxTQUFMLEVBSDFDOztBQUlBLGdCQUFJSixTQUFKLEVBQWU7QUFDYnRJLGtCQUFJLENBQUNzSSxTQUFMLEdBQWlCLElBQWpCO0FBQ0QsYUFGRCxNQUVPO0FBQ0xILG9DQUFzQixDQUFDM1gsSUFBdkIsQ0FBNEIwRSxLQUE1QjtBQUNEO0FBQ0YsV0FmRDtBQWdCQSxpQkFBTzhTLGFBQVA7QUFDRCxTQTFCRDtBQTJCRCxPQTVCRDs7QUE2QkYsU0FBS1AsWUFBWSxDQUFDRSxTQUFsQjtBQUNFLGFBQU8sVUFBU2xXLFNBQVQsRUFBb0J2QyxPQUFwQixFQUE2QjtBQUNsQ0EsZUFBTyxHQUFHTyxNQUFNLENBQUNDLE1BQVAsQ0FBYztBQUN0QmlaLHdCQUFjLEVBQUUsSUFBSWxWLCtDQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsQ0FETTtBQUV0Qm1WLDRCQUFrQixFQUFFLElBQUluViwrQ0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLENBRkU7QUFHdEJvViwrQkFBcUIsRUFBRSxDQUhEO0FBSXRCUCxtQkFBUyxFQUFFO0FBSlcsU0FBZCxFQUtQcFosT0FMTyxDQUFWO0FBT0EsZUFBTyxVQUFTOFksYUFBVCxFQUF3QmMsY0FBeEIsRUFBd0M7QUFDN0MsY0FBTVosU0FBUyxHQUFHLE9BQU96VyxTQUFQLEtBQXFCLFVBQXJCLEdBQWtDQSxTQUFTLEVBQTNDLEdBQWdEQSxTQUFsRTtBQUNBLGNBQU1LLE1BQU0sR0FBR29XLFNBQVMsQ0FBQ2EsS0FBVixFQUFmO0FBQ0EsY0FBSUMsY0FBYyxHQUFHLENBQUNkLFNBQVMsQ0FBQ3ZYLFFBQVgsQ0FBckI7QUFDQXFYLHVCQUFhLENBQUNwUSxPQUFkLENBQXNCLFVBQVNvSSxJQUFULEVBQWU7QUFDbkMsZ0JBQUlyUCxRQUFKO0FBQUEsZ0JBQWNzWSxPQUFPLEdBQUcsS0FBeEI7O0FBQ0EsaUJBQUssSUFBSTVTLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcyUyxjQUFjLENBQUNoVSxNQUFuQyxFQUEyQ3FCLENBQUMsRUFBNUMsRUFBZ0Q7QUFDOUMxRixzQkFBUSxHQUFJLElBQUk4QywrQ0FBSixDQUFVdVYsY0FBYyxDQUFDM1MsQ0FBRCxDQUFkLENBQWtCckUsQ0FBNUIsRUFBK0JxRSxDQUFDLEdBQUcsQ0FBSixHQUFTMlMsY0FBYyxDQUFDM1MsQ0FBQyxHQUFHLENBQUwsQ0FBZCxDQUFzQnBFLENBQXRCLEdBQTBCL0MsT0FBTyxDQUFDMloscUJBQTNDLEdBQW9FWCxTQUFTLENBQUN2WCxRQUFWLENBQW1Cc0IsQ0FBdEgsQ0FBRCxDQUEySGdILEdBQTNILENBQStIL0osT0FBTyxDQUFDeVosY0FBdkksQ0FBWDtBQUNBTSxxQkFBTyxHQUFJdFksUUFBUSxDQUFDcUIsQ0FBVCxHQUFhZ08sSUFBSSxDQUFDck8sSUFBTCxDQUFVSyxDQUF2QixHQUEyQkYsTUFBTSxDQUFDRSxDQUE3Qzs7QUFDQSxrQkFBSWlYLE9BQUosRUFBYTtBQUNYO0FBQ0Q7QUFDRjs7QUFDRCxnQkFBSSxDQUFDQSxPQUFMLEVBQWM7QUFDWnRZLHNCQUFRLEdBQUksSUFBSThDLCtDQUFKLENBQVV5VSxTQUFTLENBQUN2WCxRQUFWLENBQW1CcUIsQ0FBN0IsRUFBZ0NnWCxjQUFjLENBQUNBLGNBQWMsQ0FBQ2hVLE1BQWYsR0FBd0IsQ0FBekIsQ0FBZCxDQUEwQy9DLENBQTFDLEdBQThDL0MsT0FBTyxDQUFDMloscUJBQXRGLENBQUQsQ0FBK0c1UCxHQUEvRyxDQUFtSC9KLE9BQU8sQ0FBQ3laLGNBQTNILENBQVg7QUFDRDs7QUFDRDNJLGdCQUFJLENBQUNyUCxRQUFMLEdBQWdCQSxRQUFoQjs7QUFDQSxnQkFBSXpCLE9BQU8sQ0FBQ29aLFNBQVIsSUFBcUJ0SSxJQUFJLENBQUNqTyxLQUFMLEdBQWFFLENBQWIsR0FBaUJpVyxTQUFTLENBQUNuVyxLQUFWLEdBQWtCRSxDQUE1RCxFQUErRDtBQUM3RCtOLGtCQUFJLENBQUNzSSxTQUFMLEdBQWlCLElBQWpCO0FBQ0Q7O0FBQ0RVLDBCQUFjLEdBQUc1WixrREFBUSxDQUFDNlUscUJBQVQsQ0FBK0IrRSxjQUEvQixFQUErQ2hKLElBQUksQ0FBQ2pPLEtBQUwsR0FBYWtILEdBQWIsQ0FBaUIvSixPQUFPLENBQUMwWixrQkFBekIsQ0FBL0MsQ0FBakI7QUFDRCxXQWpCRDtBQWtCQSxpQkFBT1osYUFBUDtBQUNELFNBdkJEO0FBd0JELE9BaENEOztBQWlDRixTQUFLUCxZQUFZLENBQUNHLFVBQWxCO0FBQ0UsYUFBTyxVQUFTblcsU0FBVCxFQUFvQnZDLE9BQXBCLEVBQTZCO0FBQ2xDQSxlQUFPLEdBQUdPLE1BQU0sQ0FBQ3laLE1BQVAsQ0FBYztBQUN0QkMseUJBQWUsRUFBRSxJQUFJMVYsK0NBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixDQURLO0FBRXRCMlYsMkJBQWlCLEVBQUUsSUFBSTNWLCtDQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsQ0FGRztBQUd0QjZVLG1CQUFTLEVBQUU7QUFIVyxTQUFkLEVBSVBwWixPQUpPLENBQVY7QUFNQSxZQUFNbWEsa0JBQWtCLEdBQUcsSUFBSTVWLCtDQUFKLENBQVUsQ0FBQ3ZFLE9BQU8sQ0FBQ2lhLGVBQVIsQ0FBd0JuWCxDQUFuQyxFQUFzQzlDLE9BQU8sQ0FBQ2lhLGVBQVIsQ0FBd0JsWCxDQUE5RCxDQUEzQjtBQUNBLFlBQU1xWCxvQkFBb0IsR0FBRyxJQUFJN1YsK0NBQUosQ0FBVSxDQUFDdkUsT0FBTyxDQUFDa2EsaUJBQVIsQ0FBMEJwWCxDQUFyQyxFQUF3QzlDLE9BQU8sQ0FBQ2thLGlCQUFSLENBQTBCblgsQ0FBbEUsQ0FBN0I7QUFDQSxlQUFPLFVBQVMrVixhQUFULEVBQXdCYyxjQUF4QixFQUF3QztBQUM3QyxjQUFNWixTQUFTLEdBQUcsT0FBT3pXLFNBQVAsS0FBcUIsVUFBckIsR0FBa0NBLFNBQVMsRUFBM0MsR0FBZ0RBLFNBQWxFO0FBQ0EsY0FBSXVYLGNBQWMsR0FBRyxDQUFDZCxTQUFTLENBQUNxQixnQkFBVixFQUFELENBQXJCO0FBQ0F2Qix1QkFBYSxDQUFDcFEsT0FBZCxDQUFzQixVQUFTb0ksSUFBVCxFQUFld0osTUFBZixFQUF1QjtBQUMzQyxnQkFBSTdZLFFBQUo7QUFBQSxnQkFBY3NZLE9BQU8sR0FBRyxLQUF4Qjs7QUFDQSxpQkFBSyxJQUFJNVMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRzJTLGNBQWMsQ0FBQ2hVLE1BQW5DLEVBQTJDcUIsQ0FBQyxFQUE1QyxFQUFnRDtBQUM5QzFGLHNCQUFRLEdBQUksSUFBSThDLCtDQUFKLENBQVV1VixjQUFjLENBQUMzUyxDQUFELENBQWQsQ0FBa0JyRSxDQUFsQixHQUFzQmdPLElBQUksQ0FBQ3JPLElBQUwsQ0FBVUssQ0FBMUMsRUFBNkNxRSxDQUFDLEdBQUcsQ0FBSixHQUFRMlMsY0FBYyxDQUFDM1MsQ0FBQyxHQUFHLENBQUwsQ0FBZCxDQUFzQnBFLENBQTlCLEdBQWtDaVcsU0FBUyxDQUFDdlgsUUFBVixDQUFtQnNCLENBQWxHLENBQUQsQ0FBdUdnSCxHQUF2RyxDQUEyR29RLGtCQUEzRyxDQUFYO0FBQ0FKLHFCQUFPLEdBQUl0WSxRQUFRLENBQUNxQixDQUFULEdBQWFnTyxJQUFJLENBQUNyUCxRQUFMLENBQWNxQixDQUF0Qzs7QUFDQSxrQkFBSWlYLE9BQUosRUFBYTtBQUNYO0FBQ0Q7QUFDRjs7QUFDRCxnQkFBSSxDQUFDQSxPQUFMLEVBQWM7QUFDWnRZLHNCQUFRLEdBQUcsSUFBSThDLCtDQUFKLENBQVV5VSxTQUFTLENBQUNhLEtBQVYsR0FBa0IvVyxDQUE1QixFQUErQmdYLGNBQWMsQ0FBQ0EsY0FBYyxDQUFDaFUsTUFBZixHQUF3QixDQUF6QixDQUFkLENBQTBDL0MsQ0FBekUsQ0FBWDtBQUNEOztBQUNEK04sZ0JBQUksQ0FBQ3JQLFFBQUwsR0FBZ0JBLFFBQWhCOztBQUNBLGdCQUFJekIsT0FBTyxDQUFDb1osU0FBUixJQUFxQnRJLElBQUksQ0FBQ3lKLGtCQUFMLEdBQTBCeFgsQ0FBMUIsR0FBOEJpVyxTQUFTLENBQUN3QixLQUFWLEdBQWtCelgsQ0FBekUsRUFBNEU7QUFDMUUrTixrQkFBSSxDQUFDc0ksU0FBTCxHQUFpQixJQUFqQjtBQUNEOztBQUNEVSwwQkFBYyxHQUFHNVosa0RBQVEsQ0FBQzZVLHFCQUFULENBQStCK0UsY0FBL0IsRUFBK0NoSixJQUFJLENBQUMwSixLQUFMLEdBQWF6USxHQUFiLENBQWlCcVEsb0JBQWpCLENBQS9DLEVBQXVGLElBQXZGLENBQWpCO0FBQ0QsV0FqQkQ7QUFrQkEsaUJBQU90QixhQUFQO0FBQ0QsU0F0QkQ7QUF1QkQsT0FoQ0Q7QUFsRUY7QUFvR0Q7O0FBRUQsU0FBUzJCLGNBQVQsQ0FBd0I3QixJQUF4QixFQUE4QjtBQUM1QixVQUFRQSxJQUFSO0FBQ0EsU0FBS0wsWUFBWSxDQUFDQyxXQUFsQjtBQUNFLGFBQU8sWUFBVztBQUNoQixlQUFPLFVBQVNrQyxXQUFULEVBQXNCQyxPQUF0QixFQUErQkMsV0FBL0IsRUFBNEM7QUFDakQsY0FBTUMsUUFBUSxHQUFHSCxXQUFXLENBQUNyRCxNQUFaLENBQW1Cc0QsT0FBbkIsQ0FBakI7QUFDQUEsaUJBQU8sQ0FBQ2pTLE9BQVIsQ0FBZ0IsVUFBU29TLEdBQVQsRUFBYztBQUM1QkYsdUJBQVcsQ0FBQ3RaLElBQVosQ0FBaUJ1WixRQUFRLENBQUMvUixPQUFULENBQWlCZ1MsR0FBakIsQ0FBakI7QUFDRCxXQUZEO0FBR0EsaUJBQU9ELFFBQVA7QUFDRCxTQU5EO0FBT0QsT0FSRDs7QUFTRixTQUFLdEMsWUFBWSxDQUFDRSxTQUFsQjtBQUNBLFNBQUtGLFlBQVksQ0FBQ0csVUFBbEI7QUFDRSxhQUFPLFVBQVMvWCxNQUFULEVBQWlCNkosV0FBakIsRUFBOEJ4SyxPQUE5QixFQUF1QztBQUM1Q0EsZUFBTyxHQUFHTyxNQUFNLENBQUNDLE1BQVAsQ0FBYztBQUN0QnlOLHFCQUFXLEVBQUUscUJBQVM2TSxHQUFULEVBQWM7QUFDekIsbUJBQU9BLEdBQUcsQ0FBQ3JaLFFBQVg7QUFDRDtBQUhxQixTQUFkLEVBSVB6QixPQUpPLENBQVY7QUFNQSxlQUFPLFVBQVMwYSxXQUFULEVBQXNCQyxPQUF0QixFQUErQkMsV0FBL0IsRUFBNEM7QUFDakQsY0FBTUcsT0FBTyxHQUFHTCxXQUFXLENBQUNyRCxNQUFaLEVBQWhCO0FBQ0EsY0FBTTJELGVBQWUsR0FBR04sV0FBVyxDQUFDblUsR0FBWixDQUFnQnZHLE9BQU8sQ0FBQ2lPLFdBQXhCLENBQXhCO0FBQ0EwTSxpQkFBTyxDQUFDalMsT0FBUixDQUFnQixVQUFTdVMsTUFBVCxFQUFpQjtBQUMvQixnQkFBSWpWLEtBQUssR0FBRzlGLGtEQUFRLENBQUNzUyxtQkFBVCxDQUE2QndJLGVBQTdCLEVBQThDaGIsT0FBTyxDQUFDaU8sV0FBUixDQUFvQmdOLE1BQXBCLENBQTlDLEVBQTJFdGEsTUFBM0UsRUFBbUY2SixXQUFuRixDQUFaOztBQUNBLGdCQUFJeEUsS0FBSyxLQUFLLENBQUMsQ0FBZixFQUFrQjtBQUNoQkEsbUJBQUssR0FBRytVLE9BQU8sQ0FBQ2pWLE1BQWhCO0FBQ0QsYUFGRCxNQUVPO0FBQ0xFLG1CQUFLLEdBQUcrVSxPQUFPLENBQUNqUyxPQUFSLENBQWdCNFIsV0FBVyxDQUFDMVUsS0FBRCxDQUEzQixDQUFSO0FBQ0Q7O0FBQ0QrVSxtQkFBTyxDQUFDM0ssTUFBUixDQUFlcEssS0FBZixFQUFzQixDQUF0QixFQUF5QmlWLE1BQXpCO0FBQ0QsV0FSRDtBQVNBTixpQkFBTyxDQUFDalMsT0FBUixDQUFnQixVQUFTdVMsTUFBVCxFQUFpQjtBQUMvQkwsdUJBQVcsQ0FBQ3RaLElBQVosQ0FBaUJ5WixPQUFPLENBQUNqUyxPQUFSLENBQWdCbVMsTUFBaEIsQ0FBakI7QUFDRCxXQUZEO0FBR0EsaUJBQU9GLE9BQVA7QUFDRCxTQWhCRDtBQWlCRCxPQXhCRDtBQWJGO0FBdUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4SkQ7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNblEsTUFBTSxHQUFHO0FBQUVDLE9BQUssRUFBTEEsOENBQUtBO0FBQVAsQ0FBZixDLENBQXlCOztBQUV6QixJQUFNcVEsTUFBTSxHQUFHLEVBQWY7O0lBRU1DLEs7OztBQUNKLGlCQUFZalUsVUFBWixFQUF3QjRFLE9BQXhCLEVBQTZDO0FBQUEsUUFBWjlMLE9BQVksdUVBQUosRUFBSTs7QUFBQTs7QUFDM0NrYixVQUFNLENBQUN4UyxPQUFQLENBQWUsVUFBQzBTLEtBQUQsRUFBVztBQUN4QixVQUFJbFUsVUFBSixFQUFnQjtBQUNkQSxrQkFBVSxDQUFDd0IsT0FBWCxDQUFtQixVQUFDN0csU0FBRCxFQUFlO0FBQ2hDeVYsNEVBQVcsQ0FBQzhELEtBQUssQ0FBQ2xVLFVBQVAsRUFBbUJyRixTQUFuQixDQUFYO0FBQ0QsU0FGRDtBQUdEOztBQUVELFVBQUlpSyxPQUFKLEVBQWE7QUFDWEEsZUFBTyxDQUFDcEQsT0FBUixDQUFnQixVQUFDb0csTUFBRCxFQUFZO0FBQzFCd0ksNEVBQVcsQ0FBQzhELEtBQUssQ0FBQ3RQLE9BQVAsRUFBZ0JnRCxNQUFoQixDQUFYO0FBQ0QsU0FGRDtBQUdEO0FBQ0YsS0FaRDtBQWNBLFNBQUs1SCxVQUFMLEdBQWtCQSxVQUFVLElBQUksRUFBaEM7QUFDQSxTQUFLNEUsT0FBTCxHQUFlQSxPQUFPLElBQUksRUFBMUI7QUFDQW9QLFVBQU0sQ0FBQzVaLElBQVAsQ0FBWSxJQUFaO0FBQ0EsU0FBS3RCLE9BQUwsR0FBZTtBQUNiZ1csYUFBTyxFQUFHaFcsT0FBTyxDQUFDZ1csT0FBVCxJQUFxQjtBQURqQixLQUFmO0FBSUEsU0FBSzlVLFFBQUwsR0FBZ0IsSUFBSTBKLE1BQU0sQ0FBQ0MsS0FBWCxDQUFpQixJQUFqQixDQUFoQjs7QUFDQSxRQUFJN0ssT0FBTyxDQUFDa0IsUUFBWixFQUFzQjtBQUNwQixXQUFLQSxRQUFMLENBQWM2SSxHQUFkLENBQWtCL0osT0FBTyxDQUFDa0IsUUFBMUI7QUFDRDs7QUFDRCxTQUFLSyxJQUFMO0FBQ0Q7Ozs7MkJBRU07QUFBQTs7QUFDTCxXQUFLMkYsVUFBTCxDQUFnQndCLE9BQWhCLENBQXdCLFVBQUM3RyxTQUFELEVBQWU7QUFDckNBLGlCQUFTLENBQUNvSyxLQUFWLENBQWdCbEMsR0FBaEIsQ0FBb0IsWUFBTTtBQUN4QixpQkFBTyxLQUFJLENBQUNrQyxLQUFMLENBQVdwSyxTQUFYLENBQVA7QUFDRCxTQUZEO0FBR0QsT0FKRDtBQUtEOzs7aUNBRVlBLFMsRUFBVztBQUFBOztBQUN0QixXQUFLcUYsVUFBTCxDQUFnQjVGLElBQWhCLENBQXFCTyxTQUFyQjtBQUNBQSxlQUFTLENBQUNvSyxLQUFWLENBQWdCaUUsT0FBaEIsQ0FBd0IsWUFBTTtBQUM1QixlQUFPLE1BQUksQ0FBQ2pFLEtBQUwsQ0FBV3BLLFNBQVgsQ0FBUDtBQUNELE9BRkQ7QUFHRDs7OzhCQUVTaU4sTSxFQUFRO0FBQ2hCLFdBQUtoRCxPQUFMLENBQWF4SyxJQUFiLENBQWtCd04sTUFBbEI7QUFDRDs7OzBCQUVLak4sUyxFQUFXO0FBQ2YsVUFBTXdaLFdBQVcsR0FBRyxLQUFLdlAsT0FBTCxDQUFhcUosTUFBYixDQUFvQixVQUFDckcsTUFBRCxFQUFZO0FBQ2xELGVBQU9BLE1BQU0sQ0FBQzVILFVBQVAsQ0FBa0I0QixPQUFsQixDQUEwQmpILFNBQTFCLE1BQXlDLENBQUMsQ0FBakQ7QUFDRCxPQUZtQixFQUVqQnNULE1BRmlCLENBRVYsVUFBQ3JHLE1BQUQsRUFBWTtBQUNwQixlQUFPQSxNQUFNLENBQUN3TSxjQUFQLENBQXNCelosU0FBdEIsQ0FBUDtBQUNELE9BSm1CLEVBSWpCMFosSUFKaUIsQ0FJWixVQUFDQyxDQUFELEVBQUlDLENBQUosRUFBVTtBQUNoQixlQUFPRCxDQUFDLENBQUNFLFlBQUYsR0FBaUJsQyxTQUFqQixLQUErQmlDLENBQUMsQ0FBQ0MsWUFBRixHQUFpQmxDLFNBQWpCLEVBQXRDO0FBQ0QsT0FObUIsQ0FBcEI7O0FBUUEsVUFBSTZCLFdBQVcsQ0FBQ3ZWLE1BQWhCLEVBQXdCO0FBQ3RCdVYsbUJBQVcsQ0FBQyxDQUFELENBQVgsQ0FBZXBQLEtBQWYsQ0FBcUJwSyxTQUFyQjtBQUNELE9BRkQsTUFFTyxJQUFJQSxTQUFTLENBQUNpSyxPQUFWLENBQWtCaEcsTUFBdEIsRUFBOEI7QUFDbkNqRSxpQkFBUyxDQUFDUSxJQUFWLENBQWVSLFNBQVMsQ0FBQzRLLFlBQXpCLEVBQXVDLEtBQUt6TSxPQUFMLENBQWFnVyxPQUFwRCxFQUE2RCxJQUE3RCxFQUFtRSxJQUFuRTtBQUNEOztBQUNELFdBQUs5VSxRQUFMLENBQWNvTCxJQUFkO0FBQ0EsYUFBTyxJQUFQO0FBQ0Q7Ozs0QkFFTztBQUNOLFdBQUtSLE9BQUwsQ0FBYXBELE9BQWIsQ0FBcUIsVUFBQ29HLE1BQUQ7QUFBQSxlQUFZQSxNQUFNLENBQUNZLEtBQVAsRUFBWjtBQUFBLE9BQXJCO0FBQ0Q7Ozs4QkFFUztBQUNSLFdBQUt4SSxVQUFMLENBQWdCd0IsT0FBaEIsQ0FBd0IsVUFBQzdHLFNBQUQ7QUFBQSxlQUFlQSxTQUFTLENBQUN1QixPQUFWLEVBQWY7QUFBQSxPQUF4QjtBQUNBLFdBQUswSSxPQUFMLENBQWFwRCxPQUFiLENBQXFCLFVBQUNvRyxNQUFEO0FBQUEsZUFBWUEsTUFBTSxDQUFDMUwsT0FBUCxFQUFaO0FBQUEsT0FBckI7QUFDRDs7O3dCQUVlO0FBQUE7O0FBQ2QsYUFBTyxLQUFLMEksT0FBTCxDQUFhdkYsR0FBYixDQUFpQixVQUFDdUksTUFBRCxFQUFZO0FBQ2xDLGVBQU9BLE1BQU0sQ0FBQzZNLGVBQVAsQ0FBdUJwVixHQUF2QixDQUEyQixVQUFDMUUsU0FBRDtBQUFBLGlCQUFlLE1BQUksQ0FBQ3FGLFVBQUwsQ0FBZ0I0QixPQUFoQixDQUF3QmpILFNBQXhCLENBQWY7QUFBQSxTQUEzQixDQUFQO0FBQ0QsT0FGTSxDQUFQO0FBR0QsSztzQkFFYTJWLFMsRUFBVztBQUFBOztBQUN2QixVQUFNak0sT0FBTyxHQUFHLG9CQUFoQjs7QUFDQSxVQUFJaU0sU0FBUyxDQUFDMVIsTUFBVixLQUFxQixLQUFLZ0csT0FBTCxDQUFhaEcsTUFBdEMsRUFBOEM7QUFDNUMsYUFBS2dHLE9BQUwsQ0FBYXBELE9BQWIsQ0FBcUIsVUFBQ29HLE1BQUQ7QUFBQSxpQkFBWUEsTUFBTSxDQUFDWSxLQUFQLEVBQVo7QUFBQSxTQUFyQjtBQUVBOEgsaUJBQVMsQ0FBQzlPLE9BQVYsQ0FBa0IsVUFBQ2tULGFBQUQsRUFBZ0J6VSxDQUFoQixFQUFzQjtBQUN0Q3lVLHVCQUFhLENBQUNsVCxPQUFkLENBQXNCLFVBQUMxQyxLQUFELEVBQVc7QUFDL0Isa0JBQUksQ0FBQzhGLE9BQUwsQ0FBYTNFLENBQWIsRUFBZ0I0QyxHQUFoQixDQUFvQixNQUFJLENBQUM3QyxVQUFMLENBQWdCbEIsS0FBaEIsQ0FBcEI7QUFDRCxXQUZEO0FBR0QsU0FKRDtBQUtELE9BUkQsTUFRTztBQUNMLGNBQU11RixPQUFOO0FBQ0Q7QUFDRjs7Ozs7O0FBR0gsSUFBTUksWUFBWSxHQUFHLElBQUl3UCxLQUFKLEVBQXJCOztBQUVBLFNBQVNDLEtBQVQsQ0FBZVMsRUFBZixFQUFtQjtBQUNqQixNQUFNQyxZQUFZLEdBQUcsSUFBSVgsS0FBSixFQUFyQjs7QUFDQSxNQUFNWSxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQVNsYSxTQUFULEVBQW9CO0FBQzlDaWEsZ0JBQVksQ0FBQ2xRLFlBQWIsQ0FBMEIvSixTQUExQjtBQUNBLFdBQU8sSUFBUDtBQUNELEdBSEQ7O0FBSUEsTUFBTW1hLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBU2xOLE1BQVQsRUFBaUI7QUFDeENnTixnQkFBWSxDQUFDRyxTQUFiLENBQXVCbk4sTUFBdkI7QUFDQSxXQUFPLElBQVA7QUFDRCxHQUhEOztBQUtBaE4sc0RBQVMsQ0FBQ3VLLFFBQVYsQ0FBbUJ0QyxHQUFuQixDQUF1QmdTLG1CQUF2QjtBQUNBRyxnREFBTSxDQUFDN1AsUUFBUCxDQUFnQnRDLEdBQWhCLENBQW9CaVMsZ0JBQXBCO0FBQ0FILElBQUUsQ0FBQzNTLElBQUg7QUFDQXBILHNEQUFTLENBQUN1SyxRQUFWLENBQW1COEQsTUFBbkIsQ0FBMEI0TCxtQkFBMUI7QUFDQUcsZ0RBQU0sQ0FBQzdQLFFBQVAsQ0FBZ0I4RCxNQUFoQixDQUF1QjZMLGdCQUF2QjtBQUNBLFNBQU9GLFlBQVA7QUFDRDs7QUFFRCxTQUFTSyxZQUFULENBQXNCekUsYUFBdEIsRUFBcUNZLGlCQUFyQyxFQUF3RDhELGNBQXhELEVBQW9GO0FBQUEsTUFBWnBjLE9BQVksdUVBQUosRUFBSTtBQUNsRixNQUFNMlgsZ0JBQWdCLEdBQUczWCxPQUFPLENBQUM2QixTQUFSLElBQXFCLEVBQTlDO0FBQ0EsTUFBTXdhLGFBQWEsR0FBR3JjLE9BQU8sQ0FBQzhPLE1BQVIsSUFBa0IsRUFBeEM7QUFDQSxNQUFNd04sWUFBWSxHQUFHdGMsT0FBTyxDQUFDb2IsS0FBUixJQUFpQixFQUF0QztBQUNBekQsa0JBQWdCLENBQUM1VixNQUFqQixHQUEwQjRWLGdCQUFnQixDQUFDNVYsTUFBakIsSUFBMkIyVixhQUFyRDtBQUNBMkUsZUFBYSxDQUFDdGEsTUFBZCxHQUF1QnNhLGFBQWEsQ0FBQ3RhLE1BQWQsSUFBd0IyVixhQUEvQztBQUNBWSxtQkFBaUIsR0FBR3pPLEtBQUssQ0FBQytGLFNBQU4sQ0FBZ0J4RixLQUFoQixDQUFzQmxCLElBQXRCLENBQTJCb1AsaUJBQTNCLENBQXBCO0FBQ0E4RCxnQkFBYyxHQUFHdlMsS0FBSyxDQUFDK0YsU0FBTixDQUFnQnhGLEtBQWhCLENBQXNCbEIsSUFBdEIsQ0FBMkJrVCxjQUEzQixDQUFqQjtBQUVBLE1BQU1sVixVQUFVLEdBQUdvUixpQkFBaUIsQ0FBQy9SLEdBQWxCLENBQXNCLFVBQUN4RyxPQUFELEVBQWE7QUFDcEQsV0FBTyxJQUFJK0Isb0RBQUosQ0FBYy9CLE9BQWQsRUFBdUI0WCxnQkFBdkIsQ0FBUDtBQUNELEdBRmtCLENBQW5CO0FBSUEsTUFBTTdMLE9BQU8sR0FBR3NRLGNBQWMsQ0FBQzdWLEdBQWYsQ0FBbUIsVUFBQ3hHLE9BQUQsRUFBYTtBQUM5QyxXQUFPLElBQUltYyw4Q0FBSixDQUFXbmMsT0FBWCxFQUFvQm1ILFVBQXBCLEVBQWdDbVYsYUFBaEMsQ0FBUDtBQUNELEdBRmUsQ0FBaEI7QUFHQSxTQUFPLElBQUlsQixLQUFKLENBQVVqVSxVQUFWLEVBQXNCNEUsT0FBdEIsRUFBK0J3USxZQUEvQixDQUFQO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakpEO0FBQ0E7QUFDQTs7SUFFTUMsUTs7Ozs7QUFDSixvQkFBWXJWLFVBQVosRUFBb0M7QUFBQSxRQUFabEgsT0FBWSx1RUFBSixFQUFJOztBQUFBOztBQUNsQ0EsV0FBTyxDQUFDd0ssV0FBUixHQUFzQnhLLE9BQU8sQ0FBQ3dLLFdBQVIsSUFBdUJ0SyxrREFBUSxDQUFDbVMsY0FBdEQ7QUFEa0MsaUZBRTVCbkwsVUFGNEIsRUFFaEJsSCxPQUZnQjtBQUduQzs7OztrQ0FFYTZCLFMsRUFBVztBQUFBOztBQUN2QkEsZUFBUyxDQUFDOEksTUFBVixHQUFtQixLQUFLNEIsT0FBeEI7O0FBQ0EsVUFBSSxLQUFLdk0sT0FBTCxDQUFhbVcsVUFBakIsRUFBNkI7QUFDM0J0VSxpQkFBUyxDQUFDRyxNQUFWLENBQWlCK0gsR0FBakIsQ0FBcUIsWUFBTTtBQUN6QixjQUFJbEksU0FBUyxDQUFDc04sVUFBZCxFQUEwQjtBQUN4QixpQkFBSSxDQUFDcU4sMkJBQUwsQ0FBaUMzYSxTQUFqQzs7QUFDQSxtQkFBTyxJQUFQO0FBQ0Q7QUFDRixTQUxEO0FBT0FBLGlCQUFTLENBQUNvSyxLQUFWLENBQWdCbEMsR0FBaEIsQ0FBb0IsWUFBTTtBQUN4QmxJLG1CQUFTLENBQUNRLElBQVYsQ0FBZVIsU0FBUyxDQUFDMkssV0FBekIsRUFBc0MsS0FBSSxDQUFDeE0sT0FBTCxDQUFhZ1csT0FBbkQ7QUFDRCxTQUZEO0FBR0Q7QUFDRjs7O2dEQUUyQm5VLFMsRUFBVztBQUNyQyxVQUFNMkssV0FBVyxHQUFHM0ssU0FBUyxDQUFDMkssV0FBOUI7QUFDQSxVQUFNa0ssWUFBWSxHQUFHLEtBQUt4UCxVQUFMLENBQWdCNEIsT0FBaEIsQ0FBd0JqSCxTQUF4QixDQUFyQjtBQUNBLFVBQU1nVixhQUFhLEdBQUcsS0FBSzNQLFVBQUwsQ0FBZ0J3UCxZQUFZLEdBQUcsQ0FBL0IsQ0FBdEI7QUFDQSxVQUFNSSxhQUFhLEdBQUcsS0FBSzVQLFVBQUwsQ0FBZ0J3UCxZQUFZLEdBQUcsQ0FBL0IsQ0FBdEI7O0FBRUEsVUFBSTdVLFNBQVMsQ0FBQ3dNLGFBQVYsSUFBMkJ3SSxhQUEvQixFQUE4QztBQUM1QyxZQUFNM0UsUUFBUSxHQUFHLEtBQUtsUyxPQUFMLENBQWF3SyxXQUFiLENBQXlCM0ksU0FBUyxDQUFDSixRQUFuQyxFQUE2Q29WLGFBQWEsQ0FBQ3BWLFFBQTNELENBQWpCOztBQUNBLFlBQUl5USxRQUFRLEdBQUcsS0FBS2xTLE9BQUwsQ0FBYVcsTUFBNUIsRUFBb0M7QUFDbENrQixtQkFBUyxDQUFDMkssV0FBVixHQUF3QnFLLGFBQWEsQ0FBQ3JLLFdBQXRDO0FBQ0EsZUFBS29LLFVBQUwsQ0FBZ0JDLGFBQWhCLEVBQStCckssV0FBL0IsRUFBNEMsS0FBS3hNLE9BQUwsQ0FBYWlXLFdBQXpEO0FBRmtDLHFCQUdtQyxDQUFDLEtBQUsvTyxVQUFMLENBQWdCd1AsWUFBWSxHQUFHLENBQS9CLENBQUQsRUFBb0MsS0FBS3hQLFVBQUwsQ0FBZ0J3UCxZQUFoQixDQUFwQyxDQUhuQztBQUdqQyxlQUFLeFAsVUFBTCxDQUFnQndQLFlBQWhCLENBSGlDO0FBR0YsZUFBS3hQLFVBQUwsQ0FBZ0J3UCxZQUFZLEdBQUcsQ0FBL0IsQ0FIRTtBQUlsQyxlQUFLOEYsMkJBQUwsQ0FBaUMzYSxTQUFqQztBQUNEO0FBQ0Y7O0FBRUQsVUFBSUEsU0FBUyxDQUFDdU0sV0FBVixJQUF5QjBJLGFBQTdCLEVBQTRDO0FBQzFDLFlBQU01RSxTQUFRLEdBQUcsS0FBS2xTLE9BQUwsQ0FBYXdLLFdBQWIsQ0FBeUIzSSxTQUFTLENBQUNKLFFBQW5DLEVBQTZDcVYsYUFBYSxDQUFDclYsUUFBM0QsQ0FBakI7O0FBQ0EsWUFBSXlRLFNBQVEsR0FBRyxLQUFLbFMsT0FBTCxDQUFhVyxNQUE1QixFQUFvQztBQUNsQ2tCLG1CQUFTLENBQUMySyxXQUFWLEdBQXdCc0ssYUFBYSxDQUFDdEssV0FBdEM7QUFDQSxlQUFLb0ssVUFBTCxDQUFnQkUsYUFBaEIsRUFBK0J0SyxXQUEvQixFQUE0QyxLQUFLeE0sT0FBTCxDQUFhaVcsV0FBekQ7QUFGa0Msc0JBR21DLENBQUMsS0FBSy9PLFVBQUwsQ0FBZ0J3UCxZQUFZLEdBQUcsQ0FBL0IsQ0FBRCxFQUFvQyxLQUFLeFAsVUFBTCxDQUFnQndQLFlBQWhCLENBQXBDLENBSG5DO0FBR2pDLGVBQUt4UCxVQUFMLENBQWdCd1AsWUFBaEIsQ0FIaUM7QUFHRixlQUFLeFAsVUFBTCxDQUFnQndQLFlBQVksR0FBRyxDQUEvQixDQUhFO0FBSWxDLGVBQUs4RiwyQkFBTCxDQUFpQzNhLFNBQWpDO0FBQ0Q7QUFDRjtBQUNGOzs7O0VBL0NvQmtVLDBDOztBQWtEdkIsU0FBUzBHLGVBQVQsQ0FBeUIvRSxhQUF6QixFQUF3Q3ZSLFFBQXhDLEVBQThEO0FBQUEsTUFBWm5HLE9BQVksdUVBQUosRUFBSTtBQUM1RCxNQUFNMlgsZ0JBQWdCLEdBQUczWCxPQUFPLENBQUM2QixTQUFSLElBQXFCLEVBQTlDO0FBQ0EsTUFBTStWLFdBQVcsR0FBRzVYLE9BQU8sQ0FBQ3NXLElBQVIsSUFBZ0IsRUFBcEM7QUFDQXFCLGtCQUFnQixDQUFDNVYsTUFBakIsR0FBMEI0VixnQkFBZ0IsQ0FBQzVWLE1BQWpCLElBQTJCMlYsYUFBckQ7QUFDQXZSLFVBQVEsR0FBRzBELEtBQUssQ0FBQytGLFNBQU4sQ0FBZ0J4RixLQUFoQixDQUFzQmxCLElBQXRCLENBQTJCL0MsUUFBM0IsQ0FBWDtBQUVBLE1BQU1lLFVBQVUsR0FBR2YsUUFBUSxDQUFDSSxHQUFULENBQWEsVUFBQ3hHLE9BQUQsRUFBYTtBQUMzQyxXQUFPLElBQUkrQixvREFBSixDQUFjL0IsT0FBZCxFQUF1QjRYLGdCQUF2QixDQUFQO0FBQ0QsR0FGa0IsQ0FBbkI7QUFJQSxTQUFPLElBQUk0RSxRQUFKLENBQWFyVixVQUFiLEVBQXlCMFEsV0FBekIsQ0FBUDtBQUNEOzs7Ozs7Ozs7Ozs7OztBQ2pFRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTThFLE9BQU8sR0FBRyxFQUFoQjs7SUFFTUMsTTs7O0FBQ0osa0JBQVk3YyxJQUFaLEVBQWtCcUcsUUFBbEIsRUFBd0M7QUFBQSxRQUFabkcsT0FBWSx1RUFBSixFQUFJOztBQUFBOztBQUN0QyxRQUFNQyxhQUFhLEdBQUdDLGtEQUFRLENBQUNDLDBCQUFULENBQW9DTCxJQUFwQyxFQUEwQ0EsSUFBMUMsQ0FBdEI7QUFDQSxTQUFLRSxPQUFMLEdBQWVPLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjO0FBQzNCZ0IsV0FBSyxFQUFFLENBRG9CO0FBRTNCb2IsWUFBTSxFQUFFLElBQUk5YixJQUFJLENBQUNDLEVBQVQsR0FBY29GLFFBQVEsQ0FBQ0wsTUFGSjtBQUczQnJGLFlBQU0sRUFBRVIsYUFBYSxDQUFDUyxTQUFkLEVBSG1CO0FBSTNCbWMsaUJBQVcsRUFBRSxFQUpjO0FBSzNCQyxlQUFTLEVBQUU3YyxhQUFhLENBQUNXLFVBQWQsS0FBNkIsQ0FMYjtBQU0zQm1jLGVBQVMsRUFBRSxDQU5nQjtBQU8zQkMsaUJBQVcsRUFBRSxTQVBjO0FBUTNCdFQsZUFBUyxFQUFFO0FBUmdCLEtBQWQsRUFTWjFKLE9BVFksQ0FBZjtBQVdBMGMsV0FBTyxDQUFDcGIsSUFBUixDQUFhLElBQWI7QUFDQSxTQUFLeEIsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0csYUFBTCxHQUFxQkEsYUFBckI7QUFDQSxTQUFLc0IsSUFBTCxDQUFVNEUsUUFBVjtBQUNEOzs7O3lCQUVJQSxRLEVBQVU7QUFBQTs7QUFDYixXQUFLVyxNQUFMLEdBQWNDLG1FQUFZLENBQUMsS0FBS2pILElBQU4sRUFBWSxLQUFLRyxhQUFqQixDQUExQjtBQUNBLFdBQUsrRyxPQUFMLEdBQWUsS0FBS0YsTUFBTCxDQUFZRyxVQUFaLENBQXVCLElBQXZCLENBQWY7QUFFQSxXQUFLQyxVQUFMLEdBQWtCZixRQUFRLENBQUNJLEdBQVQsQ0FBYSxVQUFDeEcsT0FBRCxFQUFVb0gsQ0FBVixFQUFnQjtBQUM3QyxZQUFNM0YsS0FBSyxHQUFHLEtBQUksQ0FBQ3hCLE9BQUwsQ0FBYXdCLEtBQWIsR0FBcUIyRixDQUFDLEdBQUcsS0FBSSxDQUFDbkgsT0FBTCxDQUFhNGMsTUFBcEQ7QUFDQSxZQUFNeGMsUUFBUSxHQUFHRixrREFBUSxDQUFDRyxnQkFBVCxDQUEwQk4sT0FBMUIsRUFBbUNPLElBQW5DLENBQXdDLEdBQXhDLENBQWpCO0FBQ0EsWUFBTXNELEtBQUssR0FBRzFELGtEQUFRLENBQUN3Qix3QkFBVCxDQUFrQ0YsS0FBbEMsRUFBeUMsS0FBSSxDQUFDeEIsT0FBTCxDQUFhNmMsV0FBdEQsRUFBbUUsS0FBSSxDQUFDN2MsT0FBTCxDQUFhUyxNQUFoRixFQUF3RlksR0FBeEYsQ0FBNEZqQixRQUE1RixDQUFkO0FBQ0EsWUFBTXlELEdBQUcsR0FBRzNELGtEQUFRLENBQUN3Qix3QkFBVCxDQUFrQ0YsS0FBbEMsRUFBeUMsS0FBSSxDQUFDeEIsT0FBTCxDQUFhOGMsU0FBdEQsRUFBaUUsS0FBSSxDQUFDOWMsT0FBTCxDQUFhUyxNQUE5RSxFQUFzRlksR0FBdEYsQ0FBMEZqQixRQUExRixDQUFaO0FBQ0EsWUFBTXVCLEtBQUssR0FBR2dDLDBEQUFXLENBQUNDLEtBQUQsRUFBUUMsR0FBUixDQUF6QjtBQUVBLGVBQU8sSUFBSS9CLG9EQUFKLENBQWMvQixPQUFkLEVBQXVCO0FBQzVCZ0MsZ0JBQU0sRUFBRSxLQUFJLENBQUNqQyxJQURlO0FBRTVCNkIsZUFBSyxFQUFFQSxLQUZxQjtBQUc1QkYsa0JBQVEsRUFBRW1DLEtBSGtCO0FBSTVCNUIsZ0JBQU0sRUFBRSxrQkFBTTtBQUNaLGlCQUFJLENBQUNxRixJQUFMOztBQUNBLG1CQUFPLElBQVA7QUFDRDtBQVAyQixTQUF2QixDQUFQO0FBU0QsT0FoQmlCLENBQWxCO0FBa0JBLFdBQUtDLE1BQUwsR0FBYyxJQUFkO0FBQ0EsV0FBS0QsSUFBTDtBQUNEOzs7MkJBRU07QUFDTCxVQUFJLENBQUMsS0FBS0MsTUFBVixFQUFrQjtBQUNoQjtBQUNEOztBQUNELFdBQUtOLE9BQUwsQ0FBYXlCLFNBQWIsQ0FBdUIsQ0FBdkIsRUFBMEIsQ0FBMUIsRUFBNkIsS0FBS3hJLGFBQUwsQ0FBbUJ3QyxJQUFuQixDQUF3QkssQ0FBckQsRUFBd0QsS0FBSzdDLGFBQUwsQ0FBbUJ3QyxJQUFuQixDQUF3Qk0sQ0FBaEY7QUFDQSxXQUFLaUUsT0FBTCxDQUFhcUMsU0FBYjtBQUVBLFVBQUk3RyxLQUFLLEdBQUcsS0FBSzBFLFVBQUwsQ0FBZ0IsQ0FBaEIsRUFBbUJ4RyxTQUFuQixFQUFaO0FBQ0EsV0FBS3NHLE9BQUwsQ0FBYXNDLE1BQWIsQ0FBb0I5RyxLQUFLLENBQUNNLENBQTFCLEVBQTZCTixLQUFLLENBQUNPLENBQW5DOztBQUVBLFdBQUssSUFBSW9FLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS0QsVUFBTCxDQUFnQnBCLE1BQXBDLEVBQTRDcUIsQ0FBQyxFQUE3QyxFQUFpRDtBQUMvQzNFLGFBQUssR0FBRyxLQUFLMEUsVUFBTCxDQUFnQkMsQ0FBaEIsRUFBbUJ6RyxTQUFuQixFQUFSO0FBQ0EsYUFBS3NHLE9BQUwsQ0FBYXdDLE1BQWIsQ0FBb0JoSCxLQUFLLENBQUNNLENBQTFCLEVBQTZCTixLQUFLLENBQUNPLENBQW5DO0FBQ0Q7O0FBQ0QsV0FBS2lFLE9BQUwsQ0FBYXlDLFNBQWI7QUFDQSxXQUFLekMsT0FBTCxDQUFhK1YsU0FBYixHQUF5QixLQUFLL2MsT0FBTCxDQUFhK2MsU0FBdEM7QUFDQSxXQUFLL1YsT0FBTCxDQUFhZ1csV0FBYixHQUEyQixLQUFLaGQsT0FBTCxDQUFhZ2QsV0FBeEM7QUFDQSxXQUFLaFcsT0FBTCxDQUFhaVcsTUFBYjtBQUNBLFdBQUtqVyxPQUFMLENBQWEwQyxTQUFiLEdBQXlCLEtBQUsxSixPQUFMLENBQWEwSixTQUF0QztBQUNBLFdBQUsxQyxPQUFMLENBQWEyQyxJQUFiO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNaUIsTUFBTSxHQUFHO0FBQUUyTixjQUFZLEVBQVpBLHlEQUFGO0FBQWlCSSxpQkFBZSxFQUFmQSw0REFBakI7QUFBa0M4QixnQkFBYyxFQUFkQSwyREFBbEM7QUFBa0RTLFFBQU0sRUFBTkEsNkNBQWxEO0FBQTBEclEsT0FBSyxFQUFMQSw4Q0FBS0E7QUFBL0QsQ0FBZixDLENBQWdGOztBQUVoRixJQUFNaUIsT0FBTyxHQUFHLEVBQWhCO0FBQUEsSUFDRUosaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFTb0QsTUFBVCxFQUFpQjtBQUNuQ25ELHFEQUFZLENBQUNzUSxTQUFiLENBQXVCbk4sTUFBdkI7QUFDRCxDQUhIOztJQUtNb04sTTs7O0FBQ0osa0JBQVluYyxPQUFaLEVBQXFCbUgsVUFBckIsRUFBK0M7QUFBQSxRQUFkbEgsT0FBYyx1RUFBSixFQUFJOztBQUFBOztBQUM3QyxRQUFNOE8sTUFBTSxHQUFHLElBQWY7QUFDQSxRQUFNL00sTUFBTSxHQUFHL0IsT0FBTyxDQUFDK0IsTUFBUixJQUFrQjhKLHVFQUFnQixDQUFDOUwsT0FBRCxDQUFqRDtBQUVBLFNBQUtDLE9BQUwsR0FBZU8sTUFBTSxDQUFDQyxNQUFQLENBQWM7QUFDM0J3VixhQUFPLEVBQUUsR0FEa0I7QUFFM0JDLGlCQUFXLEVBQUUsR0FGYztBQUczQmxVLFlBQU0sRUFBRUEsTUFIbUI7QUFJM0JtYixhQUFPLEVBQUV0UyxNQUFNLENBQUM2UCxjQUFQLENBQXNCN1AsTUFBTSxDQUFDMk4sWUFBUCxDQUFvQkUsU0FBMUMsRUFBcUQsRUFBckQsRUFBeUR2WSxrREFBUSxDQUFDb1MsK0JBQVQsQ0FBeUM7QUFBRXhQLFNBQUMsRUFBRSxDQUFMO0FBQVFDLFNBQUMsRUFBRTtBQUFYLE9BQXpDLENBQXpELENBSmtCO0FBSzNCb2EsaUJBQVcsRUFBRXZTLE1BQU0sQ0FBQytOLGVBQVAsQ0FBdUIvTixNQUFNLENBQUMyTixZQUFQLENBQW9CRSxTQUEzQyxFQUFzRCxLQUFLaUQsWUFBTCxDQUFrQjlPLElBQWxCLENBQXVCLElBQXZCLENBQXRELEVBQW9GO0FBQUV3TSxpQkFBUyxFQUFFO0FBQWIsT0FBcEY7QUFMYyxLQUFkLEVBTVpwWixPQU5ZLENBQWY7QUFRQThMLFdBQU8sQ0FBQ3hLLElBQVIsQ0FBYSxJQUFiO0FBQ0EsU0FBS3ZCLE9BQUwsR0FBZUEsT0FBZjtBQUNBbUgsY0FBVSxDQUFDd0IsT0FBWCxDQUFtQixVQUFDN0csU0FBRDtBQUFBLGFBQWVBLFNBQVMsQ0FBQ2lLLE9BQVYsQ0FBa0J4SyxJQUFsQixDQUF1QndOLE1BQXZCLENBQWY7QUFBQSxLQUFuQjtBQUNBLFNBQUs1SCxVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLFNBQUtrVyxLQUFMLEdBQWEsSUFBSXhTLE1BQU0sQ0FBQ0MsS0FBWCxDQUFpQixJQUFqQixDQUFiO0FBQ0EsU0FBS3dTLFNBQUwsR0FBaUIsSUFBSXpTLE1BQU0sQ0FBQ0MsS0FBWCxDQUFpQixJQUFqQixDQUFqQjtBQUNBLFNBQUt5UyxRQUFMLEdBQWdCLElBQUkxUyxNQUFNLENBQUNDLEtBQVgsQ0FBaUIsSUFBakIsQ0FBaEI7O0FBRUEsUUFBSTdLLE9BQU8sQ0FBQ3NkLFFBQVosRUFBc0I7QUFDcEIsV0FBS0EsUUFBTCxDQUFjdlQsR0FBZCxDQUFrQi9KLE9BQU8sQ0FBQ3NkLFFBQTFCO0FBQ0Q7O0FBRUQsUUFBSXRkLE9BQU8sQ0FBQ29kLEtBQVosRUFBbUI7QUFDakIsV0FBS0EsS0FBTCxDQUFXclQsR0FBWCxDQUFlL0osT0FBTyxDQUFDb2QsS0FBdkI7QUFDRDs7QUFFRCxRQUFJcGQsT0FBTyxDQUFDcWQsU0FBWixFQUF1QjtBQUNyQixXQUFLQSxTQUFMLENBQWV0VCxHQUFmLENBQW1CL0osT0FBTyxDQUFDcWQsU0FBM0I7QUFDRDs7QUFFRG5CLFVBQU0sQ0FBQzdQLFFBQVAsQ0FBZ0JDLElBQWhCLENBQXFCLElBQXJCO0FBRUEsU0FBSy9LLElBQUw7QUFDRDs7OzsyQkFFTTtBQUFBOztBQUNMLFVBQUlnYyxVQUFKLEVBQWdCQyxZQUFoQjtBQUVBLFdBQUs3QixlQUFMLEdBQXVCLEtBQUt6VSxVQUFMLENBQWdCaU8sTUFBaEIsQ0FBdUIsVUFBQ3RULFNBQUQsRUFBZTtBQUMzRCxZQUFJOUIsT0FBTyxHQUFHOEIsU0FBUyxDQUFDOUIsT0FBVixDQUFrQnFVLFVBQWhDOztBQUNBLGVBQU9yVSxPQUFQLEVBQWdCO0FBQ2QsY0FBSUEsT0FBTyxLQUFLLEtBQUksQ0FBQ0EsT0FBckIsRUFBOEI7QUFDNUIsbUJBQU8sSUFBUDtBQUNEOztBQUNEQSxpQkFBTyxHQUFHQSxPQUFPLENBQUNxVSxVQUFsQjtBQUNEOztBQUNELGVBQU8sS0FBUDtBQUNELE9BVHNCLENBQXZCOztBQVdBLFVBQUksS0FBS3VILGVBQUwsQ0FBcUI3VixNQUF6QixFQUFpQztBQUMvQjBYLG9CQUFZLEdBQUdsWCwrREFBSyxDQUFDLEtBQUtxVixlQUFMLENBQXFCN1YsTUFBdEIsQ0FBcEI7QUFDQXlYLGtCQUFVLEdBQUcsS0FBS3ZkLE9BQUwsQ0FBYW1kLFdBQWIsQ0FBeUIsS0FBS3hCLGVBQUwsQ0FBcUJwVixHQUFyQixDQUF5QixVQUFDMUUsU0FBRCxFQUFlO0FBQzVFLGlCQUFPQSxTQUFTLENBQUM2WixZQUFWLEVBQVA7QUFDRCxTQUZxQyxDQUF6QixFQUVUOEIsWUFGUyxDQUFiO0FBR0EsYUFBS3hQLFdBQUwsQ0FBaUJ1UCxVQUFqQixFQUE2QkMsWUFBN0I7QUFDQSxhQUFLN0IsZUFBTCxDQUFxQmpULE9BQXJCLENBQTZCLFVBQUM3RyxTQUFEO0FBQUEsaUJBQWUsS0FBSSxDQUFDdWIsS0FBTCxDQUFXOVEsSUFBWCxDQUFnQnpLLFNBQWhCLENBQWY7QUFBQSxTQUE3QjtBQUNEO0FBQ0Y7OzttQ0FFYztBQUNiLGFBQU8zQixrREFBUSxDQUFDQywwQkFBVCxDQUNMLEtBQUtKLE9BREEsRUFFTCxLQUFLQyxPQUFMLENBQWErQixNQUZSLEVBR0wsS0FBSy9CLE9BQUwsQ0FBYWdNLGdCQUhSLEVBSUwsSUFKSyxDQUFQO0FBTUQ7OzttQ0FFY25LLFMsRUFBVztBQUN4QixVQUFJLEtBQUs3QixPQUFMLENBQWFzYixjQUFqQixFQUFpQztBQUMvQixlQUFPLEtBQUt0YixPQUFMLENBQWFzYixjQUFiLENBQTRCLElBQTVCLEVBQWtDelosU0FBbEMsQ0FBUDtBQUNELE9BRkQsTUFFTztBQUNMLFlBQU00YixlQUFlLEdBQUcsS0FBSy9CLFlBQUwsRUFBeEI7QUFDQSxZQUFNZ0MsZUFBZSxHQUFHN2IsU0FBUyxDQUFDNlosWUFBVixHQUF5QmxDLFNBQXpCLEVBQXhCO0FBRUEsZUFBT2tFLGVBQWUsR0FBR0QsZUFBZSxDQUFDakUsU0FBaEIsRUFBbEIsSUFDSWlFLGVBQWUsQ0FBQ3hNLFlBQWhCLENBQTZCcFAsU0FBUyxDQUFDbkIsU0FBVixFQUE3QixDQURYO0FBRUQ7QUFDRjs7O2tDQUVhO0FBQ1osYUFBTyxLQUFLZ2IsWUFBTCxHQUFvQmphLFFBQTNCO0FBQ0Q7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS2lhLFlBQUwsR0FBb0JqWixJQUEzQjtBQUNEOzs7OEJBRVM7QUFBQTs7QUFDUm1JLFlBQU0sQ0FBQ3NRLE1BQVAsQ0FBY3hTLE9BQWQsQ0FBc0IsVUFBQzBTLEtBQUQ7QUFBQSxlQUFXOUQsa0VBQVcsQ0FBQzhELEtBQUssQ0FBQ3RQLE9BQVAsRUFBZ0IsTUFBaEIsQ0FBdEI7QUFBQSxPQUF0QjtBQUNEOzs7OEJBRVM7QUFDUixVQUFNeVIsVUFBVSxHQUFHLEtBQUt2ZCxPQUFMLENBQWFtZCxXQUFiLENBQXlCLEtBQUt4QixlQUFMLENBQXFCcFYsR0FBckIsQ0FBeUIsVUFBQzFFLFNBQUQsRUFBZTtBQUNsRixlQUFPQSxTQUFTLENBQUM2WixZQUFWLEVBQVA7QUFDRCxPQUYyQyxDQUF6QixFQUVmLEVBRmUsQ0FBbkI7QUFHQSxXQUFLMU4sV0FBTCxDQUFpQnVQLFVBQWpCLEVBQTZCLEVBQTdCLEVBQWlDLENBQWpDO0FBQ0Q7OzswQkFFSzFiLFMsRUFBVztBQUNmLFVBQU04YixrQkFBa0IsR0FBRyxFQUEzQjtBQUNBLFVBQU0xTSxZQUFZLEdBQUcsS0FBS3lLLFlBQUwsR0FBb0J6SyxZQUFwQixDQUFpQ3BQLFNBQVMsQ0FBQ29NLFdBQVYsRUFBakMsQ0FBckI7O0FBRUEsVUFBSSxDQUFDZ0QsWUFBTCxFQUFtQjtBQUNqQixZQUFJLEtBQUt5SyxZQUFMLEdBQW9CekssWUFBcEIsQ0FBaUNwUCxTQUFTLENBQUNuQixTQUFWLEVBQWpDLENBQUosRUFBNkQ7QUFDM0RtQixtQkFBUyxDQUFDSixRQUFWLEdBQXFCSSxTQUFTLENBQUNuQixTQUFWLEdBQXNCaUMsS0FBdEIsRUFBckI7QUFDRCxTQUZELE1BRU87QUFDTCxpQkFBTyxLQUFQO0FBQ0Q7QUFDRjs7QUFFRCxXQUFLMGEsU0FBTCxDQUFlL1EsSUFBZixDQUFvQnpLLFNBQXBCO0FBRUEsV0FBSzhaLGVBQUwsR0FBdUIsS0FBSzNiLE9BQUwsQ0FBYWtkLE9BQWIsQ0FBcUIsS0FBS3ZCLGVBQTFCLEVBQTJDLENBQUM5WixTQUFELENBQTNDLEVBQXdEOGIsa0JBQXhELENBQXZCO0FBQ0EsVUFBTUosVUFBVSxHQUFHLEtBQUt2ZCxPQUFMLENBQWFtZCxXQUFiLENBQXlCLEtBQUt4QixlQUFMLENBQXFCcFYsR0FBckIsQ0FBeUIsVUFBQzFFLFNBQUQsRUFBZTtBQUNsRixlQUFPQSxTQUFTLENBQUM2WixZQUFWLEVBQVA7QUFDRCxPQUYyQyxDQUF6QixFQUVmaUMsa0JBRmUsRUFFSzliLFNBRkwsQ0FBbkI7QUFJQSxXQUFLbU0sV0FBTCxDQUFpQnVQLFVBQWpCLEVBQTZCSSxrQkFBN0I7O0FBQ0EsVUFBSSxLQUFLaEMsZUFBTCxDQUFxQjdTLE9BQXJCLENBQTZCakgsU0FBN0IsTUFBNEMsQ0FBQyxDQUFqRCxFQUFvRDtBQUNsRCxhQUFLK2IsZUFBTCxDQUFxQi9iLFNBQXJCO0FBQ0Q7O0FBQ0QsYUFBTyxJQUFQO0FBQ0Q7OztnQ0FFVzBiLFUsRUFBWUMsWSxFQUFjcmMsSSxFQUFNO0FBQUE7O0FBQzFDLFdBQUt3YSxlQUFMLENBQXFCdlIsS0FBckIsQ0FBMkIsQ0FBM0IsRUFBOEIxQixPQUE5QixDQUFzQyxVQUFDN0csU0FBRCxFQUFZc0YsQ0FBWixFQUFrQjtBQUN0RCxZQUFNMkosSUFBSSxHQUFHeU0sVUFBVSxDQUFDcFcsQ0FBRCxDQUF2QjtBQUFBLFlBQ0U2TyxPQUFPLEdBQUc3VSxJQUFJLElBQUlBLElBQUksS0FBSyxDQUFqQixHQUFxQkEsSUFBckIsR0FBNEJxYyxZQUFZLENBQUMxVSxPQUFiLENBQXFCM0IsQ0FBckIsTUFBNEIsQ0FBQyxDQUE3QixHQUFpQyxNQUFJLENBQUNuSCxPQUFMLENBQWFnVyxPQUE5QyxHQUF3RCxNQUFJLENBQUNoVyxPQUFMLENBQWFpVyxXQUQ3Rzs7QUFHQSxZQUFJbkYsSUFBSSxDQUFDc0ksU0FBVCxFQUFvQjtBQUNsQnZYLG1CQUFTLENBQUNRLElBQVYsQ0FBZVIsU0FBUyxDQUFDNEssWUFBekIsRUFBdUN1SixPQUF2QyxFQUFnRCxJQUFoRCxFQUFzRCxJQUF0RDtBQUNBc0IsNEVBQVcsQ0FBQyxNQUFJLENBQUNxRSxlQUFOLEVBQXVCOVosU0FBdkIsQ0FBWDs7QUFFQSxnQkFBSSxDQUFDeWIsUUFBTCxDQUFjaFIsSUFBZCxDQUFtQnpLLFNBQW5CO0FBQ0QsU0FMRCxNQUtPO0FBQ0xBLG1CQUFTLENBQUNRLElBQVYsQ0FBZXlPLElBQUksQ0FBQ3JQLFFBQXBCLEVBQThCdVUsT0FBOUIsRUFBdUMsSUFBdkMsRUFBNkMsSUFBN0M7QUFDRDtBQUNGLE9BWkQ7QUFhRDs7O3dCQUVHblUsUyxFQUFXVixJLEVBQU07QUFDbkIsVUFBTXdjLGtCQUFrQixHQUFHLEtBQUtoQyxlQUFMLENBQXFCN1YsTUFBaEQ7QUFFQSxXQUFLdVgsU0FBTCxDQUFlL1EsSUFBZixDQUFvQnpLLFNBQXBCO0FBRUEsV0FBS2djLGtCQUFMLENBQXdCaGMsU0FBeEI7QUFDQSxVQUFNMGIsVUFBVSxHQUFHLEtBQUt2ZCxPQUFMLENBQWFtZCxXQUFiLENBQXlCLEtBQUt4QixlQUFMLENBQXFCcFYsR0FBckIsQ0FBeUIsVUFBQzFFLFNBQUQsRUFBZTtBQUNsRixlQUFPQSxTQUFTLENBQUM2WixZQUFWLEVBQVA7QUFDRCxPQUYyQyxDQUF6QixFQUVmaUMsa0JBRmUsRUFFSzliLFNBRkwsQ0FBbkI7QUFJQSxXQUFLbU0sV0FBTCxDQUFpQnVQLFVBQWpCLEVBQTZCLENBQUNJLGtCQUFELENBQTdCLEVBQW1EeGMsSUFBSSxJQUFJLENBQTNEOztBQUNBLFVBQUksS0FBS3dhLGVBQUwsQ0FBcUI3UyxPQUFyQixDQUE2QmpILFNBQTdCLE1BQTRDLENBQUMsQ0FBakQsRUFBb0Q7QUFDbEQsYUFBSytiLGVBQUwsQ0FBcUIvYixTQUFyQjtBQUNEO0FBQ0Y7Ozt1Q0FFa0JBLFMsRUFBVztBQUM1QixVQUFJLEtBQUs4WixlQUFMLENBQXFCN1MsT0FBckIsQ0FBNkJqSCxTQUE3QixNQUEwQyxDQUFDLENBQS9DLEVBQWtEO0FBQ2hELGFBQUs4WixlQUFMLENBQXFCcmEsSUFBckIsQ0FBMEJPLFNBQTFCO0FBQ0Q7QUFDRjs7O29DQUVlQSxTLEVBQVc7QUFBQTs7QUFDekJBLGVBQVMsQ0FBQ0csTUFBVixDQUFpQitILEdBQWpCLENBQXFCLEtBQUsrVCxhQUFMLEdBQXFCLFlBQU07QUFDOUMsY0FBSSxDQUFDM04sTUFBTCxDQUFZdE8sU0FBWjtBQUNELE9BRkQ7QUFJQSxXQUFLdWIsS0FBTCxDQUFXOVEsSUFBWCxDQUFnQnpLLFNBQWhCO0FBQ0Q7OzsyQkFFTUEsUyxFQUFXO0FBQ2hCQSxlQUFTLENBQUNHLE1BQVYsQ0FBaUJtTyxNQUFqQixDQUF3QixLQUFLMk4sYUFBN0I7QUFFQSxVQUFNOVgsS0FBSyxHQUFHLEtBQUsyVixlQUFMLENBQXFCN1MsT0FBckIsQ0FBNkJqSCxTQUE3QixDQUFkOztBQUNBLFVBQUltRSxLQUFLLEtBQUssQ0FBQyxDQUFmLEVBQWtCO0FBQ2hCO0FBQ0Q7O0FBRUQsV0FBSzJWLGVBQUwsQ0FBcUJ2TCxNQUFyQixDQUE0QnBLLEtBQTVCLEVBQW1DLENBQW5DO0FBRUEsVUFBTXVYLFVBQVUsR0FBRyxLQUFLdmQsT0FBTCxDQUFhbWQsV0FBYixDQUF5QixLQUFLeEIsZUFBTCxDQUFxQnBWLEdBQXJCLENBQXlCLFVBQUMxRSxTQUFELEVBQWU7QUFDbEYsZUFBT0EsU0FBUyxDQUFDNlosWUFBVixFQUFQO0FBQ0QsT0FGMkMsQ0FBekIsRUFFZixFQUZlLENBQW5CO0FBSUEsV0FBSzFOLFdBQUwsQ0FBaUJ1UCxVQUFqQixFQUE2QixFQUE3QjtBQUNBLFdBQUtELFFBQUwsQ0FBY2hSLElBQWQsQ0FBbUJ6SyxTQUFuQjtBQUNEOzs7NEJBRU87QUFBQTs7QUFDTixXQUFLOFosZUFBTCxDQUFxQmpULE9BQXJCLENBQTZCLFVBQUM3RyxTQUFELEVBQWU7QUFDMUNBLGlCQUFTLENBQUNRLElBQVYsQ0FBZVIsU0FBUyxDQUFDNEssWUFBekIsRUFBdUMsQ0FBdkMsRUFBMEMsSUFBMUMsRUFBZ0QsSUFBaEQ7O0FBQ0EsY0FBSSxDQUFDNlEsUUFBTCxDQUFjaFIsSUFBZCxDQUFtQnpLLFNBQW5CO0FBQ0QsT0FIRDtBQUlBLFdBQUs4WixlQUFMLEdBQXVCLEVBQXZCO0FBQ0Q7OzswQ0FFcUI7QUFDcEIsV0FBS0EsZUFBTCxDQUFxQnZSLEtBQXJCO0FBQ0Q7Ozs7OztBQUdIOFIsTUFBTSxDQUFDN1AsUUFBUCxHQUFrQixJQUFJekIsTUFBTSxDQUFDQyxLQUFYLENBQWlCcVIsTUFBakIsRUFBeUI7QUFBRWhRLFdBQVMsRUFBRSxJQUFiO0FBQW1CQyxjQUFZLEVBQUU7QUFBakMsQ0FBekIsQ0FBbEI7QUFDQStQLE1BQU0sQ0FBQzdQLFFBQVAsQ0FBZ0J0QyxHQUFoQixDQUFvQjJCLGlCQUFwQjs7Ozs7Ozs7Ozs7OztBQzdOQTtBQUFBO0FBQUE7QUFBQTtBQUFPLFNBQVNxUyxRQUFULENBQWtCaGUsT0FBbEIsRUFBMkJpZSxDQUEzQixFQUE4QjtBQUNuQyxNQUFNQyxFQUFFLEdBQUcsSUFBSUMsTUFBSixDQUFXLFlBQVlGLENBQVosR0FBZ0IsU0FBM0IsRUFBc0MsR0FBdEMsQ0FBWDtBQUNBLFNBQVFDLEVBQUUsQ0FBQ3ZRLElBQUgsQ0FBUTNOLE9BQU8sQ0FBQ29lLFNBQWhCLENBQVI7QUFDRDtBQUVNLFNBQVMvTyxRQUFULENBQWtCclAsT0FBbEIsRUFBMkJpZSxDQUEzQixFQUE4QjtBQUNuQyxNQUFJLENBQUNELFFBQVEsQ0FBQ2hlLE9BQUQsRUFBVWllLENBQVYsQ0FBYixFQUEyQjtBQUN6QmplLFdBQU8sQ0FBQ29lLFNBQVIsR0FBb0IsQ0FBQ3BlLE9BQU8sQ0FBQ29lLFNBQVIsR0FBb0IsR0FBcEIsR0FBMEJILENBQTNCLEVBQThCclEsT0FBOUIsQ0FBc0MsTUFBdEMsRUFBOEMsR0FBOUMsRUFBbURBLE9BQW5ELENBQTJELFVBQTNELEVBQXVFLEVBQXZFLENBQXBCO0FBQ0Q7QUFDRjtBQUVNLFNBQVM2QixXQUFULENBQXFCelAsT0FBckIsRUFBOEJpZSxDQUE5QixFQUFpQztBQUN0QyxNQUFNQyxFQUFFLEdBQUcsSUFBSUMsTUFBSixDQUFXLFlBQVlGLENBQVosR0FBZ0IsU0FBM0IsRUFBc0MsR0FBdEMsQ0FBWDtBQUNBamUsU0FBTyxDQUFDb2UsU0FBUixHQUFvQnBlLE9BQU8sQ0FBQ29lLFNBQVIsQ0FBa0J4USxPQUFsQixDQUEwQnNRLEVBQTFCLEVBQThCLElBQTlCLEVBQW9DdFEsT0FBcEMsQ0FBNEMsTUFBNUMsRUFBb0QsR0FBcEQsRUFBeURBLE9BQXpELENBQWlFLFVBQWpFLEVBQTZFLEVBQTdFLENBQXBCO0FBQ0QsQzs7Ozs7Ozs7Ozs7O0FDZEQ7QUFBQTtBQUFBLFNBQVN5USxRQUFULENBQWtCcmUsT0FBbEIsRUFBMkJxTixLQUEzQixFQUFrQztBQUNoQ0EsT0FBSyxHQUFHQSxLQUFLLElBQUksRUFBakI7QUFDQSxNQUFJaVIsT0FBTyxHQUFHLEVBQWQ7O0FBQ0EsT0FBSyxJQUFNQyxHQUFYLElBQWtCbFIsS0FBbEIsRUFBeUI7QUFDdkIsUUFBSUEsS0FBSyxDQUFDbVIsY0FBTixDQUFxQkQsR0FBckIsQ0FBSixFQUErQjtBQUM3QkQsYUFBTyxJQUFJQyxHQUFHLEdBQUcsSUFBTixHQUFhbFIsS0FBSyxDQUFDa1IsR0FBRCxDQUFsQixHQUEwQixJQUFyQztBQUNEO0FBQ0Y7O0FBRUR2ZSxTQUFPLENBQUNxTixLQUFSLENBQWNpUixPQUFkLEdBQXdCQSxPQUF4QjtBQUNEOztBQUVELFNBQVNHLGdCQUFULENBQTBCemUsT0FBMUIsRUFBbUMwZSxJQUFuQyxFQUF5QztBQUN2QyxNQUFJMWUsT0FBTyxDQUFDMmUsVUFBWixFQUF3QjtBQUN0QjNlLFdBQU8sQ0FBQzRlLFlBQVIsQ0FBcUJGLElBQXJCLEVBQTJCMWUsT0FBTyxDQUFDMmUsVUFBbkM7QUFDRCxHQUZELE1BRU87QUFDTDNlLFdBQU8sQ0FBQzZlLFdBQVIsQ0FBb0JILElBQXBCO0FBQ0Q7QUFDRjs7QUFFYyxTQUFTMVgsWUFBVCxDQUFzQmpILElBQXRCLEVBQTRCK2UsUUFBNUIsRUFBc0M7QUFDbkQsTUFBTS9YLE1BQU0sR0FBR29JLFFBQVEsQ0FBQzRQLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZjs7QUFDQSxNQUFJMVosTUFBTSxDQUFDdVAsZ0JBQVAsQ0FBd0I3VSxJQUF4QixFQUE4QjJCLFFBQTlCLEtBQTJDLFFBQS9DLEVBQXlEO0FBQ3ZEM0IsUUFBSSxDQUFDc04sS0FBTCxDQUFXM0wsUUFBWCxHQUFzQixVQUF0QjtBQUNEOztBQUVEcUYsUUFBTSxDQUFDaVksWUFBUCxDQUFvQixPQUFwQixFQUE2QkYsUUFBUSxDQUFDcGMsSUFBVCxDQUFjSyxDQUFkLEdBQWtCLElBQS9DO0FBQ0FnRSxRQUFNLENBQUNpWSxZQUFQLENBQW9CLFFBQXBCLEVBQThCRixRQUFRLENBQUNwYyxJQUFULENBQWNNLENBQWQsR0FBa0IsSUFBaEQ7QUFDQXFiLFVBQVEsQ0FBQ3RYLE1BQUQsRUFBUztBQUNmckYsWUFBUSxFQUFFLFVBREs7QUFFZmlRLFFBQUksRUFBRW1OLFFBQVEsQ0FBQ3BkLFFBQVQsQ0FBa0JzQixDQUFsQixHQUFzQixJQUZiO0FBR2Y0TyxPQUFHLEVBQUVrTixRQUFRLENBQUNwZCxRQUFULENBQWtCc0IsQ0FBbEIsR0FBc0IsSUFIWjtBQUlmNk8sU0FBSyxFQUFFaU4sUUFBUSxDQUFDcGMsSUFBVCxDQUFjSyxDQUFkLEdBQWtCLElBSlY7QUFLZmdILFVBQU0sRUFBRStVLFFBQVEsQ0FBQ3BjLElBQVQsQ0FBY00sQ0FBZCxHQUFrQjtBQUxYLEdBQVQsQ0FBUjtBQU9BeWIsa0JBQWdCLENBQUMxZSxJQUFELEVBQU9nSCxNQUFQLENBQWhCO0FBQ0EsU0FBT0EsTUFBUDtBQUNELEM7Ozs7Ozs7Ozs7OztBQ3JDRDtBQUFBO0FBQWUsU0FBUytFLGdCQUFULENBQTBCOUwsT0FBMUIsRUFBbUM7QUFDaEQsTUFBSWdDLE1BQU0sR0FBR2hDLE9BQU8sQ0FBQ3FVLFVBQXJCOztBQUNBLFNBQU9yUyxNQUFNLENBQUNxUyxVQUFQLElBQXFCaFAsTUFBTSxDQUFDdVAsZ0JBQVAsQ0FBd0I1UyxNQUF4QixFQUFnQyxVQUFoQyxNQUFnRCxRQUE1RSxFQUFzRjtBQUNwRkEsVUFBTSxHQUFHQSxNQUFNLENBQUNxUyxVQUFoQjtBQUNEOztBQUNELFNBQU9yUyxNQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7O0FDTkQ7QUFBQTtBQUFlLFNBQVN1RSxLQUFULENBQWUxQyxLQUFmLEVBQXNCb2IsSUFBdEIsRUFBNEJDLElBQTVCLEVBQWtDO0FBQy9DLE1BQU0vSixNQUFNLEdBQUcsRUFBZjs7QUFDQSxNQUFJLE9BQU84SixJQUFQLEtBQWdCLFdBQXBCLEVBQWlDO0FBQy9CQSxRQUFJLEdBQUdwYixLQUFQO0FBQ0FBLFNBQUssR0FBRyxDQUFSO0FBQ0Q7O0FBQ0QsTUFBSSxPQUFPcWIsSUFBUCxLQUFnQixXQUFwQixFQUFpQztBQUMvQkEsUUFBSSxHQUFHLENBQVA7QUFDRDs7QUFDRCxNQUFLQSxJQUFJLEdBQUcsQ0FBUCxJQUFZcmIsS0FBSyxJQUFJb2IsSUFBdEIsSUFBZ0NDLElBQUksR0FBRyxDQUFQLElBQVlyYixLQUFLLElBQUlvYixJQUF6RCxFQUFnRTtBQUM5RCxXQUFPLEVBQVA7QUFDRDs7QUFDRCxPQUFLLElBQUk3WCxDQUFDLEdBQUd2RCxLQUFiLEVBQW9CcWIsSUFBSSxHQUFHLENBQVAsR0FBVzlYLENBQUMsR0FBRzZYLElBQWYsR0FBc0I3WCxDQUFDLEdBQUc2WCxJQUE5QyxFQUFvRDdYLENBQUMsSUFBSThYLElBQXpELEVBQStEO0FBQzdEL0osVUFBTSxDQUFDNVQsSUFBUCxDQUFZNkYsQ0FBWjtBQUNEOztBQUNELFNBQU8rTixNQUFQO0FBQ0QsQyIsImZpbGUiOiJpbmRleC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIkRyYWdlZVwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJEcmFnZWVcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiRHJhZ2VlXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8qIVxuICogZ2V0U3R5bGVQcm9wZXJ0eSB2MS4wLjRcbiAqIG9yaWdpbmFsIGJ5IGthbmdheFxuICogaHR0cDovL3BlcmZlY3Rpb25raWxscy5jb20vZmVhdHVyZS10ZXN0aW5nLWNzcy1wcm9wZXJ0aWVzL1xuICogTUlUIGxpY2Vuc2VcbiAqL1xuXG4vKmpzaGludCBicm93c2VyOiB0cnVlLCBzdHJpY3Q6IHRydWUsIHVuZGVmOiB0cnVlICovXG4vKmdsb2JhbCBkZWZpbmU6IGZhbHNlLCBleHBvcnRzOiBmYWxzZSwgbW9kdWxlOiBmYWxzZSAqL1xuXG4oIGZ1bmN0aW9uKCB3aW5kb3cgKSB7XG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHByZWZpeGVzID0gJ1dlYmtpdCBNb3ogbXMgTXMgTycuc3BsaXQoJyAnKTtcbnZhciBkb2NFbGVtU3R5bGUgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGU7XG5cbmZ1bmN0aW9uIGdldFN0eWxlUHJvcGVydHkoIHByb3BOYW1lICkge1xuICBpZiAoICFwcm9wTmFtZSApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyB0ZXN0IHN0YW5kYXJkIHByb3BlcnR5IGZpcnN0XG4gIGlmICggdHlwZW9mIGRvY0VsZW1TdHlsZVsgcHJvcE5hbWUgXSA9PT0gJ3N0cmluZycgKSB7XG4gICAgcmV0dXJuIHByb3BOYW1lO1xuICB9XG5cbiAgLy8gY2FwaXRhbGl6ZVxuICBwcm9wTmFtZSA9IHByb3BOYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcHJvcE5hbWUuc2xpY2UoMSk7XG5cbiAgLy8gdGVzdCB2ZW5kb3Igc3BlY2lmaWMgcHJvcGVydGllc1xuICB2YXIgcHJlZml4ZWQ7XG4gIGZvciAoIHZhciBpPTAsIGxlbiA9IHByZWZpeGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrICkge1xuICAgIHByZWZpeGVkID0gcHJlZml4ZXNbaV0gKyBwcm9wTmFtZTtcbiAgICBpZiAoIHR5cGVvZiBkb2NFbGVtU3R5bGVbIHByZWZpeGVkIF0gPT09ICdzdHJpbmcnICkge1xuICAgICAgcmV0dXJuIHByZWZpeGVkO1xuICAgIH1cbiAgfVxufVxuXG4vLyB0cmFuc3BvcnRcbmlmICggdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAvLyBBTURcbiAgZGVmaW5lKCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZ2V0U3R5bGVQcm9wZXJ0eTtcbiAgfSk7XG59IGVsc2UgaWYgKCB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgKSB7XG4gIC8vIENvbW1vbkpTIGZvciBDb21wb25lbnRcbiAgbW9kdWxlLmV4cG9ydHMgPSBnZXRTdHlsZVByb3BlcnR5O1xufSBlbHNlIHtcbiAgLy8gYnJvd3NlciBnbG9iYWxcbiAgd2luZG93LmdldFN0eWxlUHJvcGVydHkgPSBnZXRTdHlsZVByb3BlcnR5O1xufVxuXG59KSggd2luZG93ICk7XG4iLCIvKipcbiAqIFJlbW92ZSBhIHJhbmdlIG9mIGl0ZW1zIGZyb20gYW4gYXJyYXlcbiAqXG4gKiBAZnVuY3Rpb24gcmVtb3ZlSXRlbXNcbiAqIEBwYXJhbSB7QXJyYXk8Kj59IGFyciBUaGUgdGFyZ2V0IGFycmF5XG4gKiBAcGFyYW0ge251bWJlcn0gc3RhcnRJZHggVGhlIGluZGV4IHRvIGJlZ2luIHJlbW92aW5nIGZyb20gKGluY2x1c2l2ZSlcbiAqIEBwYXJhbSB7bnVtYmVyfSByZW1vdmVDb3VudCBIb3cgbWFueSBpdGVtcyB0byByZW1vdmVcbiAqL1xuZnVuY3Rpb24gcmVtb3ZlSXRlbXMgKGFyciwgc3RhcnRJZHgsIHJlbW92ZUNvdW50KSB7XG4gIHZhciBpLCBsZW5ndGggPSBhcnIubGVuZ3RoO1xuXG4gIGlmIChzdGFydElkeCA+PSBsZW5ndGggfHwgcmVtb3ZlQ291bnQgPT09IDApIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHJlbW92ZUNvdW50ID0gKHN0YXJ0SWR4ICsgcmVtb3ZlQ291bnQgPiBsZW5ndGggPyBsZW5ndGggLSBzdGFydElkeCA6IHJlbW92ZUNvdW50KTtcblxuICB2YXIgbGVuID0gbGVuZ3RoIC0gcmVtb3ZlQ291bnQ7XG5cbiAgZm9yIChpID0gc3RhcnRJZHg7IGkgPCBsZW47ICsraSkge1xuICAgIGFycltpXSA9IGFycltpICsgcmVtb3ZlQ291bnRdO1xuICB9XG5cbiAgYXJyLmxlbmd0aCA9IGxlbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVtb3ZlSXRlbXM7XG4iLCJpbXBvcnQgeyBHZW9tZXRyeSB9IGZyb20gJy4vZ2VvbWV0cnknXG5pbXBvcnQgeyBEcmFnZ2FibGUgfSBmcm9tICcuL2RyYWdnYWJsZSdcbmltcG9ydCB7IGJvdW5kVG9BcmMgfSBmcm9tICcuL2JvdW5kJ1xuXG5jb25zdCBhcmNTbGlkZXJzID0gW11cblxuY2xhc3MgQXJjU2xpZGVyIHtcbiAgY29uc3RydWN0b3IoYXJlYSwgZWxlbWVudCwgb3B0aW9ucz17fSkge1xuICAgIGNvbnN0IGFyZWFSZWN0YW5nbGUgPSBHZW9tZXRyeS5jcmVhdGVSZWN0YW5nbGVGcm9tRWxlbWVudChhcmVhLCBhcmVhKVxuICAgIGNvbnN0IGhhbGZTaXplID0gR2VvbWV0cnkuZ2V0U2l6ZU9mRWxlbWVudChlbGVtZW50KS5tdWx0KDAuNSlcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNlbnRlcjogYXJlYVJlY3RhbmdsZS5nZXRDZW50ZXIoKSxcbiAgICAgIHJhZGl1czogYXJlYVJlY3RhbmdsZS5nZXRNaW5TaWRlKCkgLyAyLFxuICAgICAgc3RhcnRBbmdsZTogTWF0aC5QSSxcbiAgICAgIGVuZEFuZ2xlOiAwLFxuICAgICAgYW5nbGVzOiBbTWF0aC5QSSwgLU1hdGguUEkgLyA0LCAwLCBNYXRoLlBJIC8gNCwgTWF0aC5QSSAvIDJdLFxuICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uKCkge30sXG4gICAgICB0aW1lOiA1MDBcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGhpcy5zaGlmdGVkQ2VudGVyID0gdGhpcy5vcHRpb25zLmNlbnRlci5zdWIoaGFsZlNpemUpXG4gICAgdGhpcy5vbkNoYW5nZSA9IHRoaXMub3B0aW9ucy5vbkNoYW5nZVxuICAgIGFyY1NsaWRlcnMucHVzaCh0aGlzKVxuICAgIHRoaXMuYXJlYSA9IGFyZWFcbiAgICB0aGlzLmluaXQoZWxlbWVudClcbiAgfVxuXG4gIGluaXQoZWxlbWVudCkge1xuICAgIGNvbnN0IGFuZ2xlID0gdGhpcy5vcHRpb25zLnN0YXJ0QW5nbGVcbiAgICBjb25zdCBwb3NpdGlvbiA9IEdlb21ldHJ5LmdldFBvaW50RnJvbVJhZGlhbFN5c3RlbShcbiAgICAgIGFuZ2xlLFxuICAgICAgdGhpcy5vcHRpb25zLnJhZGl1cyxcbiAgICAgIHRoaXMuc2hpZnRlZENlbnRlclxuICAgIClcbiAgICBjb25zdCBib3VuZCA9IGJvdW5kVG9BcmMoXG4gICAgICB0aGlzLnNoaWZ0ZWRDZW50ZXIsXG4gICAgICB0aGlzLm9wdGlvbnMucmFkaXVzLFxuICAgICAgdGhpcy5vcHRpb25zLnN0YXJ0QW5nbGUsXG4gICAgICB0aGlzLm9wdGlvbnMuZW5kQW5nbGVcbiAgICApXG5cbiAgICB0aGlzLmFuZ2xlID0gYW5nbGVcbiAgICB0aGlzLmRyYWdnYWJsZSA9IG5ldyBEcmFnZ2FibGUoZWxlbWVudCwge1xuICAgICAgcGFyZW50OiB0aGlzLmFyZWEsXG4gICAgICBib3VuZDogYm91bmQsXG4gICAgICBwb3NpdGlvbjogcG9zaXRpb24sXG4gICAgICBvbk1vdmU6ICgpID0+IHtcbiAgICAgICAgdGhpcy5jaGFuZ2UoKVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICB1cGRhdGVBbmdsZSgpIHtcbiAgICB0aGlzLmFuZ2xlID0gR2VvbWV0cnkuZ2V0QW5nbGUodGhpcy5zaGlmdGVkQ2VudGVyLCB0aGlzLmRyYWdnYWJsZS5wb3NpdGlvbilcbiAgfVxuXG4gIGNoYW5nZSgpIHtcbiAgICB0aGlzLnVwZGF0ZUFuZ2xlKClcbiAgICAvLyAgICAgIHZhciBhbmdsZSA9IEdlb21ldHJ5LmdldE5lYXJlc3RBbmdsZSh0aGlzLm9wdGlvbnMuYW5nbGVzLCB0aGlzLmFuZ2xlKTtcbiAgICAvLyAgICAgIHRoaXMuc2V0QW5nbGUoYW5nbGUsdGhpcy5vcHRpb25zLnRpbWUpO1xuICAgIHRoaXMub25DaGFuZ2UodGhpcy5hbmdsZSlcbiAgfVxuXG4gIHNldEFuZ2xlKGFuZ2xlLCB0aW1lKSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBHZW9tZXRyeS5nZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oXG4gICAgICB0aGlzLmFuZ2xlLFxuICAgICAgdGhpcy5vcHRpb25zLnJhZGl1cyxcbiAgICAgIHRoaXMuc2hpZnRlZENlbnRlclxuICAgIClcbiAgICB0aGlzLmFuZ2xlID0gR2VvbWV0cnkubm9ybWFsaXplQW5nbGUoYW5nbGUsIHBvc2l0aW9uKVxuICAgIHRoaXMuZHJhZ2dhYmxlLm1vdmUocG9zaXRpb24sIHRpbWV8fDAsIHRydWUsIHRydWUpXG4gICAgdGhpcy5vbkNoYW5nZSh0aGlzLmFuZ2xlKVxuICB9XG59XG5cbmV4cG9ydCB7IGFyY1NsaWRlcnMsIEFyY1NsaWRlciB9XG4iLCJpbXBvcnQgeyBHZW9tZXRyeSwgUG9pbnQgfSBmcm9tICcuL2dlb21ldHJ5J1xuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRUb1JlY3RhbmdsZShyZWN0YW5nbGUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgY2FsY1BvaW50ID0gcG9pbnQuY2xvbmUoKSxcbiAgICAgIHJlY3RQMiA9IHJlY3RhbmdsZS5nZXRQMygpXG5cbiAgICBpZiAocmVjdGFuZ2xlLnBvc2l0aW9uLnggPiBjYWxjUG9pbnQueCkge1xuICAgICAgKGNhbGNQb2ludC54ID0gcmVjdGFuZ2xlLnBvc2l0aW9uLngpXG4gICAgfVxuICAgIGlmIChyZWN0YW5nbGUucG9zaXRpb24ueSA+IGNhbGNQb2ludC55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHJlY3RhbmdsZS5wb3NpdGlvbi55XG4gICAgfVxuICAgIGlmIChyZWN0UDIueCA8IGNhbGNQb2ludC54ICsgc2l6ZS54KSB7XG4gICAgICBjYWxjUG9pbnQueCA9IHJlY3RQMi54IC0gc2l6ZS54XG4gICAgfVxuICAgIGlmIChyZWN0UDIueSA8IGNhbGNQb2ludC55ICsgc2l6ZS55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHJlY3RQMi55IC0gc2l6ZS55XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhbGNQb2ludFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZFRvRWxlbWVudChlbGVtZW50LCBwYXJlbnQpIHtcbiAgY29uc3QgcmV0RnVuYyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBib3VuZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG4gIH1cbiAgbGV0IGJvdW5kXG5cbiAgcmV0RnVuYy5yZWZyZXNoID0gZnVuY3Rpb24oKSB7XG4gICAgYm91bmQgPSBib3VuZFRvUmVjdGFuZ2xlKEdlb21ldHJ5LmNyZWF0ZVJlY3RhbmdsZUZyb21FbGVtZW50KGVsZW1lbnQsIHBhcmVudCkpXG4gIH1cblxuICByZXRGdW5jLnJlZnJlc2goKVxuICByZXR1cm4gcmV0RnVuY1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRUb0xpbmVYKHgsIHN0YXJ0WSwgZW5kWSkge1xuICByZXR1cm4gZnVuY3Rpb24ocG9pbnQsIHNpemUpIHtcbiAgICBjb25zdCBjYWxjUG9pbnQgPSBwb2ludC5jbG9uZSgpXG4gICAgY2FsY1BvaW50LnggPSB4XG4gICAgaWYgKHN0YXJ0WSA+IGNhbGNQb2ludC55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHN0YXJ0WVxuICAgIH1cbiAgICBpZiAoZW5kWSA8IGNhbGNQb2ludC55ICsgc2l6ZS55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IGVuZFkgLSBzaXplLnlcbiAgICB9XG5cbiAgICByZXR1cm4gY2FsY1BvaW50XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kVG9MaW5lWSh5LCBzdGFydFgsIGVuZFgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgY2FsY1BvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIGNhbGNQb2ludC55ID0geVxuICAgIGlmIChzdGFydFggPiBjYWxjUG9pbnQueCkge1xuICAgICAgY2FsY1BvaW50LnggPSBzdGFydFhcbiAgICB9XG4gICAgaWYgKGVuZFggPCBjYWxjUG9pbnQueCArIHNpemUueCkge1xuICAgICAgY2FsY1BvaW50LnggPSBlbmRYIC0gc2l6ZS54XG4gICAgfVxuICAgIHJldHVybiBjYWxjUG9pbnRcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRUb0xpbmUoc3RhcnQsIGVuZCkge1xuICBjb25zdCBhbHBoYSA9IE1hdGguYXRhbjIoZW5kLnkgLSBzdGFydC55LCBlbmQueCAtIHN0YXJ0LngpLFxuICAgIGJldGEgPSBhbHBoYSArIE1hdGguUEkgLyAyLFxuICAgIHNvbWVLID0gMTAsXG4gICAgY29zQmV0YSA9IE1hdGguY29zKGJldGEpLFxuICAgIHNpbkJldGEgPSBNYXRoLnNpbihiZXRhKVxuXG4gIHJldHVybiBmdW5jdGlvbihwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IHBvaW50MiA9IG5ldyBQb2ludChwb2ludC54ICsgc29tZUsgKiBjb3NCZXRhLCBwb2ludC55ICsgc29tZUsgKiBzaW5CZXRhKSxcbiAgICAgIG5ld0VuZCA9IEdlb21ldHJ5LmdldFBvaW50SW5MaW5lQnlMZW5naHQoZW5kLCBzdGFydCwgc2l6ZS54KVxuICAgIGxldCBwb2ludENyb3NzaW5nID0gR2VvbWV0cnkuZGlyZWN0Q3Jvc3Npbmcoc3RhcnQsIGVuZCwgcG9pbnQsIHBvaW50MilcblxuICAgIHBvaW50Q3Jvc3NpbmcgPSBHZW9tZXRyeS5ib3VuZFRvTGluZShzdGFydCwgbmV3RW5kLCBwb2ludENyb3NzaW5nKVxuICAgIHJldHVybiBwb2ludENyb3NzaW5nXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kVG9DaXJjbGUoY2VudGVyLCByYWRpdXMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHBvaW50LCBfc2l6ZSkge1xuICAgIGNvbnN0IGJvdW5kZWRQb2ludCA9IEdlb21ldHJ5LmdldFBvaW50SW5MaW5lQnlMZW5naHQoY2VudGVyLCBwb2ludCwgcmFkaXVzKVxuICAgIHJldHVybiBib3VuZGVkUG9pbnRcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRUb0FyYyhjZW50ZXIsIHJhZGl1cywgc3RhcnRBZ2xlLCBlbmRBbmdsZSkge1xuICByZXR1cm4gZnVuY3Rpb24ocG9pbnQsIF9zaXplKSB7XG4gICAgY29uc3QgYm91bmRTdGFydEFuZ2xlID0gdHlwZW9mIHN0YXJ0QWdsZSA9PT0gJ2Z1bmN0aW9uJyA/IHN0YXJ0QWdsZSgpIDogc3RhcnRBZ2xlXG4gICAgY29uc3QgYm91bmRFbmR0QW5nbGUgPSB0eXBlb2Ygc3RhcnRBZ2xlID09PSAnZnVuY3Rpb24nID8gZW5kQW5nbGUoKSA6IGVuZEFuZ2xlXG5cbiAgICBsZXQgYW5nbGUgPSBHZW9tZXRyeS5nZXRBbmdsZShjZW50ZXIsIHBvaW50KVxuICAgIGFuZ2xlID0gR2VvbWV0cnkubm9ybWFsaXplQW5nbGUoYW5nbGUpXG4gICAgYW5nbGUgPSBHZW9tZXRyeS5ib3VuZEFuZ2xlKGJvdW5kU3RhcnRBbmdsZSwgYm91bmRFbmR0QW5nbGUsIGFuZ2xlKVxuICAgIHJldHVybiBHZW9tZXRyeS5nZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oYW5nbGUsIHJhZGl1cywgY2VudGVyKVxuICB9XG59XG4iLCJpbXBvcnQgY3JlYXRlQ2FudmFzIGZyb20gJy4vdXRpbHMvY3JlYXRlY2FudmFzJ1xuaW1wb3J0IHJhbmdlIGZyb20gJy4vdXRpbHMvcmFuZ2UnXG5pbXBvcnQgeyBHZW9tZXRyeSwgUG9pbnQgfSBmcm9tICcuL2dlb21ldHJ5J1xuaW1wb3J0IHsgRHJhZ2dhYmxlLCBldmVudHMgfSBmcm9tICcuL2RyYWdnYWJsZSdcbmltcG9ydCB7IGJvdW5kVG9BcmMgfSBmcm9tICcuL2JvdW5kJ1xuXG5jb25zdCBpc1RvdWNoID0gJ29udG91Y2hzdGFydCcgaW4gd2luZG93XG5jb25zdCBjaGFydHMgPSBbXVxuXG5mdW5jdGlvbiByYW5kb21Db2xvcigpIHtcbiAgY29uc3Qgcm5kID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSoyNTUpXG4gIH1cbiAgY29uc3QgdG9IZXhTdHJpbmcgPSBmdW5jdGlvbihkaWdpdCkge1xuICAgIGxldCBzdHIgPSBkaWdpdC50b1N0cmluZygxNilcbiAgICB3aGlsZSAoc3RyLmxlbmd0aCA8IDIpIHtcbiAgICAgIHN0ciA9ICcwJyArIHN0clxuICAgIH1cbiAgICByZXR1cm4gc3RyXG4gIH1cblxuICByZXR1cm4gJyMnICsgdG9IZXhTdHJpbmcocm5kKCkpICsgdG9IZXhTdHJpbmcocm5kKCkpICsgdG9IZXhTdHJpbmcocm5kKCkpXG59XG5cbmZ1bmN0aW9uIGdldEFycmF5V2l0aEJvdW5kSW5kZXhlcyhpbmRleCwgbGVuZ3RoKSB7XG4gIGNvbnN0IHJldEluZGV4ZXMgPSBbXVxuICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgcmV0SW5kZXhlcy5wdXNoKGluZGV4KVxuICAgIHJldEluZGV4ZXMucHVzaCgoaW5kZXggKyAxKSAlIGxlbmd0aClcbiAgfVxuXG4gIHJldHVybiByZXRJbmRleGVzXG59XG5cbmNsYXNzIENoYXJ0IHtcbiAgY29uc3RydWN0b3IgKGFyZWEsIGVsZW1lbnRzLCBvcHRpb25zPXt9KSB7XG4gICAgY29uc3QgYXJlYVJlY3RhbmdsZSA9IEdlb21ldHJ5LmNyZWF0ZVJlY3RhbmdsZUZyb21FbGVtZW50KGFyZWEsIGFyZWEpXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjZW50ZXI6IGFyZWFSZWN0YW5nbGUuZ2V0Q2VudGVyKCksXG4gICAgICByYWRpdXM6IGFyZWFSZWN0YW5nbGUuZ2V0TWluU2lkZSgpIC8gMixcbiAgICAgIHRvdWNoUmFkaXVzOiBhcmVhUmVjdGFuZ2xlLmdldE1pblNpZGUoKSAvIDIsXG4gICAgICBib3VuZEFuZ2xlOiBNYXRoLlBJIC8gOSxcbiAgICAgIGZpbGxTdHlsZXM6IHJhbmdlKDAsIGVsZW1lbnRzLmxlbmd0aCkubWFwKCgpID0+IHJhbmRvbUNvbG9yKCkpLFxuICAgICAgaW5pdEFuZ2xlczogcmFuZ2UoLTkwLCAyNzAsIDM2MCAvIGVsZW1lbnRzLmxlbmd0aCkubWFwKChhbmdsZSkgPT4ge1xuICAgICAgICByZXR1cm4gR2VvbWV0cnkudG9SYWRpYW4oYW5nbGUpXG4gICAgICB9KSxcbiAgICAgIGxpbWl0SW1nOiBudWxsLFxuICAgICAgbGltaXRJbWdPZmZzZXQ6IG5ldyBQb2ludCgwLCAwKSxcbiAgICAgIGlzU2VsZWN0YWJsZTogZmFsc2VcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgY2hhcnRzLnB1c2godGhpcylcbiAgICB0aGlzLm9uRHJhdyA9IHRoaXMub3B0aW9ucy5vbkRyYXcgfHwgZnVuY3Rpb24oKSB7fVxuICAgIHRoaXMuYXJlYSA9IGFyZWFcbiAgICB0aGlzLmFyZWFSZWN0YW5nbGUgPSBhcmVhUmVjdGFuZ2xlXG4gICAgdGhpcy5pbml0KGVsZW1lbnRzKVxuICB9XG5cbiAgaW5pdChlbGVtZW50cykge1xuICAgIHRoaXMuY2FudmFzID0gY3JlYXRlQ2FudmFzKHRoaXMuYXJlYSwgdGhpcy5hcmVhUmVjdGFuZ2xlKVxuICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJylcbiAgICB0aGlzLmRyYWdnYWJsZXMgPSBlbGVtZW50cy5tYXAoKGVsZW1lbnQsIGkpID0+IHtcbiAgICAgIGNvbnN0IGFuZ2xlID0gdGhpcy5vcHRpb25zLmluaXRBbmdsZXNbaV1cbiAgICAgIGNvbnN0IGhhbGZTaXplID0gR2VvbWV0cnkuZ2V0U2l6ZU9mRWxlbWVudChlbGVtZW50KS5tdWx0KDAuNSlcbiAgICAgIGNvbnN0IHBvc2l0aW9uID0gR2VvbWV0cnkuZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKFxuICAgICAgICBhbmdsZSxcbiAgICAgICAgdGhpcy5vcHRpb25zLnRvdWNoUmFkaXVzLFxuICAgICAgICB0aGlzLm9wdGlvbnMuY2VudGVyLnN1YihoYWxmU2l6ZSlcbiAgICAgIClcbiAgICAgIGNvbnN0IGJvdW5kID0gYm91bmRUb0FyYyhcbiAgICAgICAgdGhpcy5vcHRpb25zLmNlbnRlci5zdWIoaGFsZlNpemUpLFxuICAgICAgICB0aGlzLm9wdGlvbnMudG91Y2hSYWRpdXMsXG4gICAgICAgIHRoaXMuZ2V0Qm91bmRBbmdsZShpLCBmYWxzZSksXG4gICAgICAgIHRoaXMuZ2V0Qm91bmRBbmdsZShpLCB0cnVlKVxuICAgICAgKVxuXG4gICAgICByZXR1cm4gbmV3IERyYWdnYWJsZShlbGVtZW50LCB7XG4gICAgICAgIHBhcmVudDogdGhpcy5hcmVhLFxuICAgICAgICBib3VuZDogYm91bmQsXG4gICAgICAgIHBvc2l0aW9uOiBwb3NpdGlvbixcbiAgICAgICAgb25Nb3ZlOiAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5kcmF3KClcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG5cbiAgICB0aGlzLmlzSW5pdCA9IHRydWVcbiAgICBpZiAodGhpcy5vcHRpb25zLmlzU2VsZWN0YWJsZSkge1xuICAgICAgdGhpcy5pbml0U2VsZWN0KClcbiAgICB9XG4gICAgdGhpcy5kcmF3KClcbiAgfVxuXG4gIGluaXRTZWxlY3QoKSB7XG4gICAgdGhpcy5zZXRBY3RpdmVBcmMoLTEpXG5cbiAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50cy5zdGFydCwgKGUpID0+IHtcbiAgICAgIGxldCBwb2ludCA9IG5ldyBQb2ludChcbiAgICAgICAgaXNUb3VjaCA/IGUuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVggOiBlLmNsaWVudFgsXG4gICAgICAgIGlzVG91Y2ggPyBlLmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZIDogZS5jbGllbnRZXG4gICAgICApXG5cbiAgICAgIGlmICghdGhpcy5jYW52YXNPZmZzZXQpIHtcbiAgICAgICAgdGhpcy5jYW52YXNPZmZzZXQgPSBHZW9tZXRyeS5nZXRPZmZzZXQodGhpcy5jYW52YXMpXG4gICAgICB9XG5cbiAgICAgIHBvaW50ID0gcG9pbnQuc3ViKHRoaXMuY2FudmFzT2Zmc2V0KVxuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmdldEFyY09uUG9pbnQocG9pbnQpXG4gICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgIHRoaXMuc2V0QWN0aXZlQXJjKCh0aGlzLmFjdGl2ZUFyY0luZGV4ICE9PSBpbmRleCkgPyBpbmRleCA6IC0xKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICB1cGRhdGVBbmdsZXMoKSB7XG4gICAgdGhpcy5hbmdsZXMgPSB0aGlzLmRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGNvbnN0IGhhbGZTaXplID0gZHJhZ2dhYmxlLmdldFNpemUoKS5tdWx0KDAuNSlcbiAgICAgIHJldHVybiBHZW9tZXRyeS5nZXRBbmdsZSh0aGlzLm9wdGlvbnMuY2VudGVyLnN1YihoYWxmU2l6ZSksIGRyYWdnYWJsZS5wb3NpdGlvbilcbiAgICB9KVxuICB9XG5cbiAgZ2V0Qm91bmRBbmdsZShpbmRleCwgaXNDbG9zc2luZykge1xuICAgIGNvbnN0IHNpZ24gPSBpc0Nsb3NzaW5nID8gMSA6IC0xXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgbGV0IGkgPSAoaW5kZXggKyBzaWduKSAlIHRoaXMuYW5nbGVzLmxlbmd0aFxuICAgICAgaWYgKGkgPCAwKSB7XG4gICAgICAgIGkgKz0gdGhpcy5hbmdsZXMubGVuZ3RoXG4gICAgICB9XG4gICAgICByZXR1cm4gR2VvbWV0cnkubm9ybWFsaXplQW5nbGUodGhpcy5hbmdsZXNbaV0gLSBzaWduICogdGhpcy5vcHRpb25zLmJvdW5kQW5nbGUpXG4gICAgfVxuICB9XG5cbiAgZHJhdygpIHtcbiAgICBpZiAoIXRoaXMuaXNJbml0KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZUFuZ2xlcygpXG4gICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmFyZWFSZWN0YW5nbGUuc2l6ZS54LCB0aGlzLmFyZWFSZWN0YW5nbGUuc2l6ZS55KVxuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChfZHJhZ2dhYmxlLCBpbmRleCkgPT4ge1xuICAgICAgdGhpcy5kcmF3QXJjKHRoaXMuY29udGV4dCwgdGhpcy5vcHRpb25zLmNlbnRlciwgdGhpcy5vcHRpb25zLnJhZGl1cywgaW5kZXgpXG4gICAgfSlcblxuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChfZHJhZ2dhYmxlLCBpbmRleCkgPT4ge1xuICAgICAgbGV0IGVuYWJsZUluZGV4ZXNcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuaXNTZWxlY3RhYmxlKSB7XG4gICAgICAgIGVuYWJsZUluZGV4ZXMgPSBnZXRBcnJheVdpdGhCb3VuZEluZGV4ZXModGhpcy5hY3RpdmVBcmNJbmRleCwgdGhpcy5kcmFnZ2FibGVzLmxlbmd0aClcbiAgICAgICAgaWYgKGVuYWJsZUluZGV4ZXMuaW5kZXhPZihpbmRleCkgIT09IC0xKSB7XG4gICAgICAgICAgdGhpcy5kcmF3TGltaXRJbWcoaW5kZXgpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZHJhd0xpbWl0SW1nKGluZGV4KVxuICAgICAgfVxuICAgIH0pXG4gICAgdGhpcy5vbkRyYXcoKVxuICB9XG5cbiAgY3JlYXRlQ2xvbmUoZWxlbWVudCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgaWYgKCF0aGlzLmlzSW5pdCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IHJlY3RhbmdsZSA9IEdlb21ldHJ5LmNyZWF0ZVJlY3RhbmdsZUZyb21FbGVtZW50KGVsZW1lbnQsIGVsZW1lbnQpXG4gICAgY29uc3Qgb3B0cyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY2VudGVyOiByZWN0YW5nbGUuZ2V0Q2VudGVyKCksXG4gICAgICByYWRpdXM6IHJlY3RhbmdsZS5nZXRNaW5TaWRlKCkgLyAyLFxuICAgICAgZmlsbFN0eWxlczogdGhpcy5vcHRpb25zLmZpbGxTdHlsZXNcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgY29uc3QgY2FudmFzID0gY3JlYXRlQ2FudmFzKGVsZW1lbnQsIHJlY3RhbmdsZSlcbiAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJylcbiAgICBjb25zdCBjbG9uZU9iaiA9IHtcbiAgICAgIGRyYXc6ICgpID0+IHtcbiAgICAgICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgcmVjdGFuZ2xlLnNpemUueCwgcmVjdGFuZ2xlLnNpemUueSlcbiAgICAgICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKF9kcmFnZ2FibGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgdGhpcy5kcmF3QXJjKGNvbnRleHQsIG9wdHMuY2VudGVyLCBvcHRzLnJhZGl1cywgaW5kZXgpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICAgIGNsb25lT2JqLmRyYXcoKVxuICAgIHJldHVybiBjbG9uZU9ialxuICB9XG5cbiAgZ2V0RmlsbFN0eWxlKGluZGV4KSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuZmlsbFN0eWxlc1tpbmRleF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5maWxsU3R5bGVzW2luZGV4XSA9IHRoaXMub3B0aW9ucy5maWxsU3R5bGVzW2luZGV4XS5jYWxsKHRoaXMpXG4gICAgfVxuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZmlsbFN0eWxlc1tpbmRleF1cbiAgfVxuXG4gIGRyYXdBcmMoY29udGV4dCwgY2VudGVyLCByYWRpdXMsIGluZGV4KSB7XG4gICAgY29uc3Qgc3RhcnRBbmdsZSA9IHRoaXMuYW5nbGVzW2luZGV4XVxuICAgIGNvbnN0IGVuZEFuZ2xlID0gdGhpcy5hbmdsZXNbKGluZGV4KzEpICUgdGhpcy5hbmdsZXMubGVuZ3RoXVxuICAgIGNvbnN0IGNvbG9yID0gdGhpcy5nZXRGaWxsU3R5bGUoaW5kZXgpXG5cbiAgICBjb250ZXh0LmJlZ2luUGF0aCgpXG4gICAgY29udGV4dC5tb3ZlVG8oY2VudGVyLngsIGNlbnRlci55KVxuICAgIGNvbnRleHQuYXJjKGNlbnRlci54LCBjZW50ZXIueSwgcmFkaXVzLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSwgZmFsc2UpXG4gICAgY29udGV4dC5saW5lVG8oY2VudGVyLngsIGNlbnRlci55KVxuICAgIGNvbnRleHQuY2xvc2VQYXRoKClcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yXG4gICAgY29udGV4dC5maWxsKClcbiAgfVxuXG4gIGRyYXdMaW1pdEltZyhpbmRleCkge1xuICAgIGxldCBwb2ludCwgaW1nXG4gICAgaWYgKHRoaXMub3B0aW9ucy5saW1pdEltZykge1xuICAgICAgaW1nID0gdGhpcy5vcHRpb25zLmxpbWl0SW1nIGluc3RhbmNlb2YgQXJyYXkgPyB0aGlzLm9wdGlvbnMubGltaXRJbWdbaW5kZXhdIDogdGhpcy5vcHRpb25zLmxpbWl0SW1nXG4gICAgfVxuXG4gICAgaWYgKGltZykge1xuICAgICAgY29uc3QgYW5nbGUgPSBHZW9tZXRyeS5ub3JtYWxpemVBbmdsZSh0aGlzLmFuZ2xlc1tpbmRleF0pXG4gICAgICBwb2ludCA9IG5ldyBQb2ludCgwLCAtaW1nLmhlaWdodCAvIDIpXG4gICAgICBwb2ludCA9IHBvaW50LmFkZCh0aGlzLm9wdGlvbnMubGltaXRJbWdPZmZzZXQpXG4gICAgICB0aGlzLmNvbnRleHQudHJhbnNsYXRlKHRoaXMuYXJlYVJlY3RhbmdsZS5zaXplLnggLyAyLCB0aGlzLmFyZWFSZWN0YW5nbGUuc2l6ZS55IC8gMilcbiAgICAgIHRoaXMuY29udGV4dC5yb3RhdGUoYW5nbGUpXG4gICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKGltZywgcG9pbnQueCwgcG9pbnQueSlcbiAgICAgIHRoaXMuY29udGV4dC5zZXRUcmFuc2Zvcm0oMSwgMCwgMCwgMSwgMCwgMClcbiAgICB9XG4gIH1cblxuICBnZXRBbmdsZXNEaWZmKCkge1xuICAgIGNvbnN0IGFuZ2xlcyA9IHRoaXMuYW5nbGVzLnNsaWNlKDEpXG4gICAgbGV0IGJhc2VBbmdsZSA9IHRoaXMuYW5nbGVzWzBdXG5cbiAgICBhbmdsZXMucHVzaChiYXNlQW5nbGUpXG4gICAgcmV0dXJuIGFuZ2xlcy5tYXAoKGFuZ2xlKSA9PiB7XG4gICAgICBjb25zdCBkaWZmQW5nbGUgPSBHZW9tZXRyeS5ub3JtYWxpemVBbmdsZShhbmdsZSAtIGJhc2VBbmdsZSlcbiAgICAgIGJhc2VBbmdsZSA9IGFuZ2xlXG4gICAgICByZXR1cm4gZGlmZkFuZ2xlXG4gICAgfSlcbiAgfVxuXG4gIGdldFBlcmNlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0QW5nbGVzRGlmZigpLm1hcCgoZGlmZkFuZ2xlKSA9PiBkaWZmQW5nbGUgLyAoMiAqIE1hdGguUEkpKVxuICB9XG5cbiAgZ2V0QXJjQmlzZWN0cml4cygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRBbmdsZXNEaWZmKCkubWFwKChkaWZmQW5nbGUsIGkpID0+IHtcbiAgICAgIHJldHVybiBHZW9tZXRyeS5ub3JtYWxpemVBbmdsZSh0aGlzLmFuZ2xlc1tpXSArIGRpZmZBbmdsZSAvIDIpXG4gICAgfSlcbiAgfVxuXG4gIGdldEFyY09uUG9pbnQocG9pbnQpIHtcbiAgICBjb25zdCBhbmdsZSA9IEdlb21ldHJ5LmdldEFuZ2xlKHRoaXMub3B0aW9ucy5jZW50ZXIsIHBvaW50KVxuICAgIGNvbnN0IHJhZGl1cyA9IEdlb21ldHJ5LmdldERpc3RhbmNlKHRoaXMub3B0aW9ucy5jZW50ZXIsIHBvaW50KVxuXG4gICAgaWYgKHJhZGl1cyA+IHRoaXMub3B0aW9ucy5yYWRpdXMpIHtcbiAgICAgIHJldHVybiAtMVxuICAgIH1cblxuICAgIGxldCBvZmZzZXQgPSAtMSwgaSwgalxuICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLmFuZ2xlcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKG9mZnNldCA9PT0gLTEgfHwgdGhpcy5hbmdsZXNbb2Zmc2V0XSA+IHRoaXMuYW5nbGVzW2ldKSB7XG4gICAgICAgIG9mZnNldCA9IGlcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChpID0gMCwgaiA9IG9mZnNldDsgaSA8IHRoaXMuYW5nbGVzLmxlbmd0aDsgaSsrLCBqID0gKGkgKyBvZmZzZXQpICUgdGhpcy5hbmdsZXMubGVuZ3RoKSB7XG4gICAgICBpZiAoYW5nbGUgPCB0aGlzLmFuZ2xlc1tqXSkge1xuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoLS1qIDwgMCkge1xuICAgICAgaiArPSB0aGlzLmFuZ2xlcy5sZW5ndGhcbiAgICB9XG4gICAgcmV0dXJuIGpcbiAgfVxuXG4gIHNldEFuZ2xlcyhhbmdsZXMpIHtcbiAgICB0aGlzLmFuZ2xlcyA9IGFuZ2xlc1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUsIGkpID0+IHtcbiAgICAgIGNvbnN0IGFuZ2xlID0gdGhpcy5hbmdsZXNbaV1cbiAgICAgIGNvbnN0IGhhbGZTaXplID0gZHJhZ2dhYmxlLmdldFNpemUoKS5tdWx0KDAuNSlcbiAgICAgIGNvbnN0IHBvc2l0aW9uID0gR2VvbWV0cnkuZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKFxuICAgICAgICBhbmdsZSxcbiAgICAgICAgdGhpcy5vcHRpb25zLnRvdWNoUmFkaXVzLFxuICAgICAgICB0aGlzLm9wdGlvbnMuY2VudGVyLnN1YihoYWxmU2l6ZSlcbiAgICAgIClcblxuICAgICAgZHJhZ2dhYmxlLm1vdmUocG9zaXRpb24sIDAsIHRydWUsIHRydWUpXG4gICAgfSlcbiAgICB0aGlzLmRyYXcoKVxuICB9XG5cbiAgc2V0QWN0aXZlQXJjKGluZGV4KSB7XG4gICAgY29uc3QgZW5hYmxlSW5kZXhlcyA9IGdldEFycmF5V2l0aEJvdW5kSW5kZXhlcyhpbmRleCwgdGhpcy5kcmFnZ2FibGVzLmxlbmd0aClcbiAgICB0aGlzLmFjdGl2ZUFyY0luZGV4ID0gaW5kZXhcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlLCBpKSA9PiB7XG4gICAgICBkcmFnZ2FibGUuZW5hYmxlID0gZW5hYmxlSW5kZXhlcy5pbmRleE9mKGkpICE9PSAtMVxuICAgIH0pXG4gICAgdGhpcy5kcmF3KClcbiAgfVxufVxuXG5leHBvcnQgeyBjaGFydHMsIENoYXJ0IH1cbiIsImltcG9ydCB7IGFkZENsYXNzLCByZW1vdmVDbGFzcyB9IGZyb20gJy4vdXRpbHMvY2xhc3NlcydcbmltcG9ydCBnZXREZWZhdWx0UGFyZW50IGZyb20gJy4vdXRpbHMvZ2V0ZGVmYXVsdHBhcmVudCdcbmltcG9ydCBFdmVudCBmcm9tICcuL2V2ZW50J1xuaW1wb3J0IGdldFN0eWxlUHJvcGVydHkgZnJvbSAnZGVzYW5kcm8tZ2V0LXN0eWxlLXByb3BlcnR5J1xuaW1wb3J0IHsgYm91bmRUb0VsZW1lbnQgfSBmcm9tICcuL2JvdW5kJ1xuaW1wb3J0IHsgR2VvbWV0cnksIFBvaW50LCBSZWN0YW5nbGUgfSBmcm9tICcuL2dlb21ldHJ5J1xuaW1wb3J0IHsgZGVmYXVsdFNjb3BlIH0gZnJvbSAnLi9zY29wZSdcblxuY29uc3QgRHJhZ2VlID0geyBFdmVudCB9IC8vdG9kbyByZW1vdmUgYWZ0ZXIgcmVmYWN0b3JlXG5cbmNvbnN0IGlzVG91Y2ggPSAnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3csIG1vdXNlRXZlbnRzID0ge1xuICAgIHN0YXJ0OiAnbW91c2Vkb3duJyxcbiAgICBtb3ZlOiAnbW91c2Vtb3ZlJyxcbiAgICBlbmQ6ICdtb3VzZXVwJ1xuICB9LCB0b3VjaEV2ZW50cyA9IHtcbiAgICBzdGFydDogJ3RvdWNoc3RhcnQnLFxuICAgIG1vdmU6ICd0b3VjaG1vdmUnLFxuICAgIGVuZDogJ3RvdWNoZW5kJ1xuICB9LFxuICBldmVudHMgPSBpc1RvdWNoID8gdG91Y2hFdmVudHMgOiBtb3VzZUV2ZW50cyxcbiAgZHJhZ2dhYmxlcyA9IFtdLFxuICB0cmFuc2Zvcm1Qcm9wZXJ0eSA9IGdldFN0eWxlUHJvcGVydHkoJ3RyYW5zZm9ybScpLFxuICB0cmFuc2l0aW9uUHJvcGVydHkgPSBnZXRTdHlsZVByb3BlcnR5KCd0cmFuc2l0aW9uJylcblxuZnVuY3Rpb24gZ2V0VG91Y2hCeUlEKGVsZW1lbnQsIHRvdWNoSWQpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50LmNoYW5nZWRUb3VjaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGVsZW1lbnQuY2hhbmdlZFRvdWNoZXNbaV0uaWRlbnRpZmllciA9PT0gdG91Y2hJZCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQuY2hhbmdlZFRvdWNoZXNbaV1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmZ1bmN0aW9uIHByZXZlbnREb3VibGVJbml0KGRyYWdnYWJsZSkge1xuICBjb25zdCBtZXNzYWdlID0gXCJmb3IgdGhpcyBlbGVtZW50IERyYWdlZS5EcmFnZ2FibGUgaXMgYWxyZWFkeSBleGlzdCwgZG9uJ3QgY3JlYXRlIGl0IHR3aWNlIFwiXG4gIGlmIChkcmFnZ2FibGVzLnNvbWUoKGV4aXN0aW5nKSA9PiBkcmFnZ2FibGUuZWxlbWVudCA9PT0gZXhpc3RpbmcuZWxlbWVudCkpIHtcbiAgICB0aHJvdyBtZXNzYWdlXG4gIH1cbiAgZHJhZ2dhYmxlcy5wdXNoKGRyYWdnYWJsZSlcbn1cblxuZnVuY3Rpb24gYWRkVG9EZWZhdWx0U2NvcGUoZHJhZ2dhYmxlKSB7XG4gIGRlZmF1bHRTY29wZS5hZGREcmFnZ2FibGUoZHJhZ2dhYmxlKVxufVxuXG5jbGFzcyBEcmFnZ2FibGUge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBvcHRpb25zPXt9KSB7XG4gICAgY29uc3QgcGFyZW50ID0gb3B0aW9ucy5wYXJlbnQgfHwgZ2V0RGVmYXVsdFBhcmVudChlbGVtZW50KVxuICAgIHRoaXMudGFyZ2V0cyA9IFtdXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBwYXJlbnQ6IHBhcmVudCxcbiAgICAgIGJvdW5kOiBib3VuZFRvRWxlbWVudChwYXJlbnQsIHBhcmVudCksXG4gICAgICBzdGFydEZpbHRlcjogZmFsc2UsXG4gICAgICBpc0NvbnRlbnRCb3hTaXplOiBmYWxzZSxcbiAgICAgIHBvc2l0aW9uOiBmYWxzZVxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0aGlzLm9uRW5kID0gbmV3IERyYWdlZS5FdmVudCh0aGlzLCB7IGlzUmV2ZXJzZTogdHJ1ZSwgaXNTdG9wT25UcnVlOiB0cnVlIH0pXG4gICAgdGhpcy5vbk1vdmUgPSBuZXcgRHJhZ2VlLkV2ZW50KHRoaXMpXG4gICAgdGhpcy5vblN0YXJ0ID0gbmV3IERyYWdlZS5FdmVudCh0aGlzKVxuXG4gICAgdGhpcy5vbkVuZC5hZGQoKCkgPT4gdGhpcy5tb3ZlKHRoaXMucG9zaXRpb24sIDAsIHRydWUsIHRydWUpKVxuXG4gICAgaWYgKG9wdGlvbnMub25FbmQpIHtcbiAgICAgIHRoaXMub25FbmQuYWRkKG9wdGlvbnMub25FbmQpXG4gICAgfVxuICAgIGlmIChvcHRpb25zLm9uTW92ZSkge1xuICAgICAgdGhpcy5vbk1vdmUuYWRkKG9wdGlvbnMub25Nb3ZlKVxuICAgIH1cbiAgICBpZiAob3B0aW9ucy5vblN0YXJ0KSB7XG4gICAgICB0aGlzLm9uU3RhcnQuYWRkKG9wdGlvbnMub25TdGFydClcbiAgICB9XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIHRoaXMuYm91bmQgPSB0aGlzLm9wdGlvbnMuYm91bmRcbiAgICBwcmV2ZW50RG91YmxlSW5pdCh0aGlzKVxuICAgIERyYWdnYWJsZS5vbkNyZWF0ZS5maXJlKHRoaXMpXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5fZW5hYmxlID0gdHJ1ZVxuICAgIHRoaXMub2Zmc2V0ID0gR2VvbWV0cnkuZ2V0T2Zmc2V0KHRoaXMuZWxlbWVudCwgdGhpcy5vcHRpb25zLnBhcmVudCwgdHJ1ZSlcbiAgICB0aGlzLmZpeFBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICBpZiAodGhpcy5vcHRpb25zLnBvc2l0aW9uKSB7XG4gICAgICB0aGlzLmluaXRQb3NpdGlvbiA9IHRoaXMub3B0aW9ucy5wb3NpdGlvblxuICAgICAgdGhpcy5tb3ZlKHRoaXMuaW5pdFBvc2l0aW9uLCAwLCB0cnVlLCB0cnVlKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmluaXRQb3NpdGlvbiA9IHRoaXMub2Zmc2V0XG4gICAgfVxuICAgIHRoaXMuX2RyYWdTdGFydCA9IHRoaXMuZHJhZ1N0YXJ0LmJpbmQodGhpcylcbiAgICB0aGlzLl9kcmFnTW92ZSA9IHRoaXMuZHJhZ01vdmUuYmluZCh0aGlzKVxuICAgIHRoaXMuX2RyYWdFbmQgPSB0aGlzLmRyYWdFbmQuYmluZCh0aGlzKVxuXG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydClcbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0KVxuXG4gICAgaWYgKHRoaXMuYm91bmQucmVmcmVzaCkge1xuICAgICAgdGhpcy5ib3VuZC5yZWZyZXNoKClcbiAgICB9XG4gIH1cblxuICByZWluaXQoKSB7XG4gICAgdGhpcy5vZmZzZXQgPSBHZW9tZXRyeS5nZXRPZmZzZXQodGhpcy5lbGVtZW50LCB0aGlzLm9wdGlvbnMucGFyZW50LCB0cnVlKVxuICAgIHRoaXMuZml4UG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICAgIGlmICh0aGlzLm9wdGlvbnMucG9zaXRpb24pIHtcbiAgICAgIHRoaXMuaW5pdFBvc2l0aW9uID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uXG4gICAgICB0aGlzLm1vdmUodGhpcy5pbml0UG9zaXRpb24sIDAsIHRydWUsIHRydWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5pdFBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICB9XG5cbiAgICBpZiAodGhpcy5ib3VuZC5yZWZyZXNoKSB7XG4gICAgICB0aGlzLmJvdW5kLnJlZnJlc2goKVxuICAgIH1cbiAgfVxuXG4gIGdldFNpemUoX3JlY2FsdWxhdGUpIHtcbiAgICByZXR1cm4gR2VvbWV0cnkuZ2V0U2l6ZU9mRWxlbWVudCh0aGlzLmVsZW1lbnQsIHRoaXMub3B0aW9ucy5pc0NvbnRlbnRCb3hTaXplKVxuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMub2Zmc2V0LmFkZCh0aGlzLl90cmFuc2Zvcm1Qb3NpdGlvbiB8fCBuZXcgUG9pbnQoMCwgMCkpXG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25cbiAgfVxuXG4gIGdldENlbnRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi5hZGQodGhpcy5nZXRTaXplKCkubXVsdCgwLjUpKVxuICB9XG5cbiAgX3NldFRyYW5zbGF0ZShwb2ludCkge1xuICAgIHRoaXMuX3RyYW5zZm9ybVBvc2l0aW9uID0gcG9pbnRcblxuICAgIGxldCB0cmFuc2Zvcm0gPSB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcGVydHldXG4gICAgbGV0IHRyYW5zbGF0ZUNzcyA9ICcgdHJhbnNsYXRlM2QoJyArIHBvaW50LnggKyAncHgsJyArIHBvaW50LnkgKyAncHgsIDBweCknXG5cbiAgICBjb25zdCB1YSA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50XG4gICAgY29uc3QgbXNpZSA9IHVhLmluZGV4T2YoJ01TSUUgJylcblxuICAgIGlmIChtc2llKSB7XG4gICAgICB0cmFuc2xhdGVDc3MgPSAnIHRyYW5zbGF0ZSgnICsgcG9pbnQueCArICdweCwnICsgcG9pbnQueSArICdweCknXG4gICAgICBpZiAoIS90cmFuc2xhdGVcXChbXildK1xcKS8udGVzdCh0cmFuc2Zvcm0pKSB7XG4gICAgICAgIHRyYW5zZm9ybSArPSB0cmFuc2xhdGVDc3NcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyYW5zZm9ybSA9IHRyYW5zZm9ybS5yZXBsYWNlKC90cmFuc2xhdGVcXChbXildK1xcKS8sIHRyYW5zbGF0ZUNzcylcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCEvdHJhbnNsYXRlM2RcXChbXildK1xcKS8udGVzdCh0cmFuc2Zvcm0pKSB7XG4gICAgICAgIHRyYW5zZm9ybSArPSB0cmFuc2xhdGVDc3NcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyYW5zZm9ybSA9IHRyYW5zZm9ybS5yZXBsYWNlKC90cmFuc2xhdGUzZFxcKFteKV0rXFwpLywgdHJhbnNsYXRlQ3NzKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wZXJ0eV0gPSB0cmFuc2Zvcm1cbiAgfVxuXG4gIG1vdmUocG9pbnQsIHRpbWU9MCwgaXNGaXg9ZmFsc2UsIGlzU2lsZW50PWZhbHNlKSB7XG4gICAgcG9pbnQgPSBwb2ludC5jbG9uZSgpXG4gICAgaWYgKGlzRml4KSB7XG4gICAgICB0aGlzLmZpeFBvc2l0aW9uID0gcG9pbnRcbiAgICB9XG5cbiAgICB0aGlzLmRldGVybWluZURpcmVjdGlvbihwb2ludClcblxuICAgIHRoaXMucG9zaXRpb24gPSBwb2ludFxuXG4gICAgaWYgKHRyYW5zaXRpb25Qcm9wZXJ0eSkge1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV0gPSB0aW1lICsgJ21zJ1xuICAgIH1cblxuICAgIHRoaXMuX3NldFRyYW5zbGF0ZShwb2ludC5zdWIodGhpcy5vZmZzZXQpKVxuICAgIGlmICghaXNTaWxlbnQpIHtcbiAgICAgIHRoaXMub25Nb3ZlLmZpcmUoKVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hQb3NpdGlvbiAoKSB7XG4gICAgdGhpcy5zZXRQb3NpdGlvbih0aGlzLmdldFBvc2l0aW9uKCkpXG4gIH1cblxuICBzZXRQb3NpdGlvbihwb2ludCkge1xuICAgIHBvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIHRoaXMucG9zaXRpb24gPSBwb2ludFxuXG4gICAgaWYgKHRyYW5zaXRpb25Qcm9wZXJ0eSkge1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV0gPSAnMG1zJ1xuICAgIH1cblxuICAgIHRoaXMuX3NldFRyYW5zbGF0ZShwb2ludC5zdWIodGhpcy5vZmZzZXQpKVxuICB9XG5cbiAgc2V0WmVyb1RyYW5zaXRpb24oKSB7XG4gICAgaWYgKHRyYW5zaXRpb25Qcm9wZXJ0eSkge1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV0gPSAnMG1zJ1xuICAgIH1cbiAgfVxuXG4gIGRldGVybWluZURpcmVjdGlvbihwb2ludCkge1xuICAgIHRoaXMubGVmdERpcmVjdGlvbiA9ICh0aGlzLnBvc2l0aW9uLnggPCBwb2ludC54KVxuICAgIHRoaXMucmlnaHREaXJlY3Rpb24gPSAodGhpcy5wb3NpdGlvbi54ID4gcG9pbnQueClcbiAgICB0aGlzLnVwRGlyZWN0aW9uID0gKHRoaXMucG9zaXRpb24ueSA+IHBvaW50LnkpXG4gICAgdGhpcy5kb3duRGlyZWN0aW9uID0gKHRoaXMucG9zaXRpb24ueSA8IHBvaW50LnkpXG4gIH1cblxuICBkcmFnU3RhcnQoZXZlbnQpIHtcbiAgICB0aGlzLmN1cnJlbnRFdmVudCA9IGV2ZW50XG4gICAgaWYgKCF0aGlzLl9lbmFibGUgfHwgKHRoaXMub3B0aW9ucy5zdGFydEZpbHRlciAmJiAhdGhpcy5vcHRpb25zLnN0YXJ0RmlsdGVyKGV2ZW50KSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGlzVG91Y2hFdmVudCA9IChpc1RvdWNoICYmIChldmVudCBpbnN0YW5jZW9mIHdpbmRvdy5Ub3VjaEV2ZW50KSlcblxuICAgIHRoaXMuX3N0YXJ0VG91Y2hQb2ludCA9IG5ldyBQb2ludChpc1RvdWNoRXZlbnQgPyBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCA6IGV2ZW50LmNsaWVudFgsIGlzVG91Y2hFdmVudCA/IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZIDogZXZlbnQuY2xpZW50WSlcblxuICAgIHRoaXMuX3N0YXJ0UG9zaXRpb24gPSB0aGlzLmdldFBvc2l0aW9uKClcbiAgICBpZiAoaXNUb3VjaEV2ZW50KSB7XG4gICAgICB0aGlzLl90b3VjaElkID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uaWRlbnRpZmllclxuICAgIH1cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGlmICghKGV2ZW50LnRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSW5wdXRFbGVtZW50IHx8XG4gICAgICAgICAgZXZlbnQudGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJbnB1dEVsZW1lbnQpKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfSBlbHNlIHtcbiAgICAgIGV2ZW50LnRhcmdldC5mb2N1cygpXG4gICAgfVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG5cbiAgICB0aGlzLmlzRHJhZ2dpbmcgPSB0cnVlXG5cbiAgICB0aGlzLm9uU3RhcnQuZmlyZShldmVudClcbiAgICBhZGRDbGFzcyh0aGlzLmVsZW1lbnQsICdhY3RpdmUnKVxuICAgIHRoaXMub25Nb3ZlLmZpcmUoZXZlbnQpXG4gIH1cblxuICBkcmFnTW92ZShldmVudCkge1xuICAgIHRoaXMuY3VycmVudEV2ZW50ID0gZXZlbnRcbiAgICBsZXQgdG91Y2hcblxuICAgIGNvbnN0IGlzVG91Y2hFdmVudCA9IChpc1RvdWNoICYmIChldmVudCBpbnN0YW5jZW9mIHdpbmRvdy5Ub3VjaEV2ZW50KSlcbiAgICBpZiAoaXNUb3VjaEV2ZW50KSB7XG4gICAgICB0b3VjaCA9IGdldFRvdWNoQnlJRChldmVudCwgdGhpcy5fdG91Y2hJZClcblxuICAgICAgaWYgKCF0b3VjaCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zdCB0b3VjaFBvaW50ID0gbmV3IFBvaW50KGlzVG91Y2hFdmVudCA/IHRvdWNoLnBhZ2VYIDogZXZlbnQuY2xpZW50WCwgaXNUb3VjaEV2ZW50ID8gdG91Y2gucGFnZVkgOiBldmVudC5jbGllbnRZKVxuICAgIGxldCBwb2ludCA9IHRoaXMuX3N0YXJ0UG9zaXRpb24uYWRkKHRvdWNoUG9pbnQuc3ViKHRoaXMuX3N0YXJ0VG91Y2hQb2ludCkpXG4gICAgcG9pbnQgPSB0aGlzLmJvdW5kKHBvaW50LCB0aGlzLmdldFNpemUoKSlcbiAgICB0aGlzLnRvdWNoUG9pbnQgPSB0b3VjaFBvaW50XG4gICAgdGhpcy5tb3ZlKHBvaW50LCAwKVxuICB9XG5cbiAgZHJhZ0VuZChldmVudCkge1xuICAgIGNvbnN0IGlzVG91Y2hFdmVudCA9IChpc1RvdWNoICYmIChldmVudCBpbnN0YW5jZW9mIHdpbmRvdy5Ub3VjaEV2ZW50KSlcblxuICAgIGlmIChpc1RvdWNoRXZlbnQgJiYgIWdldFRvdWNoQnlJRChldmVudCwgdGhpcy5fdG91Y2hJZCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIHRoaXMub25FbmQuZmlyZShldmVudClcblxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcblxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuXG4gICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2VcbiAgICByZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnQsICdhY3RpdmUnKVxuICB9XG5cbiAgZ2V0UmVjdGFuZ2xlKCkge1xuICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHRoaXMucG9zaXRpb24sIHRoaXMuZ2V0U2l6ZSgpKVxuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLmdldFNpemUodHJ1ZSlcbiAgICBpZiAodGhpcy5ib3VuZC5yZWZyZXNoKSB7XG4gICAgICB0aGlzLmJvdW5kLnJlZnJlc2goKVxuICAgIH1cbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydClcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0KVxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG5cbiAgICB0aGlzLm9uRW5kLnJlc2V0KClcbiAgICB0aGlzLm9uTW92ZS5yZXNldCgpXG4gIH1cblxuICBnZXQgZW5hYmxlKCkge1xuICAgIHJldHVybiB0aGlzLl9lbmFibGVcbiAgfVxuXG4gIHNldCBlbmFibGUoZW5hYmxlKSB7XG4gICAgaWYgKGVuYWJsZSkge1xuICAgICAgcmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50LCAnZGlzYWJsZScpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFkZENsYXNzKHRoaXMuZWxlbWVudCwgJ2Rpc2FibGUnKVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9lbmFibGUgPSBlbmFibGVcbiAgfVxufVxuXG5EcmFnZ2FibGUub25DcmVhdGUgPSBuZXcgRHJhZ2VlLkV2ZW50KERyYWdnYWJsZSwgeyBpc1JldmVyc2U6IHRydWUsIGlzU3RvcE9uVHJ1ZTogdHJ1ZSB9KVxuRHJhZ2dhYmxlLm9uQ3JlYXRlLmFkZChhZGRUb0RlZmF1bHRTY29wZSlcblxuZXhwb3J0IHsgRHJhZ2dhYmxlLCBkcmFnZ2FibGVzLCBldmVudHMgfVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmZ1bmN0aW9uIEV2ZW50KGNvbnRleHQsIG9wdGlvbnMgPSB7fSkge1xuICB0aGlzLmZ1bmNzID0gW11cbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dFxuICB0aGlzLmlzUmV2ZXJzZSA9IG9wdGlvbnMuaXNSZXZlcnNlIHx8IGZhbHNlXG4gIHRoaXMuaXNTdG9wT25UcnVlID0gb3B0aW9ucy5pc1N0b3BPblRydWUgfHwgZmFsc2Vcbn1cblxuRXZlbnQucHJvdG90eXBlLmZpcmUgPSBmdW5jdGlvbigpIHtcbiAgY29uc3QgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKVxuICBjb25zdCBmcyA9IHRoaXMuaXNSZXZlcnNlID8gdGhpcy5mdW5jcy5zbGljZSgpLnJldmVyc2UoKSA6IHRoaXMuZnVuY3NcbiAgbGV0IHJldFZhbHVlXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBmcy5sZW5ndGg7IGkrKykge1xuICAgIHJldFZhbHVlID0gZnNbaV0uYXBwbHkodGhpcy5jb250ZXh0LCBhcmdzKVxuICAgIGlmICh0aGlzLmlzU3RvcE9uVHJ1ZSAmJiByZXRWYWx1ZSkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gIH1cbiAgcmV0dXJuICF0aGlzLmlzU3RvcE9uVHJ1ZVxufVxuXG5FdmVudC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24oZikge1xuICB0aGlzLmZ1bmNzLnB1c2goZilcbn1cblxuRXZlbnQucHJvdG90eXBlLnVuc2hpZnQgPSBmdW5jdGlvbihmKSB7XG4gIHRoaXMuZnVuY3MudW5zaGlmdChmKVxufVxuXG5FdmVudC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24oZikge1xuICBjb25zdCBpbmRleCA9IHRoaXMuZnVuY3MuaW5kZXhPZihmKVxuICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgdGhpcy5mdW5jcy5zcGxpY2UoaW5kZXgsIDEpXG4gIH1cbn1cblxuRXZlbnQucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24oX2YpIHtcbiAgdGhpcy5mdW5jcyA9IFtdXG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50XG4iLCIvKioqKioqKioqKioqKioqKioqKioqKiogMDBQICoqKioqKioqKioqKioqKioqKioqKioqKiovXG5jb25zdCBhdWdtZW50ID0gZnVuY3Rpb24ocmVjZWl2aW5nQ2xhc3MsIGdpdmluZ0NsYXNzKSB7XG4gICAgLyogb25seSBwcm92aWRlIGNlcnRhaW4gbWV0aG9kcyAqL1xuICBpZiAoYXJndW1lbnRzWzJdKSB7XG4gICAgZm9yIChsZXQgaT0yLCBsZW49YXJndW1lbnRzLmxlbmd0aDsgaTxsZW47IGkrKykge1xuICAgICAgcmVjZWl2aW5nQ2xhc3MucHJvdG90eXBlW2FyZ3VtZW50c1tpXV0gPSBnaXZpbmdDbGFzcy5wcm90b3R5cGVbYXJndW1lbnRzW2ldXVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3IgKGNvbnN0IG1ldGhvZE5hbWUgaW4gZ2l2aW5nQ2xhc3MucHJvdG90eXBlKSB7XG4gICAgICAvKiBjaGVjayB0byBtYWtlIHN1cmUgdGhlIHJlY2VpdmluZyBjbGFzcyBkb2Vzbid0XG4gICAgICAgICBoYXZlIGEgbWV0aG9kIG9mIHRoZSBzYW1lIG5hbWUgYXMgdGhlIG9uZSBjdXJyZW50bHlcbiAgICAgICAgIGJlaW5nIHByb2Nlc3NlZCAqL1xuICAgICAgaWYgKCFyZWNlaXZpbmdDbGFzcy5wcm90b3R5cGVbbWV0aG9kTmFtZV0pIHtcbiAgICAgICAgcmVjZWl2aW5nQ2xhc3MucHJvdG90eXBlW21ldGhvZE5hbWVdID0gZ2l2aW5nQ2xhc3MucHJvdG90eXBlW21ldGhvZE5hbWVdXG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5hdWdtZW50KE5vZGVMaXN0LCBBcnJheSwgJ2ZvckVhY2gnKVxuIiwiY2xhc3MgUG9pbnQge1xuICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgdGhpcy54ID0geFxuICAgIHRoaXMueSA9IHlcbiAgfVxuXG4gIGFkZChwKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnggKyBwLngsIHRoaXMueSArIHAueSlcbiAgfVxuXG4gIHN1YihwKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnggLSBwLngsIHRoaXMueSAtIHAueSlcbiAgfVxuXG4gIG11bHQoaykge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54ICogaywgdGhpcy55ICogaylcbiAgfVxuXG4gIG5lZ2F0aXZlKCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQoLXRoaXMueCwgLXRoaXMueSlcbiAgfVxuXG4gIGNvbXBhcmUocCkge1xuICAgIHJldHVybiAodGhpcy54ID09PSBwLnggJiYgdGhpcy55ID09PSBwLnkpXG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCwgdGhpcy55KVxuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIGB7eD0ke3RoaXMueH0seT0ke3RoaXMueX1gXG4gIH1cbn1cblxuY2xhc3MgUmVjdGFuZ2xlIHtcbiAgY29uc3RydWN0b3IocG9zaXRpb24sIHNpemUpIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb25cbiAgICB0aGlzLnNpemUgPSBzaXplXG4gIH1cblxuICBnZXRQMSgpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvblxuICB9XG5cbiAgZ2V0UDIoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnNpemUueCwgdGhpcy5wb3NpdGlvbi55KVxuICB9XG5cbiAgZ2V0UDMoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb24uYWRkKHRoaXMuc2l6ZSlcbiAgfVxuXG4gIGdldFA0KCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSlcbiAgfVxuXG4gIGdldENlbnRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi5hZGQodGhpcy5zaXplLm11bHQoMC41KSlcbiAgfVxuXG4gIG9yKHJlY3QpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IG5ldyBQb2ludChNYXRoLm1pbih0aGlzLnBvc2l0aW9uLngsIHJlY3QucG9zaXRpb24ueCksIE1hdGgubWluKHRoaXMucG9zaXRpb24ueSwgcmVjdC5wb3NpdGlvbi55KSlcbiAgICBjb25zdCBzaXplID0gKG5ldyBQb2ludChNYXRoLm1heCh0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnNpemUueCwgcmVjdC5wb3NpdGlvbi54ICsgcmVjdC5zaXplLngpLCBNYXRoLm1heCh0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSwgcmVjdC5wb3NpdGlvbi55ICsgcmVjdC5zaXplLnkpKSkuc3ViKHBvc2l0aW9uKVxuICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHBvc2l0aW9uLCBzaXplKVxuICB9XG5cbiAgYW5kKHJlY3QpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IG5ldyBQb2ludChNYXRoLm1heCh0aGlzLnBvc2l0aW9uLngsIHJlY3QucG9zaXRpb24ueCksIE1hdGgubWF4KHRoaXMucG9zaXRpb24ueSwgcmVjdC5wb3NpdGlvbi55KSlcbiAgICBjb25zdCBzaXplID0gKG5ldyBQb2ludChNYXRoLm1pbih0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnNpemUueCwgcmVjdC5wb3NpdGlvbi54ICsgcmVjdC5zaXplLngpLCBNYXRoLm1pbih0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSwgcmVjdC5wb3NpdGlvbi55ICsgcmVjdC5zaXplLnkpKSkuc3ViKHBvc2l0aW9uKVxuICAgIGlmIChzaXplLnggPD0gMCB8fCBzaXplLnkgPD0gMCkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUocG9zaXRpb24sIHNpemUpXG4gIH1cblxuICBpbmNsdWRlUG9pbnQocCkge1xuICAgIHJldHVybiAhKHRoaXMucG9zaXRpb24ueCA+IHAueCB8fCB0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnNpemUueCA8IHAueCB8fCB0aGlzLnBvc2l0aW9uLnkgPiBwLnkgfHwgdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnkgPCBwLnkpXG4gIH1cblxuICBpbmNsdWRlUmVjdGFuZ2xlKHJlY3RhbmdsZSkge1xuICAgIHJldHVybiB0aGlzLmluY2x1ZGVQb2ludChyZWN0YW5nbGUucG9zaXRpb24pICYmIHRoaXMuaW5jbHVkZVBvaW50KHJlY3RhbmdsZS5nZXRQMygpKVxuICB9XG5cbiAgbW92ZVRvQm91bmQocmVjdCwgYXhpcykge1xuICAgIGxldCBzZWxBeGlzLCBjcm9zc1JlY3RhbmdsZVxuICAgIGlmIChheGlzKSB7XG4gICAgICBzZWxBeGlzID0gYXhpc1xuICAgIH0gZWxzZSB7XG4gICAgICBjcm9zc1JlY3RhbmdsZSA9IHRoaXMuYW5kKHJlY3QpXG4gICAgICBpZiAoIWNyb3NzUmVjdGFuZ2xlKSB7XG4gICAgICAgIHJldHVybiByZWN0XG4gICAgICB9XG4gICAgICBzZWxBeGlzID0gY3Jvc3NSZWN0YW5nbGUuc2l6ZS54ID4gY3Jvc3NSZWN0YW5nbGUuc2l6ZS55ID8gJ3knIDogJ3gnXG4gICAgfVxuICAgIGNvbnN0IHRoaXNDZW50ZXIgPSB0aGlzLmdldENlbnRlcigpXG4gICAgY29uc3QgcmVjdENlbnRlciA9IHJlY3QuZ2V0Q2VudGVyKClcbiAgICBjb25zdCBzaWduID0gdGhpc0NlbnRlcltzZWxBeGlzXSA+IHJlY3RDZW50ZXJbc2VsQXhpc10gPyAtMSA6IDFcbiAgICBjb25zdCBvZmZzZXQgPSBzaWduID4gMCA/IHRoaXMucG9zaXRpb25bc2VsQXhpc10gKyB0aGlzLnNpemVbc2VsQXhpc10gLSByZWN0LnBvc2l0aW9uW3NlbEF4aXNdIDogdGhpcy5wb3NpdGlvbltzZWxBeGlzXSAtIChyZWN0LnBvc2l0aW9uW3NlbEF4aXNdICsgcmVjdC5zaXplW3NlbEF4aXNdKVxuICAgIHJlY3QucG9zaXRpb25bc2VsQXhpc10gPSByZWN0LnBvc2l0aW9uW3NlbEF4aXNdICsgb2Zmc2V0XG4gICAgcmV0dXJuIHJlY3RcbiAgfVxuXG4gIGdldFNxdWFyZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zaXplLnggKiB0aGlzLnNpemUueVxuICB9XG5cbiAgc3R5bGVBcHBseShlbCkge1xuICAgIGVsID0gZWwgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5kJylcbiAgICBlbC5zdHlsZS5sZWZ0ID0gdGhpcy5wb3NpdGlvbi54ICsgJ3B4J1xuICAgIGVsLnN0eWxlLnRvcCA9IHRoaXMucG9zaXRpb24ueSArICdweCdcbiAgICBlbC5zdHlsZS53aWR0aCA9IHRoaXMuc2l6ZS54ICsgJ3B4J1xuICAgIGVsLnN0eWxlLmhlaWdodCA9IHRoaXMuc2l6ZS55ICsgJ3B4J1xuICB9XG5cbiAgZ3Jvd3RoKHNpemUpIHtcbiAgICB0aGlzLnNpemUgPSB0aGlzLnNpemUuYWRkKHNpemUpXG4gICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMucG9zaXRpb24uYWRkKHNpemUubXVsdCgtMC41KSlcbiAgfVxuXG4gIGdldE1pblNpZGUoKSB7XG4gICAgcmV0dXJuIE1hdGgubWluKHRoaXMuc2l6ZS54LCB0aGlzLnNpemUueSlcbiAgfVxufVxuXG4vKioqKioqKioqKioqKioqKiovXG5jb25zdCBHZW9tZXRyeSA9IHtcbiAgZ2V0RGlzdGFuY2UocDEsIHAyKSB7XG4gICAgY29uc3QgZHggPSBwMS54IC0gcDIueCwgZHkgPSBwMS55IC0gcDIueVxuICAgIHJldHVybiBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpXG4gIH0sXG4gIGRpc3RhbmNlKHAxLCBwMikge1xuICAgIHJldHVybiBHZW9tZXRyeS5nZXREaXN0YW5jZShwMSwgcDIpXG4gIH0sXG4gIGdldFhEaWZmZXJlbmNlKHAxLCBwMikge1xuICAgIHJldHVybiBNYXRoLmFicyhwMS54IC0gcDIueClcbiAgfSxcbiAgZ2V0WURpZmZlcmVuY2UocDEsIHAyKSB7XG4gICAgcmV0dXJuIE1hdGguYWJzKHAxLnkgLSBwMi55KVxuICB9LFxuICB0cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5KG9wdGlvbnMpIHtcbiAgICByZXR1cm4gKHAxLCBwMikgPT4ge1xuICAgICAgcmV0dXJuIE1hdGguc3FydChcbiAgICAgICAgTWF0aC5wb3cob3B0aW9ucy54ICogTWF0aC5hYnMocDEueCAtIHAyLngpLCAyKSArXG4gICAgICAgIE1hdGgucG93KG9wdGlvbnMueSAqIE1hdGguYWJzKHAxLnkgLSBwMi55KSwgMilcbiAgICAgIClcbiAgICB9XG4gIH0sXG4gIGluZGV4T2ZOZWFyZXN0UG9pbnQoYXJyLCB2YWwsIHJhZGl1cywgZ2V0RGlzdGFuY2UpIHtcbiAgICBsZXQgc2l6ZSwgaW5kZXggPSAwLCBpLCB0ZW1wXG4gICAgZ2V0RGlzdGFuY2UgPSBnZXREaXN0YW5jZSB8fCBHZW9tZXRyeS5nZXREaXN0YW5jZVxuICAgIGlmIChhcnIubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gLTFcbiAgICB9XG4gICAgc2l6ZSA9IGdldERpc3RhbmNlKGFyclswXSwgdmFsKVxuICAgIGZvciAoaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRlbXAgPSBnZXREaXN0YW5jZShhcnJbaV0sIHZhbClcbiAgICAgIGlmICh0ZW1wIDwgc2l6ZSkge1xuICAgICAgICBzaXplID0gdGVtcFxuICAgICAgICBpbmRleCA9IGlcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHJhZGl1cyA+PSAwICYmIHNpemUgPiByYWRpdXMpIHtcbiAgICAgIHJldHVybiAtMVxuICAgIH1cbiAgICByZXR1cm4gaW5kZXhcbiAgfSxcbiAgYm91bmQobWluLCBtYXgsIHZhbCkge1xuICAgIHJldHVybiBNYXRoLm1heChtaW4sIE1hdGgubWluKG1heCwgdmFsKSlcbiAgfSxcbiAgYm91bmRQb2ludChtaW4sIG1heCwgdmFsKSB7XG4gICAgY29uc3QgeCA9IE1hdGgubWF4KG1pbi54LCBNYXRoLm1pbihtYXgueCwgdmFsLngpKVxuICAgIGNvbnN0IHkgPSBNYXRoLm1heChtaW4ueSwgTWF0aC5taW4obWF4LnksIHZhbC55KSlcbiAgICByZXR1cm4gbmV3IFBvaW50KHgsIHkpXG4gIH0sXG4gICAgLy9SZXR1cm4gY3Jvc3NpbmcgcG9pbnQgb2YgdHdvIGxpbmVzXG4gIGRpcmVjdENyb3NzaW5nKEwxUDEsIEwxUDIsIEwyUDEsIEwyUDIpIHtcbiAgICBsZXQgdGVtcCwgazEsIGsyLCBiMSwgYjIsIHgsIHlcbiAgICBpZiAoTDJQMS54ID09PSBMMlAyLngpIHtcbiAgICAgIHRlbXAgPSBMMlAxXG4gICAgICBMMlAxID0gTDFQMVxuICAgICAgTDFQMSA9IHRlbXBcbiAgICAgIHRlbXAgPSBMMlAyXG4gICAgICBMMlAyID0gTDFQMlxuICAgICAgTDFQMiA9IHRlbXBcbiAgICB9XG4gICAgaWYgKEwxUDEueCA9PT0gTDFQMi54KSB7XG4gICAgICBrMiA9IChMMlAyLnkgLSBMMlAxLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICAgIGIyID0gKEwyUDIueCAqIEwyUDEueSAtIEwyUDEueCAqIEwyUDIueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgICAgeCA9IEwxUDEueFxuICAgICAgeSA9IHggKiBrMiArIGIyXG4gICAgICByZXR1cm4gbmV3IFBvaW50KHgsIHkpXG4gICAgfSBlbHNlIHtcbiAgICAgIGsxID0gKEwxUDIueSAtIEwxUDEueSkgLyAoTDFQMi54IC0gTDFQMS54KVxuICAgICAgYjEgPSAoTDFQMi54ICogTDFQMS55IC0gTDFQMS54ICogTDFQMi55KSAvIChMMVAyLnggLSBMMVAxLngpXG4gICAgICBrMiA9IChMMlAyLnkgLSBMMlAxLnkpIC8gKEwyUDIueCAtIEwyUDEueClcbiAgICAgIGIyID0gKEwyUDIueCAqIEwyUDEueSAtIEwyUDEueCAqIEwyUDIueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgICAgeCA9IChiMSAtIGIyKSAvIChrMiAtIGsxKVxuICAgICAgeSA9IHggKiBrMSArIGIxXG4gICAgICByZXR1cm4gbmV3IFBvaW50KHgsIHkpXG4gICAgfVxuICB9LFxuICBib3VuZFRvU2VnbWVudChMUDEsIExQMiwgUCkge1xuICAgIGxldCB4LCB5XG4gICAgeCA9IEdlb21ldHJ5LmJvdW5kKE1hdGgubWluKExQMS54LCBMUDIueCksIE1hdGgubWF4KExQMS54LCBMUDIueCksIFAueClcbiAgICBpZiAoeCAhPT0gUC54KSB7XG4gICAgICB5ID0gKHggPT09IExQMS54KSA/IExQMS55IDogTFAyLnlcbiAgICAgIFAgPSBuZXcgUG9pbnQoeCwgeSlcbiAgICB9XG5cbiAgICB5ID0gR2VvbWV0cnkuYm91bmQoTWF0aC5taW4oTFAxLnksIExQMi55KSwgTWF0aC5tYXgoTFAxLnksIExQMi55KSwgUC55KVxuICAgIGlmICh5ICE9PSBQLnkpIHtcbiAgICAgIHggPSAoeSA9PT0gTFAxLnkpID8gTFAxLnggOiBMUDIueFxuICAgICAgUCA9IG5ldyBQb2ludCh4LCB5KVxuICAgIH1cblxuICAgIHJldHVybiBQXG4gIH0sXG4gIGJvdW5kVG9MaW5lKEEsIEIsIFApIHtcbiAgICBjb25zdCBBUCA9IG5ldyBQb2ludChQLnggLSBBLngsIFAueSAtIEEueSksXG4gICAgICBBQiA9IG5ldyBQb2ludChCLnggLSBBLngsIEIueSAtIEEueSksXG4gICAgICBhYjIgPSBBQi54ICogQUIueCArIEFCLnkgKiBBQi55LFxuICAgICAgYXBfYWIgPSBBUC54ICogQUIueCArIEFQLnkgKiBBQi55LFxuICAgICAgdCA9IGFwX2FiIC8gYWIyXG4gICAgcmV0dXJuIG5ldyBQb2ludChBLnggKyBBQi54ICogdCwgQS55ICsgQUIueSAqIHQpXG4gIH0sXG4gIGdldFBvaW50SW5MaW5lKExQMSwgTFAyLCBwZXJjZW50KSB7XG4gICAgY29uc3QgZHggPSBMUDIueCAtIExQMS54LCBkeSA9IExQMi55IC0gTFAxLnlcbiAgICByZXR1cm4gbmV3IFBvaW50KExQMS54ICsgcGVyY2VudCAqIGR4LCBMUDEueSArIHBlcmNlbnQgKiBkeSlcbiAgfSxcbiAgZ2V0UG9pbnRJbkxpbmVCeUxlbmdodChMUDEsIExQMiwgbGVuZ2h0KSB7XG4gICAgY29uc3QgZHggPSBMUDIueCAtIExQMS54LCBkeSA9IExQMi55IC0gTFAxLnksIHBlcmNlbnQgPSBsZW5naHQgLyBHZW9tZXRyeS5kaXN0YW5jZShMUDEsIExQMilcbiAgICByZXR1cm4gbmV3IFBvaW50KExQMS54ICsgcGVyY2VudCAqIGR4LCBMUDEueSArIHBlcmNlbnQgKiBkeSlcbiAgfSxcbiAgY3JlYXRlUmVjdGFuZ2xlRnJvbUVsZW1lbnQoZWwsIHBhcmVudCwgaXNDb250ZW50Qm94U2l6ZSwgaXNDb25zaWRlclRyYW5zbGF0ZSkge1xuICAgIGNvbnN0IHNpemUgPSB0aGlzLmdldFNpemVPZkVsZW1lbnQoZWwsIGlzQ29udGVudEJveFNpemUpXG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUodGhpcy5nZXRPZmZzZXQoZWwsIHBhcmVudCB8fCBlbC5wYXJlbnROb2RlLCBpc0NvbnNpZGVyVHJhbnNsYXRlKSwgc2l6ZSlcbiAgfSxcbiAgZ2V0U3VtVmFsdWVPZlN0eWxlUnVsZShlbGVtZW50LCBydWxlcykge1xuICAgIHJldHVybiBydWxlcy5yZWR1Y2UoKHN1bSwgcnVsZSkgPT4ge1xuICAgICAgcmV0dXJuIHN1bSArIHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpW3J1bGVdfHwwKVxuICAgIH0sIDApXG4gIH0sXG4gIGdldFNpemVPZkVsZW1lbnQoZWwsIGlzQ29udGVudEJveFNpemUpIHtcbiAgICBsZXQgd2lkdGggPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbClbJ3dpZHRoJ10pLCBoZWlnaHQgPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbClbJ2hlaWdodCddKVxuICAgIGlmICghaXNDb250ZW50Qm94U2l6ZSkge1xuICAgICAgd2lkdGggKz0gdGhpcy5nZXRTdW1WYWx1ZU9mU3R5bGVSdWxlKGVsLCBbJ3BhZGRpbmctbGVmdCcsICdwYWRkaW5nLXJpZ2h0JywgJ2JvcmRlci1sZWZ0LXdpZHRoJywgJ2JvcmRlci1yaWdodC13aWR0aCddKVxuICAgICAgaGVpZ2h0ICs9IHRoaXMuZ2V0U3VtVmFsdWVPZlN0eWxlUnVsZShlbCwgWydwYWRkaW5nLXRvcCcsICdwYWRkaW5nLWJvdHRvbScsICdib3JkZXItdG9wLXdpZHRoJywgJ2JvcmRlci1ib3R0b20td2lkdGgnXSlcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBQb2ludCh3aWR0aCwgaGVpZ2h0KVxuICB9LFxuICBnZXRPZmZzZXQoZWwsIHBhcmVudCkge1xuICAgIGNvbnN0IGVsUmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLCBwYXJlbnRSZWN0ID0gcGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgcmV0dXJuIG5ldyBQb2ludChlbFJlY3QubGVmdCAtIHBhcmVudFJlY3QubGVmdCwgZWxSZWN0LnRvcCAtIHBhcmVudFJlY3QudG9wKVxuICB9LFxuICBnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oYW5nbGUsIGxlbmd0aCwgY2VudGVyKSB7XG4gICAgY2VudGVyID0gY2VudGVyIHx8IG5ldyBQb2ludCgwLCAwKVxuICAgIHJldHVybiBjZW50ZXIuYWRkKG5ldyBQb2ludChsZW5ndGggKiBNYXRoLmNvcyhhbmdsZSksIGxlbmd0aCAqIE1hdGguc2luKGFuZ2xlKSkpXG4gIH0sXG4gIGFkZFBvaW50VG9Cb3VuZFBvaW50cyhib3VuZHBvaW50cywgcG9pbnQsIGlzUmlnaHQpIHtcbiAgICBjb25zdCByZXN1bHQgPSBib3VuZHBvaW50cy5maWx0ZXIoZnVuY3Rpb24oYlBvaW50KSB7XG4gICAgICByZXR1cm4gIGJQb2ludC55ID4gcG9pbnQueSB8fCAoaXNSaWdodCA/IGJQb2ludC54IDwgcG9pbnQueCA6IGJQb2ludC54ID4gcG9pbnQueClcbiAgICB9KVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChwb2ludC55IDwgcmVzdWx0W2ldLnkpIHtcbiAgICAgICAgcmVzdWx0LnNwbGljZShpLCAwLCBwb2ludClcbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgICAgfVxuICAgIH1cbiAgICByZXN1bHQucHVzaChwb2ludClcbiAgICByZXR1cm4gcmVzdWx0XG4gIH0sXG4gIGdldEFuZ2xlKHAxLCBwMikge1xuICAgIGNvbnN0IGRpZmYgPSBwMi5zdWIocDEpXG4gICAgcmV0dXJuIHRoaXMubm9ybWFsaXplQW5nbGUoTWF0aC5hdGFuMihkaWZmLnksIGRpZmYueCkpXG4gIH0sXG4gIHRvUmFkaWFuKGFuZ2xlKSB7XG4gICAgcmV0dXJuICgoYW5nbGUgJSAzNjApICogTWF0aC5QSSAvIDE4MClcbiAgfSxcbiAgdG9EZWdyZWUoYW5nbGUpIHtcbiAgICByZXR1cm4gKGFuZ2xlICogMTgwIC8gTWF0aC5QSSkgJSAzNjBcbiAgfSxcbiAgYm91bmRBbmdsZShtaW4sIG1heCwgdmFsKSB7XG4gICAgbGV0IGRtaW4sIGRtYXhcbiAgICBpZiAobWluIDwgbWF4ICYmIHZhbCA+IG1pbiAmJiB2YWwgPCBtYXgpIHtcbiAgICAgIHJldHVybiB2YWxcbiAgICB9IGVsc2UgaWYgKG1heCA8IG1pbiAmJiAodmFsIDwgbWF4IHx8IHZhbCA+IG1pbikpIHtcbiAgICAgIHJldHVybiB2YWxcbiAgICB9IGVsc2Uge1xuICAgICAgZG1pbiA9IHRoaXMuZ2V0QW5nbGVEaWZmKG1pbiwgdmFsKVxuICAgICAgZG1heCA9IHRoaXMuZ2V0QW5nbGVEaWZmKG1heCwgdmFsKVxuICAgICAgaWYgKGRtaW4gPCBkbWF4KSB7XG4gICAgICAgIHJldHVybiBtaW5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBtYXhcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGdldE5lYXJlc3RBbmdsZShhcnIsIGFuZ2xlKSB7XG4gICAgbGV0IGksIHRlbXAsIGRpZmYgPSBNYXRoLlBJICogMiwgdmFsdWVcbiAgICBmb3IgKGkgPSAwOyBpIDwgYXJyLmxlbmd0aDtpKyspIHtcbiAgICAgIHRlbXAgPSBHZW9tZXRyeS5nZXRBbmdsZURpZmYoYXJyW2ldLCBhbmdsZSlcbiAgICAgIGlmIChkaWZmIDwgdGVtcCkge1xuICAgICAgICBkaWZmID0gdGVtcFxuICAgICAgICB2YWx1ZSA9IGFycltpXVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdmFsdWVcbiAgfSxcbiAgZ2V0QW5nbGVEaWZmKGFscGhhLCBiZXRhKSB7XG4gICAgY29uc3QgbWluQW5nbGUgPSBNYXRoLm1pbihhbHBoYSwgYmV0YSksXG4gICAgICBtYXhBbmdsZSA9ICBNYXRoLm1heChhbHBoYSwgYmV0YSlcbiAgICByZXR1cm4gTWF0aC5taW4obWF4QW5nbGUgLSBtaW5BbmdsZSwgbWluQW5nbGUgKyBNYXRoLlBJKjIgLSBtYXhBbmdsZSlcbiAgfSxcbiAgbm9ybWFsaXplQW5nbGUodmFsKSB7XG4gICAgd2hpbGUgKHZhbCA8IDApIHtcbiAgICAgIHZhbCArPSAyICogTWF0aC5QSVxuICAgIH1cbiAgICB3aGlsZSAodmFsID4gMiAqIE1hdGguUEkpIHtcbiAgICAgIHZhbCAtPSAyICogTWF0aC5QSVxuICAgIH1cbiAgICByZXR1cm4gdmFsXG4gIH1cbn1cblxuZXhwb3J0IHsgUG9pbnQsIFJlY3RhbmdsZSwgR2VvbWV0cnkgfVxuIiwiaW1wb3J0ICcuL2V4cGFuZG5hdGl2ZSdcbmltcG9ydCB7IFBvaW50LCBSZWN0YW5nbGUsIEdlb21ldHJ5IH0gZnJvbSAnLi9nZW9tZXRyeSdcbmltcG9ydCB7IERyYWdnYWJsZSB9IGZyb20gJy4vZHJhZ2dhYmxlJ1xuaW1wb3J0IHsgTGlzdCwgbGlzdEZhY3RvcnkgfSBmcm9tICcuL2xpc3QnXG5pbXBvcnQgeyBTb3J0YWJsZSwgc29ydGFibGVGYWN0b3J5IH0gZnJvbSAnLi9zb3J0YWJsZSdcbmltcG9ydCB7IHRhcmdldHMsIFRhcmdldCB9IGZyb20gJy4vdGFyZ2V0J1xuaW1wb3J0IHsgc2NvcGVzLCBkZWZhdWx0U2NvcGUsIFNjb3BlLCBzY29wZUZhY3RvcnksIHNjb3BlIH0gZnJvbSAnLi9zY29wZSdcbmltcG9ydCB7IHBvc2l0aW9uVHlwZSwgc29ydGluZ0ZhY3RvcnksIHBvc2l0aW9uRmFjdG9yeSAgfSBmcm9tICcuL3Bvc2l0aW9uaW5nJ1xuaW1wb3J0IHsgc3BpZGVycywgU3BpZGVyIH0gZnJvbSAnLi9zcGlkZXInXG5pbXBvcnQgeyBhcmNTbGlkZXJzLCBBcmNTbGlkZXIgfSBmcm9tICcuL2FyY3NsaWRlcidcbmltcG9ydCB7IGNoYXJ0cywgQ2hhcnQgfSBmcm9tICcuL2NoYXJ0J1xuaW1wb3J0IHsgbGlzdFN3aXRjaGVyRmFjdG9yeSwgTGlzdFN3aXRjaGVyIH0gZnJvbSAnLi9saXN0c3dpdGNoZXInXG5cbmV4cG9ydCB7IERyYWdnYWJsZSxcbiAgUG9pbnQsIFJlY3RhbmdsZSwgR2VvbWV0cnksXG4gIExpc3QsIGxpc3RGYWN0b3J5LFxuICBTb3J0YWJsZSwgc29ydGFibGVGYWN0b3J5LFxuICB0YXJnZXRzLCBUYXJnZXQsXG4gIHNjb3BlcywgZGVmYXVsdFNjb3BlLCBTY29wZSwgc2NvcGVGYWN0b3J5LCBzY29wZSxcbiAgcG9zaXRpb25UeXBlLCBzb3J0aW5nRmFjdG9yeSwgcG9zaXRpb25GYWN0b3J5LFxuICBzcGlkZXJzLCBTcGlkZXIsXG4gIGFyY1NsaWRlcnMsIEFyY1NsaWRlcixcbiAgY2hhcnRzLCBDaGFydCxcbiAgbGlzdFN3aXRjaGVyRmFjdG9yeSwgTGlzdFN3aXRjaGVyXG59XG4iLCJjb25zdCBsaXN0cyA9IFtdXG5cbmltcG9ydCByZW1vdmVJdGVtcyBmcm9tICdyZW1vdmUtYXJyYXktaXRlbXMnXG5pbXBvcnQgRXZlbnQgZnJvbSAnLi9ldmVudCdcbmltcG9ydCB7IEdlb21ldHJ5IH0gZnJvbSAnLi9nZW9tZXRyeSdcbmltcG9ydCB7IERyYWdnYWJsZSB9IGZyb20gJy4vZHJhZ2dhYmxlJ1xuXG5jb25zdCBEcmFnZWUgPSB7IEV2ZW50IH0gLy90b2RvIHJlbW92ZSBhZnRlciByZWZhY3RvcmVcblxuY2xhc3MgTGlzdCB7XG4gIGNvbnN0cnVjdG9yKGRyYWdnYWJsZXMsIG9wdGlvbnM9e30pIHtcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHRpbWVFbmQ6IDIwMCxcbiAgICAgIHRpbWVFeGNhbmdlOiA0MDAsXG4gICAgICByYWRpdXM6IDMwLFxuICAgICAgZ2V0RGlzdGFuY2U6IEdlb21ldHJ5LmdldERpc3RhbmNlLFxuICAgICAgaXNEaXNwbGFjZW1lbnQ6IGZhbHNlLFxuICAgICAgaXNTb3J0YWJsZTogdHJ1ZVxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0aGlzLmRyYWdnYWJsZXMgPSBkcmFnZ2FibGVzXG4gICAgbGlzdHMucHVzaCh0aGlzKVxuICAgIHRoaXMub25DaGFuZ2UgPSBuZXcgRHJhZ2VlLkV2ZW50KHRoaXMpXG4gICAgaWYgKG9wdGlvbnMub25DaGFuZ2UpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UuYWRkKG9wdGlvbnMub25DaGFuZ2UpXG4gICAgfVxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuX2VuYWJsZSA9IHRydWVcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCh0aGlzLmluaXREcmFnZ2FibGUsIHRoaXMpXG4gIH1cblxuICBpbml0RHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIGxldCBtb3ZlSGFuZGxlclxuICAgIGNvbnN0IGxpc3QgPSB0aGlzXG5cbiAgICBkcmFnZ2FibGUuZW5hYmxlID0gdGhpcy5fZW5hYmxlXG4gICAgaWYgKHRoaXMub3B0aW9ucy5pc0Rpc3BsYWNlbWVudCkge1xuICAgICAgbW92ZUhhbmRsZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKGRyYWdnYWJsZS5pc0RyYWdnaW5nKSB7XG4gICAgICAgICAgbGlzdC5vblN0YXJ0KGRyYWdnYWJsZSlcbiAgICAgICAgICBkcmFnZ2FibGUub25Nb3ZlLnJlbW92ZShtb3ZlSGFuZGxlcilcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGRyYWdnYWJsZS5vbkVuZC5hZGQoKCkgPT4ge1xuICAgICAgICB0aGlzLm9uRW5kRGlzcGxheWNlbWVudChkcmFnZ2FibGUpXG4gICAgICAgIGRyYWdnYWJsZS5vbk1vdmUuYWRkKG1vdmVIYW5kbGVyKVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfSlcblxuICAgICAgZHJhZ2dhYmxlLm9uTW92ZS5hZGQobW92ZUhhbmRsZXIpXG4gICAgfSBlbHNlIHtcbiAgICAgIGRyYWdnYWJsZS5vbkVuZC5hZGQoKCkgPT4ge1xuICAgICAgICB0aGlzLm9uRW5kKGRyYWdnYWJsZSlcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgbW92ZU9yU2F2ZShkcmFnZ2FibGUsIHBvc2l0aW9uLCB0aW1lKSB7XG4gICAgaWYgKGRyYWdnYWJsZS5pc0RyYWdnaW5nKSB7XG4gICAgICBkcmFnZ2FibGUuZml4UG9zaXRpb24gPSBwb3NpdGlvblxuICAgIH0gZWxzZSB7XG4gICAgICBkcmFnZ2FibGUubW92ZShwb3NpdGlvbiwgdGltZSwgdHJ1ZSlcbiAgICB9XG4gIH1cblxuICBvbkVuZChkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBmaXhQb3NpdGlvbnMgPSB0aGlzLmdldEN1cnJlbnRGaXhQb3NpdGlvbigpXG4gICAgY29uc3QgY3VycmVudEluZGV4ID0gdGhpcy5kcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKVxuICAgIGNvbnN0IGV4Y2FuZ2VJbmRleCA9IEdlb21ldHJ5LmluZGV4T2ZOZWFyZXN0UG9pbnQoZml4UG9zaXRpb25zLCBkcmFnZ2FibGUucG9zaXRpb24sIHRoaXMub3B0aW9ucy5yYWRpdXMsIHRoaXMub3B0aW9ucy5nZXREaXN0YW5jZSlcblxuICAgIGlmIChleGNhbmdlSW5kZXggPT09IC0xIHx8IGV4Y2FuZ2VJbmRleCA9PT0gY3VycmVudEluZGV4KSB7XG4gICAgICBkcmFnZ2FibGUubW92ZShkcmFnZ2FibGUuZml4UG9zaXRpb24sIHRoaXMub3B0aW9ucy50aW1lRW5kLCB0cnVlKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1vdmVPclNhdmUodGhpcy5kcmFnZ2FibGVzW2V4Y2FuZ2VJbmRleF0sIGZpeFBvc2l0aW9uc1tjdXJyZW50SW5kZXhdLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICB0aGlzLmRyYWdnYWJsZXNbY3VycmVudEluZGV4XS5tb3ZlKGZpeFBvc2l0aW9uc1tleGNhbmdlSW5kZXhdLCB0aGlzLm9wdGlvbnMudGltZUVuZCwgdHJ1ZSlcbiAgICAgIHRoaXMub25DaGFuZ2UuZmlyZSgpXG4gICAgfVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBzb3J0SWZQb3NzaWJsZShkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBmaXhQb3NpdGlvbiA9IGRyYWdnYWJsZS5maXhQb3NpdGlvblxuICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IHRoaXMuZHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSlcbiAgICBjb25zdCBuZXh0RHJhZ2dhYmxlID0gdGhpcy5kcmFnZ2FibGVzW2N1cnJlbnRJbmRleCArIDFdXG4gICAgY29uc3QgcHJldkRyYWdnYWJsZSA9IHRoaXMuZHJhZ2dhYmxlc1tjdXJyZW50SW5kZXggLSAxXVxuXG4gICAgaWYgKGRyYWdnYWJsZS5kb3duRGlyZWN0aW9uICYmIG5leHREcmFnZ2FibGUpIHtcbiAgICAgIGNvbnN0IGRpc3RhbmNlID0gdGhpcy5vcHRpb25zLmdldERpc3RhbmNlKGRyYWdnYWJsZS5wb3NpdGlvbiwgbmV4dERyYWdnYWJsZS5wb3NpdGlvbilcbiAgICAgIGlmIChkaXN0YW5jZSA8IHRoaXMub3B0aW9ucy5yYWRpdXMpIHtcbiAgICAgICAgZHJhZ2dhYmxlLmZpeFBvc2l0aW9uID0gbmV4dERyYWdnYWJsZS5maXhQb3NpdGlvblxuICAgICAgICB0aGlzLm1vdmVPclNhdmUobmV4dERyYWdnYWJsZSwgZml4UG9zaXRpb24sIHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSk7XG4gICAgICAgIFt0aGlzLmRyYWdnYWJsZXNbY3VycmVudEluZGV4XSwgdGhpcy5kcmFnZ2FibGVzW2N1cnJlbnRJbmRleCArIDFdXSA9IFt0aGlzLmRyYWdnYWJsZXNbY3VycmVudEluZGV4ICsgMV0sIHRoaXMuZHJhZ2dhYmxlc1tjdXJyZW50SW5kZXhdXVxuICAgICAgICB0aGlzLnNvcnRJZlBvc3NpYmxlKGRyYWdnYWJsZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZHJhZ2dhYmxlLnVwRGlyZWN0aW9uICYmIHByZXZEcmFnZ2FibGUpIHtcbiAgICAgIGNvbnN0IGRpc3RhbmNlID0gdGhpcy5vcHRpb25zLmdldERpc3RhbmNlKGRyYWdnYWJsZS5wb3NpdGlvbiwgcHJldkRyYWdnYWJsZS5wb3NpdGlvbilcbiAgICAgIGlmIChkaXN0YW5jZSA8IHRoaXMub3B0aW9ucy5yYWRpdXMpIHtcbiAgICAgICAgZHJhZ2dhYmxlLmZpeFBvc2l0aW9uID0gcHJldkRyYWdnYWJsZS5maXhQb3NpdGlvblxuICAgICAgICB0aGlzLm1vdmVPclNhdmUocHJldkRyYWdnYWJsZSwgZml4UG9zaXRpb24sIHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSk7XG4gICAgICAgIFt0aGlzLmRyYWdnYWJsZXNbY3VycmVudEluZGV4XSwgdGhpcy5kcmFnZ2FibGVzW2N1cnJlbnRJbmRleCAtIDFdXSA9IFt0aGlzLmRyYWdnYWJsZXNbY3VycmVudEluZGV4IC0gMV0sIHRoaXMuZHJhZ2dhYmxlc1tjdXJyZW50SW5kZXhdXVxuICAgICAgICB0aGlzLnNvcnRJZlBvc3NpYmxlKGRyYWdnYWJsZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbkVuZERpc3BsYXljZW1lbnQoZHJhZ2dhYmxlKSB7XG4gICAgY29uc3Qgc29ydGVkRHJhZ2dhYmxlcyA9IHRoaXMuZ2V0U29ydGVkRHJhZ2dhYmxlcygpXG4gICAgY29uc3QgZml4UG9zaXRpb25zID0gc29ydGVkRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLmZpeFBvc2l0aW9uKVxuXG4gICAgY29uc3QgY3VycmVudEluZGV4ID0gc29ydGVkRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSlcbiAgICBjb25zdCB0YXJnZXRJbmRleCA9IEdlb21ldHJ5LmluZGV4T2ZOZWFyZXN0UG9pbnQoZml4UG9zaXRpb25zLCBkcmFnZ2FibGUucG9zaXRpb24sIHRoaXMub3B0aW9ucy5yYWRpdXMsIHRoaXMub3B0aW9ucy5nZXREaXN0YW5jZSlcblxuICAgIGlmICh0YXJnZXRJbmRleCAhPT0gLTEpIHtcbiAgICAgIGlmICh0YXJnZXRJbmRleCA8IGN1cnJlbnRJbmRleCkge1xuICAgICAgICBmb3IgKGxldCBpPXRhcmdldEluZGV4OyBpPGN1cnJlbnRJbmRleDsgaSsrKSB7XG4gICAgICAgICAgdGhpcy5tb3ZlT3JTYXZlKHNvcnRlZERyYWdnYWJsZXNbaV0sIGZpeFBvc2l0aW9uc1tpKzFdLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAobGV0IGk9Y3VycmVudEluZGV4OyBpPHRhcmdldEluZGV4OyBpKyspIHtcbiAgICAgICAgICB0aGlzLm1vdmVPclNhdmUoc29ydGVkRHJhZ2dhYmxlc1tpKzFdLCBmaXhQb3NpdGlvbnNbaV0sIHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZHJhZ2dhYmxlLm1vdmUoZml4UG9zaXRpb25zW3RhcmdldEluZGV4XSwgdGhpcy5vcHRpb25zLnRpbWVFbmQsIHRydWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGRyYWdnYWJsZS5tb3ZlKGRyYWdnYWJsZS5maXhQb3NpdGlvbiwgdGhpcy5vcHRpb25zLnRpbWVFbmQsIHRydWUpXG4gICAgfVxuICB9XG5cbiAgb25TdGFydChkcmFnZ2FibGUpIHtcbiAgICBsZXQgaVxuICAgIGNvbnN0IHNvcnRlZERyYWdnYWJsZXMgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuICAgIGNvbnN0IGZpeFBvc2l0aW9ucyA9IHNvcnRlZERyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5maXhQb3NpdGlvbilcblxuICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IHNvcnRlZERyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpXG4gICAgZm9yIChpID0gY3VycmVudEluZGV4ICsgMTsgaSA8IHNvcnRlZERyYWdnYWJsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMubW92ZU9yU2F2ZShzb3J0ZWREcmFnZ2FibGVzW2ldLCBmaXhQb3NpdGlvbnNbaSAtIDFdLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgfVxuICAgIHNvcnRlZERyYWdnYWJsZXNbY3VycmVudEluZGV4XS5maXhQb3NpdGlvbiA9IGZpeFBvc2l0aW9uc1tpIC0gMV1cbiAgfVxuXG4gIGdldEN1cnJlbnRGaXhQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5kcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUuZml4UG9zaXRpb24uY2xvbmUoKSlcbiAgfVxuXG4gIGdldFNvcnRlZERyYWdnYWJsZXMoKSB7XG4gICAgY29uc3QgaW5pdFBvc2l0aW9ucyA9IHRoaXMuZHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLmluaXRQb3NpdGlvbilcblxuICAgIGNvbnN0IHNvcnRlZERyYWdnYWJsZXMgPSBpbml0UG9zaXRpb25zLm1hcCgocG9zaXRpb24pID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmRyYWdnYWJsZXMuZmlsdGVyKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5maXhQb3NpdGlvbi5jb21wYXJlKHBvc2l0aW9uKSlbMF1cbiAgICB9KVxuXG4gICAgcmV0dXJuIHNvcnRlZERyYWdnYWJsZXNcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5tb3ZlKGRyYWdnYWJsZS5pbml0UG9zaXRpb24sIDAsIHRydWUsIGZhbHNlKVxuICAgIH0pXG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5yZWZyZXNoKClcbiAgICB9KVxuICB9XG5cbiAgYWRkKGRyYWdnYWJsZXMpIHtcbiAgICBpZiAoIShkcmFnZ2FibGVzIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgICBkcmFnZ2FibGVzID0gW2RyYWdnYWJsZXNdXG4gICAgfVxuICAgIGRyYWdnYWJsZXMuZm9yRWFjaCh0aGlzLmluaXREcmFnZ2FibGUsIHRoaXMpXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gdGhpcy5kcmFnZ2FibGVzLmNvbmNhdChkcmFnZ2FibGVzKVxuICB9XG5cbiAgcmVtb3ZlKGRyYWdnYWJsZXMpIHtcbiAgICBjb25zdCBpbml0UG9zaXRpb25zID0gdGhpcy5kcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUuaW5pdFBvc2l0aW9uKVxuICAgIGNvbnN0IGxpc3QgPSBbXVxuICAgIGNvbnN0IHNvcnRlZERyYWdnYWJsZXMgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuXG4gICAgaWYgKCEoZHJhZ2dhYmxlcyBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgZHJhZ2dhYmxlcyA9IFtkcmFnZ2FibGVzXVxuICAgIH1cblxuICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUub25FbmQucmVzZXQoKVxuICAgICAgZHJhZ2dhYmxlLm9uTW92ZS5yZXNldCgpIC8vdG9kbyByZW1vdmUgcmVzZXQgaW4gZnV0dXJlXG4gICAgICByZW1vdmVJdGVtcyh0aGlzLmRyYWdnYWJsZXMsIGRyYWdnYWJsZSlcbiAgICB9KVxuXG4gICAgbGV0IGogPSAwXG4gICAgc29ydGVkRHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGlmICh0aGlzLmRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMSkge1xuICAgICAgICBpZiAoZHJhZ2dhYmxlLmZpeFBvc2l0aW9uICE9PSBpbml0UG9zaXRpb25zW2pdKSB7XG4gICAgICAgICAgZHJhZ2dhYmxlLm1vdmUoaW5pdFBvc2l0aW9uc1tqXSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlLCB0cnVlKVxuICAgICAgICB9XG4gICAgICAgIGRyYWdnYWJsZS5pbml0UG9zaXRpb24gPSBpbml0UG9zaXRpb25zW2pdXG4gICAgICAgIGorK1xuICAgICAgICBsaXN0LnB1c2goZHJhZ2dhYmxlKVxuICAgICAgfVxuICAgIH0pXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gbGlzdFxuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5yZW1vdmUodGhpcy5kcmFnZ2FibGVzLnNsaWNlKCkpXG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5kZXN0cm95KCkpXG4gIH1cblxuICBnZXQgcG9zaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmdldEN1cnJlbnRGaXhQb3NpdGlvbigpXG4gIH1cblxuICBzZXQgcG9zaXRpb25zKHBvc2l0aW9ucykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSAnd3JvbmcgYXJyYXkgbGVuZ3RoJ1xuICAgIGlmIChwb3NpdGlvbnMubGVuZ3RoID09PSB0aGlzLmRyYWdnYWJsZXMubGVuZ3RoKSB7XG4gICAgICBwb3NpdGlvbnMuZm9yRWFjaCgocG9pbnQsIGkpID0+IHtcbiAgICAgICAgdGhpcy5kcmFnZ2FibGVzW2ldLm1vdmUocG9pbnQsIDAsIHRydWUsIHRydWUpXG4gICAgICB9LCB0aGlzKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBtZXNzYWdlXG4gICAgfVxuICB9XG5cbiAgZ2V0IGVuYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlXG4gIH1cblxuICBzZXQgZW5hYmxlKGVuYWJsZSkge1xuICAgIHRoaXMuX2VuYWJsZSA9IGVuYWJsZVxuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5lbmFibGUgPSBlbmFibGVcbiAgICB9KVxuICB9XG59XG5cbmZ1bmN0aW9uIGxpc3RGYWN0b3J5KHBhcmVudEVsZW1lbnQsIGVsZW1lbnRzLCBvcHRpb25zPXt9KSB7XG4gIGNvbnN0IGRyYWdnYWJsZU9wdGlvbnMgPSBvcHRpb25zLmRyYWdnYWJsZSB8fCB7fVxuICBjb25zdCBsaXN0T3B0aW9ucyA9IG9wdGlvbnMubGlzdCB8fCB7fVxuICBkcmFnZ2FibGVPcHRpb25zLnBhcmVudCA9IGRyYWdnYWJsZU9wdGlvbnMucGFyZW50IHx8IHBhcmVudEVsZW1lbnRcbiAgZWxlbWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChlbGVtZW50cylcblxuICBjb25zdCBkcmFnZ2FibGVzID0gZWxlbWVudHMubWFwKChlbGVtZW50KSA9PiB7XG4gICAgcmV0dXJuIG5ldyBEcmFnZ2FibGUoZWxlbWVudCwgZHJhZ2dhYmxlT3B0aW9ucylcbiAgfSlcblxuICByZXR1cm4gbmV3IExpc3QoZHJhZ2dhYmxlcywgbGlzdE9wdGlvbnMpXG59XG5cbmV4cG9ydCB7IGxpc3RzLCBMaXN0LCBsaXN0RmFjdG9yeSB9XG4iLCIndXNlIHN0cmljdCdcblxuaW1wb3J0IHsgR2VvbWV0cnksIFBvaW50IH0gZnJvbSAnLi9nZW9tZXRyeSdcbmltcG9ydCB7IERyYWdnYWJsZSB9IGZyb20gJy4vZHJhZ2dhYmxlJ1xuaW1wb3J0IHsgTGlzdCB9IGZyb20gJy4vbGlzdCdcblxuY2xhc3MgTGlzdFN3aXRjaGVyIGV4dGVuZHMgTGlzdCB7XG4gIGNvbnN0cnVjdG9yKGRyYWdnYWJsZXMsIG9wdGlvbnM9e30pIHtcbiAgICBvcHRpb25zLnN0ZXBPbiA9IG9wdGlvbnMuc3RlcE9uIHx8IG5ldyBQb2ludCgtNTAsIDApXG4gICAgc3VwZXIoZHJhZ2dhYmxlcywgb3B0aW9ucylcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLmlzT24gPSBmYWxzZVxuICAgICAgZHJhZ2dhYmxlLm9uRW5kLmFkZCgoKSA9PiB7XG4gICAgICAgIHRoaXMub25FbmQoZHJhZ2dhYmxlKVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgb25FbmQoZHJhZ2dhYmxlKSB7XG4gICAgY29uc3QgZml4UG9zaXRpb25zID0gdGhpcy5nZXRDdXJyZW50Rml4UG9zaXRpb25XaXRoT2ZmKClcbiAgICBjb25zdCBjdXJyZW50SW5kZXggPSB0aGlzLmRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpXG4gICAgY29uc3QgZXhjYW5nZUluZGV4ID0gR2VvbWV0cnkuaW5kZXhPZk5lYXJlc3RQb2ludChmaXhQb3NpdGlvbnMsIGRyYWdnYWJsZS5wb3NpdGlvbiwgdGhpcy5vcHRpb25zLnJhZGl1cywgdGhpcy5vcHRpb25zLmdldERpc3RhbmNlKVxuXG4gICAgaWYgKGV4Y2FuZ2VJbmRleCA9PT0gLTEgfHwgZXhjYW5nZUluZGV4ID09PSBjdXJyZW50SW5kZXgpIHtcbiAgICAgIHRoaXMubW92ZURyYWdnYWJsZShjdXJyZW50SW5kZXgsIGRyYWdnYWJsZS5wb3NpdGlvbiwgZml4UG9zaXRpb25zW2N1cnJlbnRJbmRleF0sIHRoaXMub3B0aW9ucy50aW1lRW5kKVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5kcmFnZ2FibGVzW2V4Y2FuZ2VJbmRleF0uaXNEcmFnZ2luZykge1xuICAgICAgICB0aGlzLmZpeFRvT2ZmKGV4Y2FuZ2VJbmRleCwgZml4UG9zaXRpb25zW2N1cnJlbnRJbmRleF0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm1vdmVEcmFnZ2FibGVUb09mZihleGNhbmdlSW5kZXgsIGZpeFBvc2l0aW9uc1tjdXJyZW50SW5kZXhdLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICB9XG4gICAgICB0aGlzLm1vdmVEcmFnZ2FibGUoY3VycmVudEluZGV4LCBkcmFnZ2FibGUucG9zaXRpb24sIGZpeFBvc2l0aW9uc1tleGNhbmdlSW5kZXhdLCB0aGlzLm9wdGlvbnMudGltZUVuZClcbiAgICAgIHRoaXMub25DaGFuZ2UuZmlyZSgpXG4gICAgfVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBtb3ZlRHJhZ2dhYmxlKGluZGV4LCBwb3NpdGlvbiwgZml4T2ZmUG9zaXRpb24sIHRpbWUpIHtcbiAgICBjb25zdCBwb3NpdGlvbnMgPSBbZml4T2ZmUG9zaXRpb24sIGZpeE9mZlBvc2l0aW9uLmFkZCh0aGlzLm9wdGlvbnMuc3RlcE9uKV1cbiAgICBjb25zdCBpc09uID0gR2VvbWV0cnkuaW5kZXhPZk5lYXJlc3RQb2ludChwb3NpdGlvbnMsIHBvc2l0aW9uLCAtMSwgR2VvbWV0cnkuZ2V0WERpZmZlcmVuY2UpXG5cbiAgICBpZiAodGhpcy5kcmFnZ2FibGVzW2luZGV4XS5pc09uICE9PSAhIWlzT24pIHtcbiAgICAgIHRoaXMuZHJhZ2dhYmxlc1tpbmRleF0uaXNPbiA9ICEhaXNPblxuICAgICAgdGhpcy5vbkNoYW5nZS5maXJlKClcbiAgICB9XG5cbiAgICB0aGlzLmRyYWdnYWJsZXNbaW5kZXhdLm1vdmUocG9zaXRpb25zW2lzT25dLCB0aW1lLCB0cnVlKVxuICB9XG5cbiAgZml4VG9PZmYoaW5kZXgsIGZpeE9mZlBvc2l0aW9uKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzW2luZGV4XS5pc09uID0gZmFsc2VcbiAgICB0aGlzLmRyYWdnYWJsZXNbaW5kZXhdLmZpeFBvc2l0aW9uID0gZml4T2ZmUG9zaXRpb25cbiAgfVxuXG4gIG1vdmVEcmFnZ2FibGVUb09mZihpbmRleCwgZml4T2ZmUG9zaXRpb24sIHRpbWUpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXNbaW5kZXhdLmlzT24gPSBmYWxzZVxuICAgIHRoaXMuZHJhZ2dhYmxlc1tpbmRleF0ubW92ZShmaXhPZmZQb3NpdGlvbiwgdGltZSwgdHJ1ZSlcbiAgfVxuXG4gIGdldEN1cnJlbnRGaXhQb3NpdGlvbldpdGhPZmYoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5pc09uID8gZHJhZ2dhYmxlLmZpeFBvc2l0aW9uLnN1Yih0aGlzLm9wdGlvbnMuc3RlcE9uKSA6IGRyYWdnYWJsZS5maXhQb3NpdGlvbi5jbG9uZSgpXG4gICAgfSwgdGhpcylcbiAgfVxuXG4gIGdldFNvcnRlZERyYWdnYWJsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLmluaXRQb3NpdGlvbilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgocG9zaXRpb24pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kcmFnZ2FibGVzLmZpbHRlcigoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZHJhZ2dhYmxlLmZpeFBvc2l0aW9uLmNvbXBhcmUocG9zaXRpb24pIHx8IGRyYWdnYWJsZS5maXhQb3NpdGlvbi5jb21wYXJlKHBvc2l0aW9uLmFkZCh0aGlzLm9wdGlvbnMuc3RlcE9uKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB0aGlzKVswXVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB0aGlzKVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLm1vdmUoZHJhZ2dhYmxlLmluaXRQb3NpdGlvbiwgMCwgdHJ1ZSwgZmFsc2UpXG4gICAgICBkcmFnZ2FibGUuaXNPbiA9IGZhbHNlXG4gICAgfSlcbiAgfVxuXG4gIGdldCBwb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgY29uc3QgcG9zaXRpb24gPSBkcmFnZ2FibGUuZml4UG9zaXRpb24uY2xvbmUoKVxuICAgICAgcG9zaXRpb24uaXNPbiA9IGRyYWdnYWJsZS5pc09uXG4gICAgICByZXR1cm4gcG9zaXRpb25cbiAgICB9KVxuICB9XG5cbiAgc2V0IHBvc2l0aW9ucyhwb3NpdGlvbnMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gJ3dyb25nIGFycmF5IGxlbmd0aCdcbiAgICBpZiAocG9zaXRpb25zLmxlbmd0aCA9PT0gdGhpcy5kcmFnZ2FibGVzLmxlbmd0aCkge1xuICAgICAgcG9zaXRpb25zLmZvckVhY2goKHBvaW50LCBpKSA9PiB7XG4gICAgICAgIHRoaXMuZHJhZ2dhYmxlc1tpXS5pc09uID0gcG9pbnQuaXNPblxuICAgICAgICB0aGlzLmRyYWdnYWJsZXNbaV0ubW92ZShwb2ludCwgMCwgdHJ1ZSwgdHJ1ZSlcbiAgICAgIH0sIHRoaXMpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG1lc3NhZ2VcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gbGlzdFN3aXRjaGVyRmFjdG9yeShlbGVtZW50LCBkcmFnZ2FibGVFbGVtZW50cywgb3B0aW9ucz17fSkge1xuICBjb25zdCBkcmFnZ2FibGVPcHRpb25zID0gb3B0aW9ucy5kcmFnZ2FibGUgfHwge31cbiAgY29uc3QgbGlzdE9wdGlvbnMgPSBvcHRpb25zLmxpc3QgfHwge31cblxuICBkcmFnZ2FibGVPcHRpb25zLnBhcmVudCA9IGRyYWdnYWJsZU9wdGlvbnMucGFyZW50IHx8IGVsZW1lbnRcbiAgZHJhZ2dhYmxlRWxlbWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkcmFnZ2FibGVFbGVtZW50cylcblxuICBjb25zdCBkcmFnZ2FibGVzID0gZHJhZ2dhYmxlRWxlbWVudHMubWFwKChlbGVtZW50KSA9PiB7XG4gICAgcmV0dXJuIG5ldyBEcmFnZ2FibGUoZWxlbWVudCwgZHJhZ2dhYmxlT3B0aW9ucylcbiAgfSlcbiAgcmV0dXJuIG5ldyBMaXN0U3dpdGNoZXIoZHJhZ2dhYmxlcywgbGlzdE9wdGlvbnMpXG59XG5cbmV4cG9ydCB7IGxpc3RTd2l0Y2hlckZhY3RvcnksIExpc3RTd2l0Y2hlciB9XG4iLCIndXNlIHN0cmljdCdcbmltcG9ydCB7IEdlb21ldHJ5LCBQb2ludCB9IGZyb20gJy4vZ2VvbWV0cnknXG5cbmNvbnN0IHBvc2l0aW9uVHlwZSA9IHtcbiAgbm90Q3Jvc3Npbmc6IDAsXG4gIGZsb2F0TGVmdDogMSxcbiAgZmxvYXRSaWdodDogMlxufVxuXG5mdW5jdGlvbiBwb3NpdGlvbkZhY3RvcnkodHlwZSkge1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgY2FzZSBwb3NpdGlvblR5cGUubm90Q3Jvc3Npbmc6XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHJlY3RhbmdsZSwgX29wdGlvbnMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihyZWN0YW5nbGVMaXN0LCBpbmRleGVzT2ZOZXdzKSB7XG4gICAgICAgIGNvbnN0IGJvdW5kUmVjdCA9IHR5cGVvZiByZWN0YW5nbGUgPT09ICdmdW5jdGlvbicgPyByZWN0YW5nbGUoKSA6IHJlY3RhbmdsZSxcbiAgICAgICAgICBzdGF0aWNSZWN0YW5nbGVJbmRleGVzID0gcmVjdGFuZ2xlTGlzdC5yZWR1Y2UoZnVuY3Rpb24oaW5kZXhlcywgX3JlY3QsIGluZGV4KSB7XG4gICAgICAgICAgICBpZiAoaW5kZXhlc09mTmV3cy5pbmRleE9mKGluZGV4KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgaW5kZXhlcy5wdXNoKGluZGV4KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGluZGV4ZXNcbiAgICAgICAgICB9LCBbXSlcblxuICAgICAgICBpbmRleGVzT2ZOZXdzLmZvckVhY2goZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgICAgICBsZXQgcmVjdCA9IHJlY3RhbmdsZUxpc3RbaW5kZXhdLCByZW1vdmFibGUgPSBmYWxzZVxuICAgICAgICAgIHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMuZm9yRWFjaChmdW5jdGlvbihpbmRleE9mU3RhdGljKSB7XG4gICAgICAgICAgICBjb25zdCBzdGF0aWNSZWN0ID0gcmVjdGFuZ2xlTGlzdFtpbmRleE9mU3RhdGljXVxuICAgICAgICAgICAgcmVjdCA9IHN0YXRpY1JlY3QubW92ZVRvQm91bmQocmVjdClcbiAgICAgICAgICB9KVxuICAgICAgICAgIHJlbW92YWJsZSA9IHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMuc29tZShmdW5jdGlvbihpbmRleE9mU3RhdGljKSB7XG4gICAgICAgICAgICBjb25zdCBzdGF0aWNSZWN0ID0gcmVjdGFuZ2xlTGlzdFtpbmRleE9mU3RhdGljXVxuICAgICAgICAgICAgcmV0dXJuICAhIXN0YXRpY1JlY3QuYW5kKHJlY3QpXG4gICAgICAgICAgfSkgfHwgcmVjdC5hbmQoYm91bmRSZWN0KS5nZXRTcXVhcmUoKSAhPT0gcmVjdC5nZXRTcXVhcmUoKVxuICAgICAgICAgIGlmIChyZW1vdmFibGUpIHtcbiAgICAgICAgICAgIHJlY3QucmVtb3ZhYmxlID0gdHJ1ZVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdGF0aWNSZWN0YW5nbGVJbmRleGVzLnB1c2goaW5kZXgpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gcmVjdGFuZ2xlTGlzdFxuICAgICAgfVxuICAgIH1cbiAgY2FzZSBwb3NpdGlvblR5cGUuZmxvYXRMZWZ0OlxuICAgIHJldHVybiBmdW5jdGlvbihyZWN0YW5nbGUsIG9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgcGFkZGluZ1RvcExlZnQ6IG5ldyBQb2ludCgwLCAwKSxcbiAgICAgICAgcGFkZGluZ0JvdHRvbVJpZ2h0OiBuZXcgUG9pbnQoMCwgMCksXG4gICAgICAgIHlHYXBCZXR3ZWVuRHJhZ2dhYmxlczogMCxcbiAgICAgICAgcmVtb3ZhYmxlOiB0cnVlXG4gICAgICB9LCBvcHRpb25zKVxuXG4gICAgICByZXR1cm4gZnVuY3Rpb24ocmVjdGFuZ2xlTGlzdCwgX2luZGV4ZXNPZk5ld3MpIHtcbiAgICAgICAgY29uc3QgYm91bmRSZWN0ID0gdHlwZW9mIHJlY3RhbmdsZSA9PT0gJ2Z1bmN0aW9uJyA/IHJlY3RhbmdsZSgpIDogcmVjdGFuZ2xlXG4gICAgICAgIGNvbnN0IHJlY3RQMiA9IGJvdW5kUmVjdC5nZXRQMigpXG4gICAgICAgIGxldCBib3VuZGFyeVBvaW50cyA9IFtib3VuZFJlY3QucG9zaXRpb25dXG4gICAgICAgIHJlY3RhbmdsZUxpc3QuZm9yRWFjaChmdW5jdGlvbihyZWN0KSB7XG4gICAgICAgICAgbGV0IHBvc2l0aW9uLCBpc1ZhbGlkID0gZmFsc2VcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvdW5kYXJ5UG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IChuZXcgUG9pbnQoYm91bmRhcnlQb2ludHNbaV0ueCwgaSA+IDAgPyAoYm91bmRhcnlQb2ludHNbaSAtIDFdLnkgKyBvcHRpb25zLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcykgOiBib3VuZFJlY3QucG9zaXRpb24ueSkpLmFkZChvcHRpb25zLnBhZGRpbmdUb3BMZWZ0KVxuICAgICAgICAgICAgaXNWYWxpZCA9IChwb3NpdGlvbi54ICsgcmVjdC5zaXplLnggPCByZWN0UDIueClcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICAgICAgcG9zaXRpb24gPSAobmV3IFBvaW50KGJvdW5kUmVjdC5wb3NpdGlvbi54LCBib3VuZGFyeVBvaW50c1tib3VuZGFyeVBvaW50cy5sZW5ndGggLSAxXS55ICsgb3B0aW9ucy55R2FwQmV0d2VlbkRyYWdnYWJsZXMpKS5hZGQob3B0aW9ucy5wYWRkaW5nVG9wTGVmdClcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVjdC5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgICAgICAgaWYgKG9wdGlvbnMucmVtb3ZhYmxlICYmIHJlY3QuZ2V0UDMoKS55ID4gYm91bmRSZWN0LmdldFAzKCkueSkge1xuICAgICAgICAgICAgcmVjdC5yZW1vdmFibGUgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGJvdW5kYXJ5UG9pbnRzID0gR2VvbWV0cnkuYWRkUG9pbnRUb0JvdW5kUG9pbnRzKGJvdW5kYXJ5UG9pbnRzLCByZWN0LmdldFAzKCkuYWRkKG9wdGlvbnMucGFkZGluZ0JvdHRvbVJpZ2h0KSlcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHJlY3RhbmdsZUxpc3RcbiAgICAgIH1cbiAgICB9XG4gIGNhc2UgcG9zaXRpb25UeXBlLmZsb2F0UmlnaHQ6XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHJlY3RhbmdsZSwgb3B0aW9ucykge1xuICAgICAgb3B0aW9ucyA9IE9iamVjdC5hc3Npbmcoe1xuICAgICAgICBwYWRkaW5nVG9wUmlnaHQ6IG5ldyBQb2ludCg1LCA1KSxcbiAgICAgICAgcGFkZGluZ0JvdHRvbUxlZnQ6IG5ldyBQb2ludCgwLCAwKSxcbiAgICAgICAgcmVtb3ZhYmxlOiB0cnVlXG4gICAgICB9LCBvcHRpb25zKVxuXG4gICAgICBjb25zdCBwYWRkaW5nVG9wTmVnUmlnaHQgPSBuZXcgUG9pbnQoLW9wdGlvbnMucGFkZGluZ1RvcFJpZ2h0LngsIG9wdGlvbnMucGFkZGluZ1RvcFJpZ2h0LnkpXG4gICAgICBjb25zdCBwYWRkaW5nQm90dG9tTmVnTGVmdCA9IG5ldyBQb2ludCgtb3B0aW9ucy5wYWRkaW5nQm90dG9tTGVmdC54LCBvcHRpb25zLnBhZGRpbmdCb3R0b21MZWZ0LnkpXG4gICAgICByZXR1cm4gZnVuY3Rpb24ocmVjdGFuZ2xlTGlzdCwgX2luZGV4ZXNPZk5ld3MpIHtcbiAgICAgICAgY29uc3QgYm91bmRSZWN0ID0gdHlwZW9mIHJlY3RhbmdsZSA9PT0gJ2Z1bmN0aW9uJyA/IHJlY3RhbmdsZSgpIDogcmVjdGFuZ2xlXG4gICAgICAgIGxldCBib3VuZGFyeVBvaW50cyA9IFtib3VuZFJlY3QuZ2V0UmlnaHRUb3BQb2ludCgpXVxuICAgICAgICByZWN0YW5nbGVMaXN0LmZvckVhY2goZnVuY3Rpb24ocmVjdCwgX2luZGV4KSB7XG4gICAgICAgICAgbGV0IHBvc2l0aW9uLCBpc1ZhbGlkID0gZmFsc2VcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvdW5kYXJ5UG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IChuZXcgUG9pbnQoYm91bmRhcnlQb2ludHNbaV0ueCAtIHJlY3Quc2l6ZS54LCBpID4gMCA/IGJvdW5kYXJ5UG9pbnRzW2kgLSAxXS55IDogYm91bmRSZWN0LnBvc2l0aW9uLnkpKS5hZGQocGFkZGluZ1RvcE5lZ1JpZ2h0KVxuICAgICAgICAgICAgaXNWYWxpZCA9IChwb3NpdGlvbi54ID4gcmVjdC5wb3NpdGlvbi54KVxuICAgICAgICAgICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IG5ldyBQb2ludChib3VuZFJlY3QuZ2V0UDIoKS54LCBib3VuZGFyeVBvaW50c1tib3VuZGFyeVBvaW50cy5sZW5ndGggLSAxXS55KVxuICAgICAgICAgIH1cbiAgICAgICAgICByZWN0LnBvc2l0aW9uID0gcG9zaXRpb25cbiAgICAgICAgICBpZiAob3B0aW9ucy5yZW1vdmFibGUgJiYgcmVjdC5nZXRMZWZ0Qm90dG9tUG9pbnQoKS55ID4gYm91bmRSZWN0LmdldFA0KCkueSkge1xuICAgICAgICAgICAgcmVjdC5yZW1vdmFibGUgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGJvdW5kYXJ5UG9pbnRzID0gR2VvbWV0cnkuYWRkUG9pbnRUb0JvdW5kUG9pbnRzKGJvdW5kYXJ5UG9pbnRzLCByZWN0LmdldFA0KCkuYWRkKHBhZGRpbmdCb3R0b21OZWdMZWZ0KSwgdHJ1ZSlcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHJlY3RhbmdsZUxpc3RcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc29ydGluZ0ZhY3RvcnkodHlwZSkge1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgY2FzZSBwb3NpdGlvblR5cGUubm90Q3Jvc3Npbmc6XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG9sZE9ianNMaXN0LCBuZXdPYmpzLCBpbmRleE9mTmV3cykge1xuICAgICAgICBjb25zdCBvYmpzTGlzdCA9IG9sZE9ianNMaXN0LmNvbmNhdChuZXdPYmpzKVxuICAgICAgICBuZXdPYmpzLmZvckVhY2goZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgICAgaW5kZXhPZk5ld3MucHVzaChvYmpzTGlzdC5pbmRleE9mKG9iaikpXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBvYmpzTGlzdFxuICAgICAgfVxuICAgIH1cbiAgY2FzZSBwb3NpdGlvblR5cGUuZmxvYXRMZWZ0OlxuICBjYXNlIHBvc2l0aW9uVHlwZS5mbG9hdFJpZ2h0OlxuICAgIHJldHVybiBmdW5jdGlvbihyYWRpdXMsIGdldERpc3RhbmNlLCBvcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIGdldFBvc2l0aW9uOiBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgICByZXR1cm4gb2JqLnBvc2l0aW9uXG4gICAgICAgIH1cbiAgICAgIH0sIG9wdGlvbnMpXG5cbiAgICAgIHJldHVybiBmdW5jdGlvbihvbGRPYmpzTGlzdCwgbmV3T2JqcywgaW5kZXhPZk5ld3MpIHtcbiAgICAgICAgY29uc3QgbmV3TGlzdCA9IG9sZE9ianNMaXN0LmNvbmNhdCgpXG4gICAgICAgIGNvbnN0IGxpc3RPbGRQb3NpdGlvbiA9IG9sZE9ianNMaXN0Lm1hcChvcHRpb25zLmdldFBvc2l0aW9uKVxuICAgICAgICBuZXdPYmpzLmZvckVhY2goZnVuY3Rpb24obmV3T2JqKSB7XG4gICAgICAgICAgbGV0IGluZGV4ID0gR2VvbWV0cnkuaW5kZXhPZk5lYXJlc3RQb2ludChsaXN0T2xkUG9zaXRpb24sIG9wdGlvbnMuZ2V0UG9zaXRpb24obmV3T2JqKSwgcmFkaXVzLCBnZXREaXN0YW5jZSlcbiAgICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICBpbmRleCA9IG5ld0xpc3QubGVuZ3RoXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluZGV4ID0gbmV3TGlzdC5pbmRleE9mKG9sZE9ianNMaXN0W2luZGV4XSlcbiAgICAgICAgICB9XG4gICAgICAgICAgbmV3TGlzdC5zcGxpY2UoaW5kZXgsIDAsIG5ld09iailcbiAgICAgICAgfSlcbiAgICAgICAgbmV3T2Jqcy5mb3JFYWNoKGZ1bmN0aW9uKG5ld09iaikge1xuICAgICAgICAgIGluZGV4T2ZOZXdzLnB1c2gobmV3TGlzdC5pbmRleE9mKG5ld09iaikpXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBuZXdMaXN0XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCB7IHBvc2l0aW9uVHlwZSwgc29ydGluZ0ZhY3RvcnksIHBvc2l0aW9uRmFjdG9yeSB9XG4iLCJpbXBvcnQgcmVtb3ZlSXRlbXMgZnJvbSAncmVtb3ZlLWFycmF5LWl0ZW1zJ1xuaW1wb3J0IEV2ZW50IGZyb20gJy4vZXZlbnQnXG5pbXBvcnQgeyBEcmFnZ2FibGUgfSBmcm9tICcuL2RyYWdnYWJsZSdcbmltcG9ydCB7IFRhcmdldCB9IGZyb20gJy4vdGFyZ2V0J1xuXG5jb25zdCBEcmFnZWUgPSB7IEV2ZW50IH0gLy90b2RvIHJlbW92ZSBhZnRlciByZWZhY3RvcmVcblxuY29uc3Qgc2NvcGVzID0gW11cblxuY2xhc3MgU2NvcGUge1xuICBjb25zdHJ1Y3RvcihkcmFnZ2FibGVzLCB0YXJnZXRzLCBvcHRpb25zPXt9KSB7XG4gICAgc2NvcGVzLmZvckVhY2goKHNjb3BlKSA9PiB7XG4gICAgICBpZiAoZHJhZ2dhYmxlcykge1xuICAgICAgICBkcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgICAgIHJlbW92ZUl0ZW1zKHNjb3BlLmRyYWdnYWJsZXMsIGRyYWdnYWJsZSlcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgaWYgKHRhcmdldHMpIHtcbiAgICAgICAgdGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHtcbiAgICAgICAgICByZW1vdmVJdGVtcyhzY29wZS50YXJnZXRzLCB0YXJnZXQpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZXMgfHwgW11cbiAgICB0aGlzLnRhcmdldHMgPSB0YXJnZXRzIHx8IFtdXG4gICAgc2NvcGVzLnB1c2godGhpcylcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICB0aW1lRW5kOiAob3B0aW9ucy50aW1lRW5kKSB8fCA0MDBcbiAgICB9XG5cbiAgICB0aGlzLm9uQ2hhbmdlID0gbmV3IERyYWdlZS5FdmVudCh0aGlzKVxuICAgIGlmIChvcHRpb25zLm9uQ2hhbmdlKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlLmFkZChvcHRpb25zLm9uQ2hhbmdlKVxuICAgIH1cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUub25FbmQuYWRkKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMub25FbmQoZHJhZ2dhYmxlKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgYWRkRHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5wdXNoKGRyYWdnYWJsZSlcbiAgICBkcmFnZ2FibGUub25FbmQudW5zaGlmdCgoKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5vbkVuZChkcmFnZ2FibGUpXG4gICAgfSlcbiAgfVxuXG4gIGFkZFRhcmdldCh0YXJnZXQpIHtcbiAgICB0aGlzLnRhcmdldHMucHVzaCh0YXJnZXQpXG4gIH1cblxuICBvbkVuZChkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBzaG90VGFyZ2V0cyA9IHRoaXMudGFyZ2V0cy5maWx0ZXIoKHRhcmdldCkgPT4ge1xuICAgICAgcmV0dXJuIHRhcmdldC5kcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTFcbiAgICB9KS5maWx0ZXIoKHRhcmdldCkgPT4ge1xuICAgICAgcmV0dXJuIHRhcmdldC5jYXRjaERyYWdnYWJsZShkcmFnZ2FibGUpXG4gICAgfSkuc29ydCgoYSwgYikgPT4ge1xuICAgICAgcmV0dXJuIGEuZ2V0UmVjdGFuZ2xlKCkuZ2V0U3F1YXJlKCkgLSBiLmdldFJlY3RhbmdsZSgpLmdldFNxdWFyZSgpXG4gICAgfSlcblxuICAgIGlmIChzaG90VGFyZ2V0cy5sZW5ndGgpIHtcbiAgICAgIHNob3RUYXJnZXRzWzBdLm9uRW5kKGRyYWdnYWJsZSlcbiAgICB9IGVsc2UgaWYgKGRyYWdnYWJsZS50YXJnZXRzLmxlbmd0aCkge1xuICAgICAgZHJhZ2dhYmxlLm1vdmUoZHJhZ2dhYmxlLmluaXRQb3NpdGlvbiwgdGhpcy5vcHRpb25zLnRpbWVFbmQsIHRydWUsIHRydWUpXG4gICAgfVxuICAgIHRoaXMub25DaGFuZ2UuZmlyZSgpXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMudGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHRhcmdldC5yZXNldCgpKVxuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucmVmcmVzaCgpKVxuICAgIHRoaXMudGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHRhcmdldC5yZWZyZXNoKCkpXG4gIH1cblxuICBnZXQgcG9zaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnRhcmdldHMubWFwKCh0YXJnZXQpID0+IHtcbiAgICAgIHJldHVybiB0YXJnZXQuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB0aGlzLmRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpKVxuICAgIH0pXG4gIH1cblxuICBzZXQgcG9zaXRpb25zKHBvc2l0aW9ucykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSAnd3JvbmcgYXJyYXkgbGVuZ3RoJ1xuICAgIGlmIChwb3NpdGlvbnMubGVuZ3RoID09PSB0aGlzLnRhcmdldHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB0YXJnZXQucmVzZXQoKSlcblxuICAgICAgcG9zaXRpb25zLmZvckVhY2goKHRhcmdldEluZGV4ZXMsIGkpID0+IHtcbiAgICAgICAgdGFyZ2V0SW5kZXhlcy5mb3JFYWNoKChpbmRleCkgPT4ge1xuICAgICAgICAgIHRoaXMudGFyZ2V0c1tpXS5hZGQodGhpcy5kcmFnZ2FibGVzW2luZGV4XSlcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG1lc3NhZ2VcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgZGVmYXVsdFNjb3BlID0gbmV3IFNjb3BlKClcblxuZnVuY3Rpb24gc2NvcGUoZm4pIHtcbiAgY29uc3QgY3VycmVudFNjb3BlID0gbmV3IFNjb3BlKClcbiAgY29uc3QgYWRkRHJhZ2dhYmxlVG9TY29wZSA9IGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICAgIGN1cnJlbnRTY29wZS5hZGREcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICAgIHJldHVybiB0cnVlXG4gIH1cbiAgY29uc3QgYWRkVGFyZ2V0VG9TY29wZSA9IGZ1bmN0aW9uKHRhcmdldCkge1xuICAgIGN1cnJlbnRTY29wZS5hZGRUYXJnZXQodGFyZ2V0KVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBEcmFnZ2FibGUub25DcmVhdGUuYWRkKGFkZERyYWdnYWJsZVRvU2NvcGUpXG4gIFRhcmdldC5vbkNyZWF0ZS5hZGQoYWRkVGFyZ2V0VG9TY29wZSlcbiAgZm4uY2FsbCgpXG4gIERyYWdnYWJsZS5vbkNyZWF0ZS5yZW1vdmUoYWRkRHJhZ2dhYmxlVG9TY29wZSlcbiAgVGFyZ2V0Lm9uQ3JlYXRlLnJlbW92ZShhZGRUYXJnZXRUb1Njb3BlKVxuICByZXR1cm4gY3VycmVudFNjb3BlXG59XG5cbmZ1bmN0aW9uIHNjb3BlRmFjdG9yeShwYXJlbnRFbGVtZW50LCBkcmFnZ2FibGVFbGVtZW50cywgdGFyZ2V0RWxlbWVudHMsIG9wdGlvbnM9e30pIHtcbiAgY29uc3QgZHJhZ2dhYmxlT3B0aW9ucyA9IG9wdGlvbnMuZHJhZ2dhYmxlIHx8IHt9XG4gIGNvbnN0IHRhcmdldE9wdGlvbnMgPSBvcHRpb25zLnRhcmdldCB8fCB7fVxuICBjb25zdCBzY29wZU9wdGlvbnMgPSBvcHRpb25zLnNjb3BlIHx8IHt9XG4gIGRyYWdnYWJsZU9wdGlvbnMucGFyZW50ID0gZHJhZ2dhYmxlT3B0aW9ucy5wYXJlbnQgfHwgcGFyZW50RWxlbWVudFxuICB0YXJnZXRPcHRpb25zLnBhcmVudCA9IHRhcmdldE9wdGlvbnMucGFyZW50IHx8IHBhcmVudEVsZW1lbnRcbiAgZHJhZ2dhYmxlRWxlbWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkcmFnZ2FibGVFbGVtZW50cylcbiAgdGFyZ2V0RWxlbWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0YXJnZXRFbGVtZW50cylcblxuICBjb25zdCBkcmFnZ2FibGVzID0gZHJhZ2dhYmxlRWxlbWVudHMubWFwKChlbGVtZW50KSA9PiB7XG4gICAgcmV0dXJuIG5ldyBEcmFnZ2FibGUoZWxlbWVudCwgZHJhZ2dhYmxlT3B0aW9ucylcbiAgfSlcblxuICBjb25zdCB0YXJnZXRzID0gdGFyZ2V0RWxlbWVudHMubWFwKChlbGVtZW50KSA9PiB7XG4gICAgcmV0dXJuIG5ldyBUYXJnZXQoZWxlbWVudCwgZHJhZ2dhYmxlcywgdGFyZ2V0T3B0aW9ucylcbiAgfSlcbiAgcmV0dXJuIG5ldyBTY29wZShkcmFnZ2FibGVzLCB0YXJnZXRzLCBzY29wZU9wdGlvbnMpXG59XG5cbmV4cG9ydCB7IHNjb3BlcywgZGVmYXVsdFNjb3BlLCBTY29wZSwgc2NvcGVGYWN0b3J5LCBzY29wZSB9XG4iLCJpbXBvcnQgeyBMaXN0IH0gZnJvbSAnLi9saXN0J1xuaW1wb3J0IHsgR2VvbWV0cnkgfSBmcm9tICcuL2dlb21ldHJ5J1xuaW1wb3J0IHsgRHJhZ2dhYmxlIH0gZnJvbSAnLi9kcmFnZ2FibGUnXG5cbmNsYXNzIFNvcnRhYmxlIGV4dGVuZHMgTGlzdCB7XG4gIGNvbnN0cnVjdG9yKGRyYWdnYWJsZXMsIG9wdGlvbnM9e30pIHtcbiAgICBvcHRpb25zLmdldERpc3RhbmNlID0gb3B0aW9ucy5nZXREaXN0YW5jZSB8fCBHZW9tZXRyeS5nZXRZRGlmZmVyZW5jZVxuICAgIHN1cGVyKGRyYWdnYWJsZXMsIG9wdGlvbnMpXG4gIH1cblxuICBpbml0RHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIGRyYWdnYWJsZS5lbmFibGUgPSB0aGlzLl9lbmFibGVcbiAgICBpZiAodGhpcy5vcHRpb25zLmlzU29ydGFibGUpIHtcbiAgICAgIGRyYWdnYWJsZS5vbk1vdmUuYWRkKCgpID0+IHtcbiAgICAgICAgaWYgKGRyYWdnYWJsZS5pc0RyYWdnaW5nKSB7XG4gICAgICAgICAgdGhpcy5leGNoYW5nZURyYWdnYWJsZUlmUG9zc2libGUoZHJhZ2dhYmxlKVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIGRyYWdnYWJsZS5vbkVuZC5hZGQoKCkgPT4ge1xuICAgICAgICBkcmFnZ2FibGUubW92ZShkcmFnZ2FibGUuZml4UG9zaXRpb24sIHRoaXMub3B0aW9ucy50aW1lRW5kKVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBleGNoYW5nZURyYWdnYWJsZUlmUG9zc2libGUoZHJhZ2dhYmxlKSB7XG4gICAgY29uc3QgZml4UG9zaXRpb24gPSBkcmFnZ2FibGUuZml4UG9zaXRpb25cbiAgICBjb25zdCBjdXJyZW50SW5kZXggPSB0aGlzLmRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpXG4gICAgY29uc3QgbmV4dERyYWdnYWJsZSA9IHRoaXMuZHJhZ2dhYmxlc1tjdXJyZW50SW5kZXggKyAxXVxuICAgIGNvbnN0IHByZXZEcmFnZ2FibGUgPSB0aGlzLmRyYWdnYWJsZXNbY3VycmVudEluZGV4IC0gMV1cblxuICAgIGlmIChkcmFnZ2FibGUuZG93bkRpcmVjdGlvbiAmJiBuZXh0RHJhZ2dhYmxlKSB7XG4gICAgICBjb25zdCBkaXN0YW5jZSA9IHRoaXMub3B0aW9ucy5nZXREaXN0YW5jZShkcmFnZ2FibGUucG9zaXRpb24sIG5leHREcmFnZ2FibGUucG9zaXRpb24pXG4gICAgICBpZiAoZGlzdGFuY2UgPCB0aGlzLm9wdGlvbnMucmFkaXVzKSB7XG4gICAgICAgIGRyYWdnYWJsZS5maXhQb3NpdGlvbiA9IG5leHREcmFnZ2FibGUuZml4UG9zaXRpb25cbiAgICAgICAgdGhpcy5tb3ZlT3JTYXZlKG5leHREcmFnZ2FibGUsIGZpeFBvc2l0aW9uLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpO1xuICAgICAgICBbdGhpcy5kcmFnZ2FibGVzW2N1cnJlbnRJbmRleF0sIHRoaXMuZHJhZ2dhYmxlc1tjdXJyZW50SW5kZXggKyAxXV0gPSBbdGhpcy5kcmFnZ2FibGVzW2N1cnJlbnRJbmRleCArIDFdLCB0aGlzLmRyYWdnYWJsZXNbY3VycmVudEluZGV4XV1cbiAgICAgICAgdGhpcy5leGNoYW5nZURyYWdnYWJsZUlmUG9zc2libGUoZHJhZ2dhYmxlKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChkcmFnZ2FibGUudXBEaXJlY3Rpb24gJiYgcHJldkRyYWdnYWJsZSkge1xuICAgICAgY29uc3QgZGlzdGFuY2UgPSB0aGlzLm9wdGlvbnMuZ2V0RGlzdGFuY2UoZHJhZ2dhYmxlLnBvc2l0aW9uLCBwcmV2RHJhZ2dhYmxlLnBvc2l0aW9uKVxuICAgICAgaWYgKGRpc3RhbmNlIDwgdGhpcy5vcHRpb25zLnJhZGl1cykge1xuICAgICAgICBkcmFnZ2FibGUuZml4UG9zaXRpb24gPSBwcmV2RHJhZ2dhYmxlLmZpeFBvc2l0aW9uXG4gICAgICAgIHRoaXMubW92ZU9yU2F2ZShwcmV2RHJhZ2dhYmxlLCBmaXhQb3NpdGlvbiwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKTtcbiAgICAgICAgW3RoaXMuZHJhZ2dhYmxlc1tjdXJyZW50SW5kZXhdLCB0aGlzLmRyYWdnYWJsZXNbY3VycmVudEluZGV4IC0gMV1dID0gW3RoaXMuZHJhZ2dhYmxlc1tjdXJyZW50SW5kZXggLSAxXSwgdGhpcy5kcmFnZ2FibGVzW2N1cnJlbnRJbmRleF1dXG4gICAgICAgIHRoaXMuZXhjaGFuZ2VEcmFnZ2FibGVJZlBvc3NpYmxlKGRyYWdnYWJsZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc29ydGFibGVGYWN0b3J5KHBhcmVudEVsZW1lbnQsIGVsZW1lbnRzLCBvcHRpb25zPXt9KSB7XG4gIGNvbnN0IGRyYWdnYWJsZU9wdGlvbnMgPSBvcHRpb25zLmRyYWdnYWJsZSB8fCB7fVxuICBjb25zdCBsaXN0T3B0aW9ucyA9IG9wdGlvbnMubGlzdCB8fCB7fVxuICBkcmFnZ2FibGVPcHRpb25zLnBhcmVudCA9IGRyYWdnYWJsZU9wdGlvbnMucGFyZW50IHx8IHBhcmVudEVsZW1lbnRcbiAgZWxlbWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChlbGVtZW50cylcblxuICBjb25zdCBkcmFnZ2FibGVzID0gZWxlbWVudHMubWFwKChlbGVtZW50KSA9PiB7XG4gICAgcmV0dXJuIG5ldyBEcmFnZ2FibGUoZWxlbWVudCwgZHJhZ2dhYmxlT3B0aW9ucylcbiAgfSlcblxuICByZXR1cm4gbmV3IFNvcnRhYmxlKGRyYWdnYWJsZXMsIGxpc3RPcHRpb25zKVxufVxuXG5leHBvcnQgeyBTb3J0YWJsZSwgc29ydGFibGVGYWN0b3J5IH1cbiIsIid1c2Ugc3RyaWN0J1xuXG5pbXBvcnQgY3JlYXRlQ2FudmFzIGZyb20gJy4vdXRpbHMvY3JlYXRlY2FudmFzJ1xuaW1wb3J0IHsgR2VvbWV0cnkgfSBmcm9tICcuL2dlb21ldHJ5J1xuaW1wb3J0IHsgYm91bmRUb0xpbmUgfSBmcm9tICcuL2JvdW5kJ1xuaW1wb3J0IHsgRHJhZ2dhYmxlIH0gZnJvbSAnLi9kcmFnZ2FibGUnXG5cbmNvbnN0IHNwaWRlcnMgPSBbXVxuXG5jbGFzcyBTcGlkZXIge1xuICBjb25zdHJ1Y3RvcihhcmVhLCBlbGVtZW50cywgb3B0aW9ucz17fSkge1xuICAgIGNvbnN0IGFyZWFSZWN0YW5nbGUgPSBHZW9tZXRyeS5jcmVhdGVSZWN0YW5nbGVGcm9tRWxlbWVudChhcmVhLCBhcmVhKVxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgYW5nbGU6IDAsXG4gICAgICBkQW5nbGU6IDIgKiBNYXRoLlBJIC8gZWxlbWVudHMubGVuZ3RoLFxuICAgICAgY2VudGVyOiBhcmVhUmVjdGFuZ2xlLmdldENlbnRlcigpLFxuICAgICAgc3RhcnRSYWRpdXM6IDUwLFxuICAgICAgZW5kUmFkaXVzOiBhcmVhUmVjdGFuZ2xlLmdldE1pblNpZGUoKSAvIDIsXG4gICAgICBsaW5lV2lkdGg6IDIsXG4gICAgICBzdHJva2VTdHlsZTogJyNmZjU1NzcnLFxuICAgICAgZmlsbFN0eWxlOiAncmdiYSgxNTAsMjU1LDUwLDAuOCknXG4gICAgfSwgb3B0aW9ucylcblxuICAgIHNwaWRlcnMucHVzaCh0aGlzKVxuICAgIHRoaXMuYXJlYSA9IGFyZWFcbiAgICB0aGlzLmFyZWFSZWN0YW5nbGUgPSBhcmVhUmVjdGFuZ2xlXG4gICAgdGhpcy5pbml0KGVsZW1lbnRzKVxuICB9XG5cbiAgaW5pdChlbGVtZW50cykge1xuICAgIHRoaXMuY2FudmFzID0gY3JlYXRlQ2FudmFzKHRoaXMuYXJlYSwgdGhpcy5hcmVhUmVjdGFuZ2xlKVxuICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJylcblxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGVsZW1lbnRzLm1hcCgoZWxlbWVudCwgaSkgPT4ge1xuICAgICAgY29uc3QgYW5nbGUgPSB0aGlzLm9wdGlvbnMuYW5nbGUgKyBpICogdGhpcy5vcHRpb25zLmRBbmdsZVxuICAgICAgY29uc3QgaGFsZlNpemUgPSBHZW9tZXRyeS5nZXRTaXplT2ZFbGVtZW50KGVsZW1lbnQpLm11bHQoMC41KVxuICAgICAgY29uc3Qgc3RhcnQgPSBHZW9tZXRyeS5nZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oYW5nbGUsIHRoaXMub3B0aW9ucy5zdGFydFJhZGl1cywgdGhpcy5vcHRpb25zLmNlbnRlcikuc3ViKGhhbGZTaXplKVxuICAgICAgY29uc3QgZW5kID0gR2VvbWV0cnkuZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKGFuZ2xlLCB0aGlzLm9wdGlvbnMuZW5kUmFkaXVzLCB0aGlzLm9wdGlvbnMuY2VudGVyKS5zdWIoaGFsZlNpemUpXG4gICAgICBjb25zdCBib3VuZCA9IGJvdW5kVG9MaW5lKHN0YXJ0LCBlbmQpXG5cbiAgICAgIHJldHVybiBuZXcgRHJhZ2dhYmxlKGVsZW1lbnQsIHtcbiAgICAgICAgcGFyZW50OiB0aGlzLmFyZWEsXG4gICAgICAgIGJvdW5kOiBib3VuZCxcbiAgICAgICAgcG9zaXRpb246IHN0YXJ0LFxuICAgICAgICBvbk1vdmU6ICgpID0+IHtcbiAgICAgICAgICB0aGlzLmRyYXcoKVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcblxuICAgIHRoaXMuaXNJbml0ID0gdHJ1ZVxuICAgIHRoaXMuZHJhdygpXG4gIH1cblxuICBkcmF3KCkge1xuICAgIGlmICghdGhpcy5pc0luaXQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMuYXJlYVJlY3RhbmdsZS5zaXplLngsIHRoaXMuYXJlYVJlY3RhbmdsZS5zaXplLnkpXG4gICAgdGhpcy5jb250ZXh0LmJlZ2luUGF0aCgpXG5cbiAgICBsZXQgcG9pbnQgPSB0aGlzLmRyYWdnYWJsZXNbMF0uZ2V0Q2VudGVyKClcbiAgICB0aGlzLmNvbnRleHQubW92ZVRvKHBvaW50LngsIHBvaW50LnkpXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZHJhZ2dhYmxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgcG9pbnQgPSB0aGlzLmRyYWdnYWJsZXNbaV0uZ2V0Q2VudGVyKClcbiAgICAgIHRoaXMuY29udGV4dC5saW5lVG8ocG9pbnQueCwgcG9pbnQueSlcbiAgICB9XG4gICAgdGhpcy5jb250ZXh0LmNsb3NlUGF0aCgpXG4gICAgdGhpcy5jb250ZXh0LmxpbmVXaWR0aCA9IHRoaXMub3B0aW9ucy5saW5lV2lkdGhcbiAgICB0aGlzLmNvbnRleHQuc3Ryb2tlU3R5bGUgPSB0aGlzLm9wdGlvbnMuc3Ryb2tlU3R5bGVcbiAgICB0aGlzLmNvbnRleHQuc3Ryb2tlKClcbiAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5vcHRpb25zLmZpbGxTdHlsZVxuICAgIHRoaXMuY29udGV4dC5maWxsKClcbiAgfVxufVxuXG5leHBvcnQgeyBzcGlkZXJzLCBTcGlkZXIgfVxuIiwiaW1wb3J0IHJhbmdlIGZyb20gJy4vdXRpbHMvcmFuZ2UuanMnXG5pbXBvcnQgcmVtb3ZlSXRlbXMgZnJvbSAncmVtb3ZlLWFycmF5LWl0ZW1zJ1xuaW1wb3J0IGdldERlZmF1bHRQYXJlbnQgZnJvbSAnLi91dGlscy9nZXRkZWZhdWx0cGFyZW50J1xuaW1wb3J0IEV2ZW50IGZyb20gJy4vZXZlbnQnXG5pbXBvcnQgeyBHZW9tZXRyeSB9IGZyb20gJy4vZ2VvbWV0cnknXG5pbXBvcnQgeyBwb3NpdGlvblR5cGUsIHNvcnRpbmdGYWN0b3J5LCBwb3NpdGlvbkZhY3RvcnkgfSBmcm9tICcuL3Bvc2l0aW9uaW5nJ1xuaW1wb3J0IHsgc2NvcGVzLCBkZWZhdWx0U2NvcGUgfSBmcm9tICcuL3Njb3BlJ1xuXG5jb25zdCBEcmFnZWUgPSB7IHBvc2l0aW9uVHlwZSwgIHBvc2l0aW9uRmFjdG9yeSwgc29ydGluZ0ZhY3RvcnksIHNjb3BlcywgRXZlbnQgfS8vdG9kbyByZW1vdmUgYWZ0ZXIgcmVmYWN0b3JlXG5cbmNvbnN0IHRhcmdldHMgPSBbXSxcbiAgYWRkVG9EZWZhdWx0U2NvcGUgPSBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICBkZWZhdWx0U2NvcGUuYWRkVGFyZ2V0KHRhcmdldClcbiAgfVxuXG5jbGFzcyBUYXJnZXQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBkcmFnZ2FibGVzLCBvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCB0YXJnZXQgPSB0aGlzXG4gICAgY29uc3QgcGFyZW50ID0gb3B0aW9ucy5wYXJlbnQgfHwgZ2V0RGVmYXVsdFBhcmVudChlbGVtZW50KVxuXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICB0aW1lRW5kOiAyMDAsXG4gICAgICB0aW1lRXhjYW5nZTogNDAwLFxuICAgICAgcGFyZW50OiBwYXJlbnQsXG4gICAgICBzb3J0aW5nOiBEcmFnZWUuc29ydGluZ0ZhY3RvcnkoRHJhZ2VlLnBvc2l0aW9uVHlwZS5mbG9hdExlZnQpKDgwLCBHZW9tZXRyeS50cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5KHsgeDogMSwgeTogNCB9KSksXG4gICAgICBwb3NpdGlvbmluZzogRHJhZ2VlLnBvc2l0aW9uRmFjdG9yeShEcmFnZWUucG9zaXRpb25UeXBlLmZsb2F0TGVmdCkodGhpcy5nZXRSZWN0YW5nbGUuYmluZCh0aGlzKSwgeyByZW1vdmFibGU6IHRydWUgfSlcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGFyZ2V0cy5wdXNoKHRoaXMpXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUudGFyZ2V0cy5wdXNoKHRhcmdldCkpXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gZHJhZ2dhYmxlc1xuICAgIHRoaXMub25BZGQgPSBuZXcgRHJhZ2VlLkV2ZW50KHRoaXMpXG4gICAgdGhpcy5iZWZvcmVBZGQgPSBuZXcgRHJhZ2VlLkV2ZW50KHRoaXMpXG4gICAgdGhpcy5vblJlbW92ZSA9IG5ldyBEcmFnZWUuRXZlbnQodGhpcylcblxuICAgIGlmIChvcHRpb25zLm9uUmVtb3ZlKSB7XG4gICAgICB0aGlzLm9uUmVtb3ZlLmFkZChvcHRpb25zLm9uUmVtb3ZlKVxuICAgIH1cblxuICAgIGlmIChvcHRpb25zLm9uQWRkKSB7XG4gICAgICB0aGlzLm9uQWRkLmFkZChvcHRpb25zLm9uQWRkKVxuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmJlZm9yZUFkZCkge1xuICAgICAgdGhpcy5iZWZvcmVBZGQuYWRkKG9wdGlvbnMuYmVmb3JlQWRkKVxuICAgIH1cblxuICAgIFRhcmdldC5vbkNyZWF0ZS5maXJlKHRoaXMpXG5cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBsZXQgcmVjdGFuZ2xlcywgaW5kZXhlc09mTmV3XG5cbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcyA9IHRoaXMuZHJhZ2dhYmxlcy5maWx0ZXIoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgbGV0IGVsZW1lbnQgPSBkcmFnZ2FibGUuZWxlbWVudC5wYXJlbnROb2RlXG4gICAgICB3aGlsZSAoZWxlbWVudCkge1xuICAgICAgICBpZiAoZWxlbWVudCA9PT0gdGhpcy5lbGVtZW50KSB7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlXG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9KVxuXG4gICAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmxlbmd0aCkge1xuICAgICAgaW5kZXhlc09mTmV3ID0gcmFuZ2UodGhpcy5pbm5lckRyYWdnYWJsZXMubGVuZ3RoKVxuICAgICAgcmVjdGFuZ2xlcyA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgICB9KSwgaW5kZXhlc09mTmV3KVxuICAgICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXcpXG4gICAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHRoaXMub25BZGQuZmlyZShkcmFnZ2FibGUpKVxuICAgIH1cbiAgfVxuXG4gIGdldFJlY3RhbmdsZSgpIHtcbiAgICByZXR1cm4gR2VvbWV0cnkuY3JlYXRlUmVjdGFuZ2xlRnJvbUVsZW1lbnQoXG4gICAgICB0aGlzLmVsZW1lbnQsXG4gICAgICB0aGlzLm9wdGlvbnMucGFyZW50LFxuICAgICAgdGhpcy5vcHRpb25zLmlzQ29udGVudEJveFNpemUsXG4gICAgICB0cnVlXG4gICAgKVxuICB9XG5cbiAgY2F0Y2hEcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5jYXRjaERyYWdnYWJsZSkge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5jYXRjaERyYWdnYWJsZSh0aGlzLCBkcmFnZ2FibGUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRhcmdldFJlY3RhbmdsZSA9IHRoaXMuZ2V0UmVjdGFuZ2xlKClcbiAgICAgIGNvbnN0IGRyYWdnYWJsZVNxdWFyZSA9IGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKS5nZXRTcXVhcmUoKVxuXG4gICAgICByZXR1cm4gZHJhZ2dhYmxlU3F1YXJlIDwgdGFyZ2V0UmVjdGFuZ2xlLmdldFNxdWFyZSgpXG4gICAgICAgICAgICAgICYmIHRhcmdldFJlY3RhbmdsZS5pbmNsdWRlUG9pbnQoZHJhZ2dhYmxlLmdldENlbnRlcigpKVxuICAgIH1cbiAgfVxuXG4gIGdldFBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFJlY3RhbmdsZSgpLnBvc2l0aW9uXG4gIH1cblxuICBnZXRTaXplKCkge1xuICAgIHJldHVybiB0aGlzLmdldFJlY3RhbmdsZSgpLnNpemVcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgRHJhZ2VlLnNjb3Blcy5mb3JFYWNoKChzY29wZSkgPT4gcmVtb3ZlSXRlbXMoc2NvcGUudGFyZ2V0cywgdGhpcykpXG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLm9wdGlvbnMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgW10pXG4gICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBbXSwgMClcbiAgfVxuXG4gIG9uRW5kKGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IG5ld0RyYWdnYWJsZXNJbmRleCA9IFtdXG4gICAgY29uc3QgaW5jbHVkZVBvaW50ID0gdGhpcy5nZXRSZWN0YW5nbGUoKS5pbmNsdWRlUG9pbnQoZHJhZ2dhYmxlLmdldFBvc2l0aW9uKCkpXG5cbiAgICBpZiAoIWluY2x1ZGVQb2ludCkge1xuICAgICAgaWYgKHRoaXMuZ2V0UmVjdGFuZ2xlKCkuaW5jbHVkZVBvaW50KGRyYWdnYWJsZS5nZXRDZW50ZXIoKSkpIHtcbiAgICAgICAgZHJhZ2dhYmxlLnBvc2l0aW9uID0gZHJhZ2dhYmxlLmdldENlbnRlcigpLmNsb25lKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuYmVmb3JlQWRkLmZpcmUoZHJhZ2dhYmxlKVxuXG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMgPSB0aGlzLm9wdGlvbnMuc29ydGluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcywgW2RyYWdnYWJsZV0sIG5ld0RyYWdnYWJsZXNJbmRleClcbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgfSksIG5ld0RyYWdnYWJsZXNJbmRleCwgZHJhZ2dhYmxlKVxuXG4gICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBuZXdEcmFnZ2FibGVzSW5kZXgpXG4gICAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTEpIHtcbiAgICAgIHRoaXMuYWRkUmVtb3ZlT25Nb3ZlKGRyYWdnYWJsZSlcbiAgICB9XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIHNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIGluZGV4ZXNPZk5ldywgdGltZSkge1xuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnNsaWNlKDApLmZvckVhY2goKGRyYWdnYWJsZSwgaSkgPT4ge1xuICAgICAgY29uc3QgcmVjdCA9IHJlY3RhbmdsZXNbaV0sXG4gICAgICAgIHRpbWVFbmQgPSB0aW1lIHx8IHRpbWUgPT09IDAgPyB0aW1lIDogaW5kZXhlc09mTmV3LmluZGV4T2YoaSkgIT09IC0xID8gdGhpcy5vcHRpb25zLnRpbWVFbmQgOiB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2VcblxuICAgICAgaWYgKHJlY3QucmVtb3ZhYmxlKSB7XG4gICAgICAgIGRyYWdnYWJsZS5tb3ZlKGRyYWdnYWJsZS5pbml0UG9zaXRpb24sIHRpbWVFbmQsIHRydWUsIHRydWUpXG4gICAgICAgIHJlbW92ZUl0ZW1zKHRoaXMuaW5uZXJEcmFnZ2FibGVzLCBkcmFnZ2FibGUpXG5cbiAgICAgICAgdGhpcy5vblJlbW92ZS5maXJlKGRyYWdnYWJsZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRyYWdnYWJsZS5tb3ZlKHJlY3QucG9zaXRpb24sIHRpbWVFbmQsIHRydWUsIHRydWUpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGFkZChkcmFnZ2FibGUsIHRpbWUpIHtcbiAgICBjb25zdCBuZXdEcmFnZ2FibGVzSW5kZXggPSB0aGlzLmlubmVyRHJhZ2dhYmxlcy5sZW5ndGhcblxuICAgIHRoaXMuYmVmb3JlQWRkLmZpcmUoZHJhZ2dhYmxlKVxuXG4gICAgdGhpcy5wdXNoSW5uZXJEcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICAgIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLm9wdGlvbnMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgbmV3RHJhZ2dhYmxlc0luZGV4LCBkcmFnZ2FibGUpXG5cbiAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIFtuZXdEcmFnZ2FibGVzSW5kZXhdLCB0aW1lIHx8IDApXG4gICAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTEpIHtcbiAgICAgIHRoaXMuYWRkUmVtb3ZlT25Nb3ZlKGRyYWdnYWJsZSlcbiAgICB9XG4gIH1cblxuICBwdXNoSW5uZXJEcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKT09PS0xKSB7XG4gICAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5wdXNoKGRyYWdnYWJsZSlcbiAgICB9XG4gIH1cblxuICBhZGRSZW1vdmVPbk1vdmUoZHJhZ2dhYmxlKSB7XG4gICAgZHJhZ2dhYmxlLm9uTW92ZS5hZGQodGhpcy5yZW1vdmVIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgdGhpcy5yZW1vdmUoZHJhZ2dhYmxlKVxuICAgIH0pXG5cbiAgICB0aGlzLm9uQWRkLmZpcmUoZHJhZ2dhYmxlKVxuICB9XG5cbiAgcmVtb3ZlKGRyYWdnYWJsZSkge1xuICAgIGRyYWdnYWJsZS5vbk1vdmUucmVtb3ZlKHRoaXMucmVtb3ZlSGFuZGxlcilcblxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpXG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuc3BsaWNlKGluZGV4LCAxKVxuXG4gICAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBbXSlcblxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgW10pXG4gICAgdGhpcy5vblJlbW92ZS5maXJlKGRyYWdnYWJsZSlcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLm1vdmUoZHJhZ2dhYmxlLmluaXRQb3NpdGlvbiwgMCwgdHJ1ZSwgdHJ1ZSlcbiAgICAgIHRoaXMub25SZW1vdmUuZmlyZShkcmFnZ2FibGUpXG4gICAgfSlcbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcyA9IFtdXG4gIH1cblxuICBnZXRTb3J0ZWREcmFnZ2FibGVzKCkge1xuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnNsaWNlKClcbiAgfVxufVxuXG5UYXJnZXQub25DcmVhdGUgPSBuZXcgRHJhZ2VlLkV2ZW50KFRhcmdldCwgeyBpc1JldmVyc2U6IHRydWUsIGlzU3RvcE9uVHJ1ZTogdHJ1ZSB9KVxuVGFyZ2V0Lm9uQ3JlYXRlLmFkZChhZGRUb0RlZmF1bHRTY29wZSlcblxuZXhwb3J0IHsgdGFyZ2V0cywgVGFyZ2V0IH1cbiIsImV4cG9ydCBmdW5jdGlvbiBoYXNDbGFzcyhlbGVtZW50LCBjKSB7XG4gIGNvbnN0IHJlID0gbmV3IFJlZ0V4cCgnKF58XFxcXHMpJyArIGMgKyAnKFxcXFxzfCQpJywgJ2cnKVxuICByZXR1cm4gKHJlLnRlc3QoZWxlbWVudC5jbGFzc05hbWUpKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQ2xhc3MoZWxlbWVudCwgYykge1xuICBpZiAoIWhhc0NsYXNzKGVsZW1lbnQsIGMpKSB7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSAoZWxlbWVudC5jbGFzc05hbWUgKyAnICcgKyBjKS5yZXBsYWNlKC9cXHMrL2csICcgJykucmVwbGFjZSgvKF4gfCAkKS9nLCAnJylcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoZWxlbWVudCwgYykge1xuICBjb25zdCByZSA9IG5ldyBSZWdFeHAoJyhefFxcXFxzKScgKyBjICsgJyhcXFxcc3wkKScsICdnJylcbiAgZWxlbWVudC5jbGFzc05hbWUgPSBlbGVtZW50LmNsYXNzTmFtZS5yZXBsYWNlKHJlLCAnJDEnKS5yZXBsYWNlKC9cXHMrL2csICcgJykucmVwbGFjZSgvKF4gfCAkKS9nLCAnJylcbn1cbiIsImZ1bmN0aW9uIHNldFN0eWxlKGVsZW1lbnQsIHN0eWxlKSB7XG4gIHN0eWxlID0gc3R5bGUgfHwge31cbiAgbGV0IGNzc1RleHQgPSAnJ1xuICBmb3IgKGNvbnN0IGtleSBpbiBzdHlsZSkge1xuICAgIGlmIChzdHlsZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBjc3NUZXh0ICs9IGtleSArICc6ICcgKyBzdHlsZVtrZXldICsgJzsgJ1xuICAgIH1cbiAgfVxuXG4gIGVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IGNzc1RleHRcbn1cblxuZnVuY3Rpb24gYXBwZW5kRmlyc3RDaGlsZChlbGVtZW50LCBub2RlKSB7XG4gIGlmIChlbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICBlbGVtZW50Lmluc2VydEJlZm9yZShub2RlLCBlbGVtZW50LmZpcnN0Q2hpbGQpXG4gIH0gZWxzZSB7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChub2RlKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUNhbnZhcyhhcmVhLCByZWN0YWdsZSkge1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKVxuICBpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUoYXJlYSkucG9zaXRpb24gPT09ICdzdGF0aWMnKSB7XG4gICAgYXJlYS5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSdcbiAgfVxuXG4gIGNhbnZhcy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgcmVjdGFnbGUuc2l6ZS54ICsgJ3B4JylcbiAgY2FudmFzLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgcmVjdGFnbGUuc2l6ZS55ICsgJ3B4JylcbiAgc2V0U3R5bGUoY2FudmFzLCB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgbGVmdDogcmVjdGFnbGUucG9zaXRpb24ueSArICdweCcsXG4gICAgdG9wOiByZWN0YWdsZS5wb3NpdGlvbi55ICsgJ3B4JyxcbiAgICB3aWR0aDogcmVjdGFnbGUuc2l6ZS54ICsgJ3B4JyxcbiAgICBoZWlnaHQ6IHJlY3RhZ2xlLnNpemUueSArICdweCdcbiAgfSlcbiAgYXBwZW5kRmlyc3RDaGlsZChhcmVhLCBjYW52YXMpXG4gIHJldHVybiBjYW52YXNcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldERlZmF1bHRQYXJlbnQoZWxlbWVudCkge1xuICBsZXQgcGFyZW50ID0gZWxlbWVudC5wYXJlbnROb2RlXG4gIHdoaWxlIChwYXJlbnQucGFyZW50Tm9kZSAmJiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShwYXJlbnQpWydwb3NpdGlvbiddID09PSAnc3RhdGljJykge1xuICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlXG4gIH1cbiAgcmV0dXJuIHBhcmVudFxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmFuZ2Uoc3RhcnQsIHN0b3AsIHN0ZXApIHtcbiAgY29uc3QgcmVzdWx0ID0gW11cbiAgaWYgKHR5cGVvZiBzdG9wID09PSAndW5kZWZpbmVkJykge1xuICAgIHN0b3AgPSBzdGFydFxuICAgIHN0YXJ0ID0gMFxuICB9XG4gIGlmICh0eXBlb2Ygc3RlcCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBzdGVwID0gMVxuICB9XG4gIGlmICgoc3RlcCA+IDAgJiYgc3RhcnQgPj0gc3RvcCkgfHwgKHN0ZXAgPCAwICYmIHN0YXJ0IDw9IHN0b3ApKSB7XG4gICAgcmV0dXJuIFtdXG4gIH1cbiAgZm9yIChsZXQgaSA9IHN0YXJ0OyBzdGVwID4gMCA/IGkgPCBzdG9wIDogaSA+IHN0b3A7IGkgKz0gc3RlcCkge1xuICAgIHJlc3VsdC5wdXNoKGkpXG4gIH1cbiAgcmV0dXJuIHJlc3VsdFxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==