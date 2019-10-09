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

/***/ "./src/chart.js":
/*!**********************!*\
  !*** ./src/chart.js ***!
  \**********************/
/*! exports provided: Chart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/*! exports provided: Draggable, Point, Rectangle, Geometry, List, listFactory, Sortable, sortableFactory, Target, scopes, defaultScope, Scope, scopeFactory, scope, positionType, sortingFactory, positionFactory, Spider, ArcSlider, Chart, listSwitcherFactory, ListSwitcher */
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
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Spider", function() { return _spider__WEBPACK_IMPORTED_MODULE_8__["Spider"]; });

/* harmony import */ var _arcslider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./arcslider */ "./src/arcslider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArcSlider", function() { return _arcslider__WEBPACK_IMPORTED_MODULE_9__["ArcSlider"]; });

/* harmony import */ var _chart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./chart */ "./src/chart.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Chart", function() { return _chart__WEBPACK_IMPORTED_MODULE_10__["Chart"]; });

/* harmony import */ var _listswitcher__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./listswitcher */ "./src/listswitcher.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "listSwitcherFactory", function() { return _listswitcher__WEBPACK_IMPORTED_MODULE_11__["listSwitcherFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListSwitcher", function() { return _listswitcher__WEBPACK_IMPORTED_MODULE_11__["ListSwitcher"]; });















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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9EcmFnZWUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0RyYWdlZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9EcmFnZWUvLi9ub2RlX21vZHVsZXMvZGVzYW5kcm8tZ2V0LXN0eWxlLXByb3BlcnR5L2dldC1zdHlsZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9ub2RlX21vZHVsZXMvcmVtb3ZlLWFycmF5LWl0ZW1zL2Rpc3QvcmVtb3ZlLWFycmF5LWl0ZW1zLmVzbS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvYXJjc2xpZGVyLmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy9ib3VuZC5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvY2hhcnQuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL2RyYWdnYWJsZS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvZXZlbnQuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL2V4cGFuZG5hdGl2ZS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvZ2VvbWV0cnkuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy9saXN0LmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy9saXN0c3dpdGNoZXIuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL3Bvc2l0aW9uaW5nLmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy9zY29wZS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvc29ydGFibGUuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL3NwaWRlci5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvdGFyZ2V0LmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy91dGlscy9jbGFzc2VzLmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy91dGlscy9jcmVhdGVjYW52YXMuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL3V0aWxzL2dldGRlZmF1bHRwYXJlbnQuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL3V0aWxzL3JhbmdlLmpzIl0sIm5hbWVzIjpbIkFyY1NsaWRlciIsImFyZWEiLCJlbGVtZW50Iiwib3B0aW9ucyIsImFyZWFSZWN0YW5nbGUiLCJHZW9tZXRyeSIsImNyZWF0ZVJlY3RhbmdsZUZyb21FbGVtZW50IiwiaGFsZlNpemUiLCJnZXRTaXplT2ZFbGVtZW50IiwibXVsdCIsIk9iamVjdCIsImFzc2lnbiIsImNlbnRlciIsImdldENlbnRlciIsInJhZGl1cyIsImdldE1pblNpZGUiLCJzdGFydEFuZ2xlIiwiTWF0aCIsIlBJIiwiZW5kQW5nbGUiLCJhbmdsZXMiLCJvbkNoYW5nZSIsInRpbWUiLCJzaGlmdGVkQ2VudGVyIiwic3ViIiwiaW5pdCIsImFuZ2xlIiwicG9zaXRpb24iLCJnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0iLCJib3VuZCIsImJvdW5kVG9BcmMiLCJkcmFnZ2FibGUiLCJEcmFnZ2FibGUiLCJwYXJlbnQiLCJvbk1vdmUiLCJjaGFuZ2UiLCJnZXRBbmdsZSIsInVwZGF0ZUFuZ2xlIiwibm9ybWFsaXplQW5nbGUiLCJtb3ZlIiwiYm91bmRUb1JlY3RhbmdsZSIsInJlY3RhbmdsZSIsInBvaW50Iiwic2l6ZSIsImNhbGNQb2ludCIsImNsb25lIiwicmVjdFAyIiwiZ2V0UDMiLCJ4IiwieSIsImJvdW5kVG9FbGVtZW50IiwicmV0RnVuYyIsImFwcGx5IiwiYXJndW1lbnRzIiwicmVmcmVzaCIsImJvdW5kVG9MaW5lWCIsInN0YXJ0WSIsImVuZFkiLCJib3VuZFRvTGluZVkiLCJzdGFydFgiLCJlbmRYIiwiYm91bmRUb0xpbmUiLCJzdGFydCIsImVuZCIsImFscGhhIiwiYXRhbjIiLCJiZXRhIiwic29tZUsiLCJjb3NCZXRhIiwiY29zIiwic2luQmV0YSIsInNpbiIsInBvaW50MiIsIlBvaW50IiwibmV3RW5kIiwiZ2V0UG9pbnRJbkxpbmVCeUxlbmdodCIsInBvaW50Q3Jvc3NpbmciLCJkaXJlY3RDcm9zc2luZyIsImJvdW5kVG9DaXJjbGUiLCJfc2l6ZSIsImJvdW5kZWRQb2ludCIsInN0YXJ0QWdsZSIsImJvdW5kU3RhcnRBbmdsZSIsImJvdW5kRW5kdEFuZ2xlIiwiYm91bmRBbmdsZSIsImlzVG91Y2giLCJ3aW5kb3ciLCJyYW5kb21Db2xvciIsInJuZCIsInJvdW5kIiwicmFuZG9tIiwidG9IZXhTdHJpbmciLCJkaWdpdCIsInN0ciIsInRvU3RyaW5nIiwibGVuZ3RoIiwiZ2V0QXJyYXlXaXRoQm91bmRJbmRleGVzIiwiaW5kZXgiLCJyZXRJbmRleGVzIiwicHVzaCIsIkNoYXJ0IiwiZWxlbWVudHMiLCJ0b3VjaFJhZGl1cyIsImZpbGxTdHlsZXMiLCJyYW5nZSIsIm1hcCIsImluaXRBbmdsZXMiLCJ0b1JhZGlhbiIsImxpbWl0SW1nIiwibGltaXRJbWdPZmZzZXQiLCJpc1NlbGVjdGFibGUiLCJvbkRyYXciLCJjYW52YXMiLCJjcmVhdGVDYW52YXMiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImRyYWdnYWJsZXMiLCJpIiwiZ2V0Qm91bmRBbmdsZSIsImRyYXciLCJpc0luaXQiLCJpbml0U2VsZWN0Iiwic2V0QWN0aXZlQXJjIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50cyIsImUiLCJjaGFuZ2VkVG91Y2hlcyIsInBhZ2VYIiwiY2xpZW50WCIsInBhZ2VZIiwiY2xpZW50WSIsImNhbnZhc09mZnNldCIsImdldE9mZnNldCIsImdldEFyY09uUG9pbnQiLCJhY3RpdmVBcmNJbmRleCIsImdldFNpemUiLCJpc0Nsb3NzaW5nIiwic2lnbiIsInVwZGF0ZUFuZ2xlcyIsImNsZWFyUmVjdCIsImZvckVhY2giLCJfZHJhZ2dhYmxlIiwiZHJhd0FyYyIsImVuYWJsZUluZGV4ZXMiLCJpbmRleE9mIiwiZHJhd0xpbWl0SW1nIiwib3B0cyIsImNsb25lT2JqIiwiY2FsbCIsImNvbG9yIiwiZ2V0RmlsbFN0eWxlIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwiYXJjIiwibGluZVRvIiwiY2xvc2VQYXRoIiwiZmlsbFN0eWxlIiwiZmlsbCIsImltZyIsIkFycmF5IiwiaGVpZ2h0IiwiYWRkIiwidHJhbnNsYXRlIiwicm90YXRlIiwiZHJhd0ltYWdlIiwic2V0VHJhbnNmb3JtIiwic2xpY2UiLCJiYXNlQW5nbGUiLCJkaWZmQW5nbGUiLCJnZXRBbmdsZXNEaWZmIiwiZ2V0RGlzdGFuY2UiLCJvZmZzZXQiLCJqIiwiZW5hYmxlIiwiRHJhZ2VlIiwiRXZlbnQiLCJtb3VzZUV2ZW50cyIsInRvdWNoRXZlbnRzIiwidHJhbnNmb3JtUHJvcGVydHkiLCJnZXRTdHlsZVByb3BlcnR5IiwidHJhbnNpdGlvblByb3BlcnR5IiwiZ2V0VG91Y2hCeUlEIiwidG91Y2hJZCIsImlkZW50aWZpZXIiLCJwcmV2ZW50RG91YmxlSW5pdCIsIm1lc3NhZ2UiLCJzb21lIiwiZXhpc3RpbmciLCJhZGRUb0RlZmF1bHRTY29wZSIsImRlZmF1bHRTY29wZSIsImFkZERyYWdnYWJsZSIsImdldERlZmF1bHRQYXJlbnQiLCJ0YXJnZXRzIiwic3RhcnRGaWx0ZXIiLCJpc0NvbnRlbnRCb3hTaXplIiwiaGFuZGxlciIsInF1ZXJ5U2VsZWN0b3IiLCJvbkVuZCIsImlzUmV2ZXJzZSIsImlzU3RvcE9uVHJ1ZSIsIm9uU3RhcnQiLCJvbkNyZWF0ZSIsImZpcmUiLCJfZW5hYmxlIiwiZml4UG9zaXRpb24iLCJpbml0UG9zaXRpb24iLCJfZHJhZ1N0YXJ0IiwiZHJhZ1N0YXJ0IiwiYmluZCIsIl9kcmFnTW92ZSIsImRyYWdNb3ZlIiwiX2RyYWdFbmQiLCJkcmFnRW5kIiwiX3JlY2FsdWxhdGUiLCJfdHJhbnNmb3JtUG9zaXRpb24iLCJ0cmFuc2Zvcm0iLCJzdHlsZSIsInRyYW5zbGF0ZUNzcyIsInVhIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwibXNpZSIsInRlc3QiLCJyZXBsYWNlIiwiaXNGaXgiLCJpc1NpbGVudCIsImRldGVybWluZURpcmVjdGlvbiIsIl9zZXRUcmFuc2xhdGUiLCJzZXRQb3NpdGlvbiIsImdldFBvc2l0aW9uIiwibGVmdERpcmVjdGlvbiIsInJpZ2h0RGlyZWN0aW9uIiwidXBEaXJlY3Rpb24iLCJkb3duRGlyZWN0aW9uIiwiZXZlbnQiLCJjdXJyZW50RXZlbnQiLCJpc1RvdWNoRXZlbnQiLCJUb3VjaEV2ZW50IiwiX3N0YXJ0VG91Y2hQb2ludCIsIl9zdGFydFBvc2l0aW9uIiwiX3RvdWNoSWQiLCJzdG9wUHJvcGFnYXRpb24iLCJ0YXJnZXQiLCJIVE1MSW5wdXRFbGVtZW50IiwicHJldmVudERlZmF1bHQiLCJmb2N1cyIsImRvY3VtZW50IiwiaXNEcmFnZ2luZyIsImFkZENsYXNzIiwidG91Y2giLCJ0b3VjaFBvaW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbW92ZUNsYXNzIiwiUmVjdGFuZ2xlIiwicmVzZXQiLCJmdW5jcyIsInByb3RvdHlwZSIsImFyZ3MiLCJmcyIsInJldmVyc2UiLCJyZXRWYWx1ZSIsImYiLCJ1bnNoaWZ0IiwicmVtb3ZlIiwic3BsaWNlIiwiX2YiLCJhdWdtZW50IiwicmVjZWl2aW5nQ2xhc3MiLCJnaXZpbmdDbGFzcyIsImxlbiIsIm1ldGhvZE5hbWUiLCJOb2RlTGlzdCIsInAiLCJrIiwicmVjdCIsIm1pbiIsIm1heCIsImluY2x1ZGVQb2ludCIsImF4aXMiLCJzZWxBeGlzIiwiY3Jvc3NSZWN0YW5nbGUiLCJhbmQiLCJ0aGlzQ2VudGVyIiwicmVjdENlbnRlciIsImVsIiwibGVmdCIsInRvcCIsIndpZHRoIiwicDEiLCJwMiIsImR4IiwiZHkiLCJzcXJ0IiwiZGlzdGFuY2UiLCJnZXRYRGlmZmVyZW5jZSIsImFicyIsImdldFlEaWZmZXJlbmNlIiwidHJhbnNmb3JtZWRTcGFjZURpc3RhbmNlRmFjdG9yeSIsInBvdyIsImluZGV4T2ZOZWFyZXN0UG9pbnQiLCJhcnIiLCJ2YWwiLCJ0ZW1wIiwiYm91bmRQb2ludCIsIkwxUDEiLCJMMVAyIiwiTDJQMSIsIkwyUDIiLCJrMSIsImsyIiwiYjEiLCJiMiIsImJvdW5kVG9TZWdtZW50IiwiTFAxIiwiTFAyIiwiUCIsIkEiLCJCIiwiQVAiLCJBQiIsImFiMiIsImFwX2FiIiwidCIsImdldFBvaW50SW5MaW5lIiwicGVyY2VudCIsImxlbmdodCIsImlzQ29uc2lkZXJUcmFuc2xhdGUiLCJwYXJlbnROb2RlIiwiZ2V0U3VtVmFsdWVPZlN0eWxlUnVsZSIsInJ1bGVzIiwicmVkdWNlIiwic3VtIiwicnVsZSIsInBhcnNlSW50IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImVsUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInBhcmVudFJlY3QiLCJhZGRQb2ludFRvQm91bmRQb2ludHMiLCJib3VuZHBvaW50cyIsImlzUmlnaHQiLCJyZXN1bHQiLCJmaWx0ZXIiLCJiUG9pbnQiLCJkaWZmIiwidG9EZWdyZWUiLCJkbWluIiwiZG1heCIsImdldEFuZ2xlRGlmZiIsImdldE5lYXJlc3RBbmdsZSIsInZhbHVlIiwibWluQW5nbGUiLCJtYXhBbmdsZSIsIkxpc3QiLCJ0aW1lRW5kIiwidGltZUV4Y2FuZ2UiLCJpc0Rpc3BsYWNlbWVudCIsImlzU29ydGFibGUiLCJpbml0RHJhZ2dhYmxlIiwibW92ZUhhbmRsZXIiLCJsaXN0Iiwib25FbmREaXNwbGF5Y2VtZW50IiwiZml4UG9zaXRpb25zIiwiZ2V0Q3VycmVudEZpeFBvc2l0aW9uIiwiY3VycmVudEluZGV4IiwiZXhjYW5nZUluZGV4IiwibW92ZU9yU2F2ZSIsIm5leHREcmFnZ2FibGUiLCJwcmV2RHJhZ2dhYmxlIiwic29ydElmUG9zc2libGUiLCJzb3J0ZWREcmFnZ2FibGVzIiwiZ2V0U29ydGVkRHJhZ2dhYmxlcyIsInRhcmdldEluZGV4IiwiaW5pdFBvc2l0aW9ucyIsImNvbXBhcmUiLCJjb25jYXQiLCJyZW1vdmVJdGVtcyIsImRlc3Ryb3kiLCJwb3NpdGlvbnMiLCJsaXN0RmFjdG9yeSIsInBhcmVudEVsZW1lbnQiLCJkcmFnZ2FibGVPcHRpb25zIiwibGlzdE9wdGlvbnMiLCJMaXN0U3dpdGNoZXIiLCJzdGVwT24iLCJpc09uIiwiZ2V0Q3VycmVudEZpeFBvc2l0aW9uV2l0aE9mZiIsIm1vdmVEcmFnZ2FibGUiLCJmaXhUb09mZiIsIm1vdmVEcmFnZ2FibGVUb09mZiIsImZpeE9mZlBvc2l0aW9uIiwibGlzdFN3aXRjaGVyRmFjdG9yeSIsImRyYWdnYWJsZUVsZW1lbnRzIiwicG9zaXRpb25UeXBlIiwibm90Q3Jvc3NpbmciLCJmbG9hdExlZnQiLCJmbG9hdFJpZ2h0IiwicG9zaXRpb25GYWN0b3J5IiwidHlwZSIsIl9vcHRpb25zIiwicmVjdGFuZ2xlTGlzdCIsImluZGV4ZXNPZk5ld3MiLCJib3VuZFJlY3QiLCJzdGF0aWNSZWN0YW5nbGVJbmRleGVzIiwiaW5kZXhlcyIsIl9yZWN0IiwicmVtb3ZhYmxlIiwiaW5kZXhPZlN0YXRpYyIsInN0YXRpY1JlY3QiLCJtb3ZlVG9Cb3VuZCIsImdldFNxdWFyZSIsInBhZGRpbmdUb3BMZWZ0IiwicGFkZGluZ0JvdHRvbVJpZ2h0IiwieUdhcEJldHdlZW5EcmFnZ2FibGVzIiwiX2luZGV4ZXNPZk5ld3MiLCJnZXRQMiIsImJvdW5kYXJ5UG9pbnRzIiwiaXNWYWxpZCIsImFzc2luZyIsInBhZGRpbmdUb3BSaWdodCIsInBhZGRpbmdCb3R0b21MZWZ0IiwicGFkZGluZ1RvcE5lZ1JpZ2h0IiwicGFkZGluZ0JvdHRvbU5lZ0xlZnQiLCJnZXRSaWdodFRvcFBvaW50IiwiX2luZGV4IiwiZ2V0TGVmdEJvdHRvbVBvaW50IiwiZ2V0UDQiLCJzb3J0aW5nRmFjdG9yeSIsIm9sZE9ianNMaXN0IiwibmV3T2JqcyIsImluZGV4T2ZOZXdzIiwib2Jqc0xpc3QiLCJvYmoiLCJuZXdMaXN0IiwibGlzdE9sZFBvc2l0aW9uIiwibmV3T2JqIiwic2NvcGVzIiwiU2NvcGUiLCJzY29wZSIsInNob3RUYXJnZXRzIiwiY2F0Y2hEcmFnZ2FibGUiLCJzb3J0IiwiYSIsImIiLCJnZXRSZWN0YW5nbGUiLCJpbm5lckRyYWdnYWJsZXMiLCJ0YXJnZXRJbmRleGVzIiwiZm4iLCJjdXJyZW50U2NvcGUiLCJhZGREcmFnZ2FibGVUb1Njb3BlIiwiYWRkVGFyZ2V0VG9TY29wZSIsImFkZFRhcmdldCIsIlRhcmdldCIsInNjb3BlRmFjdG9yeSIsInRhcmdldEVsZW1lbnRzIiwidGFyZ2V0T3B0aW9ucyIsInNjb3BlT3B0aW9ucyIsIlNvcnRhYmxlIiwiZXhjaGFuZ2VEcmFnZ2FibGVJZlBvc3NpYmxlIiwic29ydGFibGVGYWN0b3J5IiwiU3BpZGVyIiwiZEFuZ2xlIiwic3RhcnRSYWRpdXMiLCJlbmRSYWRpdXMiLCJsaW5lV2lkdGgiLCJzdHJva2VTdHlsZSIsInN0cm9rZSIsInNvcnRpbmciLCJwb3NpdGlvbmluZyIsIm9uQWRkIiwiYmVmb3JlQWRkIiwib25SZW1vdmUiLCJyZWN0YW5nbGVzIiwiaW5kZXhlc09mTmV3IiwidGFyZ2V0UmVjdGFuZ2xlIiwiZHJhZ2dhYmxlU3F1YXJlIiwibmV3RHJhZ2dhYmxlc0luZGV4IiwiYWRkUmVtb3ZlT25Nb3ZlIiwicHVzaElubmVyRHJhZ2dhYmxlIiwicmVtb3ZlSGFuZGxlciIsImhhc0NsYXNzIiwiYyIsInJlIiwiUmVnRXhwIiwiY2xhc3NOYW1lIiwic2V0U3R5bGUiLCJjc3NUZXh0Iiwia2V5IiwiaGFzT3duUHJvcGVydHkiLCJhcHBlbmRGaXJzdENoaWxkIiwibm9kZSIsImZpcnN0Q2hpbGQiLCJpbnNlcnRCZWZvcmUiLCJhcHBlbmRDaGlsZCIsInJlY3RhZ2xlIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsInN0b3AiLCJzdGVwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUNBQXVDLFNBQVM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSyxJQUEwQztBQUMvQztBQUNBLEVBQUUsbUNBQVE7QUFDVjtBQUNBLEdBQUc7QUFBQSxvR0FBQztBQUNKLENBQUMsTUFBTSxFQU1OOztBQUVELENBQUM7Ozs7Ozs7Ozs7Ozs7QUN0REQ7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTs7QUFFQTtBQUNBOztBQUVlLDBFQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCM0I7QUFDQTtBQUNBOztJQUVNQSxTOzs7QUFDSixxQkFBWUMsSUFBWixFQUFrQkMsT0FBbEIsRUFBdUM7QUFBQSxRQUFaQyxPQUFZLHVFQUFKLEVBQUk7O0FBQUE7O0FBQ3JDLFFBQU1DLGFBQWEsR0FBR0Msa0RBQVEsQ0FBQ0MsMEJBQVQsQ0FBb0NMLElBQXBDLEVBQTBDQSxJQUExQyxDQUF0QjtBQUNBLFFBQU1NLFFBQVEsR0FBR0Ysa0RBQVEsQ0FBQ0csZ0JBQVQsQ0FBMEJOLE9BQTFCLEVBQW1DTyxJQUFuQyxDQUF3QyxHQUF4QyxDQUFqQjtBQUNBLFNBQUtOLE9BQUwsR0FBZU8sTUFBTSxDQUFDQyxNQUFQLENBQWM7QUFDM0JDLFlBQU0sRUFBRVIsYUFBYSxDQUFDUyxTQUFkLEVBRG1CO0FBRTNCQyxZQUFNLEVBQUVWLGFBQWEsQ0FBQ1csVUFBZCxLQUE2QixDQUZWO0FBRzNCQyxnQkFBVSxFQUFFQyxJQUFJLENBQUNDLEVBSFU7QUFJM0JDLGNBQVEsRUFBRSxDQUppQjtBQUszQkMsWUFBTSxFQUFFLENBQUNILElBQUksQ0FBQ0MsRUFBTixFQUFVLENBQUNELElBQUksQ0FBQ0MsRUFBTixHQUFXLENBQXJCLEVBQXdCLENBQXhCLEVBQTJCRCxJQUFJLENBQUNDLEVBQUwsR0FBVSxDQUFyQyxFQUF3Q0QsSUFBSSxDQUFDQyxFQUFMLEdBQVUsQ0FBbEQsQ0FMbUI7QUFNM0JHLGNBQVEsRUFBRSxvQkFBVyxDQUFFLENBTkk7QUFPM0JDLFVBQUksRUFBRTtBQVBxQixLQUFkLEVBUVpuQixPQVJZLENBQWY7QUFVQSxTQUFLb0IsYUFBTCxHQUFxQixLQUFLcEIsT0FBTCxDQUFhUyxNQUFiLENBQW9CWSxHQUFwQixDQUF3QmpCLFFBQXhCLENBQXJCO0FBQ0EsU0FBS2MsUUFBTCxHQUFnQixLQUFLbEIsT0FBTCxDQUFha0IsUUFBN0I7QUFDQSxTQUFLcEIsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS3dCLElBQUwsQ0FBVXZCLE9BQVY7QUFDRDs7Ozt5QkFFSUEsTyxFQUFTO0FBQUE7O0FBQ1osVUFBTXdCLEtBQUssR0FBRyxLQUFLdkIsT0FBTCxDQUFhYSxVQUEzQjtBQUNBLFVBQU1XLFFBQVEsR0FBR3RCLGtEQUFRLENBQUN1Qix3QkFBVCxDQUNmRixLQURlLEVBRWYsS0FBS3ZCLE9BQUwsQ0FBYVcsTUFGRSxFQUdmLEtBQUtTLGFBSFUsQ0FBakI7QUFLQSxVQUFNTSxLQUFLLEdBQUdDLHlEQUFVLENBQ3RCLEtBQUtQLGFBRGlCLEVBRXRCLEtBQUtwQixPQUFMLENBQWFXLE1BRlMsRUFHdEIsS0FBS1gsT0FBTCxDQUFhYSxVQUhTLEVBSXRCLEtBQUtiLE9BQUwsQ0FBYWdCLFFBSlMsQ0FBeEI7QUFPQSxXQUFLTyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxXQUFLSyxTQUFMLEdBQWlCLElBQUlDLG9EQUFKLENBQWM5QixPQUFkLEVBQXVCO0FBQ3RDK0IsY0FBTSxFQUFFLEtBQUtoQyxJQUR5QjtBQUV0QzRCLGFBQUssRUFBRUEsS0FGK0I7QUFHdENGLGdCQUFRLEVBQUVBLFFBSDRCO0FBSXRDTyxjQUFNLEVBQUUsa0JBQU07QUFDWixlQUFJLENBQUNDLE1BQUw7O0FBQ0EsaUJBQU8sSUFBUDtBQUNEO0FBUHFDLE9BQXZCLENBQWpCO0FBU0Q7OztrQ0FFYTtBQUNaLFdBQUtULEtBQUwsR0FBYXJCLGtEQUFRLENBQUMrQixRQUFULENBQWtCLEtBQUtiLGFBQXZCLEVBQXNDLEtBQUtRLFNBQUwsQ0FBZUosUUFBckQsQ0FBYjtBQUNEOzs7NkJBRVE7QUFDUCxXQUFLVSxXQUFMLEdBRE8sQ0FFUDtBQUNBOztBQUNBLFdBQUtoQixRQUFMLENBQWMsS0FBS0ssS0FBbkI7QUFDRDs7OzZCQUVRQSxLLEVBQU9KLEksRUFBTTtBQUNwQixVQUFNSyxRQUFRLEdBQUd0QixrREFBUSxDQUFDdUIsd0JBQVQsQ0FDZixLQUFLRixLQURVLEVBRWYsS0FBS3ZCLE9BQUwsQ0FBYVcsTUFGRSxFQUdmLEtBQUtTLGFBSFUsQ0FBakI7QUFLQSxXQUFLRyxLQUFMLEdBQWFyQixrREFBUSxDQUFDaUMsY0FBVCxDQUF3QlosS0FBeEIsRUFBK0JDLFFBQS9CLENBQWI7QUFDQSxXQUFLSSxTQUFMLENBQWVRLElBQWYsQ0FBb0JaLFFBQXBCLEVBQThCTCxJQUFJLElBQUUsQ0FBcEMsRUFBdUMsSUFBdkMsRUFBNkMsSUFBN0M7QUFDQSxXQUFLRCxRQUFMLENBQWMsS0FBS0ssS0FBbkI7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEVIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sU0FBU2MsZ0JBQVQsQ0FBMEJDLFNBQTFCLEVBQXFDO0FBQzFDLFNBQU8sVUFBU0MsS0FBVCxFQUFnQkMsSUFBaEIsRUFBc0I7QUFDM0IsUUFBTUMsU0FBUyxHQUFHRixLQUFLLENBQUNHLEtBQU4sRUFBbEI7QUFBQSxRQUNFQyxNQUFNLEdBQUdMLFNBQVMsQ0FBQ00sS0FBVixFQURYOztBQUdBLFFBQUlOLFNBQVMsQ0FBQ2QsUUFBVixDQUFtQnFCLENBQW5CLEdBQXVCSixTQUFTLENBQUNJLENBQXJDLEVBQXdDO0FBQ3JDSixlQUFTLENBQUNJLENBQVYsR0FBY1AsU0FBUyxDQUFDZCxRQUFWLENBQW1CcUIsQ0FBbEM7QUFDRDs7QUFDRCxRQUFJUCxTQUFTLENBQUNkLFFBQVYsQ0FBbUJzQixDQUFuQixHQUF1QkwsU0FBUyxDQUFDSyxDQUFyQyxFQUF3QztBQUN0Q0wsZUFBUyxDQUFDSyxDQUFWLEdBQWNSLFNBQVMsQ0FBQ2QsUUFBVixDQUFtQnNCLENBQWpDO0FBQ0Q7O0FBQ0QsUUFBSUgsTUFBTSxDQUFDRSxDQUFQLEdBQVdKLFNBQVMsQ0FBQ0ksQ0FBVixHQUFjTCxJQUFJLENBQUNLLENBQWxDLEVBQXFDO0FBQ25DSixlQUFTLENBQUNJLENBQVYsR0FBY0YsTUFBTSxDQUFDRSxDQUFQLEdBQVdMLElBQUksQ0FBQ0ssQ0FBOUI7QUFDRDs7QUFDRCxRQUFJRixNQUFNLENBQUNHLENBQVAsR0FBV0wsU0FBUyxDQUFDSyxDQUFWLEdBQWNOLElBQUksQ0FBQ00sQ0FBbEMsRUFBcUM7QUFDbkNMLGVBQVMsQ0FBQ0ssQ0FBVixHQUFjSCxNQUFNLENBQUNHLENBQVAsR0FBV04sSUFBSSxDQUFDTSxDQUE5QjtBQUNEOztBQUVELFdBQU9MLFNBQVA7QUFDRCxHQWxCRDtBQW1CRDtBQUVNLFNBQVNNLGNBQVQsQ0FBd0JoRCxPQUF4QixFQUFpQytCLE1BQWpDLEVBQXlDO0FBQzlDLE1BQU1rQixPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFXO0FBQ3pCLFdBQU90QixLQUFLLENBQUN1QixLQUFOLENBQVksSUFBWixFQUFrQkMsU0FBbEIsQ0FBUDtBQUNELEdBRkQ7O0FBR0EsTUFBSXhCLEtBQUo7O0FBRUFzQixTQUFPLENBQUNHLE9BQVIsR0FBa0IsWUFBVztBQUMzQnpCLFNBQUssR0FBR1csZ0JBQWdCLENBQUNuQyxrREFBUSxDQUFDQywwQkFBVCxDQUFvQ0osT0FBcEMsRUFBNkMrQixNQUE3QyxDQUFELENBQXhCO0FBQ0QsR0FGRDs7QUFJQWtCLFNBQU8sQ0FBQ0csT0FBUjtBQUNBLFNBQU9ILE9BQVA7QUFDRDtBQUVNLFNBQVNJLFlBQVQsQ0FBc0JQLENBQXRCLEVBQXlCUSxNQUF6QixFQUFpQ0MsSUFBakMsRUFBdUM7QUFDNUMsU0FBTyxVQUFTZixLQUFULEVBQWdCQyxJQUFoQixFQUFzQjtBQUMzQixRQUFNQyxTQUFTLEdBQUdGLEtBQUssQ0FBQ0csS0FBTixFQUFsQjtBQUNBRCxhQUFTLENBQUNJLENBQVYsR0FBY0EsQ0FBZDs7QUFDQSxRQUFJUSxNQUFNLEdBQUdaLFNBQVMsQ0FBQ0ssQ0FBdkIsRUFBMEI7QUFDeEJMLGVBQVMsQ0FBQ0ssQ0FBVixHQUFjTyxNQUFkO0FBQ0Q7O0FBQ0QsUUFBSUMsSUFBSSxHQUFHYixTQUFTLENBQUNLLENBQVYsR0FBY04sSUFBSSxDQUFDTSxDQUE5QixFQUFpQztBQUMvQkwsZUFBUyxDQUFDSyxDQUFWLEdBQWNRLElBQUksR0FBR2QsSUFBSSxDQUFDTSxDQUExQjtBQUNEOztBQUVELFdBQU9MLFNBQVA7QUFDRCxHQVhEO0FBWUQ7QUFFTSxTQUFTYyxZQUFULENBQXNCVCxDQUF0QixFQUF5QlUsTUFBekIsRUFBaUNDLElBQWpDLEVBQXVDO0FBQzVDLFNBQU8sVUFBU2xCLEtBQVQsRUFBZ0JDLElBQWhCLEVBQXNCO0FBQzNCLFFBQU1DLFNBQVMsR0FBR0YsS0FBSyxDQUFDRyxLQUFOLEVBQWxCO0FBQ0FELGFBQVMsQ0FBQ0ssQ0FBVixHQUFjQSxDQUFkOztBQUNBLFFBQUlVLE1BQU0sR0FBR2YsU0FBUyxDQUFDSSxDQUF2QixFQUEwQjtBQUN4QkosZUFBUyxDQUFDSSxDQUFWLEdBQWNXLE1BQWQ7QUFDRDs7QUFDRCxRQUFJQyxJQUFJLEdBQUdoQixTQUFTLENBQUNJLENBQVYsR0FBY0wsSUFBSSxDQUFDSyxDQUE5QixFQUFpQztBQUMvQkosZUFBUyxDQUFDSSxDQUFWLEdBQWNZLElBQUksR0FBR2pCLElBQUksQ0FBQ0ssQ0FBMUI7QUFDRDs7QUFDRCxXQUFPSixTQUFQO0FBQ0QsR0FWRDtBQVdEO0FBRU0sU0FBU2lCLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQTRCQyxHQUE1QixFQUFpQztBQUN0QyxNQUFNQyxLQUFLLEdBQUcvQyxJQUFJLENBQUNnRCxLQUFMLENBQVdGLEdBQUcsQ0FBQ2QsQ0FBSixHQUFRYSxLQUFLLENBQUNiLENBQXpCLEVBQTRCYyxHQUFHLENBQUNmLENBQUosR0FBUWMsS0FBSyxDQUFDZCxDQUExQyxDQUFkO0FBQUEsTUFDRWtCLElBQUksR0FBR0YsS0FBSyxHQUFHL0MsSUFBSSxDQUFDQyxFQUFMLEdBQVUsQ0FEM0I7QUFBQSxNQUVFaUQsS0FBSyxHQUFHLEVBRlY7QUFBQSxNQUdFQyxPQUFPLEdBQUduRCxJQUFJLENBQUNvRCxHQUFMLENBQVNILElBQVQsQ0FIWjtBQUFBLE1BSUVJLE9BQU8sR0FBR3JELElBQUksQ0FBQ3NELEdBQUwsQ0FBU0wsSUFBVCxDQUpaO0FBTUEsU0FBTyxVQUFTeEIsS0FBVCxFQUFnQkMsSUFBaEIsRUFBc0I7QUFDM0IsUUFBTTZCLE1BQU0sR0FBRyxJQUFJQywrQ0FBSixDQUFVL0IsS0FBSyxDQUFDTSxDQUFOLEdBQVVtQixLQUFLLEdBQUdDLE9BQTVCLEVBQXFDMUIsS0FBSyxDQUFDTyxDQUFOLEdBQVVrQixLQUFLLEdBQUdHLE9BQXZELENBQWY7QUFBQSxRQUNFSSxNQUFNLEdBQUdyRSxrREFBUSxDQUFDc0Usc0JBQVQsQ0FBZ0NaLEdBQWhDLEVBQXFDRCxLQUFyQyxFQUE0Q25CLElBQUksQ0FBQ0ssQ0FBakQsQ0FEWDtBQUVBLFFBQUk0QixhQUFhLEdBQUd2RSxrREFBUSxDQUFDd0UsY0FBVCxDQUF3QmYsS0FBeEIsRUFBK0JDLEdBQS9CLEVBQW9DckIsS0FBcEMsRUFBMkM4QixNQUEzQyxDQUFwQjtBQUVBSSxpQkFBYSxHQUFHdkUsa0RBQVEsQ0FBQ3dELFdBQVQsQ0FBcUJDLEtBQXJCLEVBQTRCWSxNQUE1QixFQUFvQ0UsYUFBcEMsQ0FBaEI7QUFDQSxXQUFPQSxhQUFQO0FBQ0QsR0FQRDtBQVFEO0FBRU0sU0FBU0UsYUFBVCxDQUF1QmxFLE1BQXZCLEVBQStCRSxNQUEvQixFQUF1QztBQUM1QyxTQUFPLFVBQVM0QixLQUFULEVBQWdCcUMsS0FBaEIsRUFBdUI7QUFDNUIsUUFBTUMsWUFBWSxHQUFHM0Usa0RBQVEsQ0FBQ3NFLHNCQUFULENBQWdDL0QsTUFBaEMsRUFBd0M4QixLQUF4QyxFQUErQzVCLE1BQS9DLENBQXJCO0FBQ0EsV0FBT2tFLFlBQVA7QUFDRCxHQUhEO0FBSUQ7QUFFTSxTQUFTbEQsVUFBVCxDQUFvQmxCLE1BQXBCLEVBQTRCRSxNQUE1QixFQUFvQ21FLFNBQXBDLEVBQStDOUQsUUFBL0MsRUFBeUQ7QUFDOUQsU0FBTyxVQUFTdUIsS0FBVCxFQUFnQnFDLEtBQWhCLEVBQXVCO0FBQzVCLFFBQU1HLGVBQWUsR0FBRyxPQUFPRCxTQUFQLEtBQXFCLFVBQXJCLEdBQWtDQSxTQUFTLEVBQTNDLEdBQWdEQSxTQUF4RTtBQUNBLFFBQU1FLGNBQWMsR0FBRyxPQUFPRixTQUFQLEtBQXFCLFVBQXJCLEdBQWtDOUQsUUFBUSxFQUExQyxHQUErQ0EsUUFBdEU7QUFFQSxRQUFJTyxLQUFLLEdBQUdyQixrREFBUSxDQUFDK0IsUUFBVCxDQUFrQnhCLE1BQWxCLEVBQTBCOEIsS0FBMUIsQ0FBWjtBQUNBaEIsU0FBSyxHQUFHckIsa0RBQVEsQ0FBQ2lDLGNBQVQsQ0FBd0JaLEtBQXhCLENBQVI7QUFDQUEsU0FBSyxHQUFHckIsa0RBQVEsQ0FBQytFLFVBQVQsQ0FBb0JGLGVBQXBCLEVBQXFDQyxjQUFyQyxFQUFxRHpELEtBQXJELENBQVI7QUFDQSxXQUFPckIsa0RBQVEsQ0FBQ3VCLHdCQUFULENBQWtDRixLQUFsQyxFQUF5Q1osTUFBekMsRUFBaURGLE1BQWpELENBQVA7QUFDRCxHQVJEO0FBU0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTXlFLE9BQU8sR0FBRyxrQkFBa0JDLE1BQWxDOztBQUVBLFNBQVNDLFdBQVQsR0FBdUI7QUFDckIsTUFBTUMsR0FBRyxHQUFHLFNBQU5BLEdBQU0sR0FBVztBQUNyQixXQUFPdkUsSUFBSSxDQUFDd0UsS0FBTCxDQUFXeEUsSUFBSSxDQUFDeUUsTUFBTCxLQUFjLEdBQXpCLENBQVA7QUFDRCxHQUZEOztBQUdBLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQVNDLEtBQVQsRUFBZ0I7QUFDbEMsUUFBSUMsR0FBRyxHQUFHRCxLQUFLLENBQUNFLFFBQU4sQ0FBZSxFQUFmLENBQVY7O0FBQ0EsV0FBT0QsR0FBRyxDQUFDRSxNQUFKLEdBQWEsQ0FBcEIsRUFBdUI7QUFDckJGLFNBQUcsR0FBRyxNQUFNQSxHQUFaO0FBQ0Q7O0FBQ0QsV0FBT0EsR0FBUDtBQUNELEdBTkQ7O0FBUUEsU0FBTyxNQUFNRixXQUFXLENBQUNILEdBQUcsRUFBSixDQUFqQixHQUEyQkcsV0FBVyxDQUFDSCxHQUFHLEVBQUosQ0FBdEMsR0FBZ0RHLFdBQVcsQ0FBQ0gsR0FBRyxFQUFKLENBQWxFO0FBQ0Q7O0FBRUQsU0FBU1Esd0JBQVQsQ0FBa0NDLEtBQWxDLEVBQXlDRixNQUF6QyxFQUFpRDtBQUMvQyxNQUFNRyxVQUFVLEdBQUcsRUFBbkI7O0FBQ0EsTUFBSUQsS0FBSyxLQUFLLENBQUMsQ0FBZixFQUFrQjtBQUNoQkMsY0FBVSxDQUFDQyxJQUFYLENBQWdCRixLQUFoQjtBQUNBQyxjQUFVLENBQUNDLElBQVgsQ0FBZ0IsQ0FBQ0YsS0FBSyxHQUFHLENBQVQsSUFBY0YsTUFBOUI7QUFDRDs7QUFFRCxTQUFPRyxVQUFQO0FBQ0Q7O0lBRUtFLEs7OztBQUNKLGlCQUFhbkcsSUFBYixFQUFtQm9HLFFBQW5CLEVBQXlDO0FBQUEsUUFBWmxHLE9BQVksdUVBQUosRUFBSTs7QUFBQTs7QUFDdkMsUUFBTUMsYUFBYSxHQUFHQyxrREFBUSxDQUFDQywwQkFBVCxDQUFvQ0wsSUFBcEMsRUFBMENBLElBQTFDLENBQXRCO0FBQ0EsU0FBS0UsT0FBTCxHQUFlTyxNQUFNLENBQUNDLE1BQVAsQ0FBYztBQUMzQkMsWUFBTSxFQUFFUixhQUFhLENBQUNTLFNBQWQsRUFEbUI7QUFFM0JDLFlBQU0sRUFBRVYsYUFBYSxDQUFDVyxVQUFkLEtBQTZCLENBRlY7QUFHM0J1RixpQkFBVyxFQUFFbEcsYUFBYSxDQUFDVyxVQUFkLEtBQTZCLENBSGY7QUFJM0JxRSxnQkFBVSxFQUFFbkUsSUFBSSxDQUFDQyxFQUFMLEdBQVUsQ0FKSztBQUszQnFGLGdCQUFVLEVBQUVDLDREQUFLLENBQUMsQ0FBRCxFQUFJSCxRQUFRLENBQUNOLE1BQWIsQ0FBTCxDQUEwQlUsR0FBMUIsQ0FBOEI7QUFBQSxlQUFNbEIsV0FBVyxFQUFqQjtBQUFBLE9BQTlCLENBTGU7QUFNM0JtQixnQkFBVSxFQUFFRiw0REFBSyxDQUFDLENBQUMsRUFBRixFQUFNLEdBQU4sRUFBVyxNQUFNSCxRQUFRLENBQUNOLE1BQTFCLENBQUwsQ0FBdUNVLEdBQXZDLENBQTJDLFVBQUMvRSxLQUFELEVBQVc7QUFDaEUsZUFBT3JCLGtEQUFRLENBQUNzRyxRQUFULENBQWtCakYsS0FBbEIsQ0FBUDtBQUNELE9BRlcsQ0FOZTtBQVMzQmtGLGNBQVEsRUFBRSxJQVRpQjtBQVUzQkMsb0JBQWMsRUFBRSxJQUFJcEMsK0NBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixDQVZXO0FBVzNCcUMsa0JBQVksRUFBRTtBQVhhLEtBQWQsRUFZWjNHLE9BWlksQ0FBZjs7QUFjQSxTQUFLNEcsTUFBTCxHQUFjLEtBQUs1RyxPQUFMLENBQWE0RyxNQUFiLElBQXVCLFlBQVcsQ0FBRSxDQUFsRDs7QUFDQSxTQUFLOUcsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0csYUFBTCxHQUFxQkEsYUFBckI7QUFDQSxTQUFLcUIsSUFBTCxDQUFVNEUsUUFBVjtBQUNEOzs7O3lCQUVJQSxRLEVBQVU7QUFBQTs7QUFDYixXQUFLVyxNQUFMLEdBQWNDLG1FQUFZLENBQUMsS0FBS2hILElBQU4sRUFBWSxLQUFLRyxhQUFqQixDQUExQjtBQUNBLFdBQUs4RyxPQUFMLEdBQWUsS0FBS0YsTUFBTCxDQUFZRyxVQUFaLENBQXVCLElBQXZCLENBQWY7QUFDQSxXQUFLQyxVQUFMLEdBQWtCZixRQUFRLENBQUNJLEdBQVQsQ0FBYSxVQUFDdkcsT0FBRCxFQUFVbUgsQ0FBVixFQUFnQjtBQUM3QyxZQUFNM0YsS0FBSyxHQUFHLEtBQUksQ0FBQ3ZCLE9BQUwsQ0FBYXVHLFVBQWIsQ0FBd0JXLENBQXhCLENBQWQ7QUFDQSxZQUFNOUcsUUFBUSxHQUFHRixrREFBUSxDQUFDRyxnQkFBVCxDQUEwQk4sT0FBMUIsRUFBbUNPLElBQW5DLENBQXdDLEdBQXhDLENBQWpCO0FBQ0EsWUFBTWtCLFFBQVEsR0FBR3RCLGtEQUFRLENBQUN1Qix3QkFBVCxDQUNmRixLQURlLEVBRWYsS0FBSSxDQUFDdkIsT0FBTCxDQUFhbUcsV0FGRSxFQUdmLEtBQUksQ0FBQ25HLE9BQUwsQ0FBYVMsTUFBYixDQUFvQlksR0FBcEIsQ0FBd0JqQixRQUF4QixDQUhlLENBQWpCO0FBS0EsWUFBTXNCLEtBQUssR0FBR0MseURBQVUsQ0FDdEIsS0FBSSxDQUFDM0IsT0FBTCxDQUFhUyxNQUFiLENBQW9CWSxHQUFwQixDQUF3QmpCLFFBQXhCLENBRHNCLEVBRXRCLEtBQUksQ0FBQ0osT0FBTCxDQUFhbUcsV0FGUyxFQUd0QixLQUFJLENBQUNnQixhQUFMLENBQW1CRCxDQUFuQixFQUFzQixLQUF0QixDQUhzQixFQUl0QixLQUFJLENBQUNDLGFBQUwsQ0FBbUJELENBQW5CLEVBQXNCLElBQXRCLENBSnNCLENBQXhCO0FBT0EsZUFBTyxJQUFJckYsb0RBQUosQ0FBYzlCLE9BQWQsRUFBdUI7QUFDNUIrQixnQkFBTSxFQUFFLEtBQUksQ0FBQ2hDLElBRGU7QUFFNUI0QixlQUFLLEVBQUVBLEtBRnFCO0FBRzVCRixrQkFBUSxFQUFFQSxRQUhrQjtBQUk1Qk8sZ0JBQU0sRUFBRSxrQkFBTTtBQUNaLGlCQUFJLENBQUNxRixJQUFMOztBQUNBLG1CQUFPLElBQVA7QUFDRDtBQVAyQixTQUF2QixDQUFQO0FBU0QsT0F4QmlCLENBQWxCO0FBMEJBLFdBQUtDLE1BQUwsR0FBYyxJQUFkOztBQUNBLFVBQUksS0FBS3JILE9BQUwsQ0FBYTJHLFlBQWpCLEVBQStCO0FBQzdCLGFBQUtXLFVBQUw7QUFDRDs7QUFDRCxXQUFLRixJQUFMO0FBQ0Q7OztpQ0FFWTtBQUFBOztBQUNYLFdBQUtHLFlBQUwsQ0FBa0IsQ0FBQyxDQUFuQjtBQUVBLFdBQUtWLE1BQUwsQ0FBWVcsZ0JBQVosQ0FBNkJDLGlEQUFNLENBQUM5RCxLQUFwQyxFQUEyQyxVQUFDK0QsQ0FBRCxFQUFPO0FBQ2hELFlBQUluRixLQUFLLEdBQUcsSUFBSStCLCtDQUFKLENBQ1ZZLE9BQU8sR0FBR3dDLENBQUMsQ0FBQ0MsY0FBRixDQUFpQixDQUFqQixFQUFvQkMsS0FBdkIsR0FBK0JGLENBQUMsQ0FBQ0csT0FEOUIsRUFFVjNDLE9BQU8sR0FBR3dDLENBQUMsQ0FBQ0MsY0FBRixDQUFpQixDQUFqQixFQUFvQkcsS0FBdkIsR0FBK0JKLENBQUMsQ0FBQ0ssT0FGOUIsQ0FBWjs7QUFLQSxZQUFJLENBQUMsTUFBSSxDQUFDQyxZQUFWLEVBQXdCO0FBQ3RCLGdCQUFJLENBQUNBLFlBQUwsR0FBb0I5SCxrREFBUSxDQUFDK0gsU0FBVCxDQUFtQixNQUFJLENBQUNwQixNQUF4QixDQUFwQjtBQUNEOztBQUVEdEUsYUFBSyxHQUFHQSxLQUFLLENBQUNsQixHQUFOLENBQVUsTUFBSSxDQUFDMkcsWUFBZixDQUFSOztBQUNBLFlBQU1sQyxLQUFLLEdBQUcsTUFBSSxDQUFDb0MsYUFBTCxDQUFtQjNGLEtBQW5CLENBQWQ7O0FBQ0EsWUFBSXVELEtBQUssS0FBSyxDQUFDLENBQWYsRUFBa0I7QUFDaEIsZ0JBQUksQ0FBQ3lCLFlBQUwsQ0FBbUIsTUFBSSxDQUFDWSxjQUFMLEtBQXdCckMsS0FBekIsR0FBa0NBLEtBQWxDLEdBQTBDLENBQUMsQ0FBN0Q7QUFDRDtBQUNGLE9BZkQ7QUFnQkQ7OzttQ0FFYztBQUFBOztBQUNiLFdBQUs3RSxNQUFMLEdBQWMsS0FBS2dHLFVBQUwsQ0FBZ0JYLEdBQWhCLENBQW9CLFVBQUMxRSxTQUFELEVBQWU7QUFDL0MsWUFBTXhCLFFBQVEsR0FBR3dCLFNBQVMsQ0FBQ3dHLE9BQVYsR0FBb0I5SCxJQUFwQixDQUF5QixHQUF6QixDQUFqQjtBQUNBLGVBQU9KLGtEQUFRLENBQUMrQixRQUFULENBQWtCLE1BQUksQ0FBQ2pDLE9BQUwsQ0FBYVMsTUFBYixDQUFvQlksR0FBcEIsQ0FBd0JqQixRQUF4QixDQUFsQixFQUFxRHdCLFNBQVMsQ0FBQ0osUUFBL0QsQ0FBUDtBQUNELE9BSGEsQ0FBZDtBQUlEOzs7a0NBRWFzRSxLLEVBQU91QyxVLEVBQVk7QUFBQTs7QUFDL0IsVUFBTUMsSUFBSSxHQUFHRCxVQUFVLEdBQUcsQ0FBSCxHQUFPLENBQUMsQ0FBL0I7QUFFQSxhQUFPLFlBQU07QUFDWCxZQUFJbkIsQ0FBQyxHQUFHLENBQUNwQixLQUFLLEdBQUd3QyxJQUFULElBQWlCLE1BQUksQ0FBQ3JILE1BQUwsQ0FBWTJFLE1BQXJDOztBQUNBLFlBQUlzQixDQUFDLEdBQUcsQ0FBUixFQUFXO0FBQ1RBLFdBQUMsSUFBSSxNQUFJLENBQUNqRyxNQUFMLENBQVkyRSxNQUFqQjtBQUNEOztBQUNELGVBQU8xRixrREFBUSxDQUFDaUMsY0FBVCxDQUF3QixNQUFJLENBQUNsQixNQUFMLENBQVlpRyxDQUFaLElBQWlCb0IsSUFBSSxHQUFHLE1BQUksQ0FBQ3RJLE9BQUwsQ0FBYWlGLFVBQTdELENBQVA7QUFDRCxPQU5EO0FBT0Q7OzsyQkFFTTtBQUFBOztBQUNMLFVBQUksQ0FBQyxLQUFLb0MsTUFBVixFQUFrQjtBQUNoQjtBQUNEOztBQUVELFdBQUtrQixZQUFMO0FBQ0EsV0FBS3hCLE9BQUwsQ0FBYXlCLFNBQWIsQ0FBdUIsQ0FBdkIsRUFBMEIsQ0FBMUIsRUFBNkIsS0FBS3ZJLGFBQUwsQ0FBbUJ1QyxJQUFuQixDQUF3QkssQ0FBckQsRUFBd0QsS0FBSzVDLGFBQUwsQ0FBbUJ1QyxJQUFuQixDQUF3Qk0sQ0FBaEY7QUFDQSxXQUFLbUUsVUFBTCxDQUFnQndCLE9BQWhCLENBQXdCLFVBQUNDLFVBQUQsRUFBYTVDLEtBQWIsRUFBdUI7QUFDN0MsY0FBSSxDQUFDNkMsT0FBTCxDQUFhLE1BQUksQ0FBQzVCLE9BQWxCLEVBQTJCLE1BQUksQ0FBQy9HLE9BQUwsQ0FBYVMsTUFBeEMsRUFBZ0QsTUFBSSxDQUFDVCxPQUFMLENBQWFXLE1BQTdELEVBQXFFbUYsS0FBckU7QUFDRCxPQUZEO0FBSUEsV0FBS21CLFVBQUwsQ0FBZ0J3QixPQUFoQixDQUF3QixVQUFDQyxVQUFELEVBQWE1QyxLQUFiLEVBQXVCO0FBQzdDLFlBQUk4QyxhQUFKOztBQUNBLFlBQUksTUFBSSxDQUFDNUksT0FBTCxDQUFhMkcsWUFBakIsRUFBK0I7QUFDN0JpQyx1QkFBYSxHQUFHL0Msd0JBQXdCLENBQUMsTUFBSSxDQUFDc0MsY0FBTixFQUFzQixNQUFJLENBQUNsQixVQUFMLENBQWdCckIsTUFBdEMsQ0FBeEM7O0FBQ0EsY0FBSWdELGFBQWEsQ0FBQ0MsT0FBZCxDQUFzQi9DLEtBQXRCLE1BQWlDLENBQUMsQ0FBdEMsRUFBeUM7QUFDdkMsa0JBQUksQ0FBQ2dELFlBQUwsQ0FBa0JoRCxLQUFsQjtBQUNEO0FBQ0YsU0FMRCxNQUtPO0FBQ0wsZ0JBQUksQ0FBQ2dELFlBQUwsQ0FBa0JoRCxLQUFsQjtBQUNEO0FBQ0YsT0FWRDtBQVdBLFdBQUtjLE1BQUw7QUFDRDs7O2dDQUVXN0csTyxFQUF1QjtBQUFBOztBQUFBLFVBQWRDLE9BQWMsdUVBQUosRUFBSTs7QUFDakMsVUFBSSxDQUFDLEtBQUtxSCxNQUFWLEVBQWtCO0FBQ2hCO0FBQ0Q7O0FBQ0QsVUFBTS9FLFNBQVMsR0FBR3BDLGtEQUFRLENBQUNDLDBCQUFULENBQW9DSixPQUFwQyxFQUE2Q0EsT0FBN0MsQ0FBbEI7QUFDQSxVQUFNZ0osSUFBSSxHQUFHeEksTUFBTSxDQUFDQyxNQUFQLENBQWM7QUFDekJDLGNBQU0sRUFBRTZCLFNBQVMsQ0FBQzVCLFNBQVYsRUFEaUI7QUFFekJDLGNBQU0sRUFBRTJCLFNBQVMsQ0FBQzFCLFVBQVYsS0FBeUIsQ0FGUjtBQUd6QndGLGtCQUFVLEVBQUUsS0FBS3BHLE9BQUwsQ0FBYW9HO0FBSEEsT0FBZCxFQUlWcEcsT0FKVSxDQUFiO0FBTUEsVUFBTTZHLE1BQU0sR0FBR0MsbUVBQVksQ0FBQy9HLE9BQUQsRUFBVXVDLFNBQVYsQ0FBM0I7QUFDQSxVQUFNeUUsT0FBTyxHQUFHRixNQUFNLENBQUNHLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBaEI7QUFDQSxVQUFNZ0MsUUFBUSxHQUFHO0FBQ2Y1QixZQUFJLEVBQUUsZ0JBQU07QUFDVkwsaUJBQU8sQ0FBQ3lCLFNBQVIsQ0FBa0IsQ0FBbEIsRUFBcUIsQ0FBckIsRUFBd0JsRyxTQUFTLENBQUNFLElBQVYsQ0FBZUssQ0FBdkMsRUFBMENQLFNBQVMsQ0FBQ0UsSUFBVixDQUFlTSxDQUF6RDs7QUFDQSxnQkFBSSxDQUFDbUUsVUFBTCxDQUFnQndCLE9BQWhCLENBQXdCLFVBQUNDLFVBQUQsRUFBYTVDLEtBQWIsRUFBdUI7QUFDN0Msa0JBQUksQ0FBQzZDLE9BQUwsQ0FBYTVCLE9BQWIsRUFBc0JnQyxJQUFJLENBQUN0SSxNQUEzQixFQUFtQ3NJLElBQUksQ0FBQ3BJLE1BQXhDLEVBQWdEbUYsS0FBaEQ7QUFDRCxXQUZEO0FBR0Q7QUFOYyxPQUFqQjtBQVFBa0QsY0FBUSxDQUFDNUIsSUFBVDtBQUNBLGFBQU80QixRQUFQO0FBQ0Q7OztpQ0FFWWxELEssRUFBTztBQUNsQixVQUFJLE9BQU8sS0FBSzlGLE9BQUwsQ0FBYW9HLFVBQWIsQ0FBd0JOLEtBQXhCLENBQVAsS0FBMEMsVUFBOUMsRUFBMEQ7QUFDeEQsYUFBSzlGLE9BQUwsQ0FBYW9HLFVBQWIsQ0FBd0JOLEtBQXhCLElBQWlDLEtBQUs5RixPQUFMLENBQWFvRyxVQUFiLENBQXdCTixLQUF4QixFQUErQm1ELElBQS9CLENBQW9DLElBQXBDLENBQWpDO0FBQ0Q7O0FBQ0QsYUFBTyxLQUFLakosT0FBTCxDQUFhb0csVUFBYixDQUF3Qk4sS0FBeEIsQ0FBUDtBQUNEOzs7NEJBRU9pQixPLEVBQVN0RyxNLEVBQVFFLE0sRUFBUW1GLEssRUFBTztBQUN0QyxVQUFNakYsVUFBVSxHQUFHLEtBQUtJLE1BQUwsQ0FBWTZFLEtBQVosQ0FBbkI7QUFDQSxVQUFNOUUsUUFBUSxHQUFHLEtBQUtDLE1BQUwsQ0FBWSxDQUFDNkUsS0FBSyxHQUFDLENBQVAsSUFBWSxLQUFLN0UsTUFBTCxDQUFZMkUsTUFBcEMsQ0FBakI7QUFDQSxVQUFNc0QsS0FBSyxHQUFHLEtBQUtDLFlBQUwsQ0FBa0JyRCxLQUFsQixDQUFkO0FBRUFpQixhQUFPLENBQUNxQyxTQUFSO0FBQ0FyQyxhQUFPLENBQUNzQyxNQUFSLENBQWU1SSxNQUFNLENBQUNvQyxDQUF0QixFQUF5QnBDLE1BQU0sQ0FBQ3FDLENBQWhDO0FBQ0FpRSxhQUFPLENBQUN1QyxHQUFSLENBQVk3SSxNQUFNLENBQUNvQyxDQUFuQixFQUFzQnBDLE1BQU0sQ0FBQ3FDLENBQTdCLEVBQWdDbkMsTUFBaEMsRUFBd0NFLFVBQXhDLEVBQW9ERyxRQUFwRCxFQUE4RCxLQUE5RDtBQUNBK0YsYUFBTyxDQUFDd0MsTUFBUixDQUFlOUksTUFBTSxDQUFDb0MsQ0FBdEIsRUFBeUJwQyxNQUFNLENBQUNxQyxDQUFoQztBQUNBaUUsYUFBTyxDQUFDeUMsU0FBUjtBQUNBekMsYUFBTyxDQUFDMEMsU0FBUixHQUFvQlAsS0FBcEI7QUFDQW5DLGFBQU8sQ0FBQzJDLElBQVI7QUFDRDs7O2lDQUVZNUQsSyxFQUFPO0FBQ2xCLFVBQUl2RCxLQUFKLEVBQVdvSCxHQUFYOztBQUNBLFVBQUksS0FBSzNKLE9BQUwsQ0FBYXlHLFFBQWpCLEVBQTJCO0FBQ3pCa0QsV0FBRyxHQUFHLEtBQUszSixPQUFMLENBQWF5RyxRQUFiLFlBQWlDbUQsS0FBakMsR0FBeUMsS0FBSzVKLE9BQUwsQ0FBYXlHLFFBQWIsQ0FBc0JYLEtBQXRCLENBQXpDLEdBQXdFLEtBQUs5RixPQUFMLENBQWF5RyxRQUEzRjtBQUNEOztBQUVELFVBQUlrRCxHQUFKLEVBQVM7QUFDUCxZQUFNcEksS0FBSyxHQUFHckIsa0RBQVEsQ0FBQ2lDLGNBQVQsQ0FBd0IsS0FBS2xCLE1BQUwsQ0FBWTZFLEtBQVosQ0FBeEIsQ0FBZDtBQUNBdkQsYUFBSyxHQUFHLElBQUkrQiwrQ0FBSixDQUFVLENBQVYsRUFBYSxDQUFDcUYsR0FBRyxDQUFDRSxNQUFMLEdBQWMsQ0FBM0IsQ0FBUjtBQUNBdEgsYUFBSyxHQUFHQSxLQUFLLENBQUN1SCxHQUFOLENBQVUsS0FBSzlKLE9BQUwsQ0FBYTBHLGNBQXZCLENBQVI7QUFDQSxhQUFLSyxPQUFMLENBQWFnRCxTQUFiLENBQXVCLEtBQUs5SixhQUFMLENBQW1CdUMsSUFBbkIsQ0FBd0JLLENBQXhCLEdBQTRCLENBQW5ELEVBQXNELEtBQUs1QyxhQUFMLENBQW1CdUMsSUFBbkIsQ0FBd0JNLENBQXhCLEdBQTRCLENBQWxGO0FBQ0EsYUFBS2lFLE9BQUwsQ0FBYWlELE1BQWIsQ0FBb0J6SSxLQUFwQjtBQUNBLGFBQUt3RixPQUFMLENBQWFrRCxTQUFiLENBQXVCTixHQUF2QixFQUE0QnBILEtBQUssQ0FBQ00sQ0FBbEMsRUFBcUNOLEtBQUssQ0FBQ08sQ0FBM0M7QUFDQSxhQUFLaUUsT0FBTCxDQUFhbUQsWUFBYixDQUEwQixDQUExQixFQUE2QixDQUE3QixFQUFnQyxDQUFoQyxFQUFtQyxDQUFuQyxFQUFzQyxDQUF0QyxFQUF5QyxDQUF6QztBQUNEO0FBQ0Y7OztvQ0FFZTtBQUNkLFVBQU1qSixNQUFNLEdBQUcsS0FBS0EsTUFBTCxDQUFZa0osS0FBWixDQUFrQixDQUFsQixDQUFmO0FBQ0EsVUFBSUMsU0FBUyxHQUFHLEtBQUtuSixNQUFMLENBQVksQ0FBWixDQUFoQjtBQUVBQSxZQUFNLENBQUMrRSxJQUFQLENBQVlvRSxTQUFaO0FBQ0EsYUFBT25KLE1BQU0sQ0FBQ3FGLEdBQVAsQ0FBVyxVQUFDL0UsS0FBRCxFQUFXO0FBQzNCLFlBQU04SSxTQUFTLEdBQUduSyxrREFBUSxDQUFDaUMsY0FBVCxDQUF3QlosS0FBSyxHQUFHNkksU0FBaEMsQ0FBbEI7QUFDQUEsaUJBQVMsR0FBRzdJLEtBQVo7QUFDQSxlQUFPOEksU0FBUDtBQUNELE9BSk0sQ0FBUDtBQUtEOzs7aUNBRVk7QUFDWCxhQUFPLEtBQUtDLGFBQUwsR0FBcUJoRSxHQUFyQixDQUF5QixVQUFDK0QsU0FBRDtBQUFBLGVBQWVBLFNBQVMsSUFBSSxJQUFJdkosSUFBSSxDQUFDQyxFQUFiLENBQXhCO0FBQUEsT0FBekIsQ0FBUDtBQUNEOzs7dUNBRWtCO0FBQUE7O0FBQ2pCLGFBQU8sS0FBS3VKLGFBQUwsR0FBcUJoRSxHQUFyQixDQUF5QixVQUFDK0QsU0FBRCxFQUFZbkQsQ0FBWixFQUFrQjtBQUNoRCxlQUFPaEgsa0RBQVEsQ0FBQ2lDLGNBQVQsQ0FBd0IsTUFBSSxDQUFDbEIsTUFBTCxDQUFZaUcsQ0FBWixJQUFpQm1ELFNBQVMsR0FBRyxDQUFyRCxDQUFQO0FBQ0QsT0FGTSxDQUFQO0FBR0Q7OztrQ0FFYTlILEssRUFBTztBQUNuQixVQUFNaEIsS0FBSyxHQUFHckIsa0RBQVEsQ0FBQytCLFFBQVQsQ0FBa0IsS0FBS2pDLE9BQUwsQ0FBYVMsTUFBL0IsRUFBdUM4QixLQUF2QyxDQUFkO0FBQ0EsVUFBTTVCLE1BQU0sR0FBR1Qsa0RBQVEsQ0FBQ3FLLFdBQVQsQ0FBcUIsS0FBS3ZLLE9BQUwsQ0FBYVMsTUFBbEMsRUFBMEM4QixLQUExQyxDQUFmOztBQUVBLFVBQUk1QixNQUFNLEdBQUcsS0FBS1gsT0FBTCxDQUFhVyxNQUExQixFQUFrQztBQUNoQyxlQUFPLENBQUMsQ0FBUjtBQUNEOztBQUVELFVBQUk2SixNQUFNLEdBQUcsQ0FBQyxDQUFkO0FBQUEsVUFBaUJ0RCxDQUFqQjtBQUFBLFVBQW9CdUQsQ0FBcEI7O0FBQ0EsV0FBS3ZELENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsR0FBRyxLQUFLakcsTUFBTCxDQUFZMkUsTUFBNUIsRUFBb0NzQixDQUFDLEVBQXJDLEVBQXlDO0FBQ3ZDLFlBQUlzRCxNQUFNLEtBQUssQ0FBQyxDQUFaLElBQWlCLEtBQUt2SixNQUFMLENBQVl1SixNQUFaLElBQXNCLEtBQUt2SixNQUFMLENBQVlpRyxDQUFaLENBQTNDLEVBQTJEO0FBQ3pEc0QsZ0JBQU0sR0FBR3RELENBQVQ7QUFDRDtBQUNGOztBQUNELFdBQUtBLENBQUMsR0FBRyxDQUFKLEVBQU91RCxDQUFDLEdBQUdELE1BQWhCLEVBQXdCdEQsQ0FBQyxHQUFHLEtBQUtqRyxNQUFMLENBQVkyRSxNQUF4QyxFQUFnRHNCLENBQUMsSUFBSXVELENBQUMsR0FBRyxDQUFDdkQsQ0FBQyxHQUFHc0QsTUFBTCxJQUFlLEtBQUt2SixNQUFMLENBQVkyRSxNQUFwRixFQUE0RjtBQUMxRixZQUFJckUsS0FBSyxHQUFHLEtBQUtOLE1BQUwsQ0FBWXdKLENBQVosQ0FBWixFQUE0QjtBQUMxQjtBQUNEO0FBQ0Y7O0FBQ0QsVUFBSSxFQUFFQSxDQUFGLEdBQU0sQ0FBVixFQUFhO0FBQ1hBLFNBQUMsSUFBSSxLQUFLeEosTUFBTCxDQUFZMkUsTUFBakI7QUFDRDs7QUFDRCxhQUFPNkUsQ0FBUDtBQUNEOzs7OEJBRVN4SixNLEVBQVE7QUFBQTs7QUFDaEIsV0FBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsV0FBS2dHLFVBQUwsQ0FBZ0J3QixPQUFoQixDQUF3QixVQUFDN0csU0FBRCxFQUFZc0YsQ0FBWixFQUFrQjtBQUN4QyxZQUFNM0YsS0FBSyxHQUFHLE1BQUksQ0FBQ04sTUFBTCxDQUFZaUcsQ0FBWixDQUFkO0FBQ0EsWUFBTTlHLFFBQVEsR0FBR3dCLFNBQVMsQ0FBQ3dHLE9BQVYsR0FBb0I5SCxJQUFwQixDQUF5QixHQUF6QixDQUFqQjtBQUNBLFlBQU1rQixRQUFRLEdBQUd0QixrREFBUSxDQUFDdUIsd0JBQVQsQ0FDZkYsS0FEZSxFQUVmLE1BQUksQ0FBQ3ZCLE9BQUwsQ0FBYW1HLFdBRkUsRUFHZixNQUFJLENBQUNuRyxPQUFMLENBQWFTLE1BQWIsQ0FBb0JZLEdBQXBCLENBQXdCakIsUUFBeEIsQ0FIZSxDQUFqQjtBQU1Bd0IsaUJBQVMsQ0FBQ1EsSUFBVixDQUFlWixRQUFmLEVBQXlCLENBQXpCLEVBQTRCLElBQTVCLEVBQWtDLElBQWxDO0FBQ0QsT0FWRDtBQVdBLFdBQUs0RixJQUFMO0FBQ0Q7OztpQ0FFWXRCLEssRUFBTztBQUNsQixVQUFNOEMsYUFBYSxHQUFHL0Msd0JBQXdCLENBQUNDLEtBQUQsRUFBUSxLQUFLbUIsVUFBTCxDQUFnQnJCLE1BQXhCLENBQTlDO0FBQ0EsV0FBS3VDLGNBQUwsR0FBc0JyQyxLQUF0QjtBQUNBLFdBQUttQixVQUFMLENBQWdCd0IsT0FBaEIsQ0FBd0IsVUFBQzdHLFNBQUQsRUFBWXNGLENBQVosRUFBa0I7QUFDeEN0RixpQkFBUyxDQUFDOEksTUFBVixHQUFtQjlCLGFBQWEsQ0FBQ0MsT0FBZCxDQUFzQjNCLENBQXRCLE1BQTZCLENBQUMsQ0FBakQ7QUFDRCxPQUZEO0FBR0EsV0FBS0UsSUFBTDtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xTSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU11RCxNQUFNLEdBQUc7QUFBRUMsT0FBSyxFQUFMQSw4Q0FBS0E7QUFBUCxDQUFmLEMsQ0FBeUI7O0FBRXpCLElBQU0xRixPQUFPLEdBQUcsa0JBQWtCQyxNQUFsQztBQUFBLElBQTBDMEYsV0FBVyxHQUFHO0FBQ3BEbEgsT0FBSyxFQUFFLFdBRDZDO0FBRXBEdkIsTUFBSSxFQUFFLFdBRjhDO0FBR3BEd0IsS0FBRyxFQUFFO0FBSCtDLENBQXhEO0FBQUEsSUFJS2tILFdBQVcsR0FBRztBQUNmbkgsT0FBSyxFQUFFLFlBRFE7QUFFZnZCLE1BQUksRUFBRSxXQUZTO0FBR2Z3QixLQUFHLEVBQUU7QUFIVSxDQUpuQjtBQUFBLElBU0U2RCxNQUFNLEdBQUd2QyxPQUFPLEdBQUc0RixXQUFILEdBQWlCRCxXQVRuQztBQUFBLElBVUU1RCxVQUFVLEdBQUcsRUFWZjtBQUFBLElBV0U4RCxpQkFBaUIsR0FBR0Msa0VBQWdCLENBQUMsV0FBRCxDQVh0QztBQUFBLElBWUVDLGtCQUFrQixHQUFHRCxrRUFBZ0IsQ0FBQyxZQUFELENBWnZDOztBQWNBLFNBQVNFLFlBQVQsQ0FBc0JuTCxPQUF0QixFQUErQm9MLE9BQS9CLEVBQXdDO0FBQ3RDLE9BQUssSUFBSWpFLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUduSCxPQUFPLENBQUM0SCxjQUFSLENBQXVCL0IsTUFBM0MsRUFBbURzQixDQUFDLEVBQXBELEVBQXdEO0FBQ3RELFFBQUluSCxPQUFPLENBQUM0SCxjQUFSLENBQXVCVCxDQUF2QixFQUEwQmtFLFVBQTFCLEtBQXlDRCxPQUE3QyxFQUFzRDtBQUNwRCxhQUFPcEwsT0FBTyxDQUFDNEgsY0FBUixDQUF1QlQsQ0FBdkIsQ0FBUDtBQUNEO0FBQ0Y7O0FBQ0QsU0FBTyxLQUFQO0FBQ0Q7O0FBRUQsU0FBU21FLGlCQUFULENBQTJCekosU0FBM0IsRUFBc0M7QUFDcEMsTUFBTTBKLE9BQU8sR0FBRyw0RUFBaEI7O0FBQ0EsTUFBSXJFLFVBQVUsQ0FBQ3NFLElBQVgsQ0FBZ0IsVUFBQ0MsUUFBRDtBQUFBLFdBQWM1SixTQUFTLENBQUM3QixPQUFWLEtBQXNCeUwsUUFBUSxDQUFDekwsT0FBN0M7QUFBQSxHQUFoQixDQUFKLEVBQTJFO0FBQ3pFLFVBQU11TCxPQUFOO0FBQ0Q7O0FBQ0RyRSxZQUFVLENBQUNqQixJQUFYLENBQWdCcEUsU0FBaEI7QUFDRDs7QUFFRCxTQUFTNkosaUJBQVQsQ0FBMkI3SixTQUEzQixFQUFzQztBQUNwQzhKLHFEQUFZLENBQUNDLFlBQWIsQ0FBMEIvSixTQUExQjtBQUNEOztJQUVLQyxTOzs7QUFDSixxQkFBWTlCLE9BQVosRUFBaUM7QUFBQTs7QUFBQSxRQUFaQyxPQUFZLHVFQUFKLEVBQUk7O0FBQUE7O0FBQy9CLFFBQU04QixNQUFNLEdBQUc5QixPQUFPLENBQUM4QixNQUFSLElBQWtCOEosdUVBQWdCLENBQUM3TCxPQUFELENBQWpEO0FBQ0EsU0FBSzhMLE9BQUwsR0FBZSxFQUFmO0FBQ0EsU0FBSzdMLE9BQUwsR0FBZU8sTUFBTSxDQUFDQyxNQUFQLENBQWM7QUFDM0JzQixZQUFNLEVBQUVBLE1BRG1CO0FBRTNCSixXQUFLLEVBQUVxQiw2REFBYyxDQUFDakIsTUFBRCxFQUFTQSxNQUFULENBRk07QUFHM0JnSyxpQkFBVyxFQUFFLEtBSGM7QUFJM0JDLHNCQUFnQixFQUFFLEtBSlM7QUFLM0J2SyxjQUFRLEVBQUU7QUFMaUIsS0FBZCxFQU1aeEIsT0FOWSxDQUFmOztBQVFBLFFBQUksT0FBT0EsT0FBTyxDQUFDZ00sT0FBZixLQUEyQixRQUEvQixFQUF5QztBQUN2QyxXQUFLQSxPQUFMLEdBQWVqTSxPQUFPLENBQUNrTSxhQUFSLENBQXNCak0sT0FBTyxDQUFDZ00sT0FBOUIsS0FBMENqTSxPQUF6RDtBQUNELEtBRkQsTUFFTztBQUNMLFdBQUtpTSxPQUFMLEdBQWVoTSxPQUFPLENBQUNnTSxPQUFSLElBQW1Cak0sT0FBbEM7QUFDRDs7QUFFRCxTQUFLbU0sS0FBTCxHQUFhLElBQUl2QixNQUFNLENBQUNDLEtBQVgsQ0FBaUIsSUFBakIsRUFBdUI7QUFBRXVCLGVBQVMsRUFBRSxJQUFiO0FBQW1CQyxrQkFBWSxFQUFFO0FBQWpDLEtBQXZCLENBQWI7QUFDQSxTQUFLckssTUFBTCxHQUFjLElBQUk0SSxNQUFNLENBQUNDLEtBQVgsQ0FBaUIsSUFBakIsQ0FBZDtBQUNBLFNBQUt5QixPQUFMLEdBQWUsSUFBSTFCLE1BQU0sQ0FBQ0MsS0FBWCxDQUFpQixJQUFqQixDQUFmO0FBRUEsU0FBS3NCLEtBQUwsQ0FBV3BDLEdBQVgsQ0FBZTtBQUFBLGFBQU0sS0FBSSxDQUFDMUgsSUFBTCxDQUFVLEtBQUksQ0FBQ1osUUFBZixFQUF5QixDQUF6QixFQUE0QixJQUE1QixFQUFrQyxJQUFsQyxDQUFOO0FBQUEsS0FBZjs7QUFFQSxRQUFJeEIsT0FBTyxDQUFDa00sS0FBWixFQUFtQjtBQUNqQixXQUFLQSxLQUFMLENBQVdwQyxHQUFYLENBQWU5SixPQUFPLENBQUNrTSxLQUF2QjtBQUNEOztBQUNELFFBQUlsTSxPQUFPLENBQUMrQixNQUFaLEVBQW9CO0FBQ2xCLFdBQUtBLE1BQUwsQ0FBWStILEdBQVosQ0FBZ0I5SixPQUFPLENBQUMrQixNQUF4QjtBQUNEOztBQUNELFFBQUkvQixPQUFPLENBQUNxTSxPQUFaLEVBQXFCO0FBQ25CLFdBQUtBLE9BQUwsQ0FBYXZDLEdBQWIsQ0FBaUI5SixPQUFPLENBQUNxTSxPQUF6QjtBQUNEOztBQUNELFNBQUt0TSxPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLMkIsS0FBTCxHQUFhLEtBQUsxQixPQUFMLENBQWEwQixLQUExQjtBQUNBMkoscUJBQWlCLENBQUMsSUFBRCxDQUFqQjtBQUNBeEosYUFBUyxDQUFDeUssUUFBVixDQUFtQkMsSUFBbkIsQ0FBd0IsSUFBeEI7QUFDQSxTQUFLakwsSUFBTDtBQUNEOzs7OzJCQUVNO0FBQ0wsV0FBS2tMLE9BQUwsR0FBZSxJQUFmO0FBQ0EsV0FBS2hDLE1BQUwsR0FBY3RLLGtEQUFRLENBQUMrSCxTQUFULENBQW1CLEtBQUtsSSxPQUF4QixFQUFpQyxLQUFLQyxPQUFMLENBQWE4QixNQUE5QyxFQUFzRCxJQUF0RCxDQUFkO0FBQ0EsV0FBSzJLLFdBQUwsR0FBbUIsS0FBS2pDLE1BQXhCO0FBQ0EsV0FBS2hKLFFBQUwsR0FBZ0IsS0FBS2dKLE1BQXJCOztBQUNBLFVBQUksS0FBS3hLLE9BQUwsQ0FBYXdCLFFBQWpCLEVBQTJCO0FBQ3pCLGFBQUtrTCxZQUFMLEdBQW9CLEtBQUsxTSxPQUFMLENBQWF3QixRQUFqQztBQUNBLGFBQUtZLElBQUwsQ0FBVSxLQUFLc0ssWUFBZixFQUE2QixDQUE3QixFQUFnQyxJQUFoQyxFQUFzQyxJQUF0QztBQUNELE9BSEQsTUFHTztBQUNMLGFBQUtBLFlBQUwsR0FBb0IsS0FBS2xDLE1BQXpCO0FBQ0Q7O0FBQ0QsV0FBS21DLFVBQUwsR0FBa0IsS0FBS0MsU0FBTCxDQUFlQyxJQUFmLENBQW9CLElBQXBCLENBQWxCO0FBQ0EsV0FBS0MsU0FBTCxHQUFpQixLQUFLQyxRQUFMLENBQWNGLElBQWQsQ0FBbUIsSUFBbkIsQ0FBakI7QUFDQSxXQUFLRyxRQUFMLEdBQWdCLEtBQUtDLE9BQUwsQ0FBYUosSUFBYixDQUFrQixJQUFsQixDQUFoQjtBQUVBLFdBQUtiLE9BQUwsQ0FBYXhFLGdCQUFiLENBQThCc0QsV0FBVyxDQUFDbkgsS0FBMUMsRUFBaUQsS0FBS2dKLFVBQXREO0FBQ0EsV0FBS1gsT0FBTCxDQUFheEUsZ0JBQWIsQ0FBOEJxRCxXQUFXLENBQUNsSCxLQUExQyxFQUFpRCxLQUFLZ0osVUFBdEQ7O0FBRUEsVUFBSSxLQUFLakwsS0FBTCxDQUFXeUIsT0FBZixFQUF3QjtBQUN0QixhQUFLekIsS0FBTCxDQUFXeUIsT0FBWDtBQUNEO0FBQ0Y7Ozs2QkFFUTtBQUNQLFdBQUtxSCxNQUFMLEdBQWN0SyxrREFBUSxDQUFDK0gsU0FBVCxDQUFtQixLQUFLbEksT0FBeEIsRUFBaUMsS0FBS0MsT0FBTCxDQUFhOEIsTUFBOUMsRUFBc0QsSUFBdEQsQ0FBZDtBQUNBLFdBQUsySyxXQUFMLEdBQW1CLEtBQUtqQyxNQUF4QjtBQUNBLFdBQUtoSixRQUFMLEdBQWdCLEtBQUtnSixNQUFyQjs7QUFDQSxVQUFJLEtBQUt4SyxPQUFMLENBQWF3QixRQUFqQixFQUEyQjtBQUN6QixhQUFLa0wsWUFBTCxHQUFvQixLQUFLMU0sT0FBTCxDQUFhd0IsUUFBakM7QUFDQSxhQUFLWSxJQUFMLENBQVUsS0FBS3NLLFlBQWYsRUFBNkIsQ0FBN0IsRUFBZ0MsSUFBaEMsRUFBc0MsSUFBdEM7QUFDRCxPQUhELE1BR087QUFDTCxhQUFLQSxZQUFMLEdBQW9CLEtBQUtsQyxNQUF6QjtBQUNEOztBQUVELFVBQUksS0FBSzlJLEtBQUwsQ0FBV3lCLE9BQWYsRUFBd0I7QUFDdEIsYUFBS3pCLEtBQUwsQ0FBV3lCLE9BQVg7QUFDRDtBQUNGOzs7NEJBRU8rSixXLEVBQWE7QUFDbkIsYUFBT2hOLGtEQUFRLENBQUNHLGdCQUFULENBQTBCLEtBQUtOLE9BQS9CLEVBQXdDLEtBQUtDLE9BQUwsQ0FBYStMLGdCQUFyRCxDQUFQO0FBQ0Q7OztrQ0FFYTtBQUNaLFdBQUt2SyxRQUFMLEdBQWdCLEtBQUtnSixNQUFMLENBQVlWLEdBQVosQ0FBZ0IsS0FBS3FELGtCQUFMLElBQTJCLElBQUk3SSwrQ0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLENBQTNDLENBQWhCO0FBQ0EsYUFBTyxLQUFLOUMsUUFBWjtBQUNEOzs7Z0NBRVc7QUFDVixhQUFPLEtBQUtBLFFBQUwsQ0FBY3NJLEdBQWQsQ0FBa0IsS0FBSzFCLE9BQUwsR0FBZTlILElBQWYsQ0FBb0IsR0FBcEIsQ0FBbEIsQ0FBUDtBQUNEOzs7a0NBRWFpQyxLLEVBQU87QUFDbkIsV0FBSzRLLGtCQUFMLEdBQTBCNUssS0FBMUI7QUFFQSxVQUFJNkssU0FBUyxHQUFHLEtBQUtyTixPQUFMLENBQWFzTixLQUFiLENBQW1CdEMsaUJBQW5CLENBQWhCO0FBQ0EsVUFBSXVDLFlBQVksR0FBRyxrQkFBa0IvSyxLQUFLLENBQUNNLENBQXhCLEdBQTRCLEtBQTVCLEdBQW9DTixLQUFLLENBQUNPLENBQTFDLEdBQThDLFVBQWpFO0FBRUEsVUFBTXlLLEVBQUUsR0FBR3BJLE1BQU0sQ0FBQ3FJLFNBQVAsQ0FBaUJDLFNBQTVCO0FBQ0EsVUFBTUMsSUFBSSxHQUFHSCxFQUFFLENBQUMxRSxPQUFILENBQVcsT0FBWCxDQUFiOztBQUVBLFVBQUk2RSxJQUFKLEVBQVU7QUFDUkosb0JBQVksR0FBRyxnQkFBZ0IvSyxLQUFLLENBQUNNLENBQXRCLEdBQTBCLEtBQTFCLEdBQWtDTixLQUFLLENBQUNPLENBQXhDLEdBQTRDLEtBQTNEOztBQUNBLFlBQUksQ0FBQyxxQkFBcUI2SyxJQUFyQixDQUEwQlAsU0FBMUIsQ0FBTCxFQUEyQztBQUN6Q0EsbUJBQVMsSUFBSUUsWUFBYjtBQUNELFNBRkQsTUFFTztBQUNMRixtQkFBUyxHQUFHQSxTQUFTLENBQUNRLE9BQVYsQ0FBa0Isb0JBQWxCLEVBQXdDTixZQUF4QyxDQUFaO0FBQ0Q7QUFDRixPQVBELE1BT087QUFDTCxZQUFJLENBQUMsdUJBQXVCSyxJQUF2QixDQUE0QlAsU0FBNUIsQ0FBTCxFQUE2QztBQUMzQ0EsbUJBQVMsSUFBSUUsWUFBYjtBQUNELFNBRkQsTUFFTztBQUNMRixtQkFBUyxHQUFHQSxTQUFTLENBQUNRLE9BQVYsQ0FBa0Isc0JBQWxCLEVBQTBDTixZQUExQyxDQUFaO0FBQ0Q7QUFDRjs7QUFFRCxXQUFLdk4sT0FBTCxDQUFhc04sS0FBYixDQUFtQnRDLGlCQUFuQixJQUF3Q3FDLFNBQXhDO0FBQ0Q7Ozt5QkFFSTdLLEssRUFBNEM7QUFBQSxVQUFyQ3BCLElBQXFDLHVFQUFoQyxDQUFnQztBQUFBLFVBQTdCME0sS0FBNkIsdUVBQXZCLEtBQXVCO0FBQUEsVUFBaEJDLFFBQWdCLHVFQUFQLEtBQU87QUFDL0N2TCxXQUFLLEdBQUdBLEtBQUssQ0FBQ0csS0FBTixFQUFSOztBQUNBLFVBQUltTCxLQUFKLEVBQVc7QUFDVCxhQUFLcEIsV0FBTCxHQUFtQmxLLEtBQW5CO0FBQ0Q7O0FBRUQsV0FBS3dMLGtCQUFMLENBQXdCeEwsS0FBeEI7QUFFQSxXQUFLZixRQUFMLEdBQWdCZSxLQUFoQjs7QUFFQSxVQUFJMEksa0JBQUosRUFBd0I7QUFDdEIsYUFBS2xMLE9BQUwsQ0FBYXNOLEtBQWIsQ0FBbUJwQyxrQkFBbkIsSUFBeUM5SixJQUFJLEdBQUcsSUFBaEQ7QUFDRDs7QUFFRCxXQUFLNk0sYUFBTCxDQUFtQnpMLEtBQUssQ0FBQ2xCLEdBQU4sQ0FBVSxLQUFLbUosTUFBZixDQUFuQjs7QUFDQSxVQUFJLENBQUNzRCxRQUFMLEVBQWU7QUFDYixhQUFLL0wsTUFBTCxDQUFZd0ssSUFBWjtBQUNEO0FBQ0Y7OztzQ0FFa0I7QUFDakIsV0FBSzBCLFdBQUwsQ0FBaUIsS0FBS0MsV0FBTCxFQUFqQjtBQUNEOzs7Z0NBRVczTCxLLEVBQU87QUFDakJBLFdBQUssR0FBR0EsS0FBSyxDQUFDRyxLQUFOLEVBQVI7QUFDQSxXQUFLbEIsUUFBTCxHQUFnQmUsS0FBaEI7O0FBRUEsVUFBSTBJLGtCQUFKLEVBQXdCO0FBQ3RCLGFBQUtsTCxPQUFMLENBQWFzTixLQUFiLENBQW1CcEMsa0JBQW5CLElBQXlDLEtBQXpDO0FBQ0Q7O0FBRUQsV0FBSytDLGFBQUwsQ0FBbUJ6TCxLQUFLLENBQUNsQixHQUFOLENBQVUsS0FBS21KLE1BQWYsQ0FBbkI7QUFDRDs7O3dDQUVtQjtBQUNsQixVQUFJUyxrQkFBSixFQUF3QjtBQUN0QixhQUFLbEwsT0FBTCxDQUFhc04sS0FBYixDQUFtQnBDLGtCQUFuQixJQUF5QyxLQUF6QztBQUNEO0FBQ0Y7Ozt1Q0FFa0IxSSxLLEVBQU87QUFDeEIsV0FBSzRMLGFBQUwsR0FBc0IsS0FBSzNNLFFBQUwsQ0FBY3FCLENBQWQsR0FBa0JOLEtBQUssQ0FBQ00sQ0FBOUM7QUFDQSxXQUFLdUwsY0FBTCxHQUF1QixLQUFLNU0sUUFBTCxDQUFjcUIsQ0FBZCxHQUFrQk4sS0FBSyxDQUFDTSxDQUEvQztBQUNBLFdBQUt3TCxXQUFMLEdBQW9CLEtBQUs3TSxRQUFMLENBQWNzQixDQUFkLEdBQWtCUCxLQUFLLENBQUNPLENBQTVDO0FBQ0EsV0FBS3dMLGFBQUwsR0FBc0IsS0FBSzlNLFFBQUwsQ0FBY3NCLENBQWQsR0FBa0JQLEtBQUssQ0FBQ08sQ0FBOUM7QUFDRDs7OzhCQUVTeUwsSyxFQUFPO0FBQ2YsV0FBS0MsWUFBTCxHQUFvQkQsS0FBcEI7O0FBQ0EsVUFBSSxDQUFDLEtBQUsvQixPQUFOLElBQWtCLEtBQUt4TSxPQUFMLENBQWE4TCxXQUFiLElBQTRCLENBQUMsS0FBSzlMLE9BQUwsQ0FBYThMLFdBQWIsQ0FBeUJ5QyxLQUF6QixDQUFuRCxFQUFxRjtBQUNuRjtBQUNEOztBQUVELFVBQU1FLFlBQVksR0FBSXZKLE9BQU8sSUFBS3FKLEtBQUssWUFBWXBKLE1BQU0sQ0FBQ3VKLFVBQTFEO0FBRUEsV0FBS0MsZ0JBQUwsR0FBd0IsSUFBSXJLLCtDQUFKLENBQVVtSyxZQUFZLEdBQUdGLEtBQUssQ0FBQzVHLGNBQU4sQ0FBcUIsQ0FBckIsRUFBd0JDLEtBQTNCLEdBQW1DMkcsS0FBSyxDQUFDMUcsT0FBL0QsRUFBd0U0RyxZQUFZLEdBQUdGLEtBQUssQ0FBQzVHLGNBQU4sQ0FBcUIsQ0FBckIsRUFBd0JHLEtBQTNCLEdBQW1DeUcsS0FBSyxDQUFDeEcsT0FBN0gsQ0FBeEI7QUFFQSxXQUFLNkcsY0FBTCxHQUFzQixLQUFLVixXQUFMLEVBQXRCOztBQUNBLFVBQUlPLFlBQUosRUFBa0I7QUFDaEIsYUFBS0ksUUFBTCxHQUFnQk4sS0FBSyxDQUFDNUcsY0FBTixDQUFxQixDQUFyQixFQUF3QnlELFVBQXhDO0FBQ0Q7O0FBQ0RtRCxXQUFLLENBQUNPLGVBQU47O0FBQ0EsVUFBSSxFQUFFUCxLQUFLLENBQUNRLE1BQU4sWUFBd0I1SixNQUFNLENBQUM2SixnQkFBL0IsSUFDQVQsS0FBSyxDQUFDUSxNQUFOLFlBQXdCNUosTUFBTSxDQUFDNkosZ0JBRGpDLENBQUosRUFDd0Q7QUFDdERULGFBQUssQ0FBQ1UsY0FBTjtBQUNELE9BSEQsTUFHTztBQUNMVixhQUFLLENBQUNRLE1BQU4sQ0FBYUcsS0FBYjtBQUNEOztBQUVEQyxjQUFRLENBQUMzSCxnQkFBVCxDQUEwQnNELFdBQVcsQ0FBQzFJLElBQXRDLEVBQTRDLEtBQUswSyxTQUFqRDtBQUNBcUMsY0FBUSxDQUFDM0gsZ0JBQVQsQ0FBMEJxRCxXQUFXLENBQUN6SSxJQUF0QyxFQUE0QyxLQUFLMEssU0FBakQ7QUFFQXFDLGNBQVEsQ0FBQzNILGdCQUFULENBQTBCc0QsV0FBVyxDQUFDbEgsR0FBdEMsRUFBMkMsS0FBS29KLFFBQWhEO0FBQ0FtQyxjQUFRLENBQUMzSCxnQkFBVCxDQUEwQnFELFdBQVcsQ0FBQ2pILEdBQXRDLEVBQTJDLEtBQUtvSixRQUFoRDtBQUVBLFdBQUtvQyxVQUFMLEdBQWtCLElBQWxCO0FBRUEsV0FBSy9DLE9BQUwsQ0FBYUUsSUFBYixDQUFrQmdDLEtBQWxCO0FBQ0FjLHFFQUFRLENBQUMsS0FBS3RQLE9BQU4sRUFBZSxRQUFmLENBQVI7QUFDQSxXQUFLZ0MsTUFBTCxDQUFZd0ssSUFBWixDQUFpQmdDLEtBQWpCO0FBQ0Q7Ozs2QkFFUUEsSyxFQUFPO0FBQ2QsV0FBS0MsWUFBTCxHQUFvQkQsS0FBcEI7QUFDQSxVQUFJZSxLQUFKO0FBRUEsVUFBTWIsWUFBWSxHQUFJdkosT0FBTyxJQUFLcUosS0FBSyxZQUFZcEosTUFBTSxDQUFDdUosVUFBMUQ7O0FBQ0EsVUFBSUQsWUFBSixFQUFrQjtBQUNoQmEsYUFBSyxHQUFHcEUsWUFBWSxDQUFDcUQsS0FBRCxFQUFRLEtBQUtNLFFBQWIsQ0FBcEI7O0FBRUEsWUFBSSxDQUFDUyxLQUFMLEVBQVk7QUFDVjtBQUNEO0FBQ0Y7O0FBRURmLFdBQUssQ0FBQ08sZUFBTjtBQUNBUCxXQUFLLENBQUNVLGNBQU47QUFDQSxVQUFNTSxVQUFVLEdBQUcsSUFBSWpMLCtDQUFKLENBQVVtSyxZQUFZLEdBQUdhLEtBQUssQ0FBQzFILEtBQVQsR0FBaUIyRyxLQUFLLENBQUMxRyxPQUE3QyxFQUFzRDRHLFlBQVksR0FBR2EsS0FBSyxDQUFDeEgsS0FBVCxHQUFpQnlHLEtBQUssQ0FBQ3hHLE9BQXpGLENBQW5COztBQUNBLFVBQUl4RixLQUFLLEdBQUcsS0FBS3FNLGNBQUwsQ0FBb0I5RSxHQUFwQixDQUF3QnlGLFVBQVUsQ0FBQ2xPLEdBQVgsQ0FBZSxLQUFLc04sZ0JBQXBCLENBQXhCLENBQVo7O0FBQ0FwTSxXQUFLLEdBQUcsS0FBS2IsS0FBTCxDQUFXYSxLQUFYLEVBQWtCLEtBQUs2RixPQUFMLEVBQWxCLENBQVI7QUFDQSxXQUFLbUgsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxXQUFLbk4sSUFBTCxDQUFVRyxLQUFWLEVBQWlCLENBQWpCO0FBQ0Q7Ozs0QkFFT2dNLEssRUFBTztBQUNiLFVBQU1FLFlBQVksR0FBSXZKLE9BQU8sSUFBS3FKLEtBQUssWUFBWXBKLE1BQU0sQ0FBQ3VKLFVBQTFEOztBQUVBLFVBQUlELFlBQVksSUFBSSxDQUFDdkQsWUFBWSxDQUFDcUQsS0FBRCxFQUFRLEtBQUtNLFFBQWIsQ0FBakMsRUFBeUQ7QUFDdkQ7QUFDRDs7QUFFRE4sV0FBSyxDQUFDTyxlQUFOO0FBQ0FQLFdBQUssQ0FBQ1UsY0FBTjtBQUNBLFdBQUsvQyxLQUFMLENBQVdLLElBQVgsQ0FBZ0JnQyxLQUFoQjtBQUVBWSxjQUFRLENBQUNLLG1CQUFULENBQTZCMUUsV0FBVyxDQUFDMUksSUFBekMsRUFBK0MsS0FBSzBLLFNBQXBEO0FBQ0FxQyxjQUFRLENBQUNLLG1CQUFULENBQTZCM0UsV0FBVyxDQUFDekksSUFBekMsRUFBK0MsS0FBSzBLLFNBQXBEO0FBRUFxQyxjQUFRLENBQUNLLG1CQUFULENBQTZCMUUsV0FBVyxDQUFDbEgsR0FBekMsRUFBOEMsS0FBS29KLFFBQW5EO0FBQ0FtQyxjQUFRLENBQUNLLG1CQUFULENBQTZCM0UsV0FBVyxDQUFDakgsR0FBekMsRUFBOEMsS0FBS29KLFFBQW5EO0FBRUEsV0FBS29DLFVBQUwsR0FBa0IsS0FBbEI7QUFDQUssd0VBQVcsQ0FBQyxLQUFLMVAsT0FBTixFQUFlLFFBQWYsQ0FBWDtBQUNEOzs7bUNBRWM7QUFDYixhQUFPLElBQUkyUCxtREFBSixDQUFjLEtBQUtsTyxRQUFuQixFQUE2QixLQUFLNEcsT0FBTCxFQUE3QixDQUFQO0FBQ0Q7Ozs4QkFFUztBQUNSLFdBQUtBLE9BQUwsQ0FBYSxJQUFiOztBQUNBLFVBQUksS0FBSzFHLEtBQUwsQ0FBV3lCLE9BQWYsRUFBd0I7QUFDdEIsYUFBS3pCLEtBQUwsQ0FBV3lCLE9BQVg7QUFDRDtBQUNGOzs7OEJBRVM7QUFDUixXQUFLNkksT0FBTCxDQUFhd0QsbUJBQWIsQ0FBaUMxRSxXQUFXLENBQUNuSCxLQUE3QyxFQUFvRCxLQUFLZ0osVUFBekQ7QUFDQSxXQUFLWCxPQUFMLENBQWF3RCxtQkFBYixDQUFpQzNFLFdBQVcsQ0FBQ2xILEtBQTdDLEVBQW9ELEtBQUtnSixVQUF6RDtBQUNBd0MsY0FBUSxDQUFDSyxtQkFBVCxDQUE2QjFFLFdBQVcsQ0FBQzFJLElBQXpDLEVBQStDLEtBQUswSyxTQUFwRDtBQUNBcUMsY0FBUSxDQUFDSyxtQkFBVCxDQUE2QjNFLFdBQVcsQ0FBQ3pJLElBQXpDLEVBQStDLEtBQUswSyxTQUFwRDtBQUNBcUMsY0FBUSxDQUFDSyxtQkFBVCxDQUE2QjFFLFdBQVcsQ0FBQ2xILEdBQXpDLEVBQThDLEtBQUtvSixRQUFuRDtBQUNBbUMsY0FBUSxDQUFDSyxtQkFBVCxDQUE2QjNFLFdBQVcsQ0FBQ2pILEdBQXpDLEVBQThDLEtBQUtvSixRQUFuRDtBQUVBLFdBQUtkLEtBQUwsQ0FBV3lELEtBQVg7QUFDQSxXQUFLNU4sTUFBTCxDQUFZNE4sS0FBWjtBQUNEOzs7d0JBRVk7QUFDWCxhQUFPLEtBQUtuRCxPQUFaO0FBQ0QsSztzQkFFVTlCLE0sRUFBUTtBQUNqQixVQUFJQSxNQUFKLEVBQVk7QUFDVitFLDBFQUFXLENBQUMsS0FBSzFQLE9BQU4sRUFBZSxTQUFmLENBQVg7QUFDRCxPQUZELE1BRU87QUFDTHNQLHVFQUFRLENBQUMsS0FBS3RQLE9BQU4sRUFBZSxTQUFmLENBQVI7QUFDRDs7QUFFRCxhQUFPLEtBQUt5TSxPQUFMLEdBQWU5QixNQUF0QjtBQUNEOzs7Ozs7QUFHSDdJLFNBQVMsQ0FBQ3lLLFFBQVYsR0FBcUIsSUFBSTNCLE1BQU0sQ0FBQ0MsS0FBWCxDQUFpQi9JLFNBQWpCLEVBQTRCO0FBQUVzSyxXQUFTLEVBQUUsSUFBYjtBQUFtQkMsY0FBWSxFQUFFO0FBQWpDLENBQTVCLENBQXJCO0FBQ0F2SyxTQUFTLENBQUN5SyxRQUFWLENBQW1CeEMsR0FBbkIsQ0FBdUIyQixpQkFBdkI7Ozs7Ozs7Ozs7Ozs7QUN6VUE7QUFBQTs7QUFFQSxTQUFTYixLQUFULENBQWU3RCxPQUFmLEVBQXNDO0FBQUEsTUFBZC9HLE9BQWMsdUVBQUosRUFBSTtBQUNwQyxPQUFLNFAsS0FBTCxHQUFhLEVBQWI7QUFDQSxPQUFLN0ksT0FBTCxHQUFlQSxPQUFmO0FBQ0EsT0FBS29GLFNBQUwsR0FBaUJuTSxPQUFPLENBQUNtTSxTQUFSLElBQXFCLEtBQXRDO0FBQ0EsT0FBS0MsWUFBTCxHQUFvQnBNLE9BQU8sQ0FBQ29NLFlBQVIsSUFBd0IsS0FBNUM7QUFDRDs7QUFFRHhCLEtBQUssQ0FBQ2lGLFNBQU4sQ0FBZ0J0RCxJQUFoQixHQUF1QixZQUFXO0FBQ2hDLE1BQU11RCxJQUFJLEdBQUcsR0FBRzNGLEtBQUgsQ0FBU2xCLElBQVQsQ0FBYy9GLFNBQWQsQ0FBYjtBQUNBLE1BQU02TSxFQUFFLEdBQUcsS0FBSzVELFNBQUwsR0FBaUIsS0FBS3lELEtBQUwsQ0FBV3pGLEtBQVgsR0FBbUI2RixPQUFuQixFQUFqQixHQUFnRCxLQUFLSixLQUFoRTtBQUNBLE1BQUlLLFFBQUo7O0FBRUEsT0FBSyxJQUFJL0ksQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRzZJLEVBQUUsQ0FBQ25LLE1BQXZCLEVBQStCc0IsQ0FBQyxFQUFoQyxFQUFvQztBQUNsQytJLFlBQVEsR0FBR0YsRUFBRSxDQUFDN0ksQ0FBRCxDQUFGLENBQU1qRSxLQUFOLENBQVksS0FBSzhELE9BQWpCLEVBQTBCK0ksSUFBMUIsQ0FBWDs7QUFDQSxRQUFJLEtBQUsxRCxZQUFMLElBQXFCNkQsUUFBekIsRUFBbUM7QUFDakMsYUFBTyxJQUFQO0FBQ0Q7QUFDRjs7QUFDRCxTQUFPLENBQUMsS0FBSzdELFlBQWI7QUFDRCxDQVpEOztBQWNBeEIsS0FBSyxDQUFDaUYsU0FBTixDQUFnQi9GLEdBQWhCLEdBQXNCLFVBQVNvRyxDQUFULEVBQVk7QUFDaEMsT0FBS04sS0FBTCxDQUFXNUosSUFBWCxDQUFnQmtLLENBQWhCO0FBQ0QsQ0FGRDs7QUFJQXRGLEtBQUssQ0FBQ2lGLFNBQU4sQ0FBZ0JNLE9BQWhCLEdBQTBCLFVBQVNELENBQVQsRUFBWTtBQUNwQyxPQUFLTixLQUFMLENBQVdPLE9BQVgsQ0FBbUJELENBQW5CO0FBQ0QsQ0FGRDs7QUFJQXRGLEtBQUssQ0FBQ2lGLFNBQU4sQ0FBZ0JPLE1BQWhCLEdBQXlCLFVBQVNGLENBQVQsRUFBWTtBQUNuQyxNQUFNcEssS0FBSyxHQUFHLEtBQUs4SixLQUFMLENBQVcvRyxPQUFYLENBQW1CcUgsQ0FBbkIsQ0FBZDs7QUFDQSxNQUFJcEssS0FBSyxLQUFLLENBQUMsQ0FBZixFQUFrQjtBQUNoQixTQUFLOEosS0FBTCxDQUFXUyxNQUFYLENBQWtCdkssS0FBbEIsRUFBeUIsQ0FBekI7QUFDRDtBQUNGLENBTEQ7O0FBT0E4RSxLQUFLLENBQUNpRixTQUFOLENBQWdCRixLQUFoQixHQUF3QixVQUFTVyxFQUFULEVBQWE7QUFDbkMsT0FBS1YsS0FBTCxHQUFhLEVBQWI7QUFDRCxDQUZEOztBQUllaEYsb0VBQWYsRTs7Ozs7Ozs7Ozs7QUMxQ0E7QUFDQSxJQUFNMkYsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBU0MsY0FBVCxFQUF5QkMsV0FBekIsRUFBc0M7QUFDbEQ7QUFDRixNQUFJdk4sU0FBUyxDQUFDLENBQUQsQ0FBYixFQUFrQjtBQUNoQixTQUFLLElBQUlnRSxDQUFDLEdBQUMsQ0FBTixFQUFTd0osR0FBRyxHQUFDeE4sU0FBUyxDQUFDMEMsTUFBNUIsRUFBb0NzQixDQUFDLEdBQUN3SixHQUF0QyxFQUEyQ3hKLENBQUMsRUFBNUMsRUFBZ0Q7QUFDOUNzSixvQkFBYyxDQUFDWCxTQUFmLENBQXlCM00sU0FBUyxDQUFDZ0UsQ0FBRCxDQUFsQyxJQUF5Q3VKLFdBQVcsQ0FBQ1osU0FBWixDQUFzQjNNLFNBQVMsQ0FBQ2dFLENBQUQsQ0FBL0IsQ0FBekM7QUFDRDtBQUNGLEdBSkQsTUFJTztBQUNMLFNBQUssSUFBTXlKLFVBQVgsSUFBeUJGLFdBQVcsQ0FBQ1osU0FBckMsRUFBZ0Q7QUFDOUM7OztBQUdBLFVBQUksQ0FBQ1csY0FBYyxDQUFDWCxTQUFmLENBQXlCYyxVQUF6QixDQUFMLEVBQTJDO0FBQ3pDSCxzQkFBYyxDQUFDWCxTQUFmLENBQXlCYyxVQUF6QixJQUF1Q0YsV0FBVyxDQUFDWixTQUFaLENBQXNCYyxVQUF0QixDQUF2QztBQUNEO0FBQ0Y7QUFDRjtBQUNGLENBaEJEO0FBaUJBOzs7QUFDQUosT0FBTyxDQUFDSyxRQUFELEVBQVdoSCxLQUFYLEVBQWtCLFNBQWxCLENBQVAsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ25CTXRGLEs7OztBQUNKLGlCQUFZekIsQ0FBWixFQUFlQyxDQUFmLEVBQWtCO0FBQUE7O0FBQ2hCLFNBQUtELENBQUwsR0FBU0EsQ0FBVDtBQUNBLFNBQUtDLENBQUwsR0FBU0EsQ0FBVDtBQUNEOzs7O3dCQUVHK04sQyxFQUFHO0FBQ0wsYUFBTyxJQUFJdk0sS0FBSixDQUFVLEtBQUt6QixDQUFMLEdBQVNnTyxDQUFDLENBQUNoTyxDQUFyQixFQUF3QixLQUFLQyxDQUFMLEdBQVMrTixDQUFDLENBQUMvTixDQUFuQyxDQUFQO0FBQ0Q7Ozt3QkFFRytOLEMsRUFBRztBQUNMLGFBQU8sSUFBSXZNLEtBQUosQ0FBVSxLQUFLekIsQ0FBTCxHQUFTZ08sQ0FBQyxDQUFDaE8sQ0FBckIsRUFBd0IsS0FBS0MsQ0FBTCxHQUFTK04sQ0FBQyxDQUFDL04sQ0FBbkMsQ0FBUDtBQUNEOzs7eUJBRUlnTyxDLEVBQUc7QUFDTixhQUFPLElBQUl4TSxLQUFKLENBQVUsS0FBS3pCLENBQUwsR0FBU2lPLENBQW5CLEVBQXNCLEtBQUtoTyxDQUFMLEdBQVNnTyxDQUEvQixDQUFQO0FBQ0Q7OzsrQkFFVTtBQUNULGFBQU8sSUFBSXhNLEtBQUosQ0FBVSxDQUFDLEtBQUt6QixDQUFoQixFQUFtQixDQUFDLEtBQUtDLENBQXpCLENBQVA7QUFDRDs7OzRCQUVPK04sQyxFQUFHO0FBQ1QsYUFBUSxLQUFLaE8sQ0FBTCxLQUFXZ08sQ0FBQyxDQUFDaE8sQ0FBYixJQUFrQixLQUFLQyxDQUFMLEtBQVcrTixDQUFDLENBQUMvTixDQUF2QztBQUNEOzs7NEJBRU87QUFDTixhQUFPLElBQUl3QixLQUFKLENBQVUsS0FBS3pCLENBQWYsRUFBa0IsS0FBS0MsQ0FBdkIsQ0FBUDtBQUNEOzs7K0JBRVU7QUFDVCwwQkFBYSxLQUFLRCxDQUFsQixnQkFBeUIsS0FBS0MsQ0FBOUI7QUFDRDs7Ozs7O0lBR0c0TSxTOzs7QUFDSixxQkFBWWxPLFFBQVosRUFBc0JnQixJQUF0QixFQUE0QjtBQUFBOztBQUMxQixTQUFLaEIsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxTQUFLZ0IsSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7Ozs7NEJBRU87QUFDTixhQUFPLEtBQUtoQixRQUFaO0FBQ0Q7Ozs0QkFFTztBQUNOLGFBQU8sSUFBSThDLEtBQUosQ0FBVSxLQUFLOUMsUUFBTCxDQUFjcUIsQ0FBZCxHQUFrQixLQUFLTCxJQUFMLENBQVVLLENBQXRDLEVBQXlDLEtBQUtyQixRQUFMLENBQWNzQixDQUF2RCxDQUFQO0FBQ0Q7Ozs0QkFFTztBQUNOLGFBQU8sS0FBS3RCLFFBQUwsQ0FBY3NJLEdBQWQsQ0FBa0IsS0FBS3RILElBQXZCLENBQVA7QUFDRDs7OzRCQUVPO0FBQ04sYUFBTyxJQUFJOEIsS0FBSixDQUFVLEtBQUs5QyxRQUFMLENBQWNxQixDQUF4QixFQUEyQixLQUFLckIsUUFBTCxDQUFjc0IsQ0FBZCxHQUFrQixLQUFLTixJQUFMLENBQVVNLENBQXZELENBQVA7QUFDRDs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLdEIsUUFBTCxDQUFjc0ksR0FBZCxDQUFrQixLQUFLdEgsSUFBTCxDQUFVbEMsSUFBVixDQUFlLEdBQWYsQ0FBbEIsQ0FBUDtBQUNEOzs7dUJBRUV5USxJLEVBQU07QUFDUCxVQUFNdlAsUUFBUSxHQUFHLElBQUk4QyxLQUFKLENBQVV4RCxJQUFJLENBQUNrUSxHQUFMLENBQVMsS0FBS3hQLFFBQUwsQ0FBY3FCLENBQXZCLEVBQTBCa08sSUFBSSxDQUFDdlAsUUFBTCxDQUFjcUIsQ0FBeEMsQ0FBVixFQUFzRC9CLElBQUksQ0FBQ2tRLEdBQUwsQ0FBUyxLQUFLeFAsUUFBTCxDQUFjc0IsQ0FBdkIsRUFBMEJpTyxJQUFJLENBQUN2UCxRQUFMLENBQWNzQixDQUF4QyxDQUF0RCxDQUFqQjtBQUNBLFVBQU1OLElBQUksR0FBSSxJQUFJOEIsS0FBSixDQUFVeEQsSUFBSSxDQUFDbVEsR0FBTCxDQUFTLEtBQUt6UCxRQUFMLENBQWNxQixDQUFkLEdBQWtCLEtBQUtMLElBQUwsQ0FBVUssQ0FBckMsRUFBd0NrTyxJQUFJLENBQUN2UCxRQUFMLENBQWNxQixDQUFkLEdBQWtCa08sSUFBSSxDQUFDdk8sSUFBTCxDQUFVSyxDQUFwRSxDQUFWLEVBQWtGL0IsSUFBSSxDQUFDbVEsR0FBTCxDQUFTLEtBQUt6UCxRQUFMLENBQWNzQixDQUFkLEdBQWtCLEtBQUtOLElBQUwsQ0FBVU0sQ0FBckMsRUFBd0NpTyxJQUFJLENBQUN2UCxRQUFMLENBQWNzQixDQUFkLEdBQWtCaU8sSUFBSSxDQUFDdk8sSUFBTCxDQUFVTSxDQUFwRSxDQUFsRixDQUFELENBQTRKekIsR0FBNUosQ0FBZ0tHLFFBQWhLLENBQWI7QUFDQSxhQUFPLElBQUlrTyxTQUFKLENBQWNsTyxRQUFkLEVBQXdCZ0IsSUFBeEIsQ0FBUDtBQUNEOzs7d0JBRUd1TyxJLEVBQU07QUFDUixVQUFNdlAsUUFBUSxHQUFHLElBQUk4QyxLQUFKLENBQVV4RCxJQUFJLENBQUNtUSxHQUFMLENBQVMsS0FBS3pQLFFBQUwsQ0FBY3FCLENBQXZCLEVBQTBCa08sSUFBSSxDQUFDdlAsUUFBTCxDQUFjcUIsQ0FBeEMsQ0FBVixFQUFzRC9CLElBQUksQ0FBQ21RLEdBQUwsQ0FBUyxLQUFLelAsUUFBTCxDQUFjc0IsQ0FBdkIsRUFBMEJpTyxJQUFJLENBQUN2UCxRQUFMLENBQWNzQixDQUF4QyxDQUF0RCxDQUFqQjtBQUNBLFVBQU1OLElBQUksR0FBSSxJQUFJOEIsS0FBSixDQUFVeEQsSUFBSSxDQUFDa1EsR0FBTCxDQUFTLEtBQUt4UCxRQUFMLENBQWNxQixDQUFkLEdBQWtCLEtBQUtMLElBQUwsQ0FBVUssQ0FBckMsRUFBd0NrTyxJQUFJLENBQUN2UCxRQUFMLENBQWNxQixDQUFkLEdBQWtCa08sSUFBSSxDQUFDdk8sSUFBTCxDQUFVSyxDQUFwRSxDQUFWLEVBQWtGL0IsSUFBSSxDQUFDa1EsR0FBTCxDQUFTLEtBQUt4UCxRQUFMLENBQWNzQixDQUFkLEdBQWtCLEtBQUtOLElBQUwsQ0FBVU0sQ0FBckMsRUFBd0NpTyxJQUFJLENBQUN2UCxRQUFMLENBQWNzQixDQUFkLEdBQWtCaU8sSUFBSSxDQUFDdk8sSUFBTCxDQUFVTSxDQUFwRSxDQUFsRixDQUFELENBQTRKekIsR0FBNUosQ0FBZ0tHLFFBQWhLLENBQWI7O0FBQ0EsVUFBSWdCLElBQUksQ0FBQ0ssQ0FBTCxJQUFVLENBQVYsSUFBZUwsSUFBSSxDQUFDTSxDQUFMLElBQVUsQ0FBN0IsRUFBZ0M7QUFDOUIsZUFBTyxJQUFQO0FBQ0Q7O0FBQ0QsYUFBTyxJQUFJNE0sU0FBSixDQUFjbE8sUUFBZCxFQUF3QmdCLElBQXhCLENBQVA7QUFDRDs7O2lDQUVZcU8sQyxFQUFHO0FBQ2QsYUFBTyxFQUFFLEtBQUtyUCxRQUFMLENBQWNxQixDQUFkLEdBQWtCZ08sQ0FBQyxDQUFDaE8sQ0FBcEIsSUFBeUIsS0FBS3JCLFFBQUwsQ0FBY3FCLENBQWQsR0FBa0IsS0FBS0wsSUFBTCxDQUFVSyxDQUE1QixHQUFnQ2dPLENBQUMsQ0FBQ2hPLENBQTNELElBQWdFLEtBQUtyQixRQUFMLENBQWNzQixDQUFkLEdBQWtCK04sQ0FBQyxDQUFDL04sQ0FBcEYsSUFBeUYsS0FBS3RCLFFBQUwsQ0FBY3NCLENBQWQsR0FBa0IsS0FBS04sSUFBTCxDQUFVTSxDQUE1QixHQUFnQytOLENBQUMsQ0FBQy9OLENBQTdILENBQVA7QUFDRDs7O3FDQUVnQlIsUyxFQUFXO0FBQzFCLGFBQU8sS0FBSzRPLFlBQUwsQ0FBa0I1TyxTQUFTLENBQUNkLFFBQTVCLEtBQXlDLEtBQUswUCxZQUFMLENBQWtCNU8sU0FBUyxDQUFDTSxLQUFWLEVBQWxCLENBQWhEO0FBQ0Q7OztnQ0FFV21PLEksRUFBTUksSSxFQUFNO0FBQ3RCLFVBQUlDLE9BQUosRUFBYUMsY0FBYjs7QUFDQSxVQUFJRixJQUFKLEVBQVU7QUFDUkMsZUFBTyxHQUFHRCxJQUFWO0FBQ0QsT0FGRCxNQUVPO0FBQ0xFLHNCQUFjLEdBQUcsS0FBS0MsR0FBTCxDQUFTUCxJQUFULENBQWpCOztBQUNBLFlBQUksQ0FBQ00sY0FBTCxFQUFxQjtBQUNuQixpQkFBT04sSUFBUDtBQUNEOztBQUNESyxlQUFPLEdBQUdDLGNBQWMsQ0FBQzdPLElBQWYsQ0FBb0JLLENBQXBCLEdBQXdCd08sY0FBYyxDQUFDN08sSUFBZixDQUFvQk0sQ0FBNUMsR0FBZ0QsR0FBaEQsR0FBc0QsR0FBaEU7QUFDRDs7QUFDRCxVQUFNeU8sVUFBVSxHQUFHLEtBQUs3USxTQUFMLEVBQW5CO0FBQ0EsVUFBTThRLFVBQVUsR0FBR1QsSUFBSSxDQUFDclEsU0FBTCxFQUFuQjtBQUNBLFVBQU00SCxJQUFJLEdBQUdpSixVQUFVLENBQUNILE9BQUQsQ0FBVixHQUFzQkksVUFBVSxDQUFDSixPQUFELENBQWhDLEdBQTRDLENBQUMsQ0FBN0MsR0FBaUQsQ0FBOUQ7QUFDQSxVQUFNNUcsTUFBTSxHQUFHbEMsSUFBSSxHQUFHLENBQVAsR0FBVyxLQUFLOUcsUUFBTCxDQUFjNFAsT0FBZCxJQUF5QixLQUFLNU8sSUFBTCxDQUFVNE8sT0FBVixDQUF6QixHQUE4Q0wsSUFBSSxDQUFDdlAsUUFBTCxDQUFjNFAsT0FBZCxDQUF6RCxHQUFrRixLQUFLNVAsUUFBTCxDQUFjNFAsT0FBZCxLQUEwQkwsSUFBSSxDQUFDdlAsUUFBTCxDQUFjNFAsT0FBZCxJQUF5QkwsSUFBSSxDQUFDdk8sSUFBTCxDQUFVNE8sT0FBVixDQUFuRCxDQUFqRztBQUNBTCxVQUFJLENBQUN2UCxRQUFMLENBQWM0UCxPQUFkLElBQXlCTCxJQUFJLENBQUN2UCxRQUFMLENBQWM0UCxPQUFkLElBQXlCNUcsTUFBbEQ7QUFDQSxhQUFPdUcsSUFBUDtBQUNEOzs7Z0NBRVc7QUFDVixhQUFPLEtBQUt2TyxJQUFMLENBQVVLLENBQVYsR0FBYyxLQUFLTCxJQUFMLENBQVVNLENBQS9CO0FBQ0Q7OzsrQkFFVTJPLEUsRUFBSTtBQUNiQSxRQUFFLEdBQUdBLEVBQUUsSUFBSXRDLFFBQVEsQ0FBQ2xELGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWDtBQUNBd0YsUUFBRSxDQUFDcEUsS0FBSCxDQUFTcUUsSUFBVCxHQUFnQixLQUFLbFEsUUFBTCxDQUFjcUIsQ0FBZCxHQUFrQixJQUFsQztBQUNBNE8sUUFBRSxDQUFDcEUsS0FBSCxDQUFTc0UsR0FBVCxHQUFlLEtBQUtuUSxRQUFMLENBQWNzQixDQUFkLEdBQWtCLElBQWpDO0FBQ0EyTyxRQUFFLENBQUNwRSxLQUFILENBQVN1RSxLQUFULEdBQWlCLEtBQUtwUCxJQUFMLENBQVVLLENBQVYsR0FBYyxJQUEvQjtBQUNBNE8sUUFBRSxDQUFDcEUsS0FBSCxDQUFTeEQsTUFBVCxHQUFrQixLQUFLckgsSUFBTCxDQUFVTSxDQUFWLEdBQWMsSUFBaEM7QUFDRDs7OzJCQUVNTixJLEVBQU07QUFDWCxXQUFLQSxJQUFMLEdBQVksS0FBS0EsSUFBTCxDQUFVc0gsR0FBVixDQUFjdEgsSUFBZCxDQUFaO0FBQ0EsV0FBS2hCLFFBQUwsR0FBZ0IsS0FBS0EsUUFBTCxDQUFjc0ksR0FBZCxDQUFrQnRILElBQUksQ0FBQ2xDLElBQUwsQ0FBVSxDQUFDLEdBQVgsQ0FBbEIsQ0FBaEI7QUFDRDs7O2lDQUVZO0FBQ1gsYUFBT1EsSUFBSSxDQUFDa1EsR0FBTCxDQUFTLEtBQUt4TyxJQUFMLENBQVVLLENBQW5CLEVBQXNCLEtBQUtMLElBQUwsQ0FBVU0sQ0FBaEMsQ0FBUDtBQUNEOzs7OztBQUdIOzs7QUFDQSxJQUFNNUMsUUFBUSxHQUFHO0FBQ2ZxSyxhQURlLHVCQUNIc0gsRUFERyxFQUNDQyxFQURELEVBQ0s7QUFDbEIsUUFBTUMsRUFBRSxHQUFHRixFQUFFLENBQUNoUCxDQUFILEdBQU9pUCxFQUFFLENBQUNqUCxDQUFyQjtBQUFBLFFBQXdCbVAsRUFBRSxHQUFHSCxFQUFFLENBQUMvTyxDQUFILEdBQU9nUCxFQUFFLENBQUNoUCxDQUF2QztBQUNBLFdBQU9oQyxJQUFJLENBQUNtUixJQUFMLENBQVVGLEVBQUUsR0FBR0EsRUFBTCxHQUFVQyxFQUFFLEdBQUdBLEVBQXpCLENBQVA7QUFDRCxHQUpjO0FBS2ZFLFVBTGUsb0JBS05MLEVBTE0sRUFLRkMsRUFMRSxFQUtFO0FBQ2YsV0FBTzVSLFFBQVEsQ0FBQ3FLLFdBQVQsQ0FBcUJzSCxFQUFyQixFQUF5QkMsRUFBekIsQ0FBUDtBQUNELEdBUGM7QUFRZkssZ0JBUmUsMEJBUUFOLEVBUkEsRUFRSUMsRUFSSixFQVFRO0FBQ3JCLFdBQU9oUixJQUFJLENBQUNzUixHQUFMLENBQVNQLEVBQUUsQ0FBQ2hQLENBQUgsR0FBT2lQLEVBQUUsQ0FBQ2pQLENBQW5CLENBQVA7QUFDRCxHQVZjO0FBV2Z3UCxnQkFYZSwwQkFXQVIsRUFYQSxFQVdJQyxFQVhKLEVBV1E7QUFDckIsV0FBT2hSLElBQUksQ0FBQ3NSLEdBQUwsQ0FBU1AsRUFBRSxDQUFDL08sQ0FBSCxHQUFPZ1AsRUFBRSxDQUFDaFAsQ0FBbkIsQ0FBUDtBQUNELEdBYmM7QUFjZndQLGlDQWRlLDJDQWNpQnRTLE9BZGpCLEVBYzBCO0FBQ3ZDLFdBQU8sVUFBQzZSLEVBQUQsRUFBS0MsRUFBTCxFQUFZO0FBQ2pCLGFBQU9oUixJQUFJLENBQUNtUixJQUFMLENBQ0xuUixJQUFJLENBQUN5UixHQUFMLENBQVN2UyxPQUFPLENBQUM2QyxDQUFSLEdBQVkvQixJQUFJLENBQUNzUixHQUFMLENBQVNQLEVBQUUsQ0FBQ2hQLENBQUgsR0FBT2lQLEVBQUUsQ0FBQ2pQLENBQW5CLENBQXJCLEVBQTRDLENBQTVDLElBQ0EvQixJQUFJLENBQUN5UixHQUFMLENBQVN2UyxPQUFPLENBQUM4QyxDQUFSLEdBQVloQyxJQUFJLENBQUNzUixHQUFMLENBQVNQLEVBQUUsQ0FBQy9PLENBQUgsR0FBT2dQLEVBQUUsQ0FBQ2hQLENBQW5CLENBQXJCLEVBQTRDLENBQTVDLENBRkssQ0FBUDtBQUlELEtBTEQ7QUFNRCxHQXJCYztBQXNCZjBQLHFCQXRCZSwrQkFzQktDLEdBdEJMLEVBc0JVQyxHQXRCVixFQXNCZS9SLE1BdEJmLEVBc0J1QjRKLFdBdEJ2QixFQXNCb0M7QUFDakQsUUFBSS9ILElBQUo7QUFBQSxRQUFVc0QsS0FBSyxHQUFHLENBQWxCO0FBQUEsUUFBcUJvQixDQUFyQjtBQUFBLFFBQXdCeUwsSUFBeEI7QUFDQXBJLGVBQVcsR0FBR0EsV0FBVyxJQUFJckssUUFBUSxDQUFDcUssV0FBdEM7O0FBQ0EsUUFBSWtJLEdBQUcsQ0FBQzdNLE1BQUosS0FBZSxDQUFuQixFQUFzQjtBQUNwQixhQUFPLENBQUMsQ0FBUjtBQUNEOztBQUNEcEQsUUFBSSxHQUFHK0gsV0FBVyxDQUFDa0ksR0FBRyxDQUFDLENBQUQsQ0FBSixFQUFTQyxHQUFULENBQWxCOztBQUNBLFNBQUt4TCxDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLEdBQUd1TCxHQUFHLENBQUM3TSxNQUFwQixFQUE0QnNCLENBQUMsRUFBN0IsRUFBaUM7QUFDL0J5TCxVQUFJLEdBQUdwSSxXQUFXLENBQUNrSSxHQUFHLENBQUN2TCxDQUFELENBQUosRUFBU3dMLEdBQVQsQ0FBbEI7O0FBQ0EsVUFBSUMsSUFBSSxHQUFHblEsSUFBWCxFQUFpQjtBQUNmQSxZQUFJLEdBQUdtUSxJQUFQO0FBQ0E3TSxhQUFLLEdBQUdvQixDQUFSO0FBQ0Q7QUFDRjs7QUFDRCxRQUFJdkcsTUFBTSxJQUFJLENBQVYsSUFBZTZCLElBQUksR0FBRzdCLE1BQTFCLEVBQWtDO0FBQ2hDLGFBQU8sQ0FBQyxDQUFSO0FBQ0Q7O0FBQ0QsV0FBT21GLEtBQVA7QUFDRCxHQXhDYztBQXlDZnBFLE9BekNlLGlCQXlDVHNQLEdBekNTLEVBeUNKQyxHQXpDSSxFQXlDQ3lCLEdBekNELEVBeUNNO0FBQ25CLFdBQU81UixJQUFJLENBQUNtUSxHQUFMLENBQVNELEdBQVQsRUFBY2xRLElBQUksQ0FBQ2tRLEdBQUwsQ0FBU0MsR0FBVCxFQUFjeUIsR0FBZCxDQUFkLENBQVA7QUFDRCxHQTNDYztBQTRDZkUsWUE1Q2Usc0JBNENKNUIsR0E1Q0ksRUE0Q0NDLEdBNUNELEVBNENNeUIsR0E1Q04sRUE0Q1c7QUFDeEIsUUFBTTdQLENBQUMsR0FBRy9CLElBQUksQ0FBQ21RLEdBQUwsQ0FBU0QsR0FBRyxDQUFDbk8sQ0FBYixFQUFnQi9CLElBQUksQ0FBQ2tRLEdBQUwsQ0FBU0MsR0FBRyxDQUFDcE8sQ0FBYixFQUFnQjZQLEdBQUcsQ0FBQzdQLENBQXBCLENBQWhCLENBQVY7QUFDQSxRQUFNQyxDQUFDLEdBQUdoQyxJQUFJLENBQUNtUSxHQUFMLENBQVNELEdBQUcsQ0FBQ2xPLENBQWIsRUFBZ0JoQyxJQUFJLENBQUNrUSxHQUFMLENBQVNDLEdBQUcsQ0FBQ25PLENBQWIsRUFBZ0I0UCxHQUFHLENBQUM1UCxDQUFwQixDQUFoQixDQUFWO0FBQ0EsV0FBTyxJQUFJd0IsS0FBSixDQUFVekIsQ0FBVixFQUFhQyxDQUFiLENBQVA7QUFDRCxHQWhEYztBQWlEYjtBQUNGNEIsZ0JBbERlLDBCQWtEQW1PLElBbERBLEVBa0RNQyxJQWxETixFQWtEWUMsSUFsRFosRUFrRGtCQyxJQWxEbEIsRUFrRHdCO0FBQ3JDLFFBQUlMLElBQUosRUFBVU0sRUFBVixFQUFjQyxFQUFkLEVBQWtCQyxFQUFsQixFQUFzQkMsRUFBdEIsRUFBMEJ2USxDQUExQixFQUE2QkMsQ0FBN0I7O0FBQ0EsUUFBSWlRLElBQUksQ0FBQ2xRLENBQUwsS0FBV21RLElBQUksQ0FBQ25RLENBQXBCLEVBQXVCO0FBQ3JCOFAsVUFBSSxHQUFHSSxJQUFQO0FBQ0FBLFVBQUksR0FBR0YsSUFBUDtBQUNBQSxVQUFJLEdBQUdGLElBQVA7QUFDQUEsVUFBSSxHQUFHSyxJQUFQO0FBQ0FBLFVBQUksR0FBR0YsSUFBUDtBQUNBQSxVQUFJLEdBQUdILElBQVA7QUFDRDs7QUFDRCxRQUFJRSxJQUFJLENBQUNoUSxDQUFMLEtBQVdpUSxJQUFJLENBQUNqUSxDQUFwQixFQUF1QjtBQUNyQnFRLFFBQUUsR0FBRyxDQUFDRixJQUFJLENBQUNsUSxDQUFMLEdBQVNpUSxJQUFJLENBQUNqUSxDQUFmLEtBQXFCa1EsSUFBSSxDQUFDblEsQ0FBTCxHQUFTa1EsSUFBSSxDQUFDbFEsQ0FBbkMsQ0FBTDtBQUNBdVEsUUFBRSxHQUFHLENBQUNKLElBQUksQ0FBQ25RLENBQUwsR0FBU2tRLElBQUksQ0FBQ2pRLENBQWQsR0FBa0JpUSxJQUFJLENBQUNsUSxDQUFMLEdBQVNtUSxJQUFJLENBQUNsUSxDQUFqQyxLQUF1Q2tRLElBQUksQ0FBQ25RLENBQUwsR0FBU2tRLElBQUksQ0FBQ2xRLENBQXJELENBQUw7QUFDQUEsT0FBQyxHQUFHZ1EsSUFBSSxDQUFDaFEsQ0FBVDtBQUNBQyxPQUFDLEdBQUdELENBQUMsR0FBR3FRLEVBQUosR0FBU0UsRUFBYjtBQUNBLGFBQU8sSUFBSTlPLEtBQUosQ0FBVXpCLENBQVYsRUFBYUMsQ0FBYixDQUFQO0FBQ0QsS0FORCxNQU1PO0FBQ0xtUSxRQUFFLEdBQUcsQ0FBQ0gsSUFBSSxDQUFDaFEsQ0FBTCxHQUFTK1AsSUFBSSxDQUFDL1AsQ0FBZixLQUFxQmdRLElBQUksQ0FBQ2pRLENBQUwsR0FBU2dRLElBQUksQ0FBQ2hRLENBQW5DLENBQUw7QUFDQXNRLFFBQUUsR0FBRyxDQUFDTCxJQUFJLENBQUNqUSxDQUFMLEdBQVNnUSxJQUFJLENBQUMvUCxDQUFkLEdBQWtCK1AsSUFBSSxDQUFDaFEsQ0FBTCxHQUFTaVEsSUFBSSxDQUFDaFEsQ0FBakMsS0FBdUNnUSxJQUFJLENBQUNqUSxDQUFMLEdBQVNnUSxJQUFJLENBQUNoUSxDQUFyRCxDQUFMO0FBQ0FxUSxRQUFFLEdBQUcsQ0FBQ0YsSUFBSSxDQUFDbFEsQ0FBTCxHQUFTaVEsSUFBSSxDQUFDalEsQ0FBZixLQUFxQmtRLElBQUksQ0FBQ25RLENBQUwsR0FBU2tRLElBQUksQ0FBQ2xRLENBQW5DLENBQUw7QUFDQXVRLFFBQUUsR0FBRyxDQUFDSixJQUFJLENBQUNuUSxDQUFMLEdBQVNrUSxJQUFJLENBQUNqUSxDQUFkLEdBQWtCaVEsSUFBSSxDQUFDbFEsQ0FBTCxHQUFTbVEsSUFBSSxDQUFDbFEsQ0FBakMsS0FBdUNrUSxJQUFJLENBQUNuUSxDQUFMLEdBQVNrUSxJQUFJLENBQUNsUSxDQUFyRCxDQUFMO0FBQ0FBLE9BQUMsR0FBRyxDQUFDc1EsRUFBRSxHQUFHQyxFQUFOLEtBQWFGLEVBQUUsR0FBR0QsRUFBbEIsQ0FBSjtBQUNBblEsT0FBQyxHQUFHRCxDQUFDLEdBQUdvUSxFQUFKLEdBQVNFLEVBQWI7QUFDQSxhQUFPLElBQUk3TyxLQUFKLENBQVV6QixDQUFWLEVBQWFDLENBQWIsQ0FBUDtBQUNEO0FBQ0YsR0EzRWM7QUE0RWZ1USxnQkE1RWUsMEJBNEVBQyxHQTVFQSxFQTRFS0MsR0E1RUwsRUE0RVVDLENBNUVWLEVBNEVhO0FBQzFCLFFBQUkzUSxDQUFKLEVBQU9DLENBQVA7QUFDQUQsS0FBQyxHQUFHM0MsUUFBUSxDQUFDd0IsS0FBVCxDQUFlWixJQUFJLENBQUNrUSxHQUFMLENBQVNzQyxHQUFHLENBQUN6USxDQUFiLEVBQWdCMFEsR0FBRyxDQUFDMVEsQ0FBcEIsQ0FBZixFQUF1Qy9CLElBQUksQ0FBQ21RLEdBQUwsQ0FBU3FDLEdBQUcsQ0FBQ3pRLENBQWIsRUFBZ0IwUSxHQUFHLENBQUMxUSxDQUFwQixDQUF2QyxFQUErRDJRLENBQUMsQ0FBQzNRLENBQWpFLENBQUo7O0FBQ0EsUUFBSUEsQ0FBQyxLQUFLMlEsQ0FBQyxDQUFDM1EsQ0FBWixFQUFlO0FBQ2JDLE9BQUMsR0FBSUQsQ0FBQyxLQUFLeVEsR0FBRyxDQUFDelEsQ0FBWCxHQUFnQnlRLEdBQUcsQ0FBQ3hRLENBQXBCLEdBQXdCeVEsR0FBRyxDQUFDelEsQ0FBaEM7QUFDQTBRLE9BQUMsR0FBRyxJQUFJbFAsS0FBSixDQUFVekIsQ0FBVixFQUFhQyxDQUFiLENBQUo7QUFDRDs7QUFFREEsS0FBQyxHQUFHNUMsUUFBUSxDQUFDd0IsS0FBVCxDQUFlWixJQUFJLENBQUNrUSxHQUFMLENBQVNzQyxHQUFHLENBQUN4USxDQUFiLEVBQWdCeVEsR0FBRyxDQUFDelEsQ0FBcEIsQ0FBZixFQUF1Q2hDLElBQUksQ0FBQ21RLEdBQUwsQ0FBU3FDLEdBQUcsQ0FBQ3hRLENBQWIsRUFBZ0J5USxHQUFHLENBQUN6USxDQUFwQixDQUF2QyxFQUErRDBRLENBQUMsQ0FBQzFRLENBQWpFLENBQUo7O0FBQ0EsUUFBSUEsQ0FBQyxLQUFLMFEsQ0FBQyxDQUFDMVEsQ0FBWixFQUFlO0FBQ2JELE9BQUMsR0FBSUMsQ0FBQyxLQUFLd1EsR0FBRyxDQUFDeFEsQ0FBWCxHQUFnQndRLEdBQUcsQ0FBQ3pRLENBQXBCLEdBQXdCMFEsR0FBRyxDQUFDMVEsQ0FBaEM7QUFDQTJRLE9BQUMsR0FBRyxJQUFJbFAsS0FBSixDQUFVekIsQ0FBVixFQUFhQyxDQUFiLENBQUo7QUFDRDs7QUFFRCxXQUFPMFEsQ0FBUDtBQUNELEdBM0ZjO0FBNEZmOVAsYUE1RmUsdUJBNEZIK1AsQ0E1RkcsRUE0RkFDLENBNUZBLEVBNEZHRixDQTVGSCxFQTRGTTtBQUNuQixRQUFNRyxFQUFFLEdBQUcsSUFBSXJQLEtBQUosQ0FBVWtQLENBQUMsQ0FBQzNRLENBQUYsR0FBTTRRLENBQUMsQ0FBQzVRLENBQWxCLEVBQXFCMlEsQ0FBQyxDQUFDMVEsQ0FBRixHQUFNMlEsQ0FBQyxDQUFDM1EsQ0FBN0IsQ0FBWDtBQUFBLFFBQ0U4USxFQUFFLEdBQUcsSUFBSXRQLEtBQUosQ0FBVW9QLENBQUMsQ0FBQzdRLENBQUYsR0FBTTRRLENBQUMsQ0FBQzVRLENBQWxCLEVBQXFCNlEsQ0FBQyxDQUFDNVEsQ0FBRixHQUFNMlEsQ0FBQyxDQUFDM1EsQ0FBN0IsQ0FEUDtBQUFBLFFBRUUrUSxHQUFHLEdBQUdELEVBQUUsQ0FBQy9RLENBQUgsR0FBTytRLEVBQUUsQ0FBQy9RLENBQVYsR0FBYytRLEVBQUUsQ0FBQzlRLENBQUgsR0FBTzhRLEVBQUUsQ0FBQzlRLENBRmhDO0FBQUEsUUFHRWdSLEtBQUssR0FBR0gsRUFBRSxDQUFDOVEsQ0FBSCxHQUFPK1EsRUFBRSxDQUFDL1EsQ0FBVixHQUFjOFEsRUFBRSxDQUFDN1EsQ0FBSCxHQUFPOFEsRUFBRSxDQUFDOVEsQ0FIbEM7QUFBQSxRQUlFaVIsQ0FBQyxHQUFHRCxLQUFLLEdBQUdELEdBSmQ7QUFLQSxXQUFPLElBQUl2UCxLQUFKLENBQVVtUCxDQUFDLENBQUM1USxDQUFGLEdBQU0rUSxFQUFFLENBQUMvUSxDQUFILEdBQU9rUixDQUF2QixFQUEwQk4sQ0FBQyxDQUFDM1EsQ0FBRixHQUFNOFEsRUFBRSxDQUFDOVEsQ0FBSCxHQUFPaVIsQ0FBdkMsQ0FBUDtBQUNELEdBbkdjO0FBb0dmQyxnQkFwR2UsMEJBb0dBVixHQXBHQSxFQW9HS0MsR0FwR0wsRUFvR1VVLE9BcEdWLEVBb0dtQjtBQUNoQyxRQUFNbEMsRUFBRSxHQUFHd0IsR0FBRyxDQUFDMVEsQ0FBSixHQUFReVEsR0FBRyxDQUFDelEsQ0FBdkI7QUFBQSxRQUEwQm1QLEVBQUUsR0FBR3VCLEdBQUcsQ0FBQ3pRLENBQUosR0FBUXdRLEdBQUcsQ0FBQ3hRLENBQTNDO0FBQ0EsV0FBTyxJQUFJd0IsS0FBSixDQUFVZ1AsR0FBRyxDQUFDelEsQ0FBSixHQUFRb1IsT0FBTyxHQUFHbEMsRUFBNUIsRUFBZ0N1QixHQUFHLENBQUN4USxDQUFKLEdBQVFtUixPQUFPLEdBQUdqQyxFQUFsRCxDQUFQO0FBQ0QsR0F2R2M7QUF3R2Z4Tix3QkF4R2Usa0NBd0dROE8sR0F4R1IsRUF3R2FDLEdBeEdiLEVBd0drQlcsTUF4R2xCLEVBd0cwQjtBQUN2QyxRQUFNbkMsRUFBRSxHQUFHd0IsR0FBRyxDQUFDMVEsQ0FBSixHQUFReVEsR0FBRyxDQUFDelEsQ0FBdkI7QUFBQSxRQUEwQm1QLEVBQUUsR0FBR3VCLEdBQUcsQ0FBQ3pRLENBQUosR0FBUXdRLEdBQUcsQ0FBQ3hRLENBQTNDO0FBQUEsUUFBOENtUixPQUFPLEdBQUdDLE1BQU0sR0FBR2hVLFFBQVEsQ0FBQ2dTLFFBQVQsQ0FBa0JvQixHQUFsQixFQUF1QkMsR0FBdkIsQ0FBakU7QUFDQSxXQUFPLElBQUlqUCxLQUFKLENBQVVnUCxHQUFHLENBQUN6USxDQUFKLEdBQVFvUixPQUFPLEdBQUdsQyxFQUE1QixFQUFnQ3VCLEdBQUcsQ0FBQ3hRLENBQUosR0FBUW1SLE9BQU8sR0FBR2pDLEVBQWxELENBQVA7QUFDRCxHQTNHYztBQTRHZjdSLDRCQTVHZSxzQ0E0R1lzUixFQTVHWixFQTRHZ0IzUCxNQTVHaEIsRUE0R3dCaUssZ0JBNUd4QixFQTRHMENvSSxtQkE1RzFDLEVBNEcrRDtBQUM1RSxRQUFNM1IsSUFBSSxHQUFHLEtBQUtuQyxnQkFBTCxDQUFzQm9SLEVBQXRCLEVBQTBCMUYsZ0JBQTFCLENBQWI7QUFDQSxXQUFPLElBQUkyRCxTQUFKLENBQWMsS0FBS3pILFNBQUwsQ0FBZXdKLEVBQWYsRUFBbUIzUCxNQUFNLElBQUkyUCxFQUFFLENBQUMyQyxVQUFoQyxFQUE0Q0QsbUJBQTVDLENBQWQsRUFBZ0YzUixJQUFoRixDQUFQO0FBQ0QsR0EvR2M7QUFnSGY2Uix3QkFoSGUsa0NBZ0hRdFUsT0FoSFIsRUFnSGlCdVUsS0FoSGpCLEVBZ0h3QjtBQUNyQyxXQUFPQSxLQUFLLENBQUNDLE1BQU4sQ0FBYSxVQUFDQyxHQUFELEVBQU1DLElBQU4sRUFBZTtBQUNqQyxhQUFPRCxHQUFHLEdBQUdFLFFBQVEsQ0FBQ3ZQLE1BQU0sQ0FBQ3dQLGdCQUFQLENBQXdCNVUsT0FBeEIsRUFBaUMwVSxJQUFqQyxLQUF3QyxDQUF6QyxDQUFyQjtBQUNELEtBRk0sRUFFSixDQUZJLENBQVA7QUFHRCxHQXBIYztBQXFIZnBVLGtCQXJIZSw0QkFxSEVvUixFQXJIRixFQXFITTFGLGdCQXJITixFQXFId0I7QUFDckMsUUFBSTZGLEtBQUssR0FBRzhDLFFBQVEsQ0FBQ3ZQLE1BQU0sQ0FBQ3dQLGdCQUFQLENBQXdCbEQsRUFBeEIsRUFBNEIsT0FBNUIsQ0FBRCxDQUFwQjtBQUFBLFFBQTRENUgsTUFBTSxHQUFHNkssUUFBUSxDQUFDdlAsTUFBTSxDQUFDd1AsZ0JBQVAsQ0FBd0JsRCxFQUF4QixFQUE0QixRQUE1QixDQUFELENBQTdFOztBQUNBLFFBQUksQ0FBQzFGLGdCQUFMLEVBQXVCO0FBQ3JCNkYsV0FBSyxJQUFJLEtBQUt5QyxzQkFBTCxDQUE0QjVDLEVBQTVCLEVBQWdDLENBQUMsY0FBRCxFQUFpQixlQUFqQixFQUFrQyxtQkFBbEMsRUFBdUQsb0JBQXZELENBQWhDLENBQVQ7QUFDQTVILFlBQU0sSUFBSSxLQUFLd0ssc0JBQUwsQ0FBNEI1QyxFQUE1QixFQUFnQyxDQUFDLGFBQUQsRUFBZ0IsZ0JBQWhCLEVBQWtDLGtCQUFsQyxFQUFzRCxxQkFBdEQsQ0FBaEMsQ0FBVjtBQUNEOztBQUNELFdBQU8sSUFBSW5OLEtBQUosQ0FBVXNOLEtBQVYsRUFBaUIvSCxNQUFqQixDQUFQO0FBQ0QsR0E1SGM7QUE2SGY1QixXQTdIZSxxQkE2SEx3SixFQTdISyxFQTZIRDNQLE1BN0hDLEVBNkhPO0FBQ3BCLFFBQU04UyxNQUFNLEdBQUduRCxFQUFFLENBQUNvRCxxQkFBSCxFQUFmO0FBQUEsUUFBMkNDLFVBQVUsR0FBR2hULE1BQU0sQ0FBQytTLHFCQUFQLEVBQXhEO0FBQ0EsV0FBTyxJQUFJdlEsS0FBSixDQUFVc1EsTUFBTSxDQUFDbEQsSUFBUCxHQUFjb0QsVUFBVSxDQUFDcEQsSUFBbkMsRUFBeUNrRCxNQUFNLENBQUNqRCxHQUFQLEdBQWFtRCxVQUFVLENBQUNuRCxHQUFqRSxDQUFQO0FBQ0QsR0FoSWM7QUFpSWZsUSwwQkFqSWUsb0NBaUlVRixLQWpJVixFQWlJaUJxRSxNQWpJakIsRUFpSXlCbkYsTUFqSXpCLEVBaUlpQztBQUM5Q0EsVUFBTSxHQUFHQSxNQUFNLElBQUksSUFBSTZELEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixDQUFuQjtBQUNBLFdBQU83RCxNQUFNLENBQUNxSixHQUFQLENBQVcsSUFBSXhGLEtBQUosQ0FBVXNCLE1BQU0sR0FBRzlFLElBQUksQ0FBQ29ELEdBQUwsQ0FBUzNDLEtBQVQsQ0FBbkIsRUFBb0NxRSxNQUFNLEdBQUc5RSxJQUFJLENBQUNzRCxHQUFMLENBQVM3QyxLQUFULENBQTdDLENBQVgsQ0FBUDtBQUNELEdBcEljO0FBcUlmd1QsdUJBckllLGlDQXFJT0MsV0FySVAsRUFxSW9CelMsS0FySXBCLEVBcUkyQjBTLE9BckkzQixFQXFJb0M7QUFDakQsUUFBTUMsTUFBTSxHQUFHRixXQUFXLENBQUNHLE1BQVosQ0FBbUIsVUFBU0MsTUFBVCxFQUFpQjtBQUNqRCxhQUFRQSxNQUFNLENBQUN0UyxDQUFQLEdBQVdQLEtBQUssQ0FBQ08sQ0FBakIsS0FBdUJtUyxPQUFPLEdBQUdHLE1BQU0sQ0FBQ3ZTLENBQVAsR0FBV04sS0FBSyxDQUFDTSxDQUFwQixHQUF3QnVTLE1BQU0sQ0FBQ3ZTLENBQVAsR0FBV04sS0FBSyxDQUFDTSxDQUF2RSxDQUFSO0FBQ0QsS0FGYyxDQUFmOztBQUlBLFNBQUssSUFBSXFFLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdnTyxNQUFNLENBQUN0UCxNQUEzQixFQUFtQ3NCLENBQUMsRUFBcEMsRUFBd0M7QUFDdEMsVUFBSTNFLEtBQUssQ0FBQ08sQ0FBTixHQUFVb1MsTUFBTSxDQUFDaE8sQ0FBRCxDQUFOLENBQVVwRSxDQUF4QixFQUEyQjtBQUN6Qm9TLGNBQU0sQ0FBQzdFLE1BQVAsQ0FBY25KLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IzRSxLQUFwQjtBQUNBLGVBQU8yUyxNQUFQO0FBQ0Q7QUFDRjs7QUFDREEsVUFBTSxDQUFDbFAsSUFBUCxDQUFZekQsS0FBWjtBQUNBLFdBQU8yUyxNQUFQO0FBQ0QsR0FsSmM7QUFtSmZqVCxVQW5KZSxvQkFtSk40UCxFQW5KTSxFQW1KRkMsRUFuSkUsRUFtSkU7QUFDZixRQUFNdUQsSUFBSSxHQUFHdkQsRUFBRSxDQUFDelEsR0FBSCxDQUFPd1EsRUFBUCxDQUFiO0FBQ0EsV0FBTyxLQUFLMVAsY0FBTCxDQUFvQnJCLElBQUksQ0FBQ2dELEtBQUwsQ0FBV3VSLElBQUksQ0FBQ3ZTLENBQWhCLEVBQW1CdVMsSUFBSSxDQUFDeFMsQ0FBeEIsQ0FBcEIsQ0FBUDtBQUNELEdBdEpjO0FBdUpmMkQsVUF2SmUsb0JBdUpOakYsS0F2Sk0sRUF1SkM7QUFDZCxXQUFTQSxLQUFLLEdBQUcsR0FBVCxHQUFnQlQsSUFBSSxDQUFDQyxFQUFyQixHQUEwQixHQUFsQztBQUNELEdBekpjO0FBMEpmdVUsVUExSmUsb0JBMEpOL1QsS0ExSk0sRUEwSkM7QUFDZCxXQUFRQSxLQUFLLEdBQUcsR0FBUixHQUFjVCxJQUFJLENBQUNDLEVBQXBCLEdBQTBCLEdBQWpDO0FBQ0QsR0E1SmM7QUE2SmZrRSxZQTdKZSxzQkE2SkorTCxHQTdKSSxFQTZKQ0MsR0E3SkQsRUE2Sk15QixHQTdKTixFQTZKVztBQUN4QixRQUFJNkMsSUFBSixFQUFVQyxJQUFWOztBQUNBLFFBQUl4RSxHQUFHLEdBQUdDLEdBQU4sSUFBYXlCLEdBQUcsR0FBRzFCLEdBQW5CLElBQTBCMEIsR0FBRyxHQUFHekIsR0FBcEMsRUFBeUM7QUFDdkMsYUFBT3lCLEdBQVA7QUFDRCxLQUZELE1BRU8sSUFBSXpCLEdBQUcsR0FBR0QsR0FBTixLQUFjMEIsR0FBRyxHQUFHekIsR0FBTixJQUFheUIsR0FBRyxHQUFHMUIsR0FBakMsQ0FBSixFQUEyQztBQUNoRCxhQUFPMEIsR0FBUDtBQUNELEtBRk0sTUFFQTtBQUNMNkMsVUFBSSxHQUFHLEtBQUtFLFlBQUwsQ0FBa0J6RSxHQUFsQixFQUF1QjBCLEdBQXZCLENBQVA7QUFDQThDLFVBQUksR0FBRyxLQUFLQyxZQUFMLENBQWtCeEUsR0FBbEIsRUFBdUJ5QixHQUF2QixDQUFQOztBQUNBLFVBQUk2QyxJQUFJLEdBQUdDLElBQVgsRUFBaUI7QUFDZixlQUFPeEUsR0FBUDtBQUNELE9BRkQsTUFFTztBQUNMLGVBQU9DLEdBQVA7QUFDRDtBQUNGO0FBQ0YsR0E1S2M7QUE2S2Z5RSxpQkE3S2UsMkJBNktDakQsR0E3S0QsRUE2S01sUixLQTdLTixFQTZLYTtBQUMxQixRQUFJMkYsQ0FBSjtBQUFBLFFBQU95TCxJQUFQO0FBQUEsUUFBYTBDLElBQUksR0FBR3ZVLElBQUksQ0FBQ0MsRUFBTCxHQUFVLENBQTlCO0FBQUEsUUFBaUM0VSxLQUFqQzs7QUFDQSxTQUFLek8sQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHdUwsR0FBRyxDQUFDN00sTUFBcEIsRUFBMkJzQixDQUFDLEVBQTVCLEVBQWdDO0FBQzlCeUwsVUFBSSxHQUFHelMsUUFBUSxDQUFDdVYsWUFBVCxDQUFzQmhELEdBQUcsQ0FBQ3ZMLENBQUQsQ0FBekIsRUFBOEIzRixLQUE5QixDQUFQOztBQUNBLFVBQUk4VCxJQUFJLEdBQUcxQyxJQUFYLEVBQWlCO0FBQ2YwQyxZQUFJLEdBQUcxQyxJQUFQO0FBQ0FnRCxhQUFLLEdBQUdsRCxHQUFHLENBQUN2TCxDQUFELENBQVg7QUFDRDtBQUNGOztBQUNELFdBQU95TyxLQUFQO0FBQ0QsR0F2TGM7QUF3TGZGLGNBeExlLHdCQXdMRjVSLEtBeExFLEVBd0xLRSxJQXhMTCxFQXdMVztBQUN4QixRQUFNNlIsUUFBUSxHQUFHOVUsSUFBSSxDQUFDa1EsR0FBTCxDQUFTbk4sS0FBVCxFQUFnQkUsSUFBaEIsQ0FBakI7QUFBQSxRQUNFOFIsUUFBUSxHQUFJL1UsSUFBSSxDQUFDbVEsR0FBTCxDQUFTcE4sS0FBVCxFQUFnQkUsSUFBaEIsQ0FEZDtBQUVBLFdBQU9qRCxJQUFJLENBQUNrUSxHQUFMLENBQVM2RSxRQUFRLEdBQUdELFFBQXBCLEVBQThCQSxRQUFRLEdBQUc5VSxJQUFJLENBQUNDLEVBQUwsR0FBUSxDQUFuQixHQUF1QjhVLFFBQXJELENBQVA7QUFDRCxHQTVMYztBQTZMZjFULGdCQTdMZSwwQkE2TEF1USxHQTdMQSxFQTZMSztBQUNsQixXQUFPQSxHQUFHLEdBQUcsQ0FBYixFQUFnQjtBQUNkQSxTQUFHLElBQUksSUFBSTVSLElBQUksQ0FBQ0MsRUFBaEI7QUFDRDs7QUFDRCxXQUFPMlIsR0FBRyxHQUFHLElBQUk1UixJQUFJLENBQUNDLEVBQXRCLEVBQTBCO0FBQ3hCMlIsU0FBRyxJQUFJLElBQUk1UixJQUFJLENBQUNDLEVBQWhCO0FBQ0Q7O0FBQ0QsV0FBTzJSLEdBQVA7QUFDRDtBQXJNYyxDQUFqQjs7Ozs7Ozs7Ozs7OztBQzlIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU0vSCxNQUFNLEdBQUc7QUFBRUMsT0FBSyxFQUFMQSw4Q0FBS0E7QUFBUCxDQUFmLEMsQ0FBeUI7O0lBRW5Ca0wsSTs7O0FBQ0osZ0JBQVk3TyxVQUFaLEVBQW9DO0FBQUEsUUFBWmpILE9BQVksdUVBQUosRUFBSTs7QUFBQTs7QUFDbEMsU0FBS0EsT0FBTCxHQUFlTyxNQUFNLENBQUNDLE1BQVAsQ0FBYztBQUMzQnVWLGFBQU8sRUFBRSxHQURrQjtBQUUzQkMsaUJBQVcsRUFBRSxHQUZjO0FBRzNCclYsWUFBTSxFQUFFLEVBSG1CO0FBSTNCNEosaUJBQVcsRUFBRXJLLGtEQUFRLENBQUNxSyxXQUpLO0FBSzNCMEwsb0JBQWMsRUFBRSxLQUxXO0FBTTNCQyxnQkFBVSxFQUFFO0FBTmUsS0FBZCxFQU9abFcsT0FQWSxDQUFmO0FBU0EsU0FBS2lILFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsU0FBSy9GLFFBQUwsR0FBZ0IsSUFBSXlKLE1BQU0sQ0FBQ0MsS0FBWCxDQUFpQixJQUFqQixDQUFoQjs7QUFDQSxRQUFJNUssT0FBTyxDQUFDa0IsUUFBWixFQUFzQjtBQUNwQixXQUFLQSxRQUFMLENBQWM0SSxHQUFkLENBQWtCOUosT0FBTyxDQUFDa0IsUUFBMUI7QUFDRDs7QUFDRCxTQUFLSSxJQUFMO0FBQ0Q7Ozs7MkJBRU07QUFDTCxXQUFLa0wsT0FBTCxHQUFlLElBQWY7QUFDQSxXQUFLdkYsVUFBTCxDQUFnQndCLE9BQWhCLENBQXdCLEtBQUswTixhQUE3QixFQUE0QyxJQUE1QztBQUNEOzs7a0NBRWF2VSxTLEVBQVc7QUFBQTs7QUFDdkIsVUFBSXdVLFlBQUo7O0FBQ0EsVUFBTUMsSUFBSSxHQUFHLElBQWI7QUFFQXpVLGVBQVMsQ0FBQzhJLE1BQVYsR0FBbUIsS0FBSzhCLE9BQXhCOztBQUNBLFVBQUksS0FBS3hNLE9BQUwsQ0FBYWlXLGNBQWpCLEVBQWlDO0FBQy9CRyxvQkFBVyxHQUFHLHVCQUFXO0FBQ3ZCLGNBQUl4VSxTQUFTLENBQUN3TixVQUFkLEVBQTBCO0FBQ3hCaUgsZ0JBQUksQ0FBQ2hLLE9BQUwsQ0FBYXpLLFNBQWI7QUFDQUEscUJBQVMsQ0FBQ0csTUFBVixDQUFpQnFPLE1BQWpCLENBQXdCZ0csWUFBeEI7QUFDQSxtQkFBTyxJQUFQO0FBQ0Q7QUFDRixTQU5EOztBQVFBeFUsaUJBQVMsQ0FBQ3NLLEtBQVYsQ0FBZ0JwQyxHQUFoQixDQUFvQixZQUFNO0FBQ3hCLGVBQUksQ0FBQ3dNLGtCQUFMLENBQXdCMVUsU0FBeEI7O0FBQ0FBLG1CQUFTLENBQUNHLE1BQVYsQ0FBaUIrSCxHQUFqQixDQUFxQnNNLFlBQXJCO0FBQ0EsaUJBQU8sSUFBUDtBQUNELFNBSkQ7QUFNQXhVLGlCQUFTLENBQUNHLE1BQVYsQ0FBaUIrSCxHQUFqQixDQUFxQnNNLFlBQXJCO0FBQ0QsT0FoQkQsTUFnQk87QUFDTHhVLGlCQUFTLENBQUNzSyxLQUFWLENBQWdCcEMsR0FBaEIsQ0FBb0IsWUFBTTtBQUN4QixlQUFJLENBQUNvQyxLQUFMLENBQVd0SyxTQUFYOztBQUNBLGlCQUFPLElBQVA7QUFDRCxTQUhEO0FBSUQ7QUFDRjs7OytCQUVVQSxTLEVBQVdKLFEsRUFBVUwsSSxFQUFNO0FBQ3BDLFVBQUlTLFNBQVMsQ0FBQ3dOLFVBQWQsRUFBMEI7QUFDeEJ4TixpQkFBUyxDQUFDNkssV0FBVixHQUF3QmpMLFFBQXhCO0FBQ0QsT0FGRCxNQUVPO0FBQ0xJLGlCQUFTLENBQUNRLElBQVYsQ0FBZVosUUFBZixFQUF5QkwsSUFBekIsRUFBK0IsSUFBL0I7QUFDRDtBQUNGOzs7MEJBRUtTLFMsRUFBVztBQUNmLFVBQU0yVSxZQUFZLEdBQUcsS0FBS0MscUJBQUwsRUFBckI7QUFDQSxVQUFNQyxZQUFZLEdBQUcsS0FBS3hQLFVBQUwsQ0FBZ0I0QixPQUFoQixDQUF3QmpILFNBQXhCLENBQXJCO0FBQ0EsVUFBTThVLFlBQVksR0FBR3hXLGtEQUFRLENBQUNzUyxtQkFBVCxDQUE2QitELFlBQTdCLEVBQTJDM1UsU0FBUyxDQUFDSixRQUFyRCxFQUErRCxLQUFLeEIsT0FBTCxDQUFhVyxNQUE1RSxFQUFvRixLQUFLWCxPQUFMLENBQWF1SyxXQUFqRyxDQUFyQjs7QUFFQSxVQUFJbU0sWUFBWSxLQUFLLENBQUMsQ0FBbEIsSUFBdUJBLFlBQVksS0FBS0QsWUFBNUMsRUFBMEQ7QUFDeEQ3VSxpQkFBUyxDQUFDUSxJQUFWLENBQWVSLFNBQVMsQ0FBQzZLLFdBQXpCLEVBQXNDLEtBQUt6TSxPQUFMLENBQWErVixPQUFuRCxFQUE0RCxJQUE1RDtBQUNELE9BRkQsTUFFTztBQUNMLGFBQUtZLFVBQUwsQ0FBZ0IsS0FBSzFQLFVBQUwsQ0FBZ0J5UCxZQUFoQixDQUFoQixFQUErQ0gsWUFBWSxDQUFDRSxZQUFELENBQTNELEVBQTJFLEtBQUt6VyxPQUFMLENBQWFnVyxXQUF4RjtBQUNBLGFBQUsvTyxVQUFMLENBQWdCd1AsWUFBaEIsRUFBOEJyVSxJQUE5QixDQUFtQ21VLFlBQVksQ0FBQ0csWUFBRCxDQUEvQyxFQUErRCxLQUFLMVcsT0FBTCxDQUFhK1YsT0FBNUUsRUFBcUYsSUFBckY7QUFDQSxhQUFLN1UsUUFBTCxDQUFjcUwsSUFBZDtBQUNEOztBQUNELGFBQU8sSUFBUDtBQUNEOzs7bUNBRWMzSyxTLEVBQVc7QUFDeEIsVUFBTTZLLFdBQVcsR0FBRzdLLFNBQVMsQ0FBQzZLLFdBQTlCO0FBQ0EsVUFBTWdLLFlBQVksR0FBRyxLQUFLeFAsVUFBTCxDQUFnQjRCLE9BQWhCLENBQXdCakgsU0FBeEIsQ0FBckI7QUFDQSxVQUFNZ1YsYUFBYSxHQUFHLEtBQUszUCxVQUFMLENBQWdCd1AsWUFBWSxHQUFHLENBQS9CLENBQXRCO0FBQ0EsVUFBTUksYUFBYSxHQUFHLEtBQUs1UCxVQUFMLENBQWdCd1AsWUFBWSxHQUFHLENBQS9CLENBQXRCOztBQUVBLFVBQUk3VSxTQUFTLENBQUMwTSxhQUFWLElBQTJCc0ksYUFBL0IsRUFBOEM7QUFDNUMsWUFBTTFFLFFBQVEsR0FBRyxLQUFLbFMsT0FBTCxDQUFhdUssV0FBYixDQUF5QjNJLFNBQVMsQ0FBQ0osUUFBbkMsRUFBNkNvVixhQUFhLENBQUNwVixRQUEzRCxDQUFqQjs7QUFDQSxZQUFJMFEsUUFBUSxHQUFHLEtBQUtsUyxPQUFMLENBQWFXLE1BQTVCLEVBQW9DO0FBQ2xDaUIsbUJBQVMsQ0FBQzZLLFdBQVYsR0FBd0JtSyxhQUFhLENBQUNuSyxXQUF0QztBQUNBLGVBQUtrSyxVQUFMLENBQWdCQyxhQUFoQixFQUErQm5LLFdBQS9CLEVBQTRDLEtBQUt6TSxPQUFMLENBQWFnVyxXQUF6RDtBQUZrQyxxQkFHbUMsQ0FBQyxLQUFLL08sVUFBTCxDQUFnQndQLFlBQVksR0FBRyxDQUEvQixDQUFELEVBQW9DLEtBQUt4UCxVQUFMLENBQWdCd1AsWUFBaEIsQ0FBcEMsQ0FIbkM7QUFHakMsZUFBS3hQLFVBQUwsQ0FBZ0J3UCxZQUFoQixDQUhpQztBQUdGLGVBQUt4UCxVQUFMLENBQWdCd1AsWUFBWSxHQUFHLENBQS9CLENBSEU7QUFJbEMsZUFBS0ssY0FBTCxDQUFvQmxWLFNBQXBCO0FBQ0Q7QUFDRjs7QUFFRCxVQUFJQSxTQUFTLENBQUN5TSxXQUFWLElBQXlCd0ksYUFBN0IsRUFBNEM7QUFDMUMsWUFBTTNFLFNBQVEsR0FBRyxLQUFLbFMsT0FBTCxDQUFhdUssV0FBYixDQUF5QjNJLFNBQVMsQ0FBQ0osUUFBbkMsRUFBNkNxVixhQUFhLENBQUNyVixRQUEzRCxDQUFqQjs7QUFDQSxZQUFJMFEsU0FBUSxHQUFHLEtBQUtsUyxPQUFMLENBQWFXLE1BQTVCLEVBQW9DO0FBQ2xDaUIsbUJBQVMsQ0FBQzZLLFdBQVYsR0FBd0JvSyxhQUFhLENBQUNwSyxXQUF0QztBQUNBLGVBQUtrSyxVQUFMLENBQWdCRSxhQUFoQixFQUErQnBLLFdBQS9CLEVBQTRDLEtBQUt6TSxPQUFMLENBQWFnVyxXQUF6RDtBQUZrQyxzQkFHbUMsQ0FBQyxLQUFLL08sVUFBTCxDQUFnQndQLFlBQVksR0FBRyxDQUEvQixDQUFELEVBQW9DLEtBQUt4UCxVQUFMLENBQWdCd1AsWUFBaEIsQ0FBcEMsQ0FIbkM7QUFHakMsZUFBS3hQLFVBQUwsQ0FBZ0J3UCxZQUFoQixDQUhpQztBQUdGLGVBQUt4UCxVQUFMLENBQWdCd1AsWUFBWSxHQUFHLENBQS9CLENBSEU7QUFJbEMsZUFBS0ssY0FBTCxDQUFvQmxWLFNBQXBCO0FBQ0Q7QUFDRjtBQUNGOzs7dUNBRWtCQSxTLEVBQVc7QUFDNUIsVUFBTW1WLGdCQUFnQixHQUFHLEtBQUtDLG1CQUFMLEVBQXpCO0FBQ0EsVUFBTVQsWUFBWSxHQUFHUSxnQkFBZ0IsQ0FBQ3pRLEdBQWpCLENBQXFCLFVBQUMxRSxTQUFEO0FBQUEsZUFBZUEsU0FBUyxDQUFDNkssV0FBekI7QUFBQSxPQUFyQixDQUFyQjtBQUVBLFVBQU1nSyxZQUFZLEdBQUdNLGdCQUFnQixDQUFDbE8sT0FBakIsQ0FBeUJqSCxTQUF6QixDQUFyQjtBQUNBLFVBQU1xVixXQUFXLEdBQUcvVyxrREFBUSxDQUFDc1MsbUJBQVQsQ0FBNkIrRCxZQUE3QixFQUEyQzNVLFNBQVMsQ0FBQ0osUUFBckQsRUFBK0QsS0FBS3hCLE9BQUwsQ0FBYVcsTUFBNUUsRUFBb0YsS0FBS1gsT0FBTCxDQUFhdUssV0FBakcsQ0FBcEI7O0FBRUEsVUFBSTBNLFdBQVcsS0FBSyxDQUFDLENBQXJCLEVBQXdCO0FBQ3RCLFlBQUlBLFdBQVcsR0FBR1IsWUFBbEIsRUFBZ0M7QUFDOUIsZUFBSyxJQUFJdlAsQ0FBQyxHQUFDK1AsV0FBWCxFQUF3Qi9QLENBQUMsR0FBQ3VQLFlBQTFCLEVBQXdDdlAsQ0FBQyxFQUF6QyxFQUE2QztBQUMzQyxpQkFBS3lQLFVBQUwsQ0FBZ0JJLGdCQUFnQixDQUFDN1AsQ0FBRCxDQUFoQyxFQUFxQ3FQLFlBQVksQ0FBQ3JQLENBQUMsR0FBQyxDQUFILENBQWpELEVBQXdELEtBQUtsSCxPQUFMLENBQWFnVyxXQUFyRTtBQUNEO0FBQ0YsU0FKRCxNQUlPO0FBQ0wsZUFBSyxJQUFJOU8sRUFBQyxHQUFDdVAsWUFBWCxFQUF5QnZQLEVBQUMsR0FBQytQLFdBQTNCLEVBQXdDL1AsRUFBQyxFQUF6QyxFQUE2QztBQUMzQyxpQkFBS3lQLFVBQUwsQ0FBZ0JJLGdCQUFnQixDQUFDN1AsRUFBQyxHQUFDLENBQUgsQ0FBaEMsRUFBdUNxUCxZQUFZLENBQUNyUCxFQUFELENBQW5ELEVBQXdELEtBQUtsSCxPQUFMLENBQWFnVyxXQUFyRTtBQUNEO0FBQ0Y7O0FBQ0RwVSxpQkFBUyxDQUFDUSxJQUFWLENBQWVtVSxZQUFZLENBQUNVLFdBQUQsQ0FBM0IsRUFBMEMsS0FBS2pYLE9BQUwsQ0FBYStWLE9BQXZELEVBQWdFLElBQWhFO0FBQ0QsT0FYRCxNQVdPO0FBQ0xuVSxpQkFBUyxDQUFDUSxJQUFWLENBQWVSLFNBQVMsQ0FBQzZLLFdBQXpCLEVBQXNDLEtBQUt6TSxPQUFMLENBQWErVixPQUFuRCxFQUE0RCxJQUE1RDtBQUNEO0FBQ0Y7Ozs0QkFFT25VLFMsRUFBVztBQUNqQixVQUFJc0YsQ0FBSjtBQUNBLFVBQU02UCxnQkFBZ0IsR0FBRyxLQUFLQyxtQkFBTCxFQUF6QjtBQUNBLFVBQU1ULFlBQVksR0FBR1EsZ0JBQWdCLENBQUN6USxHQUFqQixDQUFxQixVQUFDMUUsU0FBRDtBQUFBLGVBQWVBLFNBQVMsQ0FBQzZLLFdBQXpCO0FBQUEsT0FBckIsQ0FBckI7QUFFQSxVQUFNZ0ssWUFBWSxHQUFHTSxnQkFBZ0IsQ0FBQ2xPLE9BQWpCLENBQXlCakgsU0FBekIsQ0FBckI7O0FBQ0EsV0FBS3NGLENBQUMsR0FBR3VQLFlBQVksR0FBRyxDQUF4QixFQUEyQnZQLENBQUMsR0FBRzZQLGdCQUFnQixDQUFDblIsTUFBaEQsRUFBd0RzQixDQUFDLEVBQXpELEVBQTZEO0FBQzNELGFBQUt5UCxVQUFMLENBQWdCSSxnQkFBZ0IsQ0FBQzdQLENBQUQsQ0FBaEMsRUFBcUNxUCxZQUFZLENBQUNyUCxDQUFDLEdBQUcsQ0FBTCxDQUFqRCxFQUEwRCxLQUFLbEgsT0FBTCxDQUFhZ1csV0FBdkU7QUFDRDs7QUFDRGUsc0JBQWdCLENBQUNOLFlBQUQsQ0FBaEIsQ0FBK0JoSyxXQUEvQixHQUE2QzhKLFlBQVksQ0FBQ3JQLENBQUMsR0FBRyxDQUFMLENBQXpEO0FBQ0Q7Ozs0Q0FFdUI7QUFDdEIsYUFBTyxLQUFLRCxVQUFMLENBQWdCWCxHQUFoQixDQUFvQixVQUFDMUUsU0FBRDtBQUFBLGVBQWVBLFNBQVMsQ0FBQzZLLFdBQVYsQ0FBc0IvSixLQUF0QixFQUFmO0FBQUEsT0FBcEIsQ0FBUDtBQUNEOzs7MENBRXFCO0FBQUE7O0FBQ3BCLFVBQU13VSxhQUFhLEdBQUcsS0FBS2pRLFVBQUwsQ0FBZ0JYLEdBQWhCLENBQW9CLFVBQUMxRSxTQUFEO0FBQUEsZUFBZUEsU0FBUyxDQUFDOEssWUFBekI7QUFBQSxPQUFwQixDQUF0QjtBQUVBLFVBQU1xSyxnQkFBZ0IsR0FBR0csYUFBYSxDQUFDNVEsR0FBZCxDQUFrQixVQUFDOUUsUUFBRCxFQUFjO0FBQ3ZELGVBQU8sTUFBSSxDQUFDeUYsVUFBTCxDQUFnQmtPLE1BQWhCLENBQXVCLFVBQUN2VCxTQUFEO0FBQUEsaUJBQWVBLFNBQVMsQ0FBQzZLLFdBQVYsQ0FBc0IwSyxPQUF0QixDQUE4QjNWLFFBQTlCLENBQWY7QUFBQSxTQUF2QixFQUErRSxDQUEvRSxDQUFQO0FBQ0QsT0FGd0IsQ0FBekI7QUFJQSxhQUFPdVYsZ0JBQVA7QUFDRDs7OzRCQUVPO0FBQ04sV0FBSzlQLFVBQUwsQ0FBZ0J3QixPQUFoQixDQUF3QixVQUFDN0csU0FBRCxFQUFlO0FBQ3JDQSxpQkFBUyxDQUFDUSxJQUFWLENBQWVSLFNBQVMsQ0FBQzhLLFlBQXpCLEVBQXVDLENBQXZDLEVBQTBDLElBQTFDLEVBQWdELEtBQWhEO0FBQ0QsT0FGRDtBQUdEOzs7OEJBRVM7QUFDUixXQUFLekYsVUFBTCxDQUFnQndCLE9BQWhCLENBQXdCLFVBQUM3RyxTQUFELEVBQWU7QUFDckNBLGlCQUFTLENBQUN1QixPQUFWO0FBQ0QsT0FGRDtBQUdEOzs7d0JBRUc4RCxVLEVBQVk7QUFDZCxVQUFJLEVBQUVBLFVBQVUsWUFBWTJDLEtBQXhCLENBQUosRUFBb0M7QUFDbEMzQyxrQkFBVSxHQUFHLENBQUNBLFVBQUQsQ0FBYjtBQUNEOztBQUNEQSxnQkFBVSxDQUFDd0IsT0FBWCxDQUFtQixLQUFLME4sYUFBeEIsRUFBdUMsSUFBdkM7QUFDQSxXQUFLbFAsVUFBTCxHQUFrQixLQUFLQSxVQUFMLENBQWdCbVEsTUFBaEIsQ0FBdUJuUSxVQUF2QixDQUFsQjtBQUNEOzs7MkJBRU1BLFUsRUFBWTtBQUFBOztBQUNqQixVQUFNaVEsYUFBYSxHQUFHLEtBQUtqUSxVQUFMLENBQWdCWCxHQUFoQixDQUFvQixVQUFDMUUsU0FBRDtBQUFBLGVBQWVBLFNBQVMsQ0FBQzhLLFlBQXpCO0FBQUEsT0FBcEIsQ0FBdEI7QUFDQSxVQUFNMkosSUFBSSxHQUFHLEVBQWI7QUFDQSxVQUFNVSxnQkFBZ0IsR0FBRyxLQUFLQyxtQkFBTCxFQUF6Qjs7QUFFQSxVQUFJLEVBQUUvUCxVQUFVLFlBQVkyQyxLQUF4QixDQUFKLEVBQW9DO0FBQ2xDM0Msa0JBQVUsR0FBRyxDQUFDQSxVQUFELENBQWI7QUFDRDs7QUFFREEsZ0JBQVUsQ0FBQ3dCLE9BQVgsQ0FBbUIsVUFBQzdHLFNBQUQsRUFBZTtBQUNoQ0EsaUJBQVMsQ0FBQ3NLLEtBQVYsQ0FBZ0J5RCxLQUFoQjtBQUNBL04saUJBQVMsQ0FBQ0csTUFBVixDQUFpQjROLEtBQWpCLEdBRmdDLENBRVA7O0FBQ3pCMEgsMEVBQVcsQ0FBQyxNQUFJLENBQUNwUSxVQUFOLEVBQWtCckYsU0FBbEIsQ0FBWDtBQUNELE9BSkQ7QUFNQSxVQUFJNkksQ0FBQyxHQUFHLENBQVI7QUFDQXNNLHNCQUFnQixDQUFDdE8sT0FBakIsQ0FBeUIsVUFBQzdHLFNBQUQsRUFBZTtBQUN0QyxZQUFJLE1BQUksQ0FBQ3FGLFVBQUwsQ0FBZ0I0QixPQUFoQixDQUF3QmpILFNBQXhCLE1BQXVDLENBQUMsQ0FBNUMsRUFBK0M7QUFDN0MsY0FBSUEsU0FBUyxDQUFDNkssV0FBVixLQUEwQnlLLGFBQWEsQ0FBQ3pNLENBQUQsQ0FBM0MsRUFBZ0Q7QUFDOUM3SSxxQkFBUyxDQUFDUSxJQUFWLENBQWU4VSxhQUFhLENBQUN6TSxDQUFELENBQTVCLEVBQWlDLE1BQUksQ0FBQ3pLLE9BQUwsQ0FBYWdXLFdBQTlDLEVBQTJELElBQTNEO0FBQ0Q7O0FBQ0RwVSxtQkFBUyxDQUFDOEssWUFBVixHQUF5QndLLGFBQWEsQ0FBQ3pNLENBQUQsQ0FBdEM7QUFDQUEsV0FBQztBQUNENEwsY0FBSSxDQUFDclEsSUFBTCxDQUFVcEUsU0FBVjtBQUNEO0FBQ0YsT0FURDtBQVVBLFdBQUtxRixVQUFMLEdBQWtCb1AsSUFBbEI7QUFDRDs7OzRCQUVPO0FBQ04sV0FBS2pHLE1BQUwsQ0FBWSxLQUFLbkosVUFBTCxDQUFnQmtELEtBQWhCLEVBQVo7QUFDRDs7OzhCQUVTO0FBQ1IsV0FBS2xELFVBQUwsQ0FBZ0J3QixPQUFoQixDQUF3QixVQUFDN0csU0FBRDtBQUFBLGVBQWVBLFNBQVMsQ0FBQzBWLE9BQVYsRUFBZjtBQUFBLE9BQXhCO0FBQ0Q7Ozt3QkFFZTtBQUNkLGFBQU8sS0FBS2QscUJBQUwsRUFBUDtBQUNELEs7c0JBRWFlLFMsRUFBVztBQUFBOztBQUN2QixVQUFNak0sT0FBTyxHQUFHLG9CQUFoQjs7QUFDQSxVQUFJaU0sU0FBUyxDQUFDM1IsTUFBVixLQUFxQixLQUFLcUIsVUFBTCxDQUFnQnJCLE1BQXpDLEVBQWlEO0FBQy9DMlIsaUJBQVMsQ0FBQzlPLE9BQVYsQ0FBa0IsVUFBQ2xHLEtBQUQsRUFBUTJFLENBQVIsRUFBYztBQUM5QixnQkFBSSxDQUFDRCxVQUFMLENBQWdCQyxDQUFoQixFQUFtQjlFLElBQW5CLENBQXdCRyxLQUF4QixFQUErQixDQUEvQixFQUFrQyxJQUFsQyxFQUF3QyxJQUF4QztBQUNELFNBRkQsRUFFRyxJQUZIO0FBR0QsT0FKRCxNQUlPO0FBQ0wsY0FBTStJLE9BQU47QUFDRDtBQUNGOzs7d0JBRVk7QUFDWCxhQUFPLEtBQUtrQixPQUFaO0FBQ0QsSztzQkFFVTlCLE0sRUFBUTtBQUNqQixXQUFLOEIsT0FBTCxHQUFlOUIsTUFBZjtBQUNBLFdBQUt6RCxVQUFMLENBQWdCd0IsT0FBaEIsQ0FBd0IsVUFBQzdHLFNBQUQsRUFBZTtBQUNyQ0EsaUJBQVMsQ0FBQzhJLE1BQVYsR0FBbUJBLE1BQW5CO0FBQ0QsT0FGRDtBQUdEOzs7Ozs7QUFHSCxTQUFTOE0sV0FBVCxDQUFxQkMsYUFBckIsRUFBb0N2UixRQUFwQyxFQUEwRDtBQUFBLE1BQVpsRyxPQUFZLHVFQUFKLEVBQUk7QUFDeEQsTUFBTTBYLGdCQUFnQixHQUFHMVgsT0FBTyxDQUFDNEIsU0FBUixJQUFxQixFQUE5QztBQUNBLE1BQU0rVixXQUFXLEdBQUczWCxPQUFPLENBQUNxVyxJQUFSLElBQWdCLEVBQXBDO0FBQ0FxQixrQkFBZ0IsQ0FBQzVWLE1BQWpCLEdBQTBCNFYsZ0JBQWdCLENBQUM1VixNQUFqQixJQUEyQjJWLGFBQXJEO0FBQ0F2UixVQUFRLEdBQUcwRCxLQUFLLENBQUNpRyxTQUFOLENBQWdCMUYsS0FBaEIsQ0FBc0JsQixJQUF0QixDQUEyQi9DLFFBQTNCLENBQVg7QUFFQSxNQUFNZSxVQUFVLEdBQUdmLFFBQVEsQ0FBQ0ksR0FBVCxDQUFhLFVBQUN2RyxPQUFELEVBQWE7QUFDM0MsV0FBTyxJQUFJOEIsb0RBQUosQ0FBYzlCLE9BQWQsRUFBdUIyWCxnQkFBdkIsQ0FBUDtBQUNELEdBRmtCLENBQW5CO0FBSUEsU0FBTyxJQUFJNUIsSUFBSixDQUFTN08sVUFBVCxFQUFxQjBRLFdBQXJCLENBQVA7QUFDRDs7Ozs7Ozs7Ozs7Ozs7QUM5UEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBOztJQUVNQyxZOzs7OztBQUNKLHdCQUFZM1EsVUFBWixFQUFvQztBQUFBLFFBQVpqSCxPQUFZLHVFQUFKLEVBQUk7O0FBQUE7O0FBQ2xDQSxXQUFPLENBQUM2WCxNQUFSLEdBQWlCN1gsT0FBTyxDQUFDNlgsTUFBUixJQUFrQixJQUFJdlQsK0NBQUosQ0FBVSxDQUFDLEVBQVgsRUFBZSxDQUFmLENBQW5DO0FBRGtDLHFGQUU1QjJDLFVBRjRCLEVBRWhCakgsT0FGZ0I7QUFHbkM7Ozs7MkJBRU07QUFBQTs7QUFDTCxXQUFLaUgsVUFBTCxDQUFnQndCLE9BQWhCLENBQXdCLFVBQUM3RyxTQUFELEVBQWU7QUFDckNBLGlCQUFTLENBQUNrVyxJQUFWLEdBQWlCLEtBQWpCO0FBQ0FsVyxpQkFBUyxDQUFDc0ssS0FBVixDQUFnQnBDLEdBQWhCLENBQW9CLFlBQU07QUFDeEIsZUFBSSxDQUFDb0MsS0FBTCxDQUFXdEssU0FBWDs7QUFDQSxpQkFBTyxJQUFQO0FBQ0QsU0FIRDtBQUlELE9BTkQ7QUFPRDs7OzBCQUVLQSxTLEVBQVc7QUFDZixVQUFNMlUsWUFBWSxHQUFHLEtBQUt3Qiw0QkFBTCxFQUFyQjtBQUNBLFVBQU10QixZQUFZLEdBQUcsS0FBS3hQLFVBQUwsQ0FBZ0I0QixPQUFoQixDQUF3QmpILFNBQXhCLENBQXJCO0FBQ0EsVUFBTThVLFlBQVksR0FBR3hXLGtEQUFRLENBQUNzUyxtQkFBVCxDQUE2QitELFlBQTdCLEVBQTJDM1UsU0FBUyxDQUFDSixRQUFyRCxFQUErRCxLQUFLeEIsT0FBTCxDQUFhVyxNQUE1RSxFQUFvRixLQUFLWCxPQUFMLENBQWF1SyxXQUFqRyxDQUFyQjs7QUFFQSxVQUFJbU0sWUFBWSxLQUFLLENBQUMsQ0FBbEIsSUFBdUJBLFlBQVksS0FBS0QsWUFBNUMsRUFBMEQ7QUFDeEQsYUFBS3VCLGFBQUwsQ0FBbUJ2QixZQUFuQixFQUFpQzdVLFNBQVMsQ0FBQ0osUUFBM0MsRUFBcUQrVSxZQUFZLENBQUNFLFlBQUQsQ0FBakUsRUFBaUYsS0FBS3pXLE9BQUwsQ0FBYStWLE9BQTlGO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsWUFBSSxLQUFLOU8sVUFBTCxDQUFnQnlQLFlBQWhCLEVBQThCdEgsVUFBbEMsRUFBOEM7QUFDNUMsZUFBSzZJLFFBQUwsQ0FBY3ZCLFlBQWQsRUFBNEJILFlBQVksQ0FBQ0UsWUFBRCxDQUF4QztBQUNELFNBRkQsTUFFTztBQUNMLGVBQUt5QixrQkFBTCxDQUF3QnhCLFlBQXhCLEVBQXNDSCxZQUFZLENBQUNFLFlBQUQsQ0FBbEQsRUFBa0UsS0FBS3pXLE9BQUwsQ0FBYWdXLFdBQS9FO0FBQ0Q7O0FBQ0QsYUFBS2dDLGFBQUwsQ0FBbUJ2QixZQUFuQixFQUFpQzdVLFNBQVMsQ0FBQ0osUUFBM0MsRUFBcUQrVSxZQUFZLENBQUNHLFlBQUQsQ0FBakUsRUFBaUYsS0FBSzFXLE9BQUwsQ0FBYStWLE9BQTlGO0FBQ0EsYUFBSzdVLFFBQUwsQ0FBY3FMLElBQWQ7QUFDRDs7QUFDRCxhQUFPLElBQVA7QUFDRDs7O2tDQUVhekcsSyxFQUFPdEUsUSxFQUFVMlcsYyxFQUFnQmhYLEksRUFBTTtBQUNuRCxVQUFNb1csU0FBUyxHQUFHLENBQUNZLGNBQUQsRUFBaUJBLGNBQWMsQ0FBQ3JPLEdBQWYsQ0FBbUIsS0FBSzlKLE9BQUwsQ0FBYTZYLE1BQWhDLENBQWpCLENBQWxCO0FBQ0EsVUFBTUMsSUFBSSxHQUFHNVgsa0RBQVEsQ0FBQ3NTLG1CQUFULENBQTZCK0UsU0FBN0IsRUFBd0MvVixRQUF4QyxFQUFrRCxDQUFDLENBQW5ELEVBQXNEdEIsa0RBQVEsQ0FBQ2lTLGNBQS9ELENBQWI7O0FBRUEsVUFBSSxLQUFLbEwsVUFBTCxDQUFnQm5CLEtBQWhCLEVBQXVCZ1MsSUFBdkIsS0FBZ0MsQ0FBQyxDQUFDQSxJQUF0QyxFQUE0QztBQUMxQyxhQUFLN1EsVUFBTCxDQUFnQm5CLEtBQWhCLEVBQXVCZ1MsSUFBdkIsR0FBOEIsQ0FBQyxDQUFDQSxJQUFoQztBQUNBLGFBQUs1VyxRQUFMLENBQWNxTCxJQUFkO0FBQ0Q7O0FBRUQsV0FBS3RGLFVBQUwsQ0FBZ0JuQixLQUFoQixFQUF1QjFELElBQXZCLENBQTRCbVYsU0FBUyxDQUFDTyxJQUFELENBQXJDLEVBQTZDM1csSUFBN0MsRUFBbUQsSUFBbkQ7QUFDRDs7OzZCQUVRMkUsSyxFQUFPcVMsYyxFQUFnQjtBQUM5QixXQUFLbFIsVUFBTCxDQUFnQm5CLEtBQWhCLEVBQXVCZ1MsSUFBdkIsR0FBOEIsS0FBOUI7QUFDQSxXQUFLN1EsVUFBTCxDQUFnQm5CLEtBQWhCLEVBQXVCMkcsV0FBdkIsR0FBcUMwTCxjQUFyQztBQUNEOzs7dUNBRWtCclMsSyxFQUFPcVMsYyxFQUFnQmhYLEksRUFBTTtBQUM5QyxXQUFLOEYsVUFBTCxDQUFnQm5CLEtBQWhCLEVBQXVCZ1MsSUFBdkIsR0FBOEIsS0FBOUI7QUFDQSxXQUFLN1EsVUFBTCxDQUFnQm5CLEtBQWhCLEVBQXVCMUQsSUFBdkIsQ0FBNEIrVixjQUE1QixFQUE0Q2hYLElBQTVDLEVBQWtELElBQWxEO0FBQ0Q7OzttREFFOEI7QUFBQTs7QUFDN0IsYUFBTyxLQUFLOEYsVUFBTCxDQUFnQlgsR0FBaEIsQ0FBb0IsVUFBQzFFLFNBQUQsRUFBZTtBQUN4QyxlQUFPQSxTQUFTLENBQUNrVyxJQUFWLEdBQWlCbFcsU0FBUyxDQUFDNkssV0FBVixDQUFzQnBMLEdBQXRCLENBQTBCLE1BQUksQ0FBQ3JCLE9BQUwsQ0FBYTZYLE1BQXZDLENBQWpCLEdBQWtFalcsU0FBUyxDQUFDNkssV0FBVixDQUFzQi9KLEtBQXRCLEVBQXpFO0FBQ0QsT0FGTSxFQUVKLElBRkksQ0FBUDtBQUdEOzs7MENBRXFCO0FBQUE7O0FBQ3BCLGFBQU8sS0FBS3VFLFVBQUwsQ0FBZ0JYLEdBQWhCLENBQW9CLFVBQUMxRSxTQUFEO0FBQUEsZUFBZUEsU0FBUyxDQUFDOEssWUFBekI7QUFBQSxPQUFwQixFQUNnQnBHLEdBRGhCLENBQ29CLFVBQUM5RSxRQUFELEVBQWM7QUFDakIsZUFBTyxNQUFJLENBQUN5RixVQUFMLENBQWdCa08sTUFBaEIsQ0FBdUIsVUFBQ3ZULFNBQUQsRUFBZTtBQUMzQyxpQkFBT0EsU0FBUyxDQUFDNkssV0FBVixDQUFzQjBLLE9BQXRCLENBQThCM1YsUUFBOUIsS0FBMkNJLFNBQVMsQ0FBQzZLLFdBQVYsQ0FBc0IwSyxPQUF0QixDQUE4QjNWLFFBQVEsQ0FBQ3NJLEdBQVQsQ0FBYSxNQUFJLENBQUM5SixPQUFMLENBQWE2WCxNQUExQixDQUE5QixDQUFsRDtBQUNELFNBRk0sRUFFSixNQUZJLEVBRUUsQ0FGRixDQUFQO0FBR0QsT0FMaEIsRUFLa0IsSUFMbEIsQ0FBUDtBQU1EOzs7NEJBRU87QUFDTixXQUFLNVEsVUFBTCxDQUFnQndCLE9BQWhCLENBQXdCLFVBQUM3RyxTQUFELEVBQWU7QUFDckNBLGlCQUFTLENBQUNRLElBQVYsQ0FBZVIsU0FBUyxDQUFDOEssWUFBekIsRUFBdUMsQ0FBdkMsRUFBMEMsSUFBMUMsRUFBZ0QsS0FBaEQ7QUFDQTlLLGlCQUFTLENBQUNrVyxJQUFWLEdBQWlCLEtBQWpCO0FBQ0QsT0FIRDtBQUlEOzs7d0JBRWU7QUFDZCxhQUFPLEtBQUs3USxVQUFMLENBQWdCWCxHQUFoQixDQUFvQixVQUFDMUUsU0FBRCxFQUFlO0FBQ3hDLFlBQU1KLFFBQVEsR0FBR0ksU0FBUyxDQUFDNkssV0FBVixDQUFzQi9KLEtBQXRCLEVBQWpCO0FBQ0FsQixnQkFBUSxDQUFDc1csSUFBVCxHQUFnQmxXLFNBQVMsQ0FBQ2tXLElBQTFCO0FBQ0EsZUFBT3RXLFFBQVA7QUFDRCxPQUpNLENBQVA7QUFLRCxLO3NCQUVhK1YsUyxFQUFXO0FBQUE7O0FBQ3ZCLFVBQU1qTSxPQUFPLEdBQUcsb0JBQWhCOztBQUNBLFVBQUlpTSxTQUFTLENBQUMzUixNQUFWLEtBQXFCLEtBQUtxQixVQUFMLENBQWdCckIsTUFBekMsRUFBaUQ7QUFDL0MyUixpQkFBUyxDQUFDOU8sT0FBVixDQUFrQixVQUFDbEcsS0FBRCxFQUFRMkUsQ0FBUixFQUFjO0FBQzlCLGdCQUFJLENBQUNELFVBQUwsQ0FBZ0JDLENBQWhCLEVBQW1CNFEsSUFBbkIsR0FBMEJ2VixLQUFLLENBQUN1VixJQUFoQzs7QUFDQSxnQkFBSSxDQUFDN1EsVUFBTCxDQUFnQkMsQ0FBaEIsRUFBbUI5RSxJQUFuQixDQUF3QkcsS0FBeEIsRUFBK0IsQ0FBL0IsRUFBa0MsSUFBbEMsRUFBd0MsSUFBeEM7QUFDRCxTQUhELEVBR0csSUFISDtBQUlELE9BTEQsTUFLTztBQUNMLGNBQU0rSSxPQUFOO0FBQ0Q7QUFDRjs7OztFQWpHd0J3SywwQzs7QUFvRzNCLFNBQVNzQyxtQkFBVCxDQUE2QnJZLE9BQTdCLEVBQXNDc1ksaUJBQXRDLEVBQXFFO0FBQUEsTUFBWnJZLE9BQVksdUVBQUosRUFBSTtBQUNuRSxNQUFNMFgsZ0JBQWdCLEdBQUcxWCxPQUFPLENBQUM0QixTQUFSLElBQXFCLEVBQTlDO0FBQ0EsTUFBTStWLFdBQVcsR0FBRzNYLE9BQU8sQ0FBQ3FXLElBQVIsSUFBZ0IsRUFBcEM7QUFFQXFCLGtCQUFnQixDQUFDNVYsTUFBakIsR0FBMEI0VixnQkFBZ0IsQ0FBQzVWLE1BQWpCLElBQTJCL0IsT0FBckQ7QUFDQXNZLG1CQUFpQixHQUFHek8sS0FBSyxDQUFDaUcsU0FBTixDQUFnQjFGLEtBQWhCLENBQXNCbEIsSUFBdEIsQ0FBMkJvUCxpQkFBM0IsQ0FBcEI7QUFFQSxNQUFNcFIsVUFBVSxHQUFHb1IsaUJBQWlCLENBQUMvUixHQUFsQixDQUFzQixVQUFDdkcsT0FBRCxFQUFhO0FBQ3BELFdBQU8sSUFBSThCLG9EQUFKLENBQWM5QixPQUFkLEVBQXVCMlgsZ0JBQXZCLENBQVA7QUFDRCxHQUZrQixDQUFuQjtBQUdBLFNBQU8sSUFBSUUsWUFBSixDQUFpQjNRLFVBQWpCLEVBQTZCMFEsV0FBN0IsQ0FBUDtBQUNEOzs7Ozs7Ozs7Ozs7OztBQ3JIRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFFQSxJQUFNVyxZQUFZLEdBQUc7QUFDbkJDLGFBQVcsRUFBRSxDQURNO0FBRW5CQyxXQUFTLEVBQUUsQ0FGUTtBQUduQkMsWUFBVSxFQUFFO0FBSE8sQ0FBckI7O0FBTUEsU0FBU0MsZUFBVCxDQUF5QkMsSUFBekIsRUFBK0I7QUFDN0IsVUFBUUEsSUFBUjtBQUNBLFNBQUtMLFlBQVksQ0FBQ0MsV0FBbEI7QUFDRSxhQUFPLFVBQVNqVyxTQUFULEVBQW9Cc1csUUFBcEIsRUFBOEI7QUFDbkMsZUFBTyxVQUFTQyxhQUFULEVBQXdCQyxhQUF4QixFQUF1QztBQUM1QyxjQUFNQyxTQUFTLEdBQUcsT0FBT3pXLFNBQVAsS0FBcUIsVUFBckIsR0FBa0NBLFNBQVMsRUFBM0MsR0FBZ0RBLFNBQWxFO0FBQUEsY0FDRTBXLHNCQUFzQixHQUFHSCxhQUFhLENBQUN0RSxNQUFkLENBQXFCLFVBQVMwRSxPQUFULEVBQWtCQyxLQUFsQixFQUF5QnBULEtBQXpCLEVBQWdDO0FBQzVFLGdCQUFJZ1QsYUFBYSxDQUFDalEsT0FBZCxDQUFzQi9DLEtBQXRCLE1BQWlDLENBQUMsQ0FBdEMsRUFBeUM7QUFDdkNtVCxxQkFBTyxDQUFDalQsSUFBUixDQUFhRixLQUFiO0FBQ0Q7O0FBQ0QsbUJBQU9tVCxPQUFQO0FBQ0QsV0FMd0IsRUFLdEIsRUFMc0IsQ0FEM0I7QUFRQUgsdUJBQWEsQ0FBQ3JRLE9BQWQsQ0FBc0IsVUFBUzNDLEtBQVQsRUFBZ0I7QUFDcEMsZ0JBQUlpTCxJQUFJLEdBQUc4SCxhQUFhLENBQUMvUyxLQUFELENBQXhCO0FBQUEsZ0JBQWlDcVQsU0FBUyxHQUFHLEtBQTdDO0FBQ0FILGtDQUFzQixDQUFDdlEsT0FBdkIsQ0FBK0IsVUFBUzJRLGFBQVQsRUFBd0I7QUFDckQsa0JBQU1DLFVBQVUsR0FBR1IsYUFBYSxDQUFDTyxhQUFELENBQWhDO0FBQ0FySSxrQkFBSSxHQUFHc0ksVUFBVSxDQUFDQyxXQUFYLENBQXVCdkksSUFBdkIsQ0FBUDtBQUNELGFBSEQ7QUFJQW9JLHFCQUFTLEdBQUdILHNCQUFzQixDQUFDek4sSUFBdkIsQ0FBNEIsVUFBUzZOLGFBQVQsRUFBd0I7QUFDOUQsa0JBQU1DLFVBQVUsR0FBR1IsYUFBYSxDQUFDTyxhQUFELENBQWhDO0FBQ0EscUJBQVEsQ0FBQyxDQUFDQyxVQUFVLENBQUMvSCxHQUFYLENBQWVQLElBQWYsQ0FBVjtBQUNELGFBSFcsS0FHTkEsSUFBSSxDQUFDTyxHQUFMLENBQVN5SCxTQUFULEVBQW9CUSxTQUFwQixPQUFvQ3hJLElBQUksQ0FBQ3dJLFNBQUwsRUFIMUM7O0FBSUEsZ0JBQUlKLFNBQUosRUFBZTtBQUNicEksa0JBQUksQ0FBQ29JLFNBQUwsR0FBaUIsSUFBakI7QUFDRCxhQUZELE1BRU87QUFDTEgsb0NBQXNCLENBQUNoVCxJQUF2QixDQUE0QkYsS0FBNUI7QUFDRDtBQUNGLFdBZkQ7QUFnQkEsaUJBQU8rUyxhQUFQO0FBQ0QsU0ExQkQ7QUEyQkQsT0E1QkQ7O0FBNkJGLFNBQUtQLFlBQVksQ0FBQ0UsU0FBbEI7QUFDRSxhQUFPLFVBQVNsVyxTQUFULEVBQW9CdEMsT0FBcEIsRUFBNkI7QUFDbENBLGVBQU8sR0FBR08sTUFBTSxDQUFDQyxNQUFQLENBQWM7QUFDdEJnWix3QkFBYyxFQUFFLElBQUlsViwrQ0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLENBRE07QUFFdEJtViw0QkFBa0IsRUFBRSxJQUFJblYsK0NBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixDQUZFO0FBR3RCb1YsK0JBQXFCLEVBQUUsQ0FIRDtBQUl0QlAsbUJBQVMsRUFBRTtBQUpXLFNBQWQsRUFLUG5aLE9BTE8sQ0FBVjtBQU9BLGVBQU8sVUFBUzZZLGFBQVQsRUFBd0JjLGNBQXhCLEVBQXdDO0FBQzdDLGNBQU1aLFNBQVMsR0FBRyxPQUFPelcsU0FBUCxLQUFxQixVQUFyQixHQUFrQ0EsU0FBUyxFQUEzQyxHQUFnREEsU0FBbEU7QUFDQSxjQUFNSyxNQUFNLEdBQUdvVyxTQUFTLENBQUNhLEtBQVYsRUFBZjtBQUNBLGNBQUlDLGNBQWMsR0FBRyxDQUFDZCxTQUFTLENBQUN2WCxRQUFYLENBQXJCO0FBQ0FxWCx1QkFBYSxDQUFDcFEsT0FBZCxDQUFzQixVQUFTc0ksSUFBVCxFQUFlO0FBQ25DLGdCQUFJdlAsUUFBSjtBQUFBLGdCQUFjc1ksT0FBTyxHQUFHLEtBQXhCOztBQUNBLGlCQUFLLElBQUk1UyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHMlMsY0FBYyxDQUFDalUsTUFBbkMsRUFBMkNzQixDQUFDLEVBQTVDLEVBQWdEO0FBQzlDMUYsc0JBQVEsR0FBSSxJQUFJOEMsK0NBQUosQ0FBVXVWLGNBQWMsQ0FBQzNTLENBQUQsQ0FBZCxDQUFrQnJFLENBQTVCLEVBQStCcUUsQ0FBQyxHQUFHLENBQUosR0FBUzJTLGNBQWMsQ0FBQzNTLENBQUMsR0FBRyxDQUFMLENBQWQsQ0FBc0JwRSxDQUF0QixHQUEwQjlDLE9BQU8sQ0FBQzBaLHFCQUEzQyxHQUFvRVgsU0FBUyxDQUFDdlgsUUFBVixDQUFtQnNCLENBQXRILENBQUQsQ0FBMkhnSCxHQUEzSCxDQUErSDlKLE9BQU8sQ0FBQ3daLGNBQXZJLENBQVg7QUFDQU0scUJBQU8sR0FBSXRZLFFBQVEsQ0FBQ3FCLENBQVQsR0FBYWtPLElBQUksQ0FBQ3ZPLElBQUwsQ0FBVUssQ0FBdkIsR0FBMkJGLE1BQU0sQ0FBQ0UsQ0FBN0M7O0FBQ0Esa0JBQUlpWCxPQUFKLEVBQWE7QUFDWDtBQUNEO0FBQ0Y7O0FBQ0QsZ0JBQUksQ0FBQ0EsT0FBTCxFQUFjO0FBQ1p0WSxzQkFBUSxHQUFJLElBQUk4QywrQ0FBSixDQUFVeVUsU0FBUyxDQUFDdlgsUUFBVixDQUFtQnFCLENBQTdCLEVBQWdDZ1gsY0FBYyxDQUFDQSxjQUFjLENBQUNqVSxNQUFmLEdBQXdCLENBQXpCLENBQWQsQ0FBMEM5QyxDQUExQyxHQUE4QzlDLE9BQU8sQ0FBQzBaLHFCQUF0RixDQUFELENBQStHNVAsR0FBL0csQ0FBbUg5SixPQUFPLENBQUN3WixjQUEzSCxDQUFYO0FBQ0Q7O0FBQ0R6SSxnQkFBSSxDQUFDdlAsUUFBTCxHQUFnQkEsUUFBaEI7O0FBQ0EsZ0JBQUl4QixPQUFPLENBQUNtWixTQUFSLElBQXFCcEksSUFBSSxDQUFDbk8sS0FBTCxHQUFhRSxDQUFiLEdBQWlCaVcsU0FBUyxDQUFDblcsS0FBVixHQUFrQkUsQ0FBNUQsRUFBK0Q7QUFDN0RpTyxrQkFBSSxDQUFDb0ksU0FBTCxHQUFpQixJQUFqQjtBQUNEOztBQUNEVSwwQkFBYyxHQUFHM1osa0RBQVEsQ0FBQzZVLHFCQUFULENBQStCOEUsY0FBL0IsRUFBK0M5SSxJQUFJLENBQUNuTyxLQUFMLEdBQWFrSCxHQUFiLENBQWlCOUosT0FBTyxDQUFDeVosa0JBQXpCLENBQS9DLENBQWpCO0FBQ0QsV0FqQkQ7QUFrQkEsaUJBQU9aLGFBQVA7QUFDRCxTQXZCRDtBQXdCRCxPQWhDRDs7QUFpQ0YsU0FBS1AsWUFBWSxDQUFDRyxVQUFsQjtBQUNFLGFBQU8sVUFBU25XLFNBQVQsRUFBb0J0QyxPQUFwQixFQUE2QjtBQUNsQ0EsZUFBTyxHQUFHTyxNQUFNLENBQUN3WixNQUFQLENBQWM7QUFDdEJDLHlCQUFlLEVBQUUsSUFBSTFWLCtDQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsQ0FESztBQUV0QjJWLDJCQUFpQixFQUFFLElBQUkzViwrQ0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLENBRkc7QUFHdEI2VSxtQkFBUyxFQUFFO0FBSFcsU0FBZCxFQUlQblosT0FKTyxDQUFWO0FBTUEsWUFBTWthLGtCQUFrQixHQUFHLElBQUk1ViwrQ0FBSixDQUFVLENBQUN0RSxPQUFPLENBQUNnYSxlQUFSLENBQXdCblgsQ0FBbkMsRUFBc0M3QyxPQUFPLENBQUNnYSxlQUFSLENBQXdCbFgsQ0FBOUQsQ0FBM0I7QUFDQSxZQUFNcVgsb0JBQW9CLEdBQUcsSUFBSTdWLCtDQUFKLENBQVUsQ0FBQ3RFLE9BQU8sQ0FBQ2lhLGlCQUFSLENBQTBCcFgsQ0FBckMsRUFBd0M3QyxPQUFPLENBQUNpYSxpQkFBUixDQUEwQm5YLENBQWxFLENBQTdCO0FBQ0EsZUFBTyxVQUFTK1YsYUFBVCxFQUF3QmMsY0FBeEIsRUFBd0M7QUFDN0MsY0FBTVosU0FBUyxHQUFHLE9BQU96VyxTQUFQLEtBQXFCLFVBQXJCLEdBQWtDQSxTQUFTLEVBQTNDLEdBQWdEQSxTQUFsRTtBQUNBLGNBQUl1WCxjQUFjLEdBQUcsQ0FBQ2QsU0FBUyxDQUFDcUIsZ0JBQVYsRUFBRCxDQUFyQjtBQUNBdkIsdUJBQWEsQ0FBQ3BRLE9BQWQsQ0FBc0IsVUFBU3NJLElBQVQsRUFBZXNKLE1BQWYsRUFBdUI7QUFDM0MsZ0JBQUk3WSxRQUFKO0FBQUEsZ0JBQWNzWSxPQUFPLEdBQUcsS0FBeEI7O0FBQ0EsaUJBQUssSUFBSTVTLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcyUyxjQUFjLENBQUNqVSxNQUFuQyxFQUEyQ3NCLENBQUMsRUFBNUMsRUFBZ0Q7QUFDOUMxRixzQkFBUSxHQUFJLElBQUk4QywrQ0FBSixDQUFVdVYsY0FBYyxDQUFDM1MsQ0FBRCxDQUFkLENBQWtCckUsQ0FBbEIsR0FBc0JrTyxJQUFJLENBQUN2TyxJQUFMLENBQVVLLENBQTFDLEVBQTZDcUUsQ0FBQyxHQUFHLENBQUosR0FBUTJTLGNBQWMsQ0FBQzNTLENBQUMsR0FBRyxDQUFMLENBQWQsQ0FBc0JwRSxDQUE5QixHQUFrQ2lXLFNBQVMsQ0FBQ3ZYLFFBQVYsQ0FBbUJzQixDQUFsRyxDQUFELENBQXVHZ0gsR0FBdkcsQ0FBMkdvUSxrQkFBM0csQ0FBWDtBQUNBSixxQkFBTyxHQUFJdFksUUFBUSxDQUFDcUIsQ0FBVCxHQUFha08sSUFBSSxDQUFDdlAsUUFBTCxDQUFjcUIsQ0FBdEM7O0FBQ0Esa0JBQUlpWCxPQUFKLEVBQWE7QUFDWDtBQUNEO0FBQ0Y7O0FBQ0QsZ0JBQUksQ0FBQ0EsT0FBTCxFQUFjO0FBQ1p0WSxzQkFBUSxHQUFHLElBQUk4QywrQ0FBSixDQUFVeVUsU0FBUyxDQUFDYSxLQUFWLEdBQWtCL1csQ0FBNUIsRUFBK0JnWCxjQUFjLENBQUNBLGNBQWMsQ0FBQ2pVLE1BQWYsR0FBd0IsQ0FBekIsQ0FBZCxDQUEwQzlDLENBQXpFLENBQVg7QUFDRDs7QUFDRGlPLGdCQUFJLENBQUN2UCxRQUFMLEdBQWdCQSxRQUFoQjs7QUFDQSxnQkFBSXhCLE9BQU8sQ0FBQ21aLFNBQVIsSUFBcUJwSSxJQUFJLENBQUN1SixrQkFBTCxHQUEwQnhYLENBQTFCLEdBQThCaVcsU0FBUyxDQUFDd0IsS0FBVixHQUFrQnpYLENBQXpFLEVBQTRFO0FBQzFFaU8sa0JBQUksQ0FBQ29JLFNBQUwsR0FBaUIsSUFBakI7QUFDRDs7QUFDRFUsMEJBQWMsR0FBRzNaLGtEQUFRLENBQUM2VSxxQkFBVCxDQUErQjhFLGNBQS9CLEVBQStDOUksSUFBSSxDQUFDd0osS0FBTCxHQUFhelEsR0FBYixDQUFpQnFRLG9CQUFqQixDQUEvQyxFQUF1RixJQUF2RixDQUFqQjtBQUNELFdBakJEO0FBa0JBLGlCQUFPdEIsYUFBUDtBQUNELFNBdEJEO0FBdUJELE9BaENEO0FBbEVGO0FBb0dEOztBQUVELFNBQVMyQixjQUFULENBQXdCN0IsSUFBeEIsRUFBOEI7QUFDNUIsVUFBUUEsSUFBUjtBQUNBLFNBQUtMLFlBQVksQ0FBQ0MsV0FBbEI7QUFDRSxhQUFPLFlBQVc7QUFDaEIsZUFBTyxVQUFTa0MsV0FBVCxFQUFzQkMsT0FBdEIsRUFBK0JDLFdBQS9CLEVBQTRDO0FBQ2pELGNBQU1DLFFBQVEsR0FBR0gsV0FBVyxDQUFDckQsTUFBWixDQUFtQnNELE9BQW5CLENBQWpCO0FBQ0FBLGlCQUFPLENBQUNqUyxPQUFSLENBQWdCLFVBQVNvUyxHQUFULEVBQWM7QUFDNUJGLHVCQUFXLENBQUMzVSxJQUFaLENBQWlCNFUsUUFBUSxDQUFDL1IsT0FBVCxDQUFpQmdTLEdBQWpCLENBQWpCO0FBQ0QsV0FGRDtBQUdBLGlCQUFPRCxRQUFQO0FBQ0QsU0FORDtBQU9ELE9BUkQ7O0FBU0YsU0FBS3RDLFlBQVksQ0FBQ0UsU0FBbEI7QUFDQSxTQUFLRixZQUFZLENBQUNHLFVBQWxCO0FBQ0UsYUFBTyxVQUFTOVgsTUFBVCxFQUFpQjRKLFdBQWpCLEVBQThCdkssT0FBOUIsRUFBdUM7QUFDNUNBLGVBQU8sR0FBR08sTUFBTSxDQUFDQyxNQUFQLENBQWM7QUFDdEIwTixxQkFBVyxFQUFFLHFCQUFTMk0sR0FBVCxFQUFjO0FBQ3pCLG1CQUFPQSxHQUFHLENBQUNyWixRQUFYO0FBQ0Q7QUFIcUIsU0FBZCxFQUlQeEIsT0FKTyxDQUFWO0FBTUEsZUFBTyxVQUFTeWEsV0FBVCxFQUFzQkMsT0FBdEIsRUFBK0JDLFdBQS9CLEVBQTRDO0FBQ2pELGNBQU1HLE9BQU8sR0FBR0wsV0FBVyxDQUFDckQsTUFBWixFQUFoQjtBQUNBLGNBQU0yRCxlQUFlLEdBQUdOLFdBQVcsQ0FBQ25VLEdBQVosQ0FBZ0J0RyxPQUFPLENBQUNrTyxXQUF4QixDQUF4QjtBQUNBd00saUJBQU8sQ0FBQ2pTLE9BQVIsQ0FBZ0IsVUFBU3VTLE1BQVQsRUFBaUI7QUFDL0IsZ0JBQUlsVixLQUFLLEdBQUc1RixrREFBUSxDQUFDc1MsbUJBQVQsQ0FBNkJ1SSxlQUE3QixFQUE4Qy9hLE9BQU8sQ0FBQ2tPLFdBQVIsQ0FBb0I4TSxNQUFwQixDQUE5QyxFQUEyRXJhLE1BQTNFLEVBQW1GNEosV0FBbkYsQ0FBWjs7QUFDQSxnQkFBSXpFLEtBQUssS0FBSyxDQUFDLENBQWYsRUFBa0I7QUFDaEJBLG1CQUFLLEdBQUdnVixPQUFPLENBQUNsVixNQUFoQjtBQUNELGFBRkQsTUFFTztBQUNMRSxtQkFBSyxHQUFHZ1YsT0FBTyxDQUFDalMsT0FBUixDQUFnQjRSLFdBQVcsQ0FBQzNVLEtBQUQsQ0FBM0IsQ0FBUjtBQUNEOztBQUNEZ1YsbUJBQU8sQ0FBQ3pLLE1BQVIsQ0FBZXZLLEtBQWYsRUFBc0IsQ0FBdEIsRUFBeUJrVixNQUF6QjtBQUNELFdBUkQ7QUFTQU4saUJBQU8sQ0FBQ2pTLE9BQVIsQ0FBZ0IsVUFBU3VTLE1BQVQsRUFBaUI7QUFDL0JMLHVCQUFXLENBQUMzVSxJQUFaLENBQWlCOFUsT0FBTyxDQUFDalMsT0FBUixDQUFnQm1TLE1BQWhCLENBQWpCO0FBQ0QsV0FGRDtBQUdBLGlCQUFPRixPQUFQO0FBQ0QsU0FoQkQ7QUFpQkQsT0F4QkQ7QUFiRjtBQXVDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEpEO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTW5RLE1BQU0sR0FBRztBQUFFQyxPQUFLLEVBQUxBLDhDQUFLQTtBQUFQLENBQWYsQyxDQUF5Qjs7QUFFekIsSUFBTXFRLE1BQU0sR0FBRyxFQUFmOztJQUVNQyxLOzs7QUFDSixpQkFBWWpVLFVBQVosRUFBd0I0RSxPQUF4QixFQUE2QztBQUFBLFFBQVo3TCxPQUFZLHVFQUFKLEVBQUk7O0FBQUE7O0FBQzNDaWIsVUFBTSxDQUFDeFMsT0FBUCxDQUFlLFVBQUMwUyxLQUFELEVBQVc7QUFDeEIsVUFBSWxVLFVBQUosRUFBZ0I7QUFDZEEsa0JBQVUsQ0FBQ3dCLE9BQVgsQ0FBbUIsVUFBQzdHLFNBQUQsRUFBZTtBQUNoQ3lWLDRFQUFXLENBQUM4RCxLQUFLLENBQUNsVSxVQUFQLEVBQW1CckYsU0FBbkIsQ0FBWDtBQUNELFNBRkQ7QUFHRDs7QUFFRCxVQUFJaUssT0FBSixFQUFhO0FBQ1hBLGVBQU8sQ0FBQ3BELE9BQVIsQ0FBZ0IsVUFBQ3NHLE1BQUQsRUFBWTtBQUMxQnNJLDRFQUFXLENBQUM4RCxLQUFLLENBQUN0UCxPQUFQLEVBQWdCa0QsTUFBaEIsQ0FBWDtBQUNELFNBRkQ7QUFHRDtBQUNGLEtBWkQ7QUFjQSxTQUFLOUgsVUFBTCxHQUFrQkEsVUFBVSxJQUFJLEVBQWhDO0FBQ0EsU0FBSzRFLE9BQUwsR0FBZUEsT0FBTyxJQUFJLEVBQTFCO0FBQ0FvUCxVQUFNLENBQUNqVixJQUFQLENBQVksSUFBWjtBQUNBLFNBQUtoRyxPQUFMLEdBQWU7QUFDYitWLGFBQU8sRUFBRy9WLE9BQU8sQ0FBQytWLE9BQVQsSUFBcUI7QUFEakIsS0FBZjtBQUlBLFNBQUs3VSxRQUFMLEdBQWdCLElBQUl5SixNQUFNLENBQUNDLEtBQVgsQ0FBaUIsSUFBakIsQ0FBaEI7O0FBQ0EsUUFBSTVLLE9BQU8sQ0FBQ2tCLFFBQVosRUFBc0I7QUFDcEIsV0FBS0EsUUFBTCxDQUFjNEksR0FBZCxDQUFrQjlKLE9BQU8sQ0FBQ2tCLFFBQTFCO0FBQ0Q7O0FBQ0QsU0FBS0ksSUFBTDtBQUNEOzs7OzJCQUVNO0FBQUE7O0FBQ0wsV0FBSzJGLFVBQUwsQ0FBZ0J3QixPQUFoQixDQUF3QixVQUFDN0csU0FBRCxFQUFlO0FBQ3JDQSxpQkFBUyxDQUFDc0ssS0FBVixDQUFnQnBDLEdBQWhCLENBQW9CLFlBQU07QUFDeEIsaUJBQU8sS0FBSSxDQUFDb0MsS0FBTCxDQUFXdEssU0FBWCxDQUFQO0FBQ0QsU0FGRDtBQUdELE9BSkQ7QUFLRDs7O2lDQUVZQSxTLEVBQVc7QUFBQTs7QUFDdEIsV0FBS3FGLFVBQUwsQ0FBZ0JqQixJQUFoQixDQUFxQnBFLFNBQXJCO0FBQ0FBLGVBQVMsQ0FBQ3NLLEtBQVYsQ0FBZ0JpRSxPQUFoQixDQUF3QixZQUFNO0FBQzVCLGVBQU8sTUFBSSxDQUFDakUsS0FBTCxDQUFXdEssU0FBWCxDQUFQO0FBQ0QsT0FGRDtBQUdEOzs7OEJBRVNtTixNLEVBQVE7QUFDaEIsV0FBS2xELE9BQUwsQ0FBYTdGLElBQWIsQ0FBa0IrSSxNQUFsQjtBQUNEOzs7MEJBRUtuTixTLEVBQVc7QUFDZixVQUFNd1osV0FBVyxHQUFHLEtBQUt2UCxPQUFMLENBQWFzSixNQUFiLENBQW9CLFVBQUNwRyxNQUFELEVBQVk7QUFDbEQsZUFBT0EsTUFBTSxDQUFDOUgsVUFBUCxDQUFrQjRCLE9BQWxCLENBQTBCakgsU0FBMUIsTUFBeUMsQ0FBQyxDQUFqRDtBQUNELE9BRm1CLEVBRWpCdVQsTUFGaUIsQ0FFVixVQUFDcEcsTUFBRCxFQUFZO0FBQ3BCLGVBQU9BLE1BQU0sQ0FBQ3NNLGNBQVAsQ0FBc0J6WixTQUF0QixDQUFQO0FBQ0QsT0FKbUIsRUFJakIwWixJQUppQixDQUlaLFVBQUNDLENBQUQsRUFBSUMsQ0FBSixFQUFVO0FBQ2hCLGVBQU9ELENBQUMsQ0FBQ0UsWUFBRixHQUFpQmxDLFNBQWpCLEtBQStCaUMsQ0FBQyxDQUFDQyxZQUFGLEdBQWlCbEMsU0FBakIsRUFBdEM7QUFDRCxPQU5tQixDQUFwQjs7QUFRQSxVQUFJNkIsV0FBVyxDQUFDeFYsTUFBaEIsRUFBd0I7QUFDdEJ3VixtQkFBVyxDQUFDLENBQUQsQ0FBWCxDQUFlbFAsS0FBZixDQUFxQnRLLFNBQXJCO0FBQ0QsT0FGRCxNQUVPLElBQUlBLFNBQVMsQ0FBQ2lLLE9BQVYsQ0FBa0JqRyxNQUF0QixFQUE4QjtBQUNuQ2hFLGlCQUFTLENBQUNRLElBQVYsQ0FBZVIsU0FBUyxDQUFDOEssWUFBekIsRUFBdUMsS0FBSzFNLE9BQUwsQ0FBYStWLE9BQXBELEVBQTZELElBQTdELEVBQW1FLElBQW5FO0FBQ0Q7O0FBQ0QsV0FBSzdVLFFBQUwsQ0FBY3FMLElBQWQ7QUFDQSxhQUFPLElBQVA7QUFDRDs7OzRCQUVPO0FBQ04sV0FBS1YsT0FBTCxDQUFhcEQsT0FBYixDQUFxQixVQUFDc0csTUFBRDtBQUFBLGVBQVlBLE1BQU0sQ0FBQ1ksS0FBUCxFQUFaO0FBQUEsT0FBckI7QUFDRDs7OzhCQUVTO0FBQ1IsV0FBSzFJLFVBQUwsQ0FBZ0J3QixPQUFoQixDQUF3QixVQUFDN0csU0FBRDtBQUFBLGVBQWVBLFNBQVMsQ0FBQ3VCLE9BQVYsRUFBZjtBQUFBLE9BQXhCO0FBQ0EsV0FBSzBJLE9BQUwsQ0FBYXBELE9BQWIsQ0FBcUIsVUFBQ3NHLE1BQUQ7QUFBQSxlQUFZQSxNQUFNLENBQUM1TCxPQUFQLEVBQVo7QUFBQSxPQUFyQjtBQUNEOzs7d0JBRWU7QUFBQTs7QUFDZCxhQUFPLEtBQUswSSxPQUFMLENBQWF2RixHQUFiLENBQWlCLFVBQUN5SSxNQUFELEVBQVk7QUFDbEMsZUFBT0EsTUFBTSxDQUFDMk0sZUFBUCxDQUF1QnBWLEdBQXZCLENBQTJCLFVBQUMxRSxTQUFEO0FBQUEsaUJBQWUsTUFBSSxDQUFDcUYsVUFBTCxDQUFnQjRCLE9BQWhCLENBQXdCakgsU0FBeEIsQ0FBZjtBQUFBLFNBQTNCLENBQVA7QUFDRCxPQUZNLENBQVA7QUFHRCxLO3NCQUVhMlYsUyxFQUFXO0FBQUE7O0FBQ3ZCLFVBQU1qTSxPQUFPLEdBQUcsb0JBQWhCOztBQUNBLFVBQUlpTSxTQUFTLENBQUMzUixNQUFWLEtBQXFCLEtBQUtpRyxPQUFMLENBQWFqRyxNQUF0QyxFQUE4QztBQUM1QyxhQUFLaUcsT0FBTCxDQUFhcEQsT0FBYixDQUFxQixVQUFDc0csTUFBRDtBQUFBLGlCQUFZQSxNQUFNLENBQUNZLEtBQVAsRUFBWjtBQUFBLFNBQXJCO0FBRUE0SCxpQkFBUyxDQUFDOU8sT0FBVixDQUFrQixVQUFDa1QsYUFBRCxFQUFnQnpVLENBQWhCLEVBQXNCO0FBQ3RDeVUsdUJBQWEsQ0FBQ2xULE9BQWQsQ0FBc0IsVUFBQzNDLEtBQUQsRUFBVztBQUMvQixrQkFBSSxDQUFDK0YsT0FBTCxDQUFhM0UsQ0FBYixFQUFnQjRDLEdBQWhCLENBQW9CLE1BQUksQ0FBQzdDLFVBQUwsQ0FBZ0JuQixLQUFoQixDQUFwQjtBQUNELFdBRkQ7QUFHRCxTQUpEO0FBS0QsT0FSRCxNQVFPO0FBQ0wsY0FBTXdGLE9BQU47QUFDRDtBQUNGOzs7Ozs7QUFHSCxJQUFNSSxZQUFZLEdBQUcsSUFBSXdQLEtBQUosRUFBckI7O0FBRUEsU0FBU0MsS0FBVCxDQUFlUyxFQUFmLEVBQW1CO0FBQ2pCLE1BQU1DLFlBQVksR0FBRyxJQUFJWCxLQUFKLEVBQXJCOztBQUNBLE1BQU1ZLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBU2xhLFNBQVQsRUFBb0I7QUFDOUNpYSxnQkFBWSxDQUFDbFEsWUFBYixDQUEwQi9KLFNBQTFCO0FBQ0EsV0FBTyxJQUFQO0FBQ0QsR0FIRDs7QUFJQSxNQUFNbWEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFTaE4sTUFBVCxFQUFpQjtBQUN4QzhNLGdCQUFZLENBQUNHLFNBQWIsQ0FBdUJqTixNQUF2QjtBQUNBLFdBQU8sSUFBUDtBQUNELEdBSEQ7O0FBS0FsTixzREFBUyxDQUFDeUssUUFBVixDQUFtQnhDLEdBQW5CLENBQXVCZ1MsbUJBQXZCO0FBQ0FHLGdEQUFNLENBQUMzUCxRQUFQLENBQWdCeEMsR0FBaEIsQ0FBb0JpUyxnQkFBcEI7QUFDQUgsSUFBRSxDQUFDM1MsSUFBSDtBQUNBcEgsc0RBQVMsQ0FBQ3lLLFFBQVYsQ0FBbUI4RCxNQUFuQixDQUEwQjBMLG1CQUExQjtBQUNBRyxnREFBTSxDQUFDM1AsUUFBUCxDQUFnQjhELE1BQWhCLENBQXVCMkwsZ0JBQXZCO0FBQ0EsU0FBT0YsWUFBUDtBQUNEOztBQUVELFNBQVNLLFlBQVQsQ0FBc0J6RSxhQUF0QixFQUFxQ1ksaUJBQXJDLEVBQXdEOEQsY0FBeEQsRUFBb0Y7QUFBQSxNQUFabmMsT0FBWSx1RUFBSixFQUFJO0FBQ2xGLE1BQU0wWCxnQkFBZ0IsR0FBRzFYLE9BQU8sQ0FBQzRCLFNBQVIsSUFBcUIsRUFBOUM7QUFDQSxNQUFNd2EsYUFBYSxHQUFHcGMsT0FBTyxDQUFDK08sTUFBUixJQUFrQixFQUF4QztBQUNBLE1BQU1zTixZQUFZLEdBQUdyYyxPQUFPLENBQUNtYixLQUFSLElBQWlCLEVBQXRDO0FBQ0F6RCxrQkFBZ0IsQ0FBQzVWLE1BQWpCLEdBQTBCNFYsZ0JBQWdCLENBQUM1VixNQUFqQixJQUEyQjJWLGFBQXJEO0FBQ0EyRSxlQUFhLENBQUN0YSxNQUFkLEdBQXVCc2EsYUFBYSxDQUFDdGEsTUFBZCxJQUF3QjJWLGFBQS9DO0FBQ0FZLG1CQUFpQixHQUFHek8sS0FBSyxDQUFDaUcsU0FBTixDQUFnQjFGLEtBQWhCLENBQXNCbEIsSUFBdEIsQ0FBMkJvUCxpQkFBM0IsQ0FBcEI7QUFDQThELGdCQUFjLEdBQUd2UyxLQUFLLENBQUNpRyxTQUFOLENBQWdCMUYsS0FBaEIsQ0FBc0JsQixJQUF0QixDQUEyQmtULGNBQTNCLENBQWpCO0FBRUEsTUFBTWxWLFVBQVUsR0FBR29SLGlCQUFpQixDQUFDL1IsR0FBbEIsQ0FBc0IsVUFBQ3ZHLE9BQUQsRUFBYTtBQUNwRCxXQUFPLElBQUk4QixvREFBSixDQUFjOUIsT0FBZCxFQUF1QjJYLGdCQUF2QixDQUFQO0FBQ0QsR0FGa0IsQ0FBbkI7QUFJQSxNQUFNN0wsT0FBTyxHQUFHc1EsY0FBYyxDQUFDN1YsR0FBZixDQUFtQixVQUFDdkcsT0FBRCxFQUFhO0FBQzlDLFdBQU8sSUFBSWtjLDhDQUFKLENBQVdsYyxPQUFYLEVBQW9Ca0gsVUFBcEIsRUFBZ0NtVixhQUFoQyxDQUFQO0FBQ0QsR0FGZSxDQUFoQjtBQUdBLFNBQU8sSUFBSWxCLEtBQUosQ0FBVWpVLFVBQVYsRUFBc0I0RSxPQUF0QixFQUErQndRLFlBQS9CLENBQVA7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqSkQ7QUFDQTtBQUNBOztJQUVNQyxROzs7OztBQUNKLG9CQUFZclYsVUFBWixFQUFvQztBQUFBLFFBQVpqSCxPQUFZLHVFQUFKLEVBQUk7O0FBQUE7O0FBQ2xDQSxXQUFPLENBQUN1SyxXQUFSLEdBQXNCdkssT0FBTyxDQUFDdUssV0FBUixJQUF1QnJLLGtEQUFRLENBQUNtUyxjQUF0RDtBQURrQyxpRkFFNUJwTCxVQUY0QixFQUVoQmpILE9BRmdCO0FBR25DOzs7O2tDQUVhNEIsUyxFQUFXO0FBQUE7O0FBQ3ZCQSxlQUFTLENBQUM4SSxNQUFWLEdBQW1CLEtBQUs4QixPQUF4Qjs7QUFDQSxVQUFJLEtBQUt4TSxPQUFMLENBQWFrVyxVQUFqQixFQUE2QjtBQUMzQnRVLGlCQUFTLENBQUNHLE1BQVYsQ0FBaUIrSCxHQUFqQixDQUFxQixZQUFNO0FBQ3pCLGNBQUlsSSxTQUFTLENBQUN3TixVQUFkLEVBQTBCO0FBQ3hCLGlCQUFJLENBQUNtTiwyQkFBTCxDQUFpQzNhLFNBQWpDOztBQUNBLG1CQUFPLElBQVA7QUFDRDtBQUNGLFNBTEQ7QUFPQUEsaUJBQVMsQ0FBQ3NLLEtBQVYsQ0FBZ0JwQyxHQUFoQixDQUFvQixZQUFNO0FBQ3hCbEksbUJBQVMsQ0FBQ1EsSUFBVixDQUFlUixTQUFTLENBQUM2SyxXQUF6QixFQUFzQyxLQUFJLENBQUN6TSxPQUFMLENBQWErVixPQUFuRDtBQUNELFNBRkQ7QUFHRDtBQUNGOzs7Z0RBRTJCblUsUyxFQUFXO0FBQ3JDLFVBQU02SyxXQUFXLEdBQUc3SyxTQUFTLENBQUM2SyxXQUE5QjtBQUNBLFVBQU1nSyxZQUFZLEdBQUcsS0FBS3hQLFVBQUwsQ0FBZ0I0QixPQUFoQixDQUF3QmpILFNBQXhCLENBQXJCO0FBQ0EsVUFBTWdWLGFBQWEsR0FBRyxLQUFLM1AsVUFBTCxDQUFnQndQLFlBQVksR0FBRyxDQUEvQixDQUF0QjtBQUNBLFVBQU1JLGFBQWEsR0FBRyxLQUFLNVAsVUFBTCxDQUFnQndQLFlBQVksR0FBRyxDQUEvQixDQUF0Qjs7QUFFQSxVQUFJN1UsU0FBUyxDQUFDME0sYUFBVixJQUEyQnNJLGFBQS9CLEVBQThDO0FBQzVDLFlBQU0xRSxRQUFRLEdBQUcsS0FBS2xTLE9BQUwsQ0FBYXVLLFdBQWIsQ0FBeUIzSSxTQUFTLENBQUNKLFFBQW5DLEVBQTZDb1YsYUFBYSxDQUFDcFYsUUFBM0QsQ0FBakI7O0FBQ0EsWUFBSTBRLFFBQVEsR0FBRyxLQUFLbFMsT0FBTCxDQUFhVyxNQUE1QixFQUFvQztBQUNsQ2lCLG1CQUFTLENBQUM2SyxXQUFWLEdBQXdCbUssYUFBYSxDQUFDbkssV0FBdEM7QUFDQSxlQUFLa0ssVUFBTCxDQUFnQkMsYUFBaEIsRUFBK0JuSyxXQUEvQixFQUE0QyxLQUFLek0sT0FBTCxDQUFhZ1csV0FBekQ7QUFGa0MscUJBR21DLENBQUMsS0FBSy9PLFVBQUwsQ0FBZ0J3UCxZQUFZLEdBQUcsQ0FBL0IsQ0FBRCxFQUFvQyxLQUFLeFAsVUFBTCxDQUFnQndQLFlBQWhCLENBQXBDLENBSG5DO0FBR2pDLGVBQUt4UCxVQUFMLENBQWdCd1AsWUFBaEIsQ0FIaUM7QUFHRixlQUFLeFAsVUFBTCxDQUFnQndQLFlBQVksR0FBRyxDQUEvQixDQUhFO0FBSWxDLGVBQUs4RiwyQkFBTCxDQUFpQzNhLFNBQWpDO0FBQ0Q7QUFDRjs7QUFFRCxVQUFJQSxTQUFTLENBQUN5TSxXQUFWLElBQXlCd0ksYUFBN0IsRUFBNEM7QUFDMUMsWUFBTTNFLFNBQVEsR0FBRyxLQUFLbFMsT0FBTCxDQUFhdUssV0FBYixDQUF5QjNJLFNBQVMsQ0FBQ0osUUFBbkMsRUFBNkNxVixhQUFhLENBQUNyVixRQUEzRCxDQUFqQjs7QUFDQSxZQUFJMFEsU0FBUSxHQUFHLEtBQUtsUyxPQUFMLENBQWFXLE1BQTVCLEVBQW9DO0FBQ2xDaUIsbUJBQVMsQ0FBQzZLLFdBQVYsR0FBd0JvSyxhQUFhLENBQUNwSyxXQUF0QztBQUNBLGVBQUtrSyxVQUFMLENBQWdCRSxhQUFoQixFQUErQnBLLFdBQS9CLEVBQTRDLEtBQUt6TSxPQUFMLENBQWFnVyxXQUF6RDtBQUZrQyxzQkFHbUMsQ0FBQyxLQUFLL08sVUFBTCxDQUFnQndQLFlBQVksR0FBRyxDQUEvQixDQUFELEVBQW9DLEtBQUt4UCxVQUFMLENBQWdCd1AsWUFBaEIsQ0FBcEMsQ0FIbkM7QUFHakMsZUFBS3hQLFVBQUwsQ0FBZ0J3UCxZQUFoQixDQUhpQztBQUdGLGVBQUt4UCxVQUFMLENBQWdCd1AsWUFBWSxHQUFHLENBQS9CLENBSEU7QUFJbEMsZUFBSzhGLDJCQUFMLENBQWlDM2EsU0FBakM7QUFDRDtBQUNGO0FBQ0Y7Ozs7RUEvQ29Ca1UsMEM7O0FBa0R2QixTQUFTMEcsZUFBVCxDQUF5Qi9FLGFBQXpCLEVBQXdDdlIsUUFBeEMsRUFBOEQ7QUFBQSxNQUFabEcsT0FBWSx1RUFBSixFQUFJO0FBQzVELE1BQU0wWCxnQkFBZ0IsR0FBRzFYLE9BQU8sQ0FBQzRCLFNBQVIsSUFBcUIsRUFBOUM7QUFDQSxNQUFNK1YsV0FBVyxHQUFHM1gsT0FBTyxDQUFDcVcsSUFBUixJQUFnQixFQUFwQztBQUNBcUIsa0JBQWdCLENBQUM1VixNQUFqQixHQUEwQjRWLGdCQUFnQixDQUFDNVYsTUFBakIsSUFBMkIyVixhQUFyRDtBQUNBdlIsVUFBUSxHQUFHMEQsS0FBSyxDQUFDaUcsU0FBTixDQUFnQjFGLEtBQWhCLENBQXNCbEIsSUFBdEIsQ0FBMkIvQyxRQUEzQixDQUFYO0FBRUEsTUFBTWUsVUFBVSxHQUFHZixRQUFRLENBQUNJLEdBQVQsQ0FBYSxVQUFDdkcsT0FBRCxFQUFhO0FBQzNDLFdBQU8sSUFBSThCLG9EQUFKLENBQWM5QixPQUFkLEVBQXVCMlgsZ0JBQXZCLENBQVA7QUFDRCxHQUZrQixDQUFuQjtBQUlBLFNBQU8sSUFBSTRFLFFBQUosQ0FBYXJWLFVBQWIsRUFBeUIwUSxXQUF6QixDQUFQO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7O0FDakVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOztJQUVNOEUsTTs7O0FBQ0osa0JBQVkzYyxJQUFaLEVBQWtCb0csUUFBbEIsRUFBd0M7QUFBQSxRQUFabEcsT0FBWSx1RUFBSixFQUFJOztBQUFBOztBQUN0QyxRQUFNQyxhQUFhLEdBQUdDLGtEQUFRLENBQUNDLDBCQUFULENBQW9DTCxJQUFwQyxFQUEwQ0EsSUFBMUMsQ0FBdEI7QUFDQSxTQUFLRSxPQUFMLEdBQWVPLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjO0FBQzNCZSxXQUFLLEVBQUUsQ0FEb0I7QUFFM0JtYixZQUFNLEVBQUUsSUFBSTViLElBQUksQ0FBQ0MsRUFBVCxHQUFjbUYsUUFBUSxDQUFDTixNQUZKO0FBRzNCbkYsWUFBTSxFQUFFUixhQUFhLENBQUNTLFNBQWQsRUFIbUI7QUFJM0JpYyxpQkFBVyxFQUFFLEVBSmM7QUFLM0JDLGVBQVMsRUFBRTNjLGFBQWEsQ0FBQ1csVUFBZCxLQUE2QixDQUxiO0FBTTNCaWMsZUFBUyxFQUFFLENBTmdCO0FBTzNCQyxpQkFBVyxFQUFFLFNBUGM7QUFRM0JyVCxlQUFTLEVBQUU7QUFSZ0IsS0FBZCxFQVNaekosT0FUWSxDQUFmO0FBV0EsU0FBS0YsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0csYUFBTCxHQUFxQkEsYUFBckI7QUFDQSxTQUFLcUIsSUFBTCxDQUFVNEUsUUFBVjtBQUNEOzs7O3lCQUVJQSxRLEVBQVU7QUFBQTs7QUFDYixXQUFLVyxNQUFMLEdBQWNDLG1FQUFZLENBQUMsS0FBS2hILElBQU4sRUFBWSxLQUFLRyxhQUFqQixDQUExQjtBQUNBLFdBQUs4RyxPQUFMLEdBQWUsS0FBS0YsTUFBTCxDQUFZRyxVQUFaLENBQXVCLElBQXZCLENBQWY7QUFFQSxXQUFLQyxVQUFMLEdBQWtCZixRQUFRLENBQUNJLEdBQVQsQ0FBYSxVQUFDdkcsT0FBRCxFQUFVbUgsQ0FBVixFQUFnQjtBQUM3QyxZQUFNM0YsS0FBSyxHQUFHLEtBQUksQ0FBQ3ZCLE9BQUwsQ0FBYXVCLEtBQWIsR0FBcUIyRixDQUFDLEdBQUcsS0FBSSxDQUFDbEgsT0FBTCxDQUFhMGMsTUFBcEQ7QUFDQSxZQUFNdGMsUUFBUSxHQUFHRixrREFBUSxDQUFDRyxnQkFBVCxDQUEwQk4sT0FBMUIsRUFBbUNPLElBQW5DLENBQXdDLEdBQXhDLENBQWpCO0FBQ0EsWUFBTXFELEtBQUssR0FBR3pELGtEQUFRLENBQUN1Qix3QkFBVCxDQUFrQ0YsS0FBbEMsRUFBeUMsS0FBSSxDQUFDdkIsT0FBTCxDQUFhMmMsV0FBdEQsRUFBbUUsS0FBSSxDQUFDM2MsT0FBTCxDQUFhUyxNQUFoRixFQUF3RlksR0FBeEYsQ0FBNEZqQixRQUE1RixDQUFkO0FBQ0EsWUFBTXdELEdBQUcsR0FBRzFELGtEQUFRLENBQUN1Qix3QkFBVCxDQUFrQ0YsS0FBbEMsRUFBeUMsS0FBSSxDQUFDdkIsT0FBTCxDQUFhNGMsU0FBdEQsRUFBaUUsS0FBSSxDQUFDNWMsT0FBTCxDQUFhUyxNQUE5RSxFQUFzRlksR0FBdEYsQ0FBMEZqQixRQUExRixDQUFaO0FBQ0EsWUFBTXNCLEtBQUssR0FBR2dDLDBEQUFXLENBQUNDLEtBQUQsRUFBUUMsR0FBUixDQUF6QjtBQUVBLGVBQU8sSUFBSS9CLG9EQUFKLENBQWM5QixPQUFkLEVBQXVCO0FBQzVCK0IsZ0JBQU0sRUFBRSxLQUFJLENBQUNoQyxJQURlO0FBRTVCNEIsZUFBSyxFQUFFQSxLQUZxQjtBQUc1QkYsa0JBQVEsRUFBRW1DLEtBSGtCO0FBSTVCNUIsZ0JBQU0sRUFBRSxrQkFBTTtBQUNaLGlCQUFJLENBQUNxRixJQUFMOztBQUNBLG1CQUFPLElBQVA7QUFDRDtBQVAyQixTQUF2QixDQUFQO0FBU0QsT0FoQmlCLENBQWxCO0FBa0JBLFdBQUtDLE1BQUwsR0FBYyxJQUFkO0FBQ0EsV0FBS0QsSUFBTDtBQUNEOzs7MkJBRU07QUFDTCxVQUFJLENBQUMsS0FBS0MsTUFBVixFQUFrQjtBQUNoQjtBQUNEOztBQUNELFdBQUtOLE9BQUwsQ0FBYXlCLFNBQWIsQ0FBdUIsQ0FBdkIsRUFBMEIsQ0FBMUIsRUFBNkIsS0FBS3ZJLGFBQUwsQ0FBbUJ1QyxJQUFuQixDQUF3QkssQ0FBckQsRUFBd0QsS0FBSzVDLGFBQUwsQ0FBbUJ1QyxJQUFuQixDQUF3Qk0sQ0FBaEY7QUFDQSxXQUFLaUUsT0FBTCxDQUFhcUMsU0FBYjtBQUVBLFVBQUk3RyxLQUFLLEdBQUcsS0FBSzBFLFVBQUwsQ0FBZ0IsQ0FBaEIsRUFBbUJ2RyxTQUFuQixFQUFaO0FBQ0EsV0FBS3FHLE9BQUwsQ0FBYXNDLE1BQWIsQ0FBb0I5RyxLQUFLLENBQUNNLENBQTFCLEVBQTZCTixLQUFLLENBQUNPLENBQW5DOztBQUVBLFdBQUssSUFBSW9FLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS0QsVUFBTCxDQUFnQnJCLE1BQXBDLEVBQTRDc0IsQ0FBQyxFQUE3QyxFQUFpRDtBQUMvQzNFLGFBQUssR0FBRyxLQUFLMEUsVUFBTCxDQUFnQkMsQ0FBaEIsRUFBbUJ4RyxTQUFuQixFQUFSO0FBQ0EsYUFBS3FHLE9BQUwsQ0FBYXdDLE1BQWIsQ0FBb0JoSCxLQUFLLENBQUNNLENBQTFCLEVBQTZCTixLQUFLLENBQUNPLENBQW5DO0FBQ0Q7O0FBQ0QsV0FBS2lFLE9BQUwsQ0FBYXlDLFNBQWI7QUFDQSxXQUFLekMsT0FBTCxDQUFhOFYsU0FBYixHQUF5QixLQUFLN2MsT0FBTCxDQUFhNmMsU0FBdEM7QUFDQSxXQUFLOVYsT0FBTCxDQUFhK1YsV0FBYixHQUEyQixLQUFLOWMsT0FBTCxDQUFhOGMsV0FBeEM7QUFDQSxXQUFLL1YsT0FBTCxDQUFhZ1csTUFBYjtBQUNBLFdBQUtoVyxPQUFMLENBQWEwQyxTQUFiLEdBQXlCLEtBQUt6SixPQUFMLENBQWF5SixTQUF0QztBQUNBLFdBQUsxQyxPQUFMLENBQWEyQyxJQUFiO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1pQixNQUFNLEdBQUc7QUFBRTJOLGNBQVksRUFBWkEseURBQUY7QUFBaUJJLGlCQUFlLEVBQWZBLDREQUFqQjtBQUFrQzhCLGdCQUFjLEVBQWRBLDJEQUFsQztBQUFrRFMsUUFBTSxFQUFOQSw2Q0FBbEQ7QUFBMERyUSxPQUFLLEVBQUxBLDhDQUFLQTtBQUEvRCxDQUFmLEMsQ0FBZ0Y7O0FBRWhGLElBQU1hLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBU3NELE1BQVQsRUFBaUI7QUFDekNyRCxxREFBWSxDQUFDc1EsU0FBYixDQUF1QmpOLE1BQXZCO0FBQ0QsQ0FGRDs7SUFJTWtOLE07OztBQUNKLGtCQUFZbGMsT0FBWixFQUFxQmtILFVBQXJCLEVBQStDO0FBQUEsUUFBZGpILE9BQWMsdUVBQUosRUFBSTs7QUFBQTs7QUFDN0MsUUFBTStPLE1BQU0sR0FBRyxJQUFmO0FBQ0EsUUFBTWpOLE1BQU0sR0FBRzlCLE9BQU8sQ0FBQzhCLE1BQVIsSUFBa0I4Six1RUFBZ0IsQ0FBQzdMLE9BQUQsQ0FBakQ7QUFFQSxTQUFLQyxPQUFMLEdBQWVPLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjO0FBQzNCdVYsYUFBTyxFQUFFLEdBRGtCO0FBRTNCQyxpQkFBVyxFQUFFLEdBRmM7QUFHM0JsVSxZQUFNLEVBQUVBLE1BSG1CO0FBSTNCa2IsYUFBTyxFQUFFclMsTUFBTSxDQUFDNlAsY0FBUCxDQUFzQjdQLE1BQU0sQ0FBQzJOLFlBQVAsQ0FBb0JFLFNBQTFDLEVBQXFELEVBQXJELEVBQXlEdFksa0RBQVEsQ0FBQ29TLCtCQUFULENBQXlDO0FBQUV6UCxTQUFDLEVBQUUsQ0FBTDtBQUFRQyxTQUFDLEVBQUU7QUFBWCxPQUF6QyxDQUF6RCxDQUprQjtBQUszQm1hLGlCQUFXLEVBQUV0UyxNQUFNLENBQUMrTixlQUFQLENBQXVCL04sTUFBTSxDQUFDMk4sWUFBUCxDQUFvQkUsU0FBM0MsRUFBc0QsS0FBS2lELFlBQUwsQ0FBa0I1TyxJQUFsQixDQUF1QixJQUF2QixDQUF0RCxFQUFvRjtBQUFFc00saUJBQVMsRUFBRTtBQUFiLE9BQXBGO0FBTGMsS0FBZCxFQU1ablosT0FOWSxDQUFmO0FBUUEsU0FBS0QsT0FBTCxHQUFlQSxPQUFmO0FBQ0FrSCxjQUFVLENBQUN3QixPQUFYLENBQW1CLFVBQUM3RyxTQUFEO0FBQUEsYUFBZUEsU0FBUyxDQUFDaUssT0FBVixDQUFrQjdGLElBQWxCLENBQXVCK0ksTUFBdkIsQ0FBZjtBQUFBLEtBQW5CO0FBQ0EsU0FBSzlILFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsU0FBS2lXLEtBQUwsR0FBYSxJQUFJdlMsTUFBTSxDQUFDQyxLQUFYLENBQWlCLElBQWpCLENBQWI7QUFDQSxTQUFLdVMsU0FBTCxHQUFpQixJQUFJeFMsTUFBTSxDQUFDQyxLQUFYLENBQWlCLElBQWpCLENBQWpCO0FBQ0EsU0FBS3dTLFFBQUwsR0FBZ0IsSUFBSXpTLE1BQU0sQ0FBQ0MsS0FBWCxDQUFpQixJQUFqQixDQUFoQjs7QUFFQSxRQUFJNUssT0FBTyxDQUFDb2QsUUFBWixFQUFzQjtBQUNwQixXQUFLQSxRQUFMLENBQWN0VCxHQUFkLENBQWtCOUosT0FBTyxDQUFDb2QsUUFBMUI7QUFDRDs7QUFFRCxRQUFJcGQsT0FBTyxDQUFDa2QsS0FBWixFQUFtQjtBQUNqQixXQUFLQSxLQUFMLENBQVdwVCxHQUFYLENBQWU5SixPQUFPLENBQUNrZCxLQUF2QjtBQUNEOztBQUVELFFBQUlsZCxPQUFPLENBQUNtZCxTQUFaLEVBQXVCO0FBQ3JCLFdBQUtBLFNBQUwsQ0FBZXJULEdBQWYsQ0FBbUI5SixPQUFPLENBQUNtZCxTQUEzQjtBQUNEOztBQUVEbEIsVUFBTSxDQUFDM1AsUUFBUCxDQUFnQkMsSUFBaEIsQ0FBcUIsSUFBckI7QUFFQSxTQUFLakwsSUFBTDtBQUNEOzs7OzJCQUVNO0FBQUE7O0FBQ0wsVUFBSStiLFVBQUosRUFBZ0JDLFlBQWhCO0FBRUEsV0FBSzVCLGVBQUwsR0FBdUIsS0FBS3pVLFVBQUwsQ0FBZ0JrTyxNQUFoQixDQUF1QixVQUFDdlQsU0FBRCxFQUFlO0FBQzNELFlBQUk3QixPQUFPLEdBQUc2QixTQUFTLENBQUM3QixPQUFWLENBQWtCcVUsVUFBaEM7O0FBQ0EsZUFBT3JVLE9BQVAsRUFBZ0I7QUFDZCxjQUFJQSxPQUFPLEtBQUssS0FBSSxDQUFDQSxPQUFyQixFQUE4QjtBQUM1QixtQkFBTyxJQUFQO0FBQ0Q7O0FBQ0RBLGlCQUFPLEdBQUdBLE9BQU8sQ0FBQ3FVLFVBQWxCO0FBQ0Q7O0FBQ0QsZUFBTyxLQUFQO0FBQ0QsT0FUc0IsQ0FBdkI7O0FBV0EsVUFBSSxLQUFLc0gsZUFBTCxDQUFxQjlWLE1BQXpCLEVBQWlDO0FBQy9CMFgsb0JBQVksR0FBR2pYLCtEQUFLLENBQUMsS0FBS3FWLGVBQUwsQ0FBcUI5VixNQUF0QixDQUFwQjtBQUNBeVgsa0JBQVUsR0FBRyxLQUFLcmQsT0FBTCxDQUFhaWQsV0FBYixDQUF5QixLQUFLdkIsZUFBTCxDQUFxQnBWLEdBQXJCLENBQXlCLFVBQUMxRSxTQUFELEVBQWU7QUFDNUUsaUJBQU9BLFNBQVMsQ0FBQzZaLFlBQVYsRUFBUDtBQUNELFNBRnFDLENBQXpCLEVBRVQ2QixZQUZTLENBQWI7QUFHQSxhQUFLclAsV0FBTCxDQUFpQm9QLFVBQWpCLEVBQTZCQyxZQUE3QjtBQUNBLGFBQUs1QixlQUFMLENBQXFCalQsT0FBckIsQ0FBNkIsVUFBQzdHLFNBQUQ7QUFBQSxpQkFBZSxLQUFJLENBQUNzYixLQUFMLENBQVczUSxJQUFYLENBQWdCM0ssU0FBaEIsQ0FBZjtBQUFBLFNBQTdCO0FBQ0Q7QUFDRjs7O21DQUVjO0FBQ2IsYUFBTzFCLGtEQUFRLENBQUNDLDBCQUFULENBQ0wsS0FBS0osT0FEQSxFQUVMLEtBQUtDLE9BQUwsQ0FBYThCLE1BRlIsRUFHTCxLQUFLOUIsT0FBTCxDQUFhK0wsZ0JBSFIsRUFJTCxJQUpLLENBQVA7QUFNRDs7O21DQUVjbkssUyxFQUFXO0FBQ3hCLFVBQUksS0FBSzVCLE9BQUwsQ0FBYXFiLGNBQWpCLEVBQWlDO0FBQy9CLGVBQU8sS0FBS3JiLE9BQUwsQ0FBYXFiLGNBQWIsQ0FBNEIsSUFBNUIsRUFBa0N6WixTQUFsQyxDQUFQO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsWUFBTTJiLGVBQWUsR0FBRyxLQUFLOUIsWUFBTCxFQUF4QjtBQUNBLFlBQU0rQixlQUFlLEdBQUc1YixTQUFTLENBQUM2WixZQUFWLEdBQXlCbEMsU0FBekIsRUFBeEI7QUFFQSxlQUFPaUUsZUFBZSxHQUFHRCxlQUFlLENBQUNoRSxTQUFoQixFQUFsQixJQUNJZ0UsZUFBZSxDQUFDck0sWUFBaEIsQ0FBNkJ0UCxTQUFTLENBQUNsQixTQUFWLEVBQTdCLENBRFg7QUFFRDtBQUNGOzs7a0NBRWE7QUFDWixhQUFPLEtBQUsrYSxZQUFMLEdBQW9CamEsUUFBM0I7QUFDRDs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLaWEsWUFBTCxHQUFvQmpaLElBQTNCO0FBQ0Q7Ozs4QkFFUztBQUFBOztBQUNSbUksWUFBTSxDQUFDc1EsTUFBUCxDQUFjeFMsT0FBZCxDQUFzQixVQUFDMFMsS0FBRDtBQUFBLGVBQVc5RCxrRUFBVyxDQUFDOEQsS0FBSyxDQUFDdFAsT0FBUCxFQUFnQixNQUFoQixDQUF0QjtBQUFBLE9BQXRCO0FBQ0Q7Ozs4QkFFUztBQUNSLFVBQU13UixVQUFVLEdBQUcsS0FBS3JkLE9BQUwsQ0FBYWlkLFdBQWIsQ0FBeUIsS0FBS3ZCLGVBQUwsQ0FBcUJwVixHQUFyQixDQUF5QixVQUFDMUUsU0FBRCxFQUFlO0FBQ2xGLGVBQU9BLFNBQVMsQ0FBQzZaLFlBQVYsRUFBUDtBQUNELE9BRjJDLENBQXpCLEVBRWYsRUFGZSxDQUFuQjtBQUdBLFdBQUt4TixXQUFMLENBQWlCb1AsVUFBakIsRUFBNkIsRUFBN0IsRUFBaUMsQ0FBakM7QUFDRDs7OzBCQUVLemIsUyxFQUFXO0FBQ2YsVUFBTTZiLGtCQUFrQixHQUFHLEVBQTNCO0FBQ0EsVUFBTXZNLFlBQVksR0FBRyxLQUFLdUssWUFBTCxHQUFvQnZLLFlBQXBCLENBQWlDdFAsU0FBUyxDQUFDc00sV0FBVixFQUFqQyxDQUFyQjs7QUFFQSxVQUFJLENBQUNnRCxZQUFMLEVBQW1CO0FBQ2pCLFlBQUksS0FBS3VLLFlBQUwsR0FBb0J2SyxZQUFwQixDQUFpQ3RQLFNBQVMsQ0FBQ2xCLFNBQVYsRUFBakMsQ0FBSixFQUE2RDtBQUMzRGtCLG1CQUFTLENBQUNKLFFBQVYsR0FBcUJJLFNBQVMsQ0FBQ2xCLFNBQVYsR0FBc0JnQyxLQUF0QixFQUFyQjtBQUNELFNBRkQsTUFFTztBQUNMLGlCQUFPLEtBQVA7QUFDRDtBQUNGOztBQUVELFdBQUt5YSxTQUFMLENBQWU1USxJQUFmLENBQW9CM0ssU0FBcEI7QUFFQSxXQUFLOFosZUFBTCxHQUF1QixLQUFLMWIsT0FBTCxDQUFhZ2QsT0FBYixDQUFxQixLQUFLdEIsZUFBMUIsRUFBMkMsQ0FBQzlaLFNBQUQsQ0FBM0MsRUFBd0Q2YixrQkFBeEQsQ0FBdkI7QUFDQSxVQUFNSixVQUFVLEdBQUcsS0FBS3JkLE9BQUwsQ0FBYWlkLFdBQWIsQ0FBeUIsS0FBS3ZCLGVBQUwsQ0FBcUJwVixHQUFyQixDQUF5QixVQUFDMUUsU0FBRCxFQUFlO0FBQ2xGLGVBQU9BLFNBQVMsQ0FBQzZaLFlBQVYsRUFBUDtBQUNELE9BRjJDLENBQXpCLEVBRWZnQyxrQkFGZSxFQUVLN2IsU0FGTCxDQUFuQjtBQUlBLFdBQUtxTSxXQUFMLENBQWlCb1AsVUFBakIsRUFBNkJJLGtCQUE3Qjs7QUFDQSxVQUFJLEtBQUsvQixlQUFMLENBQXFCN1MsT0FBckIsQ0FBNkJqSCxTQUE3QixNQUE0QyxDQUFDLENBQWpELEVBQW9EO0FBQ2xELGFBQUs4YixlQUFMLENBQXFCOWIsU0FBckI7QUFDRDs7QUFDRCxhQUFPLElBQVA7QUFDRDs7O2dDQUVXeWIsVSxFQUFZQyxZLEVBQWNuYyxJLEVBQU07QUFBQTs7QUFDMUMsV0FBS3VhLGVBQUwsQ0FBcUJ2UixLQUFyQixDQUEyQixDQUEzQixFQUE4QjFCLE9BQTlCLENBQXNDLFVBQUM3RyxTQUFELEVBQVlzRixDQUFaLEVBQWtCO0FBQ3RELFlBQU02SixJQUFJLEdBQUdzTSxVQUFVLENBQUNuVyxDQUFELENBQXZCO0FBQUEsWUFDRTZPLE9BQU8sR0FBRzVVLElBQUksSUFBSUEsSUFBSSxLQUFLLENBQWpCLEdBQXFCQSxJQUFyQixHQUE0Qm1jLFlBQVksQ0FBQ3pVLE9BQWIsQ0FBcUIzQixDQUFyQixNQUE0QixDQUFDLENBQTdCLEdBQWlDLE1BQUksQ0FBQ2xILE9BQUwsQ0FBYStWLE9BQTlDLEdBQXdELE1BQUksQ0FBQy9WLE9BQUwsQ0FBYWdXLFdBRDdHOztBQUdBLFlBQUlqRixJQUFJLENBQUNvSSxTQUFULEVBQW9CO0FBQ2xCdlgsbUJBQVMsQ0FBQ1EsSUFBVixDQUFlUixTQUFTLENBQUM4SyxZQUF6QixFQUF1Q3FKLE9BQXZDLEVBQWdELElBQWhELEVBQXNELElBQXREO0FBQ0FzQiw0RUFBVyxDQUFDLE1BQUksQ0FBQ3FFLGVBQU4sRUFBdUI5WixTQUF2QixDQUFYOztBQUVBLGdCQUFJLENBQUN3YixRQUFMLENBQWM3USxJQUFkLENBQW1CM0ssU0FBbkI7QUFDRCxTQUxELE1BS087QUFDTEEsbUJBQVMsQ0FBQ1EsSUFBVixDQUFlMk8sSUFBSSxDQUFDdlAsUUFBcEIsRUFBOEJ1VSxPQUE5QixFQUF1QyxJQUF2QyxFQUE2QyxJQUE3QztBQUNEO0FBQ0YsT0FaRDtBQWFEOzs7d0JBRUduVSxTLEVBQVdULEksRUFBTTtBQUNuQixVQUFNc2Msa0JBQWtCLEdBQUcsS0FBSy9CLGVBQUwsQ0FBcUI5VixNQUFoRDtBQUVBLFdBQUt1WCxTQUFMLENBQWU1USxJQUFmLENBQW9CM0ssU0FBcEI7QUFFQSxXQUFLK2Isa0JBQUwsQ0FBd0IvYixTQUF4QjtBQUNBLFVBQU15YixVQUFVLEdBQUcsS0FBS3JkLE9BQUwsQ0FBYWlkLFdBQWIsQ0FBeUIsS0FBS3ZCLGVBQUwsQ0FBcUJwVixHQUFyQixDQUF5QixVQUFDMUUsU0FBRCxFQUFlO0FBQ2xGLGVBQU9BLFNBQVMsQ0FBQzZaLFlBQVYsRUFBUDtBQUNELE9BRjJDLENBQXpCLEVBRWZnQyxrQkFGZSxFQUVLN2IsU0FGTCxDQUFuQjtBQUlBLFdBQUtxTSxXQUFMLENBQWlCb1AsVUFBakIsRUFBNkIsQ0FBQ0ksa0JBQUQsQ0FBN0IsRUFBbUR0YyxJQUFJLElBQUksQ0FBM0Q7O0FBQ0EsVUFBSSxLQUFLdWEsZUFBTCxDQUFxQjdTLE9BQXJCLENBQTZCakgsU0FBN0IsTUFBNEMsQ0FBQyxDQUFqRCxFQUFvRDtBQUNsRCxhQUFLOGIsZUFBTCxDQUFxQjliLFNBQXJCO0FBQ0Q7QUFDRjs7O3VDQUVrQkEsUyxFQUFXO0FBQzVCLFVBQUksS0FBSzhaLGVBQUwsQ0FBcUI3UyxPQUFyQixDQUE2QmpILFNBQTdCLE1BQTBDLENBQUMsQ0FBL0MsRUFBa0Q7QUFDaEQsYUFBSzhaLGVBQUwsQ0FBcUIxVixJQUFyQixDQUEwQnBFLFNBQTFCO0FBQ0Q7QUFDRjs7O29DQUVlQSxTLEVBQVc7QUFBQTs7QUFDekJBLGVBQVMsQ0FBQ0csTUFBVixDQUFpQitILEdBQWpCLENBQXFCLEtBQUs4VCxhQUFMLEdBQXFCLFlBQU07QUFDOUMsY0FBSSxDQUFDeE4sTUFBTCxDQUFZeE8sU0FBWjtBQUNELE9BRkQ7QUFJQSxXQUFLc2IsS0FBTCxDQUFXM1EsSUFBWCxDQUFnQjNLLFNBQWhCO0FBQ0Q7OzsyQkFFTUEsUyxFQUFXO0FBQ2hCQSxlQUFTLENBQUNHLE1BQVYsQ0FBaUJxTyxNQUFqQixDQUF3QixLQUFLd04sYUFBN0I7QUFFQSxVQUFNOVgsS0FBSyxHQUFHLEtBQUs0VixlQUFMLENBQXFCN1MsT0FBckIsQ0FBNkJqSCxTQUE3QixDQUFkOztBQUNBLFVBQUlrRSxLQUFLLEtBQUssQ0FBQyxDQUFmLEVBQWtCO0FBQ2hCO0FBQ0Q7O0FBRUQsV0FBSzRWLGVBQUwsQ0FBcUJyTCxNQUFyQixDQUE0QnZLLEtBQTVCLEVBQW1DLENBQW5DO0FBRUEsVUFBTXVYLFVBQVUsR0FBRyxLQUFLcmQsT0FBTCxDQUFhaWQsV0FBYixDQUF5QixLQUFLdkIsZUFBTCxDQUFxQnBWLEdBQXJCLENBQXlCLFVBQUMxRSxTQUFELEVBQWU7QUFDbEYsZUFBT0EsU0FBUyxDQUFDNlosWUFBVixFQUFQO0FBQ0QsT0FGMkMsQ0FBekIsRUFFZixFQUZlLENBQW5CO0FBSUEsV0FBS3hOLFdBQUwsQ0FBaUJvUCxVQUFqQixFQUE2QixFQUE3QjtBQUNBLFdBQUtELFFBQUwsQ0FBYzdRLElBQWQsQ0FBbUIzSyxTQUFuQjtBQUNEOzs7NEJBRU87QUFBQTs7QUFDTixXQUFLOFosZUFBTCxDQUFxQmpULE9BQXJCLENBQTZCLFVBQUM3RyxTQUFELEVBQWU7QUFDMUNBLGlCQUFTLENBQUNRLElBQVYsQ0FBZVIsU0FBUyxDQUFDOEssWUFBekIsRUFBdUMsQ0FBdkMsRUFBMEMsSUFBMUMsRUFBZ0QsSUFBaEQ7O0FBQ0EsY0FBSSxDQUFDMFEsUUFBTCxDQUFjN1EsSUFBZCxDQUFtQjNLLFNBQW5CO0FBQ0QsT0FIRDtBQUlBLFdBQUs4WixlQUFMLEdBQXVCLEVBQXZCO0FBQ0Q7OzswQ0FFcUI7QUFDcEIsV0FBS0EsZUFBTCxDQUFxQnZSLEtBQXJCO0FBQ0Q7Ozs7OztBQUdIOFIsTUFBTSxDQUFDM1AsUUFBUCxHQUFrQixJQUFJM0IsTUFBTSxDQUFDQyxLQUFYLENBQWlCcVIsTUFBakIsRUFBeUI7QUFBRTlQLFdBQVMsRUFBRSxJQUFiO0FBQW1CQyxjQUFZLEVBQUU7QUFBakMsQ0FBekIsQ0FBbEI7QUFDQTZQLE1BQU0sQ0FBQzNQLFFBQVAsQ0FBZ0J4QyxHQUFoQixDQUFvQjJCLGlCQUFwQjs7Ozs7Ozs7Ozs7OztBQzNOQTtBQUFBO0FBQUE7QUFBQTtBQUFPLFNBQVNvUyxRQUFULENBQWtCOWQsT0FBbEIsRUFBMkIrZCxDQUEzQixFQUE4QjtBQUNuQyxNQUFNQyxFQUFFLEdBQUcsSUFBSUMsTUFBSixDQUFXLFlBQVlGLENBQVosR0FBZ0IsU0FBM0IsRUFBc0MsR0FBdEMsQ0FBWDtBQUNBLFNBQVFDLEVBQUUsQ0FBQ3BRLElBQUgsQ0FBUTVOLE9BQU8sQ0FBQ2tlLFNBQWhCLENBQVI7QUFDRDtBQUVNLFNBQVM1TyxRQUFULENBQWtCdFAsT0FBbEIsRUFBMkIrZCxDQUEzQixFQUE4QjtBQUNuQyxNQUFJLENBQUNELFFBQVEsQ0FBQzlkLE9BQUQsRUFBVStkLENBQVYsQ0FBYixFQUEyQjtBQUN6Qi9kLFdBQU8sQ0FBQ2tlLFNBQVIsR0FBb0IsQ0FBQ2xlLE9BQU8sQ0FBQ2tlLFNBQVIsR0FBb0IsR0FBcEIsR0FBMEJILENBQTNCLEVBQThCbFEsT0FBOUIsQ0FBc0MsTUFBdEMsRUFBOEMsR0FBOUMsRUFBbURBLE9BQW5ELENBQTJELFVBQTNELEVBQXVFLEVBQXZFLENBQXBCO0FBQ0Q7QUFDRjtBQUVNLFNBQVM2QixXQUFULENBQXFCMVAsT0FBckIsRUFBOEIrZCxDQUE5QixFQUFpQztBQUN0QyxNQUFNQyxFQUFFLEdBQUcsSUFBSUMsTUFBSixDQUFXLFlBQVlGLENBQVosR0FBZ0IsU0FBM0IsRUFBc0MsR0FBdEMsQ0FBWDtBQUNBL2QsU0FBTyxDQUFDa2UsU0FBUixHQUFvQmxlLE9BQU8sQ0FBQ2tlLFNBQVIsQ0FBa0JyUSxPQUFsQixDQUEwQm1RLEVBQTFCLEVBQThCLElBQTlCLEVBQW9DblEsT0FBcEMsQ0FBNEMsTUFBNUMsRUFBb0QsR0FBcEQsRUFBeURBLE9BQXpELENBQWlFLFVBQWpFLEVBQTZFLEVBQTdFLENBQXBCO0FBQ0QsQzs7Ozs7Ozs7Ozs7O0FDZEQ7QUFBQTtBQUFBLFNBQVNzUSxRQUFULENBQWtCbmUsT0FBbEIsRUFBMkJzTixLQUEzQixFQUFrQztBQUNoQ0EsT0FBSyxHQUFHQSxLQUFLLElBQUksRUFBakI7QUFDQSxNQUFJOFEsT0FBTyxHQUFHLEVBQWQ7O0FBQ0EsT0FBSyxJQUFNQyxHQUFYLElBQWtCL1EsS0FBbEIsRUFBeUI7QUFDdkIsUUFBSUEsS0FBSyxDQUFDZ1IsY0FBTixDQUFxQkQsR0FBckIsQ0FBSixFQUErQjtBQUM3QkQsYUFBTyxJQUFJQyxHQUFHLEdBQUcsSUFBTixHQUFhL1EsS0FBSyxDQUFDK1EsR0FBRCxDQUFsQixHQUEwQixJQUFyQztBQUNEO0FBQ0Y7O0FBRURyZSxTQUFPLENBQUNzTixLQUFSLENBQWM4USxPQUFkLEdBQXdCQSxPQUF4QjtBQUNEOztBQUVELFNBQVNHLGdCQUFULENBQTBCdmUsT0FBMUIsRUFBbUN3ZSxJQUFuQyxFQUF5QztBQUN2QyxNQUFJeGUsT0FBTyxDQUFDeWUsVUFBWixFQUF3QjtBQUN0QnplLFdBQU8sQ0FBQzBlLFlBQVIsQ0FBcUJGLElBQXJCLEVBQTJCeGUsT0FBTyxDQUFDeWUsVUFBbkM7QUFDRCxHQUZELE1BRU87QUFDTHplLFdBQU8sQ0FBQzJlLFdBQVIsQ0FBb0JILElBQXBCO0FBQ0Q7QUFDRjs7QUFFYyxTQUFTelgsWUFBVCxDQUFzQmhILElBQXRCLEVBQTRCNmUsUUFBNUIsRUFBc0M7QUFDbkQsTUFBTTlYLE1BQU0sR0FBR3NJLFFBQVEsQ0FBQ3lQLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZjs7QUFDQSxNQUFJelosTUFBTSxDQUFDd1AsZ0JBQVAsQ0FBd0I3VSxJQUF4QixFQUE4QjBCLFFBQTlCLEtBQTJDLFFBQS9DLEVBQXlEO0FBQ3ZEMUIsUUFBSSxDQUFDdU4sS0FBTCxDQUFXN0wsUUFBWCxHQUFzQixVQUF0QjtBQUNEOztBQUVEcUYsUUFBTSxDQUFDZ1ksWUFBUCxDQUFvQixPQUFwQixFQUE2QkYsUUFBUSxDQUFDbmMsSUFBVCxDQUFjSyxDQUFkLEdBQWtCLElBQS9DO0FBQ0FnRSxRQUFNLENBQUNnWSxZQUFQLENBQW9CLFFBQXBCLEVBQThCRixRQUFRLENBQUNuYyxJQUFULENBQWNNLENBQWQsR0FBa0IsSUFBaEQ7QUFDQW9iLFVBQVEsQ0FBQ3JYLE1BQUQsRUFBUztBQUNmckYsWUFBUSxFQUFFLFVBREs7QUFFZmtRLFFBQUksRUFBRWlOLFFBQVEsQ0FBQ25kLFFBQVQsQ0FBa0JzQixDQUFsQixHQUFzQixJQUZiO0FBR2Y2TyxPQUFHLEVBQUVnTixRQUFRLENBQUNuZCxRQUFULENBQWtCc0IsQ0FBbEIsR0FBc0IsSUFIWjtBQUlmOE8sU0FBSyxFQUFFK00sUUFBUSxDQUFDbmMsSUFBVCxDQUFjSyxDQUFkLEdBQWtCLElBSlY7QUFLZmdILFVBQU0sRUFBRThVLFFBQVEsQ0FBQ25jLElBQVQsQ0FBY00sQ0FBZCxHQUFrQjtBQUxYLEdBQVQsQ0FBUjtBQU9Bd2Isa0JBQWdCLENBQUN4ZSxJQUFELEVBQU8rRyxNQUFQLENBQWhCO0FBQ0EsU0FBT0EsTUFBUDtBQUNELEM7Ozs7Ozs7Ozs7OztBQ3JDRDtBQUFBO0FBQWUsU0FBUytFLGdCQUFULENBQTBCN0wsT0FBMUIsRUFBbUM7QUFDaEQsTUFBSStCLE1BQU0sR0FBRy9CLE9BQU8sQ0FBQ3FVLFVBQXJCOztBQUNBLFNBQU90UyxNQUFNLENBQUNzUyxVQUFQLElBQXFCalAsTUFBTSxDQUFDd1AsZ0JBQVAsQ0FBd0I3UyxNQUF4QixFQUFnQyxVQUFoQyxNQUFnRCxRQUE1RSxFQUFzRjtBQUNwRkEsVUFBTSxHQUFHQSxNQUFNLENBQUNzUyxVQUFoQjtBQUNEOztBQUNELFNBQU90UyxNQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7O0FDTkQ7QUFBQTtBQUFlLFNBQVN1RSxLQUFULENBQWUxQyxLQUFmLEVBQXNCbWIsSUFBdEIsRUFBNEJDLElBQTVCLEVBQWtDO0FBQy9DLE1BQU03SixNQUFNLEdBQUcsRUFBZjs7QUFDQSxNQUFJLE9BQU80SixJQUFQLEtBQWdCLFdBQXBCLEVBQWlDO0FBQy9CQSxRQUFJLEdBQUduYixLQUFQO0FBQ0FBLFNBQUssR0FBRyxDQUFSO0FBQ0Q7O0FBQ0QsTUFBSSxPQUFPb2IsSUFBUCxLQUFnQixXQUFwQixFQUFpQztBQUMvQkEsUUFBSSxHQUFHLENBQVA7QUFDRDs7QUFDRCxNQUFLQSxJQUFJLEdBQUcsQ0FBUCxJQUFZcGIsS0FBSyxJQUFJbWIsSUFBdEIsSUFBZ0NDLElBQUksR0FBRyxDQUFQLElBQVlwYixLQUFLLElBQUltYixJQUF6RCxFQUFnRTtBQUM5RCxXQUFPLEVBQVA7QUFDRDs7QUFDRCxPQUFLLElBQUk1WCxDQUFDLEdBQUd2RCxLQUFiLEVBQW9Cb2IsSUFBSSxHQUFHLENBQVAsR0FBVzdYLENBQUMsR0FBRzRYLElBQWYsR0FBc0I1WCxDQUFDLEdBQUc0WCxJQUE5QyxFQUFvRDVYLENBQUMsSUFBSTZYLElBQXpELEVBQStEO0FBQzdEN0osVUFBTSxDQUFDbFAsSUFBUCxDQUFZa0IsQ0FBWjtBQUNEOztBQUNELFNBQU9nTyxNQUFQO0FBQ0QsQyIsImZpbGUiOiJpbmRleC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIkRyYWdlZVwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJEcmFnZWVcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiRHJhZ2VlXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8qIVxuICogZ2V0U3R5bGVQcm9wZXJ0eSB2MS4wLjRcbiAqIG9yaWdpbmFsIGJ5IGthbmdheFxuICogaHR0cDovL3BlcmZlY3Rpb25raWxscy5jb20vZmVhdHVyZS10ZXN0aW5nLWNzcy1wcm9wZXJ0aWVzL1xuICogTUlUIGxpY2Vuc2VcbiAqL1xuXG4vKmpzaGludCBicm93c2VyOiB0cnVlLCBzdHJpY3Q6IHRydWUsIHVuZGVmOiB0cnVlICovXG4vKmdsb2JhbCBkZWZpbmU6IGZhbHNlLCBleHBvcnRzOiBmYWxzZSwgbW9kdWxlOiBmYWxzZSAqL1xuXG4oIGZ1bmN0aW9uKCB3aW5kb3cgKSB7XG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHByZWZpeGVzID0gJ1dlYmtpdCBNb3ogbXMgTXMgTycuc3BsaXQoJyAnKTtcbnZhciBkb2NFbGVtU3R5bGUgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGU7XG5cbmZ1bmN0aW9uIGdldFN0eWxlUHJvcGVydHkoIHByb3BOYW1lICkge1xuICBpZiAoICFwcm9wTmFtZSApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyB0ZXN0IHN0YW5kYXJkIHByb3BlcnR5IGZpcnN0XG4gIGlmICggdHlwZW9mIGRvY0VsZW1TdHlsZVsgcHJvcE5hbWUgXSA9PT0gJ3N0cmluZycgKSB7XG4gICAgcmV0dXJuIHByb3BOYW1lO1xuICB9XG5cbiAgLy8gY2FwaXRhbGl6ZVxuICBwcm9wTmFtZSA9IHByb3BOYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcHJvcE5hbWUuc2xpY2UoMSk7XG5cbiAgLy8gdGVzdCB2ZW5kb3Igc3BlY2lmaWMgcHJvcGVydGllc1xuICB2YXIgcHJlZml4ZWQ7XG4gIGZvciAoIHZhciBpPTAsIGxlbiA9IHByZWZpeGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrICkge1xuICAgIHByZWZpeGVkID0gcHJlZml4ZXNbaV0gKyBwcm9wTmFtZTtcbiAgICBpZiAoIHR5cGVvZiBkb2NFbGVtU3R5bGVbIHByZWZpeGVkIF0gPT09ICdzdHJpbmcnICkge1xuICAgICAgcmV0dXJuIHByZWZpeGVkO1xuICAgIH1cbiAgfVxufVxuXG4vLyB0cmFuc3BvcnRcbmlmICggdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAvLyBBTURcbiAgZGVmaW5lKCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZ2V0U3R5bGVQcm9wZXJ0eTtcbiAgfSk7XG59IGVsc2UgaWYgKCB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgKSB7XG4gIC8vIENvbW1vbkpTIGZvciBDb21wb25lbnRcbiAgbW9kdWxlLmV4cG9ydHMgPSBnZXRTdHlsZVByb3BlcnR5O1xufSBlbHNlIHtcbiAgLy8gYnJvd3NlciBnbG9iYWxcbiAgd2luZG93LmdldFN0eWxlUHJvcGVydHkgPSBnZXRTdHlsZVByb3BlcnR5O1xufVxuXG59KSggd2luZG93ICk7XG4iLCIvKipcbiAqIFJlbW92ZSBhIHJhbmdlIG9mIGl0ZW1zIGZyb20gYW4gYXJyYXlcbiAqXG4gKiBAZnVuY3Rpb24gcmVtb3ZlSXRlbXNcbiAqIEBwYXJhbSB7QXJyYXk8Kj59IGFyciBUaGUgdGFyZ2V0IGFycmF5XG4gKiBAcGFyYW0ge251bWJlcn0gc3RhcnRJZHggVGhlIGluZGV4IHRvIGJlZ2luIHJlbW92aW5nIGZyb20gKGluY2x1c2l2ZSlcbiAqIEBwYXJhbSB7bnVtYmVyfSByZW1vdmVDb3VudCBIb3cgbWFueSBpdGVtcyB0byByZW1vdmVcbiAqL1xuZnVuY3Rpb24gcmVtb3ZlSXRlbXMgKGFyciwgc3RhcnRJZHgsIHJlbW92ZUNvdW50KSB7XG4gIHZhciBpLCBsZW5ndGggPSBhcnIubGVuZ3RoO1xuXG4gIGlmIChzdGFydElkeCA+PSBsZW5ndGggfHwgcmVtb3ZlQ291bnQgPT09IDApIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHJlbW92ZUNvdW50ID0gKHN0YXJ0SWR4ICsgcmVtb3ZlQ291bnQgPiBsZW5ndGggPyBsZW5ndGggLSBzdGFydElkeCA6IHJlbW92ZUNvdW50KTtcblxuICB2YXIgbGVuID0gbGVuZ3RoIC0gcmVtb3ZlQ291bnQ7XG5cbiAgZm9yIChpID0gc3RhcnRJZHg7IGkgPCBsZW47ICsraSkge1xuICAgIGFycltpXSA9IGFycltpICsgcmVtb3ZlQ291bnRdO1xuICB9XG5cbiAgYXJyLmxlbmd0aCA9IGxlbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVtb3ZlSXRlbXM7XG4iLCJpbXBvcnQgeyBHZW9tZXRyeSB9IGZyb20gJy4vZ2VvbWV0cnknXG5pbXBvcnQgeyBEcmFnZ2FibGUgfSBmcm9tICcuL2RyYWdnYWJsZSdcbmltcG9ydCB7IGJvdW5kVG9BcmMgfSBmcm9tICcuL2JvdW5kJ1xuXG5jbGFzcyBBcmNTbGlkZXIge1xuICBjb25zdHJ1Y3RvcihhcmVhLCBlbGVtZW50LCBvcHRpb25zPXt9KSB7XG4gICAgY29uc3QgYXJlYVJlY3RhbmdsZSA9IEdlb21ldHJ5LmNyZWF0ZVJlY3RhbmdsZUZyb21FbGVtZW50KGFyZWEsIGFyZWEpXG4gICAgY29uc3QgaGFsZlNpemUgPSBHZW9tZXRyeS5nZXRTaXplT2ZFbGVtZW50KGVsZW1lbnQpLm11bHQoMC41KVxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY2VudGVyOiBhcmVhUmVjdGFuZ2xlLmdldENlbnRlcigpLFxuICAgICAgcmFkaXVzOiBhcmVhUmVjdGFuZ2xlLmdldE1pblNpZGUoKSAvIDIsXG4gICAgICBzdGFydEFuZ2xlOiBNYXRoLlBJLFxuICAgICAgZW5kQW5nbGU6IDAsXG4gICAgICBhbmdsZXM6IFtNYXRoLlBJLCAtTWF0aC5QSSAvIDQsIDAsIE1hdGguUEkgLyA0LCBNYXRoLlBJIC8gMl0sXG4gICAgICBvbkNoYW5nZTogZnVuY3Rpb24oKSB7fSxcbiAgICAgIHRpbWU6IDUwMFxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0aGlzLnNoaWZ0ZWRDZW50ZXIgPSB0aGlzLm9wdGlvbnMuY2VudGVyLnN1YihoYWxmU2l6ZSlcbiAgICB0aGlzLm9uQ2hhbmdlID0gdGhpcy5vcHRpb25zLm9uQ2hhbmdlXG4gICAgdGhpcy5hcmVhID0gYXJlYVxuICAgIHRoaXMuaW5pdChlbGVtZW50KVxuICB9XG5cbiAgaW5pdChlbGVtZW50KSB7XG4gICAgY29uc3QgYW5nbGUgPSB0aGlzLm9wdGlvbnMuc3RhcnRBbmdsZVxuICAgIGNvbnN0IHBvc2l0aW9uID0gR2VvbWV0cnkuZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKFxuICAgICAgYW5nbGUsXG4gICAgICB0aGlzLm9wdGlvbnMucmFkaXVzLFxuICAgICAgdGhpcy5zaGlmdGVkQ2VudGVyXG4gICAgKVxuICAgIGNvbnN0IGJvdW5kID0gYm91bmRUb0FyYyhcbiAgICAgIHRoaXMuc2hpZnRlZENlbnRlcixcbiAgICAgIHRoaXMub3B0aW9ucy5yYWRpdXMsXG4gICAgICB0aGlzLm9wdGlvbnMuc3RhcnRBbmdsZSxcbiAgICAgIHRoaXMub3B0aW9ucy5lbmRBbmdsZVxuICAgIClcblxuICAgIHRoaXMuYW5nbGUgPSBhbmdsZVxuICAgIHRoaXMuZHJhZ2dhYmxlID0gbmV3IERyYWdnYWJsZShlbGVtZW50LCB7XG4gICAgICBwYXJlbnQ6IHRoaXMuYXJlYSxcbiAgICAgIGJvdW5kOiBib3VuZCxcbiAgICAgIHBvc2l0aW9uOiBwb3NpdGlvbixcbiAgICAgIG9uTW92ZTogKCkgPT4ge1xuICAgICAgICB0aGlzLmNoYW5nZSgpXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHVwZGF0ZUFuZ2xlKCkge1xuICAgIHRoaXMuYW5nbGUgPSBHZW9tZXRyeS5nZXRBbmdsZSh0aGlzLnNoaWZ0ZWRDZW50ZXIsIHRoaXMuZHJhZ2dhYmxlLnBvc2l0aW9uKVxuICB9XG5cbiAgY2hhbmdlKCkge1xuICAgIHRoaXMudXBkYXRlQW5nbGUoKVxuICAgIC8vICAgICAgdmFyIGFuZ2xlID0gR2VvbWV0cnkuZ2V0TmVhcmVzdEFuZ2xlKHRoaXMub3B0aW9ucy5hbmdsZXMsIHRoaXMuYW5nbGUpO1xuICAgIC8vICAgICAgdGhpcy5zZXRBbmdsZShhbmdsZSx0aGlzLm9wdGlvbnMudGltZSk7XG4gICAgdGhpcy5vbkNoYW5nZSh0aGlzLmFuZ2xlKVxuICB9XG5cbiAgc2V0QW5nbGUoYW5nbGUsIHRpbWUpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IEdlb21ldHJ5LmdldFBvaW50RnJvbVJhZGlhbFN5c3RlbShcbiAgICAgIHRoaXMuYW5nbGUsXG4gICAgICB0aGlzLm9wdGlvbnMucmFkaXVzLFxuICAgICAgdGhpcy5zaGlmdGVkQ2VudGVyXG4gICAgKVxuICAgIHRoaXMuYW5nbGUgPSBHZW9tZXRyeS5ub3JtYWxpemVBbmdsZShhbmdsZSwgcG9zaXRpb24pXG4gICAgdGhpcy5kcmFnZ2FibGUubW92ZShwb3NpdGlvbiwgdGltZXx8MCwgdHJ1ZSwgdHJ1ZSlcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMuYW5nbGUpXG4gIH1cbn1cblxuZXhwb3J0IHsgQXJjU2xpZGVyIH1cbiIsImltcG9ydCB7IEdlb21ldHJ5LCBQb2ludCB9IGZyb20gJy4vZ2VvbWV0cnknXG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZFRvUmVjdGFuZ2xlKHJlY3RhbmdsZSkge1xuICByZXR1cm4gZnVuY3Rpb24ocG9pbnQsIHNpemUpIHtcbiAgICBjb25zdCBjYWxjUG9pbnQgPSBwb2ludC5jbG9uZSgpLFxuICAgICAgcmVjdFAyID0gcmVjdGFuZ2xlLmdldFAzKClcblxuICAgIGlmIChyZWN0YW5nbGUucG9zaXRpb24ueCA+IGNhbGNQb2ludC54KSB7XG4gICAgICAoY2FsY1BvaW50LnggPSByZWN0YW5nbGUucG9zaXRpb24ueClcbiAgICB9XG4gICAgaWYgKHJlY3RhbmdsZS5wb3NpdGlvbi55ID4gY2FsY1BvaW50LnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gcmVjdGFuZ2xlLnBvc2l0aW9uLnlcbiAgICB9XG4gICAgaWYgKHJlY3RQMi54IDwgY2FsY1BvaW50LnggKyBzaXplLngpIHtcbiAgICAgIGNhbGNQb2ludC54ID0gcmVjdFAyLnggLSBzaXplLnhcbiAgICB9XG4gICAgaWYgKHJlY3RQMi55IDwgY2FsY1BvaW50LnkgKyBzaXplLnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gcmVjdFAyLnkgLSBzaXplLnlcbiAgICB9XG5cbiAgICByZXR1cm4gY2FsY1BvaW50XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kVG9FbGVtZW50KGVsZW1lbnQsIHBhcmVudCkge1xuICBjb25zdCByZXRGdW5jID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGJvdW5kLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbiAgfVxuICBsZXQgYm91bmRcblxuICByZXRGdW5jLnJlZnJlc2ggPSBmdW5jdGlvbigpIHtcbiAgICBib3VuZCA9IGJvdW5kVG9SZWN0YW5nbGUoR2VvbWV0cnkuY3JlYXRlUmVjdGFuZ2xlRnJvbUVsZW1lbnQoZWxlbWVudCwgcGFyZW50KSlcbiAgfVxuXG4gIHJldEZ1bmMucmVmcmVzaCgpXG4gIHJldHVybiByZXRGdW5jXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZFRvTGluZVgoeCwgc3RhcnRZLCBlbmRZKSB7XG4gIHJldHVybiBmdW5jdGlvbihwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IGNhbGNQb2ludCA9IHBvaW50LmNsb25lKClcbiAgICBjYWxjUG9pbnQueCA9IHhcbiAgICBpZiAoc3RhcnRZID4gY2FsY1BvaW50LnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gc3RhcnRZXG4gICAgfVxuICAgIGlmIChlbmRZIDwgY2FsY1BvaW50LnkgKyBzaXplLnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gZW5kWSAtIHNpemUueVxuICAgIH1cblxuICAgIHJldHVybiBjYWxjUG9pbnRcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRUb0xpbmVZKHksIHN0YXJ0WCwgZW5kWCkge1xuICByZXR1cm4gZnVuY3Rpb24ocG9pbnQsIHNpemUpIHtcbiAgICBjb25zdCBjYWxjUG9pbnQgPSBwb2ludC5jbG9uZSgpXG4gICAgY2FsY1BvaW50LnkgPSB5XG4gICAgaWYgKHN0YXJ0WCA+IGNhbGNQb2ludC54KSB7XG4gICAgICBjYWxjUG9pbnQueCA9IHN0YXJ0WFxuICAgIH1cbiAgICBpZiAoZW5kWCA8IGNhbGNQb2ludC54ICsgc2l6ZS54KSB7XG4gICAgICBjYWxjUG9pbnQueCA9IGVuZFggLSBzaXplLnhcbiAgICB9XG4gICAgcmV0dXJuIGNhbGNQb2ludFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZFRvTGluZShzdGFydCwgZW5kKSB7XG4gIGNvbnN0IGFscGhhID0gTWF0aC5hdGFuMihlbmQueSAtIHN0YXJ0LnksIGVuZC54IC0gc3RhcnQueCksXG4gICAgYmV0YSA9IGFscGhhICsgTWF0aC5QSSAvIDIsXG4gICAgc29tZUsgPSAxMCxcbiAgICBjb3NCZXRhID0gTWF0aC5jb3MoYmV0YSksXG4gICAgc2luQmV0YSA9IE1hdGguc2luKGJldGEpXG5cbiAgcmV0dXJuIGZ1bmN0aW9uKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgcG9pbnQyID0gbmV3IFBvaW50KHBvaW50LnggKyBzb21lSyAqIGNvc0JldGEsIHBvaW50LnkgKyBzb21lSyAqIHNpbkJldGEpLFxuICAgICAgbmV3RW5kID0gR2VvbWV0cnkuZ2V0UG9pbnRJbkxpbmVCeUxlbmdodChlbmQsIHN0YXJ0LCBzaXplLngpXG4gICAgbGV0IHBvaW50Q3Jvc3NpbmcgPSBHZW9tZXRyeS5kaXJlY3RDcm9zc2luZyhzdGFydCwgZW5kLCBwb2ludCwgcG9pbnQyKVxuXG4gICAgcG9pbnRDcm9zc2luZyA9IEdlb21ldHJ5LmJvdW5kVG9MaW5lKHN0YXJ0LCBuZXdFbmQsIHBvaW50Q3Jvc3NpbmcpXG4gICAgcmV0dXJuIHBvaW50Q3Jvc3NpbmdcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRUb0NpcmNsZShjZW50ZXIsIHJhZGl1cykge1xuICByZXR1cm4gZnVuY3Rpb24ocG9pbnQsIF9zaXplKSB7XG4gICAgY29uc3QgYm91bmRlZFBvaW50ID0gR2VvbWV0cnkuZ2V0UG9pbnRJbkxpbmVCeUxlbmdodChjZW50ZXIsIHBvaW50LCByYWRpdXMpXG4gICAgcmV0dXJuIGJvdW5kZWRQb2ludFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZFRvQXJjKGNlbnRlciwgcmFkaXVzLCBzdGFydEFnbGUsIGVuZEFuZ2xlKSB7XG4gIHJldHVybiBmdW5jdGlvbihwb2ludCwgX3NpemUpIHtcbiAgICBjb25zdCBib3VuZFN0YXJ0QW5nbGUgPSB0eXBlb2Ygc3RhcnRBZ2xlID09PSAnZnVuY3Rpb24nID8gc3RhcnRBZ2xlKCkgOiBzdGFydEFnbGVcbiAgICBjb25zdCBib3VuZEVuZHRBbmdsZSA9IHR5cGVvZiBzdGFydEFnbGUgPT09ICdmdW5jdGlvbicgPyBlbmRBbmdsZSgpIDogZW5kQW5nbGVcblxuICAgIGxldCBhbmdsZSA9IEdlb21ldHJ5LmdldEFuZ2xlKGNlbnRlciwgcG9pbnQpXG4gICAgYW5nbGUgPSBHZW9tZXRyeS5ub3JtYWxpemVBbmdsZShhbmdsZSlcbiAgICBhbmdsZSA9IEdlb21ldHJ5LmJvdW5kQW5nbGUoYm91bmRTdGFydEFuZ2xlLCBib3VuZEVuZHRBbmdsZSwgYW5nbGUpXG4gICAgcmV0dXJuIEdlb21ldHJ5LmdldFBvaW50RnJvbVJhZGlhbFN5c3RlbShhbmdsZSwgcmFkaXVzLCBjZW50ZXIpXG4gIH1cbn1cbiIsImltcG9ydCBjcmVhdGVDYW52YXMgZnJvbSAnLi91dGlscy9jcmVhdGVjYW52YXMnXG5pbXBvcnQgcmFuZ2UgZnJvbSAnLi91dGlscy9yYW5nZSdcbmltcG9ydCB7IEdlb21ldHJ5LCBQb2ludCB9IGZyb20gJy4vZ2VvbWV0cnknXG5pbXBvcnQgeyBEcmFnZ2FibGUsIGV2ZW50cyB9IGZyb20gJy4vZHJhZ2dhYmxlJ1xuaW1wb3J0IHsgYm91bmRUb0FyYyB9IGZyb20gJy4vYm91bmQnXG5cbmNvbnN0IGlzVG91Y2ggPSAnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3dcblxuZnVuY3Rpb24gcmFuZG9tQ29sb3IoKSB7XG4gIGNvbnN0IHJuZCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkqMjU1KVxuICB9XG4gIGNvbnN0IHRvSGV4U3RyaW5nID0gZnVuY3Rpb24oZGlnaXQpIHtcbiAgICBsZXQgc3RyID0gZGlnaXQudG9TdHJpbmcoMTYpXG4gICAgd2hpbGUgKHN0ci5sZW5ndGggPCAyKSB7XG4gICAgICBzdHIgPSAnMCcgKyBzdHJcbiAgICB9XG4gICAgcmV0dXJuIHN0clxuICB9XG5cbiAgcmV0dXJuICcjJyArIHRvSGV4U3RyaW5nKHJuZCgpKSArIHRvSGV4U3RyaW5nKHJuZCgpKSArIHRvSGV4U3RyaW5nKHJuZCgpKVxufVxuXG5mdW5jdGlvbiBnZXRBcnJheVdpdGhCb3VuZEluZGV4ZXMoaW5kZXgsIGxlbmd0aCkge1xuICBjb25zdCByZXRJbmRleGVzID0gW11cbiAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgIHJldEluZGV4ZXMucHVzaChpbmRleClcbiAgICByZXRJbmRleGVzLnB1c2goKGluZGV4ICsgMSkgJSBsZW5ndGgpXG4gIH1cblxuICByZXR1cm4gcmV0SW5kZXhlc1xufVxuXG5jbGFzcyBDaGFydCB7XG4gIGNvbnN0cnVjdG9yIChhcmVhLCBlbGVtZW50cywgb3B0aW9ucz17fSkge1xuICAgIGNvbnN0IGFyZWFSZWN0YW5nbGUgPSBHZW9tZXRyeS5jcmVhdGVSZWN0YW5nbGVGcm9tRWxlbWVudChhcmVhLCBhcmVhKVxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY2VudGVyOiBhcmVhUmVjdGFuZ2xlLmdldENlbnRlcigpLFxuICAgICAgcmFkaXVzOiBhcmVhUmVjdGFuZ2xlLmdldE1pblNpZGUoKSAvIDIsXG4gICAgICB0b3VjaFJhZGl1czogYXJlYVJlY3RhbmdsZS5nZXRNaW5TaWRlKCkgLyAyLFxuICAgICAgYm91bmRBbmdsZTogTWF0aC5QSSAvIDksXG4gICAgICBmaWxsU3R5bGVzOiByYW5nZSgwLCBlbGVtZW50cy5sZW5ndGgpLm1hcCgoKSA9PiByYW5kb21Db2xvcigpKSxcbiAgICAgIGluaXRBbmdsZXM6IHJhbmdlKC05MCwgMjcwLCAzNjAgLyBlbGVtZW50cy5sZW5ndGgpLm1hcCgoYW5nbGUpID0+IHtcbiAgICAgICAgcmV0dXJuIEdlb21ldHJ5LnRvUmFkaWFuKGFuZ2xlKVxuICAgICAgfSksXG4gICAgICBsaW1pdEltZzogbnVsbCxcbiAgICAgIGxpbWl0SW1nT2Zmc2V0OiBuZXcgUG9pbnQoMCwgMCksXG4gICAgICBpc1NlbGVjdGFibGU6IGZhbHNlXG4gICAgfSwgb3B0aW9ucylcblxuICAgIHRoaXMub25EcmF3ID0gdGhpcy5vcHRpb25zLm9uRHJhdyB8fCBmdW5jdGlvbigpIHt9XG4gICAgdGhpcy5hcmVhID0gYXJlYVxuICAgIHRoaXMuYXJlYVJlY3RhbmdsZSA9IGFyZWFSZWN0YW5nbGVcbiAgICB0aGlzLmluaXQoZWxlbWVudHMpXG4gIH1cblxuICBpbml0KGVsZW1lbnRzKSB7XG4gICAgdGhpcy5jYW52YXMgPSBjcmVhdGVDYW52YXModGhpcy5hcmVhLCB0aGlzLmFyZWFSZWN0YW5nbGUpXG4gICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGVsZW1lbnRzLm1hcCgoZWxlbWVudCwgaSkgPT4ge1xuICAgICAgY29uc3QgYW5nbGUgPSB0aGlzLm9wdGlvbnMuaW5pdEFuZ2xlc1tpXVxuICAgICAgY29uc3QgaGFsZlNpemUgPSBHZW9tZXRyeS5nZXRTaXplT2ZFbGVtZW50KGVsZW1lbnQpLm11bHQoMC41KVxuICAgICAgY29uc3QgcG9zaXRpb24gPSBHZW9tZXRyeS5nZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oXG4gICAgICAgIGFuZ2xlLFxuICAgICAgICB0aGlzLm9wdGlvbnMudG91Y2hSYWRpdXMsXG4gICAgICAgIHRoaXMub3B0aW9ucy5jZW50ZXIuc3ViKGhhbGZTaXplKVxuICAgICAgKVxuICAgICAgY29uc3QgYm91bmQgPSBib3VuZFRvQXJjKFxuICAgICAgICB0aGlzLm9wdGlvbnMuY2VudGVyLnN1YihoYWxmU2l6ZSksXG4gICAgICAgIHRoaXMub3B0aW9ucy50b3VjaFJhZGl1cyxcbiAgICAgICAgdGhpcy5nZXRCb3VuZEFuZ2xlKGksIGZhbHNlKSxcbiAgICAgICAgdGhpcy5nZXRCb3VuZEFuZ2xlKGksIHRydWUpXG4gICAgICApXG5cbiAgICAgIHJldHVybiBuZXcgRHJhZ2dhYmxlKGVsZW1lbnQsIHtcbiAgICAgICAgcGFyZW50OiB0aGlzLmFyZWEsXG4gICAgICAgIGJvdW5kOiBib3VuZCxcbiAgICAgICAgcG9zaXRpb246IHBvc2l0aW9uLFxuICAgICAgICBvbk1vdmU6ICgpID0+IHtcbiAgICAgICAgICB0aGlzLmRyYXcoKVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcblxuICAgIHRoaXMuaXNJbml0ID0gdHJ1ZVxuICAgIGlmICh0aGlzLm9wdGlvbnMuaXNTZWxlY3RhYmxlKSB7XG4gICAgICB0aGlzLmluaXRTZWxlY3QoKVxuICAgIH1cbiAgICB0aGlzLmRyYXcoKVxuICB9XG5cbiAgaW5pdFNlbGVjdCgpIHtcbiAgICB0aGlzLnNldEFjdGl2ZUFyYygtMSlcblxuICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRzLnN0YXJ0LCAoZSkgPT4ge1xuICAgICAgbGV0IHBvaW50ID0gbmV3IFBvaW50KFxuICAgICAgICBpc1RvdWNoID8gZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCA6IGUuY2xpZW50WCxcbiAgICAgICAgaXNUb3VjaCA/IGUuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVkgOiBlLmNsaWVudFlcbiAgICAgIClcblxuICAgICAgaWYgKCF0aGlzLmNhbnZhc09mZnNldCkge1xuICAgICAgICB0aGlzLmNhbnZhc09mZnNldCA9IEdlb21ldHJ5LmdldE9mZnNldCh0aGlzLmNhbnZhcylcbiAgICAgIH1cblxuICAgICAgcG9pbnQgPSBwb2ludC5zdWIodGhpcy5jYW52YXNPZmZzZXQpXG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuZ2V0QXJjT25Qb2ludChwb2ludClcbiAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgdGhpcy5zZXRBY3RpdmVBcmMoKHRoaXMuYWN0aXZlQXJjSW5kZXggIT09IGluZGV4KSA/IGluZGV4IDogLTEpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHVwZGF0ZUFuZ2xlcygpIHtcbiAgICB0aGlzLmFuZ2xlcyA9IHRoaXMuZHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgY29uc3QgaGFsZlNpemUgPSBkcmFnZ2FibGUuZ2V0U2l6ZSgpLm11bHQoMC41KVxuICAgICAgcmV0dXJuIEdlb21ldHJ5LmdldEFuZ2xlKHRoaXMub3B0aW9ucy5jZW50ZXIuc3ViKGhhbGZTaXplKSwgZHJhZ2dhYmxlLnBvc2l0aW9uKVxuICAgIH0pXG4gIH1cblxuICBnZXRCb3VuZEFuZ2xlKGluZGV4LCBpc0Nsb3NzaW5nKSB7XG4gICAgY29uc3Qgc2lnbiA9IGlzQ2xvc3NpbmcgPyAxIDogLTFcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBsZXQgaSA9IChpbmRleCArIHNpZ24pICUgdGhpcy5hbmdsZXMubGVuZ3RoXG4gICAgICBpZiAoaSA8IDApIHtcbiAgICAgICAgaSArPSB0aGlzLmFuZ2xlcy5sZW5ndGhcbiAgICAgIH1cbiAgICAgIHJldHVybiBHZW9tZXRyeS5ub3JtYWxpemVBbmdsZSh0aGlzLmFuZ2xlc1tpXSAtIHNpZ24gKiB0aGlzLm9wdGlvbnMuYm91bmRBbmdsZSlcbiAgICB9XG4gIH1cblxuICBkcmF3KCkge1xuICAgIGlmICghdGhpcy5pc0luaXQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMudXBkYXRlQW5nbGVzKClcbiAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMuYXJlYVJlY3RhbmdsZS5zaXplLngsIHRoaXMuYXJlYVJlY3RhbmdsZS5zaXplLnkpXG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKF9kcmFnZ2FibGUsIGluZGV4KSA9PiB7XG4gICAgICB0aGlzLmRyYXdBcmModGhpcy5jb250ZXh0LCB0aGlzLm9wdGlvbnMuY2VudGVyLCB0aGlzLm9wdGlvbnMucmFkaXVzLCBpbmRleClcbiAgICB9KVxuXG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKF9kcmFnZ2FibGUsIGluZGV4KSA9PiB7XG4gICAgICBsZXQgZW5hYmxlSW5kZXhlc1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5pc1NlbGVjdGFibGUpIHtcbiAgICAgICAgZW5hYmxlSW5kZXhlcyA9IGdldEFycmF5V2l0aEJvdW5kSW5kZXhlcyh0aGlzLmFjdGl2ZUFyY0luZGV4LCB0aGlzLmRyYWdnYWJsZXMubGVuZ3RoKVxuICAgICAgICBpZiAoZW5hYmxlSW5kZXhlcy5pbmRleE9mKGluZGV4KSAhPT0gLTEpIHtcbiAgICAgICAgICB0aGlzLmRyYXdMaW1pdEltZyhpbmRleClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kcmF3TGltaXRJbWcoaW5kZXgpXG4gICAgICB9XG4gICAgfSlcbiAgICB0aGlzLm9uRHJhdygpXG4gIH1cblxuICBjcmVhdGVDbG9uZShlbGVtZW50LCBvcHRpb25zID0ge30pIHtcbiAgICBpZiAoIXRoaXMuaXNJbml0KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3QgcmVjdGFuZ2xlID0gR2VvbWV0cnkuY3JlYXRlUmVjdGFuZ2xlRnJvbUVsZW1lbnQoZWxlbWVudCwgZWxlbWVudClcbiAgICBjb25zdCBvcHRzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjZW50ZXI6IHJlY3RhbmdsZS5nZXRDZW50ZXIoKSxcbiAgICAgIHJhZGl1czogcmVjdGFuZ2xlLmdldE1pblNpZGUoKSAvIDIsXG4gICAgICBmaWxsU3R5bGVzOiB0aGlzLm9wdGlvbnMuZmlsbFN0eWxlc1xuICAgIH0sIG9wdGlvbnMpXG5cbiAgICBjb25zdCBjYW52YXMgPSBjcmVhdGVDYW52YXMoZWxlbWVudCwgcmVjdGFuZ2xlKVxuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuICAgIGNvbnN0IGNsb25lT2JqID0ge1xuICAgICAgZHJhdzogKCkgPT4ge1xuICAgICAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCByZWN0YW5nbGUuc2l6ZS54LCByZWN0YW5nbGUuc2l6ZS55KVxuICAgICAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoX2RyYWdnYWJsZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICB0aGlzLmRyYXdBcmMoY29udGV4dCwgb3B0cy5jZW50ZXIsIG9wdHMucmFkaXVzLCBpbmRleClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gICAgY2xvbmVPYmouZHJhdygpXG4gICAgcmV0dXJuIGNsb25lT2JqXG4gIH1cblxuICBnZXRGaWxsU3R5bGUoaW5kZXgpIHtcbiAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5maWxsU3R5bGVzW2luZGV4XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpcy5vcHRpb25zLmZpbGxTdHlsZXNbaW5kZXhdID0gdGhpcy5vcHRpb25zLmZpbGxTdHlsZXNbaW5kZXhdLmNhbGwodGhpcylcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5maWxsU3R5bGVzW2luZGV4XVxuICB9XG5cbiAgZHJhd0FyYyhjb250ZXh0LCBjZW50ZXIsIHJhZGl1cywgaW5kZXgpIHtcbiAgICBjb25zdCBzdGFydEFuZ2xlID0gdGhpcy5hbmdsZXNbaW5kZXhdXG4gICAgY29uc3QgZW5kQW5nbGUgPSB0aGlzLmFuZ2xlc1soaW5kZXgrMSkgJSB0aGlzLmFuZ2xlcy5sZW5ndGhdXG4gICAgY29uc3QgY29sb3IgPSB0aGlzLmdldEZpbGxTdHlsZShpbmRleClcblxuICAgIGNvbnRleHQuYmVnaW5QYXRoKClcbiAgICBjb250ZXh0Lm1vdmVUbyhjZW50ZXIueCwgY2VudGVyLnkpXG4gICAgY29udGV4dC5hcmMoY2VudGVyLngsIGNlbnRlci55LCByYWRpdXMsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlLCBmYWxzZSlcbiAgICBjb250ZXh0LmxpbmVUbyhjZW50ZXIueCwgY2VudGVyLnkpXG4gICAgY29udGV4dC5jbG9zZVBhdGgoKVxuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gY29sb3JcbiAgICBjb250ZXh0LmZpbGwoKVxuICB9XG5cbiAgZHJhd0xpbWl0SW1nKGluZGV4KSB7XG4gICAgbGV0IHBvaW50LCBpbWdcbiAgICBpZiAodGhpcy5vcHRpb25zLmxpbWl0SW1nKSB7XG4gICAgICBpbWcgPSB0aGlzLm9wdGlvbnMubGltaXRJbWcgaW5zdGFuY2VvZiBBcnJheSA/IHRoaXMub3B0aW9ucy5saW1pdEltZ1tpbmRleF0gOiB0aGlzLm9wdGlvbnMubGltaXRJbWdcbiAgICB9XG5cbiAgICBpZiAoaW1nKSB7XG4gICAgICBjb25zdCBhbmdsZSA9IEdlb21ldHJ5Lm5vcm1hbGl6ZUFuZ2xlKHRoaXMuYW5nbGVzW2luZGV4XSlcbiAgICAgIHBvaW50ID0gbmV3IFBvaW50KDAsIC1pbWcuaGVpZ2h0IC8gMilcbiAgICAgIHBvaW50ID0gcG9pbnQuYWRkKHRoaXMub3B0aW9ucy5saW1pdEltZ09mZnNldClcbiAgICAgIHRoaXMuY29udGV4dC50cmFuc2xhdGUodGhpcy5hcmVhUmVjdGFuZ2xlLnNpemUueCAvIDIsIHRoaXMuYXJlYVJlY3RhbmdsZS5zaXplLnkgLyAyKVxuICAgICAgdGhpcy5jb250ZXh0LnJvdGF0ZShhbmdsZSlcbiAgICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UoaW1nLCBwb2ludC54LCBwb2ludC55KVxuICAgICAgdGhpcy5jb250ZXh0LnNldFRyYW5zZm9ybSgxLCAwLCAwLCAxLCAwLCAwKVxuICAgIH1cbiAgfVxuXG4gIGdldEFuZ2xlc0RpZmYoKSB7XG4gICAgY29uc3QgYW5nbGVzID0gdGhpcy5hbmdsZXMuc2xpY2UoMSlcbiAgICBsZXQgYmFzZUFuZ2xlID0gdGhpcy5hbmdsZXNbMF1cblxuICAgIGFuZ2xlcy5wdXNoKGJhc2VBbmdsZSlcbiAgICByZXR1cm4gYW5nbGVzLm1hcCgoYW5nbGUpID0+IHtcbiAgICAgIGNvbnN0IGRpZmZBbmdsZSA9IEdlb21ldHJ5Lm5vcm1hbGl6ZUFuZ2xlKGFuZ2xlIC0gYmFzZUFuZ2xlKVxuICAgICAgYmFzZUFuZ2xlID0gYW5nbGVcbiAgICAgIHJldHVybiBkaWZmQW5nbGVcbiAgICB9KVxuICB9XG5cbiAgZ2V0UGVyY2VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRBbmdsZXNEaWZmKCkubWFwKChkaWZmQW5nbGUpID0+IGRpZmZBbmdsZSAvICgyICogTWF0aC5QSSkpXG4gIH1cblxuICBnZXRBcmNCaXNlY3RyaXhzKCkge1xuICAgIHJldHVybiB0aGlzLmdldEFuZ2xlc0RpZmYoKS5tYXAoKGRpZmZBbmdsZSwgaSkgPT4ge1xuICAgICAgcmV0dXJuIEdlb21ldHJ5Lm5vcm1hbGl6ZUFuZ2xlKHRoaXMuYW5nbGVzW2ldICsgZGlmZkFuZ2xlIC8gMilcbiAgICB9KVxuICB9XG5cbiAgZ2V0QXJjT25Qb2ludChwb2ludCkge1xuICAgIGNvbnN0IGFuZ2xlID0gR2VvbWV0cnkuZ2V0QW5nbGUodGhpcy5vcHRpb25zLmNlbnRlciwgcG9pbnQpXG4gICAgY29uc3QgcmFkaXVzID0gR2VvbWV0cnkuZ2V0RGlzdGFuY2UodGhpcy5vcHRpb25zLmNlbnRlciwgcG9pbnQpXG5cbiAgICBpZiAocmFkaXVzID4gdGhpcy5vcHRpb25zLnJhZGl1cykge1xuICAgICAgcmV0dXJuIC0xXG4gICAgfVxuXG4gICAgbGV0IG9mZnNldCA9IC0xLCBpLCBqXG4gICAgZm9yIChpID0gMDsgaSA8IHRoaXMuYW5nbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAob2Zmc2V0ID09PSAtMSB8fCB0aGlzLmFuZ2xlc1tvZmZzZXRdID4gdGhpcy5hbmdsZXNbaV0pIHtcbiAgICAgICAgb2Zmc2V0ID0gaVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGkgPSAwLCBqID0gb2Zmc2V0OyBpIDwgdGhpcy5hbmdsZXMubGVuZ3RoOyBpKyssIGogPSAoaSArIG9mZnNldCkgJSB0aGlzLmFuZ2xlcy5sZW5ndGgpIHtcbiAgICAgIGlmIChhbmdsZSA8IHRoaXMuYW5nbGVzW2pdKSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuICAgIGlmICgtLWogPCAwKSB7XG4gICAgICBqICs9IHRoaXMuYW5nbGVzLmxlbmd0aFxuICAgIH1cbiAgICByZXR1cm4galxuICB9XG5cbiAgc2V0QW5nbGVzKGFuZ2xlcykge1xuICAgIHRoaXMuYW5nbGVzID0gYW5nbGVzXG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSwgaSkgPT4ge1xuICAgICAgY29uc3QgYW5nbGUgPSB0aGlzLmFuZ2xlc1tpXVxuICAgICAgY29uc3QgaGFsZlNpemUgPSBkcmFnZ2FibGUuZ2V0U2l6ZSgpLm11bHQoMC41KVxuICAgICAgY29uc3QgcG9zaXRpb24gPSBHZW9tZXRyeS5nZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oXG4gICAgICAgIGFuZ2xlLFxuICAgICAgICB0aGlzLm9wdGlvbnMudG91Y2hSYWRpdXMsXG4gICAgICAgIHRoaXMub3B0aW9ucy5jZW50ZXIuc3ViKGhhbGZTaXplKVxuICAgICAgKVxuXG4gICAgICBkcmFnZ2FibGUubW92ZShwb3NpdGlvbiwgMCwgdHJ1ZSwgdHJ1ZSlcbiAgICB9KVxuICAgIHRoaXMuZHJhdygpXG4gIH1cblxuICBzZXRBY3RpdmVBcmMoaW5kZXgpIHtcbiAgICBjb25zdCBlbmFibGVJbmRleGVzID0gZ2V0QXJyYXlXaXRoQm91bmRJbmRleGVzKGluZGV4LCB0aGlzLmRyYWdnYWJsZXMubGVuZ3RoKVxuICAgIHRoaXMuYWN0aXZlQXJjSW5kZXggPSBpbmRleFxuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUsIGkpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5lbmFibGUgPSBlbmFibGVJbmRleGVzLmluZGV4T2YoaSkgIT09IC0xXG4gICAgfSlcbiAgICB0aGlzLmRyYXcoKVxuICB9XG59XG5cbmV4cG9ydCB7IENoYXJ0IH1cbiIsImltcG9ydCB7IGFkZENsYXNzLCByZW1vdmVDbGFzcyB9IGZyb20gJy4vdXRpbHMvY2xhc3NlcydcbmltcG9ydCBnZXREZWZhdWx0UGFyZW50IGZyb20gJy4vdXRpbHMvZ2V0ZGVmYXVsdHBhcmVudCdcbmltcG9ydCBFdmVudCBmcm9tICcuL2V2ZW50J1xuaW1wb3J0IGdldFN0eWxlUHJvcGVydHkgZnJvbSAnZGVzYW5kcm8tZ2V0LXN0eWxlLXByb3BlcnR5J1xuaW1wb3J0IHsgYm91bmRUb0VsZW1lbnQgfSBmcm9tICcuL2JvdW5kJ1xuaW1wb3J0IHsgR2VvbWV0cnksIFBvaW50LCBSZWN0YW5nbGUgfSBmcm9tICcuL2dlb21ldHJ5J1xuaW1wb3J0IHsgZGVmYXVsdFNjb3BlIH0gZnJvbSAnLi9zY29wZSdcblxuY29uc3QgRHJhZ2VlID0geyBFdmVudCB9IC8vdG9kbyByZW1vdmUgYWZ0ZXIgcmVmYWN0b3JlXG5cbmNvbnN0IGlzVG91Y2ggPSAnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3csIG1vdXNlRXZlbnRzID0ge1xuICAgIHN0YXJ0OiAnbW91c2Vkb3duJyxcbiAgICBtb3ZlOiAnbW91c2Vtb3ZlJyxcbiAgICBlbmQ6ICdtb3VzZXVwJ1xuICB9LCB0b3VjaEV2ZW50cyA9IHtcbiAgICBzdGFydDogJ3RvdWNoc3RhcnQnLFxuICAgIG1vdmU6ICd0b3VjaG1vdmUnLFxuICAgIGVuZDogJ3RvdWNoZW5kJ1xuICB9LFxuICBldmVudHMgPSBpc1RvdWNoID8gdG91Y2hFdmVudHMgOiBtb3VzZUV2ZW50cyxcbiAgZHJhZ2dhYmxlcyA9IFtdLFxuICB0cmFuc2Zvcm1Qcm9wZXJ0eSA9IGdldFN0eWxlUHJvcGVydHkoJ3RyYW5zZm9ybScpLFxuICB0cmFuc2l0aW9uUHJvcGVydHkgPSBnZXRTdHlsZVByb3BlcnR5KCd0cmFuc2l0aW9uJylcblxuZnVuY3Rpb24gZ2V0VG91Y2hCeUlEKGVsZW1lbnQsIHRvdWNoSWQpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50LmNoYW5nZWRUb3VjaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGVsZW1lbnQuY2hhbmdlZFRvdWNoZXNbaV0uaWRlbnRpZmllciA9PT0gdG91Y2hJZCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQuY2hhbmdlZFRvdWNoZXNbaV1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmZ1bmN0aW9uIHByZXZlbnREb3VibGVJbml0KGRyYWdnYWJsZSkge1xuICBjb25zdCBtZXNzYWdlID0gXCJmb3IgdGhpcyBlbGVtZW50IERyYWdlZS5EcmFnZ2FibGUgaXMgYWxyZWFkeSBleGlzdCwgZG9uJ3QgY3JlYXRlIGl0IHR3aWNlIFwiXG4gIGlmIChkcmFnZ2FibGVzLnNvbWUoKGV4aXN0aW5nKSA9PiBkcmFnZ2FibGUuZWxlbWVudCA9PT0gZXhpc3RpbmcuZWxlbWVudCkpIHtcbiAgICB0aHJvdyBtZXNzYWdlXG4gIH1cbiAgZHJhZ2dhYmxlcy5wdXNoKGRyYWdnYWJsZSlcbn1cblxuZnVuY3Rpb24gYWRkVG9EZWZhdWx0U2NvcGUoZHJhZ2dhYmxlKSB7XG4gIGRlZmF1bHRTY29wZS5hZGREcmFnZ2FibGUoZHJhZ2dhYmxlKVxufVxuXG5jbGFzcyBEcmFnZ2FibGUge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBvcHRpb25zPXt9KSB7XG4gICAgY29uc3QgcGFyZW50ID0gb3B0aW9ucy5wYXJlbnQgfHwgZ2V0RGVmYXVsdFBhcmVudChlbGVtZW50KVxuICAgIHRoaXMudGFyZ2V0cyA9IFtdXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBwYXJlbnQ6IHBhcmVudCxcbiAgICAgIGJvdW5kOiBib3VuZFRvRWxlbWVudChwYXJlbnQsIHBhcmVudCksXG4gICAgICBzdGFydEZpbHRlcjogZmFsc2UsXG4gICAgICBpc0NvbnRlbnRCb3hTaXplOiBmYWxzZSxcbiAgICAgIHBvc2l0aW9uOiBmYWxzZVxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMuaGFuZGxlciA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMuaGFuZGxlciA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihvcHRpb25zLmhhbmRsZXIpIHx8IGVsZW1lbnRcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oYW5kbGVyID0gb3B0aW9ucy5oYW5kbGVyIHx8IGVsZW1lbnRcbiAgICB9XG5cbiAgICB0aGlzLm9uRW5kID0gbmV3IERyYWdlZS5FdmVudCh0aGlzLCB7IGlzUmV2ZXJzZTogdHJ1ZSwgaXNTdG9wT25UcnVlOiB0cnVlIH0pXG4gICAgdGhpcy5vbk1vdmUgPSBuZXcgRHJhZ2VlLkV2ZW50KHRoaXMpXG4gICAgdGhpcy5vblN0YXJ0ID0gbmV3IERyYWdlZS5FdmVudCh0aGlzKVxuXG4gICAgdGhpcy5vbkVuZC5hZGQoKCkgPT4gdGhpcy5tb3ZlKHRoaXMucG9zaXRpb24sIDAsIHRydWUsIHRydWUpKVxuXG4gICAgaWYgKG9wdGlvbnMub25FbmQpIHtcbiAgICAgIHRoaXMub25FbmQuYWRkKG9wdGlvbnMub25FbmQpXG4gICAgfVxuICAgIGlmIChvcHRpb25zLm9uTW92ZSkge1xuICAgICAgdGhpcy5vbk1vdmUuYWRkKG9wdGlvbnMub25Nb3ZlKVxuICAgIH1cbiAgICBpZiAob3B0aW9ucy5vblN0YXJ0KSB7XG4gICAgICB0aGlzLm9uU3RhcnQuYWRkKG9wdGlvbnMub25TdGFydClcbiAgICB9XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIHRoaXMuYm91bmQgPSB0aGlzLm9wdGlvbnMuYm91bmRcbiAgICBwcmV2ZW50RG91YmxlSW5pdCh0aGlzKVxuICAgIERyYWdnYWJsZS5vbkNyZWF0ZS5maXJlKHRoaXMpXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5fZW5hYmxlID0gdHJ1ZVxuICAgIHRoaXMub2Zmc2V0ID0gR2VvbWV0cnkuZ2V0T2Zmc2V0KHRoaXMuZWxlbWVudCwgdGhpcy5vcHRpb25zLnBhcmVudCwgdHJ1ZSlcbiAgICB0aGlzLmZpeFBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICBpZiAodGhpcy5vcHRpb25zLnBvc2l0aW9uKSB7XG4gICAgICB0aGlzLmluaXRQb3NpdGlvbiA9IHRoaXMub3B0aW9ucy5wb3NpdGlvblxuICAgICAgdGhpcy5tb3ZlKHRoaXMuaW5pdFBvc2l0aW9uLCAwLCB0cnVlLCB0cnVlKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmluaXRQb3NpdGlvbiA9IHRoaXMub2Zmc2V0XG4gICAgfVxuICAgIHRoaXMuX2RyYWdTdGFydCA9IHRoaXMuZHJhZ1N0YXJ0LmJpbmQodGhpcylcbiAgICB0aGlzLl9kcmFnTW92ZSA9IHRoaXMuZHJhZ01vdmUuYmluZCh0aGlzKVxuICAgIHRoaXMuX2RyYWdFbmQgPSB0aGlzLmRyYWdFbmQuYmluZCh0aGlzKVxuXG4gICAgdGhpcy5oYW5kbGVyLmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydClcbiAgICB0aGlzLmhhbmRsZXIuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0KVxuXG4gICAgaWYgKHRoaXMuYm91bmQucmVmcmVzaCkge1xuICAgICAgdGhpcy5ib3VuZC5yZWZyZXNoKClcbiAgICB9XG4gIH1cblxuICByZWluaXQoKSB7XG4gICAgdGhpcy5vZmZzZXQgPSBHZW9tZXRyeS5nZXRPZmZzZXQodGhpcy5lbGVtZW50LCB0aGlzLm9wdGlvbnMucGFyZW50LCB0cnVlKVxuICAgIHRoaXMuZml4UG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICAgIGlmICh0aGlzLm9wdGlvbnMucG9zaXRpb24pIHtcbiAgICAgIHRoaXMuaW5pdFBvc2l0aW9uID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uXG4gICAgICB0aGlzLm1vdmUodGhpcy5pbml0UG9zaXRpb24sIDAsIHRydWUsIHRydWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5pdFBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICB9XG5cbiAgICBpZiAodGhpcy5ib3VuZC5yZWZyZXNoKSB7XG4gICAgICB0aGlzLmJvdW5kLnJlZnJlc2goKVxuICAgIH1cbiAgfVxuXG4gIGdldFNpemUoX3JlY2FsdWxhdGUpIHtcbiAgICByZXR1cm4gR2VvbWV0cnkuZ2V0U2l6ZU9mRWxlbWVudCh0aGlzLmVsZW1lbnQsIHRoaXMub3B0aW9ucy5pc0NvbnRlbnRCb3hTaXplKVxuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMub2Zmc2V0LmFkZCh0aGlzLl90cmFuc2Zvcm1Qb3NpdGlvbiB8fCBuZXcgUG9pbnQoMCwgMCkpXG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25cbiAgfVxuXG4gIGdldENlbnRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi5hZGQodGhpcy5nZXRTaXplKCkubXVsdCgwLjUpKVxuICB9XG5cbiAgX3NldFRyYW5zbGF0ZShwb2ludCkge1xuICAgIHRoaXMuX3RyYW5zZm9ybVBvc2l0aW9uID0gcG9pbnRcblxuICAgIGxldCB0cmFuc2Zvcm0gPSB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNmb3JtUHJvcGVydHldXG4gICAgbGV0IHRyYW5zbGF0ZUNzcyA9ICcgdHJhbnNsYXRlM2QoJyArIHBvaW50LnggKyAncHgsJyArIHBvaW50LnkgKyAncHgsIDBweCknXG5cbiAgICBjb25zdCB1YSA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50XG4gICAgY29uc3QgbXNpZSA9IHVhLmluZGV4T2YoJ01TSUUgJylcblxuICAgIGlmIChtc2llKSB7XG4gICAgICB0cmFuc2xhdGVDc3MgPSAnIHRyYW5zbGF0ZSgnICsgcG9pbnQueCArICdweCwnICsgcG9pbnQueSArICdweCknXG4gICAgICBpZiAoIS90cmFuc2xhdGVcXChbXildK1xcKS8udGVzdCh0cmFuc2Zvcm0pKSB7XG4gICAgICAgIHRyYW5zZm9ybSArPSB0cmFuc2xhdGVDc3NcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyYW5zZm9ybSA9IHRyYW5zZm9ybS5yZXBsYWNlKC90cmFuc2xhdGVcXChbXildK1xcKS8sIHRyYW5zbGF0ZUNzcylcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCEvdHJhbnNsYXRlM2RcXChbXildK1xcKS8udGVzdCh0cmFuc2Zvcm0pKSB7XG4gICAgICAgIHRyYW5zZm9ybSArPSB0cmFuc2xhdGVDc3NcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyYW5zZm9ybSA9IHRyYW5zZm9ybS5yZXBsYWNlKC90cmFuc2xhdGUzZFxcKFteKV0rXFwpLywgdHJhbnNsYXRlQ3NzKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wZXJ0eV0gPSB0cmFuc2Zvcm1cbiAgfVxuXG4gIG1vdmUocG9pbnQsIHRpbWU9MCwgaXNGaXg9ZmFsc2UsIGlzU2lsZW50PWZhbHNlKSB7XG4gICAgcG9pbnQgPSBwb2ludC5jbG9uZSgpXG4gICAgaWYgKGlzRml4KSB7XG4gICAgICB0aGlzLmZpeFBvc2l0aW9uID0gcG9pbnRcbiAgICB9XG5cbiAgICB0aGlzLmRldGVybWluZURpcmVjdGlvbihwb2ludClcblxuICAgIHRoaXMucG9zaXRpb24gPSBwb2ludFxuXG4gICAgaWYgKHRyYW5zaXRpb25Qcm9wZXJ0eSkge1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV0gPSB0aW1lICsgJ21zJ1xuICAgIH1cblxuICAgIHRoaXMuX3NldFRyYW5zbGF0ZShwb2ludC5zdWIodGhpcy5vZmZzZXQpKVxuICAgIGlmICghaXNTaWxlbnQpIHtcbiAgICAgIHRoaXMub25Nb3ZlLmZpcmUoKVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hQb3NpdGlvbiAoKSB7XG4gICAgdGhpcy5zZXRQb3NpdGlvbih0aGlzLmdldFBvc2l0aW9uKCkpXG4gIH1cblxuICBzZXRQb3NpdGlvbihwb2ludCkge1xuICAgIHBvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIHRoaXMucG9zaXRpb24gPSBwb2ludFxuXG4gICAgaWYgKHRyYW5zaXRpb25Qcm9wZXJ0eSkge1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV0gPSAnMG1zJ1xuICAgIH1cblxuICAgIHRoaXMuX3NldFRyYW5zbGF0ZShwb2ludC5zdWIodGhpcy5vZmZzZXQpKVxuICB9XG5cbiAgc2V0WmVyb1RyYW5zaXRpb24oKSB7XG4gICAgaWYgKHRyYW5zaXRpb25Qcm9wZXJ0eSkge1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV0gPSAnMG1zJ1xuICAgIH1cbiAgfVxuXG4gIGRldGVybWluZURpcmVjdGlvbihwb2ludCkge1xuICAgIHRoaXMubGVmdERpcmVjdGlvbiA9ICh0aGlzLnBvc2l0aW9uLnggPCBwb2ludC54KVxuICAgIHRoaXMucmlnaHREaXJlY3Rpb24gPSAodGhpcy5wb3NpdGlvbi54ID4gcG9pbnQueClcbiAgICB0aGlzLnVwRGlyZWN0aW9uID0gKHRoaXMucG9zaXRpb24ueSA+IHBvaW50LnkpXG4gICAgdGhpcy5kb3duRGlyZWN0aW9uID0gKHRoaXMucG9zaXRpb24ueSA8IHBvaW50LnkpXG4gIH1cblxuICBkcmFnU3RhcnQoZXZlbnQpIHtcbiAgICB0aGlzLmN1cnJlbnRFdmVudCA9IGV2ZW50XG4gICAgaWYgKCF0aGlzLl9lbmFibGUgfHwgKHRoaXMub3B0aW9ucy5zdGFydEZpbHRlciAmJiAhdGhpcy5vcHRpb25zLnN0YXJ0RmlsdGVyKGV2ZW50KSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGlzVG91Y2hFdmVudCA9IChpc1RvdWNoICYmIChldmVudCBpbnN0YW5jZW9mIHdpbmRvdy5Ub3VjaEV2ZW50KSlcblxuICAgIHRoaXMuX3N0YXJ0VG91Y2hQb2ludCA9IG5ldyBQb2ludChpc1RvdWNoRXZlbnQgPyBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCA6IGV2ZW50LmNsaWVudFgsIGlzVG91Y2hFdmVudCA/IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZIDogZXZlbnQuY2xpZW50WSlcblxuICAgIHRoaXMuX3N0YXJ0UG9zaXRpb24gPSB0aGlzLmdldFBvc2l0aW9uKClcbiAgICBpZiAoaXNUb3VjaEV2ZW50KSB7XG4gICAgICB0aGlzLl90b3VjaElkID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uaWRlbnRpZmllclxuICAgIH1cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGlmICghKGV2ZW50LnRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSW5wdXRFbGVtZW50IHx8XG4gICAgICAgICAgZXZlbnQudGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJbnB1dEVsZW1lbnQpKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfSBlbHNlIHtcbiAgICAgIGV2ZW50LnRhcmdldC5mb2N1cygpXG4gICAgfVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG5cbiAgICB0aGlzLmlzRHJhZ2dpbmcgPSB0cnVlXG5cbiAgICB0aGlzLm9uU3RhcnQuZmlyZShldmVudClcbiAgICBhZGRDbGFzcyh0aGlzLmVsZW1lbnQsICdhY3RpdmUnKVxuICAgIHRoaXMub25Nb3ZlLmZpcmUoZXZlbnQpXG4gIH1cblxuICBkcmFnTW92ZShldmVudCkge1xuICAgIHRoaXMuY3VycmVudEV2ZW50ID0gZXZlbnRcbiAgICBsZXQgdG91Y2hcblxuICAgIGNvbnN0IGlzVG91Y2hFdmVudCA9IChpc1RvdWNoICYmIChldmVudCBpbnN0YW5jZW9mIHdpbmRvdy5Ub3VjaEV2ZW50KSlcbiAgICBpZiAoaXNUb3VjaEV2ZW50KSB7XG4gICAgICB0b3VjaCA9IGdldFRvdWNoQnlJRChldmVudCwgdGhpcy5fdG91Y2hJZClcblxuICAgICAgaWYgKCF0b3VjaCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zdCB0b3VjaFBvaW50ID0gbmV3IFBvaW50KGlzVG91Y2hFdmVudCA/IHRvdWNoLnBhZ2VYIDogZXZlbnQuY2xpZW50WCwgaXNUb3VjaEV2ZW50ID8gdG91Y2gucGFnZVkgOiBldmVudC5jbGllbnRZKVxuICAgIGxldCBwb2ludCA9IHRoaXMuX3N0YXJ0UG9zaXRpb24uYWRkKHRvdWNoUG9pbnQuc3ViKHRoaXMuX3N0YXJ0VG91Y2hQb2ludCkpXG4gICAgcG9pbnQgPSB0aGlzLmJvdW5kKHBvaW50LCB0aGlzLmdldFNpemUoKSlcbiAgICB0aGlzLnRvdWNoUG9pbnQgPSB0b3VjaFBvaW50XG4gICAgdGhpcy5tb3ZlKHBvaW50LCAwKVxuICB9XG5cbiAgZHJhZ0VuZChldmVudCkge1xuICAgIGNvbnN0IGlzVG91Y2hFdmVudCA9IChpc1RvdWNoICYmIChldmVudCBpbnN0YW5jZW9mIHdpbmRvdy5Ub3VjaEV2ZW50KSlcblxuICAgIGlmIChpc1RvdWNoRXZlbnQgJiYgIWdldFRvdWNoQnlJRChldmVudCwgdGhpcy5fdG91Y2hJZCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIHRoaXMub25FbmQuZmlyZShldmVudClcblxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcblxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuXG4gICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2VcbiAgICByZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnQsICdhY3RpdmUnKVxuICB9XG5cbiAgZ2V0UmVjdGFuZ2xlKCkge1xuICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHRoaXMucG9zaXRpb24sIHRoaXMuZ2V0U2l6ZSgpKVxuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLmdldFNpemUodHJ1ZSlcbiAgICBpZiAodGhpcy5ib3VuZC5yZWZyZXNoKSB7XG4gICAgICB0aGlzLmJvdW5kLnJlZnJlc2goKVxuICAgIH1cbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5oYW5kbGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydClcbiAgICB0aGlzLmhhbmRsZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0KVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcblxuICAgIHRoaXMub25FbmQucmVzZXQoKVxuICAgIHRoaXMub25Nb3ZlLnJlc2V0KClcbiAgfVxuXG4gIGdldCBlbmFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZVxuICB9XG5cbiAgc2V0IGVuYWJsZShlbmFibGUpIHtcbiAgICBpZiAoZW5hYmxlKSB7XG4gICAgICByZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnQsICdkaXNhYmxlJylcbiAgICB9IGVsc2Uge1xuICAgICAgYWRkQ2xhc3ModGhpcy5lbGVtZW50LCAnZGlzYWJsZScpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZSA9IGVuYWJsZVxuICB9XG59XG5cbkRyYWdnYWJsZS5vbkNyZWF0ZSA9IG5ldyBEcmFnZWUuRXZlbnQoRHJhZ2dhYmxlLCB7IGlzUmV2ZXJzZTogdHJ1ZSwgaXNTdG9wT25UcnVlOiB0cnVlIH0pXG5EcmFnZ2FibGUub25DcmVhdGUuYWRkKGFkZFRvRGVmYXVsdFNjb3BlKVxuXG5leHBvcnQgeyBEcmFnZ2FibGUsIGV2ZW50cyB9XG4iLCIndXNlIHN0cmljdCdcblxuZnVuY3Rpb24gRXZlbnQoY29udGV4dCwgb3B0aW9ucyA9IHt9KSB7XG4gIHRoaXMuZnVuY3MgPSBbXVxuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0XG4gIHRoaXMuaXNSZXZlcnNlID0gb3B0aW9ucy5pc1JldmVyc2UgfHwgZmFsc2VcbiAgdGhpcy5pc1N0b3BPblRydWUgPSBvcHRpb25zLmlzU3RvcE9uVHJ1ZSB8fCBmYWxzZVxufVxuXG5FdmVudC5wcm90b3R5cGUuZmlyZSA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpXG4gIGNvbnN0IGZzID0gdGhpcy5pc1JldmVyc2UgPyB0aGlzLmZ1bmNzLnNsaWNlKCkucmV2ZXJzZSgpIDogdGhpcy5mdW5jc1xuICBsZXQgcmV0VmFsdWVcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGZzLmxlbmd0aDsgaSsrKSB7XG4gICAgcmV0VmFsdWUgPSBmc1tpXS5hcHBseSh0aGlzLmNvbnRleHQsIGFyZ3MpXG4gICAgaWYgKHRoaXMuaXNTdG9wT25UcnVlICYmIHJldFZhbHVlKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgfVxuICByZXR1cm4gIXRoaXMuaXNTdG9wT25UcnVlXG59XG5cbkV2ZW50LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbihmKSB7XG4gIHRoaXMuZnVuY3MucHVzaChmKVxufVxuXG5FdmVudC5wcm90b3R5cGUudW5zaGlmdCA9IGZ1bmN0aW9uKGYpIHtcbiAgdGhpcy5mdW5jcy51bnNoaWZ0KGYpXG59XG5cbkV2ZW50LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbihmKSB7XG4gIGNvbnN0IGluZGV4ID0gdGhpcy5mdW5jcy5pbmRleE9mKGYpXG4gIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICB0aGlzLmZ1bmNzLnNwbGljZShpbmRleCwgMSlcbiAgfVxufVxuXG5FdmVudC5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbihfZikge1xuICB0aGlzLmZ1bmNzID0gW11cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRcbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKiAwMFAgKioqKioqKioqKioqKioqKioqKioqKioqKi9cbmNvbnN0IGF1Z21lbnQgPSBmdW5jdGlvbihyZWNlaXZpbmdDbGFzcywgZ2l2aW5nQ2xhc3MpIHtcbiAgICAvKiBvbmx5IHByb3ZpZGUgY2VydGFpbiBtZXRob2RzICovXG4gIGlmIChhcmd1bWVudHNbMl0pIHtcbiAgICBmb3IgKGxldCBpPTIsIGxlbj1hcmd1bWVudHMubGVuZ3RoOyBpPGxlbjsgaSsrKSB7XG4gICAgICByZWNlaXZpbmdDbGFzcy5wcm90b3R5cGVbYXJndW1lbnRzW2ldXSA9IGdpdmluZ0NsYXNzLnByb3RvdHlwZVthcmd1bWVudHNbaV1dXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZvciAoY29uc3QgbWV0aG9kTmFtZSBpbiBnaXZpbmdDbGFzcy5wcm90b3R5cGUpIHtcbiAgICAgIC8qIGNoZWNrIHRvIG1ha2Ugc3VyZSB0aGUgcmVjZWl2aW5nIGNsYXNzIGRvZXNuJ3RcbiAgICAgICAgIGhhdmUgYSBtZXRob2Qgb2YgdGhlIHNhbWUgbmFtZSBhcyB0aGUgb25lIGN1cnJlbnRseVxuICAgICAgICAgYmVpbmcgcHJvY2Vzc2VkICovXG4gICAgICBpZiAoIXJlY2VpdmluZ0NsYXNzLnByb3RvdHlwZVttZXRob2ROYW1lXSkge1xuICAgICAgICByZWNlaXZpbmdDbGFzcy5wcm90b3R5cGVbbWV0aG9kTmFtZV0gPSBnaXZpbmdDbGFzcy5wcm90b3R5cGVbbWV0aG9kTmFtZV1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbmF1Z21lbnQoTm9kZUxpc3QsIEFycmF5LCAnZm9yRWFjaCcpXG4iLCJjbGFzcyBQb2ludCB7XG4gIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICB0aGlzLnggPSB4XG4gICAgdGhpcy55ID0geVxuICB9XG5cbiAgYWRkKHApIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCArIHAueCwgdGhpcy55ICsgcC55KVxuICB9XG5cbiAgc3ViKHApIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCAtIHAueCwgdGhpcy55IC0gcC55KVxuICB9XG5cbiAgbXVsdChrKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnggKiBrLCB0aGlzLnkgKiBrKVxuICB9XG5cbiAgbmVnYXRpdmUoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCgtdGhpcy54LCAtdGhpcy55KVxuICB9XG5cbiAgY29tcGFyZShwKSB7XG4gICAgcmV0dXJuICh0aGlzLnggPT09IHAueCAmJiB0aGlzLnkgPT09IHAueSlcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54LCB0aGlzLnkpXG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gYHt4PSR7dGhpcy54fSx5PSR7dGhpcy55fWBcbiAgfVxufVxuXG5jbGFzcyBSZWN0YW5nbGUge1xuICBjb25zdHJ1Y3Rvcihwb3NpdGlvbiwgc2l6ZSkge1xuICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvblxuICAgIHRoaXMuc2l6ZSA9IHNpemVcbiAgfVxuXG4gIGdldFAxKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uXG4gIH1cblxuICBnZXRQMigpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54LCB0aGlzLnBvc2l0aW9uLnkpXG4gIH1cblxuICBnZXRQMygpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi5hZGQodGhpcy5zaXplKVxuICB9XG5cbiAgZ2V0UDQoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55KVxuICB9XG5cbiAgZ2V0Q2VudGVyKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLnNpemUubXVsdCgwLjUpKVxuICB9XG5cbiAgb3IocmVjdCkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gbmV3IFBvaW50KE1hdGgubWluKHRoaXMucG9zaXRpb24ueCwgcmVjdC5wb3NpdGlvbi54KSwgTWF0aC5taW4odGhpcy5wb3NpdGlvbi55LCByZWN0LnBvc2l0aW9uLnkpKVxuICAgIGNvbnN0IHNpemUgPSAobmV3IFBvaW50KE1hdGgubWF4KHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54LCByZWN0LnBvc2l0aW9uLnggKyByZWN0LnNpemUueCksIE1hdGgubWF4KHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55LCByZWN0LnBvc2l0aW9uLnkgKyByZWN0LnNpemUueSkpKS5zdWIocG9zaXRpb24pXG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUocG9zaXRpb24sIHNpemUpXG4gIH1cblxuICBhbmQocmVjdCkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gbmV3IFBvaW50KE1hdGgubWF4KHRoaXMucG9zaXRpb24ueCwgcmVjdC5wb3NpdGlvbi54KSwgTWF0aC5tYXgodGhpcy5wb3NpdGlvbi55LCByZWN0LnBvc2l0aW9uLnkpKVxuICAgIGNvbnN0IHNpemUgPSAobmV3IFBvaW50KE1hdGgubWluKHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54LCByZWN0LnBvc2l0aW9uLnggKyByZWN0LnNpemUueCksIE1hdGgubWluKHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55LCByZWN0LnBvc2l0aW9uLnkgKyByZWN0LnNpemUueSkpKS5zdWIocG9zaXRpb24pXG4gICAgaWYgKHNpemUueCA8PSAwIHx8IHNpemUueSA8PSAwKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZShwb3NpdGlvbiwgc2l6ZSlcbiAgfVxuXG4gIGluY2x1ZGVQb2ludChwKSB7XG4gICAgcmV0dXJuICEodGhpcy5wb3NpdGlvbi54ID4gcC54IHx8IHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54IDwgcC54IHx8IHRoaXMucG9zaXRpb24ueSA+IHAueSB8fCB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSA8IHAueSlcbiAgfVxuXG4gIGluY2x1ZGVSZWN0YW5nbGUocmVjdGFuZ2xlKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5jbHVkZVBvaW50KHJlY3RhbmdsZS5wb3NpdGlvbikgJiYgdGhpcy5pbmNsdWRlUG9pbnQocmVjdGFuZ2xlLmdldFAzKCkpXG4gIH1cblxuICBtb3ZlVG9Cb3VuZChyZWN0LCBheGlzKSB7XG4gICAgbGV0IHNlbEF4aXMsIGNyb3NzUmVjdGFuZ2xlXG4gICAgaWYgKGF4aXMpIHtcbiAgICAgIHNlbEF4aXMgPSBheGlzXG4gICAgfSBlbHNlIHtcbiAgICAgIGNyb3NzUmVjdGFuZ2xlID0gdGhpcy5hbmQocmVjdClcbiAgICAgIGlmICghY3Jvc3NSZWN0YW5nbGUpIHtcbiAgICAgICAgcmV0dXJuIHJlY3RcbiAgICAgIH1cbiAgICAgIHNlbEF4aXMgPSBjcm9zc1JlY3RhbmdsZS5zaXplLnggPiBjcm9zc1JlY3RhbmdsZS5zaXplLnkgPyAneScgOiAneCdcbiAgICB9XG4gICAgY29uc3QgdGhpc0NlbnRlciA9IHRoaXMuZ2V0Q2VudGVyKClcbiAgICBjb25zdCByZWN0Q2VudGVyID0gcmVjdC5nZXRDZW50ZXIoKVxuICAgIGNvbnN0IHNpZ24gPSB0aGlzQ2VudGVyW3NlbEF4aXNdID4gcmVjdENlbnRlcltzZWxBeGlzXSA/IC0xIDogMVxuICAgIGNvbnN0IG9mZnNldCA9IHNpZ24gPiAwID8gdGhpcy5wb3NpdGlvbltzZWxBeGlzXSArIHRoaXMuc2l6ZVtzZWxBeGlzXSAtIHJlY3QucG9zaXRpb25bc2VsQXhpc10gOiB0aGlzLnBvc2l0aW9uW3NlbEF4aXNdIC0gKHJlY3QucG9zaXRpb25bc2VsQXhpc10gKyByZWN0LnNpemVbc2VsQXhpc10pXG4gICAgcmVjdC5wb3NpdGlvbltzZWxBeGlzXSA9IHJlY3QucG9zaXRpb25bc2VsQXhpc10gKyBvZmZzZXRcbiAgICByZXR1cm4gcmVjdFxuICB9XG5cbiAgZ2V0U3F1YXJlKCkge1xuICAgIHJldHVybiB0aGlzLnNpemUueCAqIHRoaXMuc2l6ZS55XG4gIH1cblxuICBzdHlsZUFwcGx5KGVsKSB7XG4gICAgZWwgPSBlbCB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbmQnKVxuICAgIGVsLnN0eWxlLmxlZnQgPSB0aGlzLnBvc2l0aW9uLnggKyAncHgnXG4gICAgZWwuc3R5bGUudG9wID0gdGhpcy5wb3NpdGlvbi55ICsgJ3B4J1xuICAgIGVsLnN0eWxlLndpZHRoID0gdGhpcy5zaXplLnggKyAncHgnXG4gICAgZWwuc3R5bGUuaGVpZ2h0ID0gdGhpcy5zaXplLnkgKyAncHgnXG4gIH1cblxuICBncm93dGgoc2l6ZSkge1xuICAgIHRoaXMuc2l6ZSA9IHRoaXMuc2l6ZS5hZGQoc2l6ZSlcbiAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbi5hZGQoc2l6ZS5tdWx0KC0wLjUpKVxuICB9XG5cbiAgZ2V0TWluU2lkZSgpIHtcbiAgICByZXR1cm4gTWF0aC5taW4odGhpcy5zaXplLngsIHRoaXMuc2l6ZS55KVxuICB9XG59XG5cbi8qKioqKioqKioqKioqKioqKi9cbmNvbnN0IEdlb21ldHJ5ID0ge1xuICBnZXREaXN0YW5jZShwMSwgcDIpIHtcbiAgICBjb25zdCBkeCA9IHAxLnggLSBwMi54LCBkeSA9IHAxLnkgLSBwMi55XG4gICAgcmV0dXJuIE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSlcbiAgfSxcbiAgZGlzdGFuY2UocDEsIHAyKSB7XG4gICAgcmV0dXJuIEdlb21ldHJ5LmdldERpc3RhbmNlKHAxLCBwMilcbiAgfSxcbiAgZ2V0WERpZmZlcmVuY2UocDEsIHAyKSB7XG4gICAgcmV0dXJuIE1hdGguYWJzKHAxLnggLSBwMi54KVxuICB9LFxuICBnZXRZRGlmZmVyZW5jZShwMSwgcDIpIHtcbiAgICByZXR1cm4gTWF0aC5hYnMocDEueSAtIHAyLnkpXG4gIH0sXG4gIHRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3Rvcnkob3B0aW9ucykge1xuICAgIHJldHVybiAocDEsIHAyKSA9PiB7XG4gICAgICByZXR1cm4gTWF0aC5zcXJ0KFxuICAgICAgICBNYXRoLnBvdyhvcHRpb25zLnggKiBNYXRoLmFicyhwMS54IC0gcDIueCksIDIpICtcbiAgICAgICAgTWF0aC5wb3cob3B0aW9ucy55ICogTWF0aC5hYnMocDEueSAtIHAyLnkpLCAyKVxuICAgICAgKVxuICAgIH1cbiAgfSxcbiAgaW5kZXhPZk5lYXJlc3RQb2ludChhcnIsIHZhbCwgcmFkaXVzLCBnZXREaXN0YW5jZSkge1xuICAgIGxldCBzaXplLCBpbmRleCA9IDAsIGksIHRlbXBcbiAgICBnZXREaXN0YW5jZSA9IGdldERpc3RhbmNlIHx8IEdlb21ldHJ5LmdldERpc3RhbmNlXG4gICAgaWYgKGFyci5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiAtMVxuICAgIH1cbiAgICBzaXplID0gZ2V0RGlzdGFuY2UoYXJyWzBdLCB2YWwpXG4gICAgZm9yIChpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgdGVtcCA9IGdldERpc3RhbmNlKGFycltpXSwgdmFsKVxuICAgICAgaWYgKHRlbXAgPCBzaXplKSB7XG4gICAgICAgIHNpemUgPSB0ZW1wXG4gICAgICAgIGluZGV4ID0gaVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAocmFkaXVzID49IDAgJiYgc2l6ZSA+IHJhZGl1cykge1xuICAgICAgcmV0dXJuIC0xXG4gICAgfVxuICAgIHJldHVybiBpbmRleFxuICB9LFxuICBib3VuZChtaW4sIG1heCwgdmFsKSB7XG4gICAgcmV0dXJuIE1hdGgubWF4KG1pbiwgTWF0aC5taW4obWF4LCB2YWwpKVxuICB9LFxuICBib3VuZFBvaW50KG1pbiwgbWF4LCB2YWwpIHtcbiAgICBjb25zdCB4ID0gTWF0aC5tYXgobWluLngsIE1hdGgubWluKG1heC54LCB2YWwueCkpXG4gICAgY29uc3QgeSA9IE1hdGgubWF4KG1pbi55LCBNYXRoLm1pbihtYXgueSwgdmFsLnkpKVxuICAgIHJldHVybiBuZXcgUG9pbnQoeCwgeSlcbiAgfSxcbiAgICAvL1JldHVybiBjcm9zc2luZyBwb2ludCBvZiB0d28gbGluZXNcbiAgZGlyZWN0Q3Jvc3NpbmcoTDFQMSwgTDFQMiwgTDJQMSwgTDJQMikge1xuICAgIGxldCB0ZW1wLCBrMSwgazIsIGIxLCBiMiwgeCwgeVxuICAgIGlmIChMMlAxLnggPT09IEwyUDIueCkge1xuICAgICAgdGVtcCA9IEwyUDFcbiAgICAgIEwyUDEgPSBMMVAxXG4gICAgICBMMVAxID0gdGVtcFxuICAgICAgdGVtcCA9IEwyUDJcbiAgICAgIEwyUDIgPSBMMVAyXG4gICAgICBMMVAyID0gdGVtcFxuICAgIH1cbiAgICBpZiAoTDFQMS54ID09PSBMMVAyLngpIHtcbiAgICAgIGsyID0gKEwyUDIueSAtIEwyUDEueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgICAgYjIgPSAoTDJQMi54ICogTDJQMS55IC0gTDJQMS54ICogTDJQMi55KSAvIChMMlAyLnggLSBMMlAxLngpXG4gICAgICB4ID0gTDFQMS54XG4gICAgICB5ID0geCAqIGsyICsgYjJcbiAgICAgIHJldHVybiBuZXcgUG9pbnQoeCwgeSlcbiAgICB9IGVsc2Uge1xuICAgICAgazEgPSAoTDFQMi55IC0gTDFQMS55KSAvIChMMVAyLnggLSBMMVAxLngpXG4gICAgICBiMSA9IChMMVAyLnggKiBMMVAxLnkgLSBMMVAxLnggKiBMMVAyLnkpIC8gKEwxUDIueCAtIEwxUDEueClcbiAgICAgIGsyID0gKEwyUDIueSAtIEwyUDEueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgICAgYjIgPSAoTDJQMi54ICogTDJQMS55IC0gTDJQMS54ICogTDJQMi55KSAvIChMMlAyLnggLSBMMlAxLngpXG4gICAgICB4ID0gKGIxIC0gYjIpIC8gKGsyIC0gazEpXG4gICAgICB5ID0geCAqIGsxICsgYjFcbiAgICAgIHJldHVybiBuZXcgUG9pbnQoeCwgeSlcbiAgICB9XG4gIH0sXG4gIGJvdW5kVG9TZWdtZW50KExQMSwgTFAyLCBQKSB7XG4gICAgbGV0IHgsIHlcbiAgICB4ID0gR2VvbWV0cnkuYm91bmQoTWF0aC5taW4oTFAxLngsIExQMi54KSwgTWF0aC5tYXgoTFAxLngsIExQMi54KSwgUC54KVxuICAgIGlmICh4ICE9PSBQLngpIHtcbiAgICAgIHkgPSAoeCA9PT0gTFAxLngpID8gTFAxLnkgOiBMUDIueVxuICAgICAgUCA9IG5ldyBQb2ludCh4LCB5KVxuICAgIH1cblxuICAgIHkgPSBHZW9tZXRyeS5ib3VuZChNYXRoLm1pbihMUDEueSwgTFAyLnkpLCBNYXRoLm1heChMUDEueSwgTFAyLnkpLCBQLnkpXG4gICAgaWYgKHkgIT09IFAueSkge1xuICAgICAgeCA9ICh5ID09PSBMUDEueSkgPyBMUDEueCA6IExQMi54XG4gICAgICBQID0gbmV3IFBvaW50KHgsIHkpXG4gICAgfVxuXG4gICAgcmV0dXJuIFBcbiAgfSxcbiAgYm91bmRUb0xpbmUoQSwgQiwgUCkge1xuICAgIGNvbnN0IEFQID0gbmV3IFBvaW50KFAueCAtIEEueCwgUC55IC0gQS55KSxcbiAgICAgIEFCID0gbmV3IFBvaW50KEIueCAtIEEueCwgQi55IC0gQS55KSxcbiAgICAgIGFiMiA9IEFCLnggKiBBQi54ICsgQUIueSAqIEFCLnksXG4gICAgICBhcF9hYiA9IEFQLnggKiBBQi54ICsgQVAueSAqIEFCLnksXG4gICAgICB0ID0gYXBfYWIgLyBhYjJcbiAgICByZXR1cm4gbmV3IFBvaW50KEEueCArIEFCLnggKiB0LCBBLnkgKyBBQi55ICogdClcbiAgfSxcbiAgZ2V0UG9pbnRJbkxpbmUoTFAxLCBMUDIsIHBlcmNlbnQpIHtcbiAgICBjb25zdCBkeCA9IExQMi54IC0gTFAxLngsIGR5ID0gTFAyLnkgLSBMUDEueVxuICAgIHJldHVybiBuZXcgUG9pbnQoTFAxLnggKyBwZXJjZW50ICogZHgsIExQMS55ICsgcGVyY2VudCAqIGR5KVxuICB9LFxuICBnZXRQb2ludEluTGluZUJ5TGVuZ2h0KExQMSwgTFAyLCBsZW5naHQpIHtcbiAgICBjb25zdCBkeCA9IExQMi54IC0gTFAxLngsIGR5ID0gTFAyLnkgLSBMUDEueSwgcGVyY2VudCA9IGxlbmdodCAvIEdlb21ldHJ5LmRpc3RhbmNlKExQMSwgTFAyKVxuICAgIHJldHVybiBuZXcgUG9pbnQoTFAxLnggKyBwZXJjZW50ICogZHgsIExQMS55ICsgcGVyY2VudCAqIGR5KVxuICB9LFxuICBjcmVhdGVSZWN0YW5nbGVGcm9tRWxlbWVudChlbCwgcGFyZW50LCBpc0NvbnRlbnRCb3hTaXplLCBpc0NvbnNpZGVyVHJhbnNsYXRlKSB7XG4gICAgY29uc3Qgc2l6ZSA9IHRoaXMuZ2V0U2l6ZU9mRWxlbWVudChlbCwgaXNDb250ZW50Qm94U2l6ZSlcbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZSh0aGlzLmdldE9mZnNldChlbCwgcGFyZW50IHx8IGVsLnBhcmVudE5vZGUsIGlzQ29uc2lkZXJUcmFuc2xhdGUpLCBzaXplKVxuICB9LFxuICBnZXRTdW1WYWx1ZU9mU3R5bGVSdWxlKGVsZW1lbnQsIHJ1bGVzKSB7XG4gICAgcmV0dXJuIHJ1bGVzLnJlZHVjZSgoc3VtLCBydWxlKSA9PiB7XG4gICAgICByZXR1cm4gc3VtICsgcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudClbcnVsZV18fDApXG4gICAgfSwgMClcbiAgfSxcbiAgZ2V0U2l6ZU9mRWxlbWVudChlbCwgaXNDb250ZW50Qm94U2l6ZSkge1xuICAgIGxldCB3aWR0aCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKVsnd2lkdGgnXSksIGhlaWdodCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKVsnaGVpZ2h0J10pXG4gICAgaWYgKCFpc0NvbnRlbnRCb3hTaXplKSB7XG4gICAgICB3aWR0aCArPSB0aGlzLmdldFN1bVZhbHVlT2ZTdHlsZVJ1bGUoZWwsIFsncGFkZGluZy1sZWZ0JywgJ3BhZGRpbmctcmlnaHQnLCAnYm9yZGVyLWxlZnQtd2lkdGgnLCAnYm9yZGVyLXJpZ2h0LXdpZHRoJ10pXG4gICAgICBoZWlnaHQgKz0gdGhpcy5nZXRTdW1WYWx1ZU9mU3R5bGVSdWxlKGVsLCBbJ3BhZGRpbmctdG9wJywgJ3BhZGRpbmctYm90dG9tJywgJ2JvcmRlci10b3Atd2lkdGgnLCAnYm9yZGVyLWJvdHRvbS13aWR0aCddKVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFBvaW50KHdpZHRoLCBoZWlnaHQpXG4gIH0sXG4gIGdldE9mZnNldChlbCwgcGFyZW50KSB7XG4gICAgY29uc3QgZWxSZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksIHBhcmVudFJlY3QgPSBwYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICByZXR1cm4gbmV3IFBvaW50KGVsUmVjdC5sZWZ0IC0gcGFyZW50UmVjdC5sZWZ0LCBlbFJlY3QudG9wIC0gcGFyZW50UmVjdC50b3ApXG4gIH0sXG4gIGdldFBvaW50RnJvbVJhZGlhbFN5c3RlbShhbmdsZSwgbGVuZ3RoLCBjZW50ZXIpIHtcbiAgICBjZW50ZXIgPSBjZW50ZXIgfHwgbmV3IFBvaW50KDAsIDApXG4gICAgcmV0dXJuIGNlbnRlci5hZGQobmV3IFBvaW50KGxlbmd0aCAqIE1hdGguY29zKGFuZ2xlKSwgbGVuZ3RoICogTWF0aC5zaW4oYW5nbGUpKSlcbiAgfSxcbiAgYWRkUG9pbnRUb0JvdW5kUG9pbnRzKGJvdW5kcG9pbnRzLCBwb2ludCwgaXNSaWdodCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGJvdW5kcG9pbnRzLmZpbHRlcihmdW5jdGlvbihiUG9pbnQpIHtcbiAgICAgIHJldHVybiAgYlBvaW50LnkgPiBwb2ludC55IHx8IChpc1JpZ2h0ID8gYlBvaW50LnggPCBwb2ludC54IDogYlBvaW50LnggPiBwb2ludC54KVxuICAgIH0pXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHBvaW50LnkgPCByZXN1bHRbaV0ueSkge1xuICAgICAgICByZXN1bHQuc3BsaWNlKGksIDAsIHBvaW50KVxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC5wdXNoKHBvaW50KVxuICAgIHJldHVybiByZXN1bHRcbiAgfSxcbiAgZ2V0QW5nbGUocDEsIHAyKSB7XG4gICAgY29uc3QgZGlmZiA9IHAyLnN1YihwMSlcbiAgICByZXR1cm4gdGhpcy5ub3JtYWxpemVBbmdsZShNYXRoLmF0YW4yKGRpZmYueSwgZGlmZi54KSlcbiAgfSxcbiAgdG9SYWRpYW4oYW5nbGUpIHtcbiAgICByZXR1cm4gKChhbmdsZSAlIDM2MCkgKiBNYXRoLlBJIC8gMTgwKVxuICB9LFxuICB0b0RlZ3JlZShhbmdsZSkge1xuICAgIHJldHVybiAoYW5nbGUgKiAxODAgLyBNYXRoLlBJKSAlIDM2MFxuICB9LFxuICBib3VuZEFuZ2xlKG1pbiwgbWF4LCB2YWwpIHtcbiAgICBsZXQgZG1pbiwgZG1heFxuICAgIGlmIChtaW4gPCBtYXggJiYgdmFsID4gbWluICYmIHZhbCA8IG1heCkge1xuICAgICAgcmV0dXJuIHZhbFxuICAgIH0gZWxzZSBpZiAobWF4IDwgbWluICYmICh2YWwgPCBtYXggfHwgdmFsID4gbWluKSkge1xuICAgICAgcmV0dXJuIHZhbFxuICAgIH0gZWxzZSB7XG4gICAgICBkbWluID0gdGhpcy5nZXRBbmdsZURpZmYobWluLCB2YWwpXG4gICAgICBkbWF4ID0gdGhpcy5nZXRBbmdsZURpZmYobWF4LCB2YWwpXG4gICAgICBpZiAoZG1pbiA8IGRtYXgpIHtcbiAgICAgICAgcmV0dXJuIG1pblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG1heFxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgZ2V0TmVhcmVzdEFuZ2xlKGFyciwgYW5nbGUpIHtcbiAgICBsZXQgaSwgdGVtcCwgZGlmZiA9IE1hdGguUEkgKiAyLCB2YWx1ZVxuICAgIGZvciAoaSA9IDA7IGkgPCBhcnIubGVuZ3RoO2krKykge1xuICAgICAgdGVtcCA9IEdlb21ldHJ5LmdldEFuZ2xlRGlmZihhcnJbaV0sIGFuZ2xlKVxuICAgICAgaWYgKGRpZmYgPCB0ZW1wKSB7XG4gICAgICAgIGRpZmYgPSB0ZW1wXG4gICAgICAgIHZhbHVlID0gYXJyW2ldXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZVxuICB9LFxuICBnZXRBbmdsZURpZmYoYWxwaGEsIGJldGEpIHtcbiAgICBjb25zdCBtaW5BbmdsZSA9IE1hdGgubWluKGFscGhhLCBiZXRhKSxcbiAgICAgIG1heEFuZ2xlID0gIE1hdGgubWF4KGFscGhhLCBiZXRhKVxuICAgIHJldHVybiBNYXRoLm1pbihtYXhBbmdsZSAtIG1pbkFuZ2xlLCBtaW5BbmdsZSArIE1hdGguUEkqMiAtIG1heEFuZ2xlKVxuICB9LFxuICBub3JtYWxpemVBbmdsZSh2YWwpIHtcbiAgICB3aGlsZSAodmFsIDwgMCkge1xuICAgICAgdmFsICs9IDIgKiBNYXRoLlBJXG4gICAgfVxuICAgIHdoaWxlICh2YWwgPiAyICogTWF0aC5QSSkge1xuICAgICAgdmFsIC09IDIgKiBNYXRoLlBJXG4gICAgfVxuICAgIHJldHVybiB2YWxcbiAgfVxufVxuXG5leHBvcnQgeyBQb2ludCwgUmVjdGFuZ2xlLCBHZW9tZXRyeSB9XG4iLCJpbXBvcnQgJy4vZXhwYW5kbmF0aXZlJ1xuaW1wb3J0IHsgUG9pbnQsIFJlY3RhbmdsZSwgR2VvbWV0cnkgfSBmcm9tICcuL2dlb21ldHJ5J1xuaW1wb3J0IHsgRHJhZ2dhYmxlIH0gZnJvbSAnLi9kcmFnZ2FibGUnXG5pbXBvcnQgeyBMaXN0LCBsaXN0RmFjdG9yeSB9IGZyb20gJy4vbGlzdCdcbmltcG9ydCB7IFNvcnRhYmxlLCBzb3J0YWJsZUZhY3RvcnkgfSBmcm9tICcuL3NvcnRhYmxlJ1xuaW1wb3J0IHsgVGFyZ2V0IH0gZnJvbSAnLi90YXJnZXQnXG5pbXBvcnQgeyBzY29wZXMsIGRlZmF1bHRTY29wZSwgU2NvcGUsIHNjb3BlRmFjdG9yeSwgc2NvcGUgfSBmcm9tICcuL3Njb3BlJ1xuaW1wb3J0IHsgcG9zaXRpb25UeXBlLCBzb3J0aW5nRmFjdG9yeSwgcG9zaXRpb25GYWN0b3J5ICB9IGZyb20gJy4vcG9zaXRpb25pbmcnXG5pbXBvcnQgeyBTcGlkZXIgfSBmcm9tICcuL3NwaWRlcidcbmltcG9ydCB7IEFyY1NsaWRlciB9IGZyb20gJy4vYXJjc2xpZGVyJ1xuaW1wb3J0IHsgQ2hhcnQgfSBmcm9tICcuL2NoYXJ0J1xuaW1wb3J0IHsgbGlzdFN3aXRjaGVyRmFjdG9yeSwgTGlzdFN3aXRjaGVyIH0gZnJvbSAnLi9saXN0c3dpdGNoZXInXG5cbmV4cG9ydCB7IERyYWdnYWJsZSxcbiAgUG9pbnQsIFJlY3RhbmdsZSwgR2VvbWV0cnksXG4gIExpc3QsIGxpc3RGYWN0b3J5LFxuICBTb3J0YWJsZSwgc29ydGFibGVGYWN0b3J5LFxuICBUYXJnZXQsXG4gIHNjb3BlcywgZGVmYXVsdFNjb3BlLCBTY29wZSwgc2NvcGVGYWN0b3J5LCBzY29wZSxcbiAgcG9zaXRpb25UeXBlLCBzb3J0aW5nRmFjdG9yeSwgcG9zaXRpb25GYWN0b3J5LFxuICBTcGlkZXIsXG4gIEFyY1NsaWRlcixcbiAgQ2hhcnQsXG4gIGxpc3RTd2l0Y2hlckZhY3RvcnksIExpc3RTd2l0Y2hlclxufVxuIiwiaW1wb3J0IHJlbW92ZUl0ZW1zIGZyb20gJ3JlbW92ZS1hcnJheS1pdGVtcydcbmltcG9ydCBFdmVudCBmcm9tICcuL2V2ZW50J1xuaW1wb3J0IHsgR2VvbWV0cnkgfSBmcm9tICcuL2dlb21ldHJ5J1xuaW1wb3J0IHsgRHJhZ2dhYmxlIH0gZnJvbSAnLi9kcmFnZ2FibGUnXG5cbmNvbnN0IERyYWdlZSA9IHsgRXZlbnQgfSAvL3RvZG8gcmVtb3ZlIGFmdGVyIHJlZmFjdG9yZVxuXG5jbGFzcyBMaXN0IHtcbiAgY29uc3RydWN0b3IoZHJhZ2dhYmxlcywgb3B0aW9ucz17fSkge1xuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgdGltZUVuZDogMjAwLFxuICAgICAgdGltZUV4Y2FuZ2U6IDQwMCxcbiAgICAgIHJhZGl1czogMzAsXG4gICAgICBnZXREaXN0YW5jZTogR2VvbWV0cnkuZ2V0RGlzdGFuY2UsXG4gICAgICBpc0Rpc3BsYWNlbWVudDogZmFsc2UsXG4gICAgICBpc1NvcnRhYmxlOiB0cnVlXG4gICAgfSwgb3B0aW9ucylcblxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZXNcbiAgICB0aGlzLm9uQ2hhbmdlID0gbmV3IERyYWdlZS5FdmVudCh0aGlzKVxuICAgIGlmIChvcHRpb25zLm9uQ2hhbmdlKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlLmFkZChvcHRpb25zLm9uQ2hhbmdlKVxuICAgIH1cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLl9lbmFibGUgPSB0cnVlXG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2godGhpcy5pbml0RHJhZ2dhYmxlLCB0aGlzKVxuICB9XG5cbiAgaW5pdERyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICBsZXQgbW92ZUhhbmRsZXJcbiAgICBjb25zdCBsaXN0ID0gdGhpc1xuXG4gICAgZHJhZ2dhYmxlLmVuYWJsZSA9IHRoaXMuX2VuYWJsZVxuICAgIGlmICh0aGlzLm9wdGlvbnMuaXNEaXNwbGFjZW1lbnQpIHtcbiAgICAgIG1vdmVIYW5kbGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChkcmFnZ2FibGUuaXNEcmFnZ2luZykge1xuICAgICAgICAgIGxpc3Qub25TdGFydChkcmFnZ2FibGUpXG4gICAgICAgICAgZHJhZ2dhYmxlLm9uTW92ZS5yZW1vdmUobW92ZUhhbmRsZXIpXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBkcmFnZ2FibGUub25FbmQuYWRkKCgpID0+IHtcbiAgICAgICAgdGhpcy5vbkVuZERpc3BsYXljZW1lbnQoZHJhZ2dhYmxlKVxuICAgICAgICBkcmFnZ2FibGUub25Nb3ZlLmFkZChtb3ZlSGFuZGxlcilcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0pXG5cbiAgICAgIGRyYWdnYWJsZS5vbk1vdmUuYWRkKG1vdmVIYW5kbGVyKVxuICAgIH0gZWxzZSB7XG4gICAgICBkcmFnZ2FibGUub25FbmQuYWRkKCgpID0+IHtcbiAgICAgICAgdGhpcy5vbkVuZChkcmFnZ2FibGUpXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIG1vdmVPclNhdmUoZHJhZ2dhYmxlLCBwb3NpdGlvbiwgdGltZSkge1xuICAgIGlmIChkcmFnZ2FibGUuaXNEcmFnZ2luZykge1xuICAgICAgZHJhZ2dhYmxlLmZpeFBvc2l0aW9uID0gcG9zaXRpb25cbiAgICB9IGVsc2Uge1xuICAgICAgZHJhZ2dhYmxlLm1vdmUocG9zaXRpb24sIHRpbWUsIHRydWUpXG4gICAgfVxuICB9XG5cbiAgb25FbmQoZHJhZ2dhYmxlKSB7XG4gICAgY29uc3QgZml4UG9zaXRpb25zID0gdGhpcy5nZXRDdXJyZW50Rml4UG9zaXRpb24oKVxuICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IHRoaXMuZHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSlcbiAgICBjb25zdCBleGNhbmdlSW5kZXggPSBHZW9tZXRyeS5pbmRleE9mTmVhcmVzdFBvaW50KGZpeFBvc2l0aW9ucywgZHJhZ2dhYmxlLnBvc2l0aW9uLCB0aGlzLm9wdGlvbnMucmFkaXVzLCB0aGlzLm9wdGlvbnMuZ2V0RGlzdGFuY2UpXG5cbiAgICBpZiAoZXhjYW5nZUluZGV4ID09PSAtMSB8fCBleGNhbmdlSW5kZXggPT09IGN1cnJlbnRJbmRleCkge1xuICAgICAgZHJhZ2dhYmxlLm1vdmUoZHJhZ2dhYmxlLmZpeFBvc2l0aW9uLCB0aGlzLm9wdGlvbnMudGltZUVuZCwgdHJ1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tb3ZlT3JTYXZlKHRoaXMuZHJhZ2dhYmxlc1tleGNhbmdlSW5kZXhdLCBmaXhQb3NpdGlvbnNbY3VycmVudEluZGV4XSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgdGhpcy5kcmFnZ2FibGVzW2N1cnJlbnRJbmRleF0ubW92ZShmaXhQb3NpdGlvbnNbZXhjYW5nZUluZGV4XSwgdGhpcy5vcHRpb25zLnRpbWVFbmQsIHRydWUpXG4gICAgICB0aGlzLm9uQ2hhbmdlLmZpcmUoKVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgc29ydElmUG9zc2libGUoZHJhZ2dhYmxlKSB7XG4gICAgY29uc3QgZml4UG9zaXRpb24gPSBkcmFnZ2FibGUuZml4UG9zaXRpb25cbiAgICBjb25zdCBjdXJyZW50SW5kZXggPSB0aGlzLmRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpXG4gICAgY29uc3QgbmV4dERyYWdnYWJsZSA9IHRoaXMuZHJhZ2dhYmxlc1tjdXJyZW50SW5kZXggKyAxXVxuICAgIGNvbnN0IHByZXZEcmFnZ2FibGUgPSB0aGlzLmRyYWdnYWJsZXNbY3VycmVudEluZGV4IC0gMV1cblxuICAgIGlmIChkcmFnZ2FibGUuZG93bkRpcmVjdGlvbiAmJiBuZXh0RHJhZ2dhYmxlKSB7XG4gICAgICBjb25zdCBkaXN0YW5jZSA9IHRoaXMub3B0aW9ucy5nZXREaXN0YW5jZShkcmFnZ2FibGUucG9zaXRpb24sIG5leHREcmFnZ2FibGUucG9zaXRpb24pXG4gICAgICBpZiAoZGlzdGFuY2UgPCB0aGlzLm9wdGlvbnMucmFkaXVzKSB7XG4gICAgICAgIGRyYWdnYWJsZS5maXhQb3NpdGlvbiA9IG5leHREcmFnZ2FibGUuZml4UG9zaXRpb25cbiAgICAgICAgdGhpcy5tb3ZlT3JTYXZlKG5leHREcmFnZ2FibGUsIGZpeFBvc2l0aW9uLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpO1xuICAgICAgICBbdGhpcy5kcmFnZ2FibGVzW2N1cnJlbnRJbmRleF0sIHRoaXMuZHJhZ2dhYmxlc1tjdXJyZW50SW5kZXggKyAxXV0gPSBbdGhpcy5kcmFnZ2FibGVzW2N1cnJlbnRJbmRleCArIDFdLCB0aGlzLmRyYWdnYWJsZXNbY3VycmVudEluZGV4XV1cbiAgICAgICAgdGhpcy5zb3J0SWZQb3NzaWJsZShkcmFnZ2FibGUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGRyYWdnYWJsZS51cERpcmVjdGlvbiAmJiBwcmV2RHJhZ2dhYmxlKSB7XG4gICAgICBjb25zdCBkaXN0YW5jZSA9IHRoaXMub3B0aW9ucy5nZXREaXN0YW5jZShkcmFnZ2FibGUucG9zaXRpb24sIHByZXZEcmFnZ2FibGUucG9zaXRpb24pXG4gICAgICBpZiAoZGlzdGFuY2UgPCB0aGlzLm9wdGlvbnMucmFkaXVzKSB7XG4gICAgICAgIGRyYWdnYWJsZS5maXhQb3NpdGlvbiA9IHByZXZEcmFnZ2FibGUuZml4UG9zaXRpb25cbiAgICAgICAgdGhpcy5tb3ZlT3JTYXZlKHByZXZEcmFnZ2FibGUsIGZpeFBvc2l0aW9uLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpO1xuICAgICAgICBbdGhpcy5kcmFnZ2FibGVzW2N1cnJlbnRJbmRleF0sIHRoaXMuZHJhZ2dhYmxlc1tjdXJyZW50SW5kZXggLSAxXV0gPSBbdGhpcy5kcmFnZ2FibGVzW2N1cnJlbnRJbmRleCAtIDFdLCB0aGlzLmRyYWdnYWJsZXNbY3VycmVudEluZGV4XV1cbiAgICAgICAgdGhpcy5zb3J0SWZQb3NzaWJsZShkcmFnZ2FibGUpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25FbmREaXNwbGF5Y2VtZW50KGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IHNvcnRlZERyYWdnYWJsZXMgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuICAgIGNvbnN0IGZpeFBvc2l0aW9ucyA9IHNvcnRlZERyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5maXhQb3NpdGlvbilcblxuICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IHNvcnRlZERyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpXG4gICAgY29uc3QgdGFyZ2V0SW5kZXggPSBHZW9tZXRyeS5pbmRleE9mTmVhcmVzdFBvaW50KGZpeFBvc2l0aW9ucywgZHJhZ2dhYmxlLnBvc2l0aW9uLCB0aGlzLm9wdGlvbnMucmFkaXVzLCB0aGlzLm9wdGlvbnMuZ2V0RGlzdGFuY2UpXG5cbiAgICBpZiAodGFyZ2V0SW5kZXggIT09IC0xKSB7XG4gICAgICBpZiAodGFyZ2V0SW5kZXggPCBjdXJyZW50SW5kZXgpIHtcbiAgICAgICAgZm9yIChsZXQgaT10YXJnZXRJbmRleDsgaTxjdXJyZW50SW5kZXg7IGkrKykge1xuICAgICAgICAgIHRoaXMubW92ZU9yU2F2ZShzb3J0ZWREcmFnZ2FibGVzW2ldLCBmaXhQb3NpdGlvbnNbaSsxXSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGxldCBpPWN1cnJlbnRJbmRleDsgaTx0YXJnZXRJbmRleDsgaSsrKSB7XG4gICAgICAgICAgdGhpcy5tb3ZlT3JTYXZlKHNvcnRlZERyYWdnYWJsZXNbaSsxXSwgZml4UG9zaXRpb25zW2ldLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGRyYWdnYWJsZS5tb3ZlKGZpeFBvc2l0aW9uc1t0YXJnZXRJbmRleF0sIHRoaXMub3B0aW9ucy50aW1lRW5kLCB0cnVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBkcmFnZ2FibGUubW92ZShkcmFnZ2FibGUuZml4UG9zaXRpb24sIHRoaXMub3B0aW9ucy50aW1lRW5kLCB0cnVlKVxuICAgIH1cbiAgfVxuXG4gIG9uU3RhcnQoZHJhZ2dhYmxlKSB7XG4gICAgbGV0IGlcbiAgICBjb25zdCBzb3J0ZWREcmFnZ2FibGVzID0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcbiAgICBjb25zdCBmaXhQb3NpdGlvbnMgPSBzb3J0ZWREcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUuZml4UG9zaXRpb24pXG5cbiAgICBjb25zdCBjdXJyZW50SW5kZXggPSBzb3J0ZWREcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKVxuICAgIGZvciAoaSA9IGN1cnJlbnRJbmRleCArIDE7IGkgPCBzb3J0ZWREcmFnZ2FibGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLm1vdmVPclNhdmUoc29ydGVkRHJhZ2dhYmxlc1tpXSwgZml4UG9zaXRpb25zW2kgLSAxXSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgIH1cbiAgICBzb3J0ZWREcmFnZ2FibGVzW2N1cnJlbnRJbmRleF0uZml4UG9zaXRpb24gPSBmaXhQb3NpdGlvbnNbaSAtIDFdXG4gIH1cblxuICBnZXRDdXJyZW50Rml4UG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLmZpeFBvc2l0aW9uLmNsb25lKCkpXG4gIH1cblxuICBnZXRTb3J0ZWREcmFnZ2FibGVzKCkge1xuICAgIGNvbnN0IGluaXRQb3NpdGlvbnMgPSB0aGlzLmRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5pbml0UG9zaXRpb24pXG5cbiAgICBjb25zdCBzb3J0ZWREcmFnZ2FibGVzID0gaW5pdFBvc2l0aW9ucy5tYXAoKHBvc2l0aW9uKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5kcmFnZ2FibGVzLmZpbHRlcigoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUuZml4UG9zaXRpb24uY29tcGFyZShwb3NpdGlvbikpWzBdXG4gICAgfSlcblxuICAgIHJldHVybiBzb3J0ZWREcmFnZ2FibGVzXG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUubW92ZShkcmFnZ2FibGUuaW5pdFBvc2l0aW9uLCAwLCB0cnVlLCBmYWxzZSlcbiAgICB9KVxuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUucmVmcmVzaCgpXG4gICAgfSlcbiAgfVxuXG4gIGFkZChkcmFnZ2FibGVzKSB7XG4gICAgaWYgKCEoZHJhZ2dhYmxlcyBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgZHJhZ2dhYmxlcyA9IFtkcmFnZ2FibGVzXVxuICAgIH1cbiAgICBkcmFnZ2FibGVzLmZvckVhY2godGhpcy5pbml0RHJhZ2dhYmxlLCB0aGlzKVxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IHRoaXMuZHJhZ2dhYmxlcy5jb25jYXQoZHJhZ2dhYmxlcylcbiAgfVxuXG4gIHJlbW92ZShkcmFnZ2FibGVzKSB7XG4gICAgY29uc3QgaW5pdFBvc2l0aW9ucyA9IHRoaXMuZHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLmluaXRQb3NpdGlvbilcbiAgICBjb25zdCBsaXN0ID0gW11cbiAgICBjb25zdCBzb3J0ZWREcmFnZ2FibGVzID0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcblxuICAgIGlmICghKGRyYWdnYWJsZXMgaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICAgIGRyYWdnYWJsZXMgPSBbZHJhZ2dhYmxlc11cbiAgICB9XG5cbiAgICBkcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLm9uRW5kLnJlc2V0KClcbiAgICAgIGRyYWdnYWJsZS5vbk1vdmUucmVzZXQoKSAvL3RvZG8gcmVtb3ZlIHJlc2V0IGluIGZ1dHVyZVxuICAgICAgcmVtb3ZlSXRlbXModGhpcy5kcmFnZ2FibGVzLCBkcmFnZ2FibGUpXG4gICAgfSlcblxuICAgIGxldCBqID0gMFxuICAgIHNvcnRlZERyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBpZiAodGhpcy5kcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTEpIHtcbiAgICAgICAgaWYgKGRyYWdnYWJsZS5maXhQb3NpdGlvbiAhPT0gaW5pdFBvc2l0aW9uc1tqXSkge1xuICAgICAgICAgIGRyYWdnYWJsZS5tb3ZlKGluaXRQb3NpdGlvbnNbal0sIHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSwgdHJ1ZSlcbiAgICAgICAgfVxuICAgICAgICBkcmFnZ2FibGUuaW5pdFBvc2l0aW9uID0gaW5pdFBvc2l0aW9uc1tqXVxuICAgICAgICBqKytcbiAgICAgICAgbGlzdC5wdXNoKGRyYWdnYWJsZSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGxpc3RcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMucmVtb3ZlKHRoaXMuZHJhZ2dhYmxlcy5zbGljZSgpKVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUuZGVzdHJveSgpKVxuICB9XG5cbiAgZ2V0IHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDdXJyZW50Rml4UG9zaXRpb24oKVxuICB9XG5cbiAgc2V0IHBvc2l0aW9ucyhwb3NpdGlvbnMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gJ3dyb25nIGFycmF5IGxlbmd0aCdcbiAgICBpZiAocG9zaXRpb25zLmxlbmd0aCA9PT0gdGhpcy5kcmFnZ2FibGVzLmxlbmd0aCkge1xuICAgICAgcG9zaXRpb25zLmZvckVhY2goKHBvaW50LCBpKSA9PiB7XG4gICAgICAgIHRoaXMuZHJhZ2dhYmxlc1tpXS5tb3ZlKHBvaW50LCAwLCB0cnVlLCB0cnVlKVxuICAgICAgfSwgdGhpcylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbWVzc2FnZVxuICAgIH1cbiAgfVxuXG4gIGdldCBlbmFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZVxuICB9XG5cbiAgc2V0IGVuYWJsZShlbmFibGUpIHtcbiAgICB0aGlzLl9lbmFibGUgPSBlbmFibGVcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUuZW5hYmxlID0gZW5hYmxlXG4gICAgfSlcbiAgfVxufVxuXG5mdW5jdGlvbiBsaXN0RmFjdG9yeShwYXJlbnRFbGVtZW50LCBlbGVtZW50cywgb3B0aW9ucz17fSkge1xuICBjb25zdCBkcmFnZ2FibGVPcHRpb25zID0gb3B0aW9ucy5kcmFnZ2FibGUgfHwge31cbiAgY29uc3QgbGlzdE9wdGlvbnMgPSBvcHRpb25zLmxpc3QgfHwge31cbiAgZHJhZ2dhYmxlT3B0aW9ucy5wYXJlbnQgPSBkcmFnZ2FibGVPcHRpb25zLnBhcmVudCB8fCBwYXJlbnRFbGVtZW50XG4gIGVsZW1lbnRzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZWxlbWVudHMpXG5cbiAgY29uc3QgZHJhZ2dhYmxlcyA9IGVsZW1lbnRzLm1hcCgoZWxlbWVudCkgPT4ge1xuICAgIHJldHVybiBuZXcgRHJhZ2dhYmxlKGVsZW1lbnQsIGRyYWdnYWJsZU9wdGlvbnMpXG4gIH0pXG5cbiAgcmV0dXJuIG5ldyBMaXN0KGRyYWdnYWJsZXMsIGxpc3RPcHRpb25zKVxufVxuXG5leHBvcnQgeyBMaXN0LCBsaXN0RmFjdG9yeSB9XG4iLCIndXNlIHN0cmljdCdcblxuaW1wb3J0IHsgR2VvbWV0cnksIFBvaW50IH0gZnJvbSAnLi9nZW9tZXRyeSdcbmltcG9ydCB7IERyYWdnYWJsZSB9IGZyb20gJy4vZHJhZ2dhYmxlJ1xuaW1wb3J0IHsgTGlzdCB9IGZyb20gJy4vbGlzdCdcblxuY2xhc3MgTGlzdFN3aXRjaGVyIGV4dGVuZHMgTGlzdCB7XG4gIGNvbnN0cnVjdG9yKGRyYWdnYWJsZXMsIG9wdGlvbnM9e30pIHtcbiAgICBvcHRpb25zLnN0ZXBPbiA9IG9wdGlvbnMuc3RlcE9uIHx8IG5ldyBQb2ludCgtNTAsIDApXG4gICAgc3VwZXIoZHJhZ2dhYmxlcywgb3B0aW9ucylcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLmlzT24gPSBmYWxzZVxuICAgICAgZHJhZ2dhYmxlLm9uRW5kLmFkZCgoKSA9PiB7XG4gICAgICAgIHRoaXMub25FbmQoZHJhZ2dhYmxlKVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgb25FbmQoZHJhZ2dhYmxlKSB7XG4gICAgY29uc3QgZml4UG9zaXRpb25zID0gdGhpcy5nZXRDdXJyZW50Rml4UG9zaXRpb25XaXRoT2ZmKClcbiAgICBjb25zdCBjdXJyZW50SW5kZXggPSB0aGlzLmRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpXG4gICAgY29uc3QgZXhjYW5nZUluZGV4ID0gR2VvbWV0cnkuaW5kZXhPZk5lYXJlc3RQb2ludChmaXhQb3NpdGlvbnMsIGRyYWdnYWJsZS5wb3NpdGlvbiwgdGhpcy5vcHRpb25zLnJhZGl1cywgdGhpcy5vcHRpb25zLmdldERpc3RhbmNlKVxuXG4gICAgaWYgKGV4Y2FuZ2VJbmRleCA9PT0gLTEgfHwgZXhjYW5nZUluZGV4ID09PSBjdXJyZW50SW5kZXgpIHtcbiAgICAgIHRoaXMubW92ZURyYWdnYWJsZShjdXJyZW50SW5kZXgsIGRyYWdnYWJsZS5wb3NpdGlvbiwgZml4UG9zaXRpb25zW2N1cnJlbnRJbmRleF0sIHRoaXMub3B0aW9ucy50aW1lRW5kKVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5kcmFnZ2FibGVzW2V4Y2FuZ2VJbmRleF0uaXNEcmFnZ2luZykge1xuICAgICAgICB0aGlzLmZpeFRvT2ZmKGV4Y2FuZ2VJbmRleCwgZml4UG9zaXRpb25zW2N1cnJlbnRJbmRleF0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm1vdmVEcmFnZ2FibGVUb09mZihleGNhbmdlSW5kZXgsIGZpeFBvc2l0aW9uc1tjdXJyZW50SW5kZXhdLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICB9XG4gICAgICB0aGlzLm1vdmVEcmFnZ2FibGUoY3VycmVudEluZGV4LCBkcmFnZ2FibGUucG9zaXRpb24sIGZpeFBvc2l0aW9uc1tleGNhbmdlSW5kZXhdLCB0aGlzLm9wdGlvbnMudGltZUVuZClcbiAgICAgIHRoaXMub25DaGFuZ2UuZmlyZSgpXG4gICAgfVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBtb3ZlRHJhZ2dhYmxlKGluZGV4LCBwb3NpdGlvbiwgZml4T2ZmUG9zaXRpb24sIHRpbWUpIHtcbiAgICBjb25zdCBwb3NpdGlvbnMgPSBbZml4T2ZmUG9zaXRpb24sIGZpeE9mZlBvc2l0aW9uLmFkZCh0aGlzLm9wdGlvbnMuc3RlcE9uKV1cbiAgICBjb25zdCBpc09uID0gR2VvbWV0cnkuaW5kZXhPZk5lYXJlc3RQb2ludChwb3NpdGlvbnMsIHBvc2l0aW9uLCAtMSwgR2VvbWV0cnkuZ2V0WERpZmZlcmVuY2UpXG5cbiAgICBpZiAodGhpcy5kcmFnZ2FibGVzW2luZGV4XS5pc09uICE9PSAhIWlzT24pIHtcbiAgICAgIHRoaXMuZHJhZ2dhYmxlc1tpbmRleF0uaXNPbiA9ICEhaXNPblxuICAgICAgdGhpcy5vbkNoYW5nZS5maXJlKClcbiAgICB9XG5cbiAgICB0aGlzLmRyYWdnYWJsZXNbaW5kZXhdLm1vdmUocG9zaXRpb25zW2lzT25dLCB0aW1lLCB0cnVlKVxuICB9XG5cbiAgZml4VG9PZmYoaW5kZXgsIGZpeE9mZlBvc2l0aW9uKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzW2luZGV4XS5pc09uID0gZmFsc2VcbiAgICB0aGlzLmRyYWdnYWJsZXNbaW5kZXhdLmZpeFBvc2l0aW9uID0gZml4T2ZmUG9zaXRpb25cbiAgfVxuXG4gIG1vdmVEcmFnZ2FibGVUb09mZihpbmRleCwgZml4T2ZmUG9zaXRpb24sIHRpbWUpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXNbaW5kZXhdLmlzT24gPSBmYWxzZVxuICAgIHRoaXMuZHJhZ2dhYmxlc1tpbmRleF0ubW92ZShmaXhPZmZQb3NpdGlvbiwgdGltZSwgdHJ1ZSlcbiAgfVxuXG4gIGdldEN1cnJlbnRGaXhQb3NpdGlvbldpdGhPZmYoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5pc09uID8gZHJhZ2dhYmxlLmZpeFBvc2l0aW9uLnN1Yih0aGlzLm9wdGlvbnMuc3RlcE9uKSA6IGRyYWdnYWJsZS5maXhQb3NpdGlvbi5jbG9uZSgpXG4gICAgfSwgdGhpcylcbiAgfVxuXG4gIGdldFNvcnRlZERyYWdnYWJsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLmluaXRQb3NpdGlvbilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgocG9zaXRpb24pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kcmFnZ2FibGVzLmZpbHRlcigoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZHJhZ2dhYmxlLmZpeFBvc2l0aW9uLmNvbXBhcmUocG9zaXRpb24pIHx8IGRyYWdnYWJsZS5maXhQb3NpdGlvbi5jb21wYXJlKHBvc2l0aW9uLmFkZCh0aGlzLm9wdGlvbnMuc3RlcE9uKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB0aGlzKVswXVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB0aGlzKVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLm1vdmUoZHJhZ2dhYmxlLmluaXRQb3NpdGlvbiwgMCwgdHJ1ZSwgZmFsc2UpXG4gICAgICBkcmFnZ2FibGUuaXNPbiA9IGZhbHNlXG4gICAgfSlcbiAgfVxuXG4gIGdldCBwb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgY29uc3QgcG9zaXRpb24gPSBkcmFnZ2FibGUuZml4UG9zaXRpb24uY2xvbmUoKVxuICAgICAgcG9zaXRpb24uaXNPbiA9IGRyYWdnYWJsZS5pc09uXG4gICAgICByZXR1cm4gcG9zaXRpb25cbiAgICB9KVxuICB9XG5cbiAgc2V0IHBvc2l0aW9ucyhwb3NpdGlvbnMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gJ3dyb25nIGFycmF5IGxlbmd0aCdcbiAgICBpZiAocG9zaXRpb25zLmxlbmd0aCA9PT0gdGhpcy5kcmFnZ2FibGVzLmxlbmd0aCkge1xuICAgICAgcG9zaXRpb25zLmZvckVhY2goKHBvaW50LCBpKSA9PiB7XG4gICAgICAgIHRoaXMuZHJhZ2dhYmxlc1tpXS5pc09uID0gcG9pbnQuaXNPblxuICAgICAgICB0aGlzLmRyYWdnYWJsZXNbaV0ubW92ZShwb2ludCwgMCwgdHJ1ZSwgdHJ1ZSlcbiAgICAgIH0sIHRoaXMpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG1lc3NhZ2VcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gbGlzdFN3aXRjaGVyRmFjdG9yeShlbGVtZW50LCBkcmFnZ2FibGVFbGVtZW50cywgb3B0aW9ucz17fSkge1xuICBjb25zdCBkcmFnZ2FibGVPcHRpb25zID0gb3B0aW9ucy5kcmFnZ2FibGUgfHwge31cbiAgY29uc3QgbGlzdE9wdGlvbnMgPSBvcHRpb25zLmxpc3QgfHwge31cblxuICBkcmFnZ2FibGVPcHRpb25zLnBhcmVudCA9IGRyYWdnYWJsZU9wdGlvbnMucGFyZW50IHx8IGVsZW1lbnRcbiAgZHJhZ2dhYmxlRWxlbWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkcmFnZ2FibGVFbGVtZW50cylcblxuICBjb25zdCBkcmFnZ2FibGVzID0gZHJhZ2dhYmxlRWxlbWVudHMubWFwKChlbGVtZW50KSA9PiB7XG4gICAgcmV0dXJuIG5ldyBEcmFnZ2FibGUoZWxlbWVudCwgZHJhZ2dhYmxlT3B0aW9ucylcbiAgfSlcbiAgcmV0dXJuIG5ldyBMaXN0U3dpdGNoZXIoZHJhZ2dhYmxlcywgbGlzdE9wdGlvbnMpXG59XG5cbmV4cG9ydCB7IGxpc3RTd2l0Y2hlckZhY3RvcnksIExpc3RTd2l0Y2hlciB9XG4iLCIndXNlIHN0cmljdCdcbmltcG9ydCB7IEdlb21ldHJ5LCBQb2ludCB9IGZyb20gJy4vZ2VvbWV0cnknXG5cbmNvbnN0IHBvc2l0aW9uVHlwZSA9IHtcbiAgbm90Q3Jvc3Npbmc6IDAsXG4gIGZsb2F0TGVmdDogMSxcbiAgZmxvYXRSaWdodDogMlxufVxuXG5mdW5jdGlvbiBwb3NpdGlvbkZhY3RvcnkodHlwZSkge1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgY2FzZSBwb3NpdGlvblR5cGUubm90Q3Jvc3Npbmc6XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHJlY3RhbmdsZSwgX29wdGlvbnMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihyZWN0YW5nbGVMaXN0LCBpbmRleGVzT2ZOZXdzKSB7XG4gICAgICAgIGNvbnN0IGJvdW5kUmVjdCA9IHR5cGVvZiByZWN0YW5nbGUgPT09ICdmdW5jdGlvbicgPyByZWN0YW5nbGUoKSA6IHJlY3RhbmdsZSxcbiAgICAgICAgICBzdGF0aWNSZWN0YW5nbGVJbmRleGVzID0gcmVjdGFuZ2xlTGlzdC5yZWR1Y2UoZnVuY3Rpb24oaW5kZXhlcywgX3JlY3QsIGluZGV4KSB7XG4gICAgICAgICAgICBpZiAoaW5kZXhlc09mTmV3cy5pbmRleE9mKGluZGV4KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgaW5kZXhlcy5wdXNoKGluZGV4KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGluZGV4ZXNcbiAgICAgICAgICB9LCBbXSlcblxuICAgICAgICBpbmRleGVzT2ZOZXdzLmZvckVhY2goZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgICAgICBsZXQgcmVjdCA9IHJlY3RhbmdsZUxpc3RbaW5kZXhdLCByZW1vdmFibGUgPSBmYWxzZVxuICAgICAgICAgIHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMuZm9yRWFjaChmdW5jdGlvbihpbmRleE9mU3RhdGljKSB7XG4gICAgICAgICAgICBjb25zdCBzdGF0aWNSZWN0ID0gcmVjdGFuZ2xlTGlzdFtpbmRleE9mU3RhdGljXVxuICAgICAgICAgICAgcmVjdCA9IHN0YXRpY1JlY3QubW92ZVRvQm91bmQocmVjdClcbiAgICAgICAgICB9KVxuICAgICAgICAgIHJlbW92YWJsZSA9IHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMuc29tZShmdW5jdGlvbihpbmRleE9mU3RhdGljKSB7XG4gICAgICAgICAgICBjb25zdCBzdGF0aWNSZWN0ID0gcmVjdGFuZ2xlTGlzdFtpbmRleE9mU3RhdGljXVxuICAgICAgICAgICAgcmV0dXJuICAhIXN0YXRpY1JlY3QuYW5kKHJlY3QpXG4gICAgICAgICAgfSkgfHwgcmVjdC5hbmQoYm91bmRSZWN0KS5nZXRTcXVhcmUoKSAhPT0gcmVjdC5nZXRTcXVhcmUoKVxuICAgICAgICAgIGlmIChyZW1vdmFibGUpIHtcbiAgICAgICAgICAgIHJlY3QucmVtb3ZhYmxlID0gdHJ1ZVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdGF0aWNSZWN0YW5nbGVJbmRleGVzLnB1c2goaW5kZXgpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gcmVjdGFuZ2xlTGlzdFxuICAgICAgfVxuICAgIH1cbiAgY2FzZSBwb3NpdGlvblR5cGUuZmxvYXRMZWZ0OlxuICAgIHJldHVybiBmdW5jdGlvbihyZWN0YW5nbGUsIG9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgcGFkZGluZ1RvcExlZnQ6IG5ldyBQb2ludCgwLCAwKSxcbiAgICAgICAgcGFkZGluZ0JvdHRvbVJpZ2h0OiBuZXcgUG9pbnQoMCwgMCksXG4gICAgICAgIHlHYXBCZXR3ZWVuRHJhZ2dhYmxlczogMCxcbiAgICAgICAgcmVtb3ZhYmxlOiB0cnVlXG4gICAgICB9LCBvcHRpb25zKVxuXG4gICAgICByZXR1cm4gZnVuY3Rpb24ocmVjdGFuZ2xlTGlzdCwgX2luZGV4ZXNPZk5ld3MpIHtcbiAgICAgICAgY29uc3QgYm91bmRSZWN0ID0gdHlwZW9mIHJlY3RhbmdsZSA9PT0gJ2Z1bmN0aW9uJyA/IHJlY3RhbmdsZSgpIDogcmVjdGFuZ2xlXG4gICAgICAgIGNvbnN0IHJlY3RQMiA9IGJvdW5kUmVjdC5nZXRQMigpXG4gICAgICAgIGxldCBib3VuZGFyeVBvaW50cyA9IFtib3VuZFJlY3QucG9zaXRpb25dXG4gICAgICAgIHJlY3RhbmdsZUxpc3QuZm9yRWFjaChmdW5jdGlvbihyZWN0KSB7XG4gICAgICAgICAgbGV0IHBvc2l0aW9uLCBpc1ZhbGlkID0gZmFsc2VcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvdW5kYXJ5UG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IChuZXcgUG9pbnQoYm91bmRhcnlQb2ludHNbaV0ueCwgaSA+IDAgPyAoYm91bmRhcnlQb2ludHNbaSAtIDFdLnkgKyBvcHRpb25zLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcykgOiBib3VuZFJlY3QucG9zaXRpb24ueSkpLmFkZChvcHRpb25zLnBhZGRpbmdUb3BMZWZ0KVxuICAgICAgICAgICAgaXNWYWxpZCA9IChwb3NpdGlvbi54ICsgcmVjdC5zaXplLnggPCByZWN0UDIueClcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICAgICAgcG9zaXRpb24gPSAobmV3IFBvaW50KGJvdW5kUmVjdC5wb3NpdGlvbi54LCBib3VuZGFyeVBvaW50c1tib3VuZGFyeVBvaW50cy5sZW5ndGggLSAxXS55ICsgb3B0aW9ucy55R2FwQmV0d2VlbkRyYWdnYWJsZXMpKS5hZGQob3B0aW9ucy5wYWRkaW5nVG9wTGVmdClcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVjdC5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgICAgICAgaWYgKG9wdGlvbnMucmVtb3ZhYmxlICYmIHJlY3QuZ2V0UDMoKS55ID4gYm91bmRSZWN0LmdldFAzKCkueSkge1xuICAgICAgICAgICAgcmVjdC5yZW1vdmFibGUgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGJvdW5kYXJ5UG9pbnRzID0gR2VvbWV0cnkuYWRkUG9pbnRUb0JvdW5kUG9pbnRzKGJvdW5kYXJ5UG9pbnRzLCByZWN0LmdldFAzKCkuYWRkKG9wdGlvbnMucGFkZGluZ0JvdHRvbVJpZ2h0KSlcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHJlY3RhbmdsZUxpc3RcbiAgICAgIH1cbiAgICB9XG4gIGNhc2UgcG9zaXRpb25UeXBlLmZsb2F0UmlnaHQ6XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHJlY3RhbmdsZSwgb3B0aW9ucykge1xuICAgICAgb3B0aW9ucyA9IE9iamVjdC5hc3Npbmcoe1xuICAgICAgICBwYWRkaW5nVG9wUmlnaHQ6IG5ldyBQb2ludCg1LCA1KSxcbiAgICAgICAgcGFkZGluZ0JvdHRvbUxlZnQ6IG5ldyBQb2ludCgwLCAwKSxcbiAgICAgICAgcmVtb3ZhYmxlOiB0cnVlXG4gICAgICB9LCBvcHRpb25zKVxuXG4gICAgICBjb25zdCBwYWRkaW5nVG9wTmVnUmlnaHQgPSBuZXcgUG9pbnQoLW9wdGlvbnMucGFkZGluZ1RvcFJpZ2h0LngsIG9wdGlvbnMucGFkZGluZ1RvcFJpZ2h0LnkpXG4gICAgICBjb25zdCBwYWRkaW5nQm90dG9tTmVnTGVmdCA9IG5ldyBQb2ludCgtb3B0aW9ucy5wYWRkaW5nQm90dG9tTGVmdC54LCBvcHRpb25zLnBhZGRpbmdCb3R0b21MZWZ0LnkpXG4gICAgICByZXR1cm4gZnVuY3Rpb24ocmVjdGFuZ2xlTGlzdCwgX2luZGV4ZXNPZk5ld3MpIHtcbiAgICAgICAgY29uc3QgYm91bmRSZWN0ID0gdHlwZW9mIHJlY3RhbmdsZSA9PT0gJ2Z1bmN0aW9uJyA/IHJlY3RhbmdsZSgpIDogcmVjdGFuZ2xlXG4gICAgICAgIGxldCBib3VuZGFyeVBvaW50cyA9IFtib3VuZFJlY3QuZ2V0UmlnaHRUb3BQb2ludCgpXVxuICAgICAgICByZWN0YW5nbGVMaXN0LmZvckVhY2goZnVuY3Rpb24ocmVjdCwgX2luZGV4KSB7XG4gICAgICAgICAgbGV0IHBvc2l0aW9uLCBpc1ZhbGlkID0gZmFsc2VcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvdW5kYXJ5UG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IChuZXcgUG9pbnQoYm91bmRhcnlQb2ludHNbaV0ueCAtIHJlY3Quc2l6ZS54LCBpID4gMCA/IGJvdW5kYXJ5UG9pbnRzW2kgLSAxXS55IDogYm91bmRSZWN0LnBvc2l0aW9uLnkpKS5hZGQocGFkZGluZ1RvcE5lZ1JpZ2h0KVxuICAgICAgICAgICAgaXNWYWxpZCA9IChwb3NpdGlvbi54ID4gcmVjdC5wb3NpdGlvbi54KVxuICAgICAgICAgICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IG5ldyBQb2ludChib3VuZFJlY3QuZ2V0UDIoKS54LCBib3VuZGFyeVBvaW50c1tib3VuZGFyeVBvaW50cy5sZW5ndGggLSAxXS55KVxuICAgICAgICAgIH1cbiAgICAgICAgICByZWN0LnBvc2l0aW9uID0gcG9zaXRpb25cbiAgICAgICAgICBpZiAob3B0aW9ucy5yZW1vdmFibGUgJiYgcmVjdC5nZXRMZWZ0Qm90dG9tUG9pbnQoKS55ID4gYm91bmRSZWN0LmdldFA0KCkueSkge1xuICAgICAgICAgICAgcmVjdC5yZW1vdmFibGUgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGJvdW5kYXJ5UG9pbnRzID0gR2VvbWV0cnkuYWRkUG9pbnRUb0JvdW5kUG9pbnRzKGJvdW5kYXJ5UG9pbnRzLCByZWN0LmdldFA0KCkuYWRkKHBhZGRpbmdCb3R0b21OZWdMZWZ0KSwgdHJ1ZSlcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHJlY3RhbmdsZUxpc3RcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc29ydGluZ0ZhY3RvcnkodHlwZSkge1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgY2FzZSBwb3NpdGlvblR5cGUubm90Q3Jvc3Npbmc6XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG9sZE9ianNMaXN0LCBuZXdPYmpzLCBpbmRleE9mTmV3cykge1xuICAgICAgICBjb25zdCBvYmpzTGlzdCA9IG9sZE9ianNMaXN0LmNvbmNhdChuZXdPYmpzKVxuICAgICAgICBuZXdPYmpzLmZvckVhY2goZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgICAgaW5kZXhPZk5ld3MucHVzaChvYmpzTGlzdC5pbmRleE9mKG9iaikpXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBvYmpzTGlzdFxuICAgICAgfVxuICAgIH1cbiAgY2FzZSBwb3NpdGlvblR5cGUuZmxvYXRMZWZ0OlxuICBjYXNlIHBvc2l0aW9uVHlwZS5mbG9hdFJpZ2h0OlxuICAgIHJldHVybiBmdW5jdGlvbihyYWRpdXMsIGdldERpc3RhbmNlLCBvcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIGdldFBvc2l0aW9uOiBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgICByZXR1cm4gb2JqLnBvc2l0aW9uXG4gICAgICAgIH1cbiAgICAgIH0sIG9wdGlvbnMpXG5cbiAgICAgIHJldHVybiBmdW5jdGlvbihvbGRPYmpzTGlzdCwgbmV3T2JqcywgaW5kZXhPZk5ld3MpIHtcbiAgICAgICAgY29uc3QgbmV3TGlzdCA9IG9sZE9ianNMaXN0LmNvbmNhdCgpXG4gICAgICAgIGNvbnN0IGxpc3RPbGRQb3NpdGlvbiA9IG9sZE9ianNMaXN0Lm1hcChvcHRpb25zLmdldFBvc2l0aW9uKVxuICAgICAgICBuZXdPYmpzLmZvckVhY2goZnVuY3Rpb24obmV3T2JqKSB7XG4gICAgICAgICAgbGV0IGluZGV4ID0gR2VvbWV0cnkuaW5kZXhPZk5lYXJlc3RQb2ludChsaXN0T2xkUG9zaXRpb24sIG9wdGlvbnMuZ2V0UG9zaXRpb24obmV3T2JqKSwgcmFkaXVzLCBnZXREaXN0YW5jZSlcbiAgICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICBpbmRleCA9IG5ld0xpc3QubGVuZ3RoXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluZGV4ID0gbmV3TGlzdC5pbmRleE9mKG9sZE9ianNMaXN0W2luZGV4XSlcbiAgICAgICAgICB9XG4gICAgICAgICAgbmV3TGlzdC5zcGxpY2UoaW5kZXgsIDAsIG5ld09iailcbiAgICAgICAgfSlcbiAgICAgICAgbmV3T2Jqcy5mb3JFYWNoKGZ1bmN0aW9uKG5ld09iaikge1xuICAgICAgICAgIGluZGV4T2ZOZXdzLnB1c2gobmV3TGlzdC5pbmRleE9mKG5ld09iaikpXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBuZXdMaXN0XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCB7IHBvc2l0aW9uVHlwZSwgc29ydGluZ0ZhY3RvcnksIHBvc2l0aW9uRmFjdG9yeSB9XG4iLCJpbXBvcnQgcmVtb3ZlSXRlbXMgZnJvbSAncmVtb3ZlLWFycmF5LWl0ZW1zJ1xuaW1wb3J0IEV2ZW50IGZyb20gJy4vZXZlbnQnXG5pbXBvcnQgeyBEcmFnZ2FibGUgfSBmcm9tICcuL2RyYWdnYWJsZSdcbmltcG9ydCB7IFRhcmdldCB9IGZyb20gJy4vdGFyZ2V0J1xuXG5jb25zdCBEcmFnZWUgPSB7IEV2ZW50IH0gLy90b2RvIHJlbW92ZSBhZnRlciByZWZhY3RvcmVcblxuY29uc3Qgc2NvcGVzID0gW11cblxuY2xhc3MgU2NvcGUge1xuICBjb25zdHJ1Y3RvcihkcmFnZ2FibGVzLCB0YXJnZXRzLCBvcHRpb25zPXt9KSB7XG4gICAgc2NvcGVzLmZvckVhY2goKHNjb3BlKSA9PiB7XG4gICAgICBpZiAoZHJhZ2dhYmxlcykge1xuICAgICAgICBkcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgICAgIHJlbW92ZUl0ZW1zKHNjb3BlLmRyYWdnYWJsZXMsIGRyYWdnYWJsZSlcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgaWYgKHRhcmdldHMpIHtcbiAgICAgICAgdGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHtcbiAgICAgICAgICByZW1vdmVJdGVtcyhzY29wZS50YXJnZXRzLCB0YXJnZXQpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZXMgfHwgW11cbiAgICB0aGlzLnRhcmdldHMgPSB0YXJnZXRzIHx8IFtdXG4gICAgc2NvcGVzLnB1c2godGhpcylcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICB0aW1lRW5kOiAob3B0aW9ucy50aW1lRW5kKSB8fCA0MDBcbiAgICB9XG5cbiAgICB0aGlzLm9uQ2hhbmdlID0gbmV3IERyYWdlZS5FdmVudCh0aGlzKVxuICAgIGlmIChvcHRpb25zLm9uQ2hhbmdlKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlLmFkZChvcHRpb25zLm9uQ2hhbmdlKVxuICAgIH1cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUub25FbmQuYWRkKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMub25FbmQoZHJhZ2dhYmxlKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgYWRkRHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5wdXNoKGRyYWdnYWJsZSlcbiAgICBkcmFnZ2FibGUub25FbmQudW5zaGlmdCgoKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5vbkVuZChkcmFnZ2FibGUpXG4gICAgfSlcbiAgfVxuXG4gIGFkZFRhcmdldCh0YXJnZXQpIHtcbiAgICB0aGlzLnRhcmdldHMucHVzaCh0YXJnZXQpXG4gIH1cblxuICBvbkVuZChkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBzaG90VGFyZ2V0cyA9IHRoaXMudGFyZ2V0cy5maWx0ZXIoKHRhcmdldCkgPT4ge1xuICAgICAgcmV0dXJuIHRhcmdldC5kcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTFcbiAgICB9KS5maWx0ZXIoKHRhcmdldCkgPT4ge1xuICAgICAgcmV0dXJuIHRhcmdldC5jYXRjaERyYWdnYWJsZShkcmFnZ2FibGUpXG4gICAgfSkuc29ydCgoYSwgYikgPT4ge1xuICAgICAgcmV0dXJuIGEuZ2V0UmVjdGFuZ2xlKCkuZ2V0U3F1YXJlKCkgLSBiLmdldFJlY3RhbmdsZSgpLmdldFNxdWFyZSgpXG4gICAgfSlcblxuICAgIGlmIChzaG90VGFyZ2V0cy5sZW5ndGgpIHtcbiAgICAgIHNob3RUYXJnZXRzWzBdLm9uRW5kKGRyYWdnYWJsZSlcbiAgICB9IGVsc2UgaWYgKGRyYWdnYWJsZS50YXJnZXRzLmxlbmd0aCkge1xuICAgICAgZHJhZ2dhYmxlLm1vdmUoZHJhZ2dhYmxlLmluaXRQb3NpdGlvbiwgdGhpcy5vcHRpb25zLnRpbWVFbmQsIHRydWUsIHRydWUpXG4gICAgfVxuICAgIHRoaXMub25DaGFuZ2UuZmlyZSgpXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMudGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHRhcmdldC5yZXNldCgpKVxuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucmVmcmVzaCgpKVxuICAgIHRoaXMudGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHRhcmdldC5yZWZyZXNoKCkpXG4gIH1cblxuICBnZXQgcG9zaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnRhcmdldHMubWFwKCh0YXJnZXQpID0+IHtcbiAgICAgIHJldHVybiB0YXJnZXQuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB0aGlzLmRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpKVxuICAgIH0pXG4gIH1cblxuICBzZXQgcG9zaXRpb25zKHBvc2l0aW9ucykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSAnd3JvbmcgYXJyYXkgbGVuZ3RoJ1xuICAgIGlmIChwb3NpdGlvbnMubGVuZ3RoID09PSB0aGlzLnRhcmdldHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB0YXJnZXQucmVzZXQoKSlcblxuICAgICAgcG9zaXRpb25zLmZvckVhY2goKHRhcmdldEluZGV4ZXMsIGkpID0+IHtcbiAgICAgICAgdGFyZ2V0SW5kZXhlcy5mb3JFYWNoKChpbmRleCkgPT4ge1xuICAgICAgICAgIHRoaXMudGFyZ2V0c1tpXS5hZGQodGhpcy5kcmFnZ2FibGVzW2luZGV4XSlcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG1lc3NhZ2VcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgZGVmYXVsdFNjb3BlID0gbmV3IFNjb3BlKClcblxuZnVuY3Rpb24gc2NvcGUoZm4pIHtcbiAgY29uc3QgY3VycmVudFNjb3BlID0gbmV3IFNjb3BlKClcbiAgY29uc3QgYWRkRHJhZ2dhYmxlVG9TY29wZSA9IGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICAgIGN1cnJlbnRTY29wZS5hZGREcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICAgIHJldHVybiB0cnVlXG4gIH1cbiAgY29uc3QgYWRkVGFyZ2V0VG9TY29wZSA9IGZ1bmN0aW9uKHRhcmdldCkge1xuICAgIGN1cnJlbnRTY29wZS5hZGRUYXJnZXQodGFyZ2V0KVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBEcmFnZ2FibGUub25DcmVhdGUuYWRkKGFkZERyYWdnYWJsZVRvU2NvcGUpXG4gIFRhcmdldC5vbkNyZWF0ZS5hZGQoYWRkVGFyZ2V0VG9TY29wZSlcbiAgZm4uY2FsbCgpXG4gIERyYWdnYWJsZS5vbkNyZWF0ZS5yZW1vdmUoYWRkRHJhZ2dhYmxlVG9TY29wZSlcbiAgVGFyZ2V0Lm9uQ3JlYXRlLnJlbW92ZShhZGRUYXJnZXRUb1Njb3BlKVxuICByZXR1cm4gY3VycmVudFNjb3BlXG59XG5cbmZ1bmN0aW9uIHNjb3BlRmFjdG9yeShwYXJlbnRFbGVtZW50LCBkcmFnZ2FibGVFbGVtZW50cywgdGFyZ2V0RWxlbWVudHMsIG9wdGlvbnM9e30pIHtcbiAgY29uc3QgZHJhZ2dhYmxlT3B0aW9ucyA9IG9wdGlvbnMuZHJhZ2dhYmxlIHx8IHt9XG4gIGNvbnN0IHRhcmdldE9wdGlvbnMgPSBvcHRpb25zLnRhcmdldCB8fCB7fVxuICBjb25zdCBzY29wZU9wdGlvbnMgPSBvcHRpb25zLnNjb3BlIHx8IHt9XG4gIGRyYWdnYWJsZU9wdGlvbnMucGFyZW50ID0gZHJhZ2dhYmxlT3B0aW9ucy5wYXJlbnQgfHwgcGFyZW50RWxlbWVudFxuICB0YXJnZXRPcHRpb25zLnBhcmVudCA9IHRhcmdldE9wdGlvbnMucGFyZW50IHx8IHBhcmVudEVsZW1lbnRcbiAgZHJhZ2dhYmxlRWxlbWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkcmFnZ2FibGVFbGVtZW50cylcbiAgdGFyZ2V0RWxlbWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0YXJnZXRFbGVtZW50cylcblxuICBjb25zdCBkcmFnZ2FibGVzID0gZHJhZ2dhYmxlRWxlbWVudHMubWFwKChlbGVtZW50KSA9PiB7XG4gICAgcmV0dXJuIG5ldyBEcmFnZ2FibGUoZWxlbWVudCwgZHJhZ2dhYmxlT3B0aW9ucylcbiAgfSlcblxuICBjb25zdCB0YXJnZXRzID0gdGFyZ2V0RWxlbWVudHMubWFwKChlbGVtZW50KSA9PiB7XG4gICAgcmV0dXJuIG5ldyBUYXJnZXQoZWxlbWVudCwgZHJhZ2dhYmxlcywgdGFyZ2V0T3B0aW9ucylcbiAgfSlcbiAgcmV0dXJuIG5ldyBTY29wZShkcmFnZ2FibGVzLCB0YXJnZXRzLCBzY29wZU9wdGlvbnMpXG59XG5cbmV4cG9ydCB7IHNjb3BlcywgZGVmYXVsdFNjb3BlLCBTY29wZSwgc2NvcGVGYWN0b3J5LCBzY29wZSB9XG4iLCJpbXBvcnQgeyBMaXN0IH0gZnJvbSAnLi9saXN0J1xuaW1wb3J0IHsgR2VvbWV0cnkgfSBmcm9tICcuL2dlb21ldHJ5J1xuaW1wb3J0IHsgRHJhZ2dhYmxlIH0gZnJvbSAnLi9kcmFnZ2FibGUnXG5cbmNsYXNzIFNvcnRhYmxlIGV4dGVuZHMgTGlzdCB7XG4gIGNvbnN0cnVjdG9yKGRyYWdnYWJsZXMsIG9wdGlvbnM9e30pIHtcbiAgICBvcHRpb25zLmdldERpc3RhbmNlID0gb3B0aW9ucy5nZXREaXN0YW5jZSB8fCBHZW9tZXRyeS5nZXRZRGlmZmVyZW5jZVxuICAgIHN1cGVyKGRyYWdnYWJsZXMsIG9wdGlvbnMpXG4gIH1cblxuICBpbml0RHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIGRyYWdnYWJsZS5lbmFibGUgPSB0aGlzLl9lbmFibGVcbiAgICBpZiAodGhpcy5vcHRpb25zLmlzU29ydGFibGUpIHtcbiAgICAgIGRyYWdnYWJsZS5vbk1vdmUuYWRkKCgpID0+IHtcbiAgICAgICAgaWYgKGRyYWdnYWJsZS5pc0RyYWdnaW5nKSB7XG4gICAgICAgICAgdGhpcy5leGNoYW5nZURyYWdnYWJsZUlmUG9zc2libGUoZHJhZ2dhYmxlKVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIGRyYWdnYWJsZS5vbkVuZC5hZGQoKCkgPT4ge1xuICAgICAgICBkcmFnZ2FibGUubW92ZShkcmFnZ2FibGUuZml4UG9zaXRpb24sIHRoaXMub3B0aW9ucy50aW1lRW5kKVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBleGNoYW5nZURyYWdnYWJsZUlmUG9zc2libGUoZHJhZ2dhYmxlKSB7XG4gICAgY29uc3QgZml4UG9zaXRpb24gPSBkcmFnZ2FibGUuZml4UG9zaXRpb25cbiAgICBjb25zdCBjdXJyZW50SW5kZXggPSB0aGlzLmRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpXG4gICAgY29uc3QgbmV4dERyYWdnYWJsZSA9IHRoaXMuZHJhZ2dhYmxlc1tjdXJyZW50SW5kZXggKyAxXVxuICAgIGNvbnN0IHByZXZEcmFnZ2FibGUgPSB0aGlzLmRyYWdnYWJsZXNbY3VycmVudEluZGV4IC0gMV1cblxuICAgIGlmIChkcmFnZ2FibGUuZG93bkRpcmVjdGlvbiAmJiBuZXh0RHJhZ2dhYmxlKSB7XG4gICAgICBjb25zdCBkaXN0YW5jZSA9IHRoaXMub3B0aW9ucy5nZXREaXN0YW5jZShkcmFnZ2FibGUucG9zaXRpb24sIG5leHREcmFnZ2FibGUucG9zaXRpb24pXG4gICAgICBpZiAoZGlzdGFuY2UgPCB0aGlzLm9wdGlvbnMucmFkaXVzKSB7XG4gICAgICAgIGRyYWdnYWJsZS5maXhQb3NpdGlvbiA9IG5leHREcmFnZ2FibGUuZml4UG9zaXRpb25cbiAgICAgICAgdGhpcy5tb3ZlT3JTYXZlKG5leHREcmFnZ2FibGUsIGZpeFBvc2l0aW9uLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpO1xuICAgICAgICBbdGhpcy5kcmFnZ2FibGVzW2N1cnJlbnRJbmRleF0sIHRoaXMuZHJhZ2dhYmxlc1tjdXJyZW50SW5kZXggKyAxXV0gPSBbdGhpcy5kcmFnZ2FibGVzW2N1cnJlbnRJbmRleCArIDFdLCB0aGlzLmRyYWdnYWJsZXNbY3VycmVudEluZGV4XV1cbiAgICAgICAgdGhpcy5leGNoYW5nZURyYWdnYWJsZUlmUG9zc2libGUoZHJhZ2dhYmxlKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChkcmFnZ2FibGUudXBEaXJlY3Rpb24gJiYgcHJldkRyYWdnYWJsZSkge1xuICAgICAgY29uc3QgZGlzdGFuY2UgPSB0aGlzLm9wdGlvbnMuZ2V0RGlzdGFuY2UoZHJhZ2dhYmxlLnBvc2l0aW9uLCBwcmV2RHJhZ2dhYmxlLnBvc2l0aW9uKVxuICAgICAgaWYgKGRpc3RhbmNlIDwgdGhpcy5vcHRpb25zLnJhZGl1cykge1xuICAgICAgICBkcmFnZ2FibGUuZml4UG9zaXRpb24gPSBwcmV2RHJhZ2dhYmxlLmZpeFBvc2l0aW9uXG4gICAgICAgIHRoaXMubW92ZU9yU2F2ZShwcmV2RHJhZ2dhYmxlLCBmaXhQb3NpdGlvbiwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKTtcbiAgICAgICAgW3RoaXMuZHJhZ2dhYmxlc1tjdXJyZW50SW5kZXhdLCB0aGlzLmRyYWdnYWJsZXNbY3VycmVudEluZGV4IC0gMV1dID0gW3RoaXMuZHJhZ2dhYmxlc1tjdXJyZW50SW5kZXggLSAxXSwgdGhpcy5kcmFnZ2FibGVzW2N1cnJlbnRJbmRleF1dXG4gICAgICAgIHRoaXMuZXhjaGFuZ2VEcmFnZ2FibGVJZlBvc3NpYmxlKGRyYWdnYWJsZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc29ydGFibGVGYWN0b3J5KHBhcmVudEVsZW1lbnQsIGVsZW1lbnRzLCBvcHRpb25zPXt9KSB7XG4gIGNvbnN0IGRyYWdnYWJsZU9wdGlvbnMgPSBvcHRpb25zLmRyYWdnYWJsZSB8fCB7fVxuICBjb25zdCBsaXN0T3B0aW9ucyA9IG9wdGlvbnMubGlzdCB8fCB7fVxuICBkcmFnZ2FibGVPcHRpb25zLnBhcmVudCA9IGRyYWdnYWJsZU9wdGlvbnMucGFyZW50IHx8IHBhcmVudEVsZW1lbnRcbiAgZWxlbWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChlbGVtZW50cylcblxuICBjb25zdCBkcmFnZ2FibGVzID0gZWxlbWVudHMubWFwKChlbGVtZW50KSA9PiB7XG4gICAgcmV0dXJuIG5ldyBEcmFnZ2FibGUoZWxlbWVudCwgZHJhZ2dhYmxlT3B0aW9ucylcbiAgfSlcblxuICByZXR1cm4gbmV3IFNvcnRhYmxlKGRyYWdnYWJsZXMsIGxpc3RPcHRpb25zKVxufVxuXG5leHBvcnQgeyBTb3J0YWJsZSwgc29ydGFibGVGYWN0b3J5IH1cbiIsIid1c2Ugc3RyaWN0J1xuXG5pbXBvcnQgY3JlYXRlQ2FudmFzIGZyb20gJy4vdXRpbHMvY3JlYXRlY2FudmFzJ1xuaW1wb3J0IHsgR2VvbWV0cnkgfSBmcm9tICcuL2dlb21ldHJ5J1xuaW1wb3J0IHsgYm91bmRUb0xpbmUgfSBmcm9tICcuL2JvdW5kJ1xuaW1wb3J0IHsgRHJhZ2dhYmxlIH0gZnJvbSAnLi9kcmFnZ2FibGUnXG5cbmNsYXNzIFNwaWRlciB7XG4gIGNvbnN0cnVjdG9yKGFyZWEsIGVsZW1lbnRzLCBvcHRpb25zPXt9KSB7XG4gICAgY29uc3QgYXJlYVJlY3RhbmdsZSA9IEdlb21ldHJ5LmNyZWF0ZVJlY3RhbmdsZUZyb21FbGVtZW50KGFyZWEsIGFyZWEpXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBhbmdsZTogMCxcbiAgICAgIGRBbmdsZTogMiAqIE1hdGguUEkgLyBlbGVtZW50cy5sZW5ndGgsXG4gICAgICBjZW50ZXI6IGFyZWFSZWN0YW5nbGUuZ2V0Q2VudGVyKCksXG4gICAgICBzdGFydFJhZGl1czogNTAsXG4gICAgICBlbmRSYWRpdXM6IGFyZWFSZWN0YW5nbGUuZ2V0TWluU2lkZSgpIC8gMixcbiAgICAgIGxpbmVXaWR0aDogMixcbiAgICAgIHN0cm9rZVN0eWxlOiAnI2ZmNTU3NycsXG4gICAgICBmaWxsU3R5bGU6ICdyZ2JhKDE1MCwyNTUsNTAsMC44KSdcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGhpcy5hcmVhID0gYXJlYVxuICAgIHRoaXMuYXJlYVJlY3RhbmdsZSA9IGFyZWFSZWN0YW5nbGVcbiAgICB0aGlzLmluaXQoZWxlbWVudHMpXG4gIH1cblxuICBpbml0KGVsZW1lbnRzKSB7XG4gICAgdGhpcy5jYW52YXMgPSBjcmVhdGVDYW52YXModGhpcy5hcmVhLCB0aGlzLmFyZWFSZWN0YW5nbGUpXG4gICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gZWxlbWVudHMubWFwKChlbGVtZW50LCBpKSA9PiB7XG4gICAgICBjb25zdCBhbmdsZSA9IHRoaXMub3B0aW9ucy5hbmdsZSArIGkgKiB0aGlzLm9wdGlvbnMuZEFuZ2xlXG4gICAgICBjb25zdCBoYWxmU2l6ZSA9IEdlb21ldHJ5LmdldFNpemVPZkVsZW1lbnQoZWxlbWVudCkubXVsdCgwLjUpXG4gICAgICBjb25zdCBzdGFydCA9IEdlb21ldHJ5LmdldFBvaW50RnJvbVJhZGlhbFN5c3RlbShhbmdsZSwgdGhpcy5vcHRpb25zLnN0YXJ0UmFkaXVzLCB0aGlzLm9wdGlvbnMuY2VudGVyKS5zdWIoaGFsZlNpemUpXG4gICAgICBjb25zdCBlbmQgPSBHZW9tZXRyeS5nZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oYW5nbGUsIHRoaXMub3B0aW9ucy5lbmRSYWRpdXMsIHRoaXMub3B0aW9ucy5jZW50ZXIpLnN1YihoYWxmU2l6ZSlcbiAgICAgIGNvbnN0IGJvdW5kID0gYm91bmRUb0xpbmUoc3RhcnQsIGVuZClcblxuICAgICAgcmV0dXJuIG5ldyBEcmFnZ2FibGUoZWxlbWVudCwge1xuICAgICAgICBwYXJlbnQ6IHRoaXMuYXJlYSxcbiAgICAgICAgYm91bmQ6IGJvdW5kLFxuICAgICAgICBwb3NpdGlvbjogc3RhcnQsXG4gICAgICAgIG9uTW92ZTogKCkgPT4ge1xuICAgICAgICAgIHRoaXMuZHJhdygpXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgdGhpcy5pc0luaXQgPSB0cnVlXG4gICAgdGhpcy5kcmF3KClcbiAgfVxuXG4gIGRyYXcoKSB7XG4gICAgaWYgKCF0aGlzLmlzSW5pdCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy5hcmVhUmVjdGFuZ2xlLnNpemUueCwgdGhpcy5hcmVhUmVjdGFuZ2xlLnNpemUueSlcbiAgICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKClcblxuICAgIGxldCBwb2ludCA9IHRoaXMuZHJhZ2dhYmxlc1swXS5nZXRDZW50ZXIoKVxuICAgIHRoaXMuY29udGV4dC5tb3ZlVG8ocG9pbnQueCwgcG9pbnQueSlcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kcmFnZ2FibGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBwb2ludCA9IHRoaXMuZHJhZ2dhYmxlc1tpXS5nZXRDZW50ZXIoKVxuICAgICAgdGhpcy5jb250ZXh0LmxpbmVUbyhwb2ludC54LCBwb2ludC55KVxuICAgIH1cbiAgICB0aGlzLmNvbnRleHQuY2xvc2VQYXRoKClcbiAgICB0aGlzLmNvbnRleHQubGluZVdpZHRoID0gdGhpcy5vcHRpb25zLmxpbmVXaWR0aFxuICAgIHRoaXMuY29udGV4dC5zdHJva2VTdHlsZSA9IHRoaXMub3B0aW9ucy5zdHJva2VTdHlsZVxuICAgIHRoaXMuY29udGV4dC5zdHJva2UoKVxuICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSB0aGlzLm9wdGlvbnMuZmlsbFN0eWxlXG4gICAgdGhpcy5jb250ZXh0LmZpbGwoKVxuICB9XG59XG5cbmV4cG9ydCB7IFNwaWRlciB9XG4iLCJpbXBvcnQgcmFuZ2UgZnJvbSAnLi91dGlscy9yYW5nZS5qcydcbmltcG9ydCByZW1vdmVJdGVtcyBmcm9tICdyZW1vdmUtYXJyYXktaXRlbXMnXG5pbXBvcnQgZ2V0RGVmYXVsdFBhcmVudCBmcm9tICcuL3V0aWxzL2dldGRlZmF1bHRwYXJlbnQnXG5pbXBvcnQgRXZlbnQgZnJvbSAnLi9ldmVudCdcbmltcG9ydCB7IEdlb21ldHJ5IH0gZnJvbSAnLi9nZW9tZXRyeSdcbmltcG9ydCB7IHBvc2l0aW9uVHlwZSwgc29ydGluZ0ZhY3RvcnksIHBvc2l0aW9uRmFjdG9yeSB9IGZyb20gJy4vcG9zaXRpb25pbmcnXG5pbXBvcnQgeyBzY29wZXMsIGRlZmF1bHRTY29wZSB9IGZyb20gJy4vc2NvcGUnXG5cbmNvbnN0IERyYWdlZSA9IHsgcG9zaXRpb25UeXBlLCAgcG9zaXRpb25GYWN0b3J5LCBzb3J0aW5nRmFjdG9yeSwgc2NvcGVzLCBFdmVudCB9Ly90b2RvIHJlbW92ZSBhZnRlciByZWZhY3RvcmVcblxuY29uc3QgYWRkVG9EZWZhdWx0U2NvcGUgPSBmdW5jdGlvbih0YXJnZXQpIHtcbiAgZGVmYXVsdFNjb3BlLmFkZFRhcmdldCh0YXJnZXQpXG59XG5cbmNsYXNzIFRhcmdldCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGRyYWdnYWJsZXMsIG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0IHRhcmdldCA9IHRoaXNcbiAgICBjb25zdCBwYXJlbnQgPSBvcHRpb25zLnBhcmVudCB8fCBnZXREZWZhdWx0UGFyZW50KGVsZW1lbnQpXG5cbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHRpbWVFbmQ6IDIwMCxcbiAgICAgIHRpbWVFeGNhbmdlOiA0MDAsXG4gICAgICBwYXJlbnQ6IHBhcmVudCxcbiAgICAgIHNvcnRpbmc6IERyYWdlZS5zb3J0aW5nRmFjdG9yeShEcmFnZWUucG9zaXRpb25UeXBlLmZsb2F0TGVmdCkoODAsIEdlb21ldHJ5LnRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3RvcnkoeyB4OiAxLCB5OiA0IH0pKSxcbiAgICAgIHBvc2l0aW9uaW5nOiBEcmFnZWUucG9zaXRpb25GYWN0b3J5KERyYWdlZS5wb3NpdGlvblR5cGUuZmxvYXRMZWZ0KSh0aGlzLmdldFJlY3RhbmdsZS5iaW5kKHRoaXMpLCB7IHJlbW92YWJsZTogdHJ1ZSB9KVxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG4gICAgZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS50YXJnZXRzLnB1c2godGFyZ2V0KSlcbiAgICB0aGlzLmRyYWdnYWJsZXMgPSBkcmFnZ2FibGVzXG4gICAgdGhpcy5vbkFkZCA9IG5ldyBEcmFnZWUuRXZlbnQodGhpcylcbiAgICB0aGlzLmJlZm9yZUFkZCA9IG5ldyBEcmFnZWUuRXZlbnQodGhpcylcbiAgICB0aGlzLm9uUmVtb3ZlID0gbmV3IERyYWdlZS5FdmVudCh0aGlzKVxuXG4gICAgaWYgKG9wdGlvbnMub25SZW1vdmUpIHtcbiAgICAgIHRoaXMub25SZW1vdmUuYWRkKG9wdGlvbnMub25SZW1vdmUpXG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMub25BZGQpIHtcbiAgICAgIHRoaXMub25BZGQuYWRkKG9wdGlvbnMub25BZGQpXG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuYmVmb3JlQWRkKSB7XG4gICAgICB0aGlzLmJlZm9yZUFkZC5hZGQob3B0aW9ucy5iZWZvcmVBZGQpXG4gICAgfVxuXG4gICAgVGFyZ2V0Lm9uQ3JlYXRlLmZpcmUodGhpcylcblxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBpbml0KCkge1xuICAgIGxldCByZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXdcblxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzID0gdGhpcy5kcmFnZ2FibGVzLmZpbHRlcigoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBsZXQgZWxlbWVudCA9IGRyYWdnYWJsZS5lbGVtZW50LnBhcmVudE5vZGVcbiAgICAgIHdoaWxlIChlbGVtZW50KSB7XG4gICAgICAgIGlmIChlbGVtZW50ID09PSB0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGVcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH0pXG5cbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMubGVuZ3RoKSB7XG4gICAgICBpbmRleGVzT2ZOZXcgPSByYW5nZSh0aGlzLmlubmVyRHJhZ2dhYmxlcy5sZW5ndGgpXG4gICAgICByZWN0YW5nbGVzID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICAgIH0pLCBpbmRleGVzT2ZOZXcpXG4gICAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIGluZGV4ZXNPZk5ldylcbiAgICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gdGhpcy5vbkFkZC5maXJlKGRyYWdnYWJsZSkpXG4gICAgfVxuICB9XG5cbiAgZ2V0UmVjdGFuZ2xlKCkge1xuICAgIHJldHVybiBHZW9tZXRyeS5jcmVhdGVSZWN0YW5nbGVGcm9tRWxlbWVudChcbiAgICAgIHRoaXMuZWxlbWVudCxcbiAgICAgIHRoaXMub3B0aW9ucy5wYXJlbnQsXG4gICAgICB0aGlzLm9wdGlvbnMuaXNDb250ZW50Qm94U2l6ZSxcbiAgICAgIHRydWVcbiAgICApXG4gIH1cblxuICBjYXRjaERyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmNhdGNoRHJhZ2dhYmxlKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmNhdGNoRHJhZ2dhYmxlKHRoaXMsIGRyYWdnYWJsZSlcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGFyZ2V0UmVjdGFuZ2xlID0gdGhpcy5nZXRSZWN0YW5nbGUoKVxuICAgICAgY29uc3QgZHJhZ2dhYmxlU3F1YXJlID0gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpLmdldFNxdWFyZSgpXG5cbiAgICAgIHJldHVybiBkcmFnZ2FibGVTcXVhcmUgPCB0YXJnZXRSZWN0YW5nbGUuZ2V0U3F1YXJlKClcbiAgICAgICAgICAgICAgJiYgdGFyZ2V0UmVjdGFuZ2xlLmluY2x1ZGVQb2ludChkcmFnZ2FibGUuZ2V0Q2VudGVyKCkpXG4gICAgfVxuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UmVjdGFuZ2xlKCkucG9zaXRpb25cbiAgfVxuXG4gIGdldFNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UmVjdGFuZ2xlKCkuc2l6ZVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICBEcmFnZWUuc2NvcGVzLmZvckVhY2goKHNjb3BlKSA9PiByZW1vdmVJdGVtcyhzY29wZS50YXJnZXRzLCB0aGlzKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBbXSlcbiAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIFtdLCAwKVxuICB9XG5cbiAgb25FbmQoZHJhZ2dhYmxlKSB7XG4gICAgY29uc3QgbmV3RHJhZ2dhYmxlc0luZGV4ID0gW11cbiAgICBjb25zdCBpbmNsdWRlUG9pbnQgPSB0aGlzLmdldFJlY3RhbmdsZSgpLmluY2x1ZGVQb2ludChkcmFnZ2FibGUuZ2V0UG9zaXRpb24oKSlcblxuICAgIGlmICghaW5jbHVkZVBvaW50KSB7XG4gICAgICBpZiAodGhpcy5nZXRSZWN0YW5nbGUoKS5pbmNsdWRlUG9pbnQoZHJhZ2dhYmxlLmdldENlbnRlcigpKSkge1xuICAgICAgICBkcmFnZ2FibGUucG9zaXRpb24gPSBkcmFnZ2FibGUuZ2V0Q2VudGVyKCkuY2xvbmUoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5iZWZvcmVBZGQuZmlyZShkcmFnZ2FibGUpXG5cbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcyA9IHRoaXMub3B0aW9ucy5zb3J0aW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLCBbZHJhZ2dhYmxlXSwgbmV3RHJhZ2dhYmxlc0luZGV4KVxuICAgIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLm9wdGlvbnMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgbmV3RHJhZ2dhYmxlc0luZGV4LCBkcmFnZ2FibGUpXG5cbiAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIG5ld0RyYWdnYWJsZXNJbmRleClcbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMSkge1xuICAgICAgdGhpcy5hZGRSZW1vdmVPbk1vdmUoZHJhZ2dhYmxlKVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgaW5kZXhlc09mTmV3LCB0aW1lKSB7XG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuc2xpY2UoMCkuZm9yRWFjaCgoZHJhZ2dhYmxlLCBpKSA9PiB7XG4gICAgICBjb25zdCByZWN0ID0gcmVjdGFuZ2xlc1tpXSxcbiAgICAgICAgdGltZUVuZCA9IHRpbWUgfHwgdGltZSA9PT0gMCA/IHRpbWUgOiBpbmRleGVzT2ZOZXcuaW5kZXhPZihpKSAhPT0gLTEgPyB0aGlzLm9wdGlvbnMudGltZUVuZCA6IHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZVxuXG4gICAgICBpZiAocmVjdC5yZW1vdmFibGUpIHtcbiAgICAgICAgZHJhZ2dhYmxlLm1vdmUoZHJhZ2dhYmxlLmluaXRQb3NpdGlvbiwgdGltZUVuZCwgdHJ1ZSwgdHJ1ZSlcbiAgICAgICAgcmVtb3ZlSXRlbXModGhpcy5pbm5lckRyYWdnYWJsZXMsIGRyYWdnYWJsZSlcblxuICAgICAgICB0aGlzLm9uUmVtb3ZlLmZpcmUoZHJhZ2dhYmxlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZHJhZ2dhYmxlLm1vdmUocmVjdC5wb3NpdGlvbiwgdGltZUVuZCwgdHJ1ZSwgdHJ1ZSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgYWRkKGRyYWdnYWJsZSwgdGltZSkge1xuICAgIGNvbnN0IG5ld0RyYWdnYWJsZXNJbmRleCA9IHRoaXMuaW5uZXJEcmFnZ2FibGVzLmxlbmd0aFxuXG4gICAgdGhpcy5iZWZvcmVBZGQuZmlyZShkcmFnZ2FibGUpXG5cbiAgICB0aGlzLnB1c2hJbm5lckRyYWdnYWJsZShkcmFnZ2FibGUpXG4gICAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBuZXdEcmFnZ2FibGVzSW5kZXgsIGRyYWdnYWJsZSlcblxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgW25ld0RyYWdnYWJsZXNJbmRleF0sIHRpbWUgfHwgMClcbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMSkge1xuICAgICAgdGhpcy5hZGRSZW1vdmVPbk1vdmUoZHJhZ2dhYmxlKVxuICAgIH1cbiAgfVxuXG4gIHB1c2hJbm5lckRyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpPT09LTEpIHtcbiAgICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxuICAgIH1cbiAgfVxuXG4gIGFkZFJlbW92ZU9uTW92ZShkcmFnZ2FibGUpIHtcbiAgICBkcmFnZ2FibGUub25Nb3ZlLmFkZCh0aGlzLnJlbW92ZUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICB0aGlzLnJlbW92ZShkcmFnZ2FibGUpXG4gICAgfSlcblxuICAgIHRoaXMub25BZGQuZmlyZShkcmFnZ2FibGUpXG4gIH1cblxuICByZW1vdmUoZHJhZ2dhYmxlKSB7XG4gICAgZHJhZ2dhYmxlLm9uTW92ZS5yZW1vdmUodGhpcy5yZW1vdmVIYW5kbGVyKVxuXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSlcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5zcGxpY2UoaW5kZXgsIDEpXG5cbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgfSksIFtdKVxuXG4gICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBbXSlcbiAgICB0aGlzLm9uUmVtb3ZlLmZpcmUoZHJhZ2dhYmxlKVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUubW92ZShkcmFnZ2FibGUuaW5pdFBvc2l0aW9uLCAwLCB0cnVlLCB0cnVlKVxuICAgICAgdGhpcy5vblJlbW92ZS5maXJlKGRyYWdnYWJsZSlcbiAgICB9KVxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzID0gW11cbiAgfVxuXG4gIGdldFNvcnRlZERyYWdnYWJsZXMoKSB7XG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuc2xpY2UoKVxuICB9XG59XG5cblRhcmdldC5vbkNyZWF0ZSA9IG5ldyBEcmFnZWUuRXZlbnQoVGFyZ2V0LCB7IGlzUmV2ZXJzZTogdHJ1ZSwgaXNTdG9wT25UcnVlOiB0cnVlIH0pXG5UYXJnZXQub25DcmVhdGUuYWRkKGFkZFRvRGVmYXVsdFNjb3BlKVxuXG5leHBvcnQgeyBUYXJnZXQgfVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGhhc0NsYXNzKGVsZW1lbnQsIGMpIHtcbiAgY29uc3QgcmUgPSBuZXcgUmVnRXhwKCcoXnxcXFxccyknICsgYyArICcoXFxcXHN8JCknLCAnZycpXG4gIHJldHVybiAocmUudGVzdChlbGVtZW50LmNsYXNzTmFtZSkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRDbGFzcyhlbGVtZW50LCBjKSB7XG4gIGlmICghaGFzQ2xhc3MoZWxlbWVudCwgYykpIHtcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IChlbGVtZW50LmNsYXNzTmFtZSArICcgJyArIGMpLnJlcGxhY2UoL1xccysvZywgJyAnKS5yZXBsYWNlKC8oXiB8ICQpL2csICcnKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDbGFzcyhlbGVtZW50LCBjKSB7XG4gIGNvbnN0IHJlID0gbmV3IFJlZ0V4cCgnKF58XFxcXHMpJyArIGMgKyAnKFxcXFxzfCQpJywgJ2cnKVxuICBlbGVtZW50LmNsYXNzTmFtZSA9IGVsZW1lbnQuY2xhc3NOYW1lLnJlcGxhY2UocmUsICckMScpLnJlcGxhY2UoL1xccysvZywgJyAnKS5yZXBsYWNlKC8oXiB8ICQpL2csICcnKVxufVxuIiwiZnVuY3Rpb24gc2V0U3R5bGUoZWxlbWVudCwgc3R5bGUpIHtcbiAgc3R5bGUgPSBzdHlsZSB8fCB7fVxuICBsZXQgY3NzVGV4dCA9ICcnXG4gIGZvciAoY29uc3Qga2V5IGluIHN0eWxlKSB7XG4gICAgaWYgKHN0eWxlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGNzc1RleHQgKz0ga2V5ICsgJzogJyArIHN0eWxlW2tleV0gKyAnOyAnXG4gICAgfVxuICB9XG5cbiAgZWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gY3NzVGV4dFxufVxuXG5mdW5jdGlvbiBhcHBlbmRGaXJzdENoaWxkKGVsZW1lbnQsIG5vZGUpIHtcbiAgaWYgKGVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgIGVsZW1lbnQuaW5zZXJ0QmVmb3JlKG5vZGUsIGVsZW1lbnQuZmlyc3RDaGlsZClcbiAgfSBlbHNlIHtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKG5vZGUpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQ2FudmFzKGFyZWEsIHJlY3RhZ2xlKSB7XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXG4gIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShhcmVhKS5wb3NpdGlvbiA9PT0gJ3N0YXRpYycpIHtcbiAgICBhcmVhLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJ1xuICB9XG5cbiAgY2FudmFzLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCByZWN0YWdsZS5zaXplLnggKyAncHgnKVxuICBjYW52YXMuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCByZWN0YWdsZS5zaXplLnkgKyAncHgnKVxuICBzZXRTdHlsZShjYW52YXMsIHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBsZWZ0OiByZWN0YWdsZS5wb3NpdGlvbi55ICsgJ3B4JyxcbiAgICB0b3A6IHJlY3RhZ2xlLnBvc2l0aW9uLnkgKyAncHgnLFxuICAgIHdpZHRoOiByZWN0YWdsZS5zaXplLnggKyAncHgnLFxuICAgIGhlaWdodDogcmVjdGFnbGUuc2l6ZS55ICsgJ3B4J1xuICB9KVxuICBhcHBlbmRGaXJzdENoaWxkKGFyZWEsIGNhbnZhcylcbiAgcmV0dXJuIGNhbnZhc1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0RGVmYXVsdFBhcmVudChlbGVtZW50KSB7XG4gIGxldCBwYXJlbnQgPSBlbGVtZW50LnBhcmVudE5vZGVcbiAgd2hpbGUgKHBhcmVudC5wYXJlbnROb2RlICYmIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHBhcmVudClbJ3Bvc2l0aW9uJ10gPT09ICdzdGF0aWMnKSB7XG4gICAgcGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGVcbiAgfVxuICByZXR1cm4gcGFyZW50XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByYW5nZShzdGFydCwgc3RvcCwgc3RlcCkge1xuICBjb25zdCByZXN1bHQgPSBbXVxuICBpZiAodHlwZW9mIHN0b3AgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgc3RvcCA9IHN0YXJ0XG4gICAgc3RhcnQgPSAwXG4gIH1cbiAgaWYgKHR5cGVvZiBzdGVwID09PSAndW5kZWZpbmVkJykge1xuICAgIHN0ZXAgPSAxXG4gIH1cbiAgaWYgKChzdGVwID4gMCAmJiBzdGFydCA+PSBzdG9wKSB8fCAoc3RlcCA8IDAgJiYgc3RhcnQgPD0gc3RvcCkpIHtcbiAgICByZXR1cm4gW11cbiAgfVxuICBmb3IgKGxldCBpID0gc3RhcnQ7IHN0ZXAgPiAwID8gaSA8IHN0b3AgOiBpID4gc3RvcDsgaSArPSBzdGVwKSB7XG4gICAgcmVzdWx0LnB1c2goaSlcbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG4iXSwic291cmNlUm9vdCI6IiJ9