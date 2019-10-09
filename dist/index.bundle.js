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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9EcmFnZWUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0RyYWdlZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9EcmFnZWUvLi9ub2RlX21vZHVsZXMvZGVzYW5kcm8tZ2V0LXN0eWxlLXByb3BlcnR5L2dldC1zdHlsZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9ub2RlX21vZHVsZXMvcmVtb3ZlLWFycmF5LWl0ZW1zL2Rpc3QvcmVtb3ZlLWFycmF5LWl0ZW1zLmVzbS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvYXJjc2xpZGVyLmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy9ib3VuZC5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvY2hhcnQuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL2RyYWdnYWJsZS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvZXZlbnQuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL2V4cGFuZG5hdGl2ZS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvZ2VvbWV0cnkuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy9saXN0LmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy9saXN0c3dpdGNoZXIuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL3Bvc2l0aW9uaW5nLmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy9zY29wZS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvc29ydGFibGUuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL3NwaWRlci5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvdGFyZ2V0LmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy91dGlscy9jbGFzc2VzLmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy91dGlscy9jcmVhdGVjYW52YXMuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL3V0aWxzL2dldGRlZmF1bHRwYXJlbnQuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL3V0aWxzL3JhbmdlLmpzIl0sIm5hbWVzIjpbIkFyY1NsaWRlciIsImFyZWEiLCJlbGVtZW50Iiwib3B0aW9ucyIsImFyZWFSZWN0YW5nbGUiLCJHZW9tZXRyeSIsImNyZWF0ZVJlY3RhbmdsZUZyb21FbGVtZW50IiwiaGFsZlNpemUiLCJnZXRTaXplT2ZFbGVtZW50IiwibXVsdCIsIk9iamVjdCIsImFzc2lnbiIsImNlbnRlciIsImdldENlbnRlciIsInJhZGl1cyIsImdldE1pblNpZGUiLCJzdGFydEFuZ2xlIiwiTWF0aCIsIlBJIiwiZW5kQW5nbGUiLCJhbmdsZXMiLCJvbkNoYW5nZSIsInRpbWUiLCJzaGlmdGVkQ2VudGVyIiwic3ViIiwiaW5pdCIsImFuZ2xlIiwicG9zaXRpb24iLCJnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0iLCJib3VuZCIsImJvdW5kVG9BcmMiLCJkcmFnZ2FibGUiLCJEcmFnZ2FibGUiLCJwYXJlbnQiLCJvbk1vdmUiLCJjaGFuZ2UiLCJnZXRBbmdsZSIsInVwZGF0ZUFuZ2xlIiwibm9ybWFsaXplQW5nbGUiLCJtb3ZlIiwiYm91bmRUb1JlY3RhbmdsZSIsInJlY3RhbmdsZSIsInBvaW50Iiwic2l6ZSIsImNhbGNQb2ludCIsImNsb25lIiwicmVjdFAyIiwiZ2V0UDMiLCJ4IiwieSIsImJvdW5kVG9FbGVtZW50IiwicmV0RnVuYyIsImFwcGx5IiwiYXJndW1lbnRzIiwicmVmcmVzaCIsImJvdW5kVG9MaW5lWCIsInN0YXJ0WSIsImVuZFkiLCJib3VuZFRvTGluZVkiLCJzdGFydFgiLCJlbmRYIiwiYm91bmRUb0xpbmUiLCJzdGFydCIsImVuZCIsImFscGhhIiwiYXRhbjIiLCJiZXRhIiwic29tZUsiLCJjb3NCZXRhIiwiY29zIiwic2luQmV0YSIsInNpbiIsInBvaW50MiIsIlBvaW50IiwibmV3RW5kIiwiZ2V0UG9pbnRJbkxpbmVCeUxlbmdodCIsInBvaW50Q3Jvc3NpbmciLCJkaXJlY3RDcm9zc2luZyIsImJvdW5kVG9DaXJjbGUiLCJfc2l6ZSIsImJvdW5kZWRQb2ludCIsInN0YXJ0QWdsZSIsImJvdW5kU3RhcnRBbmdsZSIsImJvdW5kRW5kdEFuZ2xlIiwiYm91bmRBbmdsZSIsImlzVG91Y2giLCJ3aW5kb3ciLCJyYW5kb21Db2xvciIsInJuZCIsInJvdW5kIiwicmFuZG9tIiwidG9IZXhTdHJpbmciLCJkaWdpdCIsInN0ciIsInRvU3RyaW5nIiwibGVuZ3RoIiwiZ2V0QXJyYXlXaXRoQm91bmRJbmRleGVzIiwiaW5kZXgiLCJyZXRJbmRleGVzIiwicHVzaCIsIkNoYXJ0IiwiZWxlbWVudHMiLCJ0b3VjaFJhZGl1cyIsImZpbGxTdHlsZXMiLCJyYW5nZSIsIm1hcCIsImluaXRBbmdsZXMiLCJ0b1JhZGlhbiIsImxpbWl0SW1nIiwibGltaXRJbWdPZmZzZXQiLCJpc1NlbGVjdGFibGUiLCJvbkRyYXciLCJjYW52YXMiLCJjcmVhdGVDYW52YXMiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImRyYWdnYWJsZXMiLCJpIiwiZ2V0Qm91bmRBbmdsZSIsImRyYXciLCJpc0luaXQiLCJpbml0U2VsZWN0Iiwic2V0QWN0aXZlQXJjIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50cyIsImUiLCJjaGFuZ2VkVG91Y2hlcyIsInBhZ2VYIiwiY2xpZW50WCIsInBhZ2VZIiwiY2xpZW50WSIsImNhbnZhc09mZnNldCIsImdldE9mZnNldCIsImdldEFyY09uUG9pbnQiLCJhY3RpdmVBcmNJbmRleCIsImdldFNpemUiLCJpc0Nsb3NzaW5nIiwic2lnbiIsInVwZGF0ZUFuZ2xlcyIsImNsZWFyUmVjdCIsImZvckVhY2giLCJfZHJhZ2dhYmxlIiwiZHJhd0FyYyIsImVuYWJsZUluZGV4ZXMiLCJpbmRleE9mIiwiZHJhd0xpbWl0SW1nIiwib3B0cyIsImNsb25lT2JqIiwiY2FsbCIsImNvbG9yIiwiZ2V0RmlsbFN0eWxlIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwiYXJjIiwibGluZVRvIiwiY2xvc2VQYXRoIiwiZmlsbFN0eWxlIiwiZmlsbCIsImltZyIsIkFycmF5IiwiaGVpZ2h0IiwiYWRkIiwidHJhbnNsYXRlIiwicm90YXRlIiwiZHJhd0ltYWdlIiwic2V0VHJhbnNmb3JtIiwic2xpY2UiLCJiYXNlQW5nbGUiLCJkaWZmQW5nbGUiLCJnZXRBbmdsZXNEaWZmIiwiZ2V0RGlzdGFuY2UiLCJvZmZzZXQiLCJqIiwiZW5hYmxlIiwiRHJhZ2VlIiwiRXZlbnQiLCJtb3VzZUV2ZW50cyIsInRvdWNoRXZlbnRzIiwidHJhbnNmb3JtUHJvcGVydHkiLCJnZXRTdHlsZVByb3BlcnR5IiwidHJhbnNpdGlvblByb3BlcnR5IiwiZ2V0VG91Y2hCeUlEIiwidG91Y2hJZCIsImlkZW50aWZpZXIiLCJwcmV2ZW50RG91YmxlSW5pdCIsIm1lc3NhZ2UiLCJzb21lIiwiZXhpc3RpbmciLCJhZGRUb0RlZmF1bHRTY29wZSIsImRlZmF1bHRTY29wZSIsImFkZERyYWdnYWJsZSIsImdldERlZmF1bHRQYXJlbnQiLCJ0YXJnZXRzIiwic3RhcnRGaWx0ZXIiLCJpc0NvbnRlbnRCb3hTaXplIiwib25FbmQiLCJpc1JldmVyc2UiLCJpc1N0b3BPblRydWUiLCJvblN0YXJ0Iiwib25DcmVhdGUiLCJmaXJlIiwiX2VuYWJsZSIsImZpeFBvc2l0aW9uIiwiaW5pdFBvc2l0aW9uIiwiX2RyYWdTdGFydCIsImRyYWdTdGFydCIsImJpbmQiLCJfZHJhZ01vdmUiLCJkcmFnTW92ZSIsIl9kcmFnRW5kIiwiZHJhZ0VuZCIsIl9yZWNhbHVsYXRlIiwiX3RyYW5zZm9ybVBvc2l0aW9uIiwidHJhbnNmb3JtIiwic3R5bGUiLCJ0cmFuc2xhdGVDc3MiLCJ1YSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsIm1zaWUiLCJ0ZXN0IiwicmVwbGFjZSIsImlzRml4IiwiaXNTaWxlbnQiLCJkZXRlcm1pbmVEaXJlY3Rpb24iLCJfc2V0VHJhbnNsYXRlIiwic2V0UG9zaXRpb24iLCJnZXRQb3NpdGlvbiIsImxlZnREaXJlY3Rpb24iLCJyaWdodERpcmVjdGlvbiIsInVwRGlyZWN0aW9uIiwiZG93bkRpcmVjdGlvbiIsImV2ZW50IiwiY3VycmVudEV2ZW50IiwiaXNUb3VjaEV2ZW50IiwiVG91Y2hFdmVudCIsIl9zdGFydFRvdWNoUG9pbnQiLCJfc3RhcnRQb3NpdGlvbiIsIl90b3VjaElkIiwic3RvcFByb3BhZ2F0aW9uIiwidGFyZ2V0IiwiSFRNTElucHV0RWxlbWVudCIsInByZXZlbnREZWZhdWx0IiwiZm9jdXMiLCJkb2N1bWVudCIsImlzRHJhZ2dpbmciLCJhZGRDbGFzcyIsInRvdWNoIiwidG91Y2hQb2ludCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZW1vdmVDbGFzcyIsIlJlY3RhbmdsZSIsInJlc2V0IiwiZnVuY3MiLCJwcm90b3R5cGUiLCJhcmdzIiwiZnMiLCJyZXZlcnNlIiwicmV0VmFsdWUiLCJmIiwidW5zaGlmdCIsInJlbW92ZSIsInNwbGljZSIsIl9mIiwiYXVnbWVudCIsInJlY2VpdmluZ0NsYXNzIiwiZ2l2aW5nQ2xhc3MiLCJsZW4iLCJtZXRob2ROYW1lIiwiTm9kZUxpc3QiLCJwIiwiayIsInJlY3QiLCJtaW4iLCJtYXgiLCJpbmNsdWRlUG9pbnQiLCJheGlzIiwic2VsQXhpcyIsImNyb3NzUmVjdGFuZ2xlIiwiYW5kIiwidGhpc0NlbnRlciIsInJlY3RDZW50ZXIiLCJlbCIsInF1ZXJ5U2VsZWN0b3IiLCJsZWZ0IiwidG9wIiwid2lkdGgiLCJwMSIsInAyIiwiZHgiLCJkeSIsInNxcnQiLCJkaXN0YW5jZSIsImdldFhEaWZmZXJlbmNlIiwiYWJzIiwiZ2V0WURpZmZlcmVuY2UiLCJ0cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5IiwicG93IiwiaW5kZXhPZk5lYXJlc3RQb2ludCIsImFyciIsInZhbCIsInRlbXAiLCJib3VuZFBvaW50IiwiTDFQMSIsIkwxUDIiLCJMMlAxIiwiTDJQMiIsImsxIiwiazIiLCJiMSIsImIyIiwiYm91bmRUb1NlZ21lbnQiLCJMUDEiLCJMUDIiLCJQIiwiQSIsIkIiLCJBUCIsIkFCIiwiYWIyIiwiYXBfYWIiLCJ0IiwiZ2V0UG9pbnRJbkxpbmUiLCJwZXJjZW50IiwibGVuZ2h0IiwiaXNDb25zaWRlclRyYW5zbGF0ZSIsInBhcmVudE5vZGUiLCJnZXRTdW1WYWx1ZU9mU3R5bGVSdWxlIiwicnVsZXMiLCJyZWR1Y2UiLCJzdW0iLCJydWxlIiwicGFyc2VJbnQiLCJnZXRDb21wdXRlZFN0eWxlIiwiZWxSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicGFyZW50UmVjdCIsImFkZFBvaW50VG9Cb3VuZFBvaW50cyIsImJvdW5kcG9pbnRzIiwiaXNSaWdodCIsInJlc3VsdCIsImZpbHRlciIsImJQb2ludCIsImRpZmYiLCJ0b0RlZ3JlZSIsImRtaW4iLCJkbWF4IiwiZ2V0QW5nbGVEaWZmIiwiZ2V0TmVhcmVzdEFuZ2xlIiwidmFsdWUiLCJtaW5BbmdsZSIsIm1heEFuZ2xlIiwiTGlzdCIsInRpbWVFbmQiLCJ0aW1lRXhjYW5nZSIsImlzRGlzcGxhY2VtZW50IiwiaXNTb3J0YWJsZSIsImluaXREcmFnZ2FibGUiLCJtb3ZlSGFuZGxlciIsImxpc3QiLCJvbkVuZERpc3BsYXljZW1lbnQiLCJmaXhQb3NpdGlvbnMiLCJnZXRDdXJyZW50Rml4UG9zaXRpb24iLCJjdXJyZW50SW5kZXgiLCJleGNhbmdlSW5kZXgiLCJtb3ZlT3JTYXZlIiwibmV4dERyYWdnYWJsZSIsInByZXZEcmFnZ2FibGUiLCJzb3J0SWZQb3NzaWJsZSIsInNvcnRlZERyYWdnYWJsZXMiLCJnZXRTb3J0ZWREcmFnZ2FibGVzIiwidGFyZ2V0SW5kZXgiLCJpbml0UG9zaXRpb25zIiwiY29tcGFyZSIsImNvbmNhdCIsInJlbW92ZUl0ZW1zIiwiZGVzdHJveSIsInBvc2l0aW9ucyIsImxpc3RGYWN0b3J5IiwicGFyZW50RWxlbWVudCIsImRyYWdnYWJsZU9wdGlvbnMiLCJsaXN0T3B0aW9ucyIsIkxpc3RTd2l0Y2hlciIsInN0ZXBPbiIsImlzT24iLCJnZXRDdXJyZW50Rml4UG9zaXRpb25XaXRoT2ZmIiwibW92ZURyYWdnYWJsZSIsImZpeFRvT2ZmIiwibW92ZURyYWdnYWJsZVRvT2ZmIiwiZml4T2ZmUG9zaXRpb24iLCJsaXN0U3dpdGNoZXJGYWN0b3J5IiwiZHJhZ2dhYmxlRWxlbWVudHMiLCJwb3NpdGlvblR5cGUiLCJub3RDcm9zc2luZyIsImZsb2F0TGVmdCIsImZsb2F0UmlnaHQiLCJwb3NpdGlvbkZhY3RvcnkiLCJ0eXBlIiwiX29wdGlvbnMiLCJyZWN0YW5nbGVMaXN0IiwiaW5kZXhlc09mTmV3cyIsImJvdW5kUmVjdCIsInN0YXRpY1JlY3RhbmdsZUluZGV4ZXMiLCJpbmRleGVzIiwiX3JlY3QiLCJyZW1vdmFibGUiLCJpbmRleE9mU3RhdGljIiwic3RhdGljUmVjdCIsIm1vdmVUb0JvdW5kIiwiZ2V0U3F1YXJlIiwicGFkZGluZ1RvcExlZnQiLCJwYWRkaW5nQm90dG9tUmlnaHQiLCJ5R2FwQmV0d2VlbkRyYWdnYWJsZXMiLCJfaW5kZXhlc09mTmV3cyIsImdldFAyIiwiYm91bmRhcnlQb2ludHMiLCJpc1ZhbGlkIiwiYXNzaW5nIiwicGFkZGluZ1RvcFJpZ2h0IiwicGFkZGluZ0JvdHRvbUxlZnQiLCJwYWRkaW5nVG9wTmVnUmlnaHQiLCJwYWRkaW5nQm90dG9tTmVnTGVmdCIsImdldFJpZ2h0VG9wUG9pbnQiLCJfaW5kZXgiLCJnZXRMZWZ0Qm90dG9tUG9pbnQiLCJnZXRQNCIsInNvcnRpbmdGYWN0b3J5Iiwib2xkT2Jqc0xpc3QiLCJuZXdPYmpzIiwiaW5kZXhPZk5ld3MiLCJvYmpzTGlzdCIsIm9iaiIsIm5ld0xpc3QiLCJsaXN0T2xkUG9zaXRpb24iLCJuZXdPYmoiLCJzY29wZXMiLCJTY29wZSIsInNjb3BlIiwic2hvdFRhcmdldHMiLCJjYXRjaERyYWdnYWJsZSIsInNvcnQiLCJhIiwiYiIsImdldFJlY3RhbmdsZSIsImlubmVyRHJhZ2dhYmxlcyIsInRhcmdldEluZGV4ZXMiLCJmbiIsImN1cnJlbnRTY29wZSIsImFkZERyYWdnYWJsZVRvU2NvcGUiLCJhZGRUYXJnZXRUb1Njb3BlIiwiYWRkVGFyZ2V0IiwiVGFyZ2V0Iiwic2NvcGVGYWN0b3J5IiwidGFyZ2V0RWxlbWVudHMiLCJ0YXJnZXRPcHRpb25zIiwic2NvcGVPcHRpb25zIiwiU29ydGFibGUiLCJleGNoYW5nZURyYWdnYWJsZUlmUG9zc2libGUiLCJzb3J0YWJsZUZhY3RvcnkiLCJTcGlkZXIiLCJkQW5nbGUiLCJzdGFydFJhZGl1cyIsImVuZFJhZGl1cyIsImxpbmVXaWR0aCIsInN0cm9rZVN0eWxlIiwic3Ryb2tlIiwic29ydGluZyIsInBvc2l0aW9uaW5nIiwib25BZGQiLCJiZWZvcmVBZGQiLCJvblJlbW92ZSIsInJlY3RhbmdsZXMiLCJpbmRleGVzT2ZOZXciLCJ0YXJnZXRSZWN0YW5nbGUiLCJkcmFnZ2FibGVTcXVhcmUiLCJuZXdEcmFnZ2FibGVzSW5kZXgiLCJhZGRSZW1vdmVPbk1vdmUiLCJwdXNoSW5uZXJEcmFnZ2FibGUiLCJyZW1vdmVIYW5kbGVyIiwiaGFzQ2xhc3MiLCJjIiwicmUiLCJSZWdFeHAiLCJjbGFzc05hbWUiLCJzZXRTdHlsZSIsImNzc1RleHQiLCJrZXkiLCJoYXNPd25Qcm9wZXJ0eSIsImFwcGVuZEZpcnN0Q2hpbGQiLCJub2RlIiwiZmlyc3RDaGlsZCIsImluc2VydEJlZm9yZSIsImFwcGVuZENoaWxkIiwicmVjdGFnbGUiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwic3RvcCIsInN0ZXAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdD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QWlDO0FBQy9CQSxRQUFJLEdBQUcsQ0FBUDtBQUNEOztBQUNELE1BQUtBLElBQUksR0FBRyxDQUFQLElBQVluYixLQUFLLElBQUlrYixJQUF0QixJQUFnQ0MsSUFBSSxHQUFHLENBQVAsSUFBWW5iLEtBQUssSUFBSWtiLElBQXpELEVBQWdFO0FBQzlELFdBQU8sRUFBUDtBQUNEOztBQUNELE9BQUssSUFBSTNYLENBQUMsR0FBR3ZELEtBQWIsRUFBb0JtYixJQUFJLEdBQUcsQ0FBUCxHQUFXNVgsQ0FBQyxHQUFHMlgsSUFBZixHQUFzQjNYLENBQUMsR0FBRzJYLElBQTlDLEVBQW9EM1gsQ0FBQyxJQUFJNFgsSUFBekQsRUFBK0Q7QUFDN0Q3SixVQUFNLENBQUNqUCxJQUFQLENBQVlrQixDQUFaO0FBQ0Q7O0FBQ0QsU0FBTytOLE1BQVA7QUFDRCxDIiwiZmlsZSI6ImluZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiRHJhZ2VlXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkRyYWdlZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJEcmFnZWVcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLyohXG4gKiBnZXRTdHlsZVByb3BlcnR5IHYxLjAuNFxuICogb3JpZ2luYWwgYnkga2FuZ2F4XG4gKiBodHRwOi8vcGVyZmVjdGlvbmtpbGxzLmNvbS9mZWF0dXJlLXRlc3RpbmctY3NzLXByb3BlcnRpZXMvXG4gKiBNSVQgbGljZW5zZVxuICovXG5cbi8qanNoaW50IGJyb3dzZXI6IHRydWUsIHN0cmljdDogdHJ1ZSwgdW5kZWY6IHRydWUgKi9cbi8qZ2xvYmFsIGRlZmluZTogZmFsc2UsIGV4cG9ydHM6IGZhbHNlLCBtb2R1bGU6IGZhbHNlICovXG5cbiggZnVuY3Rpb24oIHdpbmRvdyApIHtcblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgcHJlZml4ZXMgPSAnV2Via2l0IE1veiBtcyBNcyBPJy5zcGxpdCgnICcpO1xudmFyIGRvY0VsZW1TdHlsZSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZTtcblxuZnVuY3Rpb24gZ2V0U3R5bGVQcm9wZXJ0eSggcHJvcE5hbWUgKSB7XG4gIGlmICggIXByb3BOYW1lICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIHRlc3Qgc3RhbmRhcmQgcHJvcGVydHkgZmlyc3RcbiAgaWYgKCB0eXBlb2YgZG9jRWxlbVN0eWxlWyBwcm9wTmFtZSBdID09PSAnc3RyaW5nJyApIHtcbiAgICByZXR1cm4gcHJvcE5hbWU7XG4gIH1cblxuICAvLyBjYXBpdGFsaXplXG4gIHByb3BOYW1lID0gcHJvcE5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBwcm9wTmFtZS5zbGljZSgxKTtcblxuICAvLyB0ZXN0IHZlbmRvciBzcGVjaWZpYyBwcm9wZXJ0aWVzXG4gIHZhciBwcmVmaXhlZDtcbiAgZm9yICggdmFyIGk9MCwgbGVuID0gcHJlZml4ZXMubGVuZ3RoOyBpIDwgbGVuOyBpKysgKSB7XG4gICAgcHJlZml4ZWQgPSBwcmVmaXhlc1tpXSArIHByb3BOYW1lO1xuICAgIGlmICggdHlwZW9mIGRvY0VsZW1TdHlsZVsgcHJlZml4ZWQgXSA9PT0gJ3N0cmluZycgKSB7XG4gICAgICByZXR1cm4gcHJlZml4ZWQ7XG4gICAgfVxuICB9XG59XG5cbi8vIHRyYW5zcG9ydFxuaWYgKCB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gIC8vIEFNRFxuICBkZWZpbmUoIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBnZXRTdHlsZVByb3BlcnR5O1xuICB9KTtcbn0gZWxzZSBpZiAoIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyApIHtcbiAgLy8gQ29tbW9uSlMgZm9yIENvbXBvbmVudFxuICBtb2R1bGUuZXhwb3J0cyA9IGdldFN0eWxlUHJvcGVydHk7XG59IGVsc2Uge1xuICAvLyBicm93c2VyIGdsb2JhbFxuICB3aW5kb3cuZ2V0U3R5bGVQcm9wZXJ0eSA9IGdldFN0eWxlUHJvcGVydHk7XG59XG5cbn0pKCB3aW5kb3cgKTtcbiIsIi8qKlxuICogUmVtb3ZlIGEgcmFuZ2Ugb2YgaXRlbXMgZnJvbSBhbiBhcnJheVxuICpcbiAqIEBmdW5jdGlvbiByZW1vdmVJdGVtc1xuICogQHBhcmFtIHtBcnJheTwqPn0gYXJyIFRoZSB0YXJnZXQgYXJyYXlcbiAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydElkeCBUaGUgaW5kZXggdG8gYmVnaW4gcmVtb3ZpbmcgZnJvbSAoaW5jbHVzaXZlKVxuICogQHBhcmFtIHtudW1iZXJ9IHJlbW92ZUNvdW50IEhvdyBtYW55IGl0ZW1zIHRvIHJlbW92ZVxuICovXG5mdW5jdGlvbiByZW1vdmVJdGVtcyAoYXJyLCBzdGFydElkeCwgcmVtb3ZlQ291bnQpIHtcbiAgdmFyIGksIGxlbmd0aCA9IGFyci5sZW5ndGg7XG5cbiAgaWYgKHN0YXJ0SWR4ID49IGxlbmd0aCB8fCByZW1vdmVDb3VudCA9PT0gMCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgcmVtb3ZlQ291bnQgPSAoc3RhcnRJZHggKyByZW1vdmVDb3VudCA+IGxlbmd0aCA/IGxlbmd0aCAtIHN0YXJ0SWR4IDogcmVtb3ZlQ291bnQpO1xuXG4gIHZhciBsZW4gPSBsZW5ndGggLSByZW1vdmVDb3VudDtcblxuICBmb3IgKGkgPSBzdGFydElkeDsgaSA8IGxlbjsgKytpKSB7XG4gICAgYXJyW2ldID0gYXJyW2kgKyByZW1vdmVDb3VudF07XG4gIH1cblxuICBhcnIubGVuZ3RoID0gbGVuO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZW1vdmVJdGVtcztcbiIsImltcG9ydCB7IEdlb21ldHJ5IH0gZnJvbSAnLi9nZW9tZXRyeSdcbmltcG9ydCB7IERyYWdnYWJsZSB9IGZyb20gJy4vZHJhZ2dhYmxlJ1xuaW1wb3J0IHsgYm91bmRUb0FyYyB9IGZyb20gJy4vYm91bmQnXG5cbmNsYXNzIEFyY1NsaWRlciB7XG4gIGNvbnN0cnVjdG9yKGFyZWEsIGVsZW1lbnQsIG9wdGlvbnM9e30pIHtcbiAgICBjb25zdCBhcmVhUmVjdGFuZ2xlID0gR2VvbWV0cnkuY3JlYXRlUmVjdGFuZ2xlRnJvbUVsZW1lbnQoYXJlYSwgYXJlYSlcbiAgICBjb25zdCBoYWxmU2l6ZSA9IEdlb21ldHJ5LmdldFNpemVPZkVsZW1lbnQoZWxlbWVudCkubXVsdCgwLjUpXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjZW50ZXI6IGFyZWFSZWN0YW5nbGUuZ2V0Q2VudGVyKCksXG4gICAgICByYWRpdXM6IGFyZWFSZWN0YW5nbGUuZ2V0TWluU2lkZSgpIC8gMixcbiAgICAgIHN0YXJ0QW5nbGU6IE1hdGguUEksXG4gICAgICBlbmRBbmdsZTogMCxcbiAgICAgIGFuZ2xlczogW01hdGguUEksIC1NYXRoLlBJIC8gNCwgMCwgTWF0aC5QSSAvIDQsIE1hdGguUEkgLyAyXSxcbiAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbigpIHt9LFxuICAgICAgdGltZTogNTAwXG4gICAgfSwgb3B0aW9ucylcblxuICAgIHRoaXMuc2hpZnRlZENlbnRlciA9IHRoaXMub3B0aW9ucy5jZW50ZXIuc3ViKGhhbGZTaXplKVxuICAgIHRoaXMub25DaGFuZ2UgPSB0aGlzLm9wdGlvbnMub25DaGFuZ2VcbiAgICB0aGlzLmFyZWEgPSBhcmVhXG4gICAgdGhpcy5pbml0KGVsZW1lbnQpXG4gIH1cblxuICBpbml0KGVsZW1lbnQpIHtcbiAgICBjb25zdCBhbmdsZSA9IHRoaXMub3B0aW9ucy5zdGFydEFuZ2xlXG4gICAgY29uc3QgcG9zaXRpb24gPSBHZW9tZXRyeS5nZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oXG4gICAgICBhbmdsZSxcbiAgICAgIHRoaXMub3B0aW9ucy5yYWRpdXMsXG4gICAgICB0aGlzLnNoaWZ0ZWRDZW50ZXJcbiAgICApXG4gICAgY29uc3QgYm91bmQgPSBib3VuZFRvQXJjKFxuICAgICAgdGhpcy5zaGlmdGVkQ2VudGVyLFxuICAgICAgdGhpcy5vcHRpb25zLnJhZGl1cyxcbiAgICAgIHRoaXMub3B0aW9ucy5zdGFydEFuZ2xlLFxuICAgICAgdGhpcy5vcHRpb25zLmVuZEFuZ2xlXG4gICAgKVxuXG4gICAgdGhpcy5hbmdsZSA9IGFuZ2xlXG4gICAgdGhpcy5kcmFnZ2FibGUgPSBuZXcgRHJhZ2dhYmxlKGVsZW1lbnQsIHtcbiAgICAgIHBhcmVudDogdGhpcy5hcmVhLFxuICAgICAgYm91bmQ6IGJvdW5kLFxuICAgICAgcG9zaXRpb246IHBvc2l0aW9uLFxuICAgICAgb25Nb3ZlOiAoKSA9PiB7XG4gICAgICAgIHRoaXMuY2hhbmdlKClcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgdXBkYXRlQW5nbGUoKSB7XG4gICAgdGhpcy5hbmdsZSA9IEdlb21ldHJ5LmdldEFuZ2xlKHRoaXMuc2hpZnRlZENlbnRlciwgdGhpcy5kcmFnZ2FibGUucG9zaXRpb24pXG4gIH1cblxuICBjaGFuZ2UoKSB7XG4gICAgdGhpcy51cGRhdGVBbmdsZSgpXG4gICAgLy8gICAgICB2YXIgYW5nbGUgPSBHZW9tZXRyeS5nZXROZWFyZXN0QW5nbGUodGhpcy5vcHRpb25zLmFuZ2xlcywgdGhpcy5hbmdsZSk7XG4gICAgLy8gICAgICB0aGlzLnNldEFuZ2xlKGFuZ2xlLHRoaXMub3B0aW9ucy50aW1lKTtcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMuYW5nbGUpXG4gIH1cblxuICBzZXRBbmdsZShhbmdsZSwgdGltZSkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gR2VvbWV0cnkuZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKFxuICAgICAgdGhpcy5hbmdsZSxcbiAgICAgIHRoaXMub3B0aW9ucy5yYWRpdXMsXG4gICAgICB0aGlzLnNoaWZ0ZWRDZW50ZXJcbiAgICApXG4gICAgdGhpcy5hbmdsZSA9IEdlb21ldHJ5Lm5vcm1hbGl6ZUFuZ2xlKGFuZ2xlLCBwb3NpdGlvbilcbiAgICB0aGlzLmRyYWdnYWJsZS5tb3ZlKHBvc2l0aW9uLCB0aW1lfHwwLCB0cnVlLCB0cnVlKVxuICAgIHRoaXMub25DaGFuZ2UodGhpcy5hbmdsZSlcbiAgfVxufVxuXG5leHBvcnQgeyBBcmNTbGlkZXIgfVxuIiwiaW1wb3J0IHsgR2VvbWV0cnksIFBvaW50IH0gZnJvbSAnLi9nZW9tZXRyeSdcblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kVG9SZWN0YW5nbGUocmVjdGFuZ2xlKSB7XG4gIHJldHVybiBmdW5jdGlvbihwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IGNhbGNQb2ludCA9IHBvaW50LmNsb25lKCksXG4gICAgICByZWN0UDIgPSByZWN0YW5nbGUuZ2V0UDMoKVxuXG4gICAgaWYgKHJlY3RhbmdsZS5wb3NpdGlvbi54ID4gY2FsY1BvaW50LngpIHtcbiAgICAgIChjYWxjUG9pbnQueCA9IHJlY3RhbmdsZS5wb3NpdGlvbi54KVxuICAgIH1cbiAgICBpZiAocmVjdGFuZ2xlLnBvc2l0aW9uLnkgPiBjYWxjUG9pbnQueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSByZWN0YW5nbGUucG9zaXRpb24ueVxuICAgIH1cbiAgICBpZiAocmVjdFAyLnggPCBjYWxjUG9pbnQueCArIHNpemUueCkge1xuICAgICAgY2FsY1BvaW50LnggPSByZWN0UDIueCAtIHNpemUueFxuICAgIH1cbiAgICBpZiAocmVjdFAyLnkgPCBjYWxjUG9pbnQueSArIHNpemUueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSByZWN0UDIueSAtIHNpemUueVxuICAgIH1cblxuICAgIHJldHVybiBjYWxjUG9pbnRcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRUb0VsZW1lbnQoZWxlbWVudCwgcGFyZW50KSB7XG4gIGNvbnN0IHJldEZ1bmMgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gYm91bmQuYXBwbHkodGhpcywgYXJndW1lbnRzKVxuICB9XG4gIGxldCBib3VuZFxuXG4gIHJldEZ1bmMucmVmcmVzaCA9IGZ1bmN0aW9uKCkge1xuICAgIGJvdW5kID0gYm91bmRUb1JlY3RhbmdsZShHZW9tZXRyeS5jcmVhdGVSZWN0YW5nbGVGcm9tRWxlbWVudChlbGVtZW50LCBwYXJlbnQpKVxuICB9XG5cbiAgcmV0RnVuYy5yZWZyZXNoKClcbiAgcmV0dXJuIHJldEZ1bmNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kVG9MaW5lWCh4LCBzdGFydFksIGVuZFkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgY2FsY1BvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIGNhbGNQb2ludC54ID0geFxuICAgIGlmIChzdGFydFkgPiBjYWxjUG9pbnQueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSBzdGFydFlcbiAgICB9XG4gICAgaWYgKGVuZFkgPCBjYWxjUG9pbnQueSArIHNpemUueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSBlbmRZIC0gc2l6ZS55XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhbGNQb2ludFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZFRvTGluZVkoeSwgc3RhcnRYLCBlbmRYKSB7XG4gIHJldHVybiBmdW5jdGlvbihwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IGNhbGNQb2ludCA9IHBvaW50LmNsb25lKClcbiAgICBjYWxjUG9pbnQueSA9IHlcbiAgICBpZiAoc3RhcnRYID4gY2FsY1BvaW50LngpIHtcbiAgICAgIGNhbGNQb2ludC54ID0gc3RhcnRYXG4gICAgfVxuICAgIGlmIChlbmRYIDwgY2FsY1BvaW50LnggKyBzaXplLngpIHtcbiAgICAgIGNhbGNQb2ludC54ID0gZW5kWCAtIHNpemUueFxuICAgIH1cbiAgICByZXR1cm4gY2FsY1BvaW50XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kVG9MaW5lKHN0YXJ0LCBlbmQpIHtcbiAgY29uc3QgYWxwaGEgPSBNYXRoLmF0YW4yKGVuZC55IC0gc3RhcnQueSwgZW5kLnggLSBzdGFydC54KSxcbiAgICBiZXRhID0gYWxwaGEgKyBNYXRoLlBJIC8gMixcbiAgICBzb21lSyA9IDEwLFxuICAgIGNvc0JldGEgPSBNYXRoLmNvcyhiZXRhKSxcbiAgICBzaW5CZXRhID0gTWF0aC5zaW4oYmV0YSlcblxuICByZXR1cm4gZnVuY3Rpb24ocG9pbnQsIHNpemUpIHtcbiAgICBjb25zdCBwb2ludDIgPSBuZXcgUG9pbnQocG9pbnQueCArIHNvbWVLICogY29zQmV0YSwgcG9pbnQueSArIHNvbWVLICogc2luQmV0YSksXG4gICAgICBuZXdFbmQgPSBHZW9tZXRyeS5nZXRQb2ludEluTGluZUJ5TGVuZ2h0KGVuZCwgc3RhcnQsIHNpemUueClcbiAgICBsZXQgcG9pbnRDcm9zc2luZyA9IEdlb21ldHJ5LmRpcmVjdENyb3NzaW5nKHN0YXJ0LCBlbmQsIHBvaW50LCBwb2ludDIpXG5cbiAgICBwb2ludENyb3NzaW5nID0gR2VvbWV0cnkuYm91bmRUb0xpbmUoc3RhcnQsIG5ld0VuZCwgcG9pbnRDcm9zc2luZylcbiAgICByZXR1cm4gcG9pbnRDcm9zc2luZ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZFRvQ2lyY2xlKGNlbnRlciwgcmFkaXVzKSB7XG4gIHJldHVybiBmdW5jdGlvbihwb2ludCwgX3NpemUpIHtcbiAgICBjb25zdCBib3VuZGVkUG9pbnQgPSBHZW9tZXRyeS5nZXRQb2ludEluTGluZUJ5TGVuZ2h0KGNlbnRlciwgcG9pbnQsIHJhZGl1cylcbiAgICByZXR1cm4gYm91bmRlZFBvaW50XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kVG9BcmMoY2VudGVyLCByYWRpdXMsIHN0YXJ0QWdsZSwgZW5kQW5nbGUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHBvaW50LCBfc2l6ZSkge1xuICAgIGNvbnN0IGJvdW5kU3RhcnRBbmdsZSA9IHR5cGVvZiBzdGFydEFnbGUgPT09ICdmdW5jdGlvbicgPyBzdGFydEFnbGUoKSA6IHN0YXJ0QWdsZVxuICAgIGNvbnN0IGJvdW5kRW5kdEFuZ2xlID0gdHlwZW9mIHN0YXJ0QWdsZSA9PT0gJ2Z1bmN0aW9uJyA/IGVuZEFuZ2xlKCkgOiBlbmRBbmdsZVxuXG4gICAgbGV0IGFuZ2xlID0gR2VvbWV0cnkuZ2V0QW5nbGUoY2VudGVyLCBwb2ludClcbiAgICBhbmdsZSA9IEdlb21ldHJ5Lm5vcm1hbGl6ZUFuZ2xlKGFuZ2xlKVxuICAgIGFuZ2xlID0gR2VvbWV0cnkuYm91bmRBbmdsZShib3VuZFN0YXJ0QW5nbGUsIGJvdW5kRW5kdEFuZ2xlLCBhbmdsZSlcbiAgICByZXR1cm4gR2VvbWV0cnkuZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKGFuZ2xlLCByYWRpdXMsIGNlbnRlcilcbiAgfVxufVxuIiwiaW1wb3J0IGNyZWF0ZUNhbnZhcyBmcm9tICcuL3V0aWxzL2NyZWF0ZWNhbnZhcydcbmltcG9ydCByYW5nZSBmcm9tICcuL3V0aWxzL3JhbmdlJ1xuaW1wb3J0IHsgR2VvbWV0cnksIFBvaW50IH0gZnJvbSAnLi9nZW9tZXRyeSdcbmltcG9ydCB7IERyYWdnYWJsZSwgZXZlbnRzIH0gZnJvbSAnLi9kcmFnZ2FibGUnXG5pbXBvcnQgeyBib3VuZFRvQXJjIH0gZnJvbSAnLi9ib3VuZCdcblxuY29uc3QgaXNUb3VjaCA9ICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvd1xuXG5mdW5jdGlvbiByYW5kb21Db2xvcigpIHtcbiAgY29uc3Qgcm5kID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSoyNTUpXG4gIH1cbiAgY29uc3QgdG9IZXhTdHJpbmcgPSBmdW5jdGlvbihkaWdpdCkge1xuICAgIGxldCBzdHIgPSBkaWdpdC50b1N0cmluZygxNilcbiAgICB3aGlsZSAoc3RyLmxlbmd0aCA8IDIpIHtcbiAgICAgIHN0ciA9ICcwJyArIHN0clxuICAgIH1cbiAgICByZXR1cm4gc3RyXG4gIH1cblxuICByZXR1cm4gJyMnICsgdG9IZXhTdHJpbmcocm5kKCkpICsgdG9IZXhTdHJpbmcocm5kKCkpICsgdG9IZXhTdHJpbmcocm5kKCkpXG59XG5cbmZ1bmN0aW9uIGdldEFycmF5V2l0aEJvdW5kSW5kZXhlcyhpbmRleCwgbGVuZ3RoKSB7XG4gIGNvbnN0IHJldEluZGV4ZXMgPSBbXVxuICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgcmV0SW5kZXhlcy5wdXNoKGluZGV4KVxuICAgIHJldEluZGV4ZXMucHVzaCgoaW5kZXggKyAxKSAlIGxlbmd0aClcbiAgfVxuXG4gIHJldHVybiByZXRJbmRleGVzXG59XG5cbmNsYXNzIENoYXJ0IHtcbiAgY29uc3RydWN0b3IgKGFyZWEsIGVsZW1lbnRzLCBvcHRpb25zPXt9KSB7XG4gICAgY29uc3QgYXJlYVJlY3RhbmdsZSA9IEdlb21ldHJ5LmNyZWF0ZVJlY3RhbmdsZUZyb21FbGVtZW50KGFyZWEsIGFyZWEpXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjZW50ZXI6IGFyZWFSZWN0YW5nbGUuZ2V0Q2VudGVyKCksXG4gICAgICByYWRpdXM6IGFyZWFSZWN0YW5nbGUuZ2V0TWluU2lkZSgpIC8gMixcbiAgICAgIHRvdWNoUmFkaXVzOiBhcmVhUmVjdGFuZ2xlLmdldE1pblNpZGUoKSAvIDIsXG4gICAgICBib3VuZEFuZ2xlOiBNYXRoLlBJIC8gOSxcbiAgICAgIGZpbGxTdHlsZXM6IHJhbmdlKDAsIGVsZW1lbnRzLmxlbmd0aCkubWFwKCgpID0+IHJhbmRvbUNvbG9yKCkpLFxuICAgICAgaW5pdEFuZ2xlczogcmFuZ2UoLTkwLCAyNzAsIDM2MCAvIGVsZW1lbnRzLmxlbmd0aCkubWFwKChhbmdsZSkgPT4ge1xuICAgICAgICByZXR1cm4gR2VvbWV0cnkudG9SYWRpYW4oYW5nbGUpXG4gICAgICB9KSxcbiAgICAgIGxpbWl0SW1nOiBudWxsLFxuICAgICAgbGltaXRJbWdPZmZzZXQ6IG5ldyBQb2ludCgwLCAwKSxcbiAgICAgIGlzU2VsZWN0YWJsZTogZmFsc2VcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGhpcy5vbkRyYXcgPSB0aGlzLm9wdGlvbnMub25EcmF3IHx8IGZ1bmN0aW9uKCkge31cbiAgICB0aGlzLmFyZWEgPSBhcmVhXG4gICAgdGhpcy5hcmVhUmVjdGFuZ2xlID0gYXJlYVJlY3RhbmdsZVxuICAgIHRoaXMuaW5pdChlbGVtZW50cylcbiAgfVxuXG4gIGluaXQoZWxlbWVudHMpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNyZWF0ZUNhbnZhcyh0aGlzLmFyZWEsIHRoaXMuYXJlYVJlY3RhbmdsZSlcbiAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gZWxlbWVudHMubWFwKChlbGVtZW50LCBpKSA9PiB7XG4gICAgICBjb25zdCBhbmdsZSA9IHRoaXMub3B0aW9ucy5pbml0QW5nbGVzW2ldXG4gICAgICBjb25zdCBoYWxmU2l6ZSA9IEdlb21ldHJ5LmdldFNpemVPZkVsZW1lbnQoZWxlbWVudCkubXVsdCgwLjUpXG4gICAgICBjb25zdCBwb3NpdGlvbiA9IEdlb21ldHJ5LmdldFBvaW50RnJvbVJhZGlhbFN5c3RlbShcbiAgICAgICAgYW5nbGUsXG4gICAgICAgIHRoaXMub3B0aW9ucy50b3VjaFJhZGl1cyxcbiAgICAgICAgdGhpcy5vcHRpb25zLmNlbnRlci5zdWIoaGFsZlNpemUpXG4gICAgICApXG4gICAgICBjb25zdCBib3VuZCA9IGJvdW5kVG9BcmMoXG4gICAgICAgIHRoaXMub3B0aW9ucy5jZW50ZXIuc3ViKGhhbGZTaXplKSxcbiAgICAgICAgdGhpcy5vcHRpb25zLnRvdWNoUmFkaXVzLFxuICAgICAgICB0aGlzLmdldEJvdW5kQW5nbGUoaSwgZmFsc2UpLFxuICAgICAgICB0aGlzLmdldEJvdW5kQW5nbGUoaSwgdHJ1ZSlcbiAgICAgIClcblxuICAgICAgcmV0dXJuIG5ldyBEcmFnZ2FibGUoZWxlbWVudCwge1xuICAgICAgICBwYXJlbnQ6IHRoaXMuYXJlYSxcbiAgICAgICAgYm91bmQ6IGJvdW5kLFxuICAgICAgICBwb3NpdGlvbjogcG9zaXRpb24sXG4gICAgICAgIG9uTW92ZTogKCkgPT4ge1xuICAgICAgICAgIHRoaXMuZHJhdygpXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgdGhpcy5pc0luaXQgPSB0cnVlXG4gICAgaWYgKHRoaXMub3B0aW9ucy5pc1NlbGVjdGFibGUpIHtcbiAgICAgIHRoaXMuaW5pdFNlbGVjdCgpXG4gICAgfVxuICAgIHRoaXMuZHJhdygpXG4gIH1cblxuICBpbml0U2VsZWN0KCkge1xuICAgIHRoaXMuc2V0QWN0aXZlQXJjKC0xKVxuXG4gICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihldmVudHMuc3RhcnQsIChlKSA9PiB7XG4gICAgICBsZXQgcG9pbnQgPSBuZXcgUG9pbnQoXG4gICAgICAgIGlzVG91Y2ggPyBlLmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYIDogZS5jbGllbnRYLFxuICAgICAgICBpc1RvdWNoID8gZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWSA6IGUuY2xpZW50WVxuICAgICAgKVxuXG4gICAgICBpZiAoIXRoaXMuY2FudmFzT2Zmc2V0KSB7XG4gICAgICAgIHRoaXMuY2FudmFzT2Zmc2V0ID0gR2VvbWV0cnkuZ2V0T2Zmc2V0KHRoaXMuY2FudmFzKVxuICAgICAgfVxuXG4gICAgICBwb2ludCA9IHBvaW50LnN1Yih0aGlzLmNhbnZhc09mZnNldClcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5nZXRBcmNPblBvaW50KHBvaW50KVxuICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICB0aGlzLnNldEFjdGl2ZUFyYygodGhpcy5hY3RpdmVBcmNJbmRleCAhPT0gaW5kZXgpID8gaW5kZXggOiAtMSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgdXBkYXRlQW5nbGVzKCkge1xuICAgIHRoaXMuYW5nbGVzID0gdGhpcy5kcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBjb25zdCBoYWxmU2l6ZSA9IGRyYWdnYWJsZS5nZXRTaXplKCkubXVsdCgwLjUpXG4gICAgICByZXR1cm4gR2VvbWV0cnkuZ2V0QW5nbGUodGhpcy5vcHRpb25zLmNlbnRlci5zdWIoaGFsZlNpemUpLCBkcmFnZ2FibGUucG9zaXRpb24pXG4gICAgfSlcbiAgfVxuXG4gIGdldEJvdW5kQW5nbGUoaW5kZXgsIGlzQ2xvc3NpbmcpIHtcbiAgICBjb25zdCBzaWduID0gaXNDbG9zc2luZyA/IDEgOiAtMVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGxldCBpID0gKGluZGV4ICsgc2lnbikgJSB0aGlzLmFuZ2xlcy5sZW5ndGhcbiAgICAgIGlmIChpIDwgMCkge1xuICAgICAgICBpICs9IHRoaXMuYW5nbGVzLmxlbmd0aFxuICAgICAgfVxuICAgICAgcmV0dXJuIEdlb21ldHJ5Lm5vcm1hbGl6ZUFuZ2xlKHRoaXMuYW5nbGVzW2ldIC0gc2lnbiAqIHRoaXMub3B0aW9ucy5ib3VuZEFuZ2xlKVxuICAgIH1cbiAgfVxuXG4gIGRyYXcoKSB7XG4gICAgaWYgKCF0aGlzLmlzSW5pdCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVBbmdsZXMoKVxuICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy5hcmVhUmVjdGFuZ2xlLnNpemUueCwgdGhpcy5hcmVhUmVjdGFuZ2xlLnNpemUueSlcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoX2RyYWdnYWJsZSwgaW5kZXgpID0+IHtcbiAgICAgIHRoaXMuZHJhd0FyYyh0aGlzLmNvbnRleHQsIHRoaXMub3B0aW9ucy5jZW50ZXIsIHRoaXMub3B0aW9ucy5yYWRpdXMsIGluZGV4KVxuICAgIH0pXG5cbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoX2RyYWdnYWJsZSwgaW5kZXgpID0+IHtcbiAgICAgIGxldCBlbmFibGVJbmRleGVzXG4gICAgICBpZiAodGhpcy5vcHRpb25zLmlzU2VsZWN0YWJsZSkge1xuICAgICAgICBlbmFibGVJbmRleGVzID0gZ2V0QXJyYXlXaXRoQm91bmRJbmRleGVzKHRoaXMuYWN0aXZlQXJjSW5kZXgsIHRoaXMuZHJhZ2dhYmxlcy5sZW5ndGgpXG4gICAgICAgIGlmIChlbmFibGVJbmRleGVzLmluZGV4T2YoaW5kZXgpICE9PSAtMSkge1xuICAgICAgICAgIHRoaXMuZHJhd0xpbWl0SW1nKGluZGV4KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRyYXdMaW1pdEltZyhpbmRleClcbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMub25EcmF3KClcbiAgfVxuXG4gIGNyZWF0ZUNsb25lKGVsZW1lbnQsIG9wdGlvbnMgPSB7fSkge1xuICAgIGlmICghdGhpcy5pc0luaXQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCByZWN0YW5nbGUgPSBHZW9tZXRyeS5jcmVhdGVSZWN0YW5nbGVGcm9tRWxlbWVudChlbGVtZW50LCBlbGVtZW50KVxuICAgIGNvbnN0IG9wdHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNlbnRlcjogcmVjdGFuZ2xlLmdldENlbnRlcigpLFxuICAgICAgcmFkaXVzOiByZWN0YW5nbGUuZ2V0TWluU2lkZSgpIC8gMixcbiAgICAgIGZpbGxTdHlsZXM6IHRoaXMub3B0aW9ucy5maWxsU3R5bGVzXG4gICAgfSwgb3B0aW9ucylcblxuICAgIGNvbnN0IGNhbnZhcyA9IGNyZWF0ZUNhbnZhcyhlbGVtZW50LCByZWN0YW5nbGUpXG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG4gICAgY29uc3QgY2xvbmVPYmogPSB7XG4gICAgICBkcmF3OiAoKSA9PiB7XG4gICAgICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHJlY3RhbmdsZS5zaXplLngsIHJlY3RhbmdsZS5zaXplLnkpXG4gICAgICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChfZHJhZ2dhYmxlLCBpbmRleCkgPT4ge1xuICAgICAgICAgIHRoaXMuZHJhd0FyYyhjb250ZXh0LCBvcHRzLmNlbnRlciwgb3B0cy5yYWRpdXMsIGluZGV4KVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgICBjbG9uZU9iai5kcmF3KClcbiAgICByZXR1cm4gY2xvbmVPYmpcbiAgfVxuXG4gIGdldEZpbGxTdHlsZShpbmRleCkge1xuICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmZpbGxTdHlsZXNbaW5kZXhdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLm9wdGlvbnMuZmlsbFN0eWxlc1tpbmRleF0gPSB0aGlzLm9wdGlvbnMuZmlsbFN0eWxlc1tpbmRleF0uY2FsbCh0aGlzKVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmZpbGxTdHlsZXNbaW5kZXhdXG4gIH1cblxuICBkcmF3QXJjKGNvbnRleHQsIGNlbnRlciwgcmFkaXVzLCBpbmRleCkge1xuICAgIGNvbnN0IHN0YXJ0QW5nbGUgPSB0aGlzLmFuZ2xlc1tpbmRleF1cbiAgICBjb25zdCBlbmRBbmdsZSA9IHRoaXMuYW5nbGVzWyhpbmRleCsxKSAlIHRoaXMuYW5nbGVzLmxlbmd0aF1cbiAgICBjb25zdCBjb2xvciA9IHRoaXMuZ2V0RmlsbFN0eWxlKGluZGV4KVxuXG4gICAgY29udGV4dC5iZWdpblBhdGgoKVxuICAgIGNvbnRleHQubW92ZVRvKGNlbnRlci54LCBjZW50ZXIueSlcbiAgICBjb250ZXh0LmFyYyhjZW50ZXIueCwgY2VudGVyLnksIHJhZGl1cywgc3RhcnRBbmdsZSwgZW5kQW5nbGUsIGZhbHNlKVxuICAgIGNvbnRleHQubGluZVRvKGNlbnRlci54LCBjZW50ZXIueSlcbiAgICBjb250ZXh0LmNsb3NlUGF0aCgpXG4gICAgY29udGV4dC5maWxsU3R5bGUgPSBjb2xvclxuICAgIGNvbnRleHQuZmlsbCgpXG4gIH1cblxuICBkcmF3TGltaXRJbWcoaW5kZXgpIHtcbiAgICBsZXQgcG9pbnQsIGltZ1xuICAgIGlmICh0aGlzLm9wdGlvbnMubGltaXRJbWcpIHtcbiAgICAgIGltZyA9IHRoaXMub3B0aW9ucy5saW1pdEltZyBpbnN0YW5jZW9mIEFycmF5ID8gdGhpcy5vcHRpb25zLmxpbWl0SW1nW2luZGV4XSA6IHRoaXMub3B0aW9ucy5saW1pdEltZ1xuICAgIH1cblxuICAgIGlmIChpbWcpIHtcbiAgICAgIGNvbnN0IGFuZ2xlID0gR2VvbWV0cnkubm9ybWFsaXplQW5nbGUodGhpcy5hbmdsZXNbaW5kZXhdKVxuICAgICAgcG9pbnQgPSBuZXcgUG9pbnQoMCwgLWltZy5oZWlnaHQgLyAyKVxuICAgICAgcG9pbnQgPSBwb2ludC5hZGQodGhpcy5vcHRpb25zLmxpbWl0SW1nT2Zmc2V0KVxuICAgICAgdGhpcy5jb250ZXh0LnRyYW5zbGF0ZSh0aGlzLmFyZWFSZWN0YW5nbGUuc2l6ZS54IC8gMiwgdGhpcy5hcmVhUmVjdGFuZ2xlLnNpemUueSAvIDIpXG4gICAgICB0aGlzLmNvbnRleHQucm90YXRlKGFuZ2xlKVxuICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZShpbWcsIHBvaW50LngsIHBvaW50LnkpXG4gICAgICB0aGlzLmNvbnRleHQuc2V0VHJhbnNmb3JtKDEsIDAsIDAsIDEsIDAsIDApXG4gICAgfVxuICB9XG5cbiAgZ2V0QW5nbGVzRGlmZigpIHtcbiAgICBjb25zdCBhbmdsZXMgPSB0aGlzLmFuZ2xlcy5zbGljZSgxKVxuICAgIGxldCBiYXNlQW5nbGUgPSB0aGlzLmFuZ2xlc1swXVxuXG4gICAgYW5nbGVzLnB1c2goYmFzZUFuZ2xlKVxuICAgIHJldHVybiBhbmdsZXMubWFwKChhbmdsZSkgPT4ge1xuICAgICAgY29uc3QgZGlmZkFuZ2xlID0gR2VvbWV0cnkubm9ybWFsaXplQW5nbGUoYW5nbGUgLSBiYXNlQW5nbGUpXG4gICAgICBiYXNlQW5nbGUgPSBhbmdsZVxuICAgICAgcmV0dXJuIGRpZmZBbmdsZVxuICAgIH0pXG4gIH1cblxuICBnZXRQZXJjZW50KCkge1xuICAgIHJldHVybiB0aGlzLmdldEFuZ2xlc0RpZmYoKS5tYXAoKGRpZmZBbmdsZSkgPT4gZGlmZkFuZ2xlIC8gKDIgKiBNYXRoLlBJKSlcbiAgfVxuXG4gIGdldEFyY0Jpc2VjdHJpeHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0QW5nbGVzRGlmZigpLm1hcCgoZGlmZkFuZ2xlLCBpKSA9PiB7XG4gICAgICByZXR1cm4gR2VvbWV0cnkubm9ybWFsaXplQW5nbGUodGhpcy5hbmdsZXNbaV0gKyBkaWZmQW5nbGUgLyAyKVxuICAgIH0pXG4gIH1cblxuICBnZXRBcmNPblBvaW50KHBvaW50KSB7XG4gICAgY29uc3QgYW5nbGUgPSBHZW9tZXRyeS5nZXRBbmdsZSh0aGlzLm9wdGlvbnMuY2VudGVyLCBwb2ludClcbiAgICBjb25zdCByYWRpdXMgPSBHZW9tZXRyeS5nZXREaXN0YW5jZSh0aGlzLm9wdGlvbnMuY2VudGVyLCBwb2ludClcblxuICAgIGlmIChyYWRpdXMgPiB0aGlzLm9wdGlvbnMucmFkaXVzKSB7XG4gICAgICByZXR1cm4gLTFcbiAgICB9XG5cbiAgICBsZXQgb2Zmc2V0ID0gLTEsIGksIGpcbiAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5hbmdsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChvZmZzZXQgPT09IC0xIHx8IHRoaXMuYW5nbGVzW29mZnNldF0gPiB0aGlzLmFuZ2xlc1tpXSkge1xuICAgICAgICBvZmZzZXQgPSBpXG4gICAgICB9XG4gICAgfVxuICAgIGZvciAoaSA9IDAsIGogPSBvZmZzZXQ7IGkgPCB0aGlzLmFuZ2xlcy5sZW5ndGg7IGkrKywgaiA9IChpICsgb2Zmc2V0KSAlIHRoaXMuYW5nbGVzLmxlbmd0aCkge1xuICAgICAgaWYgKGFuZ2xlIDwgdGhpcy5hbmdsZXNbal0pIHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKC0taiA8IDApIHtcbiAgICAgIGogKz0gdGhpcy5hbmdsZXMubGVuZ3RoXG4gICAgfVxuICAgIHJldHVybiBqXG4gIH1cblxuICBzZXRBbmdsZXMoYW5nbGVzKSB7XG4gICAgdGhpcy5hbmdsZXMgPSBhbmdsZXNcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlLCBpKSA9PiB7XG4gICAgICBjb25zdCBhbmdsZSA9IHRoaXMuYW5nbGVzW2ldXG4gICAgICBjb25zdCBoYWxmU2l6ZSA9IGRyYWdnYWJsZS5nZXRTaXplKCkubXVsdCgwLjUpXG4gICAgICBjb25zdCBwb3NpdGlvbiA9IEdlb21ldHJ5LmdldFBvaW50RnJvbVJhZGlhbFN5c3RlbShcbiAgICAgICAgYW5nbGUsXG4gICAgICAgIHRoaXMub3B0aW9ucy50b3VjaFJhZGl1cyxcbiAgICAgICAgdGhpcy5vcHRpb25zLmNlbnRlci5zdWIoaGFsZlNpemUpXG4gICAgICApXG5cbiAgICAgIGRyYWdnYWJsZS5tb3ZlKHBvc2l0aW9uLCAwLCB0cnVlLCB0cnVlKVxuICAgIH0pXG4gICAgdGhpcy5kcmF3KClcbiAgfVxuXG4gIHNldEFjdGl2ZUFyYyhpbmRleCkge1xuICAgIGNvbnN0IGVuYWJsZUluZGV4ZXMgPSBnZXRBcnJheVdpdGhCb3VuZEluZGV4ZXMoaW5kZXgsIHRoaXMuZHJhZ2dhYmxlcy5sZW5ndGgpXG4gICAgdGhpcy5hY3RpdmVBcmNJbmRleCA9IGluZGV4XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSwgaSkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLmVuYWJsZSA9IGVuYWJsZUluZGV4ZXMuaW5kZXhPZihpKSAhPT0gLTFcbiAgICB9KVxuICAgIHRoaXMuZHJhdygpXG4gIH1cbn1cblxuZXhwb3J0IHsgQ2hhcnQgfVxuIiwiaW1wb3J0IHsgYWRkQ2xhc3MsIHJlbW92ZUNsYXNzIH0gZnJvbSAnLi91dGlscy9jbGFzc2VzJ1xuaW1wb3J0IGdldERlZmF1bHRQYXJlbnQgZnJvbSAnLi91dGlscy9nZXRkZWZhdWx0cGFyZW50J1xuaW1wb3J0IEV2ZW50IGZyb20gJy4vZXZlbnQnXG5pbXBvcnQgZ2V0U3R5bGVQcm9wZXJ0eSBmcm9tICdkZXNhbmRyby1nZXQtc3R5bGUtcHJvcGVydHknXG5pbXBvcnQgeyBib3VuZFRvRWxlbWVudCB9IGZyb20gJy4vYm91bmQnXG5pbXBvcnQgeyBHZW9tZXRyeSwgUG9pbnQsIFJlY3RhbmdsZSB9IGZyb20gJy4vZ2VvbWV0cnknXG5pbXBvcnQgeyBkZWZhdWx0U2NvcGUgfSBmcm9tICcuL3Njb3BlJ1xuXG5jb25zdCBEcmFnZWUgPSB7IEV2ZW50IH0gLy90b2RvIHJlbW92ZSBhZnRlciByZWZhY3RvcmVcblxuY29uc3QgaXNUb3VjaCA9ICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdywgbW91c2VFdmVudHMgPSB7XG4gICAgc3RhcnQ6ICdtb3VzZWRvd24nLFxuICAgIG1vdmU6ICdtb3VzZW1vdmUnLFxuICAgIGVuZDogJ21vdXNldXAnXG4gIH0sIHRvdWNoRXZlbnRzID0ge1xuICAgIHN0YXJ0OiAndG91Y2hzdGFydCcsXG4gICAgbW92ZTogJ3RvdWNobW92ZScsXG4gICAgZW5kOiAndG91Y2hlbmQnXG4gIH0sXG4gIGV2ZW50cyA9IGlzVG91Y2ggPyB0b3VjaEV2ZW50cyA6IG1vdXNlRXZlbnRzLFxuICBkcmFnZ2FibGVzID0gW10sXG4gIHRyYW5zZm9ybVByb3BlcnR5ID0gZ2V0U3R5bGVQcm9wZXJ0eSgndHJhbnNmb3JtJyksXG4gIHRyYW5zaXRpb25Qcm9wZXJ0eSA9IGdldFN0eWxlUHJvcGVydHkoJ3RyYW5zaXRpb24nKVxuXG5mdW5jdGlvbiBnZXRUb3VjaEJ5SUQoZWxlbWVudCwgdG91Y2hJZCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnQuY2hhbmdlZFRvdWNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZWxlbWVudC5jaGFuZ2VkVG91Y2hlc1tpXS5pZGVudGlmaWVyID09PSB0b3VjaElkKSB7XG4gICAgICByZXR1cm4gZWxlbWVudC5jaGFuZ2VkVG91Y2hlc1tpXVxuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cblxuZnVuY3Rpb24gcHJldmVudERvdWJsZUluaXQoZHJhZ2dhYmxlKSB7XG4gIGNvbnN0IG1lc3NhZ2UgPSBcImZvciB0aGlzIGVsZW1lbnQgRHJhZ2VlLkRyYWdnYWJsZSBpcyBhbHJlYWR5IGV4aXN0LCBkb24ndCBjcmVhdGUgaXQgdHdpY2UgXCJcbiAgaWYgKGRyYWdnYWJsZXMuc29tZSgoZXhpc3RpbmcpID0+IGRyYWdnYWJsZS5lbGVtZW50ID09PSBleGlzdGluZy5lbGVtZW50KSkge1xuICAgIHRocm93IG1lc3NhZ2VcbiAgfVxuICBkcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxufVxuXG5mdW5jdGlvbiBhZGRUb0RlZmF1bHRTY29wZShkcmFnZ2FibGUpIHtcbiAgZGVmYXVsdFNjb3BlLmFkZERyYWdnYWJsZShkcmFnZ2FibGUpXG59XG5cbmNsYXNzIERyYWdnYWJsZSB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIG9wdGlvbnM9e30pIHtcbiAgICBjb25zdCBwYXJlbnQgPSBvcHRpb25zLnBhcmVudCB8fCBnZXREZWZhdWx0UGFyZW50KGVsZW1lbnQpXG4gICAgdGhpcy50YXJnZXRzID0gW11cbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHBhcmVudDogcGFyZW50LFxuICAgICAgYm91bmQ6IGJvdW5kVG9FbGVtZW50KHBhcmVudCwgcGFyZW50KSxcbiAgICAgIHN0YXJ0RmlsdGVyOiBmYWxzZSxcbiAgICAgIGlzQ29udGVudEJveFNpemU6IGZhbHNlLFxuICAgICAgcG9zaXRpb246IGZhbHNlXG4gICAgfSwgb3B0aW9ucylcblxuICAgIHRoaXMub25FbmQgPSBuZXcgRHJhZ2VlLkV2ZW50KHRoaXMsIHsgaXNSZXZlcnNlOiB0cnVlLCBpc1N0b3BPblRydWU6IHRydWUgfSlcbiAgICB0aGlzLm9uTW92ZSA9IG5ldyBEcmFnZWUuRXZlbnQodGhpcylcbiAgICB0aGlzLm9uU3RhcnQgPSBuZXcgRHJhZ2VlLkV2ZW50KHRoaXMpXG5cbiAgICB0aGlzLm9uRW5kLmFkZCgoKSA9PiB0aGlzLm1vdmUodGhpcy5wb3NpdGlvbiwgMCwgdHJ1ZSwgdHJ1ZSkpXG5cbiAgICBpZiAob3B0aW9ucy5vbkVuZCkge1xuICAgICAgdGhpcy5vbkVuZC5hZGQob3B0aW9ucy5vbkVuZClcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMub25Nb3ZlKSB7XG4gICAgICB0aGlzLm9uTW92ZS5hZGQob3B0aW9ucy5vbk1vdmUpXG4gICAgfVxuICAgIGlmIChvcHRpb25zLm9uU3RhcnQpIHtcbiAgICAgIHRoaXMub25TdGFydC5hZGQob3B0aW9ucy5vblN0YXJ0KVxuICAgIH1cbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG4gICAgdGhpcy5ib3VuZCA9IHRoaXMub3B0aW9ucy5ib3VuZFxuICAgIHByZXZlbnREb3VibGVJbml0KHRoaXMpXG4gICAgRHJhZ2dhYmxlLm9uQ3JlYXRlLmZpcmUodGhpcylcbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLl9lbmFibGUgPSB0cnVlXG4gICAgdGhpcy5vZmZzZXQgPSBHZW9tZXRyeS5nZXRPZmZzZXQodGhpcy5lbGVtZW50LCB0aGlzLm9wdGlvbnMucGFyZW50LCB0cnVlKVxuICAgIHRoaXMuZml4UG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICAgIGlmICh0aGlzLm9wdGlvbnMucG9zaXRpb24pIHtcbiAgICAgIHRoaXMuaW5pdFBvc2l0aW9uID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uXG4gICAgICB0aGlzLm1vdmUodGhpcy5pbml0UG9zaXRpb24sIDAsIHRydWUsIHRydWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5pdFBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICB9XG4gICAgdGhpcy5fZHJhZ1N0YXJ0ID0gdGhpcy5kcmFnU3RhcnQuYmluZCh0aGlzKVxuICAgIHRoaXMuX2RyYWdNb3ZlID0gdGhpcy5kcmFnTW92ZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5fZHJhZ0VuZCA9IHRoaXMuZHJhZ0VuZC5iaW5kKHRoaXMpXG5cbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0KVxuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQpXG5cbiAgICBpZiAodGhpcy5ib3VuZC5yZWZyZXNoKSB7XG4gICAgICB0aGlzLmJvdW5kLnJlZnJlc2goKVxuICAgIH1cbiAgfVxuXG4gIHJlaW5pdCgpIHtcbiAgICB0aGlzLm9mZnNldCA9IEdlb21ldHJ5LmdldE9mZnNldCh0aGlzLmVsZW1lbnQsIHRoaXMub3B0aW9ucy5wYXJlbnQsIHRydWUpXG4gICAgdGhpcy5maXhQb3NpdGlvbiA9IHRoaXMub2Zmc2V0XG4gICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMub2Zmc2V0XG4gICAgaWYgKHRoaXMub3B0aW9ucy5wb3NpdGlvbikge1xuICAgICAgdGhpcy5pbml0UG9zaXRpb24gPSB0aGlzLm9wdGlvbnMucG9zaXRpb25cbiAgICAgIHRoaXMubW92ZSh0aGlzLmluaXRQb3NpdGlvbiwgMCwgdHJ1ZSwgdHJ1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbml0UG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICAgIH1cblxuICAgIGlmICh0aGlzLmJvdW5kLnJlZnJlc2gpIHtcbiAgICAgIHRoaXMuYm91bmQucmVmcmVzaCgpXG4gICAgfVxuICB9XG5cbiAgZ2V0U2l6ZShfcmVjYWx1bGF0ZSkge1xuICAgIHJldHVybiBHZW9tZXRyeS5nZXRTaXplT2ZFbGVtZW50KHRoaXMuZWxlbWVudCwgdGhpcy5vcHRpb25zLmlzQ29udGVudEJveFNpemUpXG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5vZmZzZXQuYWRkKHRoaXMuX3RyYW5zZm9ybVBvc2l0aW9uIHx8IG5ldyBQb2ludCgwLCAwKSlcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvblxuICB9XG5cbiAgZ2V0Q2VudGVyKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLmdldFNpemUoKS5tdWx0KDAuNSkpXG4gIH1cblxuICBfc2V0VHJhbnNsYXRlKHBvaW50KSB7XG4gICAgdGhpcy5fdHJhbnNmb3JtUG9zaXRpb24gPSBwb2ludFxuXG4gICAgbGV0IHRyYW5zZm9ybSA9IHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wZXJ0eV1cbiAgICBsZXQgdHJhbnNsYXRlQ3NzID0gJyB0cmFuc2xhdGUzZCgnICsgcG9pbnQueCArICdweCwnICsgcG9pbnQueSArICdweCwgMHB4KSdcblxuICAgIGNvbnN0IHVhID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnRcbiAgICBjb25zdCBtc2llID0gdWEuaW5kZXhPZignTVNJRSAnKVxuXG4gICAgaWYgKG1zaWUpIHtcbiAgICAgIHRyYW5zbGF0ZUNzcyA9ICcgdHJhbnNsYXRlKCcgKyBwb2ludC54ICsgJ3B4LCcgKyBwb2ludC55ICsgJ3B4KSdcbiAgICAgIGlmICghL3RyYW5zbGF0ZVxcKFteKV0rXFwpLy50ZXN0KHRyYW5zZm9ybSkpIHtcbiAgICAgICAgdHJhbnNmb3JtICs9IHRyYW5zbGF0ZUNzc1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJhbnNmb3JtID0gdHJhbnNmb3JtLnJlcGxhY2UoL3RyYW5zbGF0ZVxcKFteKV0rXFwpLywgdHJhbnNsYXRlQ3NzKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIS90cmFuc2xhdGUzZFxcKFteKV0rXFwpLy50ZXN0KHRyYW5zZm9ybSkpIHtcbiAgICAgICAgdHJhbnNmb3JtICs9IHRyYW5zbGF0ZUNzc1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJhbnNmb3JtID0gdHJhbnNmb3JtLnJlcGxhY2UoL3RyYW5zbGF0ZTNkXFwoW14pXStcXCkvLCB0cmFuc2xhdGVDc3MpXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BlcnR5XSA9IHRyYW5zZm9ybVxuICB9XG5cbiAgbW92ZShwb2ludCwgdGltZT0wLCBpc0ZpeD1mYWxzZSwgaXNTaWxlbnQ9ZmFsc2UpIHtcbiAgICBwb2ludCA9IHBvaW50LmNsb25lKClcbiAgICBpZiAoaXNGaXgpIHtcbiAgICAgIHRoaXMuZml4UG9zaXRpb24gPSBwb2ludFxuICAgIH1cblxuICAgIHRoaXMuZGV0ZXJtaW5lRGlyZWN0aW9uKHBvaW50KVxuXG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvaW50XG5cbiAgICBpZiAodHJhbnNpdGlvblByb3BlcnR5KSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNpdGlvblByb3BlcnR5XSA9IHRpbWUgKyAnbXMnXG4gICAgfVxuXG4gICAgdGhpcy5fc2V0VHJhbnNsYXRlKHBvaW50LnN1Yih0aGlzLm9mZnNldCkpXG4gICAgaWYgKCFpc1NpbGVudCkge1xuICAgICAgdGhpcy5vbk1vdmUuZmlyZSgpXG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaFBvc2l0aW9uICgpIHtcbiAgICB0aGlzLnNldFBvc2l0aW9uKHRoaXMuZ2V0UG9zaXRpb24oKSlcbiAgfVxuXG4gIHNldFBvc2l0aW9uKHBvaW50KSB7XG4gICAgcG9pbnQgPSBwb2ludC5jbG9uZSgpXG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvaW50XG5cbiAgICBpZiAodHJhbnNpdGlvblByb3BlcnR5KSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNpdGlvblByb3BlcnR5XSA9ICcwbXMnXG4gICAgfVxuXG4gICAgdGhpcy5fc2V0VHJhbnNsYXRlKHBvaW50LnN1Yih0aGlzLm9mZnNldCkpXG4gIH1cblxuICBzZXRaZXJvVHJhbnNpdGlvbigpIHtcbiAgICBpZiAodHJhbnNpdGlvblByb3BlcnR5KSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNpdGlvblByb3BlcnR5XSA9ICcwbXMnXG4gICAgfVxuICB9XG5cbiAgZGV0ZXJtaW5lRGlyZWN0aW9uKHBvaW50KSB7XG4gICAgdGhpcy5sZWZ0RGlyZWN0aW9uID0gKHRoaXMucG9zaXRpb24ueCA8IHBvaW50LngpXG4gICAgdGhpcy5yaWdodERpcmVjdGlvbiA9ICh0aGlzLnBvc2l0aW9uLnggPiBwb2ludC54KVxuICAgIHRoaXMudXBEaXJlY3Rpb24gPSAodGhpcy5wb3NpdGlvbi55ID4gcG9pbnQueSlcbiAgICB0aGlzLmRvd25EaXJlY3Rpb24gPSAodGhpcy5wb3NpdGlvbi55IDwgcG9pbnQueSlcbiAgfVxuXG4gIGRyYWdTdGFydChldmVudCkge1xuICAgIHRoaXMuY3VycmVudEV2ZW50ID0gZXZlbnRcbiAgICBpZiAoIXRoaXMuX2VuYWJsZSB8fCAodGhpcy5vcHRpb25zLnN0YXJ0RmlsdGVyICYmICF0aGlzLm9wdGlvbnMuc3RhcnRGaWx0ZXIoZXZlbnQpKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaXNUb3VjaEV2ZW50ID0gKGlzVG91Y2ggJiYgKGV2ZW50IGluc3RhbmNlb2Ygd2luZG93LlRvdWNoRXZlbnQpKVxuXG4gICAgdGhpcy5fc3RhcnRUb3VjaFBvaW50ID0gbmV3IFBvaW50KGlzVG91Y2hFdmVudCA/IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYIDogZXZlbnQuY2xpZW50WCwgaXNUb3VjaEV2ZW50ID8gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVkgOiBldmVudC5jbGllbnRZKVxuXG4gICAgdGhpcy5fc3RhcnRQb3NpdGlvbiA9IHRoaXMuZ2V0UG9zaXRpb24oKVxuICAgIGlmIChpc1RvdWNoRXZlbnQpIHtcbiAgICAgIHRoaXMuX3RvdWNoSWQgPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5pZGVudGlmaWVyXG4gICAgfVxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgaWYgKCEoZXZlbnQudGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJbnB1dEVsZW1lbnQgfHxcbiAgICAgICAgICBldmVudC50YXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElucHV0RWxlbWVudCkpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB9IGVsc2Uge1xuICAgICAgZXZlbnQudGFyZ2V0LmZvY3VzKClcbiAgICB9XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcblxuICAgIHRoaXMuaXNEcmFnZ2luZyA9IHRydWVcblxuICAgIHRoaXMub25TdGFydC5maXJlKGV2ZW50KVxuICAgIGFkZENsYXNzKHRoaXMuZWxlbWVudCwgJ2FjdGl2ZScpXG4gICAgdGhpcy5vbk1vdmUuZmlyZShldmVudClcbiAgfVxuXG4gIGRyYWdNb3ZlKGV2ZW50KSB7XG4gICAgdGhpcy5jdXJyZW50RXZlbnQgPSBldmVudFxuICAgIGxldCB0b3VjaFxuXG4gICAgY29uc3QgaXNUb3VjaEV2ZW50ID0gKGlzVG91Y2ggJiYgKGV2ZW50IGluc3RhbmNlb2Ygd2luZG93LlRvdWNoRXZlbnQpKVxuICAgIGlmIChpc1RvdWNoRXZlbnQpIHtcbiAgICAgIHRvdWNoID0gZ2V0VG91Y2hCeUlEKGV2ZW50LCB0aGlzLl90b3VjaElkKVxuXG4gICAgICBpZiAoIXRvdWNoKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IHRvdWNoUG9pbnQgPSBuZXcgUG9pbnQoaXNUb3VjaEV2ZW50ID8gdG91Y2gucGFnZVggOiBldmVudC5jbGllbnRYLCBpc1RvdWNoRXZlbnQgPyB0b3VjaC5wYWdlWSA6IGV2ZW50LmNsaWVudFkpXG4gICAgbGV0IHBvaW50ID0gdGhpcy5fc3RhcnRQb3NpdGlvbi5hZGQodG91Y2hQb2ludC5zdWIodGhpcy5fc3RhcnRUb3VjaFBvaW50KSlcbiAgICBwb2ludCA9IHRoaXMuYm91bmQocG9pbnQsIHRoaXMuZ2V0U2l6ZSgpKVxuICAgIHRoaXMudG91Y2hQb2ludCA9IHRvdWNoUG9pbnRcbiAgICB0aGlzLm1vdmUocG9pbnQsIDApXG4gIH1cblxuICBkcmFnRW5kKGV2ZW50KSB7XG4gICAgY29uc3QgaXNUb3VjaEV2ZW50ID0gKGlzVG91Y2ggJiYgKGV2ZW50IGluc3RhbmNlb2Ygd2luZG93LlRvdWNoRXZlbnQpKVxuXG4gICAgaWYgKGlzVG91Y2hFdmVudCAmJiAhZ2V0VG91Y2hCeUlEKGV2ZW50LCB0aGlzLl90b3VjaElkKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhpcy5vbkVuZC5maXJlKGV2ZW50KVxuXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG5cbiAgICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZVxuICAgIHJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudCwgJ2FjdGl2ZScpXG4gIH1cblxuICBnZXRSZWN0YW5nbGUoKSB7XG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUodGhpcy5wb3NpdGlvbiwgdGhpcy5nZXRTaXplKCkpXG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIHRoaXMuZ2V0U2l6ZSh0cnVlKVxuICAgIGlmICh0aGlzLmJvdW5kLnJlZnJlc2gpIHtcbiAgICAgIHRoaXMuYm91bmQucmVmcmVzaCgpXG4gICAgfVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0KVxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQpXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcblxuICAgIHRoaXMub25FbmQucmVzZXQoKVxuICAgIHRoaXMub25Nb3ZlLnJlc2V0KClcbiAgfVxuXG4gIGdldCBlbmFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZVxuICB9XG5cbiAgc2V0IGVuYWJsZShlbmFibGUpIHtcbiAgICBpZiAoZW5hYmxlKSB7XG4gICAgICByZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnQsICdkaXNhYmxlJylcbiAgICB9IGVsc2Uge1xuICAgICAgYWRkQ2xhc3ModGhpcy5lbGVtZW50LCAnZGlzYWJsZScpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZSA9IGVuYWJsZVxuICB9XG59XG5cbkRyYWdnYWJsZS5vbkNyZWF0ZSA9IG5ldyBEcmFnZWUuRXZlbnQoRHJhZ2dhYmxlLCB7IGlzUmV2ZXJzZTogdHJ1ZSwgaXNTdG9wT25UcnVlOiB0cnVlIH0pXG5EcmFnZ2FibGUub25DcmVhdGUuYWRkKGFkZFRvRGVmYXVsdFNjb3BlKVxuXG5leHBvcnQgeyBEcmFnZ2FibGUsIGV2ZW50cyB9XG4iLCIndXNlIHN0cmljdCdcblxuZnVuY3Rpb24gRXZlbnQoY29udGV4dCwgb3B0aW9ucyA9IHt9KSB7XG4gIHRoaXMuZnVuY3MgPSBbXVxuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0XG4gIHRoaXMuaXNSZXZlcnNlID0gb3B0aW9ucy5pc1JldmVyc2UgfHwgZmFsc2VcbiAgdGhpcy5pc1N0b3BPblRydWUgPSBvcHRpb25zLmlzU3RvcE9uVHJ1ZSB8fCBmYWxzZVxufVxuXG5FdmVudC5wcm90b3R5cGUuZmlyZSA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpXG4gIGNvbnN0IGZzID0gdGhpcy5pc1JldmVyc2UgPyB0aGlzLmZ1bmNzLnNsaWNlKCkucmV2ZXJzZSgpIDogdGhpcy5mdW5jc1xuICBsZXQgcmV0VmFsdWVcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGZzLmxlbmd0aDsgaSsrKSB7XG4gICAgcmV0VmFsdWUgPSBmc1tpXS5hcHBseSh0aGlzLmNvbnRleHQsIGFyZ3MpXG4gICAgaWYgKHRoaXMuaXNTdG9wT25UcnVlICYmIHJldFZhbHVlKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgfVxuICByZXR1cm4gIXRoaXMuaXNTdG9wT25UcnVlXG59XG5cbkV2ZW50LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbihmKSB7XG4gIHRoaXMuZnVuY3MucHVzaChmKVxufVxuXG5FdmVudC5wcm90b3R5cGUudW5zaGlmdCA9IGZ1bmN0aW9uKGYpIHtcbiAgdGhpcy5mdW5jcy51bnNoaWZ0KGYpXG59XG5cbkV2ZW50LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbihmKSB7XG4gIGNvbnN0IGluZGV4ID0gdGhpcy5mdW5jcy5pbmRleE9mKGYpXG4gIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICB0aGlzLmZ1bmNzLnNwbGljZShpbmRleCwgMSlcbiAgfVxufVxuXG5FdmVudC5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbihfZikge1xuICB0aGlzLmZ1bmNzID0gW11cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRcbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKiAwMFAgKioqKioqKioqKioqKioqKioqKioqKioqKi9cbmNvbnN0IGF1Z21lbnQgPSBmdW5jdGlvbihyZWNlaXZpbmdDbGFzcywgZ2l2aW5nQ2xhc3MpIHtcbiAgICAvKiBvbmx5IHByb3ZpZGUgY2VydGFpbiBtZXRob2RzICovXG4gIGlmIChhcmd1bWVudHNbMl0pIHtcbiAgICBmb3IgKGxldCBpPTIsIGxlbj1hcmd1bWVudHMubGVuZ3RoOyBpPGxlbjsgaSsrKSB7XG4gICAgICByZWNlaXZpbmdDbGFzcy5wcm90b3R5cGVbYXJndW1lbnRzW2ldXSA9IGdpdmluZ0NsYXNzLnByb3RvdHlwZVthcmd1bWVudHNbaV1dXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZvciAoY29uc3QgbWV0aG9kTmFtZSBpbiBnaXZpbmdDbGFzcy5wcm90b3R5cGUpIHtcbiAgICAgIC8qIGNoZWNrIHRvIG1ha2Ugc3VyZSB0aGUgcmVjZWl2aW5nIGNsYXNzIGRvZXNuJ3RcbiAgICAgICAgIGhhdmUgYSBtZXRob2Qgb2YgdGhlIHNhbWUgbmFtZSBhcyB0aGUgb25lIGN1cnJlbnRseVxuICAgICAgICAgYmVpbmcgcHJvY2Vzc2VkICovXG4gICAgICBpZiAoIXJlY2VpdmluZ0NsYXNzLnByb3RvdHlwZVttZXRob2ROYW1lXSkge1xuICAgICAgICByZWNlaXZpbmdDbGFzcy5wcm90b3R5cGVbbWV0aG9kTmFtZV0gPSBnaXZpbmdDbGFzcy5wcm90b3R5cGVbbWV0aG9kTmFtZV1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbmF1Z21lbnQoTm9kZUxpc3QsIEFycmF5LCAnZm9yRWFjaCcpXG4iLCJjbGFzcyBQb2ludCB7XG4gIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICB0aGlzLnggPSB4XG4gICAgdGhpcy55ID0geVxuICB9XG5cbiAgYWRkKHApIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCArIHAueCwgdGhpcy55ICsgcC55KVxuICB9XG5cbiAgc3ViKHApIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCAtIHAueCwgdGhpcy55IC0gcC55KVxuICB9XG5cbiAgbXVsdChrKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnggKiBrLCB0aGlzLnkgKiBrKVxuICB9XG5cbiAgbmVnYXRpdmUoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCgtdGhpcy54LCAtdGhpcy55KVxuICB9XG5cbiAgY29tcGFyZShwKSB7XG4gICAgcmV0dXJuICh0aGlzLnggPT09IHAueCAmJiB0aGlzLnkgPT09IHAueSlcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54LCB0aGlzLnkpXG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gYHt4PSR7dGhpcy54fSx5PSR7dGhpcy55fWBcbiAgfVxufVxuXG5jbGFzcyBSZWN0YW5nbGUge1xuICBjb25zdHJ1Y3Rvcihwb3NpdGlvbiwgc2l6ZSkge1xuICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvblxuICAgIHRoaXMuc2l6ZSA9IHNpemVcbiAgfVxuXG4gIGdldFAxKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uXG4gIH1cblxuICBnZXRQMigpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54LCB0aGlzLnBvc2l0aW9uLnkpXG4gIH1cblxuICBnZXRQMygpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi5hZGQodGhpcy5zaXplKVxuICB9XG5cbiAgZ2V0UDQoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55KVxuICB9XG5cbiAgZ2V0Q2VudGVyKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLnNpemUubXVsdCgwLjUpKVxuICB9XG5cbiAgb3IocmVjdCkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gbmV3IFBvaW50KE1hdGgubWluKHRoaXMucG9zaXRpb24ueCwgcmVjdC5wb3NpdGlvbi54KSwgTWF0aC5taW4odGhpcy5wb3NpdGlvbi55LCByZWN0LnBvc2l0aW9uLnkpKVxuICAgIGNvbnN0IHNpemUgPSAobmV3IFBvaW50KE1hdGgubWF4KHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54LCByZWN0LnBvc2l0aW9uLnggKyByZWN0LnNpemUueCksIE1hdGgubWF4KHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55LCByZWN0LnBvc2l0aW9uLnkgKyByZWN0LnNpemUueSkpKS5zdWIocG9zaXRpb24pXG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUocG9zaXRpb24sIHNpemUpXG4gIH1cblxuICBhbmQocmVjdCkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gbmV3IFBvaW50KE1hdGgubWF4KHRoaXMucG9zaXRpb24ueCwgcmVjdC5wb3NpdGlvbi54KSwgTWF0aC5tYXgodGhpcy5wb3NpdGlvbi55LCByZWN0LnBvc2l0aW9uLnkpKVxuICAgIGNvbnN0IHNpemUgPSAobmV3IFBvaW50KE1hdGgubWluKHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54LCByZWN0LnBvc2l0aW9uLnggKyByZWN0LnNpemUueCksIE1hdGgubWluKHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55LCByZWN0LnBvc2l0aW9uLnkgKyByZWN0LnNpemUueSkpKS5zdWIocG9zaXRpb24pXG4gICAgaWYgKHNpemUueCA8PSAwIHx8IHNpemUueSA8PSAwKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZShwb3NpdGlvbiwgc2l6ZSlcbiAgfVxuXG4gIGluY2x1ZGVQb2ludChwKSB7XG4gICAgcmV0dXJuICEodGhpcy5wb3NpdGlvbi54ID4gcC54IHx8IHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54IDwgcC54IHx8IHRoaXMucG9zaXRpb24ueSA+IHAueSB8fCB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSA8IHAueSlcbiAgfVxuXG4gIGluY2x1ZGVSZWN0YW5nbGUocmVjdGFuZ2xlKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5jbHVkZVBvaW50KHJlY3RhbmdsZS5wb3NpdGlvbikgJiYgdGhpcy5pbmNsdWRlUG9pbnQocmVjdGFuZ2xlLmdldFAzKCkpXG4gIH1cblxuICBtb3ZlVG9Cb3VuZChyZWN0LCBheGlzKSB7XG4gICAgbGV0IHNlbEF4aXMsIGNyb3NzUmVjdGFuZ2xlXG4gICAgaWYgKGF4aXMpIHtcbiAgICAgIHNlbEF4aXMgPSBheGlzXG4gICAgfSBlbHNlIHtcbiAgICAgIGNyb3NzUmVjdGFuZ2xlID0gdGhpcy5hbmQocmVjdClcbiAgICAgIGlmICghY3Jvc3NSZWN0YW5nbGUpIHtcbiAgICAgICAgcmV0dXJuIHJlY3RcbiAgICAgIH1cbiAgICAgIHNlbEF4aXMgPSBjcm9zc1JlY3RhbmdsZS5zaXplLnggPiBjcm9zc1JlY3RhbmdsZS5zaXplLnkgPyAneScgOiAneCdcbiAgICB9XG4gICAgY29uc3QgdGhpc0NlbnRlciA9IHRoaXMuZ2V0Q2VudGVyKClcbiAgICBjb25zdCByZWN0Q2VudGVyID0gcmVjdC5nZXRDZW50ZXIoKVxuICAgIGNvbnN0IHNpZ24gPSB0aGlzQ2VudGVyW3NlbEF4aXNdID4gcmVjdENlbnRlcltzZWxBeGlzXSA/IC0xIDogMVxuICAgIGNvbnN0IG9mZnNldCA9IHNpZ24gPiAwID8gdGhpcy5wb3NpdGlvbltzZWxBeGlzXSArIHRoaXMuc2l6ZVtzZWxBeGlzXSAtIHJlY3QucG9zaXRpb25bc2VsQXhpc10gOiB0aGlzLnBvc2l0aW9uW3NlbEF4aXNdIC0gKHJlY3QucG9zaXRpb25bc2VsQXhpc10gKyByZWN0LnNpemVbc2VsQXhpc10pXG4gICAgcmVjdC5wb3NpdGlvbltzZWxBeGlzXSA9IHJlY3QucG9zaXRpb25bc2VsQXhpc10gKyBvZmZzZXRcbiAgICByZXR1cm4gcmVjdFxuICB9XG5cbiAgZ2V0U3F1YXJlKCkge1xuICAgIHJldHVybiB0aGlzLnNpemUueCAqIHRoaXMuc2l6ZS55XG4gIH1cblxuICBzdHlsZUFwcGx5KGVsKSB7XG4gICAgZWwgPSBlbCB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbmQnKVxuICAgIGVsLnN0eWxlLmxlZnQgPSB0aGlzLnBvc2l0aW9uLnggKyAncHgnXG4gICAgZWwuc3R5bGUudG9wID0gdGhpcy5wb3NpdGlvbi55ICsgJ3B4J1xuICAgIGVsLnN0eWxlLndpZHRoID0gdGhpcy5zaXplLnggKyAncHgnXG4gICAgZWwuc3R5bGUuaGVpZ2h0ID0gdGhpcy5zaXplLnkgKyAncHgnXG4gIH1cblxuICBncm93dGgoc2l6ZSkge1xuICAgIHRoaXMuc2l6ZSA9IHRoaXMuc2l6ZS5hZGQoc2l6ZSlcbiAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbi5hZGQoc2l6ZS5tdWx0KC0wLjUpKVxuICB9XG5cbiAgZ2V0TWluU2lkZSgpIHtcbiAgICByZXR1cm4gTWF0aC5taW4odGhpcy5zaXplLngsIHRoaXMuc2l6ZS55KVxuICB9XG59XG5cbi8qKioqKioqKioqKioqKioqKi9cbmNvbnN0IEdlb21ldHJ5ID0ge1xuICBnZXREaXN0YW5jZShwMSwgcDIpIHtcbiAgICBjb25zdCBkeCA9IHAxLnggLSBwMi54LCBkeSA9IHAxLnkgLSBwMi55XG4gICAgcmV0dXJuIE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSlcbiAgfSxcbiAgZGlzdGFuY2UocDEsIHAyKSB7XG4gICAgcmV0dXJuIEdlb21ldHJ5LmdldERpc3RhbmNlKHAxLCBwMilcbiAgfSxcbiAgZ2V0WERpZmZlcmVuY2UocDEsIHAyKSB7XG4gICAgcmV0dXJuIE1hdGguYWJzKHAxLnggLSBwMi54KVxuICB9LFxuICBnZXRZRGlmZmVyZW5jZShwMSwgcDIpIHtcbiAgICByZXR1cm4gTWF0aC5hYnMocDEueSAtIHAyLnkpXG4gIH0sXG4gIHRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3Rvcnkob3B0aW9ucykge1xuICAgIHJldHVybiAocDEsIHAyKSA9PiB7XG4gICAgICByZXR1cm4gTWF0aC5zcXJ0KFxuICAgICAgICBNYXRoLnBvdyhvcHRpb25zLnggKiBNYXRoLmFicyhwMS54IC0gcDIueCksIDIpICtcbiAgICAgICAgTWF0aC5wb3cob3B0aW9ucy55ICogTWF0aC5hYnMocDEueSAtIHAyLnkpLCAyKVxuICAgICAgKVxuICAgIH1cbiAgfSxcbiAgaW5kZXhPZk5lYXJlc3RQb2ludChhcnIsIHZhbCwgcmFkaXVzLCBnZXREaXN0YW5jZSkge1xuICAgIGxldCBzaXplLCBpbmRleCA9IDAsIGksIHRlbXBcbiAgICBnZXREaXN0YW5jZSA9IGdldERpc3RhbmNlIHx8IEdlb21ldHJ5LmdldERpc3RhbmNlXG4gICAgaWYgKGFyci5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiAtMVxuICAgIH1cbiAgICBzaXplID0gZ2V0RGlzdGFuY2UoYXJyWzBdLCB2YWwpXG4gICAgZm9yIChpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgdGVtcCA9IGdldERpc3RhbmNlKGFycltpXSwgdmFsKVxuICAgICAgaWYgKHRlbXAgPCBzaXplKSB7XG4gICAgICAgIHNpemUgPSB0ZW1wXG4gICAgICAgIGluZGV4ID0gaVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAocmFkaXVzID49IDAgJiYgc2l6ZSA+IHJhZGl1cykge1xuICAgICAgcmV0dXJuIC0xXG4gICAgfVxuICAgIHJldHVybiBpbmRleFxuICB9LFxuICBib3VuZChtaW4sIG1heCwgdmFsKSB7XG4gICAgcmV0dXJuIE1hdGgubWF4KG1pbiwgTWF0aC5taW4obWF4LCB2YWwpKVxuICB9LFxuICBib3VuZFBvaW50KG1pbiwgbWF4LCB2YWwpIHtcbiAgICBjb25zdCB4ID0gTWF0aC5tYXgobWluLngsIE1hdGgubWluKG1heC54LCB2YWwueCkpXG4gICAgY29uc3QgeSA9IE1hdGgubWF4KG1pbi55LCBNYXRoLm1pbihtYXgueSwgdmFsLnkpKVxuICAgIHJldHVybiBuZXcgUG9pbnQoeCwgeSlcbiAgfSxcbiAgICAvL1JldHVybiBjcm9zc2luZyBwb2ludCBvZiB0d28gbGluZXNcbiAgZGlyZWN0Q3Jvc3NpbmcoTDFQMSwgTDFQMiwgTDJQMSwgTDJQMikge1xuICAgIGxldCB0ZW1wLCBrMSwgazIsIGIxLCBiMiwgeCwgeVxuICAgIGlmIChMMlAxLnggPT09IEwyUDIueCkge1xuICAgICAgdGVtcCA9IEwyUDFcbiAgICAgIEwyUDEgPSBMMVAxXG4gICAgICBMMVAxID0gdGVtcFxuICAgICAgdGVtcCA9IEwyUDJcbiAgICAgIEwyUDIgPSBMMVAyXG4gICAgICBMMVAyID0gdGVtcFxuICAgIH1cbiAgICBpZiAoTDFQMS54ID09PSBMMVAyLngpIHtcbiAgICAgIGsyID0gKEwyUDIueSAtIEwyUDEueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgICAgYjIgPSAoTDJQMi54ICogTDJQMS55IC0gTDJQMS54ICogTDJQMi55KSAvIChMMlAyLnggLSBMMlAxLngpXG4gICAgICB4ID0gTDFQMS54XG4gICAgICB5ID0geCAqIGsyICsgYjJcbiAgICAgIHJldHVybiBuZXcgUG9pbnQoeCwgeSlcbiAgICB9IGVsc2Uge1xuICAgICAgazEgPSAoTDFQMi55IC0gTDFQMS55KSAvIChMMVAyLnggLSBMMVAxLngpXG4gICAgICBiMSA9IChMMVAyLnggKiBMMVAxLnkgLSBMMVAxLnggKiBMMVAyLnkpIC8gKEwxUDIueCAtIEwxUDEueClcbiAgICAgIGsyID0gKEwyUDIueSAtIEwyUDEueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgICAgYjIgPSAoTDJQMi54ICogTDJQMS55IC0gTDJQMS54ICogTDJQMi55KSAvIChMMlAyLnggLSBMMlAxLngpXG4gICAgICB4ID0gKGIxIC0gYjIpIC8gKGsyIC0gazEpXG4gICAgICB5ID0geCAqIGsxICsgYjFcbiAgICAgIHJldHVybiBuZXcgUG9pbnQoeCwgeSlcbiAgICB9XG4gIH0sXG4gIGJvdW5kVG9TZWdtZW50KExQMSwgTFAyLCBQKSB7XG4gICAgbGV0IHgsIHlcbiAgICB4ID0gR2VvbWV0cnkuYm91bmQoTWF0aC5taW4oTFAxLngsIExQMi54KSwgTWF0aC5tYXgoTFAxLngsIExQMi54KSwgUC54KVxuICAgIGlmICh4ICE9PSBQLngpIHtcbiAgICAgIHkgPSAoeCA9PT0gTFAxLngpID8gTFAxLnkgOiBMUDIueVxuICAgICAgUCA9IG5ldyBQb2ludCh4LCB5KVxuICAgIH1cblxuICAgIHkgPSBHZW9tZXRyeS5ib3VuZChNYXRoLm1pbihMUDEueSwgTFAyLnkpLCBNYXRoLm1heChMUDEueSwgTFAyLnkpLCBQLnkpXG4gICAgaWYgKHkgIT09IFAueSkge1xuICAgICAgeCA9ICh5ID09PSBMUDEueSkgPyBMUDEueCA6IExQMi54XG4gICAgICBQID0gbmV3IFBvaW50KHgsIHkpXG4gICAgfVxuXG4gICAgcmV0dXJuIFBcbiAgfSxcbiAgYm91bmRUb0xpbmUoQSwgQiwgUCkge1xuICAgIGNvbnN0IEFQID0gbmV3IFBvaW50KFAueCAtIEEueCwgUC55IC0gQS55KSxcbiAgICAgIEFCID0gbmV3IFBvaW50KEIueCAtIEEueCwgQi55IC0gQS55KSxcbiAgICAgIGFiMiA9IEFCLnggKiBBQi54ICsgQUIueSAqIEFCLnksXG4gICAgICBhcF9hYiA9IEFQLnggKiBBQi54ICsgQVAueSAqIEFCLnksXG4gICAgICB0ID0gYXBfYWIgLyBhYjJcbiAgICByZXR1cm4gbmV3IFBvaW50KEEueCArIEFCLnggKiB0LCBBLnkgKyBBQi55ICogdClcbiAgfSxcbiAgZ2V0UG9pbnRJbkxpbmUoTFAxLCBMUDIsIHBlcmNlbnQpIHtcbiAgICBjb25zdCBkeCA9IExQMi54IC0gTFAxLngsIGR5ID0gTFAyLnkgLSBMUDEueVxuICAgIHJldHVybiBuZXcgUG9pbnQoTFAxLnggKyBwZXJjZW50ICogZHgsIExQMS55ICsgcGVyY2VudCAqIGR5KVxuICB9LFxuICBnZXRQb2ludEluTGluZUJ5TGVuZ2h0KExQMSwgTFAyLCBsZW5naHQpIHtcbiAgICBjb25zdCBkeCA9IExQMi54IC0gTFAxLngsIGR5ID0gTFAyLnkgLSBMUDEueSwgcGVyY2VudCA9IGxlbmdodCAvIEdlb21ldHJ5LmRpc3RhbmNlKExQMSwgTFAyKVxuICAgIHJldHVybiBuZXcgUG9pbnQoTFAxLnggKyBwZXJjZW50ICogZHgsIExQMS55ICsgcGVyY2VudCAqIGR5KVxuICB9LFxuICBjcmVhdGVSZWN0YW5nbGVGcm9tRWxlbWVudChlbCwgcGFyZW50LCBpc0NvbnRlbnRCb3hTaXplLCBpc0NvbnNpZGVyVHJhbnNsYXRlKSB7XG4gICAgY29uc3Qgc2l6ZSA9IHRoaXMuZ2V0U2l6ZU9mRWxlbWVudChlbCwgaXNDb250ZW50Qm94U2l6ZSlcbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZSh0aGlzLmdldE9mZnNldChlbCwgcGFyZW50IHx8IGVsLnBhcmVudE5vZGUsIGlzQ29uc2lkZXJUcmFuc2xhdGUpLCBzaXplKVxuICB9LFxuICBnZXRTdW1WYWx1ZU9mU3R5bGVSdWxlKGVsZW1lbnQsIHJ1bGVzKSB7XG4gICAgcmV0dXJuIHJ1bGVzLnJlZHVjZSgoc3VtLCBydWxlKSA9PiB7XG4gICAgICByZXR1cm4gc3VtICsgcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudClbcnVsZV18fDApXG4gICAgfSwgMClcbiAgfSxcbiAgZ2V0U2l6ZU9mRWxlbWVudChlbCwgaXNDb250ZW50Qm94U2l6ZSkge1xuICAgIGxldCB3aWR0aCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKVsnd2lkdGgnXSksIGhlaWdodCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKVsnaGVpZ2h0J10pXG4gICAgaWYgKCFpc0NvbnRlbnRCb3hTaXplKSB7XG4gICAgICB3aWR0aCArPSB0aGlzLmdldFN1bVZhbHVlT2ZTdHlsZVJ1bGUoZWwsIFsncGFkZGluZy1sZWZ0JywgJ3BhZGRpbmctcmlnaHQnLCAnYm9yZGVyLWxlZnQtd2lkdGgnLCAnYm9yZGVyLXJpZ2h0LXdpZHRoJ10pXG4gICAgICBoZWlnaHQgKz0gdGhpcy5nZXRTdW1WYWx1ZU9mU3R5bGVSdWxlKGVsLCBbJ3BhZGRpbmctdG9wJywgJ3BhZGRpbmctYm90dG9tJywgJ2JvcmRlci10b3Atd2lkdGgnLCAnYm9yZGVyLWJvdHRvbS13aWR0aCddKVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFBvaW50KHdpZHRoLCBoZWlnaHQpXG4gIH0sXG4gIGdldE9mZnNldChlbCwgcGFyZW50KSB7XG4gICAgY29uc3QgZWxSZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksIHBhcmVudFJlY3QgPSBwYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICByZXR1cm4gbmV3IFBvaW50KGVsUmVjdC5sZWZ0IC0gcGFyZW50UmVjdC5sZWZ0LCBlbFJlY3QudG9wIC0gcGFyZW50UmVjdC50b3ApXG4gIH0sXG4gIGdldFBvaW50RnJvbVJhZGlhbFN5c3RlbShhbmdsZSwgbGVuZ3RoLCBjZW50ZXIpIHtcbiAgICBjZW50ZXIgPSBjZW50ZXIgfHwgbmV3IFBvaW50KDAsIDApXG4gICAgcmV0dXJuIGNlbnRlci5hZGQobmV3IFBvaW50KGxlbmd0aCAqIE1hdGguY29zKGFuZ2xlKSwgbGVuZ3RoICogTWF0aC5zaW4oYW5nbGUpKSlcbiAgfSxcbiAgYWRkUG9pbnRUb0JvdW5kUG9pbnRzKGJvdW5kcG9pbnRzLCBwb2ludCwgaXNSaWdodCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGJvdW5kcG9pbnRzLmZpbHRlcihmdW5jdGlvbihiUG9pbnQpIHtcbiAgICAgIHJldHVybiAgYlBvaW50LnkgPiBwb2ludC55IHx8IChpc1JpZ2h0ID8gYlBvaW50LnggPCBwb2ludC54IDogYlBvaW50LnggPiBwb2ludC54KVxuICAgIH0pXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHBvaW50LnkgPCByZXN1bHRbaV0ueSkge1xuICAgICAgICByZXN1bHQuc3BsaWNlKGksIDAsIHBvaW50KVxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC5wdXNoKHBvaW50KVxuICAgIHJldHVybiByZXN1bHRcbiAgfSxcbiAgZ2V0QW5nbGUocDEsIHAyKSB7XG4gICAgY29uc3QgZGlmZiA9IHAyLnN1YihwMSlcbiAgICByZXR1cm4gdGhpcy5ub3JtYWxpemVBbmdsZShNYXRoLmF0YW4yKGRpZmYueSwgZGlmZi54KSlcbiAgfSxcbiAgdG9SYWRpYW4oYW5nbGUpIHtcbiAgICByZXR1cm4gKChhbmdsZSAlIDM2MCkgKiBNYXRoLlBJIC8gMTgwKVxuICB9LFxuICB0b0RlZ3JlZShhbmdsZSkge1xuICAgIHJldHVybiAoYW5nbGUgKiAxODAgLyBNYXRoLlBJKSAlIDM2MFxuICB9LFxuICBib3VuZEFuZ2xlKG1pbiwgbWF4LCB2YWwpIHtcbiAgICBsZXQgZG1pbiwgZG1heFxuICAgIGlmIChtaW4gPCBtYXggJiYgdmFsID4gbWluICYmIHZhbCA8IG1heCkge1xuICAgICAgcmV0dXJuIHZhbFxuICAgIH0gZWxzZSBpZiAobWF4IDwgbWluICYmICh2YWwgPCBtYXggfHwgdmFsID4gbWluKSkge1xuICAgICAgcmV0dXJuIHZhbFxuICAgIH0gZWxzZSB7XG4gICAgICBkbWluID0gdGhpcy5nZXRBbmdsZURpZmYobWluLCB2YWwpXG4gICAgICBkbWF4ID0gdGhpcy5nZXRBbmdsZURpZmYobWF4LCB2YWwpXG4gICAgICBpZiAoZG1pbiA8IGRtYXgpIHtcbiAgICAgICAgcmV0dXJuIG1pblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG1heFxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgZ2V0TmVhcmVzdEFuZ2xlKGFyciwgYW5nbGUpIHtcbiAgICBsZXQgaSwgdGVtcCwgZGlmZiA9IE1hdGguUEkgKiAyLCB2YWx1ZVxuICAgIGZvciAoaSA9IDA7IGkgPCBhcnIubGVuZ3RoO2krKykge1xuICAgICAgdGVtcCA9IEdlb21ldHJ5LmdldEFuZ2xlRGlmZihhcnJbaV0sIGFuZ2xlKVxuICAgICAgaWYgKGRpZmYgPCB0ZW1wKSB7XG4gICAgICAgIGRpZmYgPSB0ZW1wXG4gICAgICAgIHZhbHVlID0gYXJyW2ldXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZVxuICB9LFxuICBnZXRBbmdsZURpZmYoYWxwaGEsIGJldGEpIHtcbiAgICBjb25zdCBtaW5BbmdsZSA9IE1hdGgubWluKGFscGhhLCBiZXRhKSxcbiAgICAgIG1heEFuZ2xlID0gIE1hdGgubWF4KGFscGhhLCBiZXRhKVxuICAgIHJldHVybiBNYXRoLm1pbihtYXhBbmdsZSAtIG1pbkFuZ2xlLCBtaW5BbmdsZSArIE1hdGguUEkqMiAtIG1heEFuZ2xlKVxuICB9LFxuICBub3JtYWxpemVBbmdsZSh2YWwpIHtcbiAgICB3aGlsZSAodmFsIDwgMCkge1xuICAgICAgdmFsICs9IDIgKiBNYXRoLlBJXG4gICAgfVxuICAgIHdoaWxlICh2YWwgPiAyICogTWF0aC5QSSkge1xuICAgICAgdmFsIC09IDIgKiBNYXRoLlBJXG4gICAgfVxuICAgIHJldHVybiB2YWxcbiAgfVxufVxuXG5leHBvcnQgeyBQb2ludCwgUmVjdGFuZ2xlLCBHZW9tZXRyeSB9XG4iLCJpbXBvcnQgJy4vZXhwYW5kbmF0aXZlJ1xuaW1wb3J0IHsgUG9pbnQsIFJlY3RhbmdsZSwgR2VvbWV0cnkgfSBmcm9tICcuL2dlb21ldHJ5J1xuaW1wb3J0IHsgRHJhZ2dhYmxlIH0gZnJvbSAnLi9kcmFnZ2FibGUnXG5pbXBvcnQgeyBMaXN0LCBsaXN0RmFjdG9yeSB9IGZyb20gJy4vbGlzdCdcbmltcG9ydCB7IFNvcnRhYmxlLCBzb3J0YWJsZUZhY3RvcnkgfSBmcm9tICcuL3NvcnRhYmxlJ1xuaW1wb3J0IHsgVGFyZ2V0IH0gZnJvbSAnLi90YXJnZXQnXG5pbXBvcnQgeyBzY29wZXMsIGRlZmF1bHRTY29wZSwgU2NvcGUsIHNjb3BlRmFjdG9yeSwgc2NvcGUgfSBmcm9tICcuL3Njb3BlJ1xuaW1wb3J0IHsgcG9zaXRpb25UeXBlLCBzb3J0aW5nRmFjdG9yeSwgcG9zaXRpb25GYWN0b3J5ICB9IGZyb20gJy4vcG9zaXRpb25pbmcnXG5pbXBvcnQgeyBTcGlkZXIgfSBmcm9tICcuL3NwaWRlcidcbmltcG9ydCB7IEFyY1NsaWRlciB9IGZyb20gJy4vYXJjc2xpZGVyJ1xuaW1wb3J0IHsgQ2hhcnQgfSBmcm9tICcuL2NoYXJ0J1xuaW1wb3J0IHsgbGlzdFN3aXRjaGVyRmFjdG9yeSwgTGlzdFN3aXRjaGVyIH0gZnJvbSAnLi9saXN0c3dpdGNoZXInXG5cbmV4cG9ydCB7IERyYWdnYWJsZSxcbiAgUG9pbnQsIFJlY3RhbmdsZSwgR2VvbWV0cnksXG4gIExpc3QsIGxpc3RGYWN0b3J5LFxuICBTb3J0YWJsZSwgc29ydGFibGVGYWN0b3J5LFxuICBUYXJnZXQsXG4gIHNjb3BlcywgZGVmYXVsdFNjb3BlLCBTY29wZSwgc2NvcGVGYWN0b3J5LCBzY29wZSxcbiAgcG9zaXRpb25UeXBlLCBzb3J0aW5nRmFjdG9yeSwgcG9zaXRpb25GYWN0b3J5LFxuICBTcGlkZXIsXG4gIEFyY1NsaWRlcixcbiAgQ2hhcnQsXG4gIGxpc3RTd2l0Y2hlckZhY3RvcnksIExpc3RTd2l0Y2hlclxufVxuIiwiaW1wb3J0IHJlbW92ZUl0ZW1zIGZyb20gJ3JlbW92ZS1hcnJheS1pdGVtcydcbmltcG9ydCBFdmVudCBmcm9tICcuL2V2ZW50J1xuaW1wb3J0IHsgR2VvbWV0cnkgfSBmcm9tICcuL2dlb21ldHJ5J1xuaW1wb3J0IHsgRHJhZ2dhYmxlIH0gZnJvbSAnLi9kcmFnZ2FibGUnXG5cbmNvbnN0IERyYWdlZSA9IHsgRXZlbnQgfSAvL3RvZG8gcmVtb3ZlIGFmdGVyIHJlZmFjdG9yZVxuXG5jbGFzcyBMaXN0IHtcbiAgY29uc3RydWN0b3IoZHJhZ2dhYmxlcywgb3B0aW9ucz17fSkge1xuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgdGltZUVuZDogMjAwLFxuICAgICAgdGltZUV4Y2FuZ2U6IDQwMCxcbiAgICAgIHJhZGl1czogMzAsXG4gICAgICBnZXREaXN0YW5jZTogR2VvbWV0cnkuZ2V0RGlzdGFuY2UsXG4gICAgICBpc0Rpc3BsYWNlbWVudDogZmFsc2UsXG4gICAgICBpc1NvcnRhYmxlOiB0cnVlXG4gICAgfSwgb3B0aW9ucylcblxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZXNcbiAgICB0aGlzLm9uQ2hhbmdlID0gbmV3IERyYWdlZS5FdmVudCh0aGlzKVxuICAgIGlmIChvcHRpb25zLm9uQ2hhbmdlKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlLmFkZChvcHRpb25zLm9uQ2hhbmdlKVxuICAgIH1cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLl9lbmFibGUgPSB0cnVlXG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2godGhpcy5pbml0RHJhZ2dhYmxlLCB0aGlzKVxuICB9XG5cbiAgaW5pdERyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICBsZXQgbW92ZUhhbmRsZXJcbiAgICBjb25zdCBsaXN0ID0gdGhpc1xuXG4gICAgZHJhZ2dhYmxlLmVuYWJsZSA9IHRoaXMuX2VuYWJsZVxuICAgIGlmICh0aGlzLm9wdGlvbnMuaXNEaXNwbGFjZW1lbnQpIHtcbiAgICAgIG1vdmVIYW5kbGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChkcmFnZ2FibGUuaXNEcmFnZ2luZykge1xuICAgICAgICAgIGxpc3Qub25TdGFydChkcmFnZ2FibGUpXG4gICAgICAgICAgZHJhZ2dhYmxlLm9uTW92ZS5yZW1vdmUobW92ZUhhbmRsZXIpXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBkcmFnZ2FibGUub25FbmQuYWRkKCgpID0+IHtcbiAgICAgICAgdGhpcy5vbkVuZERpc3BsYXljZW1lbnQoZHJhZ2dhYmxlKVxuICAgICAgICBkcmFnZ2FibGUub25Nb3ZlLmFkZChtb3ZlSGFuZGxlcilcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0pXG5cbiAgICAgIGRyYWdnYWJsZS5vbk1vdmUuYWRkKG1vdmVIYW5kbGVyKVxuICAgIH0gZWxzZSB7XG4gICAgICBkcmFnZ2FibGUub25FbmQuYWRkKCgpID0+IHtcbiAgICAgICAgdGhpcy5vbkVuZChkcmFnZ2FibGUpXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIG1vdmVPclNhdmUoZHJhZ2dhYmxlLCBwb3NpdGlvbiwgdGltZSkge1xuICAgIGlmIChkcmFnZ2FibGUuaXNEcmFnZ2luZykge1xuICAgICAgZHJhZ2dhYmxlLmZpeFBvc2l0aW9uID0gcG9zaXRpb25cbiAgICB9IGVsc2Uge1xuICAgICAgZHJhZ2dhYmxlLm1vdmUocG9zaXRpb24sIHRpbWUsIHRydWUpXG4gICAgfVxuICB9XG5cbiAgb25FbmQoZHJhZ2dhYmxlKSB7XG4gICAgY29uc3QgZml4UG9zaXRpb25zID0gdGhpcy5nZXRDdXJyZW50Rml4UG9zaXRpb24oKVxuICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IHRoaXMuZHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSlcbiAgICBjb25zdCBleGNhbmdlSW5kZXggPSBHZW9tZXRyeS5pbmRleE9mTmVhcmVzdFBvaW50KGZpeFBvc2l0aW9ucywgZHJhZ2dhYmxlLnBvc2l0aW9uLCB0aGlzLm9wdGlvbnMucmFkaXVzLCB0aGlzLm9wdGlvbnMuZ2V0RGlzdGFuY2UpXG5cbiAgICBpZiAoZXhjYW5nZUluZGV4ID09PSAtMSB8fCBleGNhbmdlSW5kZXggPT09IGN1cnJlbnRJbmRleCkge1xuICAgICAgZHJhZ2dhYmxlLm1vdmUoZHJhZ2dhYmxlLmZpeFBvc2l0aW9uLCB0aGlzLm9wdGlvbnMudGltZUVuZCwgdHJ1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tb3ZlT3JTYXZlKHRoaXMuZHJhZ2dhYmxlc1tleGNhbmdlSW5kZXhdLCBmaXhQb3NpdGlvbnNbY3VycmVudEluZGV4XSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgdGhpcy5kcmFnZ2FibGVzW2N1cnJlbnRJbmRleF0ubW92ZShmaXhQb3NpdGlvbnNbZXhjYW5nZUluZGV4XSwgdGhpcy5vcHRpb25zLnRpbWVFbmQsIHRydWUpXG4gICAgICB0aGlzLm9uQ2hhbmdlLmZpcmUoKVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgc29ydElmUG9zc2libGUoZHJhZ2dhYmxlKSB7XG4gICAgY29uc3QgZml4UG9zaXRpb24gPSBkcmFnZ2FibGUuZml4UG9zaXRpb25cbiAgICBjb25zdCBjdXJyZW50SW5kZXggPSB0aGlzLmRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpXG4gICAgY29uc3QgbmV4dERyYWdnYWJsZSA9IHRoaXMuZHJhZ2dhYmxlc1tjdXJyZW50SW5kZXggKyAxXVxuICAgIGNvbnN0IHByZXZEcmFnZ2FibGUgPSB0aGlzLmRyYWdnYWJsZXNbY3VycmVudEluZGV4IC0gMV1cblxuICAgIGlmIChkcmFnZ2FibGUuZG93bkRpcmVjdGlvbiAmJiBuZXh0RHJhZ2dhYmxlKSB7XG4gICAgICBjb25zdCBkaXN0YW5jZSA9IHRoaXMub3B0aW9ucy5nZXREaXN0YW5jZShkcmFnZ2FibGUucG9zaXRpb24sIG5leHREcmFnZ2FibGUucG9zaXRpb24pXG4gICAgICBpZiAoZGlzdGFuY2UgPCB0aGlzLm9wdGlvbnMucmFkaXVzKSB7XG4gICAgICAgIGRyYWdnYWJsZS5maXhQb3NpdGlvbiA9IG5leHREcmFnZ2FibGUuZml4UG9zaXRpb25cbiAgICAgICAgdGhpcy5tb3ZlT3JTYXZlKG5leHREcmFnZ2FibGUsIGZpeFBvc2l0aW9uLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpO1xuICAgICAgICBbdGhpcy5kcmFnZ2FibGVzW2N1cnJlbnRJbmRleF0sIHRoaXMuZHJhZ2dhYmxlc1tjdXJyZW50SW5kZXggKyAxXV0gPSBbdGhpcy5kcmFnZ2FibGVzW2N1cnJlbnRJbmRleCArIDFdLCB0aGlzLmRyYWdnYWJsZXNbY3VycmVudEluZGV4XV1cbiAgICAgICAgdGhpcy5zb3J0SWZQb3NzaWJsZShkcmFnZ2FibGUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGRyYWdnYWJsZS51cERpcmVjdGlvbiAmJiBwcmV2RHJhZ2dhYmxlKSB7XG4gICAgICBjb25zdCBkaXN0YW5jZSA9IHRoaXMub3B0aW9ucy5nZXREaXN0YW5jZShkcmFnZ2FibGUucG9zaXRpb24sIHByZXZEcmFnZ2FibGUucG9zaXRpb24pXG4gICAgICBpZiAoZGlzdGFuY2UgPCB0aGlzLm9wdGlvbnMucmFkaXVzKSB7XG4gICAgICAgIGRyYWdnYWJsZS5maXhQb3NpdGlvbiA9IHByZXZEcmFnZ2FibGUuZml4UG9zaXRpb25cbiAgICAgICAgdGhpcy5tb3ZlT3JTYXZlKHByZXZEcmFnZ2FibGUsIGZpeFBvc2l0aW9uLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpO1xuICAgICAgICBbdGhpcy5kcmFnZ2FibGVzW2N1cnJlbnRJbmRleF0sIHRoaXMuZHJhZ2dhYmxlc1tjdXJyZW50SW5kZXggLSAxXV0gPSBbdGhpcy5kcmFnZ2FibGVzW2N1cnJlbnRJbmRleCAtIDFdLCB0aGlzLmRyYWdnYWJsZXNbY3VycmVudEluZGV4XV1cbiAgICAgICAgdGhpcy5zb3J0SWZQb3NzaWJsZShkcmFnZ2FibGUpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25FbmREaXNwbGF5Y2VtZW50KGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IHNvcnRlZERyYWdnYWJsZXMgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuICAgIGNvbnN0IGZpeFBvc2l0aW9ucyA9IHNvcnRlZERyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5maXhQb3NpdGlvbilcblxuICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IHNvcnRlZERyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpXG4gICAgY29uc3QgdGFyZ2V0SW5kZXggPSBHZW9tZXRyeS5pbmRleE9mTmVhcmVzdFBvaW50KGZpeFBvc2l0aW9ucywgZHJhZ2dhYmxlLnBvc2l0aW9uLCB0aGlzLm9wdGlvbnMucmFkaXVzLCB0aGlzLm9wdGlvbnMuZ2V0RGlzdGFuY2UpXG5cbiAgICBpZiAodGFyZ2V0SW5kZXggIT09IC0xKSB7XG4gICAgICBpZiAodGFyZ2V0SW5kZXggPCBjdXJyZW50SW5kZXgpIHtcbiAgICAgICAgZm9yIChsZXQgaT10YXJnZXRJbmRleDsgaTxjdXJyZW50SW5kZXg7IGkrKykge1xuICAgICAgICAgIHRoaXMubW92ZU9yU2F2ZShzb3J0ZWREcmFnZ2FibGVzW2ldLCBmaXhQb3NpdGlvbnNbaSsxXSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGxldCBpPWN1cnJlbnRJbmRleDsgaTx0YXJnZXRJbmRleDsgaSsrKSB7XG4gICAgICAgICAgdGhpcy5tb3ZlT3JTYXZlKHNvcnRlZERyYWdnYWJsZXNbaSsxXSwgZml4UG9zaXRpb25zW2ldLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGRyYWdnYWJsZS5tb3ZlKGZpeFBvc2l0aW9uc1t0YXJnZXRJbmRleF0sIHRoaXMub3B0aW9ucy50aW1lRW5kLCB0cnVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBkcmFnZ2FibGUubW92ZShkcmFnZ2FibGUuZml4UG9zaXRpb24sIHRoaXMub3B0aW9ucy50aW1lRW5kLCB0cnVlKVxuICAgIH1cbiAgfVxuXG4gIG9uU3RhcnQoZHJhZ2dhYmxlKSB7XG4gICAgbGV0IGlcbiAgICBjb25zdCBzb3J0ZWREcmFnZ2FibGVzID0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcbiAgICBjb25zdCBmaXhQb3NpdGlvbnMgPSBzb3J0ZWREcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUuZml4UG9zaXRpb24pXG5cbiAgICBjb25zdCBjdXJyZW50SW5kZXggPSBzb3J0ZWREcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKVxuICAgIGZvciAoaSA9IGN1cnJlbnRJbmRleCArIDE7IGkgPCBzb3J0ZWREcmFnZ2FibGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLm1vdmVPclNhdmUoc29ydGVkRHJhZ2dhYmxlc1tpXSwgZml4UG9zaXRpb25zW2kgLSAxXSwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgIH1cbiAgICBzb3J0ZWREcmFnZ2FibGVzW2N1cnJlbnRJbmRleF0uZml4UG9zaXRpb24gPSBmaXhQb3NpdGlvbnNbaSAtIDFdXG4gIH1cblxuICBnZXRDdXJyZW50Rml4UG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLmZpeFBvc2l0aW9uLmNsb25lKCkpXG4gIH1cblxuICBnZXRTb3J0ZWREcmFnZ2FibGVzKCkge1xuICAgIGNvbnN0IGluaXRQb3NpdGlvbnMgPSB0aGlzLmRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5pbml0UG9zaXRpb24pXG5cbiAgICBjb25zdCBzb3J0ZWREcmFnZ2FibGVzID0gaW5pdFBvc2l0aW9ucy5tYXAoKHBvc2l0aW9uKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5kcmFnZ2FibGVzLmZpbHRlcigoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUuZml4UG9zaXRpb24uY29tcGFyZShwb3NpdGlvbikpWzBdXG4gICAgfSlcblxuICAgIHJldHVybiBzb3J0ZWREcmFnZ2FibGVzXG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUubW92ZShkcmFnZ2FibGUuaW5pdFBvc2l0aW9uLCAwLCB0cnVlLCBmYWxzZSlcbiAgICB9KVxuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUucmVmcmVzaCgpXG4gICAgfSlcbiAgfVxuXG4gIGFkZChkcmFnZ2FibGVzKSB7XG4gICAgaWYgKCEoZHJhZ2dhYmxlcyBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgZHJhZ2dhYmxlcyA9IFtkcmFnZ2FibGVzXVxuICAgIH1cbiAgICBkcmFnZ2FibGVzLmZvckVhY2godGhpcy5pbml0RHJhZ2dhYmxlLCB0aGlzKVxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IHRoaXMuZHJhZ2dhYmxlcy5jb25jYXQoZHJhZ2dhYmxlcylcbiAgfVxuXG4gIHJlbW92ZShkcmFnZ2FibGVzKSB7XG4gICAgY29uc3QgaW5pdFBvc2l0aW9ucyA9IHRoaXMuZHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLmluaXRQb3NpdGlvbilcbiAgICBjb25zdCBsaXN0ID0gW11cbiAgICBjb25zdCBzb3J0ZWREcmFnZ2FibGVzID0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcblxuICAgIGlmICghKGRyYWdnYWJsZXMgaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICAgIGRyYWdnYWJsZXMgPSBbZHJhZ2dhYmxlc11cbiAgICB9XG5cbiAgICBkcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLm9uRW5kLnJlc2V0KClcbiAgICAgIGRyYWdnYWJsZS5vbk1vdmUucmVzZXQoKSAvL3RvZG8gcmVtb3ZlIHJlc2V0IGluIGZ1dHVyZVxuICAgICAgcmVtb3ZlSXRlbXModGhpcy5kcmFnZ2FibGVzLCBkcmFnZ2FibGUpXG4gICAgfSlcblxuICAgIGxldCBqID0gMFxuICAgIHNvcnRlZERyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBpZiAodGhpcy5kcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTEpIHtcbiAgICAgICAgaWYgKGRyYWdnYWJsZS5maXhQb3NpdGlvbiAhPT0gaW5pdFBvc2l0aW9uc1tqXSkge1xuICAgICAgICAgIGRyYWdnYWJsZS5tb3ZlKGluaXRQb3NpdGlvbnNbal0sIHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSwgdHJ1ZSlcbiAgICAgICAgfVxuICAgICAgICBkcmFnZ2FibGUuaW5pdFBvc2l0aW9uID0gaW5pdFBvc2l0aW9uc1tqXVxuICAgICAgICBqKytcbiAgICAgICAgbGlzdC5wdXNoKGRyYWdnYWJsZSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGxpc3RcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMucmVtb3ZlKHRoaXMuZHJhZ2dhYmxlcy5zbGljZSgpKVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUuZGVzdHJveSgpKVxuICB9XG5cbiAgZ2V0IHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDdXJyZW50Rml4UG9zaXRpb24oKVxuICB9XG5cbiAgc2V0IHBvc2l0aW9ucyhwb3NpdGlvbnMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gJ3dyb25nIGFycmF5IGxlbmd0aCdcbiAgICBpZiAocG9zaXRpb25zLmxlbmd0aCA9PT0gdGhpcy5kcmFnZ2FibGVzLmxlbmd0aCkge1xuICAgICAgcG9zaXRpb25zLmZvckVhY2goKHBvaW50LCBpKSA9PiB7XG4gICAgICAgIHRoaXMuZHJhZ2dhYmxlc1tpXS5tb3ZlKHBvaW50LCAwLCB0cnVlLCB0cnVlKVxuICAgICAgfSwgdGhpcylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbWVzc2FnZVxuICAgIH1cbiAgfVxuXG4gIGdldCBlbmFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZVxuICB9XG5cbiAgc2V0IGVuYWJsZShlbmFibGUpIHtcbiAgICB0aGlzLl9lbmFibGUgPSBlbmFibGVcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUuZW5hYmxlID0gZW5hYmxlXG4gICAgfSlcbiAgfVxufVxuXG5mdW5jdGlvbiBsaXN0RmFjdG9yeShwYXJlbnRFbGVtZW50LCBlbGVtZW50cywgb3B0aW9ucz17fSkge1xuICBjb25zdCBkcmFnZ2FibGVPcHRpb25zID0gb3B0aW9ucy5kcmFnZ2FibGUgfHwge31cbiAgY29uc3QgbGlzdE9wdGlvbnMgPSBvcHRpb25zLmxpc3QgfHwge31cbiAgZHJhZ2dhYmxlT3B0aW9ucy5wYXJlbnQgPSBkcmFnZ2FibGVPcHRpb25zLnBhcmVudCB8fCBwYXJlbnRFbGVtZW50XG4gIGVsZW1lbnRzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZWxlbWVudHMpXG5cbiAgY29uc3QgZHJhZ2dhYmxlcyA9IGVsZW1lbnRzLm1hcCgoZWxlbWVudCkgPT4ge1xuICAgIHJldHVybiBuZXcgRHJhZ2dhYmxlKGVsZW1lbnQsIGRyYWdnYWJsZU9wdGlvbnMpXG4gIH0pXG5cbiAgcmV0dXJuIG5ldyBMaXN0KGRyYWdnYWJsZXMsIGxpc3RPcHRpb25zKVxufVxuXG5leHBvcnQgeyBMaXN0LCBsaXN0RmFjdG9yeSB9XG4iLCIndXNlIHN0cmljdCdcblxuaW1wb3J0IHsgR2VvbWV0cnksIFBvaW50IH0gZnJvbSAnLi9nZW9tZXRyeSdcbmltcG9ydCB7IERyYWdnYWJsZSB9IGZyb20gJy4vZHJhZ2dhYmxlJ1xuaW1wb3J0IHsgTGlzdCB9IGZyb20gJy4vbGlzdCdcblxuY2xhc3MgTGlzdFN3aXRjaGVyIGV4dGVuZHMgTGlzdCB7XG4gIGNvbnN0cnVjdG9yKGRyYWdnYWJsZXMsIG9wdGlvbnM9e30pIHtcbiAgICBvcHRpb25zLnN0ZXBPbiA9IG9wdGlvbnMuc3RlcE9uIHx8IG5ldyBQb2ludCgtNTAsIDApXG4gICAgc3VwZXIoZHJhZ2dhYmxlcywgb3B0aW9ucylcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLmlzT24gPSBmYWxzZVxuICAgICAgZHJhZ2dhYmxlLm9uRW5kLmFkZCgoKSA9PiB7XG4gICAgICAgIHRoaXMub25FbmQoZHJhZ2dhYmxlKVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgb25FbmQoZHJhZ2dhYmxlKSB7XG4gICAgY29uc3QgZml4UG9zaXRpb25zID0gdGhpcy5nZXRDdXJyZW50Rml4UG9zaXRpb25XaXRoT2ZmKClcbiAgICBjb25zdCBjdXJyZW50SW5kZXggPSB0aGlzLmRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpXG4gICAgY29uc3QgZXhjYW5nZUluZGV4ID0gR2VvbWV0cnkuaW5kZXhPZk5lYXJlc3RQb2ludChmaXhQb3NpdGlvbnMsIGRyYWdnYWJsZS5wb3NpdGlvbiwgdGhpcy5vcHRpb25zLnJhZGl1cywgdGhpcy5vcHRpb25zLmdldERpc3RhbmNlKVxuXG4gICAgaWYgKGV4Y2FuZ2VJbmRleCA9PT0gLTEgfHwgZXhjYW5nZUluZGV4ID09PSBjdXJyZW50SW5kZXgpIHtcbiAgICAgIHRoaXMubW92ZURyYWdnYWJsZShjdXJyZW50SW5kZXgsIGRyYWdnYWJsZS5wb3NpdGlvbiwgZml4UG9zaXRpb25zW2N1cnJlbnRJbmRleF0sIHRoaXMub3B0aW9ucy50aW1lRW5kKVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5kcmFnZ2FibGVzW2V4Y2FuZ2VJbmRleF0uaXNEcmFnZ2luZykge1xuICAgICAgICB0aGlzLmZpeFRvT2ZmKGV4Y2FuZ2VJbmRleCwgZml4UG9zaXRpb25zW2N1cnJlbnRJbmRleF0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm1vdmVEcmFnZ2FibGVUb09mZihleGNhbmdlSW5kZXgsIGZpeFBvc2l0aW9uc1tjdXJyZW50SW5kZXhdLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICB9XG4gICAgICB0aGlzLm1vdmVEcmFnZ2FibGUoY3VycmVudEluZGV4LCBkcmFnZ2FibGUucG9zaXRpb24sIGZpeFBvc2l0aW9uc1tleGNhbmdlSW5kZXhdLCB0aGlzLm9wdGlvbnMudGltZUVuZClcbiAgICAgIHRoaXMub25DaGFuZ2UuZmlyZSgpXG4gICAgfVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBtb3ZlRHJhZ2dhYmxlKGluZGV4LCBwb3NpdGlvbiwgZml4T2ZmUG9zaXRpb24sIHRpbWUpIHtcbiAgICBjb25zdCBwb3NpdGlvbnMgPSBbZml4T2ZmUG9zaXRpb24sIGZpeE9mZlBvc2l0aW9uLmFkZCh0aGlzLm9wdGlvbnMuc3RlcE9uKV1cbiAgICBjb25zdCBpc09uID0gR2VvbWV0cnkuaW5kZXhPZk5lYXJlc3RQb2ludChwb3NpdGlvbnMsIHBvc2l0aW9uLCAtMSwgR2VvbWV0cnkuZ2V0WERpZmZlcmVuY2UpXG5cbiAgICBpZiAodGhpcy5kcmFnZ2FibGVzW2luZGV4XS5pc09uICE9PSAhIWlzT24pIHtcbiAgICAgIHRoaXMuZHJhZ2dhYmxlc1tpbmRleF0uaXNPbiA9ICEhaXNPblxuICAgICAgdGhpcy5vbkNoYW5nZS5maXJlKClcbiAgICB9XG5cbiAgICB0aGlzLmRyYWdnYWJsZXNbaW5kZXhdLm1vdmUocG9zaXRpb25zW2lzT25dLCB0aW1lLCB0cnVlKVxuICB9XG5cbiAgZml4VG9PZmYoaW5kZXgsIGZpeE9mZlBvc2l0aW9uKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzW2luZGV4XS5pc09uID0gZmFsc2VcbiAgICB0aGlzLmRyYWdnYWJsZXNbaW5kZXhdLmZpeFBvc2l0aW9uID0gZml4T2ZmUG9zaXRpb25cbiAgfVxuXG4gIG1vdmVEcmFnZ2FibGVUb09mZihpbmRleCwgZml4T2ZmUG9zaXRpb24sIHRpbWUpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXNbaW5kZXhdLmlzT24gPSBmYWxzZVxuICAgIHRoaXMuZHJhZ2dhYmxlc1tpbmRleF0ubW92ZShmaXhPZmZQb3NpdGlvbiwgdGltZSwgdHJ1ZSlcbiAgfVxuXG4gIGdldEN1cnJlbnRGaXhQb3NpdGlvbldpdGhPZmYoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5pc09uID8gZHJhZ2dhYmxlLmZpeFBvc2l0aW9uLnN1Yih0aGlzLm9wdGlvbnMuc3RlcE9uKSA6IGRyYWdnYWJsZS5maXhQb3NpdGlvbi5jbG9uZSgpXG4gICAgfSwgdGhpcylcbiAgfVxuXG4gIGdldFNvcnRlZERyYWdnYWJsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLmluaXRQb3NpdGlvbilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgocG9zaXRpb24pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kcmFnZ2FibGVzLmZpbHRlcigoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZHJhZ2dhYmxlLmZpeFBvc2l0aW9uLmNvbXBhcmUocG9zaXRpb24pIHx8IGRyYWdnYWJsZS5maXhQb3NpdGlvbi5jb21wYXJlKHBvc2l0aW9uLmFkZCh0aGlzLm9wdGlvbnMuc3RlcE9uKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB0aGlzKVswXVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB0aGlzKVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLm1vdmUoZHJhZ2dhYmxlLmluaXRQb3NpdGlvbiwgMCwgdHJ1ZSwgZmFsc2UpXG4gICAgICBkcmFnZ2FibGUuaXNPbiA9IGZhbHNlXG4gICAgfSlcbiAgfVxuXG4gIGdldCBwb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgY29uc3QgcG9zaXRpb24gPSBkcmFnZ2FibGUuZml4UG9zaXRpb24uY2xvbmUoKVxuICAgICAgcG9zaXRpb24uaXNPbiA9IGRyYWdnYWJsZS5pc09uXG4gICAgICByZXR1cm4gcG9zaXRpb25cbiAgICB9KVxuICB9XG5cbiAgc2V0IHBvc2l0aW9ucyhwb3NpdGlvbnMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gJ3dyb25nIGFycmF5IGxlbmd0aCdcbiAgICBpZiAocG9zaXRpb25zLmxlbmd0aCA9PT0gdGhpcy5kcmFnZ2FibGVzLmxlbmd0aCkge1xuICAgICAgcG9zaXRpb25zLmZvckVhY2goKHBvaW50LCBpKSA9PiB7XG4gICAgICAgIHRoaXMuZHJhZ2dhYmxlc1tpXS5pc09uID0gcG9pbnQuaXNPblxuICAgICAgICB0aGlzLmRyYWdnYWJsZXNbaV0ubW92ZShwb2ludCwgMCwgdHJ1ZSwgdHJ1ZSlcbiAgICAgIH0sIHRoaXMpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG1lc3NhZ2VcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gbGlzdFN3aXRjaGVyRmFjdG9yeShlbGVtZW50LCBkcmFnZ2FibGVFbGVtZW50cywgb3B0aW9ucz17fSkge1xuICBjb25zdCBkcmFnZ2FibGVPcHRpb25zID0gb3B0aW9ucy5kcmFnZ2FibGUgfHwge31cbiAgY29uc3QgbGlzdE9wdGlvbnMgPSBvcHRpb25zLmxpc3QgfHwge31cblxuICBkcmFnZ2FibGVPcHRpb25zLnBhcmVudCA9IGRyYWdnYWJsZU9wdGlvbnMucGFyZW50IHx8IGVsZW1lbnRcbiAgZHJhZ2dhYmxlRWxlbWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkcmFnZ2FibGVFbGVtZW50cylcblxuICBjb25zdCBkcmFnZ2FibGVzID0gZHJhZ2dhYmxlRWxlbWVudHMubWFwKChlbGVtZW50KSA9PiB7XG4gICAgcmV0dXJuIG5ldyBEcmFnZ2FibGUoZWxlbWVudCwgZHJhZ2dhYmxlT3B0aW9ucylcbiAgfSlcbiAgcmV0dXJuIG5ldyBMaXN0U3dpdGNoZXIoZHJhZ2dhYmxlcywgbGlzdE9wdGlvbnMpXG59XG5cbmV4cG9ydCB7IGxpc3RTd2l0Y2hlckZhY3RvcnksIExpc3RTd2l0Y2hlciB9XG4iLCIndXNlIHN0cmljdCdcbmltcG9ydCB7IEdlb21ldHJ5LCBQb2ludCB9IGZyb20gJy4vZ2VvbWV0cnknXG5cbmNvbnN0IHBvc2l0aW9uVHlwZSA9IHtcbiAgbm90Q3Jvc3Npbmc6IDAsXG4gIGZsb2F0TGVmdDogMSxcbiAgZmxvYXRSaWdodDogMlxufVxuXG5mdW5jdGlvbiBwb3NpdGlvbkZhY3RvcnkodHlwZSkge1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgY2FzZSBwb3NpdGlvblR5cGUubm90Q3Jvc3Npbmc6XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHJlY3RhbmdsZSwgX29wdGlvbnMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihyZWN0YW5nbGVMaXN0LCBpbmRleGVzT2ZOZXdzKSB7XG4gICAgICAgIGNvbnN0IGJvdW5kUmVjdCA9IHR5cGVvZiByZWN0YW5nbGUgPT09ICdmdW5jdGlvbicgPyByZWN0YW5nbGUoKSA6IHJlY3RhbmdsZSxcbiAgICAgICAgICBzdGF0aWNSZWN0YW5nbGVJbmRleGVzID0gcmVjdGFuZ2xlTGlzdC5yZWR1Y2UoZnVuY3Rpb24oaW5kZXhlcywgX3JlY3QsIGluZGV4KSB7XG4gICAgICAgICAgICBpZiAoaW5kZXhlc09mTmV3cy5pbmRleE9mKGluZGV4KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgaW5kZXhlcy5wdXNoKGluZGV4KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGluZGV4ZXNcbiAgICAgICAgICB9LCBbXSlcblxuICAgICAgICBpbmRleGVzT2ZOZXdzLmZvckVhY2goZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgICAgICBsZXQgcmVjdCA9IHJlY3RhbmdsZUxpc3RbaW5kZXhdLCByZW1vdmFibGUgPSBmYWxzZVxuICAgICAgICAgIHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMuZm9yRWFjaChmdW5jdGlvbihpbmRleE9mU3RhdGljKSB7XG4gICAgICAgICAgICBjb25zdCBzdGF0aWNSZWN0ID0gcmVjdGFuZ2xlTGlzdFtpbmRleE9mU3RhdGljXVxuICAgICAgICAgICAgcmVjdCA9IHN0YXRpY1JlY3QubW92ZVRvQm91bmQocmVjdClcbiAgICAgICAgICB9KVxuICAgICAgICAgIHJlbW92YWJsZSA9IHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMuc29tZShmdW5jdGlvbihpbmRleE9mU3RhdGljKSB7XG4gICAgICAgICAgICBjb25zdCBzdGF0aWNSZWN0ID0gcmVjdGFuZ2xlTGlzdFtpbmRleE9mU3RhdGljXVxuICAgICAgICAgICAgcmV0dXJuICAhIXN0YXRpY1JlY3QuYW5kKHJlY3QpXG4gICAgICAgICAgfSkgfHwgcmVjdC5hbmQoYm91bmRSZWN0KS5nZXRTcXVhcmUoKSAhPT0gcmVjdC5nZXRTcXVhcmUoKVxuICAgICAgICAgIGlmIChyZW1vdmFibGUpIHtcbiAgICAgICAgICAgIHJlY3QucmVtb3ZhYmxlID0gdHJ1ZVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdGF0aWNSZWN0YW5nbGVJbmRleGVzLnB1c2goaW5kZXgpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gcmVjdGFuZ2xlTGlzdFxuICAgICAgfVxuICAgIH1cbiAgY2FzZSBwb3NpdGlvblR5cGUuZmxvYXRMZWZ0OlxuICAgIHJldHVybiBmdW5jdGlvbihyZWN0YW5nbGUsIG9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgcGFkZGluZ1RvcExlZnQ6IG5ldyBQb2ludCgwLCAwKSxcbiAgICAgICAgcGFkZGluZ0JvdHRvbVJpZ2h0OiBuZXcgUG9pbnQoMCwgMCksXG4gICAgICAgIHlHYXBCZXR3ZWVuRHJhZ2dhYmxlczogMCxcbiAgICAgICAgcmVtb3ZhYmxlOiB0cnVlXG4gICAgICB9LCBvcHRpb25zKVxuXG4gICAgICByZXR1cm4gZnVuY3Rpb24ocmVjdGFuZ2xlTGlzdCwgX2luZGV4ZXNPZk5ld3MpIHtcbiAgICAgICAgY29uc3QgYm91bmRSZWN0ID0gdHlwZW9mIHJlY3RhbmdsZSA9PT0gJ2Z1bmN0aW9uJyA/IHJlY3RhbmdsZSgpIDogcmVjdGFuZ2xlXG4gICAgICAgIGNvbnN0IHJlY3RQMiA9IGJvdW5kUmVjdC5nZXRQMigpXG4gICAgICAgIGxldCBib3VuZGFyeVBvaW50cyA9IFtib3VuZFJlY3QucG9zaXRpb25dXG4gICAgICAgIHJlY3RhbmdsZUxpc3QuZm9yRWFjaChmdW5jdGlvbihyZWN0KSB7XG4gICAgICAgICAgbGV0IHBvc2l0aW9uLCBpc1ZhbGlkID0gZmFsc2VcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvdW5kYXJ5UG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IChuZXcgUG9pbnQoYm91bmRhcnlQb2ludHNbaV0ueCwgaSA+IDAgPyAoYm91bmRhcnlQb2ludHNbaSAtIDFdLnkgKyBvcHRpb25zLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcykgOiBib3VuZFJlY3QucG9zaXRpb24ueSkpLmFkZChvcHRpb25zLnBhZGRpbmdUb3BMZWZ0KVxuICAgICAgICAgICAgaXNWYWxpZCA9IChwb3NpdGlvbi54ICsgcmVjdC5zaXplLnggPCByZWN0UDIueClcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICAgICAgcG9zaXRpb24gPSAobmV3IFBvaW50KGJvdW5kUmVjdC5wb3NpdGlvbi54LCBib3VuZGFyeVBvaW50c1tib3VuZGFyeVBvaW50cy5sZW5ndGggLSAxXS55ICsgb3B0aW9ucy55R2FwQmV0d2VlbkRyYWdnYWJsZXMpKS5hZGQob3B0aW9ucy5wYWRkaW5nVG9wTGVmdClcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVjdC5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgICAgICAgaWYgKG9wdGlvbnMucmVtb3ZhYmxlICYmIHJlY3QuZ2V0UDMoKS55ID4gYm91bmRSZWN0LmdldFAzKCkueSkge1xuICAgICAgICAgICAgcmVjdC5yZW1vdmFibGUgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGJvdW5kYXJ5UG9pbnRzID0gR2VvbWV0cnkuYWRkUG9pbnRUb0JvdW5kUG9pbnRzKGJvdW5kYXJ5UG9pbnRzLCByZWN0LmdldFAzKCkuYWRkKG9wdGlvbnMucGFkZGluZ0JvdHRvbVJpZ2h0KSlcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHJlY3RhbmdsZUxpc3RcbiAgICAgIH1cbiAgICB9XG4gIGNhc2UgcG9zaXRpb25UeXBlLmZsb2F0UmlnaHQ6XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHJlY3RhbmdsZSwgb3B0aW9ucykge1xuICAgICAgb3B0aW9ucyA9IE9iamVjdC5hc3Npbmcoe1xuICAgICAgICBwYWRkaW5nVG9wUmlnaHQ6IG5ldyBQb2ludCg1LCA1KSxcbiAgICAgICAgcGFkZGluZ0JvdHRvbUxlZnQ6IG5ldyBQb2ludCgwLCAwKSxcbiAgICAgICAgcmVtb3ZhYmxlOiB0cnVlXG4gICAgICB9LCBvcHRpb25zKVxuXG4gICAgICBjb25zdCBwYWRkaW5nVG9wTmVnUmlnaHQgPSBuZXcgUG9pbnQoLW9wdGlvbnMucGFkZGluZ1RvcFJpZ2h0LngsIG9wdGlvbnMucGFkZGluZ1RvcFJpZ2h0LnkpXG4gICAgICBjb25zdCBwYWRkaW5nQm90dG9tTmVnTGVmdCA9IG5ldyBQb2ludCgtb3B0aW9ucy5wYWRkaW5nQm90dG9tTGVmdC54LCBvcHRpb25zLnBhZGRpbmdCb3R0b21MZWZ0LnkpXG4gICAgICByZXR1cm4gZnVuY3Rpb24ocmVjdGFuZ2xlTGlzdCwgX2luZGV4ZXNPZk5ld3MpIHtcbiAgICAgICAgY29uc3QgYm91bmRSZWN0ID0gdHlwZW9mIHJlY3RhbmdsZSA9PT0gJ2Z1bmN0aW9uJyA/IHJlY3RhbmdsZSgpIDogcmVjdGFuZ2xlXG4gICAgICAgIGxldCBib3VuZGFyeVBvaW50cyA9IFtib3VuZFJlY3QuZ2V0UmlnaHRUb3BQb2ludCgpXVxuICAgICAgICByZWN0YW5nbGVMaXN0LmZvckVhY2goZnVuY3Rpb24ocmVjdCwgX2luZGV4KSB7XG4gICAgICAgICAgbGV0IHBvc2l0aW9uLCBpc1ZhbGlkID0gZmFsc2VcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvdW5kYXJ5UG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IChuZXcgUG9pbnQoYm91bmRhcnlQb2ludHNbaV0ueCAtIHJlY3Quc2l6ZS54LCBpID4gMCA/IGJvdW5kYXJ5UG9pbnRzW2kgLSAxXS55IDogYm91bmRSZWN0LnBvc2l0aW9uLnkpKS5hZGQocGFkZGluZ1RvcE5lZ1JpZ2h0KVxuICAgICAgICAgICAgaXNWYWxpZCA9IChwb3NpdGlvbi54ID4gcmVjdC5wb3NpdGlvbi54KVxuICAgICAgICAgICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IG5ldyBQb2ludChib3VuZFJlY3QuZ2V0UDIoKS54LCBib3VuZGFyeVBvaW50c1tib3VuZGFyeVBvaW50cy5sZW5ndGggLSAxXS55KVxuICAgICAgICAgIH1cbiAgICAgICAgICByZWN0LnBvc2l0aW9uID0gcG9zaXRpb25cbiAgICAgICAgICBpZiAob3B0aW9ucy5yZW1vdmFibGUgJiYgcmVjdC5nZXRMZWZ0Qm90dG9tUG9pbnQoKS55ID4gYm91bmRSZWN0LmdldFA0KCkueSkge1xuICAgICAgICAgICAgcmVjdC5yZW1vdmFibGUgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGJvdW5kYXJ5UG9pbnRzID0gR2VvbWV0cnkuYWRkUG9pbnRUb0JvdW5kUG9pbnRzKGJvdW5kYXJ5UG9pbnRzLCByZWN0LmdldFA0KCkuYWRkKHBhZGRpbmdCb3R0b21OZWdMZWZ0KSwgdHJ1ZSlcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHJlY3RhbmdsZUxpc3RcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc29ydGluZ0ZhY3RvcnkodHlwZSkge1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgY2FzZSBwb3NpdGlvblR5cGUubm90Q3Jvc3Npbmc6XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG9sZE9ianNMaXN0LCBuZXdPYmpzLCBpbmRleE9mTmV3cykge1xuICAgICAgICBjb25zdCBvYmpzTGlzdCA9IG9sZE9ianNMaXN0LmNvbmNhdChuZXdPYmpzKVxuICAgICAgICBuZXdPYmpzLmZvckVhY2goZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgICAgaW5kZXhPZk5ld3MucHVzaChvYmpzTGlzdC5pbmRleE9mKG9iaikpXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBvYmpzTGlzdFxuICAgICAgfVxuICAgIH1cbiAgY2FzZSBwb3NpdGlvblR5cGUuZmxvYXRMZWZ0OlxuICBjYXNlIHBvc2l0aW9uVHlwZS5mbG9hdFJpZ2h0OlxuICAgIHJldHVybiBmdW5jdGlvbihyYWRpdXMsIGdldERpc3RhbmNlLCBvcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIGdldFBvc2l0aW9uOiBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgICByZXR1cm4gb2JqLnBvc2l0aW9uXG4gICAgICAgIH1cbiAgICAgIH0sIG9wdGlvbnMpXG5cbiAgICAgIHJldHVybiBmdW5jdGlvbihvbGRPYmpzTGlzdCwgbmV3T2JqcywgaW5kZXhPZk5ld3MpIHtcbiAgICAgICAgY29uc3QgbmV3TGlzdCA9IG9sZE9ianNMaXN0LmNvbmNhdCgpXG4gICAgICAgIGNvbnN0IGxpc3RPbGRQb3NpdGlvbiA9IG9sZE9ianNMaXN0Lm1hcChvcHRpb25zLmdldFBvc2l0aW9uKVxuICAgICAgICBuZXdPYmpzLmZvckVhY2goZnVuY3Rpb24obmV3T2JqKSB7XG4gICAgICAgICAgbGV0IGluZGV4ID0gR2VvbWV0cnkuaW5kZXhPZk5lYXJlc3RQb2ludChsaXN0T2xkUG9zaXRpb24sIG9wdGlvbnMuZ2V0UG9zaXRpb24obmV3T2JqKSwgcmFkaXVzLCBnZXREaXN0YW5jZSlcbiAgICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICBpbmRleCA9IG5ld0xpc3QubGVuZ3RoXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluZGV4ID0gbmV3TGlzdC5pbmRleE9mKG9sZE9ianNMaXN0W2luZGV4XSlcbiAgICAgICAgICB9XG4gICAgICAgICAgbmV3TGlzdC5zcGxpY2UoaW5kZXgsIDAsIG5ld09iailcbiAgICAgICAgfSlcbiAgICAgICAgbmV3T2Jqcy5mb3JFYWNoKGZ1bmN0aW9uKG5ld09iaikge1xuICAgICAgICAgIGluZGV4T2ZOZXdzLnB1c2gobmV3TGlzdC5pbmRleE9mKG5ld09iaikpXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBuZXdMaXN0XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCB7IHBvc2l0aW9uVHlwZSwgc29ydGluZ0ZhY3RvcnksIHBvc2l0aW9uRmFjdG9yeSB9XG4iLCJpbXBvcnQgcmVtb3ZlSXRlbXMgZnJvbSAncmVtb3ZlLWFycmF5LWl0ZW1zJ1xuaW1wb3J0IEV2ZW50IGZyb20gJy4vZXZlbnQnXG5pbXBvcnQgeyBEcmFnZ2FibGUgfSBmcm9tICcuL2RyYWdnYWJsZSdcbmltcG9ydCB7IFRhcmdldCB9IGZyb20gJy4vdGFyZ2V0J1xuXG5jb25zdCBEcmFnZWUgPSB7IEV2ZW50IH0gLy90b2RvIHJlbW92ZSBhZnRlciByZWZhY3RvcmVcblxuY29uc3Qgc2NvcGVzID0gW11cblxuY2xhc3MgU2NvcGUge1xuICBjb25zdHJ1Y3RvcihkcmFnZ2FibGVzLCB0YXJnZXRzLCBvcHRpb25zPXt9KSB7XG4gICAgc2NvcGVzLmZvckVhY2goKHNjb3BlKSA9PiB7XG4gICAgICBpZiAoZHJhZ2dhYmxlcykge1xuICAgICAgICBkcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgICAgIHJlbW92ZUl0ZW1zKHNjb3BlLmRyYWdnYWJsZXMsIGRyYWdnYWJsZSlcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgaWYgKHRhcmdldHMpIHtcbiAgICAgICAgdGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHtcbiAgICAgICAgICByZW1vdmVJdGVtcyhzY29wZS50YXJnZXRzLCB0YXJnZXQpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZXMgfHwgW11cbiAgICB0aGlzLnRhcmdldHMgPSB0YXJnZXRzIHx8IFtdXG4gICAgc2NvcGVzLnB1c2godGhpcylcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICB0aW1lRW5kOiAob3B0aW9ucy50aW1lRW5kKSB8fCA0MDBcbiAgICB9XG5cbiAgICB0aGlzLm9uQ2hhbmdlID0gbmV3IERyYWdlZS5FdmVudCh0aGlzKVxuICAgIGlmIChvcHRpb25zLm9uQ2hhbmdlKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlLmFkZChvcHRpb25zLm9uQ2hhbmdlKVxuICAgIH1cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUub25FbmQuYWRkKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMub25FbmQoZHJhZ2dhYmxlKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgYWRkRHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5wdXNoKGRyYWdnYWJsZSlcbiAgICBkcmFnZ2FibGUub25FbmQudW5zaGlmdCgoKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5vbkVuZChkcmFnZ2FibGUpXG4gICAgfSlcbiAgfVxuXG4gIGFkZFRhcmdldCh0YXJnZXQpIHtcbiAgICB0aGlzLnRhcmdldHMucHVzaCh0YXJnZXQpXG4gIH1cblxuICBvbkVuZChkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBzaG90VGFyZ2V0cyA9IHRoaXMudGFyZ2V0cy5maWx0ZXIoKHRhcmdldCkgPT4ge1xuICAgICAgcmV0dXJuIHRhcmdldC5kcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTFcbiAgICB9KS5maWx0ZXIoKHRhcmdldCkgPT4ge1xuICAgICAgcmV0dXJuIHRhcmdldC5jYXRjaERyYWdnYWJsZShkcmFnZ2FibGUpXG4gICAgfSkuc29ydCgoYSwgYikgPT4ge1xuICAgICAgcmV0dXJuIGEuZ2V0UmVjdGFuZ2xlKCkuZ2V0U3F1YXJlKCkgLSBiLmdldFJlY3RhbmdsZSgpLmdldFNxdWFyZSgpXG4gICAgfSlcblxuICAgIGlmIChzaG90VGFyZ2V0cy5sZW5ndGgpIHtcbiAgICAgIHNob3RUYXJnZXRzWzBdLm9uRW5kKGRyYWdnYWJsZSlcbiAgICB9IGVsc2UgaWYgKGRyYWdnYWJsZS50YXJnZXRzLmxlbmd0aCkge1xuICAgICAgZHJhZ2dhYmxlLm1vdmUoZHJhZ2dhYmxlLmluaXRQb3NpdGlvbiwgdGhpcy5vcHRpb25zLnRpbWVFbmQsIHRydWUsIHRydWUpXG4gICAgfVxuICAgIHRoaXMub25DaGFuZ2UuZmlyZSgpXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMudGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHRhcmdldC5yZXNldCgpKVxuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucmVmcmVzaCgpKVxuICAgIHRoaXMudGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHRhcmdldC5yZWZyZXNoKCkpXG4gIH1cblxuICBnZXQgcG9zaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnRhcmdldHMubWFwKCh0YXJnZXQpID0+IHtcbiAgICAgIHJldHVybiB0YXJnZXQuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB0aGlzLmRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpKVxuICAgIH0pXG4gIH1cblxuICBzZXQgcG9zaXRpb25zKHBvc2l0aW9ucykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSAnd3JvbmcgYXJyYXkgbGVuZ3RoJ1xuICAgIGlmIChwb3NpdGlvbnMubGVuZ3RoID09PSB0aGlzLnRhcmdldHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB0YXJnZXQucmVzZXQoKSlcblxuICAgICAgcG9zaXRpb25zLmZvckVhY2goKHRhcmdldEluZGV4ZXMsIGkpID0+IHtcbiAgICAgICAgdGFyZ2V0SW5kZXhlcy5mb3JFYWNoKChpbmRleCkgPT4ge1xuICAgICAgICAgIHRoaXMudGFyZ2V0c1tpXS5hZGQodGhpcy5kcmFnZ2FibGVzW2luZGV4XSlcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG1lc3NhZ2VcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgZGVmYXVsdFNjb3BlID0gbmV3IFNjb3BlKClcblxuZnVuY3Rpb24gc2NvcGUoZm4pIHtcbiAgY29uc3QgY3VycmVudFNjb3BlID0gbmV3IFNjb3BlKClcbiAgY29uc3QgYWRkRHJhZ2dhYmxlVG9TY29wZSA9IGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICAgIGN1cnJlbnRTY29wZS5hZGREcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICAgIHJldHVybiB0cnVlXG4gIH1cbiAgY29uc3QgYWRkVGFyZ2V0VG9TY29wZSA9IGZ1bmN0aW9uKHRhcmdldCkge1xuICAgIGN1cnJlbnRTY29wZS5hZGRUYXJnZXQodGFyZ2V0KVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBEcmFnZ2FibGUub25DcmVhdGUuYWRkKGFkZERyYWdnYWJsZVRvU2NvcGUpXG4gIFRhcmdldC5vbkNyZWF0ZS5hZGQoYWRkVGFyZ2V0VG9TY29wZSlcbiAgZm4uY2FsbCgpXG4gIERyYWdnYWJsZS5vbkNyZWF0ZS5yZW1vdmUoYWRkRHJhZ2dhYmxlVG9TY29wZSlcbiAgVGFyZ2V0Lm9uQ3JlYXRlLnJlbW92ZShhZGRUYXJnZXRUb1Njb3BlKVxuICByZXR1cm4gY3VycmVudFNjb3BlXG59XG5cbmZ1bmN0aW9uIHNjb3BlRmFjdG9yeShwYXJlbnRFbGVtZW50LCBkcmFnZ2FibGVFbGVtZW50cywgdGFyZ2V0RWxlbWVudHMsIG9wdGlvbnM9e30pIHtcbiAgY29uc3QgZHJhZ2dhYmxlT3B0aW9ucyA9IG9wdGlvbnMuZHJhZ2dhYmxlIHx8IHt9XG4gIGNvbnN0IHRhcmdldE9wdGlvbnMgPSBvcHRpb25zLnRhcmdldCB8fCB7fVxuICBjb25zdCBzY29wZU9wdGlvbnMgPSBvcHRpb25zLnNjb3BlIHx8IHt9XG4gIGRyYWdnYWJsZU9wdGlvbnMucGFyZW50ID0gZHJhZ2dhYmxlT3B0aW9ucy5wYXJlbnQgfHwgcGFyZW50RWxlbWVudFxuICB0YXJnZXRPcHRpb25zLnBhcmVudCA9IHRhcmdldE9wdGlvbnMucGFyZW50IHx8IHBhcmVudEVsZW1lbnRcbiAgZHJhZ2dhYmxlRWxlbWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkcmFnZ2FibGVFbGVtZW50cylcbiAgdGFyZ2V0RWxlbWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0YXJnZXRFbGVtZW50cylcblxuICBjb25zdCBkcmFnZ2FibGVzID0gZHJhZ2dhYmxlRWxlbWVudHMubWFwKChlbGVtZW50KSA9PiB7XG4gICAgcmV0dXJuIG5ldyBEcmFnZ2FibGUoZWxlbWVudCwgZHJhZ2dhYmxlT3B0aW9ucylcbiAgfSlcblxuICBjb25zdCB0YXJnZXRzID0gdGFyZ2V0RWxlbWVudHMubWFwKChlbGVtZW50KSA9PiB7XG4gICAgcmV0dXJuIG5ldyBUYXJnZXQoZWxlbWVudCwgZHJhZ2dhYmxlcywgdGFyZ2V0T3B0aW9ucylcbiAgfSlcbiAgcmV0dXJuIG5ldyBTY29wZShkcmFnZ2FibGVzLCB0YXJnZXRzLCBzY29wZU9wdGlvbnMpXG59XG5cbmV4cG9ydCB7IHNjb3BlcywgZGVmYXVsdFNjb3BlLCBTY29wZSwgc2NvcGVGYWN0b3J5LCBzY29wZSB9XG4iLCJpbXBvcnQgeyBMaXN0IH0gZnJvbSAnLi9saXN0J1xuaW1wb3J0IHsgR2VvbWV0cnkgfSBmcm9tICcuL2dlb21ldHJ5J1xuaW1wb3J0IHsgRHJhZ2dhYmxlIH0gZnJvbSAnLi9kcmFnZ2FibGUnXG5cbmNsYXNzIFNvcnRhYmxlIGV4dGVuZHMgTGlzdCB7XG4gIGNvbnN0cnVjdG9yKGRyYWdnYWJsZXMsIG9wdGlvbnM9e30pIHtcbiAgICBvcHRpb25zLmdldERpc3RhbmNlID0gb3B0aW9ucy5nZXREaXN0YW5jZSB8fCBHZW9tZXRyeS5nZXRZRGlmZmVyZW5jZVxuICAgIHN1cGVyKGRyYWdnYWJsZXMsIG9wdGlvbnMpXG4gIH1cblxuICBpbml0RHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIGRyYWdnYWJsZS5lbmFibGUgPSB0aGlzLl9lbmFibGVcbiAgICBpZiAodGhpcy5vcHRpb25zLmlzU29ydGFibGUpIHtcbiAgICAgIGRyYWdnYWJsZS5vbk1vdmUuYWRkKCgpID0+IHtcbiAgICAgICAgaWYgKGRyYWdnYWJsZS5pc0RyYWdnaW5nKSB7XG4gICAgICAgICAgdGhpcy5leGNoYW5nZURyYWdnYWJsZUlmUG9zc2libGUoZHJhZ2dhYmxlKVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIGRyYWdnYWJsZS5vbkVuZC5hZGQoKCkgPT4ge1xuICAgICAgICBkcmFnZ2FibGUubW92ZShkcmFnZ2FibGUuZml4UG9zaXRpb24sIHRoaXMub3B0aW9ucy50aW1lRW5kKVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBleGNoYW5nZURyYWdnYWJsZUlmUG9zc2libGUoZHJhZ2dhYmxlKSB7XG4gICAgY29uc3QgZml4UG9zaXRpb24gPSBkcmFnZ2FibGUuZml4UG9zaXRpb25cbiAgICBjb25zdCBjdXJyZW50SW5kZXggPSB0aGlzLmRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpXG4gICAgY29uc3QgbmV4dERyYWdnYWJsZSA9IHRoaXMuZHJhZ2dhYmxlc1tjdXJyZW50SW5kZXggKyAxXVxuICAgIGNvbnN0IHByZXZEcmFnZ2FibGUgPSB0aGlzLmRyYWdnYWJsZXNbY3VycmVudEluZGV4IC0gMV1cblxuICAgIGlmIChkcmFnZ2FibGUuZG93bkRpcmVjdGlvbiAmJiBuZXh0RHJhZ2dhYmxlKSB7XG4gICAgICBjb25zdCBkaXN0YW5jZSA9IHRoaXMub3B0aW9ucy5nZXREaXN0YW5jZShkcmFnZ2FibGUucG9zaXRpb24sIG5leHREcmFnZ2FibGUucG9zaXRpb24pXG4gICAgICBpZiAoZGlzdGFuY2UgPCB0aGlzLm9wdGlvbnMucmFkaXVzKSB7XG4gICAgICAgIGRyYWdnYWJsZS5maXhQb3NpdGlvbiA9IG5leHREcmFnZ2FibGUuZml4UG9zaXRpb25cbiAgICAgICAgdGhpcy5tb3ZlT3JTYXZlKG5leHREcmFnZ2FibGUsIGZpeFBvc2l0aW9uLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpO1xuICAgICAgICBbdGhpcy5kcmFnZ2FibGVzW2N1cnJlbnRJbmRleF0sIHRoaXMuZHJhZ2dhYmxlc1tjdXJyZW50SW5kZXggKyAxXV0gPSBbdGhpcy5kcmFnZ2FibGVzW2N1cnJlbnRJbmRleCArIDFdLCB0aGlzLmRyYWdnYWJsZXNbY3VycmVudEluZGV4XV1cbiAgICAgICAgdGhpcy5leGNoYW5nZURyYWdnYWJsZUlmUG9zc2libGUoZHJhZ2dhYmxlKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChkcmFnZ2FibGUudXBEaXJlY3Rpb24gJiYgcHJldkRyYWdnYWJsZSkge1xuICAgICAgY29uc3QgZGlzdGFuY2UgPSB0aGlzLm9wdGlvbnMuZ2V0RGlzdGFuY2UoZHJhZ2dhYmxlLnBvc2l0aW9uLCBwcmV2RHJhZ2dhYmxlLnBvc2l0aW9uKVxuICAgICAgaWYgKGRpc3RhbmNlIDwgdGhpcy5vcHRpb25zLnJhZGl1cykge1xuICAgICAgICBkcmFnZ2FibGUuZml4UG9zaXRpb24gPSBwcmV2RHJhZ2dhYmxlLmZpeFBvc2l0aW9uXG4gICAgICAgIHRoaXMubW92ZU9yU2F2ZShwcmV2RHJhZ2dhYmxlLCBmaXhQb3NpdGlvbiwgdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKTtcbiAgICAgICAgW3RoaXMuZHJhZ2dhYmxlc1tjdXJyZW50SW5kZXhdLCB0aGlzLmRyYWdnYWJsZXNbY3VycmVudEluZGV4IC0gMV1dID0gW3RoaXMuZHJhZ2dhYmxlc1tjdXJyZW50SW5kZXggLSAxXSwgdGhpcy5kcmFnZ2FibGVzW2N1cnJlbnRJbmRleF1dXG4gICAgICAgIHRoaXMuZXhjaGFuZ2VEcmFnZ2FibGVJZlBvc3NpYmxlKGRyYWdnYWJsZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc29ydGFibGVGYWN0b3J5KHBhcmVudEVsZW1lbnQsIGVsZW1lbnRzLCBvcHRpb25zPXt9KSB7XG4gIGNvbnN0IGRyYWdnYWJsZU9wdGlvbnMgPSBvcHRpb25zLmRyYWdnYWJsZSB8fCB7fVxuICBjb25zdCBsaXN0T3B0aW9ucyA9IG9wdGlvbnMubGlzdCB8fCB7fVxuICBkcmFnZ2FibGVPcHRpb25zLnBhcmVudCA9IGRyYWdnYWJsZU9wdGlvbnMucGFyZW50IHx8IHBhcmVudEVsZW1lbnRcbiAgZWxlbWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChlbGVtZW50cylcblxuICBjb25zdCBkcmFnZ2FibGVzID0gZWxlbWVudHMubWFwKChlbGVtZW50KSA9PiB7XG4gICAgcmV0dXJuIG5ldyBEcmFnZ2FibGUoZWxlbWVudCwgZHJhZ2dhYmxlT3B0aW9ucylcbiAgfSlcblxuICByZXR1cm4gbmV3IFNvcnRhYmxlKGRyYWdnYWJsZXMsIGxpc3RPcHRpb25zKVxufVxuXG5leHBvcnQgeyBTb3J0YWJsZSwgc29ydGFibGVGYWN0b3J5IH1cbiIsIid1c2Ugc3RyaWN0J1xuXG5pbXBvcnQgY3JlYXRlQ2FudmFzIGZyb20gJy4vdXRpbHMvY3JlYXRlY2FudmFzJ1xuaW1wb3J0IHsgR2VvbWV0cnkgfSBmcm9tICcuL2dlb21ldHJ5J1xuaW1wb3J0IHsgYm91bmRUb0xpbmUgfSBmcm9tICcuL2JvdW5kJ1xuaW1wb3J0IHsgRHJhZ2dhYmxlIH0gZnJvbSAnLi9kcmFnZ2FibGUnXG5cbmNsYXNzIFNwaWRlciB7XG4gIGNvbnN0cnVjdG9yKGFyZWEsIGVsZW1lbnRzLCBvcHRpb25zPXt9KSB7XG4gICAgY29uc3QgYXJlYVJlY3RhbmdsZSA9IEdlb21ldHJ5LmNyZWF0ZVJlY3RhbmdsZUZyb21FbGVtZW50KGFyZWEsIGFyZWEpXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBhbmdsZTogMCxcbiAgICAgIGRBbmdsZTogMiAqIE1hdGguUEkgLyBlbGVtZW50cy5sZW5ndGgsXG4gICAgICBjZW50ZXI6IGFyZWFSZWN0YW5nbGUuZ2V0Q2VudGVyKCksXG4gICAgICBzdGFydFJhZGl1czogNTAsXG4gICAgICBlbmRSYWRpdXM6IGFyZWFSZWN0YW5nbGUuZ2V0TWluU2lkZSgpIC8gMixcbiAgICAgIGxpbmVXaWR0aDogMixcbiAgICAgIHN0cm9rZVN0eWxlOiAnI2ZmNTU3NycsXG4gICAgICBmaWxsU3R5bGU6ICdyZ2JhKDE1MCwyNTUsNTAsMC44KSdcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGhpcy5hcmVhID0gYXJlYVxuICAgIHRoaXMuYXJlYVJlY3RhbmdsZSA9IGFyZWFSZWN0YW5nbGVcbiAgICB0aGlzLmluaXQoZWxlbWVudHMpXG4gIH1cblxuICBpbml0KGVsZW1lbnRzKSB7XG4gICAgdGhpcy5jYW52YXMgPSBjcmVhdGVDYW52YXModGhpcy5hcmVhLCB0aGlzLmFyZWFSZWN0YW5nbGUpXG4gICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gZWxlbWVudHMubWFwKChlbGVtZW50LCBpKSA9PiB7XG4gICAgICBjb25zdCBhbmdsZSA9IHRoaXMub3B0aW9ucy5hbmdsZSArIGkgKiB0aGlzLm9wdGlvbnMuZEFuZ2xlXG4gICAgICBjb25zdCBoYWxmU2l6ZSA9IEdlb21ldHJ5LmdldFNpemVPZkVsZW1lbnQoZWxlbWVudCkubXVsdCgwLjUpXG4gICAgICBjb25zdCBzdGFydCA9IEdlb21ldHJ5LmdldFBvaW50RnJvbVJhZGlhbFN5c3RlbShhbmdsZSwgdGhpcy5vcHRpb25zLnN0YXJ0UmFkaXVzLCB0aGlzLm9wdGlvbnMuY2VudGVyKS5zdWIoaGFsZlNpemUpXG4gICAgICBjb25zdCBlbmQgPSBHZW9tZXRyeS5nZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oYW5nbGUsIHRoaXMub3B0aW9ucy5lbmRSYWRpdXMsIHRoaXMub3B0aW9ucy5jZW50ZXIpLnN1YihoYWxmU2l6ZSlcbiAgICAgIGNvbnN0IGJvdW5kID0gYm91bmRUb0xpbmUoc3RhcnQsIGVuZClcblxuICAgICAgcmV0dXJuIG5ldyBEcmFnZ2FibGUoZWxlbWVudCwge1xuICAgICAgICBwYXJlbnQ6IHRoaXMuYXJlYSxcbiAgICAgICAgYm91bmQ6IGJvdW5kLFxuICAgICAgICBwb3NpdGlvbjogc3RhcnQsXG4gICAgICAgIG9uTW92ZTogKCkgPT4ge1xuICAgICAgICAgIHRoaXMuZHJhdygpXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgdGhpcy5pc0luaXQgPSB0cnVlXG4gICAgdGhpcy5kcmF3KClcbiAgfVxuXG4gIGRyYXcoKSB7XG4gICAgaWYgKCF0aGlzLmlzSW5pdCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy5hcmVhUmVjdGFuZ2xlLnNpemUueCwgdGhpcy5hcmVhUmVjdGFuZ2xlLnNpemUueSlcbiAgICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKClcblxuICAgIGxldCBwb2ludCA9IHRoaXMuZHJhZ2dhYmxlc1swXS5nZXRDZW50ZXIoKVxuICAgIHRoaXMuY29udGV4dC5tb3ZlVG8ocG9pbnQueCwgcG9pbnQueSlcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kcmFnZ2FibGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBwb2ludCA9IHRoaXMuZHJhZ2dhYmxlc1tpXS5nZXRDZW50ZXIoKVxuICAgICAgdGhpcy5jb250ZXh0LmxpbmVUbyhwb2ludC54LCBwb2ludC55KVxuICAgIH1cbiAgICB0aGlzLmNvbnRleHQuY2xvc2VQYXRoKClcbiAgICB0aGlzLmNvbnRleHQubGluZVdpZHRoID0gdGhpcy5vcHRpb25zLmxpbmVXaWR0aFxuICAgIHRoaXMuY29udGV4dC5zdHJva2VTdHlsZSA9IHRoaXMub3B0aW9ucy5zdHJva2VTdHlsZVxuICAgIHRoaXMuY29udGV4dC5zdHJva2UoKVxuICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSB0aGlzLm9wdGlvbnMuZmlsbFN0eWxlXG4gICAgdGhpcy5jb250ZXh0LmZpbGwoKVxuICB9XG59XG5cbmV4cG9ydCB7IFNwaWRlciB9XG4iLCJpbXBvcnQgcmFuZ2UgZnJvbSAnLi91dGlscy9yYW5nZS5qcydcbmltcG9ydCByZW1vdmVJdGVtcyBmcm9tICdyZW1vdmUtYXJyYXktaXRlbXMnXG5pbXBvcnQgZ2V0RGVmYXVsdFBhcmVudCBmcm9tICcuL3V0aWxzL2dldGRlZmF1bHRwYXJlbnQnXG5pbXBvcnQgRXZlbnQgZnJvbSAnLi9ldmVudCdcbmltcG9ydCB7IEdlb21ldHJ5IH0gZnJvbSAnLi9nZW9tZXRyeSdcbmltcG9ydCB7IHBvc2l0aW9uVHlwZSwgc29ydGluZ0ZhY3RvcnksIHBvc2l0aW9uRmFjdG9yeSB9IGZyb20gJy4vcG9zaXRpb25pbmcnXG5pbXBvcnQgeyBzY29wZXMsIGRlZmF1bHRTY29wZSB9IGZyb20gJy4vc2NvcGUnXG5cbmNvbnN0IERyYWdlZSA9IHsgcG9zaXRpb25UeXBlLCAgcG9zaXRpb25GYWN0b3J5LCBzb3J0aW5nRmFjdG9yeSwgc2NvcGVzLCBFdmVudCB9Ly90b2RvIHJlbW92ZSBhZnRlciByZWZhY3RvcmVcblxuY29uc3QgYWRkVG9EZWZhdWx0U2NvcGUgPSBmdW5jdGlvbih0YXJnZXQpIHtcbiAgZGVmYXVsdFNjb3BlLmFkZFRhcmdldCh0YXJnZXQpXG59XG5cbmNsYXNzIFRhcmdldCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGRyYWdnYWJsZXMsIG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0IHRhcmdldCA9IHRoaXNcbiAgICBjb25zdCBwYXJlbnQgPSBvcHRpb25zLnBhcmVudCB8fCBnZXREZWZhdWx0UGFyZW50KGVsZW1lbnQpXG5cbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHRpbWVFbmQ6IDIwMCxcbiAgICAgIHRpbWVFeGNhbmdlOiA0MDAsXG4gICAgICBwYXJlbnQ6IHBhcmVudCxcbiAgICAgIHNvcnRpbmc6IERyYWdlZS5zb3J0aW5nRmFjdG9yeShEcmFnZWUucG9zaXRpb25UeXBlLmZsb2F0TGVmdCkoODAsIEdlb21ldHJ5LnRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3RvcnkoeyB4OiAxLCB5OiA0IH0pKSxcbiAgICAgIHBvc2l0aW9uaW5nOiBEcmFnZWUucG9zaXRpb25GYWN0b3J5KERyYWdlZS5wb3NpdGlvblR5cGUuZmxvYXRMZWZ0KSh0aGlzLmdldFJlY3RhbmdsZS5iaW5kKHRoaXMpLCB7IHJlbW92YWJsZTogdHJ1ZSB9KVxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG4gICAgZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS50YXJnZXRzLnB1c2godGFyZ2V0KSlcbiAgICB0aGlzLmRyYWdnYWJsZXMgPSBkcmFnZ2FibGVzXG4gICAgdGhpcy5vbkFkZCA9IG5ldyBEcmFnZWUuRXZlbnQodGhpcylcbiAgICB0aGlzLmJlZm9yZUFkZCA9IG5ldyBEcmFnZWUuRXZlbnQodGhpcylcbiAgICB0aGlzLm9uUmVtb3ZlID0gbmV3IERyYWdlZS5FdmVudCh0aGlzKVxuXG4gICAgaWYgKG9wdGlvbnMub25SZW1vdmUpIHtcbiAgICAgIHRoaXMub25SZW1vdmUuYWRkKG9wdGlvbnMub25SZW1vdmUpXG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMub25BZGQpIHtcbiAgICAgIHRoaXMub25BZGQuYWRkKG9wdGlvbnMub25BZGQpXG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuYmVmb3JlQWRkKSB7XG4gICAgICB0aGlzLmJlZm9yZUFkZC5hZGQob3B0aW9ucy5iZWZvcmVBZGQpXG4gICAgfVxuXG4gICAgVGFyZ2V0Lm9uQ3JlYXRlLmZpcmUodGhpcylcblxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBpbml0KCkge1xuICAgIGxldCByZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXdcblxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzID0gdGhpcy5kcmFnZ2FibGVzLmZpbHRlcigoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBsZXQgZWxlbWVudCA9IGRyYWdnYWJsZS5lbGVtZW50LnBhcmVudE5vZGVcbiAgICAgIHdoaWxlIChlbGVtZW50KSB7XG4gICAgICAgIGlmIChlbGVtZW50ID09PSB0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGVcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH0pXG5cbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMubGVuZ3RoKSB7XG4gICAgICBpbmRleGVzT2ZOZXcgPSByYW5nZSh0aGlzLmlubmVyRHJhZ2dhYmxlcy5sZW5ndGgpXG4gICAgICByZWN0YW5nbGVzID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICAgIH0pLCBpbmRleGVzT2ZOZXcpXG4gICAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIGluZGV4ZXNPZk5ldylcbiAgICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gdGhpcy5vbkFkZC5maXJlKGRyYWdnYWJsZSkpXG4gICAgfVxuICB9XG5cbiAgZ2V0UmVjdGFuZ2xlKCkge1xuICAgIHJldHVybiBHZW9tZXRyeS5jcmVhdGVSZWN0YW5nbGVGcm9tRWxlbWVudChcbiAgICAgIHRoaXMuZWxlbWVudCxcbiAgICAgIHRoaXMub3B0aW9ucy5wYXJlbnQsXG4gICAgICB0aGlzLm9wdGlvbnMuaXNDb250ZW50Qm94U2l6ZSxcbiAgICAgIHRydWVcbiAgICApXG4gIH1cblxuICBjYXRjaERyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmNhdGNoRHJhZ2dhYmxlKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmNhdGNoRHJhZ2dhYmxlKHRoaXMsIGRyYWdnYWJsZSlcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGFyZ2V0UmVjdGFuZ2xlID0gdGhpcy5nZXRSZWN0YW5nbGUoKVxuICAgICAgY29uc3QgZHJhZ2dhYmxlU3F1YXJlID0gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpLmdldFNxdWFyZSgpXG5cbiAgICAgIHJldHVybiBkcmFnZ2FibGVTcXVhcmUgPCB0YXJnZXRSZWN0YW5nbGUuZ2V0U3F1YXJlKClcbiAgICAgICAgICAgICAgJiYgdGFyZ2V0UmVjdGFuZ2xlLmluY2x1ZGVQb2ludChkcmFnZ2FibGUuZ2V0Q2VudGVyKCkpXG4gICAgfVxuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UmVjdGFuZ2xlKCkucG9zaXRpb25cbiAgfVxuXG4gIGdldFNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UmVjdGFuZ2xlKCkuc2l6ZVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICBEcmFnZWUuc2NvcGVzLmZvckVhY2goKHNjb3BlKSA9PiByZW1vdmVJdGVtcyhzY29wZS50YXJnZXRzLCB0aGlzKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBbXSlcbiAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIFtdLCAwKVxuICB9XG5cbiAgb25FbmQoZHJhZ2dhYmxlKSB7XG4gICAgY29uc3QgbmV3RHJhZ2dhYmxlc0luZGV4ID0gW11cbiAgICBjb25zdCBpbmNsdWRlUG9pbnQgPSB0aGlzLmdldFJlY3RhbmdsZSgpLmluY2x1ZGVQb2ludChkcmFnZ2FibGUuZ2V0UG9zaXRpb24oKSlcblxuICAgIGlmICghaW5jbHVkZVBvaW50KSB7XG4gICAgICBpZiAodGhpcy5nZXRSZWN0YW5nbGUoKS5pbmNsdWRlUG9pbnQoZHJhZ2dhYmxlLmdldENlbnRlcigpKSkge1xuICAgICAgICBkcmFnZ2FibGUucG9zaXRpb24gPSBkcmFnZ2FibGUuZ2V0Q2VudGVyKCkuY2xvbmUoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5iZWZvcmVBZGQuZmlyZShkcmFnZ2FibGUpXG5cbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcyA9IHRoaXMub3B0aW9ucy5zb3J0aW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLCBbZHJhZ2dhYmxlXSwgbmV3RHJhZ2dhYmxlc0luZGV4KVxuICAgIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLm9wdGlvbnMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgbmV3RHJhZ2dhYmxlc0luZGV4LCBkcmFnZ2FibGUpXG5cbiAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIG5ld0RyYWdnYWJsZXNJbmRleClcbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMSkge1xuICAgICAgdGhpcy5hZGRSZW1vdmVPbk1vdmUoZHJhZ2dhYmxlKVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgaW5kZXhlc09mTmV3LCB0aW1lKSB7XG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuc2xpY2UoMCkuZm9yRWFjaCgoZHJhZ2dhYmxlLCBpKSA9PiB7XG4gICAgICBjb25zdCByZWN0ID0gcmVjdGFuZ2xlc1tpXSxcbiAgICAgICAgdGltZUVuZCA9IHRpbWUgfHwgdGltZSA9PT0gMCA/IHRpbWUgOiBpbmRleGVzT2ZOZXcuaW5kZXhPZihpKSAhPT0gLTEgPyB0aGlzLm9wdGlvbnMudGltZUVuZCA6IHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZVxuXG4gICAgICBpZiAocmVjdC5yZW1vdmFibGUpIHtcbiAgICAgICAgZHJhZ2dhYmxlLm1vdmUoZHJhZ2dhYmxlLmluaXRQb3NpdGlvbiwgdGltZUVuZCwgdHJ1ZSwgdHJ1ZSlcbiAgICAgICAgcmVtb3ZlSXRlbXModGhpcy5pbm5lckRyYWdnYWJsZXMsIGRyYWdnYWJsZSlcblxuICAgICAgICB0aGlzLm9uUmVtb3ZlLmZpcmUoZHJhZ2dhYmxlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZHJhZ2dhYmxlLm1vdmUocmVjdC5wb3NpdGlvbiwgdGltZUVuZCwgdHJ1ZSwgdHJ1ZSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgYWRkKGRyYWdnYWJsZSwgdGltZSkge1xuICAgIGNvbnN0IG5ld0RyYWdnYWJsZXNJbmRleCA9IHRoaXMuaW5uZXJEcmFnZ2FibGVzLmxlbmd0aFxuXG4gICAgdGhpcy5iZWZvcmVBZGQuZmlyZShkcmFnZ2FibGUpXG5cbiAgICB0aGlzLnB1c2hJbm5lckRyYWdnYWJsZShkcmFnZ2FibGUpXG4gICAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBuZXdEcmFnZ2FibGVzSW5kZXgsIGRyYWdnYWJsZSlcblxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgW25ld0RyYWdnYWJsZXNJbmRleF0sIHRpbWUgfHwgMClcbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMSkge1xuICAgICAgdGhpcy5hZGRSZW1vdmVPbk1vdmUoZHJhZ2dhYmxlKVxuICAgIH1cbiAgfVxuXG4gIHB1c2hJbm5lckRyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpPT09LTEpIHtcbiAgICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxuICAgIH1cbiAgfVxuXG4gIGFkZFJlbW92ZU9uTW92ZShkcmFnZ2FibGUpIHtcbiAgICBkcmFnZ2FibGUub25Nb3ZlLmFkZCh0aGlzLnJlbW92ZUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICB0aGlzLnJlbW92ZShkcmFnZ2FibGUpXG4gICAgfSlcblxuICAgIHRoaXMub25BZGQuZmlyZShkcmFnZ2FibGUpXG4gIH1cblxuICByZW1vdmUoZHJhZ2dhYmxlKSB7XG4gICAgZHJhZ2dhYmxlLm9uTW92ZS5yZW1vdmUodGhpcy5yZW1vdmVIYW5kbGVyKVxuXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSlcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5zcGxpY2UoaW5kZXgsIDEpXG5cbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgfSksIFtdKVxuXG4gICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBbXSlcbiAgICB0aGlzLm9uUmVtb3ZlLmZpcmUoZHJhZ2dhYmxlKVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUubW92ZShkcmFnZ2FibGUuaW5pdFBvc2l0aW9uLCAwLCB0cnVlLCB0cnVlKVxuICAgICAgdGhpcy5vblJlbW92ZS5maXJlKGRyYWdnYWJsZSlcbiAgICB9KVxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzID0gW11cbiAgfVxuXG4gIGdldFNvcnRlZERyYWdnYWJsZXMoKSB7XG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuc2xpY2UoKVxuICB9XG59XG5cblRhcmdldC5vbkNyZWF0ZSA9IG5ldyBEcmFnZWUuRXZlbnQoVGFyZ2V0LCB7IGlzUmV2ZXJzZTogdHJ1ZSwgaXNTdG9wT25UcnVlOiB0cnVlIH0pXG5UYXJnZXQub25DcmVhdGUuYWRkKGFkZFRvRGVmYXVsdFNjb3BlKVxuXG5leHBvcnQgeyBUYXJnZXQgfVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGhhc0NsYXNzKGVsZW1lbnQsIGMpIHtcbiAgY29uc3QgcmUgPSBuZXcgUmVnRXhwKCcoXnxcXFxccyknICsgYyArICcoXFxcXHN8JCknLCAnZycpXG4gIHJldHVybiAocmUudGVzdChlbGVtZW50LmNsYXNzTmFtZSkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRDbGFzcyhlbGVtZW50LCBjKSB7XG4gIGlmICghaGFzQ2xhc3MoZWxlbWVudCwgYykpIHtcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IChlbGVtZW50LmNsYXNzTmFtZSArICcgJyArIGMpLnJlcGxhY2UoL1xccysvZywgJyAnKS5yZXBsYWNlKC8oXiB8ICQpL2csICcnKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDbGFzcyhlbGVtZW50LCBjKSB7XG4gIGNvbnN0IHJlID0gbmV3IFJlZ0V4cCgnKF58XFxcXHMpJyArIGMgKyAnKFxcXFxzfCQpJywgJ2cnKVxuICBlbGVtZW50LmNsYXNzTmFtZSA9IGVsZW1lbnQuY2xhc3NOYW1lLnJlcGxhY2UocmUsICckMScpLnJlcGxhY2UoL1xccysvZywgJyAnKS5yZXBsYWNlKC8oXiB8ICQpL2csICcnKVxufVxuIiwiZnVuY3Rpb24gc2V0U3R5bGUoZWxlbWVudCwgc3R5bGUpIHtcbiAgc3R5bGUgPSBzdHlsZSB8fCB7fVxuICBsZXQgY3NzVGV4dCA9ICcnXG4gIGZvciAoY29uc3Qga2V5IGluIHN0eWxlKSB7XG4gICAgaWYgKHN0eWxlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGNzc1RleHQgKz0ga2V5ICsgJzogJyArIHN0eWxlW2tleV0gKyAnOyAnXG4gICAgfVxuICB9XG5cbiAgZWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gY3NzVGV4dFxufVxuXG5mdW5jdGlvbiBhcHBlbmRGaXJzdENoaWxkKGVsZW1lbnQsIG5vZGUpIHtcbiAgaWYgKGVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgIGVsZW1lbnQuaW5zZXJ0QmVmb3JlKG5vZGUsIGVsZW1lbnQuZmlyc3RDaGlsZClcbiAgfSBlbHNlIHtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKG5vZGUpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQ2FudmFzKGFyZWEsIHJlY3RhZ2xlKSB7XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXG4gIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShhcmVhKS5wb3NpdGlvbiA9PT0gJ3N0YXRpYycpIHtcbiAgICBhcmVhLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJ1xuICB9XG5cbiAgY2FudmFzLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCByZWN0YWdsZS5zaXplLnggKyAncHgnKVxuICBjYW52YXMuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCByZWN0YWdsZS5zaXplLnkgKyAncHgnKVxuICBzZXRTdHlsZShjYW52YXMsIHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBsZWZ0OiByZWN0YWdsZS5wb3NpdGlvbi55ICsgJ3B4JyxcbiAgICB0b3A6IHJlY3RhZ2xlLnBvc2l0aW9uLnkgKyAncHgnLFxuICAgIHdpZHRoOiByZWN0YWdsZS5zaXplLnggKyAncHgnLFxuICAgIGhlaWdodDogcmVjdGFnbGUuc2l6ZS55ICsgJ3B4J1xuICB9KVxuICBhcHBlbmRGaXJzdENoaWxkKGFyZWEsIGNhbnZhcylcbiAgcmV0dXJuIGNhbnZhc1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0RGVmYXVsdFBhcmVudChlbGVtZW50KSB7XG4gIGxldCBwYXJlbnQgPSBlbGVtZW50LnBhcmVudE5vZGVcbiAgd2hpbGUgKHBhcmVudC5wYXJlbnROb2RlICYmIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHBhcmVudClbJ3Bvc2l0aW9uJ10gPT09ICdzdGF0aWMnKSB7XG4gICAgcGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGVcbiAgfVxuICByZXR1cm4gcGFyZW50XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByYW5nZShzdGFydCwgc3RvcCwgc3RlcCkge1xuICBjb25zdCByZXN1bHQgPSBbXVxuICBpZiAodHlwZW9mIHN0b3AgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgc3RvcCA9IHN0YXJ0XG4gICAgc3RhcnQgPSAwXG4gIH1cbiAgaWYgKHR5cGVvZiBzdGVwID09PSAndW5kZWZpbmVkJykge1xuICAgIHN0ZXAgPSAxXG4gIH1cbiAgaWYgKChzdGVwID4gMCAmJiBzdGFydCA+PSBzdG9wKSB8fCAoc3RlcCA8IDAgJiYgc3RhcnQgPD0gc3RvcCkpIHtcbiAgICByZXR1cm4gW11cbiAgfVxuICBmb3IgKGxldCBpID0gc3RhcnQ7IHN0ZXAgPiAwID8gaSA8IHN0b3AgOiBpID4gc3RvcDsgaSArPSBzdGVwKSB7XG4gICAgcmVzdWx0LnB1c2goaSlcbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG4iXSwic291cmNlUm9vdCI6IiJ9