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
/*! exports provided: Draggable, Point, Rectangle, Geometry, List, listFactory, targets, Target, scopes, defaultScope, Scope, scopeFactory, scope, positionType, sortingFactory, positionFactory, spiders, Spider, arcSliders, ArcSlider, charts, Chart, listSwitcherFactory, ListSwitcher, util */
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

/* harmony import */ var _target__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./target */ "./src/target.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "targets", function() { return _target__WEBPACK_IMPORTED_MODULE_4__["targets"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Target", function() { return _target__WEBPACK_IMPORTED_MODULE_4__["Target"]; });

/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scope */ "./src/scope.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scopes", function() { return _scope__WEBPACK_IMPORTED_MODULE_5__["scopes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultScope", function() { return _scope__WEBPACK_IMPORTED_MODULE_5__["defaultScope"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Scope", function() { return _scope__WEBPACK_IMPORTED_MODULE_5__["Scope"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scopeFactory", function() { return _scope__WEBPACK_IMPORTED_MODULE_5__["scopeFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scope", function() { return _scope__WEBPACK_IMPORTED_MODULE_5__["scope"]; });

/* harmony import */ var _positioning__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./positioning */ "./src/positioning.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "positionType", function() { return _positioning__WEBPACK_IMPORTED_MODULE_6__["positionType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sortingFactory", function() { return _positioning__WEBPACK_IMPORTED_MODULE_6__["sortingFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "positionFactory", function() { return _positioning__WEBPACK_IMPORTED_MODULE_6__["positionFactory"]; });

/* harmony import */ var _spider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./spider */ "./src/spider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "spiders", function() { return _spider__WEBPACK_IMPORTED_MODULE_7__["spiders"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Spider", function() { return _spider__WEBPACK_IMPORTED_MODULE_7__["Spider"]; });

/* harmony import */ var _arcslider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./arcslider */ "./src/arcslider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arcSliders", function() { return _arcslider__WEBPACK_IMPORTED_MODULE_8__["arcSliders"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArcSlider", function() { return _arcslider__WEBPACK_IMPORTED_MODULE_8__["ArcSlider"]; });

/* harmony import */ var _chart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./chart */ "./src/chart.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "charts", function() { return _chart__WEBPACK_IMPORTED_MODULE_9__["charts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Chart", function() { return _chart__WEBPACK_IMPORTED_MODULE_9__["Chart"]; });

/* harmony import */ var _listswitcher__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./listswitcher */ "./src/listswitcher.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "listSwitcherFactory", function() { return _listswitcher__WEBPACK_IMPORTED_MODULE_10__["listSwitcherFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListSwitcher", function() { return _listswitcher__WEBPACK_IMPORTED_MODULE_10__["ListSwitcher"]; });

/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./util */ "./src/util.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "util", function() { return _util__WEBPACK_IMPORTED_MODULE_11__["default"]; });















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
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/util.js");
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
      isDisplacement: false
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
      var excangeIndex = _geometry__WEBPACK_IMPORTED_MODULE_2__["Geometry"].indexOfNearPoint(fixPositions, draggable.position, this.options.radius, this.options.getDistance);

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
    key: "onEndDisplaycement",
    value: function onEndDisplaycement(draggable) {
      var sortedDraggables = this.getSortedDraggables();
      var fixPositions = sortedDraggables.map(function (draggable) {
        return draggable.fixPosition;
      });
      var currentIndex = sortedDraggables.indexOf(draggable);
      var targetIndex = _geometry__WEBPACK_IMPORTED_MODULE_2__["Geometry"].indexOfNearPoint(fixPositions, draggable.position, this.options.radius, this.options.getDistance);

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

        Object(_util__WEBPACK_IMPORTED_MODULE_0__["removeItem"])(_this3.draggables, draggable);
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
      var excangeIndex = _geometry__WEBPACK_IMPORTED_MODULE_0__["Geometry"].indexOfNearPoint(fixPositions, draggable.position, this.options.radius, this.options.getDistance);

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
      var isOn = _geometry__WEBPACK_IMPORTED_MODULE_0__["Geometry"].indexOfNearPoint(positions, position, -1, _geometry__WEBPACK_IMPORTED_MODULE_0__["Geometry"].getXDifference);

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
/*! exports provided: getDefaultParent, getTouchByID, range, hasClass, addClass, removeClass, removeItem, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultParent", function() { return getDefaultParent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTouchByID", function() { return getTouchByID; });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9EcmFnZWUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0RyYWdlZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9EcmFnZWUvLi9ub2RlX21vZHVsZXMvZGVzYW5kcm8tZ2V0LXN0eWxlLXByb3BlcnR5L2dldC1zdHlsZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvYXJjc2xpZGVyLmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy9ib3VuZC5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvY2hhcnQuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL2RyYWdnYWJsZS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvZXZlbnQuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL2V4cGFuZG5hdGl2ZS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvZ2VvbWV0cnkuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy9saXN0LmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy9saXN0c3dpdGNoZXIuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL3Bvc2l0aW9uaW5nLmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy9zY29wZS5qcyIsIndlYnBhY2s6Ly9EcmFnZWUvLi9zcmMvc3BpZGVyLmpzIiwid2VicGFjazovL0RyYWdlZS8uL3NyYy90YXJnZXQuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL3V0aWwuanMiLCJ3ZWJwYWNrOi8vRHJhZ2VlLy4vc3JjL3V0aWxzL2NyZWF0ZWNhbnZhcy5qcyJdLCJuYW1lcyI6WyJhcmNTbGlkZXJzIiwiQXJjU2xpZGVyIiwiYXJlYSIsImVsZW1lbnQiLCJvcHRpb25zIiwiYXJlYVJlY3RhbmdsZSIsIkdlb21ldHJ5IiwiY3JlYXRlUmVjdGFuZ2xlRnJvbUVsZW1lbnQiLCJoYWxmU2l6ZSIsImdldFNpemVPZkVsZW1lbnQiLCJtdWx0IiwiT2JqZWN0IiwiYXNzaWduIiwiY2VudGVyIiwiZ2V0Q2VudGVyIiwicmFkaXVzIiwiZ2V0TWluU2lkZSIsInN0YXJ0QW5nbGUiLCJNYXRoIiwiUEkiLCJlbmRBbmdsZSIsImFuZ2xlcyIsIm9uQ2hhbmdlIiwidGltZSIsInNoaWZ0ZWRDZW50ZXIiLCJzdWIiLCJwdXNoIiwiaW5pdCIsImFuZ2xlIiwicG9zaXRpb24iLCJnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0iLCJib3VuZCIsImJvdW5kVG9BcmMiLCJkcmFnZ2FibGUiLCJEcmFnZ2FibGUiLCJwYXJlbnQiLCJvbk1vdmUiLCJjaGFuZ2UiLCJnZXRBbmdsZSIsInVwZGF0ZUFuZ2xlIiwibm9ybWFsaXplQW5nbGUiLCJtb3ZlIiwiYm91bmRUb1JlY3RhbmdsZSIsInJlY3RhbmdsZSIsInBvaW50Iiwic2l6ZSIsImNhbGNQb2ludCIsImNsb25lIiwicmVjdFAyIiwiZ2V0UDMiLCJ4IiwieSIsImJvdW5kVG9FbGVtZW50IiwicmV0RnVuYyIsImFwcGx5IiwiYXJndW1lbnRzIiwicmVmcmVzaCIsImJvdW5kVG9MaW5lWCIsInN0YXJ0WSIsImVuZFkiLCJib3VuZFRvTGluZVkiLCJzdGFydFgiLCJlbmRYIiwiYm91bmRUb0xpbmUiLCJzdGFydCIsImVuZCIsImFscGhhIiwiYXRhbjIiLCJiZXRhIiwic29tZUsiLCJjb3NCZXRhIiwiY29zIiwic2luQmV0YSIsInNpbiIsInBvaW50MiIsIlBvaW50IiwibmV3RW5kIiwiZ2V0UG9pbnRJbkxpbmVCeUxlbmdodCIsInBvaW50Q3Jvc3NpbmciLCJkaXJlY3RDcm9zc2luZyIsImJvdW5kVG9DaXJjbGUiLCJfc2l6ZSIsImJvdW5kZWRQb2ludCIsInN0YXJ0QWdsZSIsImJvdW5kU3RhcnRBbmdsZSIsImJvdW5kRW5kdEFuZ2xlIiwiYm91bmRBbmdsZSIsImlzVG91Y2giLCJ3aW5kb3ciLCJjaGFydHMiLCJyYW5kb21Db2xvciIsInJuZCIsInJvdW5kIiwicmFuZG9tIiwidG9IZXhTdHJpbmciLCJkaWdpdCIsInN0ciIsInRvU3RyaW5nIiwibGVuZ3RoIiwiZ2V0QXJyYXlXaXRoQm91bmRJbmRleGVzIiwiaW5kZXgiLCJyZXRJbmRleGVzIiwiQ2hhcnQiLCJlbGVtZW50cyIsInRvdWNoUmFkaXVzIiwiZmlsbFN0eWxlcyIsInV0aWwiLCJyYW5nZSIsIm1hcCIsImluaXRBbmdsZXMiLCJ0b1JhZGlhbiIsImxpbWl0SW1nIiwibGltaXRJbWdPZmZzZXQiLCJpc1NlbGVjdGFibGUiLCJvbkRyYXciLCJjYW52YXMiLCJjcmVhdGVDYW52YXMiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImRyYWdnYWJsZXMiLCJpIiwiZ2V0Qm91bmRBbmdsZSIsImRyYXciLCJpc0luaXQiLCJpbml0U2VsZWN0Iiwic2V0QWN0aXZlQXJjIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50cyIsImUiLCJjaGFuZ2VkVG91Y2hlcyIsInBhZ2VYIiwiY2xpZW50WCIsInBhZ2VZIiwiY2xpZW50WSIsImNhbnZhc09mZnNldCIsImdldE9mZnNldCIsImdldEFyY09uUG9pbnQiLCJhY3RpdmVBcmNJbmRleCIsImdldFNpemUiLCJpc0Nsb3NzaW5nIiwic2lnbiIsInVwZGF0ZUFuZ2xlcyIsImNsZWFyUmVjdCIsImZvckVhY2giLCJfZHJhZ2dhYmxlIiwiZHJhd0FyYyIsImVuYWJsZUluZGV4ZXMiLCJpbmRleE9mIiwiZHJhd0xpbWl0SW1nIiwib3B0cyIsImNsb25lT2JqIiwiY2FsbCIsImNvbG9yIiwiZ2V0RmlsbFN0eWxlIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwiYXJjIiwibGluZVRvIiwiY2xvc2VQYXRoIiwiZmlsbFN0eWxlIiwiZmlsbCIsImltZyIsIkFycmF5IiwiaGVpZ2h0IiwiYWRkIiwidHJhbnNsYXRlIiwicm90YXRlIiwiZHJhd0ltYWdlIiwic2V0VHJhbnNmb3JtIiwic2xpY2UiLCJiYXNlQW5nbGUiLCJkaWZmQW5nbGUiLCJnZXRBbmdsZXNEaWZmIiwiZ2V0RGlzdGFuY2UiLCJvZmZzZXQiLCJqIiwiZW5hYmxlIiwiRHJhZ2VlIiwiRXZlbnQiLCJtb3VzZUV2ZW50cyIsInRvdWNoRXZlbnRzIiwidHJhbnNmb3JtUHJvcGVydHkiLCJnZXRTdHlsZVByb3BlcnR5IiwidHJhbnNpdGlvblByb3BlcnR5IiwicHJldmVudERvdWJsZUluaXQiLCJtZXNzYWdlIiwic29tZSIsImV4aXN0aW5nIiwiYWRkVG9EZWZhdWx0U2NvcGUiLCJkZWZhdWx0U2NvcGUiLCJhZGREcmFnZ2FibGUiLCJnZXREZWZhdWx0UGFyZW50IiwidGFyZ2V0cyIsInN0YXJ0RmlsdGVyIiwiaXNDb250ZW50Qm94U2l6ZSIsIm9uRW5kIiwiaXNSZXZlcnNlIiwiaXNTdG9wT25UcnVlIiwib25TdGFydCIsIm9uQ3JlYXRlIiwiZmlyZSIsIl9lbmFibGUiLCJmaXhQb3NpdGlvbiIsImluaXRQb3NpdGlvbiIsIl9kcmFnU3RhcnQiLCJkcmFnU3RhcnQiLCJiaW5kIiwiX2RyYWdNb3ZlIiwiZHJhZ01vdmUiLCJfZHJhZ0VuZCIsImRyYWdFbmQiLCJfcmVjYWx1bGF0ZSIsIl90cmFuc2Zvcm1Qb3NpdGlvbiIsInRyYW5zZm9ybSIsInN0eWxlIiwidHJhbnNsYXRlQ3NzIiwidWEiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJtc2llIiwidGVzdCIsInJlcGxhY2UiLCJpc0ZpeCIsImlzU2lsZW50IiwiZGV0ZXJtaW5lRGlyZWN0aW9uIiwiX3NldFRyYW5zbGF0ZSIsInNldFBvc2l0aW9uIiwiZ2V0UG9zaXRpb24iLCJsZWZ0RGlyZWN0aW9uIiwicmlnaHREaXJlY3Rpb24iLCJ1cERpcmVjdGlvbiIsImRvd25EaXJlY3Rpb24iLCJldmVudCIsImN1cnJlbnRFdmVudCIsImlzVG91Y2hFdmVudCIsIlRvdWNoRXZlbnQiLCJfc3RhcnRUb3VjaFBvaW50IiwiX3N0YXJ0UG9zaXRpb24iLCJfdG91Y2hJZCIsImlkZW50aWZpZXIiLCJzdG9wUHJvcGFnYXRpb24iLCJ0YXJnZXQiLCJIVE1MSW5wdXRFbGVtZW50IiwicHJldmVudERlZmF1bHQiLCJmb2N1cyIsImRvY3VtZW50IiwiaXNEcmFnZ2luZyIsImFkZENsYXNzIiwidG91Y2giLCJnZXRUb3VjaEJ5SUQiLCJ0b3VjaFBvaW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbW92ZUNsYXNzIiwiUmVjdGFuZ2xlIiwicmVzZXQiLCJmdW5jcyIsInByb3RvdHlwZSIsImFyZ3MiLCJmcyIsInJldmVyc2UiLCJyZXRWYWx1ZSIsImYiLCJ1bnNoaWZ0IiwicmVtb3ZlIiwic3BsaWNlIiwiX2YiLCJhdWdtZW50IiwicmVjZWl2aW5nQ2xhc3MiLCJnaXZpbmdDbGFzcyIsImxlbiIsIm1ldGhvZE5hbWUiLCJOb2RlTGlzdCIsInAiLCJrIiwicmVjdCIsIm1pbiIsIm1heCIsImluY2x1ZGVQb2ludCIsImF4aXMiLCJzZWxBeGlzIiwiY3Jvc3NSZWN0YW5nbGUiLCJhbmQiLCJ0aGlzQ2VudGVyIiwicmVjdENlbnRlciIsImVsIiwicXVlcnlTZWxlY3RvciIsImxlZnQiLCJ0b3AiLCJ3aWR0aCIsInAxIiwicDIiLCJkeCIsImR5Iiwic3FydCIsImRpc3RhbmNlIiwiZ2V0WERpZmZlcmVuY2UiLCJhYnMiLCJnZXRZRGlmZmVyZW5jZSIsInRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3RvcnkiLCJwb3ciLCJpbmRleE9mTmVhclBvaW50IiwiYXJyIiwidmFsIiwidGVtcCIsImJvdW5kUG9pbnQiLCJMMVAxIiwiTDFQMiIsIkwyUDEiLCJMMlAyIiwiazEiLCJrMiIsImIxIiwiYjIiLCJib3VuZFRvU2VnbWVudCIsIkxQMSIsIkxQMiIsIlAiLCJBIiwiQiIsIkFQIiwiQUIiLCJhYjIiLCJhcF9hYiIsInQiLCJnZXRQb2ludEluTGluZSIsInBlcmNlbnQiLCJsZW5naHQiLCJpc0NvbnNpZGVyVHJhbnNsYXRlIiwicGFyZW50Tm9kZSIsImdldFN1bVZhbHVlT2ZTdHlsZVJ1bGUiLCJydWxlcyIsInJlZHVjZSIsInN1bSIsInJ1bGUiLCJwYXJzZUludCIsImdldENvbXB1dGVkU3R5bGUiLCJlbFJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJwYXJlbnRSZWN0IiwiYWRkUG9pbnRUb0JvdW5kUG9pbnRzIiwiYm91bmRwb2ludHMiLCJpc1JpZ2h0IiwicmVzdWx0IiwiZmlsdGVyIiwiYlBvaW50IiwiZGlmZiIsInRvRGVncmVlIiwiZG1pbiIsImRtYXgiLCJnZXRBbmdsZURpZmYiLCJnZXROZWFyZXN0QW5nbGUiLCJ2YWx1ZSIsIm1pbkFuZ2xlIiwibWF4QW5nbGUiLCJsaXN0cyIsIkxpc3QiLCJ0aW1lRW5kIiwidGltZUV4Y2FuZ2UiLCJpc0Rpc3BsYWNlbWVudCIsImluaXREcmFnZ2FibGUiLCJtb3ZlSGFuZGxlciIsImxpc3QiLCJvbkVuZERpc3BsYXljZW1lbnQiLCJmaXhQb3NpdGlvbnMiLCJnZXRDdXJyZW50Rml4UG9zaXRpb24iLCJjdXJyZW50SW5kZXgiLCJleGNhbmdlSW5kZXgiLCJtb3ZlT3JTYXZlIiwic29ydGVkRHJhZ2dhYmxlcyIsImdldFNvcnRlZERyYWdnYWJsZXMiLCJ0YXJnZXRJbmRleCIsImluaXRQb3NpdGlvbnMiLCJjb21wYXJlIiwiY29uY2F0IiwicmVtb3ZlSXRlbSIsImRlc3Ryb3kiLCJwb3NpdGlvbnMiLCJsaXN0RmFjdG9yeSIsInBhcmVudEVsZW1lbnQiLCJkcmFnZ2FibGVPcHRpb25zIiwibGlzdE9wdGlvbnMiLCJMaXN0U3dpdGNoZXIiLCJzdGVwT24iLCJpc09uIiwiZ2V0Q3VycmVudEZpeFBvc2l0aW9uV2l0aE9mZiIsIm1vdmVEcmFnZ2FibGUiLCJmaXhUb09mZiIsIm1vdmVEcmFnZ2FibGVUb09mZiIsImZpeE9mZlBvc2l0aW9uIiwibGlzdFN3aXRjaGVyRmFjdG9yeSIsImRyYWdnYWJsZUVsZW1lbnRzIiwicG9zaXRpb25UeXBlIiwibm90Q3Jvc3NpbmciLCJmbG9hdExlZnQiLCJmbG9hdFJpZ2h0IiwicG9zaXRpb25GYWN0b3J5IiwidHlwZSIsIl9vcHRpb25zIiwicmVjdGFuZ2xlTGlzdCIsImluZGV4ZXNPZk5ld3MiLCJib3VuZFJlY3QiLCJzdGF0aWNSZWN0YW5nbGVJbmRleGVzIiwiaW5kZXhlcyIsIl9yZWN0IiwicmVtb3ZhYmxlIiwiaW5kZXhPZlN0YXRpYyIsInN0YXRpY1JlY3QiLCJtb3ZlVG9Cb3VuZCIsImdldFNxdWFyZSIsInBhZGRpbmdUb3BMZWZ0IiwicGFkZGluZ0JvdHRvbVJpZ2h0IiwieUdhcEJldHdlZW5EcmFnZ2FibGVzIiwiX2luZGV4ZXNPZk5ld3MiLCJnZXRQMiIsImJvdW5kYXJ5UG9pbnRzIiwiaXNWYWxpZCIsImFzc2luZyIsInBhZGRpbmdUb3BSaWdodCIsInBhZGRpbmdCb3R0b21MZWZ0IiwicGFkZGluZ1RvcE5lZ1JpZ2h0IiwicGFkZGluZ0JvdHRvbU5lZ0xlZnQiLCJnZXRSaWdodFRvcFBvaW50IiwiX2luZGV4IiwiZ2V0TGVmdEJvdHRvbVBvaW50IiwiZ2V0UDQiLCJzb3J0aW5nRmFjdG9yeSIsIm9sZE9ianNMaXN0IiwibmV3T2JqcyIsImluZGV4T2ZOZXdzIiwib2Jqc0xpc3QiLCJvYmoiLCJuZXdMaXN0IiwibGlzdE9sZFBvc2l0aW9uIiwibmV3T2JqIiwic2NvcGVzIiwiU2NvcGUiLCJzY29wZSIsInNob3RUYXJnZXRzIiwiY2F0Y2hEcmFnZ2FibGUiLCJzb3J0IiwiYSIsImIiLCJnZXRSZWN0YW5nbGUiLCJpbm5lckRyYWdnYWJsZXMiLCJ0YXJnZXRJbmRleGVzIiwiZm4iLCJjdXJyZW50U2NvcGUiLCJhZGREcmFnZ2FibGVUb1Njb3BlIiwiYWRkVGFyZ2V0VG9TY29wZSIsImFkZFRhcmdldCIsIlRhcmdldCIsInNjb3BlRmFjdG9yeSIsInRhcmdldEVsZW1lbnRzIiwidGFyZ2V0T3B0aW9ucyIsInNjb3BlT3B0aW9ucyIsInNwaWRlcnMiLCJTcGlkZXIiLCJkQW5nbGUiLCJzdGFydFJhZGl1cyIsImVuZFJhZGl1cyIsImxpbmVXaWR0aCIsInN0cm9rZVN0eWxlIiwic3Ryb2tlIiwic29ydGluZyIsInBvc2l0aW9uaW5nIiwib25BZGQiLCJiZWZvcmVBZGQiLCJvblJlbW92ZSIsInJlY3RhbmdsZXMiLCJpbmRleGVzT2ZOZXciLCJ0YXJnZXRSZWN0YW5nbGUiLCJkcmFnZ2FibGVTcXVhcmUiLCJuZXdEcmFnZ2FibGVzSW5kZXgiLCJhZGRSZW1vdmVPbk1vdmUiLCJwdXNoSW5uZXJEcmFnZ2FibGUiLCJyZW1vdmVIYW5kbGVyIiwidG91Y2hJZCIsInN0b3AiLCJzdGVwIiwiaGFzQ2xhc3MiLCJjIiwicmUiLCJSZWdFeHAiLCJjbGFzc05hbWUiLCJhcnJheSIsInNldFN0eWxlIiwiY3NzVGV4dCIsImtleSIsImhhc093blByb3BlcnR5IiwiYXBwZW5kRmlyc3RDaGlsZCIsIm5vZGUiLCJmaXJzdENoaWxkIiwiaW5zZXJ0QmVmb3JlIiwiYXBwZW5kQ2hpbGQiLCJyZWN0YWdsZSIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVy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RixRQUFRLENBQUNqYyxJQUFULENBQWNNLENBQWQsR0FBa0IsSUFBaEQ7QUFDQWtiLFVBQVEsQ0FBQ2xYLE1BQUQsRUFBUztBQUNmdEYsWUFBUSxFQUFFLFVBREs7QUFFZmlRLFFBQUksRUFBRWdOLFFBQVEsQ0FBQ2pkLFFBQVQsQ0FBa0JzQixDQUFsQixHQUFzQixJQUZiO0FBR2Y0TyxPQUFHLEVBQUUrTSxRQUFRLENBQUNqZCxRQUFULENBQWtCc0IsQ0FBbEIsR0FBc0IsSUFIWjtBQUlmNk8sU0FBSyxFQUFFOE0sUUFBUSxDQUFDamMsSUFBVCxDQUFjSyxDQUFkLEdBQWtCLElBSlY7QUFLZmlILFVBQU0sRUFBRTJVLFFBQVEsQ0FBQ2pjLElBQVQsQ0FBY00sQ0FBZCxHQUFrQjtBQUxYLEdBQVQsQ0FBUjtBQU9Bc2Isa0JBQWdCLENBQUN2ZSxJQUFELEVBQU9pSCxNQUFQLENBQWhCO0FBQ0EsU0FBT0EsTUFBUDtBQUNELEMiLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJEcmFnZWVcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiRHJhZ2VlXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkRyYWdlZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvKiFcbiAqIGdldFN0eWxlUHJvcGVydHkgdjEuMC40XG4gKiBvcmlnaW5hbCBieSBrYW5nYXhcbiAqIGh0dHA6Ly9wZXJmZWN0aW9ua2lsbHMuY29tL2ZlYXR1cmUtdGVzdGluZy1jc3MtcHJvcGVydGllcy9cbiAqIE1JVCBsaWNlbnNlXG4gKi9cblxuLypqc2hpbnQgYnJvd3NlcjogdHJ1ZSwgc3RyaWN0OiB0cnVlLCB1bmRlZjogdHJ1ZSAqL1xuLypnbG9iYWwgZGVmaW5lOiBmYWxzZSwgZXhwb3J0czogZmFsc2UsIG1vZHVsZTogZmFsc2UgKi9cblxuKCBmdW5jdGlvbiggd2luZG93ICkge1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBwcmVmaXhlcyA9ICdXZWJraXQgTW96IG1zIE1zIE8nLnNwbGl0KCcgJyk7XG52YXIgZG9jRWxlbVN0eWxlID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlO1xuXG5mdW5jdGlvbiBnZXRTdHlsZVByb3BlcnR5KCBwcm9wTmFtZSApIHtcbiAgaWYgKCAhcHJvcE5hbWUgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gdGVzdCBzdGFuZGFyZCBwcm9wZXJ0eSBmaXJzdFxuICBpZiAoIHR5cGVvZiBkb2NFbGVtU3R5bGVbIHByb3BOYW1lIF0gPT09ICdzdHJpbmcnICkge1xuICAgIHJldHVybiBwcm9wTmFtZTtcbiAgfVxuXG4gIC8vIGNhcGl0YWxpemVcbiAgcHJvcE5hbWUgPSBwcm9wTmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHByb3BOYW1lLnNsaWNlKDEpO1xuXG4gIC8vIHRlc3QgdmVuZG9yIHNwZWNpZmljIHByb3BlcnRpZXNcbiAgdmFyIHByZWZpeGVkO1xuICBmb3IgKCB2YXIgaT0wLCBsZW4gPSBwcmVmaXhlcy5sZW5ndGg7IGkgPCBsZW47IGkrKyApIHtcbiAgICBwcmVmaXhlZCA9IHByZWZpeGVzW2ldICsgcHJvcE5hbWU7XG4gICAgaWYgKCB0eXBlb2YgZG9jRWxlbVN0eWxlWyBwcmVmaXhlZCBdID09PSAnc3RyaW5nJyApIHtcbiAgICAgIHJldHVybiBwcmVmaXhlZDtcbiAgICB9XG4gIH1cbn1cblxuLy8gdHJhbnNwb3J0XG5pZiAoIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcbiAgLy8gQU1EXG4gIGRlZmluZSggZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGdldFN0eWxlUHJvcGVydHk7XG4gIH0pO1xufSBlbHNlIGlmICggdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICkge1xuICAvLyBDb21tb25KUyBmb3IgQ29tcG9uZW50XG4gIG1vZHVsZS5leHBvcnRzID0gZ2V0U3R5bGVQcm9wZXJ0eTtcbn0gZWxzZSB7XG4gIC8vIGJyb3dzZXIgZ2xvYmFsXG4gIHdpbmRvdy5nZXRTdHlsZVByb3BlcnR5ID0gZ2V0U3R5bGVQcm9wZXJ0eTtcbn1cblxufSkoIHdpbmRvdyApO1xuIiwiaW1wb3J0IHsgR2VvbWV0cnkgfSBmcm9tICcuL2dlb21ldHJ5J1xuaW1wb3J0IHsgRHJhZ2dhYmxlIH0gZnJvbSAnLi9kcmFnZ2FibGUnXG5pbXBvcnQgeyBib3VuZFRvQXJjIH0gZnJvbSAnLi9ib3VuZCdcblxuY29uc3QgYXJjU2xpZGVycyA9IFtdXG5cbmNsYXNzIEFyY1NsaWRlciB7XG4gIGNvbnN0cnVjdG9yKGFyZWEsIGVsZW1lbnQsIG9wdGlvbnM9e30pIHtcbiAgICBjb25zdCBhcmVhUmVjdGFuZ2xlID0gR2VvbWV0cnkuY3JlYXRlUmVjdGFuZ2xlRnJvbUVsZW1lbnQoYXJlYSwgYXJlYSlcbiAgICBjb25zdCBoYWxmU2l6ZSA9IEdlb21ldHJ5LmdldFNpemVPZkVsZW1lbnQoZWxlbWVudCkubXVsdCgwLjUpXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjZW50ZXI6IGFyZWFSZWN0YW5nbGUuZ2V0Q2VudGVyKCksXG4gICAgICByYWRpdXM6IGFyZWFSZWN0YW5nbGUuZ2V0TWluU2lkZSgpIC8gMixcbiAgICAgIHN0YXJ0QW5nbGU6IE1hdGguUEksXG4gICAgICBlbmRBbmdsZTogMCxcbiAgICAgIGFuZ2xlczogW01hdGguUEksIC1NYXRoLlBJIC8gNCwgMCwgTWF0aC5QSSAvIDQsIE1hdGguUEkgLyAyXSxcbiAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbigpIHt9LFxuICAgICAgdGltZTogNTAwXG4gICAgfSwgb3B0aW9ucylcblxuICAgIHRoaXMuc2hpZnRlZENlbnRlciA9IHRoaXMub3B0aW9ucy5jZW50ZXIuc3ViKGhhbGZTaXplKVxuICAgIHRoaXMub25DaGFuZ2UgPSB0aGlzLm9wdGlvbnMub25DaGFuZ2VcbiAgICBhcmNTbGlkZXJzLnB1c2godGhpcylcbiAgICB0aGlzLmFyZWEgPSBhcmVhXG4gICAgdGhpcy5pbml0KGVsZW1lbnQpXG4gIH1cblxuICBpbml0KGVsZW1lbnQpIHtcbiAgICBjb25zdCBhbmdsZSA9IHRoaXMub3B0aW9ucy5zdGFydEFuZ2xlXG4gICAgY29uc3QgcG9zaXRpb24gPSBHZW9tZXRyeS5nZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oXG4gICAgICBhbmdsZSxcbiAgICAgIHRoaXMub3B0aW9ucy5yYWRpdXMsXG4gICAgICB0aGlzLnNoaWZ0ZWRDZW50ZXJcbiAgICApXG4gICAgY29uc3QgYm91bmQgPSBib3VuZFRvQXJjKFxuICAgICAgdGhpcy5zaGlmdGVkQ2VudGVyLFxuICAgICAgdGhpcy5vcHRpb25zLnJhZGl1cyxcbiAgICAgIHRoaXMub3B0aW9ucy5zdGFydEFuZ2xlLFxuICAgICAgdGhpcy5vcHRpb25zLmVuZEFuZ2xlXG4gICAgKVxuXG4gICAgdGhpcy5hbmdsZSA9IGFuZ2xlXG4gICAgdGhpcy5kcmFnZ2FibGUgPSBuZXcgRHJhZ2dhYmxlKGVsZW1lbnQsIHtcbiAgICAgIHBhcmVudDogdGhpcy5hcmVhLFxuICAgICAgYm91bmQ6IGJvdW5kLFxuICAgICAgcG9zaXRpb246IHBvc2l0aW9uLFxuICAgICAgb25Nb3ZlOiAoKSA9PiB7XG4gICAgICAgIHRoaXMuY2hhbmdlKClcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgdXBkYXRlQW5nbGUoKSB7XG4gICAgdGhpcy5hbmdsZSA9IEdlb21ldHJ5LmdldEFuZ2xlKHRoaXMuc2hpZnRlZENlbnRlciwgdGhpcy5kcmFnZ2FibGUucG9zaXRpb24pXG4gIH1cblxuICBjaGFuZ2UoKSB7XG4gICAgdGhpcy51cGRhdGVBbmdsZSgpXG4gICAgLy8gICAgICB2YXIgYW5nbGUgPSBHZW9tZXRyeS5nZXROZWFyZXN0QW5nbGUodGhpcy5vcHRpb25zLmFuZ2xlcywgdGhpcy5hbmdsZSk7XG4gICAgLy8gICAgICB0aGlzLnNldEFuZ2xlKGFuZ2xlLHRoaXMub3B0aW9ucy50aW1lKTtcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMuYW5nbGUpXG4gIH1cblxuICBzZXRBbmdsZShhbmdsZSwgdGltZSkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gR2VvbWV0cnkuZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKFxuICAgICAgdGhpcy5hbmdsZSxcbiAgICAgIHRoaXMub3B0aW9ucy5yYWRpdXMsXG4gICAgICB0aGlzLnNoaWZ0ZWRDZW50ZXJcbiAgICApXG4gICAgdGhpcy5hbmdsZSA9IEdlb21ldHJ5Lm5vcm1hbGl6ZUFuZ2xlKGFuZ2xlLCBwb3NpdGlvbilcbiAgICB0aGlzLmRyYWdnYWJsZS5tb3ZlKHBvc2l0aW9uLCB0aW1lfHwwLCB0cnVlLCB0cnVlKVxuICAgIHRoaXMub25DaGFuZ2UodGhpcy5hbmdsZSlcbiAgfVxufVxuXG5leHBvcnQgeyBhcmNTbGlkZXJzLCBBcmNTbGlkZXIgfVxuIiwiaW1wb3J0IHsgR2VvbWV0cnksIFBvaW50IH0gZnJvbSAnLi9nZW9tZXRyeSdcblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kVG9SZWN0YW5nbGUocmVjdGFuZ2xlKSB7XG4gIHJldHVybiBmdW5jdGlvbihwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IGNhbGNQb2ludCA9IHBvaW50LmNsb25lKCksXG4gICAgICByZWN0UDIgPSByZWN0YW5nbGUuZ2V0UDMoKVxuXG4gICAgaWYgKHJlY3RhbmdsZS5wb3NpdGlvbi54ID4gY2FsY1BvaW50LngpIHtcbiAgICAgIChjYWxjUG9pbnQueCA9IHJlY3RhbmdsZS5wb3NpdGlvbi54KVxuICAgIH1cbiAgICBpZiAocmVjdGFuZ2xlLnBvc2l0aW9uLnkgPiBjYWxjUG9pbnQueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSByZWN0YW5nbGUucG9zaXRpb24ueVxuICAgIH1cbiAgICBpZiAocmVjdFAyLnggPCBjYWxjUG9pbnQueCArIHNpemUueCkge1xuICAgICAgY2FsY1BvaW50LnggPSByZWN0UDIueCAtIHNpemUueFxuICAgIH1cbiAgICBpZiAocmVjdFAyLnkgPCBjYWxjUG9pbnQueSArIHNpemUueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSByZWN0UDIueSAtIHNpemUueVxuICAgIH1cblxuICAgIHJldHVybiBjYWxjUG9pbnRcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRUb0VsZW1lbnQoZWxlbWVudCwgcGFyZW50KSB7XG4gIGNvbnN0IHJldEZ1bmMgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gYm91bmQuYXBwbHkodGhpcywgYXJndW1lbnRzKVxuICB9XG4gIGxldCBib3VuZFxuXG4gIHJldEZ1bmMucmVmcmVzaCA9IGZ1bmN0aW9uKCkge1xuICAgIGJvdW5kID0gYm91bmRUb1JlY3RhbmdsZShHZW9tZXRyeS5jcmVhdGVSZWN0YW5nbGVGcm9tRWxlbWVudChlbGVtZW50LCBwYXJlbnQpKVxuICB9XG5cbiAgcmV0RnVuYy5yZWZyZXNoKClcbiAgcmV0dXJuIHJldEZ1bmNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kVG9MaW5lWCh4LCBzdGFydFksIGVuZFkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgY2FsY1BvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIGNhbGNQb2ludC54ID0geFxuICAgIGlmIChzdGFydFkgPiBjYWxjUG9pbnQueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSBzdGFydFlcbiAgICB9XG4gICAgaWYgKGVuZFkgPCBjYWxjUG9pbnQueSArIHNpemUueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSBlbmRZIC0gc2l6ZS55XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhbGNQb2ludFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZFRvTGluZVkoeSwgc3RhcnRYLCBlbmRYKSB7XG4gIHJldHVybiBmdW5jdGlvbihwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IGNhbGNQb2ludCA9IHBvaW50LmNsb25lKClcbiAgICBjYWxjUG9pbnQueSA9IHlcbiAgICBpZiAoc3RhcnRYID4gY2FsY1BvaW50LngpIHtcbiAgICAgIGNhbGNQb2ludC54ID0gc3RhcnRYXG4gICAgfVxuICAgIGlmIChlbmRYIDwgY2FsY1BvaW50LnggKyBzaXplLngpIHtcbiAgICAgIGNhbGNQb2ludC54ID0gZW5kWCAtIHNpemUueFxuICAgIH1cbiAgICByZXR1cm4gY2FsY1BvaW50XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kVG9MaW5lKHN0YXJ0LCBlbmQpIHtcbiAgY29uc3QgYWxwaGEgPSBNYXRoLmF0YW4yKGVuZC55IC0gc3RhcnQueSwgZW5kLnggLSBzdGFydC54KSxcbiAgICBiZXRhID0gYWxwaGEgKyBNYXRoLlBJIC8gMixcbiAgICBzb21lSyA9IDEwLFxuICAgIGNvc0JldGEgPSBNYXRoLmNvcyhiZXRhKSxcbiAgICBzaW5CZXRhID0gTWF0aC5zaW4oYmV0YSlcblxuICByZXR1cm4gZnVuY3Rpb24ocG9pbnQsIHNpemUpIHtcbiAgICBjb25zdCBwb2ludDIgPSBuZXcgUG9pbnQocG9pbnQueCArIHNvbWVLICogY29zQmV0YSwgcG9pbnQueSArIHNvbWVLICogc2luQmV0YSksXG4gICAgICBuZXdFbmQgPSBHZW9tZXRyeS5nZXRQb2ludEluTGluZUJ5TGVuZ2h0KGVuZCwgc3RhcnQsIHNpemUueClcbiAgICBsZXQgcG9pbnRDcm9zc2luZyA9IEdlb21ldHJ5LmRpcmVjdENyb3NzaW5nKHN0YXJ0LCBlbmQsIHBvaW50LCBwb2ludDIpXG5cbiAgICBwb2ludENyb3NzaW5nID0gR2VvbWV0cnkuYm91bmRUb0xpbmUoc3RhcnQsIG5ld0VuZCwgcG9pbnRDcm9zc2luZylcbiAgICByZXR1cm4gcG9pbnRDcm9zc2luZ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZFRvQ2lyY2xlKGNlbnRlciwgcmFkaXVzKSB7XG4gIHJldHVybiBmdW5jdGlvbihwb2ludCwgX3NpemUpIHtcbiAgICBjb25zdCBib3VuZGVkUG9pbnQgPSBHZW9tZXRyeS5nZXRQb2ludEluTGluZUJ5TGVuZ2h0KGNlbnRlciwgcG9pbnQsIHJhZGl1cylcbiAgICByZXR1cm4gYm91bmRlZFBvaW50XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5kVG9BcmMoY2VudGVyLCByYWRpdXMsIHN0YXJ0QWdsZSwgZW5kQW5nbGUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHBvaW50LCBfc2l6ZSkge1xuICAgIGNvbnN0IGJvdW5kU3RhcnRBbmdsZSA9IHR5cGVvZiBzdGFydEFnbGUgPT09ICdmdW5jdGlvbicgPyBzdGFydEFnbGUoKSA6IHN0YXJ0QWdsZVxuICAgIGNvbnN0IGJvdW5kRW5kdEFuZ2xlID0gdHlwZW9mIHN0YXJ0QWdsZSA9PT0gJ2Z1bmN0aW9uJyA/IGVuZEFuZ2xlKCkgOiBlbmRBbmdsZVxuXG4gICAgbGV0IGFuZ2xlID0gR2VvbWV0cnkuZ2V0QW5nbGUoY2VudGVyLCBwb2ludClcbiAgICBhbmdsZSA9IEdlb21ldHJ5Lm5vcm1hbGl6ZUFuZ2xlKGFuZ2xlKVxuICAgIGFuZ2xlID0gR2VvbWV0cnkuYm91bmRBbmdsZShib3VuZFN0YXJ0QW5nbGUsIGJvdW5kRW5kdEFuZ2xlLCBhbmdsZSlcbiAgICByZXR1cm4gR2VvbWV0cnkuZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKGFuZ2xlLCByYWRpdXMsIGNlbnRlcilcbiAgfVxufVxuIiwiaW1wb3J0IGNyZWF0ZUNhbnZhcyBmcm9tICcuL3V0aWxzL2NyZWF0ZWNhbnZhcydcbmltcG9ydCB1dGlsIGZyb20gJy4vdXRpbCdcbmltcG9ydCB7IEdlb21ldHJ5LCBQb2ludCB9IGZyb20gJy4vZ2VvbWV0cnknXG5pbXBvcnQgeyBEcmFnZ2FibGUsIGV2ZW50cyB9IGZyb20gJy4vZHJhZ2dhYmxlJ1xuaW1wb3J0IHsgYm91bmRUb0FyYyB9IGZyb20gJy4vYm91bmQnXG5cbmNvbnN0IGlzVG91Y2ggPSAnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3dcbmNvbnN0IGNoYXJ0cyA9IFtdXG5cbmZ1bmN0aW9uIHJhbmRvbUNvbG9yKCkge1xuICBjb25zdCBybmQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKjI1NSlcbiAgfVxuICBjb25zdCB0b0hleFN0cmluZyA9IGZ1bmN0aW9uKGRpZ2l0KSB7XG4gICAgbGV0IHN0ciA9IGRpZ2l0LnRvU3RyaW5nKDE2KVxuICAgIHdoaWxlIChzdHIubGVuZ3RoIDwgMikge1xuICAgICAgc3RyID0gJzAnICsgc3RyXG4gICAgfVxuICAgIHJldHVybiBzdHJcbiAgfVxuXG4gIHJldHVybiAnIycgKyB0b0hleFN0cmluZyhybmQoKSkgKyB0b0hleFN0cmluZyhybmQoKSkgKyB0b0hleFN0cmluZyhybmQoKSlcbn1cblxuZnVuY3Rpb24gZ2V0QXJyYXlXaXRoQm91bmRJbmRleGVzKGluZGV4LCBsZW5ndGgpIHtcbiAgY29uc3QgcmV0SW5kZXhlcyA9IFtdXG4gIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICByZXRJbmRleGVzLnB1c2goaW5kZXgpXG4gICAgcmV0SW5kZXhlcy5wdXNoKChpbmRleCArIDEpICUgbGVuZ3RoKVxuICB9XG5cbiAgcmV0dXJuIHJldEluZGV4ZXNcbn1cblxuY2xhc3MgQ2hhcnQge1xuICBjb25zdHJ1Y3RvciAoYXJlYSwgZWxlbWVudHMsIG9wdGlvbnM9e30pIHtcbiAgICBjb25zdCBhcmVhUmVjdGFuZ2xlID0gR2VvbWV0cnkuY3JlYXRlUmVjdGFuZ2xlRnJvbUVsZW1lbnQoYXJlYSwgYXJlYSlcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNlbnRlcjogYXJlYVJlY3RhbmdsZS5nZXRDZW50ZXIoKSxcbiAgICAgIHJhZGl1czogYXJlYVJlY3RhbmdsZS5nZXRNaW5TaWRlKCkgLyAyLFxuICAgICAgdG91Y2hSYWRpdXM6IGFyZWFSZWN0YW5nbGUuZ2V0TWluU2lkZSgpIC8gMixcbiAgICAgIGJvdW5kQW5nbGU6IE1hdGguUEkgLyA5LFxuICAgICAgZmlsbFN0eWxlczogdXRpbC5yYW5nZSgwLCBlbGVtZW50cy5sZW5ndGgpLm1hcCgoKSA9PiByYW5kb21Db2xvcigpKSxcbiAgICAgIGluaXRBbmdsZXM6IHV0aWwucmFuZ2UoLTkwLCAyNzAsIDM2MCAvIGVsZW1lbnRzLmxlbmd0aCkubWFwKChhbmdsZSkgPT4ge1xuICAgICAgICByZXR1cm4gR2VvbWV0cnkudG9SYWRpYW4oYW5nbGUpXG4gICAgICB9KSxcbiAgICAgIGxpbWl0SW1nOiBudWxsLFxuICAgICAgbGltaXRJbWdPZmZzZXQ6IG5ldyBQb2ludCgwLCAwKSxcbiAgICAgIGlzU2VsZWN0YWJsZTogZmFsc2VcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgY2hhcnRzLnB1c2godGhpcylcbiAgICB0aGlzLm9uRHJhdyA9IHRoaXMub3B0aW9ucy5vbkRyYXcgfHwgZnVuY3Rpb24oKSB7fVxuICAgIHRoaXMuYXJlYSA9IGFyZWFcbiAgICB0aGlzLmFyZWFSZWN0YW5nbGUgPSBhcmVhUmVjdGFuZ2xlXG4gICAgdGhpcy5pbml0KGVsZW1lbnRzKVxuICB9XG5cbiAgaW5pdChlbGVtZW50cykge1xuICAgIHRoaXMuY2FudmFzID0gY3JlYXRlQ2FudmFzKHRoaXMuYXJlYSwgdGhpcy5hcmVhUmVjdGFuZ2xlKVxuICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJylcbiAgICB0aGlzLmRyYWdnYWJsZXMgPSBlbGVtZW50cy5tYXAoKGVsZW1lbnQsIGkpID0+IHtcbiAgICAgIGNvbnN0IGFuZ2xlID0gdGhpcy5vcHRpb25zLmluaXRBbmdsZXNbaV1cbiAgICAgIGNvbnN0IGhhbGZTaXplID0gR2VvbWV0cnkuZ2V0U2l6ZU9mRWxlbWVudChlbGVtZW50KS5tdWx0KDAuNSlcbiAgICAgIGNvbnN0IHBvc2l0aW9uID0gR2VvbWV0cnkuZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKFxuICAgICAgICBhbmdsZSxcbiAgICAgICAgdGhpcy5vcHRpb25zLnRvdWNoUmFkaXVzLFxuICAgICAgICB0aGlzLm9wdGlvbnMuY2VudGVyLnN1YihoYWxmU2l6ZSlcbiAgICAgIClcbiAgICAgIGNvbnN0IGJvdW5kID0gYm91bmRUb0FyYyhcbiAgICAgICAgdGhpcy5vcHRpb25zLmNlbnRlci5zdWIoaGFsZlNpemUpLFxuICAgICAgICB0aGlzLm9wdGlvbnMudG91Y2hSYWRpdXMsXG4gICAgICAgIHRoaXMuZ2V0Qm91bmRBbmdsZShpLCBmYWxzZSksXG4gICAgICAgIHRoaXMuZ2V0Qm91bmRBbmdsZShpLCB0cnVlKVxuICAgICAgKVxuXG4gICAgICByZXR1cm4gbmV3IERyYWdnYWJsZShlbGVtZW50LCB7XG4gICAgICAgIHBhcmVudDogdGhpcy5hcmVhLFxuICAgICAgICBib3VuZDogYm91bmQsXG4gICAgICAgIHBvc2l0aW9uOiBwb3NpdGlvbixcbiAgICAgICAgb25Nb3ZlOiAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5kcmF3KClcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG5cbiAgICB0aGlzLmlzSW5pdCA9IHRydWVcbiAgICBpZiAodGhpcy5vcHRpb25zLmlzU2VsZWN0YWJsZSkge1xuICAgICAgdGhpcy5pbml0U2VsZWN0KClcbiAgICB9XG4gICAgdGhpcy5kcmF3KClcbiAgfVxuXG4gIGluaXRTZWxlY3QoKSB7XG4gICAgdGhpcy5zZXRBY3RpdmVBcmMoLTEpXG5cbiAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50cy5zdGFydCwgKGUpID0+IHtcbiAgICAgIGxldCBwb2ludCA9IG5ldyBQb2ludChcbiAgICAgICAgaXNUb3VjaCA/IGUuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVggOiBlLmNsaWVudFgsXG4gICAgICAgIGlzVG91Y2ggPyBlLmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZIDogZS5jbGllbnRZXG4gICAgICApXG5cbiAgICAgIGlmICghdGhpcy5jYW52YXNPZmZzZXQpIHtcbiAgICAgICAgdGhpcy5jYW52YXNPZmZzZXQgPSBHZW9tZXRyeS5nZXRPZmZzZXQodGhpcy5jYW52YXMpXG4gICAgICB9XG5cbiAgICAgIHBvaW50ID0gcG9pbnQuc3ViKHRoaXMuY2FudmFzT2Zmc2V0KVxuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmdldEFyY09uUG9pbnQocG9pbnQpXG4gICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgIHRoaXMuc2V0QWN0aXZlQXJjKCh0aGlzLmFjdGl2ZUFyY0luZGV4ICE9PSBpbmRleCkgPyBpbmRleCA6IC0xKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICB1cGRhdGVBbmdsZXMoKSB7XG4gICAgdGhpcy5hbmdsZXMgPSB0aGlzLmRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGNvbnN0IGhhbGZTaXplID0gZHJhZ2dhYmxlLmdldFNpemUoKS5tdWx0KDAuNSlcbiAgICAgIHJldHVybiBHZW9tZXRyeS5nZXRBbmdsZSh0aGlzLm9wdGlvbnMuY2VudGVyLnN1YihoYWxmU2l6ZSksIGRyYWdnYWJsZS5wb3NpdGlvbilcbiAgICB9KVxuICB9XG5cbiAgZ2V0Qm91bmRBbmdsZShpbmRleCwgaXNDbG9zc2luZykge1xuICAgIGNvbnN0IHNpZ24gPSBpc0Nsb3NzaW5nID8gMSA6IC0xXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgbGV0IGkgPSAoaW5kZXggKyBzaWduKSAlIHRoaXMuYW5nbGVzLmxlbmd0aFxuICAgICAgaWYgKGkgPCAwKSB7XG4gICAgICAgIGkgKz0gdGhpcy5hbmdsZXMubGVuZ3RoXG4gICAgICB9XG4gICAgICByZXR1cm4gR2VvbWV0cnkubm9ybWFsaXplQW5nbGUodGhpcy5hbmdsZXNbaV0gLSBzaWduICogdGhpcy5vcHRpb25zLmJvdW5kQW5nbGUpXG4gICAgfVxuICB9XG5cbiAgZHJhdygpIHtcbiAgICBpZiAoIXRoaXMuaXNJbml0KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZUFuZ2xlcygpXG4gICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmFyZWFSZWN0YW5nbGUuc2l6ZS54LCB0aGlzLmFyZWFSZWN0YW5nbGUuc2l6ZS55KVxuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChfZHJhZ2dhYmxlLCBpbmRleCkgPT4ge1xuICAgICAgdGhpcy5kcmF3QXJjKHRoaXMuY29udGV4dCwgdGhpcy5vcHRpb25zLmNlbnRlciwgdGhpcy5vcHRpb25zLnJhZGl1cywgaW5kZXgpXG4gICAgfSlcblxuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChfZHJhZ2dhYmxlLCBpbmRleCkgPT4ge1xuICAgICAgbGV0IGVuYWJsZUluZGV4ZXNcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuaXNTZWxlY3RhYmxlKSB7XG4gICAgICAgIGVuYWJsZUluZGV4ZXMgPSBnZXRBcnJheVdpdGhCb3VuZEluZGV4ZXModGhpcy5hY3RpdmVBcmNJbmRleCwgdGhpcy5kcmFnZ2FibGVzLmxlbmd0aClcbiAgICAgICAgaWYgKGVuYWJsZUluZGV4ZXMuaW5kZXhPZihpbmRleCkgIT09IC0xKSB7XG4gICAgICAgICAgdGhpcy5kcmF3TGltaXRJbWcoaW5kZXgpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZHJhd0xpbWl0SW1nKGluZGV4KVxuICAgICAgfVxuICAgIH0pXG4gICAgdGhpcy5vbkRyYXcoKVxuICB9XG5cbiAgY3JlYXRlQ2xvbmUoZWxlbWVudCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgaWYgKCF0aGlzLmlzSW5pdCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IHJlY3RhbmdsZSA9IEdlb21ldHJ5LmNyZWF0ZVJlY3RhbmdsZUZyb21FbGVtZW50KGVsZW1lbnQsIGVsZW1lbnQpXG4gICAgY29uc3Qgb3B0cyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY2VudGVyOiByZWN0YW5nbGUuZ2V0Q2VudGVyKCksXG4gICAgICByYWRpdXM6IHJlY3RhbmdsZS5nZXRNaW5TaWRlKCkgLyAyLFxuICAgICAgZmlsbFN0eWxlczogdGhpcy5vcHRpb25zLmZpbGxTdHlsZXNcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgY29uc3QgY2FudmFzID0gY3JlYXRlQ2FudmFzKGVsZW1lbnQsIHJlY3RhbmdsZSlcbiAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJylcbiAgICBjb25zdCBjbG9uZU9iaiA9IHtcbiAgICAgIGRyYXc6ICgpID0+IHtcbiAgICAgICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgcmVjdGFuZ2xlLnNpemUueCwgcmVjdGFuZ2xlLnNpemUueSlcbiAgICAgICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKF9kcmFnZ2FibGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgdGhpcy5kcmF3QXJjKGNvbnRleHQsIG9wdHMuY2VudGVyLCBvcHRzLnJhZGl1cywgaW5kZXgpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICAgIGNsb25lT2JqLmRyYXcoKVxuICAgIHJldHVybiBjbG9uZU9ialxuICB9XG5cbiAgZ2V0RmlsbFN0eWxlKGluZGV4KSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuZmlsbFN0eWxlc1tpbmRleF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5maWxsU3R5bGVzW2luZGV4XSA9IHRoaXMub3B0aW9ucy5maWxsU3R5bGVzW2luZGV4XS5jYWxsKHRoaXMpXG4gICAgfVxuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZmlsbFN0eWxlc1tpbmRleF1cbiAgfVxuXG4gIGRyYXdBcmMoY29udGV4dCwgY2VudGVyLCByYWRpdXMsIGluZGV4KSB7XG4gICAgY29uc3Qgc3RhcnRBbmdsZSA9IHRoaXMuYW5nbGVzW2luZGV4XVxuICAgIGNvbnN0IGVuZEFuZ2xlID0gdGhpcy5hbmdsZXNbKGluZGV4KzEpICUgdGhpcy5hbmdsZXMubGVuZ3RoXVxuICAgIGNvbnN0IGNvbG9yID0gdGhpcy5nZXRGaWxsU3R5bGUoaW5kZXgpXG5cbiAgICBjb250ZXh0LmJlZ2luUGF0aCgpXG4gICAgY29udGV4dC5tb3ZlVG8oY2VudGVyLngsIGNlbnRlci55KVxuICAgIGNvbnRleHQuYXJjKGNlbnRlci54LCBjZW50ZXIueSwgcmFkaXVzLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSwgZmFsc2UpXG4gICAgY29udGV4dC5saW5lVG8oY2VudGVyLngsIGNlbnRlci55KVxuICAgIGNvbnRleHQuY2xvc2VQYXRoKClcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yXG4gICAgY29udGV4dC5maWxsKClcbiAgfVxuXG4gIGRyYXdMaW1pdEltZyhpbmRleCkge1xuICAgIGxldCBwb2ludCwgaW1nXG4gICAgaWYgKHRoaXMub3B0aW9ucy5saW1pdEltZykge1xuICAgICAgaW1nID0gdGhpcy5vcHRpb25zLmxpbWl0SW1nIGluc3RhbmNlb2YgQXJyYXkgPyB0aGlzLm9wdGlvbnMubGltaXRJbWdbaW5kZXhdIDogdGhpcy5vcHRpb25zLmxpbWl0SW1nXG4gICAgfVxuXG4gICAgaWYgKGltZykge1xuICAgICAgY29uc3QgYW5nbGUgPSBHZW9tZXRyeS5ub3JtYWxpemVBbmdsZSh0aGlzLmFuZ2xlc1tpbmRleF0pXG4gICAgICBwb2ludCA9IG5ldyBQb2ludCgwLCAtaW1nLmhlaWdodCAvIDIpXG4gICAgICBwb2ludCA9IHBvaW50LmFkZCh0aGlzLm9wdGlvbnMubGltaXRJbWdPZmZzZXQpXG4gICAgICB0aGlzLmNvbnRleHQudHJhbnNsYXRlKHRoaXMuYXJlYVJlY3RhbmdsZS5zaXplLnggLyAyLCB0aGlzLmFyZWFSZWN0YW5nbGUuc2l6ZS55IC8gMilcbiAgICAgIHRoaXMuY29udGV4dC5yb3RhdGUoYW5nbGUpXG4gICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKGltZywgcG9pbnQueCwgcG9pbnQueSlcbiAgICAgIHRoaXMuY29udGV4dC5zZXRUcmFuc2Zvcm0oMSwgMCwgMCwgMSwgMCwgMClcbiAgICB9XG4gIH1cblxuICBnZXRBbmdsZXNEaWZmKCkge1xuICAgIGNvbnN0IGFuZ2xlcyA9IHRoaXMuYW5nbGVzLnNsaWNlKDEpXG4gICAgbGV0IGJhc2VBbmdsZSA9IHRoaXMuYW5nbGVzWzBdXG5cbiAgICBhbmdsZXMucHVzaChiYXNlQW5nbGUpXG4gICAgcmV0dXJuIGFuZ2xlcy5tYXAoKGFuZ2xlKSA9PiB7XG4gICAgICBjb25zdCBkaWZmQW5nbGUgPSBHZW9tZXRyeS5ub3JtYWxpemVBbmdsZShhbmdsZSAtIGJhc2VBbmdsZSlcbiAgICAgIGJhc2VBbmdsZSA9IGFuZ2xlXG4gICAgICByZXR1cm4gZGlmZkFuZ2xlXG4gICAgfSlcbiAgfVxuXG4gIGdldFBlcmNlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0QW5nbGVzRGlmZigpLm1hcCgoZGlmZkFuZ2xlKSA9PiBkaWZmQW5nbGUgLyAoMiAqIE1hdGguUEkpKVxuICB9XG5cbiAgZ2V0QXJjQmlzZWN0cml4cygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRBbmdsZXNEaWZmKCkubWFwKChkaWZmQW5nbGUsIGkpID0+IHtcbiAgICAgIHJldHVybiBHZW9tZXRyeS5ub3JtYWxpemVBbmdsZSh0aGlzLmFuZ2xlc1tpXSArIGRpZmZBbmdsZSAvIDIpXG4gICAgfSlcbiAgfVxuXG4gIGdldEFyY09uUG9pbnQocG9pbnQpIHtcbiAgICBjb25zdCBhbmdsZSA9IEdlb21ldHJ5LmdldEFuZ2xlKHRoaXMub3B0aW9ucy5jZW50ZXIsIHBvaW50KVxuICAgIGNvbnN0IHJhZGl1cyA9IEdlb21ldHJ5LmdldERpc3RhbmNlKHRoaXMub3B0aW9ucy5jZW50ZXIsIHBvaW50KVxuXG4gICAgaWYgKHJhZGl1cyA+IHRoaXMub3B0aW9ucy5yYWRpdXMpIHtcbiAgICAgIHJldHVybiAtMVxuICAgIH1cblxuICAgIGxldCBvZmZzZXQgPSAtMSwgaSwgalxuICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLmFuZ2xlcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKG9mZnNldCA9PT0gLTEgfHwgdGhpcy5hbmdsZXNbb2Zmc2V0XSA+IHRoaXMuYW5nbGVzW2ldKSB7XG4gICAgICAgIG9mZnNldCA9IGlcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChpID0gMCwgaiA9IG9mZnNldDsgaSA8IHRoaXMuYW5nbGVzLmxlbmd0aDsgaSsrLCBqID0gKGkgKyBvZmZzZXQpICUgdGhpcy5hbmdsZXMubGVuZ3RoKSB7XG4gICAgICBpZiAoYW5nbGUgPCB0aGlzLmFuZ2xlc1tqXSkge1xuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoLS1qIDwgMCkge1xuICAgICAgaiArPSB0aGlzLmFuZ2xlcy5sZW5ndGhcbiAgICB9XG4gICAgcmV0dXJuIGpcbiAgfVxuXG4gIHNldEFuZ2xlcyhhbmdsZXMpIHtcbiAgICB0aGlzLmFuZ2xlcyA9IGFuZ2xlc1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUsIGkpID0+IHtcbiAgICAgIGNvbnN0IGFuZ2xlID0gdGhpcy5hbmdsZXNbaV1cbiAgICAgIGNvbnN0IGhhbGZTaXplID0gZHJhZ2dhYmxlLmdldFNpemUoKS5tdWx0KDAuNSlcbiAgICAgIGNvbnN0IHBvc2l0aW9uID0gR2VvbWV0cnkuZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKFxuICAgICAgICBhbmdsZSxcbiAgICAgICAgdGhpcy5vcHRpb25zLnRvdWNoUmFkaXVzLFxuICAgICAgICB0aGlzLm9wdGlvbnMuY2VudGVyLnN1YihoYWxmU2l6ZSlcbiAgICAgIClcblxuICAgICAgZHJhZ2dhYmxlLm1vdmUocG9zaXRpb24sIDAsIHRydWUsIHRydWUpXG4gICAgfSlcbiAgICB0aGlzLmRyYXcoKVxuICB9XG5cbiAgc2V0QWN0aXZlQXJjKGluZGV4KSB7XG4gICAgY29uc3QgZW5hYmxlSW5kZXhlcyA9IGdldEFycmF5V2l0aEJvdW5kSW5kZXhlcyhpbmRleCwgdGhpcy5kcmFnZ2FibGVzLmxlbmd0aClcbiAgICB0aGlzLmFjdGl2ZUFyY0luZGV4ID0gaW5kZXhcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlLCBpKSA9PiB7XG4gICAgICBkcmFnZ2FibGUuZW5hYmxlID0gZW5hYmxlSW5kZXhlcy5pbmRleE9mKGkpICE9PSAtMVxuICAgIH0pXG4gICAgdGhpcy5kcmF3KClcbiAgfVxufVxuXG5leHBvcnQgeyBjaGFydHMsIENoYXJ0IH1cbiIsIid1c2Ugc3RyaWN0J1xuXG5pbXBvcnQge1xuICBnZXREZWZhdWx0UGFyZW50LFxuICBnZXRUb3VjaEJ5SUQsXG4gIGFkZENsYXNzLCByZW1vdmVDbGFzc1xufSBmcm9tICcuL3V0aWwnXG5cbmltcG9ydCBFdmVudCBmcm9tICcuL2V2ZW50J1xuaW1wb3J0IGdldFN0eWxlUHJvcGVydHkgZnJvbSAnZGVzYW5kcm8tZ2V0LXN0eWxlLXByb3BlcnR5J1xuaW1wb3J0IHsgYm91bmRUb0VsZW1lbnQgfSBmcm9tICcuL2JvdW5kJ1xuaW1wb3J0IHsgR2VvbWV0cnksIFBvaW50LCBSZWN0YW5nbGUgfSBmcm9tICcuL2dlb21ldHJ5J1xuaW1wb3J0IHsgZGVmYXVsdFNjb3BlIH0gZnJvbSAnLi9zY29wZSdcblxuY29uc3QgRHJhZ2VlID0geyBFdmVudCB9IC8vdG9kbyByZW1vdmUgYWZ0ZXIgcmVmYWN0b3JlXG5cbmNvbnN0IGlzVG91Y2ggPSAnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3csIG1vdXNlRXZlbnRzID0ge1xuICAgIHN0YXJ0OiAnbW91c2Vkb3duJyxcbiAgICBtb3ZlOiAnbW91c2Vtb3ZlJyxcbiAgICBlbmQ6ICdtb3VzZXVwJ1xuICB9LCB0b3VjaEV2ZW50cyA9IHtcbiAgICBzdGFydDogJ3RvdWNoc3RhcnQnLFxuICAgIG1vdmU6ICd0b3VjaG1vdmUnLFxuICAgIGVuZDogJ3RvdWNoZW5kJ1xuICB9LFxuICBldmVudHMgPSBpc1RvdWNoID8gdG91Y2hFdmVudHMgOiBtb3VzZUV2ZW50cyxcbiAgZHJhZ2dhYmxlcyA9IFtdLFxuICB0cmFuc2Zvcm1Qcm9wZXJ0eSA9IGdldFN0eWxlUHJvcGVydHkoJ3RyYW5zZm9ybScpLFxuICB0cmFuc2l0aW9uUHJvcGVydHkgPSBnZXRTdHlsZVByb3BlcnR5KCd0cmFuc2l0aW9uJylcblxuZnVuY3Rpb24gcHJldmVudERvdWJsZUluaXQoZHJhZ2dhYmxlKSB7XG4gIGNvbnN0IG1lc3NhZ2UgPSBcImZvciB0aGlzIGVsZW1lbnQgRHJhZ2VlLkRyYWdnYWJsZSBpcyBhbHJlYWR5IGV4aXN0LCBkb24ndCBjcmVhdGUgaXQgdHdpY2UgXCJcbiAgaWYgKGRyYWdnYWJsZXMuc29tZSgoZXhpc3RpbmcpID0+IGRyYWdnYWJsZS5lbGVtZW50ID09PSBleGlzdGluZy5lbGVtZW50KSkge1xuICAgIHRocm93IG1lc3NhZ2VcbiAgfVxuICBkcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxufVxuXG5mdW5jdGlvbiBhZGRUb0RlZmF1bHRTY29wZShkcmFnZ2FibGUpIHtcbiAgZGVmYXVsdFNjb3BlLmFkZERyYWdnYWJsZShkcmFnZ2FibGUpXG59XG5cbmNsYXNzIERyYWdnYWJsZSB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIG9wdGlvbnM9e30pIHtcbiAgICBjb25zdCBwYXJlbnQgPSBvcHRpb25zLnBhcmVudCB8fCBnZXREZWZhdWx0UGFyZW50KGVsZW1lbnQpXG4gICAgdGhpcy50YXJnZXRzID0gW11cbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHBhcmVudDogcGFyZW50LFxuICAgICAgYm91bmQ6IGJvdW5kVG9FbGVtZW50KHBhcmVudCwgcGFyZW50KSxcbiAgICAgIHN0YXJ0RmlsdGVyOiBmYWxzZSxcbiAgICAgIGlzQ29udGVudEJveFNpemU6IGZhbHNlLFxuICAgICAgcG9zaXRpb246IGZhbHNlXG4gICAgfSwgb3B0aW9ucylcblxuICAgIHRoaXMub25FbmQgPSBuZXcgRHJhZ2VlLkV2ZW50KHRoaXMsIHsgaXNSZXZlcnNlOiB0cnVlLCBpc1N0b3BPblRydWU6IHRydWUgfSlcbiAgICB0aGlzLm9uTW92ZSA9IG5ldyBEcmFnZWUuRXZlbnQodGhpcylcbiAgICB0aGlzLm9uU3RhcnQgPSBuZXcgRHJhZ2VlLkV2ZW50KHRoaXMpXG5cbiAgICB0aGlzLm9uRW5kLmFkZCgoKSA9PiB0aGlzLm1vdmUodGhpcy5wb3NpdGlvbiwgMCwgdHJ1ZSwgdHJ1ZSkpXG5cbiAgICBpZiAob3B0aW9ucy5vbkVuZCkge1xuICAgICAgdGhpcy5vbkVuZC5hZGQob3B0aW9ucy5vbkVuZClcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMub25Nb3ZlKSB7XG4gICAgICB0aGlzLm9uTW92ZS5hZGQob3B0aW9ucy5vbk1vdmUpXG4gICAgfVxuICAgIGlmIChvcHRpb25zLm9uU3RhcnQpIHtcbiAgICAgIHRoaXMub25TdGFydC5hZGQob3B0aW9ucy5vblN0YXJ0KVxuICAgIH1cbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG4gICAgdGhpcy5ib3VuZCA9IHRoaXMub3B0aW9ucy5ib3VuZFxuICAgIHByZXZlbnREb3VibGVJbml0KHRoaXMpXG4gICAgRHJhZ2dhYmxlLm9uQ3JlYXRlLmZpcmUodGhpcylcbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLl9lbmFibGUgPSB0cnVlXG4gICAgdGhpcy5vZmZzZXQgPSBHZW9tZXRyeS5nZXRPZmZzZXQodGhpcy5lbGVtZW50LCB0aGlzLm9wdGlvbnMucGFyZW50LCB0cnVlKVxuICAgIHRoaXMuZml4UG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICAgIGlmICh0aGlzLm9wdGlvbnMucG9zaXRpb24pIHtcbiAgICAgIHRoaXMuaW5pdFBvc2l0aW9uID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uXG4gICAgICB0aGlzLm1vdmUodGhpcy5pbml0UG9zaXRpb24sIDAsIHRydWUsIHRydWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5pdFBvc2l0aW9uID0gdGhpcy5vZmZzZXRcbiAgICB9XG4gICAgdGhpcy5fZHJhZ1N0YXJ0ID0gdGhpcy5kcmFnU3RhcnQuYmluZCh0aGlzKVxuICAgIHRoaXMuX2RyYWdNb3ZlID0gdGhpcy5kcmFnTW92ZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5fZHJhZ0VuZCA9IHRoaXMuZHJhZ0VuZC5iaW5kKHRoaXMpXG5cbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0KVxuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQpXG5cbiAgICBpZiAodGhpcy5ib3VuZC5yZWZyZXNoKSB7XG4gICAgICB0aGlzLmJvdW5kLnJlZnJlc2goKVxuICAgIH1cbiAgfVxuXG4gIHJlaW5pdCgpIHtcbiAgICB0aGlzLm9mZnNldCA9IEdlb21ldHJ5LmdldE9mZnNldCh0aGlzLmVsZW1lbnQsIHRoaXMub3B0aW9ucy5wYXJlbnQsIHRydWUpXG4gICAgdGhpcy5maXhQb3NpdGlvbiA9IHRoaXMub2Zmc2V0XG4gICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMub2Zmc2V0XG4gICAgaWYgKHRoaXMub3B0aW9ucy5wb3NpdGlvbikge1xuICAgICAgdGhpcy5pbml0UG9zaXRpb24gPSB0aGlzLm9wdGlvbnMucG9zaXRpb25cbiAgICAgIHRoaXMubW92ZSh0aGlzLmluaXRQb3NpdGlvbiwgMCwgdHJ1ZSwgdHJ1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbml0UG9zaXRpb24gPSB0aGlzLm9mZnNldFxuICAgIH1cblxuICAgIGlmICh0aGlzLmJvdW5kLnJlZnJlc2gpIHtcbiAgICAgIHRoaXMuYm91bmQucmVmcmVzaCgpXG4gICAgfVxuICB9XG5cbiAgZ2V0U2l6ZShfcmVjYWx1bGF0ZSkge1xuICAgIHJldHVybiBHZW9tZXRyeS5nZXRTaXplT2ZFbGVtZW50KHRoaXMuZWxlbWVudCwgdGhpcy5vcHRpb25zLmlzQ29udGVudEJveFNpemUpXG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5vZmZzZXQuYWRkKHRoaXMuX3RyYW5zZm9ybVBvc2l0aW9uIHx8IG5ldyBQb2ludCgwLCAwKSlcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvblxuICB9XG5cbiAgZ2V0Q2VudGVyKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLmdldFNpemUoKS5tdWx0KDAuNSkpXG4gIH1cblxuICBfc2V0VHJhbnNsYXRlKHBvaW50KSB7XG4gICAgdGhpcy5fdHJhbnNmb3JtUG9zaXRpb24gPSBwb2ludFxuXG4gICAgbGV0IHRyYW5zZm9ybSA9IHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wZXJ0eV1cbiAgICBsZXQgdHJhbnNsYXRlQ3NzID0gJyB0cmFuc2xhdGUzZCgnICsgcG9pbnQueCArICdweCwnICsgcG9pbnQueSArICdweCwgMHB4KSdcblxuICAgIGNvbnN0IHVhID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnRcbiAgICBjb25zdCBtc2llID0gdWEuaW5kZXhPZignTVNJRSAnKVxuXG4gICAgaWYgKG1zaWUpIHtcbiAgICAgIHRyYW5zbGF0ZUNzcyA9ICcgdHJhbnNsYXRlKCcgKyBwb2ludC54ICsgJ3B4LCcgKyBwb2ludC55ICsgJ3B4KSdcbiAgICAgIGlmICghL3RyYW5zbGF0ZVxcKFteKV0rXFwpLy50ZXN0KHRyYW5zZm9ybSkpIHtcbiAgICAgICAgdHJhbnNmb3JtICs9IHRyYW5zbGF0ZUNzc1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJhbnNmb3JtID0gdHJhbnNmb3JtLnJlcGxhY2UoL3RyYW5zbGF0ZVxcKFteKV0rXFwpLywgdHJhbnNsYXRlQ3NzKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIS90cmFuc2xhdGUzZFxcKFteKV0rXFwpLy50ZXN0KHRyYW5zZm9ybSkpIHtcbiAgICAgICAgdHJhbnNmb3JtICs9IHRyYW5zbGF0ZUNzc1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJhbnNmb3JtID0gdHJhbnNmb3JtLnJlcGxhY2UoL3RyYW5zbGF0ZTNkXFwoW14pXStcXCkvLCB0cmFuc2xhdGVDc3MpXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BlcnR5XSA9IHRyYW5zZm9ybVxuICB9XG5cbiAgbW92ZShwb2ludCwgdGltZT0wLCBpc0ZpeD1mYWxzZSwgaXNTaWxlbnQ9ZmFsc2UpIHtcbiAgICBwb2ludCA9IHBvaW50LmNsb25lKClcbiAgICBpZiAoaXNGaXgpIHtcbiAgICAgIHRoaXMuZml4UG9zaXRpb24gPSBwb2ludFxuICAgIH1cblxuICAgIHRoaXMuZGV0ZXJtaW5lRGlyZWN0aW9uKHBvaW50KVxuXG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvaW50XG5cbiAgICBpZiAodHJhbnNpdGlvblByb3BlcnR5KSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNpdGlvblByb3BlcnR5XSA9IHRpbWUgKyAnbXMnXG4gICAgfVxuXG4gICAgdGhpcy5fc2V0VHJhbnNsYXRlKHBvaW50LnN1Yih0aGlzLm9mZnNldCkpXG4gICAgaWYgKCFpc1NpbGVudCkge1xuICAgICAgdGhpcy5vbk1vdmUuZmlyZSgpXG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaFBvc2l0aW9uICgpIHtcbiAgICB0aGlzLnNldFBvc2l0aW9uKHRoaXMuZ2V0UG9zaXRpb24oKSlcbiAgfVxuXG4gIHNldFBvc2l0aW9uKHBvaW50KSB7XG4gICAgcG9pbnQgPSBwb2ludC5jbG9uZSgpXG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvaW50XG5cbiAgICBpZiAodHJhbnNpdGlvblByb3BlcnR5KSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNpdGlvblByb3BlcnR5XSA9ICcwbXMnXG4gICAgfVxuXG4gICAgdGhpcy5fc2V0VHJhbnNsYXRlKHBvaW50LnN1Yih0aGlzLm9mZnNldCkpXG4gIH1cblxuICBzZXRaZXJvVHJhbnNpdGlvbigpIHtcbiAgICBpZiAodHJhbnNpdGlvblByb3BlcnR5KSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNpdGlvblByb3BlcnR5XSA9ICcwbXMnXG4gICAgfVxuICB9XG5cbiAgZGV0ZXJtaW5lRGlyZWN0aW9uKHBvaW50KSB7XG4gICAgdGhpcy5sZWZ0RGlyZWN0aW9uID0gKHRoaXMucG9zaXRpb24ueCA8IHBvaW50LngpXG4gICAgdGhpcy5yaWdodERpcmVjdGlvbiA9ICh0aGlzLnBvc2l0aW9uLnggPiBwb2ludC54KVxuICAgIHRoaXMudXBEaXJlY3Rpb24gPSAodGhpcy5wb3NpdGlvbi55ID4gcG9pbnQueSlcbiAgICB0aGlzLmRvd25EaXJlY3Rpb24gPSAodGhpcy5wb3NpdGlvbi55IDwgcG9pbnQueSlcbiAgfVxuXG4gIGRyYWdTdGFydChldmVudCkge1xuICAgIHRoaXMuY3VycmVudEV2ZW50ID0gZXZlbnRcbiAgICBpZiAoIXRoaXMuX2VuYWJsZSB8fCAodGhpcy5vcHRpb25zLnN0YXJ0RmlsdGVyICYmICF0aGlzLm9wdGlvbnMuc3RhcnRGaWx0ZXIoZXZlbnQpKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaXNUb3VjaEV2ZW50ID0gKGlzVG91Y2ggJiYgKGV2ZW50IGluc3RhbmNlb2Ygd2luZG93LlRvdWNoRXZlbnQpKVxuXG4gICAgdGhpcy5fc3RhcnRUb3VjaFBvaW50ID0gbmV3IFBvaW50KGlzVG91Y2hFdmVudCA/IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYIDogZXZlbnQuY2xpZW50WCwgaXNUb3VjaEV2ZW50ID8gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVkgOiBldmVudC5jbGllbnRZKVxuXG4gICAgdGhpcy5fc3RhcnRQb3NpdGlvbiA9IHRoaXMuZ2V0UG9zaXRpb24oKVxuICAgIGlmIChpc1RvdWNoRXZlbnQpIHtcbiAgICAgIHRoaXMuX3RvdWNoSWQgPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5pZGVudGlmaWVyXG4gICAgfVxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgaWYgKCEoZXZlbnQudGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJbnB1dEVsZW1lbnQgfHxcbiAgICAgICAgICBldmVudC50YXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElucHV0RWxlbWVudCkpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB9IGVsc2Uge1xuICAgICAgZXZlbnQudGFyZ2V0LmZvY3VzKClcbiAgICB9XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcblxuICAgIHRoaXMuaXNEcmFnZ2luZyA9IHRydWVcblxuICAgIHRoaXMub25TdGFydC5maXJlKGV2ZW50KVxuICAgIGFkZENsYXNzKHRoaXMuZWxlbWVudCwgJ2FjdGl2ZScpXG4gICAgdGhpcy5vbk1vdmUuZmlyZShldmVudClcbiAgfVxuXG4gIGRyYWdNb3ZlKGV2ZW50KSB7XG4gICAgdGhpcy5jdXJyZW50RXZlbnQgPSBldmVudFxuICAgIGxldCB0b3VjaFxuXG4gICAgY29uc3QgaXNUb3VjaEV2ZW50ID0gKGlzVG91Y2ggJiYgKGV2ZW50IGluc3RhbmNlb2Ygd2luZG93LlRvdWNoRXZlbnQpKVxuICAgIGlmIChpc1RvdWNoRXZlbnQpIHtcbiAgICAgIHRvdWNoID0gZ2V0VG91Y2hCeUlEKGV2ZW50LCB0aGlzLl90b3VjaElkKVxuXG4gICAgICBpZiAoIXRvdWNoKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IHRvdWNoUG9pbnQgPSBuZXcgUG9pbnQoaXNUb3VjaEV2ZW50ID8gdG91Y2gucGFnZVggOiBldmVudC5jbGllbnRYLCBpc1RvdWNoRXZlbnQgPyB0b3VjaC5wYWdlWSA6IGV2ZW50LmNsaWVudFkpXG4gICAgbGV0IHBvaW50ID0gdGhpcy5fc3RhcnRQb3NpdGlvbi5hZGQodG91Y2hQb2ludC5zdWIodGhpcy5fc3RhcnRUb3VjaFBvaW50KSlcbiAgICBwb2ludCA9IHRoaXMuYm91bmQocG9pbnQsIHRoaXMuZ2V0U2l6ZSgpKVxuICAgIHRoaXMudG91Y2hQb2ludCA9IHRvdWNoUG9pbnRcbiAgICB0aGlzLm1vdmUocG9pbnQsIDApXG4gIH1cblxuICBkcmFnRW5kKGV2ZW50KSB7XG4gICAgY29uc3QgaXNUb3VjaEV2ZW50ID0gKGlzVG91Y2ggJiYgKGV2ZW50IGluc3RhbmNlb2Ygd2luZG93LlRvdWNoRXZlbnQpKVxuXG4gICAgaWYgKGlzVG91Y2hFdmVudCAmJiAhZ2V0VG91Y2hCeUlEKGV2ZW50LCB0aGlzLl90b3VjaElkKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhpcy5vbkVuZC5maXJlKGV2ZW50KVxuXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCB0aGlzLl9kcmFnTW92ZSlcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG5cbiAgICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZVxuICAgIHJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudCwgJ2FjdGl2ZScpXG4gIH1cblxuICBnZXRSZWN0YW5nbGUoKSB7XG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUodGhpcy5wb3NpdGlvbiwgdGhpcy5nZXRTaXplKCkpXG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIHRoaXMuZ2V0U2l6ZSh0cnVlKVxuICAgIGlmICh0aGlzLmJvdW5kLnJlZnJlc2gpIHtcbiAgICAgIHRoaXMuYm91bmQucmVmcmVzaCgpXG4gICAgfVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0KVxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQpXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kKVxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcblxuICAgIHRoaXMub25FbmQucmVzZXQoKVxuICAgIHRoaXMub25Nb3ZlLnJlc2V0KClcbiAgfVxuXG4gIGdldCBlbmFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZVxuICB9XG5cbiAgc2V0IGVuYWJsZShlbmFibGUpIHtcbiAgICBpZiAoZW5hYmxlKSB7XG4gICAgICByZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnQsICdkaXNhYmxlJylcbiAgICB9IGVsc2Uge1xuICAgICAgYWRkQ2xhc3ModGhpcy5lbGVtZW50LCAnZGlzYWJsZScpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZSA9IGVuYWJsZVxuICB9XG59XG5cbkRyYWdnYWJsZS5vbkNyZWF0ZSA9IG5ldyBEcmFnZWUuRXZlbnQoRHJhZ2dhYmxlLCB7IGlzUmV2ZXJzZTogdHJ1ZSwgaXNTdG9wT25UcnVlOiB0cnVlIH0pXG5EcmFnZ2FibGUub25DcmVhdGUuYWRkKGFkZFRvRGVmYXVsdFNjb3BlKVxuXG5leHBvcnQgeyBEcmFnZ2FibGUsIGRyYWdnYWJsZXMsIGV2ZW50cyB9XG4iLCIndXNlIHN0cmljdCdcblxuZnVuY3Rpb24gRXZlbnQoY29udGV4dCwgb3B0aW9ucyA9IHt9KSB7XG4gIHRoaXMuZnVuY3MgPSBbXVxuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0XG4gIHRoaXMuaXNSZXZlcnNlID0gb3B0aW9ucy5pc1JldmVyc2UgfHwgZmFsc2VcbiAgdGhpcy5pc1N0b3BPblRydWUgPSBvcHRpb25zLmlzU3RvcE9uVHJ1ZSB8fCBmYWxzZVxufVxuXG5FdmVudC5wcm90b3R5cGUuZmlyZSA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpXG4gIGNvbnN0IGZzID0gdGhpcy5pc1JldmVyc2UgPyB0aGlzLmZ1bmNzLnNsaWNlKCkucmV2ZXJzZSgpIDogdGhpcy5mdW5jc1xuICBsZXQgcmV0VmFsdWVcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGZzLmxlbmd0aDsgaSsrKSB7XG4gICAgcmV0VmFsdWUgPSBmc1tpXS5hcHBseSh0aGlzLmNvbnRleHQsIGFyZ3MpXG4gICAgaWYgKHRoaXMuaXNTdG9wT25UcnVlICYmIHJldFZhbHVlKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgfVxuICByZXR1cm4gIXRoaXMuaXNTdG9wT25UcnVlXG59XG5cbkV2ZW50LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbihmKSB7XG4gIHRoaXMuZnVuY3MucHVzaChmKVxufVxuXG5FdmVudC5wcm90b3R5cGUudW5zaGlmdCA9IGZ1bmN0aW9uKGYpIHtcbiAgdGhpcy5mdW5jcy51bnNoaWZ0KGYpXG59XG5cbkV2ZW50LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbihmKSB7XG4gIGNvbnN0IGluZGV4ID0gdGhpcy5mdW5jcy5pbmRleE9mKGYpXG4gIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICB0aGlzLmZ1bmNzLnNwbGljZShpbmRleCwgMSlcbiAgfVxufVxuXG5FdmVudC5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbihfZikge1xuICB0aGlzLmZ1bmNzID0gW11cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRcbiIsIi8qKioqKioqKioqKioqKioqKioqKioqKiAwMFAgKioqKioqKioqKioqKioqKioqKioqKioqKi9cbmNvbnN0IGF1Z21lbnQgPSBmdW5jdGlvbihyZWNlaXZpbmdDbGFzcywgZ2l2aW5nQ2xhc3MpIHtcbiAgICAvKiBvbmx5IHByb3ZpZGUgY2VydGFpbiBtZXRob2RzICovXG4gIGlmIChhcmd1bWVudHNbMl0pIHtcbiAgICBmb3IgKGxldCBpPTIsIGxlbj1hcmd1bWVudHMubGVuZ3RoOyBpPGxlbjsgaSsrKSB7XG4gICAgICByZWNlaXZpbmdDbGFzcy5wcm90b3R5cGVbYXJndW1lbnRzW2ldXSA9IGdpdmluZ0NsYXNzLnByb3RvdHlwZVthcmd1bWVudHNbaV1dXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZvciAoY29uc3QgbWV0aG9kTmFtZSBpbiBnaXZpbmdDbGFzcy5wcm90b3R5cGUpIHtcbiAgICAgIC8qIGNoZWNrIHRvIG1ha2Ugc3VyZSB0aGUgcmVjZWl2aW5nIGNsYXNzIGRvZXNuJ3RcbiAgICAgICAgIGhhdmUgYSBtZXRob2Qgb2YgdGhlIHNhbWUgbmFtZSBhcyB0aGUgb25lIGN1cnJlbnRseVxuICAgICAgICAgYmVpbmcgcHJvY2Vzc2VkICovXG4gICAgICBpZiAoIXJlY2VpdmluZ0NsYXNzLnByb3RvdHlwZVttZXRob2ROYW1lXSkge1xuICAgICAgICByZWNlaXZpbmdDbGFzcy5wcm90b3R5cGVbbWV0aG9kTmFtZV0gPSBnaXZpbmdDbGFzcy5wcm90b3R5cGVbbWV0aG9kTmFtZV1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbmF1Z21lbnQoTm9kZUxpc3QsIEFycmF5LCAnZm9yRWFjaCcpXG4iLCJjbGFzcyBQb2ludCB7XG4gIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICB0aGlzLnggPSB4XG4gICAgdGhpcy55ID0geVxuICB9XG5cbiAgYWRkKHApIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCArIHAueCwgdGhpcy55ICsgcC55KVxuICB9XG5cbiAgc3ViKHApIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCAtIHAueCwgdGhpcy55IC0gcC55KVxuICB9XG5cbiAgbXVsdChrKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnggKiBrLCB0aGlzLnkgKiBrKVxuICB9XG5cbiAgbmVnYXRpdmUoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCgtdGhpcy54LCAtdGhpcy55KVxuICB9XG5cbiAgY29tcGFyZShwKSB7XG4gICAgcmV0dXJuICh0aGlzLnggPT09IHAueCAmJiB0aGlzLnkgPT09IHAueSlcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54LCB0aGlzLnkpXG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gYHt4PSR7dGhpcy54fSx5PSR7dGhpcy55fWBcbiAgfVxufVxuXG5jbGFzcyBSZWN0YW5nbGUge1xuICBjb25zdHJ1Y3Rvcihwb3NpdGlvbiwgc2l6ZSkge1xuICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvblxuICAgIHRoaXMuc2l6ZSA9IHNpemVcbiAgfVxuXG4gIGdldFAxKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uXG4gIH1cblxuICBnZXRQMigpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54LCB0aGlzLnBvc2l0aW9uLnkpXG4gIH1cblxuICBnZXRQMygpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi5hZGQodGhpcy5zaXplKVxuICB9XG5cbiAgZ2V0UDQoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55KVxuICB9XG5cbiAgZ2V0Q2VudGVyKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLnNpemUubXVsdCgwLjUpKVxuICB9XG5cbiAgb3IocmVjdCkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gbmV3IFBvaW50KE1hdGgubWluKHRoaXMucG9zaXRpb24ueCwgcmVjdC5wb3NpdGlvbi54KSwgTWF0aC5taW4odGhpcy5wb3NpdGlvbi55LCByZWN0LnBvc2l0aW9uLnkpKVxuICAgIGNvbnN0IHNpemUgPSAobmV3IFBvaW50KE1hdGgubWF4KHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54LCByZWN0LnBvc2l0aW9uLnggKyByZWN0LnNpemUueCksIE1hdGgubWF4KHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55LCByZWN0LnBvc2l0aW9uLnkgKyByZWN0LnNpemUueSkpKS5zdWIocG9zaXRpb24pXG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUocG9zaXRpb24sIHNpemUpXG4gIH1cblxuICBhbmQocmVjdCkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gbmV3IFBvaW50KE1hdGgubWF4KHRoaXMucG9zaXRpb24ueCwgcmVjdC5wb3NpdGlvbi54KSwgTWF0aC5tYXgodGhpcy5wb3NpdGlvbi55LCByZWN0LnBvc2l0aW9uLnkpKVxuICAgIGNvbnN0IHNpemUgPSAobmV3IFBvaW50KE1hdGgubWluKHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54LCByZWN0LnBvc2l0aW9uLnggKyByZWN0LnNpemUueCksIE1hdGgubWluKHRoaXMucG9zaXRpb24ueSArIHRoaXMuc2l6ZS55LCByZWN0LnBvc2l0aW9uLnkgKyByZWN0LnNpemUueSkpKS5zdWIocG9zaXRpb24pXG4gICAgaWYgKHNpemUueCA8PSAwIHx8IHNpemUueSA8PSAwKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZShwb3NpdGlvbiwgc2l6ZSlcbiAgfVxuXG4gIGluY2x1ZGVQb2ludChwKSB7XG4gICAgcmV0dXJuICEodGhpcy5wb3NpdGlvbi54ID4gcC54IHx8IHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54IDwgcC54IHx8IHRoaXMucG9zaXRpb24ueSA+IHAueSB8fCB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSA8IHAueSlcbiAgfVxuXG4gIGluY2x1ZGVSZWN0YW5nbGUocmVjdGFuZ2xlKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5jbHVkZVBvaW50KHJlY3RhbmdsZS5wb3NpdGlvbikgJiYgdGhpcy5pbmNsdWRlUG9pbnQocmVjdGFuZ2xlLmdldFAzKCkpXG4gIH1cblxuICBtb3ZlVG9Cb3VuZChyZWN0LCBheGlzKSB7XG4gICAgbGV0IHNlbEF4aXMsIGNyb3NzUmVjdGFuZ2xlXG4gICAgaWYgKGF4aXMpIHtcbiAgICAgIHNlbEF4aXMgPSBheGlzXG4gICAgfSBlbHNlIHtcbiAgICAgIGNyb3NzUmVjdGFuZ2xlID0gdGhpcy5hbmQocmVjdClcbiAgICAgIGlmICghY3Jvc3NSZWN0YW5nbGUpIHtcbiAgICAgICAgcmV0dXJuIHJlY3RcbiAgICAgIH1cbiAgICAgIHNlbEF4aXMgPSBjcm9zc1JlY3RhbmdsZS5zaXplLnggPiBjcm9zc1JlY3RhbmdsZS5zaXplLnkgPyAneScgOiAneCdcbiAgICB9XG4gICAgY29uc3QgdGhpc0NlbnRlciA9IHRoaXMuZ2V0Q2VudGVyKClcbiAgICBjb25zdCByZWN0Q2VudGVyID0gcmVjdC5nZXRDZW50ZXIoKVxuICAgIGNvbnN0IHNpZ24gPSB0aGlzQ2VudGVyW3NlbEF4aXNdID4gcmVjdENlbnRlcltzZWxBeGlzXSA/IC0xIDogMVxuICAgIGNvbnN0IG9mZnNldCA9IHNpZ24gPiAwID8gdGhpcy5wb3NpdGlvbltzZWxBeGlzXSArIHRoaXMuc2l6ZVtzZWxBeGlzXSAtIHJlY3QucG9zaXRpb25bc2VsQXhpc10gOiB0aGlzLnBvc2l0aW9uW3NlbEF4aXNdIC0gKHJlY3QucG9zaXRpb25bc2VsQXhpc10gKyByZWN0LnNpemVbc2VsQXhpc10pXG4gICAgcmVjdC5wb3NpdGlvbltzZWxBeGlzXSA9IHJlY3QucG9zaXRpb25bc2VsQXhpc10gKyBvZmZzZXRcbiAgICByZXR1cm4gcmVjdFxuICB9XG5cbiAgZ2V0U3F1YXJlKCkge1xuICAgIHJldHVybiB0aGlzLnNpemUueCAqIHRoaXMuc2l6ZS55XG4gIH1cblxuICBzdHlsZUFwcGx5KGVsKSB7XG4gICAgZWwgPSBlbCB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbmQnKVxuICAgIGVsLnN0eWxlLmxlZnQgPSB0aGlzLnBvc2l0aW9uLnggKyAncHgnXG4gICAgZWwuc3R5bGUudG9wID0gdGhpcy5wb3NpdGlvbi55ICsgJ3B4J1xuICAgIGVsLnN0eWxlLndpZHRoID0gdGhpcy5zaXplLnggKyAncHgnXG4gICAgZWwuc3R5bGUuaGVpZ2h0ID0gdGhpcy5zaXplLnkgKyAncHgnXG4gIH1cblxuICBncm93dGgoc2l6ZSkge1xuICAgIHRoaXMuc2l6ZSA9IHRoaXMuc2l6ZS5hZGQoc2l6ZSlcbiAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbi5hZGQoc2l6ZS5tdWx0KC0wLjUpKVxuICB9XG5cbiAgZ2V0TWluU2lkZSgpIHtcbiAgICByZXR1cm4gTWF0aC5taW4odGhpcy5zaXplLngsIHRoaXMuc2l6ZS55KVxuICB9XG59XG5cbi8qKioqKioqKioqKioqKioqKi9cbmNvbnN0IEdlb21ldHJ5ID0ge1xuICBnZXREaXN0YW5jZShwMSwgcDIpIHtcbiAgICBjb25zdCBkeCA9IHAxLnggLSBwMi54LCBkeSA9IHAxLnkgLSBwMi55XG4gICAgcmV0dXJuIE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSlcbiAgfSxcbiAgZGlzdGFuY2UocDEsIHAyKSB7XG4gICAgcmV0dXJuIEdlb21ldHJ5LmdldERpc3RhbmNlKHAxLCBwMilcbiAgfSxcbiAgZ2V0WERpZmZlcmVuY2UocDEsIHAyKSB7XG4gICAgcmV0dXJuIE1hdGguYWJzKHAxLnggLSBwMi54KVxuICB9LFxuICBnZXRZRGlmZmVyZW5jZShwMSwgcDIpIHtcbiAgICByZXR1cm4gTWF0aC5hYnMocDEueSAtIHAyLnkpXG4gIH0sXG4gIHRyYW5zZm9ybWVkU3BhY2VEaXN0YW5jZUZhY3Rvcnkob3B0aW9ucykge1xuICAgIHJldHVybiAocDEsIHAyKSA9PiB7XG4gICAgICByZXR1cm4gTWF0aC5zcXJ0KFxuICAgICAgICBNYXRoLnBvdyhvcHRpb25zLnggKiBNYXRoLmFicyhwMS54IC0gcDIueCksIDIpICtcbiAgICAgICAgTWF0aC5wb3cob3B0aW9ucy55ICogTWF0aC5hYnMocDEueSAtIHAyLnkpLCAyKVxuICAgICAgKVxuICAgIH1cbiAgfSxcbiAgaW5kZXhPZk5lYXJQb2ludChhcnIsIHZhbCwgcmFkaXVzLCBnZXREaXN0YW5jZSkge1xuICAgIGxldCBzaXplLCBpbmRleCA9IDAsIGksIHRlbXBcbiAgICBnZXREaXN0YW5jZSA9IGdldERpc3RhbmNlIHx8IEdlb21ldHJ5LmdldERpc3RhbmNlXG4gICAgaWYgKGFyci5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiAtMVxuICAgIH1cbiAgICBzaXplID0gZ2V0RGlzdGFuY2UoYXJyWzBdLCB2YWwpXG4gICAgZm9yIChpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgdGVtcCA9IGdldERpc3RhbmNlKGFycltpXSwgdmFsKVxuICAgICAgaWYgKHRlbXAgPCBzaXplKSB7XG4gICAgICAgIHNpemUgPSB0ZW1wXG4gICAgICAgIGluZGV4ID0gaVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAocmFkaXVzID49IDAgJiYgc2l6ZSA+IHJhZGl1cykge1xuICAgICAgcmV0dXJuIC0xXG4gICAgfVxuICAgIHJldHVybiBpbmRleFxuICB9LFxuICBib3VuZChtaW4sIG1heCwgdmFsKSB7XG4gICAgcmV0dXJuIE1hdGgubWF4KG1pbiwgTWF0aC5taW4obWF4LCB2YWwpKVxuICB9LFxuICBib3VuZFBvaW50KG1pbiwgbWF4LCB2YWwpIHtcbiAgICBjb25zdCB4ID0gTWF0aC5tYXgobWluLngsIE1hdGgubWluKG1heC54LCB2YWwueCkpXG4gICAgY29uc3QgeSA9IE1hdGgubWF4KG1pbi55LCBNYXRoLm1pbihtYXgueSwgdmFsLnkpKVxuICAgIHJldHVybiBuZXcgUG9pbnQoeCwgeSlcbiAgfSxcbiAgICAvL1JldHVybiBjcm9zc2luZyBwb2ludCBvZiB0d28gbGluZXNcbiAgZGlyZWN0Q3Jvc3NpbmcoTDFQMSwgTDFQMiwgTDJQMSwgTDJQMikge1xuICAgIGxldCB0ZW1wLCBrMSwgazIsIGIxLCBiMiwgeCwgeVxuICAgIGlmIChMMlAxLnggPT09IEwyUDIueCkge1xuICAgICAgdGVtcCA9IEwyUDFcbiAgICAgIEwyUDEgPSBMMVAxXG4gICAgICBMMVAxID0gdGVtcFxuICAgICAgdGVtcCA9IEwyUDJcbiAgICAgIEwyUDIgPSBMMVAyXG4gICAgICBMMVAyID0gdGVtcFxuICAgIH1cbiAgICBpZiAoTDFQMS54ID09PSBMMVAyLngpIHtcbiAgICAgIGsyID0gKEwyUDIueSAtIEwyUDEueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgICAgYjIgPSAoTDJQMi54ICogTDJQMS55IC0gTDJQMS54ICogTDJQMi55KSAvIChMMlAyLnggLSBMMlAxLngpXG4gICAgICB4ID0gTDFQMS54XG4gICAgICB5ID0geCAqIGsyICsgYjJcbiAgICAgIHJldHVybiBuZXcgUG9pbnQoeCwgeSlcbiAgICB9IGVsc2Uge1xuICAgICAgazEgPSAoTDFQMi55IC0gTDFQMS55KSAvIChMMVAyLnggLSBMMVAxLngpXG4gICAgICBiMSA9IChMMVAyLnggKiBMMVAxLnkgLSBMMVAxLnggKiBMMVAyLnkpIC8gKEwxUDIueCAtIEwxUDEueClcbiAgICAgIGsyID0gKEwyUDIueSAtIEwyUDEueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgICAgYjIgPSAoTDJQMi54ICogTDJQMS55IC0gTDJQMS54ICogTDJQMi55KSAvIChMMlAyLnggLSBMMlAxLngpXG4gICAgICB4ID0gKGIxIC0gYjIpIC8gKGsyIC0gazEpXG4gICAgICB5ID0geCAqIGsxICsgYjFcbiAgICAgIHJldHVybiBuZXcgUG9pbnQoeCwgeSlcbiAgICB9XG4gIH0sXG4gIGJvdW5kVG9TZWdtZW50KExQMSwgTFAyLCBQKSB7XG4gICAgbGV0IHgsIHlcbiAgICB4ID0gR2VvbWV0cnkuYm91bmQoTWF0aC5taW4oTFAxLngsIExQMi54KSwgTWF0aC5tYXgoTFAxLngsIExQMi54KSwgUC54KVxuICAgIGlmICh4ICE9PSBQLngpIHtcbiAgICAgIHkgPSAoeCA9PT0gTFAxLngpID8gTFAxLnkgOiBMUDIueVxuICAgICAgUCA9IG5ldyBQb2ludCh4LCB5KVxuICAgIH1cblxuICAgIHkgPSBHZW9tZXRyeS5ib3VuZChNYXRoLm1pbihMUDEueSwgTFAyLnkpLCBNYXRoLm1heChMUDEueSwgTFAyLnkpLCBQLnkpXG4gICAgaWYgKHkgIT09IFAueSkge1xuICAgICAgeCA9ICh5ID09PSBMUDEueSkgPyBMUDEueCA6IExQMi54XG4gICAgICBQID0gbmV3IFBvaW50KHgsIHkpXG4gICAgfVxuXG4gICAgcmV0dXJuIFBcbiAgfSxcbiAgYm91bmRUb0xpbmUoQSwgQiwgUCkge1xuICAgIGNvbnN0IEFQID0gbmV3IFBvaW50KFAueCAtIEEueCwgUC55IC0gQS55KSxcbiAgICAgIEFCID0gbmV3IFBvaW50KEIueCAtIEEueCwgQi55IC0gQS55KSxcbiAgICAgIGFiMiA9IEFCLnggKiBBQi54ICsgQUIueSAqIEFCLnksXG4gICAgICBhcF9hYiA9IEFQLnggKiBBQi54ICsgQVAueSAqIEFCLnksXG4gICAgICB0ID0gYXBfYWIgLyBhYjJcbiAgICByZXR1cm4gbmV3IFBvaW50KEEueCArIEFCLnggKiB0LCBBLnkgKyBBQi55ICogdClcbiAgfSxcbiAgZ2V0UG9pbnRJbkxpbmUoTFAxLCBMUDIsIHBlcmNlbnQpIHtcbiAgICBjb25zdCBkeCA9IExQMi54IC0gTFAxLngsIGR5ID0gTFAyLnkgLSBMUDEueVxuICAgIHJldHVybiBuZXcgUG9pbnQoTFAxLnggKyBwZXJjZW50ICogZHgsIExQMS55ICsgcGVyY2VudCAqIGR5KVxuICB9LFxuICBnZXRQb2ludEluTGluZUJ5TGVuZ2h0KExQMSwgTFAyLCBsZW5naHQpIHtcbiAgICBjb25zdCBkeCA9IExQMi54IC0gTFAxLngsIGR5ID0gTFAyLnkgLSBMUDEueSwgcGVyY2VudCA9IGxlbmdodCAvIEdlb21ldHJ5LmRpc3RhbmNlKExQMSwgTFAyKVxuICAgIHJldHVybiBuZXcgUG9pbnQoTFAxLnggKyBwZXJjZW50ICogZHgsIExQMS55ICsgcGVyY2VudCAqIGR5KVxuICB9LFxuICBjcmVhdGVSZWN0YW5nbGVGcm9tRWxlbWVudChlbCwgcGFyZW50LCBpc0NvbnRlbnRCb3hTaXplLCBpc0NvbnNpZGVyVHJhbnNsYXRlKSB7XG4gICAgY29uc3Qgc2l6ZSA9IHRoaXMuZ2V0U2l6ZU9mRWxlbWVudChlbCwgaXNDb250ZW50Qm94U2l6ZSlcbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZSh0aGlzLmdldE9mZnNldChlbCwgcGFyZW50IHx8IGVsLnBhcmVudE5vZGUsIGlzQ29uc2lkZXJUcmFuc2xhdGUpLCBzaXplKVxuICB9LFxuICBnZXRTdW1WYWx1ZU9mU3R5bGVSdWxlKGVsZW1lbnQsIHJ1bGVzKSB7XG4gICAgcmV0dXJuIHJ1bGVzLnJlZHVjZSgoc3VtLCBydWxlKSA9PiB7XG4gICAgICByZXR1cm4gc3VtICsgcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudClbcnVsZV18fDApXG4gICAgfSwgMClcbiAgfSxcbiAgZ2V0U2l6ZU9mRWxlbWVudChlbCwgaXNDb250ZW50Qm94U2l6ZSkge1xuICAgIGxldCB3aWR0aCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKVsnd2lkdGgnXSksIGhlaWdodCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKVsnaGVpZ2h0J10pXG4gICAgaWYgKCFpc0NvbnRlbnRCb3hTaXplKSB7XG4gICAgICB3aWR0aCArPSB0aGlzLmdldFN1bVZhbHVlT2ZTdHlsZVJ1bGUoZWwsIFsncGFkZGluZy1sZWZ0JywgJ3BhZGRpbmctcmlnaHQnLCAnYm9yZGVyLWxlZnQtd2lkdGgnLCAnYm9yZGVyLXJpZ2h0LXdpZHRoJ10pXG4gICAgICBoZWlnaHQgKz0gdGhpcy5nZXRTdW1WYWx1ZU9mU3R5bGVSdWxlKGVsLCBbJ3BhZGRpbmctdG9wJywgJ3BhZGRpbmctYm90dG9tJywgJ2JvcmRlci10b3Atd2lkdGgnLCAnYm9yZGVyLWJvdHRvbS13aWR0aCddKVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFBvaW50KHdpZHRoLCBoZWlnaHQpXG4gIH0sXG4gIGdldE9mZnNldChlbCwgcGFyZW50KSB7XG4gICAgY29uc3QgZWxSZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksIHBhcmVudFJlY3QgPSBwYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICByZXR1cm4gbmV3IFBvaW50KGVsUmVjdC5sZWZ0IC0gcGFyZW50UmVjdC5sZWZ0LCBlbFJlY3QudG9wIC0gcGFyZW50UmVjdC50b3ApXG4gIH0sXG4gIGdldFBvaW50RnJvbVJhZGlhbFN5c3RlbShhbmdsZSwgbGVuZ3RoLCBjZW50ZXIpIHtcbiAgICBjZW50ZXIgPSBjZW50ZXIgfHwgbmV3IFBvaW50KDAsIDApXG4gICAgcmV0dXJuIGNlbnRlci5hZGQobmV3IFBvaW50KGxlbmd0aCAqIE1hdGguY29zKGFuZ2xlKSwgbGVuZ3RoICogTWF0aC5zaW4oYW5nbGUpKSlcbiAgfSxcbiAgYWRkUG9pbnRUb0JvdW5kUG9pbnRzKGJvdW5kcG9pbnRzLCBwb2ludCwgaXNSaWdodCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGJvdW5kcG9pbnRzLmZpbHRlcihmdW5jdGlvbihiUG9pbnQpIHtcbiAgICAgIHJldHVybiAgYlBvaW50LnkgPiBwb2ludC55IHx8IChpc1JpZ2h0ID8gYlBvaW50LnggPCBwb2ludC54IDogYlBvaW50LnggPiBwb2ludC54KVxuICAgIH0pXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHBvaW50LnkgPCByZXN1bHRbaV0ueSkge1xuICAgICAgICByZXN1bHQuc3BsaWNlKGksIDAsIHBvaW50KVxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC5wdXNoKHBvaW50KVxuICAgIHJldHVybiByZXN1bHRcbiAgfSxcbiAgZ2V0QW5nbGUocDEsIHAyKSB7XG4gICAgY29uc3QgZGlmZiA9IHAyLnN1YihwMSlcbiAgICByZXR1cm4gdGhpcy5ub3JtYWxpemVBbmdsZShNYXRoLmF0YW4yKGRpZmYueSwgZGlmZi54KSlcbiAgfSxcbiAgdG9SYWRpYW4oYW5nbGUpIHtcbiAgICByZXR1cm4gKChhbmdsZSAlIDM2MCkgKiBNYXRoLlBJIC8gMTgwKVxuICB9LFxuICB0b0RlZ3JlZShhbmdsZSkge1xuICAgIHJldHVybiAoYW5nbGUgKiAxODAgLyBNYXRoLlBJKSAlIDM2MFxuICB9LFxuICBib3VuZEFuZ2xlKG1pbiwgbWF4LCB2YWwpIHtcbiAgICBsZXQgZG1pbiwgZG1heFxuICAgIGlmIChtaW4gPCBtYXggJiYgdmFsID4gbWluICYmIHZhbCA8IG1heCkge1xuICAgICAgcmV0dXJuIHZhbFxuICAgIH0gZWxzZSBpZiAobWF4IDwgbWluICYmICh2YWwgPCBtYXggfHwgdmFsID4gbWluKSkge1xuICAgICAgcmV0dXJuIHZhbFxuICAgIH0gZWxzZSB7XG4gICAgICBkbWluID0gdGhpcy5nZXRBbmdsZURpZmYobWluLCB2YWwpXG4gICAgICBkbWF4ID0gdGhpcy5nZXRBbmdsZURpZmYobWF4LCB2YWwpXG4gICAgICBpZiAoZG1pbiA8IGRtYXgpIHtcbiAgICAgICAgcmV0dXJuIG1pblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG1heFxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgZ2V0TmVhcmVzdEFuZ2xlKGFyciwgYW5nbGUpIHtcbiAgICBsZXQgaSwgdGVtcCwgZGlmZiA9IE1hdGguUEkgKiAyLCB2YWx1ZVxuICAgIGZvciAoaSA9IDA7IGkgPCBhcnIubGVuZ3RoO2krKykge1xuICAgICAgdGVtcCA9IEdlb21ldHJ5LmdldEFuZ2xlRGlmZihhcnJbaV0sIGFuZ2xlKVxuICAgICAgaWYgKGRpZmYgPCB0ZW1wKSB7XG4gICAgICAgIGRpZmYgPSB0ZW1wXG4gICAgICAgIHZhbHVlID0gYXJyW2ldXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZVxuICB9LFxuICBnZXRBbmdsZURpZmYoYWxwaGEsIGJldGEpIHtcbiAgICBjb25zdCBtaW5BbmdsZSA9IE1hdGgubWluKGFscGhhLCBiZXRhKSxcbiAgICAgIG1heEFuZ2xlID0gIE1hdGgubWF4KGFscGhhLCBiZXRhKVxuICAgIHJldHVybiBNYXRoLm1pbihtYXhBbmdsZSAtIG1pbkFuZ2xlLCBtaW5BbmdsZSArIE1hdGguUEkqMiAtIG1heEFuZ2xlKVxuICB9LFxuICBub3JtYWxpemVBbmdsZSh2YWwpIHtcbiAgICB3aGlsZSAodmFsIDwgMCkge1xuICAgICAgdmFsICs9IDIgKiBNYXRoLlBJXG4gICAgfVxuICAgIHdoaWxlICh2YWwgPiAyICogTWF0aC5QSSkge1xuICAgICAgdmFsIC09IDIgKiBNYXRoLlBJXG4gICAgfVxuICAgIHJldHVybiB2YWxcbiAgfVxufVxuXG5leHBvcnQgeyBQb2ludCwgUmVjdGFuZ2xlLCBHZW9tZXRyeSB9XG4iLCJpbXBvcnQgJy4vZXhwYW5kbmF0aXZlJ1xuaW1wb3J0IHsgUG9pbnQsIFJlY3RhbmdsZSwgR2VvbWV0cnkgfSBmcm9tICcuL2dlb21ldHJ5J1xuaW1wb3J0IHsgRHJhZ2dhYmxlIH0gZnJvbSAnLi9kcmFnZ2FibGUnXG5pbXBvcnQgeyBMaXN0LCBsaXN0RmFjdG9yeSB9IGZyb20gJy4vbGlzdCdcbmltcG9ydCB7IHRhcmdldHMsIFRhcmdldCB9IGZyb20gJy4vdGFyZ2V0J1xuaW1wb3J0IHsgc2NvcGVzLCBkZWZhdWx0U2NvcGUsIFNjb3BlLCBzY29wZUZhY3RvcnksIHNjb3BlIH0gZnJvbSAnLi9zY29wZSdcbmltcG9ydCB7IHBvc2l0aW9uVHlwZSwgc29ydGluZ0ZhY3RvcnksIHBvc2l0aW9uRmFjdG9yeSAgfSBmcm9tICcuL3Bvc2l0aW9uaW5nJ1xuaW1wb3J0IHsgc3BpZGVycywgU3BpZGVyIH0gZnJvbSAnLi9zcGlkZXInXG5pbXBvcnQgeyBhcmNTbGlkZXJzLCBBcmNTbGlkZXIgfSBmcm9tICcuL2FyY3NsaWRlcidcbmltcG9ydCB7IGNoYXJ0cywgQ2hhcnQgfSBmcm9tICcuL2NoYXJ0J1xuaW1wb3J0IHsgbGlzdFN3aXRjaGVyRmFjdG9yeSwgTGlzdFN3aXRjaGVyIH0gZnJvbSAnLi9saXN0c3dpdGNoZXInXG5pbXBvcnQgdXRpbCBmcm9tICcuL3V0aWwnXG5cbmV4cG9ydCB7IERyYWdnYWJsZSxcbiAgUG9pbnQsIFJlY3RhbmdsZSwgR2VvbWV0cnksXG4gIExpc3QsIGxpc3RGYWN0b3J5LFxuICB0YXJnZXRzLCBUYXJnZXQsXG4gIHNjb3BlcywgZGVmYXVsdFNjb3BlLCBTY29wZSwgc2NvcGVGYWN0b3J5LCBzY29wZSxcbiAgcG9zaXRpb25UeXBlLCBzb3J0aW5nRmFjdG9yeSwgcG9zaXRpb25GYWN0b3J5LFxuICBzcGlkZXJzLCBTcGlkZXIsXG4gIGFyY1NsaWRlcnMsIEFyY1NsaWRlcixcbiAgY2hhcnRzLCBDaGFydCxcbiAgbGlzdFN3aXRjaGVyRmFjdG9yeSwgTGlzdFN3aXRjaGVyLFxuICB1dGlsXG59XG4iLCIndXNlIHN0cmljdCdcblxuY29uc3QgbGlzdHMgPSBbXVxuXG5pbXBvcnQgeyByZW1vdmVJdGVtIH0gZnJvbSAnLi91dGlsJ1xuaW1wb3J0IEV2ZW50IGZyb20gJy4vZXZlbnQnXG5pbXBvcnQgeyBHZW9tZXRyeSB9IGZyb20gJy4vZ2VvbWV0cnknXG5pbXBvcnQgeyBEcmFnZ2FibGUgfSBmcm9tICcuL2RyYWdnYWJsZSdcblxuY29uc3QgRHJhZ2VlID0geyBFdmVudCB9IC8vdG9kbyByZW1vdmUgYWZ0ZXIgcmVmYWN0b3JlXG5cbmNsYXNzIExpc3Qge1xuICBjb25zdHJ1Y3RvcihkcmFnZ2FibGVzLCBvcHRpb25zPXt9KSB7XG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICB0aW1lRW5kOiAyMDAsXG4gICAgICB0aW1lRXhjYW5nZTogNDAwLFxuICAgICAgcmFkaXVzOiAzMCxcbiAgICAgIGdldERpc3RhbmNlOiBHZW9tZXRyeS5nZXREaXN0YW5jZSxcbiAgICAgIGlzRGlzcGxhY2VtZW50OiBmYWxzZVxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0aGlzLmRyYWdnYWJsZXMgPSBkcmFnZ2FibGVzXG4gICAgbGlzdHMucHVzaCh0aGlzKVxuICAgIHRoaXMub25DaGFuZ2UgPSBuZXcgRHJhZ2VlLkV2ZW50KHRoaXMpXG4gICAgaWYgKG9wdGlvbnMub25DaGFuZ2UpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UuYWRkKG9wdGlvbnMub25DaGFuZ2UpXG4gICAgfVxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuX2VuYWJsZSA9IHRydWVcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCh0aGlzLmluaXREcmFnZ2FibGUsIHRoaXMpXG4gIH1cblxuICBpbml0RHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIGxldCBtb3ZlSGFuZGxlclxuICAgIGNvbnN0IGxpc3QgPSB0aGlzXG5cbiAgICBkcmFnZ2FibGUuZW5hYmxlID0gdGhpcy5fZW5hYmxlXG4gICAgaWYgKHRoaXMub3B0aW9ucy5pc0Rpc3BsYWNlbWVudCkge1xuICAgICAgbW92ZUhhbmRsZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKGRyYWdnYWJsZS5pc0RyYWdnaW5nKSB7XG4gICAgICAgICAgbGlzdC5vblN0YXJ0KGRyYWdnYWJsZSlcbiAgICAgICAgICBkcmFnZ2FibGUub25Nb3ZlLnJlbW92ZShtb3ZlSGFuZGxlcilcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGRyYWdnYWJsZS5vbkVuZC5hZGQoKCkgPT4ge1xuICAgICAgICB0aGlzLm9uRW5kRGlzcGxheWNlbWVudChkcmFnZ2FibGUpXG4gICAgICAgIGRyYWdnYWJsZS5vbk1vdmUuYWRkKG1vdmVIYW5kbGVyKVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfSlcblxuICAgICAgZHJhZ2dhYmxlLm9uTW92ZS5hZGQobW92ZUhhbmRsZXIpXG4gICAgfSBlbHNlIHtcbiAgICAgIGRyYWdnYWJsZS5vbkVuZC5hZGQoKCkgPT4ge1xuICAgICAgICB0aGlzLm9uRW5kKGRyYWdnYWJsZSlcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgbW92ZU9yU2F2ZShkcmFnZ2FibGUsIHBvc2l0aW9uLCB0aW1lKSB7XG4gICAgaWYgKGRyYWdnYWJsZS5pc0RyYWdnaW5nKSB7XG4gICAgICBkcmFnZ2FibGUuZml4UG9zaXRpb24gPSBwb3NpdGlvblxuICAgIH0gZWxzZSB7XG4gICAgICBkcmFnZ2FibGUubW92ZShwb3NpdGlvbiwgdGltZSwgdHJ1ZSlcbiAgICB9XG4gIH1cblxuICBvbkVuZChkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBmaXhQb3NpdGlvbnMgPSB0aGlzLmdldEN1cnJlbnRGaXhQb3NpdGlvbigpXG4gICAgY29uc3QgY3VycmVudEluZGV4ID0gdGhpcy5kcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKVxuICAgIGNvbnN0IGV4Y2FuZ2VJbmRleCA9IEdlb21ldHJ5LmluZGV4T2ZOZWFyUG9pbnQoZml4UG9zaXRpb25zLCBkcmFnZ2FibGUucG9zaXRpb24sIHRoaXMub3B0aW9ucy5yYWRpdXMsIHRoaXMub3B0aW9ucy5nZXREaXN0YW5jZSlcblxuICAgIGlmIChleGNhbmdlSW5kZXggPT09IC0xIHx8IGV4Y2FuZ2VJbmRleCA9PT0gY3VycmVudEluZGV4KSB7XG4gICAgICBkcmFnZ2FibGUubW92ZShkcmFnZ2FibGUuZml4UG9zaXRpb24sIHRoaXMub3B0aW9ucy50aW1lRW5kLCB0cnVlKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1vdmVPclNhdmUodGhpcy5kcmFnZ2FibGVzW2V4Y2FuZ2VJbmRleF0sIGZpeFBvc2l0aW9uc1tjdXJyZW50SW5kZXhdLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICB0aGlzLmRyYWdnYWJsZXNbY3VycmVudEluZGV4XS5tb3ZlKGZpeFBvc2l0aW9uc1tleGNhbmdlSW5kZXhdLCB0aGlzLm9wdGlvbnMudGltZUVuZCwgdHJ1ZSlcbiAgICAgIHRoaXMub25DaGFuZ2UuZmlyZSgpXG4gICAgfVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBvbkVuZERpc3BsYXljZW1lbnQoZHJhZ2dhYmxlKSB7XG4gICAgY29uc3Qgc29ydGVkRHJhZ2dhYmxlcyA9IHRoaXMuZ2V0U29ydGVkRHJhZ2dhYmxlcygpXG4gICAgY29uc3QgZml4UG9zaXRpb25zID0gc29ydGVkRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLmZpeFBvc2l0aW9uKVxuXG4gICAgY29uc3QgY3VycmVudEluZGV4ID0gc29ydGVkRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSlcbiAgICBjb25zdCB0YXJnZXRJbmRleCA9IEdlb21ldHJ5LmluZGV4T2ZOZWFyUG9pbnQoZml4UG9zaXRpb25zLCBkcmFnZ2FibGUucG9zaXRpb24sIHRoaXMub3B0aW9ucy5yYWRpdXMsIHRoaXMub3B0aW9ucy5nZXREaXN0YW5jZSlcblxuICAgIGlmICh0YXJnZXRJbmRleCAhPT0gLTEpIHtcbiAgICAgIGlmICh0YXJnZXRJbmRleCA8IGN1cnJlbnRJbmRleCkge1xuICAgICAgICBmb3IgKGxldCBpPXRhcmdldEluZGV4OyBpPGN1cnJlbnRJbmRleDsgaSsrKSB7XG4gICAgICAgICAgdGhpcy5tb3ZlT3JTYXZlKHNvcnRlZERyYWdnYWJsZXNbaV0sIGZpeFBvc2l0aW9uc1tpKzFdLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAobGV0IGk9Y3VycmVudEluZGV4OyBpPHRhcmdldEluZGV4OyBpKyspIHtcbiAgICAgICAgICB0aGlzLm1vdmVPclNhdmUoc29ydGVkRHJhZ2dhYmxlc1tpKzFdLCBmaXhQb3NpdGlvbnNbaV0sIHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZHJhZ2dhYmxlLm1vdmUoZml4UG9zaXRpb25zW3RhcmdldEluZGV4XSwgdGhpcy5vcHRpb25zLnRpbWVFbmQsIHRydWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGRyYWdnYWJsZS5tb3ZlKGRyYWdnYWJsZS5maXhQb3NpdGlvbiwgdGhpcy5vcHRpb25zLnRpbWVFbmQsIHRydWUpXG4gICAgfVxuICB9XG5cbiAgb25TdGFydChkcmFnZ2FibGUpIHtcbiAgICBsZXQgaVxuICAgIGNvbnN0IHNvcnRlZERyYWdnYWJsZXMgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuICAgIGNvbnN0IGZpeFBvc2l0aW9ucyA9IHNvcnRlZERyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5maXhQb3NpdGlvbilcblxuICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IHNvcnRlZERyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpXG4gICAgZm9yIChpID0gY3VycmVudEluZGV4ICsgMTsgaSA8IHNvcnRlZERyYWdnYWJsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMubW92ZU9yU2F2ZShzb3J0ZWREcmFnZ2FibGVzW2ldLCBmaXhQb3NpdGlvbnNbaSAtIDFdLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgfVxuICAgIHNvcnRlZERyYWdnYWJsZXNbY3VycmVudEluZGV4XS5maXhQb3NpdGlvbiA9IGZpeFBvc2l0aW9uc1tpIC0gMV1cbiAgfVxuXG4gIGdldEN1cnJlbnRGaXhQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5kcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUuZml4UG9zaXRpb24uY2xvbmUoKSlcbiAgfVxuXG4gIGdldFNvcnRlZERyYWdnYWJsZXMoKSB7XG4gICAgY29uc3QgaW5pdFBvc2l0aW9ucyA9IHRoaXMuZHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLmluaXRQb3NpdGlvbilcblxuICAgIGNvbnN0IHNvcnRlZERyYWdnYWJsZXMgPSBpbml0UG9zaXRpb25zLm1hcCgocG9zaXRpb24pID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmRyYWdnYWJsZXMuZmlsdGVyKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5maXhQb3NpdGlvbi5jb21wYXJlKHBvc2l0aW9uKSlbMF1cbiAgICB9KVxuXG4gICAgcmV0dXJuIHNvcnRlZERyYWdnYWJsZXNcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5tb3ZlKGRyYWdnYWJsZS5pbml0UG9zaXRpb24sIDAsIHRydWUsIGZhbHNlKVxuICAgIH0pXG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5yZWZyZXNoKClcbiAgICB9KVxuICB9XG5cbiAgYWRkKGRyYWdnYWJsZXMpIHtcbiAgICBpZiAoIShkcmFnZ2FibGVzIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgICBkcmFnZ2FibGVzID0gW2RyYWdnYWJsZXNdXG4gICAgfVxuICAgIGRyYWdnYWJsZXMuZm9yRWFjaCh0aGlzLmluaXREcmFnZ2FibGUsIHRoaXMpXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gdGhpcy5kcmFnZ2FibGVzLmNvbmNhdChkcmFnZ2FibGVzKVxuICB9XG5cbiAgcmVtb3ZlKGRyYWdnYWJsZXMpIHtcbiAgICBjb25zdCBpbml0UG9zaXRpb25zID0gdGhpcy5kcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUuaW5pdFBvc2l0aW9uKVxuICAgIGNvbnN0IGxpc3QgPSBbXVxuICAgIGNvbnN0IHNvcnRlZERyYWdnYWJsZXMgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuXG4gICAgaWYgKCEoZHJhZ2dhYmxlcyBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgZHJhZ2dhYmxlcyA9IFtkcmFnZ2FibGVzXVxuICAgIH1cblxuICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUub25FbmQucmVzZXQoKVxuICAgICAgZHJhZ2dhYmxlLm9uTW92ZS5yZXNldCgpIC8vdG9kbyByZW1vdmUgcmVzZXQgaW4gZnV0dXJlXG4gICAgICByZW1vdmVJdGVtKHRoaXMuZHJhZ2dhYmxlcywgZHJhZ2dhYmxlKVxuICAgIH0pXG5cbiAgICBsZXQgaiA9IDBcbiAgICBzb3J0ZWREcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgaWYgKHRoaXMuZHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkgIT09IC0xKSB7XG4gICAgICAgIGlmIChkcmFnZ2FibGUuZml4UG9zaXRpb24gIT09IGluaXRQb3NpdGlvbnNbal0pIHtcbiAgICAgICAgICBkcmFnZ2FibGUubW92ZShpbml0UG9zaXRpb25zW2pdLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UsIHRydWUpXG4gICAgICAgIH1cbiAgICAgICAgZHJhZ2dhYmxlLmluaXRQb3NpdGlvbiA9IGluaXRQb3NpdGlvbnNbal1cbiAgICAgICAgaisrXG4gICAgICAgIGxpc3QucHVzaChkcmFnZ2FibGUpXG4gICAgICB9XG4gICAgfSlcbiAgICB0aGlzLmRyYWdnYWJsZXMgPSBsaXN0XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLnJlbW92ZSh0aGlzLmRyYWdnYWJsZXMuc2xpY2UoKSlcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4gZHJhZ2dhYmxlLmRlc3Ryb3koKSlcbiAgfVxuXG4gIGdldCBwb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q3VycmVudEZpeFBvc2l0aW9uKClcbiAgfVxuXG4gIHNldCBwb3NpdGlvbnMocG9zaXRpb25zKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9ICd3cm9uZyBhcnJheSBsZW5ndGgnXG4gICAgaWYgKHBvc2l0aW9ucy5sZW5ndGggPT09IHRoaXMuZHJhZ2dhYmxlcy5sZW5ndGgpIHtcbiAgICAgIHBvc2l0aW9ucy5mb3JFYWNoKChwb2ludCwgaSkgPT4ge1xuICAgICAgICB0aGlzLmRyYWdnYWJsZXNbaV0ubW92ZShwb2ludCwgMCwgdHJ1ZSwgdHJ1ZSlcbiAgICAgIH0sIHRoaXMpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG1lc3NhZ2VcbiAgICB9XG4gIH1cblxuICBnZXQgZW5hYmxlKCkge1xuICAgIHJldHVybiB0aGlzLl9lbmFibGVcbiAgfVxuXG4gIHNldCBlbmFibGUoZW5hYmxlKSB7XG4gICAgdGhpcy5fZW5hYmxlID0gZW5hYmxlXG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLmVuYWJsZSA9IGVuYWJsZVxuICAgIH0pXG4gIH1cbn1cblxuZnVuY3Rpb24gbGlzdEZhY3RvcnkocGFyZW50RWxlbWVudCwgZWxlbWVudHMsIG9wdGlvbnM9e30pIHtcbiAgY29uc3QgZHJhZ2dhYmxlT3B0aW9ucyA9IG9wdGlvbnMuZHJhZ2dhYmxlIHx8IHt9XG4gIGNvbnN0IGxpc3RPcHRpb25zID0gb3B0aW9ucy5saXN0IHx8IHt9XG4gIGRyYWdnYWJsZU9wdGlvbnMucGFyZW50ID0gZHJhZ2dhYmxlT3B0aW9ucy5wYXJlbnQgfHwgcGFyZW50RWxlbWVudFxuICBlbGVtZW50cyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGVsZW1lbnRzKVxuXG4gIGNvbnN0IGRyYWdnYWJsZXMgPSBlbGVtZW50cy5tYXAoKGVsZW1lbnQpID0+IHtcbiAgICByZXR1cm4gbmV3IERyYWdnYWJsZShlbGVtZW50LCBkcmFnZ2FibGVPcHRpb25zKVxuICB9KVxuXG4gIHJldHVybiBuZXcgTGlzdChkcmFnZ2FibGVzLCBsaXN0T3B0aW9ucylcbn1cblxuZXhwb3J0IHsgbGlzdHMsIExpc3QsIGxpc3RGYWN0b3J5IH1cbiIsIid1c2Ugc3RyaWN0J1xuXG5pbXBvcnQgeyBHZW9tZXRyeSwgUG9pbnQgfSBmcm9tICcuL2dlb21ldHJ5J1xuaW1wb3J0IHsgRHJhZ2dhYmxlIH0gZnJvbSAnLi9kcmFnZ2FibGUnXG5pbXBvcnQgeyBMaXN0IH0gZnJvbSAnLi9saXN0J1xuXG5jbGFzcyBMaXN0U3dpdGNoZXIgZXh0ZW5kcyBMaXN0IHtcbiAgY29uc3RydWN0b3IoZHJhZ2dhYmxlcywgb3B0aW9ucz17fSkge1xuICAgIG9wdGlvbnMuc3RlcE9uID0gb3B0aW9ucy5zdGVwT24gfHwgbmV3IFBvaW50KC01MCwgMClcbiAgICBzdXBlcihkcmFnZ2FibGVzLCBvcHRpb25zKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUuaXNPbiA9IGZhbHNlXG4gICAgICBkcmFnZ2FibGUub25FbmQuYWRkKCgpID0+IHtcbiAgICAgICAgdGhpcy5vbkVuZChkcmFnZ2FibGUpXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBvbkVuZChkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBmaXhQb3NpdGlvbnMgPSB0aGlzLmdldEN1cnJlbnRGaXhQb3NpdGlvbldpdGhPZmYoKVxuICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IHRoaXMuZHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSlcbiAgICBjb25zdCBleGNhbmdlSW5kZXggPSBHZW9tZXRyeS5pbmRleE9mTmVhclBvaW50KGZpeFBvc2l0aW9ucywgZHJhZ2dhYmxlLnBvc2l0aW9uLCB0aGlzLm9wdGlvbnMucmFkaXVzLCB0aGlzLm9wdGlvbnMuZ2V0RGlzdGFuY2UpXG5cbiAgICBpZiAoZXhjYW5nZUluZGV4ID09PSAtMSB8fCBleGNhbmdlSW5kZXggPT09IGN1cnJlbnRJbmRleCkge1xuICAgICAgdGhpcy5tb3ZlRHJhZ2dhYmxlKGN1cnJlbnRJbmRleCwgZHJhZ2dhYmxlLnBvc2l0aW9uLCBmaXhQb3NpdGlvbnNbY3VycmVudEluZGV4XSwgdGhpcy5vcHRpb25zLnRpbWVFbmQpXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmRyYWdnYWJsZXNbZXhjYW5nZUluZGV4XS5pc0RyYWdnaW5nKSB7XG4gICAgICAgIHRoaXMuZml4VG9PZmYoZXhjYW5nZUluZGV4LCBmaXhQb3NpdGlvbnNbY3VycmVudEluZGV4XSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubW92ZURyYWdnYWJsZVRvT2ZmKGV4Y2FuZ2VJbmRleCwgZml4UG9zaXRpb25zW2N1cnJlbnRJbmRleF0sIHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSlcbiAgICAgIH1cbiAgICAgIHRoaXMubW92ZURyYWdnYWJsZShjdXJyZW50SW5kZXgsIGRyYWdnYWJsZS5wb3NpdGlvbiwgZml4UG9zaXRpb25zW2V4Y2FuZ2VJbmRleF0sIHRoaXMub3B0aW9ucy50aW1lRW5kKVxuICAgICAgdGhpcy5vbkNoYW5nZS5maXJlKClcbiAgICB9XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIG1vdmVEcmFnZ2FibGUoaW5kZXgsIHBvc2l0aW9uLCBmaXhPZmZQb3NpdGlvbiwgdGltZSkge1xuICAgIGNvbnN0IHBvc2l0aW9ucyA9IFtmaXhPZmZQb3NpdGlvbiwgZml4T2ZmUG9zaXRpb24uYWRkKHRoaXMub3B0aW9ucy5zdGVwT24pXVxuICAgIGNvbnN0IGlzT24gPSBHZW9tZXRyeS5pbmRleE9mTmVhclBvaW50KHBvc2l0aW9ucywgcG9zaXRpb24sIC0xLCBHZW9tZXRyeS5nZXRYRGlmZmVyZW5jZSlcblxuICAgIGlmICh0aGlzLmRyYWdnYWJsZXNbaW5kZXhdLmlzT24gIT09ICEhaXNPbikge1xuICAgICAgdGhpcy5kcmFnZ2FibGVzW2luZGV4XS5pc09uID0gISFpc09uXG4gICAgICB0aGlzLm9uQ2hhbmdlLmZpcmUoKVxuICAgIH1cblxuICAgIHRoaXMuZHJhZ2dhYmxlc1tpbmRleF0ubW92ZShwb3NpdGlvbnNbaXNPbl0sIHRpbWUsIHRydWUpXG4gIH1cblxuICBmaXhUb09mZihpbmRleCwgZml4T2ZmUG9zaXRpb24pIHtcbiAgICB0aGlzLmRyYWdnYWJsZXNbaW5kZXhdLmlzT24gPSBmYWxzZVxuICAgIHRoaXMuZHJhZ2dhYmxlc1tpbmRleF0uZml4UG9zaXRpb24gPSBmaXhPZmZQb3NpdGlvblxuICB9XG5cbiAgbW92ZURyYWdnYWJsZVRvT2ZmKGluZGV4LCBmaXhPZmZQb3NpdGlvbiwgdGltZSkge1xuICAgIHRoaXMuZHJhZ2dhYmxlc1tpbmRleF0uaXNPbiA9IGZhbHNlXG4gICAgdGhpcy5kcmFnZ2FibGVzW2luZGV4XS5tb3ZlKGZpeE9mZlBvc2l0aW9uLCB0aW1lLCB0cnVlKVxuICB9XG5cbiAgZ2V0Q3VycmVudEZpeFBvc2l0aW9uV2l0aE9mZigpIHtcbiAgICByZXR1cm4gdGhpcy5kcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICByZXR1cm4gZHJhZ2dhYmxlLmlzT24gPyBkcmFnZ2FibGUuZml4UG9zaXRpb24uc3ViKHRoaXMub3B0aW9ucy5zdGVwT24pIDogZHJhZ2dhYmxlLmZpeFBvc2l0aW9uLmNsb25lKClcbiAgICB9LCB0aGlzKVxuICB9XG5cbiAgZ2V0U29ydGVkRHJhZ2dhYmxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5kcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUuaW5pdFBvc2l0aW9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKChwb3NpdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRyYWdnYWJsZXMuZmlsdGVyKChkcmFnZ2FibGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkcmFnZ2FibGUuZml4UG9zaXRpb24uY29tcGFyZShwb3NpdGlvbikgfHwgZHJhZ2dhYmxlLmZpeFBvc2l0aW9uLmNvbXBhcmUocG9zaXRpb24uYWRkKHRoaXMub3B0aW9ucy5zdGVwT24pKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHRoaXMpWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHRoaXMpXG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUubW92ZShkcmFnZ2FibGUuaW5pdFBvc2l0aW9uLCAwLCB0cnVlLCBmYWxzZSlcbiAgICAgIGRyYWdnYWJsZS5pc09uID0gZmFsc2VcbiAgICB9KVxuICB9XG5cbiAgZ2V0IHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5kcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBjb25zdCBwb3NpdGlvbiA9IGRyYWdnYWJsZS5maXhQb3NpdGlvbi5jbG9uZSgpXG4gICAgICBwb3NpdGlvbi5pc09uID0gZHJhZ2dhYmxlLmlzT25cbiAgICAgIHJldHVybiBwb3NpdGlvblxuICAgIH0pXG4gIH1cblxuICBzZXQgcG9zaXRpb25zKHBvc2l0aW9ucykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSAnd3JvbmcgYXJyYXkgbGVuZ3RoJ1xuICAgIGlmIChwb3NpdGlvbnMubGVuZ3RoID09PSB0aGlzLmRyYWdnYWJsZXMubGVuZ3RoKSB7XG4gICAgICBwb3NpdGlvbnMuZm9yRWFjaCgocG9pbnQsIGkpID0+IHtcbiAgICAgICAgdGhpcy5kcmFnZ2FibGVzW2ldLmlzT24gPSBwb2ludC5pc09uXG4gICAgICAgIHRoaXMuZHJhZ2dhYmxlc1tpXS5tb3ZlKHBvaW50LCAwLCB0cnVlLCB0cnVlKVxuICAgICAgfSwgdGhpcylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbWVzc2FnZVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBsaXN0U3dpdGNoZXJGYWN0b3J5KGVsZW1lbnQsIGRyYWdnYWJsZUVsZW1lbnRzLCBvcHRpb25zPXt9KSB7XG4gIGNvbnN0IGRyYWdnYWJsZU9wdGlvbnMgPSBvcHRpb25zLmRyYWdnYWJsZSB8fCB7fVxuICBjb25zdCBsaXN0T3B0aW9ucyA9IG9wdGlvbnMubGlzdCB8fCB7fVxuXG4gIGRyYWdnYWJsZU9wdGlvbnMucGFyZW50ID0gZHJhZ2dhYmxlT3B0aW9ucy5wYXJlbnQgfHwgZWxlbWVudFxuICBkcmFnZ2FibGVFbGVtZW50cyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGRyYWdnYWJsZUVsZW1lbnRzKVxuXG4gIGNvbnN0IGRyYWdnYWJsZXMgPSBkcmFnZ2FibGVFbGVtZW50cy5tYXAoKGVsZW1lbnQpID0+IHtcbiAgICByZXR1cm4gbmV3IERyYWdnYWJsZShlbGVtZW50LCBkcmFnZ2FibGVPcHRpb25zKVxuICB9KVxuICByZXR1cm4gbmV3IExpc3RTd2l0Y2hlcihkcmFnZ2FibGVzLCBsaXN0T3B0aW9ucylcbn1cblxuZXhwb3J0IHsgbGlzdFN3aXRjaGVyRmFjdG9yeSwgTGlzdFN3aXRjaGVyIH1cbiIsIid1c2Ugc3RyaWN0J1xuaW1wb3J0IHsgR2VvbWV0cnksIFBvaW50IH0gZnJvbSAnLi9nZW9tZXRyeSdcblxuY29uc3QgcG9zaXRpb25UeXBlID0ge1xuICBub3RDcm9zc2luZzogMCxcbiAgZmxvYXRMZWZ0OiAxLFxuICBmbG9hdFJpZ2h0OiAyXG59XG5cbmZ1bmN0aW9uIHBvc2l0aW9uRmFjdG9yeSh0eXBlKSB7XG4gIHN3aXRjaCAodHlwZSkge1xuICBjYXNlIHBvc2l0aW9uVHlwZS5ub3RDcm9zc2luZzpcbiAgICByZXR1cm4gZnVuY3Rpb24ocmVjdGFuZ2xlLCBfb3B0aW9ucykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKHJlY3RhbmdsZUxpc3QsIGluZGV4ZXNPZk5ld3MpIHtcbiAgICAgICAgY29uc3QgYm91bmRSZWN0ID0gdHlwZW9mIHJlY3RhbmdsZSA9PT0gJ2Z1bmN0aW9uJyA/IHJlY3RhbmdsZSgpIDogcmVjdGFuZ2xlLFxuICAgICAgICAgIHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMgPSByZWN0YW5nbGVMaXN0LnJlZHVjZShmdW5jdGlvbihpbmRleGVzLCBfcmVjdCwgaW5kZXgpIHtcbiAgICAgICAgICAgIGlmIChpbmRleGVzT2ZOZXdzLmluZGV4T2YoaW5kZXgpID09PSAtMSkge1xuICAgICAgICAgICAgICBpbmRleGVzLnB1c2goaW5kZXgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaW5kZXhlc1xuICAgICAgICAgIH0sIFtdKVxuXG4gICAgICAgIGluZGV4ZXNPZk5ld3MuZm9yRWFjaChmdW5jdGlvbihpbmRleCkge1xuICAgICAgICAgIGxldCByZWN0ID0gcmVjdGFuZ2xlTGlzdFtpbmRleF0sIHJlbW92YWJsZSA9IGZhbHNlXG4gICAgICAgICAgc3RhdGljUmVjdGFuZ2xlSW5kZXhlcy5mb3JFYWNoKGZ1bmN0aW9uKGluZGV4T2ZTdGF0aWMpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXRpY1JlY3QgPSByZWN0YW5nbGVMaXN0W2luZGV4T2ZTdGF0aWNdXG4gICAgICAgICAgICByZWN0ID0gc3RhdGljUmVjdC5tb3ZlVG9Cb3VuZChyZWN0KVxuICAgICAgICAgIH0pXG4gICAgICAgICAgcmVtb3ZhYmxlID0gc3RhdGljUmVjdGFuZ2xlSW5kZXhlcy5zb21lKGZ1bmN0aW9uKGluZGV4T2ZTdGF0aWMpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXRpY1JlY3QgPSByZWN0YW5nbGVMaXN0W2luZGV4T2ZTdGF0aWNdXG4gICAgICAgICAgICByZXR1cm4gICEhc3RhdGljUmVjdC5hbmQocmVjdClcbiAgICAgICAgICB9KSB8fCByZWN0LmFuZChib3VuZFJlY3QpLmdldFNxdWFyZSgpICE9PSByZWN0LmdldFNxdWFyZSgpXG4gICAgICAgICAgaWYgKHJlbW92YWJsZSkge1xuICAgICAgICAgICAgcmVjdC5yZW1vdmFibGUgPSB0cnVlXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMucHVzaChpbmRleClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiByZWN0YW5nbGVMaXN0XG4gICAgICB9XG4gICAgfVxuICBjYXNlIHBvc2l0aW9uVHlwZS5mbG9hdExlZnQ6XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHJlY3RhbmdsZSwgb3B0aW9ucykge1xuICAgICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBwYWRkaW5nVG9wTGVmdDogbmV3IFBvaW50KDAsIDApLFxuICAgICAgICBwYWRkaW5nQm90dG9tUmlnaHQ6IG5ldyBQb2ludCgwLCAwKSxcbiAgICAgICAgeUdhcEJldHdlZW5EcmFnZ2FibGVzOiAwLFxuICAgICAgICByZW1vdmFibGU6IHRydWVcbiAgICAgIH0sIG9wdGlvbnMpXG5cbiAgICAgIHJldHVybiBmdW5jdGlvbihyZWN0YW5nbGVMaXN0LCBfaW5kZXhlc09mTmV3cykge1xuICAgICAgICBjb25zdCBib3VuZFJlY3QgPSB0eXBlb2YgcmVjdGFuZ2xlID09PSAnZnVuY3Rpb24nID8gcmVjdGFuZ2xlKCkgOiByZWN0YW5nbGVcbiAgICAgICAgY29uc3QgcmVjdFAyID0gYm91bmRSZWN0LmdldFAyKClcbiAgICAgICAgbGV0IGJvdW5kYXJ5UG9pbnRzID0gW2JvdW5kUmVjdC5wb3NpdGlvbl1cbiAgICAgICAgcmVjdGFuZ2xlTGlzdC5mb3JFYWNoKGZ1bmN0aW9uKHJlY3QpIHtcbiAgICAgICAgICBsZXQgcG9zaXRpb24sIGlzVmFsaWQgPSBmYWxzZVxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm91bmRhcnlQb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gKG5ldyBQb2ludChib3VuZGFyeVBvaW50c1tpXS54LCBpID4gMCA/IChib3VuZGFyeVBvaW50c1tpIC0gMV0ueSArIG9wdGlvbnMueUdhcEJldHdlZW5EcmFnZ2FibGVzKSA6IGJvdW5kUmVjdC5wb3NpdGlvbi55KSkuYWRkKG9wdGlvbnMucGFkZGluZ1RvcExlZnQpXG4gICAgICAgICAgICBpc1ZhbGlkID0gKHBvc2l0aW9uLnggKyByZWN0LnNpemUueCA8IHJlY3RQMi54KVxuICAgICAgICAgICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IChuZXcgUG9pbnQoYm91bmRSZWN0LnBvc2l0aW9uLngsIGJvdW5kYXJ5UG9pbnRzW2JvdW5kYXJ5UG9pbnRzLmxlbmd0aCAtIDFdLnkgKyBvcHRpb25zLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcykpLmFkZChvcHRpb25zLnBhZGRpbmdUb3BMZWZ0KVxuICAgICAgICAgIH1cbiAgICAgICAgICByZWN0LnBvc2l0aW9uID0gcG9zaXRpb25cbiAgICAgICAgICBpZiAob3B0aW9ucy5yZW1vdmFibGUgJiYgcmVjdC5nZXRQMygpLnkgPiBib3VuZFJlY3QuZ2V0UDMoKS55KSB7XG4gICAgICAgICAgICByZWN0LnJlbW92YWJsZSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgYm91bmRhcnlQb2ludHMgPSBHZW9tZXRyeS5hZGRQb2ludFRvQm91bmRQb2ludHMoYm91bmRhcnlQb2ludHMsIHJlY3QuZ2V0UDMoKS5hZGQob3B0aW9ucy5wYWRkaW5nQm90dG9tUmlnaHQpKVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gcmVjdGFuZ2xlTGlzdFxuICAgICAgfVxuICAgIH1cbiAgY2FzZSBwb3NpdGlvblR5cGUuZmxvYXRSaWdodDpcbiAgICByZXR1cm4gZnVuY3Rpb24ocmVjdGFuZ2xlLCBvcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0gT2JqZWN0LmFzc2luZyh7XG4gICAgICAgIHBhZGRpbmdUb3BSaWdodDogbmV3IFBvaW50KDUsIDUpLFxuICAgICAgICBwYWRkaW5nQm90dG9tTGVmdDogbmV3IFBvaW50KDAsIDApLFxuICAgICAgICByZW1vdmFibGU6IHRydWVcbiAgICAgIH0sIG9wdGlvbnMpXG5cbiAgICAgIGNvbnN0IHBhZGRpbmdUb3BOZWdSaWdodCA9IG5ldyBQb2ludCgtb3B0aW9ucy5wYWRkaW5nVG9wUmlnaHQueCwgb3B0aW9ucy5wYWRkaW5nVG9wUmlnaHQueSlcbiAgICAgIGNvbnN0IHBhZGRpbmdCb3R0b21OZWdMZWZ0ID0gbmV3IFBvaW50KC1vcHRpb25zLnBhZGRpbmdCb3R0b21MZWZ0LngsIG9wdGlvbnMucGFkZGluZ0JvdHRvbUxlZnQueSlcbiAgICAgIHJldHVybiBmdW5jdGlvbihyZWN0YW5nbGVMaXN0LCBfaW5kZXhlc09mTmV3cykge1xuICAgICAgICBjb25zdCBib3VuZFJlY3QgPSB0eXBlb2YgcmVjdGFuZ2xlID09PSAnZnVuY3Rpb24nID8gcmVjdGFuZ2xlKCkgOiByZWN0YW5nbGVcbiAgICAgICAgbGV0IGJvdW5kYXJ5UG9pbnRzID0gW2JvdW5kUmVjdC5nZXRSaWdodFRvcFBvaW50KCldXG4gICAgICAgIHJlY3RhbmdsZUxpc3QuZm9yRWFjaChmdW5jdGlvbihyZWN0LCBfaW5kZXgpIHtcbiAgICAgICAgICBsZXQgcG9zaXRpb24sIGlzVmFsaWQgPSBmYWxzZVxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm91bmRhcnlQb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gKG5ldyBQb2ludChib3VuZGFyeVBvaW50c1tpXS54IC0gcmVjdC5zaXplLngsIGkgPiAwID8gYm91bmRhcnlQb2ludHNbaSAtIDFdLnkgOiBib3VuZFJlY3QucG9zaXRpb24ueSkpLmFkZChwYWRkaW5nVG9wTmVnUmlnaHQpXG4gICAgICAgICAgICBpc1ZhbGlkID0gKHBvc2l0aW9uLnggPiByZWN0LnBvc2l0aW9uLngpXG4gICAgICAgICAgICBpZiAoaXNWYWxpZCkge1xuICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gbmV3IFBvaW50KGJvdW5kUmVjdC5nZXRQMigpLngsIGJvdW5kYXJ5UG9pbnRzW2JvdW5kYXJ5UG9pbnRzLmxlbmd0aCAtIDFdLnkpXG4gICAgICAgICAgfVxuICAgICAgICAgIHJlY3QucG9zaXRpb24gPSBwb3NpdGlvblxuICAgICAgICAgIGlmIChvcHRpb25zLnJlbW92YWJsZSAmJiByZWN0LmdldExlZnRCb3R0b21Qb2ludCgpLnkgPiBib3VuZFJlY3QuZ2V0UDQoKS55KSB7XG4gICAgICAgICAgICByZWN0LnJlbW92YWJsZSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgYm91bmRhcnlQb2ludHMgPSBHZW9tZXRyeS5hZGRQb2ludFRvQm91bmRQb2ludHMoYm91bmRhcnlQb2ludHMsIHJlY3QuZ2V0UDQoKS5hZGQocGFkZGluZ0JvdHRvbU5lZ0xlZnQpLCB0cnVlKVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gcmVjdGFuZ2xlTGlzdFxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBzb3J0aW5nRmFjdG9yeSh0eXBlKSB7XG4gIHN3aXRjaCAodHlwZSkge1xuICBjYXNlIHBvc2l0aW9uVHlwZS5ub3RDcm9zc2luZzpcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24ob2xkT2Jqc0xpc3QsIG5ld09ianMsIGluZGV4T2ZOZXdzKSB7XG4gICAgICAgIGNvbnN0IG9ianNMaXN0ID0gb2xkT2Jqc0xpc3QuY29uY2F0KG5ld09ianMpXG4gICAgICAgIG5ld09ianMuZm9yRWFjaChmdW5jdGlvbihvYmopIHtcbiAgICAgICAgICBpbmRleE9mTmV3cy5wdXNoKG9ianNMaXN0LmluZGV4T2Yob2JqKSlcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIG9ianNMaXN0XG4gICAgICB9XG4gICAgfVxuICBjYXNlIHBvc2l0aW9uVHlwZS5mbG9hdExlZnQ6XG4gIGNhc2UgcG9zaXRpb25UeXBlLmZsb2F0UmlnaHQ6XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHJhZGl1cywgZ2V0RGlzdGFuY2UsIG9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgZ2V0UG9zaXRpb246IGZ1bmN0aW9uKG9iaikge1xuICAgICAgICAgIHJldHVybiBvYmoucG9zaXRpb25cbiAgICAgICAgfVxuICAgICAgfSwgb3B0aW9ucylcblxuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG9sZE9ianNMaXN0LCBuZXdPYmpzLCBpbmRleE9mTmV3cykge1xuICAgICAgICBjb25zdCBuZXdMaXN0ID0gb2xkT2Jqc0xpc3QuY29uY2F0KClcbiAgICAgICAgY29uc3QgbGlzdE9sZFBvc2l0aW9uID0gb2xkT2Jqc0xpc3QubWFwKG9wdGlvbnMuZ2V0UG9zaXRpb24pXG4gICAgICAgIG5ld09ianMuZm9yRWFjaChmdW5jdGlvbihuZXdPYmopIHtcbiAgICAgICAgICBsZXQgaW5kZXggPSBHZW9tZXRyeS5pbmRleE9mTmVhclBvaW50KGxpc3RPbGRQb3NpdGlvbiwgb3B0aW9ucy5nZXRQb3NpdGlvbihuZXdPYmopLCByYWRpdXMsIGdldERpc3RhbmNlKVxuICAgICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIGluZGV4ID0gbmV3TGlzdC5sZW5ndGhcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaW5kZXggPSBuZXdMaXN0LmluZGV4T2Yob2xkT2Jqc0xpc3RbaW5kZXhdKVxuICAgICAgICAgIH1cbiAgICAgICAgICBuZXdMaXN0LnNwbGljZShpbmRleCwgMCwgbmV3T2JqKVxuICAgICAgICB9KVxuICAgICAgICBuZXdPYmpzLmZvckVhY2goZnVuY3Rpb24obmV3T2JqKSB7XG4gICAgICAgICAgaW5kZXhPZk5ld3MucHVzaChuZXdMaXN0LmluZGV4T2YobmV3T2JqKSlcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIG5ld0xpc3RcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IHsgcG9zaXRpb25UeXBlLCBzb3J0aW5nRmFjdG9yeSwgcG9zaXRpb25GYWN0b3J5IH1cbiIsImltcG9ydCB7IHJlbW92ZUl0ZW0gfSBmcm9tICcuL3V0aWwnXG5pbXBvcnQgRXZlbnQgZnJvbSAnLi9ldmVudCdcbmltcG9ydCB7IERyYWdnYWJsZSB9IGZyb20gJy4vZHJhZ2dhYmxlJ1xuaW1wb3J0IHsgVGFyZ2V0IH0gZnJvbSAnLi90YXJnZXQnXG5cbmNvbnN0IERyYWdlZSA9IHsgRXZlbnQgfSAvL3RvZG8gcmVtb3ZlIGFmdGVyIHJlZmFjdG9yZVxuXG5jb25zdCBzY29wZXMgPSBbXVxuXG5jbGFzcyBTY29wZSB7XG4gIGNvbnN0cnVjdG9yKGRyYWdnYWJsZXMsIHRhcmdldHMsIG9wdGlvbnM9e30pIHtcbiAgICBzY29wZXMuZm9yRWFjaCgoc2NvcGUpID0+IHtcbiAgICAgIGlmIChkcmFnZ2FibGVzKSB7XG4gICAgICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICAgICAgcmVtb3ZlSXRlbShzY29wZS5kcmFnZ2FibGVzLCBkcmFnZ2FibGUpXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIGlmICh0YXJnZXRzKSB7XG4gICAgICAgIHRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB7XG4gICAgICAgICAgcmVtb3ZlSXRlbShzY29wZS50YXJnZXRzLCB0YXJnZXQpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZXMgfHwgW11cbiAgICB0aGlzLnRhcmdldHMgPSB0YXJnZXRzIHx8IFtdXG4gICAgc2NvcGVzLnB1c2godGhpcylcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICB0aW1lRW5kOiAob3B0aW9ucy50aW1lRW5kKSB8fCA0MDBcbiAgICB9XG5cbiAgICB0aGlzLm9uQ2hhbmdlID0gbmV3IERyYWdlZS5FdmVudCh0aGlzKVxuICAgIGlmIChvcHRpb25zLm9uQ2hhbmdlKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlLmFkZChvcHRpb25zLm9uQ2hhbmdlKVxuICAgIH1cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUub25FbmQuYWRkKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMub25FbmQoZHJhZ2dhYmxlKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgYWRkRHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5wdXNoKGRyYWdnYWJsZSlcbiAgICBkcmFnZ2FibGUub25FbmQudW5zaGlmdCgoKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5vbkVuZChkcmFnZ2FibGUpXG4gICAgfSlcbiAgfVxuXG4gIGFkZFRhcmdldCh0YXJnZXQpIHtcbiAgICB0aGlzLnRhcmdldHMucHVzaCh0YXJnZXQpXG4gIH1cblxuICBvbkVuZChkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBzaG90VGFyZ2V0cyA9IHRoaXMudGFyZ2V0cy5maWx0ZXIoKHRhcmdldCkgPT4ge1xuICAgICAgcmV0dXJuIHRhcmdldC5kcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTFcbiAgICB9KS5maWx0ZXIoKHRhcmdldCkgPT4ge1xuICAgICAgcmV0dXJuIHRhcmdldC5jYXRjaERyYWdnYWJsZShkcmFnZ2FibGUpXG4gICAgfSkuc29ydCgoYSwgYikgPT4ge1xuICAgICAgcmV0dXJuIGEuZ2V0UmVjdGFuZ2xlKCkuZ2V0U3F1YXJlKCkgLSBiLmdldFJlY3RhbmdsZSgpLmdldFNxdWFyZSgpXG4gICAgfSlcblxuICAgIGlmIChzaG90VGFyZ2V0cy5sZW5ndGgpIHtcbiAgICAgIHNob3RUYXJnZXRzWzBdLm9uRW5kKGRyYWdnYWJsZSlcbiAgICB9IGVsc2UgaWYgKGRyYWdnYWJsZS50YXJnZXRzLmxlbmd0aCkge1xuICAgICAgZHJhZ2dhYmxlLm1vdmUoZHJhZ2dhYmxlLmluaXRQb3NpdGlvbiwgdGhpcy5vcHRpb25zLnRpbWVFbmQsIHRydWUsIHRydWUpXG4gICAgfVxuICAgIHRoaXMub25DaGFuZ2UuZmlyZSgpXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMudGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHRhcmdldC5yZXNldCgpKVxuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucmVmcmVzaCgpKVxuICAgIHRoaXMudGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHRhcmdldC5yZWZyZXNoKCkpXG4gIH1cblxuICBnZXQgcG9zaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnRhcmdldHMubWFwKCh0YXJnZXQpID0+IHtcbiAgICAgIHJldHVybiB0YXJnZXQuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB0aGlzLmRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpKVxuICAgIH0pXG4gIH1cblxuICBzZXQgcG9zaXRpb25zKHBvc2l0aW9ucykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSAnd3JvbmcgYXJyYXkgbGVuZ3RoJ1xuICAgIGlmIChwb3NpdGlvbnMubGVuZ3RoID09PSB0aGlzLnRhcmdldHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB0YXJnZXQucmVzZXQoKSlcblxuICAgICAgcG9zaXRpb25zLmZvckVhY2goKHRhcmdldEluZGV4ZXMsIGkpID0+IHtcbiAgICAgICAgdGFyZ2V0SW5kZXhlcy5mb3JFYWNoKChpbmRleCkgPT4ge1xuICAgICAgICAgIHRoaXMudGFyZ2V0c1tpXS5hZGQodGhpcy5kcmFnZ2FibGVzW2luZGV4XSlcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG1lc3NhZ2VcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgZGVmYXVsdFNjb3BlID0gbmV3IFNjb3BlKClcblxuZnVuY3Rpb24gc2NvcGUoZm4pIHtcbiAgY29uc3QgY3VycmVudFNjb3BlID0gbmV3IFNjb3BlKClcbiAgY29uc3QgYWRkRHJhZ2dhYmxlVG9TY29wZSA9IGZ1bmN0aW9uKGRyYWdnYWJsZSkge1xuICAgIGN1cnJlbnRTY29wZS5hZGREcmFnZ2FibGUoZHJhZ2dhYmxlKVxuICAgIHJldHVybiB0cnVlXG4gIH1cbiAgY29uc3QgYWRkVGFyZ2V0VG9TY29wZSA9IGZ1bmN0aW9uKHRhcmdldCkge1xuICAgIGN1cnJlbnRTY29wZS5hZGRUYXJnZXQodGFyZ2V0KVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBEcmFnZ2FibGUub25DcmVhdGUuYWRkKGFkZERyYWdnYWJsZVRvU2NvcGUpXG4gIFRhcmdldC5vbkNyZWF0ZS5hZGQoYWRkVGFyZ2V0VG9TY29wZSlcbiAgZm4uY2FsbCgpXG4gIERyYWdnYWJsZS5vbkNyZWF0ZS5yZW1vdmUoYWRkRHJhZ2dhYmxlVG9TY29wZSlcbiAgVGFyZ2V0Lm9uQ3JlYXRlLnJlbW92ZShhZGRUYXJnZXRUb1Njb3BlKVxuICByZXR1cm4gY3VycmVudFNjb3BlXG59XG5cbmZ1bmN0aW9uIHNjb3BlRmFjdG9yeShwYXJlbnRFbGVtZW50LCBkcmFnZ2FibGVFbGVtZW50cywgdGFyZ2V0RWxlbWVudHMsIG9wdGlvbnM9e30pIHtcbiAgY29uc3QgZHJhZ2dhYmxlT3B0aW9ucyA9IG9wdGlvbnMuZHJhZ2dhYmxlIHx8IHt9XG4gIGNvbnN0IHRhcmdldE9wdGlvbnMgPSBvcHRpb25zLnRhcmdldCB8fCB7fVxuICBjb25zdCBzY29wZU9wdGlvbnMgPSBvcHRpb25zLnNjb3BlIHx8IHt9XG4gIGRyYWdnYWJsZU9wdGlvbnMucGFyZW50ID0gZHJhZ2dhYmxlT3B0aW9ucy5wYXJlbnQgfHwgcGFyZW50RWxlbWVudFxuICB0YXJnZXRPcHRpb25zLnBhcmVudCA9IHRhcmdldE9wdGlvbnMucGFyZW50IHx8IHBhcmVudEVsZW1lbnRcbiAgZHJhZ2dhYmxlRWxlbWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkcmFnZ2FibGVFbGVtZW50cylcbiAgdGFyZ2V0RWxlbWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0YXJnZXRFbGVtZW50cylcblxuICBjb25zdCBkcmFnZ2FibGVzID0gZHJhZ2dhYmxlRWxlbWVudHMubWFwKChlbGVtZW50KSA9PiB7XG4gICAgcmV0dXJuIG5ldyBEcmFnZ2FibGUoZWxlbWVudCwgZHJhZ2dhYmxlT3B0aW9ucylcbiAgfSlcblxuICBjb25zdCB0YXJnZXRzID0gdGFyZ2V0RWxlbWVudHMubWFwKChlbGVtZW50KSA9PiB7XG4gICAgcmV0dXJuIG5ldyBUYXJnZXQoZWxlbWVudCwgZHJhZ2dhYmxlcywgdGFyZ2V0T3B0aW9ucylcbiAgfSlcbiAgcmV0dXJuIG5ldyBTY29wZShkcmFnZ2FibGVzLCB0YXJnZXRzLCBzY29wZU9wdGlvbnMpXG59XG5cbmV4cG9ydCB7IHNjb3BlcywgZGVmYXVsdFNjb3BlLCBTY29wZSwgc2NvcGVGYWN0b3J5LCBzY29wZSB9XG4iLCIndXNlIHN0cmljdCdcblxuaW1wb3J0IGNyZWF0ZUNhbnZhcyBmcm9tICcuL3V0aWxzL2NyZWF0ZWNhbnZhcydcbmltcG9ydCB7IEdlb21ldHJ5IH0gZnJvbSAnLi9nZW9tZXRyeSdcbmltcG9ydCB7IGJvdW5kVG9MaW5lIH0gZnJvbSAnLi9ib3VuZCdcbmltcG9ydCB7IERyYWdnYWJsZSB9IGZyb20gJy4vZHJhZ2dhYmxlJ1xuXG5jb25zdCBzcGlkZXJzID0gW11cblxuY2xhc3MgU3BpZGVyIHtcbiAgY29uc3RydWN0b3IoYXJlYSwgZWxlbWVudHMsIG9wdGlvbnM9e30pIHtcbiAgICBjb25zdCBhcmVhUmVjdGFuZ2xlID0gR2VvbWV0cnkuY3JlYXRlUmVjdGFuZ2xlRnJvbUVsZW1lbnQoYXJlYSwgYXJlYSlcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGFuZ2xlOiAwLFxuICAgICAgZEFuZ2xlOiAyICogTWF0aC5QSSAvIGVsZW1lbnRzLmxlbmd0aCxcbiAgICAgIGNlbnRlcjogYXJlYVJlY3RhbmdsZS5nZXRDZW50ZXIoKSxcbiAgICAgIHN0YXJ0UmFkaXVzOiA1MCxcbiAgICAgIGVuZFJhZGl1czogYXJlYVJlY3RhbmdsZS5nZXRNaW5TaWRlKCkgLyAyLFxuICAgICAgbGluZVdpZHRoOiAyLFxuICAgICAgc3Ryb2tlU3R5bGU6ICcjZmY1NTc3JyxcbiAgICAgIGZpbGxTdHlsZTogJ3JnYmEoMTUwLDI1NSw1MCwwLjgpJ1xuICAgIH0sIG9wdGlvbnMpXG5cbiAgICBzcGlkZXJzLnB1c2godGhpcylcbiAgICB0aGlzLmFyZWEgPSBhcmVhXG4gICAgdGhpcy5hcmVhUmVjdGFuZ2xlID0gYXJlYVJlY3RhbmdsZVxuICAgIHRoaXMuaW5pdChlbGVtZW50cylcbiAgfVxuXG4gIGluaXQoZWxlbWVudHMpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNyZWF0ZUNhbnZhcyh0aGlzLmFyZWEsIHRoaXMuYXJlYVJlY3RhbmdsZSlcbiAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG5cbiAgICB0aGlzLmRyYWdnYWJsZXMgPSBlbGVtZW50cy5tYXAoKGVsZW1lbnQsIGkpID0+IHtcbiAgICAgIGNvbnN0IGFuZ2xlID0gdGhpcy5vcHRpb25zLmFuZ2xlICsgaSAqIHRoaXMub3B0aW9ucy5kQW5nbGVcbiAgICAgIGNvbnN0IGhhbGZTaXplID0gR2VvbWV0cnkuZ2V0U2l6ZU9mRWxlbWVudChlbGVtZW50KS5tdWx0KDAuNSlcbiAgICAgIGNvbnN0IHN0YXJ0ID0gR2VvbWV0cnkuZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKGFuZ2xlLCB0aGlzLm9wdGlvbnMuc3RhcnRSYWRpdXMsIHRoaXMub3B0aW9ucy5jZW50ZXIpLnN1YihoYWxmU2l6ZSlcbiAgICAgIGNvbnN0IGVuZCA9IEdlb21ldHJ5LmdldFBvaW50RnJvbVJhZGlhbFN5c3RlbShhbmdsZSwgdGhpcy5vcHRpb25zLmVuZFJhZGl1cywgdGhpcy5vcHRpb25zLmNlbnRlcikuc3ViKGhhbGZTaXplKVxuICAgICAgY29uc3QgYm91bmQgPSBib3VuZFRvTGluZShzdGFydCwgZW5kKVxuXG4gICAgICByZXR1cm4gbmV3IERyYWdnYWJsZShlbGVtZW50LCB7XG4gICAgICAgIHBhcmVudDogdGhpcy5hcmVhLFxuICAgICAgICBib3VuZDogYm91bmQsXG4gICAgICAgIHBvc2l0aW9uOiBzdGFydCxcbiAgICAgICAgb25Nb3ZlOiAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5kcmF3KClcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG5cbiAgICB0aGlzLmlzSW5pdCA9IHRydWVcbiAgICB0aGlzLmRyYXcoKVxuICB9XG5cbiAgZHJhdygpIHtcbiAgICBpZiAoIXRoaXMuaXNJbml0KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmFyZWFSZWN0YW5nbGUuc2l6ZS54LCB0aGlzLmFyZWFSZWN0YW5nbGUuc2l6ZS55KVxuICAgIHRoaXMuY29udGV4dC5iZWdpblBhdGgoKVxuXG4gICAgbGV0IHBvaW50ID0gdGhpcy5kcmFnZ2FibGVzWzBdLmdldENlbnRlcigpXG4gICAgdGhpcy5jb250ZXh0Lm1vdmVUbyhwb2ludC54LCBwb2ludC55KVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRyYWdnYWJsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHBvaW50ID0gdGhpcy5kcmFnZ2FibGVzW2ldLmdldENlbnRlcigpXG4gICAgICB0aGlzLmNvbnRleHQubGluZVRvKHBvaW50LngsIHBvaW50LnkpXG4gICAgfVxuICAgIHRoaXMuY29udGV4dC5jbG9zZVBhdGgoKVxuICAgIHRoaXMuY29udGV4dC5saW5lV2lkdGggPSB0aGlzLm9wdGlvbnMubGluZVdpZHRoXG4gICAgdGhpcy5jb250ZXh0LnN0cm9rZVN0eWxlID0gdGhpcy5vcHRpb25zLnN0cm9rZVN0eWxlXG4gICAgdGhpcy5jb250ZXh0LnN0cm9rZSgpXG4gICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IHRoaXMub3B0aW9ucy5maWxsU3R5bGVcbiAgICB0aGlzLmNvbnRleHQuZmlsbCgpXG4gIH1cbn1cblxuZXhwb3J0IHsgc3BpZGVycywgU3BpZGVyIH1cbiIsImltcG9ydCB7XG4gIGdldERlZmF1bHRQYXJlbnQsXG4gIHJlbW92ZUl0ZW0sXG4gIHJhbmdlXG59IGZyb20gJy4vdXRpbCdcblxuaW1wb3J0IEV2ZW50IGZyb20gJy4vZXZlbnQnXG5pbXBvcnQgeyBHZW9tZXRyeSB9IGZyb20gJy4vZ2VvbWV0cnknXG5pbXBvcnQgeyBwb3NpdGlvblR5cGUsIHNvcnRpbmdGYWN0b3J5LCBwb3NpdGlvbkZhY3RvcnkgfSBmcm9tICcuL3Bvc2l0aW9uaW5nJ1xuaW1wb3J0IHsgc2NvcGVzLCBkZWZhdWx0U2NvcGUgfSBmcm9tICcuL3Njb3BlJ1xuXG5jb25zdCBEcmFnZWUgPSB7IHBvc2l0aW9uVHlwZSwgIHBvc2l0aW9uRmFjdG9yeSwgc29ydGluZ0ZhY3RvcnksIHNjb3BlcywgRXZlbnQgfS8vdG9kbyByZW1vdmUgYWZ0ZXIgcmVmYWN0b3JlXG5cbmNvbnN0IHRhcmdldHMgPSBbXSxcbiAgYWRkVG9EZWZhdWx0U2NvcGUgPSBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICBkZWZhdWx0U2NvcGUuYWRkVGFyZ2V0KHRhcmdldClcbiAgfVxuXG5jbGFzcyBUYXJnZXQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBkcmFnZ2FibGVzLCBvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCB0YXJnZXQgPSB0aGlzXG4gICAgY29uc3QgcGFyZW50ID0gb3B0aW9ucy5wYXJlbnQgfHwgZ2V0RGVmYXVsdFBhcmVudChlbGVtZW50KVxuXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICB0aW1lRW5kOiAyMDAsXG4gICAgICB0aW1lRXhjYW5nZTogNDAwLFxuICAgICAgcGFyZW50OiBwYXJlbnQsXG4gICAgICBzb3J0aW5nOiBEcmFnZWUuc29ydGluZ0ZhY3RvcnkoRHJhZ2VlLnBvc2l0aW9uVHlwZS5mbG9hdExlZnQpKDgwLCBHZW9tZXRyeS50cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5KHsgeDogMSwgeTogNCB9KSksXG4gICAgICBwb3NpdGlvbmluZzogRHJhZ2VlLnBvc2l0aW9uRmFjdG9yeShEcmFnZWUucG9zaXRpb25UeXBlLmZsb2F0TGVmdCkodGhpcy5nZXRSZWN0YW5nbGUuYmluZCh0aGlzKSwgeyByZW1vdmFibGU6IHRydWUgfSlcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGFyZ2V0cy5wdXNoKHRoaXMpXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUudGFyZ2V0cy5wdXNoKHRhcmdldCkpXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gZHJhZ2dhYmxlc1xuICAgIHRoaXMub25BZGQgPSBuZXcgRHJhZ2VlLkV2ZW50KHRoaXMpXG4gICAgdGhpcy5iZWZvcmVBZGQgPSBuZXcgRHJhZ2VlLkV2ZW50KHRoaXMpXG4gICAgdGhpcy5vblJlbW92ZSA9IG5ldyBEcmFnZWUuRXZlbnQodGhpcylcblxuICAgIGlmIChvcHRpb25zLm9uUmVtb3ZlKSB7XG4gICAgICB0aGlzLm9uUmVtb3ZlLmFkZChvcHRpb25zLm9uUmVtb3ZlKVxuICAgIH1cblxuICAgIGlmIChvcHRpb25zLm9uQWRkKSB7XG4gICAgICB0aGlzLm9uQWRkLmFkZChvcHRpb25zLm9uQWRkKVxuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmJlZm9yZUFkZCkge1xuICAgICAgdGhpcy5iZWZvcmVBZGQuYWRkKG9wdGlvbnMuYmVmb3JlQWRkKVxuICAgIH1cblxuICAgIFRhcmdldC5vbkNyZWF0ZS5maXJlKHRoaXMpXG5cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBsZXQgcmVjdGFuZ2xlcywgaW5kZXhlc09mTmV3XG5cbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcyA9IHRoaXMuZHJhZ2dhYmxlcy5maWx0ZXIoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgbGV0IGVsZW1lbnQgPSBkcmFnZ2FibGUuZWxlbWVudC5wYXJlbnROb2RlXG4gICAgICB3aGlsZSAoZWxlbWVudCkge1xuICAgICAgICBpZiAoZWxlbWVudCA9PT0gdGhpcy5lbGVtZW50KSB7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlXG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9KVxuXG4gICAgaWYgKHRoaXMuaW5uZXJEcmFnZ2FibGVzLmxlbmd0aCkge1xuICAgICAgaW5kZXhlc09mTmV3ID0gcmFuZ2UodGhpcy5pbm5lckRyYWdnYWJsZXMubGVuZ3RoKVxuICAgICAgcmVjdGFuZ2xlcyA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgICB9KSwgaW5kZXhlc09mTmV3KVxuICAgICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXcpXG4gICAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHRoaXMub25BZGQuZmlyZShkcmFnZ2FibGUpKVxuICAgIH1cbiAgfVxuXG4gIGdldFJlY3RhbmdsZSgpIHtcbiAgICByZXR1cm4gR2VvbWV0cnkuY3JlYXRlUmVjdGFuZ2xlRnJvbUVsZW1lbnQoXG4gICAgICB0aGlzLmVsZW1lbnQsXG4gICAgICB0aGlzLm9wdGlvbnMucGFyZW50LFxuICAgICAgdGhpcy5vcHRpb25zLmlzQ29udGVudEJveFNpemUsXG4gICAgICB0cnVlXG4gICAgKVxuICB9XG5cbiAgY2F0Y2hEcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5jYXRjaERyYWdnYWJsZSkge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5jYXRjaERyYWdnYWJsZSh0aGlzLCBkcmFnZ2FibGUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRhcmdldFJlY3RhbmdsZSA9IHRoaXMuZ2V0UmVjdGFuZ2xlKClcbiAgICAgIGNvbnN0IGRyYWdnYWJsZVNxdWFyZSA9IGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKS5nZXRTcXVhcmUoKVxuXG4gICAgICByZXR1cm4gZHJhZ2dhYmxlU3F1YXJlIDwgdGFyZ2V0UmVjdGFuZ2xlLmdldFNxdWFyZSgpXG4gICAgICAgICAgICAgICYmIHRhcmdldFJlY3RhbmdsZS5pbmNsdWRlUG9pbnQoZHJhZ2dhYmxlLmdldENlbnRlcigpKVxuICAgIH1cbiAgfVxuXG4gIGdldFBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFJlY3RhbmdsZSgpLnBvc2l0aW9uXG4gIH1cblxuICBnZXRTaXplKCkge1xuICAgIHJldHVybiB0aGlzLmdldFJlY3RhbmdsZSgpLnNpemVcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgRHJhZ2VlLnNjb3Blcy5mb3JFYWNoKChzY29wZSkgPT4gcmVtb3ZlSXRlbShzY29wZS50YXJnZXRzLCB0aGlzKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBbXSlcbiAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIFtdLCAwKVxuICB9XG5cbiAgb25FbmQoZHJhZ2dhYmxlKSB7XG4gICAgY29uc3QgbmV3RHJhZ2dhYmxlc0luZGV4ID0gW11cbiAgICBjb25zdCBpbmNsdWRlUG9pbnQgPSB0aGlzLmdldFJlY3RhbmdsZSgpLmluY2x1ZGVQb2ludChkcmFnZ2FibGUuZ2V0UG9zaXRpb24oKSlcblxuICAgIGlmICghaW5jbHVkZVBvaW50KSB7XG4gICAgICBpZiAodGhpcy5nZXRSZWN0YW5nbGUoKS5pbmNsdWRlUG9pbnQoZHJhZ2dhYmxlLmdldENlbnRlcigpKSkge1xuICAgICAgICBkcmFnZ2FibGUucG9zaXRpb24gPSBkcmFnZ2FibGUuZ2V0Q2VudGVyKCkuY2xvbmUoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5iZWZvcmVBZGQuZmlyZShkcmFnZ2FibGUpXG5cbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcyA9IHRoaXMub3B0aW9ucy5zb3J0aW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLCBbZHJhZ2dhYmxlXSwgbmV3RHJhZ2dhYmxlc0luZGV4KVxuICAgIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLm9wdGlvbnMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgbmV3RHJhZ2dhYmxlc0luZGV4LCBkcmFnZ2FibGUpXG5cbiAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIG5ld0RyYWdnYWJsZXNJbmRleClcbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMSkge1xuICAgICAgdGhpcy5hZGRSZW1vdmVPbk1vdmUoZHJhZ2dhYmxlKVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgaW5kZXhlc09mTmV3LCB0aW1lKSB7XG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuc2xpY2UoMCkuZm9yRWFjaCgoZHJhZ2dhYmxlLCBpKSA9PiB7XG4gICAgICBjb25zdCByZWN0ID0gcmVjdGFuZ2xlc1tpXSxcbiAgICAgICAgdGltZUVuZCA9IHRpbWUgfHwgdGltZSA9PT0gMCA/IHRpbWUgOiBpbmRleGVzT2ZOZXcuaW5kZXhPZihpKSAhPT0gLTEgPyB0aGlzLm9wdGlvbnMudGltZUVuZCA6IHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZVxuXG4gICAgICBpZiAocmVjdC5yZW1vdmFibGUpIHtcbiAgICAgICAgZHJhZ2dhYmxlLm1vdmUoZHJhZ2dhYmxlLmluaXRQb3NpdGlvbiwgdGltZUVuZCwgdHJ1ZSwgdHJ1ZSlcbiAgICAgICAgcmVtb3ZlSXRlbSh0aGlzLmlubmVyRHJhZ2dhYmxlcywgZHJhZ2dhYmxlKVxuXG4gICAgICAgIHRoaXMub25SZW1vdmUuZmlyZShkcmFnZ2FibGUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkcmFnZ2FibGUubW92ZShyZWN0LnBvc2l0aW9uLCB0aW1lRW5kLCB0cnVlLCB0cnVlKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBhZGQoZHJhZ2dhYmxlLCB0aW1lKSB7XG4gICAgY29uc3QgbmV3RHJhZ2dhYmxlc0luZGV4ID0gdGhpcy5pbm5lckRyYWdnYWJsZXMubGVuZ3RoXG5cbiAgICB0aGlzLmJlZm9yZUFkZC5maXJlKGRyYWdnYWJsZSlcblxuICAgIHRoaXMucHVzaElubmVyRHJhZ2dhYmxlKGRyYWdnYWJsZSlcbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgfSksIG5ld0RyYWdnYWJsZXNJbmRleCwgZHJhZ2dhYmxlKVxuXG4gICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBbbmV3RHJhZ2dhYmxlc0luZGV4XSwgdGltZSB8fCAwKVxuICAgIGlmICh0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkgIT09IC0xKSB7XG4gICAgICB0aGlzLmFkZFJlbW92ZU9uTW92ZShkcmFnZ2FibGUpXG4gICAgfVxuICB9XG5cbiAgcHVzaElubmVyRHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIGlmICh0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSk9PT0tMSkge1xuICAgICAgdGhpcy5pbm5lckRyYWdnYWJsZXMucHVzaChkcmFnZ2FibGUpXG4gICAgfVxuICB9XG5cbiAgYWRkUmVtb3ZlT25Nb3ZlKGRyYWdnYWJsZSkge1xuICAgIGRyYWdnYWJsZS5vbk1vdmUuYWRkKHRoaXMucmVtb3ZlSGFuZGxlciA9ICgpID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlKGRyYWdnYWJsZSlcbiAgICB9KVxuXG4gICAgdGhpcy5vbkFkZC5maXJlKGRyYWdnYWJsZSlcbiAgfVxuXG4gIHJlbW92ZShkcmFnZ2FibGUpIHtcbiAgICBkcmFnZ2FibGUub25Nb3ZlLnJlbW92ZSh0aGlzLnJlbW92ZUhhbmRsZXIpXG5cbiAgICBjb25zdCBpbmRleCA9IHRoaXMuaW5uZXJEcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKVxuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnNwbGljZShpbmRleCwgMSlcblxuICAgIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLm9wdGlvbnMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgW10pXG5cbiAgICB0aGlzLnNldFBvc2l0aW9uKHJlY3RhbmdsZXMsIFtdKVxuICAgIHRoaXMub25SZW1vdmUuZmlyZShkcmFnZ2FibGUpXG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5tb3ZlKGRyYWdnYWJsZS5pbml0UG9zaXRpb24sIDAsIHRydWUsIHRydWUpXG4gICAgICB0aGlzLm9uUmVtb3ZlLmZpcmUoZHJhZ2dhYmxlKVxuICAgIH0pXG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMgPSBbXVxuICB9XG5cbiAgZ2V0U29ydGVkRHJhZ2dhYmxlcygpIHtcbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5zbGljZSgpXG4gIH1cbn1cblxuVGFyZ2V0Lm9uQ3JlYXRlID0gbmV3IERyYWdlZS5FdmVudChUYXJnZXQsIHsgaXNSZXZlcnNlOiB0cnVlLCBpc1N0b3BPblRydWU6IHRydWUgfSlcblRhcmdldC5vbkNyZWF0ZS5hZGQoYWRkVG9EZWZhdWx0U2NvcGUpXG5cbmV4cG9ydCB7IHRhcmdldHMsIFRhcmdldCB9XG4iLCIndXNlIHN0cmljdCdcblxuZnVuY3Rpb24gZ2V0RGVmYXVsdFBhcmVudChlbGVtZW50KSB7XG4gIGxldCBwYXJlbnQgPSBlbGVtZW50LnBhcmVudE5vZGVcbiAgd2hpbGUgKHBhcmVudC5wYXJlbnROb2RlICYmIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHBhcmVudClbJ3Bvc2l0aW9uJ10gPT09ICdzdGF0aWMnKSB7XG4gICAgcGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGVcbiAgfVxuICByZXR1cm4gcGFyZW50XG59XG5cbmZ1bmN0aW9uIGdldFRvdWNoQnlJRChlbGVtZW50LCB0b3VjaElkKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudC5jaGFuZ2VkVG91Y2hlcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChlbGVtZW50LmNoYW5nZWRUb3VjaGVzW2ldLmlkZW50aWZpZXIgPT09IHRvdWNoSWQpIHtcbiAgICAgIHJldHVybiBlbGVtZW50LmNoYW5nZWRUb3VjaGVzW2ldXG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZVxufVxuXG5mdW5jdGlvbiByYW5nZShzdGFydCwgc3RvcCwgc3RlcCkge1xuICBjb25zdCByZXN1bHQgPSBbXVxuICBpZiAodHlwZW9mIHN0b3AgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgc3RvcCA9IHN0YXJ0XG4gICAgc3RhcnQgPSAwXG4gIH1cbiAgaWYgKHR5cGVvZiBzdGVwID09PSAndW5kZWZpbmVkJykge1xuICAgIHN0ZXAgPSAxXG4gIH1cbiAgaWYgKChzdGVwID4gMCAmJiBzdGFydCA+PSBzdG9wKSB8fCAoc3RlcCA8IDAgJiYgc3RhcnQgPD0gc3RvcCkpIHtcbiAgICByZXR1cm4gW11cbiAgfVxuICBmb3IgKGxldCBpID0gc3RhcnQ7IHN0ZXAgPiAwID8gaSA8IHN0b3AgOiBpID4gc3RvcDsgaSArPSBzdGVwKSB7XG4gICAgcmVzdWx0LnB1c2goaSlcbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmZ1bmN0aW9uIGhhc0NsYXNzKGVsZW1lbnQsIGMpIHtcbiAgY29uc3QgcmUgPSBuZXcgUmVnRXhwKCcoXnxcXFxccyknICsgYyArICcoXFxcXHN8JCknLCAnZycpXG4gIHJldHVybiAocmUudGVzdChlbGVtZW50LmNsYXNzTmFtZSkpXG59XG5cbmZ1bmN0aW9uIGFkZENsYXNzKGVsZW1lbnQsIGMpIHtcbiAgaWYgKCFoYXNDbGFzcyhlbGVtZW50LCBjKSkge1xuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gKGVsZW1lbnQuY2xhc3NOYW1lICsgJyAnICsgYykucmVwbGFjZSgvXFxzKy9nLCAnICcpLnJlcGxhY2UoLyheIHwgJCkvZywgJycpXG4gIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoZWxlbWVudCwgYykge1xuICBjb25zdCByZSA9IG5ldyBSZWdFeHAoJyhefFxcXFxzKScgKyBjICsgJyhcXFxcc3wkKScsICdnJylcbiAgZWxlbWVudC5jbGFzc05hbWUgPSBlbGVtZW50LmNsYXNzTmFtZS5yZXBsYWNlKHJlLCAnJDEnKS5yZXBsYWNlKC9cXHMrL2csICcgJykucmVwbGFjZSgvKF4gfCAkKS9nLCAnJylcbn1cblxuZnVuY3Rpb24gcmVtb3ZlSXRlbShhcnJheSwgdmFsKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoYXJyYXlbaV0gPT09IHZhbCkge1xuICAgICAgYXJyYXkuc3BsaWNlKGksIDEpXG4gICAgICBpLS1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycmF5XG59XG5cbmNvbnN0IHV0aWwgPSB7XG4gIGdldERlZmF1bHRQYXJlbnQsXG4gIGdldFRvdWNoQnlJRCxcbiAgcmFuZ2UsXG4gIGhhc0NsYXNzLFxuICBhZGRDbGFzcyxcbiAgcmVtb3ZlQ2xhc3MsXG4gIHJlbW92ZUl0ZW1cbn1cblxuZXhwb3J0IHtcbiAgZ2V0RGVmYXVsdFBhcmVudCxcbiAgZ2V0VG91Y2hCeUlELFxuICByYW5nZSxcbiAgaGFzQ2xhc3MsXG4gIGFkZENsYXNzLFxuICByZW1vdmVDbGFzcyxcbiAgcmVtb3ZlSXRlbVxufVxuXG5leHBvcnQgZGVmYXVsdCB1dGlsXG4iLCJmdW5jdGlvbiBzZXRTdHlsZShlbGVtZW50LCBzdHlsZSkge1xuICBzdHlsZSA9IHN0eWxlIHx8IHt9XG4gIGxldCBjc3NUZXh0ID0gJydcbiAgZm9yIChjb25zdCBrZXkgaW4gc3R5bGUpIHtcbiAgICBpZiAoc3R5bGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgY3NzVGV4dCArPSBrZXkgKyAnOiAnICsgc3R5bGVba2V5XSArICc7ICdcbiAgICB9XG4gIH1cblxuICBlbGVtZW50LnN0eWxlLmNzc1RleHQgPSBjc3NUZXh0XG59XG5cbmZ1bmN0aW9uIGFwcGVuZEZpcnN0Q2hpbGQoZWxlbWVudCwgbm9kZSkge1xuICBpZiAoZWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgZWxlbWVudC5pbnNlcnRCZWZvcmUobm9kZSwgZWxlbWVudC5maXJzdENoaWxkKVxuICB9IGVsc2Uge1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQobm9kZSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVDYW52YXMoYXJlYSwgcmVjdGFnbGUpIHtcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJylcbiAgaWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGFyZWEpLnBvc2l0aW9uID09PSAnc3RhdGljJykge1xuICAgIGFyZWEuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnXG4gIH1cblxuICBjYW52YXMuc2V0QXR0cmlidXRlKCd3aWR0aCcsIHJlY3RhZ2xlLnNpemUueCArICdweCcpXG4gIGNhbnZhcy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIHJlY3RhZ2xlLnNpemUueSArICdweCcpXG4gIHNldFN0eWxlKGNhbnZhcywge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGxlZnQ6IHJlY3RhZ2xlLnBvc2l0aW9uLnkgKyAncHgnLFxuICAgIHRvcDogcmVjdGFnbGUucG9zaXRpb24ueSArICdweCcsXG4gICAgd2lkdGg6IHJlY3RhZ2xlLnNpemUueCArICdweCcsXG4gICAgaGVpZ2h0OiByZWN0YWdsZS5zaXplLnkgKyAncHgnXG4gIH0pXG4gIGFwcGVuZEZpcnN0Q2hpbGQoYXJlYSwgY2FudmFzKVxuICByZXR1cm4gY2FudmFzXG59XG4iXSwic291cmNlUm9vdCI6IiJ9